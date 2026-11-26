export const id = 280;
export const ids = [280];
export const modules = {
  41489: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      g: () => vH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41398),
      hH = LH(37997),
      tH = LH(37963),
      zH = LH(41498),
      CH = LH(39595),
      EH = LH(38012),
      XH = LH(41169),
      GH = LH(38966),
      YH = LH(38610),
      uH = LH(41247),
      QH = LH(41319);
    let WH = (() => {
      var HH;
      let BH, LH, EH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH = zH.b,
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        nH = [],
        FH = [],
        DH = [],
        wH = [],
        ZH = [],
        dH = [],
        aH = [],
        sH = [],
        JH = [],
        iH = [],
        pH = [],
        yH = [],
        HB = [],
        BB = [],
        LB = [],
        AB = [],
        rB = [];
      return HH = class extends lH {
        get position() {
          return this._position
        }
        set position(HH) {
          this._position = HH
        }
        set upVector(HH) {
          this._upVector = HH
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let BH, LH;
          if (this.mode === HH.PERSPECTIVE_CAMERA) this.fovMode === HH.FOVMODE_VERTICAL_FIXED ? (LH = 2 * this.minZ * Math.tan(this.fov / 2), BH = this.Iu().getAspectRatio(this) * LH) : (BH = 2 * this.minZ * Math.tan(this.fov / 2), LH = BH / this.Iu().getAspectRatio(this));
          else {
            const HH = this.Iu().getRenderWidth() / 2,
              AH = this.Iu().getRenderHeight() / 2;
            BH = (this.orthoRight ?? HH) - (this.orthoLeft ?? -HH), LH = (this.orthoTop ?? AH) - (this.orthoBottom ?? -AH)
          }
          return BH * LH
        }
        set orthoLeft(HH) {
          this._orthoLeft = HH;
          for (const BH of this._rigCameras) BH.orthoLeft = HH
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(HH) {
          this._orthoRight = HH;
          for (const BH of this._rigCameras) BH.orthoRight = HH
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(HH) {
          this._orthoBottom = HH;
          for (const BH of this._rigCameras) BH.orthoBottom = HH
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(HH) {
          this._orthoTop = HH;
          for (const BH of this._rigCameras) BH.orthoTop = HH
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(BH / (2 * HH))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(HH) {
          this._baseInertia = HH
        }
        set mode(HH) {
          this._mode = HH;
          for (const BH of this._rigCameras) BH.mode = HH
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(BH, LH, rH) {
          let zH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, uH.c)(), super(BH, rH, !1), this.inputs = (0, AH.k)(this, KH), this._position = (0, AH.k)(this, cH, tH.o.Zero()), this._upVector = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, tH.o.Up())), this.oblique = ((0, AH.k)(this, gH), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, AH.k)(this, NH, .8), this.projectionPlaneTilt = ((0, AH.k)(this, RH), (0, AH.k)(this, jH, 0)), this.minZ = ((0, AH.k)(this, nH), (0, AH.k)(this, FH, 1)), this.maxZ = ((0, AH.k)(this, DH), (0, AH.k)(this, wH, 1e4)), this._baseInertia = ((0, AH.k)(this, ZH), .9), this._mode = HH.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new GH.c(0, 0, 1, 1), this.layerMask = (0, AH.k)(this, dH, 268435455), this.fovMode = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, HH.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, HH.RIG_MODE_NONE)), this.interaxialDistance = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, void 0)), this.isStereoscopicSideBySide = ((0, AH.k)(this, HB), (0, AH.k)(this, BB, void 0)), this.ignoreCameraMaxZ = ((0, AH.k)(this, LB), (0, AH.k)(this, AB, !1)), this.customRenderTargets = ((0, AH.k)(this, rB), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new hH.d, this.onProjectionMatrixChangedObservable = new hH.d, this.onAfterCheckInputsObservable = new hH.d, this.onRestoreStateObservable = new hH.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new tH.e, this._postProcesses = new Array, this._activeMeshes = new SH.i(256), this._globalPosition = tH.o.Zero(), this._computedViewMatrix = tH.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = tH.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = tH.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.yN().defaultCameraLayerMask, this.yN().addCamera(this), zH && !this.yN().activeCamera && (this.yN().activeCamera = this), this.position = LH, this.renderPassId = this.yN().Iu().createRenderPassId(`Camera ${BH}`)
        }
        storeState() {
          return this._stateStored = !0, this._storedFov = this.fov, this
        }
        hasStateStored() {
          return !!this._stateStored
        }
        _restoreStateValues() {
          return !!this._stateStored && (this.fov = this._storedFov, !0)
        }
        restoreState() {
          return !!this._restoreStateValues() && (this.onRestoreStateObservable.notifyObservers(this), !0)
        }
        getClassName() {
          return "wW"
        }
        toString(HH) {
          let BH = "Name: " + this.name;
          if (BH += ", type: " + this.getClassName(), this.animations)
            for (let LH = 0; LH < this.animations.length; LH++) BH += ", animation[0]: " + this.animations[LH].toString(HH);
          return BH
        }
        applyVerticalCorrection() {
          const HH = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -HH.x : HH.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(HH) {
          return -1 !== this._activeMeshes.indexOf(HH)
        }
        isReady() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (HH)
            for (const BH of this._postProcesses)
              if (BH && !BH.isReady()) return !1;
          return super.isReady(HH)
        }
        _initCache() {
          super._initCache(), this._cache.position = new tH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new tH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(HH) {
          HH || super._updateCache(), this._cache.position.Tm(this.position), this._cache.upVector.Tm(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const BH = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let LH = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === BH;
          if (!LH) return !1;
          const AH = this.Iu();
          return this.mode === HH.PERSPECTIVE_CAMERA ? LH = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === AH.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (LH = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === AH.getRenderWidth() && this._cache.renderHeight === AH.getRenderHeight(), this.oblique && (LH = LH && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), LH
        }
        attachControl(HH, BH) {}
        detachControl(HH) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== HH.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
        }
        _checkInputs() {
          this.onAfterCheckInputsObservable.notifyObservers(this)
        }
        get rigCameras() {
          return this._rigCameras
        }
        get rigPostProcess() {
          return this._rigPostProcess
        }
        _getFirstPostProcess() {
          for (let HH = 0; HH < this._postProcesses.length; HH++)
            if (null !== this._postProcesses[HH]) return this._postProcesses[HH];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const HH = this._getFirstPostProcess();
          HH && HH.markTextureDirty();
          for (let BH = 0, LH = this._rigCameras.length; BH < LH; BH++) {
            const HH = this._rigCameras[BH],
              LH = HH._rigPostProcess;
            if (LH) {
              "pass" === LH.getEffectName() && (HH.isIntermediate = 0 === this._postProcesses.length), HH._postProcesses = this._postProcesses.slice(0).concat(LH), LH.markTextureDirty()
            } else HH._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !HH.isReusable() && this._postProcesses.indexOf(HH) > -1 ? (CH.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == BH || BH < 0 ? this._postProcesses.push(HH) : null === this._postProcesses[BH] ? this._postProcesses[BH] = HH : this._postProcesses.splice(BH, 0, HH), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.dLH(), this._postProcesses.indexOf(HH))
        }
        detachPostProcess(HH) {
          const BH = this._postProcesses.indexOf(HH); - 1 !== BH && (this._postProcesses[BH] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.dLH(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return tH.e.Identity()
        }
        getViewMatrix(HH) {
          return !HH && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.yN().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(HH) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== HH && (this._projectionMatrix = HH)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(BH) {
          if (this._doNotComputeProjectionMatrix || !BH && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const LH = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = LH, this._refreshFrustumPlanes = !0;
          const AH = this.Iu(),
            rH = this.yN(),
            SH = AH.WrH;
          if (this.mode === HH.PERSPECTIVE_CAMERA) {
            let BH;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = AH.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), BH = rH.useRightHandedSystem ? tH.e.PerspectiveFovRHToRef : tH.e.PerspectiveFovLHToRef, BH(this.fov, AH.getAspectRatio(this), SH ? LH : this.minZ, SH ? this.minZ : LH, this._projectionMatrix, this.fovMode === HH.FOVMODE_VERTICAL_FIXED, AH.isNDCHalfZRange, this.projectionPlaneTilt, SH)
          } else {
            const HH = AH.getRenderWidth() / 2,
              BH = AH.getRenderHeight() / 2;
            rH.useRightHandedSystem ? this.oblique ? tH.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -HH, this.orthoRight ?? HH, this.orthoBottom ?? -BH, this.orthoTop ?? BH, SH ? LH : this.minZ, SH ? this.minZ : LH, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, AH.isNDCHalfZRange) : tH.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -HH, this.orthoRight ?? HH, this.orthoBottom ?? -BH, this.orthoTop ?? BH, SH ? LH : this.minZ, SH ? this.minZ : LH, this._projectionMatrix, AH.isNDCHalfZRange) : this.oblique ? tH.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -HH, this.orthoRight ?? HH, this.orthoBottom ?? -BH, this.orthoTop ?? BH, SH ? LH : this.minZ, SH ? this.minZ : LH, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, AH.isNDCHalfZRange) : tH.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -HH, this.orthoRight ?? HH, this.orthoBottom ?? -BH, this.orthoTop ?? BH, SH ? LH : this.minZ, SH ? this.minZ : LH, this._projectionMatrix, AH.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = AH.getRenderWidth(), this._cache.renderHeight = AH.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(HH) {
          return (this.radius || (this.target ? tH.o.Distance(this.position, this.target) : this.position.length())) + HH
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? YH.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = YH.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), BH && this.rigCameras.length > 0) {
            let BH = !1;
            for (const LH of this.rigCameras) LH._updateFrustumPlanes(), BH = BH || HH.isInFrustum(LH._frustumPlanes);
            return BH
          }
          return HH.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(HH) {
          return this._updateFrustumPlanes(), HH.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, XH.i)("Ray")
        }
        getForwardRayToRef(HH) {
          throw (0, XH.i)("Ray")
        }
        dispose(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.yN().stopAnimation(this), this.yN().removeCamera(this); this._rigCameras.length > 0;) {
            const HH = this._rigCameras.pop();
            HH && HH.dispose()
          }
          if (this._parentContainer) {
            const HH = this._parentContainer.cameras.indexOf(this);
            HH > -1 && this._parentContainer.cameras.splice(HH, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== HH.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let HH = this._postProcesses.length;
            for (; --HH >= 0;) {
              const BH = this._postProcesses[HH];
              BH && BH.dispose(this)
            }
          }
          let AH = this.customRenderTargets.length;
          for (; --AH >= 0;) this.customRenderTargets[AH].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.yN().Iu().releaseRenderPassId(this.renderPassId), super.dispose(BH, LH)
        }
        get isLeftCamera() {
          return this._isLeftCamera
        }
        get isRightCamera() {
          return this._isRightCamera
        }
        get leftCamera() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0]
        }
        get rightCamera() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1]
        }
        getLeftTarget() {
          return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget()
        }
        getRightTarget() {
          return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget()
        }
        setCameraRigMode(BH, LH) {
          if (this.cameraRigMode !== BH) {
            for (; this._rigCameras.length > 0;) {
              const HH = this._rigCameras.pop();
              HH && HH.dispose()
            }
            if (this.cameraRigMode = BH, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = LH.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== HH.RIG_MODE_NONE) {
              const HH = this.createRigCamera(this.name + "_L", 0);
              HH && (HH._isLeftCamera = !0);
              const BH = this.createRigCamera(this.name + "_R", 1);
              BH && (BH._isRightCamera = !0), HH && BH && (this._rigCameras.push(HH), this._rigCameras.push(BH))
            }
            this._setRigMode(LH), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(HH) {}
        _getVRProjectionMatrix() {
          return tH.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Iu().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(HH, BH) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[HH] = BH, "interaxialDistance" === HH && (this._cameraRigParams.stereoHalfAngle = BH / .0637 * (Math.PI / 180))
        }
        createRigCamera(HH, BH) {
          return null
        }
        _updateRigCameras() {
          for (let HH = 0; HH < this._rigCameras.length; HH++) this._rigCameras[HH].minZ = this.minZ, this._rigCameras[HH].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[HH].fov = this.fov, this._rigCameras[HH].upVector.Tm(this.upVector);
          this.cameraRigMode === HH.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const HH = QH.c.Serialize(this);
          return HH.uniqueId = this.uniqueId, HH.type = this.getClassName(), this.parent && this.parent._serializeAsParent(HH), this.inputs && this.inputs.serialize(HH), QH.c.AppendSerializedAnimations(this, HH), HH.rW = this.serializeAnimationRanges(), HH.isEnabled = this.isEnabled(), HH
        }
        clone(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const AH = QH.c.Clone(HH.GetConstructorFromName(this.getClassName(), BH, this.yN(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return AH.name = BH, AH.parent = LH, this.onClonedObservable.notifyObservers(AH), AH
        }
        T_(HH) {
          const BH = tH.o.Zero();
          return this.getDirectionToRef(HH, BH), BH
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(HH, BH) {
          tH.o.TransformNormalToRef(HH, this.getWorldMatrix(), BH)
        }
        static GetConstructorFromName(BH, LH, AH) {
          let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            SH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const hH = zH.b.Construct(BH, LH, AH, {
            interaxial_distance: rH,
            isStereoscopicSideBySide: SH
          });
          return hH || (() => HH._CreateDefaultParsedCamera(LH, AH))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let HH = this.yN().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (HH *= -1), HH
        }
      }, (() => {
        const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(lH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, rH.F)("position")], LH = [(0, rH.F)("upVector")], EH = [(0, rH.H)()], WH = [(0, rH.H)()], MH = [(0, rH.H)()], xH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], IH = [(0, rH.H)()], fH = [(0, rH.H)()], (0, AH.g)(HH, null, EH, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoLeft" in HH,
            get: HH => HH.orthoLeft
          },
          metadata: SH
        }, null, KH), (0, AH.g)(HH, null, WH, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoRight" in HH,
            get: HH => HH.orthoRight
          },
          metadata: SH
        }, null, KH), (0, AH.g)(HH, null, MH, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoBottom" in HH,
            get: HH => HH.orthoBottom
          },
          metadata: SH
        }, null, KH), (0, AH.g)(HH, null, xH, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: HH => "orthoTop" in HH,
            get: HH => HH.orthoTop
          },
          metadata: SH
        }, null, KH), (0, AH.g)(HH, null, VH, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: HH => "inertia" in HH,
            get: HH => HH.inertia
          },
          metadata: SH
        }, null, KH), (0, AH.g)(HH, null, OH, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: HH => "mode" in HH,
            get: HH => HH.mode
          },
          metadata: SH
        }, null, KH), (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: HH => "_position" in HH,
            get: HH => HH._position,
            set: (HH, BH) => {
              HH._position = BH
            }
          },
          metadata: SH
        }, cH, eH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: HH => "_upVector" in HH,
            get: HH => HH._upVector,
            set: (HH, BH) => {
              HH._upVector = BH
            }
          },
          metadata: SH
        }, qH, gH), (0, AH.g)(null, null, vH, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: HH => "fov" in HH,
            get: HH => HH.fov,
            set: (HH, BH) => {
              HH.fov = BH
            }
          },
          metadata: SH
        }, NH, RH), (0, AH.g)(null, null, PH, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: HH => "projectionPlaneTilt" in HH,
            get: HH => HH.projectionPlaneTilt,
            set: (HH, BH) => {
              HH.projectionPlaneTilt = BH
            }
          },
          metadata: SH
        }, jH, nH), (0, AH.g)(null, null, TH, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "minZ" in HH,
            get: HH => HH.minZ,
            set: (HH, BH) => {
              HH.minZ = BH
            }
          },
          metadata: SH
        }, FH, DH), (0, AH.g)(null, null, UH, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "maxZ" in HH,
            get: HH => HH.maxZ,
            set: (HH, BH) => {
              HH.maxZ = BH
            }
          },
          metadata: SH
        }, wH, ZH), (0, AH.g)(null, null, bH, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "layerMask" in HH,
            get: HH => HH.layerMask,
            set: (HH, BH) => {
              HH.layerMask = BH
            }
          },
          metadata: SH
        }, dH, aH), (0, AH.g)(null, null, kH, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "fovMode" in HH,
            get: HH => HH.fovMode,
            set: (HH, BH) => {
              HH.fovMode = BH
            }
          },
          metadata: SH
        }, sH, JH), (0, AH.g)(null, null, mH, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "cameraRigMode" in HH,
            get: HH => HH.cameraRigMode,
            set: (HH, BH) => {
              HH.cameraRigMode = BH
            }
          },
          metadata: SH
        }, iH, pH), (0, AH.g)(null, null, oH, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "interaxialDistance" in HH,
            get: HH => HH.interaxialDistance,
            set: (HH, BH) => {
              HH.interaxialDistance = BH
            }
          },
          metadata: SH
        }, yH, HB), (0, AH.g)(null, null, IH, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: HH => "isStereoscopicSideBySide" in HH,
            get: HH => HH.isStereoscopicSideBySide,
            set: (HH, BH) => {
              HH.isStereoscopicSideBySide = BH
            }
          },
          metadata: SH
        }, BB, LB), (0, AH.g)(null, null, fH, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: HH => "ignoreCameraMaxZ" in HH,
            get: HH => HH.ignoreCameraMaxZ,
            set: (HH, BH) => {
              HH.ignoreCameraMaxZ = BH
            }
          },
          metadata: SH
        }, AB, rB), SH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SH
        })
      })(), HH._CreateDefaultParsedCamera = (HH, BH) => {
        throw (0, XH.i)("UniversalCamera")
      }, HH.PERSPECTIVE_CAMERA = 0, HH.ORTHOGRAPHIC_CAMERA = 1, HH.FOVMODE_VERTICAL_FIXED = 0, HH.FOVMODE_HORIZONTAL_FIXED = 1, HH.RIG_MODE_NONE = 0, HH.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, HH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, HH.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, HH.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, HH.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, HH.RIG_MODE_VR = 20, HH.RIG_MODE_CUSTOM = 22, HH.ForceAttachControlToAlwaysPreventDefault = !1, HH
    })();

    function MH(HH, BH) {
      const LH = HH.type,
        AH = WH.GetConstructorFromName(LH, HH.name, BH, HH.interaxial_distance, HH.isStereoscopicSideBySide),
        rH = QH.c.Parse(AH, HH, BH);
      if (void 0 !== HH.parentId && (rH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (rH._waitingParentInstanceIndex = HH.parentInstanceIndex), rH.inputs && (rH.inputs.parse(HH), rH._setupInputs()), HH.upVector && (rH.upVector = tH.o.FromArray(HH.upVector)), rH.setPosition && (rH.position.SBH(0, 0, 0), rH.setPosition(tH.o.FromArray(HH.position))), HH.target && rH.setTarget && rH.setTarget(tH.o.FromArray(HH.target)), HH.cameraRigMode) {
        const BH = HH.interaxial_distance ? {
          interaxialDistance: HH.interaxial_distance
        } : {};
        rH.setCameraRigMode(HH.cameraRigMode, BH)
      }
      if (HH.animations) {
        for (let BH = 0; BH < HH.animations.length; BH++) {
          const LH = HH.animations[BH],
            AH = (0, EH.b)("BABYLON.Animation");
          AH && rH.animations.push(AH.Parse(LH))
        }
        zH.b.ParseAnimationRanges(rH, HH, BH)
      }
      return HH.autoAnimate && BH.beginAnimation(rH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), void 0 !== HH.isEnabled && rH.vI(HH.isEnabled), rH
    }
    let xH = !1;

    function vH() {
      xH || (xH = !0, WH.Parse = MH)
    }
  },
  41509: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH) {
        this._cameraPosition = BH, this._behavior = LH, this.activeInput = !1, this.speed = 1, this.w6 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new AH.o, this.rotationAccumulatedPixels = new AH.o, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = AH.o.Zero(), this.rotationDeltaCurrentFrame = AH.o.Zero(), this._zoomVelocity = 0, this._panVelocity = new AH.o, this.referenceFrameRate = 60, this._rotationVelocity = new AH.o, this._prevFrameTimeMs = 0, this._scene = HH
      }
      computeCurrentFrameDeltas() {
        const HH = this._scene.Iu().getDeltaTime(),
          BH = this._getEffectiveDeltaMs(HH);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.IHH(0), this.rotationDeltaCurrentFrame.IHH(0), this.zoomDeltaCurrentFrame = 0, void(HH > 0 && (this._prevFrameTimeMs = HH));
        this.panDeltaCurrentFrame.IHH(0), this.rotationDeltaCurrentFrame.IHH(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.SBH(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * BH, this.panDeltaCurrentFrame), this._rotationVelocity.SBH(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.SBH(this._rotationVelocity.x * this.speed * this.rotationXSpeed * BH, this._rotationVelocity.y * this.speed * this.rotationYSpeed * BH, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.w6 * this._zoomSpeedMultiplier) * BH, HH > 0 && (this._prevFrameTimeMs = HH), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.IHH(0), this.rotationAccumulatedPixels.IHH(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.IHH(0), this.rotationAccumulatedPixels.IHH(0)
      }
      resetPanVelocity() {
        this._panVelocity.IHH(0), this.panAccumulatedPixels.IHH(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(HH) {
        const BH = this._scene.Iu().getDeltaTime(),
          LH = this._getEffectiveDeltaMs(BH),
          AH = 1e3 / this.referenceFrameRate;
        return Math.pow(HH, LH / AH)
      }
      getFrameIndependentInputScale(HH) {
        const BH = 1 - HH;
        if (BH <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(HH)) / BH
      }
      _getEffectiveDeltaMs(HH) {
        return HH > 0 ? HH : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(HH, BH, LH) {
        let AH = HH;
        const rH = this._scene.Iu().getDeltaTime(),
          SH = this._getEffectiveDeltaMs(rH);
        if (0 === SH) return AH;
        const hH = this.getFrameIndependentDecay(LH);
        if (AH *= hH, 0 !== BH || this.activeInput) {
          const HH = 1 - LH;
          AH += BH / SH * (HH > 0 ? (1 - hH) / HH : 1)
        } else Math.abs(AH) < 1e-6 && (AH = 0);
        return AH
      }
    }
  },
  41516: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      constructor(HH, BH) {
        this.inputMap = [], this.handlers = HH, this._createDefaultEntries = BH, this.resetInputMap()
      }
      resolveInteraction(HH, BH) {
        for (const LH of this.inputMap)
          if (LH.source === HH && this._entryMatches(LH, BH)) return LH;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(HH, BH, LH) {
        const AH = this.inputMap;
        for (let rH = 0; rH < AH.length; rH++) {
          const SH = AH[rH];
          if (SH.source === HH && SH.interaction === BH && this._entryConditionsMatch(SH, LH)) return SH
        }
      }
      getEntries(HH, BH, LH) {
        const AH = [],
          rH = this.inputMap;
        for (let SH = 0; SH < rH.length; SH++) {
          const hH = rH[SH];
          hH.source === HH && hH.interaction === BH && this._entryConditionsMatch(hH, LH) && AH.push(hH)
        }
        return AH
      }
      addEntry(HH) {
        const BH = this._entrySpecificity(HH);
        let LH = this.inputMap.length;
        for (let AH = 0; AH < this.inputMap.length; AH++)
          if (this._entrySpecificity(this.inputMap[AH]) < BH) {
            LH = AH;
            break
          } this.inputMap.splice(LH, 0, HH)
      }
      setInteraction(HH, BH, LH) {
        const AH = this.resolveInteraction(HH, BH);
        return AH && this._entryCoversAllConditionsOf(AH, BH) ? (AH.interaction = LH, !0) : (this.addEntry({
          source: HH,
          ...BH ?? {},
          interaction: LH
        }), !0)
      }
      _entryCoversAllConditionsOf(HH, BH) {
        if (!BH) return !0;
        const LH = HH;
        for (const AH of Object.keys(BH)) {
          const HH = BH[AH];
          if (void 0 !== HH)
            if ("modifiers" === AH) {
              const BH = LH.modifiers ?? {};
              for (const LH of Object.keys(HH))
                if (void 0 !== HH[LH] && void 0 === BH[LH]) return !1
            } else if (void 0 === LH[AH]) return !1
        }
        return !0
      }
      setInteractions(HH, BH, LH) {
        let AH = 0;
        const rH = this.inputMap;
        for (let SH = 0; SH < rH.length; SH++) {
          const hH = rH[SH];
          hH.source === HH && this._entryMatches(hH, BH) && (hH.interaction = LH, AH++)
        }
        return AH
      }
      _entryMatches(HH, BH) {
        switch (HH.source) {
          case "pointer":
            return (void 0 === HH.button || HH.button === BH?.button) && this._matchModifiers(HH.modifiers, BH?.modifiers);
          case "wheel":
            return this._matchModifiers(HH.modifiers, BH?.modifiers);
          case "touch":
            return void 0 === HH.touchCount || HH.touchCount === BH?.touchCount;
          case "keyboard":
            return (void 0 === HH.key || (Array.isArray(HH.key) ? -1 !== HH.key.indexOf(BH?.key ?? -1) : HH.key === BH?.key)) && this._matchModifiers(HH.modifiers, BH?.modifiers)
        }
      }
      _entryConditionsMatch(HH, BH) {
        if (!BH) return !0;
        switch (HH.source) {
          case "pointer":
            return (!("button" in BH) || HH.button === BH.button) && (!("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers));
          case "wheel":
            return !("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers);
          case "touch":
            return !("touchCount" in BH) || HH.touchCount === BH.touchCount;
          case "keyboard":
            if ("key" in BH) {
              if (void 0 === HH.key) return void 0 === BH.key;
              if (void 0 === BH.key || (Array.isArray(HH.key) ? -1 === HH.key.indexOf(BH.key) : HH.key !== BH.key)) return !1
            }
            return !("modifiers" in BH) || this._entryModifiersMatch(HH.modifiers, BH.modifiers)
        }
      }
      _entrySpecificity(HH) {
        let BH = 0;
        return "button" in HH && void 0 !== HH.button && BH++, "key" in HH && void 0 !== HH.key && BH++, "touchCount" in HH && void 0 !== HH.touchCount && BH++, "modifiers" in HH && HH.modifiers && BH++, BH
      }
      _matchModifiers(HH, BH) {
        return !HH || (void 0 === HH.ctrl || HH.ctrl === (BH?.ctrl ?? !1)) && ((void 0 === HH.shift || HH.shift === (BH?.shift ?? !1)) && (void 0 === HH.alt || HH.alt === (BH?.alt ?? !1)))
      }
      _entryModifiersMatch(HH, BH) {
        if (!BH) return !HH;
        return void 0 !== BH.ctrl || void 0 !== BH.shift || void 0 !== BH.alt ? (void 0 === BH.ctrl || HH?.ctrl === BH.ctrl) && ((void 0 === BH.shift || HH?.shift === BH.shift) && (void 0 === BH.alt || HH?.alt === BH.alt)) : !HH || void 0 === HH.ctrl && void 0 === HH.shift && void 0 === HH.alt
      }
    }
  },
  41483: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => MH,
      e: () => QH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41489),
      hH = LH(37963),
      tH = LH(37972),
      zH = LH(41504),
      CH = LH(41498),
      EH = LH(41509),
      XH = LH(41516);
    class GH extends EH.d {
      constructor(HH, BH, LH) {
        super(HH, BH, LH), this.input = new XH.e({
          translate: (HH, BH, LH) => {
            this.panAccumulatedPixels.x += HH, this.panAccumulatedPixels.y += BH, this.panAccumulatedPixels.z += LH
          },
          rotate: (HH, BH) => {
            this.rotationAccumulatedPixels.x += HH, this.rotationAccumulatedPixels.y += BH
          }
        }, (() => this._createDefaultInputMap()))
      }
      _createDefaultInputMap() {
        return [{
          source: "pointer",
          interaction: "rotate"
        }, {
          source: "keyboard",
          interaction: "translate"
        }, {
          source: "keyboard",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "rotate"
        }, {
          source: "touch",
          interaction: "translate"
        }]
      }
    }
    const YH = hH.e.Zero(),
      uH = hH.f.Identity();
    let QH = (() => {
        var HH;
        let BH, LH, CH, EH, XH = SH.d,
          QH = [],
          WH = [],
          MH = [],
          xH = [],
          vH = [],
          PH = [],
          TH = [],
          UH = [];
        return HH = class extends XH {
          get inertia() {
            return this._targetInertia
          }
          set inertia(HH) {
            this._targetInertia = HH, this.movement && (this.movement.panInertia = HH, this.movement.rotationInertia = HH)
          }
          constructor(HH, BH, LH) {
            super(HH, BH, LH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new hH.o(0, 0, 0), this.cameraRotation = new hH.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, AH.k)(this, QH, !1), this.rotation = ((0, AH.k)(this, WH), (0, AH.k)(this, MH, void 0)), this.rotationQuaternion = (0, AH.k)(this, xH), this.speed = (0, AH.k)(this, vH, 2), this.noRotationConstraint = ((0, AH.k)(this, PH), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = tH.d, this._rotationEpsilon = tH.d, this.lockedTarget = (0, AH.k)(this, TH, null), this._currentTarget = ((0, AH.k)(this, UH), hH.o.Zero()), this._initialFocalDistance = 1, this._viewMatrix = hH.e.Zero(), this._cameraTransformMatrix = hH.e.Zero(), this._cameraRotationMatrix = hH.e.Zero(), this._transformedReferencePoint = hH.o.Zero(), this._deferredPositionUpdate = new hH.o, this._deferredRotationQuaternionUpdate = new hH.f, this._deferredRotationUpdate = new hH.o, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = hH.o.Forward(this.yN().useRightHandedSystem), this.rotation = new hH.o(0, this.yN().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new GH(this.yN(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(HH) {
            this.getWorldMatrix();
            const BH = hH.l.lu[0],
              LH = hH.l.lu[1];
            return LH.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(LH, BH), BH.scaleInPlace(HH), this.globalPosition.add(BH)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const HH = this.lockedTarget;
              HH.computeWorldMatrix().getTranslationToRef(HH.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.SBH(0, 0, 0), this.cameraRotation.SBH(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new hH.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(HH) {
            HH || super._updateCache();
            const BH = this._getLockedTargetPosition();
            BH ? this._cache.lockedTarget ? this._cache.lockedTarget.Tm(BH) : this._cache.lockedTarget = BH.clone() : this._cache.lockedTarget = null, this._cache.rotation.Tm(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Tm(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const HH = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(HH) : !HH) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const HH = this.Iu();
            return this.speed * Math.sqrt(HH.getDeltaTime() / (100 * HH.getFps()))
          }
          setTarget(HH) {
            this.upVector.normalize(), this._initialFocalDistance = HH.subtract(this.position).length(), this.position.z === HH.z && (this.position.z += tH.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.yN().useRightHandedSystem ? hH.e.LookAtRHToRef(this.position, HH, hH.o.UpReadOnly, YH) : hH.e.LookAtLHToRef(this.position, HH, hH.o.UpReadOnly, YH), YH.invert();
            const BH = this.rotationQuaternion || uH;
            hH.f.FromRotationMatrixToRef(YH, BH), BH.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(HH) {
            this.setTarget(HH)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(hH.l.Matrix[0]), hH.o.TransformNormalToRef(this.cameraDirection, hH.l.Matrix[0], hH.l.lu[0]), this._deferredPositionUpdate.addInPlace(hH.l.lu[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Tm(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Tm(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const HH = this.movement,
              BH = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            HH.panAccumulatedPixels.addInPlace(this.cameraDirection), HH.rotationAccumulatedPixels.x += this.cameraRotation.x, HH.rotationAccumulatedPixels.y += this.cameraRotation.y, HH.computeCurrentFrameDeltas(), this.cameraDirection.Tm(HH.panDeltaCurrentFrame), this.cameraRotation.set(HH.rotationDeltaCurrentFrame.x, HH.rotationDeltaCurrentFrame.y);
            const LH = this.speed * this._panningEpsilon;
            !BH && Math.abs(this.cameraDirection.x) < LH && Math.abs(this.cameraDirection.y) < LH && Math.abs(this.cameraDirection.z) < LH && (this.cameraDirection.IHH(0), HH.resetPanVelocity());
            const AH = this.invertRotation ? -this.inverseRotationSpeed : 1,
              rH = this._decideIfNeedsToMove(),
              SH = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Tm(this.rotation), this._deferredPositionUpdate.Tm(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Tm(this.rotationQuaternion), rH && this._updatePosition(), SH) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * AH, this._deferredRotationUpdate.y += this.cameraRotation.y * AH, !this.noRotationConstraint) {
                const HH = 1.570796;
                this._deferredRotationUpdate.x > HH && (this._deferredRotationUpdate.x = HH), this._deferredRotationUpdate.x < -HH && (this._deferredRotationUpdate.x = -HH)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Tm(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (hH.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Tm(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.IHH(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : hH.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return hH.o.TransformNormalToRef(hH.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), hH.o.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? zH.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (hH.f.FromEulerVectorToRef(this.rotation, uH), zH.d.Y.rotateByQuaternionToRef(uH, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(HH, BH, LH) {
            if (this.yN().useRightHandedSystem ? hH.e.LookAtRHToRef(HH, BH, LH, this._viewMatrix) : hH.e.LookAtLHToRef(HH, BH, LH, this._viewMatrix), this.parent) {
              const HH = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(HH, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(BH, LH) {
            if (this.cameraRigMode !== SH.d.RIG_MODE_NONE) {
              const LH = new HH(BH, this.position.clone(), this.yN());
              return LH.isRigCamera = !0, LH.rigParent = this, this.cameraRigMode === SH.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new hH.f), LH._cameraRigParams = {}, LH.rotationQuaternion = new hH.f), LH.mode = this.mode, LH.orthoLeft = this.orthoLeft, LH.orthoRight = this.orthoRight, LH.orthoTop = this.orthoTop, LH.orthoBottom = this.orthoBottom, LH
            }
            return null
          }
          _updateRigCameras() {
            const HH = this._rigCameras[0],
              BH = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case SH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case SH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case SH.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const LH = this.cameraRigMode === SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  AH = this.cameraRigMode === SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * LH, HH), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * AH, BH);
                break
              }
              case SH.d.RIG_MODE_VR:
                HH.rotationQuaternion && BH.rotationQuaternion && this.rotationQuaternion ? (HH.rotationQuaternion.Tm(this.rotationQuaternion), BH.rotationQuaternion.Tm(this.rotationQuaternion)) : (HH.rotation.Tm(this.rotation), BH.rotation.Tm(this.rotation)), HH.position.Tm(this.position), BH.position.Tm(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(BH, LH) {
            this.getTarget().subtractToRef(this.position, HH._TargetFocalPoint), HH._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const AH = HH._TargetFocalPoint.addInPlace(this.position);
            hH.e.TranslationToRef(-AH.x, -AH.y, -AH.z, HH._TargetTransformMatrix), HH._TargetTransformMatrix.multiplyToRef(hH.e.RotationAxis(LH.upVector, BH), HH._RigCamTransformMatrix), hH.e.TranslationToRef(AH.x, AH.y, AH.z, HH._TargetTransformMatrix), HH._RigCamTransformMatrix.multiplyToRef(HH._TargetTransformMatrix, HH._RigCamTransformMatrix), hH.o.TransformCoordinatesToRef(this.position, HH._RigCamTransformMatrix, LH.position), LH.setTarget(AH)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(XH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.H)()], EH = [(0, rH.v)("lockedTargetId")], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: HH => "updateUpVectorFromRotation" in HH,
              get: HH => HH.updateUpVectorFromRotation,
              set: (HH, BH) => {
                HH.updateUpVectorFromRotation = BH
              }
            },
            metadata: SH
          }, QH, WH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: HH => "rotation" in HH,
              get: HH => HH.rotation,
              set: (HH, BH) => {
                HH.rotation = BH
              }
            },
            metadata: SH
          }, MH, xH), (0, AH.g)(null, null, CH, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: HH => "speed" in HH,
              get: HH => HH.speed,
              set: (HH, BH) => {
                HH.speed = BH
              }
            },
            metadata: SH
          }, vH, PH), (0, AH.g)(null, null, EH, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: HH => "lockedTarget" in HH,
              get: HH => HH.lockedTarget,
              set: (HH, BH) => {
                HH.lockedTarget = BH
              }
            },
            metadata: SH
          }, TH, UH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH._RigCamTransformMatrix = new hH.e, HH._TargetTransformMatrix = new hH.e, HH._TargetFocalPoint = new hH.o, HH
      })(),
      WH = !1;

    function MH() {
      WH || (WH = !0, CH.b.AddNodeConstructor("TargetCamera", ((HH, BH) => () => new QH(HH, hH.o.Zero(), BH))))
    }
  },
  41239: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(41184);
    let rH = !1;

    function SH() {
      rH || (rH = !0, AH.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, AH.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, AH.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, AH.c.prototype.getAspectRatio = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = HH.viewport;
        return this.getRenderWidth(BH) * LH.width / (this.getRenderHeight(BH) * LH.height)
      }, AH.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, AH.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41330: (HH, BH, LH) => {
    var AH = LH(41184),
      rH = LH(41336);
    let SH = !1;
    SH || (SH = !0, (0, rH.q)(), AH.c.prototype._loadFileAsync = async function(HH, BH, LH) {
      return await new Promise(((AH, rH) => {
        this._loadFile(HH, (HH => {
          AH(HH)
        }), void 0, BH, LH, ((HH, BH) => {
          rH(BH)
        }))
      }))
    })
  },
  41328: (HH, BH, LH) => {
    (0, LH(41247).c)()
  },
  41247: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(41184);
    let rH = !1;

    function SH() {
      rH || (rH = !0, AH.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, AH.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, AH.c.prototype.createRenderPassId = function(HH) {
        const BH = ++AH.c._RenderPassIdCounter;
        return this._renderPassNames[BH] = HH ?? "NONAME", BH
      }, AH.c.prototype.releaseRenderPassId = function(HH) {
        this._renderPassNames[HH] = void 0;
        for (let BH = 0; BH < this.scenes.length; ++BH) {
          const LH = this.scenes[BH];
          for (let BH = 0; BH < LH.meshes.length; ++BH) {
            const AH = LH.meshes[BH];
            if (AH._releaseRenderPassId(HH), AH.jU)
              for (let BH = 0; BH < AH.jU.length; ++BH) {
                AH.jU[BH]._removeDrawWrapper(HH)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(HH)
      })
    }
  },
  41370: (HH, BH, LH) => {
    var AH = LH(41372),
      rH = LH(41184);
    let SH = !1;
    SH || (SH = !0, rH.c.GetCompatibleTextureLoader = AH.c)
  },
  41253: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(41129);
    let rH = !1;

    function SH() {
      rH || (rH = !0, AH.ThinEngine.prototype.setAlphaMode = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[LH] === HH) {
          if (!BH) {
            const BH = 0 === HH;
            this.depthCullingState.depthMask !== BH && (this.depthCullingState.depthMask = BH)
          }
          return
        }
        const AH = 0 === HH;
        this._alphaState.setAlphaBlend(!AH, LH), this._alphaState.setAlphaMode(HH, LH), BH || (this.depthCullingState.depthMask = AH), this._alphaMode[LH] = HH
      })
    }
  },
  41264: (HH, BH, LH) => {
    var AH = LH(41122),
      rH = LH(39595),
      SH = LH(41129),
      hH = LH(41271),
      tH = LH(41229);
    class zH extends hH.d {
      setDepthStencilTexture(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(HH, BH), !HH) return;
        const LH = this._engine,
          AH = this._context,
          rH = HH._hardwareTexture;
        if (rH && HH._autoMSAAManagement && this._MSAAFramebuffer) {
          const BH = LH._currentFramebuffer;
          LH._bindUnboundFramebuffer(this._MSAAFramebuffer), AH.framebufferRenderbuffer(AH.FRAMEBUFFER, (0, tH.b)(HH.format) ? AH.DEPTH_STENCIL_ATTACHMENT : AH.DEPTH_ATTACHMENT, AH.RENDERBUFFER, rH.getMSAARenderBuffer()), LH._bindUnboundFramebuffer(BH)
        }
      }
      constructor(HH, BH, LH, AH, rH) {
        super(HH, BH, LH, AH), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = rH
      }
      _cloneRenderTargetWrapper() {
        let HH;
        return this._colorTextureArray && this._depthStencilTextureArray ? (HH = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), HH.texture.isReady = !0) : HH = super._cloneRenderTargetWrapper(), HH
      }
      _swapRenderTargetWrapper(HH) {
        super._swapRenderTargetWrapper(HH), HH._framebuffer = this._framebuffer, HH._depthStencilBuffer = this._depthStencilBuffer, HH._MSAAFramebuffer = this._MSAAFramebuffer, HH._colorTextureArray = this._colorTextureArray, HH._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const HH = this._engine,
            BH = HH._currentFramebuffer,
            LH = this._context;
          HH._bindUnboundFramebuffer(this._framebuffer), LH.framebufferRenderbuffer(LH.FRAMEBUFFER, LH.DEPTH_STENCIL_ATTACHMENT, LH.RENDERBUFFER, null), LH.framebufferRenderbuffer(LH.FRAMEBUFFER, LH.DEPTH_ATTACHMENT, LH.RENDERBUFFER, null), LH.framebufferRenderbuffer(LH.FRAMEBUFFER, LH.STENCIL_ATTACHMENT, LH.RENDERBUFFER, null), HH._bindUnboundFramebuffer(BH), LH.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(HH, BH, LH, AH, rH, SH)
      }
      shareDepth(HH) {
        super.shareDepth(HH);
        const BH = this._context,
          LH = this._depthStencilBuffer,
          AH = HH._MSAAFramebuffer || HH._framebuffer,
          rH = this._engine;
        HH._depthStencilBuffer && HH._depthStencilBuffer !== LH && BH.deleteRenderbuffer(HH._depthStencilBuffer), HH._depthStencilBuffer = LH;
        const SH = HH._generateStencilBuffer ? BH.DEPTH_STENCIL_ATTACHMENT : BH.DEPTH_ATTACHMENT;
        rH._bindUnboundFramebuffer(AH), BH.framebufferRenderbuffer(BH.FRAMEBUFFER, SH, BH.RENDERBUFFER, LH), rH._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const rH = HH._hardwareTexture;
        if (!rH) return;
        const SH = this._framebuffer,
          hH = this._engine,
          tH = hH._currentFramebuffer;
        let zH;
        if (hH._bindUnboundFramebuffer(SH), hH.hQ > 1) {
          const SH = this._context;
          zH = SH["COLOR_ATTACHMENT" + BH], HH.is2DArray || HH.is3D ? (LH = LH ?? this.layerIndices?.[BH] ?? 0, SH.framebufferTextureLayer(SH.FRAMEBUFFER, zH, rH.underlyingResource, AH, LH)) : HH.isCube ? (LH = LH ?? this.faceIndices?.[BH] ?? 0, SH.framebufferTexture2D(SH.FRAMEBUFFER, zH, SH.TEXTURE_CUBE_MAP_POSITIVE_X + LH, rH.underlyingResource, AH)) : SH.framebufferTexture2D(SH.FRAMEBUFFER, zH, SH.TEXTURE_2D, rH.underlyingResource, AH)
        } else {
          const HH = this._context;
          zH = HH["COLOR_ATTACHMENT" + BH + "_WEBGL"];
          const SH = void 0 !== LH ? HH.TEXTURE_CUBE_MAP_POSITIVE_X + LH : HH.TEXTURE_2D;
          HH.framebufferTexture2D(HH.FRAMEBUFFER, zH, SH, rH.underlyingResource, AH)
        }
        if (HH._autoMSAAManagement && this._MSAAFramebuffer) {
          const HH = this._context;
          hH._bindUnboundFramebuffer(this._MSAAFramebuffer), HH.framebufferRenderbuffer(HH.FRAMEBUFFER, zH, HH.RENDERBUFFER, rH.getMSAARenderBuffer())
        }
        hH._bindUnboundFramebuffer(tH)
      }
      setTexture(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(HH, BH, LH), this._bindTextureRenderTarget(HH, BH)
      }
      setLayerAndFaceIndices(HH, BH) {
        if (super.setLayerAndFaceIndices(HH, BH), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const LH = this._attachments?.length ?? this.textures.length;
        for (let AH = 0; AH < LH; AH++) {
          const HH = this.textures[AH];
          HH && (HH.is2DArray || HH.is3D ? this._bindTextureRenderTarget(HH, AH, this.layerIndices[AH]) : HH.isCube ? this._bindTextureRenderTarget(HH, AH, this.faceIndices[AH]) : this._bindTextureRenderTarget(HH, AH))
        }
      }
      setLayerAndFaceIndex() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(HH, BH, LH), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const AH = this.textures[HH];
        AH.is2DArray || AH.is3D ? this._bindTextureRenderTarget(this.textures[HH], HH, this.layerIndices[HH]) : AH.isCube && this._bindTextureRenderTarget(this.textures[HH], HH, this.faceIndices[HH])
      }
      resolveMSAATextures() {
        const HH = this._engine,
          BH = HH._currentFramebuffer;
        HH._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), HH._bindUnboundFramebuffer(BH)
      }
      dispose() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const BH = this._context;
        HH || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (BH.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (BH.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (BH.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(HH)
      }
    }
    let CH = !1;
    CH || (CH = !0, SH.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(HH, BH, LH) {
      const AH = new zH(HH, BH, LH, this, this._gl);
      return this._renderTargetWrapperCache.push(AH), AH
    }, SH.ThinEngine.prototype.createRenderTargetTexture = function(HH, BH) {
      const LH = this._createHardwareRenderTargetWrapper(!1, !1, HH);
      let AH, rH, SH = !0,
        hH = !1,
        tH = !1,
        zH = 1;
      void 0 !== BH && "object" === typeof BH && (SH = BH.generateDepthBuffer ?? !0, hH = !!BH.generateStencilBuffer, tH = !!BH.noColorAttachment, AH = BH.colorAttachment, zH = BH.samples ?? 1, rH = BH.label);
      const CH = AH || (tH ? null : this._createInternalTexture(HH, BH, !0, 5)),
        EH = HH.width || HH,
        XH = HH.height || HH,
        GH = this._currentFramebuffer,
        YH = this._gl,
        uH = YH.createFramebuffer();
      if (this._bindUnboundFramebuffer(uH), LH._depthStencilBuffer = this._setupFramebufferDepthAttachments(hH, SH, EH, XH), !CH || CH.is2DArray || CH.is3D || YH.framebufferTexture2D(YH.FRAMEBUFFER, YH.COLOR_ATTACHMENT0, YH.TEXTURE_2D, CH._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(GH), LH.label = rH ?? "RenderTargetWrapper", LH._framebuffer = uH, LH._generateDepthBuffer = SH, LH._generateStencilBuffer = hH, LH.setTextures(CH), AH) {
        if (LH._samples = AH.samples, AH.samples > 1) {
          const HH = AH._hardwareTexture.getMSAARenderBuffer(0);
          LH._MSAAFramebuffer = YH.createFramebuffer(), this._bindUnboundFramebuffer(LH._MSAAFramebuffer), YH.framebufferRenderbuffer(YH.FRAMEBUFFER, YH.COLOR_ATTACHMENT0, YH.RENDERBUFFER, HH), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(LH, zH);
      return LH
    }, SH.ThinEngine.prototype._createDepthStencilTexture = function(HH, BH, LH) {
      const SH = this._gl,
        hH = HH.layers || 0,
        zH = HH.depth || 0;
      let CH = SH.TEXTURE_2D;
      0 !== hH ? CH = SH.TEXTURE_2D_ARRAY : 0 !== zH && (CH = SH.TEXTURE_3D);
      const EH = new AH.e(this, 12);
      if (EH.label = BH.label, !this._caps.depthTextureExtension) return rH.e.Error("Depth texture is not supported by your browser or hardware."), EH;
      const XH = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...BH
      };
      if (this._bindTextureDirectly(CH, EH, !0), this._setupDepthStencilTexture(EH, HH, 0 !== XH.comparisonFunction && XH.bilinearFiltering, XH.comparisonFunction, XH.samples), void 0 !== XH.depthTextureFormat) {
        if (15 !== XH.depthTextureFormat && 16 !== XH.depthTextureFormat && 17 !== XH.depthTextureFormat && 13 !== XH.depthTextureFormat && 14 !== XH.depthTextureFormat && 18 !== XH.depthTextureFormat) return rH.e.Error(`Depth texture ${XH.depthTextureFormat} format is not supported.`), EH;
        EH.format = XH.depthTextureFormat
      } else EH.format = XH.generateStencil ? 13 : 16;
      const GH = (0, tH.b)(EH.format),
        YH = this._getWebGLTextureTypeFromDepthTextureFormat(EH.format),
        uH = GH ? SH.DEPTH_STENCIL : SH.DEPTH_COMPONENT,
        QH = this._getInternalFormatFromDepthTextureFormat(EH.format, !0, GH);
      return EH.is2DArray ? SH.texImage3D(CH, 0, QH, EH.width, EH.height, hH, 0, uH, YH, null) : EH.is3D ? SH.texImage3D(CH, 0, QH, EH.width, EH.height, zH, 0, uH, YH, null) : SH.texImage2D(CH, 0, QH, EH.width, EH.height, 0, uH, YH, null), this._bindTextureDirectly(CH, null), this._internalTexturesCache.push(EH), LH._depthStencilBuffer && (SH.deleteRenderbuffer(LH._depthStencilBuffer), LH._depthStencilBuffer = null), this._bindUnboundFramebuffer(LH._MSAAFramebuffer ?? LH._framebuffer), LH._generateStencilBuffer = GH, LH._depthStencilTextureWithStencil = GH, LH._depthStencilBuffer = this._setupFramebufferDepthAttachments(LH._generateStencilBuffer, LH._generateDepthBuffer, LH.width, LH.height, LH.samples, EH.format), this._bindUnboundFramebuffer(null), EH
    }, SH.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(HH, BH) {
      if (this.hQ < 2 || !HH) return 1;
      if (HH.samples === BH) return BH;
      const LH = this._gl;
      BH = Math.min(BH, this.getCaps().maxMSAASamples), HH._depthStencilBuffer && (LH.deleteRenderbuffer(HH._depthStencilBuffer), HH._depthStencilBuffer = null), HH._MSAAFramebuffer && (LH.deleteFramebuffer(HH._MSAAFramebuffer), HH._MSAAFramebuffer = null);
      const AH = HH.texture?._hardwareTexture;
      if (AH?.releaseMSAARenderBuffers(), HH.texture && BH > 1 && "function" === typeof LH.renderbufferStorageMultisample) {
        const rH = LH.createFramebuffer();
        if (!rH) throw new Error("Unable to create multi sampled framebuffer");
        HH._MSAAFramebuffer = rH, this._bindUnboundFramebuffer(HH._MSAAFramebuffer);
        const SH = this._createRenderBuffer(HH.texture.width, HH.texture.height, BH, -1, this._getRGBABufferInternalSizedFormat(HH.texture.type, HH.texture.format, HH.texture._useSRGBBuffer), LH.COLOR_ATTACHMENT0, !1);
        if (!SH) throw new Error("Unable to create multi sampled framebuffer");
        AH?.addMSAARenderBuffer(SH)
      }
      this._bindUnboundFramebuffer(HH._MSAAFramebuffer ?? HH._framebuffer), HH.texture && (HH.texture.samples = BH), HH._samples = BH;
      const rH = HH._depthStencilTexture ? HH._depthStencilTexture.format : void 0;
      return HH._depthStencilBuffer = this._setupFramebufferDepthAttachments(HH._generateStencilBuffer, HH._generateDepthBuffer, HH.width, HH.height, BH, rH), this._bindUnboundFramebuffer(null), BH
    }, SH.ThinEngine.prototype._setupDepthStencilTexture = function(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const SH = BH.width ?? BH,
        hH = BH.height ?? BH,
        tH = BH.layers || 0,
        zH = BH.depth || 0;
      HH.baseWidth = SH, HH.baseHeight = hH, HH.width = SH, HH.height = hH, HH.is2DArray = tH > 0, HH.depth = tH || zH, HH.isReady = !0, HH.samples = rH, HH.generateMipMaps = !1, HH.samplingMode = LH ? 2 : 1, HH.type = 0, HH._comparisonFunction = AH;
      const CH = this._gl,
        EH = this._getTextureTarget(HH),
        XH = this._getSamplingParameters(HH.samplingMode, !1);
      CH.texParameteri(EH, CH.TEXTURE_MAG_FILTER, XH.mag), CH.texParameteri(EH, CH.TEXTURE_MIN_FILTER, XH.min), CH.texParameteri(EH, CH.TEXTURE_WRAP_S, CH.CLAMP_TO_EDGE), CH.texParameteri(EH, CH.TEXTURE_WRAP_T, CH.CLAMP_TO_EDGE), this.hQ > 1 && (0 === AH ? (CH.texParameteri(EH, CH.TEXTURE_COMPARE_FUNC, 515), CH.texParameteri(EH, CH.TEXTURE_COMPARE_MODE, CH.NONE)) : (CH.texParameteri(EH, CH.TEXTURE_COMPARE_FUNC, AH), CH.texParameteri(EH, CH.TEXTURE_COMPARE_MODE, CH.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41106: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.c
    });
    var AH = LH(41113);
    (0, LH(41253).c)();
    var rH = LH(41129);
    let SH = !1;
    ! function() {
      if (SH) return;
      SH = !0;
      const HH = new WeakMap,
        BH = new WeakMap,
        LH = new WeakMap,
        AH = new WeakMap;
      rH.ThinEngine.prototype.getAlphaToCoverage = function() {
        return HH.get(this) ?? !1
      }, rH.ThinEngine.prototype.setAlphaToCoverage = function(LH) {
        (HH.get(this) !== LH || this._gl && BH.get(this) !== this._gl) && (HH.set(this, LH), this._gl && (LH ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), BH.set(this, this._gl)))
      }, Object.defineProperty(rH.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (AH.get(this) !== this._gl && (LH.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), AH.set(this, this._gl)), LH.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var hH = LH(41122),
      tH = LH(39595),
      zH = LH(41222);
    let CH = !1;
    ! function() {
      function HH(HH, BH, LH, AH) {
        let rH, SH = 1;
        1 === AH ? rH = new Float32Array(BH * LH * 4) : 2 === AH ? (rH = new Uint16Array(BH * LH * 4), SH = 15360) : rH = 7 === AH ? new Uint32Array(BH * LH * 4) : new Uint8Array(BH * LH * 4);
        for (let hH = 0; hH < BH; hH++)
          for (let AH = 0; AH < LH; AH++) {
            const LH = 3 * (AH * BH + hH),
              tH = 4 * (AH * BH + hH);
            rH[tH + 0] = HH[LH + 0], rH[tH + 1] = HH[LH + 1], rH[tH + 2] = HH[LH + 2], rH[tH + 3] = SH
          }
        return rH
      }

      function BH(HH) {
        return function(BH, LH, AH, rH, SH, tH, zH, CH) {
          let EH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            XH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const GH = HH ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            YH = HH ? 10 : 11,
            uH = new hH.e(this, YH);
          uH.baseWidth = LH, uH.baseHeight = AH, uH.baseDepth = rH, uH.width = LH, uH.height = AH, uH.depth = rH, uH.format = SH, uH.type = XH, uH.generateMipMaps = tH, uH.samplingMode = CH, HH ? uH.is3D = !0 : uH.is2DArray = !0, this._doNotHandleContextLost || (uH._bufferView = BH), HH ? this.updateRawTexture3D(uH, BH, SH, zH, EH, XH) : this.updateRawTexture2DArray(uH, BH, SH, zH, EH, XH), this._bindTextureDirectly(GH, uH, !0);
          const QH = this._getSamplingParameters(CH, tH);
          return this._gl.texParameteri(GH, this._gl.TEXTURE_MAG_FILTER, QH.mag), this._gl.texParameteri(GH, this._gl.TEXTURE_MIN_FILTER, QH.min), tH && this._gl.generateMipmap(GH), this._bindTextureDirectly(GH, null), this._internalTexturesCache.push(uH), uH
        }
      }

      function LH(HH) {
        return function(BH, LH, AH, rH) {
          let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const tH = HH ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            zH = this._getWebGLTextureType(hH),
            CH = this._getInternalFormat(AH),
            EH = this._getRGBABufferInternalSizedFormat(hH, AH);
          this._bindTextureDirectly(tH, BH, !0), this._unpackFlipY(void 0 === rH || !!rH), this._doNotHandleContextLost || (BH._bufferView = LH, BH.format = AH, BH.invertY = rH, BH._compression = SH), BH.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), SH && LH ? this._gl.compressedTexImage3D(tH, 0, this.getCaps().s3tc[SH], BH.width, BH.height, BH.depth, 0, LH) : this._gl.texImage3D(tH, 0, EH, BH.width, BH.height, BH.depth, 0, CH, zH, LH), BH.generateMipMaps && this._gl.generateMipmap(tH), this._bindTextureDirectly(tH, null), BH.isReady = !0
        }
      }
      CH || (CH = !0, rH.ThinEngine.prototype.updateRawTexture = function(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!HH) return;
        const tH = this._getRGBABufferInternalSizedFormat(SH, LH, hH),
          zH = this._getInternalFormat(LH),
          CH = this._getWebGLTextureType(SH);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, HH, !0), this._unpackFlipY(void 0 === AH || !!AH), this._doNotHandleContextLost || (HH._bufferView = BH, HH.format = LH, HH.type = SH, HH.invertY = AH, HH._compression = rH), HH.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), rH && BH ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[rH], HH.width, HH.height, 0, BH) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, tH, HH.width, HH.height, 0, zH, CH, BH), HH.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), HH.isReady = !0
      }, rH.ThinEngine.prototype.createRawTexture = function(HH, BH, LH, AH, rH, SH, tH) {
        let zH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          EH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const XH = new hH.e(this, 3);
        XH.baseWidth = BH, XH.baseHeight = LH, XH.width = BH, XH.height = LH, XH.format = AH, XH.generateMipMaps = rH, XH.samplingMode = tH, XH.invertY = SH, XH._compression = zH, XH.type = CH, XH._useSRGBBuffer = this._getUseSRGBBuffer(EH, !rH), this._doNotHandleContextLost || (XH._bufferView = HH), this.updateRawTexture(XH, HH, AH, SH, zH, CH, XH._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, XH, !0);
        const GH = this._getSamplingParameters(tH, rH);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, GH.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, GH.min), rH && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(XH), XH
      }, rH.ThinEngine.prototype.createRawCubeTexture = function(HH, BH, LH, AH, rH, SH, CH) {
        let EH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const XH = this._gl,
          GH = new hH.e(this, 8);
        GH.isCube = !0, GH.format = LH, GH.type = AH, this._doNotHandleContextLost || (GH._bufferViewArray = HH);
        const YH = this._getWebGLTextureType(AH);
        let uH = this._getInternalFormat(LH);
        uH === XH.RGB && (uH = XH.RGBA), YH !== XH.FLOAT || this._caps.textureFloatLinearFiltering ? YH !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? YH !== XH.FLOAT || this._caps.textureFloatRender ? YH !== XH.HALF_FLOAT || this._caps.colorBufferFloat || (rH = !1, tH.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (rH = !1, tH.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (rH = !1, CH = 1, tH.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (rH = !1, CH = 1, tH.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const QH = BH,
          WH = QH;
        GH.width = QH, GH.height = WH, GH.invertY = SH, GH._compression = EH;
        if (!this.needPOTTextures || (0, zH.g)(GH.width) && (0, zH.g)(GH.height) || (rH = !1), HH) this.updateRawCubeTexture(GH, HH, LH, AH, SH, EH);
        else {
          const HH = this._getRGBABufferInternalSizedFormat(AH),
            BH = 0;
          this._bindTextureDirectly(XH.TEXTURE_CUBE_MAP, GH, !0);
          for (let LH = 0; LH < 6; LH++) EH ? XH.compressedTexImage2D(XH.TEXTURE_CUBE_MAP_POSITIVE_X + LH, BH, this.getCaps().s3tc[EH], GH.width, GH.height, 0, void 0) : XH.texImage2D(XH.TEXTURE_CUBE_MAP_POSITIVE_X + LH, BH, HH, GH.width, GH.height, 0, uH, YH, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, GH, !0), HH && rH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const MH = this._getSamplingParameters(CH, rH);
        return XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_MAG_FILTER, MH.mag), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_MIN_FILTER, MH.min), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_WRAP_S, XH.CLAMP_TO_EDGE), XH.texParameteri(XH.TEXTURE_CUBE_MAP, XH.TEXTURE_WRAP_T, XH.CLAMP_TO_EDGE), this._bindTextureDirectly(XH.TEXTURE_CUBE_MAP, null), GH.generateMipMaps = rH, GH.samplingMode = CH, GH.isReady = !0, GH
      }, rH.ThinEngine.prototype.updateRawCubeTexture = function(BH, LH, AH, rH, SH) {
        let hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        BH._bufferViewArray = LH, BH.format = AH, BH.type = rH, BH.invertY = SH, BH._compression = hH;
        const CH = this._gl,
          EH = this._getWebGLTextureType(rH);
        let XH = this._getInternalFormat(AH);
        const GH = this._getRGBABufferInternalSizedFormat(rH);
        let YH = !1;
        XH === CH.RGB && (XH = CH.RGBA, YH = !0), this._bindTextureDirectly(CH.TEXTURE_CUBE_MAP, BH, !0), this._unpackFlipY(void 0 === SH || !!SH), BH.width % 4 !== 0 && CH.pixelStorei(CH.UNPACK_ALIGNMENT, 1);
        for (let zH = 0; zH < 6; zH++) {
          let AH = LH[zH];
          hH ? CH.compressedTexImage2D(CH.TEXTURE_CUBE_MAP_POSITIVE_X + zH, tH, this.getCaps().s3tc[hH], BH.width, BH.height, 0, AH) : (YH && (AH = HH(AH, BH.width, BH.height, rH)), CH.texImage2D(CH.TEXTURE_CUBE_MAP_POSITIVE_X + zH, tH, GH, BH.width, BH.height, 0, XH, EH, AH))
        }(!this.needPOTTextures || (0, zH.g)(BH.width) && (0, zH.g)(BH.height)) && BH.generateMipMaps && 0 === tH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), BH.isReady = !0
      }, rH.ThinEngine.prototype.createRawCubeTextureFromUrl = function(BH, LH, AH, rH, SH, hH, tH, zH) {
        let CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          XH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          GH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const YH = this._gl,
          uH = this.createRawCubeTexture(null, AH, rH, SH, !hH, GH, XH, null);
        LH?.addPendingData(uH), uH.url = BH, uH.isReady = !1, this._internalTexturesCache.push(uH);
        const QH = (HH, BH) => {
            LH?.removePendingData(uH), EH && EH(HH ? HH.status + " " + HH.statusText : "Failed to parse texture data", BH)
          },
          WH = async BH => {
            if (!uH._hardwareTexture) return;
            const AH = tH(BH);
            if (!AH) return;
            const hH = AH instanceof Promise ? await AH : AH,
              EH = uH.width;
            if (zH) {
              const BH = this._getWebGLTextureType(SH);
              let LH = this._getInternalFormat(rH);
              const AH = this._getRGBABufferInternalSizedFormat(SH);
              let tH = !1;
              LH === YH.RGB && (LH = YH.RGBA, tH = !0), this._bindTextureDirectly(YH.TEXTURE_CUBE_MAP, uH, !0), this._unpackFlipY(!1);
              const CH = zH(hH);
              for (let rH = 0; rH < CH.length; rH++) {
                const hH = EH >> rH;
                for (let zH = 0; zH < 6; zH++) {
                  let EH = CH[rH][zH];
                  tH && (EH = HH(EH, hH, hH, SH)), YH.texImage2D(zH, rH, AH, hH, hH, 0, LH, BH, EH)
                }
              }
              this._bindTextureDirectly(YH.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(uH, hH, rH, SH, GH);
            uH.isReady = !0, LH?.removePendingData(uH), uH.onLoadedObservable.notifyObservers(uH), uH.onLoadedObservable.clear(), CH && CH()
          };
        return this._loadFile(BH, (HH => {
          WH(HH).catch((HH => {
            QH(void 0, HH)
          }))
        }), void 0, LH?.offlineProvider, !0, QH), uH
      }, rH.ThinEngine.prototype.createRawTexture2DArray = BH(!1), rH.ThinEngine.prototype.createRawTexture3D = BH(!0), rH.ThinEngine.prototype.updateRawTexture2DArray = LH(!1), rH.ThinEngine.prototype.updateRawTexture3D = LH(!0))
    }();
    var EH = LH(41164);
    let XH = !1;
    XH || (XH = !0, rH.ThinEngine.prototype._readTexturePixelsSync = function(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        CH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const XH = this._gl;
      if (!XH) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const HH = XH.createFramebuffer();
        if (!HH) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = HH
      }
      XH.bindFramebuffer(XH.FRAMEBUFFER, this._dummyFramebuffer), AH > -1 && (HH.is2DArray || HH.is3D) ? XH.framebufferTextureLayer(XH.FRAMEBUFFER, XH.COLOR_ATTACHMENT0, HH._hardwareTexture?.underlyingResource, rH, AH) : AH > -1 ? XH.framebufferTexture2D(XH.FRAMEBUFFER, XH.COLOR_ATTACHMENT0, XH.TEXTURE_CUBE_MAP_POSITIVE_X + AH, HH._hardwareTexture?.underlyingResource, rH) : XH.framebufferTexture2D(XH.FRAMEBUFFER, XH.COLOR_ATTACHMENT0, XH.TEXTURE_2D, HH._hardwareTexture?.underlyingResource, rH);
      let GH = void 0 !== HH.type ? this._getWebGLTextureType(HH.type) : XH.UNSIGNED_BYTE;
      return tH ? SH || (SH = (0, EH.h)(HH.type, 4 * BH * LH)) : GH === XH.UNSIGNED_BYTE ? (SH || (SH = new Uint8Array(4 * BH * LH)), GH = XH.UNSIGNED_BYTE) : (SH || (SH = new Float32Array(4 * BH * LH)), GH = XH.FLOAT), hH && this.flushFramebuffer(), XH.readPixels(zH, CH, BH, LH, XH.RGBA, GH, SH), XH.bindFramebuffer(XH.FRAMEBUFFER, this._currentFramebuffer), SH
    }, rH.ThinEngine.prototype._readTexturePixels = function(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        CH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH))
    }), (0, LH(41260).c)();
    let GH = !1;
    GH || (GH = !0, rH.ThinEngine.prototype._createDepthStencilCubeTexture = function(HH, BH) {
      const LH = new hH.e(this, 12);
      if (LH.isCube = !0, 1 === this.hQ) return tH.e.Error("Depth cube texture is not supported by WebGL 1."), LH;
      const AH = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...BH
        },
        rH = this._gl;
      this._bindTextureDirectly(rH.TEXTURE_CUBE_MAP, LH, !0), this._setupDepthStencilTexture(LH, HH, AH.bilinearFiltering, AH.comparisonFunction);
      for (let SH = 0; SH < 6; SH++) AH.generateStencil ? rH.texImage2D(rH.TEXTURE_CUBE_MAP_POSITIVE_X + SH, 0, rH.DEPTH24_STENCIL8, HH, HH, 0, rH.DEPTH_STENCIL, rH.UNSIGNED_INT_24_8, null) : rH.texImage2D(rH.TEXTURE_CUBE_MAP_POSITIVE_X + SH, 0, rH.DEPTH_COMPONENT24, HH, HH, 0, rH.DEPTH_COMPONENT, rH.UNSIGNED_INT, null);
      return this._bindTextureDirectly(rH.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(LH), LH
    }, rH.ThinEngine.prototype._setCubeMapTextureParams = function(HH, BH, LH) {
      const AH = this._gl;
      AH.texParameteri(AH.TEXTURE_CUBE_MAP, AH.TEXTURE_MAG_FILTER, AH.LINEAR), AH.texParameteri(AH.TEXTURE_CUBE_MAP, AH.TEXTURE_MIN_FILTER, BH ? AH.LINEAR_MIPMAP_LINEAR : AH.LINEAR), AH.texParameteri(AH.TEXTURE_CUBE_MAP, AH.TEXTURE_WRAP_S, AH.CLAMP_TO_EDGE), AH.texParameteri(AH.TEXTURE_CUBE_MAP, AH.TEXTURE_WRAP_T, AH.CLAMP_TO_EDGE), HH.samplingMode = BH ? 3 : 2, BH && this.getCaps().textureMaxLevel && void 0 !== LH && LH > 0 && (AH.texParameteri(AH.TEXTURE_CUBE_MAP, AH.TEXTURE_MAX_LEVEL, LH), HH._maxLodLevel = LH), this._bindTextureDirectly(AH.TEXTURE_CUBE_MAP, null)
    }, rH.ThinEngine.prototype.createCubeTexture = function(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hH = arguments.length > 6 ? arguments[6] : void 0,
        CH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        EH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        XH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        GH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        YH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        uH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        QH = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const WH = this._gl;
      return this.createCubeTextureBase(HH, BH, LH, !!AH, rH, SH, hH, CH, EH, XH, GH, YH, (HH => this._bindTextureDirectly(WH.TEXTURE_CUBE_MAP, HH, !0)), ((HH, BH) => {
        const LH = this.needPOTTextures ? (0, zH.c)(BH[0].width, this._caps.maxCubemapTextureSize) : BH[0].width,
          SH = LH,
          CH = [WH.TEXTURE_CUBE_MAP_POSITIVE_X, WH.TEXTURE_CUBE_MAP_POSITIVE_Y, WH.TEXTURE_CUBE_MAP_POSITIVE_Z, WH.TEXTURE_CUBE_MAP_NEGATIVE_X, WH.TEXTURE_CUBE_MAP_NEGATIVE_Y, WH.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(WH.TEXTURE_CUBE_MAP, HH, !0), this._unpackFlipY(!1);
        const EH = hH ? this._getInternalFormat(hH, HH._useSRGBBuffer) : HH._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : WH.RGBA;
        let XH = hH ? this._getInternalFormat(hH) : WH.RGBA;
        HH._useSRGBBuffer && 1 === this.hQ && (XH = EH);
        for (let AH = 0; AH < CH.length; AH++)
          if (BH[AH].width !== LH || BH[AH].height !== SH) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void tH.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = LH, this._workingCanvas.height = SH, this._workingContext.drawImage(BH[AH], 0, 0, BH[AH].width, BH[AH].height, 0, 0, LH, SH), WH.texImage2D(CH[AH], 0, EH, XH, WH.UNSIGNED_BYTE, this._workingCanvas)
          } else WH.texImage2D(CH[AH], 0, EH, XH, WH.UNSIGNED_BYTE, BH[AH]);
        AH || WH.generateMipmap(WH.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(HH, !AH), HH.width = LH, HH.height = SH, HH.isReady = !0, hH && (HH.format = hH), HH.onLoadedObservable.notifyObservers(HH), HH.onLoadedObservable.clear(), rH && rH()
      }), !!uH, QH)
    }, rH.ThinEngine.prototype.generateMipMapsForCubemap = function(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (HH.generateMipMaps) {
        const LH = this._gl;
        this._bindTextureDirectly(LH.TEXTURE_CUBE_MAP, HH, !0), LH.generateMipmap(LH.TEXTURE_CUBE_MAP), BH && this._bindTextureDirectly(LH.TEXTURE_CUBE_MAP, null)
      }
    });
    LH(41264);
    let YH = !1;
    YH || (YH = !0, rH.ThinEngine.prototype.setDepthStencilTexture = function(HH, BH, LH, AH) {
      void 0 !== HH && (BH && (this._boundUniforms[HH] = BH), LH && LH.depthStencilTexture ? this._setTexture(HH, LH, !1, !0, AH) : this._setTexture(HH, null, void 0, void 0, AH))
    });
    let uH = !1;
    uH || (uH = !0, rH.ThinEngine.prototype.createRenderTargetCubeTexture = function(HH, BH) {
      const LH = this._createHardwareRenderTargetWrapper(!1, !0, HH),
        AH = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...BH
        };
      AH.generateStencilBuffer = AH.generateDepthBuffer && AH.generateStencilBuffer, (1 !== AH.type || this._caps.textureFloatLinearFiltering) && (2 !== AH.type || this._caps.textureHalfFloatLinearFiltering) || (AH.samplingMode = 1);
      const rH = this._gl,
        SH = new hH.e(this, 5);
      this._bindTextureDirectly(rH.TEXTURE_CUBE_MAP, SH, !0);
      const zH = this._getSamplingParameters(AH.samplingMode, AH.generateMipMaps);
      1 !== AH.type || this._caps.textureFloat || (AH.type = 0, tH.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), rH.texParameteri(rH.TEXTURE_CUBE_MAP, rH.TEXTURE_MAG_FILTER, zH.mag), rH.texParameteri(rH.TEXTURE_CUBE_MAP, rH.TEXTURE_MIN_FILTER, zH.min), rH.texParameteri(rH.TEXTURE_CUBE_MAP, rH.TEXTURE_WRAP_S, rH.CLAMP_TO_EDGE), rH.texParameteri(rH.TEXTURE_CUBE_MAP, rH.TEXTURE_WRAP_T, rH.CLAMP_TO_EDGE);
      for (let hH = 0; hH < 6; hH++) rH.texImage2D(rH.TEXTURE_CUBE_MAP_POSITIVE_X + hH, 0, this._getRGBABufferInternalSizedFormat(AH.type, AH.format), HH, HH, 0, this._getInternalFormat(AH.format), this._getWebGLTextureType(AH.type), null);
      const CH = rH.createFramebuffer();
      return this._bindUnboundFramebuffer(CH), LH._depthStencilBuffer = this._setupFramebufferDepthAttachments(AH.generateStencilBuffer, AH.generateDepthBuffer, HH, HH), AH.generateMipMaps && rH.generateMipmap(rH.TEXTURE_CUBE_MAP), this._bindTextureDirectly(rH.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), LH._framebuffer = CH, LH._generateDepthBuffer = AH.generateDepthBuffer, LH._generateStencilBuffer = AH.generateStencilBuffer, SH.width = HH, SH.height = HH, SH.isReady = !0, SH.isCube = !0, SH.samples = 1, SH.generateMipMaps = AH.generateMipMaps, SH.samplingMode = AH.samplingMode, SH.type = AH.type, SH.format = AH.format, this._internalTexturesCache.push(SH), LH.setTextures(SH), LH
    });
    var QH = LH(41275),
      WH = LH(41283);
    let MH = !1;
    MH || (MH = !0, rH.ThinEngine.prototype.createPrefilteredCubeTexture = function(HH, BH, AH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        zH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        CH = arguments.length > 6 ? arguments[6] : void 0,
        EH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        XH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        GH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(HH, BH, null, !1, (async HH => {
        if (!HH) return void(SH && SH(null));
        const zH = HH.texture;
        if (XH ? HH.info.sphericalPolynomial && (zH._sphericalPolynomial = HH.info.sphericalPolynomial) : zH._sphericalPolynomial = zH._sphericalPolynomial ?? new QH.g, zH._source = 9, this.getCaps().textureLOD) return void(SH && SH(zH));
        const CH = this._gl,
          EH = HH.width;
        if (!EH) return;
        const {
          DDSTools: GH
        } = await LH.e(615).then((() => LH(45241))), YH = [];
        for (let LH = 0; LH < 3; LH++) {
          const SH = 1 - LH / 2,
            XH = rH,
            uH = Math.log2(EH) * AH + rH,
            QH = XH + (uH - XH) * SH,
            MH = Math.round(Math.min(Math.max(QH, 0), uH)),
            xH = new hH.e(this, 2);
          if (xH.type = zH.type, xH.format = zH.format, xH.width = Math.pow(2, Math.max(Math.log2(EH) - MH, 0)), xH.height = xH.width, xH.isCube = !0, xH._cachedWrapU = 0, xH._cachedWrapV = 0, this._bindTextureDirectly(CH.TEXTURE_CUBE_MAP, xH, !0), xH.samplingMode = 2, CH.texParameteri(CH.TEXTURE_CUBE_MAP, CH.TEXTURE_MAG_FILTER, CH.LINEAR), CH.texParameteri(CH.TEXTURE_CUBE_MAP, CH.TEXTURE_MIN_FILTER, CH.LINEAR), CH.texParameteri(CH.TEXTURE_CUBE_MAP, CH.TEXTURE_WRAP_S, CH.CLAMP_TO_EDGE), CH.texParameteri(CH.TEXTURE_CUBE_MAP, CH.TEXTURE_WRAP_T, CH.CLAMP_TO_EDGE), HH.isDDS) {
            const BH = HH.info,
              LH = HH.data;
            this._unpackFlipY(BH.isCompressed), GH.UploadDDSLevels(this, xH, LH, BH, !0, 6, MH)
          } else tH.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(CH.TEXTURE_CUBE_MAP, null);
          const vH = new WH.e(BH);
          vH._isCube = !0, vH._texture = xH, xH.isReady = !0, YH.push(vH)
        }
        zH._lodTextureHigh = YH[2], zH._lodTextureMid = YH[1], zH._lodTextureLow = YH[0], SH && SH(zH)
      }), zH, CH, EH, XH, AH, rH, null, void 0, !1, GH)
    });
    var xH = LH(41210);
    let vH = !1;
    vH || (vH = !0, rH.ThinEngine.prototype.createUniformBuffer = function(HH, BH) {
      const LH = this._gl.createBuffer();
      if (!LH) throw new Error("Unable to create uniform buffer");
      const AH = new xH.b(LH);
      return this.bindUniformBuffer(AH), HH instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, HH, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(HH), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), AH.references = 1, AH
    }, rH.ThinEngine.prototype.createDynamicUniformBuffer = function(HH, BH) {
      const LH = this._gl.createBuffer();
      if (!LH) throw new Error("Unable to create dynamic uniform buffer");
      const AH = new xH.b(LH);
      return this.bindUniformBuffer(AH), HH instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, HH, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(HH), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), AH.references = 1, AH
    }, rH.ThinEngine.prototype.updateUniformBuffer = function(HH, BH, LH, AH) {
      this.bindUniformBuffer(HH), void 0 === LH && (LH = 0), void 0 === AH ? BH instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, LH, BH) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, LH, new Float32Array(BH)) : BH instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, BH.subarray(LH, LH + AH)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(BH).subarray(LH, LH + AH)), this.bindUniformBuffer(null)
    }, rH.ThinEngine.prototype.bindUniformBuffer = function(HH) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, HH ? HH.underlyingResource : null)
    }, rH.ThinEngine.prototype.bindUniformBufferBase = function(HH, BH, LH) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, BH, HH ? HH.underlyingResource : null)
    }, rH.ThinEngine.prototype.bindUniformBlock = function(HH, BH, LH) {
      const AH = HH.program,
        rH = this._gl.getUniformBlockIndex(AH, BH);
      4294967295 !== rH && this._gl.uniformBlockBinding(AH, rH, LH)
    });
    var PH = LH(41154),
      TH = LH(41184);
    let UH = !1;
    UH || (UH = !0, TH.c.prototype.displayLoadingUI = function() {
      if (!(0, PH.k)()) return;
      const HH = this.loadingScreen;
      HH && HH.displayLoadingUI()
    }, TH.c.prototype.hideLoadingUI = function() {
      if (!(0, PH.k)()) return;
      const HH = this._loadingScreen;
      HH && HH.hideLoadingUI()
    }, Object.defineProperty(TH.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = TH.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(HH) {
        this._loadingScreen = HH
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(TH.c.prototype, "loadingUIText", {
      set: function(HH) {
        this.loadingScreen.loadingUIText = HH
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(TH.c.prototype, "loadingUIBackgroundColor", {
      set: function(HH) {
        this.loadingScreen.loadingUIBackgroundColor = HH
      },
      enumerable: !0,
      configurable: !0
    })), (0, LH(41239).e)();
    let VH = !1;
    VH || (VH = !0, TH.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, TH.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, TH.c.prototype.setDepthFunction = function(HH) {
      this._depthCullingState.depthFunc = HH
    }, TH.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, TH.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, TH.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, TH.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, TH.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, TH.c.prototype.setDepthWrite = function(HH) {
      this._depthCullingState.depthMask = HH
    }, TH.c.prototype.setAlphaConstants = function(HH, BH, LH, AH) {
      this._alphaState.setAlphaBlendConstants(HH, BH, LH, AH)
    }, TH.c.prototype.getAlphaMode = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[HH]
    }, TH.c.prototype.getAlphaEquation = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[HH]
    });
    let OH = !1;
    OH || (OH = !0, TH.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, TH.c.prototype.setStencilBuffer = function(HH) {
      this._stencilState.stencilTest = HH
    }, TH.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, TH.c.prototype.setStencilMask = function(HH) {
      this._stencilState.stencilMask = HH
    }, TH.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, TH.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, TH.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, TH.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, TH.c.prototype.setStencilFunction = function(HH) {
      this._stencilState.stencilFunc = HH
    }, TH.c.prototype.setStencilBackFunction = function(HH) {
      this._stencilState.stencilBackFunc = HH
    }, TH.c.prototype.setStencilFunctionReference = function(HH) {
      this._stencilState.stencilFuncRef = HH
    }, TH.c.prototype.setStencilFunctionMask = function(HH) {
      this._stencilState.stencilFuncMask = HH
    }, TH.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, TH.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, TH.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, TH.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, TH.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, TH.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, TH.c.prototype.setStencilOperationFail = function(HH) {
      this._stencilState.stencilOpStencilFail = HH
    }, TH.c.prototype.setStencilBackOperationFail = function(HH) {
      this._stencilState.stencilBackOpStencilFail = HH
    }, TH.c.prototype.setStencilOperationDepthFail = function(HH) {
      this._stencilState.stencilOpDepthFail = HH
    }, TH.c.prototype.setStencilBackOperationDepthFail = function(HH) {
      this._stencilState.stencilBackOpDepthFail = HH
    }, TH.c.prototype.setStencilOperationPass = function(HH) {
      this._stencilState.stencilOpStencilDepthPass = HH
    }, TH.c.prototype.setStencilBackOperationPass = function(HH) {
      this._stencilState.stencilBackOpStencilDepthPass = HH
    }, TH.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, TH.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    LH(41328);
    let bH = !1;
    bH || (bH = !0, TH.c.prototype.createDepthStencilTexture = function(HH, BH, LH) {
      if (BH.isCube) {
        const LH = HH.width || HH;
        return this._createDepthStencilCubeTexture(LH, BH)
      }
      return this._createDepthStencilTexture(HH, BH, LH)
    });
    LH(41330), LH(41370);
    let kH = !1;
    kH || (kH = !0, rH.ThinEngine.prototype.enableScissor = function(HH, BH, LH, AH) {
      const rH = this._gl;
      rH.enable(rH.SCISSOR_TEST), rH.scissor(HH, BH, LH, AH)
    }, rH.ThinEngine.prototype.disableScissor = function() {
      const HH = this._gl;
      HH.disable(HH.SCISSOR_TEST)
    })
  },
  41113: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => TH
    });
    var AH = LH(41122),
      rH = LH(37989),
      SH = LH(41129),
      hH = LH(41190);
    class tH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new zH(HH)
      }
      sampleFrame() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const BH = HH - this._lastFrameTimeMs;
            this._rollingFrameTime.add(BH)
          }
          this._lastFrameTimeMs = HH
        }
      }
      get averageFrameTime() {
        return this._rollingFrameTime.average
      }
      get averageFrameTimeVariance() {
        return this._rollingFrameTime.variance
      }
      get instantaneousFrameTime() {
        return this._rollingFrameTime.history(0)
      }
      get averageFPS() {
        return 1e3 / this._rollingFrameTime.average
      }
      get instantaneousFPS() {
        const HH = this._rollingFrameTime.history(0);
        return 0 === HH ? 0 : 1e3 / HH
      }
      get isSaturated() {
        return this._rollingFrameTime.isSaturated()
      }
      enable() {
        this._enabled = !0
      }
      disable() {
        this._enabled = !1, this._lastFrameTimeMs = null
      }
      get isEnabled() {
        return this._enabled
      }
      reset() {
        this._lastFrameTimeMs = null, this._rollingFrameTime.reset()
      }
    }
    class zH {
      constructor(HH) {
        this._samples = new Array(HH), this.reset()
      }
      add(HH) {
        let BH;
        if (this.isSaturated()) {
          const HH = this._samples[this._pos];
          BH = HH - this.average, this.average -= BH / (this._sampleCount - 1), this._m2 -= BH * (HH - this.average)
        } else this._sampleCount++;
        BH = HH - this.average, this.average += BH / this._sampleCount, this._m2 += BH * (HH - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = HH, this._pos++, this._pos %= this._samples.length
      }
      history(HH) {
        if (HH >= this._sampleCount || HH >= this._samples.length) return 0;
        const BH = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(BH - HH)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(HH) {
        const BH = this._samples.length;
        return (HH % BH + BH) % BH
      }
    }
    var CH = LH(41210),
      EH = LH(39595),
      XH = LH(41225),
      GH = LH(41184),
      YH = LH(41154);

    function uH(HH) {
      const BH = function(HH) {
        if (!(0, YH.d)() || !document.body) return null;
        const BH = document.createElement("span");
        BH.textContent = "Hg", BH.style.font = HH;
        const LH = document.createElement("div");
        LH.style.display = "inline-block", LH.style.width = "1px", LH.style.height = "0px", LH.style.verticalAlign = "bottom";
        const AH = document.createElement("div");
        let rH, SH;
        AH.style.whiteSpace = "nowrap", AH.appendChild(BH), AH.appendChild(LH), document.body.appendChild(AH);
        try {
          SH = LH.getBoundingClientRect().top - BH.getBoundingClientRect().top, LH.style.verticalAlign = "baseline", rH = LH.getBoundingClientRect().top - BH.getBoundingClientRect().top
        } finally {
          document.body.removeChild(AH)
        }
        const hH = {
          ascent: rH,
          height: SH,
          descent: SH - rH
        };
        return QH(hH) ? hH : null
      }(HH);
      if (BH) return BH;
      const LH = function(HH) {
        let BH = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? BH = new OffscreenCanvas(64, 64) : (0, YH.d)() && "function" === typeof document.createElement && (BH = document.createElement("canvas"), BH.width = 64, BH.height = 64);
          const LH = BH?.getContext("2d");
          if (!LH) return null;
          LH.font = HH;
          const AH = LH.measureText("Hg"),
            rH = Number(AH.actualBoundingBoxAscent ?? AH.fontBoundingBoxAscent),
            SH = Number(AH.actualBoundingBoxDescent ?? AH.fontBoundingBoxDescent),
            hH = {
              ascent: rH,
              height: rH + SH,
              descent: SH
            };
          return QH(hH) ? hH : null
        } catch {
          return null
        } finally {
          const HH = BH;
          "function" === typeof HH?.dispose && HH.dispose()
        }
      }(HH);
      return LH || function(HH) {
        const BH = Math.max(1, function(HH) {
            const BH = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(HH || ""));
            return BH ? Number(BH[1]) : 16
          }(HH)),
          LH = .8 * BH,
          AH = .2 * BH;
        return {
          ascent: LH,
          height: LH + AH,
          descent: AH
        }
      }(HH)
    }

    function QH(HH) {
      return Number.isFinite(HH.ascent) && Number.isFinite(HH.height) && Number.isFinite(HH.descent) && HH.height > 0
    }

    function WH(HH) {
      if (HH.requestPointerLock) {
        const BH = HH.requestPointerLock();
        BH instanceof Promise ? BH.then((() => {
          HH.focus()
        })).catch((() => {})) : HH.focus()
      }
    }
    var MH = LH(41231),
      xH = LH(41179),
      vH = LH(41239),
      PH = LH(41247);
    class TH extends SH.ThinEngine {
      static get NpmPackage() {
        return GH.c.NpmPackage
      }
      static get Version() {
        return GH.c.Version
      }
      static get Instances() {
        return rH.d.Instances
      }
      static get LastCreatedEngine() {
        return rH.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return rH.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(HH) {
        return GH.c.DefaultLoadingScreenFactory(HH)
      }
      get _supportsHardwareTextureRescaling() {
        return !!TH._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, vH.e)(), (0, PH.c)(), super(HH, BH, LH, AH), this._performanceMonitor = new tH, this._drawCalls = new MH.e, HH && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(HH) {
        super._sharedInit(HH),
          function(HH, BH, LH) {
            HH._onCanvasFocus = () => {
              HH.onCanvasFocusObservable.notifyObservers(HH)
            }, HH._onCanvasBlur = () => {
              HH.onCanvasBlurObservable.notifyObservers(HH)
            }, HH._onCanvasContextMenu = BH => {
              HH.disableContextMenu && BH.preventDefault()
            }, BH.addEventListener("focus", HH._onCanvasFocus), BH.addEventListener("blur", HH._onCanvasBlur), BH.addEventListener("contextmenu", HH._onCanvasContextMenu), HH._onBlur = () => {
              HH.disablePerformanceMonitorInBackground && HH.performanceMonitor.disable(), HH._windowIsBackground = !0
            }, HH._onFocus = () => {
              HH.disablePerformanceMonitorInBackground && HH.performanceMonitor.enable(), HH._windowIsBackground = !1
            }, HH._onCanvasPointerOut = LH => {
              document.elementFromPoint(LH.clientX, LH.clientY) !== BH && HH.onCanvasPointerOutObservable.notifyObservers(LH)
            };
            const AH = HH.getHostWindow();
            AH && "function" === typeof AH.addEventListener && (AH.addEventListener("blur", HH._onBlur), AH.addEventListener("focus", HH._onFocus)), BH.addEventListener("pointerout", HH._onCanvasPointerOut), LH.doNotHandleTouchAction || function(HH) {
              HH && HH.setAttribute && (HH.setAttribute("touch-action", "none"), HH.style.touchAction = "none", HH.style.webkitTapHighlightColor = "transparent")
            }(BH), !GH.c.audioEngine && LH.audioEngine && GH.c.AudioEngineFactory && (GH.c.audioEngine = GH.c.AudioEngineFactory(HH.getRenderingCanvas(), HH.getAudioContext(), HH.getAudioDestination())), (0, YH.d)() && (HH._onFullscreenChange = () => {
              HH.isFullscreen = !!document.fullscreenElement, HH.isFullscreen && HH._pointerLockRequested && BH && WH(BH)
            }, document.addEventListener("fullscreenchange", HH._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", HH._onFullscreenChange, !1), HH._onPointerLockChange = () => {
              HH.isPointerLock = document.pointerLockElement === BH
            }, document.addEventListener("pointerlockchange", HH._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", HH._onPointerLockChange, !1)), HH.enableOfflineSupport = void 0 !== GH.c.OfflineProviderFactory, HH._deterministicLockstep = !!LH.deterministicLockstep, HH._lockstepMaxSteps = LH.lockstepMaxSteps || 0, HH._timeStep = LH.timeStep || 1 / 60
          }(this, HH, this._creationOptions)
      }
      resizeImageBitmap(HH, BH, LH) {
        return function(HH, BH, LH, AH) {
          const rH = HH.createCanvas(LH, AH).getContext("2d");
          if (!rH) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return rH.drawImage(BH, 0, 0), rH.getImageData(0, 0, LH, AH).data
        }(this, HH, BH, LH)
      }
      async _createImageBitmapFromSource(HH, BH) {
        return await async function(HH, BH, LH) {
          return await new Promise(((AH, rH) => {
            const SH = new Image;
            SH.onload = () => {
              SH.decode().then((() => {
                HH.createImageBitmap(SH, LH).then((HH => {
                  AH(HH)
                }))
              }))
            }, SH.onerror = () => {
              rH(`Error loading image ${SH.src}`)
            }, SH.src = BH
          }))
        }(this, HH, BH)
      }
      switchFullscreen(HH) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(HH)
      }
      enterFullscreen(HH) {
        this.isFullscreen || (this._pointerLockRequested = HH, this._renderingCanvas && function(HH) {
          const BH = HH.requestFullscreen || HH.webkitRequestFullscreen;
          BH && BH.call(HH)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const HH = document;
          document.exitFullscreen ? document.exitFullscreen() : HH.webkitCancelFullScreen && HH.webkitCancelFullScreen()
        }()
      }
      setDitheringState(HH) {
        HH ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(HH) {
        HH ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(HH, BH, LH, AH) {
        const rH = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(HH, BH, LH, AH), rH
      }
      scissorClear(HH, BH, LH, AH, rH) {
        this.enableScissor(HH, BH, LH, AH), this.clear(rH, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(HH) {
        const BH = this._gl.getAttachedShaders(HH);
        return BH ? this._gl.getShaderSource(BH[0]) : null
      }
      getFragmentShaderSource(HH) {
        const BH = this._gl.getAttachedShaders(HH);
        return BH ? this._gl.getShaderSource(BH[1]) : null
      }
      set framebufferDimensionsObject(HH) {
        this._framebufferDimensionsObject = HH, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const HH of this.scenes) HH.resetCachedMaterial(), HH._rebuildGeometries();
        for (const HH of this._virtualScenes) HH.resetCachedMaterial(), HH._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(HH) {
        return uH(HH)
      }
      enterPointerlock() {
        this._renderingCanvas && WH(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      WU() {
        this._measureFps(), super.WU()
      }
      _deletePipelineContext(HH) {
        const BH = HH;
        BH && BH.program && BH.transformFeedback && (this.deleteTransformFeedback(BH.transformFeedback), BH.transformFeedback = null), super._deletePipelineContext(HH)
      }
      createShaderProgram(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        rH = rH || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const hH = super.createShaderProgram(HH, BH, LH, AH, rH, SH);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), hH
      }
      _createShaderProgram(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const SH = AH.createProgram();
        if (HH.program = SH, !SH) throw new Error("Unable to create program");
        if (AH.attachShader(SH, BH), AH.attachShader(SH, LH), this.hQ > 1 && rH) {
          const BH = this.createTransformFeedback();
          this.bindTransformFeedback(BH), this.setTranformFeedbackVaryings(SH, rH), HH.transformFeedback = BH
        }
        return AH.linkProgram(SH), this.hQ > 1 && rH && this.bindTransformFeedback(null), HH.context = AH, HH.vertexShader = BH, HH.fragmentShader = LH, HH.isParallelCompiled || this._finalizePipelineContext(HH), SH
      }
      _releaseTexture(HH) {
        super._releaseTexture(HH)
      }
      _releaseRenderTargetWrapper(HH) {
        super._releaseRenderTargetWrapper(HH);
        for (const BH of this.scenes) {
          for (const LH of BH.postProcesses) LH._outputTexture === HH && (LH._outputTexture = null);
          for (const LH of BH.cameras)
            for (const BH of LH._postProcesses) BH && BH._outputTexture === HH && (BH._outputTexture = null)
        }
      }
      _rescaleTexture(HH, BH, LH, AH, rH) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const SH = this.createRenderTargetTexture({
          width: BH.width,
          height: BH.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && TH._RescalePostProcessFactory && (this._rescalePostProcess = TH._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const hH = () => {
              this._rescalePostProcess.onApply = function(BH) {
                BH._bindTexture("textureSampler", HH)
              };
              let hH = LH;
              hH || (hH = this.scenes[this.scenes.length - 1]), hH.postProcessManager.directRender([this._rescalePostProcess], SH, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, BH, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, AH, 0, 0, BH.width, BH.height, 0), this.unBindFramebuffer(SH), SH.dispose(), rH && rH()
            },
            tH = this._rescalePostProcess.getEffect();
          tH ? tH.executeWhenCompiled(hH) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((HH => {
            HH.executeWhenCompiled(hH)
          }))
        }
      }
      wrapWebGLTexture(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const hH = new XH.e(HH, this._gl),
          tH = new AH.e(this, 15, !0);
        return tH._hardwareTexture = hH, tH.baseWidth = rH, tH.baseHeight = SH, tH.width = rH, tH.height = SH, tH.isReady = !0, tH.useMipMaps = BH, this.updateTextureSamplingMode(LH, tH), tH
      }
      updateWrappedWebGLTexture(HH, BH) {
        if (15 !== HH.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const AH of this._renderTargetWrapperCache)
          if (AH.textures?.includes(HH)) {
            if (AH.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (AH._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } HH._hardwareTexture = new XH.e(BH, this._gl), HH.isReady = !0, HH._cachedCoordinatesMode = null, HH._cachedWrapU = null, HH._cachedWrapV = null, HH._cachedWrapR = null, HH._cachedAnisotropicFilteringLevel = null;
        for (const AH in this._boundTexturesCache) this._boundTexturesCache[AH] === HH && (this._boundTexturesCache[AH] = null);
        this.updateTextureSamplingMode(HH.samplingMode, HH);
        const LH = this._gl;
        for (const AH of this._renderTargetWrapperCache) {
          if (AH.texture !== HH) continue;
          const rH = AH,
            SH = AH.samples,
            hH = SH > 1;
          rH._framebuffer && LH.deleteFramebuffer(rH._framebuffer), !hH && rH._depthStencilBuffer && (LH.deleteRenderbuffer(rH._depthStencilBuffer), rH._depthStencilBuffer = null);
          const tH = this._currentFramebuffer,
            zH = LH.createFramebuffer();
          this._bindUnboundFramebuffer(zH), LH.framebufferTexture2D(LH.FRAMEBUFFER, LH.COLOR_ATTACHMENT0, LH.TEXTURE_2D, BH, 0), hH || (rH._depthStencilBuffer = this._setupFramebufferDepthAttachments(AH._generateStencilBuffer, AH._generateDepthBuffer, AH.width, AH.height)), this._bindUnboundFramebuffer(tH), rH._framebuffer = zH, hH && (AH._samples = 1, this.updateRenderTargetTextureSampleCount(rH, SH))
        }
      }
      _uploadImageToTexture(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const rH = this._gl,
          SH = this._getWebGLTextureType(HH.type),
          hH = this._getInternalFormat(HH.format),
          tH = this._getRGBABufferInternalSizedFormat(HH.type, hH),
          zH = HH.isCube ? rH.TEXTURE_CUBE_MAP : rH.TEXTURE_2D;
        this._bindTextureDirectly(zH, HH, !0), this._unpackFlipY(HH.invertY);
        let CH = rH.TEXTURE_2D;
        HH.isCube && (CH = rH.TEXTURE_CUBE_MAP_POSITIVE_X + LH), rH.texImage2D(CH, AH, tH, hH, SH, BH), this._bindTextureDirectly(zH, null, !0)
      }
      updateTextureComparisonFunction(HH, BH) {
        if (1 === this.hQ) return void EH.e.Error("WebGL 1 does not support texture comparison.");
        const LH = this._gl;
        HH.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, HH, !0), 0 === BH ? (LH.texParameteri(LH.TEXTURE_CUBE_MAP, LH.TEXTURE_COMPARE_FUNC, 515), LH.texParameteri(LH.TEXTURE_CUBE_MAP, LH.TEXTURE_COMPARE_MODE, LH.NONE)) : (LH.texParameteri(LH.TEXTURE_CUBE_MAP, LH.TEXTURE_COMPARE_FUNC, BH), LH.texParameteri(LH.TEXTURE_CUBE_MAP, LH.TEXTURE_COMPARE_MODE, LH.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, HH, !0), 0 === BH ? (LH.texParameteri(LH.TEXTURE_2D, LH.TEXTURE_COMPARE_FUNC, 515), LH.texParameteri(LH.TEXTURE_2D, LH.TEXTURE_COMPARE_MODE, LH.NONE)) : (LH.texParameteri(LH.TEXTURE_2D, LH.TEXTURE_COMPARE_FUNC, BH), LH.texParameteri(LH.TEXTURE_2D, LH.TEXTURE_COMPARE_MODE, LH.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), HH._comparisonFunction = BH
      }
      createInstancesBuffer(HH) {
        const BH = this._gl.createBuffer();
        if (!BH) throw new Error("Unable to create instance buffer");
        const LH = new CH.b(BH);
        return LH.aX = HH, this.bindArrayBuffer(LH), this._gl.bufferData(this._gl.ARRAY_BUFFER, HH, this._gl.DYNAMIC_DRAW), LH.references = 1, LH
      }
      deleteInstancesBuffer(HH) {
        this._gl.deleteBuffer(HH)
      }
      async _clientWaitAsync(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const AH = this._gl;
        return await new Promise(((rH, SH) => {
          (0, xH.f)((() => {
            const LH = AH.clientWaitSync(HH, BH, 0);
            if (LH == AH.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return LH != AH.TIMEOUT_EXPIRED
          }), rH, SH, LH)
        }))
      }
      _readPixelsAsync(HH, BH, LH, AH, rH, SH, hH) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const tH = this._gl,
          zH = tH.createBuffer();
        tH.bindBuffer(tH.PIXEL_PACK_BUFFER, zH), tH.bufferData(tH.PIXEL_PACK_BUFFER, hH.byteLength, tH.STREAM_READ), tH.readPixels(HH, BH, LH, AH, rH, SH, 0), tH.bindBuffer(tH.PIXEL_PACK_BUFFER, null);
        const CH = tH.fenceSync(tH.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return CH ? (tH.flush(), this._clientWaitAsync(CH, 0, 10).then((() => (tH.deleteSync(CH), tH.bindBuffer(tH.PIXEL_PACK_BUFFER, zH), tH.getBufferSubData(tH.PIXEL_PACK_BUFFER, 0, hH), tH.bindBuffer(tH.PIXEL_PACK_BUFFER, null), tH.deleteBuffer(zH), hH)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(HH, BH) {
            1 === rH.d.Instances.length && GH.c.audioEngine && (GH.c.audioEngine.dispose(), GH.c.audioEngine = null);
            const LH = HH.getHostWindow();
            LH && "function" === typeof LH.removeEventListener && (LH.removeEventListener("blur", HH._onBlur), LH.removeEventListener("focus", HH._onFocus)), BH && (BH.removeEventListener("focus", HH._onCanvasFocus), BH.removeEventListener("blur", HH._onCanvasBlur), BH.removeEventListener("pointerout", HH._onCanvasPointerOut), BH.removeEventListener("contextmenu", HH._onCanvasContextMenu)), (0, YH.d)() && (document.removeEventListener("fullscreenchange", HH._onFullscreenChange), document.removeEventListener("mozfullscreenchange", HH._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", HH._onFullscreenChange), document.removeEventListener("msfullscreenchange", HH._onFullscreenChange), document.removeEventListener("pointerlockchange", HH._onPointerLockChange), document.removeEventListener("mspointerlockchange", HH._onPointerLockChange), document.removeEventListener("mozpointerlockchange", HH._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", HH._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    TH.ALPHA_DISABLE = 0, TH.ALPHA_ADD = 1, TH.ALPHA_COMBINE = 2, TH.ALPHA_SUBTRACT = 3, TH.ALPHA_MULTIPLY = 4, TH.ALPHA_MAXIMIZED = 5, TH.ALPHA_ONEONE = 6, TH.ALPHA_PREMULTIPLIED = 7, TH.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, TH.ALPHA_INTERPOLATE = 9, TH.ALPHA_SCREENMODE = 10, TH.DELAYLOADSTATE_NONE = 0, TH.DELAYLOADSTATE_LOADED = 1, TH.DELAYLOADSTATE_LOADING = 2, TH.DELAYLOADSTATE_NOTLOADED = 4, TH.NEVER = 512, TH.ALWAYS = 519, TH.LESS = 513, TH.EQUAL = 514, TH.LEQUAL = 515, TH.GREATER = 516, TH.GEQUAL = 518, TH.NOTEQUAL = 517, TH.KEEP = 7680, TH.REPLACE = 7681, TH.INCR = 7682, TH.DECR = 7683, TH.INVERT = 5386, TH.INCR_WRAP = 34055, TH.DECR_WRAP = 34056, TH.TEXTURE_CLAMP_ADDRESSMODE = 0, TH.TEXTURE_WRAP_ADDRESSMODE = 1, TH.TEXTURE_MIRROR_ADDRESSMODE = 2, TH.TEXTUREFORMAT_ALPHA = 0, TH.TEXTUREFORMAT_LUMINANCE = 1, TH.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, TH.TEXTUREFORMAT_RGB = 4, TH.TEXTUREFORMAT_RGBA = 5, TH.TEXTUREFORMAT_RED = 6, TH.TEXTUREFORMAT_R = 6, TH.TEXTUREFORMAT_R16_UNORM = 33322, TH.TEXTUREFORMAT_RG16_UNORM = 33324, TH.TEXTUREFORMAT_RGB16_UNORM = 32852, TH.TEXTUREFORMAT_RGBA16_UNORM = 32859, TH.TEXTUREFORMAT_R16_SNORM = 36760, TH.TEXTUREFORMAT_RG16_SNORM = 36761, TH.TEXTUREFORMAT_RGB16_SNORM = 36762, TH.TEXTUREFORMAT_RGBA16_SNORM = 36763, TH.TEXTUREFORMAT_RG = 7, TH.TEXTUREFORMAT_RED_INTEGER = 8, TH.TEXTUREFORMAT_R_INTEGER = 8, TH.TEXTUREFORMAT_RG_INTEGER = 9, TH.TEXTUREFORMAT_RGB_INTEGER = 10, TH.TEXTUREFORMAT_RGBA_INTEGER = 11, TH.TEXTURETYPE_UNSIGNED_BYTE = 0, TH.TEXTURETYPE_UNSIGNED_INT = 0, TH.TEXTURETYPE_FLOAT = 1, TH.TEXTURETYPE_HALF_FLOAT = 2, TH.TEXTURETYPE_BYTE = 3, TH.TEXTURETYPE_SHORT = 4, TH.TEXTURETYPE_UNSIGNED_SHORT = 5, TH.TEXTURETYPE_INT = 6, TH.TEXTURETYPE_UNSIGNED_INTEGER = 7, TH.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, TH.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, TH.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, TH.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, TH.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, TH.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, TH.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, TH.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, TH.TEXTURE_NEAREST_SAMPLINGMODE = 1, TH.TEXTURE_BILINEAR_SAMPLINGMODE = 2, TH.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, TH.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, TH.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, TH.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, TH.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, TH.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, TH.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, TH.TEXTURE_NEAREST_LINEAR = 7, TH.TEXTURE_NEAREST_NEAREST = 1, TH.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, TH.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, TH.TEXTURE_LINEAR_LINEAR = 2, TH.TEXTURE_LINEAR_NEAREST = 12, TH.TEXTURE_EXPLICIT_MODE = 0, TH.TEXTURE_SPHERICAL_MODE = 1, TH.TEXTURE_PLANAR_MODE = 2, TH.TEXTURE_CUBIC_MODE = 3, TH.TEXTURE_PROJECTION_MODE = 4, TH.TEXTURE_SKYBOX_MODE = 5, TH.TEXTURE_INVCUBIC_MODE = 6, TH.TEXTURE_EQUIRECTANGULAR_MODE = 7, TH.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, TH.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, TH.SCALEMODE_FLOOR = 1, TH.SCALEMODE_NEAREST = 2, TH.SCALEMODE_CEILING = 3
  },
  41271: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(41229);
    class rH {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(HH) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = HH, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, HH && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, AH.b)(HH.format))
      }
      get depthStencilTextureWithStencil() {
        return this._depthStencilTextureWithStencil
      }
      get isCube() {
        return this._isCube
      }
      get isMulti() {
        return this._isMulti
      }
      get is2DArray() {
        return this.layers > 0
      }
      get is3D() {
        return this.depth > 0
      }
      get size() {
        return this.width
      }
      get width() {
        return this._size.width ?? this._size
      }
      get height() {
        return this._size.height ?? this._size
      }
      get layers() {
        return this._size.layers || 0
      }
      get depth() {
        return this._size.depth || 0
      }
      get texture() {
        return this._textures?.[0] ?? null
      }
      get textures() {
        return this._textures
      }
      get faceIndices() {
        return this._faceIndices
      }
      get layerIndices() {
        return this._layerIndices
      }
      getBaseArrayLayer(HH) {
        if (!this._textures) return -1;
        const BH = this._textures[HH],
          LH = this._layerIndices?.[HH] ?? 0,
          AH = this._faceIndices?.[HH] ?? 0;
        return BH.isCube ? 6 * LH + AH : BH.is3D ? 0 : LH
      }
      get samples() {
        return this._samples
      }
      setSamples(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === HH && !LH) return HH;
        const AH = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, HH, BH) : this._engine.updateRenderTargetTextureSampleCount(this, HH);
        return this._samples = HH, AH
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(HH, BH, LH, AH, rH) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = HH, this._isCube = BH, this._size = LH, this._engine = AH, this._depthStencilTexture = null, this.label = rH
      }
      setTextures(HH) {
        Array.isArray(HH) ? this._textures = HH : this._textures = HH ? [HH] : null
      }
      setTexture(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[BH] !== HH && (this._textures[BH] && LH && this._textures[BH].dispose(), this._textures[BH] = HH)
      }
      setLayerAndFaceIndices(HH, BH) {
        this._layerIndices = HH, this._faceIndices = BH
      }
      setLayerAndFaceIndex() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== BH && BH >= 0 && (this._layerIndices[HH] = BH), void 0 !== LH && LH >= 0 && (this._faceIndices[HH] = LH)
      }
      createDepthStencilTexture() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = LH, this._depthStencilTextureLabel = SH, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: BH,
          comparisonFunction: HH,
          generateStencil: LH,
          isCube: this._isCube,
          samples: AH,
          depthTextureFormat: rH,
          label: SH
        }, this), this._depthStencilTexture
      }
      _shareDepth(HH) {
        this.shareDepth(HH)
      }
      shareDepth(HH) {
        this._depthStencilTexture && (HH._depthStencilTexture && HH._depthStencilTexture.dispose(), HH._depthStencilTexture = this._depthStencilTexture, HH._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(HH) {
        this.texture && this.texture._swapAndDie(HH), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let HH = null;
        if (this._isMulti) {
          const BH = this.textures;
          if (BH && BH.length > 0) {
            let LH = !1,
              AH = BH.length,
              rH = -1;
            const SH = BH[BH.length - 1]._source;
            14 !== SH && 12 !== SH || (LH = !0, rH = BH[BH.length - 1].format, AH--);
            const hH = [],
              tH = [],
              zH = [],
              CH = [],
              EH = [],
              XH = [],
              GH = [],
              YH = {};
            for (let HH = 0; HH < AH; ++HH) {
              const LH = BH[HH];
              hH.push(LH.samplingMode), tH.push(LH.type), zH.push(LH.format);
              void 0 !== YH[LH.uniqueId] ? (CH.push(-1), GH.push(0)) : (YH[LH.uniqueId] = HH, LH.is2DArray ? (CH.push(35866), GH.push(LH.depth)) : LH.isCube ? (CH.push(34067), GH.push(0)) : LH.is3D ? (CH.push(32879), GH.push(LH.depth)) : (CH.push(3553), GH.push(0))), this._faceIndices && EH.push(this._faceIndices[HH] ?? 0), this._layerIndices && XH.push(this._layerIndices[HH] ?? 0)
            }
            const uH = {
                samplingModes: hH,
                generateMipMaps: BH[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: LH,
                depthTextureFormat: rH,
                types: tH,
                formats: zH,
                wtH: AH,
                targetTypes: CH,
                faceIndex: EH,
                layerIndex: XH,
                layerCounts: GH,
                label: this.label
              },
              QH = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            HH = this._engine.createMultipleRenderTarget(QH, uH);
            for (let WH = 0; WH < AH; ++WH) {
              if (-1 !== CH[WH]) continue;
              const LH = YH[BH[WH].uniqueId];
              HH.setTexture(HH.textures[LH], WH)
            }
          }
        } else {
          const BH = {};
          if (BH.generateDepthBuffer = this._generateDepthBuffer, BH.generateMipMaps = this.texture?.generateMipMaps ?? !1, BH.generateStencilBuffer = this._generateStencilBuffer, BH.samplingMode = this.texture?.samplingMode, BH.type = this.texture?.type, BH.format = this.texture?.format, BH.noColorAttachment = !this._textures, BH.label = this.label, this.isCube) HH = this._engine.createRenderTargetCubeTexture(this.width, BH);
          else {
            const LH = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            HH = this._engine.createRenderTargetTexture(LH, BH)
          }
          HH.texture && (HH.texture.isReady = !0)
        }
        return HH
      }
      _swapRenderTargetWrapper(HH) {
        if (this._textures && HH._textures)
          for (let BH = 0; BH < this._textures.length; ++BH) this._textures[BH]._swapAndDie(HH._textures[BH], !1), HH._textures[BH].isReady = !0;
        this._depthStencilTexture && HH._depthStencilTexture && (this._depthStencilTexture._swapAndDie(HH._depthStencilTexture), HH._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const HH = this._cloneRenderTargetWrapper();
        if (HH) {
          if (this._depthStencilTexture) {
            const BH = this._depthStencilTexture.samplingMode,
              LH = this._depthStencilTexture.format,
              AH = 2 === BH || 3 === BH || 11 === BH;
            HH.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, AH, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, LH, this._depthStencilTextureLabel)
          }
          this.samples > 1 && HH.setSamples(this.samples), HH._swapRenderTargetWrapper(this), HH.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let HH = 0; HH < this._textures.length; ++HH) this._textures[HH].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41713: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    class AH {
      static get ForceFullSceneLoadingForIncremental() {
        return AH._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(HH) {
        AH._ForceFullSceneLoadingForIncremental = HH
      }
      static get ShowLoadingScreen() {
        return AH._ShowLoadingScreen
      }
      static set ShowLoadingScreen(HH) {
        AH._ShowLoadingScreen = HH
      }
      static get loggingLevel() {
        return AH._LoggingLevel
      }
      static set loggingLevel(HH) {
        AH._LoggingLevel = HH
      }
      static get CleanBoneMatrixWeights() {
        return AH._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(HH) {
        AH._CleanBoneMatrixWeights = HH
      }
    }
    AH._ForceFullSceneLoadingForIncremental = !1, AH._ShowLoadingScreen = !0, AH._CleanBoneMatrixWeights = !1, AH._LoggingLevel = 0
  },
  41372: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(39595);
    const rH = new Map;

    function SH(HH, BH) {
      (function(HH) {
        return rH.delete(HH)
      })(HH) && AH.e.Warn(`Extension with the name '${HH}' already exists`), rH.set(HH, BH)
    }

    function hH(HH, BH) {
      "image/ktx" !== BH && "image/ktx2" !== BH || (HH = ".ktx"), rH.has(HH) || (HH.endsWith(".ies") && SH(".ies", (async () => await LH.e(618).then((() => LH(45251))).then((HH => new HH._IESTextureLoader)))), HH.endsWith(".dds") && SH(".dds", (async () => await LH.e(616).then((() => LH(45254))).then((HH => new HH._DDSTextureLoader)))), HH.endsWith(".basis") && SH(".basis", (async () => await LH.e(619).then((() => LH(45258))).then((HH => new HH._BasisTextureLoader)))), HH.endsWith(".env") && SH(".env", (async () => await Promise.all([LH.e(620), LH.e(617)]).then((() => LH(45261))).then((HH => new HH._ENVTextureLoader)))), HH.endsWith(".hdr") && SH(".hdr", (async () => await LH.e(621).then((() => LH(45309))).then((HH => new HH._HDRTextureLoader)))), (HH.endsWith(".ktx") || HH.endsWith(".ktx2")) && (SH(".ktx", (async () => await LH.e(622).then((() => LH(45312))).then((HH => new HH._KTXTextureLoader)))), SH(".ktx2", (async () => await LH.e(622).then((() => LH(45312))).then((HH => new HH._KTXTextureLoader))))), HH.endsWith(".tga") && SH(".tga", (async () => await LH.e(623).then((() => LH(45323))).then((HH => new HH._TGATextureLoader)))), HH.endsWith(".exr") && SH(".exr", (async () => await LH.e(624).then((() => LH(45326))).then((HH => new HH._ExrTextureLoader)))));
      const AH = rH.get(HH);
      return AH ? Promise.resolve(AH(BH)) : null
    }
  },
  41742: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => CH
    });
    var AH = LH(41573),
      rH = LH(41326),
      SH = LH(38012);
    class hH extends AH.c {
      get BBH() {
        return this._subMaterials
      }
      set BBH(HH) {
        this._subMaterials = HH, this._hookArray(HH)
      }
      getChildren() {
        return this.BBH
      }
      constructor(HH, BH) {
        super(HH, BH, !0), this._waitingSubMaterialsUniqueIds = [], this.yN().addMultiMaterial(this), this.BBH = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(HH) {
        var BH = this;
        const LH = HH.push;
        HH.push = function() {
          for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
          const hH = LH.apply(HH, rH);
          return BH._markAllSubMeshesAsTexturesDirty(), hH
        };
        const AH = HH.splice;
        HH.splice = (BH, LH) => {
          const rH = AH.call(HH, BH, LH ?? HH.length);
          return this._markAllSubMeshesAsTexturesDirty(), rH
        }
      }
      getSubMaterial(HH) {
        return HH < 0 || HH >= this.BBH.length ? this.yN().defaultMaterial : this.BBH[HH]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.BBH.map((HH => HH ? HH.getActiveTextures() : [])))
      }
      hasTexture(HH) {
        if (super.hasTexture(HH)) return !0;
        for (let BH = 0; BH < this.BBH.length; BH++)
          if (this.BBH[BH]?.hasTexture(HH)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(HH, BH, LH) {
        for (let AH = 0; AH < this.BBH.length; AH++) {
          const rH = this.BBH[AH];
          if (rH) {
            if (rH._storeEffectOnSubMeshes) {
              if (!rH.isReadyForSubMesh(HH, BH, LH)) return !1;
              continue
            }
            if (!rH.isReady(HH)) return !1
          }
        }
        return !0
      }
      clone(HH, BH) {
        const LH = new hH(HH, this.yN());
        for (let AH = 0; AH < this.BBH.length; AH++) {
          let rH;
          const SH = this.BBH[AH];
          rH = BH && SH ? SH.clone(HH + "-" + SH.name) : this.BBH[AH], LH.BBH.push(rH)
        }
        return LH
      }
      serialize() {
        const HH = {};
        HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, rH.b && (HH.tags = rH.b.GetTags(this)), HH.materialsUniqueIds = [], HH.materials = [];
        for (let BH = 0; BH < this.BBH.length; BH++) {
          const LH = this.BBH[BH];
          LH ? (HH.materialsUniqueIds.push(LH.uniqueId), HH.materials.push(LH.id)) : (HH.materialsUniqueIds.push(null), HH.materials.push(null))
        }
        return HH
      }
      dispose(HH, BH, LH) {
        const AH = this.yN();
        if (!AH) return;
        if (LH)
          for (let SH = 0; SH < this.BBH.length; SH++) {
            const LH = this.BBH[SH];
            LH && LH.dispose(HH, BH)
          }
        const rH = AH.multiMaterials.indexOf(this);
        rH >= 0 && AH.multiMaterials.splice(rH, 1), super.dispose(HH, BH)
      }
    }
    let tH = !1;

    function zH(HH, BH) {
      const LH = new hH(HH.name, BH);
      if (LH.id = HH.id, LH._loadedUniqueId = HH.uniqueId, rH.b && rH.b.AddTagsTo(LH, HH.tags), HH.materialsUniqueIds) LH._waitingSubMaterialsUniqueIds = HH.materialsUniqueIds;
      else
        for (const AH of HH.materials) LH.BBH.push(BH.getLastMaterialById(AH));
      return LH
    }

    function CH() {
      tH || (tH = !0, hH.ParseMultiMaterial = zH, (0, SH.f)("BABYLON.MultiMaterial", hH))
    }
  },
  41504: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH, rH, SH = LH(37963);
    ! function(HH) {
      HH[HH.LOCAL = 0] = "LOCAL", HH[HH.WORLD = 1] = "WORLD", HH[HH.BONE = 2] = "BONE"
    }(AH || (AH = {}));
    class hH {}
    hH.X = new SH.o(1, 0, 0), hH.Y = new SH.o(0, 1, 0), hH.Z = new SH.o(0, 0, 1),
      function(HH) {
        HH[HH.X = 0] = "X", HH[HH.Y = 1] = "Y", HH[HH.Z = 2] = "Z"
      }(rH || (rH = {}))
  },
  41275: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => zH,
      g: () => CH
    });
    var AH = LH(37963);
    const rH = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      SH = [() => 1, HH => HH.y, HH => HH.z, HH => HH.x, HH => HH.x * HH.y, HH => HH.y * HH.z, HH => 3 * HH.z * HH.z - 1, HH => HH.x * HH.z, HH => HH.x * HH.x - HH.y * HH.y],
      hH = (HH, BH) => rH[HH] * SH[HH](BH),
      tH = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class zH {
      constructor() {
        this.preScaled = !1, this.l00 = AH.o.Zero(), this.l1_1 = AH.o.Zero(), this.l10 = AH.o.Zero(), this.l11 = AH.o.Zero(), this.l2_2 = AH.o.Zero(), this.l2_1 = AH.o.Zero(), this.l20 = AH.o.Zero(), this.l21 = AH.o.Zero(), this.l22 = AH.o.Zero()
      }
      addLight(HH, BH, LH) {
        AH.l.lu[0].set(BH.r, BH.g, BH.b);
        const rH = AH.l.lu[0],
          SH = AH.l.lu[1];
        rH.scaleToRef(LH, SH), SH.scaleToRef(hH(0, HH), AH.l.lu[2]), this.l00.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(1, HH), AH.l.lu[2]), this.l1_1.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(2, HH), AH.l.lu[2]), this.l10.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(3, HH), AH.l.lu[2]), this.l11.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(4, HH), AH.l.lu[2]), this.l2_2.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(5, HH), AH.l.lu[2]), this.l2_1.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(6, HH), AH.l.lu[2]), this.l20.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(7, HH), AH.l.lu[2]), this.l21.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(8, HH), AH.l.lu[2]), this.l22.addInPlace(AH.l.lu[2])
      }
      scaleInPlace(HH) {
        this.l00.scaleInPlace(HH), this.l1_1.scaleInPlace(HH), this.l10.scaleInPlace(HH), this.l11.scaleInPlace(HH), this.l2_2.scaleInPlace(HH), this.l2_1.scaleInPlace(HH), this.l20.scaleInPlace(HH), this.l21.scaleInPlace(HH), this.l22.scaleInPlace(HH)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(tH[0]), this.l1_1.scaleInPlace(tH[1]), this.l10.scaleInPlace(tH[2]), this.l11.scaleInPlace(tH[3]), this.l2_2.scaleInPlace(tH[4]), this.l2_1.scaleInPlace(tH[5]), this.l20.scaleInPlace(tH[6]), this.l21.scaleInPlace(tH[7]), this.l22.scaleInPlace(tH[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(rH[0]), this.l1_1.scaleInPlace(rH[1]), this.l10.scaleInPlace(rH[2]), this.l11.scaleInPlace(rH[3]), this.l2_2.scaleInPlace(rH[4]), this.l2_1.scaleInPlace(rH[5]), this.l20.scaleInPlace(rH[6]), this.l21.scaleInPlace(rH[7]), this.l22.scaleInPlace(rH[8])
      }
      updateFromArray(HH) {
        return AH.o.FromArrayToRef(HH[0], 0, this.l00), AH.o.FromArrayToRef(HH[1], 0, this.l1_1), AH.o.FromArrayToRef(HH[2], 0, this.l10), AH.o.FromArrayToRef(HH[3], 0, this.l11), AH.o.FromArrayToRef(HH[4], 0, this.l2_2), AH.o.FromArrayToRef(HH[5], 0, this.l2_1), AH.o.FromArrayToRef(HH[6], 0, this.l20), AH.o.FromArrayToRef(HH[7], 0, this.l21), AH.o.FromArrayToRef(HH[8], 0, this.l22), this
      }
      updateFromFloatsArray(HH) {
        return AH.o.FromFloatsToRef(HH[0], HH[1], HH[2], this.l00), AH.o.FromFloatsToRef(HH[3], HH[4], HH[5], this.l1_1), AH.o.FromFloatsToRef(HH[6], HH[7], HH[8], this.l10), AH.o.FromFloatsToRef(HH[9], HH[10], HH[11], this.l11), AH.o.FromFloatsToRef(HH[12], HH[13], HH[14], this.l2_2), AH.o.FromFloatsToRef(HH[15], HH[16], HH[17], this.l2_1), AH.o.FromFloatsToRef(HH[18], HH[19], HH[20], this.l20), AH.o.FromFloatsToRef(HH[21], HH[22], HH[23], this.l21), AH.o.FromFloatsToRef(HH[24], HH[25], HH[26], this.l22), this
      }
      static FromArray(HH) {
        return (new zH).updateFromArray(HH)
      }
      static FromPolynomial(HH) {
        const BH = new zH;
        return BH.l00 = HH.xx.scale(.376127).add(HH.yy.scale(.376127)).add(HH.zz.scale(.376126)), BH.l1_1 = HH.y.scale(.977204), BH.l10 = HH.z.scale(.977204), BH.l11 = HH.x.scale(.977204), BH.l2_2 = HH.xy.scale(1.16538), BH.l2_1 = HH.yz.scale(1.16538), BH.l20 = HH.zz.scale(1.34567).subtract(HH.xx.scale(.672834)).subtract(HH.yy.scale(.672834)), BH.l21 = HH.zx.scale(1.16538), BH.l22 = HH.xx.scale(1.16538).subtract(HH.yy.scale(1.16538)), BH.l1_1.scaleInPlace(-1), BH.l11.scaleInPlace(-1), BH.l2_1.scaleInPlace(-1), BH.l21.scaleInPlace(-1), BH.scaleInPlace(Math.PI), BH
      }
    }
    class CH {
      constructor() {
        this.x = AH.o.Zero(), this.y = AH.o.Zero(), this.z = AH.o.Zero(), this.xx = AH.o.Zero(), this.yy = AH.o.Zero(), this.zz = AH.o.Zero(), this.xy = AH.o.Zero(), this.yz = AH.o.Zero(), this.zx = AH.o.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = zH.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(HH) {
        AH.l.lu[0].SBH(HH.r, HH.g, HH.b);
        const BH = AH.l.lu[0];
        this.xx.addInPlace(BH), this.yy.addInPlace(BH), this.zz.addInPlace(BH)
      }
      scaleInPlace(HH) {
        this.x.scaleInPlace(HH), this.y.scaleInPlace(HH), this.z.scaleInPlace(HH), this.xx.scaleInPlace(HH), this.yy.scaleInPlace(HH), this.zz.scaleInPlace(HH), this.yz.scaleInPlace(HH), this.zx.scaleInPlace(HH), this.xy.scaleInPlace(HH)
      }
      updateFromHarmonics(HH) {
        return this._harmonics = HH, this.x.Tm(HH.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Tm(HH.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Tm(HH.l10), this.z.scaleInPlace(1.02333), this.xx.Tm(HH.l00), AH.l.lu[0].Tm(HH.l20).scaleInPlace(.247708), AH.l.lu[1].Tm(HH.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).grH(AH.l.lu[0]).addInPlace(AH.l.lu[1]), this.yy.Tm(HH.l00), this.yy.scaleInPlace(.886277).grH(AH.l.lu[0]).grH(AH.l.lu[1]), this.zz.Tm(HH.l00), AH.l.lu[0].Tm(HH.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(AH.l.lu[0]), this.yz.Tm(HH.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Tm(HH.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Tm(HH.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(HH) {
        return (new CH).updateFromHarmonics(HH)
      }
      static FromArray(HH) {
        const BH = new CH;
        return AH.o.FromArrayToRef(HH[0], 0, BH.x), AH.o.FromArrayToRef(HH[1], 0, BH.y), AH.o.FromArrayToRef(HH[2], 0, BH.z), AH.o.FromArrayToRef(HH[3], 0, BH.xx), AH.o.FromArrayToRef(HH[4], 0, BH.yy), AH.o.FromArrayToRef(HH[5], 0, BH.zz), AH.o.FromArrayToRef(HH[6], 0, BH.yz), AH.o.FromArrayToRef(HH[7], 0, BH.zx), AH.o.FromArrayToRef(HH[8], 0, BH.xy), BH
      }
    }
  },
  41730: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => lH,
      d: () => cH
    });
    var AH = LH(41290),
      rH = LH(37997),
      SH = LH(37963),
      hH = LH(41427),
      tH = LH(41703),
      zH = LH(41738),
      CH = LH(41420),
      EH = LH(41588),
      XH = LH(41416);
    class GH {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new SH.o(0, 0, 0), this._diffPositionForCollisions = new SH.o(0, 0, 0), this._collisionResponse = !0
      }
    }
    var YH, uH, QH, WH = LH(41169),
      MH = LH(41364),
      xH = LH(41602),
      vH = LH(38074),
      PH = LH(37972),
      TH = LH(41504),
      UH = LH(39595),
      VH = LH(41297),
      OH = LH(41184),
      bH = LH(38012);

    function kH(HH, BH) {
      return HH - Math.floor(HH / BH) * BH
    }

    function mH(HH, BH, LH) {
      HH instanceof Float32Array ? SH.e.FromArrayToRef(HH, BH, LH) : LH.SBH((0, MH.d)(HH[BH]), (0, MH.d)(HH[BH + 1]), (0, MH.d)(HH[BH + 2]), (0, MH.d)(HH[BH + 3]), (0, MH.d)(HH[BH + 4]), (0, MH.d)(HH[BH + 5]), (0, MH.d)(HH[BH + 6]), (0, MH.d)(HH[BH + 7]), (0, MH.d)(HH[BH + 8]), (0, MH.d)(HH[BH + 9]), (0, MH.d)(HH[BH + 10]), (0, MH.d)(HH[BH + 11]), (0, MH.d)(HH[BH + 12]), (0, MH.d)(HH[BH + 13]), (0, MH.d)(HH[BH + 14]), (0, MH.d)(HH[BH + 15]))
    }

    function oH(HH, BH, LH, AH, rH, tH, zH, CH, EH) {
      const XH = LH.texture,
        GH = XH?.getInternalTexture(),
        YH = GH?._bufferView;
      if (!(YH instanceof Float32Array) && !(YH instanceof Uint16Array)) return UH.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const uH = XH.getSize(),
        QH = function(HH, BH) {
          const LH = HH.y - HH.x + 1,
            AH = BH * HH.w / LH,
            rH = AH < 1 ? 0 : 1,
            SH = LH - rH;
          let hH = kH(AH - Math.floor(AH), 1) * SH;
          return hH = kH(hH + HH.z, SH), Math.floor(hH) + HH.x + rH
        }(AH, LH.time);
      if (!isFinite(QH) || QH < 0 || QH >= uH.height) return UH.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const WH = SH.l.lu[0],
        MH = SH.l.Matrix[0],
        xH = SH.l.Matrix[1],
        vH = QH * uH.width * 4,
        PH = BH === hH.i.NormalKind ? SH.o.TransformNormalFromFloatsToRef : SH.o.TransformCoordinatesFromFloatsToRef;
      for (let SH = 0, hH = 0; SH < HH.length; SH += 3, hH += 4) {
        let BH, LH;
        for (MH.reset(), BH = 0; BH < 4 && BH < EH; BH++) LH = tH[hH + BH], LH > 0 && (mH(YH, vH + 16 * Math.floor(rH[hH + BH]), xH), xH.scaleAndAddToRef(LH, MH));
        if (zH && CH)
          for (BH = 0; BH < 4 && BH + 4 < EH; BH++) LH = CH[hH + BH], LH > 0 && (mH(YH, vH + 16 * Math.floor(zH[hH + BH]), xH), xH.scaleAndAddToRef(LH, MH));
        PH(HH[SH], HH[SH + 1], HH[SH + 2], MH, WH), WH.toArray(HH, SH)
      }
      return !0
    }
    class IH {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = SH.o.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class fH {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new IH, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new GH, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let lH = (() => {
        var HH;
        let BH, GH = zH.e,
          YH = [];
        return HH = class extends GH {
          static get BILLBOARDMODE_NONE() {
            return zH.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return zH.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return zH.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return zH.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return zH.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return zH.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(HH) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = HH
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(HH) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = HH
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(HH) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = HH
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(HH) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = HH
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(HH) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = HH
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(HH) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== HH && (this._internalAbstractMeshDataInfo._morphTargetManager = HH, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(HH) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== HH && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = HH, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(HH) {
            return !!super._updateNonUniformScalingState(HH) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(HH) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = HH
          }
          set fG(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(HH)
          }
          set onCollisionPositionChange(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(HH)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(HH) {
            if (this._internalAbstractMeshDataInfo._visibility === HH) return;
            const BH = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = HH, (1 === BH && 1 !== HH || 1 !== BH && 1 === HH) && this._markSubMeshesAsDirty((HH => {
              HH.markAsMiscDirty(), HH.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(HH) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = HH
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(HH) {
            this._internalAbstractMeshDataInfo._renderingGroupId = HH
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(HH) {
            if (!Number.isInteger(HH) || HH < 0 || HH > 255 || 0 !== HH && 0 === (63 & HH)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = HH
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(HH) {
            this._setMaterial(HH)
          }
          _setMaterial(HH) {
            this._internalAbstractMeshDataInfo._material !== HH && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = HH, HH && HH.meshMap && (HH.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.jU && (this.resetDrawCache(void 0, null == HH), this._unBindEffect()))
          }
          getMaterialForRenderPass(HH) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[HH]
          }
          setMaterialForRenderPass(HH, BH) {
            this.resetDrawCache(HH), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const LH = this._internalAbstractMeshDataInfo._materialForRenderPass[HH];
            LH?.meshMap?.[this.uniqueId] && (LH.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[HH] = BH, BH && BH.meshMap && (BH.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(HH) {
            this._internalAbstractMeshDataInfo._receiveShadows !== HH && (this._internalAbstractMeshDataInfo._receiveShadows = HH, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(HH) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== HH && (this._internalAbstractMeshDataInfo._hasVertexAlpha = HH, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(HH) {
            this._internalAbstractMeshDataInfo._useVertexColors !== HH && (this._internalAbstractMeshDataInfo._useVertexColors = HH, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(HH) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== HH && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = HH, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(HH) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== HH && (this._internalAbstractMeshDataInfo._numBoneInfluencers = HH, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(HH) {
            this._internalAbstractMeshDataInfo._applyFog !== HH && (this._internalAbstractMeshDataInfo._applyFog = HH, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(HH) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = HH
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(HH) {
            HH !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = HH, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(HH) ? -1 : HH
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = HH
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(HH) ? -1 : HH
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = HH
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(HH) {
            const BH = this._internalAbstractMeshDataInfo._skeleton;
            BH && BH.needInitialSkinMatrix && BH._unregisterMeshWithPoseMatrix(this), HH && HH.needInitialSkinMatrix && HH._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = HH, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(BH) {
            var LH;
            let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(BH, AH, !1), LH = this, this._internalAbstractMeshDataInfo = new fH, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = HH.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new rH.d, this.onCollisionPositionChangeObservable = new rH.d, this.onMaterialChangedObservable = new rH.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.jQ = HH.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = vH.c.Red(), this.outlineWidth = .02, this.overlayColor = vH.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.fu = !1, this.cu = !1, this.actionManager = null, this.ellipsoid = new SH.o(.5, 1, .5), this.ellipsoidOffset = new SH.o(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new vH.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                oR: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new rH.d, this._onCollisionPositionChange = function(HH, BH) {
                let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                BH.subtractToRef(LH._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, LH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), LH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > OH.c.CollisionsEpsilon && LH.position.addInPlace(LH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), AH && LH.onCollideObservable.notifyObservers(AH), LH.onCollisionPositionChangeObservable.notifyObservers(LH.position)
              }, AH = this.yN(), this.layerMask = AH.defaultRenderableLayerMask, AH.QrH(this), this._resyncLightSources(), this._uniformBuffer = new XH.c(this.yN().Iu(), void 0, void 0, BH, !this.yN().Iu().isWebGPU), this._buildUniformLayout(), AH.performancePriority) {
              case 2:
                this.cu = !0;
              case 1:
                this.fu = !0, this.jQ = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(HH) {
            const BH = this._uniformBuffer;
            BH.wHH("world", HH), BH.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), BH.update()
          }
          getMeshUniformBuffer() {
            return this._uniformBuffer
          }
          get _isGaussianSplatting() {
            return !1
          }
          getClassName() {
            return "AbstractMesh"
          }
          toString(HH) {
            let BH = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            BH += ", # of submeshes: " + (this.jU ? this.jU.length : 0);
            const LH = this._internalAbstractMeshDataInfo._skeleton;
            return LH && (BH += ", skeleton: " + LH.name), HH && (BH += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], BH += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.oR ? "YES" : "NO")), BH
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== zH.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(HH) {
            let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (BH || this.actionManager.isRecursive)) {
              if (!HH) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(HH)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(HH, !1) : null
          }
          _releaseRenderPassId(HH) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.jU) {
              for (const HH of this.jU) HH._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const HH of this.yN().lights) HH.isEnabled() && HH.canAffectMesh(this) && this._lightSources.push(HH);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(HH) {
            const BH = HH.isEnabled() && HH.canAffectMesh(this),
              LH = this._lightSources.indexOf(HH);
            let AH = !1;
            if (-1 === LH) {
              if (!BH) return;
              this._lightSources.push(HH)
            } else {
              if (BH) return;
              AH = !0, this._lightSources.splice(LH, 1)
            }
            this._markSubMeshesAsLightDirty(AH)
          }
          _unBindEffect() {
            for (const HH of this.jU) HH.setEffect(null)
          }
          _removeLightSource(HH, BH) {
            const LH = this._lightSources.indexOf(HH); - 1 !== LH && (this._lightSources.splice(LH, 1), this._markSubMeshesAsLightDirty(BH))
          }
          _markSubMeshesAsDirty(HH) {
            if (this.jU)
              for (const BH of this.jU)
                for (let LH = 0; LH < BH._drawWrappers.length; ++LH) {
                  const AH = BH._drawWrappers[LH];
                  AH && AH.defines && AH.defines.markAllAsDirty && HH(AH.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((BH => BH.markAsLightDirty(HH)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((HH => HH.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((HH => HH.markAsMiscDirty()))
          }
          dLH(HH) {
            return this._currentRenderId = Number.MAX_VALUE, super.dLH(HH), this._isDirty = !0, this
          }
          resetDrawCache(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.jU)
              for (const LH of this.jU) LH.resetDrawCache(HH, BH)
          }
          get isBlocked() {
            return !1
          }
          getLOD(HH) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          vrH() {
            return null
          }
          getVerticesData(HH) {
            return null
          }
          setVerticesData(HH, BH, LH, AH) {
            return this
          }
          updateVerticesData(HH, BH, LH, AH) {
            return this
          }
          setIndices(HH, BH) {
            return this
          }
          isVerticesDataPresent(HH) {
            return !1
          }
          jF() {
            return this._masterMesh ? this._masterMesh.jF() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.jF()
          }
          setBoundingInfo(HH) {
            return this._boundingInfo = HH, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(HH, BH, LH) {
            return this._boundingInfo = new EH.d(HH, BH, LH), this._boundingInfo
          }
          normalizeToUnitCube() {
            let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(HH, BH, LH)
          }
          get useBones() {
            return this.skeleton && this.yN().skeletonsEnabled && this.isVerticesDataPresent(hH.i.MatricesIndicesKind) && this.isVerticesDataPresent(hH.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(HH) {}
          _activate(HH, BH) {
            return this._renderId = HH, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === zH.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get xR() {
            return !1
          }
          get ESH() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(HH, BH, LH) {
            return this.position.addInPlace(this.calcMovePOV(HH, BH, LH)), this
          }
          calcMovePOV(HH, BH, LH) {
            const AH = new SH.e;
            (this.rotationQuaternion ? this.rotationQuaternion : SH.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(AH);
            const rH = SH.o.Zero(),
              hH = this.definedFacingForward ? -1 : 1;
            return SH.o.TransformCoordinatesFromFloatsToRef(HH * hH, BH, LH * hH, AH, rH), rH
          }
          rotatePOV(HH, BH, LH) {
            return this.rotation.addInPlace(this.calcRotatePOV(HH, BH, LH)), this
          }
          calcRotatePOV(HH, BH, LH) {
            const AH = this.definedFacingForward ? 1 : -1;
            return new SH.o(HH * AH, BH, LH * AH)
          }
          _refreshBoundingInfo(HH, BH) {
            if (HH) {
              const LH = (0, xH.f)(HH, 0, this.getTotalVertices(), BH);
              this._boundingInfo ? this._boundingInfo.reConstruct(LH.minimum, LH.maximum) : this._boundingInfo = new EH.d(LH.minimum, LH.maximum)
            }
            if (this.jU)
              for (let LH = 0; LH < this.jU.length; LH++) this.jU[LH].refreshBoundingInfo(HH);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(HH) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(HH.minimum, HH.maximum) : this._boundingInfo = new EH.d(HH.minimum, HH.maximum), this.jU)
              for (let BH = 0; BH < this.jU.length; BH++) this.jU[BH].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(HH, BH, LH, AH, rH, tH, zH) {
            ! function(HH, BH, LH, AH, rH, tH, zH) {
              const CH = SH.l.lu[0],
                EH = SH.l.Matrix[0],
                XH = SH.l.Matrix[1],
                GH = BH === hH.i.NormalKind ? SH.o.TransformNormalFromFloatsToRef : SH.o.TransformCoordinatesFromFloatsToRef;
              for (let hH = 0, YH = 0; hH < HH.length; hH += 3, YH += 4) {
                let BH, uH;
                for (EH.reset(), BH = 0; BH < 4; BH++) uH = rH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * AH[YH + BH]), uH, XH), EH.addToSelf(XH));
                if (tH && zH)
                  for (BH = 0; BH < 4; BH++) uH = zH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * tH[YH + BH]), uH, XH), EH.addToSelf(XH));
                GH(HH[hH], HH[hH + 1], HH[hH + 2], EH, CH), CH.toArray(HH, hH)
              }
            }(HH, BH, LH, AH, rH, tH, zH)
          }
          _getData(BH, LH) {
            let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hH.i.PositionKind;
            const rH = BH.cache,
              tH = HH => {
                if (rH) {
                  const BH = rH._vertexData || (rH._vertexData = {});
                  return BH[HH] || this.copyVerticesData(HH, BH), BH[HH]
                }
                return this.getVerticesData(HH)
              };
            if (LH || (LH = tH(AH)), !LH) return null;
            rH ? (rH._outputData ? rH._outputData.set(LH) : rH._outputData = new Float32Array(LH), LH = rH._outputData) : (BH.applyMorph && this.morphTargetManager || BH.applySkeleton && this.skeleton || BH.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (LH = LH.slice()), BH.applyMorph && this.morphTargetManager && function(HH, BH, LH) {
              let AH;
              switch (BH) {
                case hH.i.PositionKind:
                  AH = HH => HH.getPositions();
                  break;
                case hH.i.NormalKind:
                  AH = HH => HH.getNormals();
                  break;
                case hH.i.TangentKind:
                  AH = HH => HH.getTangents();
                  break;
                case hH.i.UVKind:
                  AH = HH => HH.getUVs();
                  break;
                case hH.i.UV2Kind:
                  AH = HH => HH.getUV2s();
                  break;
                case hH.i.ColorKind:
                  AH = HH => HH.getColors();
                  break;
                default:
                  return
              }
              for (let rH = 0; rH < HH.length; rH++) {
                let BH = HH[rH];
                for (let SH = 0; SH < LH.numTargets; SH++) {
                  const hH = LH.getTarget(SH),
                    tH = hH.influence;
                  if (0 !== tH) {
                    const LH = AH(hH);
                    LH && (BH += (LH[rH] - HH[rH]) * tH)
                  }
                }
                HH[rH] = BH
              }
            }(LH, AH, this.morphTargetManager);
            const zH = this.bakedVertexAnimationManager;
            let CH = !1;
            if (BH.applyBakedVertexAnimation && zH?.isEnabled) {
              const HH = tH(hH.i.MatricesIndicesKind),
                rH = tH(hH.i.MatricesWeightsKind);
              if (rH && HH) {
                const SH = this.numBoneInfluencers > 4,
                  EH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
                  XH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null;
                CH = oH(LH, AH, zH, BH.bakedVertexAnimationSettings ?? zH.animationParameters, HH, rH, EH, XH, this.numBoneInfluencers)
              }
            }
            if (!CH && BH.applySkeleton && this.skeleton) {
              const BH = tH(hH.i.MatricesIndicesKind),
                rH = tH(hH.i.MatricesWeightsKind);
              if (rH && BH) {
                const SH = this.numBoneInfluencers > 4,
                  zH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
                  CH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null,
                  EH = this.skeleton.getTransformMatrices(this);
                HH._ApplySkeleton(LH, AH, EH, BH, rH, zH, CH)
              }
            }
            if (!1 !== BH.updatePositionsArray && AH === hH.i.PositionKind) {
              const HH = this._internalAbstractMeshDataInfo._positions || [],
                BH = HH.length;
              if (HH.length = LH.length / 3, BH < HH.length)
                for (let LH = BH; LH < HH.length; LH++) HH[LH] = new SH.o;
              for (let AH = 0, rH = 0; AH < HH.length; AH++, rH += 3) HH[AH].SBH(LH[rH], LH[rH + 1], LH[rH + 2]);
              this._internalAbstractMeshDataInfo._positions = HH
            }
            return LH
          }
          getNormalsData() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: HH,
              applyMorph: BH,
              updatePositionsArray: !1
            }, null, hH.i.NormalKind)
          }
          A4() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: HH,
              applyMorph: BH,
              updatePositionsArray: !1
            }, LH, hH.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new EH.d(SH.o.Zero(), SH.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(HH) {
            if (!this.jU) return this;
            const BH = this.jU.length;
            for (let LH = 0; LH < BH; LH++) {
              const AH = this.jU[LH];
              (BH > 1 || !AH.IsGlobal) && AH.updateBoundingInfo(HH)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.cu || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(HH) {
            return this.jF().isInFrustum(HH, this.cullingStrategy)
          }
          isCompletelyInFrustum(HH) {
            return this.jF().isCompletelyInFrustum(HH)
          }
          rSH(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = arguments.length > 2 ? arguments[2] : void 0;
            const AH = this.jF(),
              rH = HH.jF();
            if (AH.intersects(rH, BH)) return !0;
            if (LH)
              for (const SH of this.getChildMeshes())
                if (SH.rSH(HH, BH, !0)) return !0;
            return !1
          }
          intersectsPoint(HH) {
            return this.jF().intersectsPoint(HH)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(HH) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = HH
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(HH) {
            let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const LH = this.yN().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = LH.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, LH.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, HH, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, BH), this
          }
          _collideForSubMesh(HH, BH, LH) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!HH._lastColliderWorldVertices || !HH._lastColliderTransformMatrix.equals(BH)) {
              HH._lastColliderTransformMatrix = BH.clone(), HH._lastColliderWorldVertices = [], HH._trianglePlanes = [];
              const LH = HH.verticesStart,
                AH = HH.verticesStart + HH.verticesCount;
              for (let rH = LH; rH < AH; rH++) HH._lastColliderWorldVertices.push(SH.o.TransformCoordinates(this._positions[rH], BH))
            }
            return LH._collide(HH._trianglePlanes, HH._lastColliderWorldVertices, this.vrH(), HH.indexStart, HH.indexStart + HH.indexCount, HH.verticesStart, !!HH.eu(), this, this._shouldConvertRHS(), 7 === HH.eu()?.fillMode), this
          }
          _processCollisionsForSubMeshes(HH, BH) {
            const LH = this._scene.getCollidingSubMeshCandidates(this, HH),
              AH = LH.length;
            for (let rH = 0; rH < AH; rH++) {
              const SH = LH.data[rH];
              AH > 1 && !SH._checkCollision(HH) || this._collideForSubMesh(SH, BH, HH)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(HH) {
            if (!this.jF()._checkCollision(HH)) return this;
            const BH = SH.l.Matrix[0],
              LH = SH.l.Matrix[1];
            return SH.e.ScalingToRef(1 / HH._radius.x, 1 / HH._radius.y, 1 / HH._radius.z, BH), this.worldMatrixFromCache.multiplyToRef(BH, LH), this._processCollisionsForSubMeshes(HH, LH), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(HH, BH, LH) {
            let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              rH = arguments.length > 4 ? arguments[4] : void 0,
              hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const tH = new CH.b,
              zH = this.getClassName(),
              EH = "InstancedLinesMesh" === zH || "LinesMesh" === zH || "GreasedLineMesh" === zH ? this.intersectionThreshold : 0,
              XH = this.jF();
            if (!this.jU) return tH;
            if (!hH && (!HH.intersectsSphere(XH.nrH, EH) || !HH.intersectsBox(XH.boundingBox, EH))) return tH;
            if (AH) return tH.hit = !hH, tH.pickedMesh = hH ? null : this, tH.distance = hH ? 0 : SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = 0, tH;
            if (!this._generatePointsArray()) return tH;
            let GH = null;
            const YH = this._scene.getIntersectingSubMeshCandidates(this, HH),
              uH = YH.length;
            let QH = !1;
            for (let SH = 0; SH < uH; SH++) {
              const HH = YH.data[SH].eu();
              if (HH && (7 == HH.fillMode || 0 == HH.fillMode || 1 == HH.fillMode || 2 == HH.fillMode || 4 == HH.fillMode)) {
                QH = !0;
                break
              }
            }
            if (!QH) return tH.hit = !0, tH.pickedMesh = this, tH.distance = SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = -1, tH;
            for (let SH = 0; SH < uH; SH++) {
              const AH = YH.data[SH];
              if (uH > 1 && !hH && !AH.canIntersects(HH)) continue;
              const rH = AH.intersects(HH, this._positions, this.vrH(), BH, LH);
              if (rH && (BH || !GH || rH.distance < GH.distance) && (GH = rH, GH.subMeshId = AH._id, GH._internalSubMeshId = SH, BH)) break
            }
            if (GH) {
              const BH = rH ?? this.getWorldMatrix(),
                LH = SH.l.lu[0],
                AH = SH.l.lu[1];
              SH.o.TransformCoordinatesToRef(HH.origin, BH, LH), HH.direction.scaleToRef(GH.distance, AH);
              const hH = SH.o.TransformNormal(AH, BH).addInPlace(LH);
              return tH.hit = !0, tH.distance = SH.o.Distance(LH, hH), tH.pickedPoint = hH, tH.pickedMesh = this, tH.bu = GH.bu || 0, tH.bv = GH.bv || 0, tH.subMeshFaceId = GH.faceId, tH.faceId = GH.faceId + YH.data[GH._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), tH.subMeshId = GH.subMeshId, tH
            }
            return tH
          }
          clone(HH, BH, LH) {
            return null
          }
          releaseSubMeshes() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.jU)
              for (; this.jU.length;) this.jU[0].dispose(HH);
            else this.jU = [];
            return this
          }
          dispose(HH) {
            let BH, LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const AH = this.yN();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), AH.freeActiveMeshes(), AH.freeRenderingGroups(), AH.renderingManager.maintainStateBetweenFrames && AH.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((HH => HH !== this && HH.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), BH = 0; BH < this._intersectionsInProgress.length; BH++) {
              const HH = this._intersectionsInProgress[BH],
                LH = HH._intersectionsInProgress.indexOf(this);
              HH._intersectionsInProgress.splice(LH, 1)
            }
            this._intersectionsInProgress.length = 0;
            const rH = AH.lights;
            for (const hH of rH) {
              let HH = hH.includedOnlyMeshes.indexOf(this); - 1 !== HH && hH.includedOnlyMeshes.splice(HH, 1), HH = hH.excludedMeshes.indexOf(this), -1 !== HH && hH.excludedMeshes.splice(HH, 1);
              const BH = hH.getShadowGenerators();
              if (BH) {
                const LH = BH.values();
                for (let BH = LH.next(); !0 !== BH.done; BH = LH.next()) {
                  const LH = BH.value.getShadowMap();
                  LH && LH.renderList && (HH = LH.renderList.indexOf(this), -1 !== HH && LH.renderList.splice(HH, 1))
                }
              }
            }
            this.releaseSubMeshes(AH._isDisposing);
            const SH = AH.Iu();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, SH.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), SH.wipeCaches(), AH.gR(this), this._parentContainer) {
              const HH = this._parentContainer.meshes.indexOf(this);
              HH > -1 && this._parentContainer.meshes.splice(HH, 1), this._parentContainer = null
            }
            if (LH && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !HH)
              for (BH = 0; BH < AH.dU.length; BH++) AH.dU[BH].emitter === this && (AH.dU[BH].dispose(), BH--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(HH, LH)
          }
          _initFacetData() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            HH.facetNormals || (HH.facetNormals = []), HH.facetPositions || (HH.facetPositions = []), HH.facetPartitioning || (HH.facetPartitioning = new Array), HH.facetNb = this.vrH().length / 3 | 0, HH.partitioningSubdivisions = HH.partitioningSubdivisions ? HH.partitioningSubdivisions : 10, HH.partitioningBBoxRatio = HH.partitioningBBoxRatio ? HH.partitioningBBoxRatio : 1.01;
            for (let BH = 0; BH < HH.facetNb; BH++) HH.facetNormals[BH] = SH.o.Zero(), HH.facetPositions[BH] = SH.o.Zero();
            return HH.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            HH.facetDataEnabled || this._initFacetData();
            const BH = this.getVerticesData(hH.i.PositionKind),
              LH = this.vrH(),
              AH = this.getVerticesData(hH.i.NormalKind)?.slice(),
              rH = this.jF();
            if (HH.facetDepthSort && !HH.facetDepthSortEnabled) {
              if (HH.facetDepthSortEnabled = !0, LH instanceof Uint16Array) HH.depthSortedIndices = new Uint16Array(LH);
              else if (LH instanceof Uint32Array) HH.depthSortedIndices = new Uint32Array(LH);
              else {
                let BH = !1;
                for (let HH = 0; HH < LH.length; HH++)
                  if (LH[HH] > 65535) {
                    BH = !0;
                    break
                  } HH.depthSortedIndices = BH ? new Uint32Array(LH) : new Uint16Array(LH)
              }
              if (HH.facetDepthSortFunction = function(HH, BH) {
                  return BH.sqDistance - HH.sqDistance
                }, !HH.facetDepthSortFrom) {
                const BH = this.yN().activeCamera;
                HH.facetDepthSortFrom = BH ? BH.position : SH.o.Zero()
              }
              HH.depthSortedFacets = [];
              for (let BH = 0; BH < HH.facetNb; BH++) {
                const LH = {
                  ind: 3 * BH,
                  sqDistance: 0
                };
                HH.depthSortedFacets.push(LH)
              }
              HH.invertedMatrix = SH.e.Identity(), HH.facetDepthSortOrigin = SH.o.Zero()
            }
            HH.bbSize.x = rH.maximum.x - rH.minimum.x > PH.d ? rH.maximum.x - rH.minimum.x : PH.d, HH.bbSize.y = rH.maximum.y - rH.minimum.y > PH.d ? rH.maximum.y - rH.minimum.y : PH.d, HH.bbSize.z = rH.maximum.z - rH.minimum.z > PH.d ? rH.maximum.z - rH.minimum.z : PH.d;
            let zH = HH.bbSize.x > HH.bbSize.y ? HH.bbSize.x : HH.bbSize.y;
            if (zH = zH > HH.bbSize.z ? zH : HH.bbSize.z, HH.subDiv.max = HH.partitioningSubdivisions, HH.subDiv.X = Math.floor(HH.subDiv.max * HH.bbSize.x / zH), HH.subDiv.Y = Math.floor(HH.subDiv.max * HH.bbSize.y / zH), HH.subDiv.Z = Math.floor(HH.subDiv.max * HH.bbSize.z / zH), HH.subDiv.X = HH.subDiv.X < 1 ? 1 : HH.subDiv.X, HH.subDiv.Y = HH.subDiv.Y < 1 ? 1 : HH.subDiv.Y, HH.subDiv.Z = HH.subDiv.Z < 1 ? 1 : HH.subDiv.Z, HH.facetParameters.facetNormals = this.getFacetLocalNormals(), HH.facetParameters.facetPositions = this.getFacetLocalPositions(), HH.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), HH.facetParameters.bInfo = rH, HH.facetParameters.bbSize = HH.bbSize, HH.facetParameters.subDiv = HH.subDiv, HH.facetParameters.ratio = this.partitioningBBoxRatio, HH.facetParameters.depthSort = HH.facetDepthSort, HH.facetDepthSort && HH.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(HH.invertedMatrix), SH.o.TransformCoordinatesToRef(HH.facetDepthSortFrom, HH.invertedMatrix, HH.facetDepthSortOrigin), HH.facetParameters.distanceTo = HH.facetDepthSortOrigin), HH.facetParameters.depthSortedFacets = HH.depthSortedFacets, AH && tH.b.ComputeNormals(BH, LH, AH, HH.facetParameters), HH.facetDepthSort && HH.facetDepthSortEnabled) {
              HH.depthSortedFacets.sort(HH.facetDepthSortFunction);
              const BH = HH.depthSortedIndices.length / 3 | 0;
              for (let AH = 0; AH < BH; AH++) {
                const BH = HH.depthSortedFacets[AH].ind;
                HH.depthSortedIndices[3 * AH] = LH[BH], HH.depthSortedIndices[3 * AH + 1] = LH[BH + 1], HH.depthSortedIndices[3 * AH + 2] = LH[BH + 2]
              }
              this.updateIndices(HH.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetNormals || this.updateFacetData(), HH.facetNormals
          }
          getFacetLocalPositions() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetPositions || this.updateFacetData(), HH.facetPositions
          }
          getFacetLocalPartitioning() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetPartitioning || this.updateFacetData(), HH.facetPartitioning
          }
          getFacetPosition(HH) {
            const BH = SH.o.Zero();
            return this.getFacetPositionToRef(HH, BH), BH
          }
          getFacetPositionToRef(HH, BH) {
            const LH = this.getFacetLocalPositions()[HH],
              AH = this.getWorldMatrix();
            return SH.o.TransformCoordinatesToRef(LH, AH, BH), this
          }
          getFacetNormal(HH) {
            const BH = SH.o.Zero();
            return this.getFacetNormalToRef(HH, BH), BH
          }
          getFacetNormalToRef(HH, BH) {
            const LH = this.getFacetLocalNormals()[HH];
            return SH.o.TransformNormalToRef(LH, this.getWorldMatrix(), BH), this
          }
          getFacetsAtLocalCoordinates(HH, BH, LH) {
            const AH = this.jF(),
              rH = this._internalAbstractMeshDataInfo._facetData,
              SH = Math.floor((HH - AH.minimum.x * rH.partitioningBBoxRatio) * rH.subDiv.X * rH.partitioningBBoxRatio / rH.bbSize.x),
              hH = Math.floor((BH - AH.minimum.y * rH.partitioningBBoxRatio) * rH.subDiv.Y * rH.partitioningBBoxRatio / rH.bbSize.y),
              tH = Math.floor((LH - AH.minimum.z * rH.partitioningBBoxRatio) * rH.subDiv.Z * rH.partitioningBBoxRatio / rH.bbSize.z);
            return SH < 0 || SH > rH.subDiv.max || hH < 0 || hH > rH.subDiv.max || tH < 0 || tH > rH.subDiv.max ? null : rH.facetPartitioning[SH + rH.subDiv.max * hH + rH.subDiv.max * rH.subDiv.max * tH]
          }
          getClosestFacetAtCoordinates(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const tH = this.getWorldMatrix(),
              zH = SH.l.Matrix[5];
            tH.invertToRef(zH);
            const CH = SH.l.lu[8];
            SH.o.TransformCoordinatesFromFloatsToRef(HH, BH, LH, zH, CH);
            const EH = this.getClosestFacetAtLocalCoordinates(CH.x, CH.y, CH.z, AH, rH, hH);
            return AH && SH.o.TransformCoordinatesFromFloatsToRef(AH.x, AH.y, AH.z, tH, AH), EH
          }
          getClosestFacetAtLocalCoordinates(HH, BH, LH, AH) {
            let rH, SH, hH, tH, zH, CH, EH, XH, GH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              YH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              uH = null;
            const QH = this.getFacetLocalPositions(),
              WH = this.getFacetLocalNormals(),
              MH = this.getFacetsAtLocalCoordinates(HH, BH, LH);
            if (!MH) return null;
            let xH, vH, PH, TH, UH = Number.MAX_VALUE;
            for (let VH = 0; VH < MH.length; VH++) vH = MH[VH], PH = WH[vH], TH = QH[vH], tH = (HH - TH.x) * PH.x + (BH - TH.y) * PH.y + (LH - TH.z) * PH.z, (!GH || GH && YH && tH >= 0 || GH && !YH && tH <= 0) && (tH = PH.x * TH.x + PH.y * TH.y + PH.z * TH.z, zH = -(PH.x * HH + PH.y * BH + PH.z * LH - tH) / (PH.x * PH.x + PH.y * PH.y + PH.z * PH.z), CH = HH + PH.x * zH, EH = BH + PH.y * zH, XH = LH + PH.z * zH, rH = CH - HH, SH = EH - BH, hH = XH - LH, xH = rH * rH + SH * SH + hH * hH, xH < UH && (UH = xH, uH = vH, AH && (AH.x = CH, AH.y = EH, AH.z = XH)));
            return uH
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const HH = this._internalAbstractMeshDataInfo._facetData;
            return HH.facetDataEnabled && (HH.facetDataEnabled = !1, HH.facetPositions = [], HH.facetNormals = [], HH.facetPartitioning = new Array, HH.facetParameters = {}, HH.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(HH, BH) {
            return this
          }
          createNormals(HH) {
            const BH = this.getVerticesData(hH.i.PositionKind),
              LH = this.vrH();
            let AH;
            return AH = this.isVerticesDataPresent(hH.i.NormalKind) ? this.getVerticesData(hH.i.NormalKind) : [], tH.b.ComputeNormals(BH, LH, AH, {
              useRightHandedSystem: this.yN().useRightHandedSystem
            }), this.setVerticesData(hH.i.NormalKind, AH, HH), this
          }
          async optimizeIndicesAsync() {
            const HH = this.vrH();
            if (!HH) return this;
            const {
              OptimizeIndices: BH
            } = await LH.e(660).then((() => LH(45992)));
            return BH(HH), this.setIndices(HH, this.getTotalVertices()), this
          }
          alignWithNormal(HH, BH) {
            BH || (BH = TH.d.Y);
            const LH = SH.l.lu[0],
              AH = SH.l.lu[1];
            return SH.o.CrossToRef(BH, HH, AH), SH.o.CrossToRef(HH, AH, LH), this.rotationQuaternion ? SH.f.RotationQuaternionFromAxisToRef(LH, HH, AH, this.rotationQuaternion) : SH.o.RotationFromAxisToRef(LH, HH, AH, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, WH.i)("EdgesRenderer")
          }
          enableEdgesRendering(HH, BH, LH) {
            throw (0, WH.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.dU.filter((HH => HH.emitter === this))
          }
        }, (() => {
          const LH = "function" === typeof Symbol && Symbol.metadata ? Object.create(GH[Symbol.metadata] ?? null) : void 0;
          BH = [VH.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, AH.g)(HH, null, BH, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: HH => "_ApplySkeleton" in HH,
              get: HH => HH._ApplySkeleton
            },
            metadata: LH
          }, null, YH), LH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LH
          })
        })(), HH.OCCLUSION_TYPE_NONE = ((0, AH.k)(HH, YH), 0), HH.OCCLUSION_TYPE_OPTIMISTIC = 1, HH.OCCLUSION_TYPE_STRICT = 2, HH.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, HH.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, HH.CULLINGSTRATEGY_STANDARD = 0, HH.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, HH.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, HH.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, HH.DefaultIsPickable = !0, HH
      })(),
      KH = !1;

    function cH() {
      KH || (KH = !0, (0, bH.f)("BABYLON.AbstractMesh", lH))
    }(YH = lH.prototype).createOrUpdateSubmeshesOctree ?? (YH.createOrUpdateSubmeshesOctree = (0, WH.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (uH = lH.prototype).getPhysicsImpostor ?? (uH.getPhysicsImpostor = (0, WH.f)("AbstractMesh", "getPhysicsImpostor")), (QH = lH.prototype).setPhysicsLinkWith ?? (QH.setPhysicsLinkWith = (0, WH.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(lH.prototype, "occlusionRetryCount") || Object.defineProperty(lH.prototype, "occlusionRetryCount", (0, WH.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(lH.prototype, "occlusionType") || Object.defineProperty(lH.prototype, "occlusionType", (0, WH.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(lH.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(lH.prototype, "occlusionQueryAlgorithmType", (0, WH.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(lH.prototype, "isOccluded") || Object.defineProperty(lH.prototype, "isOccluded", (0, WH.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(lH.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(lH.prototype, "isOcclusionQueryInProgress", (0, WH.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(lH.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(lH.prototype, "forceRenderingWhenOccluded", (0, WH.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(lH.prototype, "occlusionForRenderPassId") || Object.defineProperty(lH.prototype, "occlusionForRenderPassId", (0, WH.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(lH.prototype, "decalMap") || Object.defineProperty(lH.prototype, "decalMap", (0, WH.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(lH.prototype, "kF") || Object.defineProperty(lH.prototype, "kF", (0, WH.e)("AbstractMesh", "kF")), Object.getOwnPropertyDescriptor(lH.prototype, "physicsImpostor") || Object.defineProperty(lH.prototype, "physicsImpostor", (0, WH.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(lH.prototype, "showBoundingBox") || Object.defineProperty(lH.prototype, "showBoundingBox", (0, WH.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(lH.prototype, "edgesRenderer") || Object.defineProperty(lH.prototype, "edgesRenderer", (0, WH.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(lH.prototype, "renderOutline") || Object.defineProperty(lH.prototype, "renderOutline", (0, WH.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(lH.prototype, "renderOverlay") || Object.defineProperty(lH.prototype, "renderOverlay", (0, WH.e)("AbstractMesh", "renderOverlay"))
  },
  41706: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => MH
    });
    var AH = LH(37963),
      rH = LH(38074),
      SH = LH(41703),
      hH = LH(41427),
      tH = LH(41578),
      zH = LH(41713),
      CH = LH(41588),
      EH = LH(41387),
      XH = LH(39595),
      GH = LH(41326),
      YH = LH(41602),
      uH = LH(37989),
      QH = LH(41721),
      WH = LH(41356);
    class MH {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(HH) {
        this._boundingBias ? this._boundingBias.Tm(HH) : this._boundingBias = HH.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(HH) {
        const BH = new MH(MH.RandomId(), HH.yN());
        return BH.applyToMesh(HH), BH
      }
      get meshes() {
        return this._meshes
      }
      constructor(HH, BH, LH) {
        let rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = BH || uH.d.LastCreatedScene, this._scene && (this.id = HH, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Iu(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = rH, null !== hH && (this._totalVertices = hH), LH ? this.setAllVerticesData(LH, rH) : null === hH && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), SH && (this.applyToMesh(SH), SH.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      yN() {
        return this._scene
      }
      Iu() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let HH = 0; HH < this._meshes.length; HH++)
          if (!this._meshes[HH].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const HH = new Set;
        for (const BH in this._vertexBuffers) HH.add(this._vertexBuffers[BH].getWrapperBuffer());
        HH.forEach((HH => {
          HH._rebuild()
        }))
      }
      setAllVerticesData(HH, BH) {
        HH.applyToGeometry(this, BH), this._notifyUpdate()
      }
      setVerticesData(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0;
        LH && Array.isArray(BH) && (BH = new Float32Array(BH));
        const rH = new hH.i(this._engine, BH, HH, {
          updatable: LH,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: AH,
          label: "Geometry_" + this.id + "_" + HH
        });
        this.setVerticesBuffer(rH)
      }
      removeVerticesData(HH) {
        this._vertexBuffers[HH] && (this._vertexBuffers[HH].dispose(), delete this._vertexBuffers[HH]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const rH = HH.getKind();
        this._vertexBuffers[rH] && LH && this._vertexBuffers[rH].dispose(), HH._buffer && HH._ownsBuffer && HH._buffer._increaseReferences(), this._vertexBuffers[rH] = HH;
        const SH = this._meshes,
          tH = SH.length;
        if (rH === hH.i.PositionKind) {
          this._totalVertices = BH ?? HH._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : HH.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const LH = this._extend && this._extend.minimum || new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            rH = this._extend && this._extend.maximum || new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let HH = 0; HH < tH; HH++) {
            const BH = SH[HH];
            BH.buildBoundingInfo(LH, rH), BH._createGlobalSubMesh(BH.isUnIndexed), BH.computeWorldMatrix(!0), BH.synchronizeInstances()
          }
        }
        this._notifyUpdate(rH)
      }
      updateVerticesDataDirectly(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rH = this.getVertexBuffer(HH);
        rH && (rH.updateDirectly(BH, LH, AH), this._notifyUpdate(HH))
      }
      updateVerticesData(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = this.getVertexBuffer(HH);
        AH && (AH.update(BH), HH === hH.i.PositionKind && this._updateBoundingInfo(LH, BH), this._notifyUpdate(HH))
      }
      _updateBoundingInfo(HH, BH) {
        if (HH && this._updateExtend(BH), this._resetPointsArrayCache(), HH) {
          const HH = this._meshes;
          for (const BH of HH) {
            BH.hasBoundingInfo ? BH.jF().reConstruct(this._extend.minimum, this._extend.maximum) : BH.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const HH = BH.jU;
            for (const BH of HH) BH.refreshBoundingInfo()
          }
        }
      }
      _bind(HH, BH, LH, AH) {
        if (!HH) return;
        void 0 === BH && (BH = this._indexBuffer);
        const rH = this.getVertexBuffers();
        if (!rH) return;
        if (BH != this._indexBuffer || !this._vertexArrayObjects && !AH) return void this._engine.bindBuffers(rH, BH, HH, LH);
        const SH = AH || this._vertexArrayObjects,
          hH = this._engine;
        SH[HH.key] || (SH[HH.key] = hH.recordVertexArrayObject(rH, BH, HH, LH)), hH.bindVertexArrayObject(SH[HH.key], BH)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(HH, BH, LH) {
        const AH = this.getVertexBuffer(HH);
        return AH ? AH.getFloatData(this._totalVertices, LH || BH && 1 !== this._meshes.length) : null
      }
      copyVerticesData(HH, BH) {
        const LH = this.getVertexBuffer(HH);
        if (!LH) return;
        BH[HH] || (BH[HH] = new Float32Array(this._totalVertices * LH.getSize()));
        const AH = LH.getData();
        AH && (0, WH.f)(AH, LH.getSize(), LH.type, LH.byteOffset, LH.byteStride, LH.normalized, this._totalVertices, BH[HH])
      }
      isVertexBufferUpdatable(HH) {
        const BH = this._vertexBuffers[HH];
        return !!BH && BH.isUpdatable()
      }
      getVertexBuffer(HH) {
        return this.isReady() ? this._vertexBuffers[HH] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(HH) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[HH] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH)
      }
      getVerticesDataKinds() {
        const HH = [];
        let BH;
        if (!this._vertexBuffers && this._delayInfo)
          for (BH in this._delayInfo) HH.push(BH);
        else
          for (BH in this._vertexBuffers) HH.push(BH);
        return HH
      }
      updateIndices(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const AH = HH.length !== this._indices.length;
            if (LH || (this._indices = HH.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, HH, BH), AH)
              for (const HH of this._meshes) HH._createGlobalSubMesh(!0)
          } else this.setIndices(HH, null, !0)
      }
      setIndexBuffer(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = HH, this._totalVertices = BH, this._totalIndices = LH, HH.is32Bits = null === AH ? BH > 65535 : AH;
        for (const rH of this._meshes) rH._createGlobalSubMesh(!0), rH.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = HH, this._indexBufferIsUpdatable = LH, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, LH, "Geometry_" + this.id + "_IndexBuffer")), void 0 != BH && (this._totalVertices = BH);
        for (const rH of this._meshes) rH._createGlobalSubMesh(!AH), rH.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      vrH(HH, BH) {
        if (!this.isReady()) return null;
        const LH = this._indices;
        return BH || HH && 1 !== this._meshes.length ? LH.slice() : LH
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        HH && this._vertexArrayObjects && this._vertexArrayObjects[HH.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[HH.key]), delete this._vertexArrayObjects[HH.key])
      }
      releaseForMesh(HH, BH) {
        const LH = this._meshes,
          AH = LH.indexOf(HH); - 1 !== AH && (LH.splice(AH, 1), this._vertexArrayObjects && HH._invalidateInstanceVertexArrayObject(), HH._geometry = null, 0 === LH.length && BH && this.dispose())
      }
      applyToMesh(HH) {
        if (HH._geometry === this) return;
        const BH = HH._geometry;
        BH && BH.releaseForMesh(HH), this._vertexArrayObjects && HH._invalidateInstanceVertexArrayObject();
        const LH = this._meshes;
        HH._geometry = this, HH._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), LH.push(HH), this.isReady() ? this._applyToMesh(HH) : this._boundingInfo && HH.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!HH && (HH = this.getVerticesData(hH.i.PositionKind), !HH)) return;
          this._extend = (0, YH.f)(HH, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(HH) {
        for (const BH in this._vertexBuffers) {
          const LH = this._vertexBuffers[BH];
          LH._buffer.getBuffer() || LH.create(), BH === hH.i.PositionKind && (this._extend || this._updateExtend(), HH.buildBoundingInfo(this._extend.minimum, this._extend.maximum), HH._createGlobalSubMesh(HH.isUnIndexed), HH._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), HH._syncGeometryWithMorphTargetManager(), HH.synchronizeInstances()
      }
      _notifyUpdate(HH) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, HH), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const BH of this._meshes) BH._markSubMeshesAsAttributesDirty()
      }
      load(HH, BH) {
        2 !== this.delayLoadState && (this.isReady() ? BH && BH() : (this.delayLoadState = 2, this._queueLoad(HH, BH)))
      }
      _queueLoad(HH, BH) {
        this.delayLoadingFile && (HH.addPendingData(this), (async () => {
          try {
            const LH = await HH._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void HH.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(LH), this), this.delayLoadState = 1, this._delayInfo = [], HH.removePendingData(this);
            const AH = this._meshes,
              rH = AH.length;
            for (let HH = 0; HH < rH; HH++) this._applyToMesh(AH[HH]);
            BH && BH()
          } catch (LH) {
            HH.removePendingData(this), HH.mV || XH.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${LH}`)
          }
        })())
      }
      toLeftHanded() {
        const HH = this.vrH(!1);
        if (null != HH && HH.length > 0) {
          for (let BH = 0; BH < HH.length; BH += 3) {
            const LH = HH[BH + 0];
            HH[BH + 0] = HH[BH + 2], HH[BH + 2] = LH
          }
          this.setIndices(HH)
        }
        const BH = this.getVerticesData(hH.i.PositionKind, !1);
        if (null != BH && BH.length > 0) {
          for (let HH = 0; HH < BH.length; HH += 3) BH[HH + 2] = -BH[HH + 2];
          this.setVerticesData(hH.i.PositionKind, BH, !1)
        }
        const LH = this.getVerticesData(hH.i.NormalKind, !1);
        if (null != LH && LH.length > 0) {
          for (let HH = 0; HH < LH.length; HH += 3) LH[HH + 2] = -LH[HH + 2];
          this.setVerticesData(hH.i.NormalKind, LH, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const HH = this.getVerticesData(hH.i.PositionKind);
        if (!HH || 0 === HH.length) return !1;
        for (let BH = 3 * this._positionsCache.length, LH = this._positionsCache.length; BH < HH.length; BH += 3, ++LH) this._positionsCache[LH] = AH.o.FromArray(HH, BH);
        for (let BH = 0, LH = 0; BH < HH.length; BH += 3, ++LH) this._positionsCache[LH].set(HH[0 + BH], HH[1 + BH], HH[2 + BH]);
        return this._positionsCache.length = HH.length / 3, this._positions = this._positionsCache, !0
      }
      mV() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const LH in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[LH]);
          this._vertexArrayObjects = {};
          const HH = this._meshes,
            BH = HH.length;
          for (let LH = 0; LH < BH; LH++) HH[LH]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const HH = this._meshes,
          BH = HH.length;
        let LH;
        for (LH = 0; LH < BH; LH++) this.releaseForMesh(HH[LH]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const AH in this._vertexBuffers) this._vertexBuffers[AH].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const HH = this._parentContainer.geometries.indexOf(this);
          HH > -1 && this._parentContainer.geometries.splice(HH, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(HH) {
        const BH = new MH(HH, this._scene),
          LH = this.vrH(void 0, !0);
        LH && BH.setIndices(LH);
        let AH, rH = !1;
        for (AH in this._vertexBuffers) {
          const HH = this.getVertexBuffer(AH),
            LH = HH.getData();
          if (!LH) continue;
          const SH = HH.isUpdatable(),
            tH = HH.getSize(),
            {
              type: zH,
              byteOffset: CH,
              byteStride: EH,
              normalized: XH
            } = HH;
          rH = rH || SH;
          let GH = this._totalVertices;
          if (HH.getIsInstanced()) {
            let HH;
            HH = LH instanceof Array ? 4 * LH.length : LH.byteLength, GH = HH / EH
          }
          const YH = (0, WH.r)(LH, tH, zH, CH, EH, GH, !0),
            uH = new hH.i(this._engine, YH, AH, {
              updatable: SH,
              useBytes: !1,
              stride: tH,
              size: tH,
              offset: 0,
              type: zH,
              normalized: XH,
              takeBufferOwnership: !0,
              instanced: HH.getIsInstanced()
            });
          BH.setVerticesBuffer(uH, GH)
        }
        for (AH in BH._updatable = rH, BH.delayLoadState = this.delayLoadState, BH.delayLoadingFile = this.delayLoadingFile, BH._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) BH._delayInfo = BH._delayInfo || [], BH._delayInfo.push(AH);
        return BH._boundingInfo = new CH.d(this._extend.minimum, this._extend.maximum), BH
      }
      serialize() {
        const HH = {};
        return HH.id = this.id, HH.uniqueId = this.uniqueId, HH.updatable = this._updatable, GH.b && GH.b.HasTags(this) && (HH.tags = GH.b.GetTags(this)), HH
      }
      _toNumberArray(HH) {
        return Array.isArray(HH) ? HH : Array.prototype.slice.call(HH)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const HH in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, HH) && (this._vertexBuffers[HH]._buffer._data = null)
      }
      serializeVerticeData() {
        const HH = this.serialize();
        return this.isVerticesDataPresent(hH.i.PositionKind) && (HH.positions = this._toNumberArray(this.getVerticesData(hH.i.PositionKind)), this.isVertexBufferUpdatable(hH.i.PositionKind) && (HH.positionsUpdatable = !0)), this.isVerticesDataPresent(hH.i.NormalKind) && (HH.normals = this._toNumberArray(this.getVerticesData(hH.i.NormalKind)), this.isVertexBufferUpdatable(hH.i.NormalKind) && (HH.normalsUpdatable = !0)), this.isVerticesDataPresent(hH.i.TangentKind) && (HH.tangents = this._toNumberArray(this.getVerticesData(hH.i.TangentKind)), this.isVertexBufferUpdatable(hH.i.TangentKind) && (HH.tangentsUpdatable = !0)), this.isVerticesDataPresent(hH.i.UVKind) && (HH.uvs = this._toNumberArray(this.getVerticesData(hH.i.UVKind)), this.isVertexBufferUpdatable(hH.i.UVKind) && (HH.uvsUpdatable = !0)), this.isVerticesDataPresent(hH.i.UV2Kind) && (HH.uvs2 = this._toNumberArray(this.getVerticesData(hH.i.UV2Kind)), this.isVertexBufferUpdatable(hH.i.UV2Kind) && (HH.uvs2Updatable = !0)), this.isVerticesDataPresent(hH.i.UV3Kind) && (HH.uvs3 = this._toNumberArray(this.getVerticesData(hH.i.UV3Kind)), this.isVertexBufferUpdatable(hH.i.UV3Kind) && (HH.uvs3Updatable = !0)), this.isVerticesDataPresent(hH.i.UV4Kind) && (HH.uvs4 = this._toNumberArray(this.getVerticesData(hH.i.UV4Kind)), this.isVertexBufferUpdatable(hH.i.UV4Kind) && (HH.uvs4Updatable = !0)), this.isVerticesDataPresent(hH.i.UV5Kind) && (HH.uvs5 = this._toNumberArray(this.getVerticesData(hH.i.UV5Kind)), this.isVertexBufferUpdatable(hH.i.UV5Kind) && (HH.uvs5Updatable = !0)), this.isVerticesDataPresent(hH.i.UV6Kind) && (HH.uvs6 = this._toNumberArray(this.getVerticesData(hH.i.UV6Kind)), this.isVertexBufferUpdatable(hH.i.UV6Kind) && (HH.uvs6Updatable = !0)), this.isVerticesDataPresent(hH.i.ColorKind) && (HH.colors = this._toNumberArray(this.getVerticesData(hH.i.ColorKind)), this.isVertexBufferUpdatable(hH.i.ColorKind) && (HH.colorsUpdatable = !0)), this.isVerticesDataPresent(hH.i.MatricesIndicesKind) && (HH.matricesIndices = this._toNumberArray(this.getVerticesData(hH.i.MatricesIndicesKind)), HH.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(hH.i.MatricesIndicesKind) && (HH.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(hH.i.MatricesWeightsKind) && (HH.matricesWeights = this._toNumberArray(this.getVerticesData(hH.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(hH.i.MatricesWeightsKind) && (HH.matricesWeightsUpdatable = !0)), HH.indices = this._toNumberArray(this.vrH()), HH
      }
      static ExtractFromMesh(HH, BH) {
        const LH = HH._geometry;
        return LH ? LH.copy(BH) : null
      }
      static RandomId() {
        return EH.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(HH, BH) {
        for (let LH = 0; LH < BH.geometries.length; LH++)
          if (BH.geometries[LH]._loadedUniqueId === HH) return BH.geometries[LH];
        return null
      }
      static _ImportGeometry(HH, BH) {
        const LH = BH.yN(),
          AH = HH.geometryUniqueId,
          SH = HH.geometryId;
        if (AH || SH) {
          const HH = AH ? this._GetGeometryByLoadedUniqueId(AH, LH) : LH.getGeometryById(SH);
          HH && HH.applyToMesh(BH)
        } else if (HH instanceof ArrayBuffer) {
          const LH = BH._binaryInfo;
          if (LH.positionsAttrDesc && LH.positionsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.positionsAttrDesc.offset, LH.positionsAttrDesc.count);
            BH.setVerticesData(hH.i.PositionKind, AH, !1)
          }
          if (LH.normalsAttrDesc && LH.normalsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.normalsAttrDesc.offset, LH.normalsAttrDesc.count);
            BH.setVerticesData(hH.i.NormalKind, AH, !1)
          }
          if (LH.tangetsAttrDesc && LH.tangetsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.tangetsAttrDesc.offset, LH.tangetsAttrDesc.count);
            BH.setVerticesData(hH.i.TangentKind, AH, !1)
          }
          if (LH.uvsAttrDesc && LH.uvsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvsAttrDesc.offset, LH.uvsAttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UVKind, AH, !1)
          }
          if (LH.uvs2AttrDesc && LH.uvs2AttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvs2AttrDesc.offset, LH.uvs2AttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UV2Kind, AH, !1)
          }
          if (LH.uvs3AttrDesc && LH.uvs3AttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvs3AttrDesc.offset, LH.uvs3AttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UV3Kind, AH, !1)
          }
          if (LH.uvs4AttrDesc && LH.uvs4AttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvs4AttrDesc.offset, LH.uvs4AttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UV4Kind, AH, !1)
          }
          if (LH.uvs5AttrDesc && LH.uvs5AttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvs5AttrDesc.offset, LH.uvs5AttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UV5Kind, AH, !1)
          }
          if (LH.uvs6AttrDesc && LH.uvs6AttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.uvs6AttrDesc.offset, LH.uvs6AttrDesc.count);
            if (QH.c)
              for (let HH = 1; HH < AH.length; HH += 2) AH[HH] = 1 - AH[HH];
            BH.setVerticesData(hH.i.UV6Kind, AH, !1)
          }
          if (LH.colorsAttrDesc && LH.colorsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.colorsAttrDesc.offset, LH.colorsAttrDesc.count);
            BH.setVerticesData(hH.i.ColorKind, AH, !1, LH.colorsAttrDesc.stride)
          }
          if (LH.matricesIndicesAttrDesc && LH.matricesIndicesAttrDesc.count > 0) {
            const AH = new Int32Array(HH, LH.matricesIndicesAttrDesc.offset, LH.matricesIndicesAttrDesc.count),
              rH = [];
            for (let HH = 0; HH < AH.length; HH++) {
              const BH = AH[HH];
              rH.push(255 & BH), rH.push((65280 & BH) >> 8), rH.push((16711680 & BH) >> 16), rH.push(BH >> 24 & 255)
            }
            BH.setVerticesData(hH.i.MatricesIndicesKind, rH, !1)
          }
          if (LH.matricesIndicesExtraAttrDesc && LH.matricesIndicesExtraAttrDesc.count > 0) {
            const AH = new Int32Array(HH, LH.matricesIndicesExtraAttrDesc.offset, LH.matricesIndicesExtraAttrDesc.count),
              rH = [];
            for (let HH = 0; HH < AH.length; HH++) {
              const BH = AH[HH];
              rH.push(255 & BH), rH.push((65280 & BH) >> 8), rH.push((16711680 & BH) >> 16), rH.push(BH >> 24 & 255)
            }
            BH.setVerticesData(hH.i.MatricesIndicesExtraKind, rH, !1)
          }
          if (LH.matricesWeightsAttrDesc && LH.matricesWeightsAttrDesc.count > 0) {
            const AH = new Float32Array(HH, LH.matricesWeightsAttrDesc.offset, LH.matricesWeightsAttrDesc.count);
            BH.setVerticesData(hH.i.MatricesWeightsKind, AH, !1)
          }
          if (LH.indicesAttrDesc && LH.indicesAttrDesc.count > 0) {
            const AH = new Int32Array(HH, LH.indicesAttrDesc.offset, LH.indicesAttrDesc.count);
            BH.setIndices(AH, null)
          }
          if (LH.subMeshesAttrDesc && LH.subMeshesAttrDesc.count > 0) {
            const AH = new Int32Array(HH, LH.subMeshesAttrDesc.offset, 5 * LH.subMeshesAttrDesc.count);
            BH.jU = [];
            for (let HH = 0; HH < LH.subMeshesAttrDesc.count; HH++) {
              const LH = AH[5 * HH + 0],
                rH = AH[5 * HH + 1],
                SH = AH[5 * HH + 2],
                hH = AH[5 * HH + 3],
                zH = AH[5 * HH + 4];
              tH.d.AddToMesh(LH, rH, SH, hH, zH, BH)
            }
          }
        } else if (HH.positions && HH.normals && HH.indices) {
          if (BH.setVerticesData(hH.i.PositionKind, HH.positions, HH.positions._updatable || HH.positionsUpdatable), BH.setVerticesData(hH.i.NormalKind, HH.normals, HH.normals._updatable || HH.normalsUpdatable), HH.tangents && BH.setVerticesData(hH.i.TangentKind, HH.tangents, HH.tangents._updatable || HH.tangentsUpdatable), HH.uvs && BH.setVerticesData(hH.i.UVKind, HH.uvs, HH.uvs._updatable || HH.uvsUpdatable), HH.uvs2 && BH.setVerticesData(hH.i.UV2Kind, HH.uvs2, HH.uvs2._updatable || HH.uvs2Updatable), HH.uvs3 && BH.setVerticesData(hH.i.UV3Kind, HH.uvs3, HH.uvs3._updatable || HH.uvs3Updatable), HH.uvs4 && BH.setVerticesData(hH.i.UV4Kind, HH.uvs4, HH.uvs4._updatable || HH.uvs4Updatable), HH.uvs5 && BH.setVerticesData(hH.i.UV5Kind, HH.uvs5, HH.uvs5._updatable || HH.uvs5Updatable), HH.uvs6 && BH.setVerticesData(hH.i.UV6Kind, HH.uvs6, HH.uvs6._updatable || HH.uvs6Updatable), HH.colors && BH.setVerticesData(hH.i.ColorKind, rH.g.CheckColors4(HH.colors, HH.positions.length / 3), HH.colors._updatable), HH.matricesIndices)
            if (HH.matricesIndices._isExpanded || HH.matricesIndicesExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExpanded, BH.setVerticesData(hH.i.MatricesIndicesKind, HH.matricesIndices, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable);
            else {
              const LH = [];
              for (let BH = 0; BH < HH.matricesIndices.length; BH++) {
                const AH = HH.matricesIndices[BH];
                LH.push(255 & AH), LH.push((65280 & AH) >> 8), LH.push((16711680 & AH) >> 16), LH.push(AH >> 24 & 255)
              }
              BH.setVerticesData(hH.i.MatricesIndicesKind, LH, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable)
            } if (HH.matricesIndicesExtra)
            if (HH.matricesIndicesExtraExpanded || HH.matricesIndicesExtra._isExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExtraExpanded, BH.setVerticesData(hH.i.MatricesIndicesExtraKind, HH.matricesIndicesExtra, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable);
            else {
              const LH = [];
              for (let BH = 0; BH < HH.matricesIndicesExtra.length; BH++) {
                const AH = HH.matricesIndicesExtra[BH];
                LH.push(255 & AH), LH.push((65280 & AH) >> 8), LH.push((16711680 & AH) >> 16), LH.push(AH >> 24 & 255)
              }
              BH.setVerticesData(hH.i.MatricesIndicesExtraKind, LH, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable)
            } HH.matricesWeights && (MH._CleanMatricesWeights(HH, BH), BH.setVerticesData(hH.i.MatricesWeightsKind, HH.matricesWeights, HH.matricesWeights._updatable)), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesWeightsExtraKind, HH.matricesWeightsExtra, HH.matricesWeights._updatable), BH.setIndices(HH.indices, null)
        }
        if (HH.jU) {
          BH.jU = [];
          for (let LH = 0; LH < HH.jU.length; LH++) {
            const AH = HH.jU[LH];
            tH.d.AddToMesh(AH.materialIndex, AH.verticesStart, AH.verticesCount, AH.indexStart, AH.indexCount, BH)
          }
        }
        BH._shouldGenerateFlatShading && (BH.convertToFlatShadedMesh(), BH._shouldGenerateFlatShading = !1), BH.computeWorldMatrix(!0), LH.onMeshImportedObservable.notifyObservers(BH)
      }
      static _CleanMatricesWeights(HH, BH) {
        const LH = .001;
        if (!zH.d.CleanBoneMatrixWeights) return;
        let AH;
        if (!(HH.skeletonId > -1)) return;
        {
          const LH = BH.yN().getLastSkeletonById(HH.skeletonId);
          if (!LH) return;
          AH = LH.bones.length
        }
        const rH = BH.getVerticesData(hH.i.MatricesIndicesKind),
          SH = BH.getVerticesData(hH.i.MatricesIndicesExtraKind),
          tH = HH.matricesWeights,
          CH = HH.matricesWeightsExtra,
          EH = HH.numBoneInfluencer,
          XH = tH.length;
        for (let hH = 0; hH < XH; hH += 4) {
          let HH = 0,
            BH = -1;
          for (let AH = 0; AH < 4; AH++) {
            const rH = tH[hH + AH];
            HH += rH, rH < LH && BH < 0 && (BH = AH)
          }
          if (CH)
            for (let AH = 0; AH < 4; AH++) {
              const rH = CH[hH + AH];
              HH += rH, rH < LH && BH < 0 && (BH = AH + 4)
            }
          if ((BH < 0 || BH > EH - 1) && (BH = EH - 1), HH > LH) {
            const BH = 1 / HH;
            for (let HH = 0; HH < 4; HH++) tH[hH + HH] *= BH;
            if (CH)
              for (let HH = 0; HH < 4; HH++) CH[hH + HH] *= BH
          } else BH >= 4 ? (CH[hH + BH - 4] = 1 - HH, SH[hH + BH - 4] = AH) : (tH[hH + BH] = 1 - HH, rH[hH + BH] = AH)
        }
        BH.setVerticesData(hH.i.MatricesIndicesKind, rH), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesIndicesExtraKind, SH)
      }
      static Parse(HH, BH, LH) {
        const rH = new MH(HH.id, BH, void 0, HH.updatable);
        return rH._loadedUniqueId = HH.uniqueId, GH.b && GH.b.AddTagsTo(rH, HH.tags), HH.delayLoadingFile ? (rH.delayLoadState = 4, rH.delayLoadingFile = LH + HH.delayLoadingFile, rH._boundingInfo = new CH.d(AH.o.FromArray(HH.boundingBoxMinimum), AH.o.FromArray(HH.boundingBoxMaximum)), rH._delayInfo = [], HH.hasUVs && rH._delayInfo.push(hH.i.UVKind), HH.hasUVs2 && rH._delayInfo.push(hH.i.UV2Kind), HH.hasUVs3 && rH._delayInfo.push(hH.i.UV3Kind), HH.hasUVs4 && rH._delayInfo.push(hH.i.UV4Kind), HH.hasUVs5 && rH._delayInfo.push(hH.i.UV5Kind), HH.hasUVs6 && rH._delayInfo.push(hH.i.UV6Kind), HH.hasColors && rH._delayInfo.push(hH.i.ColorKind), HH.hasMatricesIndices && rH._delayInfo.push(hH.i.MatricesIndicesKind), HH.hasMatricesWeights && rH._delayInfo.push(hH.i.MatricesWeightsKind), rH._delayLoadingFunction = SH.b.ImportVertexData) : SH.b.ImportVertexData(HH, rH), BH.pushGeometry(rH, !0), rH
      }
    }
  },
  41762: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      e: () => uH
    });
    var AH = LH(37963),
      rH = LH(39595),
      SH = LH(41730),
      hH = LH(41693),
      tH = LH(39588),
      zH = LH(41738),
      CH = LH(41427),
      EH = LH(38012);
    class XH extends SH.c {
      constructor(HH, BH) {
        super(HH, BH.yN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, BH.nHH(this), this._sourceMesh = BH, this._unIndexed = BH._unIndexed, this.position.Tm(BH.position), this.rotation.Tm(BH.rotation), this.bX.Tm(BH.bX), BH.rotationQuaternion && (this.rotationQuaternion = BH.rotationQuaternion.clone()), this.animations = BH.animations.slice();
        for (const LH of BH.getAnimationRanges()) null != LH && this.createAnimationRange(LH.name, LH.from, LH.to);
        if (this.infiniteDistance = BH.infiniteDistance, this.setPivotMatrix(BH.getPivotMatrix()), BH.skeleton || BH.morphTargetManager || !BH.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const HH = BH.jF();
          this.buildBoundingInfo(HH.minimum, HH.maximum)
        }
        this._syncSubMeshes()
      }
      getClassName() {
        return "InstancedMesh"
      }
      get lightSources() {
        return this._sourceMesh._lightSources
      }
      _resyncLightSources() {}
      _resyncLightSource() {}
      _removeLightSource() {}
      get receiveShadows() {
        return this._sourceMesh.receiveShadows
      }
      set receiveShadows(HH) {
        this._sourceMesh?.receiveShadows !== HH && rH.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(HH) {
        this._sourceMesh?.material !== HH && rH.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(HH) {
        this._sourceMesh?.visibility !== HH && rH.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(HH) {
        this._sourceMesh?.skeleton !== HH && rH.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(HH) {
        this._sourceMesh && HH !== this._sourceMesh.renderingGroupId && rH.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(HH) {
        this._sourceMesh && HH !== this._sourceMesh.meshBlendingTag && rH.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get XSH() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(HH) {
        return this._sourceMesh.createInstance(HH)
      }
      isReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(HH, !0)
      }
      getVerticesData(HH, BH, LH) {
        return this._sourceMesh.getVerticesData(HH, BH, LH)
      }
      copyVerticesData(HH, BH) {
        this._sourceMesh.copyVerticesData(HH, BH)
      }
      getVertexBuffer(HH, BH) {
        return this._sourceMesh.getVertexBuffer(HH, BH)
      }
      setVerticesData(HH, BH, LH, AH) {
        return this.XSH && this.XSH.setVerticesData(HH, BH, LH, AH), this.XSH
      }
      updateVerticesData(HH, BH, LH, AH) {
        return this.XSH && this.XSH.updateVerticesData(HH, BH, LH, AH), this.XSH
      }
      setIndices(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.XSH && this.XSH.setIndices(HH, BH), this.XSH
      }
      isVerticesDataPresent(HH) {
        return this._sourceMesh.isVerticesDataPresent(HH)
      }
      vrH() {
        return this._sourceMesh.vrH()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let HH, BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.jF().isLocked) return this;
        HH = "object" === typeof BH ? BH : {
          applySkeleton: BH,
          applyMorph: LH
        };
        const AH = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(HH, null, CH.i.PositionKind), AH), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(HH, BH) {
        if (super._activate(HH, BH), this._sourceMesh.jU || rH.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, HH), BH) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== zH.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new AH.e);
          const HH = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, AH.l.lu[7].Tm(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Tm(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Tm(AH.l.lu[7]), this._currentLOD._masterMesh = HH, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get xR() {
        return !0
      }
      getLOD(HH) {
        if (!HH) return this;
        const BH = this.XSH.getLODLevels();
        if (BH && 0 !== BH.length) {
          const BH = this.jF();
          this._currentLOD = this.XSH.getLOD(HH, BH.nrH)
        } else this._currentLOD = this.XSH;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(HH) {
        return this.XSH._preActivateForIntermediateRendering(HH)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.jU)
          for (let HH = 0; HH < this._sourceMesh.jU.length; HH++) this._sourceMesh.jU[HH].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.jF().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(HH);
        if (tH.d.DeepCopy(this, AH, ["name", "jU", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "XSH", "xR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ESH", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "JtH", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), BH && (AH.parent = BH), !LH)
          for (let rH = 0; rH < this.yN().meshes.length; rH++) {
            const HH = this.yN().meshes[rH];
            HH.parent === this && HH.clone(HH.name, AH)
          }
        return AH.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(AH), AH
      }
      dispose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.DHH(this), super.dispose(HH, BH)
      }
      _serializeAsParent(HH) {
        super._serializeAsParent(HH), HH.parentId = this._sourceMesh.uniqueId, HH.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0, BH && BH.newSourcedMesh);
        AH && LH && LH(this, AH);
        for (const rH of this.getChildTransformNodes(!0)) rH.instantiateHierarchy(AH, BH, LH);
        return AH
      }
    }
    let GH = !1;

    function YH(HH, BH, LH, AH, rH) {
      for (let SH = 0; SH < BH.length; SH++) {
        const hH = HH[BH[SH]] ?? 0,
          tH = rH + LH[SH];
        hH.toArray ? hH.toArray(AH, tH) : hH.copyToArray ? hH.copyToArray(AH, tH) : AH[tH] = hH
      }
    }

    function uH() {
      GH || (GH = !0, hH.c._instancedMeshFactory = (HH, BH) => {
        const LH = new XH(HH, BH);
        if (BH.kF) {
          LH.kF = {};
          for (const HH in BH.kF) LH.kF[HH] = BH.kF[HH]
        }
        return LH
      }, hH.c.prototype.uF = function(HH, BH) {
        if (!this.kF) {
          this.kF = {};
          for (const HH of this.instances) HH.kF = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Iu().getCaps().vertexArrayObject ? {} : void 0
        }), this.kF[HH] = null, this._userInstancedBuffersStorage.strides[HH] = BH;
        const LH = this._userInstancedBuffersStorage;
        LH.interleavedKinds = [], LH.interleavedOffsets = [], LH.interleavedRowStride = 0;
        for (const AH in LH.strides) LH.interleavedKinds.push(AH), LH.interleavedOffsets.push(LH.interleavedRowStride), LH.interleavedRowStride += LH.strides[AH];
        LH.interleavedData = new Float32Array(32 * LH.interleavedRowStride);
        for (const AH in LH.interleavedBuffers) LH.interleavedBuffers[AH].buffer.dispose();
        LH.interleavedBuffers = {}, LH.vertexBuffers[HH] = null;
        for (const AH of this.instances) AH.kF[HH] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, hH.c.prototype._processInstancedBuffers = function(HH, BH) {
        const LH = this._userInstancedBuffersStorage,
          AH = LH.interleavedRowStride;
        if (!AH) return;
        const rH = HH ? HH.length : 0,
          SH = (rH + 1) * AH;
        let hH = LH.interleavedData;
        if (hH.length < SH) {
          let HH = hH.length;
          for (; HH < SH;) HH *= 2;
          hH = LH.interleavedData = new Float32Array(HH)
        }
        const tH = LH.interleavedKinds,
          zH = LH.interleavedOffsets;
        let EH = 0;
        BH && (YH(this.kF, tH, zH, hH, EH), EH += AH);
        for (let CH = 0; CH < rH; CH++) YH(HH[CH].kF, tH, zH, hH, EH), EH += AH;
        let XH = "shared",
          GH = LH.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (XH = this._instanceDataStorage.engine.currentRenderPassId, LH.renderPasses || (LH.renderPasses = {}), LH.renderPasses[XH] || (LH.renderPasses[XH] = {}), GH = LH.renderPasses[XH]);
        const uH = LH.interleavedBuffers[XH];
        let QH = !uH || uH.data !== hH;
        for (let CH = 0; !QH && CH < tH.length; CH++) QH = !GH[tH[CH]];
        if (!QH) return void uH.buffer.updateDirectly(hH, 0);
        uH?.buffer.dispose();
        const WH = new CH.b(this.Iu(), hH, !0, AH, !1, !0);
        for (let CH = 0; CH < tH.length; CH++) {
          const HH = tH[CH],
            BH = WH.createVertexBuffer(HH, zH[CH], LH.strides[HH]);
          BH.hashCode += BH.byteOffset * 2 ** 24, GH[HH] = BH
        }
        LH.interleavedBuffers[XH] = {
          buffer: WH,
          data: hH
        }, this._invalidateInstanceVertexArrayObject()
      }, hH.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const HH in this._userInstancedBuffersStorage.vertexArrayObjects) this.Iu().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[HH]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, hH.c.prototype._disposeInstanceSpecificData = function() {
        for (const BH in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[BH].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const BH in this.kF) this._userInstancedBuffersStorage.vertexBuffers[BH] && this._userInstancedBuffersStorage.vertexBuffers[BH].dispose();
        const HH = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (HH) {
          for (const BH in HH) HH[BH].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.kF = {}
      }, (0, EH.f)("BABYLON.InstancedMesh", XH))
    }
  },
  41693: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => iH,
      g: () => yH,
      i: () => DH
    });
    var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH = LH(37997),
      xH = LH(41387),
      vH = LH(41336),
      PH = LH(39588),
      TH = LH(41326),
      UH = LH(41697),
      VH = LH(41489),
      OH = LH(37963),
      bH = LH(38074),
      kH = LH(41498),
      mH = LH(41427),
      oH = LH(41703),
      IH = LH(41706),
      fH = LH(41730),
      lH = LH(41578),
      KH = LH(41573),
      cH = LH(41662),
      eH = LH(41742),
      qH = LH(41713),
      gH = LH(41319),
      NH = LH(39595),
      RH = LH(38012),
      jH = LH(41169),
      nH = LH(41456);
    class FH {
      constructor(HH, BH) {
        this.distanceOrScreenCoverage = HH, this.mesh = BH
      }
    }
    class DH {}
    class wH {
      constructor() {
        this.batchCache = new dH(this), this.batchCacheReplacementModeInFrozenMode = new dH(this), this.instancesBufferSize = 2048
      }
    }
    class ZH {
      constructor() {
        this.renderPasses = {}
      }
    }
    class dH {
      constructor(HH) {
        this.parent = HH, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class aH {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class sH {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const JH = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class iH extends fH.c {
      static _GetDefaultSideOrientation(HH) {
        return HH || iH.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(HH) {
        this._internalMeshDataInfo._useLODScreenCoverage = HH, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(HH) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== HH && (HH && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(mH.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(mH.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = HH, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new MH.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new MH.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new MH.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new MH.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new MH.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(HH) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(HH)
      }
      get ESH() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(HH) {
        this._internalMeshDataInfo._forcedInstanceCount = HH
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(HH) {
        this._internalMeshDataInfo._sideOrientation = HH, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === HH || !this._scene.useRightHandedSystem && 0 === HH
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(HH) {
        this.sideOrientation = HH, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(HH) {
        this._internalMeshDataInfo._overrideRenderingFillMode = HH
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(HH) {
        HH && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (HH.sideOrientation = null), this._setMaterial(HH)
      }
      get source() {
        return this._internalMeshDataInfo._source
      }
      get cloneMeshMap() {
        return this._internalMeshDataInfo.meshMap
      }
      get isUnIndexed() {
        return this._unIndexed
      }
      set isUnIndexed(HH) {
        this._unIndexed !== HH && (this._unIndexed = HH, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const HH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return HH ? HH.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const HH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return HH ? HH.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(HH) {
        this._instanceDataStorage.manualUpdate = HH
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(HH) {
        this._instanceDataStorage.previousManualUpdate = HH
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(HH) {
        this._instanceDataStorage.forceMatrixUpdates = HH
      }
      _copySource(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const rH = this.yN();
        if (HH._geometry && HH._geometry.applyToMesh(this), PH.d.DeepCopy(HH, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ESH", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "xR", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "JtH", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = HH, rH.useClonedMeshMap && (HH._internalMeshDataInfo.meshMap || (HH._internalMeshDataInfo.meshMap = {}), HH._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = HH._originalBuilderSideOrientation, this._creationDataStorage = HH._creationDataStorage, HH._ranges) {
          const BH = HH._ranges;
          for (const HH in BH) Object.prototype.hasOwnProperty.call(BH, HH) && BH[HH] && this.createAnimationRange(HH, BH[HH].from, BH[HH].to)
        }
        if (HH.metadata && HH.metadata.clone ? this.metadata = HH.metadata.clone() : this.metadata = HH.metadata, this._internalMetadata = HH._internalMetadata, this.meshBlendingTag = HH.meshBlendingTag, TH.b && TH.b.HasTags(HH) && TH.b.AddTagsTo(this, TH.b.GetTags(HH, !0)), this.vI(HH.isEnabled(!1)), this.parent = HH.parent, this.setPivotMatrix(HH.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + HH.id, this.material = HH.material, !BH) {
          const rH = HH.getDescendants(!0);
          for (let HH = 0; HH < rH.length; HH++) {
            const SH = rH[HH];
            SH._isMesh ? (JH.parent = this, JH.doNotCloneChildren = BH, JH.clonePhysicsImpostor = LH, JH.cloneThinInstances = AH, SH.clone(this.name + "." + SH.name, JH)) : SH.clone && SH.clone(this.name + "." + SH.name, this)
          }
        }
        if (HH.morphTargetManager && (this.morphTargetManager = HH.morphTargetManager), (0, jH.c)(rH.getPhysicsEngine)) {
          const BH = rH.getPhysicsEngine();
          if (LH && BH)
            if (1 === BH.getPluginVersion()) {
              const LH = BH.getImpostorForPhysicsObject(HH);
              LH && (this.physicsImpostor = LH.clone(this))
            } else 2 === BH.getPluginVersion() && HH.physicsBody && HH.physicsBody.clone(this)
        }
        for (let SH = 0; SH < rH.dU.length; SH++) {
          const BH = rH.dU[SH];
          BH.emitter === HH && BH.clone(BH.name, this)
        }
        if (this.skeleton = HH.skeleton, AH && (HH._thinInstanceDataStorage.matrixData ? (this.yHH("matrix", new Float32Array(HH._thinInstanceDataStorage.matrixData), 16, !HH._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = HH._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = HH._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = HH._thinInstanceDataStorage.matrixBufferSize, HH._userThinInstanceBuffersStorage)) {
          const BH = HH._userThinInstanceBuffersStorage;
          for (const HH in BH.data) this.yHH(HH, new Float32Array(BH.data[HH]), BH.strides[HH], !BH.vertexBuffers?.[HH]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[HH] = BH.sizes[HH]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(HH) {
        let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SH = arguments.length > 4 ? arguments[4] : void 0,
          hH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(HH, LH), this._internalMeshDataInfo = new sH, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new aH, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = iH.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, LH = this.yN(), this._instanceDataStorage = new ZH, this._instanceDataStorage.engine = LH.Iu(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new wH), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (HH, BH, LH) => {
          HH && LH && (this._uniformBuffer ? this.transferToEffect(BH) : LH.bindOnlyWorldMatrix(BH))
        };
        let tH = !1;
        if (AH && void 0 === AH._addToSceneRootNodes) {
          const HH = AH;
          BH = HH.parent ?? null, rH = HH.source ?? null, SH = HH.doNotCloneChildren ?? !1, hH = HH.clonePhysicsImpostor ?? !0, tH = HH.cloneThinInstances ?? !1
        } else BH = AH;
        rH && this._copySource(rH, SH, hH, tH), null !== BH && (this.parent = BH), this._instanceDataStorage.hardwareInstancedRendering = this.Iu().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = HH => {
          HH.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new MH.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), rH && rH.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = 0 === this.getTotalVertices() || BH && BH.doNotInstantiate && (!0 === BH.doNotInstantiate || BH.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        AH.parent = HH || this.parent, AH.position = this.position.clone(), AH.bX = this.bX.clone(), this.rotationQuaternion ? AH.rotationQuaternion = this.rotationQuaternion.clone() : AH.rotation = this.rotation.clone(), LH && LH(this, AH);
        for (const rH of this.getChildTransformNodes(!0)) "InstancedMesh" === rH.getClassName() && "Mesh" === AH.getClassName() && rH.XSH === this ? rH.instantiateHierarchy(AH, {
          doNotInstantiate: BH && BH.doNotInstantiate || !1,
          newSourcedMesh: AH
        }, LH) : rH.instantiateHierarchy(AH, BH, LH);
        return AH
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(HH) {
        let BH = super.toString(HH);
        if (BH += ", n vertices: " + this.getTotalVertices(), BH += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let LH = 0; LH < this.animations.length; LH++) BH += ", animation[0]: " + this.animations[LH].toString(HH);
        if (HH)
          if (this._geometry) {
            const HH = this.vrH(),
              LH = this.getVerticesData(mH.i.PositionKind);
            LH && HH && (BH += ", flat shading: " + (LH.length / 3 === HH.length ? "YES" : "NO"))
          } else BH += ", flat shading: UNKNOWN";
        return BH
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const HH of this.instances) HH._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const HH = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((BH, LH) => BH.distanceOrScreenCoverage < LH.distanceOrScreenCoverage ? HH : BH.distanceOrScreenCoverage > LH.distanceOrScreenCoverage ? -HH : 0))
      }
      addLODLevel(HH, BH) {
        if (BH && BH._masterMesh) return NH.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const LH = new FH(HH, BH);
        return this._internalMeshDataInfo._LODLevels.push(LH), BH && (BH._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(HH) {
        const BH = this._internalMeshDataInfo;
        for (let LH = 0; LH < BH._LODLevels.length; LH++) {
          const AH = BH._LODLevels[LH];
          if (AH.distanceOrScreenCoverage === HH) return AH.mesh
        }
        return null
      }
      removeLODLevel(HH) {
        const BH = this._internalMeshDataInfo;
        for (let LH = 0; LH < BH._LODLevels.length; LH++) BH._LODLevels[LH].mesh === HH && (BH._LODLevels.splice(LH, 1), HH && (HH._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(HH, BH) {
        const LH = this._internalMeshDataInfo;
        if (!LH._LODLevels || 0 === LH._LODLevels.length) return this;
        const AH = BH || this.jF().nrH,
          rH = HH.mode === VH.d.ORTHOGRAPHIC_CAMERA ? HH.minZ : AH.centerWorld.subtract(HH.globalPosition).length();
        let SH = rH,
          hH = 1;
        if (LH._useLODScreenCoverage) {
          const BH = HH.screenArea;
          let LH = AH.radiusWorld * HH.minZ / rH;
          LH = LH * LH * Math.PI, SH = LH / BH, hH = -1
        }
        if (hH * LH._LODLevels[LH._LODLevels.length - 1].distanceOrScreenCoverage > hH * SH) return this.onLODLevelSelection && this.onLODLevelSelection(SH, this, this), this;
        for (let tH = 0; tH < LH._LODLevels.length; tH++) {
          const HH = LH._LODLevels[tH];
          if (hH * HH.distanceOrScreenCoverage < hH * SH) {
            if (HH.mesh) {
              if (4 === HH.mesh.delayLoadState) return HH.mesh._checkDelayState(), this;
              if (2 === HH.mesh.delayLoadState) return this;
              HH.mesh._preActivate(), HH.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(SH, this, HH.mesh), HH.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(SH, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(HH, BH, LH, AH) {
        if (!this._geometry) return null;
        let rH = AH ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[HH]?.getFloatData(this.instances.length + 1, LH || BH && 1 !== this._geometry.meshes.length);
        return rH || (rH = this._geometry.getVerticesData(HH, BH, LH)), rH
      }
      copyVerticesData(HH, BH) {
        this._geometry && this._geometry.copyVerticesData(HH, BH)
      }
      getVertexBuffer(HH, BH) {
        return this._geometry ? (BH ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[HH]) ?? this._geometry.getVertexBuffer(HH) : null
      }
      isVerticesDataPresent(HH, BH) {
        return this._geometry ? !BH && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[HH] || this._geometry.isVerticesDataPresent(HH) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH)
      }
      isVertexBufferUpdatable(HH, BH) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH);
        if (!BH) {
          const BH = this._userInstancedBuffersStorage?.vertexBuffers[HH];
          if (BH) return BH.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(HH)
      }
      getVerticesDataKinds(HH) {
        if (!this._geometry) {
          const HH = [];
          if (this._delayInfo)
            for (const BH of this._delayInfo) HH.push(BH);
          return HH
        }
        const BH = this._geometry.getVerticesDataKinds();
        if (!HH && this._userInstancedBuffersStorage)
          for (const LH in this._userInstancedBuffersStorage.vertexBuffers) - 1 === BH.indexOf(LH) && BH.push(LH);
        return BH
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      vrH(HH, BH) {
        return this._geometry ? this._geometry.vrH(HH, BH) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(HH)) return !1;
        if (!this.jU || 0 === this.jU.length) return !0;
        if (!HH) return !0;
        const LH = this.Iu(),
          AH = this.yN(),
          rH = BH || LH.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const SH = this.material || AH.defaultMaterial;
        if (SH)
          if (SH._storeEffectOnSubMeshes)
            for (const tH of this.jU) {
              const HH = tH.eu();
              if (HH)
                if (HH._storeEffectOnSubMeshes) {
                  if (!HH.isReadyForSubMesh(this, tH, rH)) return !1
                } else if (!HH.isReady(this, rH)) return !1
            } else if (!SH.isReady(this, rH)) return !1;
        const hH = LH.currentRenderPassId;
        for (const tH of this.lightSources) {
          const HH = tH.getShadowGenerators();
          if (!HH) continue;
          const BH = HH.values();
          for (let AH = BH.next(); !0 !== AH.done; AH = BH.next()) {
            const HH = AH.value;
            if (HH && (!HH.getShadowMap()?.renderList || HH.getShadowMap()?.renderList && -1 !== HH.getShadowMap()?.renderList?.indexOf(this))) {
              const BH = HH.getShadowMap().renderPassIds ?? [LH.currentRenderPassId];
              for (let AH = 0; AH < BH.length; ++AH) {
                LH.currentRenderPassId = BH[AH];
                for (const BH of this.jU)
                  if (!HH.isReady(BH, rH, BH.eu()?.needAlphaBlendingForMesh(this) ?? !1)) return LH.currentRenderPassId = hH, !1
              }
              LH.currentRenderPassId = hH
            }
          }
        }
        for (const tH of this._internalMeshDataInfo._LODLevels)
          if (tH.mesh && !tH.mesh.isReady(rH)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      qu() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(HH) {
        this._instanceDataStorage.overridenInstanceCount = HH
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const HH = this._instanceDataStorage.engine.currentRenderPassId;
        let BH = this._instanceDataStorage.renderPasses[HH];
        return BH || (BH = new wH, this._instanceDataStorage.renderPasses[HH] = BH), BH
      }
      _preActivate() {
        const HH = this._internalMeshDataInfo,
          BH = this.yN().getRenderId();
        return HH._preActivateId === BH || (HH._preActivateId = BH, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(HH) {
        const BH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return BH.visibleInstances && (BH.visibleInstances.intermediateDefaultRenderId = HH), this
      }
      _registerInstanceForRenderId(HH, BH) {
        const LH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return LH.visibleInstances || (LH.visibleInstances = {
          defaultRenderId: BH,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), LH.visibleInstances[BH] || (void 0 === LH.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete LH.visibleInstances[LH.previousRenderId], LH.previousRenderId = BH, LH.visibleInstances[BH] = new Array), LH.visibleInstances[BH].push(HH), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.cu || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let HH, BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.jF().isLocked) return this;
        HH = "object" === typeof BH ? BH : {
          applySkeleton: BH,
          applyMorph: LH
        };
        const AH = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(HH, null, mH.i.PositionKind), AH), this
      }
      _createGlobalSubMesh(HH) {
        const BH = this.getTotalVertices();
        if (!BH || !this.vrH()) return null;
        if (this.jU && this.jU.length > 0) {
          const LH = this.vrH();
          if (!LH) return null;
          const AH = LH.length;
          let rH = !1;
          if (HH) rH = !0;
          else
            for (const HH of this.jU) {
              if (HH.indexStart + HH.indexCount > AH) {
                rH = !0;
                break
              }
              if (HH.verticesStart + HH.verticesCount > BH) {
                rH = !0;
                break
              }
            }
          if (!rH) return this.jU[0]
        }
        return this.releaseSubMeshes(), new lH.d(0, 0, BH, 0, this.getTotalIndices() || (this.isUnIndexed ? BH : 0), this)
      }
      subdivide(HH) {
        if (HH < 1) return;
        const BH = this.getTotalIndices();
        let LH = BH / HH | 0,
          AH = 0;
        for (; LH % 3 !== 0;) LH++;
        this.releaseSubMeshes();
        for (let rH = 0; rH < HH && !(AH >= BH); rH++) lH.d.CreateFromIndices(0, AH, AH + LH >= BH ? BH - AH : LH, this, void 0, !1), AH += LH;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(HH, BH, LH, AH);
        else {
          const AH = new oH.b;
          AH.set(BH, HH);
          const rH = this.yN();
          new IH.d(IH.d.RandomId(), rH, AH, LH, this)
        }
        return this
      }
      removeVerticesData(HH) {
        this._geometry && this._geometry.removeVerticesData(HH)
      }
      markVerticesDataAsUpdatable(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this.getVertexBuffer(HH);
        LH && LH.isUpdatable() !== BH && this.setVerticesData(HH, this.getVerticesData(HH), BH)
      }
      setVerticesBuffer(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = IH.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(HH, LH, BH), this
      }
      updateVerticesData(HH, BH, LH, AH) {
        return this._geometry ? (AH ? (this.makeGeometryUnique(), this.updateVerticesData(HH, BH, LH, !1)) : this._geometry.updateVerticesData(HH, BH, LH), this) : this
      }
      updateMeshPositions(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this.getVerticesData(mH.i.PositionKind);
        if (!LH) return this;
        if (HH(LH), this.updateVerticesData(mH.i.PositionKind, LH, !1, !1), BH) {
          const HH = this.vrH(),
            BH = this.getVerticesData(mH.i.NormalKind);
          if (!BH) return this;
          oH.b.ComputeNormals(LH, HH, BH), this.updateVerticesData(mH.i.NormalKind, BH, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const HH = this._geometry,
          BH = this._geometry.copy(IH.d.RandomId());
        return HH.releaseForMesh(this, !0), BH.applyToMesh(this), this
      }
      setIndexBuffer(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          rH = this._geometry;
        rH || (rH = new IH.d(IH.d.RandomId(), this.yN(), void 0, void 0, this)), rH.setIndexBuffer(HH, BH, LH, AH)
      }
      setIndices(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(HH, BH, LH, AH);
        else {
          const AH = new oH.b;
          AH.indices = HH;
          const rH = this.yN();
          new IH.d(IH.d.RandomId(), rH, AH, LH, this, BH)
        }
        return this
      }
      updateIndices(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(HH, BH, LH), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(HH, BH, LH) {
        let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const rH = this.yN().Iu();
        let SH;
        if (this._unIndexed)
          if (this._getRenderingFillMode(LH) === KH.c.WireFrameFillMode) SH = HH._getLinesIndexBuffer(this.vrH(), rH);
          else SH = null;
        else switch (this._getRenderingFillMode(LH)) {
          case KH.c.PointFillMode:
            SH = null;
            break;
          case KH.c.WireFrameFillMode:
            SH = HH._getLinesIndexBuffer(this.vrH(), rH);
            break;
          default:
          case KH.c.TriangleFillMode:
            SH = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(BH, SH, AH)
      }
      _bindDirect(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(HH), LH && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const HH = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const BH in HH) this._userInstancedBuffersStorage.vertexBuffers[BH] = HH[BH]
          }
          this._geometry._bind(HH, BH, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(HH, BH);
        return this
      }
      _draw(HH, BH, LH) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const AH = this.yN().Iu(),
          rH = AH._currentMaterialContext,
          SH = rH && rH.useVertexPulling;
        return this._unIndexed && BH !== KH.c.WireFrameFillMode || BH == KH.c.PointFillMode ? AH.drawArraysType(BH, HH.verticesStart, HH.verticesCount, this.forcedInstanceCount || LH) : BH == KH.c.WireFrameFillMode ? AH.drawElementsType(BH, 0, HH._linesIndexCount, this.forcedInstanceCount || LH) : SH ? AH.drawArraysType(BH, HH.indexStart, HH.indexCount, this.forcedInstanceCount || LH) : AH.drawElementsType(BH, HH.indexStart, HH.indexCount, this.forcedInstanceCount || LH), this
      }
      registerBeforeRender(HH) {
        return this.onBeforeRenderObservable.add(HH), this
      }
      unregisterBeforeRender(HH) {
        return this.onBeforeRenderObservable.removeCallback(HH), this
      }
      registerAfterRender(HH) {
        return this.onAfterRenderObservable.add(HH), this
      }
      unregisterAfterRender(HH) {
        return this.onAfterRenderObservable.removeCallback(HH), this
      }
      _getInstancesRenderList(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (BH) return LH.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[HH] = !1, LH.batchCacheReplacementModeInFrozenMode.renderSelf[HH] = !0, LH.batchCacheReplacementModeInFrozenMode;
          if (LH.previousBatch) return LH.previousBatch
        }
        const AH = this.yN(),
          rH = AH._isInIntermediateRendering(),
          SH = rH ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          hH = LH.batchCache;
        if (hH.mustReturn = !1, hH.renderSelf[HH] = BH || !SH && this.isEnabled() && this.isVisible, hH.visibleInstances[HH] = null, LH.visibleInstances && !BH) {
          const BH = LH.visibleInstances,
            SH = AH.getRenderId(),
            tH = rH ? BH.intermediateDefaultRenderId : BH.defaultRenderId;
          hH.visibleInstances[HH] = BH[SH], !hH.visibleInstances[HH] && tH && (hH.visibleInstances[HH] = BH[tH])
        }
        return hH.hardwareInstancedRendering[HH] = !BH && this._instanceDataStorage.hardwareInstancedRendering && null !== hH.visibleInstances[HH] && void 0 !== hH.visibleInstances[HH], LH.previousBatch = hH, hH
      }
      _updateInstancedBuffers(HH, BH, LH, AH, rH, SH) {
        const hH = BH.visibleInstances[HH._id],
          tH = hH ? hH.length : 0,
          zH = BH.parent,
          CH = this._instanceDataStorage;
        let EH = zH.instancesBuffer,
          XH = zH.instancesPreviousBuffer,
          GH = 0,
          YH = 0;
        const uH = BH.renderSelf[HH._id],
          QH = this._scene.floatingOriginOffset,
          WH = !EH || LH !== zH.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !zH.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || CH.isFrozen && !WH) YH = (uH ? 1 : 0) + tH;
        else {
          const BH = this.getWorldMatrix();
          if (uH) {
            this._scene.needsPreviousWorldMatrices && (CH.masterMeshPreviousWorldMatrix ? (CH.masterMeshPreviousWorldMatrix.copyToArray(zH.instancesPreviousData, GH), CH.masterMeshPreviousWorldMatrix.Tm(BH)) : (CH.masterMeshPreviousWorldMatrix = BH.clone(), CH.masterMeshPreviousWorldMatrix.copyToArray(zH.instancesPreviousData, GH))), BH.copyToArray(zH.instancesData, GH);
            const HH = BH.xrH();
            zH.instancesData[GH + 12] = HH[12] - QH.x, zH.instancesData[GH + 13] = HH[13] - QH.y, zH.instancesData[GH + 14] = HH[14] - QH.z, GH += 16, YH++
          }
          if (hH) {
            if (iH.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && HH.eu()?.needAlphaBlendingForMesh(HH.getRenderingMesh())) {
              const HH = this._scene.activeCamera.globalPosition;
              for (let BH = 0; BH < hH.length; BH++) {
                const LH = hH[BH];
                LH._distanceToCamera = OH.o.Distance(LH.jF().nrH.centerWorld, HH)
              }
              hH.sort(((HH, BH) => HH._distanceToCamera > BH._distanceToCamera ? -1 : HH._distanceToCamera < BH._distanceToCamera ? 1 : 0))
            }
            for (let HH = 0; HH < hH.length; HH++) {
              const BH = hH[HH],
                LH = BH.getWorldMatrix();
              LH.copyToArray(zH.instancesData, GH), this._scene.needsPreviousWorldMatrices && (BH._previousWorldMatrix ? (BH._previousWorldMatrix.copyToArray(zH.instancesPreviousData, GH), BH._previousWorldMatrix.Tm(LH)) : (BH._previousWorldMatrix = LH.clone(), BH._previousWorldMatrix.copyToArray(zH.instancesPreviousData, GH)));
              const AH = LH.xrH();
              zH.instancesData[GH + 12] = AH[12] - QH.x, zH.instancesData[GH + 13] = AH[13] - QH.y, zH.instancesData[GH + 14] = AH[14] - QH.z, GH += 16, YH++
            }
          }
        }
        if (WH) {
          let HH;
          if (EH && EH.dispose(), XH && XH.dispose(), EH = new mH.b(AH, zH.instancesData, !0, 16, !1, !0), zH.instancesBuffer = EH, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Iu().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) HH = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const BH = this._instanceDataStorage.engine.currentRenderPassId;
            HH = this._userInstancedBuffersStorage.renderPasses[BH], HH || (this._userInstancedBuffersStorage.renderPasses[BH] = HH = {})
          }
          HH.world0 = EH.createVertexBuffer("world0", 0, 4), HH.world1 = EH.createVertexBuffer("world1", 4, 4), HH.world2 = EH.createVertexBuffer("world2", 8, 4), HH.world3 = EH.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (XH = new mH.b(AH, zH.instancesPreviousData, !0, 16, !1, !0), zH.instancesPreviousBuffer = XH, HH.previousWorld0 = XH.createVertexBuffer("previousWorld0", 0, 4), HH.previousWorld1 = XH.createVertexBuffer("previousWorld1", 4, 4), HH.previousWorld2 = XH.createVertexBuffer("previousWorld2", 8, 4), HH.previousWorld3 = XH.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (EH.updateDirectly(zH.instancesData, 0, YH), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || XH.updateDirectly(zH.instancesPreviousData, 0, YH));
        this._processInstancedBuffers(hH, uH), SH && void 0 !== rH && (this.yN()._activeIndices.addCount(HH.indexCount * YH, !1), AH._currentDrawContext && (AH._currentDrawContext.useInstancing = !0), this._bind(HH, SH, rH), this._draw(HH, rH, YH)), !this._scene.needsPreviousWorldMatrices || WH || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || XH.updateDirectly(zH.instancesData, 0, YH)
      }
      _renderWithInstances(HH, BH, LH, AH, rH) {
        const SH = LH.visibleInstances[HH._id],
          hH = SH ? SH.length : 0,
          tH = LH.parent,
          zH = tH.instancesBufferSize,
          CH = 16 * (hH + 1) * 4;
        for (; tH.instancesBufferSize < CH;) tH.instancesBufferSize *= 2;
        return tH.instancesData && zH == tH.instancesBufferSize || (tH.instancesData = new Float32Array(tH.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !tH.instancesPreviousData || zH != tH.instancesBufferSize) && (tH.instancesPreviousData = new Float32Array(tH.instancesBufferSize / 4)), this._updateInstancedBuffers(HH, LH, zH, rH, BH, AH), rH.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(HH, BH, LH, AH) {
        const rH = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.yN()._activeIndices.addCount(HH.indexCount * rH, !1), AH._currentDrawContext && (AH._currentDrawContext.useInstancing = !0), this._bind(HH, LH, BH), this._draw(HH, BH, rH), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, rH) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), AH.unbindInstanceAttributes()
      }
      _processInstancedBuffers(HH, BH) {}
      _processRendering(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = this.yN(),
          CH = zH.Iu();
        if (AH = this._getRenderingFillMode(AH), SH && BH.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(BH, AH, LH, CH), this;
        if (SH) this._renderWithInstances(BH, AH, rH, LH, CH);
        else {
          CH._currentDrawContext && (CH._currentDrawContext.useInstancing = !1);
          let LH = 0;
          rH.renderSelf[BH._id] && (hH && hH(!1, HH.getWorldMatrix(), tH), LH++, this._draw(BH, AH, this._instanceDataStorage.overridenInstanceCount));
          const SH = rH.visibleInstances[BH._id];
          if (SH) {
            const HH = SH.length;
            LH += HH;
            for (let LH = 0; LH < HH; LH++) {
              const HH = SH[LH].getWorldMatrix();
              hH && hH(!0, HH, tH), this._draw(BH, AH)
            }
          }
          zH._activeIndices.addCount(BH.indexCount * LH, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        HH?.instancesBuffer && (BH && HH.instancesBuffer.dispose(), HH.instancesBuffer = null), HH?.instancesPreviousBuffer && (BH && HH.instancesPreviousBuffer.dispose(), HH.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const BH in this._instanceDataStorage.renderPasses) {
          const LH = this._instanceDataStorage.renderPasses[BH];
          this._disposeInstanceDataStorageRenderPass(LH, HH)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, HH), this._userInstancedBuffersStorage) {
          for (const BH in this._userInstancedBuffersStorage.vertexBuffers) {
            const LH = this._userInstancedBuffersStorage.vertexBuffers[BH];
            LH && (HH && LH.dispose(), this._userInstancedBuffersStorage.vertexBuffers[BH] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(HH)
      }
      _releaseRenderPassId(HH) {
        const BH = this._instanceDataStorage.renderPasses[HH];
        if (BH && (this._disposeInstanceDataStorageRenderPass(BH, !0), delete this._instanceDataStorage.renderPasses[HH]), this._userInstancedBuffersStorage?.renderPasses) {
          const BH = this._userInstancedBuffersStorage.renderPasses[HH];
          if (BH)
            for (const HH in BH) BH[HH]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[HH]
        }
        const LH = this._userInstancedBuffersStorage?.interleavedBuffers;
        LH?.[HH] && (LH[HH].buffer.dispose(), delete LH[HH])
      }
      _freeze() {
        if (this.jU) {
          for (let HH = 0; HH < this.jU.length; HH++) this._getInstancesRenderList(HH);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const HH in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[HH].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const SH = this._scene.Iu(),
          hH = SH.currentRenderPassId;
        if (void 0 !== HH && (SH.currentRenderPassId = HH), AH)(!rH || rH && AH.isInFrustum(this._scene._frustumPlanes)) && this.render(AH, !!BH, LH);
        else
          for (let tH = 0; tH < this.jU.length; tH++) {
            const HH = this.jU[tH];
            (!rH || rH && HH.isInFrustum(this._scene._frustumPlanes)) && this.render(HH, !!BH, LH)
          }
        return void 0 !== HH && (SH.currentRenderPassId = hH), this
      }
      directRender() {
        if (!this.jU) return this;
        for (const HH of this.jU) this.render(HH, !1);
        return this
      }
      render(HH, BH, LH) {
        const AH = this.yN(),
          rH = AH.Iu();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const SH = AH.activeCameras?.length ?? 0,
          hH = SH > 1 && AH.activeCamera === AH.activeCameras[0] || SH <= 1,
          tH = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== rH.currentRenderPassId;
        if (hH && this._checkOcclusionQuery(tH) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const zH = this._getInstancesRenderList(HH._id, !!LH);
        if (zH.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let CH = 0,
          EH = null;
        this.ignoreCameraMaxZ && AH.activeCamera && !AH._isInIntermediateRendering() && (CH = AH.activeCamera.maxZ, EH = AH.activeCamera, AH.activeCamera.maxZ = 0, AH.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const XH = HH.getRenderingMesh(),
          GH = zH.hardwareInstancedRendering[HH._id] || XH.hasThinInstances || !!this._userInstancedBuffersStorage && !HH.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          YH = this._instanceDataStorage,
          uH = HH.eu();
        if (!uH) return EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), this;
        if (YH.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === uH) {
          if (uH._storeEffectOnSubMeshes && !HH._drawWrapper?._wasPreviouslyReady || !uH._storeEffectOnSubMeshes && !uH._getDrawWrapper()._wasPreviouslyReady) return EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), this
        } else {
          if (uH._storeEffectOnSubMeshes) {
            if (!uH.isReadyForSubMesh(this, HH, GH)) return EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), this
          } else if (!uH.isReady(this, GH)) return EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = uH
        }
        if (BH) {
          const HH = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === HH.alphaModes.length) rH.setAlphaMode(HH.alphaMode);
          else
            for (let BH = 0; BH < HH.alphaModes.length; BH++) {
              const LH = HH.alphaModes[BH];
              rH.setAlphaMode(void 0 !== LH ? LH : 2, !1, BH)
            }
        }
        let QH;
        QH = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? HH._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const WH = QH?.effect ?? null;
        for (let VH = 0, OH = AH._beforeRenderingMeshStage; VH < OH.length; VH++) {
          OH[VH].action(this, HH, zH, WH)
        }
        if (!QH || !WH) return EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), this;
        const MH = LH || this;
        let xH;
        if (!YH.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const HH = MH._getWorldMatrixDeterminant();
          xH = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), HH < 0 && (xH = xH === KH.c.ClockWiseSideOrientation ? KH.c.CounterClockWiseSideOrientation : KH.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = xH
        }
        const vH = this._internalMeshDataInfo._effectiveMaterial._preBind(QH, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && rH.setDepthWrite(!0);
        const PH = this._internalMeshDataInfo._effectiveMaterial,
          TH = PH.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), GH || this._bind(HH, WH, TH, !1);
        const UH = MH.getWorldMatrix();
        PH._storeEffectOnSubMeshes ? PH.bindForSubMesh(UH, this, HH) : PH.bind(UH, this);
        try {
          cH.e._BindAttachmentsForEffect(rH, WH) && (!PH.backFaceCulling && PH.separateCullingPass && (rH.setState(!0, PH.zOffset, !1, !vH, PH.cullBackFaces, PH.stencil, PH.zOffsetUnits), this._processRendering(this, HH, WH, TH, zH, GH, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), rH.setState(!0, PH.zOffset, !1, vH, PH.cullBackFaces, PH.stencil, PH.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(HH)), this._processRendering(this, HH, WH, TH, zH, GH, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          cH.e._RestoreAttachments(rH)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let VH = 0, OH = AH._afterRenderingMeshStage; VH < OH.length; VH++) {
          OH[VH].action(this, HH, zH, WH)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), EH && (EH.maxZ = CH, AH.updateTransformMatrix(!0)), 2 !== AH.performancePriority || YH.isFrozen || this._freeze(), this
      }
      _renderRunFollower(HH, BH) {
        const LH = this._scene,
          AH = LH._engine;
        if (AH.isWebGPU || HH._mesh !== this || 0 !== this.instances.length || this.render !== iH.prototype.render) return !1;
        const rH = HH.eu();
        if (!rH || rH !== LH._cachedMaterial || void 0 === rH._canBindRunFollower) return !1;
        const SH = HH._drawWrapper,
          hH = SH?.effect;
        if (!hH || hH !== LH._cachedEffect || this.visibility !== LH._cachedVisibility || SH._forceRebindOnNextCall) return !1;
        const tH = this.hasThinInstances;
        if (!tH && this._userInstancedBuffersStorage) return !1;
        if (!SH._wasPreviouslyReady || SH._wasPreviouslyUsingInstances !== tH) return !1;
        const zH = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || LH._isInIntermediateRendering() || 0 !== LH._beforeRenderingMeshStage.length || 0 !== LH._afterRenderingMeshStage.length || zH._onBeforeRenderObservable?.hasObservers() || zH._onBeforeBindObservable?.hasObservers() || zH._onAfterRenderObservable?.hasObservers()) return !1;
        const CH = this.occlusionType;
        if (void 0 !== CH && CH !== fH.c.OCCLUSION_TYPE_NONE || !rH._canBindRunFollower(LH, AH, this, HH, hH)) return !1;
        const EH = this._internalAbstractMeshDataInfo,
          XH = EH._isActiveIntermediate;
        XH ? EH._isActiveIntermediate = !1 : EH._isActive = !1;
        const GH = LH.activeCameras?.length ?? 0;
        (GH > 1 && LH.activeCamera === LH.activeCameras[0] || GH <= 1) && this._checkOcclusionQuery(!1);
        const YH = this._getInstancesRenderList(HH._id);
        if (YH.mustReturn) return !0;
        if (!tH && !YH.renderSelf[HH._id]) return XH ? EH._isActiveIntermediate = !0 : EH._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (zH._effectiveMaterial = rH, BH)
          if (1 === rH.alphaModes.length) AH.setAlphaMode(rH.alphaMode);
          else
            for (let QH = 0; QH < rH.alphaModes.length; QH++) {
              const HH = rH.alphaModes[QH];
              AH.setAlphaMode(void 0 !== HH ? HH : 2, !1, QH)
            }
        if (rH.backFaceCulling || null !== rH.sideOrientation || rH._twoSidedLighting) {
          const HH = this._getWorldMatrixDeterminant();
          let BH = rH._getEffectiveOrientation(this);
          HH < 0 && (BH = BH === KH.c.ClockWiseSideOrientation ? KH.c.CounterClockWiseSideOrientation : KH.c.ClockWiseSideOrientation), zH._effectiveSideOrientation = BH
        }
        rH._preBind(SH, zH._effectiveSideOrientation), rH.forceDepthWrite && AH.setDepthWrite(!0);
        const uH = rH.fillMode;
        return tH || this._bind(HH, hH, uH, !1), rH._bindRunFollower(this.getWorldMatrix(), this, HH, hH), this._processRendering(this, HH, hH, uH, YH, tH, this._onBeforeDraw, rH), rH.unbind(), 2 === LH.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(mH.i.MatricesWeightsKind) && (this.isVerticesDataPresent(mH.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const HH = this.getVerticesData(mH.i.MatricesWeightsKind),
          BH = HH.length;
        for (let LH = 0; LH < BH; LH += 4) {
          const BH = HH[LH] + HH[LH + 1] + HH[LH + 2] + HH[LH + 3];
          if (0 === BH) HH[LH] = 1;
          else {
            const AH = 1 / BH;
            HH[LH] *= AH, HH[LH + 1] *= AH, HH[LH + 2] *= AH, HH[LH + 3] *= AH
          }
        }
        this.setVerticesData(mH.i.MatricesWeightsKind, HH)
      }
      _normalizeSkinWeightsAndExtra() {
        const HH = this.getVerticesData(mH.i.MatricesWeightsExtraKind),
          BH = this.getVerticesData(mH.i.MatricesWeightsKind),
          LH = BH.length;
        for (let AH = 0; AH < LH; AH += 4) {
          let LH = BH[AH] + BH[AH + 1] + BH[AH + 2] + BH[AH + 3];
          if (LH += HH[AH] + HH[AH + 1] + HH[AH + 2] + HH[AH + 3], 0 === LH) BH[AH] = 1;
          else {
            const rH = 1 / LH;
            BH[AH] *= rH, BH[AH + 1] *= rH, BH[AH + 2] *= rH, BH[AH + 3] *= rH, HH[AH] *= rH, HH[AH + 1] *= rH, HH[AH + 2] *= rH, HH[AH + 3] *= rH
          }
        }
        this.setVerticesData(mH.i.MatricesWeightsKind, BH), this.setVerticesData(mH.i.MatricesWeightsKind, HH)
      }
      validateSkinning() {
        const HH = this.getVerticesData(mH.i.MatricesWeightsExtraKind),
          BH = this.getVerticesData(mH.i.MatricesWeightsKind);
        if (null === BH || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          XX: "not skinned"
        };
        const LH = BH.length;
        let AH = 0,
          rH = 0,
          SH = 0,
          hH = 0;
        const tH = null === HH ? 4 : 8,
          zH = [];
        for (let YH = 0; YH <= tH; YH++) zH[YH] = 0;
        for (let YH = 0; YH < LH; YH += 4) {
          let LH = BH[YH],
            CH = LH,
            EH = 0 === CH ? 0 : 1;
          for (let rH = 1; rH < tH; rH++) {
            const SH = rH < 4 ? BH[YH + rH] : HH[YH + rH - 4];
            SH > LH && AH++, 0 !== SH && EH++, CH += SH, LH = SH
          }
          if (zH[EH]++, EH > SH && (SH = EH), 0 === CH) rH++;
          else {
            const LH = 1 / CH;
            let AH = 0;
            for (let rH = 0; rH < tH; rH++) AH += rH < 4 ? Math.abs(BH[YH + rH] - BH[YH + rH] * LH) : Math.abs(HH[YH + rH - 4] - HH[YH + rH - 4] * LH);
            AH > .001 && hH++
          }
        }
        const CH = this.skeleton.bones.length,
          EH = this.getVerticesData(mH.i.MatricesIndicesKind),
          XH = this.getVerticesData(mH.i.MatricesIndicesExtraKind);
        let GH = 0;
        for (let YH = 0; YH < LH; YH += 4)
          for (let HH = 0; HH < tH; HH++) {
            const BH = HH < 4 ? EH[YH + HH] : XH[YH + HH - 4];
            (BH >= CH || BH < 0) && GH++
          }
        return {
          skinned: !0,
          valid: 0 === rH && 0 === hH && 0 === GH,
          XX: "Number of Weights = " + LH / 4 + "\nMaximum influences = " + SH + "\nMissing Weights = " + rH + "\nNot Sorted = " + AH + "\nNot Normalized = " + hH + "\nWeightCounts = [" + zH + "]\nNumber of bones = " + CH + "\nBad Bone Indices = " + GH
        }
      }
      _checkDelayState() {
        const HH = this.yN();
        return this._geometry ? this._geometry.load(HH) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(HH)), this
      }
      _queueLoad(HH) {
        HH.addPendingData(this);
        const BH = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const LH = await HH._loadDelayedFileAsync(this.delayLoadingFile, BH, !0);
            LH instanceof ArrayBuffer ? this._delayLoadingFunction(LH, this) : this._delayLoadingFunction(JSON.parse(LH), this);
            for (const HH of this.instances) HH.refreshBoundingInfo(), HH._syncSubMeshes();
            this.delayLoadState = 1, HH.removePendingData(this)
          } catch (LH) {
            HH.removePendingData(this), HH.mV || NH.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${LH}`)
          }
        })(), this
      }
      isInFrustum(HH) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(HH) && (this._checkDelayState(), !0))
      }
      setMaterialById(HH) {
        const BH = this.yN().materials;
        let LH;
        for (LH = BH.length - 1; LH > -1; LH--)
          if (BH[LH].id === HH) return this.material = BH[LH], this;
        const AH = this.yN().multiMaterials;
        for (LH = AH.length - 1; LH > -1; LH--)
          if (AH[LH].id === HH) return this.material = AH[LH], this;
        return this
      }
      getAnimatables() {
        const HH = [];
        return this.material && HH.push(this.material), this.skeleton && HH.push(this.skeleton), HH
      }
      bakeTransformIntoVertices(HH) {
        if (!this.isVerticesDataPresent(mH.i.PositionKind)) return this;
        const BH = this.jU.splice(0);
        this._resetPointsArrayCache();
        let LH = this.getVerticesData(mH.i.PositionKind);
        const AH = OH.o.Zero();
        let rH;
        for (rH = 0; rH < LH.length; rH += 3) OH.o.TransformCoordinatesFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).toArray(LH, rH);
        if (this.setVerticesData(mH.i.PositionKind, LH, this.getVertexBuffer(mH.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(mH.i.NormalKind)) {
          for (LH = this.getVerticesData(mH.i.NormalKind), rH = 0; rH < LH.length; rH += 3) OH.o.TransformNormalFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).normalize().toArray(LH, rH);
          this.setVerticesData(mH.i.NormalKind, LH, this.getVertexBuffer(mH.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(mH.i.TangentKind)) {
          for (LH = this.getVerticesData(mH.i.TangentKind), rH = 0; rH < LH.length; rH += 4) OH.o.TransformNormalFromFloatsToRef(LH[rH], LH[rH + 1], LH[rH + 2], HH, AH).normalize().toArray(LH, rH);
          this.setVerticesData(mH.i.TangentKind, LH, this.getVertexBuffer(mH.i.TangentKind).isUpdatable())
        }
        return HH.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jU = BH, this
      }
      bakeCurrentTransformIntoVertices() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(HH), this
      }
      get _positions() {
        return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
      }
      _resetPointsArrayCache() {
        return this._geometry && this._geometry._resetPointsArrayCache(), this
      }
      _generatePointsArray() {
        return !!this._geometry && this._geometry._generatePointsArray()
      }
      clone() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (BH && void 0 === BH._addToSceneRootNodes) {
          const LH = BH;
          return JH.source = this, JH.doNotCloneChildren = LH.doNotCloneChildren, JH.clonePhysicsImpostor = LH.clonePhysicsImpostor, JH.cloneThinInstances = LH.cloneThinInstances, new iH(HH, this.yN(), JH)
        }
        return new iH(HH, this.yN(), BH, this, LH, AH)
      }
      dispose(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const LH = this._internalMeshDataInfo;
        if (LH._onBeforeDrawObservable && LH._onBeforeDrawObservable.clear(), LH._onBeforeBindObservable && LH._onBeforeBindObservable.clear(), LH._onBeforeRenderObservable && LH._onBeforeRenderObservable.clear(), LH._onAfterRenderObservable && LH._onAfterRenderObservable.clear(), LH._onBetweenPassObservable && LH._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (LH.meshMap)
            for (const HH in LH.meshMap) {
              const BH = LH.meshMap[HH];
              BH && (BH._internalMeshDataInfo._source = null, LH.meshMap[HH] = void 0)
            }
          LH._source && LH._source._internalMeshDataInfo.meshMap && (LH._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const HH = this.yN().meshes;
          for (const BH of HH) {
            const HH = BH;
            HH._internalMeshDataInfo && HH._internalMeshDataInfo._source && HH._internalMeshDataInfo._source === this && (HH._internalMeshDataInfo._source = null)
          }
        }
        LH._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(HH, BH)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(HH, BH, LH, AH, rH, SH) {
        let hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          tH = arguments.length > 7 ? arguments[7] : void 0;
        const zH = this.yN();
        return (0, vH.m)(HH, (HH => {
          const tH = HH.width,
            zH = HH.height,
            CH = this.Iu().createCanvas(tH, zH).getContext("2d");
          CH.drawImage(HH, 0, 0);
          const EH = CH.getImageData(0, 0, tH, zH).data;
          this.applyDisplacementMapFromBuffer(EH, tH, zH, BH, LH, rH, SH, hH), AH && AH(this)
        }), tH || (() => {}), zH.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(HH, BH, LH, AH, rH, SH, hH) {
        let tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(mH.i.PositionKind) || !this.isVerticesDataPresent(mH.i.NormalKind) || !this.isVerticesDataPresent(mH.i.UVKind)) return NH.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const zH = this.getVerticesData(mH.i.PositionKind, !0, !0),
          CH = this.getVerticesData(mH.i.NormalKind),
          EH = this.getVerticesData(mH.i.UVKind);
        let XH = OH.o.Zero();
        const GH = OH.o.Zero(),
          YH = OH.n.Zero();
        SH = SH || OH.n.Zero(), hH = hH || new OH.n(1, 1);
        for (let uH = 0; uH < zH.length; uH += 3) {
          OH.o.FromArrayToRef(zH, uH, XH), OH.o.FromArrayToRef(CH, uH, GH), OH.n.FromArrayToRef(EH, uH / 3 * 2, YH);
          const tH = 4 * ((Math.abs(YH.x * hH.x + SH.x % 1) * (BH - 1) % BH | 0) + (Math.abs(YH.y * hH.y + SH.y % 1) * (LH - 1) % LH | 0) * BH),
            QH = .3 * (HH[tH] / 255) + .59 * (HH[tH + 1] / 255) + .11 * (HH[tH + 2] / 255);
          GH.normalize(), GH.scaleInPlace(AH + (rH - AH) * QH), XH = XH.add(GH), XH.toArray(zH, uH)
        }
        return oH.b.ComputeNormals(zH, this.vrH(), CH), tH ? (this.setVerticesData(mH.i.PositionKind, zH), this.setVerticesData(mH.i.NormalKind, CH), this.setVerticesData(mH.i.UVKind, EH)) : (this.updateVerticesData(mH.i.PositionKind, zH), this.updateVerticesData(mH.i.NormalKind, CH)), this
      }
      _getFlattenedNormals(HH, BH) {
        const LH = new Float32Array(3 * HH.length);
        let AH = 0;
        const rH = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let SH = 0; SH < HH.length; SH += 3) {
          const hH = OH.o.FromArray(BH, 3 * HH[SH]),
            tH = OH.o.FromArray(BH, 3 * HH[SH + 1]),
            zH = OH.o.FromArray(BH, 3 * HH[SH + 2]),
            CH = hH.subtract(tH),
            EH = zH.subtract(tH),
            XH = OH.o.Normalize(OH.o.Cross(CH, EH));
          rH && XH.scaleInPlace(-1);
          for (let HH = 0; HH < 3; HH++) LH[AH++] = XH.x, LH[AH++] = XH.y, LH[AH++] = XH.z
        }
        return LH
      }
      _convertToUnIndexedMesh() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = this.getVerticesDataKinds().filter((HH => !this.getVertexBuffer(HH)?.getIsInstanced())),
          LH = this.vrH(!1, !0),
          AH = {},
          rH = (HH, BH) => {
            const AH = new Float32Array(LH.length * BH);
            let rH = 0;
            for (let SH = 0; SH < LH.length; SH++)
              for (let hH = 0; hH < BH; hH++) AH[rH++] = HH[LH[SH] * BH + hH];
            return AH
          },
          SH = this.jF(),
          hH = this.geometry ? this.jU.slice(0) : [];
        for (const tH of BH) AH[tH] = this.getVerticesData(tH);
        for (const tH of BH) {
          const BH = this.getVertexBuffer(tH),
            SH = BH.getSize();
          if (HH && tH === mH.i.NormalKind) {
            const HH = this._getFlattenedNormals(LH, AH[mH.i.PositionKind]);
            this.setVerticesData(mH.i.NormalKind, HH, BH.isUpdatable(), SH)
          } else this.setVerticesData(tH, rH(AH[tH], SH), BH.isUpdatable(), SH)
        }
        if (this.morphTargetManager) {
          for (let BH = 0; BH < this.morphTargetManager.numTargets; BH++) {
            const AH = this.morphTargetManager.getTarget(BH),
              SH = AH.getPositions();
            AH.ZtH(rH(SH, 3));
            const hH = AH.getNormals();
            hH && AH.setNormals(HH ? this._getFlattenedNormals(LH, SH) : rH(hH, 3));
            const tH = AH.getTangents();
            tH && AH.setTangents(rH(tH, 3));
            const zH = AH.getUVs();
            zH && AH.setUVs(rH(zH, 2));
            const CH = AH.getColors();
            CH && AH.setColors(rH(CH, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let tH = 0; tH < LH.length; tH++) LH[tH] = tH;
        this.setIndices(LH), this._unIndexed = !0, this.releaseSubMeshes();
        for (const tH of hH) {
          const HH = tH.jF();
          lH.d.AddToMesh(tH.materialIndex, tH.indexStart, tH.indexCount, tH.indexStart, tH.indexCount, this).setBoundingInfo(HH)
        }
        return this.setBoundingInfo(SH), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = oH.b.ExtractFromMesh(this);
        let LH;
        if (HH && this.isVerticesDataPresent(mH.i.NormalKind) && BH.normals) {
          for (LH = 0; LH < BH.normals.length; LH++) BH.normals[LH] *= -1;
          this.setVerticesData(mH.i.NormalKind, BH.normals, this.isVertexBufferUpdatable(mH.i.NormalKind))
        }
        if (BH.indices) {
          let HH;
          for (LH = 0; LH < BH.indices.length; LH += 3) HH = BH.indices[LH + 1], BH.indices[LH + 1] = BH.indices[LH + 2], BH.indices[LH + 2] = HH;
          this.setIndices(BH.indices, null, this.isVertexBufferUpdatable(mH.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const BH = oH.b.ExtractFromMesh(this),
          LH = BH.indices && !Array.isArray(BH.indices) && Array.from ? Array.from(BH.indices) : BH.indices,
          AH = BH.positions && !Array.isArray(BH.positions) && Array.from ? Array.from(BH.positions) : BH.positions,
          rH = BH.uvs && !Array.isArray(BH.uvs) && Array.from ? Array.from(BH.uvs) : BH.uvs,
          SH = BH.normals && !Array.isArray(BH.normals) && Array.from ? Array.from(BH.normals) : BH.normals;
        if (LH && AH) {
          BH.indices = LH, BH.positions = AH, rH && (BH.uvs = rH), SH && (BH.normals = SH);
          const hH = HH + 1,
            tH = [];
          for (let HH = 0; HH < hH + 1; HH++) tH[HH] = [];
          let zH, CH;
          const EH = new OH.o(0, 0, 0),
            XH = new OH.o(0, 0, 0),
            GH = new OH.n(0, 0),
            YH = [],
            uH = [],
            QH = [];
          let WH, MH, xH, vH = AH.length;
          rH && (MH = rH.length), SH && (xH = SH.length);
          for (let HH = 0; HH < LH.length; HH += 3) {
            uH[0] = LH[HH], uH[1] = LH[HH + 1], uH[2] = LH[HH + 2];
            for (let HH = 0; HH < 3; HH++)
              if (zH = uH[HH], CH = uH[(HH + 1) % 3], void 0 === QH[zH] && void 0 === QH[CH] ? (QH[zH] = [], QH[CH] = []) : (void 0 === QH[zH] && (QH[zH] = []), void 0 === QH[CH] && (QH[CH] = [])), void 0 === QH[zH][CH] && void 0 === QH[CH][zH]) {
                QH[zH][CH] = [], EH.x = (AH[3 * CH] - AH[3 * zH]) / hH, EH.y = (AH[3 * CH + 1] - AH[3 * zH + 1]) / hH, EH.z = (AH[3 * CH + 2] - AH[3 * zH + 2]) / hH, SH && (XH.x = (SH[3 * CH] - SH[3 * zH]) / hH, XH.y = (SH[3 * CH + 1] - SH[3 * zH + 1]) / hH, XH.z = (SH[3 * CH + 2] - SH[3 * zH + 2]) / hH), rH && (GH.x = (rH[2 * CH] - rH[2 * zH]) / hH, GH.y = (rH[2 * CH + 1] - rH[2 * zH + 1]) / hH), QH[zH][CH].push(zH);
                for (let HH = 1; HH < hH; HH++) QH[zH][CH].push(AH.length / 3), AH[vH++] = AH[3 * zH] + HH * EH.x, AH[vH++] = AH[3 * zH + 1] + HH * EH.y, AH[vH++] = AH[3 * zH + 2] + HH * EH.z, SH && (SH[xH++] = SH[3 * zH] + HH * XH.x, SH[xH++] = SH[3 * zH + 1] + HH * XH.y, SH[xH++] = SH[3 * zH + 2] + HH * XH.z), rH && (rH[MH++] = rH[2 * zH] + HH * GH.x, rH[MH++] = rH[2 * zH + 1] + HH * GH.y);
                QH[zH][CH].push(CH), QH[CH][zH] = [], WH = QH[zH][CH].length;
                for (let HH = 0; HH < WH; HH++) QH[CH][zH][HH] = QH[zH][CH][WH - 1 - HH]
              } tH[0][0] = LH[HH], tH[1][0] = QH[LH[HH]][LH[HH + 1]][1], tH[1][1] = QH[LH[HH]][LH[HH + 2]][1];
            for (let BH = 2; BH < hH; BH++) {
              tH[BH][0] = QH[LH[HH]][LH[HH + 1]][BH], tH[BH][BH] = QH[LH[HH]][LH[HH + 2]][BH], EH.x = (AH[3 * tH[BH][BH]] - AH[3 * tH[BH][0]]) / BH, EH.y = (AH[3 * tH[BH][BH] + 1] - AH[3 * tH[BH][0] + 1]) / BH, EH.z = (AH[3 * tH[BH][BH] + 2] - AH[3 * tH[BH][0] + 2]) / BH, SH && (XH.x = (SH[3 * tH[BH][BH]] - SH[3 * tH[BH][0]]) / BH, XH.y = (SH[3 * tH[BH][BH] + 1] - SH[3 * tH[BH][0] + 1]) / BH, XH.z = (SH[3 * tH[BH][BH] + 2] - SH[3 * tH[BH][0] + 2]) / BH), rH && (GH.x = (rH[2 * tH[BH][BH]] - rH[2 * tH[BH][0]]) / BH, GH.y = (rH[2 * tH[BH][BH] + 1] - rH[2 * tH[BH][0] + 1]) / BH);
              for (let HH = 1; HH < BH; HH++) tH[BH][HH] = AH.length / 3, AH[vH++] = AH[3 * tH[BH][0]] + HH * EH.x, AH[vH++] = AH[3 * tH[BH][0] + 1] + HH * EH.y, AH[vH++] = AH[3 * tH[BH][0] + 2] + HH * EH.z, SH && (SH[xH++] = SH[3 * tH[BH][0]] + HH * XH.x, SH[xH++] = SH[3 * tH[BH][0] + 1] + HH * XH.y, SH[xH++] = SH[3 * tH[BH][0] + 2] + HH * XH.z), rH && (rH[MH++] = rH[2 * tH[BH][0]] + HH * GH.x, rH[MH++] = rH[2 * tH[BH][0] + 1] + HH * GH.y)
            }
            tH[hH] = QH[LH[HH + 1]][LH[HH + 2]], YH.push(tH[0][0], tH[1][0], tH[1][1]);
            for (let HH = 1; HH < hH; HH++) {
              let BH;
              for (BH = 0; BH < HH; BH++) YH.push(tH[HH][BH], tH[HH + 1][BH], tH[HH + 1][BH + 1]), YH.push(tH[HH][BH], tH[HH + 1][BH + 1], tH[HH][BH + 1]);
              YH.push(tH[HH][BH], tH[HH + 1][BH], tH[HH + 1][BH + 1])
            }
          }
          BH.indices = YH, BH.applyToMesh(this, this.isVertexBufferUpdatable(mH.i.PositionKind))
        } else NH.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const HH = oH.b.ExtractFromMesh(this),
          BH = HH.uvs,
          LH = HH.indices,
          AH = HH.positions,
          rH = HH.colors,
          SH = HH.matricesIndices,
          hH = HH.matricesWeights,
          tH = HH.matricesIndicesExtra,
          zH = HH.matricesWeightsExtra;
        if (void 0 === LH || void 0 === AH || null === LH || null === AH) NH.e.Warn("VertexData contains empty entries");
        else {
          const CH = [],
            EH = [],
            XH = [],
            GH = [],
            YH = [],
            uH = [],
            QH = [],
            WH = [];
          let MH, xH = 0;
          const vH = {};
          let PH, TH;
          for (let HH = 0; HH < LH.length; HH += 3) {
            TH = [LH[HH], LH[HH + 1], LH[HH + 2]], MH = [];
            for (let HH = 0; HH < 3; HH++) {
              MH[HH] = "";
              for (let BH = 0; BH < 3; BH++) Math.abs(AH[3 * TH[HH] + BH]) < 1e-8 && (AH[3 * TH[HH] + BH] = 0), MH[HH] += AH[3 * TH[HH] + BH] + "|"
            }
            if (MH[0] != MH[1] && MH[0] != MH[2] && MH[1] != MH[2])
              for (let HH = 0; HH < 3; HH++) {
                if (PH = vH[MH[HH]], void 0 === PH) {
                  vH[MH[HH]] = xH, PH = xH++;
                  for (let BH = 0; BH < 3; BH++) CH.push(AH[3 * TH[HH] + BH]);
                  if (null !== rH && void 0 !== rH)
                    for (let BH = 0; BH < 4; BH++) GH.push(rH[4 * TH[HH] + BH]);
                  if (null !== BH && void 0 !== BH)
                    for (let LH = 0; LH < 2; LH++) XH.push(BH[2 * TH[HH] + LH]);
                  if (null !== SH && void 0 !== SH)
                    for (let BH = 0; BH < 4; BH++) YH.push(SH[4 * TH[HH] + BH]);
                  if (null !== hH && void 0 !== hH)
                    for (let BH = 0; BH < 4; BH++) uH.push(hH[4 * TH[HH] + BH]);
                  if (null !== tH && void 0 !== tH)
                    for (let BH = 0; BH < 4; BH++) QH.push(tH[4 * TH[HH] + BH]);
                  if (null !== zH && void 0 !== zH)
                    for (let BH = 0; BH < 4; BH++) WH.push(zH[4 * TH[HH] + BH])
                }
                EH.push(PH)
              }
          }
          const UH = [];
          oH.b.ComputeNormals(CH, EH, UH), HH.positions = CH, HH.indices = EH, HH.normals = UH, null !== BH && void 0 !== BH && (HH.uvs = XH), null !== rH && void 0 !== rH && (HH.colors = GH), null !== SH && void 0 !== SH && (HH.matricesIndices = YH), null !== hH && void 0 !== hH && (HH.matricesWeights = uH), null !== tH && void 0 !== tH && (HH.matricesIndicesExtra = QH), null !== hH && void 0 !== hH && (HH.matricesWeightsExtra = WH), HH.applyToMesh(this, this.isVertexBufferUpdatable(mH.i.PositionKind))
        }
      }
      static _instancedMeshFactory(HH, BH) {
        throw (0, jH.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(HH, BH, LH) {
        throw (0, jH.i)("PhysicsImpostor")
      }
      createInstance(HH) {
        const BH = iH._instancedMeshFactory(HH, this);
        return BH.parent = this.parent, BH
      }
      synchronizeInstances() {
        for (let HH = 0; HH < this.instances.length; HH++) {
          this.instances[HH]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(HH) {
        const BH = this.vrH(),
          LH = this.getVerticesData(mH.i.PositionKind);
        if (!LH || !BH) return this;
        const AH = [];
        for (let SH = 0; SH < LH.length; SH += 3) AH.push(OH.o.FromArray(LH, SH));
        const rH = [];
        return xH.e.SyncAsyncForLoop(AH.length, 40, (HH => {
          const BH = AH.length - 1 - HH,
            LH = AH[BH];
          for (let SH = 0; SH < BH; ++SH) {
            const HH = AH[SH];
            if (LH.equals(HH)) {
              rH[BH] = SH;
              break
            }
          }
        }), (() => {
          for (let HH = 0; HH < BH.length; ++HH) BH[HH] = rH[BH[HH]] || BH[HH];
          const LH = this.jU.slice(0);
          this.setIndices(BH), this.jU = LH, HH && HH(this)
        })), this
      }
      serialize() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, HH.type = this.getClassName(), TH.b && TH.b.HasTags(this) && (HH.tags = TH.b.GetTags(this)), HH.position = this.position.xrH(), this.rotationQuaternion ? HH.rotationQuaternion = this.rotationQuaternion.xrH() : this.rotation && (HH.rotation = this.rotation.xrH()), HH.bX = this.bX.xrH(), this._postMultiplyPivotMatrix ? HH.pivotMatrix = this.getPivotMatrix().xrH() : HH.localMatrix = this.getPivotMatrix().xrH(), HH.isEnabled = this.isEnabled(!1), HH.isVisible = this.isVisible, HH.infiniteDistance = this.infiniteDistance, HH.pickable = this.jQ, HH.receiveShadows = this.receiveShadows, HH.billboardMode = this.billboardMode, HH.visibility = this.visibility, HH.fu = this.fu, HH.checkCollisions = this.checkCollisions, HH.ellipsoid = this.ellipsoid.xrH(), HH.ellipsoidOffset = this.ellipsoidOffset.xrH(), HH.cu = this.cu, HH.isBlocker = this.isBlocker, HH.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (HH.oR = !0), this.parent && this.parent._serializeAsParent(HH), HH.isUnIndexed = this.isUnIndexed;
        const BH = this._geometry;
        if (BH && this.jU) {
          HH.geometryUniqueId = BH.uniqueId, HH.geometryId = BH.id, HH.jU = [];
          for (let BH = 0; BH < this.jU.length; BH++) {
            const LH = this.jU[BH];
            HH.jU.push({
              materialIndex: LH.materialIndex,
              verticesStart: LH.verticesStart,
              verticesCount: LH.verticesCount,
              indexStart: LH.indexStart,
              indexCount: LH.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (HH.materialUniqueId = this.material.uniqueId, HH.materialId = this.material.id) : (this.material = null, HH.materialUniqueId = this._scene.defaultMaterial.uniqueId, HH.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (HH.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (HH.skeletonId = this.skeleton.id, HH.skeletonUniqueId = this.skeleton.uniqueId, HH.numBoneInfluencers = this.numBoneInfluencers), this.yN()._getComponent(nH.b.NAME_PHYSICSENGINE)) {
          const BH = this.getPhysicsImpostor?.();
          BH && (HH.physicsMass = BH.getParam("rE"), HH.physicsFriction = BH.getParam("friction"), HH.physicsRestitution = BH.getParam("rE"), HH.physicsImpostor = BH.type)
        }
        this.metadata && (HH.metadata = this.metadata), 0 !== this.meshBlendingTag && (HH.meshBlendingTag = this.meshBlendingTag), HH.instances = [];
        for (let LH = 0; LH < this.instances.length; LH++) {
          const BH = this.instances[LH];
          if (BH.doNotSerialize) continue;
          const AH = {
            name: BH.name,
            id: BH.id,
            isEnabled: BH.isEnabled(!1),
            isVisible: BH.isVisible,
            jQ: BH.jQ,
            checkCollisions: BH.checkCollisions,
            position: BH.position.xrH(),
            bX: BH.bX.xrH()
          };
          if (BH.parent && BH.parent._serializeAsParent(AH), BH.rotationQuaternion ? AH.rotationQuaternion = BH.rotationQuaternion.xrH() : BH.rotation && (AH.rotation = BH.rotation.xrH()), this.yN()._getComponent(nH.b.NAME_PHYSICSENGINE)) {
            const HH = BH.getPhysicsImpostor?.();
            HH && (AH.physicsMass = HH.getParam("rE"), AH.physicsFriction = HH.getParam("friction"), AH.physicsRestitution = HH.getParam("rE"), AH.physicsImpostor = HH.type)
          }
          BH.metadata && (AH.metadata = BH.metadata), BH.actionManager && (AH.actions = BH.actionManager.serialize(BH.name)), HH.instances.push(AH), gH.c.AppendSerializedAnimations(BH, AH), AH.rW = BH.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (HH.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.gLH
          }, this._userThinInstanceBuffersStorage)) {
          const BH = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const HH in this._userThinInstanceBuffersStorage.data) BH.data[HH] = Array.from(this._userThinInstanceBuffersStorage.data[HH]), BH.sizes[HH] = this._userThinInstanceBuffersStorage.sizes[HH], BH.strides[HH] = this._userThinInstanceBuffersStorage.strides[HH];
          HH.thinInstances.userThinInstance = BH
        }
        return gH.c.AppendSerializedAnimations(this, HH), HH.rW = this.serializeAnimationRanges(), HH.layerMask = this.layerMask, HH.alphaIndex = this.alphaIndex, HH.hasVertexAlpha = this.hasVertexAlpha, HH.overlayAlpha = this.overlayAlpha, HH.overlayColor = this.overlayColor.xrH(), HH.renderOverlay = this.renderOverlay, HH.applyFog = this.applyFog, this.actionManager && (HH.actions = this.actionManager.serialize(this.name)), HH
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const HH = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (HH && HH.vertexCount) {
          if (HH.vertexCount !== this.getTotalVertices()) return NH.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (HH.isUsingTextureForTargets) return;
          for (let BH = 0; BH < HH.numInfluencers; BH++) {
            const LH = HH.getActiveTarget(BH),
              AH = LH.getPositions();
            if (!AH) return void NH.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(mH.i.PositionKind + BH, AH, !1, 3);
            const rH = LH.getNormals();
            rH && this.geometry.setVerticesData(mH.i.NormalKind + BH, rH, !1, 3);
            const SH = LH.getTangents();
            SH && this.geometry.setVerticesData(mH.i.TangentKind + BH, SH, !1, 3);
            const hH = LH.getUVs();
            hH && this.geometry.setVerticesData(mH.i.UVKind + "_" + BH, hH, !1, 2);
            const tH = LH.getUV2s();
            tH && this.geometry.setVerticesData(mH.i.UV2Kind + "_" + BH, tH, !1, 2);
            const zH = LH.getColors();
            zH && this.geometry.setVerticesData(mH.i.ColorKind + BH, zH, !1, 4)
          }
        } else {
          let HH = 0;
          for (; this.geometry.isVerticesDataPresent(mH.i.PositionKind + HH);) this.geometry.removeVerticesData(mH.i.PositionKind + HH), this.geometry.isVerticesDataPresent(mH.i.NormalKind + HH) && this.geometry.removeVerticesData(mH.i.NormalKind + HH), this.geometry.isVerticesDataPresent(mH.i.TangentKind + HH) && this.geometry.removeVerticesData(mH.i.TangentKind + HH), this.geometry.isVerticesDataPresent(mH.i.UVKind + "_" + HH) && this.geometry.removeVerticesData(mH.i.UVKind + "_" + HH), this.geometry.isVerticesDataPresent(mH.i.UV2Kind + "_" + HH) && this.geometry.removeVerticesData(mH.i.UV2Kind + "_" + HH), this.geometry.isVerticesDataPresent(mH.i.ColorKind + HH) && this.geometry.removeVerticesData(mH.i.ColorKind + HH), HH++
        }
      }
      static Parse(HH, BH, LH) {
        let AH, rH = !1;
        if (HH.type && "LinesMesh" === HH.type ? AH = iH._LinesMeshParser(HH, BH) : HH.type && "GroundMesh" === HH.type ? AH = iH._GroundMeshParser(HH, BH) : HH.type && "GoldbergMesh" === HH.type ? AH = iH._GoldbergMeshParser(HH, BH) : HH.type && "GreasedLineMesh" === HH.type ? AH = iH._GreasedLineMeshParser(HH, BH) : HH.type && "TrailMesh" === HH.type ? AH = iH._TrailMeshParser(HH, BH) : HH.type && "GaussianSplattingMesh" === HH.type ? (AH = HH._isCompound ? iH._GaussianSplattingCompoundMeshParser(HH, BH) : iH._GaussianSplattingMeshParser(HH, BH), rH = !0) : HH.type && "GaussianSplattingPartProxyMesh" === HH.type ? (AH = iH._GaussianSplattingPartProxyMeshParser(HH, BH), rH = !0) : AH = new iH(HH.name, BH), AH.id = HH.id, AH._waitingParsedUniqueId = HH.uniqueId, TH.b && TH.b.AddTagsTo(AH, HH.tags), AH.position = OH.o.FromArray(HH.position), void 0 !== HH.metadata && (AH.metadata = HH.metadata), void 0 !== HH.meshBlendingTag && (AH.meshBlendingTag = HH.meshBlendingTag), HH.rotationQuaternion ? AH.rotationQuaternion = OH.f.FromArray(HH.rotationQuaternion) : HH.rotation && (AH.rotation = OH.o.FromArray(HH.rotation)), AH.bX = OH.o.FromArray(HH.bX), HH.localMatrix ? AH.setPreTransformMatrix(OH.e.FromArray(HH.localMatrix)) : HH.pivotMatrix && AH.setPivotMatrix(OH.e.FromArray(HH.pivotMatrix)), AH.vI(HH.isEnabled), AH.isVisible = HH.isVisible, AH.infiniteDistance = HH.infiniteDistance, AH.fu = !!HH.fu, AH.showBoundingBox = HH.showBoundingBox, AH.showSubMeshesBoundingBox = HH.showSubMeshesBoundingBox, void 0 !== HH.applyFog && (AH.applyFog = HH.applyFog), void 0 !== HH.pickable && (AH.jQ = HH.pickable), void 0 !== HH.alphaIndex && (AH.alphaIndex = HH.alphaIndex), AH.receiveShadows = HH.receiveShadows, void 0 !== HH.billboardMode && (AH.billboardMode = HH.billboardMode), void 0 !== HH.visibility && (AH.visibility = HH.visibility), AH.checkCollisions = HH.checkCollisions, AH.cu = !!HH.cu, HH.ellipsoid && (AH.ellipsoid = OH.o.FromArray(HH.ellipsoid)), HH.ellipsoidOffset && (AH.ellipsoidOffset = OH.o.FromArray(HH.ellipsoidOffset)), null != HH.overrideMaterialSideOrientation && (AH.sideOrientation = HH.overrideMaterialSideOrientation), void 0 !== HH.sideOrientation && (AH.sideOrientation = HH.sideOrientation), void 0 !== HH.isBlocker && (AH.isBlocker = HH.isBlocker), AH._shouldGenerateFlatShading = HH.useFlatShading, HH.oR && (AH._waitingData.oR = HH.oR), void 0 !== HH.parentId && (AH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (AH._waitingParentInstanceIndex = HH.parentInstanceIndex), void 0 !== HH.actions && (AH._waitingData.actions = HH.actions), void 0 !== HH.overlayAlpha && (AH.overlayAlpha = HH.overlayAlpha), void 0 !== HH.overlayColor && (AH.overlayColor = bH.c.FromArray(HH.overlayColor)), void 0 !== HH.renderOverlay && (AH.renderOverlay = HH.renderOverlay), AH.isUnIndexed = !!HH.isUnIndexed, AH.hasVertexAlpha = HH.hasVertexAlpha, HH.delayLoadingFile ? (AH.delayLoadState = 4, AH.delayLoadingFile = LH + HH.delayLoadingFile, AH.buildBoundingInfo(OH.o.FromArray(HH.boundingBoxMinimum), OH.o.FromArray(HH.boundingBoxMaximum)), HH._binaryInfo && (AH._binaryInfo = HH._binaryInfo), AH._delayInfo = [], HH.hasUVs && AH._delayInfo.push(mH.i.UVKind), HH.hasUVs2 && AH._delayInfo.push(mH.i.UV2Kind), HH.hasUVs3 && AH._delayInfo.push(mH.i.UV3Kind), HH.hasUVs4 && AH._delayInfo.push(mH.i.UV4Kind), HH.hasUVs5 && AH._delayInfo.push(mH.i.UV5Kind), HH.hasUVs6 && AH._delayInfo.push(mH.i.UV6Kind), HH.hasColors && AH._delayInfo.push(mH.i.ColorKind), HH.hasMatricesIndices && AH._delayInfo.push(mH.i.MatricesIndicesKind), HH.hasMatricesWeights && AH._delayInfo.push(mH.i.MatricesWeightsKind), AH._delayLoadingFunction = IH.d._ImportGeometry, qH.d.ForceFullSceneLoadingForIncremental && AH._checkDelayState()) : rH || IH.d._ImportGeometry(HH, AH), HH.materialUniqueId ? AH._waitingMaterialId = HH.materialUniqueId : HH.materialId && (AH._waitingMaterialId = HH.materialId), HH.morphTargetManagerId > -1 && (AH._waitingMorphTargetManagerId = HH.morphTargetManagerId), void 0 !== HH.skeletonId && null !== HH.skeletonId && (AH.skeleton = BH.getLastSkeletonById(HH.skeletonId), AH._waitingSkeletonId = HH.skeletonId, HH.numBoneInfluencers && (AH.numBoneInfluencers = HH.numBoneInfluencers)), void 0 !== HH.skeletonUniqueId && null !== HH.skeletonUniqueId && (AH._waitingSkeletonUniqueId = HH.skeletonUniqueId), HH.animations) {
          for (let BH = 0; BH < HH.animations.length; BH++) {
            const LH = HH.animations[BH],
              rH = (0, RH.b)("BABYLON.Animation");
            rH && AH.animations.push(rH.Parse(LH))
          }
          kH.b.ParseAnimationRanges(AH, HH, BH)
        }
        if (HH.autoAnimate && BH.beginAnimation(AH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), HH.layerMask && !isNaN(HH.layerMask) ? AH.layerMask = Math.abs(parseInt(HH.layerMask)) : AH.layerMask = 268435455, HH.physicsImpostor && (AH.physicsImpostor = iH._PhysicsImpostorParser(BH, AH, HH)), HH.lodMeshIds && (AH._waitingData.lods = {
            ids: HH.lodMeshIds,
            distances: HH.lodDistances ? HH.lodDistances : null,
            coverages: HH.lodCoverages ? HH.lodCoverages : null
          }), HH.instances)
          for (let SH = 0; SH < HH.instances.length; SH++) {
            const LH = HH.instances[SH],
              rH = AH.createInstance(LH.name);
            if (LH.id && (rH.id = LH.id), TH.b && (LH.tags ? TH.b.AddTagsTo(rH, LH.tags) : TH.b.AddTagsTo(rH, HH.tags)), rH.position = OH.o.FromArray(LH.position), void 0 !== LH.metadata && (rH.metadata = LH.metadata), void 0 !== LH.parentId && (rH._waitingParentId = LH.parentId), void 0 !== LH.parentInstanceIndex && (rH._waitingParentInstanceIndex = LH.parentInstanceIndex), void 0 !== LH.isEnabled && null !== LH.isEnabled && rH.vI(LH.isEnabled), void 0 !== LH.isVisible && null !== LH.isVisible && (rH.isVisible = LH.isVisible), void 0 !== LH.jQ && null !== LH.jQ && (rH.jQ = LH.jQ), LH.rotationQuaternion ? rH.rotationQuaternion = OH.f.FromArray(LH.rotationQuaternion) : LH.rotation && (rH.rotation = OH.o.FromArray(LH.rotation)), rH.bX = OH.o.FromArray(LH.bX), void 0 != LH.checkCollisions && null != LH.checkCollisions && (rH.checkCollisions = LH.checkCollisions), void 0 != LH.pickable && null != LH.pickable && (rH.jQ = LH.pickable), void 0 != LH.showBoundingBox && null != LH.showBoundingBox && (rH.showBoundingBox = LH.showBoundingBox), void 0 != LH.showSubMeshesBoundingBox && null != LH.showSubMeshesBoundingBox && (rH.showSubMeshesBoundingBox = LH.showSubMeshesBoundingBox), void 0 != LH.alphaIndex && null != LH.showSubMeshesBoundingBox && (rH.alphaIndex = LH.alphaIndex), LH.physicsImpostor && (rH.physicsImpostor = iH._PhysicsImpostorParser(BH, rH, LH)), void 0 !== LH.actions && (rH._waitingData.actions = LH.actions), LH.animations) {
              for (let HH = 0; HH < LH.animations.length; HH++) {
                const BH = LH.animations[HH],
                  AH = (0, RH.b)("BABYLON.Animation");
                AH && rH.animations.push(AH.Parse(BH))
              }
              kH.b.ParseAnimationRanges(rH, LH, BH), LH.autoAnimate && BH.beginAnimation(rH, LH.autoAnimateFrom, LH.autoAnimateTo, LH.autoAnimateLoop, LH.autoAnimateSpeed || 1)
            }
          }
        if (HH.thinInstances) {
          const BH = HH.thinInstances;
          if (AH.gLH = !!BH.enablePicking, BH.matrixData ? (AH.yHH("matrix", new Float32Array(BH.matrixData), 16, !1), AH._thinInstanceDataStorage.matrixBufferSize = BH.matrixBufferSize, AH._thinInstanceDataStorage.instancesCount = BH.instancesCount) : AH._thinInstanceDataStorage.matrixBufferSize = BH.matrixBufferSize, HH.thinInstances.userThinInstance) {
            const BH = HH.thinInstances.userThinInstance;
            for (const HH in BH.data) AH.yHH(HH, new Float32Array(BH.data[HH]), BH.strides[HH], !1), AH._userThinInstanceBuffersStorage.sizes[HH] = BH.sizes[HH]
          }
        }
        return AH
      }
      setPositionsForCPUSkinning() {
        const HH = this._internalMeshDataInfo;
        if (!HH._sourcePositions) {
          const BH = this.getVerticesData(mH.i.PositionKind);
          if (!BH) return HH._sourcePositions;
          HH._sourcePositions = new Float32Array(BH), this.isVertexBufferUpdatable(mH.i.PositionKind) || this.setVerticesData(mH.i.PositionKind, BH, !0)
        }
        return HH._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const HH = this._internalMeshDataInfo;
        if (!HH._sourceNormals) {
          const BH = this.getVerticesData(mH.i.NormalKind);
          if (!BH) return HH._sourceNormals;
          HH._sourceNormals = new Float32Array(BH), this.isVertexBufferUpdatable(mH.i.NormalKind) || this.setVerticesData(mH.i.NormalKind, BH, !0)
        }
        return HH._sourceNormals
      }
      applySkeleton(HH) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.yN().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.yN().getFrameId(), !this.isVerticesDataPresent(mH.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(mH.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(mH.i.MatricesWeightsKind)) return this;
        const BH = this.isVerticesDataPresent(mH.i.NormalKind),
          LH = this._internalMeshDataInfo;
        if (!LH._sourcePositions) {
          const HH = this.jU.slice();
          this.setPositionsForCPUSkinning(), this.jU = HH
        }
        BH && !LH._sourceNormals && this.setNormalsForCPUSkinning();
        let AH = this.getVerticesData(mH.i.PositionKind);
        if (!AH) return this;
        AH instanceof Float32Array || (AH = new Float32Array(AH));
        let rH = this.getVerticesData(mH.i.NormalKind);
        if (BH) {
          if (!rH) return this;
          rH instanceof Float32Array || (rH = new Float32Array(rH))
        }
        const SH = this.getVerticesData(mH.i.MatricesIndicesKind),
          hH = this.getVerticesData(mH.i.MatricesWeightsKind);
        if (!hH || !SH) return this;
        const tH = this.numBoneInfluencers > 4,
          zH = tH ? this.getVerticesData(mH.i.MatricesIndicesExtraKind) : null,
          CH = tH ? this.getVerticesData(mH.i.MatricesWeightsExtraKind) : null,
          EH = HH.getTransformMatrices(this),
          XH = OH.o.Zero(),
          GH = new OH.e,
          YH = new OH.e;
        let uH, QH = 0;
        for (let WH = 0; WH < AH.length; WH += 3, QH += 4) {
          let HH;
          for (uH = 0; uH < 4; uH++) HH = hH[QH + uH], HH > 0 && (OH.e.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * SH[QH + uH]), HH, YH), GH.addToSelf(YH));
          if (tH)
            for (uH = 0; uH < 4; uH++) HH = CH[QH + uH], HH > 0 && (OH.e.FromFloat32ArrayToRefScaled(EH, Math.floor(16 * zH[QH + uH]), HH, YH), GH.addToSelf(YH));
          OH.o.TransformCoordinatesFromFloatsToRef(LH._sourcePositions[WH], LH._sourcePositions[WH + 1], LH._sourcePositions[WH + 2], GH, XH), XH.toArray(AH, WH), BH && (OH.o.TransformNormalFromFloatsToRef(LH._sourceNormals[WH], LH._sourceNormals[WH + 1], LH._sourceNormals[WH + 2], GH, XH), XH.toArray(rH, WH)), GH.reset()
        }
        return this.updateVerticesData(mH.i.PositionKind, AH), BH && this.updateVerticesData(mH.i.NormalKind, rH), this
      }
      static MinMax(HH) {
        let BH = null,
          LH = null;
        for (const AH of HH) {
          const HH = AH.jF().boundingBox;
          BH && LH ? (BH.minimizeInPlace(HH.minimumWorld), LH.maximizeInPlace(HH.maximumWorld)) : (BH = HH.minimumWorld.clone(), LH = HH.maximumWorld.clone())
        }
        return BH && LH ? {
          min: BH,
          max: LH
        } : {
          min: OH.o.Zero(),
          max: OH.o.Zero()
        }
      }
      static Center(HH) {
        const BH = HH instanceof Array ? iH.MinMax(HH) : HH;
        return OH.o.Center(BH.min, BH.max)
      }
      static MergeMeshes(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        return (0, UH.k)(iH._MergeMeshesCoroutine(HH, BH, LH, AH, rH, SH, !1))
      }
      static async MergeMeshesAsync(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, UH.h)(iH._MergeMeshesCoroutine(HH, BH, LH, AH, rH, SH, !0), (0, UH.c)())
      }
      static * _MergeMeshesCoroutine(HH) {
        let BH, LH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          AH = arguments.length > 2 ? arguments[2] : void 0,
          rH = arguments.length > 3 ? arguments[3] : void 0,
          SH = arguments.length > 4 ? arguments[4] : void 0,
          hH = arguments.length > 5 ? arguments[5] : void 0,
          tH = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (HH = HH.filter(Boolean)).length) return null;
        if (!AH) {
          let LH = 0;
          for (BH = 0; BH < HH.length; BH++)
            if (LH += HH[BH].getTotalVertices(), LH >= 65536) return NH.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const zH = HH[0];
        hH && (SH = !1, HH.sort(((HH, BH) => (HH.material?.uniqueId ?? -1) - (BH.material?.uniqueId ?? -1))));
        const CH = new Array,
          EH = new Array,
          XH = new Array,
          GH = HH[0].sideOrientation;
        for (BH = 0; BH < HH.length; BH++) {
          const LH = HH[BH];
          if (LH.xR) return NH.e.Warn("Cannot merge instance meshes."), null;
          if (GH !== LH.sideOrientation) return NH.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (SH || hH) {
            const HH = XH.reduce(((HH, BH) => Math.max(HH, BH.start + BH.count)), 0);
            if (hH)
              if (LH.material) {
                const BH = LH.material;
                if (BH instanceof eH.c) {
                  for (let HH = 0; HH < BH.BBH.length; HH++) CH.indexOf(BH.BBH[HH]) < 0 && CH.push(BH.BBH[HH]);
                  for (let AH = 0; AH < LH.jU.length; AH++) EH.push(CH.indexOf(BH.BBH[LH.jU[AH].materialIndex])), XH.push({
                    start: HH + LH.jU[AH].indexStart,
                    count: LH.jU[AH].indexCount
                  })
                } else {
                  CH.indexOf(BH) < 0 && CH.push(BH);
                  for (let AH = 0; AH < LH.jU.length; AH++) EH.push(CH.indexOf(BH)), XH.push({
                    start: HH + LH.jU[AH].indexStart,
                    count: LH.jU[AH].indexCount
                  })
                }
              } else
                for (let BH = 0; BH < LH.jU.length; BH++) EH.push(0), XH.push({
                  start: HH + LH.jU[BH].indexStart,
                  count: LH.jU[BH].indexCount
                });
            else XH.push({
              start: HH,
              count: LH.getTotalIndices()
            })
          }
        }
        if (hH && XH.length > 1) {
          let HH = 0;
          for (let BH = 1; BH < XH.length; BH++) {
            const LH = XH[HH],
              AH = XH[BH];
            EH[BH] === EH[HH] && LH.start + LH.count === AH.start ? LH.count += AH.count : (HH++, XH[HH] = AH, EH[HH] = EH[BH])
          }
          XH.length = HH + 1, EH.length = HH + 1
        }
        const YH = HH => {
            const BH = HH.computeWorldMatrix(!0);
            return {
              vertexData: oH.b.ExtractFromMesh(HH, !1, !1),
              transform: BH
            }
          },
          {
            vertexData: uH,
            transform: QH
          } = YH(HH[0]);
        tH && (yield);
        const WH = new Array(HH.length - 1);
        for (let UH = 1; UH < HH.length; UH++) WH[UH - 1] = YH(HH[UH]), tH && (yield);
        const MH = uH._mergeCoroutine(QH, WH, AH, tH, !LH);
        let xH = MH.next();
        for (; !xH.done;) tH && (yield), xH = MH.next();
        const vH = xH.value;
        rH || (rH = new iH(zH.name + "_merged", zH.yN()));
        const PH = vH._applyToCoroutine(rH, void 0, tH);
        let TH = PH.next();
        for (; !TH.done;) tH && (yield), TH = PH.next();
        if (rH.checkCollisions = zH.checkCollisions, rH.sideOrientation = zH.sideOrientation, LH)
          for (BH = 0; BH < HH.length; BH++) HH[BH].dispose();
        if (SH || hH) {
          for (rH.releaseSubMeshes(), BH = 0; BH < XH.length;) lH.d.CreateFromIndices(0, XH[BH].start, XH[BH].count, rH, void 0, !1), BH++;
          for (const HH of rH.jU) HH.refreshBoundingInfo();
          rH.computeWorldMatrix(!0)
        }
        if (hH) {
          const HH = new eH.c(zH.name + "_merged", zH.yN());
          HH.BBH = CH;
          for (let BH = 0; BH < rH.jU.length; BH++) rH.jU[BH].materialIndex = EH[BH];
          rH.material = HH
        } else rH.material = zH.material;
        return rH
      }
      nHH(HH) {
        HH._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(HH)
      }
      DHH(HH) {
        const BH = HH._indexInSourceMeshInstanceArray;
        if (-1 != BH) {
          if (BH !== this.instances.length - 1) {
            const HH = this.instances[this.instances.length - 1];
            this.instances[BH] = HH, HH._indexInSourceMeshInstanceArray = BH
          }
          HH._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === KH.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(HH) {
        const BH = this.yN();
        return BH.forcePointsCloud ? KH.c.PointFillMode : BH.forceWireframe ? KH.c.WireFrameFillMode : this.overrideRenderingFillMode ?? HH
      }
      setMaterialByID(HH) {
        return this.setMaterialById(HH)
      }
      static CreateRibbon(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(HH, BH, LH, AH, rH, SH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(HH, BH, LH, AH, rH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(HH, BH, LH, AH, rH, SH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(HH, BH, LH, AH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(HH, BH, LH, AH, rH, SH, hH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(HH, BH, LH, AH, rH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(HH, BH, LH, AH, rH, SH, hH, tH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(HH, BH, LH, AH, rH, SH, hH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(HH, BH, LH, AH, rH, SH, hH, tH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(HH, BH, LH, AH, rH, SH, hH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(HH, BH, LH, AH, rH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(HH, BH, LH, AH, rH, SH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(HH, BH, LH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(HH, BH, LH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(HH, BH, LH, AH, rH, SH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(HH, BH, LH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(HH) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    iH.FRONTSIDE = oH.b.FRONTSIDE, iH.BACKSIDE = oH.b.BACKSIDE, iH.DOUBLESIDE = oH.b.DOUBLESIDE, iH.DEFAULTSIDE = oH.b.DEFAULTSIDE, iH.NO_CAP = 0, iH.CAP_START = 1, iH.CAP_END = 2, iH.CAP_ALL = 3, iH.NO_FLIP = 0, iH.FLIP_TILE = 1, iH.ROTATE_TILE = 2, iH.FLIP_ROW = 3, iH.ROTATE_ROW = 4, iH.FLIP_N_ROTATE_TILE = 5, iH.FLIP_N_ROTATE_ROW = 6, iH.CENTER = 0, iH.LEFT = 1, iH.RIGHT = 2, iH.TOP = 3, iH.BOTTOM = 4, iH.INSTANCEDMESH_SORT_TRANSPARENT = !1, iH._GroundMeshParser = (HH, BH) => {
      throw (0, jH.i)("GroundMesh")
    }, iH._GoldbergMeshParser = (HH, BH) => {
      throw (0, jH.i)("GoldbergMesh")
    }, iH._LinesMeshParser = (HH, BH) => {
      throw (0, jH.i)("LinesMesh")
    }, iH._GreasedLineMeshParser = (HH, BH) => {
      throw (0, jH.i)("GreasedLineMesh")
    }, iH._GreasedLineRibbonMeshParser = (HH, BH) => {
      throw (0, jH.i)("GreasedLineRibbonMesh")
    }, iH._TrailMeshParser = (HH, BH) => {
      throw (0, jH.i)("TrailMesh")
    }, iH._GaussianSplattingMeshParser = (HH, BH) => {
      throw (0, jH.i)("GaussianSplattingMesh")
    }, iH._GaussianSplattingPartProxyMeshParser = (HH, BH) => {
      throw (0, jH.i)("GaussianSplattingPartProxyMesh")
    }, iH._GaussianSplattingCompoundMeshParser = (HH, BH) => {
      throw (0, jH.i)("GaussianSplattingCompoundMesh")
    };
    let pH = !1;

    function yH() {
      pH || (pH = !0, (0, RH.f)("BABYLON.Mesh", iH))
    }(AH = iH.prototype).uF ?? (AH.uF = (0, jH.f)("Mesh", "uF")), (rH = iH.prototype).simplify ?? (rH.simplify = (0, jH.f)("Mesh", "simplify")), (SH = iH.prototype).thinInstanceAdd ?? (SH.thinInstanceAdd = (0, jH.f)("Mesh", "thinInstanceAdd")), (hH = iH.prototype).thinInstanceAddSelf ?? (hH.thinInstanceAddSelf = (0, jH.f)("Mesh", "thinInstanceAddSelf")), (tH = iH.prototype).thinInstanceRegisterAttribute ?? (tH.thinInstanceRegisterAttribute = (0, jH.f)("Mesh", "thinInstanceRegisterAttribute")), (zH = iH.prototype).thinInstanceSetMatrixAt ?? (zH.thinInstanceSetMatrixAt = (0, jH.f)("Mesh", "thinInstanceSetMatrixAt")), (CH = iH.prototype).thinInstanceSetAttributeAt ?? (CH.thinInstanceSetAttributeAt = (0, jH.f)("Mesh", "thinInstanceSetAttributeAt")), (EH = iH.prototype).yHH ?? (EH.yHH = (0, jH.f)("Mesh", "yHH")), (XH = iH.prototype).thinInstanceGetWorldMatrices ?? (XH.thinInstanceGetWorldMatrices = (0, jH.f)("Mesh", "thinInstanceGetWorldMatrices")), (GH = iH.prototype).aHH ?? (GH.aHH = (0, jH.f)("Mesh", "aHH")), (YH = iH.prototype).thinInstancePartialBufferUpdate ?? (YH.thinInstancePartialBufferUpdate = (0, jH.f)("Mesh", "thinInstancePartialBufferUpdate")), (uH = iH.prototype).thinInstanceRefreshBoundingInfo ?? (uH.thinInstanceRefreshBoundingInfo = (0, jH.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (QH = iH.prototype).getEmittedParticleSystems ?? (QH.getEmittedParticleSystems = (0, jH.f)("Mesh", "getEmittedParticleSystems")), (WH = iH.prototype).getHierarchyEmittedParticleSystems ?? (WH.getHierarchyEmittedParticleSystems = (0, jH.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(iH.prototype, "edgesShareWithInstances") || Object.defineProperty(iH.prototype, "edgesShareWithInstances", (0, jH.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(iH.prototype, "gLH") || Object.defineProperty(iH.prototype, "gLH", (0, jH.e)("Mesh", "gLH")), Object.getOwnPropertyDescriptor(iH.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(iH.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, jH.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(iH.prototype, "gHH") || Object.defineProperty(iH.prototype, "gHH", (0, jH.e)("Mesh", "gHH"))
  },
  41703: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH
    });
    var AH = LH(41290),
      rH = LH(37963),
      SH = LH(41427),
      hH = LH(41169),
      tH = LH(38074),
      zH = LH(39595),
      CH = LH(41297),
      EH = LH(41697),
      XH = LH(41346),
      GH = LH(41578);
    class YH {}
    let uH = (() => {
      var HH;
      let BH, LH, uH, QH, WH = [];
      return HH = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, EH.g)(this._applyToCoroutine.bind(this)), this.uniqueId = HH._UniqueIdGenerator, HH._UniqueIdGenerator++
        }
        set(HH, BH) {
          switch (HH.length || zH.e.Warn(`Setting vertex data kind '${BH}' with an empty array`), BH) {
            case SH.i.PositionKind:
              this.positions = HH;
              break;
            case SH.i.NormalKind:
              this.normals = HH;
              break;
            case SH.i.TangentKind:
              this.tangents = HH;
              break;
            case SH.i.UVKind:
              this.uvs = HH;
              break;
            case SH.i.UV2Kind:
              this.uvs2 = HH;
              break;
            case SH.i.UV3Kind:
              this.uvs3 = HH;
              break;
            case SH.i.UV4Kind:
              this.uvs4 = HH;
              break;
            case SH.i.UV5Kind:
              this.uvs5 = HH;
              break;
            case SH.i.UV6Kind:
              this.uvs6 = HH;
              break;
            case SH.i.ColorKind:
              this.colors = HH;
              break;
            case SH.i.MatricesIndicesKind:
              this.matricesIndices = HH;
              break;
            case SH.i.MatricesWeightsKind:
              this.matricesWeights = HH;
              break;
            case SH.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = HH;
              break;
            case SH.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = HH
          }
        }
        applyToMesh(HH, BH) {
          return this._applyTo(HH, BH, !1), this
        }
        applyToGeometry(HH, BH) {
          return this._applyTo(HH, BH, !1), this
        }
        updateMesh(HH) {
          return this._update(HH), this
        }
        updateGeometry(HH) {
          return this._update(HH), this
        }* _applyToCoroutine(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (HH.setVerticesData(SH.i.PositionKind, this.positions, BH), LH && (yield)), this.normals && (HH.setVerticesData(SH.i.NormalKind, this.normals, BH), LH && (yield)), this.tangents && (HH.setVerticesData(SH.i.TangentKind, this.tangents, BH), LH && (yield)), this.uvs && (HH.setVerticesData(SH.i.UVKind, this.uvs, BH), LH && (yield)), this.uvs2 && (HH.setVerticesData(SH.i.UV2Kind, this.uvs2, BH), LH && (yield)), this.uvs3 && (HH.setVerticesData(SH.i.UV3Kind, this.uvs3, BH), LH && (yield)), this.uvs4 && (HH.setVerticesData(SH.i.UV4Kind, this.uvs4, BH), LH && (yield)), this.uvs5 && (HH.setVerticesData(SH.i.UV5Kind, this.uvs5, BH), LH && (yield)), this.uvs6 && (HH.setVerticesData(SH.i.UV6Kind, this.uvs6, BH), LH && (yield)), this.colors) {
            const AH = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            HH.setVerticesData(SH.i.ColorKind, this.colors, BH, AH), this.hasVertexAlpha && void 0 !== HH.hasVertexAlpha && (HH.hasVertexAlpha = !0), LH && (yield)
          }
          if (this.matricesIndices && (HH.setVerticesData(SH.i.MatricesIndicesKind, this.matricesIndices, BH), LH && (yield)), this.matricesWeights && (HH.setVerticesData(SH.i.MatricesWeightsKind, this.matricesWeights, BH), LH && (yield)), this.matricesIndicesExtra && (HH.setVerticesData(SH.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, BH), LH && (yield)), this.matricesWeightsExtra && (HH.setVerticesData(SH.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, BH), LH && (yield)), this.indices ? (HH.setIndices(this.indices, null, BH), LH && (yield)) : HH.setIndices([], null), HH.jU && this.materialInfos && this.materialInfos.length > 1) {
            const BH = HH;
            BH.jU = [];
            for (const HH of this.materialInfos) new GH.d(HH.materialIndex, HH.verticesStart, HH.verticesCount, HH.indexStart, HH.indexCount, BH)
          }
          return this
        }
        _update(HH, BH, LH) {
          return this.positions && HH.updateVerticesData(SH.i.PositionKind, this.positions, BH, LH), this.normals && HH.updateVerticesData(SH.i.NormalKind, this.normals, BH, LH), this.tangents && HH.updateVerticesData(SH.i.TangentKind, this.tangents, BH, LH), this.uvs && HH.updateVerticesData(SH.i.UVKind, this.uvs, BH, LH), this.uvs2 && HH.updateVerticesData(SH.i.UV2Kind, this.uvs2, BH, LH), this.uvs3 && HH.updateVerticesData(SH.i.UV3Kind, this.uvs3, BH, LH), this.uvs4 && HH.updateVerticesData(SH.i.UV4Kind, this.uvs4, BH, LH), this.uvs5 && HH.updateVerticesData(SH.i.UV5Kind, this.uvs5, BH, LH), this.uvs6 && HH.updateVerticesData(SH.i.UV6Kind, this.uvs6, BH, LH), this.colors && HH.updateVerticesData(SH.i.ColorKind, this.colors, BH, LH), this.matricesIndices && HH.updateVerticesData(SH.i.MatricesIndicesKind, this.matricesIndices, BH, LH), this.matricesWeights && HH.updateVerticesData(SH.i.MatricesWeightsKind, this.matricesWeights, BH, LH), this.matricesIndicesExtra && HH.updateVerticesData(SH.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, BH, LH), this.matricesWeightsExtra && HH.updateVerticesData(SH.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, BH, LH), this.indices && HH.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const SH = rH.l.lu[0],
            hH = rH.l.lu[1];
          for (let tH = LH; tH < LH + AH; tH += 3) rH.o.FromArrayToRef(HH, tH, SH), rH.o.TransformCoordinatesToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z
        }
        static _TransformVector3Normals(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const SH = rH.l.lu[0],
            hH = rH.l.lu[1];
          for (let tH = LH; tH < LH + AH; tH += 3) rH.o.FromArrayToRef(HH, tH, SH), rH.o.TransformNormalToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z
        }
        static _TransformVector4Normals(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length;
          const SH = rH.l.Vector4[0],
            hH = rH.l.Vector4[1];
          for (let tH = LH; tH < LH + AH; tH += 4) rH.q.FromArrayToRef(HH, tH, SH), rH.q.TransformNormalToRef(SH, BH, hH), HH[tH] = hH.x, HH[tH + 1] = hH.y, HH[tH + 2] = hH.z, HH[tH + 3] = hH.w
        }
        static _FlipFaces(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.length;
          for (let AH = BH; AH < BH + LH; AH += 3) {
            const BH = HH[AH + 1];
            HH[AH + 1] = HH[AH + 2], HH[AH + 2] = BH
          }
        }
        transform(BH) {
          const LH = BH.determinant() < 0;
          return this.positions && HH._TransformVector3Coordinates(this.positions, BH), this.normals && HH._TransformVector3Normals(this.normals, BH), this.tangents && HH._TransformVector4Normals(this.tangents, BH), LH && this.indices && HH._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const BH = [];
          for (const LH of this.materialInfos) {
            const AH = new HH;
            if (this.positions && (AH.positions = this.positions.slice(3 * LH.verticesStart, 3 * (LH.verticesCount + LH.verticesStart))), this.normals && (AH.normals = this.normals.slice(3 * LH.verticesStart, 3 * (LH.verticesCount + LH.verticesStart))), this.tangents && (AH.tangents = this.tangents.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.colors && (AH.colors = this.colors.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.uvs && (AH.uvs = this.uvs.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.uvs2 && (AH.uvs2 = this.uvs2.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.uvs3 && (AH.uvs3 = this.uvs3.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.uvs4 && (AH.uvs4 = this.uvs4.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.uvs5 && (AH.uvs5 = this.uvs5.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.uvs6 && (AH.uvs6 = this.uvs6.slice(2 * LH.verticesStart, 2 * (LH.verticesCount + LH.verticesStart))), this.matricesIndices && (AH.matricesIndices = this.matricesIndices.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.matricesIndicesExtra && (AH.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.matricesWeights && (AH.matricesWeights = this.matricesWeights.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.matricesWeightsExtra && (AH.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * LH.verticesStart, 4 * (LH.verticesCount + LH.verticesStart))), this.indices) {
              AH.indices = [];
              for (let HH = LH.indexStart; HH < LH.indexStart + LH.indexCount; HH++) AH.indices.push(this.indices[HH] - LH.verticesStart)
            }
            const rH = new YH;
            rH.indexStart = 0, rH.indexCount = AH.indices ? AH.indices.length : 0, rH.materialIndex = LH.materialIndex, rH.verticesStart = 0, rH.verticesCount = (AH.positions ? AH.positions.length : 0) / 3, AH.materialInfos = [rH], BH.push(AH)
          }
          return BH
        }
        merge(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const SH = Array.isArray(HH) ? HH.map((HH => ({
            vertexData: HH
          }))) : [{
            vertexData: HH
          }];
          return (0, EH.k)(this._mergeCoroutine(void 0, SH, BH, !1, LH, AH, rH))
        }* _mergeCoroutine(BH, LH) {
          let AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            rH = arguments.length > 3 ? arguments[3] : void 0,
            hH = arguments.length > 4 ? arguments[4] : void 0,
            tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            zH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let CH = LH.map((HH => HH.vertexData)),
            EH = this;
          if (zH)
            for (const HH of CH) HH && (HH._validate(), !this.normals && HH.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && HH.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && HH.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && HH.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && HH.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && HH.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && HH.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && HH.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && HH.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && HH.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && HH.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && HH.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && HH.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const HH of CH)
            if (HH)
              if (zH) this.normals && !HH.normals && (HH.normals = new Float32Array(HH.positions.length)), this.tangents && !HH.tangents && (HH.tangents = new Float32Array(HH.positions.length / 3 * 4)), this.uvs && !HH.uvs && (HH.uvs = new Float32Array(HH.positions.length / 3 * 2)), this.uvs2 && !HH.uvs2 && (HH.uvs2 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs3 && !HH.uvs3 && (HH.uvs3 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs4 && !HH.uvs4 && (HH.uvs4 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs5 && !HH.uvs5 && (HH.uvs5 = new Float32Array(HH.positions.length / 3 * 2)), this.uvs6 && !HH.uvs6 && (HH.uvs6 = new Float32Array(HH.positions.length / 3 * 2)), this.colors && !HH.colors && (HH.colors = new Float32Array(HH.positions.length / 3 * 4), HH.colors.fill(1)), this.matricesIndices && !HH.matricesIndices && (HH.matricesIndices = new Float32Array(HH.positions.length / 3 * 4)), this.matricesWeights && !HH.matricesWeights && (HH.matricesWeights = new Float32Array(HH.positions.length / 3 * 4)), this.matricesIndicesExtra && !HH.matricesIndicesExtra && (HH.matricesIndicesExtra = new Float32Array(HH.positions.length / 3 * 4)), this.matricesWeightsExtra && !HH.matricesWeightsExtra && (HH.matricesWeightsExtra = new Float32Array(HH.positions.length / 3 * 4));
              else if (HH._validate(), !this.normals !== !HH.normals || !this.tangents !== !HH.tangents || !this.uvs !== !HH.uvs || !this.uvs2 !== !HH.uvs2 || !this.uvs3 !== !HH.uvs3 || !this.uvs4 !== !HH.uvs4 || !this.uvs5 !== !HH.uvs5 || !this.uvs6 !== !HH.uvs6 || !this.colors !== !HH.colors || !this.matricesIndices !== !HH.matricesIndices || !this.matricesWeights !== !HH.matricesWeights || !this.matricesIndicesExtra !== !HH.matricesIndicesExtra || !this.matricesWeightsExtra !== !HH.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (tH) {
            let HH, AH = 0,
              rH = 0;
            const SH = [];
            let hH = null;
            const tH = [];
            for (const LH of this.splitBasedOnMaterialID()) tH.push({
              vertexData: LH,
              transform: BH
            });
            for (const BH of LH)
              if (BH.vertexData)
                for (const HH of BH.vertexData.splitBasedOnMaterialID()) tH.push({
                  vertexData: HH,
                  transform: BH.transform
                });
            tH.sort(((HH, BH) => {
              const LH = HH.vertexData.materialInfos ? HH.vertexData.materialInfos[0].materialIndex : 0,
                AH = BH.vertexData.materialInfos ? BH.vertexData.materialInfos[0].materialIndex : 0;
              return LH > AH ? 1 : LH === AH ? 0 : -1
            }));
            for (const BH of tH) {
              const LH = BH.vertexData;
              if (HH = LH.materialInfos ? LH.materialInfos[0].materialIndex : 0, hH && hH.materialIndex === HH) hH.indexCount += LH.indices.length, hH.verticesCount += LH.positions.length / 3;
              else {
                const BH = new YH;
                BH.materialIndex = HH, BH.indexStart = AH, BH.indexCount = LH.indices.length, BH.verticesStart = rH, BH.verticesCount = LH.positions.length / 3, SH.push(BH), hH = BH
              }
              AH += LH.indices.length, rH += LH.positions.length / 3
            }
            const zH = tH.splice(0, 1)[0];
            EH = zH.vertexData, BH = zH.transform, CH = tH.map((HH => HH.vertexData)), LH = tH, this.materialInfos = SH
          }
          const XH = CH.reduce(((HH, BH) => HH + (BH.indices?.length ?? 0)), EH.indices?.length ?? 0);
          let GH = hH || CH.some((HH => HH.indices === EH.indices)) ? EH.indices?.slice() : EH.indices;
          if (XH > 0) {
            let SH = GH?.length ?? 0;
            if (GH || (GH = new Array(XH)), GH.length !== XH) {
              if (Array.isArray(GH)) GH.length = XH;
              else {
                const HH = AH || GH instanceof Uint32Array ? new Uint32Array(XH) : new Uint16Array(XH);
                HH.set(GH), GH = HH
              }
              BH && BH.determinant() < 0 && HH._FlipFaces(GH, 0, SH)
            }
            let hH = EH.positions ? EH.positions.length / 3 : 0;
            for (const {
                vertexData: BH,
                transform: AH
              }
              of LH)
              if (BH.indices) {
                for (let HH = 0; HH < BH.indices.length; HH++) GH[SH + HH] = BH.indices[HH] + hH;
                AH && AH.determinant() < 0 && HH._FlipFaces(GH, SH, BH.indices.length), hH += BH.positions.length / 3, SH += BH.indices.length, rH && (yield)
              }
          }
          return this.indices = GH, this.positions = HH._MergeElement(SH.i.PositionKind, EH.positions, BH, LH.map((HH => [HH.vertexData.positions, HH.transform]))), rH && (yield), EH.normals && (this.normals = HH._MergeElement(SH.i.NormalKind, EH.normals, BH, LH.map((HH => [HH.vertexData.normals, HH.transform]))), rH && (yield)), EH.tangents && (this.tangents = HH._MergeElement(SH.i.TangentKind, EH.tangents, BH, LH.map((HH => [HH.vertexData.tangents, HH.transform]))), rH && (yield)), EH.uvs && (this.uvs = HH._MergeElement(SH.i.UVKind, EH.uvs, BH, LH.map((HH => [HH.vertexData.uvs, HH.transform]))), rH && (yield)), EH.uvs2 && (this.uvs2 = HH._MergeElement(SH.i.UV2Kind, EH.uvs2, BH, LH.map((HH => [HH.vertexData.uvs2, HH.transform]))), rH && (yield)), EH.uvs3 && (this.uvs3 = HH._MergeElement(SH.i.UV3Kind, EH.uvs3, BH, LH.map((HH => [HH.vertexData.uvs3, HH.transform]))), rH && (yield)), EH.uvs4 && (this.uvs4 = HH._MergeElement(SH.i.UV4Kind, EH.uvs4, BH, LH.map((HH => [HH.vertexData.uvs4, HH.transform]))), rH && (yield)), EH.uvs5 && (this.uvs5 = HH._MergeElement(SH.i.UV5Kind, EH.uvs5, BH, LH.map((HH => [HH.vertexData.uvs5, HH.transform]))), rH && (yield)), EH.uvs6 && (this.uvs6 = HH._MergeElement(SH.i.UV6Kind, EH.uvs6, BH, LH.map((HH => [HH.vertexData.uvs6, HH.transform]))), rH && (yield)), EH.colors && (this.colors = HH._MergeElement(SH.i.ColorKind, EH.colors, BH, LH.map((HH => [HH.vertexData.colors, HH.transform]))), (void 0 !== EH.hasVertexAlpha || LH.some((HH => void 0 !== HH.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = EH.hasVertexAlpha || LH.some((HH => HH.vertexData.hasVertexAlpha))), rH && (yield)), EH.matricesIndices && (this.matricesIndices = HH._MergeElement(SH.i.MatricesIndicesKind, EH.matricesIndices, BH, LH.map((HH => [HH.vertexData.matricesIndices, HH.transform]))), rH && (yield)), EH.matricesWeights && (this.matricesWeights = HH._MergeElement(SH.i.MatricesWeightsKind, EH.matricesWeights, BH, LH.map((HH => [HH.vertexData.matricesWeights, HH.transform]))), rH && (yield)), EH.matricesIndicesExtra && (this.matricesIndicesExtra = HH._MergeElement(SH.i.MatricesIndicesExtraKind, EH.matricesIndicesExtra, BH, LH.map((HH => [HH.vertexData.matricesIndicesExtra, HH.transform]))), rH && (yield)), EH.matricesWeightsExtra && (this.matricesWeightsExtra = HH._MergeElement(SH.i.MatricesWeightsExtraKind, EH.matricesWeightsExtra, BH, LH.map((HH => [HH.vertexData.matricesWeightsExtra, HH.transform])))), this
        }
        static _MergeElement(BH, LH, AH, rH) {
          const hH = rH.filter((HH => null !== HH[0] && void 0 !== HH[0]));
          if (!LH && 0 == hH.length) return LH;
          if (!LH) return this._MergeElement(BH, hH[0][0], hH[0][1], hH.slice(1));
          const tH = hH.reduce(((HH, BH) => HH + BH[0].length), LH.length),
            zH = BH === SH.i.PositionKind ? HH._TransformVector3Coordinates : BH === SH.i.NormalKind ? HH._TransformVector3Normals : BH === SH.i.TangentKind ? HH._TransformVector4Normals : () => {};
          if (LH instanceof Float32Array) {
            const HH = new Float32Array(tH);
            HH.set(LH), AH && zH(HH, AH, 0, LH.length);
            let BH = LH.length;
            for (const [LH, AH] of hH) HH.set(LH, BH), AH && zH(HH, AH, BH, LH.length), BH += LH.length;
            return HH
          } {
            const HH = new Array(tH);
            for (let AH = 0; AH < LH.length; AH++) HH[AH] = LH[AH];
            AH && zH(HH, AH, 0, LH.length);
            let BH = LH.length;
            for (const [LH, AH] of hH) {
              for (let AH = 0; AH < LH.length; AH++) HH[BH + AH] = LH[AH];
              AH && zH(HH, AH, BH, LH.length), BH += LH.length
            }
            return HH
          }
        }
        _validate() {
          if (!this.positions) throw new XH.j("Positions are required", XH.g.MeshInvalidPositionsError);
          const HH = (HH, BH) => {
              const LH = (0, SH.f)(HH);
              if (BH.length % LH !== 0) throw new Error("The " + HH + "s array count must be a multiple of " + LH);
              return BH.length / LH
            },
            BH = HH(SH.i.PositionKind, this.positions),
            LH = (LH, AH) => {
              const rH = HH(LH, AH);
              if (rH !== BH) throw new Error("The " + LH + "s element count (" + rH + ") does not match the positions count (" + BH + ")")
            };
          this.normals && LH(SH.i.NormalKind, this.normals), this.tangents && LH(SH.i.TangentKind, this.tangents), this.uvs && LH(SH.i.UVKind, this.uvs), this.uvs2 && LH(SH.i.UV2Kind, this.uvs2), this.uvs3 && LH(SH.i.UV3Kind, this.uvs3), this.uvs4 && LH(SH.i.UV4Kind, this.uvs4), this.uvs5 && LH(SH.i.UV5Kind, this.uvs5), this.uvs6 && LH(SH.i.UV6Kind, this.uvs6), this.colors && LH(SH.i.ColorKind, this.colors), this.matricesIndices && LH(SH.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && LH(SH.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && LH(SH.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && LH(SH.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const BH = this.serialize();
          return HH.Parse(BH)
        }
        serialize() {
          const HH = {};
          if (this.positions && (HH.positions = Array.from(this.positions)), this.normals && (HH.normals = Array.from(this.normals)), this.tangents && (HH.tangents = Array.from(this.tangents)), this.uvs && (HH.uvs = Array.from(this.uvs)), this.uvs2 && (HH.uvs2 = Array.from(this.uvs2)), this.uvs3 && (HH.uvs3 = Array.from(this.uvs3)), this.uvs4 && (HH.uvs4 = Array.from(this.uvs4)), this.uvs5 && (HH.uvs5 = Array.from(this.uvs5)), this.uvs6 && (HH.uvs6 = Array.from(this.uvs6)), this.colors && (HH.colors = Array.from(this.colors), HH.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (HH.matricesIndices = Array.from(this.matricesIndices), HH.matricesIndicesExpanded = !0), this.matricesWeights && (HH.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (HH.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), HH.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (HH.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), HH.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            HH.materialInfos = [];
            for (const BH of this.materialInfos) {
              const LH = {
                indexStart: BH.indexStart,
                indexCount: BH.indexCount,
                materialIndex: BH.materialIndex,
                verticesStart: BH.verticesStart,
                verticesCount: BH.verticesCount
              };
              HH.materialInfos.push(LH)
            }
          }
          return HH
        }
        static ExtractFromMesh(BH, LH, AH) {
          return HH._ExtractFrom(BH, LH, AH)
        }
        static ExtractFromGeometry(BH, LH, AH) {
          return HH._ExtractFrom(BH, LH, AH)
        }
        static _ExtractFrom(BH, LH, AH) {
          const rH = new HH;
          if (BH.isVerticesDataPresent(SH.i.PositionKind) && (rH.positions = BH.getVerticesData(SH.i.PositionKind, LH, AH)), BH.isVerticesDataPresent(SH.i.NormalKind) && (rH.normals = BH.getVerticesData(SH.i.NormalKind, LH, AH)), BH.isVerticesDataPresent(SH.i.TangentKind) && (rH.tangents = BH.getVerticesData(SH.i.TangentKind, LH, AH)), BH.isVerticesDataPresent(SH.i.UVKind) && (rH.uvs = BH.getVerticesData(SH.i.UVKind, LH, AH)), BH.isVerticesDataPresent(SH.i.UV2Kind) && (rH.uvs2 = BH.getVerticesData(SH.i.UV2Kind, LH, AH)), BH.isVerticesDataPresent(SH.i.UV3Kind) && (rH.uvs3 = BH.getVerticesData(SH.i.UV3Kind, LH, AH)), BH.isVerticesDataPresent(SH.i.UV4Kind) && (rH.uvs4 = BH.getVerticesData(SH.i.UV4Kind, LH, AH)), BH.isVerticesDataPresent(SH.i.UV5Kind) && (rH.uvs5 = BH.getVerticesData(SH.i.UV5Kind, LH, AH)), BH.isVerticesDataPresent(SH.i.UV6Kind) && (rH.uvs6 = BH.getVerticesData(SH.i.UV6Kind, LH, AH)), BH.isVerticesDataPresent(SH.i.ColorKind)) {
            const HH = BH.geometry || BH,
              hH = HH.getVertexBuffer(SH.i.ColorKind),
              tH = HH.getVerticesData(SH.i.ColorKind, LH, AH);
            if (3 === hH.getSize()) {
              const HH = new Float32Array(4 * tH.length / 3);
              for (let BH = 0, LH = 0; BH < tH.length; BH += 3, LH += 4) HH[LH] = tH[BH], HH[LH + 1] = tH[BH + 1], HH[LH + 2] = tH[BH + 2], HH[LH + 3] = 1;
              rH.colors = HH
            } else {
              if (4 !== hH.getSize()) throw new Error(`Unexpected number of color components: ${hH.getSize()}`);
              rH.colors = tH
            }
          }
          return BH.isVerticesDataPresent(SH.i.MatricesIndicesKind) && (rH.matricesIndices = BH.getVerticesData(SH.i.MatricesIndicesKind, LH, AH)), BH.isVerticesDataPresent(SH.i.MatricesWeightsKind) && (rH.matricesWeights = BH.getVerticesData(SH.i.MatricesWeightsKind, LH, AH)), BH.isVerticesDataPresent(SH.i.MatricesIndicesExtraKind) && (rH.matricesIndicesExtra = BH.getVerticesData(SH.i.MatricesIndicesExtraKind, LH, AH)), BH.isVerticesDataPresent(SH.i.MatricesWeightsExtraKind) && (rH.matricesWeightsExtra = BH.getVerticesData(SH.i.MatricesWeightsExtraKind, LH, AH)), rH.indices = BH.vrH(LH, AH), rH
        }
        static CreateRibbon(HH) {
          throw (0, hH.i)("ribbonBuilder")
        }
        static CreateBox(HH) {
          throw (0, hH.i)("boxBuilder")
        }
        static CreateTiledBox(HH) {
          throw (0, hH.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(HH) {
          throw (0, hH.i)("tiledPlaneBuilder")
        }
        static CreateSphere(HH) {
          throw (0, hH.i)("sphereBuilder")
        }
        static CreateCylinder(HH) {
          throw (0, hH.i)("cylinderBuilder")
        }
        static CreateTorus(HH) {
          throw (0, hH.i)("torusBuilder")
        }
        static CreateLineSystem(HH) {
          throw (0, hH.i)("linesBuilder")
        }
        static CreateDashedLines(HH) {
          throw (0, hH.i)("linesBuilder")
        }
        static CreateGround(HH) {
          throw (0, hH.i)("groundBuilder")
        }
        static CreateTiledGround(HH) {
          throw (0, hH.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(HH) {
          throw (0, hH.i)("groundBuilder")
        }
        static CreatePlane(HH) {
          throw (0, hH.i)("planeBuilder")
        }
        static CreateDisc(HH) {
          throw (0, hH.i)("discBuilder")
        }
        static CreatePolygon(HH, BH, LH, AH, rH, SH, tH) {
          throw (0, hH.i)("polygonBuilder")
        }
        static CreateIcoSphere(HH) {
          throw (0, hH.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(HH) {
          throw (0, hH.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || rH.o.Up();
          throw (0, hH.i)("capsuleBuilder")
        }
        static CreateTorusKnot(HH) {
          throw (0, hH.i)("torusKnotBuilder")
        }
        static ComputeNormals(HH, BH, LH, AH) {
          let SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH = !1,
            kH = !1,
            mH = !1,
            oH = !1,
            IH = 1,
            fH = 0,
            lH = null;
          AH && (bH = !!AH.facetNormals, kH = !!AH.facetPositions, mH = !!AH.facetPartitioning, IH = !0 === AH.useRightHandedSystem ? -1 : 1, fH = AH.ratio || 0, oH = !!AH.depthSort, lH = AH.distanceTo, oH && void 0 === lH && (lH = rH.o.Zero()));
          let KH = 0,
            cH = 0,
            eH = 0,
            qH = 0;
          for (mH && AH && AH.bbSize && (KH = AH.subDiv.X * fH / AH.bbSize.x, cH = AH.subDiv.Y * fH / AH.bbSize.y, eH = AH.subDiv.Z * fH / AH.bbSize.z, qH = AH.subDiv.max * AH.subDiv.max, AH.facetPartitioning.length = 0), SH = 0; SH < HH.length; SH++) LH[SH] = 0;
          const gH = BH.length / 3 | 0;
          for (SH = 0; SH < gH; SH++) {
            if (WH = 3 * BH[3 * SH], MH = WH + 1, xH = WH + 2, vH = 3 * BH[3 * SH + 1], PH = vH + 1, TH = vH + 2, UH = 3 * BH[3 * SH + 2], VH = UH + 1, OH = UH + 2, hH = HH[WH] - HH[vH], tH = HH[MH] - HH[PH], zH = HH[xH] - HH[TH], CH = HH[UH] - HH[vH], EH = HH[VH] - HH[PH], XH = HH[OH] - HH[TH], GH = IH * (tH * XH - zH * EH), YH = IH * (zH * CH - hH * XH), uH = IH * (hH * EH - tH * CH), QH = Math.sqrt(GH * GH + YH * YH + uH * uH), QH = 0 === QH ? 1 : QH, GH /= QH, YH /= QH, uH /= QH, bH && AH && (AH.facetNormals[SH].x = GH, AH.facetNormals[SH].y = YH, AH.facetNormals[SH].z = uH), kH && AH && (AH.facetPositions[SH].x = (HH[WH] + HH[vH] + HH[UH]) / 3, AH.facetPositions[SH].y = (HH[MH] + HH[PH] + HH[VH]) / 3, AH.facetPositions[SH].z = (HH[xH] + HH[TH] + HH[OH]) / 3), mH && AH) {
              const BH = Math.floor((AH.facetPositions[SH].x - AH.bInfo.minimum.x * fH) * KH),
                LH = Math.floor((AH.facetPositions[SH].y - AH.bInfo.minimum.y * fH) * cH),
                rH = Math.floor((AH.facetPositions[SH].z - AH.bInfo.minimum.z * fH) * eH),
                hH = Math.floor((HH[WH] - AH.bInfo.minimum.x * fH) * KH),
                tH = Math.floor((HH[MH] - AH.bInfo.minimum.y * fH) * cH),
                zH = Math.floor((HH[xH] - AH.bInfo.minimum.z * fH) * eH),
                CH = Math.floor((HH[vH] - AH.bInfo.minimum.x * fH) * KH),
                EH = Math.floor((HH[PH] - AH.bInfo.minimum.y * fH) * cH),
                XH = Math.floor((HH[TH] - AH.bInfo.minimum.z * fH) * eH),
                GH = Math.floor((HH[UH] - AH.bInfo.minimum.x * fH) * KH),
                YH = Math.floor((HH[VH] - AH.bInfo.minimum.y * fH) * cH),
                uH = Math.floor((HH[OH] - AH.bInfo.minimum.z * fH) * eH),
                QH = hH + AH.subDiv.max * tH + qH * zH,
                bH = CH + AH.subDiv.max * EH + qH * XH,
                kH = GH + AH.subDiv.max * YH + qH * uH,
                mH = BH + AH.subDiv.max * LH + qH * rH;
              AH.facetPartitioning[mH] = AH.facetPartitioning[mH] ? AH.facetPartitioning[mH] : [], AH.facetPartitioning[QH] = AH.facetPartitioning[QH] ? AH.facetPartitioning[QH] : [], AH.facetPartitioning[bH] = AH.facetPartitioning[bH] ? AH.facetPartitioning[bH] : [], AH.facetPartitioning[kH] = AH.facetPartitioning[kH] ? AH.facetPartitioning[kH] : [], AH.facetPartitioning[QH].push(SH), bH != QH && AH.facetPartitioning[bH].push(SH), kH != bH && kH != QH && AH.facetPartitioning[kH].push(SH), mH != QH && mH != bH && mH != kH && AH.facetPartitioning[mH].push(SH)
            }
            if (oH && AH && AH.facetPositions) {
              const HH = AH.depthSortedFacets[SH];
              HH.ind = 3 * SH, HH.sqDistance = rH.o.DistanceSquared(AH.facetPositions[SH], lH)
            }
            LH[WH] += GH, LH[MH] += YH, LH[xH] += uH, LH[vH] += GH, LH[PH] += YH, LH[TH] += uH, LH[UH] += GH, LH[VH] += YH, LH[OH] += uH
          }
          for (SH = 0; SH < LH.length / 3; SH++) GH = LH[3 * SH], YH = LH[3 * SH + 1], uH = LH[3 * SH + 2], QH = Math.sqrt(GH * GH + YH * YH + uH * uH), QH = 0 === QH ? 1 : QH, GH /= QH, YH /= QH, uH /= QH, LH[3 * SH] = GH, LH[3 * SH + 1] = YH, LH[3 * SH + 2] = uH
        }
        static _ComputeSides(BH, LH, AH, SH, hH, tH, zH) {
          const CH = AH.length,
            EH = SH.length;
          let XH, GH;
          switch (BH = BH || HH.DEFAULTSIDE) {
            case HH.FRONTSIDE:
              break;
            case HH.BACKSIDE:
              for (XH = 0; XH < CH; XH += 3) {
                const HH = AH[XH];
                AH[XH] = AH[XH + 2], AH[XH + 2] = HH
              }
              for (GH = 0; GH < EH; GH++) SH[GH] = -SH[GH];
              break;
            case HH.DOUBLESIDE: {
              const HH = LH.length,
                BH = HH / 3;
              for (let AH = 0; AH < HH; AH++) LH[HH + AH] = LH[AH];
              for (XH = 0; XH < CH; XH += 3) AH[XH + CH] = AH[XH + 2] + BH, AH[XH + 1 + CH] = AH[XH + 1] + BH, AH[XH + 2 + CH] = AH[XH] + BH;
              for (GH = 0; GH < EH; GH++) SH[EH + GH] = -SH[GH];
              const YH = hH.length;
              let uH;
              for (uH = 0; uH < YH; uH++) hH[uH + YH] = hH[uH];
              for (tH = tH || new rH.q(0, 0, 1, 1), zH = zH || new rH.q(0, 0, 1, 1), uH = 0, XH = 0; XH < YH / 2; XH++) hH[uH] = tH.x + (tH.z - tH.x) * hH[uH], hH[uH + 1] = tH.y + (tH.w - tH.y) * hH[uH + 1], hH[uH + YH] = zH.x + (zH.z - zH.x) * hH[uH + YH], hH[uH + YH + 1] = zH.y + (zH.w - zH.y) * hH[uH + YH + 1], uH += 2;
              break
            }
          }
        }
        static Parse(BH) {
          const LH = new HH,
            AH = BH.positions;
          AH && LH.set(AH, SH.i.PositionKind);
          const rH = BH.normals;
          rH && LH.set(rH, SH.i.NormalKind);
          const hH = BH.tangents;
          hH && LH.set(hH, SH.i.TangentKind);
          const zH = BH.uvs;
          zH && LH.set(zH, SH.i.UVKind);
          const CH = BH.uvs2;
          CH && LH.set(CH, SH.i.UV2Kind);
          const EH = BH.uvs3;
          EH && LH.set(EH, SH.i.UV3Kind);
          const XH = BH.uvs4;
          XH && LH.set(XH, SH.i.UV4Kind);
          const GH = BH.uvs5;
          GH && LH.set(GH, SH.i.UV5Kind);
          const uH = BH.uvs6;
          uH && LH.set(uH, SH.i.UV6Kind);
          const QH = BH.colors;
          QH && (LH.set(tH.g.CheckColors4(QH, AH.length / 3), SH.i.ColorKind), void 0 !== BH.hasVertexAlpha && (LH.hasVertexAlpha = BH.hasVertexAlpha));
          const WH = BH.matricesIndices;
          WH && LH.set(WH, SH.i.MatricesIndicesKind);
          const MH = BH.matricesWeights;
          MH && LH.set(MH, SH.i.MatricesWeightsKind);
          const xH = BH.indices;
          xH && (LH.indices = xH);
          const vH = BH.materialInfos;
          if (vH) {
            LH.materialInfos = [];
            for (const HH of vH) {
              const BH = new YH;
              BH.indexCount = HH.indexCount, BH.indexStart = HH.indexStart, BH.verticesCount = HH.verticesCount, BH.verticesStart = HH.verticesStart, BH.materialIndex = HH.materialIndex, LH.materialInfos.push(BH)
            }
          }
          return LH
        }
        static ImportVertexData(BH, LH) {
          const AH = HH.Parse(BH);
          LH.setAllVerticesData(AH, BH.updatable)
        }
      }, (() => {
        const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [CH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], LH = [CH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], uH = [CH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], QH = [CH.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, AH.g)(HH, null, BH, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector3Coordinates" in HH,
            get: HH => HH._TransformVector3Coordinates
          },
          metadata: rH
        }, null, WH), (0, AH.g)(HH, null, LH, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector3Normals" in HH,
            get: HH => HH._TransformVector3Normals
          },
          metadata: rH
        }, null, WH), (0, AH.g)(HH, null, uH, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: HH => "_TransformVector4Normals" in HH,
            get: HH => HH._TransformVector4Normals
          },
          metadata: rH
        }, null, WH), (0, AH.g)(HH, null, QH, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: HH => "_FlipFaces" in HH,
            get: HH => HH._FlipFaces
          },
          metadata: rH
        }, null, WH), rH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rH
        })
      })(), HH.FRONTSIDE = ((0, AH.k)(HH, WH), 0), HH.BACKSIDE = 1, HH.DOUBLESIDE = 2, HH.DEFAULTSIDE = 0, HH._UniqueIdGenerator = 0, HH
    })()
  },
  41784: (HH, BH, LH) => {
    var AH = LH(37963),
      rH = LH(39595),
      SH = LH(41588),
      hH = LH(41693),
      tH = LH(41427);
    const zH = "bakedVertexAnimationSettingsInstanced";

    function CH(HH) {
      const BH = HH.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return BH instanceof Float32Array || BH instanceof Uint16Array
    }

    function EH(HH, BH, LH, AH) {
      LH.IHH(Number.POSITIVE_INFINITY), AH.IHH(Number.NEGATIVE_INFINITY);
      for (let rH = 0; rH < 3 * BH; rH += 3) {
        const BH = HH[rH],
          SH = HH[rH + 1],
          hH = HH[rH + 2];
        BH < LH.x && (LH.x = BH), SH < LH.y && (LH.y = SH), hH < LH.z && (LH.z = hH), BH > AH.x && (AH.x = BH), SH > AH.y && (AH.y = SH), hH > AH.z && (AH.z = hH)
      }
    }

    function XH(HH, BH, LH) {
      LH && (HH.x -= HH.x * LH.x + LH.y, HH.y -= HH.y * LH.x + LH.y, HH.z -= HH.z * LH.x + LH.y, BH.x += BH.x * LH.x + LH.y, BH.y += BH.y * LH.x + LH.y, BH.z += BH.z * LH.x + LH.y)
    }

    function GH(HH, BH, LH, rH, SH) {
      const hH = AH.l.lu[7],
        tH = AH.l.lu[8];
      for (let zH = 0; zH < 2; ++zH)
        for (let CH = 0; CH < 2; ++CH)
          for (let EH = 0; EH < 2; ++EH) hH.set(zH ? BH.x : HH.x, CH ? BH.y : HH.y, EH ? BH.z : HH.z), AH.o.TransformCoordinatesToRef(hH, LH, tH), rH.minimizeInPlace(tH), SH.maximizeInPlace(tH)
    }

    function YH(HH, BH, LH, rH, SH) {
      const hH = AH.l.lu[7];
      for (let tH = 0; tH < 3 * BH; tH += 3) AH.o.TransformCoordinatesFromFloatsToRef(HH[tH], HH[tH + 1], HH[tH + 2], LH, hH), rH.minimizeInPlace(hH), SH.maximizeInPlace(hH)
    }
    let uH = !1;
    uH || (uH = !0, hH.c.prototype.thinInstanceAdd = function(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.yN().Iu().getCaps().instancedArrays) return rH.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(HH) ? HH.length : 1);
      const LH = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(HH))
        for (let AH = 0; AH < HH.length; ++AH) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, HH[AH], AH === HH.length - 1 && BH);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, HH, BH);
      return LH
    }, hH.c.prototype.thinInstanceAddSelf = function() {
      let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(AH.e.IdentityReadOnly, HH)
    }, hH.c.prototype.thinInstanceRegisterAttribute = function(HH, BH) {
      HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), this.removeVerticesData(HH), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[HH] = BH, this._userThinInstanceBuffersStorage.sizes[HH] = BH * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[HH] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[HH]), this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new tH.i(this.Iu(), this._userThinInstanceBuffersStorage.data[HH], HH, !0, !1, BH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH])
    }, hH.c.prototype.thinInstanceSetMatrixAt = function(HH, BH) {
      let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || HH >= this._thinInstanceDataStorage.instancesCount) return !1;
      const AH = this._thinInstanceDataStorage.matrixData;
      return BH.copyToArray(AH, 16 * HH), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[HH] = BH), LH && (this.aHH("matrix"), this.cu || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, hH.c.prototype.thinInstanceSetAttributeAt = function(HH, BH, LH) {
      let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[HH] || BH >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(HH, 0), this._userThinInstanceBuffersStorage.data[HH].set(LH, BH * this._userThinInstanceBuffersStorage.strides[HH]), AH && this.aHH(HH), !0)
    }, Object.defineProperty(hH.c.prototype, "gHH", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(HH) {
        const BH = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        HH <= (BH ? BH.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = HH)
      },
      enumerable: !0,
      configurable: !0
    }), hH.c.prototype._thinInstanceCreateMatrixBuffer = function(HH, BH) {
      let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const AH = new tH.b(this.Iu(), BH, !LH, 16, !1, !0);
      for (let rH = 0; rH < 4; rH++) this.setVerticesBuffer(AH.createVertexBuffer(HH + rH, 4 * rH, 4));
      return AH
    }, hH.c.prototype.yHH = function(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (LH = LH || 16, "matrix" === HH) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = BH ? BH.length : 32 * LH, this._thinInstanceDataStorage.matrixData = BH, this._thinInstanceDataStorage.worldMatrices = null, null !== BH ? (this._thinInstanceDataStorage.instancesCount = BH.length / LH, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", BH, AH), this.cu || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.cu || this.refreshBoundingInfo());
      else if ("previousMatrix" === HH) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = BH, null !== BH && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", BH, AH));
      else if ("splatIndex" === HH && BH) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = BH.length / LH, this._userThinInstanceBuffersStorage.data[HH] = BH, this._userThinInstanceBuffersStorage.strides[HH] = LH, this._userThinInstanceBuffersStorage.sizes[HH] = BH.length;
        const AH = new tH.b(this.Iu(), BH, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = AH;
        for (let BH = 0; BH < 4; BH++) this.setVerticesBuffer(AH.createVertexBuffer(HH + BH, 4 * BH, 4))
      } else HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), null === BH ? this._userThinInstanceBuffersStorage?.data[HH] && (this.removeVerticesData(HH), delete this._userThinInstanceBuffersStorage.data[HH], delete this._userThinInstanceBuffersStorage.strides[HH], delete this._userThinInstanceBuffersStorage.sizes[HH], delete this._userThinInstanceBuffersStorage.vertexBuffers[HH]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[HH] = BH, this._userThinInstanceBuffersStorage.strides[HH] = LH, this._userThinInstanceBuffersStorage.sizes[HH] = BH.length, this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new tH.i(this.Iu(), BH, HH, !AH, !1, LH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]))
    }, hH.c.prototype.aHH = function(HH) {
      "matrix" === HH ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(HH), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === HH ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(HH), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === HH ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[HH], 0, this._thinInstanceDataStorage.instancesCount) : (HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[HH] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[HH].isUpdatable() && this._thinInstanceRecreateBuffer(HH), this._userThinInstanceBuffersStorage.vertexBuffers[HH].updateDirectly(this._userThinInstanceBuffersStorage.data[HH], 0)))
    }, hH.c.prototype.thinInstancePartialBufferUpdate = function(HH, BH, LH) {
      if ("matrix" === HH) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof BH ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * LH * Float32Array.BYTES_PER_ELEMENT, 16 * BH), 16 * LH) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(BH, LH));
      else if (HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[HH]) {
        const AH = this._userThinInstanceBuffersStorage.vertexBuffers[HH];
        if ("number" === typeof BH) {
          const AH = new Float32Array(this._userThinInstanceBuffersStorage.data[HH].buffer, this._userThinInstanceBuffersStorage.data[HH].byteOffset + LH * this._userThinInstanceBuffersStorage.strides[HH] * Float32Array.BYTES_PER_ELEMENT, BH * this._userThinInstanceBuffersStorage.strides[HH]);
          this._userThinInstanceBuffersStorage.vertexBuffers[HH].updateDirectly(AH, LH * this._userThinInstanceBuffersStorage.strides[HH])
        } else AH.updateDirectly(BH, LH)
      }
    }, hH.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const HH = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let BH = 0; BH < this._thinInstanceDataStorage.instancesCount; ++BH) this._thinInstanceDataStorage.worldMatrices[BH] = AH.e.FromArray(HH, 16 * BH)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, hH.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const hH = this._thinInstanceDataStorage.boundingVectors;
      if (HH || !this.rawBoundingInfo) {
        if (hH.length = 0, rH && function(HH, BH, LH) {
            const rH = HH._userThinInstanceBuffersStorage,
              hH = rH?.data[zH],
              uH = rH?.strides[zH];
            if (!hH || !uH || uH < 4 || !CH(HH)) return !1;
            const QH = HH._thinInstanceDataStorage.matrixData;
            if (!QH) return !1;
            const WH = {},
              MH = AH.l.Vector4[0],
              xH = AH.l.lu[1],
              vH = AH.l.lu[2],
              PH = AH.l.lu[3],
              TH = AH.l.lu[4],
              UH = AH.l.lu[5],
              VH = AH.l.lu[6],
              OH = AH.l.Matrix[2],
              bH = HH.geometry ? HH.geometry.boundingBias : null,
              kH = HH.getTotalVertices();
            xH.IHH(Number.POSITIVE_INFINITY), vH.IHH(Number.NEGATIVE_INFINITY), PH.IHH(Number.POSITIVE_INFINITY), TH.IHH(Number.NEGATIVE_INFINITY);
            for (let SH = 0; SH < HH._thinInstanceDataStorage.instancesCount; ++SH) {
              const BH = SH * uH;
              MH.set(hH[BH], hH[BH + 1], hH[BH + 2], hH[BH + 3]);
              const rH = HH._getData({
                applyMorph: LH,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: MH,
                updatePositionsArray: !1,
                cache: WH
              }, null, tH.i.PositionKind);
              if (!rH) return !1;
              EH(rH, kH, UH, VH), XH(UH, VH, bH), xH.minimizeInPlace(UH), vH.maximizeInPlace(VH), AH.e.FromArrayToRef(QH, 16 * SH, OH), bH ? GH(UH, VH, OH, PH, TH) : YH(rH, kH, OH, PH, TH)
            }
            return !(!isFinite(xH.x) || !isFinite(PH.x)) && (HH.jF().reConstruct(PH, TH), HH.rawBoundingInfo = new SH.d(xH, vH), function(HH, BH) {
              HH.length = 0;
              for (let LH = 0; LH < BH.boundingBox.vectors.length; ++LH) HH.push(BH.boundingBox.vectors[LH].clone())
            }(BH, HH.rawBoundingInfo), HH._updateBoundingInfo(), !0)
          }(this, hH, LH)) return;
        rH && this.bakedVertexAnimationManager?.isEnabled && CH(this) ? this.refreshBoundingInfo({
          applySkeleton: BH,
          applyMorph: LH,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(BH, LH);
        const HH = this.jF();
        this.rawBoundingInfo = new SH.d(HH.minimum, HH.maximum)
      }
      const uH = this.jF(),
        QH = this._thinInstanceDataStorage.matrixData;
      if (0 === hH.length)
        for (let AH = 0; AH < uH.boundingBox.vectors.length; ++AH) hH.push(uH.boundingBox.vectors[AH].clone());
      AH.l.lu[0].IHH(Number.POSITIVE_INFINITY), AH.l.lu[1].IHH(Number.NEGATIVE_INFINITY);
      for (let SH = 0; SH < this._thinInstanceDataStorage.instancesCount; ++SH) {
        AH.e.FromArrayToRef(QH, 16 * SH, AH.l.Matrix[0]);
        for (let HH = 0; HH < hH.length; ++HH) AH.o.TransformCoordinatesToRef(hH[HH], AH.l.Matrix[0], AH.l.lu[2]), AH.l.lu[0].minimizeInPlace(AH.l.lu[2]), AH.l.lu[1].maximizeInPlace(AH.l.lu[2])
      }
      uH.reConstruct(AH.l.lu[0], AH.l.lu[1]), this._updateBoundingInfo()
    }, hH.c.prototype._thinInstanceRecreateBuffer = function(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === HH ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, BH)) : "previousMatrix" === HH ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, BH)) : (HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[HH]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new tH.i(this.Iu(), this._userThinInstanceBuffersStorage.data[HH], HH, !BH, !1, this._userThinInstanceBuffersStorage.strides[HH], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]))
    }, hH.c.prototype._thinInstanceUpdateBufferSize = function(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind);
      const LH = "matrix" === HH;
      if (!LH && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[HH])) return;
      const AH = LH ? 16 : this._userThinInstanceBuffersStorage.strides[HH],
        rH = LH ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[HH];
      let SH = LH ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[HH];
      const hH = (this._thinInstanceDataStorage.instancesCount + BH) * AH;
      let zH = rH;
      for (; zH < hH;) zH *= 2;
      if (!SH || rH != zH) {
        if (SH) {
          const HH = new Float32Array(zH);
          HH.set(SH, 0), SH = HH
        } else SH = new Float32Array(zH);
        LH ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", SH, !1), this._thinInstanceDataStorage.matrixData = SH, this._thinInstanceDataStorage.matrixBufferSize = zH, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", SH, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[HH]?.dispose(), this._userThinInstanceBuffersStorage.data[HH] = SH, this._userThinInstanceBuffersStorage.sizes[HH] = zH, this._userThinInstanceBuffersStorage.vertexBuffers[HH] = new tH.i(this.Iu(), SH, HH, !0, !1, AH, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[HH]))
      }
    }, hH.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, hH.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41738: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => xH,
      e: () => QH
    });
    var AH, rH, SH, hH, tH = LH(41290),
      zH = LH(41297),
      CH = LH(41319),
      EH = LH(37997),
      XH = LH(37963),
      GH = LH(41498),
      YH = LH(38012),
      uH = LH(41169);
    let QH = (() => {
      var HH;
      let BH, LH, AH, rH, SH, hH, YH, uH, QH, WH = GH.b,
        MH = [],
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        bH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [];
      return HH = class extends WH {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(BH) {
          this._billboardMode !== BH && (this._billboardMode = BH, this._cache.useBillboardPosition = 0 !== (this._billboardMode & HH.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(HH) {
          this._infiniteDistance !== HH && (this._infiniteDistance = HH)
        }
        constructor(BH) {
          let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(BH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new XH.o(0, 0, 1), this._up = new XH.o(0, 1, 0), this._right = new XH.o(1, 0, 0), this._position = (0, tH.k)(this, MH, XH.o.Zero()), this._rotation = ((0, tH.k)(this, xH), (0, tH.k)(this, vH, XH.o.Zero())), this._rotationQuaternion = ((0, tH.k)(this, PH), (0, tH.k)(this, TH, null)), this._scaling = ((0, tH.k)(this, UH), (0, tH.k)(this, VH, XH.o.One())), this._transformToBoneReferal = ((0, tH.k)(this, OH), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, tH.k)(this, bH, HH.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, tH.k)(this, kH), (0, tH.k)(this, mH, 1)), this._infiniteDistance = ((0, tH.k)(this, oH), (0, tH.k)(this, IH, !1)), this.ignoreNonUniformScaling = ((0, tH.k)(this, fH), (0, tH.k)(this, lH, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, tH.k)(this, KH), (0, tH.k)(this, cH, !1)), this._poseMatrix = ((0, tH.k)(this, eH), null), this._localMatrix = XH.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = XH.o.Zero(), this._absoluteScaling = XH.o.Zero(), this._absoluteRotationQuaternion = XH.f.Identity(), this._pivotMatrix = XH.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new EH.d, this._nonUniformScaling = !1, LH && this.yN().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(HH) {
          this._position = HH, this._markAsDirtyInternal()
        }
        isUsingPivotMatrix() {
          return this._usePivotMatrix
        }
        isUsingPostMultiplyPivotMatrix() {
          return this._postMultiplyPivotMatrix
        }
        get rotation() {
          return this._rotation
        }
        set rotation(HH) {
          this._rotation = HH, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get bX() {
          return this._scaling
        }
        set bX(HH) {
          this._scaling = HH, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(HH) {
          this._rotationQuaternion = HH, HH && this._rotation.IHH(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return XH.o.TransformNormalFromFloatsToRef(0, 0, this.yN().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return XH.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return XH.o.TransformNormalFromFloatsToRef(this.yN().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(HH) {
          return this._poseMatrix ? (this._poseMatrix.Tm(HH), this) : (this._poseMatrix = HH.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = XH.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const BH = this._cache;
          return this._billboardMode === BH.billboardMode && this._billboardMode === HH.BILLBOARDMODE_NONE && (!BH.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const HH = this._cache;
          HH.localMatrixUpdated = !1, HH.billboardMode = -1, HH.infiniteDistance = !1, HH.useBillboardPosition = !1
        }
        get absolutePosition() {
          return this.getAbsolutePosition()
        }
        get absoluteScaling() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteScaling
        }
        get absoluteRotationQuaternion() {
          return this._syncAbsoluteScalingAndRotation(), this._absoluteRotationQuaternion
        }
        setPreTransformMatrix(HH) {
          return this.setPivotMatrix(HH, !1)
        }
        setPivotMatrix(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Tm(HH), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = BH, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = XH.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            BH = arguments.length > 1 ? arguments[1] : void 0,
            LH = arguments.length > 2 ? arguments[2] : void 0;
          const AH = this.clone("Clone of " + (this.name || this.id), HH || this.parent, !0);
          AH && LH && LH(this, AH);
          for (const rH of this.getChildTransformNodes(!0)) rH.instantiateHierarchy(AH, BH, LH);
          return AH
        }
        oR() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.IHH(0), this._rotationQuaternion = this._rotationQuaternion || XH.f.Identity(), HH.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = HH, this._absolutePosition.SBH(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get JtH() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(HH) {
          if (!HH) return this;
          let BH, LH, AH;
          if (void 0 === HH.x) {
            if (arguments.length < 3) return this;
            BH = arguments[0], LH = arguments[1], AH = arguments[2]
          } else BH = HH.x, LH = HH.y, AH = HH.z;
          if (this.parent) {
            const HH = XH.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(HH), XH.o.TransformCoordinatesFromFloatsToRef(BH, LH, AH, HH, this.position)
          } else this.position.x = BH, this.position.y = LH, this.position.z = AH;
          return this._absolutePosition.Tm(HH), this
        }
        setPositionWithLocalVector(HH) {
          return this.computeWorldMatrix(), this.position = XH.o.TransformNormal(HH, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const HH = XH.l.Matrix[0];
          return this._localMatrix.invertToRef(HH), XH.o.TransformNormal(this.position, HH)
        }
        locallyTranslate(HH) {
          return this.computeWorldMatrix(!0), this.position = XH.o.TransformCoordinates(HH, this._localMatrix), this
        }
        lookAt(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const hH = HH._LookAtVectorCache,
            tH = 0 === SH ? this.position : this.getAbsolutePosition();
          if (BH.subtractToRef(tH, hH), this.setDirection(hH, LH, AH, rH), 1 === SH && this.parent)
            if (this.rotationQuaternion) {
              const HH = XH.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(HH);
              const BH = XH.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(BH), BH.invert(), HH.multiplyToRef(BH, HH), this.rotationQuaternion.fromRotationMatrix(HH)
            } else {
              const HH = XH.l.Quaternion[0];
              XH.f.FromEulerVectorToRef(this.rotation, HH);
              const BH = XH.l.Matrix[0];
              HH.toRotationMatrix(BH);
              const LH = XH.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(LH), LH.invert(), BH.multiplyToRef(LH, BH), HH.fromRotationMatrix(BH), HH.toEulerAnglesToRef(this.rotation)
            } return this
        }
        T_(HH) {
          const BH = XH.o.Zero();
          return this.getDirectionToRef(HH, BH), BH
        }
        getDirectionToRef(HH, BH) {
          return XH.o.TransformNormalToRef(HH, this.getWorldMatrix(), BH), this
        }
        setDirection(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const rH = -Math.atan2(HH.z, HH.x) + Math.PI / 2,
            SH = Math.sqrt(HH.x * HH.x + HH.z * HH.z),
            hH = -Math.atan2(HH.y, SH);
          return this.rotationQuaternion ? XH.f.RotationYawPitchRollToRef(rH + BH, hH + LH, AH, this.rotationQuaternion) : (this.rotation.x = hH + LH, this.rotation.y = rH + BH, this.rotation.z = AH), this
        }
        setPivotPoint(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.yN().getRenderId() && this.computeWorldMatrix(!0);
          const LH = this.getWorldMatrix();
          if (1 == BH) {
            const BH = XH.l.Matrix[0];
            LH.invertToRef(BH), HH = XH.o.TransformCoordinates(HH, BH)
          }
          return this.setPivotMatrix(XH.e.Translation(-HH.x, -HH.y, -HH.z), !0)
        }
        getPivotPoint() {
          const HH = XH.o.Zero();
          return this.getPivotPointToRef(HH), HH
        }
        getPivotPointToRef(HH) {
          return HH.x = -this._pivotMatrix.m[12], HH.y = -this._pivotMatrix.m[13], HH.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const HH = XH.o.Zero();
          return this.getAbsolutePivotPointToRef(HH), HH
        }
        getAbsolutePivotPointToRef(HH) {
          return this.getPivotPointToRef(HH), XH.o.TransformCoordinatesToRef(HH, this.getWorldMatrix(), HH), this
        }
        dLH(HH) {
          if (this._isDirty) return this;
          if (this._children)
            for (const BH of this._children) BH.dLH(HH);
          return super.dLH(HH)
        }
        setParent(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!BH && !this.parent) return this;
          const rH = XH.l.Quaternion[0],
            SH = XH.l.lu[0],
            hH = XH.l.lu[1],
            tH = XH.l.Matrix[1];
          XH.e.IdentityToRef(tH);
          const zH = XH.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let CH = this.rotationQuaternion;
          return CH || (CH = HH._TmpRotation, XH.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, CH)), XH.e.ComposeToRef(this.bX, CH, this.position, zH), this.parent && zH.multiplyToRef(this.parent.computeWorldMatrix(!0), zH), BH && (BH.computeWorldMatrix(!0).invertToRef(tH), zH.multiplyToRef(tH, zH)), zH.decompose(hH, rH, SH, LH ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Tm(rH) : rH.toEulerAnglesToRef(this.rotation), this.bX.Tm(hH), this.position.Tm(SH), this.parent = BH, AH && this.setPivotMatrix(XH.e.Identity()), this
        }
        addChild(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return HH.setParent(this, BH), this
        }
        removeChild(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return HH.parent !== this || HH.setParent(null, BH), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(HH) {
          return this._nonUniformScaling !== HH && (this._nonUniformScaling = HH, !0)
        }
        attachToBone(HH, BH) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = BH, this.parent = HH, HH.getSkeleton().prepare(!0), HH.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = HH ? this._currentParentWhenAttachingToBone : null, this) : (HH && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(BH, LH, AH) {
          let rH;
          if (BH.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.IHH(0)), AH && 0 !== AH) {
            if (this.parent) {
              const HH = this.parent.getWorldMatrix(),
                AH = XH.l.Matrix[0];
              HH.invertToRef(AH), BH = XH.o.TransformNormal(BH, AH), HH.determinant() < 0 && (LH *= -1)
            }
            rH = XH.f.RotationAxisToRef(BH, LH, HH._RotationAxisCache), rH.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else rH = XH.f.RotationAxisToRef(BH, LH, HH._RotationAxisCache), this.rotationQuaternion.multiplyToRef(rH, this.rotationQuaternion);
          return this
        }
        rotateAround(HH, BH, LH) {
          BH.normalize(), this.rotationQuaternion || (this.rotationQuaternion = XH.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.IHH(0));
          const AH = XH.l.lu[0],
            rH = XH.l.lu[1],
            SH = XH.l.lu[2],
            hH = XH.l.Quaternion[0],
            tH = XH.l.Matrix[0],
            zH = XH.l.Matrix[1],
            CH = XH.l.Matrix[2],
            EH = XH.l.Matrix[3];
          return HH.subtractToRef(this.position, AH), XH.e.TranslationToRef(AH.x, AH.y, AH.z, tH), XH.e.TranslationToRef(-AH.x, -AH.y, -AH.z, zH), XH.e.RotationAxisToRef(BH, LH, CH), zH.multiplyToRef(CH, EH), EH.multiplyToRef(tH, EH), EH.decompose(rH, hH, SH), this.position.addInPlace(SH), hH.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(HH, BH, LH) {
          const AH = HH.scale(BH);
          if (LH && 0 !== LH) this.setAbsolutePosition(this.getAbsolutePosition().add(AH));
          else {
            const HH = this.getPositionExpressedInLocalSpace().add(AH);
            this.setPositionWithLocalVector(HH)
          }
          return this
        }
        addRotation(HH, BH, LH) {
          let AH;
          this.rotationQuaternion ? AH = this.rotationQuaternion : (AH = XH.l.Quaternion[1], XH.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, AH));
          const rH = XH.l.Quaternion[0];
          return XH.f.RotationYawPitchRollToRef(BH, HH, LH, rH), AH.multiplyInPlace(rH), this.rotationQuaternion || AH.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== HH.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const AH = this.yN().getRenderId();
          if (!this._isDirty && !BH && (this._currentRenderId === AH || this.isSynchronized())) return this._currentRenderId = AH, this._worldMatrix;
          LH = LH || this.yN().activeCamera, this._updateCache();
          const rH = this._cache;
          rH.pivotMatrixUpdated = !1, rH.billboardMode = this.billboardMode, rH.infiniteDistance = this.infiniteDistance, rH.parent = this._parentNode, this._currentRenderId = AH, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const SH = this._getEffectiveParent(),
            hH = HH._TmpScaling;
          let tH, zH = this._position;
          if (this._infiniteDistance && !this.parent && LH) {
            const BH = LH.getWorldMatrix().m;
            zH = HH._TmpTranslation, zH.SBH(this._position.x + BH[12], this._position.y + BH[13], this._position.z + BH[14])
          }
          if (hH.SBH(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, tH = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(XH.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.SBH(0, 0, 0))
            }
          } else tH = HH._TmpRotation, XH.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, tH);
          if (this._usePivotMatrix) {
            const HH = XH.l.Matrix[1];
            XH.e.ScalingToRef(hH.x, hH.y, hH.z, HH);
            const BH = XH.l.Matrix[0];
            tH.toRotationMatrix(BH), this._pivotMatrix.multiplyToRef(HH, XH.l.Matrix[4]), XH.l.Matrix[4].multiplyToRef(BH, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(zH.x, zH.y, zH.z)
          } else XH.e.ComposeToRef(hH, tH, zH, this._localMatrix);
          if (SH && SH.getWorldMatrix) {
            if (BH && SH.computeWorldMatrix(BH), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const HH = this.parent;
                HH.getSkeleton().prepare(), HH.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), XH.l.Matrix[7])
              } else XH.l.Matrix[7].Tm(SH.getWorldMatrix());
              const BH = XH.l.lu[5],
                LH = XH.l.lu[6],
                AH = XH.l.Quaternion[0];
              XH.l.Matrix[7].decompose(LH, AH, BH), XH.e.ScalingToRef(LH.x, LH.y, LH.z, XH.l.Matrix[7]), XH.l.Matrix[7].setTranslation(BH), HH.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(AH, BH), this._localMatrix.setTranslation(BH)), this._localMatrix.multiplyToRef(XH.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const HH = this.parent;
              HH.getSkeleton().prepare(), this._localMatrix.multiplyToRef(HH.getFinalMatrix(), XH.l.Matrix[6]), XH.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(SH.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Tm(this._localMatrix);
          if (LH && this.billboardMode)
            if (rH.useBillboardPosition) {
              const BH = XH.l.lu[0];
              this._worldMatrix.getTranslationToRef(BH);
              const AH = LH.globalPosition;
              this._worldMatrix.invertToRef(XH.l.Matrix[1]);
              const rH = XH.l.lu[1];
              XH.o.TransformCoordinatesToRef(AH, XH.l.Matrix[1], rH), rH.normalize();
              const SH = -Math.atan2(rH.z, rH.x) + Math.PI / 2,
                hH = Math.sqrt(rH.x * rH.x + rH.z * rH.z),
                tH = -Math.atan2(rH.y, hH);
              if (XH.f.RotationYawPitchRollToRef(SH, tH, 0, XH.l.Quaternion[0]), (this.billboardMode & HH.BILLBOARDMODE_ALL) !== HH.BILLBOARDMODE_ALL) {
                const BH = XH.l.lu[1];
                XH.l.Quaternion[0].toEulerAnglesToRef(BH), (this.billboardMode & HH.BILLBOARDMODE_X) !== HH.BILLBOARDMODE_X && (BH.x = 0), (this.billboardMode & HH.BILLBOARDMODE_Y) !== HH.BILLBOARDMODE_Y && (BH.y = 0), (this.billboardMode & HH.BILLBOARDMODE_Z) !== HH.BILLBOARDMODE_Z && (BH.z = 0), XH.e.RotationYawPitchRollToRef(BH.y, BH.x, BH.z, XH.l.Matrix[0])
              } else XH.e.FromQuaternionToRef(XH.l.Quaternion[0], XH.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(XH.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(XH.l.lu[0])
            } else {
              const BH = XH.l.lu[0];
              this._worldMatrix.getTranslationToRef(BH), XH.l.Matrix[1].Tm(LH.getViewMatrix());
              const AH = this.yN().useRightHandedSystem;
              if (AH && XH.l.Matrix[1].multiplyToRef(HH._TmpRHRestore, XH.l.Matrix[1]), XH.l.Matrix[1].setTranslationFromFloats(0, 0, 0), XH.l.Matrix[1].invertToRef(XH.l.Matrix[0]), (this.billboardMode & HH.BILLBOARDMODE_ALL) !== HH.BILLBOARDMODE_ALL) {
                XH.l.Matrix[0].decompose(void 0, XH.l.Quaternion[0], void 0);
                const BH = XH.l.lu[1];
                XH.l.Quaternion[0].toEulerAnglesToRef(BH), (this.billboardMode & HH.BILLBOARDMODE_X) !== HH.BILLBOARDMODE_X && (BH.x = 0), (this.billboardMode & HH.BILLBOARDMODE_Y) !== HH.BILLBOARDMODE_Y && (BH.y = 0), (this.billboardMode & HH.BILLBOARDMODE_Z) !== HH.BILLBOARDMODE_Z && (BH.z = 0), AH && (BH.y += Math.PI), XH.e.RotationYawPitchRollToRef(BH.y, BH.x, BH.z, XH.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(XH.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(XH.l.lu[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : SH && SH._nonUniformScaling ? this._updateNonUniformScalingState(SH._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.SBH(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = XH.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), HH) {
            const HH = this.getChildren();
            for (let BH = 0; BH < HH.length; ++BH) {
              const LH = HH[BH];
              if (LH) {
                LH.computeWorldMatrix();
                const HH = XH.l.Matrix[0];
                LH._localMatrix.multiplyToRef(this._localMatrix, HH);
                const BH = XH.l.Quaternion[0];
                HH.decompose(LH.bX, BH, LH.position), LH.rotationQuaternion ? LH.rotationQuaternion.Tm(BH) : BH.toEulerAnglesToRef(LH.rotation)
              }
            }
          }
          this.bX.SBH(1, 1, 1), this.position.SBH(0, 0, 0), this.rotation.SBH(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = XH.f.Identity()), this._worldMatrix = XH.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(HH) {
          return this.onAfterWorldMatrixUpdateObservable.add(HH), this
        }
        unregisterAfterWorldMatrixUpdate(HH) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(HH), this
        }
        getPositionInCameraSpace() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH || (HH = this.yN().activeCamera), XH.o.TransformCoordinates(this.getAbsolutePosition(), HH.getViewMatrix())
        }
        getDistanceToCamera() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return HH || (HH = this.yN().activeCamera), this.getAbsolutePosition().subtract(HH.globalPosition).length()
        }
        clone(BH, LH, AH) {
          const rH = CH.c.Clone((() => new HH(BH, this.yN())), this);
          if (rH.name = BH, rH.id = BH, LH && (rH.parent = LH), !AH) {
            const HH = this.getDescendants(!0);
            for (let LH = 0; LH < HH.length; LH++) {
              const AH = HH[LH];
              AH.clone && AH.clone(BH + "." + AH.name, rH)
            }
          }
          return rH
        }
        serialize(HH) {
          const BH = CH.c.Serialize(this, HH);
          return BH.type = this.getClassName(), BH.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(BH), BH.localMatrix = this.getPivotMatrix().xrH(), BH.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (BH.oR = !0), CH.c.AppendSerializedAnimations(this, BH), BH.rW = this.serializeAnimationRanges(), BH
        }
        getChildTransformNodes(BH, LH) {
          const AH = [];
          return this._getDescendants(AH, BH, (BH => (!LH || LH(BH)) && BH instanceof HH)), AH
        }
        dispose(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.yN().stopAnimation(this), this.yN().removeTransformNode(this), this._parentContainer) {
            const HH = this._parentContainer.transformNodes.indexOf(this);
            HH > -1 && this._parentContainer.transformNodes.splice(HH, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), HH) {
            const HH = this.getChildTransformNodes(!0);
            for (const BH of HH) BH.parent = null, BH.computeWorldMatrix(!0)
          }
          super.dispose(HH, BH)
        }
        normalizeToUnitCube() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0,
            AH = null,
            rH = null;
          BH && (this.rotationQuaternion ? (rH = this.rotationQuaternion.clone(), this.rotationQuaternion.SBH(0, 0, 0, 1)) : this.rotation && (AH = this.rotation.clone(), this.rotation.SBH(0, 0, 0)));
          const SH = this.getHierarchyBoundingVectors(HH, LH),
            hH = SH.max.subtract(SH.min),
            tH = Math.max(hH.x, hH.y, hH.z);
          if (0 === tH) return this;
          const zH = 1 / tH;
          return this.bX.scaleInPlace(zH), BH && (this.rotationQuaternion && rH ? this.rotationQuaternion.Tm(rH) : this.rotation && AH && this.rotation.Tm(AH)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const CH = "function" === typeof Symbol && Symbol.metadata ? Object.create(WH[Symbol.metadata] ?? null) : void 0;
        BH = [(0, zH.F)("position")], LH = [(0, zH.F)("rotation")], AH = [(0, zH.y)("rotationQuaternion")], rH = [(0, zH.F)("bX")], SH = [(0, zH.H)("billboardMode")], hH = [(0, zH.H)()], YH = [(0, zH.H)("infiniteDistance")], uH = [(0, zH.H)()], QH = [(0, zH.H)()], (0, tH.g)(null, null, BH, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: HH => "_position" in HH,
            get: HH => HH._position,
            set: (HH, BH) => {
              HH._position = BH
            }
          },
          metadata: CH
        }, MH, xH), (0, tH.g)(null, null, LH, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: HH => "_rotation" in HH,
            get: HH => HH._rotation,
            set: (HH, BH) => {
              HH._rotation = BH
            }
          },
          metadata: CH
        }, vH, PH), (0, tH.g)(null, null, AH, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: HH => "_rotationQuaternion" in HH,
            get: HH => HH._rotationQuaternion,
            set: (HH, BH) => {
              HH._rotationQuaternion = BH
            }
          },
          metadata: CH
        }, TH, UH), (0, tH.g)(null, null, rH, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "_scaling" in HH,
            get: HH => HH._scaling,
            set: (HH, BH) => {
              HH._scaling = BH
            }
          },
          metadata: CH
        }, VH, OH), (0, tH.g)(null, null, SH, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_billboardMode" in HH,
            get: HH => HH._billboardMode,
            set: (HH, BH) => {
              HH._billboardMode = BH
            }
          },
          metadata: CH
        }, bH, kH), (0, tH.g)(null, null, hH, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: HH => "scalingDeterminant" in HH,
            get: HH => HH.scalingDeterminant,
            set: (HH, BH) => {
              HH.scalingDeterminant = BH
            }
          },
          metadata: CH
        }, mH, oH), (0, tH.g)(null, null, YH, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: HH => "_infiniteDistance" in HH,
            get: HH => HH._infiniteDistance,
            set: (HH, BH) => {
              HH._infiniteDistance = BH
            }
          },
          metadata: CH
        }, IH, fH), (0, tH.g)(null, null, uH, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: HH => "ignoreNonUniformScaling" in HH,
            get: HH => HH.ignoreNonUniformScaling,
            set: (HH, BH) => {
              HH.ignoreNonUniformScaling = BH
            }
          },
          metadata: CH
        }, lH, KH), (0, tH.g)(null, null, QH, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: HH => "reIntegrateRotationIntoRotationQuaternion" in HH,
            get: HH => HH.reIntegrateRotationIntoRotationQuaternion,
            set: (HH, BH) => {
              HH.reIntegrateRotationIntoRotationQuaternion = BH
            }
          },
          metadata: CH
        }, cH, eH), CH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CH
        })
      })(), HH.BILLBOARDMODE_NONE = 0, HH.BILLBOARDMODE_X = 1, HH.BILLBOARDMODE_Y = 2, HH.BILLBOARDMODE_Z = 4, HH.BILLBOARDMODE_ALL = 7, HH.BILLBOARDMODE_USE_POSITION = 128, HH.BillboardUseParentOrientation = !1, HH._TmpRotation = XH.f.Zero(), HH._TmpScaling = XH.o.Zero(), HH._TmpTranslation = XH.o.Zero(), HH._TmpRHRestore = XH.e.Scaling(1, 1, -1), HH._LookAtVectorCache = new XH.o(0, 0, 0), HH._RotationAxisCache = new XH.f, HH
    })();

    function WH(HH, BH, LH) {
      const AH = CH.c.Parse((() => new QH(HH.name, BH)), HH, BH, LH);
      if (HH.localMatrix ? AH.setPreTransformMatrix(XH.e.FromArray(HH.localMatrix)) : HH.pivotMatrix && AH.setPivotMatrix(XH.e.FromArray(HH.pivotMatrix)), AH.vI(HH.isEnabled), AH._waitingParsedUniqueId = HH.uniqueId, void 0 !== HH.parentId && (AH._waitingParentId = HH.parentId), void 0 !== HH.parentInstanceIndex && (AH._waitingParentInstanceIndex = HH.parentInstanceIndex), HH.oR && (AH._waitingFreezeWorldMatrix = HH.oR), HH.animations) {
        for (let BH = 0; BH < HH.animations.length; BH++) {
          const LH = HH.animations[BH],
            rH = (0, YH.b)("BABYLON.Animation");
          rH && AH.animations.push(rH.Parse(LH))
        }
        GH.b.ParseAnimationRanges(AH, HH, BH)
      }
      return HH.autoAnimate && BH.beginAnimation(AH, HH.autoAnimateFrom, HH.autoAnimateTo, HH.autoAnimateLoop, HH.autoAnimateSpeed || 1), AH
    }
    let MH = !1;

    function xH() {
      MH || (MH = !0, QH.Parse = WH)
    }(AH = QH.prototype).xJ ?? (AH.xJ = (0, uH.f)("TransformNode", "xJ")), (rH = QH.prototype).applyImpulse ?? (rH.applyImpulse = (0, uH.f)("TransformNode", "applyImpulse")), (SH = QH.prototype).applyAngularImpulse ?? (SH.applyAngularImpulse = (0, uH.f)("TransformNode", "applyAngularImpulse")), (hH = QH.prototype).applyTorque ?? (hH.applyTorque = (0, uH.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(QH.prototype, "physicsBody") || Object.defineProperty(QH.prototype, "physicsBody", (0, uH.e)("TransformNode", "physicsBody"))
  },
  41697: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      try {
        const AH = HH.next();
        AH.done ? BH(AH) : AH.value ? AH.value.then((() => {
          AH.value = void 0, BH(AH)
        }), LH) : BH(AH)
      } catch (AH) {
        LH(AH)
      }
    }

    function rH() {
      let HH, BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (LH, rH, SH) => {
        const hH = performance.now();
        void 0 === HH || hH - HH > BH ? (HH = hH, setTimeout((() => {
          AH(LH, rH, SH)
        }), 0)) : AH(LH, rH, SH)
      }
    }

    function SH(HH, BH, LH, AH, rH) {
      const SH = () => {
        let hH;
        const tH = HH => {
          HH.done ? LH(HH.value) : void 0 === hH ? hH = !0 : SH()
        };
        do {
          hH = void 0, rH && rH.aborted ? AH(new Error("Aborted")) : BH(HH, tH, AH), void 0 === hH && (hH = !1)
        } while (hH)
      };
      SH()
    }

    function hH(HH, BH) {
      let LH;
      return SH(HH, AH, (HH => LH = HH), (HH => {
        throw HH
      }), BH), LH
    }
    async function tH(HH, BH, LH) {
      return await new Promise(((AH, rH) => {
        SH(HH, BH, AH, rH, LH)
      }))
    }

    function zH(HH, BH) {
      return function() {
        return hH(HH(...arguments), BH)
      }
    }
    LH.d(BH, {
      c: () => rH,
      g: () => zH,
      h: () => tH,
      k: () => hH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);
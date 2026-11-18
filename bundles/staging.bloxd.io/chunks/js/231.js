export const id = 231;
export const ids = [231];
export const modules = {
  38986: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => fJ,
      h: () => vJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38890),
      XJ = ZJ(36200),
      AJ = ZJ(36174),
      qJ = ZJ(38989),
      jJ = ZJ(37660),
      YJ = ZJ(36216),
      hJ = ZJ(38677),
      DJ = ZJ(37100),
      sJ = ZJ(36742),
      nJ = ZJ(38759),
      GJ = ZJ(38822);
    let fJ = (() => {
      var JJ;
      let cJ, ZJ, YJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ = qJ.b,
        gJ = [],
        HJ = [],
        PJ = [],
        kJ = [],
        pJ = [],
        dJ = [],
        zJ = [],
        NJ = [],
        OJ = [],
        TJ = [],
        CJ = [],
        uJ = [],
        iJ = [],
        RJ = [],
        LJ = [],
        aJ = [],
        BJ = [],
        tJ = [],
        oJ = [],
        lJ = [],
        Jc = [],
        cc = [],
        Zc = [],
        Fc = [],
        Uc = [];
      return JJ = class extends WJ {
        get position() {
          return this._position
        }
        set position(JJ) {
          this._position = JJ
        }
        set upVector(JJ) {
          this._upVector = JJ
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let cJ, ZJ;
          if (this.mode === JJ.PERSPECTIVE_CAMERA) this.fovMode === JJ.FOVMODE_VERTICAL_FIXED ? (ZJ = 2 * this.minZ * Math.tan(this.fov / 2), cJ = this.gn().getAspectRatio(this) * ZJ) : (cJ = 2 * this.minZ * Math.tan(this.fov / 2), ZJ = cJ / this.gn().getAspectRatio(this));
          else {
            const JJ = this.gn().getRenderWidth() / 2,
              FJ = this.gn().getRenderHeight() / 2;
            cJ = (this.orthoRight ?? JJ) - (this.orthoLeft ?? -JJ), ZJ = (this.orthoTop ?? FJ) - (this.orthoBottom ?? -FJ)
          }
          return cJ * ZJ
        }
        set orthoLeft(JJ) {
          this._orthoLeft = JJ;
          for (const cJ of this._rigCameras) cJ.orthoLeft = JJ
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(JJ) {
          this._orthoRight = JJ;
          for (const cJ of this._rigCameras) cJ.orthoRight = JJ
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(JJ) {
          this._orthoBottom = JJ;
          for (const cJ of this._rigCameras) cJ.orthoBottom = JJ
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(JJ) {
          this._orthoTop = JJ;
          for (const cJ of this._rigCameras) cJ.orthoTop = JJ
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(cJ / (2 * JJ))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(JJ) {
          this._baseInertia = JJ
        }
        set mode(JJ) {
          this._mode = JJ;
          for (const cJ of this._rigCameras) cJ.mode = JJ
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(cJ, ZJ, UJ) {
          let qJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, nJ.b)(), super(cJ, UJ, !1), this.inputs = (0, FJ.e)(this, gJ), this._position = (0, FJ.e)(this, HJ, AJ.j.Zero()), this._upVector = ((0, FJ.e)(this, PJ), (0, FJ.e)(this, kJ, AJ.j.Up())), this.oblique = ((0, FJ.e)(this, pJ), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, FJ.e)(this, dJ, .8), this.projectionPlaneTilt = ((0, FJ.e)(this, zJ), (0, FJ.e)(this, NJ, 0)), this.minZ = ((0, FJ.e)(this, OJ), (0, FJ.e)(this, TJ, 1)), this.maxZ = ((0, FJ.e)(this, CJ), (0, FJ.e)(this, uJ, 1e4)), this._baseInertia = ((0, FJ.e)(this, iJ), .9), this._mode = JJ.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new DJ.c(0, 0, 1, 1), this.layerMask = (0, FJ.e)(this, RJ, 268435455), this.fovMode = ((0, FJ.e)(this, LJ), (0, FJ.e)(this, aJ, JJ.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, FJ.e)(this, BJ), (0, FJ.e)(this, tJ, JJ.RIG_MODE_NONE)), this.interaxialDistance = ((0, FJ.e)(this, oJ), (0, FJ.e)(this, lJ, void 0)), this.isStereoscopicSideBySide = ((0, FJ.e)(this, Jc), (0, FJ.e)(this, cc, void 0)), this.ignoreCameraMaxZ = ((0, FJ.e)(this, Zc), (0, FJ.e)(this, Fc, !1)), this.customRenderTargets = ((0, FJ.e)(this, Uc), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new XJ.c, this.onProjectionMatrixChangedObservable = new XJ.c, this.onAfterCheckInputsObservable = new XJ.c, this.onRestoreStateObservable = new XJ.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new AJ.b, this._postProcesses = new Array, this._activeMeshes = new eJ.c(256), this._globalPosition = AJ.j.Zero(), this._computedViewMatrix = AJ.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = AJ.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = AJ.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Qy().defaultCameraLayerMask, this.Qy().addCamera(this), qJ && !this.Qy().activeCamera && (this.Qy().activeCamera = this), this.position = ZJ, this.renderPassId = this.Qy().gn().createRenderPassId(`Camera ${cJ}`)
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
          return "yf"
        }
        toString(JJ) {
          let cJ = "Name: " + this.name;
          if (cJ += ", type: " + this.getClassName(), this.animations)
            for (let ZJ = 0; ZJ < this.animations.length; ZJ++) cJ += ", animation[0]: " + this.animations[ZJ].toString(JJ);
          return cJ
        }
        applyVerticalCorrection() {
          const JJ = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -JJ.x : JJ.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(JJ) {
          return -1 !== this._activeMeshes.indexOf(JJ)
        }
        isReady() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (JJ)
            for (const cJ of this._postProcesses)
              if (cJ && !cJ.isReady()) return !1;
          return super.isReady(JJ)
        }
        _initCache() {
          super._initCache(), this._cache.position = new AJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new AJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(JJ) {
          JJ || super._updateCache(), this._cache.position.rZJ(this.position), this._cache.upVector.rZJ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const cJ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ZJ = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === cJ;
          if (!ZJ) return !1;
          const FJ = this.gn();
          return this.mode === JJ.PERSPECTIVE_CAMERA ? ZJ = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === FJ.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ZJ = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === FJ.getRenderWidth() && this._cache.renderHeight === FJ.getRenderHeight(), this.oblique && (ZJ = ZJ && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ZJ
        }
        attachControl(JJ, cJ) {}
        detachControl(JJ) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== JJ.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let JJ = 0; JJ < this._postProcesses.length; JJ++)
            if (null !== this._postProcesses[JJ]) return this._postProcesses[JJ];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const JJ = this._getFirstPostProcess();
          JJ && JJ.markTextureDirty();
          for (let cJ = 0, ZJ = this._rigCameras.length; cJ < ZJ; cJ++) {
            const JJ = this._rigCameras[cJ],
              ZJ = JJ._rigPostProcess;
            if (ZJ) {
              "pass" === ZJ.getEffectName() && (JJ.isIntermediate = 0 === this._postProcesses.length), JJ._postProcesses = this._postProcesses.slice(0).concat(ZJ), ZJ.markTextureDirty()
            } else JJ._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !JJ.isReusable() && this._postProcesses.indexOf(JJ) > -1 ? (jJ.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == cJ || cJ < 0 ? this._postProcesses.push(JJ) : null === this._postProcesses[cJ] ? this._postProcesses[cJ] = JJ : this._postProcesses.splice(cJ, 0, JJ), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.ycJ(), this._postProcesses.indexOf(JJ))
        }
        detachPostProcess(JJ) {
          const cJ = this._postProcesses.indexOf(JJ); - 1 !== cJ && (this._postProcesses[cJ] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.ycJ(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return AJ.b.Identity()
        }
        getViewMatrix(JJ) {
          return !JJ && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Qy().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(JJ) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== JJ && (this._projectionMatrix = JJ)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(cJ) {
          if (this._doNotComputeProjectionMatrix || !cJ && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ZJ = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ZJ, this._refreshFrustumPlanes = !0;
          const FJ = this.gn(),
            UJ = this.Qy(),
            eJ = FJ.LZJ;
          if (this.mode === JJ.PERSPECTIVE_CAMERA) {
            let cJ;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = FJ.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), cJ = UJ.useRightHandedSystem ? AJ.b.PerspectiveFovRHToRef : AJ.b.PerspectiveFovLHToRef, cJ(this.fov, FJ.getAspectRatio(this), eJ ? ZJ : this.minZ, eJ ? this.minZ : ZJ, this._projectionMatrix, this.fovMode === JJ.FOVMODE_VERTICAL_FIXED, FJ.isNDCHalfZRange, this.projectionPlaneTilt, eJ)
          } else {
            const JJ = FJ.getRenderWidth() / 2,
              cJ = FJ.getRenderHeight() / 2;
            UJ.useRightHandedSystem ? this.oblique ? AJ.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -JJ, this.orthoRight ?? JJ, this.orthoBottom ?? -cJ, this.orthoTop ?? cJ, eJ ? ZJ : this.minZ, eJ ? this.minZ : ZJ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, FJ.isNDCHalfZRange) : AJ.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -JJ, this.orthoRight ?? JJ, this.orthoBottom ?? -cJ, this.orthoTop ?? cJ, eJ ? ZJ : this.minZ, eJ ? this.minZ : ZJ, this._projectionMatrix, FJ.isNDCHalfZRange) : this.oblique ? AJ.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -JJ, this.orthoRight ?? JJ, this.orthoBottom ?? -cJ, this.orthoTop ?? cJ, eJ ? ZJ : this.minZ, eJ ? this.minZ : ZJ, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, FJ.isNDCHalfZRange) : AJ.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -JJ, this.orthoRight ?? JJ, this.orthoBottom ?? -cJ, this.orthoTop ?? cJ, eJ ? ZJ : this.minZ, eJ ? this.minZ : ZJ, this._projectionMatrix, FJ.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = FJ.getRenderWidth(), this._cache.renderHeight = FJ.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(JJ) {
          return (this.radius || (this.target ? AJ.j.Distance(this.position, this.target) : this.position.length())) + JJ
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? sJ.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = sJ.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), cJ && this.rigCameras.length > 0) {
            let cJ = !1;
            for (const ZJ of this.rigCameras) ZJ._updateFrustumPlanes(), cJ = cJ || JJ.isInFrustum(ZJ._frustumPlanes);
            return cJ
          }
          return JJ.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(JJ) {
          return this._updateFrustumPlanes(), JJ.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, hJ.m)("Ray")
        }
        getForwardRayToRef(JJ) {
          throw (0, hJ.m)("Ray")
        }
        dispose(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Qy().stopAnimation(this), this.Qy().removeCamera(this); this._rigCameras.length > 0;) {
            const JJ = this._rigCameras.pop();
            JJ && JJ.dispose()
          }
          if (this._parentContainer) {
            const JJ = this._parentContainer.cameras.indexOf(this);
            JJ > -1 && this._parentContainer.cameras.splice(JJ, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== JJ.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let JJ = this._postProcesses.length;
            for (; --JJ >= 0;) {
              const cJ = this._postProcesses[JJ];
              cJ && cJ.dispose(this)
            }
          }
          let FJ = this.customRenderTargets.length;
          for (; --FJ >= 0;) this.customRenderTargets[FJ].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Qy().gn().releaseRenderPassId(this.renderPassId), super.dispose(cJ, ZJ)
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
        setCameraRigMode(cJ, ZJ) {
          if (this.cameraRigMode !== cJ) {
            for (; this._rigCameras.length > 0;) {
              const JJ = this._rigCameras.pop();
              JJ && JJ.dispose()
            }
            if (this.cameraRigMode = cJ, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ZJ.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== JJ.RIG_MODE_NONE) {
              const JJ = this.createRigCamera(this.name + "_L", 0);
              JJ && (JJ._isLeftCamera = !0);
              const cJ = this.createRigCamera(this.name + "_R", 1);
              cJ && (cJ._isRightCamera = !0), JJ && cJ && (this._rigCameras.push(JJ), this._rigCameras.push(cJ))
            }
            this._setRigMode(ZJ), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(JJ) {}
        _getVRProjectionMatrix() {
          return AJ.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.gn().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(JJ, cJ) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[JJ] = cJ, "interaxialDistance" === JJ && (this._cameraRigParams.stereoHalfAngle = cJ / .0637 * (Math.PI / 180))
        }
        createRigCamera(JJ, cJ) {
          return null
        }
        _updateRigCameras() {
          for (let JJ = 0; JJ < this._rigCameras.length; JJ++) this._rigCameras[JJ].minZ = this.minZ, this._rigCameras[JJ].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[JJ].fov = this.fov, this._rigCameras[JJ].upVector.rZJ(this.upVector);
          this.cameraRigMode === JJ.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const JJ = GJ.c.Serialize(this);
          return JJ.uniqueId = this.uniqueId, JJ.type = this.getClassName(), this.parent && this.parent._serializeAsParent(JJ), this.inputs && this.inputs.serialize(JJ), GJ.c.AppendSerializedAnimations(this, JJ), JJ.ws = this.serializeAnimationRanges(), JJ.isEnabled = this.isEnabled(), JJ
        }
        clone(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FJ = GJ.c.Clone(JJ.GetConstructorFromName(this.getClassName(), cJ, this.Qy(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return FJ.name = cJ, FJ.parent = ZJ, this.onClonedObservable.notifyObservers(FJ), FJ
        }
        yR(JJ) {
          const cJ = AJ.j.Zero();
          return this.getDirectionToRef(JJ, cJ), cJ
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(JJ, cJ) {
          AJ.j.TransformNormalToRef(JJ, this.getWorldMatrix(), cJ)
        }
        static GetConstructorFromName(cJ, ZJ, FJ) {
          let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            eJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const XJ = qJ.b.Construct(cJ, ZJ, FJ, {
            interaxial_distance: UJ,
            isStereoscopicSideBySide: eJ
          });
          return XJ || (() => JJ._CreateDefaultParsedCamera(ZJ, FJ))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let JJ = this.Qy().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (JJ *= -1), JJ
        }
      }, (() => {
        const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(WJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, UJ.E)("position")], ZJ = [(0, UJ.E)("upVector")], YJ = [(0, UJ.F)()], fJ = [(0, UJ.F)()], xJ = [(0, UJ.F)()], rJ = [(0, UJ.F)()], vJ = [(0, UJ.F)()], mJ = [(0, UJ.F)()], QJ = [(0, UJ.F)()], EJ = [(0, UJ.F)()], VJ = [(0, UJ.F)()], KJ = [(0, UJ.F)()], yJ = [(0, UJ.F)()], SJ = [(0, UJ.F)()], IJ = [(0, UJ.F)()], MJ = [(0, UJ.F)()], bJ = [(0, UJ.F)()], wJ = [(0, UJ.F)()], (0, FJ.d)(JJ, null, YJ, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: JJ => "orthoLeft" in JJ,
            get: JJ => JJ.orthoLeft
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(JJ, null, fJ, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: JJ => "orthoRight" in JJ,
            get: JJ => JJ.orthoRight
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(JJ, null, xJ, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: JJ => "orthoBottom" in JJ,
            get: JJ => JJ.orthoBottom
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(JJ, null, rJ, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: JJ => "orthoTop" in JJ,
            get: JJ => JJ.orthoTop
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(JJ, null, VJ, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: JJ => "inertia" in JJ,
            get: JJ => JJ.inertia
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(JJ, null, KJ, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "mode" in JJ,
            get: JJ => JJ.mode
          },
          metadata: eJ
        }, null, gJ), (0, FJ.d)(null, null, cJ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_position" in JJ,
            get: JJ => JJ._position,
            set: (JJ, cJ) => {
              JJ._position = cJ
            }
          },
          metadata: eJ
        }, HJ, PJ), (0, FJ.d)(null, null, ZJ, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_upVector" in JJ,
            get: JJ => JJ._upVector,
            set: (JJ, cJ) => {
              JJ._upVector = cJ
            }
          },
          metadata: eJ
        }, kJ, pJ), (0, FJ.d)(null, null, vJ, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: JJ => "fov" in JJ,
            get: JJ => JJ.fov,
            set: (JJ, cJ) => {
              JJ.fov = cJ
            }
          },
          metadata: eJ
        }, dJ, zJ), (0, FJ.d)(null, null, mJ, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: JJ => "projectionPlaneTilt" in JJ,
            get: JJ => JJ.projectionPlaneTilt,
            set: (JJ, cJ) => {
              JJ.projectionPlaneTilt = cJ
            }
          },
          metadata: eJ
        }, NJ, OJ), (0, FJ.d)(null, null, QJ, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: JJ => "minZ" in JJ,
            get: JJ => JJ.minZ,
            set: (JJ, cJ) => {
              JJ.minZ = cJ
            }
          },
          metadata: eJ
        }, TJ, CJ), (0, FJ.d)(null, null, EJ, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: JJ => "maxZ" in JJ,
            get: JJ => JJ.maxZ,
            set: (JJ, cJ) => {
              JJ.maxZ = cJ
            }
          },
          metadata: eJ
        }, uJ, iJ), (0, FJ.d)(null, null, yJ, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: JJ => "layerMask" in JJ,
            get: JJ => JJ.layerMask,
            set: (JJ, cJ) => {
              JJ.layerMask = cJ
            }
          },
          metadata: eJ
        }, RJ, LJ), (0, FJ.d)(null, null, SJ, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "fovMode" in JJ,
            get: JJ => JJ.fovMode,
            set: (JJ, cJ) => {
              JJ.fovMode = cJ
            }
          },
          metadata: eJ
        }, aJ, BJ), (0, FJ.d)(null, null, IJ, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "cameraRigMode" in JJ,
            get: JJ => JJ.cameraRigMode,
            set: (JJ, cJ) => {
              JJ.cameraRigMode = cJ
            }
          },
          metadata: eJ
        }, tJ, oJ), (0, FJ.d)(null, null, MJ, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "interaxialDistance" in JJ,
            get: JJ => JJ.interaxialDistance,
            set: (JJ, cJ) => {
              JJ.interaxialDistance = cJ
            }
          },
          metadata: eJ
        }, lJ, Jc), (0, FJ.d)(null, null, bJ, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isStereoscopicSideBySide" in JJ,
            get: JJ => JJ.isStereoscopicSideBySide,
            set: (JJ, cJ) => {
              JJ.isStereoscopicSideBySide = cJ
            }
          },
          metadata: eJ
        }, cc, Zc), (0, FJ.d)(null, null, wJ, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ignoreCameraMaxZ" in JJ,
            get: JJ => JJ.ignoreCameraMaxZ,
            set: (JJ, cJ) => {
              JJ.ignoreCameraMaxZ = cJ
            }
          },
          metadata: eJ
        }, Fc, Uc), eJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eJ
        })
      })(), JJ._CreateDefaultParsedCamera = (JJ, cJ) => {
        throw (0, hJ.m)("UniversalCamera")
      }, JJ.PERSPECTIVE_CAMERA = 0, JJ.ORTHOGRAPHIC_CAMERA = 1, JJ.FOVMODE_VERTICAL_FIXED = 0, JJ.FOVMODE_HORIZONTAL_FIXED = 1, JJ.RIG_MODE_NONE = 0, JJ.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, JJ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, JJ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, JJ.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, JJ.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, JJ.RIG_MODE_VR = 20, JJ.RIG_MODE_CUSTOM = 22, JJ.ForceAttachControlToAlwaysPreventDefault = !1, JJ
    })();

    function xJ(JJ, cJ) {
      const ZJ = JJ.type,
        FJ = fJ.GetConstructorFromName(ZJ, JJ.name, cJ, JJ.interaxial_distance, JJ.isStereoscopicSideBySide),
        UJ = GJ.c.Parse(FJ, JJ, cJ);
      if (void 0 !== JJ.parentId && (UJ._waitingParentId = JJ.parentId), void 0 !== JJ.parentInstanceIndex && (UJ._waitingParentInstanceIndex = JJ.parentInstanceIndex), UJ.inputs && (UJ.inputs.parse(JJ), UJ._setupInputs()), JJ.upVector && (UJ.upVector = AJ.j.FromArray(JJ.upVector)), UJ.setPosition && (UJ.position.K9(0, 0, 0), UJ.setPosition(AJ.j.FromArray(JJ.position))), JJ.target && UJ.setTarget && UJ.setTarget(AJ.j.FromArray(JJ.target)), JJ.cameraRigMode) {
        const cJ = JJ.interaxial_distance ? {
          interaxialDistance: JJ.interaxial_distance
        } : {};
        UJ.setCameraRigMode(JJ.cameraRigMode, cJ)
      }
      if (JJ.animations) {
        for (let cJ = 0; cJ < JJ.animations.length; cJ++) {
          const ZJ = JJ.animations[cJ],
            FJ = (0, YJ.e)("BABYLON.Animation");
          FJ && UJ.animations.push(FJ.Parse(ZJ))
        }
        qJ.b.ParseAnimationRanges(UJ, JJ, cJ)
      }
      return JJ.autoAnimate && cJ.beginAnimation(UJ, JJ.autoAnimateFrom, JJ.autoAnimateTo, JJ.autoAnimateLoop, JJ.autoAnimateSpeed || 1), void 0 !== JJ.isEnabled && UJ.GV(JJ.isEnabled), UJ
    }
    let rJ = !1;

    function vJ() {
      rJ || (rJ = !0, fJ.Parse = xJ)
    }
  },
  38996: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ) {
        this._cameraPosition = cJ, this._behavior = ZJ, this.activeInput = !1, this.speed = 1, this.JC = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new FJ.j, this.rotationAccumulatedPixels = new FJ.j, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = FJ.j.Zero(), this.rotationDeltaCurrentFrame = FJ.j.Zero(), this._zoomVelocity = 0, this._panVelocity = new FJ.j, this.referenceFrameRate = 60, this._rotationVelocity = new FJ.j, this._prevFrameTimeMs = 0, this._scene = JJ
      }
      computeCurrentFrameDeltas() {
        const JJ = this._scene.gn().getDeltaTime(),
          cJ = this._getEffectiveDeltaMs(JJ);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.X3(0), this.rotationDeltaCurrentFrame.X3(0), this.zoomDeltaCurrentFrame = 0, void(JJ > 0 && (this._prevFrameTimeMs = JJ));
        this.panDeltaCurrentFrame.X3(0), this.rotationDeltaCurrentFrame.X3(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.K9(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * cJ, this.panDeltaCurrentFrame), this._rotationVelocity.K9(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.K9(this._rotationVelocity.x * this.speed * this.rotationXSpeed * cJ, this._rotationVelocity.y * this.speed * this.rotationYSpeed * cJ, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.JC * this._zoomSpeedMultiplier) * cJ, JJ > 0 && (this._prevFrameTimeMs = JJ), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.X3(0), this.rotationAccumulatedPixels.X3(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.X3(0), this.rotationAccumulatedPixels.X3(0)
      }
      resetPanVelocity() {
        this._panVelocity.X3(0), this.panAccumulatedPixels.X3(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(JJ) {
        const cJ = this._scene.gn().getDeltaTime(),
          ZJ = this._getEffectiveDeltaMs(cJ),
          FJ = 1e3 / this.referenceFrameRate;
        return Math.pow(JJ, ZJ / FJ)
      }
      getFrameIndependentInputScale(JJ) {
        const cJ = 1 - JJ;
        if (cJ <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(JJ)) / cJ
      }
      _getEffectiveDeltaMs(JJ) {
        return JJ > 0 ? JJ : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(JJ, cJ, ZJ) {
        let FJ = JJ;
        const UJ = this._scene.gn().getDeltaTime(),
          eJ = this._getEffectiveDeltaMs(UJ);
        if (0 === eJ) return FJ;
        const XJ = this.getFrameIndependentDecay(ZJ);
        if (FJ *= XJ, 0 !== cJ || this.activeInput) {
          const JJ = 1 - ZJ;
          FJ += cJ / eJ * (JJ > 0 ? (1 - XJ) / JJ : 1)
        } else Math.abs(FJ) < 1e-6 && (FJ = 0);
        return FJ
      }
    }
  },
  38999: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ) {
        this.inputMap = [], this.handlers = JJ, this._createDefaultEntries = cJ, this.resetInputMap()
      }
      resolveInteraction(JJ, cJ) {
        for (const ZJ of this.inputMap)
          if (ZJ.source === JJ && this._entryMatches(ZJ, cJ)) return ZJ;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(JJ, cJ, ZJ) {
        const FJ = this.inputMap;
        for (let UJ = 0; UJ < FJ.length; UJ++) {
          const eJ = FJ[UJ];
          if (eJ.source === JJ && eJ.interaction === cJ && this._entryConditionsMatch(eJ, ZJ)) return eJ
        }
      }
      getEntries(JJ, cJ, ZJ) {
        const FJ = [],
          UJ = this.inputMap;
        for (let eJ = 0; eJ < UJ.length; eJ++) {
          const XJ = UJ[eJ];
          XJ.source === JJ && XJ.interaction === cJ && this._entryConditionsMatch(XJ, ZJ) && FJ.push(XJ)
        }
        return FJ
      }
      addEntry(JJ) {
        const cJ = this._entrySpecificity(JJ);
        let ZJ = this.inputMap.length;
        for (let FJ = 0; FJ < this.inputMap.length; FJ++)
          if (this._entrySpecificity(this.inputMap[FJ]) < cJ) {
            ZJ = FJ;
            break
          } this.inputMap.splice(ZJ, 0, JJ)
      }
      setInteraction(JJ, cJ, ZJ) {
        const FJ = this.resolveInteraction(JJ, cJ);
        return FJ && this._entryCoversAllConditionsOf(FJ, cJ) ? (FJ.interaction = ZJ, !0) : (this.addEntry({
          source: JJ,
          ...cJ ?? {},
          interaction: ZJ
        }), !0)
      }
      _entryCoversAllConditionsOf(JJ, cJ) {
        if (!cJ) return !0;
        const ZJ = JJ;
        for (const FJ of Object.keys(cJ)) {
          const JJ = cJ[FJ];
          if (void 0 !== JJ)
            if ("modifiers" === FJ) {
              const cJ = ZJ.modifiers ?? {};
              for (const ZJ of Object.keys(JJ))
                if (void 0 !== JJ[ZJ] && void 0 === cJ[ZJ]) return !1
            } else if (void 0 === ZJ[FJ]) return !1
        }
        return !0
      }
      setInteractions(JJ, cJ, ZJ) {
        let FJ = 0;
        const UJ = this.inputMap;
        for (let eJ = 0; eJ < UJ.length; eJ++) {
          const XJ = UJ[eJ];
          XJ.source === JJ && this._entryMatches(XJ, cJ) && (XJ.interaction = ZJ, FJ++)
        }
        return FJ
      }
      _entryMatches(JJ, cJ) {
        switch (JJ.source) {
          case "pointer":
            return (void 0 === JJ.button || JJ.button === cJ?.button) && this._matchModifiers(JJ.modifiers, cJ?.modifiers);
          case "wheel":
            return this._matchModifiers(JJ.modifiers, cJ?.modifiers);
          case "touch":
            return void 0 === JJ.touchCount || JJ.touchCount === cJ?.touchCount;
          case "keyboard":
            return (void 0 === JJ.key || (Array.isArray(JJ.key) ? -1 !== JJ.key.indexOf(cJ?.key ?? -1) : JJ.key === cJ?.key)) && this._matchModifiers(JJ.modifiers, cJ?.modifiers)
        }
      }
      _entryConditionsMatch(JJ, cJ) {
        if (!cJ) return !0;
        switch (JJ.source) {
          case "pointer":
            return (!("button" in cJ) || JJ.button === cJ.button) && (!("modifiers" in cJ) || this._entryModifiersMatch(JJ.modifiers, cJ.modifiers));
          case "wheel":
            return !("modifiers" in cJ) || this._entryModifiersMatch(JJ.modifiers, cJ.modifiers);
          case "touch":
            return !("touchCount" in cJ) || JJ.touchCount === cJ.touchCount;
          case "keyboard":
            if ("key" in cJ) {
              if (void 0 === JJ.key) return void 0 === cJ.key;
              if (void 0 === cJ.key || (Array.isArray(JJ.key) ? -1 === JJ.key.indexOf(cJ.key) : JJ.key !== cJ.key)) return !1
            }
            return !("modifiers" in cJ) || this._entryModifiersMatch(JJ.modifiers, cJ.modifiers)
        }
      }
      _entrySpecificity(JJ) {
        let cJ = 0;
        return "button" in JJ && void 0 !== JJ.button && cJ++, "key" in JJ && void 0 !== JJ.key && cJ++, "touchCount" in JJ && void 0 !== JJ.touchCount && cJ++, "modifiers" in JJ && JJ.modifiers && cJ++, cJ
      }
      _matchModifiers(JJ, cJ) {
        return !JJ || (void 0 === JJ.ctrl || JJ.ctrl === (cJ?.ctrl ?? !1)) && ((void 0 === JJ.shift || JJ.shift === (cJ?.shift ?? !1)) && (void 0 === JJ.alt || JJ.alt === (cJ?.alt ?? !1)))
      }
      _entryModifiersMatch(JJ, cJ) {
        if (!cJ) return !JJ;
        return void 0 !== cJ.ctrl || void 0 !== cJ.shift || void 0 !== cJ.alt ? (void 0 === cJ.ctrl || JJ?.ctrl === cJ.ctrl) && ((void 0 === cJ.shift || JJ?.shift === cJ.shift) && (void 0 === cJ.alt || JJ?.alt === cJ.alt)) : !JJ || void 0 === JJ.ctrl && void 0 === JJ.shift && void 0 === JJ.alt
      }
    }
  },
  38982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => xJ,
      h: () => GJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38986),
      XJ = ZJ(36174),
      AJ = ZJ(36177),
      qJ = ZJ(38993),
      jJ = ZJ(38989),
      YJ = ZJ(38996),
      hJ = ZJ(38999);
    class DJ extends YJ.c {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, ZJ), this.input = new hJ.b({
          translate: (JJ, cJ, ZJ) => {
            this.panAccumulatedPixels.x += JJ, this.panAccumulatedPixels.y += cJ, this.panAccumulatedPixels.z += ZJ
          },
          rotate: (JJ, cJ) => {
            this.rotationAccumulatedPixels.x += JJ, this.rotationAccumulatedPixels.y += cJ
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
    const sJ = XJ.b.Zero(),
      nJ = XJ.e.Identity();
    let GJ = (() => {
        var JJ;
        let cJ, ZJ, jJ, YJ, hJ = eJ.e,
          GJ = [],
          fJ = [],
          xJ = [],
          rJ = [],
          vJ = [],
          mJ = [],
          QJ = [],
          EJ = [];
        return JJ = class extends hJ {
          get inertia() {
            return this._targetInertia
          }
          set inertia(JJ) {
            this._targetInertia = JJ, this.movement && (this.movement.panInertia = JJ, this.movement.rotationInertia = JJ)
          }
          constructor(JJ, cJ, ZJ) {
            super(JJ, cJ, ZJ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new XJ.j(0, 0, 0), this.cameraRotation = new XJ.i(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, FJ.e)(this, GJ, !1), this.rotation = ((0, FJ.e)(this, fJ), (0, FJ.e)(this, xJ, void 0)), this.rotationQuaternion = (0, FJ.e)(this, rJ), this.speed = (0, FJ.e)(this, vJ, 2), this.noRotationConstraint = ((0, FJ.e)(this, mJ), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = AJ.e, this._rotationEpsilon = AJ.e, this.lockedTarget = (0, FJ.e)(this, QJ, null), this._currentTarget = ((0, FJ.e)(this, EJ), XJ.j.Zero()), this._initialFocalDistance = 1, this._viewMatrix = XJ.b.Zero(), this._cameraTransformMatrix = XJ.b.Zero(), this._cameraRotationMatrix = XJ.b.Zero(), this._transformedReferencePoint = XJ.j.Zero(), this._deferredPositionUpdate = new XJ.j, this._deferredRotationQuaternionUpdate = new XJ.e, this._deferredRotationUpdate = new XJ.j, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = XJ.j.Forward(this.Qy().useRightHandedSystem), this.rotation = new XJ.j(0, this.Qy().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new DJ(this.Qy(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(JJ) {
            this.getWorldMatrix();
            const cJ = XJ.h.Pn[0],
              ZJ = XJ.h.Pn[1];
            return ZJ.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ZJ, cJ), cJ.scaleInPlace(JJ), this.globalPosition.add(cJ)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const JJ = this.lockedTarget;
              JJ.computeWorldMatrix().getTranslationToRef(JJ.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.K9(0, 0, 0), this.cameraRotation.K9(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new XJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new XJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new XJ.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(JJ) {
            JJ || super._updateCache();
            const cJ = this._getLockedTargetPosition();
            cJ ? this._cache.lockedTarget ? this._cache.lockedTarget.rZJ(cJ) : this._cache.lockedTarget = cJ.clone() : this._cache.lockedTarget = null, this._cache.rotation.rZJ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.rZJ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const JJ = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(JJ) : !JJ) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const JJ = this.gn();
            return this.speed * Math.sqrt(JJ.getDeltaTime() / (100 * JJ.getFps()))
          }
          setTarget(JJ) {
            this.upVector.normalize(), this._initialFocalDistance = JJ.subtract(this.position).length(), this.position.z === JJ.z && (this.position.z += AJ.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Qy().useRightHandedSystem ? XJ.b.LookAtRHToRef(this.position, JJ, XJ.j.UpReadOnly, sJ) : XJ.b.LookAtLHToRef(this.position, JJ, XJ.j.UpReadOnly, sJ), sJ.invert();
            const cJ = this.rotationQuaternion || nJ;
            XJ.e.FromRotationMatrixToRef(sJ, cJ), cJ.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(JJ) {
            this.setTarget(JJ)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(XJ.h.Matrix[0]), XJ.j.TransformNormalToRef(this.cameraDirection, XJ.h.Matrix[0], XJ.h.Pn[0]), this._deferredPositionUpdate.addInPlace(XJ.h.Pn[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.rZJ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.rZJ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const JJ = this.movement,
              cJ = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            JJ.panAccumulatedPixels.addInPlace(this.cameraDirection), JJ.rotationAccumulatedPixels.x += this.cameraRotation.x, JJ.rotationAccumulatedPixels.y += this.cameraRotation.y, JJ.computeCurrentFrameDeltas(), this.cameraDirection.rZJ(JJ.panDeltaCurrentFrame), this.cameraRotation.set(JJ.rotationDeltaCurrentFrame.x, JJ.rotationDeltaCurrentFrame.y);
            const ZJ = this.speed * this._panningEpsilon;
            !cJ && Math.abs(this.cameraDirection.x) < ZJ && Math.abs(this.cameraDirection.y) < ZJ && Math.abs(this.cameraDirection.z) < ZJ && (this.cameraDirection.X3(0), JJ.resetPanVelocity());
            const FJ = this.invertRotation ? -this.inverseRotationSpeed : 1,
              UJ = this._decideIfNeedsToMove(),
              eJ = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.rZJ(this.rotation), this._deferredPositionUpdate.rZJ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.rZJ(this.rotationQuaternion), UJ && this._updatePosition(), eJ) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * FJ, this._deferredRotationUpdate.y += this.cameraRotation.y * FJ, !this.noRotationConstraint) {
                const JJ = 1.570796;
                this._deferredRotationUpdate.x > JJ && (this._deferredRotationUpdate.x = JJ), this._deferredRotationUpdate.x < -JJ && (this._deferredRotationUpdate.x = -JJ)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.rZJ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (XJ.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.rZJ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.X3(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : XJ.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return XJ.j.TransformNormalToRef(XJ.j.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), XJ.j.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? qJ.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (XJ.e.FromEulerVectorToRef(this.rotation, nJ), qJ.b.Y.rotateByQuaternionToRef(nJ, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(JJ, cJ, ZJ) {
            if (this.Qy().useRightHandedSystem ? XJ.b.LookAtRHToRef(JJ, cJ, ZJ, this._viewMatrix) : XJ.b.LookAtLHToRef(JJ, cJ, ZJ, this._viewMatrix), this.parent) {
              const JJ = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(JJ, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(cJ, ZJ) {
            if (this.cameraRigMode !== eJ.e.RIG_MODE_NONE) {
              const ZJ = new JJ(cJ, this.position.clone(), this.Qy());
              return ZJ.isRigCamera = !0, ZJ.rigParent = this, this.cameraRigMode === eJ.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new XJ.e), ZJ._cameraRigParams = {}, ZJ.rotationQuaternion = new XJ.e), ZJ.mode = this.mode, ZJ.orthoLeft = this.orthoLeft, ZJ.orthoRight = this.orthoRight, ZJ.orthoTop = this.orthoTop, ZJ.orthoBottom = this.orthoBottom, ZJ
            }
            return null
          }
          _updateRigCameras() {
            const JJ = this._rigCameras[0],
              cJ = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case eJ.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case eJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case eJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case eJ.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case eJ.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ZJ = this.cameraRigMode === eJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  FJ = this.cameraRigMode === eJ.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ZJ, JJ), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * FJ, cJ);
                break
              }
              case eJ.e.RIG_MODE_VR:
                JJ.rotationQuaternion && cJ.rotationQuaternion && this.rotationQuaternion ? (JJ.rotationQuaternion.rZJ(this.rotationQuaternion), cJ.rotationQuaternion.rZJ(this.rotationQuaternion)) : (JJ.rotation.rZJ(this.rotation), cJ.rotation.rZJ(this.rotation)), JJ.position.rZJ(this.position), cJ.position.rZJ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(cJ, ZJ) {
            this.getTarget().subtractToRef(this.position, JJ._TargetFocalPoint), JJ._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const FJ = JJ._TargetFocalPoint.addInPlace(this.position);
            XJ.b.TranslationToRef(-FJ.x, -FJ.y, -FJ.z, JJ._TargetTransformMatrix), JJ._TargetTransformMatrix.multiplyToRef(XJ.b.RotationAxis(ZJ.upVector, cJ), JJ._RigCamTransformMatrix), XJ.b.TranslationToRef(FJ.x, FJ.y, FJ.z, JJ._TargetTransformMatrix), JJ._RigCamTransformMatrix.multiplyToRef(JJ._TargetTransformMatrix, JJ._RigCamTransformMatrix), XJ.j.TransformCoordinatesToRef(this.position, JJ._RigCamTransformMatrix, ZJ.position), ZJ.setTarget(FJ)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(hJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.E)()], jJ = [(0, UJ.F)()], YJ = [(0, UJ.w)("lockedTargetId")], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: JJ => "updateUpVectorFromRotation" in JJ,
              get: JJ => JJ.updateUpVectorFromRotation,
              set: (JJ, cJ) => {
                JJ.updateUpVectorFromRotation = cJ
              }
            },
            metadata: eJ
          }, GJ, fJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: JJ => "rotation" in JJ,
              get: JJ => JJ.rotation,
              set: (JJ, cJ) => {
                JJ.rotation = cJ
              }
            },
            metadata: eJ
          }, xJ, rJ), (0, FJ.d)(null, null, jJ, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: JJ => "speed" in JJ,
              get: JJ => JJ.speed,
              set: (JJ, cJ) => {
                JJ.speed = cJ
              }
            },
            metadata: eJ
          }, vJ, mJ), (0, FJ.d)(null, null, YJ, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lockedTarget" in JJ,
              get: JJ => JJ.lockedTarget,
              set: (JJ, cJ) => {
                JJ.lockedTarget = cJ
              }
            },
            metadata: eJ
          }, QJ, EJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ._RigCamTransformMatrix = new XJ.b, JJ._TargetTransformMatrix = new XJ.b, JJ._TargetFocalPoint = new XJ.j, JJ
      })(),
      fJ = !1;

    function xJ() {
      fJ || (fJ = !0, jJ.b.AddNodeConstructor("TargetCamera", ((JJ, cJ) => () => new GJ(JJ, XJ.j.Zero(), cJ))))
    }
  },
  38756: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(38698);
    let UJ = !1;

    function eJ() {
      UJ || (UJ = !0, FJ.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, FJ.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, FJ.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, FJ.e.prototype.getAspectRatio = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = JJ.viewport;
        return this.getRenderWidth(cJ) * ZJ.width / (this.getRenderHeight(cJ) * ZJ.height)
      }, FJ.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, FJ.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  38840: (JJ, cJ, ZJ) => {
    var FJ = ZJ(38698),
      UJ = ZJ(38844);
    let eJ = !1;
    eJ || (eJ = !0, (0, UJ.t)(), FJ.e.prototype._loadFileAsync = async function(JJ, cJ, ZJ) {
      return await new Promise(((FJ, UJ) => {
        this._loadFile(JJ, (JJ => {
          FJ(JJ)
        }), void 0, cJ, ZJ, ((JJ, cJ) => {
          UJ(cJ)
        }))
      }))
    })
  },
  38831: (JJ, cJ, ZJ) => {
    (0, ZJ(38759).b)()
  },
  38759: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(38698);
    let UJ = !1;

    function eJ() {
      UJ || (UJ = !0, FJ.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, FJ.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, FJ.e.prototype.createRenderPassId = function(JJ) {
        const cJ = ++FJ.e._RenderPassIdCounter;
        return this._renderPassNames[cJ] = JJ ?? "NONAME", cJ
      }, FJ.e.prototype.releaseRenderPassId = function(JJ) {
        this._renderPassNames[JJ] = void 0;
        for (let cJ = 0; cJ < this.scenes.length; ++cJ) {
          const ZJ = this.scenes[cJ];
          for (let cJ = 0; cJ < ZJ.meshes.length; ++cJ) {
            const FJ = ZJ.meshes[cJ];
            if (FJ._releaseRenderPassId(JJ), FJ.aE)
              for (let cJ = 0; cJ < FJ.aE.length; ++cJ) {
                FJ.aE[cJ]._removeDrawWrapper(JJ)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(JJ)
      })
    }
  },
  38865: (JJ, cJ, ZJ) => {
    var FJ = ZJ(38867),
      UJ = ZJ(38698);
    let eJ = !1;
    eJ || (eJ = !0, UJ.e.GetCompatibleTextureLoader = FJ.b)
  },
  38763: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(38644);
    let UJ = !1;

    function eJ() {
      UJ || (UJ = !0, FJ.ThinEngine.prototype.setAlphaMode = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ZJ] === JJ) {
          if (!cJ) {
            const cJ = 0 === JJ;
            this.depthCullingState.depthMask !== cJ && (this.depthCullingState.depthMask = cJ)
          }
          return
        }
        const FJ = 0 === JJ;
        this._alphaState.setAlphaBlend(!FJ, ZJ), this._alphaState.setAlphaMode(JJ, ZJ), cJ || (this.depthCullingState.depthMask = FJ), this._alphaMode[ZJ] = JJ
      })
    }
  },
  38779: (JJ, cJ, ZJ) => {
    var FJ = ZJ(38635),
      UJ = ZJ(37660),
      eJ = ZJ(38644),
      XJ = ZJ(38784),
      AJ = ZJ(38741);
    class qJ extends XJ.b {
      setDepthStencilTexture(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(JJ, cJ), !JJ) return;
        const ZJ = this._engine,
          FJ = this._context,
          UJ = JJ._hardwareTexture;
        if (UJ && JJ._autoMSAAManagement && this._MSAAFramebuffer) {
          const cJ = ZJ._currentFramebuffer;
          ZJ._bindUnboundFramebuffer(this._MSAAFramebuffer), FJ.framebufferRenderbuffer(FJ.FRAMEBUFFER, (0, AJ.e)(JJ.format) ? FJ.DEPTH_STENCIL_ATTACHMENT : FJ.DEPTH_ATTACHMENT, FJ.RENDERBUFFER, UJ.getMSAARenderBuffer()), ZJ._bindUnboundFramebuffer(cJ)
        }
      }
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        super(JJ, cJ, ZJ, FJ), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = UJ
      }
      _cloneRenderTargetWrapper() {
        let JJ;
        return this._colorTextureArray && this._depthStencilTextureArray ? (JJ = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), JJ.texture.isReady = !0) : JJ = super._cloneRenderTargetWrapper(), JJ
      }
      _swapRenderTargetWrapper(JJ) {
        super._swapRenderTargetWrapper(JJ), JJ._framebuffer = this._framebuffer, JJ._depthStencilBuffer = this._depthStencilBuffer, JJ._MSAAFramebuffer = this._MSAAFramebuffer, JJ._colorTextureArray = this._colorTextureArray, JJ._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const JJ = this._engine,
            cJ = JJ._currentFramebuffer,
            ZJ = this._context;
          JJ._bindUnboundFramebuffer(this._framebuffer), ZJ.framebufferRenderbuffer(ZJ.FRAMEBUFFER, ZJ.DEPTH_STENCIL_ATTACHMENT, ZJ.RENDERBUFFER, null), ZJ.framebufferRenderbuffer(ZJ.FRAMEBUFFER, ZJ.DEPTH_ATTACHMENT, ZJ.RENDERBUFFER, null), ZJ.framebufferRenderbuffer(ZJ.FRAMEBUFFER, ZJ.STENCIL_ATTACHMENT, ZJ.RENDERBUFFER, null), JJ._bindUnboundFramebuffer(cJ), ZJ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      shareDepth(JJ) {
        super.shareDepth(JJ);
        const cJ = this._context,
          ZJ = this._depthStencilBuffer,
          FJ = JJ._MSAAFramebuffer || JJ._framebuffer,
          UJ = this._engine;
        JJ._depthStencilBuffer && JJ._depthStencilBuffer !== ZJ && cJ.deleteRenderbuffer(JJ._depthStencilBuffer), JJ._depthStencilBuffer = ZJ;
        const eJ = JJ._generateStencilBuffer ? cJ.DEPTH_STENCIL_ATTACHMENT : cJ.DEPTH_ATTACHMENT;
        UJ._bindUnboundFramebuffer(FJ), cJ.framebufferRenderbuffer(cJ.FRAMEBUFFER, eJ, cJ.RENDERBUFFER, ZJ), UJ._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const UJ = JJ._hardwareTexture;
        if (!UJ) return;
        const eJ = this._framebuffer,
          XJ = this._engine,
          AJ = XJ._currentFramebuffer;
        let qJ;
        if (XJ._bindUnboundFramebuffer(eJ), XJ.nG > 1) {
          const eJ = this._context;
          qJ = eJ["COLOR_ATTACHMENT" + cJ], JJ.is2DArray || JJ.is3D ? (ZJ = ZJ ?? this.layerIndices?.[cJ] ?? 0, eJ.framebufferTextureLayer(eJ.FRAMEBUFFER, qJ, UJ.underlyingResource, FJ, ZJ)) : JJ.isCube ? (ZJ = ZJ ?? this.faceIndices?.[cJ] ?? 0, eJ.framebufferTexture2D(eJ.FRAMEBUFFER, qJ, eJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ, UJ.underlyingResource, FJ)) : eJ.framebufferTexture2D(eJ.FRAMEBUFFER, qJ, eJ.TEXTURE_2D, UJ.underlyingResource, FJ)
        } else {
          const JJ = this._context;
          qJ = JJ["COLOR_ATTACHMENT" + cJ + "_WEBGL"];
          const eJ = void 0 !== ZJ ? JJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ : JJ.TEXTURE_2D;
          JJ.framebufferTexture2D(JJ.FRAMEBUFFER, qJ, eJ, UJ.underlyingResource, FJ)
        }
        if (JJ._autoMSAAManagement && this._MSAAFramebuffer) {
          const JJ = this._context;
          XJ._bindUnboundFramebuffer(this._MSAAFramebuffer), JJ.framebufferRenderbuffer(JJ.FRAMEBUFFER, qJ, JJ.RENDERBUFFER, UJ.getMSAARenderBuffer())
        }
        XJ._bindUnboundFramebuffer(AJ)
      }
      setTexture(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(JJ, cJ, ZJ), this._bindTextureRenderTarget(JJ, cJ)
      }
      setLayerAndFaceIndices(JJ, cJ) {
        if (super.setLayerAndFaceIndices(JJ, cJ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ZJ = this._attachments?.length ?? this.textures.length;
        for (let FJ = 0; FJ < ZJ; FJ++) {
          const JJ = this.textures[FJ];
          JJ && (JJ.is2DArray || JJ.is3D ? this._bindTextureRenderTarget(JJ, FJ, this.layerIndices[FJ]) : JJ.isCube ? this._bindTextureRenderTarget(JJ, FJ, this.faceIndices[FJ]) : this._bindTextureRenderTarget(JJ, FJ))
        }
      }
      setLayerAndFaceIndex() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(JJ, cJ, ZJ), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const FJ = this.textures[JJ];
        FJ.is2DArray || FJ.is3D ? this._bindTextureRenderTarget(this.textures[JJ], JJ, this.layerIndices[JJ]) : FJ.isCube && this._bindTextureRenderTarget(this.textures[JJ], JJ, this.faceIndices[JJ])
      }
      resolveMSAATextures() {
        const JJ = this._engine,
          cJ = JJ._currentFramebuffer;
        JJ._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), JJ._bindUnboundFramebuffer(cJ)
      }
      dispose() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const cJ = this._context;
        JJ || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (cJ.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (cJ.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (cJ.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(JJ)
      }
    }
    let jJ = !1;
    jJ || (jJ = !0, eJ.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(JJ, cJ, ZJ) {
      const FJ = new qJ(JJ, cJ, ZJ, this, this._gl);
      return this._renderTargetWrapperCache.push(FJ), FJ
    }, eJ.ThinEngine.prototype.createRenderTargetTexture = function(JJ, cJ) {
      const ZJ = this._createHardwareRenderTargetWrapper(!1, !1, JJ);
      let FJ, UJ, eJ = !0,
        XJ = !1,
        AJ = !1,
        qJ = 1;
      void 0 !== cJ && "object" === typeof cJ && (eJ = cJ.generateDepthBuffer ?? !0, XJ = !!cJ.generateStencilBuffer, AJ = !!cJ.noColorAttachment, FJ = cJ.colorAttachment, qJ = cJ.samples ?? 1, UJ = cJ.label);
      const jJ = FJ || (AJ ? null : this._createInternalTexture(JJ, cJ, !0, 5)),
        YJ = JJ.width || JJ,
        hJ = JJ.height || JJ,
        DJ = this._currentFramebuffer,
        sJ = this._gl,
        nJ = sJ.createFramebuffer();
      if (this._bindUnboundFramebuffer(nJ), ZJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(XJ, eJ, YJ, hJ), !jJ || jJ.is2DArray || jJ.is3D || sJ.framebufferTexture2D(sJ.FRAMEBUFFER, sJ.COLOR_ATTACHMENT0, sJ.TEXTURE_2D, jJ._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(DJ), ZJ.label = UJ ?? "RenderTargetWrapper", ZJ._framebuffer = nJ, ZJ._generateDepthBuffer = eJ, ZJ._generateStencilBuffer = XJ, ZJ.setTextures(jJ), FJ) {
        if (ZJ._samples = FJ.samples, FJ.samples > 1) {
          const JJ = FJ._hardwareTexture.getMSAARenderBuffer(0);
          ZJ._MSAAFramebuffer = sJ.createFramebuffer(), this._bindUnboundFramebuffer(ZJ._MSAAFramebuffer), sJ.framebufferRenderbuffer(sJ.FRAMEBUFFER, sJ.COLOR_ATTACHMENT0, sJ.RENDERBUFFER, JJ), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ZJ, qJ);
      return ZJ
    }, eJ.ThinEngine.prototype._createDepthStencilTexture = function(JJ, cJ, ZJ) {
      const eJ = this._gl,
        XJ = JJ.layers || 0,
        qJ = JJ.depth || 0;
      let jJ = eJ.TEXTURE_2D;
      0 !== XJ ? jJ = eJ.TEXTURE_2D_ARRAY : 0 !== qJ && (jJ = eJ.TEXTURE_3D);
      const YJ = new FJ.e(this, 12);
      if (YJ.label = cJ.label, !this._caps.depthTextureExtension) return UJ.c.Error("Depth texture is not supported by your browser or hardware."), YJ;
      const hJ = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...cJ
      };
      if (this._bindTextureDirectly(jJ, YJ, !0), this._setupDepthStencilTexture(YJ, JJ, 0 !== hJ.comparisonFunction && hJ.bilinearFiltering, hJ.comparisonFunction, hJ.samples), void 0 !== hJ.depthTextureFormat) {
        if (15 !== hJ.depthTextureFormat && 16 !== hJ.depthTextureFormat && 17 !== hJ.depthTextureFormat && 13 !== hJ.depthTextureFormat && 14 !== hJ.depthTextureFormat && 18 !== hJ.depthTextureFormat) return UJ.c.Error(`Depth texture ${hJ.depthTextureFormat} format is not supported.`), YJ;
        YJ.format = hJ.depthTextureFormat
      } else YJ.format = hJ.generateStencil ? 13 : 16;
      const DJ = (0, AJ.e)(YJ.format),
        sJ = this._getWebGLTextureTypeFromDepthTextureFormat(YJ.format),
        nJ = DJ ? eJ.DEPTH_STENCIL : eJ.DEPTH_COMPONENT,
        GJ = this._getInternalFormatFromDepthTextureFormat(YJ.format, !0, DJ);
      return YJ.is2DArray ? eJ.texImage3D(jJ, 0, GJ, YJ.width, YJ.height, XJ, 0, nJ, sJ, null) : YJ.is3D ? eJ.texImage3D(jJ, 0, GJ, YJ.width, YJ.height, qJ, 0, nJ, sJ, null) : eJ.texImage2D(jJ, 0, GJ, YJ.width, YJ.height, 0, nJ, sJ, null), this._bindTextureDirectly(jJ, null), this._internalTexturesCache.push(YJ), ZJ._depthStencilBuffer && (eJ.deleteRenderbuffer(ZJ._depthStencilBuffer), ZJ._depthStencilBuffer = null), this._bindUnboundFramebuffer(ZJ._MSAAFramebuffer ?? ZJ._framebuffer), ZJ._generateStencilBuffer = DJ, ZJ._depthStencilTextureWithStencil = DJ, ZJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(ZJ._generateStencilBuffer, ZJ._generateDepthBuffer, ZJ.width, ZJ.height, ZJ.samples, YJ.format), this._bindUnboundFramebuffer(null), YJ
    }, eJ.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(JJ, cJ) {
      if (this.nG < 2 || !JJ) return 1;
      if (JJ.samples === cJ) return cJ;
      const ZJ = this._gl;
      cJ = Math.min(cJ, this.getCaps().maxMSAASamples), JJ._depthStencilBuffer && (ZJ.deleteRenderbuffer(JJ._depthStencilBuffer), JJ._depthStencilBuffer = null), JJ._MSAAFramebuffer && (ZJ.deleteFramebuffer(JJ._MSAAFramebuffer), JJ._MSAAFramebuffer = null);
      const FJ = JJ.texture?._hardwareTexture;
      if (FJ?.releaseMSAARenderBuffers(), JJ.texture && cJ > 1 && "function" === typeof ZJ.renderbufferStorageMultisample) {
        const UJ = ZJ.createFramebuffer();
        if (!UJ) throw new Error("Unable to create multi sampled framebuffer");
        JJ._MSAAFramebuffer = UJ, this._bindUnboundFramebuffer(JJ._MSAAFramebuffer);
        const eJ = this._createRenderBuffer(JJ.texture.width, JJ.texture.height, cJ, -1, this._getRGBABufferInternalSizedFormat(JJ.texture.type, JJ.texture.format, JJ.texture._useSRGBBuffer), ZJ.COLOR_ATTACHMENT0, !1);
        if (!eJ) throw new Error("Unable to create multi sampled framebuffer");
        FJ?.addMSAARenderBuffer(eJ)
      }
      this._bindUnboundFramebuffer(JJ._MSAAFramebuffer ?? JJ._framebuffer), JJ.texture && (JJ.texture.samples = cJ), JJ._samples = cJ;
      const UJ = JJ._depthStencilTexture ? JJ._depthStencilTexture.format : void 0;
      return JJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(JJ._generateStencilBuffer, JJ._generateDepthBuffer, JJ.width, JJ.height, cJ, UJ), this._bindUnboundFramebuffer(null), cJ
    }, eJ.ThinEngine.prototype._setupDepthStencilTexture = function(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const eJ = cJ.width ?? cJ,
        XJ = cJ.height ?? cJ,
        AJ = cJ.layers || 0,
        qJ = cJ.depth || 0;
      JJ.baseWidth = eJ, JJ.baseHeight = XJ, JJ.width = eJ, JJ.height = XJ, JJ.is2DArray = AJ > 0, JJ.depth = AJ || qJ, JJ.isReady = !0, JJ.samples = UJ, JJ.generateMipMaps = !1, JJ.samplingMode = ZJ ? 2 : 1, JJ.type = 0, JJ._comparisonFunction = FJ;
      const jJ = this._gl,
        YJ = this._getTextureTarget(JJ),
        hJ = this._getSamplingParameters(JJ.samplingMode, !1);
      jJ.texParameteri(YJ, jJ.TEXTURE_MAG_FILTER, hJ.mag), jJ.texParameteri(YJ, jJ.TEXTURE_MIN_FILTER, hJ.min), jJ.texParameteri(YJ, jJ.TEXTURE_WRAP_S, jJ.CLAMP_TO_EDGE), jJ.texParameteri(YJ, jJ.TEXTURE_WRAP_T, jJ.CLAMP_TO_EDGE), this.nG > 1 && (0 === FJ ? (jJ.texParameteri(YJ, jJ.TEXTURE_COMPARE_FUNC, 515), jJ.texParameteri(YJ, jJ.TEXTURE_COMPARE_MODE, jJ.NONE)) : (jJ.texParameteri(YJ, jJ.TEXTURE_COMPARE_FUNC, FJ), jJ.texParameteri(YJ, jJ.TEXTURE_COMPARE_MODE, jJ.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38624: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ.c
    });
    var FJ = ZJ(38633);
    (0, ZJ(38763).b)();
    var UJ = ZJ(38644);
    let eJ = !1;
    ! function() {
      if (eJ) return;
      eJ = !0;
      const JJ = new WeakMap,
        cJ = new WeakMap,
        ZJ = new WeakMap,
        FJ = new WeakMap;
      UJ.ThinEngine.prototype.getAlphaToCoverage = function() {
        return JJ.get(this) ?? !1
      }, UJ.ThinEngine.prototype.setAlphaToCoverage = function(ZJ) {
        (JJ.get(this) !== ZJ || this._gl && cJ.get(this) !== this._gl) && (JJ.set(this, ZJ), this._gl && (ZJ ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), cJ.set(this, this._gl)))
      }, Object.defineProperty(UJ.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (FJ.get(this) !== this._gl && (ZJ.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), FJ.set(this, this._gl)), ZJ.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var XJ = ZJ(38635),
      AJ = ZJ(37660),
      qJ = ZJ(38729);
    let jJ = !1;
    ! function() {
      function JJ(JJ, cJ, ZJ, FJ) {
        let UJ, eJ = 1;
        1 === FJ ? UJ = new Float32Array(cJ * ZJ * 4) : 2 === FJ ? (UJ = new Uint16Array(cJ * ZJ * 4), eJ = 15360) : UJ = 7 === FJ ? new Uint32Array(cJ * ZJ * 4) : new Uint8Array(cJ * ZJ * 4);
        for (let XJ = 0; XJ < cJ; XJ++)
          for (let FJ = 0; FJ < ZJ; FJ++) {
            const ZJ = 3 * (FJ * cJ + XJ),
              AJ = 4 * (FJ * cJ + XJ);
            UJ[AJ + 0] = JJ[ZJ + 0], UJ[AJ + 1] = JJ[ZJ + 1], UJ[AJ + 2] = JJ[ZJ + 2], UJ[AJ + 3] = eJ
          }
        return UJ
      }

      function cJ(JJ) {
        return function(cJ, ZJ, FJ, UJ, eJ, AJ, qJ, jJ) {
          let YJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            hJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const DJ = JJ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            sJ = JJ ? 10 : 11,
            nJ = new XJ.e(this, sJ);
          nJ.baseWidth = ZJ, nJ.baseHeight = FJ, nJ.baseDepth = UJ, nJ.width = ZJ, nJ.height = FJ, nJ.depth = UJ, nJ.format = eJ, nJ.type = hJ, nJ.generateMipMaps = AJ, nJ.samplingMode = jJ, JJ ? nJ.is3D = !0 : nJ.is2DArray = !0, this._doNotHandleContextLost || (nJ._bufferView = cJ), JJ ? this.updateRawTexture3D(nJ, cJ, eJ, qJ, YJ, hJ) : this.updateRawTexture2DArray(nJ, cJ, eJ, qJ, YJ, hJ), this._bindTextureDirectly(DJ, nJ, !0);
          const GJ = this._getSamplingParameters(jJ, AJ);
          return this._gl.texParameteri(DJ, this._gl.TEXTURE_MAG_FILTER, GJ.mag), this._gl.texParameteri(DJ, this._gl.TEXTURE_MIN_FILTER, GJ.min), AJ && this._gl.generateMipmap(DJ), this._bindTextureDirectly(DJ, null), this._internalTexturesCache.push(nJ), nJ
        }
      }

      function ZJ(JJ) {
        return function(cJ, ZJ, FJ, UJ) {
          let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const AJ = JJ ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qJ = this._getWebGLTextureType(XJ),
            jJ = this._getInternalFormat(FJ),
            YJ = this._getRGBABufferInternalSizedFormat(XJ, FJ);
          this._bindTextureDirectly(AJ, cJ, !0), this._unpackFlipY(void 0 === UJ || !!UJ), this._doNotHandleContextLost || (cJ._bufferView = ZJ, cJ.format = FJ, cJ.invertY = UJ, cJ._compression = eJ), cJ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), eJ && ZJ ? this._gl.compressedTexImage3D(AJ, 0, this.getCaps().s3tc[eJ], cJ.width, cJ.height, cJ.depth, 0, ZJ) : this._gl.texImage3D(AJ, 0, YJ, cJ.width, cJ.height, cJ.depth, 0, jJ, qJ, ZJ), cJ.generateMipMaps && this._gl.generateMipmap(AJ), this._bindTextureDirectly(AJ, null), cJ.isReady = !0
        }
      }
      jJ || (jJ = !0, UJ.ThinEngine.prototype.updateRawTexture = function(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!JJ) return;
        const AJ = this._getRGBABufferInternalSizedFormat(eJ, ZJ, XJ),
          qJ = this._getInternalFormat(ZJ),
          jJ = this._getWebGLTextureType(eJ);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, JJ, !0), this._unpackFlipY(void 0 === FJ || !!FJ), this._doNotHandleContextLost || (JJ._bufferView = cJ, JJ.format = ZJ, JJ.type = eJ, JJ.invertY = FJ, JJ._compression = UJ), JJ.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), UJ && cJ ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[UJ], JJ.width, JJ.height, 0, cJ) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, AJ, JJ.width, JJ.height, 0, qJ, jJ, cJ), JJ.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), JJ.isReady = !0
      }, UJ.ThinEngine.prototype.createRawTexture = function(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
        let qJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          jJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          YJ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const hJ = new XJ.e(this, 3);
        hJ.baseWidth = cJ, hJ.baseHeight = ZJ, hJ.width = cJ, hJ.height = ZJ, hJ.format = FJ, hJ.generateMipMaps = UJ, hJ.samplingMode = AJ, hJ.invertY = eJ, hJ._compression = qJ, hJ.type = jJ, hJ._useSRGBBuffer = this._getUseSRGBBuffer(YJ, !UJ), this._doNotHandleContextLost || (hJ._bufferView = JJ), this.updateRawTexture(hJ, JJ, FJ, eJ, qJ, jJ, hJ._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, hJ, !0);
        const DJ = this._getSamplingParameters(AJ, UJ);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, DJ.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, DJ.min), UJ && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(hJ), hJ
      }, UJ.ThinEngine.prototype.createRawCubeTexture = function(JJ, cJ, ZJ, FJ, UJ, eJ, jJ) {
        let YJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const hJ = this._gl,
          DJ = new XJ.e(this, 8);
        DJ.isCube = !0, DJ.format = ZJ, DJ.type = FJ, this._doNotHandleContextLost || (DJ._bufferViewArray = JJ);
        const sJ = this._getWebGLTextureType(FJ);
        let nJ = this._getInternalFormat(ZJ);
        nJ === hJ.RGB && (nJ = hJ.RGBA), sJ !== hJ.FLOAT || this._caps.textureFloatLinearFiltering ? sJ !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? sJ !== hJ.FLOAT || this._caps.textureFloatRender ? sJ !== hJ.HALF_FLOAT || this._caps.colorBufferFloat || (UJ = !1, AJ.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (UJ = !1, AJ.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (UJ = !1, jJ = 1, AJ.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (UJ = !1, jJ = 1, AJ.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const GJ = cJ,
          fJ = GJ;
        DJ.width = GJ, DJ.height = fJ, DJ.invertY = eJ, DJ._compression = YJ;
        if (!this.needPOTTextures || (0, qJ.e)(DJ.width) && (0, qJ.e)(DJ.height) || (UJ = !1), JJ) this.updateRawCubeTexture(DJ, JJ, ZJ, FJ, eJ, YJ);
        else {
          const JJ = this._getRGBABufferInternalSizedFormat(FJ),
            cJ = 0;
          this._bindTextureDirectly(hJ.TEXTURE_CUBE_MAP, DJ, !0);
          for (let ZJ = 0; ZJ < 6; ZJ++) YJ ? hJ.compressedTexImage2D(hJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ, cJ, this.getCaps().s3tc[YJ], DJ.width, DJ.height, 0, void 0) : hJ.texImage2D(hJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ, cJ, JJ, DJ.width, DJ.height, 0, nJ, sJ, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, DJ, !0), JJ && UJ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const xJ = this._getSamplingParameters(jJ, UJ);
        return hJ.texParameteri(hJ.TEXTURE_CUBE_MAP, hJ.TEXTURE_MAG_FILTER, xJ.mag), hJ.texParameteri(hJ.TEXTURE_CUBE_MAP, hJ.TEXTURE_MIN_FILTER, xJ.min), hJ.texParameteri(hJ.TEXTURE_CUBE_MAP, hJ.TEXTURE_WRAP_S, hJ.CLAMP_TO_EDGE), hJ.texParameteri(hJ.TEXTURE_CUBE_MAP, hJ.TEXTURE_WRAP_T, hJ.CLAMP_TO_EDGE), this._bindTextureDirectly(hJ.TEXTURE_CUBE_MAP, null), DJ.generateMipMaps = UJ, DJ.samplingMode = jJ, DJ.isReady = !0, DJ
      }, UJ.ThinEngine.prototype.updateRawCubeTexture = function(cJ, ZJ, FJ, UJ, eJ) {
        let XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        cJ._bufferViewArray = ZJ, cJ.format = FJ, cJ.type = UJ, cJ.invertY = eJ, cJ._compression = XJ;
        const jJ = this._gl,
          YJ = this._getWebGLTextureType(UJ);
        let hJ = this._getInternalFormat(FJ);
        const DJ = this._getRGBABufferInternalSizedFormat(UJ);
        let sJ = !1;
        hJ === jJ.RGB && (hJ = jJ.RGBA, sJ = !0), this._bindTextureDirectly(jJ.TEXTURE_CUBE_MAP, cJ, !0), this._unpackFlipY(void 0 === eJ || !!eJ), cJ.width % 4 !== 0 && jJ.pixelStorei(jJ.UNPACK_ALIGNMENT, 1);
        for (let qJ = 0; qJ < 6; qJ++) {
          let FJ = ZJ[qJ];
          XJ ? jJ.compressedTexImage2D(jJ.TEXTURE_CUBE_MAP_POSITIVE_X + qJ, AJ, this.getCaps().s3tc[XJ], cJ.width, cJ.height, 0, FJ) : (sJ && (FJ = JJ(FJ, cJ.width, cJ.height, UJ)), jJ.texImage2D(jJ.TEXTURE_CUBE_MAP_POSITIVE_X + qJ, AJ, DJ, cJ.width, cJ.height, 0, hJ, YJ, FJ))
        }(!this.needPOTTextures || (0, qJ.e)(cJ.width) && (0, qJ.e)(cJ.height)) && cJ.generateMipMaps && 0 === AJ && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), cJ.isReady = !0
      }, UJ.ThinEngine.prototype.createRawCubeTextureFromUrl = function(cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        let jJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          YJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          hJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          DJ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const sJ = this._gl,
          nJ = this.createRawCubeTexture(null, FJ, UJ, eJ, !XJ, DJ, hJ, null);
        ZJ?.addPendingData(nJ), nJ.url = cJ, nJ.isReady = !1, this._internalTexturesCache.push(nJ);
        const GJ = (JJ, cJ) => {
            ZJ?.removePendingData(nJ), YJ && YJ(JJ ? JJ.status + " " + JJ.statusText : "Failed to parse texture data", cJ)
          },
          fJ = async cJ => {
            if (!nJ._hardwareTexture) return;
            const FJ = AJ(cJ);
            if (!FJ) return;
            const XJ = FJ instanceof Promise ? await FJ : FJ,
              YJ = nJ.width;
            if (qJ) {
              const cJ = this._getWebGLTextureType(eJ);
              let ZJ = this._getInternalFormat(UJ);
              const FJ = this._getRGBABufferInternalSizedFormat(eJ);
              let AJ = !1;
              ZJ === sJ.RGB && (ZJ = sJ.RGBA, AJ = !0), this._bindTextureDirectly(sJ.TEXTURE_CUBE_MAP, nJ, !0), this._unpackFlipY(!1);
              const jJ = qJ(XJ);
              for (let UJ = 0; UJ < jJ.length; UJ++) {
                const XJ = YJ >> UJ;
                for (let qJ = 0; qJ < 6; qJ++) {
                  let YJ = jJ[UJ][qJ];
                  AJ && (YJ = JJ(YJ, XJ, XJ, eJ)), sJ.texImage2D(qJ, UJ, FJ, XJ, XJ, 0, ZJ, cJ, YJ)
                }
              }
              this._bindTextureDirectly(sJ.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(nJ, XJ, UJ, eJ, DJ);
            nJ.isReady = !0, ZJ?.removePendingData(nJ), nJ.onLoadedObservable.notifyObservers(nJ), nJ.onLoadedObservable.clear(), jJ && jJ()
          };
        return this._loadFile(cJ, (JJ => {
          fJ(JJ).catch((JJ => {
            GJ(void 0, JJ)
          }))
        }), void 0, ZJ?.offlineProvider, !0, GJ), nJ
      }, UJ.ThinEngine.prototype.createRawTexture2DArray = cJ(!1), UJ.ThinEngine.prototype.createRawTexture3D = cJ(!0), UJ.ThinEngine.prototype.updateRawTexture2DArray = ZJ(!1), UJ.ThinEngine.prototype.updateRawTexture3D = ZJ(!0))
    }();
    var YJ = ZJ(38671);
    let hJ = !1;
    hJ || (hJ = !0, UJ.ThinEngine.prototype._readTexturePixelsSync = function(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        XJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        jJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const hJ = this._gl;
      if (!hJ) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const JJ = hJ.createFramebuffer();
        if (!JJ) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = JJ
      }
      hJ.bindFramebuffer(hJ.FRAMEBUFFER, this._dummyFramebuffer), FJ > -1 && (JJ.is2DArray || JJ.is3D) ? hJ.framebufferTextureLayer(hJ.FRAMEBUFFER, hJ.COLOR_ATTACHMENT0, JJ._hardwareTexture?.underlyingResource, UJ, FJ) : FJ > -1 ? hJ.framebufferTexture2D(hJ.FRAMEBUFFER, hJ.COLOR_ATTACHMENT0, hJ.TEXTURE_CUBE_MAP_POSITIVE_X + FJ, JJ._hardwareTexture?.underlyingResource, UJ) : hJ.framebufferTexture2D(hJ.FRAMEBUFFER, hJ.COLOR_ATTACHMENT0, hJ.TEXTURE_2D, JJ._hardwareTexture?.underlyingResource, UJ);
      let DJ = void 0 !== JJ.type ? this._getWebGLTextureType(JJ.type) : hJ.UNSIGNED_BYTE;
      return AJ ? eJ || (eJ = (0, YJ.q)(JJ.type, 4 * cJ * ZJ)) : DJ === hJ.UNSIGNED_BYTE ? (eJ || (eJ = new Uint8Array(4 * cJ * ZJ)), DJ = hJ.UNSIGNED_BYTE) : (eJ || (eJ = new Float32Array(4 * cJ * ZJ)), DJ = hJ.FLOAT), XJ && this.flushFramebuffer(), hJ.readPixels(qJ, jJ, cJ, ZJ, hJ.RGBA, DJ, eJ), hJ.bindFramebuffer(hJ.FRAMEBUFFER, this._currentFramebuffer), eJ
    }, UJ.ThinEngine.prototype._readTexturePixels = function(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        XJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        jJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ))
    }), (0, ZJ(38772).b)();
    let DJ = !1;
    DJ || (DJ = !0, UJ.ThinEngine.prototype._createDepthStencilCubeTexture = function(JJ, cJ) {
      const ZJ = new XJ.e(this, 12);
      if (ZJ.isCube = !0, 1 === this.nG) return AJ.c.Error("Depth cube texture is not supported by WebGL 1."), ZJ;
      const FJ = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...cJ
        },
        UJ = this._gl;
      this._bindTextureDirectly(UJ.TEXTURE_CUBE_MAP, ZJ, !0), this._setupDepthStencilTexture(ZJ, JJ, FJ.bilinearFiltering, FJ.comparisonFunction);
      for (let eJ = 0; eJ < 6; eJ++) FJ.generateStencil ? UJ.texImage2D(UJ.TEXTURE_CUBE_MAP_POSITIVE_X + eJ, 0, UJ.DEPTH24_STENCIL8, JJ, JJ, 0, UJ.DEPTH_STENCIL, UJ.UNSIGNED_INT_24_8, null) : UJ.texImage2D(UJ.TEXTURE_CUBE_MAP_POSITIVE_X + eJ, 0, UJ.DEPTH_COMPONENT24, JJ, JJ, 0, UJ.DEPTH_COMPONENT, UJ.UNSIGNED_INT, null);
      return this._bindTextureDirectly(UJ.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ZJ), ZJ
    }, UJ.ThinEngine.prototype._setCubeMapTextureParams = function(JJ, cJ, ZJ) {
      const FJ = this._gl;
      FJ.texParameteri(FJ.TEXTURE_CUBE_MAP, FJ.TEXTURE_MAG_FILTER, FJ.LINEAR), FJ.texParameteri(FJ.TEXTURE_CUBE_MAP, FJ.TEXTURE_MIN_FILTER, cJ ? FJ.LINEAR_MIPMAP_LINEAR : FJ.LINEAR), FJ.texParameteri(FJ.TEXTURE_CUBE_MAP, FJ.TEXTURE_WRAP_S, FJ.CLAMP_TO_EDGE), FJ.texParameteri(FJ.TEXTURE_CUBE_MAP, FJ.TEXTURE_WRAP_T, FJ.CLAMP_TO_EDGE), JJ.samplingMode = cJ ? 3 : 2, cJ && this.getCaps().textureMaxLevel && void 0 !== ZJ && ZJ > 0 && (FJ.texParameteri(FJ.TEXTURE_CUBE_MAP, FJ.TEXTURE_MAX_LEVEL, ZJ), JJ._maxLodLevel = ZJ), this._bindTextureDirectly(FJ.TEXTURE_CUBE_MAP, null)
    }, UJ.ThinEngine.prototype.createCubeTexture = function(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        XJ = arguments.length > 6 ? arguments[6] : void 0,
        jJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        YJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        hJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        DJ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        sJ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        nJ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        GJ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const fJ = this._gl;
      return this.createCubeTextureBase(JJ, cJ, ZJ, !!FJ, UJ, eJ, XJ, jJ, YJ, hJ, DJ, sJ, (JJ => this._bindTextureDirectly(fJ.TEXTURE_CUBE_MAP, JJ, !0)), ((JJ, cJ) => {
        const ZJ = this.needPOTTextures ? (0, qJ.d)(cJ[0].width, this._caps.maxCubemapTextureSize) : cJ[0].width,
          eJ = ZJ,
          jJ = [fJ.TEXTURE_CUBE_MAP_POSITIVE_X, fJ.TEXTURE_CUBE_MAP_POSITIVE_Y, fJ.TEXTURE_CUBE_MAP_POSITIVE_Z, fJ.TEXTURE_CUBE_MAP_NEGATIVE_X, fJ.TEXTURE_CUBE_MAP_NEGATIVE_Y, fJ.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(fJ.TEXTURE_CUBE_MAP, JJ, !0), this._unpackFlipY(!1);
        const YJ = XJ ? this._getInternalFormat(XJ, JJ._useSRGBBuffer) : JJ._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : fJ.RGBA;
        let hJ = XJ ? this._getInternalFormat(XJ) : fJ.RGBA;
        JJ._useSRGBBuffer && 1 === this.nG && (hJ = YJ);
        for (let FJ = 0; FJ < jJ.length; FJ++)
          if (cJ[FJ].width !== ZJ || cJ[FJ].height !== eJ) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void AJ.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ZJ, this._workingCanvas.height = eJ, this._workingContext.drawImage(cJ[FJ], 0, 0, cJ[FJ].width, cJ[FJ].height, 0, 0, ZJ, eJ), fJ.texImage2D(jJ[FJ], 0, YJ, hJ, fJ.UNSIGNED_BYTE, this._workingCanvas)
          } else fJ.texImage2D(jJ[FJ], 0, YJ, hJ, fJ.UNSIGNED_BYTE, cJ[FJ]);
        FJ || fJ.generateMipmap(fJ.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(JJ, !FJ), JJ.width = ZJ, JJ.height = eJ, JJ.isReady = !0, XJ && (JJ.format = XJ), JJ.onLoadedObservable.notifyObservers(JJ), JJ.onLoadedObservable.clear(), UJ && UJ()
      }), !!nJ, GJ)
    }, UJ.ThinEngine.prototype.generateMipMapsForCubemap = function(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (JJ.generateMipMaps) {
        const ZJ = this._gl;
        this._bindTextureDirectly(ZJ.TEXTURE_CUBE_MAP, JJ, !0), ZJ.generateMipmap(ZJ.TEXTURE_CUBE_MAP), cJ && this._bindTextureDirectly(ZJ.TEXTURE_CUBE_MAP, null)
      }
    });
    ZJ(38779);
    let sJ = !1;
    sJ || (sJ = !0, UJ.ThinEngine.prototype.setDepthStencilTexture = function(JJ, cJ, ZJ, FJ) {
      void 0 !== JJ && (cJ && (this._boundUniforms[JJ] = cJ), ZJ && ZJ.depthStencilTexture ? this._setTexture(JJ, ZJ, !1, !0, FJ) : this._setTexture(JJ, null, void 0, void 0, FJ))
    });
    let nJ = !1;
    nJ || (nJ = !0, UJ.ThinEngine.prototype.createRenderTargetCubeTexture = function(JJ, cJ) {
      const ZJ = this._createHardwareRenderTargetWrapper(!1, !0, JJ),
        FJ = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...cJ
        };
      FJ.generateStencilBuffer = FJ.generateDepthBuffer && FJ.generateStencilBuffer, (1 !== FJ.type || this._caps.textureFloatLinearFiltering) && (2 !== FJ.type || this._caps.textureHalfFloatLinearFiltering) || (FJ.samplingMode = 1);
      const UJ = this._gl,
        eJ = new XJ.e(this, 5);
      this._bindTextureDirectly(UJ.TEXTURE_CUBE_MAP, eJ, !0);
      const qJ = this._getSamplingParameters(FJ.samplingMode, FJ.generateMipMaps);
      1 !== FJ.type || this._caps.textureFloat || (FJ.type = 0, AJ.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), UJ.texParameteri(UJ.TEXTURE_CUBE_MAP, UJ.TEXTURE_MAG_FILTER, qJ.mag), UJ.texParameteri(UJ.TEXTURE_CUBE_MAP, UJ.TEXTURE_MIN_FILTER, qJ.min), UJ.texParameteri(UJ.TEXTURE_CUBE_MAP, UJ.TEXTURE_WRAP_S, UJ.CLAMP_TO_EDGE), UJ.texParameteri(UJ.TEXTURE_CUBE_MAP, UJ.TEXTURE_WRAP_T, UJ.CLAMP_TO_EDGE);
      for (let XJ = 0; XJ < 6; XJ++) UJ.texImage2D(UJ.TEXTURE_CUBE_MAP_POSITIVE_X + XJ, 0, this._getRGBABufferInternalSizedFormat(FJ.type, FJ.format), JJ, JJ, 0, this._getInternalFormat(FJ.format), this._getWebGLTextureType(FJ.type), null);
      const jJ = UJ.createFramebuffer();
      return this._bindUnboundFramebuffer(jJ), ZJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(FJ.generateStencilBuffer, FJ.generateDepthBuffer, JJ, JJ), FJ.generateMipMaps && UJ.generateMipmap(UJ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(UJ.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ZJ._framebuffer = jJ, ZJ._generateDepthBuffer = FJ.generateDepthBuffer, ZJ._generateStencilBuffer = FJ.generateStencilBuffer, eJ.width = JJ, eJ.height = JJ, eJ.isReady = !0, eJ.isCube = !0, eJ.samples = 1, eJ.generateMipMaps = FJ.generateMipMaps, eJ.samplingMode = FJ.samplingMode, eJ.type = FJ.type, eJ.format = FJ.format, this._internalTexturesCache.push(eJ), ZJ.setTextures(eJ), ZJ
    });
    var GJ = ZJ(38790),
      fJ = ZJ(38797);
    let xJ = !1;
    xJ || (xJ = !0, UJ.ThinEngine.prototype.createPrefilteredCubeTexture = function(JJ, cJ, FJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        qJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jJ = arguments.length > 6 ? arguments[6] : void 0,
        YJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        hJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        DJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(JJ, cJ, null, !1, (async JJ => {
        if (!JJ) return void(eJ && eJ(null));
        const qJ = JJ.texture;
        if (hJ ? JJ.info.sphericalPolynomial && (qJ._sphericalPolynomial = JJ.info.sphericalPolynomial) : qJ._sphericalPolynomial = qJ._sphericalPolynomial ?? new GJ.h, qJ._source = 9, this.getCaps().textureLOD) return void(eJ && eJ(qJ));
        const jJ = this._gl,
          YJ = JJ.width;
        if (!YJ) return;
        const {
          DDSTools: DJ
        } = await ZJ.e(286).then((() => ZJ(40473))), sJ = [];
        for (let ZJ = 0; ZJ < 3; ZJ++) {
          const eJ = 1 - ZJ / 2,
            hJ = UJ,
            nJ = Math.log2(YJ) * FJ + UJ,
            GJ = hJ + (nJ - hJ) * eJ,
            xJ = Math.round(Math.min(Math.max(GJ, 0), nJ)),
            rJ = new XJ.e(this, 2);
          if (rJ.type = qJ.type, rJ.format = qJ.format, rJ.width = Math.pow(2, Math.max(Math.log2(YJ) - xJ, 0)), rJ.height = rJ.width, rJ.isCube = !0, rJ._cachedWrapU = 0, rJ._cachedWrapV = 0, this._bindTextureDirectly(jJ.TEXTURE_CUBE_MAP, rJ, !0), rJ.samplingMode = 2, jJ.texParameteri(jJ.TEXTURE_CUBE_MAP, jJ.TEXTURE_MAG_FILTER, jJ.LINEAR), jJ.texParameteri(jJ.TEXTURE_CUBE_MAP, jJ.TEXTURE_MIN_FILTER, jJ.LINEAR), jJ.texParameteri(jJ.TEXTURE_CUBE_MAP, jJ.TEXTURE_WRAP_S, jJ.CLAMP_TO_EDGE), jJ.texParameteri(jJ.TEXTURE_CUBE_MAP, jJ.TEXTURE_WRAP_T, jJ.CLAMP_TO_EDGE), JJ.isDDS) {
            const cJ = JJ.info,
              ZJ = JJ.data;
            this._unpackFlipY(cJ.isCompressed), DJ.UploadDDSLevels(this, rJ, ZJ, cJ, !0, 6, xJ)
          } else AJ.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(jJ.TEXTURE_CUBE_MAP, null);
          const vJ = new fJ.c(cJ);
          vJ._isCube = !0, vJ._texture = rJ, rJ.isReady = !0, sJ.push(vJ)
        }
        qJ._lodTextureHigh = sJ[2], qJ._lodTextureMid = sJ[1], qJ._lodTextureLow = sJ[0], eJ && eJ(qJ)
      }), qJ, jJ, YJ, hJ, FJ, UJ, null, void 0, !1, DJ)
    });
    var rJ = ZJ(38720);
    let vJ = !1;
    vJ || (vJ = !0, UJ.ThinEngine.prototype.createUniformBuffer = function(JJ, cJ) {
      const ZJ = this._gl.createBuffer();
      if (!ZJ) throw new Error("Unable to create uniform buffer");
      const FJ = new rJ.e(ZJ);
      return this.bindUniformBuffer(FJ), JJ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, JJ, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(JJ), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), FJ.references = 1, FJ
    }, UJ.ThinEngine.prototype.createDynamicUniformBuffer = function(JJ, cJ) {
      const ZJ = this._gl.createBuffer();
      if (!ZJ) throw new Error("Unable to create dynamic uniform buffer");
      const FJ = new rJ.e(ZJ);
      return this.bindUniformBuffer(FJ), JJ instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, JJ, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(JJ), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), FJ.references = 1, FJ
    }, UJ.ThinEngine.prototype.updateUniformBuffer = function(JJ, cJ, ZJ, FJ) {
      this.bindUniformBuffer(JJ), void 0 === ZJ && (ZJ = 0), void 0 === FJ ? cJ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZJ, cJ) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZJ, new Float32Array(cJ)) : cJ instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, cJ.subarray(ZJ, ZJ + FJ)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(cJ).subarray(ZJ, ZJ + FJ)), this.bindUniformBuffer(null)
    }, UJ.ThinEngine.prototype.bindUniformBuffer = function(JJ) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, JJ ? JJ.underlyingResource : null)
    }, UJ.ThinEngine.prototype.bindUniformBufferBase = function(JJ, cJ, ZJ) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, cJ, JJ ? JJ.underlyingResource : null)
    }, UJ.ThinEngine.prototype.bindUniformBlock = function(JJ, cJ, ZJ) {
      const FJ = JJ.program,
        UJ = this._gl.getUniformBlockIndex(FJ, cJ);
      4294967295 !== UJ && this._gl.uniformBlockBinding(FJ, UJ, ZJ)
    });
    var mJ = ZJ(38663),
      QJ = ZJ(38698);
    let EJ = !1;
    EJ || (EJ = !0, QJ.e.prototype.displayLoadingUI = function() {
      if (!(0, mJ.i)()) return;
      const JJ = this.loadingScreen;
      JJ && JJ.displayLoadingUI()
    }, QJ.e.prototype.hideLoadingUI = function() {
      if (!(0, mJ.i)()) return;
      const JJ = this._loadingScreen;
      JJ && JJ.hideLoadingUI()
    }, Object.defineProperty(QJ.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = QJ.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(JJ) {
        this._loadingScreen = JJ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(QJ.e.prototype, "loadingUIText", {
      set: function(JJ) {
        this.loadingScreen.loadingUIText = JJ
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(QJ.e.prototype, "loadingUIBackgroundColor", {
      set: function(JJ) {
        this.loadingScreen.loadingUIBackgroundColor = JJ
      },
      enumerable: !0,
      configurable: !0
    })), (0, ZJ(38756).d)();
    let VJ = !1;
    VJ || (VJ = !0, QJ.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, QJ.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, QJ.e.prototype.setDepthFunction = function(JJ) {
      this._depthCullingState.depthFunc = JJ
    }, QJ.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, QJ.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, QJ.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, QJ.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, QJ.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, QJ.e.prototype.setDepthWrite = function(JJ) {
      this._depthCullingState.depthMask = JJ
    }, QJ.e.prototype.setAlphaConstants = function(JJ, cJ, ZJ, FJ) {
      this._alphaState.setAlphaBlendConstants(JJ, cJ, ZJ, FJ)
    }, QJ.e.prototype.getAlphaMode = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[JJ]
    }, QJ.e.prototype.getAlphaEquation = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[JJ]
    });
    let KJ = !1;
    KJ || (KJ = !0, QJ.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, QJ.e.prototype.setStencilBuffer = function(JJ) {
      this._stencilState.stencilTest = JJ
    }, QJ.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, QJ.e.prototype.setStencilMask = function(JJ) {
      this._stencilState.stencilMask = JJ
    }, QJ.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, QJ.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, QJ.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, QJ.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, QJ.e.prototype.setStencilFunction = function(JJ) {
      this._stencilState.stencilFunc = JJ
    }, QJ.e.prototype.setStencilBackFunction = function(JJ) {
      this._stencilState.stencilBackFunc = JJ
    }, QJ.e.prototype.setStencilFunctionReference = function(JJ) {
      this._stencilState.stencilFuncRef = JJ
    }, QJ.e.prototype.setStencilFunctionMask = function(JJ) {
      this._stencilState.stencilFuncMask = JJ
    }, QJ.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, QJ.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, QJ.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, QJ.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, QJ.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, QJ.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, QJ.e.prototype.setStencilOperationFail = function(JJ) {
      this._stencilState.stencilOpStencilFail = JJ
    }, QJ.e.prototype.setStencilBackOperationFail = function(JJ) {
      this._stencilState.stencilBackOpStencilFail = JJ
    }, QJ.e.prototype.setStencilOperationDepthFail = function(JJ) {
      this._stencilState.stencilOpDepthFail = JJ
    }, QJ.e.prototype.setStencilBackOperationDepthFail = function(JJ) {
      this._stencilState.stencilBackOpDepthFail = JJ
    }, QJ.e.prototype.setStencilOperationPass = function(JJ) {
      this._stencilState.stencilOpStencilDepthPass = JJ
    }, QJ.e.prototype.setStencilBackOperationPass = function(JJ) {
      this._stencilState.stencilBackOpStencilDepthPass = JJ
    }, QJ.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, QJ.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ZJ(38831);
    let yJ = !1;
    yJ || (yJ = !0, QJ.e.prototype.createDepthStencilTexture = function(JJ, cJ, ZJ) {
      if (cJ.isCube) {
        const ZJ = JJ.width || JJ;
        return this._createDepthStencilCubeTexture(ZJ, cJ)
      }
      return this._createDepthStencilTexture(JJ, cJ, ZJ)
    });
    ZJ(38840), ZJ(38865);
    let SJ = !1;
    SJ || (SJ = !0, UJ.ThinEngine.prototype.enableScissor = function(JJ, cJ, ZJ, FJ) {
      const UJ = this._gl;
      UJ.enable(UJ.SCISSOR_TEST), UJ.scissor(JJ, cJ, ZJ, FJ)
    }, UJ.ThinEngine.prototype.disableScissor = function() {
      const JJ = this._gl;
      JJ.disable(JJ.SCISSOR_TEST)
    })
  },
  38633: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => QJ
    });
    var FJ = ZJ(38635),
      UJ = ZJ(36192),
      eJ = ZJ(38644),
      XJ = ZJ(38700);
    class AJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new qJ(JJ)
      }
      sampleFrame() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const cJ = JJ - this._lastFrameTimeMs;
            this._rollingFrameTime.add(cJ)
          }
          this._lastFrameTimeMs = JJ
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
        const JJ = this._rollingFrameTime.history(0);
        return 0 === JJ ? 0 : 1e3 / JJ
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
    class qJ {
      constructor(JJ) {
        this._samples = new Array(JJ), this.reset()
      }
      add(JJ) {
        let cJ;
        if (this.isSaturated()) {
          const JJ = this._samples[this._pos];
          cJ = JJ - this.average, this.average -= cJ / (this._sampleCount - 1), this._m2 -= cJ * (JJ - this.average)
        } else this._sampleCount++;
        cJ = JJ - this.average, this.average += cJ / this._sampleCount, this._m2 += cJ * (JJ - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = JJ, this._pos++, this._pos %= this._samples.length
      }
      history(JJ) {
        if (JJ >= this._sampleCount || JJ >= this._samples.length) return 0;
        const cJ = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(cJ - JJ)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(JJ) {
        const cJ = this._samples.length;
        return (JJ % cJ + cJ) % cJ
      }
    }
    var jJ = ZJ(38720),
      YJ = ZJ(37660),
      hJ = ZJ(38732),
      DJ = ZJ(38698),
      sJ = ZJ(38663);

    function nJ(JJ) {
      const cJ = function(JJ) {
        if (!(0, sJ.f)() || !document.body) return null;
        const cJ = document.createElement("span");
        cJ.textContent = "Hg", cJ.style.font = JJ;
        const ZJ = document.createElement("div");
        ZJ.style.display = "inline-block", ZJ.style.width = "1px", ZJ.style.height = "0px", ZJ.style.verticalAlign = "bottom";
        const FJ = document.createElement("div");
        let UJ, eJ;
        FJ.style.whiteSpace = "nowrap", FJ.appendChild(cJ), FJ.appendChild(ZJ), document.body.appendChild(FJ);
        try {
          eJ = ZJ.getBoundingClientRect().top - cJ.getBoundingClientRect().top, ZJ.style.verticalAlign = "baseline", UJ = ZJ.getBoundingClientRect().top - cJ.getBoundingClientRect().top
        } finally {
          document.body.removeChild(FJ)
        }
        const XJ = {
          ascent: UJ,
          height: eJ,
          descent: eJ - UJ
        };
        return GJ(XJ) ? XJ : null
      }(JJ);
      if (cJ) return cJ;
      const ZJ = function(JJ) {
        let cJ = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? cJ = new OffscreenCanvas(64, 64) : (0, sJ.f)() && "function" === typeof document.createElement && (cJ = document.createElement("canvas"), cJ.width = 64, cJ.height = 64);
          const ZJ = cJ?.getContext("2d");
          if (!ZJ) return null;
          ZJ.font = JJ;
          const FJ = ZJ.measureText("Hg"),
            UJ = Number(FJ.actualBoundingBoxAscent ?? FJ.fontBoundingBoxAscent),
            eJ = Number(FJ.actualBoundingBoxDescent ?? FJ.fontBoundingBoxDescent),
            XJ = {
              ascent: UJ,
              height: UJ + eJ,
              descent: eJ
            };
          return GJ(XJ) ? XJ : null
        } catch {
          return null
        } finally {
          const JJ = cJ;
          "function" === typeof JJ?.dispose && JJ.dispose()
        }
      }(JJ);
      return ZJ || function(JJ) {
        const cJ = Math.max(1, function(JJ) {
            const cJ = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(JJ || ""));
            return cJ ? Number(cJ[1]) : 16
          }(JJ)),
          ZJ = .8 * cJ,
          FJ = .2 * cJ;
        return {
          ascent: ZJ,
          height: ZJ + FJ,
          descent: FJ
        }
      }(JJ)
    }

    function GJ(JJ) {
      return Number.isFinite(JJ.ascent) && Number.isFinite(JJ.height) && Number.isFinite(JJ.descent) && JJ.height > 0
    }

    function fJ(JJ) {
      if (JJ.requestPointerLock) {
        const cJ = JJ.requestPointerLock();
        cJ instanceof Promise ? cJ.then((() => {
          JJ.focus()
        })).catch((() => {})) : JJ.focus()
      }
    }
    var xJ = ZJ(38748),
      rJ = ZJ(38689),
      vJ = ZJ(38756),
      mJ = ZJ(38759);
    class QJ extends eJ.ThinEngine {
      static get NpmPackage() {
        return DJ.e.NpmPackage
      }
      static get Version() {
        return DJ.e.Version
      }
      static get Instances() {
        return UJ.c.Instances
      }
      static get LastCreatedEngine() {
        return UJ.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return UJ.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(JJ) {
        return DJ.e.DefaultLoadingScreenFactory(JJ)
      }
      get _supportsHardwareTextureRescaling() {
        return !!QJ._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, vJ.d)(), (0, mJ.b)(), super(JJ, cJ, ZJ, FJ), this._performanceMonitor = new AJ, this._drawCalls = new xJ.b, JJ && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(JJ) {
        super._sharedInit(JJ),
          function(JJ, cJ, ZJ) {
            JJ._onCanvasFocus = () => {
              JJ.onCanvasFocusObservable.notifyObservers(JJ)
            }, JJ._onCanvasBlur = () => {
              JJ.onCanvasBlurObservable.notifyObservers(JJ)
            }, JJ._onCanvasContextMenu = cJ => {
              JJ.disableContextMenu && cJ.preventDefault()
            }, cJ.addEventListener("focus", JJ._onCanvasFocus), cJ.addEventListener("blur", JJ._onCanvasBlur), cJ.addEventListener("contextmenu", JJ._onCanvasContextMenu), JJ._onBlur = () => {
              JJ.disablePerformanceMonitorInBackground && JJ.performanceMonitor.disable(), JJ._windowIsBackground = !0
            }, JJ._onFocus = () => {
              JJ.disablePerformanceMonitorInBackground && JJ.performanceMonitor.enable(), JJ._windowIsBackground = !1
            }, JJ._onCanvasPointerOut = ZJ => {
              document.elementFromPoint(ZJ.clientX, ZJ.clientY) !== cJ && JJ.onCanvasPointerOutObservable.notifyObservers(ZJ)
            };
            const FJ = JJ.getHostWindow();
            FJ && "function" === typeof FJ.addEventListener && (FJ.addEventListener("blur", JJ._onBlur), FJ.addEventListener("focus", JJ._onFocus)), cJ.addEventListener("pointerout", JJ._onCanvasPointerOut), ZJ.doNotHandleTouchAction || function(JJ) {
              JJ && JJ.setAttribute && (JJ.setAttribute("touch-action", "none"), JJ.style.touchAction = "none", JJ.style.webkitTapHighlightColor = "transparent")
            }(cJ), !DJ.e.audioEngine && ZJ.audioEngine && DJ.e.AudioEngineFactory && (DJ.e.audioEngine = DJ.e.AudioEngineFactory(JJ.getRenderingCanvas(), JJ.getAudioContext(), JJ.getAudioDestination())), (0, sJ.f)() && (JJ._onFullscreenChange = () => {
              JJ.isFullscreen = !!document.fullscreenElement, JJ.isFullscreen && JJ._pointerLockRequested && cJ && fJ(cJ)
            }, document.addEventListener("fullscreenchange", JJ._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", JJ._onFullscreenChange, !1), JJ._onPointerLockChange = () => {
              JJ.isPointerLock = document.pointerLockElement === cJ
            }, document.addEventListener("pointerlockchange", JJ._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", JJ._onPointerLockChange, !1)), JJ.enableOfflineSupport = void 0 !== DJ.e.OfflineProviderFactory, JJ._deterministicLockstep = !!ZJ.deterministicLockstep, JJ._lockstepMaxSteps = ZJ.lockstepMaxSteps || 0, JJ._timeStep = ZJ.timeStep || 1 / 60
          }(this, JJ, this._creationOptions)
      }
      resizeImageBitmap(JJ, cJ, ZJ) {
        return function(JJ, cJ, ZJ, FJ) {
          const UJ = JJ.createCanvas(ZJ, FJ).getContext("2d");
          if (!UJ) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return UJ.drawImage(cJ, 0, 0), UJ.getImageData(0, 0, ZJ, FJ).data
        }(this, JJ, cJ, ZJ)
      }
      async _createImageBitmapFromSource(JJ, cJ) {
        return await async function(JJ, cJ, ZJ) {
          return await new Promise(((FJ, UJ) => {
            const eJ = new Image;
            eJ.onload = () => {
              eJ.decode().then((() => {
                JJ.createImageBitmap(eJ, ZJ).then((JJ => {
                  FJ(JJ)
                }))
              }))
            }, eJ.onerror = () => {
              UJ(`Error loading image ${eJ.src}`)
            }, eJ.src = cJ
          }))
        }(this, JJ, cJ)
      }
      switchFullscreen(JJ) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(JJ)
      }
      enterFullscreen(JJ) {
        this.isFullscreen || (this._pointerLockRequested = JJ, this._renderingCanvas && function(JJ) {
          const cJ = JJ.requestFullscreen || JJ.webkitRequestFullscreen;
          cJ && cJ.call(JJ)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const JJ = document;
          document.exitFullscreen ? document.exitFullscreen() : JJ.webkitCancelFullScreen && JJ.webkitCancelFullScreen()
        }()
      }
      setDitheringState(JJ) {
        JJ ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(JJ) {
        JJ ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(JJ, cJ, ZJ, FJ) {
        const UJ = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(JJ, cJ, ZJ, FJ), UJ
      }
      scissorClear(JJ, cJ, ZJ, FJ, UJ) {
        this.enableScissor(JJ, cJ, ZJ, FJ), this.clear(UJ, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(JJ) {
        const cJ = this._gl.getAttachedShaders(JJ);
        return cJ ? this._gl.getShaderSource(cJ[0]) : null
      }
      getFragmentShaderSource(JJ) {
        const cJ = this._gl.getAttachedShaders(JJ);
        return cJ ? this._gl.getShaderSource(cJ[1]) : null
      }
      set framebufferDimensionsObject(JJ) {
        this._framebufferDimensionsObject = JJ, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const JJ of this.scenes) JJ.resetCachedMaterial(), JJ._rebuildGeometries();
        for (const JJ of this._virtualScenes) JJ.resetCachedMaterial(), JJ._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(JJ) {
        return nJ(JJ)
      }
      enterPointerlock() {
        this._renderingCanvas && fJ(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      yE() {
        this._measureFps(), super.yE()
      }
      _deletePipelineContext(JJ) {
        const cJ = JJ;
        cJ && cJ.program && cJ.transformFeedback && (this.deleteTransformFeedback(cJ.transformFeedback), cJ.transformFeedback = null), super._deletePipelineContext(JJ)
      }
      createShaderProgram(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        UJ = UJ || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const XJ = super.createShaderProgram(JJ, cJ, ZJ, FJ, UJ, eJ);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), XJ
      }
      _createShaderProgram(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const eJ = FJ.createProgram();
        if (JJ.program = eJ, !eJ) throw new Error("Unable to create program");
        if (FJ.attachShader(eJ, cJ), FJ.attachShader(eJ, ZJ), this.nG > 1 && UJ) {
          const cJ = this.createTransformFeedback();
          this.bindTransformFeedback(cJ), this.setTranformFeedbackVaryings(eJ, UJ), JJ.transformFeedback = cJ
        }
        return FJ.linkProgram(eJ), this.nG > 1 && UJ && this.bindTransformFeedback(null), JJ.context = FJ, JJ.vertexShader = cJ, JJ.fragmentShader = ZJ, JJ.isParallelCompiled || this._finalizePipelineContext(JJ), eJ
      }
      _releaseTexture(JJ) {
        super._releaseTexture(JJ)
      }
      _releaseRenderTargetWrapper(JJ) {
        super._releaseRenderTargetWrapper(JJ);
        for (const cJ of this.scenes) {
          for (const ZJ of cJ.postProcesses) ZJ._outputTexture === JJ && (ZJ._outputTexture = null);
          for (const ZJ of cJ.cameras)
            for (const cJ of ZJ._postProcesses) cJ && cJ._outputTexture === JJ && (cJ._outputTexture = null)
        }
      }
      _rescaleTexture(JJ, cJ, ZJ, FJ, UJ) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const eJ = this.createRenderTargetTexture({
          width: cJ.width,
          height: cJ.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && QJ._RescalePostProcessFactory && (this._rescalePostProcess = QJ._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const XJ = () => {
              this._rescalePostProcess.onApply = function(cJ) {
                cJ._bindTexture("textureSampler", JJ)
              };
              let XJ = ZJ;
              XJ || (XJ = this.scenes[this.scenes.length - 1]), XJ.postProcessManager.directRender([this._rescalePostProcess], eJ, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, cJ, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, FJ, 0, 0, cJ.width, cJ.height, 0), this.unBindFramebuffer(eJ), eJ.dispose(), UJ && UJ()
            },
            AJ = this._rescalePostProcess.getEffect();
          AJ ? AJ.executeWhenCompiled(XJ) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((JJ => {
            JJ.executeWhenCompiled(XJ)
          }))
        }
      }
      wrapWebGLTexture(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const XJ = new hJ.c(JJ, this._gl),
          AJ = new FJ.e(this, 15, !0);
        return AJ._hardwareTexture = XJ, AJ.baseWidth = UJ, AJ.baseHeight = eJ, AJ.width = UJ, AJ.height = eJ, AJ.isReady = !0, AJ.useMipMaps = cJ, this.updateTextureSamplingMode(ZJ, AJ), AJ
      }
      updateWrappedWebGLTexture(JJ, cJ) {
        if (15 !== JJ.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const FJ of this._renderTargetWrapperCache)
          if (FJ.textures?.includes(JJ)) {
            if (FJ.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (FJ._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } JJ._hardwareTexture = new hJ.c(cJ, this._gl), JJ.isReady = !0, JJ._cachedCoordinatesMode = null, JJ._cachedWrapU = null, JJ._cachedWrapV = null, JJ._cachedWrapR = null, JJ._cachedAnisotropicFilteringLevel = null;
        for (const FJ in this._boundTexturesCache) this._boundTexturesCache[FJ] === JJ && (this._boundTexturesCache[FJ] = null);
        this.updateTextureSamplingMode(JJ.samplingMode, JJ);
        const ZJ = this._gl;
        for (const FJ of this._renderTargetWrapperCache) {
          if (FJ.texture !== JJ) continue;
          const UJ = FJ,
            eJ = FJ.samples,
            XJ = eJ > 1;
          UJ._framebuffer && ZJ.deleteFramebuffer(UJ._framebuffer), !XJ && UJ._depthStencilBuffer && (ZJ.deleteRenderbuffer(UJ._depthStencilBuffer), UJ._depthStencilBuffer = null);
          const AJ = this._currentFramebuffer,
            qJ = ZJ.createFramebuffer();
          this._bindUnboundFramebuffer(qJ), ZJ.framebufferTexture2D(ZJ.FRAMEBUFFER, ZJ.COLOR_ATTACHMENT0, ZJ.TEXTURE_2D, cJ, 0), XJ || (UJ._depthStencilBuffer = this._setupFramebufferDepthAttachments(FJ._generateStencilBuffer, FJ._generateDepthBuffer, FJ.width, FJ.height)), this._bindUnboundFramebuffer(AJ), UJ._framebuffer = qJ, XJ && (FJ._samples = 1, this.updateRenderTargetTextureSampleCount(UJ, eJ))
        }
      }
      _uploadImageToTexture(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const UJ = this._gl,
          eJ = this._getWebGLTextureType(JJ.type),
          XJ = this._getInternalFormat(JJ.format),
          AJ = this._getRGBABufferInternalSizedFormat(JJ.type, XJ),
          qJ = JJ.isCube ? UJ.TEXTURE_CUBE_MAP : UJ.TEXTURE_2D;
        this._bindTextureDirectly(qJ, JJ, !0), this._unpackFlipY(JJ.invertY);
        let jJ = UJ.TEXTURE_2D;
        JJ.isCube && (jJ = UJ.TEXTURE_CUBE_MAP_POSITIVE_X + ZJ), UJ.texImage2D(jJ, FJ, AJ, XJ, eJ, cJ), this._bindTextureDirectly(qJ, null, !0)
      }
      updateTextureComparisonFunction(JJ, cJ) {
        if (1 === this.nG) return void YJ.c.Error("WebGL 1 does not support texture comparison.");
        const ZJ = this._gl;
        JJ.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, JJ, !0), 0 === cJ ? (ZJ.texParameteri(ZJ.TEXTURE_CUBE_MAP, ZJ.TEXTURE_COMPARE_FUNC, 515), ZJ.texParameteri(ZJ.TEXTURE_CUBE_MAP, ZJ.TEXTURE_COMPARE_MODE, ZJ.NONE)) : (ZJ.texParameteri(ZJ.TEXTURE_CUBE_MAP, ZJ.TEXTURE_COMPARE_FUNC, cJ), ZJ.texParameteri(ZJ.TEXTURE_CUBE_MAP, ZJ.TEXTURE_COMPARE_MODE, ZJ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, JJ, !0), 0 === cJ ? (ZJ.texParameteri(ZJ.TEXTURE_2D, ZJ.TEXTURE_COMPARE_FUNC, 515), ZJ.texParameteri(ZJ.TEXTURE_2D, ZJ.TEXTURE_COMPARE_MODE, ZJ.NONE)) : (ZJ.texParameteri(ZJ.TEXTURE_2D, ZJ.TEXTURE_COMPARE_FUNC, cJ), ZJ.texParameteri(ZJ.TEXTURE_2D, ZJ.TEXTURE_COMPARE_MODE, ZJ.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), JJ._comparisonFunction = cJ
      }
      createInstancesBuffer(JJ) {
        const cJ = this._gl.createBuffer();
        if (!cJ) throw new Error("Unable to create instance buffer");
        const ZJ = new jJ.e(cJ);
        return ZJ.qh = JJ, this.bindArrayBuffer(ZJ), this._gl.bufferData(this._gl.ARRAY_BUFFER, JJ, this._gl.DYNAMIC_DRAW), ZJ.references = 1, ZJ
      }
      deleteInstancesBuffer(JJ) {
        this._gl.deleteBuffer(JJ)
      }
      async _clientWaitAsync(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const FJ = this._gl;
        return await new Promise(((UJ, eJ) => {
          (0, rJ.h)((() => {
            const ZJ = FJ.clientWaitSync(JJ, cJ, 0);
            if (ZJ == FJ.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ZJ != FJ.TIMEOUT_EXPIRED
          }), UJ, eJ, ZJ)
        }))
      }
      _readPixelsAsync(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const AJ = this._gl,
          qJ = AJ.createBuffer();
        AJ.bindBuffer(AJ.PIXEL_PACK_BUFFER, qJ), AJ.bufferData(AJ.PIXEL_PACK_BUFFER, XJ.byteLength, AJ.STREAM_READ), AJ.readPixels(JJ, cJ, ZJ, FJ, UJ, eJ, 0), AJ.bindBuffer(AJ.PIXEL_PACK_BUFFER, null);
        const jJ = AJ.fenceSync(AJ.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return jJ ? (AJ.flush(), this._clientWaitAsync(jJ, 0, 10).then((() => (AJ.deleteSync(jJ), AJ.bindBuffer(AJ.PIXEL_PACK_BUFFER, qJ), AJ.getBufferSubData(AJ.PIXEL_PACK_BUFFER, 0, XJ), AJ.bindBuffer(AJ.PIXEL_PACK_BUFFER, null), AJ.deleteBuffer(qJ), XJ)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(JJ, cJ) {
            1 === UJ.c.Instances.length && DJ.e.audioEngine && (DJ.e.audioEngine.dispose(), DJ.e.audioEngine = null);
            const ZJ = JJ.getHostWindow();
            ZJ && "function" === typeof ZJ.removeEventListener && (ZJ.removeEventListener("blur", JJ._onBlur), ZJ.removeEventListener("focus", JJ._onFocus)), cJ && (cJ.removeEventListener("focus", JJ._onCanvasFocus), cJ.removeEventListener("blur", JJ._onCanvasBlur), cJ.removeEventListener("pointerout", JJ._onCanvasPointerOut), cJ.removeEventListener("contextmenu", JJ._onCanvasContextMenu)), (0, sJ.f)() && (document.removeEventListener("fullscreenchange", JJ._onFullscreenChange), document.removeEventListener("mozfullscreenchange", JJ._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", JJ._onFullscreenChange), document.removeEventListener("msfullscreenchange", JJ._onFullscreenChange), document.removeEventListener("pointerlockchange", JJ._onPointerLockChange), document.removeEventListener("mspointerlockchange", JJ._onPointerLockChange), document.removeEventListener("mozpointerlockchange", JJ._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", JJ._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    QJ.ALPHA_DISABLE = 0, QJ.ALPHA_ADD = 1, QJ.ALPHA_COMBINE = 2, QJ.ALPHA_SUBTRACT = 3, QJ.ALPHA_MULTIPLY = 4, QJ.ALPHA_MAXIMIZED = 5, QJ.ALPHA_ONEONE = 6, QJ.ALPHA_PREMULTIPLIED = 7, QJ.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, QJ.ALPHA_INTERPOLATE = 9, QJ.ALPHA_SCREENMODE = 10, QJ.DELAYLOADSTATE_NONE = 0, QJ.DELAYLOADSTATE_LOADED = 1, QJ.DELAYLOADSTATE_LOADING = 2, QJ.DELAYLOADSTATE_NOTLOADED = 4, QJ.NEVER = 512, QJ.ALWAYS = 519, QJ.LESS = 513, QJ.EQUAL = 514, QJ.LEQUAL = 515, QJ.GREATER = 516, QJ.GEQUAL = 518, QJ.NOTEQUAL = 517, QJ.KEEP = 7680, QJ.REPLACE = 7681, QJ.INCR = 7682, QJ.DECR = 7683, QJ.INVERT = 5386, QJ.INCR_WRAP = 34055, QJ.DECR_WRAP = 34056, QJ.TEXTURE_CLAMP_ADDRESSMODE = 0, QJ.TEXTURE_WRAP_ADDRESSMODE = 1, QJ.TEXTURE_MIRROR_ADDRESSMODE = 2, QJ.TEXTUREFORMAT_ALPHA = 0, QJ.TEXTUREFORMAT_LUMINANCE = 1, QJ.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, QJ.TEXTUREFORMAT_RGB = 4, QJ.TEXTUREFORMAT_RGBA = 5, QJ.TEXTUREFORMAT_RED = 6, QJ.TEXTUREFORMAT_R = 6, QJ.TEXTUREFORMAT_R16_UNORM = 33322, QJ.TEXTUREFORMAT_RG16_UNORM = 33324, QJ.TEXTUREFORMAT_RGB16_UNORM = 32852, QJ.TEXTUREFORMAT_RGBA16_UNORM = 32859, QJ.TEXTUREFORMAT_R16_SNORM = 36760, QJ.TEXTUREFORMAT_RG16_SNORM = 36761, QJ.TEXTUREFORMAT_RGB16_SNORM = 36762, QJ.TEXTUREFORMAT_RGBA16_SNORM = 36763, QJ.TEXTUREFORMAT_RG = 7, QJ.TEXTUREFORMAT_RED_INTEGER = 8, QJ.TEXTUREFORMAT_R_INTEGER = 8, QJ.TEXTUREFORMAT_RG_INTEGER = 9, QJ.TEXTUREFORMAT_RGB_INTEGER = 10, QJ.TEXTUREFORMAT_RGBA_INTEGER = 11, QJ.TEXTURETYPE_UNSIGNED_BYTE = 0, QJ.TEXTURETYPE_UNSIGNED_INT = 0, QJ.TEXTURETYPE_FLOAT = 1, QJ.TEXTURETYPE_HALF_FLOAT = 2, QJ.TEXTURETYPE_BYTE = 3, QJ.TEXTURETYPE_SHORT = 4, QJ.TEXTURETYPE_UNSIGNED_SHORT = 5, QJ.TEXTURETYPE_INT = 6, QJ.TEXTURETYPE_UNSIGNED_INTEGER = 7, QJ.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, QJ.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, QJ.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, QJ.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, QJ.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, QJ.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, QJ.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, QJ.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, QJ.TEXTURE_NEAREST_SAMPLINGMODE = 1, QJ.TEXTURE_BILINEAR_SAMPLINGMODE = 2, QJ.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, QJ.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, QJ.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, QJ.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, QJ.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, QJ.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, QJ.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, QJ.TEXTURE_NEAREST_LINEAR = 7, QJ.TEXTURE_NEAREST_NEAREST = 1, QJ.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, QJ.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, QJ.TEXTURE_LINEAR_LINEAR = 2, QJ.TEXTURE_LINEAR_NEAREST = 12, QJ.TEXTURE_EXPLICIT_MODE = 0, QJ.TEXTURE_SPHERICAL_MODE = 1, QJ.TEXTURE_PLANAR_MODE = 2, QJ.TEXTURE_CUBIC_MODE = 3, QJ.TEXTURE_PROJECTION_MODE = 4, QJ.TEXTURE_SKYBOX_MODE = 5, QJ.TEXTURE_INVCUBIC_MODE = 6, QJ.TEXTURE_EQUIRECTANGULAR_MODE = 7, QJ.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, QJ.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, QJ.SCALEMODE_FLOOR = 1, QJ.SCALEMODE_NEAREST = 2, QJ.SCALEMODE_CEILING = 3
  },
  38784: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(38741);
    class UJ {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(JJ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = JJ, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, JJ && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, FJ.e)(JJ.format))
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
      getBaseArrayLayer(JJ) {
        if (!this._textures) return -1;
        const cJ = this._textures[JJ],
          ZJ = this._layerIndices?.[JJ] ?? 0,
          FJ = this._faceIndices?.[JJ] ?? 0;
        return cJ.isCube ? 6 * ZJ + FJ : cJ.is3D ? 0 : ZJ
      }
      get samples() {
        return this._samples
      }
      setSamples(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === JJ && !ZJ) return JJ;
        const FJ = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, JJ, cJ) : this._engine.updateRenderTargetTextureSampleCount(this, JJ);
        return this._samples = JJ, FJ
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = JJ, this._isCube = cJ, this._size = ZJ, this._engine = FJ, this._depthStencilTexture = null, this.label = UJ
      }
      setTextures(JJ) {
        Array.isArray(JJ) ? this._textures = JJ : this._textures = JJ ? [JJ] : null
      }
      setTexture(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[cJ] !== JJ && (this._textures[cJ] && ZJ && this._textures[cJ].dispose(), this._textures[cJ] = JJ)
      }
      setLayerAndFaceIndices(JJ, cJ) {
        this._layerIndices = JJ, this._faceIndices = cJ
      }
      setLayerAndFaceIndex() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== cJ && cJ >= 0 && (this._layerIndices[JJ] = cJ), void 0 !== ZJ && ZJ >= 0 && (this._faceIndices[JJ] = ZJ)
      }
      createDepthStencilTexture() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ZJ, this._depthStencilTextureLabel = eJ, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: cJ,
          comparisonFunction: JJ,
          generateStencil: ZJ,
          isCube: this._isCube,
          samples: FJ,
          depthTextureFormat: UJ,
          label: eJ
        }, this), this._depthStencilTexture
      }
      _shareDepth(JJ) {
        this.shareDepth(JJ)
      }
      shareDepth(JJ) {
        this._depthStencilTexture && (JJ._depthStencilTexture && JJ._depthStencilTexture.dispose(), JJ._depthStencilTexture = this._depthStencilTexture, JJ._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(JJ) {
        this.texture && this.texture._swapAndDie(JJ), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let JJ = null;
        if (this._isMulti) {
          const cJ = this.textures;
          if (cJ && cJ.length > 0) {
            let ZJ = !1,
              FJ = cJ.length,
              UJ = -1;
            const eJ = cJ[cJ.length - 1]._source;
            14 !== eJ && 12 !== eJ || (ZJ = !0, UJ = cJ[cJ.length - 1].format, FJ--);
            const XJ = [],
              AJ = [],
              qJ = [],
              jJ = [],
              YJ = [],
              hJ = [],
              DJ = [],
              sJ = {};
            for (let JJ = 0; JJ < FJ; ++JJ) {
              const ZJ = cJ[JJ];
              XJ.push(ZJ.samplingMode), AJ.push(ZJ.type), qJ.push(ZJ.format);
              void 0 !== sJ[ZJ.uniqueId] ? (jJ.push(-1), DJ.push(0)) : (sJ[ZJ.uniqueId] = JJ, ZJ.is2DArray ? (jJ.push(35866), DJ.push(ZJ.depth)) : ZJ.isCube ? (jJ.push(34067), DJ.push(0)) : ZJ.is3D ? (jJ.push(32879), DJ.push(ZJ.depth)) : (jJ.push(3553), DJ.push(0))), this._faceIndices && YJ.push(this._faceIndices[JJ] ?? 0), this._layerIndices && hJ.push(this._layerIndices[JJ] ?? 0)
            }
            const nJ = {
                samplingModes: XJ,
                generateMipMaps: cJ[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ZJ,
                depthTextureFormat: UJ,
                types: AJ,
                formats: qJ,
                EXJ: FJ,
                targetTypes: jJ,
                faceIndex: YJ,
                layerIndex: hJ,
                layerCounts: DJ,
                label: this.label
              },
              GJ = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            JJ = this._engine.createMultipleRenderTarget(GJ, nJ);
            for (let fJ = 0; fJ < FJ; ++fJ) {
              if (-1 !== jJ[fJ]) continue;
              const ZJ = sJ[cJ[fJ].uniqueId];
              JJ.setTexture(JJ.textures[ZJ], fJ)
            }
          }
        } else {
          const cJ = {};
          if (cJ.generateDepthBuffer = this._generateDepthBuffer, cJ.generateMipMaps = this.texture?.generateMipMaps ?? !1, cJ.generateStencilBuffer = this._generateStencilBuffer, cJ.samplingMode = this.texture?.samplingMode, cJ.type = this.texture?.type, cJ.format = this.texture?.format, cJ.noColorAttachment = !this._textures, cJ.label = this.label, this.isCube) JJ = this._engine.createRenderTargetCubeTexture(this.width, cJ);
          else {
            const ZJ = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            JJ = this._engine.createRenderTargetTexture(ZJ, cJ)
          }
          JJ.texture && (JJ.texture.isReady = !0)
        }
        return JJ
      }
      _swapRenderTargetWrapper(JJ) {
        if (this._textures && JJ._textures)
          for (let cJ = 0; cJ < this._textures.length; ++cJ) this._textures[cJ]._swapAndDie(JJ._textures[cJ], !1), JJ._textures[cJ].isReady = !0;
        this._depthStencilTexture && JJ._depthStencilTexture && (this._depthStencilTexture._swapAndDie(JJ._depthStencilTexture), JJ._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const JJ = this._cloneRenderTargetWrapper();
        if (JJ) {
          if (this._depthStencilTexture) {
            const cJ = this._depthStencilTexture.samplingMode,
              ZJ = this._depthStencilTexture.format,
              FJ = 2 === cJ || 3 === cJ || 11 === cJ;
            JJ.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, FJ, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ZJ, this._depthStencilTextureLabel)
          }
          this.samples > 1 && JJ.setSamples(this.samples), JJ._swapRenderTargetWrapper(this), JJ.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let JJ = 0; JJ < this._textures.length; ++JJ) this._textures[JJ].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39184: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      static get ForceFullSceneLoadingForIncremental() {
        return FJ._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(JJ) {
        FJ._ForceFullSceneLoadingForIncremental = JJ
      }
      static get ShowLoadingScreen() {
        return FJ._ShowLoadingScreen
      }
      static set ShowLoadingScreen(JJ) {
        FJ._ShowLoadingScreen = JJ
      }
      static get loggingLevel() {
        return FJ._LoggingLevel
      }
      static set loggingLevel(JJ) {
        FJ._LoggingLevel = JJ
      }
      static get CleanBoneMatrixWeights() {
        return FJ._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(JJ) {
        FJ._CleanBoneMatrixWeights = JJ
      }
    }
    FJ._ForceFullSceneLoadingForIncremental = !1, FJ._ShowLoadingScreen = !0, FJ._CleanBoneMatrixWeights = !1, FJ._LoggingLevel = 0
  },
  38867: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ = ZJ(37660);
    const UJ = new Map;

    function eJ(JJ, cJ) {
      (function(JJ) {
        return UJ.delete(JJ)
      })(JJ) && FJ.c.Warn(`Extension with the name '${JJ}' already exists`), UJ.set(JJ, cJ)
    }

    function XJ(JJ, cJ) {
      "image/ktx" !== cJ && "image/ktx2" !== cJ || (JJ = ".ktx"), UJ.has(JJ) || (JJ.endsWith(".ies") && eJ(".ies", (async () => await ZJ.e(289).then((() => ZJ(40483))).then((JJ => new JJ._IESTextureLoader)))), JJ.endsWith(".dds") && eJ(".dds", (async () => await ZJ.e(287).then((() => ZJ(40491))).then((JJ => new JJ._DDSTextureLoader)))), JJ.endsWith(".basis") && eJ(".basis", (async () => await ZJ.e(290).then((() => ZJ(40497))).then((JJ => new JJ._BasisTextureLoader)))), JJ.endsWith(".env") && eJ(".env", (async () => await Promise.all([ZJ.e(291), ZJ.e(288)]).then((() => ZJ(40499))).then((JJ => new JJ._ENVTextureLoader)))), JJ.endsWith(".hdr") && eJ(".hdr", (async () => await ZJ.e(292).then((() => ZJ(40545))).then((JJ => new JJ._HDRTextureLoader)))), (JJ.endsWith(".ktx") || JJ.endsWith(".ktx2")) && (eJ(".ktx", (async () => await ZJ.e(293).then((() => ZJ(40551))).then((JJ => new JJ._KTXTextureLoader)))), eJ(".ktx2", (async () => await ZJ.e(293).then((() => ZJ(40551))).then((JJ => new JJ._KTXTextureLoader))))), JJ.endsWith(".tga") && eJ(".tga", (async () => await ZJ.e(294).then((() => ZJ(40564))).then((JJ => new JJ._TGATextureLoader)))), JJ.endsWith(".exr") && eJ(".exr", (async () => await ZJ.e(295).then((() => ZJ(40572))).then((JJ => new JJ._ExrTextureLoader)))));
      const FJ = UJ.get(JJ);
      return FJ ? Promise.resolve(FJ(cJ)) : null
    }
  },
  39213: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      d: () => jJ
    });
    var FJ = ZJ(39049),
      UJ = ZJ(38825),
      eJ = ZJ(36216);
    class XJ extends FJ.c {
      get U1() {
        return this._subMaterials
      }
      set U1(JJ) {
        this._subMaterials = JJ, this._hookArray(JJ)
      }
      getChildren() {
        return this.U1
      }
      constructor(JJ, cJ) {
        super(JJ, cJ, !0), this._waitingSubMaterialsUniqueIds = [], this.Qy().addMultiMaterial(this), this.U1 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(JJ) {
        var cJ = this;
        const ZJ = JJ.push;
        JJ.push = function() {
          for (var FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
          const XJ = ZJ.apply(JJ, UJ);
          return cJ._markAllSubMeshesAsTexturesDirty(), XJ
        };
        const FJ = JJ.splice;
        JJ.splice = (cJ, ZJ) => {
          const UJ = FJ.call(JJ, cJ, ZJ ?? JJ.length);
          return this._markAllSubMeshesAsTexturesDirty(), UJ
        }
      }
      getSubMaterial(JJ) {
        return JJ < 0 || JJ >= this.U1.length ? this.Qy().defaultMaterial : this.U1[JJ]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.U1.map((JJ => JJ ? JJ.getActiveTextures() : [])))
      }
      hasTexture(JJ) {
        if (super.hasTexture(JJ)) return !0;
        for (let cJ = 0; cJ < this.U1.length; cJ++)
          if (this.U1[cJ]?.hasTexture(JJ)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(JJ, cJ, ZJ) {
        for (let FJ = 0; FJ < this.U1.length; FJ++) {
          const UJ = this.U1[FJ];
          if (UJ) {
            if (UJ._storeEffectOnSubMeshes) {
              if (!UJ.isReadyForSubMesh(JJ, cJ, ZJ)) return !1;
              continue
            }
            if (!UJ.isReady(JJ)) return !1
          }
        }
        return !0
      }
      clone(JJ, cJ) {
        const ZJ = new XJ(JJ, this.Qy());
        for (let FJ = 0; FJ < this.U1.length; FJ++) {
          let UJ;
          const eJ = this.U1[FJ];
          UJ = cJ && eJ ? eJ.clone(JJ + "-" + eJ.name) : this.U1[FJ], ZJ.U1.push(UJ)
        }
        return ZJ
      }
      serialize() {
        const JJ = {};
        JJ.name = this.name, JJ.id = this.id, JJ.uniqueId = this.uniqueId, UJ.b && (JJ.tags = UJ.b.GetTags(this)), JJ.materialsUniqueIds = [], JJ.materials = [];
        for (let cJ = 0; cJ < this.U1.length; cJ++) {
          const ZJ = this.U1[cJ];
          ZJ ? (JJ.materialsUniqueIds.push(ZJ.uniqueId), JJ.materials.push(ZJ.id)) : (JJ.materialsUniqueIds.push(null), JJ.materials.push(null))
        }
        return JJ
      }
      dispose(JJ, cJ, ZJ) {
        const FJ = this.Qy();
        if (!FJ) return;
        if (ZJ)
          for (let eJ = 0; eJ < this.U1.length; eJ++) {
            const ZJ = this.U1[eJ];
            ZJ && ZJ.dispose(JJ, cJ)
          }
        const UJ = FJ.multiMaterials.indexOf(this);
        UJ >= 0 && FJ.multiMaterials.splice(UJ, 1), super.dispose(JJ, cJ)
      }
    }
    let AJ = !1;

    function qJ(JJ, cJ) {
      const ZJ = new XJ(JJ.name, cJ);
      if (ZJ.id = JJ.id, ZJ._loadedUniqueId = JJ.uniqueId, UJ.b && UJ.b.AddTagsTo(ZJ, JJ.tags), JJ.materialsUniqueIds) ZJ._waitingSubMaterialsUniqueIds = JJ.materialsUniqueIds;
      else
        for (const FJ of JJ.materials) ZJ.U1.push(cJ.getLastMaterialById(FJ));
      return ZJ
    }

    function jJ() {
      AJ || (AJ = !0, XJ.ParseMultiMaterial = qJ, (0, eJ.f)("BABYLON.MultiMaterial", XJ))
    }
  },
  38993: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ
    });
    var FJ, UJ, eJ = ZJ(36174);
    ! function(JJ) {
      JJ[JJ.LOCAL = 0] = "LOCAL", JJ[JJ.WORLD = 1] = "WORLD", JJ[JJ.BONE = 2] = "BONE"
    }(FJ || (FJ = {}));
    class XJ {}
    XJ.X = new eJ.j(1, 0, 0), XJ.Y = new eJ.j(0, 1, 0), XJ.Z = new eJ.j(0, 0, 1),
      function(JJ) {
        JJ[JJ.X = 0] = "X", JJ[JJ.Y = 1] = "Y", JJ[JJ.Z = 2] = "Z"
      }(UJ || (UJ = {}))
  },
  38790: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      h: () => jJ
    });
    var FJ = ZJ(36174);
    const UJ = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      eJ = [() => 1, JJ => JJ.y, JJ => JJ.z, JJ => JJ.x, JJ => JJ.x * JJ.y, JJ => JJ.y * JJ.z, JJ => 3 * JJ.z * JJ.z - 1, JJ => JJ.x * JJ.z, JJ => JJ.x * JJ.x - JJ.y * JJ.y],
      XJ = (JJ, cJ) => UJ[JJ] * eJ[JJ](cJ),
      AJ = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class qJ {
      constructor() {
        this.preScaled = !1, this.l00 = FJ.j.Zero(), this.l1_1 = FJ.j.Zero(), this.l10 = FJ.j.Zero(), this.l11 = FJ.j.Zero(), this.l2_2 = FJ.j.Zero(), this.l2_1 = FJ.j.Zero(), this.l20 = FJ.j.Zero(), this.l21 = FJ.j.Zero(), this.l22 = FJ.j.Zero()
      }
      addLight(JJ, cJ, ZJ) {
        FJ.h.Pn[0].set(cJ.r, cJ.g, cJ.b);
        const UJ = FJ.h.Pn[0],
          eJ = FJ.h.Pn[1];
        UJ.scaleToRef(ZJ, eJ), eJ.scaleToRef(XJ(0, JJ), FJ.h.Pn[2]), this.l00.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(1, JJ), FJ.h.Pn[2]), this.l1_1.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(2, JJ), FJ.h.Pn[2]), this.l10.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(3, JJ), FJ.h.Pn[2]), this.l11.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(4, JJ), FJ.h.Pn[2]), this.l2_2.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(5, JJ), FJ.h.Pn[2]), this.l2_1.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(6, JJ), FJ.h.Pn[2]), this.l20.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(7, JJ), FJ.h.Pn[2]), this.l21.addInPlace(FJ.h.Pn[2]), eJ.scaleToRef(XJ(8, JJ), FJ.h.Pn[2]), this.l22.addInPlace(FJ.h.Pn[2])
      }
      scaleInPlace(JJ) {
        this.l00.scaleInPlace(JJ), this.l1_1.scaleInPlace(JJ), this.l10.scaleInPlace(JJ), this.l11.scaleInPlace(JJ), this.l2_2.scaleInPlace(JJ), this.l2_1.scaleInPlace(JJ), this.l20.scaleInPlace(JJ), this.l21.scaleInPlace(JJ), this.l22.scaleInPlace(JJ)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(AJ[0]), this.l1_1.scaleInPlace(AJ[1]), this.l10.scaleInPlace(AJ[2]), this.l11.scaleInPlace(AJ[3]), this.l2_2.scaleInPlace(AJ[4]), this.l2_1.scaleInPlace(AJ[5]), this.l20.scaleInPlace(AJ[6]), this.l21.scaleInPlace(AJ[7]), this.l22.scaleInPlace(AJ[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(UJ[0]), this.l1_1.scaleInPlace(UJ[1]), this.l10.scaleInPlace(UJ[2]), this.l11.scaleInPlace(UJ[3]), this.l2_2.scaleInPlace(UJ[4]), this.l2_1.scaleInPlace(UJ[5]), this.l20.scaleInPlace(UJ[6]), this.l21.scaleInPlace(UJ[7]), this.l22.scaleInPlace(UJ[8])
      }
      updateFromArray(JJ) {
        return FJ.j.FromArrayToRef(JJ[0], 0, this.l00), FJ.j.FromArrayToRef(JJ[1], 0, this.l1_1), FJ.j.FromArrayToRef(JJ[2], 0, this.l10), FJ.j.FromArrayToRef(JJ[3], 0, this.l11), FJ.j.FromArrayToRef(JJ[4], 0, this.l2_2), FJ.j.FromArrayToRef(JJ[5], 0, this.l2_1), FJ.j.FromArrayToRef(JJ[6], 0, this.l20), FJ.j.FromArrayToRef(JJ[7], 0, this.l21), FJ.j.FromArrayToRef(JJ[8], 0, this.l22), this
      }
      updateFromFloatsArray(JJ) {
        return FJ.j.FromFloatsToRef(JJ[0], JJ[1], JJ[2], this.l00), FJ.j.FromFloatsToRef(JJ[3], JJ[4], JJ[5], this.l1_1), FJ.j.FromFloatsToRef(JJ[6], JJ[7], JJ[8], this.l10), FJ.j.FromFloatsToRef(JJ[9], JJ[10], JJ[11], this.l11), FJ.j.FromFloatsToRef(JJ[12], JJ[13], JJ[14], this.l2_2), FJ.j.FromFloatsToRef(JJ[15], JJ[16], JJ[17], this.l2_1), FJ.j.FromFloatsToRef(JJ[18], JJ[19], JJ[20], this.l20), FJ.j.FromFloatsToRef(JJ[21], JJ[22], JJ[23], this.l21), FJ.j.FromFloatsToRef(JJ[24], JJ[25], JJ[26], this.l22), this
      }
      static FromArray(JJ) {
        return (new qJ).updateFromArray(JJ)
      }
      static FromPolynomial(JJ) {
        const cJ = new qJ;
        return cJ.l00 = JJ.xx.scale(.376127).add(JJ.yy.scale(.376127)).add(JJ.zz.scale(.376126)), cJ.l1_1 = JJ.y.scale(.977204), cJ.l10 = JJ.z.scale(.977204), cJ.l11 = JJ.x.scale(.977204), cJ.l2_2 = JJ.xy.scale(1.16538), cJ.l2_1 = JJ.yz.scale(1.16538), cJ.l20 = JJ.zz.scale(1.34567).subtract(JJ.xx.scale(.672834)).subtract(JJ.yy.scale(.672834)), cJ.l21 = JJ.zx.scale(1.16538), cJ.l22 = JJ.xx.scale(1.16538).subtract(JJ.yy.scale(1.16538)), cJ.l1_1.scaleInPlace(-1), cJ.l11.scaleInPlace(-1), cJ.l2_1.scaleInPlace(-1), cJ.l21.scaleInPlace(-1), cJ.scaleInPlace(Math.PI), cJ
      }
    }
    class jJ {
      constructor() {
        this.x = FJ.j.Zero(), this.y = FJ.j.Zero(), this.z = FJ.j.Zero(), this.xx = FJ.j.Zero(), this.yy = FJ.j.Zero(), this.zz = FJ.j.Zero(), this.xy = FJ.j.Zero(), this.yz = FJ.j.Zero(), this.zx = FJ.j.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = qJ.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(JJ) {
        FJ.h.Pn[0].K9(JJ.r, JJ.g, JJ.b);
        const cJ = FJ.h.Pn[0];
        this.xx.addInPlace(cJ), this.yy.addInPlace(cJ), this.zz.addInPlace(cJ)
      }
      scaleInPlace(JJ) {
        this.x.scaleInPlace(JJ), this.y.scaleInPlace(JJ), this.z.scaleInPlace(JJ), this.xx.scaleInPlace(JJ), this.yy.scaleInPlace(JJ), this.zz.scaleInPlace(JJ), this.yz.scaleInPlace(JJ), this.zx.scaleInPlace(JJ), this.xy.scaleInPlace(JJ)
      }
      updateFromHarmonics(JJ) {
        return this._harmonics = JJ, this.x.rZJ(JJ.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.rZJ(JJ.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.rZJ(JJ.l10), this.z.scaleInPlace(1.02333), this.xx.rZJ(JJ.l00), FJ.h.Pn[0].rZJ(JJ.l20).scaleInPlace(.247708), FJ.h.Pn[1].rZJ(JJ.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).xFJ(FJ.h.Pn[0]).addInPlace(FJ.h.Pn[1]), this.yy.rZJ(JJ.l00), this.yy.scaleInPlace(.886277).xFJ(FJ.h.Pn[0]).xFJ(FJ.h.Pn[1]), this.zz.rZJ(JJ.l00), FJ.h.Pn[0].rZJ(JJ.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(FJ.h.Pn[0]), this.yz.rZJ(JJ.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.rZJ(JJ.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.rZJ(JJ.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(JJ) {
        return (new jJ).updateFromHarmonics(JJ)
      }
      static FromArray(JJ) {
        const cJ = new jJ;
        return FJ.j.FromArrayToRef(JJ[0], 0, cJ.x), FJ.j.FromArrayToRef(JJ[1], 0, cJ.y), FJ.j.FromArrayToRef(JJ[2], 0, cJ.z), FJ.j.FromArrayToRef(JJ[3], 0, cJ.xx), FJ.j.FromArrayToRef(JJ[4], 0, cJ.yy), FJ.j.FromArrayToRef(JJ[5], 0, cJ.zz), FJ.j.FromArrayToRef(JJ[6], 0, cJ.yz), FJ.j.FromArrayToRef(JJ[7], 0, cJ.zx), FJ.j.FromArrayToRef(JJ[8], 0, cJ.xy), cJ
      }
    }
  },
  39202: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => WJ,
      d: () => HJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(36200),
      eJ = ZJ(36174),
      XJ = ZJ(38918),
      AJ = ZJ(39170),
      qJ = ZJ(39210),
      jJ = ZJ(38910),
      YJ = ZJ(39065),
      hJ = ZJ(38907);
    class DJ {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new eJ.j(0, 0, 0), this._diffPositionForCollisions = new eJ.j(0, 0, 0), this._collisionResponse = !0
      }
    }
    var sJ, nJ, GJ, fJ = ZJ(38677),
      xJ = ZJ(38862),
      rJ = ZJ(39076),
      vJ = ZJ(36231),
      mJ = ZJ(36177),
      QJ = ZJ(38993),
      EJ = ZJ(37660),
      VJ = ZJ(38806),
      KJ = ZJ(38698),
      yJ = ZJ(36216);

    function SJ(JJ, cJ) {
      return JJ - Math.floor(JJ / cJ) * cJ
    }

    function IJ(JJ, cJ, ZJ) {
      JJ instanceof Float32Array ? eJ.b.FromArrayToRef(JJ, cJ, ZJ) : ZJ.K9((0, xJ.d)(JJ[cJ]), (0, xJ.d)(JJ[cJ + 1]), (0, xJ.d)(JJ[cJ + 2]), (0, xJ.d)(JJ[cJ + 3]), (0, xJ.d)(JJ[cJ + 4]), (0, xJ.d)(JJ[cJ + 5]), (0, xJ.d)(JJ[cJ + 6]), (0, xJ.d)(JJ[cJ + 7]), (0, xJ.d)(JJ[cJ + 8]), (0, xJ.d)(JJ[cJ + 9]), (0, xJ.d)(JJ[cJ + 10]), (0, xJ.d)(JJ[cJ + 11]), (0, xJ.d)(JJ[cJ + 12]), (0, xJ.d)(JJ[cJ + 13]), (0, xJ.d)(JJ[cJ + 14]), (0, xJ.d)(JJ[cJ + 15]))
    }

    function MJ(JJ, cJ, ZJ, FJ, UJ, AJ, qJ, jJ, YJ) {
      const hJ = ZJ.texture,
        DJ = hJ?.getInternalTexture(),
        sJ = DJ?._bufferView;
      if (!(sJ instanceof Float32Array) && !(sJ instanceof Uint16Array)) return EJ.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const nJ = hJ.getSize(),
        GJ = function(JJ, cJ) {
          const ZJ = JJ.y - JJ.x + 1,
            FJ = cJ * JJ.w / ZJ,
            UJ = FJ < 1 ? 0 : 1,
            eJ = ZJ - UJ;
          let XJ = SJ(FJ - Math.floor(FJ), 1) * eJ;
          return XJ = SJ(XJ + JJ.z, eJ), Math.floor(XJ) + JJ.x + UJ
        }(FJ, ZJ.time);
      if (!isFinite(GJ) || GJ < 0 || GJ >= nJ.height) return EJ.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const fJ = eJ.h.Pn[0],
        xJ = eJ.h.Matrix[0],
        rJ = eJ.h.Matrix[1],
        vJ = GJ * nJ.width * 4,
        mJ = cJ === XJ.n.NormalKind ? eJ.j.TransformNormalFromFloatsToRef : eJ.j.TransformCoordinatesFromFloatsToRef;
      for (let eJ = 0, XJ = 0; eJ < JJ.length; eJ += 3, XJ += 4) {
        let cJ, ZJ;
        for (xJ.reset(), cJ = 0; cJ < 4 && cJ < YJ; cJ++) ZJ = AJ[XJ + cJ], ZJ > 0 && (IJ(sJ, vJ + 16 * Math.floor(UJ[XJ + cJ]), rJ), rJ.scaleAndAddToRef(ZJ, xJ));
        if (qJ && jJ)
          for (cJ = 0; cJ < 4 && cJ + 4 < YJ; cJ++) ZJ = jJ[XJ + cJ], ZJ > 0 && (IJ(sJ, vJ + 16 * Math.floor(qJ[XJ + cJ]), rJ), rJ.scaleAndAddToRef(ZJ, xJ));
        mJ(JJ[eJ], JJ[eJ + 1], JJ[eJ + 2], xJ, fJ), fJ.toArray(JJ, eJ)
      }
      return !0
    }
    class bJ {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = eJ.j.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class wJ {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new bJ, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new DJ, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let WJ = (() => {
        var JJ;
        let cJ, DJ = qJ.d,
          sJ = [];
        return JJ = class extends DJ {
          static get BILLBOARDMODE_NONE() {
            return qJ.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return qJ.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return qJ.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return qJ.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return qJ.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return qJ.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(JJ) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = JJ
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(JJ) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = JJ
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(JJ) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = JJ
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(JJ) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = JJ
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(JJ) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = JJ
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(JJ) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== JJ && (this._internalAbstractMeshDataInfo._morphTargetManager = JJ, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(JJ) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== JJ && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = JJ, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(JJ) {
            return !!super._updateNonUniformScalingState(JJ) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(JJ) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = JJ
          }
          set oh(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(JJ)
          }
          set onCollisionPositionChange(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(JJ)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(JJ) {
            if (this._internalAbstractMeshDataInfo._visibility === JJ) return;
            const cJ = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = JJ, (1 === cJ && 1 !== JJ || 1 !== cJ && 1 === JJ) && this._markSubMeshesAsDirty((JJ => {
              JJ.markAsMiscDirty(), JJ.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(JJ) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = JJ
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(JJ) {
            this._internalAbstractMeshDataInfo._renderingGroupId = JJ
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(JJ) {
            if (!Number.isInteger(JJ) || JJ < 0 || JJ > 255 || 0 !== JJ && 0 === (63 & JJ)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = JJ
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(JJ) {
            this._setMaterial(JJ)
          }
          _setMaterial(JJ) {
            this._internalAbstractMeshDataInfo._material !== JJ && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = JJ, JJ && JJ.meshMap && (JJ.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.aE && (this.resetDrawCache(void 0, null == JJ), this._unBindEffect()))
          }
          getMaterialForRenderPass(JJ) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[JJ]
          }
          setMaterialForRenderPass(JJ, cJ) {
            this.resetDrawCache(JJ), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ZJ = this._internalAbstractMeshDataInfo._materialForRenderPass[JJ];
            ZJ?.meshMap?.[this.uniqueId] && (ZJ.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[JJ] = cJ, cJ && cJ.meshMap && (cJ.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(JJ) {
            this._internalAbstractMeshDataInfo._receiveShadows !== JJ && (this._internalAbstractMeshDataInfo._receiveShadows = JJ, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(JJ) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== JJ && (this._internalAbstractMeshDataInfo._hasVertexAlpha = JJ, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(JJ) {
            this._internalAbstractMeshDataInfo._useVertexColors !== JJ && (this._internalAbstractMeshDataInfo._useVertexColors = JJ, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(JJ) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== JJ && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = JJ, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(JJ) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== JJ && (this._internalAbstractMeshDataInfo._numBoneInfluencers = JJ, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(JJ) {
            this._internalAbstractMeshDataInfo._applyFog !== JJ && (this._internalAbstractMeshDataInfo._applyFog = JJ, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(JJ) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = JJ
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(JJ) {
            JJ !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = JJ, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(JJ) ? -1 : JJ
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = JJ
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(JJ) ? -1 : JJ
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = JJ
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(JJ) {
            const cJ = this._internalAbstractMeshDataInfo._skeleton;
            cJ && cJ.needInitialSkinMatrix && cJ._unregisterMeshWithPoseMatrix(this), JJ && JJ.needInitialSkinMatrix && JJ._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = JJ, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(cJ) {
            var ZJ;
            let FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(cJ, FJ, !1), ZJ = this, this._internalAbstractMeshDataInfo = new wJ, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = JJ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new UJ.c, this.onCollisionPositionChangeObservable = new UJ.c, this.onMaterialChangedObservable = new UJ.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.aG = JJ.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = vJ.e.Red(), this.outlineWidth = .02, this.overlayColor = vJ.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Hn = !1, this.pn = !1, this.actionManager = null, this.ellipsoid = new eJ.j(.5, 1, .5), this.ellipsoidOffset = new eJ.j(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new vJ.f(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                qS: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new UJ.c, this._onCollisionPositionChange = function(JJ, cJ) {
                let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                cJ.subtractToRef(ZJ._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ZJ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ZJ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > KJ.e.CollisionsEpsilon && ZJ.position.addInPlace(ZJ._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), FJ && ZJ.onCollideObservable.notifyObservers(FJ), ZJ.onCollisionPositionChangeObservable.notifyObservers(ZJ.position)
              }, FJ = this.Qy(), this.layerMask = FJ.defaultRenderableLayerMask, FJ.BZJ(this), this._resyncLightSources(), this._uniformBuffer = new hJ.e(this.Qy().gn(), void 0, void 0, cJ, !this.Qy().gn().isWebGPU), this._buildUniformLayout(), FJ.performancePriority) {
              case 2:
                this.pn = !0;
              case 1:
                this.Hn = !0, this.aG = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(JJ) {
            const cJ = this._uniformBuffer;
            cJ.Y5("world", JJ), cJ.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), cJ.update()
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
          toString(JJ) {
            let cJ = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            cJ += ", # of submeshes: " + (this.aE ? this.aE.length : 0);
            const ZJ = this._internalAbstractMeshDataInfo._skeleton;
            return ZJ && (cJ += ", skeleton: " + ZJ.name), JJ && (cJ += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], cJ += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.qS ? "YES" : "NO")), cJ
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== qJ.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(JJ) {
            let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (cJ || this.actionManager.isRecursive)) {
              if (!JJ) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(JJ)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(JJ, !1) : null
          }
          _releaseRenderPassId(JJ) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.aE) {
              for (const JJ of this.aE) JJ._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const JJ of this.Qy().lights) JJ.isEnabled() && JJ.canAffectMesh(this) && this._lightSources.push(JJ);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(JJ) {
            const cJ = JJ.isEnabled() && JJ.canAffectMesh(this),
              ZJ = this._lightSources.indexOf(JJ);
            let FJ = !1;
            if (-1 === ZJ) {
              if (!cJ) return;
              this._lightSources.push(JJ)
            } else {
              if (cJ) return;
              FJ = !0, this._lightSources.splice(ZJ, 1)
            }
            this._markSubMeshesAsLightDirty(FJ)
          }
          _unBindEffect() {
            for (const JJ of this.aE) JJ.setEffect(null)
          }
          _removeLightSource(JJ, cJ) {
            const ZJ = this._lightSources.indexOf(JJ); - 1 !== ZJ && (this._lightSources.splice(ZJ, 1), this._markSubMeshesAsLightDirty(cJ))
          }
          _markSubMeshesAsDirty(JJ) {
            if (this.aE)
              for (const cJ of this.aE)
                for (let ZJ = 0; ZJ < cJ._drawWrappers.length; ++ZJ) {
                  const FJ = cJ._drawWrappers[ZJ];
                  FJ && FJ.defines && FJ.defines.markAllAsDirty && JJ(FJ.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((cJ => cJ.markAsLightDirty(JJ)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((JJ => JJ.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((JJ => JJ.markAsMiscDirty()))
          }
          ycJ(JJ) {
            return this._currentRenderId = Number.MAX_VALUE, super.ycJ(JJ), this._isDirty = !0, this
          }
          resetDrawCache(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.aE)
              for (const ZJ of this.aE) ZJ.resetDrawCache(JJ, cJ)
          }
          get isBlocked() {
            return !1
          }
          getLOD(JJ) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          QXJ() {
            return null
          }
          getVerticesData(JJ) {
            return null
          }
          setVerticesData(JJ, cJ, ZJ, FJ) {
            return this
          }
          updateVerticesData(JJ, cJ, ZJ, FJ) {
            return this
          }
          setIndices(JJ, cJ) {
            return this
          }
          isVerticesDataPresent(JJ) {
            return !1
          }
          rM() {
            return this._masterMesh ? this._masterMesh.rM() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.rM()
          }
          setBoundingInfo(JJ) {
            return this._boundingInfo = JJ, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(JJ, cJ, ZJ) {
            return this._boundingInfo = new YJ.b(JJ, cJ, ZJ), this._boundingInfo
          }
          normalizeToUnitCube() {
            let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(JJ, cJ, ZJ)
          }
          get useBones() {
            return this.skeleton && this.Qy().skeletonsEnabled && this.isVerticesDataPresent(XJ.n.MatricesIndicesKind) && this.isVerticesDataPresent(XJ.n.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(JJ) {}
          _activate(JJ, cJ) {
            return this._renderId = JJ, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === qJ.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Iy() {
            return !1
          }
          get CFJ() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(JJ, cJ, ZJ) {
            return this.position.addInPlace(this.calcMovePOV(JJ, cJ, ZJ)), this
          }
          calcMovePOV(JJ, cJ, ZJ) {
            const FJ = new eJ.b;
            (this.rotationQuaternion ? this.rotationQuaternion : eJ.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(FJ);
            const UJ = eJ.j.Zero(),
              XJ = this.definedFacingForward ? -1 : 1;
            return eJ.j.TransformCoordinatesFromFloatsToRef(JJ * XJ, cJ, ZJ * XJ, FJ, UJ), UJ
          }
          rotatePOV(JJ, cJ, ZJ) {
            return this.rotation.addInPlace(this.calcRotatePOV(JJ, cJ, ZJ)), this
          }
          calcRotatePOV(JJ, cJ, ZJ) {
            const FJ = this.definedFacingForward ? 1 : -1;
            return new eJ.j(JJ * FJ, cJ, ZJ * FJ)
          }
          _refreshBoundingInfo(JJ, cJ) {
            if (JJ) {
              const ZJ = (0, rJ.f)(JJ, 0, this.getTotalVertices(), cJ);
              this._boundingInfo ? this._boundingInfo.reConstruct(ZJ.minimum, ZJ.maximum) : this._boundingInfo = new YJ.b(ZJ.minimum, ZJ.maximum)
            }
            if (this.aE)
              for (let ZJ = 0; ZJ < this.aE.length; ZJ++) this.aE[ZJ].refreshBoundingInfo(JJ);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(JJ) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(JJ.minimum, JJ.maximum) : this._boundingInfo = new YJ.b(JJ.minimum, JJ.maximum), this.aE)
              for (let cJ = 0; cJ < this.aE.length; cJ++) this.aE[cJ].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(JJ, cJ, ZJ, FJ, UJ, AJ, qJ) {
            ! function(JJ, cJ, ZJ, FJ, UJ, AJ, qJ) {
              const jJ = eJ.h.Pn[0],
                YJ = eJ.h.Matrix[0],
                hJ = eJ.h.Matrix[1],
                DJ = cJ === XJ.n.NormalKind ? eJ.j.TransformNormalFromFloatsToRef : eJ.j.TransformCoordinatesFromFloatsToRef;
              for (let XJ = 0, sJ = 0; XJ < JJ.length; XJ += 3, sJ += 4) {
                let cJ, nJ;
                for (YJ.reset(), cJ = 0; cJ < 4; cJ++) nJ = UJ[sJ + cJ], nJ > 0 && (eJ.b.FromFloat32ArrayToRefScaled(ZJ, Math.floor(16 * FJ[sJ + cJ]), nJ, hJ), YJ.addToSelf(hJ));
                if (AJ && qJ)
                  for (cJ = 0; cJ < 4; cJ++) nJ = qJ[sJ + cJ], nJ > 0 && (eJ.b.FromFloat32ArrayToRefScaled(ZJ, Math.floor(16 * AJ[sJ + cJ]), nJ, hJ), YJ.addToSelf(hJ));
                DJ(JJ[XJ], JJ[XJ + 1], JJ[XJ + 2], YJ, jJ), jJ.toArray(JJ, XJ)
              }
            }(JJ, cJ, ZJ, FJ, UJ, AJ, qJ)
          }
          _getData(cJ, ZJ) {
            let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XJ.n.PositionKind;
            const UJ = cJ.cache,
              AJ = JJ => {
                if (UJ) {
                  const cJ = UJ._vertexData || (UJ._vertexData = {});
                  return cJ[JJ] || this.copyVerticesData(JJ, cJ), cJ[JJ]
                }
                return this.getVerticesData(JJ)
              };
            if (ZJ || (ZJ = AJ(FJ)), !ZJ) return null;
            UJ ? (UJ._outputData ? UJ._outputData.set(ZJ) : UJ._outputData = new Float32Array(ZJ), ZJ = UJ._outputData) : (cJ.applyMorph && this.morphTargetManager || cJ.applySkeleton && this.skeleton || cJ.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ZJ = ZJ.slice()), cJ.applyMorph && this.morphTargetManager && function(JJ, cJ, ZJ) {
              let FJ;
              switch (cJ) {
                case XJ.n.PositionKind:
                  FJ = JJ => JJ.getPositions();
                  break;
                case XJ.n.NormalKind:
                  FJ = JJ => JJ.getNormals();
                  break;
                case XJ.n.TangentKind:
                  FJ = JJ => JJ.getTangents();
                  break;
                case XJ.n.UVKind:
                  FJ = JJ => JJ.getUVs();
                  break;
                case XJ.n.UV2Kind:
                  FJ = JJ => JJ.getUV2s();
                  break;
                case XJ.n.ColorKind:
                  FJ = JJ => JJ.getColors();
                  break;
                default:
                  return
              }
              for (let UJ = 0; UJ < JJ.length; UJ++) {
                let cJ = JJ[UJ];
                for (let eJ = 0; eJ < ZJ.numTargets; eJ++) {
                  const XJ = ZJ.getTarget(eJ),
                    AJ = XJ.influence;
                  if (0 !== AJ) {
                    const ZJ = FJ(XJ);
                    ZJ && (cJ += (ZJ[UJ] - JJ[UJ]) * AJ)
                  }
                }
                JJ[UJ] = cJ
              }
            }(ZJ, FJ, this.morphTargetManager);
            const qJ = this.bakedVertexAnimationManager;
            let jJ = !1;
            if (cJ.applyBakedVertexAnimation && qJ?.isEnabled) {
              const JJ = AJ(XJ.n.MatricesIndicesKind),
                UJ = AJ(XJ.n.MatricesWeightsKind);
              if (UJ && JJ) {
                const eJ = this.numBoneInfluencers > 4,
                  YJ = eJ ? AJ(XJ.n.MatricesIndicesExtraKind) : null,
                  hJ = eJ ? AJ(XJ.n.MatricesWeightsExtraKind) : null;
                jJ = MJ(ZJ, FJ, qJ, cJ.bakedVertexAnimationSettings ?? qJ.animationParameters, JJ, UJ, YJ, hJ, this.numBoneInfluencers)
              }
            }
            if (!jJ && cJ.applySkeleton && this.skeleton) {
              const cJ = AJ(XJ.n.MatricesIndicesKind),
                UJ = AJ(XJ.n.MatricesWeightsKind);
              if (UJ && cJ) {
                const eJ = this.numBoneInfluencers > 4,
                  qJ = eJ ? AJ(XJ.n.MatricesIndicesExtraKind) : null,
                  jJ = eJ ? AJ(XJ.n.MatricesWeightsExtraKind) : null,
                  YJ = this.skeleton.getTransformMatrices(this);
                JJ._ApplySkeleton(ZJ, FJ, YJ, cJ, UJ, qJ, jJ)
              }
            }
            if (!1 !== cJ.updatePositionsArray && FJ === XJ.n.PositionKind) {
              const JJ = this._internalAbstractMeshDataInfo._positions || [],
                cJ = JJ.length;
              if (JJ.length = ZJ.length / 3, cJ < JJ.length)
                for (let ZJ = cJ; ZJ < JJ.length; ZJ++) JJ[ZJ] = new eJ.j;
              for (let FJ = 0, UJ = 0; FJ < JJ.length; FJ++, UJ += 3) JJ[FJ].K9(ZJ[UJ], ZJ[UJ + 1], ZJ[UJ + 2]);
              this._internalAbstractMeshDataInfo._positions = JJ
            }
            return ZJ
          }
          getNormalsData() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: JJ,
              applyMorph: cJ,
              updatePositionsArray: !1
            }, null, XJ.n.NormalKind)
          }
          YC() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: JJ,
              applyMorph: cJ,
              updatePositionsArray: !1
            }, ZJ, XJ.n.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new YJ.b(eJ.j.Zero(), eJ.j.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(JJ) {
            if (!this.aE) return this;
            const cJ = this.aE.length;
            for (let ZJ = 0; ZJ < cJ; ZJ++) {
              const FJ = this.aE[ZJ];
              (cJ > 1 || !FJ.IsGlobal) && FJ.updateBoundingInfo(JJ)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.pn || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(JJ) {
            return this.rM().isInFrustum(JJ, this.cullingStrategy)
          }
          isCompletelyInFrustum(JJ) {
            return this.rM().isCompletelyInFrustum(JJ)
          }
          pFJ(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = arguments.length > 2 ? arguments[2] : void 0;
            const FJ = this.rM(),
              UJ = JJ.rM();
            if (FJ.intersects(UJ, cJ)) return !0;
            if (ZJ)
              for (const eJ of this.getChildMeshes())
                if (eJ.pFJ(JJ, cJ, !0)) return !0;
            return !1
          }
          intersectsPoint(JJ) {
            return this.rM().intersectsPoint(JJ)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(JJ) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = JJ
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(JJ) {
            let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ZJ = this.Qy().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ZJ.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ZJ.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, JJ, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, cJ), this
          }
          _collideForSubMesh(JJ, cJ, ZJ) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!JJ._lastColliderWorldVertices || !JJ._lastColliderTransformMatrix.equals(cJ)) {
              JJ._lastColliderTransformMatrix = cJ.clone(), JJ._lastColliderWorldVertices = [], JJ._trianglePlanes = [];
              const ZJ = JJ.verticesStart,
                FJ = JJ.verticesStart + JJ.verticesCount;
              for (let UJ = ZJ; UJ < FJ; UJ++) JJ._lastColliderWorldVertices.push(eJ.j.TransformCoordinates(this._positions[UJ], cJ))
            }
            return ZJ._collide(JJ._trianglePlanes, JJ._lastColliderWorldVertices, this.QXJ(), JJ.indexStart, JJ.indexStart + JJ.indexCount, JJ.verticesStart, !!JJ.dn(), this, this._shouldConvertRHS(), 7 === JJ.dn()?.fillMode), this
          }
          _processCollisionsForSubMeshes(JJ, cJ) {
            const ZJ = this._scene.getCollidingSubMeshCandidates(this, JJ),
              FJ = ZJ.length;
            for (let UJ = 0; UJ < FJ; UJ++) {
              const eJ = ZJ.data[UJ];
              FJ > 1 && !eJ._checkCollision(JJ) || this._collideForSubMesh(eJ, cJ, JJ)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(JJ) {
            if (!this.rM()._checkCollision(JJ)) return this;
            const cJ = eJ.h.Matrix[0],
              ZJ = eJ.h.Matrix[1];
            return eJ.b.ScalingToRef(1 / JJ._radius.x, 1 / JJ._radius.y, 1 / JJ._radius.z, cJ), this.worldMatrixFromCache.multiplyToRef(cJ, ZJ), this._processCollisionsForSubMeshes(JJ, ZJ), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(JJ, cJ, ZJ) {
            let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              UJ = arguments.length > 4 ? arguments[4] : void 0,
              XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const AJ = new jJ.e,
              qJ = this.getClassName(),
              YJ = "InstancedLinesMesh" === qJ || "LinesMesh" === qJ || "GreasedLineMesh" === qJ ? this.intersectionThreshold : 0,
              hJ = this.rM();
            if (!this.aE) return AJ;
            if (!XJ && (!JJ.intersectsSphere(hJ.QFJ, YJ) || !JJ.intersectsBox(hJ.boundingBox, YJ))) return AJ;
            if (FJ) return AJ.hit = !XJ, AJ.pickedMesh = XJ ? null : this, AJ.distance = XJ ? 0 : eJ.j.Distance(JJ.origin, hJ.QFJ.center), AJ.subMeshId = 0, AJ;
            if (!this._generatePointsArray()) return AJ;
            let DJ = null;
            const sJ = this._scene.getIntersectingSubMeshCandidates(this, JJ),
              nJ = sJ.length;
            let GJ = !1;
            for (let eJ = 0; eJ < nJ; eJ++) {
              const JJ = sJ.data[eJ].dn();
              if (JJ && (7 == JJ.fillMode || 0 == JJ.fillMode || 1 == JJ.fillMode || 2 == JJ.fillMode || 4 == JJ.fillMode)) {
                GJ = !0;
                break
              }
            }
            if (!GJ) return AJ.hit = !0, AJ.pickedMesh = this, AJ.distance = eJ.j.Distance(JJ.origin, hJ.QFJ.center), AJ.subMeshId = -1, AJ;
            for (let eJ = 0; eJ < nJ; eJ++) {
              const FJ = sJ.data[eJ];
              if (nJ > 1 && !XJ && !FJ.canIntersects(JJ)) continue;
              const UJ = FJ.intersects(JJ, this._positions, this.QXJ(), cJ, ZJ);
              if (UJ && (cJ || !DJ || UJ.distance < DJ.distance) && (DJ = UJ, DJ.subMeshId = FJ._id, DJ._internalSubMeshId = eJ, cJ)) break
            }
            if (DJ) {
              const cJ = UJ ?? this.getWorldMatrix(),
                ZJ = eJ.h.Pn[0],
                FJ = eJ.h.Pn[1];
              eJ.j.TransformCoordinatesToRef(JJ.origin, cJ, ZJ), JJ.direction.scaleToRef(DJ.distance, FJ);
              const XJ = eJ.j.TransformNormal(FJ, cJ).addInPlace(ZJ);
              return AJ.hit = !0, AJ.distance = eJ.j.Distance(ZJ, XJ), AJ.pickedPoint = XJ, AJ.pickedMesh = this, AJ.bu = DJ.bu || 0, AJ.bv = DJ.bv || 0, AJ.subMeshFaceId = DJ.faceId, AJ.faceId = DJ.faceId + sJ.data[DJ._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), AJ.subMeshId = DJ.subMeshId, AJ
            }
            return AJ
          }
          clone(JJ, cJ, ZJ) {
            return null
          }
          releaseSubMeshes() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.aE)
              for (; this.aE.length;) this.aE[0].dispose(JJ);
            else this.aE = [];
            return this
          }
          dispose(JJ) {
            let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const FJ = this.Qy();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), FJ.freeActiveMeshes(), FJ.freeRenderingGroups(), FJ.renderingManager.maintainStateBetweenFrames && FJ.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((JJ => JJ !== this && JJ.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), cJ = 0; cJ < this._intersectionsInProgress.length; cJ++) {
              const JJ = this._intersectionsInProgress[cJ],
                ZJ = JJ._intersectionsInProgress.indexOf(this);
              JJ._intersectionsInProgress.splice(ZJ, 1)
            }
            this._intersectionsInProgress.length = 0;
            const UJ = FJ.lights;
            for (const XJ of UJ) {
              let JJ = XJ.includedOnlyMeshes.indexOf(this); - 1 !== JJ && XJ.includedOnlyMeshes.splice(JJ, 1), JJ = XJ.excludedMeshes.indexOf(this), -1 !== JJ && XJ.excludedMeshes.splice(JJ, 1);
              const cJ = XJ.getShadowGenerators();
              if (cJ) {
                const ZJ = cJ.values();
                for (let cJ = ZJ.next(); !0 !== cJ.done; cJ = ZJ.next()) {
                  const ZJ = cJ.value.getShadowMap();
                  ZJ && ZJ.renderList && (JJ = ZJ.renderList.indexOf(this), -1 !== JJ && ZJ.renderList.splice(JJ, 1))
                }
              }
            }
            this.releaseSubMeshes(FJ._isDisposing);
            const eJ = FJ.gn();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, eJ.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), eJ.wipeCaches(), FJ.kS(this), this._parentContainer) {
              const JJ = this._parentContainer.meshes.indexOf(this);
              JJ > -1 && this._parentContainer.meshes.splice(JJ, 1), this._parentContainer = null
            }
            if (ZJ && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !JJ)
              for (cJ = 0; cJ < FJ.lE.length; cJ++) FJ.lE[cJ].emitter === this && (FJ.lE[cJ].dispose(), cJ--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(JJ, ZJ)
          }
          _initFacetData() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            JJ.facetNormals || (JJ.facetNormals = []), JJ.facetPositions || (JJ.facetPositions = []), JJ.facetPartitioning || (JJ.facetPartitioning = new Array), JJ.facetNb = this.QXJ().length / 3 | 0, JJ.partitioningSubdivisions = JJ.partitioningSubdivisions ? JJ.partitioningSubdivisions : 10, JJ.partitioningBBoxRatio = JJ.partitioningBBoxRatio ? JJ.partitioningBBoxRatio : 1.01;
            for (let cJ = 0; cJ < JJ.facetNb; cJ++) JJ.facetNormals[cJ] = eJ.j.Zero(), JJ.facetPositions[cJ] = eJ.j.Zero();
            return JJ.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            JJ.facetDataEnabled || this._initFacetData();
            const cJ = this.getVerticesData(XJ.n.PositionKind),
              ZJ = this.QXJ(),
              FJ = this.getVerticesData(XJ.n.NormalKind)?.slice(),
              UJ = this.rM();
            if (JJ.facetDepthSort && !JJ.facetDepthSortEnabled) {
              if (JJ.facetDepthSortEnabled = !0, ZJ instanceof Uint16Array) JJ.depthSortedIndices = new Uint16Array(ZJ);
              else if (ZJ instanceof Uint32Array) JJ.depthSortedIndices = new Uint32Array(ZJ);
              else {
                let cJ = !1;
                for (let JJ = 0; JJ < ZJ.length; JJ++)
                  if (ZJ[JJ] > 65535) {
                    cJ = !0;
                    break
                  } JJ.depthSortedIndices = cJ ? new Uint32Array(ZJ) : new Uint16Array(ZJ)
              }
              if (JJ.facetDepthSortFunction = function(JJ, cJ) {
                  return cJ.sqDistance - JJ.sqDistance
                }, !JJ.facetDepthSortFrom) {
                const cJ = this.Qy().activeCamera;
                JJ.facetDepthSortFrom = cJ ? cJ.position : eJ.j.Zero()
              }
              JJ.depthSortedFacets = [];
              for (let cJ = 0; cJ < JJ.facetNb; cJ++) {
                const ZJ = {
                  ind: 3 * cJ,
                  sqDistance: 0
                };
                JJ.depthSortedFacets.push(ZJ)
              }
              JJ.invertedMatrix = eJ.b.Identity(), JJ.facetDepthSortOrigin = eJ.j.Zero()
            }
            JJ.bbSize.x = UJ.maximum.x - UJ.minimum.x > mJ.e ? UJ.maximum.x - UJ.minimum.x : mJ.e, JJ.bbSize.y = UJ.maximum.y - UJ.minimum.y > mJ.e ? UJ.maximum.y - UJ.minimum.y : mJ.e, JJ.bbSize.z = UJ.maximum.z - UJ.minimum.z > mJ.e ? UJ.maximum.z - UJ.minimum.z : mJ.e;
            let qJ = JJ.bbSize.x > JJ.bbSize.y ? JJ.bbSize.x : JJ.bbSize.y;
            if (qJ = qJ > JJ.bbSize.z ? qJ : JJ.bbSize.z, JJ.subDiv.max = JJ.partitioningSubdivisions, JJ.subDiv.X = Math.floor(JJ.subDiv.max * JJ.bbSize.x / qJ), JJ.subDiv.Y = Math.floor(JJ.subDiv.max * JJ.bbSize.y / qJ), JJ.subDiv.Z = Math.floor(JJ.subDiv.max * JJ.bbSize.z / qJ), JJ.subDiv.X = JJ.subDiv.X < 1 ? 1 : JJ.subDiv.X, JJ.subDiv.Y = JJ.subDiv.Y < 1 ? 1 : JJ.subDiv.Y, JJ.subDiv.Z = JJ.subDiv.Z < 1 ? 1 : JJ.subDiv.Z, JJ.facetParameters.facetNormals = this.getFacetLocalNormals(), JJ.facetParameters.facetPositions = this.getFacetLocalPositions(), JJ.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), JJ.facetParameters.bInfo = UJ, JJ.facetParameters.bbSize = JJ.bbSize, JJ.facetParameters.subDiv = JJ.subDiv, JJ.facetParameters.ratio = this.partitioningBBoxRatio, JJ.facetParameters.depthSort = JJ.facetDepthSort, JJ.facetDepthSort && JJ.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(JJ.invertedMatrix), eJ.j.TransformCoordinatesToRef(JJ.facetDepthSortFrom, JJ.invertedMatrix, JJ.facetDepthSortOrigin), JJ.facetParameters.distanceTo = JJ.facetDepthSortOrigin), JJ.facetParameters.depthSortedFacets = JJ.depthSortedFacets, FJ && AJ.e.ComputeNormals(cJ, ZJ, FJ, JJ.facetParameters), JJ.facetDepthSort && JJ.facetDepthSortEnabled) {
              JJ.depthSortedFacets.sort(JJ.facetDepthSortFunction);
              const cJ = JJ.depthSortedIndices.length / 3 | 0;
              for (let FJ = 0; FJ < cJ; FJ++) {
                const cJ = JJ.depthSortedFacets[FJ].ind;
                JJ.depthSortedIndices[3 * FJ] = ZJ[cJ], JJ.depthSortedIndices[3 * FJ + 1] = ZJ[cJ + 1], JJ.depthSortedIndices[3 * FJ + 2] = ZJ[cJ + 2]
              }
              this.updateIndices(JJ.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            return JJ.facetNormals || this.updateFacetData(), JJ.facetNormals
          }
          getFacetLocalPositions() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            return JJ.facetPositions || this.updateFacetData(), JJ.facetPositions
          }
          getFacetLocalPartitioning() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            return JJ.facetPartitioning || this.updateFacetData(), JJ.facetPartitioning
          }
          getFacetPosition(JJ) {
            const cJ = eJ.j.Zero();
            return this.getFacetPositionToRef(JJ, cJ), cJ
          }
          getFacetPositionToRef(JJ, cJ) {
            const ZJ = this.getFacetLocalPositions()[JJ],
              FJ = this.getWorldMatrix();
            return eJ.j.TransformCoordinatesToRef(ZJ, FJ, cJ), this
          }
          getFacetNormal(JJ) {
            const cJ = eJ.j.Zero();
            return this.getFacetNormalToRef(JJ, cJ), cJ
          }
          getFacetNormalToRef(JJ, cJ) {
            const ZJ = this.getFacetLocalNormals()[JJ];
            return eJ.j.TransformNormalToRef(ZJ, this.getWorldMatrix(), cJ), this
          }
          getFacetsAtLocalCoordinates(JJ, cJ, ZJ) {
            const FJ = this.rM(),
              UJ = this._internalAbstractMeshDataInfo._facetData,
              eJ = Math.floor((JJ - FJ.minimum.x * UJ.partitioningBBoxRatio) * UJ.subDiv.X * UJ.partitioningBBoxRatio / UJ.bbSize.x),
              XJ = Math.floor((cJ - FJ.minimum.y * UJ.partitioningBBoxRatio) * UJ.subDiv.Y * UJ.partitioningBBoxRatio / UJ.bbSize.y),
              AJ = Math.floor((ZJ - FJ.minimum.z * UJ.partitioningBBoxRatio) * UJ.subDiv.Z * UJ.partitioningBBoxRatio / UJ.bbSize.z);
            return eJ < 0 || eJ > UJ.subDiv.max || XJ < 0 || XJ > UJ.subDiv.max || AJ < 0 || AJ > UJ.subDiv.max ? null : UJ.facetPartitioning[eJ + UJ.subDiv.max * XJ + UJ.subDiv.max * UJ.subDiv.max * AJ]
          }
          getClosestFacetAtCoordinates(JJ, cJ, ZJ, FJ) {
            let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const AJ = this.getWorldMatrix(),
              qJ = eJ.h.Matrix[5];
            AJ.invertToRef(qJ);
            const jJ = eJ.h.Pn[8];
            eJ.j.TransformCoordinatesFromFloatsToRef(JJ, cJ, ZJ, qJ, jJ);
            const YJ = this.getClosestFacetAtLocalCoordinates(jJ.x, jJ.y, jJ.z, FJ, UJ, XJ);
            return FJ && eJ.j.TransformCoordinatesFromFloatsToRef(FJ.x, FJ.y, FJ.z, AJ, FJ), YJ
          }
          getClosestFacetAtLocalCoordinates(JJ, cJ, ZJ, FJ) {
            let UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              sJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              nJ = null;
            const GJ = this.getFacetLocalPositions(),
              fJ = this.getFacetLocalNormals(),
              xJ = this.getFacetsAtLocalCoordinates(JJ, cJ, ZJ);
            if (!xJ) return null;
            let rJ, vJ, mJ, QJ, EJ = Number.MAX_VALUE;
            for (let VJ = 0; VJ < xJ.length; VJ++) vJ = xJ[VJ], mJ = fJ[vJ], QJ = GJ[vJ], AJ = (JJ - QJ.x) * mJ.x + (cJ - QJ.y) * mJ.y + (ZJ - QJ.z) * mJ.z, (!DJ || DJ && sJ && AJ >= 0 || DJ && !sJ && AJ <= 0) && (AJ = mJ.x * QJ.x + mJ.y * QJ.y + mJ.z * QJ.z, qJ = -(mJ.x * JJ + mJ.y * cJ + mJ.z * ZJ - AJ) / (mJ.x * mJ.x + mJ.y * mJ.y + mJ.z * mJ.z), jJ = JJ + mJ.x * qJ, YJ = cJ + mJ.y * qJ, hJ = ZJ + mJ.z * qJ, UJ = jJ - JJ, eJ = YJ - cJ, XJ = hJ - ZJ, rJ = UJ * UJ + eJ * eJ + XJ * XJ, rJ < EJ && (EJ = rJ, nJ = vJ, FJ && (FJ.x = jJ, FJ.y = YJ, FJ.z = hJ)));
            return nJ
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const JJ = this._internalAbstractMeshDataInfo._facetData;
            return JJ.facetDataEnabled && (JJ.facetDataEnabled = !1, JJ.facetPositions = [], JJ.facetNormals = [], JJ.facetPartitioning = new Array, JJ.facetParameters = {}, JJ.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(JJ, cJ) {
            return this
          }
          createNormals(JJ) {
            const cJ = this.getVerticesData(XJ.n.PositionKind),
              ZJ = this.QXJ();
            let FJ;
            return FJ = this.isVerticesDataPresent(XJ.n.NormalKind) ? this.getVerticesData(XJ.n.NormalKind) : [], AJ.e.ComputeNormals(cJ, ZJ, FJ, {
              useRightHandedSystem: this.Qy().useRightHandedSystem
            }), this.setVerticesData(XJ.n.NormalKind, FJ, JJ), this
          }
          async optimizeIndicesAsync() {
            const JJ = this.QXJ();
            if (!JJ) return this;
            const {
              OptimizeIndices: cJ
            } = await ZJ.e(331).then((() => ZJ(41204)));
            return cJ(JJ), this.setIndices(JJ, this.getTotalVertices()), this
          }
          alignWithNormal(JJ, cJ) {
            cJ || (cJ = QJ.b.Y);
            const ZJ = eJ.h.Pn[0],
              FJ = eJ.h.Pn[1];
            return eJ.j.CrossToRef(cJ, JJ, FJ), eJ.j.CrossToRef(JJ, FJ, ZJ), this.rotationQuaternion ? eJ.e.RotationQuaternionFromAxisToRef(ZJ, JJ, FJ, this.rotationQuaternion) : eJ.j.RotationFromAxisToRef(ZJ, JJ, FJ, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, fJ.m)("EdgesRenderer")
          }
          enableEdgesRendering(JJ, cJ, ZJ) {
            throw (0, fJ.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.lE.filter((JJ => JJ.emitter === this))
          }
        }, (() => {
          const ZJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(DJ[Symbol.metadata] ?? null) : void 0;
          cJ = [VJ.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, FJ.d)(JJ, null, cJ, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: JJ => "_ApplySkeleton" in JJ,
              get: JJ => JJ._ApplySkeleton
            },
            metadata: ZJ
          }, null, sJ), ZJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZJ
          })
        })(), JJ.OCCLUSION_TYPE_NONE = ((0, FJ.e)(JJ, sJ), 0), JJ.OCCLUSION_TYPE_OPTIMISTIC = 1, JJ.OCCLUSION_TYPE_STRICT = 2, JJ.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, JJ.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, JJ.CULLINGSTRATEGY_STANDARD = 0, JJ.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, JJ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, JJ.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, JJ.DefaultIsPickable = !0, JJ
      })(),
      gJ = !1;

    function HJ() {
      gJ || (gJ = !0, (0, yJ.f)("BABYLON.AbstractMesh", WJ))
    }(sJ = WJ.prototype).createOrUpdateSubmeshesOctree ?? (sJ.createOrUpdateSubmeshesOctree = (0, fJ.l)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (nJ = WJ.prototype).getPhysicsImpostor ?? (nJ.getPhysicsImpostor = (0, fJ.l)("AbstractMesh", "getPhysicsImpostor")), (GJ = WJ.prototype).setPhysicsLinkWith ?? (GJ.setPhysicsLinkWith = (0, fJ.l)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(WJ.prototype, "occlusionRetryCount") || Object.defineProperty(WJ.prototype, "occlusionRetryCount", (0, fJ.h)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(WJ.prototype, "occlusionType") || Object.defineProperty(WJ.prototype, "occlusionType", (0, fJ.h)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(WJ.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(WJ.prototype, "occlusionQueryAlgorithmType", (0, fJ.h)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(WJ.prototype, "isOccluded") || Object.defineProperty(WJ.prototype, "isOccluded", (0, fJ.h)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(WJ.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(WJ.prototype, "isOcclusionQueryInProgress", (0, fJ.h)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(WJ.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(WJ.prototype, "forceRenderingWhenOccluded", (0, fJ.h)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(WJ.prototype, "occlusionForRenderPassId") || Object.defineProperty(WJ.prototype, "occlusionForRenderPassId", (0, fJ.h)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(WJ.prototype, "decalMap") || Object.defineProperty(WJ.prototype, "decalMap", (0, fJ.h)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(WJ.prototype, "HI") || Object.defineProperty(WJ.prototype, "HI", (0, fJ.h)("AbstractMesh", "HI")), Object.getOwnPropertyDescriptor(WJ.prototype, "physicsImpostor") || Object.defineProperty(WJ.prototype, "physicsImpostor", (0, fJ.h)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(WJ.prototype, "showBoundingBox") || Object.defineProperty(WJ.prototype, "showBoundingBox", (0, fJ.h)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(WJ.prototype, "edgesRenderer") || Object.defineProperty(WJ.prototype, "edgesRenderer", (0, fJ.h)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(WJ.prototype, "renderOutline") || Object.defineProperty(WJ.prototype, "renderOutline", (0, fJ.h)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(WJ.prototype, "renderOverlay") || Object.defineProperty(WJ.prototype, "renderOverlay", (0, fJ.h)("AbstractMesh", "renderOverlay"))
  },
  39179: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => xJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36231),
      eJ = ZJ(39170),
      XJ = ZJ(38918),
      AJ = ZJ(39058),
      qJ = ZJ(39184),
      jJ = ZJ(39065),
      YJ = ZJ(38879),
      hJ = ZJ(37660),
      DJ = ZJ(38825),
      sJ = ZJ(39076),
      nJ = ZJ(36192),
      GJ = ZJ(39193),
      fJ = ZJ(38859);
    class xJ {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(JJ) {
        this._boundingBias ? this._boundingBias.rZJ(JJ) : this._boundingBias = JJ.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(JJ) {
        const cJ = new xJ(xJ.RandomId(), JJ.Qy());
        return cJ.applyToMesh(JJ), cJ
      }
      get meshes() {
        return this._meshes
      }
      constructor(JJ, cJ, ZJ) {
        let UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          XJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new FJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new FJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = cJ || nJ.c.LastCreatedScene, this._scene && (this.id = JJ, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.gn(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = UJ, null !== XJ && (this._totalVertices = XJ), ZJ ? this.setAllVerticesData(ZJ, UJ) : null === XJ && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), eJ && (this.applyToMesh(eJ), eJ.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Qy() {
        return this._scene
      }
      gn() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let JJ = 0; JJ < this._meshes.length; JJ++)
          if (!this._meshes[JJ].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const JJ = new Set;
        for (const cJ in this._vertexBuffers) JJ.add(this._vertexBuffers[cJ].getWrapperBuffer());
        JJ.forEach((JJ => {
          JJ._rebuild()
        }))
      }
      setAllVerticesData(JJ, cJ) {
        JJ.applyToGeometry(this, cJ), this._notifyUpdate()
      }
      setVerticesData(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        ZJ && Array.isArray(cJ) && (cJ = new Float32Array(cJ));
        const UJ = new XJ.n(this._engine, cJ, JJ, {
          updatable: ZJ,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: FJ,
          label: "Geometry_" + this.id + "_" + JJ
        });
        this.setVerticesBuffer(UJ)
      }
      removeVerticesData(JJ) {
        this._vertexBuffers[JJ] && (this._vertexBuffers[JJ].dispose(), delete this._vertexBuffers[JJ]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const UJ = JJ.getKind();
        this._vertexBuffers[UJ] && ZJ && this._vertexBuffers[UJ].dispose(), JJ._buffer && JJ._ownsBuffer && JJ._buffer._increaseReferences(), this._vertexBuffers[UJ] = JJ;
        const eJ = this._meshes,
          AJ = eJ.length;
        if (UJ === XJ.n.PositionKind) {
          this._totalVertices = cJ ?? JJ._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : JJ.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ZJ = this._extend && this._extend.minimum || new FJ.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            UJ = this._extend && this._extend.maximum || new FJ.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let JJ = 0; JJ < AJ; JJ++) {
            const cJ = eJ[JJ];
            cJ.buildBoundingInfo(ZJ, UJ), cJ._createGlobalSubMesh(cJ.isUnIndexed), cJ.computeWorldMatrix(!0), cJ.synchronizeInstances()
          }
        }
        this._notifyUpdate(UJ)
      }
      updateVerticesDataDirectly(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UJ = this.getVertexBuffer(JJ);
        UJ && (UJ.updateDirectly(cJ, ZJ, FJ), this._notifyUpdate(JJ))
      }
      updateVerticesData(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FJ = this.getVertexBuffer(JJ);
        FJ && (FJ.update(cJ), JJ === XJ.n.PositionKind && this._updateBoundingInfo(ZJ, cJ), this._notifyUpdate(JJ))
      }
      _updateBoundingInfo(JJ, cJ) {
        if (JJ && this._updateExtend(cJ), this._resetPointsArrayCache(), JJ) {
          const JJ = this._meshes;
          for (const cJ of JJ) {
            cJ.hasBoundingInfo ? cJ.rM().reConstruct(this._extend.minimum, this._extend.maximum) : cJ.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const JJ = cJ.aE;
            for (const cJ of JJ) cJ.refreshBoundingInfo()
          }
        }
      }
      _bind(JJ, cJ, ZJ, FJ) {
        if (!JJ) return;
        void 0 === cJ && (cJ = this._indexBuffer);
        const UJ = this.getVertexBuffers();
        if (!UJ) return;
        if (cJ != this._indexBuffer || !this._vertexArrayObjects && !FJ) return void this._engine.bindBuffers(UJ, cJ, JJ, ZJ);
        const eJ = FJ || this._vertexArrayObjects,
          XJ = this._engine;
        eJ[JJ.key] || (eJ[JJ.key] = XJ.recordVertexArrayObject(UJ, cJ, JJ, ZJ)), XJ.bindVertexArrayObject(eJ[JJ.key], cJ)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(JJ, cJ, ZJ) {
        const FJ = this.getVertexBuffer(JJ);
        return FJ ? FJ.getFloatData(this._totalVertices, ZJ || cJ && 1 !== this._meshes.length) : null
      }
      copyVerticesData(JJ, cJ) {
        const ZJ = this.getVertexBuffer(JJ);
        if (!ZJ) return;
        cJ[JJ] || (cJ[JJ] = new Float32Array(this._totalVertices * ZJ.getSize()));
        const FJ = ZJ.getData();
        FJ && (0, fJ.f)(FJ, ZJ.getSize(), ZJ.type, ZJ.byteOffset, ZJ.byteStride, ZJ.normalized, this._totalVertices, cJ[JJ])
      }
      isVertexBufferUpdatable(JJ) {
        const cJ = this._vertexBuffers[JJ];
        return !!cJ && cJ.isUpdatable()
      }
      getVertexBuffer(JJ) {
        return this.isReady() ? this._vertexBuffers[JJ] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(JJ) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[JJ] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(JJ)
      }
      getVerticesDataKinds() {
        const JJ = [];
        let cJ;
        if (!this._vertexBuffers && this._delayInfo)
          for (cJ in this._delayInfo) JJ.push(cJ);
        else
          for (cJ in this._vertexBuffers) JJ.push(cJ);
        return JJ
      }
      updateIndices(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const FJ = JJ.length !== this._indices.length;
            if (ZJ || (this._indices = JJ.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, JJ, cJ), FJ)
              for (const JJ of this._meshes) JJ._createGlobalSubMesh(!0)
          } else this.setIndices(JJ, null, !0)
      }
      setIndexBuffer(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = JJ, this._totalVertices = cJ, this._totalIndices = ZJ, JJ.is32Bits = null === FJ ? cJ > 65535 : FJ;
        for (const UJ of this._meshes) UJ._createGlobalSubMesh(!0), UJ.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = JJ, this._indexBufferIsUpdatable = ZJ, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ZJ, "Geometry_" + this.id + "_IndexBuffer")), void 0 != cJ && (this._totalVertices = cJ);
        for (const UJ of this._meshes) UJ._createGlobalSubMesh(!FJ), UJ.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      QXJ(JJ, cJ) {
        if (!this.isReady()) return null;
        const ZJ = this._indices;
        return cJ || JJ && 1 !== this._meshes.length ? ZJ.slice() : ZJ
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        JJ && this._vertexArrayObjects && this._vertexArrayObjects[JJ.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[JJ.key]), delete this._vertexArrayObjects[JJ.key])
      }
      releaseForMesh(JJ, cJ) {
        const ZJ = this._meshes,
          FJ = ZJ.indexOf(JJ); - 1 !== FJ && (ZJ.splice(FJ, 1), this._vertexArrayObjects && JJ._invalidateInstanceVertexArrayObject(), JJ._geometry = null, 0 === ZJ.length && cJ && this.dispose())
      }
      applyToMesh(JJ) {
        if (JJ._geometry === this) return;
        const cJ = JJ._geometry;
        cJ && cJ.releaseForMesh(JJ), this._vertexArrayObjects && JJ._invalidateInstanceVertexArrayObject();
        const ZJ = this._meshes;
        JJ._geometry = this, JJ._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ZJ.push(JJ), this.isReady() ? this._applyToMesh(JJ) : this._boundingInfo && JJ.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!JJ && (JJ = this.getVerticesData(XJ.n.PositionKind), !JJ)) return;
          this._extend = (0, sJ.f)(JJ, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(JJ) {
        for (const cJ in this._vertexBuffers) {
          const ZJ = this._vertexBuffers[cJ];
          ZJ._buffer.getBuffer() || ZJ.create(), cJ === XJ.n.PositionKind && (this._extend || this._updateExtend(), JJ.buildBoundingInfo(this._extend.minimum, this._extend.maximum), JJ._createGlobalSubMesh(JJ.isUnIndexed), JJ._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), JJ._syncGeometryWithMorphTargetManager(), JJ.synchronizeInstances()
      }
      _notifyUpdate(JJ) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, JJ), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const cJ of this._meshes) cJ._markSubMeshesAsAttributesDirty()
      }
      load(JJ, cJ) {
        2 !== this.delayLoadState && (this.isReady() ? cJ && cJ() : (this.delayLoadState = 2, this._queueLoad(JJ, cJ)))
      }
      _queueLoad(JJ, cJ) {
        this.delayLoadingFile && (JJ.addPendingData(this), (async () => {
          try {
            const ZJ = await JJ._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void JJ.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ZJ), this), this.delayLoadState = 1, this._delayInfo = [], JJ.removePendingData(this);
            const FJ = this._meshes,
              UJ = FJ.length;
            for (let JJ = 0; JJ < UJ; JJ++) this._applyToMesh(FJ[JJ]);
            cJ && cJ()
          } catch (ZJ) {
            JJ.removePendingData(this), JJ.YZJ || hJ.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZJ}`)
          }
        })())
      }
      toLeftHanded() {
        const JJ = this.QXJ(!1);
        if (null != JJ && JJ.length > 0) {
          for (let cJ = 0; cJ < JJ.length; cJ += 3) {
            const ZJ = JJ[cJ + 0];
            JJ[cJ + 0] = JJ[cJ + 2], JJ[cJ + 2] = ZJ
          }
          this.setIndices(JJ)
        }
        const cJ = this.getVerticesData(XJ.n.PositionKind, !1);
        if (null != cJ && cJ.length > 0) {
          for (let JJ = 0; JJ < cJ.length; JJ += 3) cJ[JJ + 2] = -cJ[JJ + 2];
          this.setVerticesData(XJ.n.PositionKind, cJ, !1)
        }
        const ZJ = this.getVerticesData(XJ.n.NormalKind, !1);
        if (null != ZJ && ZJ.length > 0) {
          for (let JJ = 0; JJ < ZJ.length; JJ += 3) ZJ[JJ + 2] = -ZJ[JJ + 2];
          this.setVerticesData(XJ.n.NormalKind, ZJ, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const JJ = this.getVerticesData(XJ.n.PositionKind);
        if (!JJ || 0 === JJ.length) return !1;
        for (let cJ = 3 * this._positionsCache.length, ZJ = this._positionsCache.length; cJ < JJ.length; cJ += 3, ++ZJ) this._positionsCache[ZJ] = FJ.j.FromArray(JJ, cJ);
        for (let cJ = 0, ZJ = 0; cJ < JJ.length; cJ += 3, ++ZJ) this._positionsCache[ZJ].set(JJ[0 + cJ], JJ[1 + cJ], JJ[2 + cJ]);
        return this._positionsCache.length = JJ.length / 3, this._positions = this._positionsCache, !0
      }
      YZJ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ZJ in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ZJ]);
          this._vertexArrayObjects = {};
          const JJ = this._meshes,
            cJ = JJ.length;
          for (let ZJ = 0; ZJ < cJ; ZJ++) JJ[ZJ]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const JJ = this._meshes,
          cJ = JJ.length;
        let ZJ;
        for (ZJ = 0; ZJ < cJ; ZJ++) this.releaseForMesh(JJ[ZJ]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const FJ in this._vertexBuffers) this._vertexBuffers[FJ].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const JJ = this._parentContainer.geometries.indexOf(this);
          JJ > -1 && this._parentContainer.geometries.splice(JJ, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(JJ) {
        const cJ = new xJ(JJ, this._scene),
          ZJ = this.QXJ(void 0, !0);
        ZJ && cJ.setIndices(ZJ);
        let FJ, UJ = !1;
        for (FJ in this._vertexBuffers) {
          const JJ = this.getVertexBuffer(FJ),
            ZJ = JJ.getData();
          if (!ZJ) continue;
          const eJ = JJ.isUpdatable(),
            AJ = JJ.getSize(),
            {
              type: qJ,
              byteOffset: jJ,
              byteStride: YJ,
              normalized: hJ
            } = JJ;
          UJ = UJ || eJ;
          let DJ = this._totalVertices;
          if (JJ.getIsInstanced()) {
            let JJ;
            JJ = ZJ instanceof Array ? 4 * ZJ.length : ZJ.byteLength, DJ = JJ / YJ
          }
          const sJ = (0, fJ.r)(ZJ, AJ, qJ, jJ, YJ, DJ, !0),
            nJ = new XJ.n(this._engine, sJ, FJ, {
              updatable: eJ,
              useBytes: !1,
              stride: AJ,
              size: AJ,
              offset: 0,
              type: qJ,
              normalized: hJ,
              takeBufferOwnership: !0,
              instanced: JJ.getIsInstanced()
            });
          cJ.setVerticesBuffer(nJ, DJ)
        }
        for (FJ in cJ._updatable = UJ, cJ.delayLoadState = this.delayLoadState, cJ.delayLoadingFile = this.delayLoadingFile, cJ._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) cJ._delayInfo = cJ._delayInfo || [], cJ._delayInfo.push(FJ);
        return cJ._boundingInfo = new jJ.b(this._extend.minimum, this._extend.maximum), cJ
      }
      serialize() {
        const JJ = {};
        return JJ.id = this.id, JJ.uniqueId = this.uniqueId, JJ.updatable = this._updatable, DJ.b && DJ.b.HasTags(this) && (JJ.tags = DJ.b.GetTags(this)), JJ
      }
      _toNumberArray(JJ) {
        return Array.isArray(JJ) ? JJ : Array.prototype.slice.call(JJ)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const JJ in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, JJ) && (this._vertexBuffers[JJ]._buffer._data = null)
      }
      serializeVerticeData() {
        const JJ = this.serialize();
        return this.isVerticesDataPresent(XJ.n.PositionKind) && (JJ.positions = this._toNumberArray(this.getVerticesData(XJ.n.PositionKind)), this.isVertexBufferUpdatable(XJ.n.PositionKind) && (JJ.positionsUpdatable = !0)), this.isVerticesDataPresent(XJ.n.NormalKind) && (JJ.normals = this._toNumberArray(this.getVerticesData(XJ.n.NormalKind)), this.isVertexBufferUpdatable(XJ.n.NormalKind) && (JJ.normalsUpdatable = !0)), this.isVerticesDataPresent(XJ.n.TangentKind) && (JJ.tangents = this._toNumberArray(this.getVerticesData(XJ.n.TangentKind)), this.isVertexBufferUpdatable(XJ.n.TangentKind) && (JJ.tangentsUpdatable = !0)), this.isVerticesDataPresent(XJ.n.UVKind) && (JJ.uvs = this._toNumberArray(this.getVerticesData(XJ.n.UVKind)), this.isVertexBufferUpdatable(XJ.n.UVKind) && (JJ.uvsUpdatable = !0)), this.isVerticesDataPresent(XJ.n.UV2Kind) && (JJ.uvs2 = this._toNumberArray(this.getVerticesData(XJ.n.UV2Kind)), this.isVertexBufferUpdatable(XJ.n.UV2Kind) && (JJ.uvs2Updatable = !0)), this.isVerticesDataPresent(XJ.n.UV3Kind) && (JJ.uvs3 = this._toNumberArray(this.getVerticesData(XJ.n.UV3Kind)), this.isVertexBufferUpdatable(XJ.n.UV3Kind) && (JJ.uvs3Updatable = !0)), this.isVerticesDataPresent(XJ.n.UV4Kind) && (JJ.uvs4 = this._toNumberArray(this.getVerticesData(XJ.n.UV4Kind)), this.isVertexBufferUpdatable(XJ.n.UV4Kind) && (JJ.uvs4Updatable = !0)), this.isVerticesDataPresent(XJ.n.UV5Kind) && (JJ.uvs5 = this._toNumberArray(this.getVerticesData(XJ.n.UV5Kind)), this.isVertexBufferUpdatable(XJ.n.UV5Kind) && (JJ.uvs5Updatable = !0)), this.isVerticesDataPresent(XJ.n.UV6Kind) && (JJ.uvs6 = this._toNumberArray(this.getVerticesData(XJ.n.UV6Kind)), this.isVertexBufferUpdatable(XJ.n.UV6Kind) && (JJ.uvs6Updatable = !0)), this.isVerticesDataPresent(XJ.n.ColorKind) && (JJ.colors = this._toNumberArray(this.getVerticesData(XJ.n.ColorKind)), this.isVertexBufferUpdatable(XJ.n.ColorKind) && (JJ.colorsUpdatable = !0)), this.isVerticesDataPresent(XJ.n.MatricesIndicesKind) && (JJ.matricesIndices = this._toNumberArray(this.getVerticesData(XJ.n.MatricesIndicesKind)), JJ.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(XJ.n.MatricesIndicesKind) && (JJ.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(XJ.n.MatricesWeightsKind) && (JJ.matricesWeights = this._toNumberArray(this.getVerticesData(XJ.n.MatricesWeightsKind)), this.isVertexBufferUpdatable(XJ.n.MatricesWeightsKind) && (JJ.matricesWeightsUpdatable = !0)), JJ.indices = this._toNumberArray(this.QXJ()), JJ
      }
      static ExtractFromMesh(JJ, cJ) {
        const ZJ = JJ._geometry;
        return ZJ ? ZJ.copy(cJ) : null
      }
      static RandomId() {
        return YJ.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(JJ, cJ) {
        for (let ZJ = 0; ZJ < cJ.geometries.length; ZJ++)
          if (cJ.geometries[ZJ]._loadedUniqueId === JJ) return cJ.geometries[ZJ];
        return null
      }
      static _ImportGeometry(JJ, cJ) {
        const ZJ = cJ.Qy(),
          FJ = JJ.geometryUniqueId,
          eJ = JJ.geometryId;
        if (FJ || eJ) {
          const JJ = FJ ? this._GetGeometryByLoadedUniqueId(FJ, ZJ) : ZJ.getGeometryById(eJ);
          JJ && JJ.applyToMesh(cJ)
        } else if (JJ instanceof ArrayBuffer) {
          const ZJ = cJ._binaryInfo;
          if (ZJ.positionsAttrDesc && ZJ.positionsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.positionsAttrDesc.offset, ZJ.positionsAttrDesc.count);
            cJ.setVerticesData(XJ.n.PositionKind, FJ, !1)
          }
          if (ZJ.normalsAttrDesc && ZJ.normalsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.normalsAttrDesc.offset, ZJ.normalsAttrDesc.count);
            cJ.setVerticesData(XJ.n.NormalKind, FJ, !1)
          }
          if (ZJ.tangetsAttrDesc && ZJ.tangetsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.tangetsAttrDesc.offset, ZJ.tangetsAttrDesc.count);
            cJ.setVerticesData(XJ.n.TangentKind, FJ, !1)
          }
          if (ZJ.uvsAttrDesc && ZJ.uvsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvsAttrDesc.offset, ZJ.uvsAttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UVKind, FJ, !1)
          }
          if (ZJ.uvs2AttrDesc && ZJ.uvs2AttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvs2AttrDesc.offset, ZJ.uvs2AttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UV2Kind, FJ, !1)
          }
          if (ZJ.uvs3AttrDesc && ZJ.uvs3AttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvs3AttrDesc.offset, ZJ.uvs3AttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UV3Kind, FJ, !1)
          }
          if (ZJ.uvs4AttrDesc && ZJ.uvs4AttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvs4AttrDesc.offset, ZJ.uvs4AttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UV4Kind, FJ, !1)
          }
          if (ZJ.uvs5AttrDesc && ZJ.uvs5AttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvs5AttrDesc.offset, ZJ.uvs5AttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UV5Kind, FJ, !1)
          }
          if (ZJ.uvs6AttrDesc && ZJ.uvs6AttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.uvs6AttrDesc.offset, ZJ.uvs6AttrDesc.count);
            if (GJ.d)
              for (let JJ = 1; JJ < FJ.length; JJ += 2) FJ[JJ] = 1 - FJ[JJ];
            cJ.setVerticesData(XJ.n.UV6Kind, FJ, !1)
          }
          if (ZJ.colorsAttrDesc && ZJ.colorsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.colorsAttrDesc.offset, ZJ.colorsAttrDesc.count);
            cJ.setVerticesData(XJ.n.ColorKind, FJ, !1, ZJ.colorsAttrDesc.stride)
          }
          if (ZJ.matricesIndicesAttrDesc && ZJ.matricesIndicesAttrDesc.count > 0) {
            const FJ = new Int32Array(JJ, ZJ.matricesIndicesAttrDesc.offset, ZJ.matricesIndicesAttrDesc.count),
              UJ = [];
            for (let JJ = 0; JJ < FJ.length; JJ++) {
              const cJ = FJ[JJ];
              UJ.push(255 & cJ), UJ.push((65280 & cJ) >> 8), UJ.push((16711680 & cJ) >> 16), UJ.push(cJ >> 24 & 255)
            }
            cJ.setVerticesData(XJ.n.MatricesIndicesKind, UJ, !1)
          }
          if (ZJ.matricesIndicesExtraAttrDesc && ZJ.matricesIndicesExtraAttrDesc.count > 0) {
            const FJ = new Int32Array(JJ, ZJ.matricesIndicesExtraAttrDesc.offset, ZJ.matricesIndicesExtraAttrDesc.count),
              UJ = [];
            for (let JJ = 0; JJ < FJ.length; JJ++) {
              const cJ = FJ[JJ];
              UJ.push(255 & cJ), UJ.push((65280 & cJ) >> 8), UJ.push((16711680 & cJ) >> 16), UJ.push(cJ >> 24 & 255)
            }
            cJ.setVerticesData(XJ.n.MatricesIndicesExtraKind, UJ, !1)
          }
          if (ZJ.matricesWeightsAttrDesc && ZJ.matricesWeightsAttrDesc.count > 0) {
            const FJ = new Float32Array(JJ, ZJ.matricesWeightsAttrDesc.offset, ZJ.matricesWeightsAttrDesc.count);
            cJ.setVerticesData(XJ.n.MatricesWeightsKind, FJ, !1)
          }
          if (ZJ.indicesAttrDesc && ZJ.indicesAttrDesc.count > 0) {
            const FJ = new Int32Array(JJ, ZJ.indicesAttrDesc.offset, ZJ.indicesAttrDesc.count);
            cJ.setIndices(FJ, null)
          }
          if (ZJ.subMeshesAttrDesc && ZJ.subMeshesAttrDesc.count > 0) {
            const FJ = new Int32Array(JJ, ZJ.subMeshesAttrDesc.offset, 5 * ZJ.subMeshesAttrDesc.count);
            cJ.aE = [];
            for (let JJ = 0; JJ < ZJ.subMeshesAttrDesc.count; JJ++) {
              const ZJ = FJ[5 * JJ + 0],
                UJ = FJ[5 * JJ + 1],
                eJ = FJ[5 * JJ + 2],
                XJ = FJ[5 * JJ + 3],
                qJ = FJ[5 * JJ + 4];
              AJ.e.AddToMesh(ZJ, UJ, eJ, XJ, qJ, cJ)
            }
          }
        } else if (JJ.positions && JJ.normals && JJ.indices) {
          if (cJ.setVerticesData(XJ.n.PositionKind, JJ.positions, JJ.positions._updatable || JJ.positionsUpdatable), cJ.setVerticesData(XJ.n.NormalKind, JJ.normals, JJ.normals._updatable || JJ.normalsUpdatable), JJ.tangents && cJ.setVerticesData(XJ.n.TangentKind, JJ.tangents, JJ.tangents._updatable || JJ.tangentsUpdatable), JJ.uvs && cJ.setVerticesData(XJ.n.UVKind, JJ.uvs, JJ.uvs._updatable || JJ.uvsUpdatable), JJ.uvs2 && cJ.setVerticesData(XJ.n.UV2Kind, JJ.uvs2, JJ.uvs2._updatable || JJ.uvs2Updatable), JJ.uvs3 && cJ.setVerticesData(XJ.n.UV3Kind, JJ.uvs3, JJ.uvs3._updatable || JJ.uvs3Updatable), JJ.uvs4 && cJ.setVerticesData(XJ.n.UV4Kind, JJ.uvs4, JJ.uvs4._updatable || JJ.uvs4Updatable), JJ.uvs5 && cJ.setVerticesData(XJ.n.UV5Kind, JJ.uvs5, JJ.uvs5._updatable || JJ.uvs5Updatable), JJ.uvs6 && cJ.setVerticesData(XJ.n.UV6Kind, JJ.uvs6, JJ.uvs6._updatable || JJ.uvs6Updatable), JJ.colors && cJ.setVerticesData(XJ.n.ColorKind, UJ.f.CheckColors4(JJ.colors, JJ.positions.length / 3), JJ.colors._updatable), JJ.matricesIndices)
            if (JJ.matricesIndices._isExpanded || JJ.matricesIndicesExpanded) delete JJ.matricesIndices._isExpanded, delete JJ.matricesIndicesExpanded, cJ.setVerticesData(XJ.n.MatricesIndicesKind, JJ.matricesIndices, JJ.matricesIndices._updatable || JJ.matricesIndicesUpdatable);
            else {
              const ZJ = [];
              for (let cJ = 0; cJ < JJ.matricesIndices.length; cJ++) {
                const FJ = JJ.matricesIndices[cJ];
                ZJ.push(255 & FJ), ZJ.push((65280 & FJ) >> 8), ZJ.push((16711680 & FJ) >> 16), ZJ.push(FJ >> 24 & 255)
              }
              cJ.setVerticesData(XJ.n.MatricesIndicesKind, ZJ, JJ.matricesIndices._updatable || JJ.matricesIndicesUpdatable)
            } if (JJ.matricesIndicesExtra)
            if (JJ.matricesIndicesExtraExpanded || JJ.matricesIndicesExtra._isExpanded) delete JJ.matricesIndices._isExpanded, delete JJ.matricesIndicesExtraExpanded, cJ.setVerticesData(XJ.n.MatricesIndicesExtraKind, JJ.matricesIndicesExtra, JJ.matricesIndicesExtra._updatable || JJ.matricesIndicesExtraUpdatable);
            else {
              const ZJ = [];
              for (let cJ = 0; cJ < JJ.matricesIndicesExtra.length; cJ++) {
                const FJ = JJ.matricesIndicesExtra[cJ];
                ZJ.push(255 & FJ), ZJ.push((65280 & FJ) >> 8), ZJ.push((16711680 & FJ) >> 16), ZJ.push(FJ >> 24 & 255)
              }
              cJ.setVerticesData(XJ.n.MatricesIndicesExtraKind, ZJ, JJ.matricesIndicesExtra._updatable || JJ.matricesIndicesExtraUpdatable)
            } JJ.matricesWeights && (xJ._CleanMatricesWeights(JJ, cJ), cJ.setVerticesData(XJ.n.MatricesWeightsKind, JJ.matricesWeights, JJ.matricesWeights._updatable)), JJ.matricesWeightsExtra && cJ.setVerticesData(XJ.n.MatricesWeightsExtraKind, JJ.matricesWeightsExtra, JJ.matricesWeights._updatable), cJ.setIndices(JJ.indices, null)
        }
        if (JJ.aE) {
          cJ.aE = [];
          for (let ZJ = 0; ZJ < JJ.aE.length; ZJ++) {
            const FJ = JJ.aE[ZJ];
            AJ.e.AddToMesh(FJ.materialIndex, FJ.verticesStart, FJ.verticesCount, FJ.indexStart, FJ.indexCount, cJ)
          }
        }
        cJ._shouldGenerateFlatShading && (cJ.convertToFlatShadedMesh(), cJ._shouldGenerateFlatShading = !1), cJ.computeWorldMatrix(!0), ZJ.onMeshImportedObservable.notifyObservers(cJ)
      }
      static _CleanMatricesWeights(JJ, cJ) {
        const ZJ = .001;
        if (!qJ.d.CleanBoneMatrixWeights) return;
        let FJ;
        if (!(JJ.skeletonId > -1)) return;
        {
          const ZJ = cJ.Qy().getLastSkeletonById(JJ.skeletonId);
          if (!ZJ) return;
          FJ = ZJ.bones.length
        }
        const UJ = cJ.getVerticesData(XJ.n.MatricesIndicesKind),
          eJ = cJ.getVerticesData(XJ.n.MatricesIndicesExtraKind),
          AJ = JJ.matricesWeights,
          jJ = JJ.matricesWeightsExtra,
          YJ = JJ.numBoneInfluencer,
          hJ = AJ.length;
        for (let XJ = 0; XJ < hJ; XJ += 4) {
          let JJ = 0,
            cJ = -1;
          for (let FJ = 0; FJ < 4; FJ++) {
            const UJ = AJ[XJ + FJ];
            JJ += UJ, UJ < ZJ && cJ < 0 && (cJ = FJ)
          }
          if (jJ)
            for (let FJ = 0; FJ < 4; FJ++) {
              const UJ = jJ[XJ + FJ];
              JJ += UJ, UJ < ZJ && cJ < 0 && (cJ = FJ + 4)
            }
          if ((cJ < 0 || cJ > YJ - 1) && (cJ = YJ - 1), JJ > ZJ) {
            const cJ = 1 / JJ;
            for (let JJ = 0; JJ < 4; JJ++) AJ[XJ + JJ] *= cJ;
            if (jJ)
              for (let JJ = 0; JJ < 4; JJ++) jJ[XJ + JJ] *= cJ
          } else cJ >= 4 ? (jJ[XJ + cJ - 4] = 1 - JJ, eJ[XJ + cJ - 4] = FJ) : (AJ[XJ + cJ] = 1 - JJ, UJ[XJ + cJ] = FJ)
        }
        cJ.setVerticesData(XJ.n.MatricesIndicesKind, UJ), JJ.matricesWeightsExtra && cJ.setVerticesData(XJ.n.MatricesIndicesExtraKind, eJ)
      }
      static Parse(JJ, cJ, ZJ) {
        const UJ = new xJ(JJ.id, cJ, void 0, JJ.updatable);
        return UJ._loadedUniqueId = JJ.uniqueId, DJ.b && DJ.b.AddTagsTo(UJ, JJ.tags), JJ.delayLoadingFile ? (UJ.delayLoadState = 4, UJ.delayLoadingFile = ZJ + JJ.delayLoadingFile, UJ._boundingInfo = new jJ.b(FJ.j.FromArray(JJ.boundingBoxMinimum), FJ.j.FromArray(JJ.boundingBoxMaximum)), UJ._delayInfo = [], JJ.hasUVs && UJ._delayInfo.push(XJ.n.UVKind), JJ.hasUVs2 && UJ._delayInfo.push(XJ.n.UV2Kind), JJ.hasUVs3 && UJ._delayInfo.push(XJ.n.UV3Kind), JJ.hasUVs4 && UJ._delayInfo.push(XJ.n.UV4Kind), JJ.hasUVs5 && UJ._delayInfo.push(XJ.n.UV5Kind), JJ.hasUVs6 && UJ._delayInfo.push(XJ.n.UV6Kind), JJ.hasColors && UJ._delayInfo.push(XJ.n.ColorKind), JJ.hasMatricesIndices && UJ._delayInfo.push(XJ.n.MatricesIndicesKind), JJ.hasMatricesWeights && UJ._delayInfo.push(XJ.n.MatricesWeightsKind), UJ._delayLoadingFunction = eJ.e.ImportVertexData) : eJ.e.ImportVertexData(JJ, UJ), cJ.pushGeometry(UJ, !0), UJ
      }
    }
  },
  39227: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ,
      e: () => nJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(37660),
      eJ = ZJ(39202),
      XJ = ZJ(39159),
      AJ = ZJ(37658),
      qJ = ZJ(39210),
      jJ = ZJ(38918),
      YJ = ZJ(36216);
    class hJ extends eJ.c {
      constructor(JJ, cJ) {
        super(JJ, cJ.Qy()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, cJ.i6(this), this._sourceMesh = cJ, this._unIndexed = cJ._unIndexed, this.position.rZJ(cJ.position), this.rotation.rZJ(cJ.rotation), this.GA.rZJ(cJ.GA), cJ.rotationQuaternion && (this.rotationQuaternion = cJ.rotationQuaternion.clone()), this.animations = cJ.animations.slice();
        for (const ZJ of cJ.getAnimationRanges()) null != ZJ && this.createAnimationRange(ZJ.name, ZJ.from, ZJ.to);
        if (this.infiniteDistance = cJ.infiniteDistance, this.setPivotMatrix(cJ.getPivotMatrix()), cJ.skeleton || cJ.morphTargetManager || !cJ.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const JJ = cJ.rM();
          this.buildBoundingInfo(JJ.minimum, JJ.maximum)
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
      set receiveShadows(JJ) {
        this._sourceMesh?.receiveShadows !== JJ && UJ.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(JJ) {
        this._sourceMesh?.material !== JJ && UJ.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(JJ) {
        this._sourceMesh?.visibility !== JJ && UJ.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(JJ) {
        this._sourceMesh?.skeleton !== JJ && UJ.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(JJ) {
        this._sourceMesh && JJ !== this._sourceMesh.renderingGroupId && UJ.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(JJ) {
        this._sourceMesh && JJ !== this._sourceMesh.meshBlendingTag && UJ.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get uFJ() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(JJ) {
        return this._sourceMesh.createInstance(JJ)
      }
      isReady() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(JJ, !0)
      }
      getVerticesData(JJ, cJ, ZJ) {
        return this._sourceMesh.getVerticesData(JJ, cJ, ZJ)
      }
      copyVerticesData(JJ, cJ) {
        this._sourceMesh.copyVerticesData(JJ, cJ)
      }
      getVertexBuffer(JJ, cJ) {
        return this._sourceMesh.getVertexBuffer(JJ, cJ)
      }
      setVerticesData(JJ, cJ, ZJ, FJ) {
        return this.uFJ && this.uFJ.setVerticesData(JJ, cJ, ZJ, FJ), this.uFJ
      }
      updateVerticesData(JJ, cJ, ZJ, FJ) {
        return this.uFJ && this.uFJ.updateVerticesData(JJ, cJ, ZJ, FJ), this.uFJ
      }
      setIndices(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.uFJ && this.uFJ.setIndices(JJ, cJ), this.uFJ
      }
      isVerticesDataPresent(JJ) {
        return this._sourceMesh.isVerticesDataPresent(JJ)
      }
      QXJ() {
        return this._sourceMesh.QXJ()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rM().isLocked) return this;
        JJ = "object" === typeof cJ ? cJ : {
          applySkeleton: cJ,
          applyMorph: ZJ
        };
        const FJ = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(JJ, null, jJ.n.PositionKind), FJ), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(JJ, cJ) {
        if (super._activate(JJ, cJ), this._sourceMesh.aE || UJ.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, JJ), cJ) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== qJ.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new FJ.b);
          const JJ = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, FJ.h.Pn[7].rZJ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.rZJ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.rZJ(FJ.h.Pn[7]), this._currentLOD._masterMesh = JJ, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Iy() {
        return !0
      }
      getLOD(JJ) {
        if (!JJ) return this;
        const cJ = this.uFJ.getLODLevels();
        if (cJ && 0 !== cJ.length) {
          const cJ = this.rM();
          this._currentLOD = this.uFJ.getLOD(JJ, cJ.QFJ)
        } else this._currentLOD = this.uFJ;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(JJ) {
        return this.uFJ._preActivateForIntermediateRendering(JJ)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.aE)
          for (let JJ = 0; JJ < this._sourceMesh.aE.length; JJ++) this._sourceMesh.aE[JJ].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.rM().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(JJ);
        if (AJ.e.DeepCopy(this, FJ, ["name", "aE", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "uFJ", "Iy", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "CFJ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "IXJ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), cJ && (FJ.parent = cJ), !ZJ)
          for (let UJ = 0; UJ < this.Qy().meshes.length; UJ++) {
            const JJ = this.Qy().meshes[UJ];
            JJ.parent === this && JJ.clone(JJ.name, FJ)
          }
        return FJ.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(FJ), FJ
      }
      dispose(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z5(this), super.dispose(JJ, cJ)
      }
      _serializeAsParent(JJ) {
        super._serializeAsParent(JJ), JJ.parentId = this._sourceMesh.uniqueId, JJ.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = this.clone("Clone of " + (this.name || this.id), JJ || this.parent, !0, cJ && cJ.newSourcedMesh);
        FJ && ZJ && ZJ(this, FJ);
        for (const UJ of this.getChildTransformNodes(!0)) UJ.instantiateHierarchy(FJ, cJ, ZJ);
        return FJ
      }
    }
    let DJ = !1;

    function sJ(JJ, cJ, ZJ, FJ, UJ) {
      for (let eJ = 0; eJ < cJ.length; eJ++) {
        const XJ = JJ[cJ[eJ]] ?? 0,
          AJ = UJ + ZJ[eJ];
        XJ.toArray ? XJ.toArray(FJ, AJ) : XJ.copyToArray ? XJ.copyToArray(FJ, AJ) : FJ[AJ] = XJ
      }
    }

    function nJ() {
      DJ || (DJ = !0, XJ.d._instancedMeshFactory = (JJ, cJ) => {
        const ZJ = new hJ(JJ, cJ);
        if (cJ.HI) {
          ZJ.HI = {};
          for (const JJ in cJ.HI) ZJ.HI[JJ] = cJ.HI[JJ]
        }
        return ZJ
      }, XJ.d.prototype.bI = function(JJ, cJ) {
        if (!this.HI) {
          this.HI = {};
          for (const JJ of this.instances) JJ.HI = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.gn().getCaps().vertexArrayObject ? {} : void 0
        }), this.HI[JJ] = null, this._userInstancedBuffersStorage.strides[JJ] = cJ;
        const ZJ = this._userInstancedBuffersStorage;
        ZJ.interleavedKinds = [], ZJ.interleavedOffsets = [], ZJ.interleavedRowStride = 0;
        for (const FJ in ZJ.strides) ZJ.interleavedKinds.push(FJ), ZJ.interleavedOffsets.push(ZJ.interleavedRowStride), ZJ.interleavedRowStride += ZJ.strides[FJ];
        ZJ.interleavedData = new Float32Array(32 * ZJ.interleavedRowStride);
        for (const FJ in ZJ.interleavedBuffers) ZJ.interleavedBuffers[FJ].buffer.dispose();
        ZJ.interleavedBuffers = {}, ZJ.vertexBuffers[JJ] = null;
        for (const FJ of this.instances) FJ.HI[JJ] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, XJ.d.prototype._processInstancedBuffers = function(JJ, cJ) {
        const ZJ = this._userInstancedBuffersStorage,
          FJ = ZJ.interleavedRowStride;
        if (!FJ) return;
        const UJ = JJ ? JJ.length : 0,
          eJ = (UJ + 1) * FJ;
        let XJ = ZJ.interleavedData;
        if (XJ.length < eJ) {
          let JJ = XJ.length;
          for (; JJ < eJ;) JJ *= 2;
          XJ = ZJ.interleavedData = new Float32Array(JJ)
        }
        const AJ = ZJ.interleavedKinds,
          qJ = ZJ.interleavedOffsets;
        let YJ = 0;
        cJ && (sJ(this.HI, AJ, qJ, XJ, YJ), YJ += FJ);
        for (let jJ = 0; jJ < UJ; jJ++) sJ(JJ[jJ].HI, AJ, qJ, XJ, YJ), YJ += FJ;
        let hJ = "shared",
          DJ = ZJ.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (hJ = this._instanceDataStorage.engine.currentRenderPassId, ZJ.renderPasses || (ZJ.renderPasses = {}), ZJ.renderPasses[hJ] || (ZJ.renderPasses[hJ] = {}), DJ = ZJ.renderPasses[hJ]);
        const nJ = ZJ.interleavedBuffers[hJ];
        let GJ = !nJ || nJ.data !== XJ;
        for (let jJ = 0; !GJ && jJ < AJ.length; jJ++) GJ = !DJ[AJ[jJ]];
        if (!GJ) return void nJ.buffer.updateDirectly(XJ, 0);
        nJ?.buffer.dispose();
        const fJ = new jJ.d(this.gn(), XJ, !0, FJ, !1, !0);
        for (let jJ = 0; jJ < AJ.length; jJ++) {
          const JJ = AJ[jJ],
            cJ = fJ.createVertexBuffer(JJ, qJ[jJ], ZJ.strides[JJ]);
          cJ.hashCode += cJ.byteOffset * 2 ** 24, DJ[JJ] = cJ
        }
        ZJ.interleavedBuffers[hJ] = {
          buffer: fJ,
          data: XJ
        }, this._invalidateInstanceVertexArrayObject()
      }, XJ.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const JJ in this._userInstancedBuffersStorage.vertexArrayObjects) this.gn().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[JJ]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, XJ.d.prototype._disposeInstanceSpecificData = function() {
        for (const cJ in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[cJ].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const cJ in this.HI) this._userInstancedBuffersStorage.vertexBuffers[cJ] && this._userInstancedBuffersStorage.vertexBuffers[cJ].dispose();
        const JJ = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (JJ) {
          for (const cJ in JJ) JJ[cJ].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.HI = {}
      }, (0, YJ.f)("BABYLON.InstancedMesh", hJ))
    }
  },
  39159: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => tJ,
      e: () => lJ,
      h: () => CJ
    });
    var FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ = ZJ(36200),
      rJ = ZJ(38879),
      vJ = ZJ(38844),
      mJ = ZJ(37658),
      QJ = ZJ(38825),
      EJ = ZJ(39163),
      VJ = ZJ(38986),
      KJ = ZJ(36174),
      yJ = ZJ(36231),
      SJ = ZJ(38989),
      IJ = ZJ(38918),
      MJ = ZJ(39170),
      bJ = ZJ(39179),
      wJ = ZJ(39202),
      WJ = ZJ(39058),
      gJ = ZJ(39049),
      HJ = ZJ(39138),
      PJ = ZJ(39213),
      kJ = ZJ(39184),
      pJ = ZJ(38822),
      dJ = ZJ(37660),
      zJ = ZJ(36216),
      NJ = ZJ(38677),
      OJ = ZJ(38933);
    class TJ {
      constructor(JJ, cJ) {
        this.distanceOrScreenCoverage = JJ, this.mesh = cJ
      }
    }
    class CJ {}
    class uJ {
      constructor() {
        this.batchCache = new RJ(this), this.batchCacheReplacementModeInFrozenMode = new RJ(this), this.instancesBufferSize = 2048
      }
    }
    class iJ {
      constructor() {
        this.renderPasses = {}
      }
    }
    class RJ {
      constructor(JJ) {
        this.parent = JJ, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class LJ {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class aJ {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const BJ = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class tJ extends wJ.c {
      static _GetDefaultSideOrientation(JJ) {
        return JJ || tJ.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(JJ) {
        this._internalMeshDataInfo._useLODScreenCoverage = JJ, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(JJ) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== JJ && (JJ && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(IJ.n.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(IJ.n.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = JJ, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new xJ.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new xJ.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new xJ.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new xJ.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new xJ.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(JJ) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(JJ)
      }
      get CFJ() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(JJ) {
        this._internalMeshDataInfo._forcedInstanceCount = JJ
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(JJ) {
        this._internalMeshDataInfo._sideOrientation = JJ, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === JJ || !this._scene.useRightHandedSystem && 0 === JJ
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(JJ) {
        this.sideOrientation = JJ, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(JJ) {
        this._internalMeshDataInfo._overrideRenderingFillMode = JJ
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(JJ) {
        JJ && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (JJ.sideOrientation = null), this._setMaterial(JJ)
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
      set isUnIndexed(JJ) {
        this._unIndexed !== JJ && (this._unIndexed = JJ, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const JJ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return JJ ? JJ.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const JJ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return JJ ? JJ.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(JJ) {
        this._instanceDataStorage.manualUpdate = JJ
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(JJ) {
        this._instanceDataStorage.previousManualUpdate = JJ
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(JJ) {
        this._instanceDataStorage.forceMatrixUpdates = JJ
      }
      _copySource(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UJ = this.Qy();
        if (JJ._geometry && JJ._geometry.applyToMesh(this), mJ.e.DeepCopy(JJ, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "CFJ", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Iy", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "IXJ", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = JJ, UJ.useClonedMeshMap && (JJ._internalMeshDataInfo.meshMap || (JJ._internalMeshDataInfo.meshMap = {}), JJ._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = JJ._originalBuilderSideOrientation, this._creationDataStorage = JJ._creationDataStorage, JJ._ranges) {
          const cJ = JJ._ranges;
          for (const JJ in cJ) Object.prototype.hasOwnProperty.call(cJ, JJ) && cJ[JJ] && this.createAnimationRange(JJ, cJ[JJ].from, cJ[JJ].to)
        }
        if (JJ.metadata && JJ.metadata.clone ? this.metadata = JJ.metadata.clone() : this.metadata = JJ.metadata, this._internalMetadata = JJ._internalMetadata, this.meshBlendingTag = JJ.meshBlendingTag, QJ.b && QJ.b.HasTags(JJ) && QJ.b.AddTagsTo(this, QJ.b.GetTags(JJ, !0)), this.GV(JJ.isEnabled(!1)), this.parent = JJ.parent, this.setPivotMatrix(JJ.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + JJ.id, this.material = JJ.material, !cJ) {
          const UJ = JJ.getDescendants(!0);
          for (let JJ = 0; JJ < UJ.length; JJ++) {
            const eJ = UJ[JJ];
            eJ._isMesh ? (BJ.parent = this, BJ.doNotCloneChildren = cJ, BJ.clonePhysicsImpostor = ZJ, BJ.cloneThinInstances = FJ, eJ.clone(this.name + "." + eJ.name, BJ)) : eJ.clone && eJ.clone(this.name + "." + eJ.name, this)
          }
        }
        if (JJ.morphTargetManager && (this.morphTargetManager = JJ.morphTargetManager), (0, NJ.e)(UJ.getPhysicsEngine)) {
          const cJ = UJ.getPhysicsEngine();
          if (ZJ && cJ)
            if (1 === cJ.getPluginVersion()) {
              const ZJ = cJ.getImpostorForPhysicsObject(JJ);
              ZJ && (this.physicsImpostor = ZJ.clone(this))
            } else 2 === cJ.getPluginVersion() && JJ.physicsBody && JJ.physicsBody.clone(this)
        }
        for (let eJ = 0; eJ < UJ.lE.length; eJ++) {
          const cJ = UJ.lE[eJ];
          cJ.emitter === JJ && cJ.clone(cJ.name, this)
        }
        if (this.skeleton = JJ.skeleton, FJ && (JJ._thinInstanceDataStorage.matrixData ? (this.o2("matrix", new Float32Array(JJ._thinInstanceDataStorage.matrixData), 16, !JJ._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = JJ._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = JJ._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = JJ._thinInstanceDataStorage.matrixBufferSize, JJ._userThinInstanceBuffersStorage)) {
          const cJ = JJ._userThinInstanceBuffersStorage;
          for (const JJ in cJ.data) this.o2(JJ, new Float32Array(cJ.data[JJ]), cJ.strides[JJ], !cJ.vertexBuffers?.[JJ]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[JJ] = cJ.sizes[JJ]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(JJ) {
        let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          eJ = arguments.length > 4 ? arguments[4] : void 0,
          XJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(JJ, ZJ), this._internalMeshDataInfo = new aJ, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new LJ, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = tJ.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ZJ = this.Qy(), this._instanceDataStorage = new iJ, this._instanceDataStorage.engine = ZJ.gn(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new uJ), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (JJ, cJ, ZJ) => {
          JJ && ZJ && (this._uniformBuffer ? this.transferToEffect(cJ) : ZJ.bindOnlyWorldMatrix(cJ))
        };
        let AJ = !1;
        if (FJ && void 0 === FJ._addToSceneRootNodes) {
          const JJ = FJ;
          cJ = JJ.parent ?? null, UJ = JJ.source ?? null, eJ = JJ.doNotCloneChildren ?? !1, XJ = JJ.clonePhysicsImpostor ?? !0, AJ = JJ.cloneThinInstances ?? !1
        } else cJ = FJ;
        UJ && this._copySource(UJ, eJ, XJ, AJ), null !== cJ && (this.parent = cJ), this._instanceDataStorage.hardwareInstancedRendering = this.gn().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = JJ => {
          JJ.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new xJ.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), UJ && UJ.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = 0 === this.getTotalVertices() || cJ && cJ.doNotInstantiate && (!0 === cJ.doNotInstantiate || cJ.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), JJ || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        FJ.parent = JJ || this.parent, FJ.position = this.position.clone(), FJ.GA = this.GA.clone(), this.rotationQuaternion ? FJ.rotationQuaternion = this.rotationQuaternion.clone() : FJ.rotation = this.rotation.clone(), ZJ && ZJ(this, FJ);
        for (const UJ of this.getChildTransformNodes(!0)) "InstancedMesh" === UJ.getClassName() && "Mesh" === FJ.getClassName() && UJ.uFJ === this ? UJ.instantiateHierarchy(FJ, {
          doNotInstantiate: cJ && cJ.doNotInstantiate || !1,
          newSourcedMesh: FJ
        }, ZJ) : UJ.instantiateHierarchy(FJ, cJ, ZJ);
        return FJ
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(JJ) {
        let cJ = super.toString(JJ);
        if (cJ += ", n vertices: " + this.getTotalVertices(), cJ += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ZJ = 0; ZJ < this.animations.length; ZJ++) cJ += ", animation[0]: " + this.animations[ZJ].toString(JJ);
        if (JJ)
          if (this._geometry) {
            const JJ = this.QXJ(),
              ZJ = this.getVerticesData(IJ.n.PositionKind);
            ZJ && JJ && (cJ += ", flat shading: " + (ZJ.length / 3 === JJ.length ? "YES" : "NO"))
          } else cJ += ", flat shading: UNKNOWN";
        return cJ
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const JJ of this.instances) JJ._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const JJ = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((cJ, ZJ) => cJ.distanceOrScreenCoverage < ZJ.distanceOrScreenCoverage ? JJ : cJ.distanceOrScreenCoverage > ZJ.distanceOrScreenCoverage ? -JJ : 0))
      }
      addLODLevel(JJ, cJ) {
        if (cJ && cJ._masterMesh) return dJ.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const ZJ = new TJ(JJ, cJ);
        return this._internalMeshDataInfo._LODLevels.push(ZJ), cJ && (cJ._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(JJ) {
        const cJ = this._internalMeshDataInfo;
        for (let ZJ = 0; ZJ < cJ._LODLevels.length; ZJ++) {
          const FJ = cJ._LODLevels[ZJ];
          if (FJ.distanceOrScreenCoverage === JJ) return FJ.mesh
        }
        return null
      }
      removeLODLevel(JJ) {
        const cJ = this._internalMeshDataInfo;
        for (let ZJ = 0; ZJ < cJ._LODLevels.length; ZJ++) cJ._LODLevels[ZJ].mesh === JJ && (cJ._LODLevels.splice(ZJ, 1), JJ && (JJ._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(JJ, cJ) {
        const ZJ = this._internalMeshDataInfo;
        if (!ZJ._LODLevels || 0 === ZJ._LODLevels.length) return this;
        const FJ = cJ || this.rM().QFJ,
          UJ = JJ.mode === VJ.e.ORTHOGRAPHIC_CAMERA ? JJ.minZ : FJ.centerWorld.subtract(JJ.globalPosition).length();
        let eJ = UJ,
          XJ = 1;
        if (ZJ._useLODScreenCoverage) {
          const cJ = JJ.screenArea;
          let ZJ = FJ.radiusWorld * JJ.minZ / UJ;
          ZJ = ZJ * ZJ * Math.PI, eJ = ZJ / cJ, XJ = -1
        }
        if (XJ * ZJ._LODLevels[ZJ._LODLevels.length - 1].distanceOrScreenCoverage > XJ * eJ) return this.onLODLevelSelection && this.onLODLevelSelection(eJ, this, this), this;
        for (let AJ = 0; AJ < ZJ._LODLevels.length; AJ++) {
          const JJ = ZJ._LODLevels[AJ];
          if (XJ * JJ.distanceOrScreenCoverage < XJ * eJ) {
            if (JJ.mesh) {
              if (4 === JJ.mesh.delayLoadState) return JJ.mesh._checkDelayState(), this;
              if (2 === JJ.mesh.delayLoadState) return this;
              JJ.mesh._preActivate(), JJ.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(eJ, this, JJ.mesh), JJ.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(eJ, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(JJ, cJ, ZJ, FJ) {
        if (!this._geometry) return null;
        let UJ = FJ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[JJ]?.getFloatData(this.instances.length + 1, ZJ || cJ && 1 !== this._geometry.meshes.length);
        return UJ || (UJ = this._geometry.getVerticesData(JJ, cJ, ZJ)), UJ
      }
      copyVerticesData(JJ, cJ) {
        this._geometry && this._geometry.copyVerticesData(JJ, cJ)
      }
      getVertexBuffer(JJ, cJ) {
        return this._geometry ? (cJ ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[JJ]) ?? this._geometry.getVertexBuffer(JJ) : null
      }
      isVerticesDataPresent(JJ, cJ) {
        return this._geometry ? !cJ && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[JJ] || this._geometry.isVerticesDataPresent(JJ) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(JJ)
      }
      isVertexBufferUpdatable(JJ, cJ) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(JJ);
        if (!cJ) {
          const cJ = this._userInstancedBuffersStorage?.vertexBuffers[JJ];
          if (cJ) return cJ.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(JJ)
      }
      getVerticesDataKinds(JJ) {
        if (!this._geometry) {
          const JJ = [];
          if (this._delayInfo)
            for (const cJ of this._delayInfo) JJ.push(cJ);
          return JJ
        }
        const cJ = this._geometry.getVerticesDataKinds();
        if (!JJ && this._userInstancedBuffersStorage)
          for (const ZJ in this._userInstancedBuffersStorage.vertexBuffers) - 1 === cJ.indexOf(ZJ) && cJ.push(ZJ);
        return cJ
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      QXJ(JJ, cJ) {
        return this._geometry ? this._geometry.QXJ(JJ, cJ) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(JJ)) return !1;
        if (!this.aE || 0 === this.aE.length) return !0;
        if (!JJ) return !0;
        const ZJ = this.gn(),
          FJ = this.Qy(),
          UJ = cJ || ZJ.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const eJ = this.material || FJ.defaultMaterial;
        if (eJ)
          if (eJ._storeEffectOnSubMeshes)
            for (const AJ of this.aE) {
              const JJ = AJ.dn();
              if (JJ)
                if (JJ._storeEffectOnSubMeshes) {
                  if (!JJ.isReadyForSubMesh(this, AJ, UJ)) return !1
                } else if (!JJ.isReady(this, UJ)) return !1
            } else if (!eJ.isReady(this, UJ)) return !1;
        const XJ = ZJ.currentRenderPassId;
        for (const AJ of this.lightSources) {
          const JJ = AJ.getShadowGenerators();
          if (!JJ) continue;
          const cJ = JJ.values();
          for (let FJ = cJ.next(); !0 !== FJ.done; FJ = cJ.next()) {
            const JJ = FJ.value;
            if (JJ && (!JJ.getShadowMap()?.renderList || JJ.getShadowMap()?.renderList && -1 !== JJ.getShadowMap()?.renderList?.indexOf(this))) {
              const cJ = JJ.getShadowMap().renderPassIds ?? [ZJ.currentRenderPassId];
              for (let FJ = 0; FJ < cJ.length; ++FJ) {
                ZJ.currentRenderPassId = cJ[FJ];
                for (const cJ of this.aE)
                  if (!JJ.isReady(cJ, UJ, cJ.dn()?.needAlphaBlendingForMesh(this) ?? !1)) return ZJ.currentRenderPassId = XJ, !1
              }
              ZJ.currentRenderPassId = XJ
            }
          }
        }
        for (const AJ of this._internalMeshDataInfo._LODLevels)
          if (AJ.mesh && !AJ.mesh.isReady(UJ)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      zn() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(JJ) {
        this._instanceDataStorage.overridenInstanceCount = JJ
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const JJ = this._instanceDataStorage.engine.currentRenderPassId;
        let cJ = this._instanceDataStorage.renderPasses[JJ];
        return cJ || (cJ = new uJ, this._instanceDataStorage.renderPasses[JJ] = cJ), cJ
      }
      _preActivate() {
        const JJ = this._internalMeshDataInfo,
          cJ = this.Qy().getRenderId();
        return JJ._preActivateId === cJ || (JJ._preActivateId = cJ, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(JJ) {
        const cJ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return cJ.visibleInstances && (cJ.visibleInstances.intermediateDefaultRenderId = JJ), this
      }
      _registerInstanceForRenderId(JJ, cJ) {
        const ZJ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ZJ.visibleInstances || (ZJ.visibleInstances = {
          defaultRenderId: cJ,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ZJ.visibleInstances[cJ] || (void 0 === ZJ.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ZJ.visibleInstances[ZJ.previousRenderId], ZJ.previousRenderId = cJ, ZJ.visibleInstances[cJ] = new Array), ZJ.visibleInstances[cJ].push(JJ), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.pn || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rM().isLocked) return this;
        JJ = "object" === typeof cJ ? cJ : {
          applySkeleton: cJ,
          applyMorph: ZJ
        };
        const FJ = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(JJ, null, IJ.n.PositionKind), FJ), this
      }
      _createGlobalSubMesh(JJ) {
        const cJ = this.getTotalVertices();
        if (!cJ || !this.QXJ()) return null;
        if (this.aE && this.aE.length > 0) {
          const ZJ = this.QXJ();
          if (!ZJ) return null;
          const FJ = ZJ.length;
          let UJ = !1;
          if (JJ) UJ = !0;
          else
            for (const JJ of this.aE) {
              if (JJ.indexStart + JJ.indexCount > FJ) {
                UJ = !0;
                break
              }
              if (JJ.verticesStart + JJ.verticesCount > cJ) {
                UJ = !0;
                break
              }
            }
          if (!UJ) return this.aE[0]
        }
        return this.releaseSubMeshes(), new WJ.e(0, 0, cJ, 0, this.getTotalIndices() || (this.isUnIndexed ? cJ : 0), this)
      }
      subdivide(JJ) {
        if (JJ < 1) return;
        const cJ = this.getTotalIndices();
        let ZJ = cJ / JJ | 0,
          FJ = 0;
        for (; ZJ % 3 !== 0;) ZJ++;
        this.releaseSubMeshes();
        for (let UJ = 0; UJ < JJ && !(FJ >= cJ); UJ++) WJ.e.CreateFromIndices(0, FJ, FJ + ZJ >= cJ ? cJ - FJ : ZJ, this, void 0, !1), FJ += ZJ;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(JJ, cJ, ZJ, FJ);
        else {
          const FJ = new MJ.e;
          FJ.set(cJ, JJ);
          const UJ = this.Qy();
          new bJ.d(bJ.d.RandomId(), UJ, FJ, ZJ, this)
        }
        return this
      }
      removeVerticesData(JJ) {
        this._geometry && this._geometry.removeVerticesData(JJ)
      }
      markVerticesDataAsUpdatable(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZJ = this.getVertexBuffer(JJ);
        ZJ && ZJ.isUpdatable() !== cJ && this.setVerticesData(JJ, this.getVerticesData(JJ), cJ)
      }
      setVerticesBuffer(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = bJ.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(JJ, ZJ, cJ), this
      }
      updateVerticesData(JJ, cJ, ZJ, FJ) {
        return this._geometry ? (FJ ? (this.makeGeometryUnique(), this.updateVerticesData(JJ, cJ, ZJ, !1)) : this._geometry.updateVerticesData(JJ, cJ, ZJ), this) : this
      }
      updateMeshPositions(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZJ = this.getVerticesData(IJ.n.PositionKind);
        if (!ZJ) return this;
        if (JJ(ZJ), this.updateVerticesData(IJ.n.PositionKind, ZJ, !1, !1), cJ) {
          const JJ = this.QXJ(),
            cJ = this.getVerticesData(IJ.n.NormalKind);
          if (!cJ) return this;
          MJ.e.ComputeNormals(ZJ, JJ, cJ), this.updateVerticesData(IJ.n.NormalKind, cJ, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const JJ = this._geometry,
          cJ = this._geometry.copy(bJ.d.RandomId());
        return JJ.releaseForMesh(this, !0), cJ.applyToMesh(this), this
      }
      setIndexBuffer(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          UJ = this._geometry;
        UJ || (UJ = new bJ.d(bJ.d.RandomId(), this.Qy(), void 0, void 0, this)), UJ.setIndexBuffer(JJ, cJ, ZJ, FJ)
      }
      setIndices(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(JJ, cJ, ZJ, FJ);
        else {
          const FJ = new MJ.e;
          FJ.indices = JJ;
          const UJ = this.Qy();
          new bJ.d(bJ.d.RandomId(), UJ, FJ, ZJ, this, cJ)
        }
        return this
      }
      updateIndices(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(JJ, cJ, ZJ), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(JJ, cJ, ZJ) {
        let FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const UJ = this.Qy().gn();
        let eJ;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ZJ) === gJ.c.WireFrameFillMode) eJ = JJ._getLinesIndexBuffer(this.QXJ(), UJ);
          else eJ = null;
        else switch (this._getRenderingFillMode(ZJ)) {
          case gJ.c.PointFillMode:
            eJ = null;
            break;
          case gJ.c.WireFrameFillMode:
            eJ = JJ._getLinesIndexBuffer(this.QXJ(), UJ);
            break;
          default:
          case gJ.c.TriangleFillMode:
            eJ = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(cJ, eJ, FJ)
      }
      _bindDirect(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(JJ), ZJ && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const JJ = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const cJ in JJ) this._userInstancedBuffersStorage.vertexBuffers[cJ] = JJ[cJ]
          }
          this._geometry._bind(JJ, cJ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(JJ, cJ);
        return this
      }
      _draw(JJ, cJ, ZJ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const FJ = this.Qy().gn(),
          UJ = FJ._currentMaterialContext,
          eJ = UJ && UJ.useVertexPulling;
        return this._unIndexed && cJ !== gJ.c.WireFrameFillMode || cJ == gJ.c.PointFillMode ? FJ.drawArraysType(cJ, JJ.verticesStart, JJ.verticesCount, this.forcedInstanceCount || ZJ) : cJ == gJ.c.WireFrameFillMode ? FJ.drawElementsType(cJ, 0, JJ._linesIndexCount, this.forcedInstanceCount || ZJ) : eJ ? FJ.drawArraysType(cJ, JJ.indexStart, JJ.indexCount, this.forcedInstanceCount || ZJ) : FJ.drawElementsType(cJ, JJ.indexStart, JJ.indexCount, this.forcedInstanceCount || ZJ), this
      }
      registerBeforeRender(JJ) {
        return this.onBeforeRenderObservable.add(JJ), this
      }
      unregisterBeforeRender(JJ) {
        return this.onBeforeRenderObservable.removeCallback(JJ), this
      }
      registerAfterRender(JJ) {
        return this.onAfterRenderObservable.add(JJ), this
      }
      unregisterAfterRender(JJ) {
        return this.onAfterRenderObservable.removeCallback(JJ), this
      }
      _getInstancesRenderList(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (cJ) return ZJ.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[JJ] = !1, ZJ.batchCacheReplacementModeInFrozenMode.renderSelf[JJ] = !0, ZJ.batchCacheReplacementModeInFrozenMode;
          if (ZJ.previousBatch) return ZJ.previousBatch
        }
        const FJ = this.Qy(),
          UJ = FJ._isInIntermediateRendering(),
          eJ = UJ ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          XJ = ZJ.batchCache;
        if (XJ.mustReturn = !1, XJ.renderSelf[JJ] = cJ || !eJ && this.isEnabled() && this.isVisible, XJ.visibleInstances[JJ] = null, ZJ.visibleInstances && !cJ) {
          const cJ = ZJ.visibleInstances,
            eJ = FJ.getRenderId(),
            AJ = UJ ? cJ.intermediateDefaultRenderId : cJ.defaultRenderId;
          XJ.visibleInstances[JJ] = cJ[eJ], !XJ.visibleInstances[JJ] && AJ && (XJ.visibleInstances[JJ] = cJ[AJ])
        }
        return XJ.hardwareInstancedRendering[JJ] = !cJ && this._instanceDataStorage.hardwareInstancedRendering && null !== XJ.visibleInstances[JJ] && void 0 !== XJ.visibleInstances[JJ], ZJ.previousBatch = XJ, XJ
      }
      _updateInstancedBuffers(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = cJ.visibleInstances[JJ._id],
          AJ = XJ ? XJ.length : 0,
          qJ = cJ.parent,
          jJ = this._instanceDataStorage;
        let YJ = qJ.instancesBuffer,
          hJ = qJ.instancesPreviousBuffer,
          DJ = 0,
          sJ = 0;
        const nJ = cJ.renderSelf[JJ._id],
          GJ = this._scene.floatingOriginOffset,
          fJ = !YJ || ZJ !== qJ.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !qJ.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || jJ.isFrozen && !fJ) sJ = (nJ ? 1 : 0) + AJ;
        else {
          const cJ = this.getWorldMatrix();
          if (nJ) {
            this._scene.needsPreviousWorldMatrices && (jJ.masterMeshPreviousWorldMatrix ? (jJ.masterMeshPreviousWorldMatrix.copyToArray(qJ.instancesPreviousData, DJ), jJ.masterMeshPreviousWorldMatrix.rZJ(cJ)) : (jJ.masterMeshPreviousWorldMatrix = cJ.clone(), jJ.masterMeshPreviousWorldMatrix.copyToArray(qJ.instancesPreviousData, DJ))), cJ.copyToArray(qJ.instancesData, DJ);
            const JJ = cJ.JFJ();
            qJ.instancesData[DJ + 12] = JJ[12] - GJ.x, qJ.instancesData[DJ + 13] = JJ[13] - GJ.y, qJ.instancesData[DJ + 14] = JJ[14] - GJ.z, DJ += 16, sJ++
          }
          if (XJ) {
            if (tJ.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && JJ.dn()?.needAlphaBlendingForMesh(JJ.getRenderingMesh())) {
              const JJ = this._scene.activeCamera.globalPosition;
              for (let cJ = 0; cJ < XJ.length; cJ++) {
                const ZJ = XJ[cJ];
                ZJ._distanceToCamera = KJ.j.Distance(ZJ.rM().QFJ.centerWorld, JJ)
              }
              XJ.sort(((JJ, cJ) => JJ._distanceToCamera > cJ._distanceToCamera ? -1 : JJ._distanceToCamera < cJ._distanceToCamera ? 1 : 0))
            }
            for (let JJ = 0; JJ < XJ.length; JJ++) {
              const cJ = XJ[JJ],
                ZJ = cJ.getWorldMatrix();
              ZJ.copyToArray(qJ.instancesData, DJ), this._scene.needsPreviousWorldMatrices && (cJ._previousWorldMatrix ? (cJ._previousWorldMatrix.copyToArray(qJ.instancesPreviousData, DJ), cJ._previousWorldMatrix.rZJ(ZJ)) : (cJ._previousWorldMatrix = ZJ.clone(), cJ._previousWorldMatrix.copyToArray(qJ.instancesPreviousData, DJ)));
              const FJ = ZJ.JFJ();
              qJ.instancesData[DJ + 12] = FJ[12] - GJ.x, qJ.instancesData[DJ + 13] = FJ[13] - GJ.y, qJ.instancesData[DJ + 14] = FJ[14] - GJ.z, DJ += 16, sJ++
            }
          }
        }
        if (fJ) {
          let JJ;
          if (YJ && YJ.dispose(), hJ && hJ.dispose(), YJ = new IJ.d(FJ, qJ.instancesData, !0, 16, !1, !0), qJ.instancesBuffer = YJ, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.gn().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) JJ = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const cJ = this._instanceDataStorage.engine.currentRenderPassId;
            JJ = this._userInstancedBuffersStorage.renderPasses[cJ], JJ || (this._userInstancedBuffersStorage.renderPasses[cJ] = JJ = {})
          }
          JJ.world0 = YJ.createVertexBuffer("world0", 0, 4), JJ.world1 = YJ.createVertexBuffer("world1", 4, 4), JJ.world2 = YJ.createVertexBuffer("world2", 8, 4), JJ.world3 = YJ.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (hJ = new IJ.d(FJ, qJ.instancesPreviousData, !0, 16, !1, !0), qJ.instancesPreviousBuffer = hJ, JJ.previousWorld0 = hJ.createVertexBuffer("previousWorld0", 0, 4), JJ.previousWorld1 = hJ.createVertexBuffer("previousWorld1", 4, 4), JJ.previousWorld2 = hJ.createVertexBuffer("previousWorld2", 8, 4), JJ.previousWorld3 = hJ.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (YJ.updateDirectly(qJ.instancesData, 0, sJ), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || hJ.updateDirectly(qJ.instancesPreviousData, 0, sJ));
        this._processInstancedBuffers(XJ, nJ), eJ && void 0 !== UJ && (this.Qy()._activeIndices.addCount(JJ.indexCount * sJ, !1), FJ._currentDrawContext && (FJ._currentDrawContext.useInstancing = !0), this._bind(JJ, eJ, UJ), this._draw(JJ, UJ, sJ)), !this._scene.needsPreviousWorldMatrices || fJ || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || hJ.updateDirectly(qJ.instancesData, 0, sJ)
      }
      _renderWithInstances(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = ZJ.visibleInstances[JJ._id],
          XJ = eJ ? eJ.length : 0,
          AJ = ZJ.parent,
          qJ = AJ.instancesBufferSize,
          jJ = 16 * (XJ + 1) * 4;
        for (; AJ.instancesBufferSize < jJ;) AJ.instancesBufferSize *= 2;
        return AJ.instancesData && qJ == AJ.instancesBufferSize || (AJ.instancesData = new Float32Array(AJ.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !AJ.instancesPreviousData || qJ != AJ.instancesBufferSize) && (AJ.instancesPreviousData = new Float32Array(AJ.instancesBufferSize / 4)), this._updateInstancedBuffers(JJ, ZJ, qJ, UJ, cJ, FJ), UJ.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(JJ, cJ, ZJ, FJ) {
        const UJ = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Qy()._activeIndices.addCount(JJ.indexCount * UJ, !1), FJ._currentDrawContext && (FJ._currentDrawContext.useInstancing = !0), this._bind(JJ, ZJ, cJ), this._draw(JJ, cJ, UJ), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, UJ) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), FJ.unbindInstanceAttributes()
      }
      _processInstancedBuffers(JJ, cJ) {}
      _processRendering(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = this.Qy(),
          jJ = qJ.gn();
        if (FJ = this._getRenderingFillMode(FJ), eJ && cJ.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(cJ, FJ, ZJ, jJ), this;
        if (eJ) this._renderWithInstances(cJ, FJ, UJ, ZJ, jJ);
        else {
          jJ._currentDrawContext && (jJ._currentDrawContext.useInstancing = !1);
          let ZJ = 0;
          UJ.renderSelf[cJ._id] && (XJ && XJ(!1, JJ.getWorldMatrix(), AJ), ZJ++, this._draw(cJ, FJ, this._instanceDataStorage.overridenInstanceCount));
          const eJ = UJ.visibleInstances[cJ._id];
          if (eJ) {
            const JJ = eJ.length;
            ZJ += JJ;
            for (let ZJ = 0; ZJ < JJ; ZJ++) {
              const JJ = eJ[ZJ].getWorldMatrix();
              XJ && XJ(!0, JJ, AJ), this._draw(cJ, FJ)
            }
          }
          qJ._activeIndices.addCount(cJ.indexCount * ZJ, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        JJ?.instancesBuffer && (cJ && JJ.instancesBuffer.dispose(), JJ.instancesBuffer = null), JJ?.instancesPreviousBuffer && (cJ && JJ.instancesPreviousBuffer.dispose(), JJ.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cJ in this._instanceDataStorage.renderPasses) {
          const ZJ = this._instanceDataStorage.renderPasses[cJ];
          this._disposeInstanceDataStorageRenderPass(ZJ, JJ)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, JJ), this._userInstancedBuffersStorage) {
          for (const cJ in this._userInstancedBuffersStorage.vertexBuffers) {
            const ZJ = this._userInstancedBuffersStorage.vertexBuffers[cJ];
            ZJ && (JJ && ZJ.dispose(), this._userInstancedBuffersStorage.vertexBuffers[cJ] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(JJ)
      }
      _releaseRenderPassId(JJ) {
        const cJ = this._instanceDataStorage.renderPasses[JJ];
        if (cJ && (this._disposeInstanceDataStorageRenderPass(cJ, !0), delete this._instanceDataStorage.renderPasses[JJ]), this._userInstancedBuffersStorage?.renderPasses) {
          const cJ = this._userInstancedBuffersStorage.renderPasses[JJ];
          if (cJ)
            for (const JJ in cJ) cJ[JJ]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[JJ]
        }
        const ZJ = this._userInstancedBuffersStorage?.interleavedBuffers;
        ZJ?.[JJ] && (ZJ[JJ].buffer.dispose(), delete ZJ[JJ])
      }
      _freeze() {
        if (this.aE) {
          for (let JJ = 0; JJ < this.aE.length; JJ++) this._getInstancesRenderList(JJ);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const JJ in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[JJ].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const eJ = this._scene.gn(),
          XJ = eJ.currentRenderPassId;
        if (void 0 !== JJ && (eJ.currentRenderPassId = JJ), FJ)(!UJ || UJ && FJ.isInFrustum(this._scene._frustumPlanes)) && this.render(FJ, !!cJ, ZJ);
        else
          for (let AJ = 0; AJ < this.aE.length; AJ++) {
            const JJ = this.aE[AJ];
            (!UJ || UJ && JJ.isInFrustum(this._scene._frustumPlanes)) && this.render(JJ, !!cJ, ZJ)
          }
        return void 0 !== JJ && (eJ.currentRenderPassId = XJ), this
      }
      directRender() {
        if (!this.aE) return this;
        for (const JJ of this.aE) this.render(JJ, !1);
        return this
      }
      render(JJ, cJ, ZJ) {
        const FJ = this.Qy(),
          UJ = FJ.gn();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const eJ = FJ.activeCameras?.length ?? 0,
          XJ = eJ > 1 && FJ.activeCamera === FJ.activeCameras[0] || eJ <= 1,
          AJ = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== UJ.currentRenderPassId;
        if (XJ && this._checkOcclusionQuery(AJ) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const qJ = this._getInstancesRenderList(JJ._id, !!ZJ);
        if (qJ.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let jJ = 0,
          YJ = null;
        this.ignoreCameraMaxZ && FJ.activeCamera && !FJ._isInIntermediateRendering() && (jJ = FJ.activeCamera.maxZ, YJ = FJ.activeCamera, FJ.activeCamera.maxZ = 0, FJ.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const hJ = JJ.getRenderingMesh(),
          DJ = qJ.hardwareInstancedRendering[JJ._id] || hJ.hasThinInstances || !!this._userInstancedBuffersStorage && !JJ.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          sJ = this._instanceDataStorage,
          nJ = JJ.dn();
        if (!nJ) return YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), this;
        if (sJ.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === nJ) {
          if (nJ._storeEffectOnSubMeshes && !JJ._drawWrapper?._wasPreviouslyReady || !nJ._storeEffectOnSubMeshes && !nJ._getDrawWrapper()._wasPreviouslyReady) return YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), this
        } else {
          if (nJ._storeEffectOnSubMeshes) {
            if (!nJ.isReadyForSubMesh(this, JJ, DJ)) return YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), this
          } else if (!nJ.isReady(this, DJ)) return YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = nJ
        }
        if (cJ) {
          const JJ = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === JJ.alphaModes.length) UJ.setAlphaMode(JJ.alphaMode);
          else
            for (let cJ = 0; cJ < JJ.alphaModes.length; cJ++) {
              const ZJ = JJ.alphaModes[cJ];
              UJ.setAlphaMode(void 0 !== ZJ ? ZJ : 2, !1, cJ)
            }
        }
        let GJ;
        GJ = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? JJ._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const fJ = GJ?.effect ?? null;
        for (let VJ = 0, KJ = FJ._beforeRenderingMeshStage; VJ < KJ.length; VJ++) {
          KJ[VJ].action(this, JJ, qJ, fJ)
        }
        if (!GJ || !fJ) return YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), this;
        const xJ = ZJ || this;
        let rJ;
        if (!sJ.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const JJ = xJ._getWorldMatrixDeterminant();
          rJ = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), JJ < 0 && (rJ = rJ === gJ.c.ClockWiseSideOrientation ? gJ.c.CounterClockWiseSideOrientation : gJ.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = rJ
        }
        const vJ = this._internalMeshDataInfo._effectiveMaterial._preBind(GJ, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && UJ.setDepthWrite(!0);
        const mJ = this._internalMeshDataInfo._effectiveMaterial,
          QJ = mJ.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), DJ || this._bind(JJ, fJ, QJ, !1);
        const EJ = xJ.getWorldMatrix();
        mJ._storeEffectOnSubMeshes ? mJ.bindForSubMesh(EJ, this, JJ) : mJ.bind(EJ, this);
        try {
          HJ.b._BindAttachmentsForEffect(UJ, fJ) && (!mJ.backFaceCulling && mJ.separateCullingPass && (UJ.setState(!0, mJ.zOffset, !1, !vJ, mJ.cullBackFaces, mJ.stencil, mJ.zOffsetUnits), this._processRendering(this, JJ, fJ, QJ, qJ, DJ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), UJ.setState(!0, mJ.zOffset, !1, vJ, mJ.cullBackFaces, mJ.stencil, mJ.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(JJ)), this._processRendering(this, JJ, fJ, QJ, qJ, DJ, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          HJ.b._RestoreAttachments(UJ)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let VJ = 0, KJ = FJ._afterRenderingMeshStage; VJ < KJ.length; VJ++) {
          KJ[VJ].action(this, JJ, qJ, fJ)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), YJ && (YJ.maxZ = jJ, FJ.updateTransformMatrix(!0)), 2 !== FJ.performancePriority || sJ.isFrozen || this._freeze(), this
      }
      _renderRunFollower(JJ, cJ) {
        const ZJ = this._scene,
          FJ = ZJ._engine;
        if (FJ.isWebGPU || JJ._mesh !== this || 0 !== this.instances.length || this.render !== tJ.prototype.render) return !1;
        const UJ = JJ.dn();
        if (!UJ || UJ !== ZJ._cachedMaterial || void 0 === UJ._canBindRunFollower) return !1;
        const eJ = JJ._drawWrapper,
          XJ = eJ?.effect;
        if (!XJ || XJ !== ZJ._cachedEffect || this.visibility !== ZJ._cachedVisibility || eJ._forceRebindOnNextCall) return !1;
        const AJ = this.hasThinInstances;
        if (!AJ && this._userInstancedBuffersStorage) return !1;
        if (!eJ._wasPreviouslyReady || eJ._wasPreviouslyUsingInstances !== AJ) return !1;
        const qJ = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ZJ._isInIntermediateRendering() || 0 !== ZJ._beforeRenderingMeshStage.length || 0 !== ZJ._afterRenderingMeshStage.length || qJ._onBeforeRenderObservable?.hasObservers() || qJ._onBeforeBindObservable?.hasObservers() || qJ._onAfterRenderObservable?.hasObservers()) return !1;
        const jJ = this.occlusionType;
        if (void 0 !== jJ && jJ !== wJ.c.OCCLUSION_TYPE_NONE || !UJ._canBindRunFollower(ZJ, FJ, this, JJ, XJ)) return !1;
        const YJ = this._internalAbstractMeshDataInfo,
          hJ = YJ._isActiveIntermediate;
        hJ ? YJ._isActiveIntermediate = !1 : YJ._isActive = !1;
        const DJ = ZJ.activeCameras?.length ?? 0;
        (DJ > 1 && ZJ.activeCamera === ZJ.activeCameras[0] || DJ <= 1) && this._checkOcclusionQuery(!1);
        const sJ = this._getInstancesRenderList(JJ._id);
        if (sJ.mustReturn) return !0;
        if (!AJ && !sJ.renderSelf[JJ._id]) return hJ ? YJ._isActiveIntermediate = !0 : YJ._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (qJ._effectiveMaterial = UJ, cJ)
          if (1 === UJ.alphaModes.length) FJ.setAlphaMode(UJ.alphaMode);
          else
            for (let GJ = 0; GJ < UJ.alphaModes.length; GJ++) {
              const JJ = UJ.alphaModes[GJ];
              FJ.setAlphaMode(void 0 !== JJ ? JJ : 2, !1, GJ)
            }
        if (UJ.backFaceCulling || null !== UJ.sideOrientation || UJ._twoSidedLighting) {
          const JJ = this._getWorldMatrixDeterminant();
          let cJ = UJ._getEffectiveOrientation(this);
          JJ < 0 && (cJ = cJ === gJ.c.ClockWiseSideOrientation ? gJ.c.CounterClockWiseSideOrientation : gJ.c.ClockWiseSideOrientation), qJ._effectiveSideOrientation = cJ
        }
        UJ._preBind(eJ, qJ._effectiveSideOrientation), UJ.forceDepthWrite && FJ.setDepthWrite(!0);
        const nJ = UJ.fillMode;
        return AJ || this._bind(JJ, XJ, nJ, !1), UJ._bindRunFollower(this.getWorldMatrix(), this, JJ, XJ), this._processRendering(this, JJ, XJ, nJ, sJ, AJ, this._onBeforeDraw, UJ), UJ.unbind(), 2 === ZJ.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(IJ.n.MatricesWeightsKind) && (this.isVerticesDataPresent(IJ.n.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const JJ = this.getVerticesData(IJ.n.MatricesWeightsKind),
          cJ = JJ.length;
        for (let ZJ = 0; ZJ < cJ; ZJ += 4) {
          const cJ = JJ[ZJ] + JJ[ZJ + 1] + JJ[ZJ + 2] + JJ[ZJ + 3];
          if (0 === cJ) JJ[ZJ] = 1;
          else {
            const FJ = 1 / cJ;
            JJ[ZJ] *= FJ, JJ[ZJ + 1] *= FJ, JJ[ZJ + 2] *= FJ, JJ[ZJ + 3] *= FJ
          }
        }
        this.setVerticesData(IJ.n.MatricesWeightsKind, JJ)
      }
      _normalizeSkinWeightsAndExtra() {
        const JJ = this.getVerticesData(IJ.n.MatricesWeightsExtraKind),
          cJ = this.getVerticesData(IJ.n.MatricesWeightsKind),
          ZJ = cJ.length;
        for (let FJ = 0; FJ < ZJ; FJ += 4) {
          let ZJ = cJ[FJ] + cJ[FJ + 1] + cJ[FJ + 2] + cJ[FJ + 3];
          if (ZJ += JJ[FJ] + JJ[FJ + 1] + JJ[FJ + 2] + JJ[FJ + 3], 0 === ZJ) cJ[FJ] = 1;
          else {
            const UJ = 1 / ZJ;
            cJ[FJ] *= UJ, cJ[FJ + 1] *= UJ, cJ[FJ + 2] *= UJ, cJ[FJ + 3] *= UJ, JJ[FJ] *= UJ, JJ[FJ + 1] *= UJ, JJ[FJ + 2] *= UJ, JJ[FJ + 3] *= UJ
          }
        }
        this.setVerticesData(IJ.n.MatricesWeightsKind, cJ), this.setVerticesData(IJ.n.MatricesWeightsKind, JJ)
      }
      validateSkinning() {
        const JJ = this.getVerticesData(IJ.n.MatricesWeightsExtraKind),
          cJ = this.getVerticesData(IJ.n.MatricesWeightsKind);
        if (null === cJ || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          ls: "not skinned"
        };
        const ZJ = cJ.length;
        let FJ = 0,
          UJ = 0,
          eJ = 0,
          XJ = 0;
        const AJ = null === JJ ? 4 : 8,
          qJ = [];
        for (let sJ = 0; sJ <= AJ; sJ++) qJ[sJ] = 0;
        for (let sJ = 0; sJ < ZJ; sJ += 4) {
          let ZJ = cJ[sJ],
            jJ = ZJ,
            YJ = 0 === jJ ? 0 : 1;
          for (let UJ = 1; UJ < AJ; UJ++) {
            const eJ = UJ < 4 ? cJ[sJ + UJ] : JJ[sJ + UJ - 4];
            eJ > ZJ && FJ++, 0 !== eJ && YJ++, jJ += eJ, ZJ = eJ
          }
          if (qJ[YJ]++, YJ > eJ && (eJ = YJ), 0 === jJ) UJ++;
          else {
            const ZJ = 1 / jJ;
            let FJ = 0;
            for (let UJ = 0; UJ < AJ; UJ++) FJ += UJ < 4 ? Math.abs(cJ[sJ + UJ] - cJ[sJ + UJ] * ZJ) : Math.abs(JJ[sJ + UJ - 4] - JJ[sJ + UJ - 4] * ZJ);
            FJ > .001 && XJ++
          }
        }
        const jJ = this.skeleton.bones.length,
          YJ = this.getVerticesData(IJ.n.MatricesIndicesKind),
          hJ = this.getVerticesData(IJ.n.MatricesIndicesExtraKind);
        let DJ = 0;
        for (let sJ = 0; sJ < ZJ; sJ += 4)
          for (let JJ = 0; JJ < AJ; JJ++) {
            const cJ = JJ < 4 ? YJ[sJ + JJ] : hJ[sJ + JJ - 4];
            (cJ >= jJ || cJ < 0) && DJ++
          }
        return {
          skinned: !0,
          valid: 0 === UJ && 0 === XJ && 0 === DJ,
          ls: "Number of Weights = " + ZJ / 4 + "\nMaximum influences = " + eJ + "\nMissing Weights = " + UJ + "\nNot Sorted = " + FJ + "\nNot Normalized = " + XJ + "\nWeightCounts = [" + qJ + "]\nNumber of bones = " + jJ + "\nBad Bone Indices = " + DJ
        }
      }
      _checkDelayState() {
        const JJ = this.Qy();
        return this._geometry ? this._geometry.load(JJ) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(JJ)), this
      }
      _queueLoad(JJ) {
        JJ.addPendingData(this);
        const cJ = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ZJ = await JJ._loadDelayedFileAsync(this.delayLoadingFile, cJ, !0);
            ZJ instanceof ArrayBuffer ? this._delayLoadingFunction(ZJ, this) : this._delayLoadingFunction(JSON.parse(ZJ), this);
            for (const JJ of this.instances) JJ.refreshBoundingInfo(), JJ._syncSubMeshes();
            this.delayLoadState = 1, JJ.removePendingData(this)
          } catch (ZJ) {
            JJ.removePendingData(this), JJ.YZJ || dJ.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZJ}`)
          }
        })(), this
      }
      isInFrustum(JJ) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(JJ) && (this._checkDelayState(), !0))
      }
      setMaterialById(JJ) {
        const cJ = this.Qy().materials;
        let ZJ;
        for (ZJ = cJ.length - 1; ZJ > -1; ZJ--)
          if (cJ[ZJ].id === JJ) return this.material = cJ[ZJ], this;
        const FJ = this.Qy().multiMaterials;
        for (ZJ = FJ.length - 1; ZJ > -1; ZJ--)
          if (FJ[ZJ].id === JJ) return this.material = FJ[ZJ], this;
        return this
      }
      getAnimatables() {
        const JJ = [];
        return this.material && JJ.push(this.material), this.skeleton && JJ.push(this.skeleton), JJ
      }
      bakeTransformIntoVertices(JJ) {
        if (!this.isVerticesDataPresent(IJ.n.PositionKind)) return this;
        const cJ = this.aE.splice(0);
        this._resetPointsArrayCache();
        let ZJ = this.getVerticesData(IJ.n.PositionKind);
        const FJ = KJ.j.Zero();
        let UJ;
        for (UJ = 0; UJ < ZJ.length; UJ += 3) KJ.j.TransformCoordinatesFromFloatsToRef(ZJ[UJ], ZJ[UJ + 1], ZJ[UJ + 2], JJ, FJ).toArray(ZJ, UJ);
        if (this.setVerticesData(IJ.n.PositionKind, ZJ, this.getVertexBuffer(IJ.n.PositionKind).isUpdatable()), this.isVerticesDataPresent(IJ.n.NormalKind)) {
          for (ZJ = this.getVerticesData(IJ.n.NormalKind), UJ = 0; UJ < ZJ.length; UJ += 3) KJ.j.TransformNormalFromFloatsToRef(ZJ[UJ], ZJ[UJ + 1], ZJ[UJ + 2], JJ, FJ).normalize().toArray(ZJ, UJ);
          this.setVerticesData(IJ.n.NormalKind, ZJ, this.getVertexBuffer(IJ.n.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(IJ.n.TangentKind)) {
          for (ZJ = this.getVerticesData(IJ.n.TangentKind), UJ = 0; UJ < ZJ.length; UJ += 4) KJ.j.TransformNormalFromFloatsToRef(ZJ[UJ], ZJ[UJ + 1], ZJ[UJ + 2], JJ, FJ).normalize().toArray(ZJ, UJ);
          this.setVerticesData(IJ.n.TangentKind, ZJ, this.getVertexBuffer(IJ.n.TangentKind).isUpdatable())
        }
        return JJ.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.aE = cJ, this
      }
      bakeCurrentTransformIntoVertices() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(JJ), this
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (cJ && void 0 === cJ._addToSceneRootNodes) {
          const ZJ = cJ;
          return BJ.source = this, BJ.doNotCloneChildren = ZJ.doNotCloneChildren, BJ.clonePhysicsImpostor = ZJ.clonePhysicsImpostor, BJ.cloneThinInstances = ZJ.cloneThinInstances, new tJ(JJ, this.Qy(), BJ)
        }
        return new tJ(JJ, this.Qy(), cJ, this, ZJ, FJ)
      }
      dispose(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ZJ = this._internalMeshDataInfo;
        if (ZJ._onBeforeDrawObservable && ZJ._onBeforeDrawObservable.clear(), ZJ._onBeforeBindObservable && ZJ._onBeforeBindObservable.clear(), ZJ._onBeforeRenderObservable && ZJ._onBeforeRenderObservable.clear(), ZJ._onAfterRenderObservable && ZJ._onAfterRenderObservable.clear(), ZJ._onBetweenPassObservable && ZJ._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ZJ.meshMap)
            for (const JJ in ZJ.meshMap) {
              const cJ = ZJ.meshMap[JJ];
              cJ && (cJ._internalMeshDataInfo._source = null, ZJ.meshMap[JJ] = void 0)
            }
          ZJ._source && ZJ._source._internalMeshDataInfo.meshMap && (ZJ._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const JJ = this.Qy().meshes;
          for (const cJ of JJ) {
            const JJ = cJ;
            JJ._internalMeshDataInfo && JJ._internalMeshDataInfo._source && JJ._internalMeshDataInfo._source === this && (JJ._internalMeshDataInfo._source = null)
          }
        }
        ZJ._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(JJ, cJ)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          AJ = arguments.length > 7 ? arguments[7] : void 0;
        const qJ = this.Qy();
        return (0, vJ.n)(JJ, (JJ => {
          const AJ = JJ.width,
            qJ = JJ.height,
            jJ = this.gn().createCanvas(AJ, qJ).getContext("2d");
          jJ.drawImage(JJ, 0, 0);
          const YJ = jJ.getImageData(0, 0, AJ, qJ).data;
          this.applyDisplacementMapFromBuffer(YJ, AJ, qJ, cJ, ZJ, UJ, eJ, XJ), FJ && FJ(this)
        }), AJ || (() => {}), qJ.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        let AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(IJ.n.PositionKind) || !this.isVerticesDataPresent(IJ.n.NormalKind) || !this.isVerticesDataPresent(IJ.n.UVKind)) return dJ.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const qJ = this.getVerticesData(IJ.n.PositionKind, !0, !0),
          jJ = this.getVerticesData(IJ.n.NormalKind),
          YJ = this.getVerticesData(IJ.n.UVKind);
        let hJ = KJ.j.Zero();
        const DJ = KJ.j.Zero(),
          sJ = KJ.i.Zero();
        eJ = eJ || KJ.i.Zero(), XJ = XJ || new KJ.i(1, 1);
        for (let nJ = 0; nJ < qJ.length; nJ += 3) {
          KJ.j.FromArrayToRef(qJ, nJ, hJ), KJ.j.FromArrayToRef(jJ, nJ, DJ), KJ.i.FromArrayToRef(YJ, nJ / 3 * 2, sJ);
          const AJ = 4 * ((Math.abs(sJ.x * XJ.x + eJ.x % 1) * (cJ - 1) % cJ | 0) + (Math.abs(sJ.y * XJ.y + eJ.y % 1) * (ZJ - 1) % ZJ | 0) * cJ),
            GJ = .3 * (JJ[AJ] / 255) + .59 * (JJ[AJ + 1] / 255) + .11 * (JJ[AJ + 2] / 255);
          DJ.normalize(), DJ.scaleInPlace(FJ + (UJ - FJ) * GJ), hJ = hJ.add(DJ), hJ.toArray(qJ, nJ)
        }
        return MJ.e.ComputeNormals(qJ, this.QXJ(), jJ), AJ ? (this.setVerticesData(IJ.n.PositionKind, qJ), this.setVerticesData(IJ.n.NormalKind, jJ), this.setVerticesData(IJ.n.UVKind, YJ)) : (this.updateVerticesData(IJ.n.PositionKind, qJ), this.updateVerticesData(IJ.n.NormalKind, jJ)), this
      }
      _getFlattenedNormals(JJ, cJ) {
        const ZJ = new Float32Array(3 * JJ.length);
        let FJ = 0;
        const UJ = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let eJ = 0; eJ < JJ.length; eJ += 3) {
          const XJ = KJ.j.FromArray(cJ, 3 * JJ[eJ]),
            AJ = KJ.j.FromArray(cJ, 3 * JJ[eJ + 1]),
            qJ = KJ.j.FromArray(cJ, 3 * JJ[eJ + 2]),
            jJ = XJ.subtract(AJ),
            YJ = qJ.subtract(AJ),
            hJ = KJ.j.Normalize(KJ.j.Cross(jJ, YJ));
          UJ && hJ.scaleInPlace(-1);
          for (let JJ = 0; JJ < 3; JJ++) ZJ[FJ++] = hJ.x, ZJ[FJ++] = hJ.y, ZJ[FJ++] = hJ.z
        }
        return ZJ
      }
      _convertToUnIndexedMesh() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = this.getVerticesDataKinds().filter((JJ => !this.getVertexBuffer(JJ)?.getIsInstanced())),
          ZJ = this.QXJ(!1, !0),
          FJ = {},
          UJ = (JJ, cJ) => {
            const FJ = new Float32Array(ZJ.length * cJ);
            let UJ = 0;
            for (let eJ = 0; eJ < ZJ.length; eJ++)
              for (let XJ = 0; XJ < cJ; XJ++) FJ[UJ++] = JJ[ZJ[eJ] * cJ + XJ];
            return FJ
          },
          eJ = this.rM(),
          XJ = this.geometry ? this.aE.slice(0) : [];
        for (const AJ of cJ) FJ[AJ] = this.getVerticesData(AJ);
        for (const AJ of cJ) {
          const cJ = this.getVertexBuffer(AJ),
            eJ = cJ.getSize();
          if (JJ && AJ === IJ.n.NormalKind) {
            const JJ = this._getFlattenedNormals(ZJ, FJ[IJ.n.PositionKind]);
            this.setVerticesData(IJ.n.NormalKind, JJ, cJ.isUpdatable(), eJ)
          } else this.setVerticesData(AJ, UJ(FJ[AJ], eJ), cJ.isUpdatable(), eJ)
        }
        if (this.morphTargetManager) {
          for (let cJ = 0; cJ < this.morphTargetManager.numTargets; cJ++) {
            const FJ = this.morphTargetManager.getTarget(cJ),
              eJ = FJ.getPositions();
            FJ.VXJ(UJ(eJ, 3));
            const XJ = FJ.getNormals();
            XJ && FJ.setNormals(JJ ? this._getFlattenedNormals(ZJ, eJ) : UJ(XJ, 3));
            const AJ = FJ.getTangents();
            AJ && FJ.setTangents(UJ(AJ, 3));
            const qJ = FJ.getUVs();
            qJ && FJ.setUVs(UJ(qJ, 2));
            const jJ = FJ.getColors();
            jJ && FJ.setColors(UJ(jJ, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let AJ = 0; AJ < ZJ.length; AJ++) ZJ[AJ] = AJ;
        this.setIndices(ZJ), this._unIndexed = !0, this.releaseSubMeshes();
        for (const AJ of XJ) {
          const JJ = AJ.rM();
          WJ.e.AddToMesh(AJ.materialIndex, AJ.indexStart, AJ.indexCount, AJ.indexStart, AJ.indexCount, this).setBoundingInfo(JJ)
        }
        return this.setBoundingInfo(eJ), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = MJ.e.ExtractFromMesh(this);
        let ZJ;
        if (JJ && this.isVerticesDataPresent(IJ.n.NormalKind) && cJ.normals) {
          for (ZJ = 0; ZJ < cJ.normals.length; ZJ++) cJ.normals[ZJ] *= -1;
          this.setVerticesData(IJ.n.NormalKind, cJ.normals, this.isVertexBufferUpdatable(IJ.n.NormalKind))
        }
        if (cJ.indices) {
          let JJ;
          for (ZJ = 0; ZJ < cJ.indices.length; ZJ += 3) JJ = cJ.indices[ZJ + 1], cJ.indices[ZJ + 1] = cJ.indices[ZJ + 2], cJ.indices[ZJ + 2] = JJ;
          this.setIndices(cJ.indices, null, this.isVertexBufferUpdatable(IJ.n.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const cJ = MJ.e.ExtractFromMesh(this),
          ZJ = cJ.indices && !Array.isArray(cJ.indices) && Array.from ? Array.from(cJ.indices) : cJ.indices,
          FJ = cJ.positions && !Array.isArray(cJ.positions) && Array.from ? Array.from(cJ.positions) : cJ.positions,
          UJ = cJ.uvs && !Array.isArray(cJ.uvs) && Array.from ? Array.from(cJ.uvs) : cJ.uvs,
          eJ = cJ.normals && !Array.isArray(cJ.normals) && Array.from ? Array.from(cJ.normals) : cJ.normals;
        if (ZJ && FJ) {
          cJ.indices = ZJ, cJ.positions = FJ, UJ && (cJ.uvs = UJ), eJ && (cJ.normals = eJ);
          const XJ = JJ + 1,
            AJ = [];
          for (let JJ = 0; JJ < XJ + 1; JJ++) AJ[JJ] = [];
          let qJ, jJ;
          const YJ = new KJ.j(0, 0, 0),
            hJ = new KJ.j(0, 0, 0),
            DJ = new KJ.i(0, 0),
            sJ = [],
            nJ = [],
            GJ = [];
          let fJ, xJ, rJ, vJ = FJ.length;
          UJ && (xJ = UJ.length), eJ && (rJ = eJ.length);
          for (let JJ = 0; JJ < ZJ.length; JJ += 3) {
            nJ[0] = ZJ[JJ], nJ[1] = ZJ[JJ + 1], nJ[2] = ZJ[JJ + 2];
            for (let JJ = 0; JJ < 3; JJ++)
              if (qJ = nJ[JJ], jJ = nJ[(JJ + 1) % 3], void 0 === GJ[qJ] && void 0 === GJ[jJ] ? (GJ[qJ] = [], GJ[jJ] = []) : (void 0 === GJ[qJ] && (GJ[qJ] = []), void 0 === GJ[jJ] && (GJ[jJ] = [])), void 0 === GJ[qJ][jJ] && void 0 === GJ[jJ][qJ]) {
                GJ[qJ][jJ] = [], YJ.x = (FJ[3 * jJ] - FJ[3 * qJ]) / XJ, YJ.y = (FJ[3 * jJ + 1] - FJ[3 * qJ + 1]) / XJ, YJ.z = (FJ[3 * jJ + 2] - FJ[3 * qJ + 2]) / XJ, eJ && (hJ.x = (eJ[3 * jJ] - eJ[3 * qJ]) / XJ, hJ.y = (eJ[3 * jJ + 1] - eJ[3 * qJ + 1]) / XJ, hJ.z = (eJ[3 * jJ + 2] - eJ[3 * qJ + 2]) / XJ), UJ && (DJ.x = (UJ[2 * jJ] - UJ[2 * qJ]) / XJ, DJ.y = (UJ[2 * jJ + 1] - UJ[2 * qJ + 1]) / XJ), GJ[qJ][jJ].push(qJ);
                for (let JJ = 1; JJ < XJ; JJ++) GJ[qJ][jJ].push(FJ.length / 3), FJ[vJ++] = FJ[3 * qJ] + JJ * YJ.x, FJ[vJ++] = FJ[3 * qJ + 1] + JJ * YJ.y, FJ[vJ++] = FJ[3 * qJ + 2] + JJ * YJ.z, eJ && (eJ[rJ++] = eJ[3 * qJ] + JJ * hJ.x, eJ[rJ++] = eJ[3 * qJ + 1] + JJ * hJ.y, eJ[rJ++] = eJ[3 * qJ + 2] + JJ * hJ.z), UJ && (UJ[xJ++] = UJ[2 * qJ] + JJ * DJ.x, UJ[xJ++] = UJ[2 * qJ + 1] + JJ * DJ.y);
                GJ[qJ][jJ].push(jJ), GJ[jJ][qJ] = [], fJ = GJ[qJ][jJ].length;
                for (let JJ = 0; JJ < fJ; JJ++) GJ[jJ][qJ][JJ] = GJ[qJ][jJ][fJ - 1 - JJ]
              } AJ[0][0] = ZJ[JJ], AJ[1][0] = GJ[ZJ[JJ]][ZJ[JJ + 1]][1], AJ[1][1] = GJ[ZJ[JJ]][ZJ[JJ + 2]][1];
            for (let cJ = 2; cJ < XJ; cJ++) {
              AJ[cJ][0] = GJ[ZJ[JJ]][ZJ[JJ + 1]][cJ], AJ[cJ][cJ] = GJ[ZJ[JJ]][ZJ[JJ + 2]][cJ], YJ.x = (FJ[3 * AJ[cJ][cJ]] - FJ[3 * AJ[cJ][0]]) / cJ, YJ.y = (FJ[3 * AJ[cJ][cJ] + 1] - FJ[3 * AJ[cJ][0] + 1]) / cJ, YJ.z = (FJ[3 * AJ[cJ][cJ] + 2] - FJ[3 * AJ[cJ][0] + 2]) / cJ, eJ && (hJ.x = (eJ[3 * AJ[cJ][cJ]] - eJ[3 * AJ[cJ][0]]) / cJ, hJ.y = (eJ[3 * AJ[cJ][cJ] + 1] - eJ[3 * AJ[cJ][0] + 1]) / cJ, hJ.z = (eJ[3 * AJ[cJ][cJ] + 2] - eJ[3 * AJ[cJ][0] + 2]) / cJ), UJ && (DJ.x = (UJ[2 * AJ[cJ][cJ]] - UJ[2 * AJ[cJ][0]]) / cJ, DJ.y = (UJ[2 * AJ[cJ][cJ] + 1] - UJ[2 * AJ[cJ][0] + 1]) / cJ);
              for (let JJ = 1; JJ < cJ; JJ++) AJ[cJ][JJ] = FJ.length / 3, FJ[vJ++] = FJ[3 * AJ[cJ][0]] + JJ * YJ.x, FJ[vJ++] = FJ[3 * AJ[cJ][0] + 1] + JJ * YJ.y, FJ[vJ++] = FJ[3 * AJ[cJ][0] + 2] + JJ * YJ.z, eJ && (eJ[rJ++] = eJ[3 * AJ[cJ][0]] + JJ * hJ.x, eJ[rJ++] = eJ[3 * AJ[cJ][0] + 1] + JJ * hJ.y, eJ[rJ++] = eJ[3 * AJ[cJ][0] + 2] + JJ * hJ.z), UJ && (UJ[xJ++] = UJ[2 * AJ[cJ][0]] + JJ * DJ.x, UJ[xJ++] = UJ[2 * AJ[cJ][0] + 1] + JJ * DJ.y)
            }
            AJ[XJ] = GJ[ZJ[JJ + 1]][ZJ[JJ + 2]], sJ.push(AJ[0][0], AJ[1][0], AJ[1][1]);
            for (let JJ = 1; JJ < XJ; JJ++) {
              let cJ;
              for (cJ = 0; cJ < JJ; cJ++) sJ.push(AJ[JJ][cJ], AJ[JJ + 1][cJ], AJ[JJ + 1][cJ + 1]), sJ.push(AJ[JJ][cJ], AJ[JJ + 1][cJ + 1], AJ[JJ][cJ + 1]);
              sJ.push(AJ[JJ][cJ], AJ[JJ + 1][cJ], AJ[JJ + 1][cJ + 1])
            }
          }
          cJ.indices = sJ, cJ.applyToMesh(this, this.isVertexBufferUpdatable(IJ.n.PositionKind))
        } else dJ.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const JJ = MJ.e.ExtractFromMesh(this),
          cJ = JJ.uvs,
          ZJ = JJ.indices,
          FJ = JJ.positions,
          UJ = JJ.colors,
          eJ = JJ.matricesIndices,
          XJ = JJ.matricesWeights,
          AJ = JJ.matricesIndicesExtra,
          qJ = JJ.matricesWeightsExtra;
        if (void 0 === ZJ || void 0 === FJ || null === ZJ || null === FJ) dJ.c.Warn("VertexData contains empty entries");
        else {
          const jJ = [],
            YJ = [],
            hJ = [],
            DJ = [],
            sJ = [],
            nJ = [],
            GJ = [],
            fJ = [];
          let xJ, rJ = 0;
          const vJ = {};
          let mJ, QJ;
          for (let JJ = 0; JJ < ZJ.length; JJ += 3) {
            QJ = [ZJ[JJ], ZJ[JJ + 1], ZJ[JJ + 2]], xJ = [];
            for (let JJ = 0; JJ < 3; JJ++) {
              xJ[JJ] = "";
              for (let cJ = 0; cJ < 3; cJ++) Math.abs(FJ[3 * QJ[JJ] + cJ]) < 1e-8 && (FJ[3 * QJ[JJ] + cJ] = 0), xJ[JJ] += FJ[3 * QJ[JJ] + cJ] + "|"
            }
            if (xJ[0] != xJ[1] && xJ[0] != xJ[2] && xJ[1] != xJ[2])
              for (let JJ = 0; JJ < 3; JJ++) {
                if (mJ = vJ[xJ[JJ]], void 0 === mJ) {
                  vJ[xJ[JJ]] = rJ, mJ = rJ++;
                  for (let cJ = 0; cJ < 3; cJ++) jJ.push(FJ[3 * QJ[JJ] + cJ]);
                  if (null !== UJ && void 0 !== UJ)
                    for (let cJ = 0; cJ < 4; cJ++) DJ.push(UJ[4 * QJ[JJ] + cJ]);
                  if (null !== cJ && void 0 !== cJ)
                    for (let ZJ = 0; ZJ < 2; ZJ++) hJ.push(cJ[2 * QJ[JJ] + ZJ]);
                  if (null !== eJ && void 0 !== eJ)
                    for (let cJ = 0; cJ < 4; cJ++) sJ.push(eJ[4 * QJ[JJ] + cJ]);
                  if (null !== XJ && void 0 !== XJ)
                    for (let cJ = 0; cJ < 4; cJ++) nJ.push(XJ[4 * QJ[JJ] + cJ]);
                  if (null !== AJ && void 0 !== AJ)
                    for (let cJ = 0; cJ < 4; cJ++) GJ.push(AJ[4 * QJ[JJ] + cJ]);
                  if (null !== qJ && void 0 !== qJ)
                    for (let cJ = 0; cJ < 4; cJ++) fJ.push(qJ[4 * QJ[JJ] + cJ])
                }
                YJ.push(mJ)
              }
          }
          const EJ = [];
          MJ.e.ComputeNormals(jJ, YJ, EJ), JJ.positions = jJ, JJ.indices = YJ, JJ.normals = EJ, null !== cJ && void 0 !== cJ && (JJ.uvs = hJ), null !== UJ && void 0 !== UJ && (JJ.colors = DJ), null !== eJ && void 0 !== eJ && (JJ.matricesIndices = sJ), null !== XJ && void 0 !== XJ && (JJ.matricesWeights = nJ), null !== AJ && void 0 !== AJ && (JJ.matricesIndicesExtra = GJ), null !== XJ && void 0 !== XJ && (JJ.matricesWeightsExtra = fJ), JJ.applyToMesh(this, this.isVertexBufferUpdatable(IJ.n.PositionKind))
        }
      }
      static _instancedMeshFactory(JJ, cJ) {
        throw (0, NJ.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(JJ, cJ, ZJ) {
        throw (0, NJ.m)("PhysicsImpostor")
      }
      createInstance(JJ) {
        const cJ = tJ._instancedMeshFactory(JJ, this);
        return cJ.parent = this.parent, cJ
      }
      synchronizeInstances() {
        for (let JJ = 0; JJ < this.instances.length; JJ++) {
          this.instances[JJ]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(JJ) {
        const cJ = this.QXJ(),
          ZJ = this.getVerticesData(IJ.n.PositionKind);
        if (!ZJ || !cJ) return this;
        const FJ = [];
        for (let eJ = 0; eJ < ZJ.length; eJ += 3) FJ.push(KJ.j.FromArray(ZJ, eJ));
        const UJ = [];
        return rJ.e.SyncAsyncForLoop(FJ.length, 40, (JJ => {
          const cJ = FJ.length - 1 - JJ,
            ZJ = FJ[cJ];
          for (let eJ = 0; eJ < cJ; ++eJ) {
            const JJ = FJ[eJ];
            if (ZJ.equals(JJ)) {
              UJ[cJ] = eJ;
              break
            }
          }
        }), (() => {
          for (let JJ = 0; JJ < cJ.length; ++JJ) cJ[JJ] = UJ[cJ[JJ]] || cJ[JJ];
          const ZJ = this.aE.slice(0);
          this.setIndices(cJ), this.aE = ZJ, JJ && JJ(this)
        })), this
      }
      serialize() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        JJ.name = this.name, JJ.id = this.id, JJ.uniqueId = this.uniqueId, JJ.type = this.getClassName(), QJ.b && QJ.b.HasTags(this) && (JJ.tags = QJ.b.GetTags(this)), JJ.position = this.position.JFJ(), this.rotationQuaternion ? JJ.rotationQuaternion = this.rotationQuaternion.JFJ() : this.rotation && (JJ.rotation = this.rotation.JFJ()), JJ.GA = this.GA.JFJ(), this._postMultiplyPivotMatrix ? JJ.pivotMatrix = this.getPivotMatrix().JFJ() : JJ.localMatrix = this.getPivotMatrix().JFJ(), JJ.isEnabled = this.isEnabled(!1), JJ.isVisible = this.isVisible, JJ.infiniteDistance = this.infiniteDistance, JJ.pickable = this.aG, JJ.receiveShadows = this.receiveShadows, JJ.billboardMode = this.billboardMode, JJ.visibility = this.visibility, JJ.Hn = this.Hn, JJ.checkCollisions = this.checkCollisions, JJ.ellipsoid = this.ellipsoid.JFJ(), JJ.ellipsoidOffset = this.ellipsoidOffset.JFJ(), JJ.pn = this.pn, JJ.isBlocker = this.isBlocker, JJ.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (JJ.qS = !0), this.parent && this.parent._serializeAsParent(JJ), JJ.isUnIndexed = this.isUnIndexed;
        const cJ = this._geometry;
        if (cJ && this.aE) {
          JJ.geometryUniqueId = cJ.uniqueId, JJ.geometryId = cJ.id, JJ.aE = [];
          for (let cJ = 0; cJ < this.aE.length; cJ++) {
            const ZJ = this.aE[cJ];
            JJ.aE.push({
              materialIndex: ZJ.materialIndex,
              verticesStart: ZJ.verticesStart,
              verticesCount: ZJ.verticesCount,
              indexStart: ZJ.indexStart,
              indexCount: ZJ.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (JJ.materialUniqueId = this.material.uniqueId, JJ.materialId = this.material.id) : (this.material = null, JJ.materialUniqueId = this._scene.defaultMaterial.uniqueId, JJ.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (JJ.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (JJ.skeletonId = this.skeleton.id, JJ.skeletonUniqueId = this.skeleton.uniqueId, JJ.numBoneInfluencers = this.numBoneInfluencers), this.Qy()._getComponent(OJ.c.NAME_PHYSICSENGINE)) {
          const cJ = this.getPhysicsImpostor?.();
          cJ && (JJ.physicsMass = cJ.getParam("Oj"), JJ.physicsFriction = cJ.getParam("friction"), JJ.physicsRestitution = cJ.getParam("Oj"), JJ.physicsImpostor = cJ.type)
        }
        this.metadata && (JJ.metadata = this.metadata), 0 !== this.meshBlendingTag && (JJ.meshBlendingTag = this.meshBlendingTag), JJ.instances = [];
        for (let ZJ = 0; ZJ < this.instances.length; ZJ++) {
          const cJ = this.instances[ZJ];
          if (cJ.doNotSerialize) continue;
          const FJ = {
            name: cJ.name,
            id: cJ.id,
            isEnabled: cJ.isEnabled(!1),
            isVisible: cJ.isVisible,
            aG: cJ.aG,
            checkCollisions: cJ.checkCollisions,
            position: cJ.position.JFJ(),
            GA: cJ.GA.JFJ()
          };
          if (cJ.parent && cJ.parent._serializeAsParent(FJ), cJ.rotationQuaternion ? FJ.rotationQuaternion = cJ.rotationQuaternion.JFJ() : cJ.rotation && (FJ.rotation = cJ.rotation.JFJ()), this.Qy()._getComponent(OJ.c.NAME_PHYSICSENGINE)) {
            const JJ = cJ.getPhysicsImpostor?.();
            JJ && (FJ.physicsMass = JJ.getParam("Oj"), FJ.physicsFriction = JJ.getParam("friction"), FJ.physicsRestitution = JJ.getParam("Oj"), FJ.physicsImpostor = JJ.type)
          }
          cJ.metadata && (FJ.metadata = cJ.metadata), cJ.actionManager && (FJ.actions = cJ.actionManager.serialize(cJ.name)), JJ.instances.push(FJ), pJ.c.AppendSerializedAnimations(cJ, FJ), FJ.ws = cJ.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (JJ.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.fcJ
          }, this._userThinInstanceBuffersStorage)) {
          const cJ = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const JJ in this._userThinInstanceBuffersStorage.data) cJ.data[JJ] = Array.from(this._userThinInstanceBuffersStorage.data[JJ]), cJ.sizes[JJ] = this._userThinInstanceBuffersStorage.sizes[JJ], cJ.strides[JJ] = this._userThinInstanceBuffersStorage.strides[JJ];
          JJ.thinInstances.userThinInstance = cJ
        }
        return pJ.c.AppendSerializedAnimations(this, JJ), JJ.ws = this.serializeAnimationRanges(), JJ.layerMask = this.layerMask, JJ.alphaIndex = this.alphaIndex, JJ.hasVertexAlpha = this.hasVertexAlpha, JJ.overlayAlpha = this.overlayAlpha, JJ.overlayColor = this.overlayColor.JFJ(), JJ.renderOverlay = this.renderOverlay, JJ.applyFog = this.applyFog, this.actionManager && (JJ.actions = this.actionManager.serialize(this.name)), JJ
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const JJ = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (JJ && JJ.vertexCount) {
          if (JJ.vertexCount !== this.getTotalVertices()) return dJ.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (JJ.isUsingTextureForTargets) return;
          for (let cJ = 0; cJ < JJ.numInfluencers; cJ++) {
            const ZJ = JJ.getActiveTarget(cJ),
              FJ = ZJ.getPositions();
            if (!FJ) return void dJ.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(IJ.n.PositionKind + cJ, FJ, !1, 3);
            const UJ = ZJ.getNormals();
            UJ && this.geometry.setVerticesData(IJ.n.NormalKind + cJ, UJ, !1, 3);
            const eJ = ZJ.getTangents();
            eJ && this.geometry.setVerticesData(IJ.n.TangentKind + cJ, eJ, !1, 3);
            const XJ = ZJ.getUVs();
            XJ && this.geometry.setVerticesData(IJ.n.UVKind + "_" + cJ, XJ, !1, 2);
            const AJ = ZJ.getUV2s();
            AJ && this.geometry.setVerticesData(IJ.n.UV2Kind + "_" + cJ, AJ, !1, 2);
            const qJ = ZJ.getColors();
            qJ && this.geometry.setVerticesData(IJ.n.ColorKind + cJ, qJ, !1, 4)
          }
        } else {
          let JJ = 0;
          for (; this.geometry.isVerticesDataPresent(IJ.n.PositionKind + JJ);) this.geometry.removeVerticesData(IJ.n.PositionKind + JJ), this.geometry.isVerticesDataPresent(IJ.n.NormalKind + JJ) && this.geometry.removeVerticesData(IJ.n.NormalKind + JJ), this.geometry.isVerticesDataPresent(IJ.n.TangentKind + JJ) && this.geometry.removeVerticesData(IJ.n.TangentKind + JJ), this.geometry.isVerticesDataPresent(IJ.n.UVKind + "_" + JJ) && this.geometry.removeVerticesData(IJ.n.UVKind + "_" + JJ), this.geometry.isVerticesDataPresent(IJ.n.UV2Kind + "_" + JJ) && this.geometry.removeVerticesData(IJ.n.UV2Kind + "_" + JJ), this.geometry.isVerticesDataPresent(IJ.n.ColorKind + JJ) && this.geometry.removeVerticesData(IJ.n.ColorKind + JJ), JJ++
        }
      }
      static Parse(JJ, cJ, ZJ) {
        let FJ, UJ = !1;
        if (JJ.type && "LinesMesh" === JJ.type ? FJ = tJ._LinesMeshParser(JJ, cJ) : JJ.type && "GroundMesh" === JJ.type ? FJ = tJ._GroundMeshParser(JJ, cJ) : JJ.type && "GoldbergMesh" === JJ.type ? FJ = tJ._GoldbergMeshParser(JJ, cJ) : JJ.type && "GreasedLineMesh" === JJ.type ? FJ = tJ._GreasedLineMeshParser(JJ, cJ) : JJ.type && "TrailMesh" === JJ.type ? FJ = tJ._TrailMeshParser(JJ, cJ) : JJ.type && "GaussianSplattingMesh" === JJ.type ? (FJ = JJ._isCompound ? tJ._GaussianSplattingCompoundMeshParser(JJ, cJ) : tJ._GaussianSplattingMeshParser(JJ, cJ), UJ = !0) : JJ.type && "GaussianSplattingPartProxyMesh" === JJ.type ? (FJ = tJ._GaussianSplattingPartProxyMeshParser(JJ, cJ), UJ = !0) : FJ = new tJ(JJ.name, cJ), FJ.id = JJ.id, FJ._waitingParsedUniqueId = JJ.uniqueId, QJ.b && QJ.b.AddTagsTo(FJ, JJ.tags), FJ.position = KJ.j.FromArray(JJ.position), void 0 !== JJ.metadata && (FJ.metadata = JJ.metadata), void 0 !== JJ.meshBlendingTag && (FJ.meshBlendingTag = JJ.meshBlendingTag), JJ.rotationQuaternion ? FJ.rotationQuaternion = KJ.e.FromArray(JJ.rotationQuaternion) : JJ.rotation && (FJ.rotation = KJ.j.FromArray(JJ.rotation)), FJ.GA = KJ.j.FromArray(JJ.GA), JJ.localMatrix ? FJ.setPreTransformMatrix(KJ.b.FromArray(JJ.localMatrix)) : JJ.pivotMatrix && FJ.setPivotMatrix(KJ.b.FromArray(JJ.pivotMatrix)), FJ.GV(JJ.isEnabled), FJ.isVisible = JJ.isVisible, FJ.infiniteDistance = JJ.infiniteDistance, FJ.Hn = !!JJ.Hn, FJ.showBoundingBox = JJ.showBoundingBox, FJ.showSubMeshesBoundingBox = JJ.showSubMeshesBoundingBox, void 0 !== JJ.applyFog && (FJ.applyFog = JJ.applyFog), void 0 !== JJ.pickable && (FJ.aG = JJ.pickable), void 0 !== JJ.alphaIndex && (FJ.alphaIndex = JJ.alphaIndex), FJ.receiveShadows = JJ.receiveShadows, void 0 !== JJ.billboardMode && (FJ.billboardMode = JJ.billboardMode), void 0 !== JJ.visibility && (FJ.visibility = JJ.visibility), FJ.checkCollisions = JJ.checkCollisions, FJ.pn = !!JJ.pn, JJ.ellipsoid && (FJ.ellipsoid = KJ.j.FromArray(JJ.ellipsoid)), JJ.ellipsoidOffset && (FJ.ellipsoidOffset = KJ.j.FromArray(JJ.ellipsoidOffset)), null != JJ.overrideMaterialSideOrientation && (FJ.sideOrientation = JJ.overrideMaterialSideOrientation), void 0 !== JJ.sideOrientation && (FJ.sideOrientation = JJ.sideOrientation), void 0 !== JJ.isBlocker && (FJ.isBlocker = JJ.isBlocker), FJ._shouldGenerateFlatShading = JJ.useFlatShading, JJ.qS && (FJ._waitingData.qS = JJ.qS), void 0 !== JJ.parentId && (FJ._waitingParentId = JJ.parentId), void 0 !== JJ.parentInstanceIndex && (FJ._waitingParentInstanceIndex = JJ.parentInstanceIndex), void 0 !== JJ.actions && (FJ._waitingData.actions = JJ.actions), void 0 !== JJ.overlayAlpha && (FJ.overlayAlpha = JJ.overlayAlpha), void 0 !== JJ.overlayColor && (FJ.overlayColor = yJ.e.FromArray(JJ.overlayColor)), void 0 !== JJ.renderOverlay && (FJ.renderOverlay = JJ.renderOverlay), FJ.isUnIndexed = !!JJ.isUnIndexed, FJ.hasVertexAlpha = JJ.hasVertexAlpha, JJ.delayLoadingFile ? (FJ.delayLoadState = 4, FJ.delayLoadingFile = ZJ + JJ.delayLoadingFile, FJ.buildBoundingInfo(KJ.j.FromArray(JJ.boundingBoxMinimum), KJ.j.FromArray(JJ.boundingBoxMaximum)), JJ._binaryInfo && (FJ._binaryInfo = JJ._binaryInfo), FJ._delayInfo = [], JJ.hasUVs && FJ._delayInfo.push(IJ.n.UVKind), JJ.hasUVs2 && FJ._delayInfo.push(IJ.n.UV2Kind), JJ.hasUVs3 && FJ._delayInfo.push(IJ.n.UV3Kind), JJ.hasUVs4 && FJ._delayInfo.push(IJ.n.UV4Kind), JJ.hasUVs5 && FJ._delayInfo.push(IJ.n.UV5Kind), JJ.hasUVs6 && FJ._delayInfo.push(IJ.n.UV6Kind), JJ.hasColors && FJ._delayInfo.push(IJ.n.ColorKind), JJ.hasMatricesIndices && FJ._delayInfo.push(IJ.n.MatricesIndicesKind), JJ.hasMatricesWeights && FJ._delayInfo.push(IJ.n.MatricesWeightsKind), FJ._delayLoadingFunction = bJ.d._ImportGeometry, kJ.d.ForceFullSceneLoadingForIncremental && FJ._checkDelayState()) : UJ || bJ.d._ImportGeometry(JJ, FJ), JJ.materialUniqueId ? FJ._waitingMaterialId = JJ.materialUniqueId : JJ.materialId && (FJ._waitingMaterialId = JJ.materialId), JJ.morphTargetManagerId > -1 && (FJ._waitingMorphTargetManagerId = JJ.morphTargetManagerId), void 0 !== JJ.skeletonId && null !== JJ.skeletonId && (FJ.skeleton = cJ.getLastSkeletonById(JJ.skeletonId), FJ._waitingSkeletonId = JJ.skeletonId, JJ.numBoneInfluencers && (FJ.numBoneInfluencers = JJ.numBoneInfluencers)), void 0 !== JJ.skeletonUniqueId && null !== JJ.skeletonUniqueId && (FJ._waitingSkeletonUniqueId = JJ.skeletonUniqueId), JJ.animations) {
          for (let cJ = 0; cJ < JJ.animations.length; cJ++) {
            const ZJ = JJ.animations[cJ],
              UJ = (0, zJ.e)("BABYLON.Animation");
            UJ && FJ.animations.push(UJ.Parse(ZJ))
          }
          SJ.b.ParseAnimationRanges(FJ, JJ, cJ)
        }
        if (JJ.autoAnimate && cJ.beginAnimation(FJ, JJ.autoAnimateFrom, JJ.autoAnimateTo, JJ.autoAnimateLoop, JJ.autoAnimateSpeed || 1), JJ.layerMask && !isNaN(JJ.layerMask) ? FJ.layerMask = Math.abs(parseInt(JJ.layerMask)) : FJ.layerMask = 268435455, JJ.physicsImpostor && (FJ.physicsImpostor = tJ._PhysicsImpostorParser(cJ, FJ, JJ)), JJ.lodMeshIds && (FJ._waitingData.lods = {
            ids: JJ.lodMeshIds,
            distances: JJ.lodDistances ? JJ.lodDistances : null,
            coverages: JJ.lodCoverages ? JJ.lodCoverages : null
          }), JJ.instances)
          for (let eJ = 0; eJ < JJ.instances.length; eJ++) {
            const ZJ = JJ.instances[eJ],
              UJ = FJ.createInstance(ZJ.name);
            if (ZJ.id && (UJ.id = ZJ.id), QJ.b && (ZJ.tags ? QJ.b.AddTagsTo(UJ, ZJ.tags) : QJ.b.AddTagsTo(UJ, JJ.tags)), UJ.position = KJ.j.FromArray(ZJ.position), void 0 !== ZJ.metadata && (UJ.metadata = ZJ.metadata), void 0 !== ZJ.parentId && (UJ._waitingParentId = ZJ.parentId), void 0 !== ZJ.parentInstanceIndex && (UJ._waitingParentInstanceIndex = ZJ.parentInstanceIndex), void 0 !== ZJ.isEnabled && null !== ZJ.isEnabled && UJ.GV(ZJ.isEnabled), void 0 !== ZJ.isVisible && null !== ZJ.isVisible && (UJ.isVisible = ZJ.isVisible), void 0 !== ZJ.aG && null !== ZJ.aG && (UJ.aG = ZJ.aG), ZJ.rotationQuaternion ? UJ.rotationQuaternion = KJ.e.FromArray(ZJ.rotationQuaternion) : ZJ.rotation && (UJ.rotation = KJ.j.FromArray(ZJ.rotation)), UJ.GA = KJ.j.FromArray(ZJ.GA), void 0 != ZJ.checkCollisions && null != ZJ.checkCollisions && (UJ.checkCollisions = ZJ.checkCollisions), void 0 != ZJ.pickable && null != ZJ.pickable && (UJ.aG = ZJ.pickable), void 0 != ZJ.showBoundingBox && null != ZJ.showBoundingBox && (UJ.showBoundingBox = ZJ.showBoundingBox), void 0 != ZJ.showSubMeshesBoundingBox && null != ZJ.showSubMeshesBoundingBox && (UJ.showSubMeshesBoundingBox = ZJ.showSubMeshesBoundingBox), void 0 != ZJ.alphaIndex && null != ZJ.showSubMeshesBoundingBox && (UJ.alphaIndex = ZJ.alphaIndex), ZJ.physicsImpostor && (UJ.physicsImpostor = tJ._PhysicsImpostorParser(cJ, UJ, ZJ)), void 0 !== ZJ.actions && (UJ._waitingData.actions = ZJ.actions), ZJ.animations) {
              for (let JJ = 0; JJ < ZJ.animations.length; JJ++) {
                const cJ = ZJ.animations[JJ],
                  FJ = (0, zJ.e)("BABYLON.Animation");
                FJ && UJ.animations.push(FJ.Parse(cJ))
              }
              SJ.b.ParseAnimationRanges(UJ, ZJ, cJ), ZJ.autoAnimate && cJ.beginAnimation(UJ, ZJ.autoAnimateFrom, ZJ.autoAnimateTo, ZJ.autoAnimateLoop, ZJ.autoAnimateSpeed || 1)
            }
          }
        if (JJ.thinInstances) {
          const cJ = JJ.thinInstances;
          if (FJ.fcJ = !!cJ.enablePicking, cJ.matrixData ? (FJ.o2("matrix", new Float32Array(cJ.matrixData), 16, !1), FJ._thinInstanceDataStorage.matrixBufferSize = cJ.matrixBufferSize, FJ._thinInstanceDataStorage.instancesCount = cJ.instancesCount) : FJ._thinInstanceDataStorage.matrixBufferSize = cJ.matrixBufferSize, JJ.thinInstances.userThinInstance) {
            const cJ = JJ.thinInstances.userThinInstance;
            for (const JJ in cJ.data) FJ.o2(JJ, new Float32Array(cJ.data[JJ]), cJ.strides[JJ], !1), FJ._userThinInstanceBuffersStorage.sizes[JJ] = cJ.sizes[JJ]
          }
        }
        return FJ
      }
      setPositionsForCPUSkinning() {
        const JJ = this._internalMeshDataInfo;
        if (!JJ._sourcePositions) {
          const cJ = this.getVerticesData(IJ.n.PositionKind);
          if (!cJ) return JJ._sourcePositions;
          JJ._sourcePositions = new Float32Array(cJ), this.isVertexBufferUpdatable(IJ.n.PositionKind) || this.setVerticesData(IJ.n.PositionKind, cJ, !0)
        }
        return JJ._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const JJ = this._internalMeshDataInfo;
        if (!JJ._sourceNormals) {
          const cJ = this.getVerticesData(IJ.n.NormalKind);
          if (!cJ) return JJ._sourceNormals;
          JJ._sourceNormals = new Float32Array(cJ), this.isVertexBufferUpdatable(IJ.n.NormalKind) || this.setVerticesData(IJ.n.NormalKind, cJ, !0)
        }
        return JJ._sourceNormals
      }
      applySkeleton(JJ) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Qy().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Qy().getFrameId(), !this.isVerticesDataPresent(IJ.n.PositionKind)) return this;
        if (!this.isVerticesDataPresent(IJ.n.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(IJ.n.MatricesWeightsKind)) return this;
        const cJ = this.isVerticesDataPresent(IJ.n.NormalKind),
          ZJ = this._internalMeshDataInfo;
        if (!ZJ._sourcePositions) {
          const JJ = this.aE.slice();
          this.setPositionsForCPUSkinning(), this.aE = JJ
        }
        cJ && !ZJ._sourceNormals && this.setNormalsForCPUSkinning();
        let FJ = this.getVerticesData(IJ.n.PositionKind);
        if (!FJ) return this;
        FJ instanceof Float32Array || (FJ = new Float32Array(FJ));
        let UJ = this.getVerticesData(IJ.n.NormalKind);
        if (cJ) {
          if (!UJ) return this;
          UJ instanceof Float32Array || (UJ = new Float32Array(UJ))
        }
        const eJ = this.getVerticesData(IJ.n.MatricesIndicesKind),
          XJ = this.getVerticesData(IJ.n.MatricesWeightsKind);
        if (!XJ || !eJ) return this;
        const AJ = this.numBoneInfluencers > 4,
          qJ = AJ ? this.getVerticesData(IJ.n.MatricesIndicesExtraKind) : null,
          jJ = AJ ? this.getVerticesData(IJ.n.MatricesWeightsExtraKind) : null,
          YJ = JJ.getTransformMatrices(this),
          hJ = KJ.j.Zero(),
          DJ = new KJ.b,
          sJ = new KJ.b;
        let nJ, GJ = 0;
        for (let fJ = 0; fJ < FJ.length; fJ += 3, GJ += 4) {
          let JJ;
          for (nJ = 0; nJ < 4; nJ++) JJ = XJ[GJ + nJ], JJ > 0 && (KJ.b.FromFloat32ArrayToRefScaled(YJ, Math.floor(16 * eJ[GJ + nJ]), JJ, sJ), DJ.addToSelf(sJ));
          if (AJ)
            for (nJ = 0; nJ < 4; nJ++) JJ = jJ[GJ + nJ], JJ > 0 && (KJ.b.FromFloat32ArrayToRefScaled(YJ, Math.floor(16 * qJ[GJ + nJ]), JJ, sJ), DJ.addToSelf(sJ));
          KJ.j.TransformCoordinatesFromFloatsToRef(ZJ._sourcePositions[fJ], ZJ._sourcePositions[fJ + 1], ZJ._sourcePositions[fJ + 2], DJ, hJ), hJ.toArray(FJ, fJ), cJ && (KJ.j.TransformNormalFromFloatsToRef(ZJ._sourceNormals[fJ], ZJ._sourceNormals[fJ + 1], ZJ._sourceNormals[fJ + 2], DJ, hJ), hJ.toArray(UJ, fJ)), DJ.reset()
        }
        return this.updateVerticesData(IJ.n.PositionKind, FJ), cJ && this.updateVerticesData(IJ.n.NormalKind, UJ), this
      }
      static MinMax(JJ) {
        let cJ = null,
          ZJ = null;
        for (const FJ of JJ) {
          const JJ = FJ.rM().boundingBox;
          cJ && ZJ ? (cJ.minimizeInPlace(JJ.minimumWorld), ZJ.maximizeInPlace(JJ.maximumWorld)) : (cJ = JJ.minimumWorld.clone(), ZJ = JJ.maximumWorld.clone())
        }
        return cJ && ZJ ? {
          min: cJ,
          max: ZJ
        } : {
          min: KJ.j.Zero(),
          max: KJ.j.Zero()
        }
      }
      static Center(JJ) {
        const cJ = JJ instanceof Array ? tJ.MinMax(JJ) : JJ;
        return KJ.j.Center(cJ.min, cJ.max)
      }
      static MergeMeshes(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        return (0, EJ.m)(tJ._MergeMeshesCoroutine(JJ, cJ, ZJ, FJ, UJ, eJ, !1))
      }
      static async MergeMeshesAsync(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, EJ.k)(tJ._MergeMeshesCoroutine(JJ, cJ, ZJ, FJ, UJ, eJ, !0), (0, EJ.c)())
      }
      static * _MergeMeshesCoroutine(JJ) {
        let cJ, ZJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          FJ = arguments.length > 2 ? arguments[2] : void 0,
          UJ = arguments.length > 3 ? arguments[3] : void 0,
          eJ = arguments.length > 4 ? arguments[4] : void 0,
          XJ = arguments.length > 5 ? arguments[5] : void 0,
          AJ = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (JJ = JJ.filter(Boolean)).length) return null;
        if (!FJ) {
          let ZJ = 0;
          for (cJ = 0; cJ < JJ.length; cJ++)
            if (ZJ += JJ[cJ].getTotalVertices(), ZJ >= 65536) return dJ.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const qJ = JJ[0];
        XJ && (eJ = !1, JJ.sort(((JJ, cJ) => (JJ.material?.uniqueId ?? -1) - (cJ.material?.uniqueId ?? -1))));
        const jJ = new Array,
          YJ = new Array,
          hJ = new Array,
          DJ = JJ[0].sideOrientation;
        for (cJ = 0; cJ < JJ.length; cJ++) {
          const ZJ = JJ[cJ];
          if (ZJ.Iy) return dJ.c.Warn("Cannot merge instance meshes."), null;
          if (DJ !== ZJ.sideOrientation) return dJ.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (eJ || XJ) {
            const JJ = hJ.reduce(((JJ, cJ) => Math.max(JJ, cJ.start + cJ.count)), 0);
            if (XJ)
              if (ZJ.material) {
                const cJ = ZJ.material;
                if (cJ instanceof PJ.b) {
                  for (let JJ = 0; JJ < cJ.U1.length; JJ++) jJ.indexOf(cJ.U1[JJ]) < 0 && jJ.push(cJ.U1[JJ]);
                  for (let FJ = 0; FJ < ZJ.aE.length; FJ++) YJ.push(jJ.indexOf(cJ.U1[ZJ.aE[FJ].materialIndex])), hJ.push({
                    start: JJ + ZJ.aE[FJ].indexStart,
                    count: ZJ.aE[FJ].indexCount
                  })
                } else {
                  jJ.indexOf(cJ) < 0 && jJ.push(cJ);
                  for (let FJ = 0; FJ < ZJ.aE.length; FJ++) YJ.push(jJ.indexOf(cJ)), hJ.push({
                    start: JJ + ZJ.aE[FJ].indexStart,
                    count: ZJ.aE[FJ].indexCount
                  })
                }
              } else
                for (let cJ = 0; cJ < ZJ.aE.length; cJ++) YJ.push(0), hJ.push({
                  start: JJ + ZJ.aE[cJ].indexStart,
                  count: ZJ.aE[cJ].indexCount
                });
            else hJ.push({
              start: JJ,
              count: ZJ.getTotalIndices()
            })
          }
        }
        if (XJ && hJ.length > 1) {
          let JJ = 0;
          for (let cJ = 1; cJ < hJ.length; cJ++) {
            const ZJ = hJ[JJ],
              FJ = hJ[cJ];
            YJ[cJ] === YJ[JJ] && ZJ.start + ZJ.count === FJ.start ? ZJ.count += FJ.count : (JJ++, hJ[JJ] = FJ, YJ[JJ] = YJ[cJ])
          }
          hJ.length = JJ + 1, YJ.length = JJ + 1
        }
        const sJ = JJ => {
            const cJ = JJ.computeWorldMatrix(!0);
            return {
              vertexData: MJ.e.ExtractFromMesh(JJ, !1, !1),
              transform: cJ
            }
          },
          {
            vertexData: nJ,
            transform: GJ
          } = sJ(JJ[0]);
        AJ && (yield);
        const fJ = new Array(JJ.length - 1);
        for (let EJ = 1; EJ < JJ.length; EJ++) fJ[EJ - 1] = sJ(JJ[EJ]), AJ && (yield);
        const xJ = nJ._mergeCoroutine(GJ, fJ, FJ, AJ, !ZJ);
        let rJ = xJ.next();
        for (; !rJ.done;) AJ && (yield), rJ = xJ.next();
        const vJ = rJ.value;
        UJ || (UJ = new tJ(qJ.name + "_merged", qJ.Qy()));
        const mJ = vJ._applyToCoroutine(UJ, void 0, AJ);
        let QJ = mJ.next();
        for (; !QJ.done;) AJ && (yield), QJ = mJ.next();
        if (UJ.checkCollisions = qJ.checkCollisions, UJ.sideOrientation = qJ.sideOrientation, ZJ)
          for (cJ = 0; cJ < JJ.length; cJ++) JJ[cJ].dispose();
        if (eJ || XJ) {
          for (UJ.releaseSubMeshes(), cJ = 0; cJ < hJ.length;) WJ.e.CreateFromIndices(0, hJ[cJ].start, hJ[cJ].count, UJ, void 0, !1), cJ++;
          for (const JJ of UJ.aE) JJ.refreshBoundingInfo();
          UJ.computeWorldMatrix(!0)
        }
        if (XJ) {
          const JJ = new PJ.b(qJ.name + "_merged", qJ.Qy());
          JJ.U1 = jJ;
          for (let cJ = 0; cJ < UJ.aE.length; cJ++) UJ.aE[cJ].materialIndex = YJ[cJ];
          UJ.material = JJ
        } else UJ.material = qJ.material;
        return UJ
      }
      i6(JJ) {
        JJ._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(JJ)
      }
      Z5(JJ) {
        const cJ = JJ._indexInSourceMeshInstanceArray;
        if (-1 != cJ) {
          if (cJ !== this.instances.length - 1) {
            const JJ = this.instances[this.instances.length - 1];
            this.instances[cJ] = JJ, JJ._indexInSourceMeshInstanceArray = cJ
          }
          JJ._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === gJ.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(JJ) {
        const cJ = this.Qy();
        return cJ.forcePointsCloud ? gJ.c.PointFillMode : cJ.forceWireframe ? gJ.c.WireFrameFillMode : this.overrideRenderingFillMode ?? JJ
      }
      setMaterialByID(JJ) {
        return this.setMaterialById(JJ)
      }
      static CreateRibbon(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(JJ, cJ, ZJ, FJ, UJ, eJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(JJ, cJ, ZJ, FJ, UJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(JJ, cJ, ZJ, FJ, UJ, eJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(JJ, cJ, ZJ, FJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(JJ, cJ, ZJ, FJ, UJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(JJ, cJ, ZJ, FJ, UJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(JJ, cJ, ZJ, FJ, UJ, eJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(JJ, cJ, ZJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(JJ, cJ, ZJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(JJ, cJ, ZJ, FJ, UJ, eJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(JJ, cJ, ZJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(JJ) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    tJ.FRONTSIDE = MJ.e.FRONTSIDE, tJ.BACKSIDE = MJ.e.BACKSIDE, tJ.DOUBLESIDE = MJ.e.DOUBLESIDE, tJ.DEFAULTSIDE = MJ.e.DEFAULTSIDE, tJ.NO_CAP = 0, tJ.CAP_START = 1, tJ.CAP_END = 2, tJ.CAP_ALL = 3, tJ.NO_FLIP = 0, tJ.FLIP_TILE = 1, tJ.ROTATE_TILE = 2, tJ.FLIP_ROW = 3, tJ.ROTATE_ROW = 4, tJ.FLIP_N_ROTATE_TILE = 5, tJ.FLIP_N_ROTATE_ROW = 6, tJ.CENTER = 0, tJ.LEFT = 1, tJ.RIGHT = 2, tJ.TOP = 3, tJ.BOTTOM = 4, tJ.INSTANCEDMESH_SORT_TRANSPARENT = !1, tJ._GroundMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GroundMesh")
    }, tJ._GoldbergMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GoldbergMesh")
    }, tJ._LinesMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("LinesMesh")
    }, tJ._GreasedLineMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GreasedLineMesh")
    }, tJ._GreasedLineRibbonMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GreasedLineRibbonMesh")
    }, tJ._TrailMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("TrailMesh")
    }, tJ._GaussianSplattingMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GaussianSplattingMesh")
    }, tJ._GaussianSplattingPartProxyMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GaussianSplattingPartProxyMesh")
    }, tJ._GaussianSplattingCompoundMeshParser = (JJ, cJ) => {
      throw (0, NJ.m)("GaussianSplattingCompoundMesh")
    };
    let oJ = !1;

    function lJ() {
      oJ || (oJ = !0, (0, zJ.f)("BABYLON.Mesh", tJ))
    }(FJ = tJ.prototype).bI ?? (FJ.bI = (0, NJ.l)("Mesh", "bI")), (UJ = tJ.prototype).simplify ?? (UJ.simplify = (0, NJ.l)("Mesh", "simplify")), (eJ = tJ.prototype).thinInstanceAdd ?? (eJ.thinInstanceAdd = (0, NJ.l)("Mesh", "thinInstanceAdd")), (XJ = tJ.prototype).thinInstanceAddSelf ?? (XJ.thinInstanceAddSelf = (0, NJ.l)("Mesh", "thinInstanceAddSelf")), (AJ = tJ.prototype).thinInstanceRegisterAttribute ?? (AJ.thinInstanceRegisterAttribute = (0, NJ.l)("Mesh", "thinInstanceRegisterAttribute")), (qJ = tJ.prototype).thinInstanceSetMatrixAt ?? (qJ.thinInstanceSetMatrixAt = (0, NJ.l)("Mesh", "thinInstanceSetMatrixAt")), (jJ = tJ.prototype).thinInstanceSetAttributeAt ?? (jJ.thinInstanceSetAttributeAt = (0, NJ.l)("Mesh", "thinInstanceSetAttributeAt")), (YJ = tJ.prototype).o2 ?? (YJ.o2 = (0, NJ.l)("Mesh", "o2")), (hJ = tJ.prototype).thinInstanceGetWorldMatrices ?? (hJ.thinInstanceGetWorldMatrices = (0, NJ.l)("Mesh", "thinInstanceGetWorldMatrices")), (DJ = tJ.prototype).P5 ?? (DJ.P5 = (0, NJ.l)("Mesh", "P5")), (sJ = tJ.prototype).thinInstancePartialBufferUpdate ?? (sJ.thinInstancePartialBufferUpdate = (0, NJ.l)("Mesh", "thinInstancePartialBufferUpdate")), (nJ = tJ.prototype).thinInstanceRefreshBoundingInfo ?? (nJ.thinInstanceRefreshBoundingInfo = (0, NJ.l)("Mesh", "thinInstanceRefreshBoundingInfo")), (GJ = tJ.prototype).getEmittedParticleSystems ?? (GJ.getEmittedParticleSystems = (0, NJ.l)("Mesh", "getEmittedParticleSystems")), (fJ = tJ.prototype).getHierarchyEmittedParticleSystems ?? (fJ.getHierarchyEmittedParticleSystems = (0, NJ.l)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(tJ.prototype, "edgesShareWithInstances") || Object.defineProperty(tJ.prototype, "edgesShareWithInstances", (0, NJ.h)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(tJ.prototype, "fcJ") || Object.defineProperty(tJ.prototype, "fcJ", (0, NJ.h)("Mesh", "fcJ")), Object.getOwnPropertyDescriptor(tJ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(tJ.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, NJ.h)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(tJ.prototype, "f6") || Object.defineProperty(tJ.prototype, "f6", (0, NJ.h)("Mesh", "f6"))
  },
  39170: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(36174),
      eJ = ZJ(38918),
      XJ = ZJ(38677),
      AJ = ZJ(36231),
      qJ = ZJ(37660),
      jJ = ZJ(38806),
      YJ = ZJ(39163),
      hJ = ZJ(38852),
      DJ = ZJ(39058);
    class sJ {}
    let nJ = (() => {
      var JJ;
      let cJ, ZJ, nJ, GJ, fJ = [];
      return JJ = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, YJ.g)(this._applyToCoroutine.bind(this)), this.uniqueId = JJ._UniqueIdGenerator, JJ._UniqueIdGenerator++
        }
        set(JJ, cJ) {
          switch (JJ.length || qJ.c.Warn(`Setting vertex data kind '${cJ}' with an empty array`), cJ) {
            case eJ.n.PositionKind:
              this.positions = JJ;
              break;
            case eJ.n.NormalKind:
              this.normals = JJ;
              break;
            case eJ.n.TangentKind:
              this.tangents = JJ;
              break;
            case eJ.n.UVKind:
              this.uvs = JJ;
              break;
            case eJ.n.UV2Kind:
              this.uvs2 = JJ;
              break;
            case eJ.n.UV3Kind:
              this.uvs3 = JJ;
              break;
            case eJ.n.UV4Kind:
              this.uvs4 = JJ;
              break;
            case eJ.n.UV5Kind:
              this.uvs5 = JJ;
              break;
            case eJ.n.UV6Kind:
              this.uvs6 = JJ;
              break;
            case eJ.n.ColorKind:
              this.colors = JJ;
              break;
            case eJ.n.MatricesIndicesKind:
              this.matricesIndices = JJ;
              break;
            case eJ.n.MatricesWeightsKind:
              this.matricesWeights = JJ;
              break;
            case eJ.n.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = JJ;
              break;
            case eJ.n.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = JJ
          }
        }
        applyToMesh(JJ, cJ) {
          return this._applyTo(JJ, cJ, !1), this
        }
        applyToGeometry(JJ, cJ) {
          return this._applyTo(JJ, cJ, !1), this
        }
        updateMesh(JJ) {
          return this._update(JJ), this
        }
        updateGeometry(JJ) {
          return this._update(JJ), this
        }* _applyToCoroutine(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (JJ.setVerticesData(eJ.n.PositionKind, this.positions, cJ), ZJ && (yield)), this.normals && (JJ.setVerticesData(eJ.n.NormalKind, this.normals, cJ), ZJ && (yield)), this.tangents && (JJ.setVerticesData(eJ.n.TangentKind, this.tangents, cJ), ZJ && (yield)), this.uvs && (JJ.setVerticesData(eJ.n.UVKind, this.uvs, cJ), ZJ && (yield)), this.uvs2 && (JJ.setVerticesData(eJ.n.UV2Kind, this.uvs2, cJ), ZJ && (yield)), this.uvs3 && (JJ.setVerticesData(eJ.n.UV3Kind, this.uvs3, cJ), ZJ && (yield)), this.uvs4 && (JJ.setVerticesData(eJ.n.UV4Kind, this.uvs4, cJ), ZJ && (yield)), this.uvs5 && (JJ.setVerticesData(eJ.n.UV5Kind, this.uvs5, cJ), ZJ && (yield)), this.uvs6 && (JJ.setVerticesData(eJ.n.UV6Kind, this.uvs6, cJ), ZJ && (yield)), this.colors) {
            const FJ = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            JJ.setVerticesData(eJ.n.ColorKind, this.colors, cJ, FJ), this.hasVertexAlpha && void 0 !== JJ.hasVertexAlpha && (JJ.hasVertexAlpha = !0), ZJ && (yield)
          }
          if (this.matricesIndices && (JJ.setVerticesData(eJ.n.MatricesIndicesKind, this.matricesIndices, cJ), ZJ && (yield)), this.matricesWeights && (JJ.setVerticesData(eJ.n.MatricesWeightsKind, this.matricesWeights, cJ), ZJ && (yield)), this.matricesIndicesExtra && (JJ.setVerticesData(eJ.n.MatricesIndicesExtraKind, this.matricesIndicesExtra, cJ), ZJ && (yield)), this.matricesWeightsExtra && (JJ.setVerticesData(eJ.n.MatricesWeightsExtraKind, this.matricesWeightsExtra, cJ), ZJ && (yield)), this.indices ? (JJ.setIndices(this.indices, null, cJ), ZJ && (yield)) : JJ.setIndices([], null), JJ.aE && this.materialInfos && this.materialInfos.length > 1) {
            const cJ = JJ;
            cJ.aE = [];
            for (const JJ of this.materialInfos) new DJ.e(JJ.materialIndex, JJ.verticesStart, JJ.verticesCount, JJ.indexStart, JJ.indexCount, cJ)
          }
          return this
        }
        _update(JJ, cJ, ZJ) {
          return this.positions && JJ.updateVerticesData(eJ.n.PositionKind, this.positions, cJ, ZJ), this.normals && JJ.updateVerticesData(eJ.n.NormalKind, this.normals, cJ, ZJ), this.tangents && JJ.updateVerticesData(eJ.n.TangentKind, this.tangents, cJ, ZJ), this.uvs && JJ.updateVerticesData(eJ.n.UVKind, this.uvs, cJ, ZJ), this.uvs2 && JJ.updateVerticesData(eJ.n.UV2Kind, this.uvs2, cJ, ZJ), this.uvs3 && JJ.updateVerticesData(eJ.n.UV3Kind, this.uvs3, cJ, ZJ), this.uvs4 && JJ.updateVerticesData(eJ.n.UV4Kind, this.uvs4, cJ, ZJ), this.uvs5 && JJ.updateVerticesData(eJ.n.UV5Kind, this.uvs5, cJ, ZJ), this.uvs6 && JJ.updateVerticesData(eJ.n.UV6Kind, this.uvs6, cJ, ZJ), this.colors && JJ.updateVerticesData(eJ.n.ColorKind, this.colors, cJ, ZJ), this.matricesIndices && JJ.updateVerticesData(eJ.n.MatricesIndicesKind, this.matricesIndices, cJ, ZJ), this.matricesWeights && JJ.updateVerticesData(eJ.n.MatricesWeightsKind, this.matricesWeights, cJ, ZJ), this.matricesIndicesExtra && JJ.updateVerticesData(eJ.n.MatricesIndicesExtraKind, this.matricesIndicesExtra, cJ, ZJ), this.matricesWeightsExtra && JJ.updateVerticesData(eJ.n.MatricesWeightsExtraKind, this.matricesWeightsExtra, cJ, ZJ), this.indices && JJ.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length;
          const eJ = UJ.h.Pn[0],
            XJ = UJ.h.Pn[1];
          for (let AJ = ZJ; AJ < ZJ + FJ; AJ += 3) UJ.j.FromArrayToRef(JJ, AJ, eJ), UJ.j.TransformCoordinatesToRef(eJ, cJ, XJ), JJ[AJ] = XJ.x, JJ[AJ + 1] = XJ.y, JJ[AJ + 2] = XJ.z
        }
        static _TransformVector3Normals(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length;
          const eJ = UJ.h.Pn[0],
            XJ = UJ.h.Pn[1];
          for (let AJ = ZJ; AJ < ZJ + FJ; AJ += 3) UJ.j.FromArrayToRef(JJ, AJ, eJ), UJ.j.TransformNormalToRef(eJ, cJ, XJ), JJ[AJ] = XJ.x, JJ[AJ + 1] = XJ.y, JJ[AJ + 2] = XJ.z
        }
        static _TransformVector4Normals(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length;
          const eJ = UJ.h.Vector4[0],
            XJ = UJ.h.Vector4[1];
          for (let AJ = ZJ; AJ < ZJ + FJ; AJ += 4) UJ.k.FromArrayToRef(JJ, AJ, eJ), UJ.k.TransformNormalToRef(eJ, cJ, XJ), JJ[AJ] = XJ.x, JJ[AJ + 1] = XJ.y, JJ[AJ + 2] = XJ.z, JJ[AJ + 3] = XJ.w
        }
        static _FlipFaces(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ.length;
          for (let FJ = cJ; FJ < cJ + ZJ; FJ += 3) {
            const cJ = JJ[FJ + 1];
            JJ[FJ + 1] = JJ[FJ + 2], JJ[FJ + 2] = cJ
          }
        }
        transform(cJ) {
          const ZJ = cJ.determinant() < 0;
          return this.positions && JJ._TransformVector3Coordinates(this.positions, cJ), this.normals && JJ._TransformVector3Normals(this.normals, cJ), this.tangents && JJ._TransformVector4Normals(this.tangents, cJ), ZJ && this.indices && JJ._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const cJ = [];
          for (const ZJ of this.materialInfos) {
            const FJ = new JJ;
            if (this.positions && (FJ.positions = this.positions.slice(3 * ZJ.verticesStart, 3 * (ZJ.verticesCount + ZJ.verticesStart))), this.normals && (FJ.normals = this.normals.slice(3 * ZJ.verticesStart, 3 * (ZJ.verticesCount + ZJ.verticesStart))), this.tangents && (FJ.tangents = this.tangents.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.colors && (FJ.colors = this.colors.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs && (FJ.uvs = this.uvs.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs2 && (FJ.uvs2 = this.uvs2.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs3 && (FJ.uvs3 = this.uvs3.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs4 && (FJ.uvs4 = this.uvs4.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs5 && (FJ.uvs5 = this.uvs5.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.uvs6 && (FJ.uvs6 = this.uvs6.slice(2 * ZJ.verticesStart, 2 * (ZJ.verticesCount + ZJ.verticesStart))), this.matricesIndices && (FJ.matricesIndices = this.matricesIndices.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.matricesIndicesExtra && (FJ.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.matricesWeights && (FJ.matricesWeights = this.matricesWeights.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.matricesWeightsExtra && (FJ.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ZJ.verticesStart, 4 * (ZJ.verticesCount + ZJ.verticesStart))), this.indices) {
              FJ.indices = [];
              for (let JJ = ZJ.indexStart; JJ < ZJ.indexStart + ZJ.indexCount; JJ++) FJ.indices.push(this.indices[JJ] - ZJ.verticesStart)
            }
            const UJ = new sJ;
            UJ.indexStart = 0, UJ.indexCount = FJ.indices ? FJ.indices.length : 0, UJ.materialIndex = ZJ.materialIndex, UJ.verticesStart = 0, UJ.verticesCount = (FJ.positions ? FJ.positions.length : 0) / 3, FJ.materialInfos = [UJ], cJ.push(FJ)
          }
          return cJ
        }
        merge(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const eJ = Array.isArray(JJ) ? JJ.map((JJ => ({
            vertexData: JJ
          }))) : [{
            vertexData: JJ
          }];
          return (0, YJ.m)(this._mergeCoroutine(void 0, eJ, cJ, !1, ZJ, FJ, UJ))
        }* _mergeCoroutine(cJ, ZJ) {
          let FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            UJ = arguments.length > 3 ? arguments[3] : void 0,
            XJ = arguments.length > 4 ? arguments[4] : void 0,
            AJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            qJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let jJ = ZJ.map((JJ => JJ.vertexData)),
            YJ = this;
          if (qJ)
            for (const JJ of jJ) JJ && (JJ._validate(), !this.normals && JJ.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && JJ.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && JJ.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && JJ.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && JJ.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && JJ.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && JJ.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && JJ.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && JJ.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && JJ.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && JJ.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && JJ.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && JJ.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const JJ of jJ)
            if (JJ)
              if (qJ) this.normals && !JJ.normals && (JJ.normals = new Float32Array(JJ.positions.length)), this.tangents && !JJ.tangents && (JJ.tangents = new Float32Array(JJ.positions.length / 3 * 4)), this.uvs && !JJ.uvs && (JJ.uvs = new Float32Array(JJ.positions.length / 3 * 2)), this.uvs2 && !JJ.uvs2 && (JJ.uvs2 = new Float32Array(JJ.positions.length / 3 * 2)), this.uvs3 && !JJ.uvs3 && (JJ.uvs3 = new Float32Array(JJ.positions.length / 3 * 2)), this.uvs4 && !JJ.uvs4 && (JJ.uvs4 = new Float32Array(JJ.positions.length / 3 * 2)), this.uvs5 && !JJ.uvs5 && (JJ.uvs5 = new Float32Array(JJ.positions.length / 3 * 2)), this.uvs6 && !JJ.uvs6 && (JJ.uvs6 = new Float32Array(JJ.positions.length / 3 * 2)), this.colors && !JJ.colors && (JJ.colors = new Float32Array(JJ.positions.length / 3 * 4), JJ.colors.fill(1)), this.matricesIndices && !JJ.matricesIndices && (JJ.matricesIndices = new Float32Array(JJ.positions.length / 3 * 4)), this.matricesWeights && !JJ.matricesWeights && (JJ.matricesWeights = new Float32Array(JJ.positions.length / 3 * 4)), this.matricesIndicesExtra && !JJ.matricesIndicesExtra && (JJ.matricesIndicesExtra = new Float32Array(JJ.positions.length / 3 * 4)), this.matricesWeightsExtra && !JJ.matricesWeightsExtra && (JJ.matricesWeightsExtra = new Float32Array(JJ.positions.length / 3 * 4));
              else if (JJ._validate(), !this.normals !== !JJ.normals || !this.tangents !== !JJ.tangents || !this.uvs !== !JJ.uvs || !this.uvs2 !== !JJ.uvs2 || !this.uvs3 !== !JJ.uvs3 || !this.uvs4 !== !JJ.uvs4 || !this.uvs5 !== !JJ.uvs5 || !this.uvs6 !== !JJ.uvs6 || !this.colors !== !JJ.colors || !this.matricesIndices !== !JJ.matricesIndices || !this.matricesWeights !== !JJ.matricesWeights || !this.matricesIndicesExtra !== !JJ.matricesIndicesExtra || !this.matricesWeightsExtra !== !JJ.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (AJ) {
            let JJ, FJ = 0,
              UJ = 0;
            const eJ = [];
            let XJ = null;
            const AJ = [];
            for (const ZJ of this.splitBasedOnMaterialID()) AJ.push({
              vertexData: ZJ,
              transform: cJ
            });
            for (const cJ of ZJ)
              if (cJ.vertexData)
                for (const JJ of cJ.vertexData.splitBasedOnMaterialID()) AJ.push({
                  vertexData: JJ,
                  transform: cJ.transform
                });
            AJ.sort(((JJ, cJ) => {
              const ZJ = JJ.vertexData.materialInfos ? JJ.vertexData.materialInfos[0].materialIndex : 0,
                FJ = cJ.vertexData.materialInfos ? cJ.vertexData.materialInfos[0].materialIndex : 0;
              return ZJ > FJ ? 1 : ZJ === FJ ? 0 : -1
            }));
            for (const cJ of AJ) {
              const ZJ = cJ.vertexData;
              if (JJ = ZJ.materialInfos ? ZJ.materialInfos[0].materialIndex : 0, XJ && XJ.materialIndex === JJ) XJ.indexCount += ZJ.indices.length, XJ.verticesCount += ZJ.positions.length / 3;
              else {
                const cJ = new sJ;
                cJ.materialIndex = JJ, cJ.indexStart = FJ, cJ.indexCount = ZJ.indices.length, cJ.verticesStart = UJ, cJ.verticesCount = ZJ.positions.length / 3, eJ.push(cJ), XJ = cJ
              }
              FJ += ZJ.indices.length, UJ += ZJ.positions.length / 3
            }
            const qJ = AJ.splice(0, 1)[0];
            YJ = qJ.vertexData, cJ = qJ.transform, jJ = AJ.map((JJ => JJ.vertexData)), ZJ = AJ, this.materialInfos = eJ
          }
          const hJ = jJ.reduce(((JJ, cJ) => JJ + (cJ.indices?.length ?? 0)), YJ.indices?.length ?? 0);
          let DJ = XJ || jJ.some((JJ => JJ.indices === YJ.indices)) ? YJ.indices?.slice() : YJ.indices;
          if (hJ > 0) {
            let eJ = DJ?.length ?? 0;
            if (DJ || (DJ = new Array(hJ)), DJ.length !== hJ) {
              if (Array.isArray(DJ)) DJ.length = hJ;
              else {
                const JJ = FJ || DJ instanceof Uint32Array ? new Uint32Array(hJ) : new Uint16Array(hJ);
                JJ.set(DJ), DJ = JJ
              }
              cJ && cJ.determinant() < 0 && JJ._FlipFaces(DJ, 0, eJ)
            }
            let XJ = YJ.positions ? YJ.positions.length / 3 : 0;
            for (const {
                vertexData: cJ,
                transform: FJ
              }
              of ZJ)
              if (cJ.indices) {
                for (let JJ = 0; JJ < cJ.indices.length; JJ++) DJ[eJ + JJ] = cJ.indices[JJ] + XJ;
                FJ && FJ.determinant() < 0 && JJ._FlipFaces(DJ, eJ, cJ.indices.length), XJ += cJ.positions.length / 3, eJ += cJ.indices.length, UJ && (yield)
              }
          }
          return this.indices = DJ, this.positions = JJ._MergeElement(eJ.n.PositionKind, YJ.positions, cJ, ZJ.map((JJ => [JJ.vertexData.positions, JJ.transform]))), UJ && (yield), YJ.normals && (this.normals = JJ._MergeElement(eJ.n.NormalKind, YJ.normals, cJ, ZJ.map((JJ => [JJ.vertexData.normals, JJ.transform]))), UJ && (yield)), YJ.tangents && (this.tangents = JJ._MergeElement(eJ.n.TangentKind, YJ.tangents, cJ, ZJ.map((JJ => [JJ.vertexData.tangents, JJ.transform]))), UJ && (yield)), YJ.uvs && (this.uvs = JJ._MergeElement(eJ.n.UVKind, YJ.uvs, cJ, ZJ.map((JJ => [JJ.vertexData.uvs, JJ.transform]))), UJ && (yield)), YJ.uvs2 && (this.uvs2 = JJ._MergeElement(eJ.n.UV2Kind, YJ.uvs2, cJ, ZJ.map((JJ => [JJ.vertexData.uvs2, JJ.transform]))), UJ && (yield)), YJ.uvs3 && (this.uvs3 = JJ._MergeElement(eJ.n.UV3Kind, YJ.uvs3, cJ, ZJ.map((JJ => [JJ.vertexData.uvs3, JJ.transform]))), UJ && (yield)), YJ.uvs4 && (this.uvs4 = JJ._MergeElement(eJ.n.UV4Kind, YJ.uvs4, cJ, ZJ.map((JJ => [JJ.vertexData.uvs4, JJ.transform]))), UJ && (yield)), YJ.uvs5 && (this.uvs5 = JJ._MergeElement(eJ.n.UV5Kind, YJ.uvs5, cJ, ZJ.map((JJ => [JJ.vertexData.uvs5, JJ.transform]))), UJ && (yield)), YJ.uvs6 && (this.uvs6 = JJ._MergeElement(eJ.n.UV6Kind, YJ.uvs6, cJ, ZJ.map((JJ => [JJ.vertexData.uvs6, JJ.transform]))), UJ && (yield)), YJ.colors && (this.colors = JJ._MergeElement(eJ.n.ColorKind, YJ.colors, cJ, ZJ.map((JJ => [JJ.vertexData.colors, JJ.transform]))), (void 0 !== YJ.hasVertexAlpha || ZJ.some((JJ => void 0 !== JJ.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = YJ.hasVertexAlpha || ZJ.some((JJ => JJ.vertexData.hasVertexAlpha))), UJ && (yield)), YJ.matricesIndices && (this.matricesIndices = JJ._MergeElement(eJ.n.MatricesIndicesKind, YJ.matricesIndices, cJ, ZJ.map((JJ => [JJ.vertexData.matricesIndices, JJ.transform]))), UJ && (yield)), YJ.matricesWeights && (this.matricesWeights = JJ._MergeElement(eJ.n.MatricesWeightsKind, YJ.matricesWeights, cJ, ZJ.map((JJ => [JJ.vertexData.matricesWeights, JJ.transform]))), UJ && (yield)), YJ.matricesIndicesExtra && (this.matricesIndicesExtra = JJ._MergeElement(eJ.n.MatricesIndicesExtraKind, YJ.matricesIndicesExtra, cJ, ZJ.map((JJ => [JJ.vertexData.matricesIndicesExtra, JJ.transform]))), UJ && (yield)), YJ.matricesWeightsExtra && (this.matricesWeightsExtra = JJ._MergeElement(eJ.n.MatricesWeightsExtraKind, YJ.matricesWeightsExtra, cJ, ZJ.map((JJ => [JJ.vertexData.matricesWeightsExtra, JJ.transform])))), this
        }
        static _MergeElement(cJ, ZJ, FJ, UJ) {
          const XJ = UJ.filter((JJ => null !== JJ[0] && void 0 !== JJ[0]));
          if (!ZJ && 0 == XJ.length) return ZJ;
          if (!ZJ) return this._MergeElement(cJ, XJ[0][0], XJ[0][1], XJ.slice(1));
          const AJ = XJ.reduce(((JJ, cJ) => JJ + cJ[0].length), ZJ.length),
            qJ = cJ === eJ.n.PositionKind ? JJ._TransformVector3Coordinates : cJ === eJ.n.NormalKind ? JJ._TransformVector3Normals : cJ === eJ.n.TangentKind ? JJ._TransformVector4Normals : () => {};
          if (ZJ instanceof Float32Array) {
            const JJ = new Float32Array(AJ);
            JJ.set(ZJ), FJ && qJ(JJ, FJ, 0, ZJ.length);
            let cJ = ZJ.length;
            for (const [ZJ, FJ] of XJ) JJ.set(ZJ, cJ), FJ && qJ(JJ, FJ, cJ, ZJ.length), cJ += ZJ.length;
            return JJ
          } {
            const JJ = new Array(AJ);
            for (let FJ = 0; FJ < ZJ.length; FJ++) JJ[FJ] = ZJ[FJ];
            FJ && qJ(JJ, FJ, 0, ZJ.length);
            let cJ = ZJ.length;
            for (const [ZJ, FJ] of XJ) {
              for (let FJ = 0; FJ < ZJ.length; FJ++) JJ[cJ + FJ] = ZJ[FJ];
              FJ && qJ(JJ, FJ, cJ, ZJ.length), cJ += ZJ.length
            }
            return JJ
          }
        }
        _validate() {
          if (!this.positions) throw new hJ.g("Positions are required", hJ.e.MeshInvalidPositionsError);
          const JJ = (JJ, cJ) => {
              const ZJ = (0, eJ.l)(JJ);
              if (cJ.length % ZJ !== 0) throw new Error("The " + JJ + "s array count must be a multiple of " + ZJ);
              return cJ.length / ZJ
            },
            cJ = JJ(eJ.n.PositionKind, this.positions),
            ZJ = (ZJ, FJ) => {
              const UJ = JJ(ZJ, FJ);
              if (UJ !== cJ) throw new Error("The " + ZJ + "s element count (" + UJ + ") does not match the positions count (" + cJ + ")")
            };
          this.normals && ZJ(eJ.n.NormalKind, this.normals), this.tangents && ZJ(eJ.n.TangentKind, this.tangents), this.uvs && ZJ(eJ.n.UVKind, this.uvs), this.uvs2 && ZJ(eJ.n.UV2Kind, this.uvs2), this.uvs3 && ZJ(eJ.n.UV3Kind, this.uvs3), this.uvs4 && ZJ(eJ.n.UV4Kind, this.uvs4), this.uvs5 && ZJ(eJ.n.UV5Kind, this.uvs5), this.uvs6 && ZJ(eJ.n.UV6Kind, this.uvs6), this.colors && ZJ(eJ.n.ColorKind, this.colors), this.matricesIndices && ZJ(eJ.n.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ZJ(eJ.n.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ZJ(eJ.n.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ZJ(eJ.n.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const cJ = this.serialize();
          return JJ.Parse(cJ)
        }
        serialize() {
          const JJ = {};
          if (this.positions && (JJ.positions = Array.from(this.positions)), this.normals && (JJ.normals = Array.from(this.normals)), this.tangents && (JJ.tangents = Array.from(this.tangents)), this.uvs && (JJ.uvs = Array.from(this.uvs)), this.uvs2 && (JJ.uvs2 = Array.from(this.uvs2)), this.uvs3 && (JJ.uvs3 = Array.from(this.uvs3)), this.uvs4 && (JJ.uvs4 = Array.from(this.uvs4)), this.uvs5 && (JJ.uvs5 = Array.from(this.uvs5)), this.uvs6 && (JJ.uvs6 = Array.from(this.uvs6)), this.colors && (JJ.colors = Array.from(this.colors), JJ.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (JJ.matricesIndices = Array.from(this.matricesIndices), JJ.matricesIndicesExpanded = !0), this.matricesWeights && (JJ.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (JJ.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), JJ.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (JJ.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), JJ.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            JJ.materialInfos = [];
            for (const cJ of this.materialInfos) {
              const ZJ = {
                indexStart: cJ.indexStart,
                indexCount: cJ.indexCount,
                materialIndex: cJ.materialIndex,
                verticesStart: cJ.verticesStart,
                verticesCount: cJ.verticesCount
              };
              JJ.materialInfos.push(ZJ)
            }
          }
          return JJ
        }
        static ExtractFromMesh(cJ, ZJ, FJ) {
          return JJ._ExtractFrom(cJ, ZJ, FJ)
        }
        static ExtractFromGeometry(cJ, ZJ, FJ) {
          return JJ._ExtractFrom(cJ, ZJ, FJ)
        }
        static _ExtractFrom(cJ, ZJ, FJ) {
          const UJ = new JJ;
          if (cJ.isVerticesDataPresent(eJ.n.PositionKind) && (UJ.positions = cJ.getVerticesData(eJ.n.PositionKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.NormalKind) && (UJ.normals = cJ.getVerticesData(eJ.n.NormalKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.TangentKind) && (UJ.tangents = cJ.getVerticesData(eJ.n.TangentKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UVKind) && (UJ.uvs = cJ.getVerticesData(eJ.n.UVKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UV2Kind) && (UJ.uvs2 = cJ.getVerticesData(eJ.n.UV2Kind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UV3Kind) && (UJ.uvs3 = cJ.getVerticesData(eJ.n.UV3Kind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UV4Kind) && (UJ.uvs4 = cJ.getVerticesData(eJ.n.UV4Kind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UV5Kind) && (UJ.uvs5 = cJ.getVerticesData(eJ.n.UV5Kind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.UV6Kind) && (UJ.uvs6 = cJ.getVerticesData(eJ.n.UV6Kind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.ColorKind)) {
            const JJ = cJ.geometry || cJ,
              XJ = JJ.getVertexBuffer(eJ.n.ColorKind),
              AJ = JJ.getVerticesData(eJ.n.ColorKind, ZJ, FJ);
            if (3 === XJ.getSize()) {
              const JJ = new Float32Array(4 * AJ.length / 3);
              for (let cJ = 0, ZJ = 0; cJ < AJ.length; cJ += 3, ZJ += 4) JJ[ZJ] = AJ[cJ], JJ[ZJ + 1] = AJ[cJ + 1], JJ[ZJ + 2] = AJ[cJ + 2], JJ[ZJ + 3] = 1;
              UJ.colors = JJ
            } else {
              if (4 !== XJ.getSize()) throw new Error(`Unexpected number of color components: ${XJ.getSize()}`);
              UJ.colors = AJ
            }
          }
          return cJ.isVerticesDataPresent(eJ.n.MatricesIndicesKind) && (UJ.matricesIndices = cJ.getVerticesData(eJ.n.MatricesIndicesKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.MatricesWeightsKind) && (UJ.matricesWeights = cJ.getVerticesData(eJ.n.MatricesWeightsKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.MatricesIndicesExtraKind) && (UJ.matricesIndicesExtra = cJ.getVerticesData(eJ.n.MatricesIndicesExtraKind, ZJ, FJ)), cJ.isVerticesDataPresent(eJ.n.MatricesWeightsExtraKind) && (UJ.matricesWeightsExtra = cJ.getVerticesData(eJ.n.MatricesWeightsExtraKind, ZJ, FJ)), UJ.indices = cJ.QXJ(ZJ, FJ), UJ
        }
        static CreateRibbon(JJ) {
          throw (0, XJ.m)("ribbonBuilder")
        }
        static CreateBox(JJ) {
          throw (0, XJ.m)("boxBuilder")
        }
        static CreateTiledBox(JJ) {
          throw (0, XJ.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(JJ) {
          throw (0, XJ.m)("tiledPlaneBuilder")
        }
        static CreateSphere(JJ) {
          throw (0, XJ.m)("sphereBuilder")
        }
        static CreateCylinder(JJ) {
          throw (0, XJ.m)("cylinderBuilder")
        }
        static CreateTorus(JJ) {
          throw (0, XJ.m)("torusBuilder")
        }
        static CreateLineSystem(JJ) {
          throw (0, XJ.m)("linesBuilder")
        }
        static CreateDashedLines(JJ) {
          throw (0, XJ.m)("linesBuilder")
        }
        static CreateGround(JJ) {
          throw (0, XJ.m)("groundBuilder")
        }
        static CreateTiledGround(JJ) {
          throw (0, XJ.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(JJ) {
          throw (0, XJ.m)("groundBuilder")
        }
        static CreatePlane(JJ) {
          throw (0, XJ.m)("planeBuilder")
        }
        static CreateDisc(JJ) {
          throw (0, XJ.m)("discBuilder")
        }
        static CreatePolygon(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
          throw (0, XJ.m)("polygonBuilder")
        }
        static CreateIcoSphere(JJ) {
          throw (0, XJ.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(JJ) {
          throw (0, XJ.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || UJ.j.Up();
          throw (0, XJ.m)("capsuleBuilder")
        }
        static CreateTorusKnot(JJ) {
          throw (0, XJ.m)("torusKnotBuilder")
        }
        static ComputeNormals(JJ, cJ, ZJ, FJ) {
          let eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ = !1,
            SJ = !1,
            IJ = !1,
            MJ = !1,
            bJ = 1,
            wJ = 0,
            WJ = null;
          FJ && (yJ = !!FJ.facetNormals, SJ = !!FJ.facetPositions, IJ = !!FJ.facetPartitioning, bJ = !0 === FJ.useRightHandedSystem ? -1 : 1, wJ = FJ.ratio || 0, MJ = !!FJ.depthSort, WJ = FJ.distanceTo, MJ && void 0 === WJ && (WJ = UJ.j.Zero()));
          let gJ = 0,
            HJ = 0,
            PJ = 0,
            kJ = 0;
          for (IJ && FJ && FJ.bbSize && (gJ = FJ.subDiv.X * wJ / FJ.bbSize.x, HJ = FJ.subDiv.Y * wJ / FJ.bbSize.y, PJ = FJ.subDiv.Z * wJ / FJ.bbSize.z, kJ = FJ.subDiv.max * FJ.subDiv.max, FJ.facetPartitioning.length = 0), eJ = 0; eJ < JJ.length; eJ++) ZJ[eJ] = 0;
          const pJ = cJ.length / 3 | 0;
          for (eJ = 0; eJ < pJ; eJ++) {
            if (fJ = 3 * cJ[3 * eJ], xJ = fJ + 1, rJ = fJ + 2, vJ = 3 * cJ[3 * eJ + 1], mJ = vJ + 1, QJ = vJ + 2, EJ = 3 * cJ[3 * eJ + 2], VJ = EJ + 1, KJ = EJ + 2, XJ = JJ[fJ] - JJ[vJ], AJ = JJ[xJ] - JJ[mJ], qJ = JJ[rJ] - JJ[QJ], jJ = JJ[EJ] - JJ[vJ], YJ = JJ[VJ] - JJ[mJ], hJ = JJ[KJ] - JJ[QJ], DJ = bJ * (AJ * hJ - qJ * YJ), sJ = bJ * (qJ * jJ - XJ * hJ), nJ = bJ * (XJ * YJ - AJ * jJ), GJ = Math.sqrt(DJ * DJ + sJ * sJ + nJ * nJ), GJ = 0 === GJ ? 1 : GJ, DJ /= GJ, sJ /= GJ, nJ /= GJ, yJ && FJ && (FJ.facetNormals[eJ].x = DJ, FJ.facetNormals[eJ].y = sJ, FJ.facetNormals[eJ].z = nJ), SJ && FJ && (FJ.facetPositions[eJ].x = (JJ[fJ] + JJ[vJ] + JJ[EJ]) / 3, FJ.facetPositions[eJ].y = (JJ[xJ] + JJ[mJ] + JJ[VJ]) / 3, FJ.facetPositions[eJ].z = (JJ[rJ] + JJ[QJ] + JJ[KJ]) / 3), IJ && FJ) {
              const cJ = Math.floor((FJ.facetPositions[eJ].x - FJ.bInfo.minimum.x * wJ) * gJ),
                ZJ = Math.floor((FJ.facetPositions[eJ].y - FJ.bInfo.minimum.y * wJ) * HJ),
                UJ = Math.floor((FJ.facetPositions[eJ].z - FJ.bInfo.minimum.z * wJ) * PJ),
                XJ = Math.floor((JJ[fJ] - FJ.bInfo.minimum.x * wJ) * gJ),
                AJ = Math.floor((JJ[xJ] - FJ.bInfo.minimum.y * wJ) * HJ),
                qJ = Math.floor((JJ[rJ] - FJ.bInfo.minimum.z * wJ) * PJ),
                jJ = Math.floor((JJ[vJ] - FJ.bInfo.minimum.x * wJ) * gJ),
                YJ = Math.floor((JJ[mJ] - FJ.bInfo.minimum.y * wJ) * HJ),
                hJ = Math.floor((JJ[QJ] - FJ.bInfo.minimum.z * wJ) * PJ),
                DJ = Math.floor((JJ[EJ] - FJ.bInfo.minimum.x * wJ) * gJ),
                sJ = Math.floor((JJ[VJ] - FJ.bInfo.minimum.y * wJ) * HJ),
                nJ = Math.floor((JJ[KJ] - FJ.bInfo.minimum.z * wJ) * PJ),
                GJ = XJ + FJ.subDiv.max * AJ + kJ * qJ,
                yJ = jJ + FJ.subDiv.max * YJ + kJ * hJ,
                SJ = DJ + FJ.subDiv.max * sJ + kJ * nJ,
                IJ = cJ + FJ.subDiv.max * ZJ + kJ * UJ;
              FJ.facetPartitioning[IJ] = FJ.facetPartitioning[IJ] ? FJ.facetPartitioning[IJ] : [], FJ.facetPartitioning[GJ] = FJ.facetPartitioning[GJ] ? FJ.facetPartitioning[GJ] : [], FJ.facetPartitioning[yJ] = FJ.facetPartitioning[yJ] ? FJ.facetPartitioning[yJ] : [], FJ.facetPartitioning[SJ] = FJ.facetPartitioning[SJ] ? FJ.facetPartitioning[SJ] : [], FJ.facetPartitioning[GJ].push(eJ), yJ != GJ && FJ.facetPartitioning[yJ].push(eJ), SJ != yJ && SJ != GJ && FJ.facetPartitioning[SJ].push(eJ), IJ != GJ && IJ != yJ && IJ != SJ && FJ.facetPartitioning[IJ].push(eJ)
            }
            if (MJ && FJ && FJ.facetPositions) {
              const JJ = FJ.depthSortedFacets[eJ];
              JJ.ind = 3 * eJ, JJ.sqDistance = UJ.j.DistanceSquared(FJ.facetPositions[eJ], WJ)
            }
            ZJ[fJ] += DJ, ZJ[xJ] += sJ, ZJ[rJ] += nJ, ZJ[vJ] += DJ, ZJ[mJ] += sJ, ZJ[QJ] += nJ, ZJ[EJ] += DJ, ZJ[VJ] += sJ, ZJ[KJ] += nJ
          }
          for (eJ = 0; eJ < ZJ.length / 3; eJ++) DJ = ZJ[3 * eJ], sJ = ZJ[3 * eJ + 1], nJ = ZJ[3 * eJ + 2], GJ = Math.sqrt(DJ * DJ + sJ * sJ + nJ * nJ), GJ = 0 === GJ ? 1 : GJ, DJ /= GJ, sJ /= GJ, nJ /= GJ, ZJ[3 * eJ] = DJ, ZJ[3 * eJ + 1] = sJ, ZJ[3 * eJ + 2] = nJ
        }
        static _ComputeSides(cJ, ZJ, FJ, eJ, XJ, AJ, qJ) {
          const jJ = FJ.length,
            YJ = eJ.length;
          let hJ, DJ;
          switch (cJ = cJ || JJ.DEFAULTSIDE) {
            case JJ.FRONTSIDE:
              break;
            case JJ.BACKSIDE:
              for (hJ = 0; hJ < jJ; hJ += 3) {
                const JJ = FJ[hJ];
                FJ[hJ] = FJ[hJ + 2], FJ[hJ + 2] = JJ
              }
              for (DJ = 0; DJ < YJ; DJ++) eJ[DJ] = -eJ[DJ];
              break;
            case JJ.DOUBLESIDE: {
              const JJ = ZJ.length,
                cJ = JJ / 3;
              for (let FJ = 0; FJ < JJ; FJ++) ZJ[JJ + FJ] = ZJ[FJ];
              for (hJ = 0; hJ < jJ; hJ += 3) FJ[hJ + jJ] = FJ[hJ + 2] + cJ, FJ[hJ + 1 + jJ] = FJ[hJ + 1] + cJ, FJ[hJ + 2 + jJ] = FJ[hJ] + cJ;
              for (DJ = 0; DJ < YJ; DJ++) eJ[YJ + DJ] = -eJ[DJ];
              const sJ = XJ.length;
              let nJ;
              for (nJ = 0; nJ < sJ; nJ++) XJ[nJ + sJ] = XJ[nJ];
              for (AJ = AJ || new UJ.k(0, 0, 1, 1), qJ = qJ || new UJ.k(0, 0, 1, 1), nJ = 0, hJ = 0; hJ < sJ / 2; hJ++) XJ[nJ] = AJ.x + (AJ.z - AJ.x) * XJ[nJ], XJ[nJ + 1] = AJ.y + (AJ.w - AJ.y) * XJ[nJ + 1], XJ[nJ + sJ] = qJ.x + (qJ.z - qJ.x) * XJ[nJ + sJ], XJ[nJ + sJ + 1] = qJ.y + (qJ.w - qJ.y) * XJ[nJ + sJ + 1], nJ += 2;
              break
            }
          }
        }
        static Parse(cJ) {
          const ZJ = new JJ,
            FJ = cJ.positions;
          FJ && ZJ.set(FJ, eJ.n.PositionKind);
          const UJ = cJ.normals;
          UJ && ZJ.set(UJ, eJ.n.NormalKind);
          const XJ = cJ.tangents;
          XJ && ZJ.set(XJ, eJ.n.TangentKind);
          const qJ = cJ.uvs;
          qJ && ZJ.set(qJ, eJ.n.UVKind);
          const jJ = cJ.uvs2;
          jJ && ZJ.set(jJ, eJ.n.UV2Kind);
          const YJ = cJ.uvs3;
          YJ && ZJ.set(YJ, eJ.n.UV3Kind);
          const hJ = cJ.uvs4;
          hJ && ZJ.set(hJ, eJ.n.UV4Kind);
          const DJ = cJ.uvs5;
          DJ && ZJ.set(DJ, eJ.n.UV5Kind);
          const nJ = cJ.uvs6;
          nJ && ZJ.set(nJ, eJ.n.UV6Kind);
          const GJ = cJ.colors;
          GJ && (ZJ.set(AJ.f.CheckColors4(GJ, FJ.length / 3), eJ.n.ColorKind), void 0 !== cJ.hasVertexAlpha && (ZJ.hasVertexAlpha = cJ.hasVertexAlpha));
          const fJ = cJ.matricesIndices;
          fJ && ZJ.set(fJ, eJ.n.MatricesIndicesKind);
          const xJ = cJ.matricesWeights;
          xJ && ZJ.set(xJ, eJ.n.MatricesWeightsKind);
          const rJ = cJ.indices;
          rJ && (ZJ.indices = rJ);
          const vJ = cJ.materialInfos;
          if (vJ) {
            ZJ.materialInfos = [];
            for (const JJ of vJ) {
              const cJ = new sJ;
              cJ.indexCount = JJ.indexCount, cJ.indexStart = JJ.indexStart, cJ.verticesCount = JJ.verticesCount, cJ.verticesStart = JJ.verticesStart, cJ.materialIndex = JJ.materialIndex, ZJ.materialInfos.push(cJ)
            }
          }
          return ZJ
        }
        static ImportVertexData(cJ, ZJ) {
          const FJ = JJ.Parse(cJ);
          ZJ.setAllVerticesData(FJ, cJ.updatable)
        }
      }, (() => {
        const UJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cJ = [jJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZJ = [jJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], nJ = [jJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], GJ = [jJ.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, FJ.d)(JJ, null, cJ, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: JJ => "_TransformVector3Coordinates" in JJ,
            get: JJ => JJ._TransformVector3Coordinates
          },
          metadata: UJ
        }, null, fJ), (0, FJ.d)(JJ, null, ZJ, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: JJ => "_TransformVector3Normals" in JJ,
            get: JJ => JJ._TransformVector3Normals
          },
          metadata: UJ
        }, null, fJ), (0, FJ.d)(JJ, null, nJ, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: JJ => "_TransformVector4Normals" in JJ,
            get: JJ => JJ._TransformVector4Normals
          },
          metadata: UJ
        }, null, fJ), (0, FJ.d)(JJ, null, GJ, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: JJ => "_FlipFaces" in JJ,
            get: JJ => JJ._FlipFaces
          },
          metadata: UJ
        }, null, fJ), UJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UJ
        })
      })(), JJ.FRONTSIDE = ((0, FJ.e)(JJ, fJ), 0), JJ.BACKSIDE = 1, JJ.DOUBLESIDE = 2, JJ.DEFAULTSIDE = 0, JJ._UniqueIdGenerator = 0, JJ
    })()
  },
  39250: (JJ, cJ, ZJ) => {
    var FJ = ZJ(36174),
      UJ = ZJ(37660),
      eJ = ZJ(39065),
      XJ = ZJ(39159),
      AJ = ZJ(38918);
    const qJ = "bakedVertexAnimationSettingsInstanced";

    function jJ(JJ) {
      const cJ = JJ.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return cJ instanceof Float32Array || cJ instanceof Uint16Array
    }

    function YJ(JJ, cJ, ZJ, FJ) {
      ZJ.X3(Number.POSITIVE_INFINITY), FJ.X3(Number.NEGATIVE_INFINITY);
      for (let UJ = 0; UJ < 3 * cJ; UJ += 3) {
        const cJ = JJ[UJ],
          eJ = JJ[UJ + 1],
          XJ = JJ[UJ + 2];
        cJ < ZJ.x && (ZJ.x = cJ), eJ < ZJ.y && (ZJ.y = eJ), XJ < ZJ.z && (ZJ.z = XJ), cJ > FJ.x && (FJ.x = cJ), eJ > FJ.y && (FJ.y = eJ), XJ > FJ.z && (FJ.z = XJ)
      }
    }

    function hJ(JJ, cJ, ZJ) {
      ZJ && (JJ.x -= JJ.x * ZJ.x + ZJ.y, JJ.y -= JJ.y * ZJ.x + ZJ.y, JJ.z -= JJ.z * ZJ.x + ZJ.y, cJ.x += cJ.x * ZJ.x + ZJ.y, cJ.y += cJ.y * ZJ.x + ZJ.y, cJ.z += cJ.z * ZJ.x + ZJ.y)
    }

    function DJ(JJ, cJ, ZJ, UJ, eJ) {
      const XJ = FJ.h.Pn[7],
        AJ = FJ.h.Pn[8];
      for (let qJ = 0; qJ < 2; ++qJ)
        for (let jJ = 0; jJ < 2; ++jJ)
          for (let YJ = 0; YJ < 2; ++YJ) XJ.set(qJ ? cJ.x : JJ.x, jJ ? cJ.y : JJ.y, YJ ? cJ.z : JJ.z), FJ.j.TransformCoordinatesToRef(XJ, ZJ, AJ), UJ.minimizeInPlace(AJ), eJ.maximizeInPlace(AJ)
    }

    function sJ(JJ, cJ, ZJ, UJ, eJ) {
      const XJ = FJ.h.Pn[7];
      for (let AJ = 0; AJ < 3 * cJ; AJ += 3) FJ.j.TransformCoordinatesFromFloatsToRef(JJ[AJ], JJ[AJ + 1], JJ[AJ + 2], ZJ, XJ), UJ.minimizeInPlace(XJ), eJ.maximizeInPlace(XJ)
    }
    let nJ = !1;
    nJ || (nJ = !0, XJ.d.prototype.thinInstanceAdd = function(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Qy().gn().getCaps().instancedArrays) return UJ.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(JJ) ? JJ.length : 1);
      const ZJ = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(JJ))
        for (let FJ = 0; FJ < JJ.length; ++FJ) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, JJ[FJ], FJ === JJ.length - 1 && cJ);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, JJ, cJ);
      return ZJ
    }, XJ.d.prototype.thinInstanceAddSelf = function() {
      let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(FJ.b.IdentityReadOnly, JJ)
    }, XJ.d.prototype.thinInstanceRegisterAttribute = function(JJ, cJ) {
      JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), this.removeVerticesData(JJ), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[JJ] = cJ, this._userThinInstanceBuffersStorage.sizes[JJ] = cJ * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[JJ] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[JJ]), this._userThinInstanceBuffersStorage.vertexBuffers[JJ] = new AJ.n(this.gn(), this._userThinInstanceBuffersStorage.data[JJ], JJ, !0, !1, cJ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[JJ])
    }, XJ.d.prototype.thinInstanceSetMatrixAt = function(JJ, cJ) {
      let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || JJ >= this._thinInstanceDataStorage.instancesCount) return !1;
      const FJ = this._thinInstanceDataStorage.matrixData;
      return cJ.copyToArray(FJ, 16 * JJ), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[JJ] = cJ), ZJ && (this.P5("matrix"), this.pn || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, XJ.d.prototype.thinInstanceSetAttributeAt = function(JJ, cJ, ZJ) {
      let FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[JJ] || cJ >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(JJ, 0), this._userThinInstanceBuffersStorage.data[JJ].set(ZJ, cJ * this._userThinInstanceBuffersStorage.strides[JJ]), FJ && this.P5(JJ), !0)
    }, Object.defineProperty(XJ.d.prototype, "f6", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(JJ) {
        const cJ = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        JJ <= (cJ ? cJ.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = JJ)
      },
      enumerable: !0,
      configurable: !0
    }), XJ.d.prototype._thinInstanceCreateMatrixBuffer = function(JJ, cJ) {
      let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const FJ = new AJ.d(this.gn(), cJ, !ZJ, 16, !1, !0);
      for (let UJ = 0; UJ < 4; UJ++) this.setVerticesBuffer(FJ.createVertexBuffer(JJ + UJ, 4 * UJ, 4));
      return FJ
    }, XJ.d.prototype.o2 = function(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ZJ = ZJ || 16, "matrix" === JJ) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = cJ ? cJ.length : 32 * ZJ, this._thinInstanceDataStorage.matrixData = cJ, this._thinInstanceDataStorage.worldMatrices = null, null !== cJ ? (this._thinInstanceDataStorage.instancesCount = cJ.length / ZJ, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", cJ, FJ), this.pn || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.pn || this.refreshBoundingInfo());
      else if ("previousMatrix" === JJ) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = cJ, null !== cJ && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", cJ, FJ));
      else if ("splatIndex" === JJ && cJ) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = cJ.length / ZJ, this._userThinInstanceBuffersStorage.data[JJ] = cJ, this._userThinInstanceBuffersStorage.strides[JJ] = ZJ, this._userThinInstanceBuffersStorage.sizes[JJ] = cJ.length;
        const FJ = new AJ.d(this.gn(), cJ, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = FJ;
        for (let cJ = 0; cJ < 4; cJ++) this.setVerticesBuffer(FJ.createVertexBuffer(JJ + cJ, 4 * cJ, 4))
      } else JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), null === cJ ? this._userThinInstanceBuffersStorage?.data[JJ] && (this.removeVerticesData(JJ), delete this._userThinInstanceBuffersStorage.data[JJ], delete this._userThinInstanceBuffersStorage.strides[JJ], delete this._userThinInstanceBuffersStorage.sizes[JJ], delete this._userThinInstanceBuffersStorage.vertexBuffers[JJ]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[JJ] = cJ, this._userThinInstanceBuffersStorage.strides[JJ] = ZJ, this._userThinInstanceBuffersStorage.sizes[JJ] = cJ.length, this._userThinInstanceBuffersStorage.vertexBuffers[JJ] = new AJ.n(this.gn(), cJ, JJ, !FJ, !1, ZJ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[JJ]))
    }, XJ.d.prototype.P5 = function(JJ) {
      "matrix" === JJ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(JJ), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === JJ ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(JJ), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === JJ ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[JJ], 0, this._thinInstanceDataStorage.instancesCount) : (JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[JJ] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[JJ].isUpdatable() && this._thinInstanceRecreateBuffer(JJ), this._userThinInstanceBuffersStorage.vertexBuffers[JJ].updateDirectly(this._userThinInstanceBuffersStorage.data[JJ], 0)))
    }, XJ.d.prototype.thinInstancePartialBufferUpdate = function(JJ, cJ, ZJ) {
      if ("matrix" === JJ) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof cJ ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ZJ * Float32Array.BYTES_PER_ELEMENT, 16 * cJ), 16 * ZJ) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(cJ, ZJ));
      else if (JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[JJ]) {
        const FJ = this._userThinInstanceBuffersStorage.vertexBuffers[JJ];
        if ("number" === typeof cJ) {
          const FJ = new Float32Array(this._userThinInstanceBuffersStorage.data[JJ].buffer, this._userThinInstanceBuffersStorage.data[JJ].byteOffset + ZJ * this._userThinInstanceBuffersStorage.strides[JJ] * Float32Array.BYTES_PER_ELEMENT, cJ * this._userThinInstanceBuffersStorage.strides[JJ]);
          this._userThinInstanceBuffersStorage.vertexBuffers[JJ].updateDirectly(FJ, ZJ * this._userThinInstanceBuffersStorage.strides[JJ])
        } else FJ.updateDirectly(cJ, ZJ)
      }
    }, XJ.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const JJ = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let cJ = 0; cJ < this._thinInstanceDataStorage.instancesCount; ++cJ) this._thinInstanceDataStorage.worldMatrices[cJ] = FJ.b.FromArray(JJ, 16 * cJ)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, XJ.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const XJ = this._thinInstanceDataStorage.boundingVectors;
      if (JJ || !this.rawBoundingInfo) {
        if (XJ.length = 0, UJ && function(JJ, cJ, ZJ) {
            const UJ = JJ._userThinInstanceBuffersStorage,
              XJ = UJ?.data[qJ],
              nJ = UJ?.strides[qJ];
            if (!XJ || !nJ || nJ < 4 || !jJ(JJ)) return !1;
            const GJ = JJ._thinInstanceDataStorage.matrixData;
            if (!GJ) return !1;
            const fJ = {},
              xJ = FJ.h.Vector4[0],
              rJ = FJ.h.Pn[1],
              vJ = FJ.h.Pn[2],
              mJ = FJ.h.Pn[3],
              QJ = FJ.h.Pn[4],
              EJ = FJ.h.Pn[5],
              VJ = FJ.h.Pn[6],
              KJ = FJ.h.Matrix[2],
              yJ = JJ.geometry ? JJ.geometry.boundingBias : null,
              SJ = JJ.getTotalVertices();
            rJ.X3(Number.POSITIVE_INFINITY), vJ.X3(Number.NEGATIVE_INFINITY), mJ.X3(Number.POSITIVE_INFINITY), QJ.X3(Number.NEGATIVE_INFINITY);
            for (let eJ = 0; eJ < JJ._thinInstanceDataStorage.instancesCount; ++eJ) {
              const cJ = eJ * nJ;
              xJ.set(XJ[cJ], XJ[cJ + 1], XJ[cJ + 2], XJ[cJ + 3]);
              const UJ = JJ._getData({
                applyMorph: ZJ,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: xJ,
                updatePositionsArray: !1,
                cache: fJ
              }, null, AJ.n.PositionKind);
              if (!UJ) return !1;
              YJ(UJ, SJ, EJ, VJ), hJ(EJ, VJ, yJ), rJ.minimizeInPlace(EJ), vJ.maximizeInPlace(VJ), FJ.b.FromArrayToRef(GJ, 16 * eJ, KJ), yJ ? DJ(EJ, VJ, KJ, mJ, QJ) : sJ(UJ, SJ, KJ, mJ, QJ)
            }
            return !(!isFinite(rJ.x) || !isFinite(mJ.x)) && (JJ.rM().reConstruct(mJ, QJ), JJ.rawBoundingInfo = new eJ.b(rJ, vJ), function(JJ, cJ) {
              JJ.length = 0;
              for (let ZJ = 0; ZJ < cJ.boundingBox.vectors.length; ++ZJ) JJ.push(cJ.boundingBox.vectors[ZJ].clone())
            }(cJ, JJ.rawBoundingInfo), JJ._updateBoundingInfo(), !0)
          }(this, XJ, ZJ)) return;
        UJ && this.bakedVertexAnimationManager?.isEnabled && jJ(this) ? this.refreshBoundingInfo({
          applySkeleton: cJ,
          applyMorph: ZJ,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(cJ, ZJ);
        const JJ = this.rM();
        this.rawBoundingInfo = new eJ.b(JJ.minimum, JJ.maximum)
      }
      const nJ = this.rM(),
        GJ = this._thinInstanceDataStorage.matrixData;
      if (0 === XJ.length)
        for (let FJ = 0; FJ < nJ.boundingBox.vectors.length; ++FJ) XJ.push(nJ.boundingBox.vectors[FJ].clone());
      FJ.h.Pn[0].X3(Number.POSITIVE_INFINITY), FJ.h.Pn[1].X3(Number.NEGATIVE_INFINITY);
      for (let eJ = 0; eJ < this._thinInstanceDataStorage.instancesCount; ++eJ) {
        FJ.b.FromArrayToRef(GJ, 16 * eJ, FJ.h.Matrix[0]);
        for (let JJ = 0; JJ < XJ.length; ++JJ) FJ.j.TransformCoordinatesToRef(XJ[JJ], FJ.h.Matrix[0], FJ.h.Pn[2]), FJ.h.Pn[0].minimizeInPlace(FJ.h.Pn[2]), FJ.h.Pn[1].maximizeInPlace(FJ.h.Pn[2])
      }
      nJ.reConstruct(FJ.h.Pn[0], FJ.h.Pn[1]), this._updateBoundingInfo()
    }, XJ.d.prototype._thinInstanceRecreateBuffer = function(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === JJ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, cJ)) : "previousMatrix" === JJ ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, cJ)) : (JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[JJ]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[JJ] = new AJ.n(this.gn(), this._userThinInstanceBuffersStorage.data[JJ], JJ, !cJ, !1, this._userThinInstanceBuffersStorage.strides[JJ], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[JJ]))
    }, XJ.d.prototype._thinInstanceUpdateBufferSize = function(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      JJ === AJ.n.ColorKind && (JJ = AJ.n.ColorInstanceKind);
      const ZJ = "matrix" === JJ;
      if (!ZJ && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[JJ])) return;
      const FJ = ZJ ? 16 : this._userThinInstanceBuffersStorage.strides[JJ],
        UJ = ZJ ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[JJ];
      let eJ = ZJ ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[JJ];
      const XJ = (this._thinInstanceDataStorage.instancesCount + cJ) * FJ;
      let qJ = UJ;
      for (; qJ < XJ;) qJ *= 2;
      if (!eJ || UJ != qJ) {
        if (eJ) {
          const JJ = new Float32Array(qJ);
          JJ.set(eJ, 0), eJ = JJ
        } else eJ = new Float32Array(qJ);
        ZJ ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", eJ, !1), this._thinInstanceDataStorage.matrixData = eJ, this._thinInstanceDataStorage.matrixBufferSize = qJ, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", eJ, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[JJ]?.dispose(), this._userThinInstanceBuffersStorage.data[JJ] = eJ, this._userThinInstanceBuffersStorage.sizes[JJ] = qJ, this._userThinInstanceBuffersStorage.vertexBuffers[JJ] = new AJ.n(this.gn(), eJ, JJ, !0, !1, FJ, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[JJ]))
      }
    }, XJ.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, XJ.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39210: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => rJ,
      d: () => GJ
    });
    var FJ, UJ, eJ, XJ, AJ = ZJ(38800),
      qJ = ZJ(38806),
      jJ = ZJ(38822),
      YJ = ZJ(36200),
      hJ = ZJ(36174),
      DJ = ZJ(38989),
      sJ = ZJ(36216),
      nJ = ZJ(38677);
    let GJ = (() => {
      var JJ;
      let cJ, ZJ, FJ, UJ, eJ, XJ, sJ, nJ, GJ, fJ = DJ.b,
        xJ = [],
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        yJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [],
        wJ = [],
        WJ = [],
        gJ = [],
        HJ = [],
        PJ = [];
      return JJ = class extends fJ {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(cJ) {
          this._billboardMode !== cJ && (this._billboardMode = cJ, this._cache.useBillboardPosition = 0 !== (this._billboardMode & JJ.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(JJ) {
          this._infiniteDistance !== JJ && (this._infiniteDistance = JJ)
        }
        constructor(cJ) {
          let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(cJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new hJ.j(0, 0, 1), this._up = new hJ.j(0, 1, 0), this._right = new hJ.j(1, 0, 0), this._position = (0, AJ.e)(this, xJ, hJ.j.Zero()), this._rotation = ((0, AJ.e)(this, rJ), (0, AJ.e)(this, vJ, hJ.j.Zero())), this._rotationQuaternion = ((0, AJ.e)(this, mJ), (0, AJ.e)(this, QJ, null)), this._scaling = ((0, AJ.e)(this, EJ), (0, AJ.e)(this, VJ, hJ.j.One())), this._transformToBoneReferal = ((0, AJ.e)(this, KJ), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, AJ.e)(this, yJ, JJ.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, AJ.e)(this, SJ), (0, AJ.e)(this, IJ, 1)), this._infiniteDistance = ((0, AJ.e)(this, MJ), (0, AJ.e)(this, bJ, !1)), this.ignoreNonUniformScaling = ((0, AJ.e)(this, wJ), (0, AJ.e)(this, WJ, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, AJ.e)(this, gJ), (0, AJ.e)(this, HJ, !1)), this._poseMatrix = ((0, AJ.e)(this, PJ), null), this._localMatrix = hJ.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = hJ.j.Zero(), this._absoluteScaling = hJ.j.Zero(), this._absoluteRotationQuaternion = hJ.e.Identity(), this._pivotMatrix = hJ.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new YJ.c, this._nonUniformScaling = !1, ZJ && this.Qy().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(JJ) {
          this._position = JJ, this._markAsDirtyInternal()
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
        set rotation(JJ) {
          this._rotation = JJ, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get GA() {
          return this._scaling
        }
        set GA(JJ) {
          this._scaling = JJ, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(JJ) {
          this._rotationQuaternion = JJ, JJ && this._rotation.X3(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return hJ.j.TransformNormalFromFloatsToRef(0, 0, this.Qy().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return hJ.j.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return hJ.j.TransformNormalFromFloatsToRef(this.Qy().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(JJ) {
          return this._poseMatrix ? (this._poseMatrix.rZJ(JJ), this) : (this._poseMatrix = JJ.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = hJ.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const cJ = this._cache;
          return this._billboardMode === cJ.billboardMode && this._billboardMode === JJ.BILLBOARDMODE_NONE && (!cJ.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const JJ = this._cache;
          JJ.localMatrixUpdated = !1, JJ.billboardMode = -1, JJ.infiniteDistance = !1, JJ.useBillboardPosition = !1
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
        setPreTransformMatrix(JJ) {
          return this.setPivotMatrix(JJ, !1)
        }
        setPivotMatrix(JJ) {
          let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.rZJ(JJ), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = cJ, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = hJ.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            cJ = arguments.length > 1 ? arguments[1] : void 0,
            ZJ = arguments.length > 2 ? arguments[2] : void 0;
          const FJ = this.clone("Clone of " + (this.name || this.id), JJ || this.parent, !0);
          FJ && ZJ && ZJ(this, FJ);
          for (const UJ of this.getChildTransformNodes(!0)) UJ.instantiateHierarchy(FJ, cJ, ZJ);
          return FJ
        }
        qS() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return JJ ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.X3(0), this._rotationQuaternion = this._rotationQuaternion || hJ.e.Identity(), JJ.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = JJ, this._absolutePosition.K9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get IXJ() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(JJ) {
          if (!JJ) return this;
          let cJ, ZJ, FJ;
          if (void 0 === JJ.x) {
            if (arguments.length < 3) return this;
            cJ = arguments[0], ZJ = arguments[1], FJ = arguments[2]
          } else cJ = JJ.x, ZJ = JJ.y, FJ = JJ.z;
          if (this.parent) {
            const JJ = hJ.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(JJ), hJ.j.TransformCoordinatesFromFloatsToRef(cJ, ZJ, FJ, JJ, this.position)
          } else this.position.x = cJ, this.position.y = ZJ, this.position.z = FJ;
          return this._absolutePosition.rZJ(JJ), this
        }
        setPositionWithLocalVector(JJ) {
          return this.computeWorldMatrix(), this.position = hJ.j.TransformNormal(JJ, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const JJ = hJ.h.Matrix[0];
          return this._localMatrix.invertToRef(JJ), hJ.j.TransformNormal(this.position, JJ)
        }
        locallyTranslate(JJ) {
          return this.computeWorldMatrix(!0), this.position = hJ.j.TransformCoordinates(JJ, this._localMatrix), this
        }
        lookAt(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const XJ = JJ._LookAtVectorCache,
            AJ = 0 === eJ ? this.position : this.getAbsolutePosition();
          if (cJ.subtractToRef(AJ, XJ), this.setDirection(XJ, ZJ, FJ, UJ), 1 === eJ && this.parent)
            if (this.rotationQuaternion) {
              const JJ = hJ.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(JJ);
              const cJ = hJ.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(cJ), cJ.invert(), JJ.multiplyToRef(cJ, JJ), this.rotationQuaternion.fromRotationMatrix(JJ)
            } else {
              const JJ = hJ.h.Quaternion[0];
              hJ.e.FromEulerVectorToRef(this.rotation, JJ);
              const cJ = hJ.h.Matrix[0];
              JJ.toRotationMatrix(cJ);
              const ZJ = hJ.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ZJ), ZJ.invert(), cJ.multiplyToRef(ZJ, cJ), JJ.fromRotationMatrix(cJ), JJ.toEulerAnglesToRef(this.rotation)
            } return this
        }
        yR(JJ) {
          const cJ = hJ.j.Zero();
          return this.getDirectionToRef(JJ, cJ), cJ
        }
        getDirectionToRef(JJ, cJ) {
          return hJ.j.TransformNormalToRef(JJ, this.getWorldMatrix(), cJ), this
        }
        setDirection(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const UJ = -Math.atan2(JJ.z, JJ.x) + Math.PI / 2,
            eJ = Math.sqrt(JJ.x * JJ.x + JJ.z * JJ.z),
            XJ = -Math.atan2(JJ.y, eJ);
          return this.rotationQuaternion ? hJ.e.RotationYawPitchRollToRef(UJ + cJ, XJ + ZJ, FJ, this.rotationQuaternion) : (this.rotation.x = XJ + ZJ, this.rotation.y = UJ + cJ, this.rotation.z = FJ), this
        }
        setPivotPoint(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Qy().getRenderId() && this.computeWorldMatrix(!0);
          const ZJ = this.getWorldMatrix();
          if (1 == cJ) {
            const cJ = hJ.h.Matrix[0];
            ZJ.invertToRef(cJ), JJ = hJ.j.TransformCoordinates(JJ, cJ)
          }
          return this.setPivotMatrix(hJ.b.Translation(-JJ.x, -JJ.y, -JJ.z), !0)
        }
        getPivotPoint() {
          const JJ = hJ.j.Zero();
          return this.getPivotPointToRef(JJ), JJ
        }
        getPivotPointToRef(JJ) {
          return JJ.x = -this._pivotMatrix.m[12], JJ.y = -this._pivotMatrix.m[13], JJ.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const JJ = hJ.j.Zero();
          return this.getAbsolutePivotPointToRef(JJ), JJ
        }
        getAbsolutePivotPointToRef(JJ) {
          return this.getPivotPointToRef(JJ), hJ.j.TransformCoordinatesToRef(JJ, this.getWorldMatrix(), JJ), this
        }
        ycJ(JJ) {
          if (this._isDirty) return this;
          if (this._children)
            for (const cJ of this._children) cJ.ycJ(JJ);
          return super.ycJ(JJ)
        }
        setParent(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!cJ && !this.parent) return this;
          const UJ = hJ.h.Quaternion[0],
            eJ = hJ.h.Pn[0],
            XJ = hJ.h.Pn[1],
            AJ = hJ.h.Matrix[1];
          hJ.b.IdentityToRef(AJ);
          const qJ = hJ.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let jJ = this.rotationQuaternion;
          return jJ || (jJ = JJ._TmpRotation, hJ.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, jJ)), hJ.b.ComposeToRef(this.GA, jJ, this.position, qJ), this.parent && qJ.multiplyToRef(this.parent.computeWorldMatrix(!0), qJ), cJ && (cJ.computeWorldMatrix(!0).invertToRef(AJ), qJ.multiplyToRef(AJ, qJ)), qJ.decompose(XJ, UJ, eJ, ZJ ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.rZJ(UJ) : UJ.toEulerAnglesToRef(this.rotation), this.GA.rZJ(XJ), this.position.rZJ(eJ), this.parent = cJ, FJ && this.setPivotMatrix(hJ.b.Identity()), this
        }
        addChild(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return JJ.setParent(this, cJ), this
        }
        removeChild(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return JJ.parent !== this || JJ.setParent(null, cJ), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(JJ) {
          return this._nonUniformScaling !== JJ && (this._nonUniformScaling = JJ, !0)
        }
        attachToBone(JJ, cJ) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = cJ, this.parent = JJ, JJ.getSkeleton().prepare(!0), JJ.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = JJ ? this._currentParentWhenAttachingToBone : null, this) : (JJ && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(cJ, ZJ, FJ) {
          let UJ;
          if (cJ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.X3(0)), FJ && 0 !== FJ) {
            if (this.parent) {
              const JJ = this.parent.getWorldMatrix(),
                FJ = hJ.h.Matrix[0];
              JJ.invertToRef(FJ), cJ = hJ.j.TransformNormal(cJ, FJ), JJ.determinant() < 0 && (ZJ *= -1)
            }
            UJ = hJ.e.RotationAxisToRef(cJ, ZJ, JJ._RotationAxisCache), UJ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else UJ = hJ.e.RotationAxisToRef(cJ, ZJ, JJ._RotationAxisCache), this.rotationQuaternion.multiplyToRef(UJ, this.rotationQuaternion);
          return this
        }
        rotateAround(JJ, cJ, ZJ) {
          cJ.normalize(), this.rotationQuaternion || (this.rotationQuaternion = hJ.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.X3(0));
          const FJ = hJ.h.Pn[0],
            UJ = hJ.h.Pn[1],
            eJ = hJ.h.Pn[2],
            XJ = hJ.h.Quaternion[0],
            AJ = hJ.h.Matrix[0],
            qJ = hJ.h.Matrix[1],
            jJ = hJ.h.Matrix[2],
            YJ = hJ.h.Matrix[3];
          return JJ.subtractToRef(this.position, FJ), hJ.b.TranslationToRef(FJ.x, FJ.y, FJ.z, AJ), hJ.b.TranslationToRef(-FJ.x, -FJ.y, -FJ.z, qJ), hJ.b.RotationAxisToRef(cJ, ZJ, jJ), qJ.multiplyToRef(jJ, YJ), YJ.multiplyToRef(AJ, YJ), YJ.decompose(UJ, XJ, eJ), this.position.addInPlace(eJ), XJ.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(JJ, cJ, ZJ) {
          const FJ = JJ.scale(cJ);
          if (ZJ && 0 !== ZJ) this.setAbsolutePosition(this.getAbsolutePosition().add(FJ));
          else {
            const JJ = this.getPositionExpressedInLocalSpace().add(FJ);
            this.setPositionWithLocalVector(JJ)
          }
          return this
        }
        addRotation(JJ, cJ, ZJ) {
          let FJ;
          this.rotationQuaternion ? FJ = this.rotationQuaternion : (FJ = hJ.h.Quaternion[1], hJ.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, FJ));
          const UJ = hJ.h.Quaternion[0];
          return hJ.e.RotationYawPitchRollToRef(cJ, JJ, ZJ, UJ), FJ.multiplyInPlace(UJ), this.rotationQuaternion || FJ.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== JJ.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const FJ = this.Qy().getRenderId();
          if (!this._isDirty && !cJ && (this._currentRenderId === FJ || this.isSynchronized())) return this._currentRenderId = FJ, this._worldMatrix;
          ZJ = ZJ || this.Qy().activeCamera, this._updateCache();
          const UJ = this._cache;
          UJ.pivotMatrixUpdated = !1, UJ.billboardMode = this.billboardMode, UJ.infiniteDistance = this.infiniteDistance, UJ.parent = this._parentNode, this._currentRenderId = FJ, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const eJ = this._getEffectiveParent(),
            XJ = JJ._TmpScaling;
          let AJ, qJ = this._position;
          if (this._infiniteDistance && !this.parent && ZJ) {
            const cJ = ZJ.getWorldMatrix().m;
            qJ = JJ._TmpTranslation, qJ.K9(this._position.x + cJ[12], this._position.y + cJ[13], this._position.z + cJ[14])
          }
          if (XJ.K9(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, AJ = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(hJ.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.K9(0, 0, 0))
            }
          } else AJ = JJ._TmpRotation, hJ.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, AJ);
          if (this._usePivotMatrix) {
            const JJ = hJ.h.Matrix[1];
            hJ.b.ScalingToRef(XJ.x, XJ.y, XJ.z, JJ);
            const cJ = hJ.h.Matrix[0];
            AJ.toRotationMatrix(cJ), this._pivotMatrix.multiplyToRef(JJ, hJ.h.Matrix[4]), hJ.h.Matrix[4].multiplyToRef(cJ, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(qJ.x, qJ.y, qJ.z)
          } else hJ.b.ComposeToRef(XJ, AJ, qJ, this._localMatrix);
          if (eJ && eJ.getWorldMatrix) {
            if (cJ && eJ.computeWorldMatrix(cJ), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const JJ = this.parent;
                JJ.getSkeleton().prepare(), JJ.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), hJ.h.Matrix[7])
              } else hJ.h.Matrix[7].rZJ(eJ.getWorldMatrix());
              const cJ = hJ.h.Pn[5],
                ZJ = hJ.h.Pn[6],
                FJ = hJ.h.Quaternion[0];
              hJ.h.Matrix[7].decompose(ZJ, FJ, cJ), hJ.b.ScalingToRef(ZJ.x, ZJ.y, ZJ.z, hJ.h.Matrix[7]), hJ.h.Matrix[7].setTranslation(cJ), JJ.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(FJ, cJ), this._localMatrix.setTranslation(cJ)), this._localMatrix.multiplyToRef(hJ.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const JJ = this.parent;
              JJ.getSkeleton().prepare(), this._localMatrix.multiplyToRef(JJ.getFinalMatrix(), hJ.h.Matrix[6]), hJ.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(eJ.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.rZJ(this._localMatrix);
          if (ZJ && this.billboardMode)
            if (UJ.useBillboardPosition) {
              const cJ = hJ.h.Pn[0];
              this._worldMatrix.getTranslationToRef(cJ);
              const FJ = ZJ.globalPosition;
              this._worldMatrix.invertToRef(hJ.h.Matrix[1]);
              const UJ = hJ.h.Pn[1];
              hJ.j.TransformCoordinatesToRef(FJ, hJ.h.Matrix[1], UJ), UJ.normalize();
              const eJ = -Math.atan2(UJ.z, UJ.x) + Math.PI / 2,
                XJ = Math.sqrt(UJ.x * UJ.x + UJ.z * UJ.z),
                AJ = -Math.atan2(UJ.y, XJ);
              if (hJ.e.RotationYawPitchRollToRef(eJ, AJ, 0, hJ.h.Quaternion[0]), (this.billboardMode & JJ.BILLBOARDMODE_ALL) !== JJ.BILLBOARDMODE_ALL) {
                const cJ = hJ.h.Pn[1];
                hJ.h.Quaternion[0].toEulerAnglesToRef(cJ), (this.billboardMode & JJ.BILLBOARDMODE_X) !== JJ.BILLBOARDMODE_X && (cJ.x = 0), (this.billboardMode & JJ.BILLBOARDMODE_Y) !== JJ.BILLBOARDMODE_Y && (cJ.y = 0), (this.billboardMode & JJ.BILLBOARDMODE_Z) !== JJ.BILLBOARDMODE_Z && (cJ.z = 0), hJ.b.RotationYawPitchRollToRef(cJ.y, cJ.x, cJ.z, hJ.h.Matrix[0])
              } else hJ.b.FromQuaternionToRef(hJ.h.Quaternion[0], hJ.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(hJ.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(hJ.h.Pn[0])
            } else {
              const cJ = hJ.h.Pn[0];
              this._worldMatrix.getTranslationToRef(cJ), hJ.h.Matrix[1].rZJ(ZJ.getViewMatrix());
              const FJ = this.Qy().useRightHandedSystem;
              if (FJ && hJ.h.Matrix[1].multiplyToRef(JJ._TmpRHRestore, hJ.h.Matrix[1]), hJ.h.Matrix[1].setTranslationFromFloats(0, 0, 0), hJ.h.Matrix[1].invertToRef(hJ.h.Matrix[0]), (this.billboardMode & JJ.BILLBOARDMODE_ALL) !== JJ.BILLBOARDMODE_ALL) {
                hJ.h.Matrix[0].decompose(void 0, hJ.h.Quaternion[0], void 0);
                const cJ = hJ.h.Pn[1];
                hJ.h.Quaternion[0].toEulerAnglesToRef(cJ), (this.billboardMode & JJ.BILLBOARDMODE_X) !== JJ.BILLBOARDMODE_X && (cJ.x = 0), (this.billboardMode & JJ.BILLBOARDMODE_Y) !== JJ.BILLBOARDMODE_Y && (cJ.y = 0), (this.billboardMode & JJ.BILLBOARDMODE_Z) !== JJ.BILLBOARDMODE_Z && (cJ.z = 0), FJ && (cJ.y += Math.PI), hJ.b.RotationYawPitchRollToRef(cJ.y, cJ.x, cJ.z, hJ.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(hJ.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(hJ.h.Pn[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : eJ && eJ._nonUniformScaling ? this._updateNonUniformScalingState(eJ._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.K9(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = hJ.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), JJ) {
            const JJ = this.getChildren();
            for (let cJ = 0; cJ < JJ.length; ++cJ) {
              const ZJ = JJ[cJ];
              if (ZJ) {
                ZJ.computeWorldMatrix();
                const JJ = hJ.h.Matrix[0];
                ZJ._localMatrix.multiplyToRef(this._localMatrix, JJ);
                const cJ = hJ.h.Quaternion[0];
                JJ.decompose(ZJ.GA, cJ, ZJ.position), ZJ.rotationQuaternion ? ZJ.rotationQuaternion.rZJ(cJ) : cJ.toEulerAnglesToRef(ZJ.rotation)
              }
            }
          }
          this.GA.K9(1, 1, 1), this.position.K9(0, 0, 0), this.rotation.K9(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = hJ.e.Identity()), this._worldMatrix = hJ.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(JJ) {
          return this.onAfterWorldMatrixUpdateObservable.add(JJ), this
        }
        unregisterAfterWorldMatrixUpdate(JJ) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(JJ), this
        }
        getPositionInCameraSpace() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return JJ || (JJ = this.Qy().activeCamera), hJ.j.TransformCoordinates(this.getAbsolutePosition(), JJ.getViewMatrix())
        }
        getDistanceToCamera() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return JJ || (JJ = this.Qy().activeCamera), this.getAbsolutePosition().subtract(JJ.globalPosition).length()
        }
        clone(cJ, ZJ, FJ) {
          const UJ = jJ.c.Clone((() => new JJ(cJ, this.Qy())), this);
          if (UJ.name = cJ, UJ.id = cJ, ZJ && (UJ.parent = ZJ), !FJ) {
            const JJ = this.getDescendants(!0);
            for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
              const FJ = JJ[ZJ];
              FJ.clone && FJ.clone(cJ + "." + FJ.name, UJ)
            }
          }
          return UJ
        }
        serialize(JJ) {
          const cJ = jJ.c.Serialize(this, JJ);
          return cJ.type = this.getClassName(), cJ.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(cJ), cJ.localMatrix = this.getPivotMatrix().JFJ(), cJ.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (cJ.qS = !0), jJ.c.AppendSerializedAnimations(this, cJ), cJ.ws = this.serializeAnimationRanges(), cJ
        }
        getChildTransformNodes(cJ, ZJ) {
          const FJ = [];
          return this._getDescendants(FJ, cJ, (cJ => (!ZJ || ZJ(cJ)) && cJ instanceof JJ)), FJ
        }
        dispose(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Qy().stopAnimation(this), this.Qy().removeTransformNode(this), this._parentContainer) {
            const JJ = this._parentContainer.transformNodes.indexOf(this);
            JJ > -1 && this._parentContainer.transformNodes.splice(JJ, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), JJ) {
            const JJ = this.getChildTransformNodes(!0);
            for (const cJ of JJ) cJ.parent = null, cJ.computeWorldMatrix(!0)
          }
          super.dispose(JJ, cJ)
        }
        normalizeToUnitCube() {
          let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZJ = arguments.length > 2 ? arguments[2] : void 0,
            FJ = null,
            UJ = null;
          cJ && (this.rotationQuaternion ? (UJ = this.rotationQuaternion.clone(), this.rotationQuaternion.K9(0, 0, 0, 1)) : this.rotation && (FJ = this.rotation.clone(), this.rotation.K9(0, 0, 0)));
          const eJ = this.getHierarchyBoundingVectors(JJ, ZJ),
            XJ = eJ.max.subtract(eJ.min),
            AJ = Math.max(XJ.x, XJ.y, XJ.z);
          if (0 === AJ) return this;
          const qJ = 1 / AJ;
          return this.GA.scaleInPlace(qJ), cJ && (this.rotationQuaternion && UJ ? this.rotationQuaternion.rZJ(UJ) : this.rotation && FJ && this.rotation.rZJ(FJ)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const jJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(fJ[Symbol.metadata] ?? null) : void 0;
        cJ = [(0, qJ.E)("position")], ZJ = [(0, qJ.E)("rotation")], FJ = [(0, qJ.y)("rotationQuaternion")], UJ = [(0, qJ.E)("GA")], eJ = [(0, qJ.F)("billboardMode")], XJ = [(0, qJ.F)()], sJ = [(0, qJ.F)("infiniteDistance")], nJ = [(0, qJ.F)()], GJ = [(0, qJ.F)()], (0, AJ.d)(null, null, cJ, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_position" in JJ,
            get: JJ => JJ._position,
            set: (JJ, cJ) => {
              JJ._position = cJ
            }
          },
          metadata: jJ
        }, xJ, rJ), (0, AJ.d)(null, null, ZJ, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_rotation" in JJ,
            get: JJ => JJ._rotation,
            set: (JJ, cJ) => {
              JJ._rotation = cJ
            }
          },
          metadata: jJ
        }, vJ, mJ), (0, AJ.d)(null, null, FJ, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_rotationQuaternion" in JJ,
            get: JJ => JJ._rotationQuaternion,
            set: (JJ, cJ) => {
              JJ._rotationQuaternion = cJ
            }
          },
          metadata: jJ
        }, QJ, EJ), (0, AJ.d)(null, null, UJ, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_scaling" in JJ,
            get: JJ => JJ._scaling,
            set: (JJ, cJ) => {
              JJ._scaling = cJ
            }
          },
          metadata: jJ
        }, VJ, KJ), (0, AJ.d)(null, null, eJ, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_billboardMode" in JJ,
            get: JJ => JJ._billboardMode,
            set: (JJ, cJ) => {
              JJ._billboardMode = cJ
            }
          },
          metadata: jJ
        }, yJ, SJ), (0, AJ.d)(null, null, XJ, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: JJ => "scalingDeterminant" in JJ,
            get: JJ => JJ.scalingDeterminant,
            set: (JJ, cJ) => {
              JJ.scalingDeterminant = cJ
            }
          },
          metadata: jJ
        }, IJ, MJ), (0, AJ.d)(null, null, sJ, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: JJ => "_infiniteDistance" in JJ,
            get: JJ => JJ._infiniteDistance,
            set: (JJ, cJ) => {
              JJ._infiniteDistance = cJ
            }
          },
          metadata: jJ
        }, bJ, wJ), (0, AJ.d)(null, null, nJ, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: JJ => "ignoreNonUniformScaling" in JJ,
            get: JJ => JJ.ignoreNonUniformScaling,
            set: (JJ, cJ) => {
              JJ.ignoreNonUniformScaling = cJ
            }
          },
          metadata: jJ
        }, WJ, gJ), (0, AJ.d)(null, null, GJ, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: JJ => "reIntegrateRotationIntoRotationQuaternion" in JJ,
            get: JJ => JJ.reIntegrateRotationIntoRotationQuaternion,
            set: (JJ, cJ) => {
              JJ.reIntegrateRotationIntoRotationQuaternion = cJ
            }
          },
          metadata: jJ
        }, HJ, PJ), jJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jJ
        })
      })(), JJ.BILLBOARDMODE_NONE = 0, JJ.BILLBOARDMODE_X = 1, JJ.BILLBOARDMODE_Y = 2, JJ.BILLBOARDMODE_Z = 4, JJ.BILLBOARDMODE_ALL = 7, JJ.BILLBOARDMODE_USE_POSITION = 128, JJ.BillboardUseParentOrientation = !1, JJ._TmpRotation = hJ.e.Zero(), JJ._TmpScaling = hJ.j.Zero(), JJ._TmpTranslation = hJ.j.Zero(), JJ._TmpRHRestore = hJ.b.Scaling(1, 1, -1), JJ._LookAtVectorCache = new hJ.j(0, 0, 0), JJ._RotationAxisCache = new hJ.e, JJ
    })();

    function fJ(JJ, cJ, ZJ) {
      const FJ = jJ.c.Parse((() => new GJ(JJ.name, cJ)), JJ, cJ, ZJ);
      if (JJ.localMatrix ? FJ.setPreTransformMatrix(hJ.b.FromArray(JJ.localMatrix)) : JJ.pivotMatrix && FJ.setPivotMatrix(hJ.b.FromArray(JJ.pivotMatrix)), FJ.GV(JJ.isEnabled), FJ._waitingParsedUniqueId = JJ.uniqueId, void 0 !== JJ.parentId && (FJ._waitingParentId = JJ.parentId), void 0 !== JJ.parentInstanceIndex && (FJ._waitingParentInstanceIndex = JJ.parentInstanceIndex), JJ.qS && (FJ._waitingFreezeWorldMatrix = JJ.qS), JJ.animations) {
        for (let cJ = 0; cJ < JJ.animations.length; cJ++) {
          const ZJ = JJ.animations[cJ],
            UJ = (0, sJ.e)("BABYLON.Animation");
          UJ && FJ.animations.push(UJ.Parse(ZJ))
        }
        DJ.b.ParseAnimationRanges(FJ, JJ, cJ)
      }
      return JJ.autoAnimate && cJ.beginAnimation(FJ, JJ.autoAnimateFrom, JJ.autoAnimateTo, JJ.autoAnimateLoop, JJ.autoAnimateSpeed || 1), FJ
    }
    let xJ = !1;

    function rJ() {
      xJ || (xJ = !0, GJ.Parse = fJ)
    }(FJ = GJ.prototype).iH ?? (FJ.iH = (0, nJ.l)("TransformNode", "iH")), (UJ = GJ.prototype).applyImpulse ?? (UJ.applyImpulse = (0, nJ.l)("TransformNode", "applyImpulse")), (eJ = GJ.prototype).applyAngularImpulse ?? (eJ.applyAngularImpulse = (0, nJ.l)("TransformNode", "applyAngularImpulse")), (XJ = GJ.prototype).applyTorque ?? (XJ.applyTorque = (0, nJ.l)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(GJ.prototype, "physicsBody") || Object.defineProperty(GJ.prototype, "physicsBody", (0, nJ.h)("TransformNode", "physicsBody"))
  },
  39163: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      try {
        const FJ = JJ.next();
        FJ.done ? cJ(FJ) : FJ.value ? FJ.value.then((() => {
          FJ.value = void 0, cJ(FJ)
        }), ZJ) : cJ(FJ)
      } catch (FJ) {
        ZJ(FJ)
      }
    }

    function UJ() {
      let JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ZJ, UJ, eJ) => {
        const XJ = performance.now();
        void 0 === JJ || XJ - JJ > cJ ? (JJ = XJ, setTimeout((() => {
          FJ(ZJ, UJ, eJ)
        }), 0)) : FJ(ZJ, UJ, eJ)
      }
    }

    function eJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = () => {
        let XJ;
        const AJ = JJ => {
          JJ.done ? ZJ(JJ.value) : void 0 === XJ ? XJ = !0 : eJ()
        };
        do {
          XJ = void 0, UJ && UJ.aborted ? FJ(new Error("Aborted")) : cJ(JJ, AJ, FJ), void 0 === XJ && (XJ = !1)
        } while (XJ)
      };
      eJ()
    }

    function XJ(JJ, cJ) {
      let ZJ;
      return eJ(JJ, FJ, (JJ => ZJ = JJ), (JJ => {
        throw JJ
      }), cJ), ZJ
    }
    async function AJ(JJ, cJ, ZJ) {
      return await new Promise(((FJ, UJ) => {
        eJ(JJ, cJ, FJ, UJ, ZJ)
      }))
    }

    function qJ(JJ, cJ) {
      return function() {
        return XJ(JJ(...arguments), cJ)
      }
    }
    ZJ.d(cJ, {
      c: () => UJ,
      g: () => qJ,
      k: () => AJ,
      m: () => XJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);
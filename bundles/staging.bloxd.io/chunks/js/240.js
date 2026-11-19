export const id = 240;
export const ids = [240];
export const modules = {
  39342: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => oY,
      f: () => mY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39231),
      RY = DY(36552),
      OY = DY(36524),
      gY = DY(39347),
      aY = DY(38040),
      vY = DY(36569),
      uY = DY(39029),
      sY = DY(37493),
      iY = DY(37105),
      yY = DY(39092),
      QY = DY(39144);
    let oY = (() => {
      var YY;
      let rY, DY, vY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY = gY.b,
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        bY = [],
        XY = [],
        qY = [],
        pY = [],
        kY = [],
        GY = [],
        xY = [],
        nY = [],
        PY = [],
        UY = [],
        LY = [],
        tY = [],
        Yr = [],
        rr = [],
        Dr = [],
        Fr = [],
        Ar = [];
      return YY = class extends ZY {
        get position() {
          return this._position
        }
        set position(YY) {
          this._position = YY
        }
        set upVector(YY) {
          this._upVector = YY
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let rY, DY;
          if (this.mode === YY.PERSPECTIVE_CAMERA) this.fovMode === YY.FOVMODE_VERTICAL_FIXED ? (DY = 2 * this.minZ * Math.tan(this.fov / 2), rY = this.ky().getAspectRatio(this) * DY) : (rY = 2 * this.minZ * Math.tan(this.fov / 2), DY = rY / this.ky().getAspectRatio(this));
          else {
            const YY = this.ky().getRenderWidth() / 2,
              FY = this.ky().getRenderHeight() / 2;
            rY = (this.orthoRight ?? YY) - (this.orthoLeft ?? -YY), DY = (this.orthoTop ?? FY) - (this.orthoBottom ?? -FY)
          }
          return rY * DY
        }
        set orthoLeft(YY) {
          this._orthoLeft = YY;
          for (const rY of this._rigCameras) rY.orthoLeft = YY
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(YY) {
          this._orthoRight = YY;
          for (const rY of this._rigCameras) rY.orthoRight = YY
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(YY) {
          this._orthoBottom = YY;
          for (const rY of this._rigCameras) rY.orthoBottom = YY
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(YY) {
          this._orthoTop = YY;
          for (const rY of this._rigCameras) rY.orthoTop = YY
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(rY / (2 * YY))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(YY) {
          this._baseInertia = YY
        }
        set mode(YY) {
          this._mode = YY;
          for (const rY of this._rigCameras) rY.mode = YY
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(rY, DY, AY) {
          let gY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, yY.c)(), super(rY, AY, !1), this.inputs = (0, FY.j)(this, CY), this._position = (0, FY.j)(this, fY, OY.r.Zero()), this._upVector = ((0, FY.j)(this, jY), (0, FY.j)(this, hY, OY.r.Up())), this.oblique = ((0, FY.j)(this, dY), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, FY.j)(this, JY, .8), this.projectionPlaneTilt = ((0, FY.j)(this, MY), (0, FY.j)(this, wY, 0)), this.minZ = ((0, FY.j)(this, bY), (0, FY.j)(this, XY, 1)), this.maxZ = ((0, FY.j)(this, qY), (0, FY.j)(this, pY, 1e4)), this._baseInertia = ((0, FY.j)(this, kY), .9), this._mode = YY.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new sY.b(0, 0, 1, 1), this.layerMask = (0, FY.j)(this, GY, 268435455), this.fovMode = ((0, FY.j)(this, xY), (0, FY.j)(this, nY, YY.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, FY.j)(this, PY), (0, FY.j)(this, UY, YY.RIG_MODE_NONE)), this.interaxialDistance = ((0, FY.j)(this, LY), (0, FY.j)(this, tY, void 0)), this.isStereoscopicSideBySide = ((0, FY.j)(this, Yr), (0, FY.j)(this, rr, void 0)), this.ignoreCameraMaxZ = ((0, FY.j)(this, Dr), (0, FY.j)(this, Fr, !1)), this.customRenderTargets = ((0, FY.j)(this, Ar), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new RY.e, this.onProjectionMatrixChangedObservable = new RY.e, this.onAfterCheckInputsObservable = new RY.e, this.onRestoreStateObservable = new RY.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new OY.e, this._postProcesses = new Array, this._activeMeshes = new IY.f(256), this._globalPosition = OY.r.Zero(), this._computedViewMatrix = OY.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = OY.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = OY.g.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.hT().defaultCameraLayerMask, this.hT().addCamera(this), gY && !this.hT().activeCamera && (this.hT().activeCamera = this), this.position = DY, this.renderPassId = this.hT().ky().createRenderPassId(`Camera ${rY}`)
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
          return "Co"
        }
        toString(YY) {
          let rY = "Name: " + this.name;
          if (rY += ", type: " + this.getClassName(), this.animations)
            for (let DY = 0; DY < this.animations.length; DY++) rY += ", animation[0]: " + this.animations[DY].toString(YY);
          return rY
        }
        applyVerticalCorrection() {
          const YY = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -YY.x : YY.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(YY) {
          return -1 !== this._activeMeshes.indexOf(YY)
        }
        isReady() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (YY)
            for (const rY of this._postProcesses)
              if (rY && !rY.isReady()) return !1;
          return super.isReady(YY)
        }
        _initCache() {
          super._initCache(), this._cache.position = new OY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new OY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(YY) {
          YY || super._updateCache(), this._cache.position.brY(this.position), this._cache.upVector.brY(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const rY = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let DY = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === rY;
          if (!DY) return !1;
          const FY = this.ky();
          return this.mode === YY.PERSPECTIVE_CAMERA ? DY = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === FY.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (DY = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === FY.getRenderWidth() && this._cache.renderHeight === FY.getRenderHeight(), this.oblique && (DY = DY && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), DY
        }
        attachControl(YY, rY) {}
        detachControl(YY) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== YY.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let YY = 0; YY < this._postProcesses.length; YY++)
            if (null !== this._postProcesses[YY]) return this._postProcesses[YY];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const YY = this._getFirstPostProcess();
          YY && YY.markTextureDirty();
          for (let rY = 0, DY = this._rigCameras.length; rY < DY; rY++) {
            const YY = this._rigCameras[rY],
              DY = YY._rigPostProcess;
            if (DY) {
              "pass" === DY.getEffectName() && (YY.isIntermediate = 0 === this._postProcesses.length), YY._postProcesses = this._postProcesses.slice(0).concat(DY), DY.markTextureDirty()
            } else YY._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !YY.isReusable() && this._postProcesses.indexOf(YY) > -1 ? (aY.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == rY || rY < 0 ? this._postProcesses.push(YY) : null === this._postProcesses[rY] ? this._postProcesses[rY] = YY : this._postProcesses.splice(rY, 0, YY), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.nYY(), this._postProcesses.indexOf(YY))
        }
        detachPostProcess(YY) {
          const rY = this._postProcesses.indexOf(YY); - 1 !== rY && (this._postProcesses[rY] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.nYY(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return OY.e.Identity()
        }
        getViewMatrix(YY) {
          return !YY && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.hT().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(YY) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== YY && (this._projectionMatrix = YY)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(rY) {
          if (this._doNotComputeProjectionMatrix || !rY && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const DY = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = DY, this._refreshFrustumPlanes = !0;
          const FY = this.ky(),
            AY = this.hT(),
            IY = FY.QDY;
          if (this.mode === YY.PERSPECTIVE_CAMERA) {
            let rY;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = FY.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), rY = AY.useRightHandedSystem ? OY.e.PerspectiveFovRHToRef : OY.e.PerspectiveFovLHToRef, rY(this.fov, FY.getAspectRatio(this), IY ? DY : this.minZ, IY ? this.minZ : DY, this._projectionMatrix, this.fovMode === YY.FOVMODE_VERTICAL_FIXED, FY.isNDCHalfZRange, this.projectionPlaneTilt, IY)
          } else {
            const YY = FY.getRenderWidth() / 2,
              rY = FY.getRenderHeight() / 2;
            AY.useRightHandedSystem ? this.oblique ? OY.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -YY, this.orthoRight ?? YY, this.orthoBottom ?? -rY, this.orthoTop ?? rY, IY ? DY : this.minZ, IY ? this.minZ : DY, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, FY.isNDCHalfZRange) : OY.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -YY, this.orthoRight ?? YY, this.orthoBottom ?? -rY, this.orthoTop ?? rY, IY ? DY : this.minZ, IY ? this.minZ : DY, this._projectionMatrix, FY.isNDCHalfZRange) : this.oblique ? OY.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -YY, this.orthoRight ?? YY, this.orthoBottom ?? -rY, this.orthoTop ?? rY, IY ? DY : this.minZ, IY ? this.minZ : DY, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, FY.isNDCHalfZRange) : OY.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -YY, this.orthoRight ?? YY, this.orthoBottom ?? -rY, this.orthoTop ?? rY, IY ? DY : this.minZ, IY ? this.minZ : DY, this._projectionMatrix, FY.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = FY.getRenderWidth(), this._cache.renderHeight = FY.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(YY) {
          return (this.radius || (this.target ? OY.r.Distance(this.position, this.target) : this.position.length())) + YY
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? iY.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = iY.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), rY && this.rigCameras.length > 0) {
            let rY = !1;
            for (const DY of this.rigCameras) DY._updateFrustumPlanes(), rY = rY || YY.isInFrustum(DY._frustumPlanes);
            return rY
          }
          return YY.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(YY) {
          return this._updateFrustumPlanes(), YY.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, uY.i)("Ray")
        }
        getForwardRayToRef(YY) {
          throw (0, uY.i)("Ray")
        }
        dispose(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.hT().stopAnimation(this), this.hT().removeCamera(this); this._rigCameras.length > 0;) {
            const YY = this._rigCameras.pop();
            YY && YY.dispose()
          }
          if (this._parentContainer) {
            const YY = this._parentContainer.cameras.indexOf(this);
            YY > -1 && this._parentContainer.cameras.splice(YY, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== YY.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let YY = this._postProcesses.length;
            for (; --YY >= 0;) {
              const rY = this._postProcesses[YY];
              rY && rY.dispose(this)
            }
          }
          let FY = this.customRenderTargets.length;
          for (; --FY >= 0;) this.customRenderTargets[FY].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.hT().ky().releaseRenderPassId(this.renderPassId), super.dispose(rY, DY)
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
        setCameraRigMode(rY, DY) {
          if (this.cameraRigMode !== rY) {
            for (; this._rigCameras.length > 0;) {
              const YY = this._rigCameras.pop();
              YY && YY.dispose()
            }
            if (this.cameraRigMode = rY, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = DY.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== YY.RIG_MODE_NONE) {
              const YY = this.createRigCamera(this.name + "_L", 0);
              YY && (YY._isLeftCamera = !0);
              const rY = this.createRigCamera(this.name + "_R", 1);
              rY && (rY._isRightCamera = !0), YY && rY && (this._rigCameras.push(YY), this._rigCameras.push(rY))
            }
            this._setRigMode(DY), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(YY) {}
        _getVRProjectionMatrix() {
          return OY.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ky().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(YY, rY) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[YY] = rY, "interaxialDistance" === YY && (this._cameraRigParams.stereoHalfAngle = rY / .0637 * (Math.PI / 180))
        }
        createRigCamera(YY, rY) {
          return null
        }
        _updateRigCameras() {
          for (let YY = 0; YY < this._rigCameras.length; YY++) this._rigCameras[YY].minZ = this.minZ, this._rigCameras[YY].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[YY].fov = this.fov, this._rigCameras[YY].upVector.brY(this.upVector);
          this.cameraRigMode === YY.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const YY = QY.b.Serialize(this);
          return YY.uniqueId = this.uniqueId, YY.type = this.getClassName(), this.parent && this.parent._serializeAsParent(YY), this.inputs && this.inputs.serialize(YY), QY.b.AppendSerializedAnimations(this, YY), YY.ws = this.serializeAnimationRanges(), YY.isEnabled = this.isEnabled(), YY
        }
        clone(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FY = QY.b.Clone(YY.GetConstructorFromName(this.getClassName(), rY, this.hT(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return FY.name = rY, FY.parent = DY, this.onClonedObservable.notifyObservers(FY), FY
        }
        zq(YY) {
          const rY = OY.r.Zero();
          return this.getDirectionToRef(YY, rY), rY
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(YY, rY) {
          OY.r.TransformNormalToRef(YY, this.getWorldMatrix(), rY)
        }
        static GetConstructorFromName(rY, DY, FY) {
          let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            IY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const RY = gY.b.Construct(rY, DY, FY, {
            interaxial_distance: AY,
            isStereoscopicSideBySide: IY
          });
          return RY || (() => YY._CreateDefaultParsedCamera(DY, FY))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let YY = this.hT().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (YY *= -1), YY
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, AY.J)("position")], DY = [(0, AY.J)("upVector")], vY = [(0, AY.M)()], oY = [(0, AY.M)()], WY = [(0, AY.M)()], EY = [(0, AY.M)()], mY = [(0, AY.M)()], VY = [(0, AY.M)()], SY = [(0, AY.M)()], lY = [(0, AY.M)()], TY = [(0, AY.M)()], eY = [(0, AY.M)()], NY = [(0, AY.M)()], BY = [(0, AY.M)()], cY = [(0, AY.M)()], KY = [(0, AY.M)()], HY = [(0, AY.M)()], zY = [(0, AY.M)()], (0, FY.i)(YY, null, vY, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: YY => "orthoLeft" in YY,
            get: YY => YY.orthoLeft
          },
          metadata: IY
        }, null, CY), (0, FY.i)(YY, null, oY, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: YY => "orthoRight" in YY,
            get: YY => YY.orthoRight
          },
          metadata: IY
        }, null, CY), (0, FY.i)(YY, null, WY, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: YY => "orthoBottom" in YY,
            get: YY => YY.orthoBottom
          },
          metadata: IY
        }, null, CY), (0, FY.i)(YY, null, EY, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: YY => "orthoTop" in YY,
            get: YY => YY.orthoTop
          },
          metadata: IY
        }, null, CY), (0, FY.i)(YY, null, TY, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: YY => "inertia" in YY,
            get: YY => YY.inertia
          },
          metadata: IY
        }, null, CY), (0, FY.i)(YY, null, eY, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: YY => "mode" in YY,
            get: YY => YY.mode
          },
          metadata: IY
        }, null, CY), (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: YY => "_position" in YY,
            get: YY => YY._position,
            set: (YY, rY) => {
              YY._position = rY
            }
          },
          metadata: IY
        }, fY, jY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: YY => "_upVector" in YY,
            get: YY => YY._upVector,
            set: (YY, rY) => {
              YY._upVector = rY
            }
          },
          metadata: IY
        }, hY, dY), (0, FY.i)(null, null, mY, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: YY => "fov" in YY,
            get: YY => YY.fov,
            set: (YY, rY) => {
              YY.fov = rY
            }
          },
          metadata: IY
        }, JY, MY), (0, FY.i)(null, null, VY, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: YY => "projectionPlaneTilt" in YY,
            get: YY => YY.projectionPlaneTilt,
            set: (YY, rY) => {
              YY.projectionPlaneTilt = rY
            }
          },
          metadata: IY
        }, wY, bY), (0, FY.i)(null, null, SY, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "minZ" in YY,
            get: YY => YY.minZ,
            set: (YY, rY) => {
              YY.minZ = rY
            }
          },
          metadata: IY
        }, XY, qY), (0, FY.i)(null, null, lY, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "maxZ" in YY,
            get: YY => YY.maxZ,
            set: (YY, rY) => {
              YY.maxZ = rY
            }
          },
          metadata: IY
        }, pY, kY), (0, FY.i)(null, null, NY, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: YY => "layerMask" in YY,
            get: YY => YY.layerMask,
            set: (YY, rY) => {
              YY.layerMask = rY
            }
          },
          metadata: IY
        }, GY, xY), (0, FY.i)(null, null, BY, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "fovMode" in YY,
            get: YY => YY.fovMode,
            set: (YY, rY) => {
              YY.fovMode = rY
            }
          },
          metadata: IY
        }, nY, PY), (0, FY.i)(null, null, cY, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "cameraRigMode" in YY,
            get: YY => YY.cameraRigMode,
            set: (YY, rY) => {
              YY.cameraRigMode = rY
            }
          },
          metadata: IY
        }, UY, LY), (0, FY.i)(null, null, KY, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: YY => "interaxialDistance" in YY,
            get: YY => YY.interaxialDistance,
            set: (YY, rY) => {
              YY.interaxialDistance = rY
            }
          },
          metadata: IY
        }, tY, Yr), (0, FY.i)(null, null, HY, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: YY => "isStereoscopicSideBySide" in YY,
            get: YY => YY.isStereoscopicSideBySide,
            set: (YY, rY) => {
              YY.isStereoscopicSideBySide = rY
            }
          },
          metadata: IY
        }, rr, Dr), (0, FY.i)(null, null, zY, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "ignoreCameraMaxZ" in YY,
            get: YY => YY.ignoreCameraMaxZ,
            set: (YY, rY) => {
              YY.ignoreCameraMaxZ = rY
            }
          },
          metadata: IY
        }, Fr, Ar), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY._CreateDefaultParsedCamera = (YY, rY) => {
        throw (0, uY.i)("UniversalCamera")
      }, YY.PERSPECTIVE_CAMERA = 0, YY.ORTHOGRAPHIC_CAMERA = 1, YY.FOVMODE_VERTICAL_FIXED = 0, YY.FOVMODE_HORIZONTAL_FIXED = 1, YY.RIG_MODE_NONE = 0, YY.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, YY.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, YY.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, YY.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, YY.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, YY.RIG_MODE_VR = 20, YY.RIG_MODE_CUSTOM = 22, YY.ForceAttachControlToAlwaysPreventDefault = !1, YY
    })();

    function WY(YY, rY) {
      const DY = YY.type,
        FY = oY.GetConstructorFromName(DY, YY.name, rY, YY.interaxial_distance, YY.isStereoscopicSideBySide),
        AY = QY.b.Parse(FY, YY, rY);
      if (void 0 !== YY.parentId && (AY._waitingParentId = YY.parentId), void 0 !== YY.parentInstanceIndex && (AY._waitingParentInstanceIndex = YY.parentInstanceIndex), AY.inputs && (AY.inputs.parse(YY), AY._setupInputs()), YY.upVector && (AY.upVector = OY.r.FromArray(YY.upVector)), AY.setPosition && (AY.position.p_(0, 0, 0), AY.setPosition(OY.r.FromArray(YY.position))), YY.target && AY.setTarget && AY.setTarget(OY.r.FromArray(YY.target)), YY.cameraRigMode) {
        const rY = YY.interaxial_distance ? {
          interaxialDistance: YY.interaxial_distance
        } : {};
        AY.setCameraRigMode(YY.cameraRigMode, rY)
      }
      if (YY.animations) {
        for (let rY = 0; rY < YY.animations.length; rY++) {
          const DY = YY.animations[rY],
            FY = (0, vY.e)("BABYLON.Animation");
          FY && AY.animations.push(FY.Parse(DY))
        }
        gY.b.ParseAnimationRanges(AY, YY, rY)
      }
      return YY.autoAnimate && rY.beginAnimation(AY, YY.autoAnimateFrom, YY.autoAnimateTo, YY.autoAnimateLoop, YY.autoAnimateSpeed || 1), void 0 !== YY.isEnabled && AY.mV(YY.isEnabled), AY
    }
    let EY = !1;

    function mY() {
      EY || (EY = !0, oY.Parse = WY)
    }
  },
  39358: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY) {
        this._cameraPosition = rY, this._behavior = DY, this.activeInput = !1, this.speed = 1, this.LJ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new FY.r, this.rotationAccumulatedPixels = new FY.r, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = FY.r.Zero(), this.rotationDeltaCurrentFrame = FY.r.Zero(), this._zoomVelocity = 0, this._panVelocity = new FY.r, this.referenceFrameRate = 60, this._rotationVelocity = new FY.r, this._prevFrameTimeMs = 0, this._scene = YY
      }
      computeCurrentFrameDeltas() {
        const YY = this._scene.ky().getDeltaTime(),
          rY = this._getEffectiveDeltaMs(YY);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.o3(0), this.rotationDeltaCurrentFrame.o3(0), this.zoomDeltaCurrentFrame = 0, void(YY > 0 && (this._prevFrameTimeMs = YY));
        this.panDeltaCurrentFrame.o3(0), this.rotationDeltaCurrentFrame.o3(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.p_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * rY, this.panDeltaCurrentFrame), this._rotationVelocity.p_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.p_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * rY, this._rotationVelocity.y * this.speed * this.rotationYSpeed * rY, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.LJ * this._zoomSpeedMultiplier) * rY, YY > 0 && (this._prevFrameTimeMs = YY), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.o3(0), this.rotationAccumulatedPixels.o3(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.o3(0), this.rotationAccumulatedPixels.o3(0)
      }
      resetPanVelocity() {
        this._panVelocity.o3(0), this.panAccumulatedPixels.o3(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(YY) {
        const rY = this._scene.ky().getDeltaTime(),
          DY = this._getEffectiveDeltaMs(rY),
          FY = 1e3 / this.referenceFrameRate;
        return Math.pow(YY, DY / FY)
      }
      getFrameIndependentInputScale(YY) {
        const rY = 1 - YY;
        if (rY <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(YY)) / rY
      }
      _getEffectiveDeltaMs(YY) {
        return YY > 0 ? YY : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(YY, rY, DY) {
        let FY = YY;
        const AY = this._scene.ky().getDeltaTime(),
          IY = this._getEffectiveDeltaMs(AY);
        if (0 === IY) return FY;
        const RY = this.getFrameIndependentDecay(DY);
        if (FY *= RY, 0 !== rY || this.activeInput) {
          const YY = 1 - DY;
          FY += rY / IY * (YY > 0 ? (1 - RY) / YY : 1)
        } else Math.abs(FY) < 1e-6 && (FY = 0);
        return FY
      }
    }
  },
  39364: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY) {
        this.inputMap = [], this.handlers = YY, this._createDefaultEntries = rY, this.resetInputMap()
      }
      resolveInteraction(YY, rY) {
        for (const DY of this.inputMap)
          if (DY.source === YY && this._entryMatches(DY, rY)) return DY;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(YY, rY, DY) {
        const FY = this.inputMap;
        for (let AY = 0; AY < FY.length; AY++) {
          const IY = FY[AY];
          if (IY.source === YY && IY.interaction === rY && this._entryConditionsMatch(IY, DY)) return IY
        }
      }
      getEntries(YY, rY, DY) {
        const FY = [],
          AY = this.inputMap;
        for (let IY = 0; IY < AY.length; IY++) {
          const RY = AY[IY];
          RY.source === YY && RY.interaction === rY && this._entryConditionsMatch(RY, DY) && FY.push(RY)
        }
        return FY
      }
      addEntry(YY) {
        const rY = this._entrySpecificity(YY);
        let DY = this.inputMap.length;
        for (let FY = 0; FY < this.inputMap.length; FY++)
          if (this._entrySpecificity(this.inputMap[FY]) < rY) {
            DY = FY;
            break
          } this.inputMap.splice(DY, 0, YY)
      }
      setInteraction(YY, rY, DY) {
        const FY = this.resolveInteraction(YY, rY);
        return FY && this._entryCoversAllConditionsOf(FY, rY) ? (FY.interaction = DY, !0) : (this.addEntry({
          source: YY,
          ...rY ?? {},
          interaction: DY
        }), !0)
      }
      _entryCoversAllConditionsOf(YY, rY) {
        if (!rY) return !0;
        const DY = YY;
        for (const FY of Object.keys(rY)) {
          const YY = rY[FY];
          if (void 0 !== YY)
            if ("modifiers" === FY) {
              const rY = DY.modifiers ?? {};
              for (const DY of Object.keys(YY))
                if (void 0 !== YY[DY] && void 0 === rY[DY]) return !1
            } else if (void 0 === DY[FY]) return !1
        }
        return !0
      }
      setInteractions(YY, rY, DY) {
        let FY = 0;
        const AY = this.inputMap;
        for (let IY = 0; IY < AY.length; IY++) {
          const RY = AY[IY];
          RY.source === YY && this._entryMatches(RY, rY) && (RY.interaction = DY, FY++)
        }
        return FY
      }
      _entryMatches(YY, rY) {
        switch (YY.source) {
          case "pointer":
            return (void 0 === YY.button || YY.button === rY?.button) && this._matchModifiers(YY.modifiers, rY?.modifiers);
          case "wheel":
            return this._matchModifiers(YY.modifiers, rY?.modifiers);
          case "touch":
            return void 0 === YY.touchCount || YY.touchCount === rY?.touchCount;
          case "keyboard":
            return (void 0 === YY.key || (Array.isArray(YY.key) ? -1 !== YY.key.indexOf(rY?.key ?? -1) : YY.key === rY?.key)) && this._matchModifiers(YY.modifiers, rY?.modifiers)
        }
      }
      _entryConditionsMatch(YY, rY) {
        if (!rY) return !0;
        switch (YY.source) {
          case "pointer":
            return (!("button" in rY) || YY.button === rY.button) && (!("modifiers" in rY) || this._entryModifiersMatch(YY.modifiers, rY.modifiers));
          case "wheel":
            return !("modifiers" in rY) || this._entryModifiersMatch(YY.modifiers, rY.modifiers);
          case "touch":
            return !("touchCount" in rY) || YY.touchCount === rY.touchCount;
          case "keyboard":
            if ("key" in rY) {
              if (void 0 === YY.key) return void 0 === rY.key;
              if (void 0 === rY.key || (Array.isArray(YY.key) ? -1 === YY.key.indexOf(rY.key) : YY.key !== rY.key)) return !1
            }
            return !("modifiers" in rY) || this._entryModifiersMatch(YY.modifiers, rY.modifiers)
        }
      }
      _entrySpecificity(YY) {
        let rY = 0;
        return "button" in YY && void 0 !== YY.button && rY++, "key" in YY && void 0 !== YY.key && rY++, "touchCount" in YY && void 0 !== YY.touchCount && rY++, "modifiers" in YY && YY.modifiers && rY++, rY
      }
      _matchModifiers(YY, rY) {
        return !YY || (void 0 === YY.ctrl || YY.ctrl === (rY?.ctrl ?? !1)) && ((void 0 === YY.shift || YY.shift === (rY?.shift ?? !1)) && (void 0 === YY.alt || YY.alt === (rY?.alt ?? !1)))
      }
      _entryModifiersMatch(YY, rY) {
        if (!rY) return !YY;
        return void 0 !== rY.ctrl || void 0 !== rY.shift || void 0 !== rY.alt ? (void 0 === rY.ctrl || YY?.ctrl === rY.ctrl) && ((void 0 === rY.shift || YY?.shift === rY.shift) && (void 0 === rY.alt || YY?.alt === rY.alt)) : !YY || void 0 === YY.ctrl && void 0 === YY.shift && void 0 === YY.alt
      }
    }
  },
  39337: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => WY,
      g: () => QY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39342),
      RY = DY(36524),
      OY = DY(36533),
      gY = DY(39355),
      aY = DY(39347),
      vY = DY(39358),
      uY = DY(39364);
    class sY extends vY.b {
      constructor(YY, rY, DY) {
        super(YY, rY, DY), this.input = new uY.c({
          translate: (YY, rY, DY) => {
            this.panAccumulatedPixels.x += YY, this.panAccumulatedPixels.y += rY, this.panAccumulatedPixels.z += DY
          },
          rotate: (YY, rY) => {
            this.rotationAccumulatedPixels.x += YY, this.rotationAccumulatedPixels.y += rY
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
    const iY = RY.e.Zero(),
      yY = RY.g.Identity();
    let QY = (() => {
        var YY;
        let rY, DY, aY, vY, uY = IY.e,
          QY = [],
          oY = [],
          WY = [],
          EY = [],
          mY = [],
          VY = [],
          SY = [],
          lY = [];
        return YY = class extends uY {
          get inertia() {
            return this._targetInertia
          }
          set inertia(YY) {
            this._targetInertia = YY, this.movement && (this.movement.panInertia = YY, this.movement.rotationInertia = YY)
          }
          constructor(YY, rY, DY) {
            super(YY, rY, DY, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new RY.r(0, 0, 0), this.cameraRotation = new RY.q(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, FY.j)(this, QY, !1), this.rotation = ((0, FY.j)(this, oY), (0, FY.j)(this, WY, void 0)), this.rotationQuaternion = (0, FY.j)(this, EY), this.speed = (0, FY.j)(this, mY, 2), this.noRotationConstraint = ((0, FY.j)(this, VY), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = OY.c, this._rotationEpsilon = OY.c, this.lockedTarget = (0, FY.j)(this, SY, null), this._currentTarget = ((0, FY.j)(this, lY), RY.r.Zero()), this._initialFocalDistance = 1, this._viewMatrix = RY.e.Zero(), this._cameraTransformMatrix = RY.e.Zero(), this._cameraRotationMatrix = RY.e.Zero(), this._transformedReferencePoint = RY.r.Zero(), this._deferredPositionUpdate = new RY.r, this._deferredRotationQuaternionUpdate = new RY.g, this._deferredRotationUpdate = new RY.r, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = RY.r.Forward(this.hT().useRightHandedSystem), this.rotation = new RY.r(0, this.hT().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new sY(this.hT(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(YY) {
            this.getWorldMatrix();
            const rY = RY.n.xy[0],
              DY = RY.n.xy[1];
            return DY.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(DY, rY), rY.scaleInPlace(YY), this.globalPosition.add(rY)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const YY = this.lockedTarget;
              YY.computeWorldMatrix().getTranslationToRef(YY.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.p_(0, 0, 0), this.cameraRotation.p_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new RY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new RY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new RY.g(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(YY) {
            YY || super._updateCache();
            const rY = this._getLockedTargetPosition();
            rY ? this._cache.lockedTarget ? this._cache.lockedTarget.brY(rY) : this._cache.lockedTarget = rY.clone() : this._cache.lockedTarget = null, this._cache.rotation.brY(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.brY(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const YY = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(YY) : !YY) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const YY = this.ky();
            return this.speed * Math.sqrt(YY.getDeltaTime() / (100 * YY.getFps()))
          }
          setTarget(YY) {
            this.upVector.normalize(), this._initialFocalDistance = YY.subtract(this.position).length(), this.position.z === YY.z && (this.position.z += OY.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.hT().useRightHandedSystem ? RY.e.LookAtRHToRef(this.position, YY, RY.r.UpReadOnly, iY) : RY.e.LookAtLHToRef(this.position, YY, RY.r.UpReadOnly, iY), iY.invert();
            const rY = this.rotationQuaternion || yY;
            RY.g.FromRotationMatrixToRef(iY, rY), rY.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(YY) {
            this.setTarget(YY)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(RY.n.Matrix[0]), RY.r.TransformNormalToRef(this.cameraDirection, RY.n.Matrix[0], RY.n.xy[0]), this._deferredPositionUpdate.addInPlace(RY.n.xy[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.brY(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.brY(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const YY = this.movement,
              rY = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            YY.panAccumulatedPixels.addInPlace(this.cameraDirection), YY.rotationAccumulatedPixels.x += this.cameraRotation.x, YY.rotationAccumulatedPixels.y += this.cameraRotation.y, YY.computeCurrentFrameDeltas(), this.cameraDirection.brY(YY.panDeltaCurrentFrame), this.cameraRotation.set(YY.rotationDeltaCurrentFrame.x, YY.rotationDeltaCurrentFrame.y);
            const DY = this.speed * this._panningEpsilon;
            !rY && Math.abs(this.cameraDirection.x) < DY && Math.abs(this.cameraDirection.y) < DY && Math.abs(this.cameraDirection.z) < DY && (this.cameraDirection.o3(0), YY.resetPanVelocity());
            const FY = this.invertRotation ? -this.inverseRotationSpeed : 1,
              AY = this._decideIfNeedsToMove(),
              IY = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.brY(this.rotation), this._deferredPositionUpdate.brY(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.brY(this.rotationQuaternion), AY && this._updatePosition(), IY) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * FY, this._deferredRotationUpdate.y += this.cameraRotation.y * FY, !this.noRotationConstraint) {
                const YY = 1.570796;
                this._deferredRotationUpdate.x > YY && (this._deferredRotationUpdate.x = YY), this._deferredRotationUpdate.x < -YY && (this._deferredRotationUpdate.x = -YY)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.brY(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (RY.g.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.brY(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.o3(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : RY.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return RY.r.TransformNormalToRef(RY.r.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), RY.r.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? gY.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (RY.g.FromEulerVectorToRef(this.rotation, yY), gY.b.Y.rotateByQuaternionToRef(yY, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(YY, rY, DY) {
            if (this.hT().useRightHandedSystem ? RY.e.LookAtRHToRef(YY, rY, DY, this._viewMatrix) : RY.e.LookAtLHToRef(YY, rY, DY, this._viewMatrix), this.parent) {
              const YY = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(YY, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(rY, DY) {
            if (this.cameraRigMode !== IY.e.RIG_MODE_NONE) {
              const DY = new YY(rY, this.position.clone(), this.hT());
              return DY.isRigCamera = !0, DY.rigParent = this, this.cameraRigMode === IY.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new RY.g), DY._cameraRigParams = {}, DY.rotationQuaternion = new RY.g), DY.mode = this.mode, DY.orthoLeft = this.orthoLeft, DY.orthoRight = this.orthoRight, DY.orthoTop = this.orthoTop, DY.orthoBottom = this.orthoBottom, DY
            }
            return null
          }
          _updateRigCameras() {
            const YY = this._rigCameras[0],
              rY = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case IY.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case IY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case IY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case IY.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case IY.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const DY = this.cameraRigMode === IY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  FY = this.cameraRigMode === IY.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * DY, YY), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * FY, rY);
                break
              }
              case IY.e.RIG_MODE_VR:
                YY.rotationQuaternion && rY.rotationQuaternion && this.rotationQuaternion ? (YY.rotationQuaternion.brY(this.rotationQuaternion), rY.rotationQuaternion.brY(this.rotationQuaternion)) : (YY.rotation.brY(this.rotation), rY.rotation.brY(this.rotation)), YY.position.brY(this.position), rY.position.brY(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(rY, DY) {
            this.getTarget().subtractToRef(this.position, YY._TargetFocalPoint), YY._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const FY = YY._TargetFocalPoint.addInPlace(this.position);
            RY.e.TranslationToRef(-FY.x, -FY.y, -FY.z, YY._TargetTransformMatrix), YY._TargetTransformMatrix.multiplyToRef(RY.e.RotationAxis(DY.upVector, rY), YY._RigCamTransformMatrix), RY.e.TranslationToRef(FY.x, FY.y, FY.z, YY._TargetTransformMatrix), YY._RigCamTransformMatrix.multiplyToRef(YY._TargetTransformMatrix, YY._RigCamTransformMatrix), RY.r.TransformCoordinatesToRef(this.position, YY._RigCamTransformMatrix, DY.position), DY.setTarget(FY)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(uY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.J)()], aY = [(0, AY.M)()], vY = [(0, AY.B)("lockedTargetId")], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: YY => "updateUpVectorFromRotation" in YY,
              get: YY => YY.updateUpVectorFromRotation,
              set: (YY, rY) => {
                YY.updateUpVectorFromRotation = rY
              }
            },
            metadata: IY
          }, QY, oY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: YY => "rotation" in YY,
              get: YY => YY.rotation,
              set: (YY, rY) => {
                YY.rotation = rY
              }
            },
            metadata: IY
          }, WY, EY), (0, FY.i)(null, null, aY, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: YY => "speed" in YY,
              get: YY => YY.speed,
              set: (YY, rY) => {
                YY.speed = rY
              }
            },
            metadata: IY
          }, mY, VY), (0, FY.i)(null, null, vY, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: YY => "lockedTarget" in YY,
              get: YY => YY.lockedTarget,
              set: (YY, rY) => {
                YY.lockedTarget = rY
              }
            },
            metadata: IY
          }, SY, lY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY._RigCamTransformMatrix = new RY.e, YY._TargetTransformMatrix = new RY.e, YY._TargetFocalPoint = new RY.r, YY
      })(),
      oY = !1;

    function WY() {
      oY || (oY = !0, aY.b.AddNodeConstructor("TargetCamera", ((YY, rY) => () => new QY(YY, RY.r.Zero(), rY))))
    }
  },
  39089: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY
    });
    var FY = DY(39041);
    let AY = !1;

    function IY() {
      AY || (AY = !0, FY.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, FY.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, FY.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, FY.d.prototype.getAspectRatio = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = YY.viewport;
        return this.getRenderWidth(rY) * DY.width / (this.getRenderHeight(rY) * DY.height)
      }, FY.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, FY.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39154: (YY, rY, DY) => {
    var FY = DY(39041),
      AY = DY(39160);
    let IY = !1;
    IY || (IY = !0, (0, AY.t)(), FY.d.prototype._loadFileAsync = async function(YY, rY, DY) {
      return await new Promise(((FY, AY) => {
        this._loadFile(YY, (YY => {
          FY(YY)
        }), void 0, rY, DY, ((YY, rY) => {
          AY(rY)
        }))
      }))
    })
  },
  39151: (YY, rY, DY) => {
    (0, DY(39092).c)()
  },
  39092: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(39041);
    let AY = !1;

    function IY() {
      AY || (AY = !0, FY.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, FY.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, FY.d.prototype.createRenderPassId = function(YY) {
        const rY = ++FY.d._RenderPassIdCounter;
        return this._renderPassNames[rY] = YY ?? "NONAME", rY
      }, FY.d.prototype.releaseRenderPassId = function(YY) {
        this._renderPassNames[YY] = void 0;
        for (let rY = 0; rY < this.scenes.length; ++rY) {
          const DY = this.scenes[rY];
          for (let rY = 0; rY < DY.meshes.length; ++rY) {
            const FY = DY.meshes[rY];
            if (FY._releaseRenderPassId(YY), FY.qm)
              for (let rY = 0; rY < FY.qm.length; ++rY) {
                FY.qm[rY]._removeDrawWrapper(YY)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(YY)
      })
    }
  },
  39192: (YY, rY, DY) => {
    var FY = DY(39200),
      AY = DY(39041);
    let IY = !1;
    IY || (IY = !0, AY.d.GetCompatibleTextureLoader = FY.b)
  },
  39098: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38982);
    let AY = !1;

    function IY() {
      AY || (AY = !0, FY.ThinEngine.prototype.setAlphaMode = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[DY] === YY) {
          if (!rY) {
            const rY = 0 === YY;
            this.depthCullingState.depthMask !== rY && (this.depthCullingState.depthMask = rY)
          }
          return
        }
        const FY = 0 === YY;
        this._alphaState.setAlphaBlend(!FY, DY), this._alphaState.setAlphaMode(YY, DY), rY || (this.depthCullingState.depthMask = FY), this._alphaMode[DY] = YY
      })
    }
  },
  39109: (YY, rY, DY) => {
    var FY = DY(38975),
      AY = DY(38040),
      IY = DY(38982),
      RY = DY(39116),
      OY = DY(39078);
    class gY extends RY.b {
      setDepthStencilTexture(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(YY, rY), !YY) return;
        const DY = this._engine,
          FY = this._context,
          AY = YY._hardwareTexture;
        if (AY && YY._autoMSAAManagement && this._MSAAFramebuffer) {
          const rY = DY._currentFramebuffer;
          DY._bindUnboundFramebuffer(this._MSAAFramebuffer), FY.framebufferRenderbuffer(FY.FRAMEBUFFER, (0, OY.d)(YY.format) ? FY.DEPTH_STENCIL_ATTACHMENT : FY.DEPTH_ATTACHMENT, FY.RENDERBUFFER, AY.getMSAARenderBuffer()), DY._bindUnboundFramebuffer(rY)
        }
      }
      constructor(YY, rY, DY, FY, AY) {
        super(YY, rY, DY, FY), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = AY
      }
      _cloneRenderTargetWrapper() {
        let YY;
        return this._colorTextureArray && this._depthStencilTextureArray ? (YY = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), YY.texture.isReady = !0) : YY = super._cloneRenderTargetWrapper(), YY
      }
      _swapRenderTargetWrapper(YY) {
        super._swapRenderTargetWrapper(YY), YY._framebuffer = this._framebuffer, YY._depthStencilBuffer = this._depthStencilBuffer, YY._MSAAFramebuffer = this._MSAAFramebuffer, YY._colorTextureArray = this._colorTextureArray, YY._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const YY = this._engine,
            rY = YY._currentFramebuffer,
            DY = this._context;
          YY._bindUnboundFramebuffer(this._framebuffer), DY.framebufferRenderbuffer(DY.FRAMEBUFFER, DY.DEPTH_STENCIL_ATTACHMENT, DY.RENDERBUFFER, null), DY.framebufferRenderbuffer(DY.FRAMEBUFFER, DY.DEPTH_ATTACHMENT, DY.RENDERBUFFER, null), DY.framebufferRenderbuffer(DY.FRAMEBUFFER, DY.STENCIL_ATTACHMENT, DY.RENDERBUFFER, null), YY._bindUnboundFramebuffer(rY), DY.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(YY, rY, DY, FY, AY, IY)
      }
      shareDepth(YY) {
        super.shareDepth(YY);
        const rY = this._context,
          DY = this._depthStencilBuffer,
          FY = YY._MSAAFramebuffer || YY._framebuffer,
          AY = this._engine;
        YY._depthStencilBuffer && YY._depthStencilBuffer !== DY && rY.deleteRenderbuffer(YY._depthStencilBuffer), YY._depthStencilBuffer = DY;
        const IY = YY._generateStencilBuffer ? rY.DEPTH_STENCIL_ATTACHMENT : rY.DEPTH_ATTACHMENT;
        AY._bindUnboundFramebuffer(FY), rY.framebufferRenderbuffer(rY.FRAMEBUFFER, IY, rY.RENDERBUFFER, DY), AY._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AY = YY._hardwareTexture;
        if (!AY) return;
        const IY = this._framebuffer,
          RY = this._engine,
          OY = RY._currentFramebuffer;
        let gY;
        if (RY._bindUnboundFramebuffer(IY), RY.VQ > 1) {
          const IY = this._context;
          gY = IY["COLOR_ATTACHMENT" + rY], YY.is2DArray || YY.is3D ? (DY = DY ?? this.layerIndices?.[rY] ?? 0, IY.framebufferTextureLayer(IY.FRAMEBUFFER, gY, AY.underlyingResource, FY, DY)) : YY.isCube ? (DY = DY ?? this.faceIndices?.[rY] ?? 0, IY.framebufferTexture2D(IY.FRAMEBUFFER, gY, IY.TEXTURE_CUBE_MAP_POSITIVE_X + DY, AY.underlyingResource, FY)) : IY.framebufferTexture2D(IY.FRAMEBUFFER, gY, IY.TEXTURE_2D, AY.underlyingResource, FY)
        } else {
          const YY = this._context;
          gY = YY["COLOR_ATTACHMENT" + rY + "_WEBGL"];
          const IY = void 0 !== DY ? YY.TEXTURE_CUBE_MAP_POSITIVE_X + DY : YY.TEXTURE_2D;
          YY.framebufferTexture2D(YY.FRAMEBUFFER, gY, IY, AY.underlyingResource, FY)
        }
        if (YY._autoMSAAManagement && this._MSAAFramebuffer) {
          const YY = this._context;
          RY._bindUnboundFramebuffer(this._MSAAFramebuffer), YY.framebufferRenderbuffer(YY.FRAMEBUFFER, gY, YY.RENDERBUFFER, AY.getMSAARenderBuffer())
        }
        RY._bindUnboundFramebuffer(OY)
      }
      setTexture(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(YY, rY, DY), this._bindTextureRenderTarget(YY, rY)
      }
      setLayerAndFaceIndices(YY, rY) {
        if (super.setLayerAndFaceIndices(YY, rY), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const DY = this._attachments?.length ?? this.textures.length;
        for (let FY = 0; FY < DY; FY++) {
          const YY = this.textures[FY];
          YY && (YY.is2DArray || YY.is3D ? this._bindTextureRenderTarget(YY, FY, this.layerIndices[FY]) : YY.isCube ? this._bindTextureRenderTarget(YY, FY, this.faceIndices[FY]) : this._bindTextureRenderTarget(YY, FY))
        }
      }
      setLayerAndFaceIndex() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(YY, rY, DY), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const FY = this.textures[YY];
        FY.is2DArray || FY.is3D ? this._bindTextureRenderTarget(this.textures[YY], YY, this.layerIndices[YY]) : FY.isCube && this._bindTextureRenderTarget(this.textures[YY], YY, this.faceIndices[YY])
      }
      resolveMSAATextures() {
        const YY = this._engine,
          rY = YY._currentFramebuffer;
        YY._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), YY._bindUnboundFramebuffer(rY)
      }
      dispose() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const rY = this._context;
        YY || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (rY.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (rY.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (rY.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(YY)
      }
    }
    let aY = !1;
    aY || (aY = !0, IY.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(YY, rY, DY) {
      const FY = new gY(YY, rY, DY, this, this._gl);
      return this._renderTargetWrapperCache.push(FY), FY
    }, IY.ThinEngine.prototype.createRenderTargetTexture = function(YY, rY) {
      const DY = this._createHardwareRenderTargetWrapper(!1, !1, YY);
      let FY, AY, IY = !0,
        RY = !1,
        OY = !1,
        gY = 1;
      void 0 !== rY && "object" === typeof rY && (IY = rY.generateDepthBuffer ?? !0, RY = !!rY.generateStencilBuffer, OY = !!rY.noColorAttachment, FY = rY.colorAttachment, gY = rY.samples ?? 1, AY = rY.label);
      const aY = FY || (OY ? null : this._createInternalTexture(YY, rY, !0, 5)),
        vY = YY.width || YY,
        uY = YY.height || YY,
        sY = this._currentFramebuffer,
        iY = this._gl,
        yY = iY.createFramebuffer();
      if (this._bindUnboundFramebuffer(yY), DY._depthStencilBuffer = this._setupFramebufferDepthAttachments(RY, IY, vY, uY), !aY || aY.is2DArray || aY.is3D || iY.framebufferTexture2D(iY.FRAMEBUFFER, iY.COLOR_ATTACHMENT0, iY.TEXTURE_2D, aY._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(sY), DY.label = AY ?? "RenderTargetWrapper", DY._framebuffer = yY, DY._generateDepthBuffer = IY, DY._generateStencilBuffer = RY, DY.setTextures(aY), FY) {
        if (DY._samples = FY.samples, FY.samples > 1) {
          const YY = FY._hardwareTexture.getMSAARenderBuffer(0);
          DY._MSAAFramebuffer = iY.createFramebuffer(), this._bindUnboundFramebuffer(DY._MSAAFramebuffer), iY.framebufferRenderbuffer(iY.FRAMEBUFFER, iY.COLOR_ATTACHMENT0, iY.RENDERBUFFER, YY), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(DY, gY);
      return DY
    }, IY.ThinEngine.prototype._createDepthStencilTexture = function(YY, rY, DY) {
      const IY = this._gl,
        RY = YY.layers || 0,
        gY = YY.depth || 0;
      let aY = IY.TEXTURE_2D;
      0 !== RY ? aY = IY.TEXTURE_2D_ARRAY : 0 !== gY && (aY = IY.TEXTURE_3D);
      const vY = new FY.c(this, 12);
      if (vY.label = rY.label, !this._caps.depthTextureExtension) return AY.d.Error("Depth texture is not supported by your browser or hardware."), vY;
      const uY = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...rY
      };
      if (this._bindTextureDirectly(aY, vY, !0), this._setupDepthStencilTexture(vY, YY, 0 !== uY.comparisonFunction && uY.bilinearFiltering, uY.comparisonFunction, uY.samples), void 0 !== uY.depthTextureFormat) {
        if (15 !== uY.depthTextureFormat && 16 !== uY.depthTextureFormat && 17 !== uY.depthTextureFormat && 13 !== uY.depthTextureFormat && 14 !== uY.depthTextureFormat && 18 !== uY.depthTextureFormat) return AY.d.Error(`Depth texture ${uY.depthTextureFormat} format is not supported.`), vY;
        vY.format = uY.depthTextureFormat
      } else vY.format = uY.generateStencil ? 13 : 16;
      const sY = (0, OY.d)(vY.format),
        iY = this._getWebGLTextureTypeFromDepthTextureFormat(vY.format),
        yY = sY ? IY.DEPTH_STENCIL : IY.DEPTH_COMPONENT,
        QY = this._getInternalFormatFromDepthTextureFormat(vY.format, !0, sY);
      return vY.is2DArray ? IY.texImage3D(aY, 0, QY, vY.width, vY.height, RY, 0, yY, iY, null) : vY.is3D ? IY.texImage3D(aY, 0, QY, vY.width, vY.height, gY, 0, yY, iY, null) : IY.texImage2D(aY, 0, QY, vY.width, vY.height, 0, yY, iY, null), this._bindTextureDirectly(aY, null), this._internalTexturesCache.push(vY), DY._depthStencilBuffer && (IY.deleteRenderbuffer(DY._depthStencilBuffer), DY._depthStencilBuffer = null), this._bindUnboundFramebuffer(DY._MSAAFramebuffer ?? DY._framebuffer), DY._generateStencilBuffer = sY, DY._depthStencilTextureWithStencil = sY, DY._depthStencilBuffer = this._setupFramebufferDepthAttachments(DY._generateStencilBuffer, DY._generateDepthBuffer, DY.width, DY.height, DY.samples, vY.format), this._bindUnboundFramebuffer(null), vY
    }, IY.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(YY, rY) {
      if (this.VQ < 2 || !YY) return 1;
      if (YY.samples === rY) return rY;
      const DY = this._gl;
      rY = Math.min(rY, this.getCaps().maxMSAASamples), YY._depthStencilBuffer && (DY.deleteRenderbuffer(YY._depthStencilBuffer), YY._depthStencilBuffer = null), YY._MSAAFramebuffer && (DY.deleteFramebuffer(YY._MSAAFramebuffer), YY._MSAAFramebuffer = null);
      const FY = YY.texture?._hardwareTexture;
      if (FY?.releaseMSAARenderBuffers(), YY.texture && rY > 1 && "function" === typeof DY.renderbufferStorageMultisample) {
        const AY = DY.createFramebuffer();
        if (!AY) throw new Error("Unable to create multi sampled framebuffer");
        YY._MSAAFramebuffer = AY, this._bindUnboundFramebuffer(YY._MSAAFramebuffer);
        const IY = this._createRenderBuffer(YY.texture.width, YY.texture.height, rY, -1, this._getRGBABufferInternalSizedFormat(YY.texture.type, YY.texture.format, YY.texture._useSRGBBuffer), DY.COLOR_ATTACHMENT0, !1);
        if (!IY) throw new Error("Unable to create multi sampled framebuffer");
        FY?.addMSAARenderBuffer(IY)
      }
      this._bindUnboundFramebuffer(YY._MSAAFramebuffer ?? YY._framebuffer), YY.texture && (YY.texture.samples = rY), YY._samples = rY;
      const AY = YY._depthStencilTexture ? YY._depthStencilTexture.format : void 0;
      return YY._depthStencilBuffer = this._setupFramebufferDepthAttachments(YY._generateStencilBuffer, YY._generateDepthBuffer, YY.width, YY.height, rY, AY), this._bindUnboundFramebuffer(null), rY
    }, IY.ThinEngine.prototype._setupDepthStencilTexture = function(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const IY = rY.width ?? rY,
        RY = rY.height ?? rY,
        OY = rY.layers || 0,
        gY = rY.depth || 0;
      YY.baseWidth = IY, YY.baseHeight = RY, YY.width = IY, YY.height = RY, YY.is2DArray = OY > 0, YY.depth = OY || gY, YY.isReady = !0, YY.samples = AY, YY.generateMipMaps = !1, YY.samplingMode = DY ? 2 : 1, YY.type = 0, YY._comparisonFunction = FY;
      const aY = this._gl,
        vY = this._getTextureTarget(YY),
        uY = this._getSamplingParameters(YY.samplingMode, !1);
      aY.texParameteri(vY, aY.TEXTURE_MAG_FILTER, uY.mag), aY.texParameteri(vY, aY.TEXTURE_MIN_FILTER, uY.min), aY.texParameteri(vY, aY.TEXTURE_WRAP_S, aY.CLAMP_TO_EDGE), aY.texParameteri(vY, aY.TEXTURE_WRAP_T, aY.CLAMP_TO_EDGE), this.VQ > 1 && (0 === FY ? (aY.texParameteri(vY, aY.TEXTURE_COMPARE_FUNC, 515), aY.texParameteri(vY, aY.TEXTURE_COMPARE_MODE, aY.NONE)) : (aY.texParameteri(vY, aY.TEXTURE_COMPARE_FUNC, FY), aY.texParameteri(vY, aY.TEXTURE_COMPARE_MODE, aY.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38965: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.e
    });
    var FY = DY(38969);
    (0, DY(39098).c)();
    var AY = DY(38982);
    let IY = !1;
    ! function() {
      if (IY) return;
      IY = !0;
      const YY = new WeakMap,
        rY = new WeakMap,
        DY = new WeakMap,
        FY = new WeakMap;
      AY.ThinEngine.prototype.getAlphaToCoverage = function() {
        return YY.get(this) ?? !1
      }, AY.ThinEngine.prototype.setAlphaToCoverage = function(DY) {
        (YY.get(this) !== DY || this._gl && rY.get(this) !== this._gl) && (YY.set(this, DY), this._gl && (DY ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), rY.set(this, this._gl)))
      }, Object.defineProperty(AY.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (FY.get(this) !== this._gl && (DY.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), FY.set(this, this._gl)), DY.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var RY = DY(38975),
      OY = DY(38040),
      gY = DY(39065);
    let aY = !1;
    ! function() {
      function YY(YY, rY, DY, FY) {
        let AY, IY = 1;
        1 === FY ? AY = new Float32Array(rY * DY * 4) : 2 === FY ? (AY = new Uint16Array(rY * DY * 4), IY = 15360) : AY = 7 === FY ? new Uint32Array(rY * DY * 4) : new Uint8Array(rY * DY * 4);
        for (let RY = 0; RY < rY; RY++)
          for (let FY = 0; FY < DY; FY++) {
            const DY = 3 * (FY * rY + RY),
              OY = 4 * (FY * rY + RY);
            AY[OY + 0] = YY[DY + 0], AY[OY + 1] = YY[DY + 1], AY[OY + 2] = YY[DY + 2], AY[OY + 3] = IY
          }
        return AY
      }

      function rY(YY) {
        return function(rY, DY, FY, AY, IY, OY, gY, aY) {
          let vY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            uY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const sY = YY ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            iY = YY ? 10 : 11,
            yY = new RY.c(this, iY);
          yY.baseWidth = DY, yY.baseHeight = FY, yY.baseDepth = AY, yY.width = DY, yY.height = FY, yY.depth = AY, yY.format = IY, yY.type = uY, yY.generateMipMaps = OY, yY.samplingMode = aY, YY ? yY.is3D = !0 : yY.is2DArray = !0, this._doNotHandleContextLost || (yY._bufferView = rY), YY ? this.updateRawTexture3D(yY, rY, IY, gY, vY, uY) : this.updateRawTexture2DArray(yY, rY, IY, gY, vY, uY), this._bindTextureDirectly(sY, yY, !0);
          const QY = this._getSamplingParameters(aY, OY);
          return this._gl.texParameteri(sY, this._gl.TEXTURE_MAG_FILTER, QY.mag), this._gl.texParameteri(sY, this._gl.TEXTURE_MIN_FILTER, QY.min), OY && this._gl.generateMipmap(sY), this._bindTextureDirectly(sY, null), this._internalTexturesCache.push(yY), yY
        }
      }

      function DY(YY) {
        return function(rY, DY, FY, AY) {
          let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const OY = YY ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            gY = this._getWebGLTextureType(RY),
            aY = this._getInternalFormat(FY),
            vY = this._getRGBABufferInternalSizedFormat(RY, FY);
          this._bindTextureDirectly(OY, rY, !0), this._unpackFlipY(void 0 === AY || !!AY), this._doNotHandleContextLost || (rY._bufferView = DY, rY.format = FY, rY.invertY = AY, rY._compression = IY), rY.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), IY && DY ? this._gl.compressedTexImage3D(OY, 0, this.getCaps().s3tc[IY], rY.width, rY.height, rY.depth, 0, DY) : this._gl.texImage3D(OY, 0, vY, rY.width, rY.height, rY.depth, 0, aY, gY, DY), rY.generateMipMaps && this._gl.generateMipmap(OY), this._bindTextureDirectly(OY, null), rY.isReady = !0
        }
      }
      aY || (aY = !0, AY.ThinEngine.prototype.updateRawTexture = function(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!YY) return;
        const OY = this._getRGBABufferInternalSizedFormat(IY, DY, RY),
          gY = this._getInternalFormat(DY),
          aY = this._getWebGLTextureType(IY);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, YY, !0), this._unpackFlipY(void 0 === FY || !!FY), this._doNotHandleContextLost || (YY._bufferView = rY, YY.format = DY, YY.type = IY, YY.invertY = FY, YY._compression = AY), YY.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), AY && rY ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[AY], YY.width, YY.height, 0, rY) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, OY, YY.width, YY.height, 0, gY, aY, rY), YY.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), YY.isReady = !0
      }, AY.ThinEngine.prototype.createRawTexture = function(YY, rY, DY, FY, AY, IY, OY) {
        let gY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          vY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uY = new RY.c(this, 3);
        uY.baseWidth = rY, uY.baseHeight = DY, uY.width = rY, uY.height = DY, uY.format = FY, uY.generateMipMaps = AY, uY.samplingMode = OY, uY.invertY = IY, uY._compression = gY, uY.type = aY, uY._useSRGBBuffer = this._getUseSRGBBuffer(vY, !AY), this._doNotHandleContextLost || (uY._bufferView = YY), this.updateRawTexture(uY, YY, FY, IY, gY, aY, uY._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, uY, !0);
        const sY = this._getSamplingParameters(OY, AY);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, sY.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, sY.min), AY && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(uY), uY
      }, AY.ThinEngine.prototype.createRawCubeTexture = function(YY, rY, DY, FY, AY, IY, aY) {
        let vY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const uY = this._gl,
          sY = new RY.c(this, 8);
        sY.isCube = !0, sY.format = DY, sY.type = FY, this._doNotHandleContextLost || (sY._bufferViewArray = YY);
        const iY = this._getWebGLTextureType(FY);
        let yY = this._getInternalFormat(DY);
        yY === uY.RGB && (yY = uY.RGBA), iY !== uY.FLOAT || this._caps.textureFloatLinearFiltering ? iY !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? iY !== uY.FLOAT || this._caps.textureFloatRender ? iY !== uY.HALF_FLOAT || this._caps.colorBufferFloat || (AY = !1, OY.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (AY = !1, OY.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (AY = !1, aY = 1, OY.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (AY = !1, aY = 1, OY.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const QY = rY,
          oY = QY;
        sY.width = QY, sY.height = oY, sY.invertY = IY, sY._compression = vY;
        if (!this.needPOTTextures || (0, gY.g)(sY.width) && (0, gY.g)(sY.height) || (AY = !1), YY) this.updateRawCubeTexture(sY, YY, DY, FY, IY, vY);
        else {
          const YY = this._getRGBABufferInternalSizedFormat(FY),
            rY = 0;
          this._bindTextureDirectly(uY.TEXTURE_CUBE_MAP, sY, !0);
          for (let DY = 0; DY < 6; DY++) vY ? uY.compressedTexImage2D(uY.TEXTURE_CUBE_MAP_POSITIVE_X + DY, rY, this.getCaps().s3tc[vY], sY.width, sY.height, 0, void 0) : uY.texImage2D(uY.TEXTURE_CUBE_MAP_POSITIVE_X + DY, rY, YY, sY.width, sY.height, 0, yY, iY, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, sY, !0), YY && AY && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const WY = this._getSamplingParameters(aY, AY);
        return uY.texParameteri(uY.TEXTURE_CUBE_MAP, uY.TEXTURE_MAG_FILTER, WY.mag), uY.texParameteri(uY.TEXTURE_CUBE_MAP, uY.TEXTURE_MIN_FILTER, WY.min), uY.texParameteri(uY.TEXTURE_CUBE_MAP, uY.TEXTURE_WRAP_S, uY.CLAMP_TO_EDGE), uY.texParameteri(uY.TEXTURE_CUBE_MAP, uY.TEXTURE_WRAP_T, uY.CLAMP_TO_EDGE), this._bindTextureDirectly(uY.TEXTURE_CUBE_MAP, null), sY.generateMipMaps = AY, sY.samplingMode = aY, sY.isReady = !0, sY
      }, AY.ThinEngine.prototype.updateRawCubeTexture = function(rY, DY, FY, AY, IY) {
        let RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        rY._bufferViewArray = DY, rY.format = FY, rY.type = AY, rY.invertY = IY, rY._compression = RY;
        const aY = this._gl,
          vY = this._getWebGLTextureType(AY);
        let uY = this._getInternalFormat(FY);
        const sY = this._getRGBABufferInternalSizedFormat(AY);
        let iY = !1;
        uY === aY.RGB && (uY = aY.RGBA, iY = !0), this._bindTextureDirectly(aY.TEXTURE_CUBE_MAP, rY, !0), this._unpackFlipY(void 0 === IY || !!IY), rY.width % 4 !== 0 && aY.pixelStorei(aY.UNPACK_ALIGNMENT, 1);
        for (let gY = 0; gY < 6; gY++) {
          let FY = DY[gY];
          RY ? aY.compressedTexImage2D(aY.TEXTURE_CUBE_MAP_POSITIVE_X + gY, OY, this.getCaps().s3tc[RY], rY.width, rY.height, 0, FY) : (iY && (FY = YY(FY, rY.width, rY.height, AY)), aY.texImage2D(aY.TEXTURE_CUBE_MAP_POSITIVE_X + gY, OY, sY, rY.width, rY.height, 0, uY, vY, FY))
        }(!this.needPOTTextures || (0, gY.g)(rY.width) && (0, gY.g)(rY.height)) && rY.generateMipMaps && 0 === OY && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), rY.isReady = !0
      }, AY.ThinEngine.prototype.createRawCubeTextureFromUrl = function(rY, DY, FY, AY, IY, RY, OY, gY) {
        let aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          vY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          uY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          sY = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const iY = this._gl,
          yY = this.createRawCubeTexture(null, FY, AY, IY, !RY, sY, uY, null);
        DY?.addPendingData(yY), yY.url = rY, yY.isReady = !1, this._internalTexturesCache.push(yY);
        const QY = (YY, rY) => {
            DY?.removePendingData(yY), vY && vY(YY ? YY.status + " " + YY.statusText : "Failed to parse texture data", rY)
          },
          oY = async rY => {
            if (!yY._hardwareTexture) return;
            const FY = OY(rY);
            if (!FY) return;
            const RY = FY instanceof Promise ? await FY : FY,
              vY = yY.width;
            if (gY) {
              const rY = this._getWebGLTextureType(IY);
              let DY = this._getInternalFormat(AY);
              const FY = this._getRGBABufferInternalSizedFormat(IY);
              let OY = !1;
              DY === iY.RGB && (DY = iY.RGBA, OY = !0), this._bindTextureDirectly(iY.TEXTURE_CUBE_MAP, yY, !0), this._unpackFlipY(!1);
              const aY = gY(RY);
              for (let AY = 0; AY < aY.length; AY++) {
                const RY = vY >> AY;
                for (let gY = 0; gY < 6; gY++) {
                  let vY = aY[AY][gY];
                  OY && (vY = YY(vY, RY, RY, IY)), iY.texImage2D(gY, AY, FY, RY, RY, 0, DY, rY, vY)
                }
              }
              this._bindTextureDirectly(iY.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(yY, RY, AY, IY, sY);
            yY.isReady = !0, DY?.removePendingData(yY), yY.onLoadedObservable.notifyObservers(yY), yY.onLoadedObservable.clear(), aY && aY()
          };
        return this._loadFile(rY, (YY => {
          oY(YY).catch((YY => {
            QY(void 0, YY)
          }))
        }), void 0, DY?.offlineProvider, !0, QY), yY
      }, AY.ThinEngine.prototype.createRawTexture2DArray = rY(!1), AY.ThinEngine.prototype.createRawTexture3D = rY(!0), AY.ThinEngine.prototype.updateRawTexture2DArray = DY(!1), AY.ThinEngine.prototype.updateRawTexture3D = DY(!0))
    }();
    var vY = DY(39021);
    let uY = !1;
    uY || (uY = !0, AY.ThinEngine.prototype._readTexturePixelsSync = function(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        RY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        aY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const uY = this._gl;
      if (!uY) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const YY = uY.createFramebuffer();
        if (!YY) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = YY
      }
      uY.bindFramebuffer(uY.FRAMEBUFFER, this._dummyFramebuffer), FY > -1 && (YY.is2DArray || YY.is3D) ? uY.framebufferTextureLayer(uY.FRAMEBUFFER, uY.COLOR_ATTACHMENT0, YY._hardwareTexture?.underlyingResource, AY, FY) : FY > -1 ? uY.framebufferTexture2D(uY.FRAMEBUFFER, uY.COLOR_ATTACHMENT0, uY.TEXTURE_CUBE_MAP_POSITIVE_X + FY, YY._hardwareTexture?.underlyingResource, AY) : uY.framebufferTexture2D(uY.FRAMEBUFFER, uY.COLOR_ATTACHMENT0, uY.TEXTURE_2D, YY._hardwareTexture?.underlyingResource, AY);
      let sY = void 0 !== YY.type ? this._getWebGLTextureType(YY.type) : uY.UNSIGNED_BYTE;
      return OY ? IY || (IY = (0, vY.q)(YY.type, 4 * rY * DY)) : sY === uY.UNSIGNED_BYTE ? (IY || (IY = new Uint8Array(4 * rY * DY)), sY = uY.UNSIGNED_BYTE) : (IY || (IY = new Float32Array(4 * rY * DY)), sY = uY.FLOAT), RY && this.flushFramebuffer(), uY.readPixels(gY, aY, rY, DY, uY.RGBA, sY, IY), uY.bindFramebuffer(uY.FRAMEBUFFER, this._currentFramebuffer), IY
    }, AY.ThinEngine.prototype._readTexturePixels = function(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        RY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        aY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY))
    }), (0, DY(39102).d)();
    let sY = !1;
    sY || (sY = !0, AY.ThinEngine.prototype._createDepthStencilCubeTexture = function(YY, rY) {
      const DY = new RY.c(this, 12);
      if (DY.isCube = !0, 1 === this.VQ) return OY.d.Error("Depth cube texture is not supported by WebGL 1."), DY;
      const FY = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...rY
        },
        AY = this._gl;
      this._bindTextureDirectly(AY.TEXTURE_CUBE_MAP, DY, !0), this._setupDepthStencilTexture(DY, YY, FY.bilinearFiltering, FY.comparisonFunction);
      for (let IY = 0; IY < 6; IY++) FY.generateStencil ? AY.texImage2D(AY.TEXTURE_CUBE_MAP_POSITIVE_X + IY, 0, AY.DEPTH24_STENCIL8, YY, YY, 0, AY.DEPTH_STENCIL, AY.UNSIGNED_INT_24_8, null) : AY.texImage2D(AY.TEXTURE_CUBE_MAP_POSITIVE_X + IY, 0, AY.DEPTH_COMPONENT24, YY, YY, 0, AY.DEPTH_COMPONENT, AY.UNSIGNED_INT, null);
      return this._bindTextureDirectly(AY.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(DY), DY
    }, AY.ThinEngine.prototype._setCubeMapTextureParams = function(YY, rY, DY) {
      const FY = this._gl;
      FY.texParameteri(FY.TEXTURE_CUBE_MAP, FY.TEXTURE_MAG_FILTER, FY.LINEAR), FY.texParameteri(FY.TEXTURE_CUBE_MAP, FY.TEXTURE_MIN_FILTER, rY ? FY.LINEAR_MIPMAP_LINEAR : FY.LINEAR), FY.texParameteri(FY.TEXTURE_CUBE_MAP, FY.TEXTURE_WRAP_S, FY.CLAMP_TO_EDGE), FY.texParameteri(FY.TEXTURE_CUBE_MAP, FY.TEXTURE_WRAP_T, FY.CLAMP_TO_EDGE), YY.samplingMode = rY ? 3 : 2, rY && this.getCaps().textureMaxLevel && void 0 !== DY && DY > 0 && (FY.texParameteri(FY.TEXTURE_CUBE_MAP, FY.TEXTURE_MAX_LEVEL, DY), YY._maxLodLevel = DY), this._bindTextureDirectly(FY.TEXTURE_CUBE_MAP, null)
    }, AY.ThinEngine.prototype.createCubeTexture = function(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        RY = arguments.length > 6 ? arguments[6] : void 0,
        aY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        vY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        sY = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        iY = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        yY = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        QY = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const oY = this._gl;
      return this.createCubeTextureBase(YY, rY, DY, !!FY, AY, IY, RY, aY, vY, uY, sY, iY, (YY => this._bindTextureDirectly(oY.TEXTURE_CUBE_MAP, YY, !0)), ((YY, rY) => {
        const DY = this.needPOTTextures ? (0, gY.f)(rY[0].width, this._caps.maxCubemapTextureSize) : rY[0].width,
          IY = DY,
          aY = [oY.TEXTURE_CUBE_MAP_POSITIVE_X, oY.TEXTURE_CUBE_MAP_POSITIVE_Y, oY.TEXTURE_CUBE_MAP_POSITIVE_Z, oY.TEXTURE_CUBE_MAP_NEGATIVE_X, oY.TEXTURE_CUBE_MAP_NEGATIVE_Y, oY.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(oY.TEXTURE_CUBE_MAP, YY, !0), this._unpackFlipY(!1);
        const vY = RY ? this._getInternalFormat(RY, YY._useSRGBBuffer) : YY._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : oY.RGBA;
        let uY = RY ? this._getInternalFormat(RY) : oY.RGBA;
        YY._useSRGBBuffer && 1 === this.VQ && (uY = vY);
        for (let FY = 0; FY < aY.length; FY++)
          if (rY[FY].width !== DY || rY[FY].height !== IY) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void OY.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = DY, this._workingCanvas.height = IY, this._workingContext.drawImage(rY[FY], 0, 0, rY[FY].width, rY[FY].height, 0, 0, DY, IY), oY.texImage2D(aY[FY], 0, vY, uY, oY.UNSIGNED_BYTE, this._workingCanvas)
          } else oY.texImage2D(aY[FY], 0, vY, uY, oY.UNSIGNED_BYTE, rY[FY]);
        FY || oY.generateMipmap(oY.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(YY, !FY), YY.width = DY, YY.height = IY, YY.isReady = !0, RY && (YY.format = RY), YY.onLoadedObservable.notifyObservers(YY), YY.onLoadedObservable.clear(), AY && AY()
      }), !!yY, QY)
    }, AY.ThinEngine.prototype.generateMipMapsForCubemap = function(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (YY.generateMipMaps) {
        const DY = this._gl;
        this._bindTextureDirectly(DY.TEXTURE_CUBE_MAP, YY, !0), DY.generateMipmap(DY.TEXTURE_CUBE_MAP), rY && this._bindTextureDirectly(DY.TEXTURE_CUBE_MAP, null)
      }
    });
    DY(39109);
    let iY = !1;
    iY || (iY = !0, AY.ThinEngine.prototype.setDepthStencilTexture = function(YY, rY, DY, FY) {
      void 0 !== YY && (rY && (this._boundUniforms[YY] = rY), DY && DY.depthStencilTexture ? this._setTexture(YY, DY, !1, !0, FY) : this._setTexture(YY, null, void 0, void 0, FY))
    });
    let yY = !1;
    yY || (yY = !0, AY.ThinEngine.prototype.createRenderTargetCubeTexture = function(YY, rY) {
      const DY = this._createHardwareRenderTargetWrapper(!1, !0, YY),
        FY = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...rY
        };
      FY.generateStencilBuffer = FY.generateDepthBuffer && FY.generateStencilBuffer, (1 !== FY.type || this._caps.textureFloatLinearFiltering) && (2 !== FY.type || this._caps.textureHalfFloatLinearFiltering) || (FY.samplingMode = 1);
      const AY = this._gl,
        IY = new RY.c(this, 5);
      this._bindTextureDirectly(AY.TEXTURE_CUBE_MAP, IY, !0);
      const gY = this._getSamplingParameters(FY.samplingMode, FY.generateMipMaps);
      1 !== FY.type || this._caps.textureFloat || (FY.type = 0, OY.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), AY.texParameteri(AY.TEXTURE_CUBE_MAP, AY.TEXTURE_MAG_FILTER, gY.mag), AY.texParameteri(AY.TEXTURE_CUBE_MAP, AY.TEXTURE_MIN_FILTER, gY.min), AY.texParameteri(AY.TEXTURE_CUBE_MAP, AY.TEXTURE_WRAP_S, AY.CLAMP_TO_EDGE), AY.texParameteri(AY.TEXTURE_CUBE_MAP, AY.TEXTURE_WRAP_T, AY.CLAMP_TO_EDGE);
      for (let RY = 0; RY < 6; RY++) AY.texImage2D(AY.TEXTURE_CUBE_MAP_POSITIVE_X + RY, 0, this._getRGBABufferInternalSizedFormat(FY.type, FY.format), YY, YY, 0, this._getInternalFormat(FY.format), this._getWebGLTextureType(FY.type), null);
      const aY = AY.createFramebuffer();
      return this._bindUnboundFramebuffer(aY), DY._depthStencilBuffer = this._setupFramebufferDepthAttachments(FY.generateStencilBuffer, FY.generateDepthBuffer, YY, YY), FY.generateMipMaps && AY.generateMipmap(AY.TEXTURE_CUBE_MAP), this._bindTextureDirectly(AY.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), DY._framebuffer = aY, DY._generateDepthBuffer = FY.generateDepthBuffer, DY._generateStencilBuffer = FY.generateStencilBuffer, IY.width = YY, IY.height = YY, IY.isReady = !0, IY.isCube = !0, IY.samples = 1, IY.generateMipMaps = FY.generateMipMaps, IY.samplingMode = FY.samplingMode, IY.type = FY.type, IY.format = FY.format, this._internalTexturesCache.push(IY), DY.setTextures(IY), DY
    });
    var QY = DY(39120),
      oY = DY(39123);
    let WY = !1;
    WY || (WY = !0, AY.ThinEngine.prototype.createPrefilteredCubeTexture = function(YY, rY, FY, AY) {
      let IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        gY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        aY = arguments.length > 6 ? arguments[6] : void 0,
        vY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        uY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        sY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(YY, rY, null, !1, (async YY => {
        if (!YY) return void(IY && IY(null));
        const gY = YY.texture;
        if (uY ? YY.info.sphericalPolynomial && (gY._sphericalPolynomial = YY.info.sphericalPolynomial) : gY._sphericalPolynomial = gY._sphericalPolynomial ?? new QY.f, gY._source = 9, this.getCaps().textureLOD) return void(IY && IY(gY));
        const aY = this._gl,
          vY = YY.width;
        if (!vY) return;
        const {
          DDSTools: sY
        } = await DY.e(296).then((() => DY(40821))), iY = [];
        for (let DY = 0; DY < 3; DY++) {
          const IY = 1 - DY / 2,
            uY = AY,
            yY = Math.log2(vY) * FY + AY,
            QY = uY + (yY - uY) * IY,
            WY = Math.round(Math.min(Math.max(QY, 0), yY)),
            EY = new RY.c(this, 2);
          if (EY.type = gY.type, EY.format = gY.format, EY.width = Math.pow(2, Math.max(Math.log2(vY) - WY, 0)), EY.height = EY.width, EY.isCube = !0, EY._cachedWrapU = 0, EY._cachedWrapV = 0, this._bindTextureDirectly(aY.TEXTURE_CUBE_MAP, EY, !0), EY.samplingMode = 2, aY.texParameteri(aY.TEXTURE_CUBE_MAP, aY.TEXTURE_MAG_FILTER, aY.LINEAR), aY.texParameteri(aY.TEXTURE_CUBE_MAP, aY.TEXTURE_MIN_FILTER, aY.LINEAR), aY.texParameteri(aY.TEXTURE_CUBE_MAP, aY.TEXTURE_WRAP_S, aY.CLAMP_TO_EDGE), aY.texParameteri(aY.TEXTURE_CUBE_MAP, aY.TEXTURE_WRAP_T, aY.CLAMP_TO_EDGE), YY.isDDS) {
            const rY = YY.info,
              DY = YY.data;
            this._unpackFlipY(rY.isCompressed), sY.UploadDDSLevels(this, EY, DY, rY, !0, 6, WY)
          } else OY.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(aY.TEXTURE_CUBE_MAP, null);
          const mY = new oY.e(rY);
          mY._isCube = !0, mY._texture = EY, EY.isReady = !0, iY.push(mY)
        }
        gY._lodTextureHigh = iY[2], gY._lodTextureMid = iY[1], gY._lodTextureLow = iY[0], IY && IY(gY)
      }), gY, aY, vY, uY, FY, AY, null, void 0, !1, sY)
    });
    var EY = DY(39054);
    let mY = !1;
    mY || (mY = !0, AY.ThinEngine.prototype.createUniformBuffer = function(YY, rY) {
      const DY = this._gl.createBuffer();
      if (!DY) throw new Error("Unable to create uniform buffer");
      const FY = new EY.d(DY);
      return this.bindUniformBuffer(FY), YY instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, YY, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(YY), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), FY.references = 1, FY
    }, AY.ThinEngine.prototype.createDynamicUniformBuffer = function(YY, rY) {
      const DY = this._gl.createBuffer();
      if (!DY) throw new Error("Unable to create dynamic uniform buffer");
      const FY = new EY.d(DY);
      return this.bindUniformBuffer(FY), YY instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, YY, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(YY), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), FY.references = 1, FY
    }, AY.ThinEngine.prototype.updateUniformBuffer = function(YY, rY, DY, FY) {
      this.bindUniformBuffer(YY), void 0 === DY && (DY = 0), void 0 === FY ? rY instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, DY, rY) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, DY, new Float32Array(rY)) : rY instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, rY.subarray(DY, DY + FY)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(rY).subarray(DY, DY + FY)), this.bindUniformBuffer(null)
    }, AY.ThinEngine.prototype.bindUniformBuffer = function(YY) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, YY ? YY.underlyingResource : null)
    }, AY.ThinEngine.prototype.bindUniformBufferBase = function(YY, rY, DY) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, rY, YY ? YY.underlyingResource : null)
    }, AY.ThinEngine.prototype.bindUniformBlock = function(YY, rY, DY) {
      const FY = YY.program,
        AY = this._gl.getUniformBlockIndex(FY, rY);
      4294967295 !== AY && this._gl.uniformBlockBinding(FY, AY, DY)
    });
    var VY = DY(39013),
      SY = DY(39041);
    let lY = !1;
    lY || (lY = !0, SY.d.prototype.displayLoadingUI = function() {
      if (!(0, VY.l)()) return;
      const YY = this.loadingScreen;
      YY && YY.displayLoadingUI()
    }, SY.d.prototype.hideLoadingUI = function() {
      if (!(0, VY.l)()) return;
      const YY = this._loadingScreen;
      YY && YY.hideLoadingUI()
    }, Object.defineProperty(SY.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = SY.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(YY) {
        this._loadingScreen = YY
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(SY.d.prototype, "loadingUIText", {
      set: function(YY) {
        this.loadingScreen.loadingUIText = YY
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(SY.d.prototype, "loadingUIBackgroundColor", {
      set: function(YY) {
        this.loadingScreen.loadingUIBackgroundColor = YY
      },
      enumerable: !0,
      configurable: !0
    })), (0, DY(39089).b)();
    let TY = !1;
    TY || (TY = !0, SY.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, SY.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, SY.d.prototype.setDepthFunction = function(YY) {
      this._depthCullingState.depthFunc = YY
    }, SY.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, SY.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, SY.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, SY.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, SY.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, SY.d.prototype.setDepthWrite = function(YY) {
      this._depthCullingState.depthMask = YY
    }, SY.d.prototype.setAlphaConstants = function(YY, rY, DY, FY) {
      this._alphaState.setAlphaBlendConstants(YY, rY, DY, FY)
    }, SY.d.prototype.getAlphaMode = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[YY]
    }, SY.d.prototype.getAlphaEquation = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[YY]
    });
    let eY = !1;
    eY || (eY = !0, SY.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, SY.d.prototype.setStencilBuffer = function(YY) {
      this._stencilState.stencilTest = YY
    }, SY.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, SY.d.prototype.setStencilMask = function(YY) {
      this._stencilState.stencilMask = YY
    }, SY.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, SY.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, SY.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, SY.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, SY.d.prototype.setStencilFunction = function(YY) {
      this._stencilState.stencilFunc = YY
    }, SY.d.prototype.setStencilBackFunction = function(YY) {
      this._stencilState.stencilBackFunc = YY
    }, SY.d.prototype.setStencilFunctionReference = function(YY) {
      this._stencilState.stencilFuncRef = YY
    }, SY.d.prototype.setStencilFunctionMask = function(YY) {
      this._stencilState.stencilFuncMask = YY
    }, SY.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, SY.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, SY.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, SY.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, SY.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, SY.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, SY.d.prototype.setStencilOperationFail = function(YY) {
      this._stencilState.stencilOpStencilFail = YY
    }, SY.d.prototype.setStencilBackOperationFail = function(YY) {
      this._stencilState.stencilBackOpStencilFail = YY
    }, SY.d.prototype.setStencilOperationDepthFail = function(YY) {
      this._stencilState.stencilOpDepthFail = YY
    }, SY.d.prototype.setStencilBackOperationDepthFail = function(YY) {
      this._stencilState.stencilBackOpDepthFail = YY
    }, SY.d.prototype.setStencilOperationPass = function(YY) {
      this._stencilState.stencilOpStencilDepthPass = YY
    }, SY.d.prototype.setStencilBackOperationPass = function(YY) {
      this._stencilState.stencilBackOpStencilDepthPass = YY
    }, SY.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, SY.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    DY(39151);
    let NY = !1;
    NY || (NY = !0, SY.d.prototype.createDepthStencilTexture = function(YY, rY, DY) {
      if (rY.isCube) {
        const DY = YY.width || YY;
        return this._createDepthStencilCubeTexture(DY, rY)
      }
      return this._createDepthStencilTexture(YY, rY, DY)
    });
    DY(39154), DY(39192);
    let BY = !1;
    BY || (BY = !0, AY.ThinEngine.prototype.enableScissor = function(YY, rY, DY, FY) {
      const AY = this._gl;
      AY.enable(AY.SCISSOR_TEST), AY.scissor(YY, rY, DY, FY)
    }, AY.ThinEngine.prototype.disableScissor = function() {
      const YY = this._gl;
      YY.disable(YY.SCISSOR_TEST)
    })
  },
  38969: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => SY
    });
    var FY = DY(38975),
      AY = DY(36546),
      IY = DY(38982),
      RY = DY(39044);
    class OY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new gY(YY)
      }
      sampleFrame() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RY.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const rY = YY - this._lastFrameTimeMs;
            this._rollingFrameTime.add(rY)
          }
          this._lastFrameTimeMs = YY
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
        const YY = this._rollingFrameTime.history(0);
        return 0 === YY ? 0 : 1e3 / YY
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
    class gY {
      constructor(YY) {
        this._samples = new Array(YY), this.reset()
      }
      add(YY) {
        let rY;
        if (this.isSaturated()) {
          const YY = this._samples[this._pos];
          rY = YY - this.average, this.average -= rY / (this._sampleCount - 1), this._m2 -= rY * (YY - this.average)
        } else this._sampleCount++;
        rY = YY - this.average, this.average += rY / this._sampleCount, this._m2 += rY * (YY - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = YY, this._pos++, this._pos %= this._samples.length
      }
      history(YY) {
        if (YY >= this._sampleCount || YY >= this._samples.length) return 0;
        const rY = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(rY - YY)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(YY) {
        const rY = this._samples.length;
        return (YY % rY + rY) % rY
      }
    }
    var aY = DY(39054),
      vY = DY(38040),
      uY = DY(39074),
      sY = DY(39041),
      iY = DY(39013);

    function yY(YY) {
      const rY = function(YY) {
        if (!(0, iY.e)() || !document.body) return null;
        const rY = document.createElement("span");
        rY.textContent = "Hg", rY.style.font = YY;
        const DY = document.createElement("div");
        DY.style.display = "inline-block", DY.style.width = "1px", DY.style.height = "0px", DY.style.verticalAlign = "bottom";
        const FY = document.createElement("div");
        let AY, IY;
        FY.style.whiteSpace = "nowrap", FY.appendChild(rY), FY.appendChild(DY), document.body.appendChild(FY);
        try {
          IY = DY.getBoundingClientRect().top - rY.getBoundingClientRect().top, DY.style.verticalAlign = "baseline", AY = DY.getBoundingClientRect().top - rY.getBoundingClientRect().top
        } finally {
          document.body.removeChild(FY)
        }
        const RY = {
          ascent: AY,
          height: IY,
          descent: IY - AY
        };
        return QY(RY) ? RY : null
      }(YY);
      if (rY) return rY;
      const DY = function(YY) {
        let rY = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? rY = new OffscreenCanvas(64, 64) : (0, iY.e)() && "function" === typeof document.createElement && (rY = document.createElement("canvas"), rY.width = 64, rY.height = 64);
          const DY = rY?.getContext("2d");
          if (!DY) return null;
          DY.font = YY;
          const FY = DY.measureText("Hg"),
            AY = Number(FY.actualBoundingBoxAscent ?? FY.fontBoundingBoxAscent),
            IY = Number(FY.actualBoundingBoxDescent ?? FY.fontBoundingBoxDescent),
            RY = {
              ascent: AY,
              height: AY + IY,
              descent: IY
            };
          return QY(RY) ? RY : null
        } catch {
          return null
        } finally {
          const YY = rY;
          "function" === typeof YY?.dispose && YY.dispose()
        }
      }(YY);
      return DY || function(YY) {
        const rY = Math.max(1, function(YY) {
            const rY = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(YY || ""));
            return rY ? Number(rY[1]) : 16
          }(YY)),
          DY = .8 * rY,
          FY = .2 * rY;
        return {
          ascent: DY,
          height: DY + FY,
          descent: FY
        }
      }(YY)
    }

    function QY(YY) {
      return Number.isFinite(YY.ascent) && Number.isFinite(YY.height) && Number.isFinite(YY.descent) && YY.height > 0
    }

    function oY(YY) {
      if (YY.requestPointerLock) {
        const rY = YY.requestPointerLock();
        rY instanceof Promise ? rY.then((() => {
          YY.focus()
        })).catch((() => {})) : YY.focus()
      }
    }
    var WY = DY(39087),
      EY = DY(39037),
      mY = DY(39089),
      VY = DY(39092);
    class SY extends IY.ThinEngine {
      static get NpmPackage() {
        return sY.d.NpmPackage
      }
      static get Version() {
        return sY.d.Version
      }
      static get Instances() {
        return AY.d.Instances
      }
      static get LastCreatedEngine() {
        return AY.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return AY.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(YY) {
        return sY.d.DefaultLoadingScreenFactory(YY)
      }
      get _supportsHardwareTextureRescaling() {
        return !!SY._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, mY.b)(), (0, VY.c)(), super(YY, rY, DY, FY), this._performanceMonitor = new OY, this._drawCalls = new WY.e, YY && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(YY) {
        super._sharedInit(YY),
          function(YY, rY, DY) {
            YY._onCanvasFocus = () => {
              YY.onCanvasFocusObservable.notifyObservers(YY)
            }, YY._onCanvasBlur = () => {
              YY.onCanvasBlurObservable.notifyObservers(YY)
            }, YY._onCanvasContextMenu = rY => {
              YY.disableContextMenu && rY.preventDefault()
            }, rY.addEventListener("focus", YY._onCanvasFocus), rY.addEventListener("blur", YY._onCanvasBlur), rY.addEventListener("contextmenu", YY._onCanvasContextMenu), YY._onBlur = () => {
              YY.disablePerformanceMonitorInBackground && YY.performanceMonitor.disable(), YY._windowIsBackground = !0
            }, YY._onFocus = () => {
              YY.disablePerformanceMonitorInBackground && YY.performanceMonitor.enable(), YY._windowIsBackground = !1
            }, YY._onCanvasPointerOut = DY => {
              document.elementFromPoint(DY.clientX, DY.clientY) !== rY && YY.onCanvasPointerOutObservable.notifyObservers(DY)
            };
            const FY = YY.getHostWindow();
            FY && "function" === typeof FY.addEventListener && (FY.addEventListener("blur", YY._onBlur), FY.addEventListener("focus", YY._onFocus)), rY.addEventListener("pointerout", YY._onCanvasPointerOut), DY.doNotHandleTouchAction || function(YY) {
              YY && YY.setAttribute && (YY.setAttribute("touch-action", "none"), YY.style.touchAction = "none", YY.style.webkitTapHighlightColor = "transparent")
            }(rY), !sY.d.audioEngine && DY.audioEngine && sY.d.AudioEngineFactory && (sY.d.audioEngine = sY.d.AudioEngineFactory(YY.getRenderingCanvas(), YY.getAudioContext(), YY.getAudioDestination())), (0, iY.e)() && (YY._onFullscreenChange = () => {
              YY.isFullscreen = !!document.fullscreenElement, YY.isFullscreen && YY._pointerLockRequested && rY && oY(rY)
            }, document.addEventListener("fullscreenchange", YY._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", YY._onFullscreenChange, !1), YY._onPointerLockChange = () => {
              YY.isPointerLock = document.pointerLockElement === rY
            }, document.addEventListener("pointerlockchange", YY._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", YY._onPointerLockChange, !1)), YY.enableOfflineSupport = void 0 !== sY.d.OfflineProviderFactory, YY._deterministicLockstep = !!DY.deterministicLockstep, YY._lockstepMaxSteps = DY.lockstepMaxSteps || 0, YY._timeStep = DY.timeStep || 1 / 60
          }(this, YY, this._creationOptions)
      }
      resizeImageBitmap(YY, rY, DY) {
        return function(YY, rY, DY, FY) {
          const AY = YY.createCanvas(DY, FY).getContext("2d");
          if (!AY) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return AY.drawImage(rY, 0, 0), AY.getImageData(0, 0, DY, FY).data
        }(this, YY, rY, DY)
      }
      async _createImageBitmapFromSource(YY, rY) {
        return await async function(YY, rY, DY) {
          return await new Promise(((FY, AY) => {
            const IY = new Image;
            IY.onload = () => {
              IY.decode().then((() => {
                YY.createImageBitmap(IY, DY).then((YY => {
                  FY(YY)
                }))
              }))
            }, IY.onerror = () => {
              AY(`Error loading image ${IY.src}`)
            }, IY.src = rY
          }))
        }(this, YY, rY)
      }
      switchFullscreen(YY) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(YY)
      }
      enterFullscreen(YY) {
        this.isFullscreen || (this._pointerLockRequested = YY, this._renderingCanvas && function(YY) {
          const rY = YY.requestFullscreen || YY.webkitRequestFullscreen;
          rY && rY.call(YY)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const YY = document;
          document.exitFullscreen ? document.exitFullscreen() : YY.webkitCancelFullScreen && YY.webkitCancelFullScreen()
        }()
      }
      setDitheringState(YY) {
        YY ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(YY) {
        YY ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(YY, rY, DY, FY) {
        const AY = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(YY, rY, DY, FY), AY
      }
      scissorClear(YY, rY, DY, FY, AY) {
        this.enableScissor(YY, rY, DY, FY), this.clear(AY, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(YY) {
        const rY = this._gl.getAttachedShaders(YY);
        return rY ? this._gl.getShaderSource(rY[0]) : null
      }
      getFragmentShaderSource(YY) {
        const rY = this._gl.getAttachedShaders(YY);
        return rY ? this._gl.getShaderSource(rY[1]) : null
      }
      set framebufferDimensionsObject(YY) {
        this._framebufferDimensionsObject = YY, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const YY of this.scenes) YY.resetCachedMaterial(), YY._rebuildGeometries();
        for (const YY of this._virtualScenes) YY.resetCachedMaterial(), YY._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(YY) {
        return yY(YY)
      }
      enterPointerlock() {
        this._renderingCanvas && oY(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Om() {
        this._measureFps(), super.Om()
      }
      _deletePipelineContext(YY) {
        const rY = YY;
        rY && rY.program && rY.transformFeedback && (this.deleteTransformFeedback(rY.transformFeedback), rY.transformFeedback = null), super._deletePipelineContext(YY)
      }
      createShaderProgram(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        AY = AY || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const RY = super.createShaderProgram(YY, rY, DY, FY, AY, IY);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), RY
      }
      _createShaderProgram(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const IY = FY.createProgram();
        if (YY.program = IY, !IY) throw new Error("Unable to create program");
        if (FY.attachShader(IY, rY), FY.attachShader(IY, DY), this.VQ > 1 && AY) {
          const rY = this.createTransformFeedback();
          this.bindTransformFeedback(rY), this.setTranformFeedbackVaryings(IY, AY), YY.transformFeedback = rY
        }
        return FY.linkProgram(IY), this.VQ > 1 && AY && this.bindTransformFeedback(null), YY.context = FY, YY.vertexShader = rY, YY.fragmentShader = DY, YY.isParallelCompiled || this._finalizePipelineContext(YY), IY
      }
      _releaseTexture(YY) {
        super._releaseTexture(YY)
      }
      _releaseRenderTargetWrapper(YY) {
        super._releaseRenderTargetWrapper(YY);
        for (const rY of this.scenes) {
          for (const DY of rY.postProcesses) DY._outputTexture === YY && (DY._outputTexture = null);
          for (const DY of rY.cameras)
            for (const rY of DY._postProcesses) rY && rY._outputTexture === YY && (rY._outputTexture = null)
        }
      }
      _rescaleTexture(YY, rY, DY, FY, AY) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const IY = this.createRenderTargetTexture({
          width: rY.width,
          height: rY.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && SY._RescalePostProcessFactory && (this._rescalePostProcess = SY._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const RY = () => {
              this._rescalePostProcess.onApply = function(rY) {
                rY._bindTexture("textureSampler", YY)
              };
              let RY = DY;
              RY || (RY = this.scenes[this.scenes.length - 1]), RY.postProcessManager.directRender([this._rescalePostProcess], IY, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, rY, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, FY, 0, 0, rY.width, rY.height, 0), this.unBindFramebuffer(IY), IY.dispose(), AY && AY()
            },
            OY = this._rescalePostProcess.getEffect();
          OY ? OY.executeWhenCompiled(RY) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((YY => {
            YY.executeWhenCompiled(RY)
          }))
        }
      }
      wrapWebGLTexture(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const RY = new uY.d(YY, this._gl),
          OY = new FY.c(this, 15, !0);
        return OY._hardwareTexture = RY, OY.baseWidth = AY, OY.baseHeight = IY, OY.width = AY, OY.height = IY, OY.isReady = !0, OY.useMipMaps = rY, this.updateTextureSamplingMode(DY, OY), OY
      }
      updateWrappedWebGLTexture(YY, rY) {
        if (15 !== YY.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const FY of this._renderTargetWrapperCache)
          if (FY.textures?.includes(YY)) {
            if (FY.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (FY._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } YY._hardwareTexture = new uY.d(rY, this._gl), YY.isReady = !0, YY._cachedCoordinatesMode = null, YY._cachedWrapU = null, YY._cachedWrapV = null, YY._cachedWrapR = null, YY._cachedAnisotropicFilteringLevel = null;
        for (const FY in this._boundTexturesCache) this._boundTexturesCache[FY] === YY && (this._boundTexturesCache[FY] = null);
        this.updateTextureSamplingMode(YY.samplingMode, YY);
        const DY = this._gl;
        for (const FY of this._renderTargetWrapperCache) {
          if (FY.texture !== YY) continue;
          const AY = FY,
            IY = FY.samples,
            RY = IY > 1;
          AY._framebuffer && DY.deleteFramebuffer(AY._framebuffer), !RY && AY._depthStencilBuffer && (DY.deleteRenderbuffer(AY._depthStencilBuffer), AY._depthStencilBuffer = null);
          const OY = this._currentFramebuffer,
            gY = DY.createFramebuffer();
          this._bindUnboundFramebuffer(gY), DY.framebufferTexture2D(DY.FRAMEBUFFER, DY.COLOR_ATTACHMENT0, DY.TEXTURE_2D, rY, 0), RY || (AY._depthStencilBuffer = this._setupFramebufferDepthAttachments(FY._generateStencilBuffer, FY._generateDepthBuffer, FY.width, FY.height)), this._bindUnboundFramebuffer(OY), AY._framebuffer = gY, RY && (FY._samples = 1, this.updateRenderTargetTextureSampleCount(AY, IY))
        }
      }
      _uploadImageToTexture(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AY = this._gl,
          IY = this._getWebGLTextureType(YY.type),
          RY = this._getInternalFormat(YY.format),
          OY = this._getRGBABufferInternalSizedFormat(YY.type, RY),
          gY = YY.isCube ? AY.TEXTURE_CUBE_MAP : AY.TEXTURE_2D;
        this._bindTextureDirectly(gY, YY, !0), this._unpackFlipY(YY.invertY);
        let aY = AY.TEXTURE_2D;
        YY.isCube && (aY = AY.TEXTURE_CUBE_MAP_POSITIVE_X + DY), AY.texImage2D(aY, FY, OY, RY, IY, rY), this._bindTextureDirectly(gY, null, !0)
      }
      updateTextureComparisonFunction(YY, rY) {
        if (1 === this.VQ) return void vY.d.Error("WebGL 1 does not support texture comparison.");
        const DY = this._gl;
        YY.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, YY, !0), 0 === rY ? (DY.texParameteri(DY.TEXTURE_CUBE_MAP, DY.TEXTURE_COMPARE_FUNC, 515), DY.texParameteri(DY.TEXTURE_CUBE_MAP, DY.TEXTURE_COMPARE_MODE, DY.NONE)) : (DY.texParameteri(DY.TEXTURE_CUBE_MAP, DY.TEXTURE_COMPARE_FUNC, rY), DY.texParameteri(DY.TEXTURE_CUBE_MAP, DY.TEXTURE_COMPARE_MODE, DY.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, YY, !0), 0 === rY ? (DY.texParameteri(DY.TEXTURE_2D, DY.TEXTURE_COMPARE_FUNC, 515), DY.texParameteri(DY.TEXTURE_2D, DY.TEXTURE_COMPARE_MODE, DY.NONE)) : (DY.texParameteri(DY.TEXTURE_2D, DY.TEXTURE_COMPARE_FUNC, rY), DY.texParameteri(DY.TEXTURE_2D, DY.TEXTURE_COMPARE_MODE, DY.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), YY._comparisonFunction = rY
      }
      createInstancesBuffer(YY) {
        const rY = this._gl.createBuffer();
        if (!rY) throw new Error("Unable to create instance buffer");
        const DY = new aY.d(rY);
        return DY.gu = YY, this.bindArrayBuffer(DY), this._gl.bufferData(this._gl.ARRAY_BUFFER, YY, this._gl.DYNAMIC_DRAW), DY.references = 1, DY
      }
      deleteInstancesBuffer(YY) {
        this._gl.deleteBuffer(YY)
      }
      async _clientWaitAsync(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const FY = this._gl;
        return await new Promise(((AY, IY) => {
          (0, EY.e)((() => {
            const DY = FY.clientWaitSync(YY, rY, 0);
            if (DY == FY.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return DY != FY.TIMEOUT_EXPIRED
          }), AY, IY, DY)
        }))
      }
      _readPixelsAsync(YY, rY, DY, FY, AY, IY, RY) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const OY = this._gl,
          gY = OY.createBuffer();
        OY.bindBuffer(OY.PIXEL_PACK_BUFFER, gY), OY.bufferData(OY.PIXEL_PACK_BUFFER, RY.byteLength, OY.STREAM_READ), OY.readPixels(YY, rY, DY, FY, AY, IY, 0), OY.bindBuffer(OY.PIXEL_PACK_BUFFER, null);
        const aY = OY.fenceSync(OY.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return aY ? (OY.flush(), this._clientWaitAsync(aY, 0, 10).then((() => (OY.deleteSync(aY), OY.bindBuffer(OY.PIXEL_PACK_BUFFER, gY), OY.getBufferSubData(OY.PIXEL_PACK_BUFFER, 0, RY), OY.bindBuffer(OY.PIXEL_PACK_BUFFER, null), OY.deleteBuffer(gY), RY)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(YY, rY) {
            1 === AY.d.Instances.length && sY.d.audioEngine && (sY.d.audioEngine.dispose(), sY.d.audioEngine = null);
            const DY = YY.getHostWindow();
            DY && "function" === typeof DY.removeEventListener && (DY.removeEventListener("blur", YY._onBlur), DY.removeEventListener("focus", YY._onFocus)), rY && (rY.removeEventListener("focus", YY._onCanvasFocus), rY.removeEventListener("blur", YY._onCanvasBlur), rY.removeEventListener("pointerout", YY._onCanvasPointerOut), rY.removeEventListener("contextmenu", YY._onCanvasContextMenu)), (0, iY.e)() && (document.removeEventListener("fullscreenchange", YY._onFullscreenChange), document.removeEventListener("mozfullscreenchange", YY._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", YY._onFullscreenChange), document.removeEventListener("msfullscreenchange", YY._onFullscreenChange), document.removeEventListener("pointerlockchange", YY._onPointerLockChange), document.removeEventListener("mspointerlockchange", YY._onPointerLockChange), document.removeEventListener("mozpointerlockchange", YY._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", YY._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    SY.ALPHA_DISABLE = 0, SY.ALPHA_ADD = 1, SY.ALPHA_COMBINE = 2, SY.ALPHA_SUBTRACT = 3, SY.ALPHA_MULTIPLY = 4, SY.ALPHA_MAXIMIZED = 5, SY.ALPHA_ONEONE = 6, SY.ALPHA_PREMULTIPLIED = 7, SY.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, SY.ALPHA_INTERPOLATE = 9, SY.ALPHA_SCREENMODE = 10, SY.DELAYLOADSTATE_NONE = 0, SY.DELAYLOADSTATE_LOADED = 1, SY.DELAYLOADSTATE_LOADING = 2, SY.DELAYLOADSTATE_NOTLOADED = 4, SY.NEVER = 512, SY.ALWAYS = 519, SY.LESS = 513, SY.EQUAL = 514, SY.LEQUAL = 515, SY.GREATER = 516, SY.GEQUAL = 518, SY.NOTEQUAL = 517, SY.KEEP = 7680, SY.REPLACE = 7681, SY.INCR = 7682, SY.DECR = 7683, SY.INVERT = 5386, SY.INCR_WRAP = 34055, SY.DECR_WRAP = 34056, SY.TEXTURE_CLAMP_ADDRESSMODE = 0, SY.TEXTURE_WRAP_ADDRESSMODE = 1, SY.TEXTURE_MIRROR_ADDRESSMODE = 2, SY.TEXTUREFORMAT_ALPHA = 0, SY.TEXTUREFORMAT_LUMINANCE = 1, SY.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, SY.TEXTUREFORMAT_RGB = 4, SY.TEXTUREFORMAT_RGBA = 5, SY.TEXTUREFORMAT_RED = 6, SY.TEXTUREFORMAT_R = 6, SY.TEXTUREFORMAT_R16_UNORM = 33322, SY.TEXTUREFORMAT_RG16_UNORM = 33324, SY.TEXTUREFORMAT_RGB16_UNORM = 32852, SY.TEXTUREFORMAT_RGBA16_UNORM = 32859, SY.TEXTUREFORMAT_R16_SNORM = 36760, SY.TEXTUREFORMAT_RG16_SNORM = 36761, SY.TEXTUREFORMAT_RGB16_SNORM = 36762, SY.TEXTUREFORMAT_RGBA16_SNORM = 36763, SY.TEXTUREFORMAT_RG = 7, SY.TEXTUREFORMAT_RED_INTEGER = 8, SY.TEXTUREFORMAT_R_INTEGER = 8, SY.TEXTUREFORMAT_RG_INTEGER = 9, SY.TEXTUREFORMAT_RGB_INTEGER = 10, SY.TEXTUREFORMAT_RGBA_INTEGER = 11, SY.TEXTURETYPE_UNSIGNED_BYTE = 0, SY.TEXTURETYPE_UNSIGNED_INT = 0, SY.TEXTURETYPE_FLOAT = 1, SY.TEXTURETYPE_HALF_FLOAT = 2, SY.TEXTURETYPE_BYTE = 3, SY.TEXTURETYPE_SHORT = 4, SY.TEXTURETYPE_UNSIGNED_SHORT = 5, SY.TEXTURETYPE_INT = 6, SY.TEXTURETYPE_UNSIGNED_INTEGER = 7, SY.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, SY.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, SY.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, SY.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, SY.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, SY.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, SY.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, SY.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, SY.TEXTURE_NEAREST_SAMPLINGMODE = 1, SY.TEXTURE_BILINEAR_SAMPLINGMODE = 2, SY.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, SY.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, SY.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, SY.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, SY.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, SY.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, SY.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, SY.TEXTURE_NEAREST_LINEAR = 7, SY.TEXTURE_NEAREST_NEAREST = 1, SY.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, SY.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, SY.TEXTURE_LINEAR_LINEAR = 2, SY.TEXTURE_LINEAR_NEAREST = 12, SY.TEXTURE_EXPLICIT_MODE = 0, SY.TEXTURE_SPHERICAL_MODE = 1, SY.TEXTURE_PLANAR_MODE = 2, SY.TEXTURE_CUBIC_MODE = 3, SY.TEXTURE_PROJECTION_MODE = 4, SY.TEXTURE_SKYBOX_MODE = 5, SY.TEXTURE_INVCUBIC_MODE = 6, SY.TEXTURE_EQUIRECTANGULAR_MODE = 7, SY.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, SY.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, SY.SCALEMODE_FLOOR = 1, SY.SCALEMODE_NEAREST = 2, SY.SCALEMODE_CEILING = 3
  },
  39116: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY
    });
    var FY = DY(39078);
    class AY {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(YY) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = YY, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, YY && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, FY.d)(YY.format))
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
      getBaseArrayLayer(YY) {
        if (!this._textures) return -1;
        const rY = this._textures[YY],
          DY = this._layerIndices?.[YY] ?? 0,
          FY = this._faceIndices?.[YY] ?? 0;
        return rY.isCube ? 6 * DY + FY : rY.is3D ? 0 : DY
      }
      get samples() {
        return this._samples
      }
      setSamples(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === YY && !DY) return YY;
        const FY = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, YY, rY) : this._engine.updateRenderTargetTextureSampleCount(this, YY);
        return this._samples = YY, FY
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(YY, rY, DY, FY, AY) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = YY, this._isCube = rY, this._size = DY, this._engine = FY, this._depthStencilTexture = null, this.label = AY
      }
      setTextures(YY) {
        Array.isArray(YY) ? this._textures = YY : this._textures = YY ? [YY] : null
      }
      setTexture(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[rY] !== YY && (this._textures[rY] && DY && this._textures[rY].dispose(), this._textures[rY] = YY)
      }
      setLayerAndFaceIndices(YY, rY) {
        this._layerIndices = YY, this._faceIndices = rY
      }
      setLayerAndFaceIndex() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== rY && rY >= 0 && (this._layerIndices[YY] = rY), void 0 !== DY && DY >= 0 && (this._faceIndices[YY] = DY)
      }
      createDepthStencilTexture() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = DY, this._depthStencilTextureLabel = IY, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: rY,
          comparisonFunction: YY,
          generateStencil: DY,
          isCube: this._isCube,
          samples: FY,
          depthTextureFormat: AY,
          label: IY
        }, this), this._depthStencilTexture
      }
      _shareDepth(YY) {
        this.shareDepth(YY)
      }
      shareDepth(YY) {
        this._depthStencilTexture && (YY._depthStencilTexture && YY._depthStencilTexture.dispose(), YY._depthStencilTexture = this._depthStencilTexture, YY._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(YY) {
        this.texture && this.texture._swapAndDie(YY), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let YY = null;
        if (this._isMulti) {
          const rY = this.textures;
          if (rY && rY.length > 0) {
            let DY = !1,
              FY = rY.length,
              AY = -1;
            const IY = rY[rY.length - 1]._source;
            14 !== IY && 12 !== IY || (DY = !0, AY = rY[rY.length - 1].format, FY--);
            const RY = [],
              OY = [],
              gY = [],
              aY = [],
              vY = [],
              uY = [],
              sY = [],
              iY = {};
            for (let YY = 0; YY < FY; ++YY) {
              const DY = rY[YY];
              RY.push(DY.samplingMode), OY.push(DY.type), gY.push(DY.format);
              void 0 !== iY[DY.uniqueId] ? (aY.push(-1), sY.push(0)) : (iY[DY.uniqueId] = YY, DY.is2DArray ? (aY.push(35866), sY.push(DY.depth)) : DY.isCube ? (aY.push(34067), sY.push(0)) : DY.is3D ? (aY.push(32879), sY.push(DY.depth)) : (aY.push(3553), sY.push(0))), this._faceIndices && vY.push(this._faceIndices[YY] ?? 0), this._layerIndices && uY.push(this._layerIndices[YY] ?? 0)
            }
            const yY = {
                samplingModes: RY,
                generateMipMaps: rY[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: DY,
                depthTextureFormat: AY,
                types: OY,
                formats: gY,
                qIY: FY,
                targetTypes: aY,
                faceIndex: vY,
                layerIndex: uY,
                layerCounts: sY,
                label: this.label
              },
              QY = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            YY = this._engine.createMultipleRenderTarget(QY, yY);
            for (let oY = 0; oY < FY; ++oY) {
              if (-1 !== aY[oY]) continue;
              const DY = iY[rY[oY].uniqueId];
              YY.setTexture(YY.textures[DY], oY)
            }
          }
        } else {
          const rY = {};
          if (rY.generateDepthBuffer = this._generateDepthBuffer, rY.generateMipMaps = this.texture?.generateMipMaps ?? !1, rY.generateStencilBuffer = this._generateStencilBuffer, rY.samplingMode = this.texture?.samplingMode, rY.type = this.texture?.type, rY.format = this.texture?.format, rY.noColorAttachment = !this._textures, rY.label = this.label, this.isCube) YY = this._engine.createRenderTargetCubeTexture(this.width, rY);
          else {
            const DY = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            YY = this._engine.createRenderTargetTexture(DY, rY)
          }
          YY.texture && (YY.texture.isReady = !0)
        }
        return YY
      }
      _swapRenderTargetWrapper(YY) {
        if (this._textures && YY._textures)
          for (let rY = 0; rY < this._textures.length; ++rY) this._textures[rY]._swapAndDie(YY._textures[rY], !1), YY._textures[rY].isReady = !0;
        this._depthStencilTexture && YY._depthStencilTexture && (this._depthStencilTexture._swapAndDie(YY._depthStencilTexture), YY._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const YY = this._cloneRenderTargetWrapper();
        if (YY) {
          if (this._depthStencilTexture) {
            const rY = this._depthStencilTexture.samplingMode,
              DY = this._depthStencilTexture.format,
              FY = 2 === rY || 3 === rY || 11 === rY;
            YY.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, FY, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, DY, this._depthStencilTextureLabel)
          }
          this.samples > 1 && YY.setSamples(this.samples), YY._swapRenderTargetWrapper(this), YY.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let YY = 0; YY < this._textures.length; ++YY) this._textures[YY].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39543: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static get ForceFullSceneLoadingForIncremental() {
        return FY._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(YY) {
        FY._ForceFullSceneLoadingForIncremental = YY
      }
      static get ShowLoadingScreen() {
        return FY._ShowLoadingScreen
      }
      static set ShowLoadingScreen(YY) {
        FY._ShowLoadingScreen = YY
      }
      static get loggingLevel() {
        return FY._LoggingLevel
      }
      static set loggingLevel(YY) {
        FY._LoggingLevel = YY
      }
      static get CleanBoneMatrixWeights() {
        return FY._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(YY) {
        FY._CleanBoneMatrixWeights = YY
      }
    }
    FY._ForceFullSceneLoadingForIncremental = !1, FY._ShowLoadingScreen = !0, FY._CleanBoneMatrixWeights = !1, FY._LoggingLevel = 0
  },
  39200: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38040);
    const AY = new Map;

    function IY(YY, rY) {
      (function(YY) {
        return AY.delete(YY)
      })(YY) && FY.d.Warn(`Extension with the name '${YY}' already exists`), AY.set(YY, rY)
    }

    function RY(YY, rY) {
      "image/ktx" !== rY && "image/ktx2" !== rY || (YY = ".ktx"), AY.has(YY) || (YY.endsWith(".ies") && IY(".ies", (async () => await DY.e(299).then((() => DY(40833))).then((YY => new YY._IESTextureLoader)))), YY.endsWith(".dds") && IY(".dds", (async () => await DY.e(297).then((() => DY(40838))).then((YY => new YY._DDSTextureLoader)))), YY.endsWith(".basis") && IY(".basis", (async () => await DY.e(300).then((() => DY(40841))).then((YY => new YY._BasisTextureLoader)))), YY.endsWith(".env") && IY(".env", (async () => await Promise.all([DY.e(301), DY.e(298)]).then((() => DY(40846))).then((YY => new YY._ENVTextureLoader)))), YY.endsWith(".hdr") && IY(".hdr", (async () => await DY.e(302).then((() => DY(40902))).then((YY => new YY._HDRTextureLoader)))), (YY.endsWith(".ktx") || YY.endsWith(".ktx2")) && (IY(".ktx", (async () => await DY.e(303).then((() => DY(40907))).then((YY => new YY._KTXTextureLoader)))), IY(".ktx2", (async () => await DY.e(303).then((() => DY(40907))).then((YY => new YY._KTXTextureLoader))))), YY.endsWith(".tga") && IY(".tga", (async () => await DY.e(304).then((() => DY(40917))).then((YY => new YY._TGATextureLoader)))), YY.endsWith(".exr") && IY(".exr", (async () => await DY.e(305).then((() => DY(40926))).then((YY => new YY._ExrTextureLoader)))));
      const FY = AY.get(YY);
      return FY ? Promise.resolve(FY(rY)) : null
    }
  },
  39568: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      f: () => aY
    });
    var FY = DY(39414),
      AY = DY(39149),
      IY = DY(36569);
    class RY extends FY.c {
      get J_() {
        return this._subMaterials
      }
      set J_(YY) {
        this._subMaterials = YY, this._hookArray(YY)
      }
      getChildren() {
        return this.J_
      }
      constructor(YY, rY) {
        super(YY, rY, !0), this._waitingSubMaterialsUniqueIds = [], this.hT().addMultiMaterial(this), this.J_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(YY) {
        var rY = this;
        const DY = YY.push;
        YY.push = function() {
          for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
          const RY = DY.apply(YY, AY);
          return rY._markAllSubMeshesAsTexturesDirty(), RY
        };
        const FY = YY.splice;
        YY.splice = (rY, DY) => {
          const AY = FY.call(YY, rY, DY ?? YY.length);
          return this._markAllSubMeshesAsTexturesDirty(), AY
        }
      }
      getSubMaterial(YY) {
        return YY < 0 || YY >= this.J_.length ? this.hT().defaultMaterial : this.J_[YY]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.J_.map((YY => YY ? YY.getActiveTextures() : [])))
      }
      hasTexture(YY) {
        if (super.hasTexture(YY)) return !0;
        for (let rY = 0; rY < this.J_.length; rY++)
          if (this.J_[rY]?.hasTexture(YY)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(YY, rY, DY) {
        for (let FY = 0; FY < this.J_.length; FY++) {
          const AY = this.J_[FY];
          if (AY) {
            if (AY._storeEffectOnSubMeshes) {
              if (!AY.isReadyForSubMesh(YY, rY, DY)) return !1;
              continue
            }
            if (!AY.isReady(YY)) return !1
          }
        }
        return !0
      }
      clone(YY, rY) {
        const DY = new RY(YY, this.hT());
        for (let FY = 0; FY < this.J_.length; FY++) {
          let AY;
          const IY = this.J_[FY];
          AY = rY && IY ? IY.clone(YY + "-" + IY.name) : this.J_[FY], DY.J_.push(AY)
        }
        return DY
      }
      serialize() {
        const YY = {};
        YY.name = this.name, YY.id = this.id, YY.uniqueId = this.uniqueId, AY.e && (YY.tags = AY.e.GetTags(this)), YY.materialsUniqueIds = [], YY.materials = [];
        for (let rY = 0; rY < this.J_.length; rY++) {
          const DY = this.J_[rY];
          DY ? (YY.materialsUniqueIds.push(DY.uniqueId), YY.materials.push(DY.id)) : (YY.materialsUniqueIds.push(null), YY.materials.push(null))
        }
        return YY
      }
      dispose(YY, rY, DY) {
        const FY = this.hT();
        if (!FY) return;
        if (DY)
          for (let IY = 0; IY < this.J_.length; IY++) {
            const DY = this.J_[IY];
            DY && DY.dispose(YY, rY)
          }
        const AY = FY.multiMaterials.indexOf(this);
        AY >= 0 && FY.multiMaterials.splice(AY, 1), super.dispose(YY, rY)
      }
    }
    let OY = !1;

    function gY(YY, rY) {
      const DY = new RY(YY.name, rY);
      if (DY.id = YY.id, DY._loadedUniqueId = YY.uniqueId, AY.e && AY.e.AddTagsTo(DY, YY.tags), YY.materialsUniqueIds) DY._waitingSubMaterialsUniqueIds = YY.materialsUniqueIds;
      else
        for (const FY of YY.materials) DY.J_.push(rY.getLastMaterialById(FY));
      return DY
    }

    function aY() {
      OY || (OY = !0, RY.ParseMultiMaterial = gY, (0, IY.i)("BABYLON.MultiMaterial", RY))
    }
  },
  39355: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY, AY, IY = DY(36524);
    ! function(YY) {
      YY[YY.LOCAL = 0] = "LOCAL", YY[YY.WORLD = 1] = "WORLD", YY[YY.BONE = 2] = "BONE"
    }(FY || (FY = {}));
    class RY {}
    RY.X = new IY.r(1, 0, 0), RY.Y = new IY.r(0, 1, 0), RY.Z = new IY.r(0, 0, 1),
      function(YY) {
        YY[YY.X = 0] = "X", YY[YY.Y = 1] = "Y", YY[YY.Z = 2] = "Z"
      }(AY || (AY = {}))
  },
  39120: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => gY,
      f: () => aY
    });
    var FY = DY(36524);
    const AY = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      IY = [() => 1, YY => YY.y, YY => YY.z, YY => YY.x, YY => YY.x * YY.y, YY => YY.y * YY.z, YY => 3 * YY.z * YY.z - 1, YY => YY.x * YY.z, YY => YY.x * YY.x - YY.y * YY.y],
      RY = (YY, rY) => AY[YY] * IY[YY](rY),
      OY = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class gY {
      constructor() {
        this.preScaled = !1, this.l00 = FY.r.Zero(), this.l1_1 = FY.r.Zero(), this.l10 = FY.r.Zero(), this.l11 = FY.r.Zero(), this.l2_2 = FY.r.Zero(), this.l2_1 = FY.r.Zero(), this.l20 = FY.r.Zero(), this.l21 = FY.r.Zero(), this.l22 = FY.r.Zero()
      }
      addLight(YY, rY, DY) {
        FY.n.xy[0].set(rY.r, rY.g, rY.b);
        const AY = FY.n.xy[0],
          IY = FY.n.xy[1];
        AY.scaleToRef(DY, IY), IY.scaleToRef(RY(0, YY), FY.n.xy[2]), this.l00.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(1, YY), FY.n.xy[2]), this.l1_1.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(2, YY), FY.n.xy[2]), this.l10.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(3, YY), FY.n.xy[2]), this.l11.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(4, YY), FY.n.xy[2]), this.l2_2.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(5, YY), FY.n.xy[2]), this.l2_1.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(6, YY), FY.n.xy[2]), this.l20.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(7, YY), FY.n.xy[2]), this.l21.addInPlace(FY.n.xy[2]), IY.scaleToRef(RY(8, YY), FY.n.xy[2]), this.l22.addInPlace(FY.n.xy[2])
      }
      scaleInPlace(YY) {
        this.l00.scaleInPlace(YY), this.l1_1.scaleInPlace(YY), this.l10.scaleInPlace(YY), this.l11.scaleInPlace(YY), this.l2_2.scaleInPlace(YY), this.l2_1.scaleInPlace(YY), this.l20.scaleInPlace(YY), this.l21.scaleInPlace(YY), this.l22.scaleInPlace(YY)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(OY[0]), this.l1_1.scaleInPlace(OY[1]), this.l10.scaleInPlace(OY[2]), this.l11.scaleInPlace(OY[3]), this.l2_2.scaleInPlace(OY[4]), this.l2_1.scaleInPlace(OY[5]), this.l20.scaleInPlace(OY[6]), this.l21.scaleInPlace(OY[7]), this.l22.scaleInPlace(OY[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(AY[0]), this.l1_1.scaleInPlace(AY[1]), this.l10.scaleInPlace(AY[2]), this.l11.scaleInPlace(AY[3]), this.l2_2.scaleInPlace(AY[4]), this.l2_1.scaleInPlace(AY[5]), this.l20.scaleInPlace(AY[6]), this.l21.scaleInPlace(AY[7]), this.l22.scaleInPlace(AY[8])
      }
      updateFromArray(YY) {
        return FY.r.FromArrayToRef(YY[0], 0, this.l00), FY.r.FromArrayToRef(YY[1], 0, this.l1_1), FY.r.FromArrayToRef(YY[2], 0, this.l10), FY.r.FromArrayToRef(YY[3], 0, this.l11), FY.r.FromArrayToRef(YY[4], 0, this.l2_2), FY.r.FromArrayToRef(YY[5], 0, this.l2_1), FY.r.FromArrayToRef(YY[6], 0, this.l20), FY.r.FromArrayToRef(YY[7], 0, this.l21), FY.r.FromArrayToRef(YY[8], 0, this.l22), this
      }
      updateFromFloatsArray(YY) {
        return FY.r.FromFloatsToRef(YY[0], YY[1], YY[2], this.l00), FY.r.FromFloatsToRef(YY[3], YY[4], YY[5], this.l1_1), FY.r.FromFloatsToRef(YY[6], YY[7], YY[8], this.l10), FY.r.FromFloatsToRef(YY[9], YY[10], YY[11], this.l11), FY.r.FromFloatsToRef(YY[12], YY[13], YY[14], this.l2_2), FY.r.FromFloatsToRef(YY[15], YY[16], YY[17], this.l2_1), FY.r.FromFloatsToRef(YY[18], YY[19], YY[20], this.l20), FY.r.FromFloatsToRef(YY[21], YY[22], YY[23], this.l21), FY.r.FromFloatsToRef(YY[24], YY[25], YY[26], this.l22), this
      }
      static FromArray(YY) {
        return (new gY).updateFromArray(YY)
      }
      static FromPolynomial(YY) {
        const rY = new gY;
        return rY.l00 = YY.xx.scale(.376127).add(YY.yy.scale(.376127)).add(YY.zz.scale(.376126)), rY.l1_1 = YY.y.scale(.977204), rY.l10 = YY.z.scale(.977204), rY.l11 = YY.x.scale(.977204), rY.l2_2 = YY.xy.scale(1.16538), rY.l2_1 = YY.yz.scale(1.16538), rY.l20 = YY.zz.scale(1.34567).subtract(YY.xx.scale(.672834)).subtract(YY.yy.scale(.672834)), rY.l21 = YY.zx.scale(1.16538), rY.l22 = YY.xx.scale(1.16538).subtract(YY.yy.scale(1.16538)), rY.l1_1.scaleInPlace(-1), rY.l11.scaleInPlace(-1), rY.l2_1.scaleInPlace(-1), rY.l21.scaleInPlace(-1), rY.scaleInPlace(Math.PI), rY
      }
    }
    class aY {
      constructor() {
        this.x = FY.r.Zero(), this.y = FY.r.Zero(), this.z = FY.r.Zero(), this.xx = FY.r.Zero(), this.yy = FY.r.Zero(), this.zz = FY.r.Zero(), this.xy = FY.r.Zero(), this.yz = FY.r.Zero(), this.zx = FY.r.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = gY.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(YY) {
        FY.n.xy[0].p_(YY.r, YY.g, YY.b);
        const rY = FY.n.xy[0];
        this.xx.addInPlace(rY), this.yy.addInPlace(rY), this.zz.addInPlace(rY)
      }
      scaleInPlace(YY) {
        this.x.scaleInPlace(YY), this.y.scaleInPlace(YY), this.z.scaleInPlace(YY), this.xx.scaleInPlace(YY), this.yy.scaleInPlace(YY), this.zz.scaleInPlace(YY), this.yz.scaleInPlace(YY), this.zx.scaleInPlace(YY), this.xy.scaleInPlace(YY)
      }
      updateFromHarmonics(YY) {
        return this._harmonics = YY, this.x.brY(YY.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.brY(YY.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.brY(YY.l10), this.z.scaleInPlace(1.02333), this.xx.brY(YY.l00), FY.n.xy[0].brY(YY.l20).scaleInPlace(.247708), FY.n.xy[1].brY(YY.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).dDY(FY.n.xy[0]).addInPlace(FY.n.xy[1]), this.yy.brY(YY.l00), this.yy.scaleInPlace(.886277).dDY(FY.n.xy[0]).dDY(FY.n.xy[1]), this.zz.brY(YY.l00), FY.n.xy[0].brY(YY.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(FY.n.xy[0]), this.yz.brY(YY.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.brY(YY.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.brY(YY.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(YY) {
        return (new aY).updateFromHarmonics(YY)
      }
      static FromArray(YY) {
        const rY = new aY;
        return FY.r.FromArrayToRef(YY[0], 0, rY.x), FY.r.FromArrayToRef(YY[1], 0, rY.y), FY.r.FromArrayToRef(YY[2], 0, rY.z), FY.r.FromArrayToRef(YY[3], 0, rY.xx), FY.r.FromArrayToRef(YY[4], 0, rY.yy), FY.r.FromArrayToRef(YY[5], 0, rY.zz), FY.r.FromArrayToRef(YY[6], 0, rY.yz), FY.r.FromArrayToRef(YY[7], 0, rY.zx), FY.r.FromArrayToRef(YY[8], 0, rY.xy), rY
      }
    }
  },
  39554: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => ZY,
      c: () => fY
    });
    var FY = DY(39127),
      AY = DY(36552),
      IY = DY(36524),
      RY = DY(39270),
      OY = DY(39530),
      gY = DY(39560),
      aY = DY(39261),
      vY = DY(39422),
      uY = DY(39255);
    class sY {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new IY.r(0, 0, 0), this._diffPositionForCollisions = new IY.r(0, 0, 0), this._collisionResponse = !0
      }
    }
    var iY, yY, QY, oY = DY(39029),
      WY = DY(39184),
      EY = DY(39429),
      mY = DY(36588),
      VY = DY(36533),
      SY = DY(39355),
      lY = DY(38040),
      TY = DY(39131),
      eY = DY(39041),
      NY = DY(36569);

    function BY(YY, rY) {
      return YY - Math.floor(YY / rY) * rY
    }

    function cY(YY, rY, DY) {
      YY instanceof Float32Array ? IY.e.FromArrayToRef(YY, rY, DY) : DY.p_((0, WY.c)(YY[rY]), (0, WY.c)(YY[rY + 1]), (0, WY.c)(YY[rY + 2]), (0, WY.c)(YY[rY + 3]), (0, WY.c)(YY[rY + 4]), (0, WY.c)(YY[rY + 5]), (0, WY.c)(YY[rY + 6]), (0, WY.c)(YY[rY + 7]), (0, WY.c)(YY[rY + 8]), (0, WY.c)(YY[rY + 9]), (0, WY.c)(YY[rY + 10]), (0, WY.c)(YY[rY + 11]), (0, WY.c)(YY[rY + 12]), (0, WY.c)(YY[rY + 13]), (0, WY.c)(YY[rY + 14]), (0, WY.c)(YY[rY + 15]))
    }

    function KY(YY, rY, DY, FY, AY, OY, gY, aY, vY) {
      const uY = DY.texture,
        sY = uY?.getInternalTexture(),
        iY = sY?._bufferView;
      if (!(iY instanceof Float32Array) && !(iY instanceof Uint16Array)) return lY.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const yY = uY.getSize(),
        QY = function(YY, rY) {
          const DY = YY.y - YY.x + 1,
            FY = rY * YY.w / DY,
            AY = FY < 1 ? 0 : 1,
            IY = DY - AY;
          let RY = BY(FY - Math.floor(FY), 1) * IY;
          return RY = BY(RY + YY.z, IY), Math.floor(RY) + YY.x + AY
        }(FY, DY.time);
      if (!isFinite(QY) || QY < 0 || QY >= yY.height) return lY.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const oY = IY.n.xy[0],
        WY = IY.n.Matrix[0],
        EY = IY.n.Matrix[1],
        mY = QY * yY.width * 4,
        VY = rY === RY.l.NormalKind ? IY.r.TransformNormalFromFloatsToRef : IY.r.TransformCoordinatesFromFloatsToRef;
      for (let IY = 0, RY = 0; IY < YY.length; IY += 3, RY += 4) {
        let rY, DY;
        for (WY.reset(), rY = 0; rY < 4 && rY < vY; rY++) DY = OY[RY + rY], DY > 0 && (cY(iY, mY + 16 * Math.floor(AY[RY + rY]), EY), EY.scaleAndAddToRef(DY, WY));
        if (gY && aY)
          for (rY = 0; rY < 4 && rY + 4 < vY; rY++) DY = aY[RY + rY], DY > 0 && (cY(iY, mY + 16 * Math.floor(gY[RY + rY]), EY), EY.scaleAndAddToRef(DY, WY));
        VY(YY[IY], YY[IY + 1], YY[IY + 2], WY, oY), oY.toArray(YY, IY)
      }
      return !0
    }
    class HY {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = IY.r.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class zY {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new HY, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new sY, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let ZY = (() => {
        var YY;
        let rY, sY = gY.g,
          iY = [];
        return YY = class extends sY {
          static get BILLBOARDMODE_NONE() {
            return gY.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return gY.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return gY.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return gY.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return gY.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return gY.g.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(YY) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = YY
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(YY) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = YY
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(YY) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = YY
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(YY) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = YY
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(YY) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = YY
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(YY) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== YY && (this._internalAbstractMeshDataInfo._morphTargetManager = YY, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(YY) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== YY && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = YY, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(YY) {
            return !!super._updateNonUniformScalingState(YY) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(YY) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = YY
          }
          set Lu(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(YY)
          }
          set onCollisionPositionChange(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(YY)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(YY) {
            if (this._internalAbstractMeshDataInfo._visibility === YY) return;
            const rY = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = YY, (1 === rY && 1 !== YY || 1 !== rY && 1 === YY) && this._markSubMeshesAsDirty((YY => {
              YY.markAsMiscDirty(), YY.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(YY) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = YY
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(YY) {
            this._internalAbstractMeshDataInfo._renderingGroupId = YY
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(YY) {
            if (!Number.isInteger(YY) || YY < 0 || YY > 255 || 0 !== YY && 0 === (63 & YY)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = YY
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(YY) {
            this._setMaterial(YY)
          }
          _setMaterial(YY) {
            this._internalAbstractMeshDataInfo._material !== YY && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = YY, YY && YY.meshMap && (YY.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.qm && (this.resetDrawCache(void 0, null == YY), this._unBindEffect()))
          }
          getMaterialForRenderPass(YY) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[YY]
          }
          setMaterialForRenderPass(YY, rY) {
            this.resetDrawCache(YY), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const DY = this._internalAbstractMeshDataInfo._materialForRenderPass[YY];
            DY?.meshMap?.[this.uniqueId] && (DY.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[YY] = rY, rY && rY.meshMap && (rY.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(YY) {
            this._internalAbstractMeshDataInfo._receiveShadows !== YY && (this._internalAbstractMeshDataInfo._receiveShadows = YY, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(YY) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== YY && (this._internalAbstractMeshDataInfo._hasVertexAlpha = YY, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(YY) {
            this._internalAbstractMeshDataInfo._useVertexColors !== YY && (this._internalAbstractMeshDataInfo._useVertexColors = YY, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(YY) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== YY && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = YY, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(YY) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== YY && (this._internalAbstractMeshDataInfo._numBoneInfluencers = YY, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(YY) {
            this._internalAbstractMeshDataInfo._applyFog !== YY && (this._internalAbstractMeshDataInfo._applyFog = YY, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(YY) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = YY
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(YY) {
            YY !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = YY, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(YY) ? -1 : YY
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = YY
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(YY) ? -1 : YY
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = YY
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(YY) {
            const rY = this._internalAbstractMeshDataInfo._skeleton;
            rY && rY.needInitialSkinMatrix && rY._unregisterMeshWithPoseMatrix(this), YY && YY.needInitialSkinMatrix && YY._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = YY, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(rY) {
            var DY;
            let FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(rY, FY, !1), DY = this, this._internalAbstractMeshDataInfo = new zY, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = YY.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new AY.e, this.onCollisionPositionChangeObservable = new AY.e, this.onMaterialChangedObservable = new AY.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Yo = YY.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = mY.c.Red(), this.outlineWidth = .02, this.overlayColor = mY.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Gy = !1, this.Py = !1, this.actionManager = null, this.ellipsoid = new IY.r(.5, 1, .5), this.ellipsoidOffset = new IY.r(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new mY.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                aN: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new AY.e, this._onCollisionPositionChange = function(YY, rY) {
                let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                rY.subtractToRef(DY._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, DY._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), DY._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > eY.d.CollisionsEpsilon && DY.position.addInPlace(DY._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), FY && DY.onCollideObservable.notifyObservers(FY), DY.onCollisionPositionChangeObservable.notifyObservers(DY.position)
              }, FY = this.hT(), this.layerMask = FY.defaultRenderableLayerMask, FY.WDY(this), this._resyncLightSources(), this._uniformBuffer = new uY.b(this.hT().ky(), void 0, void 0, rY, !this.hT().ky().isWebGPU), this._buildUniformLayout(), FY.performancePriority) {
              case 2:
                this.Py = !0;
              case 1:
                this.Gy = !0, this.Yo = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(YY) {
            const rY = this._uniformBuffer;
            rY.m_("world", YY), rY.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), rY.update()
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
          toString(YY) {
            let rY = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            rY += ", # of submeshes: " + (this.qm ? this.qm.length : 0);
            const DY = this._internalAbstractMeshDataInfo._skeleton;
            return DY && (rY += ", skeleton: " + DY.name), YY && (rY += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], rY += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.aN ? "YES" : "NO")), rY
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== gY.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(YY) {
            let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (rY || this.actionManager.isRecursive)) {
              if (!YY) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(YY)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(YY, !1) : null
          }
          _releaseRenderPassId(YY) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.qm) {
              for (const YY of this.qm) YY._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const YY of this.hT().lights) YY.isEnabled() && YY.canAffectMesh(this) && this._lightSources.push(YY);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(YY) {
            const rY = YY.isEnabled() && YY.canAffectMesh(this),
              DY = this._lightSources.indexOf(YY);
            let FY = !1;
            if (-1 === DY) {
              if (!rY) return;
              this._lightSources.push(YY)
            } else {
              if (rY) return;
              FY = !0, this._lightSources.splice(DY, 1)
            }
            this._markSubMeshesAsLightDirty(FY)
          }
          _unBindEffect() {
            for (const YY of this.qm) YY.setEffect(null)
          }
          _removeLightSource(YY, rY) {
            const DY = this._lightSources.indexOf(YY); - 1 !== DY && (this._lightSources.splice(DY, 1), this._markSubMeshesAsLightDirty(rY))
          }
          _markSubMeshesAsDirty(YY) {
            if (this.qm)
              for (const rY of this.qm)
                for (let DY = 0; DY < rY._drawWrappers.length; ++DY) {
                  const FY = rY._drawWrappers[DY];
                  FY && FY.defines && FY.defines.markAllAsDirty && YY(FY.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((rY => rY.markAsLightDirty(YY)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((YY => YY.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((YY => YY.markAsMiscDirty()))
          }
          nYY(YY) {
            return this._currentRenderId = Number.MAX_VALUE, super.nYY(YY), this._isDirty = !0, this
          }
          resetDrawCache(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.qm)
              for (const DY of this.qm) DY.resetDrawCache(YY, rY)
          }
          get isBlocked() {
            return !1
          }
          getLOD(YY) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          XIY() {
            return null
          }
          getVerticesData(YY) {
            return null
          }
          setVerticesData(YY, rY, DY, FY) {
            return this
          }
          updateVerticesData(YY, rY, DY, FY) {
            return this
          }
          setIndices(YY, rY) {
            return this
          }
          isVerticesDataPresent(YY) {
            return !1
          }
          oB() {
            return this._masterMesh ? this._masterMesh.oB() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.oB()
          }
          setBoundingInfo(YY) {
            return this._boundingInfo = YY, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(YY, rY, DY) {
            return this._boundingInfo = new vY.d(YY, rY, DY), this._boundingInfo
          }
          normalizeToUnitCube() {
            let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(YY, rY, DY)
          }
          get useBones() {
            return this.skeleton && this.hT().skeletonsEnabled && this.isVerticesDataPresent(RY.l.MatricesIndicesKind) && this.isVerticesDataPresent(RY.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(YY) {}
          _activate(YY, rY) {
            return this._renderId = YY, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === gY.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get XT() {
            return !1
          }
          get aFY() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(YY, rY, DY) {
            return this.position.addInPlace(this.calcMovePOV(YY, rY, DY)), this
          }
          calcMovePOV(YY, rY, DY) {
            const FY = new IY.e;
            (this.rotationQuaternion ? this.rotationQuaternion : IY.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(FY);
            const AY = IY.r.Zero(),
              RY = this.definedFacingForward ? -1 : 1;
            return IY.r.TransformCoordinatesFromFloatsToRef(YY * RY, rY, DY * RY, FY, AY), AY
          }
          rotatePOV(YY, rY, DY) {
            return this.rotation.addInPlace(this.calcRotatePOV(YY, rY, DY)), this
          }
          calcRotatePOV(YY, rY, DY) {
            const FY = this.definedFacingForward ? 1 : -1;
            return new IY.r(YY * FY, rY, DY * FY)
          }
          _refreshBoundingInfo(YY, rY) {
            if (YY) {
              const DY = (0, EY.h)(YY, 0, this.getTotalVertices(), rY);
              this._boundingInfo ? this._boundingInfo.reConstruct(DY.minimum, DY.maximum) : this._boundingInfo = new vY.d(DY.minimum, DY.maximum)
            }
            if (this.qm)
              for (let DY = 0; DY < this.qm.length; DY++) this.qm[DY].refreshBoundingInfo(YY);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(YY) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(YY.minimum, YY.maximum) : this._boundingInfo = new vY.d(YY.minimum, YY.maximum), this.qm)
              for (let rY = 0; rY < this.qm.length; rY++) this.qm[rY].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(YY, rY, DY, FY, AY, OY, gY) {
            ! function(YY, rY, DY, FY, AY, OY, gY) {
              const aY = IY.n.xy[0],
                vY = IY.n.Matrix[0],
                uY = IY.n.Matrix[1],
                sY = rY === RY.l.NormalKind ? IY.r.TransformNormalFromFloatsToRef : IY.r.TransformCoordinatesFromFloatsToRef;
              for (let RY = 0, iY = 0; RY < YY.length; RY += 3, iY += 4) {
                let rY, yY;
                for (vY.reset(), rY = 0; rY < 4; rY++) yY = AY[iY + rY], yY > 0 && (IY.e.FromFloat32ArrayToRefScaled(DY, Math.floor(16 * FY[iY + rY]), yY, uY), vY.addToSelf(uY));
                if (OY && gY)
                  for (rY = 0; rY < 4; rY++) yY = gY[iY + rY], yY > 0 && (IY.e.FromFloat32ArrayToRefScaled(DY, Math.floor(16 * OY[iY + rY]), yY, uY), vY.addToSelf(uY));
                sY(YY[RY], YY[RY + 1], YY[RY + 2], vY, aY), aY.toArray(YY, RY)
              }
            }(YY, rY, DY, FY, AY, OY, gY)
          }
          _getData(rY, DY) {
            let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RY.l.PositionKind;
            const AY = rY.cache,
              OY = YY => {
                if (AY) {
                  const rY = AY._vertexData || (AY._vertexData = {});
                  return rY[YY] || this.copyVerticesData(YY, rY), rY[YY]
                }
                return this.getVerticesData(YY)
              };
            if (DY || (DY = OY(FY)), !DY) return null;
            AY ? (AY._outputData ? AY._outputData.set(DY) : AY._outputData = new Float32Array(DY), DY = AY._outputData) : (rY.applyMorph && this.morphTargetManager || rY.applySkeleton && this.skeleton || rY.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (DY = DY.slice()), rY.applyMorph && this.morphTargetManager && function(YY, rY, DY) {
              let FY;
              switch (rY) {
                case RY.l.PositionKind:
                  FY = YY => YY.getPositions();
                  break;
                case RY.l.NormalKind:
                  FY = YY => YY.getNormals();
                  break;
                case RY.l.TangentKind:
                  FY = YY => YY.getTangents();
                  break;
                case RY.l.UVKind:
                  FY = YY => YY.getUVs();
                  break;
                case RY.l.UV2Kind:
                  FY = YY => YY.getUV2s();
                  break;
                case RY.l.ColorKind:
                  FY = YY => YY.getColors();
                  break;
                default:
                  return
              }
              for (let AY = 0; AY < YY.length; AY++) {
                let rY = YY[AY];
                for (let IY = 0; IY < DY.numTargets; IY++) {
                  const RY = DY.getTarget(IY),
                    OY = RY.influence;
                  if (0 !== OY) {
                    const DY = FY(RY);
                    DY && (rY += (DY[AY] - YY[AY]) * OY)
                  }
                }
                YY[AY] = rY
              }
            }(DY, FY, this.morphTargetManager);
            const gY = this.bakedVertexAnimationManager;
            let aY = !1;
            if (rY.applyBakedVertexAnimation && gY?.isEnabled) {
              const YY = OY(RY.l.MatricesIndicesKind),
                AY = OY(RY.l.MatricesWeightsKind);
              if (AY && YY) {
                const IY = this.numBoneInfluencers > 4,
                  vY = IY ? OY(RY.l.MatricesIndicesExtraKind) : null,
                  uY = IY ? OY(RY.l.MatricesWeightsExtraKind) : null;
                aY = KY(DY, FY, gY, rY.bakedVertexAnimationSettings ?? gY.animationParameters, YY, AY, vY, uY, this.numBoneInfluencers)
              }
            }
            if (!aY && rY.applySkeleton && this.skeleton) {
              const rY = OY(RY.l.MatricesIndicesKind),
                AY = OY(RY.l.MatricesWeightsKind);
              if (AY && rY) {
                const IY = this.numBoneInfluencers > 4,
                  gY = IY ? OY(RY.l.MatricesIndicesExtraKind) : null,
                  aY = IY ? OY(RY.l.MatricesWeightsExtraKind) : null,
                  vY = this.skeleton.getTransformMatrices(this);
                YY._ApplySkeleton(DY, FY, vY, rY, AY, gY, aY)
              }
            }
            if (!1 !== rY.updatePositionsArray && FY === RY.l.PositionKind) {
              const YY = this._internalAbstractMeshDataInfo._positions || [],
                rY = YY.length;
              if (YY.length = DY.length / 3, rY < YY.length)
                for (let DY = rY; DY < YY.length; DY++) YY[DY] = new IY.r;
              for (let FY = 0, AY = 0; FY < YY.length; FY++, AY += 3) YY[FY].p_(DY[AY], DY[AY + 1], DY[AY + 2]);
              this._internalAbstractMeshDataInfo._positions = YY
            }
            return DY
          }
          getNormalsData() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: YY,
              applyMorph: rY,
              updatePositionsArray: !1
            }, null, RY.l.NormalKind)
          }
          bM() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: YY,
              applyMorph: rY,
              updatePositionsArray: !1
            }, DY, RY.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new vY.d(IY.r.Zero(), IY.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(YY) {
            if (!this.qm) return this;
            const rY = this.qm.length;
            for (let DY = 0; DY < rY; DY++) {
              const FY = this.qm[DY];
              (rY > 1 || !FY.IsGlobal) && FY.updateBoundingInfo(YY)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Py || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(YY) {
            return this.oB().isInFrustum(YY, this.cullingStrategy)
          }
          isCompletelyInFrustum(YY) {
            return this.oB().isCompletelyInFrustum(YY)
          }
          FFY(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = arguments.length > 2 ? arguments[2] : void 0;
            const FY = this.oB(),
              AY = YY.oB();
            if (FY.intersects(AY, rY)) return !0;
            if (DY)
              for (const IY of this.getChildMeshes())
                if (IY.FFY(YY, rY, !0)) return !0;
            return !1
          }
          intersectsPoint(YY) {
            return this.oB().intersectsPoint(YY)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(YY) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = YY
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(YY) {
            let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const DY = this.hT().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = DY.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, DY.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, YY, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, rY), this
          }
          _collideForSubMesh(YY, rY, DY) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!YY._lastColliderWorldVertices || !YY._lastColliderTransformMatrix.equals(rY)) {
              YY._lastColliderTransformMatrix = rY.clone(), YY._lastColliderWorldVertices = [], YY._trianglePlanes = [];
              const DY = YY.verticesStart,
                FY = YY.verticesStart + YY.verticesCount;
              for (let AY = DY; AY < FY; AY++) YY._lastColliderWorldVertices.push(IY.r.TransformCoordinates(this._positions[AY], rY))
            }
            return DY._collide(YY._trianglePlanes, YY._lastColliderWorldVertices, this.XIY(), YY.indexStart, YY.indexStart + YY.indexCount, YY.verticesStart, !!YY.Uy(), this, this._shouldConvertRHS(), 7 === YY.Uy()?.fillMode), this
          }
          _processCollisionsForSubMeshes(YY, rY) {
            const DY = this._scene.getCollidingSubMeshCandidates(this, YY),
              FY = DY.length;
            for (let AY = 0; AY < FY; AY++) {
              const IY = DY.data[AY];
              FY > 1 && !IY._checkCollision(YY) || this._collideForSubMesh(IY, rY, YY)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(YY) {
            if (!this.oB()._checkCollision(YY)) return this;
            const rY = IY.n.Matrix[0],
              DY = IY.n.Matrix[1];
            return IY.e.ScalingToRef(1 / YY._radius.x, 1 / YY._radius.y, 1 / YY._radius.z, rY), this.worldMatrixFromCache.multiplyToRef(rY, DY), this._processCollisionsForSubMeshes(YY, DY), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(YY, rY, DY) {
            let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              AY = arguments.length > 4 ? arguments[4] : void 0,
              RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const OY = new aY.c,
              gY = this.getClassName(),
              vY = "InstancedLinesMesh" === gY || "LinesMesh" === gY || "GreasedLineMesh" === gY ? this.intersectionThreshold : 0,
              uY = this.oB();
            if (!this.qm) return OY;
            if (!RY && (!YY.intersectsSphere(uY.bDY, vY) || !YY.intersectsBox(uY.boundingBox, vY))) return OY;
            if (FY) return OY.hit = !RY, OY.pickedMesh = RY ? null : this, OY.distance = RY ? 0 : IY.r.Distance(YY.origin, uY.bDY.center), OY.subMeshId = 0, OY;
            if (!this._generatePointsArray()) return OY;
            let sY = null;
            const iY = this._scene.getIntersectingSubMeshCandidates(this, YY),
              yY = iY.length;
            let QY = !1;
            for (let IY = 0; IY < yY; IY++) {
              const YY = iY.data[IY].Uy();
              if (YY && (7 == YY.fillMode || 0 == YY.fillMode || 1 == YY.fillMode || 2 == YY.fillMode || 4 == YY.fillMode)) {
                QY = !0;
                break
              }
            }
            if (!QY) return OY.hit = !0, OY.pickedMesh = this, OY.distance = IY.r.Distance(YY.origin, uY.bDY.center), OY.subMeshId = -1, OY;
            for (let IY = 0; IY < yY; IY++) {
              const FY = iY.data[IY];
              if (yY > 1 && !RY && !FY.canIntersects(YY)) continue;
              const AY = FY.intersects(YY, this._positions, this.XIY(), rY, DY);
              if (AY && (rY || !sY || AY.distance < sY.distance) && (sY = AY, sY.subMeshId = FY._id, sY._internalSubMeshId = IY, rY)) break
            }
            if (sY) {
              const rY = AY ?? this.getWorldMatrix(),
                DY = IY.n.xy[0],
                FY = IY.n.xy[1];
              IY.r.TransformCoordinatesToRef(YY.origin, rY, DY), YY.direction.scaleToRef(sY.distance, FY);
              const RY = IY.r.TransformNormal(FY, rY).addInPlace(DY);
              return OY.hit = !0, OY.distance = IY.r.Distance(DY, RY), OY.pickedPoint = RY, OY.pickedMesh = this, OY.bu = sY.bu || 0, OY.bv = sY.bv || 0, OY.subMeshFaceId = sY.faceId, OY.faceId = sY.faceId + iY.data[sY._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), OY.subMeshId = sY.subMeshId, OY
            }
            return OY
          }
          clone(YY, rY, DY) {
            return null
          }
          releaseSubMeshes() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.qm)
              for (; this.qm.length;) this.qm[0].dispose(YY);
            else this.qm = [];
            return this
          }
          dispose(YY) {
            let rY, DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const FY = this.hT();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), FY.freeActiveMeshes(), FY.freeRenderingGroups(), FY.renderingManager.maintainStateBetweenFrames && FY.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((YY => YY !== this && YY.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), rY = 0; rY < this._intersectionsInProgress.length; rY++) {
              const YY = this._intersectionsInProgress[rY],
                DY = YY._intersectionsInProgress.indexOf(this);
              YY._intersectionsInProgress.splice(DY, 1)
            }
            this._intersectionsInProgress.length = 0;
            const AY = FY.lights;
            for (const RY of AY) {
              let YY = RY.includedOnlyMeshes.indexOf(this); - 1 !== YY && RY.includedOnlyMeshes.splice(YY, 1), YY = RY.excludedMeshes.indexOf(this), -1 !== YY && RY.excludedMeshes.splice(YY, 1);
              const rY = RY.getShadowGenerators();
              if (rY) {
                const DY = rY.values();
                for (let rY = DY.next(); !0 !== rY.done; rY = DY.next()) {
                  const DY = rY.value.getShadowMap();
                  DY && DY.renderList && (YY = DY.renderList.indexOf(this), -1 !== YY && DY.renderList.splice(YY, 1))
                }
              }
            }
            this.releaseSubMeshes(FY._isDisposing);
            const IY = FY.ky();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, IY.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), IY.wipeCaches(), FY.iN(this), this._parentContainer) {
              const YY = this._parentContainer.meshes.indexOf(this);
              YY > -1 && this._parentContainer.meshes.splice(YY, 1), this._parentContainer = null
            }
            if (DY && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !YY)
              for (rY = 0; rY < FY.YV.length; rY++) FY.YV[rY].emitter === this && (FY.YV[rY].dispose(), rY--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(YY, DY)
          }
          _initFacetData() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            YY.facetNormals || (YY.facetNormals = []), YY.facetPositions || (YY.facetPositions = []), YY.facetPartitioning || (YY.facetPartitioning = new Array), YY.facetNb = this.XIY().length / 3 | 0, YY.partitioningSubdivisions = YY.partitioningSubdivisions ? YY.partitioningSubdivisions : 10, YY.partitioningBBoxRatio = YY.partitioningBBoxRatio ? YY.partitioningBBoxRatio : 1.01;
            for (let rY = 0; rY < YY.facetNb; rY++) YY.facetNormals[rY] = IY.r.Zero(), YY.facetPositions[rY] = IY.r.Zero();
            return YY.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            YY.facetDataEnabled || this._initFacetData();
            const rY = this.getVerticesData(RY.l.PositionKind),
              DY = this.XIY(),
              FY = this.getVerticesData(RY.l.NormalKind)?.slice(),
              AY = this.oB();
            if (YY.facetDepthSort && !YY.facetDepthSortEnabled) {
              if (YY.facetDepthSortEnabled = !0, DY instanceof Uint16Array) YY.depthSortedIndices = new Uint16Array(DY);
              else if (DY instanceof Uint32Array) YY.depthSortedIndices = new Uint32Array(DY);
              else {
                let rY = !1;
                for (let YY = 0; YY < DY.length; YY++)
                  if (DY[YY] > 65535) {
                    rY = !0;
                    break
                  } YY.depthSortedIndices = rY ? new Uint32Array(DY) : new Uint16Array(DY)
              }
              if (YY.facetDepthSortFunction = function(YY, rY) {
                  return rY.sqDistance - YY.sqDistance
                }, !YY.facetDepthSortFrom) {
                const rY = this.hT().activeCamera;
                YY.facetDepthSortFrom = rY ? rY.position : IY.r.Zero()
              }
              YY.depthSortedFacets = [];
              for (let rY = 0; rY < YY.facetNb; rY++) {
                const DY = {
                  ind: 3 * rY,
                  sqDistance: 0
                };
                YY.depthSortedFacets.push(DY)
              }
              YY.invertedMatrix = IY.e.Identity(), YY.facetDepthSortOrigin = IY.r.Zero()
            }
            YY.bbSize.x = AY.maximum.x - AY.minimum.x > VY.c ? AY.maximum.x - AY.minimum.x : VY.c, YY.bbSize.y = AY.maximum.y - AY.minimum.y > VY.c ? AY.maximum.y - AY.minimum.y : VY.c, YY.bbSize.z = AY.maximum.z - AY.minimum.z > VY.c ? AY.maximum.z - AY.minimum.z : VY.c;
            let gY = YY.bbSize.x > YY.bbSize.y ? YY.bbSize.x : YY.bbSize.y;
            if (gY = gY > YY.bbSize.z ? gY : YY.bbSize.z, YY.subDiv.max = YY.partitioningSubdivisions, YY.subDiv.X = Math.floor(YY.subDiv.max * YY.bbSize.x / gY), YY.subDiv.Y = Math.floor(YY.subDiv.max * YY.bbSize.y / gY), YY.subDiv.Z = Math.floor(YY.subDiv.max * YY.bbSize.z / gY), YY.subDiv.X = YY.subDiv.X < 1 ? 1 : YY.subDiv.X, YY.subDiv.Y = YY.subDiv.Y < 1 ? 1 : YY.subDiv.Y, YY.subDiv.Z = YY.subDiv.Z < 1 ? 1 : YY.subDiv.Z, YY.facetParameters.facetNormals = this.getFacetLocalNormals(), YY.facetParameters.facetPositions = this.getFacetLocalPositions(), YY.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), YY.facetParameters.bInfo = AY, YY.facetParameters.bbSize = YY.bbSize, YY.facetParameters.subDiv = YY.subDiv, YY.facetParameters.ratio = this.partitioningBBoxRatio, YY.facetParameters.depthSort = YY.facetDepthSort, YY.facetDepthSort && YY.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(YY.invertedMatrix), IY.r.TransformCoordinatesToRef(YY.facetDepthSortFrom, YY.invertedMatrix, YY.facetDepthSortOrigin), YY.facetParameters.distanceTo = YY.facetDepthSortOrigin), YY.facetParameters.depthSortedFacets = YY.depthSortedFacets, FY && OY.c.ComputeNormals(rY, DY, FY, YY.facetParameters), YY.facetDepthSort && YY.facetDepthSortEnabled) {
              YY.depthSortedFacets.sort(YY.facetDepthSortFunction);
              const rY = YY.depthSortedIndices.length / 3 | 0;
              for (let FY = 0; FY < rY; FY++) {
                const rY = YY.depthSortedFacets[FY].ind;
                YY.depthSortedIndices[3 * FY] = DY[rY], YY.depthSortedIndices[3 * FY + 1] = DY[rY + 1], YY.depthSortedIndices[3 * FY + 2] = DY[rY + 2]
              }
              this.updateIndices(YY.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            return YY.facetNormals || this.updateFacetData(), YY.facetNormals
          }
          getFacetLocalPositions() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            return YY.facetPositions || this.updateFacetData(), YY.facetPositions
          }
          getFacetLocalPartitioning() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            return YY.facetPartitioning || this.updateFacetData(), YY.facetPartitioning
          }
          getFacetPosition(YY) {
            const rY = IY.r.Zero();
            return this.getFacetPositionToRef(YY, rY), rY
          }
          getFacetPositionToRef(YY, rY) {
            const DY = this.getFacetLocalPositions()[YY],
              FY = this.getWorldMatrix();
            return IY.r.TransformCoordinatesToRef(DY, FY, rY), this
          }
          getFacetNormal(YY) {
            const rY = IY.r.Zero();
            return this.getFacetNormalToRef(YY, rY), rY
          }
          getFacetNormalToRef(YY, rY) {
            const DY = this.getFacetLocalNormals()[YY];
            return IY.r.TransformNormalToRef(DY, this.getWorldMatrix(), rY), this
          }
          getFacetsAtLocalCoordinates(YY, rY, DY) {
            const FY = this.oB(),
              AY = this._internalAbstractMeshDataInfo._facetData,
              IY = Math.floor((YY - FY.minimum.x * AY.partitioningBBoxRatio) * AY.subDiv.X * AY.partitioningBBoxRatio / AY.bbSize.x),
              RY = Math.floor((rY - FY.minimum.y * AY.partitioningBBoxRatio) * AY.subDiv.Y * AY.partitioningBBoxRatio / AY.bbSize.y),
              OY = Math.floor((DY - FY.minimum.z * AY.partitioningBBoxRatio) * AY.subDiv.Z * AY.partitioningBBoxRatio / AY.bbSize.z);
            return IY < 0 || IY > AY.subDiv.max || RY < 0 || RY > AY.subDiv.max || OY < 0 || OY > AY.subDiv.max ? null : AY.facetPartitioning[IY + AY.subDiv.max * RY + AY.subDiv.max * AY.subDiv.max * OY]
          }
          getClosestFacetAtCoordinates(YY, rY, DY, FY) {
            let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const OY = this.getWorldMatrix(),
              gY = IY.n.Matrix[5];
            OY.invertToRef(gY);
            const aY = IY.n.xy[8];
            IY.r.TransformCoordinatesFromFloatsToRef(YY, rY, DY, gY, aY);
            const vY = this.getClosestFacetAtLocalCoordinates(aY.x, aY.y, aY.z, FY, AY, RY);
            return FY && IY.r.TransformCoordinatesFromFloatsToRef(FY.x, FY.y, FY.z, OY, FY), vY
          }
          getClosestFacetAtLocalCoordinates(YY, rY, DY, FY) {
            let AY, IY, RY, OY, gY, aY, vY, uY, sY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              iY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              yY = null;
            const QY = this.getFacetLocalPositions(),
              oY = this.getFacetLocalNormals(),
              WY = this.getFacetsAtLocalCoordinates(YY, rY, DY);
            if (!WY) return null;
            let EY, mY, VY, SY, lY = Number.MAX_VALUE;
            for (let TY = 0; TY < WY.length; TY++) mY = WY[TY], VY = oY[mY], SY = QY[mY], OY = (YY - SY.x) * VY.x + (rY - SY.y) * VY.y + (DY - SY.z) * VY.z, (!sY || sY && iY && OY >= 0 || sY && !iY && OY <= 0) && (OY = VY.x * SY.x + VY.y * SY.y + VY.z * SY.z, gY = -(VY.x * YY + VY.y * rY + VY.z * DY - OY) / (VY.x * VY.x + VY.y * VY.y + VY.z * VY.z), aY = YY + VY.x * gY, vY = rY + VY.y * gY, uY = DY + VY.z * gY, AY = aY - YY, IY = vY - rY, RY = uY - DY, EY = AY * AY + IY * IY + RY * RY, EY < lY && (lY = EY, yY = mY, FY && (FY.x = aY, FY.y = vY, FY.z = uY)));
            return yY
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const YY = this._internalAbstractMeshDataInfo._facetData;
            return YY.facetDataEnabled && (YY.facetDataEnabled = !1, YY.facetPositions = [], YY.facetNormals = [], YY.facetPartitioning = new Array, YY.facetParameters = {}, YY.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(YY, rY) {
            return this
          }
          createNormals(YY) {
            const rY = this.getVerticesData(RY.l.PositionKind),
              DY = this.XIY();
            let FY;
            return FY = this.isVerticesDataPresent(RY.l.NormalKind) ? this.getVerticesData(RY.l.NormalKind) : [], OY.c.ComputeNormals(rY, DY, FY, {
              useRightHandedSystem: this.hT().useRightHandedSystem
            }), this.setVerticesData(RY.l.NormalKind, FY, YY), this
          }
          async optimizeIndicesAsync() {
            const YY = this.XIY();
            if (!YY) return this;
            const {
              OptimizeIndices: rY
            } = await DY.e(341).then((() => DY(41600)));
            return rY(YY), this.setIndices(YY, this.getTotalVertices()), this
          }
          alignWithNormal(YY, rY) {
            rY || (rY = SY.b.Y);
            const DY = IY.n.xy[0],
              FY = IY.n.xy[1];
            return IY.r.CrossToRef(rY, YY, FY), IY.r.CrossToRef(YY, FY, DY), this.rotationQuaternion ? IY.g.RotationQuaternionFromAxisToRef(DY, YY, FY, this.rotationQuaternion) : IY.r.RotationFromAxisToRef(DY, YY, FY, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, oY.i)("EdgesRenderer")
          }
          enableEdgesRendering(YY, rY, DY) {
            throw (0, oY.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.YV.filter((YY => YY.emitter === this))
          }
        }, (() => {
          const DY = "function" === typeof Symbol && Symbol.metadata ? Object.create(sY[Symbol.metadata] ?? null) : void 0;
          rY = [TY.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, FY.i)(YY, null, rY, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: YY => "_ApplySkeleton" in YY,
              get: YY => YY._ApplySkeleton
            },
            metadata: DY
          }, null, iY), DY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: DY
          })
        })(), YY.OCCLUSION_TYPE_NONE = ((0, FY.j)(YY, iY), 0), YY.OCCLUSION_TYPE_OPTIMISTIC = 1, YY.OCCLUSION_TYPE_STRICT = 2, YY.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, YY.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, YY.CULLINGSTRATEGY_STANDARD = 0, YY.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, YY.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, YY.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, YY.DefaultIsPickable = !0, YY
      })(),
      CY = !1;

    function fY() {
      CY || (CY = !0, (0, NY.i)("BABYLON.AbstractMesh", ZY))
    }(iY = ZY.prototype).createOrUpdateSubmeshesOctree ?? (iY.createOrUpdateSubmeshesOctree = (0, oY.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (yY = ZY.prototype).getPhysicsImpostor ?? (yY.getPhysicsImpostor = (0, oY.g)("AbstractMesh", "getPhysicsImpostor")), (QY = ZY.prototype).setPhysicsLinkWith ?? (QY.setPhysicsLinkWith = (0, oY.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(ZY.prototype, "occlusionRetryCount") || Object.defineProperty(ZY.prototype, "occlusionRetryCount", (0, oY.c)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(ZY.prototype, "occlusionType") || Object.defineProperty(ZY.prototype, "occlusionType", (0, oY.c)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(ZY.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(ZY.prototype, "occlusionQueryAlgorithmType", (0, oY.c)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(ZY.prototype, "isOccluded") || Object.defineProperty(ZY.prototype, "isOccluded", (0, oY.c)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(ZY.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(ZY.prototype, "isOcclusionQueryInProgress", (0, oY.c)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(ZY.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(ZY.prototype, "forceRenderingWhenOccluded", (0, oY.c)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(ZY.prototype, "occlusionForRenderPassId") || Object.defineProperty(ZY.prototype, "occlusionForRenderPassId", (0, oY.c)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(ZY.prototype, "decalMap") || Object.defineProperty(ZY.prototype, "decalMap", (0, oY.c)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(ZY.prototype, "YB") || Object.defineProperty(ZY.prototype, "YB", (0, oY.c)("AbstractMesh", "YB")), Object.getOwnPropertyDescriptor(ZY.prototype, "physicsImpostor") || Object.defineProperty(ZY.prototype, "physicsImpostor", (0, oY.c)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(ZY.prototype, "showBoundingBox") || Object.defineProperty(ZY.prototype, "showBoundingBox", (0, oY.c)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(ZY.prototype, "edgesRenderer") || Object.defineProperty(ZY.prototype, "edgesRenderer", (0, oY.c)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(ZY.prototype, "renderOutline") || Object.defineProperty(ZY.prototype, "renderOutline", (0, oY.c)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(ZY.prototype, "renderOverlay") || Object.defineProperty(ZY.prototype, "renderOverlay", (0, oY.c)("AbstractMesh", "renderOverlay"))
  },
  39534: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => WY
    });
    var FY = DY(36524),
      AY = DY(36588),
      IY = DY(39530),
      RY = DY(39270),
      OY = DY(39416),
      gY = DY(39543),
      aY = DY(39422),
      vY = DY(39219),
      uY = DY(38040),
      sY = DY(39149),
      iY = DY(39429),
      yY = DY(36546),
      QY = DY(39546),
      oY = DY(39180);
    class WY {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(YY) {
        this._boundingBias ? this._boundingBias.brY(YY) : this._boundingBias = YY.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(YY) {
        const rY = new WY(WY.RandomId(), YY.hT());
        return rY.applyToMesh(YY), rY
      }
      get meshes() {
        return this._meshes
      }
      constructor(YY, rY, DY) {
        let AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new FY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new FY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = rY || yY.d.LastCreatedScene, this._scene && (this.id = YY, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.ky(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = AY, null !== RY && (this._totalVertices = RY), DY ? this.setAllVerticesData(DY, AY) : null === RY && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), IY && (this.applyToMesh(IY), IY.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      hT() {
        return this._scene
      }
      ky() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let YY = 0; YY < this._meshes.length; YY++)
          if (!this._meshes[YY].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const YY = new Set;
        for (const rY in this._vertexBuffers) YY.add(this._vertexBuffers[rY].getWrapperBuffer());
        YY.forEach((YY => {
          YY._rebuild()
        }))
      }
      setAllVerticesData(YY, rY) {
        YY.applyToGeometry(this, rY), this._notifyUpdate()
      }
      setVerticesData(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0;
        DY && Array.isArray(rY) && (rY = new Float32Array(rY));
        const AY = new RY.l(this._engine, rY, YY, {
          updatable: DY,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: FY,
          label: "Geometry_" + this.id + "_" + YY
        });
        this.setVerticesBuffer(AY)
      }
      removeVerticesData(YY) {
        this._vertexBuffers[YY] && (this._vertexBuffers[YY].dispose(), delete this._vertexBuffers[YY]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const AY = YY.getKind();
        this._vertexBuffers[AY] && DY && this._vertexBuffers[AY].dispose(), YY._buffer && YY._ownsBuffer && YY._buffer._increaseReferences(), this._vertexBuffers[AY] = YY;
        const IY = this._meshes,
          OY = IY.length;
        if (AY === RY.l.PositionKind) {
          this._totalVertices = rY ?? YY._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : YY.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const DY = this._extend && this._extend.minimum || new FY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            AY = this._extend && this._extend.maximum || new FY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let YY = 0; YY < OY; YY++) {
            const rY = IY[YY];
            rY.buildBoundingInfo(DY, AY), rY._createGlobalSubMesh(rY.isUnIndexed), rY.computeWorldMatrix(!0), rY.synchronizeInstances()
          }
        }
        this._notifyUpdate(AY)
      }
      updateVerticesDataDirectly(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AY = this.getVertexBuffer(YY);
        AY && (AY.updateDirectly(rY, DY, FY), this._notifyUpdate(YY))
      }
      updateVerticesData(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this.getVertexBuffer(YY);
        FY && (FY.update(rY), YY === RY.l.PositionKind && this._updateBoundingInfo(DY, rY), this._notifyUpdate(YY))
      }
      _updateBoundingInfo(YY, rY) {
        if (YY && this._updateExtend(rY), this._resetPointsArrayCache(), YY) {
          const YY = this._meshes;
          for (const rY of YY) {
            rY.hasBoundingInfo ? rY.oB().reConstruct(this._extend.minimum, this._extend.maximum) : rY.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const YY = rY.qm;
            for (const rY of YY) rY.refreshBoundingInfo()
          }
        }
      }
      _bind(YY, rY, DY, FY) {
        if (!YY) return;
        void 0 === rY && (rY = this._indexBuffer);
        const AY = this.getVertexBuffers();
        if (!AY) return;
        if (rY != this._indexBuffer || !this._vertexArrayObjects && !FY) return void this._engine.bindBuffers(AY, rY, YY, DY);
        const IY = FY || this._vertexArrayObjects,
          RY = this._engine;
        IY[YY.key] || (IY[YY.key] = RY.recordVertexArrayObject(AY, rY, YY, DY)), RY.bindVertexArrayObject(IY[YY.key], rY)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(YY, rY, DY) {
        const FY = this.getVertexBuffer(YY);
        return FY ? FY.getFloatData(this._totalVertices, DY || rY && 1 !== this._meshes.length) : null
      }
      copyVerticesData(YY, rY) {
        const DY = this.getVertexBuffer(YY);
        if (!DY) return;
        rY[YY] || (rY[YY] = new Float32Array(this._totalVertices * DY.getSize()));
        const FY = DY.getData();
        FY && (0, oY.g)(FY, DY.getSize(), DY.type, DY.byteOffset, DY.byteStride, DY.normalized, this._totalVertices, rY[YY])
      }
      isVertexBufferUpdatable(YY) {
        const rY = this._vertexBuffers[YY];
        return !!rY && rY.isUpdatable()
      }
      getVertexBuffer(YY) {
        return this.isReady() ? this._vertexBuffers[YY] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(YY) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[YY] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(YY)
      }
      getVerticesDataKinds() {
        const YY = [];
        let rY;
        if (!this._vertexBuffers && this._delayInfo)
          for (rY in this._delayInfo) YY.push(rY);
        else
          for (rY in this._vertexBuffers) YY.push(rY);
        return YY
      }
      updateIndices(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const FY = YY.length !== this._indices.length;
            if (DY || (this._indices = YY.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, YY, rY), FY)
              for (const YY of this._meshes) YY._createGlobalSubMesh(!0)
          } else this.setIndices(YY, null, !0)
      }
      setIndexBuffer(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = YY, this._totalVertices = rY, this._totalIndices = DY, YY.is32Bits = null === FY ? rY > 65535 : FY;
        for (const AY of this._meshes) AY._createGlobalSubMesh(!0), AY.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = YY, this._indexBufferIsUpdatable = DY, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, DY, "Geometry_" + this.id + "_IndexBuffer")), void 0 != rY && (this._totalVertices = rY);
        for (const AY of this._meshes) AY._createGlobalSubMesh(!FY), AY.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      XIY(YY, rY) {
        if (!this.isReady()) return null;
        const DY = this._indices;
        return rY || YY && 1 !== this._meshes.length ? DY.slice() : DY
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        YY && this._vertexArrayObjects && this._vertexArrayObjects[YY.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[YY.key]), delete this._vertexArrayObjects[YY.key])
      }
      releaseForMesh(YY, rY) {
        const DY = this._meshes,
          FY = DY.indexOf(YY); - 1 !== FY && (DY.splice(FY, 1), this._vertexArrayObjects && YY._invalidateInstanceVertexArrayObject(), YY._geometry = null, 0 === DY.length && rY && this.dispose())
      }
      applyToMesh(YY) {
        if (YY._geometry === this) return;
        const rY = YY._geometry;
        rY && rY.releaseForMesh(YY), this._vertexArrayObjects && YY._invalidateInstanceVertexArrayObject();
        const DY = this._meshes;
        YY._geometry = this, YY._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), DY.push(YY), this.isReady() ? this._applyToMesh(YY) : this._boundingInfo && YY.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!YY && (YY = this.getVerticesData(RY.l.PositionKind), !YY)) return;
          this._extend = (0, iY.h)(YY, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(YY) {
        for (const rY in this._vertexBuffers) {
          const DY = this._vertexBuffers[rY];
          DY._buffer.getBuffer() || DY.create(), rY === RY.l.PositionKind && (this._extend || this._updateExtend(), YY.buildBoundingInfo(this._extend.minimum, this._extend.maximum), YY._createGlobalSubMesh(YY.isUnIndexed), YY._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), YY._syncGeometryWithMorphTargetManager(), YY.synchronizeInstances()
      }
      _notifyUpdate(YY) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, YY), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const rY of this._meshes) rY._markSubMeshesAsAttributesDirty()
      }
      load(YY, rY) {
        2 !== this.delayLoadState && (this.isReady() ? rY && rY() : (this.delayLoadState = 2, this._queueLoad(YY, rY)))
      }
      _queueLoad(YY, rY) {
        this.delayLoadingFile && (YY.addPendingData(this), (async () => {
          try {
            const DY = await YY._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void YY.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(DY), this), this.delayLoadState = 1, this._delayInfo = [], YY.removePendingData(this);
            const FY = this._meshes,
              AY = FY.length;
            for (let YY = 0; YY < AY; YY++) this._applyToMesh(FY[YY]);
            rY && rY()
          } catch (DY) {
            YY.removePendingData(this), YY.CrY || uY.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${DY}`)
          }
        })())
      }
      toLeftHanded() {
        const YY = this.XIY(!1);
        if (null != YY && YY.length > 0) {
          for (let rY = 0; rY < YY.length; rY += 3) {
            const DY = YY[rY + 0];
            YY[rY + 0] = YY[rY + 2], YY[rY + 2] = DY
          }
          this.setIndices(YY)
        }
        const rY = this.getVerticesData(RY.l.PositionKind, !1);
        if (null != rY && rY.length > 0) {
          for (let YY = 0; YY < rY.length; YY += 3) rY[YY + 2] = -rY[YY + 2];
          this.setVerticesData(RY.l.PositionKind, rY, !1)
        }
        const DY = this.getVerticesData(RY.l.NormalKind, !1);
        if (null != DY && DY.length > 0) {
          for (let YY = 0; YY < DY.length; YY += 3) DY[YY + 2] = -DY[YY + 2];
          this.setVerticesData(RY.l.NormalKind, DY, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const YY = this.getVerticesData(RY.l.PositionKind);
        if (!YY || 0 === YY.length) return !1;
        for (let rY = 3 * this._positionsCache.length, DY = this._positionsCache.length; rY < YY.length; rY += 3, ++DY) this._positionsCache[DY] = FY.r.FromArray(YY, rY);
        for (let rY = 0, DY = 0; rY < YY.length; rY += 3, ++DY) this._positionsCache[DY].set(YY[0 + rY], YY[1 + rY], YY[2 + rY]);
        return this._positionsCache.length = YY.length / 3, this._positions = this._positionsCache, !0
      }
      CrY() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const DY in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[DY]);
          this._vertexArrayObjects = {};
          const YY = this._meshes,
            rY = YY.length;
          for (let DY = 0; DY < rY; DY++) YY[DY]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const YY = this._meshes,
          rY = YY.length;
        let DY;
        for (DY = 0; DY < rY; DY++) this.releaseForMesh(YY[DY]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const FY in this._vertexBuffers) this._vertexBuffers[FY].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const YY = this._parentContainer.geometries.indexOf(this);
          YY > -1 && this._parentContainer.geometries.splice(YY, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(YY) {
        const rY = new WY(YY, this._scene),
          DY = this.XIY(void 0, !0);
        DY && rY.setIndices(DY);
        let FY, AY = !1;
        for (FY in this._vertexBuffers) {
          const YY = this.getVertexBuffer(FY),
            DY = YY.getData();
          if (!DY) continue;
          const IY = YY.isUpdatable(),
            OY = YY.getSize(),
            {
              type: gY,
              byteOffset: aY,
              byteStride: vY,
              normalized: uY
            } = YY;
          AY = AY || IY;
          let sY = this._totalVertices;
          if (YY.getIsInstanced()) {
            let YY;
            YY = DY instanceof Array ? 4 * DY.length : DY.byteLength, sY = YY / vY
          }
          const iY = (0, oY.q)(DY, OY, gY, aY, vY, sY, !0),
            yY = new RY.l(this._engine, iY, FY, {
              updatable: IY,
              useBytes: !1,
              stride: OY,
              size: OY,
              offset: 0,
              type: gY,
              normalized: uY,
              takeBufferOwnership: !0,
              instanced: YY.getIsInstanced()
            });
          rY.setVerticesBuffer(yY, sY)
        }
        for (FY in rY._updatable = AY, rY.delayLoadState = this.delayLoadState, rY.delayLoadingFile = this.delayLoadingFile, rY._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) rY._delayInfo = rY._delayInfo || [], rY._delayInfo.push(FY);
        return rY._boundingInfo = new aY.d(this._extend.minimum, this._extend.maximum), rY
      }
      serialize() {
        const YY = {};
        return YY.id = this.id, YY.uniqueId = this.uniqueId, YY.updatable = this._updatable, sY.e && sY.e.HasTags(this) && (YY.tags = sY.e.GetTags(this)), YY
      }
      _toNumberArray(YY) {
        return Array.isArray(YY) ? YY : Array.prototype.slice.call(YY)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const YY in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, YY) && (this._vertexBuffers[YY]._buffer._data = null)
      }
      serializeVerticeData() {
        const YY = this.serialize();
        return this.isVerticesDataPresent(RY.l.PositionKind) && (YY.positions = this._toNumberArray(this.getVerticesData(RY.l.PositionKind)), this.isVertexBufferUpdatable(RY.l.PositionKind) && (YY.positionsUpdatable = !0)), this.isVerticesDataPresent(RY.l.NormalKind) && (YY.normals = this._toNumberArray(this.getVerticesData(RY.l.NormalKind)), this.isVertexBufferUpdatable(RY.l.NormalKind) && (YY.normalsUpdatable = !0)), this.isVerticesDataPresent(RY.l.TangentKind) && (YY.tangents = this._toNumberArray(this.getVerticesData(RY.l.TangentKind)), this.isVertexBufferUpdatable(RY.l.TangentKind) && (YY.tangentsUpdatable = !0)), this.isVerticesDataPresent(RY.l.UVKind) && (YY.uvs = this._toNumberArray(this.getVerticesData(RY.l.UVKind)), this.isVertexBufferUpdatable(RY.l.UVKind) && (YY.uvsUpdatable = !0)), this.isVerticesDataPresent(RY.l.UV2Kind) && (YY.uvs2 = this._toNumberArray(this.getVerticesData(RY.l.UV2Kind)), this.isVertexBufferUpdatable(RY.l.UV2Kind) && (YY.uvs2Updatable = !0)), this.isVerticesDataPresent(RY.l.UV3Kind) && (YY.uvs3 = this._toNumberArray(this.getVerticesData(RY.l.UV3Kind)), this.isVertexBufferUpdatable(RY.l.UV3Kind) && (YY.uvs3Updatable = !0)), this.isVerticesDataPresent(RY.l.UV4Kind) && (YY.uvs4 = this._toNumberArray(this.getVerticesData(RY.l.UV4Kind)), this.isVertexBufferUpdatable(RY.l.UV4Kind) && (YY.uvs4Updatable = !0)), this.isVerticesDataPresent(RY.l.UV5Kind) && (YY.uvs5 = this._toNumberArray(this.getVerticesData(RY.l.UV5Kind)), this.isVertexBufferUpdatable(RY.l.UV5Kind) && (YY.uvs5Updatable = !0)), this.isVerticesDataPresent(RY.l.UV6Kind) && (YY.uvs6 = this._toNumberArray(this.getVerticesData(RY.l.UV6Kind)), this.isVertexBufferUpdatable(RY.l.UV6Kind) && (YY.uvs6Updatable = !0)), this.isVerticesDataPresent(RY.l.ColorKind) && (YY.colors = this._toNumberArray(this.getVerticesData(RY.l.ColorKind)), this.isVertexBufferUpdatable(RY.l.ColorKind) && (YY.colorsUpdatable = !0)), this.isVerticesDataPresent(RY.l.MatricesIndicesKind) && (YY.matricesIndices = this._toNumberArray(this.getVerticesData(RY.l.MatricesIndicesKind)), YY.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(RY.l.MatricesIndicesKind) && (YY.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(RY.l.MatricesWeightsKind) && (YY.matricesWeights = this._toNumberArray(this.getVerticesData(RY.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(RY.l.MatricesWeightsKind) && (YY.matricesWeightsUpdatable = !0)), YY.indices = this._toNumberArray(this.XIY()), YY
      }
      static ExtractFromMesh(YY, rY) {
        const DY = YY._geometry;
        return DY ? DY.copy(rY) : null
      }
      static RandomId() {
        return vY.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(YY, rY) {
        for (let DY = 0; DY < rY.geometries.length; DY++)
          if (rY.geometries[DY]._loadedUniqueId === YY) return rY.geometries[DY];
        return null
      }
      static _ImportGeometry(YY, rY) {
        const DY = rY.hT(),
          FY = YY.geometryUniqueId,
          IY = YY.geometryId;
        if (FY || IY) {
          const YY = FY ? this._GetGeometryByLoadedUniqueId(FY, DY) : DY.getGeometryById(IY);
          YY && YY.applyToMesh(rY)
        } else if (YY instanceof ArrayBuffer) {
          const DY = rY._binaryInfo;
          if (DY.positionsAttrDesc && DY.positionsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.positionsAttrDesc.offset, DY.positionsAttrDesc.count);
            rY.setVerticesData(RY.l.PositionKind, FY, !1)
          }
          if (DY.normalsAttrDesc && DY.normalsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.normalsAttrDesc.offset, DY.normalsAttrDesc.count);
            rY.setVerticesData(RY.l.NormalKind, FY, !1)
          }
          if (DY.tangetsAttrDesc && DY.tangetsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.tangetsAttrDesc.offset, DY.tangetsAttrDesc.count);
            rY.setVerticesData(RY.l.TangentKind, FY, !1)
          }
          if (DY.uvsAttrDesc && DY.uvsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvsAttrDesc.offset, DY.uvsAttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UVKind, FY, !1)
          }
          if (DY.uvs2AttrDesc && DY.uvs2AttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvs2AttrDesc.offset, DY.uvs2AttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UV2Kind, FY, !1)
          }
          if (DY.uvs3AttrDesc && DY.uvs3AttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvs3AttrDesc.offset, DY.uvs3AttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UV3Kind, FY, !1)
          }
          if (DY.uvs4AttrDesc && DY.uvs4AttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvs4AttrDesc.offset, DY.uvs4AttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UV4Kind, FY, !1)
          }
          if (DY.uvs5AttrDesc && DY.uvs5AttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvs5AttrDesc.offset, DY.uvs5AttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UV5Kind, FY, !1)
          }
          if (DY.uvs6AttrDesc && DY.uvs6AttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.uvs6AttrDesc.offset, DY.uvs6AttrDesc.count);
            if (QY.e)
              for (let YY = 1; YY < FY.length; YY += 2) FY[YY] = 1 - FY[YY];
            rY.setVerticesData(RY.l.UV6Kind, FY, !1)
          }
          if (DY.colorsAttrDesc && DY.colorsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.colorsAttrDesc.offset, DY.colorsAttrDesc.count);
            rY.setVerticesData(RY.l.ColorKind, FY, !1, DY.colorsAttrDesc.stride)
          }
          if (DY.matricesIndicesAttrDesc && DY.matricesIndicesAttrDesc.count > 0) {
            const FY = new Int32Array(YY, DY.matricesIndicesAttrDesc.offset, DY.matricesIndicesAttrDesc.count),
              AY = [];
            for (let YY = 0; YY < FY.length; YY++) {
              const rY = FY[YY];
              AY.push(255 & rY), AY.push((65280 & rY) >> 8), AY.push((16711680 & rY) >> 16), AY.push(rY >> 24 & 255)
            }
            rY.setVerticesData(RY.l.MatricesIndicesKind, AY, !1)
          }
          if (DY.matricesIndicesExtraAttrDesc && DY.matricesIndicesExtraAttrDesc.count > 0) {
            const FY = new Int32Array(YY, DY.matricesIndicesExtraAttrDesc.offset, DY.matricesIndicesExtraAttrDesc.count),
              AY = [];
            for (let YY = 0; YY < FY.length; YY++) {
              const rY = FY[YY];
              AY.push(255 & rY), AY.push((65280 & rY) >> 8), AY.push((16711680 & rY) >> 16), AY.push(rY >> 24 & 255)
            }
            rY.setVerticesData(RY.l.MatricesIndicesExtraKind, AY, !1)
          }
          if (DY.matricesWeightsAttrDesc && DY.matricesWeightsAttrDesc.count > 0) {
            const FY = new Float32Array(YY, DY.matricesWeightsAttrDesc.offset, DY.matricesWeightsAttrDesc.count);
            rY.setVerticesData(RY.l.MatricesWeightsKind, FY, !1)
          }
          if (DY.indicesAttrDesc && DY.indicesAttrDesc.count > 0) {
            const FY = new Int32Array(YY, DY.indicesAttrDesc.offset, DY.indicesAttrDesc.count);
            rY.setIndices(FY, null)
          }
          if (DY.subMeshesAttrDesc && DY.subMeshesAttrDesc.count > 0) {
            const FY = new Int32Array(YY, DY.subMeshesAttrDesc.offset, 5 * DY.subMeshesAttrDesc.count);
            rY.qm = [];
            for (let YY = 0; YY < DY.subMeshesAttrDesc.count; YY++) {
              const DY = FY[5 * YY + 0],
                AY = FY[5 * YY + 1],
                IY = FY[5 * YY + 2],
                RY = FY[5 * YY + 3],
                gY = FY[5 * YY + 4];
              OY.d.AddToMesh(DY, AY, IY, RY, gY, rY)
            }
          }
        } else if (YY.positions && YY.normals && YY.indices) {
          if (rY.setVerticesData(RY.l.PositionKind, YY.positions, YY.positions._updatable || YY.positionsUpdatable), rY.setVerticesData(RY.l.NormalKind, YY.normals, YY.normals._updatable || YY.normalsUpdatable), YY.tangents && rY.setVerticesData(RY.l.TangentKind, YY.tangents, YY.tangents._updatable || YY.tangentsUpdatable), YY.uvs && rY.setVerticesData(RY.l.UVKind, YY.uvs, YY.uvs._updatable || YY.uvsUpdatable), YY.uvs2 && rY.setVerticesData(RY.l.UV2Kind, YY.uvs2, YY.uvs2._updatable || YY.uvs2Updatable), YY.uvs3 && rY.setVerticesData(RY.l.UV3Kind, YY.uvs3, YY.uvs3._updatable || YY.uvs3Updatable), YY.uvs4 && rY.setVerticesData(RY.l.UV4Kind, YY.uvs4, YY.uvs4._updatable || YY.uvs4Updatable), YY.uvs5 && rY.setVerticesData(RY.l.UV5Kind, YY.uvs5, YY.uvs5._updatable || YY.uvs5Updatable), YY.uvs6 && rY.setVerticesData(RY.l.UV6Kind, YY.uvs6, YY.uvs6._updatable || YY.uvs6Updatable), YY.colors && rY.setVerticesData(RY.l.ColorKind, AY.d.CheckColors4(YY.colors, YY.positions.length / 3), YY.colors._updatable), YY.matricesIndices)
            if (YY.matricesIndices._isExpanded || YY.matricesIndicesExpanded) delete YY.matricesIndices._isExpanded, delete YY.matricesIndicesExpanded, rY.setVerticesData(RY.l.MatricesIndicesKind, YY.matricesIndices, YY.matricesIndices._updatable || YY.matricesIndicesUpdatable);
            else {
              const DY = [];
              for (let rY = 0; rY < YY.matricesIndices.length; rY++) {
                const FY = YY.matricesIndices[rY];
                DY.push(255 & FY), DY.push((65280 & FY) >> 8), DY.push((16711680 & FY) >> 16), DY.push(FY >> 24 & 255)
              }
              rY.setVerticesData(RY.l.MatricesIndicesKind, DY, YY.matricesIndices._updatable || YY.matricesIndicesUpdatable)
            } if (YY.matricesIndicesExtra)
            if (YY.matricesIndicesExtraExpanded || YY.matricesIndicesExtra._isExpanded) delete YY.matricesIndices._isExpanded, delete YY.matricesIndicesExtraExpanded, rY.setVerticesData(RY.l.MatricesIndicesExtraKind, YY.matricesIndicesExtra, YY.matricesIndicesExtra._updatable || YY.matricesIndicesExtraUpdatable);
            else {
              const DY = [];
              for (let rY = 0; rY < YY.matricesIndicesExtra.length; rY++) {
                const FY = YY.matricesIndicesExtra[rY];
                DY.push(255 & FY), DY.push((65280 & FY) >> 8), DY.push((16711680 & FY) >> 16), DY.push(FY >> 24 & 255)
              }
              rY.setVerticesData(RY.l.MatricesIndicesExtraKind, DY, YY.matricesIndicesExtra._updatable || YY.matricesIndicesExtraUpdatable)
            } YY.matricesWeights && (WY._CleanMatricesWeights(YY, rY), rY.setVerticesData(RY.l.MatricesWeightsKind, YY.matricesWeights, YY.matricesWeights._updatable)), YY.matricesWeightsExtra && rY.setVerticesData(RY.l.MatricesWeightsExtraKind, YY.matricesWeightsExtra, YY.matricesWeights._updatable), rY.setIndices(YY.indices, null)
        }
        if (YY.qm) {
          rY.qm = [];
          for (let DY = 0; DY < YY.qm.length; DY++) {
            const FY = YY.qm[DY];
            OY.d.AddToMesh(FY.materialIndex, FY.verticesStart, FY.verticesCount, FY.indexStart, FY.indexCount, rY)
          }
        }
        rY._shouldGenerateFlatShading && (rY.convertToFlatShadedMesh(), rY._shouldGenerateFlatShading = !1), rY.computeWorldMatrix(!0), DY.onMeshImportedObservable.notifyObservers(rY)
      }
      static _CleanMatricesWeights(YY, rY) {
        const DY = .001;
        if (!gY.d.CleanBoneMatrixWeights) return;
        let FY;
        if (!(YY.skeletonId > -1)) return;
        {
          const DY = rY.hT().getLastSkeletonById(YY.skeletonId);
          if (!DY) return;
          FY = DY.bones.length
        }
        const AY = rY.getVerticesData(RY.l.MatricesIndicesKind),
          IY = rY.getVerticesData(RY.l.MatricesIndicesExtraKind),
          OY = YY.matricesWeights,
          aY = YY.matricesWeightsExtra,
          vY = YY.numBoneInfluencer,
          uY = OY.length;
        for (let RY = 0; RY < uY; RY += 4) {
          let YY = 0,
            rY = -1;
          for (let FY = 0; FY < 4; FY++) {
            const AY = OY[RY + FY];
            YY += AY, AY < DY && rY < 0 && (rY = FY)
          }
          if (aY)
            for (let FY = 0; FY < 4; FY++) {
              const AY = aY[RY + FY];
              YY += AY, AY < DY && rY < 0 && (rY = FY + 4)
            }
          if ((rY < 0 || rY > vY - 1) && (rY = vY - 1), YY > DY) {
            const rY = 1 / YY;
            for (let YY = 0; YY < 4; YY++) OY[RY + YY] *= rY;
            if (aY)
              for (let YY = 0; YY < 4; YY++) aY[RY + YY] *= rY
          } else rY >= 4 ? (aY[RY + rY - 4] = 1 - YY, IY[RY + rY - 4] = FY) : (OY[RY + rY] = 1 - YY, AY[RY + rY] = FY)
        }
        rY.setVerticesData(RY.l.MatricesIndicesKind, AY), YY.matricesWeightsExtra && rY.setVerticesData(RY.l.MatricesIndicesExtraKind, IY)
      }
      static Parse(YY, rY, DY) {
        const AY = new WY(YY.id, rY, void 0, YY.updatable);
        return AY._loadedUniqueId = YY.uniqueId, sY.e && sY.e.AddTagsTo(AY, YY.tags), YY.delayLoadingFile ? (AY.delayLoadState = 4, AY.delayLoadingFile = DY + YY.delayLoadingFile, AY._boundingInfo = new aY.d(FY.r.FromArray(YY.boundingBoxMinimum), FY.r.FromArray(YY.boundingBoxMaximum)), AY._delayInfo = [], YY.hasUVs && AY._delayInfo.push(RY.l.UVKind), YY.hasUVs2 && AY._delayInfo.push(RY.l.UV2Kind), YY.hasUVs3 && AY._delayInfo.push(RY.l.UV3Kind), YY.hasUVs4 && AY._delayInfo.push(RY.l.UV4Kind), YY.hasUVs5 && AY._delayInfo.push(RY.l.UV5Kind), YY.hasUVs6 && AY._delayInfo.push(RY.l.UV6Kind), YY.hasColors && AY._delayInfo.push(RY.l.ColorKind), YY.hasMatricesIndices && AY._delayInfo.push(RY.l.MatricesIndicesKind), YY.hasMatricesWeights && AY._delayInfo.push(RY.l.MatricesWeightsKind), AY._delayLoadingFunction = IY.c.ImportVertexData) : IY.c.ImportVertexData(YY, AY), rY.pushGeometry(AY, !0), AY
      }
    }
  },
  39582: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY,
      f: () => yY
    });
    var FY = DY(36524),
      AY = DY(38040),
      IY = DY(39554),
      RY = DY(39514),
      OY = DY(38037),
      gY = DY(39560),
      aY = DY(39270),
      vY = DY(36569);
    class uY extends IY.b {
      constructor(YY, rY) {
        super(YY, rY.hT()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, rY.Q_(this), this._sourceMesh = rY, this._unIndexed = rY._unIndexed, this.position.brY(rY.position), this.rotation.brY(rY.rotation), this.pa.brY(rY.pa), rY.rotationQuaternion && (this.rotationQuaternion = rY.rotationQuaternion.clone()), this.animations = rY.animations.slice();
        for (const DY of rY.getAnimationRanges()) null != DY && this.createAnimationRange(DY.name, DY.from, DY.to);
        if (this.infiniteDistance = rY.infiniteDistance, this.setPivotMatrix(rY.getPivotMatrix()), rY.skeleton || rY.morphTargetManager || !rY.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const YY = rY.oB();
          this.buildBoundingInfo(YY.minimum, YY.maximum)
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
      set receiveShadows(YY) {
        this._sourceMesh?.receiveShadows !== YY && AY.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(YY) {
        this._sourceMesh?.material !== YY && AY.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(YY) {
        this._sourceMesh?.visibility !== YY && AY.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(YY) {
        this._sourceMesh?.skeleton !== YY && AY.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(YY) {
        this._sourceMesh && YY !== this._sourceMesh.renderingGroupId && AY.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(YY) {
        this._sourceMesh && YY !== this._sourceMesh.meshBlendingTag && AY.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get vFY() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(YY) {
        return this._sourceMesh.createInstance(YY)
      }
      isReady() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(YY, !0)
      }
      getVerticesData(YY, rY, DY) {
        return this._sourceMesh.getVerticesData(YY, rY, DY)
      }
      copyVerticesData(YY, rY) {
        this._sourceMesh.copyVerticesData(YY, rY)
      }
      getVertexBuffer(YY, rY) {
        return this._sourceMesh.getVertexBuffer(YY, rY)
      }
      setVerticesData(YY, rY, DY, FY) {
        return this.vFY && this.vFY.setVerticesData(YY, rY, DY, FY), this.vFY
      }
      updateVerticesData(YY, rY, DY, FY) {
        return this.vFY && this.vFY.updateVerticesData(YY, rY, DY, FY), this.vFY
      }
      setIndices(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.vFY && this.vFY.setIndices(YY, rY), this.vFY
      }
      isVerticesDataPresent(YY) {
        return this._sourceMesh.isVerticesDataPresent(YY)
      }
      XIY() {
        return this._sourceMesh.XIY()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let YY, rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.oB().isLocked) return this;
        YY = "object" === typeof rY ? rY : {
          applySkeleton: rY,
          applyMorph: DY
        };
        const FY = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(YY, null, aY.l.PositionKind), FY), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(YY, rY) {
        if (super._activate(YY, rY), this._sourceMesh.qm || AY.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, YY), rY) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== gY.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new FY.e);
          const YY = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, FY.n.xy[7].brY(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.brY(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.brY(FY.n.xy[7]), this._currentLOD._masterMesh = YY, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get XT() {
        return !0
      }
      getLOD(YY) {
        if (!YY) return this;
        const rY = this.vFY.getLODLevels();
        if (rY && 0 !== rY.length) {
          const rY = this.oB();
          this._currentLOD = this.vFY.getLOD(YY, rY.bDY)
        } else this._currentLOD = this.vFY;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(YY) {
        return this.vFY._preActivateForIntermediateRendering(YY)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.qm)
          for (let YY = 0; YY < this._sourceMesh.qm.length; YY++) this._sourceMesh.qm[YY].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.oB().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(YY);
        if (OY.c.DeepCopy(this, FY, ["name", "qm", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "vFY", "XT", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "aFY", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "nIY", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), rY && (FY.parent = rY), !DY)
          for (let AY = 0; AY < this.hT().meshes.length; AY++) {
            const YY = this.hT().meshes[AY];
            YY.parent === this && YY.clone(YY.name, FY)
          }
        return FY.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(FY), FY
      }
      dispose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.E_(this), super.dispose(YY, rY)
      }
      _serializeAsParent(YY) {
        super._serializeAsParent(YY), YY.parentId = this._sourceMesh.uniqueId, YY.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = this.clone("Clone of " + (this.name || this.id), YY || this.parent, !0, rY && rY.newSourcedMesh);
        FY && DY && DY(this, FY);
        for (const AY of this.getChildTransformNodes(!0)) AY.instantiateHierarchy(FY, rY, DY);
        return FY
      }
    }
    let sY = !1;

    function iY(YY, rY, DY, FY, AY) {
      for (let IY = 0; IY < rY.length; IY++) {
        const RY = YY[rY[IY]] ?? 0,
          OY = AY + DY[IY];
        RY.toArray ? RY.toArray(FY, OY) : RY.copyToArray ? RY.copyToArray(FY, OY) : FY[OY] = RY
      }
    }

    function yY() {
      sY || (sY = !0, RY.c._instancedMeshFactory = (YY, rY) => {
        const DY = new uY(YY, rY);
        if (rY.YB) {
          DY.YB = {};
          for (const YY in rY.YB) DY.YB[YY] = rY.YB[YY]
        }
        return DY
      }, RY.c.prototype.kN = function(YY, rY) {
        if (!this.YB) {
          this.YB = {};
          for (const YY of this.instances) YY.YB = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.ky().getCaps().vertexArrayObject ? {} : void 0
        }), this.YB[YY] = null, this._userInstancedBuffersStorage.strides[YY] = rY;
        const DY = this._userInstancedBuffersStorage;
        DY.interleavedKinds = [], DY.interleavedOffsets = [], DY.interleavedRowStride = 0;
        for (const FY in DY.strides) DY.interleavedKinds.push(FY), DY.interleavedOffsets.push(DY.interleavedRowStride), DY.interleavedRowStride += DY.strides[FY];
        DY.interleavedData = new Float32Array(32 * DY.interleavedRowStride);
        for (const FY in DY.interleavedBuffers) DY.interleavedBuffers[FY].buffer.dispose();
        DY.interleavedBuffers = {}, DY.vertexBuffers[YY] = null;
        for (const FY of this.instances) FY.YB[YY] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, RY.c.prototype._processInstancedBuffers = function(YY, rY) {
        const DY = this._userInstancedBuffersStorage,
          FY = DY.interleavedRowStride;
        if (!FY) return;
        const AY = YY ? YY.length : 0,
          IY = (AY + 1) * FY;
        let RY = DY.interleavedData;
        if (RY.length < IY) {
          let YY = RY.length;
          for (; YY < IY;) YY *= 2;
          RY = DY.interleavedData = new Float32Array(YY)
        }
        const OY = DY.interleavedKinds,
          gY = DY.interleavedOffsets;
        let vY = 0;
        rY && (iY(this.YB, OY, gY, RY, vY), vY += FY);
        for (let aY = 0; aY < AY; aY++) iY(YY[aY].YB, OY, gY, RY, vY), vY += FY;
        let uY = "shared",
          sY = DY.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (uY = this._instanceDataStorage.engine.currentRenderPassId, DY.renderPasses || (DY.renderPasses = {}), DY.renderPasses[uY] || (DY.renderPasses[uY] = {}), sY = DY.renderPasses[uY]);
        const yY = DY.interleavedBuffers[uY];
        let QY = !yY || yY.data !== RY;
        for (let aY = 0; !QY && aY < OY.length; aY++) QY = !sY[OY[aY]];
        if (!QY) return void yY.buffer.updateDirectly(RY, 0);
        yY?.buffer.dispose();
        const oY = new aY.c(this.ky(), RY, !0, FY, !1, !0);
        for (let aY = 0; aY < OY.length; aY++) {
          const YY = OY[aY],
            rY = oY.createVertexBuffer(YY, gY[aY], DY.strides[YY]);
          rY.hashCode += rY.byteOffset * 2 ** 24, sY[YY] = rY
        }
        DY.interleavedBuffers[uY] = {
          buffer: oY,
          data: RY
        }, this._invalidateInstanceVertexArrayObject()
      }, RY.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const YY in this._userInstancedBuffersStorage.vertexArrayObjects) this.ky().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[YY]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, RY.c.prototype._disposeInstanceSpecificData = function() {
        for (const rY in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[rY].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const rY in this.YB) this._userInstancedBuffersStorage.vertexBuffers[rY] && this._userInstancedBuffersStorage.vertexBuffers[rY].dispose();
        const YY = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (YY) {
          for (const rY in YY) YY[rY].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.YB = {}
      }, (0, vY.i)("BABYLON.InstancedMesh", uY))
    }
  },
  39514: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => UY,
      g: () => tY,
      i: () => qY
    });
    var FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY = DY(36552),
      EY = DY(39219),
      mY = DY(39160),
      VY = DY(38037),
      SY = DY(39149),
      lY = DY(39523),
      TY = DY(39342),
      eY = DY(36524),
      NY = DY(36588),
      BY = DY(39347),
      cY = DY(39270),
      KY = DY(39530),
      HY = DY(39534),
      zY = DY(39554),
      ZY = DY(39416),
      CY = DY(39414),
      fY = DY(39499),
      jY = DY(39568),
      hY = DY(39543),
      dY = DY(39144),
      JY = DY(38040),
      MY = DY(36569),
      wY = DY(39029),
      bY = DY(39296);
    class XY {
      constructor(YY, rY) {
        this.distanceOrScreenCoverage = YY, this.mesh = rY
      }
    }
    class qY {}
    class pY {
      constructor() {
        this.batchCache = new GY(this), this.batchCacheReplacementModeInFrozenMode = new GY(this), this.instancesBufferSize = 2048
      }
    }
    class kY {
      constructor() {
        this.renderPasses = {}
      }
    }
    class GY {
      constructor(YY) {
        this.parent = YY, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class xY {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class nY {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const PY = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class UY extends zY.b {
      static _GetDefaultSideOrientation(YY) {
        return YY || UY.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(YY) {
        this._internalMeshDataInfo._useLODScreenCoverage = YY, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(YY) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== YY && (YY && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(cY.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(cY.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = YY, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new WY.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new WY.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new WY.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new WY.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new WY.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(YY) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(YY)
      }
      get aFY() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(YY) {
        this._internalMeshDataInfo._forcedInstanceCount = YY
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(YY) {
        this._internalMeshDataInfo._sideOrientation = YY, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === YY || !this._scene.useRightHandedSystem && 0 === YY
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(YY) {
        this.sideOrientation = YY, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(YY) {
        this._internalMeshDataInfo._overrideRenderingFillMode = YY
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(YY) {
        YY && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (YY.sideOrientation = null), this._setMaterial(YY)
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
      set isUnIndexed(YY) {
        this._unIndexed !== YY && (this._unIndexed = YY, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const YY = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return YY ? YY.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const YY = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return YY ? YY.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(YY) {
        this._instanceDataStorage.manualUpdate = YY
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(YY) {
        this._instanceDataStorage.previousManualUpdate = YY
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(YY) {
        this._instanceDataStorage.forceMatrixUpdates = YY
      }
      _copySource(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AY = this.hT();
        if (YY._geometry && YY._geometry.applyToMesh(this), VY.c.DeepCopy(YY, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "aFY", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "XT", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "nIY", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = YY, AY.useClonedMeshMap && (YY._internalMeshDataInfo.meshMap || (YY._internalMeshDataInfo.meshMap = {}), YY._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = YY._originalBuilderSideOrientation, this._creationDataStorage = YY._creationDataStorage, YY._ranges) {
          const rY = YY._ranges;
          for (const YY in rY) Object.prototype.hasOwnProperty.call(rY, YY) && rY[YY] && this.createAnimationRange(YY, rY[YY].from, rY[YY].to)
        }
        if (YY.metadata && YY.metadata.clone ? this.metadata = YY.metadata.clone() : this.metadata = YY.metadata, this._internalMetadata = YY._internalMetadata, this.meshBlendingTag = YY.meshBlendingTag, SY.e && SY.e.HasTags(YY) && SY.e.AddTagsTo(this, SY.e.GetTags(YY, !0)), this.mV(YY.isEnabled(!1)), this.parent = YY.parent, this.setPivotMatrix(YY.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + YY.id, this.material = YY.material, !rY) {
          const AY = YY.getDescendants(!0);
          for (let YY = 0; YY < AY.length; YY++) {
            const IY = AY[YY];
            IY._isMesh ? (PY.parent = this, PY.doNotCloneChildren = rY, PY.clonePhysicsImpostor = DY, PY.cloneThinInstances = FY, IY.clone(this.name + "." + IY.name, PY)) : IY.clone && IY.clone(this.name + "." + IY.name, this)
          }
        }
        if (YY.morphTargetManager && (this.morphTargetManager = YY.morphTargetManager), (0, wY.b)(AY.getPhysicsEngine)) {
          const rY = AY.getPhysicsEngine();
          if (DY && rY)
            if (1 === rY.getPluginVersion()) {
              const DY = rY.getImpostorForPhysicsObject(YY);
              DY && (this.physicsImpostor = DY.clone(this))
            } else 2 === rY.getPluginVersion() && YY.physicsBody && YY.physicsBody.clone(this)
        }
        for (let IY = 0; IY < AY.YV.length; IY++) {
          const rY = AY.YV[IY];
          rY.emitter === YY && rY.clone(rY.name, this)
        }
        if (this.skeleton = YY.skeleton, FY && (YY._thinInstanceDataStorage.matrixData ? (this.j_("matrix", new Float32Array(YY._thinInstanceDataStorage.matrixData), 16, !YY._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = YY._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = YY._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = YY._thinInstanceDataStorage.matrixBufferSize, YY._userThinInstanceBuffersStorage)) {
          const rY = YY._userThinInstanceBuffersStorage;
          for (const YY in rY.data) this.j_(YY, new Float32Array(rY.data[YY]), rY.strides[YY], !rY.vertexBuffers?.[YY]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[YY] = rY.sizes[YY]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(YY) {
        let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          IY = arguments.length > 4 ? arguments[4] : void 0,
          RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(YY, DY), this._internalMeshDataInfo = new nY, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new xY, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = UY.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, DY = this.hT(), this._instanceDataStorage = new kY, this._instanceDataStorage.engine = DY.ky(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new pY), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (YY, rY, DY) => {
          YY && DY && (this._uniformBuffer ? this.transferToEffect(rY) : DY.bindOnlyWorldMatrix(rY))
        };
        let OY = !1;
        if (FY && void 0 === FY._addToSceneRootNodes) {
          const YY = FY;
          rY = YY.parent ?? null, AY = YY.source ?? null, IY = YY.doNotCloneChildren ?? !1, RY = YY.clonePhysicsImpostor ?? !0, OY = YY.cloneThinInstances ?? !1
        } else rY = FY;
        AY && this._copySource(AY, IY, RY, OY), null !== rY && (this.parent = rY), this._instanceDataStorage.hardwareInstancedRendering = this.ky().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = YY => {
          YY.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new WY.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), AY && AY.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = 0 === this.getTotalVertices() || rY && rY.doNotInstantiate && (!0 === rY.doNotInstantiate || rY.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), YY || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        FY.parent = YY || this.parent, FY.position = this.position.clone(), FY.pa = this.pa.clone(), this.rotationQuaternion ? FY.rotationQuaternion = this.rotationQuaternion.clone() : FY.rotation = this.rotation.clone(), DY && DY(this, FY);
        for (const AY of this.getChildTransformNodes(!0)) "InstancedMesh" === AY.getClassName() && "Mesh" === FY.getClassName() && AY.vFY === this ? AY.instantiateHierarchy(FY, {
          doNotInstantiate: rY && rY.doNotInstantiate || !1,
          newSourcedMesh: FY
        }, DY) : AY.instantiateHierarchy(FY, rY, DY);
        return FY
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(YY) {
        let rY = super.toString(YY);
        if (rY += ", n vertices: " + this.getTotalVertices(), rY += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let DY = 0; DY < this.animations.length; DY++) rY += ", animation[0]: " + this.animations[DY].toString(YY);
        if (YY)
          if (this._geometry) {
            const YY = this.XIY(),
              DY = this.getVerticesData(cY.l.PositionKind);
            DY && YY && (rY += ", flat shading: " + (DY.length / 3 === YY.length ? "YES" : "NO"))
          } else rY += ", flat shading: UNKNOWN";
        return rY
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const YY of this.instances) YY._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const YY = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((rY, DY) => rY.distanceOrScreenCoverage < DY.distanceOrScreenCoverage ? YY : rY.distanceOrScreenCoverage > DY.distanceOrScreenCoverage ? -YY : 0))
      }
      addLODLevel(YY, rY) {
        if (rY && rY._masterMesh) return JY.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const DY = new XY(YY, rY);
        return this._internalMeshDataInfo._LODLevels.push(DY), rY && (rY._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(YY) {
        const rY = this._internalMeshDataInfo;
        for (let DY = 0; DY < rY._LODLevels.length; DY++) {
          const FY = rY._LODLevels[DY];
          if (FY.distanceOrScreenCoverage === YY) return FY.mesh
        }
        return null
      }
      removeLODLevel(YY) {
        const rY = this._internalMeshDataInfo;
        for (let DY = 0; DY < rY._LODLevels.length; DY++) rY._LODLevels[DY].mesh === YY && (rY._LODLevels.splice(DY, 1), YY && (YY._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(YY, rY) {
        const DY = this._internalMeshDataInfo;
        if (!DY._LODLevels || 0 === DY._LODLevels.length) return this;
        const FY = rY || this.oB().bDY,
          AY = YY.mode === TY.e.ORTHOGRAPHIC_CAMERA ? YY.minZ : FY.centerWorld.subtract(YY.globalPosition).length();
        let IY = AY,
          RY = 1;
        if (DY._useLODScreenCoverage) {
          const rY = YY.screenArea;
          let DY = FY.radiusWorld * YY.minZ / AY;
          DY = DY * DY * Math.PI, IY = DY / rY, RY = -1
        }
        if (RY * DY._LODLevels[DY._LODLevels.length - 1].distanceOrScreenCoverage > RY * IY) return this.onLODLevelSelection && this.onLODLevelSelection(IY, this, this), this;
        for (let OY = 0; OY < DY._LODLevels.length; OY++) {
          const YY = DY._LODLevels[OY];
          if (RY * YY.distanceOrScreenCoverage < RY * IY) {
            if (YY.mesh) {
              if (4 === YY.mesh.delayLoadState) return YY.mesh._checkDelayState(), this;
              if (2 === YY.mesh.delayLoadState) return this;
              YY.mesh._preActivate(), YY.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(IY, this, YY.mesh), YY.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(IY, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(YY, rY, DY, FY) {
        if (!this._geometry) return null;
        let AY = FY ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[YY]?.getFloatData(this.instances.length + 1, DY || rY && 1 !== this._geometry.meshes.length);
        return AY || (AY = this._geometry.getVerticesData(YY, rY, DY)), AY
      }
      copyVerticesData(YY, rY) {
        this._geometry && this._geometry.copyVerticesData(YY, rY)
      }
      getVertexBuffer(YY, rY) {
        return this._geometry ? (rY ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[YY]) ?? this._geometry.getVertexBuffer(YY) : null
      }
      isVerticesDataPresent(YY, rY) {
        return this._geometry ? !rY && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[YY] || this._geometry.isVerticesDataPresent(YY) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(YY)
      }
      isVertexBufferUpdatable(YY, rY) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(YY);
        if (!rY) {
          const rY = this._userInstancedBuffersStorage?.vertexBuffers[YY];
          if (rY) return rY.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(YY)
      }
      getVerticesDataKinds(YY) {
        if (!this._geometry) {
          const YY = [];
          if (this._delayInfo)
            for (const rY of this._delayInfo) YY.push(rY);
          return YY
        }
        const rY = this._geometry.getVerticesDataKinds();
        if (!YY && this._userInstancedBuffersStorage)
          for (const DY in this._userInstancedBuffersStorage.vertexBuffers) - 1 === rY.indexOf(DY) && rY.push(DY);
        return rY
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      XIY(YY, rY) {
        return this._geometry ? this._geometry.XIY(YY, rY) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(YY)) return !1;
        if (!this.qm || 0 === this.qm.length) return !0;
        if (!YY) return !0;
        const DY = this.ky(),
          FY = this.hT(),
          AY = rY || DY.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const IY = this.material || FY.defaultMaterial;
        if (IY)
          if (IY._storeEffectOnSubMeshes)
            for (const OY of this.qm) {
              const YY = OY.Uy();
              if (YY)
                if (YY._storeEffectOnSubMeshes) {
                  if (!YY.isReadyForSubMesh(this, OY, AY)) return !1
                } else if (!YY.isReady(this, AY)) return !1
            } else if (!IY.isReady(this, AY)) return !1;
        const RY = DY.currentRenderPassId;
        for (const OY of this.lightSources) {
          const YY = OY.getShadowGenerators();
          if (!YY) continue;
          const rY = YY.values();
          for (let FY = rY.next(); !0 !== FY.done; FY = rY.next()) {
            const YY = FY.value;
            if (YY && (!YY.getShadowMap()?.renderList || YY.getShadowMap()?.renderList && -1 !== YY.getShadowMap()?.renderList?.indexOf(this))) {
              const rY = YY.getShadowMap().renderPassIds ?? [DY.currentRenderPassId];
              for (let FY = 0; FY < rY.length; ++FY) {
                DY.currentRenderPassId = rY[FY];
                for (const rY of this.qm)
                  if (!YY.isReady(rY, AY, rY.Uy()?.needAlphaBlendingForMesh(this) ?? !1)) return DY.currentRenderPassId = RY, !1
              }
              DY.currentRenderPassId = RY
            }
          }
        }
        for (const OY of this._internalMeshDataInfo._LODLevels)
          if (OY.mesh && !OY.mesh.isReady(AY)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Ly() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(YY) {
        this._instanceDataStorage.overridenInstanceCount = YY
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const YY = this._instanceDataStorage.engine.currentRenderPassId;
        let rY = this._instanceDataStorage.renderPasses[YY];
        return rY || (rY = new pY, this._instanceDataStorage.renderPasses[YY] = rY), rY
      }
      _preActivate() {
        const YY = this._internalMeshDataInfo,
          rY = this.hT().getRenderId();
        return YY._preActivateId === rY || (YY._preActivateId = rY, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(YY) {
        const rY = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return rY.visibleInstances && (rY.visibleInstances.intermediateDefaultRenderId = YY), this
      }
      _registerInstanceForRenderId(YY, rY) {
        const DY = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return DY.visibleInstances || (DY.visibleInstances = {
          defaultRenderId: rY,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), DY.visibleInstances[rY] || (void 0 === DY.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete DY.visibleInstances[DY.previousRenderId], DY.previousRenderId = rY, DY.visibleInstances[rY] = new Array), DY.visibleInstances[rY].push(YY), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Py || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let YY, rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.oB().isLocked) return this;
        YY = "object" === typeof rY ? rY : {
          applySkeleton: rY,
          applyMorph: DY
        };
        const FY = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(YY, null, cY.l.PositionKind), FY), this
      }
      _createGlobalSubMesh(YY) {
        const rY = this.getTotalVertices();
        if (!rY || !this.XIY()) return null;
        if (this.qm && this.qm.length > 0) {
          const DY = this.XIY();
          if (!DY) return null;
          const FY = DY.length;
          let AY = !1;
          if (YY) AY = !0;
          else
            for (const YY of this.qm) {
              if (YY.indexStart + YY.indexCount > FY) {
                AY = !0;
                break
              }
              if (YY.verticesStart + YY.verticesCount > rY) {
                AY = !0;
                break
              }
            }
          if (!AY) return this.qm[0]
        }
        return this.releaseSubMeshes(), new ZY.d(0, 0, rY, 0, this.getTotalIndices() || (this.isUnIndexed ? rY : 0), this)
      }
      subdivide(YY) {
        if (YY < 1) return;
        const rY = this.getTotalIndices();
        let DY = rY / YY | 0,
          FY = 0;
        for (; DY % 3 !== 0;) DY++;
        this.releaseSubMeshes();
        for (let AY = 0; AY < YY && !(FY >= rY); AY++) ZY.d.CreateFromIndices(0, FY, FY + DY >= rY ? rY - FY : DY, this, void 0, !1), FY += DY;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(YY, rY, DY, FY);
        else {
          const FY = new KY.c;
          FY.set(rY, YY);
          const AY = this.hT();
          new HY.c(HY.c.RandomId(), AY, FY, DY, this)
        }
        return this
      }
      removeVerticesData(YY) {
        this._geometry && this._geometry.removeVerticesData(YY)
      }
      markVerticesDataAsUpdatable(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const DY = this.getVertexBuffer(YY);
        DY && DY.isUpdatable() !== rY && this.setVerticesData(YY, this.getVerticesData(YY), rY)
      }
      setVerticesBuffer(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = HY.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(YY, DY, rY), this
      }
      updateVerticesData(YY, rY, DY, FY) {
        return this._geometry ? (FY ? (this.makeGeometryUnique(), this.updateVerticesData(YY, rY, DY, !1)) : this._geometry.updateVerticesData(YY, rY, DY), this) : this
      }
      updateMeshPositions(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const DY = this.getVerticesData(cY.l.PositionKind);
        if (!DY) return this;
        if (YY(DY), this.updateVerticesData(cY.l.PositionKind, DY, !1, !1), rY) {
          const YY = this.XIY(),
            rY = this.getVerticesData(cY.l.NormalKind);
          if (!rY) return this;
          KY.c.ComputeNormals(DY, YY, rY), this.updateVerticesData(cY.l.NormalKind, rY, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const YY = this._geometry,
          rY = this._geometry.copy(HY.c.RandomId());
        return YY.releaseForMesh(this, !0), rY.applyToMesh(this), this
      }
      setIndexBuffer(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AY = this._geometry;
        AY || (AY = new HY.c(HY.c.RandomId(), this.hT(), void 0, void 0, this)), AY.setIndexBuffer(YY, rY, DY, FY)
      }
      setIndices(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(YY, rY, DY, FY);
        else {
          const FY = new KY.c;
          FY.indices = YY;
          const AY = this.hT();
          new HY.c(HY.c.RandomId(), AY, FY, DY, this, rY)
        }
        return this
      }
      updateIndices(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(YY, rY, DY), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(YY, rY, DY) {
        let FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const AY = this.hT().ky();
        let IY;
        if (this._unIndexed)
          if (this._getRenderingFillMode(DY) === CY.c.WireFrameFillMode) IY = YY._getLinesIndexBuffer(this.XIY(), AY);
          else IY = null;
        else switch (this._getRenderingFillMode(DY)) {
          case CY.c.PointFillMode:
            IY = null;
            break;
          case CY.c.WireFrameFillMode:
            IY = YY._getLinesIndexBuffer(this.XIY(), AY);
            break;
          default:
          case CY.c.TriangleFillMode:
            IY = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(rY, IY, FY)
      }
      _bindDirect(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(YY), DY && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const YY = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const rY in YY) this._userInstancedBuffersStorage.vertexBuffers[rY] = YY[rY]
          }
          this._geometry._bind(YY, rY, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(YY, rY);
        return this
      }
      _draw(YY, rY, DY) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const FY = this.hT().ky(),
          AY = FY._currentMaterialContext,
          IY = AY && AY.useVertexPulling;
        return this._unIndexed && rY !== CY.c.WireFrameFillMode || rY == CY.c.PointFillMode ? FY.drawArraysType(rY, YY.verticesStart, YY.verticesCount, this.forcedInstanceCount || DY) : rY == CY.c.WireFrameFillMode ? FY.drawElementsType(rY, 0, YY._linesIndexCount, this.forcedInstanceCount || DY) : IY ? FY.drawArraysType(rY, YY.indexStart, YY.indexCount, this.forcedInstanceCount || DY) : FY.drawElementsType(rY, YY.indexStart, YY.indexCount, this.forcedInstanceCount || DY), this
      }
      registerBeforeRender(YY) {
        return this.onBeforeRenderObservable.add(YY), this
      }
      unregisterBeforeRender(YY) {
        return this.onBeforeRenderObservable.removeCallback(YY), this
      }
      registerAfterRender(YY) {
        return this.onAfterRenderObservable.add(YY), this
      }
      unregisterAfterRender(YY) {
        return this.onAfterRenderObservable.removeCallback(YY), this
      }
      _getInstancesRenderList(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (rY) return DY.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[YY] = !1, DY.batchCacheReplacementModeInFrozenMode.renderSelf[YY] = !0, DY.batchCacheReplacementModeInFrozenMode;
          if (DY.previousBatch) return DY.previousBatch
        }
        const FY = this.hT(),
          AY = FY._isInIntermediateRendering(),
          IY = AY ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          RY = DY.batchCache;
        if (RY.mustReturn = !1, RY.renderSelf[YY] = rY || !IY && this.isEnabled() && this.isVisible, RY.visibleInstances[YY] = null, DY.visibleInstances && !rY) {
          const rY = DY.visibleInstances,
            IY = FY.getRenderId(),
            OY = AY ? rY.intermediateDefaultRenderId : rY.defaultRenderId;
          RY.visibleInstances[YY] = rY[IY], !RY.visibleInstances[YY] && OY && (RY.visibleInstances[YY] = rY[OY])
        }
        return RY.hardwareInstancedRendering[YY] = !rY && this._instanceDataStorage.hardwareInstancedRendering && null !== RY.visibleInstances[YY] && void 0 !== RY.visibleInstances[YY], DY.previousBatch = RY, RY
      }
      _updateInstancedBuffers(YY, rY, DY, FY, AY, IY) {
        const RY = rY.visibleInstances[YY._id],
          OY = RY ? RY.length : 0,
          gY = rY.parent,
          aY = this._instanceDataStorage;
        let vY = gY.instancesBuffer,
          uY = gY.instancesPreviousBuffer,
          sY = 0,
          iY = 0;
        const yY = rY.renderSelf[YY._id],
          QY = this._scene.floatingOriginOffset,
          oY = !vY || DY !== gY.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !gY.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || aY.isFrozen && !oY) iY = (yY ? 1 : 0) + OY;
        else {
          const rY = this.getWorldMatrix();
          if (yY) {
            this._scene.needsPreviousWorldMatrices && (aY.masterMeshPreviousWorldMatrix ? (aY.masterMeshPreviousWorldMatrix.copyToArray(gY.instancesPreviousData, sY), aY.masterMeshPreviousWorldMatrix.brY(rY)) : (aY.masterMeshPreviousWorldMatrix = rY.clone(), aY.masterMeshPreviousWorldMatrix.copyToArray(gY.instancesPreviousData, sY))), rY.copyToArray(gY.instancesData, sY);
            const YY = rY.VDY();
            gY.instancesData[sY + 12] = YY[12] - QY.x, gY.instancesData[sY + 13] = YY[13] - QY.y, gY.instancesData[sY + 14] = YY[14] - QY.z, sY += 16, iY++
          }
          if (RY) {
            if (UY.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && YY.Uy()?.needAlphaBlendingForMesh(YY.getRenderingMesh())) {
              const YY = this._scene.activeCamera.globalPosition;
              for (let rY = 0; rY < RY.length; rY++) {
                const DY = RY[rY];
                DY._distanceToCamera = eY.r.Distance(DY.oB().bDY.centerWorld, YY)
              }
              RY.sort(((YY, rY) => YY._distanceToCamera > rY._distanceToCamera ? -1 : YY._distanceToCamera < rY._distanceToCamera ? 1 : 0))
            }
            for (let YY = 0; YY < RY.length; YY++) {
              const rY = RY[YY],
                DY = rY.getWorldMatrix();
              DY.copyToArray(gY.instancesData, sY), this._scene.needsPreviousWorldMatrices && (rY._previousWorldMatrix ? (rY._previousWorldMatrix.copyToArray(gY.instancesPreviousData, sY), rY._previousWorldMatrix.brY(DY)) : (rY._previousWorldMatrix = DY.clone(), rY._previousWorldMatrix.copyToArray(gY.instancesPreviousData, sY)));
              const FY = DY.VDY();
              gY.instancesData[sY + 12] = FY[12] - QY.x, gY.instancesData[sY + 13] = FY[13] - QY.y, gY.instancesData[sY + 14] = FY[14] - QY.z, sY += 16, iY++
            }
          }
        }
        if (oY) {
          let YY;
          if (vY && vY.dispose(), uY && uY.dispose(), vY = new cY.c(FY, gY.instancesData, !0, 16, !1, !0), gY.instancesBuffer = vY, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.ky().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) YY = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const rY = this._instanceDataStorage.engine.currentRenderPassId;
            YY = this._userInstancedBuffersStorage.renderPasses[rY], YY || (this._userInstancedBuffersStorage.renderPasses[rY] = YY = {})
          }
          YY.world0 = vY.createVertexBuffer("world0", 0, 4), YY.world1 = vY.createVertexBuffer("world1", 4, 4), YY.world2 = vY.createVertexBuffer("world2", 8, 4), YY.world3 = vY.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (uY = new cY.c(FY, gY.instancesPreviousData, !0, 16, !1, !0), gY.instancesPreviousBuffer = uY, YY.previousWorld0 = uY.createVertexBuffer("previousWorld0", 0, 4), YY.previousWorld1 = uY.createVertexBuffer("previousWorld1", 4, 4), YY.previousWorld2 = uY.createVertexBuffer("previousWorld2", 8, 4), YY.previousWorld3 = uY.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (vY.updateDirectly(gY.instancesData, 0, iY), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || uY.updateDirectly(gY.instancesPreviousData, 0, iY));
        this._processInstancedBuffers(RY, yY), IY && void 0 !== AY && (this.hT()._activeIndices.addCount(YY.indexCount * iY, !1), FY._currentDrawContext && (FY._currentDrawContext.useInstancing = !0), this._bind(YY, IY, AY), this._draw(YY, AY, iY)), !this._scene.needsPreviousWorldMatrices || oY || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || uY.updateDirectly(gY.instancesData, 0, iY)
      }
      _renderWithInstances(YY, rY, DY, FY, AY) {
        const IY = DY.visibleInstances[YY._id],
          RY = IY ? IY.length : 0,
          OY = DY.parent,
          gY = OY.instancesBufferSize,
          aY = 16 * (RY + 1) * 4;
        for (; OY.instancesBufferSize < aY;) OY.instancesBufferSize *= 2;
        return OY.instancesData && gY == OY.instancesBufferSize || (OY.instancesData = new Float32Array(OY.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !OY.instancesPreviousData || gY != OY.instancesBufferSize) && (OY.instancesPreviousData = new Float32Array(OY.instancesBufferSize / 4)), this._updateInstancedBuffers(YY, DY, gY, AY, rY, FY), AY.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(YY, rY, DY, FY) {
        const AY = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.hT()._activeIndices.addCount(YY.indexCount * AY, !1), FY._currentDrawContext && (FY._currentDrawContext.useInstancing = !0), this._bind(YY, DY, rY), this._draw(YY, rY, AY), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, AY) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), FY.unbindInstanceAttributes()
      }
      _processInstancedBuffers(YY, rY) {}
      _processRendering(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = this.hT(),
          aY = gY.ky();
        if (FY = this._getRenderingFillMode(FY), IY && rY.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(rY, FY, DY, aY), this;
        if (IY) this._renderWithInstances(rY, FY, AY, DY, aY);
        else {
          aY._currentDrawContext && (aY._currentDrawContext.useInstancing = !1);
          let DY = 0;
          AY.renderSelf[rY._id] && (RY && RY(!1, YY.getWorldMatrix(), OY), DY++, this._draw(rY, FY, this._instanceDataStorage.overridenInstanceCount));
          const IY = AY.visibleInstances[rY._id];
          if (IY) {
            const YY = IY.length;
            DY += YY;
            for (let DY = 0; DY < YY; DY++) {
              const YY = IY[DY].getWorldMatrix();
              RY && RY(!0, YY, OY), this._draw(rY, FY)
            }
          }
          gY._activeIndices.addCount(rY.indexCount * DY, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        YY?.instancesBuffer && (rY && YY.instancesBuffer.dispose(), YY.instancesBuffer = null), YY?.instancesPreviousBuffer && (rY && YY.instancesPreviousBuffer.dispose(), YY.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rY in this._instanceDataStorage.renderPasses) {
          const DY = this._instanceDataStorage.renderPasses[rY];
          this._disposeInstanceDataStorageRenderPass(DY, YY)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, YY), this._userInstancedBuffersStorage) {
          for (const rY in this._userInstancedBuffersStorage.vertexBuffers) {
            const DY = this._userInstancedBuffersStorage.vertexBuffers[rY];
            DY && (YY && DY.dispose(), this._userInstancedBuffersStorage.vertexBuffers[rY] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(YY)
      }
      _releaseRenderPassId(YY) {
        const rY = this._instanceDataStorage.renderPasses[YY];
        if (rY && (this._disposeInstanceDataStorageRenderPass(rY, !0), delete this._instanceDataStorage.renderPasses[YY]), this._userInstancedBuffersStorage?.renderPasses) {
          const rY = this._userInstancedBuffersStorage.renderPasses[YY];
          if (rY)
            for (const YY in rY) rY[YY]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[YY]
        }
        const DY = this._userInstancedBuffersStorage?.interleavedBuffers;
        DY?.[YY] && (DY[YY].buffer.dispose(), delete DY[YY])
      }
      _freeze() {
        if (this.qm) {
          for (let YY = 0; YY < this.qm.length; YY++) this._getInstancesRenderList(YY);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const YY in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[YY].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const IY = this._scene.ky(),
          RY = IY.currentRenderPassId;
        if (void 0 !== YY && (IY.currentRenderPassId = YY), FY)(!AY || AY && FY.isInFrustum(this._scene._frustumPlanes)) && this.render(FY, !!rY, DY);
        else
          for (let OY = 0; OY < this.qm.length; OY++) {
            const YY = this.qm[OY];
            (!AY || AY && YY.isInFrustum(this._scene._frustumPlanes)) && this.render(YY, !!rY, DY)
          }
        return void 0 !== YY && (IY.currentRenderPassId = RY), this
      }
      directRender() {
        if (!this.qm) return this;
        for (const YY of this.qm) this.render(YY, !1);
        return this
      }
      render(YY, rY, DY) {
        const FY = this.hT(),
          AY = FY.ky();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const IY = FY.activeCameras?.length ?? 0,
          RY = IY > 1 && FY.activeCamera === FY.activeCameras[0] || IY <= 1,
          OY = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== AY.currentRenderPassId;
        if (RY && this._checkOcclusionQuery(OY) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const gY = this._getInstancesRenderList(YY._id, !!DY);
        if (gY.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let aY = 0,
          vY = null;
        this.ignoreCameraMaxZ && FY.activeCamera && !FY._isInIntermediateRendering() && (aY = FY.activeCamera.maxZ, vY = FY.activeCamera, FY.activeCamera.maxZ = 0, FY.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const uY = YY.getRenderingMesh(),
          sY = gY.hardwareInstancedRendering[YY._id] || uY.hasThinInstances || !!this._userInstancedBuffersStorage && !YY.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          iY = this._instanceDataStorage,
          yY = YY.Uy();
        if (!yY) return vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), this;
        if (iY.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === yY) {
          if (yY._storeEffectOnSubMeshes && !YY._drawWrapper?._wasPreviouslyReady || !yY._storeEffectOnSubMeshes && !yY._getDrawWrapper()._wasPreviouslyReady) return vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), this
        } else {
          if (yY._storeEffectOnSubMeshes) {
            if (!yY.isReadyForSubMesh(this, YY, sY)) return vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), this
          } else if (!yY.isReady(this, sY)) return vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = yY
        }
        if (rY) {
          const YY = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === YY.alphaModes.length) AY.setAlphaMode(YY.alphaMode);
          else
            for (let rY = 0; rY < YY.alphaModes.length; rY++) {
              const DY = YY.alphaModes[rY];
              AY.setAlphaMode(void 0 !== DY ? DY : 2, !1, rY)
            }
        }
        let QY;
        QY = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? YY._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const oY = QY?.effect ?? null;
        for (let TY = 0, eY = FY._beforeRenderingMeshStage; TY < eY.length; TY++) {
          eY[TY].action(this, YY, gY, oY)
        }
        if (!QY || !oY) return vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), this;
        const WY = DY || this;
        let EY;
        if (!iY.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const YY = WY._getWorldMatrixDeterminant();
          EY = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), YY < 0 && (EY = EY === CY.c.ClockWiseSideOrientation ? CY.c.CounterClockWiseSideOrientation : CY.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = EY
        }
        const mY = this._internalMeshDataInfo._effectiveMaterial._preBind(QY, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && AY.setDepthWrite(!0);
        const VY = this._internalMeshDataInfo._effectiveMaterial,
          SY = VY.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), sY || this._bind(YY, oY, SY, !1);
        const lY = WY.getWorldMatrix();
        VY._storeEffectOnSubMeshes ? VY.bindForSubMesh(lY, this, YY) : VY.bind(lY, this);
        try {
          fY.d._BindAttachmentsForEffect(AY, oY) && (!VY.backFaceCulling && VY.separateCullingPass && (AY.setState(!0, VY.zOffset, !1, !mY, VY.cullBackFaces, VY.stencil, VY.zOffsetUnits), this._processRendering(this, YY, oY, SY, gY, sY, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), AY.setState(!0, VY.zOffset, !1, mY, VY.cullBackFaces, VY.stencil, VY.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(YY)), this._processRendering(this, YY, oY, SY, gY, sY, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          fY.d._RestoreAttachments(AY)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let TY = 0, eY = FY._afterRenderingMeshStage; TY < eY.length; TY++) {
          eY[TY].action(this, YY, gY, oY)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), vY && (vY.maxZ = aY, FY.updateTransformMatrix(!0)), 2 !== FY.performancePriority || iY.isFrozen || this._freeze(), this
      }
      _renderRunFollower(YY, rY) {
        const DY = this._scene,
          FY = DY._engine;
        if (FY.isWebGPU || YY._mesh !== this || 0 !== this.instances.length || this.render !== UY.prototype.render) return !1;
        const AY = YY.Uy();
        if (!AY || AY !== DY._cachedMaterial || void 0 === AY._canBindRunFollower) return !1;
        const IY = YY._drawWrapper,
          RY = IY?.effect;
        if (!RY || RY !== DY._cachedEffect || this.visibility !== DY._cachedVisibility || IY._forceRebindOnNextCall) return !1;
        const OY = this.hasThinInstances;
        if (!OY && this._userInstancedBuffersStorage) return !1;
        if (!IY._wasPreviouslyReady || IY._wasPreviouslyUsingInstances !== OY) return !1;
        const gY = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || DY._isInIntermediateRendering() || 0 !== DY._beforeRenderingMeshStage.length || 0 !== DY._afterRenderingMeshStage.length || gY._onBeforeRenderObservable?.hasObservers() || gY._onBeforeBindObservable?.hasObservers() || gY._onAfterRenderObservable?.hasObservers()) return !1;
        const aY = this.occlusionType;
        if (void 0 !== aY && aY !== zY.b.OCCLUSION_TYPE_NONE || !AY._canBindRunFollower(DY, FY, this, YY, RY)) return !1;
        const vY = this._internalAbstractMeshDataInfo,
          uY = vY._isActiveIntermediate;
        uY ? vY._isActiveIntermediate = !1 : vY._isActive = !1;
        const sY = DY.activeCameras?.length ?? 0;
        (sY > 1 && DY.activeCamera === DY.activeCameras[0] || sY <= 1) && this._checkOcclusionQuery(!1);
        const iY = this._getInstancesRenderList(YY._id);
        if (iY.mustReturn) return !0;
        if (!OY && !iY.renderSelf[YY._id]) return uY ? vY._isActiveIntermediate = !0 : vY._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (gY._effectiveMaterial = AY, rY)
          if (1 === AY.alphaModes.length) FY.setAlphaMode(AY.alphaMode);
          else
            for (let QY = 0; QY < AY.alphaModes.length; QY++) {
              const YY = AY.alphaModes[QY];
              FY.setAlphaMode(void 0 !== YY ? YY : 2, !1, QY)
            }
        if (AY.backFaceCulling || null !== AY.sideOrientation || AY._twoSidedLighting) {
          const YY = this._getWorldMatrixDeterminant();
          let rY = AY._getEffectiveOrientation(this);
          YY < 0 && (rY = rY === CY.c.ClockWiseSideOrientation ? CY.c.CounterClockWiseSideOrientation : CY.c.ClockWiseSideOrientation), gY._effectiveSideOrientation = rY
        }
        AY._preBind(IY, gY._effectiveSideOrientation), AY.forceDepthWrite && FY.setDepthWrite(!0);
        const yY = AY.fillMode;
        return OY || this._bind(YY, RY, yY, !1), AY._bindRunFollower(this.getWorldMatrix(), this, YY, RY), this._processRendering(this, YY, RY, yY, iY, OY, this._onBeforeDraw, AY), AY.unbind(), 2 === DY.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(cY.l.MatricesWeightsKind) && (this.isVerticesDataPresent(cY.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const YY = this.getVerticesData(cY.l.MatricesWeightsKind),
          rY = YY.length;
        for (let DY = 0; DY < rY; DY += 4) {
          const rY = YY[DY] + YY[DY + 1] + YY[DY + 2] + YY[DY + 3];
          if (0 === rY) YY[DY] = 1;
          else {
            const FY = 1 / rY;
            YY[DY] *= FY, YY[DY + 1] *= FY, YY[DY + 2] *= FY, YY[DY + 3] *= FY
          }
        }
        this.setVerticesData(cY.l.MatricesWeightsKind, YY)
      }
      _normalizeSkinWeightsAndExtra() {
        const YY = this.getVerticesData(cY.l.MatricesWeightsExtraKind),
          rY = this.getVerticesData(cY.l.MatricesWeightsKind),
          DY = rY.length;
        for (let FY = 0; FY < DY; FY += 4) {
          let DY = rY[FY] + rY[FY + 1] + rY[FY + 2] + rY[FY + 3];
          if (DY += YY[FY] + YY[FY + 1] + YY[FY + 2] + YY[FY + 3], 0 === DY) rY[FY] = 1;
          else {
            const AY = 1 / DY;
            rY[FY] *= AY, rY[FY + 1] *= AY, rY[FY + 2] *= AY, rY[FY + 3] *= AY, YY[FY] *= AY, YY[FY + 1] *= AY, YY[FY + 2] *= AY, YY[FY + 3] *= AY
          }
        }
        this.setVerticesData(cY.l.MatricesWeightsKind, rY), this.setVerticesData(cY.l.MatricesWeightsKind, YY)
      }
      validateSkinning() {
        const YY = this.getVerticesData(cY.l.MatricesWeightsExtraKind),
          rY = this.getVerticesData(cY.l.MatricesWeightsKind);
        if (null === rY || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          gy: "not skinned"
        };
        const DY = rY.length;
        let FY = 0,
          AY = 0,
          IY = 0,
          RY = 0;
        const OY = null === YY ? 4 : 8,
          gY = [];
        for (let iY = 0; iY <= OY; iY++) gY[iY] = 0;
        for (let iY = 0; iY < DY; iY += 4) {
          let DY = rY[iY],
            aY = DY,
            vY = 0 === aY ? 0 : 1;
          for (let AY = 1; AY < OY; AY++) {
            const IY = AY < 4 ? rY[iY + AY] : YY[iY + AY - 4];
            IY > DY && FY++, 0 !== IY && vY++, aY += IY, DY = IY
          }
          if (gY[vY]++, vY > IY && (IY = vY), 0 === aY) AY++;
          else {
            const DY = 1 / aY;
            let FY = 0;
            for (let AY = 0; AY < OY; AY++) FY += AY < 4 ? Math.abs(rY[iY + AY] - rY[iY + AY] * DY) : Math.abs(YY[iY + AY - 4] - YY[iY + AY - 4] * DY);
            FY > .001 && RY++
          }
        }
        const aY = this.skeleton.bones.length,
          vY = this.getVerticesData(cY.l.MatricesIndicesKind),
          uY = this.getVerticesData(cY.l.MatricesIndicesExtraKind);
        let sY = 0;
        for (let iY = 0; iY < DY; iY += 4)
          for (let YY = 0; YY < OY; YY++) {
            const rY = YY < 4 ? vY[iY + YY] : uY[iY + YY - 4];
            (rY >= aY || rY < 0) && sY++
          }
        return {
          skinned: !0,
          valid: 0 === AY && 0 === RY && 0 === sY,
          gy: "Number of Weights = " + DY / 4 + "\nMaximum influences = " + IY + "\nMissing Weights = " + AY + "\nNot Sorted = " + FY + "\nNot Normalized = " + RY + "\nWeightCounts = [" + gY + "]\nNumber of bones = " + aY + "\nBad Bone Indices = " + sY
        }
      }
      _checkDelayState() {
        const YY = this.hT();
        return this._geometry ? this._geometry.load(YY) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(YY)), this
      }
      _queueLoad(YY) {
        YY.addPendingData(this);
        const rY = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const DY = await YY._loadDelayedFileAsync(this.delayLoadingFile, rY, !0);
            DY instanceof ArrayBuffer ? this._delayLoadingFunction(DY, this) : this._delayLoadingFunction(JSON.parse(DY), this);
            for (const YY of this.instances) YY.refreshBoundingInfo(), YY._syncSubMeshes();
            this.delayLoadState = 1, YY.removePendingData(this)
          } catch (DY) {
            YY.removePendingData(this), YY.CrY || JY.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${DY}`)
          }
        })(), this
      }
      isInFrustum(YY) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(YY) && (this._checkDelayState(), !0))
      }
      setMaterialById(YY) {
        const rY = this.hT().materials;
        let DY;
        for (DY = rY.length - 1; DY > -1; DY--)
          if (rY[DY].id === YY) return this.material = rY[DY], this;
        const FY = this.hT().multiMaterials;
        for (DY = FY.length - 1; DY > -1; DY--)
          if (FY[DY].id === YY) return this.material = FY[DY], this;
        return this
      }
      getAnimatables() {
        const YY = [];
        return this.material && YY.push(this.material), this.skeleton && YY.push(this.skeleton), YY
      }
      bakeTransformIntoVertices(YY) {
        if (!this.isVerticesDataPresent(cY.l.PositionKind)) return this;
        const rY = this.qm.splice(0);
        this._resetPointsArrayCache();
        let DY = this.getVerticesData(cY.l.PositionKind);
        const FY = eY.r.Zero();
        let AY;
        for (AY = 0; AY < DY.length; AY += 3) eY.r.TransformCoordinatesFromFloatsToRef(DY[AY], DY[AY + 1], DY[AY + 2], YY, FY).toArray(DY, AY);
        if (this.setVerticesData(cY.l.PositionKind, DY, this.getVertexBuffer(cY.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(cY.l.NormalKind)) {
          for (DY = this.getVerticesData(cY.l.NormalKind), AY = 0; AY < DY.length; AY += 3) eY.r.TransformNormalFromFloatsToRef(DY[AY], DY[AY + 1], DY[AY + 2], YY, FY).normalize().toArray(DY, AY);
          this.setVerticesData(cY.l.NormalKind, DY, this.getVertexBuffer(cY.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(cY.l.TangentKind)) {
          for (DY = this.getVerticesData(cY.l.TangentKind), AY = 0; AY < DY.length; AY += 4) eY.r.TransformNormalFromFloatsToRef(DY[AY], DY[AY + 1], DY[AY + 2], YY, FY).normalize().toArray(DY, AY);
          this.setVerticesData(cY.l.TangentKind, DY, this.getVertexBuffer(cY.l.TangentKind).isUpdatable())
        }
        return YY.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.qm = rY, this
      }
      bakeCurrentTransformIntoVertices() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(YY), this
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (rY && void 0 === rY._addToSceneRootNodes) {
          const DY = rY;
          return PY.source = this, PY.doNotCloneChildren = DY.doNotCloneChildren, PY.clonePhysicsImpostor = DY.clonePhysicsImpostor, PY.cloneThinInstances = DY.cloneThinInstances, new UY(YY, this.hT(), PY)
        }
        return new UY(YY, this.hT(), rY, this, DY, FY)
      }
      dispose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const DY = this._internalMeshDataInfo;
        if (DY._onBeforeDrawObservable && DY._onBeforeDrawObservable.clear(), DY._onBeforeBindObservable && DY._onBeforeBindObservable.clear(), DY._onBeforeRenderObservable && DY._onBeforeRenderObservable.clear(), DY._onAfterRenderObservable && DY._onAfterRenderObservable.clear(), DY._onBetweenPassObservable && DY._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (DY.meshMap)
            for (const YY in DY.meshMap) {
              const rY = DY.meshMap[YY];
              rY && (rY._internalMeshDataInfo._source = null, DY.meshMap[YY] = void 0)
            }
          DY._source && DY._source._internalMeshDataInfo.meshMap && (DY._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const YY = this.hT().meshes;
          for (const rY of YY) {
            const YY = rY;
            YY._internalMeshDataInfo && YY._internalMeshDataInfo._source && YY._internalMeshDataInfo._source === this && (YY._internalMeshDataInfo._source = null)
          }
        }
        DY._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(YY, rY)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(YY, rY, DY, FY, AY, IY) {
        let RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          OY = arguments.length > 7 ? arguments[7] : void 0;
        const gY = this.hT();
        return (0, mY.m)(YY, (YY => {
          const OY = YY.width,
            gY = YY.height,
            aY = this.ky().createCanvas(OY, gY).getContext("2d");
          aY.drawImage(YY, 0, 0);
          const vY = aY.getImageData(0, 0, OY, gY).data;
          this.applyDisplacementMapFromBuffer(vY, OY, gY, rY, DY, AY, IY, RY), FY && FY(this)
        }), OY || (() => {}), gY.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(YY, rY, DY, FY, AY, IY, RY) {
        let OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(cY.l.PositionKind) || !this.isVerticesDataPresent(cY.l.NormalKind) || !this.isVerticesDataPresent(cY.l.UVKind)) return JY.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const gY = this.getVerticesData(cY.l.PositionKind, !0, !0),
          aY = this.getVerticesData(cY.l.NormalKind),
          vY = this.getVerticesData(cY.l.UVKind);
        let uY = eY.r.Zero();
        const sY = eY.r.Zero(),
          iY = eY.q.Zero();
        IY = IY || eY.q.Zero(), RY = RY || new eY.q(1, 1);
        for (let yY = 0; yY < gY.length; yY += 3) {
          eY.r.FromArrayToRef(gY, yY, uY), eY.r.FromArrayToRef(aY, yY, sY), eY.q.FromArrayToRef(vY, yY / 3 * 2, iY);
          const OY = 4 * ((Math.abs(iY.x * RY.x + IY.x % 1) * (rY - 1) % rY | 0) + (Math.abs(iY.y * RY.y + IY.y % 1) * (DY - 1) % DY | 0) * rY),
            QY = .3 * (YY[OY] / 255) + .59 * (YY[OY + 1] / 255) + .11 * (YY[OY + 2] / 255);
          sY.normalize(), sY.scaleInPlace(FY + (AY - FY) * QY), uY = uY.add(sY), uY.toArray(gY, yY)
        }
        return KY.c.ComputeNormals(gY, this.XIY(), aY), OY ? (this.setVerticesData(cY.l.PositionKind, gY), this.setVerticesData(cY.l.NormalKind, aY), this.setVerticesData(cY.l.UVKind, vY)) : (this.updateVerticesData(cY.l.PositionKind, gY), this.updateVerticesData(cY.l.NormalKind, aY)), this
      }
      _getFlattenedNormals(YY, rY) {
        const DY = new Float32Array(3 * YY.length);
        let FY = 0;
        const AY = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let IY = 0; IY < YY.length; IY += 3) {
          const RY = eY.r.FromArray(rY, 3 * YY[IY]),
            OY = eY.r.FromArray(rY, 3 * YY[IY + 1]),
            gY = eY.r.FromArray(rY, 3 * YY[IY + 2]),
            aY = RY.subtract(OY),
            vY = gY.subtract(OY),
            uY = eY.r.Normalize(eY.r.Cross(aY, vY));
          AY && uY.scaleInPlace(-1);
          for (let YY = 0; YY < 3; YY++) DY[FY++] = uY.x, DY[FY++] = uY.y, DY[FY++] = uY.z
        }
        return DY
      }
      _convertToUnIndexedMesh() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = this.getVerticesDataKinds().filter((YY => !this.getVertexBuffer(YY)?.getIsInstanced())),
          DY = this.XIY(!1, !0),
          FY = {},
          AY = (YY, rY) => {
            const FY = new Float32Array(DY.length * rY);
            let AY = 0;
            for (let IY = 0; IY < DY.length; IY++)
              for (let RY = 0; RY < rY; RY++) FY[AY++] = YY[DY[IY] * rY + RY];
            return FY
          },
          IY = this.oB(),
          RY = this.geometry ? this.qm.slice(0) : [];
        for (const OY of rY) FY[OY] = this.getVerticesData(OY);
        for (const OY of rY) {
          const rY = this.getVertexBuffer(OY),
            IY = rY.getSize();
          if (YY && OY === cY.l.NormalKind) {
            const YY = this._getFlattenedNormals(DY, FY[cY.l.PositionKind]);
            this.setVerticesData(cY.l.NormalKind, YY, rY.isUpdatable(), IY)
          } else this.setVerticesData(OY, AY(FY[OY], IY), rY.isUpdatable(), IY)
        }
        if (this.morphTargetManager) {
          for (let rY = 0; rY < this.morphTargetManager.numTargets; rY++) {
            const FY = this.morphTargetManager.getTarget(rY),
              IY = FY.getPositions();
            FY.pIY(AY(IY, 3));
            const RY = FY.getNormals();
            RY && FY.setNormals(YY ? this._getFlattenedNormals(DY, IY) : AY(RY, 3));
            const OY = FY.getTangents();
            OY && FY.setTangents(AY(OY, 3));
            const gY = FY.getUVs();
            gY && FY.setUVs(AY(gY, 2));
            const aY = FY.getColors();
            aY && FY.setColors(AY(aY, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let OY = 0; OY < DY.length; OY++) DY[OY] = OY;
        this.setIndices(DY), this._unIndexed = !0, this.releaseSubMeshes();
        for (const OY of RY) {
          const YY = OY.oB();
          ZY.d.AddToMesh(OY.materialIndex, OY.indexStart, OY.indexCount, OY.indexStart, OY.indexCount, this).setBoundingInfo(YY)
        }
        return this.setBoundingInfo(IY), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = KY.c.ExtractFromMesh(this);
        let DY;
        if (YY && this.isVerticesDataPresent(cY.l.NormalKind) && rY.normals) {
          for (DY = 0; DY < rY.normals.length; DY++) rY.normals[DY] *= -1;
          this.setVerticesData(cY.l.NormalKind, rY.normals, this.isVertexBufferUpdatable(cY.l.NormalKind))
        }
        if (rY.indices) {
          let YY;
          for (DY = 0; DY < rY.indices.length; DY += 3) YY = rY.indices[DY + 1], rY.indices[DY + 1] = rY.indices[DY + 2], rY.indices[DY + 2] = YY;
          this.setIndices(rY.indices, null, this.isVertexBufferUpdatable(cY.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const rY = KY.c.ExtractFromMesh(this),
          DY = rY.indices && !Array.isArray(rY.indices) && Array.from ? Array.from(rY.indices) : rY.indices,
          FY = rY.positions && !Array.isArray(rY.positions) && Array.from ? Array.from(rY.positions) : rY.positions,
          AY = rY.uvs && !Array.isArray(rY.uvs) && Array.from ? Array.from(rY.uvs) : rY.uvs,
          IY = rY.normals && !Array.isArray(rY.normals) && Array.from ? Array.from(rY.normals) : rY.normals;
        if (DY && FY) {
          rY.indices = DY, rY.positions = FY, AY && (rY.uvs = AY), IY && (rY.normals = IY);
          const RY = YY + 1,
            OY = [];
          for (let YY = 0; YY < RY + 1; YY++) OY[YY] = [];
          let gY, aY;
          const vY = new eY.r(0, 0, 0),
            uY = new eY.r(0, 0, 0),
            sY = new eY.q(0, 0),
            iY = [],
            yY = [],
            QY = [];
          let oY, WY, EY, mY = FY.length;
          AY && (WY = AY.length), IY && (EY = IY.length);
          for (let YY = 0; YY < DY.length; YY += 3) {
            yY[0] = DY[YY], yY[1] = DY[YY + 1], yY[2] = DY[YY + 2];
            for (let YY = 0; YY < 3; YY++)
              if (gY = yY[YY], aY = yY[(YY + 1) % 3], void 0 === QY[gY] && void 0 === QY[aY] ? (QY[gY] = [], QY[aY] = []) : (void 0 === QY[gY] && (QY[gY] = []), void 0 === QY[aY] && (QY[aY] = [])), void 0 === QY[gY][aY] && void 0 === QY[aY][gY]) {
                QY[gY][aY] = [], vY.x = (FY[3 * aY] - FY[3 * gY]) / RY, vY.y = (FY[3 * aY + 1] - FY[3 * gY + 1]) / RY, vY.z = (FY[3 * aY + 2] - FY[3 * gY + 2]) / RY, IY && (uY.x = (IY[3 * aY] - IY[3 * gY]) / RY, uY.y = (IY[3 * aY + 1] - IY[3 * gY + 1]) / RY, uY.z = (IY[3 * aY + 2] - IY[3 * gY + 2]) / RY), AY && (sY.x = (AY[2 * aY] - AY[2 * gY]) / RY, sY.y = (AY[2 * aY + 1] - AY[2 * gY + 1]) / RY), QY[gY][aY].push(gY);
                for (let YY = 1; YY < RY; YY++) QY[gY][aY].push(FY.length / 3), FY[mY++] = FY[3 * gY] + YY * vY.x, FY[mY++] = FY[3 * gY + 1] + YY * vY.y, FY[mY++] = FY[3 * gY + 2] + YY * vY.z, IY && (IY[EY++] = IY[3 * gY] + YY * uY.x, IY[EY++] = IY[3 * gY + 1] + YY * uY.y, IY[EY++] = IY[3 * gY + 2] + YY * uY.z), AY && (AY[WY++] = AY[2 * gY] + YY * sY.x, AY[WY++] = AY[2 * gY + 1] + YY * sY.y);
                QY[gY][aY].push(aY), QY[aY][gY] = [], oY = QY[gY][aY].length;
                for (let YY = 0; YY < oY; YY++) QY[aY][gY][YY] = QY[gY][aY][oY - 1 - YY]
              } OY[0][0] = DY[YY], OY[1][0] = QY[DY[YY]][DY[YY + 1]][1], OY[1][1] = QY[DY[YY]][DY[YY + 2]][1];
            for (let rY = 2; rY < RY; rY++) {
              OY[rY][0] = QY[DY[YY]][DY[YY + 1]][rY], OY[rY][rY] = QY[DY[YY]][DY[YY + 2]][rY], vY.x = (FY[3 * OY[rY][rY]] - FY[3 * OY[rY][0]]) / rY, vY.y = (FY[3 * OY[rY][rY] + 1] - FY[3 * OY[rY][0] + 1]) / rY, vY.z = (FY[3 * OY[rY][rY] + 2] - FY[3 * OY[rY][0] + 2]) / rY, IY && (uY.x = (IY[3 * OY[rY][rY]] - IY[3 * OY[rY][0]]) / rY, uY.y = (IY[3 * OY[rY][rY] + 1] - IY[3 * OY[rY][0] + 1]) / rY, uY.z = (IY[3 * OY[rY][rY] + 2] - IY[3 * OY[rY][0] + 2]) / rY), AY && (sY.x = (AY[2 * OY[rY][rY]] - AY[2 * OY[rY][0]]) / rY, sY.y = (AY[2 * OY[rY][rY] + 1] - AY[2 * OY[rY][0] + 1]) / rY);
              for (let YY = 1; YY < rY; YY++) OY[rY][YY] = FY.length / 3, FY[mY++] = FY[3 * OY[rY][0]] + YY * vY.x, FY[mY++] = FY[3 * OY[rY][0] + 1] + YY * vY.y, FY[mY++] = FY[3 * OY[rY][0] + 2] + YY * vY.z, IY && (IY[EY++] = IY[3 * OY[rY][0]] + YY * uY.x, IY[EY++] = IY[3 * OY[rY][0] + 1] + YY * uY.y, IY[EY++] = IY[3 * OY[rY][0] + 2] + YY * uY.z), AY && (AY[WY++] = AY[2 * OY[rY][0]] + YY * sY.x, AY[WY++] = AY[2 * OY[rY][0] + 1] + YY * sY.y)
            }
            OY[RY] = QY[DY[YY + 1]][DY[YY + 2]], iY.push(OY[0][0], OY[1][0], OY[1][1]);
            for (let YY = 1; YY < RY; YY++) {
              let rY;
              for (rY = 0; rY < YY; rY++) iY.push(OY[YY][rY], OY[YY + 1][rY], OY[YY + 1][rY + 1]), iY.push(OY[YY][rY], OY[YY + 1][rY + 1], OY[YY][rY + 1]);
              iY.push(OY[YY][rY], OY[YY + 1][rY], OY[YY + 1][rY + 1])
            }
          }
          rY.indices = iY, rY.applyToMesh(this, this.isVertexBufferUpdatable(cY.l.PositionKind))
        } else JY.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const YY = KY.c.ExtractFromMesh(this),
          rY = YY.uvs,
          DY = YY.indices,
          FY = YY.positions,
          AY = YY.colors,
          IY = YY.matricesIndices,
          RY = YY.matricesWeights,
          OY = YY.matricesIndicesExtra,
          gY = YY.matricesWeightsExtra;
        if (void 0 === DY || void 0 === FY || null === DY || null === FY) JY.d.Warn("VertexData contains empty entries");
        else {
          const aY = [],
            vY = [],
            uY = [],
            sY = [],
            iY = [],
            yY = [],
            QY = [],
            oY = [];
          let WY, EY = 0;
          const mY = {};
          let VY, SY;
          for (let YY = 0; YY < DY.length; YY += 3) {
            SY = [DY[YY], DY[YY + 1], DY[YY + 2]], WY = [];
            for (let YY = 0; YY < 3; YY++) {
              WY[YY] = "";
              for (let rY = 0; rY < 3; rY++) Math.abs(FY[3 * SY[YY] + rY]) < 1e-8 && (FY[3 * SY[YY] + rY] = 0), WY[YY] += FY[3 * SY[YY] + rY] + "|"
            }
            if (WY[0] != WY[1] && WY[0] != WY[2] && WY[1] != WY[2])
              for (let YY = 0; YY < 3; YY++) {
                if (VY = mY[WY[YY]], void 0 === VY) {
                  mY[WY[YY]] = EY, VY = EY++;
                  for (let rY = 0; rY < 3; rY++) aY.push(FY[3 * SY[YY] + rY]);
                  if (null !== AY && void 0 !== AY)
                    for (let rY = 0; rY < 4; rY++) sY.push(AY[4 * SY[YY] + rY]);
                  if (null !== rY && void 0 !== rY)
                    for (let DY = 0; DY < 2; DY++) uY.push(rY[2 * SY[YY] + DY]);
                  if (null !== IY && void 0 !== IY)
                    for (let rY = 0; rY < 4; rY++) iY.push(IY[4 * SY[YY] + rY]);
                  if (null !== RY && void 0 !== RY)
                    for (let rY = 0; rY < 4; rY++) yY.push(RY[4 * SY[YY] + rY]);
                  if (null !== OY && void 0 !== OY)
                    for (let rY = 0; rY < 4; rY++) QY.push(OY[4 * SY[YY] + rY]);
                  if (null !== gY && void 0 !== gY)
                    for (let rY = 0; rY < 4; rY++) oY.push(gY[4 * SY[YY] + rY])
                }
                vY.push(VY)
              }
          }
          const lY = [];
          KY.c.ComputeNormals(aY, vY, lY), YY.positions = aY, YY.indices = vY, YY.normals = lY, null !== rY && void 0 !== rY && (YY.uvs = uY), null !== AY && void 0 !== AY && (YY.colors = sY), null !== IY && void 0 !== IY && (YY.matricesIndices = iY), null !== RY && void 0 !== RY && (YY.matricesWeights = yY), null !== OY && void 0 !== OY && (YY.matricesIndicesExtra = QY), null !== RY && void 0 !== RY && (YY.matricesWeightsExtra = oY), YY.applyToMesh(this, this.isVertexBufferUpdatable(cY.l.PositionKind))
        }
      }
      static _instancedMeshFactory(YY, rY) {
        throw (0, wY.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(YY, rY, DY) {
        throw (0, wY.i)("PhysicsImpostor")
      }
      createInstance(YY) {
        const rY = UY._instancedMeshFactory(YY, this);
        return rY.parent = this.parent, rY
      }
      synchronizeInstances() {
        for (let YY = 0; YY < this.instances.length; YY++) {
          this.instances[YY]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(YY) {
        const rY = this.XIY(),
          DY = this.getVerticesData(cY.l.PositionKind);
        if (!DY || !rY) return this;
        const FY = [];
        for (let IY = 0; IY < DY.length; IY += 3) FY.push(eY.r.FromArray(DY, IY));
        const AY = [];
        return EY.c.SyncAsyncForLoop(FY.length, 40, (YY => {
          const rY = FY.length - 1 - YY,
            DY = FY[rY];
          for (let IY = 0; IY < rY; ++IY) {
            const YY = FY[IY];
            if (DY.equals(YY)) {
              AY[rY] = IY;
              break
            }
          }
        }), (() => {
          for (let YY = 0; YY < rY.length; ++YY) rY[YY] = AY[rY[YY]] || rY[YY];
          const DY = this.qm.slice(0);
          this.setIndices(rY), this.qm = DY, YY && YY(this)
        })), this
      }
      serialize() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        YY.name = this.name, YY.id = this.id, YY.uniqueId = this.uniqueId, YY.type = this.getClassName(), SY.e && SY.e.HasTags(this) && (YY.tags = SY.e.GetTags(this)), YY.position = this.position.VDY(), this.rotationQuaternion ? YY.rotationQuaternion = this.rotationQuaternion.VDY() : this.rotation && (YY.rotation = this.rotation.VDY()), YY.pa = this.pa.VDY(), this._postMultiplyPivotMatrix ? YY.pivotMatrix = this.getPivotMatrix().VDY() : YY.localMatrix = this.getPivotMatrix().VDY(), YY.isEnabled = this.isEnabled(!1), YY.isVisible = this.isVisible, YY.infiniteDistance = this.infiniteDistance, YY.pickable = this.Yo, YY.receiveShadows = this.receiveShadows, YY.billboardMode = this.billboardMode, YY.visibility = this.visibility, YY.Gy = this.Gy, YY.checkCollisions = this.checkCollisions, YY.ellipsoid = this.ellipsoid.VDY(), YY.ellipsoidOffset = this.ellipsoidOffset.VDY(), YY.Py = this.Py, YY.isBlocker = this.isBlocker, YY.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (YY.aN = !0), this.parent && this.parent._serializeAsParent(YY), YY.isUnIndexed = this.isUnIndexed;
        const rY = this._geometry;
        if (rY && this.qm) {
          YY.geometryUniqueId = rY.uniqueId, YY.geometryId = rY.id, YY.qm = [];
          for (let rY = 0; rY < this.qm.length; rY++) {
            const DY = this.qm[rY];
            YY.qm.push({
              materialIndex: DY.materialIndex,
              verticesStart: DY.verticesStart,
              verticesCount: DY.verticesCount,
              indexStart: DY.indexStart,
              indexCount: DY.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (YY.materialUniqueId = this.material.uniqueId, YY.materialId = this.material.id) : (this.material = null, YY.materialUniqueId = this._scene.defaultMaterial.uniqueId, YY.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (YY.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (YY.skeletonId = this.skeleton.id, YY.skeletonUniqueId = this.skeleton.uniqueId, YY.numBoneInfluencers = this.numBoneInfluencers), this.hT()._getComponent(bY.c.NAME_PHYSICSENGINE)) {
          const rY = this.getPhysicsImpostor?.();
          rY && (YY.physicsMass = rY.getParam("TR"), YY.physicsFriction = rY.getParam("friction"), YY.physicsRestitution = rY.getParam("TR"), YY.physicsImpostor = rY.type)
        }
        this.metadata && (YY.metadata = this.metadata), 0 !== this.meshBlendingTag && (YY.meshBlendingTag = this.meshBlendingTag), YY.instances = [];
        for (let DY = 0; DY < this.instances.length; DY++) {
          const rY = this.instances[DY];
          if (rY.doNotSerialize) continue;
          const FY = {
            name: rY.name,
            id: rY.id,
            isEnabled: rY.isEnabled(!1),
            isVisible: rY.isVisible,
            Yo: rY.Yo,
            checkCollisions: rY.checkCollisions,
            position: rY.position.VDY(),
            pa: rY.pa.VDY()
          };
          if (rY.parent && rY.parent._serializeAsParent(FY), rY.rotationQuaternion ? FY.rotationQuaternion = rY.rotationQuaternion.VDY() : rY.rotation && (FY.rotation = rY.rotation.VDY()), this.hT()._getComponent(bY.c.NAME_PHYSICSENGINE)) {
            const YY = rY.getPhysicsImpostor?.();
            YY && (FY.physicsMass = YY.getParam("TR"), FY.physicsFriction = YY.getParam("friction"), FY.physicsRestitution = YY.getParam("TR"), FY.physicsImpostor = YY.type)
          }
          rY.metadata && (FY.metadata = rY.metadata), rY.actionManager && (FY.actions = rY.actionManager.serialize(rY.name)), YY.instances.push(FY), dY.b.AppendSerializedAnimations(rY, FY), FY.ws = rY.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (YY.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.MYY
          }, this._userThinInstanceBuffersStorage)) {
          const rY = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const YY in this._userThinInstanceBuffersStorage.data) rY.data[YY] = Array.from(this._userThinInstanceBuffersStorage.data[YY]), rY.sizes[YY] = this._userThinInstanceBuffersStorage.sizes[YY], rY.strides[YY] = this._userThinInstanceBuffersStorage.strides[YY];
          YY.thinInstances.userThinInstance = rY
        }
        return dY.b.AppendSerializedAnimations(this, YY), YY.ws = this.serializeAnimationRanges(), YY.layerMask = this.layerMask, YY.alphaIndex = this.alphaIndex, YY.hasVertexAlpha = this.hasVertexAlpha, YY.overlayAlpha = this.overlayAlpha, YY.overlayColor = this.overlayColor.VDY(), YY.renderOverlay = this.renderOverlay, YY.applyFog = this.applyFog, this.actionManager && (YY.actions = this.actionManager.serialize(this.name)), YY
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const YY = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (YY && YY.vertexCount) {
          if (YY.vertexCount !== this.getTotalVertices()) return JY.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (YY.isUsingTextureForTargets) return;
          for (let rY = 0; rY < YY.numInfluencers; rY++) {
            const DY = YY.getActiveTarget(rY),
              FY = DY.getPositions();
            if (!FY) return void JY.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(cY.l.PositionKind + rY, FY, !1, 3);
            const AY = DY.getNormals();
            AY && this.geometry.setVerticesData(cY.l.NormalKind + rY, AY, !1, 3);
            const IY = DY.getTangents();
            IY && this.geometry.setVerticesData(cY.l.TangentKind + rY, IY, !1, 3);
            const RY = DY.getUVs();
            RY && this.geometry.setVerticesData(cY.l.UVKind + "_" + rY, RY, !1, 2);
            const OY = DY.getUV2s();
            OY && this.geometry.setVerticesData(cY.l.UV2Kind + "_" + rY, OY, !1, 2);
            const gY = DY.getColors();
            gY && this.geometry.setVerticesData(cY.l.ColorKind + rY, gY, !1, 4)
          }
        } else {
          let YY = 0;
          for (; this.geometry.isVerticesDataPresent(cY.l.PositionKind + YY);) this.geometry.removeVerticesData(cY.l.PositionKind + YY), this.geometry.isVerticesDataPresent(cY.l.NormalKind + YY) && this.geometry.removeVerticesData(cY.l.NormalKind + YY), this.geometry.isVerticesDataPresent(cY.l.TangentKind + YY) && this.geometry.removeVerticesData(cY.l.TangentKind + YY), this.geometry.isVerticesDataPresent(cY.l.UVKind + "_" + YY) && this.geometry.removeVerticesData(cY.l.UVKind + "_" + YY), this.geometry.isVerticesDataPresent(cY.l.UV2Kind + "_" + YY) && this.geometry.removeVerticesData(cY.l.UV2Kind + "_" + YY), this.geometry.isVerticesDataPresent(cY.l.ColorKind + YY) && this.geometry.removeVerticesData(cY.l.ColorKind + YY), YY++
        }
      }
      static Parse(YY, rY, DY) {
        let FY, AY = !1;
        if (YY.type && "LinesMesh" === YY.type ? FY = UY._LinesMeshParser(YY, rY) : YY.type && "GroundMesh" === YY.type ? FY = UY._GroundMeshParser(YY, rY) : YY.type && "GoldbergMesh" === YY.type ? FY = UY._GoldbergMeshParser(YY, rY) : YY.type && "GreasedLineMesh" === YY.type ? FY = UY._GreasedLineMeshParser(YY, rY) : YY.type && "TrailMesh" === YY.type ? FY = UY._TrailMeshParser(YY, rY) : YY.type && "GaussianSplattingMesh" === YY.type ? (FY = YY._isCompound ? UY._GaussianSplattingCompoundMeshParser(YY, rY) : UY._GaussianSplattingMeshParser(YY, rY), AY = !0) : YY.type && "GaussianSplattingPartProxyMesh" === YY.type ? (FY = UY._GaussianSplattingPartProxyMeshParser(YY, rY), AY = !0) : FY = new UY(YY.name, rY), FY.id = YY.id, FY._waitingParsedUniqueId = YY.uniqueId, SY.e && SY.e.AddTagsTo(FY, YY.tags), FY.position = eY.r.FromArray(YY.position), void 0 !== YY.metadata && (FY.metadata = YY.metadata), void 0 !== YY.meshBlendingTag && (FY.meshBlendingTag = YY.meshBlendingTag), YY.rotationQuaternion ? FY.rotationQuaternion = eY.g.FromArray(YY.rotationQuaternion) : YY.rotation && (FY.rotation = eY.r.FromArray(YY.rotation)), FY.pa = eY.r.FromArray(YY.pa), YY.localMatrix ? FY.setPreTransformMatrix(eY.e.FromArray(YY.localMatrix)) : YY.pivotMatrix && FY.setPivotMatrix(eY.e.FromArray(YY.pivotMatrix)), FY.mV(YY.isEnabled), FY.isVisible = YY.isVisible, FY.infiniteDistance = YY.infiniteDistance, FY.Gy = !!YY.Gy, FY.showBoundingBox = YY.showBoundingBox, FY.showSubMeshesBoundingBox = YY.showSubMeshesBoundingBox, void 0 !== YY.applyFog && (FY.applyFog = YY.applyFog), void 0 !== YY.pickable && (FY.Yo = YY.pickable), void 0 !== YY.alphaIndex && (FY.alphaIndex = YY.alphaIndex), FY.receiveShadows = YY.receiveShadows, void 0 !== YY.billboardMode && (FY.billboardMode = YY.billboardMode), void 0 !== YY.visibility && (FY.visibility = YY.visibility), FY.checkCollisions = YY.checkCollisions, FY.Py = !!YY.Py, YY.ellipsoid && (FY.ellipsoid = eY.r.FromArray(YY.ellipsoid)), YY.ellipsoidOffset && (FY.ellipsoidOffset = eY.r.FromArray(YY.ellipsoidOffset)), null != YY.overrideMaterialSideOrientation && (FY.sideOrientation = YY.overrideMaterialSideOrientation), void 0 !== YY.sideOrientation && (FY.sideOrientation = YY.sideOrientation), void 0 !== YY.isBlocker && (FY.isBlocker = YY.isBlocker), FY._shouldGenerateFlatShading = YY.useFlatShading, YY.aN && (FY._waitingData.aN = YY.aN), void 0 !== YY.parentId && (FY._waitingParentId = YY.parentId), void 0 !== YY.parentInstanceIndex && (FY._waitingParentInstanceIndex = YY.parentInstanceIndex), void 0 !== YY.actions && (FY._waitingData.actions = YY.actions), void 0 !== YY.overlayAlpha && (FY.overlayAlpha = YY.overlayAlpha), void 0 !== YY.overlayColor && (FY.overlayColor = NY.c.FromArray(YY.overlayColor)), void 0 !== YY.renderOverlay && (FY.renderOverlay = YY.renderOverlay), FY.isUnIndexed = !!YY.isUnIndexed, FY.hasVertexAlpha = YY.hasVertexAlpha, YY.delayLoadingFile ? (FY.delayLoadState = 4, FY.delayLoadingFile = DY + YY.delayLoadingFile, FY.buildBoundingInfo(eY.r.FromArray(YY.boundingBoxMinimum), eY.r.FromArray(YY.boundingBoxMaximum)), YY._binaryInfo && (FY._binaryInfo = YY._binaryInfo), FY._delayInfo = [], YY.hasUVs && FY._delayInfo.push(cY.l.UVKind), YY.hasUVs2 && FY._delayInfo.push(cY.l.UV2Kind), YY.hasUVs3 && FY._delayInfo.push(cY.l.UV3Kind), YY.hasUVs4 && FY._delayInfo.push(cY.l.UV4Kind), YY.hasUVs5 && FY._delayInfo.push(cY.l.UV5Kind), YY.hasUVs6 && FY._delayInfo.push(cY.l.UV6Kind), YY.hasColors && FY._delayInfo.push(cY.l.ColorKind), YY.hasMatricesIndices && FY._delayInfo.push(cY.l.MatricesIndicesKind), YY.hasMatricesWeights && FY._delayInfo.push(cY.l.MatricesWeightsKind), FY._delayLoadingFunction = HY.c._ImportGeometry, hY.d.ForceFullSceneLoadingForIncremental && FY._checkDelayState()) : AY || HY.c._ImportGeometry(YY, FY), YY.materialUniqueId ? FY._waitingMaterialId = YY.materialUniqueId : YY.materialId && (FY._waitingMaterialId = YY.materialId), YY.morphTargetManagerId > -1 && (FY._waitingMorphTargetManagerId = YY.morphTargetManagerId), void 0 !== YY.skeletonId && null !== YY.skeletonId && (FY.skeleton = rY.getLastSkeletonById(YY.skeletonId), FY._waitingSkeletonId = YY.skeletonId, YY.numBoneInfluencers && (FY.numBoneInfluencers = YY.numBoneInfluencers)), void 0 !== YY.skeletonUniqueId && null !== YY.skeletonUniqueId && (FY._waitingSkeletonUniqueId = YY.skeletonUniqueId), YY.animations) {
          for (let rY = 0; rY < YY.animations.length; rY++) {
            const DY = YY.animations[rY],
              AY = (0, MY.e)("BABYLON.Animation");
            AY && FY.animations.push(AY.Parse(DY))
          }
          BY.b.ParseAnimationRanges(FY, YY, rY)
        }
        if (YY.autoAnimate && rY.beginAnimation(FY, YY.autoAnimateFrom, YY.autoAnimateTo, YY.autoAnimateLoop, YY.autoAnimateSpeed || 1), YY.layerMask && !isNaN(YY.layerMask) ? FY.layerMask = Math.abs(parseInt(YY.layerMask)) : FY.layerMask = 268435455, YY.physicsImpostor && (FY.physicsImpostor = UY._PhysicsImpostorParser(rY, FY, YY)), YY.lodMeshIds && (FY._waitingData.lods = {
            ids: YY.lodMeshIds,
            distances: YY.lodDistances ? YY.lodDistances : null,
            coverages: YY.lodCoverages ? YY.lodCoverages : null
          }), YY.instances)
          for (let IY = 0; IY < YY.instances.length; IY++) {
            const DY = YY.instances[IY],
              AY = FY.createInstance(DY.name);
            if (DY.id && (AY.id = DY.id), SY.e && (DY.tags ? SY.e.AddTagsTo(AY, DY.tags) : SY.e.AddTagsTo(AY, YY.tags)), AY.position = eY.r.FromArray(DY.position), void 0 !== DY.metadata && (AY.metadata = DY.metadata), void 0 !== DY.parentId && (AY._waitingParentId = DY.parentId), void 0 !== DY.parentInstanceIndex && (AY._waitingParentInstanceIndex = DY.parentInstanceIndex), void 0 !== DY.isEnabled && null !== DY.isEnabled && AY.mV(DY.isEnabled), void 0 !== DY.isVisible && null !== DY.isVisible && (AY.isVisible = DY.isVisible), void 0 !== DY.Yo && null !== DY.Yo && (AY.Yo = DY.Yo), DY.rotationQuaternion ? AY.rotationQuaternion = eY.g.FromArray(DY.rotationQuaternion) : DY.rotation && (AY.rotation = eY.r.FromArray(DY.rotation)), AY.pa = eY.r.FromArray(DY.pa), void 0 != DY.checkCollisions && null != DY.checkCollisions && (AY.checkCollisions = DY.checkCollisions), void 0 != DY.pickable && null != DY.pickable && (AY.Yo = DY.pickable), void 0 != DY.showBoundingBox && null != DY.showBoundingBox && (AY.showBoundingBox = DY.showBoundingBox), void 0 != DY.showSubMeshesBoundingBox && null != DY.showSubMeshesBoundingBox && (AY.showSubMeshesBoundingBox = DY.showSubMeshesBoundingBox), void 0 != DY.alphaIndex && null != DY.showSubMeshesBoundingBox && (AY.alphaIndex = DY.alphaIndex), DY.physicsImpostor && (AY.physicsImpostor = UY._PhysicsImpostorParser(rY, AY, DY)), void 0 !== DY.actions && (AY._waitingData.actions = DY.actions), DY.animations) {
              for (let YY = 0; YY < DY.animations.length; YY++) {
                const rY = DY.animations[YY],
                  FY = (0, MY.e)("BABYLON.Animation");
                FY && AY.animations.push(FY.Parse(rY))
              }
              BY.b.ParseAnimationRanges(AY, DY, rY), DY.autoAnimate && rY.beginAnimation(AY, DY.autoAnimateFrom, DY.autoAnimateTo, DY.autoAnimateLoop, DY.autoAnimateSpeed || 1)
            }
          }
        if (YY.thinInstances) {
          const rY = YY.thinInstances;
          if (FY.MYY = !!rY.enablePicking, rY.matrixData ? (FY.j_("matrix", new Float32Array(rY.matrixData), 16, !1), FY._thinInstanceDataStorage.matrixBufferSize = rY.matrixBufferSize, FY._thinInstanceDataStorage.instancesCount = rY.instancesCount) : FY._thinInstanceDataStorage.matrixBufferSize = rY.matrixBufferSize, YY.thinInstances.userThinInstance) {
            const rY = YY.thinInstances.userThinInstance;
            for (const YY in rY.data) FY.j_(YY, new Float32Array(rY.data[YY]), rY.strides[YY], !1), FY._userThinInstanceBuffersStorage.sizes[YY] = rY.sizes[YY]
          }
        }
        return FY
      }
      setPositionsForCPUSkinning() {
        const YY = this._internalMeshDataInfo;
        if (!YY._sourcePositions) {
          const rY = this.getVerticesData(cY.l.PositionKind);
          if (!rY) return YY._sourcePositions;
          YY._sourcePositions = new Float32Array(rY), this.isVertexBufferUpdatable(cY.l.PositionKind) || this.setVerticesData(cY.l.PositionKind, rY, !0)
        }
        return YY._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const YY = this._internalMeshDataInfo;
        if (!YY._sourceNormals) {
          const rY = this.getVerticesData(cY.l.NormalKind);
          if (!rY) return YY._sourceNormals;
          YY._sourceNormals = new Float32Array(rY), this.isVertexBufferUpdatable(cY.l.NormalKind) || this.setVerticesData(cY.l.NormalKind, rY, !0)
        }
        return YY._sourceNormals
      }
      applySkeleton(YY) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.hT().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.hT().getFrameId(), !this.isVerticesDataPresent(cY.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(cY.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(cY.l.MatricesWeightsKind)) return this;
        const rY = this.isVerticesDataPresent(cY.l.NormalKind),
          DY = this._internalMeshDataInfo;
        if (!DY._sourcePositions) {
          const YY = this.qm.slice();
          this.setPositionsForCPUSkinning(), this.qm = YY
        }
        rY && !DY._sourceNormals && this.setNormalsForCPUSkinning();
        let FY = this.getVerticesData(cY.l.PositionKind);
        if (!FY) return this;
        FY instanceof Float32Array || (FY = new Float32Array(FY));
        let AY = this.getVerticesData(cY.l.NormalKind);
        if (rY) {
          if (!AY) return this;
          AY instanceof Float32Array || (AY = new Float32Array(AY))
        }
        const IY = this.getVerticesData(cY.l.MatricesIndicesKind),
          RY = this.getVerticesData(cY.l.MatricesWeightsKind);
        if (!RY || !IY) return this;
        const OY = this.numBoneInfluencers > 4,
          gY = OY ? this.getVerticesData(cY.l.MatricesIndicesExtraKind) : null,
          aY = OY ? this.getVerticesData(cY.l.MatricesWeightsExtraKind) : null,
          vY = YY.getTransformMatrices(this),
          uY = eY.r.Zero(),
          sY = new eY.e,
          iY = new eY.e;
        let yY, QY = 0;
        for (let oY = 0; oY < FY.length; oY += 3, QY += 4) {
          let YY;
          for (yY = 0; yY < 4; yY++) YY = RY[QY + yY], YY > 0 && (eY.e.FromFloat32ArrayToRefScaled(vY, Math.floor(16 * IY[QY + yY]), YY, iY), sY.addToSelf(iY));
          if (OY)
            for (yY = 0; yY < 4; yY++) YY = aY[QY + yY], YY > 0 && (eY.e.FromFloat32ArrayToRefScaled(vY, Math.floor(16 * gY[QY + yY]), YY, iY), sY.addToSelf(iY));
          eY.r.TransformCoordinatesFromFloatsToRef(DY._sourcePositions[oY], DY._sourcePositions[oY + 1], DY._sourcePositions[oY + 2], sY, uY), uY.toArray(FY, oY), rY && (eY.r.TransformNormalFromFloatsToRef(DY._sourceNormals[oY], DY._sourceNormals[oY + 1], DY._sourceNormals[oY + 2], sY, uY), uY.toArray(AY, oY)), sY.reset()
        }
        return this.updateVerticesData(cY.l.PositionKind, FY), rY && this.updateVerticesData(cY.l.NormalKind, AY), this
      }
      static MinMax(YY) {
        let rY = null,
          DY = null;
        for (const FY of YY) {
          const YY = FY.oB().boundingBox;
          rY && DY ? (rY.minimizeInPlace(YY.minimumWorld), DY.maximizeInPlace(YY.maximumWorld)) : (rY = YY.minimumWorld.clone(), DY = YY.maximumWorld.clone())
        }
        return rY && DY ? {
          min: rY,
          max: DY
        } : {
          min: eY.r.Zero(),
          max: eY.r.Zero()
        }
      }
      static Center(YY) {
        const rY = YY instanceof Array ? UY.MinMax(YY) : YY;
        return eY.r.Center(rY.min, rY.max)
      }
      static MergeMeshes(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        return (0, lY.j)(UY._MergeMeshesCoroutine(YY, rY, DY, FY, AY, IY, !1))
      }
      static async MergeMeshesAsync(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, lY.h)(UY._MergeMeshesCoroutine(YY, rY, DY, FY, AY, IY, !0), (0, lY.d)())
      }
      static * _MergeMeshesCoroutine(YY) {
        let rY, DY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          FY = arguments.length > 2 ? arguments[2] : void 0,
          AY = arguments.length > 3 ? arguments[3] : void 0,
          IY = arguments.length > 4 ? arguments[4] : void 0,
          RY = arguments.length > 5 ? arguments[5] : void 0,
          OY = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (YY = YY.filter(Boolean)).length) return null;
        if (!FY) {
          let DY = 0;
          for (rY = 0; rY < YY.length; rY++)
            if (DY += YY[rY].getTotalVertices(), DY >= 65536) return JY.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const gY = YY[0];
        RY && (IY = !1, YY.sort(((YY, rY) => (YY.material?.uniqueId ?? -1) - (rY.material?.uniqueId ?? -1))));
        const aY = new Array,
          vY = new Array,
          uY = new Array,
          sY = YY[0].sideOrientation;
        for (rY = 0; rY < YY.length; rY++) {
          const DY = YY[rY];
          if (DY.XT) return JY.d.Warn("Cannot merge instance meshes."), null;
          if (sY !== DY.sideOrientation) return JY.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (IY || RY) {
            const YY = uY.reduce(((YY, rY) => Math.max(YY, rY.start + rY.count)), 0);
            if (RY)
              if (DY.material) {
                const rY = DY.material;
                if (rY instanceof jY.b) {
                  for (let YY = 0; YY < rY.J_.length; YY++) aY.indexOf(rY.J_[YY]) < 0 && aY.push(rY.J_[YY]);
                  for (let FY = 0; FY < DY.qm.length; FY++) vY.push(aY.indexOf(rY.J_[DY.qm[FY].materialIndex])), uY.push({
                    start: YY + DY.qm[FY].indexStart,
                    count: DY.qm[FY].indexCount
                  })
                } else {
                  aY.indexOf(rY) < 0 && aY.push(rY);
                  for (let FY = 0; FY < DY.qm.length; FY++) vY.push(aY.indexOf(rY)), uY.push({
                    start: YY + DY.qm[FY].indexStart,
                    count: DY.qm[FY].indexCount
                  })
                }
              } else
                for (let rY = 0; rY < DY.qm.length; rY++) vY.push(0), uY.push({
                  start: YY + DY.qm[rY].indexStart,
                  count: DY.qm[rY].indexCount
                });
            else uY.push({
              start: YY,
              count: DY.getTotalIndices()
            })
          }
        }
        if (RY && uY.length > 1) {
          let YY = 0;
          for (let rY = 1; rY < uY.length; rY++) {
            const DY = uY[YY],
              FY = uY[rY];
            vY[rY] === vY[YY] && DY.start + DY.count === FY.start ? DY.count += FY.count : (YY++, uY[YY] = FY, vY[YY] = vY[rY])
          }
          uY.length = YY + 1, vY.length = YY + 1
        }
        const iY = YY => {
            const rY = YY.computeWorldMatrix(!0);
            return {
              vertexData: KY.c.ExtractFromMesh(YY, !1, !1),
              transform: rY
            }
          },
          {
            vertexData: yY,
            transform: QY
          } = iY(YY[0]);
        OY && (yield);
        const oY = new Array(YY.length - 1);
        for (let lY = 1; lY < YY.length; lY++) oY[lY - 1] = iY(YY[lY]), OY && (yield);
        const WY = yY._mergeCoroutine(QY, oY, FY, OY, !DY);
        let EY = WY.next();
        for (; !EY.done;) OY && (yield), EY = WY.next();
        const mY = EY.value;
        AY || (AY = new UY(gY.name + "_merged", gY.hT()));
        const VY = mY._applyToCoroutine(AY, void 0, OY);
        let SY = VY.next();
        for (; !SY.done;) OY && (yield), SY = VY.next();
        if (AY.checkCollisions = gY.checkCollisions, AY.sideOrientation = gY.sideOrientation, DY)
          for (rY = 0; rY < YY.length; rY++) YY[rY].dispose();
        if (IY || RY) {
          for (AY.releaseSubMeshes(), rY = 0; rY < uY.length;) ZY.d.CreateFromIndices(0, uY[rY].start, uY[rY].count, AY, void 0, !1), rY++;
          for (const YY of AY.qm) YY.refreshBoundingInfo();
          AY.computeWorldMatrix(!0)
        }
        if (RY) {
          const YY = new jY.b(gY.name + "_merged", gY.hT());
          YY.J_ = aY;
          for (let rY = 0; rY < AY.qm.length; rY++) AY.qm[rY].materialIndex = vY[rY];
          AY.material = YY
        } else AY.material = gY.material;
        return AY
      }
      Q_(YY) {
        YY._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(YY)
      }
      E_(YY) {
        const rY = YY._indexInSourceMeshInstanceArray;
        if (-1 != rY) {
          if (rY !== this.instances.length - 1) {
            const YY = this.instances[this.instances.length - 1];
            this.instances[rY] = YY, YY._indexInSourceMeshInstanceArray = rY
          }
          YY._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === CY.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(YY) {
        const rY = this.hT();
        return rY.forcePointsCloud ? CY.c.PointFillMode : rY.forceWireframe ? CY.c.WireFrameFillMode : this.overrideRenderingFillMode ?? YY
      }
      setMaterialByID(YY) {
        return this.setMaterialById(YY)
      }
      static CreateRibbon(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(YY, rY, DY, FY, AY, IY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(YY, rY, DY, FY, AY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(YY, rY, DY, FY, AY, IY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(YY, rY, DY, FY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(YY, rY, DY, FY, AY, IY, RY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(YY, rY, DY, FY, AY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(YY, rY, DY, FY, AY, IY, RY, OY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(YY, rY, DY, FY, AY, IY, RY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(YY, rY, DY, FY, AY, IY, RY, OY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(YY, rY, DY, FY, AY, IY, RY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(YY, rY, DY, FY, AY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(YY, rY, DY, FY, AY, IY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(YY, rY, DY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(YY, rY, DY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(YY, rY, DY, FY, AY, IY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(YY, rY, DY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(YY) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    UY.FRONTSIDE = KY.c.FRONTSIDE, UY.BACKSIDE = KY.c.BACKSIDE, UY.DOUBLESIDE = KY.c.DOUBLESIDE, UY.DEFAULTSIDE = KY.c.DEFAULTSIDE, UY.NO_CAP = 0, UY.CAP_START = 1, UY.CAP_END = 2, UY.CAP_ALL = 3, UY.NO_FLIP = 0, UY.FLIP_TILE = 1, UY.ROTATE_TILE = 2, UY.FLIP_ROW = 3, UY.ROTATE_ROW = 4, UY.FLIP_N_ROTATE_TILE = 5, UY.FLIP_N_ROTATE_ROW = 6, UY.CENTER = 0, UY.LEFT = 1, UY.RIGHT = 2, UY.TOP = 3, UY.BOTTOM = 4, UY.INSTANCEDMESH_SORT_TRANSPARENT = !1, UY._GroundMeshParser = (YY, rY) => {
      throw (0, wY.i)("GroundMesh")
    }, UY._GoldbergMeshParser = (YY, rY) => {
      throw (0, wY.i)("GoldbergMesh")
    }, UY._LinesMeshParser = (YY, rY) => {
      throw (0, wY.i)("LinesMesh")
    }, UY._GreasedLineMeshParser = (YY, rY) => {
      throw (0, wY.i)("GreasedLineMesh")
    }, UY._GreasedLineRibbonMeshParser = (YY, rY) => {
      throw (0, wY.i)("GreasedLineRibbonMesh")
    }, UY._TrailMeshParser = (YY, rY) => {
      throw (0, wY.i)("TrailMesh")
    }, UY._GaussianSplattingMeshParser = (YY, rY) => {
      throw (0, wY.i)("GaussianSplattingMesh")
    }, UY._GaussianSplattingPartProxyMeshParser = (YY, rY) => {
      throw (0, wY.i)("GaussianSplattingPartProxyMesh")
    }, UY._GaussianSplattingCompoundMeshParser = (YY, rY) => {
      throw (0, wY.i)("GaussianSplattingCompoundMesh")
    };
    let LY = !1;

    function tY() {
      LY || (LY = !0, (0, MY.i)("BABYLON.Mesh", UY))
    }(FY = UY.prototype).kN ?? (FY.kN = (0, wY.g)("Mesh", "kN")), (AY = UY.prototype).simplify ?? (AY.simplify = (0, wY.g)("Mesh", "simplify")), (IY = UY.prototype).thinInstanceAdd ?? (IY.thinInstanceAdd = (0, wY.g)("Mesh", "thinInstanceAdd")), (RY = UY.prototype).thinInstanceAddSelf ?? (RY.thinInstanceAddSelf = (0, wY.g)("Mesh", "thinInstanceAddSelf")), (OY = UY.prototype).thinInstanceRegisterAttribute ?? (OY.thinInstanceRegisterAttribute = (0, wY.g)("Mesh", "thinInstanceRegisterAttribute")), (gY = UY.prototype).thinInstanceSetMatrixAt ?? (gY.thinInstanceSetMatrixAt = (0, wY.g)("Mesh", "thinInstanceSetMatrixAt")), (aY = UY.prototype).thinInstanceSetAttributeAt ?? (aY.thinInstanceSetAttributeAt = (0, wY.g)("Mesh", "thinInstanceSetAttributeAt")), (vY = UY.prototype).j_ ?? (vY.j_ = (0, wY.g)("Mesh", "j_")), (uY = UY.prototype).thinInstanceGetWorldMatrices ?? (uY.thinInstanceGetWorldMatrices = (0, wY.g)("Mesh", "thinInstanceGetWorldMatrices")), (sY = UY.prototype).T_ ?? (sY.T_ = (0, wY.g)("Mesh", "T_")), (iY = UY.prototype).thinInstancePartialBufferUpdate ?? (iY.thinInstancePartialBufferUpdate = (0, wY.g)("Mesh", "thinInstancePartialBufferUpdate")), (yY = UY.prototype).thinInstanceRefreshBoundingInfo ?? (yY.thinInstanceRefreshBoundingInfo = (0, wY.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (QY = UY.prototype).getEmittedParticleSystems ?? (QY.getEmittedParticleSystems = (0, wY.g)("Mesh", "getEmittedParticleSystems")), (oY = UY.prototype).getHierarchyEmittedParticleSystems ?? (oY.getHierarchyEmittedParticleSystems = (0, wY.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(UY.prototype, "edgesShareWithInstances") || Object.defineProperty(UY.prototype, "edgesShareWithInstances", (0, wY.c)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(UY.prototype, "MYY") || Object.defineProperty(UY.prototype, "MYY", (0, wY.c)("Mesh", "MYY")), Object.getOwnPropertyDescriptor(UY.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(UY.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, wY.c)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(UY.prototype, "R_") || Object.defineProperty(UY.prototype, "R_", (0, wY.c)("Mesh", "R_"))
  },
  39530: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY
    });
    var FY = DY(39127),
      AY = DY(36524),
      IY = DY(39270),
      RY = DY(39029),
      OY = DY(36588),
      gY = DY(38040),
      aY = DY(39131),
      vY = DY(39523),
      uY = DY(39171),
      sY = DY(39416);
    class iY {}
    let yY = (() => {
      var YY;
      let rY, DY, yY, QY, oY = [];
      return YY = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, vY.g)(this._applyToCoroutine.bind(this)), this.uniqueId = YY._UniqueIdGenerator, YY._UniqueIdGenerator++
        }
        set(YY, rY) {
          switch (YY.length || gY.d.Warn(`Setting vertex data kind '${rY}' with an empty array`), rY) {
            case IY.l.PositionKind:
              this.positions = YY;
              break;
            case IY.l.NormalKind:
              this.normals = YY;
              break;
            case IY.l.TangentKind:
              this.tangents = YY;
              break;
            case IY.l.UVKind:
              this.uvs = YY;
              break;
            case IY.l.UV2Kind:
              this.uvs2 = YY;
              break;
            case IY.l.UV3Kind:
              this.uvs3 = YY;
              break;
            case IY.l.UV4Kind:
              this.uvs4 = YY;
              break;
            case IY.l.UV5Kind:
              this.uvs5 = YY;
              break;
            case IY.l.UV6Kind:
              this.uvs6 = YY;
              break;
            case IY.l.ColorKind:
              this.colors = YY;
              break;
            case IY.l.MatricesIndicesKind:
              this.matricesIndices = YY;
              break;
            case IY.l.MatricesWeightsKind:
              this.matricesWeights = YY;
              break;
            case IY.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = YY;
              break;
            case IY.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = YY
          }
        }
        applyToMesh(YY, rY) {
          return this._applyTo(YY, rY, !1), this
        }
        applyToGeometry(YY, rY) {
          return this._applyTo(YY, rY, !1), this
        }
        updateMesh(YY) {
          return this._update(YY), this
        }
        updateGeometry(YY) {
          return this._update(YY), this
        }* _applyToCoroutine(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            DY = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (YY.setVerticesData(IY.l.PositionKind, this.positions, rY), DY && (yield)), this.normals && (YY.setVerticesData(IY.l.NormalKind, this.normals, rY), DY && (yield)), this.tangents && (YY.setVerticesData(IY.l.TangentKind, this.tangents, rY), DY && (yield)), this.uvs && (YY.setVerticesData(IY.l.UVKind, this.uvs, rY), DY && (yield)), this.uvs2 && (YY.setVerticesData(IY.l.UV2Kind, this.uvs2, rY), DY && (yield)), this.uvs3 && (YY.setVerticesData(IY.l.UV3Kind, this.uvs3, rY), DY && (yield)), this.uvs4 && (YY.setVerticesData(IY.l.UV4Kind, this.uvs4, rY), DY && (yield)), this.uvs5 && (YY.setVerticesData(IY.l.UV5Kind, this.uvs5, rY), DY && (yield)), this.uvs6 && (YY.setVerticesData(IY.l.UV6Kind, this.uvs6, rY), DY && (yield)), this.colors) {
            const FY = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            YY.setVerticesData(IY.l.ColorKind, this.colors, rY, FY), this.hasVertexAlpha && void 0 !== YY.hasVertexAlpha && (YY.hasVertexAlpha = !0), DY && (yield)
          }
          if (this.matricesIndices && (YY.setVerticesData(IY.l.MatricesIndicesKind, this.matricesIndices, rY), DY && (yield)), this.matricesWeights && (YY.setVerticesData(IY.l.MatricesWeightsKind, this.matricesWeights, rY), DY && (yield)), this.matricesIndicesExtra && (YY.setVerticesData(IY.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, rY), DY && (yield)), this.matricesWeightsExtra && (YY.setVerticesData(IY.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, rY), DY && (yield)), this.indices ? (YY.setIndices(this.indices, null, rY), DY && (yield)) : YY.setIndices([], null), YY.qm && this.materialInfos && this.materialInfos.length > 1) {
            const rY = YY;
            rY.qm = [];
            for (const YY of this.materialInfos) new sY.d(YY.materialIndex, YY.verticesStart, YY.verticesCount, YY.indexStart, YY.indexCount, rY)
          }
          return this
        }
        _update(YY, rY, DY) {
          return this.positions && YY.updateVerticesData(IY.l.PositionKind, this.positions, rY, DY), this.normals && YY.updateVerticesData(IY.l.NormalKind, this.normals, rY, DY), this.tangents && YY.updateVerticesData(IY.l.TangentKind, this.tangents, rY, DY), this.uvs && YY.updateVerticesData(IY.l.UVKind, this.uvs, rY, DY), this.uvs2 && YY.updateVerticesData(IY.l.UV2Kind, this.uvs2, rY, DY), this.uvs3 && YY.updateVerticesData(IY.l.UV3Kind, this.uvs3, rY, DY), this.uvs4 && YY.updateVerticesData(IY.l.UV4Kind, this.uvs4, rY, DY), this.uvs5 && YY.updateVerticesData(IY.l.UV5Kind, this.uvs5, rY, DY), this.uvs6 && YY.updateVerticesData(IY.l.UV6Kind, this.uvs6, rY, DY), this.colors && YY.updateVerticesData(IY.l.ColorKind, this.colors, rY, DY), this.matricesIndices && YY.updateVerticesData(IY.l.MatricesIndicesKind, this.matricesIndices, rY, DY), this.matricesWeights && YY.updateVerticesData(IY.l.MatricesWeightsKind, this.matricesWeights, rY, DY), this.matricesIndicesExtra && YY.updateVerticesData(IY.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, rY, DY), this.matricesWeightsExtra && YY.updateVerticesData(IY.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, rY, DY), this.indices && YY.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length;
          const IY = AY.n.xy[0],
            RY = AY.n.xy[1];
          for (let OY = DY; OY < DY + FY; OY += 3) AY.r.FromArrayToRef(YY, OY, IY), AY.r.TransformCoordinatesToRef(IY, rY, RY), YY[OY] = RY.x, YY[OY + 1] = RY.y, YY[OY + 2] = RY.z
        }
        static _TransformVector3Normals(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length;
          const IY = AY.n.xy[0],
            RY = AY.n.xy[1];
          for (let OY = DY; OY < DY + FY; OY += 3) AY.r.FromArrayToRef(YY, OY, IY), AY.r.TransformNormalToRef(IY, rY, RY), YY[OY] = RY.x, YY[OY + 1] = RY.y, YY[OY + 2] = RY.z
        }
        static _TransformVector4Normals(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length;
          const IY = AY.n.Vector4[0],
            RY = AY.n.Vector4[1];
          for (let OY = DY; OY < DY + FY; OY += 4) AY.v.FromArrayToRef(YY, OY, IY), AY.v.TransformNormalToRef(IY, rY, RY), YY[OY] = RY.x, YY[OY + 1] = RY.y, YY[OY + 2] = RY.z, YY[OY + 3] = RY.w
        }
        static _FlipFaces(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY.length;
          for (let FY = rY; FY < rY + DY; FY += 3) {
            const rY = YY[FY + 1];
            YY[FY + 1] = YY[FY + 2], YY[FY + 2] = rY
          }
        }
        transform(rY) {
          const DY = rY.determinant() < 0;
          return this.positions && YY._TransformVector3Coordinates(this.positions, rY), this.normals && YY._TransformVector3Normals(this.normals, rY), this.tangents && YY._TransformVector4Normals(this.tangents, rY), DY && this.indices && YY._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const rY = [];
          for (const DY of this.materialInfos) {
            const FY = new YY;
            if (this.positions && (FY.positions = this.positions.slice(3 * DY.verticesStart, 3 * (DY.verticesCount + DY.verticesStart))), this.normals && (FY.normals = this.normals.slice(3 * DY.verticesStart, 3 * (DY.verticesCount + DY.verticesStart))), this.tangents && (FY.tangents = this.tangents.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.colors && (FY.colors = this.colors.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.uvs && (FY.uvs = this.uvs.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.uvs2 && (FY.uvs2 = this.uvs2.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.uvs3 && (FY.uvs3 = this.uvs3.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.uvs4 && (FY.uvs4 = this.uvs4.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.uvs5 && (FY.uvs5 = this.uvs5.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.uvs6 && (FY.uvs6 = this.uvs6.slice(2 * DY.verticesStart, 2 * (DY.verticesCount + DY.verticesStart))), this.matricesIndices && (FY.matricesIndices = this.matricesIndices.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.matricesIndicesExtra && (FY.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.matricesWeights && (FY.matricesWeights = this.matricesWeights.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.matricesWeightsExtra && (FY.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * DY.verticesStart, 4 * (DY.verticesCount + DY.verticesStart))), this.indices) {
              FY.indices = [];
              for (let YY = DY.indexStart; YY < DY.indexStart + DY.indexCount; YY++) FY.indices.push(this.indices[YY] - DY.verticesStart)
            }
            const AY = new iY;
            AY.indexStart = 0, AY.indexCount = FY.indices ? FY.indices.length : 0, AY.materialIndex = DY.materialIndex, AY.verticesStart = 0, AY.verticesCount = (FY.positions ? FY.positions.length : 0) / 3, FY.materialInfos = [AY], rY.push(FY)
          }
          return rY
        }
        merge(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const IY = Array.isArray(YY) ? YY.map((YY => ({
            vertexData: YY
          }))) : [{
            vertexData: YY
          }];
          return (0, vY.j)(this._mergeCoroutine(void 0, IY, rY, !1, DY, FY, AY))
        }* _mergeCoroutine(rY, DY) {
          let FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            AY = arguments.length > 3 ? arguments[3] : void 0,
            RY = arguments.length > 4 ? arguments[4] : void 0,
            OY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            gY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let aY = DY.map((YY => YY.vertexData)),
            vY = this;
          if (gY)
            for (const YY of aY) YY && (YY._validate(), !this.normals && YY.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && YY.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && YY.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && YY.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && YY.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && YY.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && YY.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && YY.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && YY.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && YY.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && YY.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && YY.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && YY.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const YY of aY)
            if (YY)
              if (gY) this.normals && !YY.normals && (YY.normals = new Float32Array(YY.positions.length)), this.tangents && !YY.tangents && (YY.tangents = new Float32Array(YY.positions.length / 3 * 4)), this.uvs && !YY.uvs && (YY.uvs = new Float32Array(YY.positions.length / 3 * 2)), this.uvs2 && !YY.uvs2 && (YY.uvs2 = new Float32Array(YY.positions.length / 3 * 2)), this.uvs3 && !YY.uvs3 && (YY.uvs3 = new Float32Array(YY.positions.length / 3 * 2)), this.uvs4 && !YY.uvs4 && (YY.uvs4 = new Float32Array(YY.positions.length / 3 * 2)), this.uvs5 && !YY.uvs5 && (YY.uvs5 = new Float32Array(YY.positions.length / 3 * 2)), this.uvs6 && !YY.uvs6 && (YY.uvs6 = new Float32Array(YY.positions.length / 3 * 2)), this.colors && !YY.colors && (YY.colors = new Float32Array(YY.positions.length / 3 * 4), YY.colors.fill(1)), this.matricesIndices && !YY.matricesIndices && (YY.matricesIndices = new Float32Array(YY.positions.length / 3 * 4)), this.matricesWeights && !YY.matricesWeights && (YY.matricesWeights = new Float32Array(YY.positions.length / 3 * 4)), this.matricesIndicesExtra && !YY.matricesIndicesExtra && (YY.matricesIndicesExtra = new Float32Array(YY.positions.length / 3 * 4)), this.matricesWeightsExtra && !YY.matricesWeightsExtra && (YY.matricesWeightsExtra = new Float32Array(YY.positions.length / 3 * 4));
              else if (YY._validate(), !this.normals !== !YY.normals || !this.tangents !== !YY.tangents || !this.uvs !== !YY.uvs || !this.uvs2 !== !YY.uvs2 || !this.uvs3 !== !YY.uvs3 || !this.uvs4 !== !YY.uvs4 || !this.uvs5 !== !YY.uvs5 || !this.uvs6 !== !YY.uvs6 || !this.colors !== !YY.colors || !this.matricesIndices !== !YY.matricesIndices || !this.matricesWeights !== !YY.matricesWeights || !this.matricesIndicesExtra !== !YY.matricesIndicesExtra || !this.matricesWeightsExtra !== !YY.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (OY) {
            let YY, FY = 0,
              AY = 0;
            const IY = [];
            let RY = null;
            const OY = [];
            for (const DY of this.splitBasedOnMaterialID()) OY.push({
              vertexData: DY,
              transform: rY
            });
            for (const rY of DY)
              if (rY.vertexData)
                for (const YY of rY.vertexData.splitBasedOnMaterialID()) OY.push({
                  vertexData: YY,
                  transform: rY.transform
                });
            OY.sort(((YY, rY) => {
              const DY = YY.vertexData.materialInfos ? YY.vertexData.materialInfos[0].materialIndex : 0,
                FY = rY.vertexData.materialInfos ? rY.vertexData.materialInfos[0].materialIndex : 0;
              return DY > FY ? 1 : DY === FY ? 0 : -1
            }));
            for (const rY of OY) {
              const DY = rY.vertexData;
              if (YY = DY.materialInfos ? DY.materialInfos[0].materialIndex : 0, RY && RY.materialIndex === YY) RY.indexCount += DY.indices.length, RY.verticesCount += DY.positions.length / 3;
              else {
                const rY = new iY;
                rY.materialIndex = YY, rY.indexStart = FY, rY.indexCount = DY.indices.length, rY.verticesStart = AY, rY.verticesCount = DY.positions.length / 3, IY.push(rY), RY = rY
              }
              FY += DY.indices.length, AY += DY.positions.length / 3
            }
            const gY = OY.splice(0, 1)[0];
            vY = gY.vertexData, rY = gY.transform, aY = OY.map((YY => YY.vertexData)), DY = OY, this.materialInfos = IY
          }
          const uY = aY.reduce(((YY, rY) => YY + (rY.indices?.length ?? 0)), vY.indices?.length ?? 0);
          let sY = RY || aY.some((YY => YY.indices === vY.indices)) ? vY.indices?.slice() : vY.indices;
          if (uY > 0) {
            let IY = sY?.length ?? 0;
            if (sY || (sY = new Array(uY)), sY.length !== uY) {
              if (Array.isArray(sY)) sY.length = uY;
              else {
                const YY = FY || sY instanceof Uint32Array ? new Uint32Array(uY) : new Uint16Array(uY);
                YY.set(sY), sY = YY
              }
              rY && rY.determinant() < 0 && YY._FlipFaces(sY, 0, IY)
            }
            let RY = vY.positions ? vY.positions.length / 3 : 0;
            for (const {
                vertexData: rY,
                transform: FY
              }
              of DY)
              if (rY.indices) {
                for (let YY = 0; YY < rY.indices.length; YY++) sY[IY + YY] = rY.indices[YY] + RY;
                FY && FY.determinant() < 0 && YY._FlipFaces(sY, IY, rY.indices.length), RY += rY.positions.length / 3, IY += rY.indices.length, AY && (yield)
              }
          }
          return this.indices = sY, this.positions = YY._MergeElement(IY.l.PositionKind, vY.positions, rY, DY.map((YY => [YY.vertexData.positions, YY.transform]))), AY && (yield), vY.normals && (this.normals = YY._MergeElement(IY.l.NormalKind, vY.normals, rY, DY.map((YY => [YY.vertexData.normals, YY.transform]))), AY && (yield)), vY.tangents && (this.tangents = YY._MergeElement(IY.l.TangentKind, vY.tangents, rY, DY.map((YY => [YY.vertexData.tangents, YY.transform]))), AY && (yield)), vY.uvs && (this.uvs = YY._MergeElement(IY.l.UVKind, vY.uvs, rY, DY.map((YY => [YY.vertexData.uvs, YY.transform]))), AY && (yield)), vY.uvs2 && (this.uvs2 = YY._MergeElement(IY.l.UV2Kind, vY.uvs2, rY, DY.map((YY => [YY.vertexData.uvs2, YY.transform]))), AY && (yield)), vY.uvs3 && (this.uvs3 = YY._MergeElement(IY.l.UV3Kind, vY.uvs3, rY, DY.map((YY => [YY.vertexData.uvs3, YY.transform]))), AY && (yield)), vY.uvs4 && (this.uvs4 = YY._MergeElement(IY.l.UV4Kind, vY.uvs4, rY, DY.map((YY => [YY.vertexData.uvs4, YY.transform]))), AY && (yield)), vY.uvs5 && (this.uvs5 = YY._MergeElement(IY.l.UV5Kind, vY.uvs5, rY, DY.map((YY => [YY.vertexData.uvs5, YY.transform]))), AY && (yield)), vY.uvs6 && (this.uvs6 = YY._MergeElement(IY.l.UV6Kind, vY.uvs6, rY, DY.map((YY => [YY.vertexData.uvs6, YY.transform]))), AY && (yield)), vY.colors && (this.colors = YY._MergeElement(IY.l.ColorKind, vY.colors, rY, DY.map((YY => [YY.vertexData.colors, YY.transform]))), (void 0 !== vY.hasVertexAlpha || DY.some((YY => void 0 !== YY.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = vY.hasVertexAlpha || DY.some((YY => YY.vertexData.hasVertexAlpha))), AY && (yield)), vY.matricesIndices && (this.matricesIndices = YY._MergeElement(IY.l.MatricesIndicesKind, vY.matricesIndices, rY, DY.map((YY => [YY.vertexData.matricesIndices, YY.transform]))), AY && (yield)), vY.matricesWeights && (this.matricesWeights = YY._MergeElement(IY.l.MatricesWeightsKind, vY.matricesWeights, rY, DY.map((YY => [YY.vertexData.matricesWeights, YY.transform]))), AY && (yield)), vY.matricesIndicesExtra && (this.matricesIndicesExtra = YY._MergeElement(IY.l.MatricesIndicesExtraKind, vY.matricesIndicesExtra, rY, DY.map((YY => [YY.vertexData.matricesIndicesExtra, YY.transform]))), AY && (yield)), vY.matricesWeightsExtra && (this.matricesWeightsExtra = YY._MergeElement(IY.l.MatricesWeightsExtraKind, vY.matricesWeightsExtra, rY, DY.map((YY => [YY.vertexData.matricesWeightsExtra, YY.transform])))), this
        }
        static _MergeElement(rY, DY, FY, AY) {
          const RY = AY.filter((YY => null !== YY[0] && void 0 !== YY[0]));
          if (!DY && 0 == RY.length) return DY;
          if (!DY) return this._MergeElement(rY, RY[0][0], RY[0][1], RY.slice(1));
          const OY = RY.reduce(((YY, rY) => YY + rY[0].length), DY.length),
            gY = rY === IY.l.PositionKind ? YY._TransformVector3Coordinates : rY === IY.l.NormalKind ? YY._TransformVector3Normals : rY === IY.l.TangentKind ? YY._TransformVector4Normals : () => {};
          if (DY instanceof Float32Array) {
            const YY = new Float32Array(OY);
            YY.set(DY), FY && gY(YY, FY, 0, DY.length);
            let rY = DY.length;
            for (const [DY, FY] of RY) YY.set(DY, rY), FY && gY(YY, FY, rY, DY.length), rY += DY.length;
            return YY
          } {
            const YY = new Array(OY);
            for (let FY = 0; FY < DY.length; FY++) YY[FY] = DY[FY];
            FY && gY(YY, FY, 0, DY.length);
            let rY = DY.length;
            for (const [DY, FY] of RY) {
              for (let FY = 0; FY < DY.length; FY++) YY[rY + FY] = DY[FY];
              FY && gY(YY, FY, rY, DY.length), rY += DY.length
            }
            return YY
          }
        }
        _validate() {
          if (!this.positions) throw new uY.g("Positions are required", uY.c.MeshInvalidPositionsError);
          const YY = (YY, rY) => {
              const DY = (0, IY.h)(YY);
              if (rY.length % DY !== 0) throw new Error("The " + YY + "s array count must be a multiple of " + DY);
              return rY.length / DY
            },
            rY = YY(IY.l.PositionKind, this.positions),
            DY = (DY, FY) => {
              const AY = YY(DY, FY);
              if (AY !== rY) throw new Error("The " + DY + "s element count (" + AY + ") does not match the positions count (" + rY + ")")
            };
          this.normals && DY(IY.l.NormalKind, this.normals), this.tangents && DY(IY.l.TangentKind, this.tangents), this.uvs && DY(IY.l.UVKind, this.uvs), this.uvs2 && DY(IY.l.UV2Kind, this.uvs2), this.uvs3 && DY(IY.l.UV3Kind, this.uvs3), this.uvs4 && DY(IY.l.UV4Kind, this.uvs4), this.uvs5 && DY(IY.l.UV5Kind, this.uvs5), this.uvs6 && DY(IY.l.UV6Kind, this.uvs6), this.colors && DY(IY.l.ColorKind, this.colors), this.matricesIndices && DY(IY.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && DY(IY.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && DY(IY.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && DY(IY.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const rY = this.serialize();
          return YY.Parse(rY)
        }
        serialize() {
          const YY = {};
          if (this.positions && (YY.positions = Array.from(this.positions)), this.normals && (YY.normals = Array.from(this.normals)), this.tangents && (YY.tangents = Array.from(this.tangents)), this.uvs && (YY.uvs = Array.from(this.uvs)), this.uvs2 && (YY.uvs2 = Array.from(this.uvs2)), this.uvs3 && (YY.uvs3 = Array.from(this.uvs3)), this.uvs4 && (YY.uvs4 = Array.from(this.uvs4)), this.uvs5 && (YY.uvs5 = Array.from(this.uvs5)), this.uvs6 && (YY.uvs6 = Array.from(this.uvs6)), this.colors && (YY.colors = Array.from(this.colors), YY.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (YY.matricesIndices = Array.from(this.matricesIndices), YY.matricesIndicesExpanded = !0), this.matricesWeights && (YY.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (YY.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), YY.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (YY.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), YY.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            YY.materialInfos = [];
            for (const rY of this.materialInfos) {
              const DY = {
                indexStart: rY.indexStart,
                indexCount: rY.indexCount,
                materialIndex: rY.materialIndex,
                verticesStart: rY.verticesStart,
                verticesCount: rY.verticesCount
              };
              YY.materialInfos.push(DY)
            }
          }
          return YY
        }
        static ExtractFromMesh(rY, DY, FY) {
          return YY._ExtractFrom(rY, DY, FY)
        }
        static ExtractFromGeometry(rY, DY, FY) {
          return YY._ExtractFrom(rY, DY, FY)
        }
        static _ExtractFrom(rY, DY, FY) {
          const AY = new YY;
          if (rY.isVerticesDataPresent(IY.l.PositionKind) && (AY.positions = rY.getVerticesData(IY.l.PositionKind, DY, FY)), rY.isVerticesDataPresent(IY.l.NormalKind) && (AY.normals = rY.getVerticesData(IY.l.NormalKind, DY, FY)), rY.isVerticesDataPresent(IY.l.TangentKind) && (AY.tangents = rY.getVerticesData(IY.l.TangentKind, DY, FY)), rY.isVerticesDataPresent(IY.l.UVKind) && (AY.uvs = rY.getVerticesData(IY.l.UVKind, DY, FY)), rY.isVerticesDataPresent(IY.l.UV2Kind) && (AY.uvs2 = rY.getVerticesData(IY.l.UV2Kind, DY, FY)), rY.isVerticesDataPresent(IY.l.UV3Kind) && (AY.uvs3 = rY.getVerticesData(IY.l.UV3Kind, DY, FY)), rY.isVerticesDataPresent(IY.l.UV4Kind) && (AY.uvs4 = rY.getVerticesData(IY.l.UV4Kind, DY, FY)), rY.isVerticesDataPresent(IY.l.UV5Kind) && (AY.uvs5 = rY.getVerticesData(IY.l.UV5Kind, DY, FY)), rY.isVerticesDataPresent(IY.l.UV6Kind) && (AY.uvs6 = rY.getVerticesData(IY.l.UV6Kind, DY, FY)), rY.isVerticesDataPresent(IY.l.ColorKind)) {
            const YY = rY.geometry || rY,
              RY = YY.getVertexBuffer(IY.l.ColorKind),
              OY = YY.getVerticesData(IY.l.ColorKind, DY, FY);
            if (3 === RY.getSize()) {
              const YY = new Float32Array(4 * OY.length / 3);
              for (let rY = 0, DY = 0; rY < OY.length; rY += 3, DY += 4) YY[DY] = OY[rY], YY[DY + 1] = OY[rY + 1], YY[DY + 2] = OY[rY + 2], YY[DY + 3] = 1;
              AY.colors = YY
            } else {
              if (4 !== RY.getSize()) throw new Error(`Unexpected number of color components: ${RY.getSize()}`);
              AY.colors = OY
            }
          }
          return rY.isVerticesDataPresent(IY.l.MatricesIndicesKind) && (AY.matricesIndices = rY.getVerticesData(IY.l.MatricesIndicesKind, DY, FY)), rY.isVerticesDataPresent(IY.l.MatricesWeightsKind) && (AY.matricesWeights = rY.getVerticesData(IY.l.MatricesWeightsKind, DY, FY)), rY.isVerticesDataPresent(IY.l.MatricesIndicesExtraKind) && (AY.matricesIndicesExtra = rY.getVerticesData(IY.l.MatricesIndicesExtraKind, DY, FY)), rY.isVerticesDataPresent(IY.l.MatricesWeightsExtraKind) && (AY.matricesWeightsExtra = rY.getVerticesData(IY.l.MatricesWeightsExtraKind, DY, FY)), AY.indices = rY.XIY(DY, FY), AY
        }
        static CreateRibbon(YY) {
          throw (0, RY.i)("ribbonBuilder")
        }
        static CreateBox(YY) {
          throw (0, RY.i)("boxBuilder")
        }
        static CreateTiledBox(YY) {
          throw (0, RY.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(YY) {
          throw (0, RY.i)("tiledPlaneBuilder")
        }
        static CreateSphere(YY) {
          throw (0, RY.i)("sphereBuilder")
        }
        static CreateCylinder(YY) {
          throw (0, RY.i)("cylinderBuilder")
        }
        static CreateTorus(YY) {
          throw (0, RY.i)("torusBuilder")
        }
        static CreateLineSystem(YY) {
          throw (0, RY.i)("linesBuilder")
        }
        static CreateDashedLines(YY) {
          throw (0, RY.i)("linesBuilder")
        }
        static CreateGround(YY) {
          throw (0, RY.i)("groundBuilder")
        }
        static CreateTiledGround(YY) {
          throw (0, RY.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(YY) {
          throw (0, RY.i)("groundBuilder")
        }
        static CreatePlane(YY) {
          throw (0, RY.i)("planeBuilder")
        }
        static CreateDisc(YY) {
          throw (0, RY.i)("discBuilder")
        }
        static CreatePolygon(YY, rY, DY, FY, AY, IY, OY) {
          throw (0, RY.i)("polygonBuilder")
        }
        static CreateIcoSphere(YY) {
          throw (0, RY.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(YY) {
          throw (0, RY.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || AY.r.Up();
          throw (0, RY.i)("capsuleBuilder")
        }
        static CreateTorusKnot(YY) {
          throw (0, RY.i)("torusKnotBuilder")
        }
        static ComputeNormals(YY, rY, DY, FY) {
          let IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY = !1,
            BY = !1,
            cY = !1,
            KY = !1,
            HY = 1,
            zY = 0,
            ZY = null;
          FY && (NY = !!FY.facetNormals, BY = !!FY.facetPositions, cY = !!FY.facetPartitioning, HY = !0 === FY.useRightHandedSystem ? -1 : 1, zY = FY.ratio || 0, KY = !!FY.depthSort, ZY = FY.distanceTo, KY && void 0 === ZY && (ZY = AY.r.Zero()));
          let CY = 0,
            fY = 0,
            jY = 0,
            hY = 0;
          for (cY && FY && FY.bbSize && (CY = FY.subDiv.X * zY / FY.bbSize.x, fY = FY.subDiv.Y * zY / FY.bbSize.y, jY = FY.subDiv.Z * zY / FY.bbSize.z, hY = FY.subDiv.max * FY.subDiv.max, FY.facetPartitioning.length = 0), IY = 0; IY < YY.length; IY++) DY[IY] = 0;
          const dY = rY.length / 3 | 0;
          for (IY = 0; IY < dY; IY++) {
            if (oY = 3 * rY[3 * IY], WY = oY + 1, EY = oY + 2, mY = 3 * rY[3 * IY + 1], VY = mY + 1, SY = mY + 2, lY = 3 * rY[3 * IY + 2], TY = lY + 1, eY = lY + 2, RY = YY[oY] - YY[mY], OY = YY[WY] - YY[VY], gY = YY[EY] - YY[SY], aY = YY[lY] - YY[mY], vY = YY[TY] - YY[VY], uY = YY[eY] - YY[SY], sY = HY * (OY * uY - gY * vY), iY = HY * (gY * aY - RY * uY), yY = HY * (RY * vY - OY * aY), QY = Math.sqrt(sY * sY + iY * iY + yY * yY), QY = 0 === QY ? 1 : QY, sY /= QY, iY /= QY, yY /= QY, NY && FY && (FY.facetNormals[IY].x = sY, FY.facetNormals[IY].y = iY, FY.facetNormals[IY].z = yY), BY && FY && (FY.facetPositions[IY].x = (YY[oY] + YY[mY] + YY[lY]) / 3, FY.facetPositions[IY].y = (YY[WY] + YY[VY] + YY[TY]) / 3, FY.facetPositions[IY].z = (YY[EY] + YY[SY] + YY[eY]) / 3), cY && FY) {
              const rY = Math.floor((FY.facetPositions[IY].x - FY.bInfo.minimum.x * zY) * CY),
                DY = Math.floor((FY.facetPositions[IY].y - FY.bInfo.minimum.y * zY) * fY),
                AY = Math.floor((FY.facetPositions[IY].z - FY.bInfo.minimum.z * zY) * jY),
                RY = Math.floor((YY[oY] - FY.bInfo.minimum.x * zY) * CY),
                OY = Math.floor((YY[WY] - FY.bInfo.minimum.y * zY) * fY),
                gY = Math.floor((YY[EY] - FY.bInfo.minimum.z * zY) * jY),
                aY = Math.floor((YY[mY] - FY.bInfo.minimum.x * zY) * CY),
                vY = Math.floor((YY[VY] - FY.bInfo.minimum.y * zY) * fY),
                uY = Math.floor((YY[SY] - FY.bInfo.minimum.z * zY) * jY),
                sY = Math.floor((YY[lY] - FY.bInfo.minimum.x * zY) * CY),
                iY = Math.floor((YY[TY] - FY.bInfo.minimum.y * zY) * fY),
                yY = Math.floor((YY[eY] - FY.bInfo.minimum.z * zY) * jY),
                QY = RY + FY.subDiv.max * OY + hY * gY,
                NY = aY + FY.subDiv.max * vY + hY * uY,
                BY = sY + FY.subDiv.max * iY + hY * yY,
                cY = rY + FY.subDiv.max * DY + hY * AY;
              FY.facetPartitioning[cY] = FY.facetPartitioning[cY] ? FY.facetPartitioning[cY] : [], FY.facetPartitioning[QY] = FY.facetPartitioning[QY] ? FY.facetPartitioning[QY] : [], FY.facetPartitioning[NY] = FY.facetPartitioning[NY] ? FY.facetPartitioning[NY] : [], FY.facetPartitioning[BY] = FY.facetPartitioning[BY] ? FY.facetPartitioning[BY] : [], FY.facetPartitioning[QY].push(IY), NY != QY && FY.facetPartitioning[NY].push(IY), BY != NY && BY != QY && FY.facetPartitioning[BY].push(IY), cY != QY && cY != NY && cY != BY && FY.facetPartitioning[cY].push(IY)
            }
            if (KY && FY && FY.facetPositions) {
              const YY = FY.depthSortedFacets[IY];
              YY.ind = 3 * IY, YY.sqDistance = AY.r.DistanceSquared(FY.facetPositions[IY], ZY)
            }
            DY[oY] += sY, DY[WY] += iY, DY[EY] += yY, DY[mY] += sY, DY[VY] += iY, DY[SY] += yY, DY[lY] += sY, DY[TY] += iY, DY[eY] += yY
          }
          for (IY = 0; IY < DY.length / 3; IY++) sY = DY[3 * IY], iY = DY[3 * IY + 1], yY = DY[3 * IY + 2], QY = Math.sqrt(sY * sY + iY * iY + yY * yY), QY = 0 === QY ? 1 : QY, sY /= QY, iY /= QY, yY /= QY, DY[3 * IY] = sY, DY[3 * IY + 1] = iY, DY[3 * IY + 2] = yY
        }
        static _ComputeSides(rY, DY, FY, IY, RY, OY, gY) {
          const aY = FY.length,
            vY = IY.length;
          let uY, sY;
          switch (rY = rY || YY.DEFAULTSIDE) {
            case YY.FRONTSIDE:
              break;
            case YY.BACKSIDE:
              for (uY = 0; uY < aY; uY += 3) {
                const YY = FY[uY];
                FY[uY] = FY[uY + 2], FY[uY + 2] = YY
              }
              for (sY = 0; sY < vY; sY++) IY[sY] = -IY[sY];
              break;
            case YY.DOUBLESIDE: {
              const YY = DY.length,
                rY = YY / 3;
              for (let FY = 0; FY < YY; FY++) DY[YY + FY] = DY[FY];
              for (uY = 0; uY < aY; uY += 3) FY[uY + aY] = FY[uY + 2] + rY, FY[uY + 1 + aY] = FY[uY + 1] + rY, FY[uY + 2 + aY] = FY[uY] + rY;
              for (sY = 0; sY < vY; sY++) IY[vY + sY] = -IY[sY];
              const iY = RY.length;
              let yY;
              for (yY = 0; yY < iY; yY++) RY[yY + iY] = RY[yY];
              for (OY = OY || new AY.v(0, 0, 1, 1), gY = gY || new AY.v(0, 0, 1, 1), yY = 0, uY = 0; uY < iY / 2; uY++) RY[yY] = OY.x + (OY.z - OY.x) * RY[yY], RY[yY + 1] = OY.y + (OY.w - OY.y) * RY[yY + 1], RY[yY + iY] = gY.x + (gY.z - gY.x) * RY[yY + iY], RY[yY + iY + 1] = gY.y + (gY.w - gY.y) * RY[yY + iY + 1], yY += 2;
              break
            }
          }
        }
        static Parse(rY) {
          const DY = new YY,
            FY = rY.positions;
          FY && DY.set(FY, IY.l.PositionKind);
          const AY = rY.normals;
          AY && DY.set(AY, IY.l.NormalKind);
          const RY = rY.tangents;
          RY && DY.set(RY, IY.l.TangentKind);
          const gY = rY.uvs;
          gY && DY.set(gY, IY.l.UVKind);
          const aY = rY.uvs2;
          aY && DY.set(aY, IY.l.UV2Kind);
          const vY = rY.uvs3;
          vY && DY.set(vY, IY.l.UV3Kind);
          const uY = rY.uvs4;
          uY && DY.set(uY, IY.l.UV4Kind);
          const sY = rY.uvs5;
          sY && DY.set(sY, IY.l.UV5Kind);
          const yY = rY.uvs6;
          yY && DY.set(yY, IY.l.UV6Kind);
          const QY = rY.colors;
          QY && (DY.set(OY.d.CheckColors4(QY, FY.length / 3), IY.l.ColorKind), void 0 !== rY.hasVertexAlpha && (DY.hasVertexAlpha = rY.hasVertexAlpha));
          const oY = rY.matricesIndices;
          oY && DY.set(oY, IY.l.MatricesIndicesKind);
          const WY = rY.matricesWeights;
          WY && DY.set(WY, IY.l.MatricesWeightsKind);
          const EY = rY.indices;
          EY && (DY.indices = EY);
          const mY = rY.materialInfos;
          if (mY) {
            DY.materialInfos = [];
            for (const YY of mY) {
              const rY = new iY;
              rY.indexCount = YY.indexCount, rY.indexStart = YY.indexStart, rY.verticesCount = YY.verticesCount, rY.verticesStart = YY.verticesStart, rY.materialIndex = YY.materialIndex, DY.materialInfos.push(rY)
            }
          }
          return DY
        }
        static ImportVertexData(rY, DY) {
          const FY = YY.Parse(rY);
          DY.setAllVerticesData(FY, rY.updatable)
        }
      }, (() => {
        const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [aY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], DY = [aY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], yY = [aY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], QY = [aY.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, FY.i)(YY, null, rY, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: YY => "_TransformVector3Coordinates" in YY,
            get: YY => YY._TransformVector3Coordinates
          },
          metadata: AY
        }, null, oY), (0, FY.i)(YY, null, DY, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: YY => "_TransformVector3Normals" in YY,
            get: YY => YY._TransformVector3Normals
          },
          metadata: AY
        }, null, oY), (0, FY.i)(YY, null, yY, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: YY => "_TransformVector4Normals" in YY,
            get: YY => YY._TransformVector4Normals
          },
          metadata: AY
        }, null, oY), (0, FY.i)(YY, null, QY, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: YY => "_FlipFaces" in YY,
            get: YY => YY._FlipFaces
          },
          metadata: AY
        }, null, oY), AY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AY
        })
      })(), YY.FRONTSIDE = ((0, FY.j)(YY, oY), 0), YY.BACKSIDE = 1, YY.DOUBLESIDE = 2, YY.DEFAULTSIDE = 0, YY._UniqueIdGenerator = 0, YY
    })()
  },
  39602: (YY, rY, DY) => {
    var FY = DY(36524),
      AY = DY(38040),
      IY = DY(39422),
      RY = DY(39514),
      OY = DY(39270);
    const gY = "bakedVertexAnimationSettingsInstanced";

    function aY(YY) {
      const rY = YY.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return rY instanceof Float32Array || rY instanceof Uint16Array
    }

    function vY(YY, rY, DY, FY) {
      DY.o3(Number.POSITIVE_INFINITY), FY.o3(Number.NEGATIVE_INFINITY);
      for (let AY = 0; AY < 3 * rY; AY += 3) {
        const rY = YY[AY],
          IY = YY[AY + 1],
          RY = YY[AY + 2];
        rY < DY.x && (DY.x = rY), IY < DY.y && (DY.y = IY), RY < DY.z && (DY.z = RY), rY > FY.x && (FY.x = rY), IY > FY.y && (FY.y = IY), RY > FY.z && (FY.z = RY)
      }
    }

    function uY(YY, rY, DY) {
      DY && (YY.x -= YY.x * DY.x + DY.y, YY.y -= YY.y * DY.x + DY.y, YY.z -= YY.z * DY.x + DY.y, rY.x += rY.x * DY.x + DY.y, rY.y += rY.y * DY.x + DY.y, rY.z += rY.z * DY.x + DY.y)
    }

    function sY(YY, rY, DY, AY, IY) {
      const RY = FY.n.xy[7],
        OY = FY.n.xy[8];
      for (let gY = 0; gY < 2; ++gY)
        for (let aY = 0; aY < 2; ++aY)
          for (let vY = 0; vY < 2; ++vY) RY.set(gY ? rY.x : YY.x, aY ? rY.y : YY.y, vY ? rY.z : YY.z), FY.r.TransformCoordinatesToRef(RY, DY, OY), AY.minimizeInPlace(OY), IY.maximizeInPlace(OY)
    }

    function iY(YY, rY, DY, AY, IY) {
      const RY = FY.n.xy[7];
      for (let OY = 0; OY < 3 * rY; OY += 3) FY.r.TransformCoordinatesFromFloatsToRef(YY[OY], YY[OY + 1], YY[OY + 2], DY, RY), AY.minimizeInPlace(RY), IY.maximizeInPlace(RY)
    }
    let yY = !1;
    yY || (yY = !0, RY.c.prototype.thinInstanceAdd = function(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.hT().ky().getCaps().instancedArrays) return AY.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(YY) ? YY.length : 1);
      const DY = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(YY))
        for (let FY = 0; FY < YY.length; ++FY) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, YY[FY], FY === YY.length - 1 && rY);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, YY, rY);
      return DY
    }, RY.c.prototype.thinInstanceAddSelf = function() {
      let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(FY.e.IdentityReadOnly, YY)
    }, RY.c.prototype.thinInstanceRegisterAttribute = function(YY, rY) {
      YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), this.removeVerticesData(YY), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[YY] = rY, this._userThinInstanceBuffersStorage.sizes[YY] = rY * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[YY] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[YY]), this._userThinInstanceBuffersStorage.vertexBuffers[YY] = new OY.l(this.ky(), this._userThinInstanceBuffersStorage.data[YY], YY, !0, !1, rY, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[YY])
    }, RY.c.prototype.thinInstanceSetMatrixAt = function(YY, rY) {
      let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || YY >= this._thinInstanceDataStorage.instancesCount) return !1;
      const FY = this._thinInstanceDataStorage.matrixData;
      return rY.copyToArray(FY, 16 * YY), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[YY] = rY), DY && (this.T_("matrix"), this.Py || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, RY.c.prototype.thinInstanceSetAttributeAt = function(YY, rY, DY) {
      let FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[YY] || rY >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(YY, 0), this._userThinInstanceBuffersStorage.data[YY].set(DY, rY * this._userThinInstanceBuffersStorage.strides[YY]), FY && this.T_(YY), !0)
    }, Object.defineProperty(RY.c.prototype, "R_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(YY) {
        const rY = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        YY <= (rY ? rY.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = YY)
      },
      enumerable: !0,
      configurable: !0
    }), RY.c.prototype._thinInstanceCreateMatrixBuffer = function(YY, rY) {
      let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const FY = new OY.c(this.ky(), rY, !DY, 16, !1, !0);
      for (let AY = 0; AY < 4; AY++) this.setVerticesBuffer(FY.createVertexBuffer(YY + AY, 4 * AY, 4));
      return FY
    }, RY.c.prototype.j_ = function(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (DY = DY || 16, "matrix" === YY) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = rY ? rY.length : 32 * DY, this._thinInstanceDataStorage.matrixData = rY, this._thinInstanceDataStorage.worldMatrices = null, null !== rY ? (this._thinInstanceDataStorage.instancesCount = rY.length / DY, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", rY, FY), this.Py || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Py || this.refreshBoundingInfo());
      else if ("previousMatrix" === YY) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = rY, null !== rY && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", rY, FY));
      else if ("splatIndex" === YY && rY) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = rY.length / DY, this._userThinInstanceBuffersStorage.data[YY] = rY, this._userThinInstanceBuffersStorage.strides[YY] = DY, this._userThinInstanceBuffersStorage.sizes[YY] = rY.length;
        const FY = new OY.c(this.ky(), rY, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = FY;
        for (let rY = 0; rY < 4; rY++) this.setVerticesBuffer(FY.createVertexBuffer(YY + rY, 4 * rY, 4))
      } else YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), null === rY ? this._userThinInstanceBuffersStorage?.data[YY] && (this.removeVerticesData(YY), delete this._userThinInstanceBuffersStorage.data[YY], delete this._userThinInstanceBuffersStorage.strides[YY], delete this._userThinInstanceBuffersStorage.sizes[YY], delete this._userThinInstanceBuffersStorage.vertexBuffers[YY]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[YY] = rY, this._userThinInstanceBuffersStorage.strides[YY] = DY, this._userThinInstanceBuffersStorage.sizes[YY] = rY.length, this._userThinInstanceBuffersStorage.vertexBuffers[YY] = new OY.l(this.ky(), rY, YY, !FY, !1, DY, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[YY]))
    }, RY.c.prototype.T_ = function(YY) {
      "matrix" === YY ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(YY), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === YY ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(YY), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === YY ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[YY], 0, this._thinInstanceDataStorage.instancesCount) : (YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[YY] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[YY].isUpdatable() && this._thinInstanceRecreateBuffer(YY), this._userThinInstanceBuffersStorage.vertexBuffers[YY].updateDirectly(this._userThinInstanceBuffersStorage.data[YY], 0)))
    }, RY.c.prototype.thinInstancePartialBufferUpdate = function(YY, rY, DY) {
      if ("matrix" === YY) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof rY ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * DY * Float32Array.BYTES_PER_ELEMENT, 16 * rY), 16 * DY) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(rY, DY));
      else if (YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[YY]) {
        const FY = this._userThinInstanceBuffersStorage.vertexBuffers[YY];
        if ("number" === typeof rY) {
          const FY = new Float32Array(this._userThinInstanceBuffersStorage.data[YY].buffer, this._userThinInstanceBuffersStorage.data[YY].byteOffset + DY * this._userThinInstanceBuffersStorage.strides[YY] * Float32Array.BYTES_PER_ELEMENT, rY * this._userThinInstanceBuffersStorage.strides[YY]);
          this._userThinInstanceBuffersStorage.vertexBuffers[YY].updateDirectly(FY, DY * this._userThinInstanceBuffersStorage.strides[YY])
        } else FY.updateDirectly(rY, DY)
      }
    }, RY.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const YY = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let rY = 0; rY < this._thinInstanceDataStorage.instancesCount; ++rY) this._thinInstanceDataStorage.worldMatrices[rY] = FY.e.FromArray(YY, 16 * rY)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, RY.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const RY = this._thinInstanceDataStorage.boundingVectors;
      if (YY || !this.rawBoundingInfo) {
        if (RY.length = 0, AY && function(YY, rY, DY) {
            const AY = YY._userThinInstanceBuffersStorage,
              RY = AY?.data[gY],
              yY = AY?.strides[gY];
            if (!RY || !yY || yY < 4 || !aY(YY)) return !1;
            const QY = YY._thinInstanceDataStorage.matrixData;
            if (!QY) return !1;
            const oY = {},
              WY = FY.n.Vector4[0],
              EY = FY.n.xy[1],
              mY = FY.n.xy[2],
              VY = FY.n.xy[3],
              SY = FY.n.xy[4],
              lY = FY.n.xy[5],
              TY = FY.n.xy[6],
              eY = FY.n.Matrix[2],
              NY = YY.geometry ? YY.geometry.boundingBias : null,
              BY = YY.getTotalVertices();
            EY.o3(Number.POSITIVE_INFINITY), mY.o3(Number.NEGATIVE_INFINITY), VY.o3(Number.POSITIVE_INFINITY), SY.o3(Number.NEGATIVE_INFINITY);
            for (let IY = 0; IY < YY._thinInstanceDataStorage.instancesCount; ++IY) {
              const rY = IY * yY;
              WY.set(RY[rY], RY[rY + 1], RY[rY + 2], RY[rY + 3]);
              const AY = YY._getData({
                applyMorph: DY,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: WY,
                updatePositionsArray: !1,
                cache: oY
              }, null, OY.l.PositionKind);
              if (!AY) return !1;
              vY(AY, BY, lY, TY), uY(lY, TY, NY), EY.minimizeInPlace(lY), mY.maximizeInPlace(TY), FY.e.FromArrayToRef(QY, 16 * IY, eY), NY ? sY(lY, TY, eY, VY, SY) : iY(AY, BY, eY, VY, SY)
            }
            return !(!isFinite(EY.x) || !isFinite(VY.x)) && (YY.oB().reConstruct(VY, SY), YY.rawBoundingInfo = new IY.d(EY, mY), function(YY, rY) {
              YY.length = 0;
              for (let DY = 0; DY < rY.boundingBox.vectors.length; ++DY) YY.push(rY.boundingBox.vectors[DY].clone())
            }(rY, YY.rawBoundingInfo), YY._updateBoundingInfo(), !0)
          }(this, RY, DY)) return;
        AY && this.bakedVertexAnimationManager?.isEnabled && aY(this) ? this.refreshBoundingInfo({
          applySkeleton: rY,
          applyMorph: DY,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(rY, DY);
        const YY = this.oB();
        this.rawBoundingInfo = new IY.d(YY.minimum, YY.maximum)
      }
      const yY = this.oB(),
        QY = this._thinInstanceDataStorage.matrixData;
      if (0 === RY.length)
        for (let FY = 0; FY < yY.boundingBox.vectors.length; ++FY) RY.push(yY.boundingBox.vectors[FY].clone());
      FY.n.xy[0].o3(Number.POSITIVE_INFINITY), FY.n.xy[1].o3(Number.NEGATIVE_INFINITY);
      for (let IY = 0; IY < this._thinInstanceDataStorage.instancesCount; ++IY) {
        FY.e.FromArrayToRef(QY, 16 * IY, FY.n.Matrix[0]);
        for (let YY = 0; YY < RY.length; ++YY) FY.r.TransformCoordinatesToRef(RY[YY], FY.n.Matrix[0], FY.n.xy[2]), FY.n.xy[0].minimizeInPlace(FY.n.xy[2]), FY.n.xy[1].maximizeInPlace(FY.n.xy[2])
      }
      yY.reConstruct(FY.n.xy[0], FY.n.xy[1]), this._updateBoundingInfo()
    }, RY.c.prototype._thinInstanceRecreateBuffer = function(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === YY ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, rY)) : "previousMatrix" === YY ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, rY)) : (YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[YY]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[YY] = new OY.l(this.ky(), this._userThinInstanceBuffersStorage.data[YY], YY, !rY, !1, this._userThinInstanceBuffersStorage.strides[YY], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[YY]))
    }, RY.c.prototype._thinInstanceUpdateBufferSize = function(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      YY === OY.l.ColorKind && (YY = OY.l.ColorInstanceKind);
      const DY = "matrix" === YY;
      if (!DY && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[YY])) return;
      const FY = DY ? 16 : this._userThinInstanceBuffersStorage.strides[YY],
        AY = DY ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[YY];
      let IY = DY ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[YY];
      const RY = (this._thinInstanceDataStorage.instancesCount + rY) * FY;
      let gY = AY;
      for (; gY < RY;) gY *= 2;
      if (!IY || AY != gY) {
        if (IY) {
          const YY = new Float32Array(gY);
          YY.set(IY, 0), IY = YY
        } else IY = new Float32Array(gY);
        DY ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", IY, !1), this._thinInstanceDataStorage.matrixData = IY, this._thinInstanceDataStorage.matrixBufferSize = gY, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", IY, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[YY]?.dispose(), this._userThinInstanceBuffersStorage.data[YY] = IY, this._userThinInstanceBuffersStorage.sizes[YY] = gY, this._userThinInstanceBuffersStorage.vertexBuffers[YY] = new OY.l(this.ky(), IY, YY, !0, !1, FY, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[YY]))
      }
    }, RY.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, RY.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39560: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY,
      g: () => QY
    });
    var FY, AY, IY, RY, OY = DY(39127),
      gY = DY(39131),
      aY = DY(39144),
      vY = DY(36552),
      uY = DY(36524),
      sY = DY(39347),
      iY = DY(36569),
      yY = DY(39029);
    let QY = (() => {
      var YY;
      let rY, DY, FY, AY, IY, RY, iY, yY, QY, oY = sY.b,
        WY = [],
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        NY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [];
      return YY = class extends oY {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(rY) {
          this._billboardMode !== rY && (this._billboardMode = rY, this._cache.useBillboardPosition = 0 !== (this._billboardMode & YY.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(YY) {
          this._infiniteDistance !== YY && (this._infiniteDistance = YY)
        }
        constructor(rY) {
          let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(rY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new uY.r(0, 0, 1), this._up = new uY.r(0, 1, 0), this._right = new uY.r(1, 0, 0), this._position = (0, OY.j)(this, WY, uY.r.Zero()), this._rotation = ((0, OY.j)(this, EY), (0, OY.j)(this, mY, uY.r.Zero())), this._rotationQuaternion = ((0, OY.j)(this, VY), (0, OY.j)(this, SY, null)), this._scaling = ((0, OY.j)(this, lY), (0, OY.j)(this, TY, uY.r.One())), this._transformToBoneReferal = ((0, OY.j)(this, eY), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, OY.j)(this, NY, YY.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, OY.j)(this, BY), (0, OY.j)(this, cY, 1)), this._infiniteDistance = ((0, OY.j)(this, KY), (0, OY.j)(this, HY, !1)), this.ignoreNonUniformScaling = ((0, OY.j)(this, zY), (0, OY.j)(this, ZY, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, OY.j)(this, CY), (0, OY.j)(this, fY, !1)), this._poseMatrix = ((0, OY.j)(this, jY), null), this._localMatrix = uY.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = uY.r.Zero(), this._absoluteScaling = uY.r.Zero(), this._absoluteRotationQuaternion = uY.g.Identity(), this._pivotMatrix = uY.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new vY.e, this._nonUniformScaling = !1, DY && this.hT().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(YY) {
          this._position = YY, this._markAsDirtyInternal()
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
        set rotation(YY) {
          this._rotation = YY, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get pa() {
          return this._scaling
        }
        set pa(YY) {
          this._scaling = YY, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(YY) {
          this._rotationQuaternion = YY, YY && this._rotation.o3(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return uY.r.TransformNormalFromFloatsToRef(0, 0, this.hT().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return uY.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return uY.r.TransformNormalFromFloatsToRef(this.hT().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(YY) {
          return this._poseMatrix ? (this._poseMatrix.brY(YY), this) : (this._poseMatrix = YY.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = uY.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const rY = this._cache;
          return this._billboardMode === rY.billboardMode && this._billboardMode === YY.BILLBOARDMODE_NONE && (!rY.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const YY = this._cache;
          YY.localMatrixUpdated = !1, YY.billboardMode = -1, YY.infiniteDistance = !1, YY.useBillboardPosition = !1
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
        setPreTransformMatrix(YY) {
          return this.setPivotMatrix(YY, !1)
        }
        setPivotMatrix(YY) {
          let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.brY(YY), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = rY, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = uY.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            rY = arguments.length > 1 ? arguments[1] : void 0,
            DY = arguments.length > 2 ? arguments[2] : void 0;
          const FY = this.clone("Clone of " + (this.name || this.id), YY || this.parent, !0);
          FY && DY && DY(this, FY);
          for (const AY of this.getChildTransformNodes(!0)) AY.instantiateHierarchy(FY, rY, DY);
          return FY
        }
        aN() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return YY ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.o3(0), this._rotationQuaternion = this._rotationQuaternion || uY.g.Identity(), YY.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = YY, this._absolutePosition.p_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get nIY() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(YY) {
          if (!YY) return this;
          let rY, DY, FY;
          if (void 0 === YY.x) {
            if (arguments.length < 3) return this;
            rY = arguments[0], DY = arguments[1], FY = arguments[2]
          } else rY = YY.x, DY = YY.y, FY = YY.z;
          if (this.parent) {
            const YY = uY.n.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(YY), uY.r.TransformCoordinatesFromFloatsToRef(rY, DY, FY, YY, this.position)
          } else this.position.x = rY, this.position.y = DY, this.position.z = FY;
          return this._absolutePosition.brY(YY), this
        }
        setPositionWithLocalVector(YY) {
          return this.computeWorldMatrix(), this.position = uY.r.TransformNormal(YY, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const YY = uY.n.Matrix[0];
          return this._localMatrix.invertToRef(YY), uY.r.TransformNormal(this.position, YY)
        }
        locallyTranslate(YY) {
          return this.computeWorldMatrix(!0), this.position = uY.r.TransformCoordinates(YY, this._localMatrix), this
        }
        lookAt(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const RY = YY._LookAtVectorCache,
            OY = 0 === IY ? this.position : this.getAbsolutePosition();
          if (rY.subtractToRef(OY, RY), this.setDirection(RY, DY, FY, AY), 1 === IY && this.parent)
            if (this.rotationQuaternion) {
              const YY = uY.n.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(YY);
              const rY = uY.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(rY), rY.invert(), YY.multiplyToRef(rY, YY), this.rotationQuaternion.fromRotationMatrix(YY)
            } else {
              const YY = uY.n.Quaternion[0];
              uY.g.FromEulerVectorToRef(this.rotation, YY);
              const rY = uY.n.Matrix[0];
              YY.toRotationMatrix(rY);
              const DY = uY.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(DY), DY.invert(), rY.multiplyToRef(DY, rY), YY.fromRotationMatrix(rY), YY.toEulerAnglesToRef(this.rotation)
            } return this
        }
        zq(YY) {
          const rY = uY.r.Zero();
          return this.getDirectionToRef(YY, rY), rY
        }
        getDirectionToRef(YY, rY) {
          return uY.r.TransformNormalToRef(YY, this.getWorldMatrix(), rY), this
        }
        setDirection(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const AY = -Math.atan2(YY.z, YY.x) + Math.PI / 2,
            IY = Math.sqrt(YY.x * YY.x + YY.z * YY.z),
            RY = -Math.atan2(YY.y, IY);
          return this.rotationQuaternion ? uY.g.RotationYawPitchRollToRef(AY + rY, RY + DY, FY, this.rotationQuaternion) : (this.rotation.x = RY + DY, this.rotation.y = AY + rY, this.rotation.z = FY), this
        }
        setPivotPoint(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.hT().getRenderId() && this.computeWorldMatrix(!0);
          const DY = this.getWorldMatrix();
          if (1 == rY) {
            const rY = uY.n.Matrix[0];
            DY.invertToRef(rY), YY = uY.r.TransformCoordinates(YY, rY)
          }
          return this.setPivotMatrix(uY.e.Translation(-YY.x, -YY.y, -YY.z), !0)
        }
        getPivotPoint() {
          const YY = uY.r.Zero();
          return this.getPivotPointToRef(YY), YY
        }
        getPivotPointToRef(YY) {
          return YY.x = -this._pivotMatrix.m[12], YY.y = -this._pivotMatrix.m[13], YY.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const YY = uY.r.Zero();
          return this.getAbsolutePivotPointToRef(YY), YY
        }
        getAbsolutePivotPointToRef(YY) {
          return this.getPivotPointToRef(YY), uY.r.TransformCoordinatesToRef(YY, this.getWorldMatrix(), YY), this
        }
        nYY(YY) {
          if (this._isDirty) return this;
          if (this._children)
            for (const rY of this._children) rY.nYY(YY);
          return super.nYY(YY)
        }
        setParent(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!rY && !this.parent) return this;
          const AY = uY.n.Quaternion[0],
            IY = uY.n.xy[0],
            RY = uY.n.xy[1],
            OY = uY.n.Matrix[1];
          uY.e.IdentityToRef(OY);
          const gY = uY.n.Matrix[0];
          this.computeWorldMatrix(!0);
          let aY = this.rotationQuaternion;
          return aY || (aY = YY._TmpRotation, uY.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, aY)), uY.e.ComposeToRef(this.pa, aY, this.position, gY), this.parent && gY.multiplyToRef(this.parent.computeWorldMatrix(!0), gY), rY && (rY.computeWorldMatrix(!0).invertToRef(OY), gY.multiplyToRef(OY, gY)), gY.decompose(RY, AY, IY, DY ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.brY(AY) : AY.toEulerAnglesToRef(this.rotation), this.pa.brY(RY), this.position.brY(IY), this.parent = rY, FY && this.setPivotMatrix(uY.e.Identity()), this
        }
        addChild(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return YY.setParent(this, rY), this
        }
        removeChild(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return YY.parent !== this || YY.setParent(null, rY), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(YY) {
          return this._nonUniformScaling !== YY && (this._nonUniformScaling = YY, !0)
        }
        attachToBone(YY, rY) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = rY, this.parent = YY, YY.getSkeleton().prepare(!0), YY.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = YY ? this._currentParentWhenAttachingToBone : null, this) : (YY && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(rY, DY, FY) {
          let AY;
          if (rY.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.o3(0)), FY && 0 !== FY) {
            if (this.parent) {
              const YY = this.parent.getWorldMatrix(),
                FY = uY.n.Matrix[0];
              YY.invertToRef(FY), rY = uY.r.TransformNormal(rY, FY), YY.determinant() < 0 && (DY *= -1)
            }
            AY = uY.g.RotationAxisToRef(rY, DY, YY._RotationAxisCache), AY.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else AY = uY.g.RotationAxisToRef(rY, DY, YY._RotationAxisCache), this.rotationQuaternion.multiplyToRef(AY, this.rotationQuaternion);
          return this
        }
        rotateAround(YY, rY, DY) {
          rY.normalize(), this.rotationQuaternion || (this.rotationQuaternion = uY.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.o3(0));
          const FY = uY.n.xy[0],
            AY = uY.n.xy[1],
            IY = uY.n.xy[2],
            RY = uY.n.Quaternion[0],
            OY = uY.n.Matrix[0],
            gY = uY.n.Matrix[1],
            aY = uY.n.Matrix[2],
            vY = uY.n.Matrix[3];
          return YY.subtractToRef(this.position, FY), uY.e.TranslationToRef(FY.x, FY.y, FY.z, OY), uY.e.TranslationToRef(-FY.x, -FY.y, -FY.z, gY), uY.e.RotationAxisToRef(rY, DY, aY), gY.multiplyToRef(aY, vY), vY.multiplyToRef(OY, vY), vY.decompose(AY, RY, IY), this.position.addInPlace(IY), RY.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(YY, rY, DY) {
          const FY = YY.scale(rY);
          if (DY && 0 !== DY) this.setAbsolutePosition(this.getAbsolutePosition().add(FY));
          else {
            const YY = this.getPositionExpressedInLocalSpace().add(FY);
            this.setPositionWithLocalVector(YY)
          }
          return this
        }
        addRotation(YY, rY, DY) {
          let FY;
          this.rotationQuaternion ? FY = this.rotationQuaternion : (FY = uY.n.Quaternion[1], uY.g.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, FY));
          const AY = uY.n.Quaternion[0];
          return uY.g.RotationYawPitchRollToRef(rY, YY, DY, AY), FY.multiplyInPlace(AY), this.rotationQuaternion || FY.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== YY.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const FY = this.hT().getRenderId();
          if (!this._isDirty && !rY && (this._currentRenderId === FY || this.isSynchronized())) return this._currentRenderId = FY, this._worldMatrix;
          DY = DY || this.hT().activeCamera, this._updateCache();
          const AY = this._cache;
          AY.pivotMatrixUpdated = !1, AY.billboardMode = this.billboardMode, AY.infiniteDistance = this.infiniteDistance, AY.parent = this._parentNode, this._currentRenderId = FY, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const IY = this._getEffectiveParent(),
            RY = YY._TmpScaling;
          let OY, gY = this._position;
          if (this._infiniteDistance && !this.parent && DY) {
            const rY = DY.getWorldMatrix().m;
            gY = YY._TmpTranslation, gY.p_(this._position.x + rY[12], this._position.y + rY[13], this._position.z + rY[14])
          }
          if (RY.p_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, OY = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(uY.g.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.p_(0, 0, 0))
            }
          } else OY = YY._TmpRotation, uY.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, OY);
          if (this._usePivotMatrix) {
            const YY = uY.n.Matrix[1];
            uY.e.ScalingToRef(RY.x, RY.y, RY.z, YY);
            const rY = uY.n.Matrix[0];
            OY.toRotationMatrix(rY), this._pivotMatrix.multiplyToRef(YY, uY.n.Matrix[4]), uY.n.Matrix[4].multiplyToRef(rY, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(gY.x, gY.y, gY.z)
          } else uY.e.ComposeToRef(RY, OY, gY, this._localMatrix);
          if (IY && IY.getWorldMatrix) {
            if (rY && IY.computeWorldMatrix(rY), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const YY = this.parent;
                YY.getSkeleton().prepare(), YY.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), uY.n.Matrix[7])
              } else uY.n.Matrix[7].brY(IY.getWorldMatrix());
              const rY = uY.n.xy[5],
                DY = uY.n.xy[6],
                FY = uY.n.Quaternion[0];
              uY.n.Matrix[7].decompose(DY, FY, rY), uY.e.ScalingToRef(DY.x, DY.y, DY.z, uY.n.Matrix[7]), uY.n.Matrix[7].setTranslation(rY), YY.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(FY, rY), this._localMatrix.setTranslation(rY)), this._localMatrix.multiplyToRef(uY.n.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const YY = this.parent;
              YY.getSkeleton().prepare(), this._localMatrix.multiplyToRef(YY.getFinalMatrix(), uY.n.Matrix[6]), uY.n.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(IY.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.brY(this._localMatrix);
          if (DY && this.billboardMode)
            if (AY.useBillboardPosition) {
              const rY = uY.n.xy[0];
              this._worldMatrix.getTranslationToRef(rY);
              const FY = DY.globalPosition;
              this._worldMatrix.invertToRef(uY.n.Matrix[1]);
              const AY = uY.n.xy[1];
              uY.r.TransformCoordinatesToRef(FY, uY.n.Matrix[1], AY), AY.normalize();
              const IY = -Math.atan2(AY.z, AY.x) + Math.PI / 2,
                RY = Math.sqrt(AY.x * AY.x + AY.z * AY.z),
                OY = -Math.atan2(AY.y, RY);
              if (uY.g.RotationYawPitchRollToRef(IY, OY, 0, uY.n.Quaternion[0]), (this.billboardMode & YY.BILLBOARDMODE_ALL) !== YY.BILLBOARDMODE_ALL) {
                const rY = uY.n.xy[1];
                uY.n.Quaternion[0].toEulerAnglesToRef(rY), (this.billboardMode & YY.BILLBOARDMODE_X) !== YY.BILLBOARDMODE_X && (rY.x = 0), (this.billboardMode & YY.BILLBOARDMODE_Y) !== YY.BILLBOARDMODE_Y && (rY.y = 0), (this.billboardMode & YY.BILLBOARDMODE_Z) !== YY.BILLBOARDMODE_Z && (rY.z = 0), uY.e.RotationYawPitchRollToRef(rY.y, rY.x, rY.z, uY.n.Matrix[0])
              } else uY.e.FromQuaternionToRef(uY.n.Quaternion[0], uY.n.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(uY.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(uY.n.xy[0])
            } else {
              const rY = uY.n.xy[0];
              this._worldMatrix.getTranslationToRef(rY), uY.n.Matrix[1].brY(DY.getViewMatrix());
              const FY = this.hT().useRightHandedSystem;
              if (FY && uY.n.Matrix[1].multiplyToRef(YY._TmpRHRestore, uY.n.Matrix[1]), uY.n.Matrix[1].setTranslationFromFloats(0, 0, 0), uY.n.Matrix[1].invertToRef(uY.n.Matrix[0]), (this.billboardMode & YY.BILLBOARDMODE_ALL) !== YY.BILLBOARDMODE_ALL) {
                uY.n.Matrix[0].decompose(void 0, uY.n.Quaternion[0], void 0);
                const rY = uY.n.xy[1];
                uY.n.Quaternion[0].toEulerAnglesToRef(rY), (this.billboardMode & YY.BILLBOARDMODE_X) !== YY.BILLBOARDMODE_X && (rY.x = 0), (this.billboardMode & YY.BILLBOARDMODE_Y) !== YY.BILLBOARDMODE_Y && (rY.y = 0), (this.billboardMode & YY.BILLBOARDMODE_Z) !== YY.BILLBOARDMODE_Z && (rY.z = 0), FY && (rY.y += Math.PI), uY.e.RotationYawPitchRollToRef(rY.y, rY.x, rY.z, uY.n.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(uY.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(uY.n.xy[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : IY && IY._nonUniformScaling ? this._updateNonUniformScalingState(IY._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.p_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = uY.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), YY) {
            const YY = this.getChildren();
            for (let rY = 0; rY < YY.length; ++rY) {
              const DY = YY[rY];
              if (DY) {
                DY.computeWorldMatrix();
                const YY = uY.n.Matrix[0];
                DY._localMatrix.multiplyToRef(this._localMatrix, YY);
                const rY = uY.n.Quaternion[0];
                YY.decompose(DY.pa, rY, DY.position), DY.rotationQuaternion ? DY.rotationQuaternion.brY(rY) : rY.toEulerAnglesToRef(DY.rotation)
              }
            }
          }
          this.pa.p_(1, 1, 1), this.position.p_(0, 0, 0), this.rotation.p_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = uY.g.Identity()), this._worldMatrix = uY.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(YY) {
          return this.onAfterWorldMatrixUpdateObservable.add(YY), this
        }
        unregisterAfterWorldMatrixUpdate(YY) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(YY), this
        }
        getPositionInCameraSpace() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return YY || (YY = this.hT().activeCamera), uY.r.TransformCoordinates(this.getAbsolutePosition(), YY.getViewMatrix())
        }
        getDistanceToCamera() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return YY || (YY = this.hT().activeCamera), this.getAbsolutePosition().subtract(YY.globalPosition).length()
        }
        clone(rY, DY, FY) {
          const AY = aY.b.Clone((() => new YY(rY, this.hT())), this);
          if (AY.name = rY, AY.id = rY, DY && (AY.parent = DY), !FY) {
            const YY = this.getDescendants(!0);
            for (let DY = 0; DY < YY.length; DY++) {
              const FY = YY[DY];
              FY.clone && FY.clone(rY + "." + FY.name, AY)
            }
          }
          return AY
        }
        serialize(YY) {
          const rY = aY.b.Serialize(this, YY);
          return rY.type = this.getClassName(), rY.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(rY), rY.localMatrix = this.getPivotMatrix().VDY(), rY.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (rY.aN = !0), aY.b.AppendSerializedAnimations(this, rY), rY.ws = this.serializeAnimationRanges(), rY
        }
        getChildTransformNodes(rY, DY) {
          const FY = [];
          return this._getDescendants(FY, rY, (rY => (!DY || DY(rY)) && rY instanceof YY)), FY
        }
        dispose(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.hT().stopAnimation(this), this.hT().removeTransformNode(this), this._parentContainer) {
            const YY = this._parentContainer.transformNodes.indexOf(this);
            YY > -1 && this._parentContainer.transformNodes.splice(YY, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), YY) {
            const YY = this.getChildTransformNodes(!0);
            for (const rY of YY) rY.parent = null, rY.computeWorldMatrix(!0)
          }
          super.dispose(YY, rY)
        }
        normalizeToUnitCube() {
          let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            DY = arguments.length > 2 ? arguments[2] : void 0,
            FY = null,
            AY = null;
          rY && (this.rotationQuaternion ? (AY = this.rotationQuaternion.clone(), this.rotationQuaternion.p_(0, 0, 0, 1)) : this.rotation && (FY = this.rotation.clone(), this.rotation.p_(0, 0, 0)));
          const IY = this.getHierarchyBoundingVectors(YY, DY),
            RY = IY.max.subtract(IY.min),
            OY = Math.max(RY.x, RY.y, RY.z);
          if (0 === OY) return this;
          const gY = 1 / OY;
          return this.pa.scaleInPlace(gY), rY && (this.rotationQuaternion && AY ? this.rotationQuaternion.brY(AY) : this.rotation && FY && this.rotation.brY(FY)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const aY = "function" === typeof Symbol && Symbol.metadata ? Object.create(oY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, gY.J)("position")], DY = [(0, gY.J)("rotation")], FY = [(0, gY.C)("rotationQuaternion")], AY = [(0, gY.J)("pa")], IY = [(0, gY.M)("billboardMode")], RY = [(0, gY.M)()], iY = [(0, gY.M)("infiniteDistance")], yY = [(0, gY.M)()], QY = [(0, gY.M)()], (0, OY.i)(null, null, rY, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: YY => "_position" in YY,
            get: YY => YY._position,
            set: (YY, rY) => {
              YY._position = rY
            }
          },
          metadata: aY
        }, WY, EY), (0, OY.i)(null, null, DY, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: YY => "_rotation" in YY,
            get: YY => YY._rotation,
            set: (YY, rY) => {
              YY._rotation = rY
            }
          },
          metadata: aY
        }, mY, VY), (0, OY.i)(null, null, FY, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: YY => "_rotationQuaternion" in YY,
            get: YY => YY._rotationQuaternion,
            set: (YY, rY) => {
              YY._rotationQuaternion = rY
            }
          },
          metadata: aY
        }, SY, lY), (0, OY.i)(null, null, AY, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: YY => "_scaling" in YY,
            get: YY => YY._scaling,
            set: (YY, rY) => {
              YY._scaling = rY
            }
          },
          metadata: aY
        }, TY, eY), (0, OY.i)(null, null, IY, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "_billboardMode" in YY,
            get: YY => YY._billboardMode,
            set: (YY, rY) => {
              YY._billboardMode = rY
            }
          },
          metadata: aY
        }, NY, BY), (0, OY.i)(null, null, RY, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: YY => "scalingDeterminant" in YY,
            get: YY => YY.scalingDeterminant,
            set: (YY, rY) => {
              YY.scalingDeterminant = rY
            }
          },
          metadata: aY
        }, cY, KY), (0, OY.i)(null, null, iY, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: YY => "_infiniteDistance" in YY,
            get: YY => YY._infiniteDistance,
            set: (YY, rY) => {
              YY._infiniteDistance = rY
            }
          },
          metadata: aY
        }, HY, zY), (0, OY.i)(null, null, yY, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: YY => "ignoreNonUniformScaling" in YY,
            get: YY => YY.ignoreNonUniformScaling,
            set: (YY, rY) => {
              YY.ignoreNonUniformScaling = rY
            }
          },
          metadata: aY
        }, ZY, CY), (0, OY.i)(null, null, QY, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: YY => "reIntegrateRotationIntoRotationQuaternion" in YY,
            get: YY => YY.reIntegrateRotationIntoRotationQuaternion,
            set: (YY, rY) => {
              YY.reIntegrateRotationIntoRotationQuaternion = rY
            }
          },
          metadata: aY
        }, fY, jY), aY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aY
        })
      })(), YY.BILLBOARDMODE_NONE = 0, YY.BILLBOARDMODE_X = 1, YY.BILLBOARDMODE_Y = 2, YY.BILLBOARDMODE_Z = 4, YY.BILLBOARDMODE_ALL = 7, YY.BILLBOARDMODE_USE_POSITION = 128, YY.BillboardUseParentOrientation = !1, YY._TmpRotation = uY.g.Zero(), YY._TmpScaling = uY.r.Zero(), YY._TmpTranslation = uY.r.Zero(), YY._TmpRHRestore = uY.e.Scaling(1, 1, -1), YY._LookAtVectorCache = new uY.r(0, 0, 0), YY._RotationAxisCache = new uY.g, YY
    })();

    function oY(YY, rY, DY) {
      const FY = aY.b.Parse((() => new QY(YY.name, rY)), YY, rY, DY);
      if (YY.localMatrix ? FY.setPreTransformMatrix(uY.e.FromArray(YY.localMatrix)) : YY.pivotMatrix && FY.setPivotMatrix(uY.e.FromArray(YY.pivotMatrix)), FY.mV(YY.isEnabled), FY._waitingParsedUniqueId = YY.uniqueId, void 0 !== YY.parentId && (FY._waitingParentId = YY.parentId), void 0 !== YY.parentInstanceIndex && (FY._waitingParentInstanceIndex = YY.parentInstanceIndex), YY.aN && (FY._waitingFreezeWorldMatrix = YY.aN), YY.animations) {
        for (let rY = 0; rY < YY.animations.length; rY++) {
          const DY = YY.animations[rY],
            AY = (0, iY.e)("BABYLON.Animation");
          AY && FY.animations.push(AY.Parse(DY))
        }
        sY.b.ParseAnimationRanges(FY, YY, rY)
      }
      return YY.autoAnimate && rY.beginAnimation(FY, YY.autoAnimateFrom, YY.autoAnimateTo, YY.autoAnimateLoop, YY.autoAnimateSpeed || 1), FY
    }
    let WY = !1;

    function EY() {
      WY || (WY = !0, QY.Parse = oY)
    }(FY = QY.prototype).ZZ ?? (FY.ZZ = (0, yY.g)("TransformNode", "ZZ")), (AY = QY.prototype).applyImpulse ?? (AY.applyImpulse = (0, yY.g)("TransformNode", "applyImpulse")), (IY = QY.prototype).applyAngularImpulse ?? (IY.applyAngularImpulse = (0, yY.g)("TransformNode", "applyAngularImpulse")), (RY = QY.prototype).applyTorque ?? (RY.applyTorque = (0, yY.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(QY.prototype, "physicsBody") || Object.defineProperty(QY.prototype, "physicsBody", (0, yY.c)("TransformNode", "physicsBody"))
  },
  39523: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      try {
        const FY = YY.next();
        FY.done ? rY(FY) : FY.value ? FY.value.then((() => {
          FY.value = void 0, rY(FY)
        }), DY) : rY(FY)
      } catch (FY) {
        DY(FY)
      }
    }

    function AY() {
      let YY, rY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (DY, AY, IY) => {
        const RY = performance.now();
        void 0 === YY || RY - YY > rY ? (YY = RY, setTimeout((() => {
          FY(DY, AY, IY)
        }), 0)) : FY(DY, AY, IY)
      }
    }

    function IY(YY, rY, DY, FY, AY) {
      const IY = () => {
        let RY;
        const OY = YY => {
          YY.done ? DY(YY.value) : void 0 === RY ? RY = !0 : IY()
        };
        do {
          RY = void 0, AY && AY.aborted ? FY(new Error("Aborted")) : rY(YY, OY, FY), void 0 === RY && (RY = !1)
        } while (RY)
      };
      IY()
    }

    function RY(YY, rY) {
      let DY;
      return IY(YY, FY, (YY => DY = YY), (YY => {
        throw YY
      }), rY), DY
    }
    async function OY(YY, rY, DY) {
      return await new Promise(((FY, AY) => {
        IY(YY, rY, FY, AY, DY)
      }))
    }

    function gY(YY, rY) {
      return function() {
        return RY(YY(...arguments), rY)
      }
    }
    DY.d(rY, {
      d: () => AY,
      g: () => gY,
      h: () => OY,
      j: () => RY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);
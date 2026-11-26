export const id = 274;
export const ids = [274];
export const modules = {
  41309: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU,
      e: () => GU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(41210),
      AU = zU(37846),
      FU = zU(37819),
      oU = zU(41314),
      DU = zU(39493),
      EU = zU(37863),
      YU = zU(40989),
      NU = zU(38845),
      IU = zU(38502),
      pU = zU(41068),
      aU = zU(41134);
    let tU = (() => {
      var UU;
      let XU, zU, EU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU = oU.e,
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        VU = [],
        sU = [],
        nU = [],
        mU = [],
        lU = [],
        xU = [],
        JU = [],
        jU = [],
        KU = [],
        bU = [],
        TU = [],
        hU = [],
        UX = [],
        XX = [],
        zX = [],
        cX = [],
        yX = [];
      return UU = class extends OU {
        get position() {
          return this._position
        }
        set position(UU) {
          this._position = UU
        }
        set upVector(UU) {
          this._upVector = UU
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let XU, zU;
          if (this.mode === UU.PERSPECTIVE_CAMERA) this.fovMode === UU.FOVMODE_VERTICAL_FIXED ? (zU = 2 * this.minZ * Math.tan(this.fov / 2), XU = this.qp().getAspectRatio(this) * zU) : (XU = 2 * this.minZ * Math.tan(this.fov / 2), zU = XU / this.qp().getAspectRatio(this));
          else {
            const UU = this.qp().getRenderWidth() / 2,
              cU = this.qp().getRenderHeight() / 2;
            XU = (this.orthoRight ?? UU) - (this.orthoLeft ?? -UU), zU = (this.orthoTop ?? cU) - (this.orthoBottom ?? -cU)
          }
          return XU * zU
        }
        set orthoLeft(UU) {
          this._orthoLeft = UU;
          for (const XU of this._rigCameras) XU.orthoLeft = UU
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(UU) {
          this._orthoRight = UU;
          for (const XU of this._rigCameras) XU.orthoRight = UU
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(UU) {
          this._orthoBottom = UU;
          for (const XU of this._rigCameras) XU.orthoBottom = UU
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(UU) {
          this._orthoTop = UU;
          for (const XU of this._rigCameras) XU.orthoTop = UU
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(XU / (2 * UU))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(UU) {
          this._baseInertia = UU
        }
        set mode(UU) {
          this._mode = UU;
          for (const XU of this._rigCameras) XU.mode = UU
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(XU, zU, yU) {
          let oU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, pU.e)(), super(XU, yU, !1), this.inputs = (0, cU.n)(this, SU), this._position = (0, cU.n)(this, rU, FU.q.Zero()), this._upVector = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, FU.q.Up())), this.oblique = ((0, cU.n)(this, iU), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, cU.n)(this, HU, .8), this.projectionPlaneTilt = ((0, cU.n)(this, MU), (0, cU.n)(this, vU, 0)), this.minZ = ((0, cU.n)(this, VU), (0, cU.n)(this, sU, 1)), this.maxZ = ((0, cU.n)(this, nU), (0, cU.n)(this, mU, 1e4)), this._baseInertia = ((0, cU.n)(this, lU), .9), this._mode = UU.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new NU.d(0, 0, 1, 1), this.layerMask = (0, cU.n)(this, xU, 268435455), this.fovMode = ((0, cU.n)(this, JU), (0, cU.n)(this, jU, UU.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, cU.n)(this, KU), (0, cU.n)(this, bU, UU.RIG_MODE_NONE)), this.interaxialDistance = ((0, cU.n)(this, TU), (0, cU.n)(this, hU, void 0)), this.isStereoscopicSideBySide = ((0, cU.n)(this, UX), (0, cU.n)(this, XX, void 0)), this.ignoreCameraMaxZ = ((0, cU.n)(this, zX), (0, cU.n)(this, cX, !1)), this.customRenderTargets = ((0, cU.n)(this, yX), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new AU.e, this.onProjectionMatrixChangedObservable = new AU.e, this.onAfterCheckInputsObservable = new AU.e, this.onRestoreStateObservable = new AU.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new FU.e, this._postProcesses = new Array, this._activeMeshes = new QU.d(256), this._globalPosition = FU.q.Zero(), this._computedViewMatrix = FU.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = FU.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = FU.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.nS().defaultCameraLayerMask, this.nS().addCamera(this), oU && !this.nS().activeCamera && (this.nS().activeCamera = this), this.position = zU, this.renderPassId = this.nS().qp().createRenderPassId(`Camera ${XU}`)
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
          return "bt"
        }
        toString(UU) {
          let XU = "Name: " + this.name;
          if (XU += ", type: " + this.getClassName(), this.animations)
            for (let zU = 0; zU < this.animations.length; zU++) XU += ", animation[0]: " + this.animations[zU].toString(UU);
          return XU
        }
        applyVerticalCorrection() {
          const UU = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -UU.x : UU.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(UU) {
          return -1 !== this._activeMeshes.indexOf(UU)
        }
        isReady() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (UU)
            for (const XU of this._postProcesses)
              if (XU && !XU.isReady()) return !1;
          return super.isReady(UU)
        }
        _initCache() {
          super._initCache(), this._cache.position = new FU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new FU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(UU) {
          UU || super._updateCache(), this._cache.position.YL(this.position), this._cache.upVector.YL(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const XU = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let zU = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === XU;
          if (!zU) return !1;
          const cU = this.qp();
          return this.mode === UU.PERSPECTIVE_CAMERA ? zU = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === cU.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (zU = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === cU.getRenderWidth() && this._cache.renderHeight === cU.getRenderHeight(), this.oblique && (zU = zU && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), zU
        }
        attachControl(UU, XU) {}
        detachControl(UU) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== UU.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let UU = 0; UU < this._postProcesses.length; UU++)
            if (null !== this._postProcesses[UU]) return this._postProcesses[UU];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const UU = this._getFirstPostProcess();
          UU && UU.markTextureDirty();
          for (let XU = 0, zU = this._rigCameras.length; XU < zU; XU++) {
            const UU = this._rigCameras[XU],
              zU = UU._rigPostProcess;
            if (zU) {
              "pass" === zU.getEffectName() && (UU.isIntermediate = 0 === this._postProcesses.length), UU._postProcesses = this._postProcesses.slice(0).concat(zU), zU.markTextureDirty()
            } else UU._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !UU.isReusable() && this._postProcesses.indexOf(UU) > -1 ? (DU.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == XU || XU < 0 ? this._postProcesses.push(UU) : null === this._postProcesses[XU] ? this._postProcesses[XU] = UU : this._postProcesses.splice(XU, 0, UU), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.OzU(), this._postProcesses.indexOf(UU))
        }
        detachPostProcess(UU) {
          const XU = this._postProcesses.indexOf(UU); - 1 !== XU && (this._postProcesses[XU] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.OzU(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return FU.e.Identity()
        }
        getViewMatrix(UU) {
          return !UU && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.nS().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(UU) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== UU && (this._projectionMatrix = UU)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(XU) {
          if (this._doNotComputeProjectionMatrix || !XU && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const zU = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = zU, this._refreshFrustumPlanes = !0;
          const cU = this.qp(),
            yU = this.nS(),
            QU = cU.XyU;
          if (this.mode === UU.PERSPECTIVE_CAMERA) {
            let XU;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = cU.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), XU = yU.useRightHandedSystem ? FU.e.PerspectiveFovRHToRef : FU.e.PerspectiveFovLHToRef, XU(this.fov, cU.getAspectRatio(this), QU ? zU : this.minZ, QU ? this.minZ : zU, this._projectionMatrix, this.fovMode === UU.FOVMODE_VERTICAL_FIXED, cU.isNDCHalfZRange, this.projectionPlaneTilt, QU)
          } else {
            const UU = cU.getRenderWidth() / 2,
              XU = cU.getRenderHeight() / 2;
            yU.useRightHandedSystem ? this.oblique ? FU.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -XU, this.orthoTop ?? XU, QU ? zU : this.minZ, QU ? this.minZ : zU, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, cU.isNDCHalfZRange) : FU.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -XU, this.orthoTop ?? XU, QU ? zU : this.minZ, QU ? this.minZ : zU, this._projectionMatrix, cU.isNDCHalfZRange) : this.oblique ? FU.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -XU, this.orthoTop ?? XU, QU ? zU : this.minZ, QU ? this.minZ : zU, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, cU.isNDCHalfZRange) : FU.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -XU, this.orthoTop ?? XU, QU ? zU : this.minZ, QU ? this.minZ : zU, this._projectionMatrix, cU.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = cU.getRenderWidth(), this._cache.renderHeight = cU.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(UU) {
          return (this.radius || (this.target ? FU.q.Distance(this.position, this.target) : this.position.length())) + UU
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? IU.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = IU.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), XU && this.rigCameras.length > 0) {
            let XU = !1;
            for (const zU of this.rigCameras) zU._updateFrustumPlanes(), XU = XU || UU.isInFrustum(zU._frustumPlanes);
            return XU
          }
          return UU.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(UU) {
          return this._updateFrustumPlanes(), UU.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, YU.m)("Ray")
        }
        getForwardRayToRef(UU) {
          throw (0, YU.m)("Ray")
        }
        dispose(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.nS().stopAnimation(this), this.nS().removeCamera(this); this._rigCameras.length > 0;) {
            const UU = this._rigCameras.pop();
            UU && UU.dispose()
          }
          if (this._parentContainer) {
            const UU = this._parentContainer.cameras.indexOf(this);
            UU > -1 && this._parentContainer.cameras.splice(UU, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== UU.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let UU = this._postProcesses.length;
            for (; --UU >= 0;) {
              const XU = this._postProcesses[UU];
              XU && XU.dispose(this)
            }
          }
          let cU = this.customRenderTargets.length;
          for (; --cU >= 0;) this.customRenderTargets[cU].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.nS().qp().releaseRenderPassId(this.renderPassId), super.dispose(XU, zU)
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
        setCameraRigMode(XU, zU) {
          if (this.cameraRigMode !== XU) {
            for (; this._rigCameras.length > 0;) {
              const UU = this._rigCameras.pop();
              UU && UU.dispose()
            }
            if (this.cameraRigMode = XU, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = zU.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== UU.RIG_MODE_NONE) {
              const UU = this.createRigCamera(this.name + "_L", 0);
              UU && (UU._isLeftCamera = !0);
              const XU = this.createRigCamera(this.name + "_R", 1);
              XU && (XU._isRightCamera = !0), UU && XU && (this._rigCameras.push(UU), this._rigCameras.push(XU))
            }
            this._setRigMode(zU), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(UU) {}
        _getVRProjectionMatrix() {
          return FU.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.qp().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(UU, XU) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[UU] = XU, "interaxialDistance" === UU && (this._cameraRigParams.stereoHalfAngle = XU / .0637 * (Math.PI / 180))
        }
        createRigCamera(UU, XU) {
          return null
        }
        _updateRigCameras() {
          for (let UU = 0; UU < this._rigCameras.length; UU++) this._rigCameras[UU].minZ = this.minZ, this._rigCameras[UU].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[UU].fov = this.fov, this._rigCameras[UU].upVector.YL(this.upVector);
          this.cameraRigMode === UU.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const UU = aU.b.Serialize(this);
          return UU.uniqueId = this.uniqueId, UU.type = this.getClassName(), this.parent && this.parent._serializeAsParent(UU), this.inputs && this.inputs.serialize(UU), aU.b.AppendSerializedAnimations(this, UU), UU.Qt = this.serializeAnimationRanges(), UU.isEnabled = this.isEnabled(), UU
        }
        clone(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const cU = aU.b.Clone(UU.GetConstructorFromName(this.getClassName(), XU, this.nS(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return cU.name = XU, cU.parent = zU, this.onClonedObservable.notifyObservers(cU), cU
        }
        R_(UU) {
          const XU = FU.q.Zero();
          return this.getDirectionToRef(UU, XU), XU
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(UU, XU) {
          FU.q.TransformNormalToRef(UU, this.getWorldMatrix(), XU)
        }
        static GetConstructorFromName(XU, zU, cU) {
          let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            QU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const AU = oU.e.Construct(XU, zU, cU, {
            interaxial_distance: yU,
            isStereoscopicSideBySide: QU
          });
          return AU || (() => UU._CreateDefaultParsedCamera(zU, cU))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let UU = this.nS().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (UU *= -1), UU
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(OU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, yU.F)("position")], zU = [(0, yU.F)("upVector")], EU = [(0, yU.I)()], tU = [(0, yU.I)()], gU = [(0, yU.I)()], kU = [(0, yU.I)()], GU = [(0, yU.I)()], BU = [(0, yU.I)()], ZU = [(0, yU.I)()], RU = [(0, yU.I)()], PU = [(0, yU.I)()], WU = [(0, yU.I)()], dU = [(0, yU.I)()], LU = [(0, yU.I)()], eU = [(0, yU.I)()], CU = [(0, yU.I)()], wU = [(0, yU.I)()], qU = [(0, yU.I)()], (0, cU.j)(UU, null, EU, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoLeft" in UU,
            get: UU => UU.orthoLeft
          },
          metadata: QU
        }, null, SU), (0, cU.j)(UU, null, tU, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoRight" in UU,
            get: UU => UU.orthoRight
          },
          metadata: QU
        }, null, SU), (0, cU.j)(UU, null, gU, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoBottom" in UU,
            get: UU => UU.orthoBottom
          },
          metadata: QU
        }, null, SU), (0, cU.j)(UU, null, kU, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoTop" in UU,
            get: UU => UU.orthoTop
          },
          metadata: QU
        }, null, SU), (0, cU.j)(UU, null, PU, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: UU => "inertia" in UU,
            get: UU => UU.inertia
          },
          metadata: QU
        }, null, SU), (0, cU.j)(UU, null, WU, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: UU => "mode" in UU,
            get: UU => UU.mode
          },
          metadata: QU
        }, null, SU), (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: UU => "_position" in UU,
            get: UU => UU._position,
            set: (UU, XU) => {
              UU._position = XU
            }
          },
          metadata: QU
        }, rU, uU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: UU => "_upVector" in UU,
            get: UU => UU._upVector,
            set: (UU, XU) => {
              UU._upVector = XU
            }
          },
          metadata: QU
        }, fU, iU), (0, cU.j)(null, null, GU, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: UU => "fov" in UU,
            get: UU => UU.fov,
            set: (UU, XU) => {
              UU.fov = XU
            }
          },
          metadata: QU
        }, HU, MU), (0, cU.j)(null, null, BU, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: UU => "projectionPlaneTilt" in UU,
            get: UU => UU.projectionPlaneTilt,
            set: (UU, XU) => {
              UU.projectionPlaneTilt = XU
            }
          },
          metadata: QU
        }, vU, VU), (0, cU.j)(null, null, ZU, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "minZ" in UU,
            get: UU => UU.minZ,
            set: (UU, XU) => {
              UU.minZ = XU
            }
          },
          metadata: QU
        }, sU, nU), (0, cU.j)(null, null, RU, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "maxZ" in UU,
            get: UU => UU.maxZ,
            set: (UU, XU) => {
              UU.maxZ = XU
            }
          },
          metadata: QU
        }, mU, lU), (0, cU.j)(null, null, dU, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "layerMask" in UU,
            get: UU => UU.layerMask,
            set: (UU, XU) => {
              UU.layerMask = XU
            }
          },
          metadata: QU
        }, xU, JU), (0, cU.j)(null, null, LU, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "fovMode" in UU,
            get: UU => UU.fovMode,
            set: (UU, XU) => {
              UU.fovMode = XU
            }
          },
          metadata: QU
        }, jU, KU), (0, cU.j)(null, null, eU, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "cameraRigMode" in UU,
            get: UU => UU.cameraRigMode,
            set: (UU, XU) => {
              UU.cameraRigMode = XU
            }
          },
          metadata: QU
        }, bU, TU), (0, cU.j)(null, null, CU, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "interaxialDistance" in UU,
            get: UU => UU.interaxialDistance,
            set: (UU, XU) => {
              UU.interaxialDistance = XU
            }
          },
          metadata: QU
        }, hU, UX), (0, cU.j)(null, null, wU, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: UU => "isStereoscopicSideBySide" in UU,
            get: UU => UU.isStereoscopicSideBySide,
            set: (UU, XU) => {
              UU.isStereoscopicSideBySide = XU
            }
          },
          metadata: QU
        }, XX, zX), (0, cU.j)(null, null, qU, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "ignoreCameraMaxZ" in UU,
            get: UU => UU.ignoreCameraMaxZ,
            set: (UU, XU) => {
              UU.ignoreCameraMaxZ = XU
            }
          },
          metadata: QU
        }, cX, yX), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU._CreateDefaultParsedCamera = (UU, XU) => {
        throw (0, YU.m)("UniversalCamera")
      }, UU.PERSPECTIVE_CAMERA = 0, UU.ORTHOGRAPHIC_CAMERA = 1, UU.FOVMODE_VERTICAL_FIXED = 0, UU.FOVMODE_HORIZONTAL_FIXED = 1, UU.RIG_MODE_NONE = 0, UU.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, UU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, UU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, UU.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, UU.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, UU.RIG_MODE_VR = 20, UU.RIG_MODE_CUSTOM = 22, UU.ForceAttachControlToAlwaysPreventDefault = !1, UU
    })();

    function gU(UU, XU) {
      const zU = UU.type,
        cU = tU.GetConstructorFromName(zU, UU.name, XU, UU.interaxial_distance, UU.isStereoscopicSideBySide),
        yU = aU.b.Parse(cU, UU, XU);
      if (void 0 !== UU.parentId && (yU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (yU._waitingParentInstanceIndex = UU.parentInstanceIndex), yU.inputs && (yU.inputs.parse(UU), yU._setupInputs()), UU.upVector && (yU.upVector = FU.q.FromArray(UU.upVector)), yU.setPosition && (yU.position.sUU(0, 0, 0), yU.setPosition(FU.q.FromArray(UU.position))), UU.target && yU.setTarget && yU.setTarget(FU.q.FromArray(UU.target)), UU.cameraRigMode) {
        const XU = UU.interaxial_distance ? {
          interaxialDistance: UU.interaxial_distance
        } : {};
        yU.setCameraRigMode(UU.cameraRigMode, XU)
      }
      if (UU.animations) {
        for (let XU = 0; XU < UU.animations.length; XU++) {
          const zU = UU.animations[XU],
            cU = (0, EU.e)("BABYLON.Animation");
          cU && yU.animations.push(cU.Parse(zU))
        }
        oU.e.ParseAnimationRanges(yU, UU, XU)
      }
      return UU.autoAnimate && XU.beginAnimation(yU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), void 0 !== UU.isEnabled && yU.YC(UU.isEnabled), yU
    }
    let kU = !1;

    function GU() {
      kU || (kU = !0, tU.Parse = gU)
    }
  },
  41319: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU) {
        this._cameraPosition = XU, this._behavior = zU, this.activeInput = !1, this.speed = 1, this.lK = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new cU.q, this.rotationAccumulatedPixels = new cU.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = cU.q.Zero(), this.rotationDeltaCurrentFrame = cU.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new cU.q, this.referenceFrameRate = 60, this._rotationVelocity = new cU.q, this._prevFrameTimeMs = 0, this._scene = UU
      }
      computeCurrentFrameDeltas() {
        const UU = this._scene.qp().getDeltaTime(),
          XU = this._getEffectiveDeltaMs(UU);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.IUU(0), this.rotationDeltaCurrentFrame.IUU(0), this.zoomDeltaCurrentFrame = 0, void(UU > 0 && (this._prevFrameTimeMs = UU));
        this.panDeltaCurrentFrame.IUU(0), this.rotationDeltaCurrentFrame.IUU(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.sUU(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * XU, this.panDeltaCurrentFrame), this._rotationVelocity.sUU(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.sUU(this._rotationVelocity.x * this.speed * this.rotationXSpeed * XU, this._rotationVelocity.y * this.speed * this.rotationYSpeed * XU, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lK * this._zoomSpeedMultiplier) * XU, UU > 0 && (this._prevFrameTimeMs = UU), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.IUU(0), this.rotationAccumulatedPixels.IUU(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.IUU(0), this.rotationAccumulatedPixels.IUU(0)
      }
      resetPanVelocity() {
        this._panVelocity.IUU(0), this.panAccumulatedPixels.IUU(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(UU) {
        const XU = this._scene.qp().getDeltaTime(),
          zU = this._getEffectiveDeltaMs(XU),
          cU = 1e3 / this.referenceFrameRate;
        return Math.pow(UU, zU / cU)
      }
      getFrameIndependentInputScale(UU) {
        const XU = 1 - UU;
        if (XU <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(UU)) / XU
      }
      _getEffectiveDeltaMs(UU) {
        return UU > 0 ? UU : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(UU, XU, zU) {
        let cU = UU;
        const yU = this._scene.qp().getDeltaTime(),
          QU = this._getEffectiveDeltaMs(yU);
        if (0 === QU) return cU;
        const AU = this.getFrameIndependentDecay(zU);
        if (cU *= AU, 0 !== XU || this.activeInput) {
          const UU = 1 - zU;
          cU += XU / QU * (UU > 0 ? (1 - AU) / UU : 1)
        } else Math.abs(cU) < 1e-6 && (cU = 0);
        return cU
      }
    }
  },
  41321: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU) {
        this.inputMap = [], this.handlers = UU, this._createDefaultEntries = XU, this.resetInputMap()
      }
      resolveInteraction(UU, XU) {
        for (const zU of this.inputMap)
          if (zU.source === UU && this._entryMatches(zU, XU)) return zU;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(UU, XU, zU) {
        const cU = this.inputMap;
        for (let yU = 0; yU < cU.length; yU++) {
          const QU = cU[yU];
          if (QU.source === UU && QU.interaction === XU && this._entryConditionsMatch(QU, zU)) return QU
        }
      }
      getEntries(UU, XU, zU) {
        const cU = [],
          yU = this.inputMap;
        for (let QU = 0; QU < yU.length; QU++) {
          const AU = yU[QU];
          AU.source === UU && AU.interaction === XU && this._entryConditionsMatch(AU, zU) && cU.push(AU)
        }
        return cU
      }
      addEntry(UU) {
        const XU = this._entrySpecificity(UU);
        let zU = this.inputMap.length;
        for (let cU = 0; cU < this.inputMap.length; cU++)
          if (this._entrySpecificity(this.inputMap[cU]) < XU) {
            zU = cU;
            break
          } this.inputMap.splice(zU, 0, UU)
      }
      setInteraction(UU, XU, zU) {
        const cU = this.resolveInteraction(UU, XU);
        return cU && this._entryCoversAllConditionsOf(cU, XU) ? (cU.interaction = zU, !0) : (this.addEntry({
          source: UU,
          ...XU ?? {},
          interaction: zU
        }), !0)
      }
      _entryCoversAllConditionsOf(UU, XU) {
        if (!XU) return !0;
        const zU = UU;
        for (const cU of Object.keys(XU)) {
          const UU = XU[cU];
          if (void 0 !== UU)
            if ("modifiers" === cU) {
              const XU = zU.modifiers ?? {};
              for (const zU of Object.keys(UU))
                if (void 0 !== UU[zU] && void 0 === XU[zU]) return !1
            } else if (void 0 === zU[cU]) return !1
        }
        return !0
      }
      setInteractions(UU, XU, zU) {
        let cU = 0;
        const yU = this.inputMap;
        for (let QU = 0; QU < yU.length; QU++) {
          const AU = yU[QU];
          AU.source === UU && this._entryMatches(AU, XU) && (AU.interaction = zU, cU++)
        }
        return cU
      }
      _entryMatches(UU, XU) {
        switch (UU.source) {
          case "pointer":
            return (void 0 === UU.button || UU.button === XU?.button) && this._matchModifiers(UU.modifiers, XU?.modifiers);
          case "wheel":
            return this._matchModifiers(UU.modifiers, XU?.modifiers);
          case "touch":
            return void 0 === UU.touchCount || UU.touchCount === XU?.touchCount;
          case "keyboard":
            return (void 0 === UU.key || (Array.isArray(UU.key) ? -1 !== UU.key.indexOf(XU?.key ?? -1) : UU.key === XU?.key)) && this._matchModifiers(UU.modifiers, XU?.modifiers)
        }
      }
      _entryConditionsMatch(UU, XU) {
        if (!XU) return !0;
        switch (UU.source) {
          case "pointer":
            return (!("button" in XU) || UU.button === XU.button) && (!("modifiers" in XU) || this._entryModifiersMatch(UU.modifiers, XU.modifiers));
          case "wheel":
            return !("modifiers" in XU) || this._entryModifiersMatch(UU.modifiers, XU.modifiers);
          case "touch":
            return !("touchCount" in XU) || UU.touchCount === XU.touchCount;
          case "keyboard":
            if ("key" in XU) {
              if (void 0 === UU.key) return void 0 === XU.key;
              if (void 0 === XU.key || (Array.isArray(UU.key) ? -1 === UU.key.indexOf(XU.key) : UU.key !== XU.key)) return !1
            }
            return !("modifiers" in XU) || this._entryModifiersMatch(UU.modifiers, XU.modifiers)
        }
      }
      _entrySpecificity(UU) {
        let XU = 0;
        return "button" in UU && void 0 !== UU.button && XU++, "key" in UU && void 0 !== UU.key && XU++, "touchCount" in UU && void 0 !== UU.touchCount && XU++, "modifiers" in UU && UU.modifiers && XU++, XU
      }
      _matchModifiers(UU, XU) {
        return !UU || (void 0 === UU.ctrl || UU.ctrl === (XU?.ctrl ?? !1)) && ((void 0 === UU.shift || UU.shift === (XU?.shift ?? !1)) && (void 0 === UU.alt || UU.alt === (XU?.alt ?? !1)))
      }
      _entryModifiersMatch(UU, XU) {
        if (!XU) return !UU;
        return void 0 !== XU.ctrl || void 0 !== XU.shift || void 0 !== XU.alt ? (void 0 === XU.ctrl || UU?.ctrl === XU.ctrl) && ((void 0 === XU.shift || UU?.shift === XU.shift) && (void 0 === XU.alt || UU?.alt === XU.alt)) : !UU || void 0 === UU.ctrl && void 0 === UU.shift && void 0 === UU.alt
      }
    }
  },
  41301: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => gU,
      i: () => aU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(41309),
      AU = zU(37819),
      FU = zU(37825),
      oU = zU(41317),
      DU = zU(41314),
      EU = zU(41319),
      YU = zU(41321);
    class NU extends EU.d {
      constructor(UU, XU, zU) {
        super(UU, XU, zU), this.input = new YU.d({
          translate: (UU, XU, zU) => {
            this.panAccumulatedPixels.x += UU, this.panAccumulatedPixels.y += XU, this.panAccumulatedPixels.z += zU
          },
          rotate: (UU, XU) => {
            this.rotationAccumulatedPixels.x += UU, this.rotationAccumulatedPixels.y += XU
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
    const IU = AU.e.Zero(),
      pU = AU.f.Identity();
    let aU = (() => {
        var UU;
        let XU, zU, DU, EU, YU = QU.d,
          aU = [],
          tU = [],
          gU = [],
          kU = [],
          GU = [],
          BU = [],
          ZU = [],
          RU = [];
        return UU = class extends YU {
          get inertia() {
            return this._targetInertia
          }
          set inertia(UU) {
            this._targetInertia = UU, this.movement && (this.movement.panInertia = UU, this.movement.rotationInertia = UU)
          }
          constructor(UU, XU, zU) {
            super(UU, XU, zU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new AU.q(0, 0, 0), this.cameraRotation = new AU.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, cU.n)(this, aU, !1), this.rotation = ((0, cU.n)(this, tU), (0, cU.n)(this, gU, void 0)), this.rotationQuaternion = (0, cU.n)(this, kU), this.speed = (0, cU.n)(this, GU, 2), this.noRotationConstraint = ((0, cU.n)(this, BU), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = FU.c, this._rotationEpsilon = FU.c, this.lockedTarget = (0, cU.n)(this, ZU, null), this._currentTarget = ((0, cU.n)(this, RU), AU.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = AU.e.Zero(), this._cameraTransformMatrix = AU.e.Zero(), this._cameraRotationMatrix = AU.e.Zero(), this._transformedReferencePoint = AU.q.Zero(), this._deferredPositionUpdate = new AU.q, this._deferredRotationQuaternionUpdate = new AU.f, this._deferredRotationUpdate = new AU.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = AU.q.Forward(this.nS().useRightHandedSystem), this.rotation = new AU.q(0, this.nS().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new NU(this.nS(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(UU) {
            this.getWorldMatrix();
            const XU = AU.l.Sp[0],
              zU = AU.l.Sp[1];
            return zU.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(zU, XU), XU.scaleInPlace(UU), this.globalPosition.add(XU)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const UU = this.lockedTarget;
              UU.computeWorldMatrix().getTranslationToRef(UU.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.sUU(0, 0, 0), this.cameraRotation.sUU(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new AU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new AU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new AU.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(UU) {
            UU || super._updateCache();
            const XU = this._getLockedTargetPosition();
            XU ? this._cache.lockedTarget ? this._cache.lockedTarget.YL(XU) : this._cache.lockedTarget = XU.clone() : this._cache.lockedTarget = null, this._cache.rotation.YL(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.YL(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const UU = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(UU) : !UU) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const UU = this.qp();
            return this.speed * Math.sqrt(UU.getDeltaTime() / (100 * UU.getFps()))
          }
          setTarget(UU) {
            this.upVector.normalize(), this._initialFocalDistance = UU.subtract(this.position).length(), this.position.z === UU.z && (this.position.z += FU.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.nS().useRightHandedSystem ? AU.e.LookAtRHToRef(this.position, UU, AU.q.UpReadOnly, IU) : AU.e.LookAtLHToRef(this.position, UU, AU.q.UpReadOnly, IU), IU.invert();
            const XU = this.rotationQuaternion || pU;
            AU.f.FromRotationMatrixToRef(IU, XU), XU.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(UU) {
            this.setTarget(UU)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(AU.l.Matrix[0]), AU.q.TransformNormalToRef(this.cameraDirection, AU.l.Matrix[0], AU.l.Sp[0]), this._deferredPositionUpdate.addInPlace(AU.l.Sp[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.YL(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.YL(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const UU = this.movement,
              XU = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            UU.panAccumulatedPixels.addInPlace(this.cameraDirection), UU.rotationAccumulatedPixels.x += this.cameraRotation.x, UU.rotationAccumulatedPixels.y += this.cameraRotation.y, UU.computeCurrentFrameDeltas(), this.cameraDirection.YL(UU.panDeltaCurrentFrame), this.cameraRotation.set(UU.rotationDeltaCurrentFrame.x, UU.rotationDeltaCurrentFrame.y);
            const zU = this.speed * this._panningEpsilon;
            !XU && Math.abs(this.cameraDirection.x) < zU && Math.abs(this.cameraDirection.y) < zU && Math.abs(this.cameraDirection.z) < zU && (this.cameraDirection.IUU(0), UU.resetPanVelocity());
            const cU = this.invertRotation ? -this.inverseRotationSpeed : 1,
              yU = this._decideIfNeedsToMove(),
              QU = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.YL(this.rotation), this._deferredPositionUpdate.YL(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.YL(this.rotationQuaternion), yU && this._updatePosition(), QU) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * cU, this._deferredRotationUpdate.y += this.cameraRotation.y * cU, !this.noRotationConstraint) {
                const UU = 1.570796;
                this._deferredRotationUpdate.x > UU && (this._deferredRotationUpdate.x = UU), this._deferredRotationUpdate.x < -UU && (this._deferredRotationUpdate.x = -UU)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.YL(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (AU.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.YL(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.IUU(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : AU.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return AU.q.TransformNormalToRef(AU.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), AU.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? oU.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (AU.f.FromEulerVectorToRef(this.rotation, pU), oU.b.Y.rotateByQuaternionToRef(pU, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(UU, XU, zU) {
            if (this.nS().useRightHandedSystem ? AU.e.LookAtRHToRef(UU, XU, zU, this._viewMatrix) : AU.e.LookAtLHToRef(UU, XU, zU, this._viewMatrix), this.parent) {
              const UU = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(UU, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(XU, zU) {
            if (this.cameraRigMode !== QU.d.RIG_MODE_NONE) {
              const zU = new UU(XU, this.position.clone(), this.nS());
              return zU.isRigCamera = !0, zU.rigParent = this, this.cameraRigMode === QU.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new AU.f), zU._cameraRigParams = {}, zU.rotationQuaternion = new AU.f), zU.mode = this.mode, zU.orthoLeft = this.orthoLeft, zU.orthoRight = this.orthoRight, zU.orthoTop = this.orthoTop, zU.orthoBottom = this.orthoBottom, zU
            }
            return null
          }
          _updateRigCameras() {
            const UU = this._rigCameras[0],
              XU = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case QU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case QU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case QU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case QU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case QU.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const zU = this.cameraRigMode === QU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  cU = this.cameraRigMode === QU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * zU, UU), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * cU, XU);
                break
              }
              case QU.d.RIG_MODE_VR:
                UU.rotationQuaternion && XU.rotationQuaternion && this.rotationQuaternion ? (UU.rotationQuaternion.YL(this.rotationQuaternion), XU.rotationQuaternion.YL(this.rotationQuaternion)) : (UU.rotation.YL(this.rotation), XU.rotation.YL(this.rotation)), UU.position.YL(this.position), XU.position.YL(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(XU, zU) {
            this.getTarget().subtractToRef(this.position, UU._TargetFocalPoint), UU._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const cU = UU._TargetFocalPoint.addInPlace(this.position);
            AU.e.TranslationToRef(-cU.x, -cU.y, -cU.z, UU._TargetTransformMatrix), UU._TargetTransformMatrix.multiplyToRef(AU.e.RotationAxis(zU.upVector, XU), UU._RigCamTransformMatrix), AU.e.TranslationToRef(cU.x, cU.y, cU.z, UU._TargetTransformMatrix), UU._RigCamTransformMatrix.multiplyToRef(UU._TargetTransformMatrix, UU._RigCamTransformMatrix), AU.q.TransformCoordinatesToRef(this.position, UU._RigCamTransformMatrix, zU.position), zU.setTarget(cU)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(YU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.F)()], DU = [(0, yU.I)()], EU = [(0, yU.t)("lockedTargetId")], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: UU => "updateUpVectorFromRotation" in UU,
              get: UU => UU.updateUpVectorFromRotation,
              set: (UU, XU) => {
                UU.updateUpVectorFromRotation = XU
              }
            },
            metadata: QU
          }, aU, tU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: UU => "rotation" in UU,
              get: UU => UU.rotation,
              set: (UU, XU) => {
                UU.rotation = XU
              }
            },
            metadata: QU
          }, gU, kU), (0, cU.j)(null, null, DU, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: UU => "speed" in UU,
              get: UU => UU.speed,
              set: (UU, XU) => {
                UU.speed = XU
              }
            },
            metadata: QU
          }, GU, BU), (0, cU.j)(null, null, EU, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: UU => "lockedTarget" in UU,
              get: UU => UU.lockedTarget,
              set: (UU, XU) => {
                UU.lockedTarget = XU
              }
            },
            metadata: QU
          }, ZU, RU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU._RigCamTransformMatrix = new AU.e, UU._TargetTransformMatrix = new AU.e, UU._TargetFocalPoint = new AU.q, UU
      })(),
      tU = !1;

    function gU() {
      tU || (tU = !0, DU.e.AddNodeConstructor("TargetCamera", ((UU, XU) => () => new aU(UU, AU.q.Zero(), XU))))
    }
  },
  41061: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(41003);
    let yU = !1;

    function QU() {
      yU || (yU = !0, cU.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, cU.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, cU.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, cU.c.prototype.getAspectRatio = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = UU.viewport;
        return this.getRenderWidth(XU) * zU.width / (this.getRenderHeight(XU) * zU.height)
      }, cU.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, cU.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41148: (UU, XU, zU) => {
    var cU = zU(41003),
      yU = zU(41152);
    let QU = !1;
    QU || (QU = !0, (0, yU.A)(), cU.c.prototype._loadFileAsync = async function(UU, XU, zU) {
      return await new Promise(((cU, yU) => {
        this._loadFile(UU, (UU => {
          cU(UU)
        }), void 0, XU, zU, ((UU, XU) => {
          yU(XU)
        }))
      }))
    })
  },
  41146: (UU, XU, zU) => {
    (0, zU(41068).e)()
  },
  41068: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(41003);
    let yU = !1;

    function QU() {
      yU || (yU = !0, cU.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, cU.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, cU.c.prototype.createRenderPassId = function(UU) {
        const XU = ++cU.c._RenderPassIdCounter;
        return this._renderPassNames[XU] = UU ?? "NONAME", XU
      }, cU.c.prototype.releaseRenderPassId = function(UU) {
        this._renderPassNames[UU] = void 0;
        for (let XU = 0; XU < this.scenes.length; ++XU) {
          const zU = this.scenes[XU];
          for (let XU = 0; XU < zU.meshes.length; ++XU) {
            const cU = zU.meshes[XU];
            if (cU._releaseRenderPassId(UU), cU.uB)
              for (let XU = 0; XU < cU.uB.length; ++XU) {
                cU.uB[XU]._removeDrawWrapper(UU)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(UU)
      })
    }
  },
  41188: (UU, XU, zU) => {
    var cU = zU(41194),
      yU = zU(41003);
    let QU = !1;
    QU || (QU = !0, yU.c.GetCompatibleTextureLoader = cU.e)
  },
  41077: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(40948);
    let yU = !1;

    function QU() {
      yU || (yU = !0, cU.ThinEngine.prototype.setAlphaMode = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[zU] === UU) {
          if (!XU) {
            const XU = 0 === UU;
            this.depthCullingState.depthMask !== XU && (this.depthCullingState.depthMask = XU)
          }
          return
        }
        const cU = 0 === UU;
        this._alphaState.setAlphaBlend(!cU, zU), this._alphaState.setAlphaMode(UU, zU), XU || (this.depthCullingState.depthMask = cU), this._alphaMode[zU] = UU
      })
    }
  },
  41093: (UU, XU, zU) => {
    var cU = zU(40940),
      yU = zU(39493),
      QU = zU(40948),
      AU = zU(41096),
      FU = zU(41048);
    class oU extends AU.c {
      setDepthStencilTexture(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(UU, XU), !UU) return;
        const zU = this._engine,
          cU = this._context,
          yU = UU._hardwareTexture;
        if (yU && UU._autoMSAAManagement && this._MSAAFramebuffer) {
          const XU = zU._currentFramebuffer;
          zU._bindUnboundFramebuffer(this._MSAAFramebuffer), cU.framebufferRenderbuffer(cU.FRAMEBUFFER, (0, FU.c)(UU.format) ? cU.DEPTH_STENCIL_ATTACHMENT : cU.DEPTH_ATTACHMENT, cU.RENDERBUFFER, yU.getMSAARenderBuffer()), zU._bindUnboundFramebuffer(XU)
        }
      }
      constructor(UU, XU, zU, cU, yU) {
        super(UU, XU, zU, cU), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = yU
      }
      _cloneRenderTargetWrapper() {
        let UU;
        return this._colorTextureArray && this._depthStencilTextureArray ? (UU = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), UU.texture.isReady = !0) : UU = super._cloneRenderTargetWrapper(), UU
      }
      _swapRenderTargetWrapper(UU) {
        super._swapRenderTargetWrapper(UU), UU._framebuffer = this._framebuffer, UU._depthStencilBuffer = this._depthStencilBuffer, UU._MSAAFramebuffer = this._MSAAFramebuffer, UU._colorTextureArray = this._colorTextureArray, UU._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const UU = this._engine,
            XU = UU._currentFramebuffer,
            zU = this._context;
          UU._bindUnboundFramebuffer(this._framebuffer), zU.framebufferRenderbuffer(zU.FRAMEBUFFER, zU.DEPTH_STENCIL_ATTACHMENT, zU.RENDERBUFFER, null), zU.framebufferRenderbuffer(zU.FRAMEBUFFER, zU.DEPTH_ATTACHMENT, zU.RENDERBUFFER, null), zU.framebufferRenderbuffer(zU.FRAMEBUFFER, zU.STENCIL_ATTACHMENT, zU.RENDERBUFFER, null), UU._bindUnboundFramebuffer(XU), zU.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(UU, XU, zU, cU, yU, QU)
      }
      shareDepth(UU) {
        super.shareDepth(UU);
        const XU = this._context,
          zU = this._depthStencilBuffer,
          cU = UU._MSAAFramebuffer || UU._framebuffer,
          yU = this._engine;
        UU._depthStencilBuffer && UU._depthStencilBuffer !== zU && XU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = zU;
        const QU = UU._generateStencilBuffer ? XU.DEPTH_STENCIL_ATTACHMENT : XU.DEPTH_ATTACHMENT;
        yU._bindUnboundFramebuffer(cU), XU.framebufferRenderbuffer(XU.FRAMEBUFFER, QU, XU.RENDERBUFFER, zU), yU._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yU = UU._hardwareTexture;
        if (!yU) return;
        const QU = this._framebuffer,
          AU = this._engine,
          FU = AU._currentFramebuffer;
        let oU;
        if (AU._bindUnboundFramebuffer(QU), AU.Fa > 1) {
          const QU = this._context;
          oU = QU["COLOR_ATTACHMENT" + XU], UU.is2DArray || UU.is3D ? (zU = zU ?? this.layerIndices?.[XU] ?? 0, QU.framebufferTextureLayer(QU.FRAMEBUFFER, oU, yU.underlyingResource, cU, zU)) : UU.isCube ? (zU = zU ?? this.faceIndices?.[XU] ?? 0, QU.framebufferTexture2D(QU.FRAMEBUFFER, oU, QU.TEXTURE_CUBE_MAP_POSITIVE_X + zU, yU.underlyingResource, cU)) : QU.framebufferTexture2D(QU.FRAMEBUFFER, oU, QU.TEXTURE_2D, yU.underlyingResource, cU)
        } else {
          const UU = this._context;
          oU = UU["COLOR_ATTACHMENT" + XU + "_WEBGL"];
          const QU = void 0 !== zU ? UU.TEXTURE_CUBE_MAP_POSITIVE_X + zU : UU.TEXTURE_2D;
          UU.framebufferTexture2D(UU.FRAMEBUFFER, oU, QU, yU.underlyingResource, cU)
        }
        if (UU._autoMSAAManagement && this._MSAAFramebuffer) {
          const UU = this._context;
          AU._bindUnboundFramebuffer(this._MSAAFramebuffer), UU.framebufferRenderbuffer(UU.FRAMEBUFFER, oU, UU.RENDERBUFFER, yU.getMSAARenderBuffer())
        }
        AU._bindUnboundFramebuffer(FU)
      }
      setTexture(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(UU, XU, zU), this._bindTextureRenderTarget(UU, XU)
      }
      setLayerAndFaceIndices(UU, XU) {
        if (super.setLayerAndFaceIndices(UU, XU), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const zU = this._attachments?.length ?? this.textures.length;
        for (let cU = 0; cU < zU; cU++) {
          const UU = this.textures[cU];
          UU && (UU.is2DArray || UU.is3D ? this._bindTextureRenderTarget(UU, cU, this.layerIndices[cU]) : UU.isCube ? this._bindTextureRenderTarget(UU, cU, this.faceIndices[cU]) : this._bindTextureRenderTarget(UU, cU))
        }
      }
      setLayerAndFaceIndex() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(UU, XU, zU), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const cU = this.textures[UU];
        cU.is2DArray || cU.is3D ? this._bindTextureRenderTarget(this.textures[UU], UU, this.layerIndices[UU]) : cU.isCube && this._bindTextureRenderTarget(this.textures[UU], UU, this.faceIndices[UU])
      }
      resolveMSAATextures() {
        const UU = this._engine,
          XU = UU._currentFramebuffer;
        UU._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), UU._bindUnboundFramebuffer(XU)
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const XU = this._context;
        UU || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (XU.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (XU.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (XU.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(UU)
      }
    }
    let DU = !1;
    DU || (DU = !0, QU.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(UU, XU, zU) {
      const cU = new oU(UU, XU, zU, this, this._gl);
      return this._renderTargetWrapperCache.push(cU), cU
    }, QU.ThinEngine.prototype.createRenderTargetTexture = function(UU, XU) {
      const zU = this._createHardwareRenderTargetWrapper(!1, !1, UU);
      let cU, yU, QU = !0,
        AU = !1,
        FU = !1,
        oU = 1;
      void 0 !== XU && "object" === typeof XU && (QU = XU.generateDepthBuffer ?? !0, AU = !!XU.generateStencilBuffer, FU = !!XU.noColorAttachment, cU = XU.colorAttachment, oU = XU.samples ?? 1, yU = XU.label);
      const DU = cU || (FU ? null : this._createInternalTexture(UU, XU, !0, 5)),
        EU = UU.width || UU,
        YU = UU.height || UU,
        NU = this._currentFramebuffer,
        IU = this._gl,
        pU = IU.createFramebuffer();
      if (this._bindUnboundFramebuffer(pU), zU._depthStencilBuffer = this._setupFramebufferDepthAttachments(AU, QU, EU, YU), !DU || DU.is2DArray || DU.is3D || IU.framebufferTexture2D(IU.FRAMEBUFFER, IU.COLOR_ATTACHMENT0, IU.TEXTURE_2D, DU._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(NU), zU.label = yU ?? "RenderTargetWrapper", zU._framebuffer = pU, zU._generateDepthBuffer = QU, zU._generateStencilBuffer = AU, zU.setTextures(DU), cU) {
        if (zU._samples = cU.samples, cU.samples > 1) {
          const UU = cU._hardwareTexture.getMSAARenderBuffer(0);
          zU._MSAAFramebuffer = IU.createFramebuffer(), this._bindUnboundFramebuffer(zU._MSAAFramebuffer), IU.framebufferRenderbuffer(IU.FRAMEBUFFER, IU.COLOR_ATTACHMENT0, IU.RENDERBUFFER, UU), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(zU, oU);
      return zU
    }, QU.ThinEngine.prototype._createDepthStencilTexture = function(UU, XU, zU) {
      const QU = this._gl,
        AU = UU.layers || 0,
        oU = UU.depth || 0;
      let DU = QU.TEXTURE_2D;
      0 !== AU ? DU = QU.TEXTURE_2D_ARRAY : 0 !== oU && (DU = QU.TEXTURE_3D);
      const EU = new cU.e(this, 12);
      if (EU.label = XU.label, !this._caps.depthTextureExtension) return yU.b.Error("Depth texture is not supported by your browser or hardware."), EU;
      const YU = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...XU
      };
      if (this._bindTextureDirectly(DU, EU, !0), this._setupDepthStencilTexture(EU, UU, 0 !== YU.comparisonFunction && YU.bilinearFiltering, YU.comparisonFunction, YU.samples), void 0 !== YU.depthTextureFormat) {
        if (15 !== YU.depthTextureFormat && 16 !== YU.depthTextureFormat && 17 !== YU.depthTextureFormat && 13 !== YU.depthTextureFormat && 14 !== YU.depthTextureFormat && 18 !== YU.depthTextureFormat) return yU.b.Error(`Depth texture ${YU.depthTextureFormat} format is not supported.`), EU;
        EU.format = YU.depthTextureFormat
      } else EU.format = YU.generateStencil ? 13 : 16;
      const NU = (0, FU.c)(EU.format),
        IU = this._getWebGLTextureTypeFromDepthTextureFormat(EU.format),
        pU = NU ? QU.DEPTH_STENCIL : QU.DEPTH_COMPONENT,
        aU = this._getInternalFormatFromDepthTextureFormat(EU.format, !0, NU);
      return EU.is2DArray ? QU.texImage3D(DU, 0, aU, EU.width, EU.height, AU, 0, pU, IU, null) : EU.is3D ? QU.texImage3D(DU, 0, aU, EU.width, EU.height, oU, 0, pU, IU, null) : QU.texImage2D(DU, 0, aU, EU.width, EU.height, 0, pU, IU, null), this._bindTextureDirectly(DU, null), this._internalTexturesCache.push(EU), zU._depthStencilBuffer && (QU.deleteRenderbuffer(zU._depthStencilBuffer), zU._depthStencilBuffer = null), this._bindUnboundFramebuffer(zU._MSAAFramebuffer ?? zU._framebuffer), zU._generateStencilBuffer = NU, zU._depthStencilTextureWithStencil = NU, zU._depthStencilBuffer = this._setupFramebufferDepthAttachments(zU._generateStencilBuffer, zU._generateDepthBuffer, zU.width, zU.height, zU.samples, EU.format), this._bindUnboundFramebuffer(null), EU
    }, QU.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(UU, XU) {
      if (this.Fa < 2 || !UU) return 1;
      if (UU.samples === XU) return XU;
      const zU = this._gl;
      XU = Math.min(XU, this.getCaps().maxMSAASamples), UU._depthStencilBuffer && (zU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = null), UU._MSAAFramebuffer && (zU.deleteFramebuffer(UU._MSAAFramebuffer), UU._MSAAFramebuffer = null);
      const cU = UU.texture?._hardwareTexture;
      if (cU?.releaseMSAARenderBuffers(), UU.texture && XU > 1 && "function" === typeof zU.renderbufferStorageMultisample) {
        const yU = zU.createFramebuffer();
        if (!yU) throw new Error("Unable to create multi sampled framebuffer");
        UU._MSAAFramebuffer = yU, this._bindUnboundFramebuffer(UU._MSAAFramebuffer);
        const QU = this._createRenderBuffer(UU.texture.width, UU.texture.height, XU, -1, this._getRGBABufferInternalSizedFormat(UU.texture.type, UU.texture.format, UU.texture._useSRGBBuffer), zU.COLOR_ATTACHMENT0, !1);
        if (!QU) throw new Error("Unable to create multi sampled framebuffer");
        cU?.addMSAARenderBuffer(QU)
      }
      this._bindUnboundFramebuffer(UU._MSAAFramebuffer ?? UU._framebuffer), UU.texture && (UU.texture.samples = XU), UU._samples = XU;
      const yU = UU._depthStencilTexture ? UU._depthStencilTexture.format : void 0;
      return UU._depthStencilBuffer = this._setupFramebufferDepthAttachments(UU._generateStencilBuffer, UU._generateDepthBuffer, UU.width, UU.height, XU, yU), this._bindUnboundFramebuffer(null), XU
    }, QU.ThinEngine.prototype._setupDepthStencilTexture = function(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const QU = XU.width ?? XU,
        AU = XU.height ?? XU,
        FU = XU.layers || 0,
        oU = XU.depth || 0;
      UU.baseWidth = QU, UU.baseHeight = AU, UU.width = QU, UU.height = AU, UU.is2DArray = FU > 0, UU.depth = FU || oU, UU.isReady = !0, UU.samples = yU, UU.generateMipMaps = !1, UU.samplingMode = zU ? 2 : 1, UU.type = 0, UU._comparisonFunction = cU;
      const DU = this._gl,
        EU = this._getTextureTarget(UU),
        YU = this._getSamplingParameters(UU.samplingMode, !1);
      DU.texParameteri(EU, DU.TEXTURE_MAG_FILTER, YU.mag), DU.texParameteri(EU, DU.TEXTURE_MIN_FILTER, YU.min), DU.texParameteri(EU, DU.TEXTURE_WRAP_S, DU.CLAMP_TO_EDGE), DU.texParameteri(EU, DU.TEXTURE_WRAP_T, DU.CLAMP_TO_EDGE), this.Fa > 1 && (0 === cU ? (DU.texParameteri(EU, DU.TEXTURE_COMPARE_FUNC, 515), DU.texParameteri(EU, DU.TEXTURE_COMPARE_MODE, DU.NONE)) : (DU.texParameteri(EU, DU.TEXTURE_COMPARE_FUNC, cU), DU.texParameteri(EU, DU.TEXTURE_COMPARE_MODE, DU.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40929: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU.b
    });
    var cU = zU(40934);
    (0, zU(41077).e)();
    var yU = zU(40948);
    let QU = !1;
    ! function() {
      if (QU) return;
      QU = !0;
      const UU = new WeakMap,
        XU = new WeakMap,
        zU = new WeakMap,
        cU = new WeakMap;
      yU.ThinEngine.prototype.getAlphaToCoverage = function() {
        return UU.get(this) ?? !1
      }, yU.ThinEngine.prototype.setAlphaToCoverage = function(zU) {
        (UU.get(this) !== zU || this._gl && XU.get(this) !== this._gl) && (UU.set(this, zU), this._gl && (zU ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), XU.set(this, this._gl)))
      }, Object.defineProperty(yU.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (cU.get(this) !== this._gl && (zU.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), cU.set(this, this._gl)), zU.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var AU = zU(40940),
      FU = zU(39493),
      oU = zU(41036);
    let DU = !1;
    ! function() {
      function UU(UU, XU, zU, cU) {
        let yU, QU = 1;
        1 === cU ? yU = new Float32Array(XU * zU * 4) : 2 === cU ? (yU = new Uint16Array(XU * zU * 4), QU = 15360) : yU = 7 === cU ? new Uint32Array(XU * zU * 4) : new Uint8Array(XU * zU * 4);
        for (let AU = 0; AU < XU; AU++)
          for (let cU = 0; cU < zU; cU++) {
            const zU = 3 * (cU * XU + AU),
              FU = 4 * (cU * XU + AU);
            yU[FU + 0] = UU[zU + 0], yU[FU + 1] = UU[zU + 1], yU[FU + 2] = UU[zU + 2], yU[FU + 3] = QU
          }
        return yU
      }

      function XU(UU) {
        return function(XU, zU, cU, yU, QU, FU, oU, DU) {
          let EU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            YU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const NU = UU ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            IU = UU ? 10 : 11,
            pU = new AU.e(this, IU);
          pU.baseWidth = zU, pU.baseHeight = cU, pU.baseDepth = yU, pU.width = zU, pU.height = cU, pU.depth = yU, pU.format = QU, pU.type = YU, pU.generateMipMaps = FU, pU.samplingMode = DU, UU ? pU.is3D = !0 : pU.is2DArray = !0, this._doNotHandleContextLost || (pU._bufferView = XU), UU ? this.updateRawTexture3D(pU, XU, QU, oU, EU, YU) : this.updateRawTexture2DArray(pU, XU, QU, oU, EU, YU), this._bindTextureDirectly(NU, pU, !0);
          const aU = this._getSamplingParameters(DU, FU);
          return this._gl.texParameteri(NU, this._gl.TEXTURE_MAG_FILTER, aU.mag), this._gl.texParameteri(NU, this._gl.TEXTURE_MIN_FILTER, aU.min), FU && this._gl.generateMipmap(NU), this._bindTextureDirectly(NU, null), this._internalTexturesCache.push(pU), pU
        }
      }

      function zU(UU) {
        return function(XU, zU, cU, yU) {
          let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const FU = UU ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            oU = this._getWebGLTextureType(AU),
            DU = this._getInternalFormat(cU),
            EU = this._getRGBABufferInternalSizedFormat(AU, cU);
          this._bindTextureDirectly(FU, XU, !0), this._unpackFlipY(void 0 === yU || !!yU), this._doNotHandleContextLost || (XU._bufferView = zU, XU.format = cU, XU.invertY = yU, XU._compression = QU), XU.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), QU && zU ? this._gl.compressedTexImage3D(FU, 0, this.getCaps().s3tc[QU], XU.width, XU.height, XU.depth, 0, zU) : this._gl.texImage3D(FU, 0, EU, XU.width, XU.height, XU.depth, 0, DU, oU, zU), XU.generateMipMaps && this._gl.generateMipmap(FU), this._bindTextureDirectly(FU, null), XU.isReady = !0
        }
      }
      DU || (DU = !0, yU.ThinEngine.prototype.updateRawTexture = function(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!UU) return;
        const FU = this._getRGBABufferInternalSizedFormat(QU, zU, AU),
          oU = this._getInternalFormat(zU),
          DU = this._getWebGLTextureType(QU);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, UU, !0), this._unpackFlipY(void 0 === cU || !!cU), this._doNotHandleContextLost || (UU._bufferView = XU, UU.format = zU, UU.type = QU, UU.invertY = cU, UU._compression = yU), UU.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), yU && XU ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[yU], UU.width, UU.height, 0, XU) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, FU, UU.width, UU.height, 0, oU, DU, XU), UU.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), UU.isReady = !0
      }, yU.ThinEngine.prototype.createRawTexture = function(UU, XU, zU, cU, yU, QU, FU) {
        let oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          EU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const YU = new AU.e(this, 3);
        YU.baseWidth = XU, YU.baseHeight = zU, YU.width = XU, YU.height = zU, YU.format = cU, YU.generateMipMaps = yU, YU.samplingMode = FU, YU.invertY = QU, YU._compression = oU, YU.type = DU, YU._useSRGBBuffer = this._getUseSRGBBuffer(EU, !yU), this._doNotHandleContextLost || (YU._bufferView = UU), this.updateRawTexture(YU, UU, cU, QU, oU, DU, YU._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, YU, !0);
        const NU = this._getSamplingParameters(FU, yU);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, NU.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, NU.min), yU && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(YU), YU
      }, yU.ThinEngine.prototype.createRawCubeTexture = function(UU, XU, zU, cU, yU, QU, DU) {
        let EU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const YU = this._gl,
          NU = new AU.e(this, 8);
        NU.isCube = !0, NU.format = zU, NU.type = cU, this._doNotHandleContextLost || (NU._bufferViewArray = UU);
        const IU = this._getWebGLTextureType(cU);
        let pU = this._getInternalFormat(zU);
        pU === YU.RGB && (pU = YU.RGBA), IU !== YU.FLOAT || this._caps.textureFloatLinearFiltering ? IU !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? IU !== YU.FLOAT || this._caps.textureFloatRender ? IU !== YU.HALF_FLOAT || this._caps.colorBufferFloat || (yU = !1, FU.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (yU = !1, FU.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (yU = !1, DU = 1, FU.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (yU = !1, DU = 1, FU.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const aU = XU,
          tU = aU;
        NU.width = aU, NU.height = tU, NU.invertY = QU, NU._compression = EU;
        if (!this.needPOTTextures || (0, oU.k)(NU.width) && (0, oU.k)(NU.height) || (yU = !1), UU) this.updateRawCubeTexture(NU, UU, zU, cU, QU, EU);
        else {
          const UU = this._getRGBABufferInternalSizedFormat(cU),
            XU = 0;
          this._bindTextureDirectly(YU.TEXTURE_CUBE_MAP, NU, !0);
          for (let zU = 0; zU < 6; zU++) EU ? YU.compressedTexImage2D(YU.TEXTURE_CUBE_MAP_POSITIVE_X + zU, XU, this.getCaps().s3tc[EU], NU.width, NU.height, 0, void 0) : YU.texImage2D(YU.TEXTURE_CUBE_MAP_POSITIVE_X + zU, XU, UU, NU.width, NU.height, 0, pU, IU, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, NU, !0), UU && yU && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const gU = this._getSamplingParameters(DU, yU);
        return YU.texParameteri(YU.TEXTURE_CUBE_MAP, YU.TEXTURE_MAG_FILTER, gU.mag), YU.texParameteri(YU.TEXTURE_CUBE_MAP, YU.TEXTURE_MIN_FILTER, gU.min), YU.texParameteri(YU.TEXTURE_CUBE_MAP, YU.TEXTURE_WRAP_S, YU.CLAMP_TO_EDGE), YU.texParameteri(YU.TEXTURE_CUBE_MAP, YU.TEXTURE_WRAP_T, YU.CLAMP_TO_EDGE), this._bindTextureDirectly(YU.TEXTURE_CUBE_MAP, null), NU.generateMipMaps = yU, NU.samplingMode = DU, NU.isReady = !0, NU
      }, yU.ThinEngine.prototype.updateRawCubeTexture = function(XU, zU, cU, yU, QU) {
        let AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        XU._bufferViewArray = zU, XU.format = cU, XU.type = yU, XU.invertY = QU, XU._compression = AU;
        const DU = this._gl,
          EU = this._getWebGLTextureType(yU);
        let YU = this._getInternalFormat(cU);
        const NU = this._getRGBABufferInternalSizedFormat(yU);
        let IU = !1;
        YU === DU.RGB && (YU = DU.RGBA, IU = !0), this._bindTextureDirectly(DU.TEXTURE_CUBE_MAP, XU, !0), this._unpackFlipY(void 0 === QU || !!QU), XU.width % 4 !== 0 && DU.pixelStorei(DU.UNPACK_ALIGNMENT, 1);
        for (let oU = 0; oU < 6; oU++) {
          let cU = zU[oU];
          AU ? DU.compressedTexImage2D(DU.TEXTURE_CUBE_MAP_POSITIVE_X + oU, FU, this.getCaps().s3tc[AU], XU.width, XU.height, 0, cU) : (IU && (cU = UU(cU, XU.width, XU.height, yU)), DU.texImage2D(DU.TEXTURE_CUBE_MAP_POSITIVE_X + oU, FU, NU, XU.width, XU.height, 0, YU, EU, cU))
        }(!this.needPOTTextures || (0, oU.k)(XU.width) && (0, oU.k)(XU.height)) && XU.generateMipMaps && 0 === FU && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), XU.isReady = !0
      }, yU.ThinEngine.prototype.createRawCubeTextureFromUrl = function(XU, zU, cU, yU, QU, AU, FU, oU) {
        let DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          YU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          NU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const IU = this._gl,
          pU = this.createRawCubeTexture(null, cU, yU, QU, !AU, NU, YU, null);
        zU?.addPendingData(pU), pU.url = XU, pU.isReady = !1, this._internalTexturesCache.push(pU);
        const aU = (UU, XU) => {
            zU?.removePendingData(pU), EU && EU(UU ? UU.status + " " + UU.statusText : "Failed to parse texture data", XU)
          },
          tU = async XU => {
            if (!pU._hardwareTexture) return;
            const cU = FU(XU);
            if (!cU) return;
            const AU = cU instanceof Promise ? await cU : cU,
              EU = pU.width;
            if (oU) {
              const XU = this._getWebGLTextureType(QU);
              let zU = this._getInternalFormat(yU);
              const cU = this._getRGBABufferInternalSizedFormat(QU);
              let FU = !1;
              zU === IU.RGB && (zU = IU.RGBA, FU = !0), this._bindTextureDirectly(IU.TEXTURE_CUBE_MAP, pU, !0), this._unpackFlipY(!1);
              const DU = oU(AU);
              for (let yU = 0; yU < DU.length; yU++) {
                const AU = EU >> yU;
                for (let oU = 0; oU < 6; oU++) {
                  let EU = DU[yU][oU];
                  FU && (EU = UU(EU, AU, AU, QU)), IU.texImage2D(oU, yU, cU, AU, AU, 0, zU, XU, EU)
                }
              }
              this._bindTextureDirectly(IU.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(pU, AU, yU, QU, NU);
            pU.isReady = !0, zU?.removePendingData(pU), pU.onLoadedObservable.notifyObservers(pU), pU.onLoadedObservable.clear(), DU && DU()
          };
        return this._loadFile(XU, (UU => {
          tU(UU).catch((UU => {
            aU(void 0, UU)
          }))
        }), void 0, zU?.offlineProvider, !0, aU), pU
      }, yU.ThinEngine.prototype.createRawTexture2DArray = XU(!1), yU.ThinEngine.prototype.createRawTexture3D = XU(!0), yU.ThinEngine.prototype.updateRawTexture2DArray = zU(!1), yU.ThinEngine.prototype.updateRawTexture3D = zU(!0))
    }();
    var EU = zU(40983);
    let YU = !1;
    YU || (YU = !0, yU.ThinEngine.prototype._readTexturePixelsSync = function(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        DU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const YU = this._gl;
      if (!YU) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const UU = YU.createFramebuffer();
        if (!UU) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = UU
      }
      YU.bindFramebuffer(YU.FRAMEBUFFER, this._dummyFramebuffer), cU > -1 && (UU.is2DArray || UU.is3D) ? YU.framebufferTextureLayer(YU.FRAMEBUFFER, YU.COLOR_ATTACHMENT0, UU._hardwareTexture?.underlyingResource, yU, cU) : cU > -1 ? YU.framebufferTexture2D(YU.FRAMEBUFFER, YU.COLOR_ATTACHMENT0, YU.TEXTURE_CUBE_MAP_POSITIVE_X + cU, UU._hardwareTexture?.underlyingResource, yU) : YU.framebufferTexture2D(YU.FRAMEBUFFER, YU.COLOR_ATTACHMENT0, YU.TEXTURE_2D, UU._hardwareTexture?.underlyingResource, yU);
      let NU = void 0 !== UU.type ? this._getWebGLTextureType(UU.type) : YU.UNSIGNED_BYTE;
      return FU ? QU || (QU = (0, EU.m)(UU.type, 4 * XU * zU)) : NU === YU.UNSIGNED_BYTE ? (QU || (QU = new Uint8Array(4 * XU * zU)), NU = YU.UNSIGNED_BYTE) : (QU || (QU = new Float32Array(4 * XU * zU)), NU = YU.FLOAT), AU && this.flushFramebuffer(), YU.readPixels(oU, DU, XU, zU, YU.RGBA, NU, QU), YU.bindFramebuffer(YU.FRAMEBUFFER, this._currentFramebuffer), QU
    }, yU.ThinEngine.prototype._readTexturePixels = function(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        DU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU))
    }), (0, zU(41085).c)();
    let NU = !1;
    NU || (NU = !0, yU.ThinEngine.prototype._createDepthStencilCubeTexture = function(UU, XU) {
      const zU = new AU.e(this, 12);
      if (zU.isCube = !0, 1 === this.Fa) return FU.b.Error("Depth cube texture is not supported by WebGL 1."), zU;
      const cU = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...XU
        },
        yU = this._gl;
      this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, zU, !0), this._setupDepthStencilTexture(zU, UU, cU.bilinearFiltering, cU.comparisonFunction);
      for (let QU = 0; QU < 6; QU++) cU.generateStencil ? yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + QU, 0, yU.DEPTH24_STENCIL8, UU, UU, 0, yU.DEPTH_STENCIL, yU.UNSIGNED_INT_24_8, null) : yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + QU, 0, yU.DEPTH_COMPONENT24, UU, UU, 0, yU.DEPTH_COMPONENT, yU.UNSIGNED_INT, null);
      return this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(zU), zU
    }, yU.ThinEngine.prototype._setCubeMapTextureParams = function(UU, XU, zU) {
      const cU = this._gl;
      cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_MAG_FILTER, cU.LINEAR), cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_MIN_FILTER, XU ? cU.LINEAR_MIPMAP_LINEAR : cU.LINEAR), cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_WRAP_S, cU.CLAMP_TO_EDGE), cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_WRAP_T, cU.CLAMP_TO_EDGE), UU.samplingMode = XU ? 3 : 2, XU && this.getCaps().textureMaxLevel && void 0 !== zU && zU > 0 && (cU.texParameteri(cU.TEXTURE_CUBE_MAP, cU.TEXTURE_MAX_LEVEL, zU), UU._maxLodLevel = zU), this._bindTextureDirectly(cU.TEXTURE_CUBE_MAP, null)
    }, yU.ThinEngine.prototype.createCubeTexture = function(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        AU = arguments.length > 6 ? arguments[6] : void 0,
        DU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        EU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        NU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        IU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        pU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        aU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const tU = this._gl;
      return this.createCubeTextureBase(UU, XU, zU, !!cU, yU, QU, AU, DU, EU, YU, NU, IU, (UU => this._bindTextureDirectly(tU.TEXTURE_CUBE_MAP, UU, !0)), ((UU, XU) => {
        const zU = this.needPOTTextures ? (0, oU.g)(XU[0].width, this._caps.maxCubemapTextureSize) : XU[0].width,
          QU = zU,
          DU = [tU.TEXTURE_CUBE_MAP_POSITIVE_X, tU.TEXTURE_CUBE_MAP_POSITIVE_Y, tU.TEXTURE_CUBE_MAP_POSITIVE_Z, tU.TEXTURE_CUBE_MAP_NEGATIVE_X, tU.TEXTURE_CUBE_MAP_NEGATIVE_Y, tU.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(tU.TEXTURE_CUBE_MAP, UU, !0), this._unpackFlipY(!1);
        const EU = AU ? this._getInternalFormat(AU, UU._useSRGBBuffer) : UU._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : tU.RGBA;
        let YU = AU ? this._getInternalFormat(AU) : tU.RGBA;
        UU._useSRGBBuffer && 1 === this.Fa && (YU = EU);
        for (let cU = 0; cU < DU.length; cU++)
          if (XU[cU].width !== zU || XU[cU].height !== QU) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void FU.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = zU, this._workingCanvas.height = QU, this._workingContext.drawImage(XU[cU], 0, 0, XU[cU].width, XU[cU].height, 0, 0, zU, QU), tU.texImage2D(DU[cU], 0, EU, YU, tU.UNSIGNED_BYTE, this._workingCanvas)
          } else tU.texImage2D(DU[cU], 0, EU, YU, tU.UNSIGNED_BYTE, XU[cU]);
        cU || tU.generateMipmap(tU.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(UU, !cU), UU.width = zU, UU.height = QU, UU.isReady = !0, AU && (UU.format = AU), UU.onLoadedObservable.notifyObservers(UU), UU.onLoadedObservable.clear(), yU && yU()
      }), !!pU, aU)
    }, yU.ThinEngine.prototype.generateMipMapsForCubemap = function(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU.generateMipMaps) {
        const zU = this._gl;
        this._bindTextureDirectly(zU.TEXTURE_CUBE_MAP, UU, !0), zU.generateMipmap(zU.TEXTURE_CUBE_MAP), XU && this._bindTextureDirectly(zU.TEXTURE_CUBE_MAP, null)
      }
    });
    zU(41093);
    let IU = !1;
    IU || (IU = !0, yU.ThinEngine.prototype.setDepthStencilTexture = function(UU, XU, zU, cU) {
      void 0 !== UU && (XU && (this._boundUniforms[UU] = XU), zU && zU.depthStencilTexture ? this._setTexture(UU, zU, !1, !0, cU) : this._setTexture(UU, null, void 0, void 0, cU))
    });
    let pU = !1;
    pU || (pU = !0, yU.ThinEngine.prototype.createRenderTargetCubeTexture = function(UU, XU) {
      const zU = this._createHardwareRenderTargetWrapper(!1, !0, UU),
        cU = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...XU
        };
      cU.generateStencilBuffer = cU.generateDepthBuffer && cU.generateStencilBuffer, (1 !== cU.type || this._caps.textureFloatLinearFiltering) && (2 !== cU.type || this._caps.textureHalfFloatLinearFiltering) || (cU.samplingMode = 1);
      const yU = this._gl,
        QU = new AU.e(this, 5);
      this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, QU, !0);
      const oU = this._getSamplingParameters(cU.samplingMode, cU.generateMipMaps);
      1 !== cU.type || this._caps.textureFloat || (cU.type = 0, FU.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), yU.texParameteri(yU.TEXTURE_CUBE_MAP, yU.TEXTURE_MAG_FILTER, oU.mag), yU.texParameteri(yU.TEXTURE_CUBE_MAP, yU.TEXTURE_MIN_FILTER, oU.min), yU.texParameteri(yU.TEXTURE_CUBE_MAP, yU.TEXTURE_WRAP_S, yU.CLAMP_TO_EDGE), yU.texParameteri(yU.TEXTURE_CUBE_MAP, yU.TEXTURE_WRAP_T, yU.CLAMP_TO_EDGE);
      for (let AU = 0; AU < 6; AU++) yU.texImage2D(yU.TEXTURE_CUBE_MAP_POSITIVE_X + AU, 0, this._getRGBABufferInternalSizedFormat(cU.type, cU.format), UU, UU, 0, this._getInternalFormat(cU.format), this._getWebGLTextureType(cU.type), null);
      const DU = yU.createFramebuffer();
      return this._bindUnboundFramebuffer(DU), zU._depthStencilBuffer = this._setupFramebufferDepthAttachments(cU.generateStencilBuffer, cU.generateDepthBuffer, UU, UU), cU.generateMipMaps && yU.generateMipmap(yU.TEXTURE_CUBE_MAP), this._bindTextureDirectly(yU.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), zU._framebuffer = DU, zU._generateDepthBuffer = cU.generateDepthBuffer, zU._generateStencilBuffer = cU.generateStencilBuffer, QU.width = UU, QU.height = UU, QU.isReady = !0, QU.isCube = !0, QU.samples = 1, QU.generateMipMaps = cU.generateMipMaps, QU.samplingMode = cU.samplingMode, QU.type = cU.type, QU.format = cU.format, this._internalTexturesCache.push(QU), zU.setTextures(QU), zU
    });
    var aU = zU(41103),
      tU = zU(41108);
    let gU = !1;
    gU || (gU = !0, yU.ThinEngine.prototype.createPrefilteredCubeTexture = function(UU, XU, cU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        DU = arguments.length > 6 ? arguments[6] : void 0,
        EU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        YU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        NU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(UU, XU, null, !1, (async UU => {
        if (!UU) return void(QU && QU(null));
        const oU = UU.texture;
        if (YU ? UU.info.sphericalPolynomial && (oU._sphericalPolynomial = UU.info.sphericalPolynomial) : oU._sphericalPolynomial = oU._sphericalPolynomial ?? new aU.c, oU._source = 9, this.getCaps().textureLOD) return void(QU && QU(oU));
        const DU = this._gl,
          EU = UU.width;
        if (!EU) return;
        const {
          DDSTools: NU
        } = await zU.e(612).then((() => zU(44454))), IU = [];
        for (let zU = 0; zU < 3; zU++) {
          const QU = 1 - zU / 2,
            YU = yU,
            pU = Math.log2(EU) * cU + yU,
            aU = YU + (pU - YU) * QU,
            gU = Math.round(Math.min(Math.max(aU, 0), pU)),
            kU = new AU.e(this, 2);
          if (kU.type = oU.type, kU.format = oU.format, kU.width = Math.pow(2, Math.max(Math.log2(EU) - gU, 0)), kU.height = kU.width, kU.isCube = !0, kU._cachedWrapU = 0, kU._cachedWrapV = 0, this._bindTextureDirectly(DU.TEXTURE_CUBE_MAP, kU, !0), kU.samplingMode = 2, DU.texParameteri(DU.TEXTURE_CUBE_MAP, DU.TEXTURE_MAG_FILTER, DU.LINEAR), DU.texParameteri(DU.TEXTURE_CUBE_MAP, DU.TEXTURE_MIN_FILTER, DU.LINEAR), DU.texParameteri(DU.TEXTURE_CUBE_MAP, DU.TEXTURE_WRAP_S, DU.CLAMP_TO_EDGE), DU.texParameteri(DU.TEXTURE_CUBE_MAP, DU.TEXTURE_WRAP_T, DU.CLAMP_TO_EDGE), UU.isDDS) {
            const XU = UU.info,
              zU = UU.data;
            this._unpackFlipY(XU.isCompressed), NU.UploadDDSLevels(this, kU, zU, XU, !0, 6, gU)
          } else FU.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(DU.TEXTURE_CUBE_MAP, null);
          const GU = new tU.e(XU);
          GU._isCube = !0, GU._texture = kU, kU.isReady = !0, IU.push(GU)
        }
        oU._lodTextureHigh = IU[2], oU._lodTextureMid = IU[1], oU._lodTextureLow = IU[0], QU && QU(oU)
      }), oU, DU, EU, YU, cU, yU, null, void 0, !1, NU)
    });
    var kU = zU(41023);
    let GU = !1;
    GU || (GU = !0, yU.ThinEngine.prototype.createUniformBuffer = function(UU, XU) {
      const zU = this._gl.createBuffer();
      if (!zU) throw new Error("Unable to create uniform buffer");
      const cU = new kU.d(zU);
      return this.bindUniformBuffer(cU), UU instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, UU, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(UU), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), cU.references = 1, cU
    }, yU.ThinEngine.prototype.createDynamicUniformBuffer = function(UU, XU) {
      const zU = this._gl.createBuffer();
      if (!zU) throw new Error("Unable to create dynamic uniform buffer");
      const cU = new kU.d(zU);
      return this.bindUniformBuffer(cU), UU instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, UU, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(UU), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), cU.references = 1, cU
    }, yU.ThinEngine.prototype.updateUniformBuffer = function(UU, XU, zU, cU) {
      this.bindUniformBuffer(UU), void 0 === zU && (zU = 0), void 0 === cU ? XU instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, zU, XU) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, zU, new Float32Array(XU)) : XU instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, XU.subarray(zU, zU + cU)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(XU).subarray(zU, zU + cU)), this.bindUniformBuffer(null)
    }, yU.ThinEngine.prototype.bindUniformBuffer = function(UU) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, UU ? UU.underlyingResource : null)
    }, yU.ThinEngine.prototype.bindUniformBufferBase = function(UU, XU, zU) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, XU, UU ? UU.underlyingResource : null)
    }, yU.ThinEngine.prototype.bindUniformBlock = function(UU, XU, zU) {
      const cU = UU.program,
        yU = this._gl.getUniformBlockIndex(cU, XU);
      4294967295 !== yU && this._gl.uniformBlockBinding(cU, yU, zU)
    });
    var BU = zU(40971),
      ZU = zU(41003);
    let RU = !1;
    RU || (RU = !0, ZU.c.prototype.displayLoadingUI = function() {
      if (!(0, BU.h)()) return;
      const UU = this.loadingScreen;
      UU && UU.displayLoadingUI()
    }, ZU.c.prototype.hideLoadingUI = function() {
      if (!(0, BU.h)()) return;
      const UU = this._loadingScreen;
      UU && UU.hideLoadingUI()
    }, Object.defineProperty(ZU.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = ZU.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(UU) {
        this._loadingScreen = UU
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ZU.c.prototype, "loadingUIText", {
      set: function(UU) {
        this.loadingScreen.loadingUIText = UU
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(ZU.c.prototype, "loadingUIBackgroundColor", {
      set: function(UU) {
        this.loadingScreen.loadingUIBackgroundColor = UU
      },
      enumerable: !0,
      configurable: !0
    })), (0, zU(41061).e)();
    let PU = !1;
    PU || (PU = !0, ZU.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, ZU.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, ZU.c.prototype.setDepthFunction = function(UU) {
      this._depthCullingState.depthFunc = UU
    }, ZU.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, ZU.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, ZU.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, ZU.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, ZU.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, ZU.c.prototype.setDepthWrite = function(UU) {
      this._depthCullingState.depthMask = UU
    }, ZU.c.prototype.setAlphaConstants = function(UU, XU, zU, cU) {
      this._alphaState.setAlphaBlendConstants(UU, XU, zU, cU)
    }, ZU.c.prototype.getAlphaMode = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[UU]
    }, ZU.c.prototype.getAlphaEquation = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[UU]
    });
    let WU = !1;
    WU || (WU = !0, ZU.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, ZU.c.prototype.setStencilBuffer = function(UU) {
      this._stencilState.stencilTest = UU
    }, ZU.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, ZU.c.prototype.setStencilMask = function(UU) {
      this._stencilState.stencilMask = UU
    }, ZU.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, ZU.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, ZU.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, ZU.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, ZU.c.prototype.setStencilFunction = function(UU) {
      this._stencilState.stencilFunc = UU
    }, ZU.c.prototype.setStencilBackFunction = function(UU) {
      this._stencilState.stencilBackFunc = UU
    }, ZU.c.prototype.setStencilFunctionReference = function(UU) {
      this._stencilState.stencilFuncRef = UU
    }, ZU.c.prototype.setStencilFunctionMask = function(UU) {
      this._stencilState.stencilFuncMask = UU
    }, ZU.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, ZU.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, ZU.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, ZU.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, ZU.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, ZU.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, ZU.c.prototype.setStencilOperationFail = function(UU) {
      this._stencilState.stencilOpStencilFail = UU
    }, ZU.c.prototype.setStencilBackOperationFail = function(UU) {
      this._stencilState.stencilBackOpStencilFail = UU
    }, ZU.c.prototype.setStencilOperationDepthFail = function(UU) {
      this._stencilState.stencilOpDepthFail = UU
    }, ZU.c.prototype.setStencilBackOperationDepthFail = function(UU) {
      this._stencilState.stencilBackOpDepthFail = UU
    }, ZU.c.prototype.setStencilOperationPass = function(UU) {
      this._stencilState.stencilOpStencilDepthPass = UU
    }, ZU.c.prototype.setStencilBackOperationPass = function(UU) {
      this._stencilState.stencilBackOpStencilDepthPass = UU
    }, ZU.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, ZU.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    zU(41146);
    let dU = !1;
    dU || (dU = !0, ZU.c.prototype.createDepthStencilTexture = function(UU, XU, zU) {
      if (XU.isCube) {
        const zU = UU.width || UU;
        return this._createDepthStencilCubeTexture(zU, XU)
      }
      return this._createDepthStencilTexture(UU, XU, zU)
    });
    zU(41148), zU(41188);
    let LU = !1;
    LU || (LU = !0, yU.ThinEngine.prototype.enableScissor = function(UU, XU, zU, cU) {
      const yU = this._gl;
      yU.enable(yU.SCISSOR_TEST), yU.scissor(UU, XU, zU, cU)
    }, yU.ThinEngine.prototype.disableScissor = function() {
      const UU = this._gl;
      UU.disable(UU.SCISSOR_TEST)
    })
  },
  40934: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => ZU
    });
    var cU = zU(40940),
      yU = zU(37841),
      QU = zU(40948),
      AU = zU(41010);
    class FU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new oU(UU)
      }
      sampleFrame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const XU = UU - this._lastFrameTimeMs;
            this._rollingFrameTime.add(XU)
          }
          this._lastFrameTimeMs = UU
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
        const UU = this._rollingFrameTime.history(0);
        return 0 === UU ? 0 : 1e3 / UU
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
    class oU {
      constructor(UU) {
        this._samples = new Array(UU), this.reset()
      }
      add(UU) {
        let XU;
        if (this.isSaturated()) {
          const UU = this._samples[this._pos];
          XU = UU - this.average, this.average -= XU / (this._sampleCount - 1), this._m2 -= XU * (UU - this.average)
        } else this._sampleCount++;
        XU = UU - this.average, this.average += XU / this._sampleCount, this._m2 += XU * (UU - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = UU, this._pos++, this._pos %= this._samples.length
      }
      history(UU) {
        if (UU >= this._sampleCount || UU >= this._samples.length) return 0;
        const XU = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(XU - UU)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(UU) {
        const XU = this._samples.length;
        return (UU % XU + XU) % XU
      }
    }
    var DU = zU(41023),
      EU = zU(39493),
      YU = zU(41042),
      NU = zU(41003),
      IU = zU(40971);

    function pU(UU) {
      const XU = function(UU) {
        if (!(0, IU.c)() || !document.body) return null;
        const XU = document.createElement("span");
        XU.textContent = "Hg", XU.style.font = UU;
        const zU = document.createElement("div");
        zU.style.display = "inline-block", zU.style.width = "1px", zU.style.height = "0px", zU.style.verticalAlign = "bottom";
        const cU = document.createElement("div");
        let yU, QU;
        cU.style.whiteSpace = "nowrap", cU.appendChild(XU), cU.appendChild(zU), document.body.appendChild(cU);
        try {
          QU = zU.getBoundingClientRect().top - XU.getBoundingClientRect().top, zU.style.verticalAlign = "baseline", yU = zU.getBoundingClientRect().top - XU.getBoundingClientRect().top
        } finally {
          document.body.removeChild(cU)
        }
        const AU = {
          ascent: yU,
          height: QU,
          descent: QU - yU
        };
        return aU(AU) ? AU : null
      }(UU);
      if (XU) return XU;
      const zU = function(UU) {
        let XU = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? XU = new OffscreenCanvas(64, 64) : (0, IU.c)() && "function" === typeof document.createElement && (XU = document.createElement("canvas"), XU.width = 64, XU.height = 64);
          const zU = XU?.getContext("2d");
          if (!zU) return null;
          zU.font = UU;
          const cU = zU.measureText("Hg"),
            yU = Number(cU.actualBoundingBoxAscent ?? cU.fontBoundingBoxAscent),
            QU = Number(cU.actualBoundingBoxDescent ?? cU.fontBoundingBoxDescent),
            AU = {
              ascent: yU,
              height: yU + QU,
              descent: QU
            };
          return aU(AU) ? AU : null
        } catch {
          return null
        } finally {
          const UU = XU;
          "function" === typeof UU?.dispose && UU.dispose()
        }
      }(UU);
      return zU || function(UU) {
        const XU = Math.max(1, function(UU) {
            const XU = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(UU || ""));
            return XU ? Number(XU[1]) : 16
          }(UU)),
          zU = .8 * XU,
          cU = .2 * XU;
        return {
          ascent: zU,
          height: zU + cU,
          descent: cU
        }
      }(UU)
    }

    function aU(UU) {
      return Number.isFinite(UU.ascent) && Number.isFinite(UU.height) && Number.isFinite(UU.descent) && UU.height > 0
    }

    function tU(UU) {
      if (UU.requestPointerLock) {
        const XU = UU.requestPointerLock();
        XU instanceof Promise ? XU.then((() => {
          UU.focus()
        })).catch((() => {})) : UU.focus()
      }
    }
    var gU = zU(41052),
      kU = zU(40999),
      GU = zU(41061),
      BU = zU(41068);
    class ZU extends QU.ThinEngine {
      static get NpmPackage() {
        return NU.c.NpmPackage
      }
      static get Version() {
        return NU.c.Version
      }
      static get Instances() {
        return yU.b.Instances
      }
      static get LastCreatedEngine() {
        return yU.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return yU.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(UU) {
        return NU.c.DefaultLoadingScreenFactory(UU)
      }
      get _supportsHardwareTextureRescaling() {
        return !!ZU._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, GU.e)(), (0, BU.e)(), super(UU, XU, zU, cU), this._performanceMonitor = new FU, this._drawCalls = new gU.b, UU && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(UU) {
        super._sharedInit(UU),
          function(UU, XU, zU) {
            UU._onCanvasFocus = () => {
              UU.onCanvasFocusObservable.notifyObservers(UU)
            }, UU._onCanvasBlur = () => {
              UU.onCanvasBlurObservable.notifyObservers(UU)
            }, UU._onCanvasContextMenu = XU => {
              UU.disableContextMenu && XU.preventDefault()
            }, XU.addEventListener("focus", UU._onCanvasFocus), XU.addEventListener("blur", UU._onCanvasBlur), XU.addEventListener("contextmenu", UU._onCanvasContextMenu), UU._onBlur = () => {
              UU.disablePerformanceMonitorInBackground && UU.performanceMonitor.disable(), UU._windowIsBackground = !0
            }, UU._onFocus = () => {
              UU.disablePerformanceMonitorInBackground && UU.performanceMonitor.enable(), UU._windowIsBackground = !1
            }, UU._onCanvasPointerOut = zU => {
              document.elementFromPoint(zU.clientX, zU.clientY) !== XU && UU.onCanvasPointerOutObservable.notifyObservers(zU)
            };
            const cU = UU.getHostWindow();
            cU && "function" === typeof cU.addEventListener && (cU.addEventListener("blur", UU._onBlur), cU.addEventListener("focus", UU._onFocus)), XU.addEventListener("pointerout", UU._onCanvasPointerOut), zU.doNotHandleTouchAction || function(UU) {
              UU && UU.setAttribute && (UU.setAttribute("touch-action", "none"), UU.style.touchAction = "none", UU.style.webkitTapHighlightColor = "transparent")
            }(XU), !NU.c.audioEngine && zU.audioEngine && NU.c.AudioEngineFactory && (NU.c.audioEngine = NU.c.AudioEngineFactory(UU.getRenderingCanvas(), UU.getAudioContext(), UU.getAudioDestination())), (0, IU.c)() && (UU._onFullscreenChange = () => {
              UU.isFullscreen = !!document.fullscreenElement, UU.isFullscreen && UU._pointerLockRequested && XU && tU(XU)
            }, document.addEventListener("fullscreenchange", UU._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", UU._onFullscreenChange, !1), UU._onPointerLockChange = () => {
              UU.isPointerLock = document.pointerLockElement === XU
            }, document.addEventListener("pointerlockchange", UU._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", UU._onPointerLockChange, !1)), UU.enableOfflineSupport = void 0 !== NU.c.OfflineProviderFactory, UU._deterministicLockstep = !!zU.deterministicLockstep, UU._lockstepMaxSteps = zU.lockstepMaxSteps || 0, UU._timeStep = zU.timeStep || 1 / 60
          }(this, UU, this._creationOptions)
      }
      resizeImageBitmap(UU, XU, zU) {
        return function(UU, XU, zU, cU) {
          const yU = UU.createCanvas(zU, cU).getContext("2d");
          if (!yU) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return yU.drawImage(XU, 0, 0), yU.getImageData(0, 0, zU, cU).data
        }(this, UU, XU, zU)
      }
      async _createImageBitmapFromSource(UU, XU) {
        return await async function(UU, XU, zU) {
          return await new Promise(((cU, yU) => {
            const QU = new Image;
            QU.onload = () => {
              QU.decode().then((() => {
                UU.createImageBitmap(QU, zU).then((UU => {
                  cU(UU)
                }))
              }))
            }, QU.onerror = () => {
              yU(`Error loading image ${QU.src}`)
            }, QU.src = XU
          }))
        }(this, UU, XU)
      }
      switchFullscreen(UU) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(UU)
      }
      enterFullscreen(UU) {
        this.isFullscreen || (this._pointerLockRequested = UU, this._renderingCanvas && function(UU) {
          const XU = UU.requestFullscreen || UU.webkitRequestFullscreen;
          XU && XU.call(UU)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const UU = document;
          document.exitFullscreen ? document.exitFullscreen() : UU.webkitCancelFullScreen && UU.webkitCancelFullScreen()
        }()
      }
      setDitheringState(UU) {
        UU ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(UU) {
        UU ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(UU, XU, zU, cU) {
        const yU = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(UU, XU, zU, cU), yU
      }
      scissorClear(UU, XU, zU, cU, yU) {
        this.enableScissor(UU, XU, zU, cU), this.clear(yU, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(UU) {
        const XU = this._gl.getAttachedShaders(UU);
        return XU ? this._gl.getShaderSource(XU[0]) : null
      }
      getFragmentShaderSource(UU) {
        const XU = this._gl.getAttachedShaders(UU);
        return XU ? this._gl.getShaderSource(XU[1]) : null
      }
      set framebufferDimensionsObject(UU) {
        this._framebufferDimensionsObject = UU, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const UU of this.scenes) UU.resetCachedMaterial(), UU._rebuildGeometries();
        for (const UU of this._virtualScenes) UU.resetCachedMaterial(), UU._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(UU) {
        return pU(UU)
      }
      enterPointerlock() {
        this._renderingCanvas && tU(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      zB() {
        this._measureFps(), super.zB()
      }
      _deletePipelineContext(UU) {
        const XU = UU;
        XU && XU.program && XU.transformFeedback && (this.deleteTransformFeedback(XU.transformFeedback), XU.transformFeedback = null), super._deletePipelineContext(UU)
      }
      createShaderProgram(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        yU = yU || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const AU = super.createShaderProgram(UU, XU, zU, cU, yU, QU);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), AU
      }
      _createShaderProgram(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const QU = cU.createProgram();
        if (UU.program = QU, !QU) throw new Error("Unable to create program");
        if (cU.attachShader(QU, XU), cU.attachShader(QU, zU), this.Fa > 1 && yU) {
          const XU = this.createTransformFeedback();
          this.bindTransformFeedback(XU), this.setTranformFeedbackVaryings(QU, yU), UU.transformFeedback = XU
        }
        return cU.linkProgram(QU), this.Fa > 1 && yU && this.bindTransformFeedback(null), UU.context = cU, UU.vertexShader = XU, UU.fragmentShader = zU, UU.isParallelCompiled || this._finalizePipelineContext(UU), QU
      }
      _releaseTexture(UU) {
        super._releaseTexture(UU)
      }
      _releaseRenderTargetWrapper(UU) {
        super._releaseRenderTargetWrapper(UU);
        for (const XU of this.scenes) {
          for (const zU of XU.postProcesses) zU._outputTexture === UU && (zU._outputTexture = null);
          for (const zU of XU.cameras)
            for (const XU of zU._postProcesses) XU && XU._outputTexture === UU && (XU._outputTexture = null)
        }
      }
      _rescaleTexture(UU, XU, zU, cU, yU) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const QU = this.createRenderTargetTexture({
          width: XU.width,
          height: XU.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && ZU._RescalePostProcessFactory && (this._rescalePostProcess = ZU._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const AU = () => {
              this._rescalePostProcess.onApply = function(XU) {
                XU._bindTexture("textureSampler", UU)
              };
              let AU = zU;
              AU || (AU = this.scenes[this.scenes.length - 1]), AU.postProcessManager.directRender([this._rescalePostProcess], QU, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, XU, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, cU, 0, 0, XU.width, XU.height, 0), this.unBindFramebuffer(QU), QU.dispose(), yU && yU()
            },
            FU = this._rescalePostProcess.getEffect();
          FU ? FU.executeWhenCompiled(AU) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((UU => {
            UU.executeWhenCompiled(AU)
          }))
        }
      }
      wrapWebGLTexture(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const AU = new YU.e(UU, this._gl),
          FU = new cU.e(this, 15, !0);
        return FU._hardwareTexture = AU, FU.baseWidth = yU, FU.baseHeight = QU, FU.width = yU, FU.height = QU, FU.isReady = !0, FU.useMipMaps = XU, this.updateTextureSamplingMode(zU, FU), FU
      }
      updateWrappedWebGLTexture(UU, XU) {
        if (15 !== UU.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const cU of this._renderTargetWrapperCache)
          if (cU.textures?.includes(UU)) {
            if (cU.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (cU._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } UU._hardwareTexture = new YU.e(XU, this._gl), UU.isReady = !0, UU._cachedCoordinatesMode = null, UU._cachedWrapU = null, UU._cachedWrapV = null, UU._cachedWrapR = null, UU._cachedAnisotropicFilteringLevel = null;
        for (const cU in this._boundTexturesCache) this._boundTexturesCache[cU] === UU && (this._boundTexturesCache[cU] = null);
        this.updateTextureSamplingMode(UU.samplingMode, UU);
        const zU = this._gl;
        for (const cU of this._renderTargetWrapperCache) {
          if (cU.texture !== UU) continue;
          const yU = cU,
            QU = cU.samples,
            AU = QU > 1;
          yU._framebuffer && zU.deleteFramebuffer(yU._framebuffer), !AU && yU._depthStencilBuffer && (zU.deleteRenderbuffer(yU._depthStencilBuffer), yU._depthStencilBuffer = null);
          const FU = this._currentFramebuffer,
            oU = zU.createFramebuffer();
          this._bindUnboundFramebuffer(oU), zU.framebufferTexture2D(zU.FRAMEBUFFER, zU.COLOR_ATTACHMENT0, zU.TEXTURE_2D, XU, 0), AU || (yU._depthStencilBuffer = this._setupFramebufferDepthAttachments(cU._generateStencilBuffer, cU._generateDepthBuffer, cU.width, cU.height)), this._bindUnboundFramebuffer(FU), yU._framebuffer = oU, AU && (cU._samples = 1, this.updateRenderTargetTextureSampleCount(yU, QU))
        }
      }
      _uploadImageToTexture(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yU = this._gl,
          QU = this._getWebGLTextureType(UU.type),
          AU = this._getInternalFormat(UU.format),
          FU = this._getRGBABufferInternalSizedFormat(UU.type, AU),
          oU = UU.isCube ? yU.TEXTURE_CUBE_MAP : yU.TEXTURE_2D;
        this._bindTextureDirectly(oU, UU, !0), this._unpackFlipY(UU.invertY);
        let DU = yU.TEXTURE_2D;
        UU.isCube && (DU = yU.TEXTURE_CUBE_MAP_POSITIVE_X + zU), yU.texImage2D(DU, cU, FU, AU, QU, XU), this._bindTextureDirectly(oU, null, !0)
      }
      updateTextureComparisonFunction(UU, XU) {
        if (1 === this.Fa) return void EU.b.Error("WebGL 1 does not support texture comparison.");
        const zU = this._gl;
        UU.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, UU, !0), 0 === XU ? (zU.texParameteri(zU.TEXTURE_CUBE_MAP, zU.TEXTURE_COMPARE_FUNC, 515), zU.texParameteri(zU.TEXTURE_CUBE_MAP, zU.TEXTURE_COMPARE_MODE, zU.NONE)) : (zU.texParameteri(zU.TEXTURE_CUBE_MAP, zU.TEXTURE_COMPARE_FUNC, XU), zU.texParameteri(zU.TEXTURE_CUBE_MAP, zU.TEXTURE_COMPARE_MODE, zU.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, UU, !0), 0 === XU ? (zU.texParameteri(zU.TEXTURE_2D, zU.TEXTURE_COMPARE_FUNC, 515), zU.texParameteri(zU.TEXTURE_2D, zU.TEXTURE_COMPARE_MODE, zU.NONE)) : (zU.texParameteri(zU.TEXTURE_2D, zU.TEXTURE_COMPARE_FUNC, XU), zU.texParameteri(zU.TEXTURE_2D, zU.TEXTURE_COMPARE_MODE, zU.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), UU._comparisonFunction = XU
      }
      createInstancesBuffer(UU) {
        const XU = this._gl.createBuffer();
        if (!XU) throw new Error("Unable to create instance buffer");
        const zU = new DU.d(XU);
        return zU.xY = UU, this.bindArrayBuffer(zU), this._gl.bufferData(this._gl.ARRAY_BUFFER, UU, this._gl.DYNAMIC_DRAW), zU.references = 1, zU
      }
      deleteInstancesBuffer(UU) {
        this._gl.deleteBuffer(UU)
      }
      async _clientWaitAsync(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const cU = this._gl;
        return await new Promise(((yU, QU) => {
          (0, kU.h)((() => {
            const zU = cU.clientWaitSync(UU, XU, 0);
            if (zU == cU.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return zU != cU.TIMEOUT_EXPIRED
          }), yU, QU, zU)
        }))
      }
      _readPixelsAsync(UU, XU, zU, cU, yU, QU, AU) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const FU = this._gl,
          oU = FU.createBuffer();
        FU.bindBuffer(FU.PIXEL_PACK_BUFFER, oU), FU.bufferData(FU.PIXEL_PACK_BUFFER, AU.byteLength, FU.STREAM_READ), FU.readPixels(UU, XU, zU, cU, yU, QU, 0), FU.bindBuffer(FU.PIXEL_PACK_BUFFER, null);
        const DU = FU.fenceSync(FU.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return DU ? (FU.flush(), this._clientWaitAsync(DU, 0, 10).then((() => (FU.deleteSync(DU), FU.bindBuffer(FU.PIXEL_PACK_BUFFER, oU), FU.getBufferSubData(FU.PIXEL_PACK_BUFFER, 0, AU), FU.bindBuffer(FU.PIXEL_PACK_BUFFER, null), FU.deleteBuffer(oU), AU)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(UU, XU) {
            1 === yU.b.Instances.length && NU.c.audioEngine && (NU.c.audioEngine.dispose(), NU.c.audioEngine = null);
            const zU = UU.getHostWindow();
            zU && "function" === typeof zU.removeEventListener && (zU.removeEventListener("blur", UU._onBlur), zU.removeEventListener("focus", UU._onFocus)), XU && (XU.removeEventListener("focus", UU._onCanvasFocus), XU.removeEventListener("blur", UU._onCanvasBlur), XU.removeEventListener("pointerout", UU._onCanvasPointerOut), XU.removeEventListener("contextmenu", UU._onCanvasContextMenu)), (0, IU.c)() && (document.removeEventListener("fullscreenchange", UU._onFullscreenChange), document.removeEventListener("mozfullscreenchange", UU._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", UU._onFullscreenChange), document.removeEventListener("msfullscreenchange", UU._onFullscreenChange), document.removeEventListener("pointerlockchange", UU._onPointerLockChange), document.removeEventListener("mspointerlockchange", UU._onPointerLockChange), document.removeEventListener("mozpointerlockchange", UU._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", UU._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    ZU.ALPHA_DISABLE = 0, ZU.ALPHA_ADD = 1, ZU.ALPHA_COMBINE = 2, ZU.ALPHA_SUBTRACT = 3, ZU.ALPHA_MULTIPLY = 4, ZU.ALPHA_MAXIMIZED = 5, ZU.ALPHA_ONEONE = 6, ZU.ALPHA_PREMULTIPLIED = 7, ZU.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, ZU.ALPHA_INTERPOLATE = 9, ZU.ALPHA_SCREENMODE = 10, ZU.DELAYLOADSTATE_NONE = 0, ZU.DELAYLOADSTATE_LOADED = 1, ZU.DELAYLOADSTATE_LOADING = 2, ZU.DELAYLOADSTATE_NOTLOADED = 4, ZU.NEVER = 512, ZU.ALWAYS = 519, ZU.LESS = 513, ZU.EQUAL = 514, ZU.LEQUAL = 515, ZU.GREATER = 516, ZU.GEQUAL = 518, ZU.NOTEQUAL = 517, ZU.KEEP = 7680, ZU.REPLACE = 7681, ZU.INCR = 7682, ZU.DECR = 7683, ZU.INVERT = 5386, ZU.INCR_WRAP = 34055, ZU.DECR_WRAP = 34056, ZU.TEXTURE_CLAMP_ADDRESSMODE = 0, ZU.TEXTURE_WRAP_ADDRESSMODE = 1, ZU.TEXTURE_MIRROR_ADDRESSMODE = 2, ZU.TEXTUREFORMAT_ALPHA = 0, ZU.TEXTUREFORMAT_LUMINANCE = 1, ZU.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, ZU.TEXTUREFORMAT_RGB = 4, ZU.TEXTUREFORMAT_RGBA = 5, ZU.TEXTUREFORMAT_RED = 6, ZU.TEXTUREFORMAT_R = 6, ZU.TEXTUREFORMAT_R16_UNORM = 33322, ZU.TEXTUREFORMAT_RG16_UNORM = 33324, ZU.TEXTUREFORMAT_RGB16_UNORM = 32852, ZU.TEXTUREFORMAT_RGBA16_UNORM = 32859, ZU.TEXTUREFORMAT_R16_SNORM = 36760, ZU.TEXTUREFORMAT_RG16_SNORM = 36761, ZU.TEXTUREFORMAT_RGB16_SNORM = 36762, ZU.TEXTUREFORMAT_RGBA16_SNORM = 36763, ZU.TEXTUREFORMAT_RG = 7, ZU.TEXTUREFORMAT_RED_INTEGER = 8, ZU.TEXTUREFORMAT_R_INTEGER = 8, ZU.TEXTUREFORMAT_RG_INTEGER = 9, ZU.TEXTUREFORMAT_RGB_INTEGER = 10, ZU.TEXTUREFORMAT_RGBA_INTEGER = 11, ZU.TEXTURETYPE_UNSIGNED_BYTE = 0, ZU.TEXTURETYPE_UNSIGNED_INT = 0, ZU.TEXTURETYPE_FLOAT = 1, ZU.TEXTURETYPE_HALF_FLOAT = 2, ZU.TEXTURETYPE_BYTE = 3, ZU.TEXTURETYPE_SHORT = 4, ZU.TEXTURETYPE_UNSIGNED_SHORT = 5, ZU.TEXTURETYPE_INT = 6, ZU.TEXTURETYPE_UNSIGNED_INTEGER = 7, ZU.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, ZU.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, ZU.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, ZU.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, ZU.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, ZU.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, ZU.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, ZU.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, ZU.TEXTURE_NEAREST_SAMPLINGMODE = 1, ZU.TEXTURE_BILINEAR_SAMPLINGMODE = 2, ZU.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, ZU.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, ZU.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, ZU.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, ZU.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, ZU.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, ZU.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, ZU.TEXTURE_NEAREST_LINEAR = 7, ZU.TEXTURE_NEAREST_NEAREST = 1, ZU.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, ZU.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, ZU.TEXTURE_LINEAR_LINEAR = 2, ZU.TEXTURE_LINEAR_NEAREST = 12, ZU.TEXTURE_EXPLICIT_MODE = 0, ZU.TEXTURE_SPHERICAL_MODE = 1, ZU.TEXTURE_PLANAR_MODE = 2, ZU.TEXTURE_CUBIC_MODE = 3, ZU.TEXTURE_PROJECTION_MODE = 4, ZU.TEXTURE_SKYBOX_MODE = 5, ZU.TEXTURE_INVCUBIC_MODE = 6, ZU.TEXTURE_EQUIRECTANGULAR_MODE = 7, ZU.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, ZU.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, ZU.SCALEMODE_FLOOR = 1, ZU.SCALEMODE_NEAREST = 2, ZU.SCALEMODE_CEILING = 3
  },
  41096: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(41048);
    class yU {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(UU) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = UU, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, UU && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, cU.c)(UU.format))
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
      getBaseArrayLayer(UU) {
        if (!this._textures) return -1;
        const XU = this._textures[UU],
          zU = this._layerIndices?.[UU] ?? 0,
          cU = this._faceIndices?.[UU] ?? 0;
        return XU.isCube ? 6 * zU + cU : XU.is3D ? 0 : zU
      }
      get samples() {
        return this._samples
      }
      setSamples(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === UU && !zU) return UU;
        const cU = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, UU, XU) : this._engine.updateRenderTargetTextureSampleCount(this, UU);
        return this._samples = UU, cU
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(UU, XU, zU, cU, yU) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = UU, this._isCube = XU, this._size = zU, this._engine = cU, this._depthStencilTexture = null, this.label = yU
      }
      setTextures(UU) {
        Array.isArray(UU) ? this._textures = UU : this._textures = UU ? [UU] : null
      }
      setTexture(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[XU] !== UU && (this._textures[XU] && zU && this._textures[XU].dispose(), this._textures[XU] = UU)
      }
      setLayerAndFaceIndices(UU, XU) {
        this._layerIndices = UU, this._faceIndices = XU
      }
      setLayerAndFaceIndex() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== XU && XU >= 0 && (this._layerIndices[UU] = XU), void 0 !== zU && zU >= 0 && (this._faceIndices[UU] = zU)
      }
      createDepthStencilTexture() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = zU, this._depthStencilTextureLabel = QU, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: XU,
          comparisonFunction: UU,
          generateStencil: zU,
          isCube: this._isCube,
          samples: cU,
          depthTextureFormat: yU,
          label: QU
        }, this), this._depthStencilTexture
      }
      _shareDepth(UU) {
        this.shareDepth(UU)
      }
      shareDepth(UU) {
        this._depthStencilTexture && (UU._depthStencilTexture && UU._depthStencilTexture.dispose(), UU._depthStencilTexture = this._depthStencilTexture, UU._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(UU) {
        this.texture && this.texture._swapAndDie(UU), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let UU = null;
        if (this._isMulti) {
          const XU = this.textures;
          if (XU && XU.length > 0) {
            let zU = !1,
              cU = XU.length,
              yU = -1;
            const QU = XU[XU.length - 1]._source;
            14 !== QU && 12 !== QU || (zU = !0, yU = XU[XU.length - 1].format, cU--);
            const AU = [],
              FU = [],
              oU = [],
              DU = [],
              EU = [],
              YU = [],
              NU = [],
              IU = {};
            for (let UU = 0; UU < cU; ++UU) {
              const zU = XU[UU];
              AU.push(zU.samplingMode), FU.push(zU.type), oU.push(zU.format);
              void 0 !== IU[zU.uniqueId] ? (DU.push(-1), NU.push(0)) : (IU[zU.uniqueId] = UU, zU.is2DArray ? (DU.push(35866), NU.push(zU.depth)) : zU.isCube ? (DU.push(34067), NU.push(0)) : zU.is3D ? (DU.push(32879), NU.push(zU.depth)) : (DU.push(3553), NU.push(0))), this._faceIndices && EU.push(this._faceIndices[UU] ?? 0), this._layerIndices && YU.push(this._layerIndices[UU] ?? 0)
            }
            const pU = {
                samplingModes: AU,
                generateMipMaps: XU[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: zU,
                depthTextureFormat: yU,
                types: FU,
                formats: oU,
                qFU: cU,
                targetTypes: DU,
                faceIndex: EU,
                layerIndex: YU,
                layerCounts: NU,
                label: this.label
              },
              aU = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            UU = this._engine.createMultipleRenderTarget(aU, pU);
            for (let tU = 0; tU < cU; ++tU) {
              if (-1 !== DU[tU]) continue;
              const zU = IU[XU[tU].uniqueId];
              UU.setTexture(UU.textures[zU], tU)
            }
          }
        } else {
          const XU = {};
          if (XU.generateDepthBuffer = this._generateDepthBuffer, XU.generateMipMaps = this.texture?.generateMipMaps ?? !1, XU.generateStencilBuffer = this._generateStencilBuffer, XU.samplingMode = this.texture?.samplingMode, XU.type = this.texture?.type, XU.format = this.texture?.format, XU.noColorAttachment = !this._textures, XU.label = this.label, this.isCube) UU = this._engine.createRenderTargetCubeTexture(this.width, XU);
          else {
            const zU = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            UU = this._engine.createRenderTargetTexture(zU, XU)
          }
          UU.texture && (UU.texture.isReady = !0)
        }
        return UU
      }
      _swapRenderTargetWrapper(UU) {
        if (this._textures && UU._textures)
          for (let XU = 0; XU < this._textures.length; ++XU) this._textures[XU]._swapAndDie(UU._textures[XU], !1), UU._textures[XU].isReady = !0;
        this._depthStencilTexture && UU._depthStencilTexture && (this._depthStencilTexture._swapAndDie(UU._depthStencilTexture), UU._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const UU = this._cloneRenderTargetWrapper();
        if (UU) {
          if (this._depthStencilTexture) {
            const XU = this._depthStencilTexture.samplingMode,
              zU = this._depthStencilTexture.format,
              cU = 2 === XU || 3 === XU || 11 === XU;
            UU.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, cU, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, zU, this._depthStencilTextureLabel)
          }
          this.samples > 1 && UU.setSamples(this.samples), UU._swapRenderTargetWrapper(this), UU.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let UU = 0; UU < this._textures.length; ++UU) this._textures[UU].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41504: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      static get ForceFullSceneLoadingForIncremental() {
        return cU._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(UU) {
        cU._ForceFullSceneLoadingForIncremental = UU
      }
      static get ShowLoadingScreen() {
        return cU._ShowLoadingScreen
      }
      static set ShowLoadingScreen(UU) {
        cU._ShowLoadingScreen = UU
      }
      static get loggingLevel() {
        return cU._LoggingLevel
      }
      static set loggingLevel(UU) {
        cU._LoggingLevel = UU
      }
      static get CleanBoneMatrixWeights() {
        return cU._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(UU) {
        cU._CleanBoneMatrixWeights = UU
      }
    }
    cU._ForceFullSceneLoadingForIncremental = !1, cU._ShowLoadingScreen = !0, cU._CleanBoneMatrixWeights = !1, cU._LoggingLevel = 0
  },
  41194: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(39493);
    const yU = new Map;

    function QU(UU, XU) {
      (function(UU) {
        return yU.delete(UU)
      })(UU) && cU.b.Warn(`Extension with the name '${UU}' already exists`), yU.set(UU, XU)
    }

    function AU(UU, XU) {
      "image/ktx" !== XU && "image/ktx2" !== XU || (UU = ".ktx"), yU.has(UU) || (UU.endsWith(".ies") && QU(".ies", (async () => await zU.e(615).then((() => zU(44461))).then((UU => new UU._IESTextureLoader)))), UU.endsWith(".dds") && QU(".dds", (async () => await zU.e(613).then((() => zU(44469))).then((UU => new UU._DDSTextureLoader)))), UU.endsWith(".basis") && QU(".basis", (async () => await zU.e(616).then((() => zU(44477))).then((UU => new UU._BasisTextureLoader)))), UU.endsWith(".env") && QU(".env", (async () => await Promise.all([zU.e(617), zU.e(614)]).then((() => zU(44484))).then((UU => new UU._ENVTextureLoader)))), UU.endsWith(".hdr") && QU(".hdr", (async () => await zU.e(618).then((() => zU(44535))).then((UU => new UU._HDRTextureLoader)))), (UU.endsWith(".ktx") || UU.endsWith(".ktx2")) && (QU(".ktx", (async () => await zU.e(619).then((() => zU(44539))).then((UU => new UU._KTXTextureLoader)))), QU(".ktx2", (async () => await zU.e(619).then((() => zU(44539))).then((UU => new UU._KTXTextureLoader))))), UU.endsWith(".tga") && QU(".tga", (async () => await zU.e(620).then((() => zU(44550))).then((UU => new UU._TGATextureLoader)))), UU.endsWith(".exr") && QU(".exr", (async () => await zU.e(621).then((() => zU(44555))).then((UU => new UU._ExrTextureLoader)))));
      const cU = yU.get(UU);
      return cU ? Promise.resolve(cU(XU)) : null
    }
  },
  41523: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      c: () => DU
    });
    var cU = zU(41374),
      yU = zU(41138),
      QU = zU(37863);
    class AU extends cU.c {
      get HUU() {
        return this._subMaterials
      }
      set HUU(UU) {
        this._subMaterials = UU, this._hookArray(UU)
      }
      getChildren() {
        return this.HUU
      }
      constructor(UU, XU) {
        super(UU, XU, !0), this._waitingSubMaterialsUniqueIds = [], this.nS().addMultiMaterial(this), this.HUU = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(UU) {
        var XU = this;
        const zU = UU.push;
        UU.push = function() {
          for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
          const AU = zU.apply(UU, yU);
          return XU._markAllSubMeshesAsTexturesDirty(), AU
        };
        const cU = UU.splice;
        UU.splice = (XU, zU) => {
          const yU = cU.call(UU, XU, zU ?? UU.length);
          return this._markAllSubMeshesAsTexturesDirty(), yU
        }
      }
      getSubMaterial(UU) {
        return UU < 0 || UU >= this.HUU.length ? this.nS().defaultMaterial : this.HUU[UU]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.HUU.map((UU => UU ? UU.getActiveTextures() : [])))
      }
      hasTexture(UU) {
        if (super.hasTexture(UU)) return !0;
        for (let XU = 0; XU < this.HUU.length; XU++)
          if (this.HUU[XU]?.hasTexture(UU)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(UU, XU, zU) {
        for (let cU = 0; cU < this.HUU.length; cU++) {
          const yU = this.HUU[cU];
          if (yU) {
            if (yU._storeEffectOnSubMeshes) {
              if (!yU.isReadyForSubMesh(UU, XU, zU)) return !1;
              continue
            }
            if (!yU.isReady(UU)) return !1
          }
        }
        return !0
      }
      clone(UU, XU) {
        const zU = new AU(UU, this.nS());
        for (let cU = 0; cU < this.HUU.length; cU++) {
          let yU;
          const QU = this.HUU[cU];
          yU = XU && QU ? QU.clone(UU + "-" + QU.name) : this.HUU[cU], zU.HUU.push(yU)
        }
        return zU
      }
      serialize() {
        const UU = {};
        UU.name = this.name, UU.id = this.id, UU.uniqueId = this.uniqueId, yU.b && (UU.tags = yU.b.GetTags(this)), UU.materialsUniqueIds = [], UU.materials = [];
        for (let XU = 0; XU < this.HUU.length; XU++) {
          const zU = this.HUU[XU];
          zU ? (UU.materialsUniqueIds.push(zU.uniqueId), UU.materials.push(zU.id)) : (UU.materialsUniqueIds.push(null), UU.materials.push(null))
        }
        return UU
      }
      dispose(UU, XU, zU) {
        const cU = this.nS();
        if (!cU) return;
        if (zU)
          for (let QU = 0; QU < this.HUU.length; QU++) {
            const zU = this.HUU[QU];
            zU && zU.dispose(UU, XU)
          }
        const yU = cU.multiMaterials.indexOf(this);
        yU >= 0 && cU.multiMaterials.splice(yU, 1), super.dispose(UU, XU)
      }
    }
    let FU = !1;

    function oU(UU, XU) {
      const zU = new AU(UU.name, XU);
      if (zU.id = UU.id, zU._loadedUniqueId = UU.uniqueId, yU.b && yU.b.AddTagsTo(zU, UU.tags), UU.materialsUniqueIds) zU._waitingSubMaterialsUniqueIds = UU.materialsUniqueIds;
      else
        for (const cU of UU.materials) zU.HUU.push(XU.getLastMaterialById(cU));
      return zU
    }

    function DU() {
      FU || (FU = !0, AU.ParseMultiMaterial = oU, (0, QU.h)("BABYLON.MultiMaterial", AU))
    }
  },
  41317: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU, yU, QU = zU(37819);
    ! function(UU) {
      UU[UU.LOCAL = 0] = "LOCAL", UU[UU.WORLD = 1] = "WORLD", UU[UU.BONE = 2] = "BONE"
    }(cU || (cU = {}));
    class AU {}
    AU.X = new QU.q(1, 0, 0), AU.Y = new QU.q(0, 1, 0), AU.Z = new QU.q(0, 0, 1),
      function(UU) {
        UU[UU.X = 0] = "X", UU[UU.Y = 1] = "Y", UU[UU.Z = 2] = "Z"
      }(yU || (yU = {}))
  },
  41103: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU,
      c: () => DU
    });
    var cU = zU(37819);
    const yU = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      QU = [() => 1, UU => UU.y, UU => UU.z, UU => UU.x, UU => UU.x * UU.y, UU => UU.y * UU.z, UU => 3 * UU.z * UU.z - 1, UU => UU.x * UU.z, UU => UU.x * UU.x - UU.y * UU.y],
      AU = (UU, XU) => yU[UU] * QU[UU](XU),
      FU = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class oU {
      constructor() {
        this.preScaled = !1, this.l00 = cU.q.Zero(), this.l1_1 = cU.q.Zero(), this.l10 = cU.q.Zero(), this.l11 = cU.q.Zero(), this.l2_2 = cU.q.Zero(), this.l2_1 = cU.q.Zero(), this.l20 = cU.q.Zero(), this.l21 = cU.q.Zero(), this.l22 = cU.q.Zero()
      }
      addLight(UU, XU, zU) {
        cU.l.Sp[0].set(XU.r, XU.g, XU.b);
        const yU = cU.l.Sp[0],
          QU = cU.l.Sp[1];
        yU.scaleToRef(zU, QU), QU.scaleToRef(AU(0, UU), cU.l.Sp[2]), this.l00.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(1, UU), cU.l.Sp[2]), this.l1_1.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(2, UU), cU.l.Sp[2]), this.l10.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(3, UU), cU.l.Sp[2]), this.l11.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(4, UU), cU.l.Sp[2]), this.l2_2.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(5, UU), cU.l.Sp[2]), this.l2_1.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(6, UU), cU.l.Sp[2]), this.l20.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(7, UU), cU.l.Sp[2]), this.l21.addInPlace(cU.l.Sp[2]), QU.scaleToRef(AU(8, UU), cU.l.Sp[2]), this.l22.addInPlace(cU.l.Sp[2])
      }
      scaleInPlace(UU) {
        this.l00.scaleInPlace(UU), this.l1_1.scaleInPlace(UU), this.l10.scaleInPlace(UU), this.l11.scaleInPlace(UU), this.l2_2.scaleInPlace(UU), this.l2_1.scaleInPlace(UU), this.l20.scaleInPlace(UU), this.l21.scaleInPlace(UU), this.l22.scaleInPlace(UU)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(FU[0]), this.l1_1.scaleInPlace(FU[1]), this.l10.scaleInPlace(FU[2]), this.l11.scaleInPlace(FU[3]), this.l2_2.scaleInPlace(FU[4]), this.l2_1.scaleInPlace(FU[5]), this.l20.scaleInPlace(FU[6]), this.l21.scaleInPlace(FU[7]), this.l22.scaleInPlace(FU[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(yU[0]), this.l1_1.scaleInPlace(yU[1]), this.l10.scaleInPlace(yU[2]), this.l11.scaleInPlace(yU[3]), this.l2_2.scaleInPlace(yU[4]), this.l2_1.scaleInPlace(yU[5]), this.l20.scaleInPlace(yU[6]), this.l21.scaleInPlace(yU[7]), this.l22.scaleInPlace(yU[8])
      }
      updateFromArray(UU) {
        return cU.q.FromArrayToRef(UU[0], 0, this.l00), cU.q.FromArrayToRef(UU[1], 0, this.l1_1), cU.q.FromArrayToRef(UU[2], 0, this.l10), cU.q.FromArrayToRef(UU[3], 0, this.l11), cU.q.FromArrayToRef(UU[4], 0, this.l2_2), cU.q.FromArrayToRef(UU[5], 0, this.l2_1), cU.q.FromArrayToRef(UU[6], 0, this.l20), cU.q.FromArrayToRef(UU[7], 0, this.l21), cU.q.FromArrayToRef(UU[8], 0, this.l22), this
      }
      updateFromFloatsArray(UU) {
        return cU.q.FromFloatsToRef(UU[0], UU[1], UU[2], this.l00), cU.q.FromFloatsToRef(UU[3], UU[4], UU[5], this.l1_1), cU.q.FromFloatsToRef(UU[6], UU[7], UU[8], this.l10), cU.q.FromFloatsToRef(UU[9], UU[10], UU[11], this.l11), cU.q.FromFloatsToRef(UU[12], UU[13], UU[14], this.l2_2), cU.q.FromFloatsToRef(UU[15], UU[16], UU[17], this.l2_1), cU.q.FromFloatsToRef(UU[18], UU[19], UU[20], this.l20), cU.q.FromFloatsToRef(UU[21], UU[22], UU[23], this.l21), cU.q.FromFloatsToRef(UU[24], UU[25], UU[26], this.l22), this
      }
      static FromArray(UU) {
        return (new oU).updateFromArray(UU)
      }
      static FromPolynomial(UU) {
        const XU = new oU;
        return XU.l00 = UU.xx.scale(.376127).add(UU.yy.scale(.376127)).add(UU.zz.scale(.376126)), XU.l1_1 = UU.y.scale(.977204), XU.l10 = UU.z.scale(.977204), XU.l11 = UU.x.scale(.977204), XU.l2_2 = UU.xy.scale(1.16538), XU.l2_1 = UU.yz.scale(1.16538), XU.l20 = UU.zz.scale(1.34567).subtract(UU.xx.scale(.672834)).subtract(UU.yy.scale(.672834)), XU.l21 = UU.zx.scale(1.16538), XU.l22 = UU.xx.scale(1.16538).subtract(UU.yy.scale(1.16538)), XU.l1_1.scaleInPlace(-1), XU.l11.scaleInPlace(-1), XU.l2_1.scaleInPlace(-1), XU.l21.scaleInPlace(-1), XU.scaleInPlace(Math.PI), XU
      }
    }
    class DU {
      constructor() {
        this.x = cU.q.Zero(), this.y = cU.q.Zero(), this.z = cU.q.Zero(), this.xx = cU.q.Zero(), this.yy = cU.q.Zero(), this.zz = cU.q.Zero(), this.xy = cU.q.Zero(), this.yz = cU.q.Zero(), this.zx = cU.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = oU.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(UU) {
        cU.l.Sp[0].sUU(UU.r, UU.g, UU.b);
        const XU = cU.l.Sp[0];
        this.xx.addInPlace(XU), this.yy.addInPlace(XU), this.zz.addInPlace(XU)
      }
      scaleInPlace(UU) {
        this.x.scaleInPlace(UU), this.y.scaleInPlace(UU), this.z.scaleInPlace(UU), this.xx.scaleInPlace(UU), this.yy.scaleInPlace(UU), this.zz.scaleInPlace(UU), this.yz.scaleInPlace(UU), this.zx.scaleInPlace(UU), this.xy.scaleInPlace(UU)
      }
      updateFromHarmonics(UU) {
        return this._harmonics = UU, this.x.YL(UU.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.YL(UU.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.YL(UU.l10), this.z.scaleInPlace(1.02333), this.xx.YL(UU.l00), cU.l.Sp[0].YL(UU.l20).scaleInPlace(.247708), cU.l.Sp[1].YL(UU.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).ZyU(cU.l.Sp[0]).addInPlace(cU.l.Sp[1]), this.yy.YL(UU.l00), this.yy.scaleInPlace(.886277).ZyU(cU.l.Sp[0]).ZyU(cU.l.Sp[1]), this.zz.YL(UU.l00), cU.l.Sp[0].YL(UU.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(cU.l.Sp[0]), this.yz.YL(UU.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.YL(UU.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.YL(UU.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(UU) {
        return (new DU).updateFromHarmonics(UU)
      }
      static FromArray(UU) {
        const XU = new DU;
        return cU.q.FromArrayToRef(UU[0], 0, XU.x), cU.q.FromArrayToRef(UU[1], 0, XU.y), cU.q.FromArrayToRef(UU[2], 0, XU.z), cU.q.FromArrayToRef(UU[3], 0, XU.xx), cU.q.FromArrayToRef(UU[4], 0, XU.yy), cU.q.FromArrayToRef(UU[5], 0, XU.zz), cU.q.FromArrayToRef(UU[6], 0, XU.yz), cU.q.FromArrayToRef(UU[7], 0, XU.zx), cU.q.FromArrayToRef(UU[8], 0, XU.xy), XU
      }
    }
  },
  41512: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OU,
      g: () => rU
    });
    var cU = zU(41113),
      yU = zU(37846),
      QU = zU(37819),
      AU = zU(41237),
      FU = zU(41493),
      oU = zU(41515),
      DU = zU(41235),
      EU = zU(41387),
      YU = zU(41228);
    class NU {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new QU.q(0, 0, 0), this._diffPositionForCollisions = new QU.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var IU, pU, aU, tU = zU(40989),
      gU = zU(41179),
      kU = zU(41393),
      GU = zU(37923),
      BU = zU(37825),
      ZU = zU(41317),
      RU = zU(39493),
      PU = zU(41121),
      WU = zU(41003),
      dU = zU(37863);

    function LU(UU, XU) {
      return UU - Math.floor(UU / XU) * XU
    }

    function eU(UU, XU, zU) {
      UU instanceof Float32Array ? QU.e.FromArrayToRef(UU, XU, zU) : zU.sUU((0, gU.e)(UU[XU]), (0, gU.e)(UU[XU + 1]), (0, gU.e)(UU[XU + 2]), (0, gU.e)(UU[XU + 3]), (0, gU.e)(UU[XU + 4]), (0, gU.e)(UU[XU + 5]), (0, gU.e)(UU[XU + 6]), (0, gU.e)(UU[XU + 7]), (0, gU.e)(UU[XU + 8]), (0, gU.e)(UU[XU + 9]), (0, gU.e)(UU[XU + 10]), (0, gU.e)(UU[XU + 11]), (0, gU.e)(UU[XU + 12]), (0, gU.e)(UU[XU + 13]), (0, gU.e)(UU[XU + 14]), (0, gU.e)(UU[XU + 15]))
    }

    function CU(UU, XU, zU, cU, yU, FU, oU, DU, EU) {
      const YU = zU.texture,
        NU = YU?.getInternalTexture(),
        IU = NU?._bufferView;
      if (!(IU instanceof Float32Array) && !(IU instanceof Uint16Array)) return RU.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const pU = YU.getSize(),
        aU = function(UU, XU) {
          const zU = UU.y - UU.x + 1,
            cU = XU * UU.w / zU,
            yU = cU < 1 ? 0 : 1,
            QU = zU - yU;
          let AU = LU(cU - Math.floor(cU), 1) * QU;
          return AU = LU(AU + UU.z, QU), Math.floor(AU) + UU.x + yU
        }(cU, zU.time);
      if (!isFinite(aU) || aU < 0 || aU >= pU.height) return RU.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const tU = QU.l.Sp[0],
        gU = QU.l.Matrix[0],
        kU = QU.l.Matrix[1],
        GU = aU * pU.width * 4,
        BU = XU === AU.h.NormalKind ? QU.q.TransformNormalFromFloatsToRef : QU.q.TransformCoordinatesFromFloatsToRef;
      for (let QU = 0, AU = 0; QU < UU.length; QU += 3, AU += 4) {
        let XU, zU;
        for (gU.reset(), XU = 0; XU < 4 && XU < EU; XU++) zU = FU[AU + XU], zU > 0 && (eU(IU, GU + 16 * Math.floor(yU[AU + XU]), kU), kU.scaleAndAddToRef(zU, gU));
        if (oU && DU)
          for (XU = 0; XU < 4 && XU + 4 < EU; XU++) zU = DU[AU + XU], zU > 0 && (eU(IU, GU + 16 * Math.floor(oU[AU + XU]), kU), kU.scaleAndAddToRef(zU, gU));
        BU(UU[QU], UU[QU + 1], UU[QU + 2], gU, tU), tU.toArray(UU, QU)
      }
      return !0
    }
    class wU {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = QU.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class qU {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new wU, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new NU, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let OU = (() => {
        var UU;
        let XU, NU = oU.e,
          IU = [];
        return UU = class extends NU {
          static get BILLBOARDMODE_NONE() {
            return oU.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return oU.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return oU.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return oU.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return oU.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return oU.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(UU) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = UU
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(UU) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = UU
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(UU) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = UU
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(UU) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = UU
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(UU) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = UU
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(UU) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== UU && (this._internalAbstractMeshDataInfo._morphTargetManager = UU, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(UU) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== UU && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = UU, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(UU) {
            return !!super._updateNonUniformScalingState(UU) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(UU) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = UU
          }
          set wN(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(UU)
          }
          set onCollisionPositionChange(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(UU)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(UU) {
            if (this._internalAbstractMeshDataInfo._visibility === UU) return;
            const XU = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = UU, (1 === XU && 1 !== UU || 1 !== XU && 1 === UU) && this._markSubMeshesAsDirty((UU => {
              UU.markAsMiscDirty(), UU.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(UU) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = UU
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(UU) {
            this._internalAbstractMeshDataInfo._renderingGroupId = UU
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(UU) {
            if (!Number.isInteger(UU) || UU < 0 || UU > 255 || 0 !== UU && 0 === (63 & UU)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = UU
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(UU) {
            this._setMaterial(UU)
          }
          _setMaterial(UU) {
            this._internalAbstractMeshDataInfo._material !== UU && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = UU, UU && UU.meshMap && (UU.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.uB && (this.resetDrawCache(void 0, null == UU), this._unBindEffect()))
          }
          getMaterialForRenderPass(UU) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[UU]
          }
          setMaterialForRenderPass(UU, XU) {
            this.resetDrawCache(UU), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const zU = this._internalAbstractMeshDataInfo._materialForRenderPass[UU];
            zU?.meshMap?.[this.uniqueId] && (zU.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[UU] = XU, XU && XU.meshMap && (XU.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(UU) {
            this._internalAbstractMeshDataInfo._receiveShadows !== UU && (this._internalAbstractMeshDataInfo._receiveShadows = UU, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(UU) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== UU && (this._internalAbstractMeshDataInfo._hasVertexAlpha = UU, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(UU) {
            this._internalAbstractMeshDataInfo._useVertexColors !== UU && (this._internalAbstractMeshDataInfo._useVertexColors = UU, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(UU) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== UU && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = UU, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(UU) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== UU && (this._internalAbstractMeshDataInfo._numBoneInfluencers = UU, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(UU) {
            this._internalAbstractMeshDataInfo._applyFog !== UU && (this._internalAbstractMeshDataInfo._applyFog = UU, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(UU) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = UU
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(UU) {
            UU !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = UU, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(UU) ? -1 : UU
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = UU
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(UU) ? -1 : UU
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = UU
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(UU) {
            const XU = this._internalAbstractMeshDataInfo._skeleton;
            XU && XU.needInitialSkinMatrix && XU._unregisterMeshWithPoseMatrix(this), UU && UU.needInitialSkinMatrix && UU._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = UU, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(XU) {
            var zU;
            let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(XU, cU, !1), zU = this, this._internalAbstractMeshDataInfo = new qU, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = UU.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new yU.e, this.onCollisionPositionChangeObservable = new yU.e, this.onMaterialChangedObservable = new yU.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.ma = UU.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = GU.b.Red(), this.outlineWidth = .02, this.overlayColor = GU.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Op = !1, this.ip = !1, this.actionManager = null, this.ellipsoid = new QU.q(.5, 1, .5), this.ellipsoidOffset = new QU.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new GU.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                IH: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new yU.e, this._onCollisionPositionChange = function(UU, XU) {
                let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                XU.subtractToRef(zU._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, zU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), zU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > WU.c.CollisionsEpsilon && zU.position.addInPlace(zU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), cU && zU.onCollideObservable.notifyObservers(cU), zU.onCollisionPositionChangeObservable.notifyObservers(zU.position)
              }, cU = this.nS(), this.layerMask = cU.defaultRenderableLayerMask, cU.UyU(this), this._resyncLightSources(), this._uniformBuffer = new YU.b(this.nS().qp(), void 0, void 0, XU, !this.nS().qp().isWebGPU), this._buildUniformLayout(), cU.performancePriority) {
              case 2:
                this.ip = !0;
              case 1:
                this.Op = !0, this.ma = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(UU) {
            const XU = this._uniformBuffer;
            XU.eUU("world", UU), XU.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), XU.update()
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
          toString(UU) {
            let XU = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            XU += ", # of submeshes: " + (this.uB ? this.uB.length : 0);
            const zU = this._internalAbstractMeshDataInfo._skeleton;
            return zU && (XU += ", skeleton: " + zU.name), UU && (XU += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], XU += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.IH ? "YES" : "NO")), XU
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== oU.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(UU) {
            let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (XU || this.actionManager.isRecursive)) {
              if (!UU) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(UU)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(UU, !1) : null
          }
          _releaseRenderPassId(UU) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.uB) {
              for (const UU of this.uB) UU._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const UU of this.nS().lights) UU.isEnabled() && UU.canAffectMesh(this) && this._lightSources.push(UU);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(UU) {
            const XU = UU.isEnabled() && UU.canAffectMesh(this),
              zU = this._lightSources.indexOf(UU);
            let cU = !1;
            if (-1 === zU) {
              if (!XU) return;
              this._lightSources.push(UU)
            } else {
              if (XU) return;
              cU = !0, this._lightSources.splice(zU, 1)
            }
            this._markSubMeshesAsLightDirty(cU)
          }
          _unBindEffect() {
            for (const UU of this.uB) UU.setEffect(null)
          }
          _removeLightSource(UU, XU) {
            const zU = this._lightSources.indexOf(UU); - 1 !== zU && (this._lightSources.splice(zU, 1), this._markSubMeshesAsLightDirty(XU))
          }
          _markSubMeshesAsDirty(UU) {
            if (this.uB)
              for (const XU of this.uB)
                for (let zU = 0; zU < XU._drawWrappers.length; ++zU) {
                  const cU = XU._drawWrappers[zU];
                  cU && cU.defines && cU.defines.markAllAsDirty && UU(cU.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((XU => XU.markAsLightDirty(UU)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((UU => UU.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((UU => UU.markAsMiscDirty()))
          }
          OzU(UU) {
            return this._currentRenderId = Number.MAX_VALUE, super.OzU(UU), this._isDirty = !0, this
          }
          resetDrawCache(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.uB)
              for (const zU of this.uB) zU.resetDrawCache(UU, XU)
          }
          get isBlocked() {
            return !1
          }
          getLOD(UU) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          yyU() {
            return null
          }
          getVerticesData(UU) {
            return null
          }
          setVerticesData(UU, XU, zU, cU) {
            return this
          }
          updateVerticesData(UU, XU, zU, cU) {
            return this
          }
          setIndices(UU, XU) {
            return this
          }
          isVerticesDataPresent(UU) {
            return !1
          }
          gM() {
            return this._masterMesh ? this._masterMesh.gM() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.gM()
          }
          setBoundingInfo(UU) {
            return this._boundingInfo = UU, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(UU, XU, zU) {
            return this._boundingInfo = new EU.b(UU, XU, zU), this._boundingInfo
          }
          normalizeToUnitCube() {
            let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(UU, XU, zU)
          }
          get useBones() {
            return this.skeleton && this.nS().skeletonsEnabled && this.isVerticesDataPresent(AU.h.MatricesIndicesKind) && this.isVerticesDataPresent(AU.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(UU) {}
          _activate(UU, XU) {
            return this._renderId = UU, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === oU.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get UH() {
            return !1
          }
          get jyU() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(UU, XU, zU) {
            return this.position.addInPlace(this.calcMovePOV(UU, XU, zU)), this
          }
          calcMovePOV(UU, XU, zU) {
            const cU = new QU.e;
            (this.rotationQuaternion ? this.rotationQuaternion : QU.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(cU);
            const yU = QU.q.Zero(),
              AU = this.definedFacingForward ? -1 : 1;
            return QU.q.TransformCoordinatesFromFloatsToRef(UU * AU, XU, zU * AU, cU, yU), yU
          }
          rotatePOV(UU, XU, zU) {
            return this.rotation.addInPlace(this.calcRotatePOV(UU, XU, zU)), this
          }
          calcRotatePOV(UU, XU, zU) {
            const cU = this.definedFacingForward ? 1 : -1;
            return new QU.q(UU * cU, XU, zU * cU)
          }
          _refreshBoundingInfo(UU, XU) {
            if (UU) {
              const zU = (0, kU.e)(UU, 0, this.getTotalVertices(), XU);
              this._boundingInfo ? this._boundingInfo.reConstruct(zU.minimum, zU.maximum) : this._boundingInfo = new EU.b(zU.minimum, zU.maximum)
            }
            if (this.uB)
              for (let zU = 0; zU < this.uB.length; zU++) this.uB[zU].refreshBoundingInfo(UU);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(UU) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(UU.minimum, UU.maximum) : this._boundingInfo = new EU.b(UU.minimum, UU.maximum), this.uB)
              for (let XU = 0; XU < this.uB.length; XU++) this.uB[XU].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(UU, XU, zU, cU, yU, FU, oU) {
            ! function(UU, XU, zU, cU, yU, FU, oU) {
              const DU = QU.l.Sp[0],
                EU = QU.l.Matrix[0],
                YU = QU.l.Matrix[1],
                NU = XU === AU.h.NormalKind ? QU.q.TransformNormalFromFloatsToRef : QU.q.TransformCoordinatesFromFloatsToRef;
              for (let AU = 0, IU = 0; AU < UU.length; AU += 3, IU += 4) {
                let XU, pU;
                for (EU.reset(), XU = 0; XU < 4; XU++) pU = yU[IU + XU], pU > 0 && (QU.e.FromFloat32ArrayToRefScaled(zU, Math.floor(16 * cU[IU + XU]), pU, YU), EU.addToSelf(YU));
                if (FU && oU)
                  for (XU = 0; XU < 4; XU++) pU = oU[IU + XU], pU > 0 && (QU.e.FromFloat32ArrayToRefScaled(zU, Math.floor(16 * FU[IU + XU]), pU, YU), EU.addToSelf(YU));
                NU(UU[AU], UU[AU + 1], UU[AU + 2], EU, DU), DU.toArray(UU, AU)
              }
            }(UU, XU, zU, cU, yU, FU, oU)
          }
          _getData(XU, zU) {
            let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AU.h.PositionKind;
            const yU = XU.cache,
              FU = UU => {
                if (yU) {
                  const XU = yU._vertexData || (yU._vertexData = {});
                  return XU[UU] || this.copyVerticesData(UU, XU), XU[UU]
                }
                return this.getVerticesData(UU)
              };
            if (zU || (zU = FU(cU)), !zU) return null;
            yU ? (yU._outputData ? yU._outputData.set(zU) : yU._outputData = new Float32Array(zU), zU = yU._outputData) : (XU.applyMorph && this.morphTargetManager || XU.applySkeleton && this.skeleton || XU.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (zU = zU.slice()), XU.applyMorph && this.morphTargetManager && function(UU, XU, zU) {
              let cU;
              switch (XU) {
                case AU.h.PositionKind:
                  cU = UU => UU.getPositions();
                  break;
                case AU.h.NormalKind:
                  cU = UU => UU.getNormals();
                  break;
                case AU.h.TangentKind:
                  cU = UU => UU.getTangents();
                  break;
                case AU.h.UVKind:
                  cU = UU => UU.getUVs();
                  break;
                case AU.h.UV2Kind:
                  cU = UU => UU.getUV2s();
                  break;
                case AU.h.ColorKind:
                  cU = UU => UU.getColors();
                  break;
                default:
                  return
              }
              for (let yU = 0; yU < UU.length; yU++) {
                let XU = UU[yU];
                for (let QU = 0; QU < zU.numTargets; QU++) {
                  const AU = zU.getTarget(QU),
                    FU = AU.influence;
                  if (0 !== FU) {
                    const zU = cU(AU);
                    zU && (XU += (zU[yU] - UU[yU]) * FU)
                  }
                }
                UU[yU] = XU
              }
            }(zU, cU, this.morphTargetManager);
            const oU = this.bakedVertexAnimationManager;
            let DU = !1;
            if (XU.applyBakedVertexAnimation && oU?.isEnabled) {
              const UU = FU(AU.h.MatricesIndicesKind),
                yU = FU(AU.h.MatricesWeightsKind);
              if (yU && UU) {
                const QU = this.numBoneInfluencers > 4,
                  EU = QU ? FU(AU.h.MatricesIndicesExtraKind) : null,
                  YU = QU ? FU(AU.h.MatricesWeightsExtraKind) : null;
                DU = CU(zU, cU, oU, XU.bakedVertexAnimationSettings ?? oU.animationParameters, UU, yU, EU, YU, this.numBoneInfluencers)
              }
            }
            if (!DU && XU.applySkeleton && this.skeleton) {
              const XU = FU(AU.h.MatricesIndicesKind),
                yU = FU(AU.h.MatricesWeightsKind);
              if (yU && XU) {
                const QU = this.numBoneInfluencers > 4,
                  oU = QU ? FU(AU.h.MatricesIndicesExtraKind) : null,
                  DU = QU ? FU(AU.h.MatricesWeightsExtraKind) : null,
                  EU = this.skeleton.getTransformMatrices(this);
                UU._ApplySkeleton(zU, cU, EU, XU, yU, oU, DU)
              }
            }
            if (!1 !== XU.updatePositionsArray && cU === AU.h.PositionKind) {
              const UU = this._internalAbstractMeshDataInfo._positions || [],
                XU = UU.length;
              if (UU.length = zU.length / 3, XU < UU.length)
                for (let zU = XU; zU < UU.length; zU++) UU[zU] = new QU.q;
              for (let cU = 0, yU = 0; cU < UU.length; cU++, yU += 3) UU[cU].sUU(zU[yU], zU[yU + 1], zU[yU + 2]);
              this._internalAbstractMeshDataInfo._positions = UU
            }
            return zU
          }
          getNormalsData() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: UU,
              applyMorph: XU,
              updatePositionsArray: !1
            }, null, AU.h.NormalKind)
          }
          hK() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: UU,
              applyMorph: XU,
              updatePositionsArray: !1
            }, zU, AU.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new EU.b(QU.q.Zero(), QU.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(UU) {
            if (!this.uB) return this;
            const XU = this.uB.length;
            for (let zU = 0; zU < XU; zU++) {
              const cU = this.uB[zU];
              (XU > 1 || !cU.IsGlobal) && cU.updateBoundingInfo(UU)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.ip || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(UU) {
            return this.gM().isInFrustum(UU, this.cullingStrategy)
          }
          isCompletelyInFrustum(UU) {
            return this.gM().isCompletelyInFrustum(UU)
          }
          syU(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = arguments.length > 2 ? arguments[2] : void 0;
            const cU = this.gM(),
              yU = UU.gM();
            if (cU.intersects(yU, XU)) return !0;
            if (zU)
              for (const QU of this.getChildMeshes())
                if (QU.syU(UU, XU, !0)) return !0;
            return !1
          }
          intersectsPoint(UU) {
            return this.gM().intersectsPoint(UU)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(UU) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = UU
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(UU) {
            let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const zU = this.nS().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = zU.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, zU.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, UU, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, XU), this
          }
          _collideForSubMesh(UU, XU, zU) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!UU._lastColliderWorldVertices || !UU._lastColliderTransformMatrix.equals(XU)) {
              UU._lastColliderTransformMatrix = XU.clone(), UU._lastColliderWorldVertices = [], UU._trianglePlanes = [];
              const zU = UU.verticesStart,
                cU = UU.verticesStart + UU.verticesCount;
              for (let yU = zU; yU < cU; yU++) UU._lastColliderWorldVertices.push(QU.q.TransformCoordinates(this._positions[yU], XU))
            }
            return zU._collide(UU._trianglePlanes, UU._lastColliderWorldVertices, this.yyU(), UU.indexStart, UU.indexStart + UU.indexCount, UU.verticesStart, !!UU.Hp(), this, this._shouldConvertRHS(), 7 === UU.Hp()?.fillMode), this
          }
          _processCollisionsForSubMeshes(UU, XU) {
            const zU = this._scene.getCollidingSubMeshCandidates(this, UU),
              cU = zU.length;
            for (let yU = 0; yU < cU; yU++) {
              const QU = zU.data[yU];
              cU > 1 && !QU._checkCollision(UU) || this._collideForSubMesh(QU, XU, UU)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(UU) {
            if (!this.gM()._checkCollision(UU)) return this;
            const XU = QU.l.Matrix[0],
              zU = QU.l.Matrix[1];
            return QU.e.ScalingToRef(1 / UU._radius.x, 1 / UU._radius.y, 1 / UU._radius.z, XU), this.worldMatrixFromCache.multiplyToRef(XU, zU), this._processCollisionsForSubMeshes(UU, zU), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(UU, XU, zU) {
            let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              yU = arguments.length > 4 ? arguments[4] : void 0,
              AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const FU = new DU.c,
              oU = this.getClassName(),
              EU = "InstancedLinesMesh" === oU || "LinesMesh" === oU || "GreasedLineMesh" === oU ? this.intersectionThreshold : 0,
              YU = this.gM();
            if (!this.uB) return FU;
            if (!AU && (!UU.intersectsSphere(YU.dyU, EU) || !UU.intersectsBox(YU.boundingBox, EU))) return FU;
            if (cU) return FU.hit = !AU, FU.pickedMesh = AU ? null : this, FU.distance = AU ? 0 : QU.q.Distance(UU.origin, YU.dyU.center), FU.subMeshId = 0, FU;
            if (!this._generatePointsArray()) return FU;
            let NU = null;
            const IU = this._scene.getIntersectingSubMeshCandidates(this, UU),
              pU = IU.length;
            let aU = !1;
            for (let QU = 0; QU < pU; QU++) {
              const UU = IU.data[QU].Hp();
              if (UU && (7 == UU.fillMode || 0 == UU.fillMode || 1 == UU.fillMode || 2 == UU.fillMode || 4 == UU.fillMode)) {
                aU = !0;
                break
              }
            }
            if (!aU) return FU.hit = !0, FU.pickedMesh = this, FU.distance = QU.q.Distance(UU.origin, YU.dyU.center), FU.subMeshId = -1, FU;
            for (let QU = 0; QU < pU; QU++) {
              const cU = IU.data[QU];
              if (pU > 1 && !AU && !cU.canIntersects(UU)) continue;
              const yU = cU.intersects(UU, this._positions, this.yyU(), XU, zU);
              if (yU && (XU || !NU || yU.distance < NU.distance) && (NU = yU, NU.subMeshId = cU._id, NU._internalSubMeshId = QU, XU)) break
            }
            if (NU) {
              const XU = yU ?? this.getWorldMatrix(),
                zU = QU.l.Sp[0],
                cU = QU.l.Sp[1];
              QU.q.TransformCoordinatesToRef(UU.origin, XU, zU), UU.direction.scaleToRef(NU.distance, cU);
              const AU = QU.q.TransformNormal(cU, XU).addInPlace(zU);
              return FU.hit = !0, FU.distance = QU.q.Distance(zU, AU), FU.pickedPoint = AU, FU.pickedMesh = this, FU.bu = NU.bu || 0, FU.bv = NU.bv || 0, FU.subMeshFaceId = NU.faceId, FU.faceId = NU.faceId + IU.data[NU._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), FU.subMeshId = NU.subMeshId, FU
            }
            return FU
          }
          clone(UU, XU, zU) {
            return null
          }
          releaseSubMeshes() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.uB)
              for (; this.uB.length;) this.uB[0].dispose(UU);
            else this.uB = [];
            return this
          }
          dispose(UU) {
            let XU, zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const cU = this.nS();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), cU.freeActiveMeshes(), cU.freeRenderingGroups(), cU.renderingManager.maintainStateBetweenFrames && cU.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((UU => UU !== this && UU.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), XU = 0; XU < this._intersectionsInProgress.length; XU++) {
              const UU = this._intersectionsInProgress[XU],
                zU = UU._intersectionsInProgress.indexOf(this);
              UU._intersectionsInProgress.splice(zU, 1)
            }
            this._intersectionsInProgress.length = 0;
            const yU = cU.lights;
            for (const AU of yU) {
              let UU = AU.includedOnlyMeshes.indexOf(this); - 1 !== UU && AU.includedOnlyMeshes.splice(UU, 1), UU = AU.excludedMeshes.indexOf(this), -1 !== UU && AU.excludedMeshes.splice(UU, 1);
              const XU = AU.getShadowGenerators();
              if (XU) {
                const zU = XU.values();
                for (let XU = zU.next(); !0 !== XU.done; XU = zU.next()) {
                  const zU = XU.value.getShadowMap();
                  zU && zU.renderList && (UU = zU.renderList.indexOf(this), -1 !== UU && zU.renderList.splice(UU, 1))
                }
              }
            }
            this.releaseSubMeshes(cU._isDisposing);
            const QU = cU.qp();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, QU.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), QU.wipeCaches(), cU.ZH(this), this._parentContainer) {
              const UU = this._parentContainer.meshes.indexOf(this);
              UU > -1 && this._parentContainer.meshes.splice(UU, 1), this._parentContainer = null
            }
            if (zU && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !UU)
              for (XU = 0; XU < cU.nB.length; XU++) cU.nB[XU].emitter === this && (cU.nB[XU].dispose(), XU--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(UU, zU)
          }
          _initFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            UU.facetNormals || (UU.facetNormals = []), UU.facetPositions || (UU.facetPositions = []), UU.facetPartitioning || (UU.facetPartitioning = new Array), UU.facetNb = this.yyU().length / 3 | 0, UU.partitioningSubdivisions = UU.partitioningSubdivisions ? UU.partitioningSubdivisions : 10, UU.partitioningBBoxRatio = UU.partitioningBBoxRatio ? UU.partitioningBBoxRatio : 1.01;
            for (let XU = 0; XU < UU.facetNb; XU++) UU.facetNormals[XU] = QU.q.Zero(), UU.facetPositions[XU] = QU.q.Zero();
            return UU.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            UU.facetDataEnabled || this._initFacetData();
            const XU = this.getVerticesData(AU.h.PositionKind),
              zU = this.yyU(),
              cU = this.getVerticesData(AU.h.NormalKind)?.slice(),
              yU = this.gM();
            if (UU.facetDepthSort && !UU.facetDepthSortEnabled) {
              if (UU.facetDepthSortEnabled = !0, zU instanceof Uint16Array) UU.depthSortedIndices = new Uint16Array(zU);
              else if (zU instanceof Uint32Array) UU.depthSortedIndices = new Uint32Array(zU);
              else {
                let XU = !1;
                for (let UU = 0; UU < zU.length; UU++)
                  if (zU[UU] > 65535) {
                    XU = !0;
                    break
                  } UU.depthSortedIndices = XU ? new Uint32Array(zU) : new Uint16Array(zU)
              }
              if (UU.facetDepthSortFunction = function(UU, XU) {
                  return XU.sqDistance - UU.sqDistance
                }, !UU.facetDepthSortFrom) {
                const XU = this.nS().activeCamera;
                UU.facetDepthSortFrom = XU ? XU.position : QU.q.Zero()
              }
              UU.depthSortedFacets = [];
              for (let XU = 0; XU < UU.facetNb; XU++) {
                const zU = {
                  ind: 3 * XU,
                  sqDistance: 0
                };
                UU.depthSortedFacets.push(zU)
              }
              UU.invertedMatrix = QU.e.Identity(), UU.facetDepthSortOrigin = QU.q.Zero()
            }
            UU.bbSize.x = yU.maximum.x - yU.minimum.x > BU.c ? yU.maximum.x - yU.minimum.x : BU.c, UU.bbSize.y = yU.maximum.y - yU.minimum.y > BU.c ? yU.maximum.y - yU.minimum.y : BU.c, UU.bbSize.z = yU.maximum.z - yU.minimum.z > BU.c ? yU.maximum.z - yU.minimum.z : BU.c;
            let oU = UU.bbSize.x > UU.bbSize.y ? UU.bbSize.x : UU.bbSize.y;
            if (oU = oU > UU.bbSize.z ? oU : UU.bbSize.z, UU.subDiv.max = UU.partitioningSubdivisions, UU.subDiv.X = Math.floor(UU.subDiv.max * UU.bbSize.x / oU), UU.subDiv.Y = Math.floor(UU.subDiv.max * UU.bbSize.y / oU), UU.subDiv.Z = Math.floor(UU.subDiv.max * UU.bbSize.z / oU), UU.subDiv.X = UU.subDiv.X < 1 ? 1 : UU.subDiv.X, UU.subDiv.Y = UU.subDiv.Y < 1 ? 1 : UU.subDiv.Y, UU.subDiv.Z = UU.subDiv.Z < 1 ? 1 : UU.subDiv.Z, UU.facetParameters.facetNormals = this.getFacetLocalNormals(), UU.facetParameters.facetPositions = this.getFacetLocalPositions(), UU.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), UU.facetParameters.bInfo = yU, UU.facetParameters.bbSize = UU.bbSize, UU.facetParameters.subDiv = UU.subDiv, UU.facetParameters.ratio = this.partitioningBBoxRatio, UU.facetParameters.depthSort = UU.facetDepthSort, UU.facetDepthSort && UU.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(UU.invertedMatrix), QU.q.TransformCoordinatesToRef(UU.facetDepthSortFrom, UU.invertedMatrix, UU.facetDepthSortOrigin), UU.facetParameters.distanceTo = UU.facetDepthSortOrigin), UU.facetParameters.depthSortedFacets = UU.depthSortedFacets, cU && FU.c.ComputeNormals(XU, zU, cU, UU.facetParameters), UU.facetDepthSort && UU.facetDepthSortEnabled) {
              UU.depthSortedFacets.sort(UU.facetDepthSortFunction);
              const XU = UU.depthSortedIndices.length / 3 | 0;
              for (let cU = 0; cU < XU; cU++) {
                const XU = UU.depthSortedFacets[cU].ind;
                UU.depthSortedIndices[3 * cU] = zU[XU], UU.depthSortedIndices[3 * cU + 1] = zU[XU + 1], UU.depthSortedIndices[3 * cU + 2] = zU[XU + 2]
              }
              this.updateIndices(UU.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            return UU.facetNormals || this.updateFacetData(), UU.facetNormals
          }
          getFacetLocalPositions() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            return UU.facetPositions || this.updateFacetData(), UU.facetPositions
          }
          getFacetLocalPartitioning() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            return UU.facetPartitioning || this.updateFacetData(), UU.facetPartitioning
          }
          getFacetPosition(UU) {
            const XU = QU.q.Zero();
            return this.getFacetPositionToRef(UU, XU), XU
          }
          getFacetPositionToRef(UU, XU) {
            const zU = this.getFacetLocalPositions()[UU],
              cU = this.getWorldMatrix();
            return QU.q.TransformCoordinatesToRef(zU, cU, XU), this
          }
          getFacetNormal(UU) {
            const XU = QU.q.Zero();
            return this.getFacetNormalToRef(UU, XU), XU
          }
          getFacetNormalToRef(UU, XU) {
            const zU = this.getFacetLocalNormals()[UU];
            return QU.q.TransformNormalToRef(zU, this.getWorldMatrix(), XU), this
          }
          getFacetsAtLocalCoordinates(UU, XU, zU) {
            const cU = this.gM(),
              yU = this._internalAbstractMeshDataInfo._facetData,
              QU = Math.floor((UU - cU.minimum.x * yU.partitioningBBoxRatio) * yU.subDiv.X * yU.partitioningBBoxRatio / yU.bbSize.x),
              AU = Math.floor((XU - cU.minimum.y * yU.partitioningBBoxRatio) * yU.subDiv.Y * yU.partitioningBBoxRatio / yU.bbSize.y),
              FU = Math.floor((zU - cU.minimum.z * yU.partitioningBBoxRatio) * yU.subDiv.Z * yU.partitioningBBoxRatio / yU.bbSize.z);
            return QU < 0 || QU > yU.subDiv.max || AU < 0 || AU > yU.subDiv.max || FU < 0 || FU > yU.subDiv.max ? null : yU.facetPartitioning[QU + yU.subDiv.max * AU + yU.subDiv.max * yU.subDiv.max * FU]
          }
          getClosestFacetAtCoordinates(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const FU = this.getWorldMatrix(),
              oU = QU.l.Matrix[5];
            FU.invertToRef(oU);
            const DU = QU.l.Sp[8];
            QU.q.TransformCoordinatesFromFloatsToRef(UU, XU, zU, oU, DU);
            const EU = this.getClosestFacetAtLocalCoordinates(DU.x, DU.y, DU.z, cU, yU, AU);
            return cU && QU.q.TransformCoordinatesFromFloatsToRef(cU.x, cU.y, cU.z, FU, cU), EU
          }
          getClosestFacetAtLocalCoordinates(UU, XU, zU, cU) {
            let yU, QU, AU, FU, oU, DU, EU, YU, NU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              IU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              pU = null;
            const aU = this.getFacetLocalPositions(),
              tU = this.getFacetLocalNormals(),
              gU = this.getFacetsAtLocalCoordinates(UU, XU, zU);
            if (!gU) return null;
            let kU, GU, BU, ZU, RU = Number.MAX_VALUE;
            for (let PU = 0; PU < gU.length; PU++) GU = gU[PU], BU = tU[GU], ZU = aU[GU], FU = (UU - ZU.x) * BU.x + (XU - ZU.y) * BU.y + (zU - ZU.z) * BU.z, (!NU || NU && IU && FU >= 0 || NU && !IU && FU <= 0) && (FU = BU.x * ZU.x + BU.y * ZU.y + BU.z * ZU.z, oU = -(BU.x * UU + BU.y * XU + BU.z * zU - FU) / (BU.x * BU.x + BU.y * BU.y + BU.z * BU.z), DU = UU + BU.x * oU, EU = XU + BU.y * oU, YU = zU + BU.z * oU, yU = DU - UU, QU = EU - XU, AU = YU - zU, kU = yU * yU + QU * QU + AU * AU, kU < RU && (RU = kU, pU = GU, cU && (cU.x = DU, cU.y = EU, cU.z = YU)));
            return pU
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            return UU.facetDataEnabled && (UU.facetDataEnabled = !1, UU.facetPositions = [], UU.facetNormals = [], UU.facetPartitioning = new Array, UU.facetParameters = {}, UU.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(UU, XU) {
            return this
          }
          createNormals(UU) {
            const XU = this.getVerticesData(AU.h.PositionKind),
              zU = this.yyU();
            let cU;
            return cU = this.isVerticesDataPresent(AU.h.NormalKind) ? this.getVerticesData(AU.h.NormalKind) : [], FU.c.ComputeNormals(XU, zU, cU, {
              useRightHandedSystem: this.nS().useRightHandedSystem
            }), this.setVerticesData(AU.h.NormalKind, cU, UU), this
          }
          async optimizeIndicesAsync() {
            const UU = this.yyU();
            if (!UU) return this;
            const {
              OptimizeIndices: XU
            } = await zU.e(657).then((() => zU(45219)));
            return XU(UU), this.setIndices(UU, this.getTotalVertices()), this
          }
          alignWithNormal(UU, XU) {
            XU || (XU = ZU.b.Y);
            const zU = QU.l.Sp[0],
              cU = QU.l.Sp[1];
            return QU.q.CrossToRef(XU, UU, cU), QU.q.CrossToRef(UU, cU, zU), this.rotationQuaternion ? QU.f.RotationQuaternionFromAxisToRef(zU, UU, cU, this.rotationQuaternion) : QU.q.RotationFromAxisToRef(zU, UU, cU, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, tU.m)("EdgesRenderer")
          }
          enableEdgesRendering(UU, XU, zU) {
            throw (0, tU.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.nB.filter((UU => UU.emitter === this))
          }
        }, (() => {
          const zU = "function" === typeof Symbol && Symbol.metadata ? Object.create(NU[Symbol.metadata] ?? null) : void 0;
          XU = [PU.e.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, cU.j)(UU, null, XU, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: UU => "_ApplySkeleton" in UU,
              get: UU => UU._ApplySkeleton
            },
            metadata: zU
          }, null, IU), zU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zU
          })
        })(), UU.OCCLUSION_TYPE_NONE = ((0, cU.n)(UU, IU), 0), UU.OCCLUSION_TYPE_OPTIMISTIC = 1, UU.OCCLUSION_TYPE_STRICT = 2, UU.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, UU.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, UU.CULLINGSTRATEGY_STANDARD = 0, UU.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, UU.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, UU.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, UU.DefaultIsPickable = !0, UU
      })(),
      SU = !1;

    function rU() {
      SU || (SU = !0, (0, dU.h)("BABYLON.AbstractMesh", OU))
    }(IU = OU.prototype).createOrUpdateSubmeshesOctree ?? (IU.createOrUpdateSubmeshesOctree = (0, tU.k)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (pU = OU.prototype).getPhysicsImpostor ?? (pU.getPhysicsImpostor = (0, tU.k)("AbstractMesh", "getPhysicsImpostor")), (aU = OU.prototype).setPhysicsLinkWith ?? (aU.setPhysicsLinkWith = (0, tU.k)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(OU.prototype, "occlusionRetryCount") || Object.defineProperty(OU.prototype, "occlusionRetryCount", (0, tU.i)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(OU.prototype, "occlusionType") || Object.defineProperty(OU.prototype, "occlusionType", (0, tU.i)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(OU.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(OU.prototype, "occlusionQueryAlgorithmType", (0, tU.i)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(OU.prototype, "isOccluded") || Object.defineProperty(OU.prototype, "isOccluded", (0, tU.i)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(OU.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(OU.prototype, "isOcclusionQueryInProgress", (0, tU.i)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(OU.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(OU.prototype, "forceRenderingWhenOccluded", (0, tU.i)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(OU.prototype, "occlusionForRenderPassId") || Object.defineProperty(OU.prototype, "occlusionForRenderPassId", (0, tU.i)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(OU.prototype, "decalMap") || Object.defineProperty(OU.prototype, "decalMap", (0, tU.i)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(OU.prototype, "XM") || Object.defineProperty(OU.prototype, "XM", (0, tU.i)("AbstractMesh", "XM")), Object.getOwnPropertyDescriptor(OU.prototype, "physicsImpostor") || Object.defineProperty(OU.prototype, "physicsImpostor", (0, tU.i)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(OU.prototype, "showBoundingBox") || Object.defineProperty(OU.prototype, "showBoundingBox", (0, tU.i)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(OU.prototype, "edgesRenderer") || Object.defineProperty(OU.prototype, "edgesRenderer", (0, tU.i)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(OU.prototype, "renderOutline") || Object.defineProperty(OU.prototype, "renderOutline", (0, tU.i)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(OU.prototype, "renderOverlay") || Object.defineProperty(OU.prototype, "renderOverlay", (0, tU.i)("AbstractMesh", "renderOverlay"))
  },
  41495: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => gU
    });
    var cU = zU(37819),
      yU = zU(37923),
      QU = zU(41493),
      AU = zU(41237),
      FU = zU(41378),
      oU = zU(41504),
      DU = zU(41387),
      EU = zU(41205),
      YU = zU(39493),
      NU = zU(41138),
      IU = zU(41393),
      pU = zU(37841),
      aU = zU(41508),
      tU = zU(41177);
    class gU {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(UU) {
        this._boundingBias ? this._boundingBias.YL(UU) : this._boundingBias = UU.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(UU) {
        const XU = new gU(gU.RandomId(), UU.nS());
        return XU.applyToMesh(UU), XU
      }
      get meshes() {
        return this._meshes
      }
      constructor(UU, XU, zU) {
        let yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new cU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new cU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = XU || pU.b.LastCreatedScene, this._scene && (this.id = UU, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.qp(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = yU, null !== AU && (this._totalVertices = AU), zU ? this.setAllVerticesData(zU, yU) : null === AU && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), QU && (this.applyToMesh(QU), QU.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      nS() {
        return this._scene
      }
      qp() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let UU = 0; UU < this._meshes.length; UU++)
          if (!this._meshes[UU].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const UU = new Set;
        for (const XU in this._vertexBuffers) UU.add(this._vertexBuffers[XU].getWrapperBuffer());
        UU.forEach((UU => {
          UU._rebuild()
        }))
      }
      setAllVerticesData(UU, XU) {
        UU.applyToGeometry(this, XU), this._notifyUpdate()
      }
      setVerticesData(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0;
        zU && Array.isArray(XU) && (XU = new Float32Array(XU));
        const yU = new AU.h(this._engine, XU, UU, {
          updatable: zU,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: cU,
          label: "Geometry_" + this.id + "_" + UU
        });
        this.setVerticesBuffer(yU)
      }
      removeVerticesData(UU) {
        this._vertexBuffers[UU] && (this._vertexBuffers[UU].dispose(), delete this._vertexBuffers[UU]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const yU = UU.getKind();
        this._vertexBuffers[yU] && zU && this._vertexBuffers[yU].dispose(), UU._buffer && UU._ownsBuffer && UU._buffer._increaseReferences(), this._vertexBuffers[yU] = UU;
        const QU = this._meshes,
          FU = QU.length;
        if (yU === AU.h.PositionKind) {
          this._totalVertices = XU ?? UU._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : UU.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const zU = this._extend && this._extend.minimum || new cU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            yU = this._extend && this._extend.maximum || new cU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let UU = 0; UU < FU; UU++) {
            const XU = QU[UU];
            XU.buildBoundingInfo(zU, yU), XU._createGlobalSubMesh(XU.isUnIndexed), XU.computeWorldMatrix(!0), XU.synchronizeInstances()
          }
        }
        this._notifyUpdate(yU)
      }
      updateVerticesDataDirectly(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yU = this.getVertexBuffer(UU);
        yU && (yU.updateDirectly(XU, zU, cU), this._notifyUpdate(UU))
      }
      updateVerticesData(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this.getVertexBuffer(UU);
        cU && (cU.update(XU), UU === AU.h.PositionKind && this._updateBoundingInfo(zU, XU), this._notifyUpdate(UU))
      }
      _updateBoundingInfo(UU, XU) {
        if (UU && this._updateExtend(XU), this._resetPointsArrayCache(), UU) {
          const UU = this._meshes;
          for (const XU of UU) {
            XU.hasBoundingInfo ? XU.gM().reConstruct(this._extend.minimum, this._extend.maximum) : XU.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const UU = XU.uB;
            for (const XU of UU) XU.refreshBoundingInfo()
          }
        }
      }
      _bind(UU, XU, zU, cU) {
        if (!UU) return;
        void 0 === XU && (XU = this._indexBuffer);
        const yU = this.getVertexBuffers();
        if (!yU) return;
        if (XU != this._indexBuffer || !this._vertexArrayObjects && !cU) return void this._engine.bindBuffers(yU, XU, UU, zU);
        const QU = cU || this._vertexArrayObjects,
          AU = this._engine;
        QU[UU.key] || (QU[UU.key] = AU.recordVertexArrayObject(yU, XU, UU, zU)), AU.bindVertexArrayObject(QU[UU.key], XU)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(UU, XU, zU) {
        const cU = this.getVertexBuffer(UU);
        return cU ? cU.getFloatData(this._totalVertices, zU || XU && 1 !== this._meshes.length) : null
      }
      copyVerticesData(UU, XU) {
        const zU = this.getVertexBuffer(UU);
        if (!zU) return;
        XU[UU] || (XU[UU] = new Float32Array(this._totalVertices * zU.getSize()));
        const cU = zU.getData();
        cU && (0, tU.f)(cU, zU.getSize(), zU.type, zU.byteOffset, zU.byteStride, zU.normalized, this._totalVertices, XU[UU])
      }
      isVertexBufferUpdatable(UU) {
        const XU = this._vertexBuffers[UU];
        return !!XU && XU.isUpdatable()
      }
      getVertexBuffer(UU) {
        return this.isReady() ? this._vertexBuffers[UU] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(UU) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[UU] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(UU)
      }
      getVerticesDataKinds() {
        const UU = [];
        let XU;
        if (!this._vertexBuffers && this._delayInfo)
          for (XU in this._delayInfo) UU.push(XU);
        else
          for (XU in this._vertexBuffers) UU.push(XU);
        return UU
      }
      updateIndices(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const cU = UU.length !== this._indices.length;
            if (zU || (this._indices = UU.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, UU, XU), cU)
              for (const UU of this._meshes) UU._createGlobalSubMesh(!0)
          } else this.setIndices(UU, null, !0)
      }
      setIndexBuffer(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = UU, this._totalVertices = XU, this._totalIndices = zU, UU.is32Bits = null === cU ? XU > 65535 : cU;
        for (const yU of this._meshes) yU._createGlobalSubMesh(!0), yU.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = UU, this._indexBufferIsUpdatable = zU, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, zU, "Geometry_" + this.id + "_IndexBuffer")), void 0 != XU && (this._totalVertices = XU);
        for (const yU of this._meshes) yU._createGlobalSubMesh(!cU), yU.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      yyU(UU, XU) {
        if (!this.isReady()) return null;
        const zU = this._indices;
        return XU || UU && 1 !== this._meshes.length ? zU.slice() : zU
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        UU && this._vertexArrayObjects && this._vertexArrayObjects[UU.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[UU.key]), delete this._vertexArrayObjects[UU.key])
      }
      releaseForMesh(UU, XU) {
        const zU = this._meshes,
          cU = zU.indexOf(UU); - 1 !== cU && (zU.splice(cU, 1), this._vertexArrayObjects && UU._invalidateInstanceVertexArrayObject(), UU._geometry = null, 0 === zU.length && XU && this.dispose())
      }
      applyToMesh(UU) {
        if (UU._geometry === this) return;
        const XU = UU._geometry;
        XU && XU.releaseForMesh(UU), this._vertexArrayObjects && UU._invalidateInstanceVertexArrayObject();
        const zU = this._meshes;
        UU._geometry = this, UU._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), zU.push(UU), this.isReady() ? this._applyToMesh(UU) : this._boundingInfo && UU.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!UU && (UU = this.getVerticesData(AU.h.PositionKind), !UU)) return;
          this._extend = (0, IU.e)(UU, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(UU) {
        for (const XU in this._vertexBuffers) {
          const zU = this._vertexBuffers[XU];
          zU._buffer.getBuffer() || zU.create(), XU === AU.h.PositionKind && (this._extend || this._updateExtend(), UU.buildBoundingInfo(this._extend.minimum, this._extend.maximum), UU._createGlobalSubMesh(UU.isUnIndexed), UU._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), UU._syncGeometryWithMorphTargetManager(), UU.synchronizeInstances()
      }
      _notifyUpdate(UU) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, UU), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const XU of this._meshes) XU._markSubMeshesAsAttributesDirty()
      }
      load(UU, XU) {
        2 !== this.delayLoadState && (this.isReady() ? XU && XU() : (this.delayLoadState = 2, this._queueLoad(UU, XU)))
      }
      _queueLoad(UU, XU) {
        this.delayLoadingFile && (UU.addPendingData(this), (async () => {
          try {
            const zU = await UU._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void UU.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(zU), this), this.delayLoadState = 1, this._delayInfo = [], UU.removePendingData(this);
            const cU = this._meshes,
              yU = cU.length;
            for (let UU = 0; UU < yU; UU++) this._applyToMesh(cU[UU]);
            XU && XU()
          } catch (zU) {
            UU.removePendingData(this), UU.oR || YU.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${zU}`)
          }
        })())
      }
      toLeftHanded() {
        const UU = this.yyU(!1);
        if (null != UU && UU.length > 0) {
          for (let XU = 0; XU < UU.length; XU += 3) {
            const zU = UU[XU + 0];
            UU[XU + 0] = UU[XU + 2], UU[XU + 2] = zU
          }
          this.setIndices(UU)
        }
        const XU = this.getVerticesData(AU.h.PositionKind, !1);
        if (null != XU && XU.length > 0) {
          for (let UU = 0; UU < XU.length; UU += 3) XU[UU + 2] = -XU[UU + 2];
          this.setVerticesData(AU.h.PositionKind, XU, !1)
        }
        const zU = this.getVerticesData(AU.h.NormalKind, !1);
        if (null != zU && zU.length > 0) {
          for (let UU = 0; UU < zU.length; UU += 3) zU[UU + 2] = -zU[UU + 2];
          this.setVerticesData(AU.h.NormalKind, zU, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const UU = this.getVerticesData(AU.h.PositionKind);
        if (!UU || 0 === UU.length) return !1;
        for (let XU = 3 * this._positionsCache.length, zU = this._positionsCache.length; XU < UU.length; XU += 3, ++zU) this._positionsCache[zU] = cU.q.FromArray(UU, XU);
        for (let XU = 0, zU = 0; XU < UU.length; XU += 3, ++zU) this._positionsCache[zU].set(UU[0 + XU], UU[1 + XU], UU[2 + XU]);
        return this._positionsCache.length = UU.length / 3, this._positions = this._positionsCache, !0
      }
      oR() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const zU in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[zU]);
          this._vertexArrayObjects = {};
          const UU = this._meshes,
            XU = UU.length;
          for (let zU = 0; zU < XU; zU++) UU[zU]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const UU = this._meshes,
          XU = UU.length;
        let zU;
        for (zU = 0; zU < XU; zU++) this.releaseForMesh(UU[zU]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const cU in this._vertexBuffers) this._vertexBuffers[cU].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const UU = this._parentContainer.geometries.indexOf(this);
          UU > -1 && this._parentContainer.geometries.splice(UU, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(UU) {
        const XU = new gU(UU, this._scene),
          zU = this.yyU(void 0, !0);
        zU && XU.setIndices(zU);
        let cU, yU = !1;
        for (cU in this._vertexBuffers) {
          const UU = this.getVertexBuffer(cU),
            zU = UU.getData();
          if (!zU) continue;
          const QU = UU.isUpdatable(),
            FU = UU.getSize(),
            {
              type: oU,
              byteOffset: DU,
              byteStride: EU,
              normalized: YU
            } = UU;
          yU = yU || QU;
          let NU = this._totalVertices;
          if (UU.getIsInstanced()) {
            let UU;
            UU = zU instanceof Array ? 4 * zU.length : zU.byteLength, NU = UU / EU
          }
          const IU = (0, tU.s)(zU, FU, oU, DU, EU, NU, !0),
            pU = new AU.h(this._engine, IU, cU, {
              updatable: QU,
              useBytes: !1,
              stride: FU,
              size: FU,
              offset: 0,
              type: oU,
              normalized: YU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            });
          XU.setVerticesBuffer(pU, NU)
        }
        for (cU in XU._updatable = yU, XU.delayLoadState = this.delayLoadState, XU.delayLoadingFile = this.delayLoadingFile, XU._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) XU._delayInfo = XU._delayInfo || [], XU._delayInfo.push(cU);
        return XU._boundingInfo = new DU.b(this._extend.minimum, this._extend.maximum), XU
      }
      serialize() {
        const UU = {};
        return UU.id = this.id, UU.uniqueId = this.uniqueId, UU.updatable = this._updatable, NU.b && NU.b.HasTags(this) && (UU.tags = NU.b.GetTags(this)), UU
      }
      _toNumberArray(UU) {
        return Array.isArray(UU) ? UU : Array.prototype.slice.call(UU)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const UU in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, UU) && (this._vertexBuffers[UU]._buffer._data = null)
      }
      serializeVerticeData() {
        const UU = this.serialize();
        return this.isVerticesDataPresent(AU.h.PositionKind) && (UU.positions = this._toNumberArray(this.getVerticesData(AU.h.PositionKind)), this.isVertexBufferUpdatable(AU.h.PositionKind) && (UU.positionsUpdatable = !0)), this.isVerticesDataPresent(AU.h.NormalKind) && (UU.normals = this._toNumberArray(this.getVerticesData(AU.h.NormalKind)), this.isVertexBufferUpdatable(AU.h.NormalKind) && (UU.normalsUpdatable = !0)), this.isVerticesDataPresent(AU.h.TangentKind) && (UU.tangents = this._toNumberArray(this.getVerticesData(AU.h.TangentKind)), this.isVertexBufferUpdatable(AU.h.TangentKind) && (UU.tangentsUpdatable = !0)), this.isVerticesDataPresent(AU.h.UVKind) && (UU.uvs = this._toNumberArray(this.getVerticesData(AU.h.UVKind)), this.isVertexBufferUpdatable(AU.h.UVKind) && (UU.uvsUpdatable = !0)), this.isVerticesDataPresent(AU.h.UV2Kind) && (UU.uvs2 = this._toNumberArray(this.getVerticesData(AU.h.UV2Kind)), this.isVertexBufferUpdatable(AU.h.UV2Kind) && (UU.uvs2Updatable = !0)), this.isVerticesDataPresent(AU.h.UV3Kind) && (UU.uvs3 = this._toNumberArray(this.getVerticesData(AU.h.UV3Kind)), this.isVertexBufferUpdatable(AU.h.UV3Kind) && (UU.uvs3Updatable = !0)), this.isVerticesDataPresent(AU.h.UV4Kind) && (UU.uvs4 = this._toNumberArray(this.getVerticesData(AU.h.UV4Kind)), this.isVertexBufferUpdatable(AU.h.UV4Kind) && (UU.uvs4Updatable = !0)), this.isVerticesDataPresent(AU.h.UV5Kind) && (UU.uvs5 = this._toNumberArray(this.getVerticesData(AU.h.UV5Kind)), this.isVertexBufferUpdatable(AU.h.UV5Kind) && (UU.uvs5Updatable = !0)), this.isVerticesDataPresent(AU.h.UV6Kind) && (UU.uvs6 = this._toNumberArray(this.getVerticesData(AU.h.UV6Kind)), this.isVertexBufferUpdatable(AU.h.UV6Kind) && (UU.uvs6Updatable = !0)), this.isVerticesDataPresent(AU.h.ColorKind) && (UU.colors = this._toNumberArray(this.getVerticesData(AU.h.ColorKind)), this.isVertexBufferUpdatable(AU.h.ColorKind) && (UU.colorsUpdatable = !0)), this.isVerticesDataPresent(AU.h.MatricesIndicesKind) && (UU.matricesIndices = this._toNumberArray(this.getVerticesData(AU.h.MatricesIndicesKind)), UU.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(AU.h.MatricesIndicesKind) && (UU.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(AU.h.MatricesWeightsKind) && (UU.matricesWeights = this._toNumberArray(this.getVerticesData(AU.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(AU.h.MatricesWeightsKind) && (UU.matricesWeightsUpdatable = !0)), UU.indices = this._toNumberArray(this.yyU()), UU
      }
      static ExtractFromMesh(UU, XU) {
        const zU = UU._geometry;
        return zU ? zU.copy(XU) : null
      }
      static RandomId() {
        return EU.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(UU, XU) {
        for (let zU = 0; zU < XU.geometries.length; zU++)
          if (XU.geometries[zU]._loadedUniqueId === UU) return XU.geometries[zU];
        return null
      }
      static _ImportGeometry(UU, XU) {
        const zU = XU.nS(),
          cU = UU.geometryUniqueId,
          QU = UU.geometryId;
        if (cU || QU) {
          const UU = cU ? this._GetGeometryByLoadedUniqueId(cU, zU) : zU.getGeometryById(QU);
          UU && UU.applyToMesh(XU)
        } else if (UU instanceof ArrayBuffer) {
          const zU = XU._binaryInfo;
          if (zU.positionsAttrDesc && zU.positionsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.positionsAttrDesc.offset, zU.positionsAttrDesc.count);
            XU.setVerticesData(AU.h.PositionKind, cU, !1)
          }
          if (zU.normalsAttrDesc && zU.normalsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.normalsAttrDesc.offset, zU.normalsAttrDesc.count);
            XU.setVerticesData(AU.h.NormalKind, cU, !1)
          }
          if (zU.tangetsAttrDesc && zU.tangetsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.tangetsAttrDesc.offset, zU.tangetsAttrDesc.count);
            XU.setVerticesData(AU.h.TangentKind, cU, !1)
          }
          if (zU.uvsAttrDesc && zU.uvsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvsAttrDesc.offset, zU.uvsAttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UVKind, cU, !1)
          }
          if (zU.uvs2AttrDesc && zU.uvs2AttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvs2AttrDesc.offset, zU.uvs2AttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UV2Kind, cU, !1)
          }
          if (zU.uvs3AttrDesc && zU.uvs3AttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvs3AttrDesc.offset, zU.uvs3AttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UV3Kind, cU, !1)
          }
          if (zU.uvs4AttrDesc && zU.uvs4AttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvs4AttrDesc.offset, zU.uvs4AttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UV4Kind, cU, !1)
          }
          if (zU.uvs5AttrDesc && zU.uvs5AttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvs5AttrDesc.offset, zU.uvs5AttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UV5Kind, cU, !1)
          }
          if (zU.uvs6AttrDesc && zU.uvs6AttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.uvs6AttrDesc.offset, zU.uvs6AttrDesc.count);
            if (aU.c)
              for (let UU = 1; UU < cU.length; UU += 2) cU[UU] = 1 - cU[UU];
            XU.setVerticesData(AU.h.UV6Kind, cU, !1)
          }
          if (zU.colorsAttrDesc && zU.colorsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.colorsAttrDesc.offset, zU.colorsAttrDesc.count);
            XU.setVerticesData(AU.h.ColorKind, cU, !1, zU.colorsAttrDesc.stride)
          }
          if (zU.matricesIndicesAttrDesc && zU.matricesIndicesAttrDesc.count > 0) {
            const cU = new Int32Array(UU, zU.matricesIndicesAttrDesc.offset, zU.matricesIndicesAttrDesc.count),
              yU = [];
            for (let UU = 0; UU < cU.length; UU++) {
              const XU = cU[UU];
              yU.push(255 & XU), yU.push((65280 & XU) >> 8), yU.push((16711680 & XU) >> 16), yU.push(XU >> 24 & 255)
            }
            XU.setVerticesData(AU.h.MatricesIndicesKind, yU, !1)
          }
          if (zU.matricesIndicesExtraAttrDesc && zU.matricesIndicesExtraAttrDesc.count > 0) {
            const cU = new Int32Array(UU, zU.matricesIndicesExtraAttrDesc.offset, zU.matricesIndicesExtraAttrDesc.count),
              yU = [];
            for (let UU = 0; UU < cU.length; UU++) {
              const XU = cU[UU];
              yU.push(255 & XU), yU.push((65280 & XU) >> 8), yU.push((16711680 & XU) >> 16), yU.push(XU >> 24 & 255)
            }
            XU.setVerticesData(AU.h.MatricesIndicesExtraKind, yU, !1)
          }
          if (zU.matricesWeightsAttrDesc && zU.matricesWeightsAttrDesc.count > 0) {
            const cU = new Float32Array(UU, zU.matricesWeightsAttrDesc.offset, zU.matricesWeightsAttrDesc.count);
            XU.setVerticesData(AU.h.MatricesWeightsKind, cU, !1)
          }
          if (zU.indicesAttrDesc && zU.indicesAttrDesc.count > 0) {
            const cU = new Int32Array(UU, zU.indicesAttrDesc.offset, zU.indicesAttrDesc.count);
            XU.setIndices(cU, null)
          }
          if (zU.subMeshesAttrDesc && zU.subMeshesAttrDesc.count > 0) {
            const cU = new Int32Array(UU, zU.subMeshesAttrDesc.offset, 5 * zU.subMeshesAttrDesc.count);
            XU.uB = [];
            for (let UU = 0; UU < zU.subMeshesAttrDesc.count; UU++) {
              const zU = cU[5 * UU + 0],
                yU = cU[5 * UU + 1],
                QU = cU[5 * UU + 2],
                AU = cU[5 * UU + 3],
                oU = cU[5 * UU + 4];
              FU.d.AddToMesh(zU, yU, QU, AU, oU, XU)
            }
          }
        } else if (UU.positions && UU.normals && UU.indices) {
          if (XU.setVerticesData(AU.h.PositionKind, UU.positions, UU.positions._updatable || UU.positionsUpdatable), XU.setVerticesData(AU.h.NormalKind, UU.normals, UU.normals._updatable || UU.normalsUpdatable), UU.tangents && XU.setVerticesData(AU.h.TangentKind, UU.tangents, UU.tangents._updatable || UU.tangentsUpdatable), UU.uvs && XU.setVerticesData(AU.h.UVKind, UU.uvs, UU.uvs._updatable || UU.uvsUpdatable), UU.uvs2 && XU.setVerticesData(AU.h.UV2Kind, UU.uvs2, UU.uvs2._updatable || UU.uvs2Updatable), UU.uvs3 && XU.setVerticesData(AU.h.UV3Kind, UU.uvs3, UU.uvs3._updatable || UU.uvs3Updatable), UU.uvs4 && XU.setVerticesData(AU.h.UV4Kind, UU.uvs4, UU.uvs4._updatable || UU.uvs4Updatable), UU.uvs5 && XU.setVerticesData(AU.h.UV5Kind, UU.uvs5, UU.uvs5._updatable || UU.uvs5Updatable), UU.uvs6 && XU.setVerticesData(AU.h.UV6Kind, UU.uvs6, UU.uvs6._updatable || UU.uvs6Updatable), UU.colors && XU.setVerticesData(AU.h.ColorKind, yU.e.CheckColors4(UU.colors, UU.positions.length / 3), UU.colors._updatable), UU.matricesIndices)
            if (UU.matricesIndices._isExpanded || UU.matricesIndicesExpanded) delete UU.matricesIndices._isExpanded, delete UU.matricesIndicesExpanded, XU.setVerticesData(AU.h.MatricesIndicesKind, UU.matricesIndices, UU.matricesIndices._updatable || UU.matricesIndicesUpdatable);
            else {
              const zU = [];
              for (let XU = 0; XU < UU.matricesIndices.length; XU++) {
                const cU = UU.matricesIndices[XU];
                zU.push(255 & cU), zU.push((65280 & cU) >> 8), zU.push((16711680 & cU) >> 16), zU.push(cU >> 24 & 255)
              }
              XU.setVerticesData(AU.h.MatricesIndicesKind, zU, UU.matricesIndices._updatable || UU.matricesIndicesUpdatable)
            } if (UU.matricesIndicesExtra)
            if (UU.matricesIndicesExtraExpanded || UU.matricesIndicesExtra._isExpanded) delete UU.matricesIndices._isExpanded, delete UU.matricesIndicesExtraExpanded, XU.setVerticesData(AU.h.MatricesIndicesExtraKind, UU.matricesIndicesExtra, UU.matricesIndicesExtra._updatable || UU.matricesIndicesExtraUpdatable);
            else {
              const zU = [];
              for (let XU = 0; XU < UU.matricesIndicesExtra.length; XU++) {
                const cU = UU.matricesIndicesExtra[XU];
                zU.push(255 & cU), zU.push((65280 & cU) >> 8), zU.push((16711680 & cU) >> 16), zU.push(cU >> 24 & 255)
              }
              XU.setVerticesData(AU.h.MatricesIndicesExtraKind, zU, UU.matricesIndicesExtra._updatable || UU.matricesIndicesExtraUpdatable)
            } UU.matricesWeights && (gU._CleanMatricesWeights(UU, XU), XU.setVerticesData(AU.h.MatricesWeightsKind, UU.matricesWeights, UU.matricesWeights._updatable)), UU.matricesWeightsExtra && XU.setVerticesData(AU.h.MatricesWeightsExtraKind, UU.matricesWeightsExtra, UU.matricesWeights._updatable), XU.setIndices(UU.indices, null)
        }
        if (UU.uB) {
          XU.uB = [];
          for (let zU = 0; zU < UU.uB.length; zU++) {
            const cU = UU.uB[zU];
            FU.d.AddToMesh(cU.materialIndex, cU.verticesStart, cU.verticesCount, cU.indexStart, cU.indexCount, XU)
          }
        }
        XU._shouldGenerateFlatShading && (XU.convertToFlatShadedMesh(), XU._shouldGenerateFlatShading = !1), XU.computeWorldMatrix(!0), zU.onMeshImportedObservable.notifyObservers(XU)
      }
      static _CleanMatricesWeights(UU, XU) {
        const zU = .001;
        if (!oU.d.CleanBoneMatrixWeights) return;
        let cU;
        if (!(UU.skeletonId > -1)) return;
        {
          const zU = XU.nS().getLastSkeletonById(UU.skeletonId);
          if (!zU) return;
          cU = zU.bones.length
        }
        const yU = XU.getVerticesData(AU.h.MatricesIndicesKind),
          QU = XU.getVerticesData(AU.h.MatricesIndicesExtraKind),
          FU = UU.matricesWeights,
          DU = UU.matricesWeightsExtra,
          EU = UU.numBoneInfluencer,
          YU = FU.length;
        for (let AU = 0; AU < YU; AU += 4) {
          let UU = 0,
            XU = -1;
          for (let cU = 0; cU < 4; cU++) {
            const yU = FU[AU + cU];
            UU += yU, yU < zU && XU < 0 && (XU = cU)
          }
          if (DU)
            for (let cU = 0; cU < 4; cU++) {
              const yU = DU[AU + cU];
              UU += yU, yU < zU && XU < 0 && (XU = cU + 4)
            }
          if ((XU < 0 || XU > EU - 1) && (XU = EU - 1), UU > zU) {
            const XU = 1 / UU;
            for (let UU = 0; UU < 4; UU++) FU[AU + UU] *= XU;
            if (DU)
              for (let UU = 0; UU < 4; UU++) DU[AU + UU] *= XU
          } else XU >= 4 ? (DU[AU + XU - 4] = 1 - UU, QU[AU + XU - 4] = cU) : (FU[AU + XU] = 1 - UU, yU[AU + XU] = cU)
        }
        XU.setVerticesData(AU.h.MatricesIndicesKind, yU), UU.matricesWeightsExtra && XU.setVerticesData(AU.h.MatricesIndicesExtraKind, QU)
      }
      static Parse(UU, XU, zU) {
        const yU = new gU(UU.id, XU, void 0, UU.updatable);
        return yU._loadedUniqueId = UU.uniqueId, NU.b && NU.b.AddTagsTo(yU, UU.tags), UU.delayLoadingFile ? (yU.delayLoadState = 4, yU.delayLoadingFile = zU + UU.delayLoadingFile, yU._boundingInfo = new DU.b(cU.q.FromArray(UU.boundingBoxMinimum), cU.q.FromArray(UU.boundingBoxMaximum)), yU._delayInfo = [], UU.hasUVs && yU._delayInfo.push(AU.h.UVKind), UU.hasUVs2 && yU._delayInfo.push(AU.h.UV2Kind), UU.hasUVs3 && yU._delayInfo.push(AU.h.UV3Kind), UU.hasUVs4 && yU._delayInfo.push(AU.h.UV4Kind), UU.hasUVs5 && yU._delayInfo.push(AU.h.UV5Kind), UU.hasUVs6 && yU._delayInfo.push(AU.h.UV6Kind), UU.hasColors && yU._delayInfo.push(AU.h.ColorKind), UU.hasMatricesIndices && yU._delayInfo.push(AU.h.MatricesIndicesKind), UU.hasMatricesWeights && yU._delayInfo.push(AU.h.MatricesWeightsKind), yU._delayLoadingFunction = QU.c.ImportVertexData) : QU.c.ImportVertexData(UU, yU), XU.pushGeometry(yU, !0), yU
      }
    }
  },
  41540: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      f: () => pU
    });
    var cU = zU(37819),
      yU = zU(39493),
      QU = zU(41512),
      AU = zU(41481),
      FU = zU(39486),
      oU = zU(41515),
      DU = zU(41237),
      EU = zU(37863);
    class YU extends QU.c {
      constructor(UU, XU) {
        super(UU, XU.nS()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, XU.WUU(this), this._sourceMesh = XU, this._unIndexed = XU._unIndexed, this.position.YL(XU.position), this.rotation.YL(XU.rotation), this.RY.YL(XU.RY), XU.rotationQuaternion && (this.rotationQuaternion = XU.rotationQuaternion.clone()), this.animations = XU.animations.slice();
        for (const zU of XU.getAnimationRanges()) null != zU && this.createAnimationRange(zU.name, zU.from, zU.to);
        if (this.infiniteDistance = XU.infiniteDistance, this.setPivotMatrix(XU.getPivotMatrix()), XU.skeleton || XU.morphTargetManager || !XU.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const UU = XU.gM();
          this.buildBoundingInfo(UU.minimum, UU.maximum)
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
      set receiveShadows(UU) {
        this._sourceMesh?.receiveShadows !== UU && yU.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(UU) {
        this._sourceMesh?.material !== UU && yU.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(UU) {
        this._sourceMesh?.visibility !== UU && yU.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(UU) {
        this._sourceMesh?.skeleton !== UU && yU.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(UU) {
        this._sourceMesh && UU !== this._sourceMesh.renderingGroupId && yU.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(UU) {
        this._sourceMesh && UU !== this._sourceMesh.meshBlendingTag && yU.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get KyU() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(UU) {
        return this._sourceMesh.createInstance(UU)
      }
      isReady() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(UU, !0)
      }
      getVerticesData(UU, XU, zU) {
        return this._sourceMesh.getVerticesData(UU, XU, zU)
      }
      copyVerticesData(UU, XU) {
        this._sourceMesh.copyVerticesData(UU, XU)
      }
      getVertexBuffer(UU, XU) {
        return this._sourceMesh.getVertexBuffer(UU, XU)
      }
      setVerticesData(UU, XU, zU, cU) {
        return this.KyU && this.KyU.setVerticesData(UU, XU, zU, cU), this.KyU
      }
      updateVerticesData(UU, XU, zU, cU) {
        return this.KyU && this.KyU.updateVerticesData(UU, XU, zU, cU), this.KyU
      }
      setIndices(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.KyU && this.KyU.setIndices(UU, XU), this.KyU
      }
      isVerticesDataPresent(UU) {
        return this._sourceMesh.isVerticesDataPresent(UU)
      }
      yyU() {
        return this._sourceMesh.yyU()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let UU, XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.gM().isLocked) return this;
        UU = "object" === typeof XU ? XU : {
          applySkeleton: XU,
          applyMorph: zU
        };
        const cU = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(UU, null, DU.h.PositionKind), cU), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(UU, XU) {
        if (super._activate(UU, XU), this._sourceMesh.uB || yU.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, UU), XU) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== oU.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new cU.e);
          const UU = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, cU.l.Sp[7].YL(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.YL(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.YL(cU.l.Sp[7]), this._currentLOD._masterMesh = UU, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get UH() {
        return !0
      }
      getLOD(UU) {
        if (!UU) return this;
        const XU = this.KyU.getLODLevels();
        if (XU && 0 !== XU.length) {
          const XU = this.gM();
          this._currentLOD = this.KyU.getLOD(UU, XU.dyU)
        } else this._currentLOD = this.KyU;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(UU) {
        return this.KyU._preActivateForIntermediateRendering(UU)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.uB)
          for (let UU = 0; UU < this._sourceMesh.uB.length; UU++) this._sourceMesh.uB[UU].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.gM().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(UU);
        if (FU.c.DeepCopy(this, cU, ["name", "uB", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "KyU", "UH", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "jyU", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "fFU", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), XU && (cU.parent = XU), !zU)
          for (let yU = 0; yU < this.nS().meshes.length; yU++) {
            const UU = this.nS().meshes[yU];
            UU.parent === this && UU.clone(UU.name, cU)
          }
        return cU.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(cU), cU
      }
      dispose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.LUU(this), super.dispose(UU, XU)
      }
      _serializeAsParent(UU) {
        super._serializeAsParent(UU), UU.parentId = this._sourceMesh.uniqueId, UU.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0, XU && XU.newSourcedMesh);
        cU && zU && zU(this, cU);
        for (const yU of this.getChildTransformNodes(!0)) yU.instantiateHierarchy(cU, XU, zU);
        return cU
      }
    }
    let NU = !1;

    function IU(UU, XU, zU, cU, yU) {
      for (let QU = 0; QU < XU.length; QU++) {
        const AU = UU[XU[QU]] ?? 0,
          FU = yU + zU[QU];
        AU.toArray ? AU.toArray(cU, FU) : AU.copyToArray ? AU.copyToArray(cU, FU) : cU[FU] = AU
      }
    }

    function pU() {
      NU || (NU = !0, AU.b._instancedMeshFactory = (UU, XU) => {
        const zU = new YU(UU, XU);
        if (XU.XM) {
          zU.XM = {};
          for (const UU in XU.XM) zU.XM[UU] = XU.XM[UU]
        }
        return zU
      }, AU.b.prototype.jH = function(UU, XU) {
        if (!this.XM) {
          this.XM = {};
          for (const UU of this.instances) UU.XM = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.qp().getCaps().vertexArrayObject ? {} : void 0
        }), this.XM[UU] = null, this._userInstancedBuffersStorage.strides[UU] = XU;
        const zU = this._userInstancedBuffersStorage;
        zU.interleavedKinds = [], zU.interleavedOffsets = [], zU.interleavedRowStride = 0;
        for (const cU in zU.strides) zU.interleavedKinds.push(cU), zU.interleavedOffsets.push(zU.interleavedRowStride), zU.interleavedRowStride += zU.strides[cU];
        zU.interleavedData = new Float32Array(32 * zU.interleavedRowStride);
        for (const cU in zU.interleavedBuffers) zU.interleavedBuffers[cU].buffer.dispose();
        zU.interleavedBuffers = {}, zU.vertexBuffers[UU] = null;
        for (const cU of this.instances) cU.XM[UU] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, AU.b.prototype._processInstancedBuffers = function(UU, XU) {
        const zU = this._userInstancedBuffersStorage,
          cU = zU.interleavedRowStride;
        if (!cU) return;
        const yU = UU ? UU.length : 0,
          QU = (yU + 1) * cU;
        let AU = zU.interleavedData;
        if (AU.length < QU) {
          let UU = AU.length;
          for (; UU < QU;) UU *= 2;
          AU = zU.interleavedData = new Float32Array(UU)
        }
        const FU = zU.interleavedKinds,
          oU = zU.interleavedOffsets;
        let EU = 0;
        XU && (IU(this.XM, FU, oU, AU, EU), EU += cU);
        for (let DU = 0; DU < yU; DU++) IU(UU[DU].XM, FU, oU, AU, EU), EU += cU;
        let YU = "shared",
          NU = zU.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (YU = this._instanceDataStorage.engine.currentRenderPassId, zU.renderPasses || (zU.renderPasses = {}), zU.renderPasses[YU] || (zU.renderPasses[YU] = {}), NU = zU.renderPasses[YU]);
        const pU = zU.interleavedBuffers[YU];
        let aU = !pU || pU.data !== AU;
        for (let DU = 0; !aU && DU < FU.length; DU++) aU = !NU[FU[DU]];
        if (!aU) return void pU.buffer.updateDirectly(AU, 0);
        pU?.buffer.dispose();
        const tU = new DU.d(this.qp(), AU, !0, cU, !1, !0);
        for (let DU = 0; DU < FU.length; DU++) {
          const UU = FU[DU],
            XU = tU.createVertexBuffer(UU, oU[DU], zU.strides[UU]);
          XU.hashCode += XU.byteOffset * 2 ** 24, NU[UU] = XU
        }
        zU.interleavedBuffers[YU] = {
          buffer: tU,
          data: AU
        }, this._invalidateInstanceVertexArrayObject()
      }, AU.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const UU in this._userInstancedBuffersStorage.vertexArrayObjects) this.qp().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[UU]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, AU.b.prototype._disposeInstanceSpecificData = function() {
        for (const XU in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[XU].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const XU in this.XM) this._userInstancedBuffersStorage.vertexBuffers[XU] && this._userInstancedBuffersStorage.vertexBuffers[XU].dispose();
        const UU = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (UU) {
          for (const XU in UU) UU[XU].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.XM = {}
      }, (0, EU.h)("BABYLON.InstancedMesh", YU))
    }
  },
  41481: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => bU,
      c: () => hU,
      d: () => nU
    });
    var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU = zU(37846),
      kU = zU(41205),
      GU = zU(41152),
      BU = zU(39486),
      ZU = zU(41138),
      RU = zU(41486),
      PU = zU(41309),
      WU = zU(37819),
      dU = zU(37923),
      LU = zU(41314),
      eU = zU(41237),
      CU = zU(41493),
      wU = zU(41495),
      qU = zU(41512),
      OU = zU(41378),
      SU = zU(41374),
      rU = zU(41446),
      uU = zU(41523),
      fU = zU(41504),
      iU = zU(41134),
      HU = zU(39493),
      MU = zU(37863),
      vU = zU(40989),
      VU = zU(41265);
    class sU {
      constructor(UU, XU) {
        this.distanceOrScreenCoverage = UU, this.mesh = XU
      }
    }
    class nU {}
    class mU {
      constructor() {
        this.batchCache = new xU(this), this.batchCacheReplacementModeInFrozenMode = new xU(this), this.instancesBufferSize = 2048
      }
    }
    class lU {
      constructor() {
        this.renderPasses = {}
      }
    }
    class xU {
      constructor(UU) {
        this.parent = UU, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class JU {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class jU {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const KU = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class bU extends qU.c {
      static _GetDefaultSideOrientation(UU) {
        return UU || bU.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(UU) {
        this._internalMeshDataInfo._useLODScreenCoverage = UU, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(UU) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== UU && (UU && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(eU.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(eU.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = UU, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new gU.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new gU.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new gU.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new gU.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new gU.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(UU) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(UU)
      }
      get jyU() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(UU) {
        this._internalMeshDataInfo._forcedInstanceCount = UU
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(UU) {
        this._internalMeshDataInfo._sideOrientation = UU, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === UU || !this._scene.useRightHandedSystem && 0 === UU
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(UU) {
        this.sideOrientation = UU, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(UU) {
        this._internalMeshDataInfo._overrideRenderingFillMode = UU
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(UU) {
        UU && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (UU.sideOrientation = null), this._setMaterial(UU)
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
      set isUnIndexed(UU) {
        this._unIndexed !== UU && (this._unIndexed = UU, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const UU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return UU ? UU.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const UU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return UU ? UU.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(UU) {
        this._instanceDataStorage.manualUpdate = UU
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(UU) {
        this._instanceDataStorage.previousManualUpdate = UU
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(UU) {
        this._instanceDataStorage.forceMatrixUpdates = UU
      }
      _copySource(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yU = this.nS();
        if (UU._geometry && UU._geometry.applyToMesh(this), BU.c.DeepCopy(UU, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "jyU", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "UH", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "fFU", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = UU, yU.useClonedMeshMap && (UU._internalMeshDataInfo.meshMap || (UU._internalMeshDataInfo.meshMap = {}), UU._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = UU._originalBuilderSideOrientation, this._creationDataStorage = UU._creationDataStorage, UU._ranges) {
          const XU = UU._ranges;
          for (const UU in XU) Object.prototype.hasOwnProperty.call(XU, UU) && XU[UU] && this.createAnimationRange(UU, XU[UU].from, XU[UU].to)
        }
        if (UU.metadata && UU.metadata.clone ? this.metadata = UU.metadata.clone() : this.metadata = UU.metadata, this._internalMetadata = UU._internalMetadata, this.meshBlendingTag = UU.meshBlendingTag, ZU.b && ZU.b.HasTags(UU) && ZU.b.AddTagsTo(this, ZU.b.GetTags(UU, !0)), this.YC(UU.isEnabled(!1)), this.parent = UU.parent, this.setPivotMatrix(UU.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + UU.id, this.material = UU.material, !XU) {
          const yU = UU.getDescendants(!0);
          for (let UU = 0; UU < yU.length; UU++) {
            const QU = yU[UU];
            QU._isMesh ? (KU.parent = this, KU.doNotCloneChildren = XU, KU.clonePhysicsImpostor = zU, KU.cloneThinInstances = cU, QU.clone(this.name + "." + QU.name, KU)) : QU.clone && QU.clone(this.name + "." + QU.name, this)
          }
        }
        if (UU.morphTargetManager && (this.morphTargetManager = UU.morphTargetManager), (0, vU.e)(yU.getPhysicsEngine)) {
          const XU = yU.getPhysicsEngine();
          if (zU && XU)
            if (1 === XU.getPluginVersion()) {
              const zU = XU.getImpostorForPhysicsObject(UU);
              zU && (this.physicsImpostor = zU.clone(this))
            } else 2 === XU.getPluginVersion() && UU.physicsBody && UU.physicsBody.clone(this)
        }
        for (let QU = 0; QU < yU.nB.length; QU++) {
          const XU = yU.nB[QU];
          XU.emitter === UU && XU.clone(XU.name, this)
        }
        if (this.skeleton = UU.skeleton, cU && (UU._thinInstanceDataStorage.matrixData ? (this.fUU("matrix", new Float32Array(UU._thinInstanceDataStorage.matrixData), 16, !UU._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = UU._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = UU._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = UU._thinInstanceDataStorage.matrixBufferSize, UU._userThinInstanceBuffersStorage)) {
          const XU = UU._userThinInstanceBuffersStorage;
          for (const UU in XU.data) this.fUU(UU, new Float32Array(XU.data[UU]), XU.strides[UU], !XU.vertexBuffers?.[UU]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[UU] = XU.sizes[UU]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(UU) {
        let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QU = arguments.length > 4 ? arguments[4] : void 0,
          AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(UU, zU), this._internalMeshDataInfo = new jU, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new JU, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = bU.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, zU = this.nS(), this._instanceDataStorage = new lU, this._instanceDataStorage.engine = zU.qp(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new mU), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (UU, XU, zU) => {
          UU && zU && (this._uniformBuffer ? this.transferToEffect(XU) : zU.bindOnlyWorldMatrix(XU))
        };
        let FU = !1;
        if (cU && void 0 === cU._addToSceneRootNodes) {
          const UU = cU;
          XU = UU.parent ?? null, yU = UU.source ?? null, QU = UU.doNotCloneChildren ?? !1, AU = UU.clonePhysicsImpostor ?? !0, FU = UU.cloneThinInstances ?? !1
        } else XU = cU;
        yU && this._copySource(yU, QU, AU, FU), null !== XU && (this.parent = XU), this._instanceDataStorage.hardwareInstancedRendering = this.qp().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = UU => {
          UU.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new gU.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), yU && yU.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = 0 === this.getTotalVertices() || XU && XU.doNotInstantiate && (!0 === XU.doNotInstantiate || XU.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        cU.parent = UU || this.parent, cU.position = this.position.clone(), cU.RY = this.RY.clone(), this.rotationQuaternion ? cU.rotationQuaternion = this.rotationQuaternion.clone() : cU.rotation = this.rotation.clone(), zU && zU(this, cU);
        for (const yU of this.getChildTransformNodes(!0)) "InstancedMesh" === yU.getClassName() && "Mesh" === cU.getClassName() && yU.KyU === this ? yU.instantiateHierarchy(cU, {
          doNotInstantiate: XU && XU.doNotInstantiate || !1,
          newSourcedMesh: cU
        }, zU) : yU.instantiateHierarchy(cU, XU, zU);
        return cU
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(UU) {
        let XU = super.toString(UU);
        if (XU += ", n vertices: " + this.getTotalVertices(), XU += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let zU = 0; zU < this.animations.length; zU++) XU += ", animation[0]: " + this.animations[zU].toString(UU);
        if (UU)
          if (this._geometry) {
            const UU = this.yyU(),
              zU = this.getVerticesData(eU.h.PositionKind);
            zU && UU && (XU += ", flat shading: " + (zU.length / 3 === UU.length ? "YES" : "NO"))
          } else XU += ", flat shading: UNKNOWN";
        return XU
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const UU of this.instances) UU._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const UU = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((XU, zU) => XU.distanceOrScreenCoverage < zU.distanceOrScreenCoverage ? UU : XU.distanceOrScreenCoverage > zU.distanceOrScreenCoverage ? -UU : 0))
      }
      addLODLevel(UU, XU) {
        if (XU && XU._masterMesh) return HU.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const zU = new sU(UU, XU);
        return this._internalMeshDataInfo._LODLevels.push(zU), XU && (XU._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(UU) {
        const XU = this._internalMeshDataInfo;
        for (let zU = 0; zU < XU._LODLevels.length; zU++) {
          const cU = XU._LODLevels[zU];
          if (cU.distanceOrScreenCoverage === UU) return cU.mesh
        }
        return null
      }
      removeLODLevel(UU) {
        const XU = this._internalMeshDataInfo;
        for (let zU = 0; zU < XU._LODLevels.length; zU++) XU._LODLevels[zU].mesh === UU && (XU._LODLevels.splice(zU, 1), UU && (UU._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(UU, XU) {
        const zU = this._internalMeshDataInfo;
        if (!zU._LODLevels || 0 === zU._LODLevels.length) return this;
        const cU = XU || this.gM().dyU,
          yU = UU.mode === PU.d.ORTHOGRAPHIC_CAMERA ? UU.minZ : cU.centerWorld.subtract(UU.globalPosition).length();
        let QU = yU,
          AU = 1;
        if (zU._useLODScreenCoverage) {
          const XU = UU.screenArea;
          let zU = cU.radiusWorld * UU.minZ / yU;
          zU = zU * zU * Math.PI, QU = zU / XU, AU = -1
        }
        if (AU * zU._LODLevels[zU._LODLevels.length - 1].distanceOrScreenCoverage > AU * QU) return this.onLODLevelSelection && this.onLODLevelSelection(QU, this, this), this;
        for (let FU = 0; FU < zU._LODLevels.length; FU++) {
          const UU = zU._LODLevels[FU];
          if (AU * UU.distanceOrScreenCoverage < AU * QU) {
            if (UU.mesh) {
              if (4 === UU.mesh.delayLoadState) return UU.mesh._checkDelayState(), this;
              if (2 === UU.mesh.delayLoadState) return this;
              UU.mesh._preActivate(), UU.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(QU, this, UU.mesh), UU.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(QU, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(UU, XU, zU, cU) {
        if (!this._geometry) return null;
        let yU = cU ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[UU]?.getFloatData(this.instances.length + 1, zU || XU && 1 !== this._geometry.meshes.length);
        return yU || (yU = this._geometry.getVerticesData(UU, XU, zU)), yU
      }
      copyVerticesData(UU, XU) {
        this._geometry && this._geometry.copyVerticesData(UU, XU)
      }
      getVertexBuffer(UU, XU) {
        return this._geometry ? (XU ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[UU]) ?? this._geometry.getVertexBuffer(UU) : null
      }
      isVerticesDataPresent(UU, XU) {
        return this._geometry ? !XU && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[UU] || this._geometry.isVerticesDataPresent(UU) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(UU)
      }
      isVertexBufferUpdatable(UU, XU) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(UU);
        if (!XU) {
          const XU = this._userInstancedBuffersStorage?.vertexBuffers[UU];
          if (XU) return XU.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(UU)
      }
      getVerticesDataKinds(UU) {
        if (!this._geometry) {
          const UU = [];
          if (this._delayInfo)
            for (const XU of this._delayInfo) UU.push(XU);
          return UU
        }
        const XU = this._geometry.getVerticesDataKinds();
        if (!UU && this._userInstancedBuffersStorage)
          for (const zU in this._userInstancedBuffersStorage.vertexBuffers) - 1 === XU.indexOf(zU) && XU.push(zU);
        return XU
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      yyU(UU, XU) {
        return this._geometry ? this._geometry.yyU(UU, XU) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(UU)) return !1;
        if (!this.uB || 0 === this.uB.length) return !0;
        if (!UU) return !0;
        const zU = this.qp(),
          cU = this.nS(),
          yU = XU || zU.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const QU = this.material || cU.defaultMaterial;
        if (QU)
          if (QU._storeEffectOnSubMeshes)
            for (const FU of this.uB) {
              const UU = FU.Hp();
              if (UU)
                if (UU._storeEffectOnSubMeshes) {
                  if (!UU.isReadyForSubMesh(this, FU, yU)) return !1
                } else if (!UU.isReady(this, yU)) return !1
            } else if (!QU.isReady(this, yU)) return !1;
        const AU = zU.currentRenderPassId;
        for (const FU of this.lightSources) {
          const UU = FU.getShadowGenerators();
          if (!UU) continue;
          const XU = UU.values();
          for (let cU = XU.next(); !0 !== cU.done; cU = XU.next()) {
            const UU = cU.value;
            if (UU && (!UU.getShadowMap()?.renderList || UU.getShadowMap()?.renderList && -1 !== UU.getShadowMap()?.renderList?.indexOf(this))) {
              const XU = UU.getShadowMap().renderPassIds ?? [zU.currentRenderPassId];
              for (let cU = 0; cU < XU.length; ++cU) {
                zU.currentRenderPassId = XU[cU];
                for (const XU of this.uB)
                  if (!UU.isReady(XU, yU, XU.Hp()?.needAlphaBlendingForMesh(this) ?? !1)) return zU.currentRenderPassId = AU, !1
              }
              zU.currentRenderPassId = AU
            }
          }
        }
        for (const FU of this._internalMeshDataInfo._LODLevels)
          if (FU.mesh && !FU.mesh.isReady(yU)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Mp() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(UU) {
        this._instanceDataStorage.overridenInstanceCount = UU
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const UU = this._instanceDataStorage.engine.currentRenderPassId;
        let XU = this._instanceDataStorage.renderPasses[UU];
        return XU || (XU = new mU, this._instanceDataStorage.renderPasses[UU] = XU), XU
      }
      _preActivate() {
        const UU = this._internalMeshDataInfo,
          XU = this.nS().getRenderId();
        return UU._preActivateId === XU || (UU._preActivateId = XU, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(UU) {
        const XU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return XU.visibleInstances && (XU.visibleInstances.intermediateDefaultRenderId = UU), this
      }
      _registerInstanceForRenderId(UU, XU) {
        const zU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return zU.visibleInstances || (zU.visibleInstances = {
          defaultRenderId: XU,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), zU.visibleInstances[XU] || (void 0 === zU.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete zU.visibleInstances[zU.previousRenderId], zU.previousRenderId = XU, zU.visibleInstances[XU] = new Array), zU.visibleInstances[XU].push(UU), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.ip || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let UU, XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.gM().isLocked) return this;
        UU = "object" === typeof XU ? XU : {
          applySkeleton: XU,
          applyMorph: zU
        };
        const cU = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(UU, null, eU.h.PositionKind), cU), this
      }
      _createGlobalSubMesh(UU) {
        const XU = this.getTotalVertices();
        if (!XU || !this.yyU()) return null;
        if (this.uB && this.uB.length > 0) {
          const zU = this.yyU();
          if (!zU) return null;
          const cU = zU.length;
          let yU = !1;
          if (UU) yU = !0;
          else
            for (const UU of this.uB) {
              if (UU.indexStart + UU.indexCount > cU) {
                yU = !0;
                break
              }
              if (UU.verticesStart + UU.verticesCount > XU) {
                yU = !0;
                break
              }
            }
          if (!yU) return this.uB[0]
        }
        return this.releaseSubMeshes(), new OU.d(0, 0, XU, 0, this.getTotalIndices() || (this.isUnIndexed ? XU : 0), this)
      }
      subdivide(UU) {
        if (UU < 1) return;
        const XU = this.getTotalIndices();
        let zU = XU / UU | 0,
          cU = 0;
        for (; zU % 3 !== 0;) zU++;
        this.releaseSubMeshes();
        for (let yU = 0; yU < UU && !(cU >= XU); yU++) OU.d.CreateFromIndices(0, cU, cU + zU >= XU ? XU - cU : zU, this, void 0, !1), cU += zU;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(UU, XU, zU, cU);
        else {
          const cU = new CU.c;
          cU.set(XU, UU);
          const yU = this.nS();
          new wU.d(wU.d.RandomId(), yU, cU, zU, this)
        }
        return this
      }
      removeVerticesData(UU) {
        this._geometry && this._geometry.removeVerticesData(UU)
      }
      markVerticesDataAsUpdatable(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this.getVertexBuffer(UU);
        zU && zU.isUpdatable() !== XU && this.setVerticesData(UU, this.getVerticesData(UU), XU)
      }
      setVerticesBuffer(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = wU.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(UU, zU, XU), this
      }
      updateVerticesData(UU, XU, zU, cU) {
        return this._geometry ? (cU ? (this.makeGeometryUnique(), this.updateVerticesData(UU, XU, zU, !1)) : this._geometry.updateVerticesData(UU, XU, zU), this) : this
      }
      updateMeshPositions(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this.getVerticesData(eU.h.PositionKind);
        if (!zU) return this;
        if (UU(zU), this.updateVerticesData(eU.h.PositionKind, zU, !1, !1), XU) {
          const UU = this.yyU(),
            XU = this.getVerticesData(eU.h.NormalKind);
          if (!XU) return this;
          CU.c.ComputeNormals(zU, UU, XU), this.updateVerticesData(eU.h.NormalKind, XU, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const UU = this._geometry,
          XU = this._geometry.copy(wU.d.RandomId());
        return UU.releaseForMesh(this, !0), XU.applyToMesh(this), this
      }
      setIndexBuffer(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          yU = this._geometry;
        yU || (yU = new wU.d(wU.d.RandomId(), this.nS(), void 0, void 0, this)), yU.setIndexBuffer(UU, XU, zU, cU)
      }
      setIndices(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(UU, XU, zU, cU);
        else {
          const cU = new CU.c;
          cU.indices = UU;
          const yU = this.nS();
          new wU.d(wU.d.RandomId(), yU, cU, zU, this, XU)
        }
        return this
      }
      updateIndices(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(UU, XU, zU), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(UU, XU, zU) {
        let cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const yU = this.nS().qp();
        let QU;
        if (this._unIndexed)
          if (this._getRenderingFillMode(zU) === SU.c.WireFrameFillMode) QU = UU._getLinesIndexBuffer(this.yyU(), yU);
          else QU = null;
        else switch (this._getRenderingFillMode(zU)) {
          case SU.c.PointFillMode:
            QU = null;
            break;
          case SU.c.WireFrameFillMode:
            QU = UU._getLinesIndexBuffer(this.yyU(), yU);
            break;
          default:
          case SU.c.TriangleFillMode:
            QU = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(XU, QU, cU)
      }
      _bindDirect(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(UU), zU && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const UU = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const XU in UU) this._userInstancedBuffersStorage.vertexBuffers[XU] = UU[XU]
          }
          this._geometry._bind(UU, XU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(UU, XU);
        return this
      }
      _draw(UU, XU, zU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const cU = this.nS().qp(),
          yU = cU._currentMaterialContext,
          QU = yU && yU.useVertexPulling;
        return this._unIndexed && XU !== SU.c.WireFrameFillMode || XU == SU.c.PointFillMode ? cU.drawArraysType(XU, UU.verticesStart, UU.verticesCount, this.forcedInstanceCount || zU) : XU == SU.c.WireFrameFillMode ? cU.drawElementsType(XU, 0, UU._linesIndexCount, this.forcedInstanceCount || zU) : QU ? cU.drawArraysType(XU, UU.indexStart, UU.indexCount, this.forcedInstanceCount || zU) : cU.drawElementsType(XU, UU.indexStart, UU.indexCount, this.forcedInstanceCount || zU), this
      }
      registerBeforeRender(UU) {
        return this.onBeforeRenderObservable.add(UU), this
      }
      unregisterBeforeRender(UU) {
        return this.onBeforeRenderObservable.removeCallback(UU), this
      }
      registerAfterRender(UU) {
        return this.onAfterRenderObservable.add(UU), this
      }
      unregisterAfterRender(UU) {
        return this.onAfterRenderObservable.removeCallback(UU), this
      }
      _getInstancesRenderList(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (XU) return zU.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[UU] = !1, zU.batchCacheReplacementModeInFrozenMode.renderSelf[UU] = !0, zU.batchCacheReplacementModeInFrozenMode;
          if (zU.previousBatch) return zU.previousBatch
        }
        const cU = this.nS(),
          yU = cU._isInIntermediateRendering(),
          QU = yU ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          AU = zU.batchCache;
        if (AU.mustReturn = !1, AU.renderSelf[UU] = XU || !QU && this.isEnabled() && this.isVisible, AU.visibleInstances[UU] = null, zU.visibleInstances && !XU) {
          const XU = zU.visibleInstances,
            QU = cU.getRenderId(),
            FU = yU ? XU.intermediateDefaultRenderId : XU.defaultRenderId;
          AU.visibleInstances[UU] = XU[QU], !AU.visibleInstances[UU] && FU && (AU.visibleInstances[UU] = XU[FU])
        }
        return AU.hardwareInstancedRendering[UU] = !XU && this._instanceDataStorage.hardwareInstancedRendering && null !== AU.visibleInstances[UU] && void 0 !== AU.visibleInstances[UU], zU.previousBatch = AU, AU
      }
      _updateInstancedBuffers(UU, XU, zU, cU, yU, QU) {
        const AU = XU.visibleInstances[UU._id],
          FU = AU ? AU.length : 0,
          oU = XU.parent,
          DU = this._instanceDataStorage;
        let EU = oU.instancesBuffer,
          YU = oU.instancesPreviousBuffer,
          NU = 0,
          IU = 0;
        const pU = XU.renderSelf[UU._id],
          aU = this._scene.floatingOriginOffset,
          tU = !EU || zU !== oU.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !oU.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || DU.isFrozen && !tU) IU = (pU ? 1 : 0) + FU;
        else {
          const XU = this.getWorldMatrix();
          if (pU) {
            this._scene.needsPreviousWorldMatrices && (DU.masterMeshPreviousWorldMatrix ? (DU.masterMeshPreviousWorldMatrix.copyToArray(oU.instancesPreviousData, NU), DU.masterMeshPreviousWorldMatrix.YL(XU)) : (DU.masterMeshPreviousWorldMatrix = XU.clone(), DU.masterMeshPreviousWorldMatrix.copyToArray(oU.instancesPreviousData, NU))), XU.copyToArray(oU.instancesData, NU);
            const UU = XU.cyU();
            oU.instancesData[NU + 12] = UU[12] - aU.x, oU.instancesData[NU + 13] = UU[13] - aU.y, oU.instancesData[NU + 14] = UU[14] - aU.z, NU += 16, IU++
          }
          if (AU) {
            if (bU.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && UU.Hp()?.needAlphaBlendingForMesh(UU.getRenderingMesh())) {
              const UU = this._scene.activeCamera.globalPosition;
              for (let XU = 0; XU < AU.length; XU++) {
                const zU = AU[XU];
                zU._distanceToCamera = WU.q.Distance(zU.gM().dyU.centerWorld, UU)
              }
              AU.sort(((UU, XU) => UU._distanceToCamera > XU._distanceToCamera ? -1 : UU._distanceToCamera < XU._distanceToCamera ? 1 : 0))
            }
            for (let UU = 0; UU < AU.length; UU++) {
              const XU = AU[UU],
                zU = XU.getWorldMatrix();
              zU.copyToArray(oU.instancesData, NU), this._scene.needsPreviousWorldMatrices && (XU._previousWorldMatrix ? (XU._previousWorldMatrix.copyToArray(oU.instancesPreviousData, NU), XU._previousWorldMatrix.YL(zU)) : (XU._previousWorldMatrix = zU.clone(), XU._previousWorldMatrix.copyToArray(oU.instancesPreviousData, NU)));
              const cU = zU.cyU();
              oU.instancesData[NU + 12] = cU[12] - aU.x, oU.instancesData[NU + 13] = cU[13] - aU.y, oU.instancesData[NU + 14] = cU[14] - aU.z, NU += 16, IU++
            }
          }
        }
        if (tU) {
          let UU;
          if (EU && EU.dispose(), YU && YU.dispose(), EU = new eU.d(cU, oU.instancesData, !0, 16, !1, !0), oU.instancesBuffer = EU, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.qp().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) UU = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const XU = this._instanceDataStorage.engine.currentRenderPassId;
            UU = this._userInstancedBuffersStorage.renderPasses[XU], UU || (this._userInstancedBuffersStorage.renderPasses[XU] = UU = {})
          }
          UU.world0 = EU.createVertexBuffer("world0", 0, 4), UU.world1 = EU.createVertexBuffer("world1", 4, 4), UU.world2 = EU.createVertexBuffer("world2", 8, 4), UU.world3 = EU.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (YU = new eU.d(cU, oU.instancesPreviousData, !0, 16, !1, !0), oU.instancesPreviousBuffer = YU, UU.previousWorld0 = YU.createVertexBuffer("previousWorld0", 0, 4), UU.previousWorld1 = YU.createVertexBuffer("previousWorld1", 4, 4), UU.previousWorld2 = YU.createVertexBuffer("previousWorld2", 8, 4), UU.previousWorld3 = YU.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (EU.updateDirectly(oU.instancesData, 0, IU), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || YU.updateDirectly(oU.instancesPreviousData, 0, IU));
        this._processInstancedBuffers(AU, pU), QU && void 0 !== yU && (this.nS()._activeIndices.addCount(UU.indexCount * IU, !1), cU._currentDrawContext && (cU._currentDrawContext.useInstancing = !0), this._bind(UU, QU, yU), this._draw(UU, yU, IU)), !this._scene.needsPreviousWorldMatrices || tU || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || YU.updateDirectly(oU.instancesData, 0, IU)
      }
      _renderWithInstances(UU, XU, zU, cU, yU) {
        const QU = zU.visibleInstances[UU._id],
          AU = QU ? QU.length : 0,
          FU = zU.parent,
          oU = FU.instancesBufferSize,
          DU = 16 * (AU + 1) * 4;
        for (; FU.instancesBufferSize < DU;) FU.instancesBufferSize *= 2;
        return FU.instancesData && oU == FU.instancesBufferSize || (FU.instancesData = new Float32Array(FU.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !FU.instancesPreviousData || oU != FU.instancesBufferSize) && (FU.instancesPreviousData = new Float32Array(FU.instancesBufferSize / 4)), this._updateInstancedBuffers(UU, zU, oU, yU, XU, cU), yU.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(UU, XU, zU, cU) {
        const yU = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.nS()._activeIndices.addCount(UU.indexCount * yU, !1), cU._currentDrawContext && (cU._currentDrawContext.useInstancing = !0), this._bind(UU, zU, XU), this._draw(UU, XU, yU), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, yU) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), cU.unbindInstanceAttributes()
      }
      _processInstancedBuffers(UU, XU) {}
      _processRendering(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = this.nS(),
          DU = oU.qp();
        if (cU = this._getRenderingFillMode(cU), QU && XU.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(XU, cU, zU, DU), this;
        if (QU) this._renderWithInstances(XU, cU, yU, zU, DU);
        else {
          DU._currentDrawContext && (DU._currentDrawContext.useInstancing = !1);
          let zU = 0;
          yU.renderSelf[XU._id] && (AU && AU(!1, UU.getWorldMatrix(), FU), zU++, this._draw(XU, cU, this._instanceDataStorage.overridenInstanceCount));
          const QU = yU.visibleInstances[XU._id];
          if (QU) {
            const UU = QU.length;
            zU += UU;
            for (let zU = 0; zU < UU; zU++) {
              const UU = QU[zU].getWorldMatrix();
              AU && AU(!0, UU, FU), this._draw(XU, cU)
            }
          }
          oU._activeIndices.addCount(XU.indexCount * zU, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU?.instancesBuffer && (XU && UU.instancesBuffer.dispose(), UU.instancesBuffer = null), UU?.instancesPreviousBuffer && (XU && UU.instancesPreviousBuffer.dispose(), UU.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const XU in this._instanceDataStorage.renderPasses) {
          const zU = this._instanceDataStorage.renderPasses[XU];
          this._disposeInstanceDataStorageRenderPass(zU, UU)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, UU), this._userInstancedBuffersStorage) {
          for (const XU in this._userInstancedBuffersStorage.vertexBuffers) {
            const zU = this._userInstancedBuffersStorage.vertexBuffers[XU];
            zU && (UU && zU.dispose(), this._userInstancedBuffersStorage.vertexBuffers[XU] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(UU)
      }
      _releaseRenderPassId(UU) {
        const XU = this._instanceDataStorage.renderPasses[UU];
        if (XU && (this._disposeInstanceDataStorageRenderPass(XU, !0), delete this._instanceDataStorage.renderPasses[UU]), this._userInstancedBuffersStorage?.renderPasses) {
          const XU = this._userInstancedBuffersStorage.renderPasses[UU];
          if (XU)
            for (const UU in XU) XU[UU]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[UU]
        }
        const zU = this._userInstancedBuffersStorage?.interleavedBuffers;
        zU?.[UU] && (zU[UU].buffer.dispose(), delete zU[UU])
      }
      _freeze() {
        if (this.uB) {
          for (let UU = 0; UU < this.uB.length; UU++) this._getInstancesRenderList(UU);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const UU in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[UU].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const QU = this._scene.qp(),
          AU = QU.currentRenderPassId;
        if (void 0 !== UU && (QU.currentRenderPassId = UU), cU)(!yU || yU && cU.isInFrustum(this._scene._frustumPlanes)) && this.render(cU, !!XU, zU);
        else
          for (let FU = 0; FU < this.uB.length; FU++) {
            const UU = this.uB[FU];
            (!yU || yU && UU.isInFrustum(this._scene._frustumPlanes)) && this.render(UU, !!XU, zU)
          }
        return void 0 !== UU && (QU.currentRenderPassId = AU), this
      }
      directRender() {
        if (!this.uB) return this;
        for (const UU of this.uB) this.render(UU, !1);
        return this
      }
      render(UU, XU, zU) {
        const cU = this.nS(),
          yU = cU.qp();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const QU = cU.activeCameras?.length ?? 0,
          AU = QU > 1 && cU.activeCamera === cU.activeCameras[0] || QU <= 1,
          FU = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== yU.currentRenderPassId;
        if (AU && this._checkOcclusionQuery(FU) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const oU = this._getInstancesRenderList(UU._id, !!zU);
        if (oU.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let DU = 0,
          EU = null;
        this.ignoreCameraMaxZ && cU.activeCamera && !cU._isInIntermediateRendering() && (DU = cU.activeCamera.maxZ, EU = cU.activeCamera, cU.activeCamera.maxZ = 0, cU.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const YU = UU.getRenderingMesh(),
          NU = oU.hardwareInstancedRendering[UU._id] || YU.hasThinInstances || !!this._userInstancedBuffersStorage && !UU.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          IU = this._instanceDataStorage,
          pU = UU.Hp();
        if (!pU) return EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), this;
        if (IU.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === pU) {
          if (pU._storeEffectOnSubMeshes && !UU._drawWrapper?._wasPreviouslyReady || !pU._storeEffectOnSubMeshes && !pU._getDrawWrapper()._wasPreviouslyReady) return EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), this
        } else {
          if (pU._storeEffectOnSubMeshes) {
            if (!pU.isReadyForSubMesh(this, UU, NU)) return EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), this
          } else if (!pU.isReady(this, NU)) return EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = pU
        }
        if (XU) {
          const UU = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === UU.alphaModes.length) yU.setAlphaMode(UU.alphaMode);
          else
            for (let XU = 0; XU < UU.alphaModes.length; XU++) {
              const zU = UU.alphaModes[XU];
              yU.setAlphaMode(void 0 !== zU ? zU : 2, !1, XU)
            }
        }
        let aU;
        aU = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? UU._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const tU = aU?.effect ?? null;
        for (let PU = 0, WU = cU._beforeRenderingMeshStage; PU < WU.length; PU++) {
          WU[PU].action(this, UU, oU, tU)
        }
        if (!aU || !tU) return EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), this;
        const gU = zU || this;
        let kU;
        if (!IU.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const UU = gU._getWorldMatrixDeterminant();
          kU = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), UU < 0 && (kU = kU === SU.c.ClockWiseSideOrientation ? SU.c.CounterClockWiseSideOrientation : SU.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = kU
        }
        const GU = this._internalMeshDataInfo._effectiveMaterial._preBind(aU, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && yU.setDepthWrite(!0);
        const BU = this._internalMeshDataInfo._effectiveMaterial,
          ZU = BU.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), NU || this._bind(UU, tU, ZU, !1);
        const RU = gU.getWorldMatrix();
        BU._storeEffectOnSubMeshes ? BU.bindForSubMesh(RU, this, UU) : BU.bind(RU, this);
        try {
          rU.c._BindAttachmentsForEffect(yU, tU) && (!BU.backFaceCulling && BU.separateCullingPass && (yU.setState(!0, BU.zOffset, !1, !GU, BU.cullBackFaces, BU.stencil, BU.zOffsetUnits), this._processRendering(this, UU, tU, ZU, oU, NU, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), yU.setState(!0, BU.zOffset, !1, GU, BU.cullBackFaces, BU.stencil, BU.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(UU)), this._processRendering(this, UU, tU, ZU, oU, NU, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          rU.c._RestoreAttachments(yU)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let PU = 0, WU = cU._afterRenderingMeshStage; PU < WU.length; PU++) {
          WU[PU].action(this, UU, oU, tU)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), EU && (EU.maxZ = DU, cU.updateTransformMatrix(!0)), 2 !== cU.performancePriority || IU.isFrozen || this._freeze(), this
      }
      _renderRunFollower(UU, XU) {
        const zU = this._scene,
          cU = zU._engine;
        if (cU.isWebGPU || UU._mesh !== this || 0 !== this.instances.length || this.render !== bU.prototype.render) return !1;
        const yU = UU.Hp();
        if (!yU || yU !== zU._cachedMaterial || void 0 === yU._canBindRunFollower) return !1;
        const QU = UU._drawWrapper,
          AU = QU?.effect;
        if (!AU || AU !== zU._cachedEffect || this.visibility !== zU._cachedVisibility || QU._forceRebindOnNextCall) return !1;
        const FU = this.hasThinInstances;
        if (!FU && this._userInstancedBuffersStorage) return !1;
        if (!QU._wasPreviouslyReady || QU._wasPreviouslyUsingInstances !== FU) return !1;
        const oU = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || zU._isInIntermediateRendering() || 0 !== zU._beforeRenderingMeshStage.length || 0 !== zU._afterRenderingMeshStage.length || oU._onBeforeRenderObservable?.hasObservers() || oU._onBeforeBindObservable?.hasObservers() || oU._onAfterRenderObservable?.hasObservers()) return !1;
        const DU = this.occlusionType;
        if (void 0 !== DU && DU !== qU.c.OCCLUSION_TYPE_NONE || !yU._canBindRunFollower(zU, cU, this, UU, AU)) return !1;
        const EU = this._internalAbstractMeshDataInfo,
          YU = EU._isActiveIntermediate;
        YU ? EU._isActiveIntermediate = !1 : EU._isActive = !1;
        const NU = zU.activeCameras?.length ?? 0;
        (NU > 1 && zU.activeCamera === zU.activeCameras[0] || NU <= 1) && this._checkOcclusionQuery(!1);
        const IU = this._getInstancesRenderList(UU._id);
        if (IU.mustReturn) return !0;
        if (!FU && !IU.renderSelf[UU._id]) return YU ? EU._isActiveIntermediate = !0 : EU._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (oU._effectiveMaterial = yU, XU)
          if (1 === yU.alphaModes.length) cU.setAlphaMode(yU.alphaMode);
          else
            for (let aU = 0; aU < yU.alphaModes.length; aU++) {
              const UU = yU.alphaModes[aU];
              cU.setAlphaMode(void 0 !== UU ? UU : 2, !1, aU)
            }
        if (yU.backFaceCulling || null !== yU.sideOrientation || yU._twoSidedLighting) {
          const UU = this._getWorldMatrixDeterminant();
          let XU = yU._getEffectiveOrientation(this);
          UU < 0 && (XU = XU === SU.c.ClockWiseSideOrientation ? SU.c.CounterClockWiseSideOrientation : SU.c.ClockWiseSideOrientation), oU._effectiveSideOrientation = XU
        }
        yU._preBind(QU, oU._effectiveSideOrientation), yU.forceDepthWrite && cU.setDepthWrite(!0);
        const pU = yU.fillMode;
        return FU || this._bind(UU, AU, pU, !1), yU._bindRunFollower(this.getWorldMatrix(), this, UU, AU), this._processRendering(this, UU, AU, pU, IU, FU, this._onBeforeDraw, yU), yU.unbind(), 2 === zU.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(eU.h.MatricesWeightsKind) && (this.isVerticesDataPresent(eU.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const UU = this.getVerticesData(eU.h.MatricesWeightsKind),
          XU = UU.length;
        for (let zU = 0; zU < XU; zU += 4) {
          const XU = UU[zU] + UU[zU + 1] + UU[zU + 2] + UU[zU + 3];
          if (0 === XU) UU[zU] = 1;
          else {
            const cU = 1 / XU;
            UU[zU] *= cU, UU[zU + 1] *= cU, UU[zU + 2] *= cU, UU[zU + 3] *= cU
          }
        }
        this.setVerticesData(eU.h.MatricesWeightsKind, UU)
      }
      _normalizeSkinWeightsAndExtra() {
        const UU = this.getVerticesData(eU.h.MatricesWeightsExtraKind),
          XU = this.getVerticesData(eU.h.MatricesWeightsKind),
          zU = XU.length;
        for (let cU = 0; cU < zU; cU += 4) {
          let zU = XU[cU] + XU[cU + 1] + XU[cU + 2] + XU[cU + 3];
          if (zU += UU[cU] + UU[cU + 1] + UU[cU + 2] + UU[cU + 3], 0 === zU) XU[cU] = 1;
          else {
            const yU = 1 / zU;
            XU[cU] *= yU, XU[cU + 1] *= yU, XU[cU + 2] *= yU, XU[cU + 3] *= yU, UU[cU] *= yU, UU[cU + 1] *= yU, UU[cU + 2] *= yU, UU[cU + 3] *= yU
          }
        }
        this.setVerticesData(eU.h.MatricesWeightsKind, XU), this.setVerticesData(eU.h.MatricesWeightsKind, UU)
      }
      validateSkinning() {
        const UU = this.getVerticesData(eU.h.MatricesWeightsExtraKind),
          XU = this.getVerticesData(eU.h.MatricesWeightsKind);
        if (null === XU || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          oY: "not skinned"
        };
        const zU = XU.length;
        let cU = 0,
          yU = 0,
          QU = 0,
          AU = 0;
        const FU = null === UU ? 4 : 8,
          oU = [];
        for (let IU = 0; IU <= FU; IU++) oU[IU] = 0;
        for (let IU = 0; IU < zU; IU += 4) {
          let zU = XU[IU],
            DU = zU,
            EU = 0 === DU ? 0 : 1;
          for (let yU = 1; yU < FU; yU++) {
            const QU = yU < 4 ? XU[IU + yU] : UU[IU + yU - 4];
            QU > zU && cU++, 0 !== QU && EU++, DU += QU, zU = QU
          }
          if (oU[EU]++, EU > QU && (QU = EU), 0 === DU) yU++;
          else {
            const zU = 1 / DU;
            let cU = 0;
            for (let yU = 0; yU < FU; yU++) cU += yU < 4 ? Math.abs(XU[IU + yU] - XU[IU + yU] * zU) : Math.abs(UU[IU + yU - 4] - UU[IU + yU - 4] * zU);
            cU > .001 && AU++
          }
        }
        const DU = this.skeleton.bones.length,
          EU = this.getVerticesData(eU.h.MatricesIndicesKind),
          YU = this.getVerticesData(eU.h.MatricesIndicesExtraKind);
        let NU = 0;
        for (let IU = 0; IU < zU; IU += 4)
          for (let UU = 0; UU < FU; UU++) {
            const XU = UU < 4 ? EU[IU + UU] : YU[IU + UU - 4];
            (XU >= DU || XU < 0) && NU++
          }
        return {
          skinned: !0,
          valid: 0 === yU && 0 === AU && 0 === NU,
          oY: "Number of Weights = " + zU / 4 + "\nMaximum influences = " + QU + "\nMissing Weights = " + yU + "\nNot Sorted = " + cU + "\nNot Normalized = " + AU + "\nWeightCounts = [" + oU + "]\nNumber of bones = " + DU + "\nBad Bone Indices = " + NU
        }
      }
      _checkDelayState() {
        const UU = this.nS();
        return this._geometry ? this._geometry.load(UU) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(UU)), this
      }
      _queueLoad(UU) {
        UU.addPendingData(this);
        const XU = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const zU = await UU._loadDelayedFileAsync(this.delayLoadingFile, XU, !0);
            zU instanceof ArrayBuffer ? this._delayLoadingFunction(zU, this) : this._delayLoadingFunction(JSON.parse(zU), this);
            for (const UU of this.instances) UU.refreshBoundingInfo(), UU._syncSubMeshes();
            this.delayLoadState = 1, UU.removePendingData(this)
          } catch (zU) {
            UU.removePendingData(this), UU.oR || HU.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${zU}`)
          }
        })(), this
      }
      isInFrustum(UU) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(UU) && (this._checkDelayState(), !0))
      }
      setMaterialById(UU) {
        const XU = this.nS().materials;
        let zU;
        for (zU = XU.length - 1; zU > -1; zU--)
          if (XU[zU].id === UU) return this.material = XU[zU], this;
        const cU = this.nS().multiMaterials;
        for (zU = cU.length - 1; zU > -1; zU--)
          if (cU[zU].id === UU) return this.material = cU[zU], this;
        return this
      }
      getAnimatables() {
        const UU = [];
        return this.material && UU.push(this.material), this.skeleton && UU.push(this.skeleton), UU
      }
      bakeTransformIntoVertices(UU) {
        if (!this.isVerticesDataPresent(eU.h.PositionKind)) return this;
        const XU = this.uB.splice(0);
        this._resetPointsArrayCache();
        let zU = this.getVerticesData(eU.h.PositionKind);
        const cU = WU.q.Zero();
        let yU;
        for (yU = 0; yU < zU.length; yU += 3) WU.q.TransformCoordinatesFromFloatsToRef(zU[yU], zU[yU + 1], zU[yU + 2], UU, cU).toArray(zU, yU);
        if (this.setVerticesData(eU.h.PositionKind, zU, this.getVertexBuffer(eU.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(eU.h.NormalKind)) {
          for (zU = this.getVerticesData(eU.h.NormalKind), yU = 0; yU < zU.length; yU += 3) WU.q.TransformNormalFromFloatsToRef(zU[yU], zU[yU + 1], zU[yU + 2], UU, cU).normalize().toArray(zU, yU);
          this.setVerticesData(eU.h.NormalKind, zU, this.getVertexBuffer(eU.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(eU.h.TangentKind)) {
          for (zU = this.getVerticesData(eU.h.TangentKind), yU = 0; yU < zU.length; yU += 4) WU.q.TransformNormalFromFloatsToRef(zU[yU], zU[yU + 1], zU[yU + 2], UU, cU).normalize().toArray(zU, yU);
          this.setVerticesData(eU.h.TangentKind, zU, this.getVertexBuffer(eU.h.TangentKind).isUpdatable())
        }
        return UU.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.uB = XU, this
      }
      bakeCurrentTransformIntoVertices() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(UU), this
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (XU && void 0 === XU._addToSceneRootNodes) {
          const zU = XU;
          return KU.source = this, KU.doNotCloneChildren = zU.doNotCloneChildren, KU.clonePhysicsImpostor = zU.clonePhysicsImpostor, KU.cloneThinInstances = zU.cloneThinInstances, new bU(UU, this.nS(), KU)
        }
        return new bU(UU, this.nS(), XU, this, zU, cU)
      }
      dispose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const zU = this._internalMeshDataInfo;
        if (zU._onBeforeDrawObservable && zU._onBeforeDrawObservable.clear(), zU._onBeforeBindObservable && zU._onBeforeBindObservable.clear(), zU._onBeforeRenderObservable && zU._onBeforeRenderObservable.clear(), zU._onAfterRenderObservable && zU._onAfterRenderObservable.clear(), zU._onBetweenPassObservable && zU._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (zU.meshMap)
            for (const UU in zU.meshMap) {
              const XU = zU.meshMap[UU];
              XU && (XU._internalMeshDataInfo._source = null, zU.meshMap[UU] = void 0)
            }
          zU._source && zU._source._internalMeshDataInfo.meshMap && (zU._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const UU = this.nS().meshes;
          for (const XU of UU) {
            const UU = XU;
            UU._internalMeshDataInfo && UU._internalMeshDataInfo._source && UU._internalMeshDataInfo._source === this && (UU._internalMeshDataInfo._source = null)
          }
        }
        zU._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(UU, XU)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(UU, XU, zU, cU, yU, QU) {
        let AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          FU = arguments.length > 7 ? arguments[7] : void 0;
        const oU = this.nS();
        return (0, GU.s)(UU, (UU => {
          const FU = UU.width,
            oU = UU.height,
            DU = this.qp().createCanvas(FU, oU).getContext("2d");
          DU.drawImage(UU, 0, 0);
          const EU = DU.getImageData(0, 0, FU, oU).data;
          this.applyDisplacementMapFromBuffer(EU, FU, oU, XU, zU, yU, QU, AU), cU && cU(this)
        }), FU || (() => {}), oU.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(UU, XU, zU, cU, yU, QU, AU) {
        let FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(eU.h.PositionKind) || !this.isVerticesDataPresent(eU.h.NormalKind) || !this.isVerticesDataPresent(eU.h.UVKind)) return HU.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const oU = this.getVerticesData(eU.h.PositionKind, !0, !0),
          DU = this.getVerticesData(eU.h.NormalKind),
          EU = this.getVerticesData(eU.h.UVKind);
        let YU = WU.q.Zero();
        const NU = WU.q.Zero(),
          IU = WU.m.Zero();
        QU = QU || WU.m.Zero(), AU = AU || new WU.m(1, 1);
        for (let pU = 0; pU < oU.length; pU += 3) {
          WU.q.FromArrayToRef(oU, pU, YU), WU.q.FromArrayToRef(DU, pU, NU), WU.m.FromArrayToRef(EU, pU / 3 * 2, IU);
          const FU = 4 * ((Math.abs(IU.x * AU.x + QU.x % 1) * (XU - 1) % XU | 0) + (Math.abs(IU.y * AU.y + QU.y % 1) * (zU - 1) % zU | 0) * XU),
            aU = .3 * (UU[FU] / 255) + .59 * (UU[FU + 1] / 255) + .11 * (UU[FU + 2] / 255);
          NU.normalize(), NU.scaleInPlace(cU + (yU - cU) * aU), YU = YU.add(NU), YU.toArray(oU, pU)
        }
        return CU.c.ComputeNormals(oU, this.yyU(), DU), FU ? (this.setVerticesData(eU.h.PositionKind, oU), this.setVerticesData(eU.h.NormalKind, DU), this.setVerticesData(eU.h.UVKind, EU)) : (this.updateVerticesData(eU.h.PositionKind, oU), this.updateVerticesData(eU.h.NormalKind, DU)), this
      }
      _getFlattenedNormals(UU, XU) {
        const zU = new Float32Array(3 * UU.length);
        let cU = 0;
        const yU = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let QU = 0; QU < UU.length; QU += 3) {
          const AU = WU.q.FromArray(XU, 3 * UU[QU]),
            FU = WU.q.FromArray(XU, 3 * UU[QU + 1]),
            oU = WU.q.FromArray(XU, 3 * UU[QU + 2]),
            DU = AU.subtract(FU),
            EU = oU.subtract(FU),
            YU = WU.q.Normalize(WU.q.Cross(DU, EU));
          yU && YU.scaleInPlace(-1);
          for (let UU = 0; UU < 3; UU++) zU[cU++] = YU.x, zU[cU++] = YU.y, zU[cU++] = YU.z
        }
        return zU
      }
      _convertToUnIndexedMesh() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = this.getVerticesDataKinds().filter((UU => !this.getVertexBuffer(UU)?.getIsInstanced())),
          zU = this.yyU(!1, !0),
          cU = {},
          yU = (UU, XU) => {
            const cU = new Float32Array(zU.length * XU);
            let yU = 0;
            for (let QU = 0; QU < zU.length; QU++)
              for (let AU = 0; AU < XU; AU++) cU[yU++] = UU[zU[QU] * XU + AU];
            return cU
          },
          QU = this.gM(),
          AU = this.geometry ? this.uB.slice(0) : [];
        for (const FU of XU) cU[FU] = this.getVerticesData(FU);
        for (const FU of XU) {
          const XU = this.getVertexBuffer(FU),
            QU = XU.getSize();
          if (UU && FU === eU.h.NormalKind) {
            const UU = this._getFlattenedNormals(zU, cU[eU.h.PositionKind]);
            this.setVerticesData(eU.h.NormalKind, UU, XU.isUpdatable(), QU)
          } else this.setVerticesData(FU, yU(cU[FU], QU), XU.isUpdatable(), QU)
        }
        if (this.morphTargetManager) {
          for (let XU = 0; XU < this.morphTargetManager.numTargets; XU++) {
            const cU = this.morphTargetManager.getTarget(XU),
              QU = cU.getPositions();
            cU.OFU(yU(QU, 3));
            const AU = cU.getNormals();
            AU && cU.setNormals(UU ? this._getFlattenedNormals(zU, QU) : yU(AU, 3));
            const FU = cU.getTangents();
            FU && cU.setTangents(yU(FU, 3));
            const oU = cU.getUVs();
            oU && cU.setUVs(yU(oU, 2));
            const DU = cU.getColors();
            DU && cU.setColors(yU(DU, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let FU = 0; FU < zU.length; FU++) zU[FU] = FU;
        this.setIndices(zU), this._unIndexed = !0, this.releaseSubMeshes();
        for (const FU of AU) {
          const UU = FU.gM();
          OU.d.AddToMesh(FU.materialIndex, FU.indexStart, FU.indexCount, FU.indexStart, FU.indexCount, this).setBoundingInfo(UU)
        }
        return this.setBoundingInfo(QU), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = CU.c.ExtractFromMesh(this);
        let zU;
        if (UU && this.isVerticesDataPresent(eU.h.NormalKind) && XU.normals) {
          for (zU = 0; zU < XU.normals.length; zU++) XU.normals[zU] *= -1;
          this.setVerticesData(eU.h.NormalKind, XU.normals, this.isVertexBufferUpdatable(eU.h.NormalKind))
        }
        if (XU.indices) {
          let UU;
          for (zU = 0; zU < XU.indices.length; zU += 3) UU = XU.indices[zU + 1], XU.indices[zU + 1] = XU.indices[zU + 2], XU.indices[zU + 2] = UU;
          this.setIndices(XU.indices, null, this.isVertexBufferUpdatable(eU.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const XU = CU.c.ExtractFromMesh(this),
          zU = XU.indices && !Array.isArray(XU.indices) && Array.from ? Array.from(XU.indices) : XU.indices,
          cU = XU.positions && !Array.isArray(XU.positions) && Array.from ? Array.from(XU.positions) : XU.positions,
          yU = XU.uvs && !Array.isArray(XU.uvs) && Array.from ? Array.from(XU.uvs) : XU.uvs,
          QU = XU.normals && !Array.isArray(XU.normals) && Array.from ? Array.from(XU.normals) : XU.normals;
        if (zU && cU) {
          XU.indices = zU, XU.positions = cU, yU && (XU.uvs = yU), QU && (XU.normals = QU);
          const AU = UU + 1,
            FU = [];
          for (let UU = 0; UU < AU + 1; UU++) FU[UU] = [];
          let oU, DU;
          const EU = new WU.q(0, 0, 0),
            YU = new WU.q(0, 0, 0),
            NU = new WU.m(0, 0),
            IU = [],
            pU = [],
            aU = [];
          let tU, gU, kU, GU = cU.length;
          yU && (gU = yU.length), QU && (kU = QU.length);
          for (let UU = 0; UU < zU.length; UU += 3) {
            pU[0] = zU[UU], pU[1] = zU[UU + 1], pU[2] = zU[UU + 2];
            for (let UU = 0; UU < 3; UU++)
              if (oU = pU[UU], DU = pU[(UU + 1) % 3], void 0 === aU[oU] && void 0 === aU[DU] ? (aU[oU] = [], aU[DU] = []) : (void 0 === aU[oU] && (aU[oU] = []), void 0 === aU[DU] && (aU[DU] = [])), void 0 === aU[oU][DU] && void 0 === aU[DU][oU]) {
                aU[oU][DU] = [], EU.x = (cU[3 * DU] - cU[3 * oU]) / AU, EU.y = (cU[3 * DU + 1] - cU[3 * oU + 1]) / AU, EU.z = (cU[3 * DU + 2] - cU[3 * oU + 2]) / AU, QU && (YU.x = (QU[3 * DU] - QU[3 * oU]) / AU, YU.y = (QU[3 * DU + 1] - QU[3 * oU + 1]) / AU, YU.z = (QU[3 * DU + 2] - QU[3 * oU + 2]) / AU), yU && (NU.x = (yU[2 * DU] - yU[2 * oU]) / AU, NU.y = (yU[2 * DU + 1] - yU[2 * oU + 1]) / AU), aU[oU][DU].push(oU);
                for (let UU = 1; UU < AU; UU++) aU[oU][DU].push(cU.length / 3), cU[GU++] = cU[3 * oU] + UU * EU.x, cU[GU++] = cU[3 * oU + 1] + UU * EU.y, cU[GU++] = cU[3 * oU + 2] + UU * EU.z, QU && (QU[kU++] = QU[3 * oU] + UU * YU.x, QU[kU++] = QU[3 * oU + 1] + UU * YU.y, QU[kU++] = QU[3 * oU + 2] + UU * YU.z), yU && (yU[gU++] = yU[2 * oU] + UU * NU.x, yU[gU++] = yU[2 * oU + 1] + UU * NU.y);
                aU[oU][DU].push(DU), aU[DU][oU] = [], tU = aU[oU][DU].length;
                for (let UU = 0; UU < tU; UU++) aU[DU][oU][UU] = aU[oU][DU][tU - 1 - UU]
              } FU[0][0] = zU[UU], FU[1][0] = aU[zU[UU]][zU[UU + 1]][1], FU[1][1] = aU[zU[UU]][zU[UU + 2]][1];
            for (let XU = 2; XU < AU; XU++) {
              FU[XU][0] = aU[zU[UU]][zU[UU + 1]][XU], FU[XU][XU] = aU[zU[UU]][zU[UU + 2]][XU], EU.x = (cU[3 * FU[XU][XU]] - cU[3 * FU[XU][0]]) / XU, EU.y = (cU[3 * FU[XU][XU] + 1] - cU[3 * FU[XU][0] + 1]) / XU, EU.z = (cU[3 * FU[XU][XU] + 2] - cU[3 * FU[XU][0] + 2]) / XU, QU && (YU.x = (QU[3 * FU[XU][XU]] - QU[3 * FU[XU][0]]) / XU, YU.y = (QU[3 * FU[XU][XU] + 1] - QU[3 * FU[XU][0] + 1]) / XU, YU.z = (QU[3 * FU[XU][XU] + 2] - QU[3 * FU[XU][0] + 2]) / XU), yU && (NU.x = (yU[2 * FU[XU][XU]] - yU[2 * FU[XU][0]]) / XU, NU.y = (yU[2 * FU[XU][XU] + 1] - yU[2 * FU[XU][0] + 1]) / XU);
              for (let UU = 1; UU < XU; UU++) FU[XU][UU] = cU.length / 3, cU[GU++] = cU[3 * FU[XU][0]] + UU * EU.x, cU[GU++] = cU[3 * FU[XU][0] + 1] + UU * EU.y, cU[GU++] = cU[3 * FU[XU][0] + 2] + UU * EU.z, QU && (QU[kU++] = QU[3 * FU[XU][0]] + UU * YU.x, QU[kU++] = QU[3 * FU[XU][0] + 1] + UU * YU.y, QU[kU++] = QU[3 * FU[XU][0] + 2] + UU * YU.z), yU && (yU[gU++] = yU[2 * FU[XU][0]] + UU * NU.x, yU[gU++] = yU[2 * FU[XU][0] + 1] + UU * NU.y)
            }
            FU[AU] = aU[zU[UU + 1]][zU[UU + 2]], IU.push(FU[0][0], FU[1][0], FU[1][1]);
            for (let UU = 1; UU < AU; UU++) {
              let XU;
              for (XU = 0; XU < UU; XU++) IU.push(FU[UU][XU], FU[UU + 1][XU], FU[UU + 1][XU + 1]), IU.push(FU[UU][XU], FU[UU + 1][XU + 1], FU[UU][XU + 1]);
              IU.push(FU[UU][XU], FU[UU + 1][XU], FU[UU + 1][XU + 1])
            }
          }
          XU.indices = IU, XU.applyToMesh(this, this.isVertexBufferUpdatable(eU.h.PositionKind))
        } else HU.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const UU = CU.c.ExtractFromMesh(this),
          XU = UU.uvs,
          zU = UU.indices,
          cU = UU.positions,
          yU = UU.colors,
          QU = UU.matricesIndices,
          AU = UU.matricesWeights,
          FU = UU.matricesIndicesExtra,
          oU = UU.matricesWeightsExtra;
        if (void 0 === zU || void 0 === cU || null === zU || null === cU) HU.b.Warn("VertexData contains empty entries");
        else {
          const DU = [],
            EU = [],
            YU = [],
            NU = [],
            IU = [],
            pU = [],
            aU = [],
            tU = [];
          let gU, kU = 0;
          const GU = {};
          let BU, ZU;
          for (let UU = 0; UU < zU.length; UU += 3) {
            ZU = [zU[UU], zU[UU + 1], zU[UU + 2]], gU = [];
            for (let UU = 0; UU < 3; UU++) {
              gU[UU] = "";
              for (let XU = 0; XU < 3; XU++) Math.abs(cU[3 * ZU[UU] + XU]) < 1e-8 && (cU[3 * ZU[UU] + XU] = 0), gU[UU] += cU[3 * ZU[UU] + XU] + "|"
            }
            if (gU[0] != gU[1] && gU[0] != gU[2] && gU[1] != gU[2])
              for (let UU = 0; UU < 3; UU++) {
                if (BU = GU[gU[UU]], void 0 === BU) {
                  GU[gU[UU]] = kU, BU = kU++;
                  for (let XU = 0; XU < 3; XU++) DU.push(cU[3 * ZU[UU] + XU]);
                  if (null !== yU && void 0 !== yU)
                    for (let XU = 0; XU < 4; XU++) NU.push(yU[4 * ZU[UU] + XU]);
                  if (null !== XU && void 0 !== XU)
                    for (let zU = 0; zU < 2; zU++) YU.push(XU[2 * ZU[UU] + zU]);
                  if (null !== QU && void 0 !== QU)
                    for (let XU = 0; XU < 4; XU++) IU.push(QU[4 * ZU[UU] + XU]);
                  if (null !== AU && void 0 !== AU)
                    for (let XU = 0; XU < 4; XU++) pU.push(AU[4 * ZU[UU] + XU]);
                  if (null !== FU && void 0 !== FU)
                    for (let XU = 0; XU < 4; XU++) aU.push(FU[4 * ZU[UU] + XU]);
                  if (null !== oU && void 0 !== oU)
                    for (let XU = 0; XU < 4; XU++) tU.push(oU[4 * ZU[UU] + XU])
                }
                EU.push(BU)
              }
          }
          const RU = [];
          CU.c.ComputeNormals(DU, EU, RU), UU.positions = DU, UU.indices = EU, UU.normals = RU, null !== XU && void 0 !== XU && (UU.uvs = YU), null !== yU && void 0 !== yU && (UU.colors = NU), null !== QU && void 0 !== QU && (UU.matricesIndices = IU), null !== AU && void 0 !== AU && (UU.matricesWeights = pU), null !== FU && void 0 !== FU && (UU.matricesIndicesExtra = aU), null !== AU && void 0 !== AU && (UU.matricesWeightsExtra = tU), UU.applyToMesh(this, this.isVertexBufferUpdatable(eU.h.PositionKind))
        }
      }
      static _instancedMeshFactory(UU, XU) {
        throw (0, vU.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(UU, XU, zU) {
        throw (0, vU.m)("PhysicsImpostor")
      }
      createInstance(UU) {
        const XU = bU._instancedMeshFactory(UU, this);
        return XU.parent = this.parent, XU
      }
      synchronizeInstances() {
        for (let UU = 0; UU < this.instances.length; UU++) {
          this.instances[UU]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(UU) {
        const XU = this.yyU(),
          zU = this.getVerticesData(eU.h.PositionKind);
        if (!zU || !XU) return this;
        const cU = [];
        for (let QU = 0; QU < zU.length; QU += 3) cU.push(WU.q.FromArray(zU, QU));
        const yU = [];
        return kU.c.SyncAsyncForLoop(cU.length, 40, (UU => {
          const XU = cU.length - 1 - UU,
            zU = cU[XU];
          for (let QU = 0; QU < XU; ++QU) {
            const UU = cU[QU];
            if (zU.equals(UU)) {
              yU[XU] = QU;
              break
            }
          }
        }), (() => {
          for (let UU = 0; UU < XU.length; ++UU) XU[UU] = yU[XU[UU]] || XU[UU];
          const zU = this.uB.slice(0);
          this.setIndices(XU), this.uB = zU, UU && UU(this)
        })), this
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        UU.name = this.name, UU.id = this.id, UU.uniqueId = this.uniqueId, UU.type = this.getClassName(), ZU.b && ZU.b.HasTags(this) && (UU.tags = ZU.b.GetTags(this)), UU.position = this.position.cyU(), this.rotationQuaternion ? UU.rotationQuaternion = this.rotationQuaternion.cyU() : this.rotation && (UU.rotation = this.rotation.cyU()), UU.RY = this.RY.cyU(), this._postMultiplyPivotMatrix ? UU.pivotMatrix = this.getPivotMatrix().cyU() : UU.localMatrix = this.getPivotMatrix().cyU(), UU.isEnabled = this.isEnabled(!1), UU.isVisible = this.isVisible, UU.infiniteDistance = this.infiniteDistance, UU.pickable = this.ma, UU.receiveShadows = this.receiveShadows, UU.billboardMode = this.billboardMode, UU.visibility = this.visibility, UU.Op = this.Op, UU.checkCollisions = this.checkCollisions, UU.ellipsoid = this.ellipsoid.cyU(), UU.ellipsoidOffset = this.ellipsoidOffset.cyU(), UU.ip = this.ip, UU.isBlocker = this.isBlocker, UU.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (UU.IH = !0), this.parent && this.parent._serializeAsParent(UU), UU.isUnIndexed = this.isUnIndexed;
        const XU = this._geometry;
        if (XU && this.uB) {
          UU.geometryUniqueId = XU.uniqueId, UU.geometryId = XU.id, UU.uB = [];
          for (let XU = 0; XU < this.uB.length; XU++) {
            const zU = this.uB[XU];
            UU.uB.push({
              materialIndex: zU.materialIndex,
              verticesStart: zU.verticesStart,
              verticesCount: zU.verticesCount,
              indexStart: zU.indexStart,
              indexCount: zU.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (UU.materialUniqueId = this.material.uniqueId, UU.materialId = this.material.id) : (this.material = null, UU.materialUniqueId = this._scene.defaultMaterial.uniqueId, UU.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (UU.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (UU.skeletonId = this.skeleton.id, UU.skeletonUniqueId = this.skeleton.uniqueId, UU.numBoneInfluencers = this.numBoneInfluencers), this.nS()._getComponent(VU.d.NAME_PHYSICSENGINE)) {
          const XU = this.getPhysicsImpostor?.();
          XU && (UU.physicsMass = XU.getParam("xE"), UU.physicsFriction = XU.getParam("friction"), UU.physicsRestitution = XU.getParam("xE"), UU.physicsImpostor = XU.type)
        }
        this.metadata && (UU.metadata = this.metadata), 0 !== this.meshBlendingTag && (UU.meshBlendingTag = this.meshBlendingTag), UU.instances = [];
        for (let zU = 0; zU < this.instances.length; zU++) {
          const XU = this.instances[zU];
          if (XU.doNotSerialize) continue;
          const cU = {
            name: XU.name,
            id: XU.id,
            isEnabled: XU.isEnabled(!1),
            isVisible: XU.isVisible,
            ma: XU.ma,
            checkCollisions: XU.checkCollisions,
            position: XU.position.cyU(),
            RY: XU.RY.cyU()
          };
          if (XU.parent && XU.parent._serializeAsParent(cU), XU.rotationQuaternion ? cU.rotationQuaternion = XU.rotationQuaternion.cyU() : XU.rotation && (cU.rotation = XU.rotation.cyU()), this.nS()._getComponent(VU.d.NAME_PHYSICSENGINE)) {
            const UU = XU.getPhysicsImpostor?.();
            UU && (cU.physicsMass = UU.getParam("xE"), cU.physicsFriction = UU.getParam("friction"), cU.physicsRestitution = UU.getParam("xE"), cU.physicsImpostor = UU.type)
          }
          XU.metadata && (cU.metadata = XU.metadata), XU.actionManager && (cU.actions = XU.actionManager.serialize(XU.name)), UU.instances.push(cU), iU.b.AppendSerializedAnimations(XU, cU), cU.Qt = XU.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (UU.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.RzU
          }, this._userThinInstanceBuffersStorage)) {
          const XU = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const UU in this._userThinInstanceBuffersStorage.data) XU.data[UU] = Array.from(this._userThinInstanceBuffersStorage.data[UU]), XU.sizes[UU] = this._userThinInstanceBuffersStorage.sizes[UU], XU.strides[UU] = this._userThinInstanceBuffersStorage.strides[UU];
          UU.thinInstances.userThinInstance = XU
        }
        return iU.b.AppendSerializedAnimations(this, UU), UU.Qt = this.serializeAnimationRanges(), UU.layerMask = this.layerMask, UU.alphaIndex = this.alphaIndex, UU.hasVertexAlpha = this.hasVertexAlpha, UU.overlayAlpha = this.overlayAlpha, UU.overlayColor = this.overlayColor.cyU(), UU.renderOverlay = this.renderOverlay, UU.applyFog = this.applyFog, this.actionManager && (UU.actions = this.actionManager.serialize(this.name)), UU
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const UU = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (UU && UU.vertexCount) {
          if (UU.vertexCount !== this.getTotalVertices()) return HU.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (UU.isUsingTextureForTargets) return;
          for (let XU = 0; XU < UU.numInfluencers; XU++) {
            const zU = UU.getActiveTarget(XU),
              cU = zU.getPositions();
            if (!cU) return void HU.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(eU.h.PositionKind + XU, cU, !1, 3);
            const yU = zU.getNormals();
            yU && this.geometry.setVerticesData(eU.h.NormalKind + XU, yU, !1, 3);
            const QU = zU.getTangents();
            QU && this.geometry.setVerticesData(eU.h.TangentKind + XU, QU, !1, 3);
            const AU = zU.getUVs();
            AU && this.geometry.setVerticesData(eU.h.UVKind + "_" + XU, AU, !1, 2);
            const FU = zU.getUV2s();
            FU && this.geometry.setVerticesData(eU.h.UV2Kind + "_" + XU, FU, !1, 2);
            const oU = zU.getColors();
            oU && this.geometry.setVerticesData(eU.h.ColorKind + XU, oU, !1, 4)
          }
        } else {
          let UU = 0;
          for (; this.geometry.isVerticesDataPresent(eU.h.PositionKind + UU);) this.geometry.removeVerticesData(eU.h.PositionKind + UU), this.geometry.isVerticesDataPresent(eU.h.NormalKind + UU) && this.geometry.removeVerticesData(eU.h.NormalKind + UU), this.geometry.isVerticesDataPresent(eU.h.TangentKind + UU) && this.geometry.removeVerticesData(eU.h.TangentKind + UU), this.geometry.isVerticesDataPresent(eU.h.UVKind + "_" + UU) && this.geometry.removeVerticesData(eU.h.UVKind + "_" + UU), this.geometry.isVerticesDataPresent(eU.h.UV2Kind + "_" + UU) && this.geometry.removeVerticesData(eU.h.UV2Kind + "_" + UU), this.geometry.isVerticesDataPresent(eU.h.ColorKind + UU) && this.geometry.removeVerticesData(eU.h.ColorKind + UU), UU++
        }
      }
      static Parse(UU, XU, zU) {
        let cU, yU = !1;
        if (UU.type && "LinesMesh" === UU.type ? cU = bU._LinesMeshParser(UU, XU) : UU.type && "GroundMesh" === UU.type ? cU = bU._GroundMeshParser(UU, XU) : UU.type && "GoldbergMesh" === UU.type ? cU = bU._GoldbergMeshParser(UU, XU) : UU.type && "GreasedLineMesh" === UU.type ? cU = bU._GreasedLineMeshParser(UU, XU) : UU.type && "TrailMesh" === UU.type ? cU = bU._TrailMeshParser(UU, XU) : UU.type && "GaussianSplattingMesh" === UU.type ? (cU = UU._isCompound ? bU._GaussianSplattingCompoundMeshParser(UU, XU) : bU._GaussianSplattingMeshParser(UU, XU), yU = !0) : UU.type && "GaussianSplattingPartProxyMesh" === UU.type ? (cU = bU._GaussianSplattingPartProxyMeshParser(UU, XU), yU = !0) : cU = new bU(UU.name, XU), cU.id = UU.id, cU._waitingParsedUniqueId = UU.uniqueId, ZU.b && ZU.b.AddTagsTo(cU, UU.tags), cU.position = WU.q.FromArray(UU.position), void 0 !== UU.metadata && (cU.metadata = UU.metadata), void 0 !== UU.meshBlendingTag && (cU.meshBlendingTag = UU.meshBlendingTag), UU.rotationQuaternion ? cU.rotationQuaternion = WU.f.FromArray(UU.rotationQuaternion) : UU.rotation && (cU.rotation = WU.q.FromArray(UU.rotation)), cU.RY = WU.q.FromArray(UU.RY), UU.localMatrix ? cU.setPreTransformMatrix(WU.e.FromArray(UU.localMatrix)) : UU.pivotMatrix && cU.setPivotMatrix(WU.e.FromArray(UU.pivotMatrix)), cU.YC(UU.isEnabled), cU.isVisible = UU.isVisible, cU.infiniteDistance = UU.infiniteDistance, cU.Op = !!UU.Op, cU.showBoundingBox = UU.showBoundingBox, cU.showSubMeshesBoundingBox = UU.showSubMeshesBoundingBox, void 0 !== UU.applyFog && (cU.applyFog = UU.applyFog), void 0 !== UU.pickable && (cU.ma = UU.pickable), void 0 !== UU.alphaIndex && (cU.alphaIndex = UU.alphaIndex), cU.receiveShadows = UU.receiveShadows, void 0 !== UU.billboardMode && (cU.billboardMode = UU.billboardMode), void 0 !== UU.visibility && (cU.visibility = UU.visibility), cU.checkCollisions = UU.checkCollisions, cU.ip = !!UU.ip, UU.ellipsoid && (cU.ellipsoid = WU.q.FromArray(UU.ellipsoid)), UU.ellipsoidOffset && (cU.ellipsoidOffset = WU.q.FromArray(UU.ellipsoidOffset)), null != UU.overrideMaterialSideOrientation && (cU.sideOrientation = UU.overrideMaterialSideOrientation), void 0 !== UU.sideOrientation && (cU.sideOrientation = UU.sideOrientation), void 0 !== UU.isBlocker && (cU.isBlocker = UU.isBlocker), cU._shouldGenerateFlatShading = UU.useFlatShading, UU.IH && (cU._waitingData.IH = UU.IH), void 0 !== UU.parentId && (cU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (cU._waitingParentInstanceIndex = UU.parentInstanceIndex), void 0 !== UU.actions && (cU._waitingData.actions = UU.actions), void 0 !== UU.overlayAlpha && (cU.overlayAlpha = UU.overlayAlpha), void 0 !== UU.overlayColor && (cU.overlayColor = dU.b.FromArray(UU.overlayColor)), void 0 !== UU.renderOverlay && (cU.renderOverlay = UU.renderOverlay), cU.isUnIndexed = !!UU.isUnIndexed, cU.hasVertexAlpha = UU.hasVertexAlpha, UU.delayLoadingFile ? (cU.delayLoadState = 4, cU.delayLoadingFile = zU + UU.delayLoadingFile, cU.buildBoundingInfo(WU.q.FromArray(UU.boundingBoxMinimum), WU.q.FromArray(UU.boundingBoxMaximum)), UU._binaryInfo && (cU._binaryInfo = UU._binaryInfo), cU._delayInfo = [], UU.hasUVs && cU._delayInfo.push(eU.h.UVKind), UU.hasUVs2 && cU._delayInfo.push(eU.h.UV2Kind), UU.hasUVs3 && cU._delayInfo.push(eU.h.UV3Kind), UU.hasUVs4 && cU._delayInfo.push(eU.h.UV4Kind), UU.hasUVs5 && cU._delayInfo.push(eU.h.UV5Kind), UU.hasUVs6 && cU._delayInfo.push(eU.h.UV6Kind), UU.hasColors && cU._delayInfo.push(eU.h.ColorKind), UU.hasMatricesIndices && cU._delayInfo.push(eU.h.MatricesIndicesKind), UU.hasMatricesWeights && cU._delayInfo.push(eU.h.MatricesWeightsKind), cU._delayLoadingFunction = wU.d._ImportGeometry, fU.d.ForceFullSceneLoadingForIncremental && cU._checkDelayState()) : yU || wU.d._ImportGeometry(UU, cU), UU.materialUniqueId ? cU._waitingMaterialId = UU.materialUniqueId : UU.materialId && (cU._waitingMaterialId = UU.materialId), UU.morphTargetManagerId > -1 && (cU._waitingMorphTargetManagerId = UU.morphTargetManagerId), void 0 !== UU.skeletonId && null !== UU.skeletonId && (cU.skeleton = XU.getLastSkeletonById(UU.skeletonId), cU._waitingSkeletonId = UU.skeletonId, UU.numBoneInfluencers && (cU.numBoneInfluencers = UU.numBoneInfluencers)), void 0 !== UU.skeletonUniqueId && null !== UU.skeletonUniqueId && (cU._waitingSkeletonUniqueId = UU.skeletonUniqueId), UU.animations) {
          for (let XU = 0; XU < UU.animations.length; XU++) {
            const zU = UU.animations[XU],
              yU = (0, MU.e)("BABYLON.Animation");
            yU && cU.animations.push(yU.Parse(zU))
          }
          LU.e.ParseAnimationRanges(cU, UU, XU)
        }
        if (UU.autoAnimate && XU.beginAnimation(cU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), UU.layerMask && !isNaN(UU.layerMask) ? cU.layerMask = Math.abs(parseInt(UU.layerMask)) : cU.layerMask = 268435455, UU.physicsImpostor && (cU.physicsImpostor = bU._PhysicsImpostorParser(XU, cU, UU)), UU.lodMeshIds && (cU._waitingData.lods = {
            ids: UU.lodMeshIds,
            distances: UU.lodDistances ? UU.lodDistances : null,
            coverages: UU.lodCoverages ? UU.lodCoverages : null
          }), UU.instances)
          for (let QU = 0; QU < UU.instances.length; QU++) {
            const zU = UU.instances[QU],
              yU = cU.createInstance(zU.name);
            if (zU.id && (yU.id = zU.id), ZU.b && (zU.tags ? ZU.b.AddTagsTo(yU, zU.tags) : ZU.b.AddTagsTo(yU, UU.tags)), yU.position = WU.q.FromArray(zU.position), void 0 !== zU.metadata && (yU.metadata = zU.metadata), void 0 !== zU.parentId && (yU._waitingParentId = zU.parentId), void 0 !== zU.parentInstanceIndex && (yU._waitingParentInstanceIndex = zU.parentInstanceIndex), void 0 !== zU.isEnabled && null !== zU.isEnabled && yU.YC(zU.isEnabled), void 0 !== zU.isVisible && null !== zU.isVisible && (yU.isVisible = zU.isVisible), void 0 !== zU.ma && null !== zU.ma && (yU.ma = zU.ma), zU.rotationQuaternion ? yU.rotationQuaternion = WU.f.FromArray(zU.rotationQuaternion) : zU.rotation && (yU.rotation = WU.q.FromArray(zU.rotation)), yU.RY = WU.q.FromArray(zU.RY), void 0 != zU.checkCollisions && null != zU.checkCollisions && (yU.checkCollisions = zU.checkCollisions), void 0 != zU.pickable && null != zU.pickable && (yU.ma = zU.pickable), void 0 != zU.showBoundingBox && null != zU.showBoundingBox && (yU.showBoundingBox = zU.showBoundingBox), void 0 != zU.showSubMeshesBoundingBox && null != zU.showSubMeshesBoundingBox && (yU.showSubMeshesBoundingBox = zU.showSubMeshesBoundingBox), void 0 != zU.alphaIndex && null != zU.showSubMeshesBoundingBox && (yU.alphaIndex = zU.alphaIndex), zU.physicsImpostor && (yU.physicsImpostor = bU._PhysicsImpostorParser(XU, yU, zU)), void 0 !== zU.actions && (yU._waitingData.actions = zU.actions), zU.animations) {
              for (let UU = 0; UU < zU.animations.length; UU++) {
                const XU = zU.animations[UU],
                  cU = (0, MU.e)("BABYLON.Animation");
                cU && yU.animations.push(cU.Parse(XU))
              }
              LU.e.ParseAnimationRanges(yU, zU, XU), zU.autoAnimate && XU.beginAnimation(yU, zU.autoAnimateFrom, zU.autoAnimateTo, zU.autoAnimateLoop, zU.autoAnimateSpeed || 1)
            }
          }
        if (UU.thinInstances) {
          const XU = UU.thinInstances;
          if (cU.RzU = !!XU.enablePicking, XU.matrixData ? (cU.fUU("matrix", new Float32Array(XU.matrixData), 16, !1), cU._thinInstanceDataStorage.matrixBufferSize = XU.matrixBufferSize, cU._thinInstanceDataStorage.instancesCount = XU.instancesCount) : cU._thinInstanceDataStorage.matrixBufferSize = XU.matrixBufferSize, UU.thinInstances.userThinInstance) {
            const XU = UU.thinInstances.userThinInstance;
            for (const UU in XU.data) cU.fUU(UU, new Float32Array(XU.data[UU]), XU.strides[UU], !1), cU._userThinInstanceBuffersStorage.sizes[UU] = XU.sizes[UU]
          }
        }
        return cU
      }
      setPositionsForCPUSkinning() {
        const UU = this._internalMeshDataInfo;
        if (!UU._sourcePositions) {
          const XU = this.getVerticesData(eU.h.PositionKind);
          if (!XU) return UU._sourcePositions;
          UU._sourcePositions = new Float32Array(XU), this.isVertexBufferUpdatable(eU.h.PositionKind) || this.setVerticesData(eU.h.PositionKind, XU, !0)
        }
        return UU._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const UU = this._internalMeshDataInfo;
        if (!UU._sourceNormals) {
          const XU = this.getVerticesData(eU.h.NormalKind);
          if (!XU) return UU._sourceNormals;
          UU._sourceNormals = new Float32Array(XU), this.isVertexBufferUpdatable(eU.h.NormalKind) || this.setVerticesData(eU.h.NormalKind, XU, !0)
        }
        return UU._sourceNormals
      }
      applySkeleton(UU) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.nS().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.nS().getFrameId(), !this.isVerticesDataPresent(eU.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(eU.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(eU.h.MatricesWeightsKind)) return this;
        const XU = this.isVerticesDataPresent(eU.h.NormalKind),
          zU = this._internalMeshDataInfo;
        if (!zU._sourcePositions) {
          const UU = this.uB.slice();
          this.setPositionsForCPUSkinning(), this.uB = UU
        }
        XU && !zU._sourceNormals && this.setNormalsForCPUSkinning();
        let cU = this.getVerticesData(eU.h.PositionKind);
        if (!cU) return this;
        cU instanceof Float32Array || (cU = new Float32Array(cU));
        let yU = this.getVerticesData(eU.h.NormalKind);
        if (XU) {
          if (!yU) return this;
          yU instanceof Float32Array || (yU = new Float32Array(yU))
        }
        const QU = this.getVerticesData(eU.h.MatricesIndicesKind),
          AU = this.getVerticesData(eU.h.MatricesWeightsKind);
        if (!AU || !QU) return this;
        const FU = this.numBoneInfluencers > 4,
          oU = FU ? this.getVerticesData(eU.h.MatricesIndicesExtraKind) : null,
          DU = FU ? this.getVerticesData(eU.h.MatricesWeightsExtraKind) : null,
          EU = UU.getTransformMatrices(this),
          YU = WU.q.Zero(),
          NU = new WU.e,
          IU = new WU.e;
        let pU, aU = 0;
        for (let tU = 0; tU < cU.length; tU += 3, aU += 4) {
          let UU;
          for (pU = 0; pU < 4; pU++) UU = AU[aU + pU], UU > 0 && (WU.e.FromFloat32ArrayToRefScaled(EU, Math.floor(16 * QU[aU + pU]), UU, IU), NU.addToSelf(IU));
          if (FU)
            for (pU = 0; pU < 4; pU++) UU = DU[aU + pU], UU > 0 && (WU.e.FromFloat32ArrayToRefScaled(EU, Math.floor(16 * oU[aU + pU]), UU, IU), NU.addToSelf(IU));
          WU.q.TransformCoordinatesFromFloatsToRef(zU._sourcePositions[tU], zU._sourcePositions[tU + 1], zU._sourcePositions[tU + 2], NU, YU), YU.toArray(cU, tU), XU && (WU.q.TransformNormalFromFloatsToRef(zU._sourceNormals[tU], zU._sourceNormals[tU + 1], zU._sourceNormals[tU + 2], NU, YU), YU.toArray(yU, tU)), NU.reset()
        }
        return this.updateVerticesData(eU.h.PositionKind, cU), XU && this.updateVerticesData(eU.h.NormalKind, yU), this
      }
      static MinMax(UU) {
        let XU = null,
          zU = null;
        for (const cU of UU) {
          const UU = cU.gM().boundingBox;
          XU && zU ? (XU.minimizeInPlace(UU.minimumWorld), zU.maximizeInPlace(UU.maximumWorld)) : (XU = UU.minimumWorld.clone(), zU = UU.maximumWorld.clone())
        }
        return XU && zU ? {
          min: XU,
          max: zU
        } : {
          min: WU.q.Zero(),
          max: WU.q.Zero()
        }
      }
      static Center(UU) {
        const XU = UU instanceof Array ? bU.MinMax(UU) : UU;
        return WU.q.Center(XU.min, XU.max)
      }
      static MergeMeshes(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        return (0, RU.i)(bU._MergeMeshesCoroutine(UU, XU, zU, cU, yU, QU, !1))
      }
      static async MergeMeshesAsync(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, RU.e)(bU._MergeMeshesCoroutine(UU, XU, zU, cU, yU, QU, !0), (0, RU.b)())
      }
      static * _MergeMeshesCoroutine(UU) {
        let XU, zU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cU = arguments.length > 2 ? arguments[2] : void 0,
          yU = arguments.length > 3 ? arguments[3] : void 0,
          QU = arguments.length > 4 ? arguments[4] : void 0,
          AU = arguments.length > 5 ? arguments[5] : void 0,
          FU = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (UU = UU.filter(Boolean)).length) return null;
        if (!cU) {
          let zU = 0;
          for (XU = 0; XU < UU.length; XU++)
            if (zU += UU[XU].getTotalVertices(), zU >= 65536) return HU.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const oU = UU[0];
        AU && (QU = !1, UU.sort(((UU, XU) => (UU.material?.uniqueId ?? -1) - (XU.material?.uniqueId ?? -1))));
        const DU = new Array,
          EU = new Array,
          YU = new Array,
          NU = UU[0].sideOrientation;
        for (XU = 0; XU < UU.length; XU++) {
          const zU = UU[XU];
          if (zU.UH) return HU.b.Warn("Cannot merge instance meshes."), null;
          if (NU !== zU.sideOrientation) return HU.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (QU || AU) {
            const UU = YU.reduce(((UU, XU) => Math.max(UU, XU.start + XU.count)), 0);
            if (AU)
              if (zU.material) {
                const XU = zU.material;
                if (XU instanceof uU.b) {
                  for (let UU = 0; UU < XU.HUU.length; UU++) DU.indexOf(XU.HUU[UU]) < 0 && DU.push(XU.HUU[UU]);
                  for (let cU = 0; cU < zU.uB.length; cU++) EU.push(DU.indexOf(XU.HUU[zU.uB[cU].materialIndex])), YU.push({
                    start: UU + zU.uB[cU].indexStart,
                    count: zU.uB[cU].indexCount
                  })
                } else {
                  DU.indexOf(XU) < 0 && DU.push(XU);
                  for (let cU = 0; cU < zU.uB.length; cU++) EU.push(DU.indexOf(XU)), YU.push({
                    start: UU + zU.uB[cU].indexStart,
                    count: zU.uB[cU].indexCount
                  })
                }
              } else
                for (let XU = 0; XU < zU.uB.length; XU++) EU.push(0), YU.push({
                  start: UU + zU.uB[XU].indexStart,
                  count: zU.uB[XU].indexCount
                });
            else YU.push({
              start: UU,
              count: zU.getTotalIndices()
            })
          }
        }
        if (AU && YU.length > 1) {
          let UU = 0;
          for (let XU = 1; XU < YU.length; XU++) {
            const zU = YU[UU],
              cU = YU[XU];
            EU[XU] === EU[UU] && zU.start + zU.count === cU.start ? zU.count += cU.count : (UU++, YU[UU] = cU, EU[UU] = EU[XU])
          }
          YU.length = UU + 1, EU.length = UU + 1
        }
        const IU = UU => {
            const XU = UU.computeWorldMatrix(!0);
            return {
              vertexData: CU.c.ExtractFromMesh(UU, !1, !1),
              transform: XU
            }
          },
          {
            vertexData: pU,
            transform: aU
          } = IU(UU[0]);
        FU && (yield);
        const tU = new Array(UU.length - 1);
        for (let RU = 1; RU < UU.length; RU++) tU[RU - 1] = IU(UU[RU]), FU && (yield);
        const gU = pU._mergeCoroutine(aU, tU, cU, FU, !zU);
        let kU = gU.next();
        for (; !kU.done;) FU && (yield), kU = gU.next();
        const GU = kU.value;
        yU || (yU = new bU(oU.name + "_merged", oU.nS()));
        const BU = GU._applyToCoroutine(yU, void 0, FU);
        let ZU = BU.next();
        for (; !ZU.done;) FU && (yield), ZU = BU.next();
        if (yU.checkCollisions = oU.checkCollisions, yU.sideOrientation = oU.sideOrientation, zU)
          for (XU = 0; XU < UU.length; XU++) UU[XU].dispose();
        if (QU || AU) {
          for (yU.releaseSubMeshes(), XU = 0; XU < YU.length;) OU.d.CreateFromIndices(0, YU[XU].start, YU[XU].count, yU, void 0, !1), XU++;
          for (const UU of yU.uB) UU.refreshBoundingInfo();
          yU.computeWorldMatrix(!0)
        }
        if (AU) {
          const UU = new uU.b(oU.name + "_merged", oU.nS());
          UU.HUU = DU;
          for (let XU = 0; XU < yU.uB.length; XU++) yU.uB[XU].materialIndex = EU[XU];
          yU.material = UU
        } else yU.material = oU.material;
        return yU
      }
      WUU(UU) {
        UU._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(UU)
      }
      LUU(UU) {
        const XU = UU._indexInSourceMeshInstanceArray;
        if (-1 != XU) {
          if (XU !== this.instances.length - 1) {
            const UU = this.instances[this.instances.length - 1];
            this.instances[XU] = UU, UU._indexInSourceMeshInstanceArray = XU
          }
          UU._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === SU.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(UU) {
        const XU = this.nS();
        return XU.forcePointsCloud ? SU.c.PointFillMode : XU.forceWireframe ? SU.c.WireFrameFillMode : this.overrideRenderingFillMode ?? UU
      }
      setMaterialByID(UU) {
        return this.setMaterialById(UU)
      }
      static CreateRibbon(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(UU, XU, zU, cU, yU, QU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(UU, XU, zU, cU, yU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(UU, XU, zU, cU, yU, QU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(UU, XU, zU, cU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(UU, XU, zU, cU, yU, QU, AU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(UU, XU, zU, cU, yU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(UU, XU, zU, cU, yU, QU, AU, FU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(UU, XU, zU, cU, yU, QU, AU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(UU, XU, zU, cU, yU, QU, AU, FU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(UU, XU, zU, cU, yU, QU, AU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(UU, XU, zU, cU, yU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(UU, XU, zU, cU, yU, QU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(UU, XU, zU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(UU, XU, zU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(UU, XU, zU, cU, yU, QU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(UU, XU, zU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(UU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    bU.FRONTSIDE = CU.c.FRONTSIDE, bU.BACKSIDE = CU.c.BACKSIDE, bU.DOUBLESIDE = CU.c.DOUBLESIDE, bU.DEFAULTSIDE = CU.c.DEFAULTSIDE, bU.NO_CAP = 0, bU.CAP_START = 1, bU.CAP_END = 2, bU.CAP_ALL = 3, bU.NO_FLIP = 0, bU.FLIP_TILE = 1, bU.ROTATE_TILE = 2, bU.FLIP_ROW = 3, bU.ROTATE_ROW = 4, bU.FLIP_N_ROTATE_TILE = 5, bU.FLIP_N_ROTATE_ROW = 6, bU.CENTER = 0, bU.LEFT = 1, bU.RIGHT = 2, bU.TOP = 3, bU.BOTTOM = 4, bU.INSTANCEDMESH_SORT_TRANSPARENT = !1, bU._GroundMeshParser = (UU, XU) => {
      throw (0, vU.m)("GroundMesh")
    }, bU._GoldbergMeshParser = (UU, XU) => {
      throw (0, vU.m)("GoldbergMesh")
    }, bU._LinesMeshParser = (UU, XU) => {
      throw (0, vU.m)("LinesMesh")
    }, bU._GreasedLineMeshParser = (UU, XU) => {
      throw (0, vU.m)("GreasedLineMesh")
    }, bU._GreasedLineRibbonMeshParser = (UU, XU) => {
      throw (0, vU.m)("GreasedLineRibbonMesh")
    }, bU._TrailMeshParser = (UU, XU) => {
      throw (0, vU.m)("TrailMesh")
    }, bU._GaussianSplattingMeshParser = (UU, XU) => {
      throw (0, vU.m)("GaussianSplattingMesh")
    }, bU._GaussianSplattingPartProxyMeshParser = (UU, XU) => {
      throw (0, vU.m)("GaussianSplattingPartProxyMesh")
    }, bU._GaussianSplattingCompoundMeshParser = (UU, XU) => {
      throw (0, vU.m)("GaussianSplattingCompoundMesh")
    };
    let TU = !1;

    function hU() {
      TU || (TU = !0, (0, MU.h)("BABYLON.Mesh", bU))
    }(cU = bU.prototype).jH ?? (cU.jH = (0, vU.k)("Mesh", "jH")), (yU = bU.prototype).simplify ?? (yU.simplify = (0, vU.k)("Mesh", "simplify")), (QU = bU.prototype).thinInstanceAdd ?? (QU.thinInstanceAdd = (0, vU.k)("Mesh", "thinInstanceAdd")), (AU = bU.prototype).thinInstanceAddSelf ?? (AU.thinInstanceAddSelf = (0, vU.k)("Mesh", "thinInstanceAddSelf")), (FU = bU.prototype).thinInstanceRegisterAttribute ?? (FU.thinInstanceRegisterAttribute = (0, vU.k)("Mesh", "thinInstanceRegisterAttribute")), (oU = bU.prototype).thinInstanceSetMatrixAt ?? (oU.thinInstanceSetMatrixAt = (0, vU.k)("Mesh", "thinInstanceSetMatrixAt")), (DU = bU.prototype).thinInstanceSetAttributeAt ?? (DU.thinInstanceSetAttributeAt = (0, vU.k)("Mesh", "thinInstanceSetAttributeAt")), (EU = bU.prototype).fUU ?? (EU.fUU = (0, vU.k)("Mesh", "fUU")), (YU = bU.prototype).thinInstanceGetWorldMatrices ?? (YU.thinInstanceGetWorldMatrices = (0, vU.k)("Mesh", "thinInstanceGetWorldMatrices")), (NU = bU.prototype).qUU ?? (NU.qUU = (0, vU.k)("Mesh", "qUU")), (IU = bU.prototype).thinInstancePartialBufferUpdate ?? (IU.thinInstancePartialBufferUpdate = (0, vU.k)("Mesh", "thinInstancePartialBufferUpdate")), (pU = bU.prototype).thinInstanceRefreshBoundingInfo ?? (pU.thinInstanceRefreshBoundingInfo = (0, vU.k)("Mesh", "thinInstanceRefreshBoundingInfo")), (aU = bU.prototype).getEmittedParticleSystems ?? (aU.getEmittedParticleSystems = (0, vU.k)("Mesh", "getEmittedParticleSystems")), (tU = bU.prototype).getHierarchyEmittedParticleSystems ?? (tU.getHierarchyEmittedParticleSystems = (0, vU.k)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(bU.prototype, "edgesShareWithInstances") || Object.defineProperty(bU.prototype, "edgesShareWithInstances", (0, vU.i)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(bU.prototype, "RzU") || Object.defineProperty(bU.prototype, "RzU", (0, vU.i)("Mesh", "RzU")), Object.getOwnPropertyDescriptor(bU.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(bU.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, vU.i)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(bU.prototype, "BUU") || Object.defineProperty(bU.prototype, "BUU", (0, vU.i)("Mesh", "BUU"))
  },
  41493: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => pU
    });
    var cU = zU(41113),
      yU = zU(37819),
      QU = zU(41237),
      AU = zU(40989),
      FU = zU(37923),
      oU = zU(39493),
      DU = zU(41121),
      EU = zU(41486),
      YU = zU(41168),
      NU = zU(41378);
    class IU {}
    let pU = (() => {
      var UU;
      let XU, zU, pU, aU, tU = [];
      return UU = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, EU.c)(this._applyToCoroutine.bind(this)), this.uniqueId = UU._UniqueIdGenerator, UU._UniqueIdGenerator++
        }
        set(UU, XU) {
          switch (UU.length || oU.b.Warn(`Setting vertex data kind '${XU}' with an empty array`), XU) {
            case QU.h.PositionKind:
              this.positions = UU;
              break;
            case QU.h.NormalKind:
              this.normals = UU;
              break;
            case QU.h.TangentKind:
              this.tangents = UU;
              break;
            case QU.h.UVKind:
              this.uvs = UU;
              break;
            case QU.h.UV2Kind:
              this.uvs2 = UU;
              break;
            case QU.h.UV3Kind:
              this.uvs3 = UU;
              break;
            case QU.h.UV4Kind:
              this.uvs4 = UU;
              break;
            case QU.h.UV5Kind:
              this.uvs5 = UU;
              break;
            case QU.h.UV6Kind:
              this.uvs6 = UU;
              break;
            case QU.h.ColorKind:
              this.colors = UU;
              break;
            case QU.h.MatricesIndicesKind:
              this.matricesIndices = UU;
              break;
            case QU.h.MatricesWeightsKind:
              this.matricesWeights = UU;
              break;
            case QU.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = UU;
              break;
            case QU.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = UU
          }
        }
        applyToMesh(UU, XU) {
          return this._applyTo(UU, XU, !1), this
        }
        applyToGeometry(UU, XU) {
          return this._applyTo(UU, XU, !1), this
        }
        updateMesh(UU) {
          return this._update(UU), this
        }
        updateGeometry(UU) {
          return this._update(UU), this
        }* _applyToCoroutine(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (UU.setVerticesData(QU.h.PositionKind, this.positions, XU), zU && (yield)), this.normals && (UU.setVerticesData(QU.h.NormalKind, this.normals, XU), zU && (yield)), this.tangents && (UU.setVerticesData(QU.h.TangentKind, this.tangents, XU), zU && (yield)), this.uvs && (UU.setVerticesData(QU.h.UVKind, this.uvs, XU), zU && (yield)), this.uvs2 && (UU.setVerticesData(QU.h.UV2Kind, this.uvs2, XU), zU && (yield)), this.uvs3 && (UU.setVerticesData(QU.h.UV3Kind, this.uvs3, XU), zU && (yield)), this.uvs4 && (UU.setVerticesData(QU.h.UV4Kind, this.uvs4, XU), zU && (yield)), this.uvs5 && (UU.setVerticesData(QU.h.UV5Kind, this.uvs5, XU), zU && (yield)), this.uvs6 && (UU.setVerticesData(QU.h.UV6Kind, this.uvs6, XU), zU && (yield)), this.colors) {
            const cU = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            UU.setVerticesData(QU.h.ColorKind, this.colors, XU, cU), this.hasVertexAlpha && void 0 !== UU.hasVertexAlpha && (UU.hasVertexAlpha = !0), zU && (yield)
          }
          if (this.matricesIndices && (UU.setVerticesData(QU.h.MatricesIndicesKind, this.matricesIndices, XU), zU && (yield)), this.matricesWeights && (UU.setVerticesData(QU.h.MatricesWeightsKind, this.matricesWeights, XU), zU && (yield)), this.matricesIndicesExtra && (UU.setVerticesData(QU.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, XU), zU && (yield)), this.matricesWeightsExtra && (UU.setVerticesData(QU.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, XU), zU && (yield)), this.indices ? (UU.setIndices(this.indices, null, XU), zU && (yield)) : UU.setIndices([], null), UU.uB && this.materialInfos && this.materialInfos.length > 1) {
            const XU = UU;
            XU.uB = [];
            for (const UU of this.materialInfos) new NU.d(UU.materialIndex, UU.verticesStart, UU.verticesCount, UU.indexStart, UU.indexCount, XU)
          }
          return this
        }
        _update(UU, XU, zU) {
          return this.positions && UU.updateVerticesData(QU.h.PositionKind, this.positions, XU, zU), this.normals && UU.updateVerticesData(QU.h.NormalKind, this.normals, XU, zU), this.tangents && UU.updateVerticesData(QU.h.TangentKind, this.tangents, XU, zU), this.uvs && UU.updateVerticesData(QU.h.UVKind, this.uvs, XU, zU), this.uvs2 && UU.updateVerticesData(QU.h.UV2Kind, this.uvs2, XU, zU), this.uvs3 && UU.updateVerticesData(QU.h.UV3Kind, this.uvs3, XU, zU), this.uvs4 && UU.updateVerticesData(QU.h.UV4Kind, this.uvs4, XU, zU), this.uvs5 && UU.updateVerticesData(QU.h.UV5Kind, this.uvs5, XU, zU), this.uvs6 && UU.updateVerticesData(QU.h.UV6Kind, this.uvs6, XU, zU), this.colors && UU.updateVerticesData(QU.h.ColorKind, this.colors, XU, zU), this.matricesIndices && UU.updateVerticesData(QU.h.MatricesIndicesKind, this.matricesIndices, XU, zU), this.matricesWeights && UU.updateVerticesData(QU.h.MatricesWeightsKind, this.matricesWeights, XU, zU), this.matricesIndicesExtra && UU.updateVerticesData(QU.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, XU, zU), this.matricesWeightsExtra && UU.updateVerticesData(QU.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, XU, zU), this.indices && UU.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const QU = yU.l.Sp[0],
            AU = yU.l.Sp[1];
          for (let FU = zU; FU < zU + cU; FU += 3) yU.q.FromArrayToRef(UU, FU, QU), yU.q.TransformCoordinatesToRef(QU, XU, AU), UU[FU] = AU.x, UU[FU + 1] = AU.y, UU[FU + 2] = AU.z
        }
        static _TransformVector3Normals(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const QU = yU.l.Sp[0],
            AU = yU.l.Sp[1];
          for (let FU = zU; FU < zU + cU; FU += 3) yU.q.FromArrayToRef(UU, FU, QU), yU.q.TransformNormalToRef(QU, XU, AU), UU[FU] = AU.x, UU[FU + 1] = AU.y, UU[FU + 2] = AU.z
        }
        static _TransformVector4Normals(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const QU = yU.l.Vector4[0],
            AU = yU.l.Vector4[1];
          for (let FU = zU; FU < zU + cU; FU += 4) yU.t.FromArrayToRef(UU, FU, QU), yU.t.TransformNormalToRef(QU, XU, AU), UU[FU] = AU.x, UU[FU + 1] = AU.y, UU[FU + 2] = AU.z, UU[FU + 3] = AU.w
        }
        static _FlipFaces(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length;
          for (let cU = XU; cU < XU + zU; cU += 3) {
            const XU = UU[cU + 1];
            UU[cU + 1] = UU[cU + 2], UU[cU + 2] = XU
          }
        }
        transform(XU) {
          const zU = XU.determinant() < 0;
          return this.positions && UU._TransformVector3Coordinates(this.positions, XU), this.normals && UU._TransformVector3Normals(this.normals, XU), this.tangents && UU._TransformVector4Normals(this.tangents, XU), zU && this.indices && UU._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const XU = [];
          for (const zU of this.materialInfos) {
            const cU = new UU;
            if (this.positions && (cU.positions = this.positions.slice(3 * zU.verticesStart, 3 * (zU.verticesCount + zU.verticesStart))), this.normals && (cU.normals = this.normals.slice(3 * zU.verticesStart, 3 * (zU.verticesCount + zU.verticesStart))), this.tangents && (cU.tangents = this.tangents.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.colors && (cU.colors = this.colors.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.uvs && (cU.uvs = this.uvs.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.uvs2 && (cU.uvs2 = this.uvs2.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.uvs3 && (cU.uvs3 = this.uvs3.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.uvs4 && (cU.uvs4 = this.uvs4.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.uvs5 && (cU.uvs5 = this.uvs5.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.uvs6 && (cU.uvs6 = this.uvs6.slice(2 * zU.verticesStart, 2 * (zU.verticesCount + zU.verticesStart))), this.matricesIndices && (cU.matricesIndices = this.matricesIndices.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.matricesIndicesExtra && (cU.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.matricesWeights && (cU.matricesWeights = this.matricesWeights.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.matricesWeightsExtra && (cU.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * zU.verticesStart, 4 * (zU.verticesCount + zU.verticesStart))), this.indices) {
              cU.indices = [];
              for (let UU = zU.indexStart; UU < zU.indexStart + zU.indexCount; UU++) cU.indices.push(this.indices[UU] - zU.verticesStart)
            }
            const yU = new IU;
            yU.indexStart = 0, yU.indexCount = cU.indices ? cU.indices.length : 0, yU.materialIndex = zU.materialIndex, yU.verticesStart = 0, yU.verticesCount = (cU.positions ? cU.positions.length : 0) / 3, cU.materialInfos = [yU], XU.push(cU)
          }
          return XU
        }
        merge(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const QU = Array.isArray(UU) ? UU.map((UU => ({
            vertexData: UU
          }))) : [{
            vertexData: UU
          }];
          return (0, EU.i)(this._mergeCoroutine(void 0, QU, XU, !1, zU, cU, yU))
        }* _mergeCoroutine(XU, zU) {
          let cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            yU = arguments.length > 3 ? arguments[3] : void 0,
            AU = arguments.length > 4 ? arguments[4] : void 0,
            FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            oU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let DU = zU.map((UU => UU.vertexData)),
            EU = this;
          if (oU)
            for (const UU of DU) UU && (UU._validate(), !this.normals && UU.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && UU.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && UU.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && UU.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && UU.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && UU.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && UU.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && UU.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && UU.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && UU.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && UU.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && UU.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && UU.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const UU of DU)
            if (UU)
              if (oU) this.normals && !UU.normals && (UU.normals = new Float32Array(UU.positions.length)), this.tangents && !UU.tangents && (UU.tangents = new Float32Array(UU.positions.length / 3 * 4)), this.uvs && !UU.uvs && (UU.uvs = new Float32Array(UU.positions.length / 3 * 2)), this.uvs2 && !UU.uvs2 && (UU.uvs2 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs3 && !UU.uvs3 && (UU.uvs3 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs4 && !UU.uvs4 && (UU.uvs4 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs5 && !UU.uvs5 && (UU.uvs5 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs6 && !UU.uvs6 && (UU.uvs6 = new Float32Array(UU.positions.length / 3 * 2)), this.colors && !UU.colors && (UU.colors = new Float32Array(UU.positions.length / 3 * 4), UU.colors.fill(1)), this.matricesIndices && !UU.matricesIndices && (UU.matricesIndices = new Float32Array(UU.positions.length / 3 * 4)), this.matricesWeights && !UU.matricesWeights && (UU.matricesWeights = new Float32Array(UU.positions.length / 3 * 4)), this.matricesIndicesExtra && !UU.matricesIndicesExtra && (UU.matricesIndicesExtra = new Float32Array(UU.positions.length / 3 * 4)), this.matricesWeightsExtra && !UU.matricesWeightsExtra && (UU.matricesWeightsExtra = new Float32Array(UU.positions.length / 3 * 4));
              else if (UU._validate(), !this.normals !== !UU.normals || !this.tangents !== !UU.tangents || !this.uvs !== !UU.uvs || !this.uvs2 !== !UU.uvs2 || !this.uvs3 !== !UU.uvs3 || !this.uvs4 !== !UU.uvs4 || !this.uvs5 !== !UU.uvs5 || !this.uvs6 !== !UU.uvs6 || !this.colors !== !UU.colors || !this.matricesIndices !== !UU.matricesIndices || !this.matricesWeights !== !UU.matricesWeights || !this.matricesIndicesExtra !== !UU.matricesIndicesExtra || !this.matricesWeightsExtra !== !UU.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (FU) {
            let UU, cU = 0,
              yU = 0;
            const QU = [];
            let AU = null;
            const FU = [];
            for (const zU of this.splitBasedOnMaterialID()) FU.push({
              vertexData: zU,
              transform: XU
            });
            for (const XU of zU)
              if (XU.vertexData)
                for (const UU of XU.vertexData.splitBasedOnMaterialID()) FU.push({
                  vertexData: UU,
                  transform: XU.transform
                });
            FU.sort(((UU, XU) => {
              const zU = UU.vertexData.materialInfos ? UU.vertexData.materialInfos[0].materialIndex : 0,
                cU = XU.vertexData.materialInfos ? XU.vertexData.materialInfos[0].materialIndex : 0;
              return zU > cU ? 1 : zU === cU ? 0 : -1
            }));
            for (const XU of FU) {
              const zU = XU.vertexData;
              if (UU = zU.materialInfos ? zU.materialInfos[0].materialIndex : 0, AU && AU.materialIndex === UU) AU.indexCount += zU.indices.length, AU.verticesCount += zU.positions.length / 3;
              else {
                const XU = new IU;
                XU.materialIndex = UU, XU.indexStart = cU, XU.indexCount = zU.indices.length, XU.verticesStart = yU, XU.verticesCount = zU.positions.length / 3, QU.push(XU), AU = XU
              }
              cU += zU.indices.length, yU += zU.positions.length / 3
            }
            const oU = FU.splice(0, 1)[0];
            EU = oU.vertexData, XU = oU.transform, DU = FU.map((UU => UU.vertexData)), zU = FU, this.materialInfos = QU
          }
          const YU = DU.reduce(((UU, XU) => UU + (XU.indices?.length ?? 0)), EU.indices?.length ?? 0);
          let NU = AU || DU.some((UU => UU.indices === EU.indices)) ? EU.indices?.slice() : EU.indices;
          if (YU > 0) {
            let QU = NU?.length ?? 0;
            if (NU || (NU = new Array(YU)), NU.length !== YU) {
              if (Array.isArray(NU)) NU.length = YU;
              else {
                const UU = cU || NU instanceof Uint32Array ? new Uint32Array(YU) : new Uint16Array(YU);
                UU.set(NU), NU = UU
              }
              XU && XU.determinant() < 0 && UU._FlipFaces(NU, 0, QU)
            }
            let AU = EU.positions ? EU.positions.length / 3 : 0;
            for (const {
                vertexData: XU,
                transform: cU
              }
              of zU)
              if (XU.indices) {
                for (let UU = 0; UU < XU.indices.length; UU++) NU[QU + UU] = XU.indices[UU] + AU;
                cU && cU.determinant() < 0 && UU._FlipFaces(NU, QU, XU.indices.length), AU += XU.positions.length / 3, QU += XU.indices.length, yU && (yield)
              }
          }
          return this.indices = NU, this.positions = UU._MergeElement(QU.h.PositionKind, EU.positions, XU, zU.map((UU => [UU.vertexData.positions, UU.transform]))), yU && (yield), EU.normals && (this.normals = UU._MergeElement(QU.h.NormalKind, EU.normals, XU, zU.map((UU => [UU.vertexData.normals, UU.transform]))), yU && (yield)), EU.tangents && (this.tangents = UU._MergeElement(QU.h.TangentKind, EU.tangents, XU, zU.map((UU => [UU.vertexData.tangents, UU.transform]))), yU && (yield)), EU.uvs && (this.uvs = UU._MergeElement(QU.h.UVKind, EU.uvs, XU, zU.map((UU => [UU.vertexData.uvs, UU.transform]))), yU && (yield)), EU.uvs2 && (this.uvs2 = UU._MergeElement(QU.h.UV2Kind, EU.uvs2, XU, zU.map((UU => [UU.vertexData.uvs2, UU.transform]))), yU && (yield)), EU.uvs3 && (this.uvs3 = UU._MergeElement(QU.h.UV3Kind, EU.uvs3, XU, zU.map((UU => [UU.vertexData.uvs3, UU.transform]))), yU && (yield)), EU.uvs4 && (this.uvs4 = UU._MergeElement(QU.h.UV4Kind, EU.uvs4, XU, zU.map((UU => [UU.vertexData.uvs4, UU.transform]))), yU && (yield)), EU.uvs5 && (this.uvs5 = UU._MergeElement(QU.h.UV5Kind, EU.uvs5, XU, zU.map((UU => [UU.vertexData.uvs5, UU.transform]))), yU && (yield)), EU.uvs6 && (this.uvs6 = UU._MergeElement(QU.h.UV6Kind, EU.uvs6, XU, zU.map((UU => [UU.vertexData.uvs6, UU.transform]))), yU && (yield)), EU.colors && (this.colors = UU._MergeElement(QU.h.ColorKind, EU.colors, XU, zU.map((UU => [UU.vertexData.colors, UU.transform]))), (void 0 !== EU.hasVertexAlpha || zU.some((UU => void 0 !== UU.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = EU.hasVertexAlpha || zU.some((UU => UU.vertexData.hasVertexAlpha))), yU && (yield)), EU.matricesIndices && (this.matricesIndices = UU._MergeElement(QU.h.MatricesIndicesKind, EU.matricesIndices, XU, zU.map((UU => [UU.vertexData.matricesIndices, UU.transform]))), yU && (yield)), EU.matricesWeights && (this.matricesWeights = UU._MergeElement(QU.h.MatricesWeightsKind, EU.matricesWeights, XU, zU.map((UU => [UU.vertexData.matricesWeights, UU.transform]))), yU && (yield)), EU.matricesIndicesExtra && (this.matricesIndicesExtra = UU._MergeElement(QU.h.MatricesIndicesExtraKind, EU.matricesIndicesExtra, XU, zU.map((UU => [UU.vertexData.matricesIndicesExtra, UU.transform]))), yU && (yield)), EU.matricesWeightsExtra && (this.matricesWeightsExtra = UU._MergeElement(QU.h.MatricesWeightsExtraKind, EU.matricesWeightsExtra, XU, zU.map((UU => [UU.vertexData.matricesWeightsExtra, UU.transform])))), this
        }
        static _MergeElement(XU, zU, cU, yU) {
          const AU = yU.filter((UU => null !== UU[0] && void 0 !== UU[0]));
          if (!zU && 0 == AU.length) return zU;
          if (!zU) return this._MergeElement(XU, AU[0][0], AU[0][1], AU.slice(1));
          const FU = AU.reduce(((UU, XU) => UU + XU[0].length), zU.length),
            oU = XU === QU.h.PositionKind ? UU._TransformVector3Coordinates : XU === QU.h.NormalKind ? UU._TransformVector3Normals : XU === QU.h.TangentKind ? UU._TransformVector4Normals : () => {};
          if (zU instanceof Float32Array) {
            const UU = new Float32Array(FU);
            UU.set(zU), cU && oU(UU, cU, 0, zU.length);
            let XU = zU.length;
            for (const [zU, cU] of AU) UU.set(zU, XU), cU && oU(UU, cU, XU, zU.length), XU += zU.length;
            return UU
          } {
            const UU = new Array(FU);
            for (let cU = 0; cU < zU.length; cU++) UU[cU] = zU[cU];
            cU && oU(UU, cU, 0, zU.length);
            let XU = zU.length;
            for (const [zU, cU] of AU) {
              for (let cU = 0; cU < zU.length; cU++) UU[XU + cU] = zU[cU];
              cU && oU(UU, cU, XU, zU.length), XU += zU.length
            }
            return UU
          }
        }
        _validate() {
          if (!this.positions) throw new YU.h("Positions are required", YU.f.MeshInvalidPositionsError);
          const UU = (UU, XU) => {
              const zU = (0, QU.g)(UU);
              if (XU.length % zU !== 0) throw new Error("The " + UU + "s array count must be a multiple of " + zU);
              return XU.length / zU
            },
            XU = UU(QU.h.PositionKind, this.positions),
            zU = (zU, cU) => {
              const yU = UU(zU, cU);
              if (yU !== XU) throw new Error("The " + zU + "s element count (" + yU + ") does not match the positions count (" + XU + ")")
            };
          this.normals && zU(QU.h.NormalKind, this.normals), this.tangents && zU(QU.h.TangentKind, this.tangents), this.uvs && zU(QU.h.UVKind, this.uvs), this.uvs2 && zU(QU.h.UV2Kind, this.uvs2), this.uvs3 && zU(QU.h.UV3Kind, this.uvs3), this.uvs4 && zU(QU.h.UV4Kind, this.uvs4), this.uvs5 && zU(QU.h.UV5Kind, this.uvs5), this.uvs6 && zU(QU.h.UV6Kind, this.uvs6), this.colors && zU(QU.h.ColorKind, this.colors), this.matricesIndices && zU(QU.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && zU(QU.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && zU(QU.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && zU(QU.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const XU = this.serialize();
          return UU.Parse(XU)
        }
        serialize() {
          const UU = {};
          if (this.positions && (UU.positions = Array.from(this.positions)), this.normals && (UU.normals = Array.from(this.normals)), this.tangents && (UU.tangents = Array.from(this.tangents)), this.uvs && (UU.uvs = Array.from(this.uvs)), this.uvs2 && (UU.uvs2 = Array.from(this.uvs2)), this.uvs3 && (UU.uvs3 = Array.from(this.uvs3)), this.uvs4 && (UU.uvs4 = Array.from(this.uvs4)), this.uvs5 && (UU.uvs5 = Array.from(this.uvs5)), this.uvs6 && (UU.uvs6 = Array.from(this.uvs6)), this.colors && (UU.colors = Array.from(this.colors), UU.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (UU.matricesIndices = Array.from(this.matricesIndices), UU.matricesIndicesExpanded = !0), this.matricesWeights && (UU.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (UU.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), UU.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (UU.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), UU.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            UU.materialInfos = [];
            for (const XU of this.materialInfos) {
              const zU = {
                indexStart: XU.indexStart,
                indexCount: XU.indexCount,
                materialIndex: XU.materialIndex,
                verticesStart: XU.verticesStart,
                verticesCount: XU.verticesCount
              };
              UU.materialInfos.push(zU)
            }
          }
          return UU
        }
        static ExtractFromMesh(XU, zU, cU) {
          return UU._ExtractFrom(XU, zU, cU)
        }
        static ExtractFromGeometry(XU, zU, cU) {
          return UU._ExtractFrom(XU, zU, cU)
        }
        static _ExtractFrom(XU, zU, cU) {
          const yU = new UU;
          if (XU.isVerticesDataPresent(QU.h.PositionKind) && (yU.positions = XU.getVerticesData(QU.h.PositionKind, zU, cU)), XU.isVerticesDataPresent(QU.h.NormalKind) && (yU.normals = XU.getVerticesData(QU.h.NormalKind, zU, cU)), XU.isVerticesDataPresent(QU.h.TangentKind) && (yU.tangents = XU.getVerticesData(QU.h.TangentKind, zU, cU)), XU.isVerticesDataPresent(QU.h.UVKind) && (yU.uvs = XU.getVerticesData(QU.h.UVKind, zU, cU)), XU.isVerticesDataPresent(QU.h.UV2Kind) && (yU.uvs2 = XU.getVerticesData(QU.h.UV2Kind, zU, cU)), XU.isVerticesDataPresent(QU.h.UV3Kind) && (yU.uvs3 = XU.getVerticesData(QU.h.UV3Kind, zU, cU)), XU.isVerticesDataPresent(QU.h.UV4Kind) && (yU.uvs4 = XU.getVerticesData(QU.h.UV4Kind, zU, cU)), XU.isVerticesDataPresent(QU.h.UV5Kind) && (yU.uvs5 = XU.getVerticesData(QU.h.UV5Kind, zU, cU)), XU.isVerticesDataPresent(QU.h.UV6Kind) && (yU.uvs6 = XU.getVerticesData(QU.h.UV6Kind, zU, cU)), XU.isVerticesDataPresent(QU.h.ColorKind)) {
            const UU = XU.geometry || XU,
              AU = UU.getVertexBuffer(QU.h.ColorKind),
              FU = UU.getVerticesData(QU.h.ColorKind, zU, cU);
            if (3 === AU.getSize()) {
              const UU = new Float32Array(4 * FU.length / 3);
              for (let XU = 0, zU = 0; XU < FU.length; XU += 3, zU += 4) UU[zU] = FU[XU], UU[zU + 1] = FU[XU + 1], UU[zU + 2] = FU[XU + 2], UU[zU + 3] = 1;
              yU.colors = UU
            } else {
              if (4 !== AU.getSize()) throw new Error(`Unexpected number of color components: ${AU.getSize()}`);
              yU.colors = FU
            }
          }
          return XU.isVerticesDataPresent(QU.h.MatricesIndicesKind) && (yU.matricesIndices = XU.getVerticesData(QU.h.MatricesIndicesKind, zU, cU)), XU.isVerticesDataPresent(QU.h.MatricesWeightsKind) && (yU.matricesWeights = XU.getVerticesData(QU.h.MatricesWeightsKind, zU, cU)), XU.isVerticesDataPresent(QU.h.MatricesIndicesExtraKind) && (yU.matricesIndicesExtra = XU.getVerticesData(QU.h.MatricesIndicesExtraKind, zU, cU)), XU.isVerticesDataPresent(QU.h.MatricesWeightsExtraKind) && (yU.matricesWeightsExtra = XU.getVerticesData(QU.h.MatricesWeightsExtraKind, zU, cU)), yU.indices = XU.yyU(zU, cU), yU
        }
        static CreateRibbon(UU) {
          throw (0, AU.m)("ribbonBuilder")
        }
        static CreateBox(UU) {
          throw (0, AU.m)("boxBuilder")
        }
        static CreateTiledBox(UU) {
          throw (0, AU.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(UU) {
          throw (0, AU.m)("tiledPlaneBuilder")
        }
        static CreateSphere(UU) {
          throw (0, AU.m)("sphereBuilder")
        }
        static CreateCylinder(UU) {
          throw (0, AU.m)("cylinderBuilder")
        }
        static CreateTorus(UU) {
          throw (0, AU.m)("torusBuilder")
        }
        static CreateLineSystem(UU) {
          throw (0, AU.m)("linesBuilder")
        }
        static CreateDashedLines(UU) {
          throw (0, AU.m)("linesBuilder")
        }
        static CreateGround(UU) {
          throw (0, AU.m)("groundBuilder")
        }
        static CreateTiledGround(UU) {
          throw (0, AU.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(UU) {
          throw (0, AU.m)("groundBuilder")
        }
        static CreatePlane(UU) {
          throw (0, AU.m)("planeBuilder")
        }
        static CreateDisc(UU) {
          throw (0, AU.m)("discBuilder")
        }
        static CreatePolygon(UU, XU, zU, cU, yU, QU, FU) {
          throw (0, AU.m)("polygonBuilder")
        }
        static CreateIcoSphere(UU) {
          throw (0, AU.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(UU) {
          throw (0, AU.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || yU.q.Up();
          throw (0, AU.m)("capsuleBuilder")
        }
        static CreateTorusKnot(UU) {
          throw (0, AU.m)("torusKnotBuilder")
        }
        static ComputeNormals(UU, XU, zU, cU) {
          let QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU = !1,
            LU = !1,
            eU = !1,
            CU = !1,
            wU = 1,
            qU = 0,
            OU = null;
          cU && (dU = !!cU.facetNormals, LU = !!cU.facetPositions, eU = !!cU.facetPartitioning, wU = !0 === cU.useRightHandedSystem ? -1 : 1, qU = cU.ratio || 0, CU = !!cU.depthSort, OU = cU.distanceTo, CU && void 0 === OU && (OU = yU.q.Zero()));
          let SU = 0,
            rU = 0,
            uU = 0,
            fU = 0;
          for (eU && cU && cU.bbSize && (SU = cU.subDiv.X * qU / cU.bbSize.x, rU = cU.subDiv.Y * qU / cU.bbSize.y, uU = cU.subDiv.Z * qU / cU.bbSize.z, fU = cU.subDiv.max * cU.subDiv.max, cU.facetPartitioning.length = 0), QU = 0; QU < UU.length; QU++) zU[QU] = 0;
          const iU = XU.length / 3 | 0;
          for (QU = 0; QU < iU; QU++) {
            if (tU = 3 * XU[3 * QU], gU = tU + 1, kU = tU + 2, GU = 3 * XU[3 * QU + 1], BU = GU + 1, ZU = GU + 2, RU = 3 * XU[3 * QU + 2], PU = RU + 1, WU = RU + 2, AU = UU[tU] - UU[GU], FU = UU[gU] - UU[BU], oU = UU[kU] - UU[ZU], DU = UU[RU] - UU[GU], EU = UU[PU] - UU[BU], YU = UU[WU] - UU[ZU], NU = wU * (FU * YU - oU * EU), IU = wU * (oU * DU - AU * YU), pU = wU * (AU * EU - FU * DU), aU = Math.sqrt(NU * NU + IU * IU + pU * pU), aU = 0 === aU ? 1 : aU, NU /= aU, IU /= aU, pU /= aU, dU && cU && (cU.facetNormals[QU].x = NU, cU.facetNormals[QU].y = IU, cU.facetNormals[QU].z = pU), LU && cU && (cU.facetPositions[QU].x = (UU[tU] + UU[GU] + UU[RU]) / 3, cU.facetPositions[QU].y = (UU[gU] + UU[BU] + UU[PU]) / 3, cU.facetPositions[QU].z = (UU[kU] + UU[ZU] + UU[WU]) / 3), eU && cU) {
              const XU = Math.floor((cU.facetPositions[QU].x - cU.bInfo.minimum.x * qU) * SU),
                zU = Math.floor((cU.facetPositions[QU].y - cU.bInfo.minimum.y * qU) * rU),
                yU = Math.floor((cU.facetPositions[QU].z - cU.bInfo.minimum.z * qU) * uU),
                AU = Math.floor((UU[tU] - cU.bInfo.minimum.x * qU) * SU),
                FU = Math.floor((UU[gU] - cU.bInfo.minimum.y * qU) * rU),
                oU = Math.floor((UU[kU] - cU.bInfo.minimum.z * qU) * uU),
                DU = Math.floor((UU[GU] - cU.bInfo.minimum.x * qU) * SU),
                EU = Math.floor((UU[BU] - cU.bInfo.minimum.y * qU) * rU),
                YU = Math.floor((UU[ZU] - cU.bInfo.minimum.z * qU) * uU),
                NU = Math.floor((UU[RU] - cU.bInfo.minimum.x * qU) * SU),
                IU = Math.floor((UU[PU] - cU.bInfo.minimum.y * qU) * rU),
                pU = Math.floor((UU[WU] - cU.bInfo.minimum.z * qU) * uU),
                aU = AU + cU.subDiv.max * FU + fU * oU,
                dU = DU + cU.subDiv.max * EU + fU * YU,
                LU = NU + cU.subDiv.max * IU + fU * pU,
                eU = XU + cU.subDiv.max * zU + fU * yU;
              cU.facetPartitioning[eU] = cU.facetPartitioning[eU] ? cU.facetPartitioning[eU] : [], cU.facetPartitioning[aU] = cU.facetPartitioning[aU] ? cU.facetPartitioning[aU] : [], cU.facetPartitioning[dU] = cU.facetPartitioning[dU] ? cU.facetPartitioning[dU] : [], cU.facetPartitioning[LU] = cU.facetPartitioning[LU] ? cU.facetPartitioning[LU] : [], cU.facetPartitioning[aU].push(QU), dU != aU && cU.facetPartitioning[dU].push(QU), LU != dU && LU != aU && cU.facetPartitioning[LU].push(QU), eU != aU && eU != dU && eU != LU && cU.facetPartitioning[eU].push(QU)
            }
            if (CU && cU && cU.facetPositions) {
              const UU = cU.depthSortedFacets[QU];
              UU.ind = 3 * QU, UU.sqDistance = yU.q.DistanceSquared(cU.facetPositions[QU], OU)
            }
            zU[tU] += NU, zU[gU] += IU, zU[kU] += pU, zU[GU] += NU, zU[BU] += IU, zU[ZU] += pU, zU[RU] += NU, zU[PU] += IU, zU[WU] += pU
          }
          for (QU = 0; QU < zU.length / 3; QU++) NU = zU[3 * QU], IU = zU[3 * QU + 1], pU = zU[3 * QU + 2], aU = Math.sqrt(NU * NU + IU * IU + pU * pU), aU = 0 === aU ? 1 : aU, NU /= aU, IU /= aU, pU /= aU, zU[3 * QU] = NU, zU[3 * QU + 1] = IU, zU[3 * QU + 2] = pU
        }
        static _ComputeSides(XU, zU, cU, QU, AU, FU, oU) {
          const DU = cU.length,
            EU = QU.length;
          let YU, NU;
          switch (XU = XU || UU.DEFAULTSIDE) {
            case UU.FRONTSIDE:
              break;
            case UU.BACKSIDE:
              for (YU = 0; YU < DU; YU += 3) {
                const UU = cU[YU];
                cU[YU] = cU[YU + 2], cU[YU + 2] = UU
              }
              for (NU = 0; NU < EU; NU++) QU[NU] = -QU[NU];
              break;
            case UU.DOUBLESIDE: {
              const UU = zU.length,
                XU = UU / 3;
              for (let cU = 0; cU < UU; cU++) zU[UU + cU] = zU[cU];
              for (YU = 0; YU < DU; YU += 3) cU[YU + DU] = cU[YU + 2] + XU, cU[YU + 1 + DU] = cU[YU + 1] + XU, cU[YU + 2 + DU] = cU[YU] + XU;
              for (NU = 0; NU < EU; NU++) QU[EU + NU] = -QU[NU];
              const IU = AU.length;
              let pU;
              for (pU = 0; pU < IU; pU++) AU[pU + IU] = AU[pU];
              for (FU = FU || new yU.t(0, 0, 1, 1), oU = oU || new yU.t(0, 0, 1, 1), pU = 0, YU = 0; YU < IU / 2; YU++) AU[pU] = FU.x + (FU.z - FU.x) * AU[pU], AU[pU + 1] = FU.y + (FU.w - FU.y) * AU[pU + 1], AU[pU + IU] = oU.x + (oU.z - oU.x) * AU[pU + IU], AU[pU + IU + 1] = oU.y + (oU.w - oU.y) * AU[pU + IU + 1], pU += 2;
              break
            }
          }
        }
        static Parse(XU) {
          const zU = new UU,
            cU = XU.positions;
          cU && zU.set(cU, QU.h.PositionKind);
          const yU = XU.normals;
          yU && zU.set(yU, QU.h.NormalKind);
          const AU = XU.tangents;
          AU && zU.set(AU, QU.h.TangentKind);
          const oU = XU.uvs;
          oU && zU.set(oU, QU.h.UVKind);
          const DU = XU.uvs2;
          DU && zU.set(DU, QU.h.UV2Kind);
          const EU = XU.uvs3;
          EU && zU.set(EU, QU.h.UV3Kind);
          const YU = XU.uvs4;
          YU && zU.set(YU, QU.h.UV4Kind);
          const NU = XU.uvs5;
          NU && zU.set(NU, QU.h.UV5Kind);
          const pU = XU.uvs6;
          pU && zU.set(pU, QU.h.UV6Kind);
          const aU = XU.colors;
          aU && (zU.set(FU.e.CheckColors4(aU, cU.length / 3), QU.h.ColorKind), void 0 !== XU.hasVertexAlpha && (zU.hasVertexAlpha = XU.hasVertexAlpha));
          const tU = XU.matricesIndices;
          tU && zU.set(tU, QU.h.MatricesIndicesKind);
          const gU = XU.matricesWeights;
          gU && zU.set(gU, QU.h.MatricesWeightsKind);
          const kU = XU.indices;
          kU && (zU.indices = kU);
          const GU = XU.materialInfos;
          if (GU) {
            zU.materialInfos = [];
            for (const UU of GU) {
              const XU = new IU;
              XU.indexCount = UU.indexCount, XU.indexStart = UU.indexStart, XU.verticesCount = UU.verticesCount, XU.verticesStart = UU.verticesStart, XU.materialIndex = UU.materialIndex, zU.materialInfos.push(XU)
            }
          }
          return zU
        }
        static ImportVertexData(XU, zU) {
          const cU = UU.Parse(XU);
          zU.setAllVerticesData(cU, XU.updatable)
        }
      }, (() => {
        const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [DU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], zU = [DU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], pU = [DU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], aU = [DU.e.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, cU.j)(UU, null, XU, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector3Coordinates" in UU,
            get: UU => UU._TransformVector3Coordinates
          },
          metadata: yU
        }, null, tU), (0, cU.j)(UU, null, zU, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector3Normals" in UU,
            get: UU => UU._TransformVector3Normals
          },
          metadata: yU
        }, null, tU), (0, cU.j)(UU, null, pU, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector4Normals" in UU,
            get: UU => UU._TransformVector4Normals
          },
          metadata: yU
        }, null, tU), (0, cU.j)(UU, null, aU, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: UU => "_FlipFaces" in UU,
            get: UU => UU._FlipFaces
          },
          metadata: yU
        }, null, tU), yU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yU
        })
      })(), UU.FRONTSIDE = ((0, cU.n)(UU, tU), 0), UU.BACKSIDE = 1, UU.DOUBLESIDE = 2, UU.DEFAULTSIDE = 0, UU._UniqueIdGenerator = 0, UU
    })()
  },
  41563: (UU, XU, zU) => {
    var cU = zU(37819),
      yU = zU(39493),
      QU = zU(41387),
      AU = zU(41481),
      FU = zU(41237);
    const oU = "bakedVertexAnimationSettingsInstanced";

    function DU(UU) {
      const XU = UU.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return XU instanceof Float32Array || XU instanceof Uint16Array
    }

    function EU(UU, XU, zU, cU) {
      zU.IUU(Number.POSITIVE_INFINITY), cU.IUU(Number.NEGATIVE_INFINITY);
      for (let yU = 0; yU < 3 * XU; yU += 3) {
        const XU = UU[yU],
          QU = UU[yU + 1],
          AU = UU[yU + 2];
        XU < zU.x && (zU.x = XU), QU < zU.y && (zU.y = QU), AU < zU.z && (zU.z = AU), XU > cU.x && (cU.x = XU), QU > cU.y && (cU.y = QU), AU > cU.z && (cU.z = AU)
      }
    }

    function YU(UU, XU, zU) {
      zU && (UU.x -= UU.x * zU.x + zU.y, UU.y -= UU.y * zU.x + zU.y, UU.z -= UU.z * zU.x + zU.y, XU.x += XU.x * zU.x + zU.y, XU.y += XU.y * zU.x + zU.y, XU.z += XU.z * zU.x + zU.y)
    }

    function NU(UU, XU, zU, yU, QU) {
      const AU = cU.l.Sp[7],
        FU = cU.l.Sp[8];
      for (let oU = 0; oU < 2; ++oU)
        for (let DU = 0; DU < 2; ++DU)
          for (let EU = 0; EU < 2; ++EU) AU.set(oU ? XU.x : UU.x, DU ? XU.y : UU.y, EU ? XU.z : UU.z), cU.q.TransformCoordinatesToRef(AU, zU, FU), yU.minimizeInPlace(FU), QU.maximizeInPlace(FU)
    }

    function IU(UU, XU, zU, yU, QU) {
      const AU = cU.l.Sp[7];
      for (let FU = 0; FU < 3 * XU; FU += 3) cU.q.TransformCoordinatesFromFloatsToRef(UU[FU], UU[FU + 1], UU[FU + 2], zU, AU), yU.minimizeInPlace(AU), QU.maximizeInPlace(AU)
    }
    let pU = !1;
    pU || (pU = !0, AU.b.prototype.thinInstanceAdd = function(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.nS().qp().getCaps().instancedArrays) return yU.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(UU) ? UU.length : 1);
      const zU = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(UU))
        for (let cU = 0; cU < UU.length; ++cU) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU[cU], cU === UU.length - 1 && XU);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU, XU);
      return zU
    }, AU.b.prototype.thinInstanceAddSelf = function() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(cU.e.IdentityReadOnly, UU)
    }, AU.b.prototype.thinInstanceRegisterAttribute = function(UU, XU) {
      UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), this.removeVerticesData(UU), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[UU] = XU, this._userThinInstanceBuffersStorage.sizes[UU] = XU * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[UU] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[UU]), this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new FU.h(this.qp(), this._userThinInstanceBuffersStorage.data[UU], UU, !0, !1, XU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU])
    }, AU.b.prototype.thinInstanceSetMatrixAt = function(UU, XU) {
      let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || UU >= this._thinInstanceDataStorage.instancesCount) return !1;
      const cU = this._thinInstanceDataStorage.matrixData;
      return XU.copyToArray(cU, 16 * UU), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[UU] = XU), zU && (this.qUU("matrix"), this.ip || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, AU.b.prototype.thinInstanceSetAttributeAt = function(UU, XU, zU) {
      let cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[UU] || XU >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(UU, 0), this._userThinInstanceBuffersStorage.data[UU].set(zU, XU * this._userThinInstanceBuffersStorage.strides[UU]), cU && this.qUU(UU), !0)
    }, Object.defineProperty(AU.b.prototype, "BUU", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(UU) {
        const XU = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        UU <= (XU ? XU.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = UU)
      },
      enumerable: !0,
      configurable: !0
    }), AU.b.prototype._thinInstanceCreateMatrixBuffer = function(UU, XU) {
      let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const cU = new FU.d(this.qp(), XU, !zU, 16, !1, !0);
      for (let yU = 0; yU < 4; yU++) this.setVerticesBuffer(cU.createVertexBuffer(UU + yU, 4 * yU, 4));
      return cU
    }, AU.b.prototype.fUU = function(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (zU = zU || 16, "matrix" === UU) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = XU ? XU.length : 32 * zU, this._thinInstanceDataStorage.matrixData = XU, this._thinInstanceDataStorage.worldMatrices = null, null !== XU ? (this._thinInstanceDataStorage.instancesCount = XU.length / zU, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", XU, cU), this.ip || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.ip || this.refreshBoundingInfo());
      else if ("previousMatrix" === UU) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = XU, null !== XU && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", XU, cU));
      else if ("splatIndex" === UU && XU) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = XU.length / zU, this._userThinInstanceBuffersStorage.data[UU] = XU, this._userThinInstanceBuffersStorage.strides[UU] = zU, this._userThinInstanceBuffersStorage.sizes[UU] = XU.length;
        const cU = new FU.d(this.qp(), XU, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = cU;
        for (let XU = 0; XU < 4; XU++) this.setVerticesBuffer(cU.createVertexBuffer(UU + XU, 4 * XU, 4))
      } else UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), null === XU ? this._userThinInstanceBuffersStorage?.data[UU] && (this.removeVerticesData(UU), delete this._userThinInstanceBuffersStorage.data[UU], delete this._userThinInstanceBuffersStorage.strides[UU], delete this._userThinInstanceBuffersStorage.sizes[UU], delete this._userThinInstanceBuffersStorage.vertexBuffers[UU]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[UU] = XU, this._userThinInstanceBuffersStorage.strides[UU] = zU, this._userThinInstanceBuffersStorage.sizes[UU] = XU.length, this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new FU.h(this.qp(), XU, UU, !cU, !1, zU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
    }, AU.b.prototype.qUU = function(UU) {
      "matrix" === UU ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === UU ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === UU ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[UU], 0, this._thinInstanceDataStorage.instancesCount) : (UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[UU] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[UU].isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._userThinInstanceBuffersStorage.vertexBuffers[UU].updateDirectly(this._userThinInstanceBuffersStorage.data[UU], 0)))
    }, AU.b.prototype.thinInstancePartialBufferUpdate = function(UU, XU, zU) {
      if ("matrix" === UU) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof XU ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * zU * Float32Array.BYTES_PER_ELEMENT, 16 * XU), 16 * zU) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(XU, zU));
      else if (UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[UU]) {
        const cU = this._userThinInstanceBuffersStorage.vertexBuffers[UU];
        if ("number" === typeof XU) {
          const cU = new Float32Array(this._userThinInstanceBuffersStorage.data[UU].buffer, this._userThinInstanceBuffersStorage.data[UU].byteOffset + zU * this._userThinInstanceBuffersStorage.strides[UU] * Float32Array.BYTES_PER_ELEMENT, XU * this._userThinInstanceBuffersStorage.strides[UU]);
          this._userThinInstanceBuffersStorage.vertexBuffers[UU].updateDirectly(cU, zU * this._userThinInstanceBuffersStorage.strides[UU])
        } else cU.updateDirectly(XU, zU)
      }
    }, AU.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const UU = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let XU = 0; XU < this._thinInstanceDataStorage.instancesCount; ++XU) this._thinInstanceDataStorage.worldMatrices[XU] = cU.e.FromArray(UU, 16 * XU)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, AU.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const AU = this._thinInstanceDataStorage.boundingVectors;
      if (UU || !this.rawBoundingInfo) {
        if (AU.length = 0, yU && function(UU, XU, zU) {
            const yU = UU._userThinInstanceBuffersStorage,
              AU = yU?.data[oU],
              pU = yU?.strides[oU];
            if (!AU || !pU || pU < 4 || !DU(UU)) return !1;
            const aU = UU._thinInstanceDataStorage.matrixData;
            if (!aU) return !1;
            const tU = {},
              gU = cU.l.Vector4[0],
              kU = cU.l.Sp[1],
              GU = cU.l.Sp[2],
              BU = cU.l.Sp[3],
              ZU = cU.l.Sp[4],
              RU = cU.l.Sp[5],
              PU = cU.l.Sp[6],
              WU = cU.l.Matrix[2],
              dU = UU.geometry ? UU.geometry.boundingBias : null,
              LU = UU.getTotalVertices();
            kU.IUU(Number.POSITIVE_INFINITY), GU.IUU(Number.NEGATIVE_INFINITY), BU.IUU(Number.POSITIVE_INFINITY), ZU.IUU(Number.NEGATIVE_INFINITY);
            for (let QU = 0; QU < UU._thinInstanceDataStorage.instancesCount; ++QU) {
              const XU = QU * pU;
              gU.set(AU[XU], AU[XU + 1], AU[XU + 2], AU[XU + 3]);
              const yU = UU._getData({
                applyMorph: zU,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: gU,
                updatePositionsArray: !1,
                cache: tU
              }, null, FU.h.PositionKind);
              if (!yU) return !1;
              EU(yU, LU, RU, PU), YU(RU, PU, dU), kU.minimizeInPlace(RU), GU.maximizeInPlace(PU), cU.e.FromArrayToRef(aU, 16 * QU, WU), dU ? NU(RU, PU, WU, BU, ZU) : IU(yU, LU, WU, BU, ZU)
            }
            return !(!isFinite(kU.x) || !isFinite(BU.x)) && (UU.gM().reConstruct(BU, ZU), UU.rawBoundingInfo = new QU.b(kU, GU), function(UU, XU) {
              UU.length = 0;
              for (let zU = 0; zU < XU.boundingBox.vectors.length; ++zU) UU.push(XU.boundingBox.vectors[zU].clone())
            }(XU, UU.rawBoundingInfo), UU._updateBoundingInfo(), !0)
          }(this, AU, zU)) return;
        yU && this.bakedVertexAnimationManager?.isEnabled && DU(this) ? this.refreshBoundingInfo({
          applySkeleton: XU,
          applyMorph: zU,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(XU, zU);
        const UU = this.gM();
        this.rawBoundingInfo = new QU.b(UU.minimum, UU.maximum)
      }
      const pU = this.gM(),
        aU = this._thinInstanceDataStorage.matrixData;
      if (0 === AU.length)
        for (let cU = 0; cU < pU.boundingBox.vectors.length; ++cU) AU.push(pU.boundingBox.vectors[cU].clone());
      cU.l.Sp[0].IUU(Number.POSITIVE_INFINITY), cU.l.Sp[1].IUU(Number.NEGATIVE_INFINITY);
      for (let QU = 0; QU < this._thinInstanceDataStorage.instancesCount; ++QU) {
        cU.e.FromArrayToRef(aU, 16 * QU, cU.l.Matrix[0]);
        for (let UU = 0; UU < AU.length; ++UU) cU.q.TransformCoordinatesToRef(AU[UU], cU.l.Matrix[0], cU.l.Sp[2]), cU.l.Sp[0].minimizeInPlace(cU.l.Sp[2]), cU.l.Sp[1].maximizeInPlace(cU.l.Sp[2])
      }
      pU.reConstruct(cU.l.Sp[0], cU.l.Sp[1]), this._updateBoundingInfo()
    }, AU.b.prototype._thinInstanceRecreateBuffer = function(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === UU ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, XU)) : "previousMatrix" === UU ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, XU)) : (UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[UU]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new FU.h(this.qp(), this._userThinInstanceBuffersStorage.data[UU], UU, !XU, !1, this._userThinInstanceBuffersStorage.strides[UU], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
    }, AU.b.prototype._thinInstanceUpdateBufferSize = function(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      UU === FU.h.ColorKind && (UU = FU.h.ColorInstanceKind);
      const zU = "matrix" === UU;
      if (!zU && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[UU])) return;
      const cU = zU ? 16 : this._userThinInstanceBuffersStorage.strides[UU],
        yU = zU ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[UU];
      let QU = zU ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[UU];
      const AU = (this._thinInstanceDataStorage.instancesCount + XU) * cU;
      let oU = yU;
      for (; oU < AU;) oU *= 2;
      if (!QU || yU != oU) {
        if (QU) {
          const UU = new Float32Array(oU);
          UU.set(QU, 0), QU = UU
        } else QU = new Float32Array(oU);
        zU ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", QU, !1), this._thinInstanceDataStorage.matrixData = QU, this._thinInstanceDataStorage.matrixBufferSize = oU, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", QU, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[UU]?.dispose(), this._userThinInstanceBuffersStorage.data[UU] = QU, this._userThinInstanceBuffersStorage.sizes[UU] = oU, this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new FU.h(this.qp(), QU, UU, !0, !1, cU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
      }
    }, AU.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, AU.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41515: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => kU,
      e: () => aU
    });
    var cU, yU, QU, AU, FU = zU(41113),
      oU = zU(41121),
      DU = zU(41134),
      EU = zU(37846),
      YU = zU(37819),
      NU = zU(41314),
      IU = zU(37863),
      pU = zU(40989);
    let aU = (() => {
      var UU;
      let XU, zU, cU, yU, QU, AU, IU, pU, aU, tU = NU.e,
        gU = [],
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        dU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [];
      return UU = class extends tU {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(XU) {
          this._billboardMode !== XU && (this._billboardMode = XU, this._cache.useBillboardPosition = 0 !== (this._billboardMode & UU.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(UU) {
          this._infiniteDistance !== UU && (this._infiniteDistance = UU)
        }
        constructor(XU) {
          let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(XU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new YU.q(0, 0, 1), this._up = new YU.q(0, 1, 0), this._right = new YU.q(1, 0, 0), this._position = (0, FU.n)(this, gU, YU.q.Zero()), this._rotation = ((0, FU.n)(this, kU), (0, FU.n)(this, GU, YU.q.Zero())), this._rotationQuaternion = ((0, FU.n)(this, BU), (0, FU.n)(this, ZU, null)), this._scaling = ((0, FU.n)(this, RU), (0, FU.n)(this, PU, YU.q.One())), this._transformToBoneReferal = ((0, FU.n)(this, WU), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, FU.n)(this, dU, UU.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, FU.n)(this, LU), (0, FU.n)(this, eU, 1)), this._infiniteDistance = ((0, FU.n)(this, CU), (0, FU.n)(this, wU, !1)), this.ignoreNonUniformScaling = ((0, FU.n)(this, qU), (0, FU.n)(this, OU, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, FU.n)(this, SU), (0, FU.n)(this, rU, !1)), this._poseMatrix = ((0, FU.n)(this, uU), null), this._localMatrix = YU.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = YU.q.Zero(), this._absoluteScaling = YU.q.Zero(), this._absoluteRotationQuaternion = YU.f.Identity(), this._pivotMatrix = YU.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new EU.e, this._nonUniformScaling = !1, zU && this.nS().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(UU) {
          this._position = UU, this._markAsDirtyInternal()
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
        set rotation(UU) {
          this._rotation = UU, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get RY() {
          return this._scaling
        }
        set RY(UU) {
          this._scaling = UU, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(UU) {
          this._rotationQuaternion = UU, UU && this._rotation.IUU(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return YU.q.TransformNormalFromFloatsToRef(0, 0, this.nS().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return YU.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return YU.q.TransformNormalFromFloatsToRef(this.nS().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(UU) {
          return this._poseMatrix ? (this._poseMatrix.YL(UU), this) : (this._poseMatrix = UU.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = YU.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const XU = this._cache;
          return this._billboardMode === XU.billboardMode && this._billboardMode === UU.BILLBOARDMODE_NONE && (!XU.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const UU = this._cache;
          UU.localMatrixUpdated = !1, UU.billboardMode = -1, UU.infiniteDistance = !1, UU.useBillboardPosition = !1
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
        setPreTransformMatrix(UU) {
          return this.setPivotMatrix(UU, !1)
        }
        setPivotMatrix(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.YL(UU), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = XU, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = YU.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            XU = arguments.length > 1 ? arguments[1] : void 0,
            zU = arguments.length > 2 ? arguments[2] : void 0;
          const cU = this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0);
          cU && zU && zU(this, cU);
          for (const yU of this.getChildTransformNodes(!0)) yU.instantiateHierarchy(cU, XU, zU);
          return cU
        }
        IH() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return UU ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.IUU(0), this._rotationQuaternion = this._rotationQuaternion || YU.f.Identity(), UU.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = UU, this._absolutePosition.sUU(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get fFU() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(UU) {
          if (!UU) return this;
          let XU, zU, cU;
          if (void 0 === UU.x) {
            if (arguments.length < 3) return this;
            XU = arguments[0], zU = arguments[1], cU = arguments[2]
          } else XU = UU.x, zU = UU.y, cU = UU.z;
          if (this.parent) {
            const UU = YU.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(UU), YU.q.TransformCoordinatesFromFloatsToRef(XU, zU, cU, UU, this.position)
          } else this.position.x = XU, this.position.y = zU, this.position.z = cU;
          return this._absolutePosition.YL(UU), this
        }
        setPositionWithLocalVector(UU) {
          return this.computeWorldMatrix(), this.position = YU.q.TransformNormal(UU, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const UU = YU.l.Matrix[0];
          return this._localMatrix.invertToRef(UU), YU.q.TransformNormal(this.position, UU)
        }
        locallyTranslate(UU) {
          return this.computeWorldMatrix(!0), this.position = YU.q.TransformCoordinates(UU, this._localMatrix), this
        }
        lookAt(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const AU = UU._LookAtVectorCache,
            FU = 0 === QU ? this.position : this.getAbsolutePosition();
          if (XU.subtractToRef(FU, AU), this.setDirection(AU, zU, cU, yU), 1 === QU && this.parent)
            if (this.rotationQuaternion) {
              const UU = YU.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(UU);
              const XU = YU.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(XU), XU.invert(), UU.multiplyToRef(XU, UU), this.rotationQuaternion.fromRotationMatrix(UU)
            } else {
              const UU = YU.l.Quaternion[0];
              YU.f.FromEulerVectorToRef(this.rotation, UU);
              const XU = YU.l.Matrix[0];
              UU.toRotationMatrix(XU);
              const zU = YU.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(zU), zU.invert(), XU.multiplyToRef(zU, XU), UU.fromRotationMatrix(XU), UU.toEulerAnglesToRef(this.rotation)
            } return this
        }
        R_(UU) {
          const XU = YU.q.Zero();
          return this.getDirectionToRef(UU, XU), XU
        }
        getDirectionToRef(UU, XU) {
          return YU.q.TransformNormalToRef(UU, this.getWorldMatrix(), XU), this
        }
        setDirection(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const yU = -Math.atan2(UU.z, UU.x) + Math.PI / 2,
            QU = Math.sqrt(UU.x * UU.x + UU.z * UU.z),
            AU = -Math.atan2(UU.y, QU);
          return this.rotationQuaternion ? YU.f.RotationYawPitchRollToRef(yU + XU, AU + zU, cU, this.rotationQuaternion) : (this.rotation.x = AU + zU, this.rotation.y = yU + XU, this.rotation.z = cU), this
        }
        setPivotPoint(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.nS().getRenderId() && this.computeWorldMatrix(!0);
          const zU = this.getWorldMatrix();
          if (1 == XU) {
            const XU = YU.l.Matrix[0];
            zU.invertToRef(XU), UU = YU.q.TransformCoordinates(UU, XU)
          }
          return this.setPivotMatrix(YU.e.Translation(-UU.x, -UU.y, -UU.z), !0)
        }
        getPivotPoint() {
          const UU = YU.q.Zero();
          return this.getPivotPointToRef(UU), UU
        }
        getPivotPointToRef(UU) {
          return UU.x = -this._pivotMatrix.m[12], UU.y = -this._pivotMatrix.m[13], UU.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const UU = YU.q.Zero();
          return this.getAbsolutePivotPointToRef(UU), UU
        }
        getAbsolutePivotPointToRef(UU) {
          return this.getPivotPointToRef(UU), YU.q.TransformCoordinatesToRef(UU, this.getWorldMatrix(), UU), this
        }
        OzU(UU) {
          if (this._isDirty) return this;
          if (this._children)
            for (const XU of this._children) XU.OzU(UU);
          return super.OzU(UU)
        }
        setParent(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!XU && !this.parent) return this;
          const yU = YU.l.Quaternion[0],
            QU = YU.l.Sp[0],
            AU = YU.l.Sp[1],
            FU = YU.l.Matrix[1];
          YU.e.IdentityToRef(FU);
          const oU = YU.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let DU = this.rotationQuaternion;
          return DU || (DU = UU._TmpRotation, YU.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, DU)), YU.e.ComposeToRef(this.RY, DU, this.position, oU), this.parent && oU.multiplyToRef(this.parent.computeWorldMatrix(!0), oU), XU && (XU.computeWorldMatrix(!0).invertToRef(FU), oU.multiplyToRef(FU, oU)), oU.decompose(AU, yU, QU, zU ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.YL(yU) : yU.toEulerAnglesToRef(this.rotation), this.RY.YL(AU), this.position.YL(QU), this.parent = XU, cU && this.setPivotMatrix(YU.e.Identity()), this
        }
        addChild(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return UU.setParent(this, XU), this
        }
        removeChild(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return UU.parent !== this || UU.setParent(null, XU), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(UU) {
          return this._nonUniformScaling !== UU && (this._nonUniformScaling = UU, !0)
        }
        attachToBone(UU, XU) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = XU, this.parent = UU, UU.getSkeleton().prepare(!0), UU.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = UU ? this._currentParentWhenAttachingToBone : null, this) : (UU && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(XU, zU, cU) {
          let yU;
          if (XU.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.IUU(0)), cU && 0 !== cU) {
            if (this.parent) {
              const UU = this.parent.getWorldMatrix(),
                cU = YU.l.Matrix[0];
              UU.invertToRef(cU), XU = YU.q.TransformNormal(XU, cU), UU.determinant() < 0 && (zU *= -1)
            }
            yU = YU.f.RotationAxisToRef(XU, zU, UU._RotationAxisCache), yU.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else yU = YU.f.RotationAxisToRef(XU, zU, UU._RotationAxisCache), this.rotationQuaternion.multiplyToRef(yU, this.rotationQuaternion);
          return this
        }
        rotateAround(UU, XU, zU) {
          XU.normalize(), this.rotationQuaternion || (this.rotationQuaternion = YU.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.IUU(0));
          const cU = YU.l.Sp[0],
            yU = YU.l.Sp[1],
            QU = YU.l.Sp[2],
            AU = YU.l.Quaternion[0],
            FU = YU.l.Matrix[0],
            oU = YU.l.Matrix[1],
            DU = YU.l.Matrix[2],
            EU = YU.l.Matrix[3];
          return UU.subtractToRef(this.position, cU), YU.e.TranslationToRef(cU.x, cU.y, cU.z, FU), YU.e.TranslationToRef(-cU.x, -cU.y, -cU.z, oU), YU.e.RotationAxisToRef(XU, zU, DU), oU.multiplyToRef(DU, EU), EU.multiplyToRef(FU, EU), EU.decompose(yU, AU, QU), this.position.addInPlace(QU), AU.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(UU, XU, zU) {
          const cU = UU.scale(XU);
          if (zU && 0 !== zU) this.setAbsolutePosition(this.getAbsolutePosition().add(cU));
          else {
            const UU = this.getPositionExpressedInLocalSpace().add(cU);
            this.setPositionWithLocalVector(UU)
          }
          return this
        }
        addRotation(UU, XU, zU) {
          let cU;
          this.rotationQuaternion ? cU = this.rotationQuaternion : (cU = YU.l.Quaternion[1], YU.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, cU));
          const yU = YU.l.Quaternion[0];
          return YU.f.RotationYawPitchRollToRef(XU, UU, zU, yU), cU.multiplyInPlace(yU), this.rotationQuaternion || cU.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== UU.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const cU = this.nS().getRenderId();
          if (!this._isDirty && !XU && (this._currentRenderId === cU || this.isSynchronized())) return this._currentRenderId = cU, this._worldMatrix;
          zU = zU || this.nS().activeCamera, this._updateCache();
          const yU = this._cache;
          yU.pivotMatrixUpdated = !1, yU.billboardMode = this.billboardMode, yU.infiniteDistance = this.infiniteDistance, yU.parent = this._parentNode, this._currentRenderId = cU, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const QU = this._getEffectiveParent(),
            AU = UU._TmpScaling;
          let FU, oU = this._position;
          if (this._infiniteDistance && !this.parent && zU) {
            const XU = zU.getWorldMatrix().m;
            oU = UU._TmpTranslation, oU.sUU(this._position.x + XU[12], this._position.y + XU[13], this._position.z + XU[14])
          }
          if (AU.sUU(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, FU = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(YU.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.sUU(0, 0, 0))
            }
          } else FU = UU._TmpRotation, YU.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, FU);
          if (this._usePivotMatrix) {
            const UU = YU.l.Matrix[1];
            YU.e.ScalingToRef(AU.x, AU.y, AU.z, UU);
            const XU = YU.l.Matrix[0];
            FU.toRotationMatrix(XU), this._pivotMatrix.multiplyToRef(UU, YU.l.Matrix[4]), YU.l.Matrix[4].multiplyToRef(XU, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(oU.x, oU.y, oU.z)
          } else YU.e.ComposeToRef(AU, FU, oU, this._localMatrix);
          if (QU && QU.getWorldMatrix) {
            if (XU && QU.computeWorldMatrix(XU), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const UU = this.parent;
                UU.getSkeleton().prepare(), UU.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), YU.l.Matrix[7])
              } else YU.l.Matrix[7].YL(QU.getWorldMatrix());
              const XU = YU.l.Sp[5],
                zU = YU.l.Sp[6],
                cU = YU.l.Quaternion[0];
              YU.l.Matrix[7].decompose(zU, cU, XU), YU.e.ScalingToRef(zU.x, zU.y, zU.z, YU.l.Matrix[7]), YU.l.Matrix[7].setTranslation(XU), UU.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(cU, XU), this._localMatrix.setTranslation(XU)), this._localMatrix.multiplyToRef(YU.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const UU = this.parent;
              UU.getSkeleton().prepare(), this._localMatrix.multiplyToRef(UU.getFinalMatrix(), YU.l.Matrix[6]), YU.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(QU.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.YL(this._localMatrix);
          if (zU && this.billboardMode)
            if (yU.useBillboardPosition) {
              const XU = YU.l.Sp[0];
              this._worldMatrix.getTranslationToRef(XU);
              const cU = zU.globalPosition;
              this._worldMatrix.invertToRef(YU.l.Matrix[1]);
              const yU = YU.l.Sp[1];
              YU.q.TransformCoordinatesToRef(cU, YU.l.Matrix[1], yU), yU.normalize();
              const QU = -Math.atan2(yU.z, yU.x) + Math.PI / 2,
                AU = Math.sqrt(yU.x * yU.x + yU.z * yU.z),
                FU = -Math.atan2(yU.y, AU);
              if (YU.f.RotationYawPitchRollToRef(QU, FU, 0, YU.l.Quaternion[0]), (this.billboardMode & UU.BILLBOARDMODE_ALL) !== UU.BILLBOARDMODE_ALL) {
                const XU = YU.l.Sp[1];
                YU.l.Quaternion[0].toEulerAnglesToRef(XU), (this.billboardMode & UU.BILLBOARDMODE_X) !== UU.BILLBOARDMODE_X && (XU.x = 0), (this.billboardMode & UU.BILLBOARDMODE_Y) !== UU.BILLBOARDMODE_Y && (XU.y = 0), (this.billboardMode & UU.BILLBOARDMODE_Z) !== UU.BILLBOARDMODE_Z && (XU.z = 0), YU.e.RotationYawPitchRollToRef(XU.y, XU.x, XU.z, YU.l.Matrix[0])
              } else YU.e.FromQuaternionToRef(YU.l.Quaternion[0], YU.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(YU.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(YU.l.Sp[0])
            } else {
              const XU = YU.l.Sp[0];
              this._worldMatrix.getTranslationToRef(XU), YU.l.Matrix[1].YL(zU.getViewMatrix());
              const cU = this.nS().useRightHandedSystem;
              if (cU && YU.l.Matrix[1].multiplyToRef(UU._TmpRHRestore, YU.l.Matrix[1]), YU.l.Matrix[1].setTranslationFromFloats(0, 0, 0), YU.l.Matrix[1].invertToRef(YU.l.Matrix[0]), (this.billboardMode & UU.BILLBOARDMODE_ALL) !== UU.BILLBOARDMODE_ALL) {
                YU.l.Matrix[0].decompose(void 0, YU.l.Quaternion[0], void 0);
                const XU = YU.l.Sp[1];
                YU.l.Quaternion[0].toEulerAnglesToRef(XU), (this.billboardMode & UU.BILLBOARDMODE_X) !== UU.BILLBOARDMODE_X && (XU.x = 0), (this.billboardMode & UU.BILLBOARDMODE_Y) !== UU.BILLBOARDMODE_Y && (XU.y = 0), (this.billboardMode & UU.BILLBOARDMODE_Z) !== UU.BILLBOARDMODE_Z && (XU.z = 0), cU && (XU.y += Math.PI), YU.e.RotationYawPitchRollToRef(XU.y, XU.x, XU.z, YU.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(YU.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(YU.l.Sp[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : QU && QU._nonUniformScaling ? this._updateNonUniformScalingState(QU._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.sUU(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = YU.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), UU) {
            const UU = this.getChildren();
            for (let XU = 0; XU < UU.length; ++XU) {
              const zU = UU[XU];
              if (zU) {
                zU.computeWorldMatrix();
                const UU = YU.l.Matrix[0];
                zU._localMatrix.multiplyToRef(this._localMatrix, UU);
                const XU = YU.l.Quaternion[0];
                UU.decompose(zU.RY, XU, zU.position), zU.rotationQuaternion ? zU.rotationQuaternion.YL(XU) : XU.toEulerAnglesToRef(zU.rotation)
              }
            }
          }
          this.RY.sUU(1, 1, 1), this.position.sUU(0, 0, 0), this.rotation.sUU(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = YU.f.Identity()), this._worldMatrix = YU.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(UU) {
          return this.onAfterWorldMatrixUpdateObservable.add(UU), this
        }
        unregisterAfterWorldMatrixUpdate(UU) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(UU), this
        }
        getPositionInCameraSpace() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return UU || (UU = this.nS().activeCamera), YU.q.TransformCoordinates(this.getAbsolutePosition(), UU.getViewMatrix())
        }
        getDistanceToCamera() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return UU || (UU = this.nS().activeCamera), this.getAbsolutePosition().subtract(UU.globalPosition).length()
        }
        clone(XU, zU, cU) {
          const yU = DU.b.Clone((() => new UU(XU, this.nS())), this);
          if (yU.name = XU, yU.id = XU, zU && (yU.parent = zU), !cU) {
            const UU = this.getDescendants(!0);
            for (let zU = 0; zU < UU.length; zU++) {
              const cU = UU[zU];
              cU.clone && cU.clone(XU + "." + cU.name, yU)
            }
          }
          return yU
        }
        serialize(UU) {
          const XU = DU.b.Serialize(this, UU);
          return XU.type = this.getClassName(), XU.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(XU), XU.localMatrix = this.getPivotMatrix().cyU(), XU.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (XU.IH = !0), DU.b.AppendSerializedAnimations(this, XU), XU.Qt = this.serializeAnimationRanges(), XU
        }
        getChildTransformNodes(XU, zU) {
          const cU = [];
          return this._getDescendants(cU, XU, (XU => (!zU || zU(XU)) && XU instanceof UU)), cU
        }
        dispose(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.nS().stopAnimation(this), this.nS().removeTransformNode(this), this._parentContainer) {
            const UU = this._parentContainer.transformNodes.indexOf(this);
            UU > -1 && this._parentContainer.transformNodes.splice(UU, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), UU) {
            const UU = this.getChildTransformNodes(!0);
            for (const XU of UU) XU.parent = null, XU.computeWorldMatrix(!0)
          }
          super.dispose(UU, XU)
        }
        normalizeToUnitCube() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0,
            cU = null,
            yU = null;
          XU && (this.rotationQuaternion ? (yU = this.rotationQuaternion.clone(), this.rotationQuaternion.sUU(0, 0, 0, 1)) : this.rotation && (cU = this.rotation.clone(), this.rotation.sUU(0, 0, 0)));
          const QU = this.getHierarchyBoundingVectors(UU, zU),
            AU = QU.max.subtract(QU.min),
            FU = Math.max(AU.x, AU.y, AU.z);
          if (0 === FU) return this;
          const oU = 1 / FU;
          return this.RY.scaleInPlace(oU), XU && (this.rotationQuaternion && yU ? this.rotationQuaternion.YL(yU) : this.rotation && cU && this.rotation.YL(cU)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const DU = "function" === typeof Symbol && Symbol.metadata ? Object.create(tU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, oU.F)("position")], zU = [(0, oU.F)("rotation")], cU = [(0, oU.v)("rotationQuaternion")], yU = [(0, oU.F)("RY")], QU = [(0, oU.I)("billboardMode")], AU = [(0, oU.I)()], IU = [(0, oU.I)("infiniteDistance")], pU = [(0, oU.I)()], aU = [(0, oU.I)()], (0, FU.j)(null, null, XU, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: UU => "_position" in UU,
            get: UU => UU._position,
            set: (UU, XU) => {
              UU._position = XU
            }
          },
          metadata: DU
        }, gU, kU), (0, FU.j)(null, null, zU, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_rotation" in UU,
            get: UU => UU._rotation,
            set: (UU, XU) => {
              UU._rotation = XU
            }
          },
          metadata: DU
        }, GU, BU), (0, FU.j)(null, null, cU, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: UU => "_rotationQuaternion" in UU,
            get: UU => UU._rotationQuaternion,
            set: (UU, XU) => {
              UU._rotationQuaternion = XU
            }
          },
          metadata: DU
        }, ZU, RU), (0, FU.j)(null, null, yU, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "_scaling" in UU,
            get: UU => UU._scaling,
            set: (UU, XU) => {
              UU._scaling = XU
            }
          },
          metadata: DU
        }, PU, WU), (0, FU.j)(null, null, QU, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_billboardMode" in UU,
            get: UU => UU._billboardMode,
            set: (UU, XU) => {
              UU._billboardMode = XU
            }
          },
          metadata: DU
        }, dU, LU), (0, FU.j)(null, null, AU, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: UU => "scalingDeterminant" in UU,
            get: UU => UU.scalingDeterminant,
            set: (UU, XU) => {
              UU.scalingDeterminant = XU
            }
          },
          metadata: DU
        }, eU, CU), (0, FU.j)(null, null, IU, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "_infiniteDistance" in UU,
            get: UU => UU._infiniteDistance,
            set: (UU, XU) => {
              UU._infiniteDistance = XU
            }
          },
          metadata: DU
        }, wU, qU), (0, FU.j)(null, null, pU, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "ignoreNonUniformScaling" in UU,
            get: UU => UU.ignoreNonUniformScaling,
            set: (UU, XU) => {
              UU.ignoreNonUniformScaling = XU
            }
          },
          metadata: DU
        }, OU, SU), (0, FU.j)(null, null, aU, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: UU => "reIntegrateRotationIntoRotationQuaternion" in UU,
            get: UU => UU.reIntegrateRotationIntoRotationQuaternion,
            set: (UU, XU) => {
              UU.reIntegrateRotationIntoRotationQuaternion = XU
            }
          },
          metadata: DU
        }, rU, uU), DU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DU
        })
      })(), UU.BILLBOARDMODE_NONE = 0, UU.BILLBOARDMODE_X = 1, UU.BILLBOARDMODE_Y = 2, UU.BILLBOARDMODE_Z = 4, UU.BILLBOARDMODE_ALL = 7, UU.BILLBOARDMODE_USE_POSITION = 128, UU.BillboardUseParentOrientation = !1, UU._TmpRotation = YU.f.Zero(), UU._TmpScaling = YU.q.Zero(), UU._TmpTranslation = YU.q.Zero(), UU._TmpRHRestore = YU.e.Scaling(1, 1, -1), UU._LookAtVectorCache = new YU.q(0, 0, 0), UU._RotationAxisCache = new YU.f, UU
    })();

    function tU(UU, XU, zU) {
      const cU = DU.b.Parse((() => new aU(UU.name, XU)), UU, XU, zU);
      if (UU.localMatrix ? cU.setPreTransformMatrix(YU.e.FromArray(UU.localMatrix)) : UU.pivotMatrix && cU.setPivotMatrix(YU.e.FromArray(UU.pivotMatrix)), cU.YC(UU.isEnabled), cU._waitingParsedUniqueId = UU.uniqueId, void 0 !== UU.parentId && (cU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (cU._waitingParentInstanceIndex = UU.parentInstanceIndex), UU.IH && (cU._waitingFreezeWorldMatrix = UU.IH), UU.animations) {
        for (let XU = 0; XU < UU.animations.length; XU++) {
          const zU = UU.animations[XU],
            yU = (0, IU.e)("BABYLON.Animation");
          yU && cU.animations.push(yU.Parse(zU))
        }
        NU.e.ParseAnimationRanges(cU, UU, XU)
      }
      return UU.autoAnimate && XU.beginAnimation(cU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), cU
    }
    let gU = !1;

    function kU() {
      gU || (gU = !0, aU.Parse = tU)
    }(cU = aU.prototype).Bx ?? (cU.Bx = (0, pU.k)("TransformNode", "Bx")), (yU = aU.prototype).applyImpulse ?? (yU.applyImpulse = (0, pU.k)("TransformNode", "applyImpulse")), (QU = aU.prototype).applyAngularImpulse ?? (QU.applyAngularImpulse = (0, pU.k)("TransformNode", "applyAngularImpulse")), (AU = aU.prototype).applyTorque ?? (AU.applyTorque = (0, pU.k)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(aU.prototype, "physicsBody") || Object.defineProperty(aU.prototype, "physicsBody", (0, pU.i)("TransformNode", "physicsBody"))
  },
  41486: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      try {
        const cU = UU.next();
        cU.done ? XU(cU) : cU.value ? cU.value.then((() => {
          cU.value = void 0, XU(cU)
        }), zU) : XU(cU)
      } catch (cU) {
        zU(cU)
      }
    }

    function yU() {
      let UU, XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (zU, yU, QU) => {
        const AU = performance.now();
        void 0 === UU || AU - UU > XU ? (UU = AU, setTimeout((() => {
          cU(zU, yU, QU)
        }), 0)) : cU(zU, yU, QU)
      }
    }

    function QU(UU, XU, zU, cU, yU) {
      const QU = () => {
        let AU;
        const FU = UU => {
          UU.done ? zU(UU.value) : void 0 === AU ? AU = !0 : QU()
        };
        do {
          AU = void 0, yU && yU.aborted ? cU(new Error("Aborted")) : XU(UU, FU, cU), void 0 === AU && (AU = !1)
        } while (AU)
      };
      QU()
    }

    function AU(UU, XU) {
      let zU;
      return QU(UU, cU, (UU => zU = UU), (UU => {
        throw UU
      }), XU), zU
    }
    async function FU(UU, XU, zU) {
      return await new Promise(((cU, yU) => {
        QU(UU, XU, cU, yU, zU)
      }))
    }

    function oU(UU, XU) {
      return function() {
        return AU(UU(...arguments), XU)
      }
    }
    zU.d(XU, {
      b: () => yU,
      c: () => oU,
      e: () => FU,
      i: () => AU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
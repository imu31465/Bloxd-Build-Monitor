export const id = 241;
export const ids = [241];
export const modules = {
  39603: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      g: () => fU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39480),
      PU = gU(36624),
      TU = gU(36600),
      qU = gU(39610),
      KU = gU(38236),
      cU = gU(36639),
      GU = gU(39256),
      jU = gU(37641),
      uU = gU(37301),
      CU = gU(39344),
      hU = gU(39395);
    let QU = (() => {
      var UU;
      let RU, gU, cU, QU, eU, WU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU = qU.b,
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        yU = [],
        kU = [],
        FU = [],
        iU = [],
        AU = [],
        zU = [],
        MU = [],
        DU = [],
        LU = [],
        NU = [],
        lU = [],
        OU = [],
        UR = [],
        RR = [],
        gR = [],
        tR = [],
        pR = [];
      return UU = class extends BU {
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
          let RU, gU;
          if (this.mode === UU.PERSPECTIVE_CAMERA) this.fovMode === UU.FOVMODE_VERTICAL_FIXED ? (gU = 2 * this.minZ * Math.tan(this.fov / 2), RU = this.WC().getAspectRatio(this) * gU) : (RU = 2 * this.minZ * Math.tan(this.fov / 2), gU = RU / this.WC().getAspectRatio(this));
          else {
            const UU = this.WC().getRenderWidth() / 2,
              tU = this.WC().getRenderHeight() / 2;
            RU = (this.orthoRight ?? UU) - (this.orthoLeft ?? -UU), gU = (this.orthoTop ?? tU) - (this.orthoBottom ?? -tU)
          }
          return RU * gU
        }
        set orthoLeft(UU) {
          this._orthoLeft = UU;
          for (const RU of this._rigCameras) RU.orthoLeft = UU
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(UU) {
          this._orthoRight = UU;
          for (const RU of this._rigCameras) RU.orthoRight = UU
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(UU) {
          this._orthoBottom = UU;
          for (const RU of this._rigCameras) RU.orthoBottom = UU
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(UU) {
          this._orthoTop = UU;
          for (const RU of this._rigCameras) RU.orthoTop = UU
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(RU / (2 * UU))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(UU) {
          this._baseInertia = UU
        }
        set mode(UU) {
          this._mode = UU;
          for (const RU of this._rigCameras) RU.mode = UU
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(RU, gU, pU) {
          let qU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, CU.b)(), super(RU, pU, !1), this.inputs = (0, tU.j)(this, VU), this._position = (0, tU.j)(this, rU, TU.n.Zero()), this._upVector = ((0, tU.j)(this, XU), (0, tU.j)(this, vU, TU.n.Up())), this.oblique = ((0, tU.j)(this, dU), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, tU.j)(this, HU, .8), this.projectionPlaneTilt = ((0, tU.j)(this, SU), (0, tU.j)(this, sU, 0)), this.minZ = ((0, tU.j)(this, yU), (0, tU.j)(this, kU, 1)), this.maxZ = ((0, tU.j)(this, FU), (0, tU.j)(this, iU, 1e4)), this._baseInertia = ((0, tU.j)(this, AU), .9), this._mode = UU.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new jU.d(0, 0, 1, 1), this.layerMask = (0, tU.j)(this, zU, 268435455), this.fovMode = ((0, tU.j)(this, MU), (0, tU.j)(this, DU, UU.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, tU.j)(this, LU), (0, tU.j)(this, NU, UU.RIG_MODE_NONE)), this.interaxialDistance = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, void 0)), this.isStereoscopicSideBySide = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, void 0)), this.ignoreCameraMaxZ = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, !1)), this.customRenderTargets = ((0, tU.j)(this, pR), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new PU.b, this.onProjectionMatrixChangedObservable = new PU.b, this.onAfterCheckInputsObservable = new PU.b, this.onRestoreStateObservable = new PU.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new TU.c, this._postProcesses = new Array, this._activeMeshes = new EU.h(256), this._globalPosition = TU.n.Zero(), this._computedViewMatrix = TU.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = TU.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = TU.d.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.aZ().defaultCameraLayerMask, this.aZ().addCamera(this), qU && !this.aZ().activeCamera && (this.aZ().activeCamera = this), this.position = gU, this.renderPassId = this.aZ().WC().createRenderPassId(`Camera ${RU}`)
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
          return "WQ"
        }
        toString(UU) {
          let RU = "Name: " + this.name;
          if (RU += ", type: " + this.getClassName(), this.animations)
            for (let gU = 0; gU < this.animations.length; gU++) RU += ", animation[0]: " + this.animations[gU].toString(UU);
          return RU
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
            for (const RU of this._postProcesses)
              if (RU && !RU.isReady()) return !1;
          return super.isReady(UU)
        }
        _initCache() {
          super._initCache(), this._cache.position = new TU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new TU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(UU) {
          UU || super._updateCache(), this._cache.position.PgU(this.position), this._cache.upVector.PgU(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const RU = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let gU = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === RU;
          if (!gU) return !1;
          const tU = this.WC();
          return this.mode === UU.PERSPECTIVE_CAMERA ? gU = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === tU.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (gU = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === tU.getRenderWidth() && this._cache.renderHeight === tU.getRenderHeight(), this.oblique && (gU = gU && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), gU
        }
        attachControl(UU, RU) {}
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
          for (let RU = 0, gU = this._rigCameras.length; RU < gU; RU++) {
            const UU = this._rigCameras[RU],
              gU = UU._rigPostProcess;
            if (gU) {
              "pass" === gU.getEffectName() && (UU.isIntermediate = 0 === this._postProcesses.length), UU._postProcesses = this._postProcesses.slice(0).concat(gU), gU.markTextureDirty()
            } else UU._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !UU.isReusable() && this._postProcesses.indexOf(UU) > -1 ? (KU.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == RU || RU < 0 ? this._postProcesses.push(UU) : null === this._postProcesses[RU] ? this._postProcesses[RU] = UU : this._postProcesses.splice(RU, 0, UU), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.cRU(), this._postProcesses.indexOf(UU))
        }
        detachPostProcess(UU) {
          const RU = this._postProcesses.indexOf(UU); - 1 !== RU && (this._postProcesses[RU] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.cRU(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return TU.c.Identity()
        }
        getViewMatrix(UU) {
          return !UU && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.aZ().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(UU) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== UU && (this._projectionMatrix = UU)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(RU) {
          if (this._doNotComputeProjectionMatrix || !RU && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const gU = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = gU, this._refreshFrustumPlanes = !0;
          const tU = this.WC(),
            pU = this.aZ(),
            EU = tU.VgU;
          if (this.mode === UU.PERSPECTIVE_CAMERA) {
            let RU;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = tU.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), RU = pU.useRightHandedSystem ? TU.c.PerspectiveFovRHToRef : TU.c.PerspectiveFovLHToRef, RU(this.fov, tU.getAspectRatio(this), EU ? gU : this.minZ, EU ? this.minZ : gU, this._projectionMatrix, this.fovMode === UU.FOVMODE_VERTICAL_FIXED, tU.isNDCHalfZRange, this.projectionPlaneTilt, EU)
          } else {
            const UU = tU.getRenderWidth() / 2,
              RU = tU.getRenderHeight() / 2;
            pU.useRightHandedSystem ? this.oblique ? TU.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -RU, this.orthoTop ?? RU, EU ? gU : this.minZ, EU ? this.minZ : gU, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, tU.isNDCHalfZRange) : TU.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -RU, this.orthoTop ?? RU, EU ? gU : this.minZ, EU ? this.minZ : gU, this._projectionMatrix, tU.isNDCHalfZRange) : this.oblique ? TU.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -RU, this.orthoTop ?? RU, EU ? gU : this.minZ, EU ? this.minZ : gU, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, tU.isNDCHalfZRange) : TU.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -UU, this.orthoRight ?? UU, this.orthoBottom ?? -RU, this.orthoTop ?? RU, EU ? gU : this.minZ, EU ? this.minZ : gU, this._projectionMatrix, tU.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = tU.getRenderWidth(), this._cache.renderHeight = tU.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(UU) {
          return (this.radius || (this.target ? TU.n.Distance(this.position, this.target) : this.position.length())) + UU
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? uU.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = uU.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), RU && this.rigCameras.length > 0) {
            let RU = !1;
            for (const gU of this.rigCameras) gU._updateFrustumPlanes(), RU = RU || UU.isInFrustum(gU._frustumPlanes);
            return RU
          }
          return UU.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(UU) {
          return this._updateFrustumPlanes(), UU.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, GU.n)("Ray")
        }
        getForwardRayToRef(UU) {
          throw (0, GU.n)("Ray")
        }
        dispose(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.aZ().stopAnimation(this), this.aZ().removeCamera(this); this._rigCameras.length > 0;) {
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
              const RU = this._postProcesses[UU];
              RU && RU.dispose(this)
            }
          }
          let tU = this.customRenderTargets.length;
          for (; --tU >= 0;) this.customRenderTargets[tU].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.aZ().WC().releaseRenderPassId(this.renderPassId), super.dispose(RU, gU)
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
        setCameraRigMode(RU, gU) {
          if (this.cameraRigMode !== RU) {
            for (; this._rigCameras.length > 0;) {
              const UU = this._rigCameras.pop();
              UU && UU.dispose()
            }
            if (this.cameraRigMode = RU, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = gU.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== UU.RIG_MODE_NONE) {
              const UU = this.createRigCamera(this.name + "_L", 0);
              UU && (UU._isLeftCamera = !0);
              const RU = this.createRigCamera(this.name + "_R", 1);
              RU && (RU._isRightCamera = !0), UU && RU && (this._rigCameras.push(UU), this._rigCameras.push(RU))
            }
            this._setRigMode(gU), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(UU) {}
        _getVRProjectionMatrix() {
          return TU.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.WC().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(UU, RU) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[UU] = RU, "interaxialDistance" === UU && (this._cameraRigParams.stereoHalfAngle = RU / .0637 * (Math.PI / 180))
        }
        createRigCamera(UU, RU) {
          return null
        }
        _updateRigCameras() {
          for (let UU = 0; UU < this._rigCameras.length; UU++) this._rigCameras[UU].minZ = this.minZ, this._rigCameras[UU].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[UU].fov = this.fov, this._rigCameras[UU].upVector.PgU(this.upVector);
          this.cameraRigMode === UU.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const UU = hU.b.Serialize(this);
          return UU.uniqueId = this.uniqueId, UU.type = this.getClassName(), this.parent && this.parent._serializeAsParent(UU), this.inputs && this.inputs.serialize(UU), hU.b.AppendSerializedAnimations(this, UU), UU.hu = this.serializeAnimationRanges(), UU.isEnabled = this.isEnabled(), UU
        }
        clone(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const tU = hU.b.Clone(UU.GetConstructorFromName(this.getClassName(), RU, this.aZ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return tU.name = RU, tU.parent = gU, this.onClonedObservable.notifyObservers(tU), tU
        }
        pM(UU) {
          const RU = TU.n.Zero();
          return this.getDirectionToRef(UU, RU), RU
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(UU, RU) {
          TU.n.TransformNormalToRef(UU, this.getWorldMatrix(), RU)
        }
        static GetConstructorFromName(RU, gU, tU) {
          let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const PU = qU.b.Construct(RU, gU, tU, {
            interaxial_distance: pU,
            isStereoscopicSideBySide: EU
          });
          return PU || (() => UU._CreateDefaultParsedCamera(gU, tU))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let UU = this.aZ().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (UU *= -1), UU
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(BU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, pU.I)("position")], gU = [(0, pU.I)("upVector")], cU = [(0, pU.K)()], QU = [(0, pU.K)()], eU = [(0, pU.K)()], WU = [(0, pU.K)()], fU = [(0, pU.K)()], xU = [(0, pU.K)()], mU = [(0, pU.K)()], IU = [(0, pU.K)()], JU = [(0, pU.K)()], wU = [(0, pU.K)()], nU = [(0, pU.K)()], bU = [(0, pU.K)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], YU = [(0, pU.K)()], (0, tU.i)(UU, null, cU, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoLeft" in UU,
            get: UU => UU.orthoLeft
          },
          metadata: EU
        }, null, VU), (0, tU.i)(UU, null, QU, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoRight" in UU,
            get: UU => UU.orthoRight
          },
          metadata: EU
        }, null, VU), (0, tU.i)(UU, null, eU, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoBottom" in UU,
            get: UU => UU.orthoBottom
          },
          metadata: EU
        }, null, VU), (0, tU.i)(UU, null, WU, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: UU => "orthoTop" in UU,
            get: UU => UU.orthoTop
          },
          metadata: EU
        }, null, VU), (0, tU.i)(UU, null, JU, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: UU => "inertia" in UU,
            get: UU => UU.inertia
          },
          metadata: EU
        }, null, VU), (0, tU.i)(UU, null, wU, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: UU => "mode" in UU,
            get: UU => UU.mode
          },
          metadata: EU
        }, null, VU), (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: UU => "_position" in UU,
            get: UU => UU._position,
            set: (UU, RU) => {
              UU._position = RU
            }
          },
          metadata: EU
        }, rU, XU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: UU => "_upVector" in UU,
            get: UU => UU._upVector,
            set: (UU, RU) => {
              UU._upVector = RU
            }
          },
          metadata: EU
        }, vU, dU), (0, tU.i)(null, null, fU, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: UU => "fov" in UU,
            get: UU => UU.fov,
            set: (UU, RU) => {
              UU.fov = RU
            }
          },
          metadata: EU
        }, HU, SU), (0, tU.i)(null, null, xU, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: UU => "projectionPlaneTilt" in UU,
            get: UU => UU.projectionPlaneTilt,
            set: (UU, RU) => {
              UU.projectionPlaneTilt = RU
            }
          },
          metadata: EU
        }, sU, yU), (0, tU.i)(null, null, mU, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "minZ" in UU,
            get: UU => UU.minZ,
            set: (UU, RU) => {
              UU.minZ = RU
            }
          },
          metadata: EU
        }, kU, FU), (0, tU.i)(null, null, IU, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "maxZ" in UU,
            get: UU => UU.maxZ,
            set: (UU, RU) => {
              UU.maxZ = RU
            }
          },
          metadata: EU
        }, iU, AU), (0, tU.i)(null, null, nU, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "layerMask" in UU,
            get: UU => UU.layerMask,
            set: (UU, RU) => {
              UU.layerMask = RU
            }
          },
          metadata: EU
        }, zU, MU), (0, tU.i)(null, null, bU, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "fovMode" in UU,
            get: UU => UU.fovMode,
            set: (UU, RU) => {
              UU.fovMode = RU
            }
          },
          metadata: EU
        }, DU, LU), (0, tU.i)(null, null, oU, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "cameraRigMode" in UU,
            get: UU => UU.cameraRigMode,
            set: (UU, RU) => {
              UU.cameraRigMode = RU
            }
          },
          metadata: EU
        }, NU, lU), (0, tU.i)(null, null, ZU, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "interaxialDistance" in UU,
            get: UU => UU.interaxialDistance,
            set: (UU, RU) => {
              UU.interaxialDistance = RU
            }
          },
          metadata: EU
        }, OU, UR), (0, tU.i)(null, null, aU, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: UU => "isStereoscopicSideBySide" in UU,
            get: UU => UU.isStereoscopicSideBySide,
            set: (UU, RU) => {
              UU.isStereoscopicSideBySide = RU
            }
          },
          metadata: EU
        }, RR, gR), (0, tU.i)(null, null, YU, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "ignoreCameraMaxZ" in UU,
            get: UU => UU.ignoreCameraMaxZ,
            set: (UU, RU) => {
              UU.ignoreCameraMaxZ = RU
            }
          },
          metadata: EU
        }, tR, pR), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU._CreateDefaultParsedCamera = (UU, RU) => {
        throw (0, GU.n)("UniversalCamera")
      }, UU.PERSPECTIVE_CAMERA = 0, UU.ORTHOGRAPHIC_CAMERA = 1, UU.FOVMODE_VERTICAL_FIXED = 0, UU.FOVMODE_HORIZONTAL_FIXED = 1, UU.RIG_MODE_NONE = 0, UU.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, UU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, UU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, UU.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, UU.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, UU.RIG_MODE_VR = 20, UU.RIG_MODE_CUSTOM = 22, UU.ForceAttachControlToAlwaysPreventDefault = !1, UU
    })();

    function eU(UU, RU) {
      const gU = UU.type,
        tU = QU.GetConstructorFromName(gU, UU.name, RU, UU.interaxial_distance, UU.isStereoscopicSideBySide),
        pU = hU.b.Parse(tU, UU, RU);
      if (void 0 !== UU.parentId && (pU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (pU._waitingParentInstanceIndex = UU.parentInstanceIndex), pU.inputs && (pU.inputs.parse(UU), pU._setupInputs()), UU.upVector && (pU.upVector = TU.n.FromArray(UU.upVector)), pU.setPosition && (pU.position.b_(0, 0, 0), pU.setPosition(TU.n.FromArray(UU.position))), UU.target && pU.setTarget && pU.setTarget(TU.n.FromArray(UU.target)), UU.cameraRigMode) {
        const RU = UU.interaxial_distance ? {
          interaxialDistance: UU.interaxial_distance
        } : {};
        pU.setCameraRigMode(UU.cameraRigMode, RU)
      }
      if (UU.animations) {
        for (let RU = 0; RU < UU.animations.length; RU++) {
          const gU = UU.animations[RU],
            tU = (0, cU.e)("BABYLON.Animation");
          tU && pU.animations.push(tU.Parse(gU))
        }
        qU.b.ParseAnimationRanges(pU, UU, RU)
      }
      return UU.autoAnimate && RU.beginAnimation(pU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), void 0 !== UU.isEnabled && pU.GJ(UU.isEnabled), pU
    }
    let WU = !1;

    function fU() {
      WU || (WU = !0, QU.Parse = eU)
    }
  },
  39615: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU) {
        this._cameraPosition = RU, this._behavior = gU, this.activeInput = !1, this.speed = 1, this.Zk = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new tU.n, this.rotationAccumulatedPixels = new tU.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = tU.n.Zero(), this.rotationDeltaCurrentFrame = tU.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new tU.n, this.referenceFrameRate = 60, this._rotationVelocity = new tU.n, this._prevFrameTimeMs = 0, this._scene = UU
      }
      computeCurrentFrameDeltas() {
        const UU = this._scene.WC().getDeltaTime(),
          RU = this._getEffectiveDeltaMs(UU);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Y5(0), this.rotationDeltaCurrentFrame.Y5(0), this.zoomDeltaCurrentFrame = 0, void(UU > 0 && (this._prevFrameTimeMs = UU));
        this.panDeltaCurrentFrame.Y5(0), this.rotationDeltaCurrentFrame.Y5(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.b_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * RU, this.panDeltaCurrentFrame), this._rotationVelocity.b_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.b_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * RU, this._rotationVelocity.y * this.speed * this.rotationYSpeed * RU, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.Zk * this._zoomSpeedMultiplier) * RU, UU > 0 && (this._prevFrameTimeMs = UU), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Y5(0), this.rotationAccumulatedPixels.Y5(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Y5(0), this.rotationAccumulatedPixels.Y5(0)
      }
      resetPanVelocity() {
        this._panVelocity.Y5(0), this.panAccumulatedPixels.Y5(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(UU) {
        const RU = this._scene.WC().getDeltaTime(),
          gU = this._getEffectiveDeltaMs(RU),
          tU = 1e3 / this.referenceFrameRate;
        return Math.pow(UU, gU / tU)
      }
      getFrameIndependentInputScale(UU) {
        const RU = 1 - UU;
        if (RU <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(UU)) / RU
      }
      _getEffectiveDeltaMs(UU) {
        return UU > 0 ? UU : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(UU, RU, gU) {
        let tU = UU;
        const pU = this._scene.WC().getDeltaTime(),
          EU = this._getEffectiveDeltaMs(pU);
        if (0 === EU) return tU;
        const PU = this.getFrameIndependentDecay(gU);
        if (tU *= PU, 0 !== RU || this.activeInput) {
          const UU = 1 - gU;
          tU += RU / EU * (UU > 0 ? (1 - PU) / UU : 1)
        } else Math.abs(tU) < 1e-6 && (tU = 0);
        return tU
      }
    }
  },
  39624: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU) {
        this.inputMap = [], this.handlers = UU, this._createDefaultEntries = RU, this.resetInputMap()
      }
      resolveInteraction(UU, RU) {
        for (const gU of this.inputMap)
          if (gU.source === UU && this._entryMatches(gU, RU)) return gU;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(UU, RU, gU) {
        const tU = this.inputMap;
        for (let pU = 0; pU < tU.length; pU++) {
          const EU = tU[pU];
          if (EU.source === UU && EU.interaction === RU && this._entryConditionsMatch(EU, gU)) return EU
        }
      }
      getEntries(UU, RU, gU) {
        const tU = [],
          pU = this.inputMap;
        for (let EU = 0; EU < pU.length; EU++) {
          const PU = pU[EU];
          PU.source === UU && PU.interaction === RU && this._entryConditionsMatch(PU, gU) && tU.push(PU)
        }
        return tU
      }
      addEntry(UU) {
        const RU = this._entrySpecificity(UU);
        let gU = this.inputMap.length;
        for (let tU = 0; tU < this.inputMap.length; tU++)
          if (this._entrySpecificity(this.inputMap[tU]) < RU) {
            gU = tU;
            break
          } this.inputMap.splice(gU, 0, UU)
      }
      setInteraction(UU, RU, gU) {
        const tU = this.resolveInteraction(UU, RU);
        return tU && this._entryCoversAllConditionsOf(tU, RU) ? (tU.interaction = gU, !0) : (this.addEntry({
          source: UU,
          ...RU ?? {},
          interaction: gU
        }), !0)
      }
      _entryCoversAllConditionsOf(UU, RU) {
        if (!RU) return !0;
        const gU = UU;
        for (const tU of Object.keys(RU)) {
          const UU = RU[tU];
          if (void 0 !== UU)
            if ("modifiers" === tU) {
              const RU = gU.modifiers ?? {};
              for (const gU of Object.keys(UU))
                if (void 0 !== UU[gU] && void 0 === RU[gU]) return !1
            } else if (void 0 === gU[tU]) return !1
        }
        return !0
      }
      setInteractions(UU, RU, gU) {
        let tU = 0;
        const pU = this.inputMap;
        for (let EU = 0; EU < pU.length; EU++) {
          const PU = pU[EU];
          PU.source === UU && this._entryMatches(PU, RU) && (PU.interaction = gU, tU++)
        }
        return tU
      }
      _entryMatches(UU, RU) {
        switch (UU.source) {
          case "pointer":
            return (void 0 === UU.button || UU.button === RU?.button) && this._matchModifiers(UU.modifiers, RU?.modifiers);
          case "wheel":
            return this._matchModifiers(UU.modifiers, RU?.modifiers);
          case "touch":
            return void 0 === UU.touchCount || UU.touchCount === RU?.touchCount;
          case "keyboard":
            return (void 0 === UU.key || (Array.isArray(UU.key) ? -1 !== UU.key.indexOf(RU?.key ?? -1) : UU.key === RU?.key)) && this._matchModifiers(UU.modifiers, RU?.modifiers)
        }
      }
      _entryConditionsMatch(UU, RU) {
        if (!RU) return !0;
        switch (UU.source) {
          case "pointer":
            return (!("button" in RU) || UU.button === RU.button) && (!("modifiers" in RU) || this._entryModifiersMatch(UU.modifiers, RU.modifiers));
          case "wheel":
            return !("modifiers" in RU) || this._entryModifiersMatch(UU.modifiers, RU.modifiers);
          case "touch":
            return !("touchCount" in RU) || UU.touchCount === RU.touchCount;
          case "keyboard":
            if ("key" in RU) {
              if (void 0 === UU.key) return void 0 === RU.key;
              if (void 0 === RU.key || (Array.isArray(UU.key) ? -1 === UU.key.indexOf(RU.key) : UU.key !== RU.key)) return !1
            }
            return !("modifiers" in RU) || this._entryModifiersMatch(UU.modifiers, RU.modifiers)
        }
      }
      _entrySpecificity(UU) {
        let RU = 0;
        return "button" in UU && void 0 !== UU.button && RU++, "key" in UU && void 0 !== UU.key && RU++, "touchCount" in UU && void 0 !== UU.touchCount && RU++, "modifiers" in UU && UU.modifiers && RU++, RU
      }
      _matchModifiers(UU, RU) {
        return !UU || (void 0 === UU.ctrl || UU.ctrl === (RU?.ctrl ?? !1)) && ((void 0 === UU.shift || UU.shift === (RU?.shift ?? !1)) && (void 0 === UU.alt || UU.alt === (RU?.alt ?? !1)))
      }
      _entryModifiersMatch(UU, RU) {
        if (!RU) return !UU;
        return void 0 !== RU.ctrl || void 0 !== RU.shift || void 0 !== RU.alt ? (void 0 === RU.ctrl || UU?.ctrl === RU.ctrl) && ((void 0 === RU.shift || UU?.shift === RU.shift) && (void 0 === RU.alt || UU?.alt === RU.alt)) : !UU || void 0 === UU.ctrl && void 0 === UU.shift && void 0 === UU.alt
      }
    }
  },
  39597: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => eU,
      i: () => hU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39603),
      PU = gU(36600),
      TU = gU(36602),
      qU = gU(39613),
      KU = gU(39610),
      cU = gU(39615),
      GU = gU(39624);
    class jU extends cU.d {
      constructor(UU, RU, gU) {
        super(UU, RU, gU), this.input = new GU.d({
          translate: (UU, RU, gU) => {
            this.panAccumulatedPixels.x += UU, this.panAccumulatedPixels.y += RU, this.panAccumulatedPixels.z += gU
          },
          rotate: (UU, RU) => {
            this.rotationAccumulatedPixels.x += UU, this.rotationAccumulatedPixels.y += RU
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
    const uU = PU.c.Zero(),
      CU = PU.d.Identity();
    let hU = (() => {
        var UU;
        let RU, gU, KU, cU, GU = EU.d,
          hU = [],
          QU = [],
          eU = [],
          WU = [],
          fU = [],
          xU = [],
          mU = [],
          IU = [];
        return UU = class extends GU {
          get inertia() {
            return this._targetInertia
          }
          set inertia(UU) {
            this._targetInertia = UU, this.movement && (this.movement.panInertia = UU, this.movement.rotationInertia = UU)
          }
          constructor(UU, RU, gU) {
            super(UU, RU, gU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new PU.n(0, 0, 0), this.cameraRotation = new PU.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, tU.j)(this, hU, !1), this.rotation = ((0, tU.j)(this, QU), (0, tU.j)(this, eU, void 0)), this.rotationQuaternion = (0, tU.j)(this, WU), this.speed = (0, tU.j)(this, fU, 2), this.noRotationConstraint = ((0, tU.j)(this, xU), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = TU.e, this._rotationEpsilon = TU.e, this.lockedTarget = (0, tU.j)(this, mU, null), this._currentTarget = ((0, tU.j)(this, IU), PU.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = PU.c.Zero(), this._cameraTransformMatrix = PU.c.Zero(), this._cameraRotationMatrix = PU.c.Zero(), this._transformedReferencePoint = PU.n.Zero(), this._deferredPositionUpdate = new PU.n, this._deferredRotationQuaternionUpdate = new PU.d, this._deferredRotationUpdate = new PU.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = PU.n.Forward(this.aZ().useRightHandedSystem), this.rotation = new PU.n(0, this.aZ().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new jU(this.aZ(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(UU) {
            this.getWorldMatrix();
            const RU = PU.h.xC[0],
              gU = PU.h.xC[1];
            return gU.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(gU, RU), RU.scaleInPlace(UU), this.globalPosition.add(RU)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.b_(0, 0, 0), this.cameraRotation.b_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new PU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new PU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new PU.d(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(UU) {
            UU || super._updateCache();
            const RU = this._getLockedTargetPosition();
            RU ? this._cache.lockedTarget ? this._cache.lockedTarget.PgU(RU) : this._cache.lockedTarget = RU.clone() : this._cache.lockedTarget = null, this._cache.rotation.PgU(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.PgU(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const UU = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(UU) : !UU) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const UU = this.WC();
            return this.speed * Math.sqrt(UU.getDeltaTime() / (100 * UU.getFps()))
          }
          setTarget(UU) {
            this.upVector.normalize(), this._initialFocalDistance = UU.subtract(this.position).length(), this.position.z === UU.z && (this.position.z += TU.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.aZ().useRightHandedSystem ? PU.c.LookAtRHToRef(this.position, UU, PU.n.UpReadOnly, uU) : PU.c.LookAtLHToRef(this.position, UU, PU.n.UpReadOnly, uU), uU.invert();
            const RU = this.rotationQuaternion || CU;
            PU.d.FromRotationMatrixToRef(uU, RU), RU.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(PU.h.Matrix[0]), PU.n.TransformNormalToRef(this.cameraDirection, PU.h.Matrix[0], PU.h.xC[0]), this._deferredPositionUpdate.addInPlace(PU.h.xC[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.PgU(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.PgU(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const UU = this.movement,
              RU = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            UU.panAccumulatedPixels.addInPlace(this.cameraDirection), UU.rotationAccumulatedPixels.x += this.cameraRotation.x, UU.rotationAccumulatedPixels.y += this.cameraRotation.y, UU.computeCurrentFrameDeltas(), this.cameraDirection.PgU(UU.panDeltaCurrentFrame), this.cameraRotation.set(UU.rotationDeltaCurrentFrame.x, UU.rotationDeltaCurrentFrame.y);
            const gU = this.speed * this._panningEpsilon;
            !RU && Math.abs(this.cameraDirection.x) < gU && Math.abs(this.cameraDirection.y) < gU && Math.abs(this.cameraDirection.z) < gU && (this.cameraDirection.Y5(0), UU.resetPanVelocity());
            const tU = this.invertRotation ? -this.inverseRotationSpeed : 1,
              pU = this._decideIfNeedsToMove(),
              EU = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.PgU(this.rotation), this._deferredPositionUpdate.PgU(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.PgU(this.rotationQuaternion), pU && this._updatePosition(), EU) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * tU, this._deferredRotationUpdate.y += this.cameraRotation.y * tU, !this.noRotationConstraint) {
                const UU = 1.570796;
                this._deferredRotationUpdate.x > UU && (this._deferredRotationUpdate.x = UU), this._deferredRotationUpdate.x < -UU && (this._deferredRotationUpdate.x = -UU)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.PgU(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (PU.d.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.PgU(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Y5(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : PU.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return PU.n.TransformNormalToRef(PU.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), PU.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? qU.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (PU.d.FromEulerVectorToRef(this.rotation, CU), qU.c.Y.rotateByQuaternionToRef(CU, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(UU, RU, gU) {
            if (this.aZ().useRightHandedSystem ? PU.c.LookAtRHToRef(UU, RU, gU, this._viewMatrix) : PU.c.LookAtLHToRef(UU, RU, gU, this._viewMatrix), this.parent) {
              const UU = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(UU, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(RU, gU) {
            if (this.cameraRigMode !== EU.d.RIG_MODE_NONE) {
              const gU = new UU(RU, this.position.clone(), this.aZ());
              return gU.isRigCamera = !0, gU.rigParent = this, this.cameraRigMode === EU.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new PU.d), gU._cameraRigParams = {}, gU.rotationQuaternion = new PU.d), gU.mode = this.mode, gU.orthoLeft = this.orthoLeft, gU.orthoRight = this.orthoRight, gU.orthoTop = this.orthoTop, gU.orthoBottom = this.orthoBottom, gU
            }
            return null
          }
          _updateRigCameras() {
            const UU = this._rigCameras[0],
              RU = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case EU.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case EU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case EU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case EU.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case EU.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const gU = this.cameraRigMode === EU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  tU = this.cameraRigMode === EU.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * gU, UU), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * tU, RU);
                break
              }
              case EU.d.RIG_MODE_VR:
                UU.rotationQuaternion && RU.rotationQuaternion && this.rotationQuaternion ? (UU.rotationQuaternion.PgU(this.rotationQuaternion), RU.rotationQuaternion.PgU(this.rotationQuaternion)) : (UU.rotation.PgU(this.rotation), RU.rotation.PgU(this.rotation)), UU.position.PgU(this.position), RU.position.PgU(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(RU, gU) {
            this.getTarget().subtractToRef(this.position, UU._TargetFocalPoint), UU._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const tU = UU._TargetFocalPoint.addInPlace(this.position);
            PU.c.TranslationToRef(-tU.x, -tU.y, -tU.z, UU._TargetTransformMatrix), UU._TargetTransformMatrix.multiplyToRef(PU.c.RotationAxis(gU.upVector, RU), UU._RigCamTransformMatrix), PU.c.TranslationToRef(tU.x, tU.y, tU.z, UU._TargetTransformMatrix), UU._RigCamTransformMatrix.multiplyToRef(UU._TargetTransformMatrix, UU._RigCamTransformMatrix), PU.n.TransformCoordinatesToRef(this.position, UU._RigCamTransformMatrix, gU.position), gU.setTarget(tU)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(GU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.I)()], KU = [(0, pU.K)()], cU = [(0, pU.w)("lockedTargetId")], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: UU => "updateUpVectorFromRotation" in UU,
              get: UU => UU.updateUpVectorFromRotation,
              set: (UU, RU) => {
                UU.updateUpVectorFromRotation = RU
              }
            },
            metadata: EU
          }, hU, QU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: UU => "rotation" in UU,
              get: UU => UU.rotation,
              set: (UU, RU) => {
                UU.rotation = RU
              }
            },
            metadata: EU
          }, eU, WU), (0, tU.i)(null, null, KU, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: UU => "speed" in UU,
              get: UU => UU.speed,
              set: (UU, RU) => {
                UU.speed = RU
              }
            },
            metadata: EU
          }, fU, xU), (0, tU.i)(null, null, cU, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: UU => "lockedTarget" in UU,
              get: UU => UU.lockedTarget,
              set: (UU, RU) => {
                UU.lockedTarget = RU
              }
            },
            metadata: EU
          }, mU, IU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU._RigCamTransformMatrix = new PU.c, UU._TargetTransformMatrix = new PU.c, UU._TargetFocalPoint = new PU.n, UU
      })(),
      QU = !1;

    function eU() {
      QU || (QU = !0, KU.b.AddNodeConstructor("TargetCamera", ((UU, RU) => () => new hU(UU, PU.n.Zero(), RU))))
    }
  },
  39335: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(39272);
    let pU = !1;

    function EU() {
      pU || (pU = !0, tU.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, tU.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, tU.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, tU.d.prototype.getAspectRatio = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = UU.viewport;
        return this.getRenderWidth(RU) * gU.width / (this.getRenderHeight(RU) * gU.height)
      }, tU.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, tU.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39416: (UU, RU, gU) => {
    var tU = gU(39272),
      pU = gU(39424);
    let EU = !1;
    EU || (EU = !0, (0, pU.t)(), tU.d.prototype._loadFileAsync = async function(UU, RU, gU) {
      return await new Promise(((tU, pU) => {
        this._loadFile(UU, (UU => {
          tU(UU)
        }), void 0, RU, gU, ((UU, RU) => {
          pU(RU)
        }))
      }))
    })
  },
  39409: (UU, RU, gU) => {
    (0, gU(39344).b)()
  },
  39344: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(39272);
    let pU = !1;

    function EU() {
      pU || (pU = !0, tU.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, tU.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, tU.d.prototype.createRenderPassId = function(UU) {
        const RU = ++tU.d._RenderPassIdCounter;
        return this._renderPassNames[RU] = UU ?? "NONAME", RU
      }, tU.d.prototype.releaseRenderPassId = function(UU) {
        this._renderPassNames[UU] = void 0;
        for (let RU = 0; RU < this.scenes.length; ++RU) {
          const gU = this.scenes[RU];
          for (let RU = 0; RU < gU.meshes.length; ++RU) {
            const tU = gU.meshes[RU];
            if (tU._releaseRenderPassId(UU), tU.ZI)
              for (let RU = 0; RU < tU.ZI.length; ++RU) {
                tU.ZI[RU]._removeDrawWrapper(UU)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(UU)
      })
    }
  },
  39449: (UU, RU, gU) => {
    var tU = gU(39452),
      pU = gU(39272);
    let EU = !1;
    EU || (EU = !0, pU.d.GetCompatibleTextureLoader = tU.d)
  },
  39350: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(39215);
    let pU = !1;

    function EU() {
      pU || (pU = !0, tU.ThinEngine.prototype.setAlphaMode = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[gU] === UU) {
          if (!RU) {
            const RU = 0 === UU;
            this.depthCullingState.depthMask !== RU && (this.depthCullingState.depthMask = RU)
          }
          return
        }
        const tU = 0 === UU;
        this._alphaState.setAlphaBlend(!tU, gU), this._alphaState.setAlphaMode(UU, gU), RU || (this.depthCullingState.depthMask = tU), this._alphaMode[gU] = UU
      })
    }
  },
  39356: (UU, RU, gU) => {
    var tU = gU(39203),
      pU = gU(38236),
      EU = gU(39215),
      PU = gU(39358),
      TU = gU(39324);
    class qU extends PU.b {
      setDepthStencilTexture(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(UU, RU), !UU) return;
        const gU = this._engine,
          tU = this._context,
          pU = UU._hardwareTexture;
        if (pU && UU._autoMSAAManagement && this._MSAAFramebuffer) {
          const RU = gU._currentFramebuffer;
          gU._bindUnboundFramebuffer(this._MSAAFramebuffer), tU.framebufferRenderbuffer(tU.FRAMEBUFFER, (0, TU.b)(UU.format) ? tU.DEPTH_STENCIL_ATTACHMENT : tU.DEPTH_ATTACHMENT, tU.RENDERBUFFER, pU.getMSAARenderBuffer()), gU._bindUnboundFramebuffer(RU)
        }
      }
      constructor(UU, RU, gU, tU, pU) {
        super(UU, RU, gU, tU), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = pU
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
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const UU = this._engine,
            RU = UU._currentFramebuffer,
            gU = this._context;
          UU._bindUnboundFramebuffer(this._framebuffer), gU.framebufferRenderbuffer(gU.FRAMEBUFFER, gU.DEPTH_STENCIL_ATTACHMENT, gU.RENDERBUFFER, null), gU.framebufferRenderbuffer(gU.FRAMEBUFFER, gU.DEPTH_ATTACHMENT, gU.RENDERBUFFER, null), gU.framebufferRenderbuffer(gU.FRAMEBUFFER, gU.STENCIL_ATTACHMENT, gU.RENDERBUFFER, null), UU._bindUnboundFramebuffer(RU), gU.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(UU, RU, gU, tU, pU, EU)
      }
      shareDepth(UU) {
        super.shareDepth(UU);
        const RU = this._context,
          gU = this._depthStencilBuffer,
          tU = UU._MSAAFramebuffer || UU._framebuffer,
          pU = this._engine;
        UU._depthStencilBuffer && UU._depthStencilBuffer !== gU && RU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = gU;
        const EU = UU._generateStencilBuffer ? RU.DEPTH_STENCIL_ATTACHMENT : RU.DEPTH_ATTACHMENT;
        pU._bindUnboundFramebuffer(tU), RU.framebufferRenderbuffer(RU.FRAMEBUFFER, EU, RU.RENDERBUFFER, gU), pU._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pU = UU._hardwareTexture;
        if (!pU) return;
        const EU = this._framebuffer,
          PU = this._engine,
          TU = PU._currentFramebuffer;
        let qU;
        if (PU._bindUnboundFramebuffer(EU), PU.MC > 1) {
          const EU = this._context;
          qU = EU["COLOR_ATTACHMENT" + RU], UU.is2DArray || UU.is3D ? (gU = gU ?? this.layerIndices?.[RU] ?? 0, EU.framebufferTextureLayer(EU.FRAMEBUFFER, qU, pU.underlyingResource, tU, gU)) : UU.isCube ? (gU = gU ?? this.faceIndices?.[RU] ?? 0, EU.framebufferTexture2D(EU.FRAMEBUFFER, qU, EU.TEXTURE_CUBE_MAP_POSITIVE_X + gU, pU.underlyingResource, tU)) : EU.framebufferTexture2D(EU.FRAMEBUFFER, qU, EU.TEXTURE_2D, pU.underlyingResource, tU)
        } else {
          const UU = this._context;
          qU = UU["COLOR_ATTACHMENT" + RU + "_WEBGL"];
          const EU = void 0 !== gU ? UU.TEXTURE_CUBE_MAP_POSITIVE_X + gU : UU.TEXTURE_2D;
          UU.framebufferTexture2D(UU.FRAMEBUFFER, qU, EU, pU.underlyingResource, tU)
        }
        if (UU._autoMSAAManagement && this._MSAAFramebuffer) {
          const UU = this._context;
          PU._bindUnboundFramebuffer(this._MSAAFramebuffer), UU.framebufferRenderbuffer(UU.FRAMEBUFFER, qU, UU.RENDERBUFFER, pU.getMSAARenderBuffer())
        }
        PU._bindUnboundFramebuffer(TU)
      }
      setTexture(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(UU, RU, gU), this._bindTextureRenderTarget(UU, RU)
      }
      setLayerAndFaceIndices(UU, RU) {
        if (super.setLayerAndFaceIndices(UU, RU), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const gU = this._attachments?.length ?? this.textures.length;
        for (let tU = 0; tU < gU; tU++) {
          const UU = this.textures[tU];
          UU && (UU.is2DArray || UU.is3D ? this._bindTextureRenderTarget(UU, tU, this.layerIndices[tU]) : UU.isCube ? this._bindTextureRenderTarget(UU, tU, this.faceIndices[tU]) : this._bindTextureRenderTarget(UU, tU))
        }
      }
      setLayerAndFaceIndex() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(UU, RU, gU), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const tU = this.textures[UU];
        tU.is2DArray || tU.is3D ? this._bindTextureRenderTarget(this.textures[UU], UU, this.layerIndices[UU]) : tU.isCube && this._bindTextureRenderTarget(this.textures[UU], UU, this.faceIndices[UU])
      }
      resolveMSAATextures() {
        const UU = this._engine,
          RU = UU._currentFramebuffer;
        UU._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), UU._bindUnboundFramebuffer(RU)
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const RU = this._context;
        UU || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (RU.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (RU.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (RU.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(UU)
      }
    }
    let KU = !1;
    KU || (KU = !0, EU.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(UU, RU, gU) {
      const tU = new qU(UU, RU, gU, this, this._gl);
      return this._renderTargetWrapperCache.push(tU), tU
    }, EU.ThinEngine.prototype.createRenderTargetTexture = function(UU, RU) {
      const gU = this._createHardwareRenderTargetWrapper(!1, !1, UU);
      let tU, pU, EU = !0,
        PU = !1,
        TU = !1,
        qU = 1;
      void 0 !== RU && "object" === typeof RU && (EU = RU.generateDepthBuffer ?? !0, PU = !!RU.generateStencilBuffer, TU = !!RU.noColorAttachment, tU = RU.colorAttachment, qU = RU.samples ?? 1, pU = RU.label);
      const KU = tU || (TU ? null : this._createInternalTexture(UU, RU, !0, 5)),
        cU = UU.width || UU,
        GU = UU.height || UU,
        jU = this._currentFramebuffer,
        uU = this._gl,
        CU = uU.createFramebuffer();
      if (this._bindUnboundFramebuffer(CU), gU._depthStencilBuffer = this._setupFramebufferDepthAttachments(PU, EU, cU, GU), !KU || KU.is2DArray || KU.is3D || uU.framebufferTexture2D(uU.FRAMEBUFFER, uU.COLOR_ATTACHMENT0, uU.TEXTURE_2D, KU._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(jU), gU.label = pU ?? "RenderTargetWrapper", gU._framebuffer = CU, gU._generateDepthBuffer = EU, gU._generateStencilBuffer = PU, gU.setTextures(KU), tU) {
        if (gU._samples = tU.samples, tU.samples > 1) {
          const UU = tU._hardwareTexture.getMSAARenderBuffer(0);
          gU._MSAAFramebuffer = uU.createFramebuffer(), this._bindUnboundFramebuffer(gU._MSAAFramebuffer), uU.framebufferRenderbuffer(uU.FRAMEBUFFER, uU.COLOR_ATTACHMENT0, uU.RENDERBUFFER, UU), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(gU, qU);
      return gU
    }, EU.ThinEngine.prototype._createDepthStencilTexture = function(UU, RU, gU) {
      const EU = this._gl,
        PU = UU.layers || 0,
        qU = UU.depth || 0;
      let KU = EU.TEXTURE_2D;
      0 !== PU ? KU = EU.TEXTURE_2D_ARRAY : 0 !== qU && (KU = EU.TEXTURE_3D);
      const cU = new tU.d(this, 12);
      if (cU.label = RU.label, !this._caps.depthTextureExtension) return pU.e.Error("Depth texture is not supported by your browser or hardware."), cU;
      const GU = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...RU
      };
      if (this._bindTextureDirectly(KU, cU, !0), this._setupDepthStencilTexture(cU, UU, 0 !== GU.comparisonFunction && GU.bilinearFiltering, GU.comparisonFunction, GU.samples), void 0 !== GU.depthTextureFormat) {
        if (15 !== GU.depthTextureFormat && 16 !== GU.depthTextureFormat && 17 !== GU.depthTextureFormat && 13 !== GU.depthTextureFormat && 14 !== GU.depthTextureFormat && 18 !== GU.depthTextureFormat) return pU.e.Error(`Depth texture ${GU.depthTextureFormat} format is not supported.`), cU;
        cU.format = GU.depthTextureFormat
      } else cU.format = GU.generateStencil ? 13 : 16;
      const jU = (0, TU.b)(cU.format),
        uU = this._getWebGLTextureTypeFromDepthTextureFormat(cU.format),
        CU = jU ? EU.DEPTH_STENCIL : EU.DEPTH_COMPONENT,
        hU = this._getInternalFormatFromDepthTextureFormat(cU.format, !0, jU);
      return cU.is2DArray ? EU.texImage3D(KU, 0, hU, cU.width, cU.height, PU, 0, CU, uU, null) : cU.is3D ? EU.texImage3D(KU, 0, hU, cU.width, cU.height, qU, 0, CU, uU, null) : EU.texImage2D(KU, 0, hU, cU.width, cU.height, 0, CU, uU, null), this._bindTextureDirectly(KU, null), this._internalTexturesCache.push(cU), gU._depthStencilBuffer && (EU.deleteRenderbuffer(gU._depthStencilBuffer), gU._depthStencilBuffer = null), this._bindUnboundFramebuffer(gU._MSAAFramebuffer ?? gU._framebuffer), gU._generateStencilBuffer = jU, gU._depthStencilTextureWithStencil = jU, gU._depthStencilBuffer = this._setupFramebufferDepthAttachments(gU._generateStencilBuffer, gU._generateDepthBuffer, gU.width, gU.height, gU.samples, cU.format), this._bindUnboundFramebuffer(null), cU
    }, EU.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(UU, RU) {
      if (this.MC < 2 || !UU) return 1;
      if (UU.samples === RU) return RU;
      const gU = this._gl;
      RU = Math.min(RU, this.getCaps().maxMSAASamples), UU._depthStencilBuffer && (gU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = null), UU._MSAAFramebuffer && (gU.deleteFramebuffer(UU._MSAAFramebuffer), UU._MSAAFramebuffer = null);
      const tU = UU.texture?._hardwareTexture;
      if (tU?.releaseMSAARenderBuffers(), UU.texture && RU > 1 && "function" === typeof gU.renderbufferStorageMultisample) {
        const pU = gU.createFramebuffer();
        if (!pU) throw new Error("Unable to create multi sampled framebuffer");
        UU._MSAAFramebuffer = pU, this._bindUnboundFramebuffer(UU._MSAAFramebuffer);
        const EU = this._createRenderBuffer(UU.texture.width, UU.texture.height, RU, -1, this._getRGBABufferInternalSizedFormat(UU.texture.type, UU.texture.format, UU.texture._useSRGBBuffer), gU.COLOR_ATTACHMENT0, !1);
        if (!EU) throw new Error("Unable to create multi sampled framebuffer");
        tU?.addMSAARenderBuffer(EU)
      }
      this._bindUnboundFramebuffer(UU._MSAAFramebuffer ?? UU._framebuffer), UU.texture && (UU.texture.samples = RU), UU._samples = RU;
      const pU = UU._depthStencilTexture ? UU._depthStencilTexture.format : void 0;
      return UU._depthStencilBuffer = this._setupFramebufferDepthAttachments(UU._generateStencilBuffer, UU._generateDepthBuffer, UU.width, UU.height, RU, pU), this._bindUnboundFramebuffer(null), RU
    }, EU.ThinEngine.prototype._setupDepthStencilTexture = function(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const EU = RU.width ?? RU,
        PU = RU.height ?? RU,
        TU = RU.layers || 0,
        qU = RU.depth || 0;
      UU.baseWidth = EU, UU.baseHeight = PU, UU.width = EU, UU.height = PU, UU.is2DArray = TU > 0, UU.depth = TU || qU, UU.isReady = !0, UU.samples = pU, UU.generateMipMaps = !1, UU.samplingMode = gU ? 2 : 1, UU.type = 0, UU._comparisonFunction = tU;
      const KU = this._gl,
        cU = this._getTextureTarget(UU),
        GU = this._getSamplingParameters(UU.samplingMode, !1);
      KU.texParameteri(cU, KU.TEXTURE_MAG_FILTER, GU.mag), KU.texParameteri(cU, KU.TEXTURE_MIN_FILTER, GU.min), KU.texParameteri(cU, KU.TEXTURE_WRAP_S, KU.CLAMP_TO_EDGE), KU.texParameteri(cU, KU.TEXTURE_WRAP_T, KU.CLAMP_TO_EDGE), this.MC > 1 && (0 === tU ? (KU.texParameteri(cU, KU.TEXTURE_COMPARE_FUNC, 515), KU.texParameteri(cU, KU.TEXTURE_COMPARE_MODE, KU.NONE)) : (KU.texParameteri(cU, KU.TEXTURE_COMPARE_FUNC, tU), KU.texParameteri(cU, KU.TEXTURE_COMPARE_MODE, KU.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39196: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU.c
    });
    var tU = gU(39199);
    (0, gU(39350).c)();
    var pU = gU(39215);
    let EU = !1;
    ! function() {
      if (EU) return;
      EU = !0;
      const UU = new WeakMap,
        RU = new WeakMap,
        gU = new WeakMap,
        tU = new WeakMap;
      pU.ThinEngine.prototype.getAlphaToCoverage = function() {
        return UU.get(this) ?? !1
      }, pU.ThinEngine.prototype.setAlphaToCoverage = function(gU) {
        (UU.get(this) !== gU || this._gl && RU.get(this) !== this._gl) && (UU.set(this, gU), this._gl && (gU ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), RU.set(this, this._gl)))
      }, Object.defineProperty(pU.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (tU.get(this) !== this._gl && (gU.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), tU.set(this, this._gl)), gU.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var PU = gU(39203),
      TU = gU(38236),
      qU = gU(39311);
    let KU = !1;
    ! function() {
      function UU(UU, RU, gU, tU) {
        let pU, EU = 1;
        1 === tU ? pU = new Float32Array(RU * gU * 4) : 2 === tU ? (pU = new Uint16Array(RU * gU * 4), EU = 15360) : pU = 7 === tU ? new Uint32Array(RU * gU * 4) : new Uint8Array(RU * gU * 4);
        for (let PU = 0; PU < RU; PU++)
          for (let tU = 0; tU < gU; tU++) {
            const gU = 3 * (tU * RU + PU),
              TU = 4 * (tU * RU + PU);
            pU[TU + 0] = UU[gU + 0], pU[TU + 1] = UU[gU + 1], pU[TU + 2] = UU[gU + 2], pU[TU + 3] = EU
          }
        return pU
      }

      function RU(UU) {
        return function(RU, gU, tU, pU, EU, TU, qU, KU) {
          let cU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            GU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const jU = UU ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            uU = UU ? 10 : 11,
            CU = new PU.d(this, uU);
          CU.baseWidth = gU, CU.baseHeight = tU, CU.baseDepth = pU, CU.width = gU, CU.height = tU, CU.depth = pU, CU.format = EU, CU.type = GU, CU.generateMipMaps = TU, CU.samplingMode = KU, UU ? CU.is3D = !0 : CU.is2DArray = !0, this._doNotHandleContextLost || (CU._bufferView = RU), UU ? this.updateRawTexture3D(CU, RU, EU, qU, cU, GU) : this.updateRawTexture2DArray(CU, RU, EU, qU, cU, GU), this._bindTextureDirectly(jU, CU, !0);
          const hU = this._getSamplingParameters(KU, TU);
          return this._gl.texParameteri(jU, this._gl.TEXTURE_MAG_FILTER, hU.mag), this._gl.texParameteri(jU, this._gl.TEXTURE_MIN_FILTER, hU.min), TU && this._gl.generateMipmap(jU), this._bindTextureDirectly(jU, null), this._internalTexturesCache.push(CU), CU
        }
      }

      function gU(UU) {
        return function(RU, gU, tU, pU) {
          let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const TU = UU ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qU = this._getWebGLTextureType(PU),
            KU = this._getInternalFormat(tU),
            cU = this._getRGBABufferInternalSizedFormat(PU, tU);
          this._bindTextureDirectly(TU, RU, !0), this._unpackFlipY(void 0 === pU || !!pU), this._doNotHandleContextLost || (RU._bufferView = gU, RU.format = tU, RU.invertY = pU, RU._compression = EU), RU.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), EU && gU ? this._gl.compressedTexImage3D(TU, 0, this.getCaps().s3tc[EU], RU.width, RU.height, RU.depth, 0, gU) : this._gl.texImage3D(TU, 0, cU, RU.width, RU.height, RU.depth, 0, KU, qU, gU), RU.generateMipMaps && this._gl.generateMipmap(TU), this._bindTextureDirectly(TU, null), RU.isReady = !0
        }
      }
      KU || (KU = !0, pU.ThinEngine.prototype.updateRawTexture = function(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!UU) return;
        const TU = this._getRGBABufferInternalSizedFormat(EU, gU, PU),
          qU = this._getInternalFormat(gU),
          KU = this._getWebGLTextureType(EU);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, UU, !0), this._unpackFlipY(void 0 === tU || !!tU), this._doNotHandleContextLost || (UU._bufferView = RU, UU.format = gU, UU.type = EU, UU.invertY = tU, UU._compression = pU), UU.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), pU && RU ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[pU], UU.width, UU.height, 0, RU) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, TU, UU.width, UU.height, 0, qU, KU, RU), UU.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), UU.isReady = !0
      }, pU.ThinEngine.prototype.createRawTexture = function(UU, RU, gU, tU, pU, EU, TU) {
        let qU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          cU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const GU = new PU.d(this, 3);
        GU.baseWidth = RU, GU.baseHeight = gU, GU.width = RU, GU.height = gU, GU.format = tU, GU.generateMipMaps = pU, GU.samplingMode = TU, GU.invertY = EU, GU._compression = qU, GU.type = KU, GU._useSRGBBuffer = this._getUseSRGBBuffer(cU, !pU), this._doNotHandleContextLost || (GU._bufferView = UU), this.updateRawTexture(GU, UU, tU, EU, qU, KU, GU._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, GU, !0);
        const jU = this._getSamplingParameters(TU, pU);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, jU.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, jU.min), pU && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(GU), GU
      }, pU.ThinEngine.prototype.createRawCubeTexture = function(UU, RU, gU, tU, pU, EU, KU) {
        let cU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const GU = this._gl,
          jU = new PU.d(this, 8);
        jU.isCube = !0, jU.format = gU, jU.type = tU, this._doNotHandleContextLost || (jU._bufferViewArray = UU);
        const uU = this._getWebGLTextureType(tU);
        let CU = this._getInternalFormat(gU);
        CU === GU.RGB && (CU = GU.RGBA), uU !== GU.FLOAT || this._caps.textureFloatLinearFiltering ? uU !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? uU !== GU.FLOAT || this._caps.textureFloatRender ? uU !== GU.HALF_FLOAT || this._caps.colorBufferFloat || (pU = !1, TU.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (pU = !1, TU.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (pU = !1, KU = 1, TU.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (pU = !1, KU = 1, TU.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const hU = RU,
          QU = hU;
        jU.width = hU, jU.height = QU, jU.invertY = EU, jU._compression = cU;
        if (!this.needPOTTextures || (0, qU.f)(jU.width) && (0, qU.f)(jU.height) || (pU = !1), UU) this.updateRawCubeTexture(jU, UU, gU, tU, EU, cU);
        else {
          const UU = this._getRGBABufferInternalSizedFormat(tU),
            RU = 0;
          this._bindTextureDirectly(GU.TEXTURE_CUBE_MAP, jU, !0);
          for (let gU = 0; gU < 6; gU++) cU ? GU.compressedTexImage2D(GU.TEXTURE_CUBE_MAP_POSITIVE_X + gU, RU, this.getCaps().s3tc[cU], jU.width, jU.height, 0, void 0) : GU.texImage2D(GU.TEXTURE_CUBE_MAP_POSITIVE_X + gU, RU, UU, jU.width, jU.height, 0, CU, uU, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, jU, !0), UU && pU && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const eU = this._getSamplingParameters(KU, pU);
        return GU.texParameteri(GU.TEXTURE_CUBE_MAP, GU.TEXTURE_MAG_FILTER, eU.mag), GU.texParameteri(GU.TEXTURE_CUBE_MAP, GU.TEXTURE_MIN_FILTER, eU.min), GU.texParameteri(GU.TEXTURE_CUBE_MAP, GU.TEXTURE_WRAP_S, GU.CLAMP_TO_EDGE), GU.texParameteri(GU.TEXTURE_CUBE_MAP, GU.TEXTURE_WRAP_T, GU.CLAMP_TO_EDGE), this._bindTextureDirectly(GU.TEXTURE_CUBE_MAP, null), jU.generateMipMaps = pU, jU.samplingMode = KU, jU.isReady = !0, jU
      }, pU.ThinEngine.prototype.updateRawCubeTexture = function(RU, gU, tU, pU, EU) {
        let PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        RU._bufferViewArray = gU, RU.format = tU, RU.type = pU, RU.invertY = EU, RU._compression = PU;
        const KU = this._gl,
          cU = this._getWebGLTextureType(pU);
        let GU = this._getInternalFormat(tU);
        const jU = this._getRGBABufferInternalSizedFormat(pU);
        let uU = !1;
        GU === KU.RGB && (GU = KU.RGBA, uU = !0), this._bindTextureDirectly(KU.TEXTURE_CUBE_MAP, RU, !0), this._unpackFlipY(void 0 === EU || !!EU), RU.width % 4 !== 0 && KU.pixelStorei(KU.UNPACK_ALIGNMENT, 1);
        for (let qU = 0; qU < 6; qU++) {
          let tU = gU[qU];
          PU ? KU.compressedTexImage2D(KU.TEXTURE_CUBE_MAP_POSITIVE_X + qU, TU, this.getCaps().s3tc[PU], RU.width, RU.height, 0, tU) : (uU && (tU = UU(tU, RU.width, RU.height, pU)), KU.texImage2D(KU.TEXTURE_CUBE_MAP_POSITIVE_X + qU, TU, jU, RU.width, RU.height, 0, GU, cU, tU))
        }(!this.needPOTTextures || (0, qU.f)(RU.width) && (0, qU.f)(RU.height)) && RU.generateMipMaps && 0 === TU && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), RU.isReady = !0
      }, pU.ThinEngine.prototype.createRawCubeTextureFromUrl = function(RU, gU, tU, pU, EU, PU, TU, qU) {
        let KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          cU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          GU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          jU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const uU = this._gl,
          CU = this.createRawCubeTexture(null, tU, pU, EU, !PU, jU, GU, null);
        gU?.addPendingData(CU), CU.url = RU, CU.isReady = !1, this._internalTexturesCache.push(CU);
        const hU = (UU, RU) => {
            gU?.removePendingData(CU), cU && cU(UU ? UU.status + " " + UU.statusText : "Failed to parse texture data", RU)
          },
          QU = async RU => {
            if (!CU._hardwareTexture) return;
            const tU = TU(RU);
            if (!tU) return;
            const PU = tU instanceof Promise ? await tU : tU,
              cU = CU.width;
            if (qU) {
              const RU = this._getWebGLTextureType(EU);
              let gU = this._getInternalFormat(pU);
              const tU = this._getRGBABufferInternalSizedFormat(EU);
              let TU = !1;
              gU === uU.RGB && (gU = uU.RGBA, TU = !0), this._bindTextureDirectly(uU.TEXTURE_CUBE_MAP, CU, !0), this._unpackFlipY(!1);
              const KU = qU(PU);
              for (let pU = 0; pU < KU.length; pU++) {
                const PU = cU >> pU;
                for (let qU = 0; qU < 6; qU++) {
                  let cU = KU[pU][qU];
                  TU && (cU = UU(cU, PU, PU, EU)), uU.texImage2D(qU, pU, tU, PU, PU, 0, gU, RU, cU)
                }
              }
              this._bindTextureDirectly(uU.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(CU, PU, pU, EU, jU);
            CU.isReady = !0, gU?.removePendingData(CU), CU.onLoadedObservable.notifyObservers(CU), CU.onLoadedObservable.clear(), KU && KU()
          };
        return this._loadFile(RU, (UU => {
          QU(UU).catch((UU => {
            hU(void 0, UU)
          }))
        }), void 0, gU?.offlineProvider, !0, hU), CU
      }, pU.ThinEngine.prototype.createRawTexture2DArray = RU(!1), pU.ThinEngine.prototype.createRawTexture3D = RU(!0), pU.ThinEngine.prototype.updateRawTexture2DArray = gU(!1), pU.ThinEngine.prototype.updateRawTexture3D = gU(!0))
    }();
    var cU = gU(39248);
    let GU = !1;
    GU || (GU = !0, pU.ThinEngine.prototype._readTexturePixelsSync = function(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        KU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const GU = this._gl;
      if (!GU) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const UU = GU.createFramebuffer();
        if (!UU) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = UU
      }
      GU.bindFramebuffer(GU.FRAMEBUFFER, this._dummyFramebuffer), tU > -1 && (UU.is2DArray || UU.is3D) ? GU.framebufferTextureLayer(GU.FRAMEBUFFER, GU.COLOR_ATTACHMENT0, UU._hardwareTexture?.underlyingResource, pU, tU) : tU > -1 ? GU.framebufferTexture2D(GU.FRAMEBUFFER, GU.COLOR_ATTACHMENT0, GU.TEXTURE_CUBE_MAP_POSITIVE_X + tU, UU._hardwareTexture?.underlyingResource, pU) : GU.framebufferTexture2D(GU.FRAMEBUFFER, GU.COLOR_ATTACHMENT0, GU.TEXTURE_2D, UU._hardwareTexture?.underlyingResource, pU);
      let jU = void 0 !== UU.type ? this._getWebGLTextureType(UU.type) : GU.UNSIGNED_BYTE;
      return TU ? EU || (EU = (0, cU.o)(UU.type, 4 * RU * gU)) : jU === GU.UNSIGNED_BYTE ? (EU || (EU = new Uint8Array(4 * RU * gU)), jU = GU.UNSIGNED_BYTE) : (EU || (EU = new Float32Array(4 * RU * gU)), jU = GU.FLOAT), PU && this.flushFramebuffer(), GU.readPixels(qU, KU, RU, gU, GU.RGBA, jU, EU), GU.bindFramebuffer(GU.FRAMEBUFFER, this._currentFramebuffer), EU
    }, pU.ThinEngine.prototype._readTexturePixels = function(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        KU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU))
    }), (0, gU(39354).c)();
    let jU = !1;
    jU || (jU = !0, pU.ThinEngine.prototype._createDepthStencilCubeTexture = function(UU, RU) {
      const gU = new PU.d(this, 12);
      if (gU.isCube = !0, 1 === this.MC) return TU.e.Error("Depth cube texture is not supported by WebGL 1."), gU;
      const tU = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...RU
        },
        pU = this._gl;
      this._bindTextureDirectly(pU.TEXTURE_CUBE_MAP, gU, !0), this._setupDepthStencilTexture(gU, UU, tU.bilinearFiltering, tU.comparisonFunction);
      for (let EU = 0; EU < 6; EU++) tU.generateStencil ? pU.texImage2D(pU.TEXTURE_CUBE_MAP_POSITIVE_X + EU, 0, pU.DEPTH24_STENCIL8, UU, UU, 0, pU.DEPTH_STENCIL, pU.UNSIGNED_INT_24_8, null) : pU.texImage2D(pU.TEXTURE_CUBE_MAP_POSITIVE_X + EU, 0, pU.DEPTH_COMPONENT24, UU, UU, 0, pU.DEPTH_COMPONENT, pU.UNSIGNED_INT, null);
      return this._bindTextureDirectly(pU.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(gU), gU
    }, pU.ThinEngine.prototype._setCubeMapTextureParams = function(UU, RU, gU) {
      const tU = this._gl;
      tU.texParameteri(tU.TEXTURE_CUBE_MAP, tU.TEXTURE_MAG_FILTER, tU.LINEAR), tU.texParameteri(tU.TEXTURE_CUBE_MAP, tU.TEXTURE_MIN_FILTER, RU ? tU.LINEAR_MIPMAP_LINEAR : tU.LINEAR), tU.texParameteri(tU.TEXTURE_CUBE_MAP, tU.TEXTURE_WRAP_S, tU.CLAMP_TO_EDGE), tU.texParameteri(tU.TEXTURE_CUBE_MAP, tU.TEXTURE_WRAP_T, tU.CLAMP_TO_EDGE), UU.samplingMode = RU ? 3 : 2, RU && this.getCaps().textureMaxLevel && void 0 !== gU && gU > 0 && (tU.texParameteri(tU.TEXTURE_CUBE_MAP, tU.TEXTURE_MAX_LEVEL, gU), UU._maxLodLevel = gU), this._bindTextureDirectly(tU.TEXTURE_CUBE_MAP, null)
    }, pU.ThinEngine.prototype.createCubeTexture = function(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PU = arguments.length > 6 ? arguments[6] : void 0,
        KU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        cU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        GU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        jU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        uU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        CU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        hU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const QU = this._gl;
      return this.createCubeTextureBase(UU, RU, gU, !!tU, pU, EU, PU, KU, cU, GU, jU, uU, (UU => this._bindTextureDirectly(QU.TEXTURE_CUBE_MAP, UU, !0)), ((UU, RU) => {
        const gU = this.needPOTTextures ? (0, qU.e)(RU[0].width, this._caps.maxCubemapTextureSize) : RU[0].width,
          EU = gU,
          KU = [QU.TEXTURE_CUBE_MAP_POSITIVE_X, QU.TEXTURE_CUBE_MAP_POSITIVE_Y, QU.TEXTURE_CUBE_MAP_POSITIVE_Z, QU.TEXTURE_CUBE_MAP_NEGATIVE_X, QU.TEXTURE_CUBE_MAP_NEGATIVE_Y, QU.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(QU.TEXTURE_CUBE_MAP, UU, !0), this._unpackFlipY(!1);
        const cU = PU ? this._getInternalFormat(PU, UU._useSRGBBuffer) : UU._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : QU.RGBA;
        let GU = PU ? this._getInternalFormat(PU) : QU.RGBA;
        UU._useSRGBBuffer && 1 === this.MC && (GU = cU);
        for (let tU = 0; tU < KU.length; tU++)
          if (RU[tU].width !== gU || RU[tU].height !== EU) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void TU.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = gU, this._workingCanvas.height = EU, this._workingContext.drawImage(RU[tU], 0, 0, RU[tU].width, RU[tU].height, 0, 0, gU, EU), QU.texImage2D(KU[tU], 0, cU, GU, QU.UNSIGNED_BYTE, this._workingCanvas)
          } else QU.texImage2D(KU[tU], 0, cU, GU, QU.UNSIGNED_BYTE, RU[tU]);
        tU || QU.generateMipmap(QU.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(UU, !tU), UU.width = gU, UU.height = EU, UU.isReady = !0, PU && (UU.format = PU), UU.onLoadedObservable.notifyObservers(UU), UU.onLoadedObservable.clear(), pU && pU()
      }), !!CU, hU)
    }, pU.ThinEngine.prototype.generateMipMapsForCubemap = function(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU.generateMipMaps) {
        const gU = this._gl;
        this._bindTextureDirectly(gU.TEXTURE_CUBE_MAP, UU, !0), gU.generateMipmap(gU.TEXTURE_CUBE_MAP), RU && this._bindTextureDirectly(gU.TEXTURE_CUBE_MAP, null)
      }
    });
    gU(39356);
    let uU = !1;
    uU || (uU = !0, pU.ThinEngine.prototype.setDepthStencilTexture = function(UU, RU, gU, tU) {
      void 0 !== UU && (RU && (this._boundUniforms[UU] = RU), gU && gU.depthStencilTexture ? this._setTexture(UU, gU, !1, !0, tU) : this._setTexture(UU, null, void 0, void 0, tU))
    });
    let CU = !1;
    CU || (CU = !0, pU.ThinEngine.prototype.createRenderTargetCubeTexture = function(UU, RU) {
      const gU = this._createHardwareRenderTargetWrapper(!1, !0, UU),
        tU = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...RU
        };
      tU.generateStencilBuffer = tU.generateDepthBuffer && tU.generateStencilBuffer, (1 !== tU.type || this._caps.textureFloatLinearFiltering) && (2 !== tU.type || this._caps.textureHalfFloatLinearFiltering) || (tU.samplingMode = 1);
      const pU = this._gl,
        EU = new PU.d(this, 5);
      this._bindTextureDirectly(pU.TEXTURE_CUBE_MAP, EU, !0);
      const qU = this._getSamplingParameters(tU.samplingMode, tU.generateMipMaps);
      1 !== tU.type || this._caps.textureFloat || (tU.type = 0, TU.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), pU.texParameteri(pU.TEXTURE_CUBE_MAP, pU.TEXTURE_MAG_FILTER, qU.mag), pU.texParameteri(pU.TEXTURE_CUBE_MAP, pU.TEXTURE_MIN_FILTER, qU.min), pU.texParameteri(pU.TEXTURE_CUBE_MAP, pU.TEXTURE_WRAP_S, pU.CLAMP_TO_EDGE), pU.texParameteri(pU.TEXTURE_CUBE_MAP, pU.TEXTURE_WRAP_T, pU.CLAMP_TO_EDGE);
      for (let PU = 0; PU < 6; PU++) pU.texImage2D(pU.TEXTURE_CUBE_MAP_POSITIVE_X + PU, 0, this._getRGBABufferInternalSizedFormat(tU.type, tU.format), UU, UU, 0, this._getInternalFormat(tU.format), this._getWebGLTextureType(tU.type), null);
      const KU = pU.createFramebuffer();
      return this._bindUnboundFramebuffer(KU), gU._depthStencilBuffer = this._setupFramebufferDepthAttachments(tU.generateStencilBuffer, tU.generateDepthBuffer, UU, UU), tU.generateMipMaps && pU.generateMipmap(pU.TEXTURE_CUBE_MAP), this._bindTextureDirectly(pU.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), gU._framebuffer = KU, gU._generateDepthBuffer = tU.generateDepthBuffer, gU._generateStencilBuffer = tU.generateStencilBuffer, EU.width = UU, EU.height = UU, EU.isReady = !0, EU.isCube = !0, EU.samples = 1, EU.generateMipMaps = tU.generateMipMaps, EU.samplingMode = tU.samplingMode, EU.type = tU.type, EU.format = tU.format, this._internalTexturesCache.push(EU), gU.setTextures(EU), gU
    });
    var hU = gU(39364),
      QU = gU(39373);
    let eU = !1;
    eU || (eU = !0, pU.ThinEngine.prototype.createPrefilteredCubeTexture = function(UU, RU, tU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        qU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        KU = arguments.length > 6 ? arguments[6] : void 0,
        cU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        GU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        jU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(UU, RU, null, !1, (async UU => {
        if (!UU) return void(EU && EU(null));
        const qU = UU.texture;
        if (GU ? UU.info.sphericalPolynomial && (qU._sphericalPolynomial = UU.info.sphericalPolynomial) : qU._sphericalPolynomial = qU._sphericalPolynomial ?? new hU.c, qU._source = 9, this.getCaps().textureLOD) return void(EU && EU(qU));
        const KU = this._gl,
          cU = UU.width;
        if (!cU) return;
        const {
          DDSTools: jU
        } = await gU.e(296).then((() => gU(41112))), uU = [];
        for (let gU = 0; gU < 3; gU++) {
          const EU = 1 - gU / 2,
            GU = pU,
            CU = Math.log2(cU) * tU + pU,
            hU = GU + (CU - GU) * EU,
            eU = Math.round(Math.min(Math.max(hU, 0), CU)),
            WU = new PU.d(this, 2);
          if (WU.type = qU.type, WU.format = qU.format, WU.width = Math.pow(2, Math.max(Math.log2(cU) - eU, 0)), WU.height = WU.width, WU.isCube = !0, WU._cachedWrapU = 0, WU._cachedWrapV = 0, this._bindTextureDirectly(KU.TEXTURE_CUBE_MAP, WU, !0), WU.samplingMode = 2, KU.texParameteri(KU.TEXTURE_CUBE_MAP, KU.TEXTURE_MAG_FILTER, KU.LINEAR), KU.texParameteri(KU.TEXTURE_CUBE_MAP, KU.TEXTURE_MIN_FILTER, KU.LINEAR), KU.texParameteri(KU.TEXTURE_CUBE_MAP, KU.TEXTURE_WRAP_S, KU.CLAMP_TO_EDGE), KU.texParameteri(KU.TEXTURE_CUBE_MAP, KU.TEXTURE_WRAP_T, KU.CLAMP_TO_EDGE), UU.isDDS) {
            const RU = UU.info,
              gU = UU.data;
            this._unpackFlipY(RU.isCompressed), jU.UploadDDSLevels(this, WU, gU, RU, !0, 6, eU)
          } else TU.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(KU.TEXTURE_CUBE_MAP, null);
          const fU = new QU.b(RU);
          fU._isCube = !0, fU._texture = WU, WU.isReady = !0, uU.push(fU)
        }
        qU._lodTextureHigh = uU[2], qU._lodTextureMid = uU[1], qU._lodTextureLow = uU[0], EU && EU(qU)
      }), qU, KU, cU, GU, tU, pU, null, void 0, !1, jU)
    });
    var WU = gU(39299);
    let fU = !1;
    fU || (fU = !0, pU.ThinEngine.prototype.createUniformBuffer = function(UU, RU) {
      const gU = this._gl.createBuffer();
      if (!gU) throw new Error("Unable to create uniform buffer");
      const tU = new WU.c(gU);
      return this.bindUniformBuffer(tU), UU instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, UU, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(UU), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), tU.references = 1, tU
    }, pU.ThinEngine.prototype.createDynamicUniformBuffer = function(UU, RU) {
      const gU = this._gl.createBuffer();
      if (!gU) throw new Error("Unable to create dynamic uniform buffer");
      const tU = new WU.c(gU);
      return this.bindUniformBuffer(tU), UU instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, UU, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(UU), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), tU.references = 1, tU
    }, pU.ThinEngine.prototype.updateUniformBuffer = function(UU, RU, gU, tU) {
      this.bindUniformBuffer(UU), void 0 === gU && (gU = 0), void 0 === tU ? RU instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gU, RU) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, gU, new Float32Array(RU)) : RU instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, RU.subarray(gU, gU + tU)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(RU).subarray(gU, gU + tU)), this.bindUniformBuffer(null)
    }, pU.ThinEngine.prototype.bindUniformBuffer = function(UU) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, UU ? UU.underlyingResource : null)
    }, pU.ThinEngine.prototype.bindUniformBufferBase = function(UU, RU, gU) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, RU, UU ? UU.underlyingResource : null)
    }, pU.ThinEngine.prototype.bindUniformBlock = function(UU, RU, gU) {
      const tU = UU.program,
        pU = this._gl.getUniformBlockIndex(tU, RU);
      4294967295 !== pU && this._gl.uniformBlockBinding(tU, pU, gU)
    });
    var xU = gU(39231),
      mU = gU(39272);
    let IU = !1;
    IU || (IU = !0, mU.d.prototype.displayLoadingUI = function() {
      if (!(0, xU.k)()) return;
      const UU = this.loadingScreen;
      UU && UU.displayLoadingUI()
    }, mU.d.prototype.hideLoadingUI = function() {
      if (!(0, xU.k)()) return;
      const UU = this._loadingScreen;
      UU && UU.hideLoadingUI()
    }, Object.defineProperty(mU.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = mU.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(UU) {
        this._loadingScreen = UU
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(mU.d.prototype, "loadingUIText", {
      set: function(UU) {
        this.loadingScreen.loadingUIText = UU
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(mU.d.prototype, "loadingUIBackgroundColor", {
      set: function(UU) {
        this.loadingScreen.loadingUIBackgroundColor = UU
      },
      enumerable: !0,
      configurable: !0
    })), (0, gU(39335).b)();
    let JU = !1;
    JU || (JU = !0, mU.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, mU.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, mU.d.prototype.setDepthFunction = function(UU) {
      this._depthCullingState.depthFunc = UU
    }, mU.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, mU.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, mU.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, mU.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, mU.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, mU.d.prototype.setDepthWrite = function(UU) {
      this._depthCullingState.depthMask = UU
    }, mU.d.prototype.setAlphaConstants = function(UU, RU, gU, tU) {
      this._alphaState.setAlphaBlendConstants(UU, RU, gU, tU)
    }, mU.d.prototype.getAlphaMode = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[UU]
    }, mU.d.prototype.getAlphaEquation = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[UU]
    });
    let wU = !1;
    wU || (wU = !0, mU.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, mU.d.prototype.setStencilBuffer = function(UU) {
      this._stencilState.stencilTest = UU
    }, mU.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, mU.d.prototype.setStencilMask = function(UU) {
      this._stencilState.stencilMask = UU
    }, mU.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, mU.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, mU.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, mU.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, mU.d.prototype.setStencilFunction = function(UU) {
      this._stencilState.stencilFunc = UU
    }, mU.d.prototype.setStencilBackFunction = function(UU) {
      this._stencilState.stencilBackFunc = UU
    }, mU.d.prototype.setStencilFunctionReference = function(UU) {
      this._stencilState.stencilFuncRef = UU
    }, mU.d.prototype.setStencilFunctionMask = function(UU) {
      this._stencilState.stencilFuncMask = UU
    }, mU.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, mU.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, mU.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, mU.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, mU.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, mU.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, mU.d.prototype.setStencilOperationFail = function(UU) {
      this._stencilState.stencilOpStencilFail = UU
    }, mU.d.prototype.setStencilBackOperationFail = function(UU) {
      this._stencilState.stencilBackOpStencilFail = UU
    }, mU.d.prototype.setStencilOperationDepthFail = function(UU) {
      this._stencilState.stencilOpDepthFail = UU
    }, mU.d.prototype.setStencilBackOperationDepthFail = function(UU) {
      this._stencilState.stencilBackOpDepthFail = UU
    }, mU.d.prototype.setStencilOperationPass = function(UU) {
      this._stencilState.stencilOpStencilDepthPass = UU
    }, mU.d.prototype.setStencilBackOperationPass = function(UU) {
      this._stencilState.stencilBackOpStencilDepthPass = UU
    }, mU.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, mU.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    gU(39409);
    let nU = !1;
    nU || (nU = !0, mU.d.prototype.createDepthStencilTexture = function(UU, RU, gU) {
      if (RU.isCube) {
        const gU = UU.width || UU;
        return this._createDepthStencilCubeTexture(gU, RU)
      }
      return this._createDepthStencilTexture(UU, RU, gU)
    });
    gU(39416), gU(39449);
    let bU = !1;
    bU || (bU = !0, pU.ThinEngine.prototype.enableScissor = function(UU, RU, gU, tU) {
      const pU = this._gl;
      pU.enable(pU.SCISSOR_TEST), pU.scissor(UU, RU, gU, tU)
    }, pU.ThinEngine.prototype.disableScissor = function() {
      const UU = this._gl;
      UU.disable(UU.SCISSOR_TEST)
    })
  },
  39199: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => mU
    });
    var tU = gU(39203),
      pU = gU(36622),
      EU = gU(39215),
      PU = gU(39280);
    class TU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new qU(UU)
      }
      sampleFrame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PU.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const RU = UU - this._lastFrameTimeMs;
            this._rollingFrameTime.add(RU)
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
    class qU {
      constructor(UU) {
        this._samples = new Array(UU), this.reset()
      }
      add(UU) {
        let RU;
        if (this.isSaturated()) {
          const UU = this._samples[this._pos];
          RU = UU - this.average, this.average -= RU / (this._sampleCount - 1), this._m2 -= RU * (UU - this.average)
        } else this._sampleCount++;
        RU = UU - this.average, this.average += RU / this._sampleCount, this._m2 += RU * (UU - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = UU, this._pos++, this._pos %= this._samples.length
      }
      history(UU) {
        if (UU >= this._sampleCount || UU >= this._samples.length) return 0;
        const RU = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(RU - UU)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(UU) {
        const RU = this._samples.length;
        return (UU % RU + RU) % RU
      }
    }
    var KU = gU(39299),
      cU = gU(38236),
      GU = gU(39316),
      jU = gU(39272),
      uU = gU(39231);

    function CU(UU) {
      const RU = function(UU) {
        if (!(0, uU.g)() || !document.body) return null;
        const RU = document.createElement("span");
        RU.textContent = "Hg", RU.style.font = UU;
        const gU = document.createElement("div");
        gU.style.display = "inline-block", gU.style.width = "1px", gU.style.height = "0px", gU.style.verticalAlign = "bottom";
        const tU = document.createElement("div");
        let pU, EU;
        tU.style.whiteSpace = "nowrap", tU.appendChild(RU), tU.appendChild(gU), document.body.appendChild(tU);
        try {
          EU = gU.getBoundingClientRect().top - RU.getBoundingClientRect().top, gU.style.verticalAlign = "baseline", pU = gU.getBoundingClientRect().top - RU.getBoundingClientRect().top
        } finally {
          document.body.removeChild(tU)
        }
        const PU = {
          ascent: pU,
          height: EU,
          descent: EU - pU
        };
        return hU(PU) ? PU : null
      }(UU);
      if (RU) return RU;
      const gU = function(UU) {
        let RU = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? RU = new OffscreenCanvas(64, 64) : (0, uU.g)() && "function" === typeof document.createElement && (RU = document.createElement("canvas"), RU.width = 64, RU.height = 64);
          const gU = RU?.getContext("2d");
          if (!gU) return null;
          gU.font = UU;
          const tU = gU.measureText("Hg"),
            pU = Number(tU.actualBoundingBoxAscent ?? tU.fontBoundingBoxAscent),
            EU = Number(tU.actualBoundingBoxDescent ?? tU.fontBoundingBoxDescent),
            PU = {
              ascent: pU,
              height: pU + EU,
              descent: EU
            };
          return hU(PU) ? PU : null
        } catch {
          return null
        } finally {
          const UU = RU;
          "function" === typeof UU?.dispose && UU.dispose()
        }
      }(UU);
      return gU || function(UU) {
        const RU = Math.max(1, function(UU) {
            const RU = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(UU || ""));
            return RU ? Number(RU[1]) : 16
          }(UU)),
          gU = .8 * RU,
          tU = .2 * RU;
        return {
          ascent: gU,
          height: gU + tU,
          descent: tU
        }
      }(UU)
    }

    function hU(UU) {
      return Number.isFinite(UU.ascent) && Number.isFinite(UU.height) && Number.isFinite(UU.descent) && UU.height > 0
    }

    function QU(UU) {
      if (UU.requestPointerLock) {
        const RU = UU.requestPointerLock();
        RU instanceof Promise ? RU.then((() => {
          UU.focus()
        })).catch((() => {})) : UU.focus()
      }
    }
    var eU = gU(39326),
      WU = gU(39268),
      fU = gU(39335),
      xU = gU(39344);
    class mU extends EU.ThinEngine {
      static get NpmPackage() {
        return jU.d.NpmPackage
      }
      static get Version() {
        return jU.d.Version
      }
      static get Instances() {
        return pU.c.Instances
      }
      static get LastCreatedEngine() {
        return pU.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return pU.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(UU) {
        return jU.d.DefaultLoadingScreenFactory(UU)
      }
      get _supportsHardwareTextureRescaling() {
        return !!mU._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, fU.b)(), (0, xU.b)(), super(UU, RU, gU, tU), this._performanceMonitor = new TU, this._drawCalls = new eU.c, UU && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(UU) {
        super._sharedInit(UU),
          function(UU, RU, gU) {
            UU._onCanvasFocus = () => {
              UU.onCanvasFocusObservable.notifyObservers(UU)
            }, UU._onCanvasBlur = () => {
              UU.onCanvasBlurObservable.notifyObservers(UU)
            }, UU._onCanvasContextMenu = RU => {
              UU.disableContextMenu && RU.preventDefault()
            }, RU.addEventListener("focus", UU._onCanvasFocus), RU.addEventListener("blur", UU._onCanvasBlur), RU.addEventListener("contextmenu", UU._onCanvasContextMenu), UU._onBlur = () => {
              UU.disablePerformanceMonitorInBackground && UU.performanceMonitor.disable(), UU._windowIsBackground = !0
            }, UU._onFocus = () => {
              UU.disablePerformanceMonitorInBackground && UU.performanceMonitor.enable(), UU._windowIsBackground = !1
            }, UU._onCanvasPointerOut = gU => {
              document.elementFromPoint(gU.clientX, gU.clientY) !== RU && UU.onCanvasPointerOutObservable.notifyObservers(gU)
            };
            const tU = UU.getHostWindow();
            tU && "function" === typeof tU.addEventListener && (tU.addEventListener("blur", UU._onBlur), tU.addEventListener("focus", UU._onFocus)), RU.addEventListener("pointerout", UU._onCanvasPointerOut), gU.doNotHandleTouchAction || function(UU) {
              UU && UU.setAttribute && (UU.setAttribute("touch-action", "none"), UU.style.touchAction = "none", UU.style.webkitTapHighlightColor = "transparent")
            }(RU), !jU.d.audioEngine && gU.audioEngine && jU.d.AudioEngineFactory && (jU.d.audioEngine = jU.d.AudioEngineFactory(UU.getRenderingCanvas(), UU.getAudioContext(), UU.getAudioDestination())), (0, uU.g)() && (UU._onFullscreenChange = () => {
              UU.isFullscreen = !!document.fullscreenElement, UU.isFullscreen && UU._pointerLockRequested && RU && QU(RU)
            }, document.addEventListener("fullscreenchange", UU._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", UU._onFullscreenChange, !1), UU._onPointerLockChange = () => {
              UU.isPointerLock = document.pointerLockElement === RU
            }, document.addEventListener("pointerlockchange", UU._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", UU._onPointerLockChange, !1)), UU.enableOfflineSupport = void 0 !== jU.d.OfflineProviderFactory, UU._deterministicLockstep = !!gU.deterministicLockstep, UU._lockstepMaxSteps = gU.lockstepMaxSteps || 0, UU._timeStep = gU.timeStep || 1 / 60
          }(this, UU, this._creationOptions)
      }
      resizeImageBitmap(UU, RU, gU) {
        return function(UU, RU, gU, tU) {
          const pU = UU.createCanvas(gU, tU).getContext("2d");
          if (!pU) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return pU.drawImage(RU, 0, 0), pU.getImageData(0, 0, gU, tU).data
        }(this, UU, RU, gU)
      }
      async _createImageBitmapFromSource(UU, RU) {
        return await async function(UU, RU, gU) {
          return await new Promise(((tU, pU) => {
            const EU = new Image;
            EU.onload = () => {
              EU.decode().then((() => {
                UU.createImageBitmap(EU, gU).then((UU => {
                  tU(UU)
                }))
              }))
            }, EU.onerror = () => {
              pU(`Error loading image ${EU.src}`)
            }, EU.src = RU
          }))
        }(this, UU, RU)
      }
      switchFullscreen(UU) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(UU)
      }
      enterFullscreen(UU) {
        this.isFullscreen || (this._pointerLockRequested = UU, this._renderingCanvas && function(UU) {
          const RU = UU.requestFullscreen || UU.webkitRequestFullscreen;
          RU && RU.call(UU)
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
      setDirectViewport(UU, RU, gU, tU) {
        const pU = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(UU, RU, gU, tU), pU
      }
      scissorClear(UU, RU, gU, tU, pU) {
        this.enableScissor(UU, RU, gU, tU), this.clear(pU, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(UU) {
        const RU = this._gl.getAttachedShaders(UU);
        return RU ? this._gl.getShaderSource(RU[0]) : null
      }
      getFragmentShaderSource(UU) {
        const RU = this._gl.getAttachedShaders(UU);
        return RU ? this._gl.getShaderSource(RU[1]) : null
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
        return CU(UU)
      }
      enterPointerlock() {
        this._renderingCanvas && QU(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Am() {
        this._measureFps(), super.Am()
      }
      _deletePipelineContext(UU) {
        const RU = UU;
        RU && RU.program && RU.transformFeedback && (this.deleteTransformFeedback(RU.transformFeedback), RU.transformFeedback = null), super._deletePipelineContext(UU)
      }
      createShaderProgram(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        pU = pU || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const PU = super.createShaderProgram(UU, RU, gU, tU, pU, EU);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), PU
      }
      _createShaderProgram(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const EU = tU.createProgram();
        if (UU.program = EU, !EU) throw new Error("Unable to create program");
        if (tU.attachShader(EU, RU), tU.attachShader(EU, gU), this.MC > 1 && pU) {
          const RU = this.createTransformFeedback();
          this.bindTransformFeedback(RU), this.setTranformFeedbackVaryings(EU, pU), UU.transformFeedback = RU
        }
        return tU.linkProgram(EU), this.MC > 1 && pU && this.bindTransformFeedback(null), UU.context = tU, UU.vertexShader = RU, UU.fragmentShader = gU, UU.isParallelCompiled || this._finalizePipelineContext(UU), EU
      }
      _releaseTexture(UU) {
        super._releaseTexture(UU)
      }
      _releaseRenderTargetWrapper(UU) {
        super._releaseRenderTargetWrapper(UU);
        for (const RU of this.scenes) {
          for (const gU of RU.postProcesses) gU._outputTexture === UU && (gU._outputTexture = null);
          for (const gU of RU.cameras)
            for (const RU of gU._postProcesses) RU && RU._outputTexture === UU && (RU._outputTexture = null)
        }
      }
      _rescaleTexture(UU, RU, gU, tU, pU) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const EU = this.createRenderTargetTexture({
          width: RU.width,
          height: RU.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && mU._RescalePostProcessFactory && (this._rescalePostProcess = mU._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const PU = () => {
              this._rescalePostProcess.onApply = function(RU) {
                RU._bindTexture("textureSampler", UU)
              };
              let PU = gU;
              PU || (PU = this.scenes[this.scenes.length - 1]), PU.postProcessManager.directRender([this._rescalePostProcess], EU, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, RU, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, tU, 0, 0, RU.width, RU.height, 0), this.unBindFramebuffer(EU), EU.dispose(), pU && pU()
            },
            TU = this._rescalePostProcess.getEffect();
          TU ? TU.executeWhenCompiled(PU) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((UU => {
            UU.executeWhenCompiled(PU)
          }))
        }
      }
      wrapWebGLTexture(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const PU = new GU.b(UU, this._gl),
          TU = new tU.d(this, 15, !0);
        return TU._hardwareTexture = PU, TU.baseWidth = pU, TU.baseHeight = EU, TU.width = pU, TU.height = EU, TU.isReady = !0, TU.useMipMaps = RU, this.updateTextureSamplingMode(gU, TU), TU
      }
      updateWrappedWebGLTexture(UU, RU) {
        if (15 !== UU.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const tU of this._renderTargetWrapperCache)
          if (tU.textures?.includes(UU)) {
            if (tU.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (tU._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } UU._hardwareTexture = new GU.b(RU, this._gl), UU.isReady = !0, UU._cachedCoordinatesMode = null, UU._cachedWrapU = null, UU._cachedWrapV = null, UU._cachedWrapR = null, UU._cachedAnisotropicFilteringLevel = null;
        for (const tU in this._boundTexturesCache) this._boundTexturesCache[tU] === UU && (this._boundTexturesCache[tU] = null);
        this.updateTextureSamplingMode(UU.samplingMode, UU);
        const gU = this._gl;
        for (const tU of this._renderTargetWrapperCache) {
          if (tU.texture !== UU) continue;
          const pU = tU,
            EU = tU.samples,
            PU = EU > 1;
          pU._framebuffer && gU.deleteFramebuffer(pU._framebuffer), !PU && pU._depthStencilBuffer && (gU.deleteRenderbuffer(pU._depthStencilBuffer), pU._depthStencilBuffer = null);
          const TU = this._currentFramebuffer,
            qU = gU.createFramebuffer();
          this._bindUnboundFramebuffer(qU), gU.framebufferTexture2D(gU.FRAMEBUFFER, gU.COLOR_ATTACHMENT0, gU.TEXTURE_2D, RU, 0), PU || (pU._depthStencilBuffer = this._setupFramebufferDepthAttachments(tU._generateStencilBuffer, tU._generateDepthBuffer, tU.width, tU.height)), this._bindUnboundFramebuffer(TU), pU._framebuffer = qU, PU && (tU._samples = 1, this.updateRenderTargetTextureSampleCount(pU, EU))
        }
      }
      _uploadImageToTexture(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pU = this._gl,
          EU = this._getWebGLTextureType(UU.type),
          PU = this._getInternalFormat(UU.format),
          TU = this._getRGBABufferInternalSizedFormat(UU.type, PU),
          qU = UU.isCube ? pU.TEXTURE_CUBE_MAP : pU.TEXTURE_2D;
        this._bindTextureDirectly(qU, UU, !0), this._unpackFlipY(UU.invertY);
        let KU = pU.TEXTURE_2D;
        UU.isCube && (KU = pU.TEXTURE_CUBE_MAP_POSITIVE_X + gU), pU.texImage2D(KU, tU, TU, PU, EU, RU), this._bindTextureDirectly(qU, null, !0)
      }
      updateTextureComparisonFunction(UU, RU) {
        if (1 === this.MC) return void cU.e.Error("WebGL 1 does not support texture comparison.");
        const gU = this._gl;
        UU.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, UU, !0), 0 === RU ? (gU.texParameteri(gU.TEXTURE_CUBE_MAP, gU.TEXTURE_COMPARE_FUNC, 515), gU.texParameteri(gU.TEXTURE_CUBE_MAP, gU.TEXTURE_COMPARE_MODE, gU.NONE)) : (gU.texParameteri(gU.TEXTURE_CUBE_MAP, gU.TEXTURE_COMPARE_FUNC, RU), gU.texParameteri(gU.TEXTURE_CUBE_MAP, gU.TEXTURE_COMPARE_MODE, gU.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, UU, !0), 0 === RU ? (gU.texParameteri(gU.TEXTURE_2D, gU.TEXTURE_COMPARE_FUNC, 515), gU.texParameteri(gU.TEXTURE_2D, gU.TEXTURE_COMPARE_MODE, gU.NONE)) : (gU.texParameteri(gU.TEXTURE_2D, gU.TEXTURE_COMPARE_FUNC, RU), gU.texParameteri(gU.TEXTURE_2D, gU.TEXTURE_COMPARE_MODE, gU.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), UU._comparisonFunction = RU
      }
      createInstancesBuffer(UU) {
        const RU = this._gl.createBuffer();
        if (!RU) throw new Error("Unable to create instance buffer");
        const gU = new KU.c(RU);
        return gU.hG = UU, this.bindArrayBuffer(gU), this._gl.bufferData(this._gl.ARRAY_BUFFER, UU, this._gl.DYNAMIC_DRAW), gU.references = 1, gU
      }
      deleteInstancesBuffer(UU) {
        this._gl.deleteBuffer(UU)
      }
      async _clientWaitAsync(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const tU = this._gl;
        return await new Promise(((pU, EU) => {
          (0, WU.c)((() => {
            const gU = tU.clientWaitSync(UU, RU, 0);
            if (gU == tU.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return gU != tU.TIMEOUT_EXPIRED
          }), pU, EU, gU)
        }))
      }
      _readPixelsAsync(UU, RU, gU, tU, pU, EU, PU) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const TU = this._gl,
          qU = TU.createBuffer();
        TU.bindBuffer(TU.PIXEL_PACK_BUFFER, qU), TU.bufferData(TU.PIXEL_PACK_BUFFER, PU.byteLength, TU.STREAM_READ), TU.readPixels(UU, RU, gU, tU, pU, EU, 0), TU.bindBuffer(TU.PIXEL_PACK_BUFFER, null);
        const KU = TU.fenceSync(TU.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return KU ? (TU.flush(), this._clientWaitAsync(KU, 0, 10).then((() => (TU.deleteSync(KU), TU.bindBuffer(TU.PIXEL_PACK_BUFFER, qU), TU.getBufferSubData(TU.PIXEL_PACK_BUFFER, 0, PU), TU.bindBuffer(TU.PIXEL_PACK_BUFFER, null), TU.deleteBuffer(qU), PU)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(UU, RU) {
            1 === pU.c.Instances.length && jU.d.audioEngine && (jU.d.audioEngine.dispose(), jU.d.audioEngine = null);
            const gU = UU.getHostWindow();
            gU && "function" === typeof gU.removeEventListener && (gU.removeEventListener("blur", UU._onBlur), gU.removeEventListener("focus", UU._onFocus)), RU && (RU.removeEventListener("focus", UU._onCanvasFocus), RU.removeEventListener("blur", UU._onCanvasBlur), RU.removeEventListener("pointerout", UU._onCanvasPointerOut), RU.removeEventListener("contextmenu", UU._onCanvasContextMenu)), (0, uU.g)() && (document.removeEventListener("fullscreenchange", UU._onFullscreenChange), document.removeEventListener("mozfullscreenchange", UU._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", UU._onFullscreenChange), document.removeEventListener("msfullscreenchange", UU._onFullscreenChange), document.removeEventListener("pointerlockchange", UU._onPointerLockChange), document.removeEventListener("mspointerlockchange", UU._onPointerLockChange), document.removeEventListener("mozpointerlockchange", UU._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", UU._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    mU.ALPHA_DISABLE = 0, mU.ALPHA_ADD = 1, mU.ALPHA_COMBINE = 2, mU.ALPHA_SUBTRACT = 3, mU.ALPHA_MULTIPLY = 4, mU.ALPHA_MAXIMIZED = 5, mU.ALPHA_ONEONE = 6, mU.ALPHA_PREMULTIPLIED = 7, mU.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, mU.ALPHA_INTERPOLATE = 9, mU.ALPHA_SCREENMODE = 10, mU.DELAYLOADSTATE_NONE = 0, mU.DELAYLOADSTATE_LOADED = 1, mU.DELAYLOADSTATE_LOADING = 2, mU.DELAYLOADSTATE_NOTLOADED = 4, mU.NEVER = 512, mU.ALWAYS = 519, mU.LESS = 513, mU.EQUAL = 514, mU.LEQUAL = 515, mU.GREATER = 516, mU.GEQUAL = 518, mU.NOTEQUAL = 517, mU.KEEP = 7680, mU.REPLACE = 7681, mU.INCR = 7682, mU.DECR = 7683, mU.INVERT = 5386, mU.INCR_WRAP = 34055, mU.DECR_WRAP = 34056, mU.TEXTURE_CLAMP_ADDRESSMODE = 0, mU.TEXTURE_WRAP_ADDRESSMODE = 1, mU.TEXTURE_MIRROR_ADDRESSMODE = 2, mU.TEXTUREFORMAT_ALPHA = 0, mU.TEXTUREFORMAT_LUMINANCE = 1, mU.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, mU.TEXTUREFORMAT_RGB = 4, mU.TEXTUREFORMAT_RGBA = 5, mU.TEXTUREFORMAT_RED = 6, mU.TEXTUREFORMAT_R = 6, mU.TEXTUREFORMAT_R16_UNORM = 33322, mU.TEXTUREFORMAT_RG16_UNORM = 33324, mU.TEXTUREFORMAT_RGB16_UNORM = 32852, mU.TEXTUREFORMAT_RGBA16_UNORM = 32859, mU.TEXTUREFORMAT_R16_SNORM = 36760, mU.TEXTUREFORMAT_RG16_SNORM = 36761, mU.TEXTUREFORMAT_RGB16_SNORM = 36762, mU.TEXTUREFORMAT_RGBA16_SNORM = 36763, mU.TEXTUREFORMAT_RG = 7, mU.TEXTUREFORMAT_RED_INTEGER = 8, mU.TEXTUREFORMAT_R_INTEGER = 8, mU.TEXTUREFORMAT_RG_INTEGER = 9, mU.TEXTUREFORMAT_RGB_INTEGER = 10, mU.TEXTUREFORMAT_RGBA_INTEGER = 11, mU.TEXTURETYPE_UNSIGNED_BYTE = 0, mU.TEXTURETYPE_UNSIGNED_INT = 0, mU.TEXTURETYPE_FLOAT = 1, mU.TEXTURETYPE_HALF_FLOAT = 2, mU.TEXTURETYPE_BYTE = 3, mU.TEXTURETYPE_SHORT = 4, mU.TEXTURETYPE_UNSIGNED_SHORT = 5, mU.TEXTURETYPE_INT = 6, mU.TEXTURETYPE_UNSIGNED_INTEGER = 7, mU.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, mU.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, mU.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, mU.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, mU.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, mU.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, mU.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, mU.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, mU.TEXTURE_NEAREST_SAMPLINGMODE = 1, mU.TEXTURE_BILINEAR_SAMPLINGMODE = 2, mU.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, mU.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, mU.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, mU.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, mU.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, mU.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, mU.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, mU.TEXTURE_NEAREST_LINEAR = 7, mU.TEXTURE_NEAREST_NEAREST = 1, mU.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, mU.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, mU.TEXTURE_LINEAR_LINEAR = 2, mU.TEXTURE_LINEAR_NEAREST = 12, mU.TEXTURE_EXPLICIT_MODE = 0, mU.TEXTURE_SPHERICAL_MODE = 1, mU.TEXTURE_PLANAR_MODE = 2, mU.TEXTURE_CUBIC_MODE = 3, mU.TEXTURE_PROJECTION_MODE = 4, mU.TEXTURE_SKYBOX_MODE = 5, mU.TEXTURE_INVCUBIC_MODE = 6, mU.TEXTURE_EQUIRECTANGULAR_MODE = 7, mU.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, mU.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, mU.SCALEMODE_FLOOR = 1, mU.SCALEMODE_NEAREST = 2, mU.SCALEMODE_CEILING = 3
  },
  39358: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU
    });
    var tU = gU(39324);
    class pU {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(UU) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = UU, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, UU && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, tU.b)(UU.format))
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
        const RU = this._textures[UU],
          gU = this._layerIndices?.[UU] ?? 0,
          tU = this._faceIndices?.[UU] ?? 0;
        return RU.isCube ? 6 * gU + tU : RU.is3D ? 0 : gU
      }
      get samples() {
        return this._samples
      }
      setSamples(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === UU && !gU) return UU;
        const tU = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, UU, RU) : this._engine.updateRenderTargetTextureSampleCount(this, UU);
        return this._samples = UU, tU
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(UU, RU, gU, tU, pU) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = UU, this._isCube = RU, this._size = gU, this._engine = tU, this._depthStencilTexture = null, this.label = pU
      }
      setTextures(UU) {
        Array.isArray(UU) ? this._textures = UU : this._textures = UU ? [UU] : null
      }
      setTexture(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[RU] !== UU && (this._textures[RU] && gU && this._textures[RU].dispose(), this._textures[RU] = UU)
      }
      setLayerAndFaceIndices(UU, RU) {
        this._layerIndices = UU, this._faceIndices = RU
      }
      setLayerAndFaceIndex() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== RU && RU >= 0 && (this._layerIndices[UU] = RU), void 0 !== gU && gU >= 0 && (this._faceIndices[UU] = gU)
      }
      createDepthStencilTexture() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = gU, this._depthStencilTextureLabel = EU, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: RU,
          comparisonFunction: UU,
          generateStencil: gU,
          isCube: this._isCube,
          samples: tU,
          depthTextureFormat: pU,
          label: EU
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
          const RU = this.textures;
          if (RU && RU.length > 0) {
            let gU = !1,
              tU = RU.length,
              pU = -1;
            const EU = RU[RU.length - 1]._source;
            14 !== EU && 12 !== EU || (gU = !0, pU = RU[RU.length - 1].format, tU--);
            const PU = [],
              TU = [],
              qU = [],
              KU = [],
              cU = [],
              GU = [],
              jU = [],
              uU = {};
            for (let UU = 0; UU < tU; ++UU) {
              const gU = RU[UU];
              PU.push(gU.samplingMode), TU.push(gU.type), qU.push(gU.format);
              void 0 !== uU[gU.uniqueId] ? (KU.push(-1), jU.push(0)) : (uU[gU.uniqueId] = UU, gU.is2DArray ? (KU.push(35866), jU.push(gU.depth)) : gU.isCube ? (KU.push(34067), jU.push(0)) : gU.is3D ? (KU.push(32879), jU.push(gU.depth)) : (KU.push(3553), jU.push(0))), this._faceIndices && cU.push(this._faceIndices[UU] ?? 0), this._layerIndices && GU.push(this._layerIndices[UU] ?? 0)
            }
            const CU = {
                samplingModes: PU,
                generateMipMaps: RU[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: gU,
                depthTextureFormat: pU,
                types: TU,
                formats: qU,
                qPU: tU,
                targetTypes: KU,
                faceIndex: cU,
                layerIndex: GU,
                layerCounts: jU,
                label: this.label
              },
              hU = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            UU = this._engine.createMultipleRenderTarget(hU, CU);
            for (let QU = 0; QU < tU; ++QU) {
              if (-1 !== KU[QU]) continue;
              const gU = uU[RU[QU].uniqueId];
              UU.setTexture(UU.textures[gU], QU)
            }
          }
        } else {
          const RU = {};
          if (RU.generateDepthBuffer = this._generateDepthBuffer, RU.generateMipMaps = this.texture?.generateMipMaps ?? !1, RU.generateStencilBuffer = this._generateStencilBuffer, RU.samplingMode = this.texture?.samplingMode, RU.type = this.texture?.type, RU.format = this.texture?.format, RU.noColorAttachment = !this._textures, RU.label = this.label, this.isCube) UU = this._engine.createRenderTargetCubeTexture(this.width, RU);
          else {
            const gU = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            UU = this._engine.createRenderTargetTexture(gU, RU)
          }
          UU.texture && (UU.texture.isReady = !0)
        }
        return UU
      }
      _swapRenderTargetWrapper(UU) {
        if (this._textures && UU._textures)
          for (let RU = 0; RU < this._textures.length; ++RU) this._textures[RU]._swapAndDie(UU._textures[RU], !1), UU._textures[RU].isReady = !0;
        this._depthStencilTexture && UU._depthStencilTexture && (this._depthStencilTexture._swapAndDie(UU._depthStencilTexture), UU._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const UU = this._cloneRenderTargetWrapper();
        if (UU) {
          if (this._depthStencilTexture) {
            const RU = this._depthStencilTexture.samplingMode,
              gU = this._depthStencilTexture.format,
              tU = 2 === RU || 3 === RU || 11 === RU;
            UU.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, tU, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, gU, this._depthStencilTextureLabel)
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
  39804: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      static get ForceFullSceneLoadingForIncremental() {
        return tU._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(UU) {
        tU._ForceFullSceneLoadingForIncremental = UU
      }
      static get ShowLoadingScreen() {
        return tU._ShowLoadingScreen
      }
      static set ShowLoadingScreen(UU) {
        tU._ShowLoadingScreen = UU
      }
      static get loggingLevel() {
        return tU._LoggingLevel
      }
      static set loggingLevel(UU) {
        tU._LoggingLevel = UU
      }
      static get CleanBoneMatrixWeights() {
        return tU._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(UU) {
        tU._CleanBoneMatrixWeights = UU
      }
    }
    tU._ForceFullSceneLoadingForIncremental = !1, tU._ShowLoadingScreen = !0, tU._CleanBoneMatrixWeights = !1, tU._LoggingLevel = 0
  },
  39452: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(38236);
    const pU = new Map;

    function EU(UU, RU) {
      (function(UU) {
        return pU.delete(UU)
      })(UU) && tU.e.Warn(`Extension with the name '${UU}' already exists`), pU.set(UU, RU)
    }

    function PU(UU, RU) {
      "image/ktx" !== RU && "image/ktx2" !== RU || (UU = ".ktx"), pU.has(UU) || (UU.endsWith(".ies") && EU(".ies", (async () => await gU.e(299).then((() => gU(41116))).then((UU => new UU._IESTextureLoader)))), UU.endsWith(".dds") && EU(".dds", (async () => await gU.e(297).then((() => gU(41125))).then((UU => new UU._DDSTextureLoader)))), UU.endsWith(".basis") && EU(".basis", (async () => await gU.e(300).then((() => gU(41134))).then((UU => new UU._BasisTextureLoader)))), UU.endsWith(".env") && EU(".env", (async () => await Promise.all([gU.e(301), gU.e(298)]).then((() => gU(41138))).then((UU => new UU._ENVTextureLoader)))), UU.endsWith(".hdr") && EU(".hdr", (async () => await gU.e(302).then((() => gU(41191))).then((UU => new UU._HDRTextureLoader)))), (UU.endsWith(".ktx") || UU.endsWith(".ktx2")) && (EU(".ktx", (async () => await gU.e(303).then((() => gU(41194))).then((UU => new UU._KTXTextureLoader)))), EU(".ktx2", (async () => await gU.e(303).then((() => gU(41194))).then((UU => new UU._KTXTextureLoader))))), UU.endsWith(".tga") && EU(".tga", (async () => await gU.e(304).then((() => gU(41207))).then((UU => new UU._TGATextureLoader)))), UU.endsWith(".exr") && EU(".exr", (async () => await gU.e(305).then((() => gU(41214))).then((UU => new UU._ExrTextureLoader)))));
      const tU = pU.get(UU);
      return tU ? Promise.resolve(tU(RU)) : null
    }
  },
  39826: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => KU
    });
    var tU = gU(39676),
      pU = gU(39402),
      EU = gU(36639);
    class PU extends tU.c {
      get x_() {
        return this._subMaterials
      }
      set x_(UU) {
        this._subMaterials = UU, this._hookArray(UU)
      }
      getChildren() {
        return this.x_
      }
      constructor(UU, RU) {
        super(UU, RU, !0), this._waitingSubMaterialsUniqueIds = [], this.aZ().addMultiMaterial(this), this.x_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(UU) {
        var RU = this;
        const gU = UU.push;
        UU.push = function() {
          for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
          const PU = gU.apply(UU, pU);
          return RU._markAllSubMeshesAsTexturesDirty(), PU
        };
        const tU = UU.splice;
        UU.splice = (RU, gU) => {
          const pU = tU.call(UU, RU, gU ?? UU.length);
          return this._markAllSubMeshesAsTexturesDirty(), pU
        }
      }
      getSubMaterial(UU) {
        return UU < 0 || UU >= this.x_.length ? this.aZ().defaultMaterial : this.x_[UU]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.x_.map((UU => UU ? UU.getActiveTextures() : [])))
      }
      hasTexture(UU) {
        if (super.hasTexture(UU)) return !0;
        for (let RU = 0; RU < this.x_.length; RU++)
          if (this.x_[RU]?.hasTexture(UU)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(UU, RU, gU) {
        for (let tU = 0; tU < this.x_.length; tU++) {
          const pU = this.x_[tU];
          if (pU) {
            if (pU._storeEffectOnSubMeshes) {
              if (!pU.isReadyForSubMesh(UU, RU, gU)) return !1;
              continue
            }
            if (!pU.isReady(UU)) return !1
          }
        }
        return !0
      }
      clone(UU, RU) {
        const gU = new PU(UU, this.aZ());
        for (let tU = 0; tU < this.x_.length; tU++) {
          let pU;
          const EU = this.x_[tU];
          pU = RU && EU ? EU.clone(UU + "-" + EU.name) : this.x_[tU], gU.x_.push(pU)
        }
        return gU
      }
      serialize() {
        const UU = {};
        UU.name = this.name, UU.id = this.id, UU.uniqueId = this.uniqueId, pU.d && (UU.tags = pU.d.GetTags(this)), UU.materialsUniqueIds = [], UU.materials = [];
        for (let RU = 0; RU < this.x_.length; RU++) {
          const gU = this.x_[RU];
          gU ? (UU.materialsUniqueIds.push(gU.uniqueId), UU.materials.push(gU.id)) : (UU.materialsUniqueIds.push(null), UU.materials.push(null))
        }
        return UU
      }
      dispose(UU, RU, gU) {
        const tU = this.aZ();
        if (!tU) return;
        if (gU)
          for (let EU = 0; EU < this.x_.length; EU++) {
            const gU = this.x_[EU];
            gU && gU.dispose(UU, RU)
          }
        const pU = tU.multiMaterials.indexOf(this);
        pU >= 0 && tU.multiMaterials.splice(pU, 1), super.dispose(UU, RU)
      }
    }
    let TU = !1;

    function qU(UU, RU) {
      const gU = new PU(UU.name, RU);
      if (gU.id = UU.id, gU._loadedUniqueId = UU.uniqueId, pU.d && pU.d.AddTagsTo(gU, UU.tags), UU.materialsUniqueIds) gU._waitingSubMaterialsUniqueIds = UU.materialsUniqueIds;
      else
        for (const tU of UU.materials) gU.x_.push(RU.getLastMaterialById(tU));
      return gU
    }

    function KU() {
      TU || (TU = !0, PU.ParseMultiMaterial = qU, (0, EU.g)("BABYLON.MultiMaterial", PU))
    }
  },
  39613: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU, pU, EU = gU(36600);
    ! function(UU) {
      UU[UU.LOCAL = 0] = "LOCAL", UU[UU.WORLD = 1] = "WORLD", UU[UU.BONE = 2] = "BONE"
    }(tU || (tU = {}));
    class PU {}
    PU.X = new EU.n(1, 0, 0), PU.Y = new EU.n(0, 1, 0), PU.Z = new EU.n(0, 0, 1),
      function(UU) {
        UU[UU.X = 0] = "X", UU[UU.Y = 1] = "Y", UU[UU.Z = 2] = "Z"
      }(pU || (pU = {}))
  },
  39364: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU,
      c: () => KU
    });
    var tU = gU(36600);
    const pU = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      EU = [() => 1, UU => UU.y, UU => UU.z, UU => UU.x, UU => UU.x * UU.y, UU => UU.y * UU.z, UU => 3 * UU.z * UU.z - 1, UU => UU.x * UU.z, UU => UU.x * UU.x - UU.y * UU.y],
      PU = (UU, RU) => pU[UU] * EU[UU](RU),
      TU = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class qU {
      constructor() {
        this.preScaled = !1, this.l00 = tU.n.Zero(), this.l1_1 = tU.n.Zero(), this.l10 = tU.n.Zero(), this.l11 = tU.n.Zero(), this.l2_2 = tU.n.Zero(), this.l2_1 = tU.n.Zero(), this.l20 = tU.n.Zero(), this.l21 = tU.n.Zero(), this.l22 = tU.n.Zero()
      }
      addLight(UU, RU, gU) {
        tU.h.xC[0].set(RU.r, RU.g, RU.b);
        const pU = tU.h.xC[0],
          EU = tU.h.xC[1];
        pU.scaleToRef(gU, EU), EU.scaleToRef(PU(0, UU), tU.h.xC[2]), this.l00.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(1, UU), tU.h.xC[2]), this.l1_1.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(2, UU), tU.h.xC[2]), this.l10.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(3, UU), tU.h.xC[2]), this.l11.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(4, UU), tU.h.xC[2]), this.l2_2.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(5, UU), tU.h.xC[2]), this.l2_1.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(6, UU), tU.h.xC[2]), this.l20.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(7, UU), tU.h.xC[2]), this.l21.addInPlace(tU.h.xC[2]), EU.scaleToRef(PU(8, UU), tU.h.xC[2]), this.l22.addInPlace(tU.h.xC[2])
      }
      scaleInPlace(UU) {
        this.l00.scaleInPlace(UU), this.l1_1.scaleInPlace(UU), this.l10.scaleInPlace(UU), this.l11.scaleInPlace(UU), this.l2_2.scaleInPlace(UU), this.l2_1.scaleInPlace(UU), this.l20.scaleInPlace(UU), this.l21.scaleInPlace(UU), this.l22.scaleInPlace(UU)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(TU[0]), this.l1_1.scaleInPlace(TU[1]), this.l10.scaleInPlace(TU[2]), this.l11.scaleInPlace(TU[3]), this.l2_2.scaleInPlace(TU[4]), this.l2_1.scaleInPlace(TU[5]), this.l20.scaleInPlace(TU[6]), this.l21.scaleInPlace(TU[7]), this.l22.scaleInPlace(TU[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(pU[0]), this.l1_1.scaleInPlace(pU[1]), this.l10.scaleInPlace(pU[2]), this.l11.scaleInPlace(pU[3]), this.l2_2.scaleInPlace(pU[4]), this.l2_1.scaleInPlace(pU[5]), this.l20.scaleInPlace(pU[6]), this.l21.scaleInPlace(pU[7]), this.l22.scaleInPlace(pU[8])
      }
      updateFromArray(UU) {
        return tU.n.FromArrayToRef(UU[0], 0, this.l00), tU.n.FromArrayToRef(UU[1], 0, this.l1_1), tU.n.FromArrayToRef(UU[2], 0, this.l10), tU.n.FromArrayToRef(UU[3], 0, this.l11), tU.n.FromArrayToRef(UU[4], 0, this.l2_2), tU.n.FromArrayToRef(UU[5], 0, this.l2_1), tU.n.FromArrayToRef(UU[6], 0, this.l20), tU.n.FromArrayToRef(UU[7], 0, this.l21), tU.n.FromArrayToRef(UU[8], 0, this.l22), this
      }
      updateFromFloatsArray(UU) {
        return tU.n.FromFloatsToRef(UU[0], UU[1], UU[2], this.l00), tU.n.FromFloatsToRef(UU[3], UU[4], UU[5], this.l1_1), tU.n.FromFloatsToRef(UU[6], UU[7], UU[8], this.l10), tU.n.FromFloatsToRef(UU[9], UU[10], UU[11], this.l11), tU.n.FromFloatsToRef(UU[12], UU[13], UU[14], this.l2_2), tU.n.FromFloatsToRef(UU[15], UU[16], UU[17], this.l2_1), tU.n.FromFloatsToRef(UU[18], UU[19], UU[20], this.l20), tU.n.FromFloatsToRef(UU[21], UU[22], UU[23], this.l21), tU.n.FromFloatsToRef(UU[24], UU[25], UU[26], this.l22), this
      }
      static FromArray(UU) {
        return (new qU).updateFromArray(UU)
      }
      static FromPolynomial(UU) {
        const RU = new qU;
        return RU.l00 = UU.xx.scale(.376127).add(UU.yy.scale(.376127)).add(UU.zz.scale(.376126)), RU.l1_1 = UU.y.scale(.977204), RU.l10 = UU.z.scale(.977204), RU.l11 = UU.x.scale(.977204), RU.l2_2 = UU.xy.scale(1.16538), RU.l2_1 = UU.yz.scale(1.16538), RU.l20 = UU.zz.scale(1.34567).subtract(UU.xx.scale(.672834)).subtract(UU.yy.scale(.672834)), RU.l21 = UU.zx.scale(1.16538), RU.l22 = UU.xx.scale(1.16538).subtract(UU.yy.scale(1.16538)), RU.l1_1.scaleInPlace(-1), RU.l11.scaleInPlace(-1), RU.l2_1.scaleInPlace(-1), RU.l21.scaleInPlace(-1), RU.scaleInPlace(Math.PI), RU
      }
    }
    class KU {
      constructor() {
        this.x = tU.n.Zero(), this.y = tU.n.Zero(), this.z = tU.n.Zero(), this.xx = tU.n.Zero(), this.yy = tU.n.Zero(), this.zz = tU.n.Zero(), this.xy = tU.n.Zero(), this.yz = tU.n.Zero(), this.zx = tU.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = qU.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(UU) {
        tU.h.xC[0].b_(UU.r, UU.g, UU.b);
        const RU = tU.h.xC[0];
        this.xx.addInPlace(RU), this.yy.addInPlace(RU), this.zz.addInPlace(RU)
      }
      scaleInPlace(UU) {
        this.x.scaleInPlace(UU), this.y.scaleInPlace(UU), this.z.scaleInPlace(UU), this.xx.scaleInPlace(UU), this.yy.scaleInPlace(UU), this.zz.scaleInPlace(UU), this.yz.scaleInPlace(UU), this.zx.scaleInPlace(UU), this.xy.scaleInPlace(UU)
      }
      updateFromHarmonics(UU) {
        return this._harmonics = UU, this.x.PgU(UU.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.PgU(UU.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.PgU(UU.l10), this.z.scaleInPlace(1.02333), this.xx.PgU(UU.l00), tU.h.xC[0].PgU(UU.l20).scaleInPlace(.247708), tU.h.xC[1].PgU(UU.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).ptU(tU.h.xC[0]).addInPlace(tU.h.xC[1]), this.yy.PgU(UU.l00), this.yy.scaleInPlace(.886277).ptU(tU.h.xC[0]).ptU(tU.h.xC[1]), this.zz.PgU(UU.l00), tU.h.xC[0].PgU(UU.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(tU.h.xC[0]), this.yz.PgU(UU.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.PgU(UU.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.PgU(UU.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(UU) {
        return (new KU).updateFromHarmonics(UU)
      }
      static FromArray(UU) {
        const RU = new KU;
        return tU.n.FromArrayToRef(UU[0], 0, RU.x), tU.n.FromArrayToRef(UU[1], 0, RU.y), tU.n.FromArrayToRef(UU[2], 0, RU.z), tU.n.FromArrayToRef(UU[3], 0, RU.xx), tU.n.FromArrayToRef(UU[4], 0, RU.yy), tU.n.FromArrayToRef(UU[5], 0, RU.zz), tU.n.FromArrayToRef(UU[6], 0, RU.yz), tU.n.FromArrayToRef(UU[7], 0, RU.zx), tU.n.FromArrayToRef(UU[8], 0, RU.xy), RU
      }
    }
  },
  39817: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => BU,
      h: () => rU
    });
    var tU = gU(39377),
      pU = gU(36624),
      EU = gU(36600),
      PU = gU(39517),
      TU = gU(39792),
      qU = gU(39823),
      KU = gU(39513),
      cU = gU(39698),
      GU = gU(39504);
    class jU {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new EU.n(0, 0, 0), this._diffPositionForCollisions = new EU.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var uU, CU, hU, QU = gU(39256),
      eU = gU(39442),
      WU = gU(39708),
      fU = gU(36761),
      xU = gU(36602),
      mU = gU(39613),
      IU = gU(38236),
      JU = gU(39380),
      wU = gU(39272),
      nU = gU(36639);

    function bU(UU, RU) {
      return UU - Math.floor(UU / RU) * RU
    }

    function oU(UU, RU, gU) {
      UU instanceof Float32Array ? EU.c.FromArrayToRef(UU, RU, gU) : gU.b_((0, eU.c)(UU[RU]), (0, eU.c)(UU[RU + 1]), (0, eU.c)(UU[RU + 2]), (0, eU.c)(UU[RU + 3]), (0, eU.c)(UU[RU + 4]), (0, eU.c)(UU[RU + 5]), (0, eU.c)(UU[RU + 6]), (0, eU.c)(UU[RU + 7]), (0, eU.c)(UU[RU + 8]), (0, eU.c)(UU[RU + 9]), (0, eU.c)(UU[RU + 10]), (0, eU.c)(UU[RU + 11]), (0, eU.c)(UU[RU + 12]), (0, eU.c)(UU[RU + 13]), (0, eU.c)(UU[RU + 14]), (0, eU.c)(UU[RU + 15]))
    }

    function ZU(UU, RU, gU, tU, pU, TU, qU, KU, cU) {
      const GU = gU.texture,
        jU = GU?.getInternalTexture(),
        uU = jU?._bufferView;
      if (!(uU instanceof Float32Array) && !(uU instanceof Uint16Array)) return IU.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const CU = GU.getSize(),
        hU = function(UU, RU) {
          const gU = UU.y - UU.x + 1,
            tU = RU * UU.w / gU,
            pU = tU < 1 ? 0 : 1,
            EU = gU - pU;
          let PU = bU(tU - Math.floor(tU), 1) * EU;
          return PU = bU(PU + UU.z, EU), Math.floor(PU) + UU.x + pU
        }(tU, gU.time);
      if (!isFinite(hU) || hU < 0 || hU >= CU.height) return IU.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const QU = EU.h.xC[0],
        eU = EU.h.Matrix[0],
        WU = EU.h.Matrix[1],
        fU = hU * CU.width * 4,
        xU = RU === PU.l.NormalKind ? EU.n.TransformNormalFromFloatsToRef : EU.n.TransformCoordinatesFromFloatsToRef;
      for (let EU = 0, PU = 0; EU < UU.length; EU += 3, PU += 4) {
        let RU, gU;
        for (eU.reset(), RU = 0; RU < 4 && RU < cU; RU++) gU = TU[PU + RU], gU > 0 && (oU(uU, fU + 16 * Math.floor(pU[PU + RU]), WU), WU.scaleAndAddToRef(gU, eU));
        if (qU && KU)
          for (RU = 0; RU < 4 && RU + 4 < cU; RU++) gU = KU[PU + RU], gU > 0 && (oU(uU, fU + 16 * Math.floor(qU[PU + RU]), WU), WU.scaleAndAddToRef(gU, eU));
        xU(UU[EU], UU[EU + 1], UU[EU + 2], eU, QU), QU.toArray(UU, EU)
      }
      return !0
    }
    class aU {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = EU.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class YU {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new aU, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new jU, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let BU = (() => {
        var UU;
        let RU, jU = qU.e,
          uU = [];
        return UU = class extends jU {
          static get BILLBOARDMODE_NONE() {
            return qU.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return qU.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return qU.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return qU.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return qU.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return qU.e.BILLBOARDMODE_USE_POSITION
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
          set Rj(UU) {
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
            const RU = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = UU, (1 === RU && 1 !== UU || 1 !== RU && 1 === UU) && this._markSubMeshesAsDirty((UU => {
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
            this._internalAbstractMeshDataInfo._material !== UU && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = UU, UU && UU.meshMap && (UU.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.ZI && (this.resetDrawCache(void 0, null == UU), this._unBindEffect()))
          }
          getMaterialForRenderPass(UU) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[UU]
          }
          setMaterialForRenderPass(UU, RU) {
            this.resetDrawCache(UU), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const gU = this._internalAbstractMeshDataInfo._materialForRenderPass[UU];
            gU?.meshMap?.[this.uniqueId] && (gU.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[UU] = RU, RU && RU.meshMap && (RU.meshMap[this.uniqueId] = this)
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
            const RU = this._internalAbstractMeshDataInfo._skeleton;
            RU && RU.needInitialSkinMatrix && RU._unregisterMeshWithPoseMatrix(this), UU && UU.needInitialSkinMatrix && UU._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = UU, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(RU) {
            var gU;
            let tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(RU, tU, !1), gU = this, this._internalAbstractMeshDataInfo = new YU, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = UU.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new pU.b, this.onCollisionPositionChangeObservable = new pU.b, this.onMaterialChangedObservable = new pU.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Yh = UU.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = fU.e.Red(), this.outlineWidth = .02, this.overlayColor = fU.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.fC = !1, this.IC = !1, this.actionManager = null, this.ellipsoid = new EU.n(.5, 1, .5), this.ellipsoidOffset = new EU.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new fU.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                pY: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new pU.b, this._onCollisionPositionChange = function(UU, RU) {
                let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                RU.subtractToRef(gU._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, gU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), gU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > wU.d.CollisionsEpsilon && gU.position.addInPlace(gU._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), tU && gU.onCollideObservable.notifyObservers(tU), gU.onCollisionPositionChangeObservable.notifyObservers(gU.position)
              }, tU = this.aZ(), this.layerMask = tU.defaultRenderableLayerMask, tU.HgU(this), this._resyncLightSources(), this._uniformBuffer = new GU.c(this.aZ().WC(), void 0, void 0, RU, !this.aZ().WC().isWebGPU), this._buildUniformLayout(), tU.performancePriority) {
              case 2:
                this.IC = !0;
              case 1:
                this.fC = !0, this.Yh = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(UU) {
            const RU = this._uniformBuffer;
            RU.p_("world", UU), RU.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), RU.update()
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
            let RU = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            RU += ", # of submeshes: " + (this.ZI ? this.ZI.length : 0);
            const gU = this._internalAbstractMeshDataInfo._skeleton;
            return gU && (RU += ", skeleton: " + gU.name), UU && (RU += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], RU += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.pY ? "YES" : "NO")), RU
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== qU.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(UU) {
            let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (RU || this.actionManager.isRecursive)) {
              if (!UU) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(UU)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(UU, !1) : null
          }
          _releaseRenderPassId(UU) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.ZI) {
              for (const UU of this.ZI) UU._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const UU of this.aZ().lights) UU.isEnabled() && UU.canAffectMesh(this) && this._lightSources.push(UU);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(UU) {
            const RU = UU.isEnabled() && UU.canAffectMesh(this),
              gU = this._lightSources.indexOf(UU);
            let tU = !1;
            if (-1 === gU) {
              if (!RU) return;
              this._lightSources.push(UU)
            } else {
              if (RU) return;
              tU = !0, this._lightSources.splice(gU, 1)
            }
            this._markSubMeshesAsLightDirty(tU)
          }
          _unBindEffect() {
            for (const UU of this.ZI) UU.setEffect(null)
          }
          _removeLightSource(UU, RU) {
            const gU = this._lightSources.indexOf(UU); - 1 !== gU && (this._lightSources.splice(gU, 1), this._markSubMeshesAsLightDirty(RU))
          }
          _markSubMeshesAsDirty(UU) {
            if (this.ZI)
              for (const RU of this.ZI)
                for (let gU = 0; gU < RU._drawWrappers.length; ++gU) {
                  const tU = RU._drawWrappers[gU];
                  tU && tU.defines && tU.defines.markAllAsDirty && UU(tU.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((RU => RU.markAsLightDirty(UU)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((UU => UU.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((UU => UU.markAsMiscDirty()))
          }
          cRU(UU) {
            return this._currentRenderId = Number.MAX_VALUE, super.cRU(UU), this._isDirty = !0, this
          }
          resetDrawCache(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.ZI)
              for (const gU of this.ZI) gU.resetDrawCache(UU, RU)
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
          dgU() {
            return null
          }
          getVerticesData(UU) {
            return null
          }
          setVerticesData(UU, RU, gU, tU) {
            return this
          }
          updateVerticesData(UU, RU, gU, tU) {
            return this
          }
          setIndices(UU, RU) {
            return this
          }
          isVerticesDataPresent(UU) {
            return !1
          }
          lY() {
            return this._masterMesh ? this._masterMesh.lY() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.lY()
          }
          setBoundingInfo(UU) {
            return this._boundingInfo = UU, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(UU, RU, gU) {
            return this._boundingInfo = new cU.d(UU, RU, gU), this._boundingInfo
          }
          normalizeToUnitCube() {
            let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(UU, RU, gU)
          }
          get useBones() {
            return this.skeleton && this.aZ().skeletonsEnabled && this.isVerticesDataPresent(PU.l.MatricesIndicesKind) && this.isVerticesDataPresent(PU.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(UU) {}
          _activate(UU, RU) {
            return this._renderId = UU, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === qU.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get sZ() {
            return !1
          }
          get BtU() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(UU, RU, gU) {
            return this.position.addInPlace(this.calcMovePOV(UU, RU, gU)), this
          }
          calcMovePOV(UU, RU, gU) {
            const tU = new EU.c;
            (this.rotationQuaternion ? this.rotationQuaternion : EU.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(tU);
            const pU = EU.n.Zero(),
              PU = this.definedFacingForward ? -1 : 1;
            return EU.n.TransformCoordinatesFromFloatsToRef(UU * PU, RU, gU * PU, tU, pU), pU
          }
          rotatePOV(UU, RU, gU) {
            return this.rotation.addInPlace(this.calcRotatePOV(UU, RU, gU)), this
          }
          calcRotatePOV(UU, RU, gU) {
            const tU = this.definedFacingForward ? 1 : -1;
            return new EU.n(UU * tU, RU, gU * tU)
          }
          _refreshBoundingInfo(UU, RU) {
            if (UU) {
              const gU = (0, WU.f)(UU, 0, this.getTotalVertices(), RU);
              this._boundingInfo ? this._boundingInfo.reConstruct(gU.minimum, gU.maximum) : this._boundingInfo = new cU.d(gU.minimum, gU.maximum)
            }
            if (this.ZI)
              for (let gU = 0; gU < this.ZI.length; gU++) this.ZI[gU].refreshBoundingInfo(UU);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(UU) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(UU.minimum, UU.maximum) : this._boundingInfo = new cU.d(UU.minimum, UU.maximum), this.ZI)
              for (let RU = 0; RU < this.ZI.length; RU++) this.ZI[RU].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(UU, RU, gU, tU, pU, TU, qU) {
            ! function(UU, RU, gU, tU, pU, TU, qU) {
              const KU = EU.h.xC[0],
                cU = EU.h.Matrix[0],
                GU = EU.h.Matrix[1],
                jU = RU === PU.l.NormalKind ? EU.n.TransformNormalFromFloatsToRef : EU.n.TransformCoordinatesFromFloatsToRef;
              for (let PU = 0, uU = 0; PU < UU.length; PU += 3, uU += 4) {
                let RU, CU;
                for (cU.reset(), RU = 0; RU < 4; RU++) CU = pU[uU + RU], CU > 0 && (EU.c.FromFloat32ArrayToRefScaled(gU, Math.floor(16 * tU[uU + RU]), CU, GU), cU.addToSelf(GU));
                if (TU && qU)
                  for (RU = 0; RU < 4; RU++) CU = qU[uU + RU], CU > 0 && (EU.c.FromFloat32ArrayToRefScaled(gU, Math.floor(16 * TU[uU + RU]), CU, GU), cU.addToSelf(GU));
                jU(UU[PU], UU[PU + 1], UU[PU + 2], cU, KU), KU.toArray(UU, PU)
              }
            }(UU, RU, gU, tU, pU, TU, qU)
          }
          _getData(RU, gU) {
            let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PU.l.PositionKind;
            const pU = RU.cache,
              TU = UU => {
                if (pU) {
                  const RU = pU._vertexData || (pU._vertexData = {});
                  return RU[UU] || this.copyVerticesData(UU, RU), RU[UU]
                }
                return this.getVerticesData(UU)
              };
            if (gU || (gU = TU(tU)), !gU) return null;
            pU ? (pU._outputData ? pU._outputData.set(gU) : pU._outputData = new Float32Array(gU), gU = pU._outputData) : (RU.applyMorph && this.morphTargetManager || RU.applySkeleton && this.skeleton || RU.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (gU = gU.slice()), RU.applyMorph && this.morphTargetManager && function(UU, RU, gU) {
              let tU;
              switch (RU) {
                case PU.l.PositionKind:
                  tU = UU => UU.getPositions();
                  break;
                case PU.l.NormalKind:
                  tU = UU => UU.getNormals();
                  break;
                case PU.l.TangentKind:
                  tU = UU => UU.getTangents();
                  break;
                case PU.l.UVKind:
                  tU = UU => UU.getUVs();
                  break;
                case PU.l.UV2Kind:
                  tU = UU => UU.getUV2s();
                  break;
                case PU.l.ColorKind:
                  tU = UU => UU.getColors();
                  break;
                default:
                  return
              }
              for (let pU = 0; pU < UU.length; pU++) {
                let RU = UU[pU];
                for (let EU = 0; EU < gU.numTargets; EU++) {
                  const PU = gU.getTarget(EU),
                    TU = PU.influence;
                  if (0 !== TU) {
                    const gU = tU(PU);
                    gU && (RU += (gU[pU] - UU[pU]) * TU)
                  }
                }
                UU[pU] = RU
              }
            }(gU, tU, this.morphTargetManager);
            const qU = this.bakedVertexAnimationManager;
            let KU = !1;
            if (RU.applyBakedVertexAnimation && qU?.isEnabled) {
              const UU = TU(PU.l.MatricesIndicesKind),
                pU = TU(PU.l.MatricesWeightsKind);
              if (pU && UU) {
                const EU = this.numBoneInfluencers > 4,
                  cU = EU ? TU(PU.l.MatricesIndicesExtraKind) : null,
                  GU = EU ? TU(PU.l.MatricesWeightsExtraKind) : null;
                KU = ZU(gU, tU, qU, RU.bakedVertexAnimationSettings ?? qU.animationParameters, UU, pU, cU, GU, this.numBoneInfluencers)
              }
            }
            if (!KU && RU.applySkeleton && this.skeleton) {
              const RU = TU(PU.l.MatricesIndicesKind),
                pU = TU(PU.l.MatricesWeightsKind);
              if (pU && RU) {
                const EU = this.numBoneInfluencers > 4,
                  qU = EU ? TU(PU.l.MatricesIndicesExtraKind) : null,
                  KU = EU ? TU(PU.l.MatricesWeightsExtraKind) : null,
                  cU = this.skeleton.getTransformMatrices(this);
                UU._ApplySkeleton(gU, tU, cU, RU, pU, qU, KU)
              }
            }
            if (!1 !== RU.updatePositionsArray && tU === PU.l.PositionKind) {
              const UU = this._internalAbstractMeshDataInfo._positions || [],
                RU = UU.length;
              if (UU.length = gU.length / 3, RU < UU.length)
                for (let gU = RU; gU < UU.length; gU++) UU[gU] = new EU.n;
              for (let tU = 0, pU = 0; tU < UU.length; tU++, pU += 3) UU[tU].b_(gU[pU], gU[pU + 1], gU[pU + 2]);
              this._internalAbstractMeshDataInfo._positions = UU
            }
            return gU
          }
          getNormalsData() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: UU,
              applyMorph: RU,
              updatePositionsArray: !1
            }, null, PU.l.NormalKind)
          }
          Hk() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: UU,
              applyMorph: RU,
              updatePositionsArray: !1
            }, gU, PU.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new cU.d(EU.n.Zero(), EU.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(UU) {
            if (!this.ZI) return this;
            const RU = this.ZI.length;
            for (let gU = 0; gU < RU; gU++) {
              const tU = this.ZI[gU];
              (RU > 1 || !tU.IsGlobal) && tU.updateBoundingInfo(UU)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.IC || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(UU) {
            return this.lY().isInFrustum(UU, this.cullingStrategy)
          }
          isCompletelyInFrustum(UU) {
            return this.lY().isCompletelyInFrustum(UU)
          }
          JtU(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = arguments.length > 2 ? arguments[2] : void 0;
            const tU = this.lY(),
              pU = UU.lY();
            if (tU.intersects(pU, RU)) return !0;
            if (gU)
              for (const EU of this.getChildMeshes())
                if (EU.JtU(UU, RU, !0)) return !0;
            return !1
          }
          intersectsPoint(UU) {
            return this.lY().intersectsPoint(UU)
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
            let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const gU = this.aZ().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = gU.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, gU.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, UU, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, RU), this
          }
          _collideForSubMesh(UU, RU, gU) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!UU._lastColliderWorldVertices || !UU._lastColliderTransformMatrix.equals(RU)) {
              UU._lastColliderTransformMatrix = RU.clone(), UU._lastColliderWorldVertices = [], UU._trianglePlanes = [];
              const gU = UU.verticesStart,
                tU = UU.verticesStart + UU.verticesCount;
              for (let pU = gU; pU < tU; pU++) UU._lastColliderWorldVertices.push(EU.n.TransformCoordinates(this._positions[pU], RU))
            }
            return gU._collide(UU._trianglePlanes, UU._lastColliderWorldVertices, this.dgU(), UU.indexStart, UU.indexStart + UU.indexCount, UU.verticesStart, !!UU.JC(), this, this._shouldConvertRHS(), 7 === UU.JC()?.fillMode), this
          }
          _processCollisionsForSubMeshes(UU, RU) {
            const gU = this._scene.getCollidingSubMeshCandidates(this, UU),
              tU = gU.length;
            for (let pU = 0; pU < tU; pU++) {
              const EU = gU.data[pU];
              tU > 1 && !EU._checkCollision(UU) || this._collideForSubMesh(EU, RU, UU)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(UU) {
            if (!this.lY()._checkCollision(UU)) return this;
            const RU = EU.h.Matrix[0],
              gU = EU.h.Matrix[1];
            return EU.c.ScalingToRef(1 / UU._radius.x, 1 / UU._radius.y, 1 / UU._radius.z, RU), this.worldMatrixFromCache.multiplyToRef(RU, gU), this._processCollisionsForSubMeshes(UU, gU), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(UU, RU, gU) {
            let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pU = arguments.length > 4 ? arguments[4] : void 0,
              PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const TU = new KU.b,
              qU = this.getClassName(),
              cU = "InstancedLinesMesh" === qU || "LinesMesh" === qU || "GreasedLineMesh" === qU ? this.intersectionThreshold : 0,
              GU = this.lY();
            if (!this.ZI) return TU;
            if (!PU && (!UU.intersectsSphere(GU.qtU, cU) || !UU.intersectsBox(GU.boundingBox, cU))) return TU;
            if (tU) return TU.hit = !PU, TU.pickedMesh = PU ? null : this, TU.distance = PU ? 0 : EU.n.Distance(UU.origin, GU.qtU.center), TU.subMeshId = 0, TU;
            if (!this._generatePointsArray()) return TU;
            let jU = null;
            const uU = this._scene.getIntersectingSubMeshCandidates(this, UU),
              CU = uU.length;
            let hU = !1;
            for (let EU = 0; EU < CU; EU++) {
              const UU = uU.data[EU].JC();
              if (UU && (7 == UU.fillMode || 0 == UU.fillMode || 1 == UU.fillMode || 2 == UU.fillMode || 4 == UU.fillMode)) {
                hU = !0;
                break
              }
            }
            if (!hU) return TU.hit = !0, TU.pickedMesh = this, TU.distance = EU.n.Distance(UU.origin, GU.qtU.center), TU.subMeshId = -1, TU;
            for (let EU = 0; EU < CU; EU++) {
              const tU = uU.data[EU];
              if (CU > 1 && !PU && !tU.canIntersects(UU)) continue;
              const pU = tU.intersects(UU, this._positions, this.dgU(), RU, gU);
              if (pU && (RU || !jU || pU.distance < jU.distance) && (jU = pU, jU.subMeshId = tU._id, jU._internalSubMeshId = EU, RU)) break
            }
            if (jU) {
              const RU = pU ?? this.getWorldMatrix(),
                gU = EU.h.xC[0],
                tU = EU.h.xC[1];
              EU.n.TransformCoordinatesToRef(UU.origin, RU, gU), UU.direction.scaleToRef(jU.distance, tU);
              const PU = EU.n.TransformNormal(tU, RU).addInPlace(gU);
              return TU.hit = !0, TU.distance = EU.n.Distance(gU, PU), TU.pickedPoint = PU, TU.pickedMesh = this, TU.bu = jU.bu || 0, TU.bv = jU.bv || 0, TU.subMeshFaceId = jU.faceId, TU.faceId = jU.faceId + uU.data[jU._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), TU.subMeshId = jU.subMeshId, TU
            }
            return TU
          }
          clone(UU, RU, gU) {
            return null
          }
          releaseSubMeshes() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.ZI)
              for (; this.ZI.length;) this.ZI[0].dispose(UU);
            else this.ZI = [];
            return this
          }
          dispose(UU) {
            let RU, gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const tU = this.aZ();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), tU.freeActiveMeshes(), tU.freeRenderingGroups(), tU.renderingManager.maintainStateBetweenFrames && tU.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((UU => UU !== this && UU.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), RU = 0; RU < this._intersectionsInProgress.length; RU++) {
              const UU = this._intersectionsInProgress[RU],
                gU = UU._intersectionsInProgress.indexOf(this);
              UU._intersectionsInProgress.splice(gU, 1)
            }
            this._intersectionsInProgress.length = 0;
            const pU = tU.lights;
            for (const PU of pU) {
              let UU = PU.includedOnlyMeshes.indexOf(this); - 1 !== UU && PU.includedOnlyMeshes.splice(UU, 1), UU = PU.excludedMeshes.indexOf(this), -1 !== UU && PU.excludedMeshes.splice(UU, 1);
              const RU = PU.getShadowGenerators();
              if (RU) {
                const gU = RU.values();
                for (let RU = gU.next(); !0 !== RU.done; RU = gU.next()) {
                  const gU = RU.value.getShadowMap();
                  gU && gU.renderList && (UU = gU.renderList.indexOf(this), -1 !== UU && gU.renderList.splice(UU, 1))
                }
              }
            }
            this.releaseSubMeshes(tU._isDisposing);
            const EU = tU.WC();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, EU.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), EU.wipeCaches(), tU.TY(this), this._parentContainer) {
              const UU = this._parentContainer.meshes.indexOf(this);
              UU > -1 && this._parentContainer.meshes.splice(UU, 1), this._parentContainer = null
            }
            if (gU && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !UU)
              for (RU = 0; RU < tU.vI.length; RU++) tU.vI[RU].emitter === this && (tU.vI[RU].dispose(), RU--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(UU, gU)
          }
          _initFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            UU.facetNormals || (UU.facetNormals = []), UU.facetPositions || (UU.facetPositions = []), UU.facetPartitioning || (UU.facetPartitioning = new Array), UU.facetNb = this.dgU().length / 3 | 0, UU.partitioningSubdivisions = UU.partitioningSubdivisions ? UU.partitioningSubdivisions : 10, UU.partitioningBBoxRatio = UU.partitioningBBoxRatio ? UU.partitioningBBoxRatio : 1.01;
            for (let RU = 0; RU < UU.facetNb; RU++) UU.facetNormals[RU] = EU.n.Zero(), UU.facetPositions[RU] = EU.n.Zero();
            return UU.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            UU.facetDataEnabled || this._initFacetData();
            const RU = this.getVerticesData(PU.l.PositionKind),
              gU = this.dgU(),
              tU = this.getVerticesData(PU.l.NormalKind)?.slice(),
              pU = this.lY();
            if (UU.facetDepthSort && !UU.facetDepthSortEnabled) {
              if (UU.facetDepthSortEnabled = !0, gU instanceof Uint16Array) UU.depthSortedIndices = new Uint16Array(gU);
              else if (gU instanceof Uint32Array) UU.depthSortedIndices = new Uint32Array(gU);
              else {
                let RU = !1;
                for (let UU = 0; UU < gU.length; UU++)
                  if (gU[UU] > 65535) {
                    RU = !0;
                    break
                  } UU.depthSortedIndices = RU ? new Uint32Array(gU) : new Uint16Array(gU)
              }
              if (UU.facetDepthSortFunction = function(UU, RU) {
                  return RU.sqDistance - UU.sqDistance
                }, !UU.facetDepthSortFrom) {
                const RU = this.aZ().activeCamera;
                UU.facetDepthSortFrom = RU ? RU.position : EU.n.Zero()
              }
              UU.depthSortedFacets = [];
              for (let RU = 0; RU < UU.facetNb; RU++) {
                const gU = {
                  ind: 3 * RU,
                  sqDistance: 0
                };
                UU.depthSortedFacets.push(gU)
              }
              UU.invertedMatrix = EU.c.Identity(), UU.facetDepthSortOrigin = EU.n.Zero()
            }
            UU.bbSize.x = pU.maximum.x - pU.minimum.x > xU.e ? pU.maximum.x - pU.minimum.x : xU.e, UU.bbSize.y = pU.maximum.y - pU.minimum.y > xU.e ? pU.maximum.y - pU.minimum.y : xU.e, UU.bbSize.z = pU.maximum.z - pU.minimum.z > xU.e ? pU.maximum.z - pU.minimum.z : xU.e;
            let qU = UU.bbSize.x > UU.bbSize.y ? UU.bbSize.x : UU.bbSize.y;
            if (qU = qU > UU.bbSize.z ? qU : UU.bbSize.z, UU.subDiv.max = UU.partitioningSubdivisions, UU.subDiv.X = Math.floor(UU.subDiv.max * UU.bbSize.x / qU), UU.subDiv.Y = Math.floor(UU.subDiv.max * UU.bbSize.y / qU), UU.subDiv.Z = Math.floor(UU.subDiv.max * UU.bbSize.z / qU), UU.subDiv.X = UU.subDiv.X < 1 ? 1 : UU.subDiv.X, UU.subDiv.Y = UU.subDiv.Y < 1 ? 1 : UU.subDiv.Y, UU.subDiv.Z = UU.subDiv.Z < 1 ? 1 : UU.subDiv.Z, UU.facetParameters.facetNormals = this.getFacetLocalNormals(), UU.facetParameters.facetPositions = this.getFacetLocalPositions(), UU.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), UU.facetParameters.bInfo = pU, UU.facetParameters.bbSize = UU.bbSize, UU.facetParameters.subDiv = UU.subDiv, UU.facetParameters.ratio = this.partitioningBBoxRatio, UU.facetParameters.depthSort = UU.facetDepthSort, UU.facetDepthSort && UU.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(UU.invertedMatrix), EU.n.TransformCoordinatesToRef(UU.facetDepthSortFrom, UU.invertedMatrix, UU.facetDepthSortOrigin), UU.facetParameters.distanceTo = UU.facetDepthSortOrigin), UU.facetParameters.depthSortedFacets = UU.depthSortedFacets, tU && TU.b.ComputeNormals(RU, gU, tU, UU.facetParameters), UU.facetDepthSort && UU.facetDepthSortEnabled) {
              UU.depthSortedFacets.sort(UU.facetDepthSortFunction);
              const RU = UU.depthSortedIndices.length / 3 | 0;
              for (let tU = 0; tU < RU; tU++) {
                const RU = UU.depthSortedFacets[tU].ind;
                UU.depthSortedIndices[3 * tU] = gU[RU], UU.depthSortedIndices[3 * tU + 1] = gU[RU + 1], UU.depthSortedIndices[3 * tU + 2] = gU[RU + 2]
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
            const RU = EU.n.Zero();
            return this.getFacetPositionToRef(UU, RU), RU
          }
          getFacetPositionToRef(UU, RU) {
            const gU = this.getFacetLocalPositions()[UU],
              tU = this.getWorldMatrix();
            return EU.n.TransformCoordinatesToRef(gU, tU, RU), this
          }
          getFacetNormal(UU) {
            const RU = EU.n.Zero();
            return this.getFacetNormalToRef(UU, RU), RU
          }
          getFacetNormalToRef(UU, RU) {
            const gU = this.getFacetLocalNormals()[UU];
            return EU.n.TransformNormalToRef(gU, this.getWorldMatrix(), RU), this
          }
          getFacetsAtLocalCoordinates(UU, RU, gU) {
            const tU = this.lY(),
              pU = this._internalAbstractMeshDataInfo._facetData,
              EU = Math.floor((UU - tU.minimum.x * pU.partitioningBBoxRatio) * pU.subDiv.X * pU.partitioningBBoxRatio / pU.bbSize.x),
              PU = Math.floor((RU - tU.minimum.y * pU.partitioningBBoxRatio) * pU.subDiv.Y * pU.partitioningBBoxRatio / pU.bbSize.y),
              TU = Math.floor((gU - tU.minimum.z * pU.partitioningBBoxRatio) * pU.subDiv.Z * pU.partitioningBBoxRatio / pU.bbSize.z);
            return EU < 0 || EU > pU.subDiv.max || PU < 0 || PU > pU.subDiv.max || TU < 0 || TU > pU.subDiv.max ? null : pU.facetPartitioning[EU + pU.subDiv.max * PU + pU.subDiv.max * pU.subDiv.max * TU]
          }
          getClosestFacetAtCoordinates(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const TU = this.getWorldMatrix(),
              qU = EU.h.Matrix[5];
            TU.invertToRef(qU);
            const KU = EU.h.xC[8];
            EU.n.TransformCoordinatesFromFloatsToRef(UU, RU, gU, qU, KU);
            const cU = this.getClosestFacetAtLocalCoordinates(KU.x, KU.y, KU.z, tU, pU, PU);
            return tU && EU.n.TransformCoordinatesFromFloatsToRef(tU.x, tU.y, tU.z, TU, tU), cU
          }
          getClosestFacetAtLocalCoordinates(UU, RU, gU, tU) {
            let pU, EU, PU, TU, qU, KU, cU, GU, jU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              uU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              CU = null;
            const hU = this.getFacetLocalPositions(),
              QU = this.getFacetLocalNormals(),
              eU = this.getFacetsAtLocalCoordinates(UU, RU, gU);
            if (!eU) return null;
            let WU, fU, xU, mU, IU = Number.MAX_VALUE;
            for (let JU = 0; JU < eU.length; JU++) fU = eU[JU], xU = QU[fU], mU = hU[fU], TU = (UU - mU.x) * xU.x + (RU - mU.y) * xU.y + (gU - mU.z) * xU.z, (!jU || jU && uU && TU >= 0 || jU && !uU && TU <= 0) && (TU = xU.x * mU.x + xU.y * mU.y + xU.z * mU.z, qU = -(xU.x * UU + xU.y * RU + xU.z * gU - TU) / (xU.x * xU.x + xU.y * xU.y + xU.z * xU.z), KU = UU + xU.x * qU, cU = RU + xU.y * qU, GU = gU + xU.z * qU, pU = KU - UU, EU = cU - RU, PU = GU - gU, WU = pU * pU + EU * EU + PU * PU, WU < IU && (IU = WU, CU = fU, tU && (tU.x = KU, tU.y = cU, tU.z = GU)));
            return CU
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const UU = this._internalAbstractMeshDataInfo._facetData;
            return UU.facetDataEnabled && (UU.facetDataEnabled = !1, UU.facetPositions = [], UU.facetNormals = [], UU.facetPartitioning = new Array, UU.facetParameters = {}, UU.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(UU, RU) {
            return this
          }
          createNormals(UU) {
            const RU = this.getVerticesData(PU.l.PositionKind),
              gU = this.dgU();
            let tU;
            return tU = this.isVerticesDataPresent(PU.l.NormalKind) ? this.getVerticesData(PU.l.NormalKind) : [], TU.b.ComputeNormals(RU, gU, tU, {
              useRightHandedSystem: this.aZ().useRightHandedSystem
            }), this.setVerticesData(PU.l.NormalKind, tU, UU), this
          }
          async optimizeIndicesAsync() {
            const UU = this.dgU();
            if (!UU) return this;
            const {
              OptimizeIndices: RU
            } = await gU.e(341).then((() => gU(41880)));
            return RU(UU), this.setIndices(UU, this.getTotalVertices()), this
          }
          alignWithNormal(UU, RU) {
            RU || (RU = mU.c.Y);
            const gU = EU.h.xC[0],
              tU = EU.h.xC[1];
            return EU.n.CrossToRef(RU, UU, tU), EU.n.CrossToRef(UU, tU, gU), this.rotationQuaternion ? EU.d.RotationQuaternionFromAxisToRef(gU, UU, tU, this.rotationQuaternion) : EU.n.RotationFromAxisToRef(gU, UU, tU, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, QU.n)("EdgesRenderer")
          }
          enableEdgesRendering(UU, RU, gU) {
            throw (0, QU.n)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.vI.filter((UU => UU.emitter === this))
          }
        }, (() => {
          const gU = "function" === typeof Symbol && Symbol.metadata ? Object.create(jU[Symbol.metadata] ?? null) : void 0;
          RU = [JU.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, tU.i)(UU, null, RU, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: UU => "_ApplySkeleton" in UU,
              get: UU => UU._ApplySkeleton
            },
            metadata: gU
          }, null, uU), gU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gU
          })
        })(), UU.OCCLUSION_TYPE_NONE = ((0, tU.j)(UU, uU), 0), UU.OCCLUSION_TYPE_OPTIMISTIC = 1, UU.OCCLUSION_TYPE_STRICT = 2, UU.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, UU.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, UU.CULLINGSTRATEGY_STANDARD = 0, UU.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, UU.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, UU.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, UU.DefaultIsPickable = !0, UU
      })(),
      VU = !1;

    function rU() {
      VU || (VU = !0, (0, nU.g)("BABYLON.AbstractMesh", BU))
    }(uU = BU.prototype).createOrUpdateSubmeshesOctree ?? (uU.createOrUpdateSubmeshesOctree = (0, QU.m)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (CU = BU.prototype).getPhysicsImpostor ?? (CU.getPhysicsImpostor = (0, QU.m)("AbstractMesh", "getPhysicsImpostor")), (hU = BU.prototype).setPhysicsLinkWith ?? (hU.setPhysicsLinkWith = (0, QU.m)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(BU.prototype, "occlusionRetryCount") || Object.defineProperty(BU.prototype, "occlusionRetryCount", (0, QU.i)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(BU.prototype, "occlusionType") || Object.defineProperty(BU.prototype, "occlusionType", (0, QU.i)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(BU.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(BU.prototype, "occlusionQueryAlgorithmType", (0, QU.i)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(BU.prototype, "isOccluded") || Object.defineProperty(BU.prototype, "isOccluded", (0, QU.i)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(BU.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(BU.prototype, "isOcclusionQueryInProgress", (0, QU.i)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(BU.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(BU.prototype, "forceRenderingWhenOccluded", (0, QU.i)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(BU.prototype, "occlusionForRenderPassId") || Object.defineProperty(BU.prototype, "occlusionForRenderPassId", (0, QU.i)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(BU.prototype, "decalMap") || Object.defineProperty(BU.prototype, "decalMap", (0, QU.i)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(BU.prototype, "kY") || Object.defineProperty(BU.prototype, "kY", (0, QU.i)("AbstractMesh", "kY")), Object.getOwnPropertyDescriptor(BU.prototype, "physicsImpostor") || Object.defineProperty(BU.prototype, "physicsImpostor", (0, QU.i)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(BU.prototype, "showBoundingBox") || Object.defineProperty(BU.prototype, "showBoundingBox", (0, QU.i)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(BU.prototype, "edgesRenderer") || Object.defineProperty(BU.prototype, "edgesRenderer", (0, QU.i)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(BU.prototype, "renderOutline") || Object.defineProperty(BU.prototype, "renderOutline", (0, QU.i)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(BU.prototype, "renderOverlay") || Object.defineProperty(BU.prototype, "renderOverlay", (0, QU.i)("AbstractMesh", "renderOverlay"))
  },
  39797: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => eU
    });
    var tU = gU(36600),
      pU = gU(36761),
      EU = gU(39792),
      PU = gU(39517),
      TU = gU(39681),
      qU = gU(39804),
      KU = gU(39698),
      cU = gU(39473),
      GU = gU(38236),
      jU = gU(39402),
      uU = gU(39708),
      CU = gU(36622),
      hU = gU(39812),
      QU = gU(39437);
    class eU {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(UU) {
        this._boundingBias ? this._boundingBias.PgU(UU) : this._boundingBias = UU.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(UU) {
        const RU = new eU(eU.RandomId(), UU.aZ());
        return RU.applyToMesh(UU), RU
      }
      get meshes() {
        return this._meshes
      }
      constructor(UU, RU, gU) {
        let pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new tU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new tU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = RU || CU.c.LastCreatedScene, this._scene && (this.id = UU, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.WC(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = pU, null !== PU && (this._totalVertices = PU), gU ? this.setAllVerticesData(gU, pU) : null === PU && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), EU && (this.applyToMesh(EU), EU.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      aZ() {
        return this._scene
      }
      WC() {
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
        for (const RU in this._vertexBuffers) UU.add(this._vertexBuffers[RU].getWrapperBuffer());
        UU.forEach((UU => {
          UU._rebuild()
        }))
      }
      setAllVerticesData(UU, RU) {
        UU.applyToGeometry(this, RU), this._notifyUpdate()
      }
      setVerticesData(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0;
        gU && Array.isArray(RU) && (RU = new Float32Array(RU));
        const pU = new PU.l(this._engine, RU, UU, {
          updatable: gU,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: tU,
          label: "Geometry_" + this.id + "_" + UU
        });
        this.setVerticesBuffer(pU)
      }
      removeVerticesData(UU) {
        this._vertexBuffers[UU] && (this._vertexBuffers[UU].dispose(), delete this._vertexBuffers[UU]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const pU = UU.getKind();
        this._vertexBuffers[pU] && gU && this._vertexBuffers[pU].dispose(), UU._buffer && UU._ownsBuffer && UU._buffer._increaseReferences(), this._vertexBuffers[pU] = UU;
        const EU = this._meshes,
          TU = EU.length;
        if (pU === PU.l.PositionKind) {
          this._totalVertices = RU ?? UU._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : UU.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const gU = this._extend && this._extend.minimum || new tU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            pU = this._extend && this._extend.maximum || new tU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let UU = 0; UU < TU; UU++) {
            const RU = EU[UU];
            RU.buildBoundingInfo(gU, pU), RU._createGlobalSubMesh(RU.isUnIndexed), RU.computeWorldMatrix(!0), RU.synchronizeInstances()
          }
        }
        this._notifyUpdate(pU)
      }
      updateVerticesDataDirectly(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pU = this.getVertexBuffer(UU);
        pU && (pU.updateDirectly(RU, gU, tU), this._notifyUpdate(UU))
      }
      updateVerticesData(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this.getVertexBuffer(UU);
        tU && (tU.update(RU), UU === PU.l.PositionKind && this._updateBoundingInfo(gU, RU), this._notifyUpdate(UU))
      }
      _updateBoundingInfo(UU, RU) {
        if (UU && this._updateExtend(RU), this._resetPointsArrayCache(), UU) {
          const UU = this._meshes;
          for (const RU of UU) {
            RU.hasBoundingInfo ? RU.lY().reConstruct(this._extend.minimum, this._extend.maximum) : RU.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const UU = RU.ZI;
            for (const RU of UU) RU.refreshBoundingInfo()
          }
        }
      }
      _bind(UU, RU, gU, tU) {
        if (!UU) return;
        void 0 === RU && (RU = this._indexBuffer);
        const pU = this.getVertexBuffers();
        if (!pU) return;
        if (RU != this._indexBuffer || !this._vertexArrayObjects && !tU) return void this._engine.bindBuffers(pU, RU, UU, gU);
        const EU = tU || this._vertexArrayObjects,
          PU = this._engine;
        EU[UU.key] || (EU[UU.key] = PU.recordVertexArrayObject(pU, RU, UU, gU)), PU.bindVertexArrayObject(EU[UU.key], RU)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(UU, RU, gU) {
        const tU = this.getVertexBuffer(UU);
        return tU ? tU.getFloatData(this._totalVertices, gU || RU && 1 !== this._meshes.length) : null
      }
      copyVerticesData(UU, RU) {
        const gU = this.getVertexBuffer(UU);
        if (!gU) return;
        RU[UU] || (RU[UU] = new Float32Array(this._totalVertices * gU.getSize()));
        const tU = gU.getData();
        tU && (0, QU.g)(tU, gU.getSize(), gU.type, gU.byteOffset, gU.byteStride, gU.normalized, this._totalVertices, RU[UU])
      }
      isVertexBufferUpdatable(UU) {
        const RU = this._vertexBuffers[UU];
        return !!RU && RU.isUpdatable()
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
        let RU;
        if (!this._vertexBuffers && this._delayInfo)
          for (RU in this._delayInfo) UU.push(RU);
        else
          for (RU in this._vertexBuffers) UU.push(RU);
        return UU
      }
      updateIndices(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const tU = UU.length !== this._indices.length;
            if (gU || (this._indices = UU.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, UU, RU), tU)
              for (const UU of this._meshes) UU._createGlobalSubMesh(!0)
          } else this.setIndices(UU, null, !0)
      }
      setIndexBuffer(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = UU, this._totalVertices = RU, this._totalIndices = gU, UU.is32Bits = null === tU ? RU > 65535 : tU;
        for (const pU of this._meshes) pU._createGlobalSubMesh(!0), pU.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = UU, this._indexBufferIsUpdatable = gU, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, gU, "Geometry_" + this.id + "_IndexBuffer")), void 0 != RU && (this._totalVertices = RU);
        for (const pU of this._meshes) pU._createGlobalSubMesh(!tU), pU.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      dgU(UU, RU) {
        if (!this.isReady()) return null;
        const gU = this._indices;
        return RU || UU && 1 !== this._meshes.length ? gU.slice() : gU
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        UU && this._vertexArrayObjects && this._vertexArrayObjects[UU.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[UU.key]), delete this._vertexArrayObjects[UU.key])
      }
      releaseForMesh(UU, RU) {
        const gU = this._meshes,
          tU = gU.indexOf(UU); - 1 !== tU && (gU.splice(tU, 1), this._vertexArrayObjects && UU._invalidateInstanceVertexArrayObject(), UU._geometry = null, 0 === gU.length && RU && this.dispose())
      }
      applyToMesh(UU) {
        if (UU._geometry === this) return;
        const RU = UU._geometry;
        RU && RU.releaseForMesh(UU), this._vertexArrayObjects && UU._invalidateInstanceVertexArrayObject();
        const gU = this._meshes;
        UU._geometry = this, UU._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), gU.push(UU), this.isReady() ? this._applyToMesh(UU) : this._boundingInfo && UU.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!UU && (UU = this.getVerticesData(PU.l.PositionKind), !UU)) return;
          this._extend = (0, uU.f)(UU, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(UU) {
        for (const RU in this._vertexBuffers) {
          const gU = this._vertexBuffers[RU];
          gU._buffer.getBuffer() || gU.create(), RU === PU.l.PositionKind && (this._extend || this._updateExtend(), UU.buildBoundingInfo(this._extend.minimum, this._extend.maximum), UU._createGlobalSubMesh(UU.isUnIndexed), UU._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), UU._syncGeometryWithMorphTargetManager(), UU.synchronizeInstances()
      }
      _notifyUpdate(UU) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, UU), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const RU of this._meshes) RU._markSubMeshesAsAttributesDirty()
      }
      load(UU, RU) {
        2 !== this.delayLoadState && (this.isReady() ? RU && RU() : (this.delayLoadState = 2, this._queueLoad(UU, RU)))
      }
      _queueLoad(UU, RU) {
        this.delayLoadingFile && (UU.addPendingData(this), (async () => {
          try {
            const gU = await UU._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void UU.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(gU), this), this.delayLoadState = 1, this._delayInfo = [], UU.removePendingData(this);
            const tU = this._meshes,
              pU = tU.length;
            for (let UU = 0; UU < pU; UU++) this._applyToMesh(tU[UU]);
            RU && RU()
          } catch (gU) {
            UU.removePendingData(this), UU.lRU || GU.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${gU}`)
          }
        })())
      }
      toLeftHanded() {
        const UU = this.dgU(!1);
        if (null != UU && UU.length > 0) {
          for (let RU = 0; RU < UU.length; RU += 3) {
            const gU = UU[RU + 0];
            UU[RU + 0] = UU[RU + 2], UU[RU + 2] = gU
          }
          this.setIndices(UU)
        }
        const RU = this.getVerticesData(PU.l.PositionKind, !1);
        if (null != RU && RU.length > 0) {
          for (let UU = 0; UU < RU.length; UU += 3) RU[UU + 2] = -RU[UU + 2];
          this.setVerticesData(PU.l.PositionKind, RU, !1)
        }
        const gU = this.getVerticesData(PU.l.NormalKind, !1);
        if (null != gU && gU.length > 0) {
          for (let UU = 0; UU < gU.length; UU += 3) gU[UU + 2] = -gU[UU + 2];
          this.setVerticesData(PU.l.NormalKind, gU, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const UU = this.getVerticesData(PU.l.PositionKind);
        if (!UU || 0 === UU.length) return !1;
        for (let RU = 3 * this._positionsCache.length, gU = this._positionsCache.length; RU < UU.length; RU += 3, ++gU) this._positionsCache[gU] = tU.n.FromArray(UU, RU);
        for (let RU = 0, gU = 0; RU < UU.length; RU += 3, ++gU) this._positionsCache[gU].set(UU[0 + RU], UU[1 + RU], UU[2 + RU]);
        return this._positionsCache.length = UU.length / 3, this._positions = this._positionsCache, !0
      }
      lRU() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const gU in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[gU]);
          this._vertexArrayObjects = {};
          const UU = this._meshes,
            RU = UU.length;
          for (let gU = 0; gU < RU; gU++) UU[gU]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const UU = this._meshes,
          RU = UU.length;
        let gU;
        for (gU = 0; gU < RU; gU++) this.releaseForMesh(UU[gU]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const tU in this._vertexBuffers) this._vertexBuffers[tU].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const UU = this._parentContainer.geometries.indexOf(this);
          UU > -1 && this._parentContainer.geometries.splice(UU, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(UU) {
        const RU = new eU(UU, this._scene),
          gU = this.dgU(void 0, !0);
        gU && RU.setIndices(gU);
        let tU, pU = !1;
        for (tU in this._vertexBuffers) {
          const UU = this.getVertexBuffer(tU),
            gU = UU.getData();
          if (!gU) continue;
          const EU = UU.isUpdatable(),
            TU = UU.getSize(),
            {
              type: qU,
              byteOffset: KU,
              byteStride: cU,
              normalized: GU
            } = UU;
          pU = pU || EU;
          let jU = this._totalVertices;
          if (UU.getIsInstanced()) {
            let UU;
            UU = gU instanceof Array ? 4 * gU.length : gU.byteLength, jU = UU / cU
          }
          const uU = (0, QU.r)(gU, TU, qU, KU, cU, jU, !0),
            CU = new PU.l(this._engine, uU, tU, {
              updatable: EU,
              useBytes: !1,
              stride: TU,
              size: TU,
              offset: 0,
              type: qU,
              normalized: GU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            });
          RU.setVerticesBuffer(CU, jU)
        }
        for (tU in RU._updatable = pU, RU.delayLoadState = this.delayLoadState, RU.delayLoadingFile = this.delayLoadingFile, RU._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) RU._delayInfo = RU._delayInfo || [], RU._delayInfo.push(tU);
        return RU._boundingInfo = new KU.d(this._extend.minimum, this._extend.maximum), RU
      }
      serialize() {
        const UU = {};
        return UU.id = this.id, UU.uniqueId = this.uniqueId, UU.updatable = this._updatable, jU.d && jU.d.HasTags(this) && (UU.tags = jU.d.GetTags(this)), UU
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
        return this.isVerticesDataPresent(PU.l.PositionKind) && (UU.positions = this._toNumberArray(this.getVerticesData(PU.l.PositionKind)), this.isVertexBufferUpdatable(PU.l.PositionKind) && (UU.positionsUpdatable = !0)), this.isVerticesDataPresent(PU.l.NormalKind) && (UU.normals = this._toNumberArray(this.getVerticesData(PU.l.NormalKind)), this.isVertexBufferUpdatable(PU.l.NormalKind) && (UU.normalsUpdatable = !0)), this.isVerticesDataPresent(PU.l.TangentKind) && (UU.tangents = this._toNumberArray(this.getVerticesData(PU.l.TangentKind)), this.isVertexBufferUpdatable(PU.l.TangentKind) && (UU.tangentsUpdatable = !0)), this.isVerticesDataPresent(PU.l.UVKind) && (UU.uvs = this._toNumberArray(this.getVerticesData(PU.l.UVKind)), this.isVertexBufferUpdatable(PU.l.UVKind) && (UU.uvsUpdatable = !0)), this.isVerticesDataPresent(PU.l.UV2Kind) && (UU.uvs2 = this._toNumberArray(this.getVerticesData(PU.l.UV2Kind)), this.isVertexBufferUpdatable(PU.l.UV2Kind) && (UU.uvs2Updatable = !0)), this.isVerticesDataPresent(PU.l.UV3Kind) && (UU.uvs3 = this._toNumberArray(this.getVerticesData(PU.l.UV3Kind)), this.isVertexBufferUpdatable(PU.l.UV3Kind) && (UU.uvs3Updatable = !0)), this.isVerticesDataPresent(PU.l.UV4Kind) && (UU.uvs4 = this._toNumberArray(this.getVerticesData(PU.l.UV4Kind)), this.isVertexBufferUpdatable(PU.l.UV4Kind) && (UU.uvs4Updatable = !0)), this.isVerticesDataPresent(PU.l.UV5Kind) && (UU.uvs5 = this._toNumberArray(this.getVerticesData(PU.l.UV5Kind)), this.isVertexBufferUpdatable(PU.l.UV5Kind) && (UU.uvs5Updatable = !0)), this.isVerticesDataPresent(PU.l.UV6Kind) && (UU.uvs6 = this._toNumberArray(this.getVerticesData(PU.l.UV6Kind)), this.isVertexBufferUpdatable(PU.l.UV6Kind) && (UU.uvs6Updatable = !0)), this.isVerticesDataPresent(PU.l.ColorKind) && (UU.colors = this._toNumberArray(this.getVerticesData(PU.l.ColorKind)), this.isVertexBufferUpdatable(PU.l.ColorKind) && (UU.colorsUpdatable = !0)), this.isVerticesDataPresent(PU.l.MatricesIndicesKind) && (UU.matricesIndices = this._toNumberArray(this.getVerticesData(PU.l.MatricesIndicesKind)), UU.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(PU.l.MatricesIndicesKind) && (UU.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(PU.l.MatricesWeightsKind) && (UU.matricesWeights = this._toNumberArray(this.getVerticesData(PU.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(PU.l.MatricesWeightsKind) && (UU.matricesWeightsUpdatable = !0)), UU.indices = this._toNumberArray(this.dgU()), UU
      }
      static ExtractFromMesh(UU, RU) {
        const gU = UU._geometry;
        return gU ? gU.copy(RU) : null
      }
      static RandomId() {
        return cU.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(UU, RU) {
        for (let gU = 0; gU < RU.geometries.length; gU++)
          if (RU.geometries[gU]._loadedUniqueId === UU) return RU.geometries[gU];
        return null
      }
      static _ImportGeometry(UU, RU) {
        const gU = RU.aZ(),
          tU = UU.geometryUniqueId,
          EU = UU.geometryId;
        if (tU || EU) {
          const UU = tU ? this._GetGeometryByLoadedUniqueId(tU, gU) : gU.getGeometryById(EU);
          UU && UU.applyToMesh(RU)
        } else if (UU instanceof ArrayBuffer) {
          const gU = RU._binaryInfo;
          if (gU.positionsAttrDesc && gU.positionsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.positionsAttrDesc.offset, gU.positionsAttrDesc.count);
            RU.setVerticesData(PU.l.PositionKind, tU, !1)
          }
          if (gU.normalsAttrDesc && gU.normalsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.normalsAttrDesc.offset, gU.normalsAttrDesc.count);
            RU.setVerticesData(PU.l.NormalKind, tU, !1)
          }
          if (gU.tangetsAttrDesc && gU.tangetsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.tangetsAttrDesc.offset, gU.tangetsAttrDesc.count);
            RU.setVerticesData(PU.l.TangentKind, tU, !1)
          }
          if (gU.uvsAttrDesc && gU.uvsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvsAttrDesc.offset, gU.uvsAttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UVKind, tU, !1)
          }
          if (gU.uvs2AttrDesc && gU.uvs2AttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvs2AttrDesc.offset, gU.uvs2AttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UV2Kind, tU, !1)
          }
          if (gU.uvs3AttrDesc && gU.uvs3AttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvs3AttrDesc.offset, gU.uvs3AttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UV3Kind, tU, !1)
          }
          if (gU.uvs4AttrDesc && gU.uvs4AttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvs4AttrDesc.offset, gU.uvs4AttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UV4Kind, tU, !1)
          }
          if (gU.uvs5AttrDesc && gU.uvs5AttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvs5AttrDesc.offset, gU.uvs5AttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UV5Kind, tU, !1)
          }
          if (gU.uvs6AttrDesc && gU.uvs6AttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.uvs6AttrDesc.offset, gU.uvs6AttrDesc.count);
            if (hU.c)
              for (let UU = 1; UU < tU.length; UU += 2) tU[UU] = 1 - tU[UU];
            RU.setVerticesData(PU.l.UV6Kind, tU, !1)
          }
          if (gU.colorsAttrDesc && gU.colorsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.colorsAttrDesc.offset, gU.colorsAttrDesc.count);
            RU.setVerticesData(PU.l.ColorKind, tU, !1, gU.colorsAttrDesc.stride)
          }
          if (gU.matricesIndicesAttrDesc && gU.matricesIndicesAttrDesc.count > 0) {
            const tU = new Int32Array(UU, gU.matricesIndicesAttrDesc.offset, gU.matricesIndicesAttrDesc.count),
              pU = [];
            for (let UU = 0; UU < tU.length; UU++) {
              const RU = tU[UU];
              pU.push(255 & RU), pU.push((65280 & RU) >> 8), pU.push((16711680 & RU) >> 16), pU.push(RU >> 24 & 255)
            }
            RU.setVerticesData(PU.l.MatricesIndicesKind, pU, !1)
          }
          if (gU.matricesIndicesExtraAttrDesc && gU.matricesIndicesExtraAttrDesc.count > 0) {
            const tU = new Int32Array(UU, gU.matricesIndicesExtraAttrDesc.offset, gU.matricesIndicesExtraAttrDesc.count),
              pU = [];
            for (let UU = 0; UU < tU.length; UU++) {
              const RU = tU[UU];
              pU.push(255 & RU), pU.push((65280 & RU) >> 8), pU.push((16711680 & RU) >> 16), pU.push(RU >> 24 & 255)
            }
            RU.setVerticesData(PU.l.MatricesIndicesExtraKind, pU, !1)
          }
          if (gU.matricesWeightsAttrDesc && gU.matricesWeightsAttrDesc.count > 0) {
            const tU = new Float32Array(UU, gU.matricesWeightsAttrDesc.offset, gU.matricesWeightsAttrDesc.count);
            RU.setVerticesData(PU.l.MatricesWeightsKind, tU, !1)
          }
          if (gU.indicesAttrDesc && gU.indicesAttrDesc.count > 0) {
            const tU = new Int32Array(UU, gU.indicesAttrDesc.offset, gU.indicesAttrDesc.count);
            RU.setIndices(tU, null)
          }
          if (gU.subMeshesAttrDesc && gU.subMeshesAttrDesc.count > 0) {
            const tU = new Int32Array(UU, gU.subMeshesAttrDesc.offset, 5 * gU.subMeshesAttrDesc.count);
            RU.ZI = [];
            for (let UU = 0; UU < gU.subMeshesAttrDesc.count; UU++) {
              const gU = tU[5 * UU + 0],
                pU = tU[5 * UU + 1],
                EU = tU[5 * UU + 2],
                PU = tU[5 * UU + 3],
                qU = tU[5 * UU + 4];
              TU.d.AddToMesh(gU, pU, EU, PU, qU, RU)
            }
          }
        } else if (UU.positions && UU.normals && UU.indices) {
          if (RU.setVerticesData(PU.l.PositionKind, UU.positions, UU.positions._updatable || UU.positionsUpdatable), RU.setVerticesData(PU.l.NormalKind, UU.normals, UU.normals._updatable || UU.normalsUpdatable), UU.tangents && RU.setVerticesData(PU.l.TangentKind, UU.tangents, UU.tangents._updatable || UU.tangentsUpdatable), UU.uvs && RU.setVerticesData(PU.l.UVKind, UU.uvs, UU.uvs._updatable || UU.uvsUpdatable), UU.uvs2 && RU.setVerticesData(PU.l.UV2Kind, UU.uvs2, UU.uvs2._updatable || UU.uvs2Updatable), UU.uvs3 && RU.setVerticesData(PU.l.UV3Kind, UU.uvs3, UU.uvs3._updatable || UU.uvs3Updatable), UU.uvs4 && RU.setVerticesData(PU.l.UV4Kind, UU.uvs4, UU.uvs4._updatable || UU.uvs4Updatable), UU.uvs5 && RU.setVerticesData(PU.l.UV5Kind, UU.uvs5, UU.uvs5._updatable || UU.uvs5Updatable), UU.uvs6 && RU.setVerticesData(PU.l.UV6Kind, UU.uvs6, UU.uvs6._updatable || UU.uvs6Updatable), UU.colors && RU.setVerticesData(PU.l.ColorKind, pU.g.CheckColors4(UU.colors, UU.positions.length / 3), UU.colors._updatable), UU.matricesIndices)
            if (UU.matricesIndices._isExpanded || UU.matricesIndicesExpanded) delete UU.matricesIndices._isExpanded, delete UU.matricesIndicesExpanded, RU.setVerticesData(PU.l.MatricesIndicesKind, UU.matricesIndices, UU.matricesIndices._updatable || UU.matricesIndicesUpdatable);
            else {
              const gU = [];
              for (let RU = 0; RU < UU.matricesIndices.length; RU++) {
                const tU = UU.matricesIndices[RU];
                gU.push(255 & tU), gU.push((65280 & tU) >> 8), gU.push((16711680 & tU) >> 16), gU.push(tU >> 24 & 255)
              }
              RU.setVerticesData(PU.l.MatricesIndicesKind, gU, UU.matricesIndices._updatable || UU.matricesIndicesUpdatable)
            } if (UU.matricesIndicesExtra)
            if (UU.matricesIndicesExtraExpanded || UU.matricesIndicesExtra._isExpanded) delete UU.matricesIndices._isExpanded, delete UU.matricesIndicesExtraExpanded, RU.setVerticesData(PU.l.MatricesIndicesExtraKind, UU.matricesIndicesExtra, UU.matricesIndicesExtra._updatable || UU.matricesIndicesExtraUpdatable);
            else {
              const gU = [];
              for (let RU = 0; RU < UU.matricesIndicesExtra.length; RU++) {
                const tU = UU.matricesIndicesExtra[RU];
                gU.push(255 & tU), gU.push((65280 & tU) >> 8), gU.push((16711680 & tU) >> 16), gU.push(tU >> 24 & 255)
              }
              RU.setVerticesData(PU.l.MatricesIndicesExtraKind, gU, UU.matricesIndicesExtra._updatable || UU.matricesIndicesExtraUpdatable)
            } UU.matricesWeights && (eU._CleanMatricesWeights(UU, RU), RU.setVerticesData(PU.l.MatricesWeightsKind, UU.matricesWeights, UU.matricesWeights._updatable)), UU.matricesWeightsExtra && RU.setVerticesData(PU.l.MatricesWeightsExtraKind, UU.matricesWeightsExtra, UU.matricesWeights._updatable), RU.setIndices(UU.indices, null)
        }
        if (UU.ZI) {
          RU.ZI = [];
          for (let gU = 0; gU < UU.ZI.length; gU++) {
            const tU = UU.ZI[gU];
            TU.d.AddToMesh(tU.materialIndex, tU.verticesStart, tU.verticesCount, tU.indexStart, tU.indexCount, RU)
          }
        }
        RU._shouldGenerateFlatShading && (RU.convertToFlatShadedMesh(), RU._shouldGenerateFlatShading = !1), RU.computeWorldMatrix(!0), gU.onMeshImportedObservable.notifyObservers(RU)
      }
      static _CleanMatricesWeights(UU, RU) {
        const gU = .001;
        if (!qU.b.CleanBoneMatrixWeights) return;
        let tU;
        if (!(UU.skeletonId > -1)) return;
        {
          const gU = RU.aZ().getLastSkeletonById(UU.skeletonId);
          if (!gU) return;
          tU = gU.bones.length
        }
        const pU = RU.getVerticesData(PU.l.MatricesIndicesKind),
          EU = RU.getVerticesData(PU.l.MatricesIndicesExtraKind),
          TU = UU.matricesWeights,
          KU = UU.matricesWeightsExtra,
          cU = UU.numBoneInfluencer,
          GU = TU.length;
        for (let PU = 0; PU < GU; PU += 4) {
          let UU = 0,
            RU = -1;
          for (let tU = 0; tU < 4; tU++) {
            const pU = TU[PU + tU];
            UU += pU, pU < gU && RU < 0 && (RU = tU)
          }
          if (KU)
            for (let tU = 0; tU < 4; tU++) {
              const pU = KU[PU + tU];
              UU += pU, pU < gU && RU < 0 && (RU = tU + 4)
            }
          if ((RU < 0 || RU > cU - 1) && (RU = cU - 1), UU > gU) {
            const RU = 1 / UU;
            for (let UU = 0; UU < 4; UU++) TU[PU + UU] *= RU;
            if (KU)
              for (let UU = 0; UU < 4; UU++) KU[PU + UU] *= RU
          } else RU >= 4 ? (KU[PU + RU - 4] = 1 - UU, EU[PU + RU - 4] = tU) : (TU[PU + RU] = 1 - UU, pU[PU + RU] = tU)
        }
        RU.setVerticesData(PU.l.MatricesIndicesKind, pU), UU.matricesWeightsExtra && RU.setVerticesData(PU.l.MatricesIndicesExtraKind, EU)
      }
      static Parse(UU, RU, gU) {
        const pU = new eU(UU.id, RU, void 0, UU.updatable);
        return pU._loadedUniqueId = UU.uniqueId, jU.d && jU.d.AddTagsTo(pU, UU.tags), UU.delayLoadingFile ? (pU.delayLoadState = 4, pU.delayLoadingFile = gU + UU.delayLoadingFile, pU._boundingInfo = new KU.d(tU.n.FromArray(UU.boundingBoxMinimum), tU.n.FromArray(UU.boundingBoxMaximum)), pU._delayInfo = [], UU.hasUVs && pU._delayInfo.push(PU.l.UVKind), UU.hasUVs2 && pU._delayInfo.push(PU.l.UV2Kind), UU.hasUVs3 && pU._delayInfo.push(PU.l.UV3Kind), UU.hasUVs4 && pU._delayInfo.push(PU.l.UV4Kind), UU.hasUVs5 && pU._delayInfo.push(PU.l.UV5Kind), UU.hasUVs6 && pU._delayInfo.push(PU.l.UV6Kind), UU.hasColors && pU._delayInfo.push(PU.l.ColorKind), UU.hasMatricesIndices && pU._delayInfo.push(PU.l.MatricesIndicesKind), UU.hasMatricesWeights && pU._delayInfo.push(PU.l.MatricesWeightsKind), pU._delayLoadingFunction = EU.b.ImportVertexData) : EU.b.ImportVertexData(UU, pU), RU.pushGeometry(pU, !0), pU
      }
    }
  },
  39844: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU,
      f: () => CU
    });
    var tU = gU(36600),
      pU = gU(38236),
      EU = gU(39817),
      PU = gU(39782),
      TU = gU(38234),
      qU = gU(39823),
      KU = gU(39517),
      cU = gU(36639);
    class GU extends EU.d {
      constructor(UU, RU) {
        super(UU, RU.aZ()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, RU.M6(this), this._sourceMesh = RU, this._unIndexed = RU._unIndexed, this.position.PgU(RU.position), this.rotation.PgU(RU.rotation), this.ep.PgU(RU.ep), RU.rotationQuaternion && (this.rotationQuaternion = RU.rotationQuaternion.clone()), this.animations = RU.animations.slice();
        for (const gU of RU.getAnimationRanges()) null != gU && this.createAnimationRange(gU.name, gU.from, gU.to);
        if (this.infiniteDistance = RU.infiniteDistance, this.setPivotMatrix(RU.getPivotMatrix()), RU.skeleton || RU.morphTargetManager || !RU.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const UU = RU.lY();
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
        this._sourceMesh?.receiveShadows !== UU && pU.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(UU) {
        this._sourceMesh?.material !== UU && pU.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(UU) {
        this._sourceMesh?.visibility !== UU && pU.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(UU) {
        this._sourceMesh?.skeleton !== UU && pU.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(UU) {
        this._sourceMesh && UU !== this._sourceMesh.renderingGroupId && pU.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(UU) {
        this._sourceMesh && UU !== this._sourceMesh.meshBlendingTag && pU.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get VtU() {
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
      getVerticesData(UU, RU, gU) {
        return this._sourceMesh.getVerticesData(UU, RU, gU)
      }
      copyVerticesData(UU, RU) {
        this._sourceMesh.copyVerticesData(UU, RU)
      }
      getVertexBuffer(UU, RU) {
        return this._sourceMesh.getVertexBuffer(UU, RU)
      }
      setVerticesData(UU, RU, gU, tU) {
        return this.VtU && this.VtU.setVerticesData(UU, RU, gU, tU), this.VtU
      }
      updateVerticesData(UU, RU, gU, tU) {
        return this.VtU && this.VtU.updateVerticesData(UU, RU, gU, tU), this.VtU
      }
      setIndices(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.VtU && this.VtU.setIndices(UU, RU), this.VtU
      }
      isVerticesDataPresent(UU) {
        return this._sourceMesh.isVerticesDataPresent(UU)
      }
      dgU() {
        return this._sourceMesh.dgU()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let UU, RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.lY().isLocked) return this;
        UU = "object" === typeof RU ? RU : {
          applySkeleton: RU,
          applyMorph: gU
        };
        const tU = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(UU, null, KU.l.PositionKind), tU), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(UU, RU) {
        if (super._activate(UU, RU), this._sourceMesh.ZI || pU.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, UU), RU) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== qU.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new tU.c);
          const UU = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, tU.h.xC[7].PgU(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.PgU(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.PgU(tU.h.xC[7]), this._currentLOD._masterMesh = UU, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get sZ() {
        return !0
      }
      getLOD(UU) {
        if (!UU) return this;
        const RU = this.VtU.getLODLevels();
        if (RU && 0 !== RU.length) {
          const RU = this.lY();
          this._currentLOD = this.VtU.getLOD(UU, RU.qtU)
        } else this._currentLOD = this.VtU;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(UU) {
        return this.VtU._preActivateForIntermediateRendering(UU)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.ZI)
          for (let UU = 0; UU < this._sourceMesh.ZI.length; UU++) this._sourceMesh.ZI[UU].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.lY().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(UU);
        if (TU.c.DeepCopy(this, tU, ["name", "ZI", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "VtU", "sZ", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "BtU", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hPU", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), RU && (tU.parent = RU), !gU)
          for (let pU = 0; pU < this.aZ().meshes.length; pU++) {
            const UU = this.aZ().meshes[pU];
            UU.parent === this && UU.clone(UU.name, tU)
          }
        return tU.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(tU), tU
      }
      dispose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.R_(this), super.dispose(UU, RU)
      }
      _serializeAsParent(UU) {
        super._serializeAsParent(UU), UU.parentId = this._sourceMesh.uniqueId, UU.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0, RU && RU.newSourcedMesh);
        tU && gU && gU(this, tU);
        for (const pU of this.getChildTransformNodes(!0)) pU.instantiateHierarchy(tU, RU, gU);
        return tU
      }
    }
    let jU = !1;

    function uU(UU, RU, gU, tU, pU) {
      for (let EU = 0; EU < RU.length; EU++) {
        const PU = UU[RU[EU]] ?? 0,
          TU = pU + gU[EU];
        PU.toArray ? PU.toArray(tU, TU) : PU.copyToArray ? PU.copyToArray(tU, TU) : tU[TU] = PU
      }
    }

    function CU() {
      jU || (jU = !0, PU.c._instancedMeshFactory = (UU, RU) => {
        const gU = new GU(UU, RU);
        if (RU.kY) {
          gU.kY = {};
          for (const UU in RU.kY) gU.kY[UU] = RU.kY[UU]
        }
        return gU
      }, PU.c.prototype.rY = function(UU, RU) {
        if (!this.kY) {
          this.kY = {};
          for (const UU of this.instances) UU.kY = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.WC().getCaps().vertexArrayObject ? {} : void 0
        }), this.kY[UU] = null, this._userInstancedBuffersStorage.strides[UU] = RU;
        const gU = this._userInstancedBuffersStorage;
        gU.interleavedKinds = [], gU.interleavedOffsets = [], gU.interleavedRowStride = 0;
        for (const tU in gU.strides) gU.interleavedKinds.push(tU), gU.interleavedOffsets.push(gU.interleavedRowStride), gU.interleavedRowStride += gU.strides[tU];
        gU.interleavedData = new Float32Array(32 * gU.interleavedRowStride);
        for (const tU in gU.interleavedBuffers) gU.interleavedBuffers[tU].buffer.dispose();
        gU.interleavedBuffers = {}, gU.vertexBuffers[UU] = null;
        for (const tU of this.instances) tU.kY[UU] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, PU.c.prototype._processInstancedBuffers = function(UU, RU) {
        const gU = this._userInstancedBuffersStorage,
          tU = gU.interleavedRowStride;
        if (!tU) return;
        const pU = UU ? UU.length : 0,
          EU = (pU + 1) * tU;
        let PU = gU.interleavedData;
        if (PU.length < EU) {
          let UU = PU.length;
          for (; UU < EU;) UU *= 2;
          PU = gU.interleavedData = new Float32Array(UU)
        }
        const TU = gU.interleavedKinds,
          qU = gU.interleavedOffsets;
        let cU = 0;
        RU && (uU(this.kY, TU, qU, PU, cU), cU += tU);
        for (let KU = 0; KU < pU; KU++) uU(UU[KU].kY, TU, qU, PU, cU), cU += tU;
        let GU = "shared",
          jU = gU.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (GU = this._instanceDataStorage.engine.currentRenderPassId, gU.renderPasses || (gU.renderPasses = {}), gU.renderPasses[GU] || (gU.renderPasses[GU] = {}), jU = gU.renderPasses[GU]);
        const CU = gU.interleavedBuffers[GU];
        let hU = !CU || CU.data !== PU;
        for (let KU = 0; !hU && KU < TU.length; KU++) hU = !jU[TU[KU]];
        if (!hU) return void CU.buffer.updateDirectly(PU, 0);
        CU?.buffer.dispose();
        const QU = new KU.e(this.WC(), PU, !0, tU, !1, !0);
        for (let KU = 0; KU < TU.length; KU++) {
          const UU = TU[KU],
            RU = QU.createVertexBuffer(UU, qU[KU], gU.strides[UU]);
          RU.hashCode += RU.byteOffset * 2 ** 24, jU[UU] = RU
        }
        gU.interleavedBuffers[GU] = {
          buffer: QU,
          data: PU
        }, this._invalidateInstanceVertexArrayObject()
      }, PU.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const UU in this._userInstancedBuffersStorage.vertexArrayObjects) this.WC().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[UU]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, PU.c.prototype._disposeInstanceSpecificData = function() {
        for (const RU in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[RU].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const RU in this.kY) this._userInstancedBuffersStorage.vertexBuffers[RU] && this._userInstancedBuffersStorage.vertexBuffers[RU].dispose();
        const UU = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (UU) {
          for (const RU in UU) UU[RU].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.kY = {}
      }, (0, cU.g)("BABYLON.InstancedMesh", GU))
    }
  },
  39782: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => NU,
      d: () => OU,
      h: () => FU
    });
    var tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU = gU(36624),
      WU = gU(39473),
      fU = gU(39424),
      xU = gU(38234),
      mU = gU(39402),
      IU = gU(39786),
      JU = gU(39603),
      wU = gU(36600),
      nU = gU(36761),
      bU = gU(39610),
      oU = gU(39517),
      ZU = gU(39792),
      aU = gU(39797),
      YU = gU(39817),
      BU = gU(39681),
      VU = gU(39676),
      rU = gU(39766),
      XU = gU(39826),
      vU = gU(39804),
      dU = gU(39395),
      HU = gU(38236),
      SU = gU(36639),
      sU = gU(39256),
      yU = gU(39547);
    class kU {
      constructor(UU, RU) {
        this.distanceOrScreenCoverage = UU, this.mesh = RU
      }
    }
    class FU {}
    class iU {
      constructor() {
        this.batchCache = new zU(this), this.batchCacheReplacementModeInFrozenMode = new zU(this), this.instancesBufferSize = 2048
      }
    }
    class AU {
      constructor() {
        this.renderPasses = {}
      }
    }
    class zU {
      constructor(UU) {
        this.parent = UU, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class MU {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class DU {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const LU = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class NU extends YU.d {
      static _GetDefaultSideOrientation(UU) {
        return UU || NU.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== UU && (UU && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(oU.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(oU.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = UU, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new eU.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new eU.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new eU.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new eU.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new eU.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(UU) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(UU)
      }
      get BtU() {
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
      _copySource(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pU = this.aZ();
        if (UU._geometry && UU._geometry.applyToMesh(this), xU.c.DeepCopy(UU, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "BtU", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "sZ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hPU", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = UU, pU.useClonedMeshMap && (UU._internalMeshDataInfo.meshMap || (UU._internalMeshDataInfo.meshMap = {}), UU._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = UU._originalBuilderSideOrientation, this._creationDataStorage = UU._creationDataStorage, UU._ranges) {
          const RU = UU._ranges;
          for (const UU in RU) Object.prototype.hasOwnProperty.call(RU, UU) && RU[UU] && this.createAnimationRange(UU, RU[UU].from, RU[UU].to)
        }
        if (UU.metadata && UU.metadata.clone ? this.metadata = UU.metadata.clone() : this.metadata = UU.metadata, this._internalMetadata = UU._internalMetadata, this.meshBlendingTag = UU.meshBlendingTag, mU.d && mU.d.HasTags(UU) && mU.d.AddTagsTo(this, mU.d.GetTags(UU, !0)), this.GJ(UU.isEnabled(!1)), this.parent = UU.parent, this.setPivotMatrix(UU.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + UU.id, this.material = UU.material, !RU) {
          const pU = UU.getDescendants(!0);
          for (let UU = 0; UU < pU.length; UU++) {
            const EU = pU[UU];
            EU._isMesh ? (LU.parent = this, LU.doNotCloneChildren = RU, LU.clonePhysicsImpostor = gU, LU.cloneThinInstances = tU, EU.clone(this.name + "." + EU.name, LU)) : EU.clone && EU.clone(this.name + "." + EU.name, this)
          }
        }
        if (UU.morphTargetManager && (this.morphTargetManager = UU.morphTargetManager), (0, sU.e)(pU.getPhysicsEngine)) {
          const RU = pU.getPhysicsEngine();
          if (gU && RU)
            if (1 === RU.getPluginVersion()) {
              const gU = RU.getImpostorForPhysicsObject(UU);
              gU && (this.physicsImpostor = gU.clone(this))
            } else 2 === RU.getPluginVersion() && UU.physicsBody && UU.physicsBody.clone(this)
        }
        for (let EU = 0; EU < pU.vI.length; EU++) {
          const RU = pU.vI[EU];
          RU.emitter === UU && RU.clone(RU.name, this)
        }
        if (this.skeleton = UU.skeleton, tU && (UU._thinInstanceDataStorage.matrixData ? (this.e_("matrix", new Float32Array(UU._thinInstanceDataStorage.matrixData), 16, !UU._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = UU._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = UU._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = UU._thinInstanceDataStorage.matrixBufferSize, UU._userThinInstanceBuffersStorage)) {
          const RU = UU._userThinInstanceBuffersStorage;
          for (const UU in RU.data) this.e_(UU, new Float32Array(RU.data[UU]), RU.strides[UU], !RU.vertexBuffers?.[UU]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[UU] = RU.sizes[UU]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(UU) {
        let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EU = arguments.length > 4 ? arguments[4] : void 0,
          PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(UU, gU), this._internalMeshDataInfo = new DU, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new MU, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = NU.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, gU = this.aZ(), this._instanceDataStorage = new AU, this._instanceDataStorage.engine = gU.WC(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new iU), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (UU, RU, gU) => {
          UU && gU && (this._uniformBuffer ? this.transferToEffect(RU) : gU.bindOnlyWorldMatrix(RU))
        };
        let TU = !1;
        if (tU && void 0 === tU._addToSceneRootNodes) {
          const UU = tU;
          RU = UU.parent ?? null, pU = UU.source ?? null, EU = UU.doNotCloneChildren ?? !1, PU = UU.clonePhysicsImpostor ?? !0, TU = UU.cloneThinInstances ?? !1
        } else RU = tU;
        pU && this._copySource(pU, EU, PU, TU), null !== RU && (this.parent = RU), this._instanceDataStorage.hardwareInstancedRendering = this.WC().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = UU => {
          UU.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new eU.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), pU && pU.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = 0 === this.getTotalVertices() || RU && RU.doNotInstantiate && (!0 === RU.doNotInstantiate || RU.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        tU.parent = UU || this.parent, tU.position = this.position.clone(), tU.ep = this.ep.clone(), this.rotationQuaternion ? tU.rotationQuaternion = this.rotationQuaternion.clone() : tU.rotation = this.rotation.clone(), gU && gU(this, tU);
        for (const pU of this.getChildTransformNodes(!0)) "InstancedMesh" === pU.getClassName() && "Mesh" === tU.getClassName() && pU.VtU === this ? pU.instantiateHierarchy(tU, {
          doNotInstantiate: RU && RU.doNotInstantiate || !1,
          newSourcedMesh: tU
        }, gU) : pU.instantiateHierarchy(tU, RU, gU);
        return tU
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(UU) {
        let RU = super.toString(UU);
        if (RU += ", n vertices: " + this.getTotalVertices(), RU += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let gU = 0; gU < this.animations.length; gU++) RU += ", animation[0]: " + this.animations[gU].toString(UU);
        if (UU)
          if (this._geometry) {
            const UU = this.dgU(),
              gU = this.getVerticesData(oU.l.PositionKind);
            gU && UU && (RU += ", flat shading: " + (gU.length / 3 === UU.length ? "YES" : "NO"))
          } else RU += ", flat shading: UNKNOWN";
        return RU
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
        this._internalMeshDataInfo._LODLevels.sort(((RU, gU) => RU.distanceOrScreenCoverage < gU.distanceOrScreenCoverage ? UU : RU.distanceOrScreenCoverage > gU.distanceOrScreenCoverage ? -UU : 0))
      }
      addLODLevel(UU, RU) {
        if (RU && RU._masterMesh) return HU.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const gU = new kU(UU, RU);
        return this._internalMeshDataInfo._LODLevels.push(gU), RU && (RU._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(UU) {
        const RU = this._internalMeshDataInfo;
        for (let gU = 0; gU < RU._LODLevels.length; gU++) {
          const tU = RU._LODLevels[gU];
          if (tU.distanceOrScreenCoverage === UU) return tU.mesh
        }
        return null
      }
      removeLODLevel(UU) {
        const RU = this._internalMeshDataInfo;
        for (let gU = 0; gU < RU._LODLevels.length; gU++) RU._LODLevels[gU].mesh === UU && (RU._LODLevels.splice(gU, 1), UU && (UU._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(UU, RU) {
        const gU = this._internalMeshDataInfo;
        if (!gU._LODLevels || 0 === gU._LODLevels.length) return this;
        const tU = RU || this.lY().qtU,
          pU = UU.mode === JU.d.ORTHOGRAPHIC_CAMERA ? UU.minZ : tU.centerWorld.subtract(UU.globalPosition).length();
        let EU = pU,
          PU = 1;
        if (gU._useLODScreenCoverage) {
          const RU = UU.screenArea;
          let gU = tU.radiusWorld * UU.minZ / pU;
          gU = gU * gU * Math.PI, EU = gU / RU, PU = -1
        }
        if (PU * gU._LODLevels[gU._LODLevels.length - 1].distanceOrScreenCoverage > PU * EU) return this.onLODLevelSelection && this.onLODLevelSelection(EU, this, this), this;
        for (let TU = 0; TU < gU._LODLevels.length; TU++) {
          const UU = gU._LODLevels[TU];
          if (PU * UU.distanceOrScreenCoverage < PU * EU) {
            if (UU.mesh) {
              if (4 === UU.mesh.delayLoadState) return UU.mesh._checkDelayState(), this;
              if (2 === UU.mesh.delayLoadState) return this;
              UU.mesh._preActivate(), UU.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(EU, this, UU.mesh), UU.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(EU, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(UU, RU, gU, tU) {
        if (!this._geometry) return null;
        let pU = tU ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[UU]?.getFloatData(this.instances.length + 1, gU || RU && 1 !== this._geometry.meshes.length);
        return pU || (pU = this._geometry.getVerticesData(UU, RU, gU)), pU
      }
      copyVerticesData(UU, RU) {
        this._geometry && this._geometry.copyVerticesData(UU, RU)
      }
      getVertexBuffer(UU, RU) {
        return this._geometry ? (RU ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[UU]) ?? this._geometry.getVertexBuffer(UU) : null
      }
      isVerticesDataPresent(UU, RU) {
        return this._geometry ? !RU && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[UU] || this._geometry.isVerticesDataPresent(UU) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(UU)
      }
      isVertexBufferUpdatable(UU, RU) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(UU);
        if (!RU) {
          const RU = this._userInstancedBuffersStorage?.vertexBuffers[UU];
          if (RU) return RU.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(UU)
      }
      getVerticesDataKinds(UU) {
        if (!this._geometry) {
          const UU = [];
          if (this._delayInfo)
            for (const RU of this._delayInfo) UU.push(RU);
          return UU
        }
        const RU = this._geometry.getVerticesDataKinds();
        if (!UU && this._userInstancedBuffersStorage)
          for (const gU in this._userInstancedBuffersStorage.vertexBuffers) - 1 === RU.indexOf(gU) && RU.push(gU);
        return RU
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      dgU(UU, RU) {
        return this._geometry ? this._geometry.dgU(UU, RU) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(UU)) return !1;
        if (!this.ZI || 0 === this.ZI.length) return !0;
        if (!UU) return !0;
        const gU = this.WC(),
          tU = this.aZ(),
          pU = RU || gU.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const EU = this.material || tU.defaultMaterial;
        if (EU)
          if (EU._storeEffectOnSubMeshes)
            for (const TU of this.ZI) {
              const UU = TU.JC();
              if (UU)
                if (UU._storeEffectOnSubMeshes) {
                  if (!UU.isReadyForSubMesh(this, TU, pU)) return !1
                } else if (!UU.isReady(this, pU)) return !1
            } else if (!EU.isReady(this, pU)) return !1;
        const PU = gU.currentRenderPassId;
        for (const TU of this.lightSources) {
          const UU = TU.getShadowGenerators();
          if (!UU) continue;
          const RU = UU.values();
          for (let tU = RU.next(); !0 !== tU.done; tU = RU.next()) {
            const UU = tU.value;
            if (UU && (!UU.getShadowMap()?.renderList || UU.getShadowMap()?.renderList && -1 !== UU.getShadowMap()?.renderList?.indexOf(this))) {
              const RU = UU.getShadowMap().renderPassIds ?? [gU.currentRenderPassId];
              for (let tU = 0; tU < RU.length; ++tU) {
                gU.currentRenderPassId = RU[tU];
                for (const RU of this.ZI)
                  if (!UU.isReady(RU, pU, RU.JC()?.needAlphaBlendingForMesh(this) ?? !1)) return gU.currentRenderPassId = PU, !1
              }
              gU.currentRenderPassId = PU
            }
          }
        }
        for (const TU of this._internalMeshDataInfo._LODLevels)
          if (TU.mesh && !TU.mesh.isReady(pU)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      wC() {
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
        let RU = this._instanceDataStorage.renderPasses[UU];
        return RU || (RU = new iU, this._instanceDataStorage.renderPasses[UU] = RU), RU
      }
      _preActivate() {
        const UU = this._internalMeshDataInfo,
          RU = this.aZ().getRenderId();
        return UU._preActivateId === RU || (UU._preActivateId = RU, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(UU) {
        const RU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return RU.visibleInstances && (RU.visibleInstances.intermediateDefaultRenderId = UU), this
      }
      _registerInstanceForRenderId(UU, RU) {
        const gU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return gU.visibleInstances || (gU.visibleInstances = {
          defaultRenderId: RU,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), gU.visibleInstances[RU] || (void 0 === gU.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete gU.visibleInstances[gU.previousRenderId], gU.previousRenderId = RU, gU.visibleInstances[RU] = new Array), gU.visibleInstances[RU].push(UU), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.IC || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let UU, RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.lY().isLocked) return this;
        UU = "object" === typeof RU ? RU : {
          applySkeleton: RU,
          applyMorph: gU
        };
        const tU = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(UU, null, oU.l.PositionKind), tU), this
      }
      _createGlobalSubMesh(UU) {
        const RU = this.getTotalVertices();
        if (!RU || !this.dgU()) return null;
        if (this.ZI && this.ZI.length > 0) {
          const gU = this.dgU();
          if (!gU) return null;
          const tU = gU.length;
          let pU = !1;
          if (UU) pU = !0;
          else
            for (const UU of this.ZI) {
              if (UU.indexStart + UU.indexCount > tU) {
                pU = !0;
                break
              }
              if (UU.verticesStart + UU.verticesCount > RU) {
                pU = !0;
                break
              }
            }
          if (!pU) return this.ZI[0]
        }
        return this.releaseSubMeshes(), new BU.d(0, 0, RU, 0, this.getTotalIndices() || (this.isUnIndexed ? RU : 0), this)
      }
      subdivide(UU) {
        if (UU < 1) return;
        const RU = this.getTotalIndices();
        let gU = RU / UU | 0,
          tU = 0;
        for (; gU % 3 !== 0;) gU++;
        this.releaseSubMeshes();
        for (let pU = 0; pU < UU && !(tU >= RU); pU++) BU.d.CreateFromIndices(0, tU, tU + gU >= RU ? RU - tU : gU, this, void 0, !1), tU += gU;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(UU, RU, gU, tU);
        else {
          const tU = new ZU.b;
          tU.set(RU, UU);
          const pU = this.aZ();
          new aU.b(aU.b.RandomId(), pU, tU, gU, this)
        }
        return this
      }
      removeVerticesData(UU) {
        this._geometry && this._geometry.removeVerticesData(UU)
      }
      markVerticesDataAsUpdatable(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gU = this.getVertexBuffer(UU);
        gU && gU.isUpdatable() !== RU && this.setVerticesData(UU, this.getVerticesData(UU), RU)
      }
      setVerticesBuffer(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = aU.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(UU, gU, RU), this
      }
      updateVerticesData(UU, RU, gU, tU) {
        return this._geometry ? (tU ? (this.makeGeometryUnique(), this.updateVerticesData(UU, RU, gU, !1)) : this._geometry.updateVerticesData(UU, RU, gU), this) : this
      }
      updateMeshPositions(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gU = this.getVerticesData(oU.l.PositionKind);
        if (!gU) return this;
        if (UU(gU), this.updateVerticesData(oU.l.PositionKind, gU, !1, !1), RU) {
          const UU = this.dgU(),
            RU = this.getVerticesData(oU.l.NormalKind);
          if (!RU) return this;
          ZU.b.ComputeNormals(gU, UU, RU), this.updateVerticesData(oU.l.NormalKind, RU, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const UU = this._geometry,
          RU = this._geometry.copy(aU.b.RandomId());
        return UU.releaseForMesh(this, !0), RU.applyToMesh(this), this
      }
      setIndexBuffer(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pU = this._geometry;
        pU || (pU = new aU.b(aU.b.RandomId(), this.aZ(), void 0, void 0, this)), pU.setIndexBuffer(UU, RU, gU, tU)
      }
      setIndices(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(UU, RU, gU, tU);
        else {
          const tU = new ZU.b;
          tU.indices = UU;
          const pU = this.aZ();
          new aU.b(aU.b.RandomId(), pU, tU, gU, this, RU)
        }
        return this
      }
      updateIndices(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(UU, RU, gU), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(UU, RU, gU) {
        let tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const pU = this.aZ().WC();
        let EU;
        if (this._unIndexed)
          if (this._getRenderingFillMode(gU) === VU.c.WireFrameFillMode) EU = UU._getLinesIndexBuffer(this.dgU(), pU);
          else EU = null;
        else switch (this._getRenderingFillMode(gU)) {
          case VU.c.PointFillMode:
            EU = null;
            break;
          case VU.c.WireFrameFillMode:
            EU = UU._getLinesIndexBuffer(this.dgU(), pU);
            break;
          default:
          case VU.c.TriangleFillMode:
            EU = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(RU, EU, tU)
      }
      _bindDirect(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(UU), gU && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const UU = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const RU in UU) this._userInstancedBuffersStorage.vertexBuffers[RU] = UU[RU]
          }
          this._geometry._bind(UU, RU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(UU, RU);
        return this
      }
      _draw(UU, RU, gU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const tU = this.aZ().WC(),
          pU = tU._currentMaterialContext,
          EU = pU && pU.useVertexPulling;
        return this._unIndexed && RU !== VU.c.WireFrameFillMode || RU == VU.c.PointFillMode ? tU.drawArraysType(RU, UU.verticesStart, UU.verticesCount, this.forcedInstanceCount || gU) : RU == VU.c.WireFrameFillMode ? tU.drawElementsType(RU, 0, UU._linesIndexCount, this.forcedInstanceCount || gU) : EU ? tU.drawArraysType(RU, UU.indexStart, UU.indexCount, this.forcedInstanceCount || gU) : tU.drawElementsType(RU, UU.indexStart, UU.indexCount, this.forcedInstanceCount || gU), this
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
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (RU) return gU.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[UU] = !1, gU.batchCacheReplacementModeInFrozenMode.renderSelf[UU] = !0, gU.batchCacheReplacementModeInFrozenMode;
          if (gU.previousBatch) return gU.previousBatch
        }
        const tU = this.aZ(),
          pU = tU._isInIntermediateRendering(),
          EU = pU ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          PU = gU.batchCache;
        if (PU.mustReturn = !1, PU.renderSelf[UU] = RU || !EU && this.isEnabled() && this.isVisible, PU.visibleInstances[UU] = null, gU.visibleInstances && !RU) {
          const RU = gU.visibleInstances,
            EU = tU.getRenderId(),
            TU = pU ? RU.intermediateDefaultRenderId : RU.defaultRenderId;
          PU.visibleInstances[UU] = RU[EU], !PU.visibleInstances[UU] && TU && (PU.visibleInstances[UU] = RU[TU])
        }
        return PU.hardwareInstancedRendering[UU] = !RU && this._instanceDataStorage.hardwareInstancedRendering && null !== PU.visibleInstances[UU] && void 0 !== PU.visibleInstances[UU], gU.previousBatch = PU, PU
      }
      _updateInstancedBuffers(UU, RU, gU, tU, pU, EU) {
        const PU = RU.visibleInstances[UU._id],
          TU = PU ? PU.length : 0,
          qU = RU.parent,
          KU = this._instanceDataStorage;
        let cU = qU.instancesBuffer,
          GU = qU.instancesPreviousBuffer,
          jU = 0,
          uU = 0;
        const CU = RU.renderSelf[UU._id],
          hU = this._scene.floatingOriginOffset,
          QU = !cU || gU !== qU.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !qU.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || KU.isFrozen && !QU) uU = (CU ? 1 : 0) + TU;
        else {
          const RU = this.getWorldMatrix();
          if (CU) {
            this._scene.needsPreviousWorldMatrices && (KU.masterMeshPreviousWorldMatrix ? (KU.masterMeshPreviousWorldMatrix.copyToArray(qU.instancesPreviousData, jU), KU.masterMeshPreviousWorldMatrix.PgU(RU)) : (KU.masterMeshPreviousWorldMatrix = RU.clone(), KU.masterMeshPreviousWorldMatrix.copyToArray(qU.instancesPreviousData, jU))), RU.copyToArray(qU.instancesData, jU);
            const UU = RU.vgU();
            qU.instancesData[jU + 12] = UU[12] - hU.x, qU.instancesData[jU + 13] = UU[13] - hU.y, qU.instancesData[jU + 14] = UU[14] - hU.z, jU += 16, uU++
          }
          if (PU) {
            if (NU.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && UU.JC()?.needAlphaBlendingForMesh(UU.getRenderingMesh())) {
              const UU = this._scene.activeCamera.globalPosition;
              for (let RU = 0; RU < PU.length; RU++) {
                const gU = PU[RU];
                gU._distanceToCamera = wU.n.Distance(gU.lY().qtU.centerWorld, UU)
              }
              PU.sort(((UU, RU) => UU._distanceToCamera > RU._distanceToCamera ? -1 : UU._distanceToCamera < RU._distanceToCamera ? 1 : 0))
            }
            for (let UU = 0; UU < PU.length; UU++) {
              const RU = PU[UU],
                gU = RU.getWorldMatrix();
              gU.copyToArray(qU.instancesData, jU), this._scene.needsPreviousWorldMatrices && (RU._previousWorldMatrix ? (RU._previousWorldMatrix.copyToArray(qU.instancesPreviousData, jU), RU._previousWorldMatrix.PgU(gU)) : (RU._previousWorldMatrix = gU.clone(), RU._previousWorldMatrix.copyToArray(qU.instancesPreviousData, jU)));
              const tU = gU.vgU();
              qU.instancesData[jU + 12] = tU[12] - hU.x, qU.instancesData[jU + 13] = tU[13] - hU.y, qU.instancesData[jU + 14] = tU[14] - hU.z, jU += 16, uU++
            }
          }
        }
        if (QU) {
          let UU;
          if (cU && cU.dispose(), GU && GU.dispose(), cU = new oU.e(tU, qU.instancesData, !0, 16, !1, !0), qU.instancesBuffer = cU, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.WC().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) UU = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const RU = this._instanceDataStorage.engine.currentRenderPassId;
            UU = this._userInstancedBuffersStorage.renderPasses[RU], UU || (this._userInstancedBuffersStorage.renderPasses[RU] = UU = {})
          }
          UU.world0 = cU.createVertexBuffer("world0", 0, 4), UU.world1 = cU.createVertexBuffer("world1", 4, 4), UU.world2 = cU.createVertexBuffer("world2", 8, 4), UU.world3 = cU.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (GU = new oU.e(tU, qU.instancesPreviousData, !0, 16, !1, !0), qU.instancesPreviousBuffer = GU, UU.previousWorld0 = GU.createVertexBuffer("previousWorld0", 0, 4), UU.previousWorld1 = GU.createVertexBuffer("previousWorld1", 4, 4), UU.previousWorld2 = GU.createVertexBuffer("previousWorld2", 8, 4), UU.previousWorld3 = GU.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (cU.updateDirectly(qU.instancesData, 0, uU), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || GU.updateDirectly(qU.instancesPreviousData, 0, uU));
        this._processInstancedBuffers(PU, CU), EU && void 0 !== pU && (this.aZ()._activeIndices.addCount(UU.indexCount * uU, !1), tU._currentDrawContext && (tU._currentDrawContext.useInstancing = !0), this._bind(UU, EU, pU), this._draw(UU, pU, uU)), !this._scene.needsPreviousWorldMatrices || QU || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || GU.updateDirectly(qU.instancesData, 0, uU)
      }
      _renderWithInstances(UU, RU, gU, tU, pU) {
        const EU = gU.visibleInstances[UU._id],
          PU = EU ? EU.length : 0,
          TU = gU.parent,
          qU = TU.instancesBufferSize,
          KU = 16 * (PU + 1) * 4;
        for (; TU.instancesBufferSize < KU;) TU.instancesBufferSize *= 2;
        return TU.instancesData && qU == TU.instancesBufferSize || (TU.instancesData = new Float32Array(TU.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !TU.instancesPreviousData || qU != TU.instancesBufferSize) && (TU.instancesPreviousData = new Float32Array(TU.instancesBufferSize / 4)), this._updateInstancedBuffers(UU, gU, qU, pU, RU, tU), pU.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(UU, RU, gU, tU) {
        const pU = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.aZ()._activeIndices.addCount(UU.indexCount * pU, !1), tU._currentDrawContext && (tU._currentDrawContext.useInstancing = !0), this._bind(UU, gU, RU), this._draw(UU, RU, pU), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, pU) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), tU.unbindInstanceAttributes()
      }
      _processInstancedBuffers(UU, RU) {}
      _processRendering(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = this.aZ(),
          KU = qU.WC();
        if (tU = this._getRenderingFillMode(tU), EU && RU.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(RU, tU, gU, KU), this;
        if (EU) this._renderWithInstances(RU, tU, pU, gU, KU);
        else {
          KU._currentDrawContext && (KU._currentDrawContext.useInstancing = !1);
          let gU = 0;
          pU.renderSelf[RU._id] && (PU && PU(!1, UU.getWorldMatrix(), TU), gU++, this._draw(RU, tU, this._instanceDataStorage.overridenInstanceCount));
          const EU = pU.visibleInstances[RU._id];
          if (EU) {
            const UU = EU.length;
            gU += UU;
            for (let gU = 0; gU < UU; gU++) {
              const UU = EU[gU].getWorldMatrix();
              PU && PU(!0, UU, TU), this._draw(RU, tU)
            }
          }
          qU._activeIndices.addCount(RU.indexCount * gU, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU?.instancesBuffer && (RU && UU.instancesBuffer.dispose(), UU.instancesBuffer = null), UU?.instancesPreviousBuffer && (RU && UU.instancesPreviousBuffer.dispose(), UU.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const RU in this._instanceDataStorage.renderPasses) {
          const gU = this._instanceDataStorage.renderPasses[RU];
          this._disposeInstanceDataStorageRenderPass(gU, UU)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, UU), this._userInstancedBuffersStorage) {
          for (const RU in this._userInstancedBuffersStorage.vertexBuffers) {
            const gU = this._userInstancedBuffersStorage.vertexBuffers[RU];
            gU && (UU && gU.dispose(), this._userInstancedBuffersStorage.vertexBuffers[RU] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(UU)
      }
      _releaseRenderPassId(UU) {
        const RU = this._instanceDataStorage.renderPasses[UU];
        if (RU && (this._disposeInstanceDataStorageRenderPass(RU, !0), delete this._instanceDataStorage.renderPasses[UU]), this._userInstancedBuffersStorage?.renderPasses) {
          const RU = this._userInstancedBuffersStorage.renderPasses[UU];
          if (RU)
            for (const UU in RU) RU[UU]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[UU]
        }
        const gU = this._userInstancedBuffersStorage?.interleavedBuffers;
        gU?.[UU] && (gU[UU].buffer.dispose(), delete gU[UU])
      }
      _freeze() {
        if (this.ZI) {
          for (let UU = 0; UU < this.ZI.length; UU++) this._getInstancesRenderList(UU);
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
      renderWithRenderPassId(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const EU = this._scene.WC(),
          PU = EU.currentRenderPassId;
        if (void 0 !== UU && (EU.currentRenderPassId = UU), tU)(!pU || pU && tU.isInFrustum(this._scene._frustumPlanes)) && this.render(tU, !!RU, gU);
        else
          for (let TU = 0; TU < this.ZI.length; TU++) {
            const UU = this.ZI[TU];
            (!pU || pU && UU.isInFrustum(this._scene._frustumPlanes)) && this.render(UU, !!RU, gU)
          }
        return void 0 !== UU && (EU.currentRenderPassId = PU), this
      }
      directRender() {
        if (!this.ZI) return this;
        for (const UU of this.ZI) this.render(UU, !1);
        return this
      }
      render(UU, RU, gU) {
        const tU = this.aZ(),
          pU = tU.WC();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const EU = tU.activeCameras?.length ?? 0,
          PU = EU > 1 && tU.activeCamera === tU.activeCameras[0] || EU <= 1,
          TU = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== pU.currentRenderPassId;
        if (PU && this._checkOcclusionQuery(TU) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const qU = this._getInstancesRenderList(UU._id, !!gU);
        if (qU.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let KU = 0,
          cU = null;
        this.ignoreCameraMaxZ && tU.activeCamera && !tU._isInIntermediateRendering() && (KU = tU.activeCamera.maxZ, cU = tU.activeCamera, tU.activeCamera.maxZ = 0, tU.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const GU = UU.getRenderingMesh(),
          jU = qU.hardwareInstancedRendering[UU._id] || GU.hasThinInstances || !!this._userInstancedBuffersStorage && !UU.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          uU = this._instanceDataStorage,
          CU = UU.JC();
        if (!CU) return cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), this;
        if (uU.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === CU) {
          if (CU._storeEffectOnSubMeshes && !UU._drawWrapper?._wasPreviouslyReady || !CU._storeEffectOnSubMeshes && !CU._getDrawWrapper()._wasPreviouslyReady) return cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), this
        } else {
          if (CU._storeEffectOnSubMeshes) {
            if (!CU.isReadyForSubMesh(this, UU, jU)) return cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), this
          } else if (!CU.isReady(this, jU)) return cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = CU
        }
        if (RU) {
          const UU = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === UU.alphaModes.length) pU.setAlphaMode(UU.alphaMode);
          else
            for (let RU = 0; RU < UU.alphaModes.length; RU++) {
              const gU = UU.alphaModes[RU];
              pU.setAlphaMode(void 0 !== gU ? gU : 2, !1, RU)
            }
        }
        let hU;
        hU = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? UU._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const QU = hU?.effect ?? null;
        for (let JU = 0, wU = tU._beforeRenderingMeshStage; JU < wU.length; JU++) {
          wU[JU].action(this, UU, qU, QU)
        }
        if (!hU || !QU) return cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), this;
        const eU = gU || this;
        let WU;
        if (!uU.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const UU = eU._getWorldMatrixDeterminant();
          WU = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), UU < 0 && (WU = WU === VU.c.ClockWiseSideOrientation ? VU.c.CounterClockWiseSideOrientation : VU.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = WU
        }
        const fU = this._internalMeshDataInfo._effectiveMaterial._preBind(hU, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && pU.setDepthWrite(!0);
        const xU = this._internalMeshDataInfo._effectiveMaterial,
          mU = xU.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), jU || this._bind(UU, QU, mU, !1);
        const IU = eU.getWorldMatrix();
        xU._storeEffectOnSubMeshes ? xU.bindForSubMesh(IU, this, UU) : xU.bind(IU, this);
        try {
          rU.e._BindAttachmentsForEffect(pU, QU) && (!xU.backFaceCulling && xU.separateCullingPass && (pU.setState(!0, xU.zOffset, !1, !fU, xU.cullBackFaces, xU.stencil, xU.zOffsetUnits), this._processRendering(this, UU, QU, mU, qU, jU, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), pU.setState(!0, xU.zOffset, !1, fU, xU.cullBackFaces, xU.stencil, xU.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(UU)), this._processRendering(this, UU, QU, mU, qU, jU, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          rU.e._RestoreAttachments(pU)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let JU = 0, wU = tU._afterRenderingMeshStage; JU < wU.length; JU++) {
          wU[JU].action(this, UU, qU, QU)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), cU && (cU.maxZ = KU, tU.updateTransformMatrix(!0)), 2 !== tU.performancePriority || uU.isFrozen || this._freeze(), this
      }
      _renderRunFollower(UU, RU) {
        const gU = this._scene,
          tU = gU._engine;
        if (tU.isWebGPU || UU._mesh !== this || 0 !== this.instances.length || this.render !== NU.prototype.render) return !1;
        const pU = UU.JC();
        if (!pU || pU !== gU._cachedMaterial || void 0 === pU._canBindRunFollower) return !1;
        const EU = UU._drawWrapper,
          PU = EU?.effect;
        if (!PU || PU !== gU._cachedEffect || this.visibility !== gU._cachedVisibility || EU._forceRebindOnNextCall) return !1;
        const TU = this.hasThinInstances;
        if (!TU && this._userInstancedBuffersStorage) return !1;
        if (!EU._wasPreviouslyReady || EU._wasPreviouslyUsingInstances !== TU) return !1;
        const qU = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || gU._isInIntermediateRendering() || 0 !== gU._beforeRenderingMeshStage.length || 0 !== gU._afterRenderingMeshStage.length || qU._onBeforeRenderObservable?.hasObservers() || qU._onBeforeBindObservable?.hasObservers() || qU._onAfterRenderObservable?.hasObservers()) return !1;
        const KU = this.occlusionType;
        if (void 0 !== KU && KU !== YU.d.OCCLUSION_TYPE_NONE || !pU._canBindRunFollower(gU, tU, this, UU, PU)) return !1;
        const cU = this._internalAbstractMeshDataInfo,
          GU = cU._isActiveIntermediate;
        GU ? cU._isActiveIntermediate = !1 : cU._isActive = !1;
        const jU = gU.activeCameras?.length ?? 0;
        (jU > 1 && gU.activeCamera === gU.activeCameras[0] || jU <= 1) && this._checkOcclusionQuery(!1);
        const uU = this._getInstancesRenderList(UU._id);
        if (uU.mustReturn) return !0;
        if (!TU && !uU.renderSelf[UU._id]) return GU ? cU._isActiveIntermediate = !0 : cU._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (qU._effectiveMaterial = pU, RU)
          if (1 === pU.alphaModes.length) tU.setAlphaMode(pU.alphaMode);
          else
            for (let hU = 0; hU < pU.alphaModes.length; hU++) {
              const UU = pU.alphaModes[hU];
              tU.setAlphaMode(void 0 !== UU ? UU : 2, !1, hU)
            }
        if (pU.backFaceCulling || null !== pU.sideOrientation || pU._twoSidedLighting) {
          const UU = this._getWorldMatrixDeterminant();
          let RU = pU._getEffectiveOrientation(this);
          UU < 0 && (RU = RU === VU.c.ClockWiseSideOrientation ? VU.c.CounterClockWiseSideOrientation : VU.c.ClockWiseSideOrientation), qU._effectiveSideOrientation = RU
        }
        pU._preBind(EU, qU._effectiveSideOrientation), pU.forceDepthWrite && tU.setDepthWrite(!0);
        const CU = pU.fillMode;
        return TU || this._bind(UU, PU, CU, !1), pU._bindRunFollower(this.getWorldMatrix(), this, UU, PU), this._processRendering(this, UU, PU, CU, uU, TU, this._onBeforeDraw, pU), pU.unbind(), 2 === gU.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(oU.l.MatricesWeightsKind) && (this.isVerticesDataPresent(oU.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const UU = this.getVerticesData(oU.l.MatricesWeightsKind),
          RU = UU.length;
        for (let gU = 0; gU < RU; gU += 4) {
          const RU = UU[gU] + UU[gU + 1] + UU[gU + 2] + UU[gU + 3];
          if (0 === RU) UU[gU] = 1;
          else {
            const tU = 1 / RU;
            UU[gU] *= tU, UU[gU + 1] *= tU, UU[gU + 2] *= tU, UU[gU + 3] *= tU
          }
        }
        this.setVerticesData(oU.l.MatricesWeightsKind, UU)
      }
      _normalizeSkinWeightsAndExtra() {
        const UU = this.getVerticesData(oU.l.MatricesWeightsExtraKind),
          RU = this.getVerticesData(oU.l.MatricesWeightsKind),
          gU = RU.length;
        for (let tU = 0; tU < gU; tU += 4) {
          let gU = RU[tU] + RU[tU + 1] + RU[tU + 2] + RU[tU + 3];
          if (gU += UU[tU] + UU[tU + 1] + UU[tU + 2] + UU[tU + 3], 0 === gU) RU[tU] = 1;
          else {
            const pU = 1 / gU;
            RU[tU] *= pU, RU[tU + 1] *= pU, RU[tU + 2] *= pU, RU[tU + 3] *= pU, UU[tU] *= pU, UU[tU + 1] *= pU, UU[tU + 2] *= pU, UU[tU + 3] *= pU
          }
        }
        this.setVerticesData(oU.l.MatricesWeightsKind, RU), this.setVerticesData(oU.l.MatricesWeightsKind, UU)
      }
      validateSkinning() {
        const UU = this.getVerticesData(oU.l.MatricesWeightsExtraKind),
          RU = this.getVerticesData(oU.l.MatricesWeightsKind);
        if (null === RU || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          ku: "not skinned"
        };
        const gU = RU.length;
        let tU = 0,
          pU = 0,
          EU = 0,
          PU = 0;
        const TU = null === UU ? 4 : 8,
          qU = [];
        for (let uU = 0; uU <= TU; uU++) qU[uU] = 0;
        for (let uU = 0; uU < gU; uU += 4) {
          let gU = RU[uU],
            KU = gU,
            cU = 0 === KU ? 0 : 1;
          for (let pU = 1; pU < TU; pU++) {
            const EU = pU < 4 ? RU[uU + pU] : UU[uU + pU - 4];
            EU > gU && tU++, 0 !== EU && cU++, KU += EU, gU = EU
          }
          if (qU[cU]++, cU > EU && (EU = cU), 0 === KU) pU++;
          else {
            const gU = 1 / KU;
            let tU = 0;
            for (let pU = 0; pU < TU; pU++) tU += pU < 4 ? Math.abs(RU[uU + pU] - RU[uU + pU] * gU) : Math.abs(UU[uU + pU - 4] - UU[uU + pU - 4] * gU);
            tU > .001 && PU++
          }
        }
        const KU = this.skeleton.bones.length,
          cU = this.getVerticesData(oU.l.MatricesIndicesKind),
          GU = this.getVerticesData(oU.l.MatricesIndicesExtraKind);
        let jU = 0;
        for (let uU = 0; uU < gU; uU += 4)
          for (let UU = 0; UU < TU; UU++) {
            const RU = UU < 4 ? cU[uU + UU] : GU[uU + UU - 4];
            (RU >= KU || RU < 0) && jU++
          }
        return {
          skinned: !0,
          valid: 0 === pU && 0 === PU && 0 === jU,
          ku: "Number of Weights = " + gU / 4 + "\nMaximum influences = " + EU + "\nMissing Weights = " + pU + "\nNot Sorted = " + tU + "\nNot Normalized = " + PU + "\nWeightCounts = [" + qU + "]\nNumber of bones = " + KU + "\nBad Bone Indices = " + jU
        }
      }
      _checkDelayState() {
        const UU = this.aZ();
        return this._geometry ? this._geometry.load(UU) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(UU)), this
      }
      _queueLoad(UU) {
        UU.addPendingData(this);
        const RU = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const gU = await UU._loadDelayedFileAsync(this.delayLoadingFile, RU, !0);
            gU instanceof ArrayBuffer ? this._delayLoadingFunction(gU, this) : this._delayLoadingFunction(JSON.parse(gU), this);
            for (const UU of this.instances) UU.refreshBoundingInfo(), UU._syncSubMeshes();
            this.delayLoadState = 1, UU.removePendingData(this)
          } catch (gU) {
            UU.removePendingData(this), UU.lRU || HU.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${gU}`)
          }
        })(), this
      }
      isInFrustum(UU) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(UU) && (this._checkDelayState(), !0))
      }
      setMaterialById(UU) {
        const RU = this.aZ().materials;
        let gU;
        for (gU = RU.length - 1; gU > -1; gU--)
          if (RU[gU].id === UU) return this.material = RU[gU], this;
        const tU = this.aZ().multiMaterials;
        for (gU = tU.length - 1; gU > -1; gU--)
          if (tU[gU].id === UU) return this.material = tU[gU], this;
        return this
      }
      getAnimatables() {
        const UU = [];
        return this.material && UU.push(this.material), this.skeleton && UU.push(this.skeleton), UU
      }
      bakeTransformIntoVertices(UU) {
        if (!this.isVerticesDataPresent(oU.l.PositionKind)) return this;
        const RU = this.ZI.splice(0);
        this._resetPointsArrayCache();
        let gU = this.getVerticesData(oU.l.PositionKind);
        const tU = wU.n.Zero();
        let pU;
        for (pU = 0; pU < gU.length; pU += 3) wU.n.TransformCoordinatesFromFloatsToRef(gU[pU], gU[pU + 1], gU[pU + 2], UU, tU).toArray(gU, pU);
        if (this.setVerticesData(oU.l.PositionKind, gU, this.getVertexBuffer(oU.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(oU.l.NormalKind)) {
          for (gU = this.getVerticesData(oU.l.NormalKind), pU = 0; pU < gU.length; pU += 3) wU.n.TransformNormalFromFloatsToRef(gU[pU], gU[pU + 1], gU[pU + 2], UU, tU).normalize().toArray(gU, pU);
          this.setVerticesData(oU.l.NormalKind, gU, this.getVertexBuffer(oU.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(oU.l.TangentKind)) {
          for (gU = this.getVerticesData(oU.l.TangentKind), pU = 0; pU < gU.length; pU += 4) wU.n.TransformNormalFromFloatsToRef(gU[pU], gU[pU + 1], gU[pU + 2], UU, tU).normalize().toArray(gU, pU);
          this.setVerticesData(oU.l.TangentKind, gU, this.getVertexBuffer(oU.l.TangentKind).isUpdatable())
        }
        return UU.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.ZI = RU, this
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
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (RU && void 0 === RU._addToSceneRootNodes) {
          const gU = RU;
          return LU.source = this, LU.doNotCloneChildren = gU.doNotCloneChildren, LU.clonePhysicsImpostor = gU.clonePhysicsImpostor, LU.cloneThinInstances = gU.cloneThinInstances, new NU(UU, this.aZ(), LU)
        }
        return new NU(UU, this.aZ(), RU, this, gU, tU)
      }
      dispose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const gU = this._internalMeshDataInfo;
        if (gU._onBeforeDrawObservable && gU._onBeforeDrawObservable.clear(), gU._onBeforeBindObservable && gU._onBeforeBindObservable.clear(), gU._onBeforeRenderObservable && gU._onBeforeRenderObservable.clear(), gU._onAfterRenderObservable && gU._onAfterRenderObservable.clear(), gU._onBetweenPassObservable && gU._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (gU.meshMap)
            for (const UU in gU.meshMap) {
              const RU = gU.meshMap[UU];
              RU && (RU._internalMeshDataInfo._source = null, gU.meshMap[UU] = void 0)
            }
          gU._source && gU._source._internalMeshDataInfo.meshMap && (gU._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const UU = this.aZ().meshes;
          for (const RU of UU) {
            const UU = RU;
            UU._internalMeshDataInfo && UU._internalMeshDataInfo._source && UU._internalMeshDataInfo._source === this && (UU._internalMeshDataInfo._source = null)
          }
        }
        gU._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(UU, RU)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(UU, RU, gU, tU, pU, EU) {
        let PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          TU = arguments.length > 7 ? arguments[7] : void 0;
        const qU = this.aZ();
        return (0, fU.p)(UU, (UU => {
          const TU = UU.width,
            qU = UU.height,
            KU = this.WC().createCanvas(TU, qU).getContext("2d");
          KU.drawImage(UU, 0, 0);
          const cU = KU.getImageData(0, 0, TU, qU).data;
          this.applyDisplacementMapFromBuffer(cU, TU, qU, RU, gU, pU, EU, PU), tU && tU(this)
        }), TU || (() => {}), qU.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(UU, RU, gU, tU, pU, EU, PU) {
        let TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(oU.l.PositionKind) || !this.isVerticesDataPresent(oU.l.NormalKind) || !this.isVerticesDataPresent(oU.l.UVKind)) return HU.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const qU = this.getVerticesData(oU.l.PositionKind, !0, !0),
          KU = this.getVerticesData(oU.l.NormalKind),
          cU = this.getVerticesData(oU.l.UVKind);
        let GU = wU.n.Zero();
        const jU = wU.n.Zero(),
          uU = wU.l.Zero();
        EU = EU || wU.l.Zero(), PU = PU || new wU.l(1, 1);
        for (let CU = 0; CU < qU.length; CU += 3) {
          wU.n.FromArrayToRef(qU, CU, GU), wU.n.FromArrayToRef(KU, CU, jU), wU.l.FromArrayToRef(cU, CU / 3 * 2, uU);
          const TU = 4 * ((Math.abs(uU.x * PU.x + EU.x % 1) * (RU - 1) % RU | 0) + (Math.abs(uU.y * PU.y + EU.y % 1) * (gU - 1) % gU | 0) * RU),
            hU = .3 * (UU[TU] / 255) + .59 * (UU[TU + 1] / 255) + .11 * (UU[TU + 2] / 255);
          jU.normalize(), jU.scaleInPlace(tU + (pU - tU) * hU), GU = GU.add(jU), GU.toArray(qU, CU)
        }
        return ZU.b.ComputeNormals(qU, this.dgU(), KU), TU ? (this.setVerticesData(oU.l.PositionKind, qU), this.setVerticesData(oU.l.NormalKind, KU), this.setVerticesData(oU.l.UVKind, cU)) : (this.updateVerticesData(oU.l.PositionKind, qU), this.updateVerticesData(oU.l.NormalKind, KU)), this
      }
      _getFlattenedNormals(UU, RU) {
        const gU = new Float32Array(3 * UU.length);
        let tU = 0;
        const pU = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let EU = 0; EU < UU.length; EU += 3) {
          const PU = wU.n.FromArray(RU, 3 * UU[EU]),
            TU = wU.n.FromArray(RU, 3 * UU[EU + 1]),
            qU = wU.n.FromArray(RU, 3 * UU[EU + 2]),
            KU = PU.subtract(TU),
            cU = qU.subtract(TU),
            GU = wU.n.Normalize(wU.n.Cross(KU, cU));
          pU && GU.scaleInPlace(-1);
          for (let UU = 0; UU < 3; UU++) gU[tU++] = GU.x, gU[tU++] = GU.y, gU[tU++] = GU.z
        }
        return gU
      }
      _convertToUnIndexedMesh() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = this.getVerticesDataKinds().filter((UU => !this.getVertexBuffer(UU)?.getIsInstanced())),
          gU = this.dgU(!1, !0),
          tU = {},
          pU = (UU, RU) => {
            const tU = new Float32Array(gU.length * RU);
            let pU = 0;
            for (let EU = 0; EU < gU.length; EU++)
              for (let PU = 0; PU < RU; PU++) tU[pU++] = UU[gU[EU] * RU + PU];
            return tU
          },
          EU = this.lY(),
          PU = this.geometry ? this.ZI.slice(0) : [];
        for (const TU of RU) tU[TU] = this.getVerticesData(TU);
        for (const TU of RU) {
          const RU = this.getVertexBuffer(TU),
            EU = RU.getSize();
          if (UU && TU === oU.l.NormalKind) {
            const UU = this._getFlattenedNormals(gU, tU[oU.l.PositionKind]);
            this.setVerticesData(oU.l.NormalKind, UU, RU.isUpdatable(), EU)
          } else this.setVerticesData(TU, pU(tU[TU], EU), RU.isUpdatable(), EU)
        }
        if (this.morphTargetManager) {
          for (let RU = 0; RU < this.morphTargetManager.numTargets; RU++) {
            const tU = this.morphTargetManager.getTarget(RU),
              EU = tU.getPositions();
            tU.KPU(pU(EU, 3));
            const PU = tU.getNormals();
            PU && tU.setNormals(UU ? this._getFlattenedNormals(gU, EU) : pU(PU, 3));
            const TU = tU.getTangents();
            TU && tU.setTangents(pU(TU, 3));
            const qU = tU.getUVs();
            qU && tU.setUVs(pU(qU, 2));
            const KU = tU.getColors();
            KU && tU.setColors(pU(KU, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let TU = 0; TU < gU.length; TU++) gU[TU] = TU;
        this.setIndices(gU), this._unIndexed = !0, this.releaseSubMeshes();
        for (const TU of PU) {
          const UU = TU.lY();
          BU.d.AddToMesh(TU.materialIndex, TU.indexStart, TU.indexCount, TU.indexStart, TU.indexCount, this).setBoundingInfo(UU)
        }
        return this.setBoundingInfo(EU), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = ZU.b.ExtractFromMesh(this);
        let gU;
        if (UU && this.isVerticesDataPresent(oU.l.NormalKind) && RU.normals) {
          for (gU = 0; gU < RU.normals.length; gU++) RU.normals[gU] *= -1;
          this.setVerticesData(oU.l.NormalKind, RU.normals, this.isVertexBufferUpdatable(oU.l.NormalKind))
        }
        if (RU.indices) {
          let UU;
          for (gU = 0; gU < RU.indices.length; gU += 3) UU = RU.indices[gU + 1], RU.indices[gU + 1] = RU.indices[gU + 2], RU.indices[gU + 2] = UU;
          this.setIndices(RU.indices, null, this.isVertexBufferUpdatable(oU.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const RU = ZU.b.ExtractFromMesh(this),
          gU = RU.indices && !Array.isArray(RU.indices) && Array.from ? Array.from(RU.indices) : RU.indices,
          tU = RU.positions && !Array.isArray(RU.positions) && Array.from ? Array.from(RU.positions) : RU.positions,
          pU = RU.uvs && !Array.isArray(RU.uvs) && Array.from ? Array.from(RU.uvs) : RU.uvs,
          EU = RU.normals && !Array.isArray(RU.normals) && Array.from ? Array.from(RU.normals) : RU.normals;
        if (gU && tU) {
          RU.indices = gU, RU.positions = tU, pU && (RU.uvs = pU), EU && (RU.normals = EU);
          const PU = UU + 1,
            TU = [];
          for (let UU = 0; UU < PU + 1; UU++) TU[UU] = [];
          let qU, KU;
          const cU = new wU.n(0, 0, 0),
            GU = new wU.n(0, 0, 0),
            jU = new wU.l(0, 0),
            uU = [],
            CU = [],
            hU = [];
          let QU, eU, WU, fU = tU.length;
          pU && (eU = pU.length), EU && (WU = EU.length);
          for (let UU = 0; UU < gU.length; UU += 3) {
            CU[0] = gU[UU], CU[1] = gU[UU + 1], CU[2] = gU[UU + 2];
            for (let UU = 0; UU < 3; UU++)
              if (qU = CU[UU], KU = CU[(UU + 1) % 3], void 0 === hU[qU] && void 0 === hU[KU] ? (hU[qU] = [], hU[KU] = []) : (void 0 === hU[qU] && (hU[qU] = []), void 0 === hU[KU] && (hU[KU] = [])), void 0 === hU[qU][KU] && void 0 === hU[KU][qU]) {
                hU[qU][KU] = [], cU.x = (tU[3 * KU] - tU[3 * qU]) / PU, cU.y = (tU[3 * KU + 1] - tU[3 * qU + 1]) / PU, cU.z = (tU[3 * KU + 2] - tU[3 * qU + 2]) / PU, EU && (GU.x = (EU[3 * KU] - EU[3 * qU]) / PU, GU.y = (EU[3 * KU + 1] - EU[3 * qU + 1]) / PU, GU.z = (EU[3 * KU + 2] - EU[3 * qU + 2]) / PU), pU && (jU.x = (pU[2 * KU] - pU[2 * qU]) / PU, jU.y = (pU[2 * KU + 1] - pU[2 * qU + 1]) / PU), hU[qU][KU].push(qU);
                for (let UU = 1; UU < PU; UU++) hU[qU][KU].push(tU.length / 3), tU[fU++] = tU[3 * qU] + UU * cU.x, tU[fU++] = tU[3 * qU + 1] + UU * cU.y, tU[fU++] = tU[3 * qU + 2] + UU * cU.z, EU && (EU[WU++] = EU[3 * qU] + UU * GU.x, EU[WU++] = EU[3 * qU + 1] + UU * GU.y, EU[WU++] = EU[3 * qU + 2] + UU * GU.z), pU && (pU[eU++] = pU[2 * qU] + UU * jU.x, pU[eU++] = pU[2 * qU + 1] + UU * jU.y);
                hU[qU][KU].push(KU), hU[KU][qU] = [], QU = hU[qU][KU].length;
                for (let UU = 0; UU < QU; UU++) hU[KU][qU][UU] = hU[qU][KU][QU - 1 - UU]
              } TU[0][0] = gU[UU], TU[1][0] = hU[gU[UU]][gU[UU + 1]][1], TU[1][1] = hU[gU[UU]][gU[UU + 2]][1];
            for (let RU = 2; RU < PU; RU++) {
              TU[RU][0] = hU[gU[UU]][gU[UU + 1]][RU], TU[RU][RU] = hU[gU[UU]][gU[UU + 2]][RU], cU.x = (tU[3 * TU[RU][RU]] - tU[3 * TU[RU][0]]) / RU, cU.y = (tU[3 * TU[RU][RU] + 1] - tU[3 * TU[RU][0] + 1]) / RU, cU.z = (tU[3 * TU[RU][RU] + 2] - tU[3 * TU[RU][0] + 2]) / RU, EU && (GU.x = (EU[3 * TU[RU][RU]] - EU[3 * TU[RU][0]]) / RU, GU.y = (EU[3 * TU[RU][RU] + 1] - EU[3 * TU[RU][0] + 1]) / RU, GU.z = (EU[3 * TU[RU][RU] + 2] - EU[3 * TU[RU][0] + 2]) / RU), pU && (jU.x = (pU[2 * TU[RU][RU]] - pU[2 * TU[RU][0]]) / RU, jU.y = (pU[2 * TU[RU][RU] + 1] - pU[2 * TU[RU][0] + 1]) / RU);
              for (let UU = 1; UU < RU; UU++) TU[RU][UU] = tU.length / 3, tU[fU++] = tU[3 * TU[RU][0]] + UU * cU.x, tU[fU++] = tU[3 * TU[RU][0] + 1] + UU * cU.y, tU[fU++] = tU[3 * TU[RU][0] + 2] + UU * cU.z, EU && (EU[WU++] = EU[3 * TU[RU][0]] + UU * GU.x, EU[WU++] = EU[3 * TU[RU][0] + 1] + UU * GU.y, EU[WU++] = EU[3 * TU[RU][0] + 2] + UU * GU.z), pU && (pU[eU++] = pU[2 * TU[RU][0]] + UU * jU.x, pU[eU++] = pU[2 * TU[RU][0] + 1] + UU * jU.y)
            }
            TU[PU] = hU[gU[UU + 1]][gU[UU + 2]], uU.push(TU[0][0], TU[1][0], TU[1][1]);
            for (let UU = 1; UU < PU; UU++) {
              let RU;
              for (RU = 0; RU < UU; RU++) uU.push(TU[UU][RU], TU[UU + 1][RU], TU[UU + 1][RU + 1]), uU.push(TU[UU][RU], TU[UU + 1][RU + 1], TU[UU][RU + 1]);
              uU.push(TU[UU][RU], TU[UU + 1][RU], TU[UU + 1][RU + 1])
            }
          }
          RU.indices = uU, RU.applyToMesh(this, this.isVertexBufferUpdatable(oU.l.PositionKind))
        } else HU.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const UU = ZU.b.ExtractFromMesh(this),
          RU = UU.uvs,
          gU = UU.indices,
          tU = UU.positions,
          pU = UU.colors,
          EU = UU.matricesIndices,
          PU = UU.matricesWeights,
          TU = UU.matricesIndicesExtra,
          qU = UU.matricesWeightsExtra;
        if (void 0 === gU || void 0 === tU || null === gU || null === tU) HU.e.Warn("VertexData contains empty entries");
        else {
          const KU = [],
            cU = [],
            GU = [],
            jU = [],
            uU = [],
            CU = [],
            hU = [],
            QU = [];
          let eU, WU = 0;
          const fU = {};
          let xU, mU;
          for (let UU = 0; UU < gU.length; UU += 3) {
            mU = [gU[UU], gU[UU + 1], gU[UU + 2]], eU = [];
            for (let UU = 0; UU < 3; UU++) {
              eU[UU] = "";
              for (let RU = 0; RU < 3; RU++) Math.abs(tU[3 * mU[UU] + RU]) < 1e-8 && (tU[3 * mU[UU] + RU] = 0), eU[UU] += tU[3 * mU[UU] + RU] + "|"
            }
            if (eU[0] != eU[1] && eU[0] != eU[2] && eU[1] != eU[2])
              for (let UU = 0; UU < 3; UU++) {
                if (xU = fU[eU[UU]], void 0 === xU) {
                  fU[eU[UU]] = WU, xU = WU++;
                  for (let RU = 0; RU < 3; RU++) KU.push(tU[3 * mU[UU] + RU]);
                  if (null !== pU && void 0 !== pU)
                    for (let RU = 0; RU < 4; RU++) jU.push(pU[4 * mU[UU] + RU]);
                  if (null !== RU && void 0 !== RU)
                    for (let gU = 0; gU < 2; gU++) GU.push(RU[2 * mU[UU] + gU]);
                  if (null !== EU && void 0 !== EU)
                    for (let RU = 0; RU < 4; RU++) uU.push(EU[4 * mU[UU] + RU]);
                  if (null !== PU && void 0 !== PU)
                    for (let RU = 0; RU < 4; RU++) CU.push(PU[4 * mU[UU] + RU]);
                  if (null !== TU && void 0 !== TU)
                    for (let RU = 0; RU < 4; RU++) hU.push(TU[4 * mU[UU] + RU]);
                  if (null !== qU && void 0 !== qU)
                    for (let RU = 0; RU < 4; RU++) QU.push(qU[4 * mU[UU] + RU])
                }
                cU.push(xU)
              }
          }
          const IU = [];
          ZU.b.ComputeNormals(KU, cU, IU), UU.positions = KU, UU.indices = cU, UU.normals = IU, null !== RU && void 0 !== RU && (UU.uvs = GU), null !== pU && void 0 !== pU && (UU.colors = jU), null !== EU && void 0 !== EU && (UU.matricesIndices = uU), null !== PU && void 0 !== PU && (UU.matricesWeights = CU), null !== TU && void 0 !== TU && (UU.matricesIndicesExtra = hU), null !== PU && void 0 !== PU && (UU.matricesWeightsExtra = QU), UU.applyToMesh(this, this.isVertexBufferUpdatable(oU.l.PositionKind))
        }
      }
      static _instancedMeshFactory(UU, RU) {
        throw (0, sU.n)("InstancedMesh")
      }
      static _PhysicsImpostorParser(UU, RU, gU) {
        throw (0, sU.n)("PhysicsImpostor")
      }
      createInstance(UU) {
        const RU = NU._instancedMeshFactory(UU, this);
        return RU.parent = this.parent, RU
      }
      synchronizeInstances() {
        for (let UU = 0; UU < this.instances.length; UU++) {
          this.instances[UU]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(UU) {
        const RU = this.dgU(),
          gU = this.getVerticesData(oU.l.PositionKind);
        if (!gU || !RU) return this;
        const tU = [];
        for (let EU = 0; EU < gU.length; EU += 3) tU.push(wU.n.FromArray(gU, EU));
        const pU = [];
        return WU.c.SyncAsyncForLoop(tU.length, 40, (UU => {
          const RU = tU.length - 1 - UU,
            gU = tU[RU];
          for (let EU = 0; EU < RU; ++EU) {
            const UU = tU[EU];
            if (gU.equals(UU)) {
              pU[RU] = EU;
              break
            }
          }
        }), (() => {
          for (let UU = 0; UU < RU.length; ++UU) RU[UU] = pU[RU[UU]] || RU[UU];
          const gU = this.ZI.slice(0);
          this.setIndices(RU), this.ZI = gU, UU && UU(this)
        })), this
      }
      serialize() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        UU.name = this.name, UU.id = this.id, UU.uniqueId = this.uniqueId, UU.type = this.getClassName(), mU.d && mU.d.HasTags(this) && (UU.tags = mU.d.GetTags(this)), UU.position = this.position.vgU(), this.rotationQuaternion ? UU.rotationQuaternion = this.rotationQuaternion.vgU() : this.rotation && (UU.rotation = this.rotation.vgU()), UU.ep = this.ep.vgU(), this._postMultiplyPivotMatrix ? UU.pivotMatrix = this.getPivotMatrix().vgU() : UU.localMatrix = this.getPivotMatrix().vgU(), UU.isEnabled = this.isEnabled(!1), UU.isVisible = this.isVisible, UU.infiniteDistance = this.infiniteDistance, UU.pickable = this.Yh, UU.receiveShadows = this.receiveShadows, UU.billboardMode = this.billboardMode, UU.visibility = this.visibility, UU.fC = this.fC, UU.checkCollisions = this.checkCollisions, UU.ellipsoid = this.ellipsoid.vgU(), UU.ellipsoidOffset = this.ellipsoidOffset.vgU(), UU.IC = this.IC, UU.isBlocker = this.isBlocker, UU.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (UU.pY = !0), this.parent && this.parent._serializeAsParent(UU), UU.isUnIndexed = this.isUnIndexed;
        const RU = this._geometry;
        if (RU && this.ZI) {
          UU.geometryUniqueId = RU.uniqueId, UU.geometryId = RU.id, UU.ZI = [];
          for (let RU = 0; RU < this.ZI.length; RU++) {
            const gU = this.ZI[RU];
            UU.ZI.push({
              materialIndex: gU.materialIndex,
              verticesStart: gU.verticesStart,
              verticesCount: gU.verticesCount,
              indexStart: gU.indexStart,
              indexCount: gU.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (UU.materialUniqueId = this.material.uniqueId, UU.materialId = this.material.id) : (this.material = null, UU.materialUniqueId = this._scene.defaultMaterial.uniqueId, UU.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (UU.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (UU.skeletonId = this.skeleton.id, UU.skeletonUniqueId = this.skeleton.uniqueId, UU.numBoneInfluencers = this.numBoneInfluencers), this.aZ()._getComponent(yU.d.NAME_PHYSICSENGINE)) {
          const RU = this.getPhysicsImpostor?.();
          RU && (UU.physicsMass = RU.getParam("AP"), UU.physicsFriction = RU.getParam("friction"), UU.physicsRestitution = RU.getParam("AP"), UU.physicsImpostor = RU.type)
        }
        this.metadata && (UU.metadata = this.metadata), 0 !== this.meshBlendingTag && (UU.meshBlendingTag = this.meshBlendingTag), UU.instances = [];
        for (let gU = 0; gU < this.instances.length; gU++) {
          const RU = this.instances[gU];
          if (RU.doNotSerialize) continue;
          const tU = {
            name: RU.name,
            id: RU.id,
            isEnabled: RU.isEnabled(!1),
            isVisible: RU.isVisible,
            Yh: RU.Yh,
            checkCollisions: RU.checkCollisions,
            position: RU.position.vgU(),
            ep: RU.ep.vgU()
          };
          if (RU.parent && RU.parent._serializeAsParent(tU), RU.rotationQuaternion ? tU.rotationQuaternion = RU.rotationQuaternion.vgU() : RU.rotation && (tU.rotation = RU.rotation.vgU()), this.aZ()._getComponent(yU.d.NAME_PHYSICSENGINE)) {
            const UU = RU.getPhysicsImpostor?.();
            UU && (tU.physicsMass = UU.getParam("AP"), tU.physicsFriction = UU.getParam("friction"), tU.physicsRestitution = UU.getParam("AP"), tU.physicsImpostor = UU.type)
          }
          RU.metadata && (tU.metadata = RU.metadata), RU.actionManager && (tU.actions = RU.actionManager.serialize(RU.name)), UU.instances.push(tU), dU.b.AppendSerializedAnimations(RU, tU), tU.hu = RU.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (UU.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.RRU
          }, this._userThinInstanceBuffersStorage)) {
          const RU = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const UU in this._userThinInstanceBuffersStorage.data) RU.data[UU] = Array.from(this._userThinInstanceBuffersStorage.data[UU]), RU.sizes[UU] = this._userThinInstanceBuffersStorage.sizes[UU], RU.strides[UU] = this._userThinInstanceBuffersStorage.strides[UU];
          UU.thinInstances.userThinInstance = RU
        }
        return dU.b.AppendSerializedAnimations(this, UU), UU.hu = this.serializeAnimationRanges(), UU.layerMask = this.layerMask, UU.alphaIndex = this.alphaIndex, UU.hasVertexAlpha = this.hasVertexAlpha, UU.overlayAlpha = this.overlayAlpha, UU.overlayColor = this.overlayColor.vgU(), UU.renderOverlay = this.renderOverlay, UU.applyFog = this.applyFog, this.actionManager && (UU.actions = this.actionManager.serialize(this.name)), UU
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const UU = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (UU && UU.vertexCount) {
          if (UU.vertexCount !== this.getTotalVertices()) return HU.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (UU.isUsingTextureForTargets) return;
          for (let RU = 0; RU < UU.numInfluencers; RU++) {
            const gU = UU.getActiveTarget(RU),
              tU = gU.getPositions();
            if (!tU) return void HU.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(oU.l.PositionKind + RU, tU, !1, 3);
            const pU = gU.getNormals();
            pU && this.geometry.setVerticesData(oU.l.NormalKind + RU, pU, !1, 3);
            const EU = gU.getTangents();
            EU && this.geometry.setVerticesData(oU.l.TangentKind + RU, EU, !1, 3);
            const PU = gU.getUVs();
            PU && this.geometry.setVerticesData(oU.l.UVKind + "_" + RU, PU, !1, 2);
            const TU = gU.getUV2s();
            TU && this.geometry.setVerticesData(oU.l.UV2Kind + "_" + RU, TU, !1, 2);
            const qU = gU.getColors();
            qU && this.geometry.setVerticesData(oU.l.ColorKind + RU, qU, !1, 4)
          }
        } else {
          let UU = 0;
          for (; this.geometry.isVerticesDataPresent(oU.l.PositionKind + UU);) this.geometry.removeVerticesData(oU.l.PositionKind + UU), this.geometry.isVerticesDataPresent(oU.l.NormalKind + UU) && this.geometry.removeVerticesData(oU.l.NormalKind + UU), this.geometry.isVerticesDataPresent(oU.l.TangentKind + UU) && this.geometry.removeVerticesData(oU.l.TangentKind + UU), this.geometry.isVerticesDataPresent(oU.l.UVKind + "_" + UU) && this.geometry.removeVerticesData(oU.l.UVKind + "_" + UU), this.geometry.isVerticesDataPresent(oU.l.UV2Kind + "_" + UU) && this.geometry.removeVerticesData(oU.l.UV2Kind + "_" + UU), this.geometry.isVerticesDataPresent(oU.l.ColorKind + UU) && this.geometry.removeVerticesData(oU.l.ColorKind + UU), UU++
        }
      }
      static Parse(UU, RU, gU) {
        let tU, pU = !1;
        if (UU.type && "LinesMesh" === UU.type ? tU = NU._LinesMeshParser(UU, RU) : UU.type && "GroundMesh" === UU.type ? tU = NU._GroundMeshParser(UU, RU) : UU.type && "GoldbergMesh" === UU.type ? tU = NU._GoldbergMeshParser(UU, RU) : UU.type && "GreasedLineMesh" === UU.type ? tU = NU._GreasedLineMeshParser(UU, RU) : UU.type && "TrailMesh" === UU.type ? tU = NU._TrailMeshParser(UU, RU) : UU.type && "GaussianSplattingMesh" === UU.type ? (tU = UU._isCompound ? NU._GaussianSplattingCompoundMeshParser(UU, RU) : NU._GaussianSplattingMeshParser(UU, RU), pU = !0) : UU.type && "GaussianSplattingPartProxyMesh" === UU.type ? (tU = NU._GaussianSplattingPartProxyMeshParser(UU, RU), pU = !0) : tU = new NU(UU.name, RU), tU.id = UU.id, tU._waitingParsedUniqueId = UU.uniqueId, mU.d && mU.d.AddTagsTo(tU, UU.tags), tU.position = wU.n.FromArray(UU.position), void 0 !== UU.metadata && (tU.metadata = UU.metadata), void 0 !== UU.meshBlendingTag && (tU.meshBlendingTag = UU.meshBlendingTag), UU.rotationQuaternion ? tU.rotationQuaternion = wU.d.FromArray(UU.rotationQuaternion) : UU.rotation && (tU.rotation = wU.n.FromArray(UU.rotation)), tU.ep = wU.n.FromArray(UU.ep), UU.localMatrix ? tU.setPreTransformMatrix(wU.c.FromArray(UU.localMatrix)) : UU.pivotMatrix && tU.setPivotMatrix(wU.c.FromArray(UU.pivotMatrix)), tU.GJ(UU.isEnabled), tU.isVisible = UU.isVisible, tU.infiniteDistance = UU.infiniteDistance, tU.fC = !!UU.fC, tU.showBoundingBox = UU.showBoundingBox, tU.showSubMeshesBoundingBox = UU.showSubMeshesBoundingBox, void 0 !== UU.applyFog && (tU.applyFog = UU.applyFog), void 0 !== UU.pickable && (tU.Yh = UU.pickable), void 0 !== UU.alphaIndex && (tU.alphaIndex = UU.alphaIndex), tU.receiveShadows = UU.receiveShadows, void 0 !== UU.billboardMode && (tU.billboardMode = UU.billboardMode), void 0 !== UU.visibility && (tU.visibility = UU.visibility), tU.checkCollisions = UU.checkCollisions, tU.IC = !!UU.IC, UU.ellipsoid && (tU.ellipsoid = wU.n.FromArray(UU.ellipsoid)), UU.ellipsoidOffset && (tU.ellipsoidOffset = wU.n.FromArray(UU.ellipsoidOffset)), null != UU.overrideMaterialSideOrientation && (tU.sideOrientation = UU.overrideMaterialSideOrientation), void 0 !== UU.sideOrientation && (tU.sideOrientation = UU.sideOrientation), void 0 !== UU.isBlocker && (tU.isBlocker = UU.isBlocker), tU._shouldGenerateFlatShading = UU.useFlatShading, UU.pY && (tU._waitingData.pY = UU.pY), void 0 !== UU.parentId && (tU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (tU._waitingParentInstanceIndex = UU.parentInstanceIndex), void 0 !== UU.actions && (tU._waitingData.actions = UU.actions), void 0 !== UU.overlayAlpha && (tU.overlayAlpha = UU.overlayAlpha), void 0 !== UU.overlayColor && (tU.overlayColor = nU.e.FromArray(UU.overlayColor)), void 0 !== UU.renderOverlay && (tU.renderOverlay = UU.renderOverlay), tU.isUnIndexed = !!UU.isUnIndexed, tU.hasVertexAlpha = UU.hasVertexAlpha, UU.delayLoadingFile ? (tU.delayLoadState = 4, tU.delayLoadingFile = gU + UU.delayLoadingFile, tU.buildBoundingInfo(wU.n.FromArray(UU.boundingBoxMinimum), wU.n.FromArray(UU.boundingBoxMaximum)), UU._binaryInfo && (tU._binaryInfo = UU._binaryInfo), tU._delayInfo = [], UU.hasUVs && tU._delayInfo.push(oU.l.UVKind), UU.hasUVs2 && tU._delayInfo.push(oU.l.UV2Kind), UU.hasUVs3 && tU._delayInfo.push(oU.l.UV3Kind), UU.hasUVs4 && tU._delayInfo.push(oU.l.UV4Kind), UU.hasUVs5 && tU._delayInfo.push(oU.l.UV5Kind), UU.hasUVs6 && tU._delayInfo.push(oU.l.UV6Kind), UU.hasColors && tU._delayInfo.push(oU.l.ColorKind), UU.hasMatricesIndices && tU._delayInfo.push(oU.l.MatricesIndicesKind), UU.hasMatricesWeights && tU._delayInfo.push(oU.l.MatricesWeightsKind), tU._delayLoadingFunction = aU.b._ImportGeometry, vU.b.ForceFullSceneLoadingForIncremental && tU._checkDelayState()) : pU || aU.b._ImportGeometry(UU, tU), UU.materialUniqueId ? tU._waitingMaterialId = UU.materialUniqueId : UU.materialId && (tU._waitingMaterialId = UU.materialId), UU.morphTargetManagerId > -1 && (tU._waitingMorphTargetManagerId = UU.morphTargetManagerId), void 0 !== UU.skeletonId && null !== UU.skeletonId && (tU.skeleton = RU.getLastSkeletonById(UU.skeletonId), tU._waitingSkeletonId = UU.skeletonId, UU.numBoneInfluencers && (tU.numBoneInfluencers = UU.numBoneInfluencers)), void 0 !== UU.skeletonUniqueId && null !== UU.skeletonUniqueId && (tU._waitingSkeletonUniqueId = UU.skeletonUniqueId), UU.animations) {
          for (let RU = 0; RU < UU.animations.length; RU++) {
            const gU = UU.animations[RU],
              pU = (0, SU.e)("BABYLON.Animation");
            pU && tU.animations.push(pU.Parse(gU))
          }
          bU.b.ParseAnimationRanges(tU, UU, RU)
        }
        if (UU.autoAnimate && RU.beginAnimation(tU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), UU.layerMask && !isNaN(UU.layerMask) ? tU.layerMask = Math.abs(parseInt(UU.layerMask)) : tU.layerMask = 268435455, UU.physicsImpostor && (tU.physicsImpostor = NU._PhysicsImpostorParser(RU, tU, UU)), UU.lodMeshIds && (tU._waitingData.lods = {
            ids: UU.lodMeshIds,
            distances: UU.lodDistances ? UU.lodDistances : null,
            coverages: UU.lodCoverages ? UU.lodCoverages : null
          }), UU.instances)
          for (let EU = 0; EU < UU.instances.length; EU++) {
            const gU = UU.instances[EU],
              pU = tU.createInstance(gU.name);
            if (gU.id && (pU.id = gU.id), mU.d && (gU.tags ? mU.d.AddTagsTo(pU, gU.tags) : mU.d.AddTagsTo(pU, UU.tags)), pU.position = wU.n.FromArray(gU.position), void 0 !== gU.metadata && (pU.metadata = gU.metadata), void 0 !== gU.parentId && (pU._waitingParentId = gU.parentId), void 0 !== gU.parentInstanceIndex && (pU._waitingParentInstanceIndex = gU.parentInstanceIndex), void 0 !== gU.isEnabled && null !== gU.isEnabled && pU.GJ(gU.isEnabled), void 0 !== gU.isVisible && null !== gU.isVisible && (pU.isVisible = gU.isVisible), void 0 !== gU.Yh && null !== gU.Yh && (pU.Yh = gU.Yh), gU.rotationQuaternion ? pU.rotationQuaternion = wU.d.FromArray(gU.rotationQuaternion) : gU.rotation && (pU.rotation = wU.n.FromArray(gU.rotation)), pU.ep = wU.n.FromArray(gU.ep), void 0 != gU.checkCollisions && null != gU.checkCollisions && (pU.checkCollisions = gU.checkCollisions), void 0 != gU.pickable && null != gU.pickable && (pU.Yh = gU.pickable), void 0 != gU.showBoundingBox && null != gU.showBoundingBox && (pU.showBoundingBox = gU.showBoundingBox), void 0 != gU.showSubMeshesBoundingBox && null != gU.showSubMeshesBoundingBox && (pU.showSubMeshesBoundingBox = gU.showSubMeshesBoundingBox), void 0 != gU.alphaIndex && null != gU.showSubMeshesBoundingBox && (pU.alphaIndex = gU.alphaIndex), gU.physicsImpostor && (pU.physicsImpostor = NU._PhysicsImpostorParser(RU, pU, gU)), void 0 !== gU.actions && (pU._waitingData.actions = gU.actions), gU.animations) {
              for (let UU = 0; UU < gU.animations.length; UU++) {
                const RU = gU.animations[UU],
                  tU = (0, SU.e)("BABYLON.Animation");
                tU && pU.animations.push(tU.Parse(RU))
              }
              bU.b.ParseAnimationRanges(pU, gU, RU), gU.autoAnimate && RU.beginAnimation(pU, gU.autoAnimateFrom, gU.autoAnimateTo, gU.autoAnimateLoop, gU.autoAnimateSpeed || 1)
            }
          }
        if (UU.thinInstances) {
          const RU = UU.thinInstances;
          if (tU.RRU = !!RU.enablePicking, RU.matrixData ? (tU.e_("matrix", new Float32Array(RU.matrixData), 16, !1), tU._thinInstanceDataStorage.matrixBufferSize = RU.matrixBufferSize, tU._thinInstanceDataStorage.instancesCount = RU.instancesCount) : tU._thinInstanceDataStorage.matrixBufferSize = RU.matrixBufferSize, UU.thinInstances.userThinInstance) {
            const RU = UU.thinInstances.userThinInstance;
            for (const UU in RU.data) tU.e_(UU, new Float32Array(RU.data[UU]), RU.strides[UU], !1), tU._userThinInstanceBuffersStorage.sizes[UU] = RU.sizes[UU]
          }
        }
        return tU
      }
      setPositionsForCPUSkinning() {
        const UU = this._internalMeshDataInfo;
        if (!UU._sourcePositions) {
          const RU = this.getVerticesData(oU.l.PositionKind);
          if (!RU) return UU._sourcePositions;
          UU._sourcePositions = new Float32Array(RU), this.isVertexBufferUpdatable(oU.l.PositionKind) || this.setVerticesData(oU.l.PositionKind, RU, !0)
        }
        return UU._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const UU = this._internalMeshDataInfo;
        if (!UU._sourceNormals) {
          const RU = this.getVerticesData(oU.l.NormalKind);
          if (!RU) return UU._sourceNormals;
          UU._sourceNormals = new Float32Array(RU), this.isVertexBufferUpdatable(oU.l.NormalKind) || this.setVerticesData(oU.l.NormalKind, RU, !0)
        }
        return UU._sourceNormals
      }
      applySkeleton(UU) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.aZ().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.aZ().getFrameId(), !this.isVerticesDataPresent(oU.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(oU.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(oU.l.MatricesWeightsKind)) return this;
        const RU = this.isVerticesDataPresent(oU.l.NormalKind),
          gU = this._internalMeshDataInfo;
        if (!gU._sourcePositions) {
          const UU = this.ZI.slice();
          this.setPositionsForCPUSkinning(), this.ZI = UU
        }
        RU && !gU._sourceNormals && this.setNormalsForCPUSkinning();
        let tU = this.getVerticesData(oU.l.PositionKind);
        if (!tU) return this;
        tU instanceof Float32Array || (tU = new Float32Array(tU));
        let pU = this.getVerticesData(oU.l.NormalKind);
        if (RU) {
          if (!pU) return this;
          pU instanceof Float32Array || (pU = new Float32Array(pU))
        }
        const EU = this.getVerticesData(oU.l.MatricesIndicesKind),
          PU = this.getVerticesData(oU.l.MatricesWeightsKind);
        if (!PU || !EU) return this;
        const TU = this.numBoneInfluencers > 4,
          qU = TU ? this.getVerticesData(oU.l.MatricesIndicesExtraKind) : null,
          KU = TU ? this.getVerticesData(oU.l.MatricesWeightsExtraKind) : null,
          cU = UU.getTransformMatrices(this),
          GU = wU.n.Zero(),
          jU = new wU.c,
          uU = new wU.c;
        let CU, hU = 0;
        for (let QU = 0; QU < tU.length; QU += 3, hU += 4) {
          let UU;
          for (CU = 0; CU < 4; CU++) UU = PU[hU + CU], UU > 0 && (wU.c.FromFloat32ArrayToRefScaled(cU, Math.floor(16 * EU[hU + CU]), UU, uU), jU.addToSelf(uU));
          if (TU)
            for (CU = 0; CU < 4; CU++) UU = KU[hU + CU], UU > 0 && (wU.c.FromFloat32ArrayToRefScaled(cU, Math.floor(16 * qU[hU + CU]), UU, uU), jU.addToSelf(uU));
          wU.n.TransformCoordinatesFromFloatsToRef(gU._sourcePositions[QU], gU._sourcePositions[QU + 1], gU._sourcePositions[QU + 2], jU, GU), GU.toArray(tU, QU), RU && (wU.n.TransformNormalFromFloatsToRef(gU._sourceNormals[QU], gU._sourceNormals[QU + 1], gU._sourceNormals[QU + 2], jU, GU), GU.toArray(pU, QU)), jU.reset()
        }
        return this.updateVerticesData(oU.l.PositionKind, tU), RU && this.updateVerticesData(oU.l.NormalKind, pU), this
      }
      static MinMax(UU) {
        let RU = null,
          gU = null;
        for (const tU of UU) {
          const UU = tU.lY().boundingBox;
          RU && gU ? (RU.minimizeInPlace(UU.minimumWorld), gU.maximizeInPlace(UU.maximumWorld)) : (RU = UU.minimumWorld.clone(), gU = UU.maximumWorld.clone())
        }
        return RU && gU ? {
          min: RU,
          max: gU
        } : {
          min: wU.n.Zero(),
          max: wU.n.Zero()
        }
      }
      static Center(UU) {
        const RU = UU instanceof Array ? NU.MinMax(UU) : UU;
        return wU.n.Center(RU.min, RU.max)
      }
      static MergeMeshes(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        return (0, IU.i)(NU._MergeMeshesCoroutine(UU, RU, gU, tU, pU, EU, !1))
      }
      static async MergeMeshesAsync(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, IU.g)(NU._MergeMeshesCoroutine(UU, RU, gU, tU, pU, EU, !0), (0, IU.d)())
      }
      static * _MergeMeshesCoroutine(UU) {
        let RU, gU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          tU = arguments.length > 2 ? arguments[2] : void 0,
          pU = arguments.length > 3 ? arguments[3] : void 0,
          EU = arguments.length > 4 ? arguments[4] : void 0,
          PU = arguments.length > 5 ? arguments[5] : void 0,
          TU = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (UU = UU.filter(Boolean)).length) return null;
        if (!tU) {
          let gU = 0;
          for (RU = 0; RU < UU.length; RU++)
            if (gU += UU[RU].getTotalVertices(), gU >= 65536) return HU.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const qU = UU[0];
        PU && (EU = !1, UU.sort(((UU, RU) => (UU.material?.uniqueId ?? -1) - (RU.material?.uniqueId ?? -1))));
        const KU = new Array,
          cU = new Array,
          GU = new Array,
          jU = UU[0].sideOrientation;
        for (RU = 0; RU < UU.length; RU++) {
          const gU = UU[RU];
          if (gU.sZ) return HU.e.Warn("Cannot merge instance meshes."), null;
          if (jU !== gU.sideOrientation) return HU.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (EU || PU) {
            const UU = GU.reduce(((UU, RU) => Math.max(UU, RU.start + RU.count)), 0);
            if (PU)
              if (gU.material) {
                const RU = gU.material;
                if (RU instanceof XU.c) {
                  for (let UU = 0; UU < RU.x_.length; UU++) KU.indexOf(RU.x_[UU]) < 0 && KU.push(RU.x_[UU]);
                  for (let tU = 0; tU < gU.ZI.length; tU++) cU.push(KU.indexOf(RU.x_[gU.ZI[tU].materialIndex])), GU.push({
                    start: UU + gU.ZI[tU].indexStart,
                    count: gU.ZI[tU].indexCount
                  })
                } else {
                  KU.indexOf(RU) < 0 && KU.push(RU);
                  for (let tU = 0; tU < gU.ZI.length; tU++) cU.push(KU.indexOf(RU)), GU.push({
                    start: UU + gU.ZI[tU].indexStart,
                    count: gU.ZI[tU].indexCount
                  })
                }
              } else
                for (let RU = 0; RU < gU.ZI.length; RU++) cU.push(0), GU.push({
                  start: UU + gU.ZI[RU].indexStart,
                  count: gU.ZI[RU].indexCount
                });
            else GU.push({
              start: UU,
              count: gU.getTotalIndices()
            })
          }
        }
        if (PU && GU.length > 1) {
          let UU = 0;
          for (let RU = 1; RU < GU.length; RU++) {
            const gU = GU[UU],
              tU = GU[RU];
            cU[RU] === cU[UU] && gU.start + gU.count === tU.start ? gU.count += tU.count : (UU++, GU[UU] = tU, cU[UU] = cU[RU])
          }
          GU.length = UU + 1, cU.length = UU + 1
        }
        const uU = UU => {
            const RU = UU.computeWorldMatrix(!0);
            return {
              vertexData: ZU.b.ExtractFromMesh(UU, !1, !1),
              transform: RU
            }
          },
          {
            vertexData: CU,
            transform: hU
          } = uU(UU[0]);
        TU && (yield);
        const QU = new Array(UU.length - 1);
        for (let IU = 1; IU < UU.length; IU++) QU[IU - 1] = uU(UU[IU]), TU && (yield);
        const eU = CU._mergeCoroutine(hU, QU, tU, TU, !gU);
        let WU = eU.next();
        for (; !WU.done;) TU && (yield), WU = eU.next();
        const fU = WU.value;
        pU || (pU = new NU(qU.name + "_merged", qU.aZ()));
        const xU = fU._applyToCoroutine(pU, void 0, TU);
        let mU = xU.next();
        for (; !mU.done;) TU && (yield), mU = xU.next();
        if (pU.checkCollisions = qU.checkCollisions, pU.sideOrientation = qU.sideOrientation, gU)
          for (RU = 0; RU < UU.length; RU++) UU[RU].dispose();
        if (EU || PU) {
          for (pU.releaseSubMeshes(), RU = 0; RU < GU.length;) BU.d.CreateFromIndices(0, GU[RU].start, GU[RU].count, pU, void 0, !1), RU++;
          for (const UU of pU.ZI) UU.refreshBoundingInfo();
          pU.computeWorldMatrix(!0)
        }
        if (PU) {
          const UU = new XU.c(qU.name + "_merged", qU.aZ());
          UU.x_ = KU;
          for (let RU = 0; RU < pU.ZI.length; RU++) pU.ZI[RU].materialIndex = cU[RU];
          pU.material = UU
        } else pU.material = qU.material;
        return pU
      }
      M6(UU) {
        UU._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(UU)
      }
      R_(UU) {
        const RU = UU._indexInSourceMeshInstanceArray;
        if (-1 != RU) {
          if (RU !== this.instances.length - 1) {
            const UU = this.instances[this.instances.length - 1];
            this.instances[RU] = UU, UU._indexInSourceMeshInstanceArray = RU
          }
          UU._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === VU.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(UU) {
        const RU = this.aZ();
        return RU.forcePointsCloud ? VU.c.PointFillMode : RU.forceWireframe ? VU.c.WireFrameFillMode : this.overrideRenderingFillMode ?? UU
      }
      setMaterialByID(UU) {
        return this.setMaterialById(UU)
      }
      static CreateRibbon(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(UU, RU, gU, tU, pU, EU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(UU, RU, gU, tU, pU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(UU, RU, gU, tU, pU, EU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(UU, RU, gU, tU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(UU, RU, gU, tU, pU, EU, PU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(UU, RU, gU, tU, pU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(UU, RU, gU, tU, pU, EU, PU, TU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(UU, RU, gU, tU, pU, EU, PU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(UU, RU, gU, tU, pU, EU, PU, TU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(UU, RU, gU, tU, pU, EU, PU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(UU, RU, gU, tU, pU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(UU, RU, gU, tU, pU, EU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(UU, RU, gU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(UU, RU, gU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(UU, RU, gU, tU, pU, EU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(UU, RU, gU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(UU) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    NU.FRONTSIDE = ZU.b.FRONTSIDE, NU.BACKSIDE = ZU.b.BACKSIDE, NU.DOUBLESIDE = ZU.b.DOUBLESIDE, NU.DEFAULTSIDE = ZU.b.DEFAULTSIDE, NU.NO_CAP = 0, NU.CAP_START = 1, NU.CAP_END = 2, NU.CAP_ALL = 3, NU.NO_FLIP = 0, NU.FLIP_TILE = 1, NU.ROTATE_TILE = 2, NU.FLIP_ROW = 3, NU.ROTATE_ROW = 4, NU.FLIP_N_ROTATE_TILE = 5, NU.FLIP_N_ROTATE_ROW = 6, NU.CENTER = 0, NU.LEFT = 1, NU.RIGHT = 2, NU.TOP = 3, NU.BOTTOM = 4, NU.INSTANCEDMESH_SORT_TRANSPARENT = !1, NU._GroundMeshParser = (UU, RU) => {
      throw (0, sU.n)("GroundMesh")
    }, NU._GoldbergMeshParser = (UU, RU) => {
      throw (0, sU.n)("GoldbergMesh")
    }, NU._LinesMeshParser = (UU, RU) => {
      throw (0, sU.n)("LinesMesh")
    }, NU._GreasedLineMeshParser = (UU, RU) => {
      throw (0, sU.n)("GreasedLineMesh")
    }, NU._GreasedLineRibbonMeshParser = (UU, RU) => {
      throw (0, sU.n)("GreasedLineRibbonMesh")
    }, NU._TrailMeshParser = (UU, RU) => {
      throw (0, sU.n)("TrailMesh")
    }, NU._GaussianSplattingMeshParser = (UU, RU) => {
      throw (0, sU.n)("GaussianSplattingMesh")
    }, NU._GaussianSplattingPartProxyMeshParser = (UU, RU) => {
      throw (0, sU.n)("GaussianSplattingPartProxyMesh")
    }, NU._GaussianSplattingCompoundMeshParser = (UU, RU) => {
      throw (0, sU.n)("GaussianSplattingCompoundMesh")
    };
    let lU = !1;

    function OU() {
      lU || (lU = !0, (0, SU.g)("BABYLON.Mesh", NU))
    }(tU = NU.prototype).rY ?? (tU.rY = (0, sU.m)("Mesh", "rY")), (pU = NU.prototype).simplify ?? (pU.simplify = (0, sU.m)("Mesh", "simplify")), (EU = NU.prototype).thinInstanceAdd ?? (EU.thinInstanceAdd = (0, sU.m)("Mesh", "thinInstanceAdd")), (PU = NU.prototype).thinInstanceAddSelf ?? (PU.thinInstanceAddSelf = (0, sU.m)("Mesh", "thinInstanceAddSelf")), (TU = NU.prototype).thinInstanceRegisterAttribute ?? (TU.thinInstanceRegisterAttribute = (0, sU.m)("Mesh", "thinInstanceRegisterAttribute")), (qU = NU.prototype).thinInstanceSetMatrixAt ?? (qU.thinInstanceSetMatrixAt = (0, sU.m)("Mesh", "thinInstanceSetMatrixAt")), (KU = NU.prototype).thinInstanceSetAttributeAt ?? (KU.thinInstanceSetAttributeAt = (0, sU.m)("Mesh", "thinInstanceSetAttributeAt")), (cU = NU.prototype).e_ ?? (cU.e_ = (0, sU.m)("Mesh", "e_")), (GU = NU.prototype).thinInstanceGetWorldMatrices ?? (GU.thinInstanceGetWorldMatrices = (0, sU.m)("Mesh", "thinInstanceGetWorldMatrices")), (jU = NU.prototype).T_ ?? (jU.T_ = (0, sU.m)("Mesh", "T_")), (uU = NU.prototype).thinInstancePartialBufferUpdate ?? (uU.thinInstancePartialBufferUpdate = (0, sU.m)("Mesh", "thinInstancePartialBufferUpdate")), (CU = NU.prototype).thinInstanceRefreshBoundingInfo ?? (CU.thinInstanceRefreshBoundingInfo = (0, sU.m)("Mesh", "thinInstanceRefreshBoundingInfo")), (hU = NU.prototype).getEmittedParticleSystems ?? (hU.getEmittedParticleSystems = (0, sU.m)("Mesh", "getEmittedParticleSystems")), (QU = NU.prototype).getHierarchyEmittedParticleSystems ?? (QU.getHierarchyEmittedParticleSystems = (0, sU.m)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(NU.prototype, "edgesShareWithInstances") || Object.defineProperty(NU.prototype, "edgesShareWithInstances", (0, sU.i)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(NU.prototype, "RRU") || Object.defineProperty(NU.prototype, "RRU", (0, sU.i)("Mesh", "RRU")), Object.getOwnPropertyDescriptor(NU.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(NU.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, sU.i)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(NU.prototype, "I6") || Object.defineProperty(NU.prototype, "I6", (0, sU.i)("Mesh", "I6"))
  },
  39792: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU
    });
    var tU = gU(39377),
      pU = gU(36600),
      EU = gU(39517),
      PU = gU(39256),
      TU = gU(36761),
      qU = gU(38236),
      KU = gU(39380),
      cU = gU(39786),
      GU = gU(39429),
      jU = gU(39681);
    class uU {}
    let CU = (() => {
      var UU;
      let RU, gU, CU, hU, QU = [];
      return UU = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, cU.f)(this._applyToCoroutine.bind(this)), this.uniqueId = UU._UniqueIdGenerator, UU._UniqueIdGenerator++
        }
        set(UU, RU) {
          switch (UU.length || qU.e.Warn(`Setting vertex data kind '${RU}' with an empty array`), RU) {
            case EU.l.PositionKind:
              this.positions = UU;
              break;
            case EU.l.NormalKind:
              this.normals = UU;
              break;
            case EU.l.TangentKind:
              this.tangents = UU;
              break;
            case EU.l.UVKind:
              this.uvs = UU;
              break;
            case EU.l.UV2Kind:
              this.uvs2 = UU;
              break;
            case EU.l.UV3Kind:
              this.uvs3 = UU;
              break;
            case EU.l.UV4Kind:
              this.uvs4 = UU;
              break;
            case EU.l.UV5Kind:
              this.uvs5 = UU;
              break;
            case EU.l.UV6Kind:
              this.uvs6 = UU;
              break;
            case EU.l.ColorKind:
              this.colors = UU;
              break;
            case EU.l.MatricesIndicesKind:
              this.matricesIndices = UU;
              break;
            case EU.l.MatricesWeightsKind:
              this.matricesWeights = UU;
              break;
            case EU.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = UU;
              break;
            case EU.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = UU
          }
        }
        applyToMesh(UU, RU) {
          return this._applyTo(UU, RU, !1), this
        }
        applyToGeometry(UU, RU) {
          return this._applyTo(UU, RU, !1), this
        }
        updateMesh(UU) {
          return this._update(UU), this
        }
        updateGeometry(UU) {
          return this._update(UU), this
        }* _applyToCoroutine(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gU = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (UU.setVerticesData(EU.l.PositionKind, this.positions, RU), gU && (yield)), this.normals && (UU.setVerticesData(EU.l.NormalKind, this.normals, RU), gU && (yield)), this.tangents && (UU.setVerticesData(EU.l.TangentKind, this.tangents, RU), gU && (yield)), this.uvs && (UU.setVerticesData(EU.l.UVKind, this.uvs, RU), gU && (yield)), this.uvs2 && (UU.setVerticesData(EU.l.UV2Kind, this.uvs2, RU), gU && (yield)), this.uvs3 && (UU.setVerticesData(EU.l.UV3Kind, this.uvs3, RU), gU && (yield)), this.uvs4 && (UU.setVerticesData(EU.l.UV4Kind, this.uvs4, RU), gU && (yield)), this.uvs5 && (UU.setVerticesData(EU.l.UV5Kind, this.uvs5, RU), gU && (yield)), this.uvs6 && (UU.setVerticesData(EU.l.UV6Kind, this.uvs6, RU), gU && (yield)), this.colors) {
            const tU = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            UU.setVerticesData(EU.l.ColorKind, this.colors, RU, tU), this.hasVertexAlpha && void 0 !== UU.hasVertexAlpha && (UU.hasVertexAlpha = !0), gU && (yield)
          }
          if (this.matricesIndices && (UU.setVerticesData(EU.l.MatricesIndicesKind, this.matricesIndices, RU), gU && (yield)), this.matricesWeights && (UU.setVerticesData(EU.l.MatricesWeightsKind, this.matricesWeights, RU), gU && (yield)), this.matricesIndicesExtra && (UU.setVerticesData(EU.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, RU), gU && (yield)), this.matricesWeightsExtra && (UU.setVerticesData(EU.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, RU), gU && (yield)), this.indices ? (UU.setIndices(this.indices, null, RU), gU && (yield)) : UU.setIndices([], null), UU.ZI && this.materialInfos && this.materialInfos.length > 1) {
            const RU = UU;
            RU.ZI = [];
            for (const UU of this.materialInfos) new jU.d(UU.materialIndex, UU.verticesStart, UU.verticesCount, UU.indexStart, UU.indexCount, RU)
          }
          return this
        }
        _update(UU, RU, gU) {
          return this.positions && UU.updateVerticesData(EU.l.PositionKind, this.positions, RU, gU), this.normals && UU.updateVerticesData(EU.l.NormalKind, this.normals, RU, gU), this.tangents && UU.updateVerticesData(EU.l.TangentKind, this.tangents, RU, gU), this.uvs && UU.updateVerticesData(EU.l.UVKind, this.uvs, RU, gU), this.uvs2 && UU.updateVerticesData(EU.l.UV2Kind, this.uvs2, RU, gU), this.uvs3 && UU.updateVerticesData(EU.l.UV3Kind, this.uvs3, RU, gU), this.uvs4 && UU.updateVerticesData(EU.l.UV4Kind, this.uvs4, RU, gU), this.uvs5 && UU.updateVerticesData(EU.l.UV5Kind, this.uvs5, RU, gU), this.uvs6 && UU.updateVerticesData(EU.l.UV6Kind, this.uvs6, RU, gU), this.colors && UU.updateVerticesData(EU.l.ColorKind, this.colors, RU, gU), this.matricesIndices && UU.updateVerticesData(EU.l.MatricesIndicesKind, this.matricesIndices, RU, gU), this.matricesWeights && UU.updateVerticesData(EU.l.MatricesWeightsKind, this.matricesWeights, RU, gU), this.matricesIndicesExtra && UU.updateVerticesData(EU.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, RU, gU), this.matricesWeightsExtra && UU.updateVerticesData(EU.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, RU, gU), this.indices && UU.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const EU = pU.h.xC[0],
            PU = pU.h.xC[1];
          for (let TU = gU; TU < gU + tU; TU += 3) pU.n.FromArrayToRef(UU, TU, EU), pU.n.TransformCoordinatesToRef(EU, RU, PU), UU[TU] = PU.x, UU[TU + 1] = PU.y, UU[TU + 2] = PU.z
        }
        static _TransformVector3Normals(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const EU = pU.h.xC[0],
            PU = pU.h.xC[1];
          for (let TU = gU; TU < gU + tU; TU += 3) pU.n.FromArrayToRef(UU, TU, EU), pU.n.TransformNormalToRef(EU, RU, PU), UU[TU] = PU.x, UU[TU + 1] = PU.y, UU[TU + 2] = PU.z
        }
        static _TransformVector4Normals(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          const EU = pU.h.Vector4[0],
            PU = pU.h.Vector4[1];
          for (let TU = gU; TU < gU + tU; TU += 4) pU.q.FromArrayToRef(UU, TU, EU), pU.q.TransformNormalToRef(EU, RU, PU), UU[TU] = PU.x, UU[TU + 1] = PU.y, UU[TU + 2] = PU.z, UU[TU + 3] = PU.w
        }
        static _FlipFaces(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length;
          for (let tU = RU; tU < RU + gU; tU += 3) {
            const RU = UU[tU + 1];
            UU[tU + 1] = UU[tU + 2], UU[tU + 2] = RU
          }
        }
        transform(RU) {
          const gU = RU.determinant() < 0;
          return this.positions && UU._TransformVector3Coordinates(this.positions, RU), this.normals && UU._TransformVector3Normals(this.normals, RU), this.tangents && UU._TransformVector4Normals(this.tangents, RU), gU && this.indices && UU._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const RU = [];
          for (const gU of this.materialInfos) {
            const tU = new UU;
            if (this.positions && (tU.positions = this.positions.slice(3 * gU.verticesStart, 3 * (gU.verticesCount + gU.verticesStart))), this.normals && (tU.normals = this.normals.slice(3 * gU.verticesStart, 3 * (gU.verticesCount + gU.verticesStart))), this.tangents && (tU.tangents = this.tangents.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.colors && (tU.colors = this.colors.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.uvs && (tU.uvs = this.uvs.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.uvs2 && (tU.uvs2 = this.uvs2.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.uvs3 && (tU.uvs3 = this.uvs3.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.uvs4 && (tU.uvs4 = this.uvs4.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.uvs5 && (tU.uvs5 = this.uvs5.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.uvs6 && (tU.uvs6 = this.uvs6.slice(2 * gU.verticesStart, 2 * (gU.verticesCount + gU.verticesStart))), this.matricesIndices && (tU.matricesIndices = this.matricesIndices.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.matricesIndicesExtra && (tU.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.matricesWeights && (tU.matricesWeights = this.matricesWeights.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.matricesWeightsExtra && (tU.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * gU.verticesStart, 4 * (gU.verticesCount + gU.verticesStart))), this.indices) {
              tU.indices = [];
              for (let UU = gU.indexStart; UU < gU.indexStart + gU.indexCount; UU++) tU.indices.push(this.indices[UU] - gU.verticesStart)
            }
            const pU = new uU;
            pU.indexStart = 0, pU.indexCount = tU.indices ? tU.indices.length : 0, pU.materialIndex = gU.materialIndex, pU.verticesStart = 0, pU.verticesCount = (tU.positions ? tU.positions.length : 0) / 3, tU.materialInfos = [pU], RU.push(tU)
          }
          return RU
        }
        merge(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const EU = Array.isArray(UU) ? UU.map((UU => ({
            vertexData: UU
          }))) : [{
            vertexData: UU
          }];
          return (0, cU.i)(this._mergeCoroutine(void 0, EU, RU, !1, gU, tU, pU))
        }* _mergeCoroutine(RU, gU) {
          let tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            pU = arguments.length > 3 ? arguments[3] : void 0,
            PU = arguments.length > 4 ? arguments[4] : void 0,
            TU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            qU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let KU = gU.map((UU => UU.vertexData)),
            cU = this;
          if (qU)
            for (const UU of KU) UU && (UU._validate(), !this.normals && UU.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && UU.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && UU.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && UU.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && UU.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && UU.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && UU.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && UU.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && UU.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && UU.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && UU.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && UU.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && UU.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const UU of KU)
            if (UU)
              if (qU) this.normals && !UU.normals && (UU.normals = new Float32Array(UU.positions.length)), this.tangents && !UU.tangents && (UU.tangents = new Float32Array(UU.positions.length / 3 * 4)), this.uvs && !UU.uvs && (UU.uvs = new Float32Array(UU.positions.length / 3 * 2)), this.uvs2 && !UU.uvs2 && (UU.uvs2 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs3 && !UU.uvs3 && (UU.uvs3 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs4 && !UU.uvs4 && (UU.uvs4 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs5 && !UU.uvs5 && (UU.uvs5 = new Float32Array(UU.positions.length / 3 * 2)), this.uvs6 && !UU.uvs6 && (UU.uvs6 = new Float32Array(UU.positions.length / 3 * 2)), this.colors && !UU.colors && (UU.colors = new Float32Array(UU.positions.length / 3 * 4), UU.colors.fill(1)), this.matricesIndices && !UU.matricesIndices && (UU.matricesIndices = new Float32Array(UU.positions.length / 3 * 4)), this.matricesWeights && !UU.matricesWeights && (UU.matricesWeights = new Float32Array(UU.positions.length / 3 * 4)), this.matricesIndicesExtra && !UU.matricesIndicesExtra && (UU.matricesIndicesExtra = new Float32Array(UU.positions.length / 3 * 4)), this.matricesWeightsExtra && !UU.matricesWeightsExtra && (UU.matricesWeightsExtra = new Float32Array(UU.positions.length / 3 * 4));
              else if (UU._validate(), !this.normals !== !UU.normals || !this.tangents !== !UU.tangents || !this.uvs !== !UU.uvs || !this.uvs2 !== !UU.uvs2 || !this.uvs3 !== !UU.uvs3 || !this.uvs4 !== !UU.uvs4 || !this.uvs5 !== !UU.uvs5 || !this.uvs6 !== !UU.uvs6 || !this.colors !== !UU.colors || !this.matricesIndices !== !UU.matricesIndices || !this.matricesWeights !== !UU.matricesWeights || !this.matricesIndicesExtra !== !UU.matricesIndicesExtra || !this.matricesWeightsExtra !== !UU.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (TU) {
            let UU, tU = 0,
              pU = 0;
            const EU = [];
            let PU = null;
            const TU = [];
            for (const gU of this.splitBasedOnMaterialID()) TU.push({
              vertexData: gU,
              transform: RU
            });
            for (const RU of gU)
              if (RU.vertexData)
                for (const UU of RU.vertexData.splitBasedOnMaterialID()) TU.push({
                  vertexData: UU,
                  transform: RU.transform
                });
            TU.sort(((UU, RU) => {
              const gU = UU.vertexData.materialInfos ? UU.vertexData.materialInfos[0].materialIndex : 0,
                tU = RU.vertexData.materialInfos ? RU.vertexData.materialInfos[0].materialIndex : 0;
              return gU > tU ? 1 : gU === tU ? 0 : -1
            }));
            for (const RU of TU) {
              const gU = RU.vertexData;
              if (UU = gU.materialInfos ? gU.materialInfos[0].materialIndex : 0, PU && PU.materialIndex === UU) PU.indexCount += gU.indices.length, PU.verticesCount += gU.positions.length / 3;
              else {
                const RU = new uU;
                RU.materialIndex = UU, RU.indexStart = tU, RU.indexCount = gU.indices.length, RU.verticesStart = pU, RU.verticesCount = gU.positions.length / 3, EU.push(RU), PU = RU
              }
              tU += gU.indices.length, pU += gU.positions.length / 3
            }
            const qU = TU.splice(0, 1)[0];
            cU = qU.vertexData, RU = qU.transform, KU = TU.map((UU => UU.vertexData)), gU = TU, this.materialInfos = EU
          }
          const GU = KU.reduce(((UU, RU) => UU + (RU.indices?.length ?? 0)), cU.indices?.length ?? 0);
          let jU = PU || KU.some((UU => UU.indices === cU.indices)) ? cU.indices?.slice() : cU.indices;
          if (GU > 0) {
            let EU = jU?.length ?? 0;
            if (jU || (jU = new Array(GU)), jU.length !== GU) {
              if (Array.isArray(jU)) jU.length = GU;
              else {
                const UU = tU || jU instanceof Uint32Array ? new Uint32Array(GU) : new Uint16Array(GU);
                UU.set(jU), jU = UU
              }
              RU && RU.determinant() < 0 && UU._FlipFaces(jU, 0, EU)
            }
            let PU = cU.positions ? cU.positions.length / 3 : 0;
            for (const {
                vertexData: RU,
                transform: tU
              }
              of gU)
              if (RU.indices) {
                for (let UU = 0; UU < RU.indices.length; UU++) jU[EU + UU] = RU.indices[UU] + PU;
                tU && tU.determinant() < 0 && UU._FlipFaces(jU, EU, RU.indices.length), PU += RU.positions.length / 3, EU += RU.indices.length, pU && (yield)
              }
          }
          return this.indices = jU, this.positions = UU._MergeElement(EU.l.PositionKind, cU.positions, RU, gU.map((UU => [UU.vertexData.positions, UU.transform]))), pU && (yield), cU.normals && (this.normals = UU._MergeElement(EU.l.NormalKind, cU.normals, RU, gU.map((UU => [UU.vertexData.normals, UU.transform]))), pU && (yield)), cU.tangents && (this.tangents = UU._MergeElement(EU.l.TangentKind, cU.tangents, RU, gU.map((UU => [UU.vertexData.tangents, UU.transform]))), pU && (yield)), cU.uvs && (this.uvs = UU._MergeElement(EU.l.UVKind, cU.uvs, RU, gU.map((UU => [UU.vertexData.uvs, UU.transform]))), pU && (yield)), cU.uvs2 && (this.uvs2 = UU._MergeElement(EU.l.UV2Kind, cU.uvs2, RU, gU.map((UU => [UU.vertexData.uvs2, UU.transform]))), pU && (yield)), cU.uvs3 && (this.uvs3 = UU._MergeElement(EU.l.UV3Kind, cU.uvs3, RU, gU.map((UU => [UU.vertexData.uvs3, UU.transform]))), pU && (yield)), cU.uvs4 && (this.uvs4 = UU._MergeElement(EU.l.UV4Kind, cU.uvs4, RU, gU.map((UU => [UU.vertexData.uvs4, UU.transform]))), pU && (yield)), cU.uvs5 && (this.uvs5 = UU._MergeElement(EU.l.UV5Kind, cU.uvs5, RU, gU.map((UU => [UU.vertexData.uvs5, UU.transform]))), pU && (yield)), cU.uvs6 && (this.uvs6 = UU._MergeElement(EU.l.UV6Kind, cU.uvs6, RU, gU.map((UU => [UU.vertexData.uvs6, UU.transform]))), pU && (yield)), cU.colors && (this.colors = UU._MergeElement(EU.l.ColorKind, cU.colors, RU, gU.map((UU => [UU.vertexData.colors, UU.transform]))), (void 0 !== cU.hasVertexAlpha || gU.some((UU => void 0 !== UU.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = cU.hasVertexAlpha || gU.some((UU => UU.vertexData.hasVertexAlpha))), pU && (yield)), cU.matricesIndices && (this.matricesIndices = UU._MergeElement(EU.l.MatricesIndicesKind, cU.matricesIndices, RU, gU.map((UU => [UU.vertexData.matricesIndices, UU.transform]))), pU && (yield)), cU.matricesWeights && (this.matricesWeights = UU._MergeElement(EU.l.MatricesWeightsKind, cU.matricesWeights, RU, gU.map((UU => [UU.vertexData.matricesWeights, UU.transform]))), pU && (yield)), cU.matricesIndicesExtra && (this.matricesIndicesExtra = UU._MergeElement(EU.l.MatricesIndicesExtraKind, cU.matricesIndicesExtra, RU, gU.map((UU => [UU.vertexData.matricesIndicesExtra, UU.transform]))), pU && (yield)), cU.matricesWeightsExtra && (this.matricesWeightsExtra = UU._MergeElement(EU.l.MatricesWeightsExtraKind, cU.matricesWeightsExtra, RU, gU.map((UU => [UU.vertexData.matricesWeightsExtra, UU.transform])))), this
        }
        static _MergeElement(RU, gU, tU, pU) {
          const PU = pU.filter((UU => null !== UU[0] && void 0 !== UU[0]));
          if (!gU && 0 == PU.length) return gU;
          if (!gU) return this._MergeElement(RU, PU[0][0], PU[0][1], PU.slice(1));
          const TU = PU.reduce(((UU, RU) => UU + RU[0].length), gU.length),
            qU = RU === EU.l.PositionKind ? UU._TransformVector3Coordinates : RU === EU.l.NormalKind ? UU._TransformVector3Normals : RU === EU.l.TangentKind ? UU._TransformVector4Normals : () => {};
          if (gU instanceof Float32Array) {
            const UU = new Float32Array(TU);
            UU.set(gU), tU && qU(UU, tU, 0, gU.length);
            let RU = gU.length;
            for (const [gU, tU] of PU) UU.set(gU, RU), tU && qU(UU, tU, RU, gU.length), RU += gU.length;
            return UU
          } {
            const UU = new Array(TU);
            for (let tU = 0; tU < gU.length; tU++) UU[tU] = gU[tU];
            tU && qU(UU, tU, 0, gU.length);
            let RU = gU.length;
            for (const [gU, tU] of PU) {
              for (let tU = 0; tU < gU.length; tU++) UU[RU + tU] = gU[tU];
              tU && qU(UU, tU, RU, gU.length), RU += gU.length
            }
            return UU
          }
        }
        _validate() {
          if (!this.positions) throw new GU.d("Positions are required", GU.c.MeshInvalidPositionsError);
          const UU = (UU, RU) => {
              const gU = (0, EU.i)(UU);
              if (RU.length % gU !== 0) throw new Error("The " + UU + "s array count must be a multiple of " + gU);
              return RU.length / gU
            },
            RU = UU(EU.l.PositionKind, this.positions),
            gU = (gU, tU) => {
              const pU = UU(gU, tU);
              if (pU !== RU) throw new Error("The " + gU + "s element count (" + pU + ") does not match the positions count (" + RU + ")")
            };
          this.normals && gU(EU.l.NormalKind, this.normals), this.tangents && gU(EU.l.TangentKind, this.tangents), this.uvs && gU(EU.l.UVKind, this.uvs), this.uvs2 && gU(EU.l.UV2Kind, this.uvs2), this.uvs3 && gU(EU.l.UV3Kind, this.uvs3), this.uvs4 && gU(EU.l.UV4Kind, this.uvs4), this.uvs5 && gU(EU.l.UV5Kind, this.uvs5), this.uvs6 && gU(EU.l.UV6Kind, this.uvs6), this.colors && gU(EU.l.ColorKind, this.colors), this.matricesIndices && gU(EU.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && gU(EU.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && gU(EU.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && gU(EU.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const RU = this.serialize();
          return UU.Parse(RU)
        }
        serialize() {
          const UU = {};
          if (this.positions && (UU.positions = Array.from(this.positions)), this.normals && (UU.normals = Array.from(this.normals)), this.tangents && (UU.tangents = Array.from(this.tangents)), this.uvs && (UU.uvs = Array.from(this.uvs)), this.uvs2 && (UU.uvs2 = Array.from(this.uvs2)), this.uvs3 && (UU.uvs3 = Array.from(this.uvs3)), this.uvs4 && (UU.uvs4 = Array.from(this.uvs4)), this.uvs5 && (UU.uvs5 = Array.from(this.uvs5)), this.uvs6 && (UU.uvs6 = Array.from(this.uvs6)), this.colors && (UU.colors = Array.from(this.colors), UU.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (UU.matricesIndices = Array.from(this.matricesIndices), UU.matricesIndicesExpanded = !0), this.matricesWeights && (UU.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (UU.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), UU.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (UU.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), UU.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            UU.materialInfos = [];
            for (const RU of this.materialInfos) {
              const gU = {
                indexStart: RU.indexStart,
                indexCount: RU.indexCount,
                materialIndex: RU.materialIndex,
                verticesStart: RU.verticesStart,
                verticesCount: RU.verticesCount
              };
              UU.materialInfos.push(gU)
            }
          }
          return UU
        }
        static ExtractFromMesh(RU, gU, tU) {
          return UU._ExtractFrom(RU, gU, tU)
        }
        static ExtractFromGeometry(RU, gU, tU) {
          return UU._ExtractFrom(RU, gU, tU)
        }
        static _ExtractFrom(RU, gU, tU) {
          const pU = new UU;
          if (RU.isVerticesDataPresent(EU.l.PositionKind) && (pU.positions = RU.getVerticesData(EU.l.PositionKind, gU, tU)), RU.isVerticesDataPresent(EU.l.NormalKind) && (pU.normals = RU.getVerticesData(EU.l.NormalKind, gU, tU)), RU.isVerticesDataPresent(EU.l.TangentKind) && (pU.tangents = RU.getVerticesData(EU.l.TangentKind, gU, tU)), RU.isVerticesDataPresent(EU.l.UVKind) && (pU.uvs = RU.getVerticesData(EU.l.UVKind, gU, tU)), RU.isVerticesDataPresent(EU.l.UV2Kind) && (pU.uvs2 = RU.getVerticesData(EU.l.UV2Kind, gU, tU)), RU.isVerticesDataPresent(EU.l.UV3Kind) && (pU.uvs3 = RU.getVerticesData(EU.l.UV3Kind, gU, tU)), RU.isVerticesDataPresent(EU.l.UV4Kind) && (pU.uvs4 = RU.getVerticesData(EU.l.UV4Kind, gU, tU)), RU.isVerticesDataPresent(EU.l.UV5Kind) && (pU.uvs5 = RU.getVerticesData(EU.l.UV5Kind, gU, tU)), RU.isVerticesDataPresent(EU.l.UV6Kind) && (pU.uvs6 = RU.getVerticesData(EU.l.UV6Kind, gU, tU)), RU.isVerticesDataPresent(EU.l.ColorKind)) {
            const UU = RU.geometry || RU,
              PU = UU.getVertexBuffer(EU.l.ColorKind),
              TU = UU.getVerticesData(EU.l.ColorKind, gU, tU);
            if (3 === PU.getSize()) {
              const UU = new Float32Array(4 * TU.length / 3);
              for (let RU = 0, gU = 0; RU < TU.length; RU += 3, gU += 4) UU[gU] = TU[RU], UU[gU + 1] = TU[RU + 1], UU[gU + 2] = TU[RU + 2], UU[gU + 3] = 1;
              pU.colors = UU
            } else {
              if (4 !== PU.getSize()) throw new Error(`Unexpected number of color components: ${PU.getSize()}`);
              pU.colors = TU
            }
          }
          return RU.isVerticesDataPresent(EU.l.MatricesIndicesKind) && (pU.matricesIndices = RU.getVerticesData(EU.l.MatricesIndicesKind, gU, tU)), RU.isVerticesDataPresent(EU.l.MatricesWeightsKind) && (pU.matricesWeights = RU.getVerticesData(EU.l.MatricesWeightsKind, gU, tU)), RU.isVerticesDataPresent(EU.l.MatricesIndicesExtraKind) && (pU.matricesIndicesExtra = RU.getVerticesData(EU.l.MatricesIndicesExtraKind, gU, tU)), RU.isVerticesDataPresent(EU.l.MatricesWeightsExtraKind) && (pU.matricesWeightsExtra = RU.getVerticesData(EU.l.MatricesWeightsExtraKind, gU, tU)), pU.indices = RU.dgU(gU, tU), pU
        }
        static CreateRibbon(UU) {
          throw (0, PU.n)("ribbonBuilder")
        }
        static CreateBox(UU) {
          throw (0, PU.n)("boxBuilder")
        }
        static CreateTiledBox(UU) {
          throw (0, PU.n)("tiledBoxBuilder")
        }
        static CreateTiledPlane(UU) {
          throw (0, PU.n)("tiledPlaneBuilder")
        }
        static CreateSphere(UU) {
          throw (0, PU.n)("sphereBuilder")
        }
        static CreateCylinder(UU) {
          throw (0, PU.n)("cylinderBuilder")
        }
        static CreateTorus(UU) {
          throw (0, PU.n)("torusBuilder")
        }
        static CreateLineSystem(UU) {
          throw (0, PU.n)("linesBuilder")
        }
        static CreateDashedLines(UU) {
          throw (0, PU.n)("linesBuilder")
        }
        static CreateGround(UU) {
          throw (0, PU.n)("groundBuilder")
        }
        static CreateTiledGround(UU) {
          throw (0, PU.n)("groundBuilder")
        }
        static CreateGroundFromHeightMap(UU) {
          throw (0, PU.n)("groundBuilder")
        }
        static CreatePlane(UU) {
          throw (0, PU.n)("planeBuilder")
        }
        static CreateDisc(UU) {
          throw (0, PU.n)("discBuilder")
        }
        static CreatePolygon(UU, RU, gU, tU, pU, EU, TU) {
          throw (0, PU.n)("polygonBuilder")
        }
        static CreateIcoSphere(UU) {
          throw (0, PU.n)("icoSphereBuilder")
        }
        static CreatePolyhedron(UU) {
          throw (0, PU.n)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || pU.n.Up();
          throw (0, PU.n)("capsuleBuilder")
        }
        static CreateTorusKnot(UU) {
          throw (0, PU.n)("torusKnotBuilder")
        }
        static ComputeNormals(UU, RU, gU, tU) {
          let EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, nU = !1,
            bU = !1,
            oU = !1,
            ZU = !1,
            aU = 1,
            YU = 0,
            BU = null;
          tU && (nU = !!tU.facetNormals, bU = !!tU.facetPositions, oU = !!tU.facetPartitioning, aU = !0 === tU.useRightHandedSystem ? -1 : 1, YU = tU.ratio || 0, ZU = !!tU.depthSort, BU = tU.distanceTo, ZU && void 0 === BU && (BU = pU.n.Zero()));
          let VU = 0,
            rU = 0,
            XU = 0,
            vU = 0;
          for (oU && tU && tU.bbSize && (VU = tU.subDiv.X * YU / tU.bbSize.x, rU = tU.subDiv.Y * YU / tU.bbSize.y, XU = tU.subDiv.Z * YU / tU.bbSize.z, vU = tU.subDiv.max * tU.subDiv.max, tU.facetPartitioning.length = 0), EU = 0; EU < UU.length; EU++) gU[EU] = 0;
          const dU = RU.length / 3 | 0;
          for (EU = 0; EU < dU; EU++) {
            if (QU = 3 * RU[3 * EU], eU = QU + 1, WU = QU + 2, fU = 3 * RU[3 * EU + 1], xU = fU + 1, mU = fU + 2, IU = 3 * RU[3 * EU + 2], JU = IU + 1, wU = IU + 2, PU = UU[QU] - UU[fU], TU = UU[eU] - UU[xU], qU = UU[WU] - UU[mU], KU = UU[IU] - UU[fU], cU = UU[JU] - UU[xU], GU = UU[wU] - UU[mU], jU = aU * (TU * GU - qU * cU), uU = aU * (qU * KU - PU * GU), CU = aU * (PU * cU - TU * KU), hU = Math.sqrt(jU * jU + uU * uU + CU * CU), hU = 0 === hU ? 1 : hU, jU /= hU, uU /= hU, CU /= hU, nU && tU && (tU.facetNormals[EU].x = jU, tU.facetNormals[EU].y = uU, tU.facetNormals[EU].z = CU), bU && tU && (tU.facetPositions[EU].x = (UU[QU] + UU[fU] + UU[IU]) / 3, tU.facetPositions[EU].y = (UU[eU] + UU[xU] + UU[JU]) / 3, tU.facetPositions[EU].z = (UU[WU] + UU[mU] + UU[wU]) / 3), oU && tU) {
              const RU = Math.floor((tU.facetPositions[EU].x - tU.bInfo.minimum.x * YU) * VU),
                gU = Math.floor((tU.facetPositions[EU].y - tU.bInfo.minimum.y * YU) * rU),
                pU = Math.floor((tU.facetPositions[EU].z - tU.bInfo.minimum.z * YU) * XU),
                PU = Math.floor((UU[QU] - tU.bInfo.minimum.x * YU) * VU),
                TU = Math.floor((UU[eU] - tU.bInfo.minimum.y * YU) * rU),
                qU = Math.floor((UU[WU] - tU.bInfo.minimum.z * YU) * XU),
                KU = Math.floor((UU[fU] - tU.bInfo.minimum.x * YU) * VU),
                cU = Math.floor((UU[xU] - tU.bInfo.minimum.y * YU) * rU),
                GU = Math.floor((UU[mU] - tU.bInfo.minimum.z * YU) * XU),
                jU = Math.floor((UU[IU] - tU.bInfo.minimum.x * YU) * VU),
                uU = Math.floor((UU[JU] - tU.bInfo.minimum.y * YU) * rU),
                CU = Math.floor((UU[wU] - tU.bInfo.minimum.z * YU) * XU),
                hU = PU + tU.subDiv.max * TU + vU * qU,
                nU = KU + tU.subDiv.max * cU + vU * GU,
                bU = jU + tU.subDiv.max * uU + vU * CU,
                oU = RU + tU.subDiv.max * gU + vU * pU;
              tU.facetPartitioning[oU] = tU.facetPartitioning[oU] ? tU.facetPartitioning[oU] : [], tU.facetPartitioning[hU] = tU.facetPartitioning[hU] ? tU.facetPartitioning[hU] : [], tU.facetPartitioning[nU] = tU.facetPartitioning[nU] ? tU.facetPartitioning[nU] : [], tU.facetPartitioning[bU] = tU.facetPartitioning[bU] ? tU.facetPartitioning[bU] : [], tU.facetPartitioning[hU].push(EU), nU != hU && tU.facetPartitioning[nU].push(EU), bU != nU && bU != hU && tU.facetPartitioning[bU].push(EU), oU != hU && oU != nU && oU != bU && tU.facetPartitioning[oU].push(EU)
            }
            if (ZU && tU && tU.facetPositions) {
              const UU = tU.depthSortedFacets[EU];
              UU.ind = 3 * EU, UU.sqDistance = pU.n.DistanceSquared(tU.facetPositions[EU], BU)
            }
            gU[QU] += jU, gU[eU] += uU, gU[WU] += CU, gU[fU] += jU, gU[xU] += uU, gU[mU] += CU, gU[IU] += jU, gU[JU] += uU, gU[wU] += CU
          }
          for (EU = 0; EU < gU.length / 3; EU++) jU = gU[3 * EU], uU = gU[3 * EU + 1], CU = gU[3 * EU + 2], hU = Math.sqrt(jU * jU + uU * uU + CU * CU), hU = 0 === hU ? 1 : hU, jU /= hU, uU /= hU, CU /= hU, gU[3 * EU] = jU, gU[3 * EU + 1] = uU, gU[3 * EU + 2] = CU
        }
        static _ComputeSides(RU, gU, tU, EU, PU, TU, qU) {
          const KU = tU.length,
            cU = EU.length;
          let GU, jU;
          switch (RU = RU || UU.DEFAULTSIDE) {
            case UU.FRONTSIDE:
              break;
            case UU.BACKSIDE:
              for (GU = 0; GU < KU; GU += 3) {
                const UU = tU[GU];
                tU[GU] = tU[GU + 2], tU[GU + 2] = UU
              }
              for (jU = 0; jU < cU; jU++) EU[jU] = -EU[jU];
              break;
            case UU.DOUBLESIDE: {
              const UU = gU.length,
                RU = UU / 3;
              for (let tU = 0; tU < UU; tU++) gU[UU + tU] = gU[tU];
              for (GU = 0; GU < KU; GU += 3) tU[GU + KU] = tU[GU + 2] + RU, tU[GU + 1 + KU] = tU[GU + 1] + RU, tU[GU + 2 + KU] = tU[GU] + RU;
              for (jU = 0; jU < cU; jU++) EU[cU + jU] = -EU[jU];
              const uU = PU.length;
              let CU;
              for (CU = 0; CU < uU; CU++) PU[CU + uU] = PU[CU];
              for (TU = TU || new pU.q(0, 0, 1, 1), qU = qU || new pU.q(0, 0, 1, 1), CU = 0, GU = 0; GU < uU / 2; GU++) PU[CU] = TU.x + (TU.z - TU.x) * PU[CU], PU[CU + 1] = TU.y + (TU.w - TU.y) * PU[CU + 1], PU[CU + uU] = qU.x + (qU.z - qU.x) * PU[CU + uU], PU[CU + uU + 1] = qU.y + (qU.w - qU.y) * PU[CU + uU + 1], CU += 2;
              break
            }
          }
        }
        static Parse(RU) {
          const gU = new UU,
            tU = RU.positions;
          tU && gU.set(tU, EU.l.PositionKind);
          const pU = RU.normals;
          pU && gU.set(pU, EU.l.NormalKind);
          const PU = RU.tangents;
          PU && gU.set(PU, EU.l.TangentKind);
          const qU = RU.uvs;
          qU && gU.set(qU, EU.l.UVKind);
          const KU = RU.uvs2;
          KU && gU.set(KU, EU.l.UV2Kind);
          const cU = RU.uvs3;
          cU && gU.set(cU, EU.l.UV3Kind);
          const GU = RU.uvs4;
          GU && gU.set(GU, EU.l.UV4Kind);
          const jU = RU.uvs5;
          jU && gU.set(jU, EU.l.UV5Kind);
          const CU = RU.uvs6;
          CU && gU.set(CU, EU.l.UV6Kind);
          const hU = RU.colors;
          hU && (gU.set(TU.g.CheckColors4(hU, tU.length / 3), EU.l.ColorKind), void 0 !== RU.hasVertexAlpha && (gU.hasVertexAlpha = RU.hasVertexAlpha));
          const QU = RU.matricesIndices;
          QU && gU.set(QU, EU.l.MatricesIndicesKind);
          const eU = RU.matricesWeights;
          eU && gU.set(eU, EU.l.MatricesWeightsKind);
          const WU = RU.indices;
          WU && (gU.indices = WU);
          const fU = RU.materialInfos;
          if (fU) {
            gU.materialInfos = [];
            for (const UU of fU) {
              const RU = new uU;
              RU.indexCount = UU.indexCount, RU.indexStart = UU.indexStart, RU.verticesCount = UU.verticesCount, RU.verticesStart = UU.verticesStart, RU.materialIndex = UU.materialIndex, gU.materialInfos.push(RU)
            }
          }
          return gU
        }
        static ImportVertexData(RU, gU) {
          const tU = UU.Parse(RU);
          gU.setAllVerticesData(tU, RU.updatable)
        }
      }, (() => {
        const pU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [KU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gU = [KU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], CU = [KU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], hU = [KU.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, tU.i)(UU, null, RU, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector3Coordinates" in UU,
            get: UU => UU._TransformVector3Coordinates
          },
          metadata: pU
        }, null, QU), (0, tU.i)(UU, null, gU, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector3Normals" in UU,
            get: UU => UU._TransformVector3Normals
          },
          metadata: pU
        }, null, QU), (0, tU.i)(UU, null, CU, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: UU => "_TransformVector4Normals" in UU,
            get: UU => UU._TransformVector4Normals
          },
          metadata: pU
        }, null, QU), (0, tU.i)(UU, null, hU, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: UU => "_FlipFaces" in UU,
            get: UU => UU._FlipFaces
          },
          metadata: pU
        }, null, QU), pU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pU
        })
      })(), UU.FRONTSIDE = ((0, tU.j)(UU, QU), 0), UU.BACKSIDE = 1, UU.DOUBLESIDE = 2, UU.DEFAULTSIDE = 0, UU._UniqueIdGenerator = 0, UU
    })()
  },
  39864: (UU, RU, gU) => {
    var tU = gU(36600),
      pU = gU(38236),
      EU = gU(39698),
      PU = gU(39782),
      TU = gU(39517);
    const qU = "bakedVertexAnimationSettingsInstanced";

    function KU(UU) {
      const RU = UU.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return RU instanceof Float32Array || RU instanceof Uint16Array
    }

    function cU(UU, RU, gU, tU) {
      gU.Y5(Number.POSITIVE_INFINITY), tU.Y5(Number.NEGATIVE_INFINITY);
      for (let pU = 0; pU < 3 * RU; pU += 3) {
        const RU = UU[pU],
          EU = UU[pU + 1],
          PU = UU[pU + 2];
        RU < gU.x && (gU.x = RU), EU < gU.y && (gU.y = EU), PU < gU.z && (gU.z = PU), RU > tU.x && (tU.x = RU), EU > tU.y && (tU.y = EU), PU > tU.z && (tU.z = PU)
      }
    }

    function GU(UU, RU, gU) {
      gU && (UU.x -= UU.x * gU.x + gU.y, UU.y -= UU.y * gU.x + gU.y, UU.z -= UU.z * gU.x + gU.y, RU.x += RU.x * gU.x + gU.y, RU.y += RU.y * gU.x + gU.y, RU.z += RU.z * gU.x + gU.y)
    }

    function jU(UU, RU, gU, pU, EU) {
      const PU = tU.h.xC[7],
        TU = tU.h.xC[8];
      for (let qU = 0; qU < 2; ++qU)
        for (let KU = 0; KU < 2; ++KU)
          for (let cU = 0; cU < 2; ++cU) PU.set(qU ? RU.x : UU.x, KU ? RU.y : UU.y, cU ? RU.z : UU.z), tU.n.TransformCoordinatesToRef(PU, gU, TU), pU.minimizeInPlace(TU), EU.maximizeInPlace(TU)
    }

    function uU(UU, RU, gU, pU, EU) {
      const PU = tU.h.xC[7];
      for (let TU = 0; TU < 3 * RU; TU += 3) tU.n.TransformCoordinatesFromFloatsToRef(UU[TU], UU[TU + 1], UU[TU + 2], gU, PU), pU.minimizeInPlace(PU), EU.maximizeInPlace(PU)
    }
    let CU = !1;
    CU || (CU = !0, PU.c.prototype.thinInstanceAdd = function(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.aZ().WC().getCaps().instancedArrays) return pU.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(UU) ? UU.length : 1);
      const gU = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(UU))
        for (let tU = 0; tU < UU.length; ++tU) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU[tU], tU === UU.length - 1 && RU);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, UU, RU);
      return gU
    }, PU.c.prototype.thinInstanceAddSelf = function() {
      let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(tU.c.IdentityReadOnly, UU)
    }, PU.c.prototype.thinInstanceRegisterAttribute = function(UU, RU) {
      UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), this.removeVerticesData(UU), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[UU] = RU, this._userThinInstanceBuffersStorage.sizes[UU] = RU * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[UU] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[UU]), this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new TU.l(this.WC(), this._userThinInstanceBuffersStorage.data[UU], UU, !0, !1, RU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU])
    }, PU.c.prototype.thinInstanceSetMatrixAt = function(UU, RU) {
      let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || UU >= this._thinInstanceDataStorage.instancesCount) return !1;
      const tU = this._thinInstanceDataStorage.matrixData;
      return RU.copyToArray(tU, 16 * UU), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[UU] = RU), gU && (this.T_("matrix"), this.IC || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, PU.c.prototype.thinInstanceSetAttributeAt = function(UU, RU, gU) {
      let tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[UU] || RU >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(UU, 0), this._userThinInstanceBuffersStorage.data[UU].set(gU, RU * this._userThinInstanceBuffersStorage.strides[UU]), tU && this.T_(UU), !0)
    }, Object.defineProperty(PU.c.prototype, "I6", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(UU) {
        const RU = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        UU <= (RU ? RU.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = UU)
      },
      enumerable: !0,
      configurable: !0
    }), PU.c.prototype._thinInstanceCreateMatrixBuffer = function(UU, RU) {
      let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const tU = new TU.e(this.WC(), RU, !gU, 16, !1, !0);
      for (let pU = 0; pU < 4; pU++) this.setVerticesBuffer(tU.createVertexBuffer(UU + pU, 4 * pU, 4));
      return tU
    }, PU.c.prototype.e_ = function(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (gU = gU || 16, "matrix" === UU) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = RU ? RU.length : 32 * gU, this._thinInstanceDataStorage.matrixData = RU, this._thinInstanceDataStorage.worldMatrices = null, null !== RU ? (this._thinInstanceDataStorage.instancesCount = RU.length / gU, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", RU, tU), this.IC || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.IC || this.refreshBoundingInfo());
      else if ("previousMatrix" === UU) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = RU, null !== RU && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", RU, tU));
      else if ("splatIndex" === UU && RU) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = RU.length / gU, this._userThinInstanceBuffersStorage.data[UU] = RU, this._userThinInstanceBuffersStorage.strides[UU] = gU, this._userThinInstanceBuffersStorage.sizes[UU] = RU.length;
        const tU = new TU.e(this.WC(), RU, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = tU;
        for (let RU = 0; RU < 4; RU++) this.setVerticesBuffer(tU.createVertexBuffer(UU + RU, 4 * RU, 4))
      } else UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), null === RU ? this._userThinInstanceBuffersStorage?.data[UU] && (this.removeVerticesData(UU), delete this._userThinInstanceBuffersStorage.data[UU], delete this._userThinInstanceBuffersStorage.strides[UU], delete this._userThinInstanceBuffersStorage.sizes[UU], delete this._userThinInstanceBuffersStorage.vertexBuffers[UU]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[UU] = RU, this._userThinInstanceBuffersStorage.strides[UU] = gU, this._userThinInstanceBuffersStorage.sizes[UU] = RU.length, this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new TU.l(this.WC(), RU, UU, !tU, !1, gU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
    }, PU.c.prototype.T_ = function(UU) {
      "matrix" === UU ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === UU ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === UU ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[UU], 0, this._thinInstanceDataStorage.instancesCount) : (UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[UU] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[UU].isUpdatable() && this._thinInstanceRecreateBuffer(UU), this._userThinInstanceBuffersStorage.vertexBuffers[UU].updateDirectly(this._userThinInstanceBuffersStorage.data[UU], 0)))
    }, PU.c.prototype.thinInstancePartialBufferUpdate = function(UU, RU, gU) {
      if ("matrix" === UU) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof RU ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * gU * Float32Array.BYTES_PER_ELEMENT, 16 * RU), 16 * gU) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(RU, gU));
      else if (UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[UU]) {
        const tU = this._userThinInstanceBuffersStorage.vertexBuffers[UU];
        if ("number" === typeof RU) {
          const tU = new Float32Array(this._userThinInstanceBuffersStorage.data[UU].buffer, this._userThinInstanceBuffersStorage.data[UU].byteOffset + gU * this._userThinInstanceBuffersStorage.strides[UU] * Float32Array.BYTES_PER_ELEMENT, RU * this._userThinInstanceBuffersStorage.strides[UU]);
          this._userThinInstanceBuffersStorage.vertexBuffers[UU].updateDirectly(tU, gU * this._userThinInstanceBuffersStorage.strides[UU])
        } else tU.updateDirectly(RU, gU)
      }
    }, PU.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const UU = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let RU = 0; RU < this._thinInstanceDataStorage.instancesCount; ++RU) this._thinInstanceDataStorage.worldMatrices[RU] = tU.c.FromArray(UU, 16 * RU)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, PU.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const PU = this._thinInstanceDataStorage.boundingVectors;
      if (UU || !this.rawBoundingInfo) {
        if (PU.length = 0, pU && function(UU, RU, gU) {
            const pU = UU._userThinInstanceBuffersStorage,
              PU = pU?.data[qU],
              CU = pU?.strides[qU];
            if (!PU || !CU || CU < 4 || !KU(UU)) return !1;
            const hU = UU._thinInstanceDataStorage.matrixData;
            if (!hU) return !1;
            const QU = {},
              eU = tU.h.Vector4[0],
              WU = tU.h.xC[1],
              fU = tU.h.xC[2],
              xU = tU.h.xC[3],
              mU = tU.h.xC[4],
              IU = tU.h.xC[5],
              JU = tU.h.xC[6],
              wU = tU.h.Matrix[2],
              nU = UU.geometry ? UU.geometry.boundingBias : null,
              bU = UU.getTotalVertices();
            WU.Y5(Number.POSITIVE_INFINITY), fU.Y5(Number.NEGATIVE_INFINITY), xU.Y5(Number.POSITIVE_INFINITY), mU.Y5(Number.NEGATIVE_INFINITY);
            for (let EU = 0; EU < UU._thinInstanceDataStorage.instancesCount; ++EU) {
              const RU = EU * CU;
              eU.set(PU[RU], PU[RU + 1], PU[RU + 2], PU[RU + 3]);
              const pU = UU._getData({
                applyMorph: gU,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: eU,
                updatePositionsArray: !1,
                cache: QU
              }, null, TU.l.PositionKind);
              if (!pU) return !1;
              cU(pU, bU, IU, JU), GU(IU, JU, nU), WU.minimizeInPlace(IU), fU.maximizeInPlace(JU), tU.c.FromArrayToRef(hU, 16 * EU, wU), nU ? jU(IU, JU, wU, xU, mU) : uU(pU, bU, wU, xU, mU)
            }
            return !(!isFinite(WU.x) || !isFinite(xU.x)) && (UU.lY().reConstruct(xU, mU), UU.rawBoundingInfo = new EU.d(WU, fU), function(UU, RU) {
              UU.length = 0;
              for (let gU = 0; gU < RU.boundingBox.vectors.length; ++gU) UU.push(RU.boundingBox.vectors[gU].clone())
            }(RU, UU.rawBoundingInfo), UU._updateBoundingInfo(), !0)
          }(this, PU, gU)) return;
        pU && this.bakedVertexAnimationManager?.isEnabled && KU(this) ? this.refreshBoundingInfo({
          applySkeleton: RU,
          applyMorph: gU,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(RU, gU);
        const UU = this.lY();
        this.rawBoundingInfo = new EU.d(UU.minimum, UU.maximum)
      }
      const CU = this.lY(),
        hU = this._thinInstanceDataStorage.matrixData;
      if (0 === PU.length)
        for (let tU = 0; tU < CU.boundingBox.vectors.length; ++tU) PU.push(CU.boundingBox.vectors[tU].clone());
      tU.h.xC[0].Y5(Number.POSITIVE_INFINITY), tU.h.xC[1].Y5(Number.NEGATIVE_INFINITY);
      for (let EU = 0; EU < this._thinInstanceDataStorage.instancesCount; ++EU) {
        tU.c.FromArrayToRef(hU, 16 * EU, tU.h.Matrix[0]);
        for (let UU = 0; UU < PU.length; ++UU) tU.n.TransformCoordinatesToRef(PU[UU], tU.h.Matrix[0], tU.h.xC[2]), tU.h.xC[0].minimizeInPlace(tU.h.xC[2]), tU.h.xC[1].maximizeInPlace(tU.h.xC[2])
      }
      CU.reConstruct(tU.h.xC[0], tU.h.xC[1]), this._updateBoundingInfo()
    }, PU.c.prototype._thinInstanceRecreateBuffer = function(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === UU ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, RU)) : "previousMatrix" === UU ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, RU)) : (UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[UU]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new TU.l(this.WC(), this._userThinInstanceBuffersStorage.data[UU], UU, !RU, !1, this._userThinInstanceBuffersStorage.strides[UU], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
    }, PU.c.prototype._thinInstanceUpdateBufferSize = function(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      UU === TU.l.ColorKind && (UU = TU.l.ColorInstanceKind);
      const gU = "matrix" === UU;
      if (!gU && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[UU])) return;
      const tU = gU ? 16 : this._userThinInstanceBuffersStorage.strides[UU],
        pU = gU ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[UU];
      let EU = gU ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[UU];
      const PU = (this._thinInstanceDataStorage.instancesCount + RU) * tU;
      let qU = pU;
      for (; qU < PU;) qU *= 2;
      if (!EU || pU != qU) {
        if (EU) {
          const UU = new Float32Array(qU);
          UU.set(EU, 0), EU = UU
        } else EU = new Float32Array(qU);
        gU ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", EU, !1), this._thinInstanceDataStorage.matrixData = EU, this._thinInstanceDataStorage.matrixBufferSize = qU, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", EU, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[UU]?.dispose(), this._userThinInstanceBuffersStorage.data[UU] = EU, this._userThinInstanceBuffersStorage.sizes[UU] = qU, this._userThinInstanceBuffersStorage.vertexBuffers[UU] = new TU.l(this.WC(), EU, UU, !0, !1, tU, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[UU]))
      }
    }, PU.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, PU.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39823: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => WU,
      e: () => hU
    });
    var tU, pU, EU, PU, TU = gU(39377),
      qU = gU(39380),
      KU = gU(39395),
      cU = gU(36624),
      GU = gU(36600),
      jU = gU(39610),
      uU = gU(36639),
      CU = gU(39256);
    let hU = (() => {
      var UU;
      let RU, gU, tU, pU, EU, PU, uU, CU, hU, QU = jU.b,
        eU = [],
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        nU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [];
      return UU = class extends QU {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(RU) {
          this._billboardMode !== RU && (this._billboardMode = RU, this._cache.useBillboardPosition = 0 !== (this._billboardMode & UU.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(UU) {
          this._infiniteDistance !== UU && (this._infiniteDistance = UU)
        }
        constructor(RU) {
          let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(RU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new GU.n(0, 0, 1), this._up = new GU.n(0, 1, 0), this._right = new GU.n(1, 0, 0), this._position = (0, TU.j)(this, eU, GU.n.Zero()), this._rotation = ((0, TU.j)(this, WU), (0, TU.j)(this, fU, GU.n.Zero())), this._rotationQuaternion = ((0, TU.j)(this, xU), (0, TU.j)(this, mU, null)), this._scaling = ((0, TU.j)(this, IU), (0, TU.j)(this, JU, GU.n.One())), this._transformToBoneReferal = ((0, TU.j)(this, wU), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, TU.j)(this, nU, UU.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, TU.j)(this, bU), (0, TU.j)(this, oU, 1)), this._infiniteDistance = ((0, TU.j)(this, ZU), (0, TU.j)(this, aU, !1)), this.ignoreNonUniformScaling = ((0, TU.j)(this, YU), (0, TU.j)(this, BU, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, TU.j)(this, VU), (0, TU.j)(this, rU, !1)), this._poseMatrix = ((0, TU.j)(this, XU), null), this._localMatrix = GU.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = GU.n.Zero(), this._absoluteScaling = GU.n.Zero(), this._absoluteRotationQuaternion = GU.d.Identity(), this._pivotMatrix = GU.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new cU.b, this._nonUniformScaling = !1, gU && this.aZ().addTransformNode(this)
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
        get ep() {
          return this._scaling
        }
        set ep(UU) {
          this._scaling = UU, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(UU) {
          this._rotationQuaternion = UU, UU && this._rotation.Y5(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return GU.n.TransformNormalFromFloatsToRef(0, 0, this.aZ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return GU.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return GU.n.TransformNormalFromFloatsToRef(this.aZ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(UU) {
          return this._poseMatrix ? (this._poseMatrix.PgU(UU), this) : (this._poseMatrix = UU.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = GU.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const RU = this._cache;
          return this._billboardMode === RU.billboardMode && this._billboardMode === UU.BILLBOARDMODE_NONE && (!RU.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.PgU(UU), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = RU, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = GU.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            RU = arguments.length > 1 ? arguments[1] : void 0,
            gU = arguments.length > 2 ? arguments[2] : void 0;
          const tU = this.clone("Clone of " + (this.name || this.id), UU || this.parent, !0);
          tU && gU && gU(this, tU);
          for (const pU of this.getChildTransformNodes(!0)) pU.instantiateHierarchy(tU, RU, gU);
          return tU
        }
        pY() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return UU ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Y5(0), this._rotationQuaternion = this._rotationQuaternion || GU.d.Identity(), UU.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = UU, this._absolutePosition.b_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get hPU() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(UU) {
          if (!UU) return this;
          let RU, gU, tU;
          if (void 0 === UU.x) {
            if (arguments.length < 3) return this;
            RU = arguments[0], gU = arguments[1], tU = arguments[2]
          } else RU = UU.x, gU = UU.y, tU = UU.z;
          if (this.parent) {
            const UU = GU.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(UU), GU.n.TransformCoordinatesFromFloatsToRef(RU, gU, tU, UU, this.position)
          } else this.position.x = RU, this.position.y = gU, this.position.z = tU;
          return this._absolutePosition.PgU(UU), this
        }
        setPositionWithLocalVector(UU) {
          return this.computeWorldMatrix(), this.position = GU.n.TransformNormal(UU, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const UU = GU.h.Matrix[0];
          return this._localMatrix.invertToRef(UU), GU.n.TransformNormal(this.position, UU)
        }
        locallyTranslate(UU) {
          return this.computeWorldMatrix(!0), this.position = GU.n.TransformCoordinates(UU, this._localMatrix), this
        }
        lookAt(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const PU = UU._LookAtVectorCache,
            TU = 0 === EU ? this.position : this.getAbsolutePosition();
          if (RU.subtractToRef(TU, PU), this.setDirection(PU, gU, tU, pU), 1 === EU && this.parent)
            if (this.rotationQuaternion) {
              const UU = GU.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(UU);
              const RU = GU.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(RU), RU.invert(), UU.multiplyToRef(RU, UU), this.rotationQuaternion.fromRotationMatrix(UU)
            } else {
              const UU = GU.h.Quaternion[0];
              GU.d.FromEulerVectorToRef(this.rotation, UU);
              const RU = GU.h.Matrix[0];
              UU.toRotationMatrix(RU);
              const gU = GU.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(gU), gU.invert(), RU.multiplyToRef(gU, RU), UU.fromRotationMatrix(RU), UU.toEulerAnglesToRef(this.rotation)
            } return this
        }
        pM(UU) {
          const RU = GU.n.Zero();
          return this.getDirectionToRef(UU, RU), RU
        }
        getDirectionToRef(UU, RU) {
          return GU.n.TransformNormalToRef(UU, this.getWorldMatrix(), RU), this
        }
        setDirection(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const pU = -Math.atan2(UU.z, UU.x) + Math.PI / 2,
            EU = Math.sqrt(UU.x * UU.x + UU.z * UU.z),
            PU = -Math.atan2(UU.y, EU);
          return this.rotationQuaternion ? GU.d.RotationYawPitchRollToRef(pU + RU, PU + gU, tU, this.rotationQuaternion) : (this.rotation.x = PU + gU, this.rotation.y = pU + RU, this.rotation.z = tU), this
        }
        setPivotPoint(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.aZ().getRenderId() && this.computeWorldMatrix(!0);
          const gU = this.getWorldMatrix();
          if (1 == RU) {
            const RU = GU.h.Matrix[0];
            gU.invertToRef(RU), UU = GU.n.TransformCoordinates(UU, RU)
          }
          return this.setPivotMatrix(GU.c.Translation(-UU.x, -UU.y, -UU.z), !0)
        }
        getPivotPoint() {
          const UU = GU.n.Zero();
          return this.getPivotPointToRef(UU), UU
        }
        getPivotPointToRef(UU) {
          return UU.x = -this._pivotMatrix.m[12], UU.y = -this._pivotMatrix.m[13], UU.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const UU = GU.n.Zero();
          return this.getAbsolutePivotPointToRef(UU), UU
        }
        getAbsolutePivotPointToRef(UU) {
          return this.getPivotPointToRef(UU), GU.n.TransformCoordinatesToRef(UU, this.getWorldMatrix(), UU), this
        }
        cRU(UU) {
          if (this._isDirty) return this;
          if (this._children)
            for (const RU of this._children) RU.cRU(UU);
          return super.cRU(UU)
        }
        setParent(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!RU && !this.parent) return this;
          const pU = GU.h.Quaternion[0],
            EU = GU.h.xC[0],
            PU = GU.h.xC[1],
            TU = GU.h.Matrix[1];
          GU.c.IdentityToRef(TU);
          const qU = GU.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let KU = this.rotationQuaternion;
          return KU || (KU = UU._TmpRotation, GU.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, KU)), GU.c.ComposeToRef(this.ep, KU, this.position, qU), this.parent && qU.multiplyToRef(this.parent.computeWorldMatrix(!0), qU), RU && (RU.computeWorldMatrix(!0).invertToRef(TU), qU.multiplyToRef(TU, qU)), qU.decompose(PU, pU, EU, gU ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.PgU(pU) : pU.toEulerAnglesToRef(this.rotation), this.ep.PgU(PU), this.position.PgU(EU), this.parent = RU, tU && this.setPivotMatrix(GU.c.Identity()), this
        }
        addChild(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return UU.setParent(this, RU), this
        }
        removeChild(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return UU.parent !== this || UU.setParent(null, RU), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(UU) {
          return this._nonUniformScaling !== UU && (this._nonUniformScaling = UU, !0)
        }
        attachToBone(UU, RU) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = RU, this.parent = UU, UU.getSkeleton().prepare(!0), UU.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = UU ? this._currentParentWhenAttachingToBone : null, this) : (UU && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(RU, gU, tU) {
          let pU;
          if (RU.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Y5(0)), tU && 0 !== tU) {
            if (this.parent) {
              const UU = this.parent.getWorldMatrix(),
                tU = GU.h.Matrix[0];
              UU.invertToRef(tU), RU = GU.n.TransformNormal(RU, tU), UU.determinant() < 0 && (gU *= -1)
            }
            pU = GU.d.RotationAxisToRef(RU, gU, UU._RotationAxisCache), pU.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else pU = GU.d.RotationAxisToRef(RU, gU, UU._RotationAxisCache), this.rotationQuaternion.multiplyToRef(pU, this.rotationQuaternion);
          return this
        }
        rotateAround(UU, RU, gU) {
          RU.normalize(), this.rotationQuaternion || (this.rotationQuaternion = GU.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Y5(0));
          const tU = GU.h.xC[0],
            pU = GU.h.xC[1],
            EU = GU.h.xC[2],
            PU = GU.h.Quaternion[0],
            TU = GU.h.Matrix[0],
            qU = GU.h.Matrix[1],
            KU = GU.h.Matrix[2],
            cU = GU.h.Matrix[3];
          return UU.subtractToRef(this.position, tU), GU.c.TranslationToRef(tU.x, tU.y, tU.z, TU), GU.c.TranslationToRef(-tU.x, -tU.y, -tU.z, qU), GU.c.RotationAxisToRef(RU, gU, KU), qU.multiplyToRef(KU, cU), cU.multiplyToRef(TU, cU), cU.decompose(pU, PU, EU), this.position.addInPlace(EU), PU.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(UU, RU, gU) {
          const tU = UU.scale(RU);
          if (gU && 0 !== gU) this.setAbsolutePosition(this.getAbsolutePosition().add(tU));
          else {
            const UU = this.getPositionExpressedInLocalSpace().add(tU);
            this.setPositionWithLocalVector(UU)
          }
          return this
        }
        addRotation(UU, RU, gU) {
          let tU;
          this.rotationQuaternion ? tU = this.rotationQuaternion : (tU = GU.h.Quaternion[1], GU.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, tU));
          const pU = GU.h.Quaternion[0];
          return GU.d.RotationYawPitchRollToRef(RU, UU, gU, pU), tU.multiplyInPlace(pU), this.rotationQuaternion || tU.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== UU.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const tU = this.aZ().getRenderId();
          if (!this._isDirty && !RU && (this._currentRenderId === tU || this.isSynchronized())) return this._currentRenderId = tU, this._worldMatrix;
          gU = gU || this.aZ().activeCamera, this._updateCache();
          const pU = this._cache;
          pU.pivotMatrixUpdated = !1, pU.billboardMode = this.billboardMode, pU.infiniteDistance = this.infiniteDistance, pU.parent = this._parentNode, this._currentRenderId = tU, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const EU = this._getEffectiveParent(),
            PU = UU._TmpScaling;
          let TU, qU = this._position;
          if (this._infiniteDistance && !this.parent && gU) {
            const RU = gU.getWorldMatrix().m;
            qU = UU._TmpTranslation, qU.b_(this._position.x + RU[12], this._position.y + RU[13], this._position.z + RU[14])
          }
          if (PU.b_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, TU = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(GU.d.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.b_(0, 0, 0))
            }
          } else TU = UU._TmpRotation, GU.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, TU);
          if (this._usePivotMatrix) {
            const UU = GU.h.Matrix[1];
            GU.c.ScalingToRef(PU.x, PU.y, PU.z, UU);
            const RU = GU.h.Matrix[0];
            TU.toRotationMatrix(RU), this._pivotMatrix.multiplyToRef(UU, GU.h.Matrix[4]), GU.h.Matrix[4].multiplyToRef(RU, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(qU.x, qU.y, qU.z)
          } else GU.c.ComposeToRef(PU, TU, qU, this._localMatrix);
          if (EU && EU.getWorldMatrix) {
            if (RU && EU.computeWorldMatrix(RU), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const UU = this.parent;
                UU.getSkeleton().prepare(), UU.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), GU.h.Matrix[7])
              } else GU.h.Matrix[7].PgU(EU.getWorldMatrix());
              const RU = GU.h.xC[5],
                gU = GU.h.xC[6],
                tU = GU.h.Quaternion[0];
              GU.h.Matrix[7].decompose(gU, tU, RU), GU.c.ScalingToRef(gU.x, gU.y, gU.z, GU.h.Matrix[7]), GU.h.Matrix[7].setTranslation(RU), UU.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(tU, RU), this._localMatrix.setTranslation(RU)), this._localMatrix.multiplyToRef(GU.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const UU = this.parent;
              UU.getSkeleton().prepare(), this._localMatrix.multiplyToRef(UU.getFinalMatrix(), GU.h.Matrix[6]), GU.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(EU.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.PgU(this._localMatrix);
          if (gU && this.billboardMode)
            if (pU.useBillboardPosition) {
              const RU = GU.h.xC[0];
              this._worldMatrix.getTranslationToRef(RU);
              const tU = gU.globalPosition;
              this._worldMatrix.invertToRef(GU.h.Matrix[1]);
              const pU = GU.h.xC[1];
              GU.n.TransformCoordinatesToRef(tU, GU.h.Matrix[1], pU), pU.normalize();
              const EU = -Math.atan2(pU.z, pU.x) + Math.PI / 2,
                PU = Math.sqrt(pU.x * pU.x + pU.z * pU.z),
                TU = -Math.atan2(pU.y, PU);
              if (GU.d.RotationYawPitchRollToRef(EU, TU, 0, GU.h.Quaternion[0]), (this.billboardMode & UU.BILLBOARDMODE_ALL) !== UU.BILLBOARDMODE_ALL) {
                const RU = GU.h.xC[1];
                GU.h.Quaternion[0].toEulerAnglesToRef(RU), (this.billboardMode & UU.BILLBOARDMODE_X) !== UU.BILLBOARDMODE_X && (RU.x = 0), (this.billboardMode & UU.BILLBOARDMODE_Y) !== UU.BILLBOARDMODE_Y && (RU.y = 0), (this.billboardMode & UU.BILLBOARDMODE_Z) !== UU.BILLBOARDMODE_Z && (RU.z = 0), GU.c.RotationYawPitchRollToRef(RU.y, RU.x, RU.z, GU.h.Matrix[0])
              } else GU.c.FromQuaternionToRef(GU.h.Quaternion[0], GU.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(GU.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(GU.h.xC[0])
            } else {
              const RU = GU.h.xC[0];
              this._worldMatrix.getTranslationToRef(RU), GU.h.Matrix[1].PgU(gU.getViewMatrix());
              const tU = this.aZ().useRightHandedSystem;
              if (tU && GU.h.Matrix[1].multiplyToRef(UU._TmpRHRestore, GU.h.Matrix[1]), GU.h.Matrix[1].setTranslationFromFloats(0, 0, 0), GU.h.Matrix[1].invertToRef(GU.h.Matrix[0]), (this.billboardMode & UU.BILLBOARDMODE_ALL) !== UU.BILLBOARDMODE_ALL) {
                GU.h.Matrix[0].decompose(void 0, GU.h.Quaternion[0], void 0);
                const RU = GU.h.xC[1];
                GU.h.Quaternion[0].toEulerAnglesToRef(RU), (this.billboardMode & UU.BILLBOARDMODE_X) !== UU.BILLBOARDMODE_X && (RU.x = 0), (this.billboardMode & UU.BILLBOARDMODE_Y) !== UU.BILLBOARDMODE_Y && (RU.y = 0), (this.billboardMode & UU.BILLBOARDMODE_Z) !== UU.BILLBOARDMODE_Z && (RU.z = 0), tU && (RU.y += Math.PI), GU.c.RotationYawPitchRollToRef(RU.y, RU.x, RU.z, GU.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(GU.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(GU.h.xC[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : EU && EU._nonUniformScaling ? this._updateNonUniformScalingState(EU._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.b_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = GU.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), UU) {
            const UU = this.getChildren();
            for (let RU = 0; RU < UU.length; ++RU) {
              const gU = UU[RU];
              if (gU) {
                gU.computeWorldMatrix();
                const UU = GU.h.Matrix[0];
                gU._localMatrix.multiplyToRef(this._localMatrix, UU);
                const RU = GU.h.Quaternion[0];
                UU.decompose(gU.ep, RU, gU.position), gU.rotationQuaternion ? gU.rotationQuaternion.PgU(RU) : RU.toEulerAnglesToRef(gU.rotation)
              }
            }
          }
          this.ep.b_(1, 1, 1), this.position.b_(0, 0, 0), this.rotation.b_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = GU.d.Identity()), this._worldMatrix = GU.c.Identity()
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
          return UU || (UU = this.aZ().activeCamera), GU.n.TransformCoordinates(this.getAbsolutePosition(), UU.getViewMatrix())
        }
        getDistanceToCamera() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return UU || (UU = this.aZ().activeCamera), this.getAbsolutePosition().subtract(UU.globalPosition).length()
        }
        clone(RU, gU, tU) {
          const pU = KU.b.Clone((() => new UU(RU, this.aZ())), this);
          if (pU.name = RU, pU.id = RU, gU && (pU.parent = gU), !tU) {
            const UU = this.getDescendants(!0);
            for (let gU = 0; gU < UU.length; gU++) {
              const tU = UU[gU];
              tU.clone && tU.clone(RU + "." + tU.name, pU)
            }
          }
          return pU
        }
        serialize(UU) {
          const RU = KU.b.Serialize(this, UU);
          return RU.type = this.getClassName(), RU.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(RU), RU.localMatrix = this.getPivotMatrix().vgU(), RU.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (RU.pY = !0), KU.b.AppendSerializedAnimations(this, RU), RU.hu = this.serializeAnimationRanges(), RU
        }
        getChildTransformNodes(RU, gU) {
          const tU = [];
          return this._getDescendants(tU, RU, (RU => (!gU || gU(RU)) && RU instanceof UU)), tU
        }
        dispose(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.aZ().stopAnimation(this), this.aZ().removeTransformNode(this), this._parentContainer) {
            const UU = this._parentContainer.transformNodes.indexOf(this);
            UU > -1 && this._parentContainer.transformNodes.splice(UU, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), UU) {
            const UU = this.getChildTransformNodes(!0);
            for (const RU of UU) RU.parent = null, RU.computeWorldMatrix(!0)
          }
          super.dispose(UU, RU)
        }
        normalizeToUnitCube() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gU = arguments.length > 2 ? arguments[2] : void 0,
            tU = null,
            pU = null;
          RU && (this.rotationQuaternion ? (pU = this.rotationQuaternion.clone(), this.rotationQuaternion.b_(0, 0, 0, 1)) : this.rotation && (tU = this.rotation.clone(), this.rotation.b_(0, 0, 0)));
          const EU = this.getHierarchyBoundingVectors(UU, gU),
            PU = EU.max.subtract(EU.min),
            TU = Math.max(PU.x, PU.y, PU.z);
          if (0 === TU) return this;
          const qU = 1 / TU;
          return this.ep.scaleInPlace(qU), RU && (this.rotationQuaternion && pU ? this.rotationQuaternion.PgU(pU) : this.rotation && tU && this.rotation.PgU(tU)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const KU = "function" === typeof Symbol && Symbol.metadata ? Object.create(QU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, qU.I)("position")], gU = [(0, qU.I)("rotation")], tU = [(0, qU.z)("rotationQuaternion")], pU = [(0, qU.I)("ep")], EU = [(0, qU.K)("billboardMode")], PU = [(0, qU.K)()], uU = [(0, qU.K)("infiniteDistance")], CU = [(0, qU.K)()], hU = [(0, qU.K)()], (0, TU.i)(null, null, RU, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: UU => "_position" in UU,
            get: UU => UU._position,
            set: (UU, RU) => {
              UU._position = RU
            }
          },
          metadata: KU
        }, eU, WU), (0, TU.i)(null, null, gU, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_rotation" in UU,
            get: UU => UU._rotation,
            set: (UU, RU) => {
              UU._rotation = RU
            }
          },
          metadata: KU
        }, fU, xU), (0, TU.i)(null, null, tU, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: UU => "_rotationQuaternion" in UU,
            get: UU => UU._rotationQuaternion,
            set: (UU, RU) => {
              UU._rotationQuaternion = RU
            }
          },
          metadata: KU
        }, mU, IU), (0, TU.i)(null, null, pU, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "_scaling" in UU,
            get: UU => UU._scaling,
            set: (UU, RU) => {
              UU._scaling = RU
            }
          },
          metadata: KU
        }, JU, wU), (0, TU.i)(null, null, EU, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_billboardMode" in UU,
            get: UU => UU._billboardMode,
            set: (UU, RU) => {
              UU._billboardMode = RU
            }
          },
          metadata: KU
        }, nU, bU), (0, TU.i)(null, null, PU, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: UU => "scalingDeterminant" in UU,
            get: UU => UU.scalingDeterminant,
            set: (UU, RU) => {
              UU.scalingDeterminant = RU
            }
          },
          metadata: KU
        }, oU, ZU), (0, TU.i)(null, null, uU, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "_infiniteDistance" in UU,
            get: UU => UU._infiniteDistance,
            set: (UU, RU) => {
              UU._infiniteDistance = RU
            }
          },
          metadata: KU
        }, aU, YU), (0, TU.i)(null, null, CU, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "ignoreNonUniformScaling" in UU,
            get: UU => UU.ignoreNonUniformScaling,
            set: (UU, RU) => {
              UU.ignoreNonUniformScaling = RU
            }
          },
          metadata: KU
        }, BU, VU), (0, TU.i)(null, null, hU, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: UU => "reIntegrateRotationIntoRotationQuaternion" in UU,
            get: UU => UU.reIntegrateRotationIntoRotationQuaternion,
            set: (UU, RU) => {
              UU.reIntegrateRotationIntoRotationQuaternion = RU
            }
          },
          metadata: KU
        }, rU, XU), KU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KU
        })
      })(), UU.BILLBOARDMODE_NONE = 0, UU.BILLBOARDMODE_X = 1, UU.BILLBOARDMODE_Y = 2, UU.BILLBOARDMODE_Z = 4, UU.BILLBOARDMODE_ALL = 7, UU.BILLBOARDMODE_USE_POSITION = 128, UU.BillboardUseParentOrientation = !1, UU._TmpRotation = GU.d.Zero(), UU._TmpScaling = GU.n.Zero(), UU._TmpTranslation = GU.n.Zero(), UU._TmpRHRestore = GU.c.Scaling(1, 1, -1), UU._LookAtVectorCache = new GU.n(0, 0, 0), UU._RotationAxisCache = new GU.d, UU
    })();

    function QU(UU, RU, gU) {
      const tU = KU.b.Parse((() => new hU(UU.name, RU)), UU, RU, gU);
      if (UU.localMatrix ? tU.setPreTransformMatrix(GU.c.FromArray(UU.localMatrix)) : UU.pivotMatrix && tU.setPivotMatrix(GU.c.FromArray(UU.pivotMatrix)), tU.GJ(UU.isEnabled), tU._waitingParsedUniqueId = UU.uniqueId, void 0 !== UU.parentId && (tU._waitingParentId = UU.parentId), void 0 !== UU.parentInstanceIndex && (tU._waitingParentInstanceIndex = UU.parentInstanceIndex), UU.pY && (tU._waitingFreezeWorldMatrix = UU.pY), UU.animations) {
        for (let RU = 0; RU < UU.animations.length; RU++) {
          const gU = UU.animations[RU],
            pU = (0, uU.e)("BABYLON.Animation");
          pU && tU.animations.push(pU.Parse(gU))
        }
        jU.b.ParseAnimationRanges(tU, UU, RU)
      }
      return UU.autoAnimate && RU.beginAnimation(tU, UU.autoAnimateFrom, UU.autoAnimateTo, UU.autoAnimateLoop, UU.autoAnimateSpeed || 1), tU
    }
    let eU = !1;

    function WU() {
      eU || (eU = !0, hU.Parse = QU)
    }(tU = hU.prototype).yX ?? (tU.yX = (0, CU.m)("TransformNode", "yX")), (pU = hU.prototype).applyImpulse ?? (pU.applyImpulse = (0, CU.m)("TransformNode", "applyImpulse")), (EU = hU.prototype).applyAngularImpulse ?? (EU.applyAngularImpulse = (0, CU.m)("TransformNode", "applyAngularImpulse")), (PU = hU.prototype).applyTorque ?? (PU.applyTorque = (0, CU.m)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(hU.prototype, "physicsBody") || Object.defineProperty(hU.prototype, "physicsBody", (0, CU.i)("TransformNode", "physicsBody"))
  },
  39786: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      try {
        const tU = UU.next();
        tU.done ? RU(tU) : tU.value ? tU.value.then((() => {
          tU.value = void 0, RU(tU)
        }), gU) : RU(tU)
      } catch (tU) {
        gU(tU)
      }
    }

    function pU() {
      let UU, RU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (gU, pU, EU) => {
        const PU = performance.now();
        void 0 === UU || PU - UU > RU ? (UU = PU, setTimeout((() => {
          tU(gU, pU, EU)
        }), 0)) : tU(gU, pU, EU)
      }
    }

    function EU(UU, RU, gU, tU, pU) {
      const EU = () => {
        let PU;
        const TU = UU => {
          UU.done ? gU(UU.value) : void 0 === PU ? PU = !0 : EU()
        };
        do {
          PU = void 0, pU && pU.aborted ? tU(new Error("Aborted")) : RU(UU, TU, tU), void 0 === PU && (PU = !1)
        } while (PU)
      };
      EU()
    }

    function PU(UU, RU) {
      let gU;
      return EU(UU, tU, (UU => gU = UU), (UU => {
        throw UU
      }), RU), gU
    }
    async function TU(UU, RU, gU) {
      return await new Promise(((tU, pU) => {
        EU(UU, RU, tU, pU, gU)
      }))
    }

    function qU(UU, RU) {
      return function() {
        return PU(UU(...arguments), RU)
      }
    }
    gU.d(RU, {
      d: () => pU,
      f: () => qU,
      g: () => TU,
      i: () => PU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);
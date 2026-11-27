export const id = 286;
export const ids = [286];
export const modules = {
  41732: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => LR,
      d: () => WR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41626),
      ZR = GR(38233),
      qR = GR(38204),
      iR = GR(41741),
      fR = GR(39914),
      VR = GR(38253),
      KR = GR(41407),
      wR = GR(39248),
      rR = GR(38928),
      eR = GR(41483),
      aR = GR(41542);
    let LR = (() => {
      var RR;
      let JR, GR, VR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR = iR.d,
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        zR = [],
        SR = [],
        jR = [],
        dR = [],
        ER = [],
        YR = [],
        kR = [],
        QR = [],
        FR = [],
        TR = [],
        sR = [],
        hR = [],
        RJ = [],
        JJ = [],
        GJ = [],
        yJ = [],
        tJ = [];
      return RR = class extends xR {
        get position() {
          return this._position
        }
        set position(RR) {
          this._position = RR
        }
        set upVector(RR) {
          this._upVector = RR
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let JR, GR;
          if (this.mode === RR.PERSPECTIVE_CAMERA) this.fovMode === RR.FOVMODE_VERTICAL_FIXED ? (GR = 2 * this.minZ * Math.tan(this.fov / 2), JR = this.ke().getAspectRatio(this) * GR) : (JR = 2 * this.minZ * Math.tan(this.fov / 2), GR = JR / this.ke().getAspectRatio(this));
          else {
            const RR = this.ke().getRenderWidth() / 2,
              yR = this.ke().getRenderHeight() / 2;
            JR = (this.orthoRight ?? RR) - (this.orthoLeft ?? -RR), GR = (this.orthoTop ?? yR) - (this.orthoBottom ?? -yR)
          }
          return JR * GR
        }
        set orthoLeft(RR) {
          this._orthoLeft = RR;
          for (const JR of this._rigCameras) JR.orthoLeft = RR
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(RR) {
          this._orthoRight = RR;
          for (const JR of this._rigCameras) JR.orthoRight = RR
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(RR) {
          this._orthoBottom = RR;
          for (const JR of this._rigCameras) JR.orthoBottom = RR
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(RR) {
          this._orthoTop = RR;
          for (const JR of this._rigCameras) JR.orthoTop = RR
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(JR / (2 * RR))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(RR) {
          this._baseInertia = RR
        }
        set mode(RR) {
          this._mode = RR;
          for (const JR of this._rigCameras) JR.mode = RR
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(JR, GR, tR) {
          let iR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, eR.c)(), super(JR, tR, !1), this.inputs = (0, yR.m)(this, NR), this._position = (0, yR.m)(this, DR, qR.r.Zero()), this._upVector = ((0, yR.m)(this, HR), (0, yR.m)(this, oR, qR.r.Up())), this.oblique = ((0, yR.m)(this, cR), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, yR.m)(this, PR, .8), this.projectionPlaneTilt = ((0, yR.m)(this, IR), (0, yR.m)(this, mR, 0)), this.minZ = ((0, yR.m)(this, zR), (0, yR.m)(this, SR, 1)), this.maxZ = ((0, yR.m)(this, jR), (0, yR.m)(this, dR, 1e4)), this._baseInertia = ((0, yR.m)(this, ER), .9), this._mode = RR.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new wR.c(0, 0, 1, 1), this.layerMask = (0, yR.m)(this, YR, 268435455), this.fovMode = ((0, yR.m)(this, kR), (0, yR.m)(this, QR, RR.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, RR.RIG_MODE_NONE)), this.interaxialDistance = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, void 0)), this.isStereoscopicSideBySide = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, void 0)), this.ignoreCameraMaxZ = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, !1)), this.customRenderTargets = ((0, yR.m)(this, tJ), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new ZR.b, this.onProjectionMatrixChangedObservable = new ZR.b, this.onAfterCheckInputsObservable = new ZR.b, this.onRestoreStateObservable = new ZR.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new qR.e, this._postProcesses = new Array, this._activeMeshes = new uR.f(256), this._globalPosition = qR.r.Zero(), this._computedViewMatrix = qR.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = qR.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = qR.i.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.jH().defaultCameraLayerMask, this.jH().addCamera(this), iR && !this.jH().activeCamera && (this.jH().activeCamera = this), this.position = GR, this.renderPassId = this.jH().ke().createRenderPassId(`Camera ${JR}`)
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
          return "tn"
        }
        toString(RR) {
          let JR = "Name: " + this.name;
          if (JR += ", type: " + this.getClassName(), this.animations)
            for (let GR = 0; GR < this.animations.length; GR++) JR += ", animation[0]: " + this.animations[GR].toString(RR);
          return JR
        }
        applyVerticalCorrection() {
          const RR = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -RR.x : RR.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(RR) {
          return -1 !== this._activeMeshes.indexOf(RR)
        }
        isReady() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (RR)
            for (const JR of this._postProcesses)
              if (JR && !JR.isReady()) return !1;
          return super.isReady(RR)
        }
        _initCache() {
          super._initCache(), this._cache.position = new qR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new qR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(RR) {
          RR || super._updateCache(), this._cache.position.vN(this.position), this._cache.upVector.vN(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const JR = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let GR = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === JR;
          if (!GR) return !1;
          const yR = this.ke();
          return this.mode === RR.PERSPECTIVE_CAMERA ? GR = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === yR.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (GR = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === yR.getRenderWidth() && this._cache.renderHeight === yR.getRenderHeight(), this.oblique && (GR = GR && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), GR
        }
        attachControl(RR, JR) {}
        detachControl(RR) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== RR.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let RR = 0; RR < this._postProcesses.length; RR++)
            if (null !== this._postProcesses[RR]) return this._postProcesses[RR];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const RR = this._getFirstPostProcess();
          RR && RR.markTextureDirty();
          for (let JR = 0, GR = this._rigCameras.length; JR < GR; JR++) {
            const RR = this._rigCameras[JR],
              GR = RR._rigPostProcess;
            if (GR) {
              "pass" === GR.getEffectName() && (RR.isIntermediate = 0 === this._postProcesses.length), RR._postProcesses = this._postProcesses.slice(0).concat(GR), GR.markTextureDirty()
            } else RR._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !RR.isReusable() && this._postProcesses.indexOf(RR) > -1 ? (fR.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == JR || JR < 0 ? this._postProcesses.push(RR) : null === this._postProcesses[JR] ? this._postProcesses[JR] = RR : this._postProcesses.splice(JR, 0, RR), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.hGR(), this._postProcesses.indexOf(RR))
        }
        detachPostProcess(RR) {
          const JR = this._postProcesses.indexOf(RR); - 1 !== JR && (this._postProcesses[JR] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.hGR(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return qR.e.Identity()
        }
        getViewMatrix(RR) {
          return !RR && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.jH().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(RR) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== RR && (this._projectionMatrix = RR)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(JR) {
          if (this._doNotComputeProjectionMatrix || !JR && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const GR = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = GR, this._refreshFrustumPlanes = !0;
          const yR = this.ke(),
            tR = this.jH(),
            uR = yR.LtR;
          if (this.mode === RR.PERSPECTIVE_CAMERA) {
            let JR;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = yR.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), JR = tR.useRightHandedSystem ? qR.e.PerspectiveFovRHToRef : qR.e.PerspectiveFovLHToRef, JR(this.fov, yR.getAspectRatio(this), uR ? GR : this.minZ, uR ? this.minZ : GR, this._projectionMatrix, this.fovMode === RR.FOVMODE_VERTICAL_FIXED, yR.isNDCHalfZRange, this.projectionPlaneTilt, uR)
          } else {
            const RR = yR.getRenderWidth() / 2,
              JR = yR.getRenderHeight() / 2;
            tR.useRightHandedSystem ? this.oblique ? qR.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -RR, this.orthoRight ?? RR, this.orthoBottom ?? -JR, this.orthoTop ?? JR, uR ? GR : this.minZ, uR ? this.minZ : GR, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, yR.isNDCHalfZRange) : qR.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -RR, this.orthoRight ?? RR, this.orthoBottom ?? -JR, this.orthoTop ?? JR, uR ? GR : this.minZ, uR ? this.minZ : GR, this._projectionMatrix, yR.isNDCHalfZRange) : this.oblique ? qR.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -RR, this.orthoRight ?? RR, this.orthoBottom ?? -JR, this.orthoTop ?? JR, uR ? GR : this.minZ, uR ? this.minZ : GR, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, yR.isNDCHalfZRange) : qR.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -RR, this.orthoRight ?? RR, this.orthoBottom ?? -JR, this.orthoTop ?? JR, uR ? GR : this.minZ, uR ? this.minZ : GR, this._projectionMatrix, yR.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = yR.getRenderWidth(), this._cache.renderHeight = yR.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(RR) {
          return (this.radius || (this.target ? qR.r.Distance(this.position, this.target) : this.position.length())) + RR
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? rR.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = rR.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), JR && this.rigCameras.length > 0) {
            let JR = !1;
            for (const GR of this.rigCameras) GR._updateFrustumPlanes(), JR = JR || RR.isInFrustum(GR._frustumPlanes);
            return JR
          }
          return RR.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(RR) {
          return this._updateFrustumPlanes(), RR.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, KR.j)("Ray")
        }
        getForwardRayToRef(RR) {
          throw (0, KR.j)("Ray")
        }
        dispose(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.jH().stopAnimation(this), this.jH().removeCamera(this); this._rigCameras.length > 0;) {
            const RR = this._rigCameras.pop();
            RR && RR.dispose()
          }
          if (this._parentContainer) {
            const RR = this._parentContainer.cameras.indexOf(this);
            RR > -1 && this._parentContainer.cameras.splice(RR, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== RR.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let RR = this._postProcesses.length;
            for (; --RR >= 0;) {
              const JR = this._postProcesses[RR];
              JR && JR.dispose(this)
            }
          }
          let yR = this.customRenderTargets.length;
          for (; --yR >= 0;) this.customRenderTargets[yR].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.jH().ke().releaseRenderPassId(this.renderPassId), super.dispose(JR, GR)
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
        setCameraRigMode(JR, GR) {
          if (this.cameraRigMode !== JR) {
            for (; this._rigCameras.length > 0;) {
              const RR = this._rigCameras.pop();
              RR && RR.dispose()
            }
            if (this.cameraRigMode = JR, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = GR.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== RR.RIG_MODE_NONE) {
              const RR = this.createRigCamera(this.name + "_L", 0);
              RR && (RR._isLeftCamera = !0);
              const JR = this.createRigCamera(this.name + "_R", 1);
              JR && (JR._isRightCamera = !0), RR && JR && (this._rigCameras.push(RR), this._rigCameras.push(JR))
            }
            this._setRigMode(GR), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(RR) {}
        _getVRProjectionMatrix() {
          return qR.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ke().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(RR, JR) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[RR] = JR, "interaxialDistance" === RR && (this._cameraRigParams.stereoHalfAngle = JR / .0637 * (Math.PI / 180))
        }
        createRigCamera(RR, JR) {
          return null
        }
        _updateRigCameras() {
          for (let RR = 0; RR < this._rigCameras.length; RR++) this._rigCameras[RR].minZ = this.minZ, this._rigCameras[RR].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[RR].fov = this.fov, this._rigCameras[RR].upVector.vN(this.upVector);
          this.cameraRigMode === RR.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const RR = aR.c.Serialize(this);
          return RR.uniqueId = this.uniqueId, RR.type = this.getClassName(), this.parent && this.parent._serializeAsParent(RR), this.inputs && this.inputs.serialize(RR), aR.c.AppendSerializedAnimations(this, RR), RR.WL = this.serializeAnimationRanges(), RR.isEnabled = this.isEnabled(), RR
        }
        clone(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const yR = aR.c.Clone(RR.GetConstructorFromName(this.getClassName(), JR, this.jH(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return yR.name = JR, yR.parent = GR, this.onClonedObservable.notifyObservers(yR), yR
        }
        m_(RR) {
          const JR = qR.r.Zero();
          return this.getDirectionToRef(RR, JR), JR
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(RR, JR) {
          qR.r.TransformNormalToRef(RR, this.getWorldMatrix(), JR)
        }
        static GetConstructorFromName(JR, GR, yR) {
          let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ZR = iR.d.Construct(JR, GR, yR, {
            interaxial_distance: tR,
            isStereoscopicSideBySide: uR
          });
          return ZR || (() => RR._CreateDefaultParsedCamera(GR, yR))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let RR = this.jH().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (RR *= -1), RR
        }
      }, (() => {
        const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(xR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, tR.G)("position")], GR = [(0, tR.G)("upVector")], VR = [(0, tR.H)()], LR = [(0, tR.H)()], nR = [(0, tR.H)()], UR = [(0, tR.H)()], WR = [(0, tR.H)()], AR = [(0, tR.H)()], CR = [(0, tR.H)()], XR = [(0, tR.H)()], MR = [(0, tR.H)()], BR = [(0, tR.H)()], lR = [(0, tR.H)()], pR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], (0, yR.l)(RR, null, VR, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: RR => "orthoLeft" in RR,
            get: RR => RR.orthoLeft
          },
          metadata: uR
        }, null, NR), (0, yR.l)(RR, null, LR, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: RR => "orthoRight" in RR,
            get: RR => RR.orthoRight
          },
          metadata: uR
        }, null, NR), (0, yR.l)(RR, null, nR, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: RR => "orthoBottom" in RR,
            get: RR => RR.orthoBottom
          },
          metadata: uR
        }, null, NR), (0, yR.l)(RR, null, UR, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: RR => "orthoTop" in RR,
            get: RR => RR.orthoTop
          },
          metadata: uR
        }, null, NR), (0, yR.l)(RR, null, MR, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: RR => "inertia" in RR,
            get: RR => RR.inertia
          },
          metadata: uR
        }, null, NR), (0, yR.l)(RR, null, BR, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: RR => "mode" in RR,
            get: RR => RR.mode
          },
          metadata: uR
        }, null, NR), (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: RR => "_position" in RR,
            get: RR => RR._position,
            set: (RR, JR) => {
              RR._position = JR
            }
          },
          metadata: uR
        }, DR, HR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: RR => "_upVector" in RR,
            get: RR => RR._upVector,
            set: (RR, JR) => {
              RR._upVector = JR
            }
          },
          metadata: uR
        }, oR, cR), (0, yR.l)(null, null, WR, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: RR => "fov" in RR,
            get: RR => RR.fov,
            set: (RR, JR) => {
              RR.fov = JR
            }
          },
          metadata: uR
        }, PR, IR), (0, yR.l)(null, null, AR, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: RR => "projectionPlaneTilt" in RR,
            get: RR => RR.projectionPlaneTilt,
            set: (RR, JR) => {
              RR.projectionPlaneTilt = JR
            }
          },
          metadata: uR
        }, mR, zR), (0, yR.l)(null, null, CR, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: RR => "minZ" in RR,
            get: RR => RR.minZ,
            set: (RR, JR) => {
              RR.minZ = JR
            }
          },
          metadata: uR
        }, SR, jR), (0, yR.l)(null, null, XR, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: RR => "maxZ" in RR,
            get: RR => RR.maxZ,
            set: (RR, JR) => {
              RR.maxZ = JR
            }
          },
          metadata: uR
        }, dR, ER), (0, yR.l)(null, null, lR, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: RR => "layerMask" in RR,
            get: RR => RR.layerMask,
            set: (RR, JR) => {
              RR.layerMask = JR
            }
          },
          metadata: uR
        }, YR, kR), (0, yR.l)(null, null, pR, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "fovMode" in RR,
            get: RR => RR.fovMode,
            set: (RR, JR) => {
              RR.fovMode = JR
            }
          },
          metadata: uR
        }, QR, FR), (0, yR.l)(null, null, gR, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "cameraRigMode" in RR,
            get: RR => RR.cameraRigMode,
            set: (RR, JR) => {
              RR.cameraRigMode = JR
            }
          },
          metadata: uR
        }, TR, sR), (0, yR.l)(null, null, bR, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: RR => "interaxialDistance" in RR,
            get: RR => RR.interaxialDistance,
            set: (RR, JR) => {
              RR.interaxialDistance = JR
            }
          },
          metadata: uR
        }, hR, RJ), (0, yR.l)(null, null, vR, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: RR => "isStereoscopicSideBySide" in RR,
            get: RR => RR.isStereoscopicSideBySide,
            set: (RR, JR) => {
              RR.isStereoscopicSideBySide = JR
            }
          },
          metadata: uR
        }, JJ, GJ), (0, yR.l)(null, null, OR, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: RR => "ignoreCameraMaxZ" in RR,
            get: RR => RR.ignoreCameraMaxZ,
            set: (RR, JR) => {
              RR.ignoreCameraMaxZ = JR
            }
          },
          metadata: uR
        }, yJ, tJ), uR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uR
        })
      })(), RR._CreateDefaultParsedCamera = (RR, JR) => {
        throw (0, KR.j)("UniversalCamera")
      }, RR.PERSPECTIVE_CAMERA = 0, RR.ORTHOGRAPHIC_CAMERA = 1, RR.FOVMODE_VERTICAL_FIXED = 0, RR.FOVMODE_HORIZONTAL_FIXED = 1, RR.RIG_MODE_NONE = 0, RR.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, RR.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, RR.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, RR.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, RR.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, RR.RIG_MODE_VR = 20, RR.RIG_MODE_CUSTOM = 22, RR.ForceAttachControlToAlwaysPreventDefault = !1, RR
    })();

    function nR(RR, JR) {
      const GR = RR.type,
        yR = LR.GetConstructorFromName(GR, RR.name, JR, RR.interaxial_distance, RR.isStereoscopicSideBySide),
        tR = aR.c.Parse(yR, RR, JR);
      if (void 0 !== RR.parentId && (tR._waitingParentId = RR.parentId), void 0 !== RR.parentInstanceIndex && (tR._waitingParentInstanceIndex = RR.parentInstanceIndex), tR.inputs && (tR.inputs.parse(RR), tR._setupInputs()), RR.upVector && (tR.upVector = qR.r.FromArray(RR.upVector)), tR.setPosition && (tR.position.VJR(0, 0, 0), tR.setPosition(qR.r.FromArray(RR.position))), RR.target && tR.setTarget && tR.setTarget(qR.r.FromArray(RR.target)), RR.cameraRigMode) {
        const JR = RR.interaxial_distance ? {
          interaxialDistance: RR.interaxial_distance
        } : {};
        tR.setCameraRigMode(RR.cameraRigMode, JR)
      }
      if (RR.animations) {
        for (let JR = 0; JR < RR.animations.length; JR++) {
          const GR = RR.animations[JR],
            yR = (0, VR.e)("BABYLON.Animation");
          yR && tR.animations.push(yR.Parse(GR))
        }
        iR.d.ParseAnimationRanges(tR, RR, JR)
      }
      return RR.autoAnimate && JR.beginAnimation(tR, RR.autoAnimateFrom, RR.autoAnimateTo, RR.autoAnimateLoop, RR.autoAnimateSpeed || 1), void 0 !== RR.isEnabled && tR.JA(RR.isEnabled), tR
    }
    let UR = !1;

    function WR() {
      UR || (UR = !0, LR.Parse = nR)
    }
  },
  41751: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR) {
        this._cameraPosition = JR, this._behavior = GR, this.activeInput = !1, this.speed = 1, this.I9 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new yR.r, this.rotationAccumulatedPixels = new yR.r, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = yR.r.Zero(), this.rotationDeltaCurrentFrame = yR.r.Zero(), this._zoomVelocity = 0, this._panVelocity = new yR.r, this.referenceFrameRate = 60, this._rotationVelocity = new yR.r, this._prevFrameTimeMs = 0, this._scene = RR
      }
      computeCurrentFrameDeltas() {
        const RR = this._scene.ke().getDeltaTime(),
          JR = this._getEffectiveDeltaMs(RR);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.NRR(0), this.rotationDeltaCurrentFrame.NRR(0), this.zoomDeltaCurrentFrame = 0, void(RR > 0 && (this._prevFrameTimeMs = RR));
        this.panDeltaCurrentFrame.NRR(0), this.rotationDeltaCurrentFrame.NRR(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.VJR(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * JR, this.panDeltaCurrentFrame), this._rotationVelocity.VJR(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.VJR(this._rotationVelocity.x * this.speed * this.rotationXSpeed * JR, this._rotationVelocity.y * this.speed * this.rotationYSpeed * JR, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.I9 * this._zoomSpeedMultiplier) * JR, RR > 0 && (this._prevFrameTimeMs = RR), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.NRR(0), this.rotationAccumulatedPixels.NRR(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.NRR(0), this.rotationAccumulatedPixels.NRR(0)
      }
      resetPanVelocity() {
        this._panVelocity.NRR(0), this.panAccumulatedPixels.NRR(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(RR) {
        const JR = this._scene.ke().getDeltaTime(),
          GR = this._getEffectiveDeltaMs(JR),
          yR = 1e3 / this.referenceFrameRate;
        return Math.pow(RR, GR / yR)
      }
      getFrameIndependentInputScale(RR) {
        const JR = 1 - RR;
        if (JR <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(RR)) / JR
      }
      _getEffectiveDeltaMs(RR) {
        return RR > 0 ? RR : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(RR, JR, GR) {
        let yR = RR;
        const tR = this._scene.ke().getDeltaTime(),
          uR = this._getEffectiveDeltaMs(tR);
        if (0 === uR) return yR;
        const ZR = this.getFrameIndependentDecay(GR);
        if (yR *= ZR, 0 !== JR || this.activeInput) {
          const RR = 1 - GR;
          yR += JR / uR * (RR > 0 ? (1 - ZR) / RR : 1)
        } else Math.abs(yR) < 1e-6 && (yR = 0);
        return yR
      }
    }
  },
  41755: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR, JR) {
        this.inputMap = [], this.handlers = RR, this._createDefaultEntries = JR, this.resetInputMap()
      }
      resolveInteraction(RR, JR) {
        for (const GR of this.inputMap)
          if (GR.source === RR && this._entryMatches(GR, JR)) return GR;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(RR, JR, GR) {
        const yR = this.inputMap;
        for (let tR = 0; tR < yR.length; tR++) {
          const uR = yR[tR];
          if (uR.source === RR && uR.interaction === JR && this._entryConditionsMatch(uR, GR)) return uR
        }
      }
      getEntries(RR, JR, GR) {
        const yR = [],
          tR = this.inputMap;
        for (let uR = 0; uR < tR.length; uR++) {
          const ZR = tR[uR];
          ZR.source === RR && ZR.interaction === JR && this._entryConditionsMatch(ZR, GR) && yR.push(ZR)
        }
        return yR
      }
      addEntry(RR) {
        const JR = this._entrySpecificity(RR);
        let GR = this.inputMap.length;
        for (let yR = 0; yR < this.inputMap.length; yR++)
          if (this._entrySpecificity(this.inputMap[yR]) < JR) {
            GR = yR;
            break
          } this.inputMap.splice(GR, 0, RR)
      }
      setInteraction(RR, JR, GR) {
        const yR = this.resolveInteraction(RR, JR);
        return yR && this._entryCoversAllConditionsOf(yR, JR) ? (yR.interaction = GR, !0) : (this.addEntry({
          source: RR,
          ...JR ?? {},
          interaction: GR
        }), !0)
      }
      _entryCoversAllConditionsOf(RR, JR) {
        if (!JR) return !0;
        const GR = RR;
        for (const yR of Object.keys(JR)) {
          const RR = JR[yR];
          if (void 0 !== RR)
            if ("modifiers" === yR) {
              const JR = GR.modifiers ?? {};
              for (const GR of Object.keys(RR))
                if (void 0 !== RR[GR] && void 0 === JR[GR]) return !1
            } else if (void 0 === GR[yR]) return !1
        }
        return !0
      }
      setInteractions(RR, JR, GR) {
        let yR = 0;
        const tR = this.inputMap;
        for (let uR = 0; uR < tR.length; uR++) {
          const ZR = tR[uR];
          ZR.source === RR && this._entryMatches(ZR, JR) && (ZR.interaction = GR, yR++)
        }
        return yR
      }
      _entryMatches(RR, JR) {
        switch (RR.source) {
          case "pointer":
            return (void 0 === RR.button || RR.button === JR?.button) && this._matchModifiers(RR.modifiers, JR?.modifiers);
          case "wheel":
            return this._matchModifiers(RR.modifiers, JR?.modifiers);
          case "touch":
            return void 0 === RR.touchCount || RR.touchCount === JR?.touchCount;
          case "keyboard":
            return (void 0 === RR.key || (Array.isArray(RR.key) ? -1 !== RR.key.indexOf(JR?.key ?? -1) : RR.key === JR?.key)) && this._matchModifiers(RR.modifiers, JR?.modifiers)
        }
      }
      _entryConditionsMatch(RR, JR) {
        if (!JR) return !0;
        switch (RR.source) {
          case "pointer":
            return (!("button" in JR) || RR.button === JR.button) && (!("modifiers" in JR) || this._entryModifiersMatch(RR.modifiers, JR.modifiers));
          case "wheel":
            return !("modifiers" in JR) || this._entryModifiersMatch(RR.modifiers, JR.modifiers);
          case "touch":
            return !("touchCount" in JR) || RR.touchCount === JR.touchCount;
          case "keyboard":
            if ("key" in JR) {
              if (void 0 === RR.key) return void 0 === JR.key;
              if (void 0 === JR.key || (Array.isArray(RR.key) ? -1 === RR.key.indexOf(JR.key) : RR.key !== JR.key)) return !1
            }
            return !("modifiers" in JR) || this._entryModifiersMatch(RR.modifiers, JR.modifiers)
        }
      }
      _entrySpecificity(RR) {
        let JR = 0;
        return "button" in RR && void 0 !== RR.button && JR++, "key" in RR && void 0 !== RR.key && JR++, "touchCount" in RR && void 0 !== RR.touchCount && JR++, "modifiers" in RR && RR.modifiers && JR++, JR
      }
      _matchModifiers(RR, JR) {
        return !RR || (void 0 === RR.ctrl || RR.ctrl === (JR?.ctrl ?? !1)) && ((void 0 === RR.shift || RR.shift === (JR?.shift ?? !1)) && (void 0 === RR.alt || RR.alt === (JR?.alt ?? !1)))
      }
      _entryModifiersMatch(RR, JR) {
        if (!JR) return !RR;
        return void 0 !== JR.ctrl || void 0 !== JR.shift || void 0 !== JR.alt ? (void 0 === JR.ctrl || RR?.ctrl === JR.ctrl) && ((void 0 === JR.shift || RR?.shift === JR.shift) && (void 0 === JR.alt || RR?.alt === JR.alt)) : !RR || void 0 === RR.ctrl && void 0 === RR.shift && void 0 === RR.alt
      }
    }
  },
  41723: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => nR,
      f: () => aR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41732),
      ZR = GR(38204),
      qR = GR(38213),
      iR = GR(41744),
      fR = GR(41741),
      VR = GR(41751),
      KR = GR(41755);
    class wR extends VR.d {
      constructor(RR, JR, GR) {
        super(RR, JR, GR), this.input = new KR.b({
          translate: (RR, JR, GR) => {
            this.panAccumulatedPixels.x += RR, this.panAccumulatedPixels.y += JR, this.panAccumulatedPixels.z += GR
          },
          rotate: (RR, JR) => {
            this.rotationAccumulatedPixels.x += RR, this.rotationAccumulatedPixels.y += JR
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
    const rR = ZR.e.Zero(),
      eR = ZR.i.Identity();
    let aR = (() => {
        var RR;
        let JR, GR, fR, VR, KR = uR.b,
          aR = [],
          LR = [],
          nR = [],
          UR = [],
          WR = [],
          AR = [],
          CR = [],
          XR = [];
        return RR = class extends KR {
          get inertia() {
            return this._targetInertia
          }
          set inertia(RR) {
            this._targetInertia = RR, this.movement && (this.movement.panInertia = RR, this.movement.rotationInertia = RR)
          }
          constructor(RR, JR, GR) {
            super(RR, JR, GR, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new ZR.r(0, 0, 0), this.cameraRotation = new ZR.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, yR.m)(this, aR, !1), this.rotation = ((0, yR.m)(this, LR), (0, yR.m)(this, nR, void 0)), this.rotationQuaternion = (0, yR.m)(this, UR), this.speed = (0, yR.m)(this, WR, 2), this.noRotationConstraint = ((0, yR.m)(this, AR), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = qR.c, this._rotationEpsilon = qR.c, this.lockedTarget = (0, yR.m)(this, CR, null), this._currentTarget = ((0, yR.m)(this, XR), ZR.r.Zero()), this._initialFocalDistance = 1, this._viewMatrix = ZR.e.Zero(), this._cameraTransformMatrix = ZR.e.Zero(), this._cameraRotationMatrix = ZR.e.Zero(), this._transformedReferencePoint = ZR.r.Zero(), this._deferredPositionUpdate = new ZR.r, this._deferredRotationQuaternionUpdate = new ZR.i, this._deferredRotationUpdate = new ZR.r, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = ZR.r.Forward(this.jH().useRightHandedSystem), this.rotation = new ZR.r(0, this.jH().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new wR(this.jH(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(RR) {
            this.getWorldMatrix();
            const JR = ZR.l.Fe[0],
              GR = ZR.l.Fe[1];
            return GR.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(GR, JR), JR.scaleInPlace(RR), this.globalPosition.add(JR)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const RR = this.lockedTarget;
              RR.computeWorldMatrix().getTranslationToRef(RR.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.VJR(0, 0, 0), this.cameraRotation.VJR(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new ZR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new ZR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new ZR.i(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(RR) {
            RR || super._updateCache();
            const JR = this._getLockedTargetPosition();
            JR ? this._cache.lockedTarget ? this._cache.lockedTarget.vN(JR) : this._cache.lockedTarget = JR.clone() : this._cache.lockedTarget = null, this._cache.rotation.vN(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.vN(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const RR = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(RR) : !RR) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const RR = this.ke();
            return this.speed * Math.sqrt(RR.getDeltaTime() / (100 * RR.getFps()))
          }
          setTarget(RR) {
            this.upVector.normalize(), this._initialFocalDistance = RR.subtract(this.position).length(), this.position.z === RR.z && (this.position.z += qR.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.jH().useRightHandedSystem ? ZR.e.LookAtRHToRef(this.position, RR, ZR.r.UpReadOnly, rR) : ZR.e.LookAtLHToRef(this.position, RR, ZR.r.UpReadOnly, rR), rR.invert();
            const JR = this.rotationQuaternion || eR;
            ZR.i.FromRotationMatrixToRef(rR, JR), JR.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(RR) {
            this.setTarget(RR)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(ZR.l.Matrix[0]), ZR.r.TransformNormalToRef(this.cameraDirection, ZR.l.Matrix[0], ZR.l.Fe[0]), this._deferredPositionUpdate.addInPlace(ZR.l.Fe[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.vN(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.vN(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const RR = this.movement,
              JR = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            RR.panAccumulatedPixels.addInPlace(this.cameraDirection), RR.rotationAccumulatedPixels.x += this.cameraRotation.x, RR.rotationAccumulatedPixels.y += this.cameraRotation.y, RR.computeCurrentFrameDeltas(), this.cameraDirection.vN(RR.panDeltaCurrentFrame), this.cameraRotation.set(RR.rotationDeltaCurrentFrame.x, RR.rotationDeltaCurrentFrame.y);
            const GR = this.speed * this._panningEpsilon;
            !JR && Math.abs(this.cameraDirection.x) < GR && Math.abs(this.cameraDirection.y) < GR && Math.abs(this.cameraDirection.z) < GR && (this.cameraDirection.NRR(0), RR.resetPanVelocity());
            const yR = this.invertRotation ? -this.inverseRotationSpeed : 1,
              tR = this._decideIfNeedsToMove(),
              uR = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.vN(this.rotation), this._deferredPositionUpdate.vN(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.vN(this.rotationQuaternion), tR && this._updatePosition(), uR) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * yR, this._deferredRotationUpdate.y += this.cameraRotation.y * yR, !this.noRotationConstraint) {
                const RR = 1.570796;
                this._deferredRotationUpdate.x > RR && (this._deferredRotationUpdate.x = RR), this._deferredRotationUpdate.x < -RR && (this._deferredRotationUpdate.x = -RR)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.vN(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (ZR.i.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.vN(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.NRR(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : ZR.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return ZR.r.TransformNormalToRef(ZR.r.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), ZR.r.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? iR.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (ZR.i.FromEulerVectorToRef(this.rotation, eR), iR.b.Y.rotateByQuaternionToRef(eR, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(RR, JR, GR) {
            if (this.jH().useRightHandedSystem ? ZR.e.LookAtRHToRef(RR, JR, GR, this._viewMatrix) : ZR.e.LookAtLHToRef(RR, JR, GR, this._viewMatrix), this.parent) {
              const RR = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(RR, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(JR, GR) {
            if (this.cameraRigMode !== uR.b.RIG_MODE_NONE) {
              const GR = new RR(JR, this.position.clone(), this.jH());
              return GR.isRigCamera = !0, GR.rigParent = this, this.cameraRigMode === uR.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new ZR.i), GR._cameraRigParams = {}, GR.rotationQuaternion = new ZR.i), GR.mode = this.mode, GR.orthoLeft = this.orthoLeft, GR.orthoRight = this.orthoRight, GR.orthoTop = this.orthoTop, GR.orthoBottom = this.orthoBottom, GR
            }
            return null
          }
          _updateRigCameras() {
            const RR = this._rigCameras[0],
              JR = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case uR.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case uR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case uR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case uR.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case uR.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const GR = this.cameraRigMode === uR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  yR = this.cameraRigMode === uR.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * GR, RR), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * yR, JR);
                break
              }
              case uR.b.RIG_MODE_VR:
                RR.rotationQuaternion && JR.rotationQuaternion && this.rotationQuaternion ? (RR.rotationQuaternion.vN(this.rotationQuaternion), JR.rotationQuaternion.vN(this.rotationQuaternion)) : (RR.rotation.vN(this.rotation), JR.rotation.vN(this.rotation)), RR.position.vN(this.position), JR.position.vN(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(JR, GR) {
            this.getTarget().subtractToRef(this.position, RR._TargetFocalPoint), RR._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const yR = RR._TargetFocalPoint.addInPlace(this.position);
            ZR.e.TranslationToRef(-yR.x, -yR.y, -yR.z, RR._TargetTransformMatrix), RR._TargetTransformMatrix.multiplyToRef(ZR.e.RotationAxis(GR.upVector, JR), RR._RigCamTransformMatrix), ZR.e.TranslationToRef(yR.x, yR.y, yR.z, RR._TargetTransformMatrix), RR._RigCamTransformMatrix.multiplyToRef(RR._TargetTransformMatrix, RR._RigCamTransformMatrix), ZR.r.TransformCoordinatesToRef(this.position, RR._RigCamTransformMatrix, GR.position), GR.setTarget(yR)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(KR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.G)()], fR = [(0, tR.H)()], VR = [(0, tR.x)("lockedTargetId")], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: RR => "updateUpVectorFromRotation" in RR,
              get: RR => RR.updateUpVectorFromRotation,
              set: (RR, JR) => {
                RR.updateUpVectorFromRotation = JR
              }
            },
            metadata: uR
          }, aR, LR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: RR => "rotation" in RR,
              get: RR => RR.rotation,
              set: (RR, JR) => {
                RR.rotation = JR
              }
            },
            metadata: uR
          }, nR, UR), (0, yR.l)(null, null, fR, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: RR => "speed" in RR,
              get: RR => RR.speed,
              set: (RR, JR) => {
                RR.speed = JR
              }
            },
            metadata: uR
          }, WR, AR), (0, yR.l)(null, null, VR, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: RR => "lockedTarget" in RR,
              get: RR => RR.lockedTarget,
              set: (RR, JR) => {
                RR.lockedTarget = JR
              }
            },
            metadata: uR
          }, CR, XR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR._RigCamTransformMatrix = new ZR.e, RR._TargetTransformMatrix = new ZR.e, RR._TargetFocalPoint = new ZR.r, RR
      })(),
      LR = !1;

    function nR() {
      LR || (LR = !0, fR.d.AddNodeConstructor("TargetCamera", ((RR, JR) => () => new aR(RR, ZR.r.Zero(), JR))))
    }
  },
  41481: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(41418);
    let tR = !1;

    function uR() {
      tR || (tR = !0, yR.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, yR.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, yR.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, yR.c.prototype.getAspectRatio = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = RR.viewport;
        return this.getRenderWidth(JR) * GR.width / (this.getRenderHeight(JR) * GR.height)
      }, yR.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, yR.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41560: (RR, JR, GR) => {
    var yR = GR(41418),
      tR = GR(41564);
    let uR = !1;
    uR || (uR = !0, (0, tR.u)(), yR.c.prototype._loadFileAsync = async function(RR, JR, GR) {
      return await new Promise(((yR, tR) => {
        this._loadFile(RR, (RR => {
          yR(RR)
        }), void 0, JR, GR, ((RR, JR) => {
          tR(JR)
        }))
      }))
    })
  },
  41555: (RR, JR, GR) => {
    (0, GR(41483).c)()
  },
  41483: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    var yR = GR(41418);
    let tR = !1;

    function uR() {
      tR || (tR = !0, yR.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, yR.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, yR.c.prototype.createRenderPassId = function(RR) {
        const JR = ++yR.c._RenderPassIdCounter;
        return this._renderPassNames[JR] = RR ?? "NONAME", JR
      }, yR.c.prototype.releaseRenderPassId = function(RR) {
        this._renderPassNames[RR] = void 0;
        for (let JR = 0; JR < this.scenes.length; ++JR) {
          const GR = this.scenes[JR];
          for (let JR = 0; JR < GR.meshes.length; ++JR) {
            const yR = GR.meshes[JR];
            if (yR._releaseRenderPassId(RR), yR.XM)
              for (let JR = 0; JR < yR.XM.length; ++JR) {
                yR.XM[JR]._removeDrawWrapper(RR)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(RR)
      })
    }
  },
  41600: (RR, JR, GR) => {
    var yR = GR(41607),
      tR = GR(41418);
    let uR = !1;
    uR || (uR = !0, tR.c.GetCompatibleTextureLoader = yR.e)
  },
  41485: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(41375);
    let tR = !1;

    function uR() {
      tR || (tR = !0, yR.ThinEngine.prototype.setAlphaMode = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[GR] === RR) {
          if (!JR) {
            const JR = 0 === RR;
            this.depthCullingState.depthMask !== JR && (this.depthCullingState.depthMask = JR)
          }
          return
        }
        const yR = 0 === RR;
        this._alphaState.setAlphaBlend(!yR, GR), this._alphaState.setAlphaMode(RR, GR), JR || (this.depthCullingState.depthMask = yR), this._alphaMode[GR] = RR
      })
    }
  },
  41497: (RR, JR, GR) => {
    var yR = GR(41364),
      tR = GR(39914),
      uR = GR(41375),
      ZR = GR(41501),
      qR = GR(41466);
    class iR extends ZR.d {
      setDepthStencilTexture(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(RR, JR), !RR) return;
        const GR = this._engine,
          yR = this._context,
          tR = RR._hardwareTexture;
        if (tR && RR._autoMSAAManagement && this._MSAAFramebuffer) {
          const JR = GR._currentFramebuffer;
          GR._bindUnboundFramebuffer(this._MSAAFramebuffer), yR.framebufferRenderbuffer(yR.FRAMEBUFFER, (0, qR.d)(RR.format) ? yR.DEPTH_STENCIL_ATTACHMENT : yR.DEPTH_ATTACHMENT, yR.RENDERBUFFER, tR.getMSAARenderBuffer()), GR._bindUnboundFramebuffer(JR)
        }
      }
      constructor(RR, JR, GR, yR, tR) {
        super(RR, JR, GR, yR), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = tR
      }
      _cloneRenderTargetWrapper() {
        let RR;
        return this._colorTextureArray && this._depthStencilTextureArray ? (RR = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), RR.texture.isReady = !0) : RR = super._cloneRenderTargetWrapper(), RR
      }
      _swapRenderTargetWrapper(RR) {
        super._swapRenderTargetWrapper(RR), RR._framebuffer = this._framebuffer, RR._depthStencilBuffer = this._depthStencilBuffer, RR._MSAAFramebuffer = this._MSAAFramebuffer, RR._colorTextureArray = this._colorTextureArray, RR._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const RR = this._engine,
            JR = RR._currentFramebuffer,
            GR = this._context;
          RR._bindUnboundFramebuffer(this._framebuffer), GR.framebufferRenderbuffer(GR.FRAMEBUFFER, GR.DEPTH_STENCIL_ATTACHMENT, GR.RENDERBUFFER, null), GR.framebufferRenderbuffer(GR.FRAMEBUFFER, GR.DEPTH_ATTACHMENT, GR.RENDERBUFFER, null), GR.framebufferRenderbuffer(GR.FRAMEBUFFER, GR.STENCIL_ATTACHMENT, GR.RENDERBUFFER, null), RR._bindUnboundFramebuffer(JR), GR.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(RR, JR, GR, yR, tR, uR)
      }
      shareDepth(RR) {
        super.shareDepth(RR);
        const JR = this._context,
          GR = this._depthStencilBuffer,
          yR = RR._MSAAFramebuffer || RR._framebuffer,
          tR = this._engine;
        RR._depthStencilBuffer && RR._depthStencilBuffer !== GR && JR.deleteRenderbuffer(RR._depthStencilBuffer), RR._depthStencilBuffer = GR;
        const uR = RR._generateStencilBuffer ? JR.DEPTH_STENCIL_ATTACHMENT : JR.DEPTH_ATTACHMENT;
        tR._bindUnboundFramebuffer(yR), JR.framebufferRenderbuffer(JR.FRAMEBUFFER, uR, JR.RENDERBUFFER, GR), tR._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tR = RR._hardwareTexture;
        if (!tR) return;
        const uR = this._framebuffer,
          ZR = this._engine,
          qR = ZR._currentFramebuffer;
        let iR;
        if (ZR._bindUnboundFramebuffer(uR), ZR.Ma > 1) {
          const uR = this._context;
          iR = uR["COLOR_ATTACHMENT" + JR], RR.is2DArray || RR.is3D ? (GR = GR ?? this.layerIndices?.[JR] ?? 0, uR.framebufferTextureLayer(uR.FRAMEBUFFER, iR, tR.underlyingResource, yR, GR)) : RR.isCube ? (GR = GR ?? this.faceIndices?.[JR] ?? 0, uR.framebufferTexture2D(uR.FRAMEBUFFER, iR, uR.TEXTURE_CUBE_MAP_POSITIVE_X + GR, tR.underlyingResource, yR)) : uR.framebufferTexture2D(uR.FRAMEBUFFER, iR, uR.TEXTURE_2D, tR.underlyingResource, yR)
        } else {
          const RR = this._context;
          iR = RR["COLOR_ATTACHMENT" + JR + "_WEBGL"];
          const uR = void 0 !== GR ? RR.TEXTURE_CUBE_MAP_POSITIVE_X + GR : RR.TEXTURE_2D;
          RR.framebufferTexture2D(RR.FRAMEBUFFER, iR, uR, tR.underlyingResource, yR)
        }
        if (RR._autoMSAAManagement && this._MSAAFramebuffer) {
          const RR = this._context;
          ZR._bindUnboundFramebuffer(this._MSAAFramebuffer), RR.framebufferRenderbuffer(RR.FRAMEBUFFER, iR, RR.RENDERBUFFER, tR.getMSAARenderBuffer())
        }
        ZR._bindUnboundFramebuffer(qR)
      }
      setTexture(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(RR, JR, GR), this._bindTextureRenderTarget(RR, JR)
      }
      setLayerAndFaceIndices(RR, JR) {
        if (super.setLayerAndFaceIndices(RR, JR), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const GR = this._attachments?.length ?? this.textures.length;
        for (let yR = 0; yR < GR; yR++) {
          const RR = this.textures[yR];
          RR && (RR.is2DArray || RR.is3D ? this._bindTextureRenderTarget(RR, yR, this.layerIndices[yR]) : RR.isCube ? this._bindTextureRenderTarget(RR, yR, this.faceIndices[yR]) : this._bindTextureRenderTarget(RR, yR))
        }
      }
      setLayerAndFaceIndex() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(RR, JR, GR), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const yR = this.textures[RR];
        yR.is2DArray || yR.is3D ? this._bindTextureRenderTarget(this.textures[RR], RR, this.layerIndices[RR]) : yR.isCube && this._bindTextureRenderTarget(this.textures[RR], RR, this.faceIndices[RR])
      }
      resolveMSAATextures() {
        const RR = this._engine,
          JR = RR._currentFramebuffer;
        RR._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), RR._bindUnboundFramebuffer(JR)
      }
      dispose() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const JR = this._context;
        RR || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (JR.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (JR.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (JR.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(RR)
      }
    }
    let fR = !1;
    fR || (fR = !0, uR.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(RR, JR, GR) {
      const yR = new iR(RR, JR, GR, this, this._gl);
      return this._renderTargetWrapperCache.push(yR), yR
    }, uR.ThinEngine.prototype.createRenderTargetTexture = function(RR, JR) {
      const GR = this._createHardwareRenderTargetWrapper(!1, !1, RR);
      let yR, tR, uR = !0,
        ZR = !1,
        qR = !1,
        iR = 1;
      void 0 !== JR && "object" === typeof JR && (uR = JR.generateDepthBuffer ?? !0, ZR = !!JR.generateStencilBuffer, qR = !!JR.noColorAttachment, yR = JR.colorAttachment, iR = JR.samples ?? 1, tR = JR.label);
      const fR = yR || (qR ? null : this._createInternalTexture(RR, JR, !0, 5)),
        VR = RR.width || RR,
        KR = RR.height || RR,
        wR = this._currentFramebuffer,
        rR = this._gl,
        eR = rR.createFramebuffer();
      if (this._bindUnboundFramebuffer(eR), GR._depthStencilBuffer = this._setupFramebufferDepthAttachments(ZR, uR, VR, KR), !fR || fR.is2DArray || fR.is3D || rR.framebufferTexture2D(rR.FRAMEBUFFER, rR.COLOR_ATTACHMENT0, rR.TEXTURE_2D, fR._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(wR), GR.label = tR ?? "RenderTargetWrapper", GR._framebuffer = eR, GR._generateDepthBuffer = uR, GR._generateStencilBuffer = ZR, GR.setTextures(fR), yR) {
        if (GR._samples = yR.samples, yR.samples > 1) {
          const RR = yR._hardwareTexture.getMSAARenderBuffer(0);
          GR._MSAAFramebuffer = rR.createFramebuffer(), this._bindUnboundFramebuffer(GR._MSAAFramebuffer), rR.framebufferRenderbuffer(rR.FRAMEBUFFER, rR.COLOR_ATTACHMENT0, rR.RENDERBUFFER, RR), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(GR, iR);
      return GR
    }, uR.ThinEngine.prototype._createDepthStencilTexture = function(RR, JR, GR) {
      const uR = this._gl,
        ZR = RR.layers || 0,
        iR = RR.depth || 0;
      let fR = uR.TEXTURE_2D;
      0 !== ZR ? fR = uR.TEXTURE_2D_ARRAY : 0 !== iR && (fR = uR.TEXTURE_3D);
      const VR = new yR.b(this, 12);
      if (VR.label = JR.label, !this._caps.depthTextureExtension) return tR.c.Error("Depth texture is not supported by your browser or hardware."), VR;
      const KR = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...JR
      };
      if (this._bindTextureDirectly(fR, VR, !0), this._setupDepthStencilTexture(VR, RR, 0 !== KR.comparisonFunction && KR.bilinearFiltering, KR.comparisonFunction, KR.samples), void 0 !== KR.depthTextureFormat) {
        if (15 !== KR.depthTextureFormat && 16 !== KR.depthTextureFormat && 17 !== KR.depthTextureFormat && 13 !== KR.depthTextureFormat && 14 !== KR.depthTextureFormat && 18 !== KR.depthTextureFormat) return tR.c.Error(`Depth texture ${KR.depthTextureFormat} format is not supported.`), VR;
        VR.format = KR.depthTextureFormat
      } else VR.format = KR.generateStencil ? 13 : 16;
      const wR = (0, qR.d)(VR.format),
        rR = this._getWebGLTextureTypeFromDepthTextureFormat(VR.format),
        eR = wR ? uR.DEPTH_STENCIL : uR.DEPTH_COMPONENT,
        aR = this._getInternalFormatFromDepthTextureFormat(VR.format, !0, wR);
      return VR.is2DArray ? uR.texImage3D(fR, 0, aR, VR.width, VR.height, ZR, 0, eR, rR, null) : VR.is3D ? uR.texImage3D(fR, 0, aR, VR.width, VR.height, iR, 0, eR, rR, null) : uR.texImage2D(fR, 0, aR, VR.width, VR.height, 0, eR, rR, null), this._bindTextureDirectly(fR, null), this._internalTexturesCache.push(VR), GR._depthStencilBuffer && (uR.deleteRenderbuffer(GR._depthStencilBuffer), GR._depthStencilBuffer = null), this._bindUnboundFramebuffer(GR._MSAAFramebuffer ?? GR._framebuffer), GR._generateStencilBuffer = wR, GR._depthStencilTextureWithStencil = wR, GR._depthStencilBuffer = this._setupFramebufferDepthAttachments(GR._generateStencilBuffer, GR._generateDepthBuffer, GR.width, GR.height, GR.samples, VR.format), this._bindUnboundFramebuffer(null), VR
    }, uR.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(RR, JR) {
      if (this.Ma < 2 || !RR) return 1;
      if (RR.samples === JR) return JR;
      const GR = this._gl;
      JR = Math.min(JR, this.getCaps().maxMSAASamples), RR._depthStencilBuffer && (GR.deleteRenderbuffer(RR._depthStencilBuffer), RR._depthStencilBuffer = null), RR._MSAAFramebuffer && (GR.deleteFramebuffer(RR._MSAAFramebuffer), RR._MSAAFramebuffer = null);
      const yR = RR.texture?._hardwareTexture;
      if (yR?.releaseMSAARenderBuffers(), RR.texture && JR > 1 && "function" === typeof GR.renderbufferStorageMultisample) {
        const tR = GR.createFramebuffer();
        if (!tR) throw new Error("Unable to create multi sampled framebuffer");
        RR._MSAAFramebuffer = tR, this._bindUnboundFramebuffer(RR._MSAAFramebuffer);
        const uR = this._createRenderBuffer(RR.texture.width, RR.texture.height, JR, -1, this._getRGBABufferInternalSizedFormat(RR.texture.type, RR.texture.format, RR.texture._useSRGBBuffer), GR.COLOR_ATTACHMENT0, !1);
        if (!uR) throw new Error("Unable to create multi sampled framebuffer");
        yR?.addMSAARenderBuffer(uR)
      }
      this._bindUnboundFramebuffer(RR._MSAAFramebuffer ?? RR._framebuffer), RR.texture && (RR.texture.samples = JR), RR._samples = JR;
      const tR = RR._depthStencilTexture ? RR._depthStencilTexture.format : void 0;
      return RR._depthStencilBuffer = this._setupFramebufferDepthAttachments(RR._generateStencilBuffer, RR._generateDepthBuffer, RR.width, RR.height, JR, tR), this._bindUnboundFramebuffer(null), JR
    }, uR.ThinEngine.prototype._setupDepthStencilTexture = function(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const uR = JR.width ?? JR,
        ZR = JR.height ?? JR,
        qR = JR.layers || 0,
        iR = JR.depth || 0;
      RR.baseWidth = uR, RR.baseHeight = ZR, RR.width = uR, RR.height = ZR, RR.is2DArray = qR > 0, RR.depth = qR || iR, RR.isReady = !0, RR.samples = tR, RR.generateMipMaps = !1, RR.samplingMode = GR ? 2 : 1, RR.type = 0, RR._comparisonFunction = yR;
      const fR = this._gl,
        VR = this._getTextureTarget(RR),
        KR = this._getSamplingParameters(RR.samplingMode, !1);
      fR.texParameteri(VR, fR.TEXTURE_MAG_FILTER, KR.mag), fR.texParameteri(VR, fR.TEXTURE_MIN_FILTER, KR.min), fR.texParameteri(VR, fR.TEXTURE_WRAP_S, fR.CLAMP_TO_EDGE), fR.texParameteri(VR, fR.TEXTURE_WRAP_T, fR.CLAMP_TO_EDGE), this.Ma > 1 && (0 === yR ? (fR.texParameteri(VR, fR.TEXTURE_COMPARE_FUNC, 515), fR.texParameteri(VR, fR.TEXTURE_COMPARE_MODE, fR.NONE)) : (fR.texParameteri(VR, fR.TEXTURE_COMPARE_FUNC, yR), fR.texParameteri(VR, fR.TEXTURE_COMPARE_MODE, fR.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41352: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.d
    });
    var yR = GR(41355);
    (0, GR(41485).e)();
    var tR = GR(41375);
    let uR = !1;
    ! function() {
      if (uR) return;
      uR = !0;
      const RR = new WeakMap,
        JR = new WeakMap,
        GR = new WeakMap,
        yR = new WeakMap;
      tR.ThinEngine.prototype.getAlphaToCoverage = function() {
        return RR.get(this) ?? !1
      }, tR.ThinEngine.prototype.setAlphaToCoverage = function(GR) {
        (RR.get(this) !== GR || this._gl && JR.get(this) !== this._gl) && (RR.set(this, GR), this._gl && (GR ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), JR.set(this, this._gl)))
      }, Object.defineProperty(tR.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (yR.get(this) !== this._gl && (GR.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), yR.set(this, this._gl)), GR.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var ZR = GR(41364),
      qR = GR(39914),
      iR = GR(41449);
    let fR = !1;
    ! function() {
      function RR(RR, JR, GR, yR) {
        let tR, uR = 1;
        1 === yR ? tR = new Float32Array(JR * GR * 4) : 2 === yR ? (tR = new Uint16Array(JR * GR * 4), uR = 15360) : tR = 7 === yR ? new Uint32Array(JR * GR * 4) : new Uint8Array(JR * GR * 4);
        for (let ZR = 0; ZR < JR; ZR++)
          for (let yR = 0; yR < GR; yR++) {
            const GR = 3 * (yR * JR + ZR),
              qR = 4 * (yR * JR + ZR);
            tR[qR + 0] = RR[GR + 0], tR[qR + 1] = RR[GR + 1], tR[qR + 2] = RR[GR + 2], tR[qR + 3] = uR
          }
        return tR
      }

      function JR(RR) {
        return function(JR, GR, yR, tR, uR, qR, iR, fR) {
          let VR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            KR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const wR = RR ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            rR = RR ? 10 : 11,
            eR = new ZR.b(this, rR);
          eR.baseWidth = GR, eR.baseHeight = yR, eR.baseDepth = tR, eR.width = GR, eR.height = yR, eR.depth = tR, eR.format = uR, eR.type = KR, eR.generateMipMaps = qR, eR.samplingMode = fR, RR ? eR.is3D = !0 : eR.is2DArray = !0, this._doNotHandleContextLost || (eR._bufferView = JR), RR ? this.updateRawTexture3D(eR, JR, uR, iR, VR, KR) : this.updateRawTexture2DArray(eR, JR, uR, iR, VR, KR), this._bindTextureDirectly(wR, eR, !0);
          const aR = this._getSamplingParameters(fR, qR);
          return this._gl.texParameteri(wR, this._gl.TEXTURE_MAG_FILTER, aR.mag), this._gl.texParameteri(wR, this._gl.TEXTURE_MIN_FILTER, aR.min), qR && this._gl.generateMipmap(wR), this._bindTextureDirectly(wR, null), this._internalTexturesCache.push(eR), eR
        }
      }

      function GR(RR) {
        return function(JR, GR, yR, tR) {
          let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const qR = RR ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            iR = this._getWebGLTextureType(ZR),
            fR = this._getInternalFormat(yR),
            VR = this._getRGBABufferInternalSizedFormat(ZR, yR);
          this._bindTextureDirectly(qR, JR, !0), this._unpackFlipY(void 0 === tR || !!tR), this._doNotHandleContextLost || (JR._bufferView = GR, JR.format = yR, JR.invertY = tR, JR._compression = uR), JR.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), uR && GR ? this._gl.compressedTexImage3D(qR, 0, this.getCaps().s3tc[uR], JR.width, JR.height, JR.depth, 0, GR) : this._gl.texImage3D(qR, 0, VR, JR.width, JR.height, JR.depth, 0, fR, iR, GR), JR.generateMipMaps && this._gl.generateMipmap(qR), this._bindTextureDirectly(qR, null), JR.isReady = !0
        }
      }
      fR || (fR = !0, tR.ThinEngine.prototype.updateRawTexture = function(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!RR) return;
        const qR = this._getRGBABufferInternalSizedFormat(uR, GR, ZR),
          iR = this._getInternalFormat(GR),
          fR = this._getWebGLTextureType(uR);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, RR, !0), this._unpackFlipY(void 0 === yR || !!yR), this._doNotHandleContextLost || (RR._bufferView = JR, RR.format = GR, RR.type = uR, RR.invertY = yR, RR._compression = tR), RR.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), tR && JR ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[tR], RR.width, RR.height, 0, JR) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, qR, RR.width, RR.height, 0, iR, fR, JR), RR.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), RR.isReady = !0
      }, tR.ThinEngine.prototype.createRawTexture = function(RR, JR, GR, yR, tR, uR, qR) {
        let iR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          VR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const KR = new ZR.b(this, 3);
        KR.baseWidth = JR, KR.baseHeight = GR, KR.width = JR, KR.height = GR, KR.format = yR, KR.generateMipMaps = tR, KR.samplingMode = qR, KR.invertY = uR, KR._compression = iR, KR.type = fR, KR._useSRGBBuffer = this._getUseSRGBBuffer(VR, !tR), this._doNotHandleContextLost || (KR._bufferView = RR), this.updateRawTexture(KR, RR, yR, uR, iR, fR, KR._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, KR, !0);
        const wR = this._getSamplingParameters(qR, tR);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, wR.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, wR.min), tR && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(KR), KR
      }, tR.ThinEngine.prototype.createRawCubeTexture = function(RR, JR, GR, yR, tR, uR, fR) {
        let VR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const KR = this._gl,
          wR = new ZR.b(this, 8);
        wR.isCube = !0, wR.format = GR, wR.type = yR, this._doNotHandleContextLost || (wR._bufferViewArray = RR);
        const rR = this._getWebGLTextureType(yR);
        let eR = this._getInternalFormat(GR);
        eR === KR.RGB && (eR = KR.RGBA), rR !== KR.FLOAT || this._caps.textureFloatLinearFiltering ? rR !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? rR !== KR.FLOAT || this._caps.textureFloatRender ? rR !== KR.HALF_FLOAT || this._caps.colorBufferFloat || (tR = !1, qR.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (tR = !1, qR.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (tR = !1, fR = 1, qR.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (tR = !1, fR = 1, qR.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const aR = JR,
          LR = aR;
        wR.width = aR, wR.height = LR, wR.invertY = uR, wR._compression = VR;
        if (!this.needPOTTextures || (0, iR.f)(wR.width) && (0, iR.f)(wR.height) || (tR = !1), RR) this.updateRawCubeTexture(wR, RR, GR, yR, uR, VR);
        else {
          const RR = this._getRGBABufferInternalSizedFormat(yR),
            JR = 0;
          this._bindTextureDirectly(KR.TEXTURE_CUBE_MAP, wR, !0);
          for (let GR = 0; GR < 6; GR++) VR ? KR.compressedTexImage2D(KR.TEXTURE_CUBE_MAP_POSITIVE_X + GR, JR, this.getCaps().s3tc[VR], wR.width, wR.height, 0, void 0) : KR.texImage2D(KR.TEXTURE_CUBE_MAP_POSITIVE_X + GR, JR, RR, wR.width, wR.height, 0, eR, rR, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, wR, !0), RR && tR && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const nR = this._getSamplingParameters(fR, tR);
        return KR.texParameteri(KR.TEXTURE_CUBE_MAP, KR.TEXTURE_MAG_FILTER, nR.mag), KR.texParameteri(KR.TEXTURE_CUBE_MAP, KR.TEXTURE_MIN_FILTER, nR.min), KR.texParameteri(KR.TEXTURE_CUBE_MAP, KR.TEXTURE_WRAP_S, KR.CLAMP_TO_EDGE), KR.texParameteri(KR.TEXTURE_CUBE_MAP, KR.TEXTURE_WRAP_T, KR.CLAMP_TO_EDGE), this._bindTextureDirectly(KR.TEXTURE_CUBE_MAP, null), wR.generateMipMaps = tR, wR.samplingMode = fR, wR.isReady = !0, wR
      }, tR.ThinEngine.prototype.updateRawCubeTexture = function(JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        JR._bufferViewArray = GR, JR.format = yR, JR.type = tR, JR.invertY = uR, JR._compression = ZR;
        const fR = this._gl,
          VR = this._getWebGLTextureType(tR);
        let KR = this._getInternalFormat(yR);
        const wR = this._getRGBABufferInternalSizedFormat(tR);
        let rR = !1;
        KR === fR.RGB && (KR = fR.RGBA, rR = !0), this._bindTextureDirectly(fR.TEXTURE_CUBE_MAP, JR, !0), this._unpackFlipY(void 0 === uR || !!uR), JR.width % 4 !== 0 && fR.pixelStorei(fR.UNPACK_ALIGNMENT, 1);
        for (let iR = 0; iR < 6; iR++) {
          let yR = GR[iR];
          ZR ? fR.compressedTexImage2D(fR.TEXTURE_CUBE_MAP_POSITIVE_X + iR, qR, this.getCaps().s3tc[ZR], JR.width, JR.height, 0, yR) : (rR && (yR = RR(yR, JR.width, JR.height, tR)), fR.texImage2D(fR.TEXTURE_CUBE_MAP_POSITIVE_X + iR, qR, wR, JR.width, JR.height, 0, KR, VR, yR))
        }(!this.needPOTTextures || (0, iR.f)(JR.width) && (0, iR.f)(JR.height)) && JR.generateMipMaps && 0 === qR && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), JR.isReady = !0
      }, tR.ThinEngine.prototype.createRawCubeTextureFromUrl = function(JR, GR, yR, tR, uR, ZR, qR, iR) {
        let fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          KR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          wR = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const rR = this._gl,
          eR = this.createRawCubeTexture(null, yR, tR, uR, !ZR, wR, KR, null);
        GR?.addPendingData(eR), eR.url = JR, eR.isReady = !1, this._internalTexturesCache.push(eR);
        const aR = (RR, JR) => {
            GR?.removePendingData(eR), VR && VR(RR ? RR.status + " " + RR.statusText : "Failed to parse texture data", JR)
          },
          LR = async JR => {
            if (!eR._hardwareTexture) return;
            const yR = qR(JR);
            if (!yR) return;
            const ZR = yR instanceof Promise ? await yR : yR,
              VR = eR.width;
            if (iR) {
              const JR = this._getWebGLTextureType(uR);
              let GR = this._getInternalFormat(tR);
              const yR = this._getRGBABufferInternalSizedFormat(uR);
              let qR = !1;
              GR === rR.RGB && (GR = rR.RGBA, qR = !0), this._bindTextureDirectly(rR.TEXTURE_CUBE_MAP, eR, !0), this._unpackFlipY(!1);
              const fR = iR(ZR);
              for (let tR = 0; tR < fR.length; tR++) {
                const ZR = VR >> tR;
                for (let iR = 0; iR < 6; iR++) {
                  let VR = fR[tR][iR];
                  qR && (VR = RR(VR, ZR, ZR, uR)), rR.texImage2D(iR, tR, yR, ZR, ZR, 0, GR, JR, VR)
                }
              }
              this._bindTextureDirectly(rR.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(eR, ZR, tR, uR, wR);
            eR.isReady = !0, GR?.removePendingData(eR), eR.onLoadedObservable.notifyObservers(eR), eR.onLoadedObservable.clear(), fR && fR()
          };
        return this._loadFile(JR, (RR => {
          LR(RR).catch((RR => {
            aR(void 0, RR)
          }))
        }), void 0, GR?.offlineProvider, !0, aR), eR
      }, tR.ThinEngine.prototype.createRawTexture2DArray = JR(!1), tR.ThinEngine.prototype.createRawTexture3D = JR(!0), tR.ThinEngine.prototype.updateRawTexture2DArray = GR(!1), tR.ThinEngine.prototype.updateRawTexture3D = GR(!0))
    }();
    var VR = GR(41399);
    let KR = !1;
    KR || (KR = !0, tR.ThinEngine.prototype._readTexturePixelsSync = function(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        fR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const KR = this._gl;
      if (!KR) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const RR = KR.createFramebuffer();
        if (!RR) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = RR
      }
      KR.bindFramebuffer(KR.FRAMEBUFFER, this._dummyFramebuffer), yR > -1 && (RR.is2DArray || RR.is3D) ? KR.framebufferTextureLayer(KR.FRAMEBUFFER, KR.COLOR_ATTACHMENT0, RR._hardwareTexture?.underlyingResource, tR, yR) : yR > -1 ? KR.framebufferTexture2D(KR.FRAMEBUFFER, KR.COLOR_ATTACHMENT0, KR.TEXTURE_CUBE_MAP_POSITIVE_X + yR, RR._hardwareTexture?.underlyingResource, tR) : KR.framebufferTexture2D(KR.FRAMEBUFFER, KR.COLOR_ATTACHMENT0, KR.TEXTURE_2D, RR._hardwareTexture?.underlyingResource, tR);
      let wR = void 0 !== RR.type ? this._getWebGLTextureType(RR.type) : KR.UNSIGNED_BYTE;
      return qR ? uR || (uR = (0, VR.m)(RR.type, 4 * JR * GR)) : wR === KR.UNSIGNED_BYTE ? (uR || (uR = new Uint8Array(4 * JR * GR)), wR = KR.UNSIGNED_BYTE) : (uR || (uR = new Float32Array(4 * JR * GR)), wR = KR.FLOAT), ZR && this.flushFramebuffer(), KR.readPixels(iR, fR, JR, GR, KR.RGBA, wR, uR), KR.bindFramebuffer(KR.FRAMEBUFFER, this._currentFramebuffer), uR
    }, tR.ThinEngine.prototype._readTexturePixels = function(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        fR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR))
    }), (0, GR(41491).e)();
    let wR = !1;
    wR || (wR = !0, tR.ThinEngine.prototype._createDepthStencilCubeTexture = function(RR, JR) {
      const GR = new ZR.b(this, 12);
      if (GR.isCube = !0, 1 === this.Ma) return qR.c.Error("Depth cube texture is not supported by WebGL 1."), GR;
      const yR = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...JR
        },
        tR = this._gl;
      this._bindTextureDirectly(tR.TEXTURE_CUBE_MAP, GR, !0), this._setupDepthStencilTexture(GR, RR, yR.bilinearFiltering, yR.comparisonFunction);
      for (let uR = 0; uR < 6; uR++) yR.generateStencil ? tR.texImage2D(tR.TEXTURE_CUBE_MAP_POSITIVE_X + uR, 0, tR.DEPTH24_STENCIL8, RR, RR, 0, tR.DEPTH_STENCIL, tR.UNSIGNED_INT_24_8, null) : tR.texImage2D(tR.TEXTURE_CUBE_MAP_POSITIVE_X + uR, 0, tR.DEPTH_COMPONENT24, RR, RR, 0, tR.DEPTH_COMPONENT, tR.UNSIGNED_INT, null);
      return this._bindTextureDirectly(tR.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(GR), GR
    }, tR.ThinEngine.prototype._setCubeMapTextureParams = function(RR, JR, GR) {
      const yR = this._gl;
      yR.texParameteri(yR.TEXTURE_CUBE_MAP, yR.TEXTURE_MAG_FILTER, yR.LINEAR), yR.texParameteri(yR.TEXTURE_CUBE_MAP, yR.TEXTURE_MIN_FILTER, JR ? yR.LINEAR_MIPMAP_LINEAR : yR.LINEAR), yR.texParameteri(yR.TEXTURE_CUBE_MAP, yR.TEXTURE_WRAP_S, yR.CLAMP_TO_EDGE), yR.texParameteri(yR.TEXTURE_CUBE_MAP, yR.TEXTURE_WRAP_T, yR.CLAMP_TO_EDGE), RR.samplingMode = JR ? 3 : 2, JR && this.getCaps().textureMaxLevel && void 0 !== GR && GR > 0 && (yR.texParameteri(yR.TEXTURE_CUBE_MAP, yR.TEXTURE_MAX_LEVEL, GR), RR._maxLodLevel = GR), this._bindTextureDirectly(yR.TEXTURE_CUBE_MAP, null)
    }, tR.ThinEngine.prototype.createCubeTexture = function(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        ZR = arguments.length > 6 ? arguments[6] : void 0,
        fR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        VR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        KR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        wR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        rR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        eR = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        aR = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const LR = this._gl;
      return this.createCubeTextureBase(RR, JR, GR, !!yR, tR, uR, ZR, fR, VR, KR, wR, rR, (RR => this._bindTextureDirectly(LR.TEXTURE_CUBE_MAP, RR, !0)), ((RR, JR) => {
        const GR = this.needPOTTextures ? (0, iR.e)(JR[0].width, this._caps.maxCubemapTextureSize) : JR[0].width,
          uR = GR,
          fR = [LR.TEXTURE_CUBE_MAP_POSITIVE_X, LR.TEXTURE_CUBE_MAP_POSITIVE_Y, LR.TEXTURE_CUBE_MAP_POSITIVE_Z, LR.TEXTURE_CUBE_MAP_NEGATIVE_X, LR.TEXTURE_CUBE_MAP_NEGATIVE_Y, LR.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(LR.TEXTURE_CUBE_MAP, RR, !0), this._unpackFlipY(!1);
        const VR = ZR ? this._getInternalFormat(ZR, RR._useSRGBBuffer) : RR._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : LR.RGBA;
        let KR = ZR ? this._getInternalFormat(ZR) : LR.RGBA;
        RR._useSRGBBuffer && 1 === this.Ma && (KR = VR);
        for (let yR = 0; yR < fR.length; yR++)
          if (JR[yR].width !== GR || JR[yR].height !== uR) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void qR.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = GR, this._workingCanvas.height = uR, this._workingContext.drawImage(JR[yR], 0, 0, JR[yR].width, JR[yR].height, 0, 0, GR, uR), LR.texImage2D(fR[yR], 0, VR, KR, LR.UNSIGNED_BYTE, this._workingCanvas)
          } else LR.texImage2D(fR[yR], 0, VR, KR, LR.UNSIGNED_BYTE, JR[yR]);
        yR || LR.generateMipmap(LR.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(RR, !yR), RR.width = GR, RR.height = uR, RR.isReady = !0, ZR && (RR.format = ZR), RR.onLoadedObservable.notifyObservers(RR), RR.onLoadedObservable.clear(), tR && tR()
      }), !!eR, aR)
    }, tR.ThinEngine.prototype.generateMipMapsForCubemap = function(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (RR.generateMipMaps) {
        const GR = this._gl;
        this._bindTextureDirectly(GR.TEXTURE_CUBE_MAP, RR, !0), GR.generateMipmap(GR.TEXTURE_CUBE_MAP), JR && this._bindTextureDirectly(GR.TEXTURE_CUBE_MAP, null)
      }
    });
    GR(41497);
    let rR = !1;
    rR || (rR = !0, tR.ThinEngine.prototype.setDepthStencilTexture = function(RR, JR, GR, yR) {
      void 0 !== RR && (JR && (this._boundUniforms[RR] = JR), GR && GR.depthStencilTexture ? this._setTexture(RR, GR, !1, !0, yR) : this._setTexture(RR, null, void 0, void 0, yR))
    });
    let eR = !1;
    eR || (eR = !0, tR.ThinEngine.prototype.createRenderTargetCubeTexture = function(RR, JR) {
      const GR = this._createHardwareRenderTargetWrapper(!1, !0, RR),
        yR = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...JR
        };
      yR.generateStencilBuffer = yR.generateDepthBuffer && yR.generateStencilBuffer, (1 !== yR.type || this._caps.textureFloatLinearFiltering) && (2 !== yR.type || this._caps.textureHalfFloatLinearFiltering) || (yR.samplingMode = 1);
      const tR = this._gl,
        uR = new ZR.b(this, 5);
      this._bindTextureDirectly(tR.TEXTURE_CUBE_MAP, uR, !0);
      const iR = this._getSamplingParameters(yR.samplingMode, yR.generateMipMaps);
      1 !== yR.type || this._caps.textureFloat || (yR.type = 0, qR.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), tR.texParameteri(tR.TEXTURE_CUBE_MAP, tR.TEXTURE_MAG_FILTER, iR.mag), tR.texParameteri(tR.TEXTURE_CUBE_MAP, tR.TEXTURE_MIN_FILTER, iR.min), tR.texParameteri(tR.TEXTURE_CUBE_MAP, tR.TEXTURE_WRAP_S, tR.CLAMP_TO_EDGE), tR.texParameteri(tR.TEXTURE_CUBE_MAP, tR.TEXTURE_WRAP_T, tR.CLAMP_TO_EDGE);
      for (let ZR = 0; ZR < 6; ZR++) tR.texImage2D(tR.TEXTURE_CUBE_MAP_POSITIVE_X + ZR, 0, this._getRGBABufferInternalSizedFormat(yR.type, yR.format), RR, RR, 0, this._getInternalFormat(yR.format), this._getWebGLTextureType(yR.type), null);
      const fR = tR.createFramebuffer();
      return this._bindUnboundFramebuffer(fR), GR._depthStencilBuffer = this._setupFramebufferDepthAttachments(yR.generateStencilBuffer, yR.generateDepthBuffer, RR, RR), yR.generateMipMaps && tR.generateMipmap(tR.TEXTURE_CUBE_MAP), this._bindTextureDirectly(tR.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), GR._framebuffer = fR, GR._generateDepthBuffer = yR.generateDepthBuffer, GR._generateStencilBuffer = yR.generateStencilBuffer, uR.width = RR, uR.height = RR, uR.isReady = !0, uR.isCube = !0, uR.samples = 1, uR.generateMipMaps = yR.generateMipMaps, uR.samplingMode = yR.samplingMode, uR.type = yR.type, uR.format = yR.format, this._internalTexturesCache.push(uR), GR.setTextures(uR), GR
    });
    var aR = GR(41509),
      LR = GR(41514);
    let nR = !1;
    nR || (nR = !0, tR.ThinEngine.prototype.createPrefilteredCubeTexture = function(RR, JR, yR, tR) {
      let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fR = arguments.length > 6 ? arguments[6] : void 0,
        VR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        KR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        wR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(RR, JR, null, !1, (async RR => {
        if (!RR) return void(uR && uR(null));
        const iR = RR.texture;
        if (KR ? RR.info.sphericalPolynomial && (iR._sphericalPolynomial = RR.info.sphericalPolynomial) : iR._sphericalPolynomial = iR._sphericalPolynomial ?? new aR.g, iR._source = 9, this.getCaps().textureLOD) return void(uR && uR(iR));
        const fR = this._gl,
          VR = RR.width;
        if (!VR) return;
        const {
          DDSTools: wR
        } = await GR.e(624).then((() => GR(53792))), rR = [];
        for (let GR = 0; GR < 3; GR++) {
          const uR = 1 - GR / 2,
            KR = tR,
            eR = Math.log2(VR) * yR + tR,
            aR = KR + (eR - KR) * uR,
            nR = Math.round(Math.min(Math.max(aR, 0), eR)),
            UR = new ZR.b(this, 2);
          if (UR.type = iR.type, UR.format = iR.format, UR.width = Math.pow(2, Math.max(Math.log2(VR) - nR, 0)), UR.height = UR.width, UR.isCube = !0, UR._cachedWrapU = 0, UR._cachedWrapV = 0, this._bindTextureDirectly(fR.TEXTURE_CUBE_MAP, UR, !0), UR.samplingMode = 2, fR.texParameteri(fR.TEXTURE_CUBE_MAP, fR.TEXTURE_MAG_FILTER, fR.LINEAR), fR.texParameteri(fR.TEXTURE_CUBE_MAP, fR.TEXTURE_MIN_FILTER, fR.LINEAR), fR.texParameteri(fR.TEXTURE_CUBE_MAP, fR.TEXTURE_WRAP_S, fR.CLAMP_TO_EDGE), fR.texParameteri(fR.TEXTURE_CUBE_MAP, fR.TEXTURE_WRAP_T, fR.CLAMP_TO_EDGE), RR.isDDS) {
            const JR = RR.info,
              GR = RR.data;
            this._unpackFlipY(JR.isCompressed), wR.UploadDDSLevels(this, UR, GR, JR, !0, 6, nR)
          } else qR.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(fR.TEXTURE_CUBE_MAP, null);
          const WR = new LR.c(JR);
          WR._isCube = !0, WR._texture = UR, UR.isReady = !0, rR.push(WR)
        }
        iR._lodTextureHigh = rR[2], iR._lodTextureMid = rR[1], iR._lodTextureLow = rR[0], uR && uR(iR)
      }), iR, fR, VR, KR, yR, tR, null, void 0, !1, wR)
    });
    var UR = GR(41441);
    let WR = !1;
    WR || (WR = !0, tR.ThinEngine.prototype.createUniformBuffer = function(RR, JR) {
      const GR = this._gl.createBuffer();
      if (!GR) throw new Error("Unable to create uniform buffer");
      const yR = new UR.d(GR);
      return this.bindUniformBuffer(yR), RR instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, RR, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(RR), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), yR.references = 1, yR
    }, tR.ThinEngine.prototype.createDynamicUniformBuffer = function(RR, JR) {
      const GR = this._gl.createBuffer();
      if (!GR) throw new Error("Unable to create dynamic uniform buffer");
      const yR = new UR.d(GR);
      return this.bindUniformBuffer(yR), RR instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, RR, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(RR), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), yR.references = 1, yR
    }, tR.ThinEngine.prototype.updateUniformBuffer = function(RR, JR, GR, yR) {
      this.bindUniformBuffer(RR), void 0 === GR && (GR = 0), void 0 === yR ? JR instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, GR, JR) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, GR, new Float32Array(JR)) : JR instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, JR.subarray(GR, GR + yR)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(JR).subarray(GR, GR + yR)), this.bindUniformBuffer(null)
    }, tR.ThinEngine.prototype.bindUniformBuffer = function(RR) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, RR ? RR.underlyingResource : null)
    }, tR.ThinEngine.prototype.bindUniformBufferBase = function(RR, JR, GR) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, JR, RR ? RR.underlyingResource : null)
    }, tR.ThinEngine.prototype.bindUniformBlock = function(RR, JR, GR) {
      const yR = RR.program,
        tR = this._gl.getUniformBlockIndex(yR, JR);
      4294967295 !== tR && this._gl.uniformBlockBinding(yR, tR, GR)
    });
    var AR = GR(41395),
      CR = GR(41418);
    let XR = !1;
    XR || (XR = !0, CR.c.prototype.displayLoadingUI = function() {
      if (!(0, AR.m)()) return;
      const RR = this.loadingScreen;
      RR && RR.displayLoadingUI()
    }, CR.c.prototype.hideLoadingUI = function() {
      if (!(0, AR.m)()) return;
      const RR = this._loadingScreen;
      RR && RR.hideLoadingUI()
    }, Object.defineProperty(CR.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = CR.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(RR) {
        this._loadingScreen = RR
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(CR.c.prototype, "loadingUIText", {
      set: function(RR) {
        this.loadingScreen.loadingUIText = RR
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(CR.c.prototype, "loadingUIBackgroundColor", {
      set: function(RR) {
        this.loadingScreen.loadingUIBackgroundColor = RR
      },
      enumerable: !0,
      configurable: !0
    })), (0, GR(41481).e)();
    let MR = !1;
    MR || (MR = !0, CR.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, CR.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, CR.c.prototype.setDepthFunction = function(RR) {
      this._depthCullingState.depthFunc = RR
    }, CR.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, CR.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, CR.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, CR.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, CR.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, CR.c.prototype.setDepthWrite = function(RR) {
      this._depthCullingState.depthMask = RR
    }, CR.c.prototype.setAlphaConstants = function(RR, JR, GR, yR) {
      this._alphaState.setAlphaBlendConstants(RR, JR, GR, yR)
    }, CR.c.prototype.getAlphaMode = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[RR]
    }, CR.c.prototype.getAlphaEquation = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[RR]
    });
    let BR = !1;
    BR || (BR = !0, CR.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, CR.c.prototype.setStencilBuffer = function(RR) {
      this._stencilState.stencilTest = RR
    }, CR.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, CR.c.prototype.setStencilMask = function(RR) {
      this._stencilState.stencilMask = RR
    }, CR.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, CR.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, CR.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, CR.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, CR.c.prototype.setStencilFunction = function(RR) {
      this._stencilState.stencilFunc = RR
    }, CR.c.prototype.setStencilBackFunction = function(RR) {
      this._stencilState.stencilBackFunc = RR
    }, CR.c.prototype.setStencilFunctionReference = function(RR) {
      this._stencilState.stencilFuncRef = RR
    }, CR.c.prototype.setStencilFunctionMask = function(RR) {
      this._stencilState.stencilFuncMask = RR
    }, CR.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, CR.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, CR.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, CR.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, CR.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, CR.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, CR.c.prototype.setStencilOperationFail = function(RR) {
      this._stencilState.stencilOpStencilFail = RR
    }, CR.c.prototype.setStencilBackOperationFail = function(RR) {
      this._stencilState.stencilBackOpStencilFail = RR
    }, CR.c.prototype.setStencilOperationDepthFail = function(RR) {
      this._stencilState.stencilOpDepthFail = RR
    }, CR.c.prototype.setStencilBackOperationDepthFail = function(RR) {
      this._stencilState.stencilBackOpDepthFail = RR
    }, CR.c.prototype.setStencilOperationPass = function(RR) {
      this._stencilState.stencilOpStencilDepthPass = RR
    }, CR.c.prototype.setStencilBackOperationPass = function(RR) {
      this._stencilState.stencilBackOpStencilDepthPass = RR
    }, CR.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, CR.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    GR(41555);
    let lR = !1;
    lR || (lR = !0, CR.c.prototype.createDepthStencilTexture = function(RR, JR, GR) {
      if (JR.isCube) {
        const GR = RR.width || RR;
        return this._createDepthStencilCubeTexture(GR, JR)
      }
      return this._createDepthStencilTexture(RR, JR, GR)
    });
    GR(41560), GR(41600);
    let pR = !1;
    pR || (pR = !0, tR.ThinEngine.prototype.enableScissor = function(RR, JR, GR, yR) {
      const tR = this._gl;
      tR.enable(tR.SCISSOR_TEST), tR.scissor(RR, JR, GR, yR)
    }, tR.ThinEngine.prototype.disableScissor = function() {
      const RR = this._gl;
      RR.disable(RR.SCISSOR_TEST)
    })
  },
  41355: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => CR
    });
    var yR = GR(41364),
      tR = GR(38224),
      uR = GR(41375),
      ZR = GR(41425);
    class qR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new iR(RR)
      }
      sampleFrame() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const JR = RR - this._lastFrameTimeMs;
            this._rollingFrameTime.add(JR)
          }
          this._lastFrameTimeMs = RR
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
        const RR = this._rollingFrameTime.history(0);
        return 0 === RR ? 0 : 1e3 / RR
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
    class iR {
      constructor(RR) {
        this._samples = new Array(RR), this.reset()
      }
      add(RR) {
        let JR;
        if (this.isSaturated()) {
          const RR = this._samples[this._pos];
          JR = RR - this.average, this.average -= JR / (this._sampleCount - 1), this._m2 -= JR * (RR - this.average)
        } else this._sampleCount++;
        JR = RR - this.average, this.average += JR / this._sampleCount, this._m2 += JR * (RR - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = RR, this._pos++, this._pos %= this._samples.length
      }
      history(RR) {
        if (RR >= this._sampleCount || RR >= this._samples.length) return 0;
        const JR = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(JR - RR)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(RR) {
        const JR = this._samples.length;
        return (RR % JR + JR) % JR
      }
    }
    var fR = GR(41441),
      VR = GR(39914),
      KR = GR(41457),
      wR = GR(41418),
      rR = GR(41395);

    function eR(RR) {
      const JR = function(RR) {
        if (!(0, rR.e)() || !document.body) return null;
        const JR = document.createElement("span");
        JR.textContent = "Hg", JR.style.font = RR;
        const GR = document.createElement("div");
        GR.style.display = "inline-block", GR.style.width = "1px", GR.style.height = "0px", GR.style.verticalAlign = "bottom";
        const yR = document.createElement("div");
        let tR, uR;
        yR.style.whiteSpace = "nowrap", yR.appendChild(JR), yR.appendChild(GR), document.body.appendChild(yR);
        try {
          uR = GR.getBoundingClientRect().top - JR.getBoundingClientRect().top, GR.style.verticalAlign = "baseline", tR = GR.getBoundingClientRect().top - JR.getBoundingClientRect().top
        } finally {
          document.body.removeChild(yR)
        }
        const ZR = {
          ascent: tR,
          height: uR,
          descent: uR - tR
        };
        return aR(ZR) ? ZR : null
      }(RR);
      if (JR) return JR;
      const GR = function(RR) {
        let JR = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? JR = new OffscreenCanvas(64, 64) : (0, rR.e)() && "function" === typeof document.createElement && (JR = document.createElement("canvas"), JR.width = 64, JR.height = 64);
          const GR = JR?.getContext("2d");
          if (!GR) return null;
          GR.font = RR;
          const yR = GR.measureText("Hg"),
            tR = Number(yR.actualBoundingBoxAscent ?? yR.fontBoundingBoxAscent),
            uR = Number(yR.actualBoundingBoxDescent ?? yR.fontBoundingBoxDescent),
            ZR = {
              ascent: tR,
              height: tR + uR,
              descent: uR
            };
          return aR(ZR) ? ZR : null
        } catch {
          return null
        } finally {
          const RR = JR;
          "function" === typeof RR?.dispose && RR.dispose()
        }
      }(RR);
      return GR || function(RR) {
        const JR = Math.max(1, function(RR) {
            const JR = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(RR || ""));
            return JR ? Number(JR[1]) : 16
          }(RR)),
          GR = .8 * JR,
          yR = .2 * JR;
        return {
          ascent: GR,
          height: GR + yR,
          descent: yR
        }
      }(RR)
    }

    function aR(RR) {
      return Number.isFinite(RR.ascent) && Number.isFinite(RR.height) && Number.isFinite(RR.descent) && RR.height > 0
    }

    function LR(RR) {
      if (RR.requestPointerLock) {
        const JR = RR.requestPointerLock();
        JR instanceof Promise ? JR.then((() => {
          RR.focus()
        })).catch((() => {})) : RR.focus()
      }
    }
    var nR = GR(41475),
      UR = GR(41415),
      WR = GR(41481),
      AR = GR(41483);
    class CR extends uR.ThinEngine {
      static get NpmPackage() {
        return wR.c.NpmPackage
      }
      static get Version() {
        return wR.c.Version
      }
      static get Instances() {
        return tR.c.Instances
      }
      static get LastCreatedEngine() {
        return tR.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return tR.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(RR) {
        return wR.c.DefaultLoadingScreenFactory(RR)
      }
      get _supportsHardwareTextureRescaling() {
        return !!CR._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, WR.e)(), (0, AR.c)(), super(RR, JR, GR, yR), this._performanceMonitor = new qR, this._drawCalls = new nR.d, RR && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(RR) {
        super._sharedInit(RR),
          function(RR, JR, GR) {
            RR._onCanvasFocus = () => {
              RR.onCanvasFocusObservable.notifyObservers(RR)
            }, RR._onCanvasBlur = () => {
              RR.onCanvasBlurObservable.notifyObservers(RR)
            }, RR._onCanvasContextMenu = JR => {
              RR.disableContextMenu && JR.preventDefault()
            }, JR.addEventListener("focus", RR._onCanvasFocus), JR.addEventListener("blur", RR._onCanvasBlur), JR.addEventListener("contextmenu", RR._onCanvasContextMenu), RR._onBlur = () => {
              RR.disablePerformanceMonitorInBackground && RR.performanceMonitor.disable(), RR._windowIsBackground = !0
            }, RR._onFocus = () => {
              RR.disablePerformanceMonitorInBackground && RR.performanceMonitor.enable(), RR._windowIsBackground = !1
            }, RR._onCanvasPointerOut = GR => {
              document.elementFromPoint(GR.clientX, GR.clientY) !== JR && RR.onCanvasPointerOutObservable.notifyObservers(GR)
            };
            const yR = RR.getHostWindow();
            yR && "function" === typeof yR.addEventListener && (yR.addEventListener("blur", RR._onBlur), yR.addEventListener("focus", RR._onFocus)), JR.addEventListener("pointerout", RR._onCanvasPointerOut), GR.doNotHandleTouchAction || function(RR) {
              RR && RR.setAttribute && (RR.setAttribute("touch-action", "none"), RR.style.touchAction = "none", RR.style.webkitTapHighlightColor = "transparent")
            }(JR), !wR.c.audioEngine && GR.audioEngine && wR.c.AudioEngineFactory && (wR.c.audioEngine = wR.c.AudioEngineFactory(RR.getRenderingCanvas(), RR.getAudioContext(), RR.getAudioDestination())), (0, rR.e)() && (RR._onFullscreenChange = () => {
              RR.isFullscreen = !!document.fullscreenElement, RR.isFullscreen && RR._pointerLockRequested && JR && LR(JR)
            }, document.addEventListener("fullscreenchange", RR._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", RR._onFullscreenChange, !1), RR._onPointerLockChange = () => {
              RR.isPointerLock = document.pointerLockElement === JR
            }, document.addEventListener("pointerlockchange", RR._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", RR._onPointerLockChange, !1)), RR.enableOfflineSupport = void 0 !== wR.c.OfflineProviderFactory, RR._deterministicLockstep = !!GR.deterministicLockstep, RR._lockstepMaxSteps = GR.lockstepMaxSteps || 0, RR._timeStep = GR.timeStep || 1 / 60
          }(this, RR, this._creationOptions)
      }
      resizeImageBitmap(RR, JR, GR) {
        return function(RR, JR, GR, yR) {
          const tR = RR.createCanvas(GR, yR).getContext("2d");
          if (!tR) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return tR.drawImage(JR, 0, 0), tR.getImageData(0, 0, GR, yR).data
        }(this, RR, JR, GR)
      }
      async _createImageBitmapFromSource(RR, JR) {
        return await async function(RR, JR, GR) {
          return await new Promise(((yR, tR) => {
            const uR = new Image;
            uR.onload = () => {
              uR.decode().then((() => {
                RR.createImageBitmap(uR, GR).then((RR => {
                  yR(RR)
                }))
              }))
            }, uR.onerror = () => {
              tR(`Error loading image ${uR.src}`)
            }, uR.src = JR
          }))
        }(this, RR, JR)
      }
      switchFullscreen(RR) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(RR)
      }
      enterFullscreen(RR) {
        this.isFullscreen || (this._pointerLockRequested = RR, this._renderingCanvas && function(RR) {
          const JR = RR.requestFullscreen || RR.webkitRequestFullscreen;
          JR && JR.call(RR)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const RR = document;
          document.exitFullscreen ? document.exitFullscreen() : RR.webkitCancelFullScreen && RR.webkitCancelFullScreen()
        }()
      }
      setDitheringState(RR) {
        RR ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(RR) {
        RR ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(RR, JR, GR, yR) {
        const tR = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(RR, JR, GR, yR), tR
      }
      scissorClear(RR, JR, GR, yR, tR) {
        this.enableScissor(RR, JR, GR, yR), this.clear(tR, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(RR) {
        const JR = this._gl.getAttachedShaders(RR);
        return JR ? this._gl.getShaderSource(JR[0]) : null
      }
      getFragmentShaderSource(RR) {
        const JR = this._gl.getAttachedShaders(RR);
        return JR ? this._gl.getShaderSource(JR[1]) : null
      }
      set framebufferDimensionsObject(RR) {
        this._framebufferDimensionsObject = RR, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const RR of this.scenes) RR.resetCachedMaterial(), RR._rebuildGeometries();
        for (const RR of this._virtualScenes) RR.resetCachedMaterial(), RR._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(RR) {
        return eR(RR)
      }
      enterPointerlock() {
        this._renderingCanvas && LR(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      yX() {
        this._measureFps(), super.yX()
      }
      _deletePipelineContext(RR) {
        const JR = RR;
        JR && JR.program && JR.transformFeedback && (this.deleteTransformFeedback(JR.transformFeedback), JR.transformFeedback = null), super._deletePipelineContext(RR)
      }
      createShaderProgram(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        tR = tR || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const ZR = super.createShaderProgram(RR, JR, GR, yR, tR, uR);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), ZR
      }
      _createShaderProgram(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const uR = yR.createProgram();
        if (RR.program = uR, !uR) throw new Error("Unable to create program");
        if (yR.attachShader(uR, JR), yR.attachShader(uR, GR), this.Ma > 1 && tR) {
          const JR = this.createTransformFeedback();
          this.bindTransformFeedback(JR), this.setTranformFeedbackVaryings(uR, tR), RR.transformFeedback = JR
        }
        return yR.linkProgram(uR), this.Ma > 1 && tR && this.bindTransformFeedback(null), RR.context = yR, RR.vertexShader = JR, RR.fragmentShader = GR, RR.isParallelCompiled || this._finalizePipelineContext(RR), uR
      }
      _releaseTexture(RR) {
        super._releaseTexture(RR)
      }
      _releaseRenderTargetWrapper(RR) {
        super._releaseRenderTargetWrapper(RR);
        for (const JR of this.scenes) {
          for (const GR of JR.postProcesses) GR._outputTexture === RR && (GR._outputTexture = null);
          for (const GR of JR.cameras)
            for (const JR of GR._postProcesses) JR && JR._outputTexture === RR && (JR._outputTexture = null)
        }
      }
      _rescaleTexture(RR, JR, GR, yR, tR) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const uR = this.createRenderTargetTexture({
          width: JR.width,
          height: JR.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && CR._RescalePostProcessFactory && (this._rescalePostProcess = CR._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const ZR = () => {
              this._rescalePostProcess.onApply = function(JR) {
                JR._bindTexture("textureSampler", RR)
              };
              let ZR = GR;
              ZR || (ZR = this.scenes[this.scenes.length - 1]), ZR.postProcessManager.directRender([this._rescalePostProcess], uR, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, JR, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, yR, 0, 0, JR.width, JR.height, 0), this.unBindFramebuffer(uR), uR.dispose(), tR && tR()
            },
            qR = this._rescalePostProcess.getEffect();
          qR ? qR.executeWhenCompiled(ZR) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((RR => {
            RR.executeWhenCompiled(ZR)
          }))
        }
      }
      wrapWebGLTexture(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ZR = new KR.e(RR, this._gl),
          qR = new yR.b(this, 15, !0);
        return qR._hardwareTexture = ZR, qR.baseWidth = tR, qR.baseHeight = uR, qR.width = tR, qR.height = uR, qR.isReady = !0, qR.useMipMaps = JR, this.updateTextureSamplingMode(GR, qR), qR
      }
      updateWrappedWebGLTexture(RR, JR) {
        if (15 !== RR.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const yR of this._renderTargetWrapperCache)
          if (yR.textures?.includes(RR)) {
            if (yR.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (yR._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } RR._hardwareTexture = new KR.e(JR, this._gl), RR.isReady = !0, RR._cachedCoordinatesMode = null, RR._cachedWrapU = null, RR._cachedWrapV = null, RR._cachedWrapR = null, RR._cachedAnisotropicFilteringLevel = null;
        for (const yR in this._boundTexturesCache) this._boundTexturesCache[yR] === RR && (this._boundTexturesCache[yR] = null);
        this.updateTextureSamplingMode(RR.samplingMode, RR);
        const GR = this._gl;
        for (const yR of this._renderTargetWrapperCache) {
          if (yR.texture !== RR) continue;
          const tR = yR,
            uR = yR.samples,
            ZR = uR > 1;
          tR._framebuffer && GR.deleteFramebuffer(tR._framebuffer), !ZR && tR._depthStencilBuffer && (GR.deleteRenderbuffer(tR._depthStencilBuffer), tR._depthStencilBuffer = null);
          const qR = this._currentFramebuffer,
            iR = GR.createFramebuffer();
          this._bindUnboundFramebuffer(iR), GR.framebufferTexture2D(GR.FRAMEBUFFER, GR.COLOR_ATTACHMENT0, GR.TEXTURE_2D, JR, 0), ZR || (tR._depthStencilBuffer = this._setupFramebufferDepthAttachments(yR._generateStencilBuffer, yR._generateDepthBuffer, yR.width, yR.height)), this._bindUnboundFramebuffer(qR), tR._framebuffer = iR, ZR && (yR._samples = 1, this.updateRenderTargetTextureSampleCount(tR, uR))
        }
      }
      _uploadImageToTexture(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tR = this._gl,
          uR = this._getWebGLTextureType(RR.type),
          ZR = this._getInternalFormat(RR.format),
          qR = this._getRGBABufferInternalSizedFormat(RR.type, ZR),
          iR = RR.isCube ? tR.TEXTURE_CUBE_MAP : tR.TEXTURE_2D;
        this._bindTextureDirectly(iR, RR, !0), this._unpackFlipY(RR.invertY);
        let fR = tR.TEXTURE_2D;
        RR.isCube && (fR = tR.TEXTURE_CUBE_MAP_POSITIVE_X + GR), tR.texImage2D(fR, yR, qR, ZR, uR, JR), this._bindTextureDirectly(iR, null, !0)
      }
      updateTextureComparisonFunction(RR, JR) {
        if (1 === this.Ma) return void VR.c.Error("WebGL 1 does not support texture comparison.");
        const GR = this._gl;
        RR.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, RR, !0), 0 === JR ? (GR.texParameteri(GR.TEXTURE_CUBE_MAP, GR.TEXTURE_COMPARE_FUNC, 515), GR.texParameteri(GR.TEXTURE_CUBE_MAP, GR.TEXTURE_COMPARE_MODE, GR.NONE)) : (GR.texParameteri(GR.TEXTURE_CUBE_MAP, GR.TEXTURE_COMPARE_FUNC, JR), GR.texParameteri(GR.TEXTURE_CUBE_MAP, GR.TEXTURE_COMPARE_MODE, GR.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, RR, !0), 0 === JR ? (GR.texParameteri(GR.TEXTURE_2D, GR.TEXTURE_COMPARE_FUNC, 515), GR.texParameteri(GR.TEXTURE_2D, GR.TEXTURE_COMPARE_MODE, GR.NONE)) : (GR.texParameteri(GR.TEXTURE_2D, GR.TEXTURE_COMPARE_FUNC, JR), GR.texParameteri(GR.TEXTURE_2D, GR.TEXTURE_COMPARE_MODE, GR.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), RR._comparisonFunction = JR
      }
      createInstancesBuffer(RR) {
        const JR = this._gl.createBuffer();
        if (!JR) throw new Error("Unable to create instance buffer");
        const GR = new fR.d(JR);
        return GR.hK = RR, this.bindArrayBuffer(GR), this._gl.bufferData(this._gl.ARRAY_BUFFER, RR, this._gl.DYNAMIC_DRAW), GR.references = 1, GR
      }
      deleteInstancesBuffer(RR) {
        this._gl.deleteBuffer(RR)
      }
      async _clientWaitAsync(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const yR = this._gl;
        return await new Promise(((tR, uR) => {
          (0, UR.g)((() => {
            const GR = yR.clientWaitSync(RR, JR, 0);
            if (GR == yR.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return GR != yR.TIMEOUT_EXPIRED
          }), tR, uR, GR)
        }))
      }
      _readPixelsAsync(RR, JR, GR, yR, tR, uR, ZR) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const qR = this._gl,
          iR = qR.createBuffer();
        qR.bindBuffer(qR.PIXEL_PACK_BUFFER, iR), qR.bufferData(qR.PIXEL_PACK_BUFFER, ZR.byteLength, qR.STREAM_READ), qR.readPixels(RR, JR, GR, yR, tR, uR, 0), qR.bindBuffer(qR.PIXEL_PACK_BUFFER, null);
        const fR = qR.fenceSync(qR.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return fR ? (qR.flush(), this._clientWaitAsync(fR, 0, 10).then((() => (qR.deleteSync(fR), qR.bindBuffer(qR.PIXEL_PACK_BUFFER, iR), qR.getBufferSubData(qR.PIXEL_PACK_BUFFER, 0, ZR), qR.bindBuffer(qR.PIXEL_PACK_BUFFER, null), qR.deleteBuffer(iR), ZR)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(RR, JR) {
            1 === tR.c.Instances.length && wR.c.audioEngine && (wR.c.audioEngine.dispose(), wR.c.audioEngine = null);
            const GR = RR.getHostWindow();
            GR && "function" === typeof GR.removeEventListener && (GR.removeEventListener("blur", RR._onBlur), GR.removeEventListener("focus", RR._onFocus)), JR && (JR.removeEventListener("focus", RR._onCanvasFocus), JR.removeEventListener("blur", RR._onCanvasBlur), JR.removeEventListener("pointerout", RR._onCanvasPointerOut), JR.removeEventListener("contextmenu", RR._onCanvasContextMenu)), (0, rR.e)() && (document.removeEventListener("fullscreenchange", RR._onFullscreenChange), document.removeEventListener("mozfullscreenchange", RR._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", RR._onFullscreenChange), document.removeEventListener("msfullscreenchange", RR._onFullscreenChange), document.removeEventListener("pointerlockchange", RR._onPointerLockChange), document.removeEventListener("mspointerlockchange", RR._onPointerLockChange), document.removeEventListener("mozpointerlockchange", RR._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", RR._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    CR.ALPHA_DISABLE = 0, CR.ALPHA_ADD = 1, CR.ALPHA_COMBINE = 2, CR.ALPHA_SUBTRACT = 3, CR.ALPHA_MULTIPLY = 4, CR.ALPHA_MAXIMIZED = 5, CR.ALPHA_ONEONE = 6, CR.ALPHA_PREMULTIPLIED = 7, CR.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, CR.ALPHA_INTERPOLATE = 9, CR.ALPHA_SCREENMODE = 10, CR.DELAYLOADSTATE_NONE = 0, CR.DELAYLOADSTATE_LOADED = 1, CR.DELAYLOADSTATE_LOADING = 2, CR.DELAYLOADSTATE_NOTLOADED = 4, CR.NEVER = 512, CR.ALWAYS = 519, CR.LESS = 513, CR.EQUAL = 514, CR.LEQUAL = 515, CR.GREATER = 516, CR.GEQUAL = 518, CR.NOTEQUAL = 517, CR.KEEP = 7680, CR.REPLACE = 7681, CR.INCR = 7682, CR.DECR = 7683, CR.INVERT = 5386, CR.INCR_WRAP = 34055, CR.DECR_WRAP = 34056, CR.TEXTURE_CLAMP_ADDRESSMODE = 0, CR.TEXTURE_WRAP_ADDRESSMODE = 1, CR.TEXTURE_MIRROR_ADDRESSMODE = 2, CR.TEXTUREFORMAT_ALPHA = 0, CR.TEXTUREFORMAT_LUMINANCE = 1, CR.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, CR.TEXTUREFORMAT_RGB = 4, CR.TEXTUREFORMAT_RGBA = 5, CR.TEXTUREFORMAT_RED = 6, CR.TEXTUREFORMAT_R = 6, CR.TEXTUREFORMAT_R16_UNORM = 33322, CR.TEXTUREFORMAT_RG16_UNORM = 33324, CR.TEXTUREFORMAT_RGB16_UNORM = 32852, CR.TEXTUREFORMAT_RGBA16_UNORM = 32859, CR.TEXTUREFORMAT_R16_SNORM = 36760, CR.TEXTUREFORMAT_RG16_SNORM = 36761, CR.TEXTUREFORMAT_RGB16_SNORM = 36762, CR.TEXTUREFORMAT_RGBA16_SNORM = 36763, CR.TEXTUREFORMAT_RG = 7, CR.TEXTUREFORMAT_RED_INTEGER = 8, CR.TEXTUREFORMAT_R_INTEGER = 8, CR.TEXTUREFORMAT_RG_INTEGER = 9, CR.TEXTUREFORMAT_RGB_INTEGER = 10, CR.TEXTUREFORMAT_RGBA_INTEGER = 11, CR.TEXTURETYPE_UNSIGNED_BYTE = 0, CR.TEXTURETYPE_UNSIGNED_INT = 0, CR.TEXTURETYPE_FLOAT = 1, CR.TEXTURETYPE_HALF_FLOAT = 2, CR.TEXTURETYPE_BYTE = 3, CR.TEXTURETYPE_SHORT = 4, CR.TEXTURETYPE_UNSIGNED_SHORT = 5, CR.TEXTURETYPE_INT = 6, CR.TEXTURETYPE_UNSIGNED_INTEGER = 7, CR.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, CR.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, CR.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, CR.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, CR.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, CR.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, CR.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, CR.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, CR.TEXTURE_NEAREST_SAMPLINGMODE = 1, CR.TEXTURE_BILINEAR_SAMPLINGMODE = 2, CR.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, CR.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, CR.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, CR.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, CR.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, CR.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, CR.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, CR.TEXTURE_NEAREST_LINEAR = 7, CR.TEXTURE_NEAREST_NEAREST = 1, CR.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, CR.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, CR.TEXTURE_LINEAR_LINEAR = 2, CR.TEXTURE_LINEAR_NEAREST = 12, CR.TEXTURE_EXPLICIT_MODE = 0, CR.TEXTURE_SPHERICAL_MODE = 1, CR.TEXTURE_PLANAR_MODE = 2, CR.TEXTURE_CUBIC_MODE = 3, CR.TEXTURE_PROJECTION_MODE = 4, CR.TEXTURE_SKYBOX_MODE = 5, CR.TEXTURE_INVCUBIC_MODE = 6, CR.TEXTURE_EQUIRECTANGULAR_MODE = 7, CR.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, CR.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, CR.SCALEMODE_FLOOR = 1, CR.SCALEMODE_NEAREST = 2, CR.SCALEMODE_CEILING = 3
  },
  41501: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(41466);
    class tR {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(RR) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = RR, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, RR && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, yR.d)(RR.format))
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
      getBaseArrayLayer(RR) {
        if (!this._textures) return -1;
        const JR = this._textures[RR],
          GR = this._layerIndices?.[RR] ?? 0,
          yR = this._faceIndices?.[RR] ?? 0;
        return JR.isCube ? 6 * GR + yR : JR.is3D ? 0 : GR
      }
      get samples() {
        return this._samples
      }
      setSamples(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === RR && !GR) return RR;
        const yR = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, RR, JR) : this._engine.updateRenderTargetTextureSampleCount(this, RR);
        return this._samples = RR, yR
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(RR, JR, GR, yR, tR) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = RR, this._isCube = JR, this._size = GR, this._engine = yR, this._depthStencilTexture = null, this.label = tR
      }
      setTextures(RR) {
        Array.isArray(RR) ? this._textures = RR : this._textures = RR ? [RR] : null
      }
      setTexture(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[JR] !== RR && (this._textures[JR] && GR && this._textures[JR].dispose(), this._textures[JR] = RR)
      }
      setLayerAndFaceIndices(RR, JR) {
        this._layerIndices = RR, this._faceIndices = JR
      }
      setLayerAndFaceIndex() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== JR && JR >= 0 && (this._layerIndices[RR] = JR), void 0 !== GR && GR >= 0 && (this._faceIndices[RR] = GR)
      }
      createDepthStencilTexture() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = GR, this._depthStencilTextureLabel = uR, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: JR,
          comparisonFunction: RR,
          generateStencil: GR,
          isCube: this._isCube,
          samples: yR,
          depthTextureFormat: tR,
          label: uR
        }, this), this._depthStencilTexture
      }
      _shareDepth(RR) {
        this.shareDepth(RR)
      }
      shareDepth(RR) {
        this._depthStencilTexture && (RR._depthStencilTexture && RR._depthStencilTexture.dispose(), RR._depthStencilTexture = this._depthStencilTexture, RR._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(RR) {
        this.texture && this.texture._swapAndDie(RR), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let RR = null;
        if (this._isMulti) {
          const JR = this.textures;
          if (JR && JR.length > 0) {
            let GR = !1,
              yR = JR.length,
              tR = -1;
            const uR = JR[JR.length - 1]._source;
            14 !== uR && 12 !== uR || (GR = !0, tR = JR[JR.length - 1].format, yR--);
            const ZR = [],
              qR = [],
              iR = [],
              fR = [],
              VR = [],
              KR = [],
              wR = [],
              rR = {};
            for (let RR = 0; RR < yR; ++RR) {
              const GR = JR[RR];
              ZR.push(GR.samplingMode), qR.push(GR.type), iR.push(GR.format);
              void 0 !== rR[GR.uniqueId] ? (fR.push(-1), wR.push(0)) : (rR[GR.uniqueId] = RR, GR.is2DArray ? (fR.push(35866), wR.push(GR.depth)) : GR.isCube ? (fR.push(34067), wR.push(0)) : GR.is3D ? (fR.push(32879), wR.push(GR.depth)) : (fR.push(3553), wR.push(0))), this._faceIndices && VR.push(this._faceIndices[RR] ?? 0), this._layerIndices && KR.push(this._layerIndices[RR] ?? 0)
            }
            const eR = {
                samplingModes: ZR,
                generateMipMaps: JR[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: GR,
                depthTextureFormat: tR,
                types: qR,
                formats: iR,
                hqR: yR,
                targetTypes: fR,
                faceIndex: VR,
                layerIndex: KR,
                layerCounts: wR,
                label: this.label
              },
              aR = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            RR = this._engine.createMultipleRenderTarget(aR, eR);
            for (let LR = 0; LR < yR; ++LR) {
              if (-1 !== fR[LR]) continue;
              const GR = rR[JR[LR].uniqueId];
              RR.setTexture(RR.textures[GR], LR)
            }
          }
        } else {
          const JR = {};
          if (JR.generateDepthBuffer = this._generateDepthBuffer, JR.generateMipMaps = this.texture?.generateMipMaps ?? !1, JR.generateStencilBuffer = this._generateStencilBuffer, JR.samplingMode = this.texture?.samplingMode, JR.type = this.texture?.type, JR.format = this.texture?.format, JR.noColorAttachment = !this._textures, JR.label = this.label, this.isCube) RR = this._engine.createRenderTargetCubeTexture(this.width, JR);
          else {
            const GR = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            RR = this._engine.createRenderTargetTexture(GR, JR)
          }
          RR.texture && (RR.texture.isReady = !0)
        }
        return RR
      }
      _swapRenderTargetWrapper(RR) {
        if (this._textures && RR._textures)
          for (let JR = 0; JR < this._textures.length; ++JR) this._textures[JR]._swapAndDie(RR._textures[JR], !1), RR._textures[JR].isReady = !0;
        this._depthStencilTexture && RR._depthStencilTexture && (this._depthStencilTexture._swapAndDie(RR._depthStencilTexture), RR._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const RR = this._cloneRenderTargetWrapper();
        if (RR) {
          if (this._depthStencilTexture) {
            const JR = this._depthStencilTexture.samplingMode,
              GR = this._depthStencilTexture.format,
              yR = 2 === JR || 3 === JR || 11 === JR;
            RR.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, yR, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, GR, this._depthStencilTextureLabel)
          }
          this.samples > 1 && RR.setSamples(this.samples), RR._swapRenderTargetWrapper(this), RR.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let RR = 0; RR < this._textures.length; ++RR) this._textures[RR].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41963: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static get ForceFullSceneLoadingForIncremental() {
        return yR._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(RR) {
        yR._ForceFullSceneLoadingForIncremental = RR
      }
      static get ShowLoadingScreen() {
        return yR._ShowLoadingScreen
      }
      static set ShowLoadingScreen(RR) {
        yR._ShowLoadingScreen = RR
      }
      static get loggingLevel() {
        return yR._LoggingLevel
      }
      static set loggingLevel(RR) {
        yR._LoggingLevel = RR
      }
      static get CleanBoneMatrixWeights() {
        return yR._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(RR) {
        yR._CleanBoneMatrixWeights = RR
      }
    }
    yR._ForceFullSceneLoadingForIncremental = !1, yR._ShowLoadingScreen = !0, yR._CleanBoneMatrixWeights = !1, yR._LoggingLevel = 0
  },
  41607: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(39914);
    const tR = new Map;

    function uR(RR, JR) {
      (function(RR) {
        return tR.delete(RR)
      })(RR) && yR.c.Warn(`Extension with the name '${RR}' already exists`), tR.set(RR, JR)
    }

    function ZR(RR, JR) {
      "image/ktx" !== JR && "image/ktx2" !== JR || (RR = ".ktx"), tR.has(RR) || (RR.endsWith(".ies") && uR(".ies", (async () => await GR.e(627).then((() => GR(53803))).then((RR => new RR._IESTextureLoader)))), RR.endsWith(".dds") && uR(".dds", (async () => await GR.e(625).then((() => GR(53808))).then((RR => new RR._DDSTextureLoader)))), RR.endsWith(".basis") && uR(".basis", (async () => await GR.e(628).then((() => GR(53811))).then((RR => new RR._BasisTextureLoader)))), RR.endsWith(".env") && uR(".env", (async () => await Promise.all([GR.e(629), GR.e(626)]).then((() => GR(53817))).then((RR => new RR._ENVTextureLoader)))), RR.endsWith(".hdr") && uR(".hdr", (async () => await GR.e(630).then((() => GR(53869))).then((RR => new RR._HDRTextureLoader)))), (RR.endsWith(".ktx") || RR.endsWith(".ktx2")) && (uR(".ktx", (async () => await GR.e(631).then((() => GR(53878))).then((RR => new RR._KTXTextureLoader)))), uR(".ktx2", (async () => await GR.e(631).then((() => GR(53878))).then((RR => new RR._KTXTextureLoader))))), RR.endsWith(".tga") && uR(".tga", (async () => await GR.e(632).then((() => GR(53891))).then((RR => new RR._TGATextureLoader)))), RR.endsWith(".exr") && uR(".exr", (async () => await GR.e(633).then((() => GR(53897))).then((RR => new RR._ExrTextureLoader)))));
      const yR = tR.get(RR);
      return yR ? Promise.resolve(yR(JR)) : null
    }
  },
  41982: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      g: () => fR
    });
    var yR = GR(41810),
      tR = GR(41547),
      uR = GR(38253);
    class ZR extends yR.d {
      get ZJR() {
        return this._subMaterials
      }
      set ZJR(RR) {
        this._subMaterials = RR, this._hookArray(RR)
      }
      getChildren() {
        return this.ZJR
      }
      constructor(RR, JR) {
        super(RR, JR, !0), this._waitingSubMaterialsUniqueIds = [], this.jH().addMultiMaterial(this), this.ZJR = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(RR) {
        var JR = this;
        const GR = RR.push;
        RR.push = function() {
          for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
          const ZR = GR.apply(RR, tR);
          return JR._markAllSubMeshesAsTexturesDirty(), ZR
        };
        const yR = RR.splice;
        RR.splice = (JR, GR) => {
          const tR = yR.call(RR, JR, GR ?? RR.length);
          return this._markAllSubMeshesAsTexturesDirty(), tR
        }
      }
      getSubMaterial(RR) {
        return RR < 0 || RR >= this.ZJR.length ? this.jH().defaultMaterial : this.ZJR[RR]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.ZJR.map((RR => RR ? RR.getActiveTextures() : [])))
      }
      hasTexture(RR) {
        if (super.hasTexture(RR)) return !0;
        for (let JR = 0; JR < this.ZJR.length; JR++)
          if (this.ZJR[JR]?.hasTexture(RR)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(RR, JR, GR) {
        for (let yR = 0; yR < this.ZJR.length; yR++) {
          const tR = this.ZJR[yR];
          if (tR) {
            if (tR._storeEffectOnSubMeshes) {
              if (!tR.isReadyForSubMesh(RR, JR, GR)) return !1;
              continue
            }
            if (!tR.isReady(RR)) return !1
          }
        }
        return !0
      }
      clone(RR, JR) {
        const GR = new ZR(RR, this.jH());
        for (let yR = 0; yR < this.ZJR.length; yR++) {
          let tR;
          const uR = this.ZJR[yR];
          tR = JR && uR ? uR.clone(RR + "-" + uR.name) : this.ZJR[yR], GR.ZJR.push(tR)
        }
        return GR
      }
      serialize() {
        const RR = {};
        RR.name = this.name, RR.id = this.id, RR.uniqueId = this.uniqueId, tR.d && (RR.tags = tR.d.GetTags(this)), RR.materialsUniqueIds = [], RR.materials = [];
        for (let JR = 0; JR < this.ZJR.length; JR++) {
          const GR = this.ZJR[JR];
          GR ? (RR.materialsUniqueIds.push(GR.uniqueId), RR.materials.push(GR.id)) : (RR.materialsUniqueIds.push(null), RR.materials.push(null))
        }
        return RR
      }
      dispose(RR, JR, GR) {
        const yR = this.jH();
        if (!yR) return;
        if (GR)
          for (let uR = 0; uR < this.ZJR.length; uR++) {
            const GR = this.ZJR[uR];
            GR && GR.dispose(RR, JR)
          }
        const tR = yR.multiMaterials.indexOf(this);
        tR >= 0 && yR.multiMaterials.splice(tR, 1), super.dispose(RR, JR)
      }
    }
    let qR = !1;

    function iR(RR, JR) {
      const GR = new ZR(RR.name, JR);
      if (GR.id = RR.id, GR._loadedUniqueId = RR.uniqueId, tR.d && tR.d.AddTagsTo(GR, RR.tags), RR.materialsUniqueIds) GR._waitingSubMaterialsUniqueIds = RR.materialsUniqueIds;
      else
        for (const yR of RR.materials) GR.ZJR.push(JR.getLastMaterialById(yR));
      return GR
    }

    function fR() {
      qR || (qR = !0, ZR.ParseMultiMaterial = iR, (0, uR.f)("BABYLON.MultiMaterial", ZR))
    }
  },
  41744: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR, tR, uR = GR(38204);
    ! function(RR) {
      RR[RR.LOCAL = 0] = "LOCAL", RR[RR.WORLD = 1] = "WORLD", RR[RR.BONE = 2] = "BONE"
    }(yR || (yR = {}));
    class ZR {}
    ZR.X = new uR.r(1, 0, 0), ZR.Y = new uR.r(0, 1, 0), ZR.Z = new uR.r(0, 0, 1),
      function(RR) {
        RR[RR.X = 0] = "X", RR[RR.Y = 1] = "Y", RR[RR.Z = 2] = "Z"
      }(tR || (tR = {}))
  },
  41509: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => iR,
      g: () => fR
    });
    var yR = GR(38204);
    const tR = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      uR = [() => 1, RR => RR.y, RR => RR.z, RR => RR.x, RR => RR.x * RR.y, RR => RR.y * RR.z, RR => 3 * RR.z * RR.z - 1, RR => RR.x * RR.z, RR => RR.x * RR.x - RR.y * RR.y],
      ZR = (RR, JR) => tR[RR] * uR[RR](JR),
      qR = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class iR {
      constructor() {
        this.preScaled = !1, this.l00 = yR.r.Zero(), this.l1_1 = yR.r.Zero(), this.l10 = yR.r.Zero(), this.l11 = yR.r.Zero(), this.l2_2 = yR.r.Zero(), this.l2_1 = yR.r.Zero(), this.l20 = yR.r.Zero(), this.l21 = yR.r.Zero(), this.l22 = yR.r.Zero()
      }
      addLight(RR, JR, GR) {
        yR.l.Fe[0].set(JR.r, JR.g, JR.b);
        const tR = yR.l.Fe[0],
          uR = yR.l.Fe[1];
        tR.scaleToRef(GR, uR), uR.scaleToRef(ZR(0, RR), yR.l.Fe[2]), this.l00.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(1, RR), yR.l.Fe[2]), this.l1_1.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(2, RR), yR.l.Fe[2]), this.l10.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(3, RR), yR.l.Fe[2]), this.l11.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(4, RR), yR.l.Fe[2]), this.l2_2.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(5, RR), yR.l.Fe[2]), this.l2_1.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(6, RR), yR.l.Fe[2]), this.l20.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(7, RR), yR.l.Fe[2]), this.l21.addInPlace(yR.l.Fe[2]), uR.scaleToRef(ZR(8, RR), yR.l.Fe[2]), this.l22.addInPlace(yR.l.Fe[2])
      }
      scaleInPlace(RR) {
        this.l00.scaleInPlace(RR), this.l1_1.scaleInPlace(RR), this.l10.scaleInPlace(RR), this.l11.scaleInPlace(RR), this.l2_2.scaleInPlace(RR), this.l2_1.scaleInPlace(RR), this.l20.scaleInPlace(RR), this.l21.scaleInPlace(RR), this.l22.scaleInPlace(RR)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(qR[0]), this.l1_1.scaleInPlace(qR[1]), this.l10.scaleInPlace(qR[2]), this.l11.scaleInPlace(qR[3]), this.l2_2.scaleInPlace(qR[4]), this.l2_1.scaleInPlace(qR[5]), this.l20.scaleInPlace(qR[6]), this.l21.scaleInPlace(qR[7]), this.l22.scaleInPlace(qR[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(tR[0]), this.l1_1.scaleInPlace(tR[1]), this.l10.scaleInPlace(tR[2]), this.l11.scaleInPlace(tR[3]), this.l2_2.scaleInPlace(tR[4]), this.l2_1.scaleInPlace(tR[5]), this.l20.scaleInPlace(tR[6]), this.l21.scaleInPlace(tR[7]), this.l22.scaleInPlace(tR[8])
      }
      updateFromArray(RR) {
        return yR.r.FromArrayToRef(RR[0], 0, this.l00), yR.r.FromArrayToRef(RR[1], 0, this.l1_1), yR.r.FromArrayToRef(RR[2], 0, this.l10), yR.r.FromArrayToRef(RR[3], 0, this.l11), yR.r.FromArrayToRef(RR[4], 0, this.l2_2), yR.r.FromArrayToRef(RR[5], 0, this.l2_1), yR.r.FromArrayToRef(RR[6], 0, this.l20), yR.r.FromArrayToRef(RR[7], 0, this.l21), yR.r.FromArrayToRef(RR[8], 0, this.l22), this
      }
      updateFromFloatsArray(RR) {
        return yR.r.FromFloatsToRef(RR[0], RR[1], RR[2], this.l00), yR.r.FromFloatsToRef(RR[3], RR[4], RR[5], this.l1_1), yR.r.FromFloatsToRef(RR[6], RR[7], RR[8], this.l10), yR.r.FromFloatsToRef(RR[9], RR[10], RR[11], this.l11), yR.r.FromFloatsToRef(RR[12], RR[13], RR[14], this.l2_2), yR.r.FromFloatsToRef(RR[15], RR[16], RR[17], this.l2_1), yR.r.FromFloatsToRef(RR[18], RR[19], RR[20], this.l20), yR.r.FromFloatsToRef(RR[21], RR[22], RR[23], this.l21), yR.r.FromFloatsToRef(RR[24], RR[25], RR[26], this.l22), this
      }
      static FromArray(RR) {
        return (new iR).updateFromArray(RR)
      }
      static FromPolynomial(RR) {
        const JR = new iR;
        return JR.l00 = RR.xx.scale(.376127).add(RR.yy.scale(.376127)).add(RR.zz.scale(.376126)), JR.l1_1 = RR.y.scale(.977204), JR.l10 = RR.z.scale(.977204), JR.l11 = RR.x.scale(.977204), JR.l2_2 = RR.xy.scale(1.16538), JR.l2_1 = RR.yz.scale(1.16538), JR.l20 = RR.zz.scale(1.34567).subtract(RR.xx.scale(.672834)).subtract(RR.yy.scale(.672834)), JR.l21 = RR.zx.scale(1.16538), JR.l22 = RR.xx.scale(1.16538).subtract(RR.yy.scale(1.16538)), JR.l1_1.scaleInPlace(-1), JR.l11.scaleInPlace(-1), JR.l2_1.scaleInPlace(-1), JR.l21.scaleInPlace(-1), JR.scaleInPlace(Math.PI), JR
      }
    }
    class fR {
      constructor() {
        this.x = yR.r.Zero(), this.y = yR.r.Zero(), this.z = yR.r.Zero(), this.xx = yR.r.Zero(), this.yy = yR.r.Zero(), this.zz = yR.r.Zero(), this.xy = yR.r.Zero(), this.yz = yR.r.Zero(), this.zx = yR.r.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = iR.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(RR) {
        yR.l.Fe[0].VJR(RR.r, RR.g, RR.b);
        const JR = yR.l.Fe[0];
        this.xx.addInPlace(JR), this.yy.addInPlace(JR), this.zz.addInPlace(JR)
      }
      scaleInPlace(RR) {
        this.x.scaleInPlace(RR), this.y.scaleInPlace(RR), this.z.scaleInPlace(RR), this.xx.scaleInPlace(RR), this.yy.scaleInPlace(RR), this.zz.scaleInPlace(RR), this.yz.scaleInPlace(RR), this.zx.scaleInPlace(RR), this.xy.scaleInPlace(RR)
      }
      updateFromHarmonics(RR) {
        return this._harmonics = RR, this.x.vN(RR.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.vN(RR.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.vN(RR.l10), this.z.scaleInPlace(1.02333), this.xx.vN(RR.l00), yR.l.Fe[0].vN(RR.l20).scaleInPlace(.247708), yR.l.Fe[1].vN(RR.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).VuR(yR.l.Fe[0]).addInPlace(yR.l.Fe[1]), this.yy.vN(RR.l00), this.yy.scaleInPlace(.886277).VuR(yR.l.Fe[0]).VuR(yR.l.Fe[1]), this.zz.vN(RR.l00), yR.l.Fe[0].vN(RR.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(yR.l.Fe[0]), this.yz.vN(RR.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.vN(RR.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.vN(RR.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(RR) {
        return (new fR).updateFromHarmonics(RR)
      }
      static FromArray(RR) {
        const JR = new fR;
        return yR.r.FromArrayToRef(RR[0], 0, JR.x), yR.r.FromArrayToRef(RR[1], 0, JR.y), yR.r.FromArrayToRef(RR[2], 0, JR.z), yR.r.FromArrayToRef(RR[3], 0, JR.xx), yR.r.FromArrayToRef(RR[4], 0, JR.yy), yR.r.FromArrayToRef(RR[5], 0, JR.zz), yR.r.FromArrayToRef(RR[6], 0, JR.yz), yR.r.FromArrayToRef(RR[7], 0, JR.zx), yR.r.FromArrayToRef(RR[8], 0, JR.xy), JR
      }
    }
  },
  41974: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => xR,
      e: () => DR
    });
    var yR = GR(41520),
      tR = GR(38233),
      uR = GR(38204),
      ZR = GR(41663),
      qR = GR(41951),
      iR = GR(41979),
      fR = GR(41659),
      VR = GR(41822),
      KR = GR(41650);
    class wR {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new uR.r(0, 0, 0), this._diffPositionForCollisions = new uR.r(0, 0, 0), this._collisionResponse = !0
      }
    }
    var rR, eR, aR, LR = GR(41407),
      nR = GR(41594),
      UR = GR(41835),
      WR = GR(38331),
      AR = GR(38213),
      CR = GR(41744),
      XR = GR(39914),
      MR = GR(41524),
      BR = GR(41418),
      lR = GR(38253);

    function pR(RR, JR) {
      return RR - Math.floor(RR / JR) * JR
    }

    function gR(RR, JR, GR) {
      RR instanceof Float32Array ? uR.e.FromArrayToRef(RR, JR, GR) : GR.VJR((0, nR.e)(RR[JR]), (0, nR.e)(RR[JR + 1]), (0, nR.e)(RR[JR + 2]), (0, nR.e)(RR[JR + 3]), (0, nR.e)(RR[JR + 4]), (0, nR.e)(RR[JR + 5]), (0, nR.e)(RR[JR + 6]), (0, nR.e)(RR[JR + 7]), (0, nR.e)(RR[JR + 8]), (0, nR.e)(RR[JR + 9]), (0, nR.e)(RR[JR + 10]), (0, nR.e)(RR[JR + 11]), (0, nR.e)(RR[JR + 12]), (0, nR.e)(RR[JR + 13]), (0, nR.e)(RR[JR + 14]), (0, nR.e)(RR[JR + 15]))
    }

    function bR(RR, JR, GR, yR, tR, qR, iR, fR, VR) {
      const KR = GR.texture,
        wR = KR?.getInternalTexture(),
        rR = wR?._bufferView;
      if (!(rR instanceof Float32Array) && !(rR instanceof Uint16Array)) return XR.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const eR = KR.getSize(),
        aR = function(RR, JR) {
          const GR = RR.y - RR.x + 1,
            yR = JR * RR.w / GR,
            tR = yR < 1 ? 0 : 1,
            uR = GR - tR;
          let ZR = pR(yR - Math.floor(yR), 1) * uR;
          return ZR = pR(ZR + RR.z, uR), Math.floor(ZR) + RR.x + tR
        }(yR, GR.time);
      if (!isFinite(aR) || aR < 0 || aR >= eR.height) return XR.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const LR = uR.l.Fe[0],
        nR = uR.l.Matrix[0],
        UR = uR.l.Matrix[1],
        WR = aR * eR.width * 4,
        AR = JR === ZR.l.NormalKind ? uR.r.TransformNormalFromFloatsToRef : uR.r.TransformCoordinatesFromFloatsToRef;
      for (let uR = 0, ZR = 0; uR < RR.length; uR += 3, ZR += 4) {
        let JR, GR;
        for (nR.reset(), JR = 0; JR < 4 && JR < VR; JR++) GR = qR[ZR + JR], GR > 0 && (gR(rR, WR + 16 * Math.floor(tR[ZR + JR]), UR), UR.scaleAndAddToRef(GR, nR));
        if (iR && fR)
          for (JR = 0; JR < 4 && JR + 4 < VR; JR++) GR = fR[ZR + JR], GR > 0 && (gR(rR, WR + 16 * Math.floor(iR[ZR + JR]), UR), UR.scaleAndAddToRef(GR, nR));
        AR(RR[uR], RR[uR + 1], RR[uR + 2], nR, LR), LR.toArray(RR, uR)
      }
      return !0
    }
    class vR {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = uR.r.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class OR {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new vR, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new wR, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let xR = (() => {
        var RR;
        let JR, wR = iR.d,
          rR = [];
        return RR = class extends wR {
          static get BILLBOARDMODE_NONE() {
            return iR.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return iR.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return iR.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return iR.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return iR.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return iR.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(RR) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = RR
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(RR) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = RR
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(RR) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = RR
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(RR) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = RR
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(RR) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = RR
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(RR) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== RR && (this._internalAbstractMeshDataInfo._morphTargetManager = RR, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(RR) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== RR && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = RR, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(RR) {
            return !!super._updateNonUniformScalingState(RR) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(RR) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = RR
          }
          set Pw(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(RR)
          }
          set onCollisionPositionChange(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(RR)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(RR) {
            if (this._internalAbstractMeshDataInfo._visibility === RR) return;
            const JR = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = RR, (1 === JR && 1 !== RR || 1 !== JR && 1 === RR) && this._markSubMeshesAsDirty((RR => {
              RR.markAsMiscDirty(), RR.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(RR) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = RR
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(RR) {
            this._internalAbstractMeshDataInfo._renderingGroupId = RR
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(RR) {
            if (!Number.isInteger(RR) || RR < 0 || RR > 255 || 0 !== RR && 0 === (63 & RR)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = RR
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(RR) {
            this._setMaterial(RR)
          }
          _setMaterial(RR) {
            this._internalAbstractMeshDataInfo._material !== RR && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = RR, RR && RR.meshMap && (RR.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.XM && (this.resetDrawCache(void 0, null == RR), this._unBindEffect()))
          }
          getMaterialForRenderPass(RR) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[RR]
          }
          setMaterialForRenderPass(RR, JR) {
            this.resetDrawCache(RR), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const GR = this._internalAbstractMeshDataInfo._materialForRenderPass[RR];
            GR?.meshMap?.[this.uniqueId] && (GR.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[RR] = JR, JR && JR.meshMap && (JR.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(RR) {
            this._internalAbstractMeshDataInfo._receiveShadows !== RR && (this._internalAbstractMeshDataInfo._receiveShadows = RR, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(RR) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== RR && (this._internalAbstractMeshDataInfo._hasVertexAlpha = RR, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(RR) {
            this._internalAbstractMeshDataInfo._useVertexColors !== RR && (this._internalAbstractMeshDataInfo._useVertexColors = RR, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(RR) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== RR && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = RR, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(RR) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== RR && (this._internalAbstractMeshDataInfo._numBoneInfluencers = RR, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(RR) {
            this._internalAbstractMeshDataInfo._applyFog !== RR && (this._internalAbstractMeshDataInfo._applyFog = RR, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(RR) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = RR
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(RR) {
            RR !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = RR, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(RR) ? -1 : RR
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = RR
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(RR) ? -1 : RR
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = RR
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(RR) {
            const JR = this._internalAbstractMeshDataInfo._skeleton;
            JR && JR.needInitialSkinMatrix && JR._unregisterMeshWithPoseMatrix(this), RR && RR.needInitialSkinMatrix && RR._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = RR, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(JR) {
            var GR;
            let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(JR, yR, !1), GR = this, this._internalAbstractMeshDataInfo = new OR, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = RR.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new tR.b, this.onCollisionPositionChangeObservable = new tR.b, this.onMaterialChangedObservable = new tR.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.ZL = RR.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = WR.d.Red(), this.outlineWidth = .02, this.overlayColor = WR.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Qe = !1, this.se = !1, this.actionManager = null, this.ellipsoid = new uR.r(.5, 1, .5), this.ellipsoidOffset = new uR.r(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new WR.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                yI: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new tR.b, this._onCollisionPositionChange = function(RR, JR) {
                let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                JR.subtractToRef(GR._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, GR._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), GR._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > BR.c.CollisionsEpsilon && GR.position.addInPlace(GR._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), yR && GR.onCollideObservable.notifyObservers(yR), GR.onCollisionPositionChangeObservable.notifyObservers(GR.position)
              }, yR = this.jH(), this.layerMask = yR.defaultRenderableLayerMask, yR.stR(this), this._resyncLightSources(), this._uniformBuffer = new KR.b(this.jH().ke(), void 0, void 0, JR, !this.jH().ke().isWebGPU), this._buildUniformLayout(), yR.performancePriority) {
              case 2:
                this.se = !0;
              case 1:
                this.Qe = !0, this.ZL = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(RR) {
            const JR = this._uniformBuffer;
            JR.FRR("world", RR), JR.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), JR.update()
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
          toString(RR) {
            let JR = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            JR += ", # of submeshes: " + (this.XM ? this.XM.length : 0);
            const GR = this._internalAbstractMeshDataInfo._skeleton;
            return GR && (JR += ", skeleton: " + GR.name), RR && (JR += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], JR += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.yI ? "YES" : "NO")), JR
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== iR.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(RR) {
            let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (JR || this.actionManager.isRecursive)) {
              if (!RR) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(RR)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(RR, !1) : null
          }
          _releaseRenderPassId(RR) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.XM) {
              for (const RR of this.XM) RR._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const RR of this.jH().lights) RR.isEnabled() && RR.canAffectMesh(this) && this._lightSources.push(RR);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(RR) {
            const JR = RR.isEnabled() && RR.canAffectMesh(this),
              GR = this._lightSources.indexOf(RR);
            let yR = !1;
            if (-1 === GR) {
              if (!JR) return;
              this._lightSources.push(RR)
            } else {
              if (JR) return;
              yR = !0, this._lightSources.splice(GR, 1)
            }
            this._markSubMeshesAsLightDirty(yR)
          }
          _unBindEffect() {
            for (const RR of this.XM) RR.setEffect(null)
          }
          _removeLightSource(RR, JR) {
            const GR = this._lightSources.indexOf(RR); - 1 !== GR && (this._lightSources.splice(GR, 1), this._markSubMeshesAsLightDirty(JR))
          }
          _markSubMeshesAsDirty(RR) {
            if (this.XM)
              for (const JR of this.XM)
                for (let GR = 0; GR < JR._drawWrappers.length; ++GR) {
                  const yR = JR._drawWrappers[GR];
                  yR && yR.defines && yR.defines.markAllAsDirty && RR(yR.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((JR => JR.markAsLightDirty(RR)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((RR => RR.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((RR => RR.markAsMiscDirty()))
          }
          hGR(RR) {
            return this._currentRenderId = Number.MAX_VALUE, super.hGR(RR), this._isDirty = !0, this
          }
          resetDrawCache(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.XM)
              for (const GR of this.XM) GR.resetDrawCache(RR, JR)
          }
          get isBlocked() {
            return !1
          }
          getLOD(RR) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          NuR() {
            return null
          }
          getVerticesData(RR) {
            return null
          }
          setVerticesData(RR, JR, GR, yR) {
            return this
          }
          updateVerticesData(RR, JR, GR, yR) {
            return this
          }
          setIndices(RR, JR) {
            return this
          }
          isVerticesDataPresent(RR) {
            return !1
          }
          Tm() {
            return this._masterMesh ? this._masterMesh.Tm() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.Tm()
          }
          setBoundingInfo(RR) {
            return this._boundingInfo = RR, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(RR, JR, GR) {
            return this._boundingInfo = new VR.c(RR, JR, GR), this._boundingInfo
          }
          normalizeToUnitCube() {
            let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(RR, JR, GR)
          }
          get useBones() {
            return this.skeleton && this.jH().skeletonsEnabled && this.isVerticesDataPresent(ZR.l.MatricesIndicesKind) && this.isVerticesDataPresent(ZR.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(RR) {}
          _activate(RR, JR) {
            return this._renderId = RR, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === iR.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get sH() {
            return !1
          }
          get PuR() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(RR, JR, GR) {
            return this.position.addInPlace(this.calcMovePOV(RR, JR, GR)), this
          }
          calcMovePOV(RR, JR, GR) {
            const yR = new uR.e;
            (this.rotationQuaternion ? this.rotationQuaternion : uR.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(yR);
            const tR = uR.r.Zero(),
              ZR = this.definedFacingForward ? -1 : 1;
            return uR.r.TransformCoordinatesFromFloatsToRef(RR * ZR, JR, GR * ZR, yR, tR), tR
          }
          rotatePOV(RR, JR, GR) {
            return this.rotation.addInPlace(this.calcRotatePOV(RR, JR, GR)), this
          }
          calcRotatePOV(RR, JR, GR) {
            const yR = this.definedFacingForward ? 1 : -1;
            return new uR.r(RR * yR, JR, GR * yR)
          }
          _refreshBoundingInfo(RR, JR) {
            if (RR) {
              const GR = (0, UR.c)(RR, 0, this.getTotalVertices(), JR);
              this._boundingInfo ? this._boundingInfo.reConstruct(GR.minimum, GR.maximum) : this._boundingInfo = new VR.c(GR.minimum, GR.maximum)
            }
            if (this.XM)
              for (let GR = 0; GR < this.XM.length; GR++) this.XM[GR].refreshBoundingInfo(RR);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(RR) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(RR.minimum, RR.maximum) : this._boundingInfo = new VR.c(RR.minimum, RR.maximum), this.XM)
              for (let JR = 0; JR < this.XM.length; JR++) this.XM[JR].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(RR, JR, GR, yR, tR, qR, iR) {
            ! function(RR, JR, GR, yR, tR, qR, iR) {
              const fR = uR.l.Fe[0],
                VR = uR.l.Matrix[0],
                KR = uR.l.Matrix[1],
                wR = JR === ZR.l.NormalKind ? uR.r.TransformNormalFromFloatsToRef : uR.r.TransformCoordinatesFromFloatsToRef;
              for (let ZR = 0, rR = 0; ZR < RR.length; ZR += 3, rR += 4) {
                let JR, eR;
                for (VR.reset(), JR = 0; JR < 4; JR++) eR = tR[rR + JR], eR > 0 && (uR.e.FromFloat32ArrayToRefScaled(GR, Math.floor(16 * yR[rR + JR]), eR, KR), VR.addToSelf(KR));
                if (qR && iR)
                  for (JR = 0; JR < 4; JR++) eR = iR[rR + JR], eR > 0 && (uR.e.FromFloat32ArrayToRefScaled(GR, Math.floor(16 * qR[rR + JR]), eR, KR), VR.addToSelf(KR));
                wR(RR[ZR], RR[ZR + 1], RR[ZR + 2], VR, fR), fR.toArray(RR, ZR)
              }
            }(RR, JR, GR, yR, tR, qR, iR)
          }
          _getData(JR, GR) {
            let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZR.l.PositionKind;
            const tR = JR.cache,
              qR = RR => {
                if (tR) {
                  const JR = tR._vertexData || (tR._vertexData = {});
                  return JR[RR] || this.copyVerticesData(RR, JR), JR[RR]
                }
                return this.getVerticesData(RR)
              };
            if (GR || (GR = qR(yR)), !GR) return null;
            tR ? (tR._outputData ? tR._outputData.set(GR) : tR._outputData = new Float32Array(GR), GR = tR._outputData) : (JR.applyMorph && this.morphTargetManager || JR.applySkeleton && this.skeleton || JR.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (GR = GR.slice()), JR.applyMorph && this.morphTargetManager && function(RR, JR, GR) {
              let yR;
              switch (JR) {
                case ZR.l.PositionKind:
                  yR = RR => RR.getPositions();
                  break;
                case ZR.l.NormalKind:
                  yR = RR => RR.getNormals();
                  break;
                case ZR.l.TangentKind:
                  yR = RR => RR.getTangents();
                  break;
                case ZR.l.UVKind:
                  yR = RR => RR.getUVs();
                  break;
                case ZR.l.UV2Kind:
                  yR = RR => RR.getUV2s();
                  break;
                case ZR.l.ColorKind:
                  yR = RR => RR.getColors();
                  break;
                default:
                  return
              }
              for (let tR = 0; tR < RR.length; tR++) {
                let JR = RR[tR];
                for (let uR = 0; uR < GR.numTargets; uR++) {
                  const ZR = GR.getTarget(uR),
                    qR = ZR.influence;
                  if (0 !== qR) {
                    const GR = yR(ZR);
                    GR && (JR += (GR[tR] - RR[tR]) * qR)
                  }
                }
                RR[tR] = JR
              }
            }(GR, yR, this.morphTargetManager);
            const iR = this.bakedVertexAnimationManager;
            let fR = !1;
            if (JR.applyBakedVertexAnimation && iR?.isEnabled) {
              const RR = qR(ZR.l.MatricesIndicesKind),
                tR = qR(ZR.l.MatricesWeightsKind);
              if (tR && RR) {
                const uR = this.numBoneInfluencers > 4,
                  VR = uR ? qR(ZR.l.MatricesIndicesExtraKind) : null,
                  KR = uR ? qR(ZR.l.MatricesWeightsExtraKind) : null;
                fR = bR(GR, yR, iR, JR.bakedVertexAnimationSettings ?? iR.animationParameters, RR, tR, VR, KR, this.numBoneInfluencers)
              }
            }
            if (!fR && JR.applySkeleton && this.skeleton) {
              const JR = qR(ZR.l.MatricesIndicesKind),
                tR = qR(ZR.l.MatricesWeightsKind);
              if (tR && JR) {
                const uR = this.numBoneInfluencers > 4,
                  iR = uR ? qR(ZR.l.MatricesIndicesExtraKind) : null,
                  fR = uR ? qR(ZR.l.MatricesWeightsExtraKind) : null,
                  VR = this.skeleton.getTransformMatrices(this);
                RR._ApplySkeleton(GR, yR, VR, JR, tR, iR, fR)
              }
            }
            if (!1 !== JR.updatePositionsArray && yR === ZR.l.PositionKind) {
              const RR = this._internalAbstractMeshDataInfo._positions || [],
                JR = RR.length;
              if (RR.length = GR.length / 3, JR < RR.length)
                for (let GR = JR; GR < RR.length; GR++) RR[GR] = new uR.r;
              for (let yR = 0, tR = 0; yR < RR.length; yR++, tR += 3) RR[yR].VJR(GR[tR], GR[tR + 1], GR[tR + 2]);
              this._internalAbstractMeshDataInfo._positions = RR
            }
            return GR
          }
          getNormalsData() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: RR,
              applyMorph: JR,
              updatePositionsArray: !1
            }, null, ZR.l.NormalKind)
          }
          f6() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: RR,
              applyMorph: JR,
              updatePositionsArray: !1
            }, GR, ZR.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new VR.c(uR.r.Zero(), uR.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(RR) {
            if (!this.XM) return this;
            const JR = this.XM.length;
            for (let GR = 0; GR < JR; GR++) {
              const yR = this.XM[GR];
              (JR > 1 || !yR.IsGlobal) && yR.updateBoundingInfo(RR)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.se || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(RR) {
            return this.Tm().isInFrustum(RR, this.cullingStrategy)
          }
          isCompletelyInFrustum(RR) {
            return this.Tm().isCompletelyInFrustum(RR)
          }
          vuR(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = arguments.length > 2 ? arguments[2] : void 0;
            const yR = this.Tm(),
              tR = RR.Tm();
            if (yR.intersects(tR, JR)) return !0;
            if (GR)
              for (const uR of this.getChildMeshes())
                if (uR.vuR(RR, JR, !0)) return !0;
            return !1
          }
          intersectsPoint(RR) {
            return this.Tm().intersectsPoint(RR)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(RR) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = RR
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(RR) {
            let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const GR = this.jH().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = GR.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, GR.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, RR, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, JR), this
          }
          _collideForSubMesh(RR, JR, GR) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!RR._lastColliderWorldVertices || !RR._lastColliderTransformMatrix.equals(JR)) {
              RR._lastColliderTransformMatrix = JR.clone(), RR._lastColliderWorldVertices = [], RR._trianglePlanes = [];
              const GR = RR.verticesStart,
                yR = RR.verticesStart + RR.verticesCount;
              for (let tR = GR; tR < yR; tR++) RR._lastColliderWorldVertices.push(uR.r.TransformCoordinates(this._positions[tR], JR))
            }
            return GR._collide(RR._trianglePlanes, RR._lastColliderWorldVertices, this.NuR(), RR.indexStart, RR.indexStart + RR.indexCount, RR.verticesStart, !!RR.he(), this, this._shouldConvertRHS(), 7 === RR.he()?.fillMode), this
          }
          _processCollisionsForSubMeshes(RR, JR) {
            const GR = this._scene.getCollidingSubMeshCandidates(this, RR),
              yR = GR.length;
            for (let tR = 0; tR < yR; tR++) {
              const uR = GR.data[tR];
              yR > 1 && !uR._checkCollision(RR) || this._collideForSubMesh(uR, JR, RR)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(RR) {
            if (!this.Tm()._checkCollision(RR)) return this;
            const JR = uR.l.Matrix[0],
              GR = uR.l.Matrix[1];
            return uR.e.ScalingToRef(1 / RR._radius.x, 1 / RR._radius.y, 1 / RR._radius.z, JR), this.worldMatrixFromCache.multiplyToRef(JR, GR), this._processCollisionsForSubMeshes(RR, GR), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(RR, JR, GR) {
            let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tR = arguments.length > 4 ? arguments[4] : void 0,
              ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const qR = new fR.e,
              iR = this.getClassName(),
              VR = "InstancedLinesMesh" === iR || "LinesMesh" === iR || "GreasedLineMesh" === iR ? this.intersectionThreshold : 0,
              KR = this.Tm();
            if (!this.XM) return qR;
            if (!ZR && (!RR.intersectsSphere(KR.euR, VR) || !RR.intersectsBox(KR.boundingBox, VR))) return qR;
            if (yR) return qR.hit = !ZR, qR.pickedMesh = ZR ? null : this, qR.distance = ZR ? 0 : uR.r.Distance(RR.origin, KR.euR.center), qR.subMeshId = 0, qR;
            if (!this._generatePointsArray()) return qR;
            let wR = null;
            const rR = this._scene.getIntersectingSubMeshCandidates(this, RR),
              eR = rR.length;
            let aR = !1;
            for (let uR = 0; uR < eR; uR++) {
              const RR = rR.data[uR].he();
              if (RR && (7 == RR.fillMode || 0 == RR.fillMode || 1 == RR.fillMode || 2 == RR.fillMode || 4 == RR.fillMode)) {
                aR = !0;
                break
              }
            }
            if (!aR) return qR.hit = !0, qR.pickedMesh = this, qR.distance = uR.r.Distance(RR.origin, KR.euR.center), qR.subMeshId = -1, qR;
            for (let uR = 0; uR < eR; uR++) {
              const yR = rR.data[uR];
              if (eR > 1 && !ZR && !yR.canIntersects(RR)) continue;
              const tR = yR.intersects(RR, this._positions, this.NuR(), JR, GR);
              if (tR && (JR || !wR || tR.distance < wR.distance) && (wR = tR, wR.subMeshId = yR._id, wR._internalSubMeshId = uR, JR)) break
            }
            if (wR) {
              const JR = tR ?? this.getWorldMatrix(),
                GR = uR.l.Fe[0],
                yR = uR.l.Fe[1];
              uR.r.TransformCoordinatesToRef(RR.origin, JR, GR), RR.direction.scaleToRef(wR.distance, yR);
              const ZR = uR.r.TransformNormal(yR, JR).addInPlace(GR);
              return qR.hit = !0, qR.distance = uR.r.Distance(GR, ZR), qR.pickedPoint = ZR, qR.pickedMesh = this, qR.bu = wR.bu || 0, qR.bv = wR.bv || 0, qR.subMeshFaceId = wR.faceId, qR.faceId = wR.faceId + rR.data[wR._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), qR.subMeshId = wR.subMeshId, qR
            }
            return qR
          }
          clone(RR, JR, GR) {
            return null
          }
          releaseSubMeshes() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.XM)
              for (; this.XM.length;) this.XM[0].dispose(RR);
            else this.XM = [];
            return this
          }
          dispose(RR) {
            let JR, GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const yR = this.jH();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), yR.freeActiveMeshes(), yR.freeRenderingGroups(), yR.renderingManager.maintainStateBetweenFrames && yR.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((RR => RR !== this && RR.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), JR = 0; JR < this._intersectionsInProgress.length; JR++) {
              const RR = this._intersectionsInProgress[JR],
                GR = RR._intersectionsInProgress.indexOf(this);
              RR._intersectionsInProgress.splice(GR, 1)
            }
            this._intersectionsInProgress.length = 0;
            const tR = yR.lights;
            for (const ZR of tR) {
              let RR = ZR.includedOnlyMeshes.indexOf(this); - 1 !== RR && ZR.includedOnlyMeshes.splice(RR, 1), RR = ZR.excludedMeshes.indexOf(this), -1 !== RR && ZR.excludedMeshes.splice(RR, 1);
              const JR = ZR.getShadowGenerators();
              if (JR) {
                const GR = JR.values();
                for (let JR = GR.next(); !0 !== JR.done; JR = GR.next()) {
                  const GR = JR.value.getShadowMap();
                  GR && GR.renderList && (RR = GR.renderList.indexOf(this), -1 !== RR && GR.renderList.splice(RR, 1))
                }
              }
            }
            this.releaseSubMeshes(yR._isDisposing);
            const uR = yR.ke();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, uR.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), uR.wipeCaches(), yR.vI(this), this._parentContainer) {
              const RR = this._parentContainer.meshes.indexOf(this);
              RR > -1 && this._parentContainer.meshes.splice(RR, 1), this._parentContainer = null
            }
            if (GR && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !RR)
              for (JR = 0; JR < yR.pM.length; JR++) yR.pM[JR].emitter === this && (yR.pM[JR].dispose(), JR--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(RR, GR)
          }
          _initFacetData() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            RR.facetNormals || (RR.facetNormals = []), RR.facetPositions || (RR.facetPositions = []), RR.facetPartitioning || (RR.facetPartitioning = new Array), RR.facetNb = this.NuR().length / 3 | 0, RR.partitioningSubdivisions = RR.partitioningSubdivisions ? RR.partitioningSubdivisions : 10, RR.partitioningBBoxRatio = RR.partitioningBBoxRatio ? RR.partitioningBBoxRatio : 1.01;
            for (let JR = 0; JR < RR.facetNb; JR++) RR.facetNormals[JR] = uR.r.Zero(), RR.facetPositions[JR] = uR.r.Zero();
            return RR.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            RR.facetDataEnabled || this._initFacetData();
            const JR = this.getVerticesData(ZR.l.PositionKind),
              GR = this.NuR(),
              yR = this.getVerticesData(ZR.l.NormalKind)?.slice(),
              tR = this.Tm();
            if (RR.facetDepthSort && !RR.facetDepthSortEnabled) {
              if (RR.facetDepthSortEnabled = !0, GR instanceof Uint16Array) RR.depthSortedIndices = new Uint16Array(GR);
              else if (GR instanceof Uint32Array) RR.depthSortedIndices = new Uint32Array(GR);
              else {
                let JR = !1;
                for (let RR = 0; RR < GR.length; RR++)
                  if (GR[RR] > 65535) {
                    JR = !0;
                    break
                  } RR.depthSortedIndices = JR ? new Uint32Array(GR) : new Uint16Array(GR)
              }
              if (RR.facetDepthSortFunction = function(RR, JR) {
                  return JR.sqDistance - RR.sqDistance
                }, !RR.facetDepthSortFrom) {
                const JR = this.jH().activeCamera;
                RR.facetDepthSortFrom = JR ? JR.position : uR.r.Zero()
              }
              RR.depthSortedFacets = [];
              for (let JR = 0; JR < RR.facetNb; JR++) {
                const GR = {
                  ind: 3 * JR,
                  sqDistance: 0
                };
                RR.depthSortedFacets.push(GR)
              }
              RR.invertedMatrix = uR.e.Identity(), RR.facetDepthSortOrigin = uR.r.Zero()
            }
            RR.bbSize.x = tR.maximum.x - tR.minimum.x > AR.c ? tR.maximum.x - tR.minimum.x : AR.c, RR.bbSize.y = tR.maximum.y - tR.minimum.y > AR.c ? tR.maximum.y - tR.minimum.y : AR.c, RR.bbSize.z = tR.maximum.z - tR.minimum.z > AR.c ? tR.maximum.z - tR.minimum.z : AR.c;
            let iR = RR.bbSize.x > RR.bbSize.y ? RR.bbSize.x : RR.bbSize.y;
            if (iR = iR > RR.bbSize.z ? iR : RR.bbSize.z, RR.subDiv.max = RR.partitioningSubdivisions, RR.subDiv.X = Math.floor(RR.subDiv.max * RR.bbSize.x / iR), RR.subDiv.Y = Math.floor(RR.subDiv.max * RR.bbSize.y / iR), RR.subDiv.Z = Math.floor(RR.subDiv.max * RR.bbSize.z / iR), RR.subDiv.X = RR.subDiv.X < 1 ? 1 : RR.subDiv.X, RR.subDiv.Y = RR.subDiv.Y < 1 ? 1 : RR.subDiv.Y, RR.subDiv.Z = RR.subDiv.Z < 1 ? 1 : RR.subDiv.Z, RR.facetParameters.facetNormals = this.getFacetLocalNormals(), RR.facetParameters.facetPositions = this.getFacetLocalPositions(), RR.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), RR.facetParameters.bInfo = tR, RR.facetParameters.bbSize = RR.bbSize, RR.facetParameters.subDiv = RR.subDiv, RR.facetParameters.ratio = this.partitioningBBoxRatio, RR.facetParameters.depthSort = RR.facetDepthSort, RR.facetDepthSort && RR.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(RR.invertedMatrix), uR.r.TransformCoordinatesToRef(RR.facetDepthSortFrom, RR.invertedMatrix, RR.facetDepthSortOrigin), RR.facetParameters.distanceTo = RR.facetDepthSortOrigin), RR.facetParameters.depthSortedFacets = RR.depthSortedFacets, yR && qR.c.ComputeNormals(JR, GR, yR, RR.facetParameters), RR.facetDepthSort && RR.facetDepthSortEnabled) {
              RR.depthSortedFacets.sort(RR.facetDepthSortFunction);
              const JR = RR.depthSortedIndices.length / 3 | 0;
              for (let yR = 0; yR < JR; yR++) {
                const JR = RR.depthSortedFacets[yR].ind;
                RR.depthSortedIndices[3 * yR] = GR[JR], RR.depthSortedIndices[3 * yR + 1] = GR[JR + 1], RR.depthSortedIndices[3 * yR + 2] = GR[JR + 2]
              }
              this.updateIndices(RR.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            return RR.facetNormals || this.updateFacetData(), RR.facetNormals
          }
          getFacetLocalPositions() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            return RR.facetPositions || this.updateFacetData(), RR.facetPositions
          }
          getFacetLocalPartitioning() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            return RR.facetPartitioning || this.updateFacetData(), RR.facetPartitioning
          }
          getFacetPosition(RR) {
            const JR = uR.r.Zero();
            return this.getFacetPositionToRef(RR, JR), JR
          }
          getFacetPositionToRef(RR, JR) {
            const GR = this.getFacetLocalPositions()[RR],
              yR = this.getWorldMatrix();
            return uR.r.TransformCoordinatesToRef(GR, yR, JR), this
          }
          getFacetNormal(RR) {
            const JR = uR.r.Zero();
            return this.getFacetNormalToRef(RR, JR), JR
          }
          getFacetNormalToRef(RR, JR) {
            const GR = this.getFacetLocalNormals()[RR];
            return uR.r.TransformNormalToRef(GR, this.getWorldMatrix(), JR), this
          }
          getFacetsAtLocalCoordinates(RR, JR, GR) {
            const yR = this.Tm(),
              tR = this._internalAbstractMeshDataInfo._facetData,
              uR = Math.floor((RR - yR.minimum.x * tR.partitioningBBoxRatio) * tR.subDiv.X * tR.partitioningBBoxRatio / tR.bbSize.x),
              ZR = Math.floor((JR - yR.minimum.y * tR.partitioningBBoxRatio) * tR.subDiv.Y * tR.partitioningBBoxRatio / tR.bbSize.y),
              qR = Math.floor((GR - yR.minimum.z * tR.partitioningBBoxRatio) * tR.subDiv.Z * tR.partitioningBBoxRatio / tR.bbSize.z);
            return uR < 0 || uR > tR.subDiv.max || ZR < 0 || ZR > tR.subDiv.max || qR < 0 || qR > tR.subDiv.max ? null : tR.facetPartitioning[uR + tR.subDiv.max * ZR + tR.subDiv.max * tR.subDiv.max * qR]
          }
          getClosestFacetAtCoordinates(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const qR = this.getWorldMatrix(),
              iR = uR.l.Matrix[5];
            qR.invertToRef(iR);
            const fR = uR.l.Fe[8];
            uR.r.TransformCoordinatesFromFloatsToRef(RR, JR, GR, iR, fR);
            const VR = this.getClosestFacetAtLocalCoordinates(fR.x, fR.y, fR.z, yR, tR, ZR);
            return yR && uR.r.TransformCoordinatesFromFloatsToRef(yR.x, yR.y, yR.z, qR, yR), VR
          }
          getClosestFacetAtLocalCoordinates(RR, JR, GR, yR) {
            let tR, uR, ZR, qR, iR, fR, VR, KR, wR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              rR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              eR = null;
            const aR = this.getFacetLocalPositions(),
              LR = this.getFacetLocalNormals(),
              nR = this.getFacetsAtLocalCoordinates(RR, JR, GR);
            if (!nR) return null;
            let UR, WR, AR, CR, XR = Number.MAX_VALUE;
            for (let MR = 0; MR < nR.length; MR++) WR = nR[MR], AR = LR[WR], CR = aR[WR], qR = (RR - CR.x) * AR.x + (JR - CR.y) * AR.y + (GR - CR.z) * AR.z, (!wR || wR && rR && qR >= 0 || wR && !rR && qR <= 0) && (qR = AR.x * CR.x + AR.y * CR.y + AR.z * CR.z, iR = -(AR.x * RR + AR.y * JR + AR.z * GR - qR) / (AR.x * AR.x + AR.y * AR.y + AR.z * AR.z), fR = RR + AR.x * iR, VR = JR + AR.y * iR, KR = GR + AR.z * iR, tR = fR - RR, uR = VR - JR, ZR = KR - GR, UR = tR * tR + uR * uR + ZR * ZR, UR < XR && (XR = UR, eR = WR, yR && (yR.x = fR, yR.y = VR, yR.z = KR)));
            return eR
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const RR = this._internalAbstractMeshDataInfo._facetData;
            return RR.facetDataEnabled && (RR.facetDataEnabled = !1, RR.facetPositions = [], RR.facetNormals = [], RR.facetPartitioning = new Array, RR.facetParameters = {}, RR.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(RR, JR) {
            return this
          }
          createNormals(RR) {
            const JR = this.getVerticesData(ZR.l.PositionKind),
              GR = this.NuR();
            let yR;
            return yR = this.isVerticesDataPresent(ZR.l.NormalKind) ? this.getVerticesData(ZR.l.NormalKind) : [], qR.c.ComputeNormals(JR, GR, yR, {
              useRightHandedSystem: this.jH().useRightHandedSystem
            }), this.setVerticesData(ZR.l.NormalKind, yR, RR), this
          }
          async optimizeIndicesAsync() {
            const RR = this.NuR();
            if (!RR) return this;
            const {
              OptimizeIndices: JR
            } = await GR.e(669).then((() => GR(54557)));
            return JR(RR), this.setIndices(RR, this.getTotalVertices()), this
          }
          alignWithNormal(RR, JR) {
            JR || (JR = CR.b.Y);
            const GR = uR.l.Fe[0],
              yR = uR.l.Fe[1];
            return uR.r.CrossToRef(JR, RR, yR), uR.r.CrossToRef(RR, yR, GR), this.rotationQuaternion ? uR.i.RotationQuaternionFromAxisToRef(GR, RR, yR, this.rotationQuaternion) : uR.r.RotationFromAxisToRef(GR, RR, yR, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, LR.j)("EdgesRenderer")
          }
          enableEdgesRendering(RR, JR, GR) {
            throw (0, LR.j)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.pM.filter((RR => RR.emitter === this))
          }
        }, (() => {
          const GR = "function" === typeof Symbol && Symbol.metadata ? Object.create(wR[Symbol.metadata] ?? null) : void 0;
          JR = [MR.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, yR.l)(RR, null, JR, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: RR => "_ApplySkeleton" in RR,
              get: RR => RR._ApplySkeleton
            },
            metadata: GR
          }, null, rR), GR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GR
          })
        })(), RR.OCCLUSION_TYPE_NONE = ((0, yR.m)(RR, rR), 0), RR.OCCLUSION_TYPE_OPTIMISTIC = 1, RR.OCCLUSION_TYPE_STRICT = 2, RR.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, RR.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, RR.CULLINGSTRATEGY_STANDARD = 0, RR.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, RR.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, RR.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, RR.DefaultIsPickable = !0, RR
      })(),
      NR = !1;

    function DR() {
      NR || (NR = !0, (0, lR.f)("BABYLON.AbstractMesh", xR))
    }(rR = xR.prototype).createOrUpdateSubmeshesOctree ?? (rR.createOrUpdateSubmeshesOctree = (0, LR.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (eR = xR.prototype).getPhysicsImpostor ?? (eR.getPhysicsImpostor = (0, LR.f)("AbstractMesh", "getPhysicsImpostor")), (aR = xR.prototype).setPhysicsLinkWith ?? (aR.setPhysicsLinkWith = (0, LR.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(xR.prototype, "occlusionRetryCount") || Object.defineProperty(xR.prototype, "occlusionRetryCount", (0, LR.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(xR.prototype, "occlusionType") || Object.defineProperty(xR.prototype, "occlusionType", (0, LR.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(xR.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(xR.prototype, "occlusionQueryAlgorithmType", (0, LR.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(xR.prototype, "isOccluded") || Object.defineProperty(xR.prototype, "isOccluded", (0, LR.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(xR.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(xR.prototype, "isOcclusionQueryInProgress", (0, LR.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(xR.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(xR.prototype, "forceRenderingWhenOccluded", (0, LR.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(xR.prototype, "occlusionForRenderPassId") || Object.defineProperty(xR.prototype, "occlusionForRenderPassId", (0, LR.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(xR.prototype, "decalMap") || Object.defineProperty(xR.prototype, "decalMap", (0, LR.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(xR.prototype, "Im") || Object.defineProperty(xR.prototype, "Im", (0, LR.e)("AbstractMesh", "Im")), Object.getOwnPropertyDescriptor(xR.prototype, "physicsImpostor") || Object.defineProperty(xR.prototype, "physicsImpostor", (0, LR.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(xR.prototype, "showBoundingBox") || Object.defineProperty(xR.prototype, "showBoundingBox", (0, LR.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(xR.prototype, "edgesRenderer") || Object.defineProperty(xR.prototype, "edgesRenderer", (0, LR.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(xR.prototype, "renderOutline") || Object.defineProperty(xR.prototype, "renderOutline", (0, LR.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(xR.prototype, "renderOverlay") || Object.defineProperty(xR.prototype, "renderOverlay", (0, LR.e)("AbstractMesh", "renderOverlay"))
  },
  41957: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => nR
    });
    var yR = GR(38204),
      tR = GR(38331),
      uR = GR(41951),
      ZR = GR(41663),
      qR = GR(41813),
      iR = GR(41963),
      fR = GR(41822),
      VR = GR(41616),
      KR = GR(39914),
      wR = GR(41547),
      rR = GR(41835),
      eR = GR(38224),
      aR = GR(41972),
      LR = GR(41586);
    class nR {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(RR) {
        this._boundingBias ? this._boundingBias.vN(RR) : this._boundingBias = RR.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(RR) {
        const JR = new nR(nR.RandomId(), RR.jH());
        return JR.applyToMesh(RR), JR
      }
      get meshes() {
        return this._meshes
      }
      constructor(RR, JR, GR) {
        let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new yR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new yR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = JR || eR.c.LastCreatedScene, this._scene && (this.id = RR, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.ke(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = tR, null !== ZR && (this._totalVertices = ZR), GR ? this.setAllVerticesData(GR, tR) : null === ZR && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), uR && (this.applyToMesh(uR), uR.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      jH() {
        return this._scene
      }
      ke() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let RR = 0; RR < this._meshes.length; RR++)
          if (!this._meshes[RR].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const RR = new Set;
        for (const JR in this._vertexBuffers) RR.add(this._vertexBuffers[JR].getWrapperBuffer());
        RR.forEach((RR => {
          RR._rebuild()
        }))
      }
      setAllVerticesData(RR, JR) {
        RR.applyToGeometry(this, JR), this._notifyUpdate()
      }
      setVerticesData(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0;
        GR && Array.isArray(JR) && (JR = new Float32Array(JR));
        const tR = new ZR.l(this._engine, JR, RR, {
          updatable: GR,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: yR,
          label: "Geometry_" + this.id + "_" + RR
        });
        this.setVerticesBuffer(tR)
      }
      removeVerticesData(RR) {
        this._vertexBuffers[RR] && (this._vertexBuffers[RR].dispose(), delete this._vertexBuffers[RR]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const tR = RR.getKind();
        this._vertexBuffers[tR] && GR && this._vertexBuffers[tR].dispose(), RR._buffer && RR._ownsBuffer && RR._buffer._increaseReferences(), this._vertexBuffers[tR] = RR;
        const uR = this._meshes,
          qR = uR.length;
        if (tR === ZR.l.PositionKind) {
          this._totalVertices = JR ?? RR._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : RR.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const GR = this._extend && this._extend.minimum || new yR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            tR = this._extend && this._extend.maximum || new yR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let RR = 0; RR < qR; RR++) {
            const JR = uR[RR];
            JR.buildBoundingInfo(GR, tR), JR._createGlobalSubMesh(JR.isUnIndexed), JR.computeWorldMatrix(!0), JR.synchronizeInstances()
          }
        }
        this._notifyUpdate(tR)
      }
      updateVerticesDataDirectly(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tR = this.getVertexBuffer(RR);
        tR && (tR.updateDirectly(JR, GR, yR), this._notifyUpdate(RR))
      }
      updateVerticesData(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this.getVertexBuffer(RR);
        yR && (yR.update(JR), RR === ZR.l.PositionKind && this._updateBoundingInfo(GR, JR), this._notifyUpdate(RR))
      }
      _updateBoundingInfo(RR, JR) {
        if (RR && this._updateExtend(JR), this._resetPointsArrayCache(), RR) {
          const RR = this._meshes;
          for (const JR of RR) {
            JR.hasBoundingInfo ? JR.Tm().reConstruct(this._extend.minimum, this._extend.maximum) : JR.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const RR = JR.XM;
            for (const JR of RR) JR.refreshBoundingInfo()
          }
        }
      }
      _bind(RR, JR, GR, yR) {
        if (!RR) return;
        void 0 === JR && (JR = this._indexBuffer);
        const tR = this.getVertexBuffers();
        if (!tR) return;
        if (JR != this._indexBuffer || !this._vertexArrayObjects && !yR) return void this._engine.bindBuffers(tR, JR, RR, GR);
        const uR = yR || this._vertexArrayObjects,
          ZR = this._engine;
        uR[RR.key] || (uR[RR.key] = ZR.recordVertexArrayObject(tR, JR, RR, GR)), ZR.bindVertexArrayObject(uR[RR.key], JR)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(RR, JR, GR) {
        const yR = this.getVertexBuffer(RR);
        return yR ? yR.getFloatData(this._totalVertices, GR || JR && 1 !== this._meshes.length) : null
      }
      copyVerticesData(RR, JR) {
        const GR = this.getVertexBuffer(RR);
        if (!GR) return;
        JR[RR] || (JR[RR] = new Float32Array(this._totalVertices * GR.getSize()));
        const yR = GR.getData();
        yR && (0, LR.c)(yR, GR.getSize(), GR.type, GR.byteOffset, GR.byteStride, GR.normalized, this._totalVertices, JR[RR])
      }
      isVertexBufferUpdatable(RR) {
        const JR = this._vertexBuffers[RR];
        return !!JR && JR.isUpdatable()
      }
      getVertexBuffer(RR) {
        return this.isReady() ? this._vertexBuffers[RR] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(RR) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[RR] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(RR)
      }
      getVerticesDataKinds() {
        const RR = [];
        let JR;
        if (!this._vertexBuffers && this._delayInfo)
          for (JR in this._delayInfo) RR.push(JR);
        else
          for (JR in this._vertexBuffers) RR.push(JR);
        return RR
      }
      updateIndices(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const yR = RR.length !== this._indices.length;
            if (GR || (this._indices = RR.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, RR, JR), yR)
              for (const RR of this._meshes) RR._createGlobalSubMesh(!0)
          } else this.setIndices(RR, null, !0)
      }
      setIndexBuffer(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = RR, this._totalVertices = JR, this._totalIndices = GR, RR.is32Bits = null === yR ? JR > 65535 : yR;
        for (const tR of this._meshes) tR._createGlobalSubMesh(!0), tR.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = RR, this._indexBufferIsUpdatable = GR, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, GR, "Geometry_" + this.id + "_IndexBuffer")), void 0 != JR && (this._totalVertices = JR);
        for (const tR of this._meshes) tR._createGlobalSubMesh(!yR), tR.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      NuR(RR, JR) {
        if (!this.isReady()) return null;
        const GR = this._indices;
        return JR || RR && 1 !== this._meshes.length ? GR.slice() : GR
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        RR && this._vertexArrayObjects && this._vertexArrayObjects[RR.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[RR.key]), delete this._vertexArrayObjects[RR.key])
      }
      releaseForMesh(RR, JR) {
        const GR = this._meshes,
          yR = GR.indexOf(RR); - 1 !== yR && (GR.splice(yR, 1), this._vertexArrayObjects && RR._invalidateInstanceVertexArrayObject(), RR._geometry = null, 0 === GR.length && JR && this.dispose())
      }
      applyToMesh(RR) {
        if (RR._geometry === this) return;
        const JR = RR._geometry;
        JR && JR.releaseForMesh(RR), this._vertexArrayObjects && RR._invalidateInstanceVertexArrayObject();
        const GR = this._meshes;
        RR._geometry = this, RR._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), GR.push(RR), this.isReady() ? this._applyToMesh(RR) : this._boundingInfo && RR.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!RR && (RR = this.getVerticesData(ZR.l.PositionKind), !RR)) return;
          this._extend = (0, rR.c)(RR, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(RR) {
        for (const JR in this._vertexBuffers) {
          const GR = this._vertexBuffers[JR];
          GR._buffer.getBuffer() || GR.create(), JR === ZR.l.PositionKind && (this._extend || this._updateExtend(), RR.buildBoundingInfo(this._extend.minimum, this._extend.maximum), RR._createGlobalSubMesh(RR.isUnIndexed), RR._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), RR._syncGeometryWithMorphTargetManager(), RR.synchronizeInstances()
      }
      _notifyUpdate(RR) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, RR), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const JR of this._meshes) JR._markSubMeshesAsAttributesDirty()
      }
      load(RR, JR) {
        2 !== this.delayLoadState && (this.isReady() ? JR && JR() : (this.delayLoadState = 2, this._queueLoad(RR, JR)))
      }
      _queueLoad(RR, JR) {
        this.delayLoadingFile && (RR.addPendingData(this), (async () => {
          try {
            const GR = await RR._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void RR.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(GR), this), this.delayLoadState = 1, this._delayInfo = [], RR.removePendingData(this);
            const yR = this._meshes,
              tR = yR.length;
            for (let RR = 0; RR < tR; RR++) this._applyToMesh(yR[RR]);
            JR && JR()
          } catch (GR) {
            RR.removePendingData(this), RR.oB || KR.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${GR}`)
          }
        })())
      }
      toLeftHanded() {
        const RR = this.NuR(!1);
        if (null != RR && RR.length > 0) {
          for (let JR = 0; JR < RR.length; JR += 3) {
            const GR = RR[JR + 0];
            RR[JR + 0] = RR[JR + 2], RR[JR + 2] = GR
          }
          this.setIndices(RR)
        }
        const JR = this.getVerticesData(ZR.l.PositionKind, !1);
        if (null != JR && JR.length > 0) {
          for (let RR = 0; RR < JR.length; RR += 3) JR[RR + 2] = -JR[RR + 2];
          this.setVerticesData(ZR.l.PositionKind, JR, !1)
        }
        const GR = this.getVerticesData(ZR.l.NormalKind, !1);
        if (null != GR && GR.length > 0) {
          for (let RR = 0; RR < GR.length; RR += 3) GR[RR + 2] = -GR[RR + 2];
          this.setVerticesData(ZR.l.NormalKind, GR, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const RR = this.getVerticesData(ZR.l.PositionKind);
        if (!RR || 0 === RR.length) return !1;
        for (let JR = 3 * this._positionsCache.length, GR = this._positionsCache.length; JR < RR.length; JR += 3, ++GR) this._positionsCache[GR] = yR.r.FromArray(RR, JR);
        for (let JR = 0, GR = 0; JR < RR.length; JR += 3, ++GR) this._positionsCache[GR].set(RR[0 + JR], RR[1 + JR], RR[2 + JR]);
        return this._positionsCache.length = RR.length / 3, this._positions = this._positionsCache, !0
      }
      oB() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const GR in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[GR]);
          this._vertexArrayObjects = {};
          const RR = this._meshes,
            JR = RR.length;
          for (let GR = 0; GR < JR; GR++) RR[GR]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const RR = this._meshes,
          JR = RR.length;
        let GR;
        for (GR = 0; GR < JR; GR++) this.releaseForMesh(RR[GR]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const yR in this._vertexBuffers) this._vertexBuffers[yR].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const RR = this._parentContainer.geometries.indexOf(this);
          RR > -1 && this._parentContainer.geometries.splice(RR, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(RR) {
        const JR = new nR(RR, this._scene),
          GR = this.NuR(void 0, !0);
        GR && JR.setIndices(GR);
        let yR, tR = !1;
        for (yR in this._vertexBuffers) {
          const RR = this.getVertexBuffer(yR),
            GR = RR.getData();
          if (!GR) continue;
          const uR = RR.isUpdatable(),
            qR = RR.getSize(),
            {
              type: iR,
              byteOffset: fR,
              byteStride: VR,
              normalized: KR
            } = RR;
          tR = tR || uR;
          let wR = this._totalVertices;
          if (RR.getIsInstanced()) {
            let RR;
            RR = GR instanceof Array ? 4 * GR.length : GR.byteLength, wR = RR / VR
          }
          const rR = (0, LR.l)(GR, qR, iR, fR, VR, wR, !0),
            eR = new ZR.l(this._engine, rR, yR, {
              updatable: uR,
              useBytes: !1,
              stride: qR,
              size: qR,
              offset: 0,
              type: iR,
              normalized: KR,
              takeBufferOwnership: !0,
              instanced: RR.getIsInstanced()
            });
          JR.setVerticesBuffer(eR, wR)
        }
        for (yR in JR._updatable = tR, JR.delayLoadState = this.delayLoadState, JR.delayLoadingFile = this.delayLoadingFile, JR._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) JR._delayInfo = JR._delayInfo || [], JR._delayInfo.push(yR);
        return JR._boundingInfo = new fR.c(this._extend.minimum, this._extend.maximum), JR
      }
      serialize() {
        const RR = {};
        return RR.id = this.id, RR.uniqueId = this.uniqueId, RR.updatable = this._updatable, wR.d && wR.d.HasTags(this) && (RR.tags = wR.d.GetTags(this)), RR
      }
      _toNumberArray(RR) {
        return Array.isArray(RR) ? RR : Array.prototype.slice.call(RR)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const RR in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, RR) && (this._vertexBuffers[RR]._buffer._data = null)
      }
      serializeVerticeData() {
        const RR = this.serialize();
        return this.isVerticesDataPresent(ZR.l.PositionKind) && (RR.positions = this._toNumberArray(this.getVerticesData(ZR.l.PositionKind)), this.isVertexBufferUpdatable(ZR.l.PositionKind) && (RR.positionsUpdatable = !0)), this.isVerticesDataPresent(ZR.l.NormalKind) && (RR.normals = this._toNumberArray(this.getVerticesData(ZR.l.NormalKind)), this.isVertexBufferUpdatable(ZR.l.NormalKind) && (RR.normalsUpdatable = !0)), this.isVerticesDataPresent(ZR.l.TangentKind) && (RR.tangents = this._toNumberArray(this.getVerticesData(ZR.l.TangentKind)), this.isVertexBufferUpdatable(ZR.l.TangentKind) && (RR.tangentsUpdatable = !0)), this.isVerticesDataPresent(ZR.l.UVKind) && (RR.uvs = this._toNumberArray(this.getVerticesData(ZR.l.UVKind)), this.isVertexBufferUpdatable(ZR.l.UVKind) && (RR.uvsUpdatable = !0)), this.isVerticesDataPresent(ZR.l.UV2Kind) && (RR.uvs2 = this._toNumberArray(this.getVerticesData(ZR.l.UV2Kind)), this.isVertexBufferUpdatable(ZR.l.UV2Kind) && (RR.uvs2Updatable = !0)), this.isVerticesDataPresent(ZR.l.UV3Kind) && (RR.uvs3 = this._toNumberArray(this.getVerticesData(ZR.l.UV3Kind)), this.isVertexBufferUpdatable(ZR.l.UV3Kind) && (RR.uvs3Updatable = !0)), this.isVerticesDataPresent(ZR.l.UV4Kind) && (RR.uvs4 = this._toNumberArray(this.getVerticesData(ZR.l.UV4Kind)), this.isVertexBufferUpdatable(ZR.l.UV4Kind) && (RR.uvs4Updatable = !0)), this.isVerticesDataPresent(ZR.l.UV5Kind) && (RR.uvs5 = this._toNumberArray(this.getVerticesData(ZR.l.UV5Kind)), this.isVertexBufferUpdatable(ZR.l.UV5Kind) && (RR.uvs5Updatable = !0)), this.isVerticesDataPresent(ZR.l.UV6Kind) && (RR.uvs6 = this._toNumberArray(this.getVerticesData(ZR.l.UV6Kind)), this.isVertexBufferUpdatable(ZR.l.UV6Kind) && (RR.uvs6Updatable = !0)), this.isVerticesDataPresent(ZR.l.ColorKind) && (RR.colors = this._toNumberArray(this.getVerticesData(ZR.l.ColorKind)), this.isVertexBufferUpdatable(ZR.l.ColorKind) && (RR.colorsUpdatable = !0)), this.isVerticesDataPresent(ZR.l.MatricesIndicesKind) && (RR.matricesIndices = this._toNumberArray(this.getVerticesData(ZR.l.MatricesIndicesKind)), RR.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(ZR.l.MatricesIndicesKind) && (RR.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(ZR.l.MatricesWeightsKind) && (RR.matricesWeights = this._toNumberArray(this.getVerticesData(ZR.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(ZR.l.MatricesWeightsKind) && (RR.matricesWeightsUpdatable = !0)), RR.indices = this._toNumberArray(this.NuR()), RR
      }
      static ExtractFromMesh(RR, JR) {
        const GR = RR._geometry;
        return GR ? GR.copy(JR) : null
      }
      static RandomId() {
        return VR.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(RR, JR) {
        for (let GR = 0; GR < JR.geometries.length; GR++)
          if (JR.geometries[GR]._loadedUniqueId === RR) return JR.geometries[GR];
        return null
      }
      static _ImportGeometry(RR, JR) {
        const GR = JR.jH(),
          yR = RR.geometryUniqueId,
          uR = RR.geometryId;
        if (yR || uR) {
          const RR = yR ? this._GetGeometryByLoadedUniqueId(yR, GR) : GR.getGeometryById(uR);
          RR && RR.applyToMesh(JR)
        } else if (RR instanceof ArrayBuffer) {
          const GR = JR._binaryInfo;
          if (GR.positionsAttrDesc && GR.positionsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.positionsAttrDesc.offset, GR.positionsAttrDesc.count);
            JR.setVerticesData(ZR.l.PositionKind, yR, !1)
          }
          if (GR.normalsAttrDesc && GR.normalsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.normalsAttrDesc.offset, GR.normalsAttrDesc.count);
            JR.setVerticesData(ZR.l.NormalKind, yR, !1)
          }
          if (GR.tangetsAttrDesc && GR.tangetsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.tangetsAttrDesc.offset, GR.tangetsAttrDesc.count);
            JR.setVerticesData(ZR.l.TangentKind, yR, !1)
          }
          if (GR.uvsAttrDesc && GR.uvsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvsAttrDesc.offset, GR.uvsAttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UVKind, yR, !1)
          }
          if (GR.uvs2AttrDesc && GR.uvs2AttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvs2AttrDesc.offset, GR.uvs2AttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UV2Kind, yR, !1)
          }
          if (GR.uvs3AttrDesc && GR.uvs3AttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvs3AttrDesc.offset, GR.uvs3AttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UV3Kind, yR, !1)
          }
          if (GR.uvs4AttrDesc && GR.uvs4AttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvs4AttrDesc.offset, GR.uvs4AttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UV4Kind, yR, !1)
          }
          if (GR.uvs5AttrDesc && GR.uvs5AttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvs5AttrDesc.offset, GR.uvs5AttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UV5Kind, yR, !1)
          }
          if (GR.uvs6AttrDesc && GR.uvs6AttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.uvs6AttrDesc.offset, GR.uvs6AttrDesc.count);
            if (aR.d)
              for (let RR = 1; RR < yR.length; RR += 2) yR[RR] = 1 - yR[RR];
            JR.setVerticesData(ZR.l.UV6Kind, yR, !1)
          }
          if (GR.colorsAttrDesc && GR.colorsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.colorsAttrDesc.offset, GR.colorsAttrDesc.count);
            JR.setVerticesData(ZR.l.ColorKind, yR, !1, GR.colorsAttrDesc.stride)
          }
          if (GR.matricesIndicesAttrDesc && GR.matricesIndicesAttrDesc.count > 0) {
            const yR = new Int32Array(RR, GR.matricesIndicesAttrDesc.offset, GR.matricesIndicesAttrDesc.count),
              tR = [];
            for (let RR = 0; RR < yR.length; RR++) {
              const JR = yR[RR];
              tR.push(255 & JR), tR.push((65280 & JR) >> 8), tR.push((16711680 & JR) >> 16), tR.push(JR >> 24 & 255)
            }
            JR.setVerticesData(ZR.l.MatricesIndicesKind, tR, !1)
          }
          if (GR.matricesIndicesExtraAttrDesc && GR.matricesIndicesExtraAttrDesc.count > 0) {
            const yR = new Int32Array(RR, GR.matricesIndicesExtraAttrDesc.offset, GR.matricesIndicesExtraAttrDesc.count),
              tR = [];
            for (let RR = 0; RR < yR.length; RR++) {
              const JR = yR[RR];
              tR.push(255 & JR), tR.push((65280 & JR) >> 8), tR.push((16711680 & JR) >> 16), tR.push(JR >> 24 & 255)
            }
            JR.setVerticesData(ZR.l.MatricesIndicesExtraKind, tR, !1)
          }
          if (GR.matricesWeightsAttrDesc && GR.matricesWeightsAttrDesc.count > 0) {
            const yR = new Float32Array(RR, GR.matricesWeightsAttrDesc.offset, GR.matricesWeightsAttrDesc.count);
            JR.setVerticesData(ZR.l.MatricesWeightsKind, yR, !1)
          }
          if (GR.indicesAttrDesc && GR.indicesAttrDesc.count > 0) {
            const yR = new Int32Array(RR, GR.indicesAttrDesc.offset, GR.indicesAttrDesc.count);
            JR.setIndices(yR, null)
          }
          if (GR.subMeshesAttrDesc && GR.subMeshesAttrDesc.count > 0) {
            const yR = new Int32Array(RR, GR.subMeshesAttrDesc.offset, 5 * GR.subMeshesAttrDesc.count);
            JR.XM = [];
            for (let RR = 0; RR < GR.subMeshesAttrDesc.count; RR++) {
              const GR = yR[5 * RR + 0],
                tR = yR[5 * RR + 1],
                uR = yR[5 * RR + 2],
                ZR = yR[5 * RR + 3],
                iR = yR[5 * RR + 4];
              qR.b.AddToMesh(GR, tR, uR, ZR, iR, JR)
            }
          }
        } else if (RR.positions && RR.normals && RR.indices) {
          if (JR.setVerticesData(ZR.l.PositionKind, RR.positions, RR.positions._updatable || RR.positionsUpdatable), JR.setVerticesData(ZR.l.NormalKind, RR.normals, RR.normals._updatable || RR.normalsUpdatable), RR.tangents && JR.setVerticesData(ZR.l.TangentKind, RR.tangents, RR.tangents._updatable || RR.tangentsUpdatable), RR.uvs && JR.setVerticesData(ZR.l.UVKind, RR.uvs, RR.uvs._updatable || RR.uvsUpdatable), RR.uvs2 && JR.setVerticesData(ZR.l.UV2Kind, RR.uvs2, RR.uvs2._updatable || RR.uvs2Updatable), RR.uvs3 && JR.setVerticesData(ZR.l.UV3Kind, RR.uvs3, RR.uvs3._updatable || RR.uvs3Updatable), RR.uvs4 && JR.setVerticesData(ZR.l.UV4Kind, RR.uvs4, RR.uvs4._updatable || RR.uvs4Updatable), RR.uvs5 && JR.setVerticesData(ZR.l.UV5Kind, RR.uvs5, RR.uvs5._updatable || RR.uvs5Updatable), RR.uvs6 && JR.setVerticesData(ZR.l.UV6Kind, RR.uvs6, RR.uvs6._updatable || RR.uvs6Updatable), RR.colors && JR.setVerticesData(ZR.l.ColorKind, tR.e.CheckColors4(RR.colors, RR.positions.length / 3), RR.colors._updatable), RR.matricesIndices)
            if (RR.matricesIndices._isExpanded || RR.matricesIndicesExpanded) delete RR.matricesIndices._isExpanded, delete RR.matricesIndicesExpanded, JR.setVerticesData(ZR.l.MatricesIndicesKind, RR.matricesIndices, RR.matricesIndices._updatable || RR.matricesIndicesUpdatable);
            else {
              const GR = [];
              for (let JR = 0; JR < RR.matricesIndices.length; JR++) {
                const yR = RR.matricesIndices[JR];
                GR.push(255 & yR), GR.push((65280 & yR) >> 8), GR.push((16711680 & yR) >> 16), GR.push(yR >> 24 & 255)
              }
              JR.setVerticesData(ZR.l.MatricesIndicesKind, GR, RR.matricesIndices._updatable || RR.matricesIndicesUpdatable)
            } if (RR.matricesIndicesExtra)
            if (RR.matricesIndicesExtraExpanded || RR.matricesIndicesExtra._isExpanded) delete RR.matricesIndices._isExpanded, delete RR.matricesIndicesExtraExpanded, JR.setVerticesData(ZR.l.MatricesIndicesExtraKind, RR.matricesIndicesExtra, RR.matricesIndicesExtra._updatable || RR.matricesIndicesExtraUpdatable);
            else {
              const GR = [];
              for (let JR = 0; JR < RR.matricesIndicesExtra.length; JR++) {
                const yR = RR.matricesIndicesExtra[JR];
                GR.push(255 & yR), GR.push((65280 & yR) >> 8), GR.push((16711680 & yR) >> 16), GR.push(yR >> 24 & 255)
              }
              JR.setVerticesData(ZR.l.MatricesIndicesExtraKind, GR, RR.matricesIndicesExtra._updatable || RR.matricesIndicesExtraUpdatable)
            } RR.matricesWeights && (nR._CleanMatricesWeights(RR, JR), JR.setVerticesData(ZR.l.MatricesWeightsKind, RR.matricesWeights, RR.matricesWeights._updatable)), RR.matricesWeightsExtra && JR.setVerticesData(ZR.l.MatricesWeightsExtraKind, RR.matricesWeightsExtra, RR.matricesWeights._updatable), JR.setIndices(RR.indices, null)
        }
        if (RR.XM) {
          JR.XM = [];
          for (let GR = 0; GR < RR.XM.length; GR++) {
            const yR = RR.XM[GR];
            qR.b.AddToMesh(yR.materialIndex, yR.verticesStart, yR.verticesCount, yR.indexStart, yR.indexCount, JR)
          }
        }
        JR._shouldGenerateFlatShading && (JR.convertToFlatShadedMesh(), JR._shouldGenerateFlatShading = !1), JR.computeWorldMatrix(!0), GR.onMeshImportedObservable.notifyObservers(JR)
      }
      static _CleanMatricesWeights(RR, JR) {
        const GR = .001;
        if (!iR.c.CleanBoneMatrixWeights) return;
        let yR;
        if (!(RR.skeletonId > -1)) return;
        {
          const GR = JR.jH().getLastSkeletonById(RR.skeletonId);
          if (!GR) return;
          yR = GR.bones.length
        }
        const tR = JR.getVerticesData(ZR.l.MatricesIndicesKind),
          uR = JR.getVerticesData(ZR.l.MatricesIndicesExtraKind),
          qR = RR.matricesWeights,
          fR = RR.matricesWeightsExtra,
          VR = RR.numBoneInfluencer,
          KR = qR.length;
        for (let ZR = 0; ZR < KR; ZR += 4) {
          let RR = 0,
            JR = -1;
          for (let yR = 0; yR < 4; yR++) {
            const tR = qR[ZR + yR];
            RR += tR, tR < GR && JR < 0 && (JR = yR)
          }
          if (fR)
            for (let yR = 0; yR < 4; yR++) {
              const tR = fR[ZR + yR];
              RR += tR, tR < GR && JR < 0 && (JR = yR + 4)
            }
          if ((JR < 0 || JR > VR - 1) && (JR = VR - 1), RR > GR) {
            const JR = 1 / RR;
            for (let RR = 0; RR < 4; RR++) qR[ZR + RR] *= JR;
            if (fR)
              for (let RR = 0; RR < 4; RR++) fR[ZR + RR] *= JR
          } else JR >= 4 ? (fR[ZR + JR - 4] = 1 - RR, uR[ZR + JR - 4] = yR) : (qR[ZR + JR] = 1 - RR, tR[ZR + JR] = yR)
        }
        JR.setVerticesData(ZR.l.MatricesIndicesKind, tR), RR.matricesWeightsExtra && JR.setVerticesData(ZR.l.MatricesIndicesExtraKind, uR)
      }
      static Parse(RR, JR, GR) {
        const tR = new nR(RR.id, JR, void 0, RR.updatable);
        return tR._loadedUniqueId = RR.uniqueId, wR.d && wR.d.AddTagsTo(tR, RR.tags), RR.delayLoadingFile ? (tR.delayLoadState = 4, tR.delayLoadingFile = GR + RR.delayLoadingFile, tR._boundingInfo = new fR.c(yR.r.FromArray(RR.boundingBoxMinimum), yR.r.FromArray(RR.boundingBoxMaximum)), tR._delayInfo = [], RR.hasUVs && tR._delayInfo.push(ZR.l.UVKind), RR.hasUVs2 && tR._delayInfo.push(ZR.l.UV2Kind), RR.hasUVs3 && tR._delayInfo.push(ZR.l.UV3Kind), RR.hasUVs4 && tR._delayInfo.push(ZR.l.UV4Kind), RR.hasUVs5 && tR._delayInfo.push(ZR.l.UV5Kind), RR.hasUVs6 && tR._delayInfo.push(ZR.l.UV6Kind), RR.hasColors && tR._delayInfo.push(ZR.l.ColorKind), RR.hasMatricesIndices && tR._delayInfo.push(ZR.l.MatricesIndicesKind), RR.hasMatricesWeights && tR._delayInfo.push(ZR.l.MatricesWeightsKind), tR._delayLoadingFunction = uR.c.ImportVertexData) : uR.c.ImportVertexData(RR, tR), JR.pushGeometry(tR, !0), tR
      }
    }
  },
  42003: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      f: () => eR
    });
    var yR = GR(38204),
      tR = GR(39914),
      uR = GR(41974),
      ZR = GR(41941),
      qR = GR(39912),
      iR = GR(41979),
      fR = GR(41663),
      VR = GR(38253);
    class KR extends uR.b {
      constructor(RR, JR) {
        super(RR, JR.jH()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, JR.YRR(this), this._sourceMesh = JR, this._unIndexed = JR._unIndexed, this.position.vN(JR.position), this.rotation.vN(JR.rotation), this.MK.vN(JR.MK), JR.rotationQuaternion && (this.rotationQuaternion = JR.rotationQuaternion.clone()), this.animations = JR.animations.slice();
        for (const GR of JR.getAnimationRanges()) null != GR && this.createAnimationRange(GR.name, GR.from, GR.to);
        if (this.infiniteDistance = JR.infiniteDistance, this.setPivotMatrix(JR.getPivotMatrix()), JR.skeleton || JR.morphTargetManager || !JR.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const RR = JR.Tm();
          this.buildBoundingInfo(RR.minimum, RR.maximum)
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
      set receiveShadows(RR) {
        this._sourceMesh?.receiveShadows !== RR && tR.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(RR) {
        this._sourceMesh?.material !== RR && tR.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(RR) {
        this._sourceMesh?.visibility !== RR && tR.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(RR) {
        this._sourceMesh?.skeleton !== RR && tR.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(RR) {
        this._sourceMesh && RR !== this._sourceMesh.renderingGroupId && tR.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(RR) {
        this._sourceMesh && RR !== this._sourceMesh.meshBlendingTag && tR.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get IuR() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(RR) {
        return this._sourceMesh.createInstance(RR)
      }
      isReady() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(RR, !0)
      }
      getVerticesData(RR, JR, GR) {
        return this._sourceMesh.getVerticesData(RR, JR, GR)
      }
      copyVerticesData(RR, JR) {
        this._sourceMesh.copyVerticesData(RR, JR)
      }
      getVertexBuffer(RR, JR) {
        return this._sourceMesh.getVertexBuffer(RR, JR)
      }
      setVerticesData(RR, JR, GR, yR) {
        return this.IuR && this.IuR.setVerticesData(RR, JR, GR, yR), this.IuR
      }
      updateVerticesData(RR, JR, GR, yR) {
        return this.IuR && this.IuR.updateVerticesData(RR, JR, GR, yR), this.IuR
      }
      setIndices(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.IuR && this.IuR.setIndices(RR, JR), this.IuR
      }
      isVerticesDataPresent(RR) {
        return this._sourceMesh.isVerticesDataPresent(RR)
      }
      NuR() {
        return this._sourceMesh.NuR()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let RR, JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.Tm().isLocked) return this;
        RR = "object" === typeof JR ? JR : {
          applySkeleton: JR,
          applyMorph: GR
        };
        const yR = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(RR, null, fR.l.PositionKind), yR), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(RR, JR) {
        if (super._activate(RR, JR), this._sourceMesh.XM || tR.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, RR), JR) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== iR.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new yR.e);
          const RR = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, yR.l.Fe[7].vN(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.vN(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.vN(yR.l.Fe[7]), this._currentLOD._masterMesh = RR, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get sH() {
        return !0
      }
      getLOD(RR) {
        if (!RR) return this;
        const JR = this.IuR.getLODLevels();
        if (JR && 0 !== JR.length) {
          const JR = this.Tm();
          this._currentLOD = this.IuR.getLOD(RR, JR.euR)
        } else this._currentLOD = this.IuR;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(RR) {
        return this.IuR._preActivateForIntermediateRendering(RR)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.XM)
          for (let RR = 0; RR < this._sourceMesh.XM.length; RR++) this._sourceMesh.XM[RR].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.Tm().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(RR);
        if (qR.b.DeepCopy(this, yR, ["name", "XM", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "IuR", "sH", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "PuR", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "tiR", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), JR && (yR.parent = JR), !GR)
          for (let tR = 0; tR < this.jH().meshes.length; tR++) {
            const RR = this.jH().meshes[tR];
            RR.parent === this && RR.clone(RR.name, yR)
          }
        return yR.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(yR), yR
      }
      dispose(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.QRR(this), super.dispose(RR, JR)
      }
      _serializeAsParent(RR) {
        super._serializeAsParent(RR), RR.parentId = this._sourceMesh.uniqueId, RR.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = this.clone("Clone of " + (this.name || this.id), RR || this.parent, !0, JR && JR.newSourcedMesh);
        yR && GR && GR(this, yR);
        for (const tR of this.getChildTransformNodes(!0)) tR.instantiateHierarchy(yR, JR, GR);
        return yR
      }
    }
    let wR = !1;

    function rR(RR, JR, GR, yR, tR) {
      for (let uR = 0; uR < JR.length; uR++) {
        const ZR = RR[JR[uR]] ?? 0,
          qR = tR + GR[uR];
        ZR.toArray ? ZR.toArray(yR, qR) : ZR.copyToArray ? ZR.copyToArray(yR, qR) : yR[qR] = ZR
      }
    }

    function eR() {
      wR || (wR = !0, ZR.e._instancedMeshFactory = (RR, JR) => {
        const GR = new KR(RR, JR);
        if (JR.Im) {
          GR.Im = {};
          for (const RR in JR.Im) GR.Im[RR] = JR.Im[RR]
        }
        return GR
      }, ZR.e.prototype.Am = function(RR, JR) {
        if (!this.Im) {
          this.Im = {};
          for (const RR of this.instances) RR.Im = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.ke().getCaps().vertexArrayObject ? {} : void 0
        }), this.Im[RR] = null, this._userInstancedBuffersStorage.strides[RR] = JR;
        const GR = this._userInstancedBuffersStorage;
        GR.interleavedKinds = [], GR.interleavedOffsets = [], GR.interleavedRowStride = 0;
        for (const yR in GR.strides) GR.interleavedKinds.push(yR), GR.interleavedOffsets.push(GR.interleavedRowStride), GR.interleavedRowStride += GR.strides[yR];
        GR.interleavedData = new Float32Array(32 * GR.interleavedRowStride);
        for (const yR in GR.interleavedBuffers) GR.interleavedBuffers[yR].buffer.dispose();
        GR.interleavedBuffers = {}, GR.vertexBuffers[RR] = null;
        for (const yR of this.instances) yR.Im[RR] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, ZR.e.prototype._processInstancedBuffers = function(RR, JR) {
        const GR = this._userInstancedBuffersStorage,
          yR = GR.interleavedRowStride;
        if (!yR) return;
        const tR = RR ? RR.length : 0,
          uR = (tR + 1) * yR;
        let ZR = GR.interleavedData;
        if (ZR.length < uR) {
          let RR = ZR.length;
          for (; RR < uR;) RR *= 2;
          ZR = GR.interleavedData = new Float32Array(RR)
        }
        const qR = GR.interleavedKinds,
          iR = GR.interleavedOffsets;
        let VR = 0;
        JR && (rR(this.Im, qR, iR, ZR, VR), VR += yR);
        for (let fR = 0; fR < tR; fR++) rR(RR[fR].Im, qR, iR, ZR, VR), VR += yR;
        let KR = "shared",
          wR = GR.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (KR = this._instanceDataStorage.engine.currentRenderPassId, GR.renderPasses || (GR.renderPasses = {}), GR.renderPasses[KR] || (GR.renderPasses[KR] = {}), wR = GR.renderPasses[KR]);
        const eR = GR.interleavedBuffers[KR];
        let aR = !eR || eR.data !== ZR;
        for (let fR = 0; !aR && fR < qR.length; fR++) aR = !wR[qR[fR]];
        if (!aR) return void eR.buffer.updateDirectly(ZR, 0);
        eR?.buffer.dispose();
        const LR = new fR.d(this.ke(), ZR, !0, yR, !1, !0);
        for (let fR = 0; fR < qR.length; fR++) {
          const RR = qR[fR],
            JR = LR.createVertexBuffer(RR, iR[fR], GR.strides[RR]);
          JR.hashCode += JR.byteOffset * 2 ** 24, wR[RR] = JR
        }
        GR.interleavedBuffers[KR] = {
          buffer: LR,
          data: ZR
        }, this._invalidateInstanceVertexArrayObject()
      }, ZR.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const RR in this._userInstancedBuffersStorage.vertexArrayObjects) this.ke().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[RR]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, ZR.e.prototype._disposeInstanceSpecificData = function() {
        for (const JR in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[JR].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const JR in this.Im) this._userInstancedBuffersStorage.vertexBuffers[JR] && this._userInstancedBuffersStorage.vertexBuffers[JR].dispose();
        const RR = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (RR) {
          for (const JR in RR) RR[JR].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.Im = {}
      }, (0, VR.f)("BABYLON.InstancedMesh", KR))
    }
  },
  41941: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => TR,
      g: () => hR,
      h: () => jR
    });
    var yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR = GR(38233),
      UR = GR(41616),
      WR = GR(41564),
      AR = GR(39912),
      CR = GR(41547),
      XR = GR(41949),
      MR = GR(41732),
      BR = GR(38204),
      lR = GR(38331),
      pR = GR(41741),
      gR = GR(41663),
      bR = GR(41951),
      vR = GR(41957),
      OR = GR(41974),
      xR = GR(41813),
      NR = GR(41810),
      DR = GR(41906),
      HR = GR(41982),
      oR = GR(41963),
      cR = GR(41542),
      PR = GR(39914),
      IR = GR(38253),
      mR = GR(41407),
      zR = GR(41693);
    class SR {
      constructor(RR, JR) {
        this.distanceOrScreenCoverage = RR, this.mesh = JR
      }
    }
    class jR {}
    class dR {
      constructor() {
        this.batchCache = new YR(this), this.batchCacheReplacementModeInFrozenMode = new YR(this), this.instancesBufferSize = 2048
      }
    }
    class ER {
      constructor() {
        this.renderPasses = {}
      }
    }
    class YR {
      constructor(RR) {
        this.parent = RR, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class kR {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class QR {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const FR = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class TR extends OR.b {
      static _GetDefaultSideOrientation(RR) {
        return RR || TR.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(RR) {
        this._internalMeshDataInfo._useLODScreenCoverage = RR, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(RR) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== RR && (RR && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(gR.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(gR.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = RR, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new nR.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new nR.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new nR.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new nR.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new nR.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(RR) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(RR)
      }
      get PuR() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(RR) {
        this._internalMeshDataInfo._forcedInstanceCount = RR
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(RR) {
        this._internalMeshDataInfo._sideOrientation = RR, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === RR || !this._scene.useRightHandedSystem && 0 === RR
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(RR) {
        this.sideOrientation = RR, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(RR) {
        this._internalMeshDataInfo._overrideRenderingFillMode = RR
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(RR) {
        RR && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (RR.sideOrientation = null), this._setMaterial(RR)
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
      set isUnIndexed(RR) {
        this._unIndexed !== RR && (this._unIndexed = RR, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const RR = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return RR ? RR.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const RR = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return RR ? RR.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(RR) {
        this._instanceDataStorage.manualUpdate = RR
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(RR) {
        this._instanceDataStorage.previousManualUpdate = RR
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(RR) {
        this._instanceDataStorage.forceMatrixUpdates = RR
      }
      _copySource(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tR = this.jH();
        if (RR._geometry && RR._geometry.applyToMesh(this), AR.b.DeepCopy(RR, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "PuR", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "sH", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "tiR", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = RR, tR.useClonedMeshMap && (RR._internalMeshDataInfo.meshMap || (RR._internalMeshDataInfo.meshMap = {}), RR._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = RR._originalBuilderSideOrientation, this._creationDataStorage = RR._creationDataStorage, RR._ranges) {
          const JR = RR._ranges;
          for (const RR in JR) Object.prototype.hasOwnProperty.call(JR, RR) && JR[RR] && this.createAnimationRange(RR, JR[RR].from, JR[RR].to)
        }
        if (RR.metadata && RR.metadata.clone ? this.metadata = RR.metadata.clone() : this.metadata = RR.metadata, this._internalMetadata = RR._internalMetadata, this.meshBlendingTag = RR.meshBlendingTag, CR.d && CR.d.HasTags(RR) && CR.d.AddTagsTo(this, CR.d.GetTags(RR, !0)), this.JA(RR.isEnabled(!1)), this.parent = RR.parent, this.setPivotMatrix(RR.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + RR.id, this.material = RR.material, !JR) {
          const tR = RR.getDescendants(!0);
          for (let RR = 0; RR < tR.length; RR++) {
            const uR = tR[RR];
            uR._isMesh ? (FR.parent = this, FR.doNotCloneChildren = JR, FR.clonePhysicsImpostor = GR, FR.cloneThinInstances = yR, uR.clone(this.name + "." + uR.name, FR)) : uR.clone && uR.clone(this.name + "." + uR.name, this)
          }
        }
        if (RR.morphTargetManager && (this.morphTargetManager = RR.morphTargetManager), (0, mR.c)(tR.getPhysicsEngine)) {
          const JR = tR.getPhysicsEngine();
          if (GR && JR)
            if (1 === JR.getPluginVersion()) {
              const GR = JR.getImpostorForPhysicsObject(RR);
              GR && (this.physicsImpostor = GR.clone(this))
            } else 2 === JR.getPluginVersion() && RR.physicsBody && RR.physicsBody.clone(this)
        }
        for (let uR = 0; uR < tR.pM.length; uR++) {
          const JR = tR.pM[uR];
          JR.emitter === RR && JR.clone(JR.name, this)
        }
        if (this.skeleton = RR.skeleton, yR && (RR._thinInstanceDataStorage.matrixData ? (this.tJR("matrix", new Float32Array(RR._thinInstanceDataStorage.matrixData), 16, !RR._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = RR._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = RR._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = RR._thinInstanceDataStorage.matrixBufferSize, RR._userThinInstanceBuffersStorage)) {
          const JR = RR._userThinInstanceBuffersStorage;
          for (const RR in JR.data) this.tJR(RR, new Float32Array(JR.data[RR]), JR.strides[RR], !JR.vertexBuffers?.[RR]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[RR] = JR.sizes[RR]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(RR) {
        let JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uR = arguments.length > 4 ? arguments[4] : void 0,
          ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(RR, GR), this._internalMeshDataInfo = new QR, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new kR, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = TR.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, GR = this.jH(), this._instanceDataStorage = new ER, this._instanceDataStorage.engine = GR.ke(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new dR), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (RR, JR, GR) => {
          RR && GR && (this._uniformBuffer ? this.transferToEffect(JR) : GR.bindOnlyWorldMatrix(JR))
        };
        let qR = !1;
        if (yR && void 0 === yR._addToSceneRootNodes) {
          const RR = yR;
          JR = RR.parent ?? null, tR = RR.source ?? null, uR = RR.doNotCloneChildren ?? !1, ZR = RR.clonePhysicsImpostor ?? !0, qR = RR.cloneThinInstances ?? !1
        } else JR = yR;
        tR && this._copySource(tR, uR, ZR, qR), null !== JR && (this.parent = JR), this._instanceDataStorage.hardwareInstancedRendering = this.ke().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = RR => {
          RR.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new nR.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), tR && tR.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = 0 === this.getTotalVertices() || JR && JR.doNotInstantiate && (!0 === JR.doNotInstantiate || JR.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), RR || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        yR.parent = RR || this.parent, yR.position = this.position.clone(), yR.MK = this.MK.clone(), this.rotationQuaternion ? yR.rotationQuaternion = this.rotationQuaternion.clone() : yR.rotation = this.rotation.clone(), GR && GR(this, yR);
        for (const tR of this.getChildTransformNodes(!0)) "InstancedMesh" === tR.getClassName() && "Mesh" === yR.getClassName() && tR.IuR === this ? tR.instantiateHierarchy(yR, {
          doNotInstantiate: JR && JR.doNotInstantiate || !1,
          newSourcedMesh: yR
        }, GR) : tR.instantiateHierarchy(yR, JR, GR);
        return yR
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(RR) {
        let JR = super.toString(RR);
        if (JR += ", n vertices: " + this.getTotalVertices(), JR += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let GR = 0; GR < this.animations.length; GR++) JR += ", animation[0]: " + this.animations[GR].toString(RR);
        if (RR)
          if (this._geometry) {
            const RR = this.NuR(),
              GR = this.getVerticesData(gR.l.PositionKind);
            GR && RR && (JR += ", flat shading: " + (GR.length / 3 === RR.length ? "YES" : "NO"))
          } else JR += ", flat shading: UNKNOWN";
        return JR
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const RR of this.instances) RR._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const RR = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((JR, GR) => JR.distanceOrScreenCoverage < GR.distanceOrScreenCoverage ? RR : JR.distanceOrScreenCoverage > GR.distanceOrScreenCoverage ? -RR : 0))
      }
      addLODLevel(RR, JR) {
        if (JR && JR._masterMesh) return PR.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const GR = new SR(RR, JR);
        return this._internalMeshDataInfo._LODLevels.push(GR), JR && (JR._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(RR) {
        const JR = this._internalMeshDataInfo;
        for (let GR = 0; GR < JR._LODLevels.length; GR++) {
          const yR = JR._LODLevels[GR];
          if (yR.distanceOrScreenCoverage === RR) return yR.mesh
        }
        return null
      }
      removeLODLevel(RR) {
        const JR = this._internalMeshDataInfo;
        for (let GR = 0; GR < JR._LODLevels.length; GR++) JR._LODLevels[GR].mesh === RR && (JR._LODLevels.splice(GR, 1), RR && (RR._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(RR, JR) {
        const GR = this._internalMeshDataInfo;
        if (!GR._LODLevels || 0 === GR._LODLevels.length) return this;
        const yR = JR || this.Tm().euR,
          tR = RR.mode === MR.b.ORTHOGRAPHIC_CAMERA ? RR.minZ : yR.centerWorld.subtract(RR.globalPosition).length();
        let uR = tR,
          ZR = 1;
        if (GR._useLODScreenCoverage) {
          const JR = RR.screenArea;
          let GR = yR.radiusWorld * RR.minZ / tR;
          GR = GR * GR * Math.PI, uR = GR / JR, ZR = -1
        }
        if (ZR * GR._LODLevels[GR._LODLevels.length - 1].distanceOrScreenCoverage > ZR * uR) return this.onLODLevelSelection && this.onLODLevelSelection(uR, this, this), this;
        for (let qR = 0; qR < GR._LODLevels.length; qR++) {
          const RR = GR._LODLevels[qR];
          if (ZR * RR.distanceOrScreenCoverage < ZR * uR) {
            if (RR.mesh) {
              if (4 === RR.mesh.delayLoadState) return RR.mesh._checkDelayState(), this;
              if (2 === RR.mesh.delayLoadState) return this;
              RR.mesh._preActivate(), RR.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(uR, this, RR.mesh), RR.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(uR, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(RR, JR, GR, yR) {
        if (!this._geometry) return null;
        let tR = yR ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[RR]?.getFloatData(this.instances.length + 1, GR || JR && 1 !== this._geometry.meshes.length);
        return tR || (tR = this._geometry.getVerticesData(RR, JR, GR)), tR
      }
      copyVerticesData(RR, JR) {
        this._geometry && this._geometry.copyVerticesData(RR, JR)
      }
      getVertexBuffer(RR, JR) {
        return this._geometry ? (JR ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[RR]) ?? this._geometry.getVertexBuffer(RR) : null
      }
      isVerticesDataPresent(RR, JR) {
        return this._geometry ? !JR && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[RR] || this._geometry.isVerticesDataPresent(RR) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(RR)
      }
      isVertexBufferUpdatable(RR, JR) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(RR);
        if (!JR) {
          const JR = this._userInstancedBuffersStorage?.vertexBuffers[RR];
          if (JR) return JR.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(RR)
      }
      getVerticesDataKinds(RR) {
        if (!this._geometry) {
          const RR = [];
          if (this._delayInfo)
            for (const JR of this._delayInfo) RR.push(JR);
          return RR
        }
        const JR = this._geometry.getVerticesDataKinds();
        if (!RR && this._userInstancedBuffersStorage)
          for (const GR in this._userInstancedBuffersStorage.vertexBuffers) - 1 === JR.indexOf(GR) && JR.push(GR);
        return JR
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      NuR(RR, JR) {
        return this._geometry ? this._geometry.NuR(RR, JR) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(RR)) return !1;
        if (!this.XM || 0 === this.XM.length) return !0;
        if (!RR) return !0;
        const GR = this.ke(),
          yR = this.jH(),
          tR = JR || GR.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const uR = this.material || yR.defaultMaterial;
        if (uR)
          if (uR._storeEffectOnSubMeshes)
            for (const qR of this.XM) {
              const RR = qR.he();
              if (RR)
                if (RR._storeEffectOnSubMeshes) {
                  if (!RR.isReadyForSubMesh(this, qR, tR)) return !1
                } else if (!RR.isReady(this, tR)) return !1
            } else if (!uR.isReady(this, tR)) return !1;
        const ZR = GR.currentRenderPassId;
        for (const qR of this.lightSources) {
          const RR = qR.getShadowGenerators();
          if (!RR) continue;
          const JR = RR.values();
          for (let yR = JR.next(); !0 !== yR.done; yR = JR.next()) {
            const RR = yR.value;
            if (RR && (!RR.getShadowMap()?.renderList || RR.getShadowMap()?.renderList && -1 !== RR.getShadowMap()?.renderList?.indexOf(this))) {
              const JR = RR.getShadowMap().renderPassIds ?? [GR.currentRenderPassId];
              for (let yR = 0; yR < JR.length; ++yR) {
                GR.currentRenderPassId = JR[yR];
                for (const JR of this.XM)
                  if (!RR.isReady(JR, tR, JR.he()?.needAlphaBlendingForMesh(this) ?? !1)) return GR.currentRenderPassId = ZR, !1
              }
              GR.currentRenderPassId = ZR
            }
          }
        }
        for (const qR of this._internalMeshDataInfo._LODLevels)
          if (qR.mesh && !qR.mesh.isReady(tR)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Ra() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(RR) {
        this._instanceDataStorage.overridenInstanceCount = RR
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const RR = this._instanceDataStorage.engine.currentRenderPassId;
        let JR = this._instanceDataStorage.renderPasses[RR];
        return JR || (JR = new dR, this._instanceDataStorage.renderPasses[RR] = JR), JR
      }
      _preActivate() {
        const RR = this._internalMeshDataInfo,
          JR = this.jH().getRenderId();
        return RR._preActivateId === JR || (RR._preActivateId = JR, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(RR) {
        const JR = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return JR.visibleInstances && (JR.visibleInstances.intermediateDefaultRenderId = RR), this
      }
      _registerInstanceForRenderId(RR, JR) {
        const GR = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return GR.visibleInstances || (GR.visibleInstances = {
          defaultRenderId: JR,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), GR.visibleInstances[JR] || (void 0 === GR.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete GR.visibleInstances[GR.previousRenderId], GR.previousRenderId = JR, GR.visibleInstances[JR] = new Array), GR.visibleInstances[JR].push(RR), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.se || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let RR, JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.Tm().isLocked) return this;
        RR = "object" === typeof JR ? JR : {
          applySkeleton: JR,
          applyMorph: GR
        };
        const yR = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(RR, null, gR.l.PositionKind), yR), this
      }
      _createGlobalSubMesh(RR) {
        const JR = this.getTotalVertices();
        if (!JR || !this.NuR()) return null;
        if (this.XM && this.XM.length > 0) {
          const GR = this.NuR();
          if (!GR) return null;
          const yR = GR.length;
          let tR = !1;
          if (RR) tR = !0;
          else
            for (const RR of this.XM) {
              if (RR.indexStart + RR.indexCount > yR) {
                tR = !0;
                break
              }
              if (RR.verticesStart + RR.verticesCount > JR) {
                tR = !0;
                break
              }
            }
          if (!tR) return this.XM[0]
        }
        return this.releaseSubMeshes(), new xR.b(0, 0, JR, 0, this.getTotalIndices() || (this.isUnIndexed ? JR : 0), this)
      }
      subdivide(RR) {
        if (RR < 1) return;
        const JR = this.getTotalIndices();
        let GR = JR / RR | 0,
          yR = 0;
        for (; GR % 3 !== 0;) GR++;
        this.releaseSubMeshes();
        for (let tR = 0; tR < RR && !(yR >= JR); tR++) xR.b.CreateFromIndices(0, yR, yR + GR >= JR ? JR - yR : GR, this, void 0, !1), yR += GR;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(RR, JR, GR, yR);
        else {
          const yR = new bR.c;
          yR.set(JR, RR);
          const tR = this.jH();
          new vR.e(vR.e.RandomId(), tR, yR, GR, this)
        }
        return this
      }
      removeVerticesData(RR) {
        this._geometry && this._geometry.removeVerticesData(RR)
      }
      markVerticesDataAsUpdatable(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this.getVertexBuffer(RR);
        GR && GR.isUpdatable() !== JR && this.setVerticesData(RR, this.getVerticesData(RR), JR)
      }
      setVerticesBuffer(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = vR.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(RR, GR, JR), this
      }
      updateVerticesData(RR, JR, GR, yR) {
        return this._geometry ? (yR ? (this.makeGeometryUnique(), this.updateVerticesData(RR, JR, GR, !1)) : this._geometry.updateVerticesData(RR, JR, GR), this) : this
      }
      updateMeshPositions(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this.getVerticesData(gR.l.PositionKind);
        if (!GR) return this;
        if (RR(GR), this.updateVerticesData(gR.l.PositionKind, GR, !1, !1), JR) {
          const RR = this.NuR(),
            JR = this.getVerticesData(gR.l.NormalKind);
          if (!JR) return this;
          bR.c.ComputeNormals(GR, RR, JR), this.updateVerticesData(gR.l.NormalKind, JR, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const RR = this._geometry,
          JR = this._geometry.copy(vR.e.RandomId());
        return RR.releaseForMesh(this, !0), JR.applyToMesh(this), this
      }
      setIndexBuffer(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tR = this._geometry;
        tR || (tR = new vR.e(vR.e.RandomId(), this.jH(), void 0, void 0, this)), tR.setIndexBuffer(RR, JR, GR, yR)
      }
      setIndices(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(RR, JR, GR, yR);
        else {
          const yR = new bR.c;
          yR.indices = RR;
          const tR = this.jH();
          new vR.e(vR.e.RandomId(), tR, yR, GR, this, JR)
        }
        return this
      }
      updateIndices(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(RR, JR, GR), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(RR, JR, GR) {
        let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const tR = this.jH().ke();
        let uR;
        if (this._unIndexed)
          if (this._getRenderingFillMode(GR) === NR.d.WireFrameFillMode) uR = RR._getLinesIndexBuffer(this.NuR(), tR);
          else uR = null;
        else switch (this._getRenderingFillMode(GR)) {
          case NR.d.PointFillMode:
            uR = null;
            break;
          case NR.d.WireFrameFillMode:
            uR = RR._getLinesIndexBuffer(this.NuR(), tR);
            break;
          default:
          case NR.d.TriangleFillMode:
            uR = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(JR, uR, yR)
      }
      _bindDirect(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(RR), GR && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const RR = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const JR in RR) this._userInstancedBuffersStorage.vertexBuffers[JR] = RR[JR]
          }
          this._geometry._bind(RR, JR, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(RR, JR);
        return this
      }
      _draw(RR, JR, GR) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const yR = this.jH().ke(),
          tR = yR._currentMaterialContext,
          uR = tR && tR.useVertexPulling;
        return this._unIndexed && JR !== NR.d.WireFrameFillMode || JR == NR.d.PointFillMode ? yR.drawArraysType(JR, RR.verticesStart, RR.verticesCount, this.forcedInstanceCount || GR) : JR == NR.d.WireFrameFillMode ? yR.drawElementsType(JR, 0, RR._linesIndexCount, this.forcedInstanceCount || GR) : uR ? yR.drawArraysType(JR, RR.indexStart, RR.indexCount, this.forcedInstanceCount || GR) : yR.drawElementsType(JR, RR.indexStart, RR.indexCount, this.forcedInstanceCount || GR), this
      }
      registerBeforeRender(RR) {
        return this.onBeforeRenderObservable.add(RR), this
      }
      unregisterBeforeRender(RR) {
        return this.onBeforeRenderObservable.removeCallback(RR), this
      }
      registerAfterRender(RR) {
        return this.onAfterRenderObservable.add(RR), this
      }
      unregisterAfterRender(RR) {
        return this.onAfterRenderObservable.removeCallback(RR), this
      }
      _getInstancesRenderList(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (JR) return GR.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[RR] = !1, GR.batchCacheReplacementModeInFrozenMode.renderSelf[RR] = !0, GR.batchCacheReplacementModeInFrozenMode;
          if (GR.previousBatch) return GR.previousBatch
        }
        const yR = this.jH(),
          tR = yR._isInIntermediateRendering(),
          uR = tR ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          ZR = GR.batchCache;
        if (ZR.mustReturn = !1, ZR.renderSelf[RR] = JR || !uR && this.isEnabled() && this.isVisible, ZR.visibleInstances[RR] = null, GR.visibleInstances && !JR) {
          const JR = GR.visibleInstances,
            uR = yR.getRenderId(),
            qR = tR ? JR.intermediateDefaultRenderId : JR.defaultRenderId;
          ZR.visibleInstances[RR] = JR[uR], !ZR.visibleInstances[RR] && qR && (ZR.visibleInstances[RR] = JR[qR])
        }
        return ZR.hardwareInstancedRendering[RR] = !JR && this._instanceDataStorage.hardwareInstancedRendering && null !== ZR.visibleInstances[RR] && void 0 !== ZR.visibleInstances[RR], GR.previousBatch = ZR, ZR
      }
      _updateInstancedBuffers(RR, JR, GR, yR, tR, uR) {
        const ZR = JR.visibleInstances[RR._id],
          qR = ZR ? ZR.length : 0,
          iR = JR.parent,
          fR = this._instanceDataStorage;
        let VR = iR.instancesBuffer,
          KR = iR.instancesPreviousBuffer,
          wR = 0,
          rR = 0;
        const eR = JR.renderSelf[RR._id],
          aR = this._scene.floatingOriginOffset,
          LR = !VR || GR !== iR.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !iR.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || fR.isFrozen && !LR) rR = (eR ? 1 : 0) + qR;
        else {
          const JR = this.getWorldMatrix();
          if (eR) {
            this._scene.needsPreviousWorldMatrices && (fR.masterMeshPreviousWorldMatrix ? (fR.masterMeshPreviousWorldMatrix.copyToArray(iR.instancesPreviousData, wR), fR.masterMeshPreviousWorldMatrix.vN(JR)) : (fR.masterMeshPreviousWorldMatrix = JR.clone(), fR.masterMeshPreviousWorldMatrix.copyToArray(iR.instancesPreviousData, wR))), JR.copyToArray(iR.instancesData, wR);
            const RR = JR.QtR();
            iR.instancesData[wR + 12] = RR[12] - aR.x, iR.instancesData[wR + 13] = RR[13] - aR.y, iR.instancesData[wR + 14] = RR[14] - aR.z, wR += 16, rR++
          }
          if (ZR) {
            if (TR.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && RR.he()?.needAlphaBlendingForMesh(RR.getRenderingMesh())) {
              const RR = this._scene.activeCamera.globalPosition;
              for (let JR = 0; JR < ZR.length; JR++) {
                const GR = ZR[JR];
                GR._distanceToCamera = BR.r.Distance(GR.Tm().euR.centerWorld, RR)
              }
              ZR.sort(((RR, JR) => RR._distanceToCamera > JR._distanceToCamera ? -1 : RR._distanceToCamera < JR._distanceToCamera ? 1 : 0))
            }
            for (let RR = 0; RR < ZR.length; RR++) {
              const JR = ZR[RR],
                GR = JR.getWorldMatrix();
              GR.copyToArray(iR.instancesData, wR), this._scene.needsPreviousWorldMatrices && (JR._previousWorldMatrix ? (JR._previousWorldMatrix.copyToArray(iR.instancesPreviousData, wR), JR._previousWorldMatrix.vN(GR)) : (JR._previousWorldMatrix = GR.clone(), JR._previousWorldMatrix.copyToArray(iR.instancesPreviousData, wR)));
              const yR = GR.QtR();
              iR.instancesData[wR + 12] = yR[12] - aR.x, iR.instancesData[wR + 13] = yR[13] - aR.y, iR.instancesData[wR + 14] = yR[14] - aR.z, wR += 16, rR++
            }
          }
        }
        if (LR) {
          let RR;
          if (VR && VR.dispose(), KR && KR.dispose(), VR = new gR.d(yR, iR.instancesData, !0, 16, !1, !0), iR.instancesBuffer = VR, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.ke().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) RR = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const JR = this._instanceDataStorage.engine.currentRenderPassId;
            RR = this._userInstancedBuffersStorage.renderPasses[JR], RR || (this._userInstancedBuffersStorage.renderPasses[JR] = RR = {})
          }
          RR.world0 = VR.createVertexBuffer("world0", 0, 4), RR.world1 = VR.createVertexBuffer("world1", 4, 4), RR.world2 = VR.createVertexBuffer("world2", 8, 4), RR.world3 = VR.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (KR = new gR.d(yR, iR.instancesPreviousData, !0, 16, !1, !0), iR.instancesPreviousBuffer = KR, RR.previousWorld0 = KR.createVertexBuffer("previousWorld0", 0, 4), RR.previousWorld1 = KR.createVertexBuffer("previousWorld1", 4, 4), RR.previousWorld2 = KR.createVertexBuffer("previousWorld2", 8, 4), RR.previousWorld3 = KR.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (VR.updateDirectly(iR.instancesData, 0, rR), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || KR.updateDirectly(iR.instancesPreviousData, 0, rR));
        this._processInstancedBuffers(ZR, eR), uR && void 0 !== tR && (this.jH()._activeIndices.addCount(RR.indexCount * rR, !1), yR._currentDrawContext && (yR._currentDrawContext.useInstancing = !0), this._bind(RR, uR, tR), this._draw(RR, tR, rR)), !this._scene.needsPreviousWorldMatrices || LR || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || KR.updateDirectly(iR.instancesData, 0, rR)
      }
      _renderWithInstances(RR, JR, GR, yR, tR) {
        const uR = GR.visibleInstances[RR._id],
          ZR = uR ? uR.length : 0,
          qR = GR.parent,
          iR = qR.instancesBufferSize,
          fR = 16 * (ZR + 1) * 4;
        for (; qR.instancesBufferSize < fR;) qR.instancesBufferSize *= 2;
        return qR.instancesData && iR == qR.instancesBufferSize || (qR.instancesData = new Float32Array(qR.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !qR.instancesPreviousData || iR != qR.instancesBufferSize) && (qR.instancesPreviousData = new Float32Array(qR.instancesBufferSize / 4)), this._updateInstancedBuffers(RR, GR, iR, tR, JR, yR), tR.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(RR, JR, GR, yR) {
        const tR = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.jH()._activeIndices.addCount(RR.indexCount * tR, !1), yR._currentDrawContext && (yR._currentDrawContext.useInstancing = !0), this._bind(RR, GR, JR), this._draw(RR, JR, tR), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, tR) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), yR.unbindInstanceAttributes()
      }
      _processInstancedBuffers(RR, JR) {}
      _processRendering(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = this.jH(),
          fR = iR.ke();
        if (yR = this._getRenderingFillMode(yR), uR && JR.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(JR, yR, GR, fR), this;
        if (uR) this._renderWithInstances(JR, yR, tR, GR, fR);
        else {
          fR._currentDrawContext && (fR._currentDrawContext.useInstancing = !1);
          let GR = 0;
          tR.renderSelf[JR._id] && (ZR && ZR(!1, RR.getWorldMatrix(), qR), GR++, this._draw(JR, yR, this._instanceDataStorage.overridenInstanceCount));
          const uR = tR.visibleInstances[JR._id];
          if (uR) {
            const RR = uR.length;
            GR += RR;
            for (let GR = 0; GR < RR; GR++) {
              const RR = uR[GR].getWorldMatrix();
              ZR && ZR(!0, RR, qR), this._draw(JR, yR)
            }
          }
          iR._activeIndices.addCount(JR.indexCount * GR, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        RR?.instancesBuffer && (JR && RR.instancesBuffer.dispose(), RR.instancesBuffer = null), RR?.instancesPreviousBuffer && (JR && RR.instancesPreviousBuffer.dispose(), RR.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const JR in this._instanceDataStorage.renderPasses) {
          const GR = this._instanceDataStorage.renderPasses[JR];
          this._disposeInstanceDataStorageRenderPass(GR, RR)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, RR), this._userInstancedBuffersStorage) {
          for (const JR in this._userInstancedBuffersStorage.vertexBuffers) {
            const GR = this._userInstancedBuffersStorage.vertexBuffers[JR];
            GR && (RR && GR.dispose(), this._userInstancedBuffersStorage.vertexBuffers[JR] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(RR)
      }
      _releaseRenderPassId(RR) {
        const JR = this._instanceDataStorage.renderPasses[RR];
        if (JR && (this._disposeInstanceDataStorageRenderPass(JR, !0), delete this._instanceDataStorage.renderPasses[RR]), this._userInstancedBuffersStorage?.renderPasses) {
          const JR = this._userInstancedBuffersStorage.renderPasses[RR];
          if (JR)
            for (const RR in JR) JR[RR]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[RR]
        }
        const GR = this._userInstancedBuffersStorage?.interleavedBuffers;
        GR?.[RR] && (GR[RR].buffer.dispose(), delete GR[RR])
      }
      _freeze() {
        if (this.XM) {
          for (let RR = 0; RR < this.XM.length; RR++) this._getInstancesRenderList(RR);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const RR in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[RR].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const uR = this._scene.ke(),
          ZR = uR.currentRenderPassId;
        if (void 0 !== RR && (uR.currentRenderPassId = RR), yR)(!tR || tR && yR.isInFrustum(this._scene._frustumPlanes)) && this.render(yR, !!JR, GR);
        else
          for (let qR = 0; qR < this.XM.length; qR++) {
            const RR = this.XM[qR];
            (!tR || tR && RR.isInFrustum(this._scene._frustumPlanes)) && this.render(RR, !!JR, GR)
          }
        return void 0 !== RR && (uR.currentRenderPassId = ZR), this
      }
      directRender() {
        if (!this.XM) return this;
        for (const RR of this.XM) this.render(RR, !1);
        return this
      }
      render(RR, JR, GR) {
        const yR = this.jH(),
          tR = yR.ke();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const uR = yR.activeCameras?.length ?? 0,
          ZR = uR > 1 && yR.activeCamera === yR.activeCameras[0] || uR <= 1,
          qR = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== tR.currentRenderPassId;
        if (ZR && this._checkOcclusionQuery(qR) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const iR = this._getInstancesRenderList(RR._id, !!GR);
        if (iR.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let fR = 0,
          VR = null;
        this.ignoreCameraMaxZ && yR.activeCamera && !yR._isInIntermediateRendering() && (fR = yR.activeCamera.maxZ, VR = yR.activeCamera, yR.activeCamera.maxZ = 0, yR.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const KR = RR.getRenderingMesh(),
          wR = iR.hardwareInstancedRendering[RR._id] || KR.hasThinInstances || !!this._userInstancedBuffersStorage && !RR.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          rR = this._instanceDataStorage,
          eR = RR.he();
        if (!eR) return VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), this;
        if (rR.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === eR) {
          if (eR._storeEffectOnSubMeshes && !RR._drawWrapper?._wasPreviouslyReady || !eR._storeEffectOnSubMeshes && !eR._getDrawWrapper()._wasPreviouslyReady) return VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), this
        } else {
          if (eR._storeEffectOnSubMeshes) {
            if (!eR.isReadyForSubMesh(this, RR, wR)) return VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), this
          } else if (!eR.isReady(this, wR)) return VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = eR
        }
        if (JR) {
          const RR = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === RR.alphaModes.length) tR.setAlphaMode(RR.alphaMode);
          else
            for (let JR = 0; JR < RR.alphaModes.length; JR++) {
              const GR = RR.alphaModes[JR];
              tR.setAlphaMode(void 0 !== GR ? GR : 2, !1, JR)
            }
        }
        let aR;
        aR = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? RR._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const LR = aR?.effect ?? null;
        for (let MR = 0, BR = yR._beforeRenderingMeshStage; MR < BR.length; MR++) {
          BR[MR].action(this, RR, iR, LR)
        }
        if (!aR || !LR) return VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), this;
        const nR = GR || this;
        let UR;
        if (!rR.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const RR = nR._getWorldMatrixDeterminant();
          UR = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), RR < 0 && (UR = UR === NR.d.ClockWiseSideOrientation ? NR.d.CounterClockWiseSideOrientation : NR.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = UR
        }
        const WR = this._internalMeshDataInfo._effectiveMaterial._preBind(aR, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && tR.setDepthWrite(!0);
        const AR = this._internalMeshDataInfo._effectiveMaterial,
          CR = AR.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), wR || this._bind(RR, LR, CR, !1);
        const XR = nR.getWorldMatrix();
        AR._storeEffectOnSubMeshes ? AR.bindForSubMesh(XR, this, RR) : AR.bind(XR, this);
        try {
          DR.c._BindAttachmentsForEffect(tR, LR) && (!AR.backFaceCulling && AR.separateCullingPass && (tR.setState(!0, AR.zOffset, !1, !WR, AR.cullBackFaces, AR.stencil, AR.zOffsetUnits), this._processRendering(this, RR, LR, CR, iR, wR, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), tR.setState(!0, AR.zOffset, !1, WR, AR.cullBackFaces, AR.stencil, AR.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(RR)), this._processRendering(this, RR, LR, CR, iR, wR, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          DR.c._RestoreAttachments(tR)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let MR = 0, BR = yR._afterRenderingMeshStage; MR < BR.length; MR++) {
          BR[MR].action(this, RR, iR, LR)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), VR && (VR.maxZ = fR, yR.updateTransformMatrix(!0)), 2 !== yR.performancePriority || rR.isFrozen || this._freeze(), this
      }
      _renderRunFollower(RR, JR) {
        const GR = this._scene,
          yR = GR._engine;
        if (yR.isWebGPU || RR._mesh !== this || 0 !== this.instances.length || this.render !== TR.prototype.render) return !1;
        const tR = RR.he();
        if (!tR || tR !== GR._cachedMaterial || void 0 === tR._canBindRunFollower) return !1;
        const uR = RR._drawWrapper,
          ZR = uR?.effect;
        if (!ZR || ZR !== GR._cachedEffect || this.visibility !== GR._cachedVisibility || uR._forceRebindOnNextCall) return !1;
        const qR = this.hasThinInstances;
        if (!qR && this._userInstancedBuffersStorage) return !1;
        if (!uR._wasPreviouslyReady || uR._wasPreviouslyUsingInstances !== qR) return !1;
        const iR = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || GR._isInIntermediateRendering() || 0 !== GR._beforeRenderingMeshStage.length || 0 !== GR._afterRenderingMeshStage.length || iR._onBeforeRenderObservable?.hasObservers() || iR._onBeforeBindObservable?.hasObservers() || iR._onAfterRenderObservable?.hasObservers()) return !1;
        const fR = this.occlusionType;
        if (void 0 !== fR && fR !== OR.b.OCCLUSION_TYPE_NONE || !tR._canBindRunFollower(GR, yR, this, RR, ZR)) return !1;
        const VR = this._internalAbstractMeshDataInfo,
          KR = VR._isActiveIntermediate;
        KR ? VR._isActiveIntermediate = !1 : VR._isActive = !1;
        const wR = GR.activeCameras?.length ?? 0;
        (wR > 1 && GR.activeCamera === GR.activeCameras[0] || wR <= 1) && this._checkOcclusionQuery(!1);
        const rR = this._getInstancesRenderList(RR._id);
        if (rR.mustReturn) return !0;
        if (!qR && !rR.renderSelf[RR._id]) return KR ? VR._isActiveIntermediate = !0 : VR._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (iR._effectiveMaterial = tR, JR)
          if (1 === tR.alphaModes.length) yR.setAlphaMode(tR.alphaMode);
          else
            for (let aR = 0; aR < tR.alphaModes.length; aR++) {
              const RR = tR.alphaModes[aR];
              yR.setAlphaMode(void 0 !== RR ? RR : 2, !1, aR)
            }
        if (tR.backFaceCulling || null !== tR.sideOrientation || tR._twoSidedLighting) {
          const RR = this._getWorldMatrixDeterminant();
          let JR = tR._getEffectiveOrientation(this);
          RR < 0 && (JR = JR === NR.d.ClockWiseSideOrientation ? NR.d.CounterClockWiseSideOrientation : NR.d.ClockWiseSideOrientation), iR._effectiveSideOrientation = JR
        }
        tR._preBind(uR, iR._effectiveSideOrientation), tR.forceDepthWrite && yR.setDepthWrite(!0);
        const eR = tR.fillMode;
        return qR || this._bind(RR, ZR, eR, !1), tR._bindRunFollower(this.getWorldMatrix(), this, RR, ZR), this._processRendering(this, RR, ZR, eR, rR, qR, this._onBeforeDraw, tR), tR.unbind(), 2 === GR.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(gR.l.MatricesWeightsKind) && (this.isVerticesDataPresent(gR.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const RR = this.getVerticesData(gR.l.MatricesWeightsKind),
          JR = RR.length;
        for (let GR = 0; GR < JR; GR += 4) {
          const JR = RR[GR] + RR[GR + 1] + RR[GR + 2] + RR[GR + 3];
          if (0 === JR) RR[GR] = 1;
          else {
            const yR = 1 / JR;
            RR[GR] *= yR, RR[GR + 1] *= yR, RR[GR + 2] *= yR, RR[GR + 3] *= yR
          }
        }
        this.setVerticesData(gR.l.MatricesWeightsKind, RR)
      }
      _normalizeSkinWeightsAndExtra() {
        const RR = this.getVerticesData(gR.l.MatricesWeightsExtraKind),
          JR = this.getVerticesData(gR.l.MatricesWeightsKind),
          GR = JR.length;
        for (let yR = 0; yR < GR; yR += 4) {
          let GR = JR[yR] + JR[yR + 1] + JR[yR + 2] + JR[yR + 3];
          if (GR += RR[yR] + RR[yR + 1] + RR[yR + 2] + RR[yR + 3], 0 === GR) JR[yR] = 1;
          else {
            const tR = 1 / GR;
            JR[yR] *= tR, JR[yR + 1] *= tR, JR[yR + 2] *= tR, JR[yR + 3] *= tR, RR[yR] *= tR, RR[yR + 1] *= tR, RR[yR + 2] *= tR, RR[yR + 3] *= tR
          }
        }
        this.setVerticesData(gR.l.MatricesWeightsKind, JR), this.setVerticesData(gR.l.MatricesWeightsKind, RR)
      }
      validateSkinning() {
        const RR = this.getVerticesData(gR.l.MatricesWeightsExtraKind),
          JR = this.getVerticesData(gR.l.MatricesWeightsKind);
        if (null === JR || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          fK: "not skinned"
        };
        const GR = JR.length;
        let yR = 0,
          tR = 0,
          uR = 0,
          ZR = 0;
        const qR = null === RR ? 4 : 8,
          iR = [];
        for (let rR = 0; rR <= qR; rR++) iR[rR] = 0;
        for (let rR = 0; rR < GR; rR += 4) {
          let GR = JR[rR],
            fR = GR,
            VR = 0 === fR ? 0 : 1;
          for (let tR = 1; tR < qR; tR++) {
            const uR = tR < 4 ? JR[rR + tR] : RR[rR + tR - 4];
            uR > GR && yR++, 0 !== uR && VR++, fR += uR, GR = uR
          }
          if (iR[VR]++, VR > uR && (uR = VR), 0 === fR) tR++;
          else {
            const GR = 1 / fR;
            let yR = 0;
            for (let tR = 0; tR < qR; tR++) yR += tR < 4 ? Math.abs(JR[rR + tR] - JR[rR + tR] * GR) : Math.abs(RR[rR + tR - 4] - RR[rR + tR - 4] * GR);
            yR > .001 && ZR++
          }
        }
        const fR = this.skeleton.bones.length,
          VR = this.getVerticesData(gR.l.MatricesIndicesKind),
          KR = this.getVerticesData(gR.l.MatricesIndicesExtraKind);
        let wR = 0;
        for (let rR = 0; rR < GR; rR += 4)
          for (let RR = 0; RR < qR; RR++) {
            const JR = RR < 4 ? VR[rR + RR] : KR[rR + RR - 4];
            (JR >= fR || JR < 0) && wR++
          }
        return {
          skinned: !0,
          valid: 0 === tR && 0 === ZR && 0 === wR,
          fK: "Number of Weights = " + GR / 4 + "\nMaximum influences = " + uR + "\nMissing Weights = " + tR + "\nNot Sorted = " + yR + "\nNot Normalized = " + ZR + "\nWeightCounts = [" + iR + "]\nNumber of bones = " + fR + "\nBad Bone Indices = " + wR
        }
      }
      _checkDelayState() {
        const RR = this.jH();
        return this._geometry ? this._geometry.load(RR) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(RR)), this
      }
      _queueLoad(RR) {
        RR.addPendingData(this);
        const JR = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const GR = await RR._loadDelayedFileAsync(this.delayLoadingFile, JR, !0);
            GR instanceof ArrayBuffer ? this._delayLoadingFunction(GR, this) : this._delayLoadingFunction(JSON.parse(GR), this);
            for (const RR of this.instances) RR.refreshBoundingInfo(), RR._syncSubMeshes();
            this.delayLoadState = 1, RR.removePendingData(this)
          } catch (GR) {
            RR.removePendingData(this), RR.oB || PR.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${GR}`)
          }
        })(), this
      }
      isInFrustum(RR) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(RR) && (this._checkDelayState(), !0))
      }
      setMaterialById(RR) {
        const JR = this.jH().materials;
        let GR;
        for (GR = JR.length - 1; GR > -1; GR--)
          if (JR[GR].id === RR) return this.material = JR[GR], this;
        const yR = this.jH().multiMaterials;
        for (GR = yR.length - 1; GR > -1; GR--)
          if (yR[GR].id === RR) return this.material = yR[GR], this;
        return this
      }
      getAnimatables() {
        const RR = [];
        return this.material && RR.push(this.material), this.skeleton && RR.push(this.skeleton), RR
      }
      bakeTransformIntoVertices(RR) {
        if (!this.isVerticesDataPresent(gR.l.PositionKind)) return this;
        const JR = this.XM.splice(0);
        this._resetPointsArrayCache();
        let GR = this.getVerticesData(gR.l.PositionKind);
        const yR = BR.r.Zero();
        let tR;
        for (tR = 0; tR < GR.length; tR += 3) BR.r.TransformCoordinatesFromFloatsToRef(GR[tR], GR[tR + 1], GR[tR + 2], RR, yR).toArray(GR, tR);
        if (this.setVerticesData(gR.l.PositionKind, GR, this.getVertexBuffer(gR.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(gR.l.NormalKind)) {
          for (GR = this.getVerticesData(gR.l.NormalKind), tR = 0; tR < GR.length; tR += 3) BR.r.TransformNormalFromFloatsToRef(GR[tR], GR[tR + 1], GR[tR + 2], RR, yR).normalize().toArray(GR, tR);
          this.setVerticesData(gR.l.NormalKind, GR, this.getVertexBuffer(gR.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(gR.l.TangentKind)) {
          for (GR = this.getVerticesData(gR.l.TangentKind), tR = 0; tR < GR.length; tR += 4) BR.r.TransformNormalFromFloatsToRef(GR[tR], GR[tR + 1], GR[tR + 2], RR, yR).normalize().toArray(GR, tR);
          this.setVerticesData(gR.l.TangentKind, GR, this.getVertexBuffer(gR.l.TangentKind).isUpdatable())
        }
        return RR.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.XM = JR, this
      }
      bakeCurrentTransformIntoVertices() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(RR), this
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (JR && void 0 === JR._addToSceneRootNodes) {
          const GR = JR;
          return FR.source = this, FR.doNotCloneChildren = GR.doNotCloneChildren, FR.clonePhysicsImpostor = GR.clonePhysicsImpostor, FR.cloneThinInstances = GR.cloneThinInstances, new TR(RR, this.jH(), FR)
        }
        return new TR(RR, this.jH(), JR, this, GR, yR)
      }
      dispose(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const GR = this._internalMeshDataInfo;
        if (GR._onBeforeDrawObservable && GR._onBeforeDrawObservable.clear(), GR._onBeforeBindObservable && GR._onBeforeBindObservable.clear(), GR._onBeforeRenderObservable && GR._onBeforeRenderObservable.clear(), GR._onAfterRenderObservable && GR._onAfterRenderObservable.clear(), GR._onBetweenPassObservable && GR._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (GR.meshMap)
            for (const RR in GR.meshMap) {
              const JR = GR.meshMap[RR];
              JR && (JR._internalMeshDataInfo._source = null, GR.meshMap[RR] = void 0)
            }
          GR._source && GR._source._internalMeshDataInfo.meshMap && (GR._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const RR = this.jH().meshes;
          for (const JR of RR) {
            const RR = JR;
            RR._internalMeshDataInfo && RR._internalMeshDataInfo._source && RR._internalMeshDataInfo._source === this && (RR._internalMeshDataInfo._source = null)
          }
        }
        GR._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(RR, JR)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(RR, JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qR = arguments.length > 7 ? arguments[7] : void 0;
        const iR = this.jH();
        return (0, WR.q)(RR, (RR => {
          const qR = RR.width,
            iR = RR.height,
            fR = this.ke().createCanvas(qR, iR).getContext("2d");
          fR.drawImage(RR, 0, 0);
          const VR = fR.getImageData(0, 0, qR, iR).data;
          this.applyDisplacementMapFromBuffer(VR, qR, iR, JR, GR, tR, uR, ZR), yR && yR(this)
        }), qR || (() => {}), iR.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(gR.l.PositionKind) || !this.isVerticesDataPresent(gR.l.NormalKind) || !this.isVerticesDataPresent(gR.l.UVKind)) return PR.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const iR = this.getVerticesData(gR.l.PositionKind, !0, !0),
          fR = this.getVerticesData(gR.l.NormalKind),
          VR = this.getVerticesData(gR.l.UVKind);
        let KR = BR.r.Zero();
        const wR = BR.r.Zero(),
          rR = BR.n.Zero();
        uR = uR || BR.n.Zero(), ZR = ZR || new BR.n(1, 1);
        for (let eR = 0; eR < iR.length; eR += 3) {
          BR.r.FromArrayToRef(iR, eR, KR), BR.r.FromArrayToRef(fR, eR, wR), BR.n.FromArrayToRef(VR, eR / 3 * 2, rR);
          const qR = 4 * ((Math.abs(rR.x * ZR.x + uR.x % 1) * (JR - 1) % JR | 0) + (Math.abs(rR.y * ZR.y + uR.y % 1) * (GR - 1) % GR | 0) * JR),
            aR = .3 * (RR[qR] / 255) + .59 * (RR[qR + 1] / 255) + .11 * (RR[qR + 2] / 255);
          wR.normalize(), wR.scaleInPlace(yR + (tR - yR) * aR), KR = KR.add(wR), KR.toArray(iR, eR)
        }
        return bR.c.ComputeNormals(iR, this.NuR(), fR), qR ? (this.setVerticesData(gR.l.PositionKind, iR), this.setVerticesData(gR.l.NormalKind, fR), this.setVerticesData(gR.l.UVKind, VR)) : (this.updateVerticesData(gR.l.PositionKind, iR), this.updateVerticesData(gR.l.NormalKind, fR)), this
      }
      _getFlattenedNormals(RR, JR) {
        const GR = new Float32Array(3 * RR.length);
        let yR = 0;
        const tR = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let uR = 0; uR < RR.length; uR += 3) {
          const ZR = BR.r.FromArray(JR, 3 * RR[uR]),
            qR = BR.r.FromArray(JR, 3 * RR[uR + 1]),
            iR = BR.r.FromArray(JR, 3 * RR[uR + 2]),
            fR = ZR.subtract(qR),
            VR = iR.subtract(qR),
            KR = BR.r.Normalize(BR.r.Cross(fR, VR));
          tR && KR.scaleInPlace(-1);
          for (let RR = 0; RR < 3; RR++) GR[yR++] = KR.x, GR[yR++] = KR.y, GR[yR++] = KR.z
        }
        return GR
      }
      _convertToUnIndexedMesh() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = this.getVerticesDataKinds().filter((RR => !this.getVertexBuffer(RR)?.getIsInstanced())),
          GR = this.NuR(!1, !0),
          yR = {},
          tR = (RR, JR) => {
            const yR = new Float32Array(GR.length * JR);
            let tR = 0;
            for (let uR = 0; uR < GR.length; uR++)
              for (let ZR = 0; ZR < JR; ZR++) yR[tR++] = RR[GR[uR] * JR + ZR];
            return yR
          },
          uR = this.Tm(),
          ZR = this.geometry ? this.XM.slice(0) : [];
        for (const qR of JR) yR[qR] = this.getVerticesData(qR);
        for (const qR of JR) {
          const JR = this.getVertexBuffer(qR),
            uR = JR.getSize();
          if (RR && qR === gR.l.NormalKind) {
            const RR = this._getFlattenedNormals(GR, yR[gR.l.PositionKind]);
            this.setVerticesData(gR.l.NormalKind, RR, JR.isUpdatable(), uR)
          } else this.setVerticesData(qR, tR(yR[qR], uR), JR.isUpdatable(), uR)
        }
        if (this.morphTargetManager) {
          for (let JR = 0; JR < this.morphTargetManager.numTargets; JR++) {
            const yR = this.morphTargetManager.getTarget(JR),
              uR = yR.getPositions();
            yR.RiR(tR(uR, 3));
            const ZR = yR.getNormals();
            ZR && yR.setNormals(RR ? this._getFlattenedNormals(GR, uR) : tR(ZR, 3));
            const qR = yR.getTangents();
            qR && yR.setTangents(tR(qR, 3));
            const iR = yR.getUVs();
            iR && yR.setUVs(tR(iR, 2));
            const fR = yR.getColors();
            fR && yR.setColors(tR(fR, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let qR = 0; qR < GR.length; qR++) GR[qR] = qR;
        this.setIndices(GR), this._unIndexed = !0, this.releaseSubMeshes();
        for (const qR of ZR) {
          const RR = qR.Tm();
          xR.b.AddToMesh(qR.materialIndex, qR.indexStart, qR.indexCount, qR.indexStart, qR.indexCount, this).setBoundingInfo(RR)
        }
        return this.setBoundingInfo(uR), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = bR.c.ExtractFromMesh(this);
        let GR;
        if (RR && this.isVerticesDataPresent(gR.l.NormalKind) && JR.normals) {
          for (GR = 0; GR < JR.normals.length; GR++) JR.normals[GR] *= -1;
          this.setVerticesData(gR.l.NormalKind, JR.normals, this.isVertexBufferUpdatable(gR.l.NormalKind))
        }
        if (JR.indices) {
          let RR;
          for (GR = 0; GR < JR.indices.length; GR += 3) RR = JR.indices[GR + 1], JR.indices[GR + 1] = JR.indices[GR + 2], JR.indices[GR + 2] = RR;
          this.setIndices(JR.indices, null, this.isVertexBufferUpdatable(gR.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const JR = bR.c.ExtractFromMesh(this),
          GR = JR.indices && !Array.isArray(JR.indices) && Array.from ? Array.from(JR.indices) : JR.indices,
          yR = JR.positions && !Array.isArray(JR.positions) && Array.from ? Array.from(JR.positions) : JR.positions,
          tR = JR.uvs && !Array.isArray(JR.uvs) && Array.from ? Array.from(JR.uvs) : JR.uvs,
          uR = JR.normals && !Array.isArray(JR.normals) && Array.from ? Array.from(JR.normals) : JR.normals;
        if (GR && yR) {
          JR.indices = GR, JR.positions = yR, tR && (JR.uvs = tR), uR && (JR.normals = uR);
          const ZR = RR + 1,
            qR = [];
          for (let RR = 0; RR < ZR + 1; RR++) qR[RR] = [];
          let iR, fR;
          const VR = new BR.r(0, 0, 0),
            KR = new BR.r(0, 0, 0),
            wR = new BR.n(0, 0),
            rR = [],
            eR = [],
            aR = [];
          let LR, nR, UR, WR = yR.length;
          tR && (nR = tR.length), uR && (UR = uR.length);
          for (let RR = 0; RR < GR.length; RR += 3) {
            eR[0] = GR[RR], eR[1] = GR[RR + 1], eR[2] = GR[RR + 2];
            for (let RR = 0; RR < 3; RR++)
              if (iR = eR[RR], fR = eR[(RR + 1) % 3], void 0 === aR[iR] && void 0 === aR[fR] ? (aR[iR] = [], aR[fR] = []) : (void 0 === aR[iR] && (aR[iR] = []), void 0 === aR[fR] && (aR[fR] = [])), void 0 === aR[iR][fR] && void 0 === aR[fR][iR]) {
                aR[iR][fR] = [], VR.x = (yR[3 * fR] - yR[3 * iR]) / ZR, VR.y = (yR[3 * fR + 1] - yR[3 * iR + 1]) / ZR, VR.z = (yR[3 * fR + 2] - yR[3 * iR + 2]) / ZR, uR && (KR.x = (uR[3 * fR] - uR[3 * iR]) / ZR, KR.y = (uR[3 * fR + 1] - uR[3 * iR + 1]) / ZR, KR.z = (uR[3 * fR + 2] - uR[3 * iR + 2]) / ZR), tR && (wR.x = (tR[2 * fR] - tR[2 * iR]) / ZR, wR.y = (tR[2 * fR + 1] - tR[2 * iR + 1]) / ZR), aR[iR][fR].push(iR);
                for (let RR = 1; RR < ZR; RR++) aR[iR][fR].push(yR.length / 3), yR[WR++] = yR[3 * iR] + RR * VR.x, yR[WR++] = yR[3 * iR + 1] + RR * VR.y, yR[WR++] = yR[3 * iR + 2] + RR * VR.z, uR && (uR[UR++] = uR[3 * iR] + RR * KR.x, uR[UR++] = uR[3 * iR + 1] + RR * KR.y, uR[UR++] = uR[3 * iR + 2] + RR * KR.z), tR && (tR[nR++] = tR[2 * iR] + RR * wR.x, tR[nR++] = tR[2 * iR + 1] + RR * wR.y);
                aR[iR][fR].push(fR), aR[fR][iR] = [], LR = aR[iR][fR].length;
                for (let RR = 0; RR < LR; RR++) aR[fR][iR][RR] = aR[iR][fR][LR - 1 - RR]
              } qR[0][0] = GR[RR], qR[1][0] = aR[GR[RR]][GR[RR + 1]][1], qR[1][1] = aR[GR[RR]][GR[RR + 2]][1];
            for (let JR = 2; JR < ZR; JR++) {
              qR[JR][0] = aR[GR[RR]][GR[RR + 1]][JR], qR[JR][JR] = aR[GR[RR]][GR[RR + 2]][JR], VR.x = (yR[3 * qR[JR][JR]] - yR[3 * qR[JR][0]]) / JR, VR.y = (yR[3 * qR[JR][JR] + 1] - yR[3 * qR[JR][0] + 1]) / JR, VR.z = (yR[3 * qR[JR][JR] + 2] - yR[3 * qR[JR][0] + 2]) / JR, uR && (KR.x = (uR[3 * qR[JR][JR]] - uR[3 * qR[JR][0]]) / JR, KR.y = (uR[3 * qR[JR][JR] + 1] - uR[3 * qR[JR][0] + 1]) / JR, KR.z = (uR[3 * qR[JR][JR] + 2] - uR[3 * qR[JR][0] + 2]) / JR), tR && (wR.x = (tR[2 * qR[JR][JR]] - tR[2 * qR[JR][0]]) / JR, wR.y = (tR[2 * qR[JR][JR] + 1] - tR[2 * qR[JR][0] + 1]) / JR);
              for (let RR = 1; RR < JR; RR++) qR[JR][RR] = yR.length / 3, yR[WR++] = yR[3 * qR[JR][0]] + RR * VR.x, yR[WR++] = yR[3 * qR[JR][0] + 1] + RR * VR.y, yR[WR++] = yR[3 * qR[JR][0] + 2] + RR * VR.z, uR && (uR[UR++] = uR[3 * qR[JR][0]] + RR * KR.x, uR[UR++] = uR[3 * qR[JR][0] + 1] + RR * KR.y, uR[UR++] = uR[3 * qR[JR][0] + 2] + RR * KR.z), tR && (tR[nR++] = tR[2 * qR[JR][0]] + RR * wR.x, tR[nR++] = tR[2 * qR[JR][0] + 1] + RR * wR.y)
            }
            qR[ZR] = aR[GR[RR + 1]][GR[RR + 2]], rR.push(qR[0][0], qR[1][0], qR[1][1]);
            for (let RR = 1; RR < ZR; RR++) {
              let JR;
              for (JR = 0; JR < RR; JR++) rR.push(qR[RR][JR], qR[RR + 1][JR], qR[RR + 1][JR + 1]), rR.push(qR[RR][JR], qR[RR + 1][JR + 1], qR[RR][JR + 1]);
              rR.push(qR[RR][JR], qR[RR + 1][JR], qR[RR + 1][JR + 1])
            }
          }
          JR.indices = rR, JR.applyToMesh(this, this.isVertexBufferUpdatable(gR.l.PositionKind))
        } else PR.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const RR = bR.c.ExtractFromMesh(this),
          JR = RR.uvs,
          GR = RR.indices,
          yR = RR.positions,
          tR = RR.colors,
          uR = RR.matricesIndices,
          ZR = RR.matricesWeights,
          qR = RR.matricesIndicesExtra,
          iR = RR.matricesWeightsExtra;
        if (void 0 === GR || void 0 === yR || null === GR || null === yR) PR.c.Warn("VertexData contains empty entries");
        else {
          const fR = [],
            VR = [],
            KR = [],
            wR = [],
            rR = [],
            eR = [],
            aR = [],
            LR = [];
          let nR, UR = 0;
          const WR = {};
          let AR, CR;
          for (let RR = 0; RR < GR.length; RR += 3) {
            CR = [GR[RR], GR[RR + 1], GR[RR + 2]], nR = [];
            for (let RR = 0; RR < 3; RR++) {
              nR[RR] = "";
              for (let JR = 0; JR < 3; JR++) Math.abs(yR[3 * CR[RR] + JR]) < 1e-8 && (yR[3 * CR[RR] + JR] = 0), nR[RR] += yR[3 * CR[RR] + JR] + "|"
            }
            if (nR[0] != nR[1] && nR[0] != nR[2] && nR[1] != nR[2])
              for (let RR = 0; RR < 3; RR++) {
                if (AR = WR[nR[RR]], void 0 === AR) {
                  WR[nR[RR]] = UR, AR = UR++;
                  for (let JR = 0; JR < 3; JR++) fR.push(yR[3 * CR[RR] + JR]);
                  if (null !== tR && void 0 !== tR)
                    for (let JR = 0; JR < 4; JR++) wR.push(tR[4 * CR[RR] + JR]);
                  if (null !== JR && void 0 !== JR)
                    for (let GR = 0; GR < 2; GR++) KR.push(JR[2 * CR[RR] + GR]);
                  if (null !== uR && void 0 !== uR)
                    for (let JR = 0; JR < 4; JR++) rR.push(uR[4 * CR[RR] + JR]);
                  if (null !== ZR && void 0 !== ZR)
                    for (let JR = 0; JR < 4; JR++) eR.push(ZR[4 * CR[RR] + JR]);
                  if (null !== qR && void 0 !== qR)
                    for (let JR = 0; JR < 4; JR++) aR.push(qR[4 * CR[RR] + JR]);
                  if (null !== iR && void 0 !== iR)
                    for (let JR = 0; JR < 4; JR++) LR.push(iR[4 * CR[RR] + JR])
                }
                VR.push(AR)
              }
          }
          const XR = [];
          bR.c.ComputeNormals(fR, VR, XR), RR.positions = fR, RR.indices = VR, RR.normals = XR, null !== JR && void 0 !== JR && (RR.uvs = KR), null !== tR && void 0 !== tR && (RR.colors = wR), null !== uR && void 0 !== uR && (RR.matricesIndices = rR), null !== ZR && void 0 !== ZR && (RR.matricesWeights = eR), null !== qR && void 0 !== qR && (RR.matricesIndicesExtra = aR), null !== ZR && void 0 !== ZR && (RR.matricesWeightsExtra = LR), RR.applyToMesh(this, this.isVertexBufferUpdatable(gR.l.PositionKind))
        }
      }
      static _instancedMeshFactory(RR, JR) {
        throw (0, mR.j)("InstancedMesh")
      }
      static _PhysicsImpostorParser(RR, JR, GR) {
        throw (0, mR.j)("PhysicsImpostor")
      }
      createInstance(RR) {
        const JR = TR._instancedMeshFactory(RR, this);
        return JR.parent = this.parent, JR
      }
      synchronizeInstances() {
        for (let RR = 0; RR < this.instances.length; RR++) {
          this.instances[RR]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(RR) {
        const JR = this.NuR(),
          GR = this.getVerticesData(gR.l.PositionKind);
        if (!GR || !JR) return this;
        const yR = [];
        for (let uR = 0; uR < GR.length; uR += 3) yR.push(BR.r.FromArray(GR, uR));
        const tR = [];
        return UR.c.SyncAsyncForLoop(yR.length, 40, (RR => {
          const JR = yR.length - 1 - RR,
            GR = yR[JR];
          for (let uR = 0; uR < JR; ++uR) {
            const RR = yR[uR];
            if (GR.equals(RR)) {
              tR[JR] = uR;
              break
            }
          }
        }), (() => {
          for (let RR = 0; RR < JR.length; ++RR) JR[RR] = tR[JR[RR]] || JR[RR];
          const GR = this.XM.slice(0);
          this.setIndices(JR), this.XM = GR, RR && RR(this)
        })), this
      }
      serialize() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        RR.name = this.name, RR.id = this.id, RR.uniqueId = this.uniqueId, RR.type = this.getClassName(), CR.d && CR.d.HasTags(this) && (RR.tags = CR.d.GetTags(this)), RR.position = this.position.QtR(), this.rotationQuaternion ? RR.rotationQuaternion = this.rotationQuaternion.QtR() : this.rotation && (RR.rotation = this.rotation.QtR()), RR.MK = this.MK.QtR(), this._postMultiplyPivotMatrix ? RR.pivotMatrix = this.getPivotMatrix().QtR() : RR.localMatrix = this.getPivotMatrix().QtR(), RR.isEnabled = this.isEnabled(!1), RR.isVisible = this.isVisible, RR.infiniteDistance = this.infiniteDistance, RR.pickable = this.ZL, RR.receiveShadows = this.receiveShadows, RR.billboardMode = this.billboardMode, RR.visibility = this.visibility, RR.Qe = this.Qe, RR.checkCollisions = this.checkCollisions, RR.ellipsoid = this.ellipsoid.QtR(), RR.ellipsoidOffset = this.ellipsoidOffset.QtR(), RR.se = this.se, RR.isBlocker = this.isBlocker, RR.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (RR.yI = !0), this.parent && this.parent._serializeAsParent(RR), RR.isUnIndexed = this.isUnIndexed;
        const JR = this._geometry;
        if (JR && this.XM) {
          RR.geometryUniqueId = JR.uniqueId, RR.geometryId = JR.id, RR.XM = [];
          for (let JR = 0; JR < this.XM.length; JR++) {
            const GR = this.XM[JR];
            RR.XM.push({
              materialIndex: GR.materialIndex,
              verticesStart: GR.verticesStart,
              verticesCount: GR.verticesCount,
              indexStart: GR.indexStart,
              indexCount: GR.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (RR.materialUniqueId = this.material.uniqueId, RR.materialId = this.material.id) : (this.material = null, RR.materialUniqueId = this._scene.defaultMaterial.uniqueId, RR.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (RR.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (RR.skeletonId = this.skeleton.id, RR.skeletonUniqueId = this.skeleton.uniqueId, RR.numBoneInfluencers = this.numBoneInfluencers), this.jH()._getComponent(zR.d.NAME_PHYSICSENGINE)) {
          const JR = this.getPhysicsImpostor?.();
          JR && (RR.physicsMass = JR.getParam("yq"), RR.physicsFriction = JR.getParam("friction"), RR.physicsRestitution = JR.getParam("yq"), RR.physicsImpostor = JR.type)
        }
        this.metadata && (RR.metadata = this.metadata), 0 !== this.meshBlendingTag && (RR.meshBlendingTag = this.meshBlendingTag), RR.instances = [];
        for (let GR = 0; GR < this.instances.length; GR++) {
          const JR = this.instances[GR];
          if (JR.doNotSerialize) continue;
          const yR = {
            name: JR.name,
            id: JR.id,
            isEnabled: JR.isEnabled(!1),
            isVisible: JR.isVisible,
            ZL: JR.ZL,
            checkCollisions: JR.checkCollisions,
            position: JR.position.QtR(),
            MK: JR.MK.QtR()
          };
          if (JR.parent && JR.parent._serializeAsParent(yR), JR.rotationQuaternion ? yR.rotationQuaternion = JR.rotationQuaternion.QtR() : JR.rotation && (yR.rotation = JR.rotation.QtR()), this.jH()._getComponent(zR.d.NAME_PHYSICSENGINE)) {
            const RR = JR.getPhysicsImpostor?.();
            RR && (yR.physicsMass = RR.getParam("yq"), yR.physicsFriction = RR.getParam("friction"), yR.physicsRestitution = RR.getParam("yq"), yR.physicsImpostor = RR.type)
          }
          JR.metadata && (yR.metadata = JR.metadata), JR.actionManager && (yR.actions = JR.actionManager.serialize(JR.name)), RR.instances.push(yR), cR.c.AppendSerializedAnimations(JR, yR), yR.WL = JR.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (RR.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.jGR
          }, this._userThinInstanceBuffersStorage)) {
          const JR = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const RR in this._userThinInstanceBuffersStorage.data) JR.data[RR] = Array.from(this._userThinInstanceBuffersStorage.data[RR]), JR.sizes[RR] = this._userThinInstanceBuffersStorage.sizes[RR], JR.strides[RR] = this._userThinInstanceBuffersStorage.strides[RR];
          RR.thinInstances.userThinInstance = JR
        }
        return cR.c.AppendSerializedAnimations(this, RR), RR.WL = this.serializeAnimationRanges(), RR.layerMask = this.layerMask, RR.alphaIndex = this.alphaIndex, RR.hasVertexAlpha = this.hasVertexAlpha, RR.overlayAlpha = this.overlayAlpha, RR.overlayColor = this.overlayColor.QtR(), RR.renderOverlay = this.renderOverlay, RR.applyFog = this.applyFog, this.actionManager && (RR.actions = this.actionManager.serialize(this.name)), RR
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const RR = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (RR && RR.vertexCount) {
          if (RR.vertexCount !== this.getTotalVertices()) return PR.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (RR.isUsingTextureForTargets) return;
          for (let JR = 0; JR < RR.numInfluencers; JR++) {
            const GR = RR.getActiveTarget(JR),
              yR = GR.getPositions();
            if (!yR) return void PR.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(gR.l.PositionKind + JR, yR, !1, 3);
            const tR = GR.getNormals();
            tR && this.geometry.setVerticesData(gR.l.NormalKind + JR, tR, !1, 3);
            const uR = GR.getTangents();
            uR && this.geometry.setVerticesData(gR.l.TangentKind + JR, uR, !1, 3);
            const ZR = GR.getUVs();
            ZR && this.geometry.setVerticesData(gR.l.UVKind + "_" + JR, ZR, !1, 2);
            const qR = GR.getUV2s();
            qR && this.geometry.setVerticesData(gR.l.UV2Kind + "_" + JR, qR, !1, 2);
            const iR = GR.getColors();
            iR && this.geometry.setVerticesData(gR.l.ColorKind + JR, iR, !1, 4)
          }
        } else {
          let RR = 0;
          for (; this.geometry.isVerticesDataPresent(gR.l.PositionKind + RR);) this.geometry.removeVerticesData(gR.l.PositionKind + RR), this.geometry.isVerticesDataPresent(gR.l.NormalKind + RR) && this.geometry.removeVerticesData(gR.l.NormalKind + RR), this.geometry.isVerticesDataPresent(gR.l.TangentKind + RR) && this.geometry.removeVerticesData(gR.l.TangentKind + RR), this.geometry.isVerticesDataPresent(gR.l.UVKind + "_" + RR) && this.geometry.removeVerticesData(gR.l.UVKind + "_" + RR), this.geometry.isVerticesDataPresent(gR.l.UV2Kind + "_" + RR) && this.geometry.removeVerticesData(gR.l.UV2Kind + "_" + RR), this.geometry.isVerticesDataPresent(gR.l.ColorKind + RR) && this.geometry.removeVerticesData(gR.l.ColorKind + RR), RR++
        }
      }
      static Parse(RR, JR, GR) {
        let yR, tR = !1;
        if (RR.type && "LinesMesh" === RR.type ? yR = TR._LinesMeshParser(RR, JR) : RR.type && "GroundMesh" === RR.type ? yR = TR._GroundMeshParser(RR, JR) : RR.type && "GoldbergMesh" === RR.type ? yR = TR._GoldbergMeshParser(RR, JR) : RR.type && "GreasedLineMesh" === RR.type ? yR = TR._GreasedLineMeshParser(RR, JR) : RR.type && "TrailMesh" === RR.type ? yR = TR._TrailMeshParser(RR, JR) : RR.type && "GaussianSplattingMesh" === RR.type ? (yR = RR._isCompound ? TR._GaussianSplattingCompoundMeshParser(RR, JR) : TR._GaussianSplattingMeshParser(RR, JR), tR = !0) : RR.type && "GaussianSplattingPartProxyMesh" === RR.type ? (yR = TR._GaussianSplattingPartProxyMeshParser(RR, JR), tR = !0) : yR = new TR(RR.name, JR), yR.id = RR.id, yR._waitingParsedUniqueId = RR.uniqueId, CR.d && CR.d.AddTagsTo(yR, RR.tags), yR.position = BR.r.FromArray(RR.position), void 0 !== RR.metadata && (yR.metadata = RR.metadata), void 0 !== RR.meshBlendingTag && (yR.meshBlendingTag = RR.meshBlendingTag), RR.rotationQuaternion ? yR.rotationQuaternion = BR.i.FromArray(RR.rotationQuaternion) : RR.rotation && (yR.rotation = BR.r.FromArray(RR.rotation)), yR.MK = BR.r.FromArray(RR.MK), RR.localMatrix ? yR.setPreTransformMatrix(BR.e.FromArray(RR.localMatrix)) : RR.pivotMatrix && yR.setPivotMatrix(BR.e.FromArray(RR.pivotMatrix)), yR.JA(RR.isEnabled), yR.isVisible = RR.isVisible, yR.infiniteDistance = RR.infiniteDistance, yR.Qe = !!RR.Qe, yR.showBoundingBox = RR.showBoundingBox, yR.showSubMeshesBoundingBox = RR.showSubMeshesBoundingBox, void 0 !== RR.applyFog && (yR.applyFog = RR.applyFog), void 0 !== RR.pickable && (yR.ZL = RR.pickable), void 0 !== RR.alphaIndex && (yR.alphaIndex = RR.alphaIndex), yR.receiveShadows = RR.receiveShadows, void 0 !== RR.billboardMode && (yR.billboardMode = RR.billboardMode), void 0 !== RR.visibility && (yR.visibility = RR.visibility), yR.checkCollisions = RR.checkCollisions, yR.se = !!RR.se, RR.ellipsoid && (yR.ellipsoid = BR.r.FromArray(RR.ellipsoid)), RR.ellipsoidOffset && (yR.ellipsoidOffset = BR.r.FromArray(RR.ellipsoidOffset)), null != RR.overrideMaterialSideOrientation && (yR.sideOrientation = RR.overrideMaterialSideOrientation), void 0 !== RR.sideOrientation && (yR.sideOrientation = RR.sideOrientation), void 0 !== RR.isBlocker && (yR.isBlocker = RR.isBlocker), yR._shouldGenerateFlatShading = RR.useFlatShading, RR.yI && (yR._waitingData.yI = RR.yI), void 0 !== RR.parentId && (yR._waitingParentId = RR.parentId), void 0 !== RR.parentInstanceIndex && (yR._waitingParentInstanceIndex = RR.parentInstanceIndex), void 0 !== RR.actions && (yR._waitingData.actions = RR.actions), void 0 !== RR.overlayAlpha && (yR.overlayAlpha = RR.overlayAlpha), void 0 !== RR.overlayColor && (yR.overlayColor = lR.d.FromArray(RR.overlayColor)), void 0 !== RR.renderOverlay && (yR.renderOverlay = RR.renderOverlay), yR.isUnIndexed = !!RR.isUnIndexed, yR.hasVertexAlpha = RR.hasVertexAlpha, RR.delayLoadingFile ? (yR.delayLoadState = 4, yR.delayLoadingFile = GR + RR.delayLoadingFile, yR.buildBoundingInfo(BR.r.FromArray(RR.boundingBoxMinimum), BR.r.FromArray(RR.boundingBoxMaximum)), RR._binaryInfo && (yR._binaryInfo = RR._binaryInfo), yR._delayInfo = [], RR.hasUVs && yR._delayInfo.push(gR.l.UVKind), RR.hasUVs2 && yR._delayInfo.push(gR.l.UV2Kind), RR.hasUVs3 && yR._delayInfo.push(gR.l.UV3Kind), RR.hasUVs4 && yR._delayInfo.push(gR.l.UV4Kind), RR.hasUVs5 && yR._delayInfo.push(gR.l.UV5Kind), RR.hasUVs6 && yR._delayInfo.push(gR.l.UV6Kind), RR.hasColors && yR._delayInfo.push(gR.l.ColorKind), RR.hasMatricesIndices && yR._delayInfo.push(gR.l.MatricesIndicesKind), RR.hasMatricesWeights && yR._delayInfo.push(gR.l.MatricesWeightsKind), yR._delayLoadingFunction = vR.e._ImportGeometry, oR.c.ForceFullSceneLoadingForIncremental && yR._checkDelayState()) : tR || vR.e._ImportGeometry(RR, yR), RR.materialUniqueId ? yR._waitingMaterialId = RR.materialUniqueId : RR.materialId && (yR._waitingMaterialId = RR.materialId), RR.morphTargetManagerId > -1 && (yR._waitingMorphTargetManagerId = RR.morphTargetManagerId), void 0 !== RR.skeletonId && null !== RR.skeletonId && (yR.skeleton = JR.getLastSkeletonById(RR.skeletonId), yR._waitingSkeletonId = RR.skeletonId, RR.numBoneInfluencers && (yR.numBoneInfluencers = RR.numBoneInfluencers)), void 0 !== RR.skeletonUniqueId && null !== RR.skeletonUniqueId && (yR._waitingSkeletonUniqueId = RR.skeletonUniqueId), RR.animations) {
          for (let JR = 0; JR < RR.animations.length; JR++) {
            const GR = RR.animations[JR],
              tR = (0, IR.e)("BABYLON.Animation");
            tR && yR.animations.push(tR.Parse(GR))
          }
          pR.d.ParseAnimationRanges(yR, RR, JR)
        }
        if (RR.autoAnimate && JR.beginAnimation(yR, RR.autoAnimateFrom, RR.autoAnimateTo, RR.autoAnimateLoop, RR.autoAnimateSpeed || 1), RR.layerMask && !isNaN(RR.layerMask) ? yR.layerMask = Math.abs(parseInt(RR.layerMask)) : yR.layerMask = 268435455, RR.physicsImpostor && (yR.physicsImpostor = TR._PhysicsImpostorParser(JR, yR, RR)), RR.lodMeshIds && (yR._waitingData.lods = {
            ids: RR.lodMeshIds,
            distances: RR.lodDistances ? RR.lodDistances : null,
            coverages: RR.lodCoverages ? RR.lodCoverages : null
          }), RR.instances)
          for (let uR = 0; uR < RR.instances.length; uR++) {
            const GR = RR.instances[uR],
              tR = yR.createInstance(GR.name);
            if (GR.id && (tR.id = GR.id), CR.d && (GR.tags ? CR.d.AddTagsTo(tR, GR.tags) : CR.d.AddTagsTo(tR, RR.tags)), tR.position = BR.r.FromArray(GR.position), void 0 !== GR.metadata && (tR.metadata = GR.metadata), void 0 !== GR.parentId && (tR._waitingParentId = GR.parentId), void 0 !== GR.parentInstanceIndex && (tR._waitingParentInstanceIndex = GR.parentInstanceIndex), void 0 !== GR.isEnabled && null !== GR.isEnabled && tR.JA(GR.isEnabled), void 0 !== GR.isVisible && null !== GR.isVisible && (tR.isVisible = GR.isVisible), void 0 !== GR.ZL && null !== GR.ZL && (tR.ZL = GR.ZL), GR.rotationQuaternion ? tR.rotationQuaternion = BR.i.FromArray(GR.rotationQuaternion) : GR.rotation && (tR.rotation = BR.r.FromArray(GR.rotation)), tR.MK = BR.r.FromArray(GR.MK), void 0 != GR.checkCollisions && null != GR.checkCollisions && (tR.checkCollisions = GR.checkCollisions), void 0 != GR.pickable && null != GR.pickable && (tR.ZL = GR.pickable), void 0 != GR.showBoundingBox && null != GR.showBoundingBox && (tR.showBoundingBox = GR.showBoundingBox), void 0 != GR.showSubMeshesBoundingBox && null != GR.showSubMeshesBoundingBox && (tR.showSubMeshesBoundingBox = GR.showSubMeshesBoundingBox), void 0 != GR.alphaIndex && null != GR.showSubMeshesBoundingBox && (tR.alphaIndex = GR.alphaIndex), GR.physicsImpostor && (tR.physicsImpostor = TR._PhysicsImpostorParser(JR, tR, GR)), void 0 !== GR.actions && (tR._waitingData.actions = GR.actions), GR.animations) {
              for (let RR = 0; RR < GR.animations.length; RR++) {
                const JR = GR.animations[RR],
                  yR = (0, IR.e)("BABYLON.Animation");
                yR && tR.animations.push(yR.Parse(JR))
              }
              pR.d.ParseAnimationRanges(tR, GR, JR), GR.autoAnimate && JR.beginAnimation(tR, GR.autoAnimateFrom, GR.autoAnimateTo, GR.autoAnimateLoop, GR.autoAnimateSpeed || 1)
            }
          }
        if (RR.thinInstances) {
          const JR = RR.thinInstances;
          if (yR.jGR = !!JR.enablePicking, JR.matrixData ? (yR.tJR("matrix", new Float32Array(JR.matrixData), 16, !1), yR._thinInstanceDataStorage.matrixBufferSize = JR.matrixBufferSize, yR._thinInstanceDataStorage.instancesCount = JR.instancesCount) : yR._thinInstanceDataStorage.matrixBufferSize = JR.matrixBufferSize, RR.thinInstances.userThinInstance) {
            const JR = RR.thinInstances.userThinInstance;
            for (const RR in JR.data) yR.tJR(RR, new Float32Array(JR.data[RR]), JR.strides[RR], !1), yR._userThinInstanceBuffersStorage.sizes[RR] = JR.sizes[RR]
          }
        }
        return yR
      }
      setPositionsForCPUSkinning() {
        const RR = this._internalMeshDataInfo;
        if (!RR._sourcePositions) {
          const JR = this.getVerticesData(gR.l.PositionKind);
          if (!JR) return RR._sourcePositions;
          RR._sourcePositions = new Float32Array(JR), this.isVertexBufferUpdatable(gR.l.PositionKind) || this.setVerticesData(gR.l.PositionKind, JR, !0)
        }
        return RR._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const RR = this._internalMeshDataInfo;
        if (!RR._sourceNormals) {
          const JR = this.getVerticesData(gR.l.NormalKind);
          if (!JR) return RR._sourceNormals;
          RR._sourceNormals = new Float32Array(JR), this.isVertexBufferUpdatable(gR.l.NormalKind) || this.setVerticesData(gR.l.NormalKind, JR, !0)
        }
        return RR._sourceNormals
      }
      applySkeleton(RR) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.jH().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.jH().getFrameId(), !this.isVerticesDataPresent(gR.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(gR.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(gR.l.MatricesWeightsKind)) return this;
        const JR = this.isVerticesDataPresent(gR.l.NormalKind),
          GR = this._internalMeshDataInfo;
        if (!GR._sourcePositions) {
          const RR = this.XM.slice();
          this.setPositionsForCPUSkinning(), this.XM = RR
        }
        JR && !GR._sourceNormals && this.setNormalsForCPUSkinning();
        let yR = this.getVerticesData(gR.l.PositionKind);
        if (!yR) return this;
        yR instanceof Float32Array || (yR = new Float32Array(yR));
        let tR = this.getVerticesData(gR.l.NormalKind);
        if (JR) {
          if (!tR) return this;
          tR instanceof Float32Array || (tR = new Float32Array(tR))
        }
        const uR = this.getVerticesData(gR.l.MatricesIndicesKind),
          ZR = this.getVerticesData(gR.l.MatricesWeightsKind);
        if (!ZR || !uR) return this;
        const qR = this.numBoneInfluencers > 4,
          iR = qR ? this.getVerticesData(gR.l.MatricesIndicesExtraKind) : null,
          fR = qR ? this.getVerticesData(gR.l.MatricesWeightsExtraKind) : null,
          VR = RR.getTransformMatrices(this),
          KR = BR.r.Zero(),
          wR = new BR.e,
          rR = new BR.e;
        let eR, aR = 0;
        for (let LR = 0; LR < yR.length; LR += 3, aR += 4) {
          let RR;
          for (eR = 0; eR < 4; eR++) RR = ZR[aR + eR], RR > 0 && (BR.e.FromFloat32ArrayToRefScaled(VR, Math.floor(16 * uR[aR + eR]), RR, rR), wR.addToSelf(rR));
          if (qR)
            for (eR = 0; eR < 4; eR++) RR = fR[aR + eR], RR > 0 && (BR.e.FromFloat32ArrayToRefScaled(VR, Math.floor(16 * iR[aR + eR]), RR, rR), wR.addToSelf(rR));
          BR.r.TransformCoordinatesFromFloatsToRef(GR._sourcePositions[LR], GR._sourcePositions[LR + 1], GR._sourcePositions[LR + 2], wR, KR), KR.toArray(yR, LR), JR && (BR.r.TransformNormalFromFloatsToRef(GR._sourceNormals[LR], GR._sourceNormals[LR + 1], GR._sourceNormals[LR + 2], wR, KR), KR.toArray(tR, LR)), wR.reset()
        }
        return this.updateVerticesData(gR.l.PositionKind, yR), JR && this.updateVerticesData(gR.l.NormalKind, tR), this
      }
      static MinMax(RR) {
        let JR = null,
          GR = null;
        for (const yR of RR) {
          const RR = yR.Tm().boundingBox;
          JR && GR ? (JR.minimizeInPlace(RR.minimumWorld), GR.maximizeInPlace(RR.maximumWorld)) : (JR = RR.minimumWorld.clone(), GR = RR.maximumWorld.clone())
        }
        return JR && GR ? {
          min: JR,
          max: GR
        } : {
          min: BR.r.Zero(),
          max: BR.r.Zero()
        }
      }
      static Center(RR) {
        const JR = RR instanceof Array ? TR.MinMax(RR) : RR;
        return BR.r.Center(JR.min, JR.max)
      }
      static MergeMeshes(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        return (0, XR.m)(TR._MergeMeshesCoroutine(RR, JR, GR, yR, tR, uR, !1))
      }
      static async MergeMeshesAsync(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, XR.j)(TR._MergeMeshesCoroutine(RR, JR, GR, yR, tR, uR, !0), (0, XR.d)())
      }
      static * _MergeMeshesCoroutine(RR) {
        let JR, GR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yR = arguments.length > 2 ? arguments[2] : void 0,
          tR = arguments.length > 3 ? arguments[3] : void 0,
          uR = arguments.length > 4 ? arguments[4] : void 0,
          ZR = arguments.length > 5 ? arguments[5] : void 0,
          qR = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (RR = RR.filter(Boolean)).length) return null;
        if (!yR) {
          let GR = 0;
          for (JR = 0; JR < RR.length; JR++)
            if (GR += RR[JR].getTotalVertices(), GR >= 65536) return PR.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const iR = RR[0];
        ZR && (uR = !1, RR.sort(((RR, JR) => (RR.material?.uniqueId ?? -1) - (JR.material?.uniqueId ?? -1))));
        const fR = new Array,
          VR = new Array,
          KR = new Array,
          wR = RR[0].sideOrientation;
        for (JR = 0; JR < RR.length; JR++) {
          const GR = RR[JR];
          if (GR.sH) return PR.c.Warn("Cannot merge instance meshes."), null;
          if (wR !== GR.sideOrientation) return PR.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (uR || ZR) {
            const RR = KR.reduce(((RR, JR) => Math.max(RR, JR.start + JR.count)), 0);
            if (ZR)
              if (GR.material) {
                const JR = GR.material;
                if (JR instanceof HR.d) {
                  for (let RR = 0; RR < JR.ZJR.length; RR++) fR.indexOf(JR.ZJR[RR]) < 0 && fR.push(JR.ZJR[RR]);
                  for (let yR = 0; yR < GR.XM.length; yR++) VR.push(fR.indexOf(JR.ZJR[GR.XM[yR].materialIndex])), KR.push({
                    start: RR + GR.XM[yR].indexStart,
                    count: GR.XM[yR].indexCount
                  })
                } else {
                  fR.indexOf(JR) < 0 && fR.push(JR);
                  for (let yR = 0; yR < GR.XM.length; yR++) VR.push(fR.indexOf(JR)), KR.push({
                    start: RR + GR.XM[yR].indexStart,
                    count: GR.XM[yR].indexCount
                  })
                }
              } else
                for (let JR = 0; JR < GR.XM.length; JR++) VR.push(0), KR.push({
                  start: RR + GR.XM[JR].indexStart,
                  count: GR.XM[JR].indexCount
                });
            else KR.push({
              start: RR,
              count: GR.getTotalIndices()
            })
          }
        }
        if (ZR && KR.length > 1) {
          let RR = 0;
          for (let JR = 1; JR < KR.length; JR++) {
            const GR = KR[RR],
              yR = KR[JR];
            VR[JR] === VR[RR] && GR.start + GR.count === yR.start ? GR.count += yR.count : (RR++, KR[RR] = yR, VR[RR] = VR[JR])
          }
          KR.length = RR + 1, VR.length = RR + 1
        }
        const rR = RR => {
            const JR = RR.computeWorldMatrix(!0);
            return {
              vertexData: bR.c.ExtractFromMesh(RR, !1, !1),
              transform: JR
            }
          },
          {
            vertexData: eR,
            transform: aR
          } = rR(RR[0]);
        qR && (yield);
        const LR = new Array(RR.length - 1);
        for (let XR = 1; XR < RR.length; XR++) LR[XR - 1] = rR(RR[XR]), qR && (yield);
        const nR = eR._mergeCoroutine(aR, LR, yR, qR, !GR);
        let UR = nR.next();
        for (; !UR.done;) qR && (yield), UR = nR.next();
        const WR = UR.value;
        tR || (tR = new TR(iR.name + "_merged", iR.jH()));
        const AR = WR._applyToCoroutine(tR, void 0, qR);
        let CR = AR.next();
        for (; !CR.done;) qR && (yield), CR = AR.next();
        if (tR.checkCollisions = iR.checkCollisions, tR.sideOrientation = iR.sideOrientation, GR)
          for (JR = 0; JR < RR.length; JR++) RR[JR].dispose();
        if (uR || ZR) {
          for (tR.releaseSubMeshes(), JR = 0; JR < KR.length;) xR.b.CreateFromIndices(0, KR[JR].start, KR[JR].count, tR, void 0, !1), JR++;
          for (const RR of tR.XM) RR.refreshBoundingInfo();
          tR.computeWorldMatrix(!0)
        }
        if (ZR) {
          const RR = new HR.d(iR.name + "_merged", iR.jH());
          RR.ZJR = fR;
          for (let JR = 0; JR < tR.XM.length; JR++) tR.XM[JR].materialIndex = VR[JR];
          tR.material = RR
        } else tR.material = iR.material;
        return tR
      }
      YRR(RR) {
        RR._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(RR)
      }
      QRR(RR) {
        const JR = RR._indexInSourceMeshInstanceArray;
        if (-1 != JR) {
          if (JR !== this.instances.length - 1) {
            const RR = this.instances[this.instances.length - 1];
            this.instances[JR] = RR, RR._indexInSourceMeshInstanceArray = JR
          }
          RR._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === NR.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(RR) {
        const JR = this.jH();
        return JR.forcePointsCloud ? NR.d.PointFillMode : JR.forceWireframe ? NR.d.WireFrameFillMode : this.overrideRenderingFillMode ?? RR
      }
      setMaterialByID(RR) {
        return this.setMaterialById(RR)
      }
      static CreateRibbon(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(RR, JR, GR, yR, tR, uR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(RR, JR, GR, yR, tR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(RR, JR, GR, yR, tR, uR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(RR, JR, GR, yR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(RR, JR, GR, yR, tR, uR, ZR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(RR, JR, GR, yR, tR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(RR, JR, GR, yR, tR, uR, ZR, qR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(RR, JR, GR, yR, tR, uR, ZR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(RR, JR, GR, yR, tR, uR, ZR, qR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(RR, JR, GR, yR, tR, uR, ZR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(RR, JR, GR, yR, tR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(RR, JR, GR, yR, tR, uR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(RR, JR, GR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(RR, JR, GR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(RR, JR, GR, yR, tR, uR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(RR, JR, GR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(RR) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    TR.FRONTSIDE = bR.c.FRONTSIDE, TR.BACKSIDE = bR.c.BACKSIDE, TR.DOUBLESIDE = bR.c.DOUBLESIDE, TR.DEFAULTSIDE = bR.c.DEFAULTSIDE, TR.NO_CAP = 0, TR.CAP_START = 1, TR.CAP_END = 2, TR.CAP_ALL = 3, TR.NO_FLIP = 0, TR.FLIP_TILE = 1, TR.ROTATE_TILE = 2, TR.FLIP_ROW = 3, TR.ROTATE_ROW = 4, TR.FLIP_N_ROTATE_TILE = 5, TR.FLIP_N_ROTATE_ROW = 6, TR.CENTER = 0, TR.LEFT = 1, TR.RIGHT = 2, TR.TOP = 3, TR.BOTTOM = 4, TR.INSTANCEDMESH_SORT_TRANSPARENT = !1, TR._GroundMeshParser = (RR, JR) => {
      throw (0, mR.j)("GroundMesh")
    }, TR._GoldbergMeshParser = (RR, JR) => {
      throw (0, mR.j)("GoldbergMesh")
    }, TR._LinesMeshParser = (RR, JR) => {
      throw (0, mR.j)("LinesMesh")
    }, TR._GreasedLineMeshParser = (RR, JR) => {
      throw (0, mR.j)("GreasedLineMesh")
    }, TR._GreasedLineRibbonMeshParser = (RR, JR) => {
      throw (0, mR.j)("GreasedLineRibbonMesh")
    }, TR._TrailMeshParser = (RR, JR) => {
      throw (0, mR.j)("TrailMesh")
    }, TR._GaussianSplattingMeshParser = (RR, JR) => {
      throw (0, mR.j)("GaussianSplattingMesh")
    }, TR._GaussianSplattingPartProxyMeshParser = (RR, JR) => {
      throw (0, mR.j)("GaussianSplattingPartProxyMesh")
    }, TR._GaussianSplattingCompoundMeshParser = (RR, JR) => {
      throw (0, mR.j)("GaussianSplattingCompoundMesh")
    };
    let sR = !1;

    function hR() {
      sR || (sR = !0, (0, IR.f)("BABYLON.Mesh", TR))
    }(yR = TR.prototype).Am ?? (yR.Am = (0, mR.f)("Mesh", "Am")), (tR = TR.prototype).simplify ?? (tR.simplify = (0, mR.f)("Mesh", "simplify")), (uR = TR.prototype).thinInstanceAdd ?? (uR.thinInstanceAdd = (0, mR.f)("Mesh", "thinInstanceAdd")), (ZR = TR.prototype).thinInstanceAddSelf ?? (ZR.thinInstanceAddSelf = (0, mR.f)("Mesh", "thinInstanceAddSelf")), (qR = TR.prototype).thinInstanceRegisterAttribute ?? (qR.thinInstanceRegisterAttribute = (0, mR.f)("Mesh", "thinInstanceRegisterAttribute")), (iR = TR.prototype).thinInstanceSetMatrixAt ?? (iR.thinInstanceSetMatrixAt = (0, mR.f)("Mesh", "thinInstanceSetMatrixAt")), (fR = TR.prototype).thinInstanceSetAttributeAt ?? (fR.thinInstanceSetAttributeAt = (0, mR.f)("Mesh", "thinInstanceSetAttributeAt")), (VR = TR.prototype).tJR ?? (VR.tJR = (0, mR.f)("Mesh", "tJR")), (KR = TR.prototype).thinInstanceGetWorldMatrices ?? (KR.thinInstanceGetWorldMatrices = (0, mR.f)("Mesh", "thinInstanceGetWorldMatrices")), (wR = TR.prototype).hRR ?? (wR.hRR = (0, mR.f)("Mesh", "hRR")), (rR = TR.prototype).thinInstancePartialBufferUpdate ?? (rR.thinInstancePartialBufferUpdate = (0, mR.f)("Mesh", "thinInstancePartialBufferUpdate")), (eR = TR.prototype).thinInstanceRefreshBoundingInfo ?? (eR.thinInstanceRefreshBoundingInfo = (0, mR.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (aR = TR.prototype).getEmittedParticleSystems ?? (aR.getEmittedParticleSystems = (0, mR.f)("Mesh", "getEmittedParticleSystems")), (LR = TR.prototype).getHierarchyEmittedParticleSystems ?? (LR.getHierarchyEmittedParticleSystems = (0, mR.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(TR.prototype, "edgesShareWithInstances") || Object.defineProperty(TR.prototype, "edgesShareWithInstances", (0, mR.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(TR.prototype, "jGR") || Object.defineProperty(TR.prototype, "jGR", (0, mR.e)("Mesh", "jGR")), Object.getOwnPropertyDescriptor(TR.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(TR.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, mR.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(TR.prototype, "zRR") || Object.defineProperty(TR.prototype, "zRR", (0, mR.e)("Mesh", "zRR"))
  },
  41951: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => eR
    });
    var yR = GR(41520),
      tR = GR(38204),
      uR = GR(41663),
      ZR = GR(41407),
      qR = GR(38331),
      iR = GR(39914),
      fR = GR(41524),
      VR = GR(41949),
      KR = GR(41573),
      wR = GR(41813);
    class rR {}
    let eR = (() => {
      var RR;
      let JR, GR, eR, aR, LR = [];
      return RR = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, VR.f)(this._applyToCoroutine.bind(this)), this.uniqueId = RR._UniqueIdGenerator, RR._UniqueIdGenerator++
        }
        set(RR, JR) {
          switch (RR.length || iR.c.Warn(`Setting vertex data kind '${JR}' with an empty array`), JR) {
            case uR.l.PositionKind:
              this.positions = RR;
              break;
            case uR.l.NormalKind:
              this.normals = RR;
              break;
            case uR.l.TangentKind:
              this.tangents = RR;
              break;
            case uR.l.UVKind:
              this.uvs = RR;
              break;
            case uR.l.UV2Kind:
              this.uvs2 = RR;
              break;
            case uR.l.UV3Kind:
              this.uvs3 = RR;
              break;
            case uR.l.UV4Kind:
              this.uvs4 = RR;
              break;
            case uR.l.UV5Kind:
              this.uvs5 = RR;
              break;
            case uR.l.UV6Kind:
              this.uvs6 = RR;
              break;
            case uR.l.ColorKind:
              this.colors = RR;
              break;
            case uR.l.MatricesIndicesKind:
              this.matricesIndices = RR;
              break;
            case uR.l.MatricesWeightsKind:
              this.matricesWeights = RR;
              break;
            case uR.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = RR;
              break;
            case uR.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = RR
          }
        }
        applyToMesh(RR, JR) {
          return this._applyTo(RR, JR, !1), this
        }
        applyToGeometry(RR, JR) {
          return this._applyTo(RR, JR, !1), this
        }
        updateMesh(RR) {
          return this._update(RR), this
        }
        updateGeometry(RR) {
          return this._update(RR), this
        }* _applyToCoroutine(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (RR.setVerticesData(uR.l.PositionKind, this.positions, JR), GR && (yield)), this.normals && (RR.setVerticesData(uR.l.NormalKind, this.normals, JR), GR && (yield)), this.tangents && (RR.setVerticesData(uR.l.TangentKind, this.tangents, JR), GR && (yield)), this.uvs && (RR.setVerticesData(uR.l.UVKind, this.uvs, JR), GR && (yield)), this.uvs2 && (RR.setVerticesData(uR.l.UV2Kind, this.uvs2, JR), GR && (yield)), this.uvs3 && (RR.setVerticesData(uR.l.UV3Kind, this.uvs3, JR), GR && (yield)), this.uvs4 && (RR.setVerticesData(uR.l.UV4Kind, this.uvs4, JR), GR && (yield)), this.uvs5 && (RR.setVerticesData(uR.l.UV5Kind, this.uvs5, JR), GR && (yield)), this.uvs6 && (RR.setVerticesData(uR.l.UV6Kind, this.uvs6, JR), GR && (yield)), this.colors) {
            const yR = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            RR.setVerticesData(uR.l.ColorKind, this.colors, JR, yR), this.hasVertexAlpha && void 0 !== RR.hasVertexAlpha && (RR.hasVertexAlpha = !0), GR && (yield)
          }
          if (this.matricesIndices && (RR.setVerticesData(uR.l.MatricesIndicesKind, this.matricesIndices, JR), GR && (yield)), this.matricesWeights && (RR.setVerticesData(uR.l.MatricesWeightsKind, this.matricesWeights, JR), GR && (yield)), this.matricesIndicesExtra && (RR.setVerticesData(uR.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, JR), GR && (yield)), this.matricesWeightsExtra && (RR.setVerticesData(uR.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, JR), GR && (yield)), this.indices ? (RR.setIndices(this.indices, null, JR), GR && (yield)) : RR.setIndices([], null), RR.XM && this.materialInfos && this.materialInfos.length > 1) {
            const JR = RR;
            JR.XM = [];
            for (const RR of this.materialInfos) new wR.b(RR.materialIndex, RR.verticesStart, RR.verticesCount, RR.indexStart, RR.indexCount, JR)
          }
          return this
        }
        _update(RR, JR, GR) {
          return this.positions && RR.updateVerticesData(uR.l.PositionKind, this.positions, JR, GR), this.normals && RR.updateVerticesData(uR.l.NormalKind, this.normals, JR, GR), this.tangents && RR.updateVerticesData(uR.l.TangentKind, this.tangents, JR, GR), this.uvs && RR.updateVerticesData(uR.l.UVKind, this.uvs, JR, GR), this.uvs2 && RR.updateVerticesData(uR.l.UV2Kind, this.uvs2, JR, GR), this.uvs3 && RR.updateVerticesData(uR.l.UV3Kind, this.uvs3, JR, GR), this.uvs4 && RR.updateVerticesData(uR.l.UV4Kind, this.uvs4, JR, GR), this.uvs5 && RR.updateVerticesData(uR.l.UV5Kind, this.uvs5, JR, GR), this.uvs6 && RR.updateVerticesData(uR.l.UV6Kind, this.uvs6, JR, GR), this.colors && RR.updateVerticesData(uR.l.ColorKind, this.colors, JR, GR), this.matricesIndices && RR.updateVerticesData(uR.l.MatricesIndicesKind, this.matricesIndices, JR, GR), this.matricesWeights && RR.updateVerticesData(uR.l.MatricesWeightsKind, this.matricesWeights, JR, GR), this.matricesIndicesExtra && RR.updateVerticesData(uR.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, JR, GR), this.matricesWeightsExtra && RR.updateVerticesData(uR.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, JR, GR), this.indices && RR.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length;
          const uR = tR.l.Fe[0],
            ZR = tR.l.Fe[1];
          for (let qR = GR; qR < GR + yR; qR += 3) tR.r.FromArrayToRef(RR, qR, uR), tR.r.TransformCoordinatesToRef(uR, JR, ZR), RR[qR] = ZR.x, RR[qR + 1] = ZR.y, RR[qR + 2] = ZR.z
        }
        static _TransformVector3Normals(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length;
          const uR = tR.l.Fe[0],
            ZR = tR.l.Fe[1];
          for (let qR = GR; qR < GR + yR; qR += 3) tR.r.FromArrayToRef(RR, qR, uR), tR.r.TransformNormalToRef(uR, JR, ZR), RR[qR] = ZR.x, RR[qR + 1] = ZR.y, RR[qR + 2] = ZR.z
        }
        static _TransformVector4Normals(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RR.length;
          const uR = tR.l.Vector4[0],
            ZR = tR.l.Vector4[1];
          for (let qR = GR; qR < GR + yR; qR += 4) tR.s.FromArrayToRef(RR, qR, uR), tR.s.TransformNormalToRef(uR, JR, ZR), RR[qR] = ZR.x, RR[qR + 1] = ZR.y, RR[qR + 2] = ZR.z, RR[qR + 3] = ZR.w
        }
        static _FlipFaces(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR.length;
          for (let yR = JR; yR < JR + GR; yR += 3) {
            const JR = RR[yR + 1];
            RR[yR + 1] = RR[yR + 2], RR[yR + 2] = JR
          }
        }
        transform(JR) {
          const GR = JR.determinant() < 0;
          return this.positions && RR._TransformVector3Coordinates(this.positions, JR), this.normals && RR._TransformVector3Normals(this.normals, JR), this.tangents && RR._TransformVector4Normals(this.tangents, JR), GR && this.indices && RR._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const JR = [];
          for (const GR of this.materialInfos) {
            const yR = new RR;
            if (this.positions && (yR.positions = this.positions.slice(3 * GR.verticesStart, 3 * (GR.verticesCount + GR.verticesStart))), this.normals && (yR.normals = this.normals.slice(3 * GR.verticesStart, 3 * (GR.verticesCount + GR.verticesStart))), this.tangents && (yR.tangents = this.tangents.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.colors && (yR.colors = this.colors.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.uvs && (yR.uvs = this.uvs.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.uvs2 && (yR.uvs2 = this.uvs2.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.uvs3 && (yR.uvs3 = this.uvs3.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.uvs4 && (yR.uvs4 = this.uvs4.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.uvs5 && (yR.uvs5 = this.uvs5.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.uvs6 && (yR.uvs6 = this.uvs6.slice(2 * GR.verticesStart, 2 * (GR.verticesCount + GR.verticesStart))), this.matricesIndices && (yR.matricesIndices = this.matricesIndices.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.matricesIndicesExtra && (yR.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.matricesWeights && (yR.matricesWeights = this.matricesWeights.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.matricesWeightsExtra && (yR.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * GR.verticesStart, 4 * (GR.verticesCount + GR.verticesStart))), this.indices) {
              yR.indices = [];
              for (let RR = GR.indexStart; RR < GR.indexStart + GR.indexCount; RR++) yR.indices.push(this.indices[RR] - GR.verticesStart)
            }
            const tR = new rR;
            tR.indexStart = 0, tR.indexCount = yR.indices ? yR.indices.length : 0, tR.materialIndex = GR.materialIndex, tR.verticesStart = 0, tR.verticesCount = (yR.positions ? yR.positions.length : 0) / 3, yR.materialInfos = [tR], JR.push(yR)
          }
          return JR
        }
        merge(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const uR = Array.isArray(RR) ? RR.map((RR => ({
            vertexData: RR
          }))) : [{
            vertexData: RR
          }];
          return (0, VR.m)(this._mergeCoroutine(void 0, uR, JR, !1, GR, yR, tR))
        }* _mergeCoroutine(JR, GR) {
          let yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            tR = arguments.length > 3 ? arguments[3] : void 0,
            ZR = arguments.length > 4 ? arguments[4] : void 0,
            qR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            iR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let fR = GR.map((RR => RR.vertexData)),
            VR = this;
          if (iR)
            for (const RR of fR) RR && (RR._validate(), !this.normals && RR.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && RR.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && RR.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && RR.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && RR.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && RR.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && RR.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && RR.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && RR.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && RR.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && RR.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && RR.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && RR.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const RR of fR)
            if (RR)
              if (iR) this.normals && !RR.normals && (RR.normals = new Float32Array(RR.positions.length)), this.tangents && !RR.tangents && (RR.tangents = new Float32Array(RR.positions.length / 3 * 4)), this.uvs && !RR.uvs && (RR.uvs = new Float32Array(RR.positions.length / 3 * 2)), this.uvs2 && !RR.uvs2 && (RR.uvs2 = new Float32Array(RR.positions.length / 3 * 2)), this.uvs3 && !RR.uvs3 && (RR.uvs3 = new Float32Array(RR.positions.length / 3 * 2)), this.uvs4 && !RR.uvs4 && (RR.uvs4 = new Float32Array(RR.positions.length / 3 * 2)), this.uvs5 && !RR.uvs5 && (RR.uvs5 = new Float32Array(RR.positions.length / 3 * 2)), this.uvs6 && !RR.uvs6 && (RR.uvs6 = new Float32Array(RR.positions.length / 3 * 2)), this.colors && !RR.colors && (RR.colors = new Float32Array(RR.positions.length / 3 * 4), RR.colors.fill(1)), this.matricesIndices && !RR.matricesIndices && (RR.matricesIndices = new Float32Array(RR.positions.length / 3 * 4)), this.matricesWeights && !RR.matricesWeights && (RR.matricesWeights = new Float32Array(RR.positions.length / 3 * 4)), this.matricesIndicesExtra && !RR.matricesIndicesExtra && (RR.matricesIndicesExtra = new Float32Array(RR.positions.length / 3 * 4)), this.matricesWeightsExtra && !RR.matricesWeightsExtra && (RR.matricesWeightsExtra = new Float32Array(RR.positions.length / 3 * 4));
              else if (RR._validate(), !this.normals !== !RR.normals || !this.tangents !== !RR.tangents || !this.uvs !== !RR.uvs || !this.uvs2 !== !RR.uvs2 || !this.uvs3 !== !RR.uvs3 || !this.uvs4 !== !RR.uvs4 || !this.uvs5 !== !RR.uvs5 || !this.uvs6 !== !RR.uvs6 || !this.colors !== !RR.colors || !this.matricesIndices !== !RR.matricesIndices || !this.matricesWeights !== !RR.matricesWeights || !this.matricesIndicesExtra !== !RR.matricesIndicesExtra || !this.matricesWeightsExtra !== !RR.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (qR) {
            let RR, yR = 0,
              tR = 0;
            const uR = [];
            let ZR = null;
            const qR = [];
            for (const GR of this.splitBasedOnMaterialID()) qR.push({
              vertexData: GR,
              transform: JR
            });
            for (const JR of GR)
              if (JR.vertexData)
                for (const RR of JR.vertexData.splitBasedOnMaterialID()) qR.push({
                  vertexData: RR,
                  transform: JR.transform
                });
            qR.sort(((RR, JR) => {
              const GR = RR.vertexData.materialInfos ? RR.vertexData.materialInfos[0].materialIndex : 0,
                yR = JR.vertexData.materialInfos ? JR.vertexData.materialInfos[0].materialIndex : 0;
              return GR > yR ? 1 : GR === yR ? 0 : -1
            }));
            for (const JR of qR) {
              const GR = JR.vertexData;
              if (RR = GR.materialInfos ? GR.materialInfos[0].materialIndex : 0, ZR && ZR.materialIndex === RR) ZR.indexCount += GR.indices.length, ZR.verticesCount += GR.positions.length / 3;
              else {
                const JR = new rR;
                JR.materialIndex = RR, JR.indexStart = yR, JR.indexCount = GR.indices.length, JR.verticesStart = tR, JR.verticesCount = GR.positions.length / 3, uR.push(JR), ZR = JR
              }
              yR += GR.indices.length, tR += GR.positions.length / 3
            }
            const iR = qR.splice(0, 1)[0];
            VR = iR.vertexData, JR = iR.transform, fR = qR.map((RR => RR.vertexData)), GR = qR, this.materialInfos = uR
          }
          const KR = fR.reduce(((RR, JR) => RR + (JR.indices?.length ?? 0)), VR.indices?.length ?? 0);
          let wR = ZR || fR.some((RR => RR.indices === VR.indices)) ? VR.indices?.slice() : VR.indices;
          if (KR > 0) {
            let uR = wR?.length ?? 0;
            if (wR || (wR = new Array(KR)), wR.length !== KR) {
              if (Array.isArray(wR)) wR.length = KR;
              else {
                const RR = yR || wR instanceof Uint32Array ? new Uint32Array(KR) : new Uint16Array(KR);
                RR.set(wR), wR = RR
              }
              JR && JR.determinant() < 0 && RR._FlipFaces(wR, 0, uR)
            }
            let ZR = VR.positions ? VR.positions.length / 3 : 0;
            for (const {
                vertexData: JR,
                transform: yR
              }
              of GR)
              if (JR.indices) {
                for (let RR = 0; RR < JR.indices.length; RR++) wR[uR + RR] = JR.indices[RR] + ZR;
                yR && yR.determinant() < 0 && RR._FlipFaces(wR, uR, JR.indices.length), ZR += JR.positions.length / 3, uR += JR.indices.length, tR && (yield)
              }
          }
          return this.indices = wR, this.positions = RR._MergeElement(uR.l.PositionKind, VR.positions, JR, GR.map((RR => [RR.vertexData.positions, RR.transform]))), tR && (yield), VR.normals && (this.normals = RR._MergeElement(uR.l.NormalKind, VR.normals, JR, GR.map((RR => [RR.vertexData.normals, RR.transform]))), tR && (yield)), VR.tangents && (this.tangents = RR._MergeElement(uR.l.TangentKind, VR.tangents, JR, GR.map((RR => [RR.vertexData.tangents, RR.transform]))), tR && (yield)), VR.uvs && (this.uvs = RR._MergeElement(uR.l.UVKind, VR.uvs, JR, GR.map((RR => [RR.vertexData.uvs, RR.transform]))), tR && (yield)), VR.uvs2 && (this.uvs2 = RR._MergeElement(uR.l.UV2Kind, VR.uvs2, JR, GR.map((RR => [RR.vertexData.uvs2, RR.transform]))), tR && (yield)), VR.uvs3 && (this.uvs3 = RR._MergeElement(uR.l.UV3Kind, VR.uvs3, JR, GR.map((RR => [RR.vertexData.uvs3, RR.transform]))), tR && (yield)), VR.uvs4 && (this.uvs4 = RR._MergeElement(uR.l.UV4Kind, VR.uvs4, JR, GR.map((RR => [RR.vertexData.uvs4, RR.transform]))), tR && (yield)), VR.uvs5 && (this.uvs5 = RR._MergeElement(uR.l.UV5Kind, VR.uvs5, JR, GR.map((RR => [RR.vertexData.uvs5, RR.transform]))), tR && (yield)), VR.uvs6 && (this.uvs6 = RR._MergeElement(uR.l.UV6Kind, VR.uvs6, JR, GR.map((RR => [RR.vertexData.uvs6, RR.transform]))), tR && (yield)), VR.colors && (this.colors = RR._MergeElement(uR.l.ColorKind, VR.colors, JR, GR.map((RR => [RR.vertexData.colors, RR.transform]))), (void 0 !== VR.hasVertexAlpha || GR.some((RR => void 0 !== RR.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = VR.hasVertexAlpha || GR.some((RR => RR.vertexData.hasVertexAlpha))), tR && (yield)), VR.matricesIndices && (this.matricesIndices = RR._MergeElement(uR.l.MatricesIndicesKind, VR.matricesIndices, JR, GR.map((RR => [RR.vertexData.matricesIndices, RR.transform]))), tR && (yield)), VR.matricesWeights && (this.matricesWeights = RR._MergeElement(uR.l.MatricesWeightsKind, VR.matricesWeights, JR, GR.map((RR => [RR.vertexData.matricesWeights, RR.transform]))), tR && (yield)), VR.matricesIndicesExtra && (this.matricesIndicesExtra = RR._MergeElement(uR.l.MatricesIndicesExtraKind, VR.matricesIndicesExtra, JR, GR.map((RR => [RR.vertexData.matricesIndicesExtra, RR.transform]))), tR && (yield)), VR.matricesWeightsExtra && (this.matricesWeightsExtra = RR._MergeElement(uR.l.MatricesWeightsExtraKind, VR.matricesWeightsExtra, JR, GR.map((RR => [RR.vertexData.matricesWeightsExtra, RR.transform])))), this
        }
        static _MergeElement(JR, GR, yR, tR) {
          const ZR = tR.filter((RR => null !== RR[0] && void 0 !== RR[0]));
          if (!GR && 0 == ZR.length) return GR;
          if (!GR) return this._MergeElement(JR, ZR[0][0], ZR[0][1], ZR.slice(1));
          const qR = ZR.reduce(((RR, JR) => RR + JR[0].length), GR.length),
            iR = JR === uR.l.PositionKind ? RR._TransformVector3Coordinates : JR === uR.l.NormalKind ? RR._TransformVector3Normals : JR === uR.l.TangentKind ? RR._TransformVector4Normals : () => {};
          if (GR instanceof Float32Array) {
            const RR = new Float32Array(qR);
            RR.set(GR), yR && iR(RR, yR, 0, GR.length);
            let JR = GR.length;
            for (const [GR, yR] of ZR) RR.set(GR, JR), yR && iR(RR, yR, JR, GR.length), JR += GR.length;
            return RR
          } {
            const RR = new Array(qR);
            for (let yR = 0; yR < GR.length; yR++) RR[yR] = GR[yR];
            yR && iR(RR, yR, 0, GR.length);
            let JR = GR.length;
            for (const [GR, yR] of ZR) {
              for (let yR = 0; yR < GR.length; yR++) RR[JR + yR] = GR[yR];
              yR && iR(RR, yR, JR, GR.length), JR += GR.length
            }
            return RR
          }
        }
        _validate() {
          if (!this.positions) throw new KR.i("Positions are required", KR.g.MeshInvalidPositionsError);
          const RR = (RR, JR) => {
              const GR = (0, uR.i)(RR);
              if (JR.length % GR !== 0) throw new Error("The " + RR + "s array count must be a multiple of " + GR);
              return JR.length / GR
            },
            JR = RR(uR.l.PositionKind, this.positions),
            GR = (GR, yR) => {
              const tR = RR(GR, yR);
              if (tR !== JR) throw new Error("The " + GR + "s element count (" + tR + ") does not match the positions count (" + JR + ")")
            };
          this.normals && GR(uR.l.NormalKind, this.normals), this.tangents && GR(uR.l.TangentKind, this.tangents), this.uvs && GR(uR.l.UVKind, this.uvs), this.uvs2 && GR(uR.l.UV2Kind, this.uvs2), this.uvs3 && GR(uR.l.UV3Kind, this.uvs3), this.uvs4 && GR(uR.l.UV4Kind, this.uvs4), this.uvs5 && GR(uR.l.UV5Kind, this.uvs5), this.uvs6 && GR(uR.l.UV6Kind, this.uvs6), this.colors && GR(uR.l.ColorKind, this.colors), this.matricesIndices && GR(uR.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && GR(uR.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && GR(uR.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && GR(uR.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const JR = this.serialize();
          return RR.Parse(JR)
        }
        serialize() {
          const RR = {};
          if (this.positions && (RR.positions = Array.from(this.positions)), this.normals && (RR.normals = Array.from(this.normals)), this.tangents && (RR.tangents = Array.from(this.tangents)), this.uvs && (RR.uvs = Array.from(this.uvs)), this.uvs2 && (RR.uvs2 = Array.from(this.uvs2)), this.uvs3 && (RR.uvs3 = Array.from(this.uvs3)), this.uvs4 && (RR.uvs4 = Array.from(this.uvs4)), this.uvs5 && (RR.uvs5 = Array.from(this.uvs5)), this.uvs6 && (RR.uvs6 = Array.from(this.uvs6)), this.colors && (RR.colors = Array.from(this.colors), RR.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (RR.matricesIndices = Array.from(this.matricesIndices), RR.matricesIndicesExpanded = !0), this.matricesWeights && (RR.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (RR.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), RR.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (RR.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), RR.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            RR.materialInfos = [];
            for (const JR of this.materialInfos) {
              const GR = {
                indexStart: JR.indexStart,
                indexCount: JR.indexCount,
                materialIndex: JR.materialIndex,
                verticesStart: JR.verticesStart,
                verticesCount: JR.verticesCount
              };
              RR.materialInfos.push(GR)
            }
          }
          return RR
        }
        static ExtractFromMesh(JR, GR, yR) {
          return RR._ExtractFrom(JR, GR, yR)
        }
        static ExtractFromGeometry(JR, GR, yR) {
          return RR._ExtractFrom(JR, GR, yR)
        }
        static _ExtractFrom(JR, GR, yR) {
          const tR = new RR;
          if (JR.isVerticesDataPresent(uR.l.PositionKind) && (tR.positions = JR.getVerticesData(uR.l.PositionKind, GR, yR)), JR.isVerticesDataPresent(uR.l.NormalKind) && (tR.normals = JR.getVerticesData(uR.l.NormalKind, GR, yR)), JR.isVerticesDataPresent(uR.l.TangentKind) && (tR.tangents = JR.getVerticesData(uR.l.TangentKind, GR, yR)), JR.isVerticesDataPresent(uR.l.UVKind) && (tR.uvs = JR.getVerticesData(uR.l.UVKind, GR, yR)), JR.isVerticesDataPresent(uR.l.UV2Kind) && (tR.uvs2 = JR.getVerticesData(uR.l.UV2Kind, GR, yR)), JR.isVerticesDataPresent(uR.l.UV3Kind) && (tR.uvs3 = JR.getVerticesData(uR.l.UV3Kind, GR, yR)), JR.isVerticesDataPresent(uR.l.UV4Kind) && (tR.uvs4 = JR.getVerticesData(uR.l.UV4Kind, GR, yR)), JR.isVerticesDataPresent(uR.l.UV5Kind) && (tR.uvs5 = JR.getVerticesData(uR.l.UV5Kind, GR, yR)), JR.isVerticesDataPresent(uR.l.UV6Kind) && (tR.uvs6 = JR.getVerticesData(uR.l.UV6Kind, GR, yR)), JR.isVerticesDataPresent(uR.l.ColorKind)) {
            const RR = JR.geometry || JR,
              ZR = RR.getVertexBuffer(uR.l.ColorKind),
              qR = RR.getVerticesData(uR.l.ColorKind, GR, yR);
            if (3 === ZR.getSize()) {
              const RR = new Float32Array(4 * qR.length / 3);
              for (let JR = 0, GR = 0; JR < qR.length; JR += 3, GR += 4) RR[GR] = qR[JR], RR[GR + 1] = qR[JR + 1], RR[GR + 2] = qR[JR + 2], RR[GR + 3] = 1;
              tR.colors = RR
            } else {
              if (4 !== ZR.getSize()) throw new Error(`Unexpected number of color components: ${ZR.getSize()}`);
              tR.colors = qR
            }
          }
          return JR.isVerticesDataPresent(uR.l.MatricesIndicesKind) && (tR.matricesIndices = JR.getVerticesData(uR.l.MatricesIndicesKind, GR, yR)), JR.isVerticesDataPresent(uR.l.MatricesWeightsKind) && (tR.matricesWeights = JR.getVerticesData(uR.l.MatricesWeightsKind, GR, yR)), JR.isVerticesDataPresent(uR.l.MatricesIndicesExtraKind) && (tR.matricesIndicesExtra = JR.getVerticesData(uR.l.MatricesIndicesExtraKind, GR, yR)), JR.isVerticesDataPresent(uR.l.MatricesWeightsExtraKind) && (tR.matricesWeightsExtra = JR.getVerticesData(uR.l.MatricesWeightsExtraKind, GR, yR)), tR.indices = JR.NuR(GR, yR), tR
        }
        static CreateRibbon(RR) {
          throw (0, ZR.j)("ribbonBuilder")
        }
        static CreateBox(RR) {
          throw (0, ZR.j)("boxBuilder")
        }
        static CreateTiledBox(RR) {
          throw (0, ZR.j)("tiledBoxBuilder")
        }
        static CreateTiledPlane(RR) {
          throw (0, ZR.j)("tiledPlaneBuilder")
        }
        static CreateSphere(RR) {
          throw (0, ZR.j)("sphereBuilder")
        }
        static CreateCylinder(RR) {
          throw (0, ZR.j)("cylinderBuilder")
        }
        static CreateTorus(RR) {
          throw (0, ZR.j)("torusBuilder")
        }
        static CreateLineSystem(RR) {
          throw (0, ZR.j)("linesBuilder")
        }
        static CreateDashedLines(RR) {
          throw (0, ZR.j)("linesBuilder")
        }
        static CreateGround(RR) {
          throw (0, ZR.j)("groundBuilder")
        }
        static CreateTiledGround(RR) {
          throw (0, ZR.j)("groundBuilder")
        }
        static CreateGroundFromHeightMap(RR) {
          throw (0, ZR.j)("groundBuilder")
        }
        static CreatePlane(RR) {
          throw (0, ZR.j)("planeBuilder")
        }
        static CreateDisc(RR) {
          throw (0, ZR.j)("discBuilder")
        }
        static CreatePolygon(RR, JR, GR, yR, tR, uR, qR) {
          throw (0, ZR.j)("polygonBuilder")
        }
        static CreateIcoSphere(RR) {
          throw (0, ZR.j)("icoSphereBuilder")
        }
        static CreatePolyhedron(RR) {
          throw (0, ZR.j)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || tR.r.Up();
          throw (0, ZR.j)("capsuleBuilder")
        }
        static CreateTorusKnot(RR) {
          throw (0, ZR.j)("torusKnotBuilder")
        }
        static ComputeNormals(RR, JR, GR, yR) {
          let uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR = !1,
            pR = !1,
            gR = !1,
            bR = !1,
            vR = 1,
            OR = 0,
            xR = null;
          yR && (lR = !!yR.facetNormals, pR = !!yR.facetPositions, gR = !!yR.facetPartitioning, vR = !0 === yR.useRightHandedSystem ? -1 : 1, OR = yR.ratio || 0, bR = !!yR.depthSort, xR = yR.distanceTo, bR && void 0 === xR && (xR = tR.r.Zero()));
          let NR = 0,
            DR = 0,
            HR = 0,
            oR = 0;
          for (gR && yR && yR.bbSize && (NR = yR.subDiv.X * OR / yR.bbSize.x, DR = yR.subDiv.Y * OR / yR.bbSize.y, HR = yR.subDiv.Z * OR / yR.bbSize.z, oR = yR.subDiv.max * yR.subDiv.max, yR.facetPartitioning.length = 0), uR = 0; uR < RR.length; uR++) GR[uR] = 0;
          const cR = JR.length / 3 | 0;
          for (uR = 0; uR < cR; uR++) {
            if (LR = 3 * JR[3 * uR], nR = LR + 1, UR = LR + 2, WR = 3 * JR[3 * uR + 1], AR = WR + 1, CR = WR + 2, XR = 3 * JR[3 * uR + 2], MR = XR + 1, BR = XR + 2, ZR = RR[LR] - RR[WR], qR = RR[nR] - RR[AR], iR = RR[UR] - RR[CR], fR = RR[XR] - RR[WR], VR = RR[MR] - RR[AR], KR = RR[BR] - RR[CR], wR = vR * (qR * KR - iR * VR), rR = vR * (iR * fR - ZR * KR), eR = vR * (ZR * VR - qR * fR), aR = Math.sqrt(wR * wR + rR * rR + eR * eR), aR = 0 === aR ? 1 : aR, wR /= aR, rR /= aR, eR /= aR, lR && yR && (yR.facetNormals[uR].x = wR, yR.facetNormals[uR].y = rR, yR.facetNormals[uR].z = eR), pR && yR && (yR.facetPositions[uR].x = (RR[LR] + RR[WR] + RR[XR]) / 3, yR.facetPositions[uR].y = (RR[nR] + RR[AR] + RR[MR]) / 3, yR.facetPositions[uR].z = (RR[UR] + RR[CR] + RR[BR]) / 3), gR && yR) {
              const JR = Math.floor((yR.facetPositions[uR].x - yR.bInfo.minimum.x * OR) * NR),
                GR = Math.floor((yR.facetPositions[uR].y - yR.bInfo.minimum.y * OR) * DR),
                tR = Math.floor((yR.facetPositions[uR].z - yR.bInfo.minimum.z * OR) * HR),
                ZR = Math.floor((RR[LR] - yR.bInfo.minimum.x * OR) * NR),
                qR = Math.floor((RR[nR] - yR.bInfo.minimum.y * OR) * DR),
                iR = Math.floor((RR[UR] - yR.bInfo.minimum.z * OR) * HR),
                fR = Math.floor((RR[WR] - yR.bInfo.minimum.x * OR) * NR),
                VR = Math.floor((RR[AR] - yR.bInfo.minimum.y * OR) * DR),
                KR = Math.floor((RR[CR] - yR.bInfo.minimum.z * OR) * HR),
                wR = Math.floor((RR[XR] - yR.bInfo.minimum.x * OR) * NR),
                rR = Math.floor((RR[MR] - yR.bInfo.minimum.y * OR) * DR),
                eR = Math.floor((RR[BR] - yR.bInfo.minimum.z * OR) * HR),
                aR = ZR + yR.subDiv.max * qR + oR * iR,
                lR = fR + yR.subDiv.max * VR + oR * KR,
                pR = wR + yR.subDiv.max * rR + oR * eR,
                gR = JR + yR.subDiv.max * GR + oR * tR;
              yR.facetPartitioning[gR] = yR.facetPartitioning[gR] ? yR.facetPartitioning[gR] : [], yR.facetPartitioning[aR] = yR.facetPartitioning[aR] ? yR.facetPartitioning[aR] : [], yR.facetPartitioning[lR] = yR.facetPartitioning[lR] ? yR.facetPartitioning[lR] : [], yR.facetPartitioning[pR] = yR.facetPartitioning[pR] ? yR.facetPartitioning[pR] : [], yR.facetPartitioning[aR].push(uR), lR != aR && yR.facetPartitioning[lR].push(uR), pR != lR && pR != aR && yR.facetPartitioning[pR].push(uR), gR != aR && gR != lR && gR != pR && yR.facetPartitioning[gR].push(uR)
            }
            if (bR && yR && yR.facetPositions) {
              const RR = yR.depthSortedFacets[uR];
              RR.ind = 3 * uR, RR.sqDistance = tR.r.DistanceSquared(yR.facetPositions[uR], xR)
            }
            GR[LR] += wR, GR[nR] += rR, GR[UR] += eR, GR[WR] += wR, GR[AR] += rR, GR[CR] += eR, GR[XR] += wR, GR[MR] += rR, GR[BR] += eR
          }
          for (uR = 0; uR < GR.length / 3; uR++) wR = GR[3 * uR], rR = GR[3 * uR + 1], eR = GR[3 * uR + 2], aR = Math.sqrt(wR * wR + rR * rR + eR * eR), aR = 0 === aR ? 1 : aR, wR /= aR, rR /= aR, eR /= aR, GR[3 * uR] = wR, GR[3 * uR + 1] = rR, GR[3 * uR + 2] = eR
        }
        static _ComputeSides(JR, GR, yR, uR, ZR, qR, iR) {
          const fR = yR.length,
            VR = uR.length;
          let KR, wR;
          switch (JR = JR || RR.DEFAULTSIDE) {
            case RR.FRONTSIDE:
              break;
            case RR.BACKSIDE:
              for (KR = 0; KR < fR; KR += 3) {
                const RR = yR[KR];
                yR[KR] = yR[KR + 2], yR[KR + 2] = RR
              }
              for (wR = 0; wR < VR; wR++) uR[wR] = -uR[wR];
              break;
            case RR.DOUBLESIDE: {
              const RR = GR.length,
                JR = RR / 3;
              for (let yR = 0; yR < RR; yR++) GR[RR + yR] = GR[yR];
              for (KR = 0; KR < fR; KR += 3) yR[KR + fR] = yR[KR + 2] + JR, yR[KR + 1 + fR] = yR[KR + 1] + JR, yR[KR + 2 + fR] = yR[KR] + JR;
              for (wR = 0; wR < VR; wR++) uR[VR + wR] = -uR[wR];
              const rR = ZR.length;
              let eR;
              for (eR = 0; eR < rR; eR++) ZR[eR + rR] = ZR[eR];
              for (qR = qR || new tR.s(0, 0, 1, 1), iR = iR || new tR.s(0, 0, 1, 1), eR = 0, KR = 0; KR < rR / 2; KR++) ZR[eR] = qR.x + (qR.z - qR.x) * ZR[eR], ZR[eR + 1] = qR.y + (qR.w - qR.y) * ZR[eR + 1], ZR[eR + rR] = iR.x + (iR.z - iR.x) * ZR[eR + rR], ZR[eR + rR + 1] = iR.y + (iR.w - iR.y) * ZR[eR + rR + 1], eR += 2;
              break
            }
          }
        }
        static Parse(JR) {
          const GR = new RR,
            yR = JR.positions;
          yR && GR.set(yR, uR.l.PositionKind);
          const tR = JR.normals;
          tR && GR.set(tR, uR.l.NormalKind);
          const ZR = JR.tangents;
          ZR && GR.set(ZR, uR.l.TangentKind);
          const iR = JR.uvs;
          iR && GR.set(iR, uR.l.UVKind);
          const fR = JR.uvs2;
          fR && GR.set(fR, uR.l.UV2Kind);
          const VR = JR.uvs3;
          VR && GR.set(VR, uR.l.UV3Kind);
          const KR = JR.uvs4;
          KR && GR.set(KR, uR.l.UV4Kind);
          const wR = JR.uvs5;
          wR && GR.set(wR, uR.l.UV5Kind);
          const eR = JR.uvs6;
          eR && GR.set(eR, uR.l.UV6Kind);
          const aR = JR.colors;
          aR && (GR.set(qR.e.CheckColors4(aR, yR.length / 3), uR.l.ColorKind), void 0 !== JR.hasVertexAlpha && (GR.hasVertexAlpha = JR.hasVertexAlpha));
          const LR = JR.matricesIndices;
          LR && GR.set(LR, uR.l.MatricesIndicesKind);
          const nR = JR.matricesWeights;
          nR && GR.set(nR, uR.l.MatricesWeightsKind);
          const UR = JR.indices;
          UR && (GR.indices = UR);
          const WR = JR.materialInfos;
          if (WR) {
            GR.materialInfos = [];
            for (const RR of WR) {
              const JR = new rR;
              JR.indexCount = RR.indexCount, JR.indexStart = RR.indexStart, JR.verticesCount = RR.verticesCount, JR.verticesStart = RR.verticesStart, JR.materialIndex = RR.materialIndex, GR.materialInfos.push(JR)
            }
          }
          return GR
        }
        static ImportVertexData(JR, GR) {
          const yR = RR.Parse(JR);
          GR.setAllVerticesData(yR, JR.updatable)
        }
      }, (() => {
        const tR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [fR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], GR = [fR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], eR = [fR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], aR = [fR.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, yR.l)(RR, null, JR, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: RR => "_TransformVector3Coordinates" in RR,
            get: RR => RR._TransformVector3Coordinates
          },
          metadata: tR
        }, null, LR), (0, yR.l)(RR, null, GR, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: RR => "_TransformVector3Normals" in RR,
            get: RR => RR._TransformVector3Normals
          },
          metadata: tR
        }, null, LR), (0, yR.l)(RR, null, eR, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: RR => "_TransformVector4Normals" in RR,
            get: RR => RR._TransformVector4Normals
          },
          metadata: tR
        }, null, LR), (0, yR.l)(RR, null, aR, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: RR => "_FlipFaces" in RR,
            get: RR => RR._FlipFaces
          },
          metadata: tR
        }, null, LR), tR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tR
        })
      })(), RR.FRONTSIDE = ((0, yR.m)(RR, LR), 0), RR.BACKSIDE = 1, RR.DOUBLESIDE = 2, RR.DEFAULTSIDE = 0, RR._UniqueIdGenerator = 0, RR
    })()
  },
  42014: (RR, JR, GR) => {
    var yR = GR(38204),
      tR = GR(39914),
      uR = GR(41822),
      ZR = GR(41941),
      qR = GR(41663);
    const iR = "bakedVertexAnimationSettingsInstanced";

    function fR(RR) {
      const JR = RR.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return JR instanceof Float32Array || JR instanceof Uint16Array
    }

    function VR(RR, JR, GR, yR) {
      GR.NRR(Number.POSITIVE_INFINITY), yR.NRR(Number.NEGATIVE_INFINITY);
      for (let tR = 0; tR < 3 * JR; tR += 3) {
        const JR = RR[tR],
          uR = RR[tR + 1],
          ZR = RR[tR + 2];
        JR < GR.x && (GR.x = JR), uR < GR.y && (GR.y = uR), ZR < GR.z && (GR.z = ZR), JR > yR.x && (yR.x = JR), uR > yR.y && (yR.y = uR), ZR > yR.z && (yR.z = ZR)
      }
    }

    function KR(RR, JR, GR) {
      GR && (RR.x -= RR.x * GR.x + GR.y, RR.y -= RR.y * GR.x + GR.y, RR.z -= RR.z * GR.x + GR.y, JR.x += JR.x * GR.x + GR.y, JR.y += JR.y * GR.x + GR.y, JR.z += JR.z * GR.x + GR.y)
    }

    function wR(RR, JR, GR, tR, uR) {
      const ZR = yR.l.Fe[7],
        qR = yR.l.Fe[8];
      for (let iR = 0; iR < 2; ++iR)
        for (let fR = 0; fR < 2; ++fR)
          for (let VR = 0; VR < 2; ++VR) ZR.set(iR ? JR.x : RR.x, fR ? JR.y : RR.y, VR ? JR.z : RR.z), yR.r.TransformCoordinatesToRef(ZR, GR, qR), tR.minimizeInPlace(qR), uR.maximizeInPlace(qR)
    }

    function rR(RR, JR, GR, tR, uR) {
      const ZR = yR.l.Fe[7];
      for (let qR = 0; qR < 3 * JR; qR += 3) yR.r.TransformCoordinatesFromFloatsToRef(RR[qR], RR[qR + 1], RR[qR + 2], GR, ZR), tR.minimizeInPlace(ZR), uR.maximizeInPlace(ZR)
    }
    let eR = !1;
    eR || (eR = !0, ZR.e.prototype.thinInstanceAdd = function(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.jH().ke().getCaps().instancedArrays) return tR.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(RR) ? RR.length : 1);
      const GR = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(RR))
        for (let yR = 0; yR < RR.length; ++yR) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, RR[yR], yR === RR.length - 1 && JR);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, RR, JR);
      return GR
    }, ZR.e.prototype.thinInstanceAddSelf = function() {
      let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(yR.e.IdentityReadOnly, RR)
    }, ZR.e.prototype.thinInstanceRegisterAttribute = function(RR, JR) {
      RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), this.removeVerticesData(RR), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[RR] = JR, this._userThinInstanceBuffersStorage.sizes[RR] = JR * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[RR] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[RR]), this._userThinInstanceBuffersStorage.vertexBuffers[RR] = new qR.l(this.ke(), this._userThinInstanceBuffersStorage.data[RR], RR, !0, !1, JR, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[RR])
    }, ZR.e.prototype.thinInstanceSetMatrixAt = function(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || RR >= this._thinInstanceDataStorage.instancesCount) return !1;
      const yR = this._thinInstanceDataStorage.matrixData;
      return JR.copyToArray(yR, 16 * RR), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[RR] = JR), GR && (this.hRR("matrix"), this.se || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, ZR.e.prototype.thinInstanceSetAttributeAt = function(RR, JR, GR) {
      let yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[RR] || JR >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(RR, 0), this._userThinInstanceBuffersStorage.data[RR].set(GR, JR * this._userThinInstanceBuffersStorage.strides[RR]), yR && this.hRR(RR), !0)
    }, Object.defineProperty(ZR.e.prototype, "zRR", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(RR) {
        const JR = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        RR <= (JR ? JR.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = RR)
      },
      enumerable: !0,
      configurable: !0
    }), ZR.e.prototype._thinInstanceCreateMatrixBuffer = function(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const yR = new qR.d(this.ke(), JR, !GR, 16, !1, !0);
      for (let tR = 0; tR < 4; tR++) this.setVerticesBuffer(yR.createVertexBuffer(RR + tR, 4 * tR, 4));
      return yR
    }, ZR.e.prototype.tJR = function(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (GR = GR || 16, "matrix" === RR) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = JR ? JR.length : 32 * GR, this._thinInstanceDataStorage.matrixData = JR, this._thinInstanceDataStorage.worldMatrices = null, null !== JR ? (this._thinInstanceDataStorage.instancesCount = JR.length / GR, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", JR, yR), this.se || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.se || this.refreshBoundingInfo());
      else if ("previousMatrix" === RR) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = JR, null !== JR && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", JR, yR));
      else if ("splatIndex" === RR && JR) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = JR.length / GR, this._userThinInstanceBuffersStorage.data[RR] = JR, this._userThinInstanceBuffersStorage.strides[RR] = GR, this._userThinInstanceBuffersStorage.sizes[RR] = JR.length;
        const yR = new qR.d(this.ke(), JR, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = yR;
        for (let JR = 0; JR < 4; JR++) this.setVerticesBuffer(yR.createVertexBuffer(RR + JR, 4 * JR, 4))
      } else RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), null === JR ? this._userThinInstanceBuffersStorage?.data[RR] && (this.removeVerticesData(RR), delete this._userThinInstanceBuffersStorage.data[RR], delete this._userThinInstanceBuffersStorage.strides[RR], delete this._userThinInstanceBuffersStorage.sizes[RR], delete this._userThinInstanceBuffersStorage.vertexBuffers[RR]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[RR] = JR, this._userThinInstanceBuffersStorage.strides[RR] = GR, this._userThinInstanceBuffersStorage.sizes[RR] = JR.length, this._userThinInstanceBuffersStorage.vertexBuffers[RR] = new qR.l(this.ke(), JR, RR, !yR, !1, GR, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[RR]))
    }, ZR.e.prototype.hRR = function(RR) {
      "matrix" === RR ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(RR), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === RR ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(RR), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === RR ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[RR], 0, this._thinInstanceDataStorage.instancesCount) : (RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[RR] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[RR].isUpdatable() && this._thinInstanceRecreateBuffer(RR), this._userThinInstanceBuffersStorage.vertexBuffers[RR].updateDirectly(this._userThinInstanceBuffersStorage.data[RR], 0)))
    }, ZR.e.prototype.thinInstancePartialBufferUpdate = function(RR, JR, GR) {
      if ("matrix" === RR) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof JR ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * GR * Float32Array.BYTES_PER_ELEMENT, 16 * JR), 16 * GR) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(JR, GR));
      else if (RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[RR]) {
        const yR = this._userThinInstanceBuffersStorage.vertexBuffers[RR];
        if ("number" === typeof JR) {
          const yR = new Float32Array(this._userThinInstanceBuffersStorage.data[RR].buffer, this._userThinInstanceBuffersStorage.data[RR].byteOffset + GR * this._userThinInstanceBuffersStorage.strides[RR] * Float32Array.BYTES_PER_ELEMENT, JR * this._userThinInstanceBuffersStorage.strides[RR]);
          this._userThinInstanceBuffersStorage.vertexBuffers[RR].updateDirectly(yR, GR * this._userThinInstanceBuffersStorage.strides[RR])
        } else yR.updateDirectly(JR, GR)
      }
    }, ZR.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const RR = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let JR = 0; JR < this._thinInstanceDataStorage.instancesCount; ++JR) this._thinInstanceDataStorage.worldMatrices[JR] = yR.e.FromArray(RR, 16 * JR)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, ZR.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const ZR = this._thinInstanceDataStorage.boundingVectors;
      if (RR || !this.rawBoundingInfo) {
        if (ZR.length = 0, tR && function(RR, JR, GR) {
            const tR = RR._userThinInstanceBuffersStorage,
              ZR = tR?.data[iR],
              eR = tR?.strides[iR];
            if (!ZR || !eR || eR < 4 || !fR(RR)) return !1;
            const aR = RR._thinInstanceDataStorage.matrixData;
            if (!aR) return !1;
            const LR = {},
              nR = yR.l.Vector4[0],
              UR = yR.l.Fe[1],
              WR = yR.l.Fe[2],
              AR = yR.l.Fe[3],
              CR = yR.l.Fe[4],
              XR = yR.l.Fe[5],
              MR = yR.l.Fe[6],
              BR = yR.l.Matrix[2],
              lR = RR.geometry ? RR.geometry.boundingBias : null,
              pR = RR.getTotalVertices();
            UR.NRR(Number.POSITIVE_INFINITY), WR.NRR(Number.NEGATIVE_INFINITY), AR.NRR(Number.POSITIVE_INFINITY), CR.NRR(Number.NEGATIVE_INFINITY);
            for (let uR = 0; uR < RR._thinInstanceDataStorage.instancesCount; ++uR) {
              const JR = uR * eR;
              nR.set(ZR[JR], ZR[JR + 1], ZR[JR + 2], ZR[JR + 3]);
              const tR = RR._getData({
                applyMorph: GR,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: nR,
                updatePositionsArray: !1,
                cache: LR
              }, null, qR.l.PositionKind);
              if (!tR) return !1;
              VR(tR, pR, XR, MR), KR(XR, MR, lR), UR.minimizeInPlace(XR), WR.maximizeInPlace(MR), yR.e.FromArrayToRef(aR, 16 * uR, BR), lR ? wR(XR, MR, BR, AR, CR) : rR(tR, pR, BR, AR, CR)
            }
            return !(!isFinite(UR.x) || !isFinite(AR.x)) && (RR.Tm().reConstruct(AR, CR), RR.rawBoundingInfo = new uR.c(UR, WR), function(RR, JR) {
              RR.length = 0;
              for (let GR = 0; GR < JR.boundingBox.vectors.length; ++GR) RR.push(JR.boundingBox.vectors[GR].clone())
            }(JR, RR.rawBoundingInfo), RR._updateBoundingInfo(), !0)
          }(this, ZR, GR)) return;
        tR && this.bakedVertexAnimationManager?.isEnabled && fR(this) ? this.refreshBoundingInfo({
          applySkeleton: JR,
          applyMorph: GR,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(JR, GR);
        const RR = this.Tm();
        this.rawBoundingInfo = new uR.c(RR.minimum, RR.maximum)
      }
      const eR = this.Tm(),
        aR = this._thinInstanceDataStorage.matrixData;
      if (0 === ZR.length)
        for (let yR = 0; yR < eR.boundingBox.vectors.length; ++yR) ZR.push(eR.boundingBox.vectors[yR].clone());
      yR.l.Fe[0].NRR(Number.POSITIVE_INFINITY), yR.l.Fe[1].NRR(Number.NEGATIVE_INFINITY);
      for (let uR = 0; uR < this._thinInstanceDataStorage.instancesCount; ++uR) {
        yR.e.FromArrayToRef(aR, 16 * uR, yR.l.Matrix[0]);
        for (let RR = 0; RR < ZR.length; ++RR) yR.r.TransformCoordinatesToRef(ZR[RR], yR.l.Matrix[0], yR.l.Fe[2]), yR.l.Fe[0].minimizeInPlace(yR.l.Fe[2]), yR.l.Fe[1].maximizeInPlace(yR.l.Fe[2])
      }
      eR.reConstruct(yR.l.Fe[0], yR.l.Fe[1]), this._updateBoundingInfo()
    }, ZR.e.prototype._thinInstanceRecreateBuffer = function(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === RR ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, JR)) : "previousMatrix" === RR ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, JR)) : (RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[RR]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[RR] = new qR.l(this.ke(), this._userThinInstanceBuffersStorage.data[RR], RR, !JR, !1, this._userThinInstanceBuffersStorage.strides[RR], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[RR]))
    }, ZR.e.prototype._thinInstanceUpdateBufferSize = function(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      RR === qR.l.ColorKind && (RR = qR.l.ColorInstanceKind);
      const GR = "matrix" === RR;
      if (!GR && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[RR])) return;
      const yR = GR ? 16 : this._userThinInstanceBuffersStorage.strides[RR],
        tR = GR ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[RR];
      let uR = GR ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[RR];
      const ZR = (this._thinInstanceDataStorage.instancesCount + JR) * yR;
      let iR = tR;
      for (; iR < ZR;) iR *= 2;
      if (!uR || tR != iR) {
        if (uR) {
          const RR = new Float32Array(iR);
          RR.set(uR, 0), uR = RR
        } else uR = new Float32Array(iR);
        GR ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", uR, !1), this._thinInstanceDataStorage.matrixData = uR, this._thinInstanceDataStorage.matrixBufferSize = iR, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", uR, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[RR]?.dispose(), this._userThinInstanceBuffersStorage.data[RR] = uR, this._userThinInstanceBuffersStorage.sizes[RR] = iR, this._userThinInstanceBuffersStorage.vertexBuffers[RR] = new qR.l(this.ke(), uR, RR, !0, !1, yR, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[RR]))
      }
    }, ZR.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, ZR.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41979: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR,
      d: () => aR
    });
    var yR, tR, uR, ZR, qR = GR(41520),
      iR = GR(41524),
      fR = GR(41542),
      VR = GR(38233),
      KR = GR(38204),
      wR = GR(41741),
      rR = GR(38253),
      eR = GR(41407);
    let aR = (() => {
      var RR;
      let JR, GR, yR, tR, uR, ZR, rR, eR, aR, LR = wR.d,
        nR = [],
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        lR = [],
        pR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [];
      return RR = class extends LR {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(JR) {
          this._billboardMode !== JR && (this._billboardMode = JR, this._cache.useBillboardPosition = 0 !== (this._billboardMode & RR.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(RR) {
          this._infiniteDistance !== RR && (this._infiniteDistance = RR)
        }
        constructor(JR) {
          let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(JR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new KR.r(0, 0, 1), this._up = new KR.r(0, 1, 0), this._right = new KR.r(1, 0, 0), this._position = (0, qR.m)(this, nR, KR.r.Zero()), this._rotation = ((0, qR.m)(this, UR), (0, qR.m)(this, WR, KR.r.Zero())), this._rotationQuaternion = ((0, qR.m)(this, AR), (0, qR.m)(this, CR, null)), this._scaling = ((0, qR.m)(this, XR), (0, qR.m)(this, MR, KR.r.One())), this._transformToBoneReferal = ((0, qR.m)(this, BR), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, qR.m)(this, lR, RR.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, qR.m)(this, pR), (0, qR.m)(this, gR, 1)), this._infiniteDistance = ((0, qR.m)(this, bR), (0, qR.m)(this, vR, !1)), this.ignoreNonUniformScaling = ((0, qR.m)(this, OR), (0, qR.m)(this, xR, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, qR.m)(this, NR), (0, qR.m)(this, DR, !1)), this._poseMatrix = ((0, qR.m)(this, HR), null), this._localMatrix = KR.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = KR.r.Zero(), this._absoluteScaling = KR.r.Zero(), this._absoluteRotationQuaternion = KR.i.Identity(), this._pivotMatrix = KR.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new VR.b, this._nonUniformScaling = !1, GR && this.jH().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(RR) {
          this._position = RR, this._markAsDirtyInternal()
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
        set rotation(RR) {
          this._rotation = RR, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get MK() {
          return this._scaling
        }
        set MK(RR) {
          this._scaling = RR, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(RR) {
          this._rotationQuaternion = RR, RR && this._rotation.NRR(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return KR.r.TransformNormalFromFloatsToRef(0, 0, this.jH().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return KR.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return KR.r.TransformNormalFromFloatsToRef(this.jH().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(RR) {
          return this._poseMatrix ? (this._poseMatrix.vN(RR), this) : (this._poseMatrix = RR.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = KR.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const JR = this._cache;
          return this._billboardMode === JR.billboardMode && this._billboardMode === RR.BILLBOARDMODE_NONE && (!JR.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const RR = this._cache;
          RR.localMatrixUpdated = !1, RR.billboardMode = -1, RR.infiniteDistance = !1, RR.useBillboardPosition = !1
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
        setPreTransformMatrix(RR) {
          return this.setPivotMatrix(RR, !1)
        }
        setPivotMatrix(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.vN(RR), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = JR, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = KR.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            JR = arguments.length > 1 ? arguments[1] : void 0,
            GR = arguments.length > 2 ? arguments[2] : void 0;
          const yR = this.clone("Clone of " + (this.name || this.id), RR || this.parent, !0);
          yR && GR && GR(this, yR);
          for (const tR of this.getChildTransformNodes(!0)) tR.instantiateHierarchy(yR, JR, GR);
          return yR
        }
        yI() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return RR ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.NRR(0), this._rotationQuaternion = this._rotationQuaternion || KR.i.Identity(), RR.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = RR, this._absolutePosition.VJR(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get tiR() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(RR) {
          if (!RR) return this;
          let JR, GR, yR;
          if (void 0 === RR.x) {
            if (arguments.length < 3) return this;
            JR = arguments[0], GR = arguments[1], yR = arguments[2]
          } else JR = RR.x, GR = RR.y, yR = RR.z;
          if (this.parent) {
            const RR = KR.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(RR), KR.r.TransformCoordinatesFromFloatsToRef(JR, GR, yR, RR, this.position)
          } else this.position.x = JR, this.position.y = GR, this.position.z = yR;
          return this._absolutePosition.vN(RR), this
        }
        setPositionWithLocalVector(RR) {
          return this.computeWorldMatrix(), this.position = KR.r.TransformNormal(RR, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const RR = KR.l.Matrix[0];
          return this._localMatrix.invertToRef(RR), KR.r.TransformNormal(this.position, RR)
        }
        locallyTranslate(RR) {
          return this.computeWorldMatrix(!0), this.position = KR.r.TransformCoordinates(RR, this._localMatrix), this
        }
        lookAt(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const ZR = RR._LookAtVectorCache,
            qR = 0 === uR ? this.position : this.getAbsolutePosition();
          if (JR.subtractToRef(qR, ZR), this.setDirection(ZR, GR, yR, tR), 1 === uR && this.parent)
            if (this.rotationQuaternion) {
              const RR = KR.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(RR);
              const JR = KR.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(JR), JR.invert(), RR.multiplyToRef(JR, RR), this.rotationQuaternion.fromRotationMatrix(RR)
            } else {
              const RR = KR.l.Quaternion[0];
              KR.i.FromEulerVectorToRef(this.rotation, RR);
              const JR = KR.l.Matrix[0];
              RR.toRotationMatrix(JR);
              const GR = KR.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(GR), GR.invert(), JR.multiplyToRef(GR, JR), RR.fromRotationMatrix(JR), RR.toEulerAnglesToRef(this.rotation)
            } return this
        }
        m_(RR) {
          const JR = KR.r.Zero();
          return this.getDirectionToRef(RR, JR), JR
        }
        getDirectionToRef(RR, JR) {
          return KR.r.TransformNormalToRef(RR, this.getWorldMatrix(), JR), this
        }
        setDirection(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const tR = -Math.atan2(RR.z, RR.x) + Math.PI / 2,
            uR = Math.sqrt(RR.x * RR.x + RR.z * RR.z),
            ZR = -Math.atan2(RR.y, uR);
          return this.rotationQuaternion ? KR.i.RotationYawPitchRollToRef(tR + JR, ZR + GR, yR, this.rotationQuaternion) : (this.rotation.x = ZR + GR, this.rotation.y = tR + JR, this.rotation.z = yR), this
        }
        setPivotPoint(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.jH().getRenderId() && this.computeWorldMatrix(!0);
          const GR = this.getWorldMatrix();
          if (1 == JR) {
            const JR = KR.l.Matrix[0];
            GR.invertToRef(JR), RR = KR.r.TransformCoordinates(RR, JR)
          }
          return this.setPivotMatrix(KR.e.Translation(-RR.x, -RR.y, -RR.z), !0)
        }
        getPivotPoint() {
          const RR = KR.r.Zero();
          return this.getPivotPointToRef(RR), RR
        }
        getPivotPointToRef(RR) {
          return RR.x = -this._pivotMatrix.m[12], RR.y = -this._pivotMatrix.m[13], RR.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const RR = KR.r.Zero();
          return this.getAbsolutePivotPointToRef(RR), RR
        }
        getAbsolutePivotPointToRef(RR) {
          return this.getPivotPointToRef(RR), KR.r.TransformCoordinatesToRef(RR, this.getWorldMatrix(), RR), this
        }
        hGR(RR) {
          if (this._isDirty) return this;
          if (this._children)
            for (const JR of this._children) JR.hGR(RR);
          return super.hGR(RR)
        }
        setParent(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!JR && !this.parent) return this;
          const tR = KR.l.Quaternion[0],
            uR = KR.l.Fe[0],
            ZR = KR.l.Fe[1],
            qR = KR.l.Matrix[1];
          KR.e.IdentityToRef(qR);
          const iR = KR.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let fR = this.rotationQuaternion;
          return fR || (fR = RR._TmpRotation, KR.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, fR)), KR.e.ComposeToRef(this.MK, fR, this.position, iR), this.parent && iR.multiplyToRef(this.parent.computeWorldMatrix(!0), iR), JR && (JR.computeWorldMatrix(!0).invertToRef(qR), iR.multiplyToRef(qR, iR)), iR.decompose(ZR, tR, uR, GR ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.vN(tR) : tR.toEulerAnglesToRef(this.rotation), this.MK.vN(ZR), this.position.vN(uR), this.parent = JR, yR && this.setPivotMatrix(KR.e.Identity()), this
        }
        addChild(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return RR.setParent(this, JR), this
        }
        removeChild(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return RR.parent !== this || RR.setParent(null, JR), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(RR) {
          return this._nonUniformScaling !== RR && (this._nonUniformScaling = RR, !0)
        }
        attachToBone(RR, JR) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = JR, this.parent = RR, RR.getSkeleton().prepare(!0), RR.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = RR ? this._currentParentWhenAttachingToBone : null, this) : (RR && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(JR, GR, yR) {
          let tR;
          if (JR.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.NRR(0)), yR && 0 !== yR) {
            if (this.parent) {
              const RR = this.parent.getWorldMatrix(),
                yR = KR.l.Matrix[0];
              RR.invertToRef(yR), JR = KR.r.TransformNormal(JR, yR), RR.determinant() < 0 && (GR *= -1)
            }
            tR = KR.i.RotationAxisToRef(JR, GR, RR._RotationAxisCache), tR.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else tR = KR.i.RotationAxisToRef(JR, GR, RR._RotationAxisCache), this.rotationQuaternion.multiplyToRef(tR, this.rotationQuaternion);
          return this
        }
        rotateAround(RR, JR, GR) {
          JR.normalize(), this.rotationQuaternion || (this.rotationQuaternion = KR.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.NRR(0));
          const yR = KR.l.Fe[0],
            tR = KR.l.Fe[1],
            uR = KR.l.Fe[2],
            ZR = KR.l.Quaternion[0],
            qR = KR.l.Matrix[0],
            iR = KR.l.Matrix[1],
            fR = KR.l.Matrix[2],
            VR = KR.l.Matrix[3];
          return RR.subtractToRef(this.position, yR), KR.e.TranslationToRef(yR.x, yR.y, yR.z, qR), KR.e.TranslationToRef(-yR.x, -yR.y, -yR.z, iR), KR.e.RotationAxisToRef(JR, GR, fR), iR.multiplyToRef(fR, VR), VR.multiplyToRef(qR, VR), VR.decompose(tR, ZR, uR), this.position.addInPlace(uR), ZR.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(RR, JR, GR) {
          const yR = RR.scale(JR);
          if (GR && 0 !== GR) this.setAbsolutePosition(this.getAbsolutePosition().add(yR));
          else {
            const RR = this.getPositionExpressedInLocalSpace().add(yR);
            this.setPositionWithLocalVector(RR)
          }
          return this
        }
        addRotation(RR, JR, GR) {
          let yR;
          this.rotationQuaternion ? yR = this.rotationQuaternion : (yR = KR.l.Quaternion[1], KR.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, yR));
          const tR = KR.l.Quaternion[0];
          return KR.i.RotationYawPitchRollToRef(JR, RR, GR, tR), yR.multiplyInPlace(tR), this.rotationQuaternion || yR.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== RR.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const yR = this.jH().getRenderId();
          if (!this._isDirty && !JR && (this._currentRenderId === yR || this.isSynchronized())) return this._currentRenderId = yR, this._worldMatrix;
          GR = GR || this.jH().activeCamera, this._updateCache();
          const tR = this._cache;
          tR.pivotMatrixUpdated = !1, tR.billboardMode = this.billboardMode, tR.infiniteDistance = this.infiniteDistance, tR.parent = this._parentNode, this._currentRenderId = yR, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const uR = this._getEffectiveParent(),
            ZR = RR._TmpScaling;
          let qR, iR = this._position;
          if (this._infiniteDistance && !this.parent && GR) {
            const JR = GR.getWorldMatrix().m;
            iR = RR._TmpTranslation, iR.VJR(this._position.x + JR[12], this._position.y + JR[13], this._position.z + JR[14])
          }
          if (ZR.VJR(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, qR = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(KR.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.VJR(0, 0, 0))
            }
          } else qR = RR._TmpRotation, KR.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qR);
          if (this._usePivotMatrix) {
            const RR = KR.l.Matrix[1];
            KR.e.ScalingToRef(ZR.x, ZR.y, ZR.z, RR);
            const JR = KR.l.Matrix[0];
            qR.toRotationMatrix(JR), this._pivotMatrix.multiplyToRef(RR, KR.l.Matrix[4]), KR.l.Matrix[4].multiplyToRef(JR, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(iR.x, iR.y, iR.z)
          } else KR.e.ComposeToRef(ZR, qR, iR, this._localMatrix);
          if (uR && uR.getWorldMatrix) {
            if (JR && uR.computeWorldMatrix(JR), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const RR = this.parent;
                RR.getSkeleton().prepare(), RR.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), KR.l.Matrix[7])
              } else KR.l.Matrix[7].vN(uR.getWorldMatrix());
              const JR = KR.l.Fe[5],
                GR = KR.l.Fe[6],
                yR = KR.l.Quaternion[0];
              KR.l.Matrix[7].decompose(GR, yR, JR), KR.e.ScalingToRef(GR.x, GR.y, GR.z, KR.l.Matrix[7]), KR.l.Matrix[7].setTranslation(JR), RR.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(yR, JR), this._localMatrix.setTranslation(JR)), this._localMatrix.multiplyToRef(KR.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const RR = this.parent;
              RR.getSkeleton().prepare(), this._localMatrix.multiplyToRef(RR.getFinalMatrix(), KR.l.Matrix[6]), KR.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(uR.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.vN(this._localMatrix);
          if (GR && this.billboardMode)
            if (tR.useBillboardPosition) {
              const JR = KR.l.Fe[0];
              this._worldMatrix.getTranslationToRef(JR);
              const yR = GR.globalPosition;
              this._worldMatrix.invertToRef(KR.l.Matrix[1]);
              const tR = KR.l.Fe[1];
              KR.r.TransformCoordinatesToRef(yR, KR.l.Matrix[1], tR), tR.normalize();
              const uR = -Math.atan2(tR.z, tR.x) + Math.PI / 2,
                ZR = Math.sqrt(tR.x * tR.x + tR.z * tR.z),
                qR = -Math.atan2(tR.y, ZR);
              if (KR.i.RotationYawPitchRollToRef(uR, qR, 0, KR.l.Quaternion[0]), (this.billboardMode & RR.BILLBOARDMODE_ALL) !== RR.BILLBOARDMODE_ALL) {
                const JR = KR.l.Fe[1];
                KR.l.Quaternion[0].toEulerAnglesToRef(JR), (this.billboardMode & RR.BILLBOARDMODE_X) !== RR.BILLBOARDMODE_X && (JR.x = 0), (this.billboardMode & RR.BILLBOARDMODE_Y) !== RR.BILLBOARDMODE_Y && (JR.y = 0), (this.billboardMode & RR.BILLBOARDMODE_Z) !== RR.BILLBOARDMODE_Z && (JR.z = 0), KR.e.RotationYawPitchRollToRef(JR.y, JR.x, JR.z, KR.l.Matrix[0])
              } else KR.e.FromQuaternionToRef(KR.l.Quaternion[0], KR.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(KR.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(KR.l.Fe[0])
            } else {
              const JR = KR.l.Fe[0];
              this._worldMatrix.getTranslationToRef(JR), KR.l.Matrix[1].vN(GR.getViewMatrix());
              const yR = this.jH().useRightHandedSystem;
              if (yR && KR.l.Matrix[1].multiplyToRef(RR._TmpRHRestore, KR.l.Matrix[1]), KR.l.Matrix[1].setTranslationFromFloats(0, 0, 0), KR.l.Matrix[1].invertToRef(KR.l.Matrix[0]), (this.billboardMode & RR.BILLBOARDMODE_ALL) !== RR.BILLBOARDMODE_ALL) {
                KR.l.Matrix[0].decompose(void 0, KR.l.Quaternion[0], void 0);
                const JR = KR.l.Fe[1];
                KR.l.Quaternion[0].toEulerAnglesToRef(JR), (this.billboardMode & RR.BILLBOARDMODE_X) !== RR.BILLBOARDMODE_X && (JR.x = 0), (this.billboardMode & RR.BILLBOARDMODE_Y) !== RR.BILLBOARDMODE_Y && (JR.y = 0), (this.billboardMode & RR.BILLBOARDMODE_Z) !== RR.BILLBOARDMODE_Z && (JR.z = 0), yR && (JR.y += Math.PI), KR.e.RotationYawPitchRollToRef(JR.y, JR.x, JR.z, KR.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(KR.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(KR.l.Fe[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : uR && uR._nonUniformScaling ? this._updateNonUniformScalingState(uR._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.VJR(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = KR.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), RR) {
            const RR = this.getChildren();
            for (let JR = 0; JR < RR.length; ++JR) {
              const GR = RR[JR];
              if (GR) {
                GR.computeWorldMatrix();
                const RR = KR.l.Matrix[0];
                GR._localMatrix.multiplyToRef(this._localMatrix, RR);
                const JR = KR.l.Quaternion[0];
                RR.decompose(GR.MK, JR, GR.position), GR.rotationQuaternion ? GR.rotationQuaternion.vN(JR) : JR.toEulerAnglesToRef(GR.rotation)
              }
            }
          }
          this.MK.VJR(1, 1, 1), this.position.VJR(0, 0, 0), this.rotation.VJR(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = KR.i.Identity()), this._worldMatrix = KR.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(RR) {
          return this.onAfterWorldMatrixUpdateObservable.add(RR), this
        }
        unregisterAfterWorldMatrixUpdate(RR) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(RR), this
        }
        getPositionInCameraSpace() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return RR || (RR = this.jH().activeCamera), KR.r.TransformCoordinates(this.getAbsolutePosition(), RR.getViewMatrix())
        }
        getDistanceToCamera() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return RR || (RR = this.jH().activeCamera), this.getAbsolutePosition().subtract(RR.globalPosition).length()
        }
        clone(JR, GR, yR) {
          const tR = fR.c.Clone((() => new RR(JR, this.jH())), this);
          if (tR.name = JR, tR.id = JR, GR && (tR.parent = GR), !yR) {
            const RR = this.getDescendants(!0);
            for (let GR = 0; GR < RR.length; GR++) {
              const yR = RR[GR];
              yR.clone && yR.clone(JR + "." + yR.name, tR)
            }
          }
          return tR
        }
        serialize(RR) {
          const JR = fR.c.Serialize(this, RR);
          return JR.type = this.getClassName(), JR.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(JR), JR.localMatrix = this.getPivotMatrix().QtR(), JR.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (JR.yI = !0), fR.c.AppendSerializedAnimations(this, JR), JR.WL = this.serializeAnimationRanges(), JR
        }
        getChildTransformNodes(JR, GR) {
          const yR = [];
          return this._getDescendants(yR, JR, (JR => (!GR || GR(JR)) && JR instanceof RR)), yR
        }
        dispose(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.jH().stopAnimation(this), this.jH().removeTransformNode(this), this._parentContainer) {
            const RR = this._parentContainer.transformNodes.indexOf(this);
            RR > -1 && this._parentContainer.transformNodes.splice(RR, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), RR) {
            const RR = this.getChildTransformNodes(!0);
            for (const JR of RR) JR.parent = null, JR.computeWorldMatrix(!0)
          }
          super.dispose(RR, JR)
        }
        normalizeToUnitCube() {
          let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0,
            yR = null,
            tR = null;
          JR && (this.rotationQuaternion ? (tR = this.rotationQuaternion.clone(), this.rotationQuaternion.VJR(0, 0, 0, 1)) : this.rotation && (yR = this.rotation.clone(), this.rotation.VJR(0, 0, 0)));
          const uR = this.getHierarchyBoundingVectors(RR, GR),
            ZR = uR.max.subtract(uR.min),
            qR = Math.max(ZR.x, ZR.y, ZR.z);
          if (0 === qR) return this;
          const iR = 1 / qR;
          return this.MK.scaleInPlace(iR), JR && (this.rotationQuaternion && tR ? this.rotationQuaternion.vN(tR) : this.rotation && yR && this.rotation.vN(yR)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const fR = "function" === typeof Symbol && Symbol.metadata ? Object.create(LR[Symbol.metadata] ?? null) : void 0;
        JR = [(0, iR.G)("position")], GR = [(0, iR.G)("rotation")], yR = [(0, iR.y)("rotationQuaternion")], tR = [(0, iR.G)("MK")], uR = [(0, iR.H)("billboardMode")], ZR = [(0, iR.H)()], rR = [(0, iR.H)("infiniteDistance")], eR = [(0, iR.H)()], aR = [(0, iR.H)()], (0, qR.l)(null, null, JR, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: RR => "_position" in RR,
            get: RR => RR._position,
            set: (RR, JR) => {
              RR._position = JR
            }
          },
          metadata: fR
        }, nR, UR), (0, qR.l)(null, null, GR, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: RR => "_rotation" in RR,
            get: RR => RR._rotation,
            set: (RR, JR) => {
              RR._rotation = JR
            }
          },
          metadata: fR
        }, WR, AR), (0, qR.l)(null, null, yR, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: RR => "_rotationQuaternion" in RR,
            get: RR => RR._rotationQuaternion,
            set: (RR, JR) => {
              RR._rotationQuaternion = JR
            }
          },
          metadata: fR
        }, CR, XR), (0, qR.l)(null, null, tR, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: RR => "_scaling" in RR,
            get: RR => RR._scaling,
            set: (RR, JR) => {
              RR._scaling = JR
            }
          },
          metadata: fR
        }, MR, BR), (0, qR.l)(null, null, uR, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: RR => "_billboardMode" in RR,
            get: RR => RR._billboardMode,
            set: (RR, JR) => {
              RR._billboardMode = JR
            }
          },
          metadata: fR
        }, lR, pR), (0, qR.l)(null, null, ZR, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: RR => "scalingDeterminant" in RR,
            get: RR => RR.scalingDeterminant,
            set: (RR, JR) => {
              RR.scalingDeterminant = JR
            }
          },
          metadata: fR
        }, gR, bR), (0, qR.l)(null, null, rR, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: RR => "_infiniteDistance" in RR,
            get: RR => RR._infiniteDistance,
            set: (RR, JR) => {
              RR._infiniteDistance = JR
            }
          },
          metadata: fR
        }, vR, OR), (0, qR.l)(null, null, eR, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: RR => "ignoreNonUniformScaling" in RR,
            get: RR => RR.ignoreNonUniformScaling,
            set: (RR, JR) => {
              RR.ignoreNonUniformScaling = JR
            }
          },
          metadata: fR
        }, xR, NR), (0, qR.l)(null, null, aR, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: RR => "reIntegrateRotationIntoRotationQuaternion" in RR,
            get: RR => RR.reIntegrateRotationIntoRotationQuaternion,
            set: (RR, JR) => {
              RR.reIntegrateRotationIntoRotationQuaternion = JR
            }
          },
          metadata: fR
        }, DR, HR), fR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fR
        })
      })(), RR.BILLBOARDMODE_NONE = 0, RR.BILLBOARDMODE_X = 1, RR.BILLBOARDMODE_Y = 2, RR.BILLBOARDMODE_Z = 4, RR.BILLBOARDMODE_ALL = 7, RR.BILLBOARDMODE_USE_POSITION = 128, RR.BillboardUseParentOrientation = !1, RR._TmpRotation = KR.i.Zero(), RR._TmpScaling = KR.r.Zero(), RR._TmpTranslation = KR.r.Zero(), RR._TmpRHRestore = KR.e.Scaling(1, 1, -1), RR._LookAtVectorCache = new KR.r(0, 0, 0), RR._RotationAxisCache = new KR.i, RR
    })();

    function LR(RR, JR, GR) {
      const yR = fR.c.Parse((() => new aR(RR.name, JR)), RR, JR, GR);
      if (RR.localMatrix ? yR.setPreTransformMatrix(KR.e.FromArray(RR.localMatrix)) : RR.pivotMatrix && yR.setPivotMatrix(KR.e.FromArray(RR.pivotMatrix)), yR.JA(RR.isEnabled), yR._waitingParsedUniqueId = RR.uniqueId, void 0 !== RR.parentId && (yR._waitingParentId = RR.parentId), void 0 !== RR.parentInstanceIndex && (yR._waitingParentInstanceIndex = RR.parentInstanceIndex), RR.yI && (yR._waitingFreezeWorldMatrix = RR.yI), RR.animations) {
        for (let JR = 0; JR < RR.animations.length; JR++) {
          const GR = RR.animations[JR],
            tR = (0, rR.e)("BABYLON.Animation");
          tR && yR.animations.push(tR.Parse(GR))
        }
        wR.d.ParseAnimationRanges(yR, RR, JR)
      }
      return RR.autoAnimate && JR.beginAnimation(yR, RR.autoAnimateFrom, RR.autoAnimateTo, RR.autoAnimateLoop, RR.autoAnimateSpeed || 1), yR
    }
    let nR = !1;

    function UR() {
      nR || (nR = !0, aR.Parse = LR)
    }(yR = aR.prototype).Lk ?? (yR.Lk = (0, eR.f)("TransformNode", "Lk")), (tR = aR.prototype).applyImpulse ?? (tR.applyImpulse = (0, eR.f)("TransformNode", "applyImpulse")), (uR = aR.prototype).applyAngularImpulse ?? (uR.applyAngularImpulse = (0, eR.f)("TransformNode", "applyAngularImpulse")), (ZR = aR.prototype).applyTorque ?? (ZR.applyTorque = (0, eR.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(aR.prototype, "physicsBody") || Object.defineProperty(aR.prototype, "physicsBody", (0, eR.e)("TransformNode", "physicsBody"))
  },
  41949: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      try {
        const yR = RR.next();
        yR.done ? JR(yR) : yR.value ? yR.value.then((() => {
          yR.value = void 0, JR(yR)
        }), GR) : JR(yR)
      } catch (yR) {
        GR(yR)
      }
    }

    function tR() {
      let RR, JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (GR, tR, uR) => {
        const ZR = performance.now();
        void 0 === RR || ZR - RR > JR ? (RR = ZR, setTimeout((() => {
          yR(GR, tR, uR)
        }), 0)) : yR(GR, tR, uR)
      }
    }

    function uR(RR, JR, GR, yR, tR) {
      const uR = () => {
        let ZR;
        const qR = RR => {
          RR.done ? GR(RR.value) : void 0 === ZR ? ZR = !0 : uR()
        };
        do {
          ZR = void 0, tR && tR.aborted ? yR(new Error("Aborted")) : JR(RR, qR, yR), void 0 === ZR && (ZR = !1)
        } while (ZR)
      };
      uR()
    }

    function ZR(RR, JR) {
      let GR;
      return uR(RR, yR, (RR => GR = RR), (RR => {
        throw RR
      }), JR), GR
    }
    async function qR(RR, JR, GR) {
      return await new Promise(((yR, tR) => {
        uR(RR, JR, yR, tR, GR)
      }))
    }

    function iR(RR, JR) {
      return function() {
        return ZR(RR(...arguments), JR)
      }
    }
    GR.d(JR, {
      d: () => tR,
      f: () => iR,
      j: () => qR,
      m: () => ZR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);
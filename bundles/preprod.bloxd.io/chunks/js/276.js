export const id = 276;
export const ids = [276];
export const modules = {
  41323: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM,
      d: () => EM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41213),
      aM = iM(38068),
      PM = iM(38040),
      nM = iM(41328),
      QM = iM(39711),
      zM = iM(38085),
      LM = iM(40990),
      mM = iM(39078),
      HM = iM(38740),
      hM = iM(41061),
      JM = iM(41121);
    let dM = (() => {
      var MM;
      let rM, iM, zM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM = nM.d,
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        AM = [],
        xM = [],
        vM = [],
        FM = [],
        BM = [],
        XM = [],
        IM = [],
        KM = [],
        qM = [],
        TM = [],
        VM = [],
        cM = [],
        Mr = [],
        rr = [],
        ir = [],
        Or = [],
        Sr = [];
      return MM = class extends WM {
        get position() {
          return this._position
        }
        set position(MM) {
          this._position = MM
        }
        set upVector(MM) {
          this._upVector = MM
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let rM, iM;
          if (this.mode === MM.PERSPECTIVE_CAMERA) this.fovMode === MM.FOVMODE_VERTICAL_FIXED ? (iM = 2 * this.minZ * Math.tan(this.fov / 2), rM = this.ph().getAspectRatio(this) * iM) : (rM = 2 * this.minZ * Math.tan(this.fov / 2), iM = rM / this.ph().getAspectRatio(this));
          else {
            const MM = this.ph().getRenderWidth() / 2,
              OM = this.ph().getRenderHeight() / 2;
            rM = (this.orthoRight ?? MM) - (this.orthoLeft ?? -MM), iM = (this.orthoTop ?? OM) - (this.orthoBottom ?? -OM)
          }
          return rM * iM
        }
        set orthoLeft(MM) {
          this._orthoLeft = MM;
          for (const rM of this._rigCameras) rM.orthoLeft = MM
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(MM) {
          this._orthoRight = MM;
          for (const rM of this._rigCameras) rM.orthoRight = MM
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(MM) {
          this._orthoBottom = MM;
          for (const rM of this._rigCameras) rM.orthoBottom = MM
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(MM) {
          this._orthoTop = MM;
          for (const rM of this._rigCameras) rM.orthoTop = MM
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(rM / (2 * MM))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(MM) {
          this._baseInertia = MM
        }
        set mode(MM) {
          this._mode = MM;
          for (const rM of this._rigCameras) rM.mode = MM
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(rM, iM, SM) {
          let nM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, hM.c)(), super(rM, SM, !1), this.inputs = (0, OM.m)(this, sM), this._position = (0, OM.m)(this, DM, PM.q.Zero()), this._upVector = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, PM.q.Up())), this.oblique = ((0, OM.m)(this, oM), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, OM.m)(this, fM, .8), this.projectionPlaneTilt = ((0, OM.m)(this, YM), (0, OM.m)(this, NM, 0)), this.minZ = ((0, OM.m)(this, AM), (0, OM.m)(this, xM, 1)), this.maxZ = ((0, OM.m)(this, vM), (0, OM.m)(this, FM, 1e4)), this._baseInertia = ((0, OM.m)(this, BM), .9), this._mode = MM.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new mM.e(0, 0, 1, 1), this.layerMask = (0, OM.m)(this, XM, 268435455), this.fovMode = ((0, OM.m)(this, IM), (0, OM.m)(this, KM, MM.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, OM.m)(this, qM), (0, OM.m)(this, TM, MM.RIG_MODE_NONE)), this.interaxialDistance = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, void 0)), this.isStereoscopicSideBySide = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, void 0)), this.ignoreCameraMaxZ = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, !1)), this.customRenderTargets = ((0, OM.m)(this, Sr), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new aM.d, this.onProjectionMatrixChangedObservable = new aM.d, this.onAfterCheckInputsObservable = new aM.d, this.onRestoreStateObservable = new aM.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new PM.d, this._postProcesses = new Array, this._activeMeshes = new jM.e(256), this._globalPosition = PM.q.Zero(), this._computedViewMatrix = PM.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = PM.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = PM.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Hk().defaultCameraLayerMask, this.Hk().addCamera(this), nM && !this.Hk().activeCamera && (this.Hk().activeCamera = this), this.position = iM, this.renderPassId = this.Hk().ph().createRenderPassId(`Camera ${rM}`)
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
          return "Td"
        }
        toString(MM) {
          let rM = "Name: " + this.name;
          if (rM += ", type: " + this.getClassName(), this.animations)
            for (let iM = 0; iM < this.animations.length; iM++) rM += ", animation[0]: " + this.animations[iM].toString(MM);
          return rM
        }
        applyVerticalCorrection() {
          const MM = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -MM.x : MM.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(MM) {
          return -1 !== this._activeMeshes.indexOf(MM)
        }
        isReady() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (MM)
            for (const rM of this._postProcesses)
              if (rM && !rM.isReady()) return !1;
          return super.isReady(MM)
        }
        _initCache() {
          super._initCache(), this._cache.position = new PM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new PM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(MM) {
          MM || super._updateCache(), this._cache.position.jR(this.position), this._cache.upVector.jR(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const rM = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let iM = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === rM;
          if (!iM) return !1;
          const OM = this.ph();
          return this.mode === MM.PERSPECTIVE_CAMERA ? iM = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === OM.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (iM = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === OM.getRenderWidth() && this._cache.renderHeight === OM.getRenderHeight(), this.oblique && (iM = iM && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), iM
        }
        attachControl(MM, rM) {}
        detachControl(MM) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== MM.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let MM = 0; MM < this._postProcesses.length; MM++)
            if (null !== this._postProcesses[MM]) return this._postProcesses[MM];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const MM = this._getFirstPostProcess();
          MM && MM.markTextureDirty();
          for (let rM = 0, iM = this._rigCameras.length; rM < iM; rM++) {
            const MM = this._rigCameras[rM],
              iM = MM._rigPostProcess;
            if (iM) {
              "pass" === iM.getEffectName() && (MM.isIntermediate = 0 === this._postProcesses.length), MM._postProcesses = this._postProcesses.slice(0).concat(iM), iM.markTextureDirty()
            } else MM._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !MM.isReusable() && this._postProcesses.indexOf(MM) > -1 ? (QM.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == rM || rM < 0 ? this._postProcesses.push(MM) : null === this._postProcesses[rM] ? this._postProcesses[rM] = MM : this._postProcesses.splice(rM, 0, MM), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.FrM(), this._postProcesses.indexOf(MM))
        }
        detachPostProcess(MM) {
          const rM = this._postProcesses.indexOf(MM); - 1 !== rM && (this._postProcesses[rM] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.FrM(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return PM.d.Identity()
        }
        getViewMatrix(MM) {
          return !MM && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Hk().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(MM) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== MM && (this._projectionMatrix = MM)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(rM) {
          if (this._doNotComputeProjectionMatrix || !rM && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const iM = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = iM, this._refreshFrustumPlanes = !0;
          const OM = this.ph(),
            SM = this.Hk(),
            jM = OM.LOM;
          if (this.mode === MM.PERSPECTIVE_CAMERA) {
            let rM;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = OM.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), rM = SM.useRightHandedSystem ? PM.d.PerspectiveFovRHToRef : PM.d.PerspectiveFovLHToRef, rM(this.fov, OM.getAspectRatio(this), jM ? iM : this.minZ, jM ? this.minZ : iM, this._projectionMatrix, this.fovMode === MM.FOVMODE_VERTICAL_FIXED, OM.isNDCHalfZRange, this.projectionPlaneTilt, jM)
          } else {
            const MM = OM.getRenderWidth() / 2,
              rM = OM.getRenderHeight() / 2;
            SM.useRightHandedSystem ? this.oblique ? PM.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -MM, this.orthoRight ?? MM, this.orthoBottom ?? -rM, this.orthoTop ?? rM, jM ? iM : this.minZ, jM ? this.minZ : iM, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, OM.isNDCHalfZRange) : PM.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -MM, this.orthoRight ?? MM, this.orthoBottom ?? -rM, this.orthoTop ?? rM, jM ? iM : this.minZ, jM ? this.minZ : iM, this._projectionMatrix, OM.isNDCHalfZRange) : this.oblique ? PM.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -MM, this.orthoRight ?? MM, this.orthoBottom ?? -rM, this.orthoTop ?? rM, jM ? iM : this.minZ, jM ? this.minZ : iM, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, OM.isNDCHalfZRange) : PM.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -MM, this.orthoRight ?? MM, this.orthoBottom ?? -rM, this.orthoTop ?? rM, jM ? iM : this.minZ, jM ? this.minZ : iM, this._projectionMatrix, OM.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = OM.getRenderWidth(), this._cache.renderHeight = OM.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(MM) {
          return (this.radius || (this.target ? PM.q.Distance(this.position, this.target) : this.position.length())) + MM
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? HM.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = HM.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), rM && this.rigCameras.length > 0) {
            let rM = !1;
            for (const iM of this.rigCameras) iM._updateFrustumPlanes(), rM = rM || MM.isInFrustum(iM._frustumPlanes);
            return rM
          }
          return MM.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(MM) {
          return this._updateFrustumPlanes(), MM.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, LM.n)("Ray")
        }
        getForwardRayToRef(MM) {
          throw (0, LM.n)("Ray")
        }
        dispose(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Hk().stopAnimation(this), this.Hk().removeCamera(this); this._rigCameras.length > 0;) {
            const MM = this._rigCameras.pop();
            MM && MM.dispose()
          }
          if (this._parentContainer) {
            const MM = this._parentContainer.cameras.indexOf(this);
            MM > -1 && this._parentContainer.cameras.splice(MM, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== MM.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let MM = this._postProcesses.length;
            for (; --MM >= 0;) {
              const rM = this._postProcesses[MM];
              rM && rM.dispose(this)
            }
          }
          let OM = this.customRenderTargets.length;
          for (; --OM >= 0;) this.customRenderTargets[OM].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Hk().ph().releaseRenderPassId(this.renderPassId), super.dispose(rM, iM)
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
        setCameraRigMode(rM, iM) {
          if (this.cameraRigMode !== rM) {
            for (; this._rigCameras.length > 0;) {
              const MM = this._rigCameras.pop();
              MM && MM.dispose()
            }
            if (this.cameraRigMode = rM, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = iM.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== MM.RIG_MODE_NONE) {
              const MM = this.createRigCamera(this.name + "_L", 0);
              MM && (MM._isLeftCamera = !0);
              const rM = this.createRigCamera(this.name + "_R", 1);
              rM && (rM._isRightCamera = !0), MM && rM && (this._rigCameras.push(MM), this._rigCameras.push(rM))
            }
            this._setRigMode(iM), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(MM) {}
        _getVRProjectionMatrix() {
          return PM.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ph().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(MM, rM) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[MM] = rM, "interaxialDistance" === MM && (this._cameraRigParams.stereoHalfAngle = rM / .0637 * (Math.PI / 180))
        }
        createRigCamera(MM, rM) {
          return null
        }
        _updateRigCameras() {
          for (let MM = 0; MM < this._rigCameras.length; MM++) this._rigCameras[MM].minZ = this.minZ, this._rigCameras[MM].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[MM].fov = this.fov, this._rigCameras[MM].upVector.jR(this.upVector);
          this.cameraRigMode === MM.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const MM = JM.b.Serialize(this);
          return MM.uniqueId = this.uniqueId, MM.type = this.getClassName(), this.parent && this.parent._serializeAsParent(MM), this.inputs && this.inputs.serialize(MM), JM.b.AppendSerializedAnimations(this, MM), MM.Ld = this.serializeAnimationRanges(), MM.isEnabled = this.isEnabled(), MM
        }
        clone(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const OM = JM.b.Clone(MM.GetConstructorFromName(this.getClassName(), rM, this.Hk(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return OM.name = rM, OM.parent = iM, this.onClonedObservable.notifyObservers(OM), OM
        }
        eT(MM) {
          const rM = PM.q.Zero();
          return this.getDirectionToRef(MM, rM), rM
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(MM, rM) {
          PM.q.TransformNormalToRef(MM, this.getWorldMatrix(), rM)
        }
        static GetConstructorFromName(rM, iM, OM) {
          let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            jM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const aM = nM.d.Construct(rM, iM, OM, {
            interaxial_distance: SM,
            isStereoscopicSideBySide: jM
          });
          return aM || (() => MM._CreateDefaultParsedCamera(iM, OM))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let MM = this.Hk().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (MM *= -1), MM
        }
      }, (() => {
        const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(WM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, SM.J)("position")], iM = [(0, SM.J)("upVector")], zM = [(0, SM.L)()], dM = [(0, SM.L)()], yM = [(0, SM.L)()], lM = [(0, SM.L)()], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.L)()], bM = [(0, SM.L)()], wM = [(0, SM.L)()], tM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], pM = [(0, SM.L)()], (0, OM.i)(MM, null, zM, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: MM => "orthoLeft" in MM,
            get: MM => MM.orthoLeft
          },
          metadata: jM
        }, null, sM), (0, OM.i)(MM, null, dM, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: MM => "orthoRight" in MM,
            get: MM => MM.orthoRight
          },
          metadata: jM
        }, null, sM), (0, OM.i)(MM, null, yM, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: MM => "orthoBottom" in MM,
            get: MM => MM.orthoBottom
          },
          metadata: jM
        }, null, sM), (0, OM.i)(MM, null, lM, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: MM => "orthoTop" in MM,
            get: MM => MM.orthoTop
          },
          metadata: jM
        }, null, sM), (0, OM.i)(MM, null, eM, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: MM => "inertia" in MM,
            get: MM => MM.inertia
          },
          metadata: jM
        }, null, sM), (0, OM.i)(MM, null, bM, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: MM => "mode" in MM,
            get: MM => MM.mode
          },
          metadata: jM
        }, null, sM), (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: MM => "_position" in MM,
            get: MM => MM._position,
            set: (MM, rM) => {
              MM._position = rM
            }
          },
          metadata: jM
        }, DM, kM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: MM => "_upVector" in MM,
            get: MM => MM._upVector,
            set: (MM, rM) => {
              MM._upVector = rM
            }
          },
          metadata: jM
        }, ZM, oM), (0, OM.i)(null, null, EM, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: MM => "fov" in MM,
            get: MM => MM.fov,
            set: (MM, rM) => {
              MM.fov = rM
            }
          },
          metadata: jM
        }, fM, YM), (0, OM.i)(null, null, UM, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: MM => "projectionPlaneTilt" in MM,
            get: MM => MM.projectionPlaneTilt,
            set: (MM, rM) => {
              MM.projectionPlaneTilt = rM
            }
          },
          metadata: jM
        }, NM, AM), (0, OM.i)(null, null, GM, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: MM => "minZ" in MM,
            get: MM => MM.minZ,
            set: (MM, rM) => {
              MM.minZ = rM
            }
          },
          metadata: jM
        }, xM, vM), (0, OM.i)(null, null, CM, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: MM => "maxZ" in MM,
            get: MM => MM.maxZ,
            set: (MM, rM) => {
              MM.maxZ = rM
            }
          },
          metadata: jM
        }, FM, BM), (0, OM.i)(null, null, wM, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: MM => "layerMask" in MM,
            get: MM => MM.layerMask,
            set: (MM, rM) => {
              MM.layerMask = rM
            }
          },
          metadata: jM
        }, XM, IM), (0, OM.i)(null, null, tM, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "fovMode" in MM,
            get: MM => MM.fovMode,
            set: (MM, rM) => {
              MM.fovMode = rM
            }
          },
          metadata: jM
        }, KM, qM), (0, OM.i)(null, null, gM, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "cameraRigMode" in MM,
            get: MM => MM.cameraRigMode,
            set: (MM, rM) => {
              MM.cameraRigMode = rM
            }
          },
          metadata: jM
        }, TM, VM), (0, OM.i)(null, null, uM, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: MM => "interaxialDistance" in MM,
            get: MM => MM.interaxialDistance,
            set: (MM, rM) => {
              MM.interaxialDistance = rM
            }
          },
          metadata: jM
        }, cM, Mr), (0, OM.i)(null, null, RM, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: MM => "isStereoscopicSideBySide" in MM,
            get: MM => MM.isStereoscopicSideBySide,
            set: (MM, rM) => {
              MM.isStereoscopicSideBySide = rM
            }
          },
          metadata: jM
        }, rr, ir), (0, OM.i)(null, null, pM, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: MM => "ignoreCameraMaxZ" in MM,
            get: MM => MM.ignoreCameraMaxZ,
            set: (MM, rM) => {
              MM.ignoreCameraMaxZ = rM
            }
          },
          metadata: jM
        }, Or, Sr), jM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jM
        })
      })(), MM._CreateDefaultParsedCamera = (MM, rM) => {
        throw (0, LM.n)("UniversalCamera")
      }, MM.PERSPECTIVE_CAMERA = 0, MM.ORTHOGRAPHIC_CAMERA = 1, MM.FOVMODE_VERTICAL_FIXED = 0, MM.FOVMODE_HORIZONTAL_FIXED = 1, MM.RIG_MODE_NONE = 0, MM.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, MM.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, MM.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, MM.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, MM.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, MM.RIG_MODE_VR = 20, MM.RIG_MODE_CUSTOM = 22, MM.ForceAttachControlToAlwaysPreventDefault = !1, MM
    })();

    function yM(MM, rM) {
      const iM = MM.type,
        OM = dM.GetConstructorFromName(iM, MM.name, rM, MM.interaxial_distance, MM.isStereoscopicSideBySide),
        SM = JM.b.Parse(OM, MM, rM);
      if (void 0 !== MM.parentId && (SM._waitingParentId = MM.parentId), void 0 !== MM.parentInstanceIndex && (SM._waitingParentInstanceIndex = MM.parentInstanceIndex), SM.inputs && (SM.inputs.parse(MM), SM._setupInputs()), MM.upVector && (SM.upVector = PM.q.FromArray(MM.upVector)), SM.setPosition && (SM.position.iMM(0, 0, 0), SM.setPosition(PM.q.FromArray(MM.position))), MM.target && SM.setTarget && SM.setTarget(PM.q.FromArray(MM.target)), MM.cameraRigMode) {
        const rM = MM.interaxial_distance ? {
          interaxialDistance: MM.interaxial_distance
        } : {};
        SM.setCameraRigMode(MM.cameraRigMode, rM)
      }
      if (MM.animations) {
        for (let rM = 0; rM < MM.animations.length; rM++) {
          const iM = MM.animations[rM],
            OM = (0, zM.b)("BABYLON.Animation");
          OM && SM.animations.push(OM.Parse(iM))
        }
        nM.d.ParseAnimationRanges(SM, MM, rM)
      }
      return MM.autoAnimate && rM.beginAnimation(SM, MM.autoAnimateFrom, MM.autoAnimateTo, MM.autoAnimateLoop, MM.autoAnimateSpeed || 1), void 0 !== MM.isEnabled && SM.kR(MM.isEnabled), SM
    }
    let lM = !1;

    function EM() {
      lM || (lM = !0, dM.Parse = yM)
    }
  },
  41340: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM) {
        this._cameraPosition = rM, this._behavior = iM, this.activeInput = !1, this.speed = 1, this.vI = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new OM.q, this.rotationAccumulatedPixels = new OM.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = OM.q.Zero(), this.rotationDeltaCurrentFrame = OM.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new OM.q, this.referenceFrameRate = 60, this._rotationVelocity = new OM.q, this._prevFrameTimeMs = 0, this._scene = MM
      }
      computeCurrentFrameDeltas() {
        const MM = this._scene.ph().getDeltaTime(),
          rM = this._getEffectiveDeltaMs(MM);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.P_(0), this.rotationDeltaCurrentFrame.P_(0), this.zoomDeltaCurrentFrame = 0, void(MM > 0 && (this._prevFrameTimeMs = MM));
        this.panDeltaCurrentFrame.P_(0), this.rotationDeltaCurrentFrame.P_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.iMM(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * rM, this.panDeltaCurrentFrame), this._rotationVelocity.iMM(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.iMM(this._rotationVelocity.x * this.speed * this.rotationXSpeed * rM, this._rotationVelocity.y * this.speed * this.rotationYSpeed * rM, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.vI * this._zoomSpeedMultiplier) * rM, MM > 0 && (this._prevFrameTimeMs = MM), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.P_(0), this.rotationAccumulatedPixels.P_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.P_(0), this.rotationAccumulatedPixels.P_(0)
      }
      resetPanVelocity() {
        this._panVelocity.P_(0), this.panAccumulatedPixels.P_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(MM) {
        const rM = this._scene.ph().getDeltaTime(),
          iM = this._getEffectiveDeltaMs(rM),
          OM = 1e3 / this.referenceFrameRate;
        return Math.pow(MM, iM / OM)
      }
      getFrameIndependentInputScale(MM) {
        const rM = 1 - MM;
        if (rM <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(MM)) / rM
      }
      _getEffectiveDeltaMs(MM) {
        return MM > 0 ? MM : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(MM, rM, iM) {
        let OM = MM;
        const SM = this._scene.ph().getDeltaTime(),
          jM = this._getEffectiveDeltaMs(SM);
        if (0 === jM) return OM;
        const aM = this.getFrameIndependentDecay(iM);
        if (OM *= aM, 0 !== rM || this.activeInput) {
          const MM = 1 - iM;
          OM += rM / jM * (MM > 0 ? (1 - aM) / MM : 1)
        } else Math.abs(OM) < 1e-6 && (OM = 0);
        return OM
      }
    }
  },
  41349: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      constructor(MM, rM) {
        this.inputMap = [], this.handlers = MM, this._createDefaultEntries = rM, this.resetInputMap()
      }
      resolveInteraction(MM, rM) {
        for (const iM of this.inputMap)
          if (iM.source === MM && this._entryMatches(iM, rM)) return iM;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(MM, rM, iM) {
        const OM = this.inputMap;
        for (let SM = 0; SM < OM.length; SM++) {
          const jM = OM[SM];
          if (jM.source === MM && jM.interaction === rM && this._entryConditionsMatch(jM, iM)) return jM
        }
      }
      getEntries(MM, rM, iM) {
        const OM = [],
          SM = this.inputMap;
        for (let jM = 0; jM < SM.length; jM++) {
          const aM = SM[jM];
          aM.source === MM && aM.interaction === rM && this._entryConditionsMatch(aM, iM) && OM.push(aM)
        }
        return OM
      }
      addEntry(MM) {
        const rM = this._entrySpecificity(MM);
        let iM = this.inputMap.length;
        for (let OM = 0; OM < this.inputMap.length; OM++)
          if (this._entrySpecificity(this.inputMap[OM]) < rM) {
            iM = OM;
            break
          } this.inputMap.splice(iM, 0, MM)
      }
      setInteraction(MM, rM, iM) {
        const OM = this.resolveInteraction(MM, rM);
        return OM && this._entryCoversAllConditionsOf(OM, rM) ? (OM.interaction = iM, !0) : (this.addEntry({
          source: MM,
          ...rM ?? {},
          interaction: iM
        }), !0)
      }
      _entryCoversAllConditionsOf(MM, rM) {
        if (!rM) return !0;
        const iM = MM;
        for (const OM of Object.keys(rM)) {
          const MM = rM[OM];
          if (void 0 !== MM)
            if ("modifiers" === OM) {
              const rM = iM.modifiers ?? {};
              for (const iM of Object.keys(MM))
                if (void 0 !== MM[iM] && void 0 === rM[iM]) return !1
            } else if (void 0 === iM[OM]) return !1
        }
        return !0
      }
      setInteractions(MM, rM, iM) {
        let OM = 0;
        const SM = this.inputMap;
        for (let jM = 0; jM < SM.length; jM++) {
          const aM = SM[jM];
          aM.source === MM && this._entryMatches(aM, rM) && (aM.interaction = iM, OM++)
        }
        return OM
      }
      _entryMatches(MM, rM) {
        switch (MM.source) {
          case "pointer":
            return (void 0 === MM.button || MM.button === rM?.button) && this._matchModifiers(MM.modifiers, rM?.modifiers);
          case "wheel":
            return this._matchModifiers(MM.modifiers, rM?.modifiers);
          case "touch":
            return void 0 === MM.touchCount || MM.touchCount === rM?.touchCount;
          case "keyboard":
            return (void 0 === MM.key || (Array.isArray(MM.key) ? -1 !== MM.key.indexOf(rM?.key ?? -1) : MM.key === rM?.key)) && this._matchModifiers(MM.modifiers, rM?.modifiers)
        }
      }
      _entryConditionsMatch(MM, rM) {
        if (!rM) return !0;
        switch (MM.source) {
          case "pointer":
            return (!("button" in rM) || MM.button === rM.button) && (!("modifiers" in rM) || this._entryModifiersMatch(MM.modifiers, rM.modifiers));
          case "wheel":
            return !("modifiers" in rM) || this._entryModifiersMatch(MM.modifiers, rM.modifiers);
          case "touch":
            return !("touchCount" in rM) || MM.touchCount === rM.touchCount;
          case "keyboard":
            if ("key" in rM) {
              if (void 0 === MM.key) return void 0 === rM.key;
              if (void 0 === rM.key || (Array.isArray(MM.key) ? -1 === MM.key.indexOf(rM.key) : MM.key !== rM.key)) return !1
            }
            return !("modifiers" in rM) || this._entryModifiersMatch(MM.modifiers, rM.modifiers)
        }
      }
      _entrySpecificity(MM) {
        let rM = 0;
        return "button" in MM && void 0 !== MM.button && rM++, "key" in MM && void 0 !== MM.key && rM++, "touchCount" in MM && void 0 !== MM.touchCount && rM++, "modifiers" in MM && MM.modifiers && rM++, rM
      }
      _matchModifiers(MM, rM) {
        return !MM || (void 0 === MM.ctrl || MM.ctrl === (rM?.ctrl ?? !1)) && ((void 0 === MM.shift || MM.shift === (rM?.shift ?? !1)) && (void 0 === MM.alt || MM.alt === (rM?.alt ?? !1)))
      }
      _entryModifiersMatch(MM, rM) {
        if (!rM) return !MM;
        return void 0 !== rM.ctrl || void 0 !== rM.shift || void 0 !== rM.alt ? (void 0 === rM.ctrl || MM?.ctrl === rM.ctrl) && ((void 0 === rM.shift || MM?.shift === rM.shift) && (void 0 === rM.alt || MM?.alt === rM.alt)) : !MM || void 0 === MM.ctrl && void 0 === MM.shift && void 0 === MM.alt
      }
    }
  },
  41320: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => yM,
      g: () => JM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41323),
      aM = iM(38040),
      PM = iM(38044),
      nM = iM(41337),
      QM = iM(41328),
      zM = iM(41340),
      LM = iM(41349);
    class mM extends zM.b {
      constructor(MM, rM, iM) {
        super(MM, rM, iM), this.input = new LM.d({
          translate: (MM, rM, iM) => {
            this.panAccumulatedPixels.x += MM, this.panAccumulatedPixels.y += rM, this.panAccumulatedPixels.z += iM
          },
          rotate: (MM, rM) => {
            this.rotationAccumulatedPixels.x += MM, this.rotationAccumulatedPixels.y += rM
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
    const HM = aM.d.Zero(),
      hM = aM.h.Identity();
    let JM = (() => {
        var MM;
        let rM, iM, QM, zM, LM = jM.b,
          JM = [],
          dM = [],
          yM = [],
          lM = [],
          EM = [],
          UM = [],
          GM = [],
          CM = [];
        return MM = class extends LM {
          get inertia() {
            return this._targetInertia
          }
          set inertia(MM) {
            this._targetInertia = MM, this.movement && (this.movement.panInertia = MM, this.movement.rotationInertia = MM)
          }
          constructor(MM, rM, iM) {
            super(MM, rM, iM, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new aM.q(0, 0, 0), this.cameraRotation = new aM.o(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, OM.m)(this, JM, !1), this.rotation = ((0, OM.m)(this, dM), (0, OM.m)(this, yM, void 0)), this.rotationQuaternion = (0, OM.m)(this, lM), this.speed = (0, OM.m)(this, EM, 2), this.noRotationConstraint = ((0, OM.m)(this, UM), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = PM.d, this._rotationEpsilon = PM.d, this.lockedTarget = (0, OM.m)(this, GM, null), this._currentTarget = ((0, OM.m)(this, CM), aM.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = aM.d.Zero(), this._cameraTransformMatrix = aM.d.Zero(), this._cameraRotationMatrix = aM.d.Zero(), this._transformedReferencePoint = aM.q.Zero(), this._deferredPositionUpdate = new aM.q, this._deferredRotationQuaternionUpdate = new aM.h, this._deferredRotationUpdate = new aM.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = aM.q.Forward(this.Hk().useRightHandedSystem), this.rotation = new aM.q(0, this.Hk().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new mM(this.Hk(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(MM) {
            this.getWorldMatrix();
            const rM = aM.l.sh[0],
              iM = aM.l.sh[1];
            return iM.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(iM, rM), rM.scaleInPlace(MM), this.globalPosition.add(rM)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const MM = this.lockedTarget;
              MM.computeWorldMatrix().getTranslationToRef(MM.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.iMM(0, 0, 0), this.cameraRotation.iMM(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new aM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new aM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new aM.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(MM) {
            MM || super._updateCache();
            const rM = this._getLockedTargetPosition();
            rM ? this._cache.lockedTarget ? this._cache.lockedTarget.jR(rM) : this._cache.lockedTarget = rM.clone() : this._cache.lockedTarget = null, this._cache.rotation.jR(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.jR(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const MM = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(MM) : !MM) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const MM = this.ph();
            return this.speed * Math.sqrt(MM.getDeltaTime() / (100 * MM.getFps()))
          }
          setTarget(MM) {
            this.upVector.normalize(), this._initialFocalDistance = MM.subtract(this.position).length(), this.position.z === MM.z && (this.position.z += PM.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Hk().useRightHandedSystem ? aM.d.LookAtRHToRef(this.position, MM, aM.q.UpReadOnly, HM) : aM.d.LookAtLHToRef(this.position, MM, aM.q.UpReadOnly, HM), HM.invert();
            const rM = this.rotationQuaternion || hM;
            aM.h.FromRotationMatrixToRef(HM, rM), rM.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(MM) {
            this.setTarget(MM)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(aM.l.Matrix[0]), aM.q.TransformNormalToRef(this.cameraDirection, aM.l.Matrix[0], aM.l.sh[0]), this._deferredPositionUpdate.addInPlace(aM.l.sh[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.jR(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.jR(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const MM = this.movement,
              rM = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            MM.panAccumulatedPixels.addInPlace(this.cameraDirection), MM.rotationAccumulatedPixels.x += this.cameraRotation.x, MM.rotationAccumulatedPixels.y += this.cameraRotation.y, MM.computeCurrentFrameDeltas(), this.cameraDirection.jR(MM.panDeltaCurrentFrame), this.cameraRotation.set(MM.rotationDeltaCurrentFrame.x, MM.rotationDeltaCurrentFrame.y);
            const iM = this.speed * this._panningEpsilon;
            !rM && Math.abs(this.cameraDirection.x) < iM && Math.abs(this.cameraDirection.y) < iM && Math.abs(this.cameraDirection.z) < iM && (this.cameraDirection.P_(0), MM.resetPanVelocity());
            const OM = this.invertRotation ? -this.inverseRotationSpeed : 1,
              SM = this._decideIfNeedsToMove(),
              jM = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.jR(this.rotation), this._deferredPositionUpdate.jR(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.jR(this.rotationQuaternion), SM && this._updatePosition(), jM) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * OM, this._deferredRotationUpdate.y += this.cameraRotation.y * OM, !this.noRotationConstraint) {
                const MM = 1.570796;
                this._deferredRotationUpdate.x > MM && (this._deferredRotationUpdate.x = MM), this._deferredRotationUpdate.x < -MM && (this._deferredRotationUpdate.x = -MM)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.jR(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (aM.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.jR(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.P_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : aM.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return aM.q.TransformNormalToRef(aM.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), aM.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? nM.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (aM.h.FromEulerVectorToRef(this.rotation, hM), nM.d.Y.rotateByQuaternionToRef(hM, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(MM, rM, iM) {
            if (this.Hk().useRightHandedSystem ? aM.d.LookAtRHToRef(MM, rM, iM, this._viewMatrix) : aM.d.LookAtLHToRef(MM, rM, iM, this._viewMatrix), this.parent) {
              const MM = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(MM, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(rM, iM) {
            if (this.cameraRigMode !== jM.b.RIG_MODE_NONE) {
              const iM = new MM(rM, this.position.clone(), this.Hk());
              return iM.isRigCamera = !0, iM.rigParent = this, this.cameraRigMode === jM.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new aM.h), iM._cameraRigParams = {}, iM.rotationQuaternion = new aM.h), iM.mode = this.mode, iM.orthoLeft = this.orthoLeft, iM.orthoRight = this.orthoRight, iM.orthoTop = this.orthoTop, iM.orthoBottom = this.orthoBottom, iM
            }
            return null
          }
          _updateRigCameras() {
            const MM = this._rigCameras[0],
              rM = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case jM.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case jM.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case jM.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const iM = this.cameraRigMode === jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  OM = this.cameraRigMode === jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * iM, MM), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * OM, rM);
                break
              }
              case jM.b.RIG_MODE_VR:
                MM.rotationQuaternion && rM.rotationQuaternion && this.rotationQuaternion ? (MM.rotationQuaternion.jR(this.rotationQuaternion), rM.rotationQuaternion.jR(this.rotationQuaternion)) : (MM.rotation.jR(this.rotation), rM.rotation.jR(this.rotation)), MM.position.jR(this.position), rM.position.jR(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(rM, iM) {
            this.getTarget().subtractToRef(this.position, MM._TargetFocalPoint), MM._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const OM = MM._TargetFocalPoint.addInPlace(this.position);
            aM.d.TranslationToRef(-OM.x, -OM.y, -OM.z, MM._TargetTransformMatrix), MM._TargetTransformMatrix.multiplyToRef(aM.d.RotationAxis(iM.upVector, rM), MM._RigCamTransformMatrix), aM.d.TranslationToRef(OM.x, OM.y, OM.z, MM._TargetTransformMatrix), MM._RigCamTransformMatrix.multiplyToRef(MM._TargetTransformMatrix, MM._RigCamTransformMatrix), aM.q.TransformCoordinatesToRef(this.position, MM._RigCamTransformMatrix, iM.position), iM.setTarget(OM)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(LM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.J)()], QM = [(0, SM.L)()], zM = [(0, SM.y)("lockedTargetId")], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: MM => "updateUpVectorFromRotation" in MM,
              get: MM => MM.updateUpVectorFromRotation,
              set: (MM, rM) => {
                MM.updateUpVectorFromRotation = rM
              }
            },
            metadata: jM
          }, JM, dM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: MM => "rotation" in MM,
              get: MM => MM.rotation,
              set: (MM, rM) => {
                MM.rotation = rM
              }
            },
            metadata: jM
          }, yM, lM), (0, OM.i)(null, null, QM, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: MM => "speed" in MM,
              get: MM => MM.speed,
              set: (MM, rM) => {
                MM.speed = rM
              }
            },
            metadata: jM
          }, EM, UM), (0, OM.i)(null, null, zM, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: MM => "lockedTarget" in MM,
              get: MM => MM.lockedTarget,
              set: (MM, rM) => {
                MM.lockedTarget = rM
              }
            },
            metadata: jM
          }, GM, CM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM._RigCamTransformMatrix = new aM.d, MM._TargetTransformMatrix = new aM.d, MM._TargetFocalPoint = new aM.q, MM
      })(),
      dM = !1;

    function yM() {
      dM || (dM = !0, QM.d.AddNodeConstructor("TargetCamera", ((MM, rM) => () => new JM(MM, aM.q.Zero(), rM))))
    }
  },
  41056: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(41005);
    let SM = !1;

    function jM() {
      SM || (SM = !0, OM.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, OM.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, OM.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, OM.d.prototype.getAspectRatio = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = MM.viewport;
        return this.getRenderWidth(rM) * iM.width / (this.getRenderHeight(rM) * iM.height)
      }, OM.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, OM.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41137: (MM, rM, iM) => {
    var OM = iM(41005),
      SM = iM(41145);
    let jM = !1;
    jM || (jM = !0, (0, SM.u)(), OM.d.prototype._loadFileAsync = async function(MM, rM, iM) {
      return await new Promise(((OM, SM) => {
        this._loadFile(MM, (MM => {
          OM(MM)
        }), void 0, rM, iM, ((MM, rM) => {
          SM(rM)
        }))
      }))
    })
  },
  41128: (MM, rM, iM) => {
    (0, iM(41061).c)()
  },
  41061: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(41005);
    let SM = !1;

    function jM() {
      SM || (SM = !0, OM.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, OM.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, OM.d.prototype.createRenderPassId = function(MM) {
        const rM = ++OM.d._RenderPassIdCounter;
        return this._renderPassNames[rM] = MM ?? "NONAME", rM
      }, OM.d.prototype.releaseRenderPassId = function(MM) {
        this._renderPassNames[MM] = void 0;
        for (let rM = 0; rM < this.scenes.length; ++rM) {
          const iM = this.scenes[rM];
          for (let rM = 0; rM < iM.meshes.length; ++rM) {
            const OM = iM.meshes[rM];
            if (OM._releaseRenderPassId(MM), OM.iG)
              for (let rM = 0; rM < OM.iG.length; ++rM) {
                OM.iG[rM]._removeDrawWrapper(MM)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(MM)
      })
    }
  },
  41184: (MM, rM, iM) => {
    var OM = iM(41186),
      SM = iM(41005);
    let jM = !1;
    jM || (jM = !0, SM.d.GetCompatibleTextureLoader = OM.e)
  },
  41066: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(40949);
    let SM = !1;

    function jM() {
      SM || (SM = !0, OM.ThinEngine.prototype.setAlphaMode = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[iM] === MM) {
          if (!rM) {
            const rM = 0 === MM;
            this.depthCullingState.depthMask !== rM && (this.depthCullingState.depthMask = rM)
          }
          return
        }
        const OM = 0 === MM;
        this._alphaState.setAlphaBlend(!OM, iM), this._alphaState.setAlphaMode(MM, iM), rM || (this.depthCullingState.depthMask = OM), this._alphaMode[iM] = MM
      })
    }
  },
  41074: (MM, rM, iM) => {
    var OM = iM(40939),
      SM = iM(39711),
      jM = iM(40949),
      aM = iM(41081),
      PM = iM(41042);
    class nM extends aM.b {
      setDepthStencilTexture(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(MM, rM), !MM) return;
        const iM = this._engine,
          OM = this._context,
          SM = MM._hardwareTexture;
        if (SM && MM._autoMSAAManagement && this._MSAAFramebuffer) {
          const rM = iM._currentFramebuffer;
          iM._bindUnboundFramebuffer(this._MSAAFramebuffer), OM.framebufferRenderbuffer(OM.FRAMEBUFFER, (0, PM.e)(MM.format) ? OM.DEPTH_STENCIL_ATTACHMENT : OM.DEPTH_ATTACHMENT, OM.RENDERBUFFER, SM.getMSAARenderBuffer()), iM._bindUnboundFramebuffer(rM)
        }
      }
      constructor(MM, rM, iM, OM, SM) {
        super(MM, rM, iM, OM), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = SM
      }
      _cloneRenderTargetWrapper() {
        let MM;
        return this._colorTextureArray && this._depthStencilTextureArray ? (MM = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), MM.texture.isReady = !0) : MM = super._cloneRenderTargetWrapper(), MM
      }
      _swapRenderTargetWrapper(MM) {
        super._swapRenderTargetWrapper(MM), MM._framebuffer = this._framebuffer, MM._depthStencilBuffer = this._depthStencilBuffer, MM._MSAAFramebuffer = this._MSAAFramebuffer, MM._colorTextureArray = this._colorTextureArray, MM._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const MM = this._engine,
            rM = MM._currentFramebuffer,
            iM = this._context;
          MM._bindUnboundFramebuffer(this._framebuffer), iM.framebufferRenderbuffer(iM.FRAMEBUFFER, iM.DEPTH_STENCIL_ATTACHMENT, iM.RENDERBUFFER, null), iM.framebufferRenderbuffer(iM.FRAMEBUFFER, iM.DEPTH_ATTACHMENT, iM.RENDERBUFFER, null), iM.framebufferRenderbuffer(iM.FRAMEBUFFER, iM.STENCIL_ATTACHMENT, iM.RENDERBUFFER, null), MM._bindUnboundFramebuffer(rM), iM.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(MM, rM, iM, OM, SM, jM)
      }
      shareDepth(MM) {
        super.shareDepth(MM);
        const rM = this._context,
          iM = this._depthStencilBuffer,
          OM = MM._MSAAFramebuffer || MM._framebuffer,
          SM = this._engine;
        MM._depthStencilBuffer && MM._depthStencilBuffer !== iM && rM.deleteRenderbuffer(MM._depthStencilBuffer), MM._depthStencilBuffer = iM;
        const jM = MM._generateStencilBuffer ? rM.DEPTH_STENCIL_ATTACHMENT : rM.DEPTH_ATTACHMENT;
        SM._bindUnboundFramebuffer(OM), rM.framebufferRenderbuffer(rM.FRAMEBUFFER, jM, rM.RENDERBUFFER, iM), SM._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SM = MM._hardwareTexture;
        if (!SM) return;
        const jM = this._framebuffer,
          aM = this._engine,
          PM = aM._currentFramebuffer;
        let nM;
        if (aM._bindUnboundFramebuffer(jM), aM.PJ > 1) {
          const jM = this._context;
          nM = jM["COLOR_ATTACHMENT" + rM], MM.is2DArray || MM.is3D ? (iM = iM ?? this.layerIndices?.[rM] ?? 0, jM.framebufferTextureLayer(jM.FRAMEBUFFER, nM, SM.underlyingResource, OM, iM)) : MM.isCube ? (iM = iM ?? this.faceIndices?.[rM] ?? 0, jM.framebufferTexture2D(jM.FRAMEBUFFER, nM, jM.TEXTURE_CUBE_MAP_POSITIVE_X + iM, SM.underlyingResource, OM)) : jM.framebufferTexture2D(jM.FRAMEBUFFER, nM, jM.TEXTURE_2D, SM.underlyingResource, OM)
        } else {
          const MM = this._context;
          nM = MM["COLOR_ATTACHMENT" + rM + "_WEBGL"];
          const jM = void 0 !== iM ? MM.TEXTURE_CUBE_MAP_POSITIVE_X + iM : MM.TEXTURE_2D;
          MM.framebufferTexture2D(MM.FRAMEBUFFER, nM, jM, SM.underlyingResource, OM)
        }
        if (MM._autoMSAAManagement && this._MSAAFramebuffer) {
          const MM = this._context;
          aM._bindUnboundFramebuffer(this._MSAAFramebuffer), MM.framebufferRenderbuffer(MM.FRAMEBUFFER, nM, MM.RENDERBUFFER, SM.getMSAARenderBuffer())
        }
        aM._bindUnboundFramebuffer(PM)
      }
      setTexture(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(MM, rM, iM), this._bindTextureRenderTarget(MM, rM)
      }
      setLayerAndFaceIndices(MM, rM) {
        if (super.setLayerAndFaceIndices(MM, rM), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const iM = this._attachments?.length ?? this.textures.length;
        for (let OM = 0; OM < iM; OM++) {
          const MM = this.textures[OM];
          MM && (MM.is2DArray || MM.is3D ? this._bindTextureRenderTarget(MM, OM, this.layerIndices[OM]) : MM.isCube ? this._bindTextureRenderTarget(MM, OM, this.faceIndices[OM]) : this._bindTextureRenderTarget(MM, OM))
        }
      }
      setLayerAndFaceIndex() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(MM, rM, iM), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const OM = this.textures[MM];
        OM.is2DArray || OM.is3D ? this._bindTextureRenderTarget(this.textures[MM], MM, this.layerIndices[MM]) : OM.isCube && this._bindTextureRenderTarget(this.textures[MM], MM, this.faceIndices[MM])
      }
      resolveMSAATextures() {
        const MM = this._engine,
          rM = MM._currentFramebuffer;
        MM._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), MM._bindUnboundFramebuffer(rM)
      }
      dispose() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const rM = this._context;
        MM || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (rM.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (rM.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (rM.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(MM)
      }
    }
    let QM = !1;
    QM || (QM = !0, jM.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(MM, rM, iM) {
      const OM = new nM(MM, rM, iM, this, this._gl);
      return this._renderTargetWrapperCache.push(OM), OM
    }, jM.ThinEngine.prototype.createRenderTargetTexture = function(MM, rM) {
      const iM = this._createHardwareRenderTargetWrapper(!1, !1, MM);
      let OM, SM, jM = !0,
        aM = !1,
        PM = !1,
        nM = 1;
      void 0 !== rM && "object" === typeof rM && (jM = rM.generateDepthBuffer ?? !0, aM = !!rM.generateStencilBuffer, PM = !!rM.noColorAttachment, OM = rM.colorAttachment, nM = rM.samples ?? 1, SM = rM.label);
      const QM = OM || (PM ? null : this._createInternalTexture(MM, rM, !0, 5)),
        zM = MM.width || MM,
        LM = MM.height || MM,
        mM = this._currentFramebuffer,
        HM = this._gl,
        hM = HM.createFramebuffer();
      if (this._bindUnboundFramebuffer(hM), iM._depthStencilBuffer = this._setupFramebufferDepthAttachments(aM, jM, zM, LM), !QM || QM.is2DArray || QM.is3D || HM.framebufferTexture2D(HM.FRAMEBUFFER, HM.COLOR_ATTACHMENT0, HM.TEXTURE_2D, QM._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(mM), iM.label = SM ?? "RenderTargetWrapper", iM._framebuffer = hM, iM._generateDepthBuffer = jM, iM._generateStencilBuffer = aM, iM.setTextures(QM), OM) {
        if (iM._samples = OM.samples, OM.samples > 1) {
          const MM = OM._hardwareTexture.getMSAARenderBuffer(0);
          iM._MSAAFramebuffer = HM.createFramebuffer(), this._bindUnboundFramebuffer(iM._MSAAFramebuffer), HM.framebufferRenderbuffer(HM.FRAMEBUFFER, HM.COLOR_ATTACHMENT0, HM.RENDERBUFFER, MM), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(iM, nM);
      return iM
    }, jM.ThinEngine.prototype._createDepthStencilTexture = function(MM, rM, iM) {
      const jM = this._gl,
        aM = MM.layers || 0,
        nM = MM.depth || 0;
      let QM = jM.TEXTURE_2D;
      0 !== aM ? QM = jM.TEXTURE_2D_ARRAY : 0 !== nM && (QM = jM.TEXTURE_3D);
      const zM = new OM.c(this, 12);
      if (zM.label = rM.label, !this._caps.depthTextureExtension) return SM.e.Error("Depth texture is not supported by your browser or hardware."), zM;
      const LM = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...rM
      };
      if (this._bindTextureDirectly(QM, zM, !0), this._setupDepthStencilTexture(zM, MM, 0 !== LM.comparisonFunction && LM.bilinearFiltering, LM.comparisonFunction, LM.samples), void 0 !== LM.depthTextureFormat) {
        if (15 !== LM.depthTextureFormat && 16 !== LM.depthTextureFormat && 17 !== LM.depthTextureFormat && 13 !== LM.depthTextureFormat && 14 !== LM.depthTextureFormat && 18 !== LM.depthTextureFormat) return SM.e.Error(`Depth texture ${LM.depthTextureFormat} format is not supported.`), zM;
        zM.format = LM.depthTextureFormat
      } else zM.format = LM.generateStencil ? 13 : 16;
      const mM = (0, PM.e)(zM.format),
        HM = this._getWebGLTextureTypeFromDepthTextureFormat(zM.format),
        hM = mM ? jM.DEPTH_STENCIL : jM.DEPTH_COMPONENT,
        JM = this._getInternalFormatFromDepthTextureFormat(zM.format, !0, mM);
      return zM.is2DArray ? jM.texImage3D(QM, 0, JM, zM.width, zM.height, aM, 0, hM, HM, null) : zM.is3D ? jM.texImage3D(QM, 0, JM, zM.width, zM.height, nM, 0, hM, HM, null) : jM.texImage2D(QM, 0, JM, zM.width, zM.height, 0, hM, HM, null), this._bindTextureDirectly(QM, null), this._internalTexturesCache.push(zM), iM._depthStencilBuffer && (jM.deleteRenderbuffer(iM._depthStencilBuffer), iM._depthStencilBuffer = null), this._bindUnboundFramebuffer(iM._MSAAFramebuffer ?? iM._framebuffer), iM._generateStencilBuffer = mM, iM._depthStencilTextureWithStencil = mM, iM._depthStencilBuffer = this._setupFramebufferDepthAttachments(iM._generateStencilBuffer, iM._generateDepthBuffer, iM.width, iM.height, iM.samples, zM.format), this._bindUnboundFramebuffer(null), zM
    }, jM.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(MM, rM) {
      if (this.PJ < 2 || !MM) return 1;
      if (MM.samples === rM) return rM;
      const iM = this._gl;
      rM = Math.min(rM, this.getCaps().maxMSAASamples), MM._depthStencilBuffer && (iM.deleteRenderbuffer(MM._depthStencilBuffer), MM._depthStencilBuffer = null), MM._MSAAFramebuffer && (iM.deleteFramebuffer(MM._MSAAFramebuffer), MM._MSAAFramebuffer = null);
      const OM = MM.texture?._hardwareTexture;
      if (OM?.releaseMSAARenderBuffers(), MM.texture && rM > 1 && "function" === typeof iM.renderbufferStorageMultisample) {
        const SM = iM.createFramebuffer();
        if (!SM) throw new Error("Unable to create multi sampled framebuffer");
        MM._MSAAFramebuffer = SM, this._bindUnboundFramebuffer(MM._MSAAFramebuffer);
        const jM = this._createRenderBuffer(MM.texture.width, MM.texture.height, rM, -1, this._getRGBABufferInternalSizedFormat(MM.texture.type, MM.texture.format, MM.texture._useSRGBBuffer), iM.COLOR_ATTACHMENT0, !1);
        if (!jM) throw new Error("Unable to create multi sampled framebuffer");
        OM?.addMSAARenderBuffer(jM)
      }
      this._bindUnboundFramebuffer(MM._MSAAFramebuffer ?? MM._framebuffer), MM.texture && (MM.texture.samples = rM), MM._samples = rM;
      const SM = MM._depthStencilTexture ? MM._depthStencilTexture.format : void 0;
      return MM._depthStencilBuffer = this._setupFramebufferDepthAttachments(MM._generateStencilBuffer, MM._generateDepthBuffer, MM.width, MM.height, rM, SM), this._bindUnboundFramebuffer(null), rM
    }, jM.ThinEngine.prototype._setupDepthStencilTexture = function(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const jM = rM.width ?? rM,
        aM = rM.height ?? rM,
        PM = rM.layers || 0,
        nM = rM.depth || 0;
      MM.baseWidth = jM, MM.baseHeight = aM, MM.width = jM, MM.height = aM, MM.is2DArray = PM > 0, MM.depth = PM || nM, MM.isReady = !0, MM.samples = SM, MM.generateMipMaps = !1, MM.samplingMode = iM ? 2 : 1, MM.type = 0, MM._comparisonFunction = OM;
      const QM = this._gl,
        zM = this._getTextureTarget(MM),
        LM = this._getSamplingParameters(MM.samplingMode, !1);
      QM.texParameteri(zM, QM.TEXTURE_MAG_FILTER, LM.mag), QM.texParameteri(zM, QM.TEXTURE_MIN_FILTER, LM.min), QM.texParameteri(zM, QM.TEXTURE_WRAP_S, QM.CLAMP_TO_EDGE), QM.texParameteri(zM, QM.TEXTURE_WRAP_T, QM.CLAMP_TO_EDGE), this.PJ > 1 && (0 === OM ? (QM.texParameteri(zM, QM.TEXTURE_COMPARE_FUNC, 515), QM.texParameteri(zM, QM.TEXTURE_COMPARE_MODE, QM.NONE)) : (QM.texParameteri(zM, QM.TEXTURE_COMPARE_FUNC, OM), QM.texParameteri(zM, QM.TEXTURE_COMPARE_MODE, QM.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40931: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.d
    });
    var OM = iM(40935);
    (0, iM(41066).d)();
    var SM = iM(40949);
    let jM = !1;
    ! function() {
      if (jM) return;
      jM = !0;
      const MM = new WeakMap,
        rM = new WeakMap,
        iM = new WeakMap,
        OM = new WeakMap;
      SM.ThinEngine.prototype.getAlphaToCoverage = function() {
        return MM.get(this) ?? !1
      }, SM.ThinEngine.prototype.setAlphaToCoverage = function(iM) {
        (MM.get(this) !== iM || this._gl && rM.get(this) !== this._gl) && (MM.set(this, iM), this._gl && (iM ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), rM.set(this, this._gl)))
      }, Object.defineProperty(SM.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (OM.get(this) !== this._gl && (iM.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), OM.set(this, this._gl)), iM.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var aM = iM(40939),
      PM = iM(39711),
      nM = iM(41034);
    let QM = !1;
    ! function() {
      function MM(MM, rM, iM, OM) {
        let SM, jM = 1;
        1 === OM ? SM = new Float32Array(rM * iM * 4) : 2 === OM ? (SM = new Uint16Array(rM * iM * 4), jM = 15360) : SM = 7 === OM ? new Uint32Array(rM * iM * 4) : new Uint8Array(rM * iM * 4);
        for (let aM = 0; aM < rM; aM++)
          for (let OM = 0; OM < iM; OM++) {
            const iM = 3 * (OM * rM + aM),
              PM = 4 * (OM * rM + aM);
            SM[PM + 0] = MM[iM + 0], SM[PM + 1] = MM[iM + 1], SM[PM + 2] = MM[iM + 2], SM[PM + 3] = jM
          }
        return SM
      }

      function rM(MM) {
        return function(rM, iM, OM, SM, jM, PM, nM, QM) {
          let zM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            LM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const mM = MM ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            HM = MM ? 10 : 11,
            hM = new aM.c(this, HM);
          hM.baseWidth = iM, hM.baseHeight = OM, hM.baseDepth = SM, hM.width = iM, hM.height = OM, hM.depth = SM, hM.format = jM, hM.type = LM, hM.generateMipMaps = PM, hM.samplingMode = QM, MM ? hM.is3D = !0 : hM.is2DArray = !0, this._doNotHandleContextLost || (hM._bufferView = rM), MM ? this.updateRawTexture3D(hM, rM, jM, nM, zM, LM) : this.updateRawTexture2DArray(hM, rM, jM, nM, zM, LM), this._bindTextureDirectly(mM, hM, !0);
          const JM = this._getSamplingParameters(QM, PM);
          return this._gl.texParameteri(mM, this._gl.TEXTURE_MAG_FILTER, JM.mag), this._gl.texParameteri(mM, this._gl.TEXTURE_MIN_FILTER, JM.min), PM && this._gl.generateMipmap(mM), this._bindTextureDirectly(mM, null), this._internalTexturesCache.push(hM), hM
        }
      }

      function iM(MM) {
        return function(rM, iM, OM, SM) {
          let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const PM = MM ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            nM = this._getWebGLTextureType(aM),
            QM = this._getInternalFormat(OM),
            zM = this._getRGBABufferInternalSizedFormat(aM, OM);
          this._bindTextureDirectly(PM, rM, !0), this._unpackFlipY(void 0 === SM || !!SM), this._doNotHandleContextLost || (rM._bufferView = iM, rM.format = OM, rM.invertY = SM, rM._compression = jM), rM.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), jM && iM ? this._gl.compressedTexImage3D(PM, 0, this.getCaps().s3tc[jM], rM.width, rM.height, rM.depth, 0, iM) : this._gl.texImage3D(PM, 0, zM, rM.width, rM.height, rM.depth, 0, QM, nM, iM), rM.generateMipMaps && this._gl.generateMipmap(PM), this._bindTextureDirectly(PM, null), rM.isReady = !0
        }
      }
      QM || (QM = !0, SM.ThinEngine.prototype.updateRawTexture = function(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!MM) return;
        const PM = this._getRGBABufferInternalSizedFormat(jM, iM, aM),
          nM = this._getInternalFormat(iM),
          QM = this._getWebGLTextureType(jM);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, MM, !0), this._unpackFlipY(void 0 === OM || !!OM), this._doNotHandleContextLost || (MM._bufferView = rM, MM.format = iM, MM.type = jM, MM.invertY = OM, MM._compression = SM), MM.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), SM && rM ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[SM], MM.width, MM.height, 0, rM) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, PM, MM.width, MM.height, 0, nM, QM, rM), MM.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), MM.isReady = !0
      }, SM.ThinEngine.prototype.createRawTexture = function(MM, rM, iM, OM, SM, jM, PM) {
        let nM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          zM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const LM = new aM.c(this, 3);
        LM.baseWidth = rM, LM.baseHeight = iM, LM.width = rM, LM.height = iM, LM.format = OM, LM.generateMipMaps = SM, LM.samplingMode = PM, LM.invertY = jM, LM._compression = nM, LM.type = QM, LM._useSRGBBuffer = this._getUseSRGBBuffer(zM, !SM), this._doNotHandleContextLost || (LM._bufferView = MM), this.updateRawTexture(LM, MM, OM, jM, nM, QM, LM._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, LM, !0);
        const mM = this._getSamplingParameters(PM, SM);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, mM.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, mM.min), SM && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(LM), LM
      }, SM.ThinEngine.prototype.createRawCubeTexture = function(MM, rM, iM, OM, SM, jM, QM) {
        let zM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const LM = this._gl,
          mM = new aM.c(this, 8);
        mM.isCube = !0, mM.format = iM, mM.type = OM, this._doNotHandleContextLost || (mM._bufferViewArray = MM);
        const HM = this._getWebGLTextureType(OM);
        let hM = this._getInternalFormat(iM);
        hM === LM.RGB && (hM = LM.RGBA), HM !== LM.FLOAT || this._caps.textureFloatLinearFiltering ? HM !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? HM !== LM.FLOAT || this._caps.textureFloatRender ? HM !== LM.HALF_FLOAT || this._caps.colorBufferFloat || (SM = !1, PM.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (SM = !1, PM.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (SM = !1, QM = 1, PM.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (SM = !1, QM = 1, PM.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const JM = rM,
          dM = JM;
        mM.width = JM, mM.height = dM, mM.invertY = jM, mM._compression = zM;
        if (!this.needPOTTextures || (0, nM.g)(mM.width) && (0, nM.g)(mM.height) || (SM = !1), MM) this.updateRawCubeTexture(mM, MM, iM, OM, jM, zM);
        else {
          const MM = this._getRGBABufferInternalSizedFormat(OM),
            rM = 0;
          this._bindTextureDirectly(LM.TEXTURE_CUBE_MAP, mM, !0);
          for (let iM = 0; iM < 6; iM++) zM ? LM.compressedTexImage2D(LM.TEXTURE_CUBE_MAP_POSITIVE_X + iM, rM, this.getCaps().s3tc[zM], mM.width, mM.height, 0, void 0) : LM.texImage2D(LM.TEXTURE_CUBE_MAP_POSITIVE_X + iM, rM, MM, mM.width, mM.height, 0, hM, HM, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, mM, !0), MM && SM && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const yM = this._getSamplingParameters(QM, SM);
        return LM.texParameteri(LM.TEXTURE_CUBE_MAP, LM.TEXTURE_MAG_FILTER, yM.mag), LM.texParameteri(LM.TEXTURE_CUBE_MAP, LM.TEXTURE_MIN_FILTER, yM.min), LM.texParameteri(LM.TEXTURE_CUBE_MAP, LM.TEXTURE_WRAP_S, LM.CLAMP_TO_EDGE), LM.texParameteri(LM.TEXTURE_CUBE_MAP, LM.TEXTURE_WRAP_T, LM.CLAMP_TO_EDGE), this._bindTextureDirectly(LM.TEXTURE_CUBE_MAP, null), mM.generateMipMaps = SM, mM.samplingMode = QM, mM.isReady = !0, mM
      }, SM.ThinEngine.prototype.updateRawCubeTexture = function(rM, iM, OM, SM, jM) {
        let aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        rM._bufferViewArray = iM, rM.format = OM, rM.type = SM, rM.invertY = jM, rM._compression = aM;
        const QM = this._gl,
          zM = this._getWebGLTextureType(SM);
        let LM = this._getInternalFormat(OM);
        const mM = this._getRGBABufferInternalSizedFormat(SM);
        let HM = !1;
        LM === QM.RGB && (LM = QM.RGBA, HM = !0), this._bindTextureDirectly(QM.TEXTURE_CUBE_MAP, rM, !0), this._unpackFlipY(void 0 === jM || !!jM), rM.width % 4 !== 0 && QM.pixelStorei(QM.UNPACK_ALIGNMENT, 1);
        for (let nM = 0; nM < 6; nM++) {
          let OM = iM[nM];
          aM ? QM.compressedTexImage2D(QM.TEXTURE_CUBE_MAP_POSITIVE_X + nM, PM, this.getCaps().s3tc[aM], rM.width, rM.height, 0, OM) : (HM && (OM = MM(OM, rM.width, rM.height, SM)), QM.texImage2D(QM.TEXTURE_CUBE_MAP_POSITIVE_X + nM, PM, mM, rM.width, rM.height, 0, LM, zM, OM))
        }(!this.needPOTTextures || (0, nM.g)(rM.width) && (0, nM.g)(rM.height)) && rM.generateMipMaps && 0 === PM && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), rM.isReady = !0
      }, SM.ThinEngine.prototype.createRawCubeTextureFromUrl = function(rM, iM, OM, SM, jM, aM, PM, nM) {
        let QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          zM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          LM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          mM = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const HM = this._gl,
          hM = this.createRawCubeTexture(null, OM, SM, jM, !aM, mM, LM, null);
        iM?.addPendingData(hM), hM.url = rM, hM.isReady = !1, this._internalTexturesCache.push(hM);
        const JM = (MM, rM) => {
            iM?.removePendingData(hM), zM && zM(MM ? MM.status + " " + MM.statusText : "Failed to parse texture data", rM)
          },
          dM = async rM => {
            if (!hM._hardwareTexture) return;
            const OM = PM(rM);
            if (!OM) return;
            const aM = OM instanceof Promise ? await OM : OM,
              zM = hM.width;
            if (nM) {
              const rM = this._getWebGLTextureType(jM);
              let iM = this._getInternalFormat(SM);
              const OM = this._getRGBABufferInternalSizedFormat(jM);
              let PM = !1;
              iM === HM.RGB && (iM = HM.RGBA, PM = !0), this._bindTextureDirectly(HM.TEXTURE_CUBE_MAP, hM, !0), this._unpackFlipY(!1);
              const QM = nM(aM);
              for (let SM = 0; SM < QM.length; SM++) {
                const aM = zM >> SM;
                for (let nM = 0; nM < 6; nM++) {
                  let zM = QM[SM][nM];
                  PM && (zM = MM(zM, aM, aM, jM)), HM.texImage2D(nM, SM, OM, aM, aM, 0, iM, rM, zM)
                }
              }
              this._bindTextureDirectly(HM.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(hM, aM, SM, jM, mM);
            hM.isReady = !0, iM?.removePendingData(hM), hM.onLoadedObservable.notifyObservers(hM), hM.onLoadedObservable.clear(), QM && QM()
          };
        return this._loadFile(rM, (MM => {
          dM(MM).catch((MM => {
            JM(void 0, MM)
          }))
        }), void 0, iM?.offlineProvider, !0, JM), hM
      }, SM.ThinEngine.prototype.createRawTexture2DArray = rM(!1), SM.ThinEngine.prototype.createRawTexture3D = rM(!0), SM.ThinEngine.prototype.updateRawTexture2DArray = iM(!1), SM.ThinEngine.prototype.updateRawTexture3D = iM(!0))
    }();
    var zM = iM(40981);
    let LM = !1;
    LM || (LM = !0, SM.ThinEngine.prototype._readTexturePixelsSync = function(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        QM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const LM = this._gl;
      if (!LM) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const MM = LM.createFramebuffer();
        if (!MM) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = MM
      }
      LM.bindFramebuffer(LM.FRAMEBUFFER, this._dummyFramebuffer), OM > -1 && (MM.is2DArray || MM.is3D) ? LM.framebufferTextureLayer(LM.FRAMEBUFFER, LM.COLOR_ATTACHMENT0, MM._hardwareTexture?.underlyingResource, SM, OM) : OM > -1 ? LM.framebufferTexture2D(LM.FRAMEBUFFER, LM.COLOR_ATTACHMENT0, LM.TEXTURE_CUBE_MAP_POSITIVE_X + OM, MM._hardwareTexture?.underlyingResource, SM) : LM.framebufferTexture2D(LM.FRAMEBUFFER, LM.COLOR_ATTACHMENT0, LM.TEXTURE_2D, MM._hardwareTexture?.underlyingResource, SM);
      let mM = void 0 !== MM.type ? this._getWebGLTextureType(MM.type) : LM.UNSIGNED_BYTE;
      return PM ? jM || (jM = (0, zM.k)(MM.type, 4 * rM * iM)) : mM === LM.UNSIGNED_BYTE ? (jM || (jM = new Uint8Array(4 * rM * iM)), mM = LM.UNSIGNED_BYTE) : (jM || (jM = new Float32Array(4 * rM * iM)), mM = LM.FLOAT), aM && this.flushFramebuffer(), LM.readPixels(nM, QM, rM, iM, LM.RGBA, mM, jM), LM.bindFramebuffer(LM.FRAMEBUFFER, this._currentFramebuffer), jM
    }, SM.ThinEngine.prototype._readTexturePixels = function(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        QM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM))
    }), (0, iM(41072).c)();
    let mM = !1;
    mM || (mM = !0, SM.ThinEngine.prototype._createDepthStencilCubeTexture = function(MM, rM) {
      const iM = new aM.c(this, 12);
      if (iM.isCube = !0, 1 === this.PJ) return PM.e.Error("Depth cube texture is not supported by WebGL 1."), iM;
      const OM = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...rM
        },
        SM = this._gl;
      this._bindTextureDirectly(SM.TEXTURE_CUBE_MAP, iM, !0), this._setupDepthStencilTexture(iM, MM, OM.bilinearFiltering, OM.comparisonFunction);
      for (let jM = 0; jM < 6; jM++) OM.generateStencil ? SM.texImage2D(SM.TEXTURE_CUBE_MAP_POSITIVE_X + jM, 0, SM.DEPTH24_STENCIL8, MM, MM, 0, SM.DEPTH_STENCIL, SM.UNSIGNED_INT_24_8, null) : SM.texImage2D(SM.TEXTURE_CUBE_MAP_POSITIVE_X + jM, 0, SM.DEPTH_COMPONENT24, MM, MM, 0, SM.DEPTH_COMPONENT, SM.UNSIGNED_INT, null);
      return this._bindTextureDirectly(SM.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(iM), iM
    }, SM.ThinEngine.prototype._setCubeMapTextureParams = function(MM, rM, iM) {
      const OM = this._gl;
      OM.texParameteri(OM.TEXTURE_CUBE_MAP, OM.TEXTURE_MAG_FILTER, OM.LINEAR), OM.texParameteri(OM.TEXTURE_CUBE_MAP, OM.TEXTURE_MIN_FILTER, rM ? OM.LINEAR_MIPMAP_LINEAR : OM.LINEAR), OM.texParameteri(OM.TEXTURE_CUBE_MAP, OM.TEXTURE_WRAP_S, OM.CLAMP_TO_EDGE), OM.texParameteri(OM.TEXTURE_CUBE_MAP, OM.TEXTURE_WRAP_T, OM.CLAMP_TO_EDGE), MM.samplingMode = rM ? 3 : 2, rM && this.getCaps().textureMaxLevel && void 0 !== iM && iM > 0 && (OM.texParameteri(OM.TEXTURE_CUBE_MAP, OM.TEXTURE_MAX_LEVEL, iM), MM._maxLodLevel = iM), this._bindTextureDirectly(OM.TEXTURE_CUBE_MAP, null)
    }, SM.ThinEngine.prototype.createCubeTexture = function(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        aM = arguments.length > 6 ? arguments[6] : void 0,
        QM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        zM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        LM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        mM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        HM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        hM = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        JM = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const dM = this._gl;
      return this.createCubeTextureBase(MM, rM, iM, !!OM, SM, jM, aM, QM, zM, LM, mM, HM, (MM => this._bindTextureDirectly(dM.TEXTURE_CUBE_MAP, MM, !0)), ((MM, rM) => {
        const iM = this.needPOTTextures ? (0, nM.e)(rM[0].width, this._caps.maxCubemapTextureSize) : rM[0].width,
          jM = iM,
          QM = [dM.TEXTURE_CUBE_MAP_POSITIVE_X, dM.TEXTURE_CUBE_MAP_POSITIVE_Y, dM.TEXTURE_CUBE_MAP_POSITIVE_Z, dM.TEXTURE_CUBE_MAP_NEGATIVE_X, dM.TEXTURE_CUBE_MAP_NEGATIVE_Y, dM.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(dM.TEXTURE_CUBE_MAP, MM, !0), this._unpackFlipY(!1);
        const zM = aM ? this._getInternalFormat(aM, MM._useSRGBBuffer) : MM._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : dM.RGBA;
        let LM = aM ? this._getInternalFormat(aM) : dM.RGBA;
        MM._useSRGBBuffer && 1 === this.PJ && (LM = zM);
        for (let OM = 0; OM < QM.length; OM++)
          if (rM[OM].width !== iM || rM[OM].height !== jM) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void PM.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = iM, this._workingCanvas.height = jM, this._workingContext.drawImage(rM[OM], 0, 0, rM[OM].width, rM[OM].height, 0, 0, iM, jM), dM.texImage2D(QM[OM], 0, zM, LM, dM.UNSIGNED_BYTE, this._workingCanvas)
          } else dM.texImage2D(QM[OM], 0, zM, LM, dM.UNSIGNED_BYTE, rM[OM]);
        OM || dM.generateMipmap(dM.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(MM, !OM), MM.width = iM, MM.height = jM, MM.isReady = !0, aM && (MM.format = aM), MM.onLoadedObservable.notifyObservers(MM), MM.onLoadedObservable.clear(), SM && SM()
      }), !!hM, JM)
    }, SM.ThinEngine.prototype.generateMipMapsForCubemap = function(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (MM.generateMipMaps) {
        const iM = this._gl;
        this._bindTextureDirectly(iM.TEXTURE_CUBE_MAP, MM, !0), iM.generateMipmap(iM.TEXTURE_CUBE_MAP), rM && this._bindTextureDirectly(iM.TEXTURE_CUBE_MAP, null)
      }
    });
    iM(41074);
    let HM = !1;
    HM || (HM = !0, SM.ThinEngine.prototype.setDepthStencilTexture = function(MM, rM, iM, OM) {
      void 0 !== MM && (rM && (this._boundUniforms[MM] = rM), iM && iM.depthStencilTexture ? this._setTexture(MM, iM, !1, !0, OM) : this._setTexture(MM, null, void 0, void 0, OM))
    });
    let hM = !1;
    hM || (hM = !0, SM.ThinEngine.prototype.createRenderTargetCubeTexture = function(MM, rM) {
      const iM = this._createHardwareRenderTargetWrapper(!1, !0, MM),
        OM = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...rM
        };
      OM.generateStencilBuffer = OM.generateDepthBuffer && OM.generateStencilBuffer, (1 !== OM.type || this._caps.textureFloatLinearFiltering) && (2 !== OM.type || this._caps.textureHalfFloatLinearFiltering) || (OM.samplingMode = 1);
      const SM = this._gl,
        jM = new aM.c(this, 5);
      this._bindTextureDirectly(SM.TEXTURE_CUBE_MAP, jM, !0);
      const nM = this._getSamplingParameters(OM.samplingMode, OM.generateMipMaps);
      1 !== OM.type || this._caps.textureFloat || (OM.type = 0, PM.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), SM.texParameteri(SM.TEXTURE_CUBE_MAP, SM.TEXTURE_MAG_FILTER, nM.mag), SM.texParameteri(SM.TEXTURE_CUBE_MAP, SM.TEXTURE_MIN_FILTER, nM.min), SM.texParameteri(SM.TEXTURE_CUBE_MAP, SM.TEXTURE_WRAP_S, SM.CLAMP_TO_EDGE), SM.texParameteri(SM.TEXTURE_CUBE_MAP, SM.TEXTURE_WRAP_T, SM.CLAMP_TO_EDGE);
      for (let aM = 0; aM < 6; aM++) SM.texImage2D(SM.TEXTURE_CUBE_MAP_POSITIVE_X + aM, 0, this._getRGBABufferInternalSizedFormat(OM.type, OM.format), MM, MM, 0, this._getInternalFormat(OM.format), this._getWebGLTextureType(OM.type), null);
      const QM = SM.createFramebuffer();
      return this._bindUnboundFramebuffer(QM), iM._depthStencilBuffer = this._setupFramebufferDepthAttachments(OM.generateStencilBuffer, OM.generateDepthBuffer, MM, MM), OM.generateMipMaps && SM.generateMipmap(SM.TEXTURE_CUBE_MAP), this._bindTextureDirectly(SM.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), iM._framebuffer = QM, iM._generateDepthBuffer = OM.generateDepthBuffer, iM._generateStencilBuffer = OM.generateStencilBuffer, jM.width = MM, jM.height = MM, jM.isReady = !0, jM.isCube = !0, jM.samples = 1, jM.generateMipMaps = OM.generateMipMaps, jM.samplingMode = OM.samplingMode, jM.type = OM.type, jM.format = OM.format, this._internalTexturesCache.push(jM), iM.setTextures(jM), iM
    });
    var JM = iM(41086),
      dM = iM(41091);
    let yM = !1;
    yM || (yM = !0, SM.ThinEngine.prototype.createPrefilteredCubeTexture = function(MM, rM, OM, SM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        nM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        QM = arguments.length > 6 ? arguments[6] : void 0,
        zM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        LM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        mM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(MM, rM, null, !1, (async MM => {
        if (!MM) return void(jM && jM(null));
        const nM = MM.texture;
        if (LM ? MM.info.sphericalPolynomial && (nM._sphericalPolynomial = MM.info.sphericalPolynomial) : nM._sphericalPolynomial = nM._sphericalPolynomial ?? new JM.c, nM._source = 9, this.getCaps().textureLOD) return void(jM && jM(nM));
        const QM = this._gl,
          zM = MM.width;
        if (!zM) return;
        const {
          DDSTools: mM
        } = await iM.e(615).then((() => iM(44406))), HM = [];
        for (let iM = 0; iM < 3; iM++) {
          const jM = 1 - iM / 2,
            LM = SM,
            hM = Math.log2(zM) * OM + SM,
            JM = LM + (hM - LM) * jM,
            yM = Math.round(Math.min(Math.max(JM, 0), hM)),
            lM = new aM.c(this, 2);
          if (lM.type = nM.type, lM.format = nM.format, lM.width = Math.pow(2, Math.max(Math.log2(zM) - yM, 0)), lM.height = lM.width, lM.isCube = !0, lM._cachedWrapU = 0, lM._cachedWrapV = 0, this._bindTextureDirectly(QM.TEXTURE_CUBE_MAP, lM, !0), lM.samplingMode = 2, QM.texParameteri(QM.TEXTURE_CUBE_MAP, QM.TEXTURE_MAG_FILTER, QM.LINEAR), QM.texParameteri(QM.TEXTURE_CUBE_MAP, QM.TEXTURE_MIN_FILTER, QM.LINEAR), QM.texParameteri(QM.TEXTURE_CUBE_MAP, QM.TEXTURE_WRAP_S, QM.CLAMP_TO_EDGE), QM.texParameteri(QM.TEXTURE_CUBE_MAP, QM.TEXTURE_WRAP_T, QM.CLAMP_TO_EDGE), MM.isDDS) {
            const rM = MM.info,
              iM = MM.data;
            this._unpackFlipY(rM.isCompressed), mM.UploadDDSLevels(this, lM, iM, rM, !0, 6, yM)
          } else PM.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(QM.TEXTURE_CUBE_MAP, null);
          const EM = new dM.c(rM);
          EM._isCube = !0, EM._texture = lM, lM.isReady = !0, HM.push(EM)
        }
        nM._lodTextureHigh = HM[2], nM._lodTextureMid = HM[1], nM._lodTextureLow = HM[0], jM && jM(nM)
      }), nM, QM, zM, LM, OM, SM, null, void 0, !1, mM)
    });
    var lM = iM(41023);
    let EM = !1;
    EM || (EM = !0, SM.ThinEngine.prototype.createUniformBuffer = function(MM, rM) {
      const iM = this._gl.createBuffer();
      if (!iM) throw new Error("Unable to create uniform buffer");
      const OM = new lM.c(iM);
      return this.bindUniformBuffer(OM), MM instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, MM, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(MM), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), OM.references = 1, OM
    }, SM.ThinEngine.prototype.createDynamicUniformBuffer = function(MM, rM) {
      const iM = this._gl.createBuffer();
      if (!iM) throw new Error("Unable to create dynamic uniform buffer");
      const OM = new lM.c(iM);
      return this.bindUniformBuffer(OM), MM instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, MM, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(MM), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), OM.references = 1, OM
    }, SM.ThinEngine.prototype.updateUniformBuffer = function(MM, rM, iM, OM) {
      this.bindUniformBuffer(MM), void 0 === iM && (iM = 0), void 0 === OM ? rM instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, iM, rM) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, iM, new Float32Array(rM)) : rM instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, rM.subarray(iM, iM + OM)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(rM).subarray(iM, iM + OM)), this.bindUniformBuffer(null)
    }, SM.ThinEngine.prototype.bindUniformBuffer = function(MM) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, MM ? MM.underlyingResource : null)
    }, SM.ThinEngine.prototype.bindUniformBufferBase = function(MM, rM, iM) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, rM, MM ? MM.underlyingResource : null)
    }, SM.ThinEngine.prototype.bindUniformBlock = function(MM, rM, iM) {
      const OM = MM.program,
        SM = this._gl.getUniformBlockIndex(OM, rM);
      4294967295 !== SM && this._gl.uniformBlockBinding(OM, SM, iM)
    });
    var UM = iM(40972),
      GM = iM(41005);
    let CM = !1;
    CM || (CM = !0, GM.d.prototype.displayLoadingUI = function() {
      if (!(0, UM.l)()) return;
      const MM = this.loadingScreen;
      MM && MM.displayLoadingUI()
    }, GM.d.prototype.hideLoadingUI = function() {
      if (!(0, UM.l)()) return;
      const MM = this._loadingScreen;
      MM && MM.hideLoadingUI()
    }, Object.defineProperty(GM.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = GM.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(MM) {
        this._loadingScreen = MM
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(GM.d.prototype, "loadingUIText", {
      set: function(MM) {
        this.loadingScreen.loadingUIText = MM
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(GM.d.prototype, "loadingUIBackgroundColor", {
      set: function(MM) {
        this.loadingScreen.loadingUIBackgroundColor = MM
      },
      enumerable: !0,
      configurable: !0
    })), (0, iM(41056).d)();
    let eM = !1;
    eM || (eM = !0, GM.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, GM.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, GM.d.prototype.setDepthFunction = function(MM) {
      this._depthCullingState.depthFunc = MM
    }, GM.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, GM.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, GM.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, GM.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, GM.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, GM.d.prototype.setDepthWrite = function(MM) {
      this._depthCullingState.depthMask = MM
    }, GM.d.prototype.setAlphaConstants = function(MM, rM, iM, OM) {
      this._alphaState.setAlphaBlendConstants(MM, rM, iM, OM)
    }, GM.d.prototype.getAlphaMode = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[MM]
    }, GM.d.prototype.getAlphaEquation = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[MM]
    });
    let bM = !1;
    bM || (bM = !0, GM.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, GM.d.prototype.setStencilBuffer = function(MM) {
      this._stencilState.stencilTest = MM
    }, GM.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, GM.d.prototype.setStencilMask = function(MM) {
      this._stencilState.stencilMask = MM
    }, GM.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, GM.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, GM.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, GM.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, GM.d.prototype.setStencilFunction = function(MM) {
      this._stencilState.stencilFunc = MM
    }, GM.d.prototype.setStencilBackFunction = function(MM) {
      this._stencilState.stencilBackFunc = MM
    }, GM.d.prototype.setStencilFunctionReference = function(MM) {
      this._stencilState.stencilFuncRef = MM
    }, GM.d.prototype.setStencilFunctionMask = function(MM) {
      this._stencilState.stencilFuncMask = MM
    }, GM.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, GM.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, GM.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, GM.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, GM.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, GM.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, GM.d.prototype.setStencilOperationFail = function(MM) {
      this._stencilState.stencilOpStencilFail = MM
    }, GM.d.prototype.setStencilBackOperationFail = function(MM) {
      this._stencilState.stencilBackOpStencilFail = MM
    }, GM.d.prototype.setStencilOperationDepthFail = function(MM) {
      this._stencilState.stencilOpDepthFail = MM
    }, GM.d.prototype.setStencilBackOperationDepthFail = function(MM) {
      this._stencilState.stencilBackOpDepthFail = MM
    }, GM.d.prototype.setStencilOperationPass = function(MM) {
      this._stencilState.stencilOpStencilDepthPass = MM
    }, GM.d.prototype.setStencilBackOperationPass = function(MM) {
      this._stencilState.stencilBackOpStencilDepthPass = MM
    }, GM.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, GM.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    iM(41128);
    let wM = !1;
    wM || (wM = !0, GM.d.prototype.createDepthStencilTexture = function(MM, rM, iM) {
      if (rM.isCube) {
        const iM = MM.width || MM;
        return this._createDepthStencilCubeTexture(iM, rM)
      }
      return this._createDepthStencilTexture(MM, rM, iM)
    });
    iM(41137), iM(41184);
    let tM = !1;
    tM || (tM = !0, SM.ThinEngine.prototype.enableScissor = function(MM, rM, iM, OM) {
      const SM = this._gl;
      SM.enable(SM.SCISSOR_TEST), SM.scissor(MM, rM, iM, OM)
    }, SM.ThinEngine.prototype.disableScissor = function() {
      const MM = this._gl;
      MM.disable(MM.SCISSOR_TEST)
    })
  },
  40935: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => GM
    });
    var OM = iM(40939),
      SM = iM(38064),
      jM = iM(40949),
      aM = iM(41009);
    class PM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new nM(MM)
      }
      sampleFrame() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const rM = MM - this._lastFrameTimeMs;
            this._rollingFrameTime.add(rM)
          }
          this._lastFrameTimeMs = MM
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
        const MM = this._rollingFrameTime.history(0);
        return 0 === MM ? 0 : 1e3 / MM
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
    class nM {
      constructor(MM) {
        this._samples = new Array(MM), this.reset()
      }
      add(MM) {
        let rM;
        if (this.isSaturated()) {
          const MM = this._samples[this._pos];
          rM = MM - this.average, this.average -= rM / (this._sampleCount - 1), this._m2 -= rM * (MM - this.average)
        } else this._sampleCount++;
        rM = MM - this.average, this.average += rM / this._sampleCount, this._m2 += rM * (MM - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = MM, this._pos++, this._pos %= this._samples.length
      }
      history(MM) {
        if (MM >= this._sampleCount || MM >= this._samples.length) return 0;
        const rM = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(rM - MM)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(MM) {
        const rM = this._samples.length;
        return (MM % rM + rM) % rM
      }
    }
    var QM = iM(41023),
      zM = iM(39711),
      LM = iM(41040),
      mM = iM(41005),
      HM = iM(40972);

    function hM(MM) {
      const rM = function(MM) {
        if (!(0, HM.g)() || !document.body) return null;
        const rM = document.createElement("span");
        rM.textContent = "Hg", rM.style.font = MM;
        const iM = document.createElement("div");
        iM.style.display = "inline-block", iM.style.width = "1px", iM.style.height = "0px", iM.style.verticalAlign = "bottom";
        const OM = document.createElement("div");
        let SM, jM;
        OM.style.whiteSpace = "nowrap", OM.appendChild(rM), OM.appendChild(iM), document.body.appendChild(OM);
        try {
          jM = iM.getBoundingClientRect().top - rM.getBoundingClientRect().top, iM.style.verticalAlign = "baseline", SM = iM.getBoundingClientRect().top - rM.getBoundingClientRect().top
        } finally {
          document.body.removeChild(OM)
        }
        const aM = {
          ascent: SM,
          height: jM,
          descent: jM - SM
        };
        return JM(aM) ? aM : null
      }(MM);
      if (rM) return rM;
      const iM = function(MM) {
        let rM = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? rM = new OffscreenCanvas(64, 64) : (0, HM.g)() && "function" === typeof document.createElement && (rM = document.createElement("canvas"), rM.width = 64, rM.height = 64);
          const iM = rM?.getContext("2d");
          if (!iM) return null;
          iM.font = MM;
          const OM = iM.measureText("Hg"),
            SM = Number(OM.actualBoundingBoxAscent ?? OM.fontBoundingBoxAscent),
            jM = Number(OM.actualBoundingBoxDescent ?? OM.fontBoundingBoxDescent),
            aM = {
              ascent: SM,
              height: SM + jM,
              descent: jM
            };
          return JM(aM) ? aM : null
        } catch {
          return null
        } finally {
          const MM = rM;
          "function" === typeof MM?.dispose && MM.dispose()
        }
      }(MM);
      return iM || function(MM) {
        const rM = Math.max(1, function(MM) {
            const rM = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(MM || ""));
            return rM ? Number(rM[1]) : 16
          }(MM)),
          iM = .8 * rM,
          OM = .2 * rM;
        return {
          ascent: iM,
          height: iM + OM,
          descent: OM
        }
      }(MM)
    }

    function JM(MM) {
      return Number.isFinite(MM.ascent) && Number.isFinite(MM.height) && Number.isFinite(MM.descent) && MM.height > 0
    }

    function dM(MM) {
      if (MM.requestPointerLock) {
        const rM = MM.requestPointerLock();
        rM instanceof Promise ? rM.then((() => {
          MM.focus()
        })).catch((() => {})) : MM.focus()
      }
    }
    var yM = iM(41048),
      lM = iM(41003),
      EM = iM(41056),
      UM = iM(41061);
    class GM extends jM.ThinEngine {
      static get NpmPackage() {
        return mM.d.NpmPackage
      }
      static get Version() {
        return mM.d.Version
      }
      static get Instances() {
        return SM.c.Instances
      }
      static get LastCreatedEngine() {
        return SM.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return SM.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(MM) {
        return mM.d.DefaultLoadingScreenFactory(MM)
      }
      get _supportsHardwareTextureRescaling() {
        return !!GM._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, EM.d)(), (0, UM.c)(), super(MM, rM, iM, OM), this._performanceMonitor = new PM, this._drawCalls = new yM.e, MM && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(MM) {
        super._sharedInit(MM),
          function(MM, rM, iM) {
            MM._onCanvasFocus = () => {
              MM.onCanvasFocusObservable.notifyObservers(MM)
            }, MM._onCanvasBlur = () => {
              MM.onCanvasBlurObservable.notifyObservers(MM)
            }, MM._onCanvasContextMenu = rM => {
              MM.disableContextMenu && rM.preventDefault()
            }, rM.addEventListener("focus", MM._onCanvasFocus), rM.addEventListener("blur", MM._onCanvasBlur), rM.addEventListener("contextmenu", MM._onCanvasContextMenu), MM._onBlur = () => {
              MM.disablePerformanceMonitorInBackground && MM.performanceMonitor.disable(), MM._windowIsBackground = !0
            }, MM._onFocus = () => {
              MM.disablePerformanceMonitorInBackground && MM.performanceMonitor.enable(), MM._windowIsBackground = !1
            }, MM._onCanvasPointerOut = iM => {
              document.elementFromPoint(iM.clientX, iM.clientY) !== rM && MM.onCanvasPointerOutObservable.notifyObservers(iM)
            };
            const OM = MM.getHostWindow();
            OM && "function" === typeof OM.addEventListener && (OM.addEventListener("blur", MM._onBlur), OM.addEventListener("focus", MM._onFocus)), rM.addEventListener("pointerout", MM._onCanvasPointerOut), iM.doNotHandleTouchAction || function(MM) {
              MM && MM.setAttribute && (MM.setAttribute("touch-action", "none"), MM.style.touchAction = "none", MM.style.webkitTapHighlightColor = "transparent")
            }(rM), !mM.d.audioEngine && iM.audioEngine && mM.d.AudioEngineFactory && (mM.d.audioEngine = mM.d.AudioEngineFactory(MM.getRenderingCanvas(), MM.getAudioContext(), MM.getAudioDestination())), (0, HM.g)() && (MM._onFullscreenChange = () => {
              MM.isFullscreen = !!document.fullscreenElement, MM.isFullscreen && MM._pointerLockRequested && rM && dM(rM)
            }, document.addEventListener("fullscreenchange", MM._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", MM._onFullscreenChange, !1), MM._onPointerLockChange = () => {
              MM.isPointerLock = document.pointerLockElement === rM
            }, document.addEventListener("pointerlockchange", MM._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", MM._onPointerLockChange, !1)), MM.enableOfflineSupport = void 0 !== mM.d.OfflineProviderFactory, MM._deterministicLockstep = !!iM.deterministicLockstep, MM._lockstepMaxSteps = iM.lockstepMaxSteps || 0, MM._timeStep = iM.timeStep || 1 / 60
          }(this, MM, this._creationOptions)
      }
      resizeImageBitmap(MM, rM, iM) {
        return function(MM, rM, iM, OM) {
          const SM = MM.createCanvas(iM, OM).getContext("2d");
          if (!SM) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return SM.drawImage(rM, 0, 0), SM.getImageData(0, 0, iM, OM).data
        }(this, MM, rM, iM)
      }
      async _createImageBitmapFromSource(MM, rM) {
        return await async function(MM, rM, iM) {
          return await new Promise(((OM, SM) => {
            const jM = new Image;
            jM.onload = () => {
              jM.decode().then((() => {
                MM.createImageBitmap(jM, iM).then((MM => {
                  OM(MM)
                }))
              }))
            }, jM.onerror = () => {
              SM(`Error loading image ${jM.src}`)
            }, jM.src = rM
          }))
        }(this, MM, rM)
      }
      switchFullscreen(MM) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(MM)
      }
      enterFullscreen(MM) {
        this.isFullscreen || (this._pointerLockRequested = MM, this._renderingCanvas && function(MM) {
          const rM = MM.requestFullscreen || MM.webkitRequestFullscreen;
          rM && rM.call(MM)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const MM = document;
          document.exitFullscreen ? document.exitFullscreen() : MM.webkitCancelFullScreen && MM.webkitCancelFullScreen()
        }()
      }
      setDitheringState(MM) {
        MM ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(MM) {
        MM ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(MM, rM, iM, OM) {
        const SM = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(MM, rM, iM, OM), SM
      }
      scissorClear(MM, rM, iM, OM, SM) {
        this.enableScissor(MM, rM, iM, OM), this.clear(SM, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(MM) {
        const rM = this._gl.getAttachedShaders(MM);
        return rM ? this._gl.getShaderSource(rM[0]) : null
      }
      getFragmentShaderSource(MM) {
        const rM = this._gl.getAttachedShaders(MM);
        return rM ? this._gl.getShaderSource(rM[1]) : null
      }
      set framebufferDimensionsObject(MM) {
        this._framebufferDimensionsObject = MM, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const MM of this.scenes) MM.resetCachedMaterial(), MM._rebuildGeometries();
        for (const MM of this._virtualScenes) MM.resetCachedMaterial(), MM._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(MM) {
        return hM(MM)
      }
      enterPointerlock() {
        this._renderingCanvas && dM(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      WU() {
        this._measureFps(), super.WU()
      }
      _deletePipelineContext(MM) {
        const rM = MM;
        rM && rM.program && rM.transformFeedback && (this.deleteTransformFeedback(rM.transformFeedback), rM.transformFeedback = null), super._deletePipelineContext(MM)
      }
      createShaderProgram(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        SM = SM || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const aM = super.createShaderProgram(MM, rM, iM, OM, SM, jM);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), aM
      }
      _createShaderProgram(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const jM = OM.createProgram();
        if (MM.program = jM, !jM) throw new Error("Unable to create program");
        if (OM.attachShader(jM, rM), OM.attachShader(jM, iM), this.PJ > 1 && SM) {
          const rM = this.createTransformFeedback();
          this.bindTransformFeedback(rM), this.setTranformFeedbackVaryings(jM, SM), MM.transformFeedback = rM
        }
        return OM.linkProgram(jM), this.PJ > 1 && SM && this.bindTransformFeedback(null), MM.context = OM, MM.vertexShader = rM, MM.fragmentShader = iM, MM.isParallelCompiled || this._finalizePipelineContext(MM), jM
      }
      _releaseTexture(MM) {
        super._releaseTexture(MM)
      }
      _releaseRenderTargetWrapper(MM) {
        super._releaseRenderTargetWrapper(MM);
        for (const rM of this.scenes) {
          for (const iM of rM.postProcesses) iM._outputTexture === MM && (iM._outputTexture = null);
          for (const iM of rM.cameras)
            for (const rM of iM._postProcesses) rM && rM._outputTexture === MM && (rM._outputTexture = null)
        }
      }
      _rescaleTexture(MM, rM, iM, OM, SM) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const jM = this.createRenderTargetTexture({
          width: rM.width,
          height: rM.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && GM._RescalePostProcessFactory && (this._rescalePostProcess = GM._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const aM = () => {
              this._rescalePostProcess.onApply = function(rM) {
                rM._bindTexture("textureSampler", MM)
              };
              let aM = iM;
              aM || (aM = this.scenes[this.scenes.length - 1]), aM.postProcessManager.directRender([this._rescalePostProcess], jM, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, rM, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, OM, 0, 0, rM.width, rM.height, 0), this.unBindFramebuffer(jM), jM.dispose(), SM && SM()
            },
            PM = this._rescalePostProcess.getEffect();
          PM ? PM.executeWhenCompiled(aM) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((MM => {
            MM.executeWhenCompiled(aM)
          }))
        }
      }
      wrapWebGLTexture(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const aM = new LM.d(MM, this._gl),
          PM = new OM.c(this, 15, !0);
        return PM._hardwareTexture = aM, PM.baseWidth = SM, PM.baseHeight = jM, PM.width = SM, PM.height = jM, PM.isReady = !0, PM.useMipMaps = rM, this.updateTextureSamplingMode(iM, PM), PM
      }
      updateWrappedWebGLTexture(MM, rM) {
        if (15 !== MM.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const OM of this._renderTargetWrapperCache)
          if (OM.textures?.includes(MM)) {
            if (OM.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (OM._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } MM._hardwareTexture = new LM.d(rM, this._gl), MM.isReady = !0, MM._cachedCoordinatesMode = null, MM._cachedWrapU = null, MM._cachedWrapV = null, MM._cachedWrapR = null, MM._cachedAnisotropicFilteringLevel = null;
        for (const OM in this._boundTexturesCache) this._boundTexturesCache[OM] === MM && (this._boundTexturesCache[OM] = null);
        this.updateTextureSamplingMode(MM.samplingMode, MM);
        const iM = this._gl;
        for (const OM of this._renderTargetWrapperCache) {
          if (OM.texture !== MM) continue;
          const SM = OM,
            jM = OM.samples,
            aM = jM > 1;
          SM._framebuffer && iM.deleteFramebuffer(SM._framebuffer), !aM && SM._depthStencilBuffer && (iM.deleteRenderbuffer(SM._depthStencilBuffer), SM._depthStencilBuffer = null);
          const PM = this._currentFramebuffer,
            nM = iM.createFramebuffer();
          this._bindUnboundFramebuffer(nM), iM.framebufferTexture2D(iM.FRAMEBUFFER, iM.COLOR_ATTACHMENT0, iM.TEXTURE_2D, rM, 0), aM || (SM._depthStencilBuffer = this._setupFramebufferDepthAttachments(OM._generateStencilBuffer, OM._generateDepthBuffer, OM.width, OM.height)), this._bindUnboundFramebuffer(PM), SM._framebuffer = nM, aM && (OM._samples = 1, this.updateRenderTargetTextureSampleCount(SM, jM))
        }
      }
      _uploadImageToTexture(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SM = this._gl,
          jM = this._getWebGLTextureType(MM.type),
          aM = this._getInternalFormat(MM.format),
          PM = this._getRGBABufferInternalSizedFormat(MM.type, aM),
          nM = MM.isCube ? SM.TEXTURE_CUBE_MAP : SM.TEXTURE_2D;
        this._bindTextureDirectly(nM, MM, !0), this._unpackFlipY(MM.invertY);
        let QM = SM.TEXTURE_2D;
        MM.isCube && (QM = SM.TEXTURE_CUBE_MAP_POSITIVE_X + iM), SM.texImage2D(QM, OM, PM, aM, jM, rM), this._bindTextureDirectly(nM, null, !0)
      }
      updateTextureComparisonFunction(MM, rM) {
        if (1 === this.PJ) return void zM.e.Error("WebGL 1 does not support texture comparison.");
        const iM = this._gl;
        MM.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, MM, !0), 0 === rM ? (iM.texParameteri(iM.TEXTURE_CUBE_MAP, iM.TEXTURE_COMPARE_FUNC, 515), iM.texParameteri(iM.TEXTURE_CUBE_MAP, iM.TEXTURE_COMPARE_MODE, iM.NONE)) : (iM.texParameteri(iM.TEXTURE_CUBE_MAP, iM.TEXTURE_COMPARE_FUNC, rM), iM.texParameteri(iM.TEXTURE_CUBE_MAP, iM.TEXTURE_COMPARE_MODE, iM.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, MM, !0), 0 === rM ? (iM.texParameteri(iM.TEXTURE_2D, iM.TEXTURE_COMPARE_FUNC, 515), iM.texParameteri(iM.TEXTURE_2D, iM.TEXTURE_COMPARE_MODE, iM.NONE)) : (iM.texParameteri(iM.TEXTURE_2D, iM.TEXTURE_COMPARE_FUNC, rM), iM.texParameteri(iM.TEXTURE_2D, iM.TEXTURE_COMPARE_MODE, iM.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), MM._comparisonFunction = rM
      }
      createInstancesBuffer(MM) {
        const rM = this._gl.createBuffer();
        if (!rM) throw new Error("Unable to create instance buffer");
        const iM = new QM.c(rM);
        return iM.vL = MM, this.bindArrayBuffer(iM), this._gl.bufferData(this._gl.ARRAY_BUFFER, MM, this._gl.DYNAMIC_DRAW), iM.references = 1, iM
      }
      deleteInstancesBuffer(MM) {
        this._gl.deleteBuffer(MM)
      }
      async _clientWaitAsync(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const OM = this._gl;
        return await new Promise(((SM, jM) => {
          (0, lM.d)((() => {
            const iM = OM.clientWaitSync(MM, rM, 0);
            if (iM == OM.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return iM != OM.TIMEOUT_EXPIRED
          }), SM, jM, iM)
        }))
      }
      _readPixelsAsync(MM, rM, iM, OM, SM, jM, aM) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const PM = this._gl,
          nM = PM.createBuffer();
        PM.bindBuffer(PM.PIXEL_PACK_BUFFER, nM), PM.bufferData(PM.PIXEL_PACK_BUFFER, aM.byteLength, PM.STREAM_READ), PM.readPixels(MM, rM, iM, OM, SM, jM, 0), PM.bindBuffer(PM.PIXEL_PACK_BUFFER, null);
        const QM = PM.fenceSync(PM.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return QM ? (PM.flush(), this._clientWaitAsync(QM, 0, 10).then((() => (PM.deleteSync(QM), PM.bindBuffer(PM.PIXEL_PACK_BUFFER, nM), PM.getBufferSubData(PM.PIXEL_PACK_BUFFER, 0, aM), PM.bindBuffer(PM.PIXEL_PACK_BUFFER, null), PM.deleteBuffer(nM), aM)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(MM, rM) {
            1 === SM.c.Instances.length && mM.d.audioEngine && (mM.d.audioEngine.dispose(), mM.d.audioEngine = null);
            const iM = MM.getHostWindow();
            iM && "function" === typeof iM.removeEventListener && (iM.removeEventListener("blur", MM._onBlur), iM.removeEventListener("focus", MM._onFocus)), rM && (rM.removeEventListener("focus", MM._onCanvasFocus), rM.removeEventListener("blur", MM._onCanvasBlur), rM.removeEventListener("pointerout", MM._onCanvasPointerOut), rM.removeEventListener("contextmenu", MM._onCanvasContextMenu)), (0, HM.g)() && (document.removeEventListener("fullscreenchange", MM._onFullscreenChange), document.removeEventListener("mozfullscreenchange", MM._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", MM._onFullscreenChange), document.removeEventListener("msfullscreenchange", MM._onFullscreenChange), document.removeEventListener("pointerlockchange", MM._onPointerLockChange), document.removeEventListener("mspointerlockchange", MM._onPointerLockChange), document.removeEventListener("mozpointerlockchange", MM._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", MM._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    GM.ALPHA_DISABLE = 0, GM.ALPHA_ADD = 1, GM.ALPHA_COMBINE = 2, GM.ALPHA_SUBTRACT = 3, GM.ALPHA_MULTIPLY = 4, GM.ALPHA_MAXIMIZED = 5, GM.ALPHA_ONEONE = 6, GM.ALPHA_PREMULTIPLIED = 7, GM.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, GM.ALPHA_INTERPOLATE = 9, GM.ALPHA_SCREENMODE = 10, GM.DELAYLOADSTATE_NONE = 0, GM.DELAYLOADSTATE_LOADED = 1, GM.DELAYLOADSTATE_LOADING = 2, GM.DELAYLOADSTATE_NOTLOADED = 4, GM.NEVER = 512, GM.ALWAYS = 519, GM.LESS = 513, GM.EQUAL = 514, GM.LEQUAL = 515, GM.GREATER = 516, GM.GEQUAL = 518, GM.NOTEQUAL = 517, GM.KEEP = 7680, GM.REPLACE = 7681, GM.INCR = 7682, GM.DECR = 7683, GM.INVERT = 5386, GM.INCR_WRAP = 34055, GM.DECR_WRAP = 34056, GM.TEXTURE_CLAMP_ADDRESSMODE = 0, GM.TEXTURE_WRAP_ADDRESSMODE = 1, GM.TEXTURE_MIRROR_ADDRESSMODE = 2, GM.TEXTUREFORMAT_ALPHA = 0, GM.TEXTUREFORMAT_LUMINANCE = 1, GM.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, GM.TEXTUREFORMAT_RGB = 4, GM.TEXTUREFORMAT_RGBA = 5, GM.TEXTUREFORMAT_RED = 6, GM.TEXTUREFORMAT_R = 6, GM.TEXTUREFORMAT_R16_UNORM = 33322, GM.TEXTUREFORMAT_RG16_UNORM = 33324, GM.TEXTUREFORMAT_RGB16_UNORM = 32852, GM.TEXTUREFORMAT_RGBA16_UNORM = 32859, GM.TEXTUREFORMAT_R16_SNORM = 36760, GM.TEXTUREFORMAT_RG16_SNORM = 36761, GM.TEXTUREFORMAT_RGB16_SNORM = 36762, GM.TEXTUREFORMAT_RGBA16_SNORM = 36763, GM.TEXTUREFORMAT_RG = 7, GM.TEXTUREFORMAT_RED_INTEGER = 8, GM.TEXTUREFORMAT_R_INTEGER = 8, GM.TEXTUREFORMAT_RG_INTEGER = 9, GM.TEXTUREFORMAT_RGB_INTEGER = 10, GM.TEXTUREFORMAT_RGBA_INTEGER = 11, GM.TEXTURETYPE_UNSIGNED_BYTE = 0, GM.TEXTURETYPE_UNSIGNED_INT = 0, GM.TEXTURETYPE_FLOAT = 1, GM.TEXTURETYPE_HALF_FLOAT = 2, GM.TEXTURETYPE_BYTE = 3, GM.TEXTURETYPE_SHORT = 4, GM.TEXTURETYPE_UNSIGNED_SHORT = 5, GM.TEXTURETYPE_INT = 6, GM.TEXTURETYPE_UNSIGNED_INTEGER = 7, GM.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, GM.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, GM.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, GM.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, GM.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, GM.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, GM.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, GM.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, GM.TEXTURE_NEAREST_SAMPLINGMODE = 1, GM.TEXTURE_BILINEAR_SAMPLINGMODE = 2, GM.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, GM.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, GM.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, GM.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, GM.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, GM.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, GM.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, GM.TEXTURE_NEAREST_LINEAR = 7, GM.TEXTURE_NEAREST_NEAREST = 1, GM.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, GM.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, GM.TEXTURE_LINEAR_LINEAR = 2, GM.TEXTURE_LINEAR_NEAREST = 12, GM.TEXTURE_EXPLICIT_MODE = 0, GM.TEXTURE_SPHERICAL_MODE = 1, GM.TEXTURE_PLANAR_MODE = 2, GM.TEXTURE_CUBIC_MODE = 3, GM.TEXTURE_PROJECTION_MODE = 4, GM.TEXTURE_SKYBOX_MODE = 5, GM.TEXTURE_INVCUBIC_MODE = 6, GM.TEXTURE_EQUIRECTANGULAR_MODE = 7, GM.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, GM.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, GM.SCALEMODE_FLOOR = 1, GM.SCALEMODE_NEAREST = 2, GM.SCALEMODE_CEILING = 3
  },
  41081: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM
    });
    var OM = iM(41042);
    class SM {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(MM) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = MM, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, MM && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, OM.e)(MM.format))
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
      getBaseArrayLayer(MM) {
        if (!this._textures) return -1;
        const rM = this._textures[MM],
          iM = this._layerIndices?.[MM] ?? 0,
          OM = this._faceIndices?.[MM] ?? 0;
        return rM.isCube ? 6 * iM + OM : rM.is3D ? 0 : iM
      }
      get samples() {
        return this._samples
      }
      setSamples(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === MM && !iM) return MM;
        const OM = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, MM, rM) : this._engine.updateRenderTargetTextureSampleCount(this, MM);
        return this._samples = MM, OM
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(MM, rM, iM, OM, SM) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = MM, this._isCube = rM, this._size = iM, this._engine = OM, this._depthStencilTexture = null, this.label = SM
      }
      setTextures(MM) {
        Array.isArray(MM) ? this._textures = MM : this._textures = MM ? [MM] : null
      }
      setTexture(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[rM] !== MM && (this._textures[rM] && iM && this._textures[rM].dispose(), this._textures[rM] = MM)
      }
      setLayerAndFaceIndices(MM, rM) {
        this._layerIndices = MM, this._faceIndices = rM
      }
      setLayerAndFaceIndex() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== rM && rM >= 0 && (this._layerIndices[MM] = rM), void 0 !== iM && iM >= 0 && (this._faceIndices[MM] = iM)
      }
      createDepthStencilTexture() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = iM, this._depthStencilTextureLabel = jM, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: rM,
          comparisonFunction: MM,
          generateStencil: iM,
          isCube: this._isCube,
          samples: OM,
          depthTextureFormat: SM,
          label: jM
        }, this), this._depthStencilTexture
      }
      _shareDepth(MM) {
        this.shareDepth(MM)
      }
      shareDepth(MM) {
        this._depthStencilTexture && (MM._depthStencilTexture && MM._depthStencilTexture.dispose(), MM._depthStencilTexture = this._depthStencilTexture, MM._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(MM) {
        this.texture && this.texture._swapAndDie(MM), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let MM = null;
        if (this._isMulti) {
          const rM = this.textures;
          if (rM && rM.length > 0) {
            let iM = !1,
              OM = rM.length,
              SM = -1;
            const jM = rM[rM.length - 1]._source;
            14 !== jM && 12 !== jM || (iM = !0, SM = rM[rM.length - 1].format, OM--);
            const aM = [],
              PM = [],
              nM = [],
              QM = [],
              zM = [],
              LM = [],
              mM = [],
              HM = {};
            for (let MM = 0; MM < OM; ++MM) {
              const iM = rM[MM];
              aM.push(iM.samplingMode), PM.push(iM.type), nM.push(iM.format);
              void 0 !== HM[iM.uniqueId] ? (QM.push(-1), mM.push(0)) : (HM[iM.uniqueId] = MM, iM.is2DArray ? (QM.push(35866), mM.push(iM.depth)) : iM.isCube ? (QM.push(34067), mM.push(0)) : iM.is3D ? (QM.push(32879), mM.push(iM.depth)) : (QM.push(3553), mM.push(0))), this._faceIndices && zM.push(this._faceIndices[MM] ?? 0), this._layerIndices && LM.push(this._layerIndices[MM] ?? 0)
            }
            const hM = {
                samplingModes: aM,
                generateMipMaps: rM[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: iM,
                depthTextureFormat: SM,
                types: PM,
                formats: nM,
                BaM: OM,
                targetTypes: QM,
                faceIndex: zM,
                layerIndex: LM,
                layerCounts: mM,
                label: this.label
              },
              JM = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            MM = this._engine.createMultipleRenderTarget(JM, hM);
            for (let dM = 0; dM < OM; ++dM) {
              if (-1 !== QM[dM]) continue;
              const iM = HM[rM[dM].uniqueId];
              MM.setTexture(MM.textures[iM], dM)
            }
          }
        } else {
          const rM = {};
          if (rM.generateDepthBuffer = this._generateDepthBuffer, rM.generateMipMaps = this.texture?.generateMipMaps ?? !1, rM.generateStencilBuffer = this._generateStencilBuffer, rM.samplingMode = this.texture?.samplingMode, rM.type = this.texture?.type, rM.format = this.texture?.format, rM.noColorAttachment = !this._textures, rM.label = this.label, this.isCube) MM = this._engine.createRenderTargetCubeTexture(this.width, rM);
          else {
            const iM = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            MM = this._engine.createRenderTargetTexture(iM, rM)
          }
          MM.texture && (MM.texture.isReady = !0)
        }
        return MM
      }
      _swapRenderTargetWrapper(MM) {
        if (this._textures && MM._textures)
          for (let rM = 0; rM < this._textures.length; ++rM) this._textures[rM]._swapAndDie(MM._textures[rM], !1), MM._textures[rM].isReady = !0;
        this._depthStencilTexture && MM._depthStencilTexture && (this._depthStencilTexture._swapAndDie(MM._depthStencilTexture), MM._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const MM = this._cloneRenderTargetWrapper();
        if (MM) {
          if (this._depthStencilTexture) {
            const rM = this._depthStencilTexture.samplingMode,
              iM = this._depthStencilTexture.format,
              OM = 2 === rM || 3 === rM || 11 === rM;
            MM.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, OM, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, iM, this._depthStencilTextureLabel)
          }
          this.samples > 1 && MM.setSamples(this.samples), MM._swapRenderTargetWrapper(this), MM.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let MM = 0; MM < this._textures.length; ++MM) this._textures[MM].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41515: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      static get ForceFullSceneLoadingForIncremental() {
        return OM._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(MM) {
        OM._ForceFullSceneLoadingForIncremental = MM
      }
      static get ShowLoadingScreen() {
        return OM._ShowLoadingScreen
      }
      static set ShowLoadingScreen(MM) {
        OM._ShowLoadingScreen = MM
      }
      static get loggingLevel() {
        return OM._LoggingLevel
      }
      static set loggingLevel(MM) {
        OM._LoggingLevel = MM
      }
      static get CleanBoneMatrixWeights() {
        return OM._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(MM) {
        OM._CleanBoneMatrixWeights = MM
      }
    }
    OM._ForceFullSceneLoadingForIncremental = !1, OM._ShowLoadingScreen = !0, OM._CleanBoneMatrixWeights = !1, OM._LoggingLevel = 0
  },
  41186: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(39711);
    const SM = new Map;

    function jM(MM, rM) {
      (function(MM) {
        return SM.delete(MM)
      })(MM) && OM.e.Warn(`Extension with the name '${MM}' already exists`), SM.set(MM, rM)
    }

    function aM(MM, rM) {
      "image/ktx" !== rM && "image/ktx2" !== rM || (MM = ".ktx"), SM.has(MM) || (MM.endsWith(".ies") && jM(".ies", (async () => await iM.e(618).then((() => iM(44416))).then((MM => new MM._IESTextureLoader)))), MM.endsWith(".dds") && jM(".dds", (async () => await iM.e(616).then((() => iM(44422))).then((MM => new MM._DDSTextureLoader)))), MM.endsWith(".basis") && jM(".basis", (async () => await iM.e(619).then((() => iM(44426))).then((MM => new MM._BasisTextureLoader)))), MM.endsWith(".env") && jM(".env", (async () => await Promise.all([iM.e(620), iM.e(617)]).then((() => iM(44433))).then((MM => new MM._ENVTextureLoader)))), MM.endsWith(".hdr") && jM(".hdr", (async () => await iM.e(621).then((() => iM(44487))).then((MM => new MM._HDRTextureLoader)))), (MM.endsWith(".ktx") || MM.endsWith(".ktx2")) && (jM(".ktx", (async () => await iM.e(622).then((() => iM(44496))).then((MM => new MM._KTXTextureLoader)))), jM(".ktx2", (async () => await iM.e(622).then((() => iM(44496))).then((MM => new MM._KTXTextureLoader))))), MM.endsWith(".tga") && jM(".tga", (async () => await iM.e(623).then((() => iM(44504))).then((MM => new MM._TGATextureLoader)))), MM.endsWith(".exr") && jM(".exr", (async () => await iM.e(624).then((() => iM(44511))).then((MM => new MM._ExrTextureLoader)))));
      const OM = SM.get(MM);
      return OM ? Promise.resolve(OM(rM)) : null
    }
  },
  41538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      i: () => QM
    });
    var OM = iM(41397),
      SM = iM(41124),
      jM = iM(38085);
    class aM extends OM.c {
      get B_() {
        return this._subMaterials
      }
      set B_(MM) {
        this._subMaterials = MM, this._hookArray(MM)
      }
      getChildren() {
        return this.B_
      }
      constructor(MM, rM) {
        super(MM, rM, !0), this._waitingSubMaterialsUniqueIds = [], this.Hk().addMultiMaterial(this), this.B_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(MM) {
        var rM = this;
        const iM = MM.push;
        MM.push = function() {
          for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
          const aM = iM.apply(MM, SM);
          return rM._markAllSubMeshesAsTexturesDirty(), aM
        };
        const OM = MM.splice;
        MM.splice = (rM, iM) => {
          const SM = OM.call(MM, rM, iM ?? MM.length);
          return this._markAllSubMeshesAsTexturesDirty(), SM
        }
      }
      getSubMaterial(MM) {
        return MM < 0 || MM >= this.B_.length ? this.Hk().defaultMaterial : this.B_[MM]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.B_.map((MM => MM ? MM.getActiveTextures() : [])))
      }
      hasTexture(MM) {
        if (super.hasTexture(MM)) return !0;
        for (let rM = 0; rM < this.B_.length; rM++)
          if (this.B_[rM]?.hasTexture(MM)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(MM, rM, iM) {
        for (let OM = 0; OM < this.B_.length; OM++) {
          const SM = this.B_[OM];
          if (SM) {
            if (SM._storeEffectOnSubMeshes) {
              if (!SM.isReadyForSubMesh(MM, rM, iM)) return !1;
              continue
            }
            if (!SM.isReady(MM)) return !1
          }
        }
        return !0
      }
      clone(MM, rM) {
        const iM = new aM(MM, this.Hk());
        for (let OM = 0; OM < this.B_.length; OM++) {
          let SM;
          const jM = this.B_[OM];
          SM = rM && jM ? jM.clone(MM + "-" + jM.name) : this.B_[OM], iM.B_.push(SM)
        }
        return iM
      }
      serialize() {
        const MM = {};
        MM.name = this.name, MM.id = this.id, MM.uniqueId = this.uniqueId, SM.d && (MM.tags = SM.d.GetTags(this)), MM.materialsUniqueIds = [], MM.materials = [];
        for (let rM = 0; rM < this.B_.length; rM++) {
          const iM = this.B_[rM];
          iM ? (MM.materialsUniqueIds.push(iM.uniqueId), MM.materials.push(iM.id)) : (MM.materialsUniqueIds.push(null), MM.materials.push(null))
        }
        return MM
      }
      dispose(MM, rM, iM) {
        const OM = this.Hk();
        if (!OM) return;
        if (iM)
          for (let jM = 0; jM < this.B_.length; jM++) {
            const iM = this.B_[jM];
            iM && iM.dispose(MM, rM)
          }
        const SM = OM.multiMaterials.indexOf(this);
        SM >= 0 && OM.multiMaterials.splice(SM, 1), super.dispose(MM, rM)
      }
    }
    let PM = !1;

    function nM(MM, rM) {
      const iM = new aM(MM.name, rM);
      if (iM.id = MM.id, iM._loadedUniqueId = MM.uniqueId, SM.d && SM.d.AddTagsTo(iM, MM.tags), MM.materialsUniqueIds) iM._waitingSubMaterialsUniqueIds = MM.materialsUniqueIds;
      else
        for (const OM of MM.materials) iM.B_.push(rM.getLastMaterialById(OM));
      return iM
    }

    function QM() {
      PM || (PM = !0, aM.ParseMultiMaterial = nM, (0, jM.e)("BABYLON.MultiMaterial", aM))
    }
  },
  41337: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM, SM, jM = iM(38040);
    ! function(MM) {
      MM[MM.LOCAL = 0] = "LOCAL", MM[MM.WORLD = 1] = "WORLD", MM[MM.BONE = 2] = "BONE"
    }(OM || (OM = {}));
    class aM {}
    aM.X = new jM.q(1, 0, 0), aM.Y = new jM.q(0, 1, 0), aM.Z = new jM.q(0, 0, 1),
      function(MM) {
        MM[MM.X = 0] = "X", MM[MM.Y = 1] = "Y", MM[MM.Z = 2] = "Z"
      }(SM || (SM = {}))
  },
  41086: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM,
      c: () => QM
    });
    var OM = iM(38040);
    const SM = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      jM = [() => 1, MM => MM.y, MM => MM.z, MM => MM.x, MM => MM.x * MM.y, MM => MM.y * MM.z, MM => 3 * MM.z * MM.z - 1, MM => MM.x * MM.z, MM => MM.x * MM.x - MM.y * MM.y],
      aM = (MM, rM) => SM[MM] * jM[MM](rM),
      PM = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class nM {
      constructor() {
        this.preScaled = !1, this.l00 = OM.q.Zero(), this.l1_1 = OM.q.Zero(), this.l10 = OM.q.Zero(), this.l11 = OM.q.Zero(), this.l2_2 = OM.q.Zero(), this.l2_1 = OM.q.Zero(), this.l20 = OM.q.Zero(), this.l21 = OM.q.Zero(), this.l22 = OM.q.Zero()
      }
      addLight(MM, rM, iM) {
        OM.l.sh[0].set(rM.r, rM.g, rM.b);
        const SM = OM.l.sh[0],
          jM = OM.l.sh[1];
        SM.scaleToRef(iM, jM), jM.scaleToRef(aM(0, MM), OM.l.sh[2]), this.l00.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(1, MM), OM.l.sh[2]), this.l1_1.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(2, MM), OM.l.sh[2]), this.l10.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(3, MM), OM.l.sh[2]), this.l11.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(4, MM), OM.l.sh[2]), this.l2_2.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(5, MM), OM.l.sh[2]), this.l2_1.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(6, MM), OM.l.sh[2]), this.l20.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(7, MM), OM.l.sh[2]), this.l21.addInPlace(OM.l.sh[2]), jM.scaleToRef(aM(8, MM), OM.l.sh[2]), this.l22.addInPlace(OM.l.sh[2])
      }
      scaleInPlace(MM) {
        this.l00.scaleInPlace(MM), this.l1_1.scaleInPlace(MM), this.l10.scaleInPlace(MM), this.l11.scaleInPlace(MM), this.l2_2.scaleInPlace(MM), this.l2_1.scaleInPlace(MM), this.l20.scaleInPlace(MM), this.l21.scaleInPlace(MM), this.l22.scaleInPlace(MM)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(PM[0]), this.l1_1.scaleInPlace(PM[1]), this.l10.scaleInPlace(PM[2]), this.l11.scaleInPlace(PM[3]), this.l2_2.scaleInPlace(PM[4]), this.l2_1.scaleInPlace(PM[5]), this.l20.scaleInPlace(PM[6]), this.l21.scaleInPlace(PM[7]), this.l22.scaleInPlace(PM[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(SM[0]), this.l1_1.scaleInPlace(SM[1]), this.l10.scaleInPlace(SM[2]), this.l11.scaleInPlace(SM[3]), this.l2_2.scaleInPlace(SM[4]), this.l2_1.scaleInPlace(SM[5]), this.l20.scaleInPlace(SM[6]), this.l21.scaleInPlace(SM[7]), this.l22.scaleInPlace(SM[8])
      }
      updateFromArray(MM) {
        return OM.q.FromArrayToRef(MM[0], 0, this.l00), OM.q.FromArrayToRef(MM[1], 0, this.l1_1), OM.q.FromArrayToRef(MM[2], 0, this.l10), OM.q.FromArrayToRef(MM[3], 0, this.l11), OM.q.FromArrayToRef(MM[4], 0, this.l2_2), OM.q.FromArrayToRef(MM[5], 0, this.l2_1), OM.q.FromArrayToRef(MM[6], 0, this.l20), OM.q.FromArrayToRef(MM[7], 0, this.l21), OM.q.FromArrayToRef(MM[8], 0, this.l22), this
      }
      updateFromFloatsArray(MM) {
        return OM.q.FromFloatsToRef(MM[0], MM[1], MM[2], this.l00), OM.q.FromFloatsToRef(MM[3], MM[4], MM[5], this.l1_1), OM.q.FromFloatsToRef(MM[6], MM[7], MM[8], this.l10), OM.q.FromFloatsToRef(MM[9], MM[10], MM[11], this.l11), OM.q.FromFloatsToRef(MM[12], MM[13], MM[14], this.l2_2), OM.q.FromFloatsToRef(MM[15], MM[16], MM[17], this.l2_1), OM.q.FromFloatsToRef(MM[18], MM[19], MM[20], this.l20), OM.q.FromFloatsToRef(MM[21], MM[22], MM[23], this.l21), OM.q.FromFloatsToRef(MM[24], MM[25], MM[26], this.l22), this
      }
      static FromArray(MM) {
        return (new nM).updateFromArray(MM)
      }
      static FromPolynomial(MM) {
        const rM = new nM;
        return rM.l00 = MM.xx.scale(.376127).add(MM.yy.scale(.376127)).add(MM.zz.scale(.376126)), rM.l1_1 = MM.y.scale(.977204), rM.l10 = MM.z.scale(.977204), rM.l11 = MM.x.scale(.977204), rM.l2_2 = MM.xy.scale(1.16538), rM.l2_1 = MM.yz.scale(1.16538), rM.l20 = MM.zz.scale(1.34567).subtract(MM.xx.scale(.672834)).subtract(MM.yy.scale(.672834)), rM.l21 = MM.zx.scale(1.16538), rM.l22 = MM.xx.scale(1.16538).subtract(MM.yy.scale(1.16538)), rM.l1_1.scaleInPlace(-1), rM.l11.scaleInPlace(-1), rM.l2_1.scaleInPlace(-1), rM.l21.scaleInPlace(-1), rM.scaleInPlace(Math.PI), rM
      }
    }
    class QM {
      constructor() {
        this.x = OM.q.Zero(), this.y = OM.q.Zero(), this.z = OM.q.Zero(), this.xx = OM.q.Zero(), this.yy = OM.q.Zero(), this.zz = OM.q.Zero(), this.xy = OM.q.Zero(), this.yz = OM.q.Zero(), this.zx = OM.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = nM.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(MM) {
        OM.l.sh[0].iMM(MM.r, MM.g, MM.b);
        const rM = OM.l.sh[0];
        this.xx.addInPlace(rM), this.yy.addInPlace(rM), this.zz.addInPlace(rM)
      }
      scaleInPlace(MM) {
        this.x.scaleInPlace(MM), this.y.scaleInPlace(MM), this.z.scaleInPlace(MM), this.xx.scaleInPlace(MM), this.yy.scaleInPlace(MM), this.zz.scaleInPlace(MM), this.yz.scaleInPlace(MM), this.zx.scaleInPlace(MM), this.xy.scaleInPlace(MM)
      }
      updateFromHarmonics(MM) {
        return this._harmonics = MM, this.x.jR(MM.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.jR(MM.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.jR(MM.l10), this.z.scaleInPlace(1.02333), this.xx.jR(MM.l00), OM.l.sh[0].jR(MM.l20).scaleInPlace(.247708), OM.l.sh[1].jR(MM.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).kOM(OM.l.sh[0]).addInPlace(OM.l.sh[1]), this.yy.jR(MM.l00), this.yy.scaleInPlace(.886277).kOM(OM.l.sh[0]).kOM(OM.l.sh[1]), this.zz.jR(MM.l00), OM.l.sh[0].jR(MM.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(OM.l.sh[0]), this.yz.jR(MM.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.jR(MM.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.jR(MM.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(MM) {
        return (new QM).updateFromHarmonics(MM)
      }
      static FromArray(MM) {
        const rM = new QM;
        return OM.q.FromArrayToRef(MM[0], 0, rM.x), OM.q.FromArrayToRef(MM[1], 0, rM.y), OM.q.FromArrayToRef(MM[2], 0, rM.z), OM.q.FromArrayToRef(MM[3], 0, rM.xx), OM.q.FromArrayToRef(MM[4], 0, rM.yy), OM.q.FromArrayToRef(MM[5], 0, rM.zz), OM.q.FromArrayToRef(MM[6], 0, rM.yz), OM.q.FromArrayToRef(MM[7], 0, rM.zx), OM.q.FromArrayToRef(MM[8], 0, rM.xy), rM
      }
    }
  },
  41529: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => WM,
      g: () => DM
    });
    var OM = iM(41099),
      SM = iM(38068),
      jM = iM(38040),
      aM = iM(41250),
      PM = iM(41508),
      nM = iM(41536),
      QM = iM(41242),
      zM = iM(41410),
      LM = iM(41240);
    class mM {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new jM.q(0, 0, 0), this._diffPositionForCollisions = new jM.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var HM, hM, JM, dM = iM(40990),
      yM = iM(41176),
      lM = iM(41416),
      EM = iM(38173),
      UM = iM(38044),
      GM = iM(41337),
      CM = iM(39711),
      eM = iM(41105),
      bM = iM(41005),
      wM = iM(38085);

    function tM(MM, rM) {
      return MM - Math.floor(MM / rM) * rM
    }

    function gM(MM, rM, iM) {
      MM instanceof Float32Array ? jM.d.FromArrayToRef(MM, rM, iM) : iM.iMM((0, yM.c)(MM[rM]), (0, yM.c)(MM[rM + 1]), (0, yM.c)(MM[rM + 2]), (0, yM.c)(MM[rM + 3]), (0, yM.c)(MM[rM + 4]), (0, yM.c)(MM[rM + 5]), (0, yM.c)(MM[rM + 6]), (0, yM.c)(MM[rM + 7]), (0, yM.c)(MM[rM + 8]), (0, yM.c)(MM[rM + 9]), (0, yM.c)(MM[rM + 10]), (0, yM.c)(MM[rM + 11]), (0, yM.c)(MM[rM + 12]), (0, yM.c)(MM[rM + 13]), (0, yM.c)(MM[rM + 14]), (0, yM.c)(MM[rM + 15]))
    }

    function uM(MM, rM, iM, OM, SM, PM, nM, QM, zM) {
      const LM = iM.texture,
        mM = LM?.getInternalTexture(),
        HM = mM?._bufferView;
      if (!(HM instanceof Float32Array) && !(HM instanceof Uint16Array)) return CM.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const hM = LM.getSize(),
        JM = function(MM, rM) {
          const iM = MM.y - MM.x + 1,
            OM = rM * MM.w / iM,
            SM = OM < 1 ? 0 : 1,
            jM = iM - SM;
          let aM = tM(OM - Math.floor(OM), 1) * jM;
          return aM = tM(aM + MM.z, jM), Math.floor(aM) + MM.x + SM
        }(OM, iM.time);
      if (!isFinite(JM) || JM < 0 || JM >= hM.height) return CM.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const dM = jM.l.sh[0],
        yM = jM.l.Matrix[0],
        lM = jM.l.Matrix[1],
        EM = JM * hM.width * 4,
        UM = rM === aM.j.NormalKind ? jM.q.TransformNormalFromFloatsToRef : jM.q.TransformCoordinatesFromFloatsToRef;
      for (let jM = 0, aM = 0; jM < MM.length; jM += 3, aM += 4) {
        let rM, iM;
        for (yM.reset(), rM = 0; rM < 4 && rM < zM; rM++) iM = PM[aM + rM], iM > 0 && (gM(HM, EM + 16 * Math.floor(SM[aM + rM]), lM), lM.scaleAndAddToRef(iM, yM));
        if (nM && QM)
          for (rM = 0; rM < 4 && rM + 4 < zM; rM++) iM = QM[aM + rM], iM > 0 && (gM(HM, EM + 16 * Math.floor(nM[aM + rM]), lM), lM.scaleAndAddToRef(iM, yM));
        UM(MM[jM], MM[jM + 1], MM[jM + 2], yM, dM), dM.toArray(MM, jM)
      }
      return !0
    }
    class RM {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = jM.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class pM {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new RM, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new mM, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let WM = (() => {
        var MM;
        let rM, mM = nM.e,
          HM = [];
        return MM = class extends mM {
          static get BILLBOARDMODE_NONE() {
            return nM.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return nM.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return nM.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return nM.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return nM.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return nM.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(MM) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = MM
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(MM) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = MM
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(MM) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = MM
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(MM) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = MM
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(MM) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = MM
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(MM) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== MM && (this._internalAbstractMeshDataInfo._morphTargetManager = MM, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(MM) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== MM && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = MM, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(MM) {
            return !!super._updateNonUniformScalingState(MM) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(MM) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = MM
          }
          set Rm(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(MM)
          }
          set onCollisionPositionChange(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(MM)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(MM) {
            if (this._internalAbstractMeshDataInfo._visibility === MM) return;
            const rM = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = MM, (1 === rM && 1 !== MM || 1 !== rM && 1 === MM) && this._markSubMeshesAsDirty((MM => {
              MM.markAsMiscDirty(), MM.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(MM) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = MM
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(MM) {
            this._internalAbstractMeshDataInfo._renderingGroupId = MM
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(MM) {
            if (!Number.isInteger(MM) || MM < 0 || MM > 255 || 0 !== MM && 0 === (63 & MM)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = MM
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(MM) {
            this._setMaterial(MM)
          }
          _setMaterial(MM) {
            this._internalAbstractMeshDataInfo._material !== MM && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = MM, MM && MM.meshMap && (MM.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.iG && (this.resetDrawCache(void 0, null == MM), this._unBindEffect()))
          }
          getMaterialForRenderPass(MM) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[MM]
          }
          setMaterialForRenderPass(MM, rM) {
            this.resetDrawCache(MM), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const iM = this._internalAbstractMeshDataInfo._materialForRenderPass[MM];
            iM?.meshMap?.[this.uniqueId] && (iM.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[MM] = rM, rM && rM.meshMap && (rM.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(MM) {
            this._internalAbstractMeshDataInfo._receiveShadows !== MM && (this._internalAbstractMeshDataInfo._receiveShadows = MM, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(MM) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== MM && (this._internalAbstractMeshDataInfo._hasVertexAlpha = MM, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(MM) {
            this._internalAbstractMeshDataInfo._useVertexColors !== MM && (this._internalAbstractMeshDataInfo._useVertexColors = MM, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(MM) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== MM && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = MM, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(MM) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== MM && (this._internalAbstractMeshDataInfo._numBoneInfluencers = MM, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(MM) {
            this._internalAbstractMeshDataInfo._applyFog !== MM && (this._internalAbstractMeshDataInfo._applyFog = MM, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(MM) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = MM
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(MM) {
            MM !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = MM, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(MM) ? -1 : MM
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = MM
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(MM) ? -1 : MM
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = MM
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(MM) {
            const rM = this._internalAbstractMeshDataInfo._skeleton;
            rM && rM.needInitialSkinMatrix && rM._unregisterMeshWithPoseMatrix(this), MM && MM.needInitialSkinMatrix && MM._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = MM, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(rM) {
            var iM;
            let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(rM, OM, !1), iM = this, this._internalAbstractMeshDataInfo = new pM, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = MM.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new SM.d, this.onCollisionPositionChangeObservable = new SM.d, this.onMaterialChangedObservable = new SM.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.AJ = MM.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = EM.d.Red(), this.outlineWidth = .02, this.overlayColor = EM.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Wh = !1, this.kh = !1, this.actionManager = null, this.ellipsoid = new jM.q(.5, 1, .5), this.ellipsoidOffset = new jM.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new EM.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Yk: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new SM.d, this._onCollisionPositionChange = function(MM, rM) {
                let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                rM.subtractToRef(iM._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, iM._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), iM._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > bM.d.CollisionsEpsilon && iM.position.addInPlace(iM._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), OM && iM.onCollideObservable.notifyObservers(OM), iM.onCollisionPositionChangeObservable.notifyObservers(iM.position)
              }, OM = this.Hk(), this.layerMask = OM.defaultRenderableLayerMask, OM.JOM(this), this._resyncLightSources(), this._uniformBuffer = new LM.b(this.Hk().ph(), void 0, void 0, rM, !this.Hk().ph().isWebGPU), this._buildUniformLayout(), OM.performancePriority) {
              case 2:
                this.kh = !0;
              case 1:
                this.Wh = !0, this.AJ = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(MM) {
            const rM = this._uniformBuffer;
            rM.p_("world", MM), rM.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), rM.update()
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
          toString(MM) {
            let rM = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            rM += ", # of submeshes: " + (this.iG ? this.iG.length : 0);
            const iM = this._internalAbstractMeshDataInfo._skeleton;
            return iM && (rM += ", skeleton: " + iM.name), MM && (rM += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], rM += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Yk ? "YES" : "NO")), rM
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== nM.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(MM) {
            let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (rM || this.actionManager.isRecursive)) {
              if (!MM) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(MM)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(MM, !1) : null
          }
          _releaseRenderPassId(MM) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.iG) {
              for (const MM of this.iG) MM._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const MM of this.Hk().lights) MM.isEnabled() && MM.canAffectMesh(this) && this._lightSources.push(MM);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(MM) {
            const rM = MM.isEnabled() && MM.canAffectMesh(this),
              iM = this._lightSources.indexOf(MM);
            let OM = !1;
            if (-1 === iM) {
              if (!rM) return;
              this._lightSources.push(MM)
            } else {
              if (rM) return;
              OM = !0, this._lightSources.splice(iM, 1)
            }
            this._markSubMeshesAsLightDirty(OM)
          }
          _unBindEffect() {
            for (const MM of this.iG) MM.setEffect(null)
          }
          _removeLightSource(MM, rM) {
            const iM = this._lightSources.indexOf(MM); - 1 !== iM && (this._lightSources.splice(iM, 1), this._markSubMeshesAsLightDirty(rM))
          }
          _markSubMeshesAsDirty(MM) {
            if (this.iG)
              for (const rM of this.iG)
                for (let iM = 0; iM < rM._drawWrappers.length; ++iM) {
                  const OM = rM._drawWrappers[iM];
                  OM && OM.defines && OM.defines.markAllAsDirty && MM(OM.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((rM => rM.markAsLightDirty(MM)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((MM => MM.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((MM => MM.markAsMiscDirty()))
          }
          FrM(MM) {
            return this._currentRenderId = Number.MAX_VALUE, super.FrM(MM), this._isDirty = !0, this
          }
          resetDrawCache(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.iG)
              for (const iM of this.iG) iM.resetDrawCache(MM, rM)
          }
          get isBlocked() {
            return !1
          }
          getLOD(MM) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          hOM() {
            return null
          }
          getVerticesData(MM) {
            return null
          }
          setVerticesData(MM, rM, iM, OM) {
            return this
          }
          updateVerticesData(MM, rM, iM, OM) {
            return this
          }
          setIndices(MM, rM) {
            return this
          }
          isVerticesDataPresent(MM) {
            return !1
          }
          aY() {
            return this._masterMesh ? this._masterMesh.aY() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.aY()
          }
          setBoundingInfo(MM) {
            return this._boundingInfo = MM, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(MM, rM, iM) {
            return this._boundingInfo = new zM.d(MM, rM, iM), this._boundingInfo
          }
          normalizeToUnitCube() {
            let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(MM, rM, iM)
          }
          get useBones() {
            return this.skeleton && this.Hk().skeletonsEnabled && this.isVerticesDataPresent(aM.j.MatricesIndicesKind) && this.isVerticesDataPresent(aM.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(MM) {}
          _activate(MM, rM) {
            return this._renderId = MM, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === nM.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Wk() {
            return !1
          }
          get nSM() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(MM, rM, iM) {
            return this.position.addInPlace(this.calcMovePOV(MM, rM, iM)), this
          }
          calcMovePOV(MM, rM, iM) {
            const OM = new jM.d;
            (this.rotationQuaternion ? this.rotationQuaternion : jM.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(OM);
            const SM = jM.q.Zero(),
              aM = this.definedFacingForward ? -1 : 1;
            return jM.q.TransformCoordinatesFromFloatsToRef(MM * aM, rM, iM * aM, OM, SM), SM
          }
          rotatePOV(MM, rM, iM) {
            return this.rotation.addInPlace(this.calcRotatePOV(MM, rM, iM)), this
          }
          calcRotatePOV(MM, rM, iM) {
            const OM = this.definedFacingForward ? 1 : -1;
            return new jM.q(MM * OM, rM, iM * OM)
          }
          _refreshBoundingInfo(MM, rM) {
            if (MM) {
              const iM = (0, lM.d)(MM, 0, this.getTotalVertices(), rM);
              this._boundingInfo ? this._boundingInfo.reConstruct(iM.minimum, iM.maximum) : this._boundingInfo = new zM.d(iM.minimum, iM.maximum)
            }
            if (this.iG)
              for (let iM = 0; iM < this.iG.length; iM++) this.iG[iM].refreshBoundingInfo(MM);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(MM) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(MM.minimum, MM.maximum) : this._boundingInfo = new zM.d(MM.minimum, MM.maximum), this.iG)
              for (let rM = 0; rM < this.iG.length; rM++) this.iG[rM].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(MM, rM, iM, OM, SM, PM, nM) {
            ! function(MM, rM, iM, OM, SM, PM, nM) {
              const QM = jM.l.sh[0],
                zM = jM.l.Matrix[0],
                LM = jM.l.Matrix[1],
                mM = rM === aM.j.NormalKind ? jM.q.TransformNormalFromFloatsToRef : jM.q.TransformCoordinatesFromFloatsToRef;
              for (let aM = 0, HM = 0; aM < MM.length; aM += 3, HM += 4) {
                let rM, hM;
                for (zM.reset(), rM = 0; rM < 4; rM++) hM = SM[HM + rM], hM > 0 && (jM.d.FromFloat32ArrayToRefScaled(iM, Math.floor(16 * OM[HM + rM]), hM, LM), zM.addToSelf(LM));
                if (PM && nM)
                  for (rM = 0; rM < 4; rM++) hM = nM[HM + rM], hM > 0 && (jM.d.FromFloat32ArrayToRefScaled(iM, Math.floor(16 * PM[HM + rM]), hM, LM), zM.addToSelf(LM));
                mM(MM[aM], MM[aM + 1], MM[aM + 2], zM, QM), QM.toArray(MM, aM)
              }
            }(MM, rM, iM, OM, SM, PM, nM)
          }
          _getData(rM, iM) {
            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aM.j.PositionKind;
            const SM = rM.cache,
              PM = MM => {
                if (SM) {
                  const rM = SM._vertexData || (SM._vertexData = {});
                  return rM[MM] || this.copyVerticesData(MM, rM), rM[MM]
                }
                return this.getVerticesData(MM)
              };
            if (iM || (iM = PM(OM)), !iM) return null;
            SM ? (SM._outputData ? SM._outputData.set(iM) : SM._outputData = new Float32Array(iM), iM = SM._outputData) : (rM.applyMorph && this.morphTargetManager || rM.applySkeleton && this.skeleton || rM.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (iM = iM.slice()), rM.applyMorph && this.morphTargetManager && function(MM, rM, iM) {
              let OM;
              switch (rM) {
                case aM.j.PositionKind:
                  OM = MM => MM.getPositions();
                  break;
                case aM.j.NormalKind:
                  OM = MM => MM.getNormals();
                  break;
                case aM.j.TangentKind:
                  OM = MM => MM.getTangents();
                  break;
                case aM.j.UVKind:
                  OM = MM => MM.getUVs();
                  break;
                case aM.j.UV2Kind:
                  OM = MM => MM.getUV2s();
                  break;
                case aM.j.ColorKind:
                  OM = MM => MM.getColors();
                  break;
                default:
                  return
              }
              for (let SM = 0; SM < MM.length; SM++) {
                let rM = MM[SM];
                for (let jM = 0; jM < iM.numTargets; jM++) {
                  const aM = iM.getTarget(jM),
                    PM = aM.influence;
                  if (0 !== PM) {
                    const iM = OM(aM);
                    iM && (rM += (iM[SM] - MM[SM]) * PM)
                  }
                }
                MM[SM] = rM
              }
            }(iM, OM, this.morphTargetManager);
            const nM = this.bakedVertexAnimationManager;
            let QM = !1;
            if (rM.applyBakedVertexAnimation && nM?.isEnabled) {
              const MM = PM(aM.j.MatricesIndicesKind),
                SM = PM(aM.j.MatricesWeightsKind);
              if (SM && MM) {
                const jM = this.numBoneInfluencers > 4,
                  zM = jM ? PM(aM.j.MatricesIndicesExtraKind) : null,
                  LM = jM ? PM(aM.j.MatricesWeightsExtraKind) : null;
                QM = uM(iM, OM, nM, rM.bakedVertexAnimationSettings ?? nM.animationParameters, MM, SM, zM, LM, this.numBoneInfluencers)
              }
            }
            if (!QM && rM.applySkeleton && this.skeleton) {
              const rM = PM(aM.j.MatricesIndicesKind),
                SM = PM(aM.j.MatricesWeightsKind);
              if (SM && rM) {
                const jM = this.numBoneInfluencers > 4,
                  nM = jM ? PM(aM.j.MatricesIndicesExtraKind) : null,
                  QM = jM ? PM(aM.j.MatricesWeightsExtraKind) : null,
                  zM = this.skeleton.getTransformMatrices(this);
                MM._ApplySkeleton(iM, OM, zM, rM, SM, nM, QM)
              }
            }
            if (!1 !== rM.updatePositionsArray && OM === aM.j.PositionKind) {
              const MM = this._internalAbstractMeshDataInfo._positions || [],
                rM = MM.length;
              if (MM.length = iM.length / 3, rM < MM.length)
                for (let iM = rM; iM < MM.length; iM++) MM[iM] = new jM.q;
              for (let OM = 0, SM = 0; OM < MM.length; OM++, SM += 3) MM[OM].iMM(iM[SM], iM[SM + 1], iM[SM + 2]);
              this._internalAbstractMeshDataInfo._positions = MM
            }
            return iM
          }
          getNormalsData() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: MM,
              applyMorph: rM,
              updatePositionsArray: !1
            }, null, aM.j.NormalKind)
          }
          jK() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: MM,
              applyMorph: rM,
              updatePositionsArray: !1
            }, iM, aM.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new zM.d(jM.q.Zero(), jM.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(MM) {
            if (!this.iG) return this;
            const rM = this.iG.length;
            for (let iM = 0; iM < rM; iM++) {
              const OM = this.iG[iM];
              (rM > 1 || !OM.IsGlobal) && OM.updateBoundingInfo(MM)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.kh || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(MM) {
            return this.aY().isInFrustum(MM, this.cullingStrategy)
          }
          isCompletelyInFrustum(MM) {
            return this.aY().isCompletelyInFrustum(MM)
          }
          iSM(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = arguments.length > 2 ? arguments[2] : void 0;
            const OM = this.aY(),
              SM = MM.aY();
            if (OM.intersects(SM, rM)) return !0;
            if (iM)
              for (const jM of this.getChildMeshes())
                if (jM.iSM(MM, rM, !0)) return !0;
            return !1
          }
          intersectsPoint(MM) {
            return this.aY().intersectsPoint(MM)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(MM) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = MM
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(MM) {
            let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const iM = this.Hk().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = iM.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, iM.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, MM, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, rM), this
          }
          _collideForSubMesh(MM, rM, iM) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!MM._lastColliderWorldVertices || !MM._lastColliderTransformMatrix.equals(rM)) {
              MM._lastColliderTransformMatrix = rM.clone(), MM._lastColliderWorldVertices = [], MM._trianglePlanes = [];
              const iM = MM.verticesStart,
                OM = MM.verticesStart + MM.verticesCount;
              for (let SM = iM; SM < OM; SM++) MM._lastColliderWorldVertices.push(jM.q.TransformCoordinates(this._positions[SM], rM))
            }
            return iM._collide(MM._trianglePlanes, MM._lastColliderWorldVertices, this.hOM(), MM.indexStart, MM.indexStart + MM.indexCount, MM.verticesStart, !!MM.Zh(), this, this._shouldConvertRHS(), 7 === MM.Zh()?.fillMode), this
          }
          _processCollisionsForSubMeshes(MM, rM) {
            const iM = this._scene.getCollidingSubMeshCandidates(this, MM),
              OM = iM.length;
            for (let SM = 0; SM < OM; SM++) {
              const jM = iM.data[SM];
              OM > 1 && !jM._checkCollision(MM) || this._collideForSubMesh(jM, rM, MM)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(MM) {
            if (!this.aY()._checkCollision(MM)) return this;
            const rM = jM.l.Matrix[0],
              iM = jM.l.Matrix[1];
            return jM.d.ScalingToRef(1 / MM._radius.x, 1 / MM._radius.y, 1 / MM._radius.z, rM), this.worldMatrixFromCache.multiplyToRef(rM, iM), this._processCollisionsForSubMeshes(MM, iM), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(MM, rM, iM) {
            let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SM = arguments.length > 4 ? arguments[4] : void 0,
              aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const PM = new QM.c,
              nM = this.getClassName(),
              zM = "InstancedLinesMesh" === nM || "LinesMesh" === nM || "GreasedLineMesh" === nM ? this.intersectionThreshold : 0,
              LM = this.aY();
            if (!this.iG) return PM;
            if (!aM && (!MM.intersectsSphere(LM.YOM, zM) || !MM.intersectsBox(LM.boundingBox, zM))) return PM;
            if (OM) return PM.hit = !aM, PM.pickedMesh = aM ? null : this, PM.distance = aM ? 0 : jM.q.Distance(MM.origin, LM.YOM.center), PM.subMeshId = 0, PM;
            if (!this._generatePointsArray()) return PM;
            let mM = null;
            const HM = this._scene.getIntersectingSubMeshCandidates(this, MM),
              hM = HM.length;
            let JM = !1;
            for (let jM = 0; jM < hM; jM++) {
              const MM = HM.data[jM].Zh();
              if (MM && (7 == MM.fillMode || 0 == MM.fillMode || 1 == MM.fillMode || 2 == MM.fillMode || 4 == MM.fillMode)) {
                JM = !0;
                break
              }
            }
            if (!JM) return PM.hit = !0, PM.pickedMesh = this, PM.distance = jM.q.Distance(MM.origin, LM.YOM.center), PM.subMeshId = -1, PM;
            for (let jM = 0; jM < hM; jM++) {
              const OM = HM.data[jM];
              if (hM > 1 && !aM && !OM.canIntersects(MM)) continue;
              const SM = OM.intersects(MM, this._positions, this.hOM(), rM, iM);
              if (SM && (rM || !mM || SM.distance < mM.distance) && (mM = SM, mM.subMeshId = OM._id, mM._internalSubMeshId = jM, rM)) break
            }
            if (mM) {
              const rM = SM ?? this.getWorldMatrix(),
                iM = jM.l.sh[0],
                OM = jM.l.sh[1];
              jM.q.TransformCoordinatesToRef(MM.origin, rM, iM), MM.direction.scaleToRef(mM.distance, OM);
              const aM = jM.q.TransformNormal(OM, rM).addInPlace(iM);
              return PM.hit = !0, PM.distance = jM.q.Distance(iM, aM), PM.pickedPoint = aM, PM.pickedMesh = this, PM.bu = mM.bu || 0, PM.bv = mM.bv || 0, PM.subMeshFaceId = mM.faceId, PM.faceId = mM.faceId + HM.data[mM._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), PM.subMeshId = mM.subMeshId, PM
            }
            return PM
          }
          clone(MM, rM, iM) {
            return null
          }
          releaseSubMeshes() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.iG)
              for (; this.iG.length;) this.iG[0].dispose(MM);
            else this.iG = [];
            return this
          }
          dispose(MM) {
            let rM, iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const OM = this.Hk();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), OM.freeActiveMeshes(), OM.freeRenderingGroups(), OM.renderingManager.maintainStateBetweenFrames && OM.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((MM => MM !== this && MM.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), rM = 0; rM < this._intersectionsInProgress.length; rM++) {
              const MM = this._intersectionsInProgress[rM],
                iM = MM._intersectionsInProgress.indexOf(this);
              MM._intersectionsInProgress.splice(iM, 1)
            }
            this._intersectionsInProgress.length = 0;
            const SM = OM.lights;
            for (const aM of SM) {
              let MM = aM.includedOnlyMeshes.indexOf(this); - 1 !== MM && aM.includedOnlyMeshes.splice(MM, 1), MM = aM.excludedMeshes.indexOf(this), -1 !== MM && aM.excludedMeshes.splice(MM, 1);
              const rM = aM.getShadowGenerators();
              if (rM) {
                const iM = rM.values();
                for (let rM = iM.next(); !0 !== rM.done; rM = iM.next()) {
                  const iM = rM.value.getShadowMap();
                  iM && iM.renderList && (MM = iM.renderList.indexOf(this), -1 !== MM && iM.renderList.splice(MM, 1))
                }
              }
            }
            this.releaseSubMeshes(OM._isDisposing);
            const jM = OM.ph();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, jM.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), jM.wipeCaches(), OM.Fk(this), this._parentContainer) {
              const MM = this._parentContainer.meshes.indexOf(this);
              MM > -1 && this._parentContainer.meshes.splice(MM, 1), this._parentContainer = null
            }
            if (iM && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !MM)
              for (rM = 0; rM < OM.aG.length; rM++) OM.aG[rM].emitter === this && (OM.aG[rM].dispose(), rM--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(MM, iM)
          }
          _initFacetData() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            MM.facetNormals || (MM.facetNormals = []), MM.facetPositions || (MM.facetPositions = []), MM.facetPartitioning || (MM.facetPartitioning = new Array), MM.facetNb = this.hOM().length / 3 | 0, MM.partitioningSubdivisions = MM.partitioningSubdivisions ? MM.partitioningSubdivisions : 10, MM.partitioningBBoxRatio = MM.partitioningBBoxRatio ? MM.partitioningBBoxRatio : 1.01;
            for (let rM = 0; rM < MM.facetNb; rM++) MM.facetNormals[rM] = jM.q.Zero(), MM.facetPositions[rM] = jM.q.Zero();
            return MM.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            MM.facetDataEnabled || this._initFacetData();
            const rM = this.getVerticesData(aM.j.PositionKind),
              iM = this.hOM(),
              OM = this.getVerticesData(aM.j.NormalKind)?.slice(),
              SM = this.aY();
            if (MM.facetDepthSort && !MM.facetDepthSortEnabled) {
              if (MM.facetDepthSortEnabled = !0, iM instanceof Uint16Array) MM.depthSortedIndices = new Uint16Array(iM);
              else if (iM instanceof Uint32Array) MM.depthSortedIndices = new Uint32Array(iM);
              else {
                let rM = !1;
                for (let MM = 0; MM < iM.length; MM++)
                  if (iM[MM] > 65535) {
                    rM = !0;
                    break
                  } MM.depthSortedIndices = rM ? new Uint32Array(iM) : new Uint16Array(iM)
              }
              if (MM.facetDepthSortFunction = function(MM, rM) {
                  return rM.sqDistance - MM.sqDistance
                }, !MM.facetDepthSortFrom) {
                const rM = this.Hk().activeCamera;
                MM.facetDepthSortFrom = rM ? rM.position : jM.q.Zero()
              }
              MM.depthSortedFacets = [];
              for (let rM = 0; rM < MM.facetNb; rM++) {
                const iM = {
                  ind: 3 * rM,
                  sqDistance: 0
                };
                MM.depthSortedFacets.push(iM)
              }
              MM.invertedMatrix = jM.d.Identity(), MM.facetDepthSortOrigin = jM.q.Zero()
            }
            MM.bbSize.x = SM.maximum.x - SM.minimum.x > UM.d ? SM.maximum.x - SM.minimum.x : UM.d, MM.bbSize.y = SM.maximum.y - SM.minimum.y > UM.d ? SM.maximum.y - SM.minimum.y : UM.d, MM.bbSize.z = SM.maximum.z - SM.minimum.z > UM.d ? SM.maximum.z - SM.minimum.z : UM.d;
            let nM = MM.bbSize.x > MM.bbSize.y ? MM.bbSize.x : MM.bbSize.y;
            if (nM = nM > MM.bbSize.z ? nM : MM.bbSize.z, MM.subDiv.max = MM.partitioningSubdivisions, MM.subDiv.X = Math.floor(MM.subDiv.max * MM.bbSize.x / nM), MM.subDiv.Y = Math.floor(MM.subDiv.max * MM.bbSize.y / nM), MM.subDiv.Z = Math.floor(MM.subDiv.max * MM.bbSize.z / nM), MM.subDiv.X = MM.subDiv.X < 1 ? 1 : MM.subDiv.X, MM.subDiv.Y = MM.subDiv.Y < 1 ? 1 : MM.subDiv.Y, MM.subDiv.Z = MM.subDiv.Z < 1 ? 1 : MM.subDiv.Z, MM.facetParameters.facetNormals = this.getFacetLocalNormals(), MM.facetParameters.facetPositions = this.getFacetLocalPositions(), MM.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), MM.facetParameters.bInfo = SM, MM.facetParameters.bbSize = MM.bbSize, MM.facetParameters.subDiv = MM.subDiv, MM.facetParameters.ratio = this.partitioningBBoxRatio, MM.facetParameters.depthSort = MM.facetDepthSort, MM.facetDepthSort && MM.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(MM.invertedMatrix), jM.q.TransformCoordinatesToRef(MM.facetDepthSortFrom, MM.invertedMatrix, MM.facetDepthSortOrigin), MM.facetParameters.distanceTo = MM.facetDepthSortOrigin), MM.facetParameters.depthSortedFacets = MM.depthSortedFacets, OM && PM.d.ComputeNormals(rM, iM, OM, MM.facetParameters), MM.facetDepthSort && MM.facetDepthSortEnabled) {
              MM.depthSortedFacets.sort(MM.facetDepthSortFunction);
              const rM = MM.depthSortedIndices.length / 3 | 0;
              for (let OM = 0; OM < rM; OM++) {
                const rM = MM.depthSortedFacets[OM].ind;
                MM.depthSortedIndices[3 * OM] = iM[rM], MM.depthSortedIndices[3 * OM + 1] = iM[rM + 1], MM.depthSortedIndices[3 * OM + 2] = iM[rM + 2]
              }
              this.updateIndices(MM.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            return MM.facetNormals || this.updateFacetData(), MM.facetNormals
          }
          getFacetLocalPositions() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            return MM.facetPositions || this.updateFacetData(), MM.facetPositions
          }
          getFacetLocalPartitioning() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            return MM.facetPartitioning || this.updateFacetData(), MM.facetPartitioning
          }
          getFacetPosition(MM) {
            const rM = jM.q.Zero();
            return this.getFacetPositionToRef(MM, rM), rM
          }
          getFacetPositionToRef(MM, rM) {
            const iM = this.getFacetLocalPositions()[MM],
              OM = this.getWorldMatrix();
            return jM.q.TransformCoordinatesToRef(iM, OM, rM), this
          }
          getFacetNormal(MM) {
            const rM = jM.q.Zero();
            return this.getFacetNormalToRef(MM, rM), rM
          }
          getFacetNormalToRef(MM, rM) {
            const iM = this.getFacetLocalNormals()[MM];
            return jM.q.TransformNormalToRef(iM, this.getWorldMatrix(), rM), this
          }
          getFacetsAtLocalCoordinates(MM, rM, iM) {
            const OM = this.aY(),
              SM = this._internalAbstractMeshDataInfo._facetData,
              jM = Math.floor((MM - OM.minimum.x * SM.partitioningBBoxRatio) * SM.subDiv.X * SM.partitioningBBoxRatio / SM.bbSize.x),
              aM = Math.floor((rM - OM.minimum.y * SM.partitioningBBoxRatio) * SM.subDiv.Y * SM.partitioningBBoxRatio / SM.bbSize.y),
              PM = Math.floor((iM - OM.minimum.z * SM.partitioningBBoxRatio) * SM.subDiv.Z * SM.partitioningBBoxRatio / SM.bbSize.z);
            return jM < 0 || jM > SM.subDiv.max || aM < 0 || aM > SM.subDiv.max || PM < 0 || PM > SM.subDiv.max ? null : SM.facetPartitioning[jM + SM.subDiv.max * aM + SM.subDiv.max * SM.subDiv.max * PM]
          }
          getClosestFacetAtCoordinates(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const PM = this.getWorldMatrix(),
              nM = jM.l.Matrix[5];
            PM.invertToRef(nM);
            const QM = jM.l.sh[8];
            jM.q.TransformCoordinatesFromFloatsToRef(MM, rM, iM, nM, QM);
            const zM = this.getClosestFacetAtLocalCoordinates(QM.x, QM.y, QM.z, OM, SM, aM);
            return OM && jM.q.TransformCoordinatesFromFloatsToRef(OM.x, OM.y, OM.z, PM, OM), zM
          }
          getClosestFacetAtLocalCoordinates(MM, rM, iM, OM) {
            let SM, jM, aM, PM, nM, QM, zM, LM, mM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              HM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              hM = null;
            const JM = this.getFacetLocalPositions(),
              dM = this.getFacetLocalNormals(),
              yM = this.getFacetsAtLocalCoordinates(MM, rM, iM);
            if (!yM) return null;
            let lM, EM, UM, GM, CM = Number.MAX_VALUE;
            for (let eM = 0; eM < yM.length; eM++) EM = yM[eM], UM = dM[EM], GM = JM[EM], PM = (MM - GM.x) * UM.x + (rM - GM.y) * UM.y + (iM - GM.z) * UM.z, (!mM || mM && HM && PM >= 0 || mM && !HM && PM <= 0) && (PM = UM.x * GM.x + UM.y * GM.y + UM.z * GM.z, nM = -(UM.x * MM + UM.y * rM + UM.z * iM - PM) / (UM.x * UM.x + UM.y * UM.y + UM.z * UM.z), QM = MM + UM.x * nM, zM = rM + UM.y * nM, LM = iM + UM.z * nM, SM = QM - MM, jM = zM - rM, aM = LM - iM, lM = SM * SM + jM * jM + aM * aM, lM < CM && (CM = lM, hM = EM, OM && (OM.x = QM, OM.y = zM, OM.z = LM)));
            return hM
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const MM = this._internalAbstractMeshDataInfo._facetData;
            return MM.facetDataEnabled && (MM.facetDataEnabled = !1, MM.facetPositions = [], MM.facetNormals = [], MM.facetPartitioning = new Array, MM.facetParameters = {}, MM.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(MM, rM) {
            return this
          }
          createNormals(MM) {
            const rM = this.getVerticesData(aM.j.PositionKind),
              iM = this.hOM();
            let OM;
            return OM = this.isVerticesDataPresent(aM.j.NormalKind) ? this.getVerticesData(aM.j.NormalKind) : [], PM.d.ComputeNormals(rM, iM, OM, {
              useRightHandedSystem: this.Hk().useRightHandedSystem
            }), this.setVerticesData(aM.j.NormalKind, OM, MM), this
          }
          async optimizeIndicesAsync() {
            const MM = this.hOM();
            if (!MM) return this;
            const {
              OptimizeIndices: rM
            } = await iM.e(660).then((() => iM(45226)));
            return rM(MM), this.setIndices(MM, this.getTotalVertices()), this
          }
          alignWithNormal(MM, rM) {
            rM || (rM = GM.d.Y);
            const iM = jM.l.sh[0],
              OM = jM.l.sh[1];
            return jM.q.CrossToRef(rM, MM, OM), jM.q.CrossToRef(MM, OM, iM), this.rotationQuaternion ? jM.h.RotationQuaternionFromAxisToRef(iM, MM, OM, this.rotationQuaternion) : jM.q.RotationFromAxisToRef(iM, MM, OM, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, dM.n)("EdgesRenderer")
          }
          enableEdgesRendering(MM, rM, iM) {
            throw (0, dM.n)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.aG.filter((MM => MM.emitter === this))
          }
        }, (() => {
          const iM = "function" === typeof Symbol && Symbol.metadata ? Object.create(mM[Symbol.metadata] ?? null) : void 0;
          rM = [eM.k.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, OM.i)(MM, null, rM, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: MM => "_ApplySkeleton" in MM,
              get: MM => MM._ApplySkeleton
            },
            metadata: iM
          }, null, HM), iM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iM
          })
        })(), MM.OCCLUSION_TYPE_NONE = ((0, OM.m)(MM, HM), 0), MM.OCCLUSION_TYPE_OPTIMISTIC = 1, MM.OCCLUSION_TYPE_STRICT = 2, MM.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, MM.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, MM.CULLINGSTRATEGY_STANDARD = 0, MM.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, MM.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, MM.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, MM.DefaultIsPickable = !0, MM
      })(),
      sM = !1;

    function DM() {
      sM || (sM = !0, (0, wM.e)("BABYLON.AbstractMesh", WM))
    }(HM = WM.prototype).createOrUpdateSubmeshesOctree ?? (HM.createOrUpdateSubmeshesOctree = (0, dM.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (hM = WM.prototype).getPhysicsImpostor ?? (hM.getPhysicsImpostor = (0, dM.j)("AbstractMesh", "getPhysicsImpostor")), (JM = WM.prototype).setPhysicsLinkWith ?? (JM.setPhysicsLinkWith = (0, dM.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(WM.prototype, "occlusionRetryCount") || Object.defineProperty(WM.prototype, "occlusionRetryCount", (0, dM.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(WM.prototype, "occlusionType") || Object.defineProperty(WM.prototype, "occlusionType", (0, dM.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(WM.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(WM.prototype, "occlusionQueryAlgorithmType", (0, dM.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(WM.prototype, "isOccluded") || Object.defineProperty(WM.prototype, "isOccluded", (0, dM.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(WM.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(WM.prototype, "isOcclusionQueryInProgress", (0, dM.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(WM.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(WM.prototype, "forceRenderingWhenOccluded", (0, dM.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(WM.prototype, "occlusionForRenderPassId") || Object.defineProperty(WM.prototype, "occlusionForRenderPassId", (0, dM.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(WM.prototype, "decalMap") || Object.defineProperty(WM.prototype, "decalMap", (0, dM.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(WM.prototype, "xZ") || Object.defineProperty(WM.prototype, "xZ", (0, dM.g)("AbstractMesh", "xZ")), Object.getOwnPropertyDescriptor(WM.prototype, "physicsImpostor") || Object.defineProperty(WM.prototype, "physicsImpostor", (0, dM.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(WM.prototype, "showBoundingBox") || Object.defineProperty(WM.prototype, "showBoundingBox", (0, dM.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(WM.prototype, "edgesRenderer") || Object.defineProperty(WM.prototype, "edgesRenderer", (0, dM.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(WM.prototype, "renderOutline") || Object.defineProperty(WM.prototype, "renderOutline", (0, dM.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(WM.prototype, "renderOverlay") || Object.defineProperty(WM.prototype, "renderOverlay", (0, dM.g)("AbstractMesh", "renderOverlay"))
  },
  41512: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => yM
    });
    var OM = iM(38040),
      SM = iM(38173),
      jM = iM(41508),
      aM = iM(41250),
      PM = iM(41400),
      nM = iM(41515),
      QM = iM(41410),
      zM = iM(41205),
      LM = iM(39711),
      mM = iM(41124),
      HM = iM(41416),
      hM = iM(38064),
      JM = iM(41520),
      dM = iM(41167);
    class yM {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(MM) {
        this._boundingBias ? this._boundingBias.jR(MM) : this._boundingBias = MM.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(MM) {
        const rM = new yM(yM.RandomId(), MM.Hk());
        return rM.applyToMesh(MM), rM
      }
      get meshes() {
        return this._meshes
      }
      constructor(MM, rM, iM) {
        let SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new OM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new OM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = rM || hM.c.LastCreatedScene, this._scene && (this.id = MM, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.ph(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = SM, null !== aM && (this._totalVertices = aM), iM ? this.setAllVerticesData(iM, SM) : null === aM && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), jM && (this.applyToMesh(jM), jM.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Hk() {
        return this._scene
      }
      ph() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let MM = 0; MM < this._meshes.length; MM++)
          if (!this._meshes[MM].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const MM = new Set;
        for (const rM in this._vertexBuffers) MM.add(this._vertexBuffers[rM].getWrapperBuffer());
        MM.forEach((MM => {
          MM._rebuild()
        }))
      }
      setAllVerticesData(MM, rM) {
        MM.applyToGeometry(this, rM), this._notifyUpdate()
      }
      setVerticesData(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0;
        iM && Array.isArray(rM) && (rM = new Float32Array(rM));
        const SM = new aM.j(this._engine, rM, MM, {
          updatable: iM,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: OM,
          label: "Geometry_" + this.id + "_" + MM
        });
        this.setVerticesBuffer(SM)
      }
      removeVerticesData(MM) {
        this._vertexBuffers[MM] && (this._vertexBuffers[MM].dispose(), delete this._vertexBuffers[MM]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const SM = MM.getKind();
        this._vertexBuffers[SM] && iM && this._vertexBuffers[SM].dispose(), MM._buffer && MM._ownsBuffer && MM._buffer._increaseReferences(), this._vertexBuffers[SM] = MM;
        const jM = this._meshes,
          PM = jM.length;
        if (SM === aM.j.PositionKind) {
          this._totalVertices = rM ?? MM._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : MM.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const iM = this._extend && this._extend.minimum || new OM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            SM = this._extend && this._extend.maximum || new OM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let MM = 0; MM < PM; MM++) {
            const rM = jM[MM];
            rM.buildBoundingInfo(iM, SM), rM._createGlobalSubMesh(rM.isUnIndexed), rM.computeWorldMatrix(!0), rM.synchronizeInstances()
          }
        }
        this._notifyUpdate(SM)
      }
      updateVerticesDataDirectly(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SM = this.getVertexBuffer(MM);
        SM && (SM.updateDirectly(rM, iM, OM), this._notifyUpdate(MM))
      }
      updateVerticesData(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this.getVertexBuffer(MM);
        OM && (OM.update(rM), MM === aM.j.PositionKind && this._updateBoundingInfo(iM, rM), this._notifyUpdate(MM))
      }
      _updateBoundingInfo(MM, rM) {
        if (MM && this._updateExtend(rM), this._resetPointsArrayCache(), MM) {
          const MM = this._meshes;
          for (const rM of MM) {
            rM.hasBoundingInfo ? rM.aY().reConstruct(this._extend.minimum, this._extend.maximum) : rM.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const MM = rM.iG;
            for (const rM of MM) rM.refreshBoundingInfo()
          }
        }
      }
      _bind(MM, rM, iM, OM) {
        if (!MM) return;
        void 0 === rM && (rM = this._indexBuffer);
        const SM = this.getVertexBuffers();
        if (!SM) return;
        if (rM != this._indexBuffer || !this._vertexArrayObjects && !OM) return void this._engine.bindBuffers(SM, rM, MM, iM);
        const jM = OM || this._vertexArrayObjects,
          aM = this._engine;
        jM[MM.key] || (jM[MM.key] = aM.recordVertexArrayObject(SM, rM, MM, iM)), aM.bindVertexArrayObject(jM[MM.key], rM)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(MM, rM, iM) {
        const OM = this.getVertexBuffer(MM);
        return OM ? OM.getFloatData(this._totalVertices, iM || rM && 1 !== this._meshes.length) : null
      }
      copyVerticesData(MM, rM) {
        const iM = this.getVertexBuffer(MM);
        if (!iM) return;
        rM[MM] || (rM[MM] = new Float32Array(this._totalVertices * iM.getSize()));
        const OM = iM.getData();
        OM && (0, dM.f)(OM, iM.getSize(), iM.type, iM.byteOffset, iM.byteStride, iM.normalized, this._totalVertices, rM[MM])
      }
      isVertexBufferUpdatable(MM) {
        const rM = this._vertexBuffers[MM];
        return !!rM && rM.isUpdatable()
      }
      getVertexBuffer(MM) {
        return this.isReady() ? this._vertexBuffers[MM] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(MM) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[MM] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(MM)
      }
      getVerticesDataKinds() {
        const MM = [];
        let rM;
        if (!this._vertexBuffers && this._delayInfo)
          for (rM in this._delayInfo) MM.push(rM);
        else
          for (rM in this._vertexBuffers) MM.push(rM);
        return MM
      }
      updateIndices(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const OM = MM.length !== this._indices.length;
            if (iM || (this._indices = MM.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, MM, rM), OM)
              for (const MM of this._meshes) MM._createGlobalSubMesh(!0)
          } else this.setIndices(MM, null, !0)
      }
      setIndexBuffer(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = MM, this._totalVertices = rM, this._totalIndices = iM, MM.is32Bits = null === OM ? rM > 65535 : OM;
        for (const SM of this._meshes) SM._createGlobalSubMesh(!0), SM.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = MM, this._indexBufferIsUpdatable = iM, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, iM, "Geometry_" + this.id + "_IndexBuffer")), void 0 != rM && (this._totalVertices = rM);
        for (const SM of this._meshes) SM._createGlobalSubMesh(!OM), SM.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      hOM(MM, rM) {
        if (!this.isReady()) return null;
        const iM = this._indices;
        return rM || MM && 1 !== this._meshes.length ? iM.slice() : iM
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        MM && this._vertexArrayObjects && this._vertexArrayObjects[MM.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[MM.key]), delete this._vertexArrayObjects[MM.key])
      }
      releaseForMesh(MM, rM) {
        const iM = this._meshes,
          OM = iM.indexOf(MM); - 1 !== OM && (iM.splice(OM, 1), this._vertexArrayObjects && MM._invalidateInstanceVertexArrayObject(), MM._geometry = null, 0 === iM.length && rM && this.dispose())
      }
      applyToMesh(MM) {
        if (MM._geometry === this) return;
        const rM = MM._geometry;
        rM && rM.releaseForMesh(MM), this._vertexArrayObjects && MM._invalidateInstanceVertexArrayObject();
        const iM = this._meshes;
        MM._geometry = this, MM._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), iM.push(MM), this.isReady() ? this._applyToMesh(MM) : this._boundingInfo && MM.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!MM && (MM = this.getVerticesData(aM.j.PositionKind), !MM)) return;
          this._extend = (0, HM.d)(MM, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(MM) {
        for (const rM in this._vertexBuffers) {
          const iM = this._vertexBuffers[rM];
          iM._buffer.getBuffer() || iM.create(), rM === aM.j.PositionKind && (this._extend || this._updateExtend(), MM.buildBoundingInfo(this._extend.minimum, this._extend.maximum), MM._createGlobalSubMesh(MM.isUnIndexed), MM._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), MM._syncGeometryWithMorphTargetManager(), MM.synchronizeInstances()
      }
      _notifyUpdate(MM) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, MM), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const rM of this._meshes) rM._markSubMeshesAsAttributesDirty()
      }
      load(MM, rM) {
        2 !== this.delayLoadState && (this.isReady() ? rM && rM() : (this.delayLoadState = 2, this._queueLoad(MM, rM)))
      }
      _queueLoad(MM, rM) {
        this.delayLoadingFile && (MM.addPendingData(this), (async () => {
          try {
            const iM = await MM._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void MM.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(iM), this), this.delayLoadState = 1, this._delayInfo = [], MM.removePendingData(this);
            const OM = this._meshes,
              SM = OM.length;
            for (let MM = 0; MM < SM; MM++) this._applyToMesh(OM[MM]);
            rM && rM()
          } catch (iM) {
            MM.removePendingData(this), MM.xG || LM.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${iM}`)
          }
        })())
      }
      toLeftHanded() {
        const MM = this.hOM(!1);
        if (null != MM && MM.length > 0) {
          for (let rM = 0; rM < MM.length; rM += 3) {
            const iM = MM[rM + 0];
            MM[rM + 0] = MM[rM + 2], MM[rM + 2] = iM
          }
          this.setIndices(MM)
        }
        const rM = this.getVerticesData(aM.j.PositionKind, !1);
        if (null != rM && rM.length > 0) {
          for (let MM = 0; MM < rM.length; MM += 3) rM[MM + 2] = -rM[MM + 2];
          this.setVerticesData(aM.j.PositionKind, rM, !1)
        }
        const iM = this.getVerticesData(aM.j.NormalKind, !1);
        if (null != iM && iM.length > 0) {
          for (let MM = 0; MM < iM.length; MM += 3) iM[MM + 2] = -iM[MM + 2];
          this.setVerticesData(aM.j.NormalKind, iM, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const MM = this.getVerticesData(aM.j.PositionKind);
        if (!MM || 0 === MM.length) return !1;
        for (let rM = 3 * this._positionsCache.length, iM = this._positionsCache.length; rM < MM.length; rM += 3, ++iM) this._positionsCache[iM] = OM.q.FromArray(MM, rM);
        for (let rM = 0, iM = 0; rM < MM.length; rM += 3, ++iM) this._positionsCache[iM].set(MM[0 + rM], MM[1 + rM], MM[2 + rM]);
        return this._positionsCache.length = MM.length / 3, this._positions = this._positionsCache, !0
      }
      xG() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const iM in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[iM]);
          this._vertexArrayObjects = {};
          const MM = this._meshes,
            rM = MM.length;
          for (let iM = 0; iM < rM; iM++) MM[iM]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const MM = this._meshes,
          rM = MM.length;
        let iM;
        for (iM = 0; iM < rM; iM++) this.releaseForMesh(MM[iM]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const OM in this._vertexBuffers) this._vertexBuffers[OM].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const MM = this._parentContainer.geometries.indexOf(this);
          MM > -1 && this._parentContainer.geometries.splice(MM, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(MM) {
        const rM = new yM(MM, this._scene),
          iM = this.hOM(void 0, !0);
        iM && rM.setIndices(iM);
        let OM, SM = !1;
        for (OM in this._vertexBuffers) {
          const MM = this.getVertexBuffer(OM),
            iM = MM.getData();
          if (!iM) continue;
          const jM = MM.isUpdatable(),
            PM = MM.getSize(),
            {
              type: nM,
              byteOffset: QM,
              byteStride: zM,
              normalized: LM
            } = MM;
          SM = SM || jM;
          let mM = this._totalVertices;
          if (MM.getIsInstanced()) {
            let MM;
            MM = iM instanceof Array ? 4 * iM.length : iM.byteLength, mM = MM / zM
          }
          const HM = (0, dM.r)(iM, PM, nM, QM, zM, mM, !0),
            hM = new aM.j(this._engine, HM, OM, {
              updatable: jM,
              useBytes: !1,
              stride: PM,
              size: PM,
              offset: 0,
              type: nM,
              normalized: LM,
              takeBufferOwnership: !0,
              instanced: MM.getIsInstanced()
            });
          rM.setVerticesBuffer(hM, mM)
        }
        for (OM in rM._updatable = SM, rM.delayLoadState = this.delayLoadState, rM.delayLoadingFile = this.delayLoadingFile, rM._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) rM._delayInfo = rM._delayInfo || [], rM._delayInfo.push(OM);
        return rM._boundingInfo = new QM.d(this._extend.minimum, this._extend.maximum), rM
      }
      serialize() {
        const MM = {};
        return MM.id = this.id, MM.uniqueId = this.uniqueId, MM.updatable = this._updatable, mM.d && mM.d.HasTags(this) && (MM.tags = mM.d.GetTags(this)), MM
      }
      _toNumberArray(MM) {
        return Array.isArray(MM) ? MM : Array.prototype.slice.call(MM)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const MM in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, MM) && (this._vertexBuffers[MM]._buffer._data = null)
      }
      serializeVerticeData() {
        const MM = this.serialize();
        return this.isVerticesDataPresent(aM.j.PositionKind) && (MM.positions = this._toNumberArray(this.getVerticesData(aM.j.PositionKind)), this.isVertexBufferUpdatable(aM.j.PositionKind) && (MM.positionsUpdatable = !0)), this.isVerticesDataPresent(aM.j.NormalKind) && (MM.normals = this._toNumberArray(this.getVerticesData(aM.j.NormalKind)), this.isVertexBufferUpdatable(aM.j.NormalKind) && (MM.normalsUpdatable = !0)), this.isVerticesDataPresent(aM.j.TangentKind) && (MM.tangents = this._toNumberArray(this.getVerticesData(aM.j.TangentKind)), this.isVertexBufferUpdatable(aM.j.TangentKind) && (MM.tangentsUpdatable = !0)), this.isVerticesDataPresent(aM.j.UVKind) && (MM.uvs = this._toNumberArray(this.getVerticesData(aM.j.UVKind)), this.isVertexBufferUpdatable(aM.j.UVKind) && (MM.uvsUpdatable = !0)), this.isVerticesDataPresent(aM.j.UV2Kind) && (MM.uvs2 = this._toNumberArray(this.getVerticesData(aM.j.UV2Kind)), this.isVertexBufferUpdatable(aM.j.UV2Kind) && (MM.uvs2Updatable = !0)), this.isVerticesDataPresent(aM.j.UV3Kind) && (MM.uvs3 = this._toNumberArray(this.getVerticesData(aM.j.UV3Kind)), this.isVertexBufferUpdatable(aM.j.UV3Kind) && (MM.uvs3Updatable = !0)), this.isVerticesDataPresent(aM.j.UV4Kind) && (MM.uvs4 = this._toNumberArray(this.getVerticesData(aM.j.UV4Kind)), this.isVertexBufferUpdatable(aM.j.UV4Kind) && (MM.uvs4Updatable = !0)), this.isVerticesDataPresent(aM.j.UV5Kind) && (MM.uvs5 = this._toNumberArray(this.getVerticesData(aM.j.UV5Kind)), this.isVertexBufferUpdatable(aM.j.UV5Kind) && (MM.uvs5Updatable = !0)), this.isVerticesDataPresent(aM.j.UV6Kind) && (MM.uvs6 = this._toNumberArray(this.getVerticesData(aM.j.UV6Kind)), this.isVertexBufferUpdatable(aM.j.UV6Kind) && (MM.uvs6Updatable = !0)), this.isVerticesDataPresent(aM.j.ColorKind) && (MM.colors = this._toNumberArray(this.getVerticesData(aM.j.ColorKind)), this.isVertexBufferUpdatable(aM.j.ColorKind) && (MM.colorsUpdatable = !0)), this.isVerticesDataPresent(aM.j.MatricesIndicesKind) && (MM.matricesIndices = this._toNumberArray(this.getVerticesData(aM.j.MatricesIndicesKind)), MM.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(aM.j.MatricesIndicesKind) && (MM.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(aM.j.MatricesWeightsKind) && (MM.matricesWeights = this._toNumberArray(this.getVerticesData(aM.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(aM.j.MatricesWeightsKind) && (MM.matricesWeightsUpdatable = !0)), MM.indices = this._toNumberArray(this.hOM()), MM
      }
      static ExtractFromMesh(MM, rM) {
        const iM = MM._geometry;
        return iM ? iM.copy(rM) : null
      }
      static RandomId() {
        return zM.e.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(MM, rM) {
        for (let iM = 0; iM < rM.geometries.length; iM++)
          if (rM.geometries[iM]._loadedUniqueId === MM) return rM.geometries[iM];
        return null
      }
      static _ImportGeometry(MM, rM) {
        const iM = rM.Hk(),
          OM = MM.geometryUniqueId,
          jM = MM.geometryId;
        if (OM || jM) {
          const MM = OM ? this._GetGeometryByLoadedUniqueId(OM, iM) : iM.getGeometryById(jM);
          MM && MM.applyToMesh(rM)
        } else if (MM instanceof ArrayBuffer) {
          const iM = rM._binaryInfo;
          if (iM.positionsAttrDesc && iM.positionsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.positionsAttrDesc.offset, iM.positionsAttrDesc.count);
            rM.setVerticesData(aM.j.PositionKind, OM, !1)
          }
          if (iM.normalsAttrDesc && iM.normalsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.normalsAttrDesc.offset, iM.normalsAttrDesc.count);
            rM.setVerticesData(aM.j.NormalKind, OM, !1)
          }
          if (iM.tangetsAttrDesc && iM.tangetsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.tangetsAttrDesc.offset, iM.tangetsAttrDesc.count);
            rM.setVerticesData(aM.j.TangentKind, OM, !1)
          }
          if (iM.uvsAttrDesc && iM.uvsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvsAttrDesc.offset, iM.uvsAttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UVKind, OM, !1)
          }
          if (iM.uvs2AttrDesc && iM.uvs2AttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvs2AttrDesc.offset, iM.uvs2AttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UV2Kind, OM, !1)
          }
          if (iM.uvs3AttrDesc && iM.uvs3AttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvs3AttrDesc.offset, iM.uvs3AttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UV3Kind, OM, !1)
          }
          if (iM.uvs4AttrDesc && iM.uvs4AttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvs4AttrDesc.offset, iM.uvs4AttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UV4Kind, OM, !1)
          }
          if (iM.uvs5AttrDesc && iM.uvs5AttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvs5AttrDesc.offset, iM.uvs5AttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UV5Kind, OM, !1)
          }
          if (iM.uvs6AttrDesc && iM.uvs6AttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.uvs6AttrDesc.offset, iM.uvs6AttrDesc.count);
            if (JM.c)
              for (let MM = 1; MM < OM.length; MM += 2) OM[MM] = 1 - OM[MM];
            rM.setVerticesData(aM.j.UV6Kind, OM, !1)
          }
          if (iM.colorsAttrDesc && iM.colorsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.colorsAttrDesc.offset, iM.colorsAttrDesc.count);
            rM.setVerticesData(aM.j.ColorKind, OM, !1, iM.colorsAttrDesc.stride)
          }
          if (iM.matricesIndicesAttrDesc && iM.matricesIndicesAttrDesc.count > 0) {
            const OM = new Int32Array(MM, iM.matricesIndicesAttrDesc.offset, iM.matricesIndicesAttrDesc.count),
              SM = [];
            for (let MM = 0; MM < OM.length; MM++) {
              const rM = OM[MM];
              SM.push(255 & rM), SM.push((65280 & rM) >> 8), SM.push((16711680 & rM) >> 16), SM.push(rM >> 24 & 255)
            }
            rM.setVerticesData(aM.j.MatricesIndicesKind, SM, !1)
          }
          if (iM.matricesIndicesExtraAttrDesc && iM.matricesIndicesExtraAttrDesc.count > 0) {
            const OM = new Int32Array(MM, iM.matricesIndicesExtraAttrDesc.offset, iM.matricesIndicesExtraAttrDesc.count),
              SM = [];
            for (let MM = 0; MM < OM.length; MM++) {
              const rM = OM[MM];
              SM.push(255 & rM), SM.push((65280 & rM) >> 8), SM.push((16711680 & rM) >> 16), SM.push(rM >> 24 & 255)
            }
            rM.setVerticesData(aM.j.MatricesIndicesExtraKind, SM, !1)
          }
          if (iM.matricesWeightsAttrDesc && iM.matricesWeightsAttrDesc.count > 0) {
            const OM = new Float32Array(MM, iM.matricesWeightsAttrDesc.offset, iM.matricesWeightsAttrDesc.count);
            rM.setVerticesData(aM.j.MatricesWeightsKind, OM, !1)
          }
          if (iM.indicesAttrDesc && iM.indicesAttrDesc.count > 0) {
            const OM = new Int32Array(MM, iM.indicesAttrDesc.offset, iM.indicesAttrDesc.count);
            rM.setIndices(OM, null)
          }
          if (iM.subMeshesAttrDesc && iM.subMeshesAttrDesc.count > 0) {
            const OM = new Int32Array(MM, iM.subMeshesAttrDesc.offset, 5 * iM.subMeshesAttrDesc.count);
            rM.iG = [];
            for (let MM = 0; MM < iM.subMeshesAttrDesc.count; MM++) {
              const iM = OM[5 * MM + 0],
                SM = OM[5 * MM + 1],
                jM = OM[5 * MM + 2],
                aM = OM[5 * MM + 3],
                nM = OM[5 * MM + 4];
              PM.e.AddToMesh(iM, SM, jM, aM, nM, rM)
            }
          }
        } else if (MM.positions && MM.normals && MM.indices) {
          if (rM.setVerticesData(aM.j.PositionKind, MM.positions, MM.positions._updatable || MM.positionsUpdatable), rM.setVerticesData(aM.j.NormalKind, MM.normals, MM.normals._updatable || MM.normalsUpdatable), MM.tangents && rM.setVerticesData(aM.j.TangentKind, MM.tangents, MM.tangents._updatable || MM.tangentsUpdatable), MM.uvs && rM.setVerticesData(aM.j.UVKind, MM.uvs, MM.uvs._updatable || MM.uvsUpdatable), MM.uvs2 && rM.setVerticesData(aM.j.UV2Kind, MM.uvs2, MM.uvs2._updatable || MM.uvs2Updatable), MM.uvs3 && rM.setVerticesData(aM.j.UV3Kind, MM.uvs3, MM.uvs3._updatable || MM.uvs3Updatable), MM.uvs4 && rM.setVerticesData(aM.j.UV4Kind, MM.uvs4, MM.uvs4._updatable || MM.uvs4Updatable), MM.uvs5 && rM.setVerticesData(aM.j.UV5Kind, MM.uvs5, MM.uvs5._updatable || MM.uvs5Updatable), MM.uvs6 && rM.setVerticesData(aM.j.UV6Kind, MM.uvs6, MM.uvs6._updatable || MM.uvs6Updatable), MM.colors && rM.setVerticesData(aM.j.ColorKind, SM.h.CheckColors4(MM.colors, MM.positions.length / 3), MM.colors._updatable), MM.matricesIndices)
            if (MM.matricesIndices._isExpanded || MM.matricesIndicesExpanded) delete MM.matricesIndices._isExpanded, delete MM.matricesIndicesExpanded, rM.setVerticesData(aM.j.MatricesIndicesKind, MM.matricesIndices, MM.matricesIndices._updatable || MM.matricesIndicesUpdatable);
            else {
              const iM = [];
              for (let rM = 0; rM < MM.matricesIndices.length; rM++) {
                const OM = MM.matricesIndices[rM];
                iM.push(255 & OM), iM.push((65280 & OM) >> 8), iM.push((16711680 & OM) >> 16), iM.push(OM >> 24 & 255)
              }
              rM.setVerticesData(aM.j.MatricesIndicesKind, iM, MM.matricesIndices._updatable || MM.matricesIndicesUpdatable)
            } if (MM.matricesIndicesExtra)
            if (MM.matricesIndicesExtraExpanded || MM.matricesIndicesExtra._isExpanded) delete MM.matricesIndices._isExpanded, delete MM.matricesIndicesExtraExpanded, rM.setVerticesData(aM.j.MatricesIndicesExtraKind, MM.matricesIndicesExtra, MM.matricesIndicesExtra._updatable || MM.matricesIndicesExtraUpdatable);
            else {
              const iM = [];
              for (let rM = 0; rM < MM.matricesIndicesExtra.length; rM++) {
                const OM = MM.matricesIndicesExtra[rM];
                iM.push(255 & OM), iM.push((65280 & OM) >> 8), iM.push((16711680 & OM) >> 16), iM.push(OM >> 24 & 255)
              }
              rM.setVerticesData(aM.j.MatricesIndicesExtraKind, iM, MM.matricesIndicesExtra._updatable || MM.matricesIndicesExtraUpdatable)
            } MM.matricesWeights && (yM._CleanMatricesWeights(MM, rM), rM.setVerticesData(aM.j.MatricesWeightsKind, MM.matricesWeights, MM.matricesWeights._updatable)), MM.matricesWeightsExtra && rM.setVerticesData(aM.j.MatricesWeightsExtraKind, MM.matricesWeightsExtra, MM.matricesWeights._updatable), rM.setIndices(MM.indices, null)
        }
        if (MM.iG) {
          rM.iG = [];
          for (let iM = 0; iM < MM.iG.length; iM++) {
            const OM = MM.iG[iM];
            PM.e.AddToMesh(OM.materialIndex, OM.verticesStart, OM.verticesCount, OM.indexStart, OM.indexCount, rM)
          }
        }
        rM._shouldGenerateFlatShading && (rM.convertToFlatShadedMesh(), rM._shouldGenerateFlatShading = !1), rM.computeWorldMatrix(!0), iM.onMeshImportedObservable.notifyObservers(rM)
      }
      static _CleanMatricesWeights(MM, rM) {
        const iM = .001;
        if (!nM.c.CleanBoneMatrixWeights) return;
        let OM;
        if (!(MM.skeletonId > -1)) return;
        {
          const iM = rM.Hk().getLastSkeletonById(MM.skeletonId);
          if (!iM) return;
          OM = iM.bones.length
        }
        const SM = rM.getVerticesData(aM.j.MatricesIndicesKind),
          jM = rM.getVerticesData(aM.j.MatricesIndicesExtraKind),
          PM = MM.matricesWeights,
          QM = MM.matricesWeightsExtra,
          zM = MM.numBoneInfluencer,
          LM = PM.length;
        for (let aM = 0; aM < LM; aM += 4) {
          let MM = 0,
            rM = -1;
          for (let OM = 0; OM < 4; OM++) {
            const SM = PM[aM + OM];
            MM += SM, SM < iM && rM < 0 && (rM = OM)
          }
          if (QM)
            for (let OM = 0; OM < 4; OM++) {
              const SM = QM[aM + OM];
              MM += SM, SM < iM && rM < 0 && (rM = OM + 4)
            }
          if ((rM < 0 || rM > zM - 1) && (rM = zM - 1), MM > iM) {
            const rM = 1 / MM;
            for (let MM = 0; MM < 4; MM++) PM[aM + MM] *= rM;
            if (QM)
              for (let MM = 0; MM < 4; MM++) QM[aM + MM] *= rM
          } else rM >= 4 ? (QM[aM + rM - 4] = 1 - MM, jM[aM + rM - 4] = OM) : (PM[aM + rM] = 1 - MM, SM[aM + rM] = OM)
        }
        rM.setVerticesData(aM.j.MatricesIndicesKind, SM), MM.matricesWeightsExtra && rM.setVerticesData(aM.j.MatricesIndicesExtraKind, jM)
      }
      static Parse(MM, rM, iM) {
        const SM = new yM(MM.id, rM, void 0, MM.updatable);
        return SM._loadedUniqueId = MM.uniqueId, mM.d && mM.d.AddTagsTo(SM, MM.tags), MM.delayLoadingFile ? (SM.delayLoadState = 4, SM.delayLoadingFile = iM + MM.delayLoadingFile, SM._boundingInfo = new QM.d(OM.q.FromArray(MM.boundingBoxMinimum), OM.q.FromArray(MM.boundingBoxMaximum)), SM._delayInfo = [], MM.hasUVs && SM._delayInfo.push(aM.j.UVKind), MM.hasUVs2 && SM._delayInfo.push(aM.j.UV2Kind), MM.hasUVs3 && SM._delayInfo.push(aM.j.UV3Kind), MM.hasUVs4 && SM._delayInfo.push(aM.j.UV4Kind), MM.hasUVs5 && SM._delayInfo.push(aM.j.UV5Kind), MM.hasUVs6 && SM._delayInfo.push(aM.j.UV6Kind), MM.hasColors && SM._delayInfo.push(aM.j.ColorKind), MM.hasMatricesIndices && SM._delayInfo.push(aM.j.MatricesIndicesKind), MM.hasMatricesWeights && SM._delayInfo.push(aM.j.MatricesWeightsKind), SM._delayLoadingFunction = jM.d.ImportVertexData) : jM.d.ImportVertexData(MM, SM), rM.pushGeometry(SM, !0), SM
      }
    }
  },
  41553: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM,
      g: () => hM
    });
    var OM = iM(38040),
      SM = iM(39711),
      jM = iM(41529),
      aM = iM(41502),
      PM = iM(39705),
      nM = iM(41536),
      QM = iM(41250),
      zM = iM(38085);
    class LM extends jM.e {
      constructor(MM, rM) {
        super(MM, rM.Hk()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, rM.e_(this), this._sourceMesh = rM, this._unIndexed = rM._unIndexed, this.position.jR(rM.position), this.rotation.jR(rM.rotation), this.UL.jR(rM.UL), rM.rotationQuaternion && (this.rotationQuaternion = rM.rotationQuaternion.clone()), this.animations = rM.animations.slice();
        for (const iM of rM.getAnimationRanges()) null != iM && this.createAnimationRange(iM.name, iM.from, iM.to);
        if (this.infiniteDistance = rM.infiniteDistance, this.setPivotMatrix(rM.getPivotMatrix()), rM.skeleton || rM.morphTargetManager || !rM.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const MM = rM.aY();
          this.buildBoundingInfo(MM.minimum, MM.maximum)
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
      set receiveShadows(MM) {
        this._sourceMesh?.receiveShadows !== MM && SM.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(MM) {
        this._sourceMesh?.material !== MM && SM.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(MM) {
        this._sourceMesh?.visibility !== MM && SM.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(MM) {
        this._sourceMesh?.skeleton !== MM && SM.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(MM) {
        this._sourceMesh && MM !== this._sourceMesh.renderingGroupId && SM.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(MM) {
        this._sourceMesh && MM !== this._sourceMesh.meshBlendingTag && SM.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get QSM() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(MM) {
        return this._sourceMesh.createInstance(MM)
      }
      isReady() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(MM, !0)
      }
      getVerticesData(MM, rM, iM) {
        return this._sourceMesh.getVerticesData(MM, rM, iM)
      }
      copyVerticesData(MM, rM) {
        this._sourceMesh.copyVerticesData(MM, rM)
      }
      getVertexBuffer(MM, rM) {
        return this._sourceMesh.getVertexBuffer(MM, rM)
      }
      setVerticesData(MM, rM, iM, OM) {
        return this.QSM && this.QSM.setVerticesData(MM, rM, iM, OM), this.QSM
      }
      updateVerticesData(MM, rM, iM, OM) {
        return this.QSM && this.QSM.updateVerticesData(MM, rM, iM, OM), this.QSM
      }
      setIndices(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.QSM && this.QSM.setIndices(MM, rM), this.QSM
      }
      isVerticesDataPresent(MM) {
        return this._sourceMesh.isVerticesDataPresent(MM)
      }
      hOM() {
        return this._sourceMesh.hOM()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let MM, rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.aY().isLocked) return this;
        MM = "object" === typeof rM ? rM : {
          applySkeleton: rM,
          applyMorph: iM
        };
        const OM = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(MM, null, QM.j.PositionKind), OM), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(MM, rM) {
        if (super._activate(MM, rM), this._sourceMesh.iG || SM.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, MM), rM) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== nM.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new OM.d);
          const MM = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, OM.l.sh[7].jR(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.jR(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.jR(OM.l.sh[7]), this._currentLOD._masterMesh = MM, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Wk() {
        return !0
      }
      getLOD(MM) {
        if (!MM) return this;
        const rM = this.QSM.getLODLevels();
        if (rM && 0 !== rM.length) {
          const rM = this.aY();
          this._currentLOD = this.QSM.getLOD(MM, rM.YOM)
        } else this._currentLOD = this.QSM;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(MM) {
        return this.QSM._preActivateForIntermediateRendering(MM)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.iG)
          for (let MM = 0; MM < this._sourceMesh.iG.length; MM++) this._sourceMesh.iG[MM].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.aY().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(MM);
        if (PM.b.DeepCopy(this, OM, ["name", "iG", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "QSM", "Wk", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "nSM", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "TaM", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), rM && (OM.parent = rM), !iM)
          for (let SM = 0; SM < this.Hk().meshes.length; SM++) {
            const MM = this.Hk().meshes[SM];
            MM.parent === this && MM.clone(MM.name, OM)
          }
        return OM.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(OM), OM
      }
      dispose(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.R_(this), super.dispose(MM, rM)
      }
      _serializeAsParent(MM) {
        super._serializeAsParent(MM), MM.parentId = this._sourceMesh.uniqueId, MM.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = this.clone("Clone of " + (this.name || this.id), MM || this.parent, !0, rM && rM.newSourcedMesh);
        OM && iM && iM(this, OM);
        for (const SM of this.getChildTransformNodes(!0)) SM.instantiateHierarchy(OM, rM, iM);
        return OM
      }
    }
    let mM = !1;

    function HM(MM, rM, iM, OM, SM) {
      for (let jM = 0; jM < rM.length; jM++) {
        const aM = MM[rM[jM]] ?? 0,
          PM = SM + iM[jM];
        aM.toArray ? aM.toArray(OM, PM) : aM.copyToArray ? aM.copyToArray(OM, PM) : OM[PM] = aM
      }
    }

    function hM() {
      mM || (mM = !0, aM.d._instancedMeshFactory = (MM, rM) => {
        const iM = new LM(MM, rM);
        if (rM.xZ) {
          iM.xZ = {};
          for (const MM in rM.xZ) iM.xZ[MM] = rM.xZ[MM]
        }
        return iM
      }, aM.d.prototype.sZ = function(MM, rM) {
        if (!this.xZ) {
          this.xZ = {};
          for (const MM of this.instances) MM.xZ = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.ph().getCaps().vertexArrayObject ? {} : void 0
        }), this.xZ[MM] = null, this._userInstancedBuffersStorage.strides[MM] = rM;
        const iM = this._userInstancedBuffersStorage;
        iM.interleavedKinds = [], iM.interleavedOffsets = [], iM.interleavedRowStride = 0;
        for (const OM in iM.strides) iM.interleavedKinds.push(OM), iM.interleavedOffsets.push(iM.interleavedRowStride), iM.interleavedRowStride += iM.strides[OM];
        iM.interleavedData = new Float32Array(32 * iM.interleavedRowStride);
        for (const OM in iM.interleavedBuffers) iM.interleavedBuffers[OM].buffer.dispose();
        iM.interleavedBuffers = {}, iM.vertexBuffers[MM] = null;
        for (const OM of this.instances) OM.xZ[MM] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, aM.d.prototype._processInstancedBuffers = function(MM, rM) {
        const iM = this._userInstancedBuffersStorage,
          OM = iM.interleavedRowStride;
        if (!OM) return;
        const SM = MM ? MM.length : 0,
          jM = (SM + 1) * OM;
        let aM = iM.interleavedData;
        if (aM.length < jM) {
          let MM = aM.length;
          for (; MM < jM;) MM *= 2;
          aM = iM.interleavedData = new Float32Array(MM)
        }
        const PM = iM.interleavedKinds,
          nM = iM.interleavedOffsets;
        let zM = 0;
        rM && (HM(this.xZ, PM, nM, aM, zM), zM += OM);
        for (let QM = 0; QM < SM; QM++) HM(MM[QM].xZ, PM, nM, aM, zM), zM += OM;
        let LM = "shared",
          mM = iM.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (LM = this._instanceDataStorage.engine.currentRenderPassId, iM.renderPasses || (iM.renderPasses = {}), iM.renderPasses[LM] || (iM.renderPasses[LM] = {}), mM = iM.renderPasses[LM]);
        const hM = iM.interleavedBuffers[LM];
        let JM = !hM || hM.data !== aM;
        for (let QM = 0; !JM && QM < PM.length; QM++) JM = !mM[PM[QM]];
        if (!JM) return void hM.buffer.updateDirectly(aM, 0);
        hM?.buffer.dispose();
        const dM = new QM.d(this.ph(), aM, !0, OM, !1, !0);
        for (let QM = 0; QM < PM.length; QM++) {
          const MM = PM[QM],
            rM = dM.createVertexBuffer(MM, nM[QM], iM.strides[MM]);
          rM.hashCode += rM.byteOffset * 2 ** 24, mM[MM] = rM
        }
        iM.interleavedBuffers[LM] = {
          buffer: dM,
          data: aM
        }, this._invalidateInstanceVertexArrayObject()
      }, aM.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const MM in this._userInstancedBuffersStorage.vertexArrayObjects) this.ph().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[MM]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, aM.d.prototype._disposeInstanceSpecificData = function() {
        for (const rM in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[rM].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const rM in this.xZ) this._userInstancedBuffersStorage.vertexBuffers[rM] && this._userInstancedBuffersStorage.vertexBuffers[rM].dispose();
        const MM = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (MM) {
          for (const rM in MM) MM[rM].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.xZ = {}
      }, (0, zM.e)("BABYLON.InstancedMesh", LM))
    }
  },
  41502: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => TM,
      e: () => cM,
      h: () => vM
    });
    var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM = iM(38068),
      lM = iM(41205),
      EM = iM(41145),
      UM = iM(39705),
      GM = iM(41124),
      CM = iM(41506),
      eM = iM(41323),
      bM = iM(38040),
      wM = iM(38173),
      tM = iM(41328),
      gM = iM(41250),
      uM = iM(41508),
      RM = iM(41512),
      pM = iM(41529),
      WM = iM(41400),
      sM = iM(41397),
      DM = iM(41474),
      kM = iM(41538),
      ZM = iM(41515),
      oM = iM(41121),
      fM = iM(39711),
      YM = iM(38085),
      NM = iM(40990),
      AM = iM(41278);
    class xM {
      constructor(MM, rM) {
        this.distanceOrScreenCoverage = MM, this.mesh = rM
      }
    }
    class vM {}
    class FM {
      constructor() {
        this.batchCache = new XM(this), this.batchCacheReplacementModeInFrozenMode = new XM(this), this.instancesBufferSize = 2048
      }
    }
    class BM {
      constructor() {
        this.renderPasses = {}
      }
    }
    class XM {
      constructor(MM) {
        this.parent = MM, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class IM {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class KM {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const qM = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class TM extends pM.e {
      static _GetDefaultSideOrientation(MM) {
        return MM || TM.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(MM) {
        this._internalMeshDataInfo._useLODScreenCoverage = MM, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(MM) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== MM && (MM && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(gM.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(gM.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = MM, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new yM.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new yM.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new yM.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new yM.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new yM.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(MM) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(MM)
      }
      get nSM() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(MM) {
        this._internalMeshDataInfo._forcedInstanceCount = MM
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(MM) {
        this._internalMeshDataInfo._sideOrientation = MM, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === MM || !this._scene.useRightHandedSystem && 0 === MM
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(MM) {
        this.sideOrientation = MM, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(MM) {
        this._internalMeshDataInfo._overrideRenderingFillMode = MM
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(MM) {
        MM && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (MM.sideOrientation = null), this._setMaterial(MM)
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
      set isUnIndexed(MM) {
        this._unIndexed !== MM && (this._unIndexed = MM, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const MM = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return MM ? MM.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const MM = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return MM ? MM.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(MM) {
        this._instanceDataStorage.manualUpdate = MM
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(MM) {
        this._instanceDataStorage.previousManualUpdate = MM
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(MM) {
        this._instanceDataStorage.forceMatrixUpdates = MM
      }
      _copySource(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SM = this.Hk();
        if (MM._geometry && MM._geometry.applyToMesh(this), UM.b.DeepCopy(MM, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "nSM", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Wk", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "TaM", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = MM, SM.useClonedMeshMap && (MM._internalMeshDataInfo.meshMap || (MM._internalMeshDataInfo.meshMap = {}), MM._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = MM._originalBuilderSideOrientation, this._creationDataStorage = MM._creationDataStorage, MM._ranges) {
          const rM = MM._ranges;
          for (const MM in rM) Object.prototype.hasOwnProperty.call(rM, MM) && rM[MM] && this.createAnimationRange(MM, rM[MM].from, rM[MM].to)
        }
        if (MM.metadata && MM.metadata.clone ? this.metadata = MM.metadata.clone() : this.metadata = MM.metadata, this._internalMetadata = MM._internalMetadata, this.meshBlendingTag = MM.meshBlendingTag, GM.d && GM.d.HasTags(MM) && GM.d.AddTagsTo(this, GM.d.GetTags(MM, !0)), this.kR(MM.isEnabled(!1)), this.parent = MM.parent, this.setPivotMatrix(MM.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + MM.id, this.material = MM.material, !rM) {
          const SM = MM.getDescendants(!0);
          for (let MM = 0; MM < SM.length; MM++) {
            const jM = SM[MM];
            jM._isMesh ? (qM.parent = this, qM.doNotCloneChildren = rM, qM.clonePhysicsImpostor = iM, qM.cloneThinInstances = OM, jM.clone(this.name + "." + jM.name, qM)) : jM.clone && jM.clone(this.name + "." + jM.name, this)
          }
        }
        if (MM.morphTargetManager && (this.morphTargetManager = MM.morphTargetManager), (0, NM.c)(SM.getPhysicsEngine)) {
          const rM = SM.getPhysicsEngine();
          if (iM && rM)
            if (1 === rM.getPluginVersion()) {
              const iM = rM.getImpostorForPhysicsObject(MM);
              iM && (this.physicsImpostor = iM.clone(this))
            } else 2 === rM.getPluginVersion() && MM.physicsBody && MM.physicsBody.clone(this)
        }
        for (let jM = 0; jM < SM.aG.length; jM++) {
          const rM = SM.aG[jM];
          rM.emitter === MM && rM.clone(rM.name, this)
        }
        if (this.skeleton = MM.skeleton, OM && (MM._thinInstanceDataStorage.matrixData ? (this.v_("matrix", new Float32Array(MM._thinInstanceDataStorage.matrixData), 16, !MM._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = MM._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = MM._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = MM._thinInstanceDataStorage.matrixBufferSize, MM._userThinInstanceBuffersStorage)) {
          const rM = MM._userThinInstanceBuffersStorage;
          for (const MM in rM.data) this.v_(MM, new Float32Array(rM.data[MM]), rM.strides[MM], !rM.vertexBuffers?.[MM]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[MM] = rM.sizes[MM]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(MM) {
        let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          jM = arguments.length > 4 ? arguments[4] : void 0,
          aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(MM, iM), this._internalMeshDataInfo = new KM, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new IM, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = TM.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, iM = this.Hk(), this._instanceDataStorage = new BM, this._instanceDataStorage.engine = iM.ph(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new FM), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (MM, rM, iM) => {
          MM && iM && (this._uniformBuffer ? this.transferToEffect(rM) : iM.bindOnlyWorldMatrix(rM))
        };
        let PM = !1;
        if (OM && void 0 === OM._addToSceneRootNodes) {
          const MM = OM;
          rM = MM.parent ?? null, SM = MM.source ?? null, jM = MM.doNotCloneChildren ?? !1, aM = MM.clonePhysicsImpostor ?? !0, PM = MM.cloneThinInstances ?? !1
        } else rM = OM;
        SM && this._copySource(SM, jM, aM, PM), null !== rM && (this.parent = rM), this._instanceDataStorage.hardwareInstancedRendering = this.ph().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = MM => {
          MM.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new yM.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), SM && SM.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = 0 === this.getTotalVertices() || rM && rM.doNotInstantiate && (!0 === rM.doNotInstantiate || rM.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), MM || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        OM.parent = MM || this.parent, OM.position = this.position.clone(), OM.UL = this.UL.clone(), this.rotationQuaternion ? OM.rotationQuaternion = this.rotationQuaternion.clone() : OM.rotation = this.rotation.clone(), iM && iM(this, OM);
        for (const SM of this.getChildTransformNodes(!0)) "InstancedMesh" === SM.getClassName() && "Mesh" === OM.getClassName() && SM.QSM === this ? SM.instantiateHierarchy(OM, {
          doNotInstantiate: rM && rM.doNotInstantiate || !1,
          newSourcedMesh: OM
        }, iM) : SM.instantiateHierarchy(OM, rM, iM);
        return OM
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(MM) {
        let rM = super.toString(MM);
        if (rM += ", n vertices: " + this.getTotalVertices(), rM += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let iM = 0; iM < this.animations.length; iM++) rM += ", animation[0]: " + this.animations[iM].toString(MM);
        if (MM)
          if (this._geometry) {
            const MM = this.hOM(),
              iM = this.getVerticesData(gM.j.PositionKind);
            iM && MM && (rM += ", flat shading: " + (iM.length / 3 === MM.length ? "YES" : "NO"))
          } else rM += ", flat shading: UNKNOWN";
        return rM
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const MM of this.instances) MM._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const MM = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((rM, iM) => rM.distanceOrScreenCoverage < iM.distanceOrScreenCoverage ? MM : rM.distanceOrScreenCoverage > iM.distanceOrScreenCoverage ? -MM : 0))
      }
      addLODLevel(MM, rM) {
        if (rM && rM._masterMesh) return fM.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const iM = new xM(MM, rM);
        return this._internalMeshDataInfo._LODLevels.push(iM), rM && (rM._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(MM) {
        const rM = this._internalMeshDataInfo;
        for (let iM = 0; iM < rM._LODLevels.length; iM++) {
          const OM = rM._LODLevels[iM];
          if (OM.distanceOrScreenCoverage === MM) return OM.mesh
        }
        return null
      }
      removeLODLevel(MM) {
        const rM = this._internalMeshDataInfo;
        for (let iM = 0; iM < rM._LODLevels.length; iM++) rM._LODLevels[iM].mesh === MM && (rM._LODLevels.splice(iM, 1), MM && (MM._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(MM, rM) {
        const iM = this._internalMeshDataInfo;
        if (!iM._LODLevels || 0 === iM._LODLevels.length) return this;
        const OM = rM || this.aY().YOM,
          SM = MM.mode === eM.b.ORTHOGRAPHIC_CAMERA ? MM.minZ : OM.centerWorld.subtract(MM.globalPosition).length();
        let jM = SM,
          aM = 1;
        if (iM._useLODScreenCoverage) {
          const rM = MM.screenArea;
          let iM = OM.radiusWorld * MM.minZ / SM;
          iM = iM * iM * Math.PI, jM = iM / rM, aM = -1
        }
        if (aM * iM._LODLevels[iM._LODLevels.length - 1].distanceOrScreenCoverage > aM * jM) return this.onLODLevelSelection && this.onLODLevelSelection(jM, this, this), this;
        for (let PM = 0; PM < iM._LODLevels.length; PM++) {
          const MM = iM._LODLevels[PM];
          if (aM * MM.distanceOrScreenCoverage < aM * jM) {
            if (MM.mesh) {
              if (4 === MM.mesh.delayLoadState) return MM.mesh._checkDelayState(), this;
              if (2 === MM.mesh.delayLoadState) return this;
              MM.mesh._preActivate(), MM.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(jM, this, MM.mesh), MM.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(jM, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(MM, rM, iM, OM) {
        if (!this._geometry) return null;
        let SM = OM ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[MM]?.getFloatData(this.instances.length + 1, iM || rM && 1 !== this._geometry.meshes.length);
        return SM || (SM = this._geometry.getVerticesData(MM, rM, iM)), SM
      }
      copyVerticesData(MM, rM) {
        this._geometry && this._geometry.copyVerticesData(MM, rM)
      }
      getVertexBuffer(MM, rM) {
        return this._geometry ? (rM ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[MM]) ?? this._geometry.getVertexBuffer(MM) : null
      }
      isVerticesDataPresent(MM, rM) {
        return this._geometry ? !rM && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[MM] || this._geometry.isVerticesDataPresent(MM) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(MM)
      }
      isVertexBufferUpdatable(MM, rM) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(MM);
        if (!rM) {
          const rM = this._userInstancedBuffersStorage?.vertexBuffers[MM];
          if (rM) return rM.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(MM)
      }
      getVerticesDataKinds(MM) {
        if (!this._geometry) {
          const MM = [];
          if (this._delayInfo)
            for (const rM of this._delayInfo) MM.push(rM);
          return MM
        }
        const rM = this._geometry.getVerticesDataKinds();
        if (!MM && this._userInstancedBuffersStorage)
          for (const iM in this._userInstancedBuffersStorage.vertexBuffers) - 1 === rM.indexOf(iM) && rM.push(iM);
        return rM
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      hOM(MM, rM) {
        return this._geometry ? this._geometry.hOM(MM, rM) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(MM)) return !1;
        if (!this.iG || 0 === this.iG.length) return !0;
        if (!MM) return !0;
        const iM = this.ph(),
          OM = this.Hk(),
          SM = rM || iM.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const jM = this.material || OM.defaultMaterial;
        if (jM)
          if (jM._storeEffectOnSubMeshes)
            for (const PM of this.iG) {
              const MM = PM.Zh();
              if (MM)
                if (MM._storeEffectOnSubMeshes) {
                  if (!MM.isReadyForSubMesh(this, PM, SM)) return !1
                } else if (!MM.isReady(this, SM)) return !1
            } else if (!jM.isReady(this, SM)) return !1;
        const aM = iM.currentRenderPassId;
        for (const PM of this.lightSources) {
          const MM = PM.getShadowGenerators();
          if (!MM) continue;
          const rM = MM.values();
          for (let OM = rM.next(); !0 !== OM.done; OM = rM.next()) {
            const MM = OM.value;
            if (MM && (!MM.getShadowMap()?.renderList || MM.getShadowMap()?.renderList && -1 !== MM.getShadowMap()?.renderList?.indexOf(this))) {
              const rM = MM.getShadowMap().renderPassIds ?? [iM.currentRenderPassId];
              for (let OM = 0; OM < rM.length; ++OM) {
                iM.currentRenderPassId = rM[OM];
                for (const rM of this.iG)
                  if (!MM.isReady(rM, SM, rM.Zh()?.needAlphaBlendingForMesh(this) ?? !1)) return iM.currentRenderPassId = aM, !1
              }
              iM.currentRenderPassId = aM
            }
          }
        }
        for (const PM of this._internalMeshDataInfo._LODLevels)
          if (PM.mesh && !PM.mesh.isReady(SM)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      oh() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(MM) {
        this._instanceDataStorage.overridenInstanceCount = MM
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const MM = this._instanceDataStorage.engine.currentRenderPassId;
        let rM = this._instanceDataStorage.renderPasses[MM];
        return rM || (rM = new FM, this._instanceDataStorage.renderPasses[MM] = rM), rM
      }
      _preActivate() {
        const MM = this._internalMeshDataInfo,
          rM = this.Hk().getRenderId();
        return MM._preActivateId === rM || (MM._preActivateId = rM, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(MM) {
        const rM = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return rM.visibleInstances && (rM.visibleInstances.intermediateDefaultRenderId = MM), this
      }
      _registerInstanceForRenderId(MM, rM) {
        const iM = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return iM.visibleInstances || (iM.visibleInstances = {
          defaultRenderId: rM,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), iM.visibleInstances[rM] || (void 0 === iM.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete iM.visibleInstances[iM.previousRenderId], iM.previousRenderId = rM, iM.visibleInstances[rM] = new Array), iM.visibleInstances[rM].push(MM), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.kh || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let MM, rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.aY().isLocked) return this;
        MM = "object" === typeof rM ? rM : {
          applySkeleton: rM,
          applyMorph: iM
        };
        const OM = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(MM, null, gM.j.PositionKind), OM), this
      }
      _createGlobalSubMesh(MM) {
        const rM = this.getTotalVertices();
        if (!rM || !this.hOM()) return null;
        if (this.iG && this.iG.length > 0) {
          const iM = this.hOM();
          if (!iM) return null;
          const OM = iM.length;
          let SM = !1;
          if (MM) SM = !0;
          else
            for (const MM of this.iG) {
              if (MM.indexStart + MM.indexCount > OM) {
                SM = !0;
                break
              }
              if (MM.verticesStart + MM.verticesCount > rM) {
                SM = !0;
                break
              }
            }
          if (!SM) return this.iG[0]
        }
        return this.releaseSubMeshes(), new WM.e(0, 0, rM, 0, this.getTotalIndices() || (this.isUnIndexed ? rM : 0), this)
      }
      subdivide(MM) {
        if (MM < 1) return;
        const rM = this.getTotalIndices();
        let iM = rM / MM | 0,
          OM = 0;
        for (; iM % 3 !== 0;) iM++;
        this.releaseSubMeshes();
        for (let SM = 0; SM < MM && !(OM >= rM); SM++) WM.e.CreateFromIndices(0, OM, OM + iM >= rM ? rM - OM : iM, this, void 0, !1), OM += iM;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(MM, rM, iM, OM);
        else {
          const OM = new uM.d;
          OM.set(rM, MM);
          const SM = this.Hk();
          new RM.e(RM.e.RandomId(), SM, OM, iM, this)
        }
        return this
      }
      removeVerticesData(MM) {
        this._geometry && this._geometry.removeVerticesData(MM)
      }
      markVerticesDataAsUpdatable(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this.getVertexBuffer(MM);
        iM && iM.isUpdatable() !== rM && this.setVerticesData(MM, this.getVerticesData(MM), rM)
      }
      setVerticesBuffer(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = RM.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(MM, iM, rM), this
      }
      updateVerticesData(MM, rM, iM, OM) {
        return this._geometry ? (OM ? (this.makeGeometryUnique(), this.updateVerticesData(MM, rM, iM, !1)) : this._geometry.updateVerticesData(MM, rM, iM), this) : this
      }
      updateMeshPositions(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this.getVerticesData(gM.j.PositionKind);
        if (!iM) return this;
        if (MM(iM), this.updateVerticesData(gM.j.PositionKind, iM, !1, !1), rM) {
          const MM = this.hOM(),
            rM = this.getVerticesData(gM.j.NormalKind);
          if (!rM) return this;
          uM.d.ComputeNormals(iM, MM, rM), this.updateVerticesData(gM.j.NormalKind, rM, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const MM = this._geometry,
          rM = this._geometry.copy(RM.e.RandomId());
        return MM.releaseForMesh(this, !0), rM.applyToMesh(this), this
      }
      setIndexBuffer(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SM = this._geometry;
        SM || (SM = new RM.e(RM.e.RandomId(), this.Hk(), void 0, void 0, this)), SM.setIndexBuffer(MM, rM, iM, OM)
      }
      setIndices(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(MM, rM, iM, OM);
        else {
          const OM = new uM.d;
          OM.indices = MM;
          const SM = this.Hk();
          new RM.e(RM.e.RandomId(), SM, OM, iM, this, rM)
        }
        return this
      }
      updateIndices(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(MM, rM, iM), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(MM, rM, iM) {
        let OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const SM = this.Hk().ph();
        let jM;
        if (this._unIndexed)
          if (this._getRenderingFillMode(iM) === sM.c.WireFrameFillMode) jM = MM._getLinesIndexBuffer(this.hOM(), SM);
          else jM = null;
        else switch (this._getRenderingFillMode(iM)) {
          case sM.c.PointFillMode:
            jM = null;
            break;
          case sM.c.WireFrameFillMode:
            jM = MM._getLinesIndexBuffer(this.hOM(), SM);
            break;
          default:
          case sM.c.TriangleFillMode:
            jM = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(rM, jM, OM)
      }
      _bindDirect(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(MM), iM && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const MM = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const rM in MM) this._userInstancedBuffersStorage.vertexBuffers[rM] = MM[rM]
          }
          this._geometry._bind(MM, rM, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(MM, rM);
        return this
      }
      _draw(MM, rM, iM) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const OM = this.Hk().ph(),
          SM = OM._currentMaterialContext,
          jM = SM && SM.useVertexPulling;
        return this._unIndexed && rM !== sM.c.WireFrameFillMode || rM == sM.c.PointFillMode ? OM.drawArraysType(rM, MM.verticesStart, MM.verticesCount, this.forcedInstanceCount || iM) : rM == sM.c.WireFrameFillMode ? OM.drawElementsType(rM, 0, MM._linesIndexCount, this.forcedInstanceCount || iM) : jM ? OM.drawArraysType(rM, MM.indexStart, MM.indexCount, this.forcedInstanceCount || iM) : OM.drawElementsType(rM, MM.indexStart, MM.indexCount, this.forcedInstanceCount || iM), this
      }
      registerBeforeRender(MM) {
        return this.onBeforeRenderObservable.add(MM), this
      }
      unregisterBeforeRender(MM) {
        return this.onBeforeRenderObservable.removeCallback(MM), this
      }
      registerAfterRender(MM) {
        return this.onAfterRenderObservable.add(MM), this
      }
      unregisterAfterRender(MM) {
        return this.onAfterRenderObservable.removeCallback(MM), this
      }
      _getInstancesRenderList(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (rM) return iM.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[MM] = !1, iM.batchCacheReplacementModeInFrozenMode.renderSelf[MM] = !0, iM.batchCacheReplacementModeInFrozenMode;
          if (iM.previousBatch) return iM.previousBatch
        }
        const OM = this.Hk(),
          SM = OM._isInIntermediateRendering(),
          jM = SM ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          aM = iM.batchCache;
        if (aM.mustReturn = !1, aM.renderSelf[MM] = rM || !jM && this.isEnabled() && this.isVisible, aM.visibleInstances[MM] = null, iM.visibleInstances && !rM) {
          const rM = iM.visibleInstances,
            jM = OM.getRenderId(),
            PM = SM ? rM.intermediateDefaultRenderId : rM.defaultRenderId;
          aM.visibleInstances[MM] = rM[jM], !aM.visibleInstances[MM] && PM && (aM.visibleInstances[MM] = rM[PM])
        }
        return aM.hardwareInstancedRendering[MM] = !rM && this._instanceDataStorage.hardwareInstancedRendering && null !== aM.visibleInstances[MM] && void 0 !== aM.visibleInstances[MM], iM.previousBatch = aM, aM
      }
      _updateInstancedBuffers(MM, rM, iM, OM, SM, jM) {
        const aM = rM.visibleInstances[MM._id],
          PM = aM ? aM.length : 0,
          nM = rM.parent,
          QM = this._instanceDataStorage;
        let zM = nM.instancesBuffer,
          LM = nM.instancesPreviousBuffer,
          mM = 0,
          HM = 0;
        const hM = rM.renderSelf[MM._id],
          JM = this._scene.floatingOriginOffset,
          dM = !zM || iM !== nM.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !nM.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || QM.isFrozen && !dM) HM = (hM ? 1 : 0) + PM;
        else {
          const rM = this.getWorldMatrix();
          if (hM) {
            this._scene.needsPreviousWorldMatrices && (QM.masterMeshPreviousWorldMatrix ? (QM.masterMeshPreviousWorldMatrix.copyToArray(nM.instancesPreviousData, mM), QM.masterMeshPreviousWorldMatrix.jR(rM)) : (QM.masterMeshPreviousWorldMatrix = rM.clone(), QM.masterMeshPreviousWorldMatrix.copyToArray(nM.instancesPreviousData, mM))), rM.copyToArray(nM.instancesData, mM);
            const MM = rM.HOM();
            nM.instancesData[mM + 12] = MM[12] - JM.x, nM.instancesData[mM + 13] = MM[13] - JM.y, nM.instancesData[mM + 14] = MM[14] - JM.z, mM += 16, HM++
          }
          if (aM) {
            if (TM.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && MM.Zh()?.needAlphaBlendingForMesh(MM.getRenderingMesh())) {
              const MM = this._scene.activeCamera.globalPosition;
              for (let rM = 0; rM < aM.length; rM++) {
                const iM = aM[rM];
                iM._distanceToCamera = bM.q.Distance(iM.aY().YOM.centerWorld, MM)
              }
              aM.sort(((MM, rM) => MM._distanceToCamera > rM._distanceToCamera ? -1 : MM._distanceToCamera < rM._distanceToCamera ? 1 : 0))
            }
            for (let MM = 0; MM < aM.length; MM++) {
              const rM = aM[MM],
                iM = rM.getWorldMatrix();
              iM.copyToArray(nM.instancesData, mM), this._scene.needsPreviousWorldMatrices && (rM._previousWorldMatrix ? (rM._previousWorldMatrix.copyToArray(nM.instancesPreviousData, mM), rM._previousWorldMatrix.jR(iM)) : (rM._previousWorldMatrix = iM.clone(), rM._previousWorldMatrix.copyToArray(nM.instancesPreviousData, mM)));
              const OM = iM.HOM();
              nM.instancesData[mM + 12] = OM[12] - JM.x, nM.instancesData[mM + 13] = OM[13] - JM.y, nM.instancesData[mM + 14] = OM[14] - JM.z, mM += 16, HM++
            }
          }
        }
        if (dM) {
          let MM;
          if (zM && zM.dispose(), LM && LM.dispose(), zM = new gM.d(OM, nM.instancesData, !0, 16, !1, !0), nM.instancesBuffer = zM, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.ph().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) MM = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const rM = this._instanceDataStorage.engine.currentRenderPassId;
            MM = this._userInstancedBuffersStorage.renderPasses[rM], MM || (this._userInstancedBuffersStorage.renderPasses[rM] = MM = {})
          }
          MM.world0 = zM.createVertexBuffer("world0", 0, 4), MM.world1 = zM.createVertexBuffer("world1", 4, 4), MM.world2 = zM.createVertexBuffer("world2", 8, 4), MM.world3 = zM.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (LM = new gM.d(OM, nM.instancesPreviousData, !0, 16, !1, !0), nM.instancesPreviousBuffer = LM, MM.previousWorld0 = LM.createVertexBuffer("previousWorld0", 0, 4), MM.previousWorld1 = LM.createVertexBuffer("previousWorld1", 4, 4), MM.previousWorld2 = LM.createVertexBuffer("previousWorld2", 8, 4), MM.previousWorld3 = LM.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (zM.updateDirectly(nM.instancesData, 0, HM), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || LM.updateDirectly(nM.instancesPreviousData, 0, HM));
        this._processInstancedBuffers(aM, hM), jM && void 0 !== SM && (this.Hk()._activeIndices.addCount(MM.indexCount * HM, !1), OM._currentDrawContext && (OM._currentDrawContext.useInstancing = !0), this._bind(MM, jM, SM), this._draw(MM, SM, HM)), !this._scene.needsPreviousWorldMatrices || dM || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || LM.updateDirectly(nM.instancesData, 0, HM)
      }
      _renderWithInstances(MM, rM, iM, OM, SM) {
        const jM = iM.visibleInstances[MM._id],
          aM = jM ? jM.length : 0,
          PM = iM.parent,
          nM = PM.instancesBufferSize,
          QM = 16 * (aM + 1) * 4;
        for (; PM.instancesBufferSize < QM;) PM.instancesBufferSize *= 2;
        return PM.instancesData && nM == PM.instancesBufferSize || (PM.instancesData = new Float32Array(PM.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !PM.instancesPreviousData || nM != PM.instancesBufferSize) && (PM.instancesPreviousData = new Float32Array(PM.instancesBufferSize / 4)), this._updateInstancedBuffers(MM, iM, nM, SM, rM, OM), SM.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(MM, rM, iM, OM) {
        const SM = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Hk()._activeIndices.addCount(MM.indexCount * SM, !1), OM._currentDrawContext && (OM._currentDrawContext.useInstancing = !0), this._bind(MM, iM, rM), this._draw(MM, rM, SM), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, SM) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), OM.unbindInstanceAttributes()
      }
      _processInstancedBuffers(MM, rM) {}
      _processRendering(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = this.Hk(),
          QM = nM.ph();
        if (OM = this._getRenderingFillMode(OM), jM && rM.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(rM, OM, iM, QM), this;
        if (jM) this._renderWithInstances(rM, OM, SM, iM, QM);
        else {
          QM._currentDrawContext && (QM._currentDrawContext.useInstancing = !1);
          let iM = 0;
          SM.renderSelf[rM._id] && (aM && aM(!1, MM.getWorldMatrix(), PM), iM++, this._draw(rM, OM, this._instanceDataStorage.overridenInstanceCount));
          const jM = SM.visibleInstances[rM._id];
          if (jM) {
            const MM = jM.length;
            iM += MM;
            for (let iM = 0; iM < MM; iM++) {
              const MM = jM[iM].getWorldMatrix();
              aM && aM(!0, MM, PM), this._draw(rM, OM)
            }
          }
          nM._activeIndices.addCount(rM.indexCount * iM, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        MM?.instancesBuffer && (rM && MM.instancesBuffer.dispose(), MM.instancesBuffer = null), MM?.instancesPreviousBuffer && (rM && MM.instancesPreviousBuffer.dispose(), MM.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rM in this._instanceDataStorage.renderPasses) {
          const iM = this._instanceDataStorage.renderPasses[rM];
          this._disposeInstanceDataStorageRenderPass(iM, MM)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, MM), this._userInstancedBuffersStorage) {
          for (const rM in this._userInstancedBuffersStorage.vertexBuffers) {
            const iM = this._userInstancedBuffersStorage.vertexBuffers[rM];
            iM && (MM && iM.dispose(), this._userInstancedBuffersStorage.vertexBuffers[rM] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(MM)
      }
      _releaseRenderPassId(MM) {
        const rM = this._instanceDataStorage.renderPasses[MM];
        if (rM && (this._disposeInstanceDataStorageRenderPass(rM, !0), delete this._instanceDataStorage.renderPasses[MM]), this._userInstancedBuffersStorage?.renderPasses) {
          const rM = this._userInstancedBuffersStorage.renderPasses[MM];
          if (rM)
            for (const MM in rM) rM[MM]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[MM]
        }
        const iM = this._userInstancedBuffersStorage?.interleavedBuffers;
        iM?.[MM] && (iM[MM].buffer.dispose(), delete iM[MM])
      }
      _freeze() {
        if (this.iG) {
          for (let MM = 0; MM < this.iG.length; MM++) this._getInstancesRenderList(MM);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const MM in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[MM].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const jM = this._scene.ph(),
          aM = jM.currentRenderPassId;
        if (void 0 !== MM && (jM.currentRenderPassId = MM), OM)(!SM || SM && OM.isInFrustum(this._scene._frustumPlanes)) && this.render(OM, !!rM, iM);
        else
          for (let PM = 0; PM < this.iG.length; PM++) {
            const MM = this.iG[PM];
            (!SM || SM && MM.isInFrustum(this._scene._frustumPlanes)) && this.render(MM, !!rM, iM)
          }
        return void 0 !== MM && (jM.currentRenderPassId = aM), this
      }
      directRender() {
        if (!this.iG) return this;
        for (const MM of this.iG) this.render(MM, !1);
        return this
      }
      render(MM, rM, iM) {
        const OM = this.Hk(),
          SM = OM.ph();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const jM = OM.activeCameras?.length ?? 0,
          aM = jM > 1 && OM.activeCamera === OM.activeCameras[0] || jM <= 1,
          PM = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== SM.currentRenderPassId;
        if (aM && this._checkOcclusionQuery(PM) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const nM = this._getInstancesRenderList(MM._id, !!iM);
        if (nM.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let QM = 0,
          zM = null;
        this.ignoreCameraMaxZ && OM.activeCamera && !OM._isInIntermediateRendering() && (QM = OM.activeCamera.maxZ, zM = OM.activeCamera, OM.activeCamera.maxZ = 0, OM.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const LM = MM.getRenderingMesh(),
          mM = nM.hardwareInstancedRendering[MM._id] || LM.hasThinInstances || !!this._userInstancedBuffersStorage && !MM.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          HM = this._instanceDataStorage,
          hM = MM.Zh();
        if (!hM) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this;
        if (HM.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === hM) {
          if (hM._storeEffectOnSubMeshes && !MM._drawWrapper?._wasPreviouslyReady || !hM._storeEffectOnSubMeshes && !hM._getDrawWrapper()._wasPreviouslyReady) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this
        } else {
          if (hM._storeEffectOnSubMeshes) {
            if (!hM.isReadyForSubMesh(this, MM, mM)) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this
          } else if (!hM.isReady(this, mM)) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = hM
        }
        if (rM) {
          const MM = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === MM.alphaModes.length) SM.setAlphaMode(MM.alphaMode);
          else
            for (let rM = 0; rM < MM.alphaModes.length; rM++) {
              const iM = MM.alphaModes[rM];
              SM.setAlphaMode(void 0 !== iM ? iM : 2, !1, rM)
            }
        }
        let JM;
        JM = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? MM._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const dM = JM?.effect ?? null;
        for (let eM = 0, bM = OM._beforeRenderingMeshStage; eM < bM.length; eM++) {
          bM[eM].action(this, MM, nM, dM)
        }
        if (!JM || !dM) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this;
        const yM = iM || this;
        let lM;
        if (!HM.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const MM = yM._getWorldMatrixDeterminant();
          lM = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), MM < 0 && (lM = lM === sM.c.ClockWiseSideOrientation ? sM.c.CounterClockWiseSideOrientation : sM.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = lM
        }
        const EM = this._internalMeshDataInfo._effectiveMaterial._preBind(JM, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && SM.setDepthWrite(!0);
        const UM = this._internalMeshDataInfo._effectiveMaterial,
          GM = UM.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), mM || this._bind(MM, dM, GM, !1);
        const CM = yM.getWorldMatrix();
        UM._storeEffectOnSubMeshes ? UM.bindForSubMesh(CM, this, MM) : UM.bind(CM, this);
        try {
          DM.c._BindAttachmentsForEffect(SM, dM) && (!UM.backFaceCulling && UM.separateCullingPass && (SM.setState(!0, UM.zOffset, !1, !EM, UM.cullBackFaces, UM.stencil, UM.zOffsetUnits), this._processRendering(this, MM, dM, GM, nM, mM, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), SM.setState(!0, UM.zOffset, !1, EM, UM.cullBackFaces, UM.stencil, UM.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(MM)), this._processRendering(this, MM, dM, GM, nM, mM, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          DM.c._RestoreAttachments(SM)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let eM = 0, bM = OM._afterRenderingMeshStage; eM < bM.length; eM++) {
          bM[eM].action(this, MM, nM, dM)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), 2 !== OM.performancePriority || HM.isFrozen || this._freeze(), this
      }
      _renderRunFollower(MM, rM) {
        const iM = this._scene,
          OM = iM._engine;
        if (OM.isWebGPU || MM._mesh !== this || 0 !== this.instances.length || this.render !== TM.prototype.render) return !1;
        const SM = MM.Zh();
        if (!SM || SM !== iM._cachedMaterial || void 0 === SM._canBindRunFollower) return !1;
        const jM = MM._drawWrapper,
          aM = jM?.effect;
        if (!aM || aM !== iM._cachedEffect || this.visibility !== iM._cachedVisibility || jM._forceRebindOnNextCall) return !1;
        const PM = this.hasThinInstances;
        if (!PM && this._userInstancedBuffersStorage) return !1;
        if (!jM._wasPreviouslyReady || jM._wasPreviouslyUsingInstances !== PM) return !1;
        const nM = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || iM._isInIntermediateRendering() || 0 !== iM._beforeRenderingMeshStage.length || 0 !== iM._afterRenderingMeshStage.length || nM._onBeforeRenderObservable?.hasObservers() || nM._onBeforeBindObservable?.hasObservers() || nM._onAfterRenderObservable?.hasObservers()) return !1;
        const QM = this.occlusionType;
        if (void 0 !== QM && QM !== pM.e.OCCLUSION_TYPE_NONE || !SM._canBindRunFollower(iM, OM, this, MM, aM)) return !1;
        const zM = this._internalAbstractMeshDataInfo,
          LM = zM._isActiveIntermediate;
        LM ? zM._isActiveIntermediate = !1 : zM._isActive = !1;
        const mM = iM.activeCameras?.length ?? 0;
        (mM > 1 && iM.activeCamera === iM.activeCameras[0] || mM <= 1) && this._checkOcclusionQuery(!1);
        const HM = this._getInstancesRenderList(MM._id);
        if (HM.mustReturn) return !0;
        if (!PM && !HM.renderSelf[MM._id]) return LM ? zM._isActiveIntermediate = !0 : zM._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (nM._effectiveMaterial = SM, rM)
          if (1 === SM.alphaModes.length) OM.setAlphaMode(SM.alphaMode);
          else
            for (let JM = 0; JM < SM.alphaModes.length; JM++) {
              const MM = SM.alphaModes[JM];
              OM.setAlphaMode(void 0 !== MM ? MM : 2, !1, JM)
            }
        if (SM.backFaceCulling || null !== SM.sideOrientation || SM._twoSidedLighting) {
          const MM = this._getWorldMatrixDeterminant();
          let rM = SM._getEffectiveOrientation(this);
          MM < 0 && (rM = rM === sM.c.ClockWiseSideOrientation ? sM.c.CounterClockWiseSideOrientation : sM.c.ClockWiseSideOrientation), nM._effectiveSideOrientation = rM
        }
        SM._preBind(jM, nM._effectiveSideOrientation), SM.forceDepthWrite && OM.setDepthWrite(!0);
        const hM = SM.fillMode;
        return PM || this._bind(MM, aM, hM, !1), SM._bindRunFollower(this.getWorldMatrix(), this, MM, aM), this._processRendering(this, MM, aM, hM, HM, PM, this._onBeforeDraw, SM), SM.unbind(), 2 === iM.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(gM.j.MatricesWeightsKind) && (this.isVerticesDataPresent(gM.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const MM = this.getVerticesData(gM.j.MatricesWeightsKind),
          rM = MM.length;
        for (let iM = 0; iM < rM; iM += 4) {
          const rM = MM[iM] + MM[iM + 1] + MM[iM + 2] + MM[iM + 3];
          if (0 === rM) MM[iM] = 1;
          else {
            const OM = 1 / rM;
            MM[iM] *= OM, MM[iM + 1] *= OM, MM[iM + 2] *= OM, MM[iM + 3] *= OM
          }
        }
        this.setVerticesData(gM.j.MatricesWeightsKind, MM)
      }
      _normalizeSkinWeightsAndExtra() {
        const MM = this.getVerticesData(gM.j.MatricesWeightsExtraKind),
          rM = this.getVerticesData(gM.j.MatricesWeightsKind),
          iM = rM.length;
        for (let OM = 0; OM < iM; OM += 4) {
          let iM = rM[OM] + rM[OM + 1] + rM[OM + 2] + rM[OM + 3];
          if (iM += MM[OM] + MM[OM + 1] + MM[OM + 2] + MM[OM + 3], 0 === iM) rM[OM] = 1;
          else {
            const SM = 1 / iM;
            rM[OM] *= SM, rM[OM + 1] *= SM, rM[OM + 2] *= SM, rM[OM + 3] *= SM, MM[OM] *= SM, MM[OM + 1] *= SM, MM[OM + 2] *= SM, MM[OM + 3] *= SM
          }
        }
        this.setVerticesData(gM.j.MatricesWeightsKind, rM), this.setVerticesData(gM.j.MatricesWeightsKind, MM)
      }
      validateSkinning() {
        const MM = this.getVerticesData(gM.j.MatricesWeightsExtraKind),
          rM = this.getVerticesData(gM.j.MatricesWeightsKind);
        if (null === rM || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          aL: "not skinned"
        };
        const iM = rM.length;
        let OM = 0,
          SM = 0,
          jM = 0,
          aM = 0;
        const PM = null === MM ? 4 : 8,
          nM = [];
        for (let HM = 0; HM <= PM; HM++) nM[HM] = 0;
        for (let HM = 0; HM < iM; HM += 4) {
          let iM = rM[HM],
            QM = iM,
            zM = 0 === QM ? 0 : 1;
          for (let SM = 1; SM < PM; SM++) {
            const jM = SM < 4 ? rM[HM + SM] : MM[HM + SM - 4];
            jM > iM && OM++, 0 !== jM && zM++, QM += jM, iM = jM
          }
          if (nM[zM]++, zM > jM && (jM = zM), 0 === QM) SM++;
          else {
            const iM = 1 / QM;
            let OM = 0;
            for (let SM = 0; SM < PM; SM++) OM += SM < 4 ? Math.abs(rM[HM + SM] - rM[HM + SM] * iM) : Math.abs(MM[HM + SM - 4] - MM[HM + SM - 4] * iM);
            OM > .001 && aM++
          }
        }
        const QM = this.skeleton.bones.length,
          zM = this.getVerticesData(gM.j.MatricesIndicesKind),
          LM = this.getVerticesData(gM.j.MatricesIndicesExtraKind);
        let mM = 0;
        for (let HM = 0; HM < iM; HM += 4)
          for (let MM = 0; MM < PM; MM++) {
            const rM = MM < 4 ? zM[HM + MM] : LM[HM + MM - 4];
            (rM >= QM || rM < 0) && mM++
          }
        return {
          skinned: !0,
          valid: 0 === SM && 0 === aM && 0 === mM,
          aL: "Number of Weights = " + iM / 4 + "\nMaximum influences = " + jM + "\nMissing Weights = " + SM + "\nNot Sorted = " + OM + "\nNot Normalized = " + aM + "\nWeightCounts = [" + nM + "]\nNumber of bones = " + QM + "\nBad Bone Indices = " + mM
        }
      }
      _checkDelayState() {
        const MM = this.Hk();
        return this._geometry ? this._geometry.load(MM) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(MM)), this
      }
      _queueLoad(MM) {
        MM.addPendingData(this);
        const rM = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const iM = await MM._loadDelayedFileAsync(this.delayLoadingFile, rM, !0);
            iM instanceof ArrayBuffer ? this._delayLoadingFunction(iM, this) : this._delayLoadingFunction(JSON.parse(iM), this);
            for (const MM of this.instances) MM.refreshBoundingInfo(), MM._syncSubMeshes();
            this.delayLoadState = 1, MM.removePendingData(this)
          } catch (iM) {
            MM.removePendingData(this), MM.xG || fM.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${iM}`)
          }
        })(), this
      }
      isInFrustum(MM) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(MM) && (this._checkDelayState(), !0))
      }
      setMaterialById(MM) {
        const rM = this.Hk().materials;
        let iM;
        for (iM = rM.length - 1; iM > -1; iM--)
          if (rM[iM].id === MM) return this.material = rM[iM], this;
        const OM = this.Hk().multiMaterials;
        for (iM = OM.length - 1; iM > -1; iM--)
          if (OM[iM].id === MM) return this.material = OM[iM], this;
        return this
      }
      getAnimatables() {
        const MM = [];
        return this.material && MM.push(this.material), this.skeleton && MM.push(this.skeleton), MM
      }
      bakeTransformIntoVertices(MM) {
        if (!this.isVerticesDataPresent(gM.j.PositionKind)) return this;
        const rM = this.iG.splice(0);
        this._resetPointsArrayCache();
        let iM = this.getVerticesData(gM.j.PositionKind);
        const OM = bM.q.Zero();
        let SM;
        for (SM = 0; SM < iM.length; SM += 3) bM.q.TransformCoordinatesFromFloatsToRef(iM[SM], iM[SM + 1], iM[SM + 2], MM, OM).toArray(iM, SM);
        if (this.setVerticesData(gM.j.PositionKind, iM, this.getVertexBuffer(gM.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(gM.j.NormalKind)) {
          for (iM = this.getVerticesData(gM.j.NormalKind), SM = 0; SM < iM.length; SM += 3) bM.q.TransformNormalFromFloatsToRef(iM[SM], iM[SM + 1], iM[SM + 2], MM, OM).normalize().toArray(iM, SM);
          this.setVerticesData(gM.j.NormalKind, iM, this.getVertexBuffer(gM.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(gM.j.TangentKind)) {
          for (iM = this.getVerticesData(gM.j.TangentKind), SM = 0; SM < iM.length; SM += 4) bM.q.TransformNormalFromFloatsToRef(iM[SM], iM[SM + 1], iM[SM + 2], MM, OM).normalize().toArray(iM, SM);
          this.setVerticesData(gM.j.TangentKind, iM, this.getVertexBuffer(gM.j.TangentKind).isUpdatable())
        }
        return MM.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.iG = rM, this
      }
      bakeCurrentTransformIntoVertices() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(MM), this
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (rM && void 0 === rM._addToSceneRootNodes) {
          const iM = rM;
          return qM.source = this, qM.doNotCloneChildren = iM.doNotCloneChildren, qM.clonePhysicsImpostor = iM.clonePhysicsImpostor, qM.cloneThinInstances = iM.cloneThinInstances, new TM(MM, this.Hk(), qM)
        }
        return new TM(MM, this.Hk(), rM, this, iM, OM)
      }
      dispose(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const iM = this._internalMeshDataInfo;
        if (iM._onBeforeDrawObservable && iM._onBeforeDrawObservable.clear(), iM._onBeforeBindObservable && iM._onBeforeBindObservable.clear(), iM._onBeforeRenderObservable && iM._onBeforeRenderObservable.clear(), iM._onAfterRenderObservable && iM._onAfterRenderObservable.clear(), iM._onBetweenPassObservable && iM._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (iM.meshMap)
            for (const MM in iM.meshMap) {
              const rM = iM.meshMap[MM];
              rM && (rM._internalMeshDataInfo._source = null, iM.meshMap[MM] = void 0)
            }
          iM._source && iM._source._internalMeshDataInfo.meshMap && (iM._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const MM = this.Hk().meshes;
          for (const rM of MM) {
            const MM = rM;
            MM._internalMeshDataInfo && MM._internalMeshDataInfo._source && MM._internalMeshDataInfo._source === this && (MM._internalMeshDataInfo._source = null)
          }
        }
        iM._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(MM, rM)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(MM, rM, iM, OM, SM, jM) {
        let aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          PM = arguments.length > 7 ? arguments[7] : void 0;
        const nM = this.Hk();
        return (0, EM.p)(MM, (MM => {
          const PM = MM.width,
            nM = MM.height,
            QM = this.ph().createCanvas(PM, nM).getContext("2d");
          QM.drawImage(MM, 0, 0);
          const zM = QM.getImageData(0, 0, PM, nM).data;
          this.applyDisplacementMapFromBuffer(zM, PM, nM, rM, iM, SM, jM, aM), OM && OM(this)
        }), PM || (() => {}), nM.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(MM, rM, iM, OM, SM, jM, aM) {
        let PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(gM.j.PositionKind) || !this.isVerticesDataPresent(gM.j.NormalKind) || !this.isVerticesDataPresent(gM.j.UVKind)) return fM.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const nM = this.getVerticesData(gM.j.PositionKind, !0, !0),
          QM = this.getVerticesData(gM.j.NormalKind),
          zM = this.getVerticesData(gM.j.UVKind);
        let LM = bM.q.Zero();
        const mM = bM.q.Zero(),
          HM = bM.o.Zero();
        jM = jM || bM.o.Zero(), aM = aM || new bM.o(1, 1);
        for (let hM = 0; hM < nM.length; hM += 3) {
          bM.q.FromArrayToRef(nM, hM, LM), bM.q.FromArrayToRef(QM, hM, mM), bM.o.FromArrayToRef(zM, hM / 3 * 2, HM);
          const PM = 4 * ((Math.abs(HM.x * aM.x + jM.x % 1) * (rM - 1) % rM | 0) + (Math.abs(HM.y * aM.y + jM.y % 1) * (iM - 1) % iM | 0) * rM),
            JM = .3 * (MM[PM] / 255) + .59 * (MM[PM + 1] / 255) + .11 * (MM[PM + 2] / 255);
          mM.normalize(), mM.scaleInPlace(OM + (SM - OM) * JM), LM = LM.add(mM), LM.toArray(nM, hM)
        }
        return uM.d.ComputeNormals(nM, this.hOM(), QM), PM ? (this.setVerticesData(gM.j.PositionKind, nM), this.setVerticesData(gM.j.NormalKind, QM), this.setVerticesData(gM.j.UVKind, zM)) : (this.updateVerticesData(gM.j.PositionKind, nM), this.updateVerticesData(gM.j.NormalKind, QM)), this
      }
      _getFlattenedNormals(MM, rM) {
        const iM = new Float32Array(3 * MM.length);
        let OM = 0;
        const SM = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let jM = 0; jM < MM.length; jM += 3) {
          const aM = bM.q.FromArray(rM, 3 * MM[jM]),
            PM = bM.q.FromArray(rM, 3 * MM[jM + 1]),
            nM = bM.q.FromArray(rM, 3 * MM[jM + 2]),
            QM = aM.subtract(PM),
            zM = nM.subtract(PM),
            LM = bM.q.Normalize(bM.q.Cross(QM, zM));
          SM && LM.scaleInPlace(-1);
          for (let MM = 0; MM < 3; MM++) iM[OM++] = LM.x, iM[OM++] = LM.y, iM[OM++] = LM.z
        }
        return iM
      }
      _convertToUnIndexedMesh() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = this.getVerticesDataKinds().filter((MM => !this.getVertexBuffer(MM)?.getIsInstanced())),
          iM = this.hOM(!1, !0),
          OM = {},
          SM = (MM, rM) => {
            const OM = new Float32Array(iM.length * rM);
            let SM = 0;
            for (let jM = 0; jM < iM.length; jM++)
              for (let aM = 0; aM < rM; aM++) OM[SM++] = MM[iM[jM] * rM + aM];
            return OM
          },
          jM = this.aY(),
          aM = this.geometry ? this.iG.slice(0) : [];
        for (const PM of rM) OM[PM] = this.getVerticesData(PM);
        for (const PM of rM) {
          const rM = this.getVertexBuffer(PM),
            jM = rM.getSize();
          if (MM && PM === gM.j.NormalKind) {
            const MM = this._getFlattenedNormals(iM, OM[gM.j.PositionKind]);
            this.setVerticesData(gM.j.NormalKind, MM, rM.isUpdatable(), jM)
          } else this.setVerticesData(PM, SM(OM[PM], jM), rM.isUpdatable(), jM)
        }
        if (this.morphTargetManager) {
          for (let rM = 0; rM < this.morphTargetManager.numTargets; rM++) {
            const OM = this.morphTargetManager.getTarget(rM),
              jM = OM.getPositions();
            OM.XaM(SM(jM, 3));
            const aM = OM.getNormals();
            aM && OM.setNormals(MM ? this._getFlattenedNormals(iM, jM) : SM(aM, 3));
            const PM = OM.getTangents();
            PM && OM.setTangents(SM(PM, 3));
            const nM = OM.getUVs();
            nM && OM.setUVs(SM(nM, 2));
            const QM = OM.getColors();
            QM && OM.setColors(SM(QM, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let PM = 0; PM < iM.length; PM++) iM[PM] = PM;
        this.setIndices(iM), this._unIndexed = !0, this.releaseSubMeshes();
        for (const PM of aM) {
          const MM = PM.aY();
          WM.e.AddToMesh(PM.materialIndex, PM.indexStart, PM.indexCount, PM.indexStart, PM.indexCount, this).setBoundingInfo(MM)
        }
        return this.setBoundingInfo(jM), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = uM.d.ExtractFromMesh(this);
        let iM;
        if (MM && this.isVerticesDataPresent(gM.j.NormalKind) && rM.normals) {
          for (iM = 0; iM < rM.normals.length; iM++) rM.normals[iM] *= -1;
          this.setVerticesData(gM.j.NormalKind, rM.normals, this.isVertexBufferUpdatable(gM.j.NormalKind))
        }
        if (rM.indices) {
          let MM;
          for (iM = 0; iM < rM.indices.length; iM += 3) MM = rM.indices[iM + 1], rM.indices[iM + 1] = rM.indices[iM + 2], rM.indices[iM + 2] = MM;
          this.setIndices(rM.indices, null, this.isVertexBufferUpdatable(gM.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const rM = uM.d.ExtractFromMesh(this),
          iM = rM.indices && !Array.isArray(rM.indices) && Array.from ? Array.from(rM.indices) : rM.indices,
          OM = rM.positions && !Array.isArray(rM.positions) && Array.from ? Array.from(rM.positions) : rM.positions,
          SM = rM.uvs && !Array.isArray(rM.uvs) && Array.from ? Array.from(rM.uvs) : rM.uvs,
          jM = rM.normals && !Array.isArray(rM.normals) && Array.from ? Array.from(rM.normals) : rM.normals;
        if (iM && OM) {
          rM.indices = iM, rM.positions = OM, SM && (rM.uvs = SM), jM && (rM.normals = jM);
          const aM = MM + 1,
            PM = [];
          for (let MM = 0; MM < aM + 1; MM++) PM[MM] = [];
          let nM, QM;
          const zM = new bM.q(0, 0, 0),
            LM = new bM.q(0, 0, 0),
            mM = new bM.o(0, 0),
            HM = [],
            hM = [],
            JM = [];
          let dM, yM, lM, EM = OM.length;
          SM && (yM = SM.length), jM && (lM = jM.length);
          for (let MM = 0; MM < iM.length; MM += 3) {
            hM[0] = iM[MM], hM[1] = iM[MM + 1], hM[2] = iM[MM + 2];
            for (let MM = 0; MM < 3; MM++)
              if (nM = hM[MM], QM = hM[(MM + 1) % 3], void 0 === JM[nM] && void 0 === JM[QM] ? (JM[nM] = [], JM[QM] = []) : (void 0 === JM[nM] && (JM[nM] = []), void 0 === JM[QM] && (JM[QM] = [])), void 0 === JM[nM][QM] && void 0 === JM[QM][nM]) {
                JM[nM][QM] = [], zM.x = (OM[3 * QM] - OM[3 * nM]) / aM, zM.y = (OM[3 * QM + 1] - OM[3 * nM + 1]) / aM, zM.z = (OM[3 * QM + 2] - OM[3 * nM + 2]) / aM, jM && (LM.x = (jM[3 * QM] - jM[3 * nM]) / aM, LM.y = (jM[3 * QM + 1] - jM[3 * nM + 1]) / aM, LM.z = (jM[3 * QM + 2] - jM[3 * nM + 2]) / aM), SM && (mM.x = (SM[2 * QM] - SM[2 * nM]) / aM, mM.y = (SM[2 * QM + 1] - SM[2 * nM + 1]) / aM), JM[nM][QM].push(nM);
                for (let MM = 1; MM < aM; MM++) JM[nM][QM].push(OM.length / 3), OM[EM++] = OM[3 * nM] + MM * zM.x, OM[EM++] = OM[3 * nM + 1] + MM * zM.y, OM[EM++] = OM[3 * nM + 2] + MM * zM.z, jM && (jM[lM++] = jM[3 * nM] + MM * LM.x, jM[lM++] = jM[3 * nM + 1] + MM * LM.y, jM[lM++] = jM[3 * nM + 2] + MM * LM.z), SM && (SM[yM++] = SM[2 * nM] + MM * mM.x, SM[yM++] = SM[2 * nM + 1] + MM * mM.y);
                JM[nM][QM].push(QM), JM[QM][nM] = [], dM = JM[nM][QM].length;
                for (let MM = 0; MM < dM; MM++) JM[QM][nM][MM] = JM[nM][QM][dM - 1 - MM]
              } PM[0][0] = iM[MM], PM[1][0] = JM[iM[MM]][iM[MM + 1]][1], PM[1][1] = JM[iM[MM]][iM[MM + 2]][1];
            for (let rM = 2; rM < aM; rM++) {
              PM[rM][0] = JM[iM[MM]][iM[MM + 1]][rM], PM[rM][rM] = JM[iM[MM]][iM[MM + 2]][rM], zM.x = (OM[3 * PM[rM][rM]] - OM[3 * PM[rM][0]]) / rM, zM.y = (OM[3 * PM[rM][rM] + 1] - OM[3 * PM[rM][0] + 1]) / rM, zM.z = (OM[3 * PM[rM][rM] + 2] - OM[3 * PM[rM][0] + 2]) / rM, jM && (LM.x = (jM[3 * PM[rM][rM]] - jM[3 * PM[rM][0]]) / rM, LM.y = (jM[3 * PM[rM][rM] + 1] - jM[3 * PM[rM][0] + 1]) / rM, LM.z = (jM[3 * PM[rM][rM] + 2] - jM[3 * PM[rM][0] + 2]) / rM), SM && (mM.x = (SM[2 * PM[rM][rM]] - SM[2 * PM[rM][0]]) / rM, mM.y = (SM[2 * PM[rM][rM] + 1] - SM[2 * PM[rM][0] + 1]) / rM);
              for (let MM = 1; MM < rM; MM++) PM[rM][MM] = OM.length / 3, OM[EM++] = OM[3 * PM[rM][0]] + MM * zM.x, OM[EM++] = OM[3 * PM[rM][0] + 1] + MM * zM.y, OM[EM++] = OM[3 * PM[rM][0] + 2] + MM * zM.z, jM && (jM[lM++] = jM[3 * PM[rM][0]] + MM * LM.x, jM[lM++] = jM[3 * PM[rM][0] + 1] + MM * LM.y, jM[lM++] = jM[3 * PM[rM][0] + 2] + MM * LM.z), SM && (SM[yM++] = SM[2 * PM[rM][0]] + MM * mM.x, SM[yM++] = SM[2 * PM[rM][0] + 1] + MM * mM.y)
            }
            PM[aM] = JM[iM[MM + 1]][iM[MM + 2]], HM.push(PM[0][0], PM[1][0], PM[1][1]);
            for (let MM = 1; MM < aM; MM++) {
              let rM;
              for (rM = 0; rM < MM; rM++) HM.push(PM[MM][rM], PM[MM + 1][rM], PM[MM + 1][rM + 1]), HM.push(PM[MM][rM], PM[MM + 1][rM + 1], PM[MM][rM + 1]);
              HM.push(PM[MM][rM], PM[MM + 1][rM], PM[MM + 1][rM + 1])
            }
          }
          rM.indices = HM, rM.applyToMesh(this, this.isVertexBufferUpdatable(gM.j.PositionKind))
        } else fM.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const MM = uM.d.ExtractFromMesh(this),
          rM = MM.uvs,
          iM = MM.indices,
          OM = MM.positions,
          SM = MM.colors,
          jM = MM.matricesIndices,
          aM = MM.matricesWeights,
          PM = MM.matricesIndicesExtra,
          nM = MM.matricesWeightsExtra;
        if (void 0 === iM || void 0 === OM || null === iM || null === OM) fM.e.Warn("VertexData contains empty entries");
        else {
          const QM = [],
            zM = [],
            LM = [],
            mM = [],
            HM = [],
            hM = [],
            JM = [],
            dM = [];
          let yM, lM = 0;
          const EM = {};
          let UM, GM;
          for (let MM = 0; MM < iM.length; MM += 3) {
            GM = [iM[MM], iM[MM + 1], iM[MM + 2]], yM = [];
            for (let MM = 0; MM < 3; MM++) {
              yM[MM] = "";
              for (let rM = 0; rM < 3; rM++) Math.abs(OM[3 * GM[MM] + rM]) < 1e-8 && (OM[3 * GM[MM] + rM] = 0), yM[MM] += OM[3 * GM[MM] + rM] + "|"
            }
            if (yM[0] != yM[1] && yM[0] != yM[2] && yM[1] != yM[2])
              for (let MM = 0; MM < 3; MM++) {
                if (UM = EM[yM[MM]], void 0 === UM) {
                  EM[yM[MM]] = lM, UM = lM++;
                  for (let rM = 0; rM < 3; rM++) QM.push(OM[3 * GM[MM] + rM]);
                  if (null !== SM && void 0 !== SM)
                    for (let rM = 0; rM < 4; rM++) mM.push(SM[4 * GM[MM] + rM]);
                  if (null !== rM && void 0 !== rM)
                    for (let iM = 0; iM < 2; iM++) LM.push(rM[2 * GM[MM] + iM]);
                  if (null !== jM && void 0 !== jM)
                    for (let rM = 0; rM < 4; rM++) HM.push(jM[4 * GM[MM] + rM]);
                  if (null !== aM && void 0 !== aM)
                    for (let rM = 0; rM < 4; rM++) hM.push(aM[4 * GM[MM] + rM]);
                  if (null !== PM && void 0 !== PM)
                    for (let rM = 0; rM < 4; rM++) JM.push(PM[4 * GM[MM] + rM]);
                  if (null !== nM && void 0 !== nM)
                    for (let rM = 0; rM < 4; rM++) dM.push(nM[4 * GM[MM] + rM])
                }
                zM.push(UM)
              }
          }
          const CM = [];
          uM.d.ComputeNormals(QM, zM, CM), MM.positions = QM, MM.indices = zM, MM.normals = CM, null !== rM && void 0 !== rM && (MM.uvs = LM), null !== SM && void 0 !== SM && (MM.colors = mM), null !== jM && void 0 !== jM && (MM.matricesIndices = HM), null !== aM && void 0 !== aM && (MM.matricesWeights = hM), null !== PM && void 0 !== PM && (MM.matricesIndicesExtra = JM), null !== aM && void 0 !== aM && (MM.matricesWeightsExtra = dM), MM.applyToMesh(this, this.isVertexBufferUpdatable(gM.j.PositionKind))
        }
      }
      static _instancedMeshFactory(MM, rM) {
        throw (0, NM.n)("InstancedMesh")
      }
      static _PhysicsImpostorParser(MM, rM, iM) {
        throw (0, NM.n)("PhysicsImpostor")
      }
      createInstance(MM) {
        const rM = TM._instancedMeshFactory(MM, this);
        return rM.parent = this.parent, rM
      }
      synchronizeInstances() {
        for (let MM = 0; MM < this.instances.length; MM++) {
          this.instances[MM]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(MM) {
        const rM = this.hOM(),
          iM = this.getVerticesData(gM.j.PositionKind);
        if (!iM || !rM) return this;
        const OM = [];
        for (let jM = 0; jM < iM.length; jM += 3) OM.push(bM.q.FromArray(iM, jM));
        const SM = [];
        return lM.c.SyncAsyncForLoop(OM.length, 40, (MM => {
          const rM = OM.length - 1 - MM,
            iM = OM[rM];
          for (let jM = 0; jM < rM; ++jM) {
            const MM = OM[jM];
            if (iM.equals(MM)) {
              SM[rM] = jM;
              break
            }
          }
        }), (() => {
          for (let MM = 0; MM < rM.length; ++MM) rM[MM] = SM[rM[MM]] || rM[MM];
          const iM = this.iG.slice(0);
          this.setIndices(rM), this.iG = iM, MM && MM(this)
        })), this
      }
      serialize() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        MM.name = this.name, MM.id = this.id, MM.uniqueId = this.uniqueId, MM.type = this.getClassName(), GM.d && GM.d.HasTags(this) && (MM.tags = GM.d.GetTags(this)), MM.position = this.position.HOM(), this.rotationQuaternion ? MM.rotationQuaternion = this.rotationQuaternion.HOM() : this.rotation && (MM.rotation = this.rotation.HOM()), MM.UL = this.UL.HOM(), this._postMultiplyPivotMatrix ? MM.pivotMatrix = this.getPivotMatrix().HOM() : MM.localMatrix = this.getPivotMatrix().HOM(), MM.isEnabled = this.isEnabled(!1), MM.isVisible = this.isVisible, MM.infiniteDistance = this.infiniteDistance, MM.pickable = this.AJ, MM.receiveShadows = this.receiveShadows, MM.billboardMode = this.billboardMode, MM.visibility = this.visibility, MM.Wh = this.Wh, MM.checkCollisions = this.checkCollisions, MM.ellipsoid = this.ellipsoid.HOM(), MM.ellipsoidOffset = this.ellipsoidOffset.HOM(), MM.kh = this.kh, MM.isBlocker = this.isBlocker, MM.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (MM.Yk = !0), this.parent && this.parent._serializeAsParent(MM), MM.isUnIndexed = this.isUnIndexed;
        const rM = this._geometry;
        if (rM && this.iG) {
          MM.geometryUniqueId = rM.uniqueId, MM.geometryId = rM.id, MM.iG = [];
          for (let rM = 0; rM < this.iG.length; rM++) {
            const iM = this.iG[rM];
            MM.iG.push({
              materialIndex: iM.materialIndex,
              verticesStart: iM.verticesStart,
              verticesCount: iM.verticesCount,
              indexStart: iM.indexStart,
              indexCount: iM.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (MM.materialUniqueId = this.material.uniqueId, MM.materialId = this.material.id) : (this.material = null, MM.materialUniqueId = this._scene.defaultMaterial.uniqueId, MM.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (MM.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (MM.skeletonId = this.skeleton.id, MM.skeletonUniqueId = this.skeleton.uniqueId, MM.numBoneInfluencers = this.numBoneInfluencers), this.Hk()._getComponent(AM.e.NAME_PHYSICSENGINE)) {
          const rM = this.getPhysicsImpostor?.();
          rM && (MM.physicsMass = rM.getParam("vz"), MM.physicsFriction = rM.getParam("friction"), MM.physicsRestitution = rM.getParam("vz"), MM.physicsImpostor = rM.type)
        }
        this.metadata && (MM.metadata = this.metadata), 0 !== this.meshBlendingTag && (MM.meshBlendingTag = this.meshBlendingTag), MM.instances = [];
        for (let iM = 0; iM < this.instances.length; iM++) {
          const rM = this.instances[iM];
          if (rM.doNotSerialize) continue;
          const OM = {
            name: rM.name,
            id: rM.id,
            isEnabled: rM.isEnabled(!1),
            isVisible: rM.isVisible,
            AJ: rM.AJ,
            checkCollisions: rM.checkCollisions,
            position: rM.position.HOM(),
            UL: rM.UL.HOM()
          };
          if (rM.parent && rM.parent._serializeAsParent(OM), rM.rotationQuaternion ? OM.rotationQuaternion = rM.rotationQuaternion.HOM() : rM.rotation && (OM.rotation = rM.rotation.HOM()), this.Hk()._getComponent(AM.e.NAME_PHYSICSENGINE)) {
            const MM = rM.getPhysicsImpostor?.();
            MM && (OM.physicsMass = MM.getParam("vz"), OM.physicsFriction = MM.getParam("friction"), OM.physicsRestitution = MM.getParam("vz"), OM.physicsImpostor = MM.type)
          }
          rM.metadata && (OM.metadata = rM.metadata), rM.actionManager && (OM.actions = rM.actionManager.serialize(rM.name)), MM.instances.push(OM), oM.b.AppendSerializedAnimations(rM, OM), OM.Ld = rM.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (MM.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.krM
          }, this._userThinInstanceBuffersStorage)) {
          const rM = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const MM in this._userThinInstanceBuffersStorage.data) rM.data[MM] = Array.from(this._userThinInstanceBuffersStorage.data[MM]), rM.sizes[MM] = this._userThinInstanceBuffersStorage.sizes[MM], rM.strides[MM] = this._userThinInstanceBuffersStorage.strides[MM];
          MM.thinInstances.userThinInstance = rM
        }
        return oM.b.AppendSerializedAnimations(this, MM), MM.Ld = this.serializeAnimationRanges(), MM.layerMask = this.layerMask, MM.alphaIndex = this.alphaIndex, MM.hasVertexAlpha = this.hasVertexAlpha, MM.overlayAlpha = this.overlayAlpha, MM.overlayColor = this.overlayColor.HOM(), MM.renderOverlay = this.renderOverlay, MM.applyFog = this.applyFog, this.actionManager && (MM.actions = this.actionManager.serialize(this.name)), MM
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const MM = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (MM && MM.vertexCount) {
          if (MM.vertexCount !== this.getTotalVertices()) return fM.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (MM.isUsingTextureForTargets) return;
          for (let rM = 0; rM < MM.numInfluencers; rM++) {
            const iM = MM.getActiveTarget(rM),
              OM = iM.getPositions();
            if (!OM) return void fM.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(gM.j.PositionKind + rM, OM, !1, 3);
            const SM = iM.getNormals();
            SM && this.geometry.setVerticesData(gM.j.NormalKind + rM, SM, !1, 3);
            const jM = iM.getTangents();
            jM && this.geometry.setVerticesData(gM.j.TangentKind + rM, jM, !1, 3);
            const aM = iM.getUVs();
            aM && this.geometry.setVerticesData(gM.j.UVKind + "_" + rM, aM, !1, 2);
            const PM = iM.getUV2s();
            PM && this.geometry.setVerticesData(gM.j.UV2Kind + "_" + rM, PM, !1, 2);
            const nM = iM.getColors();
            nM && this.geometry.setVerticesData(gM.j.ColorKind + rM, nM, !1, 4)
          }
        } else {
          let MM = 0;
          for (; this.geometry.isVerticesDataPresent(gM.j.PositionKind + MM);) this.geometry.removeVerticesData(gM.j.PositionKind + MM), this.geometry.isVerticesDataPresent(gM.j.NormalKind + MM) && this.geometry.removeVerticesData(gM.j.NormalKind + MM), this.geometry.isVerticesDataPresent(gM.j.TangentKind + MM) && this.geometry.removeVerticesData(gM.j.TangentKind + MM), this.geometry.isVerticesDataPresent(gM.j.UVKind + "_" + MM) && this.geometry.removeVerticesData(gM.j.UVKind + "_" + MM), this.geometry.isVerticesDataPresent(gM.j.UV2Kind + "_" + MM) && this.geometry.removeVerticesData(gM.j.UV2Kind + "_" + MM), this.geometry.isVerticesDataPresent(gM.j.ColorKind + MM) && this.geometry.removeVerticesData(gM.j.ColorKind + MM), MM++
        }
      }
      static Parse(MM, rM, iM) {
        let OM, SM = !1;
        if (MM.type && "LinesMesh" === MM.type ? OM = TM._LinesMeshParser(MM, rM) : MM.type && "GroundMesh" === MM.type ? OM = TM._GroundMeshParser(MM, rM) : MM.type && "GoldbergMesh" === MM.type ? OM = TM._GoldbergMeshParser(MM, rM) : MM.type && "GreasedLineMesh" === MM.type ? OM = TM._GreasedLineMeshParser(MM, rM) : MM.type && "TrailMesh" === MM.type ? OM = TM._TrailMeshParser(MM, rM) : MM.type && "GaussianSplattingMesh" === MM.type ? (OM = MM._isCompound ? TM._GaussianSplattingCompoundMeshParser(MM, rM) : TM._GaussianSplattingMeshParser(MM, rM), SM = !0) : MM.type && "GaussianSplattingPartProxyMesh" === MM.type ? (OM = TM._GaussianSplattingPartProxyMeshParser(MM, rM), SM = !0) : OM = new TM(MM.name, rM), OM.id = MM.id, OM._waitingParsedUniqueId = MM.uniqueId, GM.d && GM.d.AddTagsTo(OM, MM.tags), OM.position = bM.q.FromArray(MM.position), void 0 !== MM.metadata && (OM.metadata = MM.metadata), void 0 !== MM.meshBlendingTag && (OM.meshBlendingTag = MM.meshBlendingTag), MM.rotationQuaternion ? OM.rotationQuaternion = bM.h.FromArray(MM.rotationQuaternion) : MM.rotation && (OM.rotation = bM.q.FromArray(MM.rotation)), OM.UL = bM.q.FromArray(MM.UL), MM.localMatrix ? OM.setPreTransformMatrix(bM.d.FromArray(MM.localMatrix)) : MM.pivotMatrix && OM.setPivotMatrix(bM.d.FromArray(MM.pivotMatrix)), OM.kR(MM.isEnabled), OM.isVisible = MM.isVisible, OM.infiniteDistance = MM.infiniteDistance, OM.Wh = !!MM.Wh, OM.showBoundingBox = MM.showBoundingBox, OM.showSubMeshesBoundingBox = MM.showSubMeshesBoundingBox, void 0 !== MM.applyFog && (OM.applyFog = MM.applyFog), void 0 !== MM.pickable && (OM.AJ = MM.pickable), void 0 !== MM.alphaIndex && (OM.alphaIndex = MM.alphaIndex), OM.receiveShadows = MM.receiveShadows, void 0 !== MM.billboardMode && (OM.billboardMode = MM.billboardMode), void 0 !== MM.visibility && (OM.visibility = MM.visibility), OM.checkCollisions = MM.checkCollisions, OM.kh = !!MM.kh, MM.ellipsoid && (OM.ellipsoid = bM.q.FromArray(MM.ellipsoid)), MM.ellipsoidOffset && (OM.ellipsoidOffset = bM.q.FromArray(MM.ellipsoidOffset)), null != MM.overrideMaterialSideOrientation && (OM.sideOrientation = MM.overrideMaterialSideOrientation), void 0 !== MM.sideOrientation && (OM.sideOrientation = MM.sideOrientation), void 0 !== MM.isBlocker && (OM.isBlocker = MM.isBlocker), OM._shouldGenerateFlatShading = MM.useFlatShading, MM.Yk && (OM._waitingData.Yk = MM.Yk), void 0 !== MM.parentId && (OM._waitingParentId = MM.parentId), void 0 !== MM.parentInstanceIndex && (OM._waitingParentInstanceIndex = MM.parentInstanceIndex), void 0 !== MM.actions && (OM._waitingData.actions = MM.actions), void 0 !== MM.overlayAlpha && (OM.overlayAlpha = MM.overlayAlpha), void 0 !== MM.overlayColor && (OM.overlayColor = wM.d.FromArray(MM.overlayColor)), void 0 !== MM.renderOverlay && (OM.renderOverlay = MM.renderOverlay), OM.isUnIndexed = !!MM.isUnIndexed, OM.hasVertexAlpha = MM.hasVertexAlpha, MM.delayLoadingFile ? (OM.delayLoadState = 4, OM.delayLoadingFile = iM + MM.delayLoadingFile, OM.buildBoundingInfo(bM.q.FromArray(MM.boundingBoxMinimum), bM.q.FromArray(MM.boundingBoxMaximum)), MM._binaryInfo && (OM._binaryInfo = MM._binaryInfo), OM._delayInfo = [], MM.hasUVs && OM._delayInfo.push(gM.j.UVKind), MM.hasUVs2 && OM._delayInfo.push(gM.j.UV2Kind), MM.hasUVs3 && OM._delayInfo.push(gM.j.UV3Kind), MM.hasUVs4 && OM._delayInfo.push(gM.j.UV4Kind), MM.hasUVs5 && OM._delayInfo.push(gM.j.UV5Kind), MM.hasUVs6 && OM._delayInfo.push(gM.j.UV6Kind), MM.hasColors && OM._delayInfo.push(gM.j.ColorKind), MM.hasMatricesIndices && OM._delayInfo.push(gM.j.MatricesIndicesKind), MM.hasMatricesWeights && OM._delayInfo.push(gM.j.MatricesWeightsKind), OM._delayLoadingFunction = RM.e._ImportGeometry, ZM.c.ForceFullSceneLoadingForIncremental && OM._checkDelayState()) : SM || RM.e._ImportGeometry(MM, OM), MM.materialUniqueId ? OM._waitingMaterialId = MM.materialUniqueId : MM.materialId && (OM._waitingMaterialId = MM.materialId), MM.morphTargetManagerId > -1 && (OM._waitingMorphTargetManagerId = MM.morphTargetManagerId), void 0 !== MM.skeletonId && null !== MM.skeletonId && (OM.skeleton = rM.getLastSkeletonById(MM.skeletonId), OM._waitingSkeletonId = MM.skeletonId, MM.numBoneInfluencers && (OM.numBoneInfluencers = MM.numBoneInfluencers)), void 0 !== MM.skeletonUniqueId && null !== MM.skeletonUniqueId && (OM._waitingSkeletonUniqueId = MM.skeletonUniqueId), MM.animations) {
          for (let rM = 0; rM < MM.animations.length; rM++) {
            const iM = MM.animations[rM],
              SM = (0, YM.b)("BABYLON.Animation");
            SM && OM.animations.push(SM.Parse(iM))
          }
          tM.d.ParseAnimationRanges(OM, MM, rM)
        }
        if (MM.autoAnimate && rM.beginAnimation(OM, MM.autoAnimateFrom, MM.autoAnimateTo, MM.autoAnimateLoop, MM.autoAnimateSpeed || 1), MM.layerMask && !isNaN(MM.layerMask) ? OM.layerMask = Math.abs(parseInt(MM.layerMask)) : OM.layerMask = 268435455, MM.physicsImpostor && (OM.physicsImpostor = TM._PhysicsImpostorParser(rM, OM, MM)), MM.lodMeshIds && (OM._waitingData.lods = {
            ids: MM.lodMeshIds,
            distances: MM.lodDistances ? MM.lodDistances : null,
            coverages: MM.lodCoverages ? MM.lodCoverages : null
          }), MM.instances)
          for (let jM = 0; jM < MM.instances.length; jM++) {
            const iM = MM.instances[jM],
              SM = OM.createInstance(iM.name);
            if (iM.id && (SM.id = iM.id), GM.d && (iM.tags ? GM.d.AddTagsTo(SM, iM.tags) : GM.d.AddTagsTo(SM, MM.tags)), SM.position = bM.q.FromArray(iM.position), void 0 !== iM.metadata && (SM.metadata = iM.metadata), void 0 !== iM.parentId && (SM._waitingParentId = iM.parentId), void 0 !== iM.parentInstanceIndex && (SM._waitingParentInstanceIndex = iM.parentInstanceIndex), void 0 !== iM.isEnabled && null !== iM.isEnabled && SM.kR(iM.isEnabled), void 0 !== iM.isVisible && null !== iM.isVisible && (SM.isVisible = iM.isVisible), void 0 !== iM.AJ && null !== iM.AJ && (SM.AJ = iM.AJ), iM.rotationQuaternion ? SM.rotationQuaternion = bM.h.FromArray(iM.rotationQuaternion) : iM.rotation && (SM.rotation = bM.q.FromArray(iM.rotation)), SM.UL = bM.q.FromArray(iM.UL), void 0 != iM.checkCollisions && null != iM.checkCollisions && (SM.checkCollisions = iM.checkCollisions), void 0 != iM.pickable && null != iM.pickable && (SM.AJ = iM.pickable), void 0 != iM.showBoundingBox && null != iM.showBoundingBox && (SM.showBoundingBox = iM.showBoundingBox), void 0 != iM.showSubMeshesBoundingBox && null != iM.showSubMeshesBoundingBox && (SM.showSubMeshesBoundingBox = iM.showSubMeshesBoundingBox), void 0 != iM.alphaIndex && null != iM.showSubMeshesBoundingBox && (SM.alphaIndex = iM.alphaIndex), iM.physicsImpostor && (SM.physicsImpostor = TM._PhysicsImpostorParser(rM, SM, iM)), void 0 !== iM.actions && (SM._waitingData.actions = iM.actions), iM.animations) {
              for (let MM = 0; MM < iM.animations.length; MM++) {
                const rM = iM.animations[MM],
                  OM = (0, YM.b)("BABYLON.Animation");
                OM && SM.animations.push(OM.Parse(rM))
              }
              tM.d.ParseAnimationRanges(SM, iM, rM), iM.autoAnimate && rM.beginAnimation(SM, iM.autoAnimateFrom, iM.autoAnimateTo, iM.autoAnimateLoop, iM.autoAnimateSpeed || 1)
            }
          }
        if (MM.thinInstances) {
          const rM = MM.thinInstances;
          if (OM.krM = !!rM.enablePicking, rM.matrixData ? (OM.v_("matrix", new Float32Array(rM.matrixData), 16, !1), OM._thinInstanceDataStorage.matrixBufferSize = rM.matrixBufferSize, OM._thinInstanceDataStorage.instancesCount = rM.instancesCount) : OM._thinInstanceDataStorage.matrixBufferSize = rM.matrixBufferSize, MM.thinInstances.userThinInstance) {
            const rM = MM.thinInstances.userThinInstance;
            for (const MM in rM.data) OM.v_(MM, new Float32Array(rM.data[MM]), rM.strides[MM], !1), OM._userThinInstanceBuffersStorage.sizes[MM] = rM.sizes[MM]
          }
        }
        return OM
      }
      setPositionsForCPUSkinning() {
        const MM = this._internalMeshDataInfo;
        if (!MM._sourcePositions) {
          const rM = this.getVerticesData(gM.j.PositionKind);
          if (!rM) return MM._sourcePositions;
          MM._sourcePositions = new Float32Array(rM), this.isVertexBufferUpdatable(gM.j.PositionKind) || this.setVerticesData(gM.j.PositionKind, rM, !0)
        }
        return MM._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const MM = this._internalMeshDataInfo;
        if (!MM._sourceNormals) {
          const rM = this.getVerticesData(gM.j.NormalKind);
          if (!rM) return MM._sourceNormals;
          MM._sourceNormals = new Float32Array(rM), this.isVertexBufferUpdatable(gM.j.NormalKind) || this.setVerticesData(gM.j.NormalKind, rM, !0)
        }
        return MM._sourceNormals
      }
      applySkeleton(MM) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Hk().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Hk().getFrameId(), !this.isVerticesDataPresent(gM.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(gM.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(gM.j.MatricesWeightsKind)) return this;
        const rM = this.isVerticesDataPresent(gM.j.NormalKind),
          iM = this._internalMeshDataInfo;
        if (!iM._sourcePositions) {
          const MM = this.iG.slice();
          this.setPositionsForCPUSkinning(), this.iG = MM
        }
        rM && !iM._sourceNormals && this.setNormalsForCPUSkinning();
        let OM = this.getVerticesData(gM.j.PositionKind);
        if (!OM) return this;
        OM instanceof Float32Array || (OM = new Float32Array(OM));
        let SM = this.getVerticesData(gM.j.NormalKind);
        if (rM) {
          if (!SM) return this;
          SM instanceof Float32Array || (SM = new Float32Array(SM))
        }
        const jM = this.getVerticesData(gM.j.MatricesIndicesKind),
          aM = this.getVerticesData(gM.j.MatricesWeightsKind);
        if (!aM || !jM) return this;
        const PM = this.numBoneInfluencers > 4,
          nM = PM ? this.getVerticesData(gM.j.MatricesIndicesExtraKind) : null,
          QM = PM ? this.getVerticesData(gM.j.MatricesWeightsExtraKind) : null,
          zM = MM.getTransformMatrices(this),
          LM = bM.q.Zero(),
          mM = new bM.d,
          HM = new bM.d;
        let hM, JM = 0;
        for (let dM = 0; dM < OM.length; dM += 3, JM += 4) {
          let MM;
          for (hM = 0; hM < 4; hM++) MM = aM[JM + hM], MM > 0 && (bM.d.FromFloat32ArrayToRefScaled(zM, Math.floor(16 * jM[JM + hM]), MM, HM), mM.addToSelf(HM));
          if (PM)
            for (hM = 0; hM < 4; hM++) MM = QM[JM + hM], MM > 0 && (bM.d.FromFloat32ArrayToRefScaled(zM, Math.floor(16 * nM[JM + hM]), MM, HM), mM.addToSelf(HM));
          bM.q.TransformCoordinatesFromFloatsToRef(iM._sourcePositions[dM], iM._sourcePositions[dM + 1], iM._sourcePositions[dM + 2], mM, LM), LM.toArray(OM, dM), rM && (bM.q.TransformNormalFromFloatsToRef(iM._sourceNormals[dM], iM._sourceNormals[dM + 1], iM._sourceNormals[dM + 2], mM, LM), LM.toArray(SM, dM)), mM.reset()
        }
        return this.updateVerticesData(gM.j.PositionKind, OM), rM && this.updateVerticesData(gM.j.NormalKind, SM), this
      }
      static MinMax(MM) {
        let rM = null,
          iM = null;
        for (const OM of MM) {
          const MM = OM.aY().boundingBox;
          rM && iM ? (rM.minimizeInPlace(MM.minimumWorld), iM.maximizeInPlace(MM.maximumWorld)) : (rM = MM.minimumWorld.clone(), iM = MM.maximumWorld.clone())
        }
        return rM && iM ? {
          min: rM,
          max: iM
        } : {
          min: bM.q.Zero(),
          max: bM.q.Zero()
        }
      }
      static Center(MM) {
        const rM = MM instanceof Array ? TM.MinMax(MM) : MM;
        return bM.q.Center(rM.min, rM.max)
      }
      static MergeMeshes(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        return (0, CM.n)(TM._MergeMeshesCoroutine(MM, rM, iM, OM, SM, jM, !1))
      }
      static async MergeMeshesAsync(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, CM.k)(TM._MergeMeshesCoroutine(MM, rM, iM, OM, SM, jM, !0), (0, CM.d)())
      }
      static * _MergeMeshesCoroutine(MM) {
        let rM, iM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OM = arguments.length > 2 ? arguments[2] : void 0,
          SM = arguments.length > 3 ? arguments[3] : void 0,
          jM = arguments.length > 4 ? arguments[4] : void 0,
          aM = arguments.length > 5 ? arguments[5] : void 0,
          PM = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (MM = MM.filter(Boolean)).length) return null;
        if (!OM) {
          let iM = 0;
          for (rM = 0; rM < MM.length; rM++)
            if (iM += MM[rM].getTotalVertices(), iM >= 65536) return fM.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const nM = MM[0];
        aM && (jM = !1, MM.sort(((MM, rM) => (MM.material?.uniqueId ?? -1) - (rM.material?.uniqueId ?? -1))));
        const QM = new Array,
          zM = new Array,
          LM = new Array,
          mM = MM[0].sideOrientation;
        for (rM = 0; rM < MM.length; rM++) {
          const iM = MM[rM];
          if (iM.Wk) return fM.e.Warn("Cannot merge instance meshes."), null;
          if (mM !== iM.sideOrientation) return fM.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (jM || aM) {
            const MM = LM.reduce(((MM, rM) => Math.max(MM, rM.start + rM.count)), 0);
            if (aM)
              if (iM.material) {
                const rM = iM.material;
                if (rM instanceof kM.e) {
                  for (let MM = 0; MM < rM.B_.length; MM++) QM.indexOf(rM.B_[MM]) < 0 && QM.push(rM.B_[MM]);
                  for (let OM = 0; OM < iM.iG.length; OM++) zM.push(QM.indexOf(rM.B_[iM.iG[OM].materialIndex])), LM.push({
                    start: MM + iM.iG[OM].indexStart,
                    count: iM.iG[OM].indexCount
                  })
                } else {
                  QM.indexOf(rM) < 0 && QM.push(rM);
                  for (let OM = 0; OM < iM.iG.length; OM++) zM.push(QM.indexOf(rM)), LM.push({
                    start: MM + iM.iG[OM].indexStart,
                    count: iM.iG[OM].indexCount
                  })
                }
              } else
                for (let rM = 0; rM < iM.iG.length; rM++) zM.push(0), LM.push({
                  start: MM + iM.iG[rM].indexStart,
                  count: iM.iG[rM].indexCount
                });
            else LM.push({
              start: MM,
              count: iM.getTotalIndices()
            })
          }
        }
        if (aM && LM.length > 1) {
          let MM = 0;
          for (let rM = 1; rM < LM.length; rM++) {
            const iM = LM[MM],
              OM = LM[rM];
            zM[rM] === zM[MM] && iM.start + iM.count === OM.start ? iM.count += OM.count : (MM++, LM[MM] = OM, zM[MM] = zM[rM])
          }
          LM.length = MM + 1, zM.length = MM + 1
        }
        const HM = MM => {
            const rM = MM.computeWorldMatrix(!0);
            return {
              vertexData: uM.d.ExtractFromMesh(MM, !1, !1),
              transform: rM
            }
          },
          {
            vertexData: hM,
            transform: JM
          } = HM(MM[0]);
        PM && (yield);
        const dM = new Array(MM.length - 1);
        for (let CM = 1; CM < MM.length; CM++) dM[CM - 1] = HM(MM[CM]), PM && (yield);
        const yM = hM._mergeCoroutine(JM, dM, OM, PM, !iM);
        let lM = yM.next();
        for (; !lM.done;) PM && (yield), lM = yM.next();
        const EM = lM.value;
        SM || (SM = new TM(nM.name + "_merged", nM.Hk()));
        const UM = EM._applyToCoroutine(SM, void 0, PM);
        let GM = UM.next();
        for (; !GM.done;) PM && (yield), GM = UM.next();
        if (SM.checkCollisions = nM.checkCollisions, SM.sideOrientation = nM.sideOrientation, iM)
          for (rM = 0; rM < MM.length; rM++) MM[rM].dispose();
        if (jM || aM) {
          for (SM.releaseSubMeshes(), rM = 0; rM < LM.length;) WM.e.CreateFromIndices(0, LM[rM].start, LM[rM].count, SM, void 0, !1), rM++;
          for (const MM of SM.iG) MM.refreshBoundingInfo();
          SM.computeWorldMatrix(!0)
        }
        if (aM) {
          const MM = new kM.e(nM.name + "_merged", nM.Hk());
          MM.B_ = QM;
          for (let rM = 0; rM < SM.iG.length; rM++) SM.iG[rM].materialIndex = zM[rM];
          SM.material = MM
        } else SM.material = nM.material;
        return SM
      }
      e_(MM) {
        MM._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(MM)
      }
      R_(MM) {
        const rM = MM._indexInSourceMeshInstanceArray;
        if (-1 != rM) {
          if (rM !== this.instances.length - 1) {
            const MM = this.instances[this.instances.length - 1];
            this.instances[rM] = MM, MM._indexInSourceMeshInstanceArray = rM
          }
          MM._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === sM.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(MM) {
        const rM = this.Hk();
        return rM.forcePointsCloud ? sM.c.PointFillMode : rM.forceWireframe ? sM.c.WireFrameFillMode : this.overrideRenderingFillMode ?? MM
      }
      setMaterialByID(MM) {
        return this.setMaterialById(MM)
      }
      static CreateRibbon(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(MM, rM, iM, OM, SM, jM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(MM, rM, iM, OM, SM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(MM, rM, iM, OM, SM, jM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(MM, rM, iM, OM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(MM, rM, iM, OM, SM, jM, aM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(MM, rM, iM, OM, SM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(MM, rM, iM, OM, SM, jM, aM, PM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(MM, rM, iM, OM, SM, jM, aM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(MM, rM, iM, OM, SM, jM, aM, PM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(MM, rM, iM, OM, SM, jM, aM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(MM, rM, iM, OM, SM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(MM, rM, iM, OM, SM, jM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(MM, rM, iM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(MM, rM, iM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(MM, rM, iM, OM, SM, jM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(MM, rM, iM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(MM) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    TM.FRONTSIDE = uM.d.FRONTSIDE, TM.BACKSIDE = uM.d.BACKSIDE, TM.DOUBLESIDE = uM.d.DOUBLESIDE, TM.DEFAULTSIDE = uM.d.DEFAULTSIDE, TM.NO_CAP = 0, TM.CAP_START = 1, TM.CAP_END = 2, TM.CAP_ALL = 3, TM.NO_FLIP = 0, TM.FLIP_TILE = 1, TM.ROTATE_TILE = 2, TM.FLIP_ROW = 3, TM.ROTATE_ROW = 4, TM.FLIP_N_ROTATE_TILE = 5, TM.FLIP_N_ROTATE_ROW = 6, TM.CENTER = 0, TM.LEFT = 1, TM.RIGHT = 2, TM.TOP = 3, TM.BOTTOM = 4, TM.INSTANCEDMESH_SORT_TRANSPARENT = !1, TM._GroundMeshParser = (MM, rM) => {
      throw (0, NM.n)("GroundMesh")
    }, TM._GoldbergMeshParser = (MM, rM) => {
      throw (0, NM.n)("GoldbergMesh")
    }, TM._LinesMeshParser = (MM, rM) => {
      throw (0, NM.n)("LinesMesh")
    }, TM._GreasedLineMeshParser = (MM, rM) => {
      throw (0, NM.n)("GreasedLineMesh")
    }, TM._GreasedLineRibbonMeshParser = (MM, rM) => {
      throw (0, NM.n)("GreasedLineRibbonMesh")
    }, TM._TrailMeshParser = (MM, rM) => {
      throw (0, NM.n)("TrailMesh")
    }, TM._GaussianSplattingMeshParser = (MM, rM) => {
      throw (0, NM.n)("GaussianSplattingMesh")
    }, TM._GaussianSplattingPartProxyMeshParser = (MM, rM) => {
      throw (0, NM.n)("GaussianSplattingPartProxyMesh")
    }, TM._GaussianSplattingCompoundMeshParser = (MM, rM) => {
      throw (0, NM.n)("GaussianSplattingCompoundMesh")
    };
    let VM = !1;

    function cM() {
      VM || (VM = !0, (0, YM.e)("BABYLON.Mesh", TM))
    }(OM = TM.prototype).sZ ?? (OM.sZ = (0, NM.j)("Mesh", "sZ")), (SM = TM.prototype).simplify ?? (SM.simplify = (0, NM.j)("Mesh", "simplify")), (jM = TM.prototype).thinInstanceAdd ?? (jM.thinInstanceAdd = (0, NM.j)("Mesh", "thinInstanceAdd")), (aM = TM.prototype).thinInstanceAddSelf ?? (aM.thinInstanceAddSelf = (0, NM.j)("Mesh", "thinInstanceAddSelf")), (PM = TM.prototype).thinInstanceRegisterAttribute ?? (PM.thinInstanceRegisterAttribute = (0, NM.j)("Mesh", "thinInstanceRegisterAttribute")), (nM = TM.prototype).thinInstanceSetMatrixAt ?? (nM.thinInstanceSetMatrixAt = (0, NM.j)("Mesh", "thinInstanceSetMatrixAt")), (QM = TM.prototype).thinInstanceSetAttributeAt ?? (QM.thinInstanceSetAttributeAt = (0, NM.j)("Mesh", "thinInstanceSetAttributeAt")), (zM = TM.prototype).v_ ?? (zM.v_ = (0, NM.j)("Mesh", "v_")), (LM = TM.prototype).thinInstanceGetWorldMatrices ?? (LM.thinInstanceGetWorldMatrices = (0, NM.j)("Mesh", "thinInstanceGetWorldMatrices")), (mM = TM.prototype).f_ ?? (mM.f_ = (0, NM.j)("Mesh", "f_")), (HM = TM.prototype).thinInstancePartialBufferUpdate ?? (HM.thinInstancePartialBufferUpdate = (0, NM.j)("Mesh", "thinInstancePartialBufferUpdate")), (hM = TM.prototype).thinInstanceRefreshBoundingInfo ?? (hM.thinInstanceRefreshBoundingInfo = (0, NM.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (JM = TM.prototype).getEmittedParticleSystems ?? (JM.getEmittedParticleSystems = (0, NM.j)("Mesh", "getEmittedParticleSystems")), (dM = TM.prototype).getHierarchyEmittedParticleSystems ?? (dM.getHierarchyEmittedParticleSystems = (0, NM.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(TM.prototype, "edgesShareWithInstances") || Object.defineProperty(TM.prototype, "edgesShareWithInstances", (0, NM.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(TM.prototype, "krM") || Object.defineProperty(TM.prototype, "krM", (0, NM.g)("Mesh", "krM")), Object.getOwnPropertyDescriptor(TM.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(TM.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, NM.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(TM.prototype, "y_") || Object.defineProperty(TM.prototype, "y_", (0, NM.g)("Mesh", "y_"))
  },
  41508: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => hM
    });
    var OM = iM(41099),
      SM = iM(38040),
      jM = iM(41250),
      aM = iM(40990),
      PM = iM(38173),
      nM = iM(39711),
      QM = iM(41105),
      zM = iM(41506),
      LM = iM(41156),
      mM = iM(41400);
    class HM {}
    let hM = (() => {
      var MM;
      let rM, iM, hM, JM, dM = [];
      return MM = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, zM.h)(this._applyToCoroutine.bind(this)), this.uniqueId = MM._UniqueIdGenerator, MM._UniqueIdGenerator++
        }
        set(MM, rM) {
          switch (MM.length || nM.e.Warn(`Setting vertex data kind '${rM}' with an empty array`), rM) {
            case jM.j.PositionKind:
              this.positions = MM;
              break;
            case jM.j.NormalKind:
              this.normals = MM;
              break;
            case jM.j.TangentKind:
              this.tangents = MM;
              break;
            case jM.j.UVKind:
              this.uvs = MM;
              break;
            case jM.j.UV2Kind:
              this.uvs2 = MM;
              break;
            case jM.j.UV3Kind:
              this.uvs3 = MM;
              break;
            case jM.j.UV4Kind:
              this.uvs4 = MM;
              break;
            case jM.j.UV5Kind:
              this.uvs5 = MM;
              break;
            case jM.j.UV6Kind:
              this.uvs6 = MM;
              break;
            case jM.j.ColorKind:
              this.colors = MM;
              break;
            case jM.j.MatricesIndicesKind:
              this.matricesIndices = MM;
              break;
            case jM.j.MatricesWeightsKind:
              this.matricesWeights = MM;
              break;
            case jM.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = MM;
              break;
            case jM.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = MM
          }
        }
        applyToMesh(MM, rM) {
          return this._applyTo(MM, rM, !1), this
        }
        applyToGeometry(MM, rM) {
          return this._applyTo(MM, rM, !1), this
        }
        updateMesh(MM) {
          return this._update(MM), this
        }
        updateGeometry(MM) {
          return this._update(MM), this
        }* _applyToCoroutine(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (MM.setVerticesData(jM.j.PositionKind, this.positions, rM), iM && (yield)), this.normals && (MM.setVerticesData(jM.j.NormalKind, this.normals, rM), iM && (yield)), this.tangents && (MM.setVerticesData(jM.j.TangentKind, this.tangents, rM), iM && (yield)), this.uvs && (MM.setVerticesData(jM.j.UVKind, this.uvs, rM), iM && (yield)), this.uvs2 && (MM.setVerticesData(jM.j.UV2Kind, this.uvs2, rM), iM && (yield)), this.uvs3 && (MM.setVerticesData(jM.j.UV3Kind, this.uvs3, rM), iM && (yield)), this.uvs4 && (MM.setVerticesData(jM.j.UV4Kind, this.uvs4, rM), iM && (yield)), this.uvs5 && (MM.setVerticesData(jM.j.UV5Kind, this.uvs5, rM), iM && (yield)), this.uvs6 && (MM.setVerticesData(jM.j.UV6Kind, this.uvs6, rM), iM && (yield)), this.colors) {
            const OM = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            MM.setVerticesData(jM.j.ColorKind, this.colors, rM, OM), this.hasVertexAlpha && void 0 !== MM.hasVertexAlpha && (MM.hasVertexAlpha = !0), iM && (yield)
          }
          if (this.matricesIndices && (MM.setVerticesData(jM.j.MatricesIndicesKind, this.matricesIndices, rM), iM && (yield)), this.matricesWeights && (MM.setVerticesData(jM.j.MatricesWeightsKind, this.matricesWeights, rM), iM && (yield)), this.matricesIndicesExtra && (MM.setVerticesData(jM.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, rM), iM && (yield)), this.matricesWeightsExtra && (MM.setVerticesData(jM.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, rM), iM && (yield)), this.indices ? (MM.setIndices(this.indices, null, rM), iM && (yield)) : MM.setIndices([], null), MM.iG && this.materialInfos && this.materialInfos.length > 1) {
            const rM = MM;
            rM.iG = [];
            for (const MM of this.materialInfos) new mM.e(MM.materialIndex, MM.verticesStart, MM.verticesCount, MM.indexStart, MM.indexCount, rM)
          }
          return this
        }
        _update(MM, rM, iM) {
          return this.positions && MM.updateVerticesData(jM.j.PositionKind, this.positions, rM, iM), this.normals && MM.updateVerticesData(jM.j.NormalKind, this.normals, rM, iM), this.tangents && MM.updateVerticesData(jM.j.TangentKind, this.tangents, rM, iM), this.uvs && MM.updateVerticesData(jM.j.UVKind, this.uvs, rM, iM), this.uvs2 && MM.updateVerticesData(jM.j.UV2Kind, this.uvs2, rM, iM), this.uvs3 && MM.updateVerticesData(jM.j.UV3Kind, this.uvs3, rM, iM), this.uvs4 && MM.updateVerticesData(jM.j.UV4Kind, this.uvs4, rM, iM), this.uvs5 && MM.updateVerticesData(jM.j.UV5Kind, this.uvs5, rM, iM), this.uvs6 && MM.updateVerticesData(jM.j.UV6Kind, this.uvs6, rM, iM), this.colors && MM.updateVerticesData(jM.j.ColorKind, this.colors, rM, iM), this.matricesIndices && MM.updateVerticesData(jM.j.MatricesIndicesKind, this.matricesIndices, rM, iM), this.matricesWeights && MM.updateVerticesData(jM.j.MatricesWeightsKind, this.matricesWeights, rM, iM), this.matricesIndicesExtra && MM.updateVerticesData(jM.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, rM, iM), this.matricesWeightsExtra && MM.updateVerticesData(jM.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, rM, iM), this.indices && MM.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
          const jM = SM.l.sh[0],
            aM = SM.l.sh[1];
          for (let PM = iM; PM < iM + OM; PM += 3) SM.q.FromArrayToRef(MM, PM, jM), SM.q.TransformCoordinatesToRef(jM, rM, aM), MM[PM] = aM.x, MM[PM + 1] = aM.y, MM[PM + 2] = aM.z
        }
        static _TransformVector3Normals(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
          const jM = SM.l.sh[0],
            aM = SM.l.sh[1];
          for (let PM = iM; PM < iM + OM; PM += 3) SM.q.FromArrayToRef(MM, PM, jM), SM.q.TransformNormalToRef(jM, rM, aM), MM[PM] = aM.x, MM[PM + 1] = aM.y, MM[PM + 2] = aM.z
        }
        static _TransformVector4Normals(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
          const jM = SM.l.Vector4[0],
            aM = SM.l.Vector4[1];
          for (let PM = iM; PM < iM + OM; PM += 4) SM.u.FromArrayToRef(MM, PM, jM), SM.u.TransformNormalToRef(jM, rM, aM), MM[PM] = aM.x, MM[PM + 1] = aM.y, MM[PM + 2] = aM.z, MM[PM + 3] = aM.w
        }
        static _FlipFaces(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM.length;
          for (let OM = rM; OM < rM + iM; OM += 3) {
            const rM = MM[OM + 1];
            MM[OM + 1] = MM[OM + 2], MM[OM + 2] = rM
          }
        }
        transform(rM) {
          const iM = rM.determinant() < 0;
          return this.positions && MM._TransformVector3Coordinates(this.positions, rM), this.normals && MM._TransformVector3Normals(this.normals, rM), this.tangents && MM._TransformVector4Normals(this.tangents, rM), iM && this.indices && MM._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const rM = [];
          for (const iM of this.materialInfos) {
            const OM = new MM;
            if (this.positions && (OM.positions = this.positions.slice(3 * iM.verticesStart, 3 * (iM.verticesCount + iM.verticesStart))), this.normals && (OM.normals = this.normals.slice(3 * iM.verticesStart, 3 * (iM.verticesCount + iM.verticesStart))), this.tangents && (OM.tangents = this.tangents.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.colors && (OM.colors = this.colors.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.uvs && (OM.uvs = this.uvs.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.uvs2 && (OM.uvs2 = this.uvs2.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.uvs3 && (OM.uvs3 = this.uvs3.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.uvs4 && (OM.uvs4 = this.uvs4.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.uvs5 && (OM.uvs5 = this.uvs5.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.uvs6 && (OM.uvs6 = this.uvs6.slice(2 * iM.verticesStart, 2 * (iM.verticesCount + iM.verticesStart))), this.matricesIndices && (OM.matricesIndices = this.matricesIndices.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.matricesIndicesExtra && (OM.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.matricesWeights && (OM.matricesWeights = this.matricesWeights.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.matricesWeightsExtra && (OM.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * iM.verticesStart, 4 * (iM.verticesCount + iM.verticesStart))), this.indices) {
              OM.indices = [];
              for (let MM = iM.indexStart; MM < iM.indexStart + iM.indexCount; MM++) OM.indices.push(this.indices[MM] - iM.verticesStart)
            }
            const SM = new HM;
            SM.indexStart = 0, SM.indexCount = OM.indices ? OM.indices.length : 0, SM.materialIndex = iM.materialIndex, SM.verticesStart = 0, SM.verticesCount = (OM.positions ? OM.positions.length : 0) / 3, OM.materialInfos = [SM], rM.push(OM)
          }
          return rM
        }
        merge(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const jM = Array.isArray(MM) ? MM.map((MM => ({
            vertexData: MM
          }))) : [{
            vertexData: MM
          }];
          return (0, zM.n)(this._mergeCoroutine(void 0, jM, rM, !1, iM, OM, SM))
        }* _mergeCoroutine(rM, iM) {
          let OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            SM = arguments.length > 3 ? arguments[3] : void 0,
            aM = arguments.length > 4 ? arguments[4] : void 0,
            PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            nM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let QM = iM.map((MM => MM.vertexData)),
            zM = this;
          if (nM)
            for (const MM of QM) MM && (MM._validate(), !this.normals && MM.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && MM.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && MM.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && MM.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && MM.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && MM.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && MM.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && MM.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && MM.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && MM.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && MM.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && MM.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && MM.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const MM of QM)
            if (MM)
              if (nM) this.normals && !MM.normals && (MM.normals = new Float32Array(MM.positions.length)), this.tangents && !MM.tangents && (MM.tangents = new Float32Array(MM.positions.length / 3 * 4)), this.uvs && !MM.uvs && (MM.uvs = new Float32Array(MM.positions.length / 3 * 2)), this.uvs2 && !MM.uvs2 && (MM.uvs2 = new Float32Array(MM.positions.length / 3 * 2)), this.uvs3 && !MM.uvs3 && (MM.uvs3 = new Float32Array(MM.positions.length / 3 * 2)), this.uvs4 && !MM.uvs4 && (MM.uvs4 = new Float32Array(MM.positions.length / 3 * 2)), this.uvs5 && !MM.uvs5 && (MM.uvs5 = new Float32Array(MM.positions.length / 3 * 2)), this.uvs6 && !MM.uvs6 && (MM.uvs6 = new Float32Array(MM.positions.length / 3 * 2)), this.colors && !MM.colors && (MM.colors = new Float32Array(MM.positions.length / 3 * 4), MM.colors.fill(1)), this.matricesIndices && !MM.matricesIndices && (MM.matricesIndices = new Float32Array(MM.positions.length / 3 * 4)), this.matricesWeights && !MM.matricesWeights && (MM.matricesWeights = new Float32Array(MM.positions.length / 3 * 4)), this.matricesIndicesExtra && !MM.matricesIndicesExtra && (MM.matricesIndicesExtra = new Float32Array(MM.positions.length / 3 * 4)), this.matricesWeightsExtra && !MM.matricesWeightsExtra && (MM.matricesWeightsExtra = new Float32Array(MM.positions.length / 3 * 4));
              else if (MM._validate(), !this.normals !== !MM.normals || !this.tangents !== !MM.tangents || !this.uvs !== !MM.uvs || !this.uvs2 !== !MM.uvs2 || !this.uvs3 !== !MM.uvs3 || !this.uvs4 !== !MM.uvs4 || !this.uvs5 !== !MM.uvs5 || !this.uvs6 !== !MM.uvs6 || !this.colors !== !MM.colors || !this.matricesIndices !== !MM.matricesIndices || !this.matricesWeights !== !MM.matricesWeights || !this.matricesIndicesExtra !== !MM.matricesIndicesExtra || !this.matricesWeightsExtra !== !MM.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (PM) {
            let MM, OM = 0,
              SM = 0;
            const jM = [];
            let aM = null;
            const PM = [];
            for (const iM of this.splitBasedOnMaterialID()) PM.push({
              vertexData: iM,
              transform: rM
            });
            for (const rM of iM)
              if (rM.vertexData)
                for (const MM of rM.vertexData.splitBasedOnMaterialID()) PM.push({
                  vertexData: MM,
                  transform: rM.transform
                });
            PM.sort(((MM, rM) => {
              const iM = MM.vertexData.materialInfos ? MM.vertexData.materialInfos[0].materialIndex : 0,
                OM = rM.vertexData.materialInfos ? rM.vertexData.materialInfos[0].materialIndex : 0;
              return iM > OM ? 1 : iM === OM ? 0 : -1
            }));
            for (const rM of PM) {
              const iM = rM.vertexData;
              if (MM = iM.materialInfos ? iM.materialInfos[0].materialIndex : 0, aM && aM.materialIndex === MM) aM.indexCount += iM.indices.length, aM.verticesCount += iM.positions.length / 3;
              else {
                const rM = new HM;
                rM.materialIndex = MM, rM.indexStart = OM, rM.indexCount = iM.indices.length, rM.verticesStart = SM, rM.verticesCount = iM.positions.length / 3, jM.push(rM), aM = rM
              }
              OM += iM.indices.length, SM += iM.positions.length / 3
            }
            const nM = PM.splice(0, 1)[0];
            zM = nM.vertexData, rM = nM.transform, QM = PM.map((MM => MM.vertexData)), iM = PM, this.materialInfos = jM
          }
          const LM = QM.reduce(((MM, rM) => MM + (rM.indices?.length ?? 0)), zM.indices?.length ?? 0);
          let mM = aM || QM.some((MM => MM.indices === zM.indices)) ? zM.indices?.slice() : zM.indices;
          if (LM > 0) {
            let jM = mM?.length ?? 0;
            if (mM || (mM = new Array(LM)), mM.length !== LM) {
              if (Array.isArray(mM)) mM.length = LM;
              else {
                const MM = OM || mM instanceof Uint32Array ? new Uint32Array(LM) : new Uint16Array(LM);
                MM.set(mM), mM = MM
              }
              rM && rM.determinant() < 0 && MM._FlipFaces(mM, 0, jM)
            }
            let aM = zM.positions ? zM.positions.length / 3 : 0;
            for (const {
                vertexData: rM,
                transform: OM
              }
              of iM)
              if (rM.indices) {
                for (let MM = 0; MM < rM.indices.length; MM++) mM[jM + MM] = rM.indices[MM] + aM;
                OM && OM.determinant() < 0 && MM._FlipFaces(mM, jM, rM.indices.length), aM += rM.positions.length / 3, jM += rM.indices.length, SM && (yield)
              }
          }
          return this.indices = mM, this.positions = MM._MergeElement(jM.j.PositionKind, zM.positions, rM, iM.map((MM => [MM.vertexData.positions, MM.transform]))), SM && (yield), zM.normals && (this.normals = MM._MergeElement(jM.j.NormalKind, zM.normals, rM, iM.map((MM => [MM.vertexData.normals, MM.transform]))), SM && (yield)), zM.tangents && (this.tangents = MM._MergeElement(jM.j.TangentKind, zM.tangents, rM, iM.map((MM => [MM.vertexData.tangents, MM.transform]))), SM && (yield)), zM.uvs && (this.uvs = MM._MergeElement(jM.j.UVKind, zM.uvs, rM, iM.map((MM => [MM.vertexData.uvs, MM.transform]))), SM && (yield)), zM.uvs2 && (this.uvs2 = MM._MergeElement(jM.j.UV2Kind, zM.uvs2, rM, iM.map((MM => [MM.vertexData.uvs2, MM.transform]))), SM && (yield)), zM.uvs3 && (this.uvs3 = MM._MergeElement(jM.j.UV3Kind, zM.uvs3, rM, iM.map((MM => [MM.vertexData.uvs3, MM.transform]))), SM && (yield)), zM.uvs4 && (this.uvs4 = MM._MergeElement(jM.j.UV4Kind, zM.uvs4, rM, iM.map((MM => [MM.vertexData.uvs4, MM.transform]))), SM && (yield)), zM.uvs5 && (this.uvs5 = MM._MergeElement(jM.j.UV5Kind, zM.uvs5, rM, iM.map((MM => [MM.vertexData.uvs5, MM.transform]))), SM && (yield)), zM.uvs6 && (this.uvs6 = MM._MergeElement(jM.j.UV6Kind, zM.uvs6, rM, iM.map((MM => [MM.vertexData.uvs6, MM.transform]))), SM && (yield)), zM.colors && (this.colors = MM._MergeElement(jM.j.ColorKind, zM.colors, rM, iM.map((MM => [MM.vertexData.colors, MM.transform]))), (void 0 !== zM.hasVertexAlpha || iM.some((MM => void 0 !== MM.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = zM.hasVertexAlpha || iM.some((MM => MM.vertexData.hasVertexAlpha))), SM && (yield)), zM.matricesIndices && (this.matricesIndices = MM._MergeElement(jM.j.MatricesIndicesKind, zM.matricesIndices, rM, iM.map((MM => [MM.vertexData.matricesIndices, MM.transform]))), SM && (yield)), zM.matricesWeights && (this.matricesWeights = MM._MergeElement(jM.j.MatricesWeightsKind, zM.matricesWeights, rM, iM.map((MM => [MM.vertexData.matricesWeights, MM.transform]))), SM && (yield)), zM.matricesIndicesExtra && (this.matricesIndicesExtra = MM._MergeElement(jM.j.MatricesIndicesExtraKind, zM.matricesIndicesExtra, rM, iM.map((MM => [MM.vertexData.matricesIndicesExtra, MM.transform]))), SM && (yield)), zM.matricesWeightsExtra && (this.matricesWeightsExtra = MM._MergeElement(jM.j.MatricesWeightsExtraKind, zM.matricesWeightsExtra, rM, iM.map((MM => [MM.vertexData.matricesWeightsExtra, MM.transform])))), this
        }
        static _MergeElement(rM, iM, OM, SM) {
          const aM = SM.filter((MM => null !== MM[0] && void 0 !== MM[0]));
          if (!iM && 0 == aM.length) return iM;
          if (!iM) return this._MergeElement(rM, aM[0][0], aM[0][1], aM.slice(1));
          const PM = aM.reduce(((MM, rM) => MM + rM[0].length), iM.length),
            nM = rM === jM.j.PositionKind ? MM._TransformVector3Coordinates : rM === jM.j.NormalKind ? MM._TransformVector3Normals : rM === jM.j.TangentKind ? MM._TransformVector4Normals : () => {};
          if (iM instanceof Float32Array) {
            const MM = new Float32Array(PM);
            MM.set(iM), OM && nM(MM, OM, 0, iM.length);
            let rM = iM.length;
            for (const [iM, OM] of aM) MM.set(iM, rM), OM && nM(MM, OM, rM, iM.length), rM += iM.length;
            return MM
          } {
            const MM = new Array(PM);
            for (let OM = 0; OM < iM.length; OM++) MM[OM] = iM[OM];
            OM && nM(MM, OM, 0, iM.length);
            let rM = iM.length;
            for (const [iM, OM] of aM) {
              for (let OM = 0; OM < iM.length; OM++) MM[rM + OM] = iM[OM];
              OM && nM(MM, OM, rM, iM.length), rM += iM.length
            }
            return MM
          }
        }
        _validate() {
          if (!this.positions) throw new LM.i("Positions are required", LM.e.MeshInvalidPositionsError);
          const MM = (MM, rM) => {
              const iM = (0, jM.h)(MM);
              if (rM.length % iM !== 0) throw new Error("The " + MM + "s array count must be a multiple of " + iM);
              return rM.length / iM
            },
            rM = MM(jM.j.PositionKind, this.positions),
            iM = (iM, OM) => {
              const SM = MM(iM, OM);
              if (SM !== rM) throw new Error("The " + iM + "s element count (" + SM + ") does not match the positions count (" + rM + ")")
            };
          this.normals && iM(jM.j.NormalKind, this.normals), this.tangents && iM(jM.j.TangentKind, this.tangents), this.uvs && iM(jM.j.UVKind, this.uvs), this.uvs2 && iM(jM.j.UV2Kind, this.uvs2), this.uvs3 && iM(jM.j.UV3Kind, this.uvs3), this.uvs4 && iM(jM.j.UV4Kind, this.uvs4), this.uvs5 && iM(jM.j.UV5Kind, this.uvs5), this.uvs6 && iM(jM.j.UV6Kind, this.uvs6), this.colors && iM(jM.j.ColorKind, this.colors), this.matricesIndices && iM(jM.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && iM(jM.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && iM(jM.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && iM(jM.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const rM = this.serialize();
          return MM.Parse(rM)
        }
        serialize() {
          const MM = {};
          if (this.positions && (MM.positions = Array.from(this.positions)), this.normals && (MM.normals = Array.from(this.normals)), this.tangents && (MM.tangents = Array.from(this.tangents)), this.uvs && (MM.uvs = Array.from(this.uvs)), this.uvs2 && (MM.uvs2 = Array.from(this.uvs2)), this.uvs3 && (MM.uvs3 = Array.from(this.uvs3)), this.uvs4 && (MM.uvs4 = Array.from(this.uvs4)), this.uvs5 && (MM.uvs5 = Array.from(this.uvs5)), this.uvs6 && (MM.uvs6 = Array.from(this.uvs6)), this.colors && (MM.colors = Array.from(this.colors), MM.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (MM.matricesIndices = Array.from(this.matricesIndices), MM.matricesIndicesExpanded = !0), this.matricesWeights && (MM.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (MM.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), MM.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (MM.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), MM.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            MM.materialInfos = [];
            for (const rM of this.materialInfos) {
              const iM = {
                indexStart: rM.indexStart,
                indexCount: rM.indexCount,
                materialIndex: rM.materialIndex,
                verticesStart: rM.verticesStart,
                verticesCount: rM.verticesCount
              };
              MM.materialInfos.push(iM)
            }
          }
          return MM
        }
        static ExtractFromMesh(rM, iM, OM) {
          return MM._ExtractFrom(rM, iM, OM)
        }
        static ExtractFromGeometry(rM, iM, OM) {
          return MM._ExtractFrom(rM, iM, OM)
        }
        static _ExtractFrom(rM, iM, OM) {
          const SM = new MM;
          if (rM.isVerticesDataPresent(jM.j.PositionKind) && (SM.positions = rM.getVerticesData(jM.j.PositionKind, iM, OM)), rM.isVerticesDataPresent(jM.j.NormalKind) && (SM.normals = rM.getVerticesData(jM.j.NormalKind, iM, OM)), rM.isVerticesDataPresent(jM.j.TangentKind) && (SM.tangents = rM.getVerticesData(jM.j.TangentKind, iM, OM)), rM.isVerticesDataPresent(jM.j.UVKind) && (SM.uvs = rM.getVerticesData(jM.j.UVKind, iM, OM)), rM.isVerticesDataPresent(jM.j.UV2Kind) && (SM.uvs2 = rM.getVerticesData(jM.j.UV2Kind, iM, OM)), rM.isVerticesDataPresent(jM.j.UV3Kind) && (SM.uvs3 = rM.getVerticesData(jM.j.UV3Kind, iM, OM)), rM.isVerticesDataPresent(jM.j.UV4Kind) && (SM.uvs4 = rM.getVerticesData(jM.j.UV4Kind, iM, OM)), rM.isVerticesDataPresent(jM.j.UV5Kind) && (SM.uvs5 = rM.getVerticesData(jM.j.UV5Kind, iM, OM)), rM.isVerticesDataPresent(jM.j.UV6Kind) && (SM.uvs6 = rM.getVerticesData(jM.j.UV6Kind, iM, OM)), rM.isVerticesDataPresent(jM.j.ColorKind)) {
            const MM = rM.geometry || rM,
              aM = MM.getVertexBuffer(jM.j.ColorKind),
              PM = MM.getVerticesData(jM.j.ColorKind, iM, OM);
            if (3 === aM.getSize()) {
              const MM = new Float32Array(4 * PM.length / 3);
              for (let rM = 0, iM = 0; rM < PM.length; rM += 3, iM += 4) MM[iM] = PM[rM], MM[iM + 1] = PM[rM + 1], MM[iM + 2] = PM[rM + 2], MM[iM + 3] = 1;
              SM.colors = MM
            } else {
              if (4 !== aM.getSize()) throw new Error(`Unexpected number of color components: ${aM.getSize()}`);
              SM.colors = PM
            }
          }
          return rM.isVerticesDataPresent(jM.j.MatricesIndicesKind) && (SM.matricesIndices = rM.getVerticesData(jM.j.MatricesIndicesKind, iM, OM)), rM.isVerticesDataPresent(jM.j.MatricesWeightsKind) && (SM.matricesWeights = rM.getVerticesData(jM.j.MatricesWeightsKind, iM, OM)), rM.isVerticesDataPresent(jM.j.MatricesIndicesExtraKind) && (SM.matricesIndicesExtra = rM.getVerticesData(jM.j.MatricesIndicesExtraKind, iM, OM)), rM.isVerticesDataPresent(jM.j.MatricesWeightsExtraKind) && (SM.matricesWeightsExtra = rM.getVerticesData(jM.j.MatricesWeightsExtraKind, iM, OM)), SM.indices = rM.hOM(iM, OM), SM
        }
        static CreateRibbon(MM) {
          throw (0, aM.n)("ribbonBuilder")
        }
        static CreateBox(MM) {
          throw (0, aM.n)("boxBuilder")
        }
        static CreateTiledBox(MM) {
          throw (0, aM.n)("tiledBoxBuilder")
        }
        static CreateTiledPlane(MM) {
          throw (0, aM.n)("tiledPlaneBuilder")
        }
        static CreateSphere(MM) {
          throw (0, aM.n)("sphereBuilder")
        }
        static CreateCylinder(MM) {
          throw (0, aM.n)("cylinderBuilder")
        }
        static CreateTorus(MM) {
          throw (0, aM.n)("torusBuilder")
        }
        static CreateLineSystem(MM) {
          throw (0, aM.n)("linesBuilder")
        }
        static CreateDashedLines(MM) {
          throw (0, aM.n)("linesBuilder")
        }
        static CreateGround(MM) {
          throw (0, aM.n)("groundBuilder")
        }
        static CreateTiledGround(MM) {
          throw (0, aM.n)("groundBuilder")
        }
        static CreateGroundFromHeightMap(MM) {
          throw (0, aM.n)("groundBuilder")
        }
        static CreatePlane(MM) {
          throw (0, aM.n)("planeBuilder")
        }
        static CreateDisc(MM) {
          throw (0, aM.n)("discBuilder")
        }
        static CreatePolygon(MM, rM, iM, OM, SM, jM, PM) {
          throw (0, aM.n)("polygonBuilder")
        }
        static CreateIcoSphere(MM) {
          throw (0, aM.n)("icoSphereBuilder")
        }
        static CreatePolyhedron(MM) {
          throw (0, aM.n)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || SM.q.Up();
          throw (0, aM.n)("capsuleBuilder")
        }
        static CreateTorusKnot(MM) {
          throw (0, aM.n)("torusKnotBuilder")
        }
        static ComputeNormals(MM, rM, iM, OM) {
          let jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM = !1,
            tM = !1,
            gM = !1,
            uM = !1,
            RM = 1,
            pM = 0,
            WM = null;
          OM && (wM = !!OM.facetNormals, tM = !!OM.facetPositions, gM = !!OM.facetPartitioning, RM = !0 === OM.useRightHandedSystem ? -1 : 1, pM = OM.ratio || 0, uM = !!OM.depthSort, WM = OM.distanceTo, uM && void 0 === WM && (WM = SM.q.Zero()));
          let sM = 0,
            DM = 0,
            kM = 0,
            ZM = 0;
          for (gM && OM && OM.bbSize && (sM = OM.subDiv.X * pM / OM.bbSize.x, DM = OM.subDiv.Y * pM / OM.bbSize.y, kM = OM.subDiv.Z * pM / OM.bbSize.z, ZM = OM.subDiv.max * OM.subDiv.max, OM.facetPartitioning.length = 0), jM = 0; jM < MM.length; jM++) iM[jM] = 0;
          const oM = rM.length / 3 | 0;
          for (jM = 0; jM < oM; jM++) {
            if (dM = 3 * rM[3 * jM], yM = dM + 1, lM = dM + 2, EM = 3 * rM[3 * jM + 1], UM = EM + 1, GM = EM + 2, CM = 3 * rM[3 * jM + 2], eM = CM + 1, bM = CM + 2, aM = MM[dM] - MM[EM], PM = MM[yM] - MM[UM], nM = MM[lM] - MM[GM], QM = MM[CM] - MM[EM], zM = MM[eM] - MM[UM], LM = MM[bM] - MM[GM], mM = RM * (PM * LM - nM * zM), HM = RM * (nM * QM - aM * LM), hM = RM * (aM * zM - PM * QM), JM = Math.sqrt(mM * mM + HM * HM + hM * hM), JM = 0 === JM ? 1 : JM, mM /= JM, HM /= JM, hM /= JM, wM && OM && (OM.facetNormals[jM].x = mM, OM.facetNormals[jM].y = HM, OM.facetNormals[jM].z = hM), tM && OM && (OM.facetPositions[jM].x = (MM[dM] + MM[EM] + MM[CM]) / 3, OM.facetPositions[jM].y = (MM[yM] + MM[UM] + MM[eM]) / 3, OM.facetPositions[jM].z = (MM[lM] + MM[GM] + MM[bM]) / 3), gM && OM) {
              const rM = Math.floor((OM.facetPositions[jM].x - OM.bInfo.minimum.x * pM) * sM),
                iM = Math.floor((OM.facetPositions[jM].y - OM.bInfo.minimum.y * pM) * DM),
                SM = Math.floor((OM.facetPositions[jM].z - OM.bInfo.minimum.z * pM) * kM),
                aM = Math.floor((MM[dM] - OM.bInfo.minimum.x * pM) * sM),
                PM = Math.floor((MM[yM] - OM.bInfo.minimum.y * pM) * DM),
                nM = Math.floor((MM[lM] - OM.bInfo.minimum.z * pM) * kM),
                QM = Math.floor((MM[EM] - OM.bInfo.minimum.x * pM) * sM),
                zM = Math.floor((MM[UM] - OM.bInfo.minimum.y * pM) * DM),
                LM = Math.floor((MM[GM] - OM.bInfo.minimum.z * pM) * kM),
                mM = Math.floor((MM[CM] - OM.bInfo.minimum.x * pM) * sM),
                HM = Math.floor((MM[eM] - OM.bInfo.minimum.y * pM) * DM),
                hM = Math.floor((MM[bM] - OM.bInfo.minimum.z * pM) * kM),
                JM = aM + OM.subDiv.max * PM + ZM * nM,
                wM = QM + OM.subDiv.max * zM + ZM * LM,
                tM = mM + OM.subDiv.max * HM + ZM * hM,
                gM = rM + OM.subDiv.max * iM + ZM * SM;
              OM.facetPartitioning[gM] = OM.facetPartitioning[gM] ? OM.facetPartitioning[gM] : [], OM.facetPartitioning[JM] = OM.facetPartitioning[JM] ? OM.facetPartitioning[JM] : [], OM.facetPartitioning[wM] = OM.facetPartitioning[wM] ? OM.facetPartitioning[wM] : [], OM.facetPartitioning[tM] = OM.facetPartitioning[tM] ? OM.facetPartitioning[tM] : [], OM.facetPartitioning[JM].push(jM), wM != JM && OM.facetPartitioning[wM].push(jM), tM != wM && tM != JM && OM.facetPartitioning[tM].push(jM), gM != JM && gM != wM && gM != tM && OM.facetPartitioning[gM].push(jM)
            }
            if (uM && OM && OM.facetPositions) {
              const MM = OM.depthSortedFacets[jM];
              MM.ind = 3 * jM, MM.sqDistance = SM.q.DistanceSquared(OM.facetPositions[jM], WM)
            }
            iM[dM] += mM, iM[yM] += HM, iM[lM] += hM, iM[EM] += mM, iM[UM] += HM, iM[GM] += hM, iM[CM] += mM, iM[eM] += HM, iM[bM] += hM
          }
          for (jM = 0; jM < iM.length / 3; jM++) mM = iM[3 * jM], HM = iM[3 * jM + 1], hM = iM[3 * jM + 2], JM = Math.sqrt(mM * mM + HM * HM + hM * hM), JM = 0 === JM ? 1 : JM, mM /= JM, HM /= JM, hM /= JM, iM[3 * jM] = mM, iM[3 * jM + 1] = HM, iM[3 * jM + 2] = hM
        }
        static _ComputeSides(rM, iM, OM, jM, aM, PM, nM) {
          const QM = OM.length,
            zM = jM.length;
          let LM, mM;
          switch (rM = rM || MM.DEFAULTSIDE) {
            case MM.FRONTSIDE:
              break;
            case MM.BACKSIDE:
              for (LM = 0; LM < QM; LM += 3) {
                const MM = OM[LM];
                OM[LM] = OM[LM + 2], OM[LM + 2] = MM
              }
              for (mM = 0; mM < zM; mM++) jM[mM] = -jM[mM];
              break;
            case MM.DOUBLESIDE: {
              const MM = iM.length,
                rM = MM / 3;
              for (let OM = 0; OM < MM; OM++) iM[MM + OM] = iM[OM];
              for (LM = 0; LM < QM; LM += 3) OM[LM + QM] = OM[LM + 2] + rM, OM[LM + 1 + QM] = OM[LM + 1] + rM, OM[LM + 2 + QM] = OM[LM] + rM;
              for (mM = 0; mM < zM; mM++) jM[zM + mM] = -jM[mM];
              const HM = aM.length;
              let hM;
              for (hM = 0; hM < HM; hM++) aM[hM + HM] = aM[hM];
              for (PM = PM || new SM.u(0, 0, 1, 1), nM = nM || new SM.u(0, 0, 1, 1), hM = 0, LM = 0; LM < HM / 2; LM++) aM[hM] = PM.x + (PM.z - PM.x) * aM[hM], aM[hM + 1] = PM.y + (PM.w - PM.y) * aM[hM + 1], aM[hM + HM] = nM.x + (nM.z - nM.x) * aM[hM + HM], aM[hM + HM + 1] = nM.y + (nM.w - nM.y) * aM[hM + HM + 1], hM += 2;
              break
            }
          }
        }
        static Parse(rM) {
          const iM = new MM,
            OM = rM.positions;
          OM && iM.set(OM, jM.j.PositionKind);
          const SM = rM.normals;
          SM && iM.set(SM, jM.j.NormalKind);
          const aM = rM.tangents;
          aM && iM.set(aM, jM.j.TangentKind);
          const nM = rM.uvs;
          nM && iM.set(nM, jM.j.UVKind);
          const QM = rM.uvs2;
          QM && iM.set(QM, jM.j.UV2Kind);
          const zM = rM.uvs3;
          zM && iM.set(zM, jM.j.UV3Kind);
          const LM = rM.uvs4;
          LM && iM.set(LM, jM.j.UV4Kind);
          const mM = rM.uvs5;
          mM && iM.set(mM, jM.j.UV5Kind);
          const hM = rM.uvs6;
          hM && iM.set(hM, jM.j.UV6Kind);
          const JM = rM.colors;
          JM && (iM.set(PM.h.CheckColors4(JM, OM.length / 3), jM.j.ColorKind), void 0 !== rM.hasVertexAlpha && (iM.hasVertexAlpha = rM.hasVertexAlpha));
          const dM = rM.matricesIndices;
          dM && iM.set(dM, jM.j.MatricesIndicesKind);
          const yM = rM.matricesWeights;
          yM && iM.set(yM, jM.j.MatricesWeightsKind);
          const lM = rM.indices;
          lM && (iM.indices = lM);
          const EM = rM.materialInfos;
          if (EM) {
            iM.materialInfos = [];
            for (const MM of EM) {
              const rM = new HM;
              rM.indexCount = MM.indexCount, rM.indexStart = MM.indexStart, rM.verticesCount = MM.verticesCount, rM.verticesStart = MM.verticesStart, rM.materialIndex = MM.materialIndex, iM.materialInfos.push(rM)
            }
          }
          return iM
        }
        static ImportVertexData(rM, iM) {
          const OM = MM.Parse(rM);
          iM.setAllVerticesData(OM, rM.updatable)
        }
      }, (() => {
        const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [QM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], iM = [QM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], hM = [QM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], JM = [QM.k.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, OM.i)(MM, null, rM, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: MM => "_TransformVector3Coordinates" in MM,
            get: MM => MM._TransformVector3Coordinates
          },
          metadata: SM
        }, null, dM), (0, OM.i)(MM, null, iM, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: MM => "_TransformVector3Normals" in MM,
            get: MM => MM._TransformVector3Normals
          },
          metadata: SM
        }, null, dM), (0, OM.i)(MM, null, hM, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: MM => "_TransformVector4Normals" in MM,
            get: MM => MM._TransformVector4Normals
          },
          metadata: SM
        }, null, dM), (0, OM.i)(MM, null, JM, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: MM => "_FlipFaces" in MM,
            get: MM => MM._FlipFaces
          },
          metadata: SM
        }, null, dM), SM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SM
        })
      })(), MM.FRONTSIDE = ((0, OM.m)(MM, dM), 0), MM.BACKSIDE = 1, MM.DOUBLESIDE = 2, MM.DEFAULTSIDE = 0, MM._UniqueIdGenerator = 0, MM
    })()
  },
  41564: (MM, rM, iM) => {
    var OM = iM(38040),
      SM = iM(39711),
      jM = iM(41410),
      aM = iM(41502),
      PM = iM(41250);
    const nM = "bakedVertexAnimationSettingsInstanced";

    function QM(MM) {
      const rM = MM.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return rM instanceof Float32Array || rM instanceof Uint16Array
    }

    function zM(MM, rM, iM, OM) {
      iM.P_(Number.POSITIVE_INFINITY), OM.P_(Number.NEGATIVE_INFINITY);
      for (let SM = 0; SM < 3 * rM; SM += 3) {
        const rM = MM[SM],
          jM = MM[SM + 1],
          aM = MM[SM + 2];
        rM < iM.x && (iM.x = rM), jM < iM.y && (iM.y = jM), aM < iM.z && (iM.z = aM), rM > OM.x && (OM.x = rM), jM > OM.y && (OM.y = jM), aM > OM.z && (OM.z = aM)
      }
    }

    function LM(MM, rM, iM) {
      iM && (MM.x -= MM.x * iM.x + iM.y, MM.y -= MM.y * iM.x + iM.y, MM.z -= MM.z * iM.x + iM.y, rM.x += rM.x * iM.x + iM.y, rM.y += rM.y * iM.x + iM.y, rM.z += rM.z * iM.x + iM.y)
    }

    function mM(MM, rM, iM, SM, jM) {
      const aM = OM.l.sh[7],
        PM = OM.l.sh[8];
      for (let nM = 0; nM < 2; ++nM)
        for (let QM = 0; QM < 2; ++QM)
          for (let zM = 0; zM < 2; ++zM) aM.set(nM ? rM.x : MM.x, QM ? rM.y : MM.y, zM ? rM.z : MM.z), OM.q.TransformCoordinatesToRef(aM, iM, PM), SM.minimizeInPlace(PM), jM.maximizeInPlace(PM)
    }

    function HM(MM, rM, iM, SM, jM) {
      const aM = OM.l.sh[7];
      for (let PM = 0; PM < 3 * rM; PM += 3) OM.q.TransformCoordinatesFromFloatsToRef(MM[PM], MM[PM + 1], MM[PM + 2], iM, aM), SM.minimizeInPlace(aM), jM.maximizeInPlace(aM)
    }
    let hM = !1;
    hM || (hM = !0, aM.d.prototype.thinInstanceAdd = function(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Hk().ph().getCaps().instancedArrays) return SM.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(MM) ? MM.length : 1);
      const iM = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(MM))
        for (let OM = 0; OM < MM.length; ++OM) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, MM[OM], OM === MM.length - 1 && rM);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, MM, rM);
      return iM
    }, aM.d.prototype.thinInstanceAddSelf = function() {
      let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(OM.d.IdentityReadOnly, MM)
    }, aM.d.prototype.thinInstanceRegisterAttribute = function(MM, rM) {
      MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), this.removeVerticesData(MM), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[MM] = rM, this._userThinInstanceBuffersStorage.sizes[MM] = rM * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[MM] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[MM]), this._userThinInstanceBuffersStorage.vertexBuffers[MM] = new PM.j(this.ph(), this._userThinInstanceBuffersStorage.data[MM], MM, !0, !1, rM, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[MM])
    }, aM.d.prototype.thinInstanceSetMatrixAt = function(MM, rM) {
      let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || MM >= this._thinInstanceDataStorage.instancesCount) return !1;
      const OM = this._thinInstanceDataStorage.matrixData;
      return rM.copyToArray(OM, 16 * MM), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[MM] = rM), iM && (this.f_("matrix"), this.kh || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, aM.d.prototype.thinInstanceSetAttributeAt = function(MM, rM, iM) {
      let OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[MM] || rM >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(MM, 0), this._userThinInstanceBuffersStorage.data[MM].set(iM, rM * this._userThinInstanceBuffersStorage.strides[MM]), OM && this.f_(MM), !0)
    }, Object.defineProperty(aM.d.prototype, "y_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(MM) {
        const rM = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        MM <= (rM ? rM.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = MM)
      },
      enumerable: !0,
      configurable: !0
    }), aM.d.prototype._thinInstanceCreateMatrixBuffer = function(MM, rM) {
      let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const OM = new PM.d(this.ph(), rM, !iM, 16, !1, !0);
      for (let SM = 0; SM < 4; SM++) this.setVerticesBuffer(OM.createVertexBuffer(MM + SM, 4 * SM, 4));
      return OM
    }, aM.d.prototype.v_ = function(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (iM = iM || 16, "matrix" === MM) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = rM ? rM.length : 32 * iM, this._thinInstanceDataStorage.matrixData = rM, this._thinInstanceDataStorage.worldMatrices = null, null !== rM ? (this._thinInstanceDataStorage.instancesCount = rM.length / iM, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", rM, OM), this.kh || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.kh || this.refreshBoundingInfo());
      else if ("previousMatrix" === MM) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = rM, null !== rM && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", rM, OM));
      else if ("splatIndex" === MM && rM) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = rM.length / iM, this._userThinInstanceBuffersStorage.data[MM] = rM, this._userThinInstanceBuffersStorage.strides[MM] = iM, this._userThinInstanceBuffersStorage.sizes[MM] = rM.length;
        const OM = new PM.d(this.ph(), rM, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = OM;
        for (let rM = 0; rM < 4; rM++) this.setVerticesBuffer(OM.createVertexBuffer(MM + rM, 4 * rM, 4))
      } else MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), null === rM ? this._userThinInstanceBuffersStorage?.data[MM] && (this.removeVerticesData(MM), delete this._userThinInstanceBuffersStorage.data[MM], delete this._userThinInstanceBuffersStorage.strides[MM], delete this._userThinInstanceBuffersStorage.sizes[MM], delete this._userThinInstanceBuffersStorage.vertexBuffers[MM]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[MM] = rM, this._userThinInstanceBuffersStorage.strides[MM] = iM, this._userThinInstanceBuffersStorage.sizes[MM] = rM.length, this._userThinInstanceBuffersStorage.vertexBuffers[MM] = new PM.j(this.ph(), rM, MM, !OM, !1, iM, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[MM]))
    }, aM.d.prototype.f_ = function(MM) {
      "matrix" === MM ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(MM), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === MM ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(MM), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === MM ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[MM], 0, this._thinInstanceDataStorage.instancesCount) : (MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[MM] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[MM].isUpdatable() && this._thinInstanceRecreateBuffer(MM), this._userThinInstanceBuffersStorage.vertexBuffers[MM].updateDirectly(this._userThinInstanceBuffersStorage.data[MM], 0)))
    }, aM.d.prototype.thinInstancePartialBufferUpdate = function(MM, rM, iM) {
      if ("matrix" === MM) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof rM ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * iM * Float32Array.BYTES_PER_ELEMENT, 16 * rM), 16 * iM) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(rM, iM));
      else if (MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[MM]) {
        const OM = this._userThinInstanceBuffersStorage.vertexBuffers[MM];
        if ("number" === typeof rM) {
          const OM = new Float32Array(this._userThinInstanceBuffersStorage.data[MM].buffer, this._userThinInstanceBuffersStorage.data[MM].byteOffset + iM * this._userThinInstanceBuffersStorage.strides[MM] * Float32Array.BYTES_PER_ELEMENT, rM * this._userThinInstanceBuffersStorage.strides[MM]);
          this._userThinInstanceBuffersStorage.vertexBuffers[MM].updateDirectly(OM, iM * this._userThinInstanceBuffersStorage.strides[MM])
        } else OM.updateDirectly(rM, iM)
      }
    }, aM.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const MM = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let rM = 0; rM < this._thinInstanceDataStorage.instancesCount; ++rM) this._thinInstanceDataStorage.worldMatrices[rM] = OM.d.FromArray(MM, 16 * rM)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, aM.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const aM = this._thinInstanceDataStorage.boundingVectors;
      if (MM || !this.rawBoundingInfo) {
        if (aM.length = 0, SM && function(MM, rM, iM) {
            const SM = MM._userThinInstanceBuffersStorage,
              aM = SM?.data[nM],
              hM = SM?.strides[nM];
            if (!aM || !hM || hM < 4 || !QM(MM)) return !1;
            const JM = MM._thinInstanceDataStorage.matrixData;
            if (!JM) return !1;
            const dM = {},
              yM = OM.l.Vector4[0],
              lM = OM.l.sh[1],
              EM = OM.l.sh[2],
              UM = OM.l.sh[3],
              GM = OM.l.sh[4],
              CM = OM.l.sh[5],
              eM = OM.l.sh[6],
              bM = OM.l.Matrix[2],
              wM = MM.geometry ? MM.geometry.boundingBias : null,
              tM = MM.getTotalVertices();
            lM.P_(Number.POSITIVE_INFINITY), EM.P_(Number.NEGATIVE_INFINITY), UM.P_(Number.POSITIVE_INFINITY), GM.P_(Number.NEGATIVE_INFINITY);
            for (let jM = 0; jM < MM._thinInstanceDataStorage.instancesCount; ++jM) {
              const rM = jM * hM;
              yM.set(aM[rM], aM[rM + 1], aM[rM + 2], aM[rM + 3]);
              const SM = MM._getData({
                applyMorph: iM,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: yM,
                updatePositionsArray: !1,
                cache: dM
              }, null, PM.j.PositionKind);
              if (!SM) return !1;
              zM(SM, tM, CM, eM), LM(CM, eM, wM), lM.minimizeInPlace(CM), EM.maximizeInPlace(eM), OM.d.FromArrayToRef(JM, 16 * jM, bM), wM ? mM(CM, eM, bM, UM, GM) : HM(SM, tM, bM, UM, GM)
            }
            return !(!isFinite(lM.x) || !isFinite(UM.x)) && (MM.aY().reConstruct(UM, GM), MM.rawBoundingInfo = new jM.d(lM, EM), function(MM, rM) {
              MM.length = 0;
              for (let iM = 0; iM < rM.boundingBox.vectors.length; ++iM) MM.push(rM.boundingBox.vectors[iM].clone())
            }(rM, MM.rawBoundingInfo), MM._updateBoundingInfo(), !0)
          }(this, aM, iM)) return;
        SM && this.bakedVertexAnimationManager?.isEnabled && QM(this) ? this.refreshBoundingInfo({
          applySkeleton: rM,
          applyMorph: iM,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(rM, iM);
        const MM = this.aY();
        this.rawBoundingInfo = new jM.d(MM.minimum, MM.maximum)
      }
      const hM = this.aY(),
        JM = this._thinInstanceDataStorage.matrixData;
      if (0 === aM.length)
        for (let OM = 0; OM < hM.boundingBox.vectors.length; ++OM) aM.push(hM.boundingBox.vectors[OM].clone());
      OM.l.sh[0].P_(Number.POSITIVE_INFINITY), OM.l.sh[1].P_(Number.NEGATIVE_INFINITY);
      for (let jM = 0; jM < this._thinInstanceDataStorage.instancesCount; ++jM) {
        OM.d.FromArrayToRef(JM, 16 * jM, OM.l.Matrix[0]);
        for (let MM = 0; MM < aM.length; ++MM) OM.q.TransformCoordinatesToRef(aM[MM], OM.l.Matrix[0], OM.l.sh[2]), OM.l.sh[0].minimizeInPlace(OM.l.sh[2]), OM.l.sh[1].maximizeInPlace(OM.l.sh[2])
      }
      hM.reConstruct(OM.l.sh[0], OM.l.sh[1]), this._updateBoundingInfo()
    }, aM.d.prototype._thinInstanceRecreateBuffer = function(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === MM ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, rM)) : "previousMatrix" === MM ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, rM)) : (MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[MM]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[MM] = new PM.j(this.ph(), this._userThinInstanceBuffersStorage.data[MM], MM, !rM, !1, this._userThinInstanceBuffersStorage.strides[MM], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[MM]))
    }, aM.d.prototype._thinInstanceUpdateBufferSize = function(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      MM === PM.j.ColorKind && (MM = PM.j.ColorInstanceKind);
      const iM = "matrix" === MM;
      if (!iM && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[MM])) return;
      const OM = iM ? 16 : this._userThinInstanceBuffersStorage.strides[MM],
        SM = iM ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[MM];
      let jM = iM ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[MM];
      const aM = (this._thinInstanceDataStorage.instancesCount + rM) * OM;
      let nM = SM;
      for (; nM < aM;) nM *= 2;
      if (!jM || SM != nM) {
        if (jM) {
          const MM = new Float32Array(nM);
          MM.set(jM, 0), jM = MM
        } else jM = new Float32Array(nM);
        iM ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", jM, !1), this._thinInstanceDataStorage.matrixData = jM, this._thinInstanceDataStorage.matrixBufferSize = nM, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", jM, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[MM]?.dispose(), this._userThinInstanceBuffersStorage.data[MM] = jM, this._userThinInstanceBuffersStorage.sizes[MM] = nM, this._userThinInstanceBuffersStorage.vertexBuffers[MM] = new PM.j(this.ph(), jM, MM, !0, !1, OM, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[MM]))
      }
    }, aM.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, aM.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41536: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => lM,
      e: () => JM
    });
    var OM, SM, jM, aM, PM = iM(41099),
      nM = iM(41105),
      QM = iM(41121),
      zM = iM(38068),
      LM = iM(38040),
      mM = iM(41328),
      HM = iM(38085),
      hM = iM(40990);
    let JM = (() => {
      var MM;
      let rM, iM, OM, SM, jM, aM, HM, hM, JM, dM = mM.d,
        yM = [],
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        wM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [];
      return MM = class extends dM {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(rM) {
          this._billboardMode !== rM && (this._billboardMode = rM, this._cache.useBillboardPosition = 0 !== (this._billboardMode & MM.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(MM) {
          this._infiniteDistance !== MM && (this._infiniteDistance = MM)
        }
        constructor(rM) {
          let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(rM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new LM.q(0, 0, 1), this._up = new LM.q(0, 1, 0), this._right = new LM.q(1, 0, 0), this._position = (0, PM.m)(this, yM, LM.q.Zero()), this._rotation = ((0, PM.m)(this, lM), (0, PM.m)(this, EM, LM.q.Zero())), this._rotationQuaternion = ((0, PM.m)(this, UM), (0, PM.m)(this, GM, null)), this._scaling = ((0, PM.m)(this, CM), (0, PM.m)(this, eM, LM.q.One())), this._transformToBoneReferal = ((0, PM.m)(this, bM), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, PM.m)(this, wM, MM.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, PM.m)(this, tM), (0, PM.m)(this, gM, 1)), this._infiniteDistance = ((0, PM.m)(this, uM), (0, PM.m)(this, RM, !1)), this.ignoreNonUniformScaling = ((0, PM.m)(this, pM), (0, PM.m)(this, WM, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, PM.m)(this, sM), (0, PM.m)(this, DM, !1)), this._poseMatrix = ((0, PM.m)(this, kM), null), this._localMatrix = LM.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = LM.q.Zero(), this._absoluteScaling = LM.q.Zero(), this._absoluteRotationQuaternion = LM.h.Identity(), this._pivotMatrix = LM.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new zM.d, this._nonUniformScaling = !1, iM && this.Hk().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(MM) {
          this._position = MM, this._markAsDirtyInternal()
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
        set rotation(MM) {
          this._rotation = MM, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get UL() {
          return this._scaling
        }
        set UL(MM) {
          this._scaling = MM, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(MM) {
          this._rotationQuaternion = MM, MM && this._rotation.P_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return LM.q.TransformNormalFromFloatsToRef(0, 0, this.Hk().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return LM.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return LM.q.TransformNormalFromFloatsToRef(this.Hk().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(MM) {
          return this._poseMatrix ? (this._poseMatrix.jR(MM), this) : (this._poseMatrix = MM.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = LM.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const rM = this._cache;
          return this._billboardMode === rM.billboardMode && this._billboardMode === MM.BILLBOARDMODE_NONE && (!rM.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const MM = this._cache;
          MM.localMatrixUpdated = !1, MM.billboardMode = -1, MM.infiniteDistance = !1, MM.useBillboardPosition = !1
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
        setPreTransformMatrix(MM) {
          return this.setPivotMatrix(MM, !1)
        }
        setPivotMatrix(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.jR(MM), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = rM, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = LM.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            rM = arguments.length > 1 ? arguments[1] : void 0,
            iM = arguments.length > 2 ? arguments[2] : void 0;
          const OM = this.clone("Clone of " + (this.name || this.id), MM || this.parent, !0);
          OM && iM && iM(this, OM);
          for (const SM of this.getChildTransformNodes(!0)) SM.instantiateHierarchy(OM, rM, iM);
          return OM
        }
        Yk() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return MM ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.P_(0), this._rotationQuaternion = this._rotationQuaternion || LM.h.Identity(), MM.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = MM, this._absolutePosition.iMM(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get TaM() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(MM) {
          if (!MM) return this;
          let rM, iM, OM;
          if (void 0 === MM.x) {
            if (arguments.length < 3) return this;
            rM = arguments[0], iM = arguments[1], OM = arguments[2]
          } else rM = MM.x, iM = MM.y, OM = MM.z;
          if (this.parent) {
            const MM = LM.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(MM), LM.q.TransformCoordinatesFromFloatsToRef(rM, iM, OM, MM, this.position)
          } else this.position.x = rM, this.position.y = iM, this.position.z = OM;
          return this._absolutePosition.jR(MM), this
        }
        setPositionWithLocalVector(MM) {
          return this.computeWorldMatrix(), this.position = LM.q.TransformNormal(MM, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const MM = LM.l.Matrix[0];
          return this._localMatrix.invertToRef(MM), LM.q.TransformNormal(this.position, MM)
        }
        locallyTranslate(MM) {
          return this.computeWorldMatrix(!0), this.position = LM.q.TransformCoordinates(MM, this._localMatrix), this
        }
        lookAt(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const aM = MM._LookAtVectorCache,
            PM = 0 === jM ? this.position : this.getAbsolutePosition();
          if (rM.subtractToRef(PM, aM), this.setDirection(aM, iM, OM, SM), 1 === jM && this.parent)
            if (this.rotationQuaternion) {
              const MM = LM.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(MM);
              const rM = LM.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(rM), rM.invert(), MM.multiplyToRef(rM, MM), this.rotationQuaternion.fromRotationMatrix(MM)
            } else {
              const MM = LM.l.Quaternion[0];
              LM.h.FromEulerVectorToRef(this.rotation, MM);
              const rM = LM.l.Matrix[0];
              MM.toRotationMatrix(rM);
              const iM = LM.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(iM), iM.invert(), rM.multiplyToRef(iM, rM), MM.fromRotationMatrix(rM), MM.toEulerAnglesToRef(this.rotation)
            } return this
        }
        eT(MM) {
          const rM = LM.q.Zero();
          return this.getDirectionToRef(MM, rM), rM
        }
        getDirectionToRef(MM, rM) {
          return LM.q.TransformNormalToRef(MM, this.getWorldMatrix(), rM), this
        }
        setDirection(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const SM = -Math.atan2(MM.z, MM.x) + Math.PI / 2,
            jM = Math.sqrt(MM.x * MM.x + MM.z * MM.z),
            aM = -Math.atan2(MM.y, jM);
          return this.rotationQuaternion ? LM.h.RotationYawPitchRollToRef(SM + rM, aM + iM, OM, this.rotationQuaternion) : (this.rotation.x = aM + iM, this.rotation.y = SM + rM, this.rotation.z = OM), this
        }
        setPivotPoint(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Hk().getRenderId() && this.computeWorldMatrix(!0);
          const iM = this.getWorldMatrix();
          if (1 == rM) {
            const rM = LM.l.Matrix[0];
            iM.invertToRef(rM), MM = LM.q.TransformCoordinates(MM, rM)
          }
          return this.setPivotMatrix(LM.d.Translation(-MM.x, -MM.y, -MM.z), !0)
        }
        getPivotPoint() {
          const MM = LM.q.Zero();
          return this.getPivotPointToRef(MM), MM
        }
        getPivotPointToRef(MM) {
          return MM.x = -this._pivotMatrix.m[12], MM.y = -this._pivotMatrix.m[13], MM.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const MM = LM.q.Zero();
          return this.getAbsolutePivotPointToRef(MM), MM
        }
        getAbsolutePivotPointToRef(MM) {
          return this.getPivotPointToRef(MM), LM.q.TransformCoordinatesToRef(MM, this.getWorldMatrix(), MM), this
        }
        FrM(MM) {
          if (this._isDirty) return this;
          if (this._children)
            for (const rM of this._children) rM.FrM(MM);
          return super.FrM(MM)
        }
        setParent(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!rM && !this.parent) return this;
          const SM = LM.l.Quaternion[0],
            jM = LM.l.sh[0],
            aM = LM.l.sh[1],
            PM = LM.l.Matrix[1];
          LM.d.IdentityToRef(PM);
          const nM = LM.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let QM = this.rotationQuaternion;
          return QM || (QM = MM._TmpRotation, LM.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, QM)), LM.d.ComposeToRef(this.UL, QM, this.position, nM), this.parent && nM.multiplyToRef(this.parent.computeWorldMatrix(!0), nM), rM && (rM.computeWorldMatrix(!0).invertToRef(PM), nM.multiplyToRef(PM, nM)), nM.decompose(aM, SM, jM, iM ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.jR(SM) : SM.toEulerAnglesToRef(this.rotation), this.UL.jR(aM), this.position.jR(jM), this.parent = rM, OM && this.setPivotMatrix(LM.d.Identity()), this
        }
        addChild(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return MM.setParent(this, rM), this
        }
        removeChild(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return MM.parent !== this || MM.setParent(null, rM), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(MM) {
          return this._nonUniformScaling !== MM && (this._nonUniformScaling = MM, !0)
        }
        attachToBone(MM, rM) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = rM, this.parent = MM, MM.getSkeleton().prepare(!0), MM.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = MM ? this._currentParentWhenAttachingToBone : null, this) : (MM && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(rM, iM, OM) {
          let SM;
          if (rM.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.P_(0)), OM && 0 !== OM) {
            if (this.parent) {
              const MM = this.parent.getWorldMatrix(),
                OM = LM.l.Matrix[0];
              MM.invertToRef(OM), rM = LM.q.TransformNormal(rM, OM), MM.determinant() < 0 && (iM *= -1)
            }
            SM = LM.h.RotationAxisToRef(rM, iM, MM._RotationAxisCache), SM.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else SM = LM.h.RotationAxisToRef(rM, iM, MM._RotationAxisCache), this.rotationQuaternion.multiplyToRef(SM, this.rotationQuaternion);
          return this
        }
        rotateAround(MM, rM, iM) {
          rM.normalize(), this.rotationQuaternion || (this.rotationQuaternion = LM.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.P_(0));
          const OM = LM.l.sh[0],
            SM = LM.l.sh[1],
            jM = LM.l.sh[2],
            aM = LM.l.Quaternion[0],
            PM = LM.l.Matrix[0],
            nM = LM.l.Matrix[1],
            QM = LM.l.Matrix[2],
            zM = LM.l.Matrix[3];
          return MM.subtractToRef(this.position, OM), LM.d.TranslationToRef(OM.x, OM.y, OM.z, PM), LM.d.TranslationToRef(-OM.x, -OM.y, -OM.z, nM), LM.d.RotationAxisToRef(rM, iM, QM), nM.multiplyToRef(QM, zM), zM.multiplyToRef(PM, zM), zM.decompose(SM, aM, jM), this.position.addInPlace(jM), aM.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(MM, rM, iM) {
          const OM = MM.scale(rM);
          if (iM && 0 !== iM) this.setAbsolutePosition(this.getAbsolutePosition().add(OM));
          else {
            const MM = this.getPositionExpressedInLocalSpace().add(OM);
            this.setPositionWithLocalVector(MM)
          }
          return this
        }
        addRotation(MM, rM, iM) {
          let OM;
          this.rotationQuaternion ? OM = this.rotationQuaternion : (OM = LM.l.Quaternion[1], LM.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, OM));
          const SM = LM.l.Quaternion[0];
          return LM.h.RotationYawPitchRollToRef(rM, MM, iM, SM), OM.multiplyInPlace(SM), this.rotationQuaternion || OM.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== MM.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const OM = this.Hk().getRenderId();
          if (!this._isDirty && !rM && (this._currentRenderId === OM || this.isSynchronized())) return this._currentRenderId = OM, this._worldMatrix;
          iM = iM || this.Hk().activeCamera, this._updateCache();
          const SM = this._cache;
          SM.pivotMatrixUpdated = !1, SM.billboardMode = this.billboardMode, SM.infiniteDistance = this.infiniteDistance, SM.parent = this._parentNode, this._currentRenderId = OM, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const jM = this._getEffectiveParent(),
            aM = MM._TmpScaling;
          let PM, nM = this._position;
          if (this._infiniteDistance && !this.parent && iM) {
            const rM = iM.getWorldMatrix().m;
            nM = MM._TmpTranslation, nM.iMM(this._position.x + rM[12], this._position.y + rM[13], this._position.z + rM[14])
          }
          if (aM.iMM(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, PM = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(LM.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.iMM(0, 0, 0))
            }
          } else PM = MM._TmpRotation, LM.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, PM);
          if (this._usePivotMatrix) {
            const MM = LM.l.Matrix[1];
            LM.d.ScalingToRef(aM.x, aM.y, aM.z, MM);
            const rM = LM.l.Matrix[0];
            PM.toRotationMatrix(rM), this._pivotMatrix.multiplyToRef(MM, LM.l.Matrix[4]), LM.l.Matrix[4].multiplyToRef(rM, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(nM.x, nM.y, nM.z)
          } else LM.d.ComposeToRef(aM, PM, nM, this._localMatrix);
          if (jM && jM.getWorldMatrix) {
            if (rM && jM.computeWorldMatrix(rM), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const MM = this.parent;
                MM.getSkeleton().prepare(), MM.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), LM.l.Matrix[7])
              } else LM.l.Matrix[7].jR(jM.getWorldMatrix());
              const rM = LM.l.sh[5],
                iM = LM.l.sh[6],
                OM = LM.l.Quaternion[0];
              LM.l.Matrix[7].decompose(iM, OM, rM), LM.d.ScalingToRef(iM.x, iM.y, iM.z, LM.l.Matrix[7]), LM.l.Matrix[7].setTranslation(rM), MM.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(OM, rM), this._localMatrix.setTranslation(rM)), this._localMatrix.multiplyToRef(LM.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const MM = this.parent;
              MM.getSkeleton().prepare(), this._localMatrix.multiplyToRef(MM.getFinalMatrix(), LM.l.Matrix[6]), LM.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(jM.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.jR(this._localMatrix);
          if (iM && this.billboardMode)
            if (SM.useBillboardPosition) {
              const rM = LM.l.sh[0];
              this._worldMatrix.getTranslationToRef(rM);
              const OM = iM.globalPosition;
              this._worldMatrix.invertToRef(LM.l.Matrix[1]);
              const SM = LM.l.sh[1];
              LM.q.TransformCoordinatesToRef(OM, LM.l.Matrix[1], SM), SM.normalize();
              const jM = -Math.atan2(SM.z, SM.x) + Math.PI / 2,
                aM = Math.sqrt(SM.x * SM.x + SM.z * SM.z),
                PM = -Math.atan2(SM.y, aM);
              if (LM.h.RotationYawPitchRollToRef(jM, PM, 0, LM.l.Quaternion[0]), (this.billboardMode & MM.BILLBOARDMODE_ALL) !== MM.BILLBOARDMODE_ALL) {
                const rM = LM.l.sh[1];
                LM.l.Quaternion[0].toEulerAnglesToRef(rM), (this.billboardMode & MM.BILLBOARDMODE_X) !== MM.BILLBOARDMODE_X && (rM.x = 0), (this.billboardMode & MM.BILLBOARDMODE_Y) !== MM.BILLBOARDMODE_Y && (rM.y = 0), (this.billboardMode & MM.BILLBOARDMODE_Z) !== MM.BILLBOARDMODE_Z && (rM.z = 0), LM.d.RotationYawPitchRollToRef(rM.y, rM.x, rM.z, LM.l.Matrix[0])
              } else LM.d.FromQuaternionToRef(LM.l.Quaternion[0], LM.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(LM.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(LM.l.sh[0])
            } else {
              const rM = LM.l.sh[0];
              this._worldMatrix.getTranslationToRef(rM), LM.l.Matrix[1].jR(iM.getViewMatrix());
              const OM = this.Hk().useRightHandedSystem;
              if (OM && LM.l.Matrix[1].multiplyToRef(MM._TmpRHRestore, LM.l.Matrix[1]), LM.l.Matrix[1].setTranslationFromFloats(0, 0, 0), LM.l.Matrix[1].invertToRef(LM.l.Matrix[0]), (this.billboardMode & MM.BILLBOARDMODE_ALL) !== MM.BILLBOARDMODE_ALL) {
                LM.l.Matrix[0].decompose(void 0, LM.l.Quaternion[0], void 0);
                const rM = LM.l.sh[1];
                LM.l.Quaternion[0].toEulerAnglesToRef(rM), (this.billboardMode & MM.BILLBOARDMODE_X) !== MM.BILLBOARDMODE_X && (rM.x = 0), (this.billboardMode & MM.BILLBOARDMODE_Y) !== MM.BILLBOARDMODE_Y && (rM.y = 0), (this.billboardMode & MM.BILLBOARDMODE_Z) !== MM.BILLBOARDMODE_Z && (rM.z = 0), OM && (rM.y += Math.PI), LM.d.RotationYawPitchRollToRef(rM.y, rM.x, rM.z, LM.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(LM.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(LM.l.sh[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : jM && jM._nonUniformScaling ? this._updateNonUniformScalingState(jM._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.iMM(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = LM.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), MM) {
            const MM = this.getChildren();
            for (let rM = 0; rM < MM.length; ++rM) {
              const iM = MM[rM];
              if (iM) {
                iM.computeWorldMatrix();
                const MM = LM.l.Matrix[0];
                iM._localMatrix.multiplyToRef(this._localMatrix, MM);
                const rM = LM.l.Quaternion[0];
                MM.decompose(iM.UL, rM, iM.position), iM.rotationQuaternion ? iM.rotationQuaternion.jR(rM) : rM.toEulerAnglesToRef(iM.rotation)
              }
            }
          }
          this.UL.iMM(1, 1, 1), this.position.iMM(0, 0, 0), this.rotation.iMM(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = LM.h.Identity()), this._worldMatrix = LM.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(MM) {
          return this.onAfterWorldMatrixUpdateObservable.add(MM), this
        }
        unregisterAfterWorldMatrixUpdate(MM) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(MM), this
        }
        getPositionInCameraSpace() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return MM || (MM = this.Hk().activeCamera), LM.q.TransformCoordinates(this.getAbsolutePosition(), MM.getViewMatrix())
        }
        getDistanceToCamera() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return MM || (MM = this.Hk().activeCamera), this.getAbsolutePosition().subtract(MM.globalPosition).length()
        }
        clone(rM, iM, OM) {
          const SM = QM.b.Clone((() => new MM(rM, this.Hk())), this);
          if (SM.name = rM, SM.id = rM, iM && (SM.parent = iM), !OM) {
            const MM = this.getDescendants(!0);
            for (let iM = 0; iM < MM.length; iM++) {
              const OM = MM[iM];
              OM.clone && OM.clone(rM + "." + OM.name, SM)
            }
          }
          return SM
        }
        serialize(MM) {
          const rM = QM.b.Serialize(this, MM);
          return rM.type = this.getClassName(), rM.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(rM), rM.localMatrix = this.getPivotMatrix().HOM(), rM.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (rM.Yk = !0), QM.b.AppendSerializedAnimations(this, rM), rM.Ld = this.serializeAnimationRanges(), rM
        }
        getChildTransformNodes(rM, iM) {
          const OM = [];
          return this._getDescendants(OM, rM, (rM => (!iM || iM(rM)) && rM instanceof MM)), OM
        }
        dispose(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Hk().stopAnimation(this), this.Hk().removeTransformNode(this), this._parentContainer) {
            const MM = this._parentContainer.transformNodes.indexOf(this);
            MM > -1 && this._parentContainer.transformNodes.splice(MM, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), MM) {
            const MM = this.getChildTransformNodes(!0);
            for (const rM of MM) rM.parent = null, rM.computeWorldMatrix(!0)
          }
          super.dispose(MM, rM)
        }
        normalizeToUnitCube() {
          let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0,
            OM = null,
            SM = null;
          rM && (this.rotationQuaternion ? (SM = this.rotationQuaternion.clone(), this.rotationQuaternion.iMM(0, 0, 0, 1)) : this.rotation && (OM = this.rotation.clone(), this.rotation.iMM(0, 0, 0)));
          const jM = this.getHierarchyBoundingVectors(MM, iM),
            aM = jM.max.subtract(jM.min),
            PM = Math.max(aM.x, aM.y, aM.z);
          if (0 === PM) return this;
          const nM = 1 / PM;
          return this.UL.scaleInPlace(nM), rM && (this.rotationQuaternion && SM ? this.rotationQuaternion.jR(SM) : this.rotation && OM && this.rotation.jR(OM)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const QM = "function" === typeof Symbol && Symbol.metadata ? Object.create(dM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, nM.J)("position")], iM = [(0, nM.J)("rotation")], OM = [(0, nM.z)("rotationQuaternion")], SM = [(0, nM.J)("UL")], jM = [(0, nM.L)("billboardMode")], aM = [(0, nM.L)()], HM = [(0, nM.L)("infiniteDistance")], hM = [(0, nM.L)()], JM = [(0, nM.L)()], (0, PM.i)(null, null, rM, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: MM => "_position" in MM,
            get: MM => MM._position,
            set: (MM, rM) => {
              MM._position = rM
            }
          },
          metadata: QM
        }, yM, lM), (0, PM.i)(null, null, iM, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: MM => "_rotation" in MM,
            get: MM => MM._rotation,
            set: (MM, rM) => {
              MM._rotation = rM
            }
          },
          metadata: QM
        }, EM, UM), (0, PM.i)(null, null, OM, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: MM => "_rotationQuaternion" in MM,
            get: MM => MM._rotationQuaternion,
            set: (MM, rM) => {
              MM._rotationQuaternion = rM
            }
          },
          metadata: QM
        }, GM, CM), (0, PM.i)(null, null, SM, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: MM => "_scaling" in MM,
            get: MM => MM._scaling,
            set: (MM, rM) => {
              MM._scaling = rM
            }
          },
          metadata: QM
        }, eM, bM), (0, PM.i)(null, null, jM, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "_billboardMode" in MM,
            get: MM => MM._billboardMode,
            set: (MM, rM) => {
              MM._billboardMode = rM
            }
          },
          metadata: QM
        }, wM, tM), (0, PM.i)(null, null, aM, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: MM => "scalingDeterminant" in MM,
            get: MM => MM.scalingDeterminant,
            set: (MM, rM) => {
              MM.scalingDeterminant = rM
            }
          },
          metadata: QM
        }, gM, uM), (0, PM.i)(null, null, HM, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: MM => "_infiniteDistance" in MM,
            get: MM => MM._infiniteDistance,
            set: (MM, rM) => {
              MM._infiniteDistance = rM
            }
          },
          metadata: QM
        }, RM, pM), (0, PM.i)(null, null, hM, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: MM => "ignoreNonUniformScaling" in MM,
            get: MM => MM.ignoreNonUniformScaling,
            set: (MM, rM) => {
              MM.ignoreNonUniformScaling = rM
            }
          },
          metadata: QM
        }, WM, sM), (0, PM.i)(null, null, JM, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: MM => "reIntegrateRotationIntoRotationQuaternion" in MM,
            get: MM => MM.reIntegrateRotationIntoRotationQuaternion,
            set: (MM, rM) => {
              MM.reIntegrateRotationIntoRotationQuaternion = rM
            }
          },
          metadata: QM
        }, DM, kM), QM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QM
        })
      })(), MM.BILLBOARDMODE_NONE = 0, MM.BILLBOARDMODE_X = 1, MM.BILLBOARDMODE_Y = 2, MM.BILLBOARDMODE_Z = 4, MM.BILLBOARDMODE_ALL = 7, MM.BILLBOARDMODE_USE_POSITION = 128, MM.BillboardUseParentOrientation = !1, MM._TmpRotation = LM.h.Zero(), MM._TmpScaling = LM.q.Zero(), MM._TmpTranslation = LM.q.Zero(), MM._TmpRHRestore = LM.d.Scaling(1, 1, -1), MM._LookAtVectorCache = new LM.q(0, 0, 0), MM._RotationAxisCache = new LM.h, MM
    })();

    function dM(MM, rM, iM) {
      const OM = QM.b.Parse((() => new JM(MM.name, rM)), MM, rM, iM);
      if (MM.localMatrix ? OM.setPreTransformMatrix(LM.d.FromArray(MM.localMatrix)) : MM.pivotMatrix && OM.setPivotMatrix(LM.d.FromArray(MM.pivotMatrix)), OM.kR(MM.isEnabled), OM._waitingParsedUniqueId = MM.uniqueId, void 0 !== MM.parentId && (OM._waitingParentId = MM.parentId), void 0 !== MM.parentInstanceIndex && (OM._waitingParentInstanceIndex = MM.parentInstanceIndex), MM.Yk && (OM._waitingFreezeWorldMatrix = MM.Yk), MM.animations) {
        for (let rM = 0; rM < MM.animations.length; rM++) {
          const iM = MM.animations[rM],
            SM = (0, HM.b)("BABYLON.Animation");
          SM && OM.animations.push(SM.Parse(iM))
        }
        mM.d.ParseAnimationRanges(OM, MM, rM)
      }
      return MM.autoAnimate && rM.beginAnimation(OM, MM.autoAnimateFrom, MM.autoAnimateTo, MM.autoAnimateLoop, MM.autoAnimateSpeed || 1), OM
    }
    let yM = !1;

    function lM() {
      yM || (yM = !0, JM.Parse = dM)
    }(OM = JM.prototype).Av ?? (OM.Av = (0, hM.j)("TransformNode", "Av")), (SM = JM.prototype).applyImpulse ?? (SM.applyImpulse = (0, hM.j)("TransformNode", "applyImpulse")), (jM = JM.prototype).applyAngularImpulse ?? (jM.applyAngularImpulse = (0, hM.j)("TransformNode", "applyAngularImpulse")), (aM = JM.prototype).applyTorque ?? (aM.applyTorque = (0, hM.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(JM.prototype, "physicsBody") || Object.defineProperty(JM.prototype, "physicsBody", (0, hM.g)("TransformNode", "physicsBody"))
  },
  41506: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      try {
        const OM = MM.next();
        OM.done ? rM(OM) : OM.value ? OM.value.then((() => {
          OM.value = void 0, rM(OM)
        }), iM) : rM(OM)
      } catch (OM) {
        iM(OM)
      }
    }

    function SM() {
      let MM, rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (iM, SM, jM) => {
        const aM = performance.now();
        void 0 === MM || aM - MM > rM ? (MM = aM, setTimeout((() => {
          OM(iM, SM, jM)
        }), 0)) : OM(iM, SM, jM)
      }
    }

    function jM(MM, rM, iM, OM, SM) {
      const jM = () => {
        let aM;
        const PM = MM => {
          MM.done ? iM(MM.value) : void 0 === aM ? aM = !0 : jM()
        };
        do {
          aM = void 0, SM && SM.aborted ? OM(new Error("Aborted")) : rM(MM, PM, OM), void 0 === aM && (aM = !1)
        } while (aM)
      };
      jM()
    }

    function aM(MM, rM) {
      let iM;
      return jM(MM, OM, (MM => iM = MM), (MM => {
        throw MM
      }), rM), iM
    }
    async function PM(MM, rM, iM) {
      return await new Promise(((OM, SM) => {
        jM(MM, rM, OM, SM, iM)
      }))
    }

    function nM(MM, rM) {
      return function() {
        return aM(MM(...arguments), rM)
      }
    }
    iM.d(rM, {
      d: () => SM,
      h: () => nM,
      k: () => PM,
      n: () => aM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);
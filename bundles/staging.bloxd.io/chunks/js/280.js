export const id = 280;
export const ids = [280];
export const modules = {
  41217: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      h: () => WB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(41112),
      oB = GB(37802),
      jB = GB(37778),
      yB = GB(41220),
      JB = GB(39366),
      MB = GB(37823),
      PB = GB(40890),
      zB = GB(38769),
      lB = GB(38424),
      pB = GB(40965),
      qB = GB(41022);
    let ZB = (() => {
      var BB;
      let OB, GB, MB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB = yB.b,
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        cB = [],
        hB = [],
        aB = [],
        eB = [],
        TB = [],
        bB = [],
        CB = [],
        HB = [],
        vB = [],
        sB = [],
        xB = [],
        tB = [],
        BO = [],
        OO = [],
        GO = [],
        YO = [],
        DO = [];
      return BB = class extends IB {
        get position() {
          return this._position
        }
        set position(BB) {
          this._position = BB
        }
        set upVector(BB) {
          this._upVector = BB
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let OB, GB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) this.fovMode === BB.FOVMODE_VERTICAL_FIXED ? (GB = 2 * this.minZ * Math.tan(this.fov / 2), OB = this.Lp().getAspectRatio(this) * GB) : (OB = 2 * this.minZ * Math.tan(this.fov / 2), GB = OB / this.Lp().getAspectRatio(this));
          else {
            const BB = this.Lp().getRenderWidth() / 2,
              YB = this.Lp().getRenderHeight() / 2;
            OB = (this.orthoRight ?? BB) - (this.orthoLeft ?? -BB), GB = (this.orthoTop ?? YB) - (this.orthoBottom ?? -YB)
          }
          return OB * GB
        }
        set orthoLeft(BB) {
          this._orthoLeft = BB;
          for (const OB of this._rigCameras) OB.orthoLeft = BB
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(BB) {
          this._orthoRight = BB;
          for (const OB of this._rigCameras) OB.orthoRight = BB
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(BB) {
          this._orthoBottom = BB;
          for (const OB of this._rigCameras) OB.orthoBottom = BB
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(BB) {
          this._orthoTop = BB;
          for (const OB of this._rigCameras) OB.orthoTop = BB
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(OB / (2 * BB))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(BB) {
          this._baseInertia = BB
        }
        set mode(BB) {
          this._mode = BB;
          for (const OB of this._rigCameras) OB.mode = BB
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(OB, GB, DB) {
          let yB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, pB.d)(), super(OB, DB, !1), this.inputs = (0, YB.j)(this, FB), this._position = (0, YB.j)(this, iB, jB.r.Zero()), this._upVector = ((0, YB.j)(this, LB), (0, YB.j)(this, gB, jB.r.Up())), this.oblique = ((0, YB.j)(this, rB), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, YB.j)(this, XB, .8), this.projectionPlaneTilt = ((0, YB.j)(this, wB), (0, YB.j)(this, EB, 0)), this.minZ = ((0, YB.j)(this, cB), (0, YB.j)(this, hB, 1)), this.maxZ = ((0, YB.j)(this, aB), (0, YB.j)(this, eB, 1e4)), this._baseInertia = ((0, YB.j)(this, TB), .9), this._mode = BB.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new zB.c(0, 0, 1, 1), this.layerMask = (0, YB.j)(this, bB, 268435455), this.fovMode = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, BB.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, BB.RIG_MODE_NONE)), this.interaxialDistance = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, void 0)), this.isStereoscopicSideBySide = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, void 0)), this.ignoreCameraMaxZ = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, !1)), this.customRenderTargets = ((0, YB.j)(this, DO), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new oB.b, this.onProjectionMatrixChangedObservable = new oB.b, this.onAfterCheckInputsObservable = new oB.b, this.onRestoreStateObservable = new oB.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new jB.d, this._postProcesses = new Array, this._activeMeshes = new QB.d(256), this._globalPosition = jB.r.Zero(), this._computedViewMatrix = jB.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = jB.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = jB.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.JF().defaultCameraLayerMask, this.JF().addCamera(this), yB && !this.JF().activeCamera && (this.JF().activeCamera = this), this.position = GB, this.renderPassId = this.JF().Lp().createRenderPassId(`Camera ${OB}`)
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
          return "TZ"
        }
        toString(BB) {
          let OB = "Name: " + this.name;
          if (OB += ", type: " + this.getClassName(), this.animations)
            for (let GB = 0; GB < this.animations.length; GB++) OB += ", animation[0]: " + this.animations[GB].toString(BB);
          return OB
        }
        applyVerticalCorrection() {
          const BB = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -BB.x : BB.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(BB) {
          return -1 !== this._activeMeshes.indexOf(BB)
        }
        isReady() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (BB)
            for (const OB of this._postProcesses)
              if (OB && !OB.isReady()) return !1;
          return super.isReady(BB)
        }
        _initCache() {
          super._initCache(), this._cache.position = new jB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new jB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(BB) {
          BB || super._updateCache(), this._cache.position.IU(this.position), this._cache.upVector.IU(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const OB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let GB = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === OB;
          if (!GB) return !1;
          const YB = this.Lp();
          return this.mode === BB.PERSPECTIVE_CAMERA ? GB = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === YB.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (GB = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === YB.getRenderWidth() && this._cache.renderHeight === YB.getRenderHeight(), this.oblique && (GB = GB && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), GB
        }
        attachControl(BB, OB) {}
        detachControl(BB) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== BB.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let BB = 0; BB < this._postProcesses.length; BB++)
            if (null !== this._postProcesses[BB]) return this._postProcesses[BB];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const BB = this._getFirstPostProcess();
          BB && BB.markTextureDirty();
          for (let OB = 0, GB = this._rigCameras.length; OB < GB; OB++) {
            const BB = this._rigCameras[OB],
              GB = BB._rigPostProcess;
            if (GB) {
              "pass" === GB.getEffectName() && (BB.isIntermediate = 0 === this._postProcesses.length), BB._postProcesses = this._postProcesses.slice(0).concat(GB), GB.markTextureDirty()
            } else BB._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !BB.isReusable() && this._postProcesses.indexOf(BB) > -1 ? (JB.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == OB || OB < 0 ? this._postProcesses.push(BB) : null === this._postProcesses[OB] ? this._postProcesses[OB] = BB : this._postProcesses.splice(OB, 0, BB), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.DYB(), this._postProcesses.indexOf(BB))
        }
        detachPostProcess(BB) {
          const OB = this._postProcesses.indexOf(BB); - 1 !== OB && (this._postProcesses[OB] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.DYB(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return jB.d.Identity()
        }
        getViewMatrix(BB) {
          return !BB && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.JF().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(BB) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== BB && (this._projectionMatrix = BB)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(OB) {
          if (this._doNotComputeProjectionMatrix || !OB && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const GB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = GB, this._refreshFrustumPlanes = !0;
          const YB = this.Lp(),
            DB = this.JF(),
            QB = YB.fDB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) {
            let OB;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = YB.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), OB = DB.useRightHandedSystem ? jB.d.PerspectiveFovRHToRef : jB.d.PerspectiveFovLHToRef, OB(this.fov, YB.getAspectRatio(this), QB ? GB : this.minZ, QB ? this.minZ : GB, this._projectionMatrix, this.fovMode === BB.FOVMODE_VERTICAL_FIXED, YB.isNDCHalfZRange, this.projectionPlaneTilt, QB)
          } else {
            const BB = YB.getRenderWidth() / 2,
              OB = YB.getRenderHeight() / 2;
            DB.useRightHandedSystem ? this.oblique ? jB.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -OB, this.orthoTop ?? OB, QB ? GB : this.minZ, QB ? this.minZ : GB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, YB.isNDCHalfZRange) : jB.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -OB, this.orthoTop ?? OB, QB ? GB : this.minZ, QB ? this.minZ : GB, this._projectionMatrix, YB.isNDCHalfZRange) : this.oblique ? jB.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -OB, this.orthoTop ?? OB, QB ? GB : this.minZ, QB ? this.minZ : GB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, YB.isNDCHalfZRange) : jB.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -OB, this.orthoTop ?? OB, QB ? GB : this.minZ, QB ? this.minZ : GB, this._projectionMatrix, YB.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = YB.getRenderWidth(), this._cache.renderHeight = YB.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(BB) {
          return (this.radius || (this.target ? jB.r.Distance(this.position, this.target) : this.position.length())) + BB
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? lB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = lB.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), OB && this.rigCameras.length > 0) {
            let OB = !1;
            for (const GB of this.rigCameras) GB._updateFrustumPlanes(), OB = OB || BB.isInFrustum(GB._frustumPlanes);
            return OB
          }
          return BB.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(BB) {
          return this._updateFrustumPlanes(), BB.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, PB.j)("Ray")
        }
        getForwardRayToRef(BB) {
          throw (0, PB.j)("Ray")
        }
        dispose(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.JF().stopAnimation(this), this.JF().removeCamera(this); this._rigCameras.length > 0;) {
            const BB = this._rigCameras.pop();
            BB && BB.dispose()
          }
          if (this._parentContainer) {
            const BB = this._parentContainer.cameras.indexOf(this);
            BB > -1 && this._parentContainer.cameras.splice(BB, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== BB.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let BB = this._postProcesses.length;
            for (; --BB >= 0;) {
              const OB = this._postProcesses[BB];
              OB && OB.dispose(this)
            }
          }
          let YB = this.customRenderTargets.length;
          for (; --YB >= 0;) this.customRenderTargets[YB].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.JF().Lp().releaseRenderPassId(this.renderPassId), super.dispose(OB, GB)
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
        setCameraRigMode(OB, GB) {
          if (this.cameraRigMode !== OB) {
            for (; this._rigCameras.length > 0;) {
              const BB = this._rigCameras.pop();
              BB && BB.dispose()
            }
            if (this.cameraRigMode = OB, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = GB.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== BB.RIG_MODE_NONE) {
              const BB = this.createRigCamera(this.name + "_L", 0);
              BB && (BB._isLeftCamera = !0);
              const OB = this.createRigCamera(this.name + "_R", 1);
              OB && (OB._isRightCamera = !0), BB && OB && (this._rigCameras.push(BB), this._rigCameras.push(OB))
            }
            this._setRigMode(GB), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(BB) {}
        _getVRProjectionMatrix() {
          return jB.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Lp().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(BB, OB) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[BB] = OB, "interaxialDistance" === BB && (this._cameraRigParams.stereoHalfAngle = OB / .0637 * (Math.PI / 180))
        }
        createRigCamera(BB, OB) {
          return null
        }
        _updateRigCameras() {
          for (let BB = 0; BB < this._rigCameras.length; BB++) this._rigCameras[BB].minZ = this.minZ, this._rigCameras[BB].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[BB].fov = this.fov, this._rigCameras[BB].upVector.IU(this.upVector);
          this.cameraRigMode === BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const BB = qB.d.Serialize(this);
          return BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), this.parent && this.parent._serializeAsParent(BB), this.inputs && this.inputs.serialize(BB), qB.d.AppendSerializedAnimations(this, BB), BB.JZ = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        clone(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const YB = qB.d.Clone(BB.GetConstructorFromName(this.getClassName(), OB, this.JF(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return YB.name = OB, YB.parent = GB, this.onClonedObservable.notifyObservers(YB), YB
        }
        B_(BB) {
          const OB = jB.r.Zero();
          return this.getDirectionToRef(BB, OB), OB
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(BB, OB) {
          jB.r.TransformNormalToRef(BB, this.getWorldMatrix(), OB)
        }
        static GetConstructorFromName(OB, GB, YB) {
          let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            QB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const oB = yB.b.Construct(OB, GB, YB, {
            interaxial_distance: DB,
            isStereoscopicSideBySide: QB
          });
          return oB || (() => BB._CreateDefaultParsedCamera(GB, YB))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let BB = this.JF().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (BB *= -1), BB
        }
      }, (() => {
        const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(IB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, DB.H)("position")], GB = [(0, DB.H)("upVector")], MB = [(0, DB.L)()], ZB = [(0, DB.L)()], NB = [(0, DB.L)()], RB = [(0, DB.L)()], WB = [(0, DB.L)()], AB = [(0, DB.L)()], VB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.L)()], UB = [(0, DB.L)()], fB = [(0, DB.L)()], kB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], (0, YB.h)(BB, null, MB, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoLeft" in BB,
            get: BB => BB.orthoLeft
          },
          metadata: QB
        }, null, FB), (0, YB.h)(BB, null, ZB, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoRight" in BB,
            get: BB => BB.orthoRight
          },
          metadata: QB
        }, null, FB), (0, YB.h)(BB, null, NB, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoBottom" in BB,
            get: BB => BB.orthoBottom
          },
          metadata: QB
        }, null, FB), (0, YB.h)(BB, null, RB, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoTop" in BB,
            get: BB => BB.orthoTop
          },
          metadata: QB
        }, null, FB), (0, YB.h)(BB, null, nB, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: BB => "inertia" in BB,
            get: BB => BB.inertia
          },
          metadata: QB
        }, null, FB), (0, YB.h)(BB, null, UB, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: BB => "mode" in BB,
            get: BB => BB.mode
          },
          metadata: QB
        }, null, FB), (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, OB) => {
              BB._position = OB
            }
          },
          metadata: QB
        }, iB, LB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: BB => "_upVector" in BB,
            get: BB => BB._upVector,
            set: (BB, OB) => {
              BB._upVector = OB
            }
          },
          metadata: QB
        }, gB, rB), (0, YB.h)(null, null, WB, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: BB => "fov" in BB,
            get: BB => BB.fov,
            set: (BB, OB) => {
              BB.fov = OB
            }
          },
          metadata: QB
        }, XB, wB), (0, YB.h)(null, null, AB, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: BB => "projectionPlaneTilt" in BB,
            get: BB => BB.projectionPlaneTilt,
            set: (BB, OB) => {
              BB.projectionPlaneTilt = OB
            }
          },
          metadata: QB
        }, EB, cB), (0, YB.h)(null, null, VB, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "minZ" in BB,
            get: BB => BB.minZ,
            set: (BB, OB) => {
              BB.minZ = OB
            }
          },
          metadata: QB
        }, hB, aB), (0, YB.h)(null, null, SB, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxZ" in BB,
            get: BB => BB.maxZ,
            set: (BB, OB) => {
              BB.maxZ = OB
            }
          },
          metadata: QB
        }, eB, TB), (0, YB.h)(null, null, fB, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "layerMask" in BB,
            get: BB => BB.layerMask,
            set: (BB, OB) => {
              BB.layerMask = OB
            }
          },
          metadata: QB
        }, bB, CB), (0, YB.h)(null, null, kB, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fovMode" in BB,
            get: BB => BB.fovMode,
            set: (BB, OB) => {
              BB.fovMode = OB
            }
          },
          metadata: QB
        }, HB, vB), (0, YB.h)(null, null, dB, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraRigMode" in BB,
            get: BB => BB.cameraRigMode,
            set: (BB, OB) => {
              BB.cameraRigMode = OB
            }
          },
          metadata: QB
        }, sB, xB), (0, YB.h)(null, null, KB, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "interaxialDistance" in BB,
            get: BB => BB.interaxialDistance,
            set: (BB, OB) => {
              BB.interaxialDistance = OB
            }
          },
          metadata: QB
        }, tB, BO), (0, YB.h)(null, null, uB, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: BB => "isStereoscopicSideBySide" in BB,
            get: BB => BB.isStereoscopicSideBySide,
            set: (BB, OB) => {
              BB.isStereoscopicSideBySide = OB
            }
          },
          metadata: QB
        }, OO, GO), (0, YB.h)(null, null, mB, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreCameraMaxZ" in BB,
            get: BB => BB.ignoreCameraMaxZ,
            set: (BB, OB) => {
              BB.ignoreCameraMaxZ = OB
            }
          },
          metadata: QB
        }, YO, DO), QB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QB
        })
      })(), BB._CreateDefaultParsedCamera = (BB, OB) => {
        throw (0, PB.j)("UniversalCamera")
      }, BB.PERSPECTIVE_CAMERA = 0, BB.ORTHOGRAPHIC_CAMERA = 1, BB.FOVMODE_VERTICAL_FIXED = 0, BB.FOVMODE_HORIZONTAL_FIXED = 1, BB.RIG_MODE_NONE = 0, BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, BB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, BB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, BB.RIG_MODE_VR = 20, BB.RIG_MODE_CUSTOM = 22, BB.ForceAttachControlToAlwaysPreventDefault = !1, BB
    })();

    function NB(BB, OB) {
      const GB = BB.type,
        YB = ZB.GetConstructorFromName(GB, BB.name, OB, BB.interaxial_distance, BB.isStereoscopicSideBySide),
        DB = qB.d.Parse(YB, BB, OB);
      if (void 0 !== BB.parentId && (DB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (DB._waitingParentInstanceIndex = BB.parentInstanceIndex), DB.inputs && (DB.inputs.parse(BB), DB._setupInputs()), BB.upVector && (DB.upVector = jB.r.FromArray(BB.upVector)), DB.setPosition && (DB.position.zOB(0, 0, 0), DB.setPosition(jB.r.FromArray(BB.position))), BB.target && DB.setTarget && DB.setTarget(jB.r.FromArray(BB.target)), BB.cameraRigMode) {
        const OB = BB.interaxial_distance ? {
          interaxialDistance: BB.interaxial_distance
        } : {};
        DB.setCameraRigMode(BB.cameraRigMode, OB)
      }
      if (BB.animations) {
        for (let OB = 0; OB < BB.animations.length; OB++) {
          const GB = BB.animations[OB],
            YB = (0, MB.c)("BABYLON.Animation");
          YB && DB.animations.push(YB.Parse(GB))
        }
        yB.b.ParseAnimationRanges(DB, BB, OB)
      }
      return BB.autoAnimate && OB.beginAnimation(DB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), void 0 !== BB.isEnabled && DB.Zk(BB.isEnabled), DB
    }
    let RB = !1;

    function WB() {
      RB || (RB = !0, ZB.Parse = NB)
    }
  },
  41230: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB) {
        this._cameraPosition = OB, this._behavior = GB, this.activeInput = !1, this.speed = 1, this.o4 = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new YB.r, this.rotationAccumulatedPixels = new YB.r, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = YB.r.Zero(), this.rotationDeltaCurrentFrame = YB.r.Zero(), this._zoomVelocity = 0, this._panVelocity = new YB.r, this.referenceFrameRate = 60, this._rotationVelocity = new YB.r, this._prevFrameTimeMs = 0, this._scene = BB
      }
      computeCurrentFrameDeltas() {
        const BB = this._scene.Lp().getDeltaTime(),
          OB = this._getEffectiveDeltaMs(BB);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.uBB(0), this.rotationDeltaCurrentFrame.uBB(0), this.zoomDeltaCurrentFrame = 0, void(BB > 0 && (this._prevFrameTimeMs = BB));
        this.panDeltaCurrentFrame.uBB(0), this.rotationDeltaCurrentFrame.uBB(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.zOB(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * OB, this.panDeltaCurrentFrame), this._rotationVelocity.zOB(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.zOB(this._rotationVelocity.x * this.speed * this.rotationXSpeed * OB, this._rotationVelocity.y * this.speed * this.rotationYSpeed * OB, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.o4 * this._zoomSpeedMultiplier) * OB, BB > 0 && (this._prevFrameTimeMs = BB), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.uBB(0), this.rotationAccumulatedPixels.uBB(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.uBB(0), this.rotationAccumulatedPixels.uBB(0)
      }
      resetPanVelocity() {
        this._panVelocity.uBB(0), this.panAccumulatedPixels.uBB(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(BB) {
        const OB = this._scene.Lp().getDeltaTime(),
          GB = this._getEffectiveDeltaMs(OB),
          YB = 1e3 / this.referenceFrameRate;
        return Math.pow(BB, GB / YB)
      }
      getFrameIndependentInputScale(BB) {
        const OB = 1 - BB;
        if (OB <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(BB)) / OB
      }
      _getEffectiveDeltaMs(BB) {
        return BB > 0 ? BB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(BB, OB, GB) {
        let YB = BB;
        const DB = this._scene.Lp().getDeltaTime(),
          QB = this._getEffectiveDeltaMs(DB);
        if (0 === QB) return YB;
        const oB = this.getFrameIndependentDecay(GB);
        if (YB *= oB, 0 !== OB || this.activeInput) {
          const BB = 1 - GB;
          YB += OB / QB * (BB > 0 ? (1 - oB) / BB : 1)
        } else Math.abs(YB) < 1e-6 && (YB = 0);
        return YB
      }
    }
  },
  41235: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB) {
        this.inputMap = [], this.handlers = BB, this._createDefaultEntries = OB, this.resetInputMap()
      }
      resolveInteraction(BB, OB) {
        for (const GB of this.inputMap)
          if (GB.source === BB && this._entryMatches(GB, OB)) return GB;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(BB, OB, GB) {
        const YB = this.inputMap;
        for (let DB = 0; DB < YB.length; DB++) {
          const QB = YB[DB];
          if (QB.source === BB && QB.interaction === OB && this._entryConditionsMatch(QB, GB)) return QB
        }
      }
      getEntries(BB, OB, GB) {
        const YB = [],
          DB = this.inputMap;
        for (let QB = 0; QB < DB.length; QB++) {
          const oB = DB[QB];
          oB.source === BB && oB.interaction === OB && this._entryConditionsMatch(oB, GB) && YB.push(oB)
        }
        return YB
      }
      addEntry(BB) {
        const OB = this._entrySpecificity(BB);
        let GB = this.inputMap.length;
        for (let YB = 0; YB < this.inputMap.length; YB++)
          if (this._entrySpecificity(this.inputMap[YB]) < OB) {
            GB = YB;
            break
          } this.inputMap.splice(GB, 0, BB)
      }
      setInteraction(BB, OB, GB) {
        const YB = this.resolveInteraction(BB, OB);
        return YB && this._entryCoversAllConditionsOf(YB, OB) ? (YB.interaction = GB, !0) : (this.addEntry({
          source: BB,
          ...OB ?? {},
          interaction: GB
        }), !0)
      }
      _entryCoversAllConditionsOf(BB, OB) {
        if (!OB) return !0;
        const GB = BB;
        for (const YB of Object.keys(OB)) {
          const BB = OB[YB];
          if (void 0 !== BB)
            if ("modifiers" === YB) {
              const OB = GB.modifiers ?? {};
              for (const GB of Object.keys(BB))
                if (void 0 !== BB[GB] && void 0 === OB[GB]) return !1
            } else if (void 0 === GB[YB]) return !1
        }
        return !0
      }
      setInteractions(BB, OB, GB) {
        let YB = 0;
        const DB = this.inputMap;
        for (let QB = 0; QB < DB.length; QB++) {
          const oB = DB[QB];
          oB.source === BB && this._entryMatches(oB, OB) && (oB.interaction = GB, YB++)
        }
        return YB
      }
      _entryMatches(BB, OB) {
        switch (BB.source) {
          case "pointer":
            return (void 0 === BB.button || BB.button === OB?.button) && this._matchModifiers(BB.modifiers, OB?.modifiers);
          case "wheel":
            return this._matchModifiers(BB.modifiers, OB?.modifiers);
          case "touch":
            return void 0 === BB.touchCount || BB.touchCount === OB?.touchCount;
          case "keyboard":
            return (void 0 === BB.key || (Array.isArray(BB.key) ? -1 !== BB.key.indexOf(OB?.key ?? -1) : BB.key === OB?.key)) && this._matchModifiers(BB.modifiers, OB?.modifiers)
        }
      }
      _entryConditionsMatch(BB, OB) {
        if (!OB) return !0;
        switch (BB.source) {
          case "pointer":
            return (!("button" in OB) || BB.button === OB.button) && (!("modifiers" in OB) || this._entryModifiersMatch(BB.modifiers, OB.modifiers));
          case "wheel":
            return !("modifiers" in OB) || this._entryModifiersMatch(BB.modifiers, OB.modifiers);
          case "touch":
            return !("touchCount" in OB) || BB.touchCount === OB.touchCount;
          case "keyboard":
            if ("key" in OB) {
              if (void 0 === BB.key) return void 0 === OB.key;
              if (void 0 === OB.key || (Array.isArray(BB.key) ? -1 === BB.key.indexOf(OB.key) : BB.key !== OB.key)) return !1
            }
            return !("modifiers" in OB) || this._entryModifiersMatch(BB.modifiers, OB.modifiers)
        }
      }
      _entrySpecificity(BB) {
        let OB = 0;
        return "button" in BB && void 0 !== BB.button && OB++, "key" in BB && void 0 !== BB.key && OB++, "touchCount" in BB && void 0 !== BB.touchCount && OB++, "modifiers" in BB && BB.modifiers && OB++, OB
      }
      _matchModifiers(BB, OB) {
        return !BB || (void 0 === BB.ctrl || BB.ctrl === (OB?.ctrl ?? !1)) && ((void 0 === BB.shift || BB.shift === (OB?.shift ?? !1)) && (void 0 === BB.alt || BB.alt === (OB?.alt ?? !1)))
      }
      _entryModifiersMatch(BB, OB) {
        if (!OB) return !BB;
        return void 0 !== OB.ctrl || void 0 !== OB.shift || void 0 !== OB.alt ? (void 0 === OB.ctrl || BB?.ctrl === OB.ctrl) && ((void 0 === OB.shift || BB?.shift === OB.shift) && (void 0 === OB.alt || BB?.alt === OB.alt)) : !BB || void 0 === BB.ctrl && void 0 === BB.shift && void 0 === BB.alt
      }
    }
  },
  41215: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => NB,
      h: () => qB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(41217),
      oB = GB(37778),
      jB = GB(37782),
      yB = GB(41226),
      JB = GB(41220),
      MB = GB(41230),
      PB = GB(41235);
    class zB extends MB.e {
      constructor(BB, OB, GB) {
        super(BB, OB, GB), this.input = new PB.c({
          translate: (BB, OB, GB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += OB, this.panAccumulatedPixels.z += GB
          },
          rotate: (BB, OB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += OB
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
    const lB = oB.d.Zero(),
      pB = oB.f.Identity();
    let qB = (() => {
        var BB;
        let OB, GB, JB, MB, PB = QB.e,
          qB = [],
          ZB = [],
          NB = [],
          RB = [],
          WB = [],
          AB = [],
          VB = [],
          SB = [];
        return BB = class extends PB {
          get inertia() {
            return this._targetInertia
          }
          set inertia(BB) {
            this._targetInertia = BB, this.movement && (this.movement.panInertia = BB, this.movement.rotationInertia = BB)
          }
          constructor(BB, OB, GB) {
            super(BB, OB, GB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new oB.r(0, 0, 0), this.cameraRotation = new oB.o(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, YB.j)(this, qB, !1), this.rotation = ((0, YB.j)(this, ZB), (0, YB.j)(this, NB, void 0)), this.rotationQuaternion = (0, YB.j)(this, RB), this.speed = (0, YB.j)(this, WB, 2), this.noRotationConstraint = ((0, YB.j)(this, AB), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = jB.b, this._rotationEpsilon = jB.b, this.lockedTarget = (0, YB.j)(this, VB, null), this._currentTarget = ((0, YB.j)(this, SB), oB.r.Zero()), this._initialFocalDistance = 1, this._viewMatrix = oB.d.Zero(), this._cameraTransformMatrix = oB.d.Zero(), this._cameraRotationMatrix = oB.d.Zero(), this._transformedReferencePoint = oB.r.Zero(), this._deferredPositionUpdate = new oB.r, this._deferredRotationQuaternionUpdate = new oB.f, this._deferredRotationUpdate = new oB.r, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = oB.r.Forward(this.JF().useRightHandedSystem), this.rotation = new oB.r(0, this.JF().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new zB(this.JF(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(BB) {
            this.getWorldMatrix();
            const OB = oB.k.Xp[0],
              GB = oB.k.Xp[1];
            return GB.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(GB, OB), OB.scaleInPlace(BB), this.globalPosition.add(OB)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const BB = this.lockedTarget;
              BB.computeWorldMatrix().getTranslationToRef(BB.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.zOB(0, 0, 0), this.cameraRotation.zOB(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new oB.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(BB) {
            BB || super._updateCache();
            const OB = this._getLockedTargetPosition();
            OB ? this._cache.lockedTarget ? this._cache.lockedTarget.IU(OB) : this._cache.lockedTarget = OB.clone() : this._cache.lockedTarget = null, this._cache.rotation.IU(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.IU(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const BB = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(BB) : !BB) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const BB = this.Lp();
            return this.speed * Math.sqrt(BB.getDeltaTime() / (100 * BB.getFps()))
          }
          setTarget(BB) {
            this.upVector.normalize(), this._initialFocalDistance = BB.subtract(this.position).length(), this.position.z === BB.z && (this.position.z += jB.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.JF().useRightHandedSystem ? oB.d.LookAtRHToRef(this.position, BB, oB.r.UpReadOnly, lB) : oB.d.LookAtLHToRef(this.position, BB, oB.r.UpReadOnly, lB), lB.invert();
            const OB = this.rotationQuaternion || pB;
            oB.f.FromRotationMatrixToRef(lB, OB), OB.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(BB) {
            this.setTarget(BB)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(oB.k.Matrix[0]), oB.r.TransformNormalToRef(this.cameraDirection, oB.k.Matrix[0], oB.k.Xp[0]), this._deferredPositionUpdate.addInPlace(oB.k.Xp[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.IU(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.IU(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const BB = this.movement,
              OB = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            BB.panAccumulatedPixels.addInPlace(this.cameraDirection), BB.rotationAccumulatedPixels.x += this.cameraRotation.x, BB.rotationAccumulatedPixels.y += this.cameraRotation.y, BB.computeCurrentFrameDeltas(), this.cameraDirection.IU(BB.panDeltaCurrentFrame), this.cameraRotation.set(BB.rotationDeltaCurrentFrame.x, BB.rotationDeltaCurrentFrame.y);
            const GB = this.speed * this._panningEpsilon;
            !OB && Math.abs(this.cameraDirection.x) < GB && Math.abs(this.cameraDirection.y) < GB && Math.abs(this.cameraDirection.z) < GB && (this.cameraDirection.uBB(0), BB.resetPanVelocity());
            const YB = this.invertRotation ? -this.inverseRotationSpeed : 1,
              DB = this._decideIfNeedsToMove(),
              QB = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.IU(this.rotation), this._deferredPositionUpdate.IU(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.IU(this.rotationQuaternion), DB && this._updatePosition(), QB) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * YB, this._deferredRotationUpdate.y += this.cameraRotation.y * YB, !this.noRotationConstraint) {
                const BB = 1.570796;
                this._deferredRotationUpdate.x > BB && (this._deferredRotationUpdate.x = BB), this._deferredRotationUpdate.x < -BB && (this._deferredRotationUpdate.x = -BB)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.IU(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (oB.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.IU(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.uBB(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : oB.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return oB.r.TransformNormalToRef(oB.r.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), oB.r.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? yB.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (oB.f.FromEulerVectorToRef(this.rotation, pB), yB.c.Y.rotateByQuaternionToRef(pB, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(BB, OB, GB) {
            if (this.JF().useRightHandedSystem ? oB.d.LookAtRHToRef(BB, OB, GB, this._viewMatrix) : oB.d.LookAtLHToRef(BB, OB, GB, this._viewMatrix), this.parent) {
              const BB = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(BB, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(OB, GB) {
            if (this.cameraRigMode !== QB.e.RIG_MODE_NONE) {
              const GB = new BB(OB, this.position.clone(), this.JF());
              return GB.isRigCamera = !0, GB.rigParent = this, this.cameraRigMode === QB.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new oB.f), GB._cameraRigParams = {}, GB.rotationQuaternion = new oB.f), GB.mode = this.mode, GB.orthoLeft = this.orthoLeft, GB.orthoRight = this.orthoRight, GB.orthoTop = this.orthoTop, GB.orthoBottom = this.orthoBottom, GB
            }
            return null
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              OB = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case QB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case QB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case QB.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const GB = this.cameraRigMode === QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  YB = this.cameraRigMode === QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * GB, BB), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * YB, OB);
                break
              }
              case QB.e.RIG_MODE_VR:
                BB.rotationQuaternion && OB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.IU(this.rotationQuaternion), OB.rotationQuaternion.IU(this.rotationQuaternion)) : (BB.rotation.IU(this.rotation), OB.rotation.IU(this.rotation)), BB.position.IU(this.position), OB.position.IU(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(OB, GB) {
            this.getTarget().subtractToRef(this.position, BB._TargetFocalPoint), BB._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const YB = BB._TargetFocalPoint.addInPlace(this.position);
            oB.d.TranslationToRef(-YB.x, -YB.y, -YB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(oB.d.RotationAxis(GB.upVector, OB), BB._RigCamTransformMatrix), oB.d.TranslationToRef(YB.x, YB.y, YB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix.multiplyToRef(BB._TargetTransformMatrix, BB._RigCamTransformMatrix), oB.r.TransformCoordinatesToRef(this.position, BB._RigCamTransformMatrix, GB.position), GB.setTarget(YB)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(PB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.H)()], JB = [(0, DB.L)()], MB = [(0, DB.w)("lockedTargetId")], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "updateUpVectorFromRotation" in BB,
              get: BB => BB.updateUpVectorFromRotation,
              set: (BB, OB) => {
                BB.updateUpVectorFromRotation = OB
              }
            },
            metadata: QB
          }, qB, ZB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotation" in BB,
              get: BB => BB.rotation,
              set: (BB, OB) => {
                BB.rotation = OB
              }
            },
            metadata: QB
          }, NB, RB), (0, YB.h)(null, null, JB, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: BB => "speed" in BB,
              get: BB => BB.speed,
              set: (BB, OB) => {
                BB.speed = OB
              }
            },
            metadata: QB
          }, WB, AB), (0, YB.h)(null, null, MB, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "lockedTarget" in BB,
              get: BB => BB.lockedTarget,
              set: (BB, OB) => {
                BB.lockedTarget = OB
              }
            },
            metadata: QB
          }, VB, SB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB._RigCamTransformMatrix = new oB.d, BB._TargetTransformMatrix = new oB.d, BB._TargetFocalPoint = new oB.r, BB
      })(),
      ZB = !1;

    function NB() {
      ZB || (ZB = !0, JB.b.AddNodeConstructor("TargetCamera", ((BB, OB) => () => new qB(BB, oB.r.Zero(), OB))))
    }
  },
  40958: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(40905);
    let DB = !1;

    function QB() {
      DB || (DB = !0, YB.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, YB.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, YB.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, YB.d.prototype.getAspectRatio = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = BB.viewport;
        return this.getRenderWidth(OB) * GB.width / (this.getRenderHeight(OB) * GB.height)
      }, YB.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, YB.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41030: (BB, OB, GB) => {
    var YB = GB(40905),
      DB = GB(41035);
    let QB = !1;
    QB || (QB = !0, (0, DB.p)(), YB.d.prototype._loadFileAsync = async function(BB, OB, GB) {
      return await new Promise(((YB, DB) => {
        this._loadFile(BB, (BB => {
          YB(BB)
        }), void 0, OB, GB, ((BB, OB) => {
          DB(OB)
        }))
      }))
    })
  },
  41026: (BB, OB, GB) => {
    (0, GB(40965).d)()
  },
  40965: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(40905);
    let DB = !1;

    function QB() {
      DB || (DB = !0, YB.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, YB.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, YB.d.prototype.createRenderPassId = function(BB) {
        const OB = ++YB.d._RenderPassIdCounter;
        return this._renderPassNames[OB] = BB ?? "NONAME", OB
      }, YB.d.prototype.releaseRenderPassId = function(BB) {
        this._renderPassNames[BB] = void 0;
        for (let OB = 0; OB < this.scenes.length; ++OB) {
          const GB = this.scenes[OB];
          for (let OB = 0; OB < GB.meshes.length; ++OB) {
            const YB = GB.meshes[OB];
            if (YB._releaseRenderPassId(BB), YB.iW)
              for (let OB = 0; OB < YB.iW.length; ++OB) {
                YB.iW[OB]._removeDrawWrapper(BB)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(BB)
      })
    }
  },
  41079: (BB, OB, GB) => {
    var YB = GB(41081),
      DB = GB(40905);
    let QB = !1;
    QB || (QB = !0, DB.d.GetCompatibleTextureLoader = YB.b)
  },
  40969: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(40849);
    let DB = !1;

    function QB() {
      DB || (DB = !0, YB.ThinEngine.prototype.setAlphaMode = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[GB] === BB) {
          if (!OB) {
            const OB = 0 === BB;
            this.depthCullingState.depthMask !== OB && (this.depthCullingState.depthMask = OB)
          }
          return
        }
        const YB = 0 === BB;
        this._alphaState.setAlphaBlend(!YB, GB), this._alphaState.setAlphaMode(BB, GB), OB || (this.depthCullingState.depthMask = YB), this._alphaMode[GB] = BB
      })
    }
  },
  40974: (BB, OB, GB) => {
    var YB = GB(40837),
      DB = GB(39366),
      QB = GB(40849),
      oB = GB(40982),
      jB = GB(40947);
    class yB extends oB.c {
      setDepthStencilTexture(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(BB, OB), !BB) return;
        const GB = this._engine,
          YB = this._context,
          DB = BB._hardwareTexture;
        if (DB && BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const OB = GB._currentFramebuffer;
          GB._bindUnboundFramebuffer(this._MSAAFramebuffer), YB.framebufferRenderbuffer(YB.FRAMEBUFFER, (0, jB.b)(BB.format) ? YB.DEPTH_STENCIL_ATTACHMENT : YB.DEPTH_ATTACHMENT, YB.RENDERBUFFER, DB.getMSAARenderBuffer()), GB._bindUnboundFramebuffer(OB)
        }
      }
      constructor(BB, OB, GB, YB, DB) {
        super(BB, OB, GB, YB), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = DB
      }
      _cloneRenderTargetWrapper() {
        let BB;
        return this._colorTextureArray && this._depthStencilTextureArray ? (BB = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), BB.texture.isReady = !0) : BB = super._cloneRenderTargetWrapper(), BB
      }
      _swapRenderTargetWrapper(BB) {
        super._swapRenderTargetWrapper(BB), BB._framebuffer = this._framebuffer, BB._depthStencilBuffer = this._depthStencilBuffer, BB._MSAAFramebuffer = this._MSAAFramebuffer, BB._colorTextureArray = this._colorTextureArray, BB._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const BB = this._engine,
            OB = BB._currentFramebuffer,
            GB = this._context;
          BB._bindUnboundFramebuffer(this._framebuffer), GB.framebufferRenderbuffer(GB.FRAMEBUFFER, GB.DEPTH_STENCIL_ATTACHMENT, GB.RENDERBUFFER, null), GB.framebufferRenderbuffer(GB.FRAMEBUFFER, GB.DEPTH_ATTACHMENT, GB.RENDERBUFFER, null), GB.framebufferRenderbuffer(GB.FRAMEBUFFER, GB.STENCIL_ATTACHMENT, GB.RENDERBUFFER, null), BB._bindUnboundFramebuffer(OB), GB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(BB, OB, GB, YB, DB, QB)
      }
      shareDepth(BB) {
        super.shareDepth(BB);
        const OB = this._context,
          GB = this._depthStencilBuffer,
          YB = BB._MSAAFramebuffer || BB._framebuffer,
          DB = this._engine;
        BB._depthStencilBuffer && BB._depthStencilBuffer !== GB && OB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = GB;
        const QB = BB._generateStencilBuffer ? OB.DEPTH_STENCIL_ATTACHMENT : OB.DEPTH_ATTACHMENT;
        DB._bindUnboundFramebuffer(YB), OB.framebufferRenderbuffer(OB.FRAMEBUFFER, QB, OB.RENDERBUFFER, GB), DB._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const DB = BB._hardwareTexture;
        if (!DB) return;
        const QB = this._framebuffer,
          oB = this._engine,
          jB = oB._currentFramebuffer;
        let yB;
        if (oB._bindUnboundFramebuffer(QB), oB.Pq > 1) {
          const QB = this._context;
          yB = QB["COLOR_ATTACHMENT" + OB], BB.is2DArray || BB.is3D ? (GB = GB ?? this.layerIndices?.[OB] ?? 0, QB.framebufferTextureLayer(QB.FRAMEBUFFER, yB, DB.underlyingResource, YB, GB)) : BB.isCube ? (GB = GB ?? this.faceIndices?.[OB] ?? 0, QB.framebufferTexture2D(QB.FRAMEBUFFER, yB, QB.TEXTURE_CUBE_MAP_POSITIVE_X + GB, DB.underlyingResource, YB)) : QB.framebufferTexture2D(QB.FRAMEBUFFER, yB, QB.TEXTURE_2D, DB.underlyingResource, YB)
        } else {
          const BB = this._context;
          yB = BB["COLOR_ATTACHMENT" + OB + "_WEBGL"];
          const QB = void 0 !== GB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + GB : BB.TEXTURE_2D;
          BB.framebufferTexture2D(BB.FRAMEBUFFER, yB, QB, DB.underlyingResource, YB)
        }
        if (BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const BB = this._context;
          oB._bindUnboundFramebuffer(this._MSAAFramebuffer), BB.framebufferRenderbuffer(BB.FRAMEBUFFER, yB, BB.RENDERBUFFER, DB.getMSAARenderBuffer())
        }
        oB._bindUnboundFramebuffer(jB)
      }
      setTexture(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(BB, OB, GB), this._bindTextureRenderTarget(BB, OB)
      }
      setLayerAndFaceIndices(BB, OB) {
        if (super.setLayerAndFaceIndices(BB, OB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const GB = this._attachments?.length ?? this.textures.length;
        for (let YB = 0; YB < GB; YB++) {
          const BB = this.textures[YB];
          BB && (BB.is2DArray || BB.is3D ? this._bindTextureRenderTarget(BB, YB, this.layerIndices[YB]) : BB.isCube ? this._bindTextureRenderTarget(BB, YB, this.faceIndices[YB]) : this._bindTextureRenderTarget(BB, YB))
        }
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(BB, OB, GB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const YB = this.textures[BB];
        YB.is2DArray || YB.is3D ? this._bindTextureRenderTarget(this.textures[BB], BB, this.layerIndices[BB]) : YB.isCube && this._bindTextureRenderTarget(this.textures[BB], BB, this.faceIndices[BB])
      }
      resolveMSAATextures() {
        const BB = this._engine,
          OB = BB._currentFramebuffer;
        BB._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), BB._bindUnboundFramebuffer(OB)
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const OB = this._context;
        BB || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (OB.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (OB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (OB.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(BB)
      }
    }
    let JB = !1;
    JB || (JB = !0, QB.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(BB, OB, GB) {
      const YB = new yB(BB, OB, GB, this, this._gl);
      return this._renderTargetWrapperCache.push(YB), YB
    }, QB.ThinEngine.prototype.createRenderTargetTexture = function(BB, OB) {
      const GB = this._createHardwareRenderTargetWrapper(!1, !1, BB);
      let YB, DB, QB = !0,
        oB = !1,
        jB = !1,
        yB = 1;
      void 0 !== OB && "object" === typeof OB && (QB = OB.generateDepthBuffer ?? !0, oB = !!OB.generateStencilBuffer, jB = !!OB.noColorAttachment, YB = OB.colorAttachment, yB = OB.samples ?? 1, DB = OB.label);
      const JB = YB || (jB ? null : this._createInternalTexture(BB, OB, !0, 5)),
        MB = BB.width || BB,
        PB = BB.height || BB,
        zB = this._currentFramebuffer,
        lB = this._gl,
        pB = lB.createFramebuffer();
      if (this._bindUnboundFramebuffer(pB), GB._depthStencilBuffer = this._setupFramebufferDepthAttachments(oB, QB, MB, PB), !JB || JB.is2DArray || JB.is3D || lB.framebufferTexture2D(lB.FRAMEBUFFER, lB.COLOR_ATTACHMENT0, lB.TEXTURE_2D, JB._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(zB), GB.label = DB ?? "RenderTargetWrapper", GB._framebuffer = pB, GB._generateDepthBuffer = QB, GB._generateStencilBuffer = oB, GB.setTextures(JB), YB) {
        if (GB._samples = YB.samples, YB.samples > 1) {
          const BB = YB._hardwareTexture.getMSAARenderBuffer(0);
          GB._MSAAFramebuffer = lB.createFramebuffer(), this._bindUnboundFramebuffer(GB._MSAAFramebuffer), lB.framebufferRenderbuffer(lB.FRAMEBUFFER, lB.COLOR_ATTACHMENT0, lB.RENDERBUFFER, BB), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(GB, yB);
      return GB
    }, QB.ThinEngine.prototype._createDepthStencilTexture = function(BB, OB, GB) {
      const QB = this._gl,
        oB = BB.layers || 0,
        yB = BB.depth || 0;
      let JB = QB.TEXTURE_2D;
      0 !== oB ? JB = QB.TEXTURE_2D_ARRAY : 0 !== yB && (JB = QB.TEXTURE_3D);
      const MB = new YB.b(this, 12);
      if (MB.label = OB.label, !this._caps.depthTextureExtension) return DB.b.Error("Depth texture is not supported by your browser or hardware."), MB;
      const PB = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...OB
      };
      if (this._bindTextureDirectly(JB, MB, !0), this._setupDepthStencilTexture(MB, BB, 0 !== PB.comparisonFunction && PB.bilinearFiltering, PB.comparisonFunction, PB.samples), void 0 !== PB.depthTextureFormat) {
        if (15 !== PB.depthTextureFormat && 16 !== PB.depthTextureFormat && 17 !== PB.depthTextureFormat && 13 !== PB.depthTextureFormat && 14 !== PB.depthTextureFormat && 18 !== PB.depthTextureFormat) return DB.b.Error(`Depth texture ${PB.depthTextureFormat} format is not supported.`), MB;
        MB.format = PB.depthTextureFormat
      } else MB.format = PB.generateStencil ? 13 : 16;
      const zB = (0, jB.b)(MB.format),
        lB = this._getWebGLTextureTypeFromDepthTextureFormat(MB.format),
        pB = zB ? QB.DEPTH_STENCIL : QB.DEPTH_COMPONENT,
        qB = this._getInternalFormatFromDepthTextureFormat(MB.format, !0, zB);
      return MB.is2DArray ? QB.texImage3D(JB, 0, qB, MB.width, MB.height, oB, 0, pB, lB, null) : MB.is3D ? QB.texImage3D(JB, 0, qB, MB.width, MB.height, yB, 0, pB, lB, null) : QB.texImage2D(JB, 0, qB, MB.width, MB.height, 0, pB, lB, null), this._bindTextureDirectly(JB, null), this._internalTexturesCache.push(MB), GB._depthStencilBuffer && (QB.deleteRenderbuffer(GB._depthStencilBuffer), GB._depthStencilBuffer = null), this._bindUnboundFramebuffer(GB._MSAAFramebuffer ?? GB._framebuffer), GB._generateStencilBuffer = zB, GB._depthStencilTextureWithStencil = zB, GB._depthStencilBuffer = this._setupFramebufferDepthAttachments(GB._generateStencilBuffer, GB._generateDepthBuffer, GB.width, GB.height, GB.samples, MB.format), this._bindUnboundFramebuffer(null), MB
    }, QB.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(BB, OB) {
      if (this.Pq < 2 || !BB) return 1;
      if (BB.samples === OB) return OB;
      const GB = this._gl;
      OB = Math.min(OB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (GB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (GB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
      const YB = BB.texture?._hardwareTexture;
      if (YB?.releaseMSAARenderBuffers(), BB.texture && OB > 1 && "function" === typeof GB.renderbufferStorageMultisample) {
        const DB = GB.createFramebuffer();
        if (!DB) throw new Error("Unable to create multi sampled framebuffer");
        BB._MSAAFramebuffer = DB, this._bindUnboundFramebuffer(BB._MSAAFramebuffer);
        const QB = this._createRenderBuffer(BB.texture.width, BB.texture.height, OB, -1, this._getRGBABufferInternalSizedFormat(BB.texture.type, BB.texture.format, BB.texture._useSRGBBuffer), GB.COLOR_ATTACHMENT0, !1);
        if (!QB) throw new Error("Unable to create multi sampled framebuffer");
        YB?.addMSAARenderBuffer(QB)
      }
      this._bindUnboundFramebuffer(BB._MSAAFramebuffer ?? BB._framebuffer), BB.texture && (BB.texture.samples = OB), BB._samples = OB;
      const DB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
      return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, OB, DB), this._bindUnboundFramebuffer(null), OB
    }, QB.ThinEngine.prototype._setupDepthStencilTexture = function(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const QB = OB.width ?? OB,
        oB = OB.height ?? OB,
        jB = OB.layers || 0,
        yB = OB.depth || 0;
      BB.baseWidth = QB, BB.baseHeight = oB, BB.width = QB, BB.height = oB, BB.is2DArray = jB > 0, BB.depth = jB || yB, BB.isReady = !0, BB.samples = DB, BB.generateMipMaps = !1, BB.samplingMode = GB ? 2 : 1, BB.type = 0, BB._comparisonFunction = YB;
      const JB = this._gl,
        MB = this._getTextureTarget(BB),
        PB = this._getSamplingParameters(BB.samplingMode, !1);
      JB.texParameteri(MB, JB.TEXTURE_MAG_FILTER, PB.mag), JB.texParameteri(MB, JB.TEXTURE_MIN_FILTER, PB.min), JB.texParameteri(MB, JB.TEXTURE_WRAP_S, JB.CLAMP_TO_EDGE), JB.texParameteri(MB, JB.TEXTURE_WRAP_T, JB.CLAMP_TO_EDGE), this.Pq > 1 && (0 === YB ? (JB.texParameteri(MB, JB.TEXTURE_COMPARE_FUNC, 515), JB.texParameteri(MB, JB.TEXTURE_COMPARE_MODE, JB.NONE)) : (JB.texParameteri(MB, JB.TEXTURE_COMPARE_FUNC, YB), JB.texParameteri(MB, JB.TEXTURE_COMPARE_MODE, JB.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40825: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB.c
    });
    var YB = GB(40833);
    (0, GB(40969).e)();
    var DB = GB(40849);
    let QB = !1;
    ! function() {
      if (QB) return;
      QB = !0;
      const BB = new WeakMap,
        OB = new WeakMap,
        GB = new WeakMap,
        YB = new WeakMap;
      DB.ThinEngine.prototype.getAlphaToCoverage = function() {
        return BB.get(this) ?? !1
      }, DB.ThinEngine.prototype.setAlphaToCoverage = function(GB) {
        (BB.get(this) !== GB || this._gl && OB.get(this) !== this._gl) && (BB.set(this, GB), this._gl && (GB ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), OB.set(this, this._gl)))
      }, Object.defineProperty(DB.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (YB.get(this) !== this._gl && (GB.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), YB.set(this, this._gl)), GB.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var oB = GB(40837),
      jB = GB(39366),
      yB = GB(40932);
    let JB = !1;
    ! function() {
      function BB(BB, OB, GB, YB) {
        let DB, QB = 1;
        1 === YB ? DB = new Float32Array(OB * GB * 4) : 2 === YB ? (DB = new Uint16Array(OB * GB * 4), QB = 15360) : DB = 7 === YB ? new Uint32Array(OB * GB * 4) : new Uint8Array(OB * GB * 4);
        for (let oB = 0; oB < OB; oB++)
          for (let YB = 0; YB < GB; YB++) {
            const GB = 3 * (YB * OB + oB),
              jB = 4 * (YB * OB + oB);
            DB[jB + 0] = BB[GB + 0], DB[jB + 1] = BB[GB + 1], DB[jB + 2] = BB[GB + 2], DB[jB + 3] = QB
          }
        return DB
      }

      function OB(BB) {
        return function(OB, GB, YB, DB, QB, jB, yB, JB) {
          let MB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const zB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            lB = BB ? 10 : 11,
            pB = new oB.b(this, lB);
          pB.baseWidth = GB, pB.baseHeight = YB, pB.baseDepth = DB, pB.width = GB, pB.height = YB, pB.depth = DB, pB.format = QB, pB.type = PB, pB.generateMipMaps = jB, pB.samplingMode = JB, BB ? pB.is3D = !0 : pB.is2DArray = !0, this._doNotHandleContextLost || (pB._bufferView = OB), BB ? this.updateRawTexture3D(pB, OB, QB, yB, MB, PB) : this.updateRawTexture2DArray(pB, OB, QB, yB, MB, PB), this._bindTextureDirectly(zB, pB, !0);
          const qB = this._getSamplingParameters(JB, jB);
          return this._gl.texParameteri(zB, this._gl.TEXTURE_MAG_FILTER, qB.mag), this._gl.texParameteri(zB, this._gl.TEXTURE_MIN_FILTER, qB.min), jB && this._gl.generateMipmap(zB), this._bindTextureDirectly(zB, null), this._internalTexturesCache.push(pB), pB
        }
      }

      function GB(BB) {
        return function(OB, GB, YB, DB) {
          let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const jB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            yB = this._getWebGLTextureType(oB),
            JB = this._getInternalFormat(YB),
            MB = this._getRGBABufferInternalSizedFormat(oB, YB);
          this._bindTextureDirectly(jB, OB, !0), this._unpackFlipY(void 0 === DB || !!DB), this._doNotHandleContextLost || (OB._bufferView = GB, OB.format = YB, OB.invertY = DB, OB._compression = QB), OB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), QB && GB ? this._gl.compressedTexImage3D(jB, 0, this.getCaps().s3tc[QB], OB.width, OB.height, OB.depth, 0, GB) : this._gl.texImage3D(jB, 0, MB, OB.width, OB.height, OB.depth, 0, JB, yB, GB), OB.generateMipMaps && this._gl.generateMipmap(jB), this._bindTextureDirectly(jB, null), OB.isReady = !0
        }
      }
      JB || (JB = !0, DB.ThinEngine.prototype.updateRawTexture = function(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!BB) return;
        const jB = this._getRGBABufferInternalSizedFormat(QB, GB, oB),
          yB = this._getInternalFormat(GB),
          JB = this._getWebGLTextureType(QB);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === YB || !!YB), this._doNotHandleContextLost || (BB._bufferView = OB, BB.format = GB, BB.type = QB, BB.invertY = YB, BB._compression = DB), BB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), DB && OB ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[DB], BB.width, BB.height, 0, OB) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, jB, BB.width, BB.height, 0, yB, JB, OB), BB.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), BB.isReady = !0
      }, DB.ThinEngine.prototype.createRawTexture = function(BB, OB, GB, YB, DB, QB, jB) {
        let yB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          MB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const PB = new oB.b(this, 3);
        PB.baseWidth = OB, PB.baseHeight = GB, PB.width = OB, PB.height = GB, PB.format = YB, PB.generateMipMaps = DB, PB.samplingMode = jB, PB.invertY = QB, PB._compression = yB, PB.type = JB, PB._useSRGBBuffer = this._getUseSRGBBuffer(MB, !DB), this._doNotHandleContextLost || (PB._bufferView = BB), this.updateRawTexture(PB, BB, YB, QB, yB, JB, PB._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, PB, !0);
        const zB = this._getSamplingParameters(jB, DB);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, zB.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, zB.min), DB && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(PB), PB
      }, DB.ThinEngine.prototype.createRawCubeTexture = function(BB, OB, GB, YB, DB, QB, JB) {
        let MB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const PB = this._gl,
          zB = new oB.b(this, 8);
        zB.isCube = !0, zB.format = GB, zB.type = YB, this._doNotHandleContextLost || (zB._bufferViewArray = BB);
        const lB = this._getWebGLTextureType(YB);
        let pB = this._getInternalFormat(GB);
        pB === PB.RGB && (pB = PB.RGBA), lB !== PB.FLOAT || this._caps.textureFloatLinearFiltering ? lB !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? lB !== PB.FLOAT || this._caps.textureFloatRender ? lB !== PB.HALF_FLOAT || this._caps.colorBufferFloat || (DB = !1, jB.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (DB = !1, jB.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (DB = !1, JB = 1, jB.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (DB = !1, JB = 1, jB.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const qB = OB,
          ZB = qB;
        zB.width = qB, zB.height = ZB, zB.invertY = QB, zB._compression = MB;
        if (!this.needPOTTextures || (0, yB.h)(zB.width) && (0, yB.h)(zB.height) || (DB = !1), BB) this.updateRawCubeTexture(zB, BB, GB, YB, QB, MB);
        else {
          const BB = this._getRGBABufferInternalSizedFormat(YB),
            OB = 0;
          this._bindTextureDirectly(PB.TEXTURE_CUBE_MAP, zB, !0);
          for (let GB = 0; GB < 6; GB++) MB ? PB.compressedTexImage2D(PB.TEXTURE_CUBE_MAP_POSITIVE_X + GB, OB, this.getCaps().s3tc[MB], zB.width, zB.height, 0, void 0) : PB.texImage2D(PB.TEXTURE_CUBE_MAP_POSITIVE_X + GB, OB, BB, zB.width, zB.height, 0, pB, lB, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, zB, !0), BB && DB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const NB = this._getSamplingParameters(JB, DB);
        return PB.texParameteri(PB.TEXTURE_CUBE_MAP, PB.TEXTURE_MAG_FILTER, NB.mag), PB.texParameteri(PB.TEXTURE_CUBE_MAP, PB.TEXTURE_MIN_FILTER, NB.min), PB.texParameteri(PB.TEXTURE_CUBE_MAP, PB.TEXTURE_WRAP_S, PB.CLAMP_TO_EDGE), PB.texParameteri(PB.TEXTURE_CUBE_MAP, PB.TEXTURE_WRAP_T, PB.CLAMP_TO_EDGE), this._bindTextureDirectly(PB.TEXTURE_CUBE_MAP, null), zB.generateMipMaps = DB, zB.samplingMode = JB, zB.isReady = !0, zB
      }, DB.ThinEngine.prototype.updateRawCubeTexture = function(OB, GB, YB, DB, QB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        OB._bufferViewArray = GB, OB.format = YB, OB.type = DB, OB.invertY = QB, OB._compression = oB;
        const JB = this._gl,
          MB = this._getWebGLTextureType(DB);
        let PB = this._getInternalFormat(YB);
        const zB = this._getRGBABufferInternalSizedFormat(DB);
        let lB = !1;
        PB === JB.RGB && (PB = JB.RGBA, lB = !0), this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, OB, !0), this._unpackFlipY(void 0 === QB || !!QB), OB.width % 4 !== 0 && JB.pixelStorei(JB.UNPACK_ALIGNMENT, 1);
        for (let yB = 0; yB < 6; yB++) {
          let YB = GB[yB];
          oB ? JB.compressedTexImage2D(JB.TEXTURE_CUBE_MAP_POSITIVE_X + yB, jB, this.getCaps().s3tc[oB], OB.width, OB.height, 0, YB) : (lB && (YB = BB(YB, OB.width, OB.height, DB)), JB.texImage2D(JB.TEXTURE_CUBE_MAP_POSITIVE_X + yB, jB, zB, OB.width, OB.height, 0, PB, MB, YB))
        }(!this.needPOTTextures || (0, yB.h)(OB.width) && (0, yB.h)(OB.height)) && OB.generateMipMaps && 0 === jB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), OB.isReady = !0
      }, DB.ThinEngine.prototype.createRawCubeTextureFromUrl = function(OB, GB, YB, DB, QB, oB, jB, yB) {
        let JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          MB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          PB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          zB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const lB = this._gl,
          pB = this.createRawCubeTexture(null, YB, DB, QB, !oB, zB, PB, null);
        GB?.addPendingData(pB), pB.url = OB, pB.isReady = !1, this._internalTexturesCache.push(pB);
        const qB = (BB, OB) => {
            GB?.removePendingData(pB), MB && MB(BB ? BB.status + " " + BB.statusText : "Failed to parse texture data", OB)
          },
          ZB = async OB => {
            if (!pB._hardwareTexture) return;
            const YB = jB(OB);
            if (!YB) return;
            const oB = YB instanceof Promise ? await YB : YB,
              MB = pB.width;
            if (yB) {
              const OB = this._getWebGLTextureType(QB);
              let GB = this._getInternalFormat(DB);
              const YB = this._getRGBABufferInternalSizedFormat(QB);
              let jB = !1;
              GB === lB.RGB && (GB = lB.RGBA, jB = !0), this._bindTextureDirectly(lB.TEXTURE_CUBE_MAP, pB, !0), this._unpackFlipY(!1);
              const JB = yB(oB);
              for (let DB = 0; DB < JB.length; DB++) {
                const oB = MB >> DB;
                for (let yB = 0; yB < 6; yB++) {
                  let MB = JB[DB][yB];
                  jB && (MB = BB(MB, oB, oB, QB)), lB.texImage2D(yB, DB, YB, oB, oB, 0, GB, OB, MB)
                }
              }
              this._bindTextureDirectly(lB.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(pB, oB, DB, QB, zB);
            pB.isReady = !0, GB?.removePendingData(pB), pB.onLoadedObservable.notifyObservers(pB), pB.onLoadedObservable.clear(), JB && JB()
          };
        return this._loadFile(OB, (BB => {
          ZB(BB).catch((BB => {
            qB(void 0, BB)
          }))
        }), void 0, GB?.offlineProvider, !0, qB), pB
      }, DB.ThinEngine.prototype.createRawTexture2DArray = OB(!1), DB.ThinEngine.prototype.createRawTexture3D = OB(!0), DB.ThinEngine.prototype.updateRawTexture2DArray = GB(!1), DB.ThinEngine.prototype.updateRawTexture3D = GB(!0))
    }();
    var MB = GB(40883);
    let PB = !1;
    PB || (PB = !0, DB.ThinEngine.prototype._readTexturePixelsSync = function(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        JB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const PB = this._gl;
      if (!PB) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const BB = PB.createFramebuffer();
        if (!BB) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = BB
      }
      PB.bindFramebuffer(PB.FRAMEBUFFER, this._dummyFramebuffer), YB > -1 && (BB.is2DArray || BB.is3D) ? PB.framebufferTextureLayer(PB.FRAMEBUFFER, PB.COLOR_ATTACHMENT0, BB._hardwareTexture?.underlyingResource, DB, YB) : YB > -1 ? PB.framebufferTexture2D(PB.FRAMEBUFFER, PB.COLOR_ATTACHMENT0, PB.TEXTURE_CUBE_MAP_POSITIVE_X + YB, BB._hardwareTexture?.underlyingResource, DB) : PB.framebufferTexture2D(PB.FRAMEBUFFER, PB.COLOR_ATTACHMENT0, PB.TEXTURE_2D, BB._hardwareTexture?.underlyingResource, DB);
      let zB = void 0 !== BB.type ? this._getWebGLTextureType(BB.type) : PB.UNSIGNED_BYTE;
      return jB ? QB || (QB = (0, MB.j)(BB.type, 4 * OB * GB)) : zB === PB.UNSIGNED_BYTE ? (QB || (QB = new Uint8Array(4 * OB * GB)), zB = PB.UNSIGNED_BYTE) : (QB || (QB = new Float32Array(4 * OB * GB)), zB = PB.FLOAT), oB && this.flushFramebuffer(), PB.readPixels(yB, JB, OB, GB, PB.RGBA, zB, QB), PB.bindFramebuffer(PB.FRAMEBUFFER, this._currentFramebuffer), QB
    }, DB.ThinEngine.prototype._readTexturePixels = function(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        JB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB))
    }), (0, GB(40972).c)();
    let zB = !1;
    zB || (zB = !0, DB.ThinEngine.prototype._createDepthStencilCubeTexture = function(BB, OB) {
      const GB = new oB.b(this, 12);
      if (GB.isCube = !0, 1 === this.Pq) return jB.b.Error("Depth cube texture is not supported by WebGL 1."), GB;
      const YB = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...OB
        },
        DB = this._gl;
      this._bindTextureDirectly(DB.TEXTURE_CUBE_MAP, GB, !0), this._setupDepthStencilTexture(GB, BB, YB.bilinearFiltering, YB.comparisonFunction);
      for (let QB = 0; QB < 6; QB++) YB.generateStencil ? DB.texImage2D(DB.TEXTURE_CUBE_MAP_POSITIVE_X + QB, 0, DB.DEPTH24_STENCIL8, BB, BB, 0, DB.DEPTH_STENCIL, DB.UNSIGNED_INT_24_8, null) : DB.texImage2D(DB.TEXTURE_CUBE_MAP_POSITIVE_X + QB, 0, DB.DEPTH_COMPONENT24, BB, BB, 0, DB.DEPTH_COMPONENT, DB.UNSIGNED_INT, null);
      return this._bindTextureDirectly(DB.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(GB), GB
    }, DB.ThinEngine.prototype._setCubeMapTextureParams = function(BB, OB, GB) {
      const YB = this._gl;
      YB.texParameteri(YB.TEXTURE_CUBE_MAP, YB.TEXTURE_MAG_FILTER, YB.LINEAR), YB.texParameteri(YB.TEXTURE_CUBE_MAP, YB.TEXTURE_MIN_FILTER, OB ? YB.LINEAR_MIPMAP_LINEAR : YB.LINEAR), YB.texParameteri(YB.TEXTURE_CUBE_MAP, YB.TEXTURE_WRAP_S, YB.CLAMP_TO_EDGE), YB.texParameteri(YB.TEXTURE_CUBE_MAP, YB.TEXTURE_WRAP_T, YB.CLAMP_TO_EDGE), BB.samplingMode = OB ? 3 : 2, OB && this.getCaps().textureMaxLevel && void 0 !== GB && GB > 0 && (YB.texParameteri(YB.TEXTURE_CUBE_MAP, YB.TEXTURE_MAX_LEVEL, GB), BB._maxLodLevel = GB), this._bindTextureDirectly(YB.TEXTURE_CUBE_MAP, null)
    }, DB.ThinEngine.prototype.createCubeTexture = function(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oB = arguments.length > 6 ? arguments[6] : void 0,
        JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        MB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        zB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        lB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        pB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        qB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const ZB = this._gl;
      return this.createCubeTextureBase(BB, OB, GB, !!YB, DB, QB, oB, JB, MB, PB, zB, lB, (BB => this._bindTextureDirectly(ZB.TEXTURE_CUBE_MAP, BB, !0)), ((BB, OB) => {
        const GB = this.needPOTTextures ? (0, yB.f)(OB[0].width, this._caps.maxCubemapTextureSize) : OB[0].width,
          QB = GB,
          JB = [ZB.TEXTURE_CUBE_MAP_POSITIVE_X, ZB.TEXTURE_CUBE_MAP_POSITIVE_Y, ZB.TEXTURE_CUBE_MAP_POSITIVE_Z, ZB.TEXTURE_CUBE_MAP_NEGATIVE_X, ZB.TEXTURE_CUBE_MAP_NEGATIVE_Y, ZB.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(ZB.TEXTURE_CUBE_MAP, BB, !0), this._unpackFlipY(!1);
        const MB = oB ? this._getInternalFormat(oB, BB._useSRGBBuffer) : BB._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : ZB.RGBA;
        let PB = oB ? this._getInternalFormat(oB) : ZB.RGBA;
        BB._useSRGBBuffer && 1 === this.Pq && (PB = MB);
        for (let YB = 0; YB < JB.length; YB++)
          if (OB[YB].width !== GB || OB[YB].height !== QB) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void jB.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = GB, this._workingCanvas.height = QB, this._workingContext.drawImage(OB[YB], 0, 0, OB[YB].width, OB[YB].height, 0, 0, GB, QB), ZB.texImage2D(JB[YB], 0, MB, PB, ZB.UNSIGNED_BYTE, this._workingCanvas)
          } else ZB.texImage2D(JB[YB], 0, MB, PB, ZB.UNSIGNED_BYTE, OB[YB]);
        YB || ZB.generateMipmap(ZB.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(BB, !YB), BB.width = GB, BB.height = QB, BB.isReady = !0, oB && (BB.format = oB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear(), DB && DB()
      }), !!pB, qB)
    }, DB.ThinEngine.prototype.generateMipMapsForCubemap = function(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB.generateMipMaps) {
        const GB = this._gl;
        this._bindTextureDirectly(GB.TEXTURE_CUBE_MAP, BB, !0), GB.generateMipmap(GB.TEXTURE_CUBE_MAP), OB && this._bindTextureDirectly(GB.TEXTURE_CUBE_MAP, null)
      }
    });
    GB(40974);
    let lB = !1;
    lB || (lB = !0, DB.ThinEngine.prototype.setDepthStencilTexture = function(BB, OB, GB, YB) {
      void 0 !== BB && (OB && (this._boundUniforms[BB] = OB), GB && GB.depthStencilTexture ? this._setTexture(BB, GB, !1, !0, YB) : this._setTexture(BB, null, void 0, void 0, YB))
    });
    let pB = !1;
    pB || (pB = !0, DB.ThinEngine.prototype.createRenderTargetCubeTexture = function(BB, OB) {
      const GB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
        YB = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...OB
        };
      YB.generateStencilBuffer = YB.generateDepthBuffer && YB.generateStencilBuffer, (1 !== YB.type || this._caps.textureFloatLinearFiltering) && (2 !== YB.type || this._caps.textureHalfFloatLinearFiltering) || (YB.samplingMode = 1);
      const DB = this._gl,
        QB = new oB.b(this, 5);
      this._bindTextureDirectly(DB.TEXTURE_CUBE_MAP, QB, !0);
      const yB = this._getSamplingParameters(YB.samplingMode, YB.generateMipMaps);
      1 !== YB.type || this._caps.textureFloat || (YB.type = 0, jB.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), DB.texParameteri(DB.TEXTURE_CUBE_MAP, DB.TEXTURE_MAG_FILTER, yB.mag), DB.texParameteri(DB.TEXTURE_CUBE_MAP, DB.TEXTURE_MIN_FILTER, yB.min), DB.texParameteri(DB.TEXTURE_CUBE_MAP, DB.TEXTURE_WRAP_S, DB.CLAMP_TO_EDGE), DB.texParameteri(DB.TEXTURE_CUBE_MAP, DB.TEXTURE_WRAP_T, DB.CLAMP_TO_EDGE);
      for (let oB = 0; oB < 6; oB++) DB.texImage2D(DB.TEXTURE_CUBE_MAP_POSITIVE_X + oB, 0, this._getRGBABufferInternalSizedFormat(YB.type, YB.format), BB, BB, 0, this._getInternalFormat(YB.format), this._getWebGLTextureType(YB.type), null);
      const JB = DB.createFramebuffer();
      return this._bindUnboundFramebuffer(JB), GB._depthStencilBuffer = this._setupFramebufferDepthAttachments(YB.generateStencilBuffer, YB.generateDepthBuffer, BB, BB), YB.generateMipMaps && DB.generateMipmap(DB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(DB.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), GB._framebuffer = JB, GB._generateDepthBuffer = YB.generateDepthBuffer, GB._generateStencilBuffer = YB.generateStencilBuffer, QB.width = BB, QB.height = BB, QB.isReady = !0, QB.isCube = !0, QB.samples = 1, QB.generateMipMaps = YB.generateMipMaps, QB.samplingMode = YB.samplingMode, QB.type = YB.type, QB.format = YB.format, this._internalTexturesCache.push(QB), GB.setTextures(QB), GB
    });
    var qB = GB(40985),
      ZB = GB(40992);
    let NB = !1;
    NB || (NB = !0, DB.ThinEngine.prototype.createPrefilteredCubeTexture = function(BB, OB, YB, DB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        yB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        JB = arguments.length > 6 ? arguments[6] : void 0,
        MB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        PB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        zB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(BB, OB, null, !1, (async BB => {
        if (!BB) return void(QB && QB(null));
        const yB = BB.texture;
        if (PB ? BB.info.sphericalPolynomial && (yB._sphericalPolynomial = BB.info.sphericalPolynomial) : yB._sphericalPolynomial = yB._sphericalPolynomial ?? new qB.f, yB._source = 9, this.getCaps().textureLOD) return void(QB && QB(yB));
        const JB = this._gl,
          MB = BB.width;
        if (!MB) return;
        const {
          DDSTools: zB
        } = await GB.e(615).then((() => GB(44902))), lB = [];
        for (let GB = 0; GB < 3; GB++) {
          const QB = 1 - GB / 2,
            PB = DB,
            pB = Math.log2(MB) * YB + DB,
            qB = PB + (pB - PB) * QB,
            NB = Math.round(Math.min(Math.max(qB, 0), pB)),
            RB = new oB.b(this, 2);
          if (RB.type = yB.type, RB.format = yB.format, RB.width = Math.pow(2, Math.max(Math.log2(MB) - NB, 0)), RB.height = RB.width, RB.isCube = !0, RB._cachedWrapU = 0, RB._cachedWrapV = 0, this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, RB, !0), RB.samplingMode = 2, JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_MAG_FILTER, JB.LINEAR), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_MIN_FILTER, JB.LINEAR), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_WRAP_S, JB.CLAMP_TO_EDGE), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_WRAP_T, JB.CLAMP_TO_EDGE), BB.isDDS) {
            const OB = BB.info,
              GB = BB.data;
            this._unpackFlipY(OB.isCompressed), zB.UploadDDSLevels(this, RB, GB, OB, !0, 6, NB)
          } else jB.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, null);
          const WB = new ZB.d(OB);
          WB._isCube = !0, WB._texture = RB, RB.isReady = !0, lB.push(WB)
        }
        yB._lodTextureHigh = lB[2], yB._lodTextureMid = lB[1], yB._lodTextureLow = lB[0], QB && QB(yB)
      }), yB, JB, MB, PB, YB, DB, null, void 0, !1, zB)
    });
    var RB = GB(40920);
    let WB = !1;
    WB || (WB = !0, DB.ThinEngine.prototype.createUniformBuffer = function(BB, OB) {
      const GB = this._gl.createBuffer();
      if (!GB) throw new Error("Unable to create uniform buffer");
      const YB = new RB.b(GB);
      return this.bindUniformBuffer(YB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), YB.references = 1, YB
    }, DB.ThinEngine.prototype.createDynamicUniformBuffer = function(BB, OB) {
      const GB = this._gl.createBuffer();
      if (!GB) throw new Error("Unable to create dynamic uniform buffer");
      const YB = new RB.b(GB);
      return this.bindUniformBuffer(YB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), YB.references = 1, YB
    }, DB.ThinEngine.prototype.updateUniformBuffer = function(BB, OB, GB, YB) {
      this.bindUniformBuffer(BB), void 0 === GB && (GB = 0), void 0 === YB ? OB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, GB, OB) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, GB, new Float32Array(OB)) : OB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, OB.subarray(GB, GB + YB)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(OB).subarray(GB, GB + YB)), this.bindUniformBuffer(null)
    }, DB.ThinEngine.prototype.bindUniformBuffer = function(BB) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, BB ? BB.underlyingResource : null)
    }, DB.ThinEngine.prototype.bindUniformBufferBase = function(BB, OB, GB) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, OB, BB ? BB.underlyingResource : null)
    }, DB.ThinEngine.prototype.bindUniformBlock = function(BB, OB, GB) {
      const YB = BB.program,
        DB = this._gl.getUniformBlockIndex(YB, OB);
      4294967295 !== DB && this._gl.uniformBlockBinding(YB, DB, GB)
    });
    var AB = GB(40870),
      VB = GB(40905);
    let SB = !1;
    SB || (SB = !0, VB.d.prototype.displayLoadingUI = function() {
      if (!(0, AB.j)()) return;
      const BB = this.loadingScreen;
      BB && BB.displayLoadingUI()
    }, VB.d.prototype.hideLoadingUI = function() {
      if (!(0, AB.j)()) return;
      const BB = this._loadingScreen;
      BB && BB.hideLoadingUI()
    }, Object.defineProperty(VB.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = VB.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(BB) {
        this._loadingScreen = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(VB.d.prototype, "loadingUIText", {
      set: function(BB) {
        this.loadingScreen.loadingUIText = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(VB.d.prototype, "loadingUIBackgroundColor", {
      set: function(BB) {
        this.loadingScreen.loadingUIBackgroundColor = BB
      },
      enumerable: !0,
      configurable: !0
    })), (0, GB(40958).c)();
    let nB = !1;
    nB || (nB = !0, VB.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, VB.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, VB.d.prototype.setDepthFunction = function(BB) {
      this._depthCullingState.depthFunc = BB
    }, VB.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, VB.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, VB.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, VB.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, VB.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, VB.d.prototype.setDepthWrite = function(BB) {
      this._depthCullingState.depthMask = BB
    }, VB.d.prototype.setAlphaConstants = function(BB, OB, GB, YB) {
      this._alphaState.setAlphaBlendConstants(BB, OB, GB, YB)
    }, VB.d.prototype.getAlphaMode = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[BB]
    }, VB.d.prototype.getAlphaEquation = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[BB]
    });
    let UB = !1;
    UB || (UB = !0, VB.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, VB.d.prototype.setStencilBuffer = function(BB) {
      this._stencilState.stencilTest = BB
    }, VB.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, VB.d.prototype.setStencilMask = function(BB) {
      this._stencilState.stencilMask = BB
    }, VB.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, VB.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, VB.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, VB.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, VB.d.prototype.setStencilFunction = function(BB) {
      this._stencilState.stencilFunc = BB
    }, VB.d.prototype.setStencilBackFunction = function(BB) {
      this._stencilState.stencilBackFunc = BB
    }, VB.d.prototype.setStencilFunctionReference = function(BB) {
      this._stencilState.stencilFuncRef = BB
    }, VB.d.prototype.setStencilFunctionMask = function(BB) {
      this._stencilState.stencilFuncMask = BB
    }, VB.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, VB.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, VB.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, VB.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, VB.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, VB.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, VB.d.prototype.setStencilOperationFail = function(BB) {
      this._stencilState.stencilOpStencilFail = BB
    }, VB.d.prototype.setStencilBackOperationFail = function(BB) {
      this._stencilState.stencilBackOpStencilFail = BB
    }, VB.d.prototype.setStencilOperationDepthFail = function(BB) {
      this._stencilState.stencilOpDepthFail = BB
    }, VB.d.prototype.setStencilBackOperationDepthFail = function(BB) {
      this._stencilState.stencilBackOpDepthFail = BB
    }, VB.d.prototype.setStencilOperationPass = function(BB) {
      this._stencilState.stencilOpStencilDepthPass = BB
    }, VB.d.prototype.setStencilBackOperationPass = function(BB) {
      this._stencilState.stencilBackOpStencilDepthPass = BB
    }, VB.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, VB.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    GB(41026);
    let fB = !1;
    fB || (fB = !0, VB.d.prototype.createDepthStencilTexture = function(BB, OB, GB) {
      if (OB.isCube) {
        const GB = BB.width || BB;
        return this._createDepthStencilCubeTexture(GB, OB)
      }
      return this._createDepthStencilTexture(BB, OB, GB)
    });
    GB(41030), GB(41079);
    let kB = !1;
    kB || (kB = !0, DB.ThinEngine.prototype.enableScissor = function(BB, OB, GB, YB) {
      const DB = this._gl;
      DB.enable(DB.SCISSOR_TEST), DB.scissor(BB, OB, GB, YB)
    }, DB.ThinEngine.prototype.disableScissor = function() {
      const BB = this._gl;
      BB.disable(BB.SCISSOR_TEST)
    })
  },
  40833: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => VB
    });
    var YB = GB(40837),
      DB = GB(37796),
      QB = GB(40849),
      oB = GB(40911);
    class jB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new yB(BB)
      }
      sampleFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const OB = BB - this._lastFrameTimeMs;
            this._rollingFrameTime.add(OB)
          }
          this._lastFrameTimeMs = BB
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
        const BB = this._rollingFrameTime.history(0);
        return 0 === BB ? 0 : 1e3 / BB
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
    class yB {
      constructor(BB) {
        this._samples = new Array(BB), this.reset()
      }
      add(BB) {
        let OB;
        if (this.isSaturated()) {
          const BB = this._samples[this._pos];
          OB = BB - this.average, this.average -= OB / (this._sampleCount - 1), this._m2 -= OB * (BB - this.average)
        } else this._sampleCount++;
        OB = BB - this.average, this.average += OB / this._sampleCount, this._m2 += OB * (BB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = BB, this._pos++, this._pos %= this._samples.length
      }
      history(BB) {
        if (BB >= this._sampleCount || BB >= this._samples.length) return 0;
        const OB = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(OB - BB)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(BB) {
        const OB = this._samples.length;
        return (BB % OB + OB) % OB
      }
    }
    var JB = GB(40920),
      MB = GB(39366),
      PB = GB(40938),
      zB = GB(40905),
      lB = GB(40870);

    function pB(BB) {
      const OB = function(BB) {
        if (!(0, lB.c)() || !document.body) return null;
        const OB = document.createElement("span");
        OB.textContent = "Hg", OB.style.font = BB;
        const GB = document.createElement("div");
        GB.style.display = "inline-block", GB.style.width = "1px", GB.style.height = "0px", GB.style.verticalAlign = "bottom";
        const YB = document.createElement("div");
        let DB, QB;
        YB.style.whiteSpace = "nowrap", YB.appendChild(OB), YB.appendChild(GB), document.body.appendChild(YB);
        try {
          QB = GB.getBoundingClientRect().top - OB.getBoundingClientRect().top, GB.style.verticalAlign = "baseline", DB = GB.getBoundingClientRect().top - OB.getBoundingClientRect().top
        } finally {
          document.body.removeChild(YB)
        }
        const oB = {
          ascent: DB,
          height: QB,
          descent: QB - DB
        };
        return qB(oB) ? oB : null
      }(BB);
      if (OB) return OB;
      const GB = function(BB) {
        let OB = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? OB = new OffscreenCanvas(64, 64) : (0, lB.c)() && "function" === typeof document.createElement && (OB = document.createElement("canvas"), OB.width = 64, OB.height = 64);
          const GB = OB?.getContext("2d");
          if (!GB) return null;
          GB.font = BB;
          const YB = GB.measureText("Hg"),
            DB = Number(YB.actualBoundingBoxAscent ?? YB.fontBoundingBoxAscent),
            QB = Number(YB.actualBoundingBoxDescent ?? YB.fontBoundingBoxDescent),
            oB = {
              ascent: DB,
              height: DB + QB,
              descent: QB
            };
          return qB(oB) ? oB : null
        } catch {
          return null
        } finally {
          const BB = OB;
          "function" === typeof BB?.dispose && BB.dispose()
        }
      }(BB);
      return GB || function(BB) {
        const OB = Math.max(1, function(BB) {
            const OB = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(BB || ""));
            return OB ? Number(OB[1]) : 16
          }(BB)),
          GB = .8 * OB,
          YB = .2 * OB;
        return {
          ascent: GB,
          height: GB + YB,
          descent: YB
        }
      }(BB)
    }

    function qB(BB) {
      return Number.isFinite(BB.ascent) && Number.isFinite(BB.height) && Number.isFinite(BB.descent) && BB.height > 0
    }

    function ZB(BB) {
      if (BB.requestPointerLock) {
        const OB = BB.requestPointerLock();
        OB instanceof Promise ? OB.then((() => {
          BB.focus()
        })).catch((() => {})) : BB.focus()
      }
    }
    var NB = GB(40950),
      RB = GB(40899),
      WB = GB(40958),
      AB = GB(40965);
    class VB extends QB.ThinEngine {
      static get NpmPackage() {
        return zB.d.NpmPackage
      }
      static get Version() {
        return zB.d.Version
      }
      static get Instances() {
        return DB.b.Instances
      }
      static get LastCreatedEngine() {
        return DB.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return DB.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(BB) {
        return zB.d.DefaultLoadingScreenFactory(BB)
      }
      get _supportsHardwareTextureRescaling() {
        return !!VB._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, WB.c)(), (0, AB.d)(), super(BB, OB, GB, YB), this._performanceMonitor = new jB, this._drawCalls = new NB.b, BB && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(BB) {
        super._sharedInit(BB),
          function(BB, OB, GB) {
            BB._onCanvasFocus = () => {
              BB.onCanvasFocusObservable.notifyObservers(BB)
            }, BB._onCanvasBlur = () => {
              BB.onCanvasBlurObservable.notifyObservers(BB)
            }, BB._onCanvasContextMenu = OB => {
              BB.disableContextMenu && OB.preventDefault()
            }, OB.addEventListener("focus", BB._onCanvasFocus), OB.addEventListener("blur", BB._onCanvasBlur), OB.addEventListener("contextmenu", BB._onCanvasContextMenu), BB._onBlur = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.disable(), BB._windowIsBackground = !0
            }, BB._onFocus = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.enable(), BB._windowIsBackground = !1
            }, BB._onCanvasPointerOut = GB => {
              document.elementFromPoint(GB.clientX, GB.clientY) !== OB && BB.onCanvasPointerOutObservable.notifyObservers(GB)
            };
            const YB = BB.getHostWindow();
            YB && "function" === typeof YB.addEventListener && (YB.addEventListener("blur", BB._onBlur), YB.addEventListener("focus", BB._onFocus)), OB.addEventListener("pointerout", BB._onCanvasPointerOut), GB.doNotHandleTouchAction || function(BB) {
              BB && BB.setAttribute && (BB.setAttribute("touch-action", "none"), BB.style.touchAction = "none", BB.style.webkitTapHighlightColor = "transparent")
            }(OB), !zB.d.audioEngine && GB.audioEngine && zB.d.AudioEngineFactory && (zB.d.audioEngine = zB.d.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, lB.c)() && (BB._onFullscreenChange = () => {
              BB.isFullscreen = !!document.fullscreenElement, BB.isFullscreen && BB._pointerLockRequested && OB && ZB(OB)
            }, document.addEventListener("fullscreenchange", BB._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", BB._onFullscreenChange, !1), BB._onPointerLockChange = () => {
              BB.isPointerLock = document.pointerLockElement === OB
            }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== zB.d.OfflineProviderFactory, BB._deterministicLockstep = !!GB.deterministicLockstep, BB._lockstepMaxSteps = GB.lockstepMaxSteps || 0, BB._timeStep = GB.timeStep || 1 / 60
          }(this, BB, this._creationOptions)
      }
      resizeImageBitmap(BB, OB, GB) {
        return function(BB, OB, GB, YB) {
          const DB = BB.createCanvas(GB, YB).getContext("2d");
          if (!DB) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return DB.drawImage(OB, 0, 0), DB.getImageData(0, 0, GB, YB).data
        }(this, BB, OB, GB)
      }
      async _createImageBitmapFromSource(BB, OB) {
        return await async function(BB, OB, GB) {
          return await new Promise(((YB, DB) => {
            const QB = new Image;
            QB.onload = () => {
              QB.decode().then((() => {
                BB.createImageBitmap(QB, GB).then((BB => {
                  YB(BB)
                }))
              }))
            }, QB.onerror = () => {
              DB(`Error loading image ${QB.src}`)
            }, QB.src = OB
          }))
        }(this, BB, OB)
      }
      switchFullscreen(BB) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(BB)
      }
      enterFullscreen(BB) {
        this.isFullscreen || (this._pointerLockRequested = BB, this._renderingCanvas && function(BB) {
          const OB = BB.requestFullscreen || BB.webkitRequestFullscreen;
          OB && OB.call(BB)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const BB = document;
          document.exitFullscreen ? document.exitFullscreen() : BB.webkitCancelFullScreen && BB.webkitCancelFullScreen()
        }()
      }
      setDitheringState(BB) {
        BB ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(BB) {
        BB ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(BB, OB, GB, YB) {
        const DB = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(BB, OB, GB, YB), DB
      }
      scissorClear(BB, OB, GB, YB, DB) {
        this.enableScissor(BB, OB, GB, YB), this.clear(DB, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(BB) {
        const OB = this._gl.getAttachedShaders(BB);
        return OB ? this._gl.getShaderSource(OB[0]) : null
      }
      getFragmentShaderSource(BB) {
        const OB = this._gl.getAttachedShaders(BB);
        return OB ? this._gl.getShaderSource(OB[1]) : null
      }
      set framebufferDimensionsObject(BB) {
        this._framebufferDimensionsObject = BB, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const BB of this.scenes) BB.resetCachedMaterial(), BB._rebuildGeometries();
        for (const BB of this._virtualScenes) BB.resetCachedMaterial(), BB._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(BB) {
        return pB(BB)
      }
      enterPointerlock() {
        this._renderingCanvas && ZB(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      zW() {
        this._measureFps(), super.zW()
      }
      _deletePipelineContext(BB) {
        const OB = BB;
        OB && OB.program && OB.transformFeedback && (this.deleteTransformFeedback(OB.transformFeedback), OB.transformFeedback = null), super._deletePipelineContext(BB)
      }
      createShaderProgram(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        DB = DB || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const oB = super.createShaderProgram(BB, OB, GB, YB, DB, QB);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), oB
      }
      _createShaderProgram(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const QB = YB.createProgram();
        if (BB.program = QB, !QB) throw new Error("Unable to create program");
        if (YB.attachShader(QB, OB), YB.attachShader(QB, GB), this.Pq > 1 && DB) {
          const OB = this.createTransformFeedback();
          this.bindTransformFeedback(OB), this.setTranformFeedbackVaryings(QB, DB), BB.transformFeedback = OB
        }
        return YB.linkProgram(QB), this.Pq > 1 && DB && this.bindTransformFeedback(null), BB.context = YB, BB.vertexShader = OB, BB.fragmentShader = GB, BB.isParallelCompiled || this._finalizePipelineContext(BB), QB
      }
      _releaseTexture(BB) {
        super._releaseTexture(BB)
      }
      _releaseRenderTargetWrapper(BB) {
        super._releaseRenderTargetWrapper(BB);
        for (const OB of this.scenes) {
          for (const GB of OB.postProcesses) GB._outputTexture === BB && (GB._outputTexture = null);
          for (const GB of OB.cameras)
            for (const OB of GB._postProcesses) OB && OB._outputTexture === BB && (OB._outputTexture = null)
        }
      }
      _rescaleTexture(BB, OB, GB, YB, DB) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const QB = this.createRenderTargetTexture({
          width: OB.width,
          height: OB.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && VB._RescalePostProcessFactory && (this._rescalePostProcess = VB._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const oB = () => {
              this._rescalePostProcess.onApply = function(OB) {
                OB._bindTexture("textureSampler", BB)
              };
              let oB = GB;
              oB || (oB = this.scenes[this.scenes.length - 1]), oB.postProcessManager.directRender([this._rescalePostProcess], QB, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, OB, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, YB, 0, 0, OB.width, OB.height, 0), this.unBindFramebuffer(QB), QB.dispose(), DB && DB()
            },
            jB = this._rescalePostProcess.getEffect();
          jB ? jB.executeWhenCompiled(oB) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((BB => {
            BB.executeWhenCompiled(oB)
          }))
        }
      }
      wrapWebGLTexture(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const oB = new PB.b(BB, this._gl),
          jB = new YB.b(this, 15, !0);
        return jB._hardwareTexture = oB, jB.baseWidth = DB, jB.baseHeight = QB, jB.width = DB, jB.height = QB, jB.isReady = !0, jB.useMipMaps = OB, this.updateTextureSamplingMode(GB, jB), jB
      }
      updateWrappedWebGLTexture(BB, OB) {
        if (15 !== BB.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const YB of this._renderTargetWrapperCache)
          if (YB.textures?.includes(BB)) {
            if (YB.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (YB._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } BB._hardwareTexture = new PB.b(OB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
        for (const YB in this._boundTexturesCache) this._boundTexturesCache[YB] === BB && (this._boundTexturesCache[YB] = null);
        this.updateTextureSamplingMode(BB.samplingMode, BB);
        const GB = this._gl;
        for (const YB of this._renderTargetWrapperCache) {
          if (YB.texture !== BB) continue;
          const DB = YB,
            QB = YB.samples,
            oB = QB > 1;
          DB._framebuffer && GB.deleteFramebuffer(DB._framebuffer), !oB && DB._depthStencilBuffer && (GB.deleteRenderbuffer(DB._depthStencilBuffer), DB._depthStencilBuffer = null);
          const jB = this._currentFramebuffer,
            yB = GB.createFramebuffer();
          this._bindUnboundFramebuffer(yB), GB.framebufferTexture2D(GB.FRAMEBUFFER, GB.COLOR_ATTACHMENT0, GB.TEXTURE_2D, OB, 0), oB || (DB._depthStencilBuffer = this._setupFramebufferDepthAttachments(YB._generateStencilBuffer, YB._generateDepthBuffer, YB.width, YB.height)), this._bindUnboundFramebuffer(jB), DB._framebuffer = yB, oB && (YB._samples = 1, this.updateRenderTargetTextureSampleCount(DB, QB))
        }
      }
      _uploadImageToTexture(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const DB = this._gl,
          QB = this._getWebGLTextureType(BB.type),
          oB = this._getInternalFormat(BB.format),
          jB = this._getRGBABufferInternalSizedFormat(BB.type, oB),
          yB = BB.isCube ? DB.TEXTURE_CUBE_MAP : DB.TEXTURE_2D;
        this._bindTextureDirectly(yB, BB, !0), this._unpackFlipY(BB.invertY);
        let JB = DB.TEXTURE_2D;
        BB.isCube && (JB = DB.TEXTURE_CUBE_MAP_POSITIVE_X + GB), DB.texImage2D(JB, YB, jB, oB, QB, OB), this._bindTextureDirectly(yB, null, !0)
      }
      updateTextureComparisonFunction(BB, OB) {
        if (1 === this.Pq) return void MB.b.Error("WebGL 1 does not support texture comparison.");
        const GB = this._gl;
        BB.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, BB, !0), 0 === OB ? (GB.texParameteri(GB.TEXTURE_CUBE_MAP, GB.TEXTURE_COMPARE_FUNC, 515), GB.texParameteri(GB.TEXTURE_CUBE_MAP, GB.TEXTURE_COMPARE_MODE, GB.NONE)) : (GB.texParameteri(GB.TEXTURE_CUBE_MAP, GB.TEXTURE_COMPARE_FUNC, OB), GB.texParameteri(GB.TEXTURE_CUBE_MAP, GB.TEXTURE_COMPARE_MODE, GB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), 0 === OB ? (GB.texParameteri(GB.TEXTURE_2D, GB.TEXTURE_COMPARE_FUNC, 515), GB.texParameteri(GB.TEXTURE_2D, GB.TEXTURE_COMPARE_MODE, GB.NONE)) : (GB.texParameteri(GB.TEXTURE_2D, GB.TEXTURE_COMPARE_FUNC, OB), GB.texParameteri(GB.TEXTURE_2D, GB.TEXTURE_COMPARE_MODE, GB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), BB._comparisonFunction = OB
      }
      createInstancesBuffer(BB) {
        const OB = this._gl.createBuffer();
        if (!OB) throw new Error("Unable to create instance buffer");
        const GB = new JB.b(OB);
        return GB.CP = BB, this.bindArrayBuffer(GB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), GB.references = 1, GB
      }
      deleteInstancesBuffer(BB) {
        this._gl.deleteBuffer(BB)
      }
      async _clientWaitAsync(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const YB = this._gl;
        return await new Promise(((DB, QB) => {
          (0, RB.d)((() => {
            const GB = YB.clientWaitSync(BB, OB, 0);
            if (GB == YB.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return GB != YB.TIMEOUT_EXPIRED
          }), DB, QB, GB)
        }))
      }
      _readPixelsAsync(BB, OB, GB, YB, DB, QB, oB) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const jB = this._gl,
          yB = jB.createBuffer();
        jB.bindBuffer(jB.PIXEL_PACK_BUFFER, yB), jB.bufferData(jB.PIXEL_PACK_BUFFER, oB.byteLength, jB.STREAM_READ), jB.readPixels(BB, OB, GB, YB, DB, QB, 0), jB.bindBuffer(jB.PIXEL_PACK_BUFFER, null);
        const JB = jB.fenceSync(jB.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return JB ? (jB.flush(), this._clientWaitAsync(JB, 0, 10).then((() => (jB.deleteSync(JB), jB.bindBuffer(jB.PIXEL_PACK_BUFFER, yB), jB.getBufferSubData(jB.PIXEL_PACK_BUFFER, 0, oB), jB.bindBuffer(jB.PIXEL_PACK_BUFFER, null), jB.deleteBuffer(yB), oB)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(BB, OB) {
            1 === DB.b.Instances.length && zB.d.audioEngine && (zB.d.audioEngine.dispose(), zB.d.audioEngine = null);
            const GB = BB.getHostWindow();
            GB && "function" === typeof GB.removeEventListener && (GB.removeEventListener("blur", BB._onBlur), GB.removeEventListener("focus", BB._onFocus)), OB && (OB.removeEventListener("focus", BB._onCanvasFocus), OB.removeEventListener("blur", BB._onCanvasBlur), OB.removeEventListener("pointerout", BB._onCanvasPointerOut), OB.removeEventListener("contextmenu", BB._onCanvasContextMenu)), (0, lB.c)() && (document.removeEventListener("fullscreenchange", BB._onFullscreenChange), document.removeEventListener("mozfullscreenchange", BB._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", BB._onFullscreenChange), document.removeEventListener("msfullscreenchange", BB._onFullscreenChange), document.removeEventListener("pointerlockchange", BB._onPointerLockChange), document.removeEventListener("mspointerlockchange", BB._onPointerLockChange), document.removeEventListener("mozpointerlockchange", BB._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", BB._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    VB.ALPHA_DISABLE = 0, VB.ALPHA_ADD = 1, VB.ALPHA_COMBINE = 2, VB.ALPHA_SUBTRACT = 3, VB.ALPHA_MULTIPLY = 4, VB.ALPHA_MAXIMIZED = 5, VB.ALPHA_ONEONE = 6, VB.ALPHA_PREMULTIPLIED = 7, VB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, VB.ALPHA_INTERPOLATE = 9, VB.ALPHA_SCREENMODE = 10, VB.DELAYLOADSTATE_NONE = 0, VB.DELAYLOADSTATE_LOADED = 1, VB.DELAYLOADSTATE_LOADING = 2, VB.DELAYLOADSTATE_NOTLOADED = 4, VB.NEVER = 512, VB.ALWAYS = 519, VB.LESS = 513, VB.EQUAL = 514, VB.LEQUAL = 515, VB.GREATER = 516, VB.GEQUAL = 518, VB.NOTEQUAL = 517, VB.KEEP = 7680, VB.REPLACE = 7681, VB.INCR = 7682, VB.DECR = 7683, VB.INVERT = 5386, VB.INCR_WRAP = 34055, VB.DECR_WRAP = 34056, VB.TEXTURE_CLAMP_ADDRESSMODE = 0, VB.TEXTURE_WRAP_ADDRESSMODE = 1, VB.TEXTURE_MIRROR_ADDRESSMODE = 2, VB.TEXTUREFORMAT_ALPHA = 0, VB.TEXTUREFORMAT_LUMINANCE = 1, VB.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, VB.TEXTUREFORMAT_RGB = 4, VB.TEXTUREFORMAT_RGBA = 5, VB.TEXTUREFORMAT_RED = 6, VB.TEXTUREFORMAT_R = 6, VB.TEXTUREFORMAT_R16_UNORM = 33322, VB.TEXTUREFORMAT_RG16_UNORM = 33324, VB.TEXTUREFORMAT_RGB16_UNORM = 32852, VB.TEXTUREFORMAT_RGBA16_UNORM = 32859, VB.TEXTUREFORMAT_R16_SNORM = 36760, VB.TEXTUREFORMAT_RG16_SNORM = 36761, VB.TEXTUREFORMAT_RGB16_SNORM = 36762, VB.TEXTUREFORMAT_RGBA16_SNORM = 36763, VB.TEXTUREFORMAT_RG = 7, VB.TEXTUREFORMAT_RED_INTEGER = 8, VB.TEXTUREFORMAT_R_INTEGER = 8, VB.TEXTUREFORMAT_RG_INTEGER = 9, VB.TEXTUREFORMAT_RGB_INTEGER = 10, VB.TEXTUREFORMAT_RGBA_INTEGER = 11, VB.TEXTURETYPE_UNSIGNED_BYTE = 0, VB.TEXTURETYPE_UNSIGNED_INT = 0, VB.TEXTURETYPE_FLOAT = 1, VB.TEXTURETYPE_HALF_FLOAT = 2, VB.TEXTURETYPE_BYTE = 3, VB.TEXTURETYPE_SHORT = 4, VB.TEXTURETYPE_UNSIGNED_SHORT = 5, VB.TEXTURETYPE_INT = 6, VB.TEXTURETYPE_UNSIGNED_INTEGER = 7, VB.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, VB.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, VB.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, VB.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, VB.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, VB.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, VB.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, VB.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, VB.TEXTURE_NEAREST_SAMPLINGMODE = 1, VB.TEXTURE_BILINEAR_SAMPLINGMODE = 2, VB.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, VB.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, VB.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, VB.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, VB.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, VB.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, VB.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, VB.TEXTURE_NEAREST_LINEAR = 7, VB.TEXTURE_NEAREST_NEAREST = 1, VB.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, VB.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, VB.TEXTURE_LINEAR_LINEAR = 2, VB.TEXTURE_LINEAR_NEAREST = 12, VB.TEXTURE_EXPLICIT_MODE = 0, VB.TEXTURE_SPHERICAL_MODE = 1, VB.TEXTURE_PLANAR_MODE = 2, VB.TEXTURE_CUBIC_MODE = 3, VB.TEXTURE_PROJECTION_MODE = 4, VB.TEXTURE_SKYBOX_MODE = 5, VB.TEXTURE_INVCUBIC_MODE = 6, VB.TEXTURE_EQUIRECTANGULAR_MODE = 7, VB.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, VB.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, VB.SCALEMODE_FLOOR = 1, VB.SCALEMODE_NEAREST = 2, VB.SCALEMODE_CEILING = 3
  },
  40982: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(40947);
    class DB {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, BB && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, YB.b)(BB.format))
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
      getBaseArrayLayer(BB) {
        if (!this._textures) return -1;
        const OB = this._textures[BB],
          GB = this._layerIndices?.[BB] ?? 0,
          YB = this._faceIndices?.[BB] ?? 0;
        return OB.isCube ? 6 * GB + YB : OB.is3D ? 0 : GB
      }
      get samples() {
        return this._samples
      }
      setSamples(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === BB && !GB) return BB;
        const YB = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, BB, OB) : this._engine.updateRenderTargetTextureSampleCount(this, BB);
        return this._samples = BB, YB
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(BB, OB, GB, YB, DB) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = BB, this._isCube = OB, this._size = GB, this._engine = YB, this._depthStencilTexture = null, this.label = DB
      }
      setTextures(BB) {
        Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
      }
      setTexture(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[OB] !== BB && (this._textures[OB] && GB && this._textures[OB].dispose(), this._textures[OB] = BB)
      }
      setLayerAndFaceIndices(BB, OB) {
        this._layerIndices = BB, this._faceIndices = OB
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== OB && OB >= 0 && (this._layerIndices[BB] = OB), void 0 !== GB && GB >= 0 && (this._faceIndices[BB] = GB)
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = GB, this._depthStencilTextureLabel = QB, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: OB,
          comparisonFunction: BB,
          generateStencil: GB,
          isCube: this._isCube,
          samples: YB,
          depthTextureFormat: DB,
          label: QB
        }, this), this._depthStencilTexture
      }
      _shareDepth(BB) {
        this.shareDepth(BB)
      }
      shareDepth(BB) {
        this._depthStencilTexture && (BB._depthStencilTexture && BB._depthStencilTexture.dispose(), BB._depthStencilTexture = this._depthStencilTexture, BB._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(BB) {
        this.texture && this.texture._swapAndDie(BB), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let BB = null;
        if (this._isMulti) {
          const OB = this.textures;
          if (OB && OB.length > 0) {
            let GB = !1,
              YB = OB.length,
              DB = -1;
            const QB = OB[OB.length - 1]._source;
            14 !== QB && 12 !== QB || (GB = !0, DB = OB[OB.length - 1].format, YB--);
            const oB = [],
              jB = [],
              yB = [],
              JB = [],
              MB = [],
              PB = [],
              zB = [],
              lB = {};
            for (let BB = 0; BB < YB; ++BB) {
              const GB = OB[BB];
              oB.push(GB.samplingMode), jB.push(GB.type), yB.push(GB.format);
              void 0 !== lB[GB.uniqueId] ? (JB.push(-1), zB.push(0)) : (lB[GB.uniqueId] = BB, GB.is2DArray ? (JB.push(35866), zB.push(GB.depth)) : GB.isCube ? (JB.push(34067), zB.push(0)) : GB.is3D ? (JB.push(32879), zB.push(GB.depth)) : (JB.push(3553), zB.push(0))), this._faceIndices && MB.push(this._faceIndices[BB] ?? 0), this._layerIndices && PB.push(this._layerIndices[BB] ?? 0)
            }
            const pB = {
                samplingModes: oB,
                generateMipMaps: OB[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: GB,
                depthTextureFormat: DB,
                types: jB,
                formats: yB,
                YyB: YB,
                targetTypes: JB,
                faceIndex: MB,
                layerIndex: PB,
                layerCounts: zB,
                label: this.label
              },
              qB = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            BB = this._engine.createMultipleRenderTarget(qB, pB);
            for (let ZB = 0; ZB < YB; ++ZB) {
              if (-1 !== JB[ZB]) continue;
              const GB = lB[OB[ZB].uniqueId];
              BB.setTexture(BB.textures[GB], ZB)
            }
          }
        } else {
          const OB = {};
          if (OB.generateDepthBuffer = this._generateDepthBuffer, OB.generateMipMaps = this.texture?.generateMipMaps ?? !1, OB.generateStencilBuffer = this._generateStencilBuffer, OB.samplingMode = this.texture?.samplingMode, OB.type = this.texture?.type, OB.format = this.texture?.format, OB.noColorAttachment = !this._textures, OB.label = this.label, this.isCube) BB = this._engine.createRenderTargetCubeTexture(this.width, OB);
          else {
            const GB = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            BB = this._engine.createRenderTargetTexture(GB, OB)
          }
          BB.texture && (BB.texture.isReady = !0)
        }
        return BB
      }
      _swapRenderTargetWrapper(BB) {
        if (this._textures && BB._textures)
          for (let OB = 0; OB < this._textures.length; ++OB) this._textures[OB]._swapAndDie(BB._textures[OB], !1), BB._textures[OB].isReady = !0;
        this._depthStencilTexture && BB._depthStencilTexture && (this._depthStencilTexture._swapAndDie(BB._depthStencilTexture), BB._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const BB = this._cloneRenderTargetWrapper();
        if (BB) {
          if (this._depthStencilTexture) {
            const OB = this._depthStencilTexture.samplingMode,
              GB = this._depthStencilTexture.format,
              YB = 2 === OB || 3 === OB || 11 === OB;
            BB.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, YB, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, GB, this._depthStencilTextureLabel)
          }
          this.samples > 1 && BB.setSamples(this.samples), BB._swapRenderTargetWrapper(this), BB.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let BB = 0; BB < this._textures.length; ++BB) this._textures[BB].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41434: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      static get ForceFullSceneLoadingForIncremental() {
        return YB._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(BB) {
        YB._ForceFullSceneLoadingForIncremental = BB
      }
      static get ShowLoadingScreen() {
        return YB._ShowLoadingScreen
      }
      static set ShowLoadingScreen(BB) {
        YB._ShowLoadingScreen = BB
      }
      static get loggingLevel() {
        return YB._LoggingLevel
      }
      static set loggingLevel(BB) {
        YB._LoggingLevel = BB
      }
      static get CleanBoneMatrixWeights() {
        return YB._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(BB) {
        YB._CleanBoneMatrixWeights = BB
      }
    }
    YB._ForceFullSceneLoadingForIncremental = !1, YB._ShowLoadingScreen = !0, YB._CleanBoneMatrixWeights = !1, YB._LoggingLevel = 0
  },
  41081: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(39366);
    const DB = new Map;

    function QB(BB, OB) {
      (function(BB) {
        return DB.delete(BB)
      })(BB) && YB.b.Warn(`Extension with the name '${BB}' already exists`), DB.set(BB, OB)
    }

    function oB(BB, OB) {
      "image/ktx" !== OB && "image/ktx2" !== OB || (BB = ".ktx"), DB.has(BB) || (BB.endsWith(".ies") && QB(".ies", (async () => await GB.e(618).then((() => GB(44911))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && QB(".dds", (async () => await GB.e(616).then((() => GB(44913))).then((BB => new BB._DDSTextureLoader)))), BB.endsWith(".basis") && QB(".basis", (async () => await GB.e(619).then((() => GB(44917))).then((BB => new BB._BasisTextureLoader)))), BB.endsWith(".env") && QB(".env", (async () => await Promise.all([GB.e(620), GB.e(617)]).then((() => GB(44924))).then((BB => new BB._ENVTextureLoader)))), BB.endsWith(".hdr") && QB(".hdr", (async () => await GB.e(621).then((() => GB(44986))).then((BB => new BB._HDRTextureLoader)))), (BB.endsWith(".ktx") || BB.endsWith(".ktx2")) && (QB(".ktx", (async () => await GB.e(622).then((() => GB(44993))).then((BB => new BB._KTXTextureLoader)))), QB(".ktx2", (async () => await GB.e(622).then((() => GB(44993))).then((BB => new BB._KTXTextureLoader))))), BB.endsWith(".tga") && QB(".tga", (async () => await GB.e(623).then((() => GB(45001))).then((BB => new BB._TGATextureLoader)))), BB.endsWith(".exr") && QB(".exr", (async () => await GB.e(624).then((() => GB(45008))).then((BB => new BB._ExrTextureLoader)))));
      const YB = DB.get(BB);
      return YB ? Promise.resolve(YB(OB)) : null
    }
  },
  41446: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      f: () => JB
    });
    var YB = GB(41283),
      DB = GB(41024),
      QB = GB(37823);
    class oB extends YB.b {
      get jOB() {
        return this._subMaterials
      }
      set jOB(BB) {
        this._subMaterials = BB, this._hookArray(BB)
      }
      getChildren() {
        return this.jOB
      }
      constructor(BB, OB) {
        super(BB, OB, !0), this._waitingSubMaterialsUniqueIds = [], this.JF().addMultiMaterial(this), this.jOB = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(BB) {
        var OB = this;
        const GB = BB.push;
        BB.push = function() {
          for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
          const oB = GB.apply(BB, DB);
          return OB._markAllSubMeshesAsTexturesDirty(), oB
        };
        const YB = BB.splice;
        BB.splice = (OB, GB) => {
          const DB = YB.call(BB, OB, GB ?? BB.length);
          return this._markAllSubMeshesAsTexturesDirty(), DB
        }
      }
      getSubMaterial(BB) {
        return BB < 0 || BB >= this.jOB.length ? this.JF().defaultMaterial : this.jOB[BB]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.jOB.map((BB => BB ? BB.getActiveTextures() : [])))
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (let OB = 0; OB < this.jOB.length; OB++)
          if (this.jOB[OB]?.hasTexture(BB)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(BB, OB, GB) {
        for (let YB = 0; YB < this.jOB.length; YB++) {
          const DB = this.jOB[YB];
          if (DB) {
            if (DB._storeEffectOnSubMeshes) {
              if (!DB.isReadyForSubMesh(BB, OB, GB)) return !1;
              continue
            }
            if (!DB.isReady(BB)) return !1
          }
        }
        return !0
      }
      clone(BB, OB) {
        const GB = new oB(BB, this.JF());
        for (let YB = 0; YB < this.jOB.length; YB++) {
          let DB;
          const QB = this.jOB[YB];
          DB = OB && QB ? QB.clone(BB + "-" + QB.name) : this.jOB[YB], GB.jOB.push(DB)
        }
        return GB
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, DB.e && (BB.tags = DB.e.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
        for (let OB = 0; OB < this.jOB.length; OB++) {
          const GB = this.jOB[OB];
          GB ? (BB.materialsUniqueIds.push(GB.uniqueId), BB.materials.push(GB.id)) : (BB.materialsUniqueIds.push(null), BB.materials.push(null))
        }
        return BB
      }
      dispose(BB, OB, GB) {
        const YB = this.JF();
        if (!YB) return;
        if (GB)
          for (let QB = 0; QB < this.jOB.length; QB++) {
            const GB = this.jOB[QB];
            GB && GB.dispose(BB, OB)
          }
        const DB = YB.multiMaterials.indexOf(this);
        DB >= 0 && YB.multiMaterials.splice(DB, 1), super.dispose(BB, OB)
      }
    }
    let jB = !1;

    function yB(BB, OB) {
      const GB = new oB(BB.name, OB);
      if (GB.id = BB.id, GB._loadedUniqueId = BB.uniqueId, DB.e && DB.e.AddTagsTo(GB, BB.tags), BB.materialsUniqueIds) GB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
      else
        for (const YB of BB.materials) GB.jOB.push(OB.getLastMaterialById(YB));
      return GB
    }

    function JB() {
      jB || (jB = !0, oB.ParseMultiMaterial = yB, (0, QB.f)("BABYLON.MultiMaterial", oB))
    }
  },
  41226: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB, DB, QB = GB(37778);
    ! function(BB) {
      BB[BB.LOCAL = 0] = "LOCAL", BB[BB.WORLD = 1] = "WORLD", BB[BB.BONE = 2] = "BONE"
    }(YB || (YB = {}));
    class oB {}
    oB.X = new QB.r(1, 0, 0), oB.Y = new QB.r(0, 1, 0), oB.Z = new QB.r(0, 0, 1),
      function(BB) {
        BB[BB.X = 0] = "X", BB[BB.Y = 1] = "Y", BB[BB.Z = 2] = "Z"
      }(DB || (DB = {}))
  },
  40985: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      f: () => JB
    });
    var YB = GB(37778);
    const DB = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      QB = [() => 1, BB => BB.y, BB => BB.z, BB => BB.x, BB => BB.x * BB.y, BB => BB.y * BB.z, BB => 3 * BB.z * BB.z - 1, BB => BB.x * BB.z, BB => BB.x * BB.x - BB.y * BB.y],
      oB = (BB, OB) => DB[BB] * QB[BB](OB),
      jB = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class yB {
      constructor() {
        this.preScaled = !1, this.l00 = YB.r.Zero(), this.l1_1 = YB.r.Zero(), this.l10 = YB.r.Zero(), this.l11 = YB.r.Zero(), this.l2_2 = YB.r.Zero(), this.l2_1 = YB.r.Zero(), this.l20 = YB.r.Zero(), this.l21 = YB.r.Zero(), this.l22 = YB.r.Zero()
      }
      addLight(BB, OB, GB) {
        YB.k.Xp[0].set(OB.r, OB.g, OB.b);
        const DB = YB.k.Xp[0],
          QB = YB.k.Xp[1];
        DB.scaleToRef(GB, QB), QB.scaleToRef(oB(0, BB), YB.k.Xp[2]), this.l00.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(1, BB), YB.k.Xp[2]), this.l1_1.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(2, BB), YB.k.Xp[2]), this.l10.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(3, BB), YB.k.Xp[2]), this.l11.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(4, BB), YB.k.Xp[2]), this.l2_2.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(5, BB), YB.k.Xp[2]), this.l2_1.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(6, BB), YB.k.Xp[2]), this.l20.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(7, BB), YB.k.Xp[2]), this.l21.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(8, BB), YB.k.Xp[2]), this.l22.addInPlace(YB.k.Xp[2])
      }
      scaleInPlace(BB) {
        this.l00.scaleInPlace(BB), this.l1_1.scaleInPlace(BB), this.l10.scaleInPlace(BB), this.l11.scaleInPlace(BB), this.l2_2.scaleInPlace(BB), this.l2_1.scaleInPlace(BB), this.l20.scaleInPlace(BB), this.l21.scaleInPlace(BB), this.l22.scaleInPlace(BB)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(jB[0]), this.l1_1.scaleInPlace(jB[1]), this.l10.scaleInPlace(jB[2]), this.l11.scaleInPlace(jB[3]), this.l2_2.scaleInPlace(jB[4]), this.l2_1.scaleInPlace(jB[5]), this.l20.scaleInPlace(jB[6]), this.l21.scaleInPlace(jB[7]), this.l22.scaleInPlace(jB[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(DB[0]), this.l1_1.scaleInPlace(DB[1]), this.l10.scaleInPlace(DB[2]), this.l11.scaleInPlace(DB[3]), this.l2_2.scaleInPlace(DB[4]), this.l2_1.scaleInPlace(DB[5]), this.l20.scaleInPlace(DB[6]), this.l21.scaleInPlace(DB[7]), this.l22.scaleInPlace(DB[8])
      }
      updateFromArray(BB) {
        return YB.r.FromArrayToRef(BB[0], 0, this.l00), YB.r.FromArrayToRef(BB[1], 0, this.l1_1), YB.r.FromArrayToRef(BB[2], 0, this.l10), YB.r.FromArrayToRef(BB[3], 0, this.l11), YB.r.FromArrayToRef(BB[4], 0, this.l2_2), YB.r.FromArrayToRef(BB[5], 0, this.l2_1), YB.r.FromArrayToRef(BB[6], 0, this.l20), YB.r.FromArrayToRef(BB[7], 0, this.l21), YB.r.FromArrayToRef(BB[8], 0, this.l22), this
      }
      updateFromFloatsArray(BB) {
        return YB.r.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), YB.r.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), YB.r.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), YB.r.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), YB.r.FromFloatsToRef(BB[12], BB[13], BB[14], this.l2_2), YB.r.FromFloatsToRef(BB[15], BB[16], BB[17], this.l2_1), YB.r.FromFloatsToRef(BB[18], BB[19], BB[20], this.l20), YB.r.FromFloatsToRef(BB[21], BB[22], BB[23], this.l21), YB.r.FromFloatsToRef(BB[24], BB[25], BB[26], this.l22), this
      }
      static FromArray(BB) {
        return (new yB).updateFromArray(BB)
      }
      static FromPolynomial(BB) {
        const OB = new yB;
        return OB.l00 = BB.xx.scale(.376127).add(BB.yy.scale(.376127)).add(BB.zz.scale(.376126)), OB.l1_1 = BB.y.scale(.977204), OB.l10 = BB.z.scale(.977204), OB.l11 = BB.x.scale(.977204), OB.l2_2 = BB.xy.scale(1.16538), OB.l2_1 = BB.yz.scale(1.16538), OB.l20 = BB.zz.scale(1.34567).subtract(BB.xx.scale(.672834)).subtract(BB.yy.scale(.672834)), OB.l21 = BB.zx.scale(1.16538), OB.l22 = BB.xx.scale(1.16538).subtract(BB.yy.scale(1.16538)), OB.l1_1.scaleInPlace(-1), OB.l11.scaleInPlace(-1), OB.l2_1.scaleInPlace(-1), OB.l21.scaleInPlace(-1), OB.scaleInPlace(Math.PI), OB
      }
    }
    class JB {
      constructor() {
        this.x = YB.r.Zero(), this.y = YB.r.Zero(), this.z = YB.r.Zero(), this.xx = YB.r.Zero(), this.yy = YB.r.Zero(), this.zz = YB.r.Zero(), this.xy = YB.r.Zero(), this.yz = YB.r.Zero(), this.zx = YB.r.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = yB.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(BB) {
        YB.k.Xp[0].zOB(BB.r, BB.g, BB.b);
        const OB = YB.k.Xp[0];
        this.xx.addInPlace(OB), this.yy.addInPlace(OB), this.zz.addInPlace(OB)
      }
      scaleInPlace(BB) {
        this.x.scaleInPlace(BB), this.y.scaleInPlace(BB), this.z.scaleInPlace(BB), this.xx.scaleInPlace(BB), this.yy.scaleInPlace(BB), this.zz.scaleInPlace(BB), this.yz.scaleInPlace(BB), this.zx.scaleInPlace(BB), this.xy.scaleInPlace(BB)
      }
      updateFromHarmonics(BB) {
        return this._harmonics = BB, this.x.IU(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.IU(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.IU(BB.l10), this.z.scaleInPlace(1.02333), this.xx.IU(BB.l00), YB.k.Xp[0].IU(BB.l20).scaleInPlace(.247708), YB.k.Xp[1].IU(BB.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).CDB(YB.k.Xp[0]).addInPlace(YB.k.Xp[1]), this.yy.IU(BB.l00), this.yy.scaleInPlace(.886277).CDB(YB.k.Xp[0]).CDB(YB.k.Xp[1]), this.zz.IU(BB.l00), YB.k.Xp[0].IU(BB.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(YB.k.Xp[0]), this.yz.IU(BB.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.IU(BB.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.IU(BB.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(BB) {
        return (new JB).updateFromHarmonics(BB)
      }
      static FromArray(BB) {
        const OB = new JB;
        return YB.r.FromArrayToRef(BB[0], 0, OB.x), YB.r.FromArrayToRef(BB[1], 0, OB.y), YB.r.FromArrayToRef(BB[2], 0, OB.z), YB.r.FromArrayToRef(BB[3], 0, OB.xx), YB.r.FromArrayToRef(BB[4], 0, OB.yy), YB.r.FromArrayToRef(BB[5], 0, OB.zz), YB.r.FromArrayToRef(BB[6], 0, OB.yz), YB.r.FromArrayToRef(BB[7], 0, OB.zx), YB.r.FromArrayToRef(BB[8], 0, OB.xy), OB
      }
    }
  },
  41442: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => IB,
      g: () => iB
    });
    var YB = GB(40998),
      DB = GB(37802),
      QB = GB(37778),
      oB = GB(41150),
      jB = GB(41423),
      yB = GB(41444),
      JB = GB(41145),
      MB = GB(41300),
      PB = GB(41136);
    class zB {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new QB.r(0, 0, 0), this._diffPositionForCollisions = new QB.r(0, 0, 0), this._collisionResponse = !0
      }
    }
    var lB, pB, qB, ZB = GB(40890),
      NB = GB(41071),
      RB = GB(41315),
      WB = GB(37894),
      AB = GB(37782),
      VB = GB(41226),
      SB = GB(39366),
      nB = GB(41004),
      UB = GB(40905),
      fB = GB(37823);

    function kB(BB, OB) {
      return BB - Math.floor(BB / OB) * OB
    }

    function dB(BB, OB, GB) {
      BB instanceof Float32Array ? QB.d.FromArrayToRef(BB, OB, GB) : GB.zOB((0, NB.e)(BB[OB]), (0, NB.e)(BB[OB + 1]), (0, NB.e)(BB[OB + 2]), (0, NB.e)(BB[OB + 3]), (0, NB.e)(BB[OB + 4]), (0, NB.e)(BB[OB + 5]), (0, NB.e)(BB[OB + 6]), (0, NB.e)(BB[OB + 7]), (0, NB.e)(BB[OB + 8]), (0, NB.e)(BB[OB + 9]), (0, NB.e)(BB[OB + 10]), (0, NB.e)(BB[OB + 11]), (0, NB.e)(BB[OB + 12]), (0, NB.e)(BB[OB + 13]), (0, NB.e)(BB[OB + 14]), (0, NB.e)(BB[OB + 15]))
    }

    function KB(BB, OB, GB, YB, DB, jB, yB, JB, MB) {
      const PB = GB.texture,
        zB = PB?.getInternalTexture(),
        lB = zB?._bufferView;
      if (!(lB instanceof Float32Array) && !(lB instanceof Uint16Array)) return SB.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const pB = PB.getSize(),
        qB = function(BB, OB) {
          const GB = BB.y - BB.x + 1,
            YB = OB * BB.w / GB,
            DB = YB < 1 ? 0 : 1,
            QB = GB - DB;
          let oB = kB(YB - Math.floor(YB), 1) * QB;
          return oB = kB(oB + BB.z, QB), Math.floor(oB) + BB.x + DB
        }(YB, GB.time);
      if (!isFinite(qB) || qB < 0 || qB >= pB.height) return SB.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const ZB = QB.k.Xp[0],
        NB = QB.k.Matrix[0],
        RB = QB.k.Matrix[1],
        WB = qB * pB.width * 4,
        AB = OB === oB.h.NormalKind ? QB.r.TransformNormalFromFloatsToRef : QB.r.TransformCoordinatesFromFloatsToRef;
      for (let QB = 0, oB = 0; QB < BB.length; QB += 3, oB += 4) {
        let OB, GB;
        for (NB.reset(), OB = 0; OB < 4 && OB < MB; OB++) GB = jB[oB + OB], GB > 0 && (dB(lB, WB + 16 * Math.floor(DB[oB + OB]), RB), RB.scaleAndAddToRef(GB, NB));
        if (yB && JB)
          for (OB = 0; OB < 4 && OB + 4 < MB; OB++) GB = JB[oB + OB], GB > 0 && (dB(lB, WB + 16 * Math.floor(yB[oB + OB]), RB), RB.scaleAndAddToRef(GB, NB));
        AB(BB[QB], BB[QB + 1], BB[QB + 2], NB, ZB), ZB.toArray(BB, QB)
      }
      return !0
    }
    class uB {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = QB.r.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class mB {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new uB, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new zB, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let IB = (() => {
        var BB;
        let OB, zB = yB.h,
          lB = [];
        return BB = class extends zB {
          static get BILLBOARDMODE_NONE() {
            return yB.h.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return yB.h.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return yB.h.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return yB.h.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return yB.h.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return yB.h.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(BB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = BB
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(BB) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = BB
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(BB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = BB
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(BB) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = BB
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(BB) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = BB
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(BB) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== BB && (this._internalAbstractMeshDataInfo._morphTargetManager = BB, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(BB) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== BB && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = BB, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(BB) {
            return !!super._updateNonUniformScalingState(BB) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(BB) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = BB
          }
          set Fz(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(BB)
          }
          set onCollisionPositionChange(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(BB)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(BB) {
            if (this._internalAbstractMeshDataInfo._visibility === BB) return;
            const OB = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = BB, (1 === OB && 1 !== BB || 1 !== OB && 1 === BB) && this._markSubMeshesAsDirty((BB => {
              BB.markAsMiscDirty(), BB.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(BB) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = BB
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(BB) {
            this._internalAbstractMeshDataInfo._renderingGroupId = BB
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(BB) {
            if (!Number.isInteger(BB) || BB < 0 || BB > 255 || 0 !== BB && 0 === (63 & BB)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = BB
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(BB) {
            this._setMaterial(BB)
          }
          _setMaterial(BB) {
            this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = BB, BB && BB.meshMap && (BB.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.iW && (this.resetDrawCache(void 0, null == BB), this._unBindEffect()))
          }
          getMaterialForRenderPass(BB) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[BB]
          }
          setMaterialForRenderPass(BB, OB) {
            this.resetDrawCache(BB), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const GB = this._internalAbstractMeshDataInfo._materialForRenderPass[BB];
            GB?.meshMap?.[this.uniqueId] && (GB.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[BB] = OB, OB && OB.meshMap && (OB.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(BB) {
            this._internalAbstractMeshDataInfo._receiveShadows !== BB && (this._internalAbstractMeshDataInfo._receiveShadows = BB, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(BB) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== BB && (this._internalAbstractMeshDataInfo._hasVertexAlpha = BB, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(BB) {
            this._internalAbstractMeshDataInfo._useVertexColors !== BB && (this._internalAbstractMeshDataInfo._useVertexColors = BB, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(BB) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(BB) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== BB && (this._internalAbstractMeshDataInfo._numBoneInfluencers = BB, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(BB) {
            this._internalAbstractMeshDataInfo._applyFog !== BB && (this._internalAbstractMeshDataInfo._applyFog = BB, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(BB) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = BB
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(BB) {
            BB !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = BB, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(BB) ? -1 : BB
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = BB
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(BB) ? -1 : BB
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = BB
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(BB) {
            const OB = this._internalAbstractMeshDataInfo._skeleton;
            OB && OB.needInitialSkinMatrix && OB._unregisterMeshWithPoseMatrix(this), BB && BB.needInitialSkinMatrix && BB._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = BB, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(OB) {
            var GB;
            let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(OB, YB, !1), GB = this, this._internalAbstractMeshDataInfo = new mB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new DB.b, this.onCollisionPositionChangeObservable = new DB.b, this.onMaterialChangedObservable = new DB.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.bq = BB.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = WB.c.Red(), this.outlineWidth = .02, this.overlayColor = WB.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.rp = !1, this.Ep = !1, this.actionManager = null, this.ellipsoid = new QB.r(.5, 1, .5), this.ellipsoidOffset = new QB.r(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new WB.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                mF: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new DB.b, this._onCollisionPositionChange = function(BB, OB) {
                let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                OB.subtractToRef(GB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, GB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), GB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > UB.d.CollisionsEpsilon && GB.position.addInPlace(GB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), YB && GB.onCollideObservable.notifyObservers(YB), GB.onCollisionPositionChangeObservable.notifyObservers(GB.position)
              }, YB = this.JF(), this.layerMask = YB.defaultRenderableLayerMask, YB.UDB(this), this._resyncLightSources(), this._uniformBuffer = new PB.d(this.JF().Lp(), void 0, void 0, OB, !this.JF().Lp().isWebGPU), this._buildUniformLayout(), YB.performancePriority) {
              case 2:
                this.Ep = !0;
              case 1:
                this.rp = !0, this.bq = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(BB) {
            const OB = this._uniformBuffer;
            OB.TBB("world", BB), OB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), OB.update()
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
          toString(BB) {
            let OB = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            OB += ", # of submeshes: " + (this.iW ? this.iW.length : 0);
            const GB = this._internalAbstractMeshDataInfo._skeleton;
            return GB && (OB += ", skeleton: " + GB.name), BB && (OB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], OB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.mF ? "YES" : "NO")), OB
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== yB.h.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(BB) {
            let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (OB || this.actionManager.isRecursive)) {
              if (!BB) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(BB)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(BB, !1) : null
          }
          _releaseRenderPassId(BB) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.iW) {
              for (const BB of this.iW) BB._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const BB of this.JF().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(BB) {
            const OB = BB.isEnabled() && BB.canAffectMesh(this),
              GB = this._lightSources.indexOf(BB);
            let YB = !1;
            if (-1 === GB) {
              if (!OB) return;
              this._lightSources.push(BB)
            } else {
              if (OB) return;
              YB = !0, this._lightSources.splice(GB, 1)
            }
            this._markSubMeshesAsLightDirty(YB)
          }
          _unBindEffect() {
            for (const BB of this.iW) BB.setEffect(null)
          }
          _removeLightSource(BB, OB) {
            const GB = this._lightSources.indexOf(BB); - 1 !== GB && (this._lightSources.splice(GB, 1), this._markSubMeshesAsLightDirty(OB))
          }
          _markSubMeshesAsDirty(BB) {
            if (this.iW)
              for (const OB of this.iW)
                for (let GB = 0; GB < OB._drawWrappers.length; ++GB) {
                  const YB = OB._drawWrappers[GB];
                  YB && YB.defines && YB.defines.markAllAsDirty && BB(YB.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((OB => OB.markAsLightDirty(BB)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsMiscDirty()))
          }
          DYB(BB) {
            return this._currentRenderId = Number.MAX_VALUE, super.DYB(BB), this._isDirty = !0, this
          }
          resetDrawCache(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.iW)
              for (const GB of this.iW) GB.resetDrawCache(BB, OB)
          }
          get isBlocked() {
            return !1
          }
          getLOD(BB) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          KDB() {
            return null
          }
          getVerticesData(BB) {
            return null
          }
          setVerticesData(BB, OB, GB, YB) {
            return this
          }
          updateVerticesData(BB, OB, GB, YB) {
            return this
          }
          setIndices(BB, OB) {
            return this
          }
          isVerticesDataPresent(BB) {
            return !1
          }
          Gw() {
            return this._masterMesh ? this._masterMesh.Gw() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.Gw()
          }
          setBoundingInfo(BB) {
            return this._boundingInfo = BB, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(BB, OB, GB) {
            return this._boundingInfo = new MB.e(BB, OB, GB), this._boundingInfo
          }
          normalizeToUnitCube() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(BB, OB, GB)
          }
          get useBones() {
            return this.skeleton && this.JF().skeletonsEnabled && this.isVerticesDataPresent(oB.h.MatricesIndicesKind) && this.isVerticesDataPresent(oB.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(BB) {}
          _activate(BB, OB) {
            return this._renderId = BB, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === yB.h.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get SF() {
            return !1
          }
          get WQB() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(BB, OB, GB) {
            return this.position.addInPlace(this.calcMovePOV(BB, OB, GB)), this
          }
          calcMovePOV(BB, OB, GB) {
            const YB = new QB.d;
            (this.rotationQuaternion ? this.rotationQuaternion : QB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(YB);
            const DB = QB.r.Zero(),
              oB = this.definedFacingForward ? -1 : 1;
            return QB.r.TransformCoordinatesFromFloatsToRef(BB * oB, OB, GB * oB, YB, DB), DB
          }
          rotatePOV(BB, OB, GB) {
            return this.rotation.addInPlace(this.calcRotatePOV(BB, OB, GB)), this
          }
          calcRotatePOV(BB, OB, GB) {
            const YB = this.definedFacingForward ? 1 : -1;
            return new QB.r(BB * YB, OB, GB * YB)
          }
          _refreshBoundingInfo(BB, OB) {
            if (BB) {
              const GB = (0, RB.g)(BB, 0, this.getTotalVertices(), OB);
              this._boundingInfo ? this._boundingInfo.reConstruct(GB.minimum, GB.maximum) : this._boundingInfo = new MB.e(GB.minimum, GB.maximum)
            }
            if (this.iW)
              for (let GB = 0; GB < this.iW.length; GB++) this.iW[GB].refreshBoundingInfo(BB);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(BB) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new MB.e(BB.minimum, BB.maximum), this.iW)
              for (let OB = 0; OB < this.iW.length; OB++) this.iW[OB].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(BB, OB, GB, YB, DB, jB, yB) {
            ! function(BB, OB, GB, YB, DB, jB, yB) {
              const JB = QB.k.Xp[0],
                MB = QB.k.Matrix[0],
                PB = QB.k.Matrix[1],
                zB = OB === oB.h.NormalKind ? QB.r.TransformNormalFromFloatsToRef : QB.r.TransformCoordinatesFromFloatsToRef;
              for (let oB = 0, lB = 0; oB < BB.length; oB += 3, lB += 4) {
                let OB, pB;
                for (MB.reset(), OB = 0; OB < 4; OB++) pB = DB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * YB[lB + OB]), pB, PB), MB.addToSelf(PB));
                if (jB && yB)
                  for (OB = 0; OB < 4; OB++) pB = yB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * jB[lB + OB]), pB, PB), MB.addToSelf(PB));
                zB(BB[oB], BB[oB + 1], BB[oB + 2], MB, JB), JB.toArray(BB, oB)
              }
            }(BB, OB, GB, YB, DB, jB, yB)
          }
          _getData(OB, GB) {
            let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oB.h.PositionKind;
            const DB = OB.cache,
              jB = BB => {
                if (DB) {
                  const OB = DB._vertexData || (DB._vertexData = {});
                  return OB[BB] || this.copyVerticesData(BB, OB), OB[BB]
                }
                return this.getVerticesData(BB)
              };
            if (GB || (GB = jB(YB)), !GB) return null;
            DB ? (DB._outputData ? DB._outputData.set(GB) : DB._outputData = new Float32Array(GB), GB = DB._outputData) : (OB.applyMorph && this.morphTargetManager || OB.applySkeleton && this.skeleton || OB.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (GB = GB.slice()), OB.applyMorph && this.morphTargetManager && function(BB, OB, GB) {
              let YB;
              switch (OB) {
                case oB.h.PositionKind:
                  YB = BB => BB.getPositions();
                  break;
                case oB.h.NormalKind:
                  YB = BB => BB.getNormals();
                  break;
                case oB.h.TangentKind:
                  YB = BB => BB.getTangents();
                  break;
                case oB.h.UVKind:
                  YB = BB => BB.getUVs();
                  break;
                case oB.h.UV2Kind:
                  YB = BB => BB.getUV2s();
                  break;
                case oB.h.ColorKind:
                  YB = BB => BB.getColors();
                  break;
                default:
                  return
              }
              for (let DB = 0; DB < BB.length; DB++) {
                let OB = BB[DB];
                for (let QB = 0; QB < GB.numTargets; QB++) {
                  const oB = GB.getTarget(QB),
                    jB = oB.influence;
                  if (0 !== jB) {
                    const GB = YB(oB);
                    GB && (OB += (GB[DB] - BB[DB]) * jB)
                  }
                }
                BB[DB] = OB
              }
            }(GB, YB, this.morphTargetManager);
            const yB = this.bakedVertexAnimationManager;
            let JB = !1;
            if (OB.applyBakedVertexAnimation && yB?.isEnabled) {
              const BB = jB(oB.h.MatricesIndicesKind),
                DB = jB(oB.h.MatricesWeightsKind);
              if (DB && BB) {
                const QB = this.numBoneInfluencers > 4,
                  MB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
                  PB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null;
                JB = KB(GB, YB, yB, OB.bakedVertexAnimationSettings ?? yB.animationParameters, BB, DB, MB, PB, this.numBoneInfluencers)
              }
            }
            if (!JB && OB.applySkeleton && this.skeleton) {
              const OB = jB(oB.h.MatricesIndicesKind),
                DB = jB(oB.h.MatricesWeightsKind);
              if (DB && OB) {
                const QB = this.numBoneInfluencers > 4,
                  yB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
                  JB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null,
                  MB = this.skeleton.getTransformMatrices(this);
                BB._ApplySkeleton(GB, YB, MB, OB, DB, yB, JB)
              }
            }
            if (!1 !== OB.updatePositionsArray && YB === oB.h.PositionKind) {
              const BB = this._internalAbstractMeshDataInfo._positions || [],
                OB = BB.length;
              if (BB.length = GB.length / 3, OB < BB.length)
                for (let GB = OB; GB < BB.length; GB++) BB[GB] = new QB.r;
              for (let YB = 0, DB = 0; YB < BB.length; YB++, DB += 3) BB[YB].zOB(GB[DB], GB[DB + 1], GB[DB + 2]);
              this._internalAbstractMeshDataInfo._positions = BB
            }
            return GB
          }
          getNormalsData() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: BB,
              applyMorph: OB,
              updatePositionsArray: !1
            }, null, oB.h.NormalKind)
          }
          f4() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: BB,
              applyMorph: OB,
              updatePositionsArray: !1
            }, GB, oB.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new MB.e(QB.r.Zero(), QB.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(BB) {
            if (!this.iW) return this;
            const OB = this.iW.length;
            for (let GB = 0; GB < OB; GB++) {
              const YB = this.iW[GB];
              (OB > 1 || !YB.IsGlobal) && YB.updateBoundingInfo(BB)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Ep || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(BB) {
            return this.Gw().isInFrustum(BB, this.cullingStrategy)
          }
          isCompletelyInFrustum(BB) {
            return this.Gw().isCompletelyInFrustum(BB)
          }
          lQB(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = arguments.length > 2 ? arguments[2] : void 0;
            const YB = this.Gw(),
              DB = BB.Gw();
            if (YB.intersects(DB, OB)) return !0;
            if (GB)
              for (const QB of this.getChildMeshes())
                if (QB.lQB(BB, OB, !0)) return !0;
            return !1
          }
          intersectsPoint(BB) {
            return this.Gw().intersectsPoint(BB)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(BB) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = BB
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(BB) {
            let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const GB = this.JF().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = GB.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, GB.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, BB, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, OB), this
          }
          _collideForSubMesh(BB, OB, GB) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!BB._lastColliderWorldVertices || !BB._lastColliderTransformMatrix.equals(OB)) {
              BB._lastColliderTransformMatrix = OB.clone(), BB._lastColliderWorldVertices = [], BB._trianglePlanes = [];
              const GB = BB.verticesStart,
                YB = BB.verticesStart + BB.verticesCount;
              for (let DB = GB; DB < YB; DB++) BB._lastColliderWorldVertices.push(QB.r.TransformCoordinates(this._positions[DB], OB))
            }
            return GB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.KDB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.cp(), this, this._shouldConvertRHS(), 7 === BB.cp()?.fillMode), this
          }
          _processCollisionsForSubMeshes(BB, OB) {
            const GB = this._scene.getCollidingSubMeshCandidates(this, BB),
              YB = GB.length;
            for (let DB = 0; DB < YB; DB++) {
              const QB = GB.data[DB];
              YB > 1 && !QB._checkCollision(BB) || this._collideForSubMesh(QB, OB, BB)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(BB) {
            if (!this.Gw()._checkCollision(BB)) return this;
            const OB = QB.k.Matrix[0],
              GB = QB.k.Matrix[1];
            return QB.d.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, OB), this.worldMatrixFromCache.multiplyToRef(OB, GB), this._processCollisionsForSubMeshes(BB, GB), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(BB, OB, GB) {
            let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              DB = arguments.length > 4 ? arguments[4] : void 0,
              oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const jB = new JB.e,
              yB = this.getClassName(),
              MB = "InstancedLinesMesh" === yB || "LinesMesh" === yB || "GreasedLineMesh" === yB ? this.intersectionThreshold : 0,
              PB = this.Gw();
            if (!this.iW) return jB;
            if (!oB && (!BB.intersectsSphere(PB.xDB, MB) || !BB.intersectsBox(PB.boundingBox, MB))) return jB;
            if (YB) return jB.hit = !oB, jB.pickedMesh = oB ? null : this, jB.distance = oB ? 0 : QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = 0, jB;
            if (!this._generatePointsArray()) return jB;
            let zB = null;
            const lB = this._scene.getIntersectingSubMeshCandidates(this, BB),
              pB = lB.length;
            let qB = !1;
            for (let QB = 0; QB < pB; QB++) {
              const BB = lB.data[QB].cp();
              if (BB && (7 == BB.fillMode || 0 == BB.fillMode || 1 == BB.fillMode || 2 == BB.fillMode || 4 == BB.fillMode)) {
                qB = !0;
                break
              }
            }
            if (!qB) return jB.hit = !0, jB.pickedMesh = this, jB.distance = QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = -1, jB;
            for (let QB = 0; QB < pB; QB++) {
              const YB = lB.data[QB];
              if (pB > 1 && !oB && !YB.canIntersects(BB)) continue;
              const DB = YB.intersects(BB, this._positions, this.KDB(), OB, GB);
              if (DB && (OB || !zB || DB.distance < zB.distance) && (zB = DB, zB.subMeshId = YB._id, zB._internalSubMeshId = QB, OB)) break
            }
            if (zB) {
              const OB = DB ?? this.getWorldMatrix(),
                GB = QB.k.Xp[0],
                YB = QB.k.Xp[1];
              QB.r.TransformCoordinatesToRef(BB.origin, OB, GB), BB.direction.scaleToRef(zB.distance, YB);
              const oB = QB.r.TransformNormal(YB, OB).addInPlace(GB);
              return jB.hit = !0, jB.distance = QB.r.Distance(GB, oB), jB.pickedPoint = oB, jB.pickedMesh = this, jB.bu = zB.bu || 0, jB.bv = zB.bv || 0, jB.subMeshFaceId = zB.faceId, jB.faceId = zB.faceId + lB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), jB.subMeshId = zB.subMeshId, jB
            }
            return jB
          }
          clone(BB, OB, GB) {
            return null
          }
          releaseSubMeshes() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.iW)
              for (; this.iW.length;) this.iW[0].dispose(BB);
            else this.iW = [];
            return this
          }
          dispose(BB) {
            let OB, GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const YB = this.JF();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), YB.freeActiveMeshes(), YB.freeRenderingGroups(), YB.renderingManager.maintainStateBetweenFrames && YB.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((BB => BB !== this && BB.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), OB = 0; OB < this._intersectionsInProgress.length; OB++) {
              const BB = this._intersectionsInProgress[OB],
                GB = BB._intersectionsInProgress.indexOf(this);
              BB._intersectionsInProgress.splice(GB, 1)
            }
            this._intersectionsInProgress.length = 0;
            const DB = YB.lights;
            for (const oB of DB) {
              let BB = oB.includedOnlyMeshes.indexOf(this); - 1 !== BB && oB.includedOnlyMeshes.splice(BB, 1), BB = oB.excludedMeshes.indexOf(this), -1 !== BB && oB.excludedMeshes.splice(BB, 1);
              const OB = oB.getShadowGenerators();
              if (OB) {
                const GB = OB.values();
                for (let OB = GB.next(); !0 !== OB.done; OB = GB.next()) {
                  const GB = OB.value.getShadowMap();
                  GB && GB.renderList && (BB = GB.renderList.indexOf(this), -1 !== BB && GB.renderList.splice(BB, 1))
                }
              }
            }
            this.releaseSubMeshes(YB._isDisposing);
            const QB = YB.Lp();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, QB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), QB.wipeCaches(), YB.sF(this), this._parentContainer) {
              const BB = this._parentContainer.meshes.indexOf(this);
              BB > -1 && this._parentContainer.meshes.splice(BB, 1), this._parentContainer = null
            }
            if (GB && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !BB)
              for (OB = 0; OB < YB.rW.length; OB++) YB.rW[OB].emitter === this && (YB.rW[OB].dispose(), OB--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(BB, GB)
          }
          _initFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.KDB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSubdivisions : 10, BB.partitioningBBoxRatio = BB.partitioningBBoxRatio ? BB.partitioningBBoxRatio : 1.01;
            for (let OB = 0; OB < BB.facetNb; OB++) BB.facetNormals[OB] = QB.r.Zero(), BB.facetPositions[OB] = QB.r.Zero();
            return BB.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetDataEnabled || this._initFacetData();
            const OB = this.getVerticesData(oB.h.PositionKind),
              GB = this.KDB(),
              YB = this.getVerticesData(oB.h.NormalKind)?.slice(),
              DB = this.Gw();
            if (BB.facetDepthSort && !BB.facetDepthSortEnabled) {
              if (BB.facetDepthSortEnabled = !0, GB instanceof Uint16Array) BB.depthSortedIndices = new Uint16Array(GB);
              else if (GB instanceof Uint32Array) BB.depthSortedIndices = new Uint32Array(GB);
              else {
                let OB = !1;
                for (let BB = 0; BB < GB.length; BB++)
                  if (GB[BB] > 65535) {
                    OB = !0;
                    break
                  } BB.depthSortedIndices = OB ? new Uint32Array(GB) : new Uint16Array(GB)
              }
              if (BB.facetDepthSortFunction = function(BB, OB) {
                  return OB.sqDistance - BB.sqDistance
                }, !BB.facetDepthSortFrom) {
                const OB = this.JF().activeCamera;
                BB.facetDepthSortFrom = OB ? OB.position : QB.r.Zero()
              }
              BB.depthSortedFacets = [];
              for (let OB = 0; OB < BB.facetNb; OB++) {
                const GB = {
                  ind: 3 * OB,
                  sqDistance: 0
                };
                BB.depthSortedFacets.push(GB)
              }
              BB.invertedMatrix = QB.d.Identity(), BB.facetDepthSortOrigin = QB.r.Zero()
            }
            BB.bbSize.x = DB.maximum.x - DB.minimum.x > AB.b ? DB.maximum.x - DB.minimum.x : AB.b, BB.bbSize.y = DB.maximum.y - DB.minimum.y > AB.b ? DB.maximum.y - DB.minimum.y : AB.b, BB.bbSize.z = DB.maximum.z - DB.minimum.z > AB.b ? DB.maximum.z - DB.minimum.z : AB.b;
            let yB = BB.bbSize.x > BB.bbSize.y ? BB.bbSize.x : BB.bbSize.y;
            if (yB = yB > BB.bbSize.z ? yB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / yB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / yB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / yB), BB.subDiv.X = BB.subDiv.X < 1 ? 1 : BB.subDiv.X, BB.subDiv.Y = BB.subDiv.Y < 1 ? 1 : BB.subDiv.Y, BB.subDiv.Z = BB.subDiv.Z < 1 ? 1 : BB.subDiv.Z, BB.facetParameters.facetNormals = this.getFacetLocalNormals(), BB.facetParameters.facetPositions = this.getFacetLocalPositions(), BB.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), BB.facetParameters.bInfo = DB, BB.facetParameters.bbSize = BB.bbSize, BB.facetParameters.subDiv = BB.subDiv, BB.facetParameters.ratio = this.partitioningBBoxRatio, BB.facetParameters.depthSort = BB.facetDepthSort, BB.facetDepthSort && BB.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(BB.invertedMatrix), QB.r.TransformCoordinatesToRef(BB.facetDepthSortFrom, BB.invertedMatrix, BB.facetDepthSortOrigin), BB.facetParameters.distanceTo = BB.facetDepthSortOrigin), BB.facetParameters.depthSortedFacets = BB.depthSortedFacets, YB && jB.e.ComputeNormals(OB, GB, YB, BB.facetParameters), BB.facetDepthSort && BB.facetDepthSortEnabled) {
              BB.depthSortedFacets.sort(BB.facetDepthSortFunction);
              const OB = BB.depthSortedIndices.length / 3 | 0;
              for (let YB = 0; YB < OB; YB++) {
                const OB = BB.depthSortedFacets[YB].ind;
                BB.depthSortedIndices[3 * YB] = GB[OB], BB.depthSortedIndices[3 * YB + 1] = GB[OB + 1], BB.depthSortedIndices[3 * YB + 2] = GB[OB + 2]
              }
              this.updateIndices(BB.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetNormals || this.updateFacetData(), BB.facetNormals
          }
          getFacetLocalPositions() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetPositions || this.updateFacetData(), BB.facetPositions
          }
          getFacetLocalPartitioning() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetPartitioning || this.updateFacetData(), BB.facetPartitioning
          }
          getFacetPosition(BB) {
            const OB = QB.r.Zero();
            return this.getFacetPositionToRef(BB, OB), OB
          }
          getFacetPositionToRef(BB, OB) {
            const GB = this.getFacetLocalPositions()[BB],
              YB = this.getWorldMatrix();
            return QB.r.TransformCoordinatesToRef(GB, YB, OB), this
          }
          getFacetNormal(BB) {
            const OB = QB.r.Zero();
            return this.getFacetNormalToRef(BB, OB), OB
          }
          getFacetNormalToRef(BB, OB) {
            const GB = this.getFacetLocalNormals()[BB];
            return QB.r.TransformNormalToRef(GB, this.getWorldMatrix(), OB), this
          }
          getFacetsAtLocalCoordinates(BB, OB, GB) {
            const YB = this.Gw(),
              DB = this._internalAbstractMeshDataInfo._facetData,
              QB = Math.floor((BB - YB.minimum.x * DB.partitioningBBoxRatio) * DB.subDiv.X * DB.partitioningBBoxRatio / DB.bbSize.x),
              oB = Math.floor((OB - YB.minimum.y * DB.partitioningBBoxRatio) * DB.subDiv.Y * DB.partitioningBBoxRatio / DB.bbSize.y),
              jB = Math.floor((GB - YB.minimum.z * DB.partitioningBBoxRatio) * DB.subDiv.Z * DB.partitioningBBoxRatio / DB.bbSize.z);
            return QB < 0 || QB > DB.subDiv.max || oB < 0 || oB > DB.subDiv.max || jB < 0 || jB > DB.subDiv.max ? null : DB.facetPartitioning[QB + DB.subDiv.max * oB + DB.subDiv.max * DB.subDiv.max * jB]
          }
          getClosestFacetAtCoordinates(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const jB = this.getWorldMatrix(),
              yB = QB.k.Matrix[5];
            jB.invertToRef(yB);
            const JB = QB.k.Xp[8];
            QB.r.TransformCoordinatesFromFloatsToRef(BB, OB, GB, yB, JB);
            const MB = this.getClosestFacetAtLocalCoordinates(JB.x, JB.y, JB.z, YB, DB, oB);
            return YB && QB.r.TransformCoordinatesFromFloatsToRef(YB.x, YB.y, YB.z, jB, YB), MB
          }
          getClosestFacetAtLocalCoordinates(BB, OB, GB, YB) {
            let DB, QB, oB, jB, yB, JB, MB, PB, zB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              pB = null;
            const qB = this.getFacetLocalPositions(),
              ZB = this.getFacetLocalNormals(),
              NB = this.getFacetsAtLocalCoordinates(BB, OB, GB);
            if (!NB) return null;
            let RB, WB, AB, VB, SB = Number.MAX_VALUE;
            for (let nB = 0; nB < NB.length; nB++) WB = NB[nB], AB = ZB[WB], VB = qB[WB], jB = (BB - VB.x) * AB.x + (OB - VB.y) * AB.y + (GB - VB.z) * AB.z, (!zB || zB && lB && jB >= 0 || zB && !lB && jB <= 0) && (jB = AB.x * VB.x + AB.y * VB.y + AB.z * VB.z, yB = -(AB.x * BB + AB.y * OB + AB.z * GB - jB) / (AB.x * AB.x + AB.y * AB.y + AB.z * AB.z), JB = BB + AB.x * yB, MB = OB + AB.y * yB, PB = GB + AB.z * yB, DB = JB - BB, QB = MB - OB, oB = PB - GB, RB = DB * DB + QB * QB + oB * oB, RB < SB && (SB = RB, pB = WB, YB && (YB.x = JB, YB.y = MB, YB.z = PB)));
            return pB
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetDataEnabled && (BB.facetDataEnabled = !1, BB.facetPositions = [], BB.facetNormals = [], BB.facetPartitioning = new Array, BB.facetParameters = {}, BB.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(BB, OB) {
            return this
          }
          createNormals(BB) {
            const OB = this.getVerticesData(oB.h.PositionKind),
              GB = this.KDB();
            let YB;
            return YB = this.isVerticesDataPresent(oB.h.NormalKind) ? this.getVerticesData(oB.h.NormalKind) : [], jB.e.ComputeNormals(OB, GB, YB, {
              useRightHandedSystem: this.JF().useRightHandedSystem
            }), this.setVerticesData(oB.h.NormalKind, YB, BB), this
          }
          async optimizeIndicesAsync() {
            const BB = this.KDB();
            if (!BB) return this;
            const {
              OptimizeIndices: OB
            } = await GB.e(660).then((() => GB(45700)));
            return OB(BB), this.setIndices(BB, this.getTotalVertices()), this
          }
          alignWithNormal(BB, OB) {
            OB || (OB = VB.c.Y);
            const GB = QB.k.Xp[0],
              YB = QB.k.Xp[1];
            return QB.r.CrossToRef(OB, BB, YB), QB.r.CrossToRef(BB, YB, GB), this.rotationQuaternion ? QB.f.RotationQuaternionFromAxisToRef(GB, BB, YB, this.rotationQuaternion) : QB.r.RotationFromAxisToRef(GB, BB, YB, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, ZB.j)("EdgesRenderer")
          }
          enableEdgesRendering(BB, OB, GB) {
            throw (0, ZB.j)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.rW.filter((BB => BB.emitter === this))
          }
        }, (() => {
          const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(zB[Symbol.metadata] ?? null) : void 0;
          OB = [nB.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, YB.h)(BB, null, OB, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: BB => "_ApplySkeleton" in BB,
              get: BB => BB._ApplySkeleton
            },
            metadata: GB
          }, null, lB), GB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: GB
          })
        })(), BB.OCCLUSION_TYPE_NONE = ((0, YB.j)(BB, lB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, BB.DefaultIsPickable = !0, BB
      })(),
      FB = !1;

    function iB() {
      FB || (FB = !0, (0, fB.f)("BABYLON.AbstractMesh", IB))
    }(lB = IB.prototype).createOrUpdateSubmeshesOctree ?? (lB.createOrUpdateSubmeshesOctree = (0, ZB.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (pB = IB.prototype).getPhysicsImpostor ?? (pB.getPhysicsImpostor = (0, ZB.g)("AbstractMesh", "getPhysicsImpostor")), (qB = IB.prototype).setPhysicsLinkWith ?? (qB.setPhysicsLinkWith = (0, ZB.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(IB.prototype, "occlusionRetryCount") || Object.defineProperty(IB.prototype, "occlusionRetryCount", (0, ZB.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(IB.prototype, "occlusionType") || Object.defineProperty(IB.prototype, "occlusionType", (0, ZB.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(IB.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(IB.prototype, "occlusionQueryAlgorithmType", (0, ZB.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(IB.prototype, "isOccluded") || Object.defineProperty(IB.prototype, "isOccluded", (0, ZB.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(IB.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(IB.prototype, "isOcclusionQueryInProgress", (0, ZB.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(IB.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(IB.prototype, "forceRenderingWhenOccluded", (0, ZB.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(IB.prototype, "occlusionForRenderPassId") || Object.defineProperty(IB.prototype, "occlusionForRenderPassId", (0, ZB.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(IB.prototype, "decalMap") || Object.defineProperty(IB.prototype, "decalMap", (0, ZB.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(IB.prototype, "yX") || Object.defineProperty(IB.prototype, "yX", (0, ZB.e)("AbstractMesh", "yX")), Object.getOwnPropertyDescriptor(IB.prototype, "physicsImpostor") || Object.defineProperty(IB.prototype, "physicsImpostor", (0, ZB.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(IB.prototype, "showBoundingBox") || Object.defineProperty(IB.prototype, "showBoundingBox", (0, ZB.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(IB.prototype, "edgesRenderer") || Object.defineProperty(IB.prototype, "edgesRenderer", (0, ZB.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(IB.prototype, "renderOutline") || Object.defineProperty(IB.prototype, "renderOutline", (0, ZB.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(IB.prototype, "renderOverlay") || Object.defineProperty(IB.prototype, "renderOverlay", (0, ZB.e)("AbstractMesh", "renderOverlay"))
  },
  41426: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => NB
    });
    var YB = GB(37778),
      DB = GB(37894),
      QB = GB(41423),
      oB = GB(41150),
      jB = GB(41287),
      yB = GB(41434),
      JB = GB(41300),
      MB = GB(41097),
      PB = GB(39366),
      zB = GB(41024),
      lB = GB(41315),
      pB = GB(37796),
      qB = GB(41436),
      ZB = GB(41067);
    class NB {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(BB) {
        this._boundingBias ? this._boundingBias.IU(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(BB) {
        const OB = new NB(NB.RandomId(), BB.JF());
        return OB.applyToMesh(BB), OB
      }
      get meshes() {
        return this._meshes
      }
      constructor(BB, OB, GB) {
        let DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = OB || pB.b.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Lp(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = DB, null !== oB && (this._totalVertices = oB), GB ? this.setAllVerticesData(GB, DB) : null === oB && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), QB && (this.applyToMesh(QB), QB.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      JF() {
        return this._scene
      }
      Lp() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let BB = 0; BB < this._meshes.length; BB++)
          if (!this._meshes[BB].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const BB = new Set;
        for (const OB in this._vertexBuffers) BB.add(this._vertexBuffers[OB].getWrapperBuffer());
        BB.forEach((BB => {
          BB._rebuild()
        }))
      }
      setAllVerticesData(BB, OB) {
        BB.applyToGeometry(this, OB), this._notifyUpdate()
      }
      setVerticesData(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0;
        GB && Array.isArray(OB) && (OB = new Float32Array(OB));
        const DB = new oB.h(this._engine, OB, BB, {
          updatable: GB,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: YB,
          label: "Geometry_" + this.id + "_" + BB
        });
        this.setVerticesBuffer(DB)
      }
      removeVerticesData(BB) {
        this._vertexBuffers[BB] && (this._vertexBuffers[BB].dispose(), delete this._vertexBuffers[BB]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const DB = BB.getKind();
        this._vertexBuffers[DB] && GB && this._vertexBuffers[DB].dispose(), BB._buffer && BB._ownsBuffer && BB._buffer._increaseReferences(), this._vertexBuffers[DB] = BB;
        const QB = this._meshes,
          jB = QB.length;
        if (DB === oB.h.PositionKind) {
          this._totalVertices = OB ?? BB._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : BB.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const GB = this._extend && this._extend.minimum || new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            DB = this._extend && this._extend.maximum || new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let BB = 0; BB < jB; BB++) {
            const OB = QB[BB];
            OB.buildBoundingInfo(GB, DB), OB._createGlobalSubMesh(OB.isUnIndexed), OB.computeWorldMatrix(!0), OB.synchronizeInstances()
          }
        }
        this._notifyUpdate(DB)
      }
      updateVerticesDataDirectly(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const DB = this.getVertexBuffer(BB);
        DB && (DB.updateDirectly(OB, GB, YB), this._notifyUpdate(BB))
      }
      updateVerticesData(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this.getVertexBuffer(BB);
        YB && (YB.update(OB), BB === oB.h.PositionKind && this._updateBoundingInfo(GB, OB), this._notifyUpdate(BB))
      }
      _updateBoundingInfo(BB, OB) {
        if (BB && this._updateExtend(OB), this._resetPointsArrayCache(), BB) {
          const BB = this._meshes;
          for (const OB of BB) {
            OB.hasBoundingInfo ? OB.Gw().reConstruct(this._extend.minimum, this._extend.maximum) : OB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const BB = OB.iW;
            for (const OB of BB) OB.refreshBoundingInfo()
          }
        }
      }
      _bind(BB, OB, GB, YB) {
        if (!BB) return;
        void 0 === OB && (OB = this._indexBuffer);
        const DB = this.getVertexBuffers();
        if (!DB) return;
        if (OB != this._indexBuffer || !this._vertexArrayObjects && !YB) return void this._engine.bindBuffers(DB, OB, BB, GB);
        const QB = YB || this._vertexArrayObjects,
          oB = this._engine;
        QB[BB.key] || (QB[BB.key] = oB.recordVertexArrayObject(DB, OB, BB, GB)), oB.bindVertexArrayObject(QB[BB.key], OB)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(BB, OB, GB) {
        const YB = this.getVertexBuffer(BB);
        return YB ? YB.getFloatData(this._totalVertices, GB || OB && 1 !== this._meshes.length) : null
      }
      copyVerticesData(BB, OB) {
        const GB = this.getVertexBuffer(BB);
        if (!GB) return;
        OB[BB] || (OB[BB] = new Float32Array(this._totalVertices * GB.getSize()));
        const YB = GB.getData();
        YB && (0, ZB.h)(YB, GB.getSize(), GB.type, GB.byteOffset, GB.byteStride, GB.normalized, this._totalVertices, OB[BB])
      }
      isVertexBufferUpdatable(BB) {
        const OB = this._vertexBuffers[BB];
        return !!OB && OB.isUpdatable()
      }
      getVertexBuffer(BB) {
        return this.isReady() ? this._vertexBuffers[BB] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(BB) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[BB] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      getVerticesDataKinds() {
        const BB = [];
        let OB;
        if (!this._vertexBuffers && this._delayInfo)
          for (OB in this._delayInfo) BB.push(OB);
        else
          for (OB in this._vertexBuffers) BB.push(OB);
        return BB
      }
      updateIndices(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const YB = BB.length !== this._indices.length;
            if (GB || (this._indices = BB.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, BB, OB), YB)
              for (const BB of this._meshes) BB._createGlobalSubMesh(!0)
          } else this.setIndices(BB, null, !0)
      }
      setIndexBuffer(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = BB, this._totalVertices = OB, this._totalIndices = GB, BB.is32Bits = null === YB ? OB > 65535 : YB;
        for (const DB of this._meshes) DB._createGlobalSubMesh(!0), DB.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = BB, this._indexBufferIsUpdatable = GB, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, GB, "Geometry_" + this.id + "_IndexBuffer")), void 0 != OB && (this._totalVertices = OB);
        for (const DB of this._meshes) DB._createGlobalSubMesh(!YB), DB.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      KDB(BB, OB) {
        if (!this.isReady()) return null;
        const GB = this._indices;
        return OB || BB && 1 !== this._meshes.length ? GB.slice() : GB
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        BB && this._vertexArrayObjects && this._vertexArrayObjects[BB.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[BB.key]), delete this._vertexArrayObjects[BB.key])
      }
      releaseForMesh(BB, OB) {
        const GB = this._meshes,
          YB = GB.indexOf(BB); - 1 !== YB && (GB.splice(YB, 1), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject(), BB._geometry = null, 0 === GB.length && OB && this.dispose())
      }
      applyToMesh(BB) {
        if (BB._geometry === this) return;
        const OB = BB._geometry;
        OB && OB.releaseForMesh(BB), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject();
        const GB = this._meshes;
        BB._geometry = this, BB._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), GB.push(BB), this.isReady() ? this._applyToMesh(BB) : this._boundingInfo && BB.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!BB && (BB = this.getVerticesData(oB.h.PositionKind), !BB)) return;
          this._extend = (0, lB.g)(BB, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(BB) {
        for (const OB in this._vertexBuffers) {
          const GB = this._vertexBuffers[OB];
          GB._buffer.getBuffer() || GB.create(), OB === oB.h.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), BB._syncGeometryWithMorphTargetManager(), BB.synchronizeInstances()
      }
      _notifyUpdate(BB) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, BB), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const OB of this._meshes) OB._markSubMeshesAsAttributesDirty()
      }
      load(BB, OB) {
        2 !== this.delayLoadState && (this.isReady() ? OB && OB() : (this.delayLoadState = 2, this._queueLoad(BB, OB)))
      }
      _queueLoad(BB, OB) {
        this.delayLoadingFile && (BB.addPendingData(this), (async () => {
          try {
            const GB = await BB._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void BB.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(GB), this), this.delayLoadState = 1, this._delayInfo = [], BB.removePendingData(this);
            const YB = this._meshes,
              DB = YB.length;
            for (let BB = 0; BB < DB; BB++) this._applyToMesh(YB[BB]);
            OB && OB()
          } catch (GB) {
            BB.removePendingData(this), BB.lV || PB.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${GB}`)
          }
        })())
      }
      toLeftHanded() {
        const BB = this.KDB(!1);
        if (null != BB && BB.length > 0) {
          for (let OB = 0; OB < BB.length; OB += 3) {
            const GB = BB[OB + 0];
            BB[OB + 0] = BB[OB + 2], BB[OB + 2] = GB
          }
          this.setIndices(BB)
        }
        const OB = this.getVerticesData(oB.h.PositionKind, !1);
        if (null != OB && OB.length > 0) {
          for (let BB = 0; BB < OB.length; BB += 3) OB[BB + 2] = -OB[BB + 2];
          this.setVerticesData(oB.h.PositionKind, OB, !1)
        }
        const GB = this.getVerticesData(oB.h.NormalKind, !1);
        if (null != GB && GB.length > 0) {
          for (let BB = 0; BB < GB.length; BB += 3) GB[BB + 2] = -GB[BB + 2];
          this.setVerticesData(oB.h.NormalKind, GB, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const BB = this.getVerticesData(oB.h.PositionKind);
        if (!BB || 0 === BB.length) return !1;
        for (let OB = 3 * this._positionsCache.length, GB = this._positionsCache.length; OB < BB.length; OB += 3, ++GB) this._positionsCache[GB] = YB.r.FromArray(BB, OB);
        for (let OB = 0, GB = 0; OB < BB.length; OB += 3, ++GB) this._positionsCache[GB].set(BB[0 + OB], BB[1 + OB], BB[2 + OB]);
        return this._positionsCache.length = BB.length / 3, this._positions = this._positionsCache, !0
      }
      lV() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const GB in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[GB]);
          this._vertexArrayObjects = {};
          const BB = this._meshes,
            OB = BB.length;
          for (let GB = 0; GB < OB; GB++) BB[GB]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const BB = this._meshes,
          OB = BB.length;
        let GB;
        for (GB = 0; GB < OB; GB++) this.releaseForMesh(BB[GB]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const YB in this._vertexBuffers) this._vertexBuffers[YB].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const BB = this._parentContainer.geometries.indexOf(this);
          BB > -1 && this._parentContainer.geometries.splice(BB, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(BB) {
        const OB = new NB(BB, this._scene),
          GB = this.KDB(void 0, !0);
        GB && OB.setIndices(GB);
        let YB, DB = !1;
        for (YB in this._vertexBuffers) {
          const BB = this.getVertexBuffer(YB),
            GB = BB.getData();
          if (!GB) continue;
          const QB = BB.isUpdatable(),
            jB = BB.getSize(),
            {
              type: yB,
              byteOffset: JB,
              byteStride: MB,
              normalized: PB
            } = BB;
          DB = DB || QB;
          let zB = this._totalVertices;
          if (BB.getIsInstanced()) {
            let BB;
            BB = GB instanceof Array ? 4 * GB.length : GB.byteLength, zB = BB / MB
          }
          const lB = (0, ZB.v)(GB, jB, yB, JB, MB, zB, !0),
            pB = new oB.h(this._engine, lB, YB, {
              updatable: QB,
              useBytes: !1,
              stride: jB,
              size: jB,
              offset: 0,
              type: yB,
              normalized: PB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            });
          OB.setVerticesBuffer(pB, zB)
        }
        for (YB in OB._updatable = DB, OB.delayLoadState = this.delayLoadState, OB.delayLoadingFile = this.delayLoadingFile, OB._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) OB._delayInfo = OB._delayInfo || [], OB._delayInfo.push(YB);
        return OB._boundingInfo = new JB.e(this._extend.minimum, this._extend.maximum), OB
      }
      serialize() {
        const BB = {};
        return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.e && zB.e.HasTags(this) && (BB.tags = zB.e.GetTags(this)), BB
      }
      _toNumberArray(BB) {
        return Array.isArray(BB) ? BB : Array.prototype.slice.call(BB)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const BB in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, BB) && (this._vertexBuffers[BB]._buffer._data = null)
      }
      serializeVerticeData() {
        const BB = this.serialize();
        return this.isVerticesDataPresent(oB.h.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(oB.h.PositionKind)), this.isVertexBufferUpdatable(oB.h.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(oB.h.NormalKind) && (BB.normals = this._toNumberArray(this.getVerticesData(oB.h.NormalKind)), this.isVertexBufferUpdatable(oB.h.NormalKind) && (BB.normalsUpdatable = !0)), this.isVerticesDataPresent(oB.h.TangentKind) && (BB.tangents = this._toNumberArray(this.getVerticesData(oB.h.TangentKind)), this.isVertexBufferUpdatable(oB.h.TangentKind) && (BB.tangentsUpdatable = !0)), this.isVerticesDataPresent(oB.h.UVKind) && (BB.uvs = this._toNumberArray(this.getVerticesData(oB.h.UVKind)), this.isVertexBufferUpdatable(oB.h.UVKind) && (BB.uvsUpdatable = !0)), this.isVerticesDataPresent(oB.h.UV2Kind) && (BB.uvs2 = this._toNumberArray(this.getVerticesData(oB.h.UV2Kind)), this.isVertexBufferUpdatable(oB.h.UV2Kind) && (BB.uvs2Updatable = !0)), this.isVerticesDataPresent(oB.h.UV3Kind) && (BB.uvs3 = this._toNumberArray(this.getVerticesData(oB.h.UV3Kind)), this.isVertexBufferUpdatable(oB.h.UV3Kind) && (BB.uvs3Updatable = !0)), this.isVerticesDataPresent(oB.h.UV4Kind) && (BB.uvs4 = this._toNumberArray(this.getVerticesData(oB.h.UV4Kind)), this.isVertexBufferUpdatable(oB.h.UV4Kind) && (BB.uvs4Updatable = !0)), this.isVerticesDataPresent(oB.h.UV5Kind) && (BB.uvs5 = this._toNumberArray(this.getVerticesData(oB.h.UV5Kind)), this.isVertexBufferUpdatable(oB.h.UV5Kind) && (BB.uvs5Updatable = !0)), this.isVerticesDataPresent(oB.h.UV6Kind) && (BB.uvs6 = this._toNumberArray(this.getVerticesData(oB.h.UV6Kind)), this.isVertexBufferUpdatable(oB.h.UV6Kind) && (BB.uvs6Updatable = !0)), this.isVerticesDataPresent(oB.h.ColorKind) && (BB.colors = this._toNumberArray(this.getVerticesData(oB.h.ColorKind)), this.isVertexBufferUpdatable(oB.h.ColorKind) && (BB.colorsUpdatable = !0)), this.isVerticesDataPresent(oB.h.MatricesIndicesKind) && (BB.matricesIndices = this._toNumberArray(this.getVerticesData(oB.h.MatricesIndicesKind)), BB.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(oB.h.MatricesIndicesKind) && (BB.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(oB.h.MatricesWeightsKind) && (BB.matricesWeights = this._toNumberArray(this.getVerticesData(oB.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(oB.h.MatricesWeightsKind) && (BB.matricesWeightsUpdatable = !0)), BB.indices = this._toNumberArray(this.KDB()), BB
      }
      static ExtractFromMesh(BB, OB) {
        const GB = BB._geometry;
        return GB ? GB.copy(OB) : null
      }
      static RandomId() {
        return MB.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(BB, OB) {
        for (let GB = 0; GB < OB.geometries.length; GB++)
          if (OB.geometries[GB]._loadedUniqueId === BB) return OB.geometries[GB];
        return null
      }
      static _ImportGeometry(BB, OB) {
        const GB = OB.JF(),
          YB = BB.geometryUniqueId,
          QB = BB.geometryId;
        if (YB || QB) {
          const BB = YB ? this._GetGeometryByLoadedUniqueId(YB, GB) : GB.getGeometryById(QB);
          BB && BB.applyToMesh(OB)
        } else if (BB instanceof ArrayBuffer) {
          const GB = OB._binaryInfo;
          if (GB.positionsAttrDesc && GB.positionsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.positionsAttrDesc.offset, GB.positionsAttrDesc.count);
            OB.setVerticesData(oB.h.PositionKind, YB, !1)
          }
          if (GB.normalsAttrDesc && GB.normalsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.normalsAttrDesc.offset, GB.normalsAttrDesc.count);
            OB.setVerticesData(oB.h.NormalKind, YB, !1)
          }
          if (GB.tangetsAttrDesc && GB.tangetsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.tangetsAttrDesc.offset, GB.tangetsAttrDesc.count);
            OB.setVerticesData(oB.h.TangentKind, YB, !1)
          }
          if (GB.uvsAttrDesc && GB.uvsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvsAttrDesc.offset, GB.uvsAttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UVKind, YB, !1)
          }
          if (GB.uvs2AttrDesc && GB.uvs2AttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvs2AttrDesc.offset, GB.uvs2AttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UV2Kind, YB, !1)
          }
          if (GB.uvs3AttrDesc && GB.uvs3AttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvs3AttrDesc.offset, GB.uvs3AttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UV3Kind, YB, !1)
          }
          if (GB.uvs4AttrDesc && GB.uvs4AttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvs4AttrDesc.offset, GB.uvs4AttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UV4Kind, YB, !1)
          }
          if (GB.uvs5AttrDesc && GB.uvs5AttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvs5AttrDesc.offset, GB.uvs5AttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UV5Kind, YB, !1)
          }
          if (GB.uvs6AttrDesc && GB.uvs6AttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.uvs6AttrDesc.offset, GB.uvs6AttrDesc.count);
            if (qB.e)
              for (let BB = 1; BB < YB.length; BB += 2) YB[BB] = 1 - YB[BB];
            OB.setVerticesData(oB.h.UV6Kind, YB, !1)
          }
          if (GB.colorsAttrDesc && GB.colorsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.colorsAttrDesc.offset, GB.colorsAttrDesc.count);
            OB.setVerticesData(oB.h.ColorKind, YB, !1, GB.colorsAttrDesc.stride)
          }
          if (GB.matricesIndicesAttrDesc && GB.matricesIndicesAttrDesc.count > 0) {
            const YB = new Int32Array(BB, GB.matricesIndicesAttrDesc.offset, GB.matricesIndicesAttrDesc.count),
              DB = [];
            for (let BB = 0; BB < YB.length; BB++) {
              const OB = YB[BB];
              DB.push(255 & OB), DB.push((65280 & OB) >> 8), DB.push((16711680 & OB) >> 16), DB.push(OB >> 24 & 255)
            }
            OB.setVerticesData(oB.h.MatricesIndicesKind, DB, !1)
          }
          if (GB.matricesIndicesExtraAttrDesc && GB.matricesIndicesExtraAttrDesc.count > 0) {
            const YB = new Int32Array(BB, GB.matricesIndicesExtraAttrDesc.offset, GB.matricesIndicesExtraAttrDesc.count),
              DB = [];
            for (let BB = 0; BB < YB.length; BB++) {
              const OB = YB[BB];
              DB.push(255 & OB), DB.push((65280 & OB) >> 8), DB.push((16711680 & OB) >> 16), DB.push(OB >> 24 & 255)
            }
            OB.setVerticesData(oB.h.MatricesIndicesExtraKind, DB, !1)
          }
          if (GB.matricesWeightsAttrDesc && GB.matricesWeightsAttrDesc.count > 0) {
            const YB = new Float32Array(BB, GB.matricesWeightsAttrDesc.offset, GB.matricesWeightsAttrDesc.count);
            OB.setVerticesData(oB.h.MatricesWeightsKind, YB, !1)
          }
          if (GB.indicesAttrDesc && GB.indicesAttrDesc.count > 0) {
            const YB = new Int32Array(BB, GB.indicesAttrDesc.offset, GB.indicesAttrDesc.count);
            OB.setIndices(YB, null)
          }
          if (GB.subMeshesAttrDesc && GB.subMeshesAttrDesc.count > 0) {
            const YB = new Int32Array(BB, GB.subMeshesAttrDesc.offset, 5 * GB.subMeshesAttrDesc.count);
            OB.iW = [];
            for (let BB = 0; BB < GB.subMeshesAttrDesc.count; BB++) {
              const GB = YB[5 * BB + 0],
                DB = YB[5 * BB + 1],
                QB = YB[5 * BB + 2],
                oB = YB[5 * BB + 3],
                yB = YB[5 * BB + 4];
              jB.c.AddToMesh(GB, DB, QB, oB, yB, OB)
            }
          }
        } else if (BB.positions && BB.normals && BB.indices) {
          if (OB.setVerticesData(oB.h.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), OB.setVerticesData(oB.h.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && OB.setVerticesData(oB.h.TangentKind, BB.tangents, BB.tangents._updatable || BB.tangentsUpdatable), BB.uvs && OB.setVerticesData(oB.h.UVKind, BB.uvs, BB.uvs._updatable || BB.uvsUpdatable), BB.uvs2 && OB.setVerticesData(oB.h.UV2Kind, BB.uvs2, BB.uvs2._updatable || BB.uvs2Updatable), BB.uvs3 && OB.setVerticesData(oB.h.UV3Kind, BB.uvs3, BB.uvs3._updatable || BB.uvs3Updatable), BB.uvs4 && OB.setVerticesData(oB.h.UV4Kind, BB.uvs4, BB.uvs4._updatable || BB.uvs4Updatable), BB.uvs5 && OB.setVerticesData(oB.h.UV5Kind, BB.uvs5, BB.uvs5._updatable || BB.uvs5Updatable), BB.uvs6 && OB.setVerticesData(oB.h.UV6Kind, BB.uvs6, BB.uvs6._updatable || BB.uvs6Updatable), BB.colors && OB.setVerticesData(oB.h.ColorKind, DB.g.CheckColors4(BB.colors, BB.positions.length / 3), BB.colors._updatable), BB.matricesIndices)
            if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, OB.setVerticesData(oB.h.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
            else {
              const GB = [];
              for (let OB = 0; OB < BB.matricesIndices.length; OB++) {
                const YB = BB.matricesIndices[OB];
                GB.push(255 & YB), GB.push((65280 & YB) >> 8), GB.push((16711680 & YB) >> 16), GB.push(YB >> 24 & 255)
              }
              OB.setVerticesData(oB.h.MatricesIndicesKind, GB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
            } if (BB.matricesIndicesExtra)
            if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, OB.setVerticesData(oB.h.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable);
            else {
              const GB = [];
              for (let OB = 0; OB < BB.matricesIndicesExtra.length; OB++) {
                const YB = BB.matricesIndicesExtra[OB];
                GB.push(255 & YB), GB.push((65280 & YB) >> 8), GB.push((16711680 & YB) >> 16), GB.push(YB >> 24 & 255)
              }
              OB.setVerticesData(oB.h.MatricesIndicesExtraKind, GB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
            } BB.matricesWeights && (NB._CleanMatricesWeights(BB, OB), OB.setVerticesData(oB.h.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matricesWeights._updatable), OB.setIndices(BB.indices, null)
        }
        if (BB.iW) {
          OB.iW = [];
          for (let GB = 0; GB < BB.iW.length; GB++) {
            const YB = BB.iW[GB];
            jB.c.AddToMesh(YB.materialIndex, YB.verticesStart, YB.verticesCount, YB.indexStart, YB.indexCount, OB)
          }
        }
        OB._shouldGenerateFlatShading && (OB.convertToFlatShadedMesh(), OB._shouldGenerateFlatShading = !1), OB.computeWorldMatrix(!0), GB.onMeshImportedObservable.notifyObservers(OB)
      }
      static _CleanMatricesWeights(BB, OB) {
        const GB = .001;
        if (!yB.c.CleanBoneMatrixWeights) return;
        let YB;
        if (!(BB.skeletonId > -1)) return;
        {
          const GB = OB.JF().getLastSkeletonById(BB.skeletonId);
          if (!GB) return;
          YB = GB.bones.length
        }
        const DB = OB.getVerticesData(oB.h.MatricesIndicesKind),
          QB = OB.getVerticesData(oB.h.MatricesIndicesExtraKind),
          jB = BB.matricesWeights,
          JB = BB.matricesWeightsExtra,
          MB = BB.numBoneInfluencer,
          PB = jB.length;
        for (let oB = 0; oB < PB; oB += 4) {
          let BB = 0,
            OB = -1;
          for (let YB = 0; YB < 4; YB++) {
            const DB = jB[oB + YB];
            BB += DB, DB < GB && OB < 0 && (OB = YB)
          }
          if (JB)
            for (let YB = 0; YB < 4; YB++) {
              const DB = JB[oB + YB];
              BB += DB, DB < GB && OB < 0 && (OB = YB + 4)
            }
          if ((OB < 0 || OB > MB - 1) && (OB = MB - 1), BB > GB) {
            const OB = 1 / BB;
            for (let BB = 0; BB < 4; BB++) jB[oB + BB] *= OB;
            if (JB)
              for (let BB = 0; BB < 4; BB++) JB[oB + BB] *= OB
          } else OB >= 4 ? (JB[oB + OB - 4] = 1 - BB, QB[oB + OB - 4] = YB) : (jB[oB + OB] = 1 - BB, DB[oB + OB] = YB)
        }
        OB.setVerticesData(oB.h.MatricesIndicesKind, DB), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesIndicesExtraKind, QB)
      }
      static Parse(BB, OB, GB) {
        const DB = new NB(BB.id, OB, void 0, BB.updatable);
        return DB._loadedUniqueId = BB.uniqueId, zB.e && zB.e.AddTagsTo(DB, BB.tags), BB.delayLoadingFile ? (DB.delayLoadState = 4, DB.delayLoadingFile = GB + BB.delayLoadingFile, DB._boundingInfo = new JB.e(YB.r.FromArray(BB.boundingBoxMinimum), YB.r.FromArray(BB.boundingBoxMaximum)), DB._delayInfo = [], BB.hasUVs && DB._delayInfo.push(oB.h.UVKind), BB.hasUVs2 && DB._delayInfo.push(oB.h.UV2Kind), BB.hasUVs3 && DB._delayInfo.push(oB.h.UV3Kind), BB.hasUVs4 && DB._delayInfo.push(oB.h.UV4Kind), BB.hasUVs5 && DB._delayInfo.push(oB.h.UV5Kind), BB.hasUVs6 && DB._delayInfo.push(oB.h.UV6Kind), BB.hasColors && DB._delayInfo.push(oB.h.ColorKind), BB.hasMatricesIndices && DB._delayInfo.push(oB.h.MatricesIndicesKind), BB.hasMatricesWeights && DB._delayInfo.push(oB.h.MatricesWeightsKind), DB._delayLoadingFunction = QB.e.ImportVertexData) : QB.e.ImportVertexData(BB, DB), OB.pushGeometry(DB, !0), DB
      }
    }
  },
  41462: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB,
      f: () => pB
    });
    var YB = GB(37778),
      DB = GB(39366),
      QB = GB(41442),
      oB = GB(41411),
      jB = GB(39358),
      yB = GB(41444),
      JB = GB(41150),
      MB = GB(37823);
    class PB extends QB.c {
      constructor(BB, OB) {
        super(BB, OB.JF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, OB.hBB(this), this._sourceMesh = OB, this._unIndexed = OB._unIndexed, this.position.IU(OB.position), this.rotation.IU(OB.rotation), this.SP.IU(OB.SP), OB.rotationQuaternion && (this.rotationQuaternion = OB.rotationQuaternion.clone()), this.animations = OB.animations.slice();
        for (const GB of OB.getAnimationRanges()) null != GB && this.createAnimationRange(GB.name, GB.from, GB.to);
        if (this.infiniteDistance = OB.infiniteDistance, this.setPivotMatrix(OB.getPivotMatrix()), OB.skeleton || OB.morphTargetManager || !OB.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const BB = OB.Gw();
          this.buildBoundingInfo(BB.minimum, BB.maximum)
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
      set receiveShadows(BB) {
        this._sourceMesh?.receiveShadows !== BB && DB.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(BB) {
        this._sourceMesh?.material !== BB && DB.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(BB) {
        this._sourceMesh?.visibility !== BB && DB.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(BB) {
        this._sourceMesh?.skeleton !== BB && DB.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(BB) {
        this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && DB.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(BB) {
        this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && DB.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get AQB() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(BB) {
        return this._sourceMesh.createInstance(BB)
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(BB, !0)
      }
      getVerticesData(BB, OB, GB) {
        return this._sourceMesh.getVerticesData(BB, OB, GB)
      }
      copyVerticesData(BB, OB) {
        this._sourceMesh.copyVerticesData(BB, OB)
      }
      getVertexBuffer(BB, OB) {
        return this._sourceMesh.getVertexBuffer(BB, OB)
      }
      setVerticesData(BB, OB, GB, YB) {
        return this.AQB && this.AQB.setVerticesData(BB, OB, GB, YB), this.AQB
      }
      updateVerticesData(BB, OB, GB, YB) {
        return this.AQB && this.AQB.updateVerticesData(BB, OB, GB, YB), this.AQB
      }
      setIndices(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.AQB && this.AQB.setIndices(BB, OB), this.AQB
      }
      isVerticesDataPresent(BB) {
        return this._sourceMesh.isVerticesDataPresent(BB)
      }
      KDB() {
        return this._sourceMesh.KDB()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let BB, OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.Gw().isLocked) return this;
        BB = "object" === typeof OB ? OB : {
          applySkeleton: OB,
          applyMorph: GB
        };
        const YB = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, JB.h.PositionKind), YB), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(BB, OB) {
        if (super._activate(BB, OB), this._sourceMesh.iW || DB.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, BB), OB) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== yB.h.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new YB.d);
          const BB = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, YB.k.Xp[7].IU(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.IU(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.IU(YB.k.Xp[7]), this._currentLOD._masterMesh = BB, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get SF() {
        return !0
      }
      getLOD(BB) {
        if (!BB) return this;
        const OB = this.AQB.getLODLevels();
        if (OB && 0 !== OB.length) {
          const OB = this.Gw();
          this._currentLOD = this.AQB.getLOD(BB, OB.xDB)
        } else this._currentLOD = this.AQB;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(BB) {
        return this.AQB._preActivateForIntermediateRendering(BB)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.iW)
          for (let BB = 0; BB < this._sourceMesh.iW.length; BB++) this._sourceMesh.iW[BB].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.Gw().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(BB);
        if (jB.b.DeepCopy(this, YB, ["name", "iW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "AQB", "SF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "WQB", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "yyB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), OB && (YB.parent = OB), !GB)
          for (let DB = 0; DB < this.JF().meshes.length; DB++) {
            const BB = this.JF().meshes[DB];
            BB.parent === this && BB.clone(BB.name, YB)
          }
        return YB.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(YB), YB
      }
      dispose(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.eBB(this), super.dispose(BB, OB)
      }
      _serializeAsParent(BB) {
        super._serializeAsParent(BB), BB.parentId = this._sourceMesh.uniqueId, BB.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0, OB && OB.newSourcedMesh);
        YB && GB && GB(this, YB);
        for (const DB of this.getChildTransformNodes(!0)) DB.instantiateHierarchy(YB, OB, GB);
        return YB
      }
    }
    let zB = !1;

    function lB(BB, OB, GB, YB, DB) {
      for (let QB = 0; QB < OB.length; QB++) {
        const oB = BB[OB[QB]] ?? 0,
          jB = DB + GB[QB];
        oB.toArray ? oB.toArray(YB, jB) : oB.copyToArray ? oB.copyToArray(YB, jB) : YB[jB] = oB
      }
    }

    function pB() {
      zB || (zB = !0, oB.c._instancedMeshFactory = (BB, OB) => {
        const GB = new PB(BB, OB);
        if (OB.yX) {
          GB.yX = {};
          for (const BB in OB.yX) GB.yX[BB] = OB.yX[BB]
        }
        return GB
      }, oB.c.prototype.BX = function(BB, OB) {
        if (!this.yX) {
          this.yX = {};
          for (const BB of this.instances) BB.yX = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Lp().getCaps().vertexArrayObject ? {} : void 0
        }), this.yX[BB] = null, this._userInstancedBuffersStorage.strides[BB] = OB;
        const GB = this._userInstancedBuffersStorage;
        GB.interleavedKinds = [], GB.interleavedOffsets = [], GB.interleavedRowStride = 0;
        for (const YB in GB.strides) GB.interleavedKinds.push(YB), GB.interleavedOffsets.push(GB.interleavedRowStride), GB.interleavedRowStride += GB.strides[YB];
        GB.interleavedData = new Float32Array(32 * GB.interleavedRowStride);
        for (const YB in GB.interleavedBuffers) GB.interleavedBuffers[YB].buffer.dispose();
        GB.interleavedBuffers = {}, GB.vertexBuffers[BB] = null;
        for (const YB of this.instances) YB.yX[BB] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, oB.c.prototype._processInstancedBuffers = function(BB, OB) {
        const GB = this._userInstancedBuffersStorage,
          YB = GB.interleavedRowStride;
        if (!YB) return;
        const DB = BB ? BB.length : 0,
          QB = (DB + 1) * YB;
        let oB = GB.interleavedData;
        if (oB.length < QB) {
          let BB = oB.length;
          for (; BB < QB;) BB *= 2;
          oB = GB.interleavedData = new Float32Array(BB)
        }
        const jB = GB.interleavedKinds,
          yB = GB.interleavedOffsets;
        let MB = 0;
        OB && (lB(this.yX, jB, yB, oB, MB), MB += YB);
        for (let JB = 0; JB < DB; JB++) lB(BB[JB].yX, jB, yB, oB, MB), MB += YB;
        let PB = "shared",
          zB = GB.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (PB = this._instanceDataStorage.engine.currentRenderPassId, GB.renderPasses || (GB.renderPasses = {}), GB.renderPasses[PB] || (GB.renderPasses[PB] = {}), zB = GB.renderPasses[PB]);
        const pB = GB.interleavedBuffers[PB];
        let qB = !pB || pB.data !== oB;
        for (let JB = 0; !qB && JB < jB.length; JB++) qB = !zB[jB[JB]];
        if (!qB) return void pB.buffer.updateDirectly(oB, 0);
        pB?.buffer.dispose();
        const ZB = new JB.c(this.Lp(), oB, !0, YB, !1, !0);
        for (let JB = 0; JB < jB.length; JB++) {
          const BB = jB[JB],
            OB = ZB.createVertexBuffer(BB, yB[JB], GB.strides[BB]);
          OB.hashCode += OB.byteOffset * 2 ** 24, zB[BB] = OB
        }
        GB.interleavedBuffers[PB] = {
          buffer: ZB,
          data: oB
        }, this._invalidateInstanceVertexArrayObject()
      }, oB.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.Lp().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, oB.c.prototype._disposeInstanceSpecificData = function() {
        for (const OB in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[OB].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const OB in this.yX) this._userInstancedBuffersStorage.vertexBuffers[OB] && this._userInstancedBuffersStorage.vertexBuffers[OB].dispose();
        const BB = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (BB) {
          for (const OB in BB) BB[OB].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.yX = {}
      }, (0, MB.f)("BABYLON.InstancedMesh", PB))
    }
  },
  41411: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => sB,
      f: () => tB,
      j: () => aB
    });
    var YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB = GB(37802),
      RB = GB(41097),
      WB = GB(41035),
      AB = GB(39358),
      VB = GB(41024),
      SB = GB(41420),
      nB = GB(41217),
      UB = GB(37778),
      fB = GB(37894),
      kB = GB(41220),
      dB = GB(41150),
      KB = GB(41423),
      uB = GB(41426),
      mB = GB(41442),
      IB = GB(41287),
      FB = GB(41283),
      iB = GB(41381),
      LB = GB(41446),
      gB = GB(41434),
      rB = GB(41022),
      XB = GB(39366),
      wB = GB(37823),
      EB = GB(40890),
      cB = GB(41183);
    class hB {
      constructor(BB, OB) {
        this.distanceOrScreenCoverage = BB, this.mesh = OB
      }
    }
    class aB {}
    class eB {
      constructor() {
        this.batchCache = new bB(this), this.batchCacheReplacementModeInFrozenMode = new bB(this), this.instancesBufferSize = 2048
      }
    }
    class TB {
      constructor() {
        this.renderPasses = {}
      }
    }
    class bB {
      constructor(BB) {
        this.parent = BB, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class CB {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class HB {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const vB = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class sB extends mB.c {
      static _GetDefaultSideOrientation(BB) {
        return BB || sB.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(BB) {
        this._internalMeshDataInfo._useLODScreenCoverage = BB, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(BB) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(dB.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(dB.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new NB.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new NB.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new NB.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new NB.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new NB.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(BB) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(BB)
      }
      get WQB() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(BB) {
        this._internalMeshDataInfo._forcedInstanceCount = BB
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(BB) {
        this._internalMeshDataInfo._sideOrientation = BB, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === BB || !this._scene.useRightHandedSystem && 0 === BB
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(BB) {
        this.sideOrientation = BB, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(BB) {
        this._internalMeshDataInfo._overrideRenderingFillMode = BB
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        BB && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (BB.sideOrientation = null), this._setMaterial(BB)
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
      set isUnIndexed(BB) {
        this._unIndexed !== BB && (this._unIndexed = BB, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const BB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return BB ? BB.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const BB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return BB ? BB.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(BB) {
        this._instanceDataStorage.manualUpdate = BB
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(BB) {
        this._instanceDataStorage.previousManualUpdate = BB
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(BB) {
        this._instanceDataStorage.forceMatrixUpdates = BB
      }
      _copySource(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const DB = this.JF();
        if (BB._geometry && BB._geometry.applyToMesh(this), AB.b.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "WQB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "SF", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "yyB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = BB, DB.useClonedMeshMap && (BB._internalMeshDataInfo.meshMap || (BB._internalMeshDataInfo.meshMap = {}), BB._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = BB._originalBuilderSideOrientation, this._creationDataStorage = BB._creationDataStorage, BB._ranges) {
          const OB = BB._ranges;
          for (const BB in OB) Object.prototype.hasOwnProperty.call(OB, BB) && OB[BB] && this.createAnimationRange(BB, OB[BB].from, OB[BB].to)
        }
        if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, VB.e && VB.e.HasTags(BB) && VB.e.AddTagsTo(this, VB.e.GetTags(BB, !0)), this.Zk(BB.isEnabled(!1)), this.parent = BB.parent, this.setPivotMatrix(BB.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + BB.id, this.material = BB.material, !OB) {
          const DB = BB.getDescendants(!0);
          for (let BB = 0; BB < DB.length; BB++) {
            const QB = DB[BB];
            QB._isMesh ? (vB.parent = this, vB.doNotCloneChildren = OB, vB.clonePhysicsImpostor = GB, vB.cloneThinInstances = YB, QB.clone(this.name + "." + QB.name, vB)) : QB.clone && QB.clone(this.name + "." + QB.name, this)
          }
        }
        if (BB.morphTargetManager && (this.morphTargetManager = BB.morphTargetManager), (0, EB.b)(DB.getPhysicsEngine)) {
          const OB = DB.getPhysicsEngine();
          if (GB && OB)
            if (1 === OB.getPluginVersion()) {
              const GB = OB.getImpostorForPhysicsObject(BB);
              GB && (this.physicsImpostor = GB.clone(this))
            } else 2 === OB.getPluginVersion() && BB.physicsBody && BB.physicsBody.clone(this)
        }
        for (let QB = 0; QB < DB.rW.length; QB++) {
          const OB = DB.rW[QB];
          OB.emitter === BB && OB.clone(OB.name, this)
        }
        if (this.skeleton = BB.skeleton, YB && (BB._thinInstanceDataStorage.matrixData ? (this.DOB("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = BB._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, BB._userThinInstanceBuffersStorage)) {
          const OB = BB._userThinInstanceBuffersStorage;
          for (const BB in OB.data) this.DOB(BB, new Float32Array(OB.data[BB]), OB.strides[BB], !OB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = OB.sizes[BB]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(BB) {
        let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QB = arguments.length > 4 ? arguments[4] : void 0,
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(BB, GB), this._internalMeshDataInfo = new HB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new CB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = sB.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, GB = this.JF(), this._instanceDataStorage = new TB, this._instanceDataStorage.engine = GB.Lp(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new eB), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (BB, OB, GB) => {
          BB && GB && (this._uniformBuffer ? this.transferToEffect(OB) : GB.bindOnlyWorldMatrix(OB))
        };
        let jB = !1;
        if (YB && void 0 === YB._addToSceneRootNodes) {
          const BB = YB;
          OB = BB.parent ?? null, DB = BB.source ?? null, QB = BB.doNotCloneChildren ?? !1, oB = BB.clonePhysicsImpostor ?? !0, jB = BB.cloneThinInstances ?? !1
        } else OB = YB;
        DB && this._copySource(DB, QB, oB, jB), null !== OB && (this.parent = OB), this._instanceDataStorage.hardwareInstancedRendering = this.Lp().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
          BB.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new NB.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), DB && DB.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = 0 === this.getTotalVertices() || OB && OB.doNotInstantiate && (!0 === OB.doNotInstantiate || OB.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        YB.parent = BB || this.parent, YB.position = this.position.clone(), YB.SP = this.SP.clone(), this.rotationQuaternion ? YB.rotationQuaternion = this.rotationQuaternion.clone() : YB.rotation = this.rotation.clone(), GB && GB(this, YB);
        for (const DB of this.getChildTransformNodes(!0)) "InstancedMesh" === DB.getClassName() && "Mesh" === YB.getClassName() && DB.AQB === this ? DB.instantiateHierarchy(YB, {
          doNotInstantiate: OB && OB.doNotInstantiate || !1,
          newSourcedMesh: YB
        }, GB) : DB.instantiateHierarchy(YB, OB, GB);
        return YB
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(BB) {
        let OB = super.toString(BB);
        if (OB += ", n vertices: " + this.getTotalVertices(), OB += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let GB = 0; GB < this.animations.length; GB++) OB += ", animation[0]: " + this.animations[GB].toString(BB);
        if (BB)
          if (this._geometry) {
            const BB = this.KDB(),
              GB = this.getVerticesData(dB.h.PositionKind);
            GB && BB && (OB += ", flat shading: " + (GB.length / 3 === BB.length ? "YES" : "NO"))
          } else OB += ", flat shading: UNKNOWN";
        return OB
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const BB of this.instances) BB._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const BB = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((OB, GB) => OB.distanceOrScreenCoverage < GB.distanceOrScreenCoverage ? BB : OB.distanceOrScreenCoverage > GB.distanceOrScreenCoverage ? -BB : 0))
      }
      addLODLevel(BB, OB) {
        if (OB && OB._masterMesh) return XB.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const GB = new hB(BB, OB);
        return this._internalMeshDataInfo._LODLevels.push(GB), OB && (OB._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(BB) {
        const OB = this._internalMeshDataInfo;
        for (let GB = 0; GB < OB._LODLevels.length; GB++) {
          const YB = OB._LODLevels[GB];
          if (YB.distanceOrScreenCoverage === BB) return YB.mesh
        }
        return null
      }
      removeLODLevel(BB) {
        const OB = this._internalMeshDataInfo;
        for (let GB = 0; GB < OB._LODLevels.length; GB++) OB._LODLevels[GB].mesh === BB && (OB._LODLevels.splice(GB, 1), BB && (BB._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(BB, OB) {
        const GB = this._internalMeshDataInfo;
        if (!GB._LODLevels || 0 === GB._LODLevels.length) return this;
        const YB = OB || this.Gw().xDB,
          DB = BB.mode === nB.e.ORTHOGRAPHIC_CAMERA ? BB.minZ : YB.centerWorld.subtract(BB.globalPosition).length();
        let QB = DB,
          oB = 1;
        if (GB._useLODScreenCoverage) {
          const OB = BB.screenArea;
          let GB = YB.radiusWorld * BB.minZ / DB;
          GB = GB * GB * Math.PI, QB = GB / OB, oB = -1
        }
        if (oB * GB._LODLevels[GB._LODLevels.length - 1].distanceOrScreenCoverage > oB * QB) return this.onLODLevelSelection && this.onLODLevelSelection(QB, this, this), this;
        for (let jB = 0; jB < GB._LODLevels.length; jB++) {
          const BB = GB._LODLevels[jB];
          if (oB * BB.distanceOrScreenCoverage < oB * QB) {
            if (BB.mesh) {
              if (4 === BB.mesh.delayLoadState) return BB.mesh._checkDelayState(), this;
              if (2 === BB.mesh.delayLoadState) return this;
              BB.mesh._preActivate(), BB.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(QB, this, BB.mesh), BB.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(QB, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(BB, OB, GB, YB) {
        if (!this._geometry) return null;
        let DB = YB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]?.getFloatData(this.instances.length + 1, GB || OB && 1 !== this._geometry.meshes.length);
        return DB || (DB = this._geometry.getVerticesData(BB, OB, GB)), DB
      }
      copyVerticesData(BB, OB) {
        this._geometry && this._geometry.copyVerticesData(BB, OB)
      }
      getVertexBuffer(BB, OB) {
        return this._geometry ? (OB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]) ?? this._geometry.getVertexBuffer(BB) : null
      }
      isVerticesDataPresent(BB, OB) {
        return this._geometry ? !OB && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[BB] || this._geometry.isVerticesDataPresent(BB) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      isVertexBufferUpdatable(BB, OB) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB);
        if (!OB) {
          const OB = this._userInstancedBuffersStorage?.vertexBuffers[BB];
          if (OB) return OB.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(BB)
      }
      getVerticesDataKinds(BB) {
        if (!this._geometry) {
          const BB = [];
          if (this._delayInfo)
            for (const OB of this._delayInfo) BB.push(OB);
          return BB
        }
        const OB = this._geometry.getVerticesDataKinds();
        if (!BB && this._userInstancedBuffersStorage)
          for (const GB in this._userInstancedBuffersStorage.vertexBuffers) - 1 === OB.indexOf(GB) && OB.push(GB);
        return OB
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      KDB(BB, OB) {
        return this._geometry ? this._geometry.KDB(BB, OB) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(BB)) return !1;
        if (!this.iW || 0 === this.iW.length) return !0;
        if (!BB) return !0;
        const GB = this.Lp(),
          YB = this.JF(),
          DB = OB || GB.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const QB = this.material || YB.defaultMaterial;
        if (QB)
          if (QB._storeEffectOnSubMeshes)
            for (const jB of this.iW) {
              const BB = jB.cp();
              if (BB)
                if (BB._storeEffectOnSubMeshes) {
                  if (!BB.isReadyForSubMesh(this, jB, DB)) return !1
                } else if (!BB.isReady(this, DB)) return !1
            } else if (!QB.isReady(this, DB)) return !1;
        const oB = GB.currentRenderPassId;
        for (const jB of this.lightSources) {
          const BB = jB.getShadowGenerators();
          if (!BB) continue;
          const OB = BB.values();
          for (let YB = OB.next(); !0 !== YB.done; YB = OB.next()) {
            const BB = YB.value;
            if (BB && (!BB.getShadowMap()?.renderList || BB.getShadowMap()?.renderList && -1 !== BB.getShadowMap()?.renderList?.indexOf(this))) {
              const OB = BB.getShadowMap().renderPassIds ?? [GB.currentRenderPassId];
              for (let YB = 0; YB < OB.length; ++YB) {
                GB.currentRenderPassId = OB[YB];
                for (const OB of this.iW)
                  if (!BB.isReady(OB, DB, OB.cp()?.needAlphaBlendingForMesh(this) ?? !1)) return GB.currentRenderPassId = oB, !1
              }
              GB.currentRenderPassId = oB
            }
          }
        }
        for (const jB of this._internalMeshDataInfo._LODLevels)
          if (jB.mesh && !jB.mesh.isReady(DB)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      hp() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(BB) {
        this._instanceDataStorage.overridenInstanceCount = BB
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const BB = this._instanceDataStorage.engine.currentRenderPassId;
        let OB = this._instanceDataStorage.renderPasses[BB];
        return OB || (OB = new eB, this._instanceDataStorage.renderPasses[BB] = OB), OB
      }
      _preActivate() {
        const BB = this._internalMeshDataInfo,
          OB = this.JF().getRenderId();
        return BB._preActivateId === OB || (BB._preActivateId = OB, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(BB) {
        const OB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return OB.visibleInstances && (OB.visibleInstances.intermediateDefaultRenderId = BB), this
      }
      _registerInstanceForRenderId(BB, OB) {
        const GB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return GB.visibleInstances || (GB.visibleInstances = {
          defaultRenderId: OB,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), GB.visibleInstances[OB] || (void 0 === GB.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete GB.visibleInstances[GB.previousRenderId], GB.previousRenderId = OB, GB.visibleInstances[OB] = new Array), GB.visibleInstances[OB].push(BB), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Ep || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let BB, OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.Gw().isLocked) return this;
        BB = "object" === typeof OB ? OB : {
          applySkeleton: OB,
          applyMorph: GB
        };
        const YB = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(BB, null, dB.h.PositionKind), YB), this
      }
      _createGlobalSubMesh(BB) {
        const OB = this.getTotalVertices();
        if (!OB || !this.KDB()) return null;
        if (this.iW && this.iW.length > 0) {
          const GB = this.KDB();
          if (!GB) return null;
          const YB = GB.length;
          let DB = !1;
          if (BB) DB = !0;
          else
            for (const BB of this.iW) {
              if (BB.indexStart + BB.indexCount > YB) {
                DB = !0;
                break
              }
              if (BB.verticesStart + BB.verticesCount > OB) {
                DB = !0;
                break
              }
            }
          if (!DB) return this.iW[0]
        }
        return this.releaseSubMeshes(), new IB.c(0, 0, OB, 0, this.getTotalIndices() || (this.isUnIndexed ? OB : 0), this)
      }
      subdivide(BB) {
        if (BB < 1) return;
        const OB = this.getTotalIndices();
        let GB = OB / BB | 0,
          YB = 0;
        for (; GB % 3 !== 0;) GB++;
        this.releaseSubMeshes();
        for (let DB = 0; DB < BB && !(YB >= OB); DB++) IB.c.CreateFromIndices(0, YB, YB + GB >= OB ? OB - YB : GB, this, void 0, !1), YB += GB;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(BB, OB, GB, YB);
        else {
          const YB = new KB.e;
          YB.set(OB, BB);
          const DB = this.JF();
          new uB.d(uB.d.RandomId(), DB, YB, GB, this)
        }
        return this
      }
      removeVerticesData(BB) {
        this._geometry && this._geometry.removeVerticesData(BB)
      }
      markVerticesDataAsUpdatable(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this.getVertexBuffer(BB);
        GB && GB.isUpdatable() !== OB && this.setVerticesData(BB, this.getVerticesData(BB), OB)
      }
      setVerticesBuffer(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = uB.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, GB, OB), this
      }
      updateVerticesData(BB, OB, GB, YB) {
        return this._geometry ? (YB ? (this.makeGeometryUnique(), this.updateVerticesData(BB, OB, GB, !1)) : this._geometry.updateVerticesData(BB, OB, GB), this) : this
      }
      updateMeshPositions(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this.getVerticesData(dB.h.PositionKind);
        if (!GB) return this;
        if (BB(GB), this.updateVerticesData(dB.h.PositionKind, GB, !1, !1), OB) {
          const BB = this.KDB(),
            OB = this.getVerticesData(dB.h.NormalKind);
          if (!OB) return this;
          KB.e.ComputeNormals(GB, BB, OB), this.updateVerticesData(dB.h.NormalKind, OB, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const BB = this._geometry,
          OB = this._geometry.copy(uB.d.RandomId());
        return BB.releaseForMesh(this, !0), OB.applyToMesh(this), this
      }
      setIndexBuffer(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          DB = this._geometry;
        DB || (DB = new uB.d(uB.d.RandomId(), this.JF(), void 0, void 0, this)), DB.setIndexBuffer(BB, OB, GB, YB)
      }
      setIndices(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(BB, OB, GB, YB);
        else {
          const YB = new KB.e;
          YB.indices = BB;
          const DB = this.JF();
          new uB.d(uB.d.RandomId(), DB, YB, GB, this, OB)
        }
        return this
      }
      updateIndices(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(BB, OB, GB), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(BB, OB, GB) {
        let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const DB = this.JF().Lp();
        let QB;
        if (this._unIndexed)
          if (this._getRenderingFillMode(GB) === FB.b.WireFrameFillMode) QB = BB._getLinesIndexBuffer(this.KDB(), DB);
          else QB = null;
        else switch (this._getRenderingFillMode(GB)) {
          case FB.b.PointFillMode:
            QB = null;
            break;
          case FB.b.WireFrameFillMode:
            QB = BB._getLinesIndexBuffer(this.KDB(), DB);
            break;
          default:
          case FB.b.TriangleFillMode:
            QB = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(OB, QB, YB)
      }
      _bindDirect(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(BB), GB && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const BB = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const OB in BB) this._userInstancedBuffersStorage.vertexBuffers[OB] = BB[OB]
          }
          this._geometry._bind(BB, OB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(BB, OB);
        return this
      }
      _draw(BB, OB, GB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const YB = this.JF().Lp(),
          DB = YB._currentMaterialContext,
          QB = DB && DB.useVertexPulling;
        return this._unIndexed && OB !== FB.b.WireFrameFillMode || OB == FB.b.PointFillMode ? YB.drawArraysType(OB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || GB) : OB == FB.b.WireFrameFillMode ? YB.drawElementsType(OB, 0, BB._linesIndexCount, this.forcedInstanceCount || GB) : QB ? YB.drawArraysType(OB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || GB) : YB.drawElementsType(OB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || GB), this
      }
      registerBeforeRender(BB) {
        return this.onBeforeRenderObservable.add(BB), this
      }
      unregisterBeforeRender(BB) {
        return this.onBeforeRenderObservable.removeCallback(BB), this
      }
      registerAfterRender(BB) {
        return this.onAfterRenderObservable.add(BB), this
      }
      unregisterAfterRender(BB) {
        return this.onAfterRenderObservable.removeCallback(BB), this
      }
      _getInstancesRenderList(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (OB) return GB.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[BB] = !1, GB.batchCacheReplacementModeInFrozenMode.renderSelf[BB] = !0, GB.batchCacheReplacementModeInFrozenMode;
          if (GB.previousBatch) return GB.previousBatch
        }
        const YB = this.JF(),
          DB = YB._isInIntermediateRendering(),
          QB = DB ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          oB = GB.batchCache;
        if (oB.mustReturn = !1, oB.renderSelf[BB] = OB || !QB && this.isEnabled() && this.isVisible, oB.visibleInstances[BB] = null, GB.visibleInstances && !OB) {
          const OB = GB.visibleInstances,
            QB = YB.getRenderId(),
            jB = DB ? OB.intermediateDefaultRenderId : OB.defaultRenderId;
          oB.visibleInstances[BB] = OB[QB], !oB.visibleInstances[BB] && jB && (oB.visibleInstances[BB] = OB[jB])
        }
        return oB.hardwareInstancedRendering[BB] = !OB && this._instanceDataStorage.hardwareInstancedRendering && null !== oB.visibleInstances[BB] && void 0 !== oB.visibleInstances[BB], GB.previousBatch = oB, oB
      }
      _updateInstancedBuffers(BB, OB, GB, YB, DB, QB) {
        const oB = OB.visibleInstances[BB._id],
          jB = oB ? oB.length : 0,
          yB = OB.parent,
          JB = this._instanceDataStorage;
        let MB = yB.instancesBuffer,
          PB = yB.instancesPreviousBuffer,
          zB = 0,
          lB = 0;
        const pB = OB.renderSelf[BB._id],
          qB = this._scene.floatingOriginOffset,
          ZB = !MB || GB !== yB.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !yB.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || JB.isFrozen && !ZB) lB = (pB ? 1 : 0) + jB;
        else {
          const OB = this.getWorldMatrix();
          if (pB) {
            this._scene.needsPreviousWorldMatrices && (JB.masterMeshPreviousWorldMatrix ? (JB.masterMeshPreviousWorldMatrix.copyToArray(yB.instancesPreviousData, zB), JB.masterMeshPreviousWorldMatrix.IU(OB)) : (JB.masterMeshPreviousWorldMatrix = OB.clone(), JB.masterMeshPreviousWorldMatrix.copyToArray(yB.instancesPreviousData, zB))), OB.copyToArray(yB.instancesData, zB);
            const BB = OB.dDB();
            yB.instancesData[zB + 12] = BB[12] - qB.x, yB.instancesData[zB + 13] = BB[13] - qB.y, yB.instancesData[zB + 14] = BB[14] - qB.z, zB += 16, lB++
          }
          if (oB) {
            if (sB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.cp()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
              const BB = this._scene.activeCamera.globalPosition;
              for (let OB = 0; OB < oB.length; OB++) {
                const GB = oB[OB];
                GB._distanceToCamera = UB.r.Distance(GB.Gw().xDB.centerWorld, BB)
              }
              oB.sort(((BB, OB) => BB._distanceToCamera > OB._distanceToCamera ? -1 : BB._distanceToCamera < OB._distanceToCamera ? 1 : 0))
            }
            for (let BB = 0; BB < oB.length; BB++) {
              const OB = oB[BB],
                GB = OB.getWorldMatrix();
              GB.copyToArray(yB.instancesData, zB), this._scene.needsPreviousWorldMatrices && (OB._previousWorldMatrix ? (OB._previousWorldMatrix.copyToArray(yB.instancesPreviousData, zB), OB._previousWorldMatrix.IU(GB)) : (OB._previousWorldMatrix = GB.clone(), OB._previousWorldMatrix.copyToArray(yB.instancesPreviousData, zB)));
              const YB = GB.dDB();
              yB.instancesData[zB + 12] = YB[12] - qB.x, yB.instancesData[zB + 13] = YB[13] - qB.y, yB.instancesData[zB + 14] = YB[14] - qB.z, zB += 16, lB++
            }
          }
        }
        if (ZB) {
          let BB;
          if (MB && MB.dispose(), PB && PB.dispose(), MB = new dB.c(YB, yB.instancesData, !0, 16, !1, !0), yB.instancesBuffer = MB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Lp().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) BB = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const OB = this._instanceDataStorage.engine.currentRenderPassId;
            BB = this._userInstancedBuffersStorage.renderPasses[OB], BB || (this._userInstancedBuffersStorage.renderPasses[OB] = BB = {})
          }
          BB.world0 = MB.createVertexBuffer("world0", 0, 4), BB.world1 = MB.createVertexBuffer("world1", 4, 4), BB.world2 = MB.createVertexBuffer("world2", 8, 4), BB.world3 = MB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (PB = new dB.c(YB, yB.instancesPreviousData, !0, 16, !1, !0), yB.instancesPreviousBuffer = PB, BB.previousWorld0 = PB.createVertexBuffer("previousWorld0", 0, 4), BB.previousWorld1 = PB.createVertexBuffer("previousWorld1", 4, 4), BB.previousWorld2 = PB.createVertexBuffer("previousWorld2", 8, 4), BB.previousWorld3 = PB.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (MB.updateDirectly(yB.instancesData, 0, lB), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || PB.updateDirectly(yB.instancesPreviousData, 0, lB));
        this._processInstancedBuffers(oB, pB), QB && void 0 !== DB && (this.JF()._activeIndices.addCount(BB.indexCount * lB, !1), YB._currentDrawContext && (YB._currentDrawContext.useInstancing = !0), this._bind(BB, QB, DB), this._draw(BB, DB, lB)), !this._scene.needsPreviousWorldMatrices || ZB || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || PB.updateDirectly(yB.instancesData, 0, lB)
      }
      _renderWithInstances(BB, OB, GB, YB, DB) {
        const QB = GB.visibleInstances[BB._id],
          oB = QB ? QB.length : 0,
          jB = GB.parent,
          yB = jB.instancesBufferSize,
          JB = 16 * (oB + 1) * 4;
        for (; jB.instancesBufferSize < JB;) jB.instancesBufferSize *= 2;
        return jB.instancesData && yB == jB.instancesBufferSize || (jB.instancesData = new Float32Array(jB.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !jB.instancesPreviousData || yB != jB.instancesBufferSize) && (jB.instancesPreviousData = new Float32Array(jB.instancesBufferSize / 4)), this._updateInstancedBuffers(BB, GB, yB, DB, OB, YB), DB.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(BB, OB, GB, YB) {
        const DB = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.JF()._activeIndices.addCount(BB.indexCount * DB, !1), YB._currentDrawContext && (YB._currentDrawContext.useInstancing = !0), this._bind(BB, GB, OB), this._draw(BB, OB, DB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, DB) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), YB.unbindInstanceAttributes()
      }
      _processInstancedBuffers(BB, OB) {}
      _processRendering(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = this.JF(),
          JB = yB.Lp();
        if (YB = this._getRenderingFillMode(YB), QB && OB.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(OB, YB, GB, JB), this;
        if (QB) this._renderWithInstances(OB, YB, DB, GB, JB);
        else {
          JB._currentDrawContext && (JB._currentDrawContext.useInstancing = !1);
          let GB = 0;
          DB.renderSelf[OB._id] && (oB && oB(!1, BB.getWorldMatrix(), jB), GB++, this._draw(OB, YB, this._instanceDataStorage.overridenInstanceCount));
          const QB = DB.visibleInstances[OB._id];
          if (QB) {
            const BB = QB.length;
            GB += BB;
            for (let GB = 0; GB < BB; GB++) {
              const BB = QB[GB].getWorldMatrix();
              oB && oB(!0, BB, jB), this._draw(OB, YB)
            }
          }
          yB._activeIndices.addCount(OB.indexCount * GB, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB?.instancesBuffer && (OB && BB.instancesBuffer.dispose(), BB.instancesBuffer = null), BB?.instancesPreviousBuffer && (OB && BB.instancesPreviousBuffer.dispose(), BB.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const OB in this._instanceDataStorage.renderPasses) {
          const GB = this._instanceDataStorage.renderPasses[OB];
          this._disposeInstanceDataStorageRenderPass(GB, BB)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, BB), this._userInstancedBuffersStorage) {
          for (const OB in this._userInstancedBuffersStorage.vertexBuffers) {
            const GB = this._userInstancedBuffersStorage.vertexBuffers[OB];
            GB && (BB && GB.dispose(), this._userInstancedBuffersStorage.vertexBuffers[OB] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(BB)
      }
      _releaseRenderPassId(BB) {
        const OB = this._instanceDataStorage.renderPasses[BB];
        if (OB && (this._disposeInstanceDataStorageRenderPass(OB, !0), delete this._instanceDataStorage.renderPasses[BB]), this._userInstancedBuffersStorage?.renderPasses) {
          const OB = this._userInstancedBuffersStorage.renderPasses[BB];
          if (OB)
            for (const BB in OB) OB[BB]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[BB]
        }
        const GB = this._userInstancedBuffersStorage?.interleavedBuffers;
        GB?.[BB] && (GB[BB].buffer.dispose(), delete GB[BB])
      }
      _freeze() {
        if (this.iW) {
          for (let BB = 0; BB < this.iW.length; BB++) this._getInstancesRenderList(BB);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const BB in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[BB].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const QB = this._scene.Lp(),
          oB = QB.currentRenderPassId;
        if (void 0 !== BB && (QB.currentRenderPassId = BB), YB)(!DB || DB && YB.isInFrustum(this._scene._frustumPlanes)) && this.render(YB, !!OB, GB);
        else
          for (let jB = 0; jB < this.iW.length; jB++) {
            const BB = this.iW[jB];
            (!DB || DB && BB.isInFrustum(this._scene._frustumPlanes)) && this.render(BB, !!OB, GB)
          }
        return void 0 !== BB && (QB.currentRenderPassId = oB), this
      }
      directRender() {
        if (!this.iW) return this;
        for (const BB of this.iW) this.render(BB, !1);
        return this
      }
      render(BB, OB, GB) {
        const YB = this.JF(),
          DB = YB.Lp();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const QB = YB.activeCameras?.length ?? 0,
          oB = QB > 1 && YB.activeCamera === YB.activeCameras[0] || QB <= 1,
          jB = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== DB.currentRenderPassId;
        if (oB && this._checkOcclusionQuery(jB) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const yB = this._getInstancesRenderList(BB._id, !!GB);
        if (yB.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let JB = 0,
          MB = null;
        this.ignoreCameraMaxZ && YB.activeCamera && !YB._isInIntermediateRendering() && (JB = YB.activeCamera.maxZ, MB = YB.activeCamera, YB.activeCamera.maxZ = 0, YB.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const PB = BB.getRenderingMesh(),
          zB = yB.hardwareInstancedRendering[BB._id] || PB.hasThinInstances || !!this._userInstancedBuffersStorage && !BB.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          lB = this._instanceDataStorage,
          pB = BB.cp();
        if (!pB) return MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), this;
        if (lB.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === pB) {
          if (pB._storeEffectOnSubMeshes && !BB._drawWrapper?._wasPreviouslyReady || !pB._storeEffectOnSubMeshes && !pB._getDrawWrapper()._wasPreviouslyReady) return MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), this
        } else {
          if (pB._storeEffectOnSubMeshes) {
            if (!pB.isReadyForSubMesh(this, BB, zB)) return MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), this
          } else if (!pB.isReady(this, zB)) return MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = pB
        }
        if (OB) {
          const BB = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === BB.alphaModes.length) DB.setAlphaMode(BB.alphaMode);
          else
            for (let OB = 0; OB < BB.alphaModes.length; OB++) {
              const GB = BB.alphaModes[OB];
              DB.setAlphaMode(void 0 !== GB ? GB : 2, !1, OB)
            }
        }
        let qB;
        qB = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? BB._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const ZB = qB?.effect ?? null;
        for (let nB = 0, UB = YB._beforeRenderingMeshStage; nB < UB.length; nB++) {
          UB[nB].action(this, BB, yB, ZB)
        }
        if (!qB || !ZB) return MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), this;
        const NB = GB || this;
        let RB;
        if (!lB.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const BB = NB._getWorldMatrixDeterminant();
          RB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (RB = RB === FB.b.ClockWiseSideOrientation ? FB.b.CounterClockWiseSideOrientation : FB.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = RB
        }
        const WB = this._internalMeshDataInfo._effectiveMaterial._preBind(qB, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && DB.setDepthWrite(!0);
        const AB = this._internalMeshDataInfo._effectiveMaterial,
          VB = AB.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), zB || this._bind(BB, ZB, VB, !1);
        const SB = NB.getWorldMatrix();
        AB._storeEffectOnSubMeshes ? AB.bindForSubMesh(SB, this, BB) : AB.bind(SB, this);
        try {
          iB.d._BindAttachmentsForEffect(DB, ZB) && (!AB.backFaceCulling && AB.separateCullingPass && (DB.setState(!0, AB.zOffset, !1, !WB, AB.cullBackFaces, AB.stencil, AB.zOffsetUnits), this._processRendering(this, BB, ZB, VB, yB, zB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), DB.setState(!0, AB.zOffset, !1, WB, AB.cullBackFaces, AB.stencil, AB.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(BB)), this._processRendering(this, BB, ZB, VB, yB, zB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          iB.d._RestoreAttachments(DB)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let nB = 0, UB = YB._afterRenderingMeshStage; nB < UB.length; nB++) {
          UB[nB].action(this, BB, yB, ZB)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), MB && (MB.maxZ = JB, YB.updateTransformMatrix(!0)), 2 !== YB.performancePriority || lB.isFrozen || this._freeze(), this
      }
      _renderRunFollower(BB, OB) {
        const GB = this._scene,
          YB = GB._engine;
        if (YB.isWebGPU || BB._mesh !== this || 0 !== this.instances.length || this.render !== sB.prototype.render) return !1;
        const DB = BB.cp();
        if (!DB || DB !== GB._cachedMaterial || void 0 === DB._canBindRunFollower) return !1;
        const QB = BB._drawWrapper,
          oB = QB?.effect;
        if (!oB || oB !== GB._cachedEffect || this.visibility !== GB._cachedVisibility || QB._forceRebindOnNextCall) return !1;
        const jB = this.hasThinInstances;
        if (!jB && this._userInstancedBuffersStorage) return !1;
        if (!QB._wasPreviouslyReady || QB._wasPreviouslyUsingInstances !== jB) return !1;
        const yB = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || GB._isInIntermediateRendering() || 0 !== GB._beforeRenderingMeshStage.length || 0 !== GB._afterRenderingMeshStage.length || yB._onBeforeRenderObservable?.hasObservers() || yB._onBeforeBindObservable?.hasObservers() || yB._onAfterRenderObservable?.hasObservers()) return !1;
        const JB = this.occlusionType;
        if (void 0 !== JB && JB !== mB.c.OCCLUSION_TYPE_NONE || !DB._canBindRunFollower(GB, YB, this, BB, oB)) return !1;
        const MB = this._internalAbstractMeshDataInfo,
          PB = MB._isActiveIntermediate;
        PB ? MB._isActiveIntermediate = !1 : MB._isActive = !1;
        const zB = GB.activeCameras?.length ?? 0;
        (zB > 1 && GB.activeCamera === GB.activeCameras[0] || zB <= 1) && this._checkOcclusionQuery(!1);
        const lB = this._getInstancesRenderList(BB._id);
        if (lB.mustReturn) return !0;
        if (!jB && !lB.renderSelf[BB._id]) return PB ? MB._isActiveIntermediate = !0 : MB._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (yB._effectiveMaterial = DB, OB)
          if (1 === DB.alphaModes.length) YB.setAlphaMode(DB.alphaMode);
          else
            for (let qB = 0; qB < DB.alphaModes.length; qB++) {
              const BB = DB.alphaModes[qB];
              YB.setAlphaMode(void 0 !== BB ? BB : 2, !1, qB)
            }
        if (DB.backFaceCulling || null !== DB.sideOrientation || DB._twoSidedLighting) {
          const BB = this._getWorldMatrixDeterminant();
          let OB = DB._getEffectiveOrientation(this);
          BB < 0 && (OB = OB === FB.b.ClockWiseSideOrientation ? FB.b.CounterClockWiseSideOrientation : FB.b.ClockWiseSideOrientation), yB._effectiveSideOrientation = OB
        }
        DB._preBind(QB, yB._effectiveSideOrientation), DB.forceDepthWrite && YB.setDepthWrite(!0);
        const pB = DB.fillMode;
        return jB || this._bind(BB, oB, pB, !1), DB._bindRunFollower(this.getWorldMatrix(), this, BB, oB), this._processRendering(this, BB, oB, pB, lB, jB, this._onBeforeDraw, DB), DB.unbind(), 2 === GB.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(dB.h.MatricesWeightsKind) && (this.isVerticesDataPresent(dB.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const BB = this.getVerticesData(dB.h.MatricesWeightsKind),
          OB = BB.length;
        for (let GB = 0; GB < OB; GB += 4) {
          const OB = BB[GB] + BB[GB + 1] + BB[GB + 2] + BB[GB + 3];
          if (0 === OB) BB[GB] = 1;
          else {
            const YB = 1 / OB;
            BB[GB] *= YB, BB[GB + 1] *= YB, BB[GB + 2] *= YB, BB[GB + 3] *= YB
          }
        }
        this.setVerticesData(dB.h.MatricesWeightsKind, BB)
      }
      _normalizeSkinWeightsAndExtra() {
        const BB = this.getVerticesData(dB.h.MatricesWeightsExtraKind),
          OB = this.getVerticesData(dB.h.MatricesWeightsKind),
          GB = OB.length;
        for (let YB = 0; YB < GB; YB += 4) {
          let GB = OB[YB] + OB[YB + 1] + OB[YB + 2] + OB[YB + 3];
          if (GB += BB[YB] + BB[YB + 1] + BB[YB + 2] + BB[YB + 3], 0 === GB) OB[YB] = 1;
          else {
            const DB = 1 / GB;
            OB[YB] *= DB, OB[YB + 1] *= DB, OB[YB + 2] *= DB, OB[YB + 3] *= DB, BB[YB] *= DB, BB[YB + 1] *= DB, BB[YB + 2] *= DB, BB[YB + 3] *= DB
          }
        }
        this.setVerticesData(dB.h.MatricesWeightsKind, OB), this.setVerticesData(dB.h.MatricesWeightsKind, BB)
      }
      validateSkinning() {
        const BB = this.getVerticesData(dB.h.MatricesWeightsExtraKind),
          OB = this.getVerticesData(dB.h.MatricesWeightsKind);
        if (null === OB || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          jP: "not skinned"
        };
        const GB = OB.length;
        let YB = 0,
          DB = 0,
          QB = 0,
          oB = 0;
        const jB = null === BB ? 4 : 8,
          yB = [];
        for (let lB = 0; lB <= jB; lB++) yB[lB] = 0;
        for (let lB = 0; lB < GB; lB += 4) {
          let GB = OB[lB],
            JB = GB,
            MB = 0 === JB ? 0 : 1;
          for (let DB = 1; DB < jB; DB++) {
            const QB = DB < 4 ? OB[lB + DB] : BB[lB + DB - 4];
            QB > GB && YB++, 0 !== QB && MB++, JB += QB, GB = QB
          }
          if (yB[MB]++, MB > QB && (QB = MB), 0 === JB) DB++;
          else {
            const GB = 1 / JB;
            let YB = 0;
            for (let DB = 0; DB < jB; DB++) YB += DB < 4 ? Math.abs(OB[lB + DB] - OB[lB + DB] * GB) : Math.abs(BB[lB + DB - 4] - BB[lB + DB - 4] * GB);
            YB > .001 && oB++
          }
        }
        const JB = this.skeleton.bones.length,
          MB = this.getVerticesData(dB.h.MatricesIndicesKind),
          PB = this.getVerticesData(dB.h.MatricesIndicesExtraKind);
        let zB = 0;
        for (let lB = 0; lB < GB; lB += 4)
          for (let BB = 0; BB < jB; BB++) {
            const OB = BB < 4 ? MB[lB + BB] : PB[lB + BB - 4];
            (OB >= JB || OB < 0) && zB++
          }
        return {
          skinned: !0,
          valid: 0 === DB && 0 === oB && 0 === zB,
          jP: "Number of Weights = " + GB / 4 + "\nMaximum influences = " + QB + "\nMissing Weights = " + DB + "\nNot Sorted = " + YB + "\nNot Normalized = " + oB + "\nWeightCounts = [" + yB + "]\nNumber of bones = " + JB + "\nBad Bone Indices = " + zB
        }
      }
      _checkDelayState() {
        const BB = this.JF();
        return this._geometry ? this._geometry.load(BB) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(BB)), this
      }
      _queueLoad(BB) {
        BB.addPendingData(this);
        const OB = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const GB = await BB._loadDelayedFileAsync(this.delayLoadingFile, OB, !0);
            GB instanceof ArrayBuffer ? this._delayLoadingFunction(GB, this) : this._delayLoadingFunction(JSON.parse(GB), this);
            for (const BB of this.instances) BB.refreshBoundingInfo(), BB._syncSubMeshes();
            this.delayLoadState = 1, BB.removePendingData(this)
          } catch (GB) {
            BB.removePendingData(this), BB.lV || XB.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${GB}`)
          }
        })(), this
      }
      isInFrustum(BB) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(BB) && (this._checkDelayState(), !0))
      }
      setMaterialById(BB) {
        const OB = this.JF().materials;
        let GB;
        for (GB = OB.length - 1; GB > -1; GB--)
          if (OB[GB].id === BB) return this.material = OB[GB], this;
        const YB = this.JF().multiMaterials;
        for (GB = YB.length - 1; GB > -1; GB--)
          if (YB[GB].id === BB) return this.material = YB[GB], this;
        return this
      }
      getAnimatables() {
        const BB = [];
        return this.material && BB.push(this.material), this.skeleton && BB.push(this.skeleton), BB
      }
      bakeTransformIntoVertices(BB) {
        if (!this.isVerticesDataPresent(dB.h.PositionKind)) return this;
        const OB = this.iW.splice(0);
        this._resetPointsArrayCache();
        let GB = this.getVerticesData(dB.h.PositionKind);
        const YB = UB.r.Zero();
        let DB;
        for (DB = 0; DB < GB.length; DB += 3) UB.r.TransformCoordinatesFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).toArray(GB, DB);
        if (this.setVerticesData(dB.h.PositionKind, GB, this.getVertexBuffer(dB.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(dB.h.NormalKind)) {
          for (GB = this.getVerticesData(dB.h.NormalKind), DB = 0; DB < GB.length; DB += 3) UB.r.TransformNormalFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).normalize().toArray(GB, DB);
          this.setVerticesData(dB.h.NormalKind, GB, this.getVertexBuffer(dB.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(dB.h.TangentKind)) {
          for (GB = this.getVerticesData(dB.h.TangentKind), DB = 0; DB < GB.length; DB += 4) UB.r.TransformNormalFromFloatsToRef(GB[DB], GB[DB + 1], GB[DB + 2], BB, YB).normalize().toArray(GB, DB);
          this.setVerticesData(dB.h.TangentKind, GB, this.getVertexBuffer(dB.h.TangentKind).isUpdatable())
        }
        return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.iW = OB, this
      }
      bakeCurrentTransformIntoVertices() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(BB), this
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (OB && void 0 === OB._addToSceneRootNodes) {
          const GB = OB;
          return vB.source = this, vB.doNotCloneChildren = GB.doNotCloneChildren, vB.clonePhysicsImpostor = GB.clonePhysicsImpostor, vB.cloneThinInstances = GB.cloneThinInstances, new sB(BB, this.JF(), vB)
        }
        return new sB(BB, this.JF(), OB, this, GB, YB)
      }
      dispose(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const GB = this._internalMeshDataInfo;
        if (GB._onBeforeDrawObservable && GB._onBeforeDrawObservable.clear(), GB._onBeforeBindObservable && GB._onBeforeBindObservable.clear(), GB._onBeforeRenderObservable && GB._onBeforeRenderObservable.clear(), GB._onAfterRenderObservable && GB._onAfterRenderObservable.clear(), GB._onBetweenPassObservable && GB._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (GB.meshMap)
            for (const BB in GB.meshMap) {
              const OB = GB.meshMap[BB];
              OB && (OB._internalMeshDataInfo._source = null, GB.meshMap[BB] = void 0)
            }
          GB._source && GB._source._internalMeshDataInfo.meshMap && (GB._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const BB = this.JF().meshes;
          for (const OB of BB) {
            const BB = OB;
            BB._internalMeshDataInfo && BB._internalMeshDataInfo._source && BB._internalMeshDataInfo._source === this && (BB._internalMeshDataInfo._source = null)
          }
        }
        GB._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(BB, OB)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(BB, OB, GB, YB, DB, QB) {
        let oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jB = arguments.length > 7 ? arguments[7] : void 0;
        const yB = this.JF();
        return (0, WB.n)(BB, (BB => {
          const jB = BB.width,
            yB = BB.height,
            JB = this.Lp().createCanvas(jB, yB).getContext("2d");
          JB.drawImage(BB, 0, 0);
          const MB = JB.getImageData(0, 0, jB, yB).data;
          this.applyDisplacementMapFromBuffer(MB, jB, yB, OB, GB, DB, QB, oB), YB && YB(this)
        }), jB || (() => {}), yB.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(BB, OB, GB, YB, DB, QB, oB) {
        let jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(dB.h.PositionKind) || !this.isVerticesDataPresent(dB.h.NormalKind) || !this.isVerticesDataPresent(dB.h.UVKind)) return XB.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const yB = this.getVerticesData(dB.h.PositionKind, !0, !0),
          JB = this.getVerticesData(dB.h.NormalKind),
          MB = this.getVerticesData(dB.h.UVKind);
        let PB = UB.r.Zero();
        const zB = UB.r.Zero(),
          lB = UB.o.Zero();
        QB = QB || UB.o.Zero(), oB = oB || new UB.o(1, 1);
        for (let pB = 0; pB < yB.length; pB += 3) {
          UB.r.FromArrayToRef(yB, pB, PB), UB.r.FromArrayToRef(JB, pB, zB), UB.o.FromArrayToRef(MB, pB / 3 * 2, lB);
          const jB = 4 * ((Math.abs(lB.x * oB.x + QB.x % 1) * (OB - 1) % OB | 0) + (Math.abs(lB.y * oB.y + QB.y % 1) * (GB - 1) % GB | 0) * OB),
            qB = .3 * (BB[jB] / 255) + .59 * (BB[jB + 1] / 255) + .11 * (BB[jB + 2] / 255);
          zB.normalize(), zB.scaleInPlace(YB + (DB - YB) * qB), PB = PB.add(zB), PB.toArray(yB, pB)
        }
        return KB.e.ComputeNormals(yB, this.KDB(), JB), jB ? (this.setVerticesData(dB.h.PositionKind, yB), this.setVerticesData(dB.h.NormalKind, JB), this.setVerticesData(dB.h.UVKind, MB)) : (this.updateVerticesData(dB.h.PositionKind, yB), this.updateVerticesData(dB.h.NormalKind, JB)), this
      }
      _getFlattenedNormals(BB, OB) {
        const GB = new Float32Array(3 * BB.length);
        let YB = 0;
        const DB = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let QB = 0; QB < BB.length; QB += 3) {
          const oB = UB.r.FromArray(OB, 3 * BB[QB]),
            jB = UB.r.FromArray(OB, 3 * BB[QB + 1]),
            yB = UB.r.FromArray(OB, 3 * BB[QB + 2]),
            JB = oB.subtract(jB),
            MB = yB.subtract(jB),
            PB = UB.r.Normalize(UB.r.Cross(JB, MB));
          DB && PB.scaleInPlace(-1);
          for (let BB = 0; BB < 3; BB++) GB[YB++] = PB.x, GB[YB++] = PB.y, GB[YB++] = PB.z
        }
        return GB
      }
      _convertToUnIndexedMesh() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = this.getVerticesDataKinds().filter((BB => !this.getVertexBuffer(BB)?.getIsInstanced())),
          GB = this.KDB(!1, !0),
          YB = {},
          DB = (BB, OB) => {
            const YB = new Float32Array(GB.length * OB);
            let DB = 0;
            for (let QB = 0; QB < GB.length; QB++)
              for (let oB = 0; oB < OB; oB++) YB[DB++] = BB[GB[QB] * OB + oB];
            return YB
          },
          QB = this.Gw(),
          oB = this.geometry ? this.iW.slice(0) : [];
        for (const jB of OB) YB[jB] = this.getVerticesData(jB);
        for (const jB of OB) {
          const OB = this.getVertexBuffer(jB),
            QB = OB.getSize();
          if (BB && jB === dB.h.NormalKind) {
            const BB = this._getFlattenedNormals(GB, YB[dB.h.PositionKind]);
            this.setVerticesData(dB.h.NormalKind, BB, OB.isUpdatable(), QB)
          } else this.setVerticesData(jB, DB(YB[jB], QB), OB.isUpdatable(), QB)
        }
        if (this.morphTargetManager) {
          for (let OB = 0; OB < this.morphTargetManager.numTargets; OB++) {
            const YB = this.morphTargetManager.getTarget(OB),
              QB = YB.getPositions();
            YB.DyB(DB(QB, 3));
            const oB = YB.getNormals();
            oB && YB.setNormals(BB ? this._getFlattenedNormals(GB, QB) : DB(oB, 3));
            const jB = YB.getTangents();
            jB && YB.setTangents(DB(jB, 3));
            const yB = YB.getUVs();
            yB && YB.setUVs(DB(yB, 2));
            const JB = YB.getColors();
            JB && YB.setColors(DB(JB, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let jB = 0; jB < GB.length; jB++) GB[jB] = jB;
        this.setIndices(GB), this._unIndexed = !0, this.releaseSubMeshes();
        for (const jB of oB) {
          const BB = jB.Gw();
          IB.c.AddToMesh(jB.materialIndex, jB.indexStart, jB.indexCount, jB.indexStart, jB.indexCount, this).setBoundingInfo(BB)
        }
        return this.setBoundingInfo(QB), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = KB.e.ExtractFromMesh(this);
        let GB;
        if (BB && this.isVerticesDataPresent(dB.h.NormalKind) && OB.normals) {
          for (GB = 0; GB < OB.normals.length; GB++) OB.normals[GB] *= -1;
          this.setVerticesData(dB.h.NormalKind, OB.normals, this.isVertexBufferUpdatable(dB.h.NormalKind))
        }
        if (OB.indices) {
          let BB;
          for (GB = 0; GB < OB.indices.length; GB += 3) BB = OB.indices[GB + 1], OB.indices[GB + 1] = OB.indices[GB + 2], OB.indices[GB + 2] = BB;
          this.setIndices(OB.indices, null, this.isVertexBufferUpdatable(dB.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const OB = KB.e.ExtractFromMesh(this),
          GB = OB.indices && !Array.isArray(OB.indices) && Array.from ? Array.from(OB.indices) : OB.indices,
          YB = OB.positions && !Array.isArray(OB.positions) && Array.from ? Array.from(OB.positions) : OB.positions,
          DB = OB.uvs && !Array.isArray(OB.uvs) && Array.from ? Array.from(OB.uvs) : OB.uvs,
          QB = OB.normals && !Array.isArray(OB.normals) && Array.from ? Array.from(OB.normals) : OB.normals;
        if (GB && YB) {
          OB.indices = GB, OB.positions = YB, DB && (OB.uvs = DB), QB && (OB.normals = QB);
          const oB = BB + 1,
            jB = [];
          for (let BB = 0; BB < oB + 1; BB++) jB[BB] = [];
          let yB, JB;
          const MB = new UB.r(0, 0, 0),
            PB = new UB.r(0, 0, 0),
            zB = new UB.o(0, 0),
            lB = [],
            pB = [],
            qB = [];
          let ZB, NB, RB, WB = YB.length;
          DB && (NB = DB.length), QB && (RB = QB.length);
          for (let BB = 0; BB < GB.length; BB += 3) {
            pB[0] = GB[BB], pB[1] = GB[BB + 1], pB[2] = GB[BB + 2];
            for (let BB = 0; BB < 3; BB++)
              if (yB = pB[BB], JB = pB[(BB + 1) % 3], void 0 === qB[yB] && void 0 === qB[JB] ? (qB[yB] = [], qB[JB] = []) : (void 0 === qB[yB] && (qB[yB] = []), void 0 === qB[JB] && (qB[JB] = [])), void 0 === qB[yB][JB] && void 0 === qB[JB][yB]) {
                qB[yB][JB] = [], MB.x = (YB[3 * JB] - YB[3 * yB]) / oB, MB.y = (YB[3 * JB + 1] - YB[3 * yB + 1]) / oB, MB.z = (YB[3 * JB + 2] - YB[3 * yB + 2]) / oB, QB && (PB.x = (QB[3 * JB] - QB[3 * yB]) / oB, PB.y = (QB[3 * JB + 1] - QB[3 * yB + 1]) / oB, PB.z = (QB[3 * JB + 2] - QB[3 * yB + 2]) / oB), DB && (zB.x = (DB[2 * JB] - DB[2 * yB]) / oB, zB.y = (DB[2 * JB + 1] - DB[2 * yB + 1]) / oB), qB[yB][JB].push(yB);
                for (let BB = 1; BB < oB; BB++) qB[yB][JB].push(YB.length / 3), YB[WB++] = YB[3 * yB] + BB * MB.x, YB[WB++] = YB[3 * yB + 1] + BB * MB.y, YB[WB++] = YB[3 * yB + 2] + BB * MB.z, QB && (QB[RB++] = QB[3 * yB] + BB * PB.x, QB[RB++] = QB[3 * yB + 1] + BB * PB.y, QB[RB++] = QB[3 * yB + 2] + BB * PB.z), DB && (DB[NB++] = DB[2 * yB] + BB * zB.x, DB[NB++] = DB[2 * yB + 1] + BB * zB.y);
                qB[yB][JB].push(JB), qB[JB][yB] = [], ZB = qB[yB][JB].length;
                for (let BB = 0; BB < ZB; BB++) qB[JB][yB][BB] = qB[yB][JB][ZB - 1 - BB]
              } jB[0][0] = GB[BB], jB[1][0] = qB[GB[BB]][GB[BB + 1]][1], jB[1][1] = qB[GB[BB]][GB[BB + 2]][1];
            for (let OB = 2; OB < oB; OB++) {
              jB[OB][0] = qB[GB[BB]][GB[BB + 1]][OB], jB[OB][OB] = qB[GB[BB]][GB[BB + 2]][OB], MB.x = (YB[3 * jB[OB][OB]] - YB[3 * jB[OB][0]]) / OB, MB.y = (YB[3 * jB[OB][OB] + 1] - YB[3 * jB[OB][0] + 1]) / OB, MB.z = (YB[3 * jB[OB][OB] + 2] - YB[3 * jB[OB][0] + 2]) / OB, QB && (PB.x = (QB[3 * jB[OB][OB]] - QB[3 * jB[OB][0]]) / OB, PB.y = (QB[3 * jB[OB][OB] + 1] - QB[3 * jB[OB][0] + 1]) / OB, PB.z = (QB[3 * jB[OB][OB] + 2] - QB[3 * jB[OB][0] + 2]) / OB), DB && (zB.x = (DB[2 * jB[OB][OB]] - DB[2 * jB[OB][0]]) / OB, zB.y = (DB[2 * jB[OB][OB] + 1] - DB[2 * jB[OB][0] + 1]) / OB);
              for (let BB = 1; BB < OB; BB++) jB[OB][BB] = YB.length / 3, YB[WB++] = YB[3 * jB[OB][0]] + BB * MB.x, YB[WB++] = YB[3 * jB[OB][0] + 1] + BB * MB.y, YB[WB++] = YB[3 * jB[OB][0] + 2] + BB * MB.z, QB && (QB[RB++] = QB[3 * jB[OB][0]] + BB * PB.x, QB[RB++] = QB[3 * jB[OB][0] + 1] + BB * PB.y, QB[RB++] = QB[3 * jB[OB][0] + 2] + BB * PB.z), DB && (DB[NB++] = DB[2 * jB[OB][0]] + BB * zB.x, DB[NB++] = DB[2 * jB[OB][0] + 1] + BB * zB.y)
            }
            jB[oB] = qB[GB[BB + 1]][GB[BB + 2]], lB.push(jB[0][0], jB[1][0], jB[1][1]);
            for (let BB = 1; BB < oB; BB++) {
              let OB;
              for (OB = 0; OB < BB; OB++) lB.push(jB[BB][OB], jB[BB + 1][OB], jB[BB + 1][OB + 1]), lB.push(jB[BB][OB], jB[BB + 1][OB + 1], jB[BB][OB + 1]);
              lB.push(jB[BB][OB], jB[BB + 1][OB], jB[BB + 1][OB + 1])
            }
          }
          OB.indices = lB, OB.applyToMesh(this, this.isVertexBufferUpdatable(dB.h.PositionKind))
        } else XB.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const BB = KB.e.ExtractFromMesh(this),
          OB = BB.uvs,
          GB = BB.indices,
          YB = BB.positions,
          DB = BB.colors,
          QB = BB.matricesIndices,
          oB = BB.matricesWeights,
          jB = BB.matricesIndicesExtra,
          yB = BB.matricesWeightsExtra;
        if (void 0 === GB || void 0 === YB || null === GB || null === YB) XB.b.Warn("VertexData contains empty entries");
        else {
          const JB = [],
            MB = [],
            PB = [],
            zB = [],
            lB = [],
            pB = [],
            qB = [],
            ZB = [];
          let NB, RB = 0;
          const WB = {};
          let AB, VB;
          for (let BB = 0; BB < GB.length; BB += 3) {
            VB = [GB[BB], GB[BB + 1], GB[BB + 2]], NB = [];
            for (let BB = 0; BB < 3; BB++) {
              NB[BB] = "";
              for (let OB = 0; OB < 3; OB++) Math.abs(YB[3 * VB[BB] + OB]) < 1e-8 && (YB[3 * VB[BB] + OB] = 0), NB[BB] += YB[3 * VB[BB] + OB] + "|"
            }
            if (NB[0] != NB[1] && NB[0] != NB[2] && NB[1] != NB[2])
              for (let BB = 0; BB < 3; BB++) {
                if (AB = WB[NB[BB]], void 0 === AB) {
                  WB[NB[BB]] = RB, AB = RB++;
                  for (let OB = 0; OB < 3; OB++) JB.push(YB[3 * VB[BB] + OB]);
                  if (null !== DB && void 0 !== DB)
                    for (let OB = 0; OB < 4; OB++) zB.push(DB[4 * VB[BB] + OB]);
                  if (null !== OB && void 0 !== OB)
                    for (let GB = 0; GB < 2; GB++) PB.push(OB[2 * VB[BB] + GB]);
                  if (null !== QB && void 0 !== QB)
                    for (let OB = 0; OB < 4; OB++) lB.push(QB[4 * VB[BB] + OB]);
                  if (null !== oB && void 0 !== oB)
                    for (let OB = 0; OB < 4; OB++) pB.push(oB[4 * VB[BB] + OB]);
                  if (null !== jB && void 0 !== jB)
                    for (let OB = 0; OB < 4; OB++) qB.push(jB[4 * VB[BB] + OB]);
                  if (null !== yB && void 0 !== yB)
                    for (let OB = 0; OB < 4; OB++) ZB.push(yB[4 * VB[BB] + OB])
                }
                MB.push(AB)
              }
          }
          const SB = [];
          KB.e.ComputeNormals(JB, MB, SB), BB.positions = JB, BB.indices = MB, BB.normals = SB, null !== OB && void 0 !== OB && (BB.uvs = PB), null !== DB && void 0 !== DB && (BB.colors = zB), null !== QB && void 0 !== QB && (BB.matricesIndices = lB), null !== oB && void 0 !== oB && (BB.matricesWeights = pB), null !== jB && void 0 !== jB && (BB.matricesIndicesExtra = qB), null !== oB && void 0 !== oB && (BB.matricesWeightsExtra = ZB), BB.applyToMesh(this, this.isVertexBufferUpdatable(dB.h.PositionKind))
        }
      }
      static _instancedMeshFactory(BB, OB) {
        throw (0, EB.j)("InstancedMesh")
      }
      static _PhysicsImpostorParser(BB, OB, GB) {
        throw (0, EB.j)("PhysicsImpostor")
      }
      createInstance(BB) {
        const OB = sB._instancedMeshFactory(BB, this);
        return OB.parent = this.parent, OB
      }
      synchronizeInstances() {
        for (let BB = 0; BB < this.instances.length; BB++) {
          this.instances[BB]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(BB) {
        const OB = this.KDB(),
          GB = this.getVerticesData(dB.h.PositionKind);
        if (!GB || !OB) return this;
        const YB = [];
        for (let QB = 0; QB < GB.length; QB += 3) YB.push(UB.r.FromArray(GB, QB));
        const DB = [];
        return RB.b.SyncAsyncForLoop(YB.length, 40, (BB => {
          const OB = YB.length - 1 - BB,
            GB = YB[OB];
          for (let QB = 0; QB < OB; ++QB) {
            const BB = YB[QB];
            if (GB.equals(BB)) {
              DB[OB] = QB;
              break
            }
          }
        }), (() => {
          for (let BB = 0; BB < OB.length; ++BB) OB[BB] = DB[OB[BB]] || OB[BB];
          const GB = this.iW.slice(0);
          this.setIndices(OB), this.iW = GB, BB && BB(this)
        })), this
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), VB.e && VB.e.HasTags(this) && (BB.tags = VB.e.GetTags(this)), BB.position = this.position.dDB(), this.rotationQuaternion ? BB.rotationQuaternion = this.rotationQuaternion.dDB() : this.rotation && (BB.rotation = this.rotation.dDB()), BB.SP = this.SP.dDB(), this._postMultiplyPivotMatrix ? BB.pivotMatrix = this.getPivotMatrix().dDB() : BB.localMatrix = this.getPivotMatrix().dDB(), BB.isEnabled = this.isEnabled(!1), BB.isVisible = this.isVisible, BB.infiniteDistance = this.infiniteDistance, BB.pickable = this.bq, BB.receiveShadows = this.receiveShadows, BB.billboardMode = this.billboardMode, BB.visibility = this.visibility, BB.rp = this.rp, BB.checkCollisions = this.checkCollisions, BB.ellipsoid = this.ellipsoid.dDB(), BB.ellipsoidOffset = this.ellipsoidOffset.dDB(), BB.Ep = this.Ep, BB.isBlocker = this.isBlocker, BB.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (BB.mF = !0), this.parent && this.parent._serializeAsParent(BB), BB.isUnIndexed = this.isUnIndexed;
        const OB = this._geometry;
        if (OB && this.iW) {
          BB.geometryUniqueId = OB.uniqueId, BB.geometryId = OB.id, BB.iW = [];
          for (let OB = 0; OB < this.iW.length; OB++) {
            const GB = this.iW[OB];
            BB.iW.push({
              materialIndex: GB.materialIndex,
              verticesStart: GB.verticesStart,
              verticesCount: GB.verticesCount,
              indexStart: GB.indexStart,
              indexCount: GB.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (BB.materialUniqueId = this.material.uniqueId, BB.materialId = this.material.id) : (this.material = null, BB.materialUniqueId = this._scene.defaultMaterial.uniqueId, BB.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (BB.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (BB.skeletonId = this.skeleton.id, BB.skeletonUniqueId = this.skeleton.uniqueId, BB.numBoneInfluencers = this.numBoneInfluencers), this.JF()._getComponent(cB.b.NAME_PHYSICSENGINE)) {
          const OB = this.getPhysicsImpostor?.();
          OB && (BB.physicsMass = OB.getParam("Wy"), BB.physicsFriction = OB.getParam("friction"), BB.physicsRestitution = OB.getParam("Wy"), BB.physicsImpostor = OB.type)
        }
        this.metadata && (BB.metadata = this.metadata), 0 !== this.meshBlendingTag && (BB.meshBlendingTag = this.meshBlendingTag), BB.instances = [];
        for (let GB = 0; GB < this.instances.length; GB++) {
          const OB = this.instances[GB];
          if (OB.doNotSerialize) continue;
          const YB = {
            name: OB.name,
            id: OB.id,
            isEnabled: OB.isEnabled(!1),
            isVisible: OB.isVisible,
            bq: OB.bq,
            checkCollisions: OB.checkCollisions,
            position: OB.position.dDB(),
            SP: OB.SP.dDB()
          };
          if (OB.parent && OB.parent._serializeAsParent(YB), OB.rotationQuaternion ? YB.rotationQuaternion = OB.rotationQuaternion.dDB() : OB.rotation && (YB.rotation = OB.rotation.dDB()), this.JF()._getComponent(cB.b.NAME_PHYSICSENGINE)) {
            const BB = OB.getPhysicsImpostor?.();
            BB && (YB.physicsMass = BB.getParam("Wy"), YB.physicsFriction = BB.getParam("friction"), YB.physicsRestitution = BB.getParam("Wy"), YB.physicsImpostor = BB.type)
          }
          OB.metadata && (YB.metadata = OB.metadata), OB.actionManager && (YB.actions = OB.actionManager.serialize(OB.name)), BB.instances.push(YB), rB.d.AppendSerializedAnimations(OB, YB), YB.JZ = OB.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (BB.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.HGB
          }, this._userThinInstanceBuffersStorage)) {
          const OB = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const BB in this._userThinInstanceBuffersStorage.data) OB.data[BB] = Array.from(this._userThinInstanceBuffersStorage.data[BB]), OB.sizes[BB] = this._userThinInstanceBuffersStorage.sizes[BB], OB.strides[BB] = this._userThinInstanceBuffersStorage.strides[BB];
          BB.thinInstances.userThinInstance = OB
        }
        return rB.d.AppendSerializedAnimations(this, BB), BB.JZ = this.serializeAnimationRanges(), BB.layerMask = this.layerMask, BB.alphaIndex = this.alphaIndex, BB.hasVertexAlpha = this.hasVertexAlpha, BB.overlayAlpha = this.overlayAlpha, BB.overlayColor = this.overlayColor.dDB(), BB.renderOverlay = this.renderOverlay, BB.applyFog = this.applyFog, this.actionManager && (BB.actions = this.actionManager.serialize(this.name)), BB
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const BB = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (BB && BB.vertexCount) {
          if (BB.vertexCount !== this.getTotalVertices()) return XB.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (BB.isUsingTextureForTargets) return;
          for (let OB = 0; OB < BB.numInfluencers; OB++) {
            const GB = BB.getActiveTarget(OB),
              YB = GB.getPositions();
            if (!YB) return void XB.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(dB.h.PositionKind + OB, YB, !1, 3);
            const DB = GB.getNormals();
            DB && this.geometry.setVerticesData(dB.h.NormalKind + OB, DB, !1, 3);
            const QB = GB.getTangents();
            QB && this.geometry.setVerticesData(dB.h.TangentKind + OB, QB, !1, 3);
            const oB = GB.getUVs();
            oB && this.geometry.setVerticesData(dB.h.UVKind + "_" + OB, oB, !1, 2);
            const jB = GB.getUV2s();
            jB && this.geometry.setVerticesData(dB.h.UV2Kind + "_" + OB, jB, !1, 2);
            const yB = GB.getColors();
            yB && this.geometry.setVerticesData(dB.h.ColorKind + OB, yB, !1, 4)
          }
        } else {
          let BB = 0;
          for (; this.geometry.isVerticesDataPresent(dB.h.PositionKind + BB);) this.geometry.removeVerticesData(dB.h.PositionKind + BB), this.geometry.isVerticesDataPresent(dB.h.NormalKind + BB) && this.geometry.removeVerticesData(dB.h.NormalKind + BB), this.geometry.isVerticesDataPresent(dB.h.TangentKind + BB) && this.geometry.removeVerticesData(dB.h.TangentKind + BB), this.geometry.isVerticesDataPresent(dB.h.UVKind + "_" + BB) && this.geometry.removeVerticesData(dB.h.UVKind + "_" + BB), this.geometry.isVerticesDataPresent(dB.h.UV2Kind + "_" + BB) && this.geometry.removeVerticesData(dB.h.UV2Kind + "_" + BB), this.geometry.isVerticesDataPresent(dB.h.ColorKind + BB) && this.geometry.removeVerticesData(dB.h.ColorKind + BB), BB++
        }
      }
      static Parse(BB, OB, GB) {
        let YB, DB = !1;
        if (BB.type && "LinesMesh" === BB.type ? YB = sB._LinesMeshParser(BB, OB) : BB.type && "GroundMesh" === BB.type ? YB = sB._GroundMeshParser(BB, OB) : BB.type && "GoldbergMesh" === BB.type ? YB = sB._GoldbergMeshParser(BB, OB) : BB.type && "GreasedLineMesh" === BB.type ? YB = sB._GreasedLineMeshParser(BB, OB) : BB.type && "TrailMesh" === BB.type ? YB = sB._TrailMeshParser(BB, OB) : BB.type && "GaussianSplattingMesh" === BB.type ? (YB = BB._isCompound ? sB._GaussianSplattingCompoundMeshParser(BB, OB) : sB._GaussianSplattingMeshParser(BB, OB), DB = !0) : BB.type && "GaussianSplattingPartProxyMesh" === BB.type ? (YB = sB._GaussianSplattingPartProxyMeshParser(BB, OB), DB = !0) : YB = new sB(BB.name, OB), YB.id = BB.id, YB._waitingParsedUniqueId = BB.uniqueId, VB.e && VB.e.AddTagsTo(YB, BB.tags), YB.position = UB.r.FromArray(BB.position), void 0 !== BB.metadata && (YB.metadata = BB.metadata), void 0 !== BB.meshBlendingTag && (YB.meshBlendingTag = BB.meshBlendingTag), BB.rotationQuaternion ? YB.rotationQuaternion = UB.f.FromArray(BB.rotationQuaternion) : BB.rotation && (YB.rotation = UB.r.FromArray(BB.rotation)), YB.SP = UB.r.FromArray(BB.SP), BB.localMatrix ? YB.setPreTransformMatrix(UB.d.FromArray(BB.localMatrix)) : BB.pivotMatrix && YB.setPivotMatrix(UB.d.FromArray(BB.pivotMatrix)), YB.Zk(BB.isEnabled), YB.isVisible = BB.isVisible, YB.infiniteDistance = BB.infiniteDistance, YB.rp = !!BB.rp, YB.showBoundingBox = BB.showBoundingBox, YB.showSubMeshesBoundingBox = BB.showSubMeshesBoundingBox, void 0 !== BB.applyFog && (YB.applyFog = BB.applyFog), void 0 !== BB.pickable && (YB.bq = BB.pickable), void 0 !== BB.alphaIndex && (YB.alphaIndex = BB.alphaIndex), YB.receiveShadows = BB.receiveShadows, void 0 !== BB.billboardMode && (YB.billboardMode = BB.billboardMode), void 0 !== BB.visibility && (YB.visibility = BB.visibility), YB.checkCollisions = BB.checkCollisions, YB.Ep = !!BB.Ep, BB.ellipsoid && (YB.ellipsoid = UB.r.FromArray(BB.ellipsoid)), BB.ellipsoidOffset && (YB.ellipsoidOffset = UB.r.FromArray(BB.ellipsoidOffset)), null != BB.overrideMaterialSideOrientation && (YB.sideOrientation = BB.overrideMaterialSideOrientation), void 0 !== BB.sideOrientation && (YB.sideOrientation = BB.sideOrientation), void 0 !== BB.isBlocker && (YB.isBlocker = BB.isBlocker), YB._shouldGenerateFlatShading = BB.useFlatShading, BB.mF && (YB._waitingData.mF = BB.mF), void 0 !== BB.parentId && (YB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (YB._waitingParentInstanceIndex = BB.parentInstanceIndex), void 0 !== BB.actions && (YB._waitingData.actions = BB.actions), void 0 !== BB.overlayAlpha && (YB.overlayAlpha = BB.overlayAlpha), void 0 !== BB.overlayColor && (YB.overlayColor = fB.c.FromArray(BB.overlayColor)), void 0 !== BB.renderOverlay && (YB.renderOverlay = BB.renderOverlay), YB.isUnIndexed = !!BB.isUnIndexed, YB.hasVertexAlpha = BB.hasVertexAlpha, BB.delayLoadingFile ? (YB.delayLoadState = 4, YB.delayLoadingFile = GB + BB.delayLoadingFile, YB.buildBoundingInfo(UB.r.FromArray(BB.boundingBoxMinimum), UB.r.FromArray(BB.boundingBoxMaximum)), BB._binaryInfo && (YB._binaryInfo = BB._binaryInfo), YB._delayInfo = [], BB.hasUVs && YB._delayInfo.push(dB.h.UVKind), BB.hasUVs2 && YB._delayInfo.push(dB.h.UV2Kind), BB.hasUVs3 && YB._delayInfo.push(dB.h.UV3Kind), BB.hasUVs4 && YB._delayInfo.push(dB.h.UV4Kind), BB.hasUVs5 && YB._delayInfo.push(dB.h.UV5Kind), BB.hasUVs6 && YB._delayInfo.push(dB.h.UV6Kind), BB.hasColors && YB._delayInfo.push(dB.h.ColorKind), BB.hasMatricesIndices && YB._delayInfo.push(dB.h.MatricesIndicesKind), BB.hasMatricesWeights && YB._delayInfo.push(dB.h.MatricesWeightsKind), YB._delayLoadingFunction = uB.d._ImportGeometry, gB.c.ForceFullSceneLoadingForIncremental && YB._checkDelayState()) : DB || uB.d._ImportGeometry(BB, YB), BB.materialUniqueId ? YB._waitingMaterialId = BB.materialUniqueId : BB.materialId && (YB._waitingMaterialId = BB.materialId), BB.morphTargetManagerId > -1 && (YB._waitingMorphTargetManagerId = BB.morphTargetManagerId), void 0 !== BB.skeletonId && null !== BB.skeletonId && (YB.skeleton = OB.getLastSkeletonById(BB.skeletonId), YB._waitingSkeletonId = BB.skeletonId, BB.numBoneInfluencers && (YB.numBoneInfluencers = BB.numBoneInfluencers)), void 0 !== BB.skeletonUniqueId && null !== BB.skeletonUniqueId && (YB._waitingSkeletonUniqueId = BB.skeletonUniqueId), BB.animations) {
          for (let OB = 0; OB < BB.animations.length; OB++) {
            const GB = BB.animations[OB],
              DB = (0, wB.c)("BABYLON.Animation");
            DB && YB.animations.push(DB.Parse(GB))
          }
          kB.b.ParseAnimationRanges(YB, BB, OB)
        }
        if (BB.autoAnimate && OB.beginAnimation(YB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), BB.layerMask && !isNaN(BB.layerMask) ? YB.layerMask = Math.abs(parseInt(BB.layerMask)) : YB.layerMask = 268435455, BB.physicsImpostor && (YB.physicsImpostor = sB._PhysicsImpostorParser(OB, YB, BB)), BB.lodMeshIds && (YB._waitingData.lods = {
            ids: BB.lodMeshIds,
            distances: BB.lodDistances ? BB.lodDistances : null,
            coverages: BB.lodCoverages ? BB.lodCoverages : null
          }), BB.instances)
          for (let QB = 0; QB < BB.instances.length; QB++) {
            const GB = BB.instances[QB],
              DB = YB.createInstance(GB.name);
            if (GB.id && (DB.id = GB.id), VB.e && (GB.tags ? VB.e.AddTagsTo(DB, GB.tags) : VB.e.AddTagsTo(DB, BB.tags)), DB.position = UB.r.FromArray(GB.position), void 0 !== GB.metadata && (DB.metadata = GB.metadata), void 0 !== GB.parentId && (DB._waitingParentId = GB.parentId), void 0 !== GB.parentInstanceIndex && (DB._waitingParentInstanceIndex = GB.parentInstanceIndex), void 0 !== GB.isEnabled && null !== GB.isEnabled && DB.Zk(GB.isEnabled), void 0 !== GB.isVisible && null !== GB.isVisible && (DB.isVisible = GB.isVisible), void 0 !== GB.bq && null !== GB.bq && (DB.bq = GB.bq), GB.rotationQuaternion ? DB.rotationQuaternion = UB.f.FromArray(GB.rotationQuaternion) : GB.rotation && (DB.rotation = UB.r.FromArray(GB.rotation)), DB.SP = UB.r.FromArray(GB.SP), void 0 != GB.checkCollisions && null != GB.checkCollisions && (DB.checkCollisions = GB.checkCollisions), void 0 != GB.pickable && null != GB.pickable && (DB.bq = GB.pickable), void 0 != GB.showBoundingBox && null != GB.showBoundingBox && (DB.showBoundingBox = GB.showBoundingBox), void 0 != GB.showSubMeshesBoundingBox && null != GB.showSubMeshesBoundingBox && (DB.showSubMeshesBoundingBox = GB.showSubMeshesBoundingBox), void 0 != GB.alphaIndex && null != GB.showSubMeshesBoundingBox && (DB.alphaIndex = GB.alphaIndex), GB.physicsImpostor && (DB.physicsImpostor = sB._PhysicsImpostorParser(OB, DB, GB)), void 0 !== GB.actions && (DB._waitingData.actions = GB.actions), GB.animations) {
              for (let BB = 0; BB < GB.animations.length; BB++) {
                const OB = GB.animations[BB],
                  YB = (0, wB.c)("BABYLON.Animation");
                YB && DB.animations.push(YB.Parse(OB))
              }
              kB.b.ParseAnimationRanges(DB, GB, OB), GB.autoAnimate && OB.beginAnimation(DB, GB.autoAnimateFrom, GB.autoAnimateTo, GB.autoAnimateLoop, GB.autoAnimateSpeed || 1)
            }
          }
        if (BB.thinInstances) {
          const OB = BB.thinInstances;
          if (YB.HGB = !!OB.enablePicking, OB.matrixData ? (YB.DOB("matrix", new Float32Array(OB.matrixData), 16, !1), YB._thinInstanceDataStorage.matrixBufferSize = OB.matrixBufferSize, YB._thinInstanceDataStorage.instancesCount = OB.instancesCount) : YB._thinInstanceDataStorage.matrixBufferSize = OB.matrixBufferSize, BB.thinInstances.userThinInstance) {
            const OB = BB.thinInstances.userThinInstance;
            for (const BB in OB.data) YB.DOB(BB, new Float32Array(OB.data[BB]), OB.strides[BB], !1), YB._userThinInstanceBuffersStorage.sizes[BB] = OB.sizes[BB]
          }
        }
        return YB
      }
      setPositionsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourcePositions) {
          const OB = this.getVerticesData(dB.h.PositionKind);
          if (!OB) return BB._sourcePositions;
          BB._sourcePositions = new Float32Array(OB), this.isVertexBufferUpdatable(dB.h.PositionKind) || this.setVerticesData(dB.h.PositionKind, OB, !0)
        }
        return BB._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourceNormals) {
          const OB = this.getVerticesData(dB.h.NormalKind);
          if (!OB) return BB._sourceNormals;
          BB._sourceNormals = new Float32Array(OB), this.isVertexBufferUpdatable(dB.h.NormalKind) || this.setVerticesData(dB.h.NormalKind, OB, !0)
        }
        return BB._sourceNormals
      }
      applySkeleton(BB) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.JF().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.JF().getFrameId(), !this.isVerticesDataPresent(dB.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(dB.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(dB.h.MatricesWeightsKind)) return this;
        const OB = this.isVerticesDataPresent(dB.h.NormalKind),
          GB = this._internalMeshDataInfo;
        if (!GB._sourcePositions) {
          const BB = this.iW.slice();
          this.setPositionsForCPUSkinning(), this.iW = BB
        }
        OB && !GB._sourceNormals && this.setNormalsForCPUSkinning();
        let YB = this.getVerticesData(dB.h.PositionKind);
        if (!YB) return this;
        YB instanceof Float32Array || (YB = new Float32Array(YB));
        let DB = this.getVerticesData(dB.h.NormalKind);
        if (OB) {
          if (!DB) return this;
          DB instanceof Float32Array || (DB = new Float32Array(DB))
        }
        const QB = this.getVerticesData(dB.h.MatricesIndicesKind),
          oB = this.getVerticesData(dB.h.MatricesWeightsKind);
        if (!oB || !QB) return this;
        const jB = this.numBoneInfluencers > 4,
          yB = jB ? this.getVerticesData(dB.h.MatricesIndicesExtraKind) : null,
          JB = jB ? this.getVerticesData(dB.h.MatricesWeightsExtraKind) : null,
          MB = BB.getTransformMatrices(this),
          PB = UB.r.Zero(),
          zB = new UB.d,
          lB = new UB.d;
        let pB, qB = 0;
        for (let ZB = 0; ZB < YB.length; ZB += 3, qB += 4) {
          let BB;
          for (pB = 0; pB < 4; pB++) BB = oB[qB + pB], BB > 0 && (UB.d.FromFloat32ArrayToRefScaled(MB, Math.floor(16 * QB[qB + pB]), BB, lB), zB.addToSelf(lB));
          if (jB)
            for (pB = 0; pB < 4; pB++) BB = JB[qB + pB], BB > 0 && (UB.d.FromFloat32ArrayToRefScaled(MB, Math.floor(16 * yB[qB + pB]), BB, lB), zB.addToSelf(lB));
          UB.r.TransformCoordinatesFromFloatsToRef(GB._sourcePositions[ZB], GB._sourcePositions[ZB + 1], GB._sourcePositions[ZB + 2], zB, PB), PB.toArray(YB, ZB), OB && (UB.r.TransformNormalFromFloatsToRef(GB._sourceNormals[ZB], GB._sourceNormals[ZB + 1], GB._sourceNormals[ZB + 2], zB, PB), PB.toArray(DB, ZB)), zB.reset()
        }
        return this.updateVerticesData(dB.h.PositionKind, YB), OB && this.updateVerticesData(dB.h.NormalKind, DB), this
      }
      static MinMax(BB) {
        let OB = null,
          GB = null;
        for (const YB of BB) {
          const BB = YB.Gw().boundingBox;
          OB && GB ? (OB.minimizeInPlace(BB.minimumWorld), GB.maximizeInPlace(BB.maximumWorld)) : (OB = BB.minimumWorld.clone(), GB = BB.maximumWorld.clone())
        }
        return OB && GB ? {
          min: OB,
          max: GB
        } : {
          min: UB.r.Zero(),
          max: UB.r.Zero()
        }
      }
      static Center(BB) {
        const OB = BB instanceof Array ? sB.MinMax(BB) : BB;
        return UB.r.Center(OB.min, OB.max)
      }
      static MergeMeshes(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        return (0, SB.l)(sB._MergeMeshesCoroutine(BB, OB, GB, YB, DB, QB, !1))
      }
      static async MergeMeshesAsync(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, SB.i)(sB._MergeMeshesCoroutine(BB, OB, GB, YB, DB, QB, !0), (0, SB.e)())
      }
      static * _MergeMeshesCoroutine(BB) {
        let OB, GB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          YB = arguments.length > 2 ? arguments[2] : void 0,
          DB = arguments.length > 3 ? arguments[3] : void 0,
          QB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          jB = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (BB = BB.filter(Boolean)).length) return null;
        if (!YB) {
          let GB = 0;
          for (OB = 0; OB < BB.length; OB++)
            if (GB += BB[OB].getTotalVertices(), GB >= 65536) return XB.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const yB = BB[0];
        oB && (QB = !1, BB.sort(((BB, OB) => (BB.material?.uniqueId ?? -1) - (OB.material?.uniqueId ?? -1))));
        const JB = new Array,
          MB = new Array,
          PB = new Array,
          zB = BB[0].sideOrientation;
        for (OB = 0; OB < BB.length; OB++) {
          const GB = BB[OB];
          if (GB.SF) return XB.b.Warn("Cannot merge instance meshes."), null;
          if (zB !== GB.sideOrientation) return XB.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (QB || oB) {
            const BB = PB.reduce(((BB, OB) => Math.max(BB, OB.start + OB.count)), 0);
            if (oB)
              if (GB.material) {
                const OB = GB.material;
                if (OB instanceof LB.d) {
                  for (let BB = 0; BB < OB.jOB.length; BB++) JB.indexOf(OB.jOB[BB]) < 0 && JB.push(OB.jOB[BB]);
                  for (let YB = 0; YB < GB.iW.length; YB++) MB.push(JB.indexOf(OB.jOB[GB.iW[YB].materialIndex])), PB.push({
                    start: BB + GB.iW[YB].indexStart,
                    count: GB.iW[YB].indexCount
                  })
                } else {
                  JB.indexOf(OB) < 0 && JB.push(OB);
                  for (let YB = 0; YB < GB.iW.length; YB++) MB.push(JB.indexOf(OB)), PB.push({
                    start: BB + GB.iW[YB].indexStart,
                    count: GB.iW[YB].indexCount
                  })
                }
              } else
                for (let OB = 0; OB < GB.iW.length; OB++) MB.push(0), PB.push({
                  start: BB + GB.iW[OB].indexStart,
                  count: GB.iW[OB].indexCount
                });
            else PB.push({
              start: BB,
              count: GB.getTotalIndices()
            })
          }
        }
        if (oB && PB.length > 1) {
          let BB = 0;
          for (let OB = 1; OB < PB.length; OB++) {
            const GB = PB[BB],
              YB = PB[OB];
            MB[OB] === MB[BB] && GB.start + GB.count === YB.start ? GB.count += YB.count : (BB++, PB[BB] = YB, MB[BB] = MB[OB])
          }
          PB.length = BB + 1, MB.length = BB + 1
        }
        const lB = BB => {
            const OB = BB.computeWorldMatrix(!0);
            return {
              vertexData: KB.e.ExtractFromMesh(BB, !1, !1),
              transform: OB
            }
          },
          {
            vertexData: pB,
            transform: qB
          } = lB(BB[0]);
        jB && (yield);
        const ZB = new Array(BB.length - 1);
        for (let SB = 1; SB < BB.length; SB++) ZB[SB - 1] = lB(BB[SB]), jB && (yield);
        const NB = pB._mergeCoroutine(qB, ZB, YB, jB, !GB);
        let RB = NB.next();
        for (; !RB.done;) jB && (yield), RB = NB.next();
        const WB = RB.value;
        DB || (DB = new sB(yB.name + "_merged", yB.JF()));
        const AB = WB._applyToCoroutine(DB, void 0, jB);
        let VB = AB.next();
        for (; !VB.done;) jB && (yield), VB = AB.next();
        if (DB.checkCollisions = yB.checkCollisions, DB.sideOrientation = yB.sideOrientation, GB)
          for (OB = 0; OB < BB.length; OB++) BB[OB].dispose();
        if (QB || oB) {
          for (DB.releaseSubMeshes(), OB = 0; OB < PB.length;) IB.c.CreateFromIndices(0, PB[OB].start, PB[OB].count, DB, void 0, !1), OB++;
          for (const BB of DB.iW) BB.refreshBoundingInfo();
          DB.computeWorldMatrix(!0)
        }
        if (oB) {
          const BB = new LB.d(yB.name + "_merged", yB.JF());
          BB.jOB = JB;
          for (let OB = 0; OB < DB.iW.length; OB++) DB.iW[OB].materialIndex = MB[OB];
          DB.material = BB
        } else DB.material = yB.material;
        return DB
      }
      hBB(BB) {
        BB._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(BB)
      }
      eBB(BB) {
        const OB = BB._indexInSourceMeshInstanceArray;
        if (-1 != OB) {
          if (OB !== this.instances.length - 1) {
            const BB = this.instances[this.instances.length - 1];
            this.instances[OB] = BB, BB._indexInSourceMeshInstanceArray = OB
          }
          BB._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === FB.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(BB) {
        const OB = this.JF();
        return OB.forcePointsCloud ? FB.b.PointFillMode : OB.forceWireframe ? FB.b.WireFrameFillMode : this.overrideRenderingFillMode ?? BB
      }
      setMaterialByID(BB) {
        return this.setMaterialById(BB)
      }
      static CreateRibbon(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(BB, OB, GB, YB, DB, QB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(BB, OB, GB, YB, DB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(BB, OB, GB, YB, DB, QB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(BB, OB, GB, YB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(BB, OB, GB, YB, DB, QB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(BB, OB, GB, YB, DB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(BB, OB, GB, YB, DB, QB, oB, jB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(BB, OB, GB, YB, DB, QB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(BB, OB, GB, YB, DB, QB, oB, jB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(BB, OB, GB, YB, DB, QB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(BB, OB, GB, YB, DB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(BB, OB, GB, YB, DB, QB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(BB, OB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(BB, OB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(BB, OB, GB, YB, DB, QB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(BB, OB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(BB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    sB.FRONTSIDE = KB.e.FRONTSIDE, sB.BACKSIDE = KB.e.BACKSIDE, sB.DOUBLESIDE = KB.e.DOUBLESIDE, sB.DEFAULTSIDE = KB.e.DEFAULTSIDE, sB.NO_CAP = 0, sB.CAP_START = 1, sB.CAP_END = 2, sB.CAP_ALL = 3, sB.NO_FLIP = 0, sB.FLIP_TILE = 1, sB.ROTATE_TILE = 2, sB.FLIP_ROW = 3, sB.ROTATE_ROW = 4, sB.FLIP_N_ROTATE_TILE = 5, sB.FLIP_N_ROTATE_ROW = 6, sB.CENTER = 0, sB.LEFT = 1, sB.RIGHT = 2, sB.TOP = 3, sB.BOTTOM = 4, sB.INSTANCEDMESH_SORT_TRANSPARENT = !1, sB._GroundMeshParser = (BB, OB) => {
      throw (0, EB.j)("GroundMesh")
    }, sB._GoldbergMeshParser = (BB, OB) => {
      throw (0, EB.j)("GoldbergMesh")
    }, sB._LinesMeshParser = (BB, OB) => {
      throw (0, EB.j)("LinesMesh")
    }, sB._GreasedLineMeshParser = (BB, OB) => {
      throw (0, EB.j)("GreasedLineMesh")
    }, sB._GreasedLineRibbonMeshParser = (BB, OB) => {
      throw (0, EB.j)("GreasedLineRibbonMesh")
    }, sB._TrailMeshParser = (BB, OB) => {
      throw (0, EB.j)("TrailMesh")
    }, sB._GaussianSplattingMeshParser = (BB, OB) => {
      throw (0, EB.j)("GaussianSplattingMesh")
    }, sB._GaussianSplattingPartProxyMeshParser = (BB, OB) => {
      throw (0, EB.j)("GaussianSplattingPartProxyMesh")
    }, sB._GaussianSplattingCompoundMeshParser = (BB, OB) => {
      throw (0, EB.j)("GaussianSplattingCompoundMesh")
    };
    let xB = !1;

    function tB() {
      xB || (xB = !0, (0, wB.f)("BABYLON.Mesh", sB))
    }(YB = sB.prototype).BX ?? (YB.BX = (0, EB.g)("Mesh", "BX")), (DB = sB.prototype).simplify ?? (DB.simplify = (0, EB.g)("Mesh", "simplify")), (QB = sB.prototype).thinInstanceAdd ?? (QB.thinInstanceAdd = (0, EB.g)("Mesh", "thinInstanceAdd")), (oB = sB.prototype).thinInstanceAddSelf ?? (oB.thinInstanceAddSelf = (0, EB.g)("Mesh", "thinInstanceAddSelf")), (jB = sB.prototype).thinInstanceRegisterAttribute ?? (jB.thinInstanceRegisterAttribute = (0, EB.g)("Mesh", "thinInstanceRegisterAttribute")), (yB = sB.prototype).thinInstanceSetMatrixAt ?? (yB.thinInstanceSetMatrixAt = (0, EB.g)("Mesh", "thinInstanceSetMatrixAt")), (JB = sB.prototype).thinInstanceSetAttributeAt ?? (JB.thinInstanceSetAttributeAt = (0, EB.g)("Mesh", "thinInstanceSetAttributeAt")), (MB = sB.prototype).DOB ?? (MB.DOB = (0, EB.g)("Mesh", "DOB")), (PB = sB.prototype).thinInstanceGetWorldMatrices ?? (PB.thinInstanceGetWorldMatrices = (0, EB.g)("Mesh", "thinInstanceGetWorldMatrices")), (zB = sB.prototype).HBB ?? (zB.HBB = (0, EB.g)("Mesh", "HBB")), (lB = sB.prototype).thinInstancePartialBufferUpdate ?? (lB.thinInstancePartialBufferUpdate = (0, EB.g)("Mesh", "thinInstancePartialBufferUpdate")), (pB = sB.prototype).thinInstanceRefreshBoundingInfo ?? (pB.thinInstanceRefreshBoundingInfo = (0, EB.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (qB = sB.prototype).getEmittedParticleSystems ?? (qB.getEmittedParticleSystems = (0, EB.g)("Mesh", "getEmittedParticleSystems")), (ZB = sB.prototype).getHierarchyEmittedParticleSystems ?? (ZB.getHierarchyEmittedParticleSystems = (0, EB.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(sB.prototype, "edgesShareWithInstances") || Object.defineProperty(sB.prototype, "edgesShareWithInstances", (0, EB.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(sB.prototype, "HGB") || Object.defineProperty(sB.prototype, "HGB", (0, EB.e)("Mesh", "HGB")), Object.getOwnPropertyDescriptor(sB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(sB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, EB.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(sB.prototype, "rBB") || Object.defineProperty(sB.prototype, "rBB", (0, EB.e)("Mesh", "rBB"))
  },
  41423: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => pB
    });
    var YB = GB(40998),
      DB = GB(37778),
      QB = GB(41150),
      oB = GB(40890),
      jB = GB(37894),
      yB = GB(39366),
      JB = GB(41004),
      MB = GB(41420),
      PB = GB(41049),
      zB = GB(41287);
    class lB {}
    let pB = (() => {
      var BB;
      let OB, GB, pB, qB, ZB = [];
      return BB = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, MB.h)(this._applyToCoroutine.bind(this)), this.uniqueId = BB._UniqueIdGenerator, BB._UniqueIdGenerator++
        }
        set(BB, OB) {
          switch (BB.length || yB.b.Warn(`Setting vertex data kind '${OB}' with an empty array`), OB) {
            case QB.h.PositionKind:
              this.positions = BB;
              break;
            case QB.h.NormalKind:
              this.normals = BB;
              break;
            case QB.h.TangentKind:
              this.tangents = BB;
              break;
            case QB.h.UVKind:
              this.uvs = BB;
              break;
            case QB.h.UV2Kind:
              this.uvs2 = BB;
              break;
            case QB.h.UV3Kind:
              this.uvs3 = BB;
              break;
            case QB.h.UV4Kind:
              this.uvs4 = BB;
              break;
            case QB.h.UV5Kind:
              this.uvs5 = BB;
              break;
            case QB.h.UV6Kind:
              this.uvs6 = BB;
              break;
            case QB.h.ColorKind:
              this.colors = BB;
              break;
            case QB.h.MatricesIndicesKind:
              this.matricesIndices = BB;
              break;
            case QB.h.MatricesWeightsKind:
              this.matricesWeights = BB;
              break;
            case QB.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = BB;
              break;
            case QB.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = BB
          }
        }
        applyToMesh(BB, OB) {
          return this._applyTo(BB, OB, !1), this
        }
        applyToGeometry(BB, OB) {
          return this._applyTo(BB, OB, !1), this
        }
        updateMesh(BB) {
          return this._update(BB), this
        }
        updateGeometry(BB) {
          return this._update(BB), this
        }* _applyToCoroutine(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (BB.setVerticesData(QB.h.PositionKind, this.positions, OB), GB && (yield)), this.normals && (BB.setVerticesData(QB.h.NormalKind, this.normals, OB), GB && (yield)), this.tangents && (BB.setVerticesData(QB.h.TangentKind, this.tangents, OB), GB && (yield)), this.uvs && (BB.setVerticesData(QB.h.UVKind, this.uvs, OB), GB && (yield)), this.uvs2 && (BB.setVerticesData(QB.h.UV2Kind, this.uvs2, OB), GB && (yield)), this.uvs3 && (BB.setVerticesData(QB.h.UV3Kind, this.uvs3, OB), GB && (yield)), this.uvs4 && (BB.setVerticesData(QB.h.UV4Kind, this.uvs4, OB), GB && (yield)), this.uvs5 && (BB.setVerticesData(QB.h.UV5Kind, this.uvs5, OB), GB && (yield)), this.uvs6 && (BB.setVerticesData(QB.h.UV6Kind, this.uvs6, OB), GB && (yield)), this.colors) {
            const YB = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            BB.setVerticesData(QB.h.ColorKind, this.colors, OB, YB), this.hasVertexAlpha && void 0 !== BB.hasVertexAlpha && (BB.hasVertexAlpha = !0), GB && (yield)
          }
          if (this.matricesIndices && (BB.setVerticesData(QB.h.MatricesIndicesKind, this.matricesIndices, OB), GB && (yield)), this.matricesWeights && (BB.setVerticesData(QB.h.MatricesWeightsKind, this.matricesWeights, OB), GB && (yield)), this.matricesIndicesExtra && (BB.setVerticesData(QB.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, OB), GB && (yield)), this.matricesWeightsExtra && (BB.setVerticesData(QB.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, OB), GB && (yield)), this.indices ? (BB.setIndices(this.indices, null, OB), GB && (yield)) : BB.setIndices([], null), BB.iW && this.materialInfos && this.materialInfos.length > 1) {
            const OB = BB;
            OB.iW = [];
            for (const BB of this.materialInfos) new zB.c(BB.materialIndex, BB.verticesStart, BB.verticesCount, BB.indexStart, BB.indexCount, OB)
          }
          return this
        }
        _update(BB, OB, GB) {
          return this.positions && BB.updateVerticesData(QB.h.PositionKind, this.positions, OB, GB), this.normals && BB.updateVerticesData(QB.h.NormalKind, this.normals, OB, GB), this.tangents && BB.updateVerticesData(QB.h.TangentKind, this.tangents, OB, GB), this.uvs && BB.updateVerticesData(QB.h.UVKind, this.uvs, OB, GB), this.uvs2 && BB.updateVerticesData(QB.h.UV2Kind, this.uvs2, OB, GB), this.uvs3 && BB.updateVerticesData(QB.h.UV3Kind, this.uvs3, OB, GB), this.uvs4 && BB.updateVerticesData(QB.h.UV4Kind, this.uvs4, OB, GB), this.uvs5 && BB.updateVerticesData(QB.h.UV5Kind, this.uvs5, OB, GB), this.uvs6 && BB.updateVerticesData(QB.h.UV6Kind, this.uvs6, OB, GB), this.colors && BB.updateVerticesData(QB.h.ColorKind, this.colors, OB, GB), this.matricesIndices && BB.updateVerticesData(QB.h.MatricesIndicesKind, this.matricesIndices, OB, GB), this.matricesWeights && BB.updateVerticesData(QB.h.MatricesWeightsKind, this.matricesWeights, OB, GB), this.matricesIndicesExtra && BB.updateVerticesData(QB.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, OB, GB), this.matricesWeightsExtra && BB.updateVerticesData(QB.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, OB, GB), this.indices && BB.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const QB = DB.k.Xp[0],
            oB = DB.k.Xp[1];
          for (let jB = GB; jB < GB + YB; jB += 3) DB.r.FromArrayToRef(BB, jB, QB), DB.r.TransformCoordinatesToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z
        }
        static _TransformVector3Normals(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const QB = DB.k.Xp[0],
            oB = DB.k.Xp[1];
          for (let jB = GB; jB < GB + YB; jB += 3) DB.r.FromArrayToRef(BB, jB, QB), DB.r.TransformNormalToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z
        }
        static _TransformVector4Normals(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const QB = DB.k.Vector4[0],
            oB = DB.k.Vector4[1];
          for (let jB = GB; jB < GB + YB; jB += 4) DB.t.FromArrayToRef(BB, jB, QB), DB.t.TransformNormalToRef(QB, OB, oB), BB[jB] = oB.x, BB[jB + 1] = oB.y, BB[jB + 2] = oB.z, BB[jB + 3] = oB.w
        }
        static _FlipFaces(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
          for (let YB = OB; YB < OB + GB; YB += 3) {
            const OB = BB[YB + 1];
            BB[YB + 1] = BB[YB + 2], BB[YB + 2] = OB
          }
        }
        transform(OB) {
          const GB = OB.determinant() < 0;
          return this.positions && BB._TransformVector3Coordinates(this.positions, OB), this.normals && BB._TransformVector3Normals(this.normals, OB), this.tangents && BB._TransformVector4Normals(this.tangents, OB), GB && this.indices && BB._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const OB = [];
          for (const GB of this.materialInfos) {
            const YB = new BB;
            if (this.positions && (YB.positions = this.positions.slice(3 * GB.verticesStart, 3 * (GB.verticesCount + GB.verticesStart))), this.normals && (YB.normals = this.normals.slice(3 * GB.verticesStart, 3 * (GB.verticesCount + GB.verticesStart))), this.tangents && (YB.tangents = this.tangents.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.colors && (YB.colors = this.colors.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.uvs && (YB.uvs = this.uvs.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.uvs2 && (YB.uvs2 = this.uvs2.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.uvs3 && (YB.uvs3 = this.uvs3.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.uvs4 && (YB.uvs4 = this.uvs4.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.uvs5 && (YB.uvs5 = this.uvs5.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.uvs6 && (YB.uvs6 = this.uvs6.slice(2 * GB.verticesStart, 2 * (GB.verticesCount + GB.verticesStart))), this.matricesIndices && (YB.matricesIndices = this.matricesIndices.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.matricesIndicesExtra && (YB.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.matricesWeights && (YB.matricesWeights = this.matricesWeights.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.matricesWeightsExtra && (YB.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * GB.verticesStart, 4 * (GB.verticesCount + GB.verticesStart))), this.indices) {
              YB.indices = [];
              for (let BB = GB.indexStart; BB < GB.indexStart + GB.indexCount; BB++) YB.indices.push(this.indices[BB] - GB.verticesStart)
            }
            const DB = new lB;
            DB.indexStart = 0, DB.indexCount = YB.indices ? YB.indices.length : 0, DB.materialIndex = GB.materialIndex, DB.verticesStart = 0, DB.verticesCount = (YB.positions ? YB.positions.length : 0) / 3, YB.materialInfos = [DB], OB.push(YB)
          }
          return OB
        }
        merge(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const QB = Array.isArray(BB) ? BB.map((BB => ({
            vertexData: BB
          }))) : [{
            vertexData: BB
          }];
          return (0, MB.l)(this._mergeCoroutine(void 0, QB, OB, !1, GB, YB, DB))
        }* _mergeCoroutine(OB, GB) {
          let YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            DB = arguments.length > 3 ? arguments[3] : void 0,
            oB = arguments.length > 4 ? arguments[4] : void 0,
            jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            yB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let JB = GB.map((BB => BB.vertexData)),
            MB = this;
          if (yB)
            for (const BB of JB) BB && (BB._validate(), !this.normals && BB.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && BB.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && BB.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && BB.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && BB.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && BB.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && BB.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && BB.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && BB.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && BB.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && BB.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && BB.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && BB.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const BB of JB)
            if (BB)
              if (yB) this.normals && !BB.normals && (BB.normals = new Float32Array(BB.positions.length)), this.tangents && !BB.tangents && (BB.tangents = new Float32Array(BB.positions.length / 3 * 4)), this.uvs && !BB.uvs && (BB.uvs = new Float32Array(BB.positions.length / 3 * 2)), this.uvs2 && !BB.uvs2 && (BB.uvs2 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs3 && !BB.uvs3 && (BB.uvs3 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs4 && !BB.uvs4 && (BB.uvs4 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs5 && !BB.uvs5 && (BB.uvs5 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs6 && !BB.uvs6 && (BB.uvs6 = new Float32Array(BB.positions.length / 3 * 2)), this.colors && !BB.colors && (BB.colors = new Float32Array(BB.positions.length / 3 * 4), BB.colors.fill(1)), this.matricesIndices && !BB.matricesIndices && (BB.matricesIndices = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeights && !BB.matricesWeights && (BB.matricesWeights = new Float32Array(BB.positions.length / 3 * 4)), this.matricesIndicesExtra && !BB.matricesIndicesExtra && (BB.matricesIndicesExtra = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeightsExtra && !BB.matricesWeightsExtra && (BB.matricesWeightsExtra = new Float32Array(BB.positions.length / 3 * 4));
              else if (BB._validate(), !this.normals !== !BB.normals || !this.tangents !== !BB.tangents || !this.uvs !== !BB.uvs || !this.uvs2 !== !BB.uvs2 || !this.uvs3 !== !BB.uvs3 || !this.uvs4 !== !BB.uvs4 || !this.uvs5 !== !BB.uvs5 || !this.uvs6 !== !BB.uvs6 || !this.colors !== !BB.colors || !this.matricesIndices !== !BB.matricesIndices || !this.matricesWeights !== !BB.matricesWeights || !this.matricesIndicesExtra !== !BB.matricesIndicesExtra || !this.matricesWeightsExtra !== !BB.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (jB) {
            let BB, YB = 0,
              DB = 0;
            const QB = [];
            let oB = null;
            const jB = [];
            for (const GB of this.splitBasedOnMaterialID()) jB.push({
              vertexData: GB,
              transform: OB
            });
            for (const OB of GB)
              if (OB.vertexData)
                for (const BB of OB.vertexData.splitBasedOnMaterialID()) jB.push({
                  vertexData: BB,
                  transform: OB.transform
                });
            jB.sort(((BB, OB) => {
              const GB = BB.vertexData.materialInfos ? BB.vertexData.materialInfos[0].materialIndex : 0,
                YB = OB.vertexData.materialInfos ? OB.vertexData.materialInfos[0].materialIndex : 0;
              return GB > YB ? 1 : GB === YB ? 0 : -1
            }));
            for (const OB of jB) {
              const GB = OB.vertexData;
              if (BB = GB.materialInfos ? GB.materialInfos[0].materialIndex : 0, oB && oB.materialIndex === BB) oB.indexCount += GB.indices.length, oB.verticesCount += GB.positions.length / 3;
              else {
                const OB = new lB;
                OB.materialIndex = BB, OB.indexStart = YB, OB.indexCount = GB.indices.length, OB.verticesStart = DB, OB.verticesCount = GB.positions.length / 3, QB.push(OB), oB = OB
              }
              YB += GB.indices.length, DB += GB.positions.length / 3
            }
            const yB = jB.splice(0, 1)[0];
            MB = yB.vertexData, OB = yB.transform, JB = jB.map((BB => BB.vertexData)), GB = jB, this.materialInfos = QB
          }
          const PB = JB.reduce(((BB, OB) => BB + (OB.indices?.length ?? 0)), MB.indices?.length ?? 0);
          let zB = oB || JB.some((BB => BB.indices === MB.indices)) ? MB.indices?.slice() : MB.indices;
          if (PB > 0) {
            let QB = zB?.length ?? 0;
            if (zB || (zB = new Array(PB)), zB.length !== PB) {
              if (Array.isArray(zB)) zB.length = PB;
              else {
                const BB = YB || zB instanceof Uint32Array ? new Uint32Array(PB) : new Uint16Array(PB);
                BB.set(zB), zB = BB
              }
              OB && OB.determinant() < 0 && BB._FlipFaces(zB, 0, QB)
            }
            let oB = MB.positions ? MB.positions.length / 3 : 0;
            for (const {
                vertexData: OB,
                transform: YB
              }
              of GB)
              if (OB.indices) {
                for (let BB = 0; BB < OB.indices.length; BB++) zB[QB + BB] = OB.indices[BB] + oB;
                YB && YB.determinant() < 0 && BB._FlipFaces(zB, QB, OB.indices.length), oB += OB.positions.length / 3, QB += OB.indices.length, DB && (yield)
              }
          }
          return this.indices = zB, this.positions = BB._MergeElement(QB.h.PositionKind, MB.positions, OB, GB.map((BB => [BB.vertexData.positions, BB.transform]))), DB && (yield), MB.normals && (this.normals = BB._MergeElement(QB.h.NormalKind, MB.normals, OB, GB.map((BB => [BB.vertexData.normals, BB.transform]))), DB && (yield)), MB.tangents && (this.tangents = BB._MergeElement(QB.h.TangentKind, MB.tangents, OB, GB.map((BB => [BB.vertexData.tangents, BB.transform]))), DB && (yield)), MB.uvs && (this.uvs = BB._MergeElement(QB.h.UVKind, MB.uvs, OB, GB.map((BB => [BB.vertexData.uvs, BB.transform]))), DB && (yield)), MB.uvs2 && (this.uvs2 = BB._MergeElement(QB.h.UV2Kind, MB.uvs2, OB, GB.map((BB => [BB.vertexData.uvs2, BB.transform]))), DB && (yield)), MB.uvs3 && (this.uvs3 = BB._MergeElement(QB.h.UV3Kind, MB.uvs3, OB, GB.map((BB => [BB.vertexData.uvs3, BB.transform]))), DB && (yield)), MB.uvs4 && (this.uvs4 = BB._MergeElement(QB.h.UV4Kind, MB.uvs4, OB, GB.map((BB => [BB.vertexData.uvs4, BB.transform]))), DB && (yield)), MB.uvs5 && (this.uvs5 = BB._MergeElement(QB.h.UV5Kind, MB.uvs5, OB, GB.map((BB => [BB.vertexData.uvs5, BB.transform]))), DB && (yield)), MB.uvs6 && (this.uvs6 = BB._MergeElement(QB.h.UV6Kind, MB.uvs6, OB, GB.map((BB => [BB.vertexData.uvs6, BB.transform]))), DB && (yield)), MB.colors && (this.colors = BB._MergeElement(QB.h.ColorKind, MB.colors, OB, GB.map((BB => [BB.vertexData.colors, BB.transform]))), (void 0 !== MB.hasVertexAlpha || GB.some((BB => void 0 !== BB.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = MB.hasVertexAlpha || GB.some((BB => BB.vertexData.hasVertexAlpha))), DB && (yield)), MB.matricesIndices && (this.matricesIndices = BB._MergeElement(QB.h.MatricesIndicesKind, MB.matricesIndices, OB, GB.map((BB => [BB.vertexData.matricesIndices, BB.transform]))), DB && (yield)), MB.matricesWeights && (this.matricesWeights = BB._MergeElement(QB.h.MatricesWeightsKind, MB.matricesWeights, OB, GB.map((BB => [BB.vertexData.matricesWeights, BB.transform]))), DB && (yield)), MB.matricesIndicesExtra && (this.matricesIndicesExtra = BB._MergeElement(QB.h.MatricesIndicesExtraKind, MB.matricesIndicesExtra, OB, GB.map((BB => [BB.vertexData.matricesIndicesExtra, BB.transform]))), DB && (yield)), MB.matricesWeightsExtra && (this.matricesWeightsExtra = BB._MergeElement(QB.h.MatricesWeightsExtraKind, MB.matricesWeightsExtra, OB, GB.map((BB => [BB.vertexData.matricesWeightsExtra, BB.transform])))), this
        }
        static _MergeElement(OB, GB, YB, DB) {
          const oB = DB.filter((BB => null !== BB[0] && void 0 !== BB[0]));
          if (!GB && 0 == oB.length) return GB;
          if (!GB) return this._MergeElement(OB, oB[0][0], oB[0][1], oB.slice(1));
          const jB = oB.reduce(((BB, OB) => BB + OB[0].length), GB.length),
            yB = OB === QB.h.PositionKind ? BB._TransformVector3Coordinates : OB === QB.h.NormalKind ? BB._TransformVector3Normals : OB === QB.h.TangentKind ? BB._TransformVector4Normals : () => {};
          if (GB instanceof Float32Array) {
            const BB = new Float32Array(jB);
            BB.set(GB), YB && yB(BB, YB, 0, GB.length);
            let OB = GB.length;
            for (const [GB, YB] of oB) BB.set(GB, OB), YB && yB(BB, YB, OB, GB.length), OB += GB.length;
            return BB
          } {
            const BB = new Array(jB);
            for (let YB = 0; YB < GB.length; YB++) BB[YB] = GB[YB];
            YB && yB(BB, YB, 0, GB.length);
            let OB = GB.length;
            for (const [GB, YB] of oB) {
              for (let YB = 0; YB < GB.length; YB++) BB[OB + YB] = GB[YB];
              YB && yB(BB, YB, OB, GB.length), OB += GB.length
            }
            return BB
          }
        }
        _validate() {
          if (!this.positions) throw new PB.i("Positions are required", PB.g.MeshInvalidPositionsError);
          const BB = (BB, OB) => {
              const GB = (0, QB.e)(BB);
              if (OB.length % GB !== 0) throw new Error("The " + BB + "s array count must be a multiple of " + GB);
              return OB.length / GB
            },
            OB = BB(QB.h.PositionKind, this.positions),
            GB = (GB, YB) => {
              const DB = BB(GB, YB);
              if (DB !== OB) throw new Error("The " + GB + "s element count (" + DB + ") does not match the positions count (" + OB + ")")
            };
          this.normals && GB(QB.h.NormalKind, this.normals), this.tangents && GB(QB.h.TangentKind, this.tangents), this.uvs && GB(QB.h.UVKind, this.uvs), this.uvs2 && GB(QB.h.UV2Kind, this.uvs2), this.uvs3 && GB(QB.h.UV3Kind, this.uvs3), this.uvs4 && GB(QB.h.UV4Kind, this.uvs4), this.uvs5 && GB(QB.h.UV5Kind, this.uvs5), this.uvs6 && GB(QB.h.UV6Kind, this.uvs6), this.colors && GB(QB.h.ColorKind, this.colors), this.matricesIndices && GB(QB.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && GB(QB.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && GB(QB.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && GB(QB.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const OB = this.serialize();
          return BB.Parse(OB)
        }
        serialize() {
          const BB = {};
          if (this.positions && (BB.positions = Array.from(this.positions)), this.normals && (BB.normals = Array.from(this.normals)), this.tangents && (BB.tangents = Array.from(this.tangents)), this.uvs && (BB.uvs = Array.from(this.uvs)), this.uvs2 && (BB.uvs2 = Array.from(this.uvs2)), this.uvs3 && (BB.uvs3 = Array.from(this.uvs3)), this.uvs4 && (BB.uvs4 = Array.from(this.uvs4)), this.uvs5 && (BB.uvs5 = Array.from(this.uvs5)), this.uvs6 && (BB.uvs6 = Array.from(this.uvs6)), this.colors && (BB.colors = Array.from(this.colors), BB.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (BB.matricesIndices = Array.from(this.matricesIndices), BB.matricesIndicesExpanded = !0), this.matricesWeights && (BB.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (BB.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), BB.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (BB.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), BB.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            BB.materialInfos = [];
            for (const OB of this.materialInfos) {
              const GB = {
                indexStart: OB.indexStart,
                indexCount: OB.indexCount,
                materialIndex: OB.materialIndex,
                verticesStart: OB.verticesStart,
                verticesCount: OB.verticesCount
              };
              BB.materialInfos.push(GB)
            }
          }
          return BB
        }
        static ExtractFromMesh(OB, GB, YB) {
          return BB._ExtractFrom(OB, GB, YB)
        }
        static ExtractFromGeometry(OB, GB, YB) {
          return BB._ExtractFrom(OB, GB, YB)
        }
        static _ExtractFrom(OB, GB, YB) {
          const DB = new BB;
          if (OB.isVerticesDataPresent(QB.h.PositionKind) && (DB.positions = OB.getVerticesData(QB.h.PositionKind, GB, YB)), OB.isVerticesDataPresent(QB.h.NormalKind) && (DB.normals = OB.getVerticesData(QB.h.NormalKind, GB, YB)), OB.isVerticesDataPresent(QB.h.TangentKind) && (DB.tangents = OB.getVerticesData(QB.h.TangentKind, GB, YB)), OB.isVerticesDataPresent(QB.h.UVKind) && (DB.uvs = OB.getVerticesData(QB.h.UVKind, GB, YB)), OB.isVerticesDataPresent(QB.h.UV2Kind) && (DB.uvs2 = OB.getVerticesData(QB.h.UV2Kind, GB, YB)), OB.isVerticesDataPresent(QB.h.UV3Kind) && (DB.uvs3 = OB.getVerticesData(QB.h.UV3Kind, GB, YB)), OB.isVerticesDataPresent(QB.h.UV4Kind) && (DB.uvs4 = OB.getVerticesData(QB.h.UV4Kind, GB, YB)), OB.isVerticesDataPresent(QB.h.UV5Kind) && (DB.uvs5 = OB.getVerticesData(QB.h.UV5Kind, GB, YB)), OB.isVerticesDataPresent(QB.h.UV6Kind) && (DB.uvs6 = OB.getVerticesData(QB.h.UV6Kind, GB, YB)), OB.isVerticesDataPresent(QB.h.ColorKind)) {
            const BB = OB.geometry || OB,
              oB = BB.getVertexBuffer(QB.h.ColorKind),
              jB = BB.getVerticesData(QB.h.ColorKind, GB, YB);
            if (3 === oB.getSize()) {
              const BB = new Float32Array(4 * jB.length / 3);
              for (let OB = 0, GB = 0; OB < jB.length; OB += 3, GB += 4) BB[GB] = jB[OB], BB[GB + 1] = jB[OB + 1], BB[GB + 2] = jB[OB + 2], BB[GB + 3] = 1;
              DB.colors = BB
            } else {
              if (4 !== oB.getSize()) throw new Error(`Unexpected number of color components: ${oB.getSize()}`);
              DB.colors = jB
            }
          }
          return OB.isVerticesDataPresent(QB.h.MatricesIndicesKind) && (DB.matricesIndices = OB.getVerticesData(QB.h.MatricesIndicesKind, GB, YB)), OB.isVerticesDataPresent(QB.h.MatricesWeightsKind) && (DB.matricesWeights = OB.getVerticesData(QB.h.MatricesWeightsKind, GB, YB)), OB.isVerticesDataPresent(QB.h.MatricesIndicesExtraKind) && (DB.matricesIndicesExtra = OB.getVerticesData(QB.h.MatricesIndicesExtraKind, GB, YB)), OB.isVerticesDataPresent(QB.h.MatricesWeightsExtraKind) && (DB.matricesWeightsExtra = OB.getVerticesData(QB.h.MatricesWeightsExtraKind, GB, YB)), DB.indices = OB.KDB(GB, YB), DB
        }
        static CreateRibbon(BB) {
          throw (0, oB.j)("ribbonBuilder")
        }
        static CreateBox(BB) {
          throw (0, oB.j)("boxBuilder")
        }
        static CreateTiledBox(BB) {
          throw (0, oB.j)("tiledBoxBuilder")
        }
        static CreateTiledPlane(BB) {
          throw (0, oB.j)("tiledPlaneBuilder")
        }
        static CreateSphere(BB) {
          throw (0, oB.j)("sphereBuilder")
        }
        static CreateCylinder(BB) {
          throw (0, oB.j)("cylinderBuilder")
        }
        static CreateTorus(BB) {
          throw (0, oB.j)("torusBuilder")
        }
        static CreateLineSystem(BB) {
          throw (0, oB.j)("linesBuilder")
        }
        static CreateDashedLines(BB) {
          throw (0, oB.j)("linesBuilder")
        }
        static CreateGround(BB) {
          throw (0, oB.j)("groundBuilder")
        }
        static CreateTiledGround(BB) {
          throw (0, oB.j)("groundBuilder")
        }
        static CreateGroundFromHeightMap(BB) {
          throw (0, oB.j)("groundBuilder")
        }
        static CreatePlane(BB) {
          throw (0, oB.j)("planeBuilder")
        }
        static CreateDisc(BB) {
          throw (0, oB.j)("discBuilder")
        }
        static CreatePolygon(BB, OB, GB, YB, DB, QB, jB) {
          throw (0, oB.j)("polygonBuilder")
        }
        static CreateIcoSphere(BB) {
          throw (0, oB.j)("icoSphereBuilder")
        }
        static CreatePolyhedron(BB) {
          throw (0, oB.j)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || DB.r.Up();
          throw (0, oB.j)("capsuleBuilder")
        }
        static CreateTorusKnot(BB) {
          throw (0, oB.j)("torusKnotBuilder")
        }
        static ComputeNormals(BB, OB, GB, YB) {
          let QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB = !1,
            kB = !1,
            dB = !1,
            KB = !1,
            uB = 1,
            mB = 0,
            IB = null;
          YB && (fB = !!YB.facetNormals, kB = !!YB.facetPositions, dB = !!YB.facetPartitioning, uB = !0 === YB.useRightHandedSystem ? -1 : 1, mB = YB.ratio || 0, KB = !!YB.depthSort, IB = YB.distanceTo, KB && void 0 === IB && (IB = DB.r.Zero()));
          let FB = 0,
            iB = 0,
            LB = 0,
            gB = 0;
          for (dB && YB && YB.bbSize && (FB = YB.subDiv.X * mB / YB.bbSize.x, iB = YB.subDiv.Y * mB / YB.bbSize.y, LB = YB.subDiv.Z * mB / YB.bbSize.z, gB = YB.subDiv.max * YB.subDiv.max, YB.facetPartitioning.length = 0), QB = 0; QB < BB.length; QB++) GB[QB] = 0;
          const rB = OB.length / 3 | 0;
          for (QB = 0; QB < rB; QB++) {
            if (ZB = 3 * OB[3 * QB], NB = ZB + 1, RB = ZB + 2, WB = 3 * OB[3 * QB + 1], AB = WB + 1, VB = WB + 2, SB = 3 * OB[3 * QB + 2], nB = SB + 1, UB = SB + 2, oB = BB[ZB] - BB[WB], jB = BB[NB] - BB[AB], yB = BB[RB] - BB[VB], JB = BB[SB] - BB[WB], MB = BB[nB] - BB[AB], PB = BB[UB] - BB[VB], zB = uB * (jB * PB - yB * MB), lB = uB * (yB * JB - oB * PB), pB = uB * (oB * MB - jB * JB), qB = Math.sqrt(zB * zB + lB * lB + pB * pB), qB = 0 === qB ? 1 : qB, zB /= qB, lB /= qB, pB /= qB, fB && YB && (YB.facetNormals[QB].x = zB, YB.facetNormals[QB].y = lB, YB.facetNormals[QB].z = pB), kB && YB && (YB.facetPositions[QB].x = (BB[ZB] + BB[WB] + BB[SB]) / 3, YB.facetPositions[QB].y = (BB[NB] + BB[AB] + BB[nB]) / 3, YB.facetPositions[QB].z = (BB[RB] + BB[VB] + BB[UB]) / 3), dB && YB) {
              const OB = Math.floor((YB.facetPositions[QB].x - YB.bInfo.minimum.x * mB) * FB),
                GB = Math.floor((YB.facetPositions[QB].y - YB.bInfo.minimum.y * mB) * iB),
                DB = Math.floor((YB.facetPositions[QB].z - YB.bInfo.minimum.z * mB) * LB),
                oB = Math.floor((BB[ZB] - YB.bInfo.minimum.x * mB) * FB),
                jB = Math.floor((BB[NB] - YB.bInfo.minimum.y * mB) * iB),
                yB = Math.floor((BB[RB] - YB.bInfo.minimum.z * mB) * LB),
                JB = Math.floor((BB[WB] - YB.bInfo.minimum.x * mB) * FB),
                MB = Math.floor((BB[AB] - YB.bInfo.minimum.y * mB) * iB),
                PB = Math.floor((BB[VB] - YB.bInfo.minimum.z * mB) * LB),
                zB = Math.floor((BB[SB] - YB.bInfo.minimum.x * mB) * FB),
                lB = Math.floor((BB[nB] - YB.bInfo.minimum.y * mB) * iB),
                pB = Math.floor((BB[UB] - YB.bInfo.minimum.z * mB) * LB),
                qB = oB + YB.subDiv.max * jB + gB * yB,
                fB = JB + YB.subDiv.max * MB + gB * PB,
                kB = zB + YB.subDiv.max * lB + gB * pB,
                dB = OB + YB.subDiv.max * GB + gB * DB;
              YB.facetPartitioning[dB] = YB.facetPartitioning[dB] ? YB.facetPartitioning[dB] : [], YB.facetPartitioning[qB] = YB.facetPartitioning[qB] ? YB.facetPartitioning[qB] : [], YB.facetPartitioning[fB] = YB.facetPartitioning[fB] ? YB.facetPartitioning[fB] : [], YB.facetPartitioning[kB] = YB.facetPartitioning[kB] ? YB.facetPartitioning[kB] : [], YB.facetPartitioning[qB].push(QB), fB != qB && YB.facetPartitioning[fB].push(QB), kB != fB && kB != qB && YB.facetPartitioning[kB].push(QB), dB != qB && dB != fB && dB != kB && YB.facetPartitioning[dB].push(QB)
            }
            if (KB && YB && YB.facetPositions) {
              const BB = YB.depthSortedFacets[QB];
              BB.ind = 3 * QB, BB.sqDistance = DB.r.DistanceSquared(YB.facetPositions[QB], IB)
            }
            GB[ZB] += zB, GB[NB] += lB, GB[RB] += pB, GB[WB] += zB, GB[AB] += lB, GB[VB] += pB, GB[SB] += zB, GB[nB] += lB, GB[UB] += pB
          }
          for (QB = 0; QB < GB.length / 3; QB++) zB = GB[3 * QB], lB = GB[3 * QB + 1], pB = GB[3 * QB + 2], qB = Math.sqrt(zB * zB + lB * lB + pB * pB), qB = 0 === qB ? 1 : qB, zB /= qB, lB /= qB, pB /= qB, GB[3 * QB] = zB, GB[3 * QB + 1] = lB, GB[3 * QB + 2] = pB
        }
        static _ComputeSides(OB, GB, YB, QB, oB, jB, yB) {
          const JB = YB.length,
            MB = QB.length;
          let PB, zB;
          switch (OB = OB || BB.DEFAULTSIDE) {
            case BB.FRONTSIDE:
              break;
            case BB.BACKSIDE:
              for (PB = 0; PB < JB; PB += 3) {
                const BB = YB[PB];
                YB[PB] = YB[PB + 2], YB[PB + 2] = BB
              }
              for (zB = 0; zB < MB; zB++) QB[zB] = -QB[zB];
              break;
            case BB.DOUBLESIDE: {
              const BB = GB.length,
                OB = BB / 3;
              for (let YB = 0; YB < BB; YB++) GB[BB + YB] = GB[YB];
              for (PB = 0; PB < JB; PB += 3) YB[PB + JB] = YB[PB + 2] + OB, YB[PB + 1 + JB] = YB[PB + 1] + OB, YB[PB + 2 + JB] = YB[PB] + OB;
              for (zB = 0; zB < MB; zB++) QB[MB + zB] = -QB[zB];
              const lB = oB.length;
              let pB;
              for (pB = 0; pB < lB; pB++) oB[pB + lB] = oB[pB];
              for (jB = jB || new DB.t(0, 0, 1, 1), yB = yB || new DB.t(0, 0, 1, 1), pB = 0, PB = 0; PB < lB / 2; PB++) oB[pB] = jB.x + (jB.z - jB.x) * oB[pB], oB[pB + 1] = jB.y + (jB.w - jB.y) * oB[pB + 1], oB[pB + lB] = yB.x + (yB.z - yB.x) * oB[pB + lB], oB[pB + lB + 1] = yB.y + (yB.w - yB.y) * oB[pB + lB + 1], pB += 2;
              break
            }
          }
        }
        static Parse(OB) {
          const GB = new BB,
            YB = OB.positions;
          YB && GB.set(YB, QB.h.PositionKind);
          const DB = OB.normals;
          DB && GB.set(DB, QB.h.NormalKind);
          const oB = OB.tangents;
          oB && GB.set(oB, QB.h.TangentKind);
          const yB = OB.uvs;
          yB && GB.set(yB, QB.h.UVKind);
          const JB = OB.uvs2;
          JB && GB.set(JB, QB.h.UV2Kind);
          const MB = OB.uvs3;
          MB && GB.set(MB, QB.h.UV3Kind);
          const PB = OB.uvs4;
          PB && GB.set(PB, QB.h.UV4Kind);
          const zB = OB.uvs5;
          zB && GB.set(zB, QB.h.UV5Kind);
          const pB = OB.uvs6;
          pB && GB.set(pB, QB.h.UV6Kind);
          const qB = OB.colors;
          qB && (GB.set(jB.g.CheckColors4(qB, YB.length / 3), QB.h.ColorKind), void 0 !== OB.hasVertexAlpha && (GB.hasVertexAlpha = OB.hasVertexAlpha));
          const ZB = OB.matricesIndices;
          ZB && GB.set(ZB, QB.h.MatricesIndicesKind);
          const NB = OB.matricesWeights;
          NB && GB.set(NB, QB.h.MatricesWeightsKind);
          const RB = OB.indices;
          RB && (GB.indices = RB);
          const WB = OB.materialInfos;
          if (WB) {
            GB.materialInfos = [];
            for (const BB of WB) {
              const OB = new lB;
              OB.indexCount = BB.indexCount, OB.indexStart = BB.indexStart, OB.verticesCount = BB.verticesCount, OB.verticesStart = BB.verticesStart, OB.materialIndex = BB.materialIndex, GB.materialInfos.push(OB)
            }
          }
          return GB
        }
        static ImportVertexData(OB, GB) {
          const YB = BB.Parse(OB);
          GB.setAllVerticesData(YB, OB.updatable)
        }
      }, (() => {
        const DB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [JB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], GB = [JB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], pB = [JB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], qB = [JB.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, YB.h)(BB, null, OB, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Coordinates" in BB,
            get: BB => BB._TransformVector3Coordinates
          },
          metadata: DB
        }, null, ZB), (0, YB.h)(BB, null, GB, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Normals" in BB,
            get: BB => BB._TransformVector3Normals
          },
          metadata: DB
        }, null, ZB), (0, YB.h)(BB, null, pB, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector4Normals" in BB,
            get: BB => BB._TransformVector4Normals
          },
          metadata: DB
        }, null, ZB), (0, YB.h)(BB, null, qB, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: BB => "_FlipFaces" in BB,
            get: BB => BB._FlipFaces
          },
          metadata: DB
        }, null, ZB), DB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DB
        })
      })(), BB.FRONTSIDE = ((0, YB.j)(BB, ZB), 0), BB.BACKSIDE = 1, BB.DOUBLESIDE = 2, BB.DEFAULTSIDE = 0, BB._UniqueIdGenerator = 0, BB
    })()
  },
  41472: (BB, OB, GB) => {
    var YB = GB(37778),
      DB = GB(39366),
      QB = GB(41300),
      oB = GB(41411),
      jB = GB(41150);
    const yB = "bakedVertexAnimationSettingsInstanced";

    function JB(BB) {
      const OB = BB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return OB instanceof Float32Array || OB instanceof Uint16Array
    }

    function MB(BB, OB, GB, YB) {
      GB.uBB(Number.POSITIVE_INFINITY), YB.uBB(Number.NEGATIVE_INFINITY);
      for (let DB = 0; DB < 3 * OB; DB += 3) {
        const OB = BB[DB],
          QB = BB[DB + 1],
          oB = BB[DB + 2];
        OB < GB.x && (GB.x = OB), QB < GB.y && (GB.y = QB), oB < GB.z && (GB.z = oB), OB > YB.x && (YB.x = OB), QB > YB.y && (YB.y = QB), oB > YB.z && (YB.z = oB)
      }
    }

    function PB(BB, OB, GB) {
      GB && (BB.x -= BB.x * GB.x + GB.y, BB.y -= BB.y * GB.x + GB.y, BB.z -= BB.z * GB.x + GB.y, OB.x += OB.x * GB.x + GB.y, OB.y += OB.y * GB.x + GB.y, OB.z += OB.z * GB.x + GB.y)
    }

    function zB(BB, OB, GB, DB, QB) {
      const oB = YB.k.Xp[7],
        jB = YB.k.Xp[8];
      for (let yB = 0; yB < 2; ++yB)
        for (let JB = 0; JB < 2; ++JB)
          for (let MB = 0; MB < 2; ++MB) oB.set(yB ? OB.x : BB.x, JB ? OB.y : BB.y, MB ? OB.z : BB.z), YB.r.TransformCoordinatesToRef(oB, GB, jB), DB.minimizeInPlace(jB), QB.maximizeInPlace(jB)
    }

    function lB(BB, OB, GB, DB, QB) {
      const oB = YB.k.Xp[7];
      for (let jB = 0; jB < 3 * OB; jB += 3) YB.r.TransformCoordinatesFromFloatsToRef(BB[jB], BB[jB + 1], BB[jB + 2], GB, oB), DB.minimizeInPlace(oB), QB.maximizeInPlace(oB)
    }
    let pB = !1;
    pB || (pB = !0, oB.c.prototype.thinInstanceAdd = function(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.JF().Lp().getCaps().instancedArrays) return DB.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(BB) ? BB.length : 1);
      const GB = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(BB))
        for (let YB = 0; YB < BB.length; ++YB) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB[YB], YB === BB.length - 1 && OB);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB, OB);
      return GB
    }, oB.c.prototype.thinInstanceAddSelf = function() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(YB.d.IdentityReadOnly, BB)
    }, oB.c.prototype.thinInstanceRegisterAttribute = function(BB, OB) {
      BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = OB, this._userThinInstanceBuffersStorage.sizes[BB] = OB * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[BB] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[BB]), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new jB.h(this.Lp(), this._userThinInstanceBuffersStorage.data[BB], BB, !0, !1, OB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB])
    }, oB.c.prototype.thinInstanceSetMatrixAt = function(BB, OB) {
      let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || BB >= this._thinInstanceDataStorage.instancesCount) return !1;
      const YB = this._thinInstanceDataStorage.matrixData;
      return OB.copyToArray(YB, 16 * BB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[BB] = OB), GB && (this.HBB("matrix"), this.Ep || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, oB.c.prototype.thinInstanceSetAttributeAt = function(BB, OB, GB) {
      let YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[BB] || OB >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(BB, 0), this._userThinInstanceBuffersStorage.data[BB].set(GB, OB * this._userThinInstanceBuffersStorage.strides[BB]), YB && this.HBB(BB), !0)
    }, Object.defineProperty(oB.c.prototype, "rBB", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(BB) {
        const OB = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        BB <= (OB ? OB.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = BB)
      },
      enumerable: !0,
      configurable: !0
    }), oB.c.prototype._thinInstanceCreateMatrixBuffer = function(BB, OB) {
      let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const YB = new jB.c(this.Lp(), OB, !GB, 16, !1, !0);
      for (let DB = 0; DB < 4; DB++) this.setVerticesBuffer(YB.createVertexBuffer(BB + DB, 4 * DB, 4));
      return YB
    }, oB.c.prototype.DOB = function(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (GB = GB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = OB ? OB.length : 32 * GB, this._thinInstanceDataStorage.matrixData = OB, this._thinInstanceDataStorage.worldMatrices = null, null !== OB ? (this._thinInstanceDataStorage.instancesCount = OB.length / GB, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", OB, YB), this.Ep || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Ep || this.refreshBoundingInfo());
      else if ("previousMatrix" === BB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = OB, null !== OB && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", OB, YB));
      else if ("splatIndex" === BB && OB) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = OB.length / GB, this._userThinInstanceBuffersStorage.data[BB] = OB, this._userThinInstanceBuffersStorage.strides[BB] = GB, this._userThinInstanceBuffersStorage.sizes[BB] = OB.length;
        const YB = new jB.c(this.Lp(), OB, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = YB;
        for (let OB = 0; OB < 4; OB++) this.setVerticesBuffer(YB.createVertexBuffer(BB + OB, 4 * OB, 4))
      } else BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), null === OB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete this._userThinInstanceBuffersStorage.sizes[BB], delete this._userThinInstanceBuffersStorage.vertexBuffers[BB]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[BB] = OB, this._userThinInstanceBuffersStorage.strides[BB] = GB, this._userThinInstanceBuffersStorage.sizes[BB] = OB.length, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new jB.h(this.Lp(), OB, BB, !YB, !1, GB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, oB.c.prototype.HBB = function(BB) {
      "matrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === BB ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0, this._thinInstanceDataStorage.instancesCount) : (BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[BB].isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0)))
    }, oB.c.prototype.thinInstancePartialBufferUpdate = function(BB, OB, GB) {
      if ("matrix" === BB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof OB ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * GB * Float32Array.BYTES_PER_ELEMENT, 16 * OB), 16 * GB) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(OB, GB));
      else if (BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB]) {
        const YB = this._userThinInstanceBuffersStorage.vertexBuffers[BB];
        if ("number" === typeof OB) {
          const YB = new Float32Array(this._userThinInstanceBuffersStorage.data[BB].buffer, this._userThinInstanceBuffersStorage.data[BB].byteOffset + GB * this._userThinInstanceBuffersStorage.strides[BB] * Float32Array.BYTES_PER_ELEMENT, OB * this._userThinInstanceBuffersStorage.strides[BB]);
          this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(YB, GB * this._userThinInstanceBuffersStorage.strides[BB])
        } else YB.updateDirectly(OB, GB)
      }
    }, oB.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const BB = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let OB = 0; OB < this._thinInstanceDataStorage.instancesCount; ++OB) this._thinInstanceDataStorage.worldMatrices[OB] = YB.d.FromArray(BB, 16 * OB)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, oB.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const oB = this._thinInstanceDataStorage.boundingVectors;
      if (BB || !this.rawBoundingInfo) {
        if (oB.length = 0, DB && function(BB, OB, GB) {
            const DB = BB._userThinInstanceBuffersStorage,
              oB = DB?.data[yB],
              pB = DB?.strides[yB];
            if (!oB || !pB || pB < 4 || !JB(BB)) return !1;
            const qB = BB._thinInstanceDataStorage.matrixData;
            if (!qB) return !1;
            const ZB = {},
              NB = YB.k.Vector4[0],
              RB = YB.k.Xp[1],
              WB = YB.k.Xp[2],
              AB = YB.k.Xp[3],
              VB = YB.k.Xp[4],
              SB = YB.k.Xp[5],
              nB = YB.k.Xp[6],
              UB = YB.k.Matrix[2],
              fB = BB.geometry ? BB.geometry.boundingBias : null,
              kB = BB.getTotalVertices();
            RB.uBB(Number.POSITIVE_INFINITY), WB.uBB(Number.NEGATIVE_INFINITY), AB.uBB(Number.POSITIVE_INFINITY), VB.uBB(Number.NEGATIVE_INFINITY);
            for (let QB = 0; QB < BB._thinInstanceDataStorage.instancesCount; ++QB) {
              const OB = QB * pB;
              NB.set(oB[OB], oB[OB + 1], oB[OB + 2], oB[OB + 3]);
              const DB = BB._getData({
                applyMorph: GB,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: NB,
                updatePositionsArray: !1,
                cache: ZB
              }, null, jB.h.PositionKind);
              if (!DB) return !1;
              MB(DB, kB, SB, nB), PB(SB, nB, fB), RB.minimizeInPlace(SB), WB.maximizeInPlace(nB), YB.d.FromArrayToRef(qB, 16 * QB, UB), fB ? zB(SB, nB, UB, AB, VB) : lB(DB, kB, UB, AB, VB)
            }
            return !(!isFinite(RB.x) || !isFinite(AB.x)) && (BB.Gw().reConstruct(AB, VB), BB.rawBoundingInfo = new QB.e(RB, WB), function(BB, OB) {
              BB.length = 0;
              for (let GB = 0; GB < OB.boundingBox.vectors.length; ++GB) BB.push(OB.boundingBox.vectors[GB].clone())
            }(OB, BB.rawBoundingInfo), BB._updateBoundingInfo(), !0)
          }(this, oB, GB)) return;
        DB && this.bakedVertexAnimationManager?.isEnabled && JB(this) ? this.refreshBoundingInfo({
          applySkeleton: OB,
          applyMorph: GB,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(OB, GB);
        const BB = this.Gw();
        this.rawBoundingInfo = new QB.e(BB.minimum, BB.maximum)
      }
      const pB = this.Gw(),
        qB = this._thinInstanceDataStorage.matrixData;
      if (0 === oB.length)
        for (let YB = 0; YB < pB.boundingBox.vectors.length; ++YB) oB.push(pB.boundingBox.vectors[YB].clone());
      YB.k.Xp[0].uBB(Number.POSITIVE_INFINITY), YB.k.Xp[1].uBB(Number.NEGATIVE_INFINITY);
      for (let QB = 0; QB < this._thinInstanceDataStorage.instancesCount; ++QB) {
        YB.d.FromArrayToRef(qB, 16 * QB, YB.k.Matrix[0]);
        for (let BB = 0; BB < oB.length; ++BB) YB.r.TransformCoordinatesToRef(oB[BB], YB.k.Matrix[0], YB.k.Xp[2]), YB.k.Xp[0].minimizeInPlace(YB.k.Xp[2]), YB.k.Xp[1].maximizeInPlace(YB.k.Xp[2])
      }
      pB.reConstruct(YB.k.Xp[0], YB.k.Xp[1]), this._updateBoundingInfo()
    }, oB.c.prototype._thinInstanceRecreateBuffer = function(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, OB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, OB)) : (BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new jB.h(this.Lp(), this._userThinInstanceBuffersStorage.data[BB], BB, !OB, !1, this._userThinInstanceBuffersStorage.strides[BB], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, oB.c.prototype._thinInstanceUpdateBufferSize = function(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      BB === jB.h.ColorKind && (BB = jB.h.ColorInstanceKind);
      const GB = "matrix" === BB;
      if (!GB && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[BB])) return;
      const YB = GB ? 16 : this._userThinInstanceBuffersStorage.strides[BB],
        DB = GB ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[BB];
      let QB = GB ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[BB];
      const oB = (this._thinInstanceDataStorage.instancesCount + OB) * YB;
      let yB = DB;
      for (; yB < oB;) yB *= 2;
      if (!QB || DB != yB) {
        if (QB) {
          const BB = new Float32Array(yB);
          BB.set(QB, 0), QB = BB
        } else QB = new Float32Array(yB);
        GB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", QB, !1), this._thinInstanceDataStorage.matrixData = QB, this._thinInstanceDataStorage.matrixBufferSize = yB, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", QB, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.data[BB] = QB, this._userThinInstanceBuffersStorage.sizes[BB] = yB, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new jB.h(this.Lp(), QB, BB, !0, !1, YB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
      }
    }, oB.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, oB.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41444: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => RB,
      h: () => qB
    });
    var YB, DB, QB, oB, jB = GB(40998),
      yB = GB(41004),
      JB = GB(41022),
      MB = GB(37802),
      PB = GB(37778),
      zB = GB(41220),
      lB = GB(37823),
      pB = GB(40890);
    let qB = (() => {
      var BB;
      let OB, GB, YB, DB, QB, oB, lB, pB, qB, ZB = zB.b,
        NB = [],
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        fB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [];
      return BB = class extends ZB {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(OB) {
          this._billboardMode !== OB && (this._billboardMode = OB, this._cache.useBillboardPosition = 0 !== (this._billboardMode & BB.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(BB) {
          this._infiniteDistance !== BB && (this._infiniteDistance = BB)
        }
        constructor(OB) {
          let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(OB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new PB.r(0, 0, 1), this._up = new PB.r(0, 1, 0), this._right = new PB.r(1, 0, 0), this._position = (0, jB.j)(this, NB, PB.r.Zero()), this._rotation = ((0, jB.j)(this, RB), (0, jB.j)(this, WB, PB.r.Zero())), this._rotationQuaternion = ((0, jB.j)(this, AB), (0, jB.j)(this, VB, null)), this._scaling = ((0, jB.j)(this, SB), (0, jB.j)(this, nB, PB.r.One())), this._transformToBoneReferal = ((0, jB.j)(this, UB), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, jB.j)(this, fB, BB.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, jB.j)(this, kB), (0, jB.j)(this, dB, 1)), this._infiniteDistance = ((0, jB.j)(this, KB), (0, jB.j)(this, uB, !1)), this.ignoreNonUniformScaling = ((0, jB.j)(this, mB), (0, jB.j)(this, IB, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, jB.j)(this, FB), (0, jB.j)(this, iB, !1)), this._poseMatrix = ((0, jB.j)(this, LB), null), this._localMatrix = PB.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = PB.r.Zero(), this._absoluteScaling = PB.r.Zero(), this._absoluteRotationQuaternion = PB.f.Identity(), this._pivotMatrix = PB.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new MB.b, this._nonUniformScaling = !1, GB && this.JF().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(BB) {
          this._position = BB, this._markAsDirtyInternal()
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
        set rotation(BB) {
          this._rotation = BB, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get SP() {
          return this._scaling
        }
        set SP(BB) {
          this._scaling = BB, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(BB) {
          this._rotationQuaternion = BB, BB && this._rotation.uBB(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return PB.r.TransformNormalFromFloatsToRef(0, 0, this.JF().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return PB.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return PB.r.TransformNormalFromFloatsToRef(this.JF().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(BB) {
          return this._poseMatrix ? (this._poseMatrix.IU(BB), this) : (this._poseMatrix = BB.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = PB.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const OB = this._cache;
          return this._billboardMode === OB.billboardMode && this._billboardMode === BB.BILLBOARDMODE_NONE && (!OB.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const BB = this._cache;
          BB.localMatrixUpdated = !1, BB.billboardMode = -1, BB.infiniteDistance = !1, BB.useBillboardPosition = !1
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
        setPreTransformMatrix(BB) {
          return this.setPivotMatrix(BB, !1)
        }
        setPivotMatrix(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.IU(BB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = OB, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = PB.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            OB = arguments.length > 1 ? arguments[1] : void 0,
            GB = arguments.length > 2 ? arguments[2] : void 0;
          const YB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0);
          YB && GB && GB(this, YB);
          for (const DB of this.getChildTransformNodes(!0)) DB.instantiateHierarchy(YB, OB, GB);
          return YB
        }
        mF() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.uBB(0), this._rotationQuaternion = this._rotationQuaternion || PB.f.Identity(), BB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = BB, this._absolutePosition.zOB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get yyB() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(BB) {
          if (!BB) return this;
          let OB, GB, YB;
          if (void 0 === BB.x) {
            if (arguments.length < 3) return this;
            OB = arguments[0], GB = arguments[1], YB = arguments[2]
          } else OB = BB.x, GB = BB.y, YB = BB.z;
          if (this.parent) {
            const BB = PB.k.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(BB), PB.r.TransformCoordinatesFromFloatsToRef(OB, GB, YB, BB, this.position)
          } else this.position.x = OB, this.position.y = GB, this.position.z = YB;
          return this._absolutePosition.IU(BB), this
        }
        setPositionWithLocalVector(BB) {
          return this.computeWorldMatrix(), this.position = PB.r.TransformNormal(BB, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const BB = PB.k.Matrix[0];
          return this._localMatrix.invertToRef(BB), PB.r.TransformNormal(this.position, BB)
        }
        locallyTranslate(BB) {
          return this.computeWorldMatrix(!0), this.position = PB.r.TransformCoordinates(BB, this._localMatrix), this
        }
        lookAt(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const oB = BB._LookAtVectorCache,
            jB = 0 === QB ? this.position : this.getAbsolutePosition();
          if (OB.subtractToRef(jB, oB), this.setDirection(oB, GB, YB, DB), 1 === QB && this.parent)
            if (this.rotationQuaternion) {
              const BB = PB.k.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(BB);
              const OB = PB.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(OB), OB.invert(), BB.multiplyToRef(OB, BB), this.rotationQuaternion.fromRotationMatrix(BB)
            } else {
              const BB = PB.k.Quaternion[0];
              PB.f.FromEulerVectorToRef(this.rotation, BB);
              const OB = PB.k.Matrix[0];
              BB.toRotationMatrix(OB);
              const GB = PB.k.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(GB), GB.invert(), OB.multiplyToRef(GB, OB), BB.fromRotationMatrix(OB), BB.toEulerAnglesToRef(this.rotation)
            } return this
        }
        B_(BB) {
          const OB = PB.r.Zero();
          return this.getDirectionToRef(BB, OB), OB
        }
        getDirectionToRef(BB, OB) {
          return PB.r.TransformNormalToRef(BB, this.getWorldMatrix(), OB), this
        }
        setDirection(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const DB = -Math.atan2(BB.z, BB.x) + Math.PI / 2,
            QB = Math.sqrt(BB.x * BB.x + BB.z * BB.z),
            oB = -Math.atan2(BB.y, QB);
          return this.rotationQuaternion ? PB.f.RotationYawPitchRollToRef(DB + OB, oB + GB, YB, this.rotationQuaternion) : (this.rotation.x = oB + GB, this.rotation.y = DB + OB, this.rotation.z = YB), this
        }
        setPivotPoint(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.JF().getRenderId() && this.computeWorldMatrix(!0);
          const GB = this.getWorldMatrix();
          if (1 == OB) {
            const OB = PB.k.Matrix[0];
            GB.invertToRef(OB), BB = PB.r.TransformCoordinates(BB, OB)
          }
          return this.setPivotMatrix(PB.d.Translation(-BB.x, -BB.y, -BB.z), !0)
        }
        getPivotPoint() {
          const BB = PB.r.Zero();
          return this.getPivotPointToRef(BB), BB
        }
        getPivotPointToRef(BB) {
          return BB.x = -this._pivotMatrix.m[12], BB.y = -this._pivotMatrix.m[13], BB.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const BB = PB.r.Zero();
          return this.getAbsolutePivotPointToRef(BB), BB
        }
        getAbsolutePivotPointToRef(BB) {
          return this.getPivotPointToRef(BB), PB.r.TransformCoordinatesToRef(BB, this.getWorldMatrix(), BB), this
        }
        DYB(BB) {
          if (this._isDirty) return this;
          if (this._children)
            for (const OB of this._children) OB.DYB(BB);
          return super.DYB(BB)
        }
        setParent(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!OB && !this.parent) return this;
          const DB = PB.k.Quaternion[0],
            QB = PB.k.Xp[0],
            oB = PB.k.Xp[1],
            jB = PB.k.Matrix[1];
          PB.d.IdentityToRef(jB);
          const yB = PB.k.Matrix[0];
          this.computeWorldMatrix(!0);
          let JB = this.rotationQuaternion;
          return JB || (JB = BB._TmpRotation, PB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, JB)), PB.d.ComposeToRef(this.SP, JB, this.position, yB), this.parent && yB.multiplyToRef(this.parent.computeWorldMatrix(!0), yB), OB && (OB.computeWorldMatrix(!0).invertToRef(jB), yB.multiplyToRef(jB, yB)), yB.decompose(oB, DB, QB, GB ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.IU(DB) : DB.toEulerAnglesToRef(this.rotation), this.SP.IU(oB), this.position.IU(QB), this.parent = OB, YB && this.setPivotMatrix(PB.d.Identity()), this
        }
        addChild(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.setParent(this, OB), this
        }
        removeChild(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.parent !== this || BB.setParent(null, OB), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(BB) {
          return this._nonUniformScaling !== BB && (this._nonUniformScaling = BB, !0)
        }
        attachToBone(BB, OB) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = OB, this.parent = BB, BB.getSkeleton().prepare(!0), BB.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = BB ? this._currentParentWhenAttachingToBone : null, this) : (BB && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(OB, GB, YB) {
          let DB;
          if (OB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.uBB(0)), YB && 0 !== YB) {
            if (this.parent) {
              const BB = this.parent.getWorldMatrix(),
                YB = PB.k.Matrix[0];
              BB.invertToRef(YB), OB = PB.r.TransformNormal(OB, YB), BB.determinant() < 0 && (GB *= -1)
            }
            DB = PB.f.RotationAxisToRef(OB, GB, BB._RotationAxisCache), DB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else DB = PB.f.RotationAxisToRef(OB, GB, BB._RotationAxisCache), this.rotationQuaternion.multiplyToRef(DB, this.rotationQuaternion);
          return this
        }
        rotateAround(BB, OB, GB) {
          OB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = PB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.uBB(0));
          const YB = PB.k.Xp[0],
            DB = PB.k.Xp[1],
            QB = PB.k.Xp[2],
            oB = PB.k.Quaternion[0],
            jB = PB.k.Matrix[0],
            yB = PB.k.Matrix[1],
            JB = PB.k.Matrix[2],
            MB = PB.k.Matrix[3];
          return BB.subtractToRef(this.position, YB), PB.d.TranslationToRef(YB.x, YB.y, YB.z, jB), PB.d.TranslationToRef(-YB.x, -YB.y, -YB.z, yB), PB.d.RotationAxisToRef(OB, GB, JB), yB.multiplyToRef(JB, MB), MB.multiplyToRef(jB, MB), MB.decompose(DB, oB, QB), this.position.addInPlace(QB), oB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(BB, OB, GB) {
          const YB = BB.scale(OB);
          if (GB && 0 !== GB) this.setAbsolutePosition(this.getAbsolutePosition().add(YB));
          else {
            const BB = this.getPositionExpressedInLocalSpace().add(YB);
            this.setPositionWithLocalVector(BB)
          }
          return this
        }
        addRotation(BB, OB, GB) {
          let YB;
          this.rotationQuaternion ? YB = this.rotationQuaternion : (YB = PB.k.Quaternion[1], PB.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, YB));
          const DB = PB.k.Quaternion[0];
          return PB.f.RotationYawPitchRollToRef(OB, BB, GB, DB), YB.multiplyInPlace(DB), this.rotationQuaternion || YB.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== BB.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const YB = this.JF().getRenderId();
          if (!this._isDirty && !OB && (this._currentRenderId === YB || this.isSynchronized())) return this._currentRenderId = YB, this._worldMatrix;
          GB = GB || this.JF().activeCamera, this._updateCache();
          const DB = this._cache;
          DB.pivotMatrixUpdated = !1, DB.billboardMode = this.billboardMode, DB.infiniteDistance = this.infiniteDistance, DB.parent = this._parentNode, this._currentRenderId = YB, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const QB = this._getEffectiveParent(),
            oB = BB._TmpScaling;
          let jB, yB = this._position;
          if (this._infiniteDistance && !this.parent && GB) {
            const OB = GB.getWorldMatrix().m;
            yB = BB._TmpTranslation, yB.zOB(this._position.x + OB[12], this._position.y + OB[13], this._position.z + OB[14])
          }
          if (oB.zOB(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, jB = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(PB.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.zOB(0, 0, 0))
            }
          } else jB = BB._TmpRotation, PB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, jB);
          if (this._usePivotMatrix) {
            const BB = PB.k.Matrix[1];
            PB.d.ScalingToRef(oB.x, oB.y, oB.z, BB);
            const OB = PB.k.Matrix[0];
            jB.toRotationMatrix(OB), this._pivotMatrix.multiplyToRef(BB, PB.k.Matrix[4]), PB.k.Matrix[4].multiplyToRef(OB, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(yB.x, yB.y, yB.z)
          } else PB.d.ComposeToRef(oB, jB, yB, this._localMatrix);
          if (QB && QB.getWorldMatrix) {
            if (OB && QB.computeWorldMatrix(OB), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const BB = this.parent;
                BB.getSkeleton().prepare(), BB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), PB.k.Matrix[7])
              } else PB.k.Matrix[7].IU(QB.getWorldMatrix());
              const OB = PB.k.Xp[5],
                GB = PB.k.Xp[6],
                YB = PB.k.Quaternion[0];
              PB.k.Matrix[7].decompose(GB, YB, OB), PB.d.ScalingToRef(GB.x, GB.y, GB.z, PB.k.Matrix[7]), PB.k.Matrix[7].setTranslation(OB), BB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(YB, OB), this._localMatrix.setTranslation(OB)), this._localMatrix.multiplyToRef(PB.k.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const BB = this.parent;
              BB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(BB.getFinalMatrix(), PB.k.Matrix[6]), PB.k.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(QB.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.IU(this._localMatrix);
          if (GB && this.billboardMode)
            if (DB.useBillboardPosition) {
              const OB = PB.k.Xp[0];
              this._worldMatrix.getTranslationToRef(OB);
              const YB = GB.globalPosition;
              this._worldMatrix.invertToRef(PB.k.Matrix[1]);
              const DB = PB.k.Xp[1];
              PB.r.TransformCoordinatesToRef(YB, PB.k.Matrix[1], DB), DB.normalize();
              const QB = -Math.atan2(DB.z, DB.x) + Math.PI / 2,
                oB = Math.sqrt(DB.x * DB.x + DB.z * DB.z),
                jB = -Math.atan2(DB.y, oB);
              if (PB.f.RotationYawPitchRollToRef(QB, jB, 0, PB.k.Quaternion[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                const OB = PB.k.Xp[1];
                PB.k.Quaternion[0].toEulerAnglesToRef(OB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (OB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (OB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (OB.z = 0), PB.d.RotationYawPitchRollToRef(OB.y, OB.x, OB.z, PB.k.Matrix[0])
              } else PB.d.FromQuaternionToRef(PB.k.Quaternion[0], PB.k.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(PB.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(PB.k.Xp[0])
            } else {
              const OB = PB.k.Xp[0];
              this._worldMatrix.getTranslationToRef(OB), PB.k.Matrix[1].IU(GB.getViewMatrix());
              const YB = this.JF().useRightHandedSystem;
              if (YB && PB.k.Matrix[1].multiplyToRef(BB._TmpRHRestore, PB.k.Matrix[1]), PB.k.Matrix[1].setTranslationFromFloats(0, 0, 0), PB.k.Matrix[1].invertToRef(PB.k.Matrix[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                PB.k.Matrix[0].decompose(void 0, PB.k.Quaternion[0], void 0);
                const OB = PB.k.Xp[1];
                PB.k.Quaternion[0].toEulerAnglesToRef(OB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (OB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (OB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (OB.z = 0), YB && (OB.y += Math.PI), PB.d.RotationYawPitchRollToRef(OB.y, OB.x, OB.z, PB.k.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(PB.k.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(PB.k.Xp[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : QB && QB._nonUniformScaling ? this._updateNonUniformScalingState(QB._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.zOB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = PB.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), BB) {
            const BB = this.getChildren();
            for (let OB = 0; OB < BB.length; ++OB) {
              const GB = BB[OB];
              if (GB) {
                GB.computeWorldMatrix();
                const BB = PB.k.Matrix[0];
                GB._localMatrix.multiplyToRef(this._localMatrix, BB);
                const OB = PB.k.Quaternion[0];
                BB.decompose(GB.SP, OB, GB.position), GB.rotationQuaternion ? GB.rotationQuaternion.IU(OB) : OB.toEulerAnglesToRef(GB.rotation)
              }
            }
          }
          this.SP.zOB(1, 1, 1), this.position.zOB(0, 0, 0), this.rotation.zOB(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = PB.f.Identity()), this._worldMatrix = PB.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(BB) {
          return this.onAfterWorldMatrixUpdateObservable.add(BB), this
        }
        unregisterAfterWorldMatrixUpdate(BB) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(BB), this
        }
        getPositionInCameraSpace() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.JF().activeCamera), PB.r.TransformCoordinates(this.getAbsolutePosition(), BB.getViewMatrix())
        }
        getDistanceToCamera() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.JF().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
        }
        clone(OB, GB, YB) {
          const DB = JB.d.Clone((() => new BB(OB, this.JF())), this);
          if (DB.name = OB, DB.id = OB, GB && (DB.parent = GB), !YB) {
            const BB = this.getDescendants(!0);
            for (let GB = 0; GB < BB.length; GB++) {
              const YB = BB[GB];
              YB.clone && YB.clone(OB + "." + YB.name, DB)
            }
          }
          return DB
        }
        serialize(BB) {
          const OB = JB.d.Serialize(this, BB);
          return OB.type = this.getClassName(), OB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(OB), OB.localMatrix = this.getPivotMatrix().dDB(), OB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (OB.mF = !0), JB.d.AppendSerializedAnimations(this, OB), OB.JZ = this.serializeAnimationRanges(), OB
        }
        getChildTransformNodes(OB, GB) {
          const YB = [];
          return this._getDescendants(YB, OB, (OB => (!GB || GB(OB)) && OB instanceof BB)), YB
        }
        dispose(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.JF().stopAnimation(this), this.JF().removeTransformNode(this), this._parentContainer) {
            const BB = this._parentContainer.transformNodes.indexOf(this);
            BB > -1 && this._parentContainer.transformNodes.splice(BB, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), BB) {
            const BB = this.getChildTransformNodes(!0);
            for (const OB of BB) OB.parent = null, OB.computeWorldMatrix(!0)
          }
          super.dispose(BB, OB)
        }
        normalizeToUnitCube() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0,
            YB = null,
            DB = null;
          OB && (this.rotationQuaternion ? (DB = this.rotationQuaternion.clone(), this.rotationQuaternion.zOB(0, 0, 0, 1)) : this.rotation && (YB = this.rotation.clone(), this.rotation.zOB(0, 0, 0)));
          const QB = this.getHierarchyBoundingVectors(BB, GB),
            oB = QB.max.subtract(QB.min),
            jB = Math.max(oB.x, oB.y, oB.z);
          if (0 === jB) return this;
          const yB = 1 / jB;
          return this.SP.scaleInPlace(yB), OB && (this.rotationQuaternion && DB ? this.rotationQuaternion.IU(DB) : this.rotation && YB && this.rotation.IU(YB)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZB[Symbol.metadata] ?? null) : void 0;
        OB = [(0, yB.H)("position")], GB = [(0, yB.H)("rotation")], YB = [(0, yB.z)("rotationQuaternion")], DB = [(0, yB.H)("SP")], QB = [(0, yB.L)("billboardMode")], oB = [(0, yB.L)()], lB = [(0, yB.L)("infiniteDistance")], pB = [(0, yB.L)()], qB = [(0, yB.L)()], (0, jB.h)(null, null, OB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, OB) => {
              BB._position = OB
            }
          },
          metadata: JB
        }, NB, RB), (0, jB.h)(null, null, GB, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotation" in BB,
            get: BB => BB._rotation,
            set: (BB, OB) => {
              BB._rotation = OB
            }
          },
          metadata: JB
        }, WB, AB), (0, jB.h)(null, null, YB, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotationQuaternion" in BB,
            get: BB => BB._rotationQuaternion,
            set: (BB, OB) => {
              BB._rotationQuaternion = OB
            }
          },
          metadata: JB
        }, VB, SB), (0, jB.h)(null, null, DB, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scaling" in BB,
            get: BB => BB._scaling,
            set: (BB, OB) => {
              BB._scaling = OB
            }
          },
          metadata: JB
        }, nB, UB), (0, jB.h)(null, null, QB, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_billboardMode" in BB,
            get: BB => BB._billboardMode,
            set: (BB, OB) => {
              BB._billboardMode = OB
            }
          },
          metadata: JB
        }, fB, kB), (0, jB.h)(null, null, oB, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: BB => "scalingDeterminant" in BB,
            get: BB => BB.scalingDeterminant,
            set: (BB, OB) => {
              BB.scalingDeterminant = OB
            }
          },
          metadata: JB
        }, dB, KB), (0, jB.h)(null, null, lB, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "_infiniteDistance" in BB,
            get: BB => BB._infiniteDistance,
            set: (BB, OB) => {
              BB._infiniteDistance = OB
            }
          },
          metadata: JB
        }, uB, mB), (0, jB.h)(null, null, pB, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreNonUniformScaling" in BB,
            get: BB => BB.ignoreNonUniformScaling,
            set: (BB, OB) => {
              BB.ignoreNonUniformScaling = OB
            }
          },
          metadata: JB
        }, IB, FB), (0, jB.h)(null, null, qB, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "reIntegrateRotationIntoRotationQuaternion" in BB,
            get: BB => BB.reIntegrateRotationIntoRotationQuaternion,
            set: (BB, OB) => {
              BB.reIntegrateRotationIntoRotationQuaternion = OB
            }
          },
          metadata: JB
        }, iB, LB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = PB.f.Zero(), BB._TmpScaling = PB.r.Zero(), BB._TmpTranslation = PB.r.Zero(), BB._TmpRHRestore = PB.d.Scaling(1, 1, -1), BB._LookAtVectorCache = new PB.r(0, 0, 0), BB._RotationAxisCache = new PB.f, BB
    })();

    function ZB(BB, OB, GB) {
      const YB = JB.d.Parse((() => new qB(BB.name, OB)), BB, OB, GB);
      if (BB.localMatrix ? YB.setPreTransformMatrix(PB.d.FromArray(BB.localMatrix)) : BB.pivotMatrix && YB.setPivotMatrix(PB.d.FromArray(BB.pivotMatrix)), YB.Zk(BB.isEnabled), YB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (YB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (YB._waitingParentInstanceIndex = BB.parentInstanceIndex), BB.mF && (YB._waitingFreezeWorldMatrix = BB.mF), BB.animations) {
        for (let OB = 0; OB < BB.animations.length; OB++) {
          const GB = BB.animations[OB],
            DB = (0, lB.c)("BABYLON.Animation");
          DB && YB.animations.push(DB.Parse(GB))
        }
        zB.b.ParseAnimationRanges(YB, BB, OB)
      }
      return BB.autoAnimate && OB.beginAnimation(YB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), YB
    }
    let NB = !1;

    function RB() {
      NB || (NB = !0, qB.Parse = ZB)
    }(YB = qB.prototype).mC ?? (YB.mC = (0, pB.g)("TransformNode", "mC")), (DB = qB.prototype).applyImpulse ?? (DB.applyImpulse = (0, pB.g)("TransformNode", "applyImpulse")), (QB = qB.prototype).applyAngularImpulse ?? (QB.applyAngularImpulse = (0, pB.g)("TransformNode", "applyAngularImpulse")), (oB = qB.prototype).applyTorque ?? (oB.applyTorque = (0, pB.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(qB.prototype, "physicsBody") || Object.defineProperty(qB.prototype, "physicsBody", (0, pB.e)("TransformNode", "physicsBody"))
  },
  41420: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      try {
        const YB = BB.next();
        YB.done ? OB(YB) : YB.value ? YB.value.then((() => {
          YB.value = void 0, OB(YB)
        }), GB) : OB(YB)
      } catch (YB) {
        GB(YB)
      }
    }

    function DB() {
      let BB, OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (GB, DB, QB) => {
        const oB = performance.now();
        void 0 === BB || oB - BB > OB ? (BB = oB, setTimeout((() => {
          YB(GB, DB, QB)
        }), 0)) : YB(GB, DB, QB)
      }
    }

    function QB(BB, OB, GB, YB, DB) {
      const QB = () => {
        let oB;
        const jB = BB => {
          BB.done ? GB(BB.value) : void 0 === oB ? oB = !0 : QB()
        };
        do {
          oB = void 0, DB && DB.aborted ? YB(new Error("Aborted")) : OB(BB, jB, YB), void 0 === oB && (oB = !1)
        } while (oB)
      };
      QB()
    }

    function oB(BB, OB) {
      let GB;
      return QB(BB, YB, (BB => GB = BB), (BB => {
        throw BB
      }), OB), GB
    }
    async function jB(BB, OB, GB) {
      return await new Promise(((YB, DB) => {
        QB(BB, OB, YB, DB, GB)
      }))
    }

    function yB(BB, OB) {
      return function() {
        return oB(BB(...arguments), OB)
      }
    }
    GB.d(OB, {
      e: () => DB,
      h: () => yB,
      i: () => jB,
      l: () => oB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
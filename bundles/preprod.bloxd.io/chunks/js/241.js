export const id = 241;
export const ids = [241];
export const modules = {
  39376: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Kz,
      g: () => fz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39267),
      lz = bz(36547),
      Mz = bz(36519),
      tz = bz(39384),
      Hz = bz(38060),
      Oz = bz(36564),
      pz = bz(39061),
      dz = bz(37519),
      Fz = bz(37235),
      Zz = bz(39145),
      Rz = bz(39182);
    let Kz = (() => {
      var zz;
      let uz, bz, Oz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz = tz.c,
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        Sz = [],
        yz = [],
        Dz = [],
        Qz = [],
        Wz = [],
        ez = [],
        jz = [],
        Iz = [],
        Bz = [],
        Cz = [],
        Yz = [],
        kz = [],
        zu = [],
        uu = [],
        bu = [],
        Eu = [],
        nu = [];
      return zz = class extends Gz {
        get position() {
          return this._position
        }
        set position(zz) {
          this._position = zz
        }
        set upVector(zz) {
          this._upVector = zz
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let uz, bz;
          if (this.mode === zz.PERSPECTIVE_CAMERA) this.fovMode === zz.FOVMODE_VERTICAL_FIXED ? (bz = 2 * this.minZ * Math.tan(this.fov / 2), uz = this.uR().getAspectRatio(this) * bz) : (uz = 2 * this.minZ * Math.tan(this.fov / 2), bz = uz / this.uR().getAspectRatio(this));
          else {
            const zz = this.uR().getRenderWidth() / 2,
              Ez = this.uR().getRenderHeight() / 2;
            uz = (this.orthoRight ?? zz) - (this.orthoLeft ?? -zz), bz = (this.orthoTop ?? Ez) - (this.orthoBottom ?? -Ez)
          }
          return uz * bz
        }
        set orthoLeft(zz) {
          this._orthoLeft = zz;
          for (const uz of this._rigCameras) uz.orthoLeft = zz
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(zz) {
          this._orthoRight = zz;
          for (const uz of this._rigCameras) uz.orthoRight = zz
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(zz) {
          this._orthoBottom = zz;
          for (const uz of this._rigCameras) uz.orthoBottom = zz
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(zz) {
          this._orthoTop = zz;
          for (const uz of this._rigCameras) uz.orthoTop = zz
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(uz / (2 * zz))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(zz) {
          this._baseInertia = zz
        }
        set mode(zz) {
          this._mode = zz;
          for (const uz of this._rigCameras) uz.mode = zz
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(uz, bz, nz) {
          let tz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Zz.d)(), super(uz, nz, !1), this.inputs = (0, Ez.j)(this, az), this._position = (0, Ez.j)(this, Vz, Mz.n.Zero()), this._upVector = ((0, Ez.j)(this, mz), (0, Ez.j)(this, qz, Mz.n.Up())), this.oblique = ((0, Ez.j)(this, hz), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Ez.j)(this, Uz, .8), this.projectionPlaneTilt = ((0, Ez.j)(this, cz), (0, Ez.j)(this, gz, 0)), this.minZ = ((0, Ez.j)(this, Sz), (0, Ez.j)(this, yz, 1)), this.maxZ = ((0, Ez.j)(this, Dz), (0, Ez.j)(this, Qz, 1e4)), this._baseInertia = ((0, Ez.j)(this, Wz), .9), this._mode = zz.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new dz.d(0, 0, 1, 1), this.layerMask = (0, Ez.j)(this, ez, 268435455), this.fovMode = ((0, Ez.j)(this, jz), (0, Ez.j)(this, Iz, zz.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Ez.j)(this, Bz), (0, Ez.j)(this, Cz, zz.RIG_MODE_NONE)), this.interaxialDistance = ((0, Ez.j)(this, Yz), (0, Ez.j)(this, kz, void 0)), this.isStereoscopicSideBySide = ((0, Ez.j)(this, zu), (0, Ez.j)(this, uu, void 0)), this.ignoreCameraMaxZ = ((0, Ez.j)(this, bu), (0, Ez.j)(this, Eu, !1)), this.customRenderTargets = ((0, Ez.j)(this, nu), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new lz.b, this.onProjectionMatrixChangedObservable = new lz.b, this.onAfterCheckInputsObservable = new lz.b, this.onRestoreStateObservable = new lz.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Mz.d, this._postProcesses = new Array, this._activeMeshes = new iz.e(256), this._globalPosition = Mz.n.Zero(), this._computedViewMatrix = Mz.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Mz.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Mz.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.XT().defaultCameraLayerMask, this.XT().addCamera(this), tz && !this.XT().activeCamera && (this.XT().activeCamera = this), this.position = bz, this.renderPassId = this.XT().uR().createRenderPassId(`Camera ${uz}`)
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
          return "JK"
        }
        toString(zz) {
          let uz = "Name: " + this.name;
          if (uz += ", type: " + this.getClassName(), this.animations)
            for (let bz = 0; bz < this.animations.length; bz++) uz += ", animation[0]: " + this.animations[bz].toString(zz);
          return uz
        }
        applyVerticalCorrection() {
          const zz = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -zz.x : zz.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(zz) {
          return -1 !== this._activeMeshes.indexOf(zz)
        }
        isReady() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (zz)
            for (const uz of this._postProcesses)
              if (uz && !uz.isReady()) return !1;
          return super.isReady(zz)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Mz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Mz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(zz) {
          zz || super._updateCache(), this._cache.position.euz(this.position), this._cache.upVector.euz(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const uz = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let bz = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === uz;
          if (!bz) return !1;
          const Ez = this.uR();
          return this.mode === zz.PERSPECTIVE_CAMERA ? bz = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Ez.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (bz = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Ez.getRenderWidth() && this._cache.renderHeight === Ez.getRenderHeight(), this.oblique && (bz = bz && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), bz
        }
        attachControl(zz, uz) {}
        detachControl(zz) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== zz.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let zz = 0; zz < this._postProcesses.length; zz++)
            if (null !== this._postProcesses[zz]) return this._postProcesses[zz];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const zz = this._getFirstPostProcess();
          zz && zz.markTextureDirty();
          for (let uz = 0, bz = this._rigCameras.length; uz < bz; uz++) {
            const zz = this._rigCameras[uz],
              bz = zz._rigPostProcess;
            if (bz) {
              "pass" === bz.getEffectName() && (zz.isIntermediate = 0 === this._postProcesses.length), zz._postProcesses = this._postProcesses.slice(0).concat(bz), bz.markTextureDirty()
            } else zz._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !zz.isReusable() && this._postProcesses.indexOf(zz) > -1 ? (Hz.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == uz || uz < 0 ? this._postProcesses.push(zz) : null === this._postProcesses[uz] ? this._postProcesses[uz] = zz : this._postProcesses.splice(uz, 0, zz), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.zuz(), this._postProcesses.indexOf(zz))
        }
        detachPostProcess(zz) {
          const uz = this._postProcesses.indexOf(zz); - 1 !== uz && (this._postProcesses[uz] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.zuz(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Mz.d.Identity()
        }
        getViewMatrix(zz) {
          return !zz && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.XT().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(zz) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== zz && (this._projectionMatrix = zz)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(uz) {
          if (this._doNotComputeProjectionMatrix || !uz && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const bz = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = bz, this._refreshFrustumPlanes = !0;
          const Ez = this.uR(),
            nz = this.XT(),
            iz = Ez.fbz;
          if (this.mode === zz.PERSPECTIVE_CAMERA) {
            let uz;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Ez.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), uz = nz.useRightHandedSystem ? Mz.d.PerspectiveFovRHToRef : Mz.d.PerspectiveFovLHToRef, uz(this.fov, Ez.getAspectRatio(this), iz ? bz : this.minZ, iz ? this.minZ : bz, this._projectionMatrix, this.fovMode === zz.FOVMODE_VERTICAL_FIXED, Ez.isNDCHalfZRange, this.projectionPlaneTilt, iz)
          } else {
            const zz = Ez.getRenderWidth() / 2,
              uz = Ez.getRenderHeight() / 2;
            nz.useRightHandedSystem ? this.oblique ? Mz.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -uz, this.orthoTop ?? uz, iz ? bz : this.minZ, iz ? this.minZ : bz, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ez.isNDCHalfZRange) : Mz.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -uz, this.orthoTop ?? uz, iz ? bz : this.minZ, iz ? this.minZ : bz, this._projectionMatrix, Ez.isNDCHalfZRange) : this.oblique ? Mz.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -uz, this.orthoTop ?? uz, iz ? bz : this.minZ, iz ? this.minZ : bz, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Ez.isNDCHalfZRange) : Mz.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -uz, this.orthoTop ?? uz, iz ? bz : this.minZ, iz ? this.minZ : bz, this._projectionMatrix, Ez.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Ez.getRenderWidth(), this._cache.renderHeight = Ez.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(zz) {
          return (this.radius || (this.target ? Mz.n.Distance(this.position, this.target) : this.position.length())) + zz
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Fz.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Fz.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), uz && this.rigCameras.length > 0) {
            let uz = !1;
            for (const bz of this.rigCameras) bz._updateFrustumPlanes(), uz = uz || zz.isInFrustum(bz._frustumPlanes);
            return uz
          }
          return zz.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(zz) {
          return this._updateFrustumPlanes(), zz.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, pz.l)("Ray")
        }
        getForwardRayToRef(zz) {
          throw (0, pz.l)("Ray")
        }
        dispose(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.XT().stopAnimation(this), this.XT().removeCamera(this); this._rigCameras.length > 0;) {
            const zz = this._rigCameras.pop();
            zz && zz.dispose()
          }
          if (this._parentContainer) {
            const zz = this._parentContainer.cameras.indexOf(this);
            zz > -1 && this._parentContainer.cameras.splice(zz, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== zz.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let zz = this._postProcesses.length;
            for (; --zz >= 0;) {
              const uz = this._postProcesses[zz];
              uz && uz.dispose(this)
            }
          }
          let Ez = this.customRenderTargets.length;
          for (; --Ez >= 0;) this.customRenderTargets[Ez].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.XT().uR().releaseRenderPassId(this.renderPassId), super.dispose(uz, bz)
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
        setCameraRigMode(uz, bz) {
          if (this.cameraRigMode !== uz) {
            for (; this._rigCameras.length > 0;) {
              const zz = this._rigCameras.pop();
              zz && zz.dispose()
            }
            if (this.cameraRigMode = uz, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = bz.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== zz.RIG_MODE_NONE) {
              const zz = this.createRigCamera(this.name + "_L", 0);
              zz && (zz._isLeftCamera = !0);
              const uz = this.createRigCamera(this.name + "_R", 1);
              uz && (uz._isRightCamera = !0), zz && uz && (this._rigCameras.push(zz), this._rigCameras.push(uz))
            }
            this._setRigMode(bz), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(zz) {}
        _getVRProjectionMatrix() {
          return Mz.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.uR().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(zz, uz) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[zz] = uz, "interaxialDistance" === zz && (this._cameraRigParams.stereoHalfAngle = uz / .0637 * (Math.PI / 180))
        }
        createRigCamera(zz, uz) {
          return null
        }
        _updateRigCameras() {
          for (let zz = 0; zz < this._rigCameras.length; zz++) this._rigCameras[zz].minZ = this.minZ, this._rigCameras[zz].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[zz].fov = this.fov, this._rigCameras[zz].upVector.euz(this.upVector);
          this.cameraRigMode === zz.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const zz = Rz.e.Serialize(this);
          return zz.uniqueId = this.uniqueId, zz.type = this.getClassName(), this.parent && this.parent._serializeAsParent(zz), this.inputs && this.inputs.serialize(zz), Rz.e.AppendSerializedAnimations(this, zz), zz.al = this.serializeAnimationRanges(), zz.isEnabled = this.isEnabled(), zz
        }
        clone(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ez = Rz.e.Clone(zz.GetConstructorFromName(this.getClassName(), uz, this.XT(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Ez.name = uz, Ez.parent = bz, this.onClonedObservable.notifyObservers(Ez), Ez
        }
        dW(zz) {
          const uz = Mz.n.Zero();
          return this.getDirectionToRef(zz, uz), uz
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(zz, uz) {
          Mz.n.TransformNormalToRef(zz, this.getWorldMatrix(), uz)
        }
        static GetConstructorFromName(uz, bz, Ez) {
          let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            iz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const lz = tz.c.Construct(uz, bz, Ez, {
            interaxial_distance: nz,
            isStereoscopicSideBySide: iz
          });
          return lz || (() => zz._CreateDefaultParsedCamera(bz, Ez))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let zz = this.XT().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (zz *= -1), zz
        }
      }, (() => {
        const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, nz.D)("position")], bz = [(0, nz.D)("upVector")], Oz = [(0, nz.G)()], Kz = [(0, nz.G)()], wz = [(0, nz.G)()], Xz = [(0, nz.G)()], fz = [(0, nz.G)()], sz = [(0, nz.G)()], rz = [(0, nz.G)()], oz = [(0, nz.G)()], Nz = [(0, nz.G)()], vz = [(0, nz.G)()], xz = [(0, nz.G)()], Jz = [(0, nz.G)()], Az = [(0, nz.G)()], Tz = [(0, nz.G)()], Lz = [(0, nz.G)()], Pz = [(0, nz.G)()], (0, Ez.h)(zz, null, Oz, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoLeft" in zz,
            get: zz => zz.orthoLeft
          },
          metadata: iz
        }, null, az), (0, Ez.h)(zz, null, Kz, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoRight" in zz,
            get: zz => zz.orthoRight
          },
          metadata: iz
        }, null, az), (0, Ez.h)(zz, null, wz, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoBottom" in zz,
            get: zz => zz.orthoBottom
          },
          metadata: iz
        }, null, az), (0, Ez.h)(zz, null, Xz, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoTop" in zz,
            get: zz => zz.orthoTop
          },
          metadata: iz
        }, null, az), (0, Ez.h)(zz, null, Nz, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: zz => "inertia" in zz,
            get: zz => zz.inertia
          },
          metadata: iz
        }, null, az), (0, Ez.h)(zz, null, vz, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: zz => "mode" in zz,
            get: zz => zz.mode
          },
          metadata: iz
        }, null, az), (0, Ez.h)(null, null, uz, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: zz => "_position" in zz,
            get: zz => zz._position,
            set: (zz, uz) => {
              zz._position = uz
            }
          },
          metadata: iz
        }, Vz, mz), (0, Ez.h)(null, null, bz, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: zz => "_upVector" in zz,
            get: zz => zz._upVector,
            set: (zz, uz) => {
              zz._upVector = uz
            }
          },
          metadata: iz
        }, qz, hz), (0, Ez.h)(null, null, fz, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: zz => "fov" in zz,
            get: zz => zz.fov,
            set: (zz, uz) => {
              zz.fov = uz
            }
          },
          metadata: iz
        }, Uz, cz), (0, Ez.h)(null, null, sz, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: zz => "projectionPlaneTilt" in zz,
            get: zz => zz.projectionPlaneTilt,
            set: (zz, uz) => {
              zz.projectionPlaneTilt = uz
            }
          },
          metadata: iz
        }, gz, Sz), (0, Ez.h)(null, null, rz, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "minZ" in zz,
            get: zz => zz.minZ,
            set: (zz, uz) => {
              zz.minZ = uz
            }
          },
          metadata: iz
        }, yz, Dz), (0, Ez.h)(null, null, oz, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "maxZ" in zz,
            get: zz => zz.maxZ,
            set: (zz, uz) => {
              zz.maxZ = uz
            }
          },
          metadata: iz
        }, Qz, Wz), (0, Ez.h)(null, null, xz, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "layerMask" in zz,
            get: zz => zz.layerMask,
            set: (zz, uz) => {
              zz.layerMask = uz
            }
          },
          metadata: iz
        }, ez, jz), (0, Ez.h)(null, null, Jz, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "fovMode" in zz,
            get: zz => zz.fovMode,
            set: (zz, uz) => {
              zz.fovMode = uz
            }
          },
          metadata: iz
        }, Iz, Bz), (0, Ez.h)(null, null, Az, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "cameraRigMode" in zz,
            get: zz => zz.cameraRigMode,
            set: (zz, uz) => {
              zz.cameraRigMode = uz
            }
          },
          metadata: iz
        }, Cz, Yz), (0, Ez.h)(null, null, Tz, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "interaxialDistance" in zz,
            get: zz => zz.interaxialDistance,
            set: (zz, uz) => {
              zz.interaxialDistance = uz
            }
          },
          metadata: iz
        }, kz, zu), (0, Ez.h)(null, null, Lz, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: zz => "isStereoscopicSideBySide" in zz,
            get: zz => zz.isStereoscopicSideBySide,
            set: (zz, uz) => {
              zz.isStereoscopicSideBySide = uz
            }
          },
          metadata: iz
        }, uu, bu), (0, Ez.h)(null, null, Pz, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "ignoreCameraMaxZ" in zz,
            get: zz => zz.ignoreCameraMaxZ,
            set: (zz, uz) => {
              zz.ignoreCameraMaxZ = uz
            }
          },
          metadata: iz
        }, Eu, nu), iz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iz
        })
      })(), zz._CreateDefaultParsedCamera = (zz, uz) => {
        throw (0, pz.l)("UniversalCamera")
      }, zz.PERSPECTIVE_CAMERA = 0, zz.ORTHOGRAPHIC_CAMERA = 1, zz.FOVMODE_VERTICAL_FIXED = 0, zz.FOVMODE_HORIZONTAL_FIXED = 1, zz.RIG_MODE_NONE = 0, zz.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, zz.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, zz.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, zz.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, zz.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, zz.RIG_MODE_VR = 20, zz.RIG_MODE_CUSTOM = 22, zz.ForceAttachControlToAlwaysPreventDefault = !1, zz
    })();

    function wz(zz, uz) {
      const bz = zz.type,
        Ez = Kz.GetConstructorFromName(bz, zz.name, uz, zz.interaxial_distance, zz.isStereoscopicSideBySide),
        nz = Rz.e.Parse(Ez, zz, uz);
      if (void 0 !== zz.parentId && (nz._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (nz._waitingParentInstanceIndex = zz.parentInstanceIndex), nz.inputs && (nz.inputs.parse(zz), nz._setupInputs()), zz.upVector && (nz.upVector = Mz.n.FromArray(zz.upVector)), nz.setPosition && (nz.position.P_(0, 0, 0), nz.setPosition(Mz.n.FromArray(zz.position))), zz.target && nz.setTarget && nz.setTarget(Mz.n.FromArray(zz.target)), zz.cameraRigMode) {
        const uz = zz.interaxial_distance ? {
          interaxialDistance: zz.interaxial_distance
        } : {};
        nz.setCameraRigMode(zz.cameraRigMode, uz)
      }
      if (zz.animations) {
        for (let uz = 0; uz < zz.animations.length; uz++) {
          const bz = zz.animations[uz],
            Ez = (0, Oz.b)("BABYLON.Animation");
          Ez && nz.animations.push(Ez.Parse(bz))
        }
        tz.c.ParseAnimationRanges(nz, zz, uz)
      }
      return zz.autoAnimate && uz.beginAnimation(nz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), void 0 !== zz.isEnabled && nz.Zx(zz.isEnabled), nz
    }
    let Xz = !1;

    function fz() {
      Xz || (Xz = !0, Kz.Parse = wz)
    }
  },
  39393: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz) {
        this._cameraPosition = uz, this._behavior = bz, this.activeInput = !1, this.speed = 1, this.Qy = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Ez.n, this.rotationAccumulatedPixels = new Ez.n, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Ez.n.Zero(), this.rotationDeltaCurrentFrame = Ez.n.Zero(), this._zoomVelocity = 0, this._panVelocity = new Ez.n, this.referenceFrameRate = 60, this._rotationVelocity = new Ez.n, this._prevFrameTimeMs = 0, this._scene = zz
      }
      computeCurrentFrameDeltas() {
        const zz = this._scene.uR().getDeltaTime(),
          uz = this._getEffectiveDeltaMs(zz);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Vk(0), this.rotationDeltaCurrentFrame.Vk(0), this.zoomDeltaCurrentFrame = 0, void(zz > 0 && (this._prevFrameTimeMs = zz));
        this.panDeltaCurrentFrame.Vk(0), this.rotationDeltaCurrentFrame.Vk(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.P_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * uz, this.panDeltaCurrentFrame), this._rotationVelocity.P_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.P_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * uz, this._rotationVelocity.y * this.speed * this.rotationYSpeed * uz, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.Qy * this._zoomSpeedMultiplier) * uz, zz > 0 && (this._prevFrameTimeMs = zz), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Vk(0), this.rotationAccumulatedPixels.Vk(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Vk(0), this.rotationAccumulatedPixels.Vk(0)
      }
      resetPanVelocity() {
        this._panVelocity.Vk(0), this.panAccumulatedPixels.Vk(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(zz) {
        const uz = this._scene.uR().getDeltaTime(),
          bz = this._getEffectiveDeltaMs(uz),
          Ez = 1e3 / this.referenceFrameRate;
        return Math.pow(zz, bz / Ez)
      }
      getFrameIndependentInputScale(zz) {
        const uz = 1 - zz;
        if (uz <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(zz)) / uz
      }
      _getEffectiveDeltaMs(zz) {
        return zz > 0 ? zz : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(zz, uz, bz) {
        let Ez = zz;
        const nz = this._scene.uR().getDeltaTime(),
          iz = this._getEffectiveDeltaMs(nz);
        if (0 === iz) return Ez;
        const lz = this.getFrameIndependentDecay(bz);
        if (Ez *= lz, 0 !== uz || this.activeInput) {
          const zz = 1 - bz;
          Ez += uz / iz * (zz > 0 ? (1 - lz) / zz : 1)
        } else Math.abs(Ez) < 1e-6 && (Ez = 0);
        return Ez
      }
    }
  },
  39397: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor(zz, uz) {
        this.inputMap = [], this.handlers = zz, this._createDefaultEntries = uz, this.resetInputMap()
      }
      resolveInteraction(zz, uz) {
        for (const bz of this.inputMap)
          if (bz.source === zz && this._entryMatches(bz, uz)) return bz;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(zz, uz, bz) {
        const Ez = this.inputMap;
        for (let nz = 0; nz < Ez.length; nz++) {
          const iz = Ez[nz];
          if (iz.source === zz && iz.interaction === uz && this._entryConditionsMatch(iz, bz)) return iz
        }
      }
      getEntries(zz, uz, bz) {
        const Ez = [],
          nz = this.inputMap;
        for (let iz = 0; iz < nz.length; iz++) {
          const lz = nz[iz];
          lz.source === zz && lz.interaction === uz && this._entryConditionsMatch(lz, bz) && Ez.push(lz)
        }
        return Ez
      }
      addEntry(zz) {
        const uz = this._entrySpecificity(zz);
        let bz = this.inputMap.length;
        for (let Ez = 0; Ez < this.inputMap.length; Ez++)
          if (this._entrySpecificity(this.inputMap[Ez]) < uz) {
            bz = Ez;
            break
          } this.inputMap.splice(bz, 0, zz)
      }
      setInteraction(zz, uz, bz) {
        const Ez = this.resolveInteraction(zz, uz);
        return Ez && this._entryCoversAllConditionsOf(Ez, uz) ? (Ez.interaction = bz, !0) : (this.addEntry({
          source: zz,
          ...uz ?? {},
          interaction: bz
        }), !0)
      }
      _entryCoversAllConditionsOf(zz, uz) {
        if (!uz) return !0;
        const bz = zz;
        for (const Ez of Object.keys(uz)) {
          const zz = uz[Ez];
          if (void 0 !== zz)
            if ("modifiers" === Ez) {
              const uz = bz.modifiers ?? {};
              for (const bz of Object.keys(zz))
                if (void 0 !== zz[bz] && void 0 === uz[bz]) return !1
            } else if (void 0 === bz[Ez]) return !1
        }
        return !0
      }
      setInteractions(zz, uz, bz) {
        let Ez = 0;
        const nz = this.inputMap;
        for (let iz = 0; iz < nz.length; iz++) {
          const lz = nz[iz];
          lz.source === zz && this._entryMatches(lz, uz) && (lz.interaction = bz, Ez++)
        }
        return Ez
      }
      _entryMatches(zz, uz) {
        switch (zz.source) {
          case "pointer":
            return (void 0 === zz.button || zz.button === uz?.button) && this._matchModifiers(zz.modifiers, uz?.modifiers);
          case "wheel":
            return this._matchModifiers(zz.modifiers, uz?.modifiers);
          case "touch":
            return void 0 === zz.touchCount || zz.touchCount === uz?.touchCount;
          case "keyboard":
            return (void 0 === zz.key || (Array.isArray(zz.key) ? -1 !== zz.key.indexOf(uz?.key ?? -1) : zz.key === uz?.key)) && this._matchModifiers(zz.modifiers, uz?.modifiers)
        }
      }
      _entryConditionsMatch(zz, uz) {
        if (!uz) return !0;
        switch (zz.source) {
          case "pointer":
            return (!("button" in uz) || zz.button === uz.button) && (!("modifiers" in uz) || this._entryModifiersMatch(zz.modifiers, uz.modifiers));
          case "wheel":
            return !("modifiers" in uz) || this._entryModifiersMatch(zz.modifiers, uz.modifiers);
          case "touch":
            return !("touchCount" in uz) || zz.touchCount === uz.touchCount;
          case "keyboard":
            if ("key" in uz) {
              if (void 0 === zz.key) return void 0 === uz.key;
              if (void 0 === uz.key || (Array.isArray(zz.key) ? -1 === zz.key.indexOf(uz.key) : zz.key !== uz.key)) return !1
            }
            return !("modifiers" in uz) || this._entryModifiersMatch(zz.modifiers, uz.modifiers)
        }
      }
      _entrySpecificity(zz) {
        let uz = 0;
        return "button" in zz && void 0 !== zz.button && uz++, "key" in zz && void 0 !== zz.key && uz++, "touchCount" in zz && void 0 !== zz.touchCount && uz++, "modifiers" in zz && zz.modifiers && uz++, uz
      }
      _matchModifiers(zz, uz) {
        return !zz || (void 0 === zz.ctrl || zz.ctrl === (uz?.ctrl ?? !1)) && ((void 0 === zz.shift || zz.shift === (uz?.shift ?? !1)) && (void 0 === zz.alt || zz.alt === (uz?.alt ?? !1)))
      }
      _entryModifiersMatch(zz, uz) {
        if (!uz) return !zz;
        return void 0 !== uz.ctrl || void 0 !== uz.shift || void 0 !== uz.alt ? (void 0 === uz.ctrl || zz?.ctrl === uz.ctrl) && ((void 0 === uz.shift || zz?.shift === uz.shift) && (void 0 === uz.alt || zz?.alt === uz.alt)) : !zz || void 0 === zz.ctrl && void 0 === zz.shift && void 0 === zz.alt
      }
    }
  },
  39372: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => wz,
      i: () => Rz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39376),
      lz = bz(36519),
      Mz = bz(36526),
      tz = bz(39386),
      Hz = bz(39384),
      Oz = bz(39393),
      pz = bz(39397);
    class dz extends Oz.c {
      constructor(zz, uz, bz) {
        super(zz, uz, bz), this.input = new pz.d({
          translate: (zz, uz, bz) => {
            this.panAccumulatedPixels.x += zz, this.panAccumulatedPixels.y += uz, this.panAccumulatedPixels.z += bz
          },
          rotate: (zz, uz) => {
            this.rotationAccumulatedPixels.x += zz, this.rotationAccumulatedPixels.y += uz
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
    const Fz = lz.d.Zero(),
      Zz = lz.h.Identity();
    let Rz = (() => {
        var zz;
        let uz, bz, Hz, Oz, pz = iz.d,
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [],
          fz = [],
          sz = [],
          rz = [],
          oz = [];
        return zz = class extends pz {
          get inertia() {
            return this._targetInertia
          }
          set inertia(zz) {
            this._targetInertia = zz, this.movement && (this.movement.panInertia = zz, this.movement.rotationInertia = zz)
          }
          constructor(zz, uz, bz) {
            super(zz, uz, bz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new lz.n(0, 0, 0), this.cameraRotation = new lz.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Ez.j)(this, Rz, !1), this.rotation = ((0, Ez.j)(this, Kz), (0, Ez.j)(this, wz, void 0)), this.rotationQuaternion = (0, Ez.j)(this, Xz), this.speed = (0, Ez.j)(this, fz, 2), this.noRotationConstraint = ((0, Ez.j)(this, sz), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Mz.b, this._rotationEpsilon = Mz.b, this.lockedTarget = (0, Ez.j)(this, rz, null), this._currentTarget = ((0, Ez.j)(this, oz), lz.n.Zero()), this._initialFocalDistance = 1, this._viewMatrix = lz.d.Zero(), this._cameraTransformMatrix = lz.d.Zero(), this._cameraRotationMatrix = lz.d.Zero(), this._transformedReferencePoint = lz.n.Zero(), this._deferredPositionUpdate = new lz.n, this._deferredRotationQuaternionUpdate = new lz.h, this._deferredRotationUpdate = new lz.n, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = lz.n.Forward(this.XT().useRightHandedSystem), this.rotation = new lz.n(0, this.XT().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new dz(this.XT(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(zz) {
            this.getWorldMatrix();
            const uz = lz.l.ER[0],
              bz = lz.l.ER[1];
            return bz.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(bz, uz), uz.scaleInPlace(zz), this.globalPosition.add(uz)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const zz = this.lockedTarget;
              zz.computeWorldMatrix().getTranslationToRef(zz.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.P_(0, 0, 0), this.cameraRotation.P_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new lz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new lz.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new lz.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(zz) {
            zz || super._updateCache();
            const uz = this._getLockedTargetPosition();
            uz ? this._cache.lockedTarget ? this._cache.lockedTarget.euz(uz) : this._cache.lockedTarget = uz.clone() : this._cache.lockedTarget = null, this._cache.rotation.euz(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.euz(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const zz = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(zz) : !zz) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const zz = this.uR();
            return this.speed * Math.sqrt(zz.getDeltaTime() / (100 * zz.getFps()))
          }
          setTarget(zz) {
            this.upVector.normalize(), this._initialFocalDistance = zz.subtract(this.position).length(), this.position.z === zz.z && (this.position.z += Mz.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.XT().useRightHandedSystem ? lz.d.LookAtRHToRef(this.position, zz, lz.n.UpReadOnly, Fz) : lz.d.LookAtLHToRef(this.position, zz, lz.n.UpReadOnly, Fz), Fz.invert();
            const uz = this.rotationQuaternion || Zz;
            lz.h.FromRotationMatrixToRef(Fz, uz), uz.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(zz) {
            this.setTarget(zz)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(lz.l.Matrix[0]), lz.n.TransformNormalToRef(this.cameraDirection, lz.l.Matrix[0], lz.l.ER[0]), this._deferredPositionUpdate.addInPlace(lz.l.ER[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.euz(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.euz(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const zz = this.movement,
              uz = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            zz.panAccumulatedPixels.addInPlace(this.cameraDirection), zz.rotationAccumulatedPixels.x += this.cameraRotation.x, zz.rotationAccumulatedPixels.y += this.cameraRotation.y, zz.computeCurrentFrameDeltas(), this.cameraDirection.euz(zz.panDeltaCurrentFrame), this.cameraRotation.set(zz.rotationDeltaCurrentFrame.x, zz.rotationDeltaCurrentFrame.y);
            const bz = this.speed * this._panningEpsilon;
            !uz && Math.abs(this.cameraDirection.x) < bz && Math.abs(this.cameraDirection.y) < bz && Math.abs(this.cameraDirection.z) < bz && (this.cameraDirection.Vk(0), zz.resetPanVelocity());
            const Ez = this.invertRotation ? -this.inverseRotationSpeed : 1,
              nz = this._decideIfNeedsToMove(),
              iz = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.euz(this.rotation), this._deferredPositionUpdate.euz(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.euz(this.rotationQuaternion), nz && this._updatePosition(), iz) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Ez, this._deferredRotationUpdate.y += this.cameraRotation.y * Ez, !this.noRotationConstraint) {
                const zz = 1.570796;
                this._deferredRotationUpdate.x > zz && (this._deferredRotationUpdate.x = zz), this._deferredRotationUpdate.x < -zz && (this._deferredRotationUpdate.x = -zz)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.euz(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (lz.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.euz(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Vk(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : lz.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return lz.n.TransformNormalToRef(lz.n.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), lz.n.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? tz.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (lz.h.FromEulerVectorToRef(this.rotation, Zz), tz.b.Y.rotateByQuaternionToRef(Zz, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(zz, uz, bz) {
            if (this.XT().useRightHandedSystem ? lz.d.LookAtRHToRef(zz, uz, bz, this._viewMatrix) : lz.d.LookAtLHToRef(zz, uz, bz, this._viewMatrix), this.parent) {
              const zz = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(zz, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(uz, bz) {
            if (this.cameraRigMode !== iz.d.RIG_MODE_NONE) {
              const bz = new zz(uz, this.position.clone(), this.XT());
              return bz.isRigCamera = !0, bz.rigParent = this, this.cameraRigMode === iz.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new lz.h), bz._cameraRigParams = {}, bz.rotationQuaternion = new lz.h), bz.mode = this.mode, bz.orthoLeft = this.orthoLeft, bz.orthoRight = this.orthoRight, bz.orthoTop = this.orthoTop, bz.orthoBottom = this.orthoBottom, bz
            }
            return null
          }
          _updateRigCameras() {
            const zz = this._rigCameras[0],
              uz = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case iz.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case iz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case iz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case iz.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case iz.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const bz = this.cameraRigMode === iz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Ez = this.cameraRigMode === iz.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * bz, zz), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Ez, uz);
                break
              }
              case iz.d.RIG_MODE_VR:
                zz.rotationQuaternion && uz.rotationQuaternion && this.rotationQuaternion ? (zz.rotationQuaternion.euz(this.rotationQuaternion), uz.rotationQuaternion.euz(this.rotationQuaternion)) : (zz.rotation.euz(this.rotation), uz.rotation.euz(this.rotation)), zz.position.euz(this.position), uz.position.euz(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(uz, bz) {
            this.getTarget().subtractToRef(this.position, zz._TargetFocalPoint), zz._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Ez = zz._TargetFocalPoint.addInPlace(this.position);
            lz.d.TranslationToRef(-Ez.x, -Ez.y, -Ez.z, zz._TargetTransformMatrix), zz._TargetTransformMatrix.multiplyToRef(lz.d.RotationAxis(bz.upVector, uz), zz._RigCamTransformMatrix), lz.d.TranslationToRef(Ez.x, Ez.y, Ez.z, zz._TargetTransformMatrix), zz._RigCamTransformMatrix.multiplyToRef(zz._TargetTransformMatrix, zz._RigCamTransformMatrix), lz.n.TransformCoordinatesToRef(this.position, zz._RigCamTransformMatrix, bz.position), bz.setTarget(Ez)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(pz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.D)()], Hz = [(0, nz.G)()], Oz = [(0, nz.y)("lockedTargetId")], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: zz => "updateUpVectorFromRotation" in zz,
              get: zz => zz.updateUpVectorFromRotation,
              set: (zz, uz) => {
                zz.updateUpVectorFromRotation = uz
              }
            },
            metadata: iz
          }, Rz, Kz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: zz => "rotation" in zz,
              get: zz => zz.rotation,
              set: (zz, uz) => {
                zz.rotation = uz
              }
            },
            metadata: iz
          }, wz, Xz), (0, Ez.h)(null, null, Hz, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: zz => "speed" in zz,
              get: zz => zz.speed,
              set: (zz, uz) => {
                zz.speed = uz
              }
            },
            metadata: iz
          }, fz, sz), (0, Ez.h)(null, null, Oz, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: zz => "lockedTarget" in zz,
              get: zz => zz.lockedTarget,
              set: (zz, uz) => {
                zz.lockedTarget = uz
              }
            },
            metadata: iz
          }, rz, oz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz._RigCamTransformMatrix = new lz.d, zz._TargetTransformMatrix = new lz.d, zz._TargetFocalPoint = new lz.n, zz
      })(),
      Kz = !1;

    function wz() {
      Kz || (Kz = !0, Hz.c.AddNodeConstructor("TargetCamera", ((zz, uz) => () => new Rz(zz, lz.n.Zero(), uz))))
    }
  },
  39140: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(39079);
    let nz = !1;

    function iz() {
      nz || (nz = !0, Ez.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Ez.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Ez.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Ez.b.prototype.getAspectRatio = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = zz.viewport;
        return this.getRenderWidth(uz) * bz.width / (this.getRenderHeight(uz) * bz.height)
      }, Ez.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Ez.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39193: (zz, uz, bz) => {
    var Ez = bz(39079),
      nz = bz(39202);
    let iz = !1;
    iz || (iz = !0, (0, nz.z)(), Ez.b.prototype._loadFileAsync = async function(zz, uz, bz) {
      return await new Promise(((Ez, nz) => {
        this._loadFile(zz, (zz => {
          Ez(zz)
        }), void 0, uz, bz, ((zz, uz) => {
          nz(uz)
        }))
      }))
    })
  },
  39191: (zz, uz, bz) => {
    (0, bz(39145).d)()
  },
  39145: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(39079);
    let nz = !1;

    function iz() {
      nz || (nz = !0, Ez.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Ez.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Ez.b.prototype.createRenderPassId = function(zz) {
        const uz = ++Ez.b._RenderPassIdCounter;
        return this._renderPassNames[uz] = zz ?? "NONAME", uz
      }, Ez.b.prototype.releaseRenderPassId = function(zz) {
        this._renderPassNames[zz] = void 0;
        for (let uz = 0; uz < this.scenes.length; ++uz) {
          const bz = this.scenes[uz];
          for (let uz = 0; uz < bz.meshes.length; ++uz) {
            const Ez = bz.meshes[uz];
            if (Ez._releaseRenderPassId(zz), Ez.hN)
              for (let uz = 0; uz < Ez.hN.length; ++uz) {
                Ez.hN[uz]._removeDrawWrapper(zz)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(zz)
      })
    }
  },
  39233: (zz, uz, bz) => {
    var Ez = bz(39241),
      nz = bz(39079);
    let iz = !1;
    iz || (iz = !0, nz.b.GetCompatibleTextureLoader = Ez.c)
  },
  39147: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(39022);
    let nz = !1;

    function iz() {
      nz || (nz = !0, Ez.ThinEngine.prototype.setAlphaMode = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[bz] === zz) {
          if (!uz) {
            const uz = 0 === zz;
            this.depthCullingState.depthMask !== uz && (this.depthCullingState.depthMask = uz)
          }
          return
        }
        const Ez = 0 === zz;
        this._alphaState.setAlphaBlend(!Ez, bz), this._alphaState.setAlphaMode(zz, bz), uz || (this.depthCullingState.depthMask = Ez), this._alphaMode[bz] = zz
      })
    }
  },
  39157: (zz, uz, bz) => {
    var Ez = bz(39011),
      nz = bz(38060),
      iz = bz(39022),
      lz = bz(39162),
      Mz = bz(39128);
    class tz extends lz.d {
      setDepthStencilTexture(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(zz, uz), !zz) return;
        const bz = this._engine,
          Ez = this._context,
          nz = zz._hardwareTexture;
        if (nz && zz._autoMSAAManagement && this._MSAAFramebuffer) {
          const uz = bz._currentFramebuffer;
          bz._bindUnboundFramebuffer(this._MSAAFramebuffer), Ez.framebufferRenderbuffer(Ez.FRAMEBUFFER, (0, Mz.d)(zz.format) ? Ez.DEPTH_STENCIL_ATTACHMENT : Ez.DEPTH_ATTACHMENT, Ez.RENDERBUFFER, nz.getMSAARenderBuffer()), bz._bindUnboundFramebuffer(uz)
        }
      }
      constructor(zz, uz, bz, Ez, nz) {
        super(zz, uz, bz, Ez), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = nz
      }
      _cloneRenderTargetWrapper() {
        let zz;
        return this._colorTextureArray && this._depthStencilTextureArray ? (zz = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), zz.texture.isReady = !0) : zz = super._cloneRenderTargetWrapper(), zz
      }
      _swapRenderTargetWrapper(zz) {
        super._swapRenderTargetWrapper(zz), zz._framebuffer = this._framebuffer, zz._depthStencilBuffer = this._depthStencilBuffer, zz._MSAAFramebuffer = this._MSAAFramebuffer, zz._colorTextureArray = this._colorTextureArray, zz._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const zz = this._engine,
            uz = zz._currentFramebuffer,
            bz = this._context;
          zz._bindUnboundFramebuffer(this._framebuffer), bz.framebufferRenderbuffer(bz.FRAMEBUFFER, bz.DEPTH_STENCIL_ATTACHMENT, bz.RENDERBUFFER, null), bz.framebufferRenderbuffer(bz.FRAMEBUFFER, bz.DEPTH_ATTACHMENT, bz.RENDERBUFFER, null), bz.framebufferRenderbuffer(bz.FRAMEBUFFER, bz.STENCIL_ATTACHMENT, bz.RENDERBUFFER, null), zz._bindUnboundFramebuffer(uz), bz.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(zz, uz, bz, Ez, nz, iz)
      }
      shareDepth(zz) {
        super.shareDepth(zz);
        const uz = this._context,
          bz = this._depthStencilBuffer,
          Ez = zz._MSAAFramebuffer || zz._framebuffer,
          nz = this._engine;
        zz._depthStencilBuffer && zz._depthStencilBuffer !== bz && uz.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = bz;
        const iz = zz._generateStencilBuffer ? uz.DEPTH_STENCIL_ATTACHMENT : uz.DEPTH_ATTACHMENT;
        nz._bindUnboundFramebuffer(Ez), uz.framebufferRenderbuffer(uz.FRAMEBUFFER, iz, uz.RENDERBUFFER, bz), nz._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nz = zz._hardwareTexture;
        if (!nz) return;
        const iz = this._framebuffer,
          lz = this._engine,
          Mz = lz._currentFramebuffer;
        let tz;
        if (lz._bindUnboundFramebuffer(iz), lz.PR > 1) {
          const iz = this._context;
          tz = iz["COLOR_ATTACHMENT" + uz], zz.is2DArray || zz.is3D ? (bz = bz ?? this.layerIndices?.[uz] ?? 0, iz.framebufferTextureLayer(iz.FRAMEBUFFER, tz, nz.underlyingResource, Ez, bz)) : zz.isCube ? (bz = bz ?? this.faceIndices?.[uz] ?? 0, iz.framebufferTexture2D(iz.FRAMEBUFFER, tz, iz.TEXTURE_CUBE_MAP_POSITIVE_X + bz, nz.underlyingResource, Ez)) : iz.framebufferTexture2D(iz.FRAMEBUFFER, tz, iz.TEXTURE_2D, nz.underlyingResource, Ez)
        } else {
          const zz = this._context;
          tz = zz["COLOR_ATTACHMENT" + uz + "_WEBGL"];
          const iz = void 0 !== bz ? zz.TEXTURE_CUBE_MAP_POSITIVE_X + bz : zz.TEXTURE_2D;
          zz.framebufferTexture2D(zz.FRAMEBUFFER, tz, iz, nz.underlyingResource, Ez)
        }
        if (zz._autoMSAAManagement && this._MSAAFramebuffer) {
          const zz = this._context;
          lz._bindUnboundFramebuffer(this._MSAAFramebuffer), zz.framebufferRenderbuffer(zz.FRAMEBUFFER, tz, zz.RENDERBUFFER, nz.getMSAARenderBuffer())
        }
        lz._bindUnboundFramebuffer(Mz)
      }
      setTexture(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(zz, uz, bz), this._bindTextureRenderTarget(zz, uz)
      }
      setLayerAndFaceIndices(zz, uz) {
        if (super.setLayerAndFaceIndices(zz, uz), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const bz = this._attachments?.length ?? this.textures.length;
        for (let Ez = 0; Ez < bz; Ez++) {
          const zz = this.textures[Ez];
          zz && (zz.is2DArray || zz.is3D ? this._bindTextureRenderTarget(zz, Ez, this.layerIndices[Ez]) : zz.isCube ? this._bindTextureRenderTarget(zz, Ez, this.faceIndices[Ez]) : this._bindTextureRenderTarget(zz, Ez))
        }
      }
      setLayerAndFaceIndex() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(zz, uz, bz), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Ez = this.textures[zz];
        Ez.is2DArray || Ez.is3D ? this._bindTextureRenderTarget(this.textures[zz], zz, this.layerIndices[zz]) : Ez.isCube && this._bindTextureRenderTarget(this.textures[zz], zz, this.faceIndices[zz])
      }
      resolveMSAATextures() {
        const zz = this._engine,
          uz = zz._currentFramebuffer;
        zz._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), zz._bindUnboundFramebuffer(uz)
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const uz = this._context;
        zz || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (uz.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (uz.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (uz.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(zz)
      }
    }
    let Hz = !1;
    Hz || (Hz = !0, iz.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(zz, uz, bz) {
      const Ez = new tz(zz, uz, bz, this, this._gl);
      return this._renderTargetWrapperCache.push(Ez), Ez
    }, iz.ThinEngine.prototype.createRenderTargetTexture = function(zz, uz) {
      const bz = this._createHardwareRenderTargetWrapper(!1, !1, zz);
      let Ez, nz, iz = !0,
        lz = !1,
        Mz = !1,
        tz = 1;
      void 0 !== uz && "object" === typeof uz && (iz = uz.generateDepthBuffer ?? !0, lz = !!uz.generateStencilBuffer, Mz = !!uz.noColorAttachment, Ez = uz.colorAttachment, tz = uz.samples ?? 1, nz = uz.label);
      const Hz = Ez || (Mz ? null : this._createInternalTexture(zz, uz, !0, 5)),
        Oz = zz.width || zz,
        pz = zz.height || zz,
        dz = this._currentFramebuffer,
        Fz = this._gl,
        Zz = Fz.createFramebuffer();
      if (this._bindUnboundFramebuffer(Zz), bz._depthStencilBuffer = this._setupFramebufferDepthAttachments(lz, iz, Oz, pz), !Hz || Hz.is2DArray || Hz.is3D || Fz.framebufferTexture2D(Fz.FRAMEBUFFER, Fz.COLOR_ATTACHMENT0, Fz.TEXTURE_2D, Hz._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(dz), bz.label = nz ?? "RenderTargetWrapper", bz._framebuffer = Zz, bz._generateDepthBuffer = iz, bz._generateStencilBuffer = lz, bz.setTextures(Hz), Ez) {
        if (bz._samples = Ez.samples, Ez.samples > 1) {
          const zz = Ez._hardwareTexture.getMSAARenderBuffer(0);
          bz._MSAAFramebuffer = Fz.createFramebuffer(), this._bindUnboundFramebuffer(bz._MSAAFramebuffer), Fz.framebufferRenderbuffer(Fz.FRAMEBUFFER, Fz.COLOR_ATTACHMENT0, Fz.RENDERBUFFER, zz), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(bz, tz);
      return bz
    }, iz.ThinEngine.prototype._createDepthStencilTexture = function(zz, uz, bz) {
      const iz = this._gl,
        lz = zz.layers || 0,
        tz = zz.depth || 0;
      let Hz = iz.TEXTURE_2D;
      0 !== lz ? Hz = iz.TEXTURE_2D_ARRAY : 0 !== tz && (Hz = iz.TEXTURE_3D);
      const Oz = new Ez.c(this, 12);
      if (Oz.label = uz.label, !this._caps.depthTextureExtension) return nz.e.Error("Depth texture is not supported by your browser or hardware."), Oz;
      const pz = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...uz
      };
      if (this._bindTextureDirectly(Hz, Oz, !0), this._setupDepthStencilTexture(Oz, zz, 0 !== pz.comparisonFunction && pz.bilinearFiltering, pz.comparisonFunction, pz.samples), void 0 !== pz.depthTextureFormat) {
        if (15 !== pz.depthTextureFormat && 16 !== pz.depthTextureFormat && 17 !== pz.depthTextureFormat && 13 !== pz.depthTextureFormat && 14 !== pz.depthTextureFormat && 18 !== pz.depthTextureFormat) return nz.e.Error(`Depth texture ${pz.depthTextureFormat} format is not supported.`), Oz;
        Oz.format = pz.depthTextureFormat
      } else Oz.format = pz.generateStencil ? 13 : 16;
      const dz = (0, Mz.d)(Oz.format),
        Fz = this._getWebGLTextureTypeFromDepthTextureFormat(Oz.format),
        Zz = dz ? iz.DEPTH_STENCIL : iz.DEPTH_COMPONENT,
        Rz = this._getInternalFormatFromDepthTextureFormat(Oz.format, !0, dz);
      return Oz.is2DArray ? iz.texImage3D(Hz, 0, Rz, Oz.width, Oz.height, lz, 0, Zz, Fz, null) : Oz.is3D ? iz.texImage3D(Hz, 0, Rz, Oz.width, Oz.height, tz, 0, Zz, Fz, null) : iz.texImage2D(Hz, 0, Rz, Oz.width, Oz.height, 0, Zz, Fz, null), this._bindTextureDirectly(Hz, null), this._internalTexturesCache.push(Oz), bz._depthStencilBuffer && (iz.deleteRenderbuffer(bz._depthStencilBuffer), bz._depthStencilBuffer = null), this._bindUnboundFramebuffer(bz._MSAAFramebuffer ?? bz._framebuffer), bz._generateStencilBuffer = dz, bz._depthStencilTextureWithStencil = dz, bz._depthStencilBuffer = this._setupFramebufferDepthAttachments(bz._generateStencilBuffer, bz._generateDepthBuffer, bz.width, bz.height, bz.samples, Oz.format), this._bindUnboundFramebuffer(null), Oz
    }, iz.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(zz, uz) {
      if (this.PR < 2 || !zz) return 1;
      if (zz.samples === uz) return uz;
      const bz = this._gl;
      uz = Math.min(uz, this.getCaps().maxMSAASamples), zz._depthStencilBuffer && (bz.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = null), zz._MSAAFramebuffer && (bz.deleteFramebuffer(zz._MSAAFramebuffer), zz._MSAAFramebuffer = null);
      const Ez = zz.texture?._hardwareTexture;
      if (Ez?.releaseMSAARenderBuffers(), zz.texture && uz > 1 && "function" === typeof bz.renderbufferStorageMultisample) {
        const nz = bz.createFramebuffer();
        if (!nz) throw new Error("Unable to create multi sampled framebuffer");
        zz._MSAAFramebuffer = nz, this._bindUnboundFramebuffer(zz._MSAAFramebuffer);
        const iz = this._createRenderBuffer(zz.texture.width, zz.texture.height, uz, -1, this._getRGBABufferInternalSizedFormat(zz.texture.type, zz.texture.format, zz.texture._useSRGBBuffer), bz.COLOR_ATTACHMENT0, !1);
        if (!iz) throw new Error("Unable to create multi sampled framebuffer");
        Ez?.addMSAARenderBuffer(iz)
      }
      this._bindUnboundFramebuffer(zz._MSAAFramebuffer ?? zz._framebuffer), zz.texture && (zz.texture.samples = uz), zz._samples = uz;
      const nz = zz._depthStencilTexture ? zz._depthStencilTexture.format : void 0;
      return zz._depthStencilBuffer = this._setupFramebufferDepthAttachments(zz._generateStencilBuffer, zz._generateDepthBuffer, zz.width, zz.height, uz, nz), this._bindUnboundFramebuffer(null), uz
    }, iz.ThinEngine.prototype._setupDepthStencilTexture = function(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const iz = uz.width ?? uz,
        lz = uz.height ?? uz,
        Mz = uz.layers || 0,
        tz = uz.depth || 0;
      zz.baseWidth = iz, zz.baseHeight = lz, zz.width = iz, zz.height = lz, zz.is2DArray = Mz > 0, zz.depth = Mz || tz, zz.isReady = !0, zz.samples = nz, zz.generateMipMaps = !1, zz.samplingMode = bz ? 2 : 1, zz.type = 0, zz._comparisonFunction = Ez;
      const Hz = this._gl,
        Oz = this._getTextureTarget(zz),
        pz = this._getSamplingParameters(zz.samplingMode, !1);
      Hz.texParameteri(Oz, Hz.TEXTURE_MAG_FILTER, pz.mag), Hz.texParameteri(Oz, Hz.TEXTURE_MIN_FILTER, pz.min), Hz.texParameteri(Oz, Hz.TEXTURE_WRAP_S, Hz.CLAMP_TO_EDGE), Hz.texParameteri(Oz, Hz.TEXTURE_WRAP_T, Hz.CLAMP_TO_EDGE), this.PR > 1 && (0 === Ez ? (Hz.texParameteri(Oz, Hz.TEXTURE_COMPARE_FUNC, 515), Hz.texParameteri(Oz, Hz.TEXTURE_COMPARE_MODE, Hz.NONE)) : (Hz.texParameteri(Oz, Hz.TEXTURE_COMPARE_FUNC, Ez), Hz.texParameteri(Oz, Hz.TEXTURE_COMPARE_MODE, Hz.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38998: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.b
    });
    var Ez = bz(39002);
    (0, bz(39147).e)();
    var nz = bz(39022);
    let iz = !1;
    ! function() {
      if (iz) return;
      iz = !0;
      const zz = new WeakMap,
        uz = new WeakMap,
        bz = new WeakMap,
        Ez = new WeakMap;
      nz.ThinEngine.prototype.getAlphaToCoverage = function() {
        return zz.get(this) ?? !1
      }, nz.ThinEngine.prototype.setAlphaToCoverage = function(bz) {
        (zz.get(this) !== bz || this._gl && uz.get(this) !== this._gl) && (zz.set(this, bz), this._gl && (bz ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), uz.set(this, this._gl)))
      }, Object.defineProperty(nz.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Ez.get(this) !== this._gl && (bz.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Ez.set(this, this._gl)), bz.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var lz = bz(39011),
      Mz = bz(38060),
      tz = bz(39118);
    let Hz = !1;
    ! function() {
      function zz(zz, uz, bz, Ez) {
        let nz, iz = 1;
        1 === Ez ? nz = new Float32Array(uz * bz * 4) : 2 === Ez ? (nz = new Uint16Array(uz * bz * 4), iz = 15360) : nz = 7 === Ez ? new Uint32Array(uz * bz * 4) : new Uint8Array(uz * bz * 4);
        for (let lz = 0; lz < uz; lz++)
          for (let Ez = 0; Ez < bz; Ez++) {
            const bz = 3 * (Ez * uz + lz),
              Mz = 4 * (Ez * uz + lz);
            nz[Mz + 0] = zz[bz + 0], nz[Mz + 1] = zz[bz + 1], nz[Mz + 2] = zz[bz + 2], nz[Mz + 3] = iz
          }
        return nz
      }

      function uz(zz) {
        return function(uz, bz, Ez, nz, iz, Mz, tz, Hz) {
          let Oz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            pz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const dz = zz ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Fz = zz ? 10 : 11,
            Zz = new lz.c(this, Fz);
          Zz.baseWidth = bz, Zz.baseHeight = Ez, Zz.baseDepth = nz, Zz.width = bz, Zz.height = Ez, Zz.depth = nz, Zz.format = iz, Zz.type = pz, Zz.generateMipMaps = Mz, Zz.samplingMode = Hz, zz ? Zz.is3D = !0 : Zz.is2DArray = !0, this._doNotHandleContextLost || (Zz._bufferView = uz), zz ? this.updateRawTexture3D(Zz, uz, iz, tz, Oz, pz) : this.updateRawTexture2DArray(Zz, uz, iz, tz, Oz, pz), this._bindTextureDirectly(dz, Zz, !0);
          const Rz = this._getSamplingParameters(Hz, Mz);
          return this._gl.texParameteri(dz, this._gl.TEXTURE_MAG_FILTER, Rz.mag), this._gl.texParameteri(dz, this._gl.TEXTURE_MIN_FILTER, Rz.min), Mz && this._gl.generateMipmap(dz), this._bindTextureDirectly(dz, null), this._internalTexturesCache.push(Zz), Zz
        }
      }

      function bz(zz) {
        return function(uz, bz, Ez, nz) {
          let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Mz = zz ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            tz = this._getWebGLTextureType(lz),
            Hz = this._getInternalFormat(Ez),
            Oz = this._getRGBABufferInternalSizedFormat(lz, Ez);
          this._bindTextureDirectly(Mz, uz, !0), this._unpackFlipY(void 0 === nz || !!nz), this._doNotHandleContextLost || (uz._bufferView = bz, uz.format = Ez, uz.invertY = nz, uz._compression = iz), uz.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), iz && bz ? this._gl.compressedTexImage3D(Mz, 0, this.getCaps().s3tc[iz], uz.width, uz.height, uz.depth, 0, bz) : this._gl.texImage3D(Mz, 0, Oz, uz.width, uz.height, uz.depth, 0, Hz, tz, bz), uz.generateMipMaps && this._gl.generateMipmap(Mz), this._bindTextureDirectly(Mz, null), uz.isReady = !0
        }
      }
      Hz || (Hz = !0, nz.ThinEngine.prototype.updateRawTexture = function(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!zz) return;
        const Mz = this._getRGBABufferInternalSizedFormat(iz, bz, lz),
          tz = this._getInternalFormat(bz),
          Hz = this._getWebGLTextureType(iz);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, zz, !0), this._unpackFlipY(void 0 === Ez || !!Ez), this._doNotHandleContextLost || (zz._bufferView = uz, zz.format = bz, zz.type = iz, zz.invertY = Ez, zz._compression = nz), zz.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), nz && uz ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[nz], zz.width, zz.height, 0, uz) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Mz, zz.width, zz.height, 0, tz, Hz, uz), zz.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), zz.isReady = !0
      }, nz.ThinEngine.prototype.createRawTexture = function(zz, uz, bz, Ez, nz, iz, Mz) {
        let tz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Oz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pz = new lz.c(this, 3);
        pz.baseWidth = uz, pz.baseHeight = bz, pz.width = uz, pz.height = bz, pz.format = Ez, pz.generateMipMaps = nz, pz.samplingMode = Mz, pz.invertY = iz, pz._compression = tz, pz.type = Hz, pz._useSRGBBuffer = this._getUseSRGBBuffer(Oz, !nz), this._doNotHandleContextLost || (pz._bufferView = zz), this.updateRawTexture(pz, zz, Ez, iz, tz, Hz, pz._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, pz, !0);
        const dz = this._getSamplingParameters(Mz, nz);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, dz.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, dz.min), nz && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(pz), pz
      }, nz.ThinEngine.prototype.createRawCubeTexture = function(zz, uz, bz, Ez, nz, iz, Hz) {
        let Oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const pz = this._gl,
          dz = new lz.c(this, 8);
        dz.isCube = !0, dz.format = bz, dz.type = Ez, this._doNotHandleContextLost || (dz._bufferViewArray = zz);
        const Fz = this._getWebGLTextureType(Ez);
        let Zz = this._getInternalFormat(bz);
        Zz === pz.RGB && (Zz = pz.RGBA), Fz !== pz.FLOAT || this._caps.textureFloatLinearFiltering ? Fz !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Fz !== pz.FLOAT || this._caps.textureFloatRender ? Fz !== pz.HALF_FLOAT || this._caps.colorBufferFloat || (nz = !1, Mz.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (nz = !1, Mz.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (nz = !1, Hz = 1, Mz.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (nz = !1, Hz = 1, Mz.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Rz = uz,
          Kz = Rz;
        dz.width = Rz, dz.height = Kz, dz.invertY = iz, dz._compression = Oz;
        if (!this.needPOTTextures || (0, tz.i)(dz.width) && (0, tz.i)(dz.height) || (nz = !1), zz) this.updateRawCubeTexture(dz, zz, bz, Ez, iz, Oz);
        else {
          const zz = this._getRGBABufferInternalSizedFormat(Ez),
            uz = 0;
          this._bindTextureDirectly(pz.TEXTURE_CUBE_MAP, dz, !0);
          for (let bz = 0; bz < 6; bz++) Oz ? pz.compressedTexImage2D(pz.TEXTURE_CUBE_MAP_POSITIVE_X + bz, uz, this.getCaps().s3tc[Oz], dz.width, dz.height, 0, void 0) : pz.texImage2D(pz.TEXTURE_CUBE_MAP_POSITIVE_X + bz, uz, zz, dz.width, dz.height, 0, Zz, Fz, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, dz, !0), zz && nz && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const wz = this._getSamplingParameters(Hz, nz);
        return pz.texParameteri(pz.TEXTURE_CUBE_MAP, pz.TEXTURE_MAG_FILTER, wz.mag), pz.texParameteri(pz.TEXTURE_CUBE_MAP, pz.TEXTURE_MIN_FILTER, wz.min), pz.texParameteri(pz.TEXTURE_CUBE_MAP, pz.TEXTURE_WRAP_S, pz.CLAMP_TO_EDGE), pz.texParameteri(pz.TEXTURE_CUBE_MAP, pz.TEXTURE_WRAP_T, pz.CLAMP_TO_EDGE), this._bindTextureDirectly(pz.TEXTURE_CUBE_MAP, null), dz.generateMipMaps = nz, dz.samplingMode = Hz, dz.isReady = !0, dz
      }, nz.ThinEngine.prototype.updateRawCubeTexture = function(uz, bz, Ez, nz, iz) {
        let lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        uz._bufferViewArray = bz, uz.format = Ez, uz.type = nz, uz.invertY = iz, uz._compression = lz;
        const Hz = this._gl,
          Oz = this._getWebGLTextureType(nz);
        let pz = this._getInternalFormat(Ez);
        const dz = this._getRGBABufferInternalSizedFormat(nz);
        let Fz = !1;
        pz === Hz.RGB && (pz = Hz.RGBA, Fz = !0), this._bindTextureDirectly(Hz.TEXTURE_CUBE_MAP, uz, !0), this._unpackFlipY(void 0 === iz || !!iz), uz.width % 4 !== 0 && Hz.pixelStorei(Hz.UNPACK_ALIGNMENT, 1);
        for (let tz = 0; tz < 6; tz++) {
          let Ez = bz[tz];
          lz ? Hz.compressedTexImage2D(Hz.TEXTURE_CUBE_MAP_POSITIVE_X + tz, Mz, this.getCaps().s3tc[lz], uz.width, uz.height, 0, Ez) : (Fz && (Ez = zz(Ez, uz.width, uz.height, nz)), Hz.texImage2D(Hz.TEXTURE_CUBE_MAP_POSITIVE_X + tz, Mz, dz, uz.width, uz.height, 0, pz, Oz, Ez))
        }(!this.needPOTTextures || (0, tz.i)(uz.width) && (0, tz.i)(uz.height)) && uz.generateMipMaps && 0 === Mz && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), uz.isReady = !0
      }, nz.ThinEngine.prototype.createRawCubeTextureFromUrl = function(uz, bz, Ez, nz, iz, lz, Mz, tz) {
        let Hz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          dz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Fz = this._gl,
          Zz = this.createRawCubeTexture(null, Ez, nz, iz, !lz, dz, pz, null);
        bz?.addPendingData(Zz), Zz.url = uz, Zz.isReady = !1, this._internalTexturesCache.push(Zz);
        const Rz = (zz, uz) => {
            bz?.removePendingData(Zz), Oz && Oz(zz ? zz.status + " " + zz.statusText : "Failed to parse texture data", uz)
          },
          Kz = async uz => {
            if (!Zz._hardwareTexture) return;
            const Ez = Mz(uz);
            if (!Ez) return;
            const lz = Ez instanceof Promise ? await Ez : Ez,
              Oz = Zz.width;
            if (tz) {
              const uz = this._getWebGLTextureType(iz);
              let bz = this._getInternalFormat(nz);
              const Ez = this._getRGBABufferInternalSizedFormat(iz);
              let Mz = !1;
              bz === Fz.RGB && (bz = Fz.RGBA, Mz = !0), this._bindTextureDirectly(Fz.TEXTURE_CUBE_MAP, Zz, !0), this._unpackFlipY(!1);
              const Hz = tz(lz);
              for (let nz = 0; nz < Hz.length; nz++) {
                const lz = Oz >> nz;
                for (let tz = 0; tz < 6; tz++) {
                  let Oz = Hz[nz][tz];
                  Mz && (Oz = zz(Oz, lz, lz, iz)), Fz.texImage2D(tz, nz, Ez, lz, lz, 0, bz, uz, Oz)
                }
              }
              this._bindTextureDirectly(Fz.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Zz, lz, nz, iz, dz);
            Zz.isReady = !0, bz?.removePendingData(Zz), Zz.onLoadedObservable.notifyObservers(Zz), Zz.onLoadedObservable.clear(), Hz && Hz()
          };
        return this._loadFile(uz, (zz => {
          Kz(zz).catch((zz => {
            Rz(void 0, zz)
          }))
        }), void 0, bz?.offlineProvider, !0, Rz), Zz
      }, nz.ThinEngine.prototype.createRawTexture2DArray = uz(!1), nz.ThinEngine.prototype.createRawTexture3D = uz(!0), nz.ThinEngine.prototype.updateRawTexture2DArray = bz(!1), nz.ThinEngine.prototype.updateRawTexture3D = bz(!0))
    }();
    var Oz = bz(39057);
    let pz = !1;
    pz || (pz = !0, nz.ThinEngine.prototype._readTexturePixelsSync = function(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Hz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const pz = this._gl;
      if (!pz) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const zz = pz.createFramebuffer();
        if (!zz) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = zz
      }
      pz.bindFramebuffer(pz.FRAMEBUFFER, this._dummyFramebuffer), Ez > -1 && (zz.is2DArray || zz.is3D) ? pz.framebufferTextureLayer(pz.FRAMEBUFFER, pz.COLOR_ATTACHMENT0, zz._hardwareTexture?.underlyingResource, nz, Ez) : Ez > -1 ? pz.framebufferTexture2D(pz.FRAMEBUFFER, pz.COLOR_ATTACHMENT0, pz.TEXTURE_CUBE_MAP_POSITIVE_X + Ez, zz._hardwareTexture?.underlyingResource, nz) : pz.framebufferTexture2D(pz.FRAMEBUFFER, pz.COLOR_ATTACHMENT0, pz.TEXTURE_2D, zz._hardwareTexture?.underlyingResource, nz);
      let dz = void 0 !== zz.type ? this._getWebGLTextureType(zz.type) : pz.UNSIGNED_BYTE;
      return Mz ? iz || (iz = (0, Oz.s)(zz.type, 4 * uz * bz)) : dz === pz.UNSIGNED_BYTE ? (iz || (iz = new Uint8Array(4 * uz * bz)), dz = pz.UNSIGNED_BYTE) : (iz || (iz = new Float32Array(4 * uz * bz)), dz = pz.FLOAT), lz && this.flushFramebuffer(), pz.readPixels(tz, Hz, uz, bz, pz.RGBA, dz, iz), pz.bindFramebuffer(pz.FRAMEBUFFER, this._currentFramebuffer), iz
    }, nz.ThinEngine.prototype._readTexturePixels = function(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Hz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz))
    }), (0, bz(39155).b)();
    let dz = !1;
    dz || (dz = !0, nz.ThinEngine.prototype._createDepthStencilCubeTexture = function(zz, uz) {
      const bz = new lz.c(this, 12);
      if (bz.isCube = !0, 1 === this.PR) return Mz.e.Error("Depth cube texture is not supported by WebGL 1."), bz;
      const Ez = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...uz
        },
        nz = this._gl;
      this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, bz, !0), this._setupDepthStencilTexture(bz, zz, Ez.bilinearFiltering, Ez.comparisonFunction);
      for (let iz = 0; iz < 6; iz++) Ez.generateStencil ? nz.texImage2D(nz.TEXTURE_CUBE_MAP_POSITIVE_X + iz, 0, nz.DEPTH24_STENCIL8, zz, zz, 0, nz.DEPTH_STENCIL, nz.UNSIGNED_INT_24_8, null) : nz.texImage2D(nz.TEXTURE_CUBE_MAP_POSITIVE_X + iz, 0, nz.DEPTH_COMPONENT24, zz, zz, 0, nz.DEPTH_COMPONENT, nz.UNSIGNED_INT, null);
      return this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(bz), bz
    }, nz.ThinEngine.prototype._setCubeMapTextureParams = function(zz, uz, bz) {
      const Ez = this._gl;
      Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_MAG_FILTER, Ez.LINEAR), Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_MIN_FILTER, uz ? Ez.LINEAR_MIPMAP_LINEAR : Ez.LINEAR), Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_WRAP_S, Ez.CLAMP_TO_EDGE), Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_WRAP_T, Ez.CLAMP_TO_EDGE), zz.samplingMode = uz ? 3 : 2, uz && this.getCaps().textureMaxLevel && void 0 !== bz && bz > 0 && (Ez.texParameteri(Ez.TEXTURE_CUBE_MAP, Ez.TEXTURE_MAX_LEVEL, bz), zz._maxLodLevel = bz), this._bindTextureDirectly(Ez.TEXTURE_CUBE_MAP, null)
    }, nz.ThinEngine.prototype.createCubeTexture = function(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lz = arguments.length > 6 ? arguments[6] : void 0,
        Hz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Oz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        pz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        dz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Fz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Zz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Rz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Kz = this._gl;
      return this.createCubeTextureBase(zz, uz, bz, !!Ez, nz, iz, lz, Hz, Oz, pz, dz, Fz, (zz => this._bindTextureDirectly(Kz.TEXTURE_CUBE_MAP, zz, !0)), ((zz, uz) => {
        const bz = this.needPOTTextures ? (0, tz.e)(uz[0].width, this._caps.maxCubemapTextureSize) : uz[0].width,
          iz = bz,
          Hz = [Kz.TEXTURE_CUBE_MAP_POSITIVE_X, Kz.TEXTURE_CUBE_MAP_POSITIVE_Y, Kz.TEXTURE_CUBE_MAP_POSITIVE_Z, Kz.TEXTURE_CUBE_MAP_NEGATIVE_X, Kz.TEXTURE_CUBE_MAP_NEGATIVE_Y, Kz.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Kz.TEXTURE_CUBE_MAP, zz, !0), this._unpackFlipY(!1);
        const Oz = lz ? this._getInternalFormat(lz, zz._useSRGBBuffer) : zz._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Kz.RGBA;
        let pz = lz ? this._getInternalFormat(lz) : Kz.RGBA;
        zz._useSRGBBuffer && 1 === this.PR && (pz = Oz);
        for (let Ez = 0; Ez < Hz.length; Ez++)
          if (uz[Ez].width !== bz || uz[Ez].height !== iz) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Mz.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = bz, this._workingCanvas.height = iz, this._workingContext.drawImage(uz[Ez], 0, 0, uz[Ez].width, uz[Ez].height, 0, 0, bz, iz), Kz.texImage2D(Hz[Ez], 0, Oz, pz, Kz.UNSIGNED_BYTE, this._workingCanvas)
          } else Kz.texImage2D(Hz[Ez], 0, Oz, pz, Kz.UNSIGNED_BYTE, uz[Ez]);
        Ez || Kz.generateMipmap(Kz.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(zz, !Ez), zz.width = bz, zz.height = iz, zz.isReady = !0, lz && (zz.format = lz), zz.onLoadedObservable.notifyObservers(zz), zz.onLoadedObservable.clear(), nz && nz()
      }), !!Zz, Rz)
    }, nz.ThinEngine.prototype.generateMipMapsForCubemap = function(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz.generateMipMaps) {
        const bz = this._gl;
        this._bindTextureDirectly(bz.TEXTURE_CUBE_MAP, zz, !0), bz.generateMipmap(bz.TEXTURE_CUBE_MAP), uz && this._bindTextureDirectly(bz.TEXTURE_CUBE_MAP, null)
      }
    });
    bz(39157);
    let Fz = !1;
    Fz || (Fz = !0, nz.ThinEngine.prototype.setDepthStencilTexture = function(zz, uz, bz, Ez) {
      void 0 !== zz && (uz && (this._boundUniforms[zz] = uz), bz && bz.depthStencilTexture ? this._setTexture(zz, bz, !1, !0, Ez) : this._setTexture(zz, null, void 0, void 0, Ez))
    });
    let Zz = !1;
    Zz || (Zz = !0, nz.ThinEngine.prototype.createRenderTargetCubeTexture = function(zz, uz) {
      const bz = this._createHardwareRenderTargetWrapper(!1, !0, zz),
        Ez = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...uz
        };
      Ez.generateStencilBuffer = Ez.generateDepthBuffer && Ez.generateStencilBuffer, (1 !== Ez.type || this._caps.textureFloatLinearFiltering) && (2 !== Ez.type || this._caps.textureHalfFloatLinearFiltering) || (Ez.samplingMode = 1);
      const nz = this._gl,
        iz = new lz.c(this, 5);
      this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, iz, !0);
      const tz = this._getSamplingParameters(Ez.samplingMode, Ez.generateMipMaps);
      1 !== Ez.type || this._caps.textureFloat || (Ez.type = 0, Mz.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), nz.texParameteri(nz.TEXTURE_CUBE_MAP, nz.TEXTURE_MAG_FILTER, tz.mag), nz.texParameteri(nz.TEXTURE_CUBE_MAP, nz.TEXTURE_MIN_FILTER, tz.min), nz.texParameteri(nz.TEXTURE_CUBE_MAP, nz.TEXTURE_WRAP_S, nz.CLAMP_TO_EDGE), nz.texParameteri(nz.TEXTURE_CUBE_MAP, nz.TEXTURE_WRAP_T, nz.CLAMP_TO_EDGE);
      for (let lz = 0; lz < 6; lz++) nz.texImage2D(nz.TEXTURE_CUBE_MAP_POSITIVE_X + lz, 0, this._getRGBABufferInternalSizedFormat(Ez.type, Ez.format), zz, zz, 0, this._getInternalFormat(Ez.format), this._getWebGLTextureType(Ez.type), null);
      const Hz = nz.createFramebuffer();
      return this._bindUnboundFramebuffer(Hz), bz._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ez.generateStencilBuffer, Ez.generateDepthBuffer, zz, zz), Ez.generateMipMaps && nz.generateMipmap(nz.TEXTURE_CUBE_MAP), this._bindTextureDirectly(nz.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), bz._framebuffer = Hz, bz._generateDepthBuffer = Ez.generateDepthBuffer, bz._generateStencilBuffer = Ez.generateStencilBuffer, iz.width = zz, iz.height = zz, iz.isReady = !0, iz.isCube = !0, iz.samples = 1, iz.generateMipMaps = Ez.generateMipMaps, iz.samplingMode = Ez.samplingMode, iz.type = Ez.type, iz.format = Ez.format, this._internalTexturesCache.push(iz), bz.setTextures(iz), bz
    });
    var Rz = bz(39164),
      Kz = bz(39167);
    let wz = !1;
    wz || (wz = !0, nz.ThinEngine.prototype.createPrefilteredCubeTexture = function(zz, uz, Ez, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        tz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Hz = arguments.length > 6 ? arguments[6] : void 0,
        Oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        pz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        dz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(zz, uz, null, !1, (async zz => {
        if (!zz) return void(iz && iz(null));
        const tz = zz.texture;
        if (pz ? zz.info.sphericalPolynomial && (tz._sphericalPolynomial = zz.info.sphericalPolynomial) : tz._sphericalPolynomial = tz._sphericalPolynomial ?? new Rz.g, tz._source = 9, this.getCaps().textureLOD) return void(iz && iz(tz));
        const Hz = this._gl,
          Oz = zz.width;
        if (!Oz) return;
        const {
          DDSTools: dz
        } = await bz.e(296).then((() => bz(40967))), Fz = [];
        for (let bz = 0; bz < 3; bz++) {
          const iz = 1 - bz / 2,
            pz = nz,
            Zz = Math.log2(Oz) * Ez + nz,
            Rz = pz + (Zz - pz) * iz,
            wz = Math.round(Math.min(Math.max(Rz, 0), Zz)),
            Xz = new lz.c(this, 2);
          if (Xz.type = tz.type, Xz.format = tz.format, Xz.width = Math.pow(2, Math.max(Math.log2(Oz) - wz, 0)), Xz.height = Xz.width, Xz.isCube = !0, Xz._cachedWrapU = 0, Xz._cachedWrapV = 0, this._bindTextureDirectly(Hz.TEXTURE_CUBE_MAP, Xz, !0), Xz.samplingMode = 2, Hz.texParameteri(Hz.TEXTURE_CUBE_MAP, Hz.TEXTURE_MAG_FILTER, Hz.LINEAR), Hz.texParameteri(Hz.TEXTURE_CUBE_MAP, Hz.TEXTURE_MIN_FILTER, Hz.LINEAR), Hz.texParameteri(Hz.TEXTURE_CUBE_MAP, Hz.TEXTURE_WRAP_S, Hz.CLAMP_TO_EDGE), Hz.texParameteri(Hz.TEXTURE_CUBE_MAP, Hz.TEXTURE_WRAP_T, Hz.CLAMP_TO_EDGE), zz.isDDS) {
            const uz = zz.info,
              bz = zz.data;
            this._unpackFlipY(uz.isCompressed), dz.UploadDDSLevels(this, Xz, bz, uz, !0, 6, wz)
          } else Mz.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Hz.TEXTURE_CUBE_MAP, null);
          const fz = new Kz.b(uz);
          fz._isCube = !0, fz._texture = Xz, Xz.isReady = !0, Fz.push(fz)
        }
        tz._lodTextureHigh = Fz[2], tz._lodTextureMid = Fz[1], tz._lodTextureLow = Fz[0], iz && iz(tz)
      }), tz, Hz, Oz, pz, Ez, nz, null, void 0, !1, dz)
    });
    var Xz = bz(39107);
    let fz = !1;
    fz || (fz = !0, nz.ThinEngine.prototype.createUniformBuffer = function(zz, uz) {
      const bz = this._gl.createBuffer();
      if (!bz) throw new Error("Unable to create uniform buffer");
      const Ez = new Xz.e(bz);
      return this.bindUniformBuffer(Ez), zz instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, zz, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(zz), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Ez.references = 1, Ez
    }, nz.ThinEngine.prototype.createDynamicUniformBuffer = function(zz, uz) {
      const bz = this._gl.createBuffer();
      if (!bz) throw new Error("Unable to create dynamic uniform buffer");
      const Ez = new Xz.e(bz);
      return this.bindUniformBuffer(Ez), zz instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, zz, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(zz), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Ez.references = 1, Ez
    }, nz.ThinEngine.prototype.updateUniformBuffer = function(zz, uz, bz, Ez) {
      this.bindUniformBuffer(zz), void 0 === bz && (bz = 0), void 0 === Ez ? uz instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, bz, uz) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, bz, new Float32Array(uz)) : uz instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, uz.subarray(bz, bz + Ez)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(uz).subarray(bz, bz + Ez)), this.bindUniformBuffer(null)
    }, nz.ThinEngine.prototype.bindUniformBuffer = function(zz) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, zz ? zz.underlyingResource : null)
    }, nz.ThinEngine.prototype.bindUniformBufferBase = function(zz, uz, bz) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, uz, zz ? zz.underlyingResource : null)
    }, nz.ThinEngine.prototype.bindUniformBlock = function(zz, uz, bz) {
      const Ez = zz.program,
        nz = this._gl.getUniformBlockIndex(Ez, uz);
      4294967295 !== nz && this._gl.uniformBlockBinding(Ez, nz, bz)
    });
    var sz = bz(39043),
      rz = bz(39079);
    let oz = !1;
    oz || (oz = !0, rz.b.prototype.displayLoadingUI = function() {
      if (!(0, sz.i)()) return;
      const zz = this.loadingScreen;
      zz && zz.displayLoadingUI()
    }, rz.b.prototype.hideLoadingUI = function() {
      if (!(0, sz.i)()) return;
      const zz = this._loadingScreen;
      zz && zz.hideLoadingUI()
    }, Object.defineProperty(rz.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = rz.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(zz) {
        this._loadingScreen = zz
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(rz.b.prototype, "loadingUIText", {
      set: function(zz) {
        this.loadingScreen.loadingUIText = zz
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(rz.b.prototype, "loadingUIBackgroundColor", {
      set: function(zz) {
        this.loadingScreen.loadingUIBackgroundColor = zz
      },
      enumerable: !0,
      configurable: !0
    })), (0, bz(39140).c)();
    let Nz = !1;
    Nz || (Nz = !0, rz.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, rz.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, rz.b.prototype.setDepthFunction = function(zz) {
      this._depthCullingState.depthFunc = zz
    }, rz.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, rz.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, rz.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, rz.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, rz.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, rz.b.prototype.setDepthWrite = function(zz) {
      this._depthCullingState.depthMask = zz
    }, rz.b.prototype.setAlphaConstants = function(zz, uz, bz, Ez) {
      this._alphaState.setAlphaBlendConstants(zz, uz, bz, Ez)
    }, rz.b.prototype.getAlphaMode = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[zz]
    }, rz.b.prototype.getAlphaEquation = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[zz]
    });
    let vz = !1;
    vz || (vz = !0, rz.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, rz.b.prototype.setStencilBuffer = function(zz) {
      this._stencilState.stencilTest = zz
    }, rz.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, rz.b.prototype.setStencilMask = function(zz) {
      this._stencilState.stencilMask = zz
    }, rz.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, rz.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, rz.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, rz.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, rz.b.prototype.setStencilFunction = function(zz) {
      this._stencilState.stencilFunc = zz
    }, rz.b.prototype.setStencilBackFunction = function(zz) {
      this._stencilState.stencilBackFunc = zz
    }, rz.b.prototype.setStencilFunctionReference = function(zz) {
      this._stencilState.stencilFuncRef = zz
    }, rz.b.prototype.setStencilFunctionMask = function(zz) {
      this._stencilState.stencilFuncMask = zz
    }, rz.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, rz.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, rz.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, rz.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, rz.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, rz.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, rz.b.prototype.setStencilOperationFail = function(zz) {
      this._stencilState.stencilOpStencilFail = zz
    }, rz.b.prototype.setStencilBackOperationFail = function(zz) {
      this._stencilState.stencilBackOpStencilFail = zz
    }, rz.b.prototype.setStencilOperationDepthFail = function(zz) {
      this._stencilState.stencilOpDepthFail = zz
    }, rz.b.prototype.setStencilBackOperationDepthFail = function(zz) {
      this._stencilState.stencilBackOpDepthFail = zz
    }, rz.b.prototype.setStencilOperationPass = function(zz) {
      this._stencilState.stencilOpStencilDepthPass = zz
    }, rz.b.prototype.setStencilBackOperationPass = function(zz) {
      this._stencilState.stencilBackOpStencilDepthPass = zz
    }, rz.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, rz.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    bz(39191);
    let xz = !1;
    xz || (xz = !0, rz.b.prototype.createDepthStencilTexture = function(zz, uz, bz) {
      if (uz.isCube) {
        const bz = zz.width || zz;
        return this._createDepthStencilCubeTexture(bz, uz)
      }
      return this._createDepthStencilTexture(zz, uz, bz)
    });
    bz(39193), bz(39233);
    let Jz = !1;
    Jz || (Jz = !0, nz.ThinEngine.prototype.enableScissor = function(zz, uz, bz, Ez) {
      const nz = this._gl;
      nz.enable(nz.SCISSOR_TEST), nz.scissor(zz, uz, bz, Ez)
    }, nz.ThinEngine.prototype.disableScissor = function() {
      const zz = this._gl;
      zz.disable(zz.SCISSOR_TEST)
    })
  },
  39002: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => rz
    });
    var Ez = bz(39011),
      nz = bz(36543),
      iz = bz(39022),
      lz = bz(39085);
    class Mz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new tz(zz)
      }
      sampleFrame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const uz = zz - this._lastFrameTimeMs;
            this._rollingFrameTime.add(uz)
          }
          this._lastFrameTimeMs = zz
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
        const zz = this._rollingFrameTime.history(0);
        return 0 === zz ? 0 : 1e3 / zz
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
    class tz {
      constructor(zz) {
        this._samples = new Array(zz), this.reset()
      }
      add(zz) {
        let uz;
        if (this.isSaturated()) {
          const zz = this._samples[this._pos];
          uz = zz - this.average, this.average -= uz / (this._sampleCount - 1), this._m2 -= uz * (zz - this.average)
        } else this._sampleCount++;
        uz = zz - this.average, this.average += uz / this._sampleCount, this._m2 += uz * (zz - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = zz, this._pos++, this._pos %= this._samples.length
      }
      history(zz) {
        if (zz >= this._sampleCount || zz >= this._samples.length) return 0;
        const uz = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(uz - zz)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(zz) {
        const uz = this._samples.length;
        return (zz % uz + uz) % uz
      }
    }
    var Hz = bz(39107),
      Oz = bz(38060),
      pz = bz(39125),
      dz = bz(39079),
      Fz = bz(39043);

    function Zz(zz) {
      const uz = function(zz) {
        if (!(0, Fz.e)() || !document.body) return null;
        const uz = document.createElement("span");
        uz.textContent = "Hg", uz.style.font = zz;
        const bz = document.createElement("div");
        bz.style.display = "inline-block", bz.style.width = "1px", bz.style.height = "0px", bz.style.verticalAlign = "bottom";
        const Ez = document.createElement("div");
        let nz, iz;
        Ez.style.whiteSpace = "nowrap", Ez.appendChild(uz), Ez.appendChild(bz), document.body.appendChild(Ez);
        try {
          iz = bz.getBoundingClientRect().top - uz.getBoundingClientRect().top, bz.style.verticalAlign = "baseline", nz = bz.getBoundingClientRect().top - uz.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Ez)
        }
        const lz = {
          ascent: nz,
          height: iz,
          descent: iz - nz
        };
        return Rz(lz) ? lz : null
      }(zz);
      if (uz) return uz;
      const bz = function(zz) {
        let uz = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? uz = new OffscreenCanvas(64, 64) : (0, Fz.e)() && "function" === typeof document.createElement && (uz = document.createElement("canvas"), uz.width = 64, uz.height = 64);
          const bz = uz?.getContext("2d");
          if (!bz) return null;
          bz.font = zz;
          const Ez = bz.measureText("Hg"),
            nz = Number(Ez.actualBoundingBoxAscent ?? Ez.fontBoundingBoxAscent),
            iz = Number(Ez.actualBoundingBoxDescent ?? Ez.fontBoundingBoxDescent),
            lz = {
              ascent: nz,
              height: nz + iz,
              descent: iz
            };
          return Rz(lz) ? lz : null
        } catch {
          return null
        } finally {
          const zz = uz;
          "function" === typeof zz?.dispose && zz.dispose()
        }
      }(zz);
      return bz || function(zz) {
        const uz = Math.max(1, function(zz) {
            const uz = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(zz || ""));
            return uz ? Number(uz[1]) : 16
          }(zz)),
          bz = .8 * uz,
          Ez = .2 * uz;
        return {
          ascent: bz,
          height: bz + Ez,
          descent: Ez
        }
      }(zz)
    }

    function Rz(zz) {
      return Number.isFinite(zz.ascent) && Number.isFinite(zz.height) && Number.isFinite(zz.descent) && zz.height > 0
    }

    function Kz(zz) {
      if (zz.requestPointerLock) {
        const uz = zz.requestPointerLock();
        uz instanceof Promise ? uz.then((() => {
          zz.focus()
        })).catch((() => {})) : zz.focus()
      }
    }
    var wz = bz(39135),
      Xz = bz(39071),
      fz = bz(39140),
      sz = bz(39145);
    class rz extends iz.ThinEngine {
      static get NpmPackage() {
        return dz.b.NpmPackage
      }
      static get Version() {
        return dz.b.Version
      }
      static get Instances() {
        return nz.d.Instances
      }
      static get LastCreatedEngine() {
        return nz.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return nz.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(zz) {
        return dz.b.DefaultLoadingScreenFactory(zz)
      }
      get _supportsHardwareTextureRescaling() {
        return !!rz._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, fz.c)(), (0, sz.d)(), super(zz, uz, bz, Ez), this._performanceMonitor = new Mz, this._drawCalls = new wz.d, zz && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(zz) {
        super._sharedInit(zz),
          function(zz, uz, bz) {
            zz._onCanvasFocus = () => {
              zz.onCanvasFocusObservable.notifyObservers(zz)
            }, zz._onCanvasBlur = () => {
              zz.onCanvasBlurObservable.notifyObservers(zz)
            }, zz._onCanvasContextMenu = uz => {
              zz.disableContextMenu && uz.preventDefault()
            }, uz.addEventListener("focus", zz._onCanvasFocus), uz.addEventListener("blur", zz._onCanvasBlur), uz.addEventListener("contextmenu", zz._onCanvasContextMenu), zz._onBlur = () => {
              zz.disablePerformanceMonitorInBackground && zz.performanceMonitor.disable(), zz._windowIsBackground = !0
            }, zz._onFocus = () => {
              zz.disablePerformanceMonitorInBackground && zz.performanceMonitor.enable(), zz._windowIsBackground = !1
            }, zz._onCanvasPointerOut = bz => {
              document.elementFromPoint(bz.clientX, bz.clientY) !== uz && zz.onCanvasPointerOutObservable.notifyObservers(bz)
            };
            const Ez = zz.getHostWindow();
            Ez && "function" === typeof Ez.addEventListener && (Ez.addEventListener("blur", zz._onBlur), Ez.addEventListener("focus", zz._onFocus)), uz.addEventListener("pointerout", zz._onCanvasPointerOut), bz.doNotHandleTouchAction || function(zz) {
              zz && zz.setAttribute && (zz.setAttribute("touch-action", "none"), zz.style.touchAction = "none", zz.style.webkitTapHighlightColor = "transparent")
            }(uz), !dz.b.audioEngine && bz.audioEngine && dz.b.AudioEngineFactory && (dz.b.audioEngine = dz.b.AudioEngineFactory(zz.getRenderingCanvas(), zz.getAudioContext(), zz.getAudioDestination())), (0, Fz.e)() && (zz._onFullscreenChange = () => {
              zz.isFullscreen = !!document.fullscreenElement, zz.isFullscreen && zz._pointerLockRequested && uz && Kz(uz)
            }, document.addEventListener("fullscreenchange", zz._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", zz._onFullscreenChange, !1), zz._onPointerLockChange = () => {
              zz.isPointerLock = document.pointerLockElement === uz
            }, document.addEventListener("pointerlockchange", zz._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", zz._onPointerLockChange, !1)), zz.enableOfflineSupport = void 0 !== dz.b.OfflineProviderFactory, zz._deterministicLockstep = !!bz.deterministicLockstep, zz._lockstepMaxSteps = bz.lockstepMaxSteps || 0, zz._timeStep = bz.timeStep || 1 / 60
          }(this, zz, this._creationOptions)
      }
      resizeImageBitmap(zz, uz, bz) {
        return function(zz, uz, bz, Ez) {
          const nz = zz.createCanvas(bz, Ez).getContext("2d");
          if (!nz) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return nz.drawImage(uz, 0, 0), nz.getImageData(0, 0, bz, Ez).data
        }(this, zz, uz, bz)
      }
      async _createImageBitmapFromSource(zz, uz) {
        return await async function(zz, uz, bz) {
          return await new Promise(((Ez, nz) => {
            const iz = new Image;
            iz.onload = () => {
              iz.decode().then((() => {
                zz.createImageBitmap(iz, bz).then((zz => {
                  Ez(zz)
                }))
              }))
            }, iz.onerror = () => {
              nz(`Error loading image ${iz.src}`)
            }, iz.src = uz
          }))
        }(this, zz, uz)
      }
      switchFullscreen(zz) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(zz)
      }
      enterFullscreen(zz) {
        this.isFullscreen || (this._pointerLockRequested = zz, this._renderingCanvas && function(zz) {
          const uz = zz.requestFullscreen || zz.webkitRequestFullscreen;
          uz && uz.call(zz)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const zz = document;
          document.exitFullscreen ? document.exitFullscreen() : zz.webkitCancelFullScreen && zz.webkitCancelFullScreen()
        }()
      }
      setDitheringState(zz) {
        zz ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(zz) {
        zz ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(zz, uz, bz, Ez) {
        const nz = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(zz, uz, bz, Ez), nz
      }
      scissorClear(zz, uz, bz, Ez, nz) {
        this.enableScissor(zz, uz, bz, Ez), this.clear(nz, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(zz) {
        const uz = this._gl.getAttachedShaders(zz);
        return uz ? this._gl.getShaderSource(uz[0]) : null
      }
      getFragmentShaderSource(zz) {
        const uz = this._gl.getAttachedShaders(zz);
        return uz ? this._gl.getShaderSource(uz[1]) : null
      }
      set framebufferDimensionsObject(zz) {
        this._framebufferDimensionsObject = zz, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const zz of this.scenes) zz.resetCachedMaterial(), zz._rebuildGeometries();
        for (const zz of this._virtualScenes) zz.resetCachedMaterial(), zz._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(zz) {
        return Zz(zz)
      }
      enterPointerlock() {
        this._renderingCanvas && Kz(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      ZN() {
        this._measureFps(), super.ZN()
      }
      _deletePipelineContext(zz) {
        const uz = zz;
        uz && uz.program && uz.transformFeedback && (this.deleteTransformFeedback(uz.transformFeedback), uz.transformFeedback = null), super._deletePipelineContext(zz)
      }
      createShaderProgram(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        nz = nz || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const lz = super.createShaderProgram(zz, uz, bz, Ez, nz, iz);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), lz
      }
      _createShaderProgram(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const iz = Ez.createProgram();
        if (zz.program = iz, !iz) throw new Error("Unable to create program");
        if (Ez.attachShader(iz, uz), Ez.attachShader(iz, bz), this.PR > 1 && nz) {
          const uz = this.createTransformFeedback();
          this.bindTransformFeedback(uz), this.setTranformFeedbackVaryings(iz, nz), zz.transformFeedback = uz
        }
        return Ez.linkProgram(iz), this.PR > 1 && nz && this.bindTransformFeedback(null), zz.context = Ez, zz.vertexShader = uz, zz.fragmentShader = bz, zz.isParallelCompiled || this._finalizePipelineContext(zz), iz
      }
      _releaseTexture(zz) {
        super._releaseTexture(zz)
      }
      _releaseRenderTargetWrapper(zz) {
        super._releaseRenderTargetWrapper(zz);
        for (const uz of this.scenes) {
          for (const bz of uz.postProcesses) bz._outputTexture === zz && (bz._outputTexture = null);
          for (const bz of uz.cameras)
            for (const uz of bz._postProcesses) uz && uz._outputTexture === zz && (uz._outputTexture = null)
        }
      }
      _rescaleTexture(zz, uz, bz, Ez, nz) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const iz = this.createRenderTargetTexture({
          width: uz.width,
          height: uz.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && rz._RescalePostProcessFactory && (this._rescalePostProcess = rz._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const lz = () => {
              this._rescalePostProcess.onApply = function(uz) {
                uz._bindTexture("textureSampler", zz)
              };
              let lz = bz;
              lz || (lz = this.scenes[this.scenes.length - 1]), lz.postProcessManager.directRender([this._rescalePostProcess], iz, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, uz, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Ez, 0, 0, uz.width, uz.height, 0), this.unBindFramebuffer(iz), iz.dispose(), nz && nz()
            },
            Mz = this._rescalePostProcess.getEffect();
          Mz ? Mz.executeWhenCompiled(lz) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((zz => {
            zz.executeWhenCompiled(lz)
          }))
        }
      }
      wrapWebGLTexture(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const lz = new pz.d(zz, this._gl),
          Mz = new Ez.c(this, 15, !0);
        return Mz._hardwareTexture = lz, Mz.baseWidth = nz, Mz.baseHeight = iz, Mz.width = nz, Mz.height = iz, Mz.isReady = !0, Mz.useMipMaps = uz, this.updateTextureSamplingMode(bz, Mz), Mz
      }
      updateWrappedWebGLTexture(zz, uz) {
        if (15 !== zz.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Ez of this._renderTargetWrapperCache)
          if (Ez.textures?.includes(zz)) {
            if (Ez.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Ez._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } zz._hardwareTexture = new pz.d(uz, this._gl), zz.isReady = !0, zz._cachedCoordinatesMode = null, zz._cachedWrapU = null, zz._cachedWrapV = null, zz._cachedWrapR = null, zz._cachedAnisotropicFilteringLevel = null;
        for (const Ez in this._boundTexturesCache) this._boundTexturesCache[Ez] === zz && (this._boundTexturesCache[Ez] = null);
        this.updateTextureSamplingMode(zz.samplingMode, zz);
        const bz = this._gl;
        for (const Ez of this._renderTargetWrapperCache) {
          if (Ez.texture !== zz) continue;
          const nz = Ez,
            iz = Ez.samples,
            lz = iz > 1;
          nz._framebuffer && bz.deleteFramebuffer(nz._framebuffer), !lz && nz._depthStencilBuffer && (bz.deleteRenderbuffer(nz._depthStencilBuffer), nz._depthStencilBuffer = null);
          const Mz = this._currentFramebuffer,
            tz = bz.createFramebuffer();
          this._bindUnboundFramebuffer(tz), bz.framebufferTexture2D(bz.FRAMEBUFFER, bz.COLOR_ATTACHMENT0, bz.TEXTURE_2D, uz, 0), lz || (nz._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ez._generateStencilBuffer, Ez._generateDepthBuffer, Ez.width, Ez.height)), this._bindUnboundFramebuffer(Mz), nz._framebuffer = tz, lz && (Ez._samples = 1, this.updateRenderTargetTextureSampleCount(nz, iz))
        }
      }
      _uploadImageToTexture(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nz = this._gl,
          iz = this._getWebGLTextureType(zz.type),
          lz = this._getInternalFormat(zz.format),
          Mz = this._getRGBABufferInternalSizedFormat(zz.type, lz),
          tz = zz.isCube ? nz.TEXTURE_CUBE_MAP : nz.TEXTURE_2D;
        this._bindTextureDirectly(tz, zz, !0), this._unpackFlipY(zz.invertY);
        let Hz = nz.TEXTURE_2D;
        zz.isCube && (Hz = nz.TEXTURE_CUBE_MAP_POSITIVE_X + bz), nz.texImage2D(Hz, Ez, Mz, lz, iz, uz), this._bindTextureDirectly(tz, null, !0)
      }
      updateTextureComparisonFunction(zz, uz) {
        if (1 === this.PR) return void Oz.e.Error("WebGL 1 does not support texture comparison.");
        const bz = this._gl;
        zz.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, zz, !0), 0 === uz ? (bz.texParameteri(bz.TEXTURE_CUBE_MAP, bz.TEXTURE_COMPARE_FUNC, 515), bz.texParameteri(bz.TEXTURE_CUBE_MAP, bz.TEXTURE_COMPARE_MODE, bz.NONE)) : (bz.texParameteri(bz.TEXTURE_CUBE_MAP, bz.TEXTURE_COMPARE_FUNC, uz), bz.texParameteri(bz.TEXTURE_CUBE_MAP, bz.TEXTURE_COMPARE_MODE, bz.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, zz, !0), 0 === uz ? (bz.texParameteri(bz.TEXTURE_2D, bz.TEXTURE_COMPARE_FUNC, 515), bz.texParameteri(bz.TEXTURE_2D, bz.TEXTURE_COMPARE_MODE, bz.NONE)) : (bz.texParameteri(bz.TEXTURE_2D, bz.TEXTURE_COMPARE_FUNC, uz), bz.texParameteri(bz.TEXTURE_2D, bz.TEXTURE_COMPARE_MODE, bz.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), zz._comparisonFunction = uz
      }
      createInstancesBuffer(zz) {
        const uz = this._gl.createBuffer();
        if (!uz) throw new Error("Unable to create instance buffer");
        const bz = new Hz.e(uz);
        return bz.Bp = zz, this.bindArrayBuffer(bz), this._gl.bufferData(this._gl.ARRAY_BUFFER, zz, this._gl.DYNAMIC_DRAW), bz.references = 1, bz
      }
      deleteInstancesBuffer(zz) {
        this._gl.deleteBuffer(zz)
      }
      async _clientWaitAsync(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Ez = this._gl;
        return await new Promise(((nz, iz) => {
          (0, Xz.g)((() => {
            const bz = Ez.clientWaitSync(zz, uz, 0);
            if (bz == Ez.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return bz != Ez.TIMEOUT_EXPIRED
          }), nz, iz, bz)
        }))
      }
      _readPixelsAsync(zz, uz, bz, Ez, nz, iz, lz) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Mz = this._gl,
          tz = Mz.createBuffer();
        Mz.bindBuffer(Mz.PIXEL_PACK_BUFFER, tz), Mz.bufferData(Mz.PIXEL_PACK_BUFFER, lz.byteLength, Mz.STREAM_READ), Mz.readPixels(zz, uz, bz, Ez, nz, iz, 0), Mz.bindBuffer(Mz.PIXEL_PACK_BUFFER, null);
        const Hz = Mz.fenceSync(Mz.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Hz ? (Mz.flush(), this._clientWaitAsync(Hz, 0, 10).then((() => (Mz.deleteSync(Hz), Mz.bindBuffer(Mz.PIXEL_PACK_BUFFER, tz), Mz.getBufferSubData(Mz.PIXEL_PACK_BUFFER, 0, lz), Mz.bindBuffer(Mz.PIXEL_PACK_BUFFER, null), Mz.deleteBuffer(tz), lz)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(zz, uz) {
            1 === nz.d.Instances.length && dz.b.audioEngine && (dz.b.audioEngine.dispose(), dz.b.audioEngine = null);
            const bz = zz.getHostWindow();
            bz && "function" === typeof bz.removeEventListener && (bz.removeEventListener("blur", zz._onBlur), bz.removeEventListener("focus", zz._onFocus)), uz && (uz.removeEventListener("focus", zz._onCanvasFocus), uz.removeEventListener("blur", zz._onCanvasBlur), uz.removeEventListener("pointerout", zz._onCanvasPointerOut), uz.removeEventListener("contextmenu", zz._onCanvasContextMenu)), (0, Fz.e)() && (document.removeEventListener("fullscreenchange", zz._onFullscreenChange), document.removeEventListener("mozfullscreenchange", zz._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", zz._onFullscreenChange), document.removeEventListener("msfullscreenchange", zz._onFullscreenChange), document.removeEventListener("pointerlockchange", zz._onPointerLockChange), document.removeEventListener("mspointerlockchange", zz._onPointerLockChange), document.removeEventListener("mozpointerlockchange", zz._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", zz._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    rz.ALPHA_DISABLE = 0, rz.ALPHA_ADD = 1, rz.ALPHA_COMBINE = 2, rz.ALPHA_SUBTRACT = 3, rz.ALPHA_MULTIPLY = 4, rz.ALPHA_MAXIMIZED = 5, rz.ALPHA_ONEONE = 6, rz.ALPHA_PREMULTIPLIED = 7, rz.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, rz.ALPHA_INTERPOLATE = 9, rz.ALPHA_SCREENMODE = 10, rz.DELAYLOADSTATE_NONE = 0, rz.DELAYLOADSTATE_LOADED = 1, rz.DELAYLOADSTATE_LOADING = 2, rz.DELAYLOADSTATE_NOTLOADED = 4, rz.NEVER = 512, rz.ALWAYS = 519, rz.LESS = 513, rz.EQUAL = 514, rz.LEQUAL = 515, rz.GREATER = 516, rz.GEQUAL = 518, rz.NOTEQUAL = 517, rz.KEEP = 7680, rz.REPLACE = 7681, rz.INCR = 7682, rz.DECR = 7683, rz.INVERT = 5386, rz.INCR_WRAP = 34055, rz.DECR_WRAP = 34056, rz.TEXTURE_CLAMP_ADDRESSMODE = 0, rz.TEXTURE_WRAP_ADDRESSMODE = 1, rz.TEXTURE_MIRROR_ADDRESSMODE = 2, rz.TEXTUREFORMAT_ALPHA = 0, rz.TEXTUREFORMAT_LUMINANCE = 1, rz.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, rz.TEXTUREFORMAT_RGB = 4, rz.TEXTUREFORMAT_RGBA = 5, rz.TEXTUREFORMAT_RED = 6, rz.TEXTUREFORMAT_R = 6, rz.TEXTUREFORMAT_R16_UNORM = 33322, rz.TEXTUREFORMAT_RG16_UNORM = 33324, rz.TEXTUREFORMAT_RGB16_UNORM = 32852, rz.TEXTUREFORMAT_RGBA16_UNORM = 32859, rz.TEXTUREFORMAT_R16_SNORM = 36760, rz.TEXTUREFORMAT_RG16_SNORM = 36761, rz.TEXTUREFORMAT_RGB16_SNORM = 36762, rz.TEXTUREFORMAT_RGBA16_SNORM = 36763, rz.TEXTUREFORMAT_RG = 7, rz.TEXTUREFORMAT_RED_INTEGER = 8, rz.TEXTUREFORMAT_R_INTEGER = 8, rz.TEXTUREFORMAT_RG_INTEGER = 9, rz.TEXTUREFORMAT_RGB_INTEGER = 10, rz.TEXTUREFORMAT_RGBA_INTEGER = 11, rz.TEXTURETYPE_UNSIGNED_BYTE = 0, rz.TEXTURETYPE_UNSIGNED_INT = 0, rz.TEXTURETYPE_FLOAT = 1, rz.TEXTURETYPE_HALF_FLOAT = 2, rz.TEXTURETYPE_BYTE = 3, rz.TEXTURETYPE_SHORT = 4, rz.TEXTURETYPE_UNSIGNED_SHORT = 5, rz.TEXTURETYPE_INT = 6, rz.TEXTURETYPE_UNSIGNED_INTEGER = 7, rz.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, rz.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, rz.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, rz.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, rz.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, rz.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, rz.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, rz.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, rz.TEXTURE_NEAREST_SAMPLINGMODE = 1, rz.TEXTURE_BILINEAR_SAMPLINGMODE = 2, rz.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, rz.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, rz.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, rz.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, rz.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, rz.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, rz.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, rz.TEXTURE_NEAREST_LINEAR = 7, rz.TEXTURE_NEAREST_NEAREST = 1, rz.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, rz.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, rz.TEXTURE_LINEAR_LINEAR = 2, rz.TEXTURE_LINEAR_NEAREST = 12, rz.TEXTURE_EXPLICIT_MODE = 0, rz.TEXTURE_SPHERICAL_MODE = 1, rz.TEXTURE_PLANAR_MODE = 2, rz.TEXTURE_CUBIC_MODE = 3, rz.TEXTURE_PROJECTION_MODE = 4, rz.TEXTURE_SKYBOX_MODE = 5, rz.TEXTURE_INVCUBIC_MODE = 6, rz.TEXTURE_EQUIRECTANGULAR_MODE = 7, rz.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, rz.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, rz.SCALEMODE_FLOOR = 1, rz.SCALEMODE_NEAREST = 2, rz.SCALEMODE_CEILING = 3
  },
  39162: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = bz(39128);
    class nz {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(zz) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = zz, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, zz && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Ez.d)(zz.format))
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
      getBaseArrayLayer(zz) {
        if (!this._textures) return -1;
        const uz = this._textures[zz],
          bz = this._layerIndices?.[zz] ?? 0,
          Ez = this._faceIndices?.[zz] ?? 0;
        return uz.isCube ? 6 * bz + Ez : uz.is3D ? 0 : bz
      }
      get samples() {
        return this._samples
      }
      setSamples(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === zz && !bz) return zz;
        const Ez = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, zz, uz) : this._engine.updateRenderTargetTextureSampleCount(this, zz);
        return this._samples = zz, Ez
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(zz, uz, bz, Ez, nz) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = zz, this._isCube = uz, this._size = bz, this._engine = Ez, this._depthStencilTexture = null, this.label = nz
      }
      setTextures(zz) {
        Array.isArray(zz) ? this._textures = zz : this._textures = zz ? [zz] : null
      }
      setTexture(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[uz] !== zz && (this._textures[uz] && bz && this._textures[uz].dispose(), this._textures[uz] = zz)
      }
      setLayerAndFaceIndices(zz, uz) {
        this._layerIndices = zz, this._faceIndices = uz
      }
      setLayerAndFaceIndex() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== uz && uz >= 0 && (this._layerIndices[zz] = uz), void 0 !== bz && bz >= 0 && (this._faceIndices[zz] = bz)
      }
      createDepthStencilTexture() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = bz, this._depthStencilTextureLabel = iz, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: uz,
          comparisonFunction: zz,
          generateStencil: bz,
          isCube: this._isCube,
          samples: Ez,
          depthTextureFormat: nz,
          label: iz
        }, this), this._depthStencilTexture
      }
      _shareDepth(zz) {
        this.shareDepth(zz)
      }
      shareDepth(zz) {
        this._depthStencilTexture && (zz._depthStencilTexture && zz._depthStencilTexture.dispose(), zz._depthStencilTexture = this._depthStencilTexture, zz._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(zz) {
        this.texture && this.texture._swapAndDie(zz), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let zz = null;
        if (this._isMulti) {
          const uz = this.textures;
          if (uz && uz.length > 0) {
            let bz = !1,
              Ez = uz.length,
              nz = -1;
            const iz = uz[uz.length - 1]._source;
            14 !== iz && 12 !== iz || (bz = !0, nz = uz[uz.length - 1].format, Ez--);
            const lz = [],
              Mz = [],
              tz = [],
              Hz = [],
              Oz = [],
              pz = [],
              dz = [],
              Fz = {};
            for (let zz = 0; zz < Ez; ++zz) {
              const bz = uz[zz];
              lz.push(bz.samplingMode), Mz.push(bz.type), tz.push(bz.format);
              void 0 !== Fz[bz.uniqueId] ? (Hz.push(-1), dz.push(0)) : (Fz[bz.uniqueId] = zz, bz.is2DArray ? (Hz.push(35866), dz.push(bz.depth)) : bz.isCube ? (Hz.push(34067), dz.push(0)) : bz.is3D ? (Hz.push(32879), dz.push(bz.depth)) : (Hz.push(3553), dz.push(0))), this._faceIndices && Oz.push(this._faceIndices[zz] ?? 0), this._layerIndices && pz.push(this._layerIndices[zz] ?? 0)
            }
            const Zz = {
                samplingModes: lz,
                generateMipMaps: uz[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: bz,
                depthTextureFormat: nz,
                types: Mz,
                formats: tz,
                Yiz: Ez,
                targetTypes: Hz,
                faceIndex: Oz,
                layerIndex: pz,
                layerCounts: dz,
                label: this.label
              },
              Rz = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            zz = this._engine.createMultipleRenderTarget(Rz, Zz);
            for (let Kz = 0; Kz < Ez; ++Kz) {
              if (-1 !== Hz[Kz]) continue;
              const bz = Fz[uz[Kz].uniqueId];
              zz.setTexture(zz.textures[bz], Kz)
            }
          }
        } else {
          const uz = {};
          if (uz.generateDepthBuffer = this._generateDepthBuffer, uz.generateMipMaps = this.texture?.generateMipMaps ?? !1, uz.generateStencilBuffer = this._generateStencilBuffer, uz.samplingMode = this.texture?.samplingMode, uz.type = this.texture?.type, uz.format = this.texture?.format, uz.noColorAttachment = !this._textures, uz.label = this.label, this.isCube) zz = this._engine.createRenderTargetCubeTexture(this.width, uz);
          else {
            const bz = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            zz = this._engine.createRenderTargetTexture(bz, uz)
          }
          zz.texture && (zz.texture.isReady = !0)
        }
        return zz
      }
      _swapRenderTargetWrapper(zz) {
        if (this._textures && zz._textures)
          for (let uz = 0; uz < this._textures.length; ++uz) this._textures[uz]._swapAndDie(zz._textures[uz], !1), zz._textures[uz].isReady = !0;
        this._depthStencilTexture && zz._depthStencilTexture && (this._depthStencilTexture._swapAndDie(zz._depthStencilTexture), zz._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const zz = this._cloneRenderTargetWrapper();
        if (zz) {
          if (this._depthStencilTexture) {
            const uz = this._depthStencilTexture.samplingMode,
              bz = this._depthStencilTexture.format,
              Ez = 2 === uz || 3 === uz || 11 === uz;
            zz.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Ez, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, bz, this._depthStencilTextureLabel)
          }
          this.samples > 1 && zz.setSamples(this.samples), zz._swapRenderTargetWrapper(this), zz.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let zz = 0; zz < this._textures.length; ++zz) this._textures[zz].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39607: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    class Ez {
      static get ForceFullSceneLoadingForIncremental() {
        return Ez._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(zz) {
        Ez._ForceFullSceneLoadingForIncremental = zz
      }
      static get ShowLoadingScreen() {
        return Ez._ShowLoadingScreen
      }
      static set ShowLoadingScreen(zz) {
        Ez._ShowLoadingScreen = zz
      }
      static get loggingLevel() {
        return Ez._LoggingLevel
      }
      static set loggingLevel(zz) {
        Ez._LoggingLevel = zz
      }
      static get CleanBoneMatrixWeights() {
        return Ez._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(zz) {
        Ez._CleanBoneMatrixWeights = zz
      }
    }
    Ez._ForceFullSceneLoadingForIncremental = !1, Ez._ShowLoadingScreen = !0, Ez._CleanBoneMatrixWeights = !1, Ez._LoggingLevel = 0
  },
  39241: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(38060);
    const nz = new Map;

    function iz(zz, uz) {
      (function(zz) {
        return nz.delete(zz)
      })(zz) && Ez.e.Warn(`Extension with the name '${zz}' already exists`), nz.set(zz, uz)
    }

    function lz(zz, uz) {
      "image/ktx" !== uz && "image/ktx2" !== uz || (zz = ".ktx"), nz.has(zz) || (zz.endsWith(".ies") && iz(".ies", (async () => await bz.e(299).then((() => bz(40979))).then((zz => new zz._IESTextureLoader)))), zz.endsWith(".dds") && iz(".dds", (async () => await bz.e(297).then((() => bz(40983))).then((zz => new zz._DDSTextureLoader)))), zz.endsWith(".basis") && iz(".basis", (async () => await bz.e(300).then((() => bz(40992))).then((zz => new zz._BasisTextureLoader)))), zz.endsWith(".env") && iz(".env", (async () => await Promise.all([bz.e(301), bz.e(298)]).then((() => bz(40996))).then((zz => new zz._ENVTextureLoader)))), zz.endsWith(".hdr") && iz(".hdr", (async () => await bz.e(302).then((() => bz(41043))).then((zz => new zz._HDRTextureLoader)))), (zz.endsWith(".ktx") || zz.endsWith(".ktx2")) && (iz(".ktx", (async () => await bz.e(303).then((() => bz(41050))).then((zz => new zz._KTXTextureLoader)))), iz(".ktx2", (async () => await bz.e(303).then((() => bz(41050))).then((zz => new zz._KTXTextureLoader))))), zz.endsWith(".tga") && iz(".tga", (async () => await bz.e(304).then((() => bz(41065))).then((zz => new zz._TGATextureLoader)))), zz.endsWith(".exr") && iz(".exr", (async () => await bz.e(305).then((() => bz(41074))).then((zz => new zz._ExrTextureLoader)))));
      const Ez = nz.get(zz);
      return Ez ? Promise.resolve(Ez(uz)) : null
    }
  },
  39622: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      f: () => Hz
    });
    var Ez = bz(39451),
      nz = bz(39189),
      iz = bz(36564);
    class lz extends Ez.c {
      get J_() {
        return this._subMaterials
      }
      set J_(zz) {
        this._subMaterials = zz, this._hookArray(zz)
      }
      getChildren() {
        return this.J_
      }
      constructor(zz, uz) {
        super(zz, uz, !0), this._waitingSubMaterialsUniqueIds = [], this.XT().addMultiMaterial(this), this.J_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(zz) {
        var uz = this;
        const bz = zz.push;
        zz.push = function() {
          for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
          const lz = bz.apply(zz, nz);
          return uz._markAllSubMeshesAsTexturesDirty(), lz
        };
        const Ez = zz.splice;
        zz.splice = (uz, bz) => {
          const nz = Ez.call(zz, uz, bz ?? zz.length);
          return this._markAllSubMeshesAsTexturesDirty(), nz
        }
      }
      getSubMaterial(zz) {
        return zz < 0 || zz >= this.J_.length ? this.XT().defaultMaterial : this.J_[zz]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.J_.map((zz => zz ? zz.getActiveTextures() : [])))
      }
      hasTexture(zz) {
        if (super.hasTexture(zz)) return !0;
        for (let uz = 0; uz < this.J_.length; uz++)
          if (this.J_[uz]?.hasTexture(zz)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(zz, uz, bz) {
        for (let Ez = 0; Ez < this.J_.length; Ez++) {
          const nz = this.J_[Ez];
          if (nz) {
            if (nz._storeEffectOnSubMeshes) {
              if (!nz.isReadyForSubMesh(zz, uz, bz)) return !1;
              continue
            }
            if (!nz.isReady(zz)) return !1
          }
        }
        return !0
      }
      clone(zz, uz) {
        const bz = new lz(zz, this.XT());
        for (let Ez = 0; Ez < this.J_.length; Ez++) {
          let nz;
          const iz = this.J_[Ez];
          nz = uz && iz ? iz.clone(zz + "-" + iz.name) : this.J_[Ez], bz.J_.push(nz)
        }
        return bz
      }
      serialize() {
        const zz = {};
        zz.name = this.name, zz.id = this.id, zz.uniqueId = this.uniqueId, nz.e && (zz.tags = nz.e.GetTags(this)), zz.materialsUniqueIds = [], zz.materials = [];
        for (let uz = 0; uz < this.J_.length; uz++) {
          const bz = this.J_[uz];
          bz ? (zz.materialsUniqueIds.push(bz.uniqueId), zz.materials.push(bz.id)) : (zz.materialsUniqueIds.push(null), zz.materials.push(null))
        }
        return zz
      }
      dispose(zz, uz, bz) {
        const Ez = this.XT();
        if (!Ez) return;
        if (bz)
          for (let iz = 0; iz < this.J_.length; iz++) {
            const bz = this.J_[iz];
            bz && bz.dispose(zz, uz)
          }
        const nz = Ez.multiMaterials.indexOf(this);
        nz >= 0 && Ez.multiMaterials.splice(nz, 1), super.dispose(zz, uz)
      }
    }
    let Mz = !1;

    function tz(zz, uz) {
      const bz = new lz(zz.name, uz);
      if (bz.id = zz.id, bz._loadedUniqueId = zz.uniqueId, nz.e && nz.e.AddTagsTo(bz, zz.tags), zz.materialsUniqueIds) bz._waitingSubMaterialsUniqueIds = zz.materialsUniqueIds;
      else
        for (const Ez of zz.materials) bz.J_.push(uz.getLastMaterialById(Ez));
      return bz
    }

    function Hz() {
      Mz || (Mz = !0, lz.ParseMultiMaterial = tz, (0, iz.c)("BABYLON.MultiMaterial", lz))
    }
  },
  39386: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez, nz, iz = bz(36519);
    ! function(zz) {
      zz[zz.LOCAL = 0] = "LOCAL", zz[zz.WORLD = 1] = "WORLD", zz[zz.BONE = 2] = "BONE"
    }(Ez || (Ez = {}));
    class lz {}
    lz.X = new iz.n(1, 0, 0), lz.Y = new iz.n(0, 1, 0), lz.Z = new iz.n(0, 0, 1),
      function(zz) {
        zz[zz.X = 0] = "X", zz[zz.Y = 1] = "Y", zz[zz.Z = 2] = "Z"
      }(nz || (nz = {}))
  },
  39164: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      g: () => Hz
    });
    var Ez = bz(36519);
    const nz = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      iz = [() => 1, zz => zz.y, zz => zz.z, zz => zz.x, zz => zz.x * zz.y, zz => zz.y * zz.z, zz => 3 * zz.z * zz.z - 1, zz => zz.x * zz.z, zz => zz.x * zz.x - zz.y * zz.y],
      lz = (zz, uz) => nz[zz] * iz[zz](uz),
      Mz = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class tz {
      constructor() {
        this.preScaled = !1, this.l00 = Ez.n.Zero(), this.l1_1 = Ez.n.Zero(), this.l10 = Ez.n.Zero(), this.l11 = Ez.n.Zero(), this.l2_2 = Ez.n.Zero(), this.l2_1 = Ez.n.Zero(), this.l20 = Ez.n.Zero(), this.l21 = Ez.n.Zero(), this.l22 = Ez.n.Zero()
      }
      addLight(zz, uz, bz) {
        Ez.l.ER[0].set(uz.r, uz.g, uz.b);
        const nz = Ez.l.ER[0],
          iz = Ez.l.ER[1];
        nz.scaleToRef(bz, iz), iz.scaleToRef(lz(0, zz), Ez.l.ER[2]), this.l00.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(1, zz), Ez.l.ER[2]), this.l1_1.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(2, zz), Ez.l.ER[2]), this.l10.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(3, zz), Ez.l.ER[2]), this.l11.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(4, zz), Ez.l.ER[2]), this.l2_2.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(5, zz), Ez.l.ER[2]), this.l2_1.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(6, zz), Ez.l.ER[2]), this.l20.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(7, zz), Ez.l.ER[2]), this.l21.addInPlace(Ez.l.ER[2]), iz.scaleToRef(lz(8, zz), Ez.l.ER[2]), this.l22.addInPlace(Ez.l.ER[2])
      }
      scaleInPlace(zz) {
        this.l00.scaleInPlace(zz), this.l1_1.scaleInPlace(zz), this.l10.scaleInPlace(zz), this.l11.scaleInPlace(zz), this.l2_2.scaleInPlace(zz), this.l2_1.scaleInPlace(zz), this.l20.scaleInPlace(zz), this.l21.scaleInPlace(zz), this.l22.scaleInPlace(zz)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Mz[0]), this.l1_1.scaleInPlace(Mz[1]), this.l10.scaleInPlace(Mz[2]), this.l11.scaleInPlace(Mz[3]), this.l2_2.scaleInPlace(Mz[4]), this.l2_1.scaleInPlace(Mz[5]), this.l20.scaleInPlace(Mz[6]), this.l21.scaleInPlace(Mz[7]), this.l22.scaleInPlace(Mz[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(nz[0]), this.l1_1.scaleInPlace(nz[1]), this.l10.scaleInPlace(nz[2]), this.l11.scaleInPlace(nz[3]), this.l2_2.scaleInPlace(nz[4]), this.l2_1.scaleInPlace(nz[5]), this.l20.scaleInPlace(nz[6]), this.l21.scaleInPlace(nz[7]), this.l22.scaleInPlace(nz[8])
      }
      updateFromArray(zz) {
        return Ez.n.FromArrayToRef(zz[0], 0, this.l00), Ez.n.FromArrayToRef(zz[1], 0, this.l1_1), Ez.n.FromArrayToRef(zz[2], 0, this.l10), Ez.n.FromArrayToRef(zz[3], 0, this.l11), Ez.n.FromArrayToRef(zz[4], 0, this.l2_2), Ez.n.FromArrayToRef(zz[5], 0, this.l2_1), Ez.n.FromArrayToRef(zz[6], 0, this.l20), Ez.n.FromArrayToRef(zz[7], 0, this.l21), Ez.n.FromArrayToRef(zz[8], 0, this.l22), this
      }
      updateFromFloatsArray(zz) {
        return Ez.n.FromFloatsToRef(zz[0], zz[1], zz[2], this.l00), Ez.n.FromFloatsToRef(zz[3], zz[4], zz[5], this.l1_1), Ez.n.FromFloatsToRef(zz[6], zz[7], zz[8], this.l10), Ez.n.FromFloatsToRef(zz[9], zz[10], zz[11], this.l11), Ez.n.FromFloatsToRef(zz[12], zz[13], zz[14], this.l2_2), Ez.n.FromFloatsToRef(zz[15], zz[16], zz[17], this.l2_1), Ez.n.FromFloatsToRef(zz[18], zz[19], zz[20], this.l20), Ez.n.FromFloatsToRef(zz[21], zz[22], zz[23], this.l21), Ez.n.FromFloatsToRef(zz[24], zz[25], zz[26], this.l22), this
      }
      static FromArray(zz) {
        return (new tz).updateFromArray(zz)
      }
      static FromPolynomial(zz) {
        const uz = new tz;
        return uz.l00 = zz.xx.scale(.376127).add(zz.yy.scale(.376127)).add(zz.zz.scale(.376126)), uz.l1_1 = zz.y.scale(.977204), uz.l10 = zz.z.scale(.977204), uz.l11 = zz.x.scale(.977204), uz.l2_2 = zz.xy.scale(1.16538), uz.l2_1 = zz.yz.scale(1.16538), uz.l20 = zz.zz.scale(1.34567).subtract(zz.xx.scale(.672834)).subtract(zz.yy.scale(.672834)), uz.l21 = zz.zx.scale(1.16538), uz.l22 = zz.xx.scale(1.16538).subtract(zz.yy.scale(1.16538)), uz.l1_1.scaleInPlace(-1), uz.l11.scaleInPlace(-1), uz.l2_1.scaleInPlace(-1), uz.l21.scaleInPlace(-1), uz.scaleInPlace(Math.PI), uz
      }
    }
    class Hz {
      constructor() {
        this.x = Ez.n.Zero(), this.y = Ez.n.Zero(), this.z = Ez.n.Zero(), this.xx = Ez.n.Zero(), this.yy = Ez.n.Zero(), this.zz = Ez.n.Zero(), this.xy = Ez.n.Zero(), this.yz = Ez.n.Zero(), this.zx = Ez.n.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = tz.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(zz) {
        Ez.l.ER[0].P_(zz.r, zz.g, zz.b);
        const uz = Ez.l.ER[0];
        this.xx.addInPlace(uz), this.yy.addInPlace(uz), this.zz.addInPlace(uz)
      }
      scaleInPlace(zz) {
        this.x.scaleInPlace(zz), this.y.scaleInPlace(zz), this.z.scaleInPlace(zz), this.xx.scaleInPlace(zz), this.yy.scaleInPlace(zz), this.zz.scaleInPlace(zz), this.yz.scaleInPlace(zz), this.zx.scaleInPlace(zz), this.xy.scaleInPlace(zz)
      }
      updateFromHarmonics(zz) {
        return this._harmonics = zz, this.x.euz(zz.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.euz(zz.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.euz(zz.l10), this.z.scaleInPlace(1.02333), this.xx.euz(zz.l00), Ez.l.ER[0].euz(zz.l20).scaleInPlace(.247708), Ez.l.ER[1].euz(zz.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).Qbz(Ez.l.ER[0]).addInPlace(Ez.l.ER[1]), this.yy.euz(zz.l00), this.yy.scaleInPlace(.886277).Qbz(Ez.l.ER[0]).Qbz(Ez.l.ER[1]), this.zz.euz(zz.l00), Ez.l.ER[0].euz(zz.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Ez.l.ER[0]), this.yz.euz(zz.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.euz(zz.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.euz(zz.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(zz) {
        return (new Hz).updateFromHarmonics(zz)
      }
      static FromArray(zz) {
        const uz = new Hz;
        return Ez.n.FromArrayToRef(zz[0], 0, uz.x), Ez.n.FromArrayToRef(zz[1], 0, uz.y), Ez.n.FromArrayToRef(zz[2], 0, uz.z), Ez.n.FromArrayToRef(zz[3], 0, uz.xx), Ez.n.FromArrayToRef(zz[4], 0, uz.yy), Ez.n.FromArrayToRef(zz[5], 0, uz.zz), Ez.n.FromArrayToRef(zz[6], 0, uz.yz), Ez.n.FromArrayToRef(zz[7], 0, uz.zx), Ez.n.FromArrayToRef(zz[8], 0, uz.xy), uz
      }
    }
  },
  39614: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Gz,
      f: () => Vz
    });
    var Ez = bz(39170),
      nz = bz(36547),
      iz = bz(36519),
      lz = bz(39299),
      Mz = bz(39596),
      tz = bz(39618),
      Hz = bz(39296),
      Oz = bz(39474),
      pz = bz(39291);
    class dz {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new iz.n(0, 0, 0), this._diffPositionForCollisions = new iz.n(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Fz, Zz, Rz, Kz = bz(39061),
      wz = bz(39231),
      Xz = bz(39492),
      fz = bz(36715),
      sz = bz(36526),
      rz = bz(39386),
      oz = bz(38060),
      Nz = bz(39172),
      vz = bz(39079),
      xz = bz(36564);

    function Jz(zz, uz) {
      return zz - Math.floor(zz / uz) * uz
    }

    function Az(zz, uz, bz) {
      zz instanceof Float32Array ? iz.d.FromArrayToRef(zz, uz, bz) : bz.P_((0, wz.e)(zz[uz]), (0, wz.e)(zz[uz + 1]), (0, wz.e)(zz[uz + 2]), (0, wz.e)(zz[uz + 3]), (0, wz.e)(zz[uz + 4]), (0, wz.e)(zz[uz + 5]), (0, wz.e)(zz[uz + 6]), (0, wz.e)(zz[uz + 7]), (0, wz.e)(zz[uz + 8]), (0, wz.e)(zz[uz + 9]), (0, wz.e)(zz[uz + 10]), (0, wz.e)(zz[uz + 11]), (0, wz.e)(zz[uz + 12]), (0, wz.e)(zz[uz + 13]), (0, wz.e)(zz[uz + 14]), (0, wz.e)(zz[uz + 15]))
    }

    function Tz(zz, uz, bz, Ez, nz, Mz, tz, Hz, Oz) {
      const pz = bz.texture,
        dz = pz?.getInternalTexture(),
        Fz = dz?._bufferView;
      if (!(Fz instanceof Float32Array) && !(Fz instanceof Uint16Array)) return oz.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Zz = pz.getSize(),
        Rz = function(zz, uz) {
          const bz = zz.y - zz.x + 1,
            Ez = uz * zz.w / bz,
            nz = Ez < 1 ? 0 : 1,
            iz = bz - nz;
          let lz = Jz(Ez - Math.floor(Ez), 1) * iz;
          return lz = Jz(lz + zz.z, iz), Math.floor(lz) + zz.x + nz
        }(Ez, bz.time);
      if (!isFinite(Rz) || Rz < 0 || Rz >= Zz.height) return oz.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Kz = iz.l.ER[0],
        wz = iz.l.Matrix[0],
        Xz = iz.l.Matrix[1],
        fz = Rz * Zz.width * 4,
        sz = uz === lz.j.NormalKind ? iz.n.TransformNormalFromFloatsToRef : iz.n.TransformCoordinatesFromFloatsToRef;
      for (let iz = 0, lz = 0; iz < zz.length; iz += 3, lz += 4) {
        let uz, bz;
        for (wz.reset(), uz = 0; uz < 4 && uz < Oz; uz++) bz = Mz[lz + uz], bz > 0 && (Az(Fz, fz + 16 * Math.floor(nz[lz + uz]), Xz), Xz.scaleAndAddToRef(bz, wz));
        if (tz && Hz)
          for (uz = 0; uz < 4 && uz + 4 < Oz; uz++) bz = Hz[lz + uz], bz > 0 && (Az(Fz, fz + 16 * Math.floor(tz[lz + uz]), Xz), Xz.scaleAndAddToRef(bz, wz));
        sz(zz[iz], zz[iz + 1], zz[iz + 2], wz, Kz), Kz.toArray(zz, iz)
      }
      return !0
    }
    class Lz {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = iz.n.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Pz {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Lz, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new dz, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Gz = (() => {
        var zz;
        let uz, dz = tz.g,
          Fz = [];
        return zz = class extends dz {
          static get BILLBOARDMODE_NONE() {
            return tz.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return tz.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return tz.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return tz.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return tz.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return tz.g.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(zz) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = zz
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(zz) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = zz
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(zz) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = zz
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(zz) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = zz
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(zz) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = zz
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(zz) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== zz && (this._internalAbstractMeshDataInfo._morphTargetManager = zz, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(zz) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== zz && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = zz, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(zz) {
            return !!super._updateNonUniformScalingState(zz) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(zz) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = zz
          }
          set Ud(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(zz)
          }
          set onCollisionPositionChange(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(zz)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(zz) {
            if (this._internalAbstractMeshDataInfo._visibility === zz) return;
            const uz = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = zz, (1 === uz && 1 !== zz || 1 !== uz && 1 === zz) && this._markSubMeshesAsDirty((zz => {
              zz.markAsMiscDirty(), zz.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(zz) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = zz
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(zz) {
            this._internalAbstractMeshDataInfo._renderingGroupId = zz
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(zz) {
            if (!Number.isInteger(zz) || zz < 0 || zz > 255 || 0 !== zz && 0 === (63 & zz)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = zz
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(zz) {
            this._setMaterial(zz)
          }
          _setMaterial(zz) {
            this._internalAbstractMeshDataInfo._material !== zz && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = zz, zz && zz.meshMap && (zz.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.hN && (this.resetDrawCache(void 0, null == zz), this._unBindEffect()))
          }
          getMaterialForRenderPass(zz) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[zz]
          }
          setMaterialForRenderPass(zz, uz) {
            this.resetDrawCache(zz), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const bz = this._internalAbstractMeshDataInfo._materialForRenderPass[zz];
            bz?.meshMap?.[this.uniqueId] && (bz.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[zz] = uz, uz && uz.meshMap && (uz.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(zz) {
            this._internalAbstractMeshDataInfo._receiveShadows !== zz && (this._internalAbstractMeshDataInfo._receiveShadows = zz, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(zz) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== zz && (this._internalAbstractMeshDataInfo._hasVertexAlpha = zz, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(zz) {
            this._internalAbstractMeshDataInfo._useVertexColors !== zz && (this._internalAbstractMeshDataInfo._useVertexColors = zz, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(zz) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== zz && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = zz, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(zz) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== zz && (this._internalAbstractMeshDataInfo._numBoneInfluencers = zz, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(zz) {
            this._internalAbstractMeshDataInfo._applyFog !== zz && (this._internalAbstractMeshDataInfo._applyFog = zz, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(zz) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = zz
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(zz) {
            zz !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = zz, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(zz) ? -1 : zz
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = zz
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(zz) ? -1 : zz
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = zz
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(zz) {
            const uz = this._internalAbstractMeshDataInfo._skeleton;
            uz && uz.needInitialSkinMatrix && uz._unregisterMeshWithPoseMatrix(this), zz && zz.needInitialSkinMatrix && zz._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = zz, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(uz) {
            var bz;
            let Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(uz, Ez, !1), bz = this, this._internalAbstractMeshDataInfo = new Pz, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = zz.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new nz.b, this.onCollisionPositionChangeObservable = new nz.b, this.onMaterialChangedObservable = new nz.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.pK = zz.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = fz.c.Red(), this.outlineWidth = .02, this.overlayColor = fz.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.bR = !1, this.iR = !1, this.actionManager = null, this.ellipsoid = new iz.n(.5, 1, .5), this.ellipsoidOffset = new iz.n(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new fz.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                jT: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new nz.b, this._onCollisionPositionChange = function(zz, uz) {
                let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                uz.subtractToRef(bz._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, bz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), bz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > vz.b.CollisionsEpsilon && bz.position.addInPlace(bz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Ez && bz.onCollideObservable.notifyObservers(Ez), bz.onCollisionPositionChangeObservable.notifyObservers(bz.position)
              }, Ez = this.XT(), this.layerMask = Ez.defaultRenderableLayerMask, Ez.vbz(this), this._resyncLightSources(), this._uniformBuffer = new pz.b(this.XT().uR(), void 0, void 0, uz, !this.XT().uR().isWebGPU), this._buildUniformLayout(), Ez.performancePriority) {
              case 2:
                this.iR = !0;
              case 1:
                this.bR = !0, this.pK = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(zz) {
            const uz = this._uniformBuffer;
            uz.M_("world", zz), uz.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), uz.update()
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
          toString(zz) {
            let uz = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            uz += ", # of submeshes: " + (this.hN ? this.hN.length : 0);
            const bz = this._internalAbstractMeshDataInfo._skeleton;
            return bz && (uz += ", skeleton: " + bz.name), zz && (uz += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], uz += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.jT ? "YES" : "NO")), uz
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== tz.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(zz) {
            let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (uz || this.actionManager.isRecursive)) {
              if (!zz) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(zz)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(zz, !1) : null
          }
          _releaseRenderPassId(zz) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.hN) {
              for (const zz of this.hN) zz._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const zz of this.XT().lights) zz.isEnabled() && zz.canAffectMesh(this) && this._lightSources.push(zz);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(zz) {
            const uz = zz.isEnabled() && zz.canAffectMesh(this),
              bz = this._lightSources.indexOf(zz);
            let Ez = !1;
            if (-1 === bz) {
              if (!uz) return;
              this._lightSources.push(zz)
            } else {
              if (uz) return;
              Ez = !0, this._lightSources.splice(bz, 1)
            }
            this._markSubMeshesAsLightDirty(Ez)
          }
          _unBindEffect() {
            for (const zz of this.hN) zz.setEffect(null)
          }
          _removeLightSource(zz, uz) {
            const bz = this._lightSources.indexOf(zz); - 1 !== bz && (this._lightSources.splice(bz, 1), this._markSubMeshesAsLightDirty(uz))
          }
          _markSubMeshesAsDirty(zz) {
            if (this.hN)
              for (const uz of this.hN)
                for (let bz = 0; bz < uz._drawWrappers.length; ++bz) {
                  const Ez = uz._drawWrappers[bz];
                  Ez && Ez.defines && Ez.defines.markAllAsDirty && zz(Ez.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((uz => uz.markAsLightDirty(zz)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((zz => zz.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((zz => zz.markAsMiscDirty()))
          }
          zuz(zz) {
            return this._currentRenderId = Number.MAX_VALUE, super.zuz(zz), this._isDirty = !0, this
          }
          resetDrawCache(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.hN)
              for (const bz of this.hN) bz.resetDrawCache(zz, uz)
          }
          get isBlocked() {
            return !1
          }
          getLOD(zz) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          Nbz() {
            return null
          }
          getVerticesData(zz) {
            return null
          }
          setVerticesData(zz, uz, bz, Ez) {
            return this
          }
          updateVerticesData(zz, uz, bz, Ez) {
            return this
          }
          setIndices(zz, uz) {
            return this
          }
          isVerticesDataPresent(zz) {
            return !1
          }
          lG() {
            return this._masterMesh ? this._masterMesh.lG() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.lG()
          }
          setBoundingInfo(zz) {
            return this._boundingInfo = zz, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(zz, uz, bz) {
            return this._boundingInfo = new Oz.e(zz, uz, bz), this._boundingInfo
          }
          normalizeToUnitCube() {
            let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(zz, uz, bz)
          }
          get useBones() {
            return this.skeleton && this.XT().skeletonsEnabled && this.isVerticesDataPresent(lz.j.MatricesIndicesKind) && this.isVerticesDataPresent(lz.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(zz) {}
          _activate(zz, uz) {
            return this._renderId = zz, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === tz.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get qT() {
            return !1
          }
          get KEz() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(zz, uz, bz) {
            return this.position.addInPlace(this.calcMovePOV(zz, uz, bz)), this
          }
          calcMovePOV(zz, uz, bz) {
            const Ez = new iz.d;
            (this.rotationQuaternion ? this.rotationQuaternion : iz.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Ez);
            const nz = iz.n.Zero(),
              lz = this.definedFacingForward ? -1 : 1;
            return iz.n.TransformCoordinatesFromFloatsToRef(zz * lz, uz, bz * lz, Ez, nz), nz
          }
          rotatePOV(zz, uz, bz) {
            return this.rotation.addInPlace(this.calcRotatePOV(zz, uz, bz)), this
          }
          calcRotatePOV(zz, uz, bz) {
            const Ez = this.definedFacingForward ? 1 : -1;
            return new iz.n(zz * Ez, uz, bz * Ez)
          }
          _refreshBoundingInfo(zz, uz) {
            if (zz) {
              const bz = (0, Xz.c)(zz, 0, this.getTotalVertices(), uz);
              this._boundingInfo ? this._boundingInfo.reConstruct(bz.minimum, bz.maximum) : this._boundingInfo = new Oz.e(bz.minimum, bz.maximum)
            }
            if (this.hN)
              for (let bz = 0; bz < this.hN.length; bz++) this.hN[bz].refreshBoundingInfo(zz);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(zz) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(zz.minimum, zz.maximum) : this._boundingInfo = new Oz.e(zz.minimum, zz.maximum), this.hN)
              for (let uz = 0; uz < this.hN.length; uz++) this.hN[uz].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(zz, uz, bz, Ez, nz, Mz, tz) {
            ! function(zz, uz, bz, Ez, nz, Mz, tz) {
              const Hz = iz.l.ER[0],
                Oz = iz.l.Matrix[0],
                pz = iz.l.Matrix[1],
                dz = uz === lz.j.NormalKind ? iz.n.TransformNormalFromFloatsToRef : iz.n.TransformCoordinatesFromFloatsToRef;
              for (let lz = 0, Fz = 0; lz < zz.length; lz += 3, Fz += 4) {
                let uz, Zz;
                for (Oz.reset(), uz = 0; uz < 4; uz++) Zz = nz[Fz + uz], Zz > 0 && (iz.d.FromFloat32ArrayToRefScaled(bz, Math.floor(16 * Ez[Fz + uz]), Zz, pz), Oz.addToSelf(pz));
                if (Mz && tz)
                  for (uz = 0; uz < 4; uz++) Zz = tz[Fz + uz], Zz > 0 && (iz.d.FromFloat32ArrayToRefScaled(bz, Math.floor(16 * Mz[Fz + uz]), Zz, pz), Oz.addToSelf(pz));
                dz(zz[lz], zz[lz + 1], zz[lz + 2], Oz, Hz), Hz.toArray(zz, lz)
              }
            }(zz, uz, bz, Ez, nz, Mz, tz)
          }
          _getData(uz, bz) {
            let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lz.j.PositionKind;
            const nz = uz.cache,
              Mz = zz => {
                if (nz) {
                  const uz = nz._vertexData || (nz._vertexData = {});
                  return uz[zz] || this.copyVerticesData(zz, uz), uz[zz]
                }
                return this.getVerticesData(zz)
              };
            if (bz || (bz = Mz(Ez)), !bz) return null;
            nz ? (nz._outputData ? nz._outputData.set(bz) : nz._outputData = new Float32Array(bz), bz = nz._outputData) : (uz.applyMorph && this.morphTargetManager || uz.applySkeleton && this.skeleton || uz.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (bz = bz.slice()), uz.applyMorph && this.morphTargetManager && function(zz, uz, bz) {
              let Ez;
              switch (uz) {
                case lz.j.PositionKind:
                  Ez = zz => zz.getPositions();
                  break;
                case lz.j.NormalKind:
                  Ez = zz => zz.getNormals();
                  break;
                case lz.j.TangentKind:
                  Ez = zz => zz.getTangents();
                  break;
                case lz.j.UVKind:
                  Ez = zz => zz.getUVs();
                  break;
                case lz.j.UV2Kind:
                  Ez = zz => zz.getUV2s();
                  break;
                case lz.j.ColorKind:
                  Ez = zz => zz.getColors();
                  break;
                default:
                  return
              }
              for (let nz = 0; nz < zz.length; nz++) {
                let uz = zz[nz];
                for (let iz = 0; iz < bz.numTargets; iz++) {
                  const lz = bz.getTarget(iz),
                    Mz = lz.influence;
                  if (0 !== Mz) {
                    const bz = Ez(lz);
                    bz && (uz += (bz[nz] - zz[nz]) * Mz)
                  }
                }
                zz[nz] = uz
              }
            }(bz, Ez, this.morphTargetManager);
            const tz = this.bakedVertexAnimationManager;
            let Hz = !1;
            if (uz.applyBakedVertexAnimation && tz?.isEnabled) {
              const zz = Mz(lz.j.MatricesIndicesKind),
                nz = Mz(lz.j.MatricesWeightsKind);
              if (nz && zz) {
                const iz = this.numBoneInfluencers > 4,
                  Oz = iz ? Mz(lz.j.MatricesIndicesExtraKind) : null,
                  pz = iz ? Mz(lz.j.MatricesWeightsExtraKind) : null;
                Hz = Tz(bz, Ez, tz, uz.bakedVertexAnimationSettings ?? tz.animationParameters, zz, nz, Oz, pz, this.numBoneInfluencers)
              }
            }
            if (!Hz && uz.applySkeleton && this.skeleton) {
              const uz = Mz(lz.j.MatricesIndicesKind),
                nz = Mz(lz.j.MatricesWeightsKind);
              if (nz && uz) {
                const iz = this.numBoneInfluencers > 4,
                  tz = iz ? Mz(lz.j.MatricesIndicesExtraKind) : null,
                  Hz = iz ? Mz(lz.j.MatricesWeightsExtraKind) : null,
                  Oz = this.skeleton.getTransformMatrices(this);
                zz._ApplySkeleton(bz, Ez, Oz, uz, nz, tz, Hz)
              }
            }
            if (!1 !== uz.updatePositionsArray && Ez === lz.j.PositionKind) {
              const zz = this._internalAbstractMeshDataInfo._positions || [],
                uz = zz.length;
              if (zz.length = bz.length / 3, uz < zz.length)
                for (let bz = uz; bz < zz.length; bz++) zz[bz] = new iz.n;
              for (let Ez = 0, nz = 0; Ez < zz.length; Ez++, nz += 3) zz[Ez].P_(bz[nz], bz[nz + 1], bz[nz + 2]);
              this._internalAbstractMeshDataInfo._positions = zz
            }
            return bz
          }
          getNormalsData() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: zz,
              applyMorph: uz,
              updatePositionsArray: !1
            }, null, lz.j.NormalKind)
          }
          Iy() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: zz,
              applyMorph: uz,
              updatePositionsArray: !1
            }, bz, lz.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Oz.e(iz.n.Zero(), iz.n.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(zz) {
            if (!this.hN) return this;
            const uz = this.hN.length;
            for (let bz = 0; bz < uz; bz++) {
              const Ez = this.hN[bz];
              (uz > 1 || !Ez.IsGlobal) && Ez.updateBoundingInfo(zz)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.iR || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(zz) {
            return this.lG().isInFrustum(zz, this.cullingStrategy)
          }
          isCompletelyInFrustum(zz) {
            return this.lG().isCompletelyInFrustum(zz)
          }
          OEz(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = arguments.length > 2 ? arguments[2] : void 0;
            const Ez = this.lG(),
              nz = zz.lG();
            if (Ez.intersects(nz, uz)) return !0;
            if (bz)
              for (const iz of this.getChildMeshes())
                if (iz.OEz(zz, uz, !0)) return !0;
            return !1
          }
          intersectsPoint(zz) {
            return this.lG().intersectsPoint(zz)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(zz) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = zz
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(zz) {
            let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const bz = this.XT().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = bz.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, bz.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, zz, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, uz), this
          }
          _collideForSubMesh(zz, uz, bz) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!zz._lastColliderWorldVertices || !zz._lastColliderTransformMatrix.equals(uz)) {
              zz._lastColliderTransformMatrix = uz.clone(), zz._lastColliderWorldVertices = [], zz._trianglePlanes = [];
              const bz = zz.verticesStart,
                Ez = zz.verticesStart + zz.verticesCount;
              for (let nz = bz; nz < Ez; nz++) zz._lastColliderWorldVertices.push(iz.n.TransformCoordinates(this._positions[nz], uz))
            }
            return bz._collide(zz._trianglePlanes, zz._lastColliderWorldVertices, this.Nbz(), zz.indexStart, zz.indexStart + zz.indexCount, zz.verticesStart, !!zz.lR(), this, this._shouldConvertRHS(), 7 === zz.lR()?.fillMode), this
          }
          _processCollisionsForSubMeshes(zz, uz) {
            const bz = this._scene.getCollidingSubMeshCandidates(this, zz),
              Ez = bz.length;
            for (let nz = 0; nz < Ez; nz++) {
              const iz = bz.data[nz];
              Ez > 1 && !iz._checkCollision(zz) || this._collideForSubMesh(iz, uz, zz)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(zz) {
            if (!this.lG()._checkCollision(zz)) return this;
            const uz = iz.l.Matrix[0],
              bz = iz.l.Matrix[1];
            return iz.d.ScalingToRef(1 / zz._radius.x, 1 / zz._radius.y, 1 / zz._radius.z, uz), this.worldMatrixFromCache.multiplyToRef(uz, bz), this._processCollisionsForSubMeshes(zz, bz), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(zz, uz, bz) {
            let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nz = arguments.length > 4 ? arguments[4] : void 0,
              lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Mz = new Hz.c,
              tz = this.getClassName(),
              Oz = "InstancedLinesMesh" === tz || "LinesMesh" === tz || "GreasedLineMesh" === tz ? this.intersectionThreshold : 0,
              pz = this.lG();
            if (!this.hN) return Mz;
            if (!lz && (!zz.intersectsSphere(pz.Ibz, Oz) || !zz.intersectsBox(pz.boundingBox, Oz))) return Mz;
            if (Ez) return Mz.hit = !lz, Mz.pickedMesh = lz ? null : this, Mz.distance = lz ? 0 : iz.n.Distance(zz.origin, pz.Ibz.center), Mz.subMeshId = 0, Mz;
            if (!this._generatePointsArray()) return Mz;
            let dz = null;
            const Fz = this._scene.getIntersectingSubMeshCandidates(this, zz),
              Zz = Fz.length;
            let Rz = !1;
            for (let iz = 0; iz < Zz; iz++) {
              const zz = Fz.data[iz].lR();
              if (zz && (7 == zz.fillMode || 0 == zz.fillMode || 1 == zz.fillMode || 2 == zz.fillMode || 4 == zz.fillMode)) {
                Rz = !0;
                break
              }
            }
            if (!Rz) return Mz.hit = !0, Mz.pickedMesh = this, Mz.distance = iz.n.Distance(zz.origin, pz.Ibz.center), Mz.subMeshId = -1, Mz;
            for (let iz = 0; iz < Zz; iz++) {
              const Ez = Fz.data[iz];
              if (Zz > 1 && !lz && !Ez.canIntersects(zz)) continue;
              const nz = Ez.intersects(zz, this._positions, this.Nbz(), uz, bz);
              if (nz && (uz || !dz || nz.distance < dz.distance) && (dz = nz, dz.subMeshId = Ez._id, dz._internalSubMeshId = iz, uz)) break
            }
            if (dz) {
              const uz = nz ?? this.getWorldMatrix(),
                bz = iz.l.ER[0],
                Ez = iz.l.ER[1];
              iz.n.TransformCoordinatesToRef(zz.origin, uz, bz), zz.direction.scaleToRef(dz.distance, Ez);
              const lz = iz.n.TransformNormal(Ez, uz).addInPlace(bz);
              return Mz.hit = !0, Mz.distance = iz.n.Distance(bz, lz), Mz.pickedPoint = lz, Mz.pickedMesh = this, Mz.bu = dz.bu || 0, Mz.bv = dz.bv || 0, Mz.subMeshFaceId = dz.faceId, Mz.faceId = dz.faceId + Fz.data[dz._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Mz.subMeshId = dz.subMeshId, Mz
            }
            return Mz
          }
          clone(zz, uz, bz) {
            return null
          }
          releaseSubMeshes() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.hN)
              for (; this.hN.length;) this.hN[0].dispose(zz);
            else this.hN = [];
            return this
          }
          dispose(zz) {
            let uz, bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Ez = this.XT();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Ez.freeActiveMeshes(), Ez.freeRenderingGroups(), Ez.renderingManager.maintainStateBetweenFrames && Ez.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((zz => zz !== this && zz.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), uz = 0; uz < this._intersectionsInProgress.length; uz++) {
              const zz = this._intersectionsInProgress[uz],
                bz = zz._intersectionsInProgress.indexOf(this);
              zz._intersectionsInProgress.splice(bz, 1)
            }
            this._intersectionsInProgress.length = 0;
            const nz = Ez.lights;
            for (const lz of nz) {
              let zz = lz.includedOnlyMeshes.indexOf(this); - 1 !== zz && lz.includedOnlyMeshes.splice(zz, 1), zz = lz.excludedMeshes.indexOf(this), -1 !== zz && lz.excludedMeshes.splice(zz, 1);
              const uz = lz.getShadowGenerators();
              if (uz) {
                const bz = uz.values();
                for (let uz = bz.next(); !0 !== uz.done; uz = bz.next()) {
                  const bz = uz.value.getShadowMap();
                  bz && bz.renderList && (zz = bz.renderList.indexOf(this), -1 !== zz && bz.renderList.splice(zz, 1))
                }
              }
            }
            this.releaseSubMeshes(Ez._isDisposing);
            const iz = Ez.uR();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, iz.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), iz.wipeCaches(), Ez.lL(this), this._parentContainer) {
              const zz = this._parentContainer.meshes.indexOf(this);
              zz > -1 && this._parentContainer.meshes.splice(zz, 1), this._parentContainer = null
            }
            if (bz && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !zz)
              for (uz = 0; uz < Ez.yN.length; uz++) Ez.yN[uz].emitter === this && (Ez.yN[uz].dispose(), uz--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(zz, bz)
          }
          _initFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            zz.facetNormals || (zz.facetNormals = []), zz.facetPositions || (zz.facetPositions = []), zz.facetPartitioning || (zz.facetPartitioning = new Array), zz.facetNb = this.Nbz().length / 3 | 0, zz.partitioningSubdivisions = zz.partitioningSubdivisions ? zz.partitioningSubdivisions : 10, zz.partitioningBBoxRatio = zz.partitioningBBoxRatio ? zz.partitioningBBoxRatio : 1.01;
            for (let uz = 0; uz < zz.facetNb; uz++) zz.facetNormals[uz] = iz.n.Zero(), zz.facetPositions[uz] = iz.n.Zero();
            return zz.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            zz.facetDataEnabled || this._initFacetData();
            const uz = this.getVerticesData(lz.j.PositionKind),
              bz = this.Nbz(),
              Ez = this.getVerticesData(lz.j.NormalKind)?.slice(),
              nz = this.lG();
            if (zz.facetDepthSort && !zz.facetDepthSortEnabled) {
              if (zz.facetDepthSortEnabled = !0, bz instanceof Uint16Array) zz.depthSortedIndices = new Uint16Array(bz);
              else if (bz instanceof Uint32Array) zz.depthSortedIndices = new Uint32Array(bz);
              else {
                let uz = !1;
                for (let zz = 0; zz < bz.length; zz++)
                  if (bz[zz] > 65535) {
                    uz = !0;
                    break
                  } zz.depthSortedIndices = uz ? new Uint32Array(bz) : new Uint16Array(bz)
              }
              if (zz.facetDepthSortFunction = function(zz, uz) {
                  return uz.sqDistance - zz.sqDistance
                }, !zz.facetDepthSortFrom) {
                const uz = this.XT().activeCamera;
                zz.facetDepthSortFrom = uz ? uz.position : iz.n.Zero()
              }
              zz.depthSortedFacets = [];
              for (let uz = 0; uz < zz.facetNb; uz++) {
                const bz = {
                  ind: 3 * uz,
                  sqDistance: 0
                };
                zz.depthSortedFacets.push(bz)
              }
              zz.invertedMatrix = iz.d.Identity(), zz.facetDepthSortOrigin = iz.n.Zero()
            }
            zz.bbSize.x = nz.maximum.x - nz.minimum.x > sz.b ? nz.maximum.x - nz.minimum.x : sz.b, zz.bbSize.y = nz.maximum.y - nz.minimum.y > sz.b ? nz.maximum.y - nz.minimum.y : sz.b, zz.bbSize.z = nz.maximum.z - nz.minimum.z > sz.b ? nz.maximum.z - nz.minimum.z : sz.b;
            let tz = zz.bbSize.x > zz.bbSize.y ? zz.bbSize.x : zz.bbSize.y;
            if (tz = tz > zz.bbSize.z ? tz : zz.bbSize.z, zz.subDiv.max = zz.partitioningSubdivisions, zz.subDiv.X = Math.floor(zz.subDiv.max * zz.bbSize.x / tz), zz.subDiv.Y = Math.floor(zz.subDiv.max * zz.bbSize.y / tz), zz.subDiv.Z = Math.floor(zz.subDiv.max * zz.bbSize.z / tz), zz.subDiv.X = zz.subDiv.X < 1 ? 1 : zz.subDiv.X, zz.subDiv.Y = zz.subDiv.Y < 1 ? 1 : zz.subDiv.Y, zz.subDiv.Z = zz.subDiv.Z < 1 ? 1 : zz.subDiv.Z, zz.facetParameters.facetNormals = this.getFacetLocalNormals(), zz.facetParameters.facetPositions = this.getFacetLocalPositions(), zz.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), zz.facetParameters.bInfo = nz, zz.facetParameters.bbSize = zz.bbSize, zz.facetParameters.subDiv = zz.subDiv, zz.facetParameters.ratio = this.partitioningBBoxRatio, zz.facetParameters.depthSort = zz.facetDepthSort, zz.facetDepthSort && zz.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(zz.invertedMatrix), iz.n.TransformCoordinatesToRef(zz.facetDepthSortFrom, zz.invertedMatrix, zz.facetDepthSortOrigin), zz.facetParameters.distanceTo = zz.facetDepthSortOrigin), zz.facetParameters.depthSortedFacets = zz.depthSortedFacets, Ez && Mz.b.ComputeNormals(uz, bz, Ez, zz.facetParameters), zz.facetDepthSort && zz.facetDepthSortEnabled) {
              zz.depthSortedFacets.sort(zz.facetDepthSortFunction);
              const uz = zz.depthSortedIndices.length / 3 | 0;
              for (let Ez = 0; Ez < uz; Ez++) {
                const uz = zz.depthSortedFacets[Ez].ind;
                zz.depthSortedIndices[3 * Ez] = bz[uz], zz.depthSortedIndices[3 * Ez + 1] = bz[uz + 1], zz.depthSortedIndices[3 * Ez + 2] = bz[uz + 2]
              }
              this.updateIndices(zz.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            return zz.facetNormals || this.updateFacetData(), zz.facetNormals
          }
          getFacetLocalPositions() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            return zz.facetPositions || this.updateFacetData(), zz.facetPositions
          }
          getFacetLocalPartitioning() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            return zz.facetPartitioning || this.updateFacetData(), zz.facetPartitioning
          }
          getFacetPosition(zz) {
            const uz = iz.n.Zero();
            return this.getFacetPositionToRef(zz, uz), uz
          }
          getFacetPositionToRef(zz, uz) {
            const bz = this.getFacetLocalPositions()[zz],
              Ez = this.getWorldMatrix();
            return iz.n.TransformCoordinatesToRef(bz, Ez, uz), this
          }
          getFacetNormal(zz) {
            const uz = iz.n.Zero();
            return this.getFacetNormalToRef(zz, uz), uz
          }
          getFacetNormalToRef(zz, uz) {
            const bz = this.getFacetLocalNormals()[zz];
            return iz.n.TransformNormalToRef(bz, this.getWorldMatrix(), uz), this
          }
          getFacetsAtLocalCoordinates(zz, uz, bz) {
            const Ez = this.lG(),
              nz = this._internalAbstractMeshDataInfo._facetData,
              iz = Math.floor((zz - Ez.minimum.x * nz.partitioningBBoxRatio) * nz.subDiv.X * nz.partitioningBBoxRatio / nz.bbSize.x),
              lz = Math.floor((uz - Ez.minimum.y * nz.partitioningBBoxRatio) * nz.subDiv.Y * nz.partitioningBBoxRatio / nz.bbSize.y),
              Mz = Math.floor((bz - Ez.minimum.z * nz.partitioningBBoxRatio) * nz.subDiv.Z * nz.partitioningBBoxRatio / nz.bbSize.z);
            return iz < 0 || iz > nz.subDiv.max || lz < 0 || lz > nz.subDiv.max || Mz < 0 || Mz > nz.subDiv.max ? null : nz.facetPartitioning[iz + nz.subDiv.max * lz + nz.subDiv.max * nz.subDiv.max * Mz]
          }
          getClosestFacetAtCoordinates(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Mz = this.getWorldMatrix(),
              tz = iz.l.Matrix[5];
            Mz.invertToRef(tz);
            const Hz = iz.l.ER[8];
            iz.n.TransformCoordinatesFromFloatsToRef(zz, uz, bz, tz, Hz);
            const Oz = this.getClosestFacetAtLocalCoordinates(Hz.x, Hz.y, Hz.z, Ez, nz, lz);
            return Ez && iz.n.TransformCoordinatesFromFloatsToRef(Ez.x, Ez.y, Ez.z, Mz, Ez), Oz
          }
          getClosestFacetAtLocalCoordinates(zz, uz, bz, Ez) {
            let nz, iz, lz, Mz, tz, Hz, Oz, pz, dz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Fz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Zz = null;
            const Rz = this.getFacetLocalPositions(),
              Kz = this.getFacetLocalNormals(),
              wz = this.getFacetsAtLocalCoordinates(zz, uz, bz);
            if (!wz) return null;
            let Xz, fz, sz, rz, oz = Number.MAX_VALUE;
            for (let Nz = 0; Nz < wz.length; Nz++) fz = wz[Nz], sz = Kz[fz], rz = Rz[fz], Mz = (zz - rz.x) * sz.x + (uz - rz.y) * sz.y + (bz - rz.z) * sz.z, (!dz || dz && Fz && Mz >= 0 || dz && !Fz && Mz <= 0) && (Mz = sz.x * rz.x + sz.y * rz.y + sz.z * rz.z, tz = -(sz.x * zz + sz.y * uz + sz.z * bz - Mz) / (sz.x * sz.x + sz.y * sz.y + sz.z * sz.z), Hz = zz + sz.x * tz, Oz = uz + sz.y * tz, pz = bz + sz.z * tz, nz = Hz - zz, iz = Oz - uz, lz = pz - bz, Xz = nz * nz + iz * iz + lz * lz, Xz < oz && (oz = Xz, Zz = fz, Ez && (Ez.x = Hz, Ez.y = Oz, Ez.z = pz)));
            return Zz
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            return zz.facetDataEnabled && (zz.facetDataEnabled = !1, zz.facetPositions = [], zz.facetNormals = [], zz.facetPartitioning = new Array, zz.facetParameters = {}, zz.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(zz, uz) {
            return this
          }
          createNormals(zz) {
            const uz = this.getVerticesData(lz.j.PositionKind),
              bz = this.Nbz();
            let Ez;
            return Ez = this.isVerticesDataPresent(lz.j.NormalKind) ? this.getVerticesData(lz.j.NormalKind) : [], Mz.b.ComputeNormals(uz, bz, Ez, {
              useRightHandedSystem: this.XT().useRightHandedSystem
            }), this.setVerticesData(lz.j.NormalKind, Ez, zz), this
          }
          async optimizeIndicesAsync() {
            const zz = this.Nbz();
            if (!zz) return this;
            const {
              OptimizeIndices: uz
            } = await bz.e(341).then((() => bz(41770)));
            return uz(zz), this.setIndices(zz, this.getTotalVertices()), this
          }
          alignWithNormal(zz, uz) {
            uz || (uz = rz.b.Y);
            const bz = iz.l.ER[0],
              Ez = iz.l.ER[1];
            return iz.n.CrossToRef(uz, zz, Ez), iz.n.CrossToRef(zz, Ez, bz), this.rotationQuaternion ? iz.h.RotationQuaternionFromAxisToRef(bz, zz, Ez, this.rotationQuaternion) : iz.n.RotationFromAxisToRef(bz, zz, Ez, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Kz.l)("EdgesRenderer")
          }
          enableEdgesRendering(zz, uz, bz) {
            throw (0, Kz.l)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.yN.filter((zz => zz.emitter === this))
          }
        }, (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(dz[Symbol.metadata] ?? null) : void 0;
          uz = [Nz.l.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Ez.h)(zz, null, uz, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: zz => "_ApplySkeleton" in zz,
              get: zz => zz._ApplySkeleton
            },
            metadata: bz
          }, null, Fz), bz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          })
        })(), zz.OCCLUSION_TYPE_NONE = ((0, Ez.j)(zz, Fz), 0), zz.OCCLUSION_TYPE_OPTIMISTIC = 1, zz.OCCLUSION_TYPE_STRICT = 2, zz.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, zz.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, zz.CULLINGSTRATEGY_STANDARD = 0, zz.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, zz.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, zz.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, zz.DefaultIsPickable = !0, zz
      })(),
      az = !1;

    function Vz() {
      az || (az = !0, (0, xz.c)("BABYLON.AbstractMesh", Gz))
    }(Fz = Gz.prototype).createOrUpdateSubmeshesOctree ?? (Fz.createOrUpdateSubmeshesOctree = (0, Kz.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Zz = Gz.prototype).getPhysicsImpostor ?? (Zz.getPhysicsImpostor = (0, Kz.h)("AbstractMesh", "getPhysicsImpostor")), (Rz = Gz.prototype).setPhysicsLinkWith ?? (Rz.setPhysicsLinkWith = (0, Kz.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Gz.prototype, "occlusionRetryCount") || Object.defineProperty(Gz.prototype, "occlusionRetryCount", (0, Kz.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Gz.prototype, "occlusionType") || Object.defineProperty(Gz.prototype, "occlusionType", (0, Kz.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Gz.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Gz.prototype, "occlusionQueryAlgorithmType", (0, Kz.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Gz.prototype, "isOccluded") || Object.defineProperty(Gz.prototype, "isOccluded", (0, Kz.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Gz.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Gz.prototype, "isOcclusionQueryInProgress", (0, Kz.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Gz.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Gz.prototype, "forceRenderingWhenOccluded", (0, Kz.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Gz.prototype, "occlusionForRenderPassId") || Object.defineProperty(Gz.prototype, "occlusionForRenderPassId", (0, Kz.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Gz.prototype, "decalMap") || Object.defineProperty(Gz.prototype, "decalMap", (0, Kz.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Gz.prototype, "RP") || Object.defineProperty(Gz.prototype, "RP", (0, Kz.f)("AbstractMesh", "RP")), Object.getOwnPropertyDescriptor(Gz.prototype, "physicsImpostor") || Object.defineProperty(Gz.prototype, "physicsImpostor", (0, Kz.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Gz.prototype, "showBoundingBox") || Object.defineProperty(Gz.prototype, "showBoundingBox", (0, Kz.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Gz.prototype, "edgesRenderer") || Object.defineProperty(Gz.prototype, "edgesRenderer", (0, Kz.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Gz.prototype, "renderOutline") || Object.defineProperty(Gz.prototype, "renderOutline", (0, Kz.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Gz.prototype, "renderOverlay") || Object.defineProperty(Gz.prototype, "renderOverlay", (0, Kz.f)("AbstractMesh", "renderOverlay"))
  },
  39605: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => wz
    });
    var Ez = bz(36519),
      nz = bz(36715),
      iz = bz(39596),
      lz = bz(39299),
      Mz = bz(39459),
      tz = bz(39607),
      Hz = bz(39474),
      Oz = bz(39258),
      pz = bz(38060),
      dz = bz(39189),
      Fz = bz(39492),
      Zz = bz(36543),
      Rz = bz(39609),
      Kz = bz(39226);
    class wz {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(zz) {
        this._boundingBias ? this._boundingBias.euz(zz) : this._boundingBias = zz.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(zz) {
        const uz = new wz(wz.RandomId(), zz.XT());
        return uz.applyToMesh(zz), uz
      }
      get meshes() {
        return this._meshes
      }
      constructor(zz, uz, bz) {
        let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Ez.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Ez.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = uz || Zz.d.LastCreatedScene, this._scene && (this.id = zz, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.uR(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = nz, null !== lz && (this._totalVertices = lz), bz ? this.setAllVerticesData(bz, nz) : null === lz && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), iz && (this.applyToMesh(iz), iz.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      XT() {
        return this._scene
      }
      uR() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let zz = 0; zz < this._meshes.length; zz++)
          if (!this._meshes[zz].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const zz = new Set;
        for (const uz in this._vertexBuffers) zz.add(this._vertexBuffers[uz].getWrapperBuffer());
        zz.forEach((zz => {
          zz._rebuild()
        }))
      }
      setAllVerticesData(zz, uz) {
        zz.applyToGeometry(this, uz), this._notifyUpdate()
      }
      setVerticesData(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        bz && Array.isArray(uz) && (uz = new Float32Array(uz));
        const nz = new lz.j(this._engine, uz, zz, {
          updatable: bz,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Ez,
          label: "Geometry_" + this.id + "_" + zz
        });
        this.setVerticesBuffer(nz)
      }
      removeVerticesData(zz) {
        this._vertexBuffers[zz] && (this._vertexBuffers[zz].dispose(), delete this._vertexBuffers[zz]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const nz = zz.getKind();
        this._vertexBuffers[nz] && bz && this._vertexBuffers[nz].dispose(), zz._buffer && zz._ownsBuffer && zz._buffer._increaseReferences(), this._vertexBuffers[nz] = zz;
        const iz = this._meshes,
          Mz = iz.length;
        if (nz === lz.j.PositionKind) {
          this._totalVertices = uz ?? zz._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : zz.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const bz = this._extend && this._extend.minimum || new Ez.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            nz = this._extend && this._extend.maximum || new Ez.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let zz = 0; zz < Mz; zz++) {
            const uz = iz[zz];
            uz.buildBoundingInfo(bz, nz), uz._createGlobalSubMesh(uz.isUnIndexed), uz.computeWorldMatrix(!0), uz.synchronizeInstances()
          }
        }
        this._notifyUpdate(nz)
      }
      updateVerticesDataDirectly(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nz = this.getVertexBuffer(zz);
        nz && (nz.updateDirectly(uz, bz, Ez), this._notifyUpdate(zz))
      }
      updateVerticesData(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this.getVertexBuffer(zz);
        Ez && (Ez.update(uz), zz === lz.j.PositionKind && this._updateBoundingInfo(bz, uz), this._notifyUpdate(zz))
      }
      _updateBoundingInfo(zz, uz) {
        if (zz && this._updateExtend(uz), this._resetPointsArrayCache(), zz) {
          const zz = this._meshes;
          for (const uz of zz) {
            uz.hasBoundingInfo ? uz.lG().reConstruct(this._extend.minimum, this._extend.maximum) : uz.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const zz = uz.hN;
            for (const uz of zz) uz.refreshBoundingInfo()
          }
        }
      }
      _bind(zz, uz, bz, Ez) {
        if (!zz) return;
        void 0 === uz && (uz = this._indexBuffer);
        const nz = this.getVertexBuffers();
        if (!nz) return;
        if (uz != this._indexBuffer || !this._vertexArrayObjects && !Ez) return void this._engine.bindBuffers(nz, uz, zz, bz);
        const iz = Ez || this._vertexArrayObjects,
          lz = this._engine;
        iz[zz.key] || (iz[zz.key] = lz.recordVertexArrayObject(nz, uz, zz, bz)), lz.bindVertexArrayObject(iz[zz.key], uz)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(zz, uz, bz) {
        const Ez = this.getVertexBuffer(zz);
        return Ez ? Ez.getFloatData(this._totalVertices, bz || uz && 1 !== this._meshes.length) : null
      }
      copyVerticesData(zz, uz) {
        const bz = this.getVertexBuffer(zz);
        if (!bz) return;
        uz[zz] || (uz[zz] = new Float32Array(this._totalVertices * bz.getSize()));
        const Ez = bz.getData();
        Ez && (0, Kz.h)(Ez, bz.getSize(), bz.type, bz.byteOffset, bz.byteStride, bz.normalized, this._totalVertices, uz[zz])
      }
      isVertexBufferUpdatable(zz) {
        const uz = this._vertexBuffers[zz];
        return !!uz && uz.isUpdatable()
      }
      getVertexBuffer(zz) {
        return this.isReady() ? this._vertexBuffers[zz] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(zz) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[zz] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(zz)
      }
      getVerticesDataKinds() {
        const zz = [];
        let uz;
        if (!this._vertexBuffers && this._delayInfo)
          for (uz in this._delayInfo) zz.push(uz);
        else
          for (uz in this._vertexBuffers) zz.push(uz);
        return zz
      }
      updateIndices(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Ez = zz.length !== this._indices.length;
            if (bz || (this._indices = zz.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, zz, uz), Ez)
              for (const zz of this._meshes) zz._createGlobalSubMesh(!0)
          } else this.setIndices(zz, null, !0)
      }
      setIndexBuffer(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = zz, this._totalVertices = uz, this._totalIndices = bz, zz.is32Bits = null === Ez ? uz > 65535 : Ez;
        for (const nz of this._meshes) nz._createGlobalSubMesh(!0), nz.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = zz, this._indexBufferIsUpdatable = bz, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, bz, "Geometry_" + this.id + "_IndexBuffer")), void 0 != uz && (this._totalVertices = uz);
        for (const nz of this._meshes) nz._createGlobalSubMesh(!Ez), nz.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Nbz(zz, uz) {
        if (!this.isReady()) return null;
        const bz = this._indices;
        return uz || zz && 1 !== this._meshes.length ? bz.slice() : bz
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        zz && this._vertexArrayObjects && this._vertexArrayObjects[zz.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[zz.key]), delete this._vertexArrayObjects[zz.key])
      }
      releaseForMesh(zz, uz) {
        const bz = this._meshes,
          Ez = bz.indexOf(zz); - 1 !== Ez && (bz.splice(Ez, 1), this._vertexArrayObjects && zz._invalidateInstanceVertexArrayObject(), zz._geometry = null, 0 === bz.length && uz && this.dispose())
      }
      applyToMesh(zz) {
        if (zz._geometry === this) return;
        const uz = zz._geometry;
        uz && uz.releaseForMesh(zz), this._vertexArrayObjects && zz._invalidateInstanceVertexArrayObject();
        const bz = this._meshes;
        zz._geometry = this, zz._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), bz.push(zz), this.isReady() ? this._applyToMesh(zz) : this._boundingInfo && zz.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!zz && (zz = this.getVerticesData(lz.j.PositionKind), !zz)) return;
          this._extend = (0, Fz.c)(zz, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(zz) {
        for (const uz in this._vertexBuffers) {
          const bz = this._vertexBuffers[uz];
          bz._buffer.getBuffer() || bz.create(), uz === lz.j.PositionKind && (this._extend || this._updateExtend(), zz.buildBoundingInfo(this._extend.minimum, this._extend.maximum), zz._createGlobalSubMesh(zz.isUnIndexed), zz._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), zz._syncGeometryWithMorphTargetManager(), zz.synchronizeInstances()
      }
      _notifyUpdate(zz) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, zz), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const uz of this._meshes) uz._markSubMeshesAsAttributesDirty()
      }
      load(zz, uz) {
        2 !== this.delayLoadState && (this.isReady() ? uz && uz() : (this.delayLoadState = 2, this._queueLoad(zz, uz)))
      }
      _queueLoad(zz, uz) {
        this.delayLoadingFile && (zz.addPendingData(this), (async () => {
          try {
            const bz = await zz._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void zz.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(bz), this), this.delayLoadState = 1, this._delayInfo = [], zz.removePendingData(this);
            const Ez = this._meshes,
              nz = Ez.length;
            for (let zz = 0; zz < nz; zz++) this._applyToMesh(Ez[zz]);
            uz && uz()
          } catch (bz) {
            zz.removePendingData(this), zz.Uuz || pz.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${bz}`)
          }
        })())
      }
      toLeftHanded() {
        const zz = this.Nbz(!1);
        if (null != zz && zz.length > 0) {
          for (let uz = 0; uz < zz.length; uz += 3) {
            const bz = zz[uz + 0];
            zz[uz + 0] = zz[uz + 2], zz[uz + 2] = bz
          }
          this.setIndices(zz)
        }
        const uz = this.getVerticesData(lz.j.PositionKind, !1);
        if (null != uz && uz.length > 0) {
          for (let zz = 0; zz < uz.length; zz += 3) uz[zz + 2] = -uz[zz + 2];
          this.setVerticesData(lz.j.PositionKind, uz, !1)
        }
        const bz = this.getVerticesData(lz.j.NormalKind, !1);
        if (null != bz && bz.length > 0) {
          for (let zz = 0; zz < bz.length; zz += 3) bz[zz + 2] = -bz[zz + 2];
          this.setVerticesData(lz.j.NormalKind, bz, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const zz = this.getVerticesData(lz.j.PositionKind);
        if (!zz || 0 === zz.length) return !1;
        for (let uz = 3 * this._positionsCache.length, bz = this._positionsCache.length; uz < zz.length; uz += 3, ++bz) this._positionsCache[bz] = Ez.n.FromArray(zz, uz);
        for (let uz = 0, bz = 0; uz < zz.length; uz += 3, ++bz) this._positionsCache[bz].set(zz[0 + uz], zz[1 + uz], zz[2 + uz]);
        return this._positionsCache.length = zz.length / 3, this._positions = this._positionsCache, !0
      }
      Uuz() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const bz in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[bz]);
          this._vertexArrayObjects = {};
          const zz = this._meshes,
            uz = zz.length;
          for (let bz = 0; bz < uz; bz++) zz[bz]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const zz = this._meshes,
          uz = zz.length;
        let bz;
        for (bz = 0; bz < uz; bz++) this.releaseForMesh(zz[bz]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Ez in this._vertexBuffers) this._vertexBuffers[Ez].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const zz = this._parentContainer.geometries.indexOf(this);
          zz > -1 && this._parentContainer.geometries.splice(zz, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(zz) {
        const uz = new wz(zz, this._scene),
          bz = this.Nbz(void 0, !0);
        bz && uz.setIndices(bz);
        let Ez, nz = !1;
        for (Ez in this._vertexBuffers) {
          const zz = this.getVertexBuffer(Ez),
            bz = zz.getData();
          if (!bz) continue;
          const iz = zz.isUpdatable(),
            Mz = zz.getSize(),
            {
              type: tz,
              byteOffset: Hz,
              byteStride: Oz,
              normalized: pz
            } = zz;
          nz = nz || iz;
          let dz = this._totalVertices;
          if (zz.getIsInstanced()) {
            let zz;
            zz = bz instanceof Array ? 4 * bz.length : bz.byteLength, dz = zz / Oz
          }
          const Fz = (0, Kz.u)(bz, Mz, tz, Hz, Oz, dz, !0),
            Zz = new lz.j(this._engine, Fz, Ez, {
              updatable: iz,
              useBytes: !1,
              stride: Mz,
              size: Mz,
              offset: 0,
              type: tz,
              normalized: pz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            });
          uz.setVerticesBuffer(Zz, dz)
        }
        for (Ez in uz._updatable = nz, uz.delayLoadState = this.delayLoadState, uz.delayLoadingFile = this.delayLoadingFile, uz._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) uz._delayInfo = uz._delayInfo || [], uz._delayInfo.push(Ez);
        return uz._boundingInfo = new Hz.e(this._extend.minimum, this._extend.maximum), uz
      }
      serialize() {
        const zz = {};
        return zz.id = this.id, zz.uniqueId = this.uniqueId, zz.updatable = this._updatable, dz.e && dz.e.HasTags(this) && (zz.tags = dz.e.GetTags(this)), zz
      }
      _toNumberArray(zz) {
        return Array.isArray(zz) ? zz : Array.prototype.slice.call(zz)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const zz in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, zz) && (this._vertexBuffers[zz]._buffer._data = null)
      }
      serializeVerticeData() {
        const zz = this.serialize();
        return this.isVerticesDataPresent(lz.j.PositionKind) && (zz.positions = this._toNumberArray(this.getVerticesData(lz.j.PositionKind)), this.isVertexBufferUpdatable(lz.j.PositionKind) && (zz.positionsUpdatable = !0)), this.isVerticesDataPresent(lz.j.NormalKind) && (zz.normals = this._toNumberArray(this.getVerticesData(lz.j.NormalKind)), this.isVertexBufferUpdatable(lz.j.NormalKind) && (zz.normalsUpdatable = !0)), this.isVerticesDataPresent(lz.j.TangentKind) && (zz.tangents = this._toNumberArray(this.getVerticesData(lz.j.TangentKind)), this.isVertexBufferUpdatable(lz.j.TangentKind) && (zz.tangentsUpdatable = !0)), this.isVerticesDataPresent(lz.j.UVKind) && (zz.uvs = this._toNumberArray(this.getVerticesData(lz.j.UVKind)), this.isVertexBufferUpdatable(lz.j.UVKind) && (zz.uvsUpdatable = !0)), this.isVerticesDataPresent(lz.j.UV2Kind) && (zz.uvs2 = this._toNumberArray(this.getVerticesData(lz.j.UV2Kind)), this.isVertexBufferUpdatable(lz.j.UV2Kind) && (zz.uvs2Updatable = !0)), this.isVerticesDataPresent(lz.j.UV3Kind) && (zz.uvs3 = this._toNumberArray(this.getVerticesData(lz.j.UV3Kind)), this.isVertexBufferUpdatable(lz.j.UV3Kind) && (zz.uvs3Updatable = !0)), this.isVerticesDataPresent(lz.j.UV4Kind) && (zz.uvs4 = this._toNumberArray(this.getVerticesData(lz.j.UV4Kind)), this.isVertexBufferUpdatable(lz.j.UV4Kind) && (zz.uvs4Updatable = !0)), this.isVerticesDataPresent(lz.j.UV5Kind) && (zz.uvs5 = this._toNumberArray(this.getVerticesData(lz.j.UV5Kind)), this.isVertexBufferUpdatable(lz.j.UV5Kind) && (zz.uvs5Updatable = !0)), this.isVerticesDataPresent(lz.j.UV6Kind) && (zz.uvs6 = this._toNumberArray(this.getVerticesData(lz.j.UV6Kind)), this.isVertexBufferUpdatable(lz.j.UV6Kind) && (zz.uvs6Updatable = !0)), this.isVerticesDataPresent(lz.j.ColorKind) && (zz.colors = this._toNumberArray(this.getVerticesData(lz.j.ColorKind)), this.isVertexBufferUpdatable(lz.j.ColorKind) && (zz.colorsUpdatable = !0)), this.isVerticesDataPresent(lz.j.MatricesIndicesKind) && (zz.matricesIndices = this._toNumberArray(this.getVerticesData(lz.j.MatricesIndicesKind)), zz.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(lz.j.MatricesIndicesKind) && (zz.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(lz.j.MatricesWeightsKind) && (zz.matricesWeights = this._toNumberArray(this.getVerticesData(lz.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(lz.j.MatricesWeightsKind) && (zz.matricesWeightsUpdatable = !0)), zz.indices = this._toNumberArray(this.Nbz()), zz
      }
      static ExtractFromMesh(zz, uz) {
        const bz = zz._geometry;
        return bz ? bz.copy(uz) : null
      }
      static RandomId() {
        return Oz.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(zz, uz) {
        for (let bz = 0; bz < uz.geometries.length; bz++)
          if (uz.geometries[bz]._loadedUniqueId === zz) return uz.geometries[bz];
        return null
      }
      static _ImportGeometry(zz, uz) {
        const bz = uz.XT(),
          Ez = zz.geometryUniqueId,
          iz = zz.geometryId;
        if (Ez || iz) {
          const zz = Ez ? this._GetGeometryByLoadedUniqueId(Ez, bz) : bz.getGeometryById(iz);
          zz && zz.applyToMesh(uz)
        } else if (zz instanceof ArrayBuffer) {
          const bz = uz._binaryInfo;
          if (bz.positionsAttrDesc && bz.positionsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.positionsAttrDesc.offset, bz.positionsAttrDesc.count);
            uz.setVerticesData(lz.j.PositionKind, Ez, !1)
          }
          if (bz.normalsAttrDesc && bz.normalsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.normalsAttrDesc.offset, bz.normalsAttrDesc.count);
            uz.setVerticesData(lz.j.NormalKind, Ez, !1)
          }
          if (bz.tangetsAttrDesc && bz.tangetsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.tangetsAttrDesc.offset, bz.tangetsAttrDesc.count);
            uz.setVerticesData(lz.j.TangentKind, Ez, !1)
          }
          if (bz.uvsAttrDesc && bz.uvsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvsAttrDesc.offset, bz.uvsAttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UVKind, Ez, !1)
          }
          if (bz.uvs2AttrDesc && bz.uvs2AttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvs2AttrDesc.offset, bz.uvs2AttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UV2Kind, Ez, !1)
          }
          if (bz.uvs3AttrDesc && bz.uvs3AttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvs3AttrDesc.offset, bz.uvs3AttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UV3Kind, Ez, !1)
          }
          if (bz.uvs4AttrDesc && bz.uvs4AttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvs4AttrDesc.offset, bz.uvs4AttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UV4Kind, Ez, !1)
          }
          if (bz.uvs5AttrDesc && bz.uvs5AttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvs5AttrDesc.offset, bz.uvs5AttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UV5Kind, Ez, !1)
          }
          if (bz.uvs6AttrDesc && bz.uvs6AttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.uvs6AttrDesc.offset, bz.uvs6AttrDesc.count);
            if (Rz.b)
              for (let zz = 1; zz < Ez.length; zz += 2) Ez[zz] = 1 - Ez[zz];
            uz.setVerticesData(lz.j.UV6Kind, Ez, !1)
          }
          if (bz.colorsAttrDesc && bz.colorsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.colorsAttrDesc.offset, bz.colorsAttrDesc.count);
            uz.setVerticesData(lz.j.ColorKind, Ez, !1, bz.colorsAttrDesc.stride)
          }
          if (bz.matricesIndicesAttrDesc && bz.matricesIndicesAttrDesc.count > 0) {
            const Ez = new Int32Array(zz, bz.matricesIndicesAttrDesc.offset, bz.matricesIndicesAttrDesc.count),
              nz = [];
            for (let zz = 0; zz < Ez.length; zz++) {
              const uz = Ez[zz];
              nz.push(255 & uz), nz.push((65280 & uz) >> 8), nz.push((16711680 & uz) >> 16), nz.push(uz >> 24 & 255)
            }
            uz.setVerticesData(lz.j.MatricesIndicesKind, nz, !1)
          }
          if (bz.matricesIndicesExtraAttrDesc && bz.matricesIndicesExtraAttrDesc.count > 0) {
            const Ez = new Int32Array(zz, bz.matricesIndicesExtraAttrDesc.offset, bz.matricesIndicesExtraAttrDesc.count),
              nz = [];
            for (let zz = 0; zz < Ez.length; zz++) {
              const uz = Ez[zz];
              nz.push(255 & uz), nz.push((65280 & uz) >> 8), nz.push((16711680 & uz) >> 16), nz.push(uz >> 24 & 255)
            }
            uz.setVerticesData(lz.j.MatricesIndicesExtraKind, nz, !1)
          }
          if (bz.matricesWeightsAttrDesc && bz.matricesWeightsAttrDesc.count > 0) {
            const Ez = new Float32Array(zz, bz.matricesWeightsAttrDesc.offset, bz.matricesWeightsAttrDesc.count);
            uz.setVerticesData(lz.j.MatricesWeightsKind, Ez, !1)
          }
          if (bz.indicesAttrDesc && bz.indicesAttrDesc.count > 0) {
            const Ez = new Int32Array(zz, bz.indicesAttrDesc.offset, bz.indicesAttrDesc.count);
            uz.setIndices(Ez, null)
          }
          if (bz.subMeshesAttrDesc && bz.subMeshesAttrDesc.count > 0) {
            const Ez = new Int32Array(zz, bz.subMeshesAttrDesc.offset, 5 * bz.subMeshesAttrDesc.count);
            uz.hN = [];
            for (let zz = 0; zz < bz.subMeshesAttrDesc.count; zz++) {
              const bz = Ez[5 * zz + 0],
                nz = Ez[5 * zz + 1],
                iz = Ez[5 * zz + 2],
                lz = Ez[5 * zz + 3],
                tz = Ez[5 * zz + 4];
              Mz.e.AddToMesh(bz, nz, iz, lz, tz, uz)
            }
          }
        } else if (zz.positions && zz.normals && zz.indices) {
          if (uz.setVerticesData(lz.j.PositionKind, zz.positions, zz.positions._updatable || zz.positionsUpdatable), uz.setVerticesData(lz.j.NormalKind, zz.normals, zz.normals._updatable || zz.normalsUpdatable), zz.tangents && uz.setVerticesData(lz.j.TangentKind, zz.tangents, zz.tangents._updatable || zz.tangentsUpdatable), zz.uvs && uz.setVerticesData(lz.j.UVKind, zz.uvs, zz.uvs._updatable || zz.uvsUpdatable), zz.uvs2 && uz.setVerticesData(lz.j.UV2Kind, zz.uvs2, zz.uvs2._updatable || zz.uvs2Updatable), zz.uvs3 && uz.setVerticesData(lz.j.UV3Kind, zz.uvs3, zz.uvs3._updatable || zz.uvs3Updatable), zz.uvs4 && uz.setVerticesData(lz.j.UV4Kind, zz.uvs4, zz.uvs4._updatable || zz.uvs4Updatable), zz.uvs5 && uz.setVerticesData(lz.j.UV5Kind, zz.uvs5, zz.uvs5._updatable || zz.uvs5Updatable), zz.uvs6 && uz.setVerticesData(lz.j.UV6Kind, zz.uvs6, zz.uvs6._updatable || zz.uvs6Updatable), zz.colors && uz.setVerticesData(lz.j.ColorKind, nz.g.CheckColors4(zz.colors, zz.positions.length / 3), zz.colors._updatable), zz.matricesIndices)
            if (zz.matricesIndices._isExpanded || zz.matricesIndicesExpanded) delete zz.matricesIndices._isExpanded, delete zz.matricesIndicesExpanded, uz.setVerticesData(lz.j.MatricesIndicesKind, zz.matricesIndices, zz.matricesIndices._updatable || zz.matricesIndicesUpdatable);
            else {
              const bz = [];
              for (let uz = 0; uz < zz.matricesIndices.length; uz++) {
                const Ez = zz.matricesIndices[uz];
                bz.push(255 & Ez), bz.push((65280 & Ez) >> 8), bz.push((16711680 & Ez) >> 16), bz.push(Ez >> 24 & 255)
              }
              uz.setVerticesData(lz.j.MatricesIndicesKind, bz, zz.matricesIndices._updatable || zz.matricesIndicesUpdatable)
            } if (zz.matricesIndicesExtra)
            if (zz.matricesIndicesExtraExpanded || zz.matricesIndicesExtra._isExpanded) delete zz.matricesIndices._isExpanded, delete zz.matricesIndicesExtraExpanded, uz.setVerticesData(lz.j.MatricesIndicesExtraKind, zz.matricesIndicesExtra, zz.matricesIndicesExtra._updatable || zz.matricesIndicesExtraUpdatable);
            else {
              const bz = [];
              for (let uz = 0; uz < zz.matricesIndicesExtra.length; uz++) {
                const Ez = zz.matricesIndicesExtra[uz];
                bz.push(255 & Ez), bz.push((65280 & Ez) >> 8), bz.push((16711680 & Ez) >> 16), bz.push(Ez >> 24 & 255)
              }
              uz.setVerticesData(lz.j.MatricesIndicesExtraKind, bz, zz.matricesIndicesExtra._updatable || zz.matricesIndicesExtraUpdatable)
            } zz.matricesWeights && (wz._CleanMatricesWeights(zz, uz), uz.setVerticesData(lz.j.MatricesWeightsKind, zz.matricesWeights, zz.matricesWeights._updatable)), zz.matricesWeightsExtra && uz.setVerticesData(lz.j.MatricesWeightsExtraKind, zz.matricesWeightsExtra, zz.matricesWeights._updatable), uz.setIndices(zz.indices, null)
        }
        if (zz.hN) {
          uz.hN = [];
          for (let bz = 0; bz < zz.hN.length; bz++) {
            const Ez = zz.hN[bz];
            Mz.e.AddToMesh(Ez.materialIndex, Ez.verticesStart, Ez.verticesCount, Ez.indexStart, Ez.indexCount, uz)
          }
        }
        uz._shouldGenerateFlatShading && (uz.convertToFlatShadedMesh(), uz._shouldGenerateFlatShading = !1), uz.computeWorldMatrix(!0), bz.onMeshImportedObservable.notifyObservers(uz)
      }
      static _CleanMatricesWeights(zz, uz) {
        const bz = .001;
        if (!tz.b.CleanBoneMatrixWeights) return;
        let Ez;
        if (!(zz.skeletonId > -1)) return;
        {
          const bz = uz.XT().getLastSkeletonById(zz.skeletonId);
          if (!bz) return;
          Ez = bz.bones.length
        }
        const nz = uz.getVerticesData(lz.j.MatricesIndicesKind),
          iz = uz.getVerticesData(lz.j.MatricesIndicesExtraKind),
          Mz = zz.matricesWeights,
          Hz = zz.matricesWeightsExtra,
          Oz = zz.numBoneInfluencer,
          pz = Mz.length;
        for (let lz = 0; lz < pz; lz += 4) {
          let zz = 0,
            uz = -1;
          for (let Ez = 0; Ez < 4; Ez++) {
            const nz = Mz[lz + Ez];
            zz += nz, nz < bz && uz < 0 && (uz = Ez)
          }
          if (Hz)
            for (let Ez = 0; Ez < 4; Ez++) {
              const nz = Hz[lz + Ez];
              zz += nz, nz < bz && uz < 0 && (uz = Ez + 4)
            }
          if ((uz < 0 || uz > Oz - 1) && (uz = Oz - 1), zz > bz) {
            const uz = 1 / zz;
            for (let zz = 0; zz < 4; zz++) Mz[lz + zz] *= uz;
            if (Hz)
              for (let zz = 0; zz < 4; zz++) Hz[lz + zz] *= uz
          } else uz >= 4 ? (Hz[lz + uz - 4] = 1 - zz, iz[lz + uz - 4] = Ez) : (Mz[lz + uz] = 1 - zz, nz[lz + uz] = Ez)
        }
        uz.setVerticesData(lz.j.MatricesIndicesKind, nz), zz.matricesWeightsExtra && uz.setVerticesData(lz.j.MatricesIndicesExtraKind, iz)
      }
      static Parse(zz, uz, bz) {
        const nz = new wz(zz.id, uz, void 0, zz.updatable);
        return nz._loadedUniqueId = zz.uniqueId, dz.e && dz.e.AddTagsTo(nz, zz.tags), zz.delayLoadingFile ? (nz.delayLoadState = 4, nz.delayLoadingFile = bz + zz.delayLoadingFile, nz._boundingInfo = new Hz.e(Ez.n.FromArray(zz.boundingBoxMinimum), Ez.n.FromArray(zz.boundingBoxMaximum)), nz._delayInfo = [], zz.hasUVs && nz._delayInfo.push(lz.j.UVKind), zz.hasUVs2 && nz._delayInfo.push(lz.j.UV2Kind), zz.hasUVs3 && nz._delayInfo.push(lz.j.UV3Kind), zz.hasUVs4 && nz._delayInfo.push(lz.j.UV4Kind), zz.hasUVs5 && nz._delayInfo.push(lz.j.UV5Kind), zz.hasUVs6 && nz._delayInfo.push(lz.j.UV6Kind), zz.hasColors && nz._delayInfo.push(lz.j.ColorKind), zz.hasMatricesIndices && nz._delayInfo.push(lz.j.MatricesIndicesKind), zz.hasMatricesWeights && nz._delayInfo.push(lz.j.MatricesWeightsKind), nz._delayLoadingFunction = iz.b.ImportVertexData) : iz.b.ImportVertexData(zz, nz), uz.pushGeometry(nz, !0), nz
      }
    }
  },
  39631: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz,
      g: () => Zz
    });
    var Ez = bz(36519),
      nz = bz(38060),
      iz = bz(39614),
      lz = bz(39584),
      Mz = bz(38054),
      tz = bz(39618),
      Hz = bz(39299),
      Oz = bz(36564);
    class pz extends iz.e {
      constructor(zz, uz) {
        super(zz, uz.XT()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, uz.n_(this), this._sourceMesh = uz, this._unIndexed = uz._unIndexed, this.position.euz(uz.position), this.rotation.euz(uz.rotation), this.ti.euz(uz.ti), uz.rotationQuaternion && (this.rotationQuaternion = uz.rotationQuaternion.clone()), this.animations = uz.animations.slice();
        for (const bz of uz.getAnimationRanges()) null != bz && this.createAnimationRange(bz.name, bz.from, bz.to);
        if (this.infiniteDistance = uz.infiniteDistance, this.setPivotMatrix(uz.getPivotMatrix()), uz.skeleton || uz.morphTargetManager || !uz.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const zz = uz.lG();
          this.buildBoundingInfo(zz.minimum, zz.maximum)
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
      set receiveShadows(zz) {
        this._sourceMesh?.receiveShadows !== zz && nz.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(zz) {
        this._sourceMesh?.material !== zz && nz.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(zz) {
        this._sourceMesh?.visibility !== zz && nz.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(zz) {
        this._sourceMesh?.skeleton !== zz && nz.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(zz) {
        this._sourceMesh && zz !== this._sourceMesh.renderingGroupId && nz.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(zz) {
        this._sourceMesh && zz !== this._sourceMesh.meshBlendingTag && nz.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get wEz() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(zz) {
        return this._sourceMesh.createInstance(zz)
      }
      isReady() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(zz, !0)
      }
      getVerticesData(zz, uz, bz) {
        return this._sourceMesh.getVerticesData(zz, uz, bz)
      }
      copyVerticesData(zz, uz) {
        this._sourceMesh.copyVerticesData(zz, uz)
      }
      getVertexBuffer(zz, uz) {
        return this._sourceMesh.getVertexBuffer(zz, uz)
      }
      setVerticesData(zz, uz, bz, Ez) {
        return this.wEz && this.wEz.setVerticesData(zz, uz, bz, Ez), this.wEz
      }
      updateVerticesData(zz, uz, bz, Ez) {
        return this.wEz && this.wEz.updateVerticesData(zz, uz, bz, Ez), this.wEz
      }
      setIndices(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.wEz && this.wEz.setIndices(zz, uz), this.wEz
      }
      isVerticesDataPresent(zz) {
        return this._sourceMesh.isVerticesDataPresent(zz)
      }
      Nbz() {
        return this._sourceMesh.Nbz()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let zz, uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.lG().isLocked) return this;
        zz = "object" === typeof uz ? uz : {
          applySkeleton: uz,
          applyMorph: bz
        };
        const Ez = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(zz, null, Hz.j.PositionKind), Ez), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(zz, uz) {
        if (super._activate(zz, uz), this._sourceMesh.hN || nz.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, zz), uz) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== tz.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Ez.d);
          const zz = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Ez.l.ER[7].euz(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.euz(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.euz(Ez.l.ER[7]), this._currentLOD._masterMesh = zz, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get qT() {
        return !0
      }
      getLOD(zz) {
        if (!zz) return this;
        const uz = this.wEz.getLODLevels();
        if (uz && 0 !== uz.length) {
          const uz = this.lG();
          this._currentLOD = this.wEz.getLOD(zz, uz.Ibz)
        } else this._currentLOD = this.wEz;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(zz) {
        return this.wEz._preActivateForIntermediateRendering(zz)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.hN)
          for (let zz = 0; zz < this._sourceMesh.hN.length; zz++) this._sourceMesh.hN[zz].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.lG().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(zz);
        if (Mz.b.DeepCopy(this, Ez, ["name", "hN", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "wEz", "qT", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "KEz", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Elz", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), uz && (Ez.parent = uz), !bz)
          for (let nz = 0; nz < this.XT().meshes.length; nz++) {
            const zz = this.XT().meshes[nz];
            zz.parent === this && zz.clone(zz.name, Ez)
          }
        return Ez.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Ez), Ez
      }
      dispose(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.l_(this), super.dispose(zz, uz)
      }
      _serializeAsParent(zz) {
        super._serializeAsParent(zz), zz.parentId = this._sourceMesh.uniqueId, zz.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0, uz && uz.newSourcedMesh);
        Ez && bz && bz(this, Ez);
        for (const nz of this.getChildTransformNodes(!0)) nz.instantiateHierarchy(Ez, uz, bz);
        return Ez
      }
    }
    let dz = !1;

    function Fz(zz, uz, bz, Ez, nz) {
      for (let iz = 0; iz < uz.length; iz++) {
        const lz = zz[uz[iz]] ?? 0,
          Mz = nz + bz[iz];
        lz.toArray ? lz.toArray(Ez, Mz) : lz.copyToArray ? lz.copyToArray(Ez, Mz) : Ez[Mz] = lz
      }
    }

    function Zz() {
      dz || (dz = !0, lz.c._instancedMeshFactory = (zz, uz) => {
        const bz = new pz(zz, uz);
        if (uz.RP) {
          bz.RP = {};
          for (const zz in uz.RP) bz.RP[zz] = uz.RP[zz]
        }
        return bz
      }, lz.c.prototype.YL = function(zz, uz) {
        if (!this.RP) {
          this.RP = {};
          for (const zz of this.instances) zz.RP = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.uR().getCaps().vertexArrayObject ? {} : void 0
        }), this.RP[zz] = null, this._userInstancedBuffersStorage.strides[zz] = uz;
        const bz = this._userInstancedBuffersStorage;
        bz.interleavedKinds = [], bz.interleavedOffsets = [], bz.interleavedRowStride = 0;
        for (const Ez in bz.strides) bz.interleavedKinds.push(Ez), bz.interleavedOffsets.push(bz.interleavedRowStride), bz.interleavedRowStride += bz.strides[Ez];
        bz.interleavedData = new Float32Array(32 * bz.interleavedRowStride);
        for (const Ez in bz.interleavedBuffers) bz.interleavedBuffers[Ez].buffer.dispose();
        bz.interleavedBuffers = {}, bz.vertexBuffers[zz] = null;
        for (const Ez of this.instances) Ez.RP[zz] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, lz.c.prototype._processInstancedBuffers = function(zz, uz) {
        const bz = this._userInstancedBuffersStorage,
          Ez = bz.interleavedRowStride;
        if (!Ez) return;
        const nz = zz ? zz.length : 0,
          iz = (nz + 1) * Ez;
        let lz = bz.interleavedData;
        if (lz.length < iz) {
          let zz = lz.length;
          for (; zz < iz;) zz *= 2;
          lz = bz.interleavedData = new Float32Array(zz)
        }
        const Mz = bz.interleavedKinds,
          tz = bz.interleavedOffsets;
        let Oz = 0;
        uz && (Fz(this.RP, Mz, tz, lz, Oz), Oz += Ez);
        for (let Hz = 0; Hz < nz; Hz++) Fz(zz[Hz].RP, Mz, tz, lz, Oz), Oz += Ez;
        let pz = "shared",
          dz = bz.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (pz = this._instanceDataStorage.engine.currentRenderPassId, bz.renderPasses || (bz.renderPasses = {}), bz.renderPasses[pz] || (bz.renderPasses[pz] = {}), dz = bz.renderPasses[pz]);
        const Zz = bz.interleavedBuffers[pz];
        let Rz = !Zz || Zz.data !== lz;
        for (let Hz = 0; !Rz && Hz < Mz.length; Hz++) Rz = !dz[Mz[Hz]];
        if (!Rz) return void Zz.buffer.updateDirectly(lz, 0);
        Zz?.buffer.dispose();
        const Kz = new Hz.c(this.uR(), lz, !0, Ez, !1, !0);
        for (let Hz = 0; Hz < Mz.length; Hz++) {
          const zz = Mz[Hz],
            uz = Kz.createVertexBuffer(zz, tz[Hz], bz.strides[zz]);
          uz.hashCode += uz.byteOffset * 2 ** 24, dz[zz] = uz
        }
        bz.interleavedBuffers[pz] = {
          buffer: Kz,
          data: lz
        }, this._invalidateInstanceVertexArrayObject()
      }, lz.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const zz in this._userInstancedBuffersStorage.vertexArrayObjects) this.uR().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[zz]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, lz.c.prototype._disposeInstanceSpecificData = function() {
        for (const uz in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[uz].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const uz in this.RP) this._userInstancedBuffersStorage.vertexBuffers[uz] && this._userInstancedBuffersStorage.vertexBuffers[uz].dispose();
        const zz = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (zz) {
          for (const uz in zz) zz[uz].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.RP = {}
      }, (0, Oz.c)("BABYLON.InstancedMesh", pz))
    }
  },
  39584: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Cz,
      g: () => kz,
      h: () => Dz
    });
    var Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz = bz(36547),
      Xz = bz(39258),
      fz = bz(39202),
      sz = bz(38054),
      rz = bz(39189),
      oz = bz(39589),
      Nz = bz(39376),
      vz = bz(36519),
      xz = bz(36715),
      Jz = bz(39384),
      Az = bz(39299),
      Tz = bz(39596),
      Lz = bz(39605),
      Pz = bz(39614),
      Gz = bz(39459),
      az = bz(39451),
      Vz = bz(39552),
      mz = bz(39622),
      qz = bz(39607),
      hz = bz(39182),
      Uz = bz(38060),
      cz = bz(36564),
      gz = bz(39061),
      Sz = bz(39329);
    class yz {
      constructor(zz, uz) {
        this.distanceOrScreenCoverage = zz, this.mesh = uz
      }
    }
    class Dz {}
    class Qz {
      constructor() {
        this.batchCache = new ez(this), this.batchCacheReplacementModeInFrozenMode = new ez(this), this.instancesBufferSize = 2048
      }
    }
    class Wz {
      constructor() {
        this.renderPasses = {}
      }
    }
    class ez {
      constructor(zz) {
        this.parent = zz, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class jz {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Iz {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Bz = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Cz extends Pz.e {
      static _GetDefaultSideOrientation(zz) {
        return zz || Cz.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(zz) {
        this._internalMeshDataInfo._useLODScreenCoverage = zz, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(zz) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== zz && (zz && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Az.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Az.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = zz, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new wz.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new wz.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new wz.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new wz.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new wz.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(zz) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(zz)
      }
      get KEz() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(zz) {
        this._internalMeshDataInfo._forcedInstanceCount = zz
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(zz) {
        this._internalMeshDataInfo._sideOrientation = zz, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === zz || !this._scene.useRightHandedSystem && 0 === zz
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(zz) {
        this.sideOrientation = zz, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(zz) {
        this._internalMeshDataInfo._overrideRenderingFillMode = zz
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(zz) {
        zz && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (zz.sideOrientation = null), this._setMaterial(zz)
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
      set isUnIndexed(zz) {
        this._unIndexed !== zz && (this._unIndexed = zz, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const zz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return zz ? zz.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const zz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return zz ? zz.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(zz) {
        this._instanceDataStorage.manualUpdate = zz
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(zz) {
        this._instanceDataStorage.previousManualUpdate = zz
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(zz) {
        this._instanceDataStorage.forceMatrixUpdates = zz
      }
      _copySource(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nz = this.XT();
        if (zz._geometry && zz._geometry.applyToMesh(this), sz.b.DeepCopy(zz, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "KEz", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "qT", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Elz", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = zz, nz.useClonedMeshMap && (zz._internalMeshDataInfo.meshMap || (zz._internalMeshDataInfo.meshMap = {}), zz._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = zz._originalBuilderSideOrientation, this._creationDataStorage = zz._creationDataStorage, zz._ranges) {
          const uz = zz._ranges;
          for (const zz in uz) Object.prototype.hasOwnProperty.call(uz, zz) && uz[zz] && this.createAnimationRange(zz, uz[zz].from, uz[zz].to)
        }
        if (zz.metadata && zz.metadata.clone ? this.metadata = zz.metadata.clone() : this.metadata = zz.metadata, this._internalMetadata = zz._internalMetadata, this.meshBlendingTag = zz.meshBlendingTag, rz.e && rz.e.HasTags(zz) && rz.e.AddTagsTo(this, rz.e.GetTags(zz, !0)), this.Zx(zz.isEnabled(!1)), this.parent = zz.parent, this.setPivotMatrix(zz.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + zz.id, this.material = zz.material, !uz) {
          const nz = zz.getDescendants(!0);
          for (let zz = 0; zz < nz.length; zz++) {
            const iz = nz[zz];
            iz._isMesh ? (Bz.parent = this, Bz.doNotCloneChildren = uz, Bz.clonePhysicsImpostor = bz, Bz.cloneThinInstances = Ez, iz.clone(this.name + "." + iz.name, Bz)) : iz.clone && iz.clone(this.name + "." + iz.name, this)
          }
        }
        if (zz.morphTargetManager && (this.morphTargetManager = zz.morphTargetManager), (0, gz.c)(nz.getPhysicsEngine)) {
          const uz = nz.getPhysicsEngine();
          if (bz && uz)
            if (1 === uz.getPluginVersion()) {
              const bz = uz.getImpostorForPhysicsObject(zz);
              bz && (this.physicsImpostor = bz.clone(this))
            } else 2 === uz.getPluginVersion() && zz.physicsBody && zz.physicsBody.clone(this)
        }
        for (let iz = 0; iz < nz.yN.length; iz++) {
          const uz = nz.yN[iz];
          uz.emitter === zz && uz.clone(uz.name, this)
        }
        if (this.skeleton = zz.skeleton, Ez && (zz._thinInstanceDataStorage.matrixData ? (this.v_("matrix", new Float32Array(zz._thinInstanceDataStorage.matrixData), 16, !zz._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = zz._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = zz._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = zz._thinInstanceDataStorage.matrixBufferSize, zz._userThinInstanceBuffersStorage)) {
          const uz = zz._userThinInstanceBuffersStorage;
          for (const zz in uz.data) this.v_(zz, new Float32Array(uz.data[zz]), uz.strides[zz], !uz.vertexBuffers?.[zz]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[zz] = uz.sizes[zz]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(zz) {
        let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iz = arguments.length > 4 ? arguments[4] : void 0,
          lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(zz, bz), this._internalMeshDataInfo = new Iz, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new jz, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Cz.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, bz = this.XT(), this._instanceDataStorage = new Wz, this._instanceDataStorage.engine = bz.uR(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Qz), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (zz, uz, bz) => {
          zz && bz && (this._uniformBuffer ? this.transferToEffect(uz) : bz.bindOnlyWorldMatrix(uz))
        };
        let Mz = !1;
        if (Ez && void 0 === Ez._addToSceneRootNodes) {
          const zz = Ez;
          uz = zz.parent ?? null, nz = zz.source ?? null, iz = zz.doNotCloneChildren ?? !1, lz = zz.clonePhysicsImpostor ?? !0, Mz = zz.cloneThinInstances ?? !1
        } else uz = Ez;
        nz && this._copySource(nz, iz, lz, Mz), null !== uz && (this.parent = uz), this._instanceDataStorage.hardwareInstancedRendering = this.uR().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = zz => {
          zz.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new wz.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), nz && nz.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = 0 === this.getTotalVertices() || uz && uz.doNotInstantiate && (!0 === uz.doNotInstantiate || uz.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Ez.parent = zz || this.parent, Ez.position = this.position.clone(), Ez.ti = this.ti.clone(), this.rotationQuaternion ? Ez.rotationQuaternion = this.rotationQuaternion.clone() : Ez.rotation = this.rotation.clone(), bz && bz(this, Ez);
        for (const nz of this.getChildTransformNodes(!0)) "InstancedMesh" === nz.getClassName() && "Mesh" === Ez.getClassName() && nz.wEz === this ? nz.instantiateHierarchy(Ez, {
          doNotInstantiate: uz && uz.doNotInstantiate || !1,
          newSourcedMesh: Ez
        }, bz) : nz.instantiateHierarchy(Ez, uz, bz);
        return Ez
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(zz) {
        let uz = super.toString(zz);
        if (uz += ", n vertices: " + this.getTotalVertices(), uz += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let bz = 0; bz < this.animations.length; bz++) uz += ", animation[0]: " + this.animations[bz].toString(zz);
        if (zz)
          if (this._geometry) {
            const zz = this.Nbz(),
              bz = this.getVerticesData(Az.j.PositionKind);
            bz && zz && (uz += ", flat shading: " + (bz.length / 3 === zz.length ? "YES" : "NO"))
          } else uz += ", flat shading: UNKNOWN";
        return uz
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const zz of this.instances) zz._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const zz = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((uz, bz) => uz.distanceOrScreenCoverage < bz.distanceOrScreenCoverage ? zz : uz.distanceOrScreenCoverage > bz.distanceOrScreenCoverage ? -zz : 0))
      }
      addLODLevel(zz, uz) {
        if (uz && uz._masterMesh) return Uz.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const bz = new yz(zz, uz);
        return this._internalMeshDataInfo._LODLevels.push(bz), uz && (uz._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(zz) {
        const uz = this._internalMeshDataInfo;
        for (let bz = 0; bz < uz._LODLevels.length; bz++) {
          const Ez = uz._LODLevels[bz];
          if (Ez.distanceOrScreenCoverage === zz) return Ez.mesh
        }
        return null
      }
      removeLODLevel(zz) {
        const uz = this._internalMeshDataInfo;
        for (let bz = 0; bz < uz._LODLevels.length; bz++) uz._LODLevels[bz].mesh === zz && (uz._LODLevels.splice(bz, 1), zz && (zz._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(zz, uz) {
        const bz = this._internalMeshDataInfo;
        if (!bz._LODLevels || 0 === bz._LODLevels.length) return this;
        const Ez = uz || this.lG().Ibz,
          nz = zz.mode === Nz.d.ORTHOGRAPHIC_CAMERA ? zz.minZ : Ez.centerWorld.subtract(zz.globalPosition).length();
        let iz = nz,
          lz = 1;
        if (bz._useLODScreenCoverage) {
          const uz = zz.screenArea;
          let bz = Ez.radiusWorld * zz.minZ / nz;
          bz = bz * bz * Math.PI, iz = bz / uz, lz = -1
        }
        if (lz * bz._LODLevels[bz._LODLevels.length - 1].distanceOrScreenCoverage > lz * iz) return this.onLODLevelSelection && this.onLODLevelSelection(iz, this, this), this;
        for (let Mz = 0; Mz < bz._LODLevels.length; Mz++) {
          const zz = bz._LODLevels[Mz];
          if (lz * zz.distanceOrScreenCoverage < lz * iz) {
            if (zz.mesh) {
              if (4 === zz.mesh.delayLoadState) return zz.mesh._checkDelayState(), this;
              if (2 === zz.mesh.delayLoadState) return this;
              zz.mesh._preActivate(), zz.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(iz, this, zz.mesh), zz.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(iz, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(zz, uz, bz, Ez) {
        if (!this._geometry) return null;
        let nz = Ez ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[zz]?.getFloatData(this.instances.length + 1, bz || uz && 1 !== this._geometry.meshes.length);
        return nz || (nz = this._geometry.getVerticesData(zz, uz, bz)), nz
      }
      copyVerticesData(zz, uz) {
        this._geometry && this._geometry.copyVerticesData(zz, uz)
      }
      getVertexBuffer(zz, uz) {
        return this._geometry ? (uz ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[zz]) ?? this._geometry.getVertexBuffer(zz) : null
      }
      isVerticesDataPresent(zz, uz) {
        return this._geometry ? !uz && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[zz] || this._geometry.isVerticesDataPresent(zz) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(zz)
      }
      isVertexBufferUpdatable(zz, uz) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(zz);
        if (!uz) {
          const uz = this._userInstancedBuffersStorage?.vertexBuffers[zz];
          if (uz) return uz.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(zz)
      }
      getVerticesDataKinds(zz) {
        if (!this._geometry) {
          const zz = [];
          if (this._delayInfo)
            for (const uz of this._delayInfo) zz.push(uz);
          return zz
        }
        const uz = this._geometry.getVerticesDataKinds();
        if (!zz && this._userInstancedBuffersStorage)
          for (const bz in this._userInstancedBuffersStorage.vertexBuffers) - 1 === uz.indexOf(bz) && uz.push(bz);
        return uz
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Nbz(zz, uz) {
        return this._geometry ? this._geometry.Nbz(zz, uz) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(zz)) return !1;
        if (!this.hN || 0 === this.hN.length) return !0;
        if (!zz) return !0;
        const bz = this.uR(),
          Ez = this.XT(),
          nz = uz || bz.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const iz = this.material || Ez.defaultMaterial;
        if (iz)
          if (iz._storeEffectOnSubMeshes)
            for (const Mz of this.hN) {
              const zz = Mz.lR();
              if (zz)
                if (zz._storeEffectOnSubMeshes) {
                  if (!zz.isReadyForSubMesh(this, Mz, nz)) return !1
                } else if (!zz.isReady(this, nz)) return !1
            } else if (!iz.isReady(this, nz)) return !1;
        const lz = bz.currentRenderPassId;
        for (const Mz of this.lightSources) {
          const zz = Mz.getShadowGenerators();
          if (!zz) continue;
          const uz = zz.values();
          for (let Ez = uz.next(); !0 !== Ez.done; Ez = uz.next()) {
            const zz = Ez.value;
            if (zz && (!zz.getShadowMap()?.renderList || zz.getShadowMap()?.renderList && -1 !== zz.getShadowMap()?.renderList?.indexOf(this))) {
              const uz = zz.getShadowMap().renderPassIds ?? [bz.currentRenderPassId];
              for (let Ez = 0; Ez < uz.length; ++Ez) {
                bz.currentRenderPassId = uz[Ez];
                for (const uz of this.hN)
                  if (!zz.isReady(uz, nz, uz.lR()?.needAlphaBlendingForMesh(this) ?? !1)) return bz.currentRenderPassId = lz, !1
              }
              bz.currentRenderPassId = lz
            }
          }
        }
        for (const Mz of this._internalMeshDataInfo._LODLevels)
          if (Mz.mesh && !Mz.mesh.isReady(nz)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      MR() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(zz) {
        this._instanceDataStorage.overridenInstanceCount = zz
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const zz = this._instanceDataStorage.engine.currentRenderPassId;
        let uz = this._instanceDataStorage.renderPasses[zz];
        return uz || (uz = new Qz, this._instanceDataStorage.renderPasses[zz] = uz), uz
      }
      _preActivate() {
        const zz = this._internalMeshDataInfo,
          uz = this.XT().getRenderId();
        return zz._preActivateId === uz || (zz._preActivateId = uz, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(zz) {
        const uz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return uz.visibleInstances && (uz.visibleInstances.intermediateDefaultRenderId = zz), this
      }
      _registerInstanceForRenderId(zz, uz) {
        const bz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return bz.visibleInstances || (bz.visibleInstances = {
          defaultRenderId: uz,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), bz.visibleInstances[uz] || (void 0 === bz.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete bz.visibleInstances[bz.previousRenderId], bz.previousRenderId = uz, bz.visibleInstances[uz] = new Array), bz.visibleInstances[uz].push(zz), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.iR || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let zz, uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.lG().isLocked) return this;
        zz = "object" === typeof uz ? uz : {
          applySkeleton: uz,
          applyMorph: bz
        };
        const Ez = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(zz, null, Az.j.PositionKind), Ez), this
      }
      _createGlobalSubMesh(zz) {
        const uz = this.getTotalVertices();
        if (!uz || !this.Nbz()) return null;
        if (this.hN && this.hN.length > 0) {
          const bz = this.Nbz();
          if (!bz) return null;
          const Ez = bz.length;
          let nz = !1;
          if (zz) nz = !0;
          else
            for (const zz of this.hN) {
              if (zz.indexStart + zz.indexCount > Ez) {
                nz = !0;
                break
              }
              if (zz.verticesStart + zz.verticesCount > uz) {
                nz = !0;
                break
              }
            }
          if (!nz) return this.hN[0]
        }
        return this.releaseSubMeshes(), new Gz.e(0, 0, uz, 0, this.getTotalIndices() || (this.isUnIndexed ? uz : 0), this)
      }
      subdivide(zz) {
        if (zz < 1) return;
        const uz = this.getTotalIndices();
        let bz = uz / zz | 0,
          Ez = 0;
        for (; bz % 3 !== 0;) bz++;
        this.releaseSubMeshes();
        for (let nz = 0; nz < zz && !(Ez >= uz); nz++) Gz.e.CreateFromIndices(0, Ez, Ez + bz >= uz ? uz - Ez : bz, this, void 0, !1), Ez += bz;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(zz, uz, bz, Ez);
        else {
          const Ez = new Tz.b;
          Ez.set(uz, zz);
          const nz = this.XT();
          new Lz.b(Lz.b.RandomId(), nz, Ez, bz, this)
        }
        return this
      }
      removeVerticesData(zz) {
        this._geometry && this._geometry.removeVerticesData(zz)
      }
      markVerticesDataAsUpdatable(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const bz = this.getVertexBuffer(zz);
        bz && bz.isUpdatable() !== uz && this.setVerticesData(zz, this.getVerticesData(zz), uz)
      }
      setVerticesBuffer(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Lz.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(zz, bz, uz), this
      }
      updateVerticesData(zz, uz, bz, Ez) {
        return this._geometry ? (Ez ? (this.makeGeometryUnique(), this.updateVerticesData(zz, uz, bz, !1)) : this._geometry.updateVerticesData(zz, uz, bz), this) : this
      }
      updateMeshPositions(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const bz = this.getVerticesData(Az.j.PositionKind);
        if (!bz) return this;
        if (zz(bz), this.updateVerticesData(Az.j.PositionKind, bz, !1, !1), uz) {
          const zz = this.Nbz(),
            uz = this.getVerticesData(Az.j.NormalKind);
          if (!uz) return this;
          Tz.b.ComputeNormals(bz, zz, uz), this.updateVerticesData(Az.j.NormalKind, uz, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const zz = this._geometry,
          uz = this._geometry.copy(Lz.b.RandomId());
        return zz.releaseForMesh(this, !0), uz.applyToMesh(this), this
      }
      setIndexBuffer(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nz = this._geometry;
        nz || (nz = new Lz.b(Lz.b.RandomId(), this.XT(), void 0, void 0, this)), nz.setIndexBuffer(zz, uz, bz, Ez)
      }
      setIndices(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(zz, uz, bz, Ez);
        else {
          const Ez = new Tz.b;
          Ez.indices = zz;
          const nz = this.XT();
          new Lz.b(Lz.b.RandomId(), nz, Ez, bz, this, uz)
        }
        return this
      }
      updateIndices(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(zz, uz, bz), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(zz, uz, bz) {
        let Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const nz = this.XT().uR();
        let iz;
        if (this._unIndexed)
          if (this._getRenderingFillMode(bz) === az.c.WireFrameFillMode) iz = zz._getLinesIndexBuffer(this.Nbz(), nz);
          else iz = null;
        else switch (this._getRenderingFillMode(bz)) {
          case az.c.PointFillMode:
            iz = null;
            break;
          case az.c.WireFrameFillMode:
            iz = zz._getLinesIndexBuffer(this.Nbz(), nz);
            break;
          default:
          case az.c.TriangleFillMode:
            iz = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(uz, iz, Ez)
      }
      _bindDirect(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(zz), bz && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const zz = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const uz in zz) this._userInstancedBuffersStorage.vertexBuffers[uz] = zz[uz]
          }
          this._geometry._bind(zz, uz, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(zz, uz);
        return this
      }
      _draw(zz, uz, bz) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Ez = this.XT().uR(),
          nz = Ez._currentMaterialContext,
          iz = nz && nz.useVertexPulling;
        return this._unIndexed && uz !== az.c.WireFrameFillMode || uz == az.c.PointFillMode ? Ez.drawArraysType(uz, zz.verticesStart, zz.verticesCount, this.forcedInstanceCount || bz) : uz == az.c.WireFrameFillMode ? Ez.drawElementsType(uz, 0, zz._linesIndexCount, this.forcedInstanceCount || bz) : iz ? Ez.drawArraysType(uz, zz.indexStart, zz.indexCount, this.forcedInstanceCount || bz) : Ez.drawElementsType(uz, zz.indexStart, zz.indexCount, this.forcedInstanceCount || bz), this
      }
      registerBeforeRender(zz) {
        return this.onBeforeRenderObservable.add(zz), this
      }
      unregisterBeforeRender(zz) {
        return this.onBeforeRenderObservable.removeCallback(zz), this
      }
      registerAfterRender(zz) {
        return this.onAfterRenderObservable.add(zz), this
      }
      unregisterAfterRender(zz) {
        return this.onAfterRenderObservable.removeCallback(zz), this
      }
      _getInstancesRenderList(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (uz) return bz.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[zz] = !1, bz.batchCacheReplacementModeInFrozenMode.renderSelf[zz] = !0, bz.batchCacheReplacementModeInFrozenMode;
          if (bz.previousBatch) return bz.previousBatch
        }
        const Ez = this.XT(),
          nz = Ez._isInIntermediateRendering(),
          iz = nz ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          lz = bz.batchCache;
        if (lz.mustReturn = !1, lz.renderSelf[zz] = uz || !iz && this.isEnabled() && this.isVisible, lz.visibleInstances[zz] = null, bz.visibleInstances && !uz) {
          const uz = bz.visibleInstances,
            iz = Ez.getRenderId(),
            Mz = nz ? uz.intermediateDefaultRenderId : uz.defaultRenderId;
          lz.visibleInstances[zz] = uz[iz], !lz.visibleInstances[zz] && Mz && (lz.visibleInstances[zz] = uz[Mz])
        }
        return lz.hardwareInstancedRendering[zz] = !uz && this._instanceDataStorage.hardwareInstancedRendering && null !== lz.visibleInstances[zz] && void 0 !== lz.visibleInstances[zz], bz.previousBatch = lz, lz
      }
      _updateInstancedBuffers(zz, uz, bz, Ez, nz, iz) {
        const lz = uz.visibleInstances[zz._id],
          Mz = lz ? lz.length : 0,
          tz = uz.parent,
          Hz = this._instanceDataStorage;
        let Oz = tz.instancesBuffer,
          pz = tz.instancesPreviousBuffer,
          dz = 0,
          Fz = 0;
        const Zz = uz.renderSelf[zz._id],
          Rz = this._scene.floatingOriginOffset,
          Kz = !Oz || bz !== tz.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !tz.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Hz.isFrozen && !Kz) Fz = (Zz ? 1 : 0) + Mz;
        else {
          const uz = this.getWorldMatrix();
          if (Zz) {
            this._scene.needsPreviousWorldMatrices && (Hz.masterMeshPreviousWorldMatrix ? (Hz.masterMeshPreviousWorldMatrix.copyToArray(tz.instancesPreviousData, dz), Hz.masterMeshPreviousWorldMatrix.euz(uz)) : (Hz.masterMeshPreviousWorldMatrix = uz.clone(), Hz.masterMeshPreviousWorldMatrix.copyToArray(tz.instancesPreviousData, dz))), uz.copyToArray(tz.instancesData, dz);
            const zz = uz.obz();
            tz.instancesData[dz + 12] = zz[12] - Rz.x, tz.instancesData[dz + 13] = zz[13] - Rz.y, tz.instancesData[dz + 14] = zz[14] - Rz.z, dz += 16, Fz++
          }
          if (lz) {
            if (Cz.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && zz.lR()?.needAlphaBlendingForMesh(zz.getRenderingMesh())) {
              const zz = this._scene.activeCamera.globalPosition;
              for (let uz = 0; uz < lz.length; uz++) {
                const bz = lz[uz];
                bz._distanceToCamera = vz.n.Distance(bz.lG().Ibz.centerWorld, zz)
              }
              lz.sort(((zz, uz) => zz._distanceToCamera > uz._distanceToCamera ? -1 : zz._distanceToCamera < uz._distanceToCamera ? 1 : 0))
            }
            for (let zz = 0; zz < lz.length; zz++) {
              const uz = lz[zz],
                bz = uz.getWorldMatrix();
              bz.copyToArray(tz.instancesData, dz), this._scene.needsPreviousWorldMatrices && (uz._previousWorldMatrix ? (uz._previousWorldMatrix.copyToArray(tz.instancesPreviousData, dz), uz._previousWorldMatrix.euz(bz)) : (uz._previousWorldMatrix = bz.clone(), uz._previousWorldMatrix.copyToArray(tz.instancesPreviousData, dz)));
              const Ez = bz.obz();
              tz.instancesData[dz + 12] = Ez[12] - Rz.x, tz.instancesData[dz + 13] = Ez[13] - Rz.y, tz.instancesData[dz + 14] = Ez[14] - Rz.z, dz += 16, Fz++
            }
          }
        }
        if (Kz) {
          let zz;
          if (Oz && Oz.dispose(), pz && pz.dispose(), Oz = new Az.c(Ez, tz.instancesData, !0, 16, !1, !0), tz.instancesBuffer = Oz, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.uR().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) zz = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const uz = this._instanceDataStorage.engine.currentRenderPassId;
            zz = this._userInstancedBuffersStorage.renderPasses[uz], zz || (this._userInstancedBuffersStorage.renderPasses[uz] = zz = {})
          }
          zz.world0 = Oz.createVertexBuffer("world0", 0, 4), zz.world1 = Oz.createVertexBuffer("world1", 4, 4), zz.world2 = Oz.createVertexBuffer("world2", 8, 4), zz.world3 = Oz.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (pz = new Az.c(Ez, tz.instancesPreviousData, !0, 16, !1, !0), tz.instancesPreviousBuffer = pz, zz.previousWorld0 = pz.createVertexBuffer("previousWorld0", 0, 4), zz.previousWorld1 = pz.createVertexBuffer("previousWorld1", 4, 4), zz.previousWorld2 = pz.createVertexBuffer("previousWorld2", 8, 4), zz.previousWorld3 = pz.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Oz.updateDirectly(tz.instancesData, 0, Fz), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || pz.updateDirectly(tz.instancesPreviousData, 0, Fz));
        this._processInstancedBuffers(lz, Zz), iz && void 0 !== nz && (this.XT()._activeIndices.addCount(zz.indexCount * Fz, !1), Ez._currentDrawContext && (Ez._currentDrawContext.useInstancing = !0), this._bind(zz, iz, nz), this._draw(zz, nz, Fz)), !this._scene.needsPreviousWorldMatrices || Kz || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || pz.updateDirectly(tz.instancesData, 0, Fz)
      }
      _renderWithInstances(zz, uz, bz, Ez, nz) {
        const iz = bz.visibleInstances[zz._id],
          lz = iz ? iz.length : 0,
          Mz = bz.parent,
          tz = Mz.instancesBufferSize,
          Hz = 16 * (lz + 1) * 4;
        for (; Mz.instancesBufferSize < Hz;) Mz.instancesBufferSize *= 2;
        return Mz.instancesData && tz == Mz.instancesBufferSize || (Mz.instancesData = new Float32Array(Mz.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Mz.instancesPreviousData || tz != Mz.instancesBufferSize) && (Mz.instancesPreviousData = new Float32Array(Mz.instancesBufferSize / 4)), this._updateInstancedBuffers(zz, bz, tz, nz, uz, Ez), nz.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(zz, uz, bz, Ez) {
        const nz = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.XT()._activeIndices.addCount(zz.indexCount * nz, !1), Ez._currentDrawContext && (Ez._currentDrawContext.useInstancing = !0), this._bind(zz, bz, uz), this._draw(zz, uz, nz), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, nz) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Ez.unbindInstanceAttributes()
      }
      _processInstancedBuffers(zz, uz) {}
      _processRendering(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = this.XT(),
          Hz = tz.uR();
        if (Ez = this._getRenderingFillMode(Ez), iz && uz.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(uz, Ez, bz, Hz), this;
        if (iz) this._renderWithInstances(uz, Ez, nz, bz, Hz);
        else {
          Hz._currentDrawContext && (Hz._currentDrawContext.useInstancing = !1);
          let bz = 0;
          nz.renderSelf[uz._id] && (lz && lz(!1, zz.getWorldMatrix(), Mz), bz++, this._draw(uz, Ez, this._instanceDataStorage.overridenInstanceCount));
          const iz = nz.visibleInstances[uz._id];
          if (iz) {
            const zz = iz.length;
            bz += zz;
            for (let bz = 0; bz < zz; bz++) {
              const zz = iz[bz].getWorldMatrix();
              lz && lz(!0, zz, Mz), this._draw(uz, Ez)
            }
          }
          tz._activeIndices.addCount(uz.indexCount * bz, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz?.instancesBuffer && (uz && zz.instancesBuffer.dispose(), zz.instancesBuffer = null), zz?.instancesPreviousBuffer && (uz && zz.instancesPreviousBuffer.dispose(), zz.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const uz in this._instanceDataStorage.renderPasses) {
          const bz = this._instanceDataStorage.renderPasses[uz];
          this._disposeInstanceDataStorageRenderPass(bz, zz)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, zz), this._userInstancedBuffersStorage) {
          for (const uz in this._userInstancedBuffersStorage.vertexBuffers) {
            const bz = this._userInstancedBuffersStorage.vertexBuffers[uz];
            bz && (zz && bz.dispose(), this._userInstancedBuffersStorage.vertexBuffers[uz] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(zz)
      }
      _releaseRenderPassId(zz) {
        const uz = this._instanceDataStorage.renderPasses[zz];
        if (uz && (this._disposeInstanceDataStorageRenderPass(uz, !0), delete this._instanceDataStorage.renderPasses[zz]), this._userInstancedBuffersStorage?.renderPasses) {
          const uz = this._userInstancedBuffersStorage.renderPasses[zz];
          if (uz)
            for (const zz in uz) uz[zz]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[zz]
        }
        const bz = this._userInstancedBuffersStorage?.interleavedBuffers;
        bz?.[zz] && (bz[zz].buffer.dispose(), delete bz[zz])
      }
      _freeze() {
        if (this.hN) {
          for (let zz = 0; zz < this.hN.length; zz++) this._getInstancesRenderList(zz);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const zz in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[zz].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const iz = this._scene.uR(),
          lz = iz.currentRenderPassId;
        if (void 0 !== zz && (iz.currentRenderPassId = zz), Ez)(!nz || nz && Ez.isInFrustum(this._scene._frustumPlanes)) && this.render(Ez, !!uz, bz);
        else
          for (let Mz = 0; Mz < this.hN.length; Mz++) {
            const zz = this.hN[Mz];
            (!nz || nz && zz.isInFrustum(this._scene._frustumPlanes)) && this.render(zz, !!uz, bz)
          }
        return void 0 !== zz && (iz.currentRenderPassId = lz), this
      }
      directRender() {
        if (!this.hN) return this;
        for (const zz of this.hN) this.render(zz, !1);
        return this
      }
      render(zz, uz, bz) {
        const Ez = this.XT(),
          nz = Ez.uR();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const iz = Ez.activeCameras?.length ?? 0,
          lz = iz > 1 && Ez.activeCamera === Ez.activeCameras[0] || iz <= 1,
          Mz = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== nz.currentRenderPassId;
        if (lz && this._checkOcclusionQuery(Mz) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const tz = this._getInstancesRenderList(zz._id, !!bz);
        if (tz.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Hz = 0,
          Oz = null;
        this.ignoreCameraMaxZ && Ez.activeCamera && !Ez._isInIntermediateRendering() && (Hz = Ez.activeCamera.maxZ, Oz = Ez.activeCamera, Ez.activeCamera.maxZ = 0, Ez.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const pz = zz.getRenderingMesh(),
          dz = tz.hardwareInstancedRendering[zz._id] || pz.hasThinInstances || !!this._userInstancedBuffersStorage && !zz.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Fz = this._instanceDataStorage,
          Zz = zz.lR();
        if (!Zz) return Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), this;
        if (Fz.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Zz) {
          if (Zz._storeEffectOnSubMeshes && !zz._drawWrapper?._wasPreviouslyReady || !Zz._storeEffectOnSubMeshes && !Zz._getDrawWrapper()._wasPreviouslyReady) return Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), this
        } else {
          if (Zz._storeEffectOnSubMeshes) {
            if (!Zz.isReadyForSubMesh(this, zz, dz)) return Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), this
          } else if (!Zz.isReady(this, dz)) return Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Zz
        }
        if (uz) {
          const zz = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === zz.alphaModes.length) nz.setAlphaMode(zz.alphaMode);
          else
            for (let uz = 0; uz < zz.alphaModes.length; uz++) {
              const bz = zz.alphaModes[uz];
              nz.setAlphaMode(void 0 !== bz ? bz : 2, !1, uz)
            }
        }
        let Rz;
        Rz = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? zz._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Kz = Rz?.effect ?? null;
        for (let Nz = 0, vz = Ez._beforeRenderingMeshStage; Nz < vz.length; Nz++) {
          vz[Nz].action(this, zz, tz, Kz)
        }
        if (!Rz || !Kz) return Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), this;
        const wz = bz || this;
        let Xz;
        if (!Fz.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const zz = wz._getWorldMatrixDeterminant();
          Xz = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), zz < 0 && (Xz = Xz === az.c.ClockWiseSideOrientation ? az.c.CounterClockWiseSideOrientation : az.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Xz
        }
        const fz = this._internalMeshDataInfo._effectiveMaterial._preBind(Rz, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && nz.setDepthWrite(!0);
        const sz = this._internalMeshDataInfo._effectiveMaterial,
          rz = sz.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), dz || this._bind(zz, Kz, rz, !1);
        const oz = wz.getWorldMatrix();
        sz._storeEffectOnSubMeshes ? sz.bindForSubMesh(oz, this, zz) : sz.bind(oz, this);
        try {
          Vz.d._BindAttachmentsForEffect(nz, Kz) && (!sz.backFaceCulling && sz.separateCullingPass && (nz.setState(!0, sz.zOffset, !1, !fz, sz.cullBackFaces, sz.stencil, sz.zOffsetUnits), this._processRendering(this, zz, Kz, rz, tz, dz, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), nz.setState(!0, sz.zOffset, !1, fz, sz.cullBackFaces, sz.stencil, sz.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(zz)), this._processRendering(this, zz, Kz, rz, tz, dz, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Vz.d._RestoreAttachments(nz)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Nz = 0, vz = Ez._afterRenderingMeshStage; Nz < vz.length; Nz++) {
          vz[Nz].action(this, zz, tz, Kz)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Oz && (Oz.maxZ = Hz, Ez.updateTransformMatrix(!0)), 2 !== Ez.performancePriority || Fz.isFrozen || this._freeze(), this
      }
      _renderRunFollower(zz, uz) {
        const bz = this._scene,
          Ez = bz._engine;
        if (Ez.isWebGPU || zz._mesh !== this || 0 !== this.instances.length || this.render !== Cz.prototype.render) return !1;
        const nz = zz.lR();
        if (!nz || nz !== bz._cachedMaterial || void 0 === nz._canBindRunFollower) return !1;
        const iz = zz._drawWrapper,
          lz = iz?.effect;
        if (!lz || lz !== bz._cachedEffect || this.visibility !== bz._cachedVisibility || iz._forceRebindOnNextCall) return !1;
        const Mz = this.hasThinInstances;
        if (!Mz && this._userInstancedBuffersStorage) return !1;
        if (!iz._wasPreviouslyReady || iz._wasPreviouslyUsingInstances !== Mz) return !1;
        const tz = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || bz._isInIntermediateRendering() || 0 !== bz._beforeRenderingMeshStage.length || 0 !== bz._afterRenderingMeshStage.length || tz._onBeforeRenderObservable?.hasObservers() || tz._onBeforeBindObservable?.hasObservers() || tz._onAfterRenderObservable?.hasObservers()) return !1;
        const Hz = this.occlusionType;
        if (void 0 !== Hz && Hz !== Pz.e.OCCLUSION_TYPE_NONE || !nz._canBindRunFollower(bz, Ez, this, zz, lz)) return !1;
        const Oz = this._internalAbstractMeshDataInfo,
          pz = Oz._isActiveIntermediate;
        pz ? Oz._isActiveIntermediate = !1 : Oz._isActive = !1;
        const dz = bz.activeCameras?.length ?? 0;
        (dz > 1 && bz.activeCamera === bz.activeCameras[0] || dz <= 1) && this._checkOcclusionQuery(!1);
        const Fz = this._getInstancesRenderList(zz._id);
        if (Fz.mustReturn) return !0;
        if (!Mz && !Fz.renderSelf[zz._id]) return pz ? Oz._isActiveIntermediate = !0 : Oz._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (tz._effectiveMaterial = nz, uz)
          if (1 === nz.alphaModes.length) Ez.setAlphaMode(nz.alphaMode);
          else
            for (let Rz = 0; Rz < nz.alphaModes.length; Rz++) {
              const zz = nz.alphaModes[Rz];
              Ez.setAlphaMode(void 0 !== zz ? zz : 2, !1, Rz)
            }
        if (nz.backFaceCulling || null !== nz.sideOrientation || nz._twoSidedLighting) {
          const zz = this._getWorldMatrixDeterminant();
          let uz = nz._getEffectiveOrientation(this);
          zz < 0 && (uz = uz === az.c.ClockWiseSideOrientation ? az.c.CounterClockWiseSideOrientation : az.c.ClockWiseSideOrientation), tz._effectiveSideOrientation = uz
        }
        nz._preBind(iz, tz._effectiveSideOrientation), nz.forceDepthWrite && Ez.setDepthWrite(!0);
        const Zz = nz.fillMode;
        return Mz || this._bind(zz, lz, Zz, !1), nz._bindRunFollower(this.getWorldMatrix(), this, zz, lz), this._processRendering(this, zz, lz, Zz, Fz, Mz, this._onBeforeDraw, nz), nz.unbind(), 2 === bz.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Az.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Az.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const zz = this.getVerticesData(Az.j.MatricesWeightsKind),
          uz = zz.length;
        for (let bz = 0; bz < uz; bz += 4) {
          const uz = zz[bz] + zz[bz + 1] + zz[bz + 2] + zz[bz + 3];
          if (0 === uz) zz[bz] = 1;
          else {
            const Ez = 1 / uz;
            zz[bz] *= Ez, zz[bz + 1] *= Ez, zz[bz + 2] *= Ez, zz[bz + 3] *= Ez
          }
        }
        this.setVerticesData(Az.j.MatricesWeightsKind, zz)
      }
      _normalizeSkinWeightsAndExtra() {
        const zz = this.getVerticesData(Az.j.MatricesWeightsExtraKind),
          uz = this.getVerticesData(Az.j.MatricesWeightsKind),
          bz = uz.length;
        for (let Ez = 0; Ez < bz; Ez += 4) {
          let bz = uz[Ez] + uz[Ez + 1] + uz[Ez + 2] + uz[Ez + 3];
          if (bz += zz[Ez] + zz[Ez + 1] + zz[Ez + 2] + zz[Ez + 3], 0 === bz) uz[Ez] = 1;
          else {
            const nz = 1 / bz;
            uz[Ez] *= nz, uz[Ez + 1] *= nz, uz[Ez + 2] *= nz, uz[Ez + 3] *= nz, zz[Ez] *= nz, zz[Ez + 1] *= nz, zz[Ez + 2] *= nz, zz[Ez + 3] *= nz
          }
        }
        this.setVerticesData(Az.j.MatricesWeightsKind, uz), this.setVerticesData(Az.j.MatricesWeightsKind, zz)
      }
      validateSkinning() {
        const zz = this.getVerticesData(Az.j.MatricesWeightsExtraKind),
          uz = this.getVerticesData(Az.j.MatricesWeightsKind);
        if (null === uz || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          xZ: "not skinned"
        };
        const bz = uz.length;
        let Ez = 0,
          nz = 0,
          iz = 0,
          lz = 0;
        const Mz = null === zz ? 4 : 8,
          tz = [];
        for (let Fz = 0; Fz <= Mz; Fz++) tz[Fz] = 0;
        for (let Fz = 0; Fz < bz; Fz += 4) {
          let bz = uz[Fz],
            Hz = bz,
            Oz = 0 === Hz ? 0 : 1;
          for (let nz = 1; nz < Mz; nz++) {
            const iz = nz < 4 ? uz[Fz + nz] : zz[Fz + nz - 4];
            iz > bz && Ez++, 0 !== iz && Oz++, Hz += iz, bz = iz
          }
          if (tz[Oz]++, Oz > iz && (iz = Oz), 0 === Hz) nz++;
          else {
            const bz = 1 / Hz;
            let Ez = 0;
            for (let nz = 0; nz < Mz; nz++) Ez += nz < 4 ? Math.abs(uz[Fz + nz] - uz[Fz + nz] * bz) : Math.abs(zz[Fz + nz - 4] - zz[Fz + nz - 4] * bz);
            Ez > .001 && lz++
          }
        }
        const Hz = this.skeleton.bones.length,
          Oz = this.getVerticesData(Az.j.MatricesIndicesKind),
          pz = this.getVerticesData(Az.j.MatricesIndicesExtraKind);
        let dz = 0;
        for (let Fz = 0; Fz < bz; Fz += 4)
          for (let zz = 0; zz < Mz; zz++) {
            const uz = zz < 4 ? Oz[Fz + zz] : pz[Fz + zz - 4];
            (uz >= Hz || uz < 0) && dz++
          }
        return {
          skinned: !0,
          valid: 0 === nz && 0 === lz && 0 === dz,
          xZ: "Number of Weights = " + bz / 4 + "\nMaximum influences = " + iz + "\nMissing Weights = " + nz + "\nNot Sorted = " + Ez + "\nNot Normalized = " + lz + "\nWeightCounts = [" + tz + "]\nNumber of bones = " + Hz + "\nBad Bone Indices = " + dz
        }
      }
      _checkDelayState() {
        const zz = this.XT();
        return this._geometry ? this._geometry.load(zz) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(zz)), this
      }
      _queueLoad(zz) {
        zz.addPendingData(this);
        const uz = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const bz = await zz._loadDelayedFileAsync(this.delayLoadingFile, uz, !0);
            bz instanceof ArrayBuffer ? this._delayLoadingFunction(bz, this) : this._delayLoadingFunction(JSON.parse(bz), this);
            for (const zz of this.instances) zz.refreshBoundingInfo(), zz._syncSubMeshes();
            this.delayLoadState = 1, zz.removePendingData(this)
          } catch (bz) {
            zz.removePendingData(this), zz.Uuz || Uz.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${bz}`)
          }
        })(), this
      }
      isInFrustum(zz) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(zz) && (this._checkDelayState(), !0))
      }
      setMaterialById(zz) {
        const uz = this.XT().materials;
        let bz;
        for (bz = uz.length - 1; bz > -1; bz--)
          if (uz[bz].id === zz) return this.material = uz[bz], this;
        const Ez = this.XT().multiMaterials;
        for (bz = Ez.length - 1; bz > -1; bz--)
          if (Ez[bz].id === zz) return this.material = Ez[bz], this;
        return this
      }
      getAnimatables() {
        const zz = [];
        return this.material && zz.push(this.material), this.skeleton && zz.push(this.skeleton), zz
      }
      bakeTransformIntoVertices(zz) {
        if (!this.isVerticesDataPresent(Az.j.PositionKind)) return this;
        const uz = this.hN.splice(0);
        this._resetPointsArrayCache();
        let bz = this.getVerticesData(Az.j.PositionKind);
        const Ez = vz.n.Zero();
        let nz;
        for (nz = 0; nz < bz.length; nz += 3) vz.n.TransformCoordinatesFromFloatsToRef(bz[nz], bz[nz + 1], bz[nz + 2], zz, Ez).toArray(bz, nz);
        if (this.setVerticesData(Az.j.PositionKind, bz, this.getVertexBuffer(Az.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Az.j.NormalKind)) {
          for (bz = this.getVerticesData(Az.j.NormalKind), nz = 0; nz < bz.length; nz += 3) vz.n.TransformNormalFromFloatsToRef(bz[nz], bz[nz + 1], bz[nz + 2], zz, Ez).normalize().toArray(bz, nz);
          this.setVerticesData(Az.j.NormalKind, bz, this.getVertexBuffer(Az.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Az.j.TangentKind)) {
          for (bz = this.getVerticesData(Az.j.TangentKind), nz = 0; nz < bz.length; nz += 4) vz.n.TransformNormalFromFloatsToRef(bz[nz], bz[nz + 1], bz[nz + 2], zz, Ez).normalize().toArray(bz, nz);
          this.setVerticesData(Az.j.TangentKind, bz, this.getVertexBuffer(Az.j.TangentKind).isUpdatable())
        }
        return zz.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.hN = uz, this
      }
      bakeCurrentTransformIntoVertices() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(zz), this
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (uz && void 0 === uz._addToSceneRootNodes) {
          const bz = uz;
          return Bz.source = this, Bz.doNotCloneChildren = bz.doNotCloneChildren, Bz.clonePhysicsImpostor = bz.clonePhysicsImpostor, Bz.cloneThinInstances = bz.cloneThinInstances, new Cz(zz, this.XT(), Bz)
        }
        return new Cz(zz, this.XT(), uz, this, bz, Ez)
      }
      dispose(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const bz = this._internalMeshDataInfo;
        if (bz._onBeforeDrawObservable && bz._onBeforeDrawObservable.clear(), bz._onBeforeBindObservable && bz._onBeforeBindObservable.clear(), bz._onBeforeRenderObservable && bz._onBeforeRenderObservable.clear(), bz._onAfterRenderObservable && bz._onAfterRenderObservable.clear(), bz._onBetweenPassObservable && bz._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (bz.meshMap)
            for (const zz in bz.meshMap) {
              const uz = bz.meshMap[zz];
              uz && (uz._internalMeshDataInfo._source = null, bz.meshMap[zz] = void 0)
            }
          bz._source && bz._source._internalMeshDataInfo.meshMap && (bz._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const zz = this.XT().meshes;
          for (const uz of zz) {
            const zz = uz;
            zz._internalMeshDataInfo && zz._internalMeshDataInfo._source && zz._internalMeshDataInfo._source === this && (zz._internalMeshDataInfo._source = null)
          }
        }
        bz._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(zz, uz)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(zz, uz, bz, Ez, nz, iz) {
        let lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Mz = arguments.length > 7 ? arguments[7] : void 0;
        const tz = this.XT();
        return (0, fz.t)(zz, (zz => {
          const Mz = zz.width,
            tz = zz.height,
            Hz = this.uR().createCanvas(Mz, tz).getContext("2d");
          Hz.drawImage(zz, 0, 0);
          const Oz = Hz.getImageData(0, 0, Mz, tz).data;
          this.applyDisplacementMapFromBuffer(Oz, Mz, tz, uz, bz, nz, iz, lz), Ez && Ez(this)
        }), Mz || (() => {}), tz.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Az.j.PositionKind) || !this.isVerticesDataPresent(Az.j.NormalKind) || !this.isVerticesDataPresent(Az.j.UVKind)) return Uz.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const tz = this.getVerticesData(Az.j.PositionKind, !0, !0),
          Hz = this.getVerticesData(Az.j.NormalKind),
          Oz = this.getVerticesData(Az.j.UVKind);
        let pz = vz.n.Zero();
        const dz = vz.n.Zero(),
          Fz = vz.m.Zero();
        iz = iz || vz.m.Zero(), lz = lz || new vz.m(1, 1);
        for (let Zz = 0; Zz < tz.length; Zz += 3) {
          vz.n.FromArrayToRef(tz, Zz, pz), vz.n.FromArrayToRef(Hz, Zz, dz), vz.m.FromArrayToRef(Oz, Zz / 3 * 2, Fz);
          const Mz = 4 * ((Math.abs(Fz.x * lz.x + iz.x % 1) * (uz - 1) % uz | 0) + (Math.abs(Fz.y * lz.y + iz.y % 1) * (bz - 1) % bz | 0) * uz),
            Rz = .3 * (zz[Mz] / 255) + .59 * (zz[Mz + 1] / 255) + .11 * (zz[Mz + 2] / 255);
          dz.normalize(), dz.scaleInPlace(Ez + (nz - Ez) * Rz), pz = pz.add(dz), pz.toArray(tz, Zz)
        }
        return Tz.b.ComputeNormals(tz, this.Nbz(), Hz), Mz ? (this.setVerticesData(Az.j.PositionKind, tz), this.setVerticesData(Az.j.NormalKind, Hz), this.setVerticesData(Az.j.UVKind, Oz)) : (this.updateVerticesData(Az.j.PositionKind, tz), this.updateVerticesData(Az.j.NormalKind, Hz)), this
      }
      _getFlattenedNormals(zz, uz) {
        const bz = new Float32Array(3 * zz.length);
        let Ez = 0;
        const nz = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let iz = 0; iz < zz.length; iz += 3) {
          const lz = vz.n.FromArray(uz, 3 * zz[iz]),
            Mz = vz.n.FromArray(uz, 3 * zz[iz + 1]),
            tz = vz.n.FromArray(uz, 3 * zz[iz + 2]),
            Hz = lz.subtract(Mz),
            Oz = tz.subtract(Mz),
            pz = vz.n.Normalize(vz.n.Cross(Hz, Oz));
          nz && pz.scaleInPlace(-1);
          for (let zz = 0; zz < 3; zz++) bz[Ez++] = pz.x, bz[Ez++] = pz.y, bz[Ez++] = pz.z
        }
        return bz
      }
      _convertToUnIndexedMesh() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = this.getVerticesDataKinds().filter((zz => !this.getVertexBuffer(zz)?.getIsInstanced())),
          bz = this.Nbz(!1, !0),
          Ez = {},
          nz = (zz, uz) => {
            const Ez = new Float32Array(bz.length * uz);
            let nz = 0;
            for (let iz = 0; iz < bz.length; iz++)
              for (let lz = 0; lz < uz; lz++) Ez[nz++] = zz[bz[iz] * uz + lz];
            return Ez
          },
          iz = this.lG(),
          lz = this.geometry ? this.hN.slice(0) : [];
        for (const Mz of uz) Ez[Mz] = this.getVerticesData(Mz);
        for (const Mz of uz) {
          const uz = this.getVertexBuffer(Mz),
            iz = uz.getSize();
          if (zz && Mz === Az.j.NormalKind) {
            const zz = this._getFlattenedNormals(bz, Ez[Az.j.PositionKind]);
            this.setVerticesData(Az.j.NormalKind, zz, uz.isUpdatable(), iz)
          } else this.setVerticesData(Mz, nz(Ez[Mz], iz), uz.isUpdatable(), iz)
        }
        if (this.morphTargetManager) {
          for (let uz = 0; uz < this.morphTargetManager.numTargets; uz++) {
            const Ez = this.morphTargetManager.getTarget(uz),
              iz = Ez.getPositions();
            Ez.kiz(nz(iz, 3));
            const lz = Ez.getNormals();
            lz && Ez.setNormals(zz ? this._getFlattenedNormals(bz, iz) : nz(lz, 3));
            const Mz = Ez.getTangents();
            Mz && Ez.setTangents(nz(Mz, 3));
            const tz = Ez.getUVs();
            tz && Ez.setUVs(nz(tz, 2));
            const Hz = Ez.getColors();
            Hz && Ez.setColors(nz(Hz, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Mz = 0; Mz < bz.length; Mz++) bz[Mz] = Mz;
        this.setIndices(bz), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Mz of lz) {
          const zz = Mz.lG();
          Gz.e.AddToMesh(Mz.materialIndex, Mz.indexStart, Mz.indexCount, Mz.indexStart, Mz.indexCount, this).setBoundingInfo(zz)
        }
        return this.setBoundingInfo(iz), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = Tz.b.ExtractFromMesh(this);
        let bz;
        if (zz && this.isVerticesDataPresent(Az.j.NormalKind) && uz.normals) {
          for (bz = 0; bz < uz.normals.length; bz++) uz.normals[bz] *= -1;
          this.setVerticesData(Az.j.NormalKind, uz.normals, this.isVertexBufferUpdatable(Az.j.NormalKind))
        }
        if (uz.indices) {
          let zz;
          for (bz = 0; bz < uz.indices.length; bz += 3) zz = uz.indices[bz + 1], uz.indices[bz + 1] = uz.indices[bz + 2], uz.indices[bz + 2] = zz;
          this.setIndices(uz.indices, null, this.isVertexBufferUpdatable(Az.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const uz = Tz.b.ExtractFromMesh(this),
          bz = uz.indices && !Array.isArray(uz.indices) && Array.from ? Array.from(uz.indices) : uz.indices,
          Ez = uz.positions && !Array.isArray(uz.positions) && Array.from ? Array.from(uz.positions) : uz.positions,
          nz = uz.uvs && !Array.isArray(uz.uvs) && Array.from ? Array.from(uz.uvs) : uz.uvs,
          iz = uz.normals && !Array.isArray(uz.normals) && Array.from ? Array.from(uz.normals) : uz.normals;
        if (bz && Ez) {
          uz.indices = bz, uz.positions = Ez, nz && (uz.uvs = nz), iz && (uz.normals = iz);
          const lz = zz + 1,
            Mz = [];
          for (let zz = 0; zz < lz + 1; zz++) Mz[zz] = [];
          let tz, Hz;
          const Oz = new vz.n(0, 0, 0),
            pz = new vz.n(0, 0, 0),
            dz = new vz.m(0, 0),
            Fz = [],
            Zz = [],
            Rz = [];
          let Kz, wz, Xz, fz = Ez.length;
          nz && (wz = nz.length), iz && (Xz = iz.length);
          for (let zz = 0; zz < bz.length; zz += 3) {
            Zz[0] = bz[zz], Zz[1] = bz[zz + 1], Zz[2] = bz[zz + 2];
            for (let zz = 0; zz < 3; zz++)
              if (tz = Zz[zz], Hz = Zz[(zz + 1) % 3], void 0 === Rz[tz] && void 0 === Rz[Hz] ? (Rz[tz] = [], Rz[Hz] = []) : (void 0 === Rz[tz] && (Rz[tz] = []), void 0 === Rz[Hz] && (Rz[Hz] = [])), void 0 === Rz[tz][Hz] && void 0 === Rz[Hz][tz]) {
                Rz[tz][Hz] = [], Oz.x = (Ez[3 * Hz] - Ez[3 * tz]) / lz, Oz.y = (Ez[3 * Hz + 1] - Ez[3 * tz + 1]) / lz, Oz.z = (Ez[3 * Hz + 2] - Ez[3 * tz + 2]) / lz, iz && (pz.x = (iz[3 * Hz] - iz[3 * tz]) / lz, pz.y = (iz[3 * Hz + 1] - iz[3 * tz + 1]) / lz, pz.z = (iz[3 * Hz + 2] - iz[3 * tz + 2]) / lz), nz && (dz.x = (nz[2 * Hz] - nz[2 * tz]) / lz, dz.y = (nz[2 * Hz + 1] - nz[2 * tz + 1]) / lz), Rz[tz][Hz].push(tz);
                for (let zz = 1; zz < lz; zz++) Rz[tz][Hz].push(Ez.length / 3), Ez[fz++] = Ez[3 * tz] + zz * Oz.x, Ez[fz++] = Ez[3 * tz + 1] + zz * Oz.y, Ez[fz++] = Ez[3 * tz + 2] + zz * Oz.z, iz && (iz[Xz++] = iz[3 * tz] + zz * pz.x, iz[Xz++] = iz[3 * tz + 1] + zz * pz.y, iz[Xz++] = iz[3 * tz + 2] + zz * pz.z), nz && (nz[wz++] = nz[2 * tz] + zz * dz.x, nz[wz++] = nz[2 * tz + 1] + zz * dz.y);
                Rz[tz][Hz].push(Hz), Rz[Hz][tz] = [], Kz = Rz[tz][Hz].length;
                for (let zz = 0; zz < Kz; zz++) Rz[Hz][tz][zz] = Rz[tz][Hz][Kz - 1 - zz]
              } Mz[0][0] = bz[zz], Mz[1][0] = Rz[bz[zz]][bz[zz + 1]][1], Mz[1][1] = Rz[bz[zz]][bz[zz + 2]][1];
            for (let uz = 2; uz < lz; uz++) {
              Mz[uz][0] = Rz[bz[zz]][bz[zz + 1]][uz], Mz[uz][uz] = Rz[bz[zz]][bz[zz + 2]][uz], Oz.x = (Ez[3 * Mz[uz][uz]] - Ez[3 * Mz[uz][0]]) / uz, Oz.y = (Ez[3 * Mz[uz][uz] + 1] - Ez[3 * Mz[uz][0] + 1]) / uz, Oz.z = (Ez[3 * Mz[uz][uz] + 2] - Ez[3 * Mz[uz][0] + 2]) / uz, iz && (pz.x = (iz[3 * Mz[uz][uz]] - iz[3 * Mz[uz][0]]) / uz, pz.y = (iz[3 * Mz[uz][uz] + 1] - iz[3 * Mz[uz][0] + 1]) / uz, pz.z = (iz[3 * Mz[uz][uz] + 2] - iz[3 * Mz[uz][0] + 2]) / uz), nz && (dz.x = (nz[2 * Mz[uz][uz]] - nz[2 * Mz[uz][0]]) / uz, dz.y = (nz[2 * Mz[uz][uz] + 1] - nz[2 * Mz[uz][0] + 1]) / uz);
              for (let zz = 1; zz < uz; zz++) Mz[uz][zz] = Ez.length / 3, Ez[fz++] = Ez[3 * Mz[uz][0]] + zz * Oz.x, Ez[fz++] = Ez[3 * Mz[uz][0] + 1] + zz * Oz.y, Ez[fz++] = Ez[3 * Mz[uz][0] + 2] + zz * Oz.z, iz && (iz[Xz++] = iz[3 * Mz[uz][0]] + zz * pz.x, iz[Xz++] = iz[3 * Mz[uz][0] + 1] + zz * pz.y, iz[Xz++] = iz[3 * Mz[uz][0] + 2] + zz * pz.z), nz && (nz[wz++] = nz[2 * Mz[uz][0]] + zz * dz.x, nz[wz++] = nz[2 * Mz[uz][0] + 1] + zz * dz.y)
            }
            Mz[lz] = Rz[bz[zz + 1]][bz[zz + 2]], Fz.push(Mz[0][0], Mz[1][0], Mz[1][1]);
            for (let zz = 1; zz < lz; zz++) {
              let uz;
              for (uz = 0; uz < zz; uz++) Fz.push(Mz[zz][uz], Mz[zz + 1][uz], Mz[zz + 1][uz + 1]), Fz.push(Mz[zz][uz], Mz[zz + 1][uz + 1], Mz[zz][uz + 1]);
              Fz.push(Mz[zz][uz], Mz[zz + 1][uz], Mz[zz + 1][uz + 1])
            }
          }
          uz.indices = Fz, uz.applyToMesh(this, this.isVertexBufferUpdatable(Az.j.PositionKind))
        } else Uz.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const zz = Tz.b.ExtractFromMesh(this),
          uz = zz.uvs,
          bz = zz.indices,
          Ez = zz.positions,
          nz = zz.colors,
          iz = zz.matricesIndices,
          lz = zz.matricesWeights,
          Mz = zz.matricesIndicesExtra,
          tz = zz.matricesWeightsExtra;
        if (void 0 === bz || void 0 === Ez || null === bz || null === Ez) Uz.e.Warn("VertexData contains empty entries");
        else {
          const Hz = [],
            Oz = [],
            pz = [],
            dz = [],
            Fz = [],
            Zz = [],
            Rz = [],
            Kz = [];
          let wz, Xz = 0;
          const fz = {};
          let sz, rz;
          for (let zz = 0; zz < bz.length; zz += 3) {
            rz = [bz[zz], bz[zz + 1], bz[zz + 2]], wz = [];
            for (let zz = 0; zz < 3; zz++) {
              wz[zz] = "";
              for (let uz = 0; uz < 3; uz++) Math.abs(Ez[3 * rz[zz] + uz]) < 1e-8 && (Ez[3 * rz[zz] + uz] = 0), wz[zz] += Ez[3 * rz[zz] + uz] + "|"
            }
            if (wz[0] != wz[1] && wz[0] != wz[2] && wz[1] != wz[2])
              for (let zz = 0; zz < 3; zz++) {
                if (sz = fz[wz[zz]], void 0 === sz) {
                  fz[wz[zz]] = Xz, sz = Xz++;
                  for (let uz = 0; uz < 3; uz++) Hz.push(Ez[3 * rz[zz] + uz]);
                  if (null !== nz && void 0 !== nz)
                    for (let uz = 0; uz < 4; uz++) dz.push(nz[4 * rz[zz] + uz]);
                  if (null !== uz && void 0 !== uz)
                    for (let bz = 0; bz < 2; bz++) pz.push(uz[2 * rz[zz] + bz]);
                  if (null !== iz && void 0 !== iz)
                    for (let uz = 0; uz < 4; uz++) Fz.push(iz[4 * rz[zz] + uz]);
                  if (null !== lz && void 0 !== lz)
                    for (let uz = 0; uz < 4; uz++) Zz.push(lz[4 * rz[zz] + uz]);
                  if (null !== Mz && void 0 !== Mz)
                    for (let uz = 0; uz < 4; uz++) Rz.push(Mz[4 * rz[zz] + uz]);
                  if (null !== tz && void 0 !== tz)
                    for (let uz = 0; uz < 4; uz++) Kz.push(tz[4 * rz[zz] + uz])
                }
                Oz.push(sz)
              }
          }
          const oz = [];
          Tz.b.ComputeNormals(Hz, Oz, oz), zz.positions = Hz, zz.indices = Oz, zz.normals = oz, null !== uz && void 0 !== uz && (zz.uvs = pz), null !== nz && void 0 !== nz && (zz.colors = dz), null !== iz && void 0 !== iz && (zz.matricesIndices = Fz), null !== lz && void 0 !== lz && (zz.matricesWeights = Zz), null !== Mz && void 0 !== Mz && (zz.matricesIndicesExtra = Rz), null !== lz && void 0 !== lz && (zz.matricesWeightsExtra = Kz), zz.applyToMesh(this, this.isVertexBufferUpdatable(Az.j.PositionKind))
        }
      }
      static _instancedMeshFactory(zz, uz) {
        throw (0, gz.l)("InstancedMesh")
      }
      static _PhysicsImpostorParser(zz, uz, bz) {
        throw (0, gz.l)("PhysicsImpostor")
      }
      createInstance(zz) {
        const uz = Cz._instancedMeshFactory(zz, this);
        return uz.parent = this.parent, uz
      }
      synchronizeInstances() {
        for (let zz = 0; zz < this.instances.length; zz++) {
          this.instances[zz]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(zz) {
        const uz = this.Nbz(),
          bz = this.getVerticesData(Az.j.PositionKind);
        if (!bz || !uz) return this;
        const Ez = [];
        for (let iz = 0; iz < bz.length; iz += 3) Ez.push(vz.n.FromArray(bz, iz));
        const nz = [];
        return Xz.e.SyncAsyncForLoop(Ez.length, 40, (zz => {
          const uz = Ez.length - 1 - zz,
            bz = Ez[uz];
          for (let iz = 0; iz < uz; ++iz) {
            const zz = Ez[iz];
            if (bz.equals(zz)) {
              nz[uz] = iz;
              break
            }
          }
        }), (() => {
          for (let zz = 0; zz < uz.length; ++zz) uz[zz] = nz[uz[zz]] || uz[zz];
          const bz = this.hN.slice(0);
          this.setIndices(uz), this.hN = bz, zz && zz(this)
        })), this
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        zz.name = this.name, zz.id = this.id, zz.uniqueId = this.uniqueId, zz.type = this.getClassName(), rz.e && rz.e.HasTags(this) && (zz.tags = rz.e.GetTags(this)), zz.position = this.position.obz(), this.rotationQuaternion ? zz.rotationQuaternion = this.rotationQuaternion.obz() : this.rotation && (zz.rotation = this.rotation.obz()), zz.ti = this.ti.obz(), this._postMultiplyPivotMatrix ? zz.pivotMatrix = this.getPivotMatrix().obz() : zz.localMatrix = this.getPivotMatrix().obz(), zz.isEnabled = this.isEnabled(!1), zz.isVisible = this.isVisible, zz.infiniteDistance = this.infiniteDistance, zz.pickable = this.pK, zz.receiveShadows = this.receiveShadows, zz.billboardMode = this.billboardMode, zz.visibility = this.visibility, zz.bR = this.bR, zz.checkCollisions = this.checkCollisions, zz.ellipsoid = this.ellipsoid.obz(), zz.ellipsoidOffset = this.ellipsoidOffset.obz(), zz.iR = this.iR, zz.isBlocker = this.isBlocker, zz.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (zz.jT = !0), this.parent && this.parent._serializeAsParent(zz), zz.isUnIndexed = this.isUnIndexed;
        const uz = this._geometry;
        if (uz && this.hN) {
          zz.geometryUniqueId = uz.uniqueId, zz.geometryId = uz.id, zz.hN = [];
          for (let uz = 0; uz < this.hN.length; uz++) {
            const bz = this.hN[uz];
            zz.hN.push({
              materialIndex: bz.materialIndex,
              verticesStart: bz.verticesStart,
              verticesCount: bz.verticesCount,
              indexStart: bz.indexStart,
              indexCount: bz.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (zz.materialUniqueId = this.material.uniqueId, zz.materialId = this.material.id) : (this.material = null, zz.materialUniqueId = this._scene.defaultMaterial.uniqueId, zz.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (zz.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (zz.skeletonId = this.skeleton.id, zz.skeletonUniqueId = this.skeleton.uniqueId, zz.numBoneInfluencers = this.numBoneInfluencers), this.XT()._getComponent(Sz.c.NAME_PHYSICSENGINE)) {
          const uz = this.getPhysicsImpostor?.();
          uz && (zz.physicsMass = uz.getParam("RM"), zz.physicsFriction = uz.getParam("friction"), zz.physicsRestitution = uz.getParam("RM"), zz.physicsImpostor = uz.type)
        }
        this.metadata && (zz.metadata = this.metadata), 0 !== this.meshBlendingTag && (zz.meshBlendingTag = this.meshBlendingTag), zz.instances = [];
        for (let bz = 0; bz < this.instances.length; bz++) {
          const uz = this.instances[bz];
          if (uz.doNotSerialize) continue;
          const Ez = {
            name: uz.name,
            id: uz.id,
            isEnabled: uz.isEnabled(!1),
            isVisible: uz.isVisible,
            pK: uz.pK,
            checkCollisions: uz.checkCollisions,
            position: uz.position.obz(),
            ti: uz.ti.obz()
          };
          if (uz.parent && uz.parent._serializeAsParent(Ez), uz.rotationQuaternion ? Ez.rotationQuaternion = uz.rotationQuaternion.obz() : uz.rotation && (Ez.rotation = uz.rotation.obz()), this.XT()._getComponent(Sz.c.NAME_PHYSICSENGINE)) {
            const zz = uz.getPhysicsImpostor?.();
            zz && (Ez.physicsMass = zz.getParam("RM"), Ez.physicsFriction = zz.getParam("friction"), Ez.physicsRestitution = zz.getParam("RM"), Ez.physicsImpostor = zz.type)
          }
          uz.metadata && (Ez.metadata = uz.metadata), uz.actionManager && (Ez.actions = uz.actionManager.serialize(uz.name)), zz.instances.push(Ez), hz.e.AppendSerializedAnimations(uz, Ez), Ez.al = uz.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (zz.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.yzz
          }, this._userThinInstanceBuffersStorage)) {
          const uz = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const zz in this._userThinInstanceBuffersStorage.data) uz.data[zz] = Array.from(this._userThinInstanceBuffersStorage.data[zz]), uz.sizes[zz] = this._userThinInstanceBuffersStorage.sizes[zz], uz.strides[zz] = this._userThinInstanceBuffersStorage.strides[zz];
          zz.thinInstances.userThinInstance = uz
        }
        return hz.e.AppendSerializedAnimations(this, zz), zz.al = this.serializeAnimationRanges(), zz.layerMask = this.layerMask, zz.alphaIndex = this.alphaIndex, zz.hasVertexAlpha = this.hasVertexAlpha, zz.overlayAlpha = this.overlayAlpha, zz.overlayColor = this.overlayColor.obz(), zz.renderOverlay = this.renderOverlay, zz.applyFog = this.applyFog, this.actionManager && (zz.actions = this.actionManager.serialize(this.name)), zz
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const zz = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (zz && zz.vertexCount) {
          if (zz.vertexCount !== this.getTotalVertices()) return Uz.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (zz.isUsingTextureForTargets) return;
          for (let uz = 0; uz < zz.numInfluencers; uz++) {
            const bz = zz.getActiveTarget(uz),
              Ez = bz.getPositions();
            if (!Ez) return void Uz.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Az.j.PositionKind + uz, Ez, !1, 3);
            const nz = bz.getNormals();
            nz && this.geometry.setVerticesData(Az.j.NormalKind + uz, nz, !1, 3);
            const iz = bz.getTangents();
            iz && this.geometry.setVerticesData(Az.j.TangentKind + uz, iz, !1, 3);
            const lz = bz.getUVs();
            lz && this.geometry.setVerticesData(Az.j.UVKind + "_" + uz, lz, !1, 2);
            const Mz = bz.getUV2s();
            Mz && this.geometry.setVerticesData(Az.j.UV2Kind + "_" + uz, Mz, !1, 2);
            const tz = bz.getColors();
            tz && this.geometry.setVerticesData(Az.j.ColorKind + uz, tz, !1, 4)
          }
        } else {
          let zz = 0;
          for (; this.geometry.isVerticesDataPresent(Az.j.PositionKind + zz);) this.geometry.removeVerticesData(Az.j.PositionKind + zz), this.geometry.isVerticesDataPresent(Az.j.NormalKind + zz) && this.geometry.removeVerticesData(Az.j.NormalKind + zz), this.geometry.isVerticesDataPresent(Az.j.TangentKind + zz) && this.geometry.removeVerticesData(Az.j.TangentKind + zz), this.geometry.isVerticesDataPresent(Az.j.UVKind + "_" + zz) && this.geometry.removeVerticesData(Az.j.UVKind + "_" + zz), this.geometry.isVerticesDataPresent(Az.j.UV2Kind + "_" + zz) && this.geometry.removeVerticesData(Az.j.UV2Kind + "_" + zz), this.geometry.isVerticesDataPresent(Az.j.ColorKind + zz) && this.geometry.removeVerticesData(Az.j.ColorKind + zz), zz++
        }
      }
      static Parse(zz, uz, bz) {
        let Ez, nz = !1;
        if (zz.type && "LinesMesh" === zz.type ? Ez = Cz._LinesMeshParser(zz, uz) : zz.type && "GroundMesh" === zz.type ? Ez = Cz._GroundMeshParser(zz, uz) : zz.type && "GoldbergMesh" === zz.type ? Ez = Cz._GoldbergMeshParser(zz, uz) : zz.type && "GreasedLineMesh" === zz.type ? Ez = Cz._GreasedLineMeshParser(zz, uz) : zz.type && "TrailMesh" === zz.type ? Ez = Cz._TrailMeshParser(zz, uz) : zz.type && "GaussianSplattingMesh" === zz.type ? (Ez = zz._isCompound ? Cz._GaussianSplattingCompoundMeshParser(zz, uz) : Cz._GaussianSplattingMeshParser(zz, uz), nz = !0) : zz.type && "GaussianSplattingPartProxyMesh" === zz.type ? (Ez = Cz._GaussianSplattingPartProxyMeshParser(zz, uz), nz = !0) : Ez = new Cz(zz.name, uz), Ez.id = zz.id, Ez._waitingParsedUniqueId = zz.uniqueId, rz.e && rz.e.AddTagsTo(Ez, zz.tags), Ez.position = vz.n.FromArray(zz.position), void 0 !== zz.metadata && (Ez.metadata = zz.metadata), void 0 !== zz.meshBlendingTag && (Ez.meshBlendingTag = zz.meshBlendingTag), zz.rotationQuaternion ? Ez.rotationQuaternion = vz.h.FromArray(zz.rotationQuaternion) : zz.rotation && (Ez.rotation = vz.n.FromArray(zz.rotation)), Ez.ti = vz.n.FromArray(zz.ti), zz.localMatrix ? Ez.setPreTransformMatrix(vz.d.FromArray(zz.localMatrix)) : zz.pivotMatrix && Ez.setPivotMatrix(vz.d.FromArray(zz.pivotMatrix)), Ez.Zx(zz.isEnabled), Ez.isVisible = zz.isVisible, Ez.infiniteDistance = zz.infiniteDistance, Ez.bR = !!zz.bR, Ez.showBoundingBox = zz.showBoundingBox, Ez.showSubMeshesBoundingBox = zz.showSubMeshesBoundingBox, void 0 !== zz.applyFog && (Ez.applyFog = zz.applyFog), void 0 !== zz.pickable && (Ez.pK = zz.pickable), void 0 !== zz.alphaIndex && (Ez.alphaIndex = zz.alphaIndex), Ez.receiveShadows = zz.receiveShadows, void 0 !== zz.billboardMode && (Ez.billboardMode = zz.billboardMode), void 0 !== zz.visibility && (Ez.visibility = zz.visibility), Ez.checkCollisions = zz.checkCollisions, Ez.iR = !!zz.iR, zz.ellipsoid && (Ez.ellipsoid = vz.n.FromArray(zz.ellipsoid)), zz.ellipsoidOffset && (Ez.ellipsoidOffset = vz.n.FromArray(zz.ellipsoidOffset)), null != zz.overrideMaterialSideOrientation && (Ez.sideOrientation = zz.overrideMaterialSideOrientation), void 0 !== zz.sideOrientation && (Ez.sideOrientation = zz.sideOrientation), void 0 !== zz.isBlocker && (Ez.isBlocker = zz.isBlocker), Ez._shouldGenerateFlatShading = zz.useFlatShading, zz.jT && (Ez._waitingData.jT = zz.jT), void 0 !== zz.parentId && (Ez._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (Ez._waitingParentInstanceIndex = zz.parentInstanceIndex), void 0 !== zz.actions && (Ez._waitingData.actions = zz.actions), void 0 !== zz.overlayAlpha && (Ez.overlayAlpha = zz.overlayAlpha), void 0 !== zz.overlayColor && (Ez.overlayColor = xz.c.FromArray(zz.overlayColor)), void 0 !== zz.renderOverlay && (Ez.renderOverlay = zz.renderOverlay), Ez.isUnIndexed = !!zz.isUnIndexed, Ez.hasVertexAlpha = zz.hasVertexAlpha, zz.delayLoadingFile ? (Ez.delayLoadState = 4, Ez.delayLoadingFile = bz + zz.delayLoadingFile, Ez.buildBoundingInfo(vz.n.FromArray(zz.boundingBoxMinimum), vz.n.FromArray(zz.boundingBoxMaximum)), zz._binaryInfo && (Ez._binaryInfo = zz._binaryInfo), Ez._delayInfo = [], zz.hasUVs && Ez._delayInfo.push(Az.j.UVKind), zz.hasUVs2 && Ez._delayInfo.push(Az.j.UV2Kind), zz.hasUVs3 && Ez._delayInfo.push(Az.j.UV3Kind), zz.hasUVs4 && Ez._delayInfo.push(Az.j.UV4Kind), zz.hasUVs5 && Ez._delayInfo.push(Az.j.UV5Kind), zz.hasUVs6 && Ez._delayInfo.push(Az.j.UV6Kind), zz.hasColors && Ez._delayInfo.push(Az.j.ColorKind), zz.hasMatricesIndices && Ez._delayInfo.push(Az.j.MatricesIndicesKind), zz.hasMatricesWeights && Ez._delayInfo.push(Az.j.MatricesWeightsKind), Ez._delayLoadingFunction = Lz.b._ImportGeometry, qz.b.ForceFullSceneLoadingForIncremental && Ez._checkDelayState()) : nz || Lz.b._ImportGeometry(zz, Ez), zz.materialUniqueId ? Ez._waitingMaterialId = zz.materialUniqueId : zz.materialId && (Ez._waitingMaterialId = zz.materialId), zz.morphTargetManagerId > -1 && (Ez._waitingMorphTargetManagerId = zz.morphTargetManagerId), void 0 !== zz.skeletonId && null !== zz.skeletonId && (Ez.skeleton = uz.getLastSkeletonById(zz.skeletonId), Ez._waitingSkeletonId = zz.skeletonId, zz.numBoneInfluencers && (Ez.numBoneInfluencers = zz.numBoneInfluencers)), void 0 !== zz.skeletonUniqueId && null !== zz.skeletonUniqueId && (Ez._waitingSkeletonUniqueId = zz.skeletonUniqueId), zz.animations) {
          for (let uz = 0; uz < zz.animations.length; uz++) {
            const bz = zz.animations[uz],
              nz = (0, cz.b)("BABYLON.Animation");
            nz && Ez.animations.push(nz.Parse(bz))
          }
          Jz.c.ParseAnimationRanges(Ez, zz, uz)
        }
        if (zz.autoAnimate && uz.beginAnimation(Ez, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), zz.layerMask && !isNaN(zz.layerMask) ? Ez.layerMask = Math.abs(parseInt(zz.layerMask)) : Ez.layerMask = 268435455, zz.physicsImpostor && (Ez.physicsImpostor = Cz._PhysicsImpostorParser(uz, Ez, zz)), zz.lodMeshIds && (Ez._waitingData.lods = {
            ids: zz.lodMeshIds,
            distances: zz.lodDistances ? zz.lodDistances : null,
            coverages: zz.lodCoverages ? zz.lodCoverages : null
          }), zz.instances)
          for (let iz = 0; iz < zz.instances.length; iz++) {
            const bz = zz.instances[iz],
              nz = Ez.createInstance(bz.name);
            if (bz.id && (nz.id = bz.id), rz.e && (bz.tags ? rz.e.AddTagsTo(nz, bz.tags) : rz.e.AddTagsTo(nz, zz.tags)), nz.position = vz.n.FromArray(bz.position), void 0 !== bz.metadata && (nz.metadata = bz.metadata), void 0 !== bz.parentId && (nz._waitingParentId = bz.parentId), void 0 !== bz.parentInstanceIndex && (nz._waitingParentInstanceIndex = bz.parentInstanceIndex), void 0 !== bz.isEnabled && null !== bz.isEnabled && nz.Zx(bz.isEnabled), void 0 !== bz.isVisible && null !== bz.isVisible && (nz.isVisible = bz.isVisible), void 0 !== bz.pK && null !== bz.pK && (nz.pK = bz.pK), bz.rotationQuaternion ? nz.rotationQuaternion = vz.h.FromArray(bz.rotationQuaternion) : bz.rotation && (nz.rotation = vz.n.FromArray(bz.rotation)), nz.ti = vz.n.FromArray(bz.ti), void 0 != bz.checkCollisions && null != bz.checkCollisions && (nz.checkCollisions = bz.checkCollisions), void 0 != bz.pickable && null != bz.pickable && (nz.pK = bz.pickable), void 0 != bz.showBoundingBox && null != bz.showBoundingBox && (nz.showBoundingBox = bz.showBoundingBox), void 0 != bz.showSubMeshesBoundingBox && null != bz.showSubMeshesBoundingBox && (nz.showSubMeshesBoundingBox = bz.showSubMeshesBoundingBox), void 0 != bz.alphaIndex && null != bz.showSubMeshesBoundingBox && (nz.alphaIndex = bz.alphaIndex), bz.physicsImpostor && (nz.physicsImpostor = Cz._PhysicsImpostorParser(uz, nz, bz)), void 0 !== bz.actions && (nz._waitingData.actions = bz.actions), bz.animations) {
              for (let zz = 0; zz < bz.animations.length; zz++) {
                const uz = bz.animations[zz],
                  Ez = (0, cz.b)("BABYLON.Animation");
                Ez && nz.animations.push(Ez.Parse(uz))
              }
              Jz.c.ParseAnimationRanges(nz, bz, uz), bz.autoAnimate && uz.beginAnimation(nz, bz.autoAnimateFrom, bz.autoAnimateTo, bz.autoAnimateLoop, bz.autoAnimateSpeed || 1)
            }
          }
        if (zz.thinInstances) {
          const uz = zz.thinInstances;
          if (Ez.yzz = !!uz.enablePicking, uz.matrixData ? (Ez.v_("matrix", new Float32Array(uz.matrixData), 16, !1), Ez._thinInstanceDataStorage.matrixBufferSize = uz.matrixBufferSize, Ez._thinInstanceDataStorage.instancesCount = uz.instancesCount) : Ez._thinInstanceDataStorage.matrixBufferSize = uz.matrixBufferSize, zz.thinInstances.userThinInstance) {
            const uz = zz.thinInstances.userThinInstance;
            for (const zz in uz.data) Ez.v_(zz, new Float32Array(uz.data[zz]), uz.strides[zz], !1), Ez._userThinInstanceBuffersStorage.sizes[zz] = uz.sizes[zz]
          }
        }
        return Ez
      }
      setPositionsForCPUSkinning() {
        const zz = this._internalMeshDataInfo;
        if (!zz._sourcePositions) {
          const uz = this.getVerticesData(Az.j.PositionKind);
          if (!uz) return zz._sourcePositions;
          zz._sourcePositions = new Float32Array(uz), this.isVertexBufferUpdatable(Az.j.PositionKind) || this.setVerticesData(Az.j.PositionKind, uz, !0)
        }
        return zz._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const zz = this._internalMeshDataInfo;
        if (!zz._sourceNormals) {
          const uz = this.getVerticesData(Az.j.NormalKind);
          if (!uz) return zz._sourceNormals;
          zz._sourceNormals = new Float32Array(uz), this.isVertexBufferUpdatable(Az.j.NormalKind) || this.setVerticesData(Az.j.NormalKind, uz, !0)
        }
        return zz._sourceNormals
      }
      applySkeleton(zz) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.XT().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.XT().getFrameId(), !this.isVerticesDataPresent(Az.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Az.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Az.j.MatricesWeightsKind)) return this;
        const uz = this.isVerticesDataPresent(Az.j.NormalKind),
          bz = this._internalMeshDataInfo;
        if (!bz._sourcePositions) {
          const zz = this.hN.slice();
          this.setPositionsForCPUSkinning(), this.hN = zz
        }
        uz && !bz._sourceNormals && this.setNormalsForCPUSkinning();
        let Ez = this.getVerticesData(Az.j.PositionKind);
        if (!Ez) return this;
        Ez instanceof Float32Array || (Ez = new Float32Array(Ez));
        let nz = this.getVerticesData(Az.j.NormalKind);
        if (uz) {
          if (!nz) return this;
          nz instanceof Float32Array || (nz = new Float32Array(nz))
        }
        const iz = this.getVerticesData(Az.j.MatricesIndicesKind),
          lz = this.getVerticesData(Az.j.MatricesWeightsKind);
        if (!lz || !iz) return this;
        const Mz = this.numBoneInfluencers > 4,
          tz = Mz ? this.getVerticesData(Az.j.MatricesIndicesExtraKind) : null,
          Hz = Mz ? this.getVerticesData(Az.j.MatricesWeightsExtraKind) : null,
          Oz = zz.getTransformMatrices(this),
          pz = vz.n.Zero(),
          dz = new vz.d,
          Fz = new vz.d;
        let Zz, Rz = 0;
        for (let Kz = 0; Kz < Ez.length; Kz += 3, Rz += 4) {
          let zz;
          for (Zz = 0; Zz < 4; Zz++) zz = lz[Rz + Zz], zz > 0 && (vz.d.FromFloat32ArrayToRefScaled(Oz, Math.floor(16 * iz[Rz + Zz]), zz, Fz), dz.addToSelf(Fz));
          if (Mz)
            for (Zz = 0; Zz < 4; Zz++) zz = Hz[Rz + Zz], zz > 0 && (vz.d.FromFloat32ArrayToRefScaled(Oz, Math.floor(16 * tz[Rz + Zz]), zz, Fz), dz.addToSelf(Fz));
          vz.n.TransformCoordinatesFromFloatsToRef(bz._sourcePositions[Kz], bz._sourcePositions[Kz + 1], bz._sourcePositions[Kz + 2], dz, pz), pz.toArray(Ez, Kz), uz && (vz.n.TransformNormalFromFloatsToRef(bz._sourceNormals[Kz], bz._sourceNormals[Kz + 1], bz._sourceNormals[Kz + 2], dz, pz), pz.toArray(nz, Kz)), dz.reset()
        }
        return this.updateVerticesData(Az.j.PositionKind, Ez), uz && this.updateVerticesData(Az.j.NormalKind, nz), this
      }
      static MinMax(zz) {
        let uz = null,
          bz = null;
        for (const Ez of zz) {
          const zz = Ez.lG().boundingBox;
          uz && bz ? (uz.minimizeInPlace(zz.minimumWorld), bz.maximizeInPlace(zz.maximumWorld)) : (uz = zz.minimumWorld.clone(), bz = zz.maximumWorld.clone())
        }
        return uz && bz ? {
          min: uz,
          max: bz
        } : {
          min: vz.n.Zero(),
          max: vz.n.Zero()
        }
      }
      static Center(zz) {
        const uz = zz instanceof Array ? Cz.MinMax(zz) : zz;
        return vz.n.Center(uz.min, uz.max)
      }
      static MergeMeshes(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        return (0, oz.q)(Cz._MergeMeshesCoroutine(zz, uz, bz, Ez, nz, iz, !1))
      }
      static async MergeMeshesAsync(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, oz.m)(Cz._MergeMeshesCoroutine(zz, uz, bz, Ez, nz, iz, !0), (0, oz.e)())
      }
      static * _MergeMeshesCoroutine(zz) {
        let uz, bz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ez = arguments.length > 2 ? arguments[2] : void 0,
          nz = arguments.length > 3 ? arguments[3] : void 0,
          iz = arguments.length > 4 ? arguments[4] : void 0,
          lz = arguments.length > 5 ? arguments[5] : void 0,
          Mz = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (zz = zz.filter(Boolean)).length) return null;
        if (!Ez) {
          let bz = 0;
          for (uz = 0; uz < zz.length; uz++)
            if (bz += zz[uz].getTotalVertices(), bz >= 65536) return Uz.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const tz = zz[0];
        lz && (iz = !1, zz.sort(((zz, uz) => (zz.material?.uniqueId ?? -1) - (uz.material?.uniqueId ?? -1))));
        const Hz = new Array,
          Oz = new Array,
          pz = new Array,
          dz = zz[0].sideOrientation;
        for (uz = 0; uz < zz.length; uz++) {
          const bz = zz[uz];
          if (bz.qT) return Uz.e.Warn("Cannot merge instance meshes."), null;
          if (dz !== bz.sideOrientation) return Uz.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (iz || lz) {
            const zz = pz.reduce(((zz, uz) => Math.max(zz, uz.start + uz.count)), 0);
            if (lz)
              if (bz.material) {
                const uz = bz.material;
                if (uz instanceof mz.d) {
                  for (let zz = 0; zz < uz.J_.length; zz++) Hz.indexOf(uz.J_[zz]) < 0 && Hz.push(uz.J_[zz]);
                  for (let Ez = 0; Ez < bz.hN.length; Ez++) Oz.push(Hz.indexOf(uz.J_[bz.hN[Ez].materialIndex])), pz.push({
                    start: zz + bz.hN[Ez].indexStart,
                    count: bz.hN[Ez].indexCount
                  })
                } else {
                  Hz.indexOf(uz) < 0 && Hz.push(uz);
                  for (let Ez = 0; Ez < bz.hN.length; Ez++) Oz.push(Hz.indexOf(uz)), pz.push({
                    start: zz + bz.hN[Ez].indexStart,
                    count: bz.hN[Ez].indexCount
                  })
                }
              } else
                for (let uz = 0; uz < bz.hN.length; uz++) Oz.push(0), pz.push({
                  start: zz + bz.hN[uz].indexStart,
                  count: bz.hN[uz].indexCount
                });
            else pz.push({
              start: zz,
              count: bz.getTotalIndices()
            })
          }
        }
        if (lz && pz.length > 1) {
          let zz = 0;
          for (let uz = 1; uz < pz.length; uz++) {
            const bz = pz[zz],
              Ez = pz[uz];
            Oz[uz] === Oz[zz] && bz.start + bz.count === Ez.start ? bz.count += Ez.count : (zz++, pz[zz] = Ez, Oz[zz] = Oz[uz])
          }
          pz.length = zz + 1, Oz.length = zz + 1
        }
        const Fz = zz => {
            const uz = zz.computeWorldMatrix(!0);
            return {
              vertexData: Tz.b.ExtractFromMesh(zz, !1, !1),
              transform: uz
            }
          },
          {
            vertexData: Zz,
            transform: Rz
          } = Fz(zz[0]);
        Mz && (yield);
        const Kz = new Array(zz.length - 1);
        for (let oz = 1; oz < zz.length; oz++) Kz[oz - 1] = Fz(zz[oz]), Mz && (yield);
        const wz = Zz._mergeCoroutine(Rz, Kz, Ez, Mz, !bz);
        let Xz = wz.next();
        for (; !Xz.done;) Mz && (yield), Xz = wz.next();
        const fz = Xz.value;
        nz || (nz = new Cz(tz.name + "_merged", tz.XT()));
        const sz = fz._applyToCoroutine(nz, void 0, Mz);
        let rz = sz.next();
        for (; !rz.done;) Mz && (yield), rz = sz.next();
        if (nz.checkCollisions = tz.checkCollisions, nz.sideOrientation = tz.sideOrientation, bz)
          for (uz = 0; uz < zz.length; uz++) zz[uz].dispose();
        if (iz || lz) {
          for (nz.releaseSubMeshes(), uz = 0; uz < pz.length;) Gz.e.CreateFromIndices(0, pz[uz].start, pz[uz].count, nz, void 0, !1), uz++;
          for (const zz of nz.hN) zz.refreshBoundingInfo();
          nz.computeWorldMatrix(!0)
        }
        if (lz) {
          const zz = new mz.d(tz.name + "_merged", tz.XT());
          zz.J_ = Hz;
          for (let uz = 0; uz < nz.hN.length; uz++) nz.hN[uz].materialIndex = Oz[uz];
          nz.material = zz
        } else nz.material = tz.material;
        return nz
      }
      n_(zz) {
        zz._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(zz)
      }
      l_(zz) {
        const uz = zz._indexInSourceMeshInstanceArray;
        if (-1 != uz) {
          if (uz !== this.instances.length - 1) {
            const zz = this.instances[this.instances.length - 1];
            this.instances[uz] = zz, zz._indexInSourceMeshInstanceArray = uz
          }
          zz._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === az.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(zz) {
        const uz = this.XT();
        return uz.forcePointsCloud ? az.c.PointFillMode : uz.forceWireframe ? az.c.WireFrameFillMode : this.overrideRenderingFillMode ?? zz
      }
      setMaterialByID(zz) {
        return this.setMaterialById(zz)
      }
      static CreateRibbon(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(zz, uz, bz, Ez, nz, iz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(zz, uz, bz, Ez, nz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(zz, uz, bz, Ez, nz, iz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(zz, uz, bz, Ez) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(zz, uz, bz, Ez, nz, iz, lz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(zz, uz, bz, Ez, nz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(zz, uz, bz, Ez, nz, iz, lz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(zz, uz, bz, Ez, nz, iz, lz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(zz, uz, bz, Ez, nz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(zz, uz, bz, Ez, nz, iz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(zz, uz, bz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(zz, uz, bz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(zz, uz, bz, Ez, nz, iz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(zz, uz, bz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(zz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Cz.FRONTSIDE = Tz.b.FRONTSIDE, Cz.BACKSIDE = Tz.b.BACKSIDE, Cz.DOUBLESIDE = Tz.b.DOUBLESIDE, Cz.DEFAULTSIDE = Tz.b.DEFAULTSIDE, Cz.NO_CAP = 0, Cz.CAP_START = 1, Cz.CAP_END = 2, Cz.CAP_ALL = 3, Cz.NO_FLIP = 0, Cz.FLIP_TILE = 1, Cz.ROTATE_TILE = 2, Cz.FLIP_ROW = 3, Cz.ROTATE_ROW = 4, Cz.FLIP_N_ROTATE_TILE = 5, Cz.FLIP_N_ROTATE_ROW = 6, Cz.CENTER = 0, Cz.LEFT = 1, Cz.RIGHT = 2, Cz.TOP = 3, Cz.BOTTOM = 4, Cz.INSTANCEDMESH_SORT_TRANSPARENT = !1, Cz._GroundMeshParser = (zz, uz) => {
      throw (0, gz.l)("GroundMesh")
    }, Cz._GoldbergMeshParser = (zz, uz) => {
      throw (0, gz.l)("GoldbergMesh")
    }, Cz._LinesMeshParser = (zz, uz) => {
      throw (0, gz.l)("LinesMesh")
    }, Cz._GreasedLineMeshParser = (zz, uz) => {
      throw (0, gz.l)("GreasedLineMesh")
    }, Cz._GreasedLineRibbonMeshParser = (zz, uz) => {
      throw (0, gz.l)("GreasedLineRibbonMesh")
    }, Cz._TrailMeshParser = (zz, uz) => {
      throw (0, gz.l)("TrailMesh")
    }, Cz._GaussianSplattingMeshParser = (zz, uz) => {
      throw (0, gz.l)("GaussianSplattingMesh")
    }, Cz._GaussianSplattingPartProxyMeshParser = (zz, uz) => {
      throw (0, gz.l)("GaussianSplattingPartProxyMesh")
    }, Cz._GaussianSplattingCompoundMeshParser = (zz, uz) => {
      throw (0, gz.l)("GaussianSplattingCompoundMesh")
    };
    let Yz = !1;

    function kz() {
      Yz || (Yz = !0, (0, cz.c)("BABYLON.Mesh", Cz))
    }(Ez = Cz.prototype).YL ?? (Ez.YL = (0, gz.h)("Mesh", "YL")), (nz = Cz.prototype).simplify ?? (nz.simplify = (0, gz.h)("Mesh", "simplify")), (iz = Cz.prototype).thinInstanceAdd ?? (iz.thinInstanceAdd = (0, gz.h)("Mesh", "thinInstanceAdd")), (lz = Cz.prototype).thinInstanceAddSelf ?? (lz.thinInstanceAddSelf = (0, gz.h)("Mesh", "thinInstanceAddSelf")), (Mz = Cz.prototype).thinInstanceRegisterAttribute ?? (Mz.thinInstanceRegisterAttribute = (0, gz.h)("Mesh", "thinInstanceRegisterAttribute")), (tz = Cz.prototype).thinInstanceSetMatrixAt ?? (tz.thinInstanceSetMatrixAt = (0, gz.h)("Mesh", "thinInstanceSetMatrixAt")), (Hz = Cz.prototype).thinInstanceSetAttributeAt ?? (Hz.thinInstanceSetAttributeAt = (0, gz.h)("Mesh", "thinInstanceSetAttributeAt")), (Oz = Cz.prototype).v_ ?? (Oz.v_ = (0, gz.h)("Mesh", "v_")), (pz = Cz.prototype).thinInstanceGetWorldMatrices ?? (pz.thinInstanceGetWorldMatrices = (0, gz.h)("Mesh", "thinInstanceGetWorldMatrices")), (dz = Cz.prototype).R_ ?? (dz.R_ = (0, gz.h)("Mesh", "R_")), (Fz = Cz.prototype).thinInstancePartialBufferUpdate ?? (Fz.thinInstancePartialBufferUpdate = (0, gz.h)("Mesh", "thinInstancePartialBufferUpdate")), (Zz = Cz.prototype).thinInstanceRefreshBoundingInfo ?? (Zz.thinInstanceRefreshBoundingInfo = (0, gz.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (Rz = Cz.prototype).getEmittedParticleSystems ?? (Rz.getEmittedParticleSystems = (0, gz.h)("Mesh", "getEmittedParticleSystems")), (Kz = Cz.prototype).getHierarchyEmittedParticleSystems ?? (Kz.getHierarchyEmittedParticleSystems = (0, gz.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Cz.prototype, "edgesShareWithInstances") || Object.defineProperty(Cz.prototype, "edgesShareWithInstances", (0, gz.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Cz.prototype, "yzz") || Object.defineProperty(Cz.prototype, "yzz", (0, gz.f)("Mesh", "yzz")), Object.getOwnPropertyDescriptor(Cz.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Cz.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, gz.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Cz.prototype, "W8") || Object.defineProperty(Cz.prototype, "W8", (0, gz.f)("Mesh", "W8"))
  },
  39596: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz
    });
    var Ez = bz(39170),
      nz = bz(36519),
      iz = bz(39299),
      lz = bz(39061),
      Mz = bz(36715),
      tz = bz(38060),
      Hz = bz(39172),
      Oz = bz(39589),
      pz = bz(39212),
      dz = bz(39459);
    class Fz {}
    let Zz = (() => {
      var zz;
      let uz, bz, Zz, Rz, Kz = [];
      return zz = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Oz.i)(this._applyToCoroutine.bind(this)), this.uniqueId = zz._UniqueIdGenerator, zz._UniqueIdGenerator++
        }
        set(zz, uz) {
          switch (zz.length || tz.e.Warn(`Setting vertex data kind '${uz}' with an empty array`), uz) {
            case iz.j.PositionKind:
              this.positions = zz;
              break;
            case iz.j.NormalKind:
              this.normals = zz;
              break;
            case iz.j.TangentKind:
              this.tangents = zz;
              break;
            case iz.j.UVKind:
              this.uvs = zz;
              break;
            case iz.j.UV2Kind:
              this.uvs2 = zz;
              break;
            case iz.j.UV3Kind:
              this.uvs3 = zz;
              break;
            case iz.j.UV4Kind:
              this.uvs4 = zz;
              break;
            case iz.j.UV5Kind:
              this.uvs5 = zz;
              break;
            case iz.j.UV6Kind:
              this.uvs6 = zz;
              break;
            case iz.j.ColorKind:
              this.colors = zz;
              break;
            case iz.j.MatricesIndicesKind:
              this.matricesIndices = zz;
              break;
            case iz.j.MatricesWeightsKind:
              this.matricesWeights = zz;
              break;
            case iz.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = zz;
              break;
            case iz.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = zz
          }
        }
        applyToMesh(zz, uz) {
          return this._applyTo(zz, uz, !1), this
        }
        applyToGeometry(zz, uz) {
          return this._applyTo(zz, uz, !1), this
        }
        updateMesh(zz) {
          return this._update(zz), this
        }
        updateGeometry(zz) {
          return this._update(zz), this
        }* _applyToCoroutine(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            bz = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (zz.setVerticesData(iz.j.PositionKind, this.positions, uz), bz && (yield)), this.normals && (zz.setVerticesData(iz.j.NormalKind, this.normals, uz), bz && (yield)), this.tangents && (zz.setVerticesData(iz.j.TangentKind, this.tangents, uz), bz && (yield)), this.uvs && (zz.setVerticesData(iz.j.UVKind, this.uvs, uz), bz && (yield)), this.uvs2 && (zz.setVerticesData(iz.j.UV2Kind, this.uvs2, uz), bz && (yield)), this.uvs3 && (zz.setVerticesData(iz.j.UV3Kind, this.uvs3, uz), bz && (yield)), this.uvs4 && (zz.setVerticesData(iz.j.UV4Kind, this.uvs4, uz), bz && (yield)), this.uvs5 && (zz.setVerticesData(iz.j.UV5Kind, this.uvs5, uz), bz && (yield)), this.uvs6 && (zz.setVerticesData(iz.j.UV6Kind, this.uvs6, uz), bz && (yield)), this.colors) {
            const Ez = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            zz.setVerticesData(iz.j.ColorKind, this.colors, uz, Ez), this.hasVertexAlpha && void 0 !== zz.hasVertexAlpha && (zz.hasVertexAlpha = !0), bz && (yield)
          }
          if (this.matricesIndices && (zz.setVerticesData(iz.j.MatricesIndicesKind, this.matricesIndices, uz), bz && (yield)), this.matricesWeights && (zz.setVerticesData(iz.j.MatricesWeightsKind, this.matricesWeights, uz), bz && (yield)), this.matricesIndicesExtra && (zz.setVerticesData(iz.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, uz), bz && (yield)), this.matricesWeightsExtra && (zz.setVerticesData(iz.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, uz), bz && (yield)), this.indices ? (zz.setIndices(this.indices, null, uz), bz && (yield)) : zz.setIndices([], null), zz.hN && this.materialInfos && this.materialInfos.length > 1) {
            const uz = zz;
            uz.hN = [];
            for (const zz of this.materialInfos) new dz.e(zz.materialIndex, zz.verticesStart, zz.verticesCount, zz.indexStart, zz.indexCount, uz)
          }
          return this
        }
        _update(zz, uz, bz) {
          return this.positions && zz.updateVerticesData(iz.j.PositionKind, this.positions, uz, bz), this.normals && zz.updateVerticesData(iz.j.NormalKind, this.normals, uz, bz), this.tangents && zz.updateVerticesData(iz.j.TangentKind, this.tangents, uz, bz), this.uvs && zz.updateVerticesData(iz.j.UVKind, this.uvs, uz, bz), this.uvs2 && zz.updateVerticesData(iz.j.UV2Kind, this.uvs2, uz, bz), this.uvs3 && zz.updateVerticesData(iz.j.UV3Kind, this.uvs3, uz, bz), this.uvs4 && zz.updateVerticesData(iz.j.UV4Kind, this.uvs4, uz, bz), this.uvs5 && zz.updateVerticesData(iz.j.UV5Kind, this.uvs5, uz, bz), this.uvs6 && zz.updateVerticesData(iz.j.UV6Kind, this.uvs6, uz, bz), this.colors && zz.updateVerticesData(iz.j.ColorKind, this.colors, uz, bz), this.matricesIndices && zz.updateVerticesData(iz.j.MatricesIndicesKind, this.matricesIndices, uz, bz), this.matricesWeights && zz.updateVerticesData(iz.j.MatricesWeightsKind, this.matricesWeights, uz, bz), this.matricesIndicesExtra && zz.updateVerticesData(iz.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, uz, bz), this.matricesWeightsExtra && zz.updateVerticesData(iz.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, uz, bz), this.indices && zz.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const iz = nz.l.ER[0],
            lz = nz.l.ER[1];
          for (let Mz = bz; Mz < bz + Ez; Mz += 3) nz.n.FromArrayToRef(zz, Mz, iz), nz.n.TransformCoordinatesToRef(iz, uz, lz), zz[Mz] = lz.x, zz[Mz + 1] = lz.y, zz[Mz + 2] = lz.z
        }
        static _TransformVector3Normals(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const iz = nz.l.ER[0],
            lz = nz.l.ER[1];
          for (let Mz = bz; Mz < bz + Ez; Mz += 3) nz.n.FromArrayToRef(zz, Mz, iz), nz.n.TransformNormalToRef(iz, uz, lz), zz[Mz] = lz.x, zz[Mz + 1] = lz.y, zz[Mz + 2] = lz.z
        }
        static _TransformVector4Normals(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const iz = nz.l.Vector4[0],
            lz = nz.l.Vector4[1];
          for (let Mz = bz; Mz < bz + Ez; Mz += 4) nz.r.FromArrayToRef(zz, Mz, iz), nz.r.TransformNormalToRef(iz, uz, lz), zz[Mz] = lz.x, zz[Mz + 1] = lz.y, zz[Mz + 2] = lz.z, zz[Mz + 3] = lz.w
        }
        static _FlipFaces(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length;
          for (let Ez = uz; Ez < uz + bz; Ez += 3) {
            const uz = zz[Ez + 1];
            zz[Ez + 1] = zz[Ez + 2], zz[Ez + 2] = uz
          }
        }
        transform(uz) {
          const bz = uz.determinant() < 0;
          return this.positions && zz._TransformVector3Coordinates(this.positions, uz), this.normals && zz._TransformVector3Normals(this.normals, uz), this.tangents && zz._TransformVector4Normals(this.tangents, uz), bz && this.indices && zz._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const uz = [];
          for (const bz of this.materialInfos) {
            const Ez = new zz;
            if (this.positions && (Ez.positions = this.positions.slice(3 * bz.verticesStart, 3 * (bz.verticesCount + bz.verticesStart))), this.normals && (Ez.normals = this.normals.slice(3 * bz.verticesStart, 3 * (bz.verticesCount + bz.verticesStart))), this.tangents && (Ez.tangents = this.tangents.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.colors && (Ez.colors = this.colors.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.uvs && (Ez.uvs = this.uvs.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.uvs2 && (Ez.uvs2 = this.uvs2.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.uvs3 && (Ez.uvs3 = this.uvs3.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.uvs4 && (Ez.uvs4 = this.uvs4.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.uvs5 && (Ez.uvs5 = this.uvs5.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.uvs6 && (Ez.uvs6 = this.uvs6.slice(2 * bz.verticesStart, 2 * (bz.verticesCount + bz.verticesStart))), this.matricesIndices && (Ez.matricesIndices = this.matricesIndices.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.matricesIndicesExtra && (Ez.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.matricesWeights && (Ez.matricesWeights = this.matricesWeights.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.matricesWeightsExtra && (Ez.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * bz.verticesStart, 4 * (bz.verticesCount + bz.verticesStart))), this.indices) {
              Ez.indices = [];
              for (let zz = bz.indexStart; zz < bz.indexStart + bz.indexCount; zz++) Ez.indices.push(this.indices[zz] - bz.verticesStart)
            }
            const nz = new Fz;
            nz.indexStart = 0, nz.indexCount = Ez.indices ? Ez.indices.length : 0, nz.materialIndex = bz.materialIndex, nz.verticesStart = 0, nz.verticesCount = (Ez.positions ? Ez.positions.length : 0) / 3, Ez.materialInfos = [nz], uz.push(Ez)
          }
          return uz
        }
        merge(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const iz = Array.isArray(zz) ? zz.map((zz => ({
            vertexData: zz
          }))) : [{
            vertexData: zz
          }];
          return (0, Oz.q)(this._mergeCoroutine(void 0, iz, uz, !1, bz, Ez, nz))
        }* _mergeCoroutine(uz, bz) {
          let Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            nz = arguments.length > 3 ? arguments[3] : void 0,
            lz = arguments.length > 4 ? arguments[4] : void 0,
            Mz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            tz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Hz = bz.map((zz => zz.vertexData)),
            Oz = this;
          if (tz)
            for (const zz of Hz) zz && (zz._validate(), !this.normals && zz.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && zz.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && zz.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && zz.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && zz.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && zz.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && zz.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && zz.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && zz.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && zz.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && zz.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && zz.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && zz.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const zz of Hz)
            if (zz)
              if (tz) this.normals && !zz.normals && (zz.normals = new Float32Array(zz.positions.length)), this.tangents && !zz.tangents && (zz.tangents = new Float32Array(zz.positions.length / 3 * 4)), this.uvs && !zz.uvs && (zz.uvs = new Float32Array(zz.positions.length / 3 * 2)), this.uvs2 && !zz.uvs2 && (zz.uvs2 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs3 && !zz.uvs3 && (zz.uvs3 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs4 && !zz.uvs4 && (zz.uvs4 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs5 && !zz.uvs5 && (zz.uvs5 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs6 && !zz.uvs6 && (zz.uvs6 = new Float32Array(zz.positions.length / 3 * 2)), this.colors && !zz.colors && (zz.colors = new Float32Array(zz.positions.length / 3 * 4), zz.colors.fill(1)), this.matricesIndices && !zz.matricesIndices && (zz.matricesIndices = new Float32Array(zz.positions.length / 3 * 4)), this.matricesWeights && !zz.matricesWeights && (zz.matricesWeights = new Float32Array(zz.positions.length / 3 * 4)), this.matricesIndicesExtra && !zz.matricesIndicesExtra && (zz.matricesIndicesExtra = new Float32Array(zz.positions.length / 3 * 4)), this.matricesWeightsExtra && !zz.matricesWeightsExtra && (zz.matricesWeightsExtra = new Float32Array(zz.positions.length / 3 * 4));
              else if (zz._validate(), !this.normals !== !zz.normals || !this.tangents !== !zz.tangents || !this.uvs !== !zz.uvs || !this.uvs2 !== !zz.uvs2 || !this.uvs3 !== !zz.uvs3 || !this.uvs4 !== !zz.uvs4 || !this.uvs5 !== !zz.uvs5 || !this.uvs6 !== !zz.uvs6 || !this.colors !== !zz.colors || !this.matricesIndices !== !zz.matricesIndices || !this.matricesWeights !== !zz.matricesWeights || !this.matricesIndicesExtra !== !zz.matricesIndicesExtra || !this.matricesWeightsExtra !== !zz.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Mz) {
            let zz, Ez = 0,
              nz = 0;
            const iz = [];
            let lz = null;
            const Mz = [];
            for (const bz of this.splitBasedOnMaterialID()) Mz.push({
              vertexData: bz,
              transform: uz
            });
            for (const uz of bz)
              if (uz.vertexData)
                for (const zz of uz.vertexData.splitBasedOnMaterialID()) Mz.push({
                  vertexData: zz,
                  transform: uz.transform
                });
            Mz.sort(((zz, uz) => {
              const bz = zz.vertexData.materialInfos ? zz.vertexData.materialInfos[0].materialIndex : 0,
                Ez = uz.vertexData.materialInfos ? uz.vertexData.materialInfos[0].materialIndex : 0;
              return bz > Ez ? 1 : bz === Ez ? 0 : -1
            }));
            for (const uz of Mz) {
              const bz = uz.vertexData;
              if (zz = bz.materialInfos ? bz.materialInfos[0].materialIndex : 0, lz && lz.materialIndex === zz) lz.indexCount += bz.indices.length, lz.verticesCount += bz.positions.length / 3;
              else {
                const uz = new Fz;
                uz.materialIndex = zz, uz.indexStart = Ez, uz.indexCount = bz.indices.length, uz.verticesStart = nz, uz.verticesCount = bz.positions.length / 3, iz.push(uz), lz = uz
              }
              Ez += bz.indices.length, nz += bz.positions.length / 3
            }
            const tz = Mz.splice(0, 1)[0];
            Oz = tz.vertexData, uz = tz.transform, Hz = Mz.map((zz => zz.vertexData)), bz = Mz, this.materialInfos = iz
          }
          const pz = Hz.reduce(((zz, uz) => zz + (uz.indices?.length ?? 0)), Oz.indices?.length ?? 0);
          let dz = lz || Hz.some((zz => zz.indices === Oz.indices)) ? Oz.indices?.slice() : Oz.indices;
          if (pz > 0) {
            let iz = dz?.length ?? 0;
            if (dz || (dz = new Array(pz)), dz.length !== pz) {
              if (Array.isArray(dz)) dz.length = pz;
              else {
                const zz = Ez || dz instanceof Uint32Array ? new Uint32Array(pz) : new Uint16Array(pz);
                zz.set(dz), dz = zz
              }
              uz && uz.determinant() < 0 && zz._FlipFaces(dz, 0, iz)
            }
            let lz = Oz.positions ? Oz.positions.length / 3 : 0;
            for (const {
                vertexData: uz,
                transform: Ez
              }
              of bz)
              if (uz.indices) {
                for (let zz = 0; zz < uz.indices.length; zz++) dz[iz + zz] = uz.indices[zz] + lz;
                Ez && Ez.determinant() < 0 && zz._FlipFaces(dz, iz, uz.indices.length), lz += uz.positions.length / 3, iz += uz.indices.length, nz && (yield)
              }
          }
          return this.indices = dz, this.positions = zz._MergeElement(iz.j.PositionKind, Oz.positions, uz, bz.map((zz => [zz.vertexData.positions, zz.transform]))), nz && (yield), Oz.normals && (this.normals = zz._MergeElement(iz.j.NormalKind, Oz.normals, uz, bz.map((zz => [zz.vertexData.normals, zz.transform]))), nz && (yield)), Oz.tangents && (this.tangents = zz._MergeElement(iz.j.TangentKind, Oz.tangents, uz, bz.map((zz => [zz.vertexData.tangents, zz.transform]))), nz && (yield)), Oz.uvs && (this.uvs = zz._MergeElement(iz.j.UVKind, Oz.uvs, uz, bz.map((zz => [zz.vertexData.uvs, zz.transform]))), nz && (yield)), Oz.uvs2 && (this.uvs2 = zz._MergeElement(iz.j.UV2Kind, Oz.uvs2, uz, bz.map((zz => [zz.vertexData.uvs2, zz.transform]))), nz && (yield)), Oz.uvs3 && (this.uvs3 = zz._MergeElement(iz.j.UV3Kind, Oz.uvs3, uz, bz.map((zz => [zz.vertexData.uvs3, zz.transform]))), nz && (yield)), Oz.uvs4 && (this.uvs4 = zz._MergeElement(iz.j.UV4Kind, Oz.uvs4, uz, bz.map((zz => [zz.vertexData.uvs4, zz.transform]))), nz && (yield)), Oz.uvs5 && (this.uvs5 = zz._MergeElement(iz.j.UV5Kind, Oz.uvs5, uz, bz.map((zz => [zz.vertexData.uvs5, zz.transform]))), nz && (yield)), Oz.uvs6 && (this.uvs6 = zz._MergeElement(iz.j.UV6Kind, Oz.uvs6, uz, bz.map((zz => [zz.vertexData.uvs6, zz.transform]))), nz && (yield)), Oz.colors && (this.colors = zz._MergeElement(iz.j.ColorKind, Oz.colors, uz, bz.map((zz => [zz.vertexData.colors, zz.transform]))), (void 0 !== Oz.hasVertexAlpha || bz.some((zz => void 0 !== zz.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Oz.hasVertexAlpha || bz.some((zz => zz.vertexData.hasVertexAlpha))), nz && (yield)), Oz.matricesIndices && (this.matricesIndices = zz._MergeElement(iz.j.MatricesIndicesKind, Oz.matricesIndices, uz, bz.map((zz => [zz.vertexData.matricesIndices, zz.transform]))), nz && (yield)), Oz.matricesWeights && (this.matricesWeights = zz._MergeElement(iz.j.MatricesWeightsKind, Oz.matricesWeights, uz, bz.map((zz => [zz.vertexData.matricesWeights, zz.transform]))), nz && (yield)), Oz.matricesIndicesExtra && (this.matricesIndicesExtra = zz._MergeElement(iz.j.MatricesIndicesExtraKind, Oz.matricesIndicesExtra, uz, bz.map((zz => [zz.vertexData.matricesIndicesExtra, zz.transform]))), nz && (yield)), Oz.matricesWeightsExtra && (this.matricesWeightsExtra = zz._MergeElement(iz.j.MatricesWeightsExtraKind, Oz.matricesWeightsExtra, uz, bz.map((zz => [zz.vertexData.matricesWeightsExtra, zz.transform])))), this
        }
        static _MergeElement(uz, bz, Ez, nz) {
          const lz = nz.filter((zz => null !== zz[0] && void 0 !== zz[0]));
          if (!bz && 0 == lz.length) return bz;
          if (!bz) return this._MergeElement(uz, lz[0][0], lz[0][1], lz.slice(1));
          const Mz = lz.reduce(((zz, uz) => zz + uz[0].length), bz.length),
            tz = uz === iz.j.PositionKind ? zz._TransformVector3Coordinates : uz === iz.j.NormalKind ? zz._TransformVector3Normals : uz === iz.j.TangentKind ? zz._TransformVector4Normals : () => {};
          if (bz instanceof Float32Array) {
            const zz = new Float32Array(Mz);
            zz.set(bz), Ez && tz(zz, Ez, 0, bz.length);
            let uz = bz.length;
            for (const [bz, Ez] of lz) zz.set(bz, uz), Ez && tz(zz, Ez, uz, bz.length), uz += bz.length;
            return zz
          } {
            const zz = new Array(Mz);
            for (let Ez = 0; Ez < bz.length; Ez++) zz[Ez] = bz[Ez];
            Ez && tz(zz, Ez, 0, bz.length);
            let uz = bz.length;
            for (const [bz, Ez] of lz) {
              for (let Ez = 0; Ez < bz.length; Ez++) zz[uz + Ez] = bz[Ez];
              Ez && tz(zz, Ez, uz, bz.length), uz += bz.length
            }
            return zz
          }
        }
        _validate() {
          if (!this.positions) throw new pz.j("Positions are required", pz.f.MeshInvalidPositionsError);
          const zz = (zz, uz) => {
              const bz = (0, iz.h)(zz);
              if (uz.length % bz !== 0) throw new Error("The " + zz + "s array count must be a multiple of " + bz);
              return uz.length / bz
            },
            uz = zz(iz.j.PositionKind, this.positions),
            bz = (bz, Ez) => {
              const nz = zz(bz, Ez);
              if (nz !== uz) throw new Error("The " + bz + "s element count (" + nz + ") does not match the positions count (" + uz + ")")
            };
          this.normals && bz(iz.j.NormalKind, this.normals), this.tangents && bz(iz.j.TangentKind, this.tangents), this.uvs && bz(iz.j.UVKind, this.uvs), this.uvs2 && bz(iz.j.UV2Kind, this.uvs2), this.uvs3 && bz(iz.j.UV3Kind, this.uvs3), this.uvs4 && bz(iz.j.UV4Kind, this.uvs4), this.uvs5 && bz(iz.j.UV5Kind, this.uvs5), this.uvs6 && bz(iz.j.UV6Kind, this.uvs6), this.colors && bz(iz.j.ColorKind, this.colors), this.matricesIndices && bz(iz.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && bz(iz.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && bz(iz.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && bz(iz.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const uz = this.serialize();
          return zz.Parse(uz)
        }
        serialize() {
          const zz = {};
          if (this.positions && (zz.positions = Array.from(this.positions)), this.normals && (zz.normals = Array.from(this.normals)), this.tangents && (zz.tangents = Array.from(this.tangents)), this.uvs && (zz.uvs = Array.from(this.uvs)), this.uvs2 && (zz.uvs2 = Array.from(this.uvs2)), this.uvs3 && (zz.uvs3 = Array.from(this.uvs3)), this.uvs4 && (zz.uvs4 = Array.from(this.uvs4)), this.uvs5 && (zz.uvs5 = Array.from(this.uvs5)), this.uvs6 && (zz.uvs6 = Array.from(this.uvs6)), this.colors && (zz.colors = Array.from(this.colors), zz.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (zz.matricesIndices = Array.from(this.matricesIndices), zz.matricesIndicesExpanded = !0), this.matricesWeights && (zz.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (zz.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), zz.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (zz.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), zz.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            zz.materialInfos = [];
            for (const uz of this.materialInfos) {
              const bz = {
                indexStart: uz.indexStart,
                indexCount: uz.indexCount,
                materialIndex: uz.materialIndex,
                verticesStart: uz.verticesStart,
                verticesCount: uz.verticesCount
              };
              zz.materialInfos.push(bz)
            }
          }
          return zz
        }
        static ExtractFromMesh(uz, bz, Ez) {
          return zz._ExtractFrom(uz, bz, Ez)
        }
        static ExtractFromGeometry(uz, bz, Ez) {
          return zz._ExtractFrom(uz, bz, Ez)
        }
        static _ExtractFrom(uz, bz, Ez) {
          const nz = new zz;
          if (uz.isVerticesDataPresent(iz.j.PositionKind) && (nz.positions = uz.getVerticesData(iz.j.PositionKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.NormalKind) && (nz.normals = uz.getVerticesData(iz.j.NormalKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.TangentKind) && (nz.tangents = uz.getVerticesData(iz.j.TangentKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UVKind) && (nz.uvs = uz.getVerticesData(iz.j.UVKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UV2Kind) && (nz.uvs2 = uz.getVerticesData(iz.j.UV2Kind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UV3Kind) && (nz.uvs3 = uz.getVerticesData(iz.j.UV3Kind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UV4Kind) && (nz.uvs4 = uz.getVerticesData(iz.j.UV4Kind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UV5Kind) && (nz.uvs5 = uz.getVerticesData(iz.j.UV5Kind, bz, Ez)), uz.isVerticesDataPresent(iz.j.UV6Kind) && (nz.uvs6 = uz.getVerticesData(iz.j.UV6Kind, bz, Ez)), uz.isVerticesDataPresent(iz.j.ColorKind)) {
            const zz = uz.geometry || uz,
              lz = zz.getVertexBuffer(iz.j.ColorKind),
              Mz = zz.getVerticesData(iz.j.ColorKind, bz, Ez);
            if (3 === lz.getSize()) {
              const zz = new Float32Array(4 * Mz.length / 3);
              for (let uz = 0, bz = 0; uz < Mz.length; uz += 3, bz += 4) zz[bz] = Mz[uz], zz[bz + 1] = Mz[uz + 1], zz[bz + 2] = Mz[uz + 2], zz[bz + 3] = 1;
              nz.colors = zz
            } else {
              if (4 !== lz.getSize()) throw new Error(`Unexpected number of color components: ${lz.getSize()}`);
              nz.colors = Mz
            }
          }
          return uz.isVerticesDataPresent(iz.j.MatricesIndicesKind) && (nz.matricesIndices = uz.getVerticesData(iz.j.MatricesIndicesKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.MatricesWeightsKind) && (nz.matricesWeights = uz.getVerticesData(iz.j.MatricesWeightsKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.MatricesIndicesExtraKind) && (nz.matricesIndicesExtra = uz.getVerticesData(iz.j.MatricesIndicesExtraKind, bz, Ez)), uz.isVerticesDataPresent(iz.j.MatricesWeightsExtraKind) && (nz.matricesWeightsExtra = uz.getVerticesData(iz.j.MatricesWeightsExtraKind, bz, Ez)), nz.indices = uz.Nbz(bz, Ez), nz
        }
        static CreateRibbon(zz) {
          throw (0, lz.l)("ribbonBuilder")
        }
        static CreateBox(zz) {
          throw (0, lz.l)("boxBuilder")
        }
        static CreateTiledBox(zz) {
          throw (0, lz.l)("tiledBoxBuilder")
        }
        static CreateTiledPlane(zz) {
          throw (0, lz.l)("tiledPlaneBuilder")
        }
        static CreateSphere(zz) {
          throw (0, lz.l)("sphereBuilder")
        }
        static CreateCylinder(zz) {
          throw (0, lz.l)("cylinderBuilder")
        }
        static CreateTorus(zz) {
          throw (0, lz.l)("torusBuilder")
        }
        static CreateLineSystem(zz) {
          throw (0, lz.l)("linesBuilder")
        }
        static CreateDashedLines(zz) {
          throw (0, lz.l)("linesBuilder")
        }
        static CreateGround(zz) {
          throw (0, lz.l)("groundBuilder")
        }
        static CreateTiledGround(zz) {
          throw (0, lz.l)("groundBuilder")
        }
        static CreateGroundFromHeightMap(zz) {
          throw (0, lz.l)("groundBuilder")
        }
        static CreatePlane(zz) {
          throw (0, lz.l)("planeBuilder")
        }
        static CreateDisc(zz) {
          throw (0, lz.l)("discBuilder")
        }
        static CreatePolygon(zz, uz, bz, Ez, nz, iz, Mz) {
          throw (0, lz.l)("polygonBuilder")
        }
        static CreateIcoSphere(zz) {
          throw (0, lz.l)("icoSphereBuilder")
        }
        static CreatePolyhedron(zz) {
          throw (0, lz.l)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || nz.n.Up();
          throw (0, lz.l)("capsuleBuilder")
        }
        static CreateTorusKnot(zz) {
          throw (0, lz.l)("torusKnotBuilder")
        }
        static ComputeNormals(zz, uz, bz, Ez) {
          let iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz = !1,
            Jz = !1,
            Az = !1,
            Tz = !1,
            Lz = 1,
            Pz = 0,
            Gz = null;
          Ez && (xz = !!Ez.facetNormals, Jz = !!Ez.facetPositions, Az = !!Ez.facetPartitioning, Lz = !0 === Ez.useRightHandedSystem ? -1 : 1, Pz = Ez.ratio || 0, Tz = !!Ez.depthSort, Gz = Ez.distanceTo, Tz && void 0 === Gz && (Gz = nz.n.Zero()));
          let az = 0,
            Vz = 0,
            mz = 0,
            qz = 0;
          for (Az && Ez && Ez.bbSize && (az = Ez.subDiv.X * Pz / Ez.bbSize.x, Vz = Ez.subDiv.Y * Pz / Ez.bbSize.y, mz = Ez.subDiv.Z * Pz / Ez.bbSize.z, qz = Ez.subDiv.max * Ez.subDiv.max, Ez.facetPartitioning.length = 0), iz = 0; iz < zz.length; iz++) bz[iz] = 0;
          const hz = uz.length / 3 | 0;
          for (iz = 0; iz < hz; iz++) {
            if (Kz = 3 * uz[3 * iz], wz = Kz + 1, Xz = Kz + 2, fz = 3 * uz[3 * iz + 1], sz = fz + 1, rz = fz + 2, oz = 3 * uz[3 * iz + 2], Nz = oz + 1, vz = oz + 2, lz = zz[Kz] - zz[fz], Mz = zz[wz] - zz[sz], tz = zz[Xz] - zz[rz], Hz = zz[oz] - zz[fz], Oz = zz[Nz] - zz[sz], pz = zz[vz] - zz[rz], dz = Lz * (Mz * pz - tz * Oz), Fz = Lz * (tz * Hz - lz * pz), Zz = Lz * (lz * Oz - Mz * Hz), Rz = Math.sqrt(dz * dz + Fz * Fz + Zz * Zz), Rz = 0 === Rz ? 1 : Rz, dz /= Rz, Fz /= Rz, Zz /= Rz, xz && Ez && (Ez.facetNormals[iz].x = dz, Ez.facetNormals[iz].y = Fz, Ez.facetNormals[iz].z = Zz), Jz && Ez && (Ez.facetPositions[iz].x = (zz[Kz] + zz[fz] + zz[oz]) / 3, Ez.facetPositions[iz].y = (zz[wz] + zz[sz] + zz[Nz]) / 3, Ez.facetPositions[iz].z = (zz[Xz] + zz[rz] + zz[vz]) / 3), Az && Ez) {
              const uz = Math.floor((Ez.facetPositions[iz].x - Ez.bInfo.minimum.x * Pz) * az),
                bz = Math.floor((Ez.facetPositions[iz].y - Ez.bInfo.minimum.y * Pz) * Vz),
                nz = Math.floor((Ez.facetPositions[iz].z - Ez.bInfo.minimum.z * Pz) * mz),
                lz = Math.floor((zz[Kz] - Ez.bInfo.minimum.x * Pz) * az),
                Mz = Math.floor((zz[wz] - Ez.bInfo.minimum.y * Pz) * Vz),
                tz = Math.floor((zz[Xz] - Ez.bInfo.minimum.z * Pz) * mz),
                Hz = Math.floor((zz[fz] - Ez.bInfo.minimum.x * Pz) * az),
                Oz = Math.floor((zz[sz] - Ez.bInfo.minimum.y * Pz) * Vz),
                pz = Math.floor((zz[rz] - Ez.bInfo.minimum.z * Pz) * mz),
                dz = Math.floor((zz[oz] - Ez.bInfo.minimum.x * Pz) * az),
                Fz = Math.floor((zz[Nz] - Ez.bInfo.minimum.y * Pz) * Vz),
                Zz = Math.floor((zz[vz] - Ez.bInfo.minimum.z * Pz) * mz),
                Rz = lz + Ez.subDiv.max * Mz + qz * tz,
                xz = Hz + Ez.subDiv.max * Oz + qz * pz,
                Jz = dz + Ez.subDiv.max * Fz + qz * Zz,
                Az = uz + Ez.subDiv.max * bz + qz * nz;
              Ez.facetPartitioning[Az] = Ez.facetPartitioning[Az] ? Ez.facetPartitioning[Az] : [], Ez.facetPartitioning[Rz] = Ez.facetPartitioning[Rz] ? Ez.facetPartitioning[Rz] : [], Ez.facetPartitioning[xz] = Ez.facetPartitioning[xz] ? Ez.facetPartitioning[xz] : [], Ez.facetPartitioning[Jz] = Ez.facetPartitioning[Jz] ? Ez.facetPartitioning[Jz] : [], Ez.facetPartitioning[Rz].push(iz), xz != Rz && Ez.facetPartitioning[xz].push(iz), Jz != xz && Jz != Rz && Ez.facetPartitioning[Jz].push(iz), Az != Rz && Az != xz && Az != Jz && Ez.facetPartitioning[Az].push(iz)
            }
            if (Tz && Ez && Ez.facetPositions) {
              const zz = Ez.depthSortedFacets[iz];
              zz.ind = 3 * iz, zz.sqDistance = nz.n.DistanceSquared(Ez.facetPositions[iz], Gz)
            }
            bz[Kz] += dz, bz[wz] += Fz, bz[Xz] += Zz, bz[fz] += dz, bz[sz] += Fz, bz[rz] += Zz, bz[oz] += dz, bz[Nz] += Fz, bz[vz] += Zz
          }
          for (iz = 0; iz < bz.length / 3; iz++) dz = bz[3 * iz], Fz = bz[3 * iz + 1], Zz = bz[3 * iz + 2], Rz = Math.sqrt(dz * dz + Fz * Fz + Zz * Zz), Rz = 0 === Rz ? 1 : Rz, dz /= Rz, Fz /= Rz, Zz /= Rz, bz[3 * iz] = dz, bz[3 * iz + 1] = Fz, bz[3 * iz + 2] = Zz
        }
        static _ComputeSides(uz, bz, Ez, iz, lz, Mz, tz) {
          const Hz = Ez.length,
            Oz = iz.length;
          let pz, dz;
          switch (uz = uz || zz.DEFAULTSIDE) {
            case zz.FRONTSIDE:
              break;
            case zz.BACKSIDE:
              for (pz = 0; pz < Hz; pz += 3) {
                const zz = Ez[pz];
                Ez[pz] = Ez[pz + 2], Ez[pz + 2] = zz
              }
              for (dz = 0; dz < Oz; dz++) iz[dz] = -iz[dz];
              break;
            case zz.DOUBLESIDE: {
              const zz = bz.length,
                uz = zz / 3;
              for (let Ez = 0; Ez < zz; Ez++) bz[zz + Ez] = bz[Ez];
              for (pz = 0; pz < Hz; pz += 3) Ez[pz + Hz] = Ez[pz + 2] + uz, Ez[pz + 1 + Hz] = Ez[pz + 1] + uz, Ez[pz + 2 + Hz] = Ez[pz] + uz;
              for (dz = 0; dz < Oz; dz++) iz[Oz + dz] = -iz[dz];
              const Fz = lz.length;
              let Zz;
              for (Zz = 0; Zz < Fz; Zz++) lz[Zz + Fz] = lz[Zz];
              for (Mz = Mz || new nz.r(0, 0, 1, 1), tz = tz || new nz.r(0, 0, 1, 1), Zz = 0, pz = 0; pz < Fz / 2; pz++) lz[Zz] = Mz.x + (Mz.z - Mz.x) * lz[Zz], lz[Zz + 1] = Mz.y + (Mz.w - Mz.y) * lz[Zz + 1], lz[Zz + Fz] = tz.x + (tz.z - tz.x) * lz[Zz + Fz], lz[Zz + Fz + 1] = tz.y + (tz.w - tz.y) * lz[Zz + Fz + 1], Zz += 2;
              break
            }
          }
        }
        static Parse(uz) {
          const bz = new zz,
            Ez = uz.positions;
          Ez && bz.set(Ez, iz.j.PositionKind);
          const nz = uz.normals;
          nz && bz.set(nz, iz.j.NormalKind);
          const lz = uz.tangents;
          lz && bz.set(lz, iz.j.TangentKind);
          const tz = uz.uvs;
          tz && bz.set(tz, iz.j.UVKind);
          const Hz = uz.uvs2;
          Hz && bz.set(Hz, iz.j.UV2Kind);
          const Oz = uz.uvs3;
          Oz && bz.set(Oz, iz.j.UV3Kind);
          const pz = uz.uvs4;
          pz && bz.set(pz, iz.j.UV4Kind);
          const dz = uz.uvs5;
          dz && bz.set(dz, iz.j.UV5Kind);
          const Zz = uz.uvs6;
          Zz && bz.set(Zz, iz.j.UV6Kind);
          const Rz = uz.colors;
          Rz && (bz.set(Mz.g.CheckColors4(Rz, Ez.length / 3), iz.j.ColorKind), void 0 !== uz.hasVertexAlpha && (bz.hasVertexAlpha = uz.hasVertexAlpha));
          const Kz = uz.matricesIndices;
          Kz && bz.set(Kz, iz.j.MatricesIndicesKind);
          const wz = uz.matricesWeights;
          wz && bz.set(wz, iz.j.MatricesWeightsKind);
          const Xz = uz.indices;
          Xz && (bz.indices = Xz);
          const fz = uz.materialInfos;
          if (fz) {
            bz.materialInfos = [];
            for (const zz of fz) {
              const uz = new Fz;
              uz.indexCount = zz.indexCount, uz.indexStart = zz.indexStart, uz.verticesCount = zz.verticesCount, uz.verticesStart = zz.verticesStart, uz.materialIndex = zz.materialIndex, bz.materialInfos.push(uz)
            }
          }
          return bz
        }
        static ImportVertexData(uz, bz) {
          const Ez = zz.Parse(uz);
          bz.setAllVerticesData(Ez, uz.updatable)
        }
      }, (() => {
        const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [Hz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], bz = [Hz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Zz = [Hz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Rz = [Hz.l.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Ez.h)(zz, null, uz, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector3Coordinates" in zz,
            get: zz => zz._TransformVector3Coordinates
          },
          metadata: nz
        }, null, Kz), (0, Ez.h)(zz, null, bz, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector3Normals" in zz,
            get: zz => zz._TransformVector3Normals
          },
          metadata: nz
        }, null, Kz), (0, Ez.h)(zz, null, Zz, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector4Normals" in zz,
            get: zz => zz._TransformVector4Normals
          },
          metadata: nz
        }, null, Kz), (0, Ez.h)(zz, null, Rz, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: zz => "_FlipFaces" in zz,
            get: zz => zz._FlipFaces
          },
          metadata: nz
        }, null, Kz), nz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nz
        })
      })(), zz.FRONTSIDE = ((0, Ez.j)(zz, Kz), 0), zz.BACKSIDE = 1, zz.DOUBLESIDE = 2, zz.DEFAULTSIDE = 0, zz._UniqueIdGenerator = 0, zz
    })()
  },
  39642: (zz, uz, bz) => {
    var Ez = bz(36519),
      nz = bz(38060),
      iz = bz(39474),
      lz = bz(39584),
      Mz = bz(39299);
    const tz = "bakedVertexAnimationSettingsInstanced";

    function Hz(zz) {
      const uz = zz.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return uz instanceof Float32Array || uz instanceof Uint16Array
    }

    function Oz(zz, uz, bz, Ez) {
      bz.Vk(Number.POSITIVE_INFINITY), Ez.Vk(Number.NEGATIVE_INFINITY);
      for (let nz = 0; nz < 3 * uz; nz += 3) {
        const uz = zz[nz],
          iz = zz[nz + 1],
          lz = zz[nz + 2];
        uz < bz.x && (bz.x = uz), iz < bz.y && (bz.y = iz), lz < bz.z && (bz.z = lz), uz > Ez.x && (Ez.x = uz), iz > Ez.y && (Ez.y = iz), lz > Ez.z && (Ez.z = lz)
      }
    }

    function pz(zz, uz, bz) {
      bz && (zz.x -= zz.x * bz.x + bz.y, zz.y -= zz.y * bz.x + bz.y, zz.z -= zz.z * bz.x + bz.y, uz.x += uz.x * bz.x + bz.y, uz.y += uz.y * bz.x + bz.y, uz.z += uz.z * bz.x + bz.y)
    }

    function dz(zz, uz, bz, nz, iz) {
      const lz = Ez.l.ER[7],
        Mz = Ez.l.ER[8];
      for (let tz = 0; tz < 2; ++tz)
        for (let Hz = 0; Hz < 2; ++Hz)
          for (let Oz = 0; Oz < 2; ++Oz) lz.set(tz ? uz.x : zz.x, Hz ? uz.y : zz.y, Oz ? uz.z : zz.z), Ez.n.TransformCoordinatesToRef(lz, bz, Mz), nz.minimizeInPlace(Mz), iz.maximizeInPlace(Mz)
    }

    function Fz(zz, uz, bz, nz, iz) {
      const lz = Ez.l.ER[7];
      for (let Mz = 0; Mz < 3 * uz; Mz += 3) Ez.n.TransformCoordinatesFromFloatsToRef(zz[Mz], zz[Mz + 1], zz[Mz + 2], bz, lz), nz.minimizeInPlace(lz), iz.maximizeInPlace(lz)
    }
    let Zz = !1;
    Zz || (Zz = !0, lz.c.prototype.thinInstanceAdd = function(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.XT().uR().getCaps().instancedArrays) return nz.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(zz) ? zz.length : 1);
      const bz = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(zz))
        for (let Ez = 0; Ez < zz.length; ++Ez) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, zz[Ez], Ez === zz.length - 1 && uz);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, zz, uz);
      return bz
    }, lz.c.prototype.thinInstanceAddSelf = function() {
      let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Ez.d.IdentityReadOnly, zz)
    }, lz.c.prototype.thinInstanceRegisterAttribute = function(zz, uz) {
      zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), this.removeVerticesData(zz), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[zz] = uz, this._userThinInstanceBuffersStorage.sizes[zz] = uz * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[zz] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[zz]), this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new Mz.j(this.uR(), this._userThinInstanceBuffersStorage.data[zz], zz, !0, !1, uz, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz])
    }, lz.c.prototype.thinInstanceSetMatrixAt = function(zz, uz) {
      let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || zz >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Ez = this._thinInstanceDataStorage.matrixData;
      return uz.copyToArray(Ez, 16 * zz), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[zz] = uz), bz && (this.R_("matrix"), this.iR || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, lz.c.prototype.thinInstanceSetAttributeAt = function(zz, uz, bz) {
      let Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[zz] || uz >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(zz, 0), this._userThinInstanceBuffersStorage.data[zz].set(bz, uz * this._userThinInstanceBuffersStorage.strides[zz]), Ez && this.R_(zz), !0)
    }, Object.defineProperty(lz.c.prototype, "W8", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(zz) {
        const uz = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        zz <= (uz ? uz.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = zz)
      },
      enumerable: !0,
      configurable: !0
    }), lz.c.prototype._thinInstanceCreateMatrixBuffer = function(zz, uz) {
      let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ez = new Mz.c(this.uR(), uz, !bz, 16, !1, !0);
      for (let nz = 0; nz < 4; nz++) this.setVerticesBuffer(Ez.createVertexBuffer(zz + nz, 4 * nz, 4));
      return Ez
    }, lz.c.prototype.v_ = function(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (bz = bz || 16, "matrix" === zz) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = uz ? uz.length : 32 * bz, this._thinInstanceDataStorage.matrixData = uz, this._thinInstanceDataStorage.worldMatrices = null, null !== uz ? (this._thinInstanceDataStorage.instancesCount = uz.length / bz, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", uz, Ez), this.iR || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.iR || this.refreshBoundingInfo());
      else if ("previousMatrix" === zz) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = uz, null !== uz && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", uz, Ez));
      else if ("splatIndex" === zz && uz) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = uz.length / bz, this._userThinInstanceBuffersStorage.data[zz] = uz, this._userThinInstanceBuffersStorage.strides[zz] = bz, this._userThinInstanceBuffersStorage.sizes[zz] = uz.length;
        const Ez = new Mz.c(this.uR(), uz, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Ez;
        for (let uz = 0; uz < 4; uz++) this.setVerticesBuffer(Ez.createVertexBuffer(zz + uz, 4 * uz, 4))
      } else zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), null === uz ? this._userThinInstanceBuffersStorage?.data[zz] && (this.removeVerticesData(zz), delete this._userThinInstanceBuffersStorage.data[zz], delete this._userThinInstanceBuffersStorage.strides[zz], delete this._userThinInstanceBuffersStorage.sizes[zz], delete this._userThinInstanceBuffersStorage.vertexBuffers[zz]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[zz] = uz, this._userThinInstanceBuffersStorage.strides[zz] = bz, this._userThinInstanceBuffersStorage.sizes[zz] = uz.length, this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new Mz.j(this.uR(), uz, zz, !Ez, !1, bz, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
    }, lz.c.prototype.R_ = function(zz) {
      "matrix" === zz ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === zz ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === zz ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[zz], 0, this._thinInstanceDataStorage.instancesCount) : (zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[zz] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[zz].isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._userThinInstanceBuffersStorage.vertexBuffers[zz].updateDirectly(this._userThinInstanceBuffersStorage.data[zz], 0)))
    }, lz.c.prototype.thinInstancePartialBufferUpdate = function(zz, uz, bz) {
      if ("matrix" === zz) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof uz ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * bz * Float32Array.BYTES_PER_ELEMENT, 16 * uz), 16 * bz) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(uz, bz));
      else if (zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[zz]) {
        const Ez = this._userThinInstanceBuffersStorage.vertexBuffers[zz];
        if ("number" === typeof uz) {
          const Ez = new Float32Array(this._userThinInstanceBuffersStorage.data[zz].buffer, this._userThinInstanceBuffersStorage.data[zz].byteOffset + bz * this._userThinInstanceBuffersStorage.strides[zz] * Float32Array.BYTES_PER_ELEMENT, uz * this._userThinInstanceBuffersStorage.strides[zz]);
          this._userThinInstanceBuffersStorage.vertexBuffers[zz].updateDirectly(Ez, bz * this._userThinInstanceBuffersStorage.strides[zz])
        } else Ez.updateDirectly(uz, bz)
      }
    }, lz.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const zz = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let uz = 0; uz < this._thinInstanceDataStorage.instancesCount; ++uz) this._thinInstanceDataStorage.worldMatrices[uz] = Ez.d.FromArray(zz, 16 * uz)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, lz.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const lz = this._thinInstanceDataStorage.boundingVectors;
      if (zz || !this.rawBoundingInfo) {
        if (lz.length = 0, nz && function(zz, uz, bz) {
            const nz = zz._userThinInstanceBuffersStorage,
              lz = nz?.data[tz],
              Zz = nz?.strides[tz];
            if (!lz || !Zz || Zz < 4 || !Hz(zz)) return !1;
            const Rz = zz._thinInstanceDataStorage.matrixData;
            if (!Rz) return !1;
            const Kz = {},
              wz = Ez.l.Vector4[0],
              Xz = Ez.l.ER[1],
              fz = Ez.l.ER[2],
              sz = Ez.l.ER[3],
              rz = Ez.l.ER[4],
              oz = Ez.l.ER[5],
              Nz = Ez.l.ER[6],
              vz = Ez.l.Matrix[2],
              xz = zz.geometry ? zz.geometry.boundingBias : null,
              Jz = zz.getTotalVertices();
            Xz.Vk(Number.POSITIVE_INFINITY), fz.Vk(Number.NEGATIVE_INFINITY), sz.Vk(Number.POSITIVE_INFINITY), rz.Vk(Number.NEGATIVE_INFINITY);
            for (let iz = 0; iz < zz._thinInstanceDataStorage.instancesCount; ++iz) {
              const uz = iz * Zz;
              wz.set(lz[uz], lz[uz + 1], lz[uz + 2], lz[uz + 3]);
              const nz = zz._getData({
                applyMorph: bz,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: wz,
                updatePositionsArray: !1,
                cache: Kz
              }, null, Mz.j.PositionKind);
              if (!nz) return !1;
              Oz(nz, Jz, oz, Nz), pz(oz, Nz, xz), Xz.minimizeInPlace(oz), fz.maximizeInPlace(Nz), Ez.d.FromArrayToRef(Rz, 16 * iz, vz), xz ? dz(oz, Nz, vz, sz, rz) : Fz(nz, Jz, vz, sz, rz)
            }
            return !(!isFinite(Xz.x) || !isFinite(sz.x)) && (zz.lG().reConstruct(sz, rz), zz.rawBoundingInfo = new iz.e(Xz, fz), function(zz, uz) {
              zz.length = 0;
              for (let bz = 0; bz < uz.boundingBox.vectors.length; ++bz) zz.push(uz.boundingBox.vectors[bz].clone())
            }(uz, zz.rawBoundingInfo), zz._updateBoundingInfo(), !0)
          }(this, lz, bz)) return;
        nz && this.bakedVertexAnimationManager?.isEnabled && Hz(this) ? this.refreshBoundingInfo({
          applySkeleton: uz,
          applyMorph: bz,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(uz, bz);
        const zz = this.lG();
        this.rawBoundingInfo = new iz.e(zz.minimum, zz.maximum)
      }
      const Zz = this.lG(),
        Rz = this._thinInstanceDataStorage.matrixData;
      if (0 === lz.length)
        for (let Ez = 0; Ez < Zz.boundingBox.vectors.length; ++Ez) lz.push(Zz.boundingBox.vectors[Ez].clone());
      Ez.l.ER[0].Vk(Number.POSITIVE_INFINITY), Ez.l.ER[1].Vk(Number.NEGATIVE_INFINITY);
      for (let iz = 0; iz < this._thinInstanceDataStorage.instancesCount; ++iz) {
        Ez.d.FromArrayToRef(Rz, 16 * iz, Ez.l.Matrix[0]);
        for (let zz = 0; zz < lz.length; ++zz) Ez.n.TransformCoordinatesToRef(lz[zz], Ez.l.Matrix[0], Ez.l.ER[2]), Ez.l.ER[0].minimizeInPlace(Ez.l.ER[2]), Ez.l.ER[1].maximizeInPlace(Ez.l.ER[2])
      }
      Zz.reConstruct(Ez.l.ER[0], Ez.l.ER[1]), this._updateBoundingInfo()
    }, lz.c.prototype._thinInstanceRecreateBuffer = function(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === zz ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, uz)) : "previousMatrix" === zz ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, uz)) : (zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[zz]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new Mz.j(this.uR(), this._userThinInstanceBuffersStorage.data[zz], zz, !uz, !1, this._userThinInstanceBuffersStorage.strides[zz], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
    }, lz.c.prototype._thinInstanceUpdateBufferSize = function(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      zz === Mz.j.ColorKind && (zz = Mz.j.ColorInstanceKind);
      const bz = "matrix" === zz;
      if (!bz && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[zz])) return;
      const Ez = bz ? 16 : this._userThinInstanceBuffersStorage.strides[zz],
        nz = bz ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[zz];
      let iz = bz ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[zz];
      const lz = (this._thinInstanceDataStorage.instancesCount + uz) * Ez;
      let tz = nz;
      for (; tz < lz;) tz *= 2;
      if (!iz || nz != tz) {
        if (iz) {
          const zz = new Float32Array(tz);
          zz.set(iz, 0), iz = zz
        } else iz = new Float32Array(tz);
        bz ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", iz, !1), this._thinInstanceDataStorage.matrixData = iz, this._thinInstanceDataStorage.matrixBufferSize = tz, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", iz, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[zz]?.dispose(), this._userThinInstanceBuffersStorage.data[zz] = iz, this._userThinInstanceBuffersStorage.sizes[zz] = tz, this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new Mz.j(this.uR(), iz, zz, !0, !1, Ez, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
      }
    }, lz.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, lz.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39618: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Xz,
      g: () => Rz
    });
    var Ez, nz, iz, lz, Mz = bz(39170),
      tz = bz(39172),
      Hz = bz(39182),
      Oz = bz(36547),
      pz = bz(36519),
      dz = bz(39384),
      Fz = bz(36564),
      Zz = bz(39061);
    let Rz = (() => {
      var zz;
      let uz, bz, Ez, nz, iz, lz, Fz, Zz, Rz, Kz = dz.c,
        wz = [],
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        xz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [];
      return zz = class extends Kz {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(uz) {
          this._billboardMode !== uz && (this._billboardMode = uz, this._cache.useBillboardPosition = 0 !== (this._billboardMode & zz.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(zz) {
          this._infiniteDistance !== zz && (this._infiniteDistance = zz)
        }
        constructor(uz) {
          let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(uz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new pz.n(0, 0, 1), this._up = new pz.n(0, 1, 0), this._right = new pz.n(1, 0, 0), this._position = (0, Mz.j)(this, wz, pz.n.Zero()), this._rotation = ((0, Mz.j)(this, Xz), (0, Mz.j)(this, fz, pz.n.Zero())), this._rotationQuaternion = ((0, Mz.j)(this, sz), (0, Mz.j)(this, rz, null)), this._scaling = ((0, Mz.j)(this, oz), (0, Mz.j)(this, Nz, pz.n.One())), this._transformToBoneReferal = ((0, Mz.j)(this, vz), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Mz.j)(this, xz, zz.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Mz.j)(this, Jz), (0, Mz.j)(this, Az, 1)), this._infiniteDistance = ((0, Mz.j)(this, Tz), (0, Mz.j)(this, Lz, !1)), this.ignoreNonUniformScaling = ((0, Mz.j)(this, Pz), (0, Mz.j)(this, Gz, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Mz.j)(this, az), (0, Mz.j)(this, Vz, !1)), this._poseMatrix = ((0, Mz.j)(this, mz), null), this._localMatrix = pz.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = pz.n.Zero(), this._absoluteScaling = pz.n.Zero(), this._absoluteRotationQuaternion = pz.h.Identity(), this._pivotMatrix = pz.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Oz.b, this._nonUniformScaling = !1, bz && this.XT().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(zz) {
          this._position = zz, this._markAsDirtyInternal()
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
        set rotation(zz) {
          this._rotation = zz, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get ti() {
          return this._scaling
        }
        set ti(zz) {
          this._scaling = zz, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(zz) {
          this._rotationQuaternion = zz, zz && this._rotation.Vk(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return pz.n.TransformNormalFromFloatsToRef(0, 0, this.XT().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return pz.n.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return pz.n.TransformNormalFromFloatsToRef(this.XT().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(zz) {
          return this._poseMatrix ? (this._poseMatrix.euz(zz), this) : (this._poseMatrix = zz.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = pz.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const uz = this._cache;
          return this._billboardMode === uz.billboardMode && this._billboardMode === zz.BILLBOARDMODE_NONE && (!uz.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const zz = this._cache;
          zz.localMatrixUpdated = !1, zz.billboardMode = -1, zz.infiniteDistance = !1, zz.useBillboardPosition = !1
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
        setPreTransformMatrix(zz) {
          return this.setPivotMatrix(zz, !1)
        }
        setPivotMatrix(zz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.euz(zz), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = uz, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = pz.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            uz = arguments.length > 1 ? arguments[1] : void 0,
            bz = arguments.length > 2 ? arguments[2] : void 0;
          const Ez = this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0);
          Ez && bz && bz(this, Ez);
          for (const nz of this.getChildTransformNodes(!0)) nz.instantiateHierarchy(Ez, uz, bz);
          return Ez
        }
        jT() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return zz ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Vk(0), this._rotationQuaternion = this._rotationQuaternion || pz.h.Identity(), zz.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = zz, this._absolutePosition.P_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Elz() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(zz) {
          if (!zz) return this;
          let uz, bz, Ez;
          if (void 0 === zz.x) {
            if (arguments.length < 3) return this;
            uz = arguments[0], bz = arguments[1], Ez = arguments[2]
          } else uz = zz.x, bz = zz.y, Ez = zz.z;
          if (this.parent) {
            const zz = pz.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(zz), pz.n.TransformCoordinatesFromFloatsToRef(uz, bz, Ez, zz, this.position)
          } else this.position.x = uz, this.position.y = bz, this.position.z = Ez;
          return this._absolutePosition.euz(zz), this
        }
        setPositionWithLocalVector(zz) {
          return this.computeWorldMatrix(), this.position = pz.n.TransformNormal(zz, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const zz = pz.l.Matrix[0];
          return this._localMatrix.invertToRef(zz), pz.n.TransformNormal(this.position, zz)
        }
        locallyTranslate(zz) {
          return this.computeWorldMatrix(!0), this.position = pz.n.TransformCoordinates(zz, this._localMatrix), this
        }
        lookAt(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const lz = zz._LookAtVectorCache,
            Mz = 0 === iz ? this.position : this.getAbsolutePosition();
          if (uz.subtractToRef(Mz, lz), this.setDirection(lz, bz, Ez, nz), 1 === iz && this.parent)
            if (this.rotationQuaternion) {
              const zz = pz.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(zz);
              const uz = pz.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(uz), uz.invert(), zz.multiplyToRef(uz, zz), this.rotationQuaternion.fromRotationMatrix(zz)
            } else {
              const zz = pz.l.Quaternion[0];
              pz.h.FromEulerVectorToRef(this.rotation, zz);
              const uz = pz.l.Matrix[0];
              zz.toRotationMatrix(uz);
              const bz = pz.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(bz), bz.invert(), uz.multiplyToRef(bz, uz), zz.fromRotationMatrix(uz), zz.toEulerAnglesToRef(this.rotation)
            } return this
        }
        dW(zz) {
          const uz = pz.n.Zero();
          return this.getDirectionToRef(zz, uz), uz
        }
        getDirectionToRef(zz, uz) {
          return pz.n.TransformNormalToRef(zz, this.getWorldMatrix(), uz), this
        }
        setDirection(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const nz = -Math.atan2(zz.z, zz.x) + Math.PI / 2,
            iz = Math.sqrt(zz.x * zz.x + zz.z * zz.z),
            lz = -Math.atan2(zz.y, iz);
          return this.rotationQuaternion ? pz.h.RotationYawPitchRollToRef(nz + uz, lz + bz, Ez, this.rotationQuaternion) : (this.rotation.x = lz + bz, this.rotation.y = nz + uz, this.rotation.z = Ez), this
        }
        setPivotPoint(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.XT().getRenderId() && this.computeWorldMatrix(!0);
          const bz = this.getWorldMatrix();
          if (1 == uz) {
            const uz = pz.l.Matrix[0];
            bz.invertToRef(uz), zz = pz.n.TransformCoordinates(zz, uz)
          }
          return this.setPivotMatrix(pz.d.Translation(-zz.x, -zz.y, -zz.z), !0)
        }
        getPivotPoint() {
          const zz = pz.n.Zero();
          return this.getPivotPointToRef(zz), zz
        }
        getPivotPointToRef(zz) {
          return zz.x = -this._pivotMatrix.m[12], zz.y = -this._pivotMatrix.m[13], zz.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const zz = pz.n.Zero();
          return this.getAbsolutePivotPointToRef(zz), zz
        }
        getAbsolutePivotPointToRef(zz) {
          return this.getPivotPointToRef(zz), pz.n.TransformCoordinatesToRef(zz, this.getWorldMatrix(), zz), this
        }
        zuz(zz) {
          if (this._isDirty) return this;
          if (this._children)
            for (const uz of this._children) uz.zuz(zz);
          return super.zuz(zz)
        }
        setParent(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!uz && !this.parent) return this;
          const nz = pz.l.Quaternion[0],
            iz = pz.l.ER[0],
            lz = pz.l.ER[1],
            Mz = pz.l.Matrix[1];
          pz.d.IdentityToRef(Mz);
          const tz = pz.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let Hz = this.rotationQuaternion;
          return Hz || (Hz = zz._TmpRotation, pz.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Hz)), pz.d.ComposeToRef(this.ti, Hz, this.position, tz), this.parent && tz.multiplyToRef(this.parent.computeWorldMatrix(!0), tz), uz && (uz.computeWorldMatrix(!0).invertToRef(Mz), tz.multiplyToRef(Mz, tz)), tz.decompose(lz, nz, iz, bz ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.euz(nz) : nz.toEulerAnglesToRef(this.rotation), this.ti.euz(lz), this.position.euz(iz), this.parent = uz, Ez && this.setPivotMatrix(pz.d.Identity()), this
        }
        addChild(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return zz.setParent(this, uz), this
        }
        removeChild(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return zz.parent !== this || zz.setParent(null, uz), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(zz) {
          return this._nonUniformScaling !== zz && (this._nonUniformScaling = zz, !0)
        }
        attachToBone(zz, uz) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = uz, this.parent = zz, zz.getSkeleton().prepare(!0), zz.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = zz ? this._currentParentWhenAttachingToBone : null, this) : (zz && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(uz, bz, Ez) {
          let nz;
          if (uz.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Vk(0)), Ez && 0 !== Ez) {
            if (this.parent) {
              const zz = this.parent.getWorldMatrix(),
                Ez = pz.l.Matrix[0];
              zz.invertToRef(Ez), uz = pz.n.TransformNormal(uz, Ez), zz.determinant() < 0 && (bz *= -1)
            }
            nz = pz.h.RotationAxisToRef(uz, bz, zz._RotationAxisCache), nz.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else nz = pz.h.RotationAxisToRef(uz, bz, zz._RotationAxisCache), this.rotationQuaternion.multiplyToRef(nz, this.rotationQuaternion);
          return this
        }
        rotateAround(zz, uz, bz) {
          uz.normalize(), this.rotationQuaternion || (this.rotationQuaternion = pz.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Vk(0));
          const Ez = pz.l.ER[0],
            nz = pz.l.ER[1],
            iz = pz.l.ER[2],
            lz = pz.l.Quaternion[0],
            Mz = pz.l.Matrix[0],
            tz = pz.l.Matrix[1],
            Hz = pz.l.Matrix[2],
            Oz = pz.l.Matrix[3];
          return zz.subtractToRef(this.position, Ez), pz.d.TranslationToRef(Ez.x, Ez.y, Ez.z, Mz), pz.d.TranslationToRef(-Ez.x, -Ez.y, -Ez.z, tz), pz.d.RotationAxisToRef(uz, bz, Hz), tz.multiplyToRef(Hz, Oz), Oz.multiplyToRef(Mz, Oz), Oz.decompose(nz, lz, iz), this.position.addInPlace(iz), lz.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(zz, uz, bz) {
          const Ez = zz.scale(uz);
          if (bz && 0 !== bz) this.setAbsolutePosition(this.getAbsolutePosition().add(Ez));
          else {
            const zz = this.getPositionExpressedInLocalSpace().add(Ez);
            this.setPositionWithLocalVector(zz)
          }
          return this
        }
        addRotation(zz, uz, bz) {
          let Ez;
          this.rotationQuaternion ? Ez = this.rotationQuaternion : (Ez = pz.l.Quaternion[1], pz.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Ez));
          const nz = pz.l.Quaternion[0];
          return pz.h.RotationYawPitchRollToRef(uz, zz, bz, nz), Ez.multiplyInPlace(nz), this.rotationQuaternion || Ez.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== zz.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Ez = this.XT().getRenderId();
          if (!this._isDirty && !uz && (this._currentRenderId === Ez || this.isSynchronized())) return this._currentRenderId = Ez, this._worldMatrix;
          bz = bz || this.XT().activeCamera, this._updateCache();
          const nz = this._cache;
          nz.pivotMatrixUpdated = !1, nz.billboardMode = this.billboardMode, nz.infiniteDistance = this.infiniteDistance, nz.parent = this._parentNode, this._currentRenderId = Ez, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const iz = this._getEffectiveParent(),
            lz = zz._TmpScaling;
          let Mz, tz = this._position;
          if (this._infiniteDistance && !this.parent && bz) {
            const uz = bz.getWorldMatrix().m;
            tz = zz._TmpTranslation, tz.P_(this._position.x + uz[12], this._position.y + uz[13], this._position.z + uz[14])
          }
          if (lz.P_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Mz = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(pz.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.P_(0, 0, 0))
            }
          } else Mz = zz._TmpRotation, pz.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Mz);
          if (this._usePivotMatrix) {
            const zz = pz.l.Matrix[1];
            pz.d.ScalingToRef(lz.x, lz.y, lz.z, zz);
            const uz = pz.l.Matrix[0];
            Mz.toRotationMatrix(uz), this._pivotMatrix.multiplyToRef(zz, pz.l.Matrix[4]), pz.l.Matrix[4].multiplyToRef(uz, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(tz.x, tz.y, tz.z)
          } else pz.d.ComposeToRef(lz, Mz, tz, this._localMatrix);
          if (iz && iz.getWorldMatrix) {
            if (uz && iz.computeWorldMatrix(uz), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const zz = this.parent;
                zz.getSkeleton().prepare(), zz.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), pz.l.Matrix[7])
              } else pz.l.Matrix[7].euz(iz.getWorldMatrix());
              const uz = pz.l.ER[5],
                bz = pz.l.ER[6],
                Ez = pz.l.Quaternion[0];
              pz.l.Matrix[7].decompose(bz, Ez, uz), pz.d.ScalingToRef(bz.x, bz.y, bz.z, pz.l.Matrix[7]), pz.l.Matrix[7].setTranslation(uz), zz.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Ez, uz), this._localMatrix.setTranslation(uz)), this._localMatrix.multiplyToRef(pz.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const zz = this.parent;
              zz.getSkeleton().prepare(), this._localMatrix.multiplyToRef(zz.getFinalMatrix(), pz.l.Matrix[6]), pz.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(iz.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.euz(this._localMatrix);
          if (bz && this.billboardMode)
            if (nz.useBillboardPosition) {
              const uz = pz.l.ER[0];
              this._worldMatrix.getTranslationToRef(uz);
              const Ez = bz.globalPosition;
              this._worldMatrix.invertToRef(pz.l.Matrix[1]);
              const nz = pz.l.ER[1];
              pz.n.TransformCoordinatesToRef(Ez, pz.l.Matrix[1], nz), nz.normalize();
              const iz = -Math.atan2(nz.z, nz.x) + Math.PI / 2,
                lz = Math.sqrt(nz.x * nz.x + nz.z * nz.z),
                Mz = -Math.atan2(nz.y, lz);
              if (pz.h.RotationYawPitchRollToRef(iz, Mz, 0, pz.l.Quaternion[0]), (this.billboardMode & zz.BILLBOARDMODE_ALL) !== zz.BILLBOARDMODE_ALL) {
                const uz = pz.l.ER[1];
                pz.l.Quaternion[0].toEulerAnglesToRef(uz), (this.billboardMode & zz.BILLBOARDMODE_X) !== zz.BILLBOARDMODE_X && (uz.x = 0), (this.billboardMode & zz.BILLBOARDMODE_Y) !== zz.BILLBOARDMODE_Y && (uz.y = 0), (this.billboardMode & zz.BILLBOARDMODE_Z) !== zz.BILLBOARDMODE_Z && (uz.z = 0), pz.d.RotationYawPitchRollToRef(uz.y, uz.x, uz.z, pz.l.Matrix[0])
              } else pz.d.FromQuaternionToRef(pz.l.Quaternion[0], pz.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pz.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pz.l.ER[0])
            } else {
              const uz = pz.l.ER[0];
              this._worldMatrix.getTranslationToRef(uz), pz.l.Matrix[1].euz(bz.getViewMatrix());
              const Ez = this.XT().useRightHandedSystem;
              if (Ez && pz.l.Matrix[1].multiplyToRef(zz._TmpRHRestore, pz.l.Matrix[1]), pz.l.Matrix[1].setTranslationFromFloats(0, 0, 0), pz.l.Matrix[1].invertToRef(pz.l.Matrix[0]), (this.billboardMode & zz.BILLBOARDMODE_ALL) !== zz.BILLBOARDMODE_ALL) {
                pz.l.Matrix[0].decompose(void 0, pz.l.Quaternion[0], void 0);
                const uz = pz.l.ER[1];
                pz.l.Quaternion[0].toEulerAnglesToRef(uz), (this.billboardMode & zz.BILLBOARDMODE_X) !== zz.BILLBOARDMODE_X && (uz.x = 0), (this.billboardMode & zz.BILLBOARDMODE_Y) !== zz.BILLBOARDMODE_Y && (uz.y = 0), (this.billboardMode & zz.BILLBOARDMODE_Z) !== zz.BILLBOARDMODE_Z && (uz.z = 0), Ez && (uz.y += Math.PI), pz.d.RotationYawPitchRollToRef(uz.y, uz.x, uz.z, pz.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pz.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pz.l.ER[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : iz && iz._nonUniformScaling ? this._updateNonUniformScalingState(iz._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.P_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = pz.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), zz) {
            const zz = this.getChildren();
            for (let uz = 0; uz < zz.length; ++uz) {
              const bz = zz[uz];
              if (bz) {
                bz.computeWorldMatrix();
                const zz = pz.l.Matrix[0];
                bz._localMatrix.multiplyToRef(this._localMatrix, zz);
                const uz = pz.l.Quaternion[0];
                zz.decompose(bz.ti, uz, bz.position), bz.rotationQuaternion ? bz.rotationQuaternion.euz(uz) : uz.toEulerAnglesToRef(bz.rotation)
              }
            }
          }
          this.ti.P_(1, 1, 1), this.position.P_(0, 0, 0), this.rotation.P_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = pz.h.Identity()), this._worldMatrix = pz.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(zz) {
          return this.onAfterWorldMatrixUpdateObservable.add(zz), this
        }
        unregisterAfterWorldMatrixUpdate(zz) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(zz), this
        }
        getPositionInCameraSpace() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return zz || (zz = this.XT().activeCamera), pz.n.TransformCoordinates(this.getAbsolutePosition(), zz.getViewMatrix())
        }
        getDistanceToCamera() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return zz || (zz = this.XT().activeCamera), this.getAbsolutePosition().subtract(zz.globalPosition).length()
        }
        clone(uz, bz, Ez) {
          const nz = Hz.e.Clone((() => new zz(uz, this.XT())), this);
          if (nz.name = uz, nz.id = uz, bz && (nz.parent = bz), !Ez) {
            const zz = this.getDescendants(!0);
            for (let bz = 0; bz < zz.length; bz++) {
              const Ez = zz[bz];
              Ez.clone && Ez.clone(uz + "." + Ez.name, nz)
            }
          }
          return nz
        }
        serialize(zz) {
          const uz = Hz.e.Serialize(this, zz);
          return uz.type = this.getClassName(), uz.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(uz), uz.localMatrix = this.getPivotMatrix().obz(), uz.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (uz.jT = !0), Hz.e.AppendSerializedAnimations(this, uz), uz.al = this.serializeAnimationRanges(), uz
        }
        getChildTransformNodes(uz, bz) {
          const Ez = [];
          return this._getDescendants(Ez, uz, (uz => (!bz || bz(uz)) && uz instanceof zz)), Ez
        }
        dispose(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.XT().stopAnimation(this), this.XT().removeTransformNode(this), this._parentContainer) {
            const zz = this._parentContainer.transformNodes.indexOf(this);
            zz > -1 && this._parentContainer.transformNodes.splice(zz, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), zz) {
            const zz = this.getChildTransformNodes(!0);
            for (const uz of zz) uz.parent = null, uz.computeWorldMatrix(!0)
          }
          super.dispose(zz, uz)
        }
        normalizeToUnitCube() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            bz = arguments.length > 2 ? arguments[2] : void 0,
            Ez = null,
            nz = null;
          uz && (this.rotationQuaternion ? (nz = this.rotationQuaternion.clone(), this.rotationQuaternion.P_(0, 0, 0, 1)) : this.rotation && (Ez = this.rotation.clone(), this.rotation.P_(0, 0, 0)));
          const iz = this.getHierarchyBoundingVectors(zz, bz),
            lz = iz.max.subtract(iz.min),
            Mz = Math.max(lz.x, lz.y, lz.z);
          if (0 === Mz) return this;
          const tz = 1 / Mz;
          return this.ti.scaleInPlace(tz), uz && (this.rotationQuaternion && nz ? this.rotationQuaternion.euz(nz) : this.rotation && Ez && this.rotation.euz(Ez)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Hz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, tz.D)("position")], bz = [(0, tz.D)("rotation")], Ez = [(0, tz.A)("rotationQuaternion")], nz = [(0, tz.D)("ti")], iz = [(0, tz.G)("billboardMode")], lz = [(0, tz.G)()], Fz = [(0, tz.G)("infiniteDistance")], Zz = [(0, tz.G)()], Rz = [(0, tz.G)()], (0, Mz.h)(null, null, uz, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: zz => "_position" in zz,
            get: zz => zz._position,
            set: (zz, uz) => {
              zz._position = uz
            }
          },
          metadata: Hz
        }, wz, Xz), (0, Mz.h)(null, null, bz, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_rotation" in zz,
            get: zz => zz._rotation,
            set: (zz, uz) => {
              zz._rotation = uz
            }
          },
          metadata: Hz
        }, fz, sz), (0, Mz.h)(null, null, Ez, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: zz => "_rotationQuaternion" in zz,
            get: zz => zz._rotationQuaternion,
            set: (zz, uz) => {
              zz._rotationQuaternion = uz
            }
          },
          metadata: Hz
        }, rz, oz), (0, Mz.h)(null, null, nz, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "_scaling" in zz,
            get: zz => zz._scaling,
            set: (zz, uz) => {
              zz._scaling = uz
            }
          },
          metadata: Hz
        }, Nz, vz), (0, Mz.h)(null, null, iz, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_billboardMode" in zz,
            get: zz => zz._billboardMode,
            set: (zz, uz) => {
              zz._billboardMode = uz
            }
          },
          metadata: Hz
        }, xz, Jz), (0, Mz.h)(null, null, lz, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: zz => "scalingDeterminant" in zz,
            get: zz => zz.scalingDeterminant,
            set: (zz, uz) => {
              zz.scalingDeterminant = uz
            }
          },
          metadata: Hz
        }, Az, Tz), (0, Mz.h)(null, null, Fz, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "_infiniteDistance" in zz,
            get: zz => zz._infiniteDistance,
            set: (zz, uz) => {
              zz._infiniteDistance = uz
            }
          },
          metadata: Hz
        }, Lz, Pz), (0, Mz.h)(null, null, Zz, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "ignoreNonUniformScaling" in zz,
            get: zz => zz.ignoreNonUniformScaling,
            set: (zz, uz) => {
              zz.ignoreNonUniformScaling = uz
            }
          },
          metadata: Hz
        }, Gz, az), (0, Mz.h)(null, null, Rz, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: zz => "reIntegrateRotationIntoRotationQuaternion" in zz,
            get: zz => zz.reIntegrateRotationIntoRotationQuaternion,
            set: (zz, uz) => {
              zz.reIntegrateRotationIntoRotationQuaternion = uz
            }
          },
          metadata: Hz
        }, Vz, mz), Hz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hz
        })
      })(), zz.BILLBOARDMODE_NONE = 0, zz.BILLBOARDMODE_X = 1, zz.BILLBOARDMODE_Y = 2, zz.BILLBOARDMODE_Z = 4, zz.BILLBOARDMODE_ALL = 7, zz.BILLBOARDMODE_USE_POSITION = 128, zz.BillboardUseParentOrientation = !1, zz._TmpRotation = pz.h.Zero(), zz._TmpScaling = pz.n.Zero(), zz._TmpTranslation = pz.n.Zero(), zz._TmpRHRestore = pz.d.Scaling(1, 1, -1), zz._LookAtVectorCache = new pz.n(0, 0, 0), zz._RotationAxisCache = new pz.h, zz
    })();

    function Kz(zz, uz, bz) {
      const Ez = Hz.e.Parse((() => new Rz(zz.name, uz)), zz, uz, bz);
      if (zz.localMatrix ? Ez.setPreTransformMatrix(pz.d.FromArray(zz.localMatrix)) : zz.pivotMatrix && Ez.setPivotMatrix(pz.d.FromArray(zz.pivotMatrix)), Ez.Zx(zz.isEnabled), Ez._waitingParsedUniqueId = zz.uniqueId, void 0 !== zz.parentId && (Ez._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (Ez._waitingParentInstanceIndex = zz.parentInstanceIndex), zz.jT && (Ez._waitingFreezeWorldMatrix = zz.jT), zz.animations) {
        for (let uz = 0; uz < zz.animations.length; uz++) {
          const bz = zz.animations[uz],
            nz = (0, Fz.b)("BABYLON.Animation");
          nz && Ez.animations.push(nz.Parse(bz))
        }
        dz.c.ParseAnimationRanges(Ez, zz, uz)
      }
      return zz.autoAnimate && uz.beginAnimation(Ez, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), Ez
    }
    let wz = !1;

    function Xz() {
      wz || (wz = !0, Rz.Parse = Kz)
    }(Ez = Rz.prototype).Km ?? (Ez.Km = (0, Zz.h)("TransformNode", "Km")), (nz = Rz.prototype).applyImpulse ?? (nz.applyImpulse = (0, Zz.h)("TransformNode", "applyImpulse")), (iz = Rz.prototype).applyAngularImpulse ?? (iz.applyAngularImpulse = (0, Zz.h)("TransformNode", "applyAngularImpulse")), (lz = Rz.prototype).applyTorque ?? (lz.applyTorque = (0, Zz.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Rz.prototype, "physicsBody") || Object.defineProperty(Rz.prototype, "physicsBody", (0, Zz.f)("TransformNode", "physicsBody"))
  },
  39589: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      try {
        const Ez = zz.next();
        Ez.done ? uz(Ez) : Ez.value ? Ez.value.then((() => {
          Ez.value = void 0, uz(Ez)
        }), bz) : uz(Ez)
      } catch (Ez) {
        bz(Ez)
      }
    }

    function nz() {
      let zz, uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (bz, nz, iz) => {
        const lz = performance.now();
        void 0 === zz || lz - zz > uz ? (zz = lz, setTimeout((() => {
          Ez(bz, nz, iz)
        }), 0)) : Ez(bz, nz, iz)
      }
    }

    function iz(zz, uz, bz, Ez, nz) {
      const iz = () => {
        let lz;
        const Mz = zz => {
          zz.done ? bz(zz.value) : void 0 === lz ? lz = !0 : iz()
        };
        do {
          lz = void 0, nz && nz.aborted ? Ez(new Error("Aborted")) : uz(zz, Mz, Ez), void 0 === lz && (lz = !1)
        } while (lz)
      };
      iz()
    }

    function lz(zz, uz) {
      let bz;
      return iz(zz, Ez, (zz => bz = zz), (zz => {
        throw zz
      }), uz), bz
    }
    async function Mz(zz, uz, bz) {
      return await new Promise(((Ez, nz) => {
        iz(zz, uz, Ez, nz, bz)
      }))
    }

    function tz(zz, uz) {
      return function() {
        return lz(zz(...arguments), uz)
      }
    }
    bz.d(uz, {
      e: () => nz,
      i: () => tz,
      m: () => Mz,
      q: () => lz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
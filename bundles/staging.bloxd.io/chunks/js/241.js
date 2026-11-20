export const id = 241;
export const ids = [241];
export const modules = {
  39370: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => gz,
      c: () => Pz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39270),
      Oz = sz(36505),
      oz = sz(36475),
      vz = sz(39374),
      Uz = sz(38097),
      Kz = sz(36518),
      uz = sz(39065),
      Nz = sz(37536),
      bz = sz(37191),
      wz = sz(39132),
      Dz = sz(39181);
    let gz = (() => {
      var zz;
      let tz, sz, Kz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz = vz.e,
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        iz = [],
        Lz = [],
        lz = [],
        nz = [],
        az = [],
        qz = [],
        Sz = [],
        Vz = [],
        Rz = [],
        pz = [],
        fz = [],
        Ez = [],
        zt = [],
        tt = [],
        st = [],
        Ft = [],
        Wt = [];
      return zz = class extends cz {
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
          let tz, sz;
          if (this.mode === zz.PERSPECTIVE_CAMERA) this.fovMode === zz.FOVMODE_VERTICAL_FIXED ? (sz = 2 * this.minZ * Math.tan(this.fov / 2), tz = this.FD().getAspectRatio(this) * sz) : (tz = 2 * this.minZ * Math.tan(this.fov / 2), sz = tz / this.FD().getAspectRatio(this));
          else {
            const zz = this.FD().getRenderWidth() / 2,
              Fz = this.FD().getRenderHeight() / 2;
            tz = (this.orthoRight ?? zz) - (this.orthoLeft ?? -zz), sz = (this.orthoTop ?? Fz) - (this.orthoBottom ?? -Fz)
          }
          return tz * sz
        }
        set orthoLeft(zz) {
          this._orthoLeft = zz;
          for (const tz of this._rigCameras) tz.orthoLeft = zz
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(zz) {
          this._orthoRight = zz;
          for (const tz of this._rigCameras) tz.orthoRight = zz
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(zz) {
          this._orthoBottom = zz;
          for (const tz of this._rigCameras) tz.orthoBottom = zz
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(zz) {
          this._orthoTop = zz;
          for (const tz of this._rigCameras) tz.orthoTop = zz
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(tz / (2 * zz))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(zz) {
          this._baseInertia = zz
        }
        set mode(zz) {
          this._mode = zz;
          for (const tz of this._rigCameras) tz.mode = zz
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(tz, sz, Wz) {
          let vz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, wz.d)(), super(tz, Wz, !1), this.inputs = (0, Fz.k)(this, jz), this._position = (0, Fz.k)(this, Az, oz.p.Zero()), this._upVector = ((0, Fz.k)(this, yz), (0, Fz.k)(this, Mz, oz.p.Up())), this.oblique = ((0, Fz.k)(this, dz), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Fz.k)(this, hz, .8), this.projectionPlaneTilt = ((0, Fz.k)(this, Qz), (0, Fz.k)(this, kz, 0)), this.minZ = ((0, Fz.k)(this, iz), (0, Fz.k)(this, Lz, 1)), this.maxZ = ((0, Fz.k)(this, lz), (0, Fz.k)(this, nz, 1e4)), this._baseInertia = ((0, Fz.k)(this, az), .9), this._mode = zz.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Nz.b(0, 0, 1, 1), this.layerMask = (0, Fz.k)(this, qz, 268435455), this.fovMode = ((0, Fz.k)(this, Sz), (0, Fz.k)(this, Vz, zz.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Fz.k)(this, Rz), (0, Fz.k)(this, pz, zz.RIG_MODE_NONE)), this.interaxialDistance = ((0, Fz.k)(this, fz), (0, Fz.k)(this, Ez, void 0)), this.isStereoscopicSideBySide = ((0, Fz.k)(this, zt), (0, Fz.k)(this, tt, void 0)), this.ignoreCameraMaxZ = ((0, Fz.k)(this, st), (0, Fz.k)(this, Ft, !1)), this.customRenderTargets = ((0, Fz.k)(this, Wt), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Oz.c, this.onProjectionMatrixChangedObservable = new Oz.c, this.onAfterCheckInputsObservable = new Oz.c, this.onRestoreStateObservable = new Oz.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new oz.e, this._postProcesses = new Array, this._activeMeshes = new Xz.h(256), this._globalPosition = oz.p.Zero(), this._computedViewMatrix = oz.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = oz.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = oz.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.aJ().defaultCameraLayerMask, this.aJ().addCamera(this), vz && !this.aJ().activeCamera && (this.aJ().activeCamera = this), this.position = sz, this.renderPassId = this.aJ().FD().createRenderPassId(`Camera ${tz}`)
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
          return "Tg"
        }
        toString(zz) {
          let tz = "Name: " + this.name;
          if (tz += ", type: " + this.getClassName(), this.animations)
            for (let sz = 0; sz < this.animations.length; sz++) tz += ", animation[0]: " + this.animations[sz].toString(zz);
          return tz
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
            for (const tz of this._postProcesses)
              if (tz && !tz.isReady()) return !1;
          return super.isReady(zz)
        }
        _initCache() {
          super._initCache(), this._cache.position = new oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(zz) {
          zz || super._updateCache(), this._cache.position.vsz(this.position), this._cache.upVector.vsz(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const tz = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let sz = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === tz;
          if (!sz) return !1;
          const Fz = this.FD();
          return this.mode === zz.PERSPECTIVE_CAMERA ? sz = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Fz.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (sz = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Fz.getRenderWidth() && this._cache.renderHeight === Fz.getRenderHeight(), this.oblique && (sz = sz && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), sz
        }
        attachControl(zz, tz) {}
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
          for (let tz = 0, sz = this._rigCameras.length; tz < sz; tz++) {
            const zz = this._rigCameras[tz],
              sz = zz._rigPostProcess;
            if (sz) {
              "pass" === sz.getEffectName() && (zz.isIntermediate = 0 === this._postProcesses.length), zz._postProcesses = this._postProcesses.slice(0).concat(sz), sz.markTextureDirty()
            } else zz._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !zz.isReusable() && this._postProcesses.indexOf(zz) > -1 ? (Uz.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == tz || tz < 0 ? this._postProcesses.push(zz) : null === this._postProcesses[tz] ? this._postProcesses[tz] = zz : this._postProcesses.splice(tz, 0, zz), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.wtz(), this._postProcesses.indexOf(zz))
        }
        detachPostProcess(zz) {
          const tz = this._postProcesses.indexOf(zz); - 1 !== tz && (this._postProcesses[tz] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.wtz(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return oz.e.Identity()
        }
        getViewMatrix(zz) {
          return !zz && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.aJ().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(zz) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== zz && (this._projectionMatrix = zz)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(tz) {
          if (this._doNotComputeProjectionMatrix || !tz && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const sz = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = sz, this._refreshFrustumPlanes = !0;
          const Fz = this.FD(),
            Wz = this.aJ(),
            Xz = Fz.ysz;
          if (this.mode === zz.PERSPECTIVE_CAMERA) {
            let tz;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Fz.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), tz = Wz.useRightHandedSystem ? oz.e.PerspectiveFovRHToRef : oz.e.PerspectiveFovLHToRef, tz(this.fov, Fz.getAspectRatio(this), Xz ? sz : this.minZ, Xz ? this.minZ : sz, this._projectionMatrix, this.fovMode === zz.FOVMODE_VERTICAL_FIXED, Fz.isNDCHalfZRange, this.projectionPlaneTilt, Xz)
          } else {
            const zz = Fz.getRenderWidth() / 2,
              tz = Fz.getRenderHeight() / 2;
            Wz.useRightHandedSystem ? this.oblique ? oz.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -tz, this.orthoTop ?? tz, Xz ? sz : this.minZ, Xz ? this.minZ : sz, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Fz.isNDCHalfZRange) : oz.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -tz, this.orthoTop ?? tz, Xz ? sz : this.minZ, Xz ? this.minZ : sz, this._projectionMatrix, Fz.isNDCHalfZRange) : this.oblique ? oz.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -tz, this.orthoTop ?? tz, Xz ? sz : this.minZ, Xz ? this.minZ : sz, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Fz.isNDCHalfZRange) : oz.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -zz, this.orthoRight ?? zz, this.orthoBottom ?? -tz, this.orthoTop ?? tz, Xz ? sz : this.minZ, Xz ? this.minZ : sz, this._projectionMatrix, Fz.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Fz.getRenderWidth(), this._cache.renderHeight = Fz.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(zz) {
          return (this.radius || (this.target ? oz.p.Distance(this.position, this.target) : this.position.length())) + zz
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? bz.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = bz.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), tz && this.rigCameras.length > 0) {
            let tz = !1;
            for (const sz of this.rigCameras) sz._updateFrustumPlanes(), tz = tz || zz.isInFrustum(sz._frustumPlanes);
            return tz
          }
          return zz.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(zz) {
          return this._updateFrustumPlanes(), zz.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, uz.i)("Ray")
        }
        getForwardRayToRef(zz) {
          throw (0, uz.i)("Ray")
        }
        dispose(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.aJ().stopAnimation(this), this.aJ().removeCamera(this); this._rigCameras.length > 0;) {
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
              const tz = this._postProcesses[zz];
              tz && tz.dispose(this)
            }
          }
          let Fz = this.customRenderTargets.length;
          for (; --Fz >= 0;) this.customRenderTargets[Fz].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.aJ().FD().releaseRenderPassId(this.renderPassId), super.dispose(tz, sz)
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
        setCameraRigMode(tz, sz) {
          if (this.cameraRigMode !== tz) {
            for (; this._rigCameras.length > 0;) {
              const zz = this._rigCameras.pop();
              zz && zz.dispose()
            }
            if (this.cameraRigMode = tz, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = sz.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== zz.RIG_MODE_NONE) {
              const zz = this.createRigCamera(this.name + "_L", 0);
              zz && (zz._isLeftCamera = !0);
              const tz = this.createRigCamera(this.name + "_R", 1);
              tz && (tz._isRightCamera = !0), zz && tz && (this._rigCameras.push(zz), this._rigCameras.push(tz))
            }
            this._setRigMode(sz), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(zz) {}
        _getVRProjectionMatrix() {
          return oz.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.FD().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(zz, tz) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[zz] = tz, "interaxialDistance" === zz && (this._cameraRigParams.stereoHalfAngle = tz / .0637 * (Math.PI / 180))
        }
        createRigCamera(zz, tz) {
          return null
        }
        _updateRigCameras() {
          for (let zz = 0; zz < this._rigCameras.length; zz++) this._rigCameras[zz].minZ = this.minZ, this._rigCameras[zz].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[zz].fov = this.fov, this._rigCameras[zz].upVector.vsz(this.upVector);
          this.cameraRigMode === zz.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const zz = Dz.e.Serialize(this);
          return zz.uniqueId = this.uniqueId, zz.type = this.getClassName(), this.parent && this.parent._serializeAsParent(zz), this.inputs && this.inputs.serialize(zz), Dz.e.AppendSerializedAnimations(this, zz), zz.du = this.serializeAnimationRanges(), zz.isEnabled = this.isEnabled(), zz
        }
        clone(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Fz = Dz.e.Clone(zz.GetConstructorFromName(this.getClassName(), tz, this.aJ(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Fz.name = tz, Fz.parent = sz, this.onClonedObservable.notifyObservers(Fz), Fz
        }
        Mq(zz) {
          const tz = oz.p.Zero();
          return this.getDirectionToRef(zz, tz), tz
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(zz, tz) {
          oz.p.TransformNormalToRef(zz, this.getWorldMatrix(), tz)
        }
        static GetConstructorFromName(tz, sz, Fz) {
          let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Xz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Oz = vz.e.Construct(tz, sz, Fz, {
            interaxial_distance: Wz,
            isStereoscopicSideBySide: Xz
          });
          return Oz || (() => zz._CreateDefaultParsedCamera(sz, Fz))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let zz = this.aJ().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (zz *= -1), zz
        }
      }, (() => {
        const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(cz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Wz.H)("position")], sz = [(0, Wz.H)("upVector")], Kz = [(0, Wz.J)()], gz = [(0, Wz.J)()], Hz = [(0, Wz.J)()], Bz = [(0, Wz.J)()], Pz = [(0, Wz.J)()], rz = [(0, Wz.J)()], Yz = [(0, Wz.J)()], xz = [(0, Wz.J)()], mz = [(0, Wz.J)()], Jz = [(0, Wz.J)()], Iz = [(0, Wz.J)()], Cz = [(0, Wz.J)()], ez = [(0, Wz.J)()], Zz = [(0, Wz.J)()], Gz = [(0, Wz.J)()], Tz = [(0, Wz.J)()], (0, Fz.h)(zz, null, Kz, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoLeft" in zz,
            get: zz => zz.orthoLeft
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(zz, null, gz, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoRight" in zz,
            get: zz => zz.orthoRight
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(zz, null, Hz, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoBottom" in zz,
            get: zz => zz.orthoBottom
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(zz, null, Bz, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: zz => "orthoTop" in zz,
            get: zz => zz.orthoTop
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(zz, null, mz, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: zz => "inertia" in zz,
            get: zz => zz.inertia
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(zz, null, Jz, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: zz => "mode" in zz,
            get: zz => zz.mode
          },
          metadata: Xz
        }, null, jz), (0, Fz.h)(null, null, tz, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: zz => "_position" in zz,
            get: zz => zz._position,
            set: (zz, tz) => {
              zz._position = tz
            }
          },
          metadata: Xz
        }, Az, yz), (0, Fz.h)(null, null, sz, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: zz => "_upVector" in zz,
            get: zz => zz._upVector,
            set: (zz, tz) => {
              zz._upVector = tz
            }
          },
          metadata: Xz
        }, Mz, dz), (0, Fz.h)(null, null, Pz, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: zz => "fov" in zz,
            get: zz => zz.fov,
            set: (zz, tz) => {
              zz.fov = tz
            }
          },
          metadata: Xz
        }, hz, Qz), (0, Fz.h)(null, null, rz, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: zz => "projectionPlaneTilt" in zz,
            get: zz => zz.projectionPlaneTilt,
            set: (zz, tz) => {
              zz.projectionPlaneTilt = tz
            }
          },
          metadata: Xz
        }, kz, iz), (0, Fz.h)(null, null, Yz, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "minZ" in zz,
            get: zz => zz.minZ,
            set: (zz, tz) => {
              zz.minZ = tz
            }
          },
          metadata: Xz
        }, Lz, lz), (0, Fz.h)(null, null, xz, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "maxZ" in zz,
            get: zz => zz.maxZ,
            set: (zz, tz) => {
              zz.maxZ = tz
            }
          },
          metadata: Xz
        }, nz, az), (0, Fz.h)(null, null, Iz, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: zz => "layerMask" in zz,
            get: zz => zz.layerMask,
            set: (zz, tz) => {
              zz.layerMask = tz
            }
          },
          metadata: Xz
        }, qz, Sz), (0, Fz.h)(null, null, Cz, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "fovMode" in zz,
            get: zz => zz.fovMode,
            set: (zz, tz) => {
              zz.fovMode = tz
            }
          },
          metadata: Xz
        }, Vz, Rz), (0, Fz.h)(null, null, ez, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "cameraRigMode" in zz,
            get: zz => zz.cameraRigMode,
            set: (zz, tz) => {
              zz.cameraRigMode = tz
            }
          },
          metadata: Xz
        }, pz, fz), (0, Fz.h)(null, null, Zz, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "interaxialDistance" in zz,
            get: zz => zz.interaxialDistance,
            set: (zz, tz) => {
              zz.interaxialDistance = tz
            }
          },
          metadata: Xz
        }, Ez, zt), (0, Fz.h)(null, null, Gz, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: zz => "isStereoscopicSideBySide" in zz,
            get: zz => zz.isStereoscopicSideBySide,
            set: (zz, tz) => {
              zz.isStereoscopicSideBySide = tz
            }
          },
          metadata: Xz
        }, tt, st), (0, Fz.h)(null, null, Tz, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: zz => "ignoreCameraMaxZ" in zz,
            get: zz => zz.ignoreCameraMaxZ,
            set: (zz, tz) => {
              zz.ignoreCameraMaxZ = tz
            }
          },
          metadata: Xz
        }, Ft, Wt), Xz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xz
        })
      })(), zz._CreateDefaultParsedCamera = (zz, tz) => {
        throw (0, uz.i)("UniversalCamera")
      }, zz.PERSPECTIVE_CAMERA = 0, zz.ORTHOGRAPHIC_CAMERA = 1, zz.FOVMODE_VERTICAL_FIXED = 0, zz.FOVMODE_HORIZONTAL_FIXED = 1, zz.RIG_MODE_NONE = 0, zz.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, zz.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, zz.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, zz.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, zz.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, zz.RIG_MODE_VR = 20, zz.RIG_MODE_CUSTOM = 22, zz.ForceAttachControlToAlwaysPreventDefault = !1, zz
    })();

    function Hz(zz, tz) {
      const sz = zz.type,
        Fz = gz.GetConstructorFromName(sz, zz.name, tz, zz.interaxial_distance, zz.isStereoscopicSideBySide),
        Wz = Dz.e.Parse(Fz, zz, tz);
      if (void 0 !== zz.parentId && (Wz._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (Wz._waitingParentInstanceIndex = zz.parentInstanceIndex), Wz.inputs && (Wz.inputs.parse(zz), Wz._setupInputs()), zz.upVector && (Wz.upVector = oz.p.FromArray(zz.upVector)), Wz.setPosition && (Wz.position.m_(0, 0, 0), Wz.setPosition(oz.p.FromArray(zz.position))), zz.target && Wz.setTarget && Wz.setTarget(oz.p.FromArray(zz.target)), zz.cameraRigMode) {
        const tz = zz.interaxial_distance ? {
          interaxialDistance: zz.interaxial_distance
        } : {};
        Wz.setCameraRigMode(zz.cameraRigMode, tz)
      }
      if (zz.animations) {
        for (let tz = 0; tz < zz.animations.length; tz++) {
          const sz = zz.animations[tz],
            Fz = (0, Kz.e)("BABYLON.Animation");
          Fz && Wz.animations.push(Fz.Parse(sz))
        }
        vz.e.ParseAnimationRanges(Wz, zz, tz)
      }
      return zz.autoAnimate && tz.beginAnimation(Wz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), void 0 !== zz.isEnabled && Wz.Xx(zz.isEnabled), Wz
    }
    let Bz = !1;

    function Pz() {
      Bz || (Bz = !0, gz.Parse = Hz)
    }
  },
  39390: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz) {
        this._cameraPosition = tz, this._behavior = sz, this.activeInput = !1, this.speed = 1, this.cL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Fz.p, this.rotationAccumulatedPixels = new Fz.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Fz.p.Zero(), this.rotationDeltaCurrentFrame = Fz.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new Fz.p, this.referenceFrameRate = 60, this._rotationVelocity = new Fz.p, this._prevFrameTimeMs = 0, this._scene = zz
      }
      computeCurrentFrameDeltas() {
        const zz = this._scene.FD().getDeltaTime(),
          tz = this._getEffectiveDeltaMs(zz);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Z6(0), this.rotationDeltaCurrentFrame.Z6(0), this.zoomDeltaCurrentFrame = 0, void(zz > 0 && (this._prevFrameTimeMs = zz));
        this.panDeltaCurrentFrame.Z6(0), this.rotationDeltaCurrentFrame.Z6(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.m_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * tz, this.panDeltaCurrentFrame), this._rotationVelocity.m_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.m_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * tz, this._rotationVelocity.y * this.speed * this.rotationYSpeed * tz, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.cL * this._zoomSpeedMultiplier) * tz, zz > 0 && (this._prevFrameTimeMs = zz), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Z6(0), this.rotationAccumulatedPixels.Z6(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Z6(0), this.rotationAccumulatedPixels.Z6(0)
      }
      resetPanVelocity() {
        this._panVelocity.Z6(0), this.panAccumulatedPixels.Z6(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(zz) {
        const tz = this._scene.FD().getDeltaTime(),
          sz = this._getEffectiveDeltaMs(tz),
          Fz = 1e3 / this.referenceFrameRate;
        return Math.pow(zz, sz / Fz)
      }
      getFrameIndependentInputScale(zz) {
        const tz = 1 - zz;
        if (tz <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(zz)) / tz
      }
      _getEffectiveDeltaMs(zz) {
        return zz > 0 ? zz : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(zz, tz, sz) {
        let Fz = zz;
        const Wz = this._scene.FD().getDeltaTime(),
          Xz = this._getEffectiveDeltaMs(Wz);
        if (0 === Xz) return Fz;
        const Oz = this.getFrameIndependentDecay(sz);
        if (Fz *= Oz, 0 !== tz || this.activeInput) {
          const zz = 1 - sz;
          Fz += tz / Xz * (zz > 0 ? (1 - Oz) / zz : 1)
        } else Math.abs(Fz) < 1e-6 && (Fz = 0);
        return Fz
      }
    }
  },
  39395: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz, tz) {
        this.inputMap = [], this.handlers = zz, this._createDefaultEntries = tz, this.resetInputMap()
      }
      resolveInteraction(zz, tz) {
        for (const sz of this.inputMap)
          if (sz.source === zz && this._entryMatches(sz, tz)) return sz;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(zz, tz, sz) {
        const Fz = this.inputMap;
        for (let Wz = 0; Wz < Fz.length; Wz++) {
          const Xz = Fz[Wz];
          if (Xz.source === zz && Xz.interaction === tz && this._entryConditionsMatch(Xz, sz)) return Xz
        }
      }
      getEntries(zz, tz, sz) {
        const Fz = [],
          Wz = this.inputMap;
        for (let Xz = 0; Xz < Wz.length; Xz++) {
          const Oz = Wz[Xz];
          Oz.source === zz && Oz.interaction === tz && this._entryConditionsMatch(Oz, sz) && Fz.push(Oz)
        }
        return Fz
      }
      addEntry(zz) {
        const tz = this._entrySpecificity(zz);
        let sz = this.inputMap.length;
        for (let Fz = 0; Fz < this.inputMap.length; Fz++)
          if (this._entrySpecificity(this.inputMap[Fz]) < tz) {
            sz = Fz;
            break
          } this.inputMap.splice(sz, 0, zz)
      }
      setInteraction(zz, tz, sz) {
        const Fz = this.resolveInteraction(zz, tz);
        return Fz && this._entryCoversAllConditionsOf(Fz, tz) ? (Fz.interaction = sz, !0) : (this.addEntry({
          source: zz,
          ...tz ?? {},
          interaction: sz
        }), !0)
      }
      _entryCoversAllConditionsOf(zz, tz) {
        if (!tz) return !0;
        const sz = zz;
        for (const Fz of Object.keys(tz)) {
          const zz = tz[Fz];
          if (void 0 !== zz)
            if ("modifiers" === Fz) {
              const tz = sz.modifiers ?? {};
              for (const sz of Object.keys(zz))
                if (void 0 !== zz[sz] && void 0 === tz[sz]) return !1
            } else if (void 0 === sz[Fz]) return !1
        }
        return !0
      }
      setInteractions(zz, tz, sz) {
        let Fz = 0;
        const Wz = this.inputMap;
        for (let Xz = 0; Xz < Wz.length; Xz++) {
          const Oz = Wz[Xz];
          Oz.source === zz && this._entryMatches(Oz, tz) && (Oz.interaction = sz, Fz++)
        }
        return Fz
      }
      _entryMatches(zz, tz) {
        switch (zz.source) {
          case "pointer":
            return (void 0 === zz.button || zz.button === tz?.button) && this._matchModifiers(zz.modifiers, tz?.modifiers);
          case "wheel":
            return this._matchModifiers(zz.modifiers, tz?.modifiers);
          case "touch":
            return void 0 === zz.touchCount || zz.touchCount === tz?.touchCount;
          case "keyboard":
            return (void 0 === zz.key || (Array.isArray(zz.key) ? -1 !== zz.key.indexOf(tz?.key ?? -1) : zz.key === tz?.key)) && this._matchModifiers(zz.modifiers, tz?.modifiers)
        }
      }
      _entryConditionsMatch(zz, tz) {
        if (!tz) return !0;
        switch (zz.source) {
          case "pointer":
            return (!("button" in tz) || zz.button === tz.button) && (!("modifiers" in tz) || this._entryModifiersMatch(zz.modifiers, tz.modifiers));
          case "wheel":
            return !("modifiers" in tz) || this._entryModifiersMatch(zz.modifiers, tz.modifiers);
          case "touch":
            return !("touchCount" in tz) || zz.touchCount === tz.touchCount;
          case "keyboard":
            if ("key" in tz) {
              if (void 0 === zz.key) return void 0 === tz.key;
              if (void 0 === tz.key || (Array.isArray(zz.key) ? -1 === zz.key.indexOf(tz.key) : zz.key !== tz.key)) return !1
            }
            return !("modifiers" in tz) || this._entryModifiersMatch(zz.modifiers, tz.modifiers)
        }
      }
      _entrySpecificity(zz) {
        let tz = 0;
        return "button" in zz && void 0 !== zz.button && tz++, "key" in zz && void 0 !== zz.key && tz++, "touchCount" in zz && void 0 !== zz.touchCount && tz++, "modifiers" in zz && zz.modifiers && tz++, tz
      }
      _matchModifiers(zz, tz) {
        return !zz || (void 0 === zz.ctrl || zz.ctrl === (tz?.ctrl ?? !1)) && ((void 0 === zz.shift || zz.shift === (tz?.shift ?? !1)) && (void 0 === zz.alt || zz.alt === (tz?.alt ?? !1)))
      }
      _entryModifiersMatch(zz, tz) {
        if (!tz) return !zz;
        return void 0 !== tz.ctrl || void 0 !== tz.shift || void 0 !== tz.alt ? (void 0 === tz.ctrl || zz?.ctrl === tz.ctrl) && ((void 0 === tz.shift || zz?.shift === tz.shift) && (void 0 === tz.alt || zz?.alt === tz.alt)) : !zz || void 0 === zz.ctrl && void 0 === zz.shift && void 0 === zz.alt
      }
    }
  },
  39362: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Hz,
      h: () => Dz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39370),
      Oz = sz(36475),
      oz = sz(36479),
      vz = sz(39382),
      Uz = sz(39374),
      Kz = sz(39390),
      uz = sz(39395);
    class Nz extends Kz.b {
      constructor(zz, tz, sz) {
        super(zz, tz, sz), this.input = new uz.d({
          translate: (zz, tz, sz) => {
            this.panAccumulatedPixels.x += zz, this.panAccumulatedPixels.y += tz, this.panAccumulatedPixels.z += sz
          },
          rotate: (zz, tz) => {
            this.rotationAccumulatedPixels.x += zz, this.rotationAccumulatedPixels.y += tz
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
    const bz = Oz.e.Zero(),
      wz = Oz.h.Identity();
    let Dz = (() => {
        var zz;
        let tz, sz, Uz, Kz, uz = Xz.b,
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [],
          Pz = [],
          rz = [],
          Yz = [],
          xz = [];
        return zz = class extends uz {
          get inertia() {
            return this._targetInertia
          }
          set inertia(zz) {
            this._targetInertia = zz, this.movement && (this.movement.panInertia = zz, this.movement.rotationInertia = zz)
          }
          constructor(zz, tz, sz) {
            super(zz, tz, sz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Oz.p(0, 0, 0), this.cameraRotation = new Oz.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Fz.k)(this, Dz, !1), this.rotation = ((0, Fz.k)(this, gz), (0, Fz.k)(this, Hz, void 0)), this.rotationQuaternion = (0, Fz.k)(this, Bz), this.speed = (0, Fz.k)(this, Pz, 2), this.noRotationConstraint = ((0, Fz.k)(this, rz), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = oz.c, this._rotationEpsilon = oz.c, this.lockedTarget = (0, Fz.k)(this, Yz, null), this._currentTarget = ((0, Fz.k)(this, xz), Oz.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Oz.e.Zero(), this._cameraTransformMatrix = Oz.e.Zero(), this._cameraRotationMatrix = Oz.e.Zero(), this._transformedReferencePoint = Oz.p.Zero(), this._deferredPositionUpdate = new Oz.p, this._deferredRotationQuaternionUpdate = new Oz.h, this._deferredRotationUpdate = new Oz.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Oz.p.Forward(this.aJ().useRightHandedSystem), this.rotation = new Oz.p(0, this.aJ().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Nz(this.aJ(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(zz) {
            this.getWorldMatrix();
            const tz = Oz.m.XD[0],
              sz = Oz.m.XD[1];
            return sz.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(sz, tz), tz.scaleInPlace(zz), this.globalPosition.add(tz)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.m_(0, 0, 0), this.cameraRotation.m_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Oz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Oz.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(zz) {
            zz || super._updateCache();
            const tz = this._getLockedTargetPosition();
            tz ? this._cache.lockedTarget ? this._cache.lockedTarget.vsz(tz) : this._cache.lockedTarget = tz.clone() : this._cache.lockedTarget = null, this._cache.rotation.vsz(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.vsz(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const zz = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(zz) : !zz) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const zz = this.FD();
            return this.speed * Math.sqrt(zz.getDeltaTime() / (100 * zz.getFps()))
          }
          setTarget(zz) {
            this.upVector.normalize(), this._initialFocalDistance = zz.subtract(this.position).length(), this.position.z === zz.z && (this.position.z += oz.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.aJ().useRightHandedSystem ? Oz.e.LookAtRHToRef(this.position, zz, Oz.p.UpReadOnly, bz) : Oz.e.LookAtLHToRef(this.position, zz, Oz.p.UpReadOnly, bz), bz.invert();
            const tz = this.rotationQuaternion || wz;
            Oz.h.FromRotationMatrixToRef(bz, tz), tz.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Oz.m.Matrix[0]), Oz.p.TransformNormalToRef(this.cameraDirection, Oz.m.Matrix[0], Oz.m.XD[0]), this._deferredPositionUpdate.addInPlace(Oz.m.XD[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.vsz(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.vsz(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const zz = this.movement,
              tz = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            zz.panAccumulatedPixels.addInPlace(this.cameraDirection), zz.rotationAccumulatedPixels.x += this.cameraRotation.x, zz.rotationAccumulatedPixels.y += this.cameraRotation.y, zz.computeCurrentFrameDeltas(), this.cameraDirection.vsz(zz.panDeltaCurrentFrame), this.cameraRotation.set(zz.rotationDeltaCurrentFrame.x, zz.rotationDeltaCurrentFrame.y);
            const sz = this.speed * this._panningEpsilon;
            !tz && Math.abs(this.cameraDirection.x) < sz && Math.abs(this.cameraDirection.y) < sz && Math.abs(this.cameraDirection.z) < sz && (this.cameraDirection.Z6(0), zz.resetPanVelocity());
            const Fz = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Wz = this._decideIfNeedsToMove(),
              Xz = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.vsz(this.rotation), this._deferredPositionUpdate.vsz(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.vsz(this.rotationQuaternion), Wz && this._updatePosition(), Xz) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Fz, this._deferredRotationUpdate.y += this.cameraRotation.y * Fz, !this.noRotationConstraint) {
                const zz = 1.570796;
                this._deferredRotationUpdate.x > zz && (this._deferredRotationUpdate.x = zz), this._deferredRotationUpdate.x < -zz && (this._deferredRotationUpdate.x = -zz)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.vsz(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Oz.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.vsz(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Z6(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Oz.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Oz.p.TransformNormalToRef(Oz.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Oz.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? vz.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Oz.h.FromEulerVectorToRef(this.rotation, wz), vz.b.Y.rotateByQuaternionToRef(wz, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(zz, tz, sz) {
            if (this.aJ().useRightHandedSystem ? Oz.e.LookAtRHToRef(zz, tz, sz, this._viewMatrix) : Oz.e.LookAtLHToRef(zz, tz, sz, this._viewMatrix), this.parent) {
              const zz = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(zz, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(tz, sz) {
            if (this.cameraRigMode !== Xz.b.RIG_MODE_NONE) {
              const sz = new zz(tz, this.position.clone(), this.aJ());
              return sz.isRigCamera = !0, sz.rigParent = this, this.cameraRigMode === Xz.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Oz.h), sz._cameraRigParams = {}, sz.rotationQuaternion = new Oz.h), sz.mode = this.mode, sz.orthoLeft = this.orthoLeft, sz.orthoRight = this.orthoRight, sz.orthoTop = this.orthoTop, sz.orthoBottom = this.orthoBottom, sz
            }
            return null
          }
          _updateRigCameras() {
            const zz = this._rigCameras[0],
              tz = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Xz.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Xz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Xz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Xz.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Xz.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const sz = this.cameraRigMode === Xz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Fz = this.cameraRigMode === Xz.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * sz, zz), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Fz, tz);
                break
              }
              case Xz.b.RIG_MODE_VR:
                zz.rotationQuaternion && tz.rotationQuaternion && this.rotationQuaternion ? (zz.rotationQuaternion.vsz(this.rotationQuaternion), tz.rotationQuaternion.vsz(this.rotationQuaternion)) : (zz.rotation.vsz(this.rotation), tz.rotation.vsz(this.rotation)), zz.position.vsz(this.position), tz.position.vsz(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(tz, sz) {
            this.getTarget().subtractToRef(this.position, zz._TargetFocalPoint), zz._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Fz = zz._TargetFocalPoint.addInPlace(this.position);
            Oz.e.TranslationToRef(-Fz.x, -Fz.y, -Fz.z, zz._TargetTransformMatrix), zz._TargetTransformMatrix.multiplyToRef(Oz.e.RotationAxis(sz.upVector, tz), zz._RigCamTransformMatrix), Oz.e.TranslationToRef(Fz.x, Fz.y, Fz.z, zz._TargetTransformMatrix), zz._RigCamTransformMatrix.multiplyToRef(zz._TargetTransformMatrix, zz._RigCamTransformMatrix), Oz.p.TransformCoordinatesToRef(this.position, zz._RigCamTransformMatrix, sz.position), sz.setTarget(Fz)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(uz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.H)()], Uz = [(0, Wz.J)()], Kz = [(0, Wz.x)("lockedTargetId")], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: zz => "updateUpVectorFromRotation" in zz,
              get: zz => zz.updateUpVectorFromRotation,
              set: (zz, tz) => {
                zz.updateUpVectorFromRotation = tz
              }
            },
            metadata: Xz
          }, Dz, gz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: zz => "rotation" in zz,
              get: zz => zz.rotation,
              set: (zz, tz) => {
                zz.rotation = tz
              }
            },
            metadata: Xz
          }, Hz, Bz), (0, Fz.h)(null, null, Uz, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: zz => "speed" in zz,
              get: zz => zz.speed,
              set: (zz, tz) => {
                zz.speed = tz
              }
            },
            metadata: Xz
          }, Pz, rz), (0, Fz.h)(null, null, Kz, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: zz => "lockedTarget" in zz,
              get: zz => zz.lockedTarget,
              set: (zz, tz) => {
                zz.lockedTarget = tz
              }
            },
            metadata: Xz
          }, Yz, xz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz._RigCamTransformMatrix = new Oz.e, zz._TargetTransformMatrix = new Oz.e, zz._TargetFocalPoint = new Oz.p, zz
      })(),
      gz = !1;

    function Hz() {
      gz || (gz = !0, Uz.e.AddNodeConstructor("TargetCamera", ((zz, tz) => () => new Dz(zz, Oz.p.Zero(), tz))))
    }
  },
  39123: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(39077);
    let Wz = !1;

    function Xz() {
      Wz || (Wz = !0, Fz.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Fz.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Fz.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Fz.b.prototype.getAspectRatio = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = zz.viewport;
        return this.getRenderWidth(tz) * sz.width / (this.getRenderHeight(tz) * sz.height)
      }, Fz.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Fz.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39196: (zz, tz, sz) => {
    var Fz = sz(39077),
      Wz = sz(39205);
    let Xz = !1;
    Xz || (Xz = !0, (0, Wz.t)(), Fz.b.prototype._loadFileAsync = async function(zz, tz, sz) {
      return await new Promise(((Fz, Wz) => {
        this._loadFile(zz, (zz => {
          Fz(zz)
        }), void 0, tz, sz, ((zz, tz) => {
          Wz(tz)
        }))
      }))
    })
  },
  39189: (zz, tz, sz) => {
    (0, sz(39132).d)()
  },
  39132: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(39077);
    let Wz = !1;

    function Xz() {
      Wz || (Wz = !0, Fz.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Fz.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Fz.b.prototype.createRenderPassId = function(zz) {
        const tz = ++Fz.b._RenderPassIdCounter;
        return this._renderPassNames[tz] = zz ?? "NONAME", tz
      }, Fz.b.prototype.releaseRenderPassId = function(zz) {
        this._renderPassNames[zz] = void 0;
        for (let tz = 0; tz < this.scenes.length; ++tz) {
          const sz = this.scenes[tz];
          for (let tz = 0; tz < sz.meshes.length; ++tz) {
            const Fz = sz.meshes[tz];
            if (Fz._releaseRenderPassId(zz), Fz.kY)
              for (let tz = 0; tz < Fz.kY.length; ++tz) {
                Fz.kY[tz]._removeDrawWrapper(zz)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(zz)
      })
    }
  },
  39238: (zz, tz, sz) => {
    var Fz = sz(39245),
      Wz = sz(39077);
    let Xz = !1;
    Xz || (Xz = !0, Wz.b.GetCompatibleTextureLoader = Fz.e)
  },
  39137: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz
    });
    var Fz = sz(39031);
    let Wz = !1;

    function Xz() {
      Wz || (Wz = !0, Fz.ThinEngine.prototype.setAlphaMode = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[sz] === zz) {
          if (!tz) {
            const tz = 0 === zz;
            this.depthCullingState.depthMask !== tz && (this.depthCullingState.depthMask = tz)
          }
          return
        }
        const Fz = 0 === zz;
        this._alphaState.setAlphaBlend(!Fz, sz), this._alphaState.setAlphaMode(zz, sz), tz || (this.depthCullingState.depthMask = Fz), this._alphaMode[sz] = zz
      })
    }
  },
  39143: (zz, tz, sz) => {
    var Fz = sz(39021),
      Wz = sz(38097),
      Xz = sz(39031),
      Oz = sz(39150),
      oz = sz(39117);
    class vz extends Oz.d {
      setDepthStencilTexture(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(zz, tz), !zz) return;
        const sz = this._engine,
          Fz = this._context,
          Wz = zz._hardwareTexture;
        if (Wz && zz._autoMSAAManagement && this._MSAAFramebuffer) {
          const tz = sz._currentFramebuffer;
          sz._bindUnboundFramebuffer(this._MSAAFramebuffer), Fz.framebufferRenderbuffer(Fz.FRAMEBUFFER, (0, oz.c)(zz.format) ? Fz.DEPTH_STENCIL_ATTACHMENT : Fz.DEPTH_ATTACHMENT, Fz.RENDERBUFFER, Wz.getMSAARenderBuffer()), sz._bindUnboundFramebuffer(tz)
        }
      }
      constructor(zz, tz, sz, Fz, Wz) {
        super(zz, tz, sz, Fz), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Wz
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
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const zz = this._engine,
            tz = zz._currentFramebuffer,
            sz = this._context;
          zz._bindUnboundFramebuffer(this._framebuffer), sz.framebufferRenderbuffer(sz.FRAMEBUFFER, sz.DEPTH_STENCIL_ATTACHMENT, sz.RENDERBUFFER, null), sz.framebufferRenderbuffer(sz.FRAMEBUFFER, sz.DEPTH_ATTACHMENT, sz.RENDERBUFFER, null), sz.framebufferRenderbuffer(sz.FRAMEBUFFER, sz.STENCIL_ATTACHMENT, sz.RENDERBUFFER, null), zz._bindUnboundFramebuffer(tz), sz.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(zz, tz, sz, Fz, Wz, Xz)
      }
      shareDepth(zz) {
        super.shareDepth(zz);
        const tz = this._context,
          sz = this._depthStencilBuffer,
          Fz = zz._MSAAFramebuffer || zz._framebuffer,
          Wz = this._engine;
        zz._depthStencilBuffer && zz._depthStencilBuffer !== sz && tz.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = sz;
        const Xz = zz._generateStencilBuffer ? tz.DEPTH_STENCIL_ATTACHMENT : tz.DEPTH_ATTACHMENT;
        Wz._bindUnboundFramebuffer(Fz), tz.framebufferRenderbuffer(tz.FRAMEBUFFER, Xz, tz.RENDERBUFFER, sz), Wz._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wz = zz._hardwareTexture;
        if (!Wz) return;
        const Xz = this._framebuffer,
          Oz = this._engine,
          oz = Oz._currentFramebuffer;
        let vz;
        if (Oz._bindUnboundFramebuffer(Xz), Oz.jD > 1) {
          const Xz = this._context;
          vz = Xz["COLOR_ATTACHMENT" + tz], zz.is2DArray || zz.is3D ? (sz = sz ?? this.layerIndices?.[tz] ?? 0, Xz.framebufferTextureLayer(Xz.FRAMEBUFFER, vz, Wz.underlyingResource, Fz, sz)) : zz.isCube ? (sz = sz ?? this.faceIndices?.[tz] ?? 0, Xz.framebufferTexture2D(Xz.FRAMEBUFFER, vz, Xz.TEXTURE_CUBE_MAP_POSITIVE_X + sz, Wz.underlyingResource, Fz)) : Xz.framebufferTexture2D(Xz.FRAMEBUFFER, vz, Xz.TEXTURE_2D, Wz.underlyingResource, Fz)
        } else {
          const zz = this._context;
          vz = zz["COLOR_ATTACHMENT" + tz + "_WEBGL"];
          const Xz = void 0 !== sz ? zz.TEXTURE_CUBE_MAP_POSITIVE_X + sz : zz.TEXTURE_2D;
          zz.framebufferTexture2D(zz.FRAMEBUFFER, vz, Xz, Wz.underlyingResource, Fz)
        }
        if (zz._autoMSAAManagement && this._MSAAFramebuffer) {
          const zz = this._context;
          Oz._bindUnboundFramebuffer(this._MSAAFramebuffer), zz.framebufferRenderbuffer(zz.FRAMEBUFFER, vz, zz.RENDERBUFFER, Wz.getMSAARenderBuffer())
        }
        Oz._bindUnboundFramebuffer(oz)
      }
      setTexture(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(zz, tz, sz), this._bindTextureRenderTarget(zz, tz)
      }
      setLayerAndFaceIndices(zz, tz) {
        if (super.setLayerAndFaceIndices(zz, tz), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const sz = this._attachments?.length ?? this.textures.length;
        for (let Fz = 0; Fz < sz; Fz++) {
          const zz = this.textures[Fz];
          zz && (zz.is2DArray || zz.is3D ? this._bindTextureRenderTarget(zz, Fz, this.layerIndices[Fz]) : zz.isCube ? this._bindTextureRenderTarget(zz, Fz, this.faceIndices[Fz]) : this._bindTextureRenderTarget(zz, Fz))
        }
      }
      setLayerAndFaceIndex() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(zz, tz, sz), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Fz = this.textures[zz];
        Fz.is2DArray || Fz.is3D ? this._bindTextureRenderTarget(this.textures[zz], zz, this.layerIndices[zz]) : Fz.isCube && this._bindTextureRenderTarget(this.textures[zz], zz, this.faceIndices[zz])
      }
      resolveMSAATextures() {
        const zz = this._engine,
          tz = zz._currentFramebuffer;
        zz._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), zz._bindUnboundFramebuffer(tz)
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const tz = this._context;
        zz || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (tz.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (tz.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (tz.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(zz)
      }
    }
    let Uz = !1;
    Uz || (Uz = !0, Xz.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(zz, tz, sz) {
      const Fz = new vz(zz, tz, sz, this, this._gl);
      return this._renderTargetWrapperCache.push(Fz), Fz
    }, Xz.ThinEngine.prototype.createRenderTargetTexture = function(zz, tz) {
      const sz = this._createHardwareRenderTargetWrapper(!1, !1, zz);
      let Fz, Wz, Xz = !0,
        Oz = !1,
        oz = !1,
        vz = 1;
      void 0 !== tz && "object" === typeof tz && (Xz = tz.generateDepthBuffer ?? !0, Oz = !!tz.generateStencilBuffer, oz = !!tz.noColorAttachment, Fz = tz.colorAttachment, vz = tz.samples ?? 1, Wz = tz.label);
      const Uz = Fz || (oz ? null : this._createInternalTexture(zz, tz, !0, 5)),
        Kz = zz.width || zz,
        uz = zz.height || zz,
        Nz = this._currentFramebuffer,
        bz = this._gl,
        wz = bz.createFramebuffer();
      if (this._bindUnboundFramebuffer(wz), sz._depthStencilBuffer = this._setupFramebufferDepthAttachments(Oz, Xz, Kz, uz), !Uz || Uz.is2DArray || Uz.is3D || bz.framebufferTexture2D(bz.FRAMEBUFFER, bz.COLOR_ATTACHMENT0, bz.TEXTURE_2D, Uz._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Nz), sz.label = Wz ?? "RenderTargetWrapper", sz._framebuffer = wz, sz._generateDepthBuffer = Xz, sz._generateStencilBuffer = Oz, sz.setTextures(Uz), Fz) {
        if (sz._samples = Fz.samples, Fz.samples > 1) {
          const zz = Fz._hardwareTexture.getMSAARenderBuffer(0);
          sz._MSAAFramebuffer = bz.createFramebuffer(), this._bindUnboundFramebuffer(sz._MSAAFramebuffer), bz.framebufferRenderbuffer(bz.FRAMEBUFFER, bz.COLOR_ATTACHMENT0, bz.RENDERBUFFER, zz), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(sz, vz);
      return sz
    }, Xz.ThinEngine.prototype._createDepthStencilTexture = function(zz, tz, sz) {
      const Xz = this._gl,
        Oz = zz.layers || 0,
        vz = zz.depth || 0;
      let Uz = Xz.TEXTURE_2D;
      0 !== Oz ? Uz = Xz.TEXTURE_2D_ARRAY : 0 !== vz && (Uz = Xz.TEXTURE_3D);
      const Kz = new Fz.d(this, 12);
      if (Kz.label = tz.label, !this._caps.depthTextureExtension) return Wz.e.Error("Depth texture is not supported by your browser or hardware."), Kz;
      const uz = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...tz
      };
      if (this._bindTextureDirectly(Uz, Kz, !0), this._setupDepthStencilTexture(Kz, zz, 0 !== uz.comparisonFunction && uz.bilinearFiltering, uz.comparisonFunction, uz.samples), void 0 !== uz.depthTextureFormat) {
        if (15 !== uz.depthTextureFormat && 16 !== uz.depthTextureFormat && 17 !== uz.depthTextureFormat && 13 !== uz.depthTextureFormat && 14 !== uz.depthTextureFormat && 18 !== uz.depthTextureFormat) return Wz.e.Error(`Depth texture ${uz.depthTextureFormat} format is not supported.`), Kz;
        Kz.format = uz.depthTextureFormat
      } else Kz.format = uz.generateStencil ? 13 : 16;
      const Nz = (0, oz.c)(Kz.format),
        bz = this._getWebGLTextureTypeFromDepthTextureFormat(Kz.format),
        wz = Nz ? Xz.DEPTH_STENCIL : Xz.DEPTH_COMPONENT,
        Dz = this._getInternalFormatFromDepthTextureFormat(Kz.format, !0, Nz);
      return Kz.is2DArray ? Xz.texImage3D(Uz, 0, Dz, Kz.width, Kz.height, Oz, 0, wz, bz, null) : Kz.is3D ? Xz.texImage3D(Uz, 0, Dz, Kz.width, Kz.height, vz, 0, wz, bz, null) : Xz.texImage2D(Uz, 0, Dz, Kz.width, Kz.height, 0, wz, bz, null), this._bindTextureDirectly(Uz, null), this._internalTexturesCache.push(Kz), sz._depthStencilBuffer && (Xz.deleteRenderbuffer(sz._depthStencilBuffer), sz._depthStencilBuffer = null), this._bindUnboundFramebuffer(sz._MSAAFramebuffer ?? sz._framebuffer), sz._generateStencilBuffer = Nz, sz._depthStencilTextureWithStencil = Nz, sz._depthStencilBuffer = this._setupFramebufferDepthAttachments(sz._generateStencilBuffer, sz._generateDepthBuffer, sz.width, sz.height, sz.samples, Kz.format), this._bindUnboundFramebuffer(null), Kz
    }, Xz.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(zz, tz) {
      if (this.jD < 2 || !zz) return 1;
      if (zz.samples === tz) return tz;
      const sz = this._gl;
      tz = Math.min(tz, this.getCaps().maxMSAASamples), zz._depthStencilBuffer && (sz.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = null), zz._MSAAFramebuffer && (sz.deleteFramebuffer(zz._MSAAFramebuffer), zz._MSAAFramebuffer = null);
      const Fz = zz.texture?._hardwareTexture;
      if (Fz?.releaseMSAARenderBuffers(), zz.texture && tz > 1 && "function" === typeof sz.renderbufferStorageMultisample) {
        const Wz = sz.createFramebuffer();
        if (!Wz) throw new Error("Unable to create multi sampled framebuffer");
        zz._MSAAFramebuffer = Wz, this._bindUnboundFramebuffer(zz._MSAAFramebuffer);
        const Xz = this._createRenderBuffer(zz.texture.width, zz.texture.height, tz, -1, this._getRGBABufferInternalSizedFormat(zz.texture.type, zz.texture.format, zz.texture._useSRGBBuffer), sz.COLOR_ATTACHMENT0, !1);
        if (!Xz) throw new Error("Unable to create multi sampled framebuffer");
        Fz?.addMSAARenderBuffer(Xz)
      }
      this._bindUnboundFramebuffer(zz._MSAAFramebuffer ?? zz._framebuffer), zz.texture && (zz.texture.samples = tz), zz._samples = tz;
      const Wz = zz._depthStencilTexture ? zz._depthStencilTexture.format : void 0;
      return zz._depthStencilBuffer = this._setupFramebufferDepthAttachments(zz._generateStencilBuffer, zz._generateDepthBuffer, zz.width, zz.height, tz, Wz), this._bindUnboundFramebuffer(null), tz
    }, Xz.ThinEngine.prototype._setupDepthStencilTexture = function(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Xz = tz.width ?? tz,
        Oz = tz.height ?? tz,
        oz = tz.layers || 0,
        vz = tz.depth || 0;
      zz.baseWidth = Xz, zz.baseHeight = Oz, zz.width = Xz, zz.height = Oz, zz.is2DArray = oz > 0, zz.depth = oz || vz, zz.isReady = !0, zz.samples = Wz, zz.generateMipMaps = !1, zz.samplingMode = sz ? 2 : 1, zz.type = 0, zz._comparisonFunction = Fz;
      const Uz = this._gl,
        Kz = this._getTextureTarget(zz),
        uz = this._getSamplingParameters(zz.samplingMode, !1);
      Uz.texParameteri(Kz, Uz.TEXTURE_MAG_FILTER, uz.mag), Uz.texParameteri(Kz, Uz.TEXTURE_MIN_FILTER, uz.min), Uz.texParameteri(Kz, Uz.TEXTURE_WRAP_S, Uz.CLAMP_TO_EDGE), Uz.texParameteri(Kz, Uz.TEXTURE_WRAP_T, Uz.CLAMP_TO_EDGE), this.jD > 1 && (0 === Fz ? (Uz.texParameteri(Kz, Uz.TEXTURE_COMPARE_FUNC, 515), Uz.texParameteri(Kz, Uz.TEXTURE_COMPARE_MODE, Uz.NONE)) : (Uz.texParameteri(Kz, Uz.TEXTURE_COMPARE_FUNC, Fz), Uz.texParameteri(Kz, Uz.TEXTURE_COMPARE_MODE, Uz.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39010: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.e
    });
    var Fz = sz(39018);
    (0, sz(39137).b)();
    var Wz = sz(39031);
    let Xz = !1;
    ! function() {
      if (Xz) return;
      Xz = !0;
      const zz = new WeakMap,
        tz = new WeakMap,
        sz = new WeakMap,
        Fz = new WeakMap;
      Wz.ThinEngine.prototype.getAlphaToCoverage = function() {
        return zz.get(this) ?? !1
      }, Wz.ThinEngine.prototype.setAlphaToCoverage = function(sz) {
        (zz.get(this) !== sz || this._gl && tz.get(this) !== this._gl) && (zz.set(this, sz), this._gl && (sz ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), tz.set(this, this._gl)))
      }, Object.defineProperty(Wz.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Fz.get(this) !== this._gl && (sz.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Fz.set(this, this._gl)), sz.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Oz = sz(39021),
      oz = sz(38097),
      vz = sz(39111);
    let Uz = !1;
    ! function() {
      function zz(zz, tz, sz, Fz) {
        let Wz, Xz = 1;
        1 === Fz ? Wz = new Float32Array(tz * sz * 4) : 2 === Fz ? (Wz = new Uint16Array(tz * sz * 4), Xz = 15360) : Wz = 7 === Fz ? new Uint32Array(tz * sz * 4) : new Uint8Array(tz * sz * 4);
        for (let Oz = 0; Oz < tz; Oz++)
          for (let Fz = 0; Fz < sz; Fz++) {
            const sz = 3 * (Fz * tz + Oz),
              oz = 4 * (Fz * tz + Oz);
            Wz[oz + 0] = zz[sz + 0], Wz[oz + 1] = zz[sz + 1], Wz[oz + 2] = zz[sz + 2], Wz[oz + 3] = Xz
          }
        return Wz
      }

      function tz(zz) {
        return function(tz, sz, Fz, Wz, Xz, oz, vz, Uz) {
          let Kz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Nz = zz ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            bz = zz ? 10 : 11,
            wz = new Oz.d(this, bz);
          wz.baseWidth = sz, wz.baseHeight = Fz, wz.baseDepth = Wz, wz.width = sz, wz.height = Fz, wz.depth = Wz, wz.format = Xz, wz.type = uz, wz.generateMipMaps = oz, wz.samplingMode = Uz, zz ? wz.is3D = !0 : wz.is2DArray = !0, this._doNotHandleContextLost || (wz._bufferView = tz), zz ? this.updateRawTexture3D(wz, tz, Xz, vz, Kz, uz) : this.updateRawTexture2DArray(wz, tz, Xz, vz, Kz, uz), this._bindTextureDirectly(Nz, wz, !0);
          const Dz = this._getSamplingParameters(Uz, oz);
          return this._gl.texParameteri(Nz, this._gl.TEXTURE_MAG_FILTER, Dz.mag), this._gl.texParameteri(Nz, this._gl.TEXTURE_MIN_FILTER, Dz.min), oz && this._gl.generateMipmap(Nz), this._bindTextureDirectly(Nz, null), this._internalTexturesCache.push(wz), wz
        }
      }

      function sz(zz) {
        return function(tz, sz, Fz, Wz) {
          let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const oz = zz ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            vz = this._getWebGLTextureType(Oz),
            Uz = this._getInternalFormat(Fz),
            Kz = this._getRGBABufferInternalSizedFormat(Oz, Fz);
          this._bindTextureDirectly(oz, tz, !0), this._unpackFlipY(void 0 === Wz || !!Wz), this._doNotHandleContextLost || (tz._bufferView = sz, tz.format = Fz, tz.invertY = Wz, tz._compression = Xz), tz.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Xz && sz ? this._gl.compressedTexImage3D(oz, 0, this.getCaps().s3tc[Xz], tz.width, tz.height, tz.depth, 0, sz) : this._gl.texImage3D(oz, 0, Kz, tz.width, tz.height, tz.depth, 0, Uz, vz, sz), tz.generateMipMaps && this._gl.generateMipmap(oz), this._bindTextureDirectly(oz, null), tz.isReady = !0
        }
      }
      Uz || (Uz = !0, Wz.ThinEngine.prototype.updateRawTexture = function(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!zz) return;
        const oz = this._getRGBABufferInternalSizedFormat(Xz, sz, Oz),
          vz = this._getInternalFormat(sz),
          Uz = this._getWebGLTextureType(Xz);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, zz, !0), this._unpackFlipY(void 0 === Fz || !!Fz), this._doNotHandleContextLost || (zz._bufferView = tz, zz.format = sz, zz.type = Xz, zz.invertY = Fz, zz._compression = Wz), zz.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Wz && tz ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Wz], zz.width, zz.height, 0, tz) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, oz, zz.width, zz.height, 0, vz, Uz, tz), zz.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), zz.isReady = !0
      }, Wz.ThinEngine.prototype.createRawTexture = function(zz, tz, sz, Fz, Wz, Xz, oz) {
        let vz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Kz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const uz = new Oz.d(this, 3);
        uz.baseWidth = tz, uz.baseHeight = sz, uz.width = tz, uz.height = sz, uz.format = Fz, uz.generateMipMaps = Wz, uz.samplingMode = oz, uz.invertY = Xz, uz._compression = vz, uz.type = Uz, uz._useSRGBBuffer = this._getUseSRGBBuffer(Kz, !Wz), this._doNotHandleContextLost || (uz._bufferView = zz), this.updateRawTexture(uz, zz, Fz, Xz, vz, Uz, uz._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, uz, !0);
        const Nz = this._getSamplingParameters(oz, Wz);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Nz.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Nz.min), Wz && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(uz), uz
      }, Wz.ThinEngine.prototype.createRawCubeTexture = function(zz, tz, sz, Fz, Wz, Xz, Uz) {
        let Kz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const uz = this._gl,
          Nz = new Oz.d(this, 8);
        Nz.isCube = !0, Nz.format = sz, Nz.type = Fz, this._doNotHandleContextLost || (Nz._bufferViewArray = zz);
        const bz = this._getWebGLTextureType(Fz);
        let wz = this._getInternalFormat(sz);
        wz === uz.RGB && (wz = uz.RGBA), bz !== uz.FLOAT || this._caps.textureFloatLinearFiltering ? bz !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? bz !== uz.FLOAT || this._caps.textureFloatRender ? bz !== uz.HALF_FLOAT || this._caps.colorBufferFloat || (Wz = !1, oz.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Wz = !1, oz.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Wz = !1, Uz = 1, oz.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Wz = !1, Uz = 1, oz.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Dz = tz,
          gz = Dz;
        Nz.width = Dz, Nz.height = gz, Nz.invertY = Xz, Nz._compression = Kz;
        if (!this.needPOTTextures || (0, vz.g)(Nz.width) && (0, vz.g)(Nz.height) || (Wz = !1), zz) this.updateRawCubeTexture(Nz, zz, sz, Fz, Xz, Kz);
        else {
          const zz = this._getRGBABufferInternalSizedFormat(Fz),
            tz = 0;
          this._bindTextureDirectly(uz.TEXTURE_CUBE_MAP, Nz, !0);
          for (let sz = 0; sz < 6; sz++) Kz ? uz.compressedTexImage2D(uz.TEXTURE_CUBE_MAP_POSITIVE_X + sz, tz, this.getCaps().s3tc[Kz], Nz.width, Nz.height, 0, void 0) : uz.texImage2D(uz.TEXTURE_CUBE_MAP_POSITIVE_X + sz, tz, zz, Nz.width, Nz.height, 0, wz, bz, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Nz, !0), zz && Wz && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Hz = this._getSamplingParameters(Uz, Wz);
        return uz.texParameteri(uz.TEXTURE_CUBE_MAP, uz.TEXTURE_MAG_FILTER, Hz.mag), uz.texParameteri(uz.TEXTURE_CUBE_MAP, uz.TEXTURE_MIN_FILTER, Hz.min), uz.texParameteri(uz.TEXTURE_CUBE_MAP, uz.TEXTURE_WRAP_S, uz.CLAMP_TO_EDGE), uz.texParameteri(uz.TEXTURE_CUBE_MAP, uz.TEXTURE_WRAP_T, uz.CLAMP_TO_EDGE), this._bindTextureDirectly(uz.TEXTURE_CUBE_MAP, null), Nz.generateMipMaps = Wz, Nz.samplingMode = Uz, Nz.isReady = !0, Nz
      }, Wz.ThinEngine.prototype.updateRawCubeTexture = function(tz, sz, Fz, Wz, Xz) {
        let Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        tz._bufferViewArray = sz, tz.format = Fz, tz.type = Wz, tz.invertY = Xz, tz._compression = Oz;
        const Uz = this._gl,
          Kz = this._getWebGLTextureType(Wz);
        let uz = this._getInternalFormat(Fz);
        const Nz = this._getRGBABufferInternalSizedFormat(Wz);
        let bz = !1;
        uz === Uz.RGB && (uz = Uz.RGBA, bz = !0), this._bindTextureDirectly(Uz.TEXTURE_CUBE_MAP, tz, !0), this._unpackFlipY(void 0 === Xz || !!Xz), tz.width % 4 !== 0 && Uz.pixelStorei(Uz.UNPACK_ALIGNMENT, 1);
        for (let vz = 0; vz < 6; vz++) {
          let Fz = sz[vz];
          Oz ? Uz.compressedTexImage2D(Uz.TEXTURE_CUBE_MAP_POSITIVE_X + vz, oz, this.getCaps().s3tc[Oz], tz.width, tz.height, 0, Fz) : (bz && (Fz = zz(Fz, tz.width, tz.height, Wz)), Uz.texImage2D(Uz.TEXTURE_CUBE_MAP_POSITIVE_X + vz, oz, Nz, tz.width, tz.height, 0, uz, Kz, Fz))
        }(!this.needPOTTextures || (0, vz.g)(tz.width) && (0, vz.g)(tz.height)) && tz.generateMipMaps && 0 === oz && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), tz.isReady = !0
      }, Wz.ThinEngine.prototype.createRawCubeTextureFromUrl = function(tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        let Uz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Kz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          uz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Nz = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const bz = this._gl,
          wz = this.createRawCubeTexture(null, Fz, Wz, Xz, !Oz, Nz, uz, null);
        sz?.addPendingData(wz), wz.url = tz, wz.isReady = !1, this._internalTexturesCache.push(wz);
        const Dz = (zz, tz) => {
            sz?.removePendingData(wz), Kz && Kz(zz ? zz.status + " " + zz.statusText : "Failed to parse texture data", tz)
          },
          gz = async tz => {
            if (!wz._hardwareTexture) return;
            const Fz = oz(tz);
            if (!Fz) return;
            const Oz = Fz instanceof Promise ? await Fz : Fz,
              Kz = wz.width;
            if (vz) {
              const tz = this._getWebGLTextureType(Xz);
              let sz = this._getInternalFormat(Wz);
              const Fz = this._getRGBABufferInternalSizedFormat(Xz);
              let oz = !1;
              sz === bz.RGB && (sz = bz.RGBA, oz = !0), this._bindTextureDirectly(bz.TEXTURE_CUBE_MAP, wz, !0), this._unpackFlipY(!1);
              const Uz = vz(Oz);
              for (let Wz = 0; Wz < Uz.length; Wz++) {
                const Oz = Kz >> Wz;
                for (let vz = 0; vz < 6; vz++) {
                  let Kz = Uz[Wz][vz];
                  oz && (Kz = zz(Kz, Oz, Oz, Xz)), bz.texImage2D(vz, Wz, Fz, Oz, Oz, 0, sz, tz, Kz)
                }
              }
              this._bindTextureDirectly(bz.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(wz, Oz, Wz, Xz, Nz);
            wz.isReady = !0, sz?.removePendingData(wz), wz.onLoadedObservable.notifyObservers(wz), wz.onLoadedObservable.clear(), Uz && Uz()
          };
        return this._loadFile(tz, (zz => {
          gz(zz).catch((zz => {
            Dz(void 0, zz)
          }))
        }), void 0, sz?.offlineProvider, !0, Dz), wz
      }, Wz.ThinEngine.prototype.createRawTexture2DArray = tz(!1), Wz.ThinEngine.prototype.createRawTexture3D = tz(!0), Wz.ThinEngine.prototype.updateRawTexture2DArray = sz(!1), Wz.ThinEngine.prototype.updateRawTexture3D = sz(!0))
    }();
    var Kz = sz(39063);
    let uz = !1;
    uz || (uz = !0, Wz.ThinEngine.prototype._readTexturePixelsSync = function(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const uz = this._gl;
      if (!uz) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const zz = uz.createFramebuffer();
        if (!zz) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = zz
      }
      uz.bindFramebuffer(uz.FRAMEBUFFER, this._dummyFramebuffer), Fz > -1 && (zz.is2DArray || zz.is3D) ? uz.framebufferTextureLayer(uz.FRAMEBUFFER, uz.COLOR_ATTACHMENT0, zz._hardwareTexture?.underlyingResource, Wz, Fz) : Fz > -1 ? uz.framebufferTexture2D(uz.FRAMEBUFFER, uz.COLOR_ATTACHMENT0, uz.TEXTURE_CUBE_MAP_POSITIVE_X + Fz, zz._hardwareTexture?.underlyingResource, Wz) : uz.framebufferTexture2D(uz.FRAMEBUFFER, uz.COLOR_ATTACHMENT0, uz.TEXTURE_2D, zz._hardwareTexture?.underlyingResource, Wz);
      let Nz = void 0 !== zz.type ? this._getWebGLTextureType(zz.type) : uz.UNSIGNED_BYTE;
      return oz ? Xz || (Xz = (0, Kz.k)(zz.type, 4 * tz * sz)) : Nz === uz.UNSIGNED_BYTE ? (Xz || (Xz = new Uint8Array(4 * tz * sz)), Nz = uz.UNSIGNED_BYTE) : (Xz || (Xz = new Float32Array(4 * tz * sz)), Nz = uz.FLOAT), Oz && this.flushFramebuffer(), uz.readPixels(vz, Uz, tz, sz, uz.RGBA, Nz, Xz), uz.bindFramebuffer(uz.FRAMEBUFFER, this._currentFramebuffer), Xz
    }, Wz.ThinEngine.prototype._readTexturePixels = function(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz))
    }), (0, sz(39140).b)();
    let Nz = !1;
    Nz || (Nz = !0, Wz.ThinEngine.prototype._createDepthStencilCubeTexture = function(zz, tz) {
      const sz = new Oz.d(this, 12);
      if (sz.isCube = !0, 1 === this.jD) return oz.e.Error("Depth cube texture is not supported by WebGL 1."), sz;
      const Fz = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...tz
        },
        Wz = this._gl;
      this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, sz, !0), this._setupDepthStencilTexture(sz, zz, Fz.bilinearFiltering, Fz.comparisonFunction);
      for (let Xz = 0; Xz < 6; Xz++) Fz.generateStencil ? Wz.texImage2D(Wz.TEXTURE_CUBE_MAP_POSITIVE_X + Xz, 0, Wz.DEPTH24_STENCIL8, zz, zz, 0, Wz.DEPTH_STENCIL, Wz.UNSIGNED_INT_24_8, null) : Wz.texImage2D(Wz.TEXTURE_CUBE_MAP_POSITIVE_X + Xz, 0, Wz.DEPTH_COMPONENT24, zz, zz, 0, Wz.DEPTH_COMPONENT, Wz.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(sz), sz
    }, Wz.ThinEngine.prototype._setCubeMapTextureParams = function(zz, tz, sz) {
      const Fz = this._gl;
      Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_MAG_FILTER, Fz.LINEAR), Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_MIN_FILTER, tz ? Fz.LINEAR_MIPMAP_LINEAR : Fz.LINEAR), Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_WRAP_S, Fz.CLAMP_TO_EDGE), Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_WRAP_T, Fz.CLAMP_TO_EDGE), zz.samplingMode = tz ? 3 : 2, tz && this.getCaps().textureMaxLevel && void 0 !== sz && sz > 0 && (Fz.texParameteri(Fz.TEXTURE_CUBE_MAP, Fz.TEXTURE_MAX_LEVEL, sz), zz._maxLodLevel = sz), this._bindTextureDirectly(Fz.TEXTURE_CUBE_MAP, null)
    }, Wz.ThinEngine.prototype.createCubeTexture = function(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Oz = arguments.length > 6 ? arguments[6] : void 0,
        Uz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Kz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Nz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        bz = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        wz = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Dz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const gz = this._gl;
      return this.createCubeTextureBase(zz, tz, sz, !!Fz, Wz, Xz, Oz, Uz, Kz, uz, Nz, bz, (zz => this._bindTextureDirectly(gz.TEXTURE_CUBE_MAP, zz, !0)), ((zz, tz) => {
        const sz = this.needPOTTextures ? (0, vz.e)(tz[0].width, this._caps.maxCubemapTextureSize) : tz[0].width,
          Xz = sz,
          Uz = [gz.TEXTURE_CUBE_MAP_POSITIVE_X, gz.TEXTURE_CUBE_MAP_POSITIVE_Y, gz.TEXTURE_CUBE_MAP_POSITIVE_Z, gz.TEXTURE_CUBE_MAP_NEGATIVE_X, gz.TEXTURE_CUBE_MAP_NEGATIVE_Y, gz.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(gz.TEXTURE_CUBE_MAP, zz, !0), this._unpackFlipY(!1);
        const Kz = Oz ? this._getInternalFormat(Oz, zz._useSRGBBuffer) : zz._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : gz.RGBA;
        let uz = Oz ? this._getInternalFormat(Oz) : gz.RGBA;
        zz._useSRGBBuffer && 1 === this.jD && (uz = Kz);
        for (let Fz = 0; Fz < Uz.length; Fz++)
          if (tz[Fz].width !== sz || tz[Fz].height !== Xz) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void oz.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = sz, this._workingCanvas.height = Xz, this._workingContext.drawImage(tz[Fz], 0, 0, tz[Fz].width, tz[Fz].height, 0, 0, sz, Xz), gz.texImage2D(Uz[Fz], 0, Kz, uz, gz.UNSIGNED_BYTE, this._workingCanvas)
          } else gz.texImage2D(Uz[Fz], 0, Kz, uz, gz.UNSIGNED_BYTE, tz[Fz]);
        Fz || gz.generateMipmap(gz.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(zz, !Fz), zz.width = sz, zz.height = Xz, zz.isReady = !0, Oz && (zz.format = Oz), zz.onLoadedObservable.notifyObservers(zz), zz.onLoadedObservable.clear(), Wz && Wz()
      }), !!wz, Dz)
    }, Wz.ThinEngine.prototype.generateMipMapsForCubemap = function(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz.generateMipMaps) {
        const sz = this._gl;
        this._bindTextureDirectly(sz.TEXTURE_CUBE_MAP, zz, !0), sz.generateMipmap(sz.TEXTURE_CUBE_MAP), tz && this._bindTextureDirectly(sz.TEXTURE_CUBE_MAP, null)
      }
    });
    sz(39143);
    let bz = !1;
    bz || (bz = !0, Wz.ThinEngine.prototype.setDepthStencilTexture = function(zz, tz, sz, Fz) {
      void 0 !== zz && (tz && (this._boundUniforms[zz] = tz), sz && sz.depthStencilTexture ? this._setTexture(zz, sz, !1, !0, Fz) : this._setTexture(zz, null, void 0, void 0, Fz))
    });
    let wz = !1;
    wz || (wz = !0, Wz.ThinEngine.prototype.createRenderTargetCubeTexture = function(zz, tz) {
      const sz = this._createHardwareRenderTargetWrapper(!1, !0, zz),
        Fz = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...tz
        };
      Fz.generateStencilBuffer = Fz.generateDepthBuffer && Fz.generateStencilBuffer, (1 !== Fz.type || this._caps.textureFloatLinearFiltering) && (2 !== Fz.type || this._caps.textureHalfFloatLinearFiltering) || (Fz.samplingMode = 1);
      const Wz = this._gl,
        Xz = new Oz.d(this, 5);
      this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, Xz, !0);
      const vz = this._getSamplingParameters(Fz.samplingMode, Fz.generateMipMaps);
      1 !== Fz.type || this._caps.textureFloat || (Fz.type = 0, oz.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Wz.texParameteri(Wz.TEXTURE_CUBE_MAP, Wz.TEXTURE_MAG_FILTER, vz.mag), Wz.texParameteri(Wz.TEXTURE_CUBE_MAP, Wz.TEXTURE_MIN_FILTER, vz.min), Wz.texParameteri(Wz.TEXTURE_CUBE_MAP, Wz.TEXTURE_WRAP_S, Wz.CLAMP_TO_EDGE), Wz.texParameteri(Wz.TEXTURE_CUBE_MAP, Wz.TEXTURE_WRAP_T, Wz.CLAMP_TO_EDGE);
      for (let Oz = 0; Oz < 6; Oz++) Wz.texImage2D(Wz.TEXTURE_CUBE_MAP_POSITIVE_X + Oz, 0, this._getRGBABufferInternalSizedFormat(Fz.type, Fz.format), zz, zz, 0, this._getInternalFormat(Fz.format), this._getWebGLTextureType(Fz.type), null);
      const Uz = Wz.createFramebuffer();
      return this._bindUnboundFramebuffer(Uz), sz._depthStencilBuffer = this._setupFramebufferDepthAttachments(Fz.generateStencilBuffer, Fz.generateDepthBuffer, zz, zz), Fz.generateMipMaps && Wz.generateMipmap(Wz.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Wz.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), sz._framebuffer = Uz, sz._generateDepthBuffer = Fz.generateDepthBuffer, sz._generateStencilBuffer = Fz.generateStencilBuffer, Xz.width = zz, Xz.height = zz, Xz.isReady = !0, Xz.isCube = !0, Xz.samples = 1, Xz.generateMipMaps = Fz.generateMipMaps, Xz.samplingMode = Fz.samplingMode, Xz.type = Fz.type, Xz.format = Fz.format, this._internalTexturesCache.push(Xz), sz.setTextures(Xz), sz
    });
    var Dz = sz(39155),
      gz = sz(39163);
    let Hz = !1;
    Hz || (Hz = !0, Wz.ThinEngine.prototype.createPrefilteredCubeTexture = function(zz, tz, Fz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        vz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Uz = arguments.length > 6 ? arguments[6] : void 0,
        Kz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        uz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Nz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(zz, tz, null, !1, (async zz => {
        if (!zz) return void(Xz && Xz(null));
        const vz = zz.texture;
        if (uz ? zz.info.sphericalPolynomial && (vz._sphericalPolynomial = zz.info.sphericalPolynomial) : vz._sphericalPolynomial = vz._sphericalPolynomial ?? new Dz.g, vz._source = 9, this.getCaps().textureLOD) return void(Xz && Xz(vz));
        const Uz = this._gl,
          Kz = zz.width;
        if (!Kz) return;
        const {
          DDSTools: Nz
        } = await sz.e(296).then((() => sz(40865))), bz = [];
        for (let sz = 0; sz < 3; sz++) {
          const Xz = 1 - sz / 2,
            uz = Wz,
            wz = Math.log2(Kz) * Fz + Wz,
            Dz = uz + (wz - uz) * Xz,
            Hz = Math.round(Math.min(Math.max(Dz, 0), wz)),
            Bz = new Oz.d(this, 2);
          if (Bz.type = vz.type, Bz.format = vz.format, Bz.width = Math.pow(2, Math.max(Math.log2(Kz) - Hz, 0)), Bz.height = Bz.width, Bz.isCube = !0, Bz._cachedWrapU = 0, Bz._cachedWrapV = 0, this._bindTextureDirectly(Uz.TEXTURE_CUBE_MAP, Bz, !0), Bz.samplingMode = 2, Uz.texParameteri(Uz.TEXTURE_CUBE_MAP, Uz.TEXTURE_MAG_FILTER, Uz.LINEAR), Uz.texParameteri(Uz.TEXTURE_CUBE_MAP, Uz.TEXTURE_MIN_FILTER, Uz.LINEAR), Uz.texParameteri(Uz.TEXTURE_CUBE_MAP, Uz.TEXTURE_WRAP_S, Uz.CLAMP_TO_EDGE), Uz.texParameteri(Uz.TEXTURE_CUBE_MAP, Uz.TEXTURE_WRAP_T, Uz.CLAMP_TO_EDGE), zz.isDDS) {
            const tz = zz.info,
              sz = zz.data;
            this._unpackFlipY(tz.isCompressed), Nz.UploadDDSLevels(this, Bz, sz, tz, !0, 6, Hz)
          } else oz.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Uz.TEXTURE_CUBE_MAP, null);
          const Pz = new gz.b(tz);
          Pz._isCube = !0, Pz._texture = Bz, Bz.isReady = !0, bz.push(Pz)
        }
        vz._lodTextureHigh = bz[2], vz._lodTextureMid = bz[1], vz._lodTextureLow = bz[0], Xz && Xz(vz)
      }), vz, Uz, Kz, uz, Fz, Wz, null, void 0, !1, Nz)
    });
    var Bz = sz(39097);
    let Pz = !1;
    Pz || (Pz = !0, Wz.ThinEngine.prototype.createUniformBuffer = function(zz, tz) {
      const sz = this._gl.createBuffer();
      if (!sz) throw new Error("Unable to create uniform buffer");
      const Fz = new Bz.e(sz);
      return this.bindUniformBuffer(Fz), zz instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, zz, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(zz), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Fz.references = 1, Fz
    }, Wz.ThinEngine.prototype.createDynamicUniformBuffer = function(zz, tz) {
      const sz = this._gl.createBuffer();
      if (!sz) throw new Error("Unable to create dynamic uniform buffer");
      const Fz = new Bz.e(sz);
      return this.bindUniformBuffer(Fz), zz instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, zz, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(zz), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Fz.references = 1, Fz
    }, Wz.ThinEngine.prototype.updateUniformBuffer = function(zz, tz, sz, Fz) {
      this.bindUniformBuffer(zz), void 0 === sz && (sz = 0), void 0 === Fz ? tz instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, sz, tz) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, sz, new Float32Array(tz)) : tz instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, tz.subarray(sz, sz + Fz)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(tz).subarray(sz, sz + Fz)), this.bindUniformBuffer(null)
    }, Wz.ThinEngine.prototype.bindUniformBuffer = function(zz) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, zz ? zz.underlyingResource : null)
    }, Wz.ThinEngine.prototype.bindUniformBufferBase = function(zz, tz, sz) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, tz, zz ? zz.underlyingResource : null)
    }, Wz.ThinEngine.prototype.bindUniformBlock = function(zz, tz, sz) {
      const Fz = zz.program,
        Wz = this._gl.getUniformBlockIndex(Fz, tz);
      4294967295 !== Wz && this._gl.uniformBlockBinding(Fz, Wz, sz)
    });
    var rz = sz(39051),
      Yz = sz(39077);
    let xz = !1;
    xz || (xz = !0, Yz.b.prototype.displayLoadingUI = function() {
      if (!(0, rz.j)()) return;
      const zz = this.loadingScreen;
      zz && zz.displayLoadingUI()
    }, Yz.b.prototype.hideLoadingUI = function() {
      if (!(0, rz.j)()) return;
      const zz = this._loadingScreen;
      zz && zz.hideLoadingUI()
    }, Object.defineProperty(Yz.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Yz.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(zz) {
        this._loadingScreen = zz
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Yz.b.prototype, "loadingUIText", {
      set: function(zz) {
        this.loadingScreen.loadingUIText = zz
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Yz.b.prototype, "loadingUIBackgroundColor", {
      set: function(zz) {
        this.loadingScreen.loadingUIBackgroundColor = zz
      },
      enumerable: !0,
      configurable: !0
    })), (0, sz(39123).b)();
    let mz = !1;
    mz || (mz = !0, Yz.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Yz.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Yz.b.prototype.setDepthFunction = function(zz) {
      this._depthCullingState.depthFunc = zz
    }, Yz.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Yz.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Yz.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Yz.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Yz.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Yz.b.prototype.setDepthWrite = function(zz) {
      this._depthCullingState.depthMask = zz
    }, Yz.b.prototype.setAlphaConstants = function(zz, tz, sz, Fz) {
      this._alphaState.setAlphaBlendConstants(zz, tz, sz, Fz)
    }, Yz.b.prototype.getAlphaMode = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[zz]
    }, Yz.b.prototype.getAlphaEquation = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[zz]
    });
    let Jz = !1;
    Jz || (Jz = !0, Yz.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Yz.b.prototype.setStencilBuffer = function(zz) {
      this._stencilState.stencilTest = zz
    }, Yz.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Yz.b.prototype.setStencilMask = function(zz) {
      this._stencilState.stencilMask = zz
    }, Yz.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Yz.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Yz.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Yz.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Yz.b.prototype.setStencilFunction = function(zz) {
      this._stencilState.stencilFunc = zz
    }, Yz.b.prototype.setStencilBackFunction = function(zz) {
      this._stencilState.stencilBackFunc = zz
    }, Yz.b.prototype.setStencilFunctionReference = function(zz) {
      this._stencilState.stencilFuncRef = zz
    }, Yz.b.prototype.setStencilFunctionMask = function(zz) {
      this._stencilState.stencilFuncMask = zz
    }, Yz.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Yz.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Yz.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Yz.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Yz.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Yz.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Yz.b.prototype.setStencilOperationFail = function(zz) {
      this._stencilState.stencilOpStencilFail = zz
    }, Yz.b.prototype.setStencilBackOperationFail = function(zz) {
      this._stencilState.stencilBackOpStencilFail = zz
    }, Yz.b.prototype.setStencilOperationDepthFail = function(zz) {
      this._stencilState.stencilOpDepthFail = zz
    }, Yz.b.prototype.setStencilBackOperationDepthFail = function(zz) {
      this._stencilState.stencilBackOpDepthFail = zz
    }, Yz.b.prototype.setStencilOperationPass = function(zz) {
      this._stencilState.stencilOpStencilDepthPass = zz
    }, Yz.b.prototype.setStencilBackOperationPass = function(zz) {
      this._stencilState.stencilBackOpStencilDepthPass = zz
    }, Yz.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Yz.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    sz(39189);
    let Iz = !1;
    Iz || (Iz = !0, Yz.b.prototype.createDepthStencilTexture = function(zz, tz, sz) {
      if (tz.isCube) {
        const sz = zz.width || zz;
        return this._createDepthStencilCubeTexture(sz, tz)
      }
      return this._createDepthStencilTexture(zz, tz, sz)
    });
    sz(39196), sz(39238);
    let Cz = !1;
    Cz || (Cz = !0, Wz.ThinEngine.prototype.enableScissor = function(zz, tz, sz, Fz) {
      const Wz = this._gl;
      Wz.enable(Wz.SCISSOR_TEST), Wz.scissor(zz, tz, sz, Fz)
    }, Wz.ThinEngine.prototype.disableScissor = function() {
      const zz = this._gl;
      zz.disable(zz.SCISSOR_TEST)
    })
  },
  39018: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Yz
    });
    var Fz = sz(39021),
      Wz = sz(36502),
      Xz = sz(39031),
      Oz = sz(39079);
    class oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new vz(zz)
      }
      sampleFrame() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const tz = zz - this._lastFrameTimeMs;
            this._rollingFrameTime.add(tz)
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
    class vz {
      constructor(zz) {
        this._samples = new Array(zz), this.reset()
      }
      add(zz) {
        let tz;
        if (this.isSaturated()) {
          const zz = this._samples[this._pos];
          tz = zz - this.average, this.average -= tz / (this._sampleCount - 1), this._m2 -= tz * (zz - this.average)
        } else this._sampleCount++;
        tz = zz - this.average, this.average += tz / this._sampleCount, this._m2 += tz * (zz - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = zz, this._pos++, this._pos %= this._samples.length
      }
      history(zz) {
        if (zz >= this._sampleCount || zz >= this._samples.length) return 0;
        const tz = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(tz - zz)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(zz) {
        const tz = this._samples.length;
        return (zz % tz + tz) % tz
      }
    }
    var Uz = sz(39097),
      Kz = sz(38097),
      uz = sz(39113),
      Nz = sz(39077),
      bz = sz(39051);

    function wz(zz) {
      const tz = function(zz) {
        if (!(0, bz.g)() || !document.body) return null;
        const tz = document.createElement("span");
        tz.textContent = "Hg", tz.style.font = zz;
        const sz = document.createElement("div");
        sz.style.display = "inline-block", sz.style.width = "1px", sz.style.height = "0px", sz.style.verticalAlign = "bottom";
        const Fz = document.createElement("div");
        let Wz, Xz;
        Fz.style.whiteSpace = "nowrap", Fz.appendChild(tz), Fz.appendChild(sz), document.body.appendChild(Fz);
        try {
          Xz = sz.getBoundingClientRect().top - tz.getBoundingClientRect().top, sz.style.verticalAlign = "baseline", Wz = sz.getBoundingClientRect().top - tz.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Fz)
        }
        const Oz = {
          ascent: Wz,
          height: Xz,
          descent: Xz - Wz
        };
        return Dz(Oz) ? Oz : null
      }(zz);
      if (tz) return tz;
      const sz = function(zz) {
        let tz = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? tz = new OffscreenCanvas(64, 64) : (0, bz.g)() && "function" === typeof document.createElement && (tz = document.createElement("canvas"), tz.width = 64, tz.height = 64);
          const sz = tz?.getContext("2d");
          if (!sz) return null;
          sz.font = zz;
          const Fz = sz.measureText("Hg"),
            Wz = Number(Fz.actualBoundingBoxAscent ?? Fz.fontBoundingBoxAscent),
            Xz = Number(Fz.actualBoundingBoxDescent ?? Fz.fontBoundingBoxDescent),
            Oz = {
              ascent: Wz,
              height: Wz + Xz,
              descent: Xz
            };
          return Dz(Oz) ? Oz : null
        } catch {
          return null
        } finally {
          const zz = tz;
          "function" === typeof zz?.dispose && zz.dispose()
        }
      }(zz);
      return sz || function(zz) {
        const tz = Math.max(1, function(zz) {
            const tz = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(zz || ""));
            return tz ? Number(tz[1]) : 16
          }(zz)),
          sz = .8 * tz,
          Fz = .2 * tz;
        return {
          ascent: sz,
          height: sz + Fz,
          descent: Fz
        }
      }(zz)
    }

    function Dz(zz) {
      return Number.isFinite(zz.ascent) && Number.isFinite(zz.height) && Number.isFinite(zz.descent) && zz.height > 0
    }

    function gz(zz) {
      if (zz.requestPointerLock) {
        const tz = zz.requestPointerLock();
        tz instanceof Promise ? tz.then((() => {
          zz.focus()
        })).catch((() => {})) : zz.focus()
      }
    }
    var Hz = sz(39121),
      Bz = sz(39074),
      Pz = sz(39123),
      rz = sz(39132);
    class Yz extends Xz.ThinEngine {
      static get NpmPackage() {
        return Nz.b.NpmPackage
      }
      static get Version() {
        return Nz.b.Version
      }
      static get Instances() {
        return Wz.c.Instances
      }
      static get LastCreatedEngine() {
        return Wz.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Wz.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(zz) {
        return Nz.b.DefaultLoadingScreenFactory(zz)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Yz._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Pz.b)(), (0, rz.d)(), super(zz, tz, sz, Fz), this._performanceMonitor = new oz, this._drawCalls = new Hz.d, zz && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(zz) {
        super._sharedInit(zz),
          function(zz, tz, sz) {
            zz._onCanvasFocus = () => {
              zz.onCanvasFocusObservable.notifyObservers(zz)
            }, zz._onCanvasBlur = () => {
              zz.onCanvasBlurObservable.notifyObservers(zz)
            }, zz._onCanvasContextMenu = tz => {
              zz.disableContextMenu && tz.preventDefault()
            }, tz.addEventListener("focus", zz._onCanvasFocus), tz.addEventListener("blur", zz._onCanvasBlur), tz.addEventListener("contextmenu", zz._onCanvasContextMenu), zz._onBlur = () => {
              zz.disablePerformanceMonitorInBackground && zz.performanceMonitor.disable(), zz._windowIsBackground = !0
            }, zz._onFocus = () => {
              zz.disablePerformanceMonitorInBackground && zz.performanceMonitor.enable(), zz._windowIsBackground = !1
            }, zz._onCanvasPointerOut = sz => {
              document.elementFromPoint(sz.clientX, sz.clientY) !== tz && zz.onCanvasPointerOutObservable.notifyObservers(sz)
            };
            const Fz = zz.getHostWindow();
            Fz && "function" === typeof Fz.addEventListener && (Fz.addEventListener("blur", zz._onBlur), Fz.addEventListener("focus", zz._onFocus)), tz.addEventListener("pointerout", zz._onCanvasPointerOut), sz.doNotHandleTouchAction || function(zz) {
              zz && zz.setAttribute && (zz.setAttribute("touch-action", "none"), zz.style.touchAction = "none", zz.style.webkitTapHighlightColor = "transparent")
            }(tz), !Nz.b.audioEngine && sz.audioEngine && Nz.b.AudioEngineFactory && (Nz.b.audioEngine = Nz.b.AudioEngineFactory(zz.getRenderingCanvas(), zz.getAudioContext(), zz.getAudioDestination())), (0, bz.g)() && (zz._onFullscreenChange = () => {
              zz.isFullscreen = !!document.fullscreenElement, zz.isFullscreen && zz._pointerLockRequested && tz && gz(tz)
            }, document.addEventListener("fullscreenchange", zz._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", zz._onFullscreenChange, !1), zz._onPointerLockChange = () => {
              zz.isPointerLock = document.pointerLockElement === tz
            }, document.addEventListener("pointerlockchange", zz._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", zz._onPointerLockChange, !1)), zz.enableOfflineSupport = void 0 !== Nz.b.OfflineProviderFactory, zz._deterministicLockstep = !!sz.deterministicLockstep, zz._lockstepMaxSteps = sz.lockstepMaxSteps || 0, zz._timeStep = sz.timeStep || 1 / 60
          }(this, zz, this._creationOptions)
      }
      resizeImageBitmap(zz, tz, sz) {
        return function(zz, tz, sz, Fz) {
          const Wz = zz.createCanvas(sz, Fz).getContext("2d");
          if (!Wz) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Wz.drawImage(tz, 0, 0), Wz.getImageData(0, 0, sz, Fz).data
        }(this, zz, tz, sz)
      }
      async _createImageBitmapFromSource(zz, tz) {
        return await async function(zz, tz, sz) {
          return await new Promise(((Fz, Wz) => {
            const Xz = new Image;
            Xz.onload = () => {
              Xz.decode().then((() => {
                zz.createImageBitmap(Xz, sz).then((zz => {
                  Fz(zz)
                }))
              }))
            }, Xz.onerror = () => {
              Wz(`Error loading image ${Xz.src}`)
            }, Xz.src = tz
          }))
        }(this, zz, tz)
      }
      switchFullscreen(zz) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(zz)
      }
      enterFullscreen(zz) {
        this.isFullscreen || (this._pointerLockRequested = zz, this._renderingCanvas && function(zz) {
          const tz = zz.requestFullscreen || zz.webkitRequestFullscreen;
          tz && tz.call(zz)
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
      setDirectViewport(zz, tz, sz, Fz) {
        const Wz = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(zz, tz, sz, Fz), Wz
      }
      scissorClear(zz, tz, sz, Fz, Wz) {
        this.enableScissor(zz, tz, sz, Fz), this.clear(Wz, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(zz) {
        const tz = this._gl.getAttachedShaders(zz);
        return tz ? this._gl.getShaderSource(tz[0]) : null
      }
      getFragmentShaderSource(zz) {
        const tz = this._gl.getAttachedShaders(zz);
        return tz ? this._gl.getShaderSource(tz[1]) : null
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
        return wz(zz)
      }
      enterPointerlock() {
        this._renderingCanvas && gz(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      bY() {
        this._measureFps(), super.bY()
      }
      _deletePipelineContext(zz) {
        const tz = zz;
        tz && tz.program && tz.transformFeedback && (this.deleteTransformFeedback(tz.transformFeedback), tz.transformFeedback = null), super._deletePipelineContext(zz)
      }
      createShaderProgram(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Wz = Wz || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Oz = super.createShaderProgram(zz, tz, sz, Fz, Wz, Xz);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Oz
      }
      _createShaderProgram(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Xz = Fz.createProgram();
        if (zz.program = Xz, !Xz) throw new Error("Unable to create program");
        if (Fz.attachShader(Xz, tz), Fz.attachShader(Xz, sz), this.jD > 1 && Wz) {
          const tz = this.createTransformFeedback();
          this.bindTransformFeedback(tz), this.setTranformFeedbackVaryings(Xz, Wz), zz.transformFeedback = tz
        }
        return Fz.linkProgram(Xz), this.jD > 1 && Wz && this.bindTransformFeedback(null), zz.context = Fz, zz.vertexShader = tz, zz.fragmentShader = sz, zz.isParallelCompiled || this._finalizePipelineContext(zz), Xz
      }
      _releaseTexture(zz) {
        super._releaseTexture(zz)
      }
      _releaseRenderTargetWrapper(zz) {
        super._releaseRenderTargetWrapper(zz);
        for (const tz of this.scenes) {
          for (const sz of tz.postProcesses) sz._outputTexture === zz && (sz._outputTexture = null);
          for (const sz of tz.cameras)
            for (const tz of sz._postProcesses) tz && tz._outputTexture === zz && (tz._outputTexture = null)
        }
      }
      _rescaleTexture(zz, tz, sz, Fz, Wz) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Xz = this.createRenderTargetTexture({
          width: tz.width,
          height: tz.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Yz._RescalePostProcessFactory && (this._rescalePostProcess = Yz._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Oz = () => {
              this._rescalePostProcess.onApply = function(tz) {
                tz._bindTexture("textureSampler", zz)
              };
              let Oz = sz;
              Oz || (Oz = this.scenes[this.scenes.length - 1]), Oz.postProcessManager.directRender([this._rescalePostProcess], Xz, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, tz, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Fz, 0, 0, tz.width, tz.height, 0), this.unBindFramebuffer(Xz), Xz.dispose(), Wz && Wz()
            },
            oz = this._rescalePostProcess.getEffect();
          oz ? oz.executeWhenCompiled(Oz) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((zz => {
            zz.executeWhenCompiled(Oz)
          }))
        }
      }
      wrapWebGLTexture(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Oz = new uz.b(zz, this._gl),
          oz = new Fz.d(this, 15, !0);
        return oz._hardwareTexture = Oz, oz.baseWidth = Wz, oz.baseHeight = Xz, oz.width = Wz, oz.height = Xz, oz.isReady = !0, oz.useMipMaps = tz, this.updateTextureSamplingMode(sz, oz), oz
      }
      updateWrappedWebGLTexture(zz, tz) {
        if (15 !== zz.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Fz of this._renderTargetWrapperCache)
          if (Fz.textures?.includes(zz)) {
            if (Fz.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Fz._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } zz._hardwareTexture = new uz.b(tz, this._gl), zz.isReady = !0, zz._cachedCoordinatesMode = null, zz._cachedWrapU = null, zz._cachedWrapV = null, zz._cachedWrapR = null, zz._cachedAnisotropicFilteringLevel = null;
        for (const Fz in this._boundTexturesCache) this._boundTexturesCache[Fz] === zz && (this._boundTexturesCache[Fz] = null);
        this.updateTextureSamplingMode(zz.samplingMode, zz);
        const sz = this._gl;
        for (const Fz of this._renderTargetWrapperCache) {
          if (Fz.texture !== zz) continue;
          const Wz = Fz,
            Xz = Fz.samples,
            Oz = Xz > 1;
          Wz._framebuffer && sz.deleteFramebuffer(Wz._framebuffer), !Oz && Wz._depthStencilBuffer && (sz.deleteRenderbuffer(Wz._depthStencilBuffer), Wz._depthStencilBuffer = null);
          const oz = this._currentFramebuffer,
            vz = sz.createFramebuffer();
          this._bindUnboundFramebuffer(vz), sz.framebufferTexture2D(sz.FRAMEBUFFER, sz.COLOR_ATTACHMENT0, sz.TEXTURE_2D, tz, 0), Oz || (Wz._depthStencilBuffer = this._setupFramebufferDepthAttachments(Fz._generateStencilBuffer, Fz._generateDepthBuffer, Fz.width, Fz.height)), this._bindUnboundFramebuffer(oz), Wz._framebuffer = vz, Oz && (Fz._samples = 1, this.updateRenderTargetTextureSampleCount(Wz, Xz))
        }
      }
      _uploadImageToTexture(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wz = this._gl,
          Xz = this._getWebGLTextureType(zz.type),
          Oz = this._getInternalFormat(zz.format),
          oz = this._getRGBABufferInternalSizedFormat(zz.type, Oz),
          vz = zz.isCube ? Wz.TEXTURE_CUBE_MAP : Wz.TEXTURE_2D;
        this._bindTextureDirectly(vz, zz, !0), this._unpackFlipY(zz.invertY);
        let Uz = Wz.TEXTURE_2D;
        zz.isCube && (Uz = Wz.TEXTURE_CUBE_MAP_POSITIVE_X + sz), Wz.texImage2D(Uz, Fz, oz, Oz, Xz, tz), this._bindTextureDirectly(vz, null, !0)
      }
      updateTextureComparisonFunction(zz, tz) {
        if (1 === this.jD) return void Kz.e.Error("WebGL 1 does not support texture comparison.");
        const sz = this._gl;
        zz.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, zz, !0), 0 === tz ? (sz.texParameteri(sz.TEXTURE_CUBE_MAP, sz.TEXTURE_COMPARE_FUNC, 515), sz.texParameteri(sz.TEXTURE_CUBE_MAP, sz.TEXTURE_COMPARE_MODE, sz.NONE)) : (sz.texParameteri(sz.TEXTURE_CUBE_MAP, sz.TEXTURE_COMPARE_FUNC, tz), sz.texParameteri(sz.TEXTURE_CUBE_MAP, sz.TEXTURE_COMPARE_MODE, sz.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, zz, !0), 0 === tz ? (sz.texParameteri(sz.TEXTURE_2D, sz.TEXTURE_COMPARE_FUNC, 515), sz.texParameteri(sz.TEXTURE_2D, sz.TEXTURE_COMPARE_MODE, sz.NONE)) : (sz.texParameteri(sz.TEXTURE_2D, sz.TEXTURE_COMPARE_FUNC, tz), sz.texParameteri(sz.TEXTURE_2D, sz.TEXTURE_COMPARE_MODE, sz.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), zz._comparisonFunction = tz
      }
      createInstancesBuffer(zz) {
        const tz = this._gl.createBuffer();
        if (!tz) throw new Error("Unable to create instance buffer");
        const sz = new Uz.e(tz);
        return sz.au = zz, this.bindArrayBuffer(sz), this._gl.bufferData(this._gl.ARRAY_BUFFER, zz, this._gl.DYNAMIC_DRAW), sz.references = 1, sz
      }
      deleteInstancesBuffer(zz) {
        this._gl.deleteBuffer(zz)
      }
      async _clientWaitAsync(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Fz = this._gl;
        return await new Promise(((Wz, Xz) => {
          (0, Bz.e)((() => {
            const sz = Fz.clientWaitSync(zz, tz, 0);
            if (sz == Fz.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return sz != Fz.TIMEOUT_EXPIRED
          }), Wz, Xz, sz)
        }))
      }
      _readPixelsAsync(zz, tz, sz, Fz, Wz, Xz, Oz) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const oz = this._gl,
          vz = oz.createBuffer();
        oz.bindBuffer(oz.PIXEL_PACK_BUFFER, vz), oz.bufferData(oz.PIXEL_PACK_BUFFER, Oz.byteLength, oz.STREAM_READ), oz.readPixels(zz, tz, sz, Fz, Wz, Xz, 0), oz.bindBuffer(oz.PIXEL_PACK_BUFFER, null);
        const Uz = oz.fenceSync(oz.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Uz ? (oz.flush(), this._clientWaitAsync(Uz, 0, 10).then((() => (oz.deleteSync(Uz), oz.bindBuffer(oz.PIXEL_PACK_BUFFER, vz), oz.getBufferSubData(oz.PIXEL_PACK_BUFFER, 0, Oz), oz.bindBuffer(oz.PIXEL_PACK_BUFFER, null), oz.deleteBuffer(vz), Oz)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(zz, tz) {
            1 === Wz.c.Instances.length && Nz.b.audioEngine && (Nz.b.audioEngine.dispose(), Nz.b.audioEngine = null);
            const sz = zz.getHostWindow();
            sz && "function" === typeof sz.removeEventListener && (sz.removeEventListener("blur", zz._onBlur), sz.removeEventListener("focus", zz._onFocus)), tz && (tz.removeEventListener("focus", zz._onCanvasFocus), tz.removeEventListener("blur", zz._onCanvasBlur), tz.removeEventListener("pointerout", zz._onCanvasPointerOut), tz.removeEventListener("contextmenu", zz._onCanvasContextMenu)), (0, bz.g)() && (document.removeEventListener("fullscreenchange", zz._onFullscreenChange), document.removeEventListener("mozfullscreenchange", zz._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", zz._onFullscreenChange), document.removeEventListener("msfullscreenchange", zz._onFullscreenChange), document.removeEventListener("pointerlockchange", zz._onPointerLockChange), document.removeEventListener("mspointerlockchange", zz._onPointerLockChange), document.removeEventListener("mozpointerlockchange", zz._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", zz._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Yz.ALPHA_DISABLE = 0, Yz.ALPHA_ADD = 1, Yz.ALPHA_COMBINE = 2, Yz.ALPHA_SUBTRACT = 3, Yz.ALPHA_MULTIPLY = 4, Yz.ALPHA_MAXIMIZED = 5, Yz.ALPHA_ONEONE = 6, Yz.ALPHA_PREMULTIPLIED = 7, Yz.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Yz.ALPHA_INTERPOLATE = 9, Yz.ALPHA_SCREENMODE = 10, Yz.DELAYLOADSTATE_NONE = 0, Yz.DELAYLOADSTATE_LOADED = 1, Yz.DELAYLOADSTATE_LOADING = 2, Yz.DELAYLOADSTATE_NOTLOADED = 4, Yz.NEVER = 512, Yz.ALWAYS = 519, Yz.LESS = 513, Yz.EQUAL = 514, Yz.LEQUAL = 515, Yz.GREATER = 516, Yz.GEQUAL = 518, Yz.NOTEQUAL = 517, Yz.KEEP = 7680, Yz.REPLACE = 7681, Yz.INCR = 7682, Yz.DECR = 7683, Yz.INVERT = 5386, Yz.INCR_WRAP = 34055, Yz.DECR_WRAP = 34056, Yz.TEXTURE_CLAMP_ADDRESSMODE = 0, Yz.TEXTURE_WRAP_ADDRESSMODE = 1, Yz.TEXTURE_MIRROR_ADDRESSMODE = 2, Yz.TEXTUREFORMAT_ALPHA = 0, Yz.TEXTUREFORMAT_LUMINANCE = 1, Yz.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Yz.TEXTUREFORMAT_RGB = 4, Yz.TEXTUREFORMAT_RGBA = 5, Yz.TEXTUREFORMAT_RED = 6, Yz.TEXTUREFORMAT_R = 6, Yz.TEXTUREFORMAT_R16_UNORM = 33322, Yz.TEXTUREFORMAT_RG16_UNORM = 33324, Yz.TEXTUREFORMAT_RGB16_UNORM = 32852, Yz.TEXTUREFORMAT_RGBA16_UNORM = 32859, Yz.TEXTUREFORMAT_R16_SNORM = 36760, Yz.TEXTUREFORMAT_RG16_SNORM = 36761, Yz.TEXTUREFORMAT_RGB16_SNORM = 36762, Yz.TEXTUREFORMAT_RGBA16_SNORM = 36763, Yz.TEXTUREFORMAT_RG = 7, Yz.TEXTUREFORMAT_RED_INTEGER = 8, Yz.TEXTUREFORMAT_R_INTEGER = 8, Yz.TEXTUREFORMAT_RG_INTEGER = 9, Yz.TEXTUREFORMAT_RGB_INTEGER = 10, Yz.TEXTUREFORMAT_RGBA_INTEGER = 11, Yz.TEXTURETYPE_UNSIGNED_BYTE = 0, Yz.TEXTURETYPE_UNSIGNED_INT = 0, Yz.TEXTURETYPE_FLOAT = 1, Yz.TEXTURETYPE_HALF_FLOAT = 2, Yz.TEXTURETYPE_BYTE = 3, Yz.TEXTURETYPE_SHORT = 4, Yz.TEXTURETYPE_UNSIGNED_SHORT = 5, Yz.TEXTURETYPE_INT = 6, Yz.TEXTURETYPE_UNSIGNED_INTEGER = 7, Yz.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Yz.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Yz.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Yz.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Yz.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Yz.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Yz.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Yz.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Yz.TEXTURE_NEAREST_SAMPLINGMODE = 1, Yz.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Yz.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Yz.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Yz.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Yz.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Yz.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Yz.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Yz.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Yz.TEXTURE_NEAREST_LINEAR = 7, Yz.TEXTURE_NEAREST_NEAREST = 1, Yz.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Yz.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Yz.TEXTURE_LINEAR_LINEAR = 2, Yz.TEXTURE_LINEAR_NEAREST = 12, Yz.TEXTURE_EXPLICIT_MODE = 0, Yz.TEXTURE_SPHERICAL_MODE = 1, Yz.TEXTURE_PLANAR_MODE = 2, Yz.TEXTURE_CUBIC_MODE = 3, Yz.TEXTURE_PROJECTION_MODE = 4, Yz.TEXTURE_SKYBOX_MODE = 5, Yz.TEXTURE_INVCUBIC_MODE = 6, Yz.TEXTURE_EQUIRECTANGULAR_MODE = 7, Yz.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Yz.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Yz.SCALEMODE_FLOOR = 1, Yz.SCALEMODE_NEAREST = 2, Yz.SCALEMODE_CEILING = 3
  },
  39150: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    var Fz = sz(39117);
    class Wz {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(zz) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = zz, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, zz && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Fz.c)(zz.format))
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
        const tz = this._textures[zz],
          sz = this._layerIndices?.[zz] ?? 0,
          Fz = this._faceIndices?.[zz] ?? 0;
        return tz.isCube ? 6 * sz + Fz : tz.is3D ? 0 : sz
      }
      get samples() {
        return this._samples
      }
      setSamples(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === zz && !sz) return zz;
        const Fz = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, zz, tz) : this._engine.updateRenderTargetTextureSampleCount(this, zz);
        return this._samples = zz, Fz
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(zz, tz, sz, Fz, Wz) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = zz, this._isCube = tz, this._size = sz, this._engine = Fz, this._depthStencilTexture = null, this.label = Wz
      }
      setTextures(zz) {
        Array.isArray(zz) ? this._textures = zz : this._textures = zz ? [zz] : null
      }
      setTexture(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[tz] !== zz && (this._textures[tz] && sz && this._textures[tz].dispose(), this._textures[tz] = zz)
      }
      setLayerAndFaceIndices(zz, tz) {
        this._layerIndices = zz, this._faceIndices = tz
      }
      setLayerAndFaceIndex() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== tz && tz >= 0 && (this._layerIndices[zz] = tz), void 0 !== sz && sz >= 0 && (this._faceIndices[zz] = sz)
      }
      createDepthStencilTexture() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = sz, this._depthStencilTextureLabel = Xz, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: tz,
          comparisonFunction: zz,
          generateStencil: sz,
          isCube: this._isCube,
          samples: Fz,
          depthTextureFormat: Wz,
          label: Xz
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
          const tz = this.textures;
          if (tz && tz.length > 0) {
            let sz = !1,
              Fz = tz.length,
              Wz = -1;
            const Xz = tz[tz.length - 1]._source;
            14 !== Xz && 12 !== Xz || (sz = !0, Wz = tz[tz.length - 1].format, Fz--);
            const Oz = [],
              oz = [],
              vz = [],
              Uz = [],
              Kz = [],
              uz = [],
              Nz = [],
              bz = {};
            for (let zz = 0; zz < Fz; ++zz) {
              const sz = tz[zz];
              Oz.push(sz.samplingMode), oz.push(sz.type), vz.push(sz.format);
              void 0 !== bz[sz.uniqueId] ? (Uz.push(-1), Nz.push(0)) : (bz[sz.uniqueId] = zz, sz.is2DArray ? (Uz.push(35866), Nz.push(sz.depth)) : sz.isCube ? (Uz.push(34067), Nz.push(0)) : sz.is3D ? (Uz.push(32879), Nz.push(sz.depth)) : (Uz.push(3553), Nz.push(0))), this._faceIndices && Kz.push(this._faceIndices[zz] ?? 0), this._layerIndices && uz.push(this._layerIndices[zz] ?? 0)
            }
            const wz = {
                samplingModes: Oz,
                generateMipMaps: tz[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: sz,
                depthTextureFormat: Wz,
                types: oz,
                formats: vz,
                NOz: Fz,
                targetTypes: Uz,
                faceIndex: Kz,
                layerIndex: uz,
                layerCounts: Nz,
                label: this.label
              },
              Dz = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            zz = this._engine.createMultipleRenderTarget(Dz, wz);
            for (let gz = 0; gz < Fz; ++gz) {
              if (-1 !== Uz[gz]) continue;
              const sz = bz[tz[gz].uniqueId];
              zz.setTexture(zz.textures[sz], gz)
            }
          }
        } else {
          const tz = {};
          if (tz.generateDepthBuffer = this._generateDepthBuffer, tz.generateMipMaps = this.texture?.generateMipMaps ?? !1, tz.generateStencilBuffer = this._generateStencilBuffer, tz.samplingMode = this.texture?.samplingMode, tz.type = this.texture?.type, tz.format = this.texture?.format, tz.noColorAttachment = !this._textures, tz.label = this.label, this.isCube) zz = this._engine.createRenderTargetCubeTexture(this.width, tz);
          else {
            const sz = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            zz = this._engine.createRenderTargetTexture(sz, tz)
          }
          zz.texture && (zz.texture.isReady = !0)
        }
        return zz
      }
      _swapRenderTargetWrapper(zz) {
        if (this._textures && zz._textures)
          for (let tz = 0; tz < this._textures.length; ++tz) this._textures[tz]._swapAndDie(zz._textures[tz], !1), zz._textures[tz].isReady = !0;
        this._depthStencilTexture && zz._depthStencilTexture && (this._depthStencilTexture._swapAndDie(zz._depthStencilTexture), zz._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const zz = this._cloneRenderTargetWrapper();
        if (zz) {
          if (this._depthStencilTexture) {
            const tz = this._depthStencilTexture.samplingMode,
              sz = this._depthStencilTexture.format,
              Fz = 2 === tz || 3 === tz || 11 === tz;
            zz.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Fz, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, sz, this._depthStencilTextureLabel)
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
  39573: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static get ForceFullSceneLoadingForIncremental() {
        return Fz._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(zz) {
        Fz._ForceFullSceneLoadingForIncremental = zz
      }
      static get ShowLoadingScreen() {
        return Fz._ShowLoadingScreen
      }
      static set ShowLoadingScreen(zz) {
        Fz._ShowLoadingScreen = zz
      }
      static get loggingLevel() {
        return Fz._LoggingLevel
      }
      static set loggingLevel(zz) {
        Fz._LoggingLevel = zz
      }
      static get CleanBoneMatrixWeights() {
        return Fz._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(zz) {
        Fz._CleanBoneMatrixWeights = zz
      }
    }
    Fz._ForceFullSceneLoadingForIncremental = !1, Fz._ShowLoadingScreen = !0, Fz._CleanBoneMatrixWeights = !1, Fz._LoggingLevel = 0
  },
  39245: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(38097);
    const Wz = new Map;

    function Xz(zz, tz) {
      (function(zz) {
        return Wz.delete(zz)
      })(zz) && Fz.e.Warn(`Extension with the name '${zz}' already exists`), Wz.set(zz, tz)
    }

    function Oz(zz, tz) {
      "image/ktx" !== tz && "image/ktx2" !== tz || (zz = ".ktx"), Wz.has(zz) || (zz.endsWith(".ies") && Xz(".ies", (async () => await sz.e(299).then((() => sz(40878))).then((zz => new zz._IESTextureLoader)))), zz.endsWith(".dds") && Xz(".dds", (async () => await sz.e(297).then((() => sz(40885))).then((zz => new zz._DDSTextureLoader)))), zz.endsWith(".basis") && Xz(".basis", (async () => await sz.e(300).then((() => sz(40894))).then((zz => new zz._BasisTextureLoader)))), zz.endsWith(".env") && Xz(".env", (async () => await Promise.all([sz.e(301), sz.e(298)]).then((() => sz(40902))).then((zz => new zz._ENVTextureLoader)))), zz.endsWith(".hdr") && Xz(".hdr", (async () => await sz.e(302).then((() => sz(40954))).then((zz => new zz._HDRTextureLoader)))), (zz.endsWith(".ktx") || zz.endsWith(".ktx2")) && (Xz(".ktx", (async () => await sz.e(303).then((() => sz(40957))).then((zz => new zz._KTXTextureLoader)))), Xz(".ktx2", (async () => await sz.e(303).then((() => sz(40957))).then((zz => new zz._KTXTextureLoader))))), zz.endsWith(".tga") && Xz(".tga", (async () => await sz.e(304).then((() => sz(40969))).then((zz => new zz._TGATextureLoader)))), zz.endsWith(".exr") && Xz(".exr", (async () => await sz.e(305).then((() => sz(40972))).then((zz => new zz._ExrTextureLoader)))));
      const Fz = Wz.get(zz);
      return Fz ? Promise.resolve(Fz(tz)) : null
    }
  },
  39588: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => Uz
    });
    var Fz = sz(39451),
      Wz = sz(39185),
      Xz = sz(36518);
    class Oz extends Fz.b {
      get P_() {
        return this._subMaterials
      }
      set P_(zz) {
        this._subMaterials = zz, this._hookArray(zz)
      }
      getChildren() {
        return this.P_
      }
      constructor(zz, tz) {
        super(zz, tz, !0), this._waitingSubMaterialsUniqueIds = [], this.aJ().addMultiMaterial(this), this.P_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(zz) {
        var tz = this;
        const sz = zz.push;
        zz.push = function() {
          for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
          const Oz = sz.apply(zz, Wz);
          return tz._markAllSubMeshesAsTexturesDirty(), Oz
        };
        const Fz = zz.splice;
        zz.splice = (tz, sz) => {
          const Wz = Fz.call(zz, tz, sz ?? zz.length);
          return this._markAllSubMeshesAsTexturesDirty(), Wz
        }
      }
      getSubMaterial(zz) {
        return zz < 0 || zz >= this.P_.length ? this.aJ().defaultMaterial : this.P_[zz]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.P_.map((zz => zz ? zz.getActiveTextures() : [])))
      }
      hasTexture(zz) {
        if (super.hasTexture(zz)) return !0;
        for (let tz = 0; tz < this.P_.length; tz++)
          if (this.P_[tz]?.hasTexture(zz)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(zz, tz, sz) {
        for (let Fz = 0; Fz < this.P_.length; Fz++) {
          const Wz = this.P_[Fz];
          if (Wz) {
            if (Wz._storeEffectOnSubMeshes) {
              if (!Wz.isReadyForSubMesh(zz, tz, sz)) return !1;
              continue
            }
            if (!Wz.isReady(zz)) return !1
          }
        }
        return !0
      }
      clone(zz, tz) {
        const sz = new Oz(zz, this.aJ());
        for (let Fz = 0; Fz < this.P_.length; Fz++) {
          let Wz;
          const Xz = this.P_[Fz];
          Wz = tz && Xz ? Xz.clone(zz + "-" + Xz.name) : this.P_[Fz], sz.P_.push(Wz)
        }
        return sz
      }
      serialize() {
        const zz = {};
        zz.name = this.name, zz.id = this.id, zz.uniqueId = this.uniqueId, Wz.e && (zz.tags = Wz.e.GetTags(this)), zz.materialsUniqueIds = [], zz.materials = [];
        for (let tz = 0; tz < this.P_.length; tz++) {
          const sz = this.P_[tz];
          sz ? (zz.materialsUniqueIds.push(sz.uniqueId), zz.materials.push(sz.id)) : (zz.materialsUniqueIds.push(null), zz.materials.push(null))
        }
        return zz
      }
      dispose(zz, tz, sz) {
        const Fz = this.aJ();
        if (!Fz) return;
        if (sz)
          for (let Xz = 0; Xz < this.P_.length; Xz++) {
            const sz = this.P_[Xz];
            sz && sz.dispose(zz, tz)
          }
        const Wz = Fz.multiMaterials.indexOf(this);
        Wz >= 0 && Fz.multiMaterials.splice(Wz, 1), super.dispose(zz, tz)
      }
    }
    let oz = !1;

    function vz(zz, tz) {
      const sz = new Oz(zz.name, tz);
      if (sz.id = zz.id, sz._loadedUniqueId = zz.uniqueId, Wz.e && Wz.e.AddTagsTo(sz, zz.tags), zz.materialsUniqueIds) sz._waitingSubMaterialsUniqueIds = zz.materialsUniqueIds;
      else
        for (const Fz of zz.materials) sz.P_.push(tz.getLastMaterialById(Fz));
      return sz
    }

    function Uz() {
      oz || (oz = !0, Oz.ParseMultiMaterial = vz, (0, Xz.g)("BABYLON.MultiMaterial", Oz))
    }
  },
  39382: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz, Wz, Xz = sz(36475);
    ! function(zz) {
      zz[zz.LOCAL = 0] = "LOCAL", zz[zz.WORLD = 1] = "WORLD", zz[zz.BONE = 2] = "BONE"
    }(Fz || (Fz = {}));
    class Oz {}
    Oz.X = new Xz.p(1, 0, 0), Oz.Y = new Xz.p(0, 1, 0), Oz.Z = new Xz.p(0, 0, 1),
      function(zz) {
        zz[zz.X = 0] = "X", zz[zz.Y = 1] = "Y", zz[zz.Z = 2] = "Z"
      }(Wz || (Wz = {}))
  },
  39155: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => vz,
      g: () => Uz
    });
    var Fz = sz(36475);
    const Wz = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Xz = [() => 1, zz => zz.y, zz => zz.z, zz => zz.x, zz => zz.x * zz.y, zz => zz.y * zz.z, zz => 3 * zz.z * zz.z - 1, zz => zz.x * zz.z, zz => zz.x * zz.x - zz.y * zz.y],
      Oz = (zz, tz) => Wz[zz] * Xz[zz](tz),
      oz = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class vz {
      constructor() {
        this.preScaled = !1, this.l00 = Fz.p.Zero(), this.l1_1 = Fz.p.Zero(), this.l10 = Fz.p.Zero(), this.l11 = Fz.p.Zero(), this.l2_2 = Fz.p.Zero(), this.l2_1 = Fz.p.Zero(), this.l20 = Fz.p.Zero(), this.l21 = Fz.p.Zero(), this.l22 = Fz.p.Zero()
      }
      addLight(zz, tz, sz) {
        Fz.m.XD[0].set(tz.r, tz.g, tz.b);
        const Wz = Fz.m.XD[0],
          Xz = Fz.m.XD[1];
        Wz.scaleToRef(sz, Xz), Xz.scaleToRef(Oz(0, zz), Fz.m.XD[2]), this.l00.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(1, zz), Fz.m.XD[2]), this.l1_1.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(2, zz), Fz.m.XD[2]), this.l10.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(3, zz), Fz.m.XD[2]), this.l11.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(4, zz), Fz.m.XD[2]), this.l2_2.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(5, zz), Fz.m.XD[2]), this.l2_1.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(6, zz), Fz.m.XD[2]), this.l20.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(7, zz), Fz.m.XD[2]), this.l21.addInPlace(Fz.m.XD[2]), Xz.scaleToRef(Oz(8, zz), Fz.m.XD[2]), this.l22.addInPlace(Fz.m.XD[2])
      }
      scaleInPlace(zz) {
        this.l00.scaleInPlace(zz), this.l1_1.scaleInPlace(zz), this.l10.scaleInPlace(zz), this.l11.scaleInPlace(zz), this.l2_2.scaleInPlace(zz), this.l2_1.scaleInPlace(zz), this.l20.scaleInPlace(zz), this.l21.scaleInPlace(zz), this.l22.scaleInPlace(zz)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(oz[0]), this.l1_1.scaleInPlace(oz[1]), this.l10.scaleInPlace(oz[2]), this.l11.scaleInPlace(oz[3]), this.l2_2.scaleInPlace(oz[4]), this.l2_1.scaleInPlace(oz[5]), this.l20.scaleInPlace(oz[6]), this.l21.scaleInPlace(oz[7]), this.l22.scaleInPlace(oz[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Wz[0]), this.l1_1.scaleInPlace(Wz[1]), this.l10.scaleInPlace(Wz[2]), this.l11.scaleInPlace(Wz[3]), this.l2_2.scaleInPlace(Wz[4]), this.l2_1.scaleInPlace(Wz[5]), this.l20.scaleInPlace(Wz[6]), this.l21.scaleInPlace(Wz[7]), this.l22.scaleInPlace(Wz[8])
      }
      updateFromArray(zz) {
        return Fz.p.FromArrayToRef(zz[0], 0, this.l00), Fz.p.FromArrayToRef(zz[1], 0, this.l1_1), Fz.p.FromArrayToRef(zz[2], 0, this.l10), Fz.p.FromArrayToRef(zz[3], 0, this.l11), Fz.p.FromArrayToRef(zz[4], 0, this.l2_2), Fz.p.FromArrayToRef(zz[5], 0, this.l2_1), Fz.p.FromArrayToRef(zz[6], 0, this.l20), Fz.p.FromArrayToRef(zz[7], 0, this.l21), Fz.p.FromArrayToRef(zz[8], 0, this.l22), this
      }
      updateFromFloatsArray(zz) {
        return Fz.p.FromFloatsToRef(zz[0], zz[1], zz[2], this.l00), Fz.p.FromFloatsToRef(zz[3], zz[4], zz[5], this.l1_1), Fz.p.FromFloatsToRef(zz[6], zz[7], zz[8], this.l10), Fz.p.FromFloatsToRef(zz[9], zz[10], zz[11], this.l11), Fz.p.FromFloatsToRef(zz[12], zz[13], zz[14], this.l2_2), Fz.p.FromFloatsToRef(zz[15], zz[16], zz[17], this.l2_1), Fz.p.FromFloatsToRef(zz[18], zz[19], zz[20], this.l20), Fz.p.FromFloatsToRef(zz[21], zz[22], zz[23], this.l21), Fz.p.FromFloatsToRef(zz[24], zz[25], zz[26], this.l22), this
      }
      static FromArray(zz) {
        return (new vz).updateFromArray(zz)
      }
      static FromPolynomial(zz) {
        const tz = new vz;
        return tz.l00 = zz.xx.scale(.376127).add(zz.yy.scale(.376127)).add(zz.zz.scale(.376126)), tz.l1_1 = zz.y.scale(.977204), tz.l10 = zz.z.scale(.977204), tz.l11 = zz.x.scale(.977204), tz.l2_2 = zz.xy.scale(1.16538), tz.l2_1 = zz.yz.scale(1.16538), tz.l20 = zz.zz.scale(1.34567).subtract(zz.xx.scale(.672834)).subtract(zz.yy.scale(.672834)), tz.l21 = zz.zx.scale(1.16538), tz.l22 = zz.xx.scale(1.16538).subtract(zz.yy.scale(1.16538)), tz.l1_1.scaleInPlace(-1), tz.l11.scaleInPlace(-1), tz.l2_1.scaleInPlace(-1), tz.l21.scaleInPlace(-1), tz.scaleInPlace(Math.PI), tz
      }
    }
    class Uz {
      constructor() {
        this.x = Fz.p.Zero(), this.y = Fz.p.Zero(), this.z = Fz.p.Zero(), this.xx = Fz.p.Zero(), this.yy = Fz.p.Zero(), this.zz = Fz.p.Zero(), this.xy = Fz.p.Zero(), this.yz = Fz.p.Zero(), this.zx = Fz.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = vz.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(zz) {
        Fz.m.XD[0].m_(zz.r, zz.g, zz.b);
        const tz = Fz.m.XD[0];
        this.xx.addInPlace(tz), this.yy.addInPlace(tz), this.zz.addInPlace(tz)
      }
      scaleInPlace(zz) {
        this.x.scaleInPlace(zz), this.y.scaleInPlace(zz), this.z.scaleInPlace(zz), this.xx.scaleInPlace(zz), this.yy.scaleInPlace(zz), this.zz.scaleInPlace(zz), this.yz.scaleInPlace(zz), this.zx.scaleInPlace(zz), this.xy.scaleInPlace(zz)
      }
      updateFromHarmonics(zz) {
        return this._harmonics = zz, this.x.vsz(zz.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.vsz(zz.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.vsz(zz.l10), this.z.scaleInPlace(1.02333), this.xx.vsz(zz.l00), Fz.m.XD[0].vsz(zz.l20).scaleInPlace(.247708), Fz.m.XD[1].vsz(zz.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).oFz(Fz.m.XD[0]).addInPlace(Fz.m.XD[1]), this.yy.vsz(zz.l00), this.yy.scaleInPlace(.886277).oFz(Fz.m.XD[0]).oFz(Fz.m.XD[1]), this.zz.vsz(zz.l00), Fz.m.XD[0].vsz(zz.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Fz.m.XD[0]), this.yz.vsz(zz.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.vsz(zz.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.vsz(zz.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(zz) {
        return (new Uz).updateFromHarmonics(zz)
      }
      static FromArray(zz) {
        const tz = new Uz;
        return Fz.p.FromArrayToRef(zz[0], 0, tz.x), Fz.p.FromArrayToRef(zz[1], 0, tz.y), Fz.p.FromArrayToRef(zz[2], 0, tz.z), Fz.p.FromArrayToRef(zz[3], 0, tz.xx), Fz.p.FromArrayToRef(zz[4], 0, tz.yy), Fz.p.FromArrayToRef(zz[5], 0, tz.zz), Fz.p.FromArrayToRef(zz[6], 0, tz.yz), Fz.p.FromArrayToRef(zz[7], 0, tz.zx), Fz.p.FromArrayToRef(zz[8], 0, tz.xy), tz
      }
    }
  },
  39581: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => cz,
      c: () => Az
    });
    var Fz = sz(39167),
      Wz = sz(36505),
      Xz = sz(36475),
      Oz = sz(39293),
      oz = sz(39562),
      vz = sz(39585),
      Uz = sz(39284),
      Kz = sz(39472),
      uz = sz(39280);
    class Nz {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Xz.p(0, 0, 0), this._diffPositionForCollisions = new Xz.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var bz, wz, Dz, gz = sz(39065),
      Hz = sz(39234),
      Bz = sz(39479),
      Pz = sz(36654),
      rz = sz(36479),
      Yz = sz(39382),
      xz = sz(38097),
      mz = sz(39170),
      Jz = sz(39077),
      Iz = sz(36518);

    function Cz(zz, tz) {
      return zz - Math.floor(zz / tz) * tz
    }

    function ez(zz, tz, sz) {
      zz instanceof Float32Array ? Xz.e.FromArrayToRef(zz, tz, sz) : sz.m_((0, Hz.d)(zz[tz]), (0, Hz.d)(zz[tz + 1]), (0, Hz.d)(zz[tz + 2]), (0, Hz.d)(zz[tz + 3]), (0, Hz.d)(zz[tz + 4]), (0, Hz.d)(zz[tz + 5]), (0, Hz.d)(zz[tz + 6]), (0, Hz.d)(zz[tz + 7]), (0, Hz.d)(zz[tz + 8]), (0, Hz.d)(zz[tz + 9]), (0, Hz.d)(zz[tz + 10]), (0, Hz.d)(zz[tz + 11]), (0, Hz.d)(zz[tz + 12]), (0, Hz.d)(zz[tz + 13]), (0, Hz.d)(zz[tz + 14]), (0, Hz.d)(zz[tz + 15]))
    }

    function Zz(zz, tz, sz, Fz, Wz, oz, vz, Uz, Kz) {
      const uz = sz.texture,
        Nz = uz?.getInternalTexture(),
        bz = Nz?._bufferView;
      if (!(bz instanceof Float32Array) && !(bz instanceof Uint16Array)) return xz.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const wz = uz.getSize(),
        Dz = function(zz, tz) {
          const sz = zz.y - zz.x + 1,
            Fz = tz * zz.w / sz,
            Wz = Fz < 1 ? 0 : 1,
            Xz = sz - Wz;
          let Oz = Cz(Fz - Math.floor(Fz), 1) * Xz;
          return Oz = Cz(Oz + zz.z, Xz), Math.floor(Oz) + zz.x + Wz
        }(Fz, sz.time);
      if (!isFinite(Dz) || Dz < 0 || Dz >= wz.height) return xz.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const gz = Xz.m.XD[0],
        Hz = Xz.m.Matrix[0],
        Bz = Xz.m.Matrix[1],
        Pz = Dz * wz.width * 4,
        rz = tz === Oz.m.NormalKind ? Xz.p.TransformNormalFromFloatsToRef : Xz.p.TransformCoordinatesFromFloatsToRef;
      for (let Xz = 0, Oz = 0; Xz < zz.length; Xz += 3, Oz += 4) {
        let tz, sz;
        for (Hz.reset(), tz = 0; tz < 4 && tz < Kz; tz++) sz = oz[Oz + tz], sz > 0 && (ez(bz, Pz + 16 * Math.floor(Wz[Oz + tz]), Bz), Bz.scaleAndAddToRef(sz, Hz));
        if (vz && Uz)
          for (tz = 0; tz < 4 && tz + 4 < Kz; tz++) sz = Uz[Oz + tz], sz > 0 && (ez(bz, Pz + 16 * Math.floor(vz[Oz + tz]), Bz), Bz.scaleAndAddToRef(sz, Hz));
        rz(zz[Xz], zz[Xz + 1], zz[Xz + 2], Hz, gz), gz.toArray(zz, Xz)
      }
      return !0
    }
    class Gz {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Xz.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Tz {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Gz, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Nz, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let cz = (() => {
        var zz;
        let tz, Nz = vz.f,
          bz = [];
        return zz = class extends Nz {
          static get BILLBOARDMODE_NONE() {
            return vz.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return vz.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return vz.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return vz.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return vz.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return vz.f.BILLBOARDMODE_USE_POSITION
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
          set cN(zz) {
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
            const tz = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = zz, (1 === tz && 1 !== zz || 1 !== tz && 1 === zz) && this._markSubMeshesAsDirty((zz => {
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
            this._internalAbstractMeshDataInfo._material !== zz && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = zz, zz && zz.meshMap && (zz.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.kY && (this.resetDrawCache(void 0, null == zz), this._unBindEffect()))
          }
          getMaterialForRenderPass(zz) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[zz]
          }
          setMaterialForRenderPass(zz, tz) {
            this.resetDrawCache(zz), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const sz = this._internalAbstractMeshDataInfo._materialForRenderPass[zz];
            sz?.meshMap?.[this.uniqueId] && (sz.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[zz] = tz, tz && tz.meshMap && (tz.meshMap[this.uniqueId] = this)
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
            const tz = this._internalAbstractMeshDataInfo._skeleton;
            tz && tz.needInitialSkinMatrix && tz._unregisterMeshWithPoseMatrix(this), zz && zz.needInitialSkinMatrix && zz._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = zz, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(tz) {
            var sz;
            let Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(tz, Fz, !1), sz = this, this._internalAbstractMeshDataInfo = new Tz, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = zz.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Wz.c, this.onCollisionPositionChangeObservable = new Wz.c, this.onMaterialChangedObservable = new Wz.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Ng = zz.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Pz.c.Red(), this.outlineWidth = .02, this.overlayColor = Pz.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.WD = !1, this.oD = !1, this.actionManager = null, this.ellipsoid = new Xz.p(.5, 1, .5), this.ellipsoidOffset = new Xz.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Pz.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                HI: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Wz.c, this._onCollisionPositionChange = function(zz, tz) {
                let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                tz.subtractToRef(sz._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, sz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), sz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Jz.b.CollisionsEpsilon && sz.position.addInPlace(sz._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Fz && sz.onCollideObservable.notifyObservers(Fz), sz.onCollisionPositionChangeObservable.notifyObservers(sz.position)
              }, Fz = this.aJ(), this.layerMask = Fz.defaultRenderableLayerMask, Fz.ksz(this), this._resyncLightSources(), this._uniformBuffer = new uz.c(this.aJ().FD(), void 0, void 0, tz, !this.aJ().FD().isWebGPU), this._buildUniformLayout(), Fz.performancePriority) {
              case 2:
                this.oD = !0;
              case 1:
                this.WD = !0, this.Ng = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(zz) {
            const tz = this._uniformBuffer;
            tz.y5("world", zz), tz.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), tz.update()
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
            let tz = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            tz += ", # of submeshes: " + (this.kY ? this.kY.length : 0);
            const sz = this._internalAbstractMeshDataInfo._skeleton;
            return sz && (tz += ", skeleton: " + sz.name), zz && (tz += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], tz += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.HI ? "YES" : "NO")), tz
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== vz.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(zz) {
            let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (tz || this.actionManager.isRecursive)) {
              if (!zz) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(zz)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(zz, !1) : null
          }
          _releaseRenderPassId(zz) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.kY) {
              for (const zz of this.kY) zz._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const zz of this.aJ().lights) zz.isEnabled() && zz.canAffectMesh(this) && this._lightSources.push(zz);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(zz) {
            const tz = zz.isEnabled() && zz.canAffectMesh(this),
              sz = this._lightSources.indexOf(zz);
            let Fz = !1;
            if (-1 === sz) {
              if (!tz) return;
              this._lightSources.push(zz)
            } else {
              if (tz) return;
              Fz = !0, this._lightSources.splice(sz, 1)
            }
            this._markSubMeshesAsLightDirty(Fz)
          }
          _unBindEffect() {
            for (const zz of this.kY) zz.setEffect(null)
          }
          _removeLightSource(zz, tz) {
            const sz = this._lightSources.indexOf(zz); - 1 !== sz && (this._lightSources.splice(sz, 1), this._markSubMeshesAsLightDirty(tz))
          }
          _markSubMeshesAsDirty(zz) {
            if (this.kY)
              for (const tz of this.kY)
                for (let sz = 0; sz < tz._drawWrappers.length; ++sz) {
                  const Fz = tz._drawWrappers[sz];
                  Fz && Fz.defines && Fz.defines.markAllAsDirty && zz(Fz.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((tz => tz.markAsLightDirty(zz)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((zz => zz.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((zz => zz.markAsMiscDirty()))
          }
          wtz(zz) {
            return this._currentRenderId = Number.MAX_VALUE, super.wtz(zz), this._isDirty = !0, this
          }
          resetDrawCache(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.kY)
              for (const sz of this.kY) sz.resetDrawCache(zz, tz)
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
          Qsz() {
            return null
          }
          getVerticesData(zz) {
            return null
          }
          setVerticesData(zz, tz, sz, Fz) {
            return this
          }
          updateVerticesData(zz, tz, sz, Fz) {
            return this
          }
          setIndices(zz, tz) {
            return this
          }
          isVerticesDataPresent(zz) {
            return !1
          }
          rC() {
            return this._masterMesh ? this._masterMesh.rC() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.rC()
          }
          setBoundingInfo(zz) {
            return this._boundingInfo = zz, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(zz, tz, sz) {
            return this._boundingInfo = new Kz.d(zz, tz, sz), this._boundingInfo
          }
          normalizeToUnitCube() {
            let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(zz, tz, sz)
          }
          get useBones() {
            return this.skeleton && this.aJ().skeletonsEnabled && this.isVerticesDataPresent(Oz.m.MatricesIndicesKind) && this.isVerticesDataPresent(Oz.m.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(zz) {}
          _activate(zz, tz) {
            return this._renderId = zz, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === vz.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get VJ() {
            return !1
          }
          get jFz() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(zz, tz, sz) {
            return this.position.addInPlace(this.calcMovePOV(zz, tz, sz)), this
          }
          calcMovePOV(zz, tz, sz) {
            const Fz = new Xz.e;
            (this.rotationQuaternion ? this.rotationQuaternion : Xz.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Fz);
            const Wz = Xz.p.Zero(),
              Oz = this.definedFacingForward ? -1 : 1;
            return Xz.p.TransformCoordinatesFromFloatsToRef(zz * Oz, tz, sz * Oz, Fz, Wz), Wz
          }
          rotatePOV(zz, tz, sz) {
            return this.rotation.addInPlace(this.calcRotatePOV(zz, tz, sz)), this
          }
          calcRotatePOV(zz, tz, sz) {
            const Fz = this.definedFacingForward ? 1 : -1;
            return new Xz.p(zz * Fz, tz, sz * Fz)
          }
          _refreshBoundingInfo(zz, tz) {
            if (zz) {
              const sz = (0, Bz.f)(zz, 0, this.getTotalVertices(), tz);
              this._boundingInfo ? this._boundingInfo.reConstruct(sz.minimum, sz.maximum) : this._boundingInfo = new Kz.d(sz.minimum, sz.maximum)
            }
            if (this.kY)
              for (let sz = 0; sz < this.kY.length; sz++) this.kY[sz].refreshBoundingInfo(zz);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(zz) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(zz.minimum, zz.maximum) : this._boundingInfo = new Kz.d(zz.minimum, zz.maximum), this.kY)
              for (let tz = 0; tz < this.kY.length; tz++) this.kY[tz].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(zz, tz, sz, Fz, Wz, oz, vz) {
            ! function(zz, tz, sz, Fz, Wz, oz, vz) {
              const Uz = Xz.m.XD[0],
                Kz = Xz.m.Matrix[0],
                uz = Xz.m.Matrix[1],
                Nz = tz === Oz.m.NormalKind ? Xz.p.TransformNormalFromFloatsToRef : Xz.p.TransformCoordinatesFromFloatsToRef;
              for (let Oz = 0, bz = 0; Oz < zz.length; Oz += 3, bz += 4) {
                let tz, wz;
                for (Kz.reset(), tz = 0; tz < 4; tz++) wz = Wz[bz + tz], wz > 0 && (Xz.e.FromFloat32ArrayToRefScaled(sz, Math.floor(16 * Fz[bz + tz]), wz, uz), Kz.addToSelf(uz));
                if (oz && vz)
                  for (tz = 0; tz < 4; tz++) wz = vz[bz + tz], wz > 0 && (Xz.e.FromFloat32ArrayToRefScaled(sz, Math.floor(16 * oz[bz + tz]), wz, uz), Kz.addToSelf(uz));
                Nz(zz[Oz], zz[Oz + 1], zz[Oz + 2], Kz, Uz), Uz.toArray(zz, Oz)
              }
            }(zz, tz, sz, Fz, Wz, oz, vz)
          }
          _getData(tz, sz) {
            let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oz.m.PositionKind;
            const Wz = tz.cache,
              oz = zz => {
                if (Wz) {
                  const tz = Wz._vertexData || (Wz._vertexData = {});
                  return tz[zz] || this.copyVerticesData(zz, tz), tz[zz]
                }
                return this.getVerticesData(zz)
              };
            if (sz || (sz = oz(Fz)), !sz) return null;
            Wz ? (Wz._outputData ? Wz._outputData.set(sz) : Wz._outputData = new Float32Array(sz), sz = Wz._outputData) : (tz.applyMorph && this.morphTargetManager || tz.applySkeleton && this.skeleton || tz.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (sz = sz.slice()), tz.applyMorph && this.morphTargetManager && function(zz, tz, sz) {
              let Fz;
              switch (tz) {
                case Oz.m.PositionKind:
                  Fz = zz => zz.getPositions();
                  break;
                case Oz.m.NormalKind:
                  Fz = zz => zz.getNormals();
                  break;
                case Oz.m.TangentKind:
                  Fz = zz => zz.getTangents();
                  break;
                case Oz.m.UVKind:
                  Fz = zz => zz.getUVs();
                  break;
                case Oz.m.UV2Kind:
                  Fz = zz => zz.getUV2s();
                  break;
                case Oz.m.ColorKind:
                  Fz = zz => zz.getColors();
                  break;
                default:
                  return
              }
              for (let Wz = 0; Wz < zz.length; Wz++) {
                let tz = zz[Wz];
                for (let Xz = 0; Xz < sz.numTargets; Xz++) {
                  const Oz = sz.getTarget(Xz),
                    oz = Oz.influence;
                  if (0 !== oz) {
                    const sz = Fz(Oz);
                    sz && (tz += (sz[Wz] - zz[Wz]) * oz)
                  }
                }
                zz[Wz] = tz
              }
            }(sz, Fz, this.morphTargetManager);
            const vz = this.bakedVertexAnimationManager;
            let Uz = !1;
            if (tz.applyBakedVertexAnimation && vz?.isEnabled) {
              const zz = oz(Oz.m.MatricesIndicesKind),
                Wz = oz(Oz.m.MatricesWeightsKind);
              if (Wz && zz) {
                const Xz = this.numBoneInfluencers > 4,
                  Kz = Xz ? oz(Oz.m.MatricesIndicesExtraKind) : null,
                  uz = Xz ? oz(Oz.m.MatricesWeightsExtraKind) : null;
                Uz = Zz(sz, Fz, vz, tz.bakedVertexAnimationSettings ?? vz.animationParameters, zz, Wz, Kz, uz, this.numBoneInfluencers)
              }
            }
            if (!Uz && tz.applySkeleton && this.skeleton) {
              const tz = oz(Oz.m.MatricesIndicesKind),
                Wz = oz(Oz.m.MatricesWeightsKind);
              if (Wz && tz) {
                const Xz = this.numBoneInfluencers > 4,
                  vz = Xz ? oz(Oz.m.MatricesIndicesExtraKind) : null,
                  Uz = Xz ? oz(Oz.m.MatricesWeightsExtraKind) : null,
                  Kz = this.skeleton.getTransformMatrices(this);
                zz._ApplySkeleton(sz, Fz, Kz, tz, Wz, vz, Uz)
              }
            }
            if (!1 !== tz.updatePositionsArray && Fz === Oz.m.PositionKind) {
              const zz = this._internalAbstractMeshDataInfo._positions || [],
                tz = zz.length;
              if (zz.length = sz.length / 3, tz < zz.length)
                for (let sz = tz; sz < zz.length; sz++) zz[sz] = new Xz.p;
              for (let Fz = 0, Wz = 0; Fz < zz.length; Fz++, Wz += 3) zz[Fz].m_(sz[Wz], sz[Wz + 1], sz[Wz + 2]);
              this._internalAbstractMeshDataInfo._positions = zz
            }
            return sz
          }
          getNormalsData() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: zz,
              applyMorph: tz,
              updatePositionsArray: !1
            }, null, Oz.m.NormalKind)
          }
          qL() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: zz,
              applyMorph: tz,
              updatePositionsArray: !1
            }, sz, Oz.m.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Kz.d(Xz.p.Zero(), Xz.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(zz) {
            if (!this.kY) return this;
            const tz = this.kY.length;
            for (let sz = 0; sz < tz; sz++) {
              const Fz = this.kY[sz];
              (tz > 1 || !Fz.IsGlobal) && Fz.updateBoundingInfo(zz)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.oD || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(zz) {
            return this.rC().isInFrustum(zz, this.cullingStrategy)
          }
          isCompletelyInFrustum(zz) {
            return this.rC().isCompletelyInFrustum(zz)
          }
          CFz(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = arguments.length > 2 ? arguments[2] : void 0;
            const Fz = this.rC(),
              Wz = zz.rC();
            if (Fz.intersects(Wz, tz)) return !0;
            if (sz)
              for (const Xz of this.getChildMeshes())
                if (Xz.CFz(zz, tz, !0)) return !0;
            return !1
          }
          intersectsPoint(zz) {
            return this.rC().intersectsPoint(zz)
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
            let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const sz = this.aJ().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = sz.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, sz.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, zz, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, tz), this
          }
          _collideForSubMesh(zz, tz, sz) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!zz._lastColliderWorldVertices || !zz._lastColliderTransformMatrix.equals(tz)) {
              zz._lastColliderTransformMatrix = tz.clone(), zz._lastColliderWorldVertices = [], zz._trianglePlanes = [];
              const sz = zz.verticesStart,
                Fz = zz.verticesStart + zz.verticesCount;
              for (let Wz = sz; Wz < Fz; Wz++) zz._lastColliderWorldVertices.push(Xz.p.TransformCoordinates(this._positions[Wz], tz))
            }
            return sz._collide(zz._trianglePlanes, zz._lastColliderWorldVertices, this.Qsz(), zz.indexStart, zz.indexStart + zz.indexCount, zz.verticesStart, !!zz.vD(), this, this._shouldConvertRHS(), 7 === zz.vD()?.fillMode), this
          }
          _processCollisionsForSubMeshes(zz, tz) {
            const sz = this._scene.getCollidingSubMeshCandidates(this, zz),
              Fz = sz.length;
            for (let Wz = 0; Wz < Fz; Wz++) {
              const Xz = sz.data[Wz];
              Fz > 1 && !Xz._checkCollision(zz) || this._collideForSubMesh(Xz, tz, zz)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(zz) {
            if (!this.rC()._checkCollision(zz)) return this;
            const tz = Xz.m.Matrix[0],
              sz = Xz.m.Matrix[1];
            return Xz.e.ScalingToRef(1 / zz._radius.x, 1 / zz._radius.y, 1 / zz._radius.z, tz), this.worldMatrixFromCache.multiplyToRef(tz, sz), this._processCollisionsForSubMeshes(zz, sz), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(zz, tz, sz) {
            let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Wz = arguments.length > 4 ? arguments[4] : void 0,
              Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const oz = new Uz.e,
              vz = this.getClassName(),
              Kz = "InstancedLinesMesh" === vz || "LinesMesh" === vz || "GreasedLineMesh" === vz ? this.intersectionThreshold : 0,
              uz = this.rC();
            if (!this.kY) return oz;
            if (!Oz && (!zz.intersectsSphere(uz.uFz, Kz) || !zz.intersectsBox(uz.boundingBox, Kz))) return oz;
            if (Fz) return oz.hit = !Oz, oz.pickedMesh = Oz ? null : this, oz.distance = Oz ? 0 : Xz.p.Distance(zz.origin, uz.uFz.center), oz.subMeshId = 0, oz;
            if (!this._generatePointsArray()) return oz;
            let Nz = null;
            const bz = this._scene.getIntersectingSubMeshCandidates(this, zz),
              wz = bz.length;
            let Dz = !1;
            for (let Xz = 0; Xz < wz; Xz++) {
              const zz = bz.data[Xz].vD();
              if (zz && (7 == zz.fillMode || 0 == zz.fillMode || 1 == zz.fillMode || 2 == zz.fillMode || 4 == zz.fillMode)) {
                Dz = !0;
                break
              }
            }
            if (!Dz) return oz.hit = !0, oz.pickedMesh = this, oz.distance = Xz.p.Distance(zz.origin, uz.uFz.center), oz.subMeshId = -1, oz;
            for (let Xz = 0; Xz < wz; Xz++) {
              const Fz = bz.data[Xz];
              if (wz > 1 && !Oz && !Fz.canIntersects(zz)) continue;
              const Wz = Fz.intersects(zz, this._positions, this.Qsz(), tz, sz);
              if (Wz && (tz || !Nz || Wz.distance < Nz.distance) && (Nz = Wz, Nz.subMeshId = Fz._id, Nz._internalSubMeshId = Xz, tz)) break
            }
            if (Nz) {
              const tz = Wz ?? this.getWorldMatrix(),
                sz = Xz.m.XD[0],
                Fz = Xz.m.XD[1];
              Xz.p.TransformCoordinatesToRef(zz.origin, tz, sz), zz.direction.scaleToRef(Nz.distance, Fz);
              const Oz = Xz.p.TransformNormal(Fz, tz).addInPlace(sz);
              return oz.hit = !0, oz.distance = Xz.p.Distance(sz, Oz), oz.pickedPoint = Oz, oz.pickedMesh = this, oz.bu = Nz.bu || 0, oz.bv = Nz.bv || 0, oz.subMeshFaceId = Nz.faceId, oz.faceId = Nz.faceId + bz.data[Nz._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), oz.subMeshId = Nz.subMeshId, oz
            }
            return oz
          }
          clone(zz, tz, sz) {
            return null
          }
          releaseSubMeshes() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.kY)
              for (; this.kY.length;) this.kY[0].dispose(zz);
            else this.kY = [];
            return this
          }
          dispose(zz) {
            let tz, sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Fz = this.aJ();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Fz.freeActiveMeshes(), Fz.freeRenderingGroups(), Fz.renderingManager.maintainStateBetweenFrames && Fz.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((zz => zz !== this && zz.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), tz = 0; tz < this._intersectionsInProgress.length; tz++) {
              const zz = this._intersectionsInProgress[tz],
                sz = zz._intersectionsInProgress.indexOf(this);
              zz._intersectionsInProgress.splice(sz, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Wz = Fz.lights;
            for (const Oz of Wz) {
              let zz = Oz.includedOnlyMeshes.indexOf(this); - 1 !== zz && Oz.includedOnlyMeshes.splice(zz, 1), zz = Oz.excludedMeshes.indexOf(this), -1 !== zz && Oz.excludedMeshes.splice(zz, 1);
              const tz = Oz.getShadowGenerators();
              if (tz) {
                const sz = tz.values();
                for (let tz = sz.next(); !0 !== tz.done; tz = sz.next()) {
                  const sz = tz.value.getShadowMap();
                  sz && sz.renderList && (zz = sz.renderList.indexOf(this), -1 !== zz && sz.renderList.splice(zz, 1))
                }
              }
            }
            this.releaseSubMeshes(Fz._isDisposing);
            const Xz = Fz.FD();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Xz.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Xz.wipeCaches(), Fz.mI(this), this._parentContainer) {
              const zz = this._parentContainer.meshes.indexOf(this);
              zz > -1 && this._parentContainer.meshes.splice(zz, 1), this._parentContainer = null
            }
            if (sz && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !zz)
              for (tz = 0; tz < Fz.lY.length; tz++) Fz.lY[tz].emitter === this && (Fz.lY[tz].dispose(), tz--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(zz, sz)
          }
          _initFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            zz.facetNormals || (zz.facetNormals = []), zz.facetPositions || (zz.facetPositions = []), zz.facetPartitioning || (zz.facetPartitioning = new Array), zz.facetNb = this.Qsz().length / 3 | 0, zz.partitioningSubdivisions = zz.partitioningSubdivisions ? zz.partitioningSubdivisions : 10, zz.partitioningBBoxRatio = zz.partitioningBBoxRatio ? zz.partitioningBBoxRatio : 1.01;
            for (let tz = 0; tz < zz.facetNb; tz++) zz.facetNormals[tz] = Xz.p.Zero(), zz.facetPositions[tz] = Xz.p.Zero();
            return zz.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            zz.facetDataEnabled || this._initFacetData();
            const tz = this.getVerticesData(Oz.m.PositionKind),
              sz = this.Qsz(),
              Fz = this.getVerticesData(Oz.m.NormalKind)?.slice(),
              Wz = this.rC();
            if (zz.facetDepthSort && !zz.facetDepthSortEnabled) {
              if (zz.facetDepthSortEnabled = !0, sz instanceof Uint16Array) zz.depthSortedIndices = new Uint16Array(sz);
              else if (sz instanceof Uint32Array) zz.depthSortedIndices = new Uint32Array(sz);
              else {
                let tz = !1;
                for (let zz = 0; zz < sz.length; zz++)
                  if (sz[zz] > 65535) {
                    tz = !0;
                    break
                  } zz.depthSortedIndices = tz ? new Uint32Array(sz) : new Uint16Array(sz)
              }
              if (zz.facetDepthSortFunction = function(zz, tz) {
                  return tz.sqDistance - zz.sqDistance
                }, !zz.facetDepthSortFrom) {
                const tz = this.aJ().activeCamera;
                zz.facetDepthSortFrom = tz ? tz.position : Xz.p.Zero()
              }
              zz.depthSortedFacets = [];
              for (let tz = 0; tz < zz.facetNb; tz++) {
                const sz = {
                  ind: 3 * tz,
                  sqDistance: 0
                };
                zz.depthSortedFacets.push(sz)
              }
              zz.invertedMatrix = Xz.e.Identity(), zz.facetDepthSortOrigin = Xz.p.Zero()
            }
            zz.bbSize.x = Wz.maximum.x - Wz.minimum.x > rz.c ? Wz.maximum.x - Wz.minimum.x : rz.c, zz.bbSize.y = Wz.maximum.y - Wz.minimum.y > rz.c ? Wz.maximum.y - Wz.minimum.y : rz.c, zz.bbSize.z = Wz.maximum.z - Wz.minimum.z > rz.c ? Wz.maximum.z - Wz.minimum.z : rz.c;
            let vz = zz.bbSize.x > zz.bbSize.y ? zz.bbSize.x : zz.bbSize.y;
            if (vz = vz > zz.bbSize.z ? vz : zz.bbSize.z, zz.subDiv.max = zz.partitioningSubdivisions, zz.subDiv.X = Math.floor(zz.subDiv.max * zz.bbSize.x / vz), zz.subDiv.Y = Math.floor(zz.subDiv.max * zz.bbSize.y / vz), zz.subDiv.Z = Math.floor(zz.subDiv.max * zz.bbSize.z / vz), zz.subDiv.X = zz.subDiv.X < 1 ? 1 : zz.subDiv.X, zz.subDiv.Y = zz.subDiv.Y < 1 ? 1 : zz.subDiv.Y, zz.subDiv.Z = zz.subDiv.Z < 1 ? 1 : zz.subDiv.Z, zz.facetParameters.facetNormals = this.getFacetLocalNormals(), zz.facetParameters.facetPositions = this.getFacetLocalPositions(), zz.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), zz.facetParameters.bInfo = Wz, zz.facetParameters.bbSize = zz.bbSize, zz.facetParameters.subDiv = zz.subDiv, zz.facetParameters.ratio = this.partitioningBBoxRatio, zz.facetParameters.depthSort = zz.facetDepthSort, zz.facetDepthSort && zz.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(zz.invertedMatrix), Xz.p.TransformCoordinatesToRef(zz.facetDepthSortFrom, zz.invertedMatrix, zz.facetDepthSortOrigin), zz.facetParameters.distanceTo = zz.facetDepthSortOrigin), zz.facetParameters.depthSortedFacets = zz.depthSortedFacets, Fz && oz.b.ComputeNormals(tz, sz, Fz, zz.facetParameters), zz.facetDepthSort && zz.facetDepthSortEnabled) {
              zz.depthSortedFacets.sort(zz.facetDepthSortFunction);
              const tz = zz.depthSortedIndices.length / 3 | 0;
              for (let Fz = 0; Fz < tz; Fz++) {
                const tz = zz.depthSortedFacets[Fz].ind;
                zz.depthSortedIndices[3 * Fz] = sz[tz], zz.depthSortedIndices[3 * Fz + 1] = sz[tz + 1], zz.depthSortedIndices[3 * Fz + 2] = sz[tz + 2]
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
            const tz = Xz.p.Zero();
            return this.getFacetPositionToRef(zz, tz), tz
          }
          getFacetPositionToRef(zz, tz) {
            const sz = this.getFacetLocalPositions()[zz],
              Fz = this.getWorldMatrix();
            return Xz.p.TransformCoordinatesToRef(sz, Fz, tz), this
          }
          getFacetNormal(zz) {
            const tz = Xz.p.Zero();
            return this.getFacetNormalToRef(zz, tz), tz
          }
          getFacetNormalToRef(zz, tz) {
            const sz = this.getFacetLocalNormals()[zz];
            return Xz.p.TransformNormalToRef(sz, this.getWorldMatrix(), tz), this
          }
          getFacetsAtLocalCoordinates(zz, tz, sz) {
            const Fz = this.rC(),
              Wz = this._internalAbstractMeshDataInfo._facetData,
              Xz = Math.floor((zz - Fz.minimum.x * Wz.partitioningBBoxRatio) * Wz.subDiv.X * Wz.partitioningBBoxRatio / Wz.bbSize.x),
              Oz = Math.floor((tz - Fz.minimum.y * Wz.partitioningBBoxRatio) * Wz.subDiv.Y * Wz.partitioningBBoxRatio / Wz.bbSize.y),
              oz = Math.floor((sz - Fz.minimum.z * Wz.partitioningBBoxRatio) * Wz.subDiv.Z * Wz.partitioningBBoxRatio / Wz.bbSize.z);
            return Xz < 0 || Xz > Wz.subDiv.max || Oz < 0 || Oz > Wz.subDiv.max || oz < 0 || oz > Wz.subDiv.max ? null : Wz.facetPartitioning[Xz + Wz.subDiv.max * Oz + Wz.subDiv.max * Wz.subDiv.max * oz]
          }
          getClosestFacetAtCoordinates(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const oz = this.getWorldMatrix(),
              vz = Xz.m.Matrix[5];
            oz.invertToRef(vz);
            const Uz = Xz.m.XD[8];
            Xz.p.TransformCoordinatesFromFloatsToRef(zz, tz, sz, vz, Uz);
            const Kz = this.getClosestFacetAtLocalCoordinates(Uz.x, Uz.y, Uz.z, Fz, Wz, Oz);
            return Fz && Xz.p.TransformCoordinatesFromFloatsToRef(Fz.x, Fz.y, Fz.z, oz, Fz), Kz
          }
          getClosestFacetAtLocalCoordinates(zz, tz, sz, Fz) {
            let Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              bz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              wz = null;
            const Dz = this.getFacetLocalPositions(),
              gz = this.getFacetLocalNormals(),
              Hz = this.getFacetsAtLocalCoordinates(zz, tz, sz);
            if (!Hz) return null;
            let Bz, Pz, rz, Yz, xz = Number.MAX_VALUE;
            for (let mz = 0; mz < Hz.length; mz++) Pz = Hz[mz], rz = gz[Pz], Yz = Dz[Pz], oz = (zz - Yz.x) * rz.x + (tz - Yz.y) * rz.y + (sz - Yz.z) * rz.z, (!Nz || Nz && bz && oz >= 0 || Nz && !bz && oz <= 0) && (oz = rz.x * Yz.x + rz.y * Yz.y + rz.z * Yz.z, vz = -(rz.x * zz + rz.y * tz + rz.z * sz - oz) / (rz.x * rz.x + rz.y * rz.y + rz.z * rz.z), Uz = zz + rz.x * vz, Kz = tz + rz.y * vz, uz = sz + rz.z * vz, Wz = Uz - zz, Xz = Kz - tz, Oz = uz - sz, Bz = Wz * Wz + Xz * Xz + Oz * Oz, Bz < xz && (xz = Bz, wz = Pz, Fz && (Fz.x = Uz, Fz.y = Kz, Fz.z = uz)));
            return wz
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const zz = this._internalAbstractMeshDataInfo._facetData;
            return zz.facetDataEnabled && (zz.facetDataEnabled = !1, zz.facetPositions = [], zz.facetNormals = [], zz.facetPartitioning = new Array, zz.facetParameters = {}, zz.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(zz, tz) {
            return this
          }
          createNormals(zz) {
            const tz = this.getVerticesData(Oz.m.PositionKind),
              sz = this.Qsz();
            let Fz;
            return Fz = this.isVerticesDataPresent(Oz.m.NormalKind) ? this.getVerticesData(Oz.m.NormalKind) : [], oz.b.ComputeNormals(tz, sz, Fz, {
              useRightHandedSystem: this.aJ().useRightHandedSystem
            }), this.setVerticesData(Oz.m.NormalKind, Fz, zz), this
          }
          async optimizeIndicesAsync() {
            const zz = this.Qsz();
            if (!zz) return this;
            const {
              OptimizeIndices: tz
            } = await sz.e(341).then((() => sz(41616)));
            return tz(zz), this.setIndices(zz, this.getTotalVertices()), this
          }
          alignWithNormal(zz, tz) {
            tz || (tz = Yz.b.Y);
            const sz = Xz.m.XD[0],
              Fz = Xz.m.XD[1];
            return Xz.p.CrossToRef(tz, zz, Fz), Xz.p.CrossToRef(zz, Fz, sz), this.rotationQuaternion ? Xz.h.RotationQuaternionFromAxisToRef(sz, zz, Fz, this.rotationQuaternion) : Xz.p.RotationFromAxisToRef(sz, zz, Fz, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, gz.i)("EdgesRenderer")
          }
          enableEdgesRendering(zz, tz, sz) {
            throw (0, gz.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.lY.filter((zz => zz.emitter === this))
          }
        }, (() => {
          const sz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nz[Symbol.metadata] ?? null) : void 0;
          tz = [mz.m.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Fz.h)(zz, null, tz, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: zz => "_ApplySkeleton" in zz,
              get: zz => zz._ApplySkeleton
            },
            metadata: sz
          }, null, bz), sz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sz
          })
        })(), zz.OCCLUSION_TYPE_NONE = ((0, Fz.k)(zz, bz), 0), zz.OCCLUSION_TYPE_OPTIMISTIC = 1, zz.OCCLUSION_TYPE_STRICT = 2, zz.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, zz.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, zz.CULLINGSTRATEGY_STANDARD = 0, zz.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, zz.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, zz.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, zz.DefaultIsPickable = !0, zz
      })(),
      jz = !1;

    function Az() {
      jz || (jz = !0, (0, Iz.g)("BABYLON.AbstractMesh", cz))
    }(bz = cz.prototype).createOrUpdateSubmeshesOctree ?? (bz.createOrUpdateSubmeshesOctree = (0, gz.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (wz = cz.prototype).getPhysicsImpostor ?? (wz.getPhysicsImpostor = (0, gz.g)("AbstractMesh", "getPhysicsImpostor")), (Dz = cz.prototype).setPhysicsLinkWith ?? (Dz.setPhysicsLinkWith = (0, gz.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(cz.prototype, "occlusionRetryCount") || Object.defineProperty(cz.prototype, "occlusionRetryCount", (0, gz.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(cz.prototype, "occlusionType") || Object.defineProperty(cz.prototype, "occlusionType", (0, gz.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(cz.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(cz.prototype, "occlusionQueryAlgorithmType", (0, gz.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(cz.prototype, "isOccluded") || Object.defineProperty(cz.prototype, "isOccluded", (0, gz.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(cz.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(cz.prototype, "isOcclusionQueryInProgress", (0, gz.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(cz.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(cz.prototype, "forceRenderingWhenOccluded", (0, gz.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(cz.prototype, "occlusionForRenderPassId") || Object.defineProperty(cz.prototype, "occlusionForRenderPassId", (0, gz.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(cz.prototype, "decalMap") || Object.defineProperty(cz.prototype, "decalMap", (0, gz.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(cz.prototype, "uC") || Object.defineProperty(cz.prototype, "uC", (0, gz.f)("AbstractMesh", "uC")), Object.getOwnPropertyDescriptor(cz.prototype, "physicsImpostor") || Object.defineProperty(cz.prototype, "physicsImpostor", (0, gz.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(cz.prototype, "showBoundingBox") || Object.defineProperty(cz.prototype, "showBoundingBox", (0, gz.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(cz.prototype, "edgesRenderer") || Object.defineProperty(cz.prototype, "edgesRenderer", (0, gz.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(cz.prototype, "renderOutline") || Object.defineProperty(cz.prototype, "renderOutline", (0, gz.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(cz.prototype, "renderOverlay") || Object.defineProperty(cz.prototype, "renderOverlay", (0, gz.f)("AbstractMesh", "renderOverlay"))
  },
  39566: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Hz
    });
    var Fz = sz(36475),
      Wz = sz(36654),
      Xz = sz(39562),
      Oz = sz(39293),
      oz = sz(39458),
      vz = sz(39573),
      Uz = sz(39472),
      Kz = sz(39264),
      uz = sz(38097),
      Nz = sz(39185),
      bz = sz(39479),
      wz = sz(36502),
      Dz = sz(39576),
      gz = sz(39231);
    class Hz {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(zz) {
        this._boundingBias ? this._boundingBias.vsz(zz) : this._boundingBias = zz.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(zz) {
        const tz = new Hz(Hz.RandomId(), zz.aJ());
        return tz.applyToMesh(zz), tz
      }
      get meshes() {
        return this._meshes
      }
      constructor(zz, tz, sz) {
        let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Fz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Fz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = tz || wz.c.LastCreatedScene, this._scene && (this.id = zz, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.FD(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Wz, null !== Oz && (this._totalVertices = Oz), sz ? this.setAllVerticesData(sz, Wz) : null === Oz && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Xz && (this.applyToMesh(Xz), Xz.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      aJ() {
        return this._scene
      }
      FD() {
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
        for (const tz in this._vertexBuffers) zz.add(this._vertexBuffers[tz].getWrapperBuffer());
        zz.forEach((zz => {
          zz._rebuild()
        }))
      }
      setAllVerticesData(zz, tz) {
        zz.applyToGeometry(this, tz), this._notifyUpdate()
      }
      setVerticesData(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        sz && Array.isArray(tz) && (tz = new Float32Array(tz));
        const Wz = new Oz.m(this._engine, tz, zz, {
          updatable: sz,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Fz,
          label: "Geometry_" + this.id + "_" + zz
        });
        this.setVerticesBuffer(Wz)
      }
      removeVerticesData(zz) {
        this._vertexBuffers[zz] && (this._vertexBuffers[zz].dispose(), delete this._vertexBuffers[zz]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Wz = zz.getKind();
        this._vertexBuffers[Wz] && sz && this._vertexBuffers[Wz].dispose(), zz._buffer && zz._ownsBuffer && zz._buffer._increaseReferences(), this._vertexBuffers[Wz] = zz;
        const Xz = this._meshes,
          oz = Xz.length;
        if (Wz === Oz.m.PositionKind) {
          this._totalVertices = tz ?? zz._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : zz.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const sz = this._extend && this._extend.minimum || new Fz.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Wz = this._extend && this._extend.maximum || new Fz.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let zz = 0; zz < oz; zz++) {
            const tz = Xz[zz];
            tz.buildBoundingInfo(sz, Wz), tz._createGlobalSubMesh(tz.isUnIndexed), tz.computeWorldMatrix(!0), tz.synchronizeInstances()
          }
        }
        this._notifyUpdate(Wz)
      }
      updateVerticesDataDirectly(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wz = this.getVertexBuffer(zz);
        Wz && (Wz.updateDirectly(tz, sz, Fz), this._notifyUpdate(zz))
      }
      updateVerticesData(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this.getVertexBuffer(zz);
        Fz && (Fz.update(tz), zz === Oz.m.PositionKind && this._updateBoundingInfo(sz, tz), this._notifyUpdate(zz))
      }
      _updateBoundingInfo(zz, tz) {
        if (zz && this._updateExtend(tz), this._resetPointsArrayCache(), zz) {
          const zz = this._meshes;
          for (const tz of zz) {
            tz.hasBoundingInfo ? tz.rC().reConstruct(this._extend.minimum, this._extend.maximum) : tz.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const zz = tz.kY;
            for (const tz of zz) tz.refreshBoundingInfo()
          }
        }
      }
      _bind(zz, tz, sz, Fz) {
        if (!zz) return;
        void 0 === tz && (tz = this._indexBuffer);
        const Wz = this.getVertexBuffers();
        if (!Wz) return;
        if (tz != this._indexBuffer || !this._vertexArrayObjects && !Fz) return void this._engine.bindBuffers(Wz, tz, zz, sz);
        const Xz = Fz || this._vertexArrayObjects,
          Oz = this._engine;
        Xz[zz.key] || (Xz[zz.key] = Oz.recordVertexArrayObject(Wz, tz, zz, sz)), Oz.bindVertexArrayObject(Xz[zz.key], tz)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(zz, tz, sz) {
        const Fz = this.getVertexBuffer(zz);
        return Fz ? Fz.getFloatData(this._totalVertices, sz || tz && 1 !== this._meshes.length) : null
      }
      copyVerticesData(zz, tz) {
        const sz = this.getVertexBuffer(zz);
        if (!sz) return;
        tz[zz] || (tz[zz] = new Float32Array(this._totalVertices * sz.getSize()));
        const Fz = sz.getData();
        Fz && (0, gz.i)(Fz, sz.getSize(), sz.type, sz.byteOffset, sz.byteStride, sz.normalized, this._totalVertices, tz[zz])
      }
      isVertexBufferUpdatable(zz) {
        const tz = this._vertexBuffers[zz];
        return !!tz && tz.isUpdatable()
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
        let tz;
        if (!this._vertexBuffers && this._delayInfo)
          for (tz in this._delayInfo) zz.push(tz);
        else
          for (tz in this._vertexBuffers) zz.push(tz);
        return zz
      }
      updateIndices(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Fz = zz.length !== this._indices.length;
            if (sz || (this._indices = zz.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, zz, tz), Fz)
              for (const zz of this._meshes) zz._createGlobalSubMesh(!0)
          } else this.setIndices(zz, null, !0)
      }
      setIndexBuffer(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = zz, this._totalVertices = tz, this._totalIndices = sz, zz.is32Bits = null === Fz ? tz > 65535 : Fz;
        for (const Wz of this._meshes) Wz._createGlobalSubMesh(!0), Wz.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = zz, this._indexBufferIsUpdatable = sz, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, sz, "Geometry_" + this.id + "_IndexBuffer")), void 0 != tz && (this._totalVertices = tz);
        for (const Wz of this._meshes) Wz._createGlobalSubMesh(!Fz), Wz.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Qsz(zz, tz) {
        if (!this.isReady()) return null;
        const sz = this._indices;
        return tz || zz && 1 !== this._meshes.length ? sz.slice() : sz
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        zz && this._vertexArrayObjects && this._vertexArrayObjects[zz.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[zz.key]), delete this._vertexArrayObjects[zz.key])
      }
      releaseForMesh(zz, tz) {
        const sz = this._meshes,
          Fz = sz.indexOf(zz); - 1 !== Fz && (sz.splice(Fz, 1), this._vertexArrayObjects && zz._invalidateInstanceVertexArrayObject(), zz._geometry = null, 0 === sz.length && tz && this.dispose())
      }
      applyToMesh(zz) {
        if (zz._geometry === this) return;
        const tz = zz._geometry;
        tz && tz.releaseForMesh(zz), this._vertexArrayObjects && zz._invalidateInstanceVertexArrayObject();
        const sz = this._meshes;
        zz._geometry = this, zz._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), sz.push(zz), this.isReady() ? this._applyToMesh(zz) : this._boundingInfo && zz.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!zz && (zz = this.getVerticesData(Oz.m.PositionKind), !zz)) return;
          this._extend = (0, bz.f)(zz, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(zz) {
        for (const tz in this._vertexBuffers) {
          const sz = this._vertexBuffers[tz];
          sz._buffer.getBuffer() || sz.create(), tz === Oz.m.PositionKind && (this._extend || this._updateExtend(), zz.buildBoundingInfo(this._extend.minimum, this._extend.maximum), zz._createGlobalSubMesh(zz.isUnIndexed), zz._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), zz._syncGeometryWithMorphTargetManager(), zz.synchronizeInstances()
      }
      _notifyUpdate(zz) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, zz), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const tz of this._meshes) tz._markSubMeshesAsAttributesDirty()
      }
      load(zz, tz) {
        2 !== this.delayLoadState && (this.isReady() ? tz && tz() : (this.delayLoadState = 2, this._queueLoad(zz, tz)))
      }
      _queueLoad(zz, tz) {
        this.delayLoadingFile && (zz.addPendingData(this), (async () => {
          try {
            const sz = await zz._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void zz.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(sz), this), this.delayLoadState = 1, this._delayInfo = [], zz.removePendingData(this);
            const Fz = this._meshes,
              Wz = Fz.length;
            for (let zz = 0; zz < Wz; zz++) this._applyToMesh(Fz[zz]);
            tz && tz()
          } catch (sz) {
            zz.removePendingData(this), zz.zsz || uz.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${sz}`)
          }
        })())
      }
      toLeftHanded() {
        const zz = this.Qsz(!1);
        if (null != zz && zz.length > 0) {
          for (let tz = 0; tz < zz.length; tz += 3) {
            const sz = zz[tz + 0];
            zz[tz + 0] = zz[tz + 2], zz[tz + 2] = sz
          }
          this.setIndices(zz)
        }
        const tz = this.getVerticesData(Oz.m.PositionKind, !1);
        if (null != tz && tz.length > 0) {
          for (let zz = 0; zz < tz.length; zz += 3) tz[zz + 2] = -tz[zz + 2];
          this.setVerticesData(Oz.m.PositionKind, tz, !1)
        }
        const sz = this.getVerticesData(Oz.m.NormalKind, !1);
        if (null != sz && sz.length > 0) {
          for (let zz = 0; zz < sz.length; zz += 3) sz[zz + 2] = -sz[zz + 2];
          this.setVerticesData(Oz.m.NormalKind, sz, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const zz = this.getVerticesData(Oz.m.PositionKind);
        if (!zz || 0 === zz.length) return !1;
        for (let tz = 3 * this._positionsCache.length, sz = this._positionsCache.length; tz < zz.length; tz += 3, ++sz) this._positionsCache[sz] = Fz.p.FromArray(zz, tz);
        for (let tz = 0, sz = 0; tz < zz.length; tz += 3, ++sz) this._positionsCache[sz].set(zz[0 + tz], zz[1 + tz], zz[2 + tz]);
        return this._positionsCache.length = zz.length / 3, this._positions = this._positionsCache, !0
      }
      zsz() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const sz in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[sz]);
          this._vertexArrayObjects = {};
          const zz = this._meshes,
            tz = zz.length;
          for (let sz = 0; sz < tz; sz++) zz[sz]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const zz = this._meshes,
          tz = zz.length;
        let sz;
        for (sz = 0; sz < tz; sz++) this.releaseForMesh(zz[sz]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Fz in this._vertexBuffers) this._vertexBuffers[Fz].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const zz = this._parentContainer.geometries.indexOf(this);
          zz > -1 && this._parentContainer.geometries.splice(zz, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(zz) {
        const tz = new Hz(zz, this._scene),
          sz = this.Qsz(void 0, !0);
        sz && tz.setIndices(sz);
        let Fz, Wz = !1;
        for (Fz in this._vertexBuffers) {
          const zz = this.getVertexBuffer(Fz),
            sz = zz.getData();
          if (!sz) continue;
          const Xz = zz.isUpdatable(),
            oz = zz.getSize(),
            {
              type: vz,
              byteOffset: Uz,
              byteStride: Kz,
              normalized: uz
            } = zz;
          Wz = Wz || Xz;
          let Nz = this._totalVertices;
          if (zz.getIsInstanced()) {
            let zz;
            zz = sz instanceof Array ? 4 * sz.length : sz.byteLength, Nz = zz / Kz
          }
          const bz = (0, gz.s)(sz, oz, vz, Uz, Kz, Nz, !0),
            wz = new Oz.m(this._engine, bz, Fz, {
              updatable: Xz,
              useBytes: !1,
              stride: oz,
              size: oz,
              offset: 0,
              type: vz,
              normalized: uz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            });
          tz.setVerticesBuffer(wz, Nz)
        }
        for (Fz in tz._updatable = Wz, tz.delayLoadState = this.delayLoadState, tz.delayLoadingFile = this.delayLoadingFile, tz._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) tz._delayInfo = tz._delayInfo || [], tz._delayInfo.push(Fz);
        return tz._boundingInfo = new Uz.d(this._extend.minimum, this._extend.maximum), tz
      }
      serialize() {
        const zz = {};
        return zz.id = this.id, zz.uniqueId = this.uniqueId, zz.updatable = this._updatable, Nz.e && Nz.e.HasTags(this) && (zz.tags = Nz.e.GetTags(this)), zz
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
        return this.isVerticesDataPresent(Oz.m.PositionKind) && (zz.positions = this._toNumberArray(this.getVerticesData(Oz.m.PositionKind)), this.isVertexBufferUpdatable(Oz.m.PositionKind) && (zz.positionsUpdatable = !0)), this.isVerticesDataPresent(Oz.m.NormalKind) && (zz.normals = this._toNumberArray(this.getVerticesData(Oz.m.NormalKind)), this.isVertexBufferUpdatable(Oz.m.NormalKind) && (zz.normalsUpdatable = !0)), this.isVerticesDataPresent(Oz.m.TangentKind) && (zz.tangents = this._toNumberArray(this.getVerticesData(Oz.m.TangentKind)), this.isVertexBufferUpdatable(Oz.m.TangentKind) && (zz.tangentsUpdatable = !0)), this.isVerticesDataPresent(Oz.m.UVKind) && (zz.uvs = this._toNumberArray(this.getVerticesData(Oz.m.UVKind)), this.isVertexBufferUpdatable(Oz.m.UVKind) && (zz.uvsUpdatable = !0)), this.isVerticesDataPresent(Oz.m.UV2Kind) && (zz.uvs2 = this._toNumberArray(this.getVerticesData(Oz.m.UV2Kind)), this.isVertexBufferUpdatable(Oz.m.UV2Kind) && (zz.uvs2Updatable = !0)), this.isVerticesDataPresent(Oz.m.UV3Kind) && (zz.uvs3 = this._toNumberArray(this.getVerticesData(Oz.m.UV3Kind)), this.isVertexBufferUpdatable(Oz.m.UV3Kind) && (zz.uvs3Updatable = !0)), this.isVerticesDataPresent(Oz.m.UV4Kind) && (zz.uvs4 = this._toNumberArray(this.getVerticesData(Oz.m.UV4Kind)), this.isVertexBufferUpdatable(Oz.m.UV4Kind) && (zz.uvs4Updatable = !0)), this.isVerticesDataPresent(Oz.m.UV5Kind) && (zz.uvs5 = this._toNumberArray(this.getVerticesData(Oz.m.UV5Kind)), this.isVertexBufferUpdatable(Oz.m.UV5Kind) && (zz.uvs5Updatable = !0)), this.isVerticesDataPresent(Oz.m.UV6Kind) && (zz.uvs6 = this._toNumberArray(this.getVerticesData(Oz.m.UV6Kind)), this.isVertexBufferUpdatable(Oz.m.UV6Kind) && (zz.uvs6Updatable = !0)), this.isVerticesDataPresent(Oz.m.ColorKind) && (zz.colors = this._toNumberArray(this.getVerticesData(Oz.m.ColorKind)), this.isVertexBufferUpdatable(Oz.m.ColorKind) && (zz.colorsUpdatable = !0)), this.isVerticesDataPresent(Oz.m.MatricesIndicesKind) && (zz.matricesIndices = this._toNumberArray(this.getVerticesData(Oz.m.MatricesIndicesKind)), zz.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Oz.m.MatricesIndicesKind) && (zz.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Oz.m.MatricesWeightsKind) && (zz.matricesWeights = this._toNumberArray(this.getVerticesData(Oz.m.MatricesWeightsKind)), this.isVertexBufferUpdatable(Oz.m.MatricesWeightsKind) && (zz.matricesWeightsUpdatable = !0)), zz.indices = this._toNumberArray(this.Qsz()), zz
      }
      static ExtractFromMesh(zz, tz) {
        const sz = zz._geometry;
        return sz ? sz.copy(tz) : null
      }
      static RandomId() {
        return Kz.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(zz, tz) {
        for (let sz = 0; sz < tz.geometries.length; sz++)
          if (tz.geometries[sz]._loadedUniqueId === zz) return tz.geometries[sz];
        return null
      }
      static _ImportGeometry(zz, tz) {
        const sz = tz.aJ(),
          Fz = zz.geometryUniqueId,
          Xz = zz.geometryId;
        if (Fz || Xz) {
          const zz = Fz ? this._GetGeometryByLoadedUniqueId(Fz, sz) : sz.getGeometryById(Xz);
          zz && zz.applyToMesh(tz)
        } else if (zz instanceof ArrayBuffer) {
          const sz = tz._binaryInfo;
          if (sz.positionsAttrDesc && sz.positionsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.positionsAttrDesc.offset, sz.positionsAttrDesc.count);
            tz.setVerticesData(Oz.m.PositionKind, Fz, !1)
          }
          if (sz.normalsAttrDesc && sz.normalsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.normalsAttrDesc.offset, sz.normalsAttrDesc.count);
            tz.setVerticesData(Oz.m.NormalKind, Fz, !1)
          }
          if (sz.tangetsAttrDesc && sz.tangetsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.tangetsAttrDesc.offset, sz.tangetsAttrDesc.count);
            tz.setVerticesData(Oz.m.TangentKind, Fz, !1)
          }
          if (sz.uvsAttrDesc && sz.uvsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvsAttrDesc.offset, sz.uvsAttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UVKind, Fz, !1)
          }
          if (sz.uvs2AttrDesc && sz.uvs2AttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvs2AttrDesc.offset, sz.uvs2AttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UV2Kind, Fz, !1)
          }
          if (sz.uvs3AttrDesc && sz.uvs3AttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvs3AttrDesc.offset, sz.uvs3AttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UV3Kind, Fz, !1)
          }
          if (sz.uvs4AttrDesc && sz.uvs4AttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvs4AttrDesc.offset, sz.uvs4AttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UV4Kind, Fz, !1)
          }
          if (sz.uvs5AttrDesc && sz.uvs5AttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvs5AttrDesc.offset, sz.uvs5AttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UV5Kind, Fz, !1)
          }
          if (sz.uvs6AttrDesc && sz.uvs6AttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.uvs6AttrDesc.offset, sz.uvs6AttrDesc.count);
            if (Dz.d)
              for (let zz = 1; zz < Fz.length; zz += 2) Fz[zz] = 1 - Fz[zz];
            tz.setVerticesData(Oz.m.UV6Kind, Fz, !1)
          }
          if (sz.colorsAttrDesc && sz.colorsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.colorsAttrDesc.offset, sz.colorsAttrDesc.count);
            tz.setVerticesData(Oz.m.ColorKind, Fz, !1, sz.colorsAttrDesc.stride)
          }
          if (sz.matricesIndicesAttrDesc && sz.matricesIndicesAttrDesc.count > 0) {
            const Fz = new Int32Array(zz, sz.matricesIndicesAttrDesc.offset, sz.matricesIndicesAttrDesc.count),
              Wz = [];
            for (let zz = 0; zz < Fz.length; zz++) {
              const tz = Fz[zz];
              Wz.push(255 & tz), Wz.push((65280 & tz) >> 8), Wz.push((16711680 & tz) >> 16), Wz.push(tz >> 24 & 255)
            }
            tz.setVerticesData(Oz.m.MatricesIndicesKind, Wz, !1)
          }
          if (sz.matricesIndicesExtraAttrDesc && sz.matricesIndicesExtraAttrDesc.count > 0) {
            const Fz = new Int32Array(zz, sz.matricesIndicesExtraAttrDesc.offset, sz.matricesIndicesExtraAttrDesc.count),
              Wz = [];
            for (let zz = 0; zz < Fz.length; zz++) {
              const tz = Fz[zz];
              Wz.push(255 & tz), Wz.push((65280 & tz) >> 8), Wz.push((16711680 & tz) >> 16), Wz.push(tz >> 24 & 255)
            }
            tz.setVerticesData(Oz.m.MatricesIndicesExtraKind, Wz, !1)
          }
          if (sz.matricesWeightsAttrDesc && sz.matricesWeightsAttrDesc.count > 0) {
            const Fz = new Float32Array(zz, sz.matricesWeightsAttrDesc.offset, sz.matricesWeightsAttrDesc.count);
            tz.setVerticesData(Oz.m.MatricesWeightsKind, Fz, !1)
          }
          if (sz.indicesAttrDesc && sz.indicesAttrDesc.count > 0) {
            const Fz = new Int32Array(zz, sz.indicesAttrDesc.offset, sz.indicesAttrDesc.count);
            tz.setIndices(Fz, null)
          }
          if (sz.subMeshesAttrDesc && sz.subMeshesAttrDesc.count > 0) {
            const Fz = new Int32Array(zz, sz.subMeshesAttrDesc.offset, 5 * sz.subMeshesAttrDesc.count);
            tz.kY = [];
            for (let zz = 0; zz < sz.subMeshesAttrDesc.count; zz++) {
              const sz = Fz[5 * zz + 0],
                Wz = Fz[5 * zz + 1],
                Xz = Fz[5 * zz + 2],
                Oz = Fz[5 * zz + 3],
                vz = Fz[5 * zz + 4];
              oz.c.AddToMesh(sz, Wz, Xz, Oz, vz, tz)
            }
          }
        } else if (zz.positions && zz.normals && zz.indices) {
          if (tz.setVerticesData(Oz.m.PositionKind, zz.positions, zz.positions._updatable || zz.positionsUpdatable), tz.setVerticesData(Oz.m.NormalKind, zz.normals, zz.normals._updatable || zz.normalsUpdatable), zz.tangents && tz.setVerticesData(Oz.m.TangentKind, zz.tangents, zz.tangents._updatable || zz.tangentsUpdatable), zz.uvs && tz.setVerticesData(Oz.m.UVKind, zz.uvs, zz.uvs._updatable || zz.uvsUpdatable), zz.uvs2 && tz.setVerticesData(Oz.m.UV2Kind, zz.uvs2, zz.uvs2._updatable || zz.uvs2Updatable), zz.uvs3 && tz.setVerticesData(Oz.m.UV3Kind, zz.uvs3, zz.uvs3._updatable || zz.uvs3Updatable), zz.uvs4 && tz.setVerticesData(Oz.m.UV4Kind, zz.uvs4, zz.uvs4._updatable || zz.uvs4Updatable), zz.uvs5 && tz.setVerticesData(Oz.m.UV5Kind, zz.uvs5, zz.uvs5._updatable || zz.uvs5Updatable), zz.uvs6 && tz.setVerticesData(Oz.m.UV6Kind, zz.uvs6, zz.uvs6._updatable || zz.uvs6Updatable), zz.colors && tz.setVerticesData(Oz.m.ColorKind, Wz.d.CheckColors4(zz.colors, zz.positions.length / 3), zz.colors._updatable), zz.matricesIndices)
            if (zz.matricesIndices._isExpanded || zz.matricesIndicesExpanded) delete zz.matricesIndices._isExpanded, delete zz.matricesIndicesExpanded, tz.setVerticesData(Oz.m.MatricesIndicesKind, zz.matricesIndices, zz.matricesIndices._updatable || zz.matricesIndicesUpdatable);
            else {
              const sz = [];
              for (let tz = 0; tz < zz.matricesIndices.length; tz++) {
                const Fz = zz.matricesIndices[tz];
                sz.push(255 & Fz), sz.push((65280 & Fz) >> 8), sz.push((16711680 & Fz) >> 16), sz.push(Fz >> 24 & 255)
              }
              tz.setVerticesData(Oz.m.MatricesIndicesKind, sz, zz.matricesIndices._updatable || zz.matricesIndicesUpdatable)
            } if (zz.matricesIndicesExtra)
            if (zz.matricesIndicesExtraExpanded || zz.matricesIndicesExtra._isExpanded) delete zz.matricesIndices._isExpanded, delete zz.matricesIndicesExtraExpanded, tz.setVerticesData(Oz.m.MatricesIndicesExtraKind, zz.matricesIndicesExtra, zz.matricesIndicesExtra._updatable || zz.matricesIndicesExtraUpdatable);
            else {
              const sz = [];
              for (let tz = 0; tz < zz.matricesIndicesExtra.length; tz++) {
                const Fz = zz.matricesIndicesExtra[tz];
                sz.push(255 & Fz), sz.push((65280 & Fz) >> 8), sz.push((16711680 & Fz) >> 16), sz.push(Fz >> 24 & 255)
              }
              tz.setVerticesData(Oz.m.MatricesIndicesExtraKind, sz, zz.matricesIndicesExtra._updatable || zz.matricesIndicesExtraUpdatable)
            } zz.matricesWeights && (Hz._CleanMatricesWeights(zz, tz), tz.setVerticesData(Oz.m.MatricesWeightsKind, zz.matricesWeights, zz.matricesWeights._updatable)), zz.matricesWeightsExtra && tz.setVerticesData(Oz.m.MatricesWeightsExtraKind, zz.matricesWeightsExtra, zz.matricesWeights._updatable), tz.setIndices(zz.indices, null)
        }
        if (zz.kY) {
          tz.kY = [];
          for (let sz = 0; sz < zz.kY.length; sz++) {
            const Fz = zz.kY[sz];
            oz.c.AddToMesh(Fz.materialIndex, Fz.verticesStart, Fz.verticesCount, Fz.indexStart, Fz.indexCount, tz)
          }
        }
        tz._shouldGenerateFlatShading && (tz.convertToFlatShadedMesh(), tz._shouldGenerateFlatShading = !1), tz.computeWorldMatrix(!0), sz.onMeshImportedObservable.notifyObservers(tz)
      }
      static _CleanMatricesWeights(zz, tz) {
        const sz = .001;
        if (!vz.e.CleanBoneMatrixWeights) return;
        let Fz;
        if (!(zz.skeletonId > -1)) return;
        {
          const sz = tz.aJ().getLastSkeletonById(zz.skeletonId);
          if (!sz) return;
          Fz = sz.bones.length
        }
        const Wz = tz.getVerticesData(Oz.m.MatricesIndicesKind),
          Xz = tz.getVerticesData(Oz.m.MatricesIndicesExtraKind),
          oz = zz.matricesWeights,
          Uz = zz.matricesWeightsExtra,
          Kz = zz.numBoneInfluencer,
          uz = oz.length;
        for (let Oz = 0; Oz < uz; Oz += 4) {
          let zz = 0,
            tz = -1;
          for (let Fz = 0; Fz < 4; Fz++) {
            const Wz = oz[Oz + Fz];
            zz += Wz, Wz < sz && tz < 0 && (tz = Fz)
          }
          if (Uz)
            for (let Fz = 0; Fz < 4; Fz++) {
              const Wz = Uz[Oz + Fz];
              zz += Wz, Wz < sz && tz < 0 && (tz = Fz + 4)
            }
          if ((tz < 0 || tz > Kz - 1) && (tz = Kz - 1), zz > sz) {
            const tz = 1 / zz;
            for (let zz = 0; zz < 4; zz++) oz[Oz + zz] *= tz;
            if (Uz)
              for (let zz = 0; zz < 4; zz++) Uz[Oz + zz] *= tz
          } else tz >= 4 ? (Uz[Oz + tz - 4] = 1 - zz, Xz[Oz + tz - 4] = Fz) : (oz[Oz + tz] = 1 - zz, Wz[Oz + tz] = Fz)
        }
        tz.setVerticesData(Oz.m.MatricesIndicesKind, Wz), zz.matricesWeightsExtra && tz.setVerticesData(Oz.m.MatricesIndicesExtraKind, Xz)
      }
      static Parse(zz, tz, sz) {
        const Wz = new Hz(zz.id, tz, void 0, zz.updatable);
        return Wz._loadedUniqueId = zz.uniqueId, Nz.e && Nz.e.AddTagsTo(Wz, zz.tags), zz.delayLoadingFile ? (Wz.delayLoadState = 4, Wz.delayLoadingFile = sz + zz.delayLoadingFile, Wz._boundingInfo = new Uz.d(Fz.p.FromArray(zz.boundingBoxMinimum), Fz.p.FromArray(zz.boundingBoxMaximum)), Wz._delayInfo = [], zz.hasUVs && Wz._delayInfo.push(Oz.m.UVKind), zz.hasUVs2 && Wz._delayInfo.push(Oz.m.UV2Kind), zz.hasUVs3 && Wz._delayInfo.push(Oz.m.UV3Kind), zz.hasUVs4 && Wz._delayInfo.push(Oz.m.UV4Kind), zz.hasUVs5 && Wz._delayInfo.push(Oz.m.UV5Kind), zz.hasUVs6 && Wz._delayInfo.push(Oz.m.UV6Kind), zz.hasColors && Wz._delayInfo.push(Oz.m.ColorKind), zz.hasMatricesIndices && Wz._delayInfo.push(Oz.m.MatricesIndicesKind), zz.hasMatricesWeights && Wz._delayInfo.push(Oz.m.MatricesWeightsKind), Wz._delayLoadingFunction = Xz.b.ImportVertexData) : Xz.b.ImportVertexData(zz, Wz), tz.pushGeometry(Wz, !0), Wz
      }
    }
  },
  39609: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz,
      g: () => wz
    });
    var Fz = sz(36475),
      Wz = sz(38097),
      Xz = sz(39581),
      Oz = sz(39555),
      oz = sz(38091),
      vz = sz(39585),
      Uz = sz(39293),
      Kz = sz(36518);
    class uz extends Xz.b {
      constructor(zz, tz) {
        super(zz, tz.aJ()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, tz.Y5(this), this._sourceMesh = tz, this._unIndexed = tz._unIndexed, this.position.vsz(tz.position), this.rotation.vsz(tz.rotation), this.nX.vsz(tz.nX), tz.rotationQuaternion && (this.rotationQuaternion = tz.rotationQuaternion.clone()), this.animations = tz.animations.slice();
        for (const sz of tz.getAnimationRanges()) null != sz && this.createAnimationRange(sz.name, sz.from, sz.to);
        if (this.infiniteDistance = tz.infiniteDistance, this.setPivotMatrix(tz.getPivotMatrix()), tz.skeleton || tz.morphTargetManager || !tz.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const zz = tz.rC();
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
        this._sourceMesh?.receiveShadows !== zz && Wz.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(zz) {
        this._sourceMesh?.material !== zz && Wz.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(zz) {
        this._sourceMesh?.visibility !== zz && Wz.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(zz) {
        this._sourceMesh?.skeleton !== zz && Wz.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(zz) {
        this._sourceMesh && zz !== this._sourceMesh.renderingGroupId && Wz.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(zz) {
        this._sourceMesh && zz !== this._sourceMesh.meshBlendingTag && Wz.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get AFz() {
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
      getVerticesData(zz, tz, sz) {
        return this._sourceMesh.getVerticesData(zz, tz, sz)
      }
      copyVerticesData(zz, tz) {
        this._sourceMesh.copyVerticesData(zz, tz)
      }
      getVertexBuffer(zz, tz) {
        return this._sourceMesh.getVertexBuffer(zz, tz)
      }
      setVerticesData(zz, tz, sz, Fz) {
        return this.AFz && this.AFz.setVerticesData(zz, tz, sz, Fz), this.AFz
      }
      updateVerticesData(zz, tz, sz, Fz) {
        return this.AFz && this.AFz.updateVerticesData(zz, tz, sz, Fz), this.AFz
      }
      setIndices(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.AFz && this.AFz.setIndices(zz, tz), this.AFz
      }
      isVerticesDataPresent(zz) {
        return this._sourceMesh.isVerticesDataPresent(zz)
      }
      Qsz() {
        return this._sourceMesh.Qsz()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let zz, tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rC().isLocked) return this;
        zz = "object" === typeof tz ? tz : {
          applySkeleton: tz,
          applyMorph: sz
        };
        const Fz = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(zz, null, Uz.m.PositionKind), Fz), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(zz, tz) {
        if (super._activate(zz, tz), this._sourceMesh.kY || Wz.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, zz), tz) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== vz.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Fz.e);
          const zz = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Fz.m.XD[7].vsz(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.vsz(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.vsz(Fz.m.XD[7]), this._currentLOD._masterMesh = zz, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get VJ() {
        return !0
      }
      getLOD(zz) {
        if (!zz) return this;
        const tz = this.AFz.getLODLevels();
        if (tz && 0 !== tz.length) {
          const tz = this.rC();
          this._currentLOD = this.AFz.getLOD(zz, tz.uFz)
        } else this._currentLOD = this.AFz;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(zz) {
        return this.AFz._preActivateForIntermediateRendering(zz)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.kY)
          for (let zz = 0; zz < this._sourceMesh.kY.length; zz++) this._sourceMesh.kY[zz].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.rC().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(zz);
        if (oz.d.DeepCopy(this, Fz, ["name", "kY", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "AFz", "VJ", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "jFz", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "BOz", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), tz && (Fz.parent = tz), !sz)
          for (let Wz = 0; Wz < this.aJ().meshes.length; Wz++) {
            const zz = this.aJ().meshes[Wz];
            zz.parent === this && zz.clone(zz.name, Fz)
          }
        return Fz.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Fz), Fz
      }
      dispose(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z5(this), super.dispose(zz, tz)
      }
      _serializeAsParent(zz) {
        super._serializeAsParent(zz), zz.parentId = this._sourceMesh.uniqueId, zz.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0, tz && tz.newSourcedMesh);
        Fz && sz && sz(this, Fz);
        for (const Wz of this.getChildTransformNodes(!0)) Wz.instantiateHierarchy(Fz, tz, sz);
        return Fz
      }
    }
    let Nz = !1;

    function bz(zz, tz, sz, Fz, Wz) {
      for (let Xz = 0; Xz < tz.length; Xz++) {
        const Oz = zz[tz[Xz]] ?? 0,
          oz = Wz + sz[Xz];
        Oz.toArray ? Oz.toArray(Fz, oz) : Oz.copyToArray ? Oz.copyToArray(Fz, oz) : Fz[oz] = Oz
      }
    }

    function wz() {
      Nz || (Nz = !0, Oz.c._instancedMeshFactory = (zz, tz) => {
        const sz = new uz(zz, tz);
        if (tz.uC) {
          sz.uC = {};
          for (const zz in tz.uC) sz.uC[zz] = tz.uC[zz]
        }
        return sz
      }, Oz.c.prototype.WC = function(zz, tz) {
        if (!this.uC) {
          this.uC = {};
          for (const zz of this.instances) zz.uC = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.FD().getCaps().vertexArrayObject ? {} : void 0
        }), this.uC[zz] = null, this._userInstancedBuffersStorage.strides[zz] = tz;
        const sz = this._userInstancedBuffersStorage;
        sz.interleavedKinds = [], sz.interleavedOffsets = [], sz.interleavedRowStride = 0;
        for (const Fz in sz.strides) sz.interleavedKinds.push(Fz), sz.interleavedOffsets.push(sz.interleavedRowStride), sz.interleavedRowStride += sz.strides[Fz];
        sz.interleavedData = new Float32Array(32 * sz.interleavedRowStride);
        for (const Fz in sz.interleavedBuffers) sz.interleavedBuffers[Fz].buffer.dispose();
        sz.interleavedBuffers = {}, sz.vertexBuffers[zz] = null;
        for (const Fz of this.instances) Fz.uC[zz] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Oz.c.prototype._processInstancedBuffers = function(zz, tz) {
        const sz = this._userInstancedBuffersStorage,
          Fz = sz.interleavedRowStride;
        if (!Fz) return;
        const Wz = zz ? zz.length : 0,
          Xz = (Wz + 1) * Fz;
        let Oz = sz.interleavedData;
        if (Oz.length < Xz) {
          let zz = Oz.length;
          for (; zz < Xz;) zz *= 2;
          Oz = sz.interleavedData = new Float32Array(zz)
        }
        const oz = sz.interleavedKinds,
          vz = sz.interleavedOffsets;
        let Kz = 0;
        tz && (bz(this.uC, oz, vz, Oz, Kz), Kz += Fz);
        for (let Uz = 0; Uz < Wz; Uz++) bz(zz[Uz].uC, oz, vz, Oz, Kz), Kz += Fz;
        let uz = "shared",
          Nz = sz.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (uz = this._instanceDataStorage.engine.currentRenderPassId, sz.renderPasses || (sz.renderPasses = {}), sz.renderPasses[uz] || (sz.renderPasses[uz] = {}), Nz = sz.renderPasses[uz]);
        const wz = sz.interleavedBuffers[uz];
        let Dz = !wz || wz.data !== Oz;
        for (let Uz = 0; !Dz && Uz < oz.length; Uz++) Dz = !Nz[oz[Uz]];
        if (!Dz) return void wz.buffer.updateDirectly(Oz, 0);
        wz?.buffer.dispose();
        const gz = new Uz.e(this.FD(), Oz, !0, Fz, !1, !0);
        for (let Uz = 0; Uz < oz.length; Uz++) {
          const zz = oz[Uz],
            tz = gz.createVertexBuffer(zz, vz[Uz], sz.strides[zz]);
          tz.hashCode += tz.byteOffset * 2 ** 24, Nz[zz] = tz
        }
        sz.interleavedBuffers[uz] = {
          buffer: gz,
          data: Oz
        }, this._invalidateInstanceVertexArrayObject()
      }, Oz.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const zz in this._userInstancedBuffersStorage.vertexArrayObjects) this.FD().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[zz]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Oz.c.prototype._disposeInstanceSpecificData = function() {
        for (const tz in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[tz].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const tz in this.uC) this._userInstancedBuffersStorage.vertexBuffers[tz] && this._userInstancedBuffersStorage.vertexBuffers[tz].dispose();
        const zz = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (zz) {
          for (const tz in zz) zz[tz].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.uC = {}
      }, (0, Kz.g)("BABYLON.InstancedMesh", uz))
    }
  },
  39555: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => pz,
      e: () => Ez,
      f: () => lz
    });
    var Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz = sz(36505),
      Bz = sz(39264),
      Pz = sz(39205),
      rz = sz(38091),
      Yz = sz(39185),
      xz = sz(39559),
      mz = sz(39370),
      Jz = sz(36475),
      Iz = sz(36654),
      Cz = sz(39374),
      ez = sz(39293),
      Zz = sz(39562),
      Gz = sz(39566),
      Tz = sz(39581),
      cz = sz(39458),
      jz = sz(39451),
      Az = sz(39531),
      yz = sz(39588),
      Mz = sz(39573),
      dz = sz(39181),
      hz = sz(38097),
      Qz = sz(36518),
      kz = sz(39065),
      iz = sz(39319);
    class Lz {
      constructor(zz, tz) {
        this.distanceOrScreenCoverage = zz, this.mesh = tz
      }
    }
    class lz {}
    class nz {
      constructor() {
        this.batchCache = new qz(this), this.batchCacheReplacementModeInFrozenMode = new qz(this), this.instancesBufferSize = 2048
      }
    }
    class az {
      constructor() {
        this.renderPasses = {}
      }
    }
    class qz {
      constructor(zz) {
        this.parent = zz, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Sz {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Vz {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Rz = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class pz extends Tz.b {
      static _GetDefaultSideOrientation(zz) {
        return zz || pz.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== zz && (zz && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(ez.m.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(ez.m.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = zz, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Hz.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Hz.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Hz.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Hz.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Hz.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(zz) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(zz)
      }
      get jFz() {
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
      _copySource(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wz = this.aJ();
        if (zz._geometry && zz._geometry.applyToMesh(this), rz.d.DeepCopy(zz, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "jFz", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "VJ", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "BOz", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = zz, Wz.useClonedMeshMap && (zz._internalMeshDataInfo.meshMap || (zz._internalMeshDataInfo.meshMap = {}), zz._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = zz._originalBuilderSideOrientation, this._creationDataStorage = zz._creationDataStorage, zz._ranges) {
          const tz = zz._ranges;
          for (const zz in tz) Object.prototype.hasOwnProperty.call(tz, zz) && tz[zz] && this.createAnimationRange(zz, tz[zz].from, tz[zz].to)
        }
        if (zz.metadata && zz.metadata.clone ? this.metadata = zz.metadata.clone() : this.metadata = zz.metadata, this._internalMetadata = zz._internalMetadata, this.meshBlendingTag = zz.meshBlendingTag, Yz.e && Yz.e.HasTags(zz) && Yz.e.AddTagsTo(this, Yz.e.GetTags(zz, !0)), this.Xx(zz.isEnabled(!1)), this.parent = zz.parent, this.setPivotMatrix(zz.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + zz.id, this.material = zz.material, !tz) {
          const Wz = zz.getDescendants(!0);
          for (let zz = 0; zz < Wz.length; zz++) {
            const Xz = Wz[zz];
            Xz._isMesh ? (Rz.parent = this, Rz.doNotCloneChildren = tz, Rz.clonePhysicsImpostor = sz, Rz.cloneThinInstances = Fz, Xz.clone(this.name + "." + Xz.name, Rz)) : Xz.clone && Xz.clone(this.name + "." + Xz.name, this)
          }
        }
        if (zz.morphTargetManager && (this.morphTargetManager = zz.morphTargetManager), (0, kz.d)(Wz.getPhysicsEngine)) {
          const tz = Wz.getPhysicsEngine();
          if (sz && tz)
            if (1 === tz.getPluginVersion()) {
              const sz = tz.getImpostorForPhysicsObject(zz);
              sz && (this.physicsImpostor = sz.clone(this))
            } else 2 === tz.getPluginVersion() && zz.physicsBody && zz.physicsBody.clone(this)
        }
        for (let Xz = 0; Xz < Wz.lY.length; Xz++) {
          const tz = Wz.lY[Xz];
          tz.emitter === zz && tz.clone(tz.name, this)
        }
        if (this.skeleton = zz.skeleton, Fz && (zz._thinInstanceDataStorage.matrixData ? (this.b_("matrix", new Float32Array(zz._thinInstanceDataStorage.matrixData), 16, !zz._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = zz._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = zz._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = zz._thinInstanceDataStorage.matrixBufferSize, zz._userThinInstanceBuffersStorage)) {
          const tz = zz._userThinInstanceBuffersStorage;
          for (const zz in tz.data) this.b_(zz, new Float32Array(tz.data[zz]), tz.strides[zz], !tz.vertexBuffers?.[zz]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[zz] = tz.sizes[zz]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(zz) {
        let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Xz = arguments.length > 4 ? arguments[4] : void 0,
          Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(zz, sz), this._internalMeshDataInfo = new Vz, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Sz, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = pz.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, sz = this.aJ(), this._instanceDataStorage = new az, this._instanceDataStorage.engine = sz.FD(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new nz), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (zz, tz, sz) => {
          zz && sz && (this._uniformBuffer ? this.transferToEffect(tz) : sz.bindOnlyWorldMatrix(tz))
        };
        let oz = !1;
        if (Fz && void 0 === Fz._addToSceneRootNodes) {
          const zz = Fz;
          tz = zz.parent ?? null, Wz = zz.source ?? null, Xz = zz.doNotCloneChildren ?? !1, Oz = zz.clonePhysicsImpostor ?? !0, oz = zz.cloneThinInstances ?? !1
        } else tz = Fz;
        Wz && this._copySource(Wz, Xz, Oz, oz), null !== tz && (this.parent = tz), this._instanceDataStorage.hardwareInstancedRendering = this.FD().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = zz => {
          zz.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Hz.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), Wz && Wz.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = 0 === this.getTotalVertices() || tz && tz.doNotInstantiate && (!0 === tz.doNotInstantiate || tz.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Fz.parent = zz || this.parent, Fz.position = this.position.clone(), Fz.nX = this.nX.clone(), this.rotationQuaternion ? Fz.rotationQuaternion = this.rotationQuaternion.clone() : Fz.rotation = this.rotation.clone(), sz && sz(this, Fz);
        for (const Wz of this.getChildTransformNodes(!0)) "InstancedMesh" === Wz.getClassName() && "Mesh" === Fz.getClassName() && Wz.AFz === this ? Wz.instantiateHierarchy(Fz, {
          doNotInstantiate: tz && tz.doNotInstantiate || !1,
          newSourcedMesh: Fz
        }, sz) : Wz.instantiateHierarchy(Fz, tz, sz);
        return Fz
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(zz) {
        let tz = super.toString(zz);
        if (tz += ", n vertices: " + this.getTotalVertices(), tz += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let sz = 0; sz < this.animations.length; sz++) tz += ", animation[0]: " + this.animations[sz].toString(zz);
        if (zz)
          if (this._geometry) {
            const zz = this.Qsz(),
              sz = this.getVerticesData(ez.m.PositionKind);
            sz && zz && (tz += ", flat shading: " + (sz.length / 3 === zz.length ? "YES" : "NO"))
          } else tz += ", flat shading: UNKNOWN";
        return tz
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
        this._internalMeshDataInfo._LODLevels.sort(((tz, sz) => tz.distanceOrScreenCoverage < sz.distanceOrScreenCoverage ? zz : tz.distanceOrScreenCoverage > sz.distanceOrScreenCoverage ? -zz : 0))
      }
      addLODLevel(zz, tz) {
        if (tz && tz._masterMesh) return hz.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const sz = new Lz(zz, tz);
        return this._internalMeshDataInfo._LODLevels.push(sz), tz && (tz._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(zz) {
        const tz = this._internalMeshDataInfo;
        for (let sz = 0; sz < tz._LODLevels.length; sz++) {
          const Fz = tz._LODLevels[sz];
          if (Fz.distanceOrScreenCoverage === zz) return Fz.mesh
        }
        return null
      }
      removeLODLevel(zz) {
        const tz = this._internalMeshDataInfo;
        for (let sz = 0; sz < tz._LODLevels.length; sz++) tz._LODLevels[sz].mesh === zz && (tz._LODLevels.splice(sz, 1), zz && (zz._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(zz, tz) {
        const sz = this._internalMeshDataInfo;
        if (!sz._LODLevels || 0 === sz._LODLevels.length) return this;
        const Fz = tz || this.rC().uFz,
          Wz = zz.mode === mz.b.ORTHOGRAPHIC_CAMERA ? zz.minZ : Fz.centerWorld.subtract(zz.globalPosition).length();
        let Xz = Wz,
          Oz = 1;
        if (sz._useLODScreenCoverage) {
          const tz = zz.screenArea;
          let sz = Fz.radiusWorld * zz.minZ / Wz;
          sz = sz * sz * Math.PI, Xz = sz / tz, Oz = -1
        }
        if (Oz * sz._LODLevels[sz._LODLevels.length - 1].distanceOrScreenCoverage > Oz * Xz) return this.onLODLevelSelection && this.onLODLevelSelection(Xz, this, this), this;
        for (let oz = 0; oz < sz._LODLevels.length; oz++) {
          const zz = sz._LODLevels[oz];
          if (Oz * zz.distanceOrScreenCoverage < Oz * Xz) {
            if (zz.mesh) {
              if (4 === zz.mesh.delayLoadState) return zz.mesh._checkDelayState(), this;
              if (2 === zz.mesh.delayLoadState) return this;
              zz.mesh._preActivate(), zz.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Xz, this, zz.mesh), zz.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Xz, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(zz, tz, sz, Fz) {
        if (!this._geometry) return null;
        let Wz = Fz ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[zz]?.getFloatData(this.instances.length + 1, sz || tz && 1 !== this._geometry.meshes.length);
        return Wz || (Wz = this._geometry.getVerticesData(zz, tz, sz)), Wz
      }
      copyVerticesData(zz, tz) {
        this._geometry && this._geometry.copyVerticesData(zz, tz)
      }
      getVertexBuffer(zz, tz) {
        return this._geometry ? (tz ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[zz]) ?? this._geometry.getVertexBuffer(zz) : null
      }
      isVerticesDataPresent(zz, tz) {
        return this._geometry ? !tz && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[zz] || this._geometry.isVerticesDataPresent(zz) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(zz)
      }
      isVertexBufferUpdatable(zz, tz) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(zz);
        if (!tz) {
          const tz = this._userInstancedBuffersStorage?.vertexBuffers[zz];
          if (tz) return tz.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(zz)
      }
      getVerticesDataKinds(zz) {
        if (!this._geometry) {
          const zz = [];
          if (this._delayInfo)
            for (const tz of this._delayInfo) zz.push(tz);
          return zz
        }
        const tz = this._geometry.getVerticesDataKinds();
        if (!zz && this._userInstancedBuffersStorage)
          for (const sz in this._userInstancedBuffersStorage.vertexBuffers) - 1 === tz.indexOf(sz) && tz.push(sz);
        return tz
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Qsz(zz, tz) {
        return this._geometry ? this._geometry.Qsz(zz, tz) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(zz)) return !1;
        if (!this.kY || 0 === this.kY.length) return !0;
        if (!zz) return !0;
        const sz = this.FD(),
          Fz = this.aJ(),
          Wz = tz || sz.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Xz = this.material || Fz.defaultMaterial;
        if (Xz)
          if (Xz._storeEffectOnSubMeshes)
            for (const oz of this.kY) {
              const zz = oz.vD();
              if (zz)
                if (zz._storeEffectOnSubMeshes) {
                  if (!zz.isReadyForSubMesh(this, oz, Wz)) return !1
                } else if (!zz.isReady(this, Wz)) return !1
            } else if (!Xz.isReady(this, Wz)) return !1;
        const Oz = sz.currentRenderPassId;
        for (const oz of this.lightSources) {
          const zz = oz.getShadowGenerators();
          if (!zz) continue;
          const tz = zz.values();
          for (let Fz = tz.next(); !0 !== Fz.done; Fz = tz.next()) {
            const zz = Fz.value;
            if (zz && (!zz.getShadowMap()?.renderList || zz.getShadowMap()?.renderList && -1 !== zz.getShadowMap()?.renderList?.indexOf(this))) {
              const tz = zz.getShadowMap().renderPassIds ?? [sz.currentRenderPassId];
              for (let Fz = 0; Fz < tz.length; ++Fz) {
                sz.currentRenderPassId = tz[Fz];
                for (const tz of this.kY)
                  if (!zz.isReady(tz, Wz, tz.vD()?.needAlphaBlendingForMesh(this) ?? !1)) return sz.currentRenderPassId = Oz, !1
              }
              sz.currentRenderPassId = Oz
            }
          }
        }
        for (const oz of this._internalMeshDataInfo._LODLevels)
          if (oz.mesh && !oz.mesh.isReady(Wz)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      UD() {
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
        let tz = this._instanceDataStorage.renderPasses[zz];
        return tz || (tz = new nz, this._instanceDataStorage.renderPasses[zz] = tz), tz
      }
      _preActivate() {
        const zz = this._internalMeshDataInfo,
          tz = this.aJ().getRenderId();
        return zz._preActivateId === tz || (zz._preActivateId = tz, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(zz) {
        const tz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return tz.visibleInstances && (tz.visibleInstances.intermediateDefaultRenderId = zz), this
      }
      _registerInstanceForRenderId(zz, tz) {
        const sz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return sz.visibleInstances || (sz.visibleInstances = {
          defaultRenderId: tz,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), sz.visibleInstances[tz] || (void 0 === sz.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete sz.visibleInstances[sz.previousRenderId], sz.previousRenderId = tz, sz.visibleInstances[tz] = new Array), sz.visibleInstances[tz].push(zz), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.oD || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let zz, tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rC().isLocked) return this;
        zz = "object" === typeof tz ? tz : {
          applySkeleton: tz,
          applyMorph: sz
        };
        const Fz = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(zz, null, ez.m.PositionKind), Fz), this
      }
      _createGlobalSubMesh(zz) {
        const tz = this.getTotalVertices();
        if (!tz || !this.Qsz()) return null;
        if (this.kY && this.kY.length > 0) {
          const sz = this.Qsz();
          if (!sz) return null;
          const Fz = sz.length;
          let Wz = !1;
          if (zz) Wz = !0;
          else
            for (const zz of this.kY) {
              if (zz.indexStart + zz.indexCount > Fz) {
                Wz = !0;
                break
              }
              if (zz.verticesStart + zz.verticesCount > tz) {
                Wz = !0;
                break
              }
            }
          if (!Wz) return this.kY[0]
        }
        return this.releaseSubMeshes(), new cz.c(0, 0, tz, 0, this.getTotalIndices() || (this.isUnIndexed ? tz : 0), this)
      }
      subdivide(zz) {
        if (zz < 1) return;
        const tz = this.getTotalIndices();
        let sz = tz / zz | 0,
          Fz = 0;
        for (; sz % 3 !== 0;) sz++;
        this.releaseSubMeshes();
        for (let Wz = 0; Wz < zz && !(Fz >= tz); Wz++) cz.c.CreateFromIndices(0, Fz, Fz + sz >= tz ? tz - Fz : sz, this, void 0, !1), Fz += sz;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(zz, tz, sz, Fz);
        else {
          const Fz = new Zz.b;
          Fz.set(tz, zz);
          const Wz = this.aJ();
          new Gz.b(Gz.b.RandomId(), Wz, Fz, sz, this)
        }
        return this
      }
      removeVerticesData(zz) {
        this._geometry && this._geometry.removeVerticesData(zz)
      }
      markVerticesDataAsUpdatable(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sz = this.getVertexBuffer(zz);
        sz && sz.isUpdatable() !== tz && this.setVerticesData(zz, this.getVerticesData(zz), tz)
      }
      setVerticesBuffer(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Gz.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(zz, sz, tz), this
      }
      updateVerticesData(zz, tz, sz, Fz) {
        return this._geometry ? (Fz ? (this.makeGeometryUnique(), this.updateVerticesData(zz, tz, sz, !1)) : this._geometry.updateVerticesData(zz, tz, sz), this) : this
      }
      updateMeshPositions(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sz = this.getVerticesData(ez.m.PositionKind);
        if (!sz) return this;
        if (zz(sz), this.updateVerticesData(ez.m.PositionKind, sz, !1, !1), tz) {
          const zz = this.Qsz(),
            tz = this.getVerticesData(ez.m.NormalKind);
          if (!tz) return this;
          Zz.b.ComputeNormals(sz, zz, tz), this.updateVerticesData(ez.m.NormalKind, tz, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const zz = this._geometry,
          tz = this._geometry.copy(Gz.b.RandomId());
        return zz.releaseForMesh(this, !0), tz.applyToMesh(this), this
      }
      setIndexBuffer(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wz = this._geometry;
        Wz || (Wz = new Gz.b(Gz.b.RandomId(), this.aJ(), void 0, void 0, this)), Wz.setIndexBuffer(zz, tz, sz, Fz)
      }
      setIndices(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(zz, tz, sz, Fz);
        else {
          const Fz = new Zz.b;
          Fz.indices = zz;
          const Wz = this.aJ();
          new Gz.b(Gz.b.RandomId(), Wz, Fz, sz, this, tz)
        }
        return this
      }
      updateIndices(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(zz, tz, sz), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(zz, tz, sz) {
        let Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Wz = this.aJ().FD();
        let Xz;
        if (this._unIndexed)
          if (this._getRenderingFillMode(sz) === jz.b.WireFrameFillMode) Xz = zz._getLinesIndexBuffer(this.Qsz(), Wz);
          else Xz = null;
        else switch (this._getRenderingFillMode(sz)) {
          case jz.b.PointFillMode:
            Xz = null;
            break;
          case jz.b.WireFrameFillMode:
            Xz = zz._getLinesIndexBuffer(this.Qsz(), Wz);
            break;
          default:
          case jz.b.TriangleFillMode:
            Xz = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(tz, Xz, Fz)
      }
      _bindDirect(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(zz), sz && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const zz = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const tz in zz) this._userInstancedBuffersStorage.vertexBuffers[tz] = zz[tz]
          }
          this._geometry._bind(zz, tz, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(zz, tz);
        return this
      }
      _draw(zz, tz, sz) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Fz = this.aJ().FD(),
          Wz = Fz._currentMaterialContext,
          Xz = Wz && Wz.useVertexPulling;
        return this._unIndexed && tz !== jz.b.WireFrameFillMode || tz == jz.b.PointFillMode ? Fz.drawArraysType(tz, zz.verticesStart, zz.verticesCount, this.forcedInstanceCount || sz) : tz == jz.b.WireFrameFillMode ? Fz.drawElementsType(tz, 0, zz._linesIndexCount, this.forcedInstanceCount || sz) : Xz ? Fz.drawArraysType(tz, zz.indexStart, zz.indexCount, this.forcedInstanceCount || sz) : Fz.drawElementsType(tz, zz.indexStart, zz.indexCount, this.forcedInstanceCount || sz), this
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
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (tz) return sz.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[zz] = !1, sz.batchCacheReplacementModeInFrozenMode.renderSelf[zz] = !0, sz.batchCacheReplacementModeInFrozenMode;
          if (sz.previousBatch) return sz.previousBatch
        }
        const Fz = this.aJ(),
          Wz = Fz._isInIntermediateRendering(),
          Xz = Wz ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Oz = sz.batchCache;
        if (Oz.mustReturn = !1, Oz.renderSelf[zz] = tz || !Xz && this.isEnabled() && this.isVisible, Oz.visibleInstances[zz] = null, sz.visibleInstances && !tz) {
          const tz = sz.visibleInstances,
            Xz = Fz.getRenderId(),
            oz = Wz ? tz.intermediateDefaultRenderId : tz.defaultRenderId;
          Oz.visibleInstances[zz] = tz[Xz], !Oz.visibleInstances[zz] && oz && (Oz.visibleInstances[zz] = tz[oz])
        }
        return Oz.hardwareInstancedRendering[zz] = !tz && this._instanceDataStorage.hardwareInstancedRendering && null !== Oz.visibleInstances[zz] && void 0 !== Oz.visibleInstances[zz], sz.previousBatch = Oz, Oz
      }
      _updateInstancedBuffers(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = tz.visibleInstances[zz._id],
          oz = Oz ? Oz.length : 0,
          vz = tz.parent,
          Uz = this._instanceDataStorage;
        let Kz = vz.instancesBuffer,
          uz = vz.instancesPreviousBuffer,
          Nz = 0,
          bz = 0;
        const wz = tz.renderSelf[zz._id],
          Dz = this._scene.floatingOriginOffset,
          gz = !Kz || sz !== vz.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !vz.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Uz.isFrozen && !gz) bz = (wz ? 1 : 0) + oz;
        else {
          const tz = this.getWorldMatrix();
          if (wz) {
            this._scene.needsPreviousWorldMatrices && (Uz.masterMeshPreviousWorldMatrix ? (Uz.masterMeshPreviousWorldMatrix.copyToArray(vz.instancesPreviousData, Nz), Uz.masterMeshPreviousWorldMatrix.vsz(tz)) : (Uz.masterMeshPreviousWorldMatrix = tz.clone(), Uz.masterMeshPreviousWorldMatrix.copyToArray(vz.instancesPreviousData, Nz))), tz.copyToArray(vz.instancesData, Nz);
            const zz = tz.hsz();
            vz.instancesData[Nz + 12] = zz[12] - Dz.x, vz.instancesData[Nz + 13] = zz[13] - Dz.y, vz.instancesData[Nz + 14] = zz[14] - Dz.z, Nz += 16, bz++
          }
          if (Oz) {
            if (pz.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && zz.vD()?.needAlphaBlendingForMesh(zz.getRenderingMesh())) {
              const zz = this._scene.activeCamera.globalPosition;
              for (let tz = 0; tz < Oz.length; tz++) {
                const sz = Oz[tz];
                sz._distanceToCamera = Jz.p.Distance(sz.rC().uFz.centerWorld, zz)
              }
              Oz.sort(((zz, tz) => zz._distanceToCamera > tz._distanceToCamera ? -1 : zz._distanceToCamera < tz._distanceToCamera ? 1 : 0))
            }
            for (let zz = 0; zz < Oz.length; zz++) {
              const tz = Oz[zz],
                sz = tz.getWorldMatrix();
              sz.copyToArray(vz.instancesData, Nz), this._scene.needsPreviousWorldMatrices && (tz._previousWorldMatrix ? (tz._previousWorldMatrix.copyToArray(vz.instancesPreviousData, Nz), tz._previousWorldMatrix.vsz(sz)) : (tz._previousWorldMatrix = sz.clone(), tz._previousWorldMatrix.copyToArray(vz.instancesPreviousData, Nz)));
              const Fz = sz.hsz();
              vz.instancesData[Nz + 12] = Fz[12] - Dz.x, vz.instancesData[Nz + 13] = Fz[13] - Dz.y, vz.instancesData[Nz + 14] = Fz[14] - Dz.z, Nz += 16, bz++
            }
          }
        }
        if (gz) {
          let zz;
          if (Kz && Kz.dispose(), uz && uz.dispose(), Kz = new ez.e(Fz, vz.instancesData, !0, 16, !1, !0), vz.instancesBuffer = Kz, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.FD().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) zz = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const tz = this._instanceDataStorage.engine.currentRenderPassId;
            zz = this._userInstancedBuffersStorage.renderPasses[tz], zz || (this._userInstancedBuffersStorage.renderPasses[tz] = zz = {})
          }
          zz.world0 = Kz.createVertexBuffer("world0", 0, 4), zz.world1 = Kz.createVertexBuffer("world1", 4, 4), zz.world2 = Kz.createVertexBuffer("world2", 8, 4), zz.world3 = Kz.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (uz = new ez.e(Fz, vz.instancesPreviousData, !0, 16, !1, !0), vz.instancesPreviousBuffer = uz, zz.previousWorld0 = uz.createVertexBuffer("previousWorld0", 0, 4), zz.previousWorld1 = uz.createVertexBuffer("previousWorld1", 4, 4), zz.previousWorld2 = uz.createVertexBuffer("previousWorld2", 8, 4), zz.previousWorld3 = uz.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Kz.updateDirectly(vz.instancesData, 0, bz), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || uz.updateDirectly(vz.instancesPreviousData, 0, bz));
        this._processInstancedBuffers(Oz, wz), Xz && void 0 !== Wz && (this.aJ()._activeIndices.addCount(zz.indexCount * bz, !1), Fz._currentDrawContext && (Fz._currentDrawContext.useInstancing = !0), this._bind(zz, Xz, Wz), this._draw(zz, Wz, bz)), !this._scene.needsPreviousWorldMatrices || gz || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || uz.updateDirectly(vz.instancesData, 0, bz)
      }
      _renderWithInstances(zz, tz, sz, Fz, Wz) {
        const Xz = sz.visibleInstances[zz._id],
          Oz = Xz ? Xz.length : 0,
          oz = sz.parent,
          vz = oz.instancesBufferSize,
          Uz = 16 * (Oz + 1) * 4;
        for (; oz.instancesBufferSize < Uz;) oz.instancesBufferSize *= 2;
        return oz.instancesData && vz == oz.instancesBufferSize || (oz.instancesData = new Float32Array(oz.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !oz.instancesPreviousData || vz != oz.instancesBufferSize) && (oz.instancesPreviousData = new Float32Array(oz.instancesBufferSize / 4)), this._updateInstancedBuffers(zz, sz, vz, Wz, tz, Fz), Wz.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(zz, tz, sz, Fz) {
        const Wz = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.aJ()._activeIndices.addCount(zz.indexCount * Wz, !1), Fz._currentDrawContext && (Fz._currentDrawContext.useInstancing = !0), this._bind(zz, sz, tz), this._draw(zz, tz, Wz), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Wz) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Fz.unbindInstanceAttributes()
      }
      _processInstancedBuffers(zz, tz) {}
      _processRendering(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = this.aJ(),
          Uz = vz.FD();
        if (Fz = this._getRenderingFillMode(Fz), Xz && tz.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(tz, Fz, sz, Uz), this;
        if (Xz) this._renderWithInstances(tz, Fz, Wz, sz, Uz);
        else {
          Uz._currentDrawContext && (Uz._currentDrawContext.useInstancing = !1);
          let sz = 0;
          Wz.renderSelf[tz._id] && (Oz && Oz(!1, zz.getWorldMatrix(), oz), sz++, this._draw(tz, Fz, this._instanceDataStorage.overridenInstanceCount));
          const Xz = Wz.visibleInstances[tz._id];
          if (Xz) {
            const zz = Xz.length;
            sz += zz;
            for (let sz = 0; sz < zz; sz++) {
              const zz = Xz[sz].getWorldMatrix();
              Oz && Oz(!0, zz, oz), this._draw(tz, Fz)
            }
          }
          vz._activeIndices.addCount(tz.indexCount * sz, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        zz?.instancesBuffer && (tz && zz.instancesBuffer.dispose(), zz.instancesBuffer = null), zz?.instancesPreviousBuffer && (tz && zz.instancesPreviousBuffer.dispose(), zz.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const tz in this._instanceDataStorage.renderPasses) {
          const sz = this._instanceDataStorage.renderPasses[tz];
          this._disposeInstanceDataStorageRenderPass(sz, zz)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, zz), this._userInstancedBuffersStorage) {
          for (const tz in this._userInstancedBuffersStorage.vertexBuffers) {
            const sz = this._userInstancedBuffersStorage.vertexBuffers[tz];
            sz && (zz && sz.dispose(), this._userInstancedBuffersStorage.vertexBuffers[tz] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(zz)
      }
      _releaseRenderPassId(zz) {
        const tz = this._instanceDataStorage.renderPasses[zz];
        if (tz && (this._disposeInstanceDataStorageRenderPass(tz, !0), delete this._instanceDataStorage.renderPasses[zz]), this._userInstancedBuffersStorage?.renderPasses) {
          const tz = this._userInstancedBuffersStorage.renderPasses[zz];
          if (tz)
            for (const zz in tz) tz[zz]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[zz]
        }
        const sz = this._userInstancedBuffersStorage?.interleavedBuffers;
        sz?.[zz] && (sz[zz].buffer.dispose(), delete sz[zz])
      }
      _freeze() {
        if (this.kY) {
          for (let zz = 0; zz < this.kY.length; zz++) this._getInstancesRenderList(zz);
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
      renderWithRenderPassId(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Xz = this._scene.FD(),
          Oz = Xz.currentRenderPassId;
        if (void 0 !== zz && (Xz.currentRenderPassId = zz), Fz)(!Wz || Wz && Fz.isInFrustum(this._scene._frustumPlanes)) && this.render(Fz, !!tz, sz);
        else
          for (let oz = 0; oz < this.kY.length; oz++) {
            const zz = this.kY[oz];
            (!Wz || Wz && zz.isInFrustum(this._scene._frustumPlanes)) && this.render(zz, !!tz, sz)
          }
        return void 0 !== zz && (Xz.currentRenderPassId = Oz), this
      }
      directRender() {
        if (!this.kY) return this;
        for (const zz of this.kY) this.render(zz, !1);
        return this
      }
      render(zz, tz, sz) {
        const Fz = this.aJ(),
          Wz = Fz.FD();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Xz = Fz.activeCameras?.length ?? 0,
          Oz = Xz > 1 && Fz.activeCamera === Fz.activeCameras[0] || Xz <= 1,
          oz = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Wz.currentRenderPassId;
        if (Oz && this._checkOcclusionQuery(oz) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const vz = this._getInstancesRenderList(zz._id, !!sz);
        if (vz.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Uz = 0,
          Kz = null;
        this.ignoreCameraMaxZ && Fz.activeCamera && !Fz._isInIntermediateRendering() && (Uz = Fz.activeCamera.maxZ, Kz = Fz.activeCamera, Fz.activeCamera.maxZ = 0, Fz.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const uz = zz.getRenderingMesh(),
          Nz = vz.hardwareInstancedRendering[zz._id] || uz.hasThinInstances || !!this._userInstancedBuffersStorage && !zz.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          bz = this._instanceDataStorage,
          wz = zz.vD();
        if (!wz) return Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), this;
        if (bz.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === wz) {
          if (wz._storeEffectOnSubMeshes && !zz._drawWrapper?._wasPreviouslyReady || !wz._storeEffectOnSubMeshes && !wz._getDrawWrapper()._wasPreviouslyReady) return Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), this
        } else {
          if (wz._storeEffectOnSubMeshes) {
            if (!wz.isReadyForSubMesh(this, zz, Nz)) return Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), this
          } else if (!wz.isReady(this, Nz)) return Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = wz
        }
        if (tz) {
          const zz = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === zz.alphaModes.length) Wz.setAlphaMode(zz.alphaMode);
          else
            for (let tz = 0; tz < zz.alphaModes.length; tz++) {
              const sz = zz.alphaModes[tz];
              Wz.setAlphaMode(void 0 !== sz ? sz : 2, !1, tz)
            }
        }
        let Dz;
        Dz = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? zz._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const gz = Dz?.effect ?? null;
        for (let mz = 0, Jz = Fz._beforeRenderingMeshStage; mz < Jz.length; mz++) {
          Jz[mz].action(this, zz, vz, gz)
        }
        if (!Dz || !gz) return Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), this;
        const Hz = sz || this;
        let Bz;
        if (!bz.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const zz = Hz._getWorldMatrixDeterminant();
          Bz = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), zz < 0 && (Bz = Bz === jz.b.ClockWiseSideOrientation ? jz.b.CounterClockWiseSideOrientation : jz.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Bz
        }
        const Pz = this._internalMeshDataInfo._effectiveMaterial._preBind(Dz, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Wz.setDepthWrite(!0);
        const rz = this._internalMeshDataInfo._effectiveMaterial,
          Yz = rz.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Nz || this._bind(zz, gz, Yz, !1);
        const xz = Hz.getWorldMatrix();
        rz._storeEffectOnSubMeshes ? rz.bindForSubMesh(xz, this, zz) : rz.bind(xz, this);
        try {
          Az.c._BindAttachmentsForEffect(Wz, gz) && (!rz.backFaceCulling && rz.separateCullingPass && (Wz.setState(!0, rz.zOffset, !1, !Pz, rz.cullBackFaces, rz.stencil, rz.zOffsetUnits), this._processRendering(this, zz, gz, Yz, vz, Nz, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Wz.setState(!0, rz.zOffset, !1, Pz, rz.cullBackFaces, rz.stencil, rz.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(zz)), this._processRendering(this, zz, gz, Yz, vz, Nz, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Az.c._RestoreAttachments(Wz)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let mz = 0, Jz = Fz._afterRenderingMeshStage; mz < Jz.length; mz++) {
          Jz[mz].action(this, zz, vz, gz)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Kz && (Kz.maxZ = Uz, Fz.updateTransformMatrix(!0)), 2 !== Fz.performancePriority || bz.isFrozen || this._freeze(), this
      }
      _renderRunFollower(zz, tz) {
        const sz = this._scene,
          Fz = sz._engine;
        if (Fz.isWebGPU || zz._mesh !== this || 0 !== this.instances.length || this.render !== pz.prototype.render) return !1;
        const Wz = zz.vD();
        if (!Wz || Wz !== sz._cachedMaterial || void 0 === Wz._canBindRunFollower) return !1;
        const Xz = zz._drawWrapper,
          Oz = Xz?.effect;
        if (!Oz || Oz !== sz._cachedEffect || this.visibility !== sz._cachedVisibility || Xz._forceRebindOnNextCall) return !1;
        const oz = this.hasThinInstances;
        if (!oz && this._userInstancedBuffersStorage) return !1;
        if (!Xz._wasPreviouslyReady || Xz._wasPreviouslyUsingInstances !== oz) return !1;
        const vz = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || sz._isInIntermediateRendering() || 0 !== sz._beforeRenderingMeshStage.length || 0 !== sz._afterRenderingMeshStage.length || vz._onBeforeRenderObservable?.hasObservers() || vz._onBeforeBindObservable?.hasObservers() || vz._onAfterRenderObservable?.hasObservers()) return !1;
        const Uz = this.occlusionType;
        if (void 0 !== Uz && Uz !== Tz.b.OCCLUSION_TYPE_NONE || !Wz._canBindRunFollower(sz, Fz, this, zz, Oz)) return !1;
        const Kz = this._internalAbstractMeshDataInfo,
          uz = Kz._isActiveIntermediate;
        uz ? Kz._isActiveIntermediate = !1 : Kz._isActive = !1;
        const Nz = sz.activeCameras?.length ?? 0;
        (Nz > 1 && sz.activeCamera === sz.activeCameras[0] || Nz <= 1) && this._checkOcclusionQuery(!1);
        const bz = this._getInstancesRenderList(zz._id);
        if (bz.mustReturn) return !0;
        if (!oz && !bz.renderSelf[zz._id]) return uz ? Kz._isActiveIntermediate = !0 : Kz._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (vz._effectiveMaterial = Wz, tz)
          if (1 === Wz.alphaModes.length) Fz.setAlphaMode(Wz.alphaMode);
          else
            for (let Dz = 0; Dz < Wz.alphaModes.length; Dz++) {
              const zz = Wz.alphaModes[Dz];
              Fz.setAlphaMode(void 0 !== zz ? zz : 2, !1, Dz)
            }
        if (Wz.backFaceCulling || null !== Wz.sideOrientation || Wz._twoSidedLighting) {
          const zz = this._getWorldMatrixDeterminant();
          let tz = Wz._getEffectiveOrientation(this);
          zz < 0 && (tz = tz === jz.b.ClockWiseSideOrientation ? jz.b.CounterClockWiseSideOrientation : jz.b.ClockWiseSideOrientation), vz._effectiveSideOrientation = tz
        }
        Wz._preBind(Xz, vz._effectiveSideOrientation), Wz.forceDepthWrite && Fz.setDepthWrite(!0);
        const wz = Wz.fillMode;
        return oz || this._bind(zz, Oz, wz, !1), Wz._bindRunFollower(this.getWorldMatrix(), this, zz, Oz), this._processRendering(this, zz, Oz, wz, bz, oz, this._onBeforeDraw, Wz), Wz.unbind(), 2 === sz.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(ez.m.MatricesWeightsKind) && (this.isVerticesDataPresent(ez.m.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const zz = this.getVerticesData(ez.m.MatricesWeightsKind),
          tz = zz.length;
        for (let sz = 0; sz < tz; sz += 4) {
          const tz = zz[sz] + zz[sz + 1] + zz[sz + 2] + zz[sz + 3];
          if (0 === tz) zz[sz] = 1;
          else {
            const Fz = 1 / tz;
            zz[sz] *= Fz, zz[sz + 1] *= Fz, zz[sz + 2] *= Fz, zz[sz + 3] *= Fz
          }
        }
        this.setVerticesData(ez.m.MatricesWeightsKind, zz)
      }
      _normalizeSkinWeightsAndExtra() {
        const zz = this.getVerticesData(ez.m.MatricesWeightsExtraKind),
          tz = this.getVerticesData(ez.m.MatricesWeightsKind),
          sz = tz.length;
        for (let Fz = 0; Fz < sz; Fz += 4) {
          let sz = tz[Fz] + tz[Fz + 1] + tz[Fz + 2] + tz[Fz + 3];
          if (sz += zz[Fz] + zz[Fz + 1] + zz[Fz + 2] + zz[Fz + 3], 0 === sz) tz[Fz] = 1;
          else {
            const Wz = 1 / sz;
            tz[Fz] *= Wz, tz[Fz + 1] *= Wz, tz[Fz + 2] *= Wz, tz[Fz + 3] *= Wz, zz[Fz] *= Wz, zz[Fz + 1] *= Wz, zz[Fz + 2] *= Wz, zz[Fz + 3] *= Wz
          }
        }
        this.setVerticesData(ez.m.MatricesWeightsKind, tz), this.setVerticesData(ez.m.MatricesWeightsKind, zz)
      }
      validateSkinning() {
        const zz = this.getVerticesData(ez.m.MatricesWeightsExtraKind),
          tz = this.getVerticesData(ez.m.MatricesWeightsKind);
        if (null === tz || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Iw: "not skinned"
        };
        const sz = tz.length;
        let Fz = 0,
          Wz = 0,
          Xz = 0,
          Oz = 0;
        const oz = null === zz ? 4 : 8,
          vz = [];
        for (let bz = 0; bz <= oz; bz++) vz[bz] = 0;
        for (let bz = 0; bz < sz; bz += 4) {
          let sz = tz[bz],
            Uz = sz,
            Kz = 0 === Uz ? 0 : 1;
          for (let Wz = 1; Wz < oz; Wz++) {
            const Xz = Wz < 4 ? tz[bz + Wz] : zz[bz + Wz - 4];
            Xz > sz && Fz++, 0 !== Xz && Kz++, Uz += Xz, sz = Xz
          }
          if (vz[Kz]++, Kz > Xz && (Xz = Kz), 0 === Uz) Wz++;
          else {
            const sz = 1 / Uz;
            let Fz = 0;
            for (let Wz = 0; Wz < oz; Wz++) Fz += Wz < 4 ? Math.abs(tz[bz + Wz] - tz[bz + Wz] * sz) : Math.abs(zz[bz + Wz - 4] - zz[bz + Wz - 4] * sz);
            Fz > .001 && Oz++
          }
        }
        const Uz = this.skeleton.bones.length,
          Kz = this.getVerticesData(ez.m.MatricesIndicesKind),
          uz = this.getVerticesData(ez.m.MatricesIndicesExtraKind);
        let Nz = 0;
        for (let bz = 0; bz < sz; bz += 4)
          for (let zz = 0; zz < oz; zz++) {
            const tz = zz < 4 ? Kz[bz + zz] : uz[bz + zz - 4];
            (tz >= Uz || tz < 0) && Nz++
          }
        return {
          skinned: !0,
          valid: 0 === Wz && 0 === Oz && 0 === Nz,
          Iw: "Number of Weights = " + sz / 4 + "\nMaximum influences = " + Xz + "\nMissing Weights = " + Wz + "\nNot Sorted = " + Fz + "\nNot Normalized = " + Oz + "\nWeightCounts = [" + vz + "]\nNumber of bones = " + Uz + "\nBad Bone Indices = " + Nz
        }
      }
      _checkDelayState() {
        const zz = this.aJ();
        return this._geometry ? this._geometry.load(zz) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(zz)), this
      }
      _queueLoad(zz) {
        zz.addPendingData(this);
        const tz = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const sz = await zz._loadDelayedFileAsync(this.delayLoadingFile, tz, !0);
            sz instanceof ArrayBuffer ? this._delayLoadingFunction(sz, this) : this._delayLoadingFunction(JSON.parse(sz), this);
            for (const zz of this.instances) zz.refreshBoundingInfo(), zz._syncSubMeshes();
            this.delayLoadState = 1, zz.removePendingData(this)
          } catch (sz) {
            zz.removePendingData(this), zz.zsz || hz.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${sz}`)
          }
        })(), this
      }
      isInFrustum(zz) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(zz) && (this._checkDelayState(), !0))
      }
      setMaterialById(zz) {
        const tz = this.aJ().materials;
        let sz;
        for (sz = tz.length - 1; sz > -1; sz--)
          if (tz[sz].id === zz) return this.material = tz[sz], this;
        const Fz = this.aJ().multiMaterials;
        for (sz = Fz.length - 1; sz > -1; sz--)
          if (Fz[sz].id === zz) return this.material = Fz[sz], this;
        return this
      }
      getAnimatables() {
        const zz = [];
        return this.material && zz.push(this.material), this.skeleton && zz.push(this.skeleton), zz
      }
      bakeTransformIntoVertices(zz) {
        if (!this.isVerticesDataPresent(ez.m.PositionKind)) return this;
        const tz = this.kY.splice(0);
        this._resetPointsArrayCache();
        let sz = this.getVerticesData(ez.m.PositionKind);
        const Fz = Jz.p.Zero();
        let Wz;
        for (Wz = 0; Wz < sz.length; Wz += 3) Jz.p.TransformCoordinatesFromFloatsToRef(sz[Wz], sz[Wz + 1], sz[Wz + 2], zz, Fz).toArray(sz, Wz);
        if (this.setVerticesData(ez.m.PositionKind, sz, this.getVertexBuffer(ez.m.PositionKind).isUpdatable()), this.isVerticesDataPresent(ez.m.NormalKind)) {
          for (sz = this.getVerticesData(ez.m.NormalKind), Wz = 0; Wz < sz.length; Wz += 3) Jz.p.TransformNormalFromFloatsToRef(sz[Wz], sz[Wz + 1], sz[Wz + 2], zz, Fz).normalize().toArray(sz, Wz);
          this.setVerticesData(ez.m.NormalKind, sz, this.getVertexBuffer(ez.m.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(ez.m.TangentKind)) {
          for (sz = this.getVerticesData(ez.m.TangentKind), Wz = 0; Wz < sz.length; Wz += 4) Jz.p.TransformNormalFromFloatsToRef(sz[Wz], sz[Wz + 1], sz[Wz + 2], zz, Fz).normalize().toArray(sz, Wz);
          this.setVerticesData(ez.m.TangentKind, sz, this.getVertexBuffer(ez.m.TangentKind).isUpdatable())
        }
        return zz.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.kY = tz, this
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
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (tz && void 0 === tz._addToSceneRootNodes) {
          const sz = tz;
          return Rz.source = this, Rz.doNotCloneChildren = sz.doNotCloneChildren, Rz.clonePhysicsImpostor = sz.clonePhysicsImpostor, Rz.cloneThinInstances = sz.cloneThinInstances, new pz(zz, this.aJ(), Rz)
        }
        return new pz(zz, this.aJ(), tz, this, sz, Fz)
      }
      dispose(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const sz = this._internalMeshDataInfo;
        if (sz._onBeforeDrawObservable && sz._onBeforeDrawObservable.clear(), sz._onBeforeBindObservable && sz._onBeforeBindObservable.clear(), sz._onBeforeRenderObservable && sz._onBeforeRenderObservable.clear(), sz._onAfterRenderObservable && sz._onAfterRenderObservable.clear(), sz._onBetweenPassObservable && sz._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (sz.meshMap)
            for (const zz in sz.meshMap) {
              const tz = sz.meshMap[zz];
              tz && (tz._internalMeshDataInfo._source = null, sz.meshMap[zz] = void 0)
            }
          sz._source && sz._source._internalMeshDataInfo.meshMap && (sz._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const zz = this.aJ().meshes;
          for (const tz of zz) {
            const zz = tz;
            zz._internalMeshDataInfo && zz._internalMeshDataInfo._source && zz._internalMeshDataInfo._source === this && (zz._internalMeshDataInfo._source = null)
          }
        }
        sz._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(zz, tz)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oz = arguments.length > 7 ? arguments[7] : void 0;
        const vz = this.aJ();
        return (0, Pz.p)(zz, (zz => {
          const oz = zz.width,
            vz = zz.height,
            Uz = this.FD().createCanvas(oz, vz).getContext("2d");
          Uz.drawImage(zz, 0, 0);
          const Kz = Uz.getImageData(0, 0, oz, vz).data;
          this.applyDisplacementMapFromBuffer(Kz, oz, vz, tz, sz, Wz, Xz, Oz), Fz && Fz(this)
        }), oz || (() => {}), vz.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(ez.m.PositionKind) || !this.isVerticesDataPresent(ez.m.NormalKind) || !this.isVerticesDataPresent(ez.m.UVKind)) return hz.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const vz = this.getVerticesData(ez.m.PositionKind, !0, !0),
          Uz = this.getVerticesData(ez.m.NormalKind),
          Kz = this.getVerticesData(ez.m.UVKind);
        let uz = Jz.p.Zero();
        const Nz = Jz.p.Zero(),
          bz = Jz.n.Zero();
        Xz = Xz || Jz.n.Zero(), Oz = Oz || new Jz.n(1, 1);
        for (let wz = 0; wz < vz.length; wz += 3) {
          Jz.p.FromArrayToRef(vz, wz, uz), Jz.p.FromArrayToRef(Uz, wz, Nz), Jz.n.FromArrayToRef(Kz, wz / 3 * 2, bz);
          const oz = 4 * ((Math.abs(bz.x * Oz.x + Xz.x % 1) * (tz - 1) % tz | 0) + (Math.abs(bz.y * Oz.y + Xz.y % 1) * (sz - 1) % sz | 0) * tz),
            Dz = .3 * (zz[oz] / 255) + .59 * (zz[oz + 1] / 255) + .11 * (zz[oz + 2] / 255);
          Nz.normalize(), Nz.scaleInPlace(Fz + (Wz - Fz) * Dz), uz = uz.add(Nz), uz.toArray(vz, wz)
        }
        return Zz.b.ComputeNormals(vz, this.Qsz(), Uz), oz ? (this.setVerticesData(ez.m.PositionKind, vz), this.setVerticesData(ez.m.NormalKind, Uz), this.setVerticesData(ez.m.UVKind, Kz)) : (this.updateVerticesData(ez.m.PositionKind, vz), this.updateVerticesData(ez.m.NormalKind, Uz)), this
      }
      _getFlattenedNormals(zz, tz) {
        const sz = new Float32Array(3 * zz.length);
        let Fz = 0;
        const Wz = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Xz = 0; Xz < zz.length; Xz += 3) {
          const Oz = Jz.p.FromArray(tz, 3 * zz[Xz]),
            oz = Jz.p.FromArray(tz, 3 * zz[Xz + 1]),
            vz = Jz.p.FromArray(tz, 3 * zz[Xz + 2]),
            Uz = Oz.subtract(oz),
            Kz = vz.subtract(oz),
            uz = Jz.p.Normalize(Jz.p.Cross(Uz, Kz));
          Wz && uz.scaleInPlace(-1);
          for (let zz = 0; zz < 3; zz++) sz[Fz++] = uz.x, sz[Fz++] = uz.y, sz[Fz++] = uz.z
        }
        return sz
      }
      _convertToUnIndexedMesh() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = this.getVerticesDataKinds().filter((zz => !this.getVertexBuffer(zz)?.getIsInstanced())),
          sz = this.Qsz(!1, !0),
          Fz = {},
          Wz = (zz, tz) => {
            const Fz = new Float32Array(sz.length * tz);
            let Wz = 0;
            for (let Xz = 0; Xz < sz.length; Xz++)
              for (let Oz = 0; Oz < tz; Oz++) Fz[Wz++] = zz[sz[Xz] * tz + Oz];
            return Fz
          },
          Xz = this.rC(),
          Oz = this.geometry ? this.kY.slice(0) : [];
        for (const oz of tz) Fz[oz] = this.getVerticesData(oz);
        for (const oz of tz) {
          const tz = this.getVertexBuffer(oz),
            Xz = tz.getSize();
          if (zz && oz === ez.m.NormalKind) {
            const zz = this._getFlattenedNormals(sz, Fz[ez.m.PositionKind]);
            this.setVerticesData(ez.m.NormalKind, zz, tz.isUpdatable(), Xz)
          } else this.setVerticesData(oz, Wz(Fz[oz], Xz), tz.isUpdatable(), Xz)
        }
        if (this.morphTargetManager) {
          for (let tz = 0; tz < this.morphTargetManager.numTargets; tz++) {
            const Fz = this.morphTargetManager.getTarget(tz),
              Xz = Fz.getPositions();
            Fz.bOz(Wz(Xz, 3));
            const Oz = Fz.getNormals();
            Oz && Fz.setNormals(zz ? this._getFlattenedNormals(sz, Xz) : Wz(Oz, 3));
            const oz = Fz.getTangents();
            oz && Fz.setTangents(Wz(oz, 3));
            const vz = Fz.getUVs();
            vz && Fz.setUVs(Wz(vz, 2));
            const Uz = Fz.getColors();
            Uz && Fz.setColors(Wz(Uz, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let oz = 0; oz < sz.length; oz++) sz[oz] = oz;
        this.setIndices(sz), this._unIndexed = !0, this.releaseSubMeshes();
        for (const oz of Oz) {
          const zz = oz.rC();
          cz.c.AddToMesh(oz.materialIndex, oz.indexStart, oz.indexCount, oz.indexStart, oz.indexCount, this).setBoundingInfo(zz)
        }
        return this.setBoundingInfo(Xz), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = Zz.b.ExtractFromMesh(this);
        let sz;
        if (zz && this.isVerticesDataPresent(ez.m.NormalKind) && tz.normals) {
          for (sz = 0; sz < tz.normals.length; sz++) tz.normals[sz] *= -1;
          this.setVerticesData(ez.m.NormalKind, tz.normals, this.isVertexBufferUpdatable(ez.m.NormalKind))
        }
        if (tz.indices) {
          let zz;
          for (sz = 0; sz < tz.indices.length; sz += 3) zz = tz.indices[sz + 1], tz.indices[sz + 1] = tz.indices[sz + 2], tz.indices[sz + 2] = zz;
          this.setIndices(tz.indices, null, this.isVertexBufferUpdatable(ez.m.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const tz = Zz.b.ExtractFromMesh(this),
          sz = tz.indices && !Array.isArray(tz.indices) && Array.from ? Array.from(tz.indices) : tz.indices,
          Fz = tz.positions && !Array.isArray(tz.positions) && Array.from ? Array.from(tz.positions) : tz.positions,
          Wz = tz.uvs && !Array.isArray(tz.uvs) && Array.from ? Array.from(tz.uvs) : tz.uvs,
          Xz = tz.normals && !Array.isArray(tz.normals) && Array.from ? Array.from(tz.normals) : tz.normals;
        if (sz && Fz) {
          tz.indices = sz, tz.positions = Fz, Wz && (tz.uvs = Wz), Xz && (tz.normals = Xz);
          const Oz = zz + 1,
            oz = [];
          for (let zz = 0; zz < Oz + 1; zz++) oz[zz] = [];
          let vz, Uz;
          const Kz = new Jz.p(0, 0, 0),
            uz = new Jz.p(0, 0, 0),
            Nz = new Jz.n(0, 0),
            bz = [],
            wz = [],
            Dz = [];
          let gz, Hz, Bz, Pz = Fz.length;
          Wz && (Hz = Wz.length), Xz && (Bz = Xz.length);
          for (let zz = 0; zz < sz.length; zz += 3) {
            wz[0] = sz[zz], wz[1] = sz[zz + 1], wz[2] = sz[zz + 2];
            for (let zz = 0; zz < 3; zz++)
              if (vz = wz[zz], Uz = wz[(zz + 1) % 3], void 0 === Dz[vz] && void 0 === Dz[Uz] ? (Dz[vz] = [], Dz[Uz] = []) : (void 0 === Dz[vz] && (Dz[vz] = []), void 0 === Dz[Uz] && (Dz[Uz] = [])), void 0 === Dz[vz][Uz] && void 0 === Dz[Uz][vz]) {
                Dz[vz][Uz] = [], Kz.x = (Fz[3 * Uz] - Fz[3 * vz]) / Oz, Kz.y = (Fz[3 * Uz + 1] - Fz[3 * vz + 1]) / Oz, Kz.z = (Fz[3 * Uz + 2] - Fz[3 * vz + 2]) / Oz, Xz && (uz.x = (Xz[3 * Uz] - Xz[3 * vz]) / Oz, uz.y = (Xz[3 * Uz + 1] - Xz[3 * vz + 1]) / Oz, uz.z = (Xz[3 * Uz + 2] - Xz[3 * vz + 2]) / Oz), Wz && (Nz.x = (Wz[2 * Uz] - Wz[2 * vz]) / Oz, Nz.y = (Wz[2 * Uz + 1] - Wz[2 * vz + 1]) / Oz), Dz[vz][Uz].push(vz);
                for (let zz = 1; zz < Oz; zz++) Dz[vz][Uz].push(Fz.length / 3), Fz[Pz++] = Fz[3 * vz] + zz * Kz.x, Fz[Pz++] = Fz[3 * vz + 1] + zz * Kz.y, Fz[Pz++] = Fz[3 * vz + 2] + zz * Kz.z, Xz && (Xz[Bz++] = Xz[3 * vz] + zz * uz.x, Xz[Bz++] = Xz[3 * vz + 1] + zz * uz.y, Xz[Bz++] = Xz[3 * vz + 2] + zz * uz.z), Wz && (Wz[Hz++] = Wz[2 * vz] + zz * Nz.x, Wz[Hz++] = Wz[2 * vz + 1] + zz * Nz.y);
                Dz[vz][Uz].push(Uz), Dz[Uz][vz] = [], gz = Dz[vz][Uz].length;
                for (let zz = 0; zz < gz; zz++) Dz[Uz][vz][zz] = Dz[vz][Uz][gz - 1 - zz]
              } oz[0][0] = sz[zz], oz[1][0] = Dz[sz[zz]][sz[zz + 1]][1], oz[1][1] = Dz[sz[zz]][sz[zz + 2]][1];
            for (let tz = 2; tz < Oz; tz++) {
              oz[tz][0] = Dz[sz[zz]][sz[zz + 1]][tz], oz[tz][tz] = Dz[sz[zz]][sz[zz + 2]][tz], Kz.x = (Fz[3 * oz[tz][tz]] - Fz[3 * oz[tz][0]]) / tz, Kz.y = (Fz[3 * oz[tz][tz] + 1] - Fz[3 * oz[tz][0] + 1]) / tz, Kz.z = (Fz[3 * oz[tz][tz] + 2] - Fz[3 * oz[tz][0] + 2]) / tz, Xz && (uz.x = (Xz[3 * oz[tz][tz]] - Xz[3 * oz[tz][0]]) / tz, uz.y = (Xz[3 * oz[tz][tz] + 1] - Xz[3 * oz[tz][0] + 1]) / tz, uz.z = (Xz[3 * oz[tz][tz] + 2] - Xz[3 * oz[tz][0] + 2]) / tz), Wz && (Nz.x = (Wz[2 * oz[tz][tz]] - Wz[2 * oz[tz][0]]) / tz, Nz.y = (Wz[2 * oz[tz][tz] + 1] - Wz[2 * oz[tz][0] + 1]) / tz);
              for (let zz = 1; zz < tz; zz++) oz[tz][zz] = Fz.length / 3, Fz[Pz++] = Fz[3 * oz[tz][0]] + zz * Kz.x, Fz[Pz++] = Fz[3 * oz[tz][0] + 1] + zz * Kz.y, Fz[Pz++] = Fz[3 * oz[tz][0] + 2] + zz * Kz.z, Xz && (Xz[Bz++] = Xz[3 * oz[tz][0]] + zz * uz.x, Xz[Bz++] = Xz[3 * oz[tz][0] + 1] + zz * uz.y, Xz[Bz++] = Xz[3 * oz[tz][0] + 2] + zz * uz.z), Wz && (Wz[Hz++] = Wz[2 * oz[tz][0]] + zz * Nz.x, Wz[Hz++] = Wz[2 * oz[tz][0] + 1] + zz * Nz.y)
            }
            oz[Oz] = Dz[sz[zz + 1]][sz[zz + 2]], bz.push(oz[0][0], oz[1][0], oz[1][1]);
            for (let zz = 1; zz < Oz; zz++) {
              let tz;
              for (tz = 0; tz < zz; tz++) bz.push(oz[zz][tz], oz[zz + 1][tz], oz[zz + 1][tz + 1]), bz.push(oz[zz][tz], oz[zz + 1][tz + 1], oz[zz][tz + 1]);
              bz.push(oz[zz][tz], oz[zz + 1][tz], oz[zz + 1][tz + 1])
            }
          }
          tz.indices = bz, tz.applyToMesh(this, this.isVertexBufferUpdatable(ez.m.PositionKind))
        } else hz.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const zz = Zz.b.ExtractFromMesh(this),
          tz = zz.uvs,
          sz = zz.indices,
          Fz = zz.positions,
          Wz = zz.colors,
          Xz = zz.matricesIndices,
          Oz = zz.matricesWeights,
          oz = zz.matricesIndicesExtra,
          vz = zz.matricesWeightsExtra;
        if (void 0 === sz || void 0 === Fz || null === sz || null === Fz) hz.e.Warn("VertexData contains empty entries");
        else {
          const Uz = [],
            Kz = [],
            uz = [],
            Nz = [],
            bz = [],
            wz = [],
            Dz = [],
            gz = [];
          let Hz, Bz = 0;
          const Pz = {};
          let rz, Yz;
          for (let zz = 0; zz < sz.length; zz += 3) {
            Yz = [sz[zz], sz[zz + 1], sz[zz + 2]], Hz = [];
            for (let zz = 0; zz < 3; zz++) {
              Hz[zz] = "";
              for (let tz = 0; tz < 3; tz++) Math.abs(Fz[3 * Yz[zz] + tz]) < 1e-8 && (Fz[3 * Yz[zz] + tz] = 0), Hz[zz] += Fz[3 * Yz[zz] + tz] + "|"
            }
            if (Hz[0] != Hz[1] && Hz[0] != Hz[2] && Hz[1] != Hz[2])
              for (let zz = 0; zz < 3; zz++) {
                if (rz = Pz[Hz[zz]], void 0 === rz) {
                  Pz[Hz[zz]] = Bz, rz = Bz++;
                  for (let tz = 0; tz < 3; tz++) Uz.push(Fz[3 * Yz[zz] + tz]);
                  if (null !== Wz && void 0 !== Wz)
                    for (let tz = 0; tz < 4; tz++) Nz.push(Wz[4 * Yz[zz] + tz]);
                  if (null !== tz && void 0 !== tz)
                    for (let sz = 0; sz < 2; sz++) uz.push(tz[2 * Yz[zz] + sz]);
                  if (null !== Xz && void 0 !== Xz)
                    for (let tz = 0; tz < 4; tz++) bz.push(Xz[4 * Yz[zz] + tz]);
                  if (null !== Oz && void 0 !== Oz)
                    for (let tz = 0; tz < 4; tz++) wz.push(Oz[4 * Yz[zz] + tz]);
                  if (null !== oz && void 0 !== oz)
                    for (let tz = 0; tz < 4; tz++) Dz.push(oz[4 * Yz[zz] + tz]);
                  if (null !== vz && void 0 !== vz)
                    for (let tz = 0; tz < 4; tz++) gz.push(vz[4 * Yz[zz] + tz])
                }
                Kz.push(rz)
              }
          }
          const xz = [];
          Zz.b.ComputeNormals(Uz, Kz, xz), zz.positions = Uz, zz.indices = Kz, zz.normals = xz, null !== tz && void 0 !== tz && (zz.uvs = uz), null !== Wz && void 0 !== Wz && (zz.colors = Nz), null !== Xz && void 0 !== Xz && (zz.matricesIndices = bz), null !== Oz && void 0 !== Oz && (zz.matricesWeights = wz), null !== oz && void 0 !== oz && (zz.matricesIndicesExtra = Dz), null !== Oz && void 0 !== Oz && (zz.matricesWeightsExtra = gz), zz.applyToMesh(this, this.isVertexBufferUpdatable(ez.m.PositionKind))
        }
      }
      static _instancedMeshFactory(zz, tz) {
        throw (0, kz.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(zz, tz, sz) {
        throw (0, kz.i)("PhysicsImpostor")
      }
      createInstance(zz) {
        const tz = pz._instancedMeshFactory(zz, this);
        return tz.parent = this.parent, tz
      }
      synchronizeInstances() {
        for (let zz = 0; zz < this.instances.length; zz++) {
          this.instances[zz]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(zz) {
        const tz = this.Qsz(),
          sz = this.getVerticesData(ez.m.PositionKind);
        if (!sz || !tz) return this;
        const Fz = [];
        for (let Xz = 0; Xz < sz.length; Xz += 3) Fz.push(Jz.p.FromArray(sz, Xz));
        const Wz = [];
        return Bz.e.SyncAsyncForLoop(Fz.length, 40, (zz => {
          const tz = Fz.length - 1 - zz,
            sz = Fz[tz];
          for (let Xz = 0; Xz < tz; ++Xz) {
            const zz = Fz[Xz];
            if (sz.equals(zz)) {
              Wz[tz] = Xz;
              break
            }
          }
        }), (() => {
          for (let zz = 0; zz < tz.length; ++zz) tz[zz] = Wz[tz[zz]] || tz[zz];
          const sz = this.kY.slice(0);
          this.setIndices(tz), this.kY = sz, zz && zz(this)
        })), this
      }
      serialize() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        zz.name = this.name, zz.id = this.id, zz.uniqueId = this.uniqueId, zz.type = this.getClassName(), Yz.e && Yz.e.HasTags(this) && (zz.tags = Yz.e.GetTags(this)), zz.position = this.position.hsz(), this.rotationQuaternion ? zz.rotationQuaternion = this.rotationQuaternion.hsz() : this.rotation && (zz.rotation = this.rotation.hsz()), zz.nX = this.nX.hsz(), this._postMultiplyPivotMatrix ? zz.pivotMatrix = this.getPivotMatrix().hsz() : zz.localMatrix = this.getPivotMatrix().hsz(), zz.isEnabled = this.isEnabled(!1), zz.isVisible = this.isVisible, zz.infiniteDistance = this.infiniteDistance, zz.pickable = this.Ng, zz.receiveShadows = this.receiveShadows, zz.billboardMode = this.billboardMode, zz.visibility = this.visibility, zz.WD = this.WD, zz.checkCollisions = this.checkCollisions, zz.ellipsoid = this.ellipsoid.hsz(), zz.ellipsoidOffset = this.ellipsoidOffset.hsz(), zz.oD = this.oD, zz.isBlocker = this.isBlocker, zz.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (zz.HI = !0), this.parent && this.parent._serializeAsParent(zz), zz.isUnIndexed = this.isUnIndexed;
        const tz = this._geometry;
        if (tz && this.kY) {
          zz.geometryUniqueId = tz.uniqueId, zz.geometryId = tz.id, zz.kY = [];
          for (let tz = 0; tz < this.kY.length; tz++) {
            const sz = this.kY[tz];
            zz.kY.push({
              materialIndex: sz.materialIndex,
              verticesStart: sz.verticesStart,
              verticesCount: sz.verticesCount,
              indexStart: sz.indexStart,
              indexCount: sz.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (zz.materialUniqueId = this.material.uniqueId, zz.materialId = this.material.id) : (this.material = null, zz.materialUniqueId = this._scene.defaultMaterial.uniqueId, zz.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (zz.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (zz.skeletonId = this.skeleton.id, zz.skeletonUniqueId = this.skeleton.uniqueId, zz.numBoneInfluencers = this.numBoneInfluencers), this.aJ()._getComponent(iz.e.NAME_PHYSICSENGINE)) {
          const tz = this.getPhysicsImpostor?.();
          tz && (zz.physicsMass = tz.getParam("wo"), zz.physicsFriction = tz.getParam("friction"), zz.physicsRestitution = tz.getParam("wo"), zz.physicsImpostor = tz.type)
        }
        this.metadata && (zz.metadata = this.metadata), 0 !== this.meshBlendingTag && (zz.meshBlendingTag = this.meshBlendingTag), zz.instances = [];
        for (let sz = 0; sz < this.instances.length; sz++) {
          const tz = this.instances[sz];
          if (tz.doNotSerialize) continue;
          const Fz = {
            name: tz.name,
            id: tz.id,
            isEnabled: tz.isEnabled(!1),
            isVisible: tz.isVisible,
            Ng: tz.Ng,
            checkCollisions: tz.checkCollisions,
            position: tz.position.hsz(),
            nX: tz.nX.hsz()
          };
          if (tz.parent && tz.parent._serializeAsParent(Fz), tz.rotationQuaternion ? Fz.rotationQuaternion = tz.rotationQuaternion.hsz() : tz.rotation && (Fz.rotation = tz.rotation.hsz()), this.aJ()._getComponent(iz.e.NAME_PHYSICSENGINE)) {
            const zz = tz.getPhysicsImpostor?.();
            zz && (Fz.physicsMass = zz.getParam("wo"), Fz.physicsFriction = zz.getParam("friction"), Fz.physicsRestitution = zz.getParam("wo"), Fz.physicsImpostor = zz.type)
          }
          tz.metadata && (Fz.metadata = tz.metadata), tz.actionManager && (Fz.actions = tz.actionManager.serialize(tz.name)), zz.instances.push(Fz), dz.e.AppendSerializedAnimations(tz, Fz), Fz.du = tz.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (zz.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Wtz
          }, this._userThinInstanceBuffersStorage)) {
          const tz = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const zz in this._userThinInstanceBuffersStorage.data) tz.data[zz] = Array.from(this._userThinInstanceBuffersStorage.data[zz]), tz.sizes[zz] = this._userThinInstanceBuffersStorage.sizes[zz], tz.strides[zz] = this._userThinInstanceBuffersStorage.strides[zz];
          zz.thinInstances.userThinInstance = tz
        }
        return dz.e.AppendSerializedAnimations(this, zz), zz.du = this.serializeAnimationRanges(), zz.layerMask = this.layerMask, zz.alphaIndex = this.alphaIndex, zz.hasVertexAlpha = this.hasVertexAlpha, zz.overlayAlpha = this.overlayAlpha, zz.overlayColor = this.overlayColor.hsz(), zz.renderOverlay = this.renderOverlay, zz.applyFog = this.applyFog, this.actionManager && (zz.actions = this.actionManager.serialize(this.name)), zz
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const zz = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (zz && zz.vertexCount) {
          if (zz.vertexCount !== this.getTotalVertices()) return hz.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (zz.isUsingTextureForTargets) return;
          for (let tz = 0; tz < zz.numInfluencers; tz++) {
            const sz = zz.getActiveTarget(tz),
              Fz = sz.getPositions();
            if (!Fz) return void hz.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(ez.m.PositionKind + tz, Fz, !1, 3);
            const Wz = sz.getNormals();
            Wz && this.geometry.setVerticesData(ez.m.NormalKind + tz, Wz, !1, 3);
            const Xz = sz.getTangents();
            Xz && this.geometry.setVerticesData(ez.m.TangentKind + tz, Xz, !1, 3);
            const Oz = sz.getUVs();
            Oz && this.geometry.setVerticesData(ez.m.UVKind + "_" + tz, Oz, !1, 2);
            const oz = sz.getUV2s();
            oz && this.geometry.setVerticesData(ez.m.UV2Kind + "_" + tz, oz, !1, 2);
            const vz = sz.getColors();
            vz && this.geometry.setVerticesData(ez.m.ColorKind + tz, vz, !1, 4)
          }
        } else {
          let zz = 0;
          for (; this.geometry.isVerticesDataPresent(ez.m.PositionKind + zz);) this.geometry.removeVerticesData(ez.m.PositionKind + zz), this.geometry.isVerticesDataPresent(ez.m.NormalKind + zz) && this.geometry.removeVerticesData(ez.m.NormalKind + zz), this.geometry.isVerticesDataPresent(ez.m.TangentKind + zz) && this.geometry.removeVerticesData(ez.m.TangentKind + zz), this.geometry.isVerticesDataPresent(ez.m.UVKind + "_" + zz) && this.geometry.removeVerticesData(ez.m.UVKind + "_" + zz), this.geometry.isVerticesDataPresent(ez.m.UV2Kind + "_" + zz) && this.geometry.removeVerticesData(ez.m.UV2Kind + "_" + zz), this.geometry.isVerticesDataPresent(ez.m.ColorKind + zz) && this.geometry.removeVerticesData(ez.m.ColorKind + zz), zz++
        }
      }
      static Parse(zz, tz, sz) {
        let Fz, Wz = !1;
        if (zz.type && "LinesMesh" === zz.type ? Fz = pz._LinesMeshParser(zz, tz) : zz.type && "GroundMesh" === zz.type ? Fz = pz._GroundMeshParser(zz, tz) : zz.type && "GoldbergMesh" === zz.type ? Fz = pz._GoldbergMeshParser(zz, tz) : zz.type && "GreasedLineMesh" === zz.type ? Fz = pz._GreasedLineMeshParser(zz, tz) : zz.type && "TrailMesh" === zz.type ? Fz = pz._TrailMeshParser(zz, tz) : zz.type && "GaussianSplattingMesh" === zz.type ? (Fz = zz._isCompound ? pz._GaussianSplattingCompoundMeshParser(zz, tz) : pz._GaussianSplattingMeshParser(zz, tz), Wz = !0) : zz.type && "GaussianSplattingPartProxyMesh" === zz.type ? (Fz = pz._GaussianSplattingPartProxyMeshParser(zz, tz), Wz = !0) : Fz = new pz(zz.name, tz), Fz.id = zz.id, Fz._waitingParsedUniqueId = zz.uniqueId, Yz.e && Yz.e.AddTagsTo(Fz, zz.tags), Fz.position = Jz.p.FromArray(zz.position), void 0 !== zz.metadata && (Fz.metadata = zz.metadata), void 0 !== zz.meshBlendingTag && (Fz.meshBlendingTag = zz.meshBlendingTag), zz.rotationQuaternion ? Fz.rotationQuaternion = Jz.h.FromArray(zz.rotationQuaternion) : zz.rotation && (Fz.rotation = Jz.p.FromArray(zz.rotation)), Fz.nX = Jz.p.FromArray(zz.nX), zz.localMatrix ? Fz.setPreTransformMatrix(Jz.e.FromArray(zz.localMatrix)) : zz.pivotMatrix && Fz.setPivotMatrix(Jz.e.FromArray(zz.pivotMatrix)), Fz.Xx(zz.isEnabled), Fz.isVisible = zz.isVisible, Fz.infiniteDistance = zz.infiniteDistance, Fz.WD = !!zz.WD, Fz.showBoundingBox = zz.showBoundingBox, Fz.showSubMeshesBoundingBox = zz.showSubMeshesBoundingBox, void 0 !== zz.applyFog && (Fz.applyFog = zz.applyFog), void 0 !== zz.pickable && (Fz.Ng = zz.pickable), void 0 !== zz.alphaIndex && (Fz.alphaIndex = zz.alphaIndex), Fz.receiveShadows = zz.receiveShadows, void 0 !== zz.billboardMode && (Fz.billboardMode = zz.billboardMode), void 0 !== zz.visibility && (Fz.visibility = zz.visibility), Fz.checkCollisions = zz.checkCollisions, Fz.oD = !!zz.oD, zz.ellipsoid && (Fz.ellipsoid = Jz.p.FromArray(zz.ellipsoid)), zz.ellipsoidOffset && (Fz.ellipsoidOffset = Jz.p.FromArray(zz.ellipsoidOffset)), null != zz.overrideMaterialSideOrientation && (Fz.sideOrientation = zz.overrideMaterialSideOrientation), void 0 !== zz.sideOrientation && (Fz.sideOrientation = zz.sideOrientation), void 0 !== zz.isBlocker && (Fz.isBlocker = zz.isBlocker), Fz._shouldGenerateFlatShading = zz.useFlatShading, zz.HI && (Fz._waitingData.HI = zz.HI), void 0 !== zz.parentId && (Fz._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (Fz._waitingParentInstanceIndex = zz.parentInstanceIndex), void 0 !== zz.actions && (Fz._waitingData.actions = zz.actions), void 0 !== zz.overlayAlpha && (Fz.overlayAlpha = zz.overlayAlpha), void 0 !== zz.overlayColor && (Fz.overlayColor = Iz.c.FromArray(zz.overlayColor)), void 0 !== zz.renderOverlay && (Fz.renderOverlay = zz.renderOverlay), Fz.isUnIndexed = !!zz.isUnIndexed, Fz.hasVertexAlpha = zz.hasVertexAlpha, zz.delayLoadingFile ? (Fz.delayLoadState = 4, Fz.delayLoadingFile = sz + zz.delayLoadingFile, Fz.buildBoundingInfo(Jz.p.FromArray(zz.boundingBoxMinimum), Jz.p.FromArray(zz.boundingBoxMaximum)), zz._binaryInfo && (Fz._binaryInfo = zz._binaryInfo), Fz._delayInfo = [], zz.hasUVs && Fz._delayInfo.push(ez.m.UVKind), zz.hasUVs2 && Fz._delayInfo.push(ez.m.UV2Kind), zz.hasUVs3 && Fz._delayInfo.push(ez.m.UV3Kind), zz.hasUVs4 && Fz._delayInfo.push(ez.m.UV4Kind), zz.hasUVs5 && Fz._delayInfo.push(ez.m.UV5Kind), zz.hasUVs6 && Fz._delayInfo.push(ez.m.UV6Kind), zz.hasColors && Fz._delayInfo.push(ez.m.ColorKind), zz.hasMatricesIndices && Fz._delayInfo.push(ez.m.MatricesIndicesKind), zz.hasMatricesWeights && Fz._delayInfo.push(ez.m.MatricesWeightsKind), Fz._delayLoadingFunction = Gz.b._ImportGeometry, Mz.e.ForceFullSceneLoadingForIncremental && Fz._checkDelayState()) : Wz || Gz.b._ImportGeometry(zz, Fz), zz.materialUniqueId ? Fz._waitingMaterialId = zz.materialUniqueId : zz.materialId && (Fz._waitingMaterialId = zz.materialId), zz.morphTargetManagerId > -1 && (Fz._waitingMorphTargetManagerId = zz.morphTargetManagerId), void 0 !== zz.skeletonId && null !== zz.skeletonId && (Fz.skeleton = tz.getLastSkeletonById(zz.skeletonId), Fz._waitingSkeletonId = zz.skeletonId, zz.numBoneInfluencers && (Fz.numBoneInfluencers = zz.numBoneInfluencers)), void 0 !== zz.skeletonUniqueId && null !== zz.skeletonUniqueId && (Fz._waitingSkeletonUniqueId = zz.skeletonUniqueId), zz.animations) {
          for (let tz = 0; tz < zz.animations.length; tz++) {
            const sz = zz.animations[tz],
              Wz = (0, Qz.e)("BABYLON.Animation");
            Wz && Fz.animations.push(Wz.Parse(sz))
          }
          Cz.e.ParseAnimationRanges(Fz, zz, tz)
        }
        if (zz.autoAnimate && tz.beginAnimation(Fz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), zz.layerMask && !isNaN(zz.layerMask) ? Fz.layerMask = Math.abs(parseInt(zz.layerMask)) : Fz.layerMask = 268435455, zz.physicsImpostor && (Fz.physicsImpostor = pz._PhysicsImpostorParser(tz, Fz, zz)), zz.lodMeshIds && (Fz._waitingData.lods = {
            ids: zz.lodMeshIds,
            distances: zz.lodDistances ? zz.lodDistances : null,
            coverages: zz.lodCoverages ? zz.lodCoverages : null
          }), zz.instances)
          for (let Xz = 0; Xz < zz.instances.length; Xz++) {
            const sz = zz.instances[Xz],
              Wz = Fz.createInstance(sz.name);
            if (sz.id && (Wz.id = sz.id), Yz.e && (sz.tags ? Yz.e.AddTagsTo(Wz, sz.tags) : Yz.e.AddTagsTo(Wz, zz.tags)), Wz.position = Jz.p.FromArray(sz.position), void 0 !== sz.metadata && (Wz.metadata = sz.metadata), void 0 !== sz.parentId && (Wz._waitingParentId = sz.parentId), void 0 !== sz.parentInstanceIndex && (Wz._waitingParentInstanceIndex = sz.parentInstanceIndex), void 0 !== sz.isEnabled && null !== sz.isEnabled && Wz.Xx(sz.isEnabled), void 0 !== sz.isVisible && null !== sz.isVisible && (Wz.isVisible = sz.isVisible), void 0 !== sz.Ng && null !== sz.Ng && (Wz.Ng = sz.Ng), sz.rotationQuaternion ? Wz.rotationQuaternion = Jz.h.FromArray(sz.rotationQuaternion) : sz.rotation && (Wz.rotation = Jz.p.FromArray(sz.rotation)), Wz.nX = Jz.p.FromArray(sz.nX), void 0 != sz.checkCollisions && null != sz.checkCollisions && (Wz.checkCollisions = sz.checkCollisions), void 0 != sz.pickable && null != sz.pickable && (Wz.Ng = sz.pickable), void 0 != sz.showBoundingBox && null != sz.showBoundingBox && (Wz.showBoundingBox = sz.showBoundingBox), void 0 != sz.showSubMeshesBoundingBox && null != sz.showSubMeshesBoundingBox && (Wz.showSubMeshesBoundingBox = sz.showSubMeshesBoundingBox), void 0 != sz.alphaIndex && null != sz.showSubMeshesBoundingBox && (Wz.alphaIndex = sz.alphaIndex), sz.physicsImpostor && (Wz.physicsImpostor = pz._PhysicsImpostorParser(tz, Wz, sz)), void 0 !== sz.actions && (Wz._waitingData.actions = sz.actions), sz.animations) {
              for (let zz = 0; zz < sz.animations.length; zz++) {
                const tz = sz.animations[zz],
                  Fz = (0, Qz.e)("BABYLON.Animation");
                Fz && Wz.animations.push(Fz.Parse(tz))
              }
              Cz.e.ParseAnimationRanges(Wz, sz, tz), sz.autoAnimate && tz.beginAnimation(Wz, sz.autoAnimateFrom, sz.autoAnimateTo, sz.autoAnimateLoop, sz.autoAnimateSpeed || 1)
            }
          }
        if (zz.thinInstances) {
          const tz = zz.thinInstances;
          if (Fz.Wtz = !!tz.enablePicking, tz.matrixData ? (Fz.b_("matrix", new Float32Array(tz.matrixData), 16, !1), Fz._thinInstanceDataStorage.matrixBufferSize = tz.matrixBufferSize, Fz._thinInstanceDataStorage.instancesCount = tz.instancesCount) : Fz._thinInstanceDataStorage.matrixBufferSize = tz.matrixBufferSize, zz.thinInstances.userThinInstance) {
            const tz = zz.thinInstances.userThinInstance;
            for (const zz in tz.data) Fz.b_(zz, new Float32Array(tz.data[zz]), tz.strides[zz], !1), Fz._userThinInstanceBuffersStorage.sizes[zz] = tz.sizes[zz]
          }
        }
        return Fz
      }
      setPositionsForCPUSkinning() {
        const zz = this._internalMeshDataInfo;
        if (!zz._sourcePositions) {
          const tz = this.getVerticesData(ez.m.PositionKind);
          if (!tz) return zz._sourcePositions;
          zz._sourcePositions = new Float32Array(tz), this.isVertexBufferUpdatable(ez.m.PositionKind) || this.setVerticesData(ez.m.PositionKind, tz, !0)
        }
        return zz._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const zz = this._internalMeshDataInfo;
        if (!zz._sourceNormals) {
          const tz = this.getVerticesData(ez.m.NormalKind);
          if (!tz) return zz._sourceNormals;
          zz._sourceNormals = new Float32Array(tz), this.isVertexBufferUpdatable(ez.m.NormalKind) || this.setVerticesData(ez.m.NormalKind, tz, !0)
        }
        return zz._sourceNormals
      }
      applySkeleton(zz) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.aJ().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.aJ().getFrameId(), !this.isVerticesDataPresent(ez.m.PositionKind)) return this;
        if (!this.isVerticesDataPresent(ez.m.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(ez.m.MatricesWeightsKind)) return this;
        const tz = this.isVerticesDataPresent(ez.m.NormalKind),
          sz = this._internalMeshDataInfo;
        if (!sz._sourcePositions) {
          const zz = this.kY.slice();
          this.setPositionsForCPUSkinning(), this.kY = zz
        }
        tz && !sz._sourceNormals && this.setNormalsForCPUSkinning();
        let Fz = this.getVerticesData(ez.m.PositionKind);
        if (!Fz) return this;
        Fz instanceof Float32Array || (Fz = new Float32Array(Fz));
        let Wz = this.getVerticesData(ez.m.NormalKind);
        if (tz) {
          if (!Wz) return this;
          Wz instanceof Float32Array || (Wz = new Float32Array(Wz))
        }
        const Xz = this.getVerticesData(ez.m.MatricesIndicesKind),
          Oz = this.getVerticesData(ez.m.MatricesWeightsKind);
        if (!Oz || !Xz) return this;
        const oz = this.numBoneInfluencers > 4,
          vz = oz ? this.getVerticesData(ez.m.MatricesIndicesExtraKind) : null,
          Uz = oz ? this.getVerticesData(ez.m.MatricesWeightsExtraKind) : null,
          Kz = zz.getTransformMatrices(this),
          uz = Jz.p.Zero(),
          Nz = new Jz.e,
          bz = new Jz.e;
        let wz, Dz = 0;
        for (let gz = 0; gz < Fz.length; gz += 3, Dz += 4) {
          let zz;
          for (wz = 0; wz < 4; wz++) zz = Oz[Dz + wz], zz > 0 && (Jz.e.FromFloat32ArrayToRefScaled(Kz, Math.floor(16 * Xz[Dz + wz]), zz, bz), Nz.addToSelf(bz));
          if (oz)
            for (wz = 0; wz < 4; wz++) zz = Uz[Dz + wz], zz > 0 && (Jz.e.FromFloat32ArrayToRefScaled(Kz, Math.floor(16 * vz[Dz + wz]), zz, bz), Nz.addToSelf(bz));
          Jz.p.TransformCoordinatesFromFloatsToRef(sz._sourcePositions[gz], sz._sourcePositions[gz + 1], sz._sourcePositions[gz + 2], Nz, uz), uz.toArray(Fz, gz), tz && (Jz.p.TransformNormalFromFloatsToRef(sz._sourceNormals[gz], sz._sourceNormals[gz + 1], sz._sourceNormals[gz + 2], Nz, uz), uz.toArray(Wz, gz)), Nz.reset()
        }
        return this.updateVerticesData(ez.m.PositionKind, Fz), tz && this.updateVerticesData(ez.m.NormalKind, Wz), this
      }
      static MinMax(zz) {
        let tz = null,
          sz = null;
        for (const Fz of zz) {
          const zz = Fz.rC().boundingBox;
          tz && sz ? (tz.minimizeInPlace(zz.minimumWorld), sz.maximizeInPlace(zz.maximumWorld)) : (tz = zz.minimumWorld.clone(), sz = zz.maximumWorld.clone())
        }
        return tz && sz ? {
          min: tz,
          max: sz
        } : {
          min: Jz.p.Zero(),
          max: Jz.p.Zero()
        }
      }
      static Center(zz) {
        const tz = zz instanceof Array ? pz.MinMax(zz) : zz;
        return Jz.p.Center(tz.min, tz.max)
      }
      static MergeMeshes(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        return (0, xz.o)(pz._MergeMeshesCoroutine(zz, tz, sz, Fz, Wz, Xz, !1))
      }
      static async MergeMeshesAsync(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, xz.k)(pz._MergeMeshesCoroutine(zz, tz, sz, Fz, Wz, Xz, !0), (0, xz.e)())
      }
      static * _MergeMeshesCoroutine(zz) {
        let tz, sz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Fz = arguments.length > 2 ? arguments[2] : void 0,
          Wz = arguments.length > 3 ? arguments[3] : void 0,
          Xz = arguments.length > 4 ? arguments[4] : void 0,
          Oz = arguments.length > 5 ? arguments[5] : void 0,
          oz = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (zz = zz.filter(Boolean)).length) return null;
        if (!Fz) {
          let sz = 0;
          for (tz = 0; tz < zz.length; tz++)
            if (sz += zz[tz].getTotalVertices(), sz >= 65536) return hz.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const vz = zz[0];
        Oz && (Xz = !1, zz.sort(((zz, tz) => (zz.material?.uniqueId ?? -1) - (tz.material?.uniqueId ?? -1))));
        const Uz = new Array,
          Kz = new Array,
          uz = new Array,
          Nz = zz[0].sideOrientation;
        for (tz = 0; tz < zz.length; tz++) {
          const sz = zz[tz];
          if (sz.VJ) return hz.e.Warn("Cannot merge instance meshes."), null;
          if (Nz !== sz.sideOrientation) return hz.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Xz || Oz) {
            const zz = uz.reduce(((zz, tz) => Math.max(zz, tz.start + tz.count)), 0);
            if (Oz)
              if (sz.material) {
                const tz = sz.material;
                if (tz instanceof yz.c) {
                  for (let zz = 0; zz < tz.P_.length; zz++) Uz.indexOf(tz.P_[zz]) < 0 && Uz.push(tz.P_[zz]);
                  for (let Fz = 0; Fz < sz.kY.length; Fz++) Kz.push(Uz.indexOf(tz.P_[sz.kY[Fz].materialIndex])), uz.push({
                    start: zz + sz.kY[Fz].indexStart,
                    count: sz.kY[Fz].indexCount
                  })
                } else {
                  Uz.indexOf(tz) < 0 && Uz.push(tz);
                  for (let Fz = 0; Fz < sz.kY.length; Fz++) Kz.push(Uz.indexOf(tz)), uz.push({
                    start: zz + sz.kY[Fz].indexStart,
                    count: sz.kY[Fz].indexCount
                  })
                }
              } else
                for (let tz = 0; tz < sz.kY.length; tz++) Kz.push(0), uz.push({
                  start: zz + sz.kY[tz].indexStart,
                  count: sz.kY[tz].indexCount
                });
            else uz.push({
              start: zz,
              count: sz.getTotalIndices()
            })
          }
        }
        if (Oz && uz.length > 1) {
          let zz = 0;
          for (let tz = 1; tz < uz.length; tz++) {
            const sz = uz[zz],
              Fz = uz[tz];
            Kz[tz] === Kz[zz] && sz.start + sz.count === Fz.start ? sz.count += Fz.count : (zz++, uz[zz] = Fz, Kz[zz] = Kz[tz])
          }
          uz.length = zz + 1, Kz.length = zz + 1
        }
        const bz = zz => {
            const tz = zz.computeWorldMatrix(!0);
            return {
              vertexData: Zz.b.ExtractFromMesh(zz, !1, !1),
              transform: tz
            }
          },
          {
            vertexData: wz,
            transform: Dz
          } = bz(zz[0]);
        oz && (yield);
        const gz = new Array(zz.length - 1);
        for (let xz = 1; xz < zz.length; xz++) gz[xz - 1] = bz(zz[xz]), oz && (yield);
        const Hz = wz._mergeCoroutine(Dz, gz, Fz, oz, !sz);
        let Bz = Hz.next();
        for (; !Bz.done;) oz && (yield), Bz = Hz.next();
        const Pz = Bz.value;
        Wz || (Wz = new pz(vz.name + "_merged", vz.aJ()));
        const rz = Pz._applyToCoroutine(Wz, void 0, oz);
        let Yz = rz.next();
        for (; !Yz.done;) oz && (yield), Yz = rz.next();
        if (Wz.checkCollisions = vz.checkCollisions, Wz.sideOrientation = vz.sideOrientation, sz)
          for (tz = 0; tz < zz.length; tz++) zz[tz].dispose();
        if (Xz || Oz) {
          for (Wz.releaseSubMeshes(), tz = 0; tz < uz.length;) cz.c.CreateFromIndices(0, uz[tz].start, uz[tz].count, Wz, void 0, !1), tz++;
          for (const zz of Wz.kY) zz.refreshBoundingInfo();
          Wz.computeWorldMatrix(!0)
        }
        if (Oz) {
          const zz = new yz.c(vz.name + "_merged", vz.aJ());
          zz.P_ = Uz;
          for (let tz = 0; tz < Wz.kY.length; tz++) Wz.kY[tz].materialIndex = Kz[tz];
          Wz.material = zz
        } else Wz.material = vz.material;
        return Wz
      }
      Y5(zz) {
        zz._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(zz)
      }
      Z5(zz) {
        const tz = zz._indexInSourceMeshInstanceArray;
        if (-1 != tz) {
          if (tz !== this.instances.length - 1) {
            const zz = this.instances[this.instances.length - 1];
            this.instances[tz] = zz, zz._indexInSourceMeshInstanceArray = tz
          }
          zz._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === jz.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(zz) {
        const tz = this.aJ();
        return tz.forcePointsCloud ? jz.b.PointFillMode : tz.forceWireframe ? jz.b.WireFrameFillMode : this.overrideRenderingFillMode ?? zz
      }
      setMaterialByID(zz) {
        return this.setMaterialById(zz)
      }
      static CreateRibbon(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(zz, tz, sz, Fz, Wz, Xz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(zz, tz, sz, Fz, Wz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(zz, tz, sz, Fz, Wz, Xz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(zz, tz, sz, Fz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(zz, tz, sz, Fz, Wz, Xz, Oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(zz, tz, sz, Fz, Wz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(zz, tz, sz, Fz, Wz, Xz, Oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(zz, tz, sz, Fz, Wz, Xz, Oz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(zz, tz, sz, Fz, Wz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(zz, tz, sz, Fz, Wz, Xz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(zz, tz, sz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(zz, tz, sz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(zz, tz, sz, Fz, Wz, Xz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(zz, tz, sz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(zz) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    pz.FRONTSIDE = Zz.b.FRONTSIDE, pz.BACKSIDE = Zz.b.BACKSIDE, pz.DOUBLESIDE = Zz.b.DOUBLESIDE, pz.DEFAULTSIDE = Zz.b.DEFAULTSIDE, pz.NO_CAP = 0, pz.CAP_START = 1, pz.CAP_END = 2, pz.CAP_ALL = 3, pz.NO_FLIP = 0, pz.FLIP_TILE = 1, pz.ROTATE_TILE = 2, pz.FLIP_ROW = 3, pz.ROTATE_ROW = 4, pz.FLIP_N_ROTATE_TILE = 5, pz.FLIP_N_ROTATE_ROW = 6, pz.CENTER = 0, pz.LEFT = 1, pz.RIGHT = 2, pz.TOP = 3, pz.BOTTOM = 4, pz.INSTANCEDMESH_SORT_TRANSPARENT = !1, pz._GroundMeshParser = (zz, tz) => {
      throw (0, kz.i)("GroundMesh")
    }, pz._GoldbergMeshParser = (zz, tz) => {
      throw (0, kz.i)("GoldbergMesh")
    }, pz._LinesMeshParser = (zz, tz) => {
      throw (0, kz.i)("LinesMesh")
    }, pz._GreasedLineMeshParser = (zz, tz) => {
      throw (0, kz.i)("GreasedLineMesh")
    }, pz._GreasedLineRibbonMeshParser = (zz, tz) => {
      throw (0, kz.i)("GreasedLineRibbonMesh")
    }, pz._TrailMeshParser = (zz, tz) => {
      throw (0, kz.i)("TrailMesh")
    }, pz._GaussianSplattingMeshParser = (zz, tz) => {
      throw (0, kz.i)("GaussianSplattingMesh")
    }, pz._GaussianSplattingPartProxyMeshParser = (zz, tz) => {
      throw (0, kz.i)("GaussianSplattingPartProxyMesh")
    }, pz._GaussianSplattingCompoundMeshParser = (zz, tz) => {
      throw (0, kz.i)("GaussianSplattingCompoundMesh")
    };
    let fz = !1;

    function Ez() {
      fz || (fz = !0, (0, Qz.g)("BABYLON.Mesh", pz))
    }(Fz = pz.prototype).WC ?? (Fz.WC = (0, kz.g)("Mesh", "WC")), (Wz = pz.prototype).simplify ?? (Wz.simplify = (0, kz.g)("Mesh", "simplify")), (Xz = pz.prototype).thinInstanceAdd ?? (Xz.thinInstanceAdd = (0, kz.g)("Mesh", "thinInstanceAdd")), (Oz = pz.prototype).thinInstanceAddSelf ?? (Oz.thinInstanceAddSelf = (0, kz.g)("Mesh", "thinInstanceAddSelf")), (oz = pz.prototype).thinInstanceRegisterAttribute ?? (oz.thinInstanceRegisterAttribute = (0, kz.g)("Mesh", "thinInstanceRegisterAttribute")), (vz = pz.prototype).thinInstanceSetMatrixAt ?? (vz.thinInstanceSetMatrixAt = (0, kz.g)("Mesh", "thinInstanceSetMatrixAt")), (Uz = pz.prototype).thinInstanceSetAttributeAt ?? (Uz.thinInstanceSetAttributeAt = (0, kz.g)("Mesh", "thinInstanceSetAttributeAt")), (Kz = pz.prototype).b_ ?? (Kz.b_ = (0, kz.g)("Mesh", "b_")), (uz = pz.prototype).thinInstanceGetWorldMatrices ?? (uz.thinInstanceGetWorldMatrices = (0, kz.g)("Mesh", "thinInstanceGetWorldMatrices")), (Nz = pz.prototype).F_ ?? (Nz.F_ = (0, kz.g)("Mesh", "F_")), (bz = pz.prototype).thinInstancePartialBufferUpdate ?? (bz.thinInstancePartialBufferUpdate = (0, kz.g)("Mesh", "thinInstancePartialBufferUpdate")), (wz = pz.prototype).thinInstanceRefreshBoundingInfo ?? (wz.thinInstanceRefreshBoundingInfo = (0, kz.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (Dz = pz.prototype).getEmittedParticleSystems ?? (Dz.getEmittedParticleSystems = (0, kz.g)("Mesh", "getEmittedParticleSystems")), (gz = pz.prototype).getHierarchyEmittedParticleSystems ?? (gz.getHierarchyEmittedParticleSystems = (0, kz.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(pz.prototype, "edgesShareWithInstances") || Object.defineProperty(pz.prototype, "edgesShareWithInstances", (0, kz.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(pz.prototype, "Wtz") || Object.defineProperty(pz.prototype, "Wtz", (0, kz.f)("Mesh", "Wtz")), Object.getOwnPropertyDescriptor(pz.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(pz.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, kz.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(pz.prototype, "E1") || Object.defineProperty(pz.prototype, "E1", (0, kz.f)("Mesh", "E1"))
  },
  39562: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => wz
    });
    var Fz = sz(39167),
      Wz = sz(36475),
      Xz = sz(39293),
      Oz = sz(39065),
      oz = sz(36654),
      vz = sz(38097),
      Uz = sz(39170),
      Kz = sz(39559),
      uz = sz(39215),
      Nz = sz(39458);
    class bz {}
    let wz = (() => {
      var zz;
      let tz, sz, wz, Dz, gz = [];
      return zz = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Kz.g)(this._applyToCoroutine.bind(this)), this.uniqueId = zz._UniqueIdGenerator, zz._UniqueIdGenerator++
        }
        set(zz, tz) {
          switch (zz.length || vz.e.Warn(`Setting vertex data kind '${tz}' with an empty array`), tz) {
            case Xz.m.PositionKind:
              this.positions = zz;
              break;
            case Xz.m.NormalKind:
              this.normals = zz;
              break;
            case Xz.m.TangentKind:
              this.tangents = zz;
              break;
            case Xz.m.UVKind:
              this.uvs = zz;
              break;
            case Xz.m.UV2Kind:
              this.uvs2 = zz;
              break;
            case Xz.m.UV3Kind:
              this.uvs3 = zz;
              break;
            case Xz.m.UV4Kind:
              this.uvs4 = zz;
              break;
            case Xz.m.UV5Kind:
              this.uvs5 = zz;
              break;
            case Xz.m.UV6Kind:
              this.uvs6 = zz;
              break;
            case Xz.m.ColorKind:
              this.colors = zz;
              break;
            case Xz.m.MatricesIndicesKind:
              this.matricesIndices = zz;
              break;
            case Xz.m.MatricesWeightsKind:
              this.matricesWeights = zz;
              break;
            case Xz.m.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = zz;
              break;
            case Xz.m.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = zz
          }
        }
        applyToMesh(zz, tz) {
          return this._applyTo(zz, tz, !1), this
        }
        applyToGeometry(zz, tz) {
          return this._applyTo(zz, tz, !1), this
        }
        updateMesh(zz) {
          return this._update(zz), this
        }
        updateGeometry(zz) {
          return this._update(zz), this
        }* _applyToCoroutine(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sz = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (zz.setVerticesData(Xz.m.PositionKind, this.positions, tz), sz && (yield)), this.normals && (zz.setVerticesData(Xz.m.NormalKind, this.normals, tz), sz && (yield)), this.tangents && (zz.setVerticesData(Xz.m.TangentKind, this.tangents, tz), sz && (yield)), this.uvs && (zz.setVerticesData(Xz.m.UVKind, this.uvs, tz), sz && (yield)), this.uvs2 && (zz.setVerticesData(Xz.m.UV2Kind, this.uvs2, tz), sz && (yield)), this.uvs3 && (zz.setVerticesData(Xz.m.UV3Kind, this.uvs3, tz), sz && (yield)), this.uvs4 && (zz.setVerticesData(Xz.m.UV4Kind, this.uvs4, tz), sz && (yield)), this.uvs5 && (zz.setVerticesData(Xz.m.UV5Kind, this.uvs5, tz), sz && (yield)), this.uvs6 && (zz.setVerticesData(Xz.m.UV6Kind, this.uvs6, tz), sz && (yield)), this.colors) {
            const Fz = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            zz.setVerticesData(Xz.m.ColorKind, this.colors, tz, Fz), this.hasVertexAlpha && void 0 !== zz.hasVertexAlpha && (zz.hasVertexAlpha = !0), sz && (yield)
          }
          if (this.matricesIndices && (zz.setVerticesData(Xz.m.MatricesIndicesKind, this.matricesIndices, tz), sz && (yield)), this.matricesWeights && (zz.setVerticesData(Xz.m.MatricesWeightsKind, this.matricesWeights, tz), sz && (yield)), this.matricesIndicesExtra && (zz.setVerticesData(Xz.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, tz), sz && (yield)), this.matricesWeightsExtra && (zz.setVerticesData(Xz.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, tz), sz && (yield)), this.indices ? (zz.setIndices(this.indices, null, tz), sz && (yield)) : zz.setIndices([], null), zz.kY && this.materialInfos && this.materialInfos.length > 1) {
            const tz = zz;
            tz.kY = [];
            for (const zz of this.materialInfos) new Nz.c(zz.materialIndex, zz.verticesStart, zz.verticesCount, zz.indexStart, zz.indexCount, tz)
          }
          return this
        }
        _update(zz, tz, sz) {
          return this.positions && zz.updateVerticesData(Xz.m.PositionKind, this.positions, tz, sz), this.normals && zz.updateVerticesData(Xz.m.NormalKind, this.normals, tz, sz), this.tangents && zz.updateVerticesData(Xz.m.TangentKind, this.tangents, tz, sz), this.uvs && zz.updateVerticesData(Xz.m.UVKind, this.uvs, tz, sz), this.uvs2 && zz.updateVerticesData(Xz.m.UV2Kind, this.uvs2, tz, sz), this.uvs3 && zz.updateVerticesData(Xz.m.UV3Kind, this.uvs3, tz, sz), this.uvs4 && zz.updateVerticesData(Xz.m.UV4Kind, this.uvs4, tz, sz), this.uvs5 && zz.updateVerticesData(Xz.m.UV5Kind, this.uvs5, tz, sz), this.uvs6 && zz.updateVerticesData(Xz.m.UV6Kind, this.uvs6, tz, sz), this.colors && zz.updateVerticesData(Xz.m.ColorKind, this.colors, tz, sz), this.matricesIndices && zz.updateVerticesData(Xz.m.MatricesIndicesKind, this.matricesIndices, tz, sz), this.matricesWeights && zz.updateVerticesData(Xz.m.MatricesWeightsKind, this.matricesWeights, tz, sz), this.matricesIndicesExtra && zz.updateVerticesData(Xz.m.MatricesIndicesExtraKind, this.matricesIndicesExtra, tz, sz), this.matricesWeightsExtra && zz.updateVerticesData(Xz.m.MatricesWeightsExtraKind, this.matricesWeightsExtra, tz, sz), this.indices && zz.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const Xz = Wz.m.XD[0],
            Oz = Wz.m.XD[1];
          for (let oz = sz; oz < sz + Fz; oz += 3) Wz.p.FromArrayToRef(zz, oz, Xz), Wz.p.TransformCoordinatesToRef(Xz, tz, Oz), zz[oz] = Oz.x, zz[oz + 1] = Oz.y, zz[oz + 2] = Oz.z
        }
        static _TransformVector3Normals(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const Xz = Wz.m.XD[0],
            Oz = Wz.m.XD[1];
          for (let oz = sz; oz < sz + Fz; oz += 3) Wz.p.FromArrayToRef(zz, oz, Xz), Wz.p.TransformNormalToRef(Xz, tz, Oz), zz[oz] = Oz.x, zz[oz + 1] = Oz.y, zz[oz + 2] = Oz.z
        }
        static _TransformVector4Normals(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.length;
          const Xz = Wz.m.Vector4[0],
            Oz = Wz.m.Vector4[1];
          for (let oz = sz; oz < sz + Fz; oz += 4) Wz.q.FromArrayToRef(zz, oz, Xz), Wz.q.TransformNormalToRef(Xz, tz, Oz), zz[oz] = Oz.x, zz[oz + 1] = Oz.y, zz[oz + 2] = Oz.z, zz[oz + 3] = Oz.w
        }
        static _FlipFaces(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz.length;
          for (let Fz = tz; Fz < tz + sz; Fz += 3) {
            const tz = zz[Fz + 1];
            zz[Fz + 1] = zz[Fz + 2], zz[Fz + 2] = tz
          }
        }
        transform(tz) {
          const sz = tz.determinant() < 0;
          return this.positions && zz._TransformVector3Coordinates(this.positions, tz), this.normals && zz._TransformVector3Normals(this.normals, tz), this.tangents && zz._TransformVector4Normals(this.tangents, tz), sz && this.indices && zz._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const tz = [];
          for (const sz of this.materialInfos) {
            const Fz = new zz;
            if (this.positions && (Fz.positions = this.positions.slice(3 * sz.verticesStart, 3 * (sz.verticesCount + sz.verticesStart))), this.normals && (Fz.normals = this.normals.slice(3 * sz.verticesStart, 3 * (sz.verticesCount + sz.verticesStart))), this.tangents && (Fz.tangents = this.tangents.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.colors && (Fz.colors = this.colors.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.uvs && (Fz.uvs = this.uvs.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.uvs2 && (Fz.uvs2 = this.uvs2.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.uvs3 && (Fz.uvs3 = this.uvs3.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.uvs4 && (Fz.uvs4 = this.uvs4.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.uvs5 && (Fz.uvs5 = this.uvs5.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.uvs6 && (Fz.uvs6 = this.uvs6.slice(2 * sz.verticesStart, 2 * (sz.verticesCount + sz.verticesStart))), this.matricesIndices && (Fz.matricesIndices = this.matricesIndices.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.matricesIndicesExtra && (Fz.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.matricesWeights && (Fz.matricesWeights = this.matricesWeights.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.matricesWeightsExtra && (Fz.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * sz.verticesStart, 4 * (sz.verticesCount + sz.verticesStart))), this.indices) {
              Fz.indices = [];
              for (let zz = sz.indexStart; zz < sz.indexStart + sz.indexCount; zz++) Fz.indices.push(this.indices[zz] - sz.verticesStart)
            }
            const Wz = new bz;
            Wz.indexStart = 0, Wz.indexCount = Fz.indices ? Fz.indices.length : 0, Wz.materialIndex = sz.materialIndex, Wz.verticesStart = 0, Wz.verticesCount = (Fz.positions ? Fz.positions.length : 0) / 3, Fz.materialInfos = [Wz], tz.push(Fz)
          }
          return tz
        }
        merge(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Xz = Array.isArray(zz) ? zz.map((zz => ({
            vertexData: zz
          }))) : [{
            vertexData: zz
          }];
          return (0, Kz.o)(this._mergeCoroutine(void 0, Xz, tz, !1, sz, Fz, Wz))
        }* _mergeCoroutine(tz, sz) {
          let Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Wz = arguments.length > 3 ? arguments[3] : void 0,
            Oz = arguments.length > 4 ? arguments[4] : void 0,
            oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            vz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Uz = sz.map((zz => zz.vertexData)),
            Kz = this;
          if (vz)
            for (const zz of Uz) zz && (zz._validate(), !this.normals && zz.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && zz.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && zz.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && zz.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && zz.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && zz.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && zz.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && zz.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && zz.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && zz.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && zz.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && zz.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && zz.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const zz of Uz)
            if (zz)
              if (vz) this.normals && !zz.normals && (zz.normals = new Float32Array(zz.positions.length)), this.tangents && !zz.tangents && (zz.tangents = new Float32Array(zz.positions.length / 3 * 4)), this.uvs && !zz.uvs && (zz.uvs = new Float32Array(zz.positions.length / 3 * 2)), this.uvs2 && !zz.uvs2 && (zz.uvs2 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs3 && !zz.uvs3 && (zz.uvs3 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs4 && !zz.uvs4 && (zz.uvs4 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs5 && !zz.uvs5 && (zz.uvs5 = new Float32Array(zz.positions.length / 3 * 2)), this.uvs6 && !zz.uvs6 && (zz.uvs6 = new Float32Array(zz.positions.length / 3 * 2)), this.colors && !zz.colors && (zz.colors = new Float32Array(zz.positions.length / 3 * 4), zz.colors.fill(1)), this.matricesIndices && !zz.matricesIndices && (zz.matricesIndices = new Float32Array(zz.positions.length / 3 * 4)), this.matricesWeights && !zz.matricesWeights && (zz.matricesWeights = new Float32Array(zz.positions.length / 3 * 4)), this.matricesIndicesExtra && !zz.matricesIndicesExtra && (zz.matricesIndicesExtra = new Float32Array(zz.positions.length / 3 * 4)), this.matricesWeightsExtra && !zz.matricesWeightsExtra && (zz.matricesWeightsExtra = new Float32Array(zz.positions.length / 3 * 4));
              else if (zz._validate(), !this.normals !== !zz.normals || !this.tangents !== !zz.tangents || !this.uvs !== !zz.uvs || !this.uvs2 !== !zz.uvs2 || !this.uvs3 !== !zz.uvs3 || !this.uvs4 !== !zz.uvs4 || !this.uvs5 !== !zz.uvs5 || !this.uvs6 !== !zz.uvs6 || !this.colors !== !zz.colors || !this.matricesIndices !== !zz.matricesIndices || !this.matricesWeights !== !zz.matricesWeights || !this.matricesIndicesExtra !== !zz.matricesIndicesExtra || !this.matricesWeightsExtra !== !zz.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (oz) {
            let zz, Fz = 0,
              Wz = 0;
            const Xz = [];
            let Oz = null;
            const oz = [];
            for (const sz of this.splitBasedOnMaterialID()) oz.push({
              vertexData: sz,
              transform: tz
            });
            for (const tz of sz)
              if (tz.vertexData)
                for (const zz of tz.vertexData.splitBasedOnMaterialID()) oz.push({
                  vertexData: zz,
                  transform: tz.transform
                });
            oz.sort(((zz, tz) => {
              const sz = zz.vertexData.materialInfos ? zz.vertexData.materialInfos[0].materialIndex : 0,
                Fz = tz.vertexData.materialInfos ? tz.vertexData.materialInfos[0].materialIndex : 0;
              return sz > Fz ? 1 : sz === Fz ? 0 : -1
            }));
            for (const tz of oz) {
              const sz = tz.vertexData;
              if (zz = sz.materialInfos ? sz.materialInfos[0].materialIndex : 0, Oz && Oz.materialIndex === zz) Oz.indexCount += sz.indices.length, Oz.verticesCount += sz.positions.length / 3;
              else {
                const tz = new bz;
                tz.materialIndex = zz, tz.indexStart = Fz, tz.indexCount = sz.indices.length, tz.verticesStart = Wz, tz.verticesCount = sz.positions.length / 3, Xz.push(tz), Oz = tz
              }
              Fz += sz.indices.length, Wz += sz.positions.length / 3
            }
            const vz = oz.splice(0, 1)[0];
            Kz = vz.vertexData, tz = vz.transform, Uz = oz.map((zz => zz.vertexData)), sz = oz, this.materialInfos = Xz
          }
          const uz = Uz.reduce(((zz, tz) => zz + (tz.indices?.length ?? 0)), Kz.indices?.length ?? 0);
          let Nz = Oz || Uz.some((zz => zz.indices === Kz.indices)) ? Kz.indices?.slice() : Kz.indices;
          if (uz > 0) {
            let Xz = Nz?.length ?? 0;
            if (Nz || (Nz = new Array(uz)), Nz.length !== uz) {
              if (Array.isArray(Nz)) Nz.length = uz;
              else {
                const zz = Fz || Nz instanceof Uint32Array ? new Uint32Array(uz) : new Uint16Array(uz);
                zz.set(Nz), Nz = zz
              }
              tz && tz.determinant() < 0 && zz._FlipFaces(Nz, 0, Xz)
            }
            let Oz = Kz.positions ? Kz.positions.length / 3 : 0;
            for (const {
                vertexData: tz,
                transform: Fz
              }
              of sz)
              if (tz.indices) {
                for (let zz = 0; zz < tz.indices.length; zz++) Nz[Xz + zz] = tz.indices[zz] + Oz;
                Fz && Fz.determinant() < 0 && zz._FlipFaces(Nz, Xz, tz.indices.length), Oz += tz.positions.length / 3, Xz += tz.indices.length, Wz && (yield)
              }
          }
          return this.indices = Nz, this.positions = zz._MergeElement(Xz.m.PositionKind, Kz.positions, tz, sz.map((zz => [zz.vertexData.positions, zz.transform]))), Wz && (yield), Kz.normals && (this.normals = zz._MergeElement(Xz.m.NormalKind, Kz.normals, tz, sz.map((zz => [zz.vertexData.normals, zz.transform]))), Wz && (yield)), Kz.tangents && (this.tangents = zz._MergeElement(Xz.m.TangentKind, Kz.tangents, tz, sz.map((zz => [zz.vertexData.tangents, zz.transform]))), Wz && (yield)), Kz.uvs && (this.uvs = zz._MergeElement(Xz.m.UVKind, Kz.uvs, tz, sz.map((zz => [zz.vertexData.uvs, zz.transform]))), Wz && (yield)), Kz.uvs2 && (this.uvs2 = zz._MergeElement(Xz.m.UV2Kind, Kz.uvs2, tz, sz.map((zz => [zz.vertexData.uvs2, zz.transform]))), Wz && (yield)), Kz.uvs3 && (this.uvs3 = zz._MergeElement(Xz.m.UV3Kind, Kz.uvs3, tz, sz.map((zz => [zz.vertexData.uvs3, zz.transform]))), Wz && (yield)), Kz.uvs4 && (this.uvs4 = zz._MergeElement(Xz.m.UV4Kind, Kz.uvs4, tz, sz.map((zz => [zz.vertexData.uvs4, zz.transform]))), Wz && (yield)), Kz.uvs5 && (this.uvs5 = zz._MergeElement(Xz.m.UV5Kind, Kz.uvs5, tz, sz.map((zz => [zz.vertexData.uvs5, zz.transform]))), Wz && (yield)), Kz.uvs6 && (this.uvs6 = zz._MergeElement(Xz.m.UV6Kind, Kz.uvs6, tz, sz.map((zz => [zz.vertexData.uvs6, zz.transform]))), Wz && (yield)), Kz.colors && (this.colors = zz._MergeElement(Xz.m.ColorKind, Kz.colors, tz, sz.map((zz => [zz.vertexData.colors, zz.transform]))), (void 0 !== Kz.hasVertexAlpha || sz.some((zz => void 0 !== zz.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Kz.hasVertexAlpha || sz.some((zz => zz.vertexData.hasVertexAlpha))), Wz && (yield)), Kz.matricesIndices && (this.matricesIndices = zz._MergeElement(Xz.m.MatricesIndicesKind, Kz.matricesIndices, tz, sz.map((zz => [zz.vertexData.matricesIndices, zz.transform]))), Wz && (yield)), Kz.matricesWeights && (this.matricesWeights = zz._MergeElement(Xz.m.MatricesWeightsKind, Kz.matricesWeights, tz, sz.map((zz => [zz.vertexData.matricesWeights, zz.transform]))), Wz && (yield)), Kz.matricesIndicesExtra && (this.matricesIndicesExtra = zz._MergeElement(Xz.m.MatricesIndicesExtraKind, Kz.matricesIndicesExtra, tz, sz.map((zz => [zz.vertexData.matricesIndicesExtra, zz.transform]))), Wz && (yield)), Kz.matricesWeightsExtra && (this.matricesWeightsExtra = zz._MergeElement(Xz.m.MatricesWeightsExtraKind, Kz.matricesWeightsExtra, tz, sz.map((zz => [zz.vertexData.matricesWeightsExtra, zz.transform])))), this
        }
        static _MergeElement(tz, sz, Fz, Wz) {
          const Oz = Wz.filter((zz => null !== zz[0] && void 0 !== zz[0]));
          if (!sz && 0 == Oz.length) return sz;
          if (!sz) return this._MergeElement(tz, Oz[0][0], Oz[0][1], Oz.slice(1));
          const oz = Oz.reduce(((zz, tz) => zz + tz[0].length), sz.length),
            vz = tz === Xz.m.PositionKind ? zz._TransformVector3Coordinates : tz === Xz.m.NormalKind ? zz._TransformVector3Normals : tz === Xz.m.TangentKind ? zz._TransformVector4Normals : () => {};
          if (sz instanceof Float32Array) {
            const zz = new Float32Array(oz);
            zz.set(sz), Fz && vz(zz, Fz, 0, sz.length);
            let tz = sz.length;
            for (const [sz, Fz] of Oz) zz.set(sz, tz), Fz && vz(zz, Fz, tz, sz.length), tz += sz.length;
            return zz
          } {
            const zz = new Array(oz);
            for (let Fz = 0; Fz < sz.length; Fz++) zz[Fz] = sz[Fz];
            Fz && vz(zz, Fz, 0, sz.length);
            let tz = sz.length;
            for (const [sz, Fz] of Oz) {
              for (let Fz = 0; Fz < sz.length; Fz++) zz[tz + Fz] = sz[Fz];
              Fz && vz(zz, Fz, tz, sz.length), tz += sz.length
            }
            return zz
          }
        }
        _validate() {
          if (!this.positions) throw new uz.i("Positions are required", uz.g.MeshInvalidPositionsError);
          const zz = (zz, tz) => {
              const sz = (0, Xz.j)(zz);
              if (tz.length % sz !== 0) throw new Error("The " + zz + "s array count must be a multiple of " + sz);
              return tz.length / sz
            },
            tz = zz(Xz.m.PositionKind, this.positions),
            sz = (sz, Fz) => {
              const Wz = zz(sz, Fz);
              if (Wz !== tz) throw new Error("The " + sz + "s element count (" + Wz + ") does not match the positions count (" + tz + ")")
            };
          this.normals && sz(Xz.m.NormalKind, this.normals), this.tangents && sz(Xz.m.TangentKind, this.tangents), this.uvs && sz(Xz.m.UVKind, this.uvs), this.uvs2 && sz(Xz.m.UV2Kind, this.uvs2), this.uvs3 && sz(Xz.m.UV3Kind, this.uvs3), this.uvs4 && sz(Xz.m.UV4Kind, this.uvs4), this.uvs5 && sz(Xz.m.UV5Kind, this.uvs5), this.uvs6 && sz(Xz.m.UV6Kind, this.uvs6), this.colors && sz(Xz.m.ColorKind, this.colors), this.matricesIndices && sz(Xz.m.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && sz(Xz.m.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && sz(Xz.m.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && sz(Xz.m.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const tz = this.serialize();
          return zz.Parse(tz)
        }
        serialize() {
          const zz = {};
          if (this.positions && (zz.positions = Array.from(this.positions)), this.normals && (zz.normals = Array.from(this.normals)), this.tangents && (zz.tangents = Array.from(this.tangents)), this.uvs && (zz.uvs = Array.from(this.uvs)), this.uvs2 && (zz.uvs2 = Array.from(this.uvs2)), this.uvs3 && (zz.uvs3 = Array.from(this.uvs3)), this.uvs4 && (zz.uvs4 = Array.from(this.uvs4)), this.uvs5 && (zz.uvs5 = Array.from(this.uvs5)), this.uvs6 && (zz.uvs6 = Array.from(this.uvs6)), this.colors && (zz.colors = Array.from(this.colors), zz.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (zz.matricesIndices = Array.from(this.matricesIndices), zz.matricesIndicesExpanded = !0), this.matricesWeights && (zz.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (zz.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), zz.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (zz.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), zz.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            zz.materialInfos = [];
            for (const tz of this.materialInfos) {
              const sz = {
                indexStart: tz.indexStart,
                indexCount: tz.indexCount,
                materialIndex: tz.materialIndex,
                verticesStart: tz.verticesStart,
                verticesCount: tz.verticesCount
              };
              zz.materialInfos.push(sz)
            }
          }
          return zz
        }
        static ExtractFromMesh(tz, sz, Fz) {
          return zz._ExtractFrom(tz, sz, Fz)
        }
        static ExtractFromGeometry(tz, sz, Fz) {
          return zz._ExtractFrom(tz, sz, Fz)
        }
        static _ExtractFrom(tz, sz, Fz) {
          const Wz = new zz;
          if (tz.isVerticesDataPresent(Xz.m.PositionKind) && (Wz.positions = tz.getVerticesData(Xz.m.PositionKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.NormalKind) && (Wz.normals = tz.getVerticesData(Xz.m.NormalKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.TangentKind) && (Wz.tangents = tz.getVerticesData(Xz.m.TangentKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UVKind) && (Wz.uvs = tz.getVerticesData(Xz.m.UVKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UV2Kind) && (Wz.uvs2 = tz.getVerticesData(Xz.m.UV2Kind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UV3Kind) && (Wz.uvs3 = tz.getVerticesData(Xz.m.UV3Kind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UV4Kind) && (Wz.uvs4 = tz.getVerticesData(Xz.m.UV4Kind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UV5Kind) && (Wz.uvs5 = tz.getVerticesData(Xz.m.UV5Kind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.UV6Kind) && (Wz.uvs6 = tz.getVerticesData(Xz.m.UV6Kind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.ColorKind)) {
            const zz = tz.geometry || tz,
              Oz = zz.getVertexBuffer(Xz.m.ColorKind),
              oz = zz.getVerticesData(Xz.m.ColorKind, sz, Fz);
            if (3 === Oz.getSize()) {
              const zz = new Float32Array(4 * oz.length / 3);
              for (let tz = 0, sz = 0; tz < oz.length; tz += 3, sz += 4) zz[sz] = oz[tz], zz[sz + 1] = oz[tz + 1], zz[sz + 2] = oz[tz + 2], zz[sz + 3] = 1;
              Wz.colors = zz
            } else {
              if (4 !== Oz.getSize()) throw new Error(`Unexpected number of color components: ${Oz.getSize()}`);
              Wz.colors = oz
            }
          }
          return tz.isVerticesDataPresent(Xz.m.MatricesIndicesKind) && (Wz.matricesIndices = tz.getVerticesData(Xz.m.MatricesIndicesKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.MatricesWeightsKind) && (Wz.matricesWeights = tz.getVerticesData(Xz.m.MatricesWeightsKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.MatricesIndicesExtraKind) && (Wz.matricesIndicesExtra = tz.getVerticesData(Xz.m.MatricesIndicesExtraKind, sz, Fz)), tz.isVerticesDataPresent(Xz.m.MatricesWeightsExtraKind) && (Wz.matricesWeightsExtra = tz.getVerticesData(Xz.m.MatricesWeightsExtraKind, sz, Fz)), Wz.indices = tz.Qsz(sz, Fz), Wz
        }
        static CreateRibbon(zz) {
          throw (0, Oz.i)("ribbonBuilder")
        }
        static CreateBox(zz) {
          throw (0, Oz.i)("boxBuilder")
        }
        static CreateTiledBox(zz) {
          throw (0, Oz.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(zz) {
          throw (0, Oz.i)("tiledPlaneBuilder")
        }
        static CreateSphere(zz) {
          throw (0, Oz.i)("sphereBuilder")
        }
        static CreateCylinder(zz) {
          throw (0, Oz.i)("cylinderBuilder")
        }
        static CreateTorus(zz) {
          throw (0, Oz.i)("torusBuilder")
        }
        static CreateLineSystem(zz) {
          throw (0, Oz.i)("linesBuilder")
        }
        static CreateDashedLines(zz) {
          throw (0, Oz.i)("linesBuilder")
        }
        static CreateGround(zz) {
          throw (0, Oz.i)("groundBuilder")
        }
        static CreateTiledGround(zz) {
          throw (0, Oz.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(zz) {
          throw (0, Oz.i)("groundBuilder")
        }
        static CreatePlane(zz) {
          throw (0, Oz.i)("planeBuilder")
        }
        static CreateDisc(zz) {
          throw (0, Oz.i)("discBuilder")
        }
        static CreatePolygon(zz, tz, sz, Fz, Wz, Xz, oz) {
          throw (0, Oz.i)("polygonBuilder")
        }
        static CreateIcoSphere(zz) {
          throw (0, Oz.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(zz) {
          throw (0, Oz.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Wz.p.Up();
          throw (0, Oz.i)("capsuleBuilder")
        }
        static CreateTorusKnot(zz) {
          throw (0, Oz.i)("torusKnotBuilder")
        }
        static ComputeNormals(zz, tz, sz, Fz) {
          let Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz = !1,
            Cz = !1,
            ez = !1,
            Zz = !1,
            Gz = 1,
            Tz = 0,
            cz = null;
          Fz && (Iz = !!Fz.facetNormals, Cz = !!Fz.facetPositions, ez = !!Fz.facetPartitioning, Gz = !0 === Fz.useRightHandedSystem ? -1 : 1, Tz = Fz.ratio || 0, Zz = !!Fz.depthSort, cz = Fz.distanceTo, Zz && void 0 === cz && (cz = Wz.p.Zero()));
          let jz = 0,
            Az = 0,
            yz = 0,
            Mz = 0;
          for (ez && Fz && Fz.bbSize && (jz = Fz.subDiv.X * Tz / Fz.bbSize.x, Az = Fz.subDiv.Y * Tz / Fz.bbSize.y, yz = Fz.subDiv.Z * Tz / Fz.bbSize.z, Mz = Fz.subDiv.max * Fz.subDiv.max, Fz.facetPartitioning.length = 0), Xz = 0; Xz < zz.length; Xz++) sz[Xz] = 0;
          const dz = tz.length / 3 | 0;
          for (Xz = 0; Xz < dz; Xz++) {
            if (gz = 3 * tz[3 * Xz], Hz = gz + 1, Bz = gz + 2, Pz = 3 * tz[3 * Xz + 1], rz = Pz + 1, Yz = Pz + 2, xz = 3 * tz[3 * Xz + 2], mz = xz + 1, Jz = xz + 2, Oz = zz[gz] - zz[Pz], oz = zz[Hz] - zz[rz], vz = zz[Bz] - zz[Yz], Uz = zz[xz] - zz[Pz], Kz = zz[mz] - zz[rz], uz = zz[Jz] - zz[Yz], Nz = Gz * (oz * uz - vz * Kz), bz = Gz * (vz * Uz - Oz * uz), wz = Gz * (Oz * Kz - oz * Uz), Dz = Math.sqrt(Nz * Nz + bz * bz + wz * wz), Dz = 0 === Dz ? 1 : Dz, Nz /= Dz, bz /= Dz, wz /= Dz, Iz && Fz && (Fz.facetNormals[Xz].x = Nz, Fz.facetNormals[Xz].y = bz, Fz.facetNormals[Xz].z = wz), Cz && Fz && (Fz.facetPositions[Xz].x = (zz[gz] + zz[Pz] + zz[xz]) / 3, Fz.facetPositions[Xz].y = (zz[Hz] + zz[rz] + zz[mz]) / 3, Fz.facetPositions[Xz].z = (zz[Bz] + zz[Yz] + zz[Jz]) / 3), ez && Fz) {
              const tz = Math.floor((Fz.facetPositions[Xz].x - Fz.bInfo.minimum.x * Tz) * jz),
                sz = Math.floor((Fz.facetPositions[Xz].y - Fz.bInfo.minimum.y * Tz) * Az),
                Wz = Math.floor((Fz.facetPositions[Xz].z - Fz.bInfo.minimum.z * Tz) * yz),
                Oz = Math.floor((zz[gz] - Fz.bInfo.minimum.x * Tz) * jz),
                oz = Math.floor((zz[Hz] - Fz.bInfo.minimum.y * Tz) * Az),
                vz = Math.floor((zz[Bz] - Fz.bInfo.minimum.z * Tz) * yz),
                Uz = Math.floor((zz[Pz] - Fz.bInfo.minimum.x * Tz) * jz),
                Kz = Math.floor((zz[rz] - Fz.bInfo.minimum.y * Tz) * Az),
                uz = Math.floor((zz[Yz] - Fz.bInfo.minimum.z * Tz) * yz),
                Nz = Math.floor((zz[xz] - Fz.bInfo.minimum.x * Tz) * jz),
                bz = Math.floor((zz[mz] - Fz.bInfo.minimum.y * Tz) * Az),
                wz = Math.floor((zz[Jz] - Fz.bInfo.minimum.z * Tz) * yz),
                Dz = Oz + Fz.subDiv.max * oz + Mz * vz,
                Iz = Uz + Fz.subDiv.max * Kz + Mz * uz,
                Cz = Nz + Fz.subDiv.max * bz + Mz * wz,
                ez = tz + Fz.subDiv.max * sz + Mz * Wz;
              Fz.facetPartitioning[ez] = Fz.facetPartitioning[ez] ? Fz.facetPartitioning[ez] : [], Fz.facetPartitioning[Dz] = Fz.facetPartitioning[Dz] ? Fz.facetPartitioning[Dz] : [], Fz.facetPartitioning[Iz] = Fz.facetPartitioning[Iz] ? Fz.facetPartitioning[Iz] : [], Fz.facetPartitioning[Cz] = Fz.facetPartitioning[Cz] ? Fz.facetPartitioning[Cz] : [], Fz.facetPartitioning[Dz].push(Xz), Iz != Dz && Fz.facetPartitioning[Iz].push(Xz), Cz != Iz && Cz != Dz && Fz.facetPartitioning[Cz].push(Xz), ez != Dz && ez != Iz && ez != Cz && Fz.facetPartitioning[ez].push(Xz)
            }
            if (Zz && Fz && Fz.facetPositions) {
              const zz = Fz.depthSortedFacets[Xz];
              zz.ind = 3 * Xz, zz.sqDistance = Wz.p.DistanceSquared(Fz.facetPositions[Xz], cz)
            }
            sz[gz] += Nz, sz[Hz] += bz, sz[Bz] += wz, sz[Pz] += Nz, sz[rz] += bz, sz[Yz] += wz, sz[xz] += Nz, sz[mz] += bz, sz[Jz] += wz
          }
          for (Xz = 0; Xz < sz.length / 3; Xz++) Nz = sz[3 * Xz], bz = sz[3 * Xz + 1], wz = sz[3 * Xz + 2], Dz = Math.sqrt(Nz * Nz + bz * bz + wz * wz), Dz = 0 === Dz ? 1 : Dz, Nz /= Dz, bz /= Dz, wz /= Dz, sz[3 * Xz] = Nz, sz[3 * Xz + 1] = bz, sz[3 * Xz + 2] = wz
        }
        static _ComputeSides(tz, sz, Fz, Xz, Oz, oz, vz) {
          const Uz = Fz.length,
            Kz = Xz.length;
          let uz, Nz;
          switch (tz = tz || zz.DEFAULTSIDE) {
            case zz.FRONTSIDE:
              break;
            case zz.BACKSIDE:
              for (uz = 0; uz < Uz; uz += 3) {
                const zz = Fz[uz];
                Fz[uz] = Fz[uz + 2], Fz[uz + 2] = zz
              }
              for (Nz = 0; Nz < Kz; Nz++) Xz[Nz] = -Xz[Nz];
              break;
            case zz.DOUBLESIDE: {
              const zz = sz.length,
                tz = zz / 3;
              for (let Fz = 0; Fz < zz; Fz++) sz[zz + Fz] = sz[Fz];
              for (uz = 0; uz < Uz; uz += 3) Fz[uz + Uz] = Fz[uz + 2] + tz, Fz[uz + 1 + Uz] = Fz[uz + 1] + tz, Fz[uz + 2 + Uz] = Fz[uz] + tz;
              for (Nz = 0; Nz < Kz; Nz++) Xz[Kz + Nz] = -Xz[Nz];
              const bz = Oz.length;
              let wz;
              for (wz = 0; wz < bz; wz++) Oz[wz + bz] = Oz[wz];
              for (oz = oz || new Wz.q(0, 0, 1, 1), vz = vz || new Wz.q(0, 0, 1, 1), wz = 0, uz = 0; uz < bz / 2; uz++) Oz[wz] = oz.x + (oz.z - oz.x) * Oz[wz], Oz[wz + 1] = oz.y + (oz.w - oz.y) * Oz[wz + 1], Oz[wz + bz] = vz.x + (vz.z - vz.x) * Oz[wz + bz], Oz[wz + bz + 1] = vz.y + (vz.w - vz.y) * Oz[wz + bz + 1], wz += 2;
              break
            }
          }
        }
        static Parse(tz) {
          const sz = new zz,
            Fz = tz.positions;
          Fz && sz.set(Fz, Xz.m.PositionKind);
          const Wz = tz.normals;
          Wz && sz.set(Wz, Xz.m.NormalKind);
          const Oz = tz.tangents;
          Oz && sz.set(Oz, Xz.m.TangentKind);
          const vz = tz.uvs;
          vz && sz.set(vz, Xz.m.UVKind);
          const Uz = tz.uvs2;
          Uz && sz.set(Uz, Xz.m.UV2Kind);
          const Kz = tz.uvs3;
          Kz && sz.set(Kz, Xz.m.UV3Kind);
          const uz = tz.uvs4;
          uz && sz.set(uz, Xz.m.UV4Kind);
          const Nz = tz.uvs5;
          Nz && sz.set(Nz, Xz.m.UV5Kind);
          const wz = tz.uvs6;
          wz && sz.set(wz, Xz.m.UV6Kind);
          const Dz = tz.colors;
          Dz && (sz.set(oz.d.CheckColors4(Dz, Fz.length / 3), Xz.m.ColorKind), void 0 !== tz.hasVertexAlpha && (sz.hasVertexAlpha = tz.hasVertexAlpha));
          const gz = tz.matricesIndices;
          gz && sz.set(gz, Xz.m.MatricesIndicesKind);
          const Hz = tz.matricesWeights;
          Hz && sz.set(Hz, Xz.m.MatricesWeightsKind);
          const Bz = tz.indices;
          Bz && (sz.indices = Bz);
          const Pz = tz.materialInfos;
          if (Pz) {
            sz.materialInfos = [];
            for (const zz of Pz) {
              const tz = new bz;
              tz.indexCount = zz.indexCount, tz.indexStart = zz.indexStart, tz.verticesCount = zz.verticesCount, tz.verticesStart = zz.verticesStart, tz.materialIndex = zz.materialIndex, sz.materialInfos.push(tz)
            }
          }
          return sz
        }
        static ImportVertexData(tz, sz) {
          const Fz = zz.Parse(tz);
          sz.setAllVerticesData(Fz, tz.updatable)
        }
      }, (() => {
        const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [Uz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], sz = [Uz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], wz = [Uz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Dz = [Uz.m.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Fz.h)(zz, null, tz, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector3Coordinates" in zz,
            get: zz => zz._TransformVector3Coordinates
          },
          metadata: Wz
        }, null, gz), (0, Fz.h)(zz, null, sz, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector3Normals" in zz,
            get: zz => zz._TransformVector3Normals
          },
          metadata: Wz
        }, null, gz), (0, Fz.h)(zz, null, wz, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: zz => "_TransformVector4Normals" in zz,
            get: zz => zz._TransformVector4Normals
          },
          metadata: Wz
        }, null, gz), (0, Fz.h)(zz, null, Dz, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: zz => "_FlipFaces" in zz,
            get: zz => zz._FlipFaces
          },
          metadata: Wz
        }, null, gz), Wz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wz
        })
      })(), zz.FRONTSIDE = ((0, Fz.k)(zz, gz), 0), zz.BACKSIDE = 1, zz.DOUBLESIDE = 2, zz.DEFAULTSIDE = 0, zz._UniqueIdGenerator = 0, zz
    })()
  },
  39623: (zz, tz, sz) => {
    var Fz = sz(36475),
      Wz = sz(38097),
      Xz = sz(39472),
      Oz = sz(39555),
      oz = sz(39293);
    const vz = "bakedVertexAnimationSettingsInstanced";

    function Uz(zz) {
      const tz = zz.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return tz instanceof Float32Array || tz instanceof Uint16Array
    }

    function Kz(zz, tz, sz, Fz) {
      sz.Z6(Number.POSITIVE_INFINITY), Fz.Z6(Number.NEGATIVE_INFINITY);
      for (let Wz = 0; Wz < 3 * tz; Wz += 3) {
        const tz = zz[Wz],
          Xz = zz[Wz + 1],
          Oz = zz[Wz + 2];
        tz < sz.x && (sz.x = tz), Xz < sz.y && (sz.y = Xz), Oz < sz.z && (sz.z = Oz), tz > Fz.x && (Fz.x = tz), Xz > Fz.y && (Fz.y = Xz), Oz > Fz.z && (Fz.z = Oz)
      }
    }

    function uz(zz, tz, sz) {
      sz && (zz.x -= zz.x * sz.x + sz.y, zz.y -= zz.y * sz.x + sz.y, zz.z -= zz.z * sz.x + sz.y, tz.x += tz.x * sz.x + sz.y, tz.y += tz.y * sz.x + sz.y, tz.z += tz.z * sz.x + sz.y)
    }

    function Nz(zz, tz, sz, Wz, Xz) {
      const Oz = Fz.m.XD[7],
        oz = Fz.m.XD[8];
      for (let vz = 0; vz < 2; ++vz)
        for (let Uz = 0; Uz < 2; ++Uz)
          for (let Kz = 0; Kz < 2; ++Kz) Oz.set(vz ? tz.x : zz.x, Uz ? tz.y : zz.y, Kz ? tz.z : zz.z), Fz.p.TransformCoordinatesToRef(Oz, sz, oz), Wz.minimizeInPlace(oz), Xz.maximizeInPlace(oz)
    }

    function bz(zz, tz, sz, Wz, Xz) {
      const Oz = Fz.m.XD[7];
      for (let oz = 0; oz < 3 * tz; oz += 3) Fz.p.TransformCoordinatesFromFloatsToRef(zz[oz], zz[oz + 1], zz[oz + 2], sz, Oz), Wz.minimizeInPlace(Oz), Xz.maximizeInPlace(Oz)
    }
    let wz = !1;
    wz || (wz = !0, Oz.c.prototype.thinInstanceAdd = function(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.aJ().FD().getCaps().instancedArrays) return Wz.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(zz) ? zz.length : 1);
      const sz = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(zz))
        for (let Fz = 0; Fz < zz.length; ++Fz) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, zz[Fz], Fz === zz.length - 1 && tz);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, zz, tz);
      return sz
    }, Oz.c.prototype.thinInstanceAddSelf = function() {
      let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Fz.e.IdentityReadOnly, zz)
    }, Oz.c.prototype.thinInstanceRegisterAttribute = function(zz, tz) {
      zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), this.removeVerticesData(zz), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[zz] = tz, this._userThinInstanceBuffersStorage.sizes[zz] = tz * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[zz] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[zz]), this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new oz.m(this.FD(), this._userThinInstanceBuffersStorage.data[zz], zz, !0, !1, tz, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz])
    }, Oz.c.prototype.thinInstanceSetMatrixAt = function(zz, tz) {
      let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || zz >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Fz = this._thinInstanceDataStorage.matrixData;
      return tz.copyToArray(Fz, 16 * zz), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[zz] = tz), sz && (this.F_("matrix"), this.oD || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Oz.c.prototype.thinInstanceSetAttributeAt = function(zz, tz, sz) {
      let Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[zz] || tz >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(zz, 0), this._userThinInstanceBuffersStorage.data[zz].set(sz, tz * this._userThinInstanceBuffersStorage.strides[zz]), Fz && this.F_(zz), !0)
    }, Object.defineProperty(Oz.c.prototype, "E1", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(zz) {
        const tz = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        zz <= (tz ? tz.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = zz)
      },
      enumerable: !0,
      configurable: !0
    }), Oz.c.prototype._thinInstanceCreateMatrixBuffer = function(zz, tz) {
      let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Fz = new oz.e(this.FD(), tz, !sz, 16, !1, !0);
      for (let Wz = 0; Wz < 4; Wz++) this.setVerticesBuffer(Fz.createVertexBuffer(zz + Wz, 4 * Wz, 4));
      return Fz
    }, Oz.c.prototype.b_ = function(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (sz = sz || 16, "matrix" === zz) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = tz ? tz.length : 32 * sz, this._thinInstanceDataStorage.matrixData = tz, this._thinInstanceDataStorage.worldMatrices = null, null !== tz ? (this._thinInstanceDataStorage.instancesCount = tz.length / sz, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", tz, Fz), this.oD || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.oD || this.refreshBoundingInfo());
      else if ("previousMatrix" === zz) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = tz, null !== tz && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", tz, Fz));
      else if ("splatIndex" === zz && tz) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = tz.length / sz, this._userThinInstanceBuffersStorage.data[zz] = tz, this._userThinInstanceBuffersStorage.strides[zz] = sz, this._userThinInstanceBuffersStorage.sizes[zz] = tz.length;
        const Fz = new oz.e(this.FD(), tz, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Fz;
        for (let tz = 0; tz < 4; tz++) this.setVerticesBuffer(Fz.createVertexBuffer(zz + tz, 4 * tz, 4))
      } else zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), null === tz ? this._userThinInstanceBuffersStorage?.data[zz] && (this.removeVerticesData(zz), delete this._userThinInstanceBuffersStorage.data[zz], delete this._userThinInstanceBuffersStorage.strides[zz], delete this._userThinInstanceBuffersStorage.sizes[zz], delete this._userThinInstanceBuffersStorage.vertexBuffers[zz]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[zz] = tz, this._userThinInstanceBuffersStorage.strides[zz] = sz, this._userThinInstanceBuffersStorage.sizes[zz] = tz.length, this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new oz.m(this.FD(), tz, zz, !Fz, !1, sz, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
    }, Oz.c.prototype.F_ = function(zz) {
      "matrix" === zz ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === zz ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === zz ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[zz], 0, this._thinInstanceDataStorage.instancesCount) : (zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[zz] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[zz].isUpdatable() && this._thinInstanceRecreateBuffer(zz), this._userThinInstanceBuffersStorage.vertexBuffers[zz].updateDirectly(this._userThinInstanceBuffersStorage.data[zz], 0)))
    }, Oz.c.prototype.thinInstancePartialBufferUpdate = function(zz, tz, sz) {
      if ("matrix" === zz) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof tz ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * sz * Float32Array.BYTES_PER_ELEMENT, 16 * tz), 16 * sz) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(tz, sz));
      else if (zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[zz]) {
        const Fz = this._userThinInstanceBuffersStorage.vertexBuffers[zz];
        if ("number" === typeof tz) {
          const Fz = new Float32Array(this._userThinInstanceBuffersStorage.data[zz].buffer, this._userThinInstanceBuffersStorage.data[zz].byteOffset + sz * this._userThinInstanceBuffersStorage.strides[zz] * Float32Array.BYTES_PER_ELEMENT, tz * this._userThinInstanceBuffersStorage.strides[zz]);
          this._userThinInstanceBuffersStorage.vertexBuffers[zz].updateDirectly(Fz, sz * this._userThinInstanceBuffersStorage.strides[zz])
        } else Fz.updateDirectly(tz, sz)
      }
    }, Oz.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const zz = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let tz = 0; tz < this._thinInstanceDataStorage.instancesCount; ++tz) this._thinInstanceDataStorage.worldMatrices[tz] = Fz.e.FromArray(zz, 16 * tz)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Oz.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Oz = this._thinInstanceDataStorage.boundingVectors;
      if (zz || !this.rawBoundingInfo) {
        if (Oz.length = 0, Wz && function(zz, tz, sz) {
            const Wz = zz._userThinInstanceBuffersStorage,
              Oz = Wz?.data[vz],
              wz = Wz?.strides[vz];
            if (!Oz || !wz || wz < 4 || !Uz(zz)) return !1;
            const Dz = zz._thinInstanceDataStorage.matrixData;
            if (!Dz) return !1;
            const gz = {},
              Hz = Fz.m.Vector4[0],
              Bz = Fz.m.XD[1],
              Pz = Fz.m.XD[2],
              rz = Fz.m.XD[3],
              Yz = Fz.m.XD[4],
              xz = Fz.m.XD[5],
              mz = Fz.m.XD[6],
              Jz = Fz.m.Matrix[2],
              Iz = zz.geometry ? zz.geometry.boundingBias : null,
              Cz = zz.getTotalVertices();
            Bz.Z6(Number.POSITIVE_INFINITY), Pz.Z6(Number.NEGATIVE_INFINITY), rz.Z6(Number.POSITIVE_INFINITY), Yz.Z6(Number.NEGATIVE_INFINITY);
            for (let Xz = 0; Xz < zz._thinInstanceDataStorage.instancesCount; ++Xz) {
              const tz = Xz * wz;
              Hz.set(Oz[tz], Oz[tz + 1], Oz[tz + 2], Oz[tz + 3]);
              const Wz = zz._getData({
                applyMorph: sz,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Hz,
                updatePositionsArray: !1,
                cache: gz
              }, null, oz.m.PositionKind);
              if (!Wz) return !1;
              Kz(Wz, Cz, xz, mz), uz(xz, mz, Iz), Bz.minimizeInPlace(xz), Pz.maximizeInPlace(mz), Fz.e.FromArrayToRef(Dz, 16 * Xz, Jz), Iz ? Nz(xz, mz, Jz, rz, Yz) : bz(Wz, Cz, Jz, rz, Yz)
            }
            return !(!isFinite(Bz.x) || !isFinite(rz.x)) && (zz.rC().reConstruct(rz, Yz), zz.rawBoundingInfo = new Xz.d(Bz, Pz), function(zz, tz) {
              zz.length = 0;
              for (let sz = 0; sz < tz.boundingBox.vectors.length; ++sz) zz.push(tz.boundingBox.vectors[sz].clone())
            }(tz, zz.rawBoundingInfo), zz._updateBoundingInfo(), !0)
          }(this, Oz, sz)) return;
        Wz && this.bakedVertexAnimationManager?.isEnabled && Uz(this) ? this.refreshBoundingInfo({
          applySkeleton: tz,
          applyMorph: sz,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(tz, sz);
        const zz = this.rC();
        this.rawBoundingInfo = new Xz.d(zz.minimum, zz.maximum)
      }
      const wz = this.rC(),
        Dz = this._thinInstanceDataStorage.matrixData;
      if (0 === Oz.length)
        for (let Fz = 0; Fz < wz.boundingBox.vectors.length; ++Fz) Oz.push(wz.boundingBox.vectors[Fz].clone());
      Fz.m.XD[0].Z6(Number.POSITIVE_INFINITY), Fz.m.XD[1].Z6(Number.NEGATIVE_INFINITY);
      for (let Xz = 0; Xz < this._thinInstanceDataStorage.instancesCount; ++Xz) {
        Fz.e.FromArrayToRef(Dz, 16 * Xz, Fz.m.Matrix[0]);
        for (let zz = 0; zz < Oz.length; ++zz) Fz.p.TransformCoordinatesToRef(Oz[zz], Fz.m.Matrix[0], Fz.m.XD[2]), Fz.m.XD[0].minimizeInPlace(Fz.m.XD[2]), Fz.m.XD[1].maximizeInPlace(Fz.m.XD[2])
      }
      wz.reConstruct(Fz.m.XD[0], Fz.m.XD[1]), this._updateBoundingInfo()
    }, Oz.c.prototype._thinInstanceRecreateBuffer = function(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === zz ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, tz)) : "previousMatrix" === zz ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, tz)) : (zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[zz]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new oz.m(this.FD(), this._userThinInstanceBuffersStorage.data[zz], zz, !tz, !1, this._userThinInstanceBuffersStorage.strides[zz], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
    }, Oz.c.prototype._thinInstanceUpdateBufferSize = function(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      zz === oz.m.ColorKind && (zz = oz.m.ColorInstanceKind);
      const sz = "matrix" === zz;
      if (!sz && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[zz])) return;
      const Fz = sz ? 16 : this._userThinInstanceBuffersStorage.strides[zz],
        Wz = sz ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[zz];
      let Xz = sz ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[zz];
      const Oz = (this._thinInstanceDataStorage.instancesCount + tz) * Fz;
      let vz = Wz;
      for (; vz < Oz;) vz *= 2;
      if (!Xz || Wz != vz) {
        if (Xz) {
          const zz = new Float32Array(vz);
          zz.set(Xz, 0), Xz = zz
        } else Xz = new Float32Array(vz);
        sz ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Xz, !1), this._thinInstanceDataStorage.matrixData = Xz, this._thinInstanceDataStorage.matrixBufferSize = vz, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Xz, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[zz]?.dispose(), this._userThinInstanceBuffersStorage.data[zz] = Xz, this._userThinInstanceBuffersStorage.sizes[zz] = vz, this._userThinInstanceBuffersStorage.vertexBuffers[zz] = new oz.m(this.FD(), Xz, zz, !0, !1, Fz, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[zz]))
      }
    }, Oz.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Oz.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39585: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Bz,
      f: () => Dz
    });
    var Fz, Wz, Xz, Oz, oz = sz(39167),
      vz = sz(39170),
      Uz = sz(39181),
      Kz = sz(36505),
      uz = sz(36475),
      Nz = sz(39374),
      bz = sz(36518),
      wz = sz(39065);
    let Dz = (() => {
      var zz;
      let tz, sz, Fz, Wz, Xz, Oz, bz, wz, Dz, gz = Nz.e,
        Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        Iz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [];
      return zz = class extends gz {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(tz) {
          this._billboardMode !== tz && (this._billboardMode = tz, this._cache.useBillboardPosition = 0 !== (this._billboardMode & zz.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(zz) {
          this._infiniteDistance !== zz && (this._infiniteDistance = zz)
        }
        constructor(tz) {
          let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(tz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new uz.p(0, 0, 1), this._up = new uz.p(0, 1, 0), this._right = new uz.p(1, 0, 0), this._position = (0, oz.k)(this, Hz, uz.p.Zero()), this._rotation = ((0, oz.k)(this, Bz), (0, oz.k)(this, Pz, uz.p.Zero())), this._rotationQuaternion = ((0, oz.k)(this, rz), (0, oz.k)(this, Yz, null)), this._scaling = ((0, oz.k)(this, xz), (0, oz.k)(this, mz, uz.p.One())), this._transformToBoneReferal = ((0, oz.k)(this, Jz), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, oz.k)(this, Iz, zz.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, oz.k)(this, Cz), (0, oz.k)(this, ez, 1)), this._infiniteDistance = ((0, oz.k)(this, Zz), (0, oz.k)(this, Gz, !1)), this.ignoreNonUniformScaling = ((0, oz.k)(this, Tz), (0, oz.k)(this, cz, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, oz.k)(this, jz), (0, oz.k)(this, Az, !1)), this._poseMatrix = ((0, oz.k)(this, yz), null), this._localMatrix = uz.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = uz.p.Zero(), this._absoluteScaling = uz.p.Zero(), this._absoluteRotationQuaternion = uz.h.Identity(), this._pivotMatrix = uz.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Kz.c, this._nonUniformScaling = !1, sz && this.aJ().addTransformNode(this)
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
        get nX() {
          return this._scaling
        }
        set nX(zz) {
          this._scaling = zz, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(zz) {
          this._rotationQuaternion = zz, zz && this._rotation.Z6(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return uz.p.TransformNormalFromFloatsToRef(0, 0, this.aJ().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return uz.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return uz.p.TransformNormalFromFloatsToRef(this.aJ().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(zz) {
          return this._poseMatrix ? (this._poseMatrix.vsz(zz), this) : (this._poseMatrix = zz.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = uz.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const tz = this._cache;
          return this._billboardMode === tz.billboardMode && this._billboardMode === zz.BILLBOARDMODE_NONE && (!tz.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.vsz(zz), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = tz, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = uz.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            tz = arguments.length > 1 ? arguments[1] : void 0,
            sz = arguments.length > 2 ? arguments[2] : void 0;
          const Fz = this.clone("Clone of " + (this.name || this.id), zz || this.parent, !0);
          Fz && sz && sz(this, Fz);
          for (const Wz of this.getChildTransformNodes(!0)) Wz.instantiateHierarchy(Fz, tz, sz);
          return Fz
        }
        HI() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return zz ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Z6(0), this._rotationQuaternion = this._rotationQuaternion || uz.h.Identity(), zz.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = zz, this._absolutePosition.m_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get BOz() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(zz) {
          if (!zz) return this;
          let tz, sz, Fz;
          if (void 0 === zz.x) {
            if (arguments.length < 3) return this;
            tz = arguments[0], sz = arguments[1], Fz = arguments[2]
          } else tz = zz.x, sz = zz.y, Fz = zz.z;
          if (this.parent) {
            const zz = uz.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(zz), uz.p.TransformCoordinatesFromFloatsToRef(tz, sz, Fz, zz, this.position)
          } else this.position.x = tz, this.position.y = sz, this.position.z = Fz;
          return this._absolutePosition.vsz(zz), this
        }
        setPositionWithLocalVector(zz) {
          return this.computeWorldMatrix(), this.position = uz.p.TransformNormal(zz, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const zz = uz.m.Matrix[0];
          return this._localMatrix.invertToRef(zz), uz.p.TransformNormal(this.position, zz)
        }
        locallyTranslate(zz) {
          return this.computeWorldMatrix(!0), this.position = uz.p.TransformCoordinates(zz, this._localMatrix), this
        }
        lookAt(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Oz = zz._LookAtVectorCache,
            oz = 0 === Xz ? this.position : this.getAbsolutePosition();
          if (tz.subtractToRef(oz, Oz), this.setDirection(Oz, sz, Fz, Wz), 1 === Xz && this.parent)
            if (this.rotationQuaternion) {
              const zz = uz.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(zz);
              const tz = uz.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(tz), tz.invert(), zz.multiplyToRef(tz, zz), this.rotationQuaternion.fromRotationMatrix(zz)
            } else {
              const zz = uz.m.Quaternion[0];
              uz.h.FromEulerVectorToRef(this.rotation, zz);
              const tz = uz.m.Matrix[0];
              zz.toRotationMatrix(tz);
              const sz = uz.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(sz), sz.invert(), tz.multiplyToRef(sz, tz), zz.fromRotationMatrix(tz), zz.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Mq(zz) {
          const tz = uz.p.Zero();
          return this.getDirectionToRef(zz, tz), tz
        }
        getDirectionToRef(zz, tz) {
          return uz.p.TransformNormalToRef(zz, this.getWorldMatrix(), tz), this
        }
        setDirection(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Wz = -Math.atan2(zz.z, zz.x) + Math.PI / 2,
            Xz = Math.sqrt(zz.x * zz.x + zz.z * zz.z),
            Oz = -Math.atan2(zz.y, Xz);
          return this.rotationQuaternion ? uz.h.RotationYawPitchRollToRef(Wz + tz, Oz + sz, Fz, this.rotationQuaternion) : (this.rotation.x = Oz + sz, this.rotation.y = Wz + tz, this.rotation.z = Fz), this
        }
        setPivotPoint(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.aJ().getRenderId() && this.computeWorldMatrix(!0);
          const sz = this.getWorldMatrix();
          if (1 == tz) {
            const tz = uz.m.Matrix[0];
            sz.invertToRef(tz), zz = uz.p.TransformCoordinates(zz, tz)
          }
          return this.setPivotMatrix(uz.e.Translation(-zz.x, -zz.y, -zz.z), !0)
        }
        getPivotPoint() {
          const zz = uz.p.Zero();
          return this.getPivotPointToRef(zz), zz
        }
        getPivotPointToRef(zz) {
          return zz.x = -this._pivotMatrix.m[12], zz.y = -this._pivotMatrix.m[13], zz.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const zz = uz.p.Zero();
          return this.getAbsolutePivotPointToRef(zz), zz
        }
        getAbsolutePivotPointToRef(zz) {
          return this.getPivotPointToRef(zz), uz.p.TransformCoordinatesToRef(zz, this.getWorldMatrix(), zz), this
        }
        wtz(zz) {
          if (this._isDirty) return this;
          if (this._children)
            for (const tz of this._children) tz.wtz(zz);
          return super.wtz(zz)
        }
        setParent(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!tz && !this.parent) return this;
          const Wz = uz.m.Quaternion[0],
            Xz = uz.m.XD[0],
            Oz = uz.m.XD[1],
            oz = uz.m.Matrix[1];
          uz.e.IdentityToRef(oz);
          const vz = uz.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let Uz = this.rotationQuaternion;
          return Uz || (Uz = zz._TmpRotation, uz.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Uz)), uz.e.ComposeToRef(this.nX, Uz, this.position, vz), this.parent && vz.multiplyToRef(this.parent.computeWorldMatrix(!0), vz), tz && (tz.computeWorldMatrix(!0).invertToRef(oz), vz.multiplyToRef(oz, vz)), vz.decompose(Oz, Wz, Xz, sz ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.vsz(Wz) : Wz.toEulerAnglesToRef(this.rotation), this.nX.vsz(Oz), this.position.vsz(Xz), this.parent = tz, Fz && this.setPivotMatrix(uz.e.Identity()), this
        }
        addChild(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return zz.setParent(this, tz), this
        }
        removeChild(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return zz.parent !== this || zz.setParent(null, tz), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(zz) {
          return this._nonUniformScaling !== zz && (this._nonUniformScaling = zz, !0)
        }
        attachToBone(zz, tz) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = tz, this.parent = zz, zz.getSkeleton().prepare(!0), zz.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = zz ? this._currentParentWhenAttachingToBone : null, this) : (zz && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(tz, sz, Fz) {
          let Wz;
          if (tz.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Z6(0)), Fz && 0 !== Fz) {
            if (this.parent) {
              const zz = this.parent.getWorldMatrix(),
                Fz = uz.m.Matrix[0];
              zz.invertToRef(Fz), tz = uz.p.TransformNormal(tz, Fz), zz.determinant() < 0 && (sz *= -1)
            }
            Wz = uz.h.RotationAxisToRef(tz, sz, zz._RotationAxisCache), Wz.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Wz = uz.h.RotationAxisToRef(tz, sz, zz._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Wz, this.rotationQuaternion);
          return this
        }
        rotateAround(zz, tz, sz) {
          tz.normalize(), this.rotationQuaternion || (this.rotationQuaternion = uz.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Z6(0));
          const Fz = uz.m.XD[0],
            Wz = uz.m.XD[1],
            Xz = uz.m.XD[2],
            Oz = uz.m.Quaternion[0],
            oz = uz.m.Matrix[0],
            vz = uz.m.Matrix[1],
            Uz = uz.m.Matrix[2],
            Kz = uz.m.Matrix[3];
          return zz.subtractToRef(this.position, Fz), uz.e.TranslationToRef(Fz.x, Fz.y, Fz.z, oz), uz.e.TranslationToRef(-Fz.x, -Fz.y, -Fz.z, vz), uz.e.RotationAxisToRef(tz, sz, Uz), vz.multiplyToRef(Uz, Kz), Kz.multiplyToRef(oz, Kz), Kz.decompose(Wz, Oz, Xz), this.position.addInPlace(Xz), Oz.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(zz, tz, sz) {
          const Fz = zz.scale(tz);
          if (sz && 0 !== sz) this.setAbsolutePosition(this.getAbsolutePosition().add(Fz));
          else {
            const zz = this.getPositionExpressedInLocalSpace().add(Fz);
            this.setPositionWithLocalVector(zz)
          }
          return this
        }
        addRotation(zz, tz, sz) {
          let Fz;
          this.rotationQuaternion ? Fz = this.rotationQuaternion : (Fz = uz.m.Quaternion[1], uz.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Fz));
          const Wz = uz.m.Quaternion[0];
          return uz.h.RotationYawPitchRollToRef(tz, zz, sz, Wz), Fz.multiplyInPlace(Wz), this.rotationQuaternion || Fz.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== zz.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Fz = this.aJ().getRenderId();
          if (!this._isDirty && !tz && (this._currentRenderId === Fz || this.isSynchronized())) return this._currentRenderId = Fz, this._worldMatrix;
          sz = sz || this.aJ().activeCamera, this._updateCache();
          const Wz = this._cache;
          Wz.pivotMatrixUpdated = !1, Wz.billboardMode = this.billboardMode, Wz.infiniteDistance = this.infiniteDistance, Wz.parent = this._parentNode, this._currentRenderId = Fz, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Xz = this._getEffectiveParent(),
            Oz = zz._TmpScaling;
          let oz, vz = this._position;
          if (this._infiniteDistance && !this.parent && sz) {
            const tz = sz.getWorldMatrix().m;
            vz = zz._TmpTranslation, vz.m_(this._position.x + tz[12], this._position.y + tz[13], this._position.z + tz[14])
          }
          if (Oz.m_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, oz = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(uz.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.m_(0, 0, 0))
            }
          } else oz = zz._TmpRotation, uz.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, oz);
          if (this._usePivotMatrix) {
            const zz = uz.m.Matrix[1];
            uz.e.ScalingToRef(Oz.x, Oz.y, Oz.z, zz);
            const tz = uz.m.Matrix[0];
            oz.toRotationMatrix(tz), this._pivotMatrix.multiplyToRef(zz, uz.m.Matrix[4]), uz.m.Matrix[4].multiplyToRef(tz, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(vz.x, vz.y, vz.z)
          } else uz.e.ComposeToRef(Oz, oz, vz, this._localMatrix);
          if (Xz && Xz.getWorldMatrix) {
            if (tz && Xz.computeWorldMatrix(tz), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const zz = this.parent;
                zz.getSkeleton().prepare(), zz.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), uz.m.Matrix[7])
              } else uz.m.Matrix[7].vsz(Xz.getWorldMatrix());
              const tz = uz.m.XD[5],
                sz = uz.m.XD[6],
                Fz = uz.m.Quaternion[0];
              uz.m.Matrix[7].decompose(sz, Fz, tz), uz.e.ScalingToRef(sz.x, sz.y, sz.z, uz.m.Matrix[7]), uz.m.Matrix[7].setTranslation(tz), zz.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Fz, tz), this._localMatrix.setTranslation(tz)), this._localMatrix.multiplyToRef(uz.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const zz = this.parent;
              zz.getSkeleton().prepare(), this._localMatrix.multiplyToRef(zz.getFinalMatrix(), uz.m.Matrix[6]), uz.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Xz.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.vsz(this._localMatrix);
          if (sz && this.billboardMode)
            if (Wz.useBillboardPosition) {
              const tz = uz.m.XD[0];
              this._worldMatrix.getTranslationToRef(tz);
              const Fz = sz.globalPosition;
              this._worldMatrix.invertToRef(uz.m.Matrix[1]);
              const Wz = uz.m.XD[1];
              uz.p.TransformCoordinatesToRef(Fz, uz.m.Matrix[1], Wz), Wz.normalize();
              const Xz = -Math.atan2(Wz.z, Wz.x) + Math.PI / 2,
                Oz = Math.sqrt(Wz.x * Wz.x + Wz.z * Wz.z),
                oz = -Math.atan2(Wz.y, Oz);
              if (uz.h.RotationYawPitchRollToRef(Xz, oz, 0, uz.m.Quaternion[0]), (this.billboardMode & zz.BILLBOARDMODE_ALL) !== zz.BILLBOARDMODE_ALL) {
                const tz = uz.m.XD[1];
                uz.m.Quaternion[0].toEulerAnglesToRef(tz), (this.billboardMode & zz.BILLBOARDMODE_X) !== zz.BILLBOARDMODE_X && (tz.x = 0), (this.billboardMode & zz.BILLBOARDMODE_Y) !== zz.BILLBOARDMODE_Y && (tz.y = 0), (this.billboardMode & zz.BILLBOARDMODE_Z) !== zz.BILLBOARDMODE_Z && (tz.z = 0), uz.e.RotationYawPitchRollToRef(tz.y, tz.x, tz.z, uz.m.Matrix[0])
              } else uz.e.FromQuaternionToRef(uz.m.Quaternion[0], uz.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(uz.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(uz.m.XD[0])
            } else {
              const tz = uz.m.XD[0];
              this._worldMatrix.getTranslationToRef(tz), uz.m.Matrix[1].vsz(sz.getViewMatrix());
              const Fz = this.aJ().useRightHandedSystem;
              if (Fz && uz.m.Matrix[1].multiplyToRef(zz._TmpRHRestore, uz.m.Matrix[1]), uz.m.Matrix[1].setTranslationFromFloats(0, 0, 0), uz.m.Matrix[1].invertToRef(uz.m.Matrix[0]), (this.billboardMode & zz.BILLBOARDMODE_ALL) !== zz.BILLBOARDMODE_ALL) {
                uz.m.Matrix[0].decompose(void 0, uz.m.Quaternion[0], void 0);
                const tz = uz.m.XD[1];
                uz.m.Quaternion[0].toEulerAnglesToRef(tz), (this.billboardMode & zz.BILLBOARDMODE_X) !== zz.BILLBOARDMODE_X && (tz.x = 0), (this.billboardMode & zz.BILLBOARDMODE_Y) !== zz.BILLBOARDMODE_Y && (tz.y = 0), (this.billboardMode & zz.BILLBOARDMODE_Z) !== zz.BILLBOARDMODE_Z && (tz.z = 0), Fz && (tz.y += Math.PI), uz.e.RotationYawPitchRollToRef(tz.y, tz.x, tz.z, uz.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(uz.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(uz.m.XD[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Xz && Xz._nonUniformScaling ? this._updateNonUniformScalingState(Xz._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.m_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = uz.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), zz) {
            const zz = this.getChildren();
            for (let tz = 0; tz < zz.length; ++tz) {
              const sz = zz[tz];
              if (sz) {
                sz.computeWorldMatrix();
                const zz = uz.m.Matrix[0];
                sz._localMatrix.multiplyToRef(this._localMatrix, zz);
                const tz = uz.m.Quaternion[0];
                zz.decompose(sz.nX, tz, sz.position), sz.rotationQuaternion ? sz.rotationQuaternion.vsz(tz) : tz.toEulerAnglesToRef(sz.rotation)
              }
            }
          }
          this.nX.m_(1, 1, 1), this.position.m_(0, 0, 0), this.rotation.m_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = uz.h.Identity()), this._worldMatrix = uz.e.Identity()
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
          return zz || (zz = this.aJ().activeCamera), uz.p.TransformCoordinates(this.getAbsolutePosition(), zz.getViewMatrix())
        }
        getDistanceToCamera() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return zz || (zz = this.aJ().activeCamera), this.getAbsolutePosition().subtract(zz.globalPosition).length()
        }
        clone(tz, sz, Fz) {
          const Wz = Uz.e.Clone((() => new zz(tz, this.aJ())), this);
          if (Wz.name = tz, Wz.id = tz, sz && (Wz.parent = sz), !Fz) {
            const zz = this.getDescendants(!0);
            for (let sz = 0; sz < zz.length; sz++) {
              const Fz = zz[sz];
              Fz.clone && Fz.clone(tz + "." + Fz.name, Wz)
            }
          }
          return Wz
        }
        serialize(zz) {
          const tz = Uz.e.Serialize(this, zz);
          return tz.type = this.getClassName(), tz.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(tz), tz.localMatrix = this.getPivotMatrix().hsz(), tz.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (tz.HI = !0), Uz.e.AppendSerializedAnimations(this, tz), tz.du = this.serializeAnimationRanges(), tz
        }
        getChildTransformNodes(tz, sz) {
          const Fz = [];
          return this._getDescendants(Fz, tz, (tz => (!sz || sz(tz)) && tz instanceof zz)), Fz
        }
        dispose(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.aJ().stopAnimation(this), this.aJ().removeTransformNode(this), this._parentContainer) {
            const zz = this._parentContainer.transformNodes.indexOf(this);
            zz > -1 && this._parentContainer.transformNodes.splice(zz, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), zz) {
            const zz = this.getChildTransformNodes(!0);
            for (const tz of zz) tz.parent = null, tz.computeWorldMatrix(!0)
          }
          super.dispose(zz, tz)
        }
        normalizeToUnitCube() {
          let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sz = arguments.length > 2 ? arguments[2] : void 0,
            Fz = null,
            Wz = null;
          tz && (this.rotationQuaternion ? (Wz = this.rotationQuaternion.clone(), this.rotationQuaternion.m_(0, 0, 0, 1)) : this.rotation && (Fz = this.rotation.clone(), this.rotation.m_(0, 0, 0)));
          const Xz = this.getHierarchyBoundingVectors(zz, sz),
            Oz = Xz.max.subtract(Xz.min),
            oz = Math.max(Oz.x, Oz.y, Oz.z);
          if (0 === oz) return this;
          const vz = 1 / oz;
          return this.nX.scaleInPlace(vz), tz && (this.rotationQuaternion && Wz ? this.rotationQuaternion.vsz(Wz) : this.rotation && Fz && this.rotation.vsz(Fz)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(gz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, vz.H)("position")], sz = [(0, vz.H)("rotation")], Fz = [(0, vz.z)("rotationQuaternion")], Wz = [(0, vz.H)("nX")], Xz = [(0, vz.J)("billboardMode")], Oz = [(0, vz.J)()], bz = [(0, vz.J)("infiniteDistance")], wz = [(0, vz.J)()], Dz = [(0, vz.J)()], (0, oz.h)(null, null, tz, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: zz => "_position" in zz,
            get: zz => zz._position,
            set: (zz, tz) => {
              zz._position = tz
            }
          },
          metadata: Uz
        }, Hz, Bz), (0, oz.h)(null, null, sz, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: zz => "_rotation" in zz,
            get: zz => zz._rotation,
            set: (zz, tz) => {
              zz._rotation = tz
            }
          },
          metadata: Uz
        }, Pz, rz), (0, oz.h)(null, null, Fz, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: zz => "_rotationQuaternion" in zz,
            get: zz => zz._rotationQuaternion,
            set: (zz, tz) => {
              zz._rotationQuaternion = tz
            }
          },
          metadata: Uz
        }, Yz, xz), (0, oz.h)(null, null, Wz, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "_scaling" in zz,
            get: zz => zz._scaling,
            set: (zz, tz) => {
              zz._scaling = tz
            }
          },
          metadata: Uz
        }, mz, Jz), (0, oz.h)(null, null, Xz, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "_billboardMode" in zz,
            get: zz => zz._billboardMode,
            set: (zz, tz) => {
              zz._billboardMode = tz
            }
          },
          metadata: Uz
        }, Iz, Cz), (0, oz.h)(null, null, Oz, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: zz => "scalingDeterminant" in zz,
            get: zz => zz.scalingDeterminant,
            set: (zz, tz) => {
              zz.scalingDeterminant = tz
            }
          },
          metadata: Uz
        }, ez, Zz), (0, oz.h)(null, null, bz, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "_infiniteDistance" in zz,
            get: zz => zz._infiniteDistance,
            set: (zz, tz) => {
              zz._infiniteDistance = tz
            }
          },
          metadata: Uz
        }, Gz, Tz), (0, oz.h)(null, null, wz, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "ignoreNonUniformScaling" in zz,
            get: zz => zz.ignoreNonUniformScaling,
            set: (zz, tz) => {
              zz.ignoreNonUniformScaling = tz
            }
          },
          metadata: Uz
        }, cz, jz), (0, oz.h)(null, null, Dz, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: zz => "reIntegrateRotationIntoRotationQuaternion" in zz,
            get: zz => zz.reIntegrateRotationIntoRotationQuaternion,
            set: (zz, tz) => {
              zz.reIntegrateRotationIntoRotationQuaternion = tz
            }
          },
          metadata: Uz
        }, Az, yz), Uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uz
        })
      })(), zz.BILLBOARDMODE_NONE = 0, zz.BILLBOARDMODE_X = 1, zz.BILLBOARDMODE_Y = 2, zz.BILLBOARDMODE_Z = 4, zz.BILLBOARDMODE_ALL = 7, zz.BILLBOARDMODE_USE_POSITION = 128, zz.BillboardUseParentOrientation = !1, zz._TmpRotation = uz.h.Zero(), zz._TmpScaling = uz.p.Zero(), zz._TmpTranslation = uz.p.Zero(), zz._TmpRHRestore = uz.e.Scaling(1, 1, -1), zz._LookAtVectorCache = new uz.p(0, 0, 0), zz._RotationAxisCache = new uz.h, zz
    })();

    function gz(zz, tz, sz) {
      const Fz = Uz.e.Parse((() => new Dz(zz.name, tz)), zz, tz, sz);
      if (zz.localMatrix ? Fz.setPreTransformMatrix(uz.e.FromArray(zz.localMatrix)) : zz.pivotMatrix && Fz.setPivotMatrix(uz.e.FromArray(zz.pivotMatrix)), Fz.Xx(zz.isEnabled), Fz._waitingParsedUniqueId = zz.uniqueId, void 0 !== zz.parentId && (Fz._waitingParentId = zz.parentId), void 0 !== zz.parentInstanceIndex && (Fz._waitingParentInstanceIndex = zz.parentInstanceIndex), zz.HI && (Fz._waitingFreezeWorldMatrix = zz.HI), zz.animations) {
        for (let tz = 0; tz < zz.animations.length; tz++) {
          const sz = zz.animations[tz],
            Wz = (0, bz.e)("BABYLON.Animation");
          Wz && Fz.animations.push(Wz.Parse(sz))
        }
        Nz.e.ParseAnimationRanges(Fz, zz, tz)
      }
      return zz.autoAnimate && tz.beginAnimation(Fz, zz.autoAnimateFrom, zz.autoAnimateTo, zz.autoAnimateLoop, zz.autoAnimateSpeed || 1), Fz
    }
    let Hz = !1;

    function Bz() {
      Hz || (Hz = !0, Dz.Parse = gz)
    }(Fz = Dz.prototype).eT ?? (Fz.eT = (0, wz.g)("TransformNode", "eT")), (Wz = Dz.prototype).applyImpulse ?? (Wz.applyImpulse = (0, wz.g)("TransformNode", "applyImpulse")), (Xz = Dz.prototype).applyAngularImpulse ?? (Xz.applyAngularImpulse = (0, wz.g)("TransformNode", "applyAngularImpulse")), (Oz = Dz.prototype).applyTorque ?? (Oz.applyTorque = (0, wz.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Dz.prototype, "physicsBody") || Object.defineProperty(Dz.prototype, "physicsBody", (0, wz.f)("TransformNode", "physicsBody"))
  },
  39559: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      try {
        const Fz = zz.next();
        Fz.done ? tz(Fz) : Fz.value ? Fz.value.then((() => {
          Fz.value = void 0, tz(Fz)
        }), sz) : tz(Fz)
      } catch (Fz) {
        sz(Fz)
      }
    }

    function Wz() {
      let zz, tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (sz, Wz, Xz) => {
        const Oz = performance.now();
        void 0 === zz || Oz - zz > tz ? (zz = Oz, setTimeout((() => {
          Fz(sz, Wz, Xz)
        }), 0)) : Fz(sz, Wz, Xz)
      }
    }

    function Xz(zz, tz, sz, Fz, Wz) {
      const Xz = () => {
        let Oz;
        const oz = zz => {
          zz.done ? sz(zz.value) : void 0 === Oz ? Oz = !0 : Xz()
        };
        do {
          Oz = void 0, Wz && Wz.aborted ? Fz(new Error("Aborted")) : tz(zz, oz, Fz), void 0 === Oz && (Oz = !1)
        } while (Oz)
      };
      Xz()
    }

    function Oz(zz, tz) {
      let sz;
      return Xz(zz, Fz, (zz => sz = zz), (zz => {
        throw zz
      }), tz), sz
    }
    async function oz(zz, tz, sz) {
      return await new Promise(((Fz, Wz) => {
        Xz(zz, tz, Fz, Wz, sz)
      }))
    }

    function vz(zz, tz) {
      return function() {
        return Oz(zz(...arguments), tz)
      }
    }
    sz.d(tz, {
      e: () => Wz,
      g: () => vz,
      k: () => oz,
      o: () => Oz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);
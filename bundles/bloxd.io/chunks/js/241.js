export const id = 241;
export const ids = [241];
export const modules = {
  39623: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => fk,
      d: () => vk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39506),
      Xk = Bk(36781),
      bk = Bk(36758),
      wk = Bk(39628),
      dk = Bk(38320),
      sk = Bk(36798),
      Vk = Bk(39296),
      Jk = Bk(37759),
      Ak = Bk(37459),
      ek = Bk(39360),
      yk = Bk(39414);
    let fk = (() => {
      var kk;
      let Fk, Bk, sk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk = wk.b,
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        qk = [],
        Ck = [],
        Zk = [],
        pk = [],
        Kk = [],
        xk = [],
        jk = [],
        lk = [],
        nk = [],
        Ik = [],
        Qk = [],
        kF = [],
        FF = [],
        BF = [],
        RF = [],
        tF = [],
        aF = [];
      return kk = class extends Uk {
        get position() {
          return this._position
        }
        set position(kk) {
          this._position = kk
        }
        set upVector(kk) {
          this._upVector = kk
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Fk, Bk;
          if (this.mode === kk.PERSPECTIVE_CAMERA) this.fovMode === kk.FOVMODE_VERTICAL_FIXED ? (Bk = 2 * this.minZ * Math.tan(this.fov / 2), Fk = this.ne().getAspectRatio(this) * Bk) : (Fk = 2 * this.minZ * Math.tan(this.fov / 2), Bk = Fk / this.ne().getAspectRatio(this));
          else {
            const kk = this.ne().getRenderWidth() / 2,
              Rk = this.ne().getRenderHeight() / 2;
            Fk = (this.orthoRight ?? kk) - (this.orthoLeft ?? -kk), Bk = (this.orthoTop ?? Rk) - (this.orthoBottom ?? -Rk)
          }
          return Fk * Bk
        }
        set orthoLeft(kk) {
          this._orthoLeft = kk;
          for (const Fk of this._rigCameras) Fk.orthoLeft = kk
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(kk) {
          this._orthoRight = kk;
          for (const Fk of this._rigCameras) Fk.orthoRight = kk
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(kk) {
          this._orthoBottom = kk;
          for (const Fk of this._rigCameras) Fk.orthoBottom = kk
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(kk) {
          this._orthoTop = kk;
          for (const Fk of this._rigCameras) Fk.orthoTop = kk
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Fk / (2 * kk))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(kk) {
          this._baseInertia = kk
        }
        set mode(kk) {
          this._mode = kk;
          for (const Fk of this._rigCameras) Fk.mode = kk
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Fk, Bk, tk) {
          let wk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, ek.d)(), super(Fk, tk, !1), this.inputs = (0, Rk.l)(this, ck), this._position = (0, Rk.l)(this, Gk, bk.s.Zero()), this._upVector = ((0, Rk.l)(this, Tk), (0, Rk.l)(this, rk, bk.s.Up())), this.oblique = ((0, Rk.l)(this, Dk), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Rk.l)(this, zk, .8), this.projectionPlaneTilt = ((0, Rk.l)(this, Pk), (0, Rk.l)(this, hk, 0)), this.minZ = ((0, Rk.l)(this, qk), (0, Rk.l)(this, Ck, 1)), this.maxZ = ((0, Rk.l)(this, Zk), (0, Rk.l)(this, pk, 1e4)), this._baseInertia = ((0, Rk.l)(this, Kk), .9), this._mode = kk.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Jk.d(0, 0, 1, 1), this.layerMask = (0, Rk.l)(this, xk, 268435455), this.fovMode = ((0, Rk.l)(this, jk), (0, Rk.l)(this, lk, kk.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Rk.l)(this, nk), (0, Rk.l)(this, Ik, kk.RIG_MODE_NONE)), this.interaxialDistance = ((0, Rk.l)(this, Qk), (0, Rk.l)(this, kF, void 0)), this.isStereoscopicSideBySide = ((0, Rk.l)(this, FF), (0, Rk.l)(this, BF, void 0)), this.ignoreCameraMaxZ = ((0, Rk.l)(this, RF), (0, Rk.l)(this, tF, !1)), this.customRenderTargets = ((0, Rk.l)(this, aF), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Xk.e, this.onProjectionMatrixChangedObservable = new Xk.e, this.onAfterCheckInputsObservable = new Xk.e, this.onRestoreStateObservable = new Xk.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new bk.c, this._postProcesses = new Array, this._activeMeshes = new ak.c(256), this._globalPosition = bk.s.Zero(), this._computedViewMatrix = bk.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = bk.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = bk.e.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.XN().defaultCameraLayerMask, this.XN().addCamera(this), wk && !this.XN().activeCamera && (this.XN().activeCamera = this), this.position = Bk, this.renderPassId = this.XN().ne().createRenderPassId(`Camera ${Fk}`)
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
          return "rf"
        }
        toString(kk) {
          let Fk = "Name: " + this.name;
          if (Fk += ", type: " + this.getClassName(), this.animations)
            for (let Bk = 0; Bk < this.animations.length; Bk++) Fk += ", animation[0]: " + this.animations[Bk].toString(kk);
          return Fk
        }
        applyVerticalCorrection() {
          const kk = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -kk.x : kk.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(kk) {
          return -1 !== this._activeMeshes.indexOf(kk)
        }
        isReady() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (kk)
            for (const Fk of this._postProcesses)
              if (Fk && !Fk.isReady()) return !1;
          return super.isReady(kk)
        }
        _initCache() {
          super._initCache(), this._cache.position = new bk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new bk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(kk) {
          kk || super._updateCache(), this._cache.position.sBk(this.position), this._cache.upVector.sBk(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Fk = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Bk = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Fk;
          if (!Bk) return !1;
          const Rk = this.ne();
          return this.mode === kk.PERSPECTIVE_CAMERA ? Bk = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Rk.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Bk = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Rk.getRenderWidth() && this._cache.renderHeight === Rk.getRenderHeight(), this.oblique && (Bk = Bk && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Bk
        }
        attachControl(kk, Fk) {}
        detachControl(kk) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== kk.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let kk = 0; kk < this._postProcesses.length; kk++)
            if (null !== this._postProcesses[kk]) return this._postProcesses[kk];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const kk = this._getFirstPostProcess();
          kk && kk.markTextureDirty();
          for (let Fk = 0, Bk = this._rigCameras.length; Fk < Bk; Fk++) {
            const kk = this._rigCameras[Fk],
              Bk = kk._rigPostProcess;
            if (Bk) {
              "pass" === Bk.getEffectName() && (kk.isIntermediate = 0 === this._postProcesses.length), kk._postProcesses = this._postProcesses.slice(0).concat(Bk), Bk.markTextureDirty()
            } else kk._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !kk.isReusable() && this._postProcesses.indexOf(kk) > -1 ? (dk.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Fk || Fk < 0 ? this._postProcesses.push(kk) : null === this._postProcesses[Fk] ? this._postProcesses[Fk] = kk : this._postProcesses.splice(Fk, 0, kk), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.mFk(), this._postProcesses.indexOf(kk))
        }
        detachPostProcess(kk) {
          const Fk = this._postProcesses.indexOf(kk); - 1 !== Fk && (this._postProcesses[Fk] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.mFk(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return bk.c.Identity()
        }
        getViewMatrix(kk) {
          return !kk && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.XN().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(kk) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== kk && (this._projectionMatrix = kk)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Fk) {
          if (this._doNotComputeProjectionMatrix || !Fk && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Bk = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Bk, this._refreshFrustumPlanes = !0;
          const Rk = this.ne(),
            tk = this.XN(),
            ak = Rk.rBk;
          if (this.mode === kk.PERSPECTIVE_CAMERA) {
            let Fk;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Rk.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Fk = tk.useRightHandedSystem ? bk.c.PerspectiveFovRHToRef : bk.c.PerspectiveFovLHToRef, Fk(this.fov, Rk.getAspectRatio(this), ak ? Bk : this.minZ, ak ? this.minZ : Bk, this._projectionMatrix, this.fovMode === kk.FOVMODE_VERTICAL_FIXED, Rk.isNDCHalfZRange, this.projectionPlaneTilt, ak)
          } else {
            const kk = Rk.getRenderWidth() / 2,
              Fk = Rk.getRenderHeight() / 2;
            tk.useRightHandedSystem ? this.oblique ? bk.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ak ? Bk : this.minZ, ak ? this.minZ : Bk, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Rk.isNDCHalfZRange) : bk.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ak ? Bk : this.minZ, ak ? this.minZ : Bk, this._projectionMatrix, Rk.isNDCHalfZRange) : this.oblique ? bk.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ak ? Bk : this.minZ, ak ? this.minZ : Bk, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Rk.isNDCHalfZRange) : bk.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ak ? Bk : this.minZ, ak ? this.minZ : Bk, this._projectionMatrix, Rk.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Rk.getRenderWidth(), this._cache.renderHeight = Rk.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(kk) {
          return (this.radius || (this.target ? bk.s.Distance(this.position, this.target) : this.position.length())) + kk
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Ak.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Ak.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Fk && this.rigCameras.length > 0) {
            let Fk = !1;
            for (const Bk of this.rigCameras) Bk._updateFrustumPlanes(), Fk = Fk || kk.isInFrustum(Bk._frustumPlanes);
            return Fk
          }
          return kk.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(kk) {
          return this._updateFrustumPlanes(), kk.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Vk.i)("Ray")
        }
        getForwardRayToRef(kk) {
          throw (0, Vk.i)("Ray")
        }
        dispose(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.XN().stopAnimation(this), this.XN().removeCamera(this); this._rigCameras.length > 0;) {
            const kk = this._rigCameras.pop();
            kk && kk.dispose()
          }
          if (this._parentContainer) {
            const kk = this._parentContainer.cameras.indexOf(this);
            kk > -1 && this._parentContainer.cameras.splice(kk, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== kk.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let kk = this._postProcesses.length;
            for (; --kk >= 0;) {
              const Fk = this._postProcesses[kk];
              Fk && Fk.dispose(this)
            }
          }
          let Rk = this.customRenderTargets.length;
          for (; --Rk >= 0;) this.customRenderTargets[Rk].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.XN().ne().releaseRenderPassId(this.renderPassId), super.dispose(Fk, Bk)
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
        setCameraRigMode(Fk, Bk) {
          if (this.cameraRigMode !== Fk) {
            for (; this._rigCameras.length > 0;) {
              const kk = this._rigCameras.pop();
              kk && kk.dispose()
            }
            if (this.cameraRigMode = Fk, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Bk.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== kk.RIG_MODE_NONE) {
              const kk = this.createRigCamera(this.name + "_L", 0);
              kk && (kk._isLeftCamera = !0);
              const Fk = this.createRigCamera(this.name + "_R", 1);
              Fk && (Fk._isRightCamera = !0), kk && Fk && (this._rigCameras.push(kk), this._rigCameras.push(Fk))
            }
            this._setRigMode(Bk), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(kk) {}
        _getVRProjectionMatrix() {
          return bk.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ne().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(kk, Fk) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[kk] = Fk, "interaxialDistance" === kk && (this._cameraRigParams.stereoHalfAngle = Fk / .0637 * (Math.PI / 180))
        }
        createRigCamera(kk, Fk) {
          return null
        }
        _updateRigCameras() {
          for (let kk = 0; kk < this._rigCameras.length; kk++) this._rigCameras[kk].minZ = this.minZ, this._rigCameras[kk].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[kk].fov = this.fov, this._rigCameras[kk].upVector.sBk(this.upVector);
          this.cameraRigMode === kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const kk = yk.c.Serialize(this);
          return kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), this.parent && this.parent._serializeAsParent(kk), this.inputs && this.inputs.serialize(kk), yk.c.AppendSerializedAnimations(this, kk), kk.hb = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        clone(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Rk = yk.c.Clone(kk.GetConstructorFromName(this.getClassName(), Fk, this.XN(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Rk.name = Fk, Rk.parent = Bk, this.onClonedObservable.notifyObservers(Rk), Rk
        }
        eZ(kk) {
          const Fk = bk.s.Zero();
          return this.getDirectionToRef(kk, Fk), Fk
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(kk, Fk) {
          bk.s.TransformNormalToRef(kk, this.getWorldMatrix(), Fk)
        }
        static GetConstructorFromName(Fk, Bk, Rk) {
          let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Xk = wk.b.Construct(Fk, Bk, Rk, {
            interaxial_distance: tk,
            isStereoscopicSideBySide: ak
          });
          return Xk || (() => kk._CreateDefaultParsedCamera(Bk, Rk))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let kk = this.XN().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (kk *= -1), kk
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, tk.K)("position")], Bk = [(0, tk.K)("upVector")], sk = [(0, tk.M)()], fk = [(0, tk.M)()], mk = [(0, tk.M)()], Wk = [(0, tk.M)()], vk = [(0, tk.M)()], ik = [(0, tk.M)()], Yk = [(0, tk.M)()], Lk = [(0, tk.M)()], Ok = [(0, tk.M)()], Ek = [(0, tk.M)()], Sk = [(0, tk.M)()], Nk = [(0, tk.M)()], Hk = [(0, tk.M)()], uk = [(0, tk.M)()], Mk = [(0, tk.M)()], gk = [(0, tk.M)()], (0, Rk.j)(kk, null, sk, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoLeft" in kk,
            get: kk => kk.orthoLeft
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(kk, null, fk, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoRight" in kk,
            get: kk => kk.orthoRight
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(kk, null, mk, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoBottom" in kk,
            get: kk => kk.orthoBottom
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(kk, null, Wk, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoTop" in kk,
            get: kk => kk.orthoTop
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(kk, null, Ok, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: kk => "inertia" in kk,
            get: kk => kk.inertia
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(kk, null, Ek, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: kk => "mode" in kk,
            get: kk => kk.mode
          },
          metadata: ak
        }, null, ck), (0, Rk.j)(null, null, Fk, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: kk => "_position" in kk,
            get: kk => kk._position,
            set: (kk, Fk) => {
              kk._position = Fk
            }
          },
          metadata: ak
        }, Gk, Tk), (0, Rk.j)(null, null, Bk, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: kk => "_upVector" in kk,
            get: kk => kk._upVector,
            set: (kk, Fk) => {
              kk._upVector = Fk
            }
          },
          metadata: ak
        }, rk, Dk), (0, Rk.j)(null, null, vk, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: kk => "fov" in kk,
            get: kk => kk.fov,
            set: (kk, Fk) => {
              kk.fov = Fk
            }
          },
          metadata: ak
        }, zk, Pk), (0, Rk.j)(null, null, ik, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: kk => "projectionPlaneTilt" in kk,
            get: kk => kk.projectionPlaneTilt,
            set: (kk, Fk) => {
              kk.projectionPlaneTilt = Fk
            }
          },
          metadata: ak
        }, hk, qk), (0, Rk.j)(null, null, Yk, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "minZ" in kk,
            get: kk => kk.minZ,
            set: (kk, Fk) => {
              kk.minZ = Fk
            }
          },
          metadata: ak
        }, Ck, Zk), (0, Rk.j)(null, null, Lk, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "maxZ" in kk,
            get: kk => kk.maxZ,
            set: (kk, Fk) => {
              kk.maxZ = Fk
            }
          },
          metadata: ak
        }, pk, Kk), (0, Rk.j)(null, null, Sk, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "layerMask" in kk,
            get: kk => kk.layerMask,
            set: (kk, Fk) => {
              kk.layerMask = Fk
            }
          },
          metadata: ak
        }, xk, jk), (0, Rk.j)(null, null, Nk, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "fovMode" in kk,
            get: kk => kk.fovMode,
            set: (kk, Fk) => {
              kk.fovMode = Fk
            }
          },
          metadata: ak
        }, lk, nk), (0, Rk.j)(null, null, Hk, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "cameraRigMode" in kk,
            get: kk => kk.cameraRigMode,
            set: (kk, Fk) => {
              kk.cameraRigMode = Fk
            }
          },
          metadata: ak
        }, Ik, Qk), (0, Rk.j)(null, null, uk, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "interaxialDistance" in kk,
            get: kk => kk.interaxialDistance,
            set: (kk, Fk) => {
              kk.interaxialDistance = Fk
            }
          },
          metadata: ak
        }, kF, FF), (0, Rk.j)(null, null, Mk, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: kk => "isStereoscopicSideBySide" in kk,
            get: kk => kk.isStereoscopicSideBySide,
            set: (kk, Fk) => {
              kk.isStereoscopicSideBySide = Fk
            }
          },
          metadata: ak
        }, BF, RF), (0, Rk.j)(null, null, gk, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "ignoreCameraMaxZ" in kk,
            get: kk => kk.ignoreCameraMaxZ,
            set: (kk, Fk) => {
              kk.ignoreCameraMaxZ = Fk
            }
          },
          metadata: ak
        }, tF, aF), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk._CreateDefaultParsedCamera = (kk, Fk) => {
        throw (0, Vk.i)("UniversalCamera")
      }, kk.PERSPECTIVE_CAMERA = 0, kk.ORTHOGRAPHIC_CAMERA = 1, kk.FOVMODE_VERTICAL_FIXED = 0, kk.FOVMODE_HORIZONTAL_FIXED = 1, kk.RIG_MODE_NONE = 0, kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, kk.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, kk.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, kk.RIG_MODE_VR = 20, kk.RIG_MODE_CUSTOM = 22, kk.ForceAttachControlToAlwaysPreventDefault = !1, kk
    })();

    function mk(kk, Fk) {
      const Bk = kk.type,
        Rk = fk.GetConstructorFromName(Bk, kk.name, Fk, kk.interaxial_distance, kk.isStereoscopicSideBySide),
        tk = yk.c.Parse(Rk, kk, Fk);
      if (void 0 !== kk.parentId && (tk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (tk._waitingParentInstanceIndex = kk.parentInstanceIndex), tk.inputs && (tk.inputs.parse(kk), tk._setupInputs()), kk.upVector && (tk.upVector = bk.s.FromArray(kk.upVector)), tk.setPosition && (tk.position.E1(0, 0, 0), tk.setPosition(bk.s.FromArray(kk.position))), kk.target && tk.setTarget && tk.setTarget(bk.s.FromArray(kk.target)), kk.cameraRigMode) {
        const Fk = kk.interaxial_distance ? {
          interaxialDistance: kk.interaxial_distance
        } : {};
        tk.setCameraRigMode(kk.cameraRigMode, Fk)
      }
      if (kk.animations) {
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Bk = kk.animations[Fk],
            Rk = (0, sk.c)("BABYLON.Animation");
          Rk && tk.animations.push(Rk.Parse(Bk))
        }
        wk.b.ParseAnimationRanges(tk, kk, Fk)
      }
      return kk.autoAnimate && Fk.beginAnimation(tk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), void 0 !== kk.isEnabled && tk.lY(kk.isEnabled), tk
    }
    let Wk = !1;

    function vk() {
      Wk || (Wk = !0, fk.Parse = mk)
    }
  },
  39641: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk) {
        this._cameraPosition = Fk, this._behavior = Bk, this.activeInput = !1, this.speed = 1, this.hq = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Rk.s, this.rotationAccumulatedPixels = new Rk.s, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Rk.s.Zero(), this.rotationDeltaCurrentFrame = Rk.s.Zero(), this._zoomVelocity = 0, this._panVelocity = new Rk.s, this.referenceFrameRate = 60, this._rotationVelocity = new Rk.s, this._prevFrameTimeMs = 0, this._scene = kk
      }
      computeCurrentFrameDeltas() {
        const kk = this._scene.ne().getDeltaTime(),
          Fk = this._getEffectiveDeltaMs(kk);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.J_(0), this.rotationDeltaCurrentFrame.J_(0), this.zoomDeltaCurrentFrame = 0, void(kk > 0 && (this._prevFrameTimeMs = kk));
        this.panDeltaCurrentFrame.J_(0), this.rotationDeltaCurrentFrame.J_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.E1(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Fk, this.panDeltaCurrentFrame), this._rotationVelocity.E1(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.E1(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Fk, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Fk, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.hq * this._zoomSpeedMultiplier) * Fk, kk > 0 && (this._prevFrameTimeMs = kk), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.J_(0), this.rotationAccumulatedPixels.J_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.J_(0), this.rotationAccumulatedPixels.J_(0)
      }
      resetPanVelocity() {
        this._panVelocity.J_(0), this.panAccumulatedPixels.J_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(kk) {
        const Fk = this._scene.ne().getDeltaTime(),
          Bk = this._getEffectiveDeltaMs(Fk),
          Rk = 1e3 / this.referenceFrameRate;
        return Math.pow(kk, Bk / Rk)
      }
      getFrameIndependentInputScale(kk) {
        const Fk = 1 - kk;
        if (Fk <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(kk)) / Fk
      }
      _getEffectiveDeltaMs(kk) {
        return kk > 0 ? kk : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(kk, Fk, Bk) {
        let Rk = kk;
        const tk = this._scene.ne().getDeltaTime(),
          ak = this._getEffectiveDeltaMs(tk);
        if (0 === ak) return Rk;
        const Xk = this.getFrameIndependentDecay(Bk);
        if (Rk *= Xk, 0 !== Fk || this.activeInput) {
          const kk = 1 - Bk;
          Rk += Fk / ak * (kk > 0 ? (1 - Xk) / kk : 1)
        } else Math.abs(Rk) < 1e-6 && (Rk = 0);
        return Rk
      }
    }
  },
  39647: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor(kk, Fk) {
        this.inputMap = [], this.handlers = kk, this._createDefaultEntries = Fk, this.resetInputMap()
      }
      resolveInteraction(kk, Fk) {
        for (const Bk of this.inputMap)
          if (Bk.source === kk && this._entryMatches(Bk, Fk)) return Bk;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(kk, Fk, Bk) {
        const Rk = this.inputMap;
        for (let tk = 0; tk < Rk.length; tk++) {
          const ak = Rk[tk];
          if (ak.source === kk && ak.interaction === Fk && this._entryConditionsMatch(ak, Bk)) return ak
        }
      }
      getEntries(kk, Fk, Bk) {
        const Rk = [],
          tk = this.inputMap;
        for (let ak = 0; ak < tk.length; ak++) {
          const Xk = tk[ak];
          Xk.source === kk && Xk.interaction === Fk && this._entryConditionsMatch(Xk, Bk) && Rk.push(Xk)
        }
        return Rk
      }
      addEntry(kk) {
        const Fk = this._entrySpecificity(kk);
        let Bk = this.inputMap.length;
        for (let Rk = 0; Rk < this.inputMap.length; Rk++)
          if (this._entrySpecificity(this.inputMap[Rk]) < Fk) {
            Bk = Rk;
            break
          } this.inputMap.splice(Bk, 0, kk)
      }
      setInteraction(kk, Fk, Bk) {
        const Rk = this.resolveInteraction(kk, Fk);
        return Rk && this._entryCoversAllConditionsOf(Rk, Fk) ? (Rk.interaction = Bk, !0) : (this.addEntry({
          source: kk,
          ...Fk ?? {},
          interaction: Bk
        }), !0)
      }
      _entryCoversAllConditionsOf(kk, Fk) {
        if (!Fk) return !0;
        const Bk = kk;
        for (const Rk of Object.keys(Fk)) {
          const kk = Fk[Rk];
          if (void 0 !== kk)
            if ("modifiers" === Rk) {
              const Fk = Bk.modifiers ?? {};
              for (const Bk of Object.keys(kk))
                if (void 0 !== kk[Bk] && void 0 === Fk[Bk]) return !1
            } else if (void 0 === Bk[Rk]) return !1
        }
        return !0
      }
      setInteractions(kk, Fk, Bk) {
        let Rk = 0;
        const tk = this.inputMap;
        for (let ak = 0; ak < tk.length; ak++) {
          const Xk = tk[ak];
          Xk.source === kk && this._entryMatches(Xk, Fk) && (Xk.interaction = Bk, Rk++)
        }
        return Rk
      }
      _entryMatches(kk, Fk) {
        switch (kk.source) {
          case "pointer":
            return (void 0 === kk.button || kk.button === Fk?.button) && this._matchModifiers(kk.modifiers, Fk?.modifiers);
          case "wheel":
            return this._matchModifiers(kk.modifiers, Fk?.modifiers);
          case "touch":
            return void 0 === kk.touchCount || kk.touchCount === Fk?.touchCount;
          case "keyboard":
            return (void 0 === kk.key || (Array.isArray(kk.key) ? -1 !== kk.key.indexOf(Fk?.key ?? -1) : kk.key === Fk?.key)) && this._matchModifiers(kk.modifiers, Fk?.modifiers)
        }
      }
      _entryConditionsMatch(kk, Fk) {
        if (!Fk) return !0;
        switch (kk.source) {
          case "pointer":
            return (!("button" in Fk) || kk.button === Fk.button) && (!("modifiers" in Fk) || this._entryModifiersMatch(kk.modifiers, Fk.modifiers));
          case "wheel":
            return !("modifiers" in Fk) || this._entryModifiersMatch(kk.modifiers, Fk.modifiers);
          case "touch":
            return !("touchCount" in Fk) || kk.touchCount === Fk.touchCount;
          case "keyboard":
            if ("key" in Fk) {
              if (void 0 === kk.key) return void 0 === Fk.key;
              if (void 0 === Fk.key || (Array.isArray(kk.key) ? -1 === kk.key.indexOf(Fk.key) : kk.key !== Fk.key)) return !1
            }
            return !("modifiers" in Fk) || this._entryModifiersMatch(kk.modifiers, Fk.modifiers)
        }
      }
      _entrySpecificity(kk) {
        let Fk = 0;
        return "button" in kk && void 0 !== kk.button && Fk++, "key" in kk && void 0 !== kk.key && Fk++, "touchCount" in kk && void 0 !== kk.touchCount && Fk++, "modifiers" in kk && kk.modifiers && Fk++, Fk
      }
      _matchModifiers(kk, Fk) {
        return !kk || (void 0 === kk.ctrl || kk.ctrl === (Fk?.ctrl ?? !1)) && ((void 0 === kk.shift || kk.shift === (Fk?.shift ?? !1)) && (void 0 === kk.alt || kk.alt === (Fk?.alt ?? !1)))
      }
      _entryModifiersMatch(kk, Fk) {
        if (!Fk) return !kk;
        return void 0 !== Fk.ctrl || void 0 !== Fk.shift || void 0 !== Fk.alt ? (void 0 === Fk.ctrl || kk?.ctrl === Fk.ctrl) && ((void 0 === Fk.shift || kk?.shift === Fk.shift) && (void 0 === Fk.alt || kk?.alt === Fk.alt)) : !kk || void 0 === kk.ctrl && void 0 === kk.shift && void 0 === kk.alt
      }
    }
  },
  39621: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => mk,
      d: () => yk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39623),
      Xk = Bk(36758),
      bk = Bk(36764),
      wk = Bk(39637),
      dk = Bk(39628),
      sk = Bk(39641),
      Vk = Bk(39647);
    class Jk extends sk.b {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk), this.input = new Vk.e({
          translate: (kk, Fk, Bk) => {
            this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += Fk, this.panAccumulatedPixels.z += Bk
          },
          rotate: (kk, Fk) => {
            this.rotationAccumulatedPixels.x += kk, this.rotationAccumulatedPixels.y += Fk
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
    const Ak = Xk.c.Zero(),
      ek = Xk.e.Identity();
    let yk = (() => {
        var kk;
        let Fk, Bk, dk, sk, Vk = ak.c,
          yk = [],
          fk = [],
          mk = [],
          Wk = [],
          vk = [],
          ik = [],
          Yk = [],
          Lk = [];
        return kk = class extends Vk {
          get inertia() {
            return this._targetInertia
          }
          set inertia(kk) {
            this._targetInertia = kk, this.movement && (this.movement.panInertia = kk, this.movement.rotationInertia = kk)
          }
          constructor(kk, Fk, Bk) {
            super(kk, Fk, Bk, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Xk.s(0, 0, 0), this.cameraRotation = new Xk.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Rk.l)(this, yk, !1), this.rotation = ((0, Rk.l)(this, fk), (0, Rk.l)(this, mk, void 0)), this.rotationQuaternion = (0, Rk.l)(this, Wk), this.speed = (0, Rk.l)(this, vk, 2), this.noRotationConstraint = ((0, Rk.l)(this, ik), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = bk.c, this._rotationEpsilon = bk.c, this.lockedTarget = (0, Rk.l)(this, Yk, null), this._currentTarget = ((0, Rk.l)(this, Lk), Xk.s.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Xk.c.Zero(), this._cameraTransformMatrix = Xk.c.Zero(), this._cameraRotationMatrix = Xk.c.Zero(), this._transformedReferencePoint = Xk.s.Zero(), this._deferredPositionUpdate = new Xk.s, this._deferredRotationQuaternionUpdate = new Xk.e, this._deferredRotationUpdate = new Xk.s, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Xk.s.Forward(this.XN().useRightHandedSystem), this.rotation = new Xk.s(0, this.XN().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Jk(this.XN(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(kk) {
            this.getWorldMatrix();
            const Fk = Xk.l.Qe[0],
              Bk = Xk.l.Qe[1];
            return Bk.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Bk, Fk), Fk.scaleInPlace(kk), this.globalPosition.add(Fk)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const kk = this.lockedTarget;
              kk.computeWorldMatrix().getTranslationToRef(kk.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.E1(0, 0, 0), this.cameraRotation.E1(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Xk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Xk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Xk.e(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(kk) {
            kk || super._updateCache();
            const Fk = this._getLockedTargetPosition();
            Fk ? this._cache.lockedTarget ? this._cache.lockedTarget.sBk(Fk) : this._cache.lockedTarget = Fk.clone() : this._cache.lockedTarget = null, this._cache.rotation.sBk(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.sBk(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const kk = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(kk) : !kk) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const kk = this.ne();
            return this.speed * Math.sqrt(kk.getDeltaTime() / (100 * kk.getFps()))
          }
          setTarget(kk) {
            this.upVector.normalize(), this._initialFocalDistance = kk.subtract(this.position).length(), this.position.z === kk.z && (this.position.z += bk.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.XN().useRightHandedSystem ? Xk.c.LookAtRHToRef(this.position, kk, Xk.s.UpReadOnly, Ak) : Xk.c.LookAtLHToRef(this.position, kk, Xk.s.UpReadOnly, Ak), Ak.invert();
            const Fk = this.rotationQuaternion || ek;
            Xk.e.FromRotationMatrixToRef(Ak, Fk), Fk.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(kk) {
            this.setTarget(kk)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Xk.l.Matrix[0]), Xk.s.TransformNormalToRef(this.cameraDirection, Xk.l.Matrix[0], Xk.l.Qe[0]), this._deferredPositionUpdate.addInPlace(Xk.l.Qe[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.sBk(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.sBk(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const kk = this.movement,
              Fk = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            kk.panAccumulatedPixels.addInPlace(this.cameraDirection), kk.rotationAccumulatedPixels.x += this.cameraRotation.x, kk.rotationAccumulatedPixels.y += this.cameraRotation.y, kk.computeCurrentFrameDeltas(), this.cameraDirection.sBk(kk.panDeltaCurrentFrame), this.cameraRotation.set(kk.rotationDeltaCurrentFrame.x, kk.rotationDeltaCurrentFrame.y);
            const Bk = this.speed * this._panningEpsilon;
            !Fk && Math.abs(this.cameraDirection.x) < Bk && Math.abs(this.cameraDirection.y) < Bk && Math.abs(this.cameraDirection.z) < Bk && (this.cameraDirection.J_(0), kk.resetPanVelocity());
            const Rk = this.invertRotation ? -this.inverseRotationSpeed : 1,
              tk = this._decideIfNeedsToMove(),
              ak = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.sBk(this.rotation), this._deferredPositionUpdate.sBk(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.sBk(this.rotationQuaternion), tk && this._updatePosition(), ak) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Rk, this._deferredRotationUpdate.y += this.cameraRotation.y * Rk, !this.noRotationConstraint) {
                const kk = 1.570796;
                this._deferredRotationUpdate.x > kk && (this._deferredRotationUpdate.x = kk), this._deferredRotationUpdate.x < -kk && (this._deferredRotationUpdate.x = -kk)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.sBk(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Xk.e.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.sBk(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.J_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Xk.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Xk.s.TransformNormalToRef(Xk.s.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Xk.s.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? wk.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Xk.e.FromEulerVectorToRef(this.rotation, ek), wk.b.Y.rotateByQuaternionToRef(ek, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(kk, Fk, Bk) {
            if (this.XN().useRightHandedSystem ? Xk.c.LookAtRHToRef(kk, Fk, Bk, this._viewMatrix) : Xk.c.LookAtLHToRef(kk, Fk, Bk, this._viewMatrix), this.parent) {
              const kk = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(kk, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Fk, Bk) {
            if (this.cameraRigMode !== ak.c.RIG_MODE_NONE) {
              const Bk = new kk(Fk, this.position.clone(), this.XN());
              return Bk.isRigCamera = !0, Bk.rigParent = this, this.cameraRigMode === ak.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Xk.e), Bk._cameraRigParams = {}, Bk.rotationQuaternion = new Xk.e), Bk.mode = this.mode, Bk.orthoLeft = this.orthoLeft, Bk.orthoRight = this.orthoRight, Bk.orthoTop = this.orthoTop, Bk.orthoBottom = this.orthoBottom, Bk
            }
            return null
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              Fk = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case ak.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ak.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ak.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case ak.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ak.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Bk = this.cameraRigMode === ak.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Rk = this.cameraRigMode === ak.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Bk, kk), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Rk, Fk);
                break
              }
              case ak.c.RIG_MODE_VR:
                kk.rotationQuaternion && Fk.rotationQuaternion && this.rotationQuaternion ? (kk.rotationQuaternion.sBk(this.rotationQuaternion), Fk.rotationQuaternion.sBk(this.rotationQuaternion)) : (kk.rotation.sBk(this.rotation), Fk.rotation.sBk(this.rotation)), kk.position.sBk(this.position), Fk.position.sBk(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Fk, Bk) {
            this.getTarget().subtractToRef(this.position, kk._TargetFocalPoint), kk._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Rk = kk._TargetFocalPoint.addInPlace(this.position);
            Xk.c.TranslationToRef(-Rk.x, -Rk.y, -Rk.z, kk._TargetTransformMatrix), kk._TargetTransformMatrix.multiplyToRef(Xk.c.RotationAxis(Bk.upVector, Fk), kk._RigCamTransformMatrix), Xk.c.TranslationToRef(Rk.x, Rk.y, Rk.z, kk._TargetTransformMatrix), kk._RigCamTransformMatrix.multiplyToRef(kk._TargetTransformMatrix, kk._RigCamTransformMatrix), Xk.s.TransformCoordinatesToRef(this.position, kk._RigCamTransformMatrix, Bk.position), Bk.setTarget(Rk)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.K)()], dk = [(0, tk.M)()], sk = [(0, tk.w)("lockedTargetId")], (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: kk => "updateUpVectorFromRotation" in kk,
              get: kk => kk.updateUpVectorFromRotation,
              set: (kk, Fk) => {
                kk.updateUpVectorFromRotation = Fk
              }
            },
            metadata: ak
          }, yk, fk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: kk => "rotation" in kk,
              get: kk => kk.rotation,
              set: (kk, Fk) => {
                kk.rotation = Fk
              }
            },
            metadata: ak
          }, mk, Wk), (0, Rk.j)(null, null, dk, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: kk => "speed" in kk,
              get: kk => kk.speed,
              set: (kk, Fk) => {
                kk.speed = Fk
              }
            },
            metadata: ak
          }, vk, ik), (0, Rk.j)(null, null, sk, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: kk => "lockedTarget" in kk,
              get: kk => kk.lockedTarget,
              set: (kk, Fk) => {
                kk.lockedTarget = Fk
              }
            },
            metadata: ak
          }, Yk, Lk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk._RigCamTransformMatrix = new Xk.c, kk._TargetTransformMatrix = new Xk.c, kk._TargetFocalPoint = new Xk.s, kk
      })(),
      fk = !1;

    function mk() {
      fk || (fk = !0, dk.b.AddNodeConstructor("TargetCamera", ((kk, Fk) => () => new yk(kk, Xk.s.Zero(), Fk))))
    }
  },
  39354: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = Bk(39305);
    let tk = !1;

    function ak() {
      tk || (tk = !0, Rk.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Rk.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Rk.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Rk.c.prototype.getAspectRatio = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = kk.viewport;
        return this.getRenderWidth(Fk) * Bk.width / (this.getRenderHeight(Fk) * Bk.height)
      }, Rk.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Rk.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39432: (kk, Fk, Bk) => {
    var Rk = Bk(39305),
      tk = Bk(39436);
    let ak = !1;
    ak || (ak = !0, (0, tk.p)(), Rk.c.prototype._loadFileAsync = async function(kk, Fk, Bk) {
      return await new Promise(((Rk, tk) => {
        this._loadFile(kk, (kk => {
          Rk(kk)
        }), void 0, Fk, Bk, ((kk, Fk) => {
          tk(Fk)
        }))
      }))
    })
  },
  39424: (kk, Fk, Bk) => {
    (0, Bk(39360).d)()
  },
  39360: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(39305);
    let tk = !1;

    function ak() {
      tk || (tk = !0, Rk.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Rk.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Rk.c.prototype.createRenderPassId = function(kk) {
        const Fk = ++Rk.c._RenderPassIdCounter;
        return this._renderPassNames[Fk] = kk ?? "NONAME", Fk
      }, Rk.c.prototype.releaseRenderPassId = function(kk) {
        this._renderPassNames[kk] = void 0;
        for (let Fk = 0; Fk < this.scenes.length; ++Fk) {
          const Bk = this.scenes[Fk];
          for (let Fk = 0; Fk < Bk.meshes.length; ++Fk) {
            const Rk = Bk.meshes[Fk];
            if (Rk._releaseRenderPassId(kk), Rk.AY)
              for (let Fk = 0; Fk < Rk.AY.length; ++Fk) {
                Rk.AY[Fk]._removeDrawWrapper(kk)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(kk)
      })
    }
  },
  39472: (kk, Fk, Bk) => {
    var Rk = Bk(39477),
      tk = Bk(39305);
    let ak = !1;
    ak || (ak = !0, tk.c.GetCompatibleTextureLoader = Rk.d)
  },
  39362: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak
    });
    var Rk = Bk(39258);
    let tk = !1;

    function ak() {
      tk || (tk = !0, Rk.ThinEngine.prototype.setAlphaMode = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Bk] === kk) {
          if (!Fk) {
            const Fk = 0 === kk;
            this.depthCullingState.depthMask !== Fk && (this.depthCullingState.depthMask = Fk)
          }
          return
        }
        const Rk = 0 === kk;
        this._alphaState.setAlphaBlend(!Rk, Bk), this._alphaState.setAlphaMode(kk, Bk), Fk || (this.depthCullingState.depthMask = Rk), this._alphaMode[Bk] = kk
      })
    }
  },
  39368: (kk, Fk, Bk) => {
    var Rk = Bk(39248),
      tk = Bk(38320),
      ak = Bk(39258),
      Xk = Bk(39375),
      bk = Bk(39342);
    class wk extends Xk.d {
      setDepthStencilTexture(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(kk, Fk), !kk) return;
        const Bk = this._engine,
          Rk = this._context,
          tk = kk._hardwareTexture;
        if (tk && kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const Fk = Bk._currentFramebuffer;
          Bk._bindUnboundFramebuffer(this._MSAAFramebuffer), Rk.framebufferRenderbuffer(Rk.FRAMEBUFFER, (0, bk.e)(kk.format) ? Rk.DEPTH_STENCIL_ATTACHMENT : Rk.DEPTH_ATTACHMENT, Rk.RENDERBUFFER, tk.getMSAARenderBuffer()), Bk._bindUnboundFramebuffer(Fk)
        }
      }
      constructor(kk, Fk, Bk, Rk, tk) {
        super(kk, Fk, Bk, Rk), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = tk
      }
      _cloneRenderTargetWrapper() {
        let kk;
        return this._colorTextureArray && this._depthStencilTextureArray ? (kk = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), kk.texture.isReady = !0) : kk = super._cloneRenderTargetWrapper(), kk
      }
      _swapRenderTargetWrapper(kk) {
        super._swapRenderTargetWrapper(kk), kk._framebuffer = this._framebuffer, kk._depthStencilBuffer = this._depthStencilBuffer, kk._MSAAFramebuffer = this._MSAAFramebuffer, kk._colorTextureArray = this._colorTextureArray, kk._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const kk = this._engine,
            Fk = kk._currentFramebuffer,
            Bk = this._context;
          kk._bindUnboundFramebuffer(this._framebuffer), Bk.framebufferRenderbuffer(Bk.FRAMEBUFFER, Bk.DEPTH_STENCIL_ATTACHMENT, Bk.RENDERBUFFER, null), Bk.framebufferRenderbuffer(Bk.FRAMEBUFFER, Bk.DEPTH_ATTACHMENT, Bk.RENDERBUFFER, null), Bk.framebufferRenderbuffer(Bk.FRAMEBUFFER, Bk.STENCIL_ATTACHMENT, Bk.RENDERBUFFER, null), kk._bindUnboundFramebuffer(Fk), Bk.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(kk, Fk, Bk, Rk, tk, ak)
      }
      shareDepth(kk) {
        super.shareDepth(kk);
        const Fk = this._context,
          Bk = this._depthStencilBuffer,
          Rk = kk._MSAAFramebuffer || kk._framebuffer,
          tk = this._engine;
        kk._depthStencilBuffer && kk._depthStencilBuffer !== Bk && Fk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = Bk;
        const ak = kk._generateStencilBuffer ? Fk.DEPTH_STENCIL_ATTACHMENT : Fk.DEPTH_ATTACHMENT;
        tk._bindUnboundFramebuffer(Rk), Fk.framebufferRenderbuffer(Fk.FRAMEBUFFER, ak, Fk.RENDERBUFFER, Bk), tk._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tk = kk._hardwareTexture;
        if (!tk) return;
        const ak = this._framebuffer,
          Xk = this._engine,
          bk = Xk._currentFramebuffer;
        let wk;
        if (Xk._bindUnboundFramebuffer(ak), Xk.Uy > 1) {
          const ak = this._context;
          wk = ak["COLOR_ATTACHMENT" + Fk], kk.is2DArray || kk.is3D ? (Bk = Bk ?? this.layerIndices?.[Fk] ?? 0, ak.framebufferTextureLayer(ak.FRAMEBUFFER, wk, tk.underlyingResource, Rk, Bk)) : kk.isCube ? (Bk = Bk ?? this.faceIndices?.[Fk] ?? 0, ak.framebufferTexture2D(ak.FRAMEBUFFER, wk, ak.TEXTURE_CUBE_MAP_POSITIVE_X + Bk, tk.underlyingResource, Rk)) : ak.framebufferTexture2D(ak.FRAMEBUFFER, wk, ak.TEXTURE_2D, tk.underlyingResource, Rk)
        } else {
          const kk = this._context;
          wk = kk["COLOR_ATTACHMENT" + Fk + "_WEBGL"];
          const ak = void 0 !== Bk ? kk.TEXTURE_CUBE_MAP_POSITIVE_X + Bk : kk.TEXTURE_2D;
          kk.framebufferTexture2D(kk.FRAMEBUFFER, wk, ak, tk.underlyingResource, Rk)
        }
        if (kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const kk = this._context;
          Xk._bindUnboundFramebuffer(this._MSAAFramebuffer), kk.framebufferRenderbuffer(kk.FRAMEBUFFER, wk, kk.RENDERBUFFER, tk.getMSAARenderBuffer())
        }
        Xk._bindUnboundFramebuffer(bk)
      }
      setTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(kk, Fk, Bk), this._bindTextureRenderTarget(kk, Fk)
      }
      setLayerAndFaceIndices(kk, Fk) {
        if (super.setLayerAndFaceIndices(kk, Fk), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Bk = this._attachments?.length ?? this.textures.length;
        for (let Rk = 0; Rk < Bk; Rk++) {
          const kk = this.textures[Rk];
          kk && (kk.is2DArray || kk.is3D ? this._bindTextureRenderTarget(kk, Rk, this.layerIndices[Rk]) : kk.isCube ? this._bindTextureRenderTarget(kk, Rk, this.faceIndices[Rk]) : this._bindTextureRenderTarget(kk, Rk))
        }
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(kk, Fk, Bk), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Rk = this.textures[kk];
        Rk.is2DArray || Rk.is3D ? this._bindTextureRenderTarget(this.textures[kk], kk, this.layerIndices[kk]) : Rk.isCube && this._bindTextureRenderTarget(this.textures[kk], kk, this.faceIndices[kk])
      }
      resolveMSAATextures() {
        const kk = this._engine,
          Fk = kk._currentFramebuffer;
        kk._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), kk._bindUnboundFramebuffer(Fk)
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Fk = this._context;
        kk || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Fk.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Fk.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Fk.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(kk)
      }
    }
    let dk = !1;
    dk || (dk = !0, ak.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(kk, Fk, Bk) {
      const Rk = new wk(kk, Fk, Bk, this, this._gl);
      return this._renderTargetWrapperCache.push(Rk), Rk
    }, ak.ThinEngine.prototype.createRenderTargetTexture = function(kk, Fk) {
      const Bk = this._createHardwareRenderTargetWrapper(!1, !1, kk);
      let Rk, tk, ak = !0,
        Xk = !1,
        bk = !1,
        wk = 1;
      void 0 !== Fk && "object" === typeof Fk && (ak = Fk.generateDepthBuffer ?? !0, Xk = !!Fk.generateStencilBuffer, bk = !!Fk.noColorAttachment, Rk = Fk.colorAttachment, wk = Fk.samples ?? 1, tk = Fk.label);
      const dk = Rk || (bk ? null : this._createInternalTexture(kk, Fk, !0, 5)),
        sk = kk.width || kk,
        Vk = kk.height || kk,
        Jk = this._currentFramebuffer,
        Ak = this._gl,
        ek = Ak.createFramebuffer();
      if (this._bindUnboundFramebuffer(ek), Bk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Xk, ak, sk, Vk), !dk || dk.is2DArray || dk.is3D || Ak.framebufferTexture2D(Ak.FRAMEBUFFER, Ak.COLOR_ATTACHMENT0, Ak.TEXTURE_2D, dk._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Jk), Bk.label = tk ?? "RenderTargetWrapper", Bk._framebuffer = ek, Bk._generateDepthBuffer = ak, Bk._generateStencilBuffer = Xk, Bk.setTextures(dk), Rk) {
        if (Bk._samples = Rk.samples, Rk.samples > 1) {
          const kk = Rk._hardwareTexture.getMSAARenderBuffer(0);
          Bk._MSAAFramebuffer = Ak.createFramebuffer(), this._bindUnboundFramebuffer(Bk._MSAAFramebuffer), Ak.framebufferRenderbuffer(Ak.FRAMEBUFFER, Ak.COLOR_ATTACHMENT0, Ak.RENDERBUFFER, kk), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Bk, wk);
      return Bk
    }, ak.ThinEngine.prototype._createDepthStencilTexture = function(kk, Fk, Bk) {
      const ak = this._gl,
        Xk = kk.layers || 0,
        wk = kk.depth || 0;
      let dk = ak.TEXTURE_2D;
      0 !== Xk ? dk = ak.TEXTURE_2D_ARRAY : 0 !== wk && (dk = ak.TEXTURE_3D);
      const sk = new Rk.c(this, 12);
      if (sk.label = Fk.label, !this._caps.depthTextureExtension) return tk.b.Error("Depth texture is not supported by your browser or hardware."), sk;
      const Vk = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Fk
      };
      if (this._bindTextureDirectly(dk, sk, !0), this._setupDepthStencilTexture(sk, kk, 0 !== Vk.comparisonFunction && Vk.bilinearFiltering, Vk.comparisonFunction, Vk.samples), void 0 !== Vk.depthTextureFormat) {
        if (15 !== Vk.depthTextureFormat && 16 !== Vk.depthTextureFormat && 17 !== Vk.depthTextureFormat && 13 !== Vk.depthTextureFormat && 14 !== Vk.depthTextureFormat && 18 !== Vk.depthTextureFormat) return tk.b.Error(`Depth texture ${Vk.depthTextureFormat} format is not supported.`), sk;
        sk.format = Vk.depthTextureFormat
      } else sk.format = Vk.generateStencil ? 13 : 16;
      const Jk = (0, bk.e)(sk.format),
        Ak = this._getWebGLTextureTypeFromDepthTextureFormat(sk.format),
        ek = Jk ? ak.DEPTH_STENCIL : ak.DEPTH_COMPONENT,
        yk = this._getInternalFormatFromDepthTextureFormat(sk.format, !0, Jk);
      return sk.is2DArray ? ak.texImage3D(dk, 0, yk, sk.width, sk.height, Xk, 0, ek, Ak, null) : sk.is3D ? ak.texImage3D(dk, 0, yk, sk.width, sk.height, wk, 0, ek, Ak, null) : ak.texImage2D(dk, 0, yk, sk.width, sk.height, 0, ek, Ak, null), this._bindTextureDirectly(dk, null), this._internalTexturesCache.push(sk), Bk._depthStencilBuffer && (ak.deleteRenderbuffer(Bk._depthStencilBuffer), Bk._depthStencilBuffer = null), this._bindUnboundFramebuffer(Bk._MSAAFramebuffer ?? Bk._framebuffer), Bk._generateStencilBuffer = Jk, Bk._depthStencilTextureWithStencil = Jk, Bk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Bk._generateStencilBuffer, Bk._generateDepthBuffer, Bk.width, Bk.height, Bk.samples, sk.format), this._bindUnboundFramebuffer(null), sk
    }, ak.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(kk, Fk) {
      if (this.Uy < 2 || !kk) return 1;
      if (kk.samples === Fk) return Fk;
      const Bk = this._gl;
      Fk = Math.min(Fk, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (Bk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (Bk.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
      const Rk = kk.texture?._hardwareTexture;
      if (Rk?.releaseMSAARenderBuffers(), kk.texture && Fk > 1 && "function" === typeof Bk.renderbufferStorageMultisample) {
        const tk = Bk.createFramebuffer();
        if (!tk) throw new Error("Unable to create multi sampled framebuffer");
        kk._MSAAFramebuffer = tk, this._bindUnboundFramebuffer(kk._MSAAFramebuffer);
        const ak = this._createRenderBuffer(kk.texture.width, kk.texture.height, Fk, -1, this._getRGBABufferInternalSizedFormat(kk.texture.type, kk.texture.format, kk.texture._useSRGBBuffer), Bk.COLOR_ATTACHMENT0, !1);
        if (!ak) throw new Error("Unable to create multi sampled framebuffer");
        Rk?.addMSAARenderBuffer(ak)
      }
      this._bindUnboundFramebuffer(kk._MSAAFramebuffer ?? kk._framebuffer), kk.texture && (kk.texture.samples = Fk), kk._samples = Fk;
      const tk = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
      return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, Fk, tk), this._bindUnboundFramebuffer(null), Fk
    }, ak.ThinEngine.prototype._setupDepthStencilTexture = function(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const ak = Fk.width ?? Fk,
        Xk = Fk.height ?? Fk,
        bk = Fk.layers || 0,
        wk = Fk.depth || 0;
      kk.baseWidth = ak, kk.baseHeight = Xk, kk.width = ak, kk.height = Xk, kk.is2DArray = bk > 0, kk.depth = bk || wk, kk.isReady = !0, kk.samples = tk, kk.generateMipMaps = !1, kk.samplingMode = Bk ? 2 : 1, kk.type = 0, kk._comparisonFunction = Rk;
      const dk = this._gl,
        sk = this._getTextureTarget(kk),
        Vk = this._getSamplingParameters(kk.samplingMode, !1);
      dk.texParameteri(sk, dk.TEXTURE_MAG_FILTER, Vk.mag), dk.texParameteri(sk, dk.TEXTURE_MIN_FILTER, Vk.min), dk.texParameteri(sk, dk.TEXTURE_WRAP_S, dk.CLAMP_TO_EDGE), dk.texParameteri(sk, dk.TEXTURE_WRAP_T, dk.CLAMP_TO_EDGE), this.Uy > 1 && (0 === Rk ? (dk.texParameteri(sk, dk.TEXTURE_COMPARE_FUNC, 515), dk.texParameteri(sk, dk.TEXTURE_COMPARE_MODE, dk.NONE)) : (dk.texParameteri(sk, dk.TEXTURE_COMPARE_FUNC, Rk), dk.texParameteri(sk, dk.TEXTURE_COMPARE_MODE, dk.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39236: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.d
    });
    var Rk = Bk(39245);
    (0, Bk(39362).d)();
    var tk = Bk(39258);
    let ak = !1;
    ! function() {
      if (ak) return;
      ak = !0;
      const kk = new WeakMap,
        Fk = new WeakMap,
        Bk = new WeakMap,
        Rk = new WeakMap;
      tk.ThinEngine.prototype.getAlphaToCoverage = function() {
        return kk.get(this) ?? !1
      }, tk.ThinEngine.prototype.setAlphaToCoverage = function(Bk) {
        (kk.get(this) !== Bk || this._gl && Fk.get(this) !== this._gl) && (kk.set(this, Bk), this._gl && (Bk ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Fk.set(this, this._gl)))
      }, Object.defineProperty(tk.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Rk.get(this) !== this._gl && (Bk.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Rk.set(this, this._gl)), Bk.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Xk = Bk(39248),
      bk = Bk(38320),
      wk = Bk(39329);
    let dk = !1;
    ! function() {
      function kk(kk, Fk, Bk, Rk) {
        let tk, ak = 1;
        1 === Rk ? tk = new Float32Array(Fk * Bk * 4) : 2 === Rk ? (tk = new Uint16Array(Fk * Bk * 4), ak = 15360) : tk = 7 === Rk ? new Uint32Array(Fk * Bk * 4) : new Uint8Array(Fk * Bk * 4);
        for (let Xk = 0; Xk < Fk; Xk++)
          for (let Rk = 0; Rk < Bk; Rk++) {
            const Bk = 3 * (Rk * Fk + Xk),
              bk = 4 * (Rk * Fk + Xk);
            tk[bk + 0] = kk[Bk + 0], tk[bk + 1] = kk[Bk + 1], tk[bk + 2] = kk[Bk + 2], tk[bk + 3] = ak
          }
        return tk
      }

      function Fk(kk) {
        return function(Fk, Bk, Rk, tk, ak, bk, wk, dk) {
          let sk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Vk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Jk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Ak = kk ? 10 : 11,
            ek = new Xk.c(this, Ak);
          ek.baseWidth = Bk, ek.baseHeight = Rk, ek.baseDepth = tk, ek.width = Bk, ek.height = Rk, ek.depth = tk, ek.format = ak, ek.type = Vk, ek.generateMipMaps = bk, ek.samplingMode = dk, kk ? ek.is3D = !0 : ek.is2DArray = !0, this._doNotHandleContextLost || (ek._bufferView = Fk), kk ? this.updateRawTexture3D(ek, Fk, ak, wk, sk, Vk) : this.updateRawTexture2DArray(ek, Fk, ak, wk, sk, Vk), this._bindTextureDirectly(Jk, ek, !0);
          const yk = this._getSamplingParameters(dk, bk);
          return this._gl.texParameteri(Jk, this._gl.TEXTURE_MAG_FILTER, yk.mag), this._gl.texParameteri(Jk, this._gl.TEXTURE_MIN_FILTER, yk.min), bk && this._gl.generateMipmap(Jk), this._bindTextureDirectly(Jk, null), this._internalTexturesCache.push(ek), ek
        }
      }

      function Bk(kk) {
        return function(Fk, Bk, Rk, tk) {
          let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const bk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            wk = this._getWebGLTextureType(Xk),
            dk = this._getInternalFormat(Rk),
            sk = this._getRGBABufferInternalSizedFormat(Xk, Rk);
          this._bindTextureDirectly(bk, Fk, !0), this._unpackFlipY(void 0 === tk || !!tk), this._doNotHandleContextLost || (Fk._bufferView = Bk, Fk.format = Rk, Fk.invertY = tk, Fk._compression = ak), Fk.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ak && Bk ? this._gl.compressedTexImage3D(bk, 0, this.getCaps().s3tc[ak], Fk.width, Fk.height, Fk.depth, 0, Bk) : this._gl.texImage3D(bk, 0, sk, Fk.width, Fk.height, Fk.depth, 0, dk, wk, Bk), Fk.generateMipMaps && this._gl.generateMipmap(bk), this._bindTextureDirectly(bk, null), Fk.isReady = !0
        }
      }
      dk || (dk = !0, tk.ThinEngine.prototype.updateRawTexture = function(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!kk) return;
        const bk = this._getRGBABufferInternalSizedFormat(ak, Bk, Xk),
          wk = this._getInternalFormat(Bk),
          dk = this._getWebGLTextureType(ak);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === Rk || !!Rk), this._doNotHandleContextLost || (kk._bufferView = Fk, kk.format = Bk, kk.type = ak, kk.invertY = Rk, kk._compression = tk), kk.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), tk && Fk ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[tk], kk.width, kk.height, 0, Fk) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, bk, kk.width, kk.height, 0, wk, dk, Fk), kk.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), kk.isReady = !0
      }, tk.ThinEngine.prototype.createRawTexture = function(kk, Fk, Bk, Rk, tk, ak, bk) {
        let wk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          sk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Vk = new Xk.c(this, 3);
        Vk.baseWidth = Fk, Vk.baseHeight = Bk, Vk.width = Fk, Vk.height = Bk, Vk.format = Rk, Vk.generateMipMaps = tk, Vk.samplingMode = bk, Vk.invertY = ak, Vk._compression = wk, Vk.type = dk, Vk._useSRGBBuffer = this._getUseSRGBBuffer(sk, !tk), this._doNotHandleContextLost || (Vk._bufferView = kk), this.updateRawTexture(Vk, kk, Rk, ak, wk, dk, Vk._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Vk, !0);
        const Jk = this._getSamplingParameters(bk, tk);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Jk.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Jk.min), tk && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Vk), Vk
      }, tk.ThinEngine.prototype.createRawCubeTexture = function(kk, Fk, Bk, Rk, tk, ak, dk) {
        let sk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Vk = this._gl,
          Jk = new Xk.c(this, 8);
        Jk.isCube = !0, Jk.format = Bk, Jk.type = Rk, this._doNotHandleContextLost || (Jk._bufferViewArray = kk);
        const Ak = this._getWebGLTextureType(Rk);
        let ek = this._getInternalFormat(Bk);
        ek === Vk.RGB && (ek = Vk.RGBA), Ak !== Vk.FLOAT || this._caps.textureFloatLinearFiltering ? Ak !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Ak !== Vk.FLOAT || this._caps.textureFloatRender ? Ak !== Vk.HALF_FLOAT || this._caps.colorBufferFloat || (tk = !1, bk.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (tk = !1, bk.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (tk = !1, dk = 1, bk.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (tk = !1, dk = 1, bk.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const yk = Fk,
          fk = yk;
        Jk.width = yk, Jk.height = fk, Jk.invertY = ak, Jk._compression = sk;
        if (!this.needPOTTextures || (0, wk.h)(Jk.width) && (0, wk.h)(Jk.height) || (tk = !1), kk) this.updateRawCubeTexture(Jk, kk, Bk, Rk, ak, sk);
        else {
          const kk = this._getRGBABufferInternalSizedFormat(Rk),
            Fk = 0;
          this._bindTextureDirectly(Vk.TEXTURE_CUBE_MAP, Jk, !0);
          for (let Bk = 0; Bk < 6; Bk++) sk ? Vk.compressedTexImage2D(Vk.TEXTURE_CUBE_MAP_POSITIVE_X + Bk, Fk, this.getCaps().s3tc[sk], Jk.width, Jk.height, 0, void 0) : Vk.texImage2D(Vk.TEXTURE_CUBE_MAP_POSITIVE_X + Bk, Fk, kk, Jk.width, Jk.height, 0, ek, Ak, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Jk, !0), kk && tk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const mk = this._getSamplingParameters(dk, tk);
        return Vk.texParameteri(Vk.TEXTURE_CUBE_MAP, Vk.TEXTURE_MAG_FILTER, mk.mag), Vk.texParameteri(Vk.TEXTURE_CUBE_MAP, Vk.TEXTURE_MIN_FILTER, mk.min), Vk.texParameteri(Vk.TEXTURE_CUBE_MAP, Vk.TEXTURE_WRAP_S, Vk.CLAMP_TO_EDGE), Vk.texParameteri(Vk.TEXTURE_CUBE_MAP, Vk.TEXTURE_WRAP_T, Vk.CLAMP_TO_EDGE), this._bindTextureDirectly(Vk.TEXTURE_CUBE_MAP, null), Jk.generateMipMaps = tk, Jk.samplingMode = dk, Jk.isReady = !0, Jk
      }, tk.ThinEngine.prototype.updateRawCubeTexture = function(Fk, Bk, Rk, tk, ak) {
        let Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Fk._bufferViewArray = Bk, Fk.format = Rk, Fk.type = tk, Fk.invertY = ak, Fk._compression = Xk;
        const dk = this._gl,
          sk = this._getWebGLTextureType(tk);
        let Vk = this._getInternalFormat(Rk);
        const Jk = this._getRGBABufferInternalSizedFormat(tk);
        let Ak = !1;
        Vk === dk.RGB && (Vk = dk.RGBA, Ak = !0), this._bindTextureDirectly(dk.TEXTURE_CUBE_MAP, Fk, !0), this._unpackFlipY(void 0 === ak || !!ak), Fk.width % 4 !== 0 && dk.pixelStorei(dk.UNPACK_ALIGNMENT, 1);
        for (let wk = 0; wk < 6; wk++) {
          let Rk = Bk[wk];
          Xk ? dk.compressedTexImage2D(dk.TEXTURE_CUBE_MAP_POSITIVE_X + wk, bk, this.getCaps().s3tc[Xk], Fk.width, Fk.height, 0, Rk) : (Ak && (Rk = kk(Rk, Fk.width, Fk.height, tk)), dk.texImage2D(dk.TEXTURE_CUBE_MAP_POSITIVE_X + wk, bk, Jk, Fk.width, Fk.height, 0, Vk, sk, Rk))
        }(!this.needPOTTextures || (0, wk.h)(Fk.width) && (0, wk.h)(Fk.height)) && Fk.generateMipMaps && 0 === bk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Fk.isReady = !0
      }, tk.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        let dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          sk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Vk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Jk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Ak = this._gl,
          ek = this.createRawCubeTexture(null, Rk, tk, ak, !Xk, Jk, Vk, null);
        Bk?.addPendingData(ek), ek.url = Fk, ek.isReady = !1, this._internalTexturesCache.push(ek);
        const yk = (kk, Fk) => {
            Bk?.removePendingData(ek), sk && sk(kk ? kk.status + " " + kk.statusText : "Failed to parse texture data", Fk)
          },
          fk = async Fk => {
            if (!ek._hardwareTexture) return;
            const Rk = bk(Fk);
            if (!Rk) return;
            const Xk = Rk instanceof Promise ? await Rk : Rk,
              sk = ek.width;
            if (wk) {
              const Fk = this._getWebGLTextureType(ak);
              let Bk = this._getInternalFormat(tk);
              const Rk = this._getRGBABufferInternalSizedFormat(ak);
              let bk = !1;
              Bk === Ak.RGB && (Bk = Ak.RGBA, bk = !0), this._bindTextureDirectly(Ak.TEXTURE_CUBE_MAP, ek, !0), this._unpackFlipY(!1);
              const dk = wk(Xk);
              for (let tk = 0; tk < dk.length; tk++) {
                const Xk = sk >> tk;
                for (let wk = 0; wk < 6; wk++) {
                  let sk = dk[tk][wk];
                  bk && (sk = kk(sk, Xk, Xk, ak)), Ak.texImage2D(wk, tk, Rk, Xk, Xk, 0, Bk, Fk, sk)
                }
              }
              this._bindTextureDirectly(Ak.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(ek, Xk, tk, ak, Jk);
            ek.isReady = !0, Bk?.removePendingData(ek), ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), dk && dk()
          };
        return this._loadFile(Fk, (kk => {
          fk(kk).catch((kk => {
            yk(void 0, kk)
          }))
        }), void 0, Bk?.offlineProvider, !0, yk), ek
      }, tk.ThinEngine.prototype.createRawTexture2DArray = Fk(!1), tk.ThinEngine.prototype.createRawTexture3D = Fk(!0), tk.ThinEngine.prototype.updateRawTexture2DArray = Bk(!1), tk.ThinEngine.prototype.updateRawTexture3D = Bk(!0))
    }();
    var sk = Bk(39293);
    let Vk = !1;
    Vk || (Vk = !0, tk.ThinEngine.prototype._readTexturePixelsSync = function(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        dk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Vk = this._gl;
      if (!Vk) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const kk = Vk.createFramebuffer();
        if (!kk) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = kk
      }
      Vk.bindFramebuffer(Vk.FRAMEBUFFER, this._dummyFramebuffer), Rk > -1 && (kk.is2DArray || kk.is3D) ? Vk.framebufferTextureLayer(Vk.FRAMEBUFFER, Vk.COLOR_ATTACHMENT0, kk._hardwareTexture?.underlyingResource, tk, Rk) : Rk > -1 ? Vk.framebufferTexture2D(Vk.FRAMEBUFFER, Vk.COLOR_ATTACHMENT0, Vk.TEXTURE_CUBE_MAP_POSITIVE_X + Rk, kk._hardwareTexture?.underlyingResource, tk) : Vk.framebufferTexture2D(Vk.FRAMEBUFFER, Vk.COLOR_ATTACHMENT0, Vk.TEXTURE_2D, kk._hardwareTexture?.underlyingResource, tk);
      let Jk = void 0 !== kk.type ? this._getWebGLTextureType(kk.type) : Vk.UNSIGNED_BYTE;
      return bk ? ak || (ak = (0, sk.o)(kk.type, 4 * Fk * Bk)) : Jk === Vk.UNSIGNED_BYTE ? (ak || (ak = new Uint8Array(4 * Fk * Bk)), Jk = Vk.UNSIGNED_BYTE) : (ak || (ak = new Float32Array(4 * Fk * Bk)), Jk = Vk.FLOAT), Xk && this.flushFramebuffer(), Vk.readPixels(wk, dk, Fk, Bk, Vk.RGBA, Jk, ak), Vk.bindFramebuffer(Vk.FRAMEBUFFER, this._currentFramebuffer), ak
    }, tk.ThinEngine.prototype._readTexturePixels = function(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        dk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk))
    }), (0, Bk(39365).c)();
    let Jk = !1;
    Jk || (Jk = !0, tk.ThinEngine.prototype._createDepthStencilCubeTexture = function(kk, Fk) {
      const Bk = new Xk.c(this, 12);
      if (Bk.isCube = !0, 1 === this.Uy) return bk.b.Error("Depth cube texture is not supported by WebGL 1."), Bk;
      const Rk = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Fk
        },
        tk = this._gl;
      this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, Bk, !0), this._setupDepthStencilTexture(Bk, kk, Rk.bilinearFiltering, Rk.comparisonFunction);
      for (let ak = 0; ak < 6; ak++) Rk.generateStencil ? tk.texImage2D(tk.TEXTURE_CUBE_MAP_POSITIVE_X + ak, 0, tk.DEPTH24_STENCIL8, kk, kk, 0, tk.DEPTH_STENCIL, tk.UNSIGNED_INT_24_8, null) : tk.texImage2D(tk.TEXTURE_CUBE_MAP_POSITIVE_X + ak, 0, tk.DEPTH_COMPONENT24, kk, kk, 0, tk.DEPTH_COMPONENT, tk.UNSIGNED_INT, null);
      return this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Bk), Bk
    }, tk.ThinEngine.prototype._setCubeMapTextureParams = function(kk, Fk, Bk) {
      const Rk = this._gl;
      Rk.texParameteri(Rk.TEXTURE_CUBE_MAP, Rk.TEXTURE_MAG_FILTER, Rk.LINEAR), Rk.texParameteri(Rk.TEXTURE_CUBE_MAP, Rk.TEXTURE_MIN_FILTER, Fk ? Rk.LINEAR_MIPMAP_LINEAR : Rk.LINEAR), Rk.texParameteri(Rk.TEXTURE_CUBE_MAP, Rk.TEXTURE_WRAP_S, Rk.CLAMP_TO_EDGE), Rk.texParameteri(Rk.TEXTURE_CUBE_MAP, Rk.TEXTURE_WRAP_T, Rk.CLAMP_TO_EDGE), kk.samplingMode = Fk ? 3 : 2, Fk && this.getCaps().textureMaxLevel && void 0 !== Bk && Bk > 0 && (Rk.texParameteri(Rk.TEXTURE_CUBE_MAP, Rk.TEXTURE_MAX_LEVEL, Bk), kk._maxLodLevel = Bk), this._bindTextureDirectly(Rk.TEXTURE_CUBE_MAP, null)
    }, tk.ThinEngine.prototype.createCubeTexture = function(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xk = arguments.length > 6 ? arguments[6] : void 0,
        dk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        sk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Vk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Jk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Ak = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        ek = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        yk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const fk = this._gl;
      return this.createCubeTextureBase(kk, Fk, Bk, !!Rk, tk, ak, Xk, dk, sk, Vk, Jk, Ak, (kk => this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, kk, !0)), ((kk, Fk) => {
        const Bk = this.needPOTTextures ? (0, wk.g)(Fk[0].width, this._caps.maxCubemapTextureSize) : Fk[0].width,
          ak = Bk,
          dk = [fk.TEXTURE_CUBE_MAP_POSITIVE_X, fk.TEXTURE_CUBE_MAP_POSITIVE_Y, fk.TEXTURE_CUBE_MAP_POSITIVE_Z, fk.TEXTURE_CUBE_MAP_NEGATIVE_X, fk.TEXTURE_CUBE_MAP_NEGATIVE_Y, fk.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, kk, !0), this._unpackFlipY(!1);
        const sk = Xk ? this._getInternalFormat(Xk, kk._useSRGBBuffer) : kk._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : fk.RGBA;
        let Vk = Xk ? this._getInternalFormat(Xk) : fk.RGBA;
        kk._useSRGBBuffer && 1 === this.Uy && (Vk = sk);
        for (let Rk = 0; Rk < dk.length; Rk++)
          if (Fk[Rk].width !== Bk || Fk[Rk].height !== ak) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void bk.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Bk, this._workingCanvas.height = ak, this._workingContext.drawImage(Fk[Rk], 0, 0, Fk[Rk].width, Fk[Rk].height, 0, 0, Bk, ak), fk.texImage2D(dk[Rk], 0, sk, Vk, fk.UNSIGNED_BYTE, this._workingCanvas)
          } else fk.texImage2D(dk[Rk], 0, sk, Vk, fk.UNSIGNED_BYTE, Fk[Rk]);
        Rk || fk.generateMipmap(fk.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(kk, !Rk), kk.width = Bk, kk.height = ak, kk.isReady = !0, Xk && (kk.format = Xk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear(), tk && tk()
      }), !!ek, yk)
    }, tk.ThinEngine.prototype.generateMipMapsForCubemap = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk.generateMipMaps) {
        const Bk = this._gl;
        this._bindTextureDirectly(Bk.TEXTURE_CUBE_MAP, kk, !0), Bk.generateMipmap(Bk.TEXTURE_CUBE_MAP), Fk && this._bindTextureDirectly(Bk.TEXTURE_CUBE_MAP, null)
      }
    });
    Bk(39368);
    let Ak = !1;
    Ak || (Ak = !0, tk.ThinEngine.prototype.setDepthStencilTexture = function(kk, Fk, Bk, Rk) {
      void 0 !== kk && (Fk && (this._boundUniforms[kk] = Fk), Bk && Bk.depthStencilTexture ? this._setTexture(kk, Bk, !1, !0, Rk) : this._setTexture(kk, null, void 0, void 0, Rk))
    });
    let ek = !1;
    ek || (ek = !0, tk.ThinEngine.prototype.createRenderTargetCubeTexture = function(kk, Fk) {
      const Bk = this._createHardwareRenderTargetWrapper(!1, !0, kk),
        Rk = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Fk
        };
      Rk.generateStencilBuffer = Rk.generateDepthBuffer && Rk.generateStencilBuffer, (1 !== Rk.type || this._caps.textureFloatLinearFiltering) && (2 !== Rk.type || this._caps.textureHalfFloatLinearFiltering) || (Rk.samplingMode = 1);
      const tk = this._gl,
        ak = new Xk.c(this, 5);
      this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, ak, !0);
      const wk = this._getSamplingParameters(Rk.samplingMode, Rk.generateMipMaps);
      1 !== Rk.type || this._caps.textureFloat || (Rk.type = 0, bk.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_MAG_FILTER, wk.mag), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_MIN_FILTER, wk.min), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_WRAP_S, tk.CLAMP_TO_EDGE), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_WRAP_T, tk.CLAMP_TO_EDGE);
      for (let Xk = 0; Xk < 6; Xk++) tk.texImage2D(tk.TEXTURE_CUBE_MAP_POSITIVE_X + Xk, 0, this._getRGBABufferInternalSizedFormat(Rk.type, Rk.format), kk, kk, 0, this._getInternalFormat(Rk.format), this._getWebGLTextureType(Rk.type), null);
      const dk = tk.createFramebuffer();
      return this._bindUnboundFramebuffer(dk), Bk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Rk.generateStencilBuffer, Rk.generateDepthBuffer, kk, kk), Rk.generateMipMaps && tk.generateMipmap(tk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Bk._framebuffer = dk, Bk._generateDepthBuffer = Rk.generateDepthBuffer, Bk._generateStencilBuffer = Rk.generateStencilBuffer, ak.width = kk, ak.height = kk, ak.isReady = !0, ak.isCube = !0, ak.samples = 1, ak.generateMipMaps = Rk.generateMipMaps, ak.samplingMode = Rk.samplingMode, ak.type = Rk.type, ak.format = Rk.format, this._internalTexturesCache.push(ak), Bk.setTextures(ak), Bk
    });
    var yk = Bk(39384),
      fk = Bk(39392);
    let mk = !1;
    mk || (mk = !0, tk.ThinEngine.prototype.createPrefilteredCubeTexture = function(kk, Fk, Rk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        wk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        dk = arguments.length > 6 ? arguments[6] : void 0,
        sk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Vk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Jk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(kk, Fk, null, !1, (async kk => {
        if (!kk) return void(ak && ak(null));
        const wk = kk.texture;
        if (Vk ? kk.info.sphericalPolynomial && (wk._sphericalPolynomial = kk.info.sphericalPolynomial) : wk._sphericalPolynomial = wk._sphericalPolynomial ?? new yk.f, wk._source = 9, this.getCaps().textureLOD) return void(ak && ak(wk));
        const dk = this._gl,
          sk = kk.width;
        if (!sk) return;
        const {
          DDSTools: Jk
        } = await Bk.e(296).then((() => Bk(41174))), Ak = [];
        for (let Bk = 0; Bk < 3; Bk++) {
          const ak = 1 - Bk / 2,
            Vk = tk,
            ek = Math.log2(sk) * Rk + tk,
            yk = Vk + (ek - Vk) * ak,
            mk = Math.round(Math.min(Math.max(yk, 0), ek)),
            Wk = new Xk.c(this, 2);
          if (Wk.type = wk.type, Wk.format = wk.format, Wk.width = Math.pow(2, Math.max(Math.log2(sk) - mk, 0)), Wk.height = Wk.width, Wk.isCube = !0, Wk._cachedWrapU = 0, Wk._cachedWrapV = 0, this._bindTextureDirectly(dk.TEXTURE_CUBE_MAP, Wk, !0), Wk.samplingMode = 2, dk.texParameteri(dk.TEXTURE_CUBE_MAP, dk.TEXTURE_MAG_FILTER, dk.LINEAR), dk.texParameteri(dk.TEXTURE_CUBE_MAP, dk.TEXTURE_MIN_FILTER, dk.LINEAR), dk.texParameteri(dk.TEXTURE_CUBE_MAP, dk.TEXTURE_WRAP_S, dk.CLAMP_TO_EDGE), dk.texParameteri(dk.TEXTURE_CUBE_MAP, dk.TEXTURE_WRAP_T, dk.CLAMP_TO_EDGE), kk.isDDS) {
            const Fk = kk.info,
              Bk = kk.data;
            this._unpackFlipY(Fk.isCompressed), Jk.UploadDDSLevels(this, Wk, Bk, Fk, !0, 6, mk)
          } else bk.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(dk.TEXTURE_CUBE_MAP, null);
          const vk = new fk.e(Fk);
          vk._isCube = !0, vk._texture = Wk, Wk.isReady = !0, Ak.push(vk)
        }
        wk._lodTextureHigh = Ak[2], wk._lodTextureMid = Ak[1], wk._lodTextureLow = Ak[0], ak && ak(wk)
      }), wk, dk, sk, Vk, Rk, tk, null, void 0, !1, Jk)
    });
    var Wk = Bk(39317);
    let vk = !1;
    vk || (vk = !0, tk.ThinEngine.prototype.createUniformBuffer = function(kk, Fk) {
      const Bk = this._gl.createBuffer();
      if (!Bk) throw new Error("Unable to create uniform buffer");
      const Rk = new Wk.c(Bk);
      return this.bindUniformBuffer(Rk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Rk.references = 1, Rk
    }, tk.ThinEngine.prototype.createDynamicUniformBuffer = function(kk, Fk) {
      const Bk = this._gl.createBuffer();
      if (!Bk) throw new Error("Unable to create dynamic uniform buffer");
      const Rk = new Wk.c(Bk);
      return this.bindUniformBuffer(Rk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Rk.references = 1, Rk
    }, tk.ThinEngine.prototype.updateUniformBuffer = function(kk, Fk, Bk, Rk) {
      this.bindUniformBuffer(kk), void 0 === Bk && (Bk = 0), void 0 === Rk ? Fk instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Bk, Fk) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Bk, new Float32Array(Fk)) : Fk instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Fk.subarray(Bk, Bk + Rk)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Fk).subarray(Bk, Bk + Rk)), this.bindUniformBuffer(null)
    }, tk.ThinEngine.prototype.bindUniformBuffer = function(kk) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, kk ? kk.underlyingResource : null)
    }, tk.ThinEngine.prototype.bindUniformBufferBase = function(kk, Fk, Bk) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Fk, kk ? kk.underlyingResource : null)
    }, tk.ThinEngine.prototype.bindUniformBlock = function(kk, Fk, Bk) {
      const Rk = kk.program,
        tk = this._gl.getUniformBlockIndex(Rk, Fk);
      4294967295 !== tk && this._gl.uniformBlockBinding(Rk, tk, Bk)
    });
    var ik = Bk(39281),
      Yk = Bk(39305);
    let Lk = !1;
    Lk || (Lk = !0, Yk.c.prototype.displayLoadingUI = function() {
      if (!(0, ik.j)()) return;
      const kk = this.loadingScreen;
      kk && kk.displayLoadingUI()
    }, Yk.c.prototype.hideLoadingUI = function() {
      if (!(0, ik.j)()) return;
      const kk = this._loadingScreen;
      kk && kk.hideLoadingUI()
    }, Object.defineProperty(Yk.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Yk.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(kk) {
        this._loadingScreen = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Yk.c.prototype, "loadingUIText", {
      set: function(kk) {
        this.loadingScreen.loadingUIText = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Yk.c.prototype, "loadingUIBackgroundColor", {
      set: function(kk) {
        this.loadingScreen.loadingUIBackgroundColor = kk
      },
      enumerable: !0,
      configurable: !0
    })), (0, Bk(39354).b)();
    let Ok = !1;
    Ok || (Ok = !0, Yk.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Yk.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Yk.c.prototype.setDepthFunction = function(kk) {
      this._depthCullingState.depthFunc = kk
    }, Yk.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Yk.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Yk.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Yk.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Yk.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Yk.c.prototype.setDepthWrite = function(kk) {
      this._depthCullingState.depthMask = kk
    }, Yk.c.prototype.setAlphaConstants = function(kk, Fk, Bk, Rk) {
      this._alphaState.setAlphaBlendConstants(kk, Fk, Bk, Rk)
    }, Yk.c.prototype.getAlphaMode = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[kk]
    }, Yk.c.prototype.getAlphaEquation = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[kk]
    });
    let Ek = !1;
    Ek || (Ek = !0, Yk.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Yk.c.prototype.setStencilBuffer = function(kk) {
      this._stencilState.stencilTest = kk
    }, Yk.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Yk.c.prototype.setStencilMask = function(kk) {
      this._stencilState.stencilMask = kk
    }, Yk.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Yk.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Yk.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Yk.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Yk.c.prototype.setStencilFunction = function(kk) {
      this._stencilState.stencilFunc = kk
    }, Yk.c.prototype.setStencilBackFunction = function(kk) {
      this._stencilState.stencilBackFunc = kk
    }, Yk.c.prototype.setStencilFunctionReference = function(kk) {
      this._stencilState.stencilFuncRef = kk
    }, Yk.c.prototype.setStencilFunctionMask = function(kk) {
      this._stencilState.stencilFuncMask = kk
    }, Yk.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Yk.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Yk.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Yk.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Yk.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Yk.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Yk.c.prototype.setStencilOperationFail = function(kk) {
      this._stencilState.stencilOpStencilFail = kk
    }, Yk.c.prototype.setStencilBackOperationFail = function(kk) {
      this._stencilState.stencilBackOpStencilFail = kk
    }, Yk.c.prototype.setStencilOperationDepthFail = function(kk) {
      this._stencilState.stencilOpDepthFail = kk
    }, Yk.c.prototype.setStencilBackOperationDepthFail = function(kk) {
      this._stencilState.stencilBackOpDepthFail = kk
    }, Yk.c.prototype.setStencilOperationPass = function(kk) {
      this._stencilState.stencilOpStencilDepthPass = kk
    }, Yk.c.prototype.setStencilBackOperationPass = function(kk) {
      this._stencilState.stencilBackOpStencilDepthPass = kk
    }, Yk.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Yk.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Bk(39424);
    let Sk = !1;
    Sk || (Sk = !0, Yk.c.prototype.createDepthStencilTexture = function(kk, Fk, Bk) {
      if (Fk.isCube) {
        const Bk = kk.width || kk;
        return this._createDepthStencilCubeTexture(Bk, Fk)
      }
      return this._createDepthStencilTexture(kk, Fk, Bk)
    });
    Bk(39432), Bk(39472);
    let Nk = !1;
    Nk || (Nk = !0, tk.ThinEngine.prototype.enableScissor = function(kk, Fk, Bk, Rk) {
      const tk = this._gl;
      tk.enable(tk.SCISSOR_TEST), tk.scissor(kk, Fk, Bk, Rk)
    }, tk.ThinEngine.prototype.disableScissor = function() {
      const kk = this._gl;
      kk.disable(kk.SCISSOR_TEST)
    })
  },
  39245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Yk
    });
    var Rk = Bk(39248),
      tk = Bk(36772),
      ak = Bk(39258),
      Xk = Bk(39307);
    class bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new wk(kk)
      }
      sampleFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xk.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Fk = kk - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Fk)
          }
          this._lastFrameTimeMs = kk
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
        const kk = this._rollingFrameTime.history(0);
        return 0 === kk ? 0 : 1e3 / kk
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
    class wk {
      constructor(kk) {
        this._samples = new Array(kk), this.reset()
      }
      add(kk) {
        let Fk;
        if (this.isSaturated()) {
          const kk = this._samples[this._pos];
          Fk = kk - this.average, this.average -= Fk / (this._sampleCount - 1), this._m2 -= Fk * (kk - this.average)
        } else this._sampleCount++;
        Fk = kk - this.average, this.average += Fk / this._sampleCount, this._m2 += Fk * (kk - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = kk, this._pos++, this._pos %= this._samples.length
      }
      history(kk) {
        if (kk >= this._sampleCount || kk >= this._samples.length) return 0;
        const Fk = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Fk - kk)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(kk) {
        const Fk = this._samples.length;
        return (kk % Fk + Fk) % Fk
      }
    }
    var dk = Bk(39317),
      sk = Bk(38320),
      Vk = Bk(39334),
      Jk = Bk(39305),
      Ak = Bk(39281);

    function ek(kk) {
      const Fk = function(kk) {
        if (!(0, Ak.e)() || !document.body) return null;
        const Fk = document.createElement("span");
        Fk.textContent = "Hg", Fk.style.font = kk;
        const Bk = document.createElement("div");
        Bk.style.display = "inline-block", Bk.style.width = "1px", Bk.style.height = "0px", Bk.style.verticalAlign = "bottom";
        const Rk = document.createElement("div");
        let tk, ak;
        Rk.style.whiteSpace = "nowrap", Rk.appendChild(Fk), Rk.appendChild(Bk), document.body.appendChild(Rk);
        try {
          ak = Bk.getBoundingClientRect().top - Fk.getBoundingClientRect().top, Bk.style.verticalAlign = "baseline", tk = Bk.getBoundingClientRect().top - Fk.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Rk)
        }
        const Xk = {
          ascent: tk,
          height: ak,
          descent: ak - tk
        };
        return yk(Xk) ? Xk : null
      }(kk);
      if (Fk) return Fk;
      const Bk = function(kk) {
        let Fk = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Fk = new OffscreenCanvas(64, 64) : (0, Ak.e)() && "function" === typeof document.createElement && (Fk = document.createElement("canvas"), Fk.width = 64, Fk.height = 64);
          const Bk = Fk?.getContext("2d");
          if (!Bk) return null;
          Bk.font = kk;
          const Rk = Bk.measureText("Hg"),
            tk = Number(Rk.actualBoundingBoxAscent ?? Rk.fontBoundingBoxAscent),
            ak = Number(Rk.actualBoundingBoxDescent ?? Rk.fontBoundingBoxDescent),
            Xk = {
              ascent: tk,
              height: tk + ak,
              descent: ak
            };
          return yk(Xk) ? Xk : null
        } catch {
          return null
        } finally {
          const kk = Fk;
          "function" === typeof kk?.dispose && kk.dispose()
        }
      }(kk);
      return Bk || function(kk) {
        const Fk = Math.max(1, function(kk) {
            const Fk = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(kk || ""));
            return Fk ? Number(Fk[1]) : 16
          }(kk)),
          Bk = .8 * Fk,
          Rk = .2 * Fk;
        return {
          ascent: Bk,
          height: Bk + Rk,
          descent: Rk
        }
      }(kk)
    }

    function yk(kk) {
      return Number.isFinite(kk.ascent) && Number.isFinite(kk.height) && Number.isFinite(kk.descent) && kk.height > 0
    }

    function fk(kk) {
      if (kk.requestPointerLock) {
        const Fk = kk.requestPointerLock();
        Fk instanceof Promise ? Fk.then((() => {
          kk.focus()
        })).catch((() => {})) : kk.focus()
      }
    }
    var mk = Bk(39347),
      Wk = Bk(39302),
      vk = Bk(39354),
      ik = Bk(39360);
    class Yk extends ak.ThinEngine {
      static get NpmPackage() {
        return Jk.c.NpmPackage
      }
      static get Version() {
        return Jk.c.Version
      }
      static get Instances() {
        return tk.c.Instances
      }
      static get LastCreatedEngine() {
        return tk.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return tk.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(kk) {
        return Jk.c.DefaultLoadingScreenFactory(kk)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Yk._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, vk.b)(), (0, ik.d)(), super(kk, Fk, Bk, Rk), this._performanceMonitor = new bk, this._drawCalls = new mk.b, kk && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(kk) {
        super._sharedInit(kk),
          function(kk, Fk, Bk) {
            kk._onCanvasFocus = () => {
              kk.onCanvasFocusObservable.notifyObservers(kk)
            }, kk._onCanvasBlur = () => {
              kk.onCanvasBlurObservable.notifyObservers(kk)
            }, kk._onCanvasContextMenu = Fk => {
              kk.disableContextMenu && Fk.preventDefault()
            }, Fk.addEventListener("focus", kk._onCanvasFocus), Fk.addEventListener("blur", kk._onCanvasBlur), Fk.addEventListener("contextmenu", kk._onCanvasContextMenu), kk._onBlur = () => {
              kk.disablePerformanceMonitorInBackground && kk.performanceMonitor.disable(), kk._windowIsBackground = !0
            }, kk._onFocus = () => {
              kk.disablePerformanceMonitorInBackground && kk.performanceMonitor.enable(), kk._windowIsBackground = !1
            }, kk._onCanvasPointerOut = Bk => {
              document.elementFromPoint(Bk.clientX, Bk.clientY) !== Fk && kk.onCanvasPointerOutObservable.notifyObservers(Bk)
            };
            const Rk = kk.getHostWindow();
            Rk && "function" === typeof Rk.addEventListener && (Rk.addEventListener("blur", kk._onBlur), Rk.addEventListener("focus", kk._onFocus)), Fk.addEventListener("pointerout", kk._onCanvasPointerOut), Bk.doNotHandleTouchAction || function(kk) {
              kk && kk.setAttribute && (kk.setAttribute("touch-action", "none"), kk.style.touchAction = "none", kk.style.webkitTapHighlightColor = "transparent")
            }(Fk), !Jk.c.audioEngine && Bk.audioEngine && Jk.c.AudioEngineFactory && (Jk.c.audioEngine = Jk.c.AudioEngineFactory(kk.getRenderingCanvas(), kk.getAudioContext(), kk.getAudioDestination())), (0, Ak.e)() && (kk._onFullscreenChange = () => {
              kk.isFullscreen = !!document.fullscreenElement, kk.isFullscreen && kk._pointerLockRequested && Fk && fk(Fk)
            }, document.addEventListener("fullscreenchange", kk._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", kk._onFullscreenChange, !1), kk._onPointerLockChange = () => {
              kk.isPointerLock = document.pointerLockElement === Fk
            }, document.addEventListener("pointerlockchange", kk._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", kk._onPointerLockChange, !1)), kk.enableOfflineSupport = void 0 !== Jk.c.OfflineProviderFactory, kk._deterministicLockstep = !!Bk.deterministicLockstep, kk._lockstepMaxSteps = Bk.lockstepMaxSteps || 0, kk._timeStep = Bk.timeStep || 1 / 60
          }(this, kk, this._creationOptions)
      }
      resizeImageBitmap(kk, Fk, Bk) {
        return function(kk, Fk, Bk, Rk) {
          const tk = kk.createCanvas(Bk, Rk).getContext("2d");
          if (!tk) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return tk.drawImage(Fk, 0, 0), tk.getImageData(0, 0, Bk, Rk).data
        }(this, kk, Fk, Bk)
      }
      async _createImageBitmapFromSource(kk, Fk) {
        return await async function(kk, Fk, Bk) {
          return await new Promise(((Rk, tk) => {
            const ak = new Image;
            ak.onload = () => {
              ak.decode().then((() => {
                kk.createImageBitmap(ak, Bk).then((kk => {
                  Rk(kk)
                }))
              }))
            }, ak.onerror = () => {
              tk(`Error loading image ${ak.src}`)
            }, ak.src = Fk
          }))
        }(this, kk, Fk)
      }
      switchFullscreen(kk) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(kk)
      }
      enterFullscreen(kk) {
        this.isFullscreen || (this._pointerLockRequested = kk, this._renderingCanvas && function(kk) {
          const Fk = kk.requestFullscreen || kk.webkitRequestFullscreen;
          Fk && Fk.call(kk)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const kk = document;
          document.exitFullscreen ? document.exitFullscreen() : kk.webkitCancelFullScreen && kk.webkitCancelFullScreen()
        }()
      }
      setDitheringState(kk) {
        kk ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(kk) {
        kk ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(kk, Fk, Bk, Rk) {
        const tk = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(kk, Fk, Bk, Rk), tk
      }
      scissorClear(kk, Fk, Bk, Rk, tk) {
        this.enableScissor(kk, Fk, Bk, Rk), this.clear(tk, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(kk) {
        const Fk = this._gl.getAttachedShaders(kk);
        return Fk ? this._gl.getShaderSource(Fk[0]) : null
      }
      getFragmentShaderSource(kk) {
        const Fk = this._gl.getAttachedShaders(kk);
        return Fk ? this._gl.getShaderSource(Fk[1]) : null
      }
      set framebufferDimensionsObject(kk) {
        this._framebufferDimensionsObject = kk, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const kk of this.scenes) kk.resetCachedMaterial(), kk._rebuildGeometries();
        for (const kk of this._virtualScenes) kk.resetCachedMaterial(), kk._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(kk) {
        return ek(kk)
      }
      enterPointerlock() {
        this._renderingCanvas && fk(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      kY() {
        this._measureFps(), super.kY()
      }
      _deletePipelineContext(kk) {
        const Fk = kk;
        Fk && Fk.program && Fk.transformFeedback && (this.deleteTransformFeedback(Fk.transformFeedback), Fk.transformFeedback = null), super._deletePipelineContext(kk)
      }
      createShaderProgram(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        tk = tk || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Xk = super.createShaderProgram(kk, Fk, Bk, Rk, tk, ak);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Xk
      }
      _createShaderProgram(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ak = Rk.createProgram();
        if (kk.program = ak, !ak) throw new Error("Unable to create program");
        if (Rk.attachShader(ak, Fk), Rk.attachShader(ak, Bk), this.Uy > 1 && tk) {
          const Fk = this.createTransformFeedback();
          this.bindTransformFeedback(Fk), this.setTranformFeedbackVaryings(ak, tk), kk.transformFeedback = Fk
        }
        return Rk.linkProgram(ak), this.Uy > 1 && tk && this.bindTransformFeedback(null), kk.context = Rk, kk.vertexShader = Fk, kk.fragmentShader = Bk, kk.isParallelCompiled || this._finalizePipelineContext(kk), ak
      }
      _releaseTexture(kk) {
        super._releaseTexture(kk)
      }
      _releaseRenderTargetWrapper(kk) {
        super._releaseRenderTargetWrapper(kk);
        for (const Fk of this.scenes) {
          for (const Bk of Fk.postProcesses) Bk._outputTexture === kk && (Bk._outputTexture = null);
          for (const Bk of Fk.cameras)
            for (const Fk of Bk._postProcesses) Fk && Fk._outputTexture === kk && (Fk._outputTexture = null)
        }
      }
      _rescaleTexture(kk, Fk, Bk, Rk, tk) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const ak = this.createRenderTargetTexture({
          width: Fk.width,
          height: Fk.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Yk._RescalePostProcessFactory && (this._rescalePostProcess = Yk._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Xk = () => {
              this._rescalePostProcess.onApply = function(Fk) {
                Fk._bindTexture("textureSampler", kk)
              };
              let Xk = Bk;
              Xk || (Xk = this.scenes[this.scenes.length - 1]), Xk.postProcessManager.directRender([this._rescalePostProcess], ak, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Fk, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Rk, 0, 0, Fk.width, Fk.height, 0), this.unBindFramebuffer(ak), ak.dispose(), tk && tk()
            },
            bk = this._rescalePostProcess.getEffect();
          bk ? bk.executeWhenCompiled(Xk) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((kk => {
            kk.executeWhenCompiled(Xk)
          }))
        }
      }
      wrapWebGLTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Xk = new Vk.c(kk, this._gl),
          bk = new Rk.c(this, 15, !0);
        return bk._hardwareTexture = Xk, bk.baseWidth = tk, bk.baseHeight = ak, bk.width = tk, bk.height = ak, bk.isReady = !0, bk.useMipMaps = Fk, this.updateTextureSamplingMode(Bk, bk), bk
      }
      updateWrappedWebGLTexture(kk, Fk) {
        if (15 !== kk.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Rk of this._renderTargetWrapperCache)
          if (Rk.textures?.includes(kk)) {
            if (Rk.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Rk._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } kk._hardwareTexture = new Vk.c(Fk, this._gl), kk.isReady = !0, kk._cachedCoordinatesMode = null, kk._cachedWrapU = null, kk._cachedWrapV = null, kk._cachedWrapR = null, kk._cachedAnisotropicFilteringLevel = null;
        for (const Rk in this._boundTexturesCache) this._boundTexturesCache[Rk] === kk && (this._boundTexturesCache[Rk] = null);
        this.updateTextureSamplingMode(kk.samplingMode, kk);
        const Bk = this._gl;
        for (const Rk of this._renderTargetWrapperCache) {
          if (Rk.texture !== kk) continue;
          const tk = Rk,
            ak = Rk.samples,
            Xk = ak > 1;
          tk._framebuffer && Bk.deleteFramebuffer(tk._framebuffer), !Xk && tk._depthStencilBuffer && (Bk.deleteRenderbuffer(tk._depthStencilBuffer), tk._depthStencilBuffer = null);
          const bk = this._currentFramebuffer,
            wk = Bk.createFramebuffer();
          this._bindUnboundFramebuffer(wk), Bk.framebufferTexture2D(Bk.FRAMEBUFFER, Bk.COLOR_ATTACHMENT0, Bk.TEXTURE_2D, Fk, 0), Xk || (tk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Rk._generateStencilBuffer, Rk._generateDepthBuffer, Rk.width, Rk.height)), this._bindUnboundFramebuffer(bk), tk._framebuffer = wk, Xk && (Rk._samples = 1, this.updateRenderTargetTextureSampleCount(tk, ak))
        }
      }
      _uploadImageToTexture(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tk = this._gl,
          ak = this._getWebGLTextureType(kk.type),
          Xk = this._getInternalFormat(kk.format),
          bk = this._getRGBABufferInternalSizedFormat(kk.type, Xk),
          wk = kk.isCube ? tk.TEXTURE_CUBE_MAP : tk.TEXTURE_2D;
        this._bindTextureDirectly(wk, kk, !0), this._unpackFlipY(kk.invertY);
        let dk = tk.TEXTURE_2D;
        kk.isCube && (dk = tk.TEXTURE_CUBE_MAP_POSITIVE_X + Bk), tk.texImage2D(dk, Rk, bk, Xk, ak, Fk), this._bindTextureDirectly(wk, null, !0)
      }
      updateTextureComparisonFunction(kk, Fk) {
        if (1 === this.Uy) return void sk.b.Error("WebGL 1 does not support texture comparison.");
        const Bk = this._gl;
        kk.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, kk, !0), 0 === Fk ? (Bk.texParameteri(Bk.TEXTURE_CUBE_MAP, Bk.TEXTURE_COMPARE_FUNC, 515), Bk.texParameteri(Bk.TEXTURE_CUBE_MAP, Bk.TEXTURE_COMPARE_MODE, Bk.NONE)) : (Bk.texParameteri(Bk.TEXTURE_CUBE_MAP, Bk.TEXTURE_COMPARE_FUNC, Fk), Bk.texParameteri(Bk.TEXTURE_CUBE_MAP, Bk.TEXTURE_COMPARE_MODE, Bk.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), 0 === Fk ? (Bk.texParameteri(Bk.TEXTURE_2D, Bk.TEXTURE_COMPARE_FUNC, 515), Bk.texParameteri(Bk.TEXTURE_2D, Bk.TEXTURE_COMPARE_MODE, Bk.NONE)) : (Bk.texParameteri(Bk.TEXTURE_2D, Bk.TEXTURE_COMPARE_FUNC, Fk), Bk.texParameteri(Bk.TEXTURE_2D, Bk.TEXTURE_COMPARE_MODE, Bk.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), kk._comparisonFunction = Fk
      }
      createInstancesBuffer(kk) {
        const Fk = this._gl.createBuffer();
        if (!Fk) throw new Error("Unable to create instance buffer");
        const Bk = new dk.c(Fk);
        return Bk.KV = kk, this.bindArrayBuffer(Bk), this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, this._gl.DYNAMIC_DRAW), Bk.references = 1, Bk
      }
      deleteInstancesBuffer(kk) {
        this._gl.deleteBuffer(kk)
      }
      async _clientWaitAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Rk = this._gl;
        return await new Promise(((tk, ak) => {
          (0, Wk.g)((() => {
            const Bk = Rk.clientWaitSync(kk, Fk, 0);
            if (Bk == Rk.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Bk != Rk.TIMEOUT_EXPIRED
          }), tk, ak, Bk)
        }))
      }
      _readPixelsAsync(kk, Fk, Bk, Rk, tk, ak, Xk) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const bk = this._gl,
          wk = bk.createBuffer();
        bk.bindBuffer(bk.PIXEL_PACK_BUFFER, wk), bk.bufferData(bk.PIXEL_PACK_BUFFER, Xk.byteLength, bk.STREAM_READ), bk.readPixels(kk, Fk, Bk, Rk, tk, ak, 0), bk.bindBuffer(bk.PIXEL_PACK_BUFFER, null);
        const dk = bk.fenceSync(bk.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return dk ? (bk.flush(), this._clientWaitAsync(dk, 0, 10).then((() => (bk.deleteSync(dk), bk.bindBuffer(bk.PIXEL_PACK_BUFFER, wk), bk.getBufferSubData(bk.PIXEL_PACK_BUFFER, 0, Xk), bk.bindBuffer(bk.PIXEL_PACK_BUFFER, null), bk.deleteBuffer(wk), Xk)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(kk, Fk) {
            1 === tk.c.Instances.length && Jk.c.audioEngine && (Jk.c.audioEngine.dispose(), Jk.c.audioEngine = null);
            const Bk = kk.getHostWindow();
            Bk && "function" === typeof Bk.removeEventListener && (Bk.removeEventListener("blur", kk._onBlur), Bk.removeEventListener("focus", kk._onFocus)), Fk && (Fk.removeEventListener("focus", kk._onCanvasFocus), Fk.removeEventListener("blur", kk._onCanvasBlur), Fk.removeEventListener("pointerout", kk._onCanvasPointerOut), Fk.removeEventListener("contextmenu", kk._onCanvasContextMenu)), (0, Ak.e)() && (document.removeEventListener("fullscreenchange", kk._onFullscreenChange), document.removeEventListener("mozfullscreenchange", kk._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", kk._onFullscreenChange), document.removeEventListener("msfullscreenchange", kk._onFullscreenChange), document.removeEventListener("pointerlockchange", kk._onPointerLockChange), document.removeEventListener("mspointerlockchange", kk._onPointerLockChange), document.removeEventListener("mozpointerlockchange", kk._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", kk._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Yk.ALPHA_DISABLE = 0, Yk.ALPHA_ADD = 1, Yk.ALPHA_COMBINE = 2, Yk.ALPHA_SUBTRACT = 3, Yk.ALPHA_MULTIPLY = 4, Yk.ALPHA_MAXIMIZED = 5, Yk.ALPHA_ONEONE = 6, Yk.ALPHA_PREMULTIPLIED = 7, Yk.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Yk.ALPHA_INTERPOLATE = 9, Yk.ALPHA_SCREENMODE = 10, Yk.DELAYLOADSTATE_NONE = 0, Yk.DELAYLOADSTATE_LOADED = 1, Yk.DELAYLOADSTATE_LOADING = 2, Yk.DELAYLOADSTATE_NOTLOADED = 4, Yk.NEVER = 512, Yk.ALWAYS = 519, Yk.LESS = 513, Yk.EQUAL = 514, Yk.LEQUAL = 515, Yk.GREATER = 516, Yk.GEQUAL = 518, Yk.NOTEQUAL = 517, Yk.KEEP = 7680, Yk.REPLACE = 7681, Yk.INCR = 7682, Yk.DECR = 7683, Yk.INVERT = 5386, Yk.INCR_WRAP = 34055, Yk.DECR_WRAP = 34056, Yk.TEXTURE_CLAMP_ADDRESSMODE = 0, Yk.TEXTURE_WRAP_ADDRESSMODE = 1, Yk.TEXTURE_MIRROR_ADDRESSMODE = 2, Yk.TEXTUREFORMAT_ALPHA = 0, Yk.TEXTUREFORMAT_LUMINANCE = 1, Yk.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Yk.TEXTUREFORMAT_RGB = 4, Yk.TEXTUREFORMAT_RGBA = 5, Yk.TEXTUREFORMAT_RED = 6, Yk.TEXTUREFORMAT_R = 6, Yk.TEXTUREFORMAT_R16_UNORM = 33322, Yk.TEXTUREFORMAT_RG16_UNORM = 33324, Yk.TEXTUREFORMAT_RGB16_UNORM = 32852, Yk.TEXTUREFORMAT_RGBA16_UNORM = 32859, Yk.TEXTUREFORMAT_R16_SNORM = 36760, Yk.TEXTUREFORMAT_RG16_SNORM = 36761, Yk.TEXTUREFORMAT_RGB16_SNORM = 36762, Yk.TEXTUREFORMAT_RGBA16_SNORM = 36763, Yk.TEXTUREFORMAT_RG = 7, Yk.TEXTUREFORMAT_RED_INTEGER = 8, Yk.TEXTUREFORMAT_R_INTEGER = 8, Yk.TEXTUREFORMAT_RG_INTEGER = 9, Yk.TEXTUREFORMAT_RGB_INTEGER = 10, Yk.TEXTUREFORMAT_RGBA_INTEGER = 11, Yk.TEXTURETYPE_UNSIGNED_BYTE = 0, Yk.TEXTURETYPE_UNSIGNED_INT = 0, Yk.TEXTURETYPE_FLOAT = 1, Yk.TEXTURETYPE_HALF_FLOAT = 2, Yk.TEXTURETYPE_BYTE = 3, Yk.TEXTURETYPE_SHORT = 4, Yk.TEXTURETYPE_UNSIGNED_SHORT = 5, Yk.TEXTURETYPE_INT = 6, Yk.TEXTURETYPE_UNSIGNED_INTEGER = 7, Yk.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Yk.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Yk.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Yk.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Yk.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Yk.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Yk.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Yk.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Yk.TEXTURE_NEAREST_SAMPLINGMODE = 1, Yk.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Yk.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Yk.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Yk.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Yk.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Yk.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Yk.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Yk.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Yk.TEXTURE_NEAREST_LINEAR = 7, Yk.TEXTURE_NEAREST_NEAREST = 1, Yk.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Yk.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Yk.TEXTURE_LINEAR_LINEAR = 2, Yk.TEXTURE_LINEAR_NEAREST = 12, Yk.TEXTURE_EXPLICIT_MODE = 0, Yk.TEXTURE_SPHERICAL_MODE = 1, Yk.TEXTURE_PLANAR_MODE = 2, Yk.TEXTURE_CUBIC_MODE = 3, Yk.TEXTURE_PROJECTION_MODE = 4, Yk.TEXTURE_SKYBOX_MODE = 5, Yk.TEXTURE_INVCUBIC_MODE = 6, Yk.TEXTURE_EQUIRECTANGULAR_MODE = 7, Yk.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Yk.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Yk.SCALEMODE_FLOOR = 1, Yk.SCALEMODE_NEAREST = 2, Yk.SCALEMODE_CEILING = 3
  },
  39375: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    var Rk = Bk(39342);
    class tk {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = kk, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, kk && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Rk.e)(kk.format))
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
      getBaseArrayLayer(kk) {
        if (!this._textures) return -1;
        const Fk = this._textures[kk],
          Bk = this._layerIndices?.[kk] ?? 0,
          Rk = this._faceIndices?.[kk] ?? 0;
        return Fk.isCube ? 6 * Bk + Rk : Fk.is3D ? 0 : Bk
      }
      get samples() {
        return this._samples
      }
      setSamples(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === kk && !Bk) return kk;
        const Rk = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, kk, Fk) : this._engine.updateRenderTargetTextureSampleCount(this, kk);
        return this._samples = kk, Rk
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(kk, Fk, Bk, Rk, tk) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = kk, this._isCube = Fk, this._size = Bk, this._engine = Rk, this._depthStencilTexture = null, this.label = tk
      }
      setTextures(kk) {
        Array.isArray(kk) ? this._textures = kk : this._textures = kk ? [kk] : null
      }
      setTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Fk] !== kk && (this._textures[Fk] && Bk && this._textures[Fk].dispose(), this._textures[Fk] = kk)
      }
      setLayerAndFaceIndices(kk, Fk) {
        this._layerIndices = kk, this._faceIndices = Fk
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Fk && Fk >= 0 && (this._layerIndices[kk] = Fk), void 0 !== Bk && Bk >= 0 && (this._faceIndices[kk] = Bk)
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Bk, this._depthStencilTextureLabel = ak, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Fk,
          comparisonFunction: kk,
          generateStencil: Bk,
          isCube: this._isCube,
          samples: Rk,
          depthTextureFormat: tk,
          label: ak
        }, this), this._depthStencilTexture
      }
      _shareDepth(kk) {
        this.shareDepth(kk)
      }
      shareDepth(kk) {
        this._depthStencilTexture && (kk._depthStencilTexture && kk._depthStencilTexture.dispose(), kk._depthStencilTexture = this._depthStencilTexture, kk._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(kk) {
        this.texture && this.texture._swapAndDie(kk), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let kk = null;
        if (this._isMulti) {
          const Fk = this.textures;
          if (Fk && Fk.length > 0) {
            let Bk = !1,
              Rk = Fk.length,
              tk = -1;
            const ak = Fk[Fk.length - 1]._source;
            14 !== ak && 12 !== ak || (Bk = !0, tk = Fk[Fk.length - 1].format, Rk--);
            const Xk = [],
              bk = [],
              wk = [],
              dk = [],
              sk = [],
              Vk = [],
              Jk = [],
              Ak = {};
            for (let kk = 0; kk < Rk; ++kk) {
              const Bk = Fk[kk];
              Xk.push(Bk.samplingMode), bk.push(Bk.type), wk.push(Bk.format);
              void 0 !== Ak[Bk.uniqueId] ? (dk.push(-1), Jk.push(0)) : (Ak[Bk.uniqueId] = kk, Bk.is2DArray ? (dk.push(35866), Jk.push(Bk.depth)) : Bk.isCube ? (dk.push(34067), Jk.push(0)) : Bk.is3D ? (dk.push(32879), Jk.push(Bk.depth)) : (dk.push(3553), Jk.push(0))), this._faceIndices && sk.push(this._faceIndices[kk] ?? 0), this._layerIndices && Vk.push(this._layerIndices[kk] ?? 0)
            }
            const ek = {
                samplingModes: Xk,
                generateMipMaps: Fk[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Bk,
                depthTextureFormat: tk,
                types: bk,
                formats: wk,
                YXk: Rk,
                targetTypes: dk,
                faceIndex: sk,
                layerIndex: Vk,
                layerCounts: Jk,
                label: this.label
              },
              yk = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            kk = this._engine.createMultipleRenderTarget(yk, ek);
            for (let fk = 0; fk < Rk; ++fk) {
              if (-1 !== dk[fk]) continue;
              const Bk = Ak[Fk[fk].uniqueId];
              kk.setTexture(kk.textures[Bk], fk)
            }
          }
        } else {
          const Fk = {};
          if (Fk.generateDepthBuffer = this._generateDepthBuffer, Fk.generateMipMaps = this.texture?.generateMipMaps ?? !1, Fk.generateStencilBuffer = this._generateStencilBuffer, Fk.samplingMode = this.texture?.samplingMode, Fk.type = this.texture?.type, Fk.format = this.texture?.format, Fk.noColorAttachment = !this._textures, Fk.label = this.label, this.isCube) kk = this._engine.createRenderTargetCubeTexture(this.width, Fk);
          else {
            const Bk = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            kk = this._engine.createRenderTargetTexture(Bk, Fk)
          }
          kk.texture && (kk.texture.isReady = !0)
        }
        return kk
      }
      _swapRenderTargetWrapper(kk) {
        if (this._textures && kk._textures)
          for (let Fk = 0; Fk < this._textures.length; ++Fk) this._textures[Fk]._swapAndDie(kk._textures[Fk], !1), kk._textures[Fk].isReady = !0;
        this._depthStencilTexture && kk._depthStencilTexture && (this._depthStencilTexture._swapAndDie(kk._depthStencilTexture), kk._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const kk = this._cloneRenderTargetWrapper();
        if (kk) {
          if (this._depthStencilTexture) {
            const Fk = this._depthStencilTexture.samplingMode,
              Bk = this._depthStencilTexture.format,
              Rk = 2 === Fk || 3 === Fk || 11 === Fk;
            kk.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Rk, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Bk, this._depthStencilTextureLabel)
          }
          this.samples > 1 && kk.setSamples(this.samples), kk._swapRenderTargetWrapper(this), kk.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let kk = 0; kk < this._textures.length; ++kk) this._textures[kk].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39844: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      static get ForceFullSceneLoadingForIncremental() {
        return Rk._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(kk) {
        Rk._ForceFullSceneLoadingForIncremental = kk
      }
      static get ShowLoadingScreen() {
        return Rk._ShowLoadingScreen
      }
      static set ShowLoadingScreen(kk) {
        Rk._ShowLoadingScreen = kk
      }
      static get loggingLevel() {
        return Rk._LoggingLevel
      }
      static set loggingLevel(kk) {
        Rk._LoggingLevel = kk
      }
      static get CleanBoneMatrixWeights() {
        return Rk._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(kk) {
        Rk._CleanBoneMatrixWeights = kk
      }
    }
    Rk._ForceFullSceneLoadingForIncremental = !1, Rk._ShowLoadingScreen = !0, Rk._CleanBoneMatrixWeights = !1, Rk._LoggingLevel = 0
  },
  39477: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(38320);
    const tk = new Map;

    function ak(kk, Fk) {
      (function(kk) {
        return tk.delete(kk)
      })(kk) && Rk.b.Warn(`Extension with the name '${kk}' already exists`), tk.set(kk, Fk)
    }

    function Xk(kk, Fk) {
      "image/ktx" !== Fk && "image/ktx2" !== Fk || (kk = ".ktx"), tk.has(kk) || (kk.endsWith(".ies") && ak(".ies", (async () => await Bk.e(299).then((() => Bk(41191))).then((kk => new kk._IESTextureLoader)))), kk.endsWith(".dds") && ak(".dds", (async () => await Bk.e(297).then((() => Bk(41196))).then((kk => new kk._DDSTextureLoader)))), kk.endsWith(".basis") && ak(".basis", (async () => await Bk.e(300).then((() => Bk(41202))).then((kk => new kk._BasisTextureLoader)))), kk.endsWith(".env") && ak(".env", (async () => await Promise.all([Bk.e(301), Bk.e(298)]).then((() => Bk(41207))).then((kk => new kk._ENVTextureLoader)))), kk.endsWith(".hdr") && ak(".hdr", (async () => await Bk.e(302).then((() => Bk(41254))).then((kk => new kk._HDRTextureLoader)))), (kk.endsWith(".ktx") || kk.endsWith(".ktx2")) && (ak(".ktx", (async () => await Bk.e(303).then((() => Bk(41259))).then((kk => new kk._KTXTextureLoader)))), ak(".ktx2", (async () => await Bk.e(303).then((() => Bk(41259))).then((kk => new kk._KTXTextureLoader))))), kk.endsWith(".tga") && ak(".tga", (async () => await Bk.e(304).then((() => Bk(41274))).then((kk => new kk._TGATextureLoader)))), kk.endsWith(".exr") && ak(".exr", (async () => await Bk.e(305).then((() => Bk(41277))).then((kk => new kk._ExrTextureLoader)))));
      const Rk = tk.get(kk);
      return Rk ? Promise.resolve(Rk(Fk)) : null
    }
  },
  39861: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      f: () => dk
    });
    var Rk = Bk(39695),
      tk = Bk(39420),
      ak = Bk(36798);
    class Xk extends Rk.c {
      get l_() {
        return this._subMaterials
      }
      set l_(kk) {
        this._subMaterials = kk, this._hookArray(kk)
      }
      getChildren() {
        return this.l_
      }
      constructor(kk, Fk) {
        super(kk, Fk, !0), this._waitingSubMaterialsUniqueIds = [], this.XN().addMultiMaterial(this), this.l_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(kk) {
        var Fk = this;
        const Bk = kk.push;
        kk.push = function() {
          for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
          const Xk = Bk.apply(kk, tk);
          return Fk._markAllSubMeshesAsTexturesDirty(), Xk
        };
        const Rk = kk.splice;
        kk.splice = (Fk, Bk) => {
          const tk = Rk.call(kk, Fk, Bk ?? kk.length);
          return this._markAllSubMeshesAsTexturesDirty(), tk
        }
      }
      getSubMaterial(kk) {
        return kk < 0 || kk >= this.l_.length ? this.XN().defaultMaterial : this.l_[kk]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.l_.map((kk => kk ? kk.getActiveTextures() : [])))
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (let Fk = 0; Fk < this.l_.length; Fk++)
          if (this.l_[Fk]?.hasTexture(kk)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(kk, Fk, Bk) {
        for (let Rk = 0; Rk < this.l_.length; Rk++) {
          const tk = this.l_[Rk];
          if (tk) {
            if (tk._storeEffectOnSubMeshes) {
              if (!tk.isReadyForSubMesh(kk, Fk, Bk)) return !1;
              continue
            }
            if (!tk.isReady(kk)) return !1
          }
        }
        return !0
      }
      clone(kk, Fk) {
        const Bk = new Xk(kk, this.XN());
        for (let Rk = 0; Rk < this.l_.length; Rk++) {
          let tk;
          const ak = this.l_[Rk];
          tk = Fk && ak ? ak.clone(kk + "-" + ak.name) : this.l_[Rk], Bk.l_.push(tk)
        }
        return Bk
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, tk.b && (kk.tags = tk.b.GetTags(this)), kk.materialsUniqueIds = [], kk.materials = [];
        for (let Fk = 0; Fk < this.l_.length; Fk++) {
          const Bk = this.l_[Fk];
          Bk ? (kk.materialsUniqueIds.push(Bk.uniqueId), kk.materials.push(Bk.id)) : (kk.materialsUniqueIds.push(null), kk.materials.push(null))
        }
        return kk
      }
      dispose(kk, Fk, Bk) {
        const Rk = this.XN();
        if (!Rk) return;
        if (Bk)
          for (let ak = 0; ak < this.l_.length; ak++) {
            const Bk = this.l_[ak];
            Bk && Bk.dispose(kk, Fk)
          }
        const tk = Rk.multiMaterials.indexOf(this);
        tk >= 0 && Rk.multiMaterials.splice(tk, 1), super.dispose(kk, Fk)
      }
    }
    let bk = !1;

    function wk(kk, Fk) {
      const Bk = new Xk(kk.name, Fk);
      if (Bk.id = kk.id, Bk._loadedUniqueId = kk.uniqueId, tk.b && tk.b.AddTagsTo(Bk, kk.tags), kk.materialsUniqueIds) Bk._waitingSubMaterialsUniqueIds = kk.materialsUniqueIds;
      else
        for (const Rk of kk.materials) Bk.l_.push(Fk.getLastMaterialById(Rk));
      return Bk
    }

    function dk() {
      bk || (bk = !0, Xk.ParseMultiMaterial = wk, (0, ak.d)("BABYLON.MultiMaterial", Xk))
    }
  },
  39637: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk, tk, ak = Bk(36758);
    ! function(kk) {
      kk[kk.LOCAL = 0] = "LOCAL", kk[kk.WORLD = 1] = "WORLD", kk[kk.BONE = 2] = "BONE"
    }(Rk || (Rk = {}));
    class Xk {}
    Xk.X = new ak.s(1, 0, 0), Xk.Y = new ak.s(0, 1, 0), Xk.Z = new ak.s(0, 0, 1),
      function(kk) {
        kk[kk.X = 0] = "X", kk[kk.Y = 1] = "Y", kk[kk.Z = 2] = "Z"
      }(tk || (tk = {}))
  },
  39384: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk,
      f: () => dk
    });
    var Rk = Bk(36758);
    const tk = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      ak = [() => 1, kk => kk.y, kk => kk.z, kk => kk.x, kk => kk.x * kk.y, kk => kk.y * kk.z, kk => 3 * kk.z * kk.z - 1, kk => kk.x * kk.z, kk => kk.x * kk.x - kk.y * kk.y],
      Xk = (kk, Fk) => tk[kk] * ak[kk](Fk),
      bk = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class wk {
      constructor() {
        this.preScaled = !1, this.l00 = Rk.s.Zero(), this.l1_1 = Rk.s.Zero(), this.l10 = Rk.s.Zero(), this.l11 = Rk.s.Zero(), this.l2_2 = Rk.s.Zero(), this.l2_1 = Rk.s.Zero(), this.l20 = Rk.s.Zero(), this.l21 = Rk.s.Zero(), this.l22 = Rk.s.Zero()
      }
      addLight(kk, Fk, Bk) {
        Rk.l.Qe[0].set(Fk.r, Fk.g, Fk.b);
        const tk = Rk.l.Qe[0],
          ak = Rk.l.Qe[1];
        tk.scaleToRef(Bk, ak), ak.scaleToRef(Xk(0, kk), Rk.l.Qe[2]), this.l00.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(1, kk), Rk.l.Qe[2]), this.l1_1.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(2, kk), Rk.l.Qe[2]), this.l10.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(3, kk), Rk.l.Qe[2]), this.l11.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(4, kk), Rk.l.Qe[2]), this.l2_2.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(5, kk), Rk.l.Qe[2]), this.l2_1.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(6, kk), Rk.l.Qe[2]), this.l20.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(7, kk), Rk.l.Qe[2]), this.l21.addInPlace(Rk.l.Qe[2]), ak.scaleToRef(Xk(8, kk), Rk.l.Qe[2]), this.l22.addInPlace(Rk.l.Qe[2])
      }
      scaleInPlace(kk) {
        this.l00.scaleInPlace(kk), this.l1_1.scaleInPlace(kk), this.l10.scaleInPlace(kk), this.l11.scaleInPlace(kk), this.l2_2.scaleInPlace(kk), this.l2_1.scaleInPlace(kk), this.l20.scaleInPlace(kk), this.l21.scaleInPlace(kk), this.l22.scaleInPlace(kk)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(bk[0]), this.l1_1.scaleInPlace(bk[1]), this.l10.scaleInPlace(bk[2]), this.l11.scaleInPlace(bk[3]), this.l2_2.scaleInPlace(bk[4]), this.l2_1.scaleInPlace(bk[5]), this.l20.scaleInPlace(bk[6]), this.l21.scaleInPlace(bk[7]), this.l22.scaleInPlace(bk[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(tk[0]), this.l1_1.scaleInPlace(tk[1]), this.l10.scaleInPlace(tk[2]), this.l11.scaleInPlace(tk[3]), this.l2_2.scaleInPlace(tk[4]), this.l2_1.scaleInPlace(tk[5]), this.l20.scaleInPlace(tk[6]), this.l21.scaleInPlace(tk[7]), this.l22.scaleInPlace(tk[8])
      }
      updateFromArray(kk) {
        return Rk.s.FromArrayToRef(kk[0], 0, this.l00), Rk.s.FromArrayToRef(kk[1], 0, this.l1_1), Rk.s.FromArrayToRef(kk[2], 0, this.l10), Rk.s.FromArrayToRef(kk[3], 0, this.l11), Rk.s.FromArrayToRef(kk[4], 0, this.l2_2), Rk.s.FromArrayToRef(kk[5], 0, this.l2_1), Rk.s.FromArrayToRef(kk[6], 0, this.l20), Rk.s.FromArrayToRef(kk[7], 0, this.l21), Rk.s.FromArrayToRef(kk[8], 0, this.l22), this
      }
      updateFromFloatsArray(kk) {
        return Rk.s.FromFloatsToRef(kk[0], kk[1], kk[2], this.l00), Rk.s.FromFloatsToRef(kk[3], kk[4], kk[5], this.l1_1), Rk.s.FromFloatsToRef(kk[6], kk[7], kk[8], this.l10), Rk.s.FromFloatsToRef(kk[9], kk[10], kk[11], this.l11), Rk.s.FromFloatsToRef(kk[12], kk[13], kk[14], this.l2_2), Rk.s.FromFloatsToRef(kk[15], kk[16], kk[17], this.l2_1), Rk.s.FromFloatsToRef(kk[18], kk[19], kk[20], this.l20), Rk.s.FromFloatsToRef(kk[21], kk[22], kk[23], this.l21), Rk.s.FromFloatsToRef(kk[24], kk[25], kk[26], this.l22), this
      }
      static FromArray(kk) {
        return (new wk).updateFromArray(kk)
      }
      static FromPolynomial(kk) {
        const Fk = new wk;
        return Fk.l00 = kk.xx.scale(.376127).add(kk.yy.scale(.376127)).add(kk.zz.scale(.376126)), Fk.l1_1 = kk.y.scale(.977204), Fk.l10 = kk.z.scale(.977204), Fk.l11 = kk.x.scale(.977204), Fk.l2_2 = kk.xy.scale(1.16538), Fk.l2_1 = kk.yz.scale(1.16538), Fk.l20 = kk.zz.scale(1.34567).subtract(kk.xx.scale(.672834)).subtract(kk.yy.scale(.672834)), Fk.l21 = kk.zx.scale(1.16538), Fk.l22 = kk.xx.scale(1.16538).subtract(kk.yy.scale(1.16538)), Fk.l1_1.scaleInPlace(-1), Fk.l11.scaleInPlace(-1), Fk.l2_1.scaleInPlace(-1), Fk.l21.scaleInPlace(-1), Fk.scaleInPlace(Math.PI), Fk
      }
    }
    class dk {
      constructor() {
        this.x = Rk.s.Zero(), this.y = Rk.s.Zero(), this.z = Rk.s.Zero(), this.xx = Rk.s.Zero(), this.yy = Rk.s.Zero(), this.zz = Rk.s.Zero(), this.xy = Rk.s.Zero(), this.yz = Rk.s.Zero(), this.zx = Rk.s.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = wk.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(kk) {
        Rk.l.Qe[0].E1(kk.r, kk.g, kk.b);
        const Fk = Rk.l.Qe[0];
        this.xx.addInPlace(Fk), this.yy.addInPlace(Fk), this.zz.addInPlace(Fk)
      }
      scaleInPlace(kk) {
        this.x.scaleInPlace(kk), this.y.scaleInPlace(kk), this.z.scaleInPlace(kk), this.xx.scaleInPlace(kk), this.yy.scaleInPlace(kk), this.zz.scaleInPlace(kk), this.yz.scaleInPlace(kk), this.zx.scaleInPlace(kk), this.xy.scaleInPlace(kk)
      }
      updateFromHarmonics(kk) {
        return this._harmonics = kk, this.x.sBk(kk.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.sBk(kk.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.sBk(kk.l10), this.z.scaleInPlace(1.02333), this.xx.sBk(kk.l00), Rk.l.Qe[0].sBk(kk.l20).scaleInPlace(.247708), Rk.l.Qe[1].sBk(kk.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).wRk(Rk.l.Qe[0]).addInPlace(Rk.l.Qe[1]), this.yy.sBk(kk.l00), this.yy.scaleInPlace(.886277).wRk(Rk.l.Qe[0]).wRk(Rk.l.Qe[1]), this.zz.sBk(kk.l00), Rk.l.Qe[0].sBk(kk.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Rk.l.Qe[0]), this.yz.sBk(kk.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.sBk(kk.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.sBk(kk.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(kk) {
        return (new dk).updateFromHarmonics(kk)
      }
      static FromArray(kk) {
        const Fk = new dk;
        return Rk.s.FromArrayToRef(kk[0], 0, Fk.x), Rk.s.FromArrayToRef(kk[1], 0, Fk.y), Rk.s.FromArrayToRef(kk[2], 0, Fk.z), Rk.s.FromArrayToRef(kk[3], 0, Fk.xx), Rk.s.FromArrayToRef(kk[4], 0, Fk.yy), Rk.s.FromArrayToRef(kk[5], 0, Fk.zz), Rk.s.FromArrayToRef(kk[6], 0, Fk.yz), Rk.s.FromArrayToRef(kk[7], 0, Fk.zx), Rk.s.FromArrayToRef(kk[8], 0, Fk.xy), Fk
      }
    }
  },
  39853: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Uk,
      d: () => Gk
    });
    var Rk = Bk(39397),
      tk = Bk(36781),
      ak = Bk(36758),
      Xk = Bk(39541),
      bk = Bk(39829),
      wk = Bk(39857),
      dk = Bk(39537),
      sk = Bk(39716),
      Vk = Bk(39530);
    class Jk {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ak.s(0, 0, 0), this._diffPositionForCollisions = new ak.s(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Ak, ek, yk, fk = Bk(39296),
      mk = Bk(39465),
      Wk = Bk(39729),
      vk = Bk(36917),
      ik = Bk(36764),
      Yk = Bk(39637),
      Lk = Bk(38320),
      Ok = Bk(39404),
      Ek = Bk(39305),
      Sk = Bk(36798);

    function Nk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function Hk(kk, Fk, Bk) {
      kk instanceof Float32Array ? ak.c.FromArrayToRef(kk, Fk, Bk) : Bk.E1((0, mk.d)(kk[Fk]), (0, mk.d)(kk[Fk + 1]), (0, mk.d)(kk[Fk + 2]), (0, mk.d)(kk[Fk + 3]), (0, mk.d)(kk[Fk + 4]), (0, mk.d)(kk[Fk + 5]), (0, mk.d)(kk[Fk + 6]), (0, mk.d)(kk[Fk + 7]), (0, mk.d)(kk[Fk + 8]), (0, mk.d)(kk[Fk + 9]), (0, mk.d)(kk[Fk + 10]), (0, mk.d)(kk[Fk + 11]), (0, mk.d)(kk[Fk + 12]), (0, mk.d)(kk[Fk + 13]), (0, mk.d)(kk[Fk + 14]), (0, mk.d)(kk[Fk + 15]))
    }

    function uk(kk, Fk, Bk, Rk, tk, bk, wk, dk, sk) {
      const Vk = Bk.texture,
        Jk = Vk?.getInternalTexture(),
        Ak = Jk?._bufferView;
      if (!(Ak instanceof Float32Array) && !(Ak instanceof Uint16Array)) return Lk.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const ek = Vk.getSize(),
        yk = function(kk, Fk) {
          const Bk = kk.y - kk.x + 1,
            Rk = Fk * kk.w / Bk,
            tk = Rk < 1 ? 0 : 1,
            ak = Bk - tk;
          let Xk = Nk(Rk - Math.floor(Rk), 1) * ak;
          return Xk = Nk(Xk + kk.z, ak), Math.floor(Xk) + kk.x + tk
        }(Rk, Bk.time);
      if (!isFinite(yk) || yk < 0 || yk >= ek.height) return Lk.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const fk = ak.l.Qe[0],
        mk = ak.l.Matrix[0],
        Wk = ak.l.Matrix[1],
        vk = yk * ek.width * 4,
        ik = Fk === Xk.n.NormalKind ? ak.s.TransformNormalFromFloatsToRef : ak.s.TransformCoordinatesFromFloatsToRef;
      for (let ak = 0, Xk = 0; ak < kk.length; ak += 3, Xk += 4) {
        let Fk, Bk;
        for (mk.reset(), Fk = 0; Fk < 4 && Fk < sk; Fk++) Bk = bk[Xk + Fk], Bk > 0 && (Hk(Ak, vk + 16 * Math.floor(tk[Xk + Fk]), Wk), Wk.scaleAndAddToRef(Bk, mk));
        if (wk && dk)
          for (Fk = 0; Fk < 4 && Fk + 4 < sk; Fk++) Bk = dk[Xk + Fk], Bk > 0 && (Hk(Ak, vk + 16 * Math.floor(wk[Xk + Fk]), Wk), Wk.scaleAndAddToRef(Bk, mk));
        ik(kk[ak], kk[ak + 1], kk[ak + 2], mk, fk), fk.toArray(kk, ak)
      }
      return !0
    }
    class Mk {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ak.s.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class gk {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Mk, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Jk, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Uk = (() => {
        var kk;
        let Fk, Jk = wk.e,
          Ak = [];
        return kk = class extends Jk {
          static get BILLBOARDMODE_NONE() {
            return wk.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return wk.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return wk.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return wk.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return wk.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return wk.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(kk) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = kk
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(kk) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = kk
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(kk) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = kk
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(kk) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = kk
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(kk) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = kk
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(kk) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== kk && (this._internalAbstractMeshDataInfo._morphTargetManager = kk, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(kk) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== kk && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = kk, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(kk) {
            return !!super._updateNonUniformScalingState(kk) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(kk) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = kk
          }
          set gJ(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(kk)
          }
          set onCollisionPositionChange(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(kk)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(kk) {
            if (this._internalAbstractMeshDataInfo._visibility === kk) return;
            const Fk = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = kk, (1 === Fk && 1 !== kk || 1 !== Fk && 1 === kk) && this._markSubMeshesAsDirty((kk => {
              kk.markAsMiscDirty(), kk.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(kk) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = kk
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(kk) {
            this._internalAbstractMeshDataInfo._renderingGroupId = kk
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(kk) {
            if (!Number.isInteger(kk) || kk < 0 || kk > 255 || 0 !== kk && 0 === (63 & kk)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = kk
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(kk) {
            this._setMaterial(kk)
          }
          _setMaterial(kk) {
            this._internalAbstractMeshDataInfo._material !== kk && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = kk, kk && kk.meshMap && (kk.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.AY && (this.resetDrawCache(void 0, null == kk), this._unBindEffect()))
          }
          getMaterialForRenderPass(kk) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[kk]
          }
          setMaterialForRenderPass(kk, Fk) {
            this.resetDrawCache(kk), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Bk = this._internalAbstractMeshDataInfo._materialForRenderPass[kk];
            Bk?.meshMap?.[this.uniqueId] && (Bk.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[kk] = Fk, Fk && Fk.meshMap && (Fk.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(kk) {
            this._internalAbstractMeshDataInfo._receiveShadows !== kk && (this._internalAbstractMeshDataInfo._receiveShadows = kk, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(kk) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== kk && (this._internalAbstractMeshDataInfo._hasVertexAlpha = kk, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(kk) {
            this._internalAbstractMeshDataInfo._useVertexColors !== kk && (this._internalAbstractMeshDataInfo._useVertexColors = kk, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(kk) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== kk && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = kk, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(kk) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== kk && (this._internalAbstractMeshDataInfo._numBoneInfluencers = kk, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(kk) {
            this._internalAbstractMeshDataInfo._applyFog !== kk && (this._internalAbstractMeshDataInfo._applyFog = kk, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(kk) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = kk
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(kk) {
            kk !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = kk, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(kk) ? -1 : kk
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = kk
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(kk) ? -1 : kk
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = kk
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(kk) {
            const Fk = this._internalAbstractMeshDataInfo._skeleton;
            Fk && Fk.needInitialSkinMatrix && Fk._unregisterMeshWithPoseMatrix(this), kk && kk.needInitialSkinMatrix && kk._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = kk, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Fk) {
            var Bk;
            let Rk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Fk, Rk, !1), Bk = this, this._internalAbstractMeshDataInfo = new gk, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new tk.e, this.onCollisionPositionChangeObservable = new tk.e, this.onMaterialChangedObservable = new tk.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.ff = kk.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = vk.e.Red(), this.outlineWidth = .02, this.overlayColor = vk.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Ie = !1, this.Fy = !1, this.actionManager = null, this.ellipsoid = new ak.s(.5, 1, .5), this.ellipsoidOffset = new ak.s(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new vk.i(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                oN: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new tk.e, this._onCollisionPositionChange = function(kk, Fk) {
                let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Fk.subtractToRef(Bk._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Bk._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Bk._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Ek.c.CollisionsEpsilon && Bk.position.addInPlace(Bk._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Rk && Bk.onCollideObservable.notifyObservers(Rk), Bk.onCollisionPositionChangeObservable.notifyObservers(Bk.position)
              }, Rk = this.XN(), this.layerMask = Rk.defaultRenderableLayerMask, Rk.qBk(this), this._resyncLightSources(), this._uniformBuffer = new Vk.e(this.XN().ne(), void 0, void 0, Fk, !this.XN().ne().isWebGPU), this._buildUniformLayout(), Rk.performancePriority) {
              case 2:
                this.Fy = !0;
              case 1:
                this.Ie = !0, this.ff = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(kk) {
            const Fk = this._uniformBuffer;
            Fk.M_("world", kk), Fk.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Fk.update()
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
          toString(kk) {
            let Fk = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Fk += ", # of submeshes: " + (this.AY ? this.AY.length : 0);
            const Bk = this._internalAbstractMeshDataInfo._skeleton;
            return Bk && (Fk += ", skeleton: " + Bk.name), kk && (Fk += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Fk += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.oN ? "YES" : "NO")), Fk
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== wk.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(kk) {
            let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Fk || this.actionManager.isRecursive)) {
              if (!kk) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(kk)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(kk, !1) : null
          }
          _releaseRenderPassId(kk) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.AY) {
              for (const kk of this.AY) kk._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const kk of this.XN().lights) kk.isEnabled() && kk.canAffectMesh(this) && this._lightSources.push(kk);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(kk) {
            const Fk = kk.isEnabled() && kk.canAffectMesh(this),
              Bk = this._lightSources.indexOf(kk);
            let Rk = !1;
            if (-1 === Bk) {
              if (!Fk) return;
              this._lightSources.push(kk)
            } else {
              if (Fk) return;
              Rk = !0, this._lightSources.splice(Bk, 1)
            }
            this._markSubMeshesAsLightDirty(Rk)
          }
          _unBindEffect() {
            for (const kk of this.AY) kk.setEffect(null)
          }
          _removeLightSource(kk, Fk) {
            const Bk = this._lightSources.indexOf(kk); - 1 !== Bk && (this._lightSources.splice(Bk, 1), this._markSubMeshesAsLightDirty(Fk))
          }
          _markSubMeshesAsDirty(kk) {
            if (this.AY)
              for (const Fk of this.AY)
                for (let Bk = 0; Bk < Fk._drawWrappers.length; ++Bk) {
                  const Rk = Fk._drawWrappers[Bk];
                  Rk && Rk.defines && Rk.defines.markAllAsDirty && kk(Rk.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Fk => Fk.markAsLightDirty(kk)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((kk => kk.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((kk => kk.markAsMiscDirty()))
          }
          mFk(kk) {
            return this._currentRenderId = Number.MAX_VALUE, super.mFk(kk), this._isDirty = !0, this
          }
          resetDrawCache(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.AY)
              for (const Bk of this.AY) Bk.resetDrawCache(kk, Fk)
          }
          get isBlocked() {
            return !1
          }
          getLOD(kk) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          hBk() {
            return null
          }
          getVerticesData(kk) {
            return null
          }
          setVerticesData(kk, Fk, Bk, Rk) {
            return this
          }
          updateVerticesData(kk, Fk, Bk, Rk) {
            return this
          }
          setIndices(kk, Fk) {
            return this
          }
          isVerticesDataPresent(kk) {
            return !1
          }
          ZH() {
            return this._masterMesh ? this._masterMesh.ZH() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.ZH()
          }
          setBoundingInfo(kk) {
            return this._boundingInfo = kk, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(kk, Fk, Bk) {
            return this._boundingInfo = new sk.b(kk, Fk, Bk), this._boundingInfo
          }
          normalizeToUnitCube() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Bk = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(kk, Fk, Bk)
          }
          get useBones() {
            return this.skeleton && this.XN().skeletonsEnabled && this.isVerticesDataPresent(Xk.n.MatricesIndicesKind) && this.isVerticesDataPresent(Xk.n.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(kk) {}
          _activate(kk, Fk) {
            return this._renderId = kk, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === wk.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get mN() {
            return !1
          }
          get GRk() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(kk, Fk, Bk) {
            return this.position.addInPlace(this.calcMovePOV(kk, Fk, Bk)), this
          }
          calcMovePOV(kk, Fk, Bk) {
            const Rk = new ak.c;
            (this.rotationQuaternion ? this.rotationQuaternion : ak.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Rk);
            const tk = ak.s.Zero(),
              Xk = this.definedFacingForward ? -1 : 1;
            return ak.s.TransformCoordinatesFromFloatsToRef(kk * Xk, Fk, Bk * Xk, Rk, tk), tk
          }
          rotatePOV(kk, Fk, Bk) {
            return this.rotation.addInPlace(this.calcRotatePOV(kk, Fk, Bk)), this
          }
          calcRotatePOV(kk, Fk, Bk) {
            const Rk = this.definedFacingForward ? 1 : -1;
            return new ak.s(kk * Rk, Fk, Bk * Rk)
          }
          _refreshBoundingInfo(kk, Fk) {
            if (kk) {
              const Bk = (0, Wk.e)(kk, 0, this.getTotalVertices(), Fk);
              this._boundingInfo ? this._boundingInfo.reConstruct(Bk.minimum, Bk.maximum) : this._boundingInfo = new sk.b(Bk.minimum, Bk.maximum)
            }
            if (this.AY)
              for (let Bk = 0; Bk < this.AY.length; Bk++) this.AY[Bk].refreshBoundingInfo(kk);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(kk) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(kk.minimum, kk.maximum) : this._boundingInfo = new sk.b(kk.minimum, kk.maximum), this.AY)
              for (let Fk = 0; Fk < this.AY.length; Fk++) this.AY[Fk].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(kk, Fk, Bk, Rk, tk, bk, wk) {
            ! function(kk, Fk, Bk, Rk, tk, bk, wk) {
              const dk = ak.l.Qe[0],
                sk = ak.l.Matrix[0],
                Vk = ak.l.Matrix[1],
                Jk = Fk === Xk.n.NormalKind ? ak.s.TransformNormalFromFloatsToRef : ak.s.TransformCoordinatesFromFloatsToRef;
              for (let Xk = 0, Ak = 0; Xk < kk.length; Xk += 3, Ak += 4) {
                let Fk, ek;
                for (sk.reset(), Fk = 0; Fk < 4; Fk++) ek = tk[Ak + Fk], ek > 0 && (ak.c.FromFloat32ArrayToRefScaled(Bk, Math.floor(16 * Rk[Ak + Fk]), ek, Vk), sk.addToSelf(Vk));
                if (bk && wk)
                  for (Fk = 0; Fk < 4; Fk++) ek = wk[Ak + Fk], ek > 0 && (ak.c.FromFloat32ArrayToRefScaled(Bk, Math.floor(16 * bk[Ak + Fk]), ek, Vk), sk.addToSelf(Vk));
                Jk(kk[Xk], kk[Xk + 1], kk[Xk + 2], sk, dk), dk.toArray(kk, Xk)
              }
            }(kk, Fk, Bk, Rk, tk, bk, wk)
          }
          _getData(Fk, Bk) {
            let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xk.n.PositionKind;
            const tk = Fk.cache,
              bk = kk => {
                if (tk) {
                  const Fk = tk._vertexData || (tk._vertexData = {});
                  return Fk[kk] || this.copyVerticesData(kk, Fk), Fk[kk]
                }
                return this.getVerticesData(kk)
              };
            if (Bk || (Bk = bk(Rk)), !Bk) return null;
            tk ? (tk._outputData ? tk._outputData.set(Bk) : tk._outputData = new Float32Array(Bk), Bk = tk._outputData) : (Fk.applyMorph && this.morphTargetManager || Fk.applySkeleton && this.skeleton || Fk.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Bk = Bk.slice()), Fk.applyMorph && this.morphTargetManager && function(kk, Fk, Bk) {
              let Rk;
              switch (Fk) {
                case Xk.n.PositionKind:
                  Rk = kk => kk.getPositions();
                  break;
                case Xk.n.NormalKind:
                  Rk = kk => kk.getNormals();
                  break;
                case Xk.n.TangentKind:
                  Rk = kk => kk.getTangents();
                  break;
                case Xk.n.UVKind:
                  Rk = kk => kk.getUVs();
                  break;
                case Xk.n.UV2Kind:
                  Rk = kk => kk.getUV2s();
                  break;
                case Xk.n.ColorKind:
                  Rk = kk => kk.getColors();
                  break;
                default:
                  return
              }
              for (let tk = 0; tk < kk.length; tk++) {
                let Fk = kk[tk];
                for (let ak = 0; ak < Bk.numTargets; ak++) {
                  const Xk = Bk.getTarget(ak),
                    bk = Xk.influence;
                  if (0 !== bk) {
                    const Bk = Rk(Xk);
                    Bk && (Fk += (Bk[tk] - kk[tk]) * bk)
                  }
                }
                kk[tk] = Fk
              }
            }(Bk, Rk, this.morphTargetManager);
            const wk = this.bakedVertexAnimationManager;
            let dk = !1;
            if (Fk.applyBakedVertexAnimation && wk?.isEnabled) {
              const kk = bk(Xk.n.MatricesIndicesKind),
                tk = bk(Xk.n.MatricesWeightsKind);
              if (tk && kk) {
                const ak = this.numBoneInfluencers > 4,
                  sk = ak ? bk(Xk.n.MatricesIndicesExtraKind) : null,
                  Vk = ak ? bk(Xk.n.MatricesWeightsExtraKind) : null;
                dk = uk(Bk, Rk, wk, Fk.bakedVertexAnimationSettings ?? wk.animationParameters, kk, tk, sk, Vk, this.numBoneInfluencers)
              }
            }
            if (!dk && Fk.applySkeleton && this.skeleton) {
              const Fk = bk(Xk.n.MatricesIndicesKind),
                tk = bk(Xk.n.MatricesWeightsKind);
              if (tk && Fk) {
                const ak = this.numBoneInfluencers > 4,
                  wk = ak ? bk(Xk.n.MatricesIndicesExtraKind) : null,
                  dk = ak ? bk(Xk.n.MatricesWeightsExtraKind) : null,
                  sk = this.skeleton.getTransformMatrices(this);
                kk._ApplySkeleton(Bk, Rk, sk, Fk, tk, wk, dk)
              }
            }
            if (!1 !== Fk.updatePositionsArray && Rk === Xk.n.PositionKind) {
              const kk = this._internalAbstractMeshDataInfo._positions || [],
                Fk = kk.length;
              if (kk.length = Bk.length / 3, Fk < kk.length)
                for (let Bk = Fk; Bk < kk.length; Bk++) kk[Bk] = new ak.s;
              for (let Rk = 0, tk = 0; Rk < kk.length; Rk++, tk += 3) kk[Rk].E1(Bk[tk], Bk[tk + 1], Bk[tk + 2]);
              this._internalAbstractMeshDataInfo._positions = kk
            }
            return Bk
          }
          getNormalsData() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: kk,
              applyMorph: Fk,
              updatePositionsArray: !1
            }, null, Xk.n.NormalKind)
          }
          Qq() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: kk,
              applyMorph: Fk,
              updatePositionsArray: !1
            }, Bk, Xk.n.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new sk.b(ak.s.Zero(), ak.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(kk) {
            if (!this.AY) return this;
            const Fk = this.AY.length;
            for (let Bk = 0; Bk < Fk; Bk++) {
              const Rk = this.AY[Bk];
              (Fk > 1 || !Rk.IsGlobal) && Rk.updateBoundingInfo(kk)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Fy || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(kk) {
            return this.ZH().isInFrustum(kk, this.cullingStrategy)
          }
          isCompletelyInFrustum(kk) {
            return this.ZH().isCompletelyInFrustum(kk)
          }
          NRk(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Bk = arguments.length > 2 ? arguments[2] : void 0;
            const Rk = this.ZH(),
              tk = kk.ZH();
            if (Rk.intersects(tk, Fk)) return !0;
            if (Bk)
              for (const ak of this.getChildMeshes())
                if (ak.NRk(kk, Fk, !0)) return !0;
            return !1
          }
          intersectsPoint(kk) {
            return this.ZH().intersectsPoint(kk)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(kk) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = kk
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(kk) {
            let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const Bk = this.XN().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Bk.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Bk.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, kk, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Fk), this
          }
          _collideForSubMesh(kk, Fk, Bk) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!kk._lastColliderWorldVertices || !kk._lastColliderTransformMatrix.equals(Fk)) {
              kk._lastColliderTransformMatrix = Fk.clone(), kk._lastColliderWorldVertices = [], kk._trianglePlanes = [];
              const Bk = kk.verticesStart,
                Rk = kk.verticesStart + kk.verticesCount;
              for (let tk = Bk; tk < Rk; tk++) kk._lastColliderWorldVertices.push(ak.s.TransformCoordinates(this._positions[tk], Fk))
            }
            return Bk._collide(kk._trianglePlanes, kk._lastColliderWorldVertices, this.hBk(), kk.indexStart, kk.indexStart + kk.indexCount, kk.verticesStart, !!kk.Ry(), this, this._shouldConvertRHS(), 7 === kk.Ry()?.fillMode), this
          }
          _processCollisionsForSubMeshes(kk, Fk) {
            const Bk = this._scene.getCollidingSubMeshCandidates(this, kk),
              Rk = Bk.length;
            for (let tk = 0; tk < Rk; tk++) {
              const ak = Bk.data[tk];
              Rk > 1 && !ak._checkCollision(kk) || this._collideForSubMesh(ak, Fk, kk)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(kk) {
            if (!this.ZH()._checkCollision(kk)) return this;
            const Fk = ak.l.Matrix[0],
              Bk = ak.l.Matrix[1];
            return ak.c.ScalingToRef(1 / kk._radius.x, 1 / kk._radius.y, 1 / kk._radius.z, Fk), this.worldMatrixFromCache.multiplyToRef(Fk, Bk), this._processCollisionsForSubMeshes(kk, Bk), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(kk, Fk, Bk) {
            let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              tk = arguments.length > 4 ? arguments[4] : void 0,
              Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const bk = new dk.c,
              wk = this.getClassName(),
              sk = "InstancedLinesMesh" === wk || "LinesMesh" === wk || "GreasedLineMesh" === wk ? this.intersectionThreshold : 0,
              Vk = this.ZH();
            if (!this.AY) return bk;
            if (!Xk && (!kk.intersectsSphere(Vk.JRk, sk) || !kk.intersectsBox(Vk.boundingBox, sk))) return bk;
            if (Rk) return bk.hit = !Xk, bk.pickedMesh = Xk ? null : this, bk.distance = Xk ? 0 : ak.s.Distance(kk.origin, Vk.JRk.center), bk.subMeshId = 0, bk;
            if (!this._generatePointsArray()) return bk;
            let Jk = null;
            const Ak = this._scene.getIntersectingSubMeshCandidates(this, kk),
              ek = Ak.length;
            let yk = !1;
            for (let ak = 0; ak < ek; ak++) {
              const kk = Ak.data[ak].Ry();
              if (kk && (7 == kk.fillMode || 0 == kk.fillMode || 1 == kk.fillMode || 2 == kk.fillMode || 4 == kk.fillMode)) {
                yk = !0;
                break
              }
            }
            if (!yk) return bk.hit = !0, bk.pickedMesh = this, bk.distance = ak.s.Distance(kk.origin, Vk.JRk.center), bk.subMeshId = -1, bk;
            for (let ak = 0; ak < ek; ak++) {
              const Rk = Ak.data[ak];
              if (ek > 1 && !Xk && !Rk.canIntersects(kk)) continue;
              const tk = Rk.intersects(kk, this._positions, this.hBk(), Fk, Bk);
              if (tk && (Fk || !Jk || tk.distance < Jk.distance) && (Jk = tk, Jk.subMeshId = Rk._id, Jk._internalSubMeshId = ak, Fk)) break
            }
            if (Jk) {
              const Fk = tk ?? this.getWorldMatrix(),
                Bk = ak.l.Qe[0],
                Rk = ak.l.Qe[1];
              ak.s.TransformCoordinatesToRef(kk.origin, Fk, Bk), kk.direction.scaleToRef(Jk.distance, Rk);
              const Xk = ak.s.TransformNormal(Rk, Fk).addInPlace(Bk);
              return bk.hit = !0, bk.distance = ak.s.Distance(Bk, Xk), bk.pickedPoint = Xk, bk.pickedMesh = this, bk.bu = Jk.bu || 0, bk.bv = Jk.bv || 0, bk.subMeshFaceId = Jk.faceId, bk.faceId = Jk.faceId + Ak.data[Jk._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), bk.subMeshId = Jk.subMeshId, bk
            }
            return bk
          }
          clone(kk, Fk, Bk) {
            return null
          }
          releaseSubMeshes() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.AY)
              for (; this.AY.length;) this.AY[0].dispose(kk);
            else this.AY = [];
            return this
          }
          dispose(kk) {
            let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Rk = this.XN();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Rk.freeActiveMeshes(), Rk.freeRenderingGroups(), Rk.renderingManager.maintainStateBetweenFrames && Rk.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((kk => kk !== this && kk.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Fk = 0; Fk < this._intersectionsInProgress.length; Fk++) {
              const kk = this._intersectionsInProgress[Fk],
                Bk = kk._intersectionsInProgress.indexOf(this);
              kk._intersectionsInProgress.splice(Bk, 1)
            }
            this._intersectionsInProgress.length = 0;
            const tk = Rk.lights;
            for (const Xk of tk) {
              let kk = Xk.includedOnlyMeshes.indexOf(this); - 1 !== kk && Xk.includedOnlyMeshes.splice(kk, 1), kk = Xk.excludedMeshes.indexOf(this), -1 !== kk && Xk.excludedMeshes.splice(kk, 1);
              const Fk = Xk.getShadowGenerators();
              if (Fk) {
                const Bk = Fk.values();
                for (let Fk = Bk.next(); !0 !== Fk.done; Fk = Bk.next()) {
                  const Bk = Fk.value.getShadowMap();
                  Bk && Bk.renderList && (kk = Bk.renderList.indexOf(this), -1 !== kk && Bk.renderList.splice(kk, 1))
                }
              }
            }
            this.releaseSubMeshes(Rk._isDisposing);
            const ak = Rk.ne();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, ak.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), ak.wipeCaches(), Rk.hN(this), this._parentContainer) {
              const kk = this._parentContainer.meshes.indexOf(this);
              kk > -1 && this._parentContainer.meshes.splice(kk, 1), this._parentContainer = null
            }
            if (Bk && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !kk)
              for (Fk = 0; Fk < Rk.fY.length; Fk++) Rk.fY[Fk].emitter === this && (Rk.fY[Fk].dispose(), Fk--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(kk, Bk)
          }
          _initFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetNormals || (kk.facetNormals = []), kk.facetPositions || (kk.facetPositions = []), kk.facetPartitioning || (kk.facetPartitioning = new Array), kk.facetNb = this.hBk().length / 3 | 0, kk.partitioningSubdivisions = kk.partitioningSubdivisions ? kk.partitioningSubdivisions : 10, kk.partitioningBBoxRatio = kk.partitioningBBoxRatio ? kk.partitioningBBoxRatio : 1.01;
            for (let Fk = 0; Fk < kk.facetNb; Fk++) kk.facetNormals[Fk] = ak.s.Zero(), kk.facetPositions[Fk] = ak.s.Zero();
            return kk.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetDataEnabled || this._initFacetData();
            const Fk = this.getVerticesData(Xk.n.PositionKind),
              Bk = this.hBk(),
              Rk = this.getVerticesData(Xk.n.NormalKind)?.slice(),
              tk = this.ZH();
            if (kk.facetDepthSort && !kk.facetDepthSortEnabled) {
              if (kk.facetDepthSortEnabled = !0, Bk instanceof Uint16Array) kk.depthSortedIndices = new Uint16Array(Bk);
              else if (Bk instanceof Uint32Array) kk.depthSortedIndices = new Uint32Array(Bk);
              else {
                let Fk = !1;
                for (let kk = 0; kk < Bk.length; kk++)
                  if (Bk[kk] > 65535) {
                    Fk = !0;
                    break
                  } kk.depthSortedIndices = Fk ? new Uint32Array(Bk) : new Uint16Array(Bk)
              }
              if (kk.facetDepthSortFunction = function(kk, Fk) {
                  return Fk.sqDistance - kk.sqDistance
                }, !kk.facetDepthSortFrom) {
                const Fk = this.XN().activeCamera;
                kk.facetDepthSortFrom = Fk ? Fk.position : ak.s.Zero()
              }
              kk.depthSortedFacets = [];
              for (let Fk = 0; Fk < kk.facetNb; Fk++) {
                const Bk = {
                  ind: 3 * Fk,
                  sqDistance: 0
                };
                kk.depthSortedFacets.push(Bk)
              }
              kk.invertedMatrix = ak.c.Identity(), kk.facetDepthSortOrigin = ak.s.Zero()
            }
            kk.bbSize.x = tk.maximum.x - tk.minimum.x > ik.c ? tk.maximum.x - tk.minimum.x : ik.c, kk.bbSize.y = tk.maximum.y - tk.minimum.y > ik.c ? tk.maximum.y - tk.minimum.y : ik.c, kk.bbSize.z = tk.maximum.z - tk.minimum.z > ik.c ? tk.maximum.z - tk.minimum.z : ik.c;
            let wk = kk.bbSize.x > kk.bbSize.y ? kk.bbSize.x : kk.bbSize.y;
            if (wk = wk > kk.bbSize.z ? wk : kk.bbSize.z, kk.subDiv.max = kk.partitioningSubdivisions, kk.subDiv.X = Math.floor(kk.subDiv.max * kk.bbSize.x / wk), kk.subDiv.Y = Math.floor(kk.subDiv.max * kk.bbSize.y / wk), kk.subDiv.Z = Math.floor(kk.subDiv.max * kk.bbSize.z / wk), kk.subDiv.X = kk.subDiv.X < 1 ? 1 : kk.subDiv.X, kk.subDiv.Y = kk.subDiv.Y < 1 ? 1 : kk.subDiv.Y, kk.subDiv.Z = kk.subDiv.Z < 1 ? 1 : kk.subDiv.Z, kk.facetParameters.facetNormals = this.getFacetLocalNormals(), kk.facetParameters.facetPositions = this.getFacetLocalPositions(), kk.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), kk.facetParameters.bInfo = tk, kk.facetParameters.bbSize = kk.bbSize, kk.facetParameters.subDiv = kk.subDiv, kk.facetParameters.ratio = this.partitioningBBoxRatio, kk.facetParameters.depthSort = kk.facetDepthSort, kk.facetDepthSort && kk.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(kk.invertedMatrix), ak.s.TransformCoordinatesToRef(kk.facetDepthSortFrom, kk.invertedMatrix, kk.facetDepthSortOrigin), kk.facetParameters.distanceTo = kk.facetDepthSortOrigin), kk.facetParameters.depthSortedFacets = kk.depthSortedFacets, Rk && bk.e.ComputeNormals(Fk, Bk, Rk, kk.facetParameters), kk.facetDepthSort && kk.facetDepthSortEnabled) {
              kk.depthSortedFacets.sort(kk.facetDepthSortFunction);
              const Fk = kk.depthSortedIndices.length / 3 | 0;
              for (let Rk = 0; Rk < Fk; Rk++) {
                const Fk = kk.depthSortedFacets[Rk].ind;
                kk.depthSortedIndices[3 * Rk] = Bk[Fk], kk.depthSortedIndices[3 * Rk + 1] = Bk[Fk + 1], kk.depthSortedIndices[3 * Rk + 2] = Bk[Fk + 2]
              }
              this.updateIndices(kk.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            return kk.facetNormals || this.updateFacetData(), kk.facetNormals
          }
          getFacetLocalPositions() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            return kk.facetPositions || this.updateFacetData(), kk.facetPositions
          }
          getFacetLocalPartitioning() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            return kk.facetPartitioning || this.updateFacetData(), kk.facetPartitioning
          }
          getFacetPosition(kk) {
            const Fk = ak.s.Zero();
            return this.getFacetPositionToRef(kk, Fk), Fk
          }
          getFacetPositionToRef(kk, Fk) {
            const Bk = this.getFacetLocalPositions()[kk],
              Rk = this.getWorldMatrix();
            return ak.s.TransformCoordinatesToRef(Bk, Rk, Fk), this
          }
          getFacetNormal(kk) {
            const Fk = ak.s.Zero();
            return this.getFacetNormalToRef(kk, Fk), Fk
          }
          getFacetNormalToRef(kk, Fk) {
            const Bk = this.getFacetLocalNormals()[kk];
            return ak.s.TransformNormalToRef(Bk, this.getWorldMatrix(), Fk), this
          }
          getFacetsAtLocalCoordinates(kk, Fk, Bk) {
            const Rk = this.ZH(),
              tk = this._internalAbstractMeshDataInfo._facetData,
              ak = Math.floor((kk - Rk.minimum.x * tk.partitioningBBoxRatio) * tk.subDiv.X * tk.partitioningBBoxRatio / tk.bbSize.x),
              Xk = Math.floor((Fk - Rk.minimum.y * tk.partitioningBBoxRatio) * tk.subDiv.Y * tk.partitioningBBoxRatio / tk.bbSize.y),
              bk = Math.floor((Bk - Rk.minimum.z * tk.partitioningBBoxRatio) * tk.subDiv.Z * tk.partitioningBBoxRatio / tk.bbSize.z);
            return ak < 0 || ak > tk.subDiv.max || Xk < 0 || Xk > tk.subDiv.max || bk < 0 || bk > tk.subDiv.max ? null : tk.facetPartitioning[ak + tk.subDiv.max * Xk + tk.subDiv.max * tk.subDiv.max * bk]
          }
          getClosestFacetAtCoordinates(kk, Fk, Bk, Rk) {
            let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const bk = this.getWorldMatrix(),
              wk = ak.l.Matrix[5];
            bk.invertToRef(wk);
            const dk = ak.l.Qe[8];
            ak.s.TransformCoordinatesFromFloatsToRef(kk, Fk, Bk, wk, dk);
            const sk = this.getClosestFacetAtLocalCoordinates(dk.x, dk.y, dk.z, Rk, tk, Xk);
            return Rk && ak.s.TransformCoordinatesFromFloatsToRef(Rk.x, Rk.y, Rk.z, bk, Rk), sk
          }
          getClosestFacetAtLocalCoordinates(kk, Fk, Bk, Rk) {
            let tk, ak, Xk, bk, wk, dk, sk, Vk, Jk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              ek = null;
            const yk = this.getFacetLocalPositions(),
              fk = this.getFacetLocalNormals(),
              mk = this.getFacetsAtLocalCoordinates(kk, Fk, Bk);
            if (!mk) return null;
            let Wk, vk, ik, Yk, Lk = Number.MAX_VALUE;
            for (let Ok = 0; Ok < mk.length; Ok++) vk = mk[Ok], ik = fk[vk], Yk = yk[vk], bk = (kk - Yk.x) * ik.x + (Fk - Yk.y) * ik.y + (Bk - Yk.z) * ik.z, (!Jk || Jk && Ak && bk >= 0 || Jk && !Ak && bk <= 0) && (bk = ik.x * Yk.x + ik.y * Yk.y + ik.z * Yk.z, wk = -(ik.x * kk + ik.y * Fk + ik.z * Bk - bk) / (ik.x * ik.x + ik.y * ik.y + ik.z * ik.z), dk = kk + ik.x * wk, sk = Fk + ik.y * wk, Vk = Bk + ik.z * wk, tk = dk - kk, ak = sk - Fk, Xk = Vk - Bk, Wk = tk * tk + ak * ak + Xk * Xk, Wk < Lk && (Lk = Wk, ek = vk, Rk && (Rk.x = dk, Rk.y = sk, Rk.z = Vk)));
            return ek
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            return kk.facetDataEnabled && (kk.facetDataEnabled = !1, kk.facetPositions = [], kk.facetNormals = [], kk.facetPartitioning = new Array, kk.facetParameters = {}, kk.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(kk, Fk) {
            return this
          }
          createNormals(kk) {
            const Fk = this.getVerticesData(Xk.n.PositionKind),
              Bk = this.hBk();
            let Rk;
            return Rk = this.isVerticesDataPresent(Xk.n.NormalKind) ? this.getVerticesData(Xk.n.NormalKind) : [], bk.e.ComputeNormals(Fk, Bk, Rk, {
              useRightHandedSystem: this.XN().useRightHandedSystem
            }), this.setVerticesData(Xk.n.NormalKind, Rk, kk), this
          }
          async optimizeIndicesAsync() {
            const kk = this.hBk();
            if (!kk) return this;
            const {
              OptimizeIndices: Fk
            } = await Bk.e(341).then((() => Bk(41970)));
            return Fk(kk), this.setIndices(kk, this.getTotalVertices()), this
          }
          alignWithNormal(kk, Fk) {
            Fk || (Fk = Yk.b.Y);
            const Bk = ak.l.Qe[0],
              Rk = ak.l.Qe[1];
            return ak.s.CrossToRef(Fk, kk, Rk), ak.s.CrossToRef(kk, Rk, Bk), this.rotationQuaternion ? ak.e.RotationQuaternionFromAxisToRef(Bk, kk, Rk, this.rotationQuaternion) : ak.s.RotationFromAxisToRef(Bk, kk, Rk, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, fk.i)("EdgesRenderer")
          }
          enableEdgesRendering(kk, Fk, Bk) {
            throw (0, fk.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.fY.filter((kk => kk.emitter === this))
          }
        }, (() => {
          const Bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jk[Symbol.metadata] ?? null) : void 0;
          Fk = [Ok.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Rk.j)(kk, null, Fk, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: kk => "_ApplySkeleton" in kk,
              get: kk => kk._ApplySkeleton
            },
            metadata: Bk
          }, null, Ak), Bk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bk
          })
        })(), kk.OCCLUSION_TYPE_NONE = ((0, Rk.l)(kk, Ak), 0), kk.OCCLUSION_TYPE_OPTIMISTIC = 1, kk.OCCLUSION_TYPE_STRICT = 2, kk.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, kk.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, kk.CULLINGSTRATEGY_STANDARD = 0, kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, kk.DefaultIsPickable = !0, kk
      })(),
      ck = !1;

    function Gk() {
      ck || (ck = !0, (0, Sk.d)("BABYLON.AbstractMesh", Uk))
    }(Ak = Uk.prototype).createOrUpdateSubmeshesOctree ?? (Ak.createOrUpdateSubmeshesOctree = (0, fk.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (ek = Uk.prototype).getPhysicsImpostor ?? (ek.getPhysicsImpostor = (0, fk.g)("AbstractMesh", "getPhysicsImpostor")), (yk = Uk.prototype).setPhysicsLinkWith ?? (yk.setPhysicsLinkWith = (0, fk.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Uk.prototype, "occlusionRetryCount") || Object.defineProperty(Uk.prototype, "occlusionRetryCount", (0, fk.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Uk.prototype, "occlusionType") || Object.defineProperty(Uk.prototype, "occlusionType", (0, fk.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Uk.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Uk.prototype, "occlusionQueryAlgorithmType", (0, fk.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Uk.prototype, "isOccluded") || Object.defineProperty(Uk.prototype, "isOccluded", (0, fk.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Uk.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Uk.prototype, "isOcclusionQueryInProgress", (0, fk.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Uk.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Uk.prototype, "forceRenderingWhenOccluded", (0, fk.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Uk.prototype, "occlusionForRenderPassId") || Object.defineProperty(Uk.prototype, "occlusionForRenderPassId", (0, fk.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Uk.prototype, "decalMap") || Object.defineProperty(Uk.prototype, "decalMap", (0, fk.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Uk.prototype, "gH") || Object.defineProperty(Uk.prototype, "gH", (0, fk.f)("AbstractMesh", "gH")), Object.getOwnPropertyDescriptor(Uk.prototype, "physicsImpostor") || Object.defineProperty(Uk.prototype, "physicsImpostor", (0, fk.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Uk.prototype, "showBoundingBox") || Object.defineProperty(Uk.prototype, "showBoundingBox", (0, fk.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Uk.prototype, "edgesRenderer") || Object.defineProperty(Uk.prototype, "edgesRenderer", (0, fk.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Uk.prototype, "renderOutline") || Object.defineProperty(Uk.prototype, "renderOutline", (0, fk.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Uk.prototype, "renderOverlay") || Object.defineProperty(Uk.prototype, "renderOverlay", (0, fk.f)("AbstractMesh", "renderOverlay"))
  },
  39836: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => mk
    });
    var Rk = Bk(36758),
      tk = Bk(36917),
      ak = Bk(39829),
      Xk = Bk(39541),
      bk = Bk(39703),
      wk = Bk(39844),
      dk = Bk(39716),
      sk = Bk(39492),
      Vk = Bk(38320),
      Jk = Bk(39420),
      Ak = Bk(39729),
      ek = Bk(36772),
      yk = Bk(39847),
      fk = Bk(39463);
    class mk {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(kk) {
        this._boundingBias ? this._boundingBias.sBk(kk) : this._boundingBias = kk.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(kk) {
        const Fk = new mk(mk.RandomId(), kk.XN());
        return Fk.applyToMesh(kk), Fk
      }
      get meshes() {
        return this._meshes
      }
      constructor(kk, Fk, Bk) {
        let tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Rk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Rk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Fk || ek.c.LastCreatedScene, this._scene && (this.id = kk, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.ne(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = tk, null !== Xk && (this._totalVertices = Xk), Bk ? this.setAllVerticesData(Bk, tk) : null === Xk && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), ak && (this.applyToMesh(ak), ak.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      XN() {
        return this._scene
      }
      ne() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let kk = 0; kk < this._meshes.length; kk++)
          if (!this._meshes[kk].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const kk = new Set;
        for (const Fk in this._vertexBuffers) kk.add(this._vertexBuffers[Fk].getWrapperBuffer());
        kk.forEach((kk => {
          kk._rebuild()
        }))
      }
      setAllVerticesData(kk, Fk) {
        kk.applyToGeometry(this, Fk), this._notifyUpdate()
      }
      setVerticesData(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        Bk && Array.isArray(Fk) && (Fk = new Float32Array(Fk));
        const tk = new Xk.n(this._engine, Fk, kk, {
          updatable: Bk,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Rk,
          label: "Geometry_" + this.id + "_" + kk
        });
        this.setVerticesBuffer(tk)
      }
      removeVerticesData(kk) {
        this._vertexBuffers[kk] && (this._vertexBuffers[kk].dispose(), delete this._vertexBuffers[kk]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const tk = kk.getKind();
        this._vertexBuffers[tk] && Bk && this._vertexBuffers[tk].dispose(), kk._buffer && kk._ownsBuffer && kk._buffer._increaseReferences(), this._vertexBuffers[tk] = kk;
        const ak = this._meshes,
          bk = ak.length;
        if (tk === Xk.n.PositionKind) {
          this._totalVertices = Fk ?? kk._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : kk.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Bk = this._extend && this._extend.minimum || new Rk.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            tk = this._extend && this._extend.maximum || new Rk.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let kk = 0; kk < bk; kk++) {
            const Fk = ak[kk];
            Fk.buildBoundingInfo(Bk, tk), Fk._createGlobalSubMesh(Fk.isUnIndexed), Fk.computeWorldMatrix(!0), Fk.synchronizeInstances()
          }
        }
        this._notifyUpdate(tk)
      }
      updateVerticesDataDirectly(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tk = this.getVertexBuffer(kk);
        tk && (tk.updateDirectly(Fk, Bk, Rk), this._notifyUpdate(kk))
      }
      updateVerticesData(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this.getVertexBuffer(kk);
        Rk && (Rk.update(Fk), kk === Xk.n.PositionKind && this._updateBoundingInfo(Bk, Fk), this._notifyUpdate(kk))
      }
      _updateBoundingInfo(kk, Fk) {
        if (kk && this._updateExtend(Fk), this._resetPointsArrayCache(), kk) {
          const kk = this._meshes;
          for (const Fk of kk) {
            Fk.hasBoundingInfo ? Fk.ZH().reConstruct(this._extend.minimum, this._extend.maximum) : Fk.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const kk = Fk.AY;
            for (const Fk of kk) Fk.refreshBoundingInfo()
          }
        }
      }
      _bind(kk, Fk, Bk, Rk) {
        if (!kk) return;
        void 0 === Fk && (Fk = this._indexBuffer);
        const tk = this.getVertexBuffers();
        if (!tk) return;
        if (Fk != this._indexBuffer || !this._vertexArrayObjects && !Rk) return void this._engine.bindBuffers(tk, Fk, kk, Bk);
        const ak = Rk || this._vertexArrayObjects,
          Xk = this._engine;
        ak[kk.key] || (ak[kk.key] = Xk.recordVertexArrayObject(tk, Fk, kk, Bk)), Xk.bindVertexArrayObject(ak[kk.key], Fk)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(kk, Fk, Bk) {
        const Rk = this.getVertexBuffer(kk);
        return Rk ? Rk.getFloatData(this._totalVertices, Bk || Fk && 1 !== this._meshes.length) : null
      }
      copyVerticesData(kk, Fk) {
        const Bk = this.getVertexBuffer(kk);
        if (!Bk) return;
        Fk[kk] || (Fk[kk] = new Float32Array(this._totalVertices * Bk.getSize()));
        const Rk = Bk.getData();
        Rk && (0, fk.e)(Rk, Bk.getSize(), Bk.type, Bk.byteOffset, Bk.byteStride, Bk.normalized, this._totalVertices, Fk[kk])
      }
      isVertexBufferUpdatable(kk) {
        const Fk = this._vertexBuffers[kk];
        return !!Fk && Fk.isUpdatable()
      }
      getVertexBuffer(kk) {
        return this.isReady() ? this._vertexBuffers[kk] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(kk) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[kk] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(kk)
      }
      getVerticesDataKinds() {
        const kk = [];
        let Fk;
        if (!this._vertexBuffers && this._delayInfo)
          for (Fk in this._delayInfo) kk.push(Fk);
        else
          for (Fk in this._vertexBuffers) kk.push(Fk);
        return kk
      }
      updateIndices(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Rk = kk.length !== this._indices.length;
            if (Bk || (this._indices = kk.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, kk, Fk), Rk)
              for (const kk of this._meshes) kk._createGlobalSubMesh(!0)
          } else this.setIndices(kk, null, !0)
      }
      setIndexBuffer(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = kk, this._totalVertices = Fk, this._totalIndices = Bk, kk.is32Bits = null === Rk ? Fk > 65535 : Rk;
        for (const tk of this._meshes) tk._createGlobalSubMesh(!0), tk.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = kk, this._indexBufferIsUpdatable = Bk, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Bk, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Fk && (this._totalVertices = Fk);
        for (const tk of this._meshes) tk._createGlobalSubMesh(!Rk), tk.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      hBk(kk, Fk) {
        if (!this.isReady()) return null;
        const Bk = this._indices;
        return Fk || kk && 1 !== this._meshes.length ? Bk.slice() : Bk
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        kk && this._vertexArrayObjects && this._vertexArrayObjects[kk.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[kk.key]), delete this._vertexArrayObjects[kk.key])
      }
      releaseForMesh(kk, Fk) {
        const Bk = this._meshes,
          Rk = Bk.indexOf(kk); - 1 !== Rk && (Bk.splice(Rk, 1), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject(), kk._geometry = null, 0 === Bk.length && Fk && this.dispose())
      }
      applyToMesh(kk) {
        if (kk._geometry === this) return;
        const Fk = kk._geometry;
        Fk && Fk.releaseForMesh(kk), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject();
        const Bk = this._meshes;
        kk._geometry = this, kk._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Bk.push(kk), this.isReady() ? this._applyToMesh(kk) : this._boundingInfo && kk.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!kk && (kk = this.getVerticesData(Xk.n.PositionKind), !kk)) return;
          this._extend = (0, Ak.e)(kk, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(kk) {
        for (const Fk in this._vertexBuffers) {
          const Bk = this._vertexBuffers[Fk];
          Bk._buffer.getBuffer() || Bk.create(), Fk === Xk.n.PositionKind && (this._extend || this._updateExtend(), kk.buildBoundingInfo(this._extend.minimum, this._extend.maximum), kk._createGlobalSubMesh(kk.isUnIndexed), kk._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), kk._syncGeometryWithMorphTargetManager(), kk.synchronizeInstances()
      }
      _notifyUpdate(kk) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, kk), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Fk of this._meshes) Fk._markSubMeshesAsAttributesDirty()
      }
      load(kk, Fk) {
        2 !== this.delayLoadState && (this.isReady() ? Fk && Fk() : (this.delayLoadState = 2, this._queueLoad(kk, Fk)))
      }
      _queueLoad(kk, Fk) {
        this.delayLoadingFile && (kk.addPendingData(this), (async () => {
          try {
            const Bk = await kk._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void kk.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Bk), this), this.delayLoadState = 1, this._delayInfo = [], kk.removePendingData(this);
            const Rk = this._meshes,
              tk = Rk.length;
            for (let kk = 0; kk < tk; kk++) this._applyToMesh(Rk[kk]);
            Fk && Fk()
          } catch (Bk) {
            kk.removePendingData(this), kk.BBk || Vk.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Bk}`)
          }
        })())
      }
      toLeftHanded() {
        const kk = this.hBk(!1);
        if (null != kk && kk.length > 0) {
          for (let Fk = 0; Fk < kk.length; Fk += 3) {
            const Bk = kk[Fk + 0];
            kk[Fk + 0] = kk[Fk + 2], kk[Fk + 2] = Bk
          }
          this.setIndices(kk)
        }
        const Fk = this.getVerticesData(Xk.n.PositionKind, !1);
        if (null != Fk && Fk.length > 0) {
          for (let kk = 0; kk < Fk.length; kk += 3) Fk[kk + 2] = -Fk[kk + 2];
          this.setVerticesData(Xk.n.PositionKind, Fk, !1)
        }
        const Bk = this.getVerticesData(Xk.n.NormalKind, !1);
        if (null != Bk && Bk.length > 0) {
          for (let kk = 0; kk < Bk.length; kk += 3) Bk[kk + 2] = -Bk[kk + 2];
          this.setVerticesData(Xk.n.NormalKind, Bk, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const kk = this.getVerticesData(Xk.n.PositionKind);
        if (!kk || 0 === kk.length) return !1;
        for (let Fk = 3 * this._positionsCache.length, Bk = this._positionsCache.length; Fk < kk.length; Fk += 3, ++Bk) this._positionsCache[Bk] = Rk.s.FromArray(kk, Fk);
        for (let Fk = 0, Bk = 0; Fk < kk.length; Fk += 3, ++Bk) this._positionsCache[Bk].set(kk[0 + Fk], kk[1 + Fk], kk[2 + Fk]);
        return this._positionsCache.length = kk.length / 3, this._positions = this._positionsCache, !0
      }
      BBk() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Bk in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Bk]);
          this._vertexArrayObjects = {};
          const kk = this._meshes,
            Fk = kk.length;
          for (let Bk = 0; Bk < Fk; Bk++) kk[Bk]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const kk = this._meshes,
          Fk = kk.length;
        let Bk;
        for (Bk = 0; Bk < Fk; Bk++) this.releaseForMesh(kk[Bk]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Rk in this._vertexBuffers) this._vertexBuffers[Rk].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const kk = this._parentContainer.geometries.indexOf(this);
          kk > -1 && this._parentContainer.geometries.splice(kk, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(kk) {
        const Fk = new mk(kk, this._scene),
          Bk = this.hBk(void 0, !0);
        Bk && Fk.setIndices(Bk);
        let Rk, tk = !1;
        for (Rk in this._vertexBuffers) {
          const kk = this.getVertexBuffer(Rk),
            Bk = kk.getData();
          if (!Bk) continue;
          const ak = kk.isUpdatable(),
            bk = kk.getSize(),
            {
              type: wk,
              byteOffset: dk,
              byteStride: sk,
              normalized: Vk
            } = kk;
          tk = tk || ak;
          let Jk = this._totalVertices;
          if (kk.getIsInstanced()) {
            let kk;
            kk = Bk instanceof Array ? 4 * Bk.length : Bk.byteLength, Jk = kk / sk
          }
          const Ak = (0, fk.p)(Bk, bk, wk, dk, sk, Jk, !0),
            ek = new Xk.n(this._engine, Ak, Rk, {
              updatable: ak,
              useBytes: !1,
              stride: bk,
              size: bk,
              offset: 0,
              type: wk,
              normalized: Vk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            });
          Fk.setVerticesBuffer(ek, Jk)
        }
        for (Rk in Fk._updatable = tk, Fk.delayLoadState = this.delayLoadState, Fk.delayLoadingFile = this.delayLoadingFile, Fk._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Fk._delayInfo = Fk._delayInfo || [], Fk._delayInfo.push(Rk);
        return Fk._boundingInfo = new dk.b(this._extend.minimum, this._extend.maximum), Fk
      }
      serialize() {
        const kk = {};
        return kk.id = this.id, kk.uniqueId = this.uniqueId, kk.updatable = this._updatable, Jk.b && Jk.b.HasTags(this) && (kk.tags = Jk.b.GetTags(this)), kk
      }
      _toNumberArray(kk) {
        return Array.isArray(kk) ? kk : Array.prototype.slice.call(kk)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const kk in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, kk) && (this._vertexBuffers[kk]._buffer._data = null)
      }
      serializeVerticeData() {
        const kk = this.serialize();
        return this.isVerticesDataPresent(Xk.n.PositionKind) && (kk.positions = this._toNumberArray(this.getVerticesData(Xk.n.PositionKind)), this.isVertexBufferUpdatable(Xk.n.PositionKind) && (kk.positionsUpdatable = !0)), this.isVerticesDataPresent(Xk.n.NormalKind) && (kk.normals = this._toNumberArray(this.getVerticesData(Xk.n.NormalKind)), this.isVertexBufferUpdatable(Xk.n.NormalKind) && (kk.normalsUpdatable = !0)), this.isVerticesDataPresent(Xk.n.TangentKind) && (kk.tangents = this._toNumberArray(this.getVerticesData(Xk.n.TangentKind)), this.isVertexBufferUpdatable(Xk.n.TangentKind) && (kk.tangentsUpdatable = !0)), this.isVerticesDataPresent(Xk.n.UVKind) && (kk.uvs = this._toNumberArray(this.getVerticesData(Xk.n.UVKind)), this.isVertexBufferUpdatable(Xk.n.UVKind) && (kk.uvsUpdatable = !0)), this.isVerticesDataPresent(Xk.n.UV2Kind) && (kk.uvs2 = this._toNumberArray(this.getVerticesData(Xk.n.UV2Kind)), this.isVertexBufferUpdatable(Xk.n.UV2Kind) && (kk.uvs2Updatable = !0)), this.isVerticesDataPresent(Xk.n.UV3Kind) && (kk.uvs3 = this._toNumberArray(this.getVerticesData(Xk.n.UV3Kind)), this.isVertexBufferUpdatable(Xk.n.UV3Kind) && (kk.uvs3Updatable = !0)), this.isVerticesDataPresent(Xk.n.UV4Kind) && (kk.uvs4 = this._toNumberArray(this.getVerticesData(Xk.n.UV4Kind)), this.isVertexBufferUpdatable(Xk.n.UV4Kind) && (kk.uvs4Updatable = !0)), this.isVerticesDataPresent(Xk.n.UV5Kind) && (kk.uvs5 = this._toNumberArray(this.getVerticesData(Xk.n.UV5Kind)), this.isVertexBufferUpdatable(Xk.n.UV5Kind) && (kk.uvs5Updatable = !0)), this.isVerticesDataPresent(Xk.n.UV6Kind) && (kk.uvs6 = this._toNumberArray(this.getVerticesData(Xk.n.UV6Kind)), this.isVertexBufferUpdatable(Xk.n.UV6Kind) && (kk.uvs6Updatable = !0)), this.isVerticesDataPresent(Xk.n.ColorKind) && (kk.colors = this._toNumberArray(this.getVerticesData(Xk.n.ColorKind)), this.isVertexBufferUpdatable(Xk.n.ColorKind) && (kk.colorsUpdatable = !0)), this.isVerticesDataPresent(Xk.n.MatricesIndicesKind) && (kk.matricesIndices = this._toNumberArray(this.getVerticesData(Xk.n.MatricesIndicesKind)), kk.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Xk.n.MatricesIndicesKind) && (kk.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Xk.n.MatricesWeightsKind) && (kk.matricesWeights = this._toNumberArray(this.getVerticesData(Xk.n.MatricesWeightsKind)), this.isVertexBufferUpdatable(Xk.n.MatricesWeightsKind) && (kk.matricesWeightsUpdatable = !0)), kk.indices = this._toNumberArray(this.hBk()), kk
      }
      static ExtractFromMesh(kk, Fk) {
        const Bk = kk._geometry;
        return Bk ? Bk.copy(Fk) : null
      }
      static RandomId() {
        return sk.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(kk, Fk) {
        for (let Bk = 0; Bk < Fk.geometries.length; Bk++)
          if (Fk.geometries[Bk]._loadedUniqueId === kk) return Fk.geometries[Bk];
        return null
      }
      static _ImportGeometry(kk, Fk) {
        const Bk = Fk.XN(),
          Rk = kk.geometryUniqueId,
          ak = kk.geometryId;
        if (Rk || ak) {
          const kk = Rk ? this._GetGeometryByLoadedUniqueId(Rk, Bk) : Bk.getGeometryById(ak);
          kk && kk.applyToMesh(Fk)
        } else if (kk instanceof ArrayBuffer) {
          const Bk = Fk._binaryInfo;
          if (Bk.positionsAttrDesc && Bk.positionsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.positionsAttrDesc.offset, Bk.positionsAttrDesc.count);
            Fk.setVerticesData(Xk.n.PositionKind, Rk, !1)
          }
          if (Bk.normalsAttrDesc && Bk.normalsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.normalsAttrDesc.offset, Bk.normalsAttrDesc.count);
            Fk.setVerticesData(Xk.n.NormalKind, Rk, !1)
          }
          if (Bk.tangetsAttrDesc && Bk.tangetsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.tangetsAttrDesc.offset, Bk.tangetsAttrDesc.count);
            Fk.setVerticesData(Xk.n.TangentKind, Rk, !1)
          }
          if (Bk.uvsAttrDesc && Bk.uvsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvsAttrDesc.offset, Bk.uvsAttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UVKind, Rk, !1)
          }
          if (Bk.uvs2AttrDesc && Bk.uvs2AttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvs2AttrDesc.offset, Bk.uvs2AttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UV2Kind, Rk, !1)
          }
          if (Bk.uvs3AttrDesc && Bk.uvs3AttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvs3AttrDesc.offset, Bk.uvs3AttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UV3Kind, Rk, !1)
          }
          if (Bk.uvs4AttrDesc && Bk.uvs4AttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvs4AttrDesc.offset, Bk.uvs4AttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UV4Kind, Rk, !1)
          }
          if (Bk.uvs5AttrDesc && Bk.uvs5AttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvs5AttrDesc.offset, Bk.uvs5AttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UV5Kind, Rk, !1)
          }
          if (Bk.uvs6AttrDesc && Bk.uvs6AttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.uvs6AttrDesc.offset, Bk.uvs6AttrDesc.count);
            if (yk.c)
              for (let kk = 1; kk < Rk.length; kk += 2) Rk[kk] = 1 - Rk[kk];
            Fk.setVerticesData(Xk.n.UV6Kind, Rk, !1)
          }
          if (Bk.colorsAttrDesc && Bk.colorsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.colorsAttrDesc.offset, Bk.colorsAttrDesc.count);
            Fk.setVerticesData(Xk.n.ColorKind, Rk, !1, Bk.colorsAttrDesc.stride)
          }
          if (Bk.matricesIndicesAttrDesc && Bk.matricesIndicesAttrDesc.count > 0) {
            const Rk = new Int32Array(kk, Bk.matricesIndicesAttrDesc.offset, Bk.matricesIndicesAttrDesc.count),
              tk = [];
            for (let kk = 0; kk < Rk.length; kk++) {
              const Fk = Rk[kk];
              tk.push(255 & Fk), tk.push((65280 & Fk) >> 8), tk.push((16711680 & Fk) >> 16), tk.push(Fk >> 24 & 255)
            }
            Fk.setVerticesData(Xk.n.MatricesIndicesKind, tk, !1)
          }
          if (Bk.matricesIndicesExtraAttrDesc && Bk.matricesIndicesExtraAttrDesc.count > 0) {
            const Rk = new Int32Array(kk, Bk.matricesIndicesExtraAttrDesc.offset, Bk.matricesIndicesExtraAttrDesc.count),
              tk = [];
            for (let kk = 0; kk < Rk.length; kk++) {
              const Fk = Rk[kk];
              tk.push(255 & Fk), tk.push((65280 & Fk) >> 8), tk.push((16711680 & Fk) >> 16), tk.push(Fk >> 24 & 255)
            }
            Fk.setVerticesData(Xk.n.MatricesIndicesExtraKind, tk, !1)
          }
          if (Bk.matricesWeightsAttrDesc && Bk.matricesWeightsAttrDesc.count > 0) {
            const Rk = new Float32Array(kk, Bk.matricesWeightsAttrDesc.offset, Bk.matricesWeightsAttrDesc.count);
            Fk.setVerticesData(Xk.n.MatricesWeightsKind, Rk, !1)
          }
          if (Bk.indicesAttrDesc && Bk.indicesAttrDesc.count > 0) {
            const Rk = new Int32Array(kk, Bk.indicesAttrDesc.offset, Bk.indicesAttrDesc.count);
            Fk.setIndices(Rk, null)
          }
          if (Bk.subMeshesAttrDesc && Bk.subMeshesAttrDesc.count > 0) {
            const Rk = new Int32Array(kk, Bk.subMeshesAttrDesc.offset, 5 * Bk.subMeshesAttrDesc.count);
            Fk.AY = [];
            for (let kk = 0; kk < Bk.subMeshesAttrDesc.count; kk++) {
              const Bk = Rk[5 * kk + 0],
                tk = Rk[5 * kk + 1],
                ak = Rk[5 * kk + 2],
                Xk = Rk[5 * kk + 3],
                wk = Rk[5 * kk + 4];
              bk.d.AddToMesh(Bk, tk, ak, Xk, wk, Fk)
            }
          }
        } else if (kk.positions && kk.normals && kk.indices) {
          if (Fk.setVerticesData(Xk.n.PositionKind, kk.positions, kk.positions._updatable || kk.positionsUpdatable), Fk.setVerticesData(Xk.n.NormalKind, kk.normals, kk.normals._updatable || kk.normalsUpdatable), kk.tangents && Fk.setVerticesData(Xk.n.TangentKind, kk.tangents, kk.tangents._updatable || kk.tangentsUpdatable), kk.uvs && Fk.setVerticesData(Xk.n.UVKind, kk.uvs, kk.uvs._updatable || kk.uvsUpdatable), kk.uvs2 && Fk.setVerticesData(Xk.n.UV2Kind, kk.uvs2, kk.uvs2._updatable || kk.uvs2Updatable), kk.uvs3 && Fk.setVerticesData(Xk.n.UV3Kind, kk.uvs3, kk.uvs3._updatable || kk.uvs3Updatable), kk.uvs4 && Fk.setVerticesData(Xk.n.UV4Kind, kk.uvs4, kk.uvs4._updatable || kk.uvs4Updatable), kk.uvs5 && Fk.setVerticesData(Xk.n.UV5Kind, kk.uvs5, kk.uvs5._updatable || kk.uvs5Updatable), kk.uvs6 && Fk.setVerticesData(Xk.n.UV6Kind, kk.uvs6, kk.uvs6._updatable || kk.uvs6Updatable), kk.colors && Fk.setVerticesData(Xk.n.ColorKind, tk.i.CheckColors4(kk.colors, kk.positions.length / 3), kk.colors._updatable), kk.matricesIndices)
            if (kk.matricesIndices._isExpanded || kk.matricesIndicesExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExpanded, Fk.setVerticesData(Xk.n.MatricesIndicesKind, kk.matricesIndices, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable);
            else {
              const Bk = [];
              for (let Fk = 0; Fk < kk.matricesIndices.length; Fk++) {
                const Rk = kk.matricesIndices[Fk];
                Bk.push(255 & Rk), Bk.push((65280 & Rk) >> 8), Bk.push((16711680 & Rk) >> 16), Bk.push(Rk >> 24 & 255)
              }
              Fk.setVerticesData(Xk.n.MatricesIndicesKind, Bk, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable)
            } if (kk.matricesIndicesExtra)
            if (kk.matricesIndicesExtraExpanded || kk.matricesIndicesExtra._isExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExtraExpanded, Fk.setVerticesData(Xk.n.MatricesIndicesExtraKind, kk.matricesIndicesExtra, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable);
            else {
              const Bk = [];
              for (let Fk = 0; Fk < kk.matricesIndicesExtra.length; Fk++) {
                const Rk = kk.matricesIndicesExtra[Fk];
                Bk.push(255 & Rk), Bk.push((65280 & Rk) >> 8), Bk.push((16711680 & Rk) >> 16), Bk.push(Rk >> 24 & 255)
              }
              Fk.setVerticesData(Xk.n.MatricesIndicesExtraKind, Bk, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable)
            } kk.matricesWeights && (mk._CleanMatricesWeights(kk, Fk), Fk.setVerticesData(Xk.n.MatricesWeightsKind, kk.matricesWeights, kk.matricesWeights._updatable)), kk.matricesWeightsExtra && Fk.setVerticesData(Xk.n.MatricesWeightsExtraKind, kk.matricesWeightsExtra, kk.matricesWeights._updatable), Fk.setIndices(kk.indices, null)
        }
        if (kk.AY) {
          Fk.AY = [];
          for (let Bk = 0; Bk < kk.AY.length; Bk++) {
            const Rk = kk.AY[Bk];
            bk.d.AddToMesh(Rk.materialIndex, Rk.verticesStart, Rk.verticesCount, Rk.indexStart, Rk.indexCount, Fk)
          }
        }
        Fk._shouldGenerateFlatShading && (Fk.convertToFlatShadedMesh(), Fk._shouldGenerateFlatShading = !1), Fk.computeWorldMatrix(!0), Bk.onMeshImportedObservable.notifyObservers(Fk)
      }
      static _CleanMatricesWeights(kk, Fk) {
        const Bk = .001;
        if (!wk.e.CleanBoneMatrixWeights) return;
        let Rk;
        if (!(kk.skeletonId > -1)) return;
        {
          const Bk = Fk.XN().getLastSkeletonById(kk.skeletonId);
          if (!Bk) return;
          Rk = Bk.bones.length
        }
        const tk = Fk.getVerticesData(Xk.n.MatricesIndicesKind),
          ak = Fk.getVerticesData(Xk.n.MatricesIndicesExtraKind),
          bk = kk.matricesWeights,
          dk = kk.matricesWeightsExtra,
          sk = kk.numBoneInfluencer,
          Vk = bk.length;
        for (let Xk = 0; Xk < Vk; Xk += 4) {
          let kk = 0,
            Fk = -1;
          for (let Rk = 0; Rk < 4; Rk++) {
            const tk = bk[Xk + Rk];
            kk += tk, tk < Bk && Fk < 0 && (Fk = Rk)
          }
          if (dk)
            for (let Rk = 0; Rk < 4; Rk++) {
              const tk = dk[Xk + Rk];
              kk += tk, tk < Bk && Fk < 0 && (Fk = Rk + 4)
            }
          if ((Fk < 0 || Fk > sk - 1) && (Fk = sk - 1), kk > Bk) {
            const Fk = 1 / kk;
            for (let kk = 0; kk < 4; kk++) bk[Xk + kk] *= Fk;
            if (dk)
              for (let kk = 0; kk < 4; kk++) dk[Xk + kk] *= Fk
          } else Fk >= 4 ? (dk[Xk + Fk - 4] = 1 - kk, ak[Xk + Fk - 4] = Rk) : (bk[Xk + Fk] = 1 - kk, tk[Xk + Fk] = Rk)
        }
        Fk.setVerticesData(Xk.n.MatricesIndicesKind, tk), kk.matricesWeightsExtra && Fk.setVerticesData(Xk.n.MatricesIndicesExtraKind, ak)
      }
      static Parse(kk, Fk, Bk) {
        const tk = new mk(kk.id, Fk, void 0, kk.updatable);
        return tk._loadedUniqueId = kk.uniqueId, Jk.b && Jk.b.AddTagsTo(tk, kk.tags), kk.delayLoadingFile ? (tk.delayLoadState = 4, tk.delayLoadingFile = Bk + kk.delayLoadingFile, tk._boundingInfo = new dk.b(Rk.s.FromArray(kk.boundingBoxMinimum), Rk.s.FromArray(kk.boundingBoxMaximum)), tk._delayInfo = [], kk.hasUVs && tk._delayInfo.push(Xk.n.UVKind), kk.hasUVs2 && tk._delayInfo.push(Xk.n.UV2Kind), kk.hasUVs3 && tk._delayInfo.push(Xk.n.UV3Kind), kk.hasUVs4 && tk._delayInfo.push(Xk.n.UV4Kind), kk.hasUVs5 && tk._delayInfo.push(Xk.n.UV5Kind), kk.hasUVs6 && tk._delayInfo.push(Xk.n.UV6Kind), kk.hasColors && tk._delayInfo.push(Xk.n.ColorKind), kk.hasMatricesIndices && tk._delayInfo.push(Xk.n.MatricesIndicesKind), kk.hasMatricesWeights && tk._delayInfo.push(Xk.n.MatricesWeightsKind), tk._delayLoadingFunction = ak.e.ImportVertexData) : ak.e.ImportVertexData(kk, tk), Fk.pushGeometry(tk, !0), tk
      }
    }
  },
  39879: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk,
      d: () => ek
    });
    var Rk = Bk(36758),
      tk = Bk(38320),
      ak = Bk(39853),
      Xk = Bk(39817),
      bk = Bk(38318),
      wk = Bk(39857),
      dk = Bk(39541),
      sk = Bk(36798);
    class Vk extends ak.b {
      constructor(kk, Fk) {
        super(kk, Fk.XN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Fk.E_(this), this._sourceMesh = Fk, this._unIndexed = Fk._unIndexed, this.position.sBk(Fk.position), this.rotation.sBk(Fk.rotation), this.ta.sBk(Fk.ta), Fk.rotationQuaternion && (this.rotationQuaternion = Fk.rotationQuaternion.clone()), this.animations = Fk.animations.slice();
        for (const Bk of Fk.getAnimationRanges()) null != Bk && this.createAnimationRange(Bk.name, Bk.from, Bk.to);
        if (this.infiniteDistance = Fk.infiniteDistance, this.setPivotMatrix(Fk.getPivotMatrix()), Fk.skeleton || Fk.morphTargetManager || !Fk.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const kk = Fk.ZH();
          this.buildBoundingInfo(kk.minimum, kk.maximum)
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
      set receiveShadows(kk) {
        this._sourceMesh?.receiveShadows !== kk && tk.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(kk) {
        this._sourceMesh?.material !== kk && tk.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(kk) {
        this._sourceMesh?.visibility !== kk && tk.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(kk) {
        this._sourceMesh?.skeleton !== kk && tk.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(kk) {
        this._sourceMesh && kk !== this._sourceMesh.renderingGroupId && tk.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(kk) {
        this._sourceMesh && kk !== this._sourceMesh.meshBlendingTag && tk.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get rRk() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(kk) {
        return this._sourceMesh.createInstance(kk)
      }
      isReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(kk, !0)
      }
      getVerticesData(kk, Fk, Bk) {
        return this._sourceMesh.getVerticesData(kk, Fk, Bk)
      }
      copyVerticesData(kk, Fk) {
        this._sourceMesh.copyVerticesData(kk, Fk)
      }
      getVertexBuffer(kk, Fk) {
        return this._sourceMesh.getVertexBuffer(kk, Fk)
      }
      setVerticesData(kk, Fk, Bk, Rk) {
        return this.rRk && this.rRk.setVerticesData(kk, Fk, Bk, Rk), this.rRk
      }
      updateVerticesData(kk, Fk, Bk, Rk) {
        return this.rRk && this.rRk.updateVerticesData(kk, Fk, Bk, Rk), this.rRk
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.rRk && this.rRk.setIndices(kk, Fk), this.rRk
      }
      isVerticesDataPresent(kk) {
        return this._sourceMesh.isVerticesDataPresent(kk)
      }
      hBk() {
        return this._sourceMesh.hBk()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.ZH().isLocked) return this;
        kk = "object" === typeof Fk ? Fk : {
          applySkeleton: Fk,
          applyMorph: Bk
        };
        const Rk = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(kk, null, dk.n.PositionKind), Rk), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(kk, Fk) {
        if (super._activate(kk, Fk), this._sourceMesh.AY || tk.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, kk), Fk) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== wk.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Rk.c);
          const kk = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Rk.l.Qe[7].sBk(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.sBk(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.sBk(Rk.l.Qe[7]), this._currentLOD._masterMesh = kk, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get mN() {
        return !0
      }
      getLOD(kk) {
        if (!kk) return this;
        const Fk = this.rRk.getLODLevels();
        if (Fk && 0 !== Fk.length) {
          const Fk = this.ZH();
          this._currentLOD = this.rRk.getLOD(kk, Fk.JRk)
        } else this._currentLOD = this.rRk;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(kk) {
        return this.rRk._preActivateForIntermediateRendering(kk)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.AY)
          for (let kk = 0; kk < this._sourceMesh.AY.length; kk++) this._sourceMesh.AY[kk].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.ZH().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(kk);
        if (bk.e.DeepCopy(this, Rk, ["name", "AY", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "rRk", "mN", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "GRk", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "SXk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Fk && (Rk.parent = Fk), !Bk)
          for (let tk = 0; tk < this.XN().meshes.length; tk++) {
            const kk = this.XN().meshes[tk];
            kk.parent === this && kk.clone(kk.name, Rk)
          }
        return Rk.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Rk), Rk
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.N_(this), super.dispose(kk, Fk)
      }
      _serializeAsParent(kk) {
        super._serializeAsParent(kk), kk.parentId = this._sourceMesh.uniqueId, kk.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0, Fk && Fk.newSourcedMesh);
        Rk && Bk && Bk(this, Rk);
        for (const tk of this.getChildTransformNodes(!0)) tk.instantiateHierarchy(Rk, Fk, Bk);
        return Rk
      }
    }
    let Jk = !1;

    function Ak(kk, Fk, Bk, Rk, tk) {
      for (let ak = 0; ak < Fk.length; ak++) {
        const Xk = kk[Fk[ak]] ?? 0,
          bk = tk + Bk[ak];
        Xk.toArray ? Xk.toArray(Rk, bk) : Xk.copyToArray ? Xk.copyToArray(Rk, bk) : Rk[bk] = Xk
      }
    }

    function ek() {
      Jk || (Jk = !0, Xk.b._instancedMeshFactory = (kk, Fk) => {
        const Bk = new Vk(kk, Fk);
        if (Fk.gH) {
          Bk.gH = {};
          for (const kk in Fk.gH) Bk.gH[kk] = Fk.gH[kk]
        }
        return Bk
      }, Xk.b.prototype.uH = function(kk, Fk) {
        if (!this.gH) {
          this.gH = {};
          for (const kk of this.instances) kk.gH = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.ne().getCaps().vertexArrayObject ? {} : void 0
        }), this.gH[kk] = null, this._userInstancedBuffersStorage.strides[kk] = Fk;
        const Bk = this._userInstancedBuffersStorage;
        Bk.interleavedKinds = [], Bk.interleavedOffsets = [], Bk.interleavedRowStride = 0;
        for (const Rk in Bk.strides) Bk.interleavedKinds.push(Rk), Bk.interleavedOffsets.push(Bk.interleavedRowStride), Bk.interleavedRowStride += Bk.strides[Rk];
        Bk.interleavedData = new Float32Array(32 * Bk.interleavedRowStride);
        for (const Rk in Bk.interleavedBuffers) Bk.interleavedBuffers[Rk].buffer.dispose();
        Bk.interleavedBuffers = {}, Bk.vertexBuffers[kk] = null;
        for (const Rk of this.instances) Rk.gH[kk] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Xk.b.prototype._processInstancedBuffers = function(kk, Fk) {
        const Bk = this._userInstancedBuffersStorage,
          Rk = Bk.interleavedRowStride;
        if (!Rk) return;
        const tk = kk ? kk.length : 0,
          ak = (tk + 1) * Rk;
        let Xk = Bk.interleavedData;
        if (Xk.length < ak) {
          let kk = Xk.length;
          for (; kk < ak;) kk *= 2;
          Xk = Bk.interleavedData = new Float32Array(kk)
        }
        const bk = Bk.interleavedKinds,
          wk = Bk.interleavedOffsets;
        let sk = 0;
        Fk && (Ak(this.gH, bk, wk, Xk, sk), sk += Rk);
        for (let dk = 0; dk < tk; dk++) Ak(kk[dk].gH, bk, wk, Xk, sk), sk += Rk;
        let Vk = "shared",
          Jk = Bk.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Vk = this._instanceDataStorage.engine.currentRenderPassId, Bk.renderPasses || (Bk.renderPasses = {}), Bk.renderPasses[Vk] || (Bk.renderPasses[Vk] = {}), Jk = Bk.renderPasses[Vk]);
        const ek = Bk.interleavedBuffers[Vk];
        let yk = !ek || ek.data !== Xk;
        for (let dk = 0; !yk && dk < bk.length; dk++) yk = !Jk[bk[dk]];
        if (!yk) return void ek.buffer.updateDirectly(Xk, 0);
        ek?.buffer.dispose();
        const fk = new dk.d(this.ne(), Xk, !0, Rk, !1, !0);
        for (let dk = 0; dk < bk.length; dk++) {
          const kk = bk[dk],
            Fk = fk.createVertexBuffer(kk, wk[dk], Bk.strides[kk]);
          Fk.hashCode += Fk.byteOffset * 2 ** 24, Jk[kk] = Fk
        }
        Bk.interleavedBuffers[Vk] = {
          buffer: fk,
          data: Xk
        }, this._invalidateInstanceVertexArrayObject()
      }, Xk.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const kk in this._userInstancedBuffersStorage.vertexArrayObjects) this.ne().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[kk]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Xk.b.prototype._disposeInstanceSpecificData = function() {
        for (const Fk in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Fk].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Fk in this.gH) this._userInstancedBuffersStorage.vertexBuffers[Fk] && this._userInstancedBuffersStorage.vertexBuffers[Fk].dispose();
        const kk = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (kk) {
          for (const Fk in kk) kk[Fk].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.gH = {}
      }, (0, sk.d)("BABYLON.InstancedMesh", Vk))
    }
  },
  39817: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Ik,
      d: () => kF,
      e: () => Zk
    });
    var Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk = Bk(36781),
      Wk = Bk(39492),
      vk = Bk(39436),
      ik = Bk(38318),
      Yk = Bk(39420),
      Lk = Bk(39823),
      Ok = Bk(39623),
      Ek = Bk(36758),
      Sk = Bk(36917),
      Nk = Bk(39628),
      Hk = Bk(39541),
      uk = Bk(39829),
      Mk = Bk(39836),
      gk = Bk(39853),
      Uk = Bk(39703),
      ck = Bk(39695),
      Gk = Bk(39785),
      Tk = Bk(39861),
      rk = Bk(39844),
      Dk = Bk(39414),
      zk = Bk(38320),
      Pk = Bk(36798),
      hk = Bk(39296),
      qk = Bk(39575);
    class Ck {
      constructor(kk, Fk) {
        this.distanceOrScreenCoverage = kk, this.mesh = Fk
      }
    }
    class Zk {}
    class pk {
      constructor() {
        this.batchCache = new xk(this), this.batchCacheReplacementModeInFrozenMode = new xk(this), this.instancesBufferSize = 2048
      }
    }
    class Kk {
      constructor() {
        this.renderPasses = {}
      }
    }
    class xk {
      constructor(kk) {
        this.parent = kk, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class jk {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class lk {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const nk = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Ik extends gk.b {
      static _GetDefaultSideOrientation(kk) {
        return kk || Ik.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(kk) {
        this._internalMeshDataInfo._useLODScreenCoverage = kk, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(kk) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== kk && (kk && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Hk.n.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Hk.n.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = kk, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new mk.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new mk.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new mk.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new mk.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new mk.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(kk) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(kk)
      }
      get GRk() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(kk) {
        this._internalMeshDataInfo._forcedInstanceCount = kk
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(kk) {
        this._internalMeshDataInfo._sideOrientation = kk, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === kk || !this._scene.useRightHandedSystem && 0 === kk
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(kk) {
        this.sideOrientation = kk, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(kk) {
        this._internalMeshDataInfo._overrideRenderingFillMode = kk
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(kk) {
        kk && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (kk.sideOrientation = null), this._setMaterial(kk)
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
      set isUnIndexed(kk) {
        this._unIndexed !== kk && (this._unIndexed = kk, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const kk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return kk ? kk.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const kk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return kk ? kk.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(kk) {
        this._instanceDataStorage.manualUpdate = kk
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(kk) {
        this._instanceDataStorage.previousManualUpdate = kk
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(kk) {
        this._instanceDataStorage.forceMatrixUpdates = kk
      }
      _copySource(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tk = this.XN();
        if (kk._geometry && kk._geometry.applyToMesh(this), ik.e.DeepCopy(kk, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "GRk", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "mN", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "SXk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = kk, tk.useClonedMeshMap && (kk._internalMeshDataInfo.meshMap || (kk._internalMeshDataInfo.meshMap = {}), kk._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = kk._originalBuilderSideOrientation, this._creationDataStorage = kk._creationDataStorage, kk._ranges) {
          const Fk = kk._ranges;
          for (const kk in Fk) Object.prototype.hasOwnProperty.call(Fk, kk) && Fk[kk] && this.createAnimationRange(kk, Fk[kk].from, Fk[kk].to)
        }
        if (kk.metadata && kk.metadata.clone ? this.metadata = kk.metadata.clone() : this.metadata = kk.metadata, this._internalMetadata = kk._internalMetadata, this.meshBlendingTag = kk.meshBlendingTag, Yk.b && Yk.b.HasTags(kk) && Yk.b.AddTagsTo(this, Yk.b.GetTags(kk, !0)), this.lY(kk.isEnabled(!1)), this.parent = kk.parent, this.setPivotMatrix(kk.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + kk.id, this.material = kk.material, !Fk) {
          const tk = kk.getDescendants(!0);
          for (let kk = 0; kk < tk.length; kk++) {
            const ak = tk[kk];
            ak._isMesh ? (nk.parent = this, nk.doNotCloneChildren = Fk, nk.clonePhysicsImpostor = Bk, nk.cloneThinInstances = Rk, ak.clone(this.name + "." + ak.name, nk)) : ak.clone && ak.clone(this.name + "." + ak.name, this)
          }
        }
        if (kk.morphTargetManager && (this.morphTargetManager = kk.morphTargetManager), (0, hk.c)(tk.getPhysicsEngine)) {
          const Fk = tk.getPhysicsEngine();
          if (Bk && Fk)
            if (1 === Fk.getPluginVersion()) {
              const Bk = Fk.getImpostorForPhysicsObject(kk);
              Bk && (this.physicsImpostor = Bk.clone(this))
            } else 2 === Fk.getPluginVersion() && kk.physicsBody && kk.physicsBody.clone(this)
        }
        for (let ak = 0; ak < tk.fY.length; ak++) {
          const Fk = tk.fY[ak];
          Fk.emitter === kk && Fk.clone(Fk.name, this)
        }
        if (this.skeleton = kk.skeleton, Rk && (kk._thinInstanceDataStorage.matrixData ? (this.x_("matrix", new Float32Array(kk._thinInstanceDataStorage.matrixData), 16, !kk._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = kk._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, kk._userThinInstanceBuffersStorage)) {
          const Fk = kk._userThinInstanceBuffersStorage;
          for (const kk in Fk.data) this.x_(kk, new Float32Array(Fk.data[kk]), Fk.strides[kk], !Fk.vertexBuffers?.[kk]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[kk] = Fk.sizes[kk]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(kk) {
        let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ak = arguments.length > 4 ? arguments[4] : void 0,
          Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(kk, Bk), this._internalMeshDataInfo = new lk, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new jk, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Ik.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Bk = this.XN(), this._instanceDataStorage = new Kk, this._instanceDataStorage.engine = Bk.ne(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new pk), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (kk, Fk, Bk) => {
          kk && Bk && (this._uniformBuffer ? this.transferToEffect(Fk) : Bk.bindOnlyWorldMatrix(Fk))
        };
        let bk = !1;
        if (Rk && void 0 === Rk._addToSceneRootNodes) {
          const kk = Rk;
          Fk = kk.parent ?? null, tk = kk.source ?? null, ak = kk.doNotCloneChildren ?? !1, Xk = kk.clonePhysicsImpostor ?? !0, bk = kk.cloneThinInstances ?? !1
        } else Fk = Rk;
        tk && this._copySource(tk, ak, Xk, bk), null !== Fk && (this.parent = Fk), this._instanceDataStorage.hardwareInstancedRendering = this.ne().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = kk => {
          kk.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new mk.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), tk && tk.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = 0 === this.getTotalVertices() || Fk && Fk.doNotInstantiate && (!0 === Fk.doNotInstantiate || Fk.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Rk.parent = kk || this.parent, Rk.position = this.position.clone(), Rk.ta = this.ta.clone(), this.rotationQuaternion ? Rk.rotationQuaternion = this.rotationQuaternion.clone() : Rk.rotation = this.rotation.clone(), Bk && Bk(this, Rk);
        for (const tk of this.getChildTransformNodes(!0)) "InstancedMesh" === tk.getClassName() && "Mesh" === Rk.getClassName() && tk.rRk === this ? tk.instantiateHierarchy(Rk, {
          doNotInstantiate: Fk && Fk.doNotInstantiate || !1,
          newSourcedMesh: Rk
        }, Bk) : tk.instantiateHierarchy(Rk, Fk, Bk);
        return Rk
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(kk) {
        let Fk = super.toString(kk);
        if (Fk += ", n vertices: " + this.getTotalVertices(), Fk += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let Bk = 0; Bk < this.animations.length; Bk++) Fk += ", animation[0]: " + this.animations[Bk].toString(kk);
        if (kk)
          if (this._geometry) {
            const kk = this.hBk(),
              Bk = this.getVerticesData(Hk.n.PositionKind);
            Bk && kk && (Fk += ", flat shading: " + (Bk.length / 3 === kk.length ? "YES" : "NO"))
          } else Fk += ", flat shading: UNKNOWN";
        return Fk
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const kk of this.instances) kk._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const kk = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Fk, Bk) => Fk.distanceOrScreenCoverage < Bk.distanceOrScreenCoverage ? kk : Fk.distanceOrScreenCoverage > Bk.distanceOrScreenCoverage ? -kk : 0))
      }
      addLODLevel(kk, Fk) {
        if (Fk && Fk._masterMesh) return zk.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const Bk = new Ck(kk, Fk);
        return this._internalMeshDataInfo._LODLevels.push(Bk), Fk && (Fk._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(kk) {
        const Fk = this._internalMeshDataInfo;
        for (let Bk = 0; Bk < Fk._LODLevels.length; Bk++) {
          const Rk = Fk._LODLevels[Bk];
          if (Rk.distanceOrScreenCoverage === kk) return Rk.mesh
        }
        return null
      }
      removeLODLevel(kk) {
        const Fk = this._internalMeshDataInfo;
        for (let Bk = 0; Bk < Fk._LODLevels.length; Bk++) Fk._LODLevels[Bk].mesh === kk && (Fk._LODLevels.splice(Bk, 1), kk && (kk._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(kk, Fk) {
        const Bk = this._internalMeshDataInfo;
        if (!Bk._LODLevels || 0 === Bk._LODLevels.length) return this;
        const Rk = Fk || this.ZH().JRk,
          tk = kk.mode === Ok.c.ORTHOGRAPHIC_CAMERA ? kk.minZ : Rk.centerWorld.subtract(kk.globalPosition).length();
        let ak = tk,
          Xk = 1;
        if (Bk._useLODScreenCoverage) {
          const Fk = kk.screenArea;
          let Bk = Rk.radiusWorld * kk.minZ / tk;
          Bk = Bk * Bk * Math.PI, ak = Bk / Fk, Xk = -1
        }
        if (Xk * Bk._LODLevels[Bk._LODLevels.length - 1].distanceOrScreenCoverage > Xk * ak) return this.onLODLevelSelection && this.onLODLevelSelection(ak, this, this), this;
        for (let bk = 0; bk < Bk._LODLevels.length; bk++) {
          const kk = Bk._LODLevels[bk];
          if (Xk * kk.distanceOrScreenCoverage < Xk * ak) {
            if (kk.mesh) {
              if (4 === kk.mesh.delayLoadState) return kk.mesh._checkDelayState(), this;
              if (2 === kk.mesh.delayLoadState) return this;
              kk.mesh._preActivate(), kk.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(ak, this, kk.mesh), kk.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(ak, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(kk, Fk, Bk, Rk) {
        if (!this._geometry) return null;
        let tk = Rk ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[kk]?.getFloatData(this.instances.length + 1, Bk || Fk && 1 !== this._geometry.meshes.length);
        return tk || (tk = this._geometry.getVerticesData(kk, Fk, Bk)), tk
      }
      copyVerticesData(kk, Fk) {
        this._geometry && this._geometry.copyVerticesData(kk, Fk)
      }
      getVertexBuffer(kk, Fk) {
        return this._geometry ? (Fk ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[kk]) ?? this._geometry.getVertexBuffer(kk) : null
      }
      isVerticesDataPresent(kk, Fk) {
        return this._geometry ? !Fk && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[kk] || this._geometry.isVerticesDataPresent(kk) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(kk)
      }
      isVertexBufferUpdatable(kk, Fk) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(kk);
        if (!Fk) {
          const Fk = this._userInstancedBuffersStorage?.vertexBuffers[kk];
          if (Fk) return Fk.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(kk)
      }
      getVerticesDataKinds(kk) {
        if (!this._geometry) {
          const kk = [];
          if (this._delayInfo)
            for (const Fk of this._delayInfo) kk.push(Fk);
          return kk
        }
        const Fk = this._geometry.getVerticesDataKinds();
        if (!kk && this._userInstancedBuffersStorage)
          for (const Bk in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Fk.indexOf(Bk) && Fk.push(Bk);
        return Fk
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      hBk(kk, Fk) {
        return this._geometry ? this._geometry.hBk(kk, Fk) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(kk)) return !1;
        if (!this.AY || 0 === this.AY.length) return !0;
        if (!kk) return !0;
        const Bk = this.ne(),
          Rk = this.XN(),
          tk = Fk || Bk.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const ak = this.material || Rk.defaultMaterial;
        if (ak)
          if (ak._storeEffectOnSubMeshes)
            for (const bk of this.AY) {
              const kk = bk.Ry();
              if (kk)
                if (kk._storeEffectOnSubMeshes) {
                  if (!kk.isReadyForSubMesh(this, bk, tk)) return !1
                } else if (!kk.isReady(this, tk)) return !1
            } else if (!ak.isReady(this, tk)) return !1;
        const Xk = Bk.currentRenderPassId;
        for (const bk of this.lightSources) {
          const kk = bk.getShadowGenerators();
          if (!kk) continue;
          const Fk = kk.values();
          for (let Rk = Fk.next(); !0 !== Rk.done; Rk = Fk.next()) {
            const kk = Rk.value;
            if (kk && (!kk.getShadowMap()?.renderList || kk.getShadowMap()?.renderList && -1 !== kk.getShadowMap()?.renderList?.indexOf(this))) {
              const Fk = kk.getShadowMap().renderPassIds ?? [Bk.currentRenderPassId];
              for (let Rk = 0; Rk < Fk.length; ++Rk) {
                Bk.currentRenderPassId = Fk[Rk];
                for (const Fk of this.AY)
                  if (!kk.isReady(Fk, tk, Fk.Ry()?.needAlphaBlendingForMesh(this) ?? !1)) return Bk.currentRenderPassId = Xk, !1
              }
              Bk.currentRenderPassId = Xk
            }
          }
        }
        for (const bk of this._internalMeshDataInfo._LODLevels)
          if (bk.mesh && !bk.mesh.isReady(tk)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      ty() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(kk) {
        this._instanceDataStorage.overridenInstanceCount = kk
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const kk = this._instanceDataStorage.engine.currentRenderPassId;
        let Fk = this._instanceDataStorage.renderPasses[kk];
        return Fk || (Fk = new pk, this._instanceDataStorage.renderPasses[kk] = Fk), Fk
      }
      _preActivate() {
        const kk = this._internalMeshDataInfo,
          Fk = this.XN().getRenderId();
        return kk._preActivateId === Fk || (kk._preActivateId = Fk, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(kk) {
        const Fk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Fk.visibleInstances && (Fk.visibleInstances.intermediateDefaultRenderId = kk), this
      }
      _registerInstanceForRenderId(kk, Fk) {
        const Bk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Bk.visibleInstances || (Bk.visibleInstances = {
          defaultRenderId: Fk,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Bk.visibleInstances[Fk] || (void 0 === Bk.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Bk.visibleInstances[Bk.previousRenderId], Bk.previousRenderId = Fk, Bk.visibleInstances[Fk] = new Array), Bk.visibleInstances[Fk].push(kk), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Fy || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.ZH().isLocked) return this;
        kk = "object" === typeof Fk ? Fk : {
          applySkeleton: Fk,
          applyMorph: Bk
        };
        const Rk = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(kk, null, Hk.n.PositionKind), Rk), this
      }
      _createGlobalSubMesh(kk) {
        const Fk = this.getTotalVertices();
        if (!Fk || !this.hBk()) return null;
        if (this.AY && this.AY.length > 0) {
          const Bk = this.hBk();
          if (!Bk) return null;
          const Rk = Bk.length;
          let tk = !1;
          if (kk) tk = !0;
          else
            for (const kk of this.AY) {
              if (kk.indexStart + kk.indexCount > Rk) {
                tk = !0;
                break
              }
              if (kk.verticesStart + kk.verticesCount > Fk) {
                tk = !0;
                break
              }
            }
          if (!tk) return this.AY[0]
        }
        return this.releaseSubMeshes(), new Uk.d(0, 0, Fk, 0, this.getTotalIndices() || (this.isUnIndexed ? Fk : 0), this)
      }
      subdivide(kk) {
        if (kk < 1) return;
        const Fk = this.getTotalIndices();
        let Bk = Fk / kk | 0,
          Rk = 0;
        for (; Bk % 3 !== 0;) Bk++;
        this.releaseSubMeshes();
        for (let tk = 0; tk < kk && !(Rk >= Fk); tk++) Uk.d.CreateFromIndices(0, Rk, Rk + Bk >= Fk ? Fk - Rk : Bk, this, void 0, !1), Rk += Bk;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(kk, Fk, Bk, Rk);
        else {
          const Rk = new uk.e;
          Rk.set(Fk, kk);
          const tk = this.XN();
          new Mk.e(Mk.e.RandomId(), tk, Rk, Bk, this)
        }
        return this
      }
      removeVerticesData(kk) {
        this._geometry && this._geometry.removeVerticesData(kk)
      }
      markVerticesDataAsUpdatable(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Bk = this.getVertexBuffer(kk);
        Bk && Bk.isUpdatable() !== Fk && this.setVerticesData(kk, this.getVerticesData(kk), Fk)
      }
      setVerticesBuffer(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Mk.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(kk, Bk, Fk), this
      }
      updateVerticesData(kk, Fk, Bk, Rk) {
        return this._geometry ? (Rk ? (this.makeGeometryUnique(), this.updateVerticesData(kk, Fk, Bk, !1)) : this._geometry.updateVerticesData(kk, Fk, Bk), this) : this
      }
      updateMeshPositions(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Bk = this.getVerticesData(Hk.n.PositionKind);
        if (!Bk) return this;
        if (kk(Bk), this.updateVerticesData(Hk.n.PositionKind, Bk, !1, !1), Fk) {
          const kk = this.hBk(),
            Fk = this.getVerticesData(Hk.n.NormalKind);
          if (!Fk) return this;
          uk.e.ComputeNormals(Bk, kk, Fk), this.updateVerticesData(Hk.n.NormalKind, Fk, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const kk = this._geometry,
          Fk = this._geometry.copy(Mk.e.RandomId());
        return kk.releaseForMesh(this, !0), Fk.applyToMesh(this), this
      }
      setIndexBuffer(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tk = this._geometry;
        tk || (tk = new Mk.e(Mk.e.RandomId(), this.XN(), void 0, void 0, this)), tk.setIndexBuffer(kk, Fk, Bk, Rk)
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(kk, Fk, Bk, Rk);
        else {
          const Rk = new uk.e;
          Rk.indices = kk;
          const tk = this.XN();
          new Mk.e(Mk.e.RandomId(), tk, Rk, Bk, this, Fk)
        }
        return this
      }
      updateIndices(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(kk, Fk, Bk), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(kk, Fk, Bk) {
        let Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const tk = this.XN().ne();
        let ak;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Bk) === ck.c.WireFrameFillMode) ak = kk._getLinesIndexBuffer(this.hBk(), tk);
          else ak = null;
        else switch (this._getRenderingFillMode(Bk)) {
          case ck.c.PointFillMode:
            ak = null;
            break;
          case ck.c.WireFrameFillMode:
            ak = kk._getLinesIndexBuffer(this.hBk(), tk);
            break;
          default:
          case ck.c.TriangleFillMode:
            ak = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Fk, ak, Rk)
      }
      _bindDirect(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(kk), Bk && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const kk = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Fk in kk) this._userInstancedBuffersStorage.vertexBuffers[Fk] = kk[Fk]
          }
          this._geometry._bind(kk, Fk, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(kk, Fk);
        return this
      }
      _draw(kk, Fk, Bk) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Rk = this.XN().ne(),
          tk = Rk._currentMaterialContext,
          ak = tk && tk.useVertexPulling;
        return this._unIndexed && Fk !== ck.c.WireFrameFillMode || Fk == ck.c.PointFillMode ? Rk.drawArraysType(Fk, kk.verticesStart, kk.verticesCount, this.forcedInstanceCount || Bk) : Fk == ck.c.WireFrameFillMode ? Rk.drawElementsType(Fk, 0, kk._linesIndexCount, this.forcedInstanceCount || Bk) : ak ? Rk.drawArraysType(Fk, kk.indexStart, kk.indexCount, this.forcedInstanceCount || Bk) : Rk.drawElementsType(Fk, kk.indexStart, kk.indexCount, this.forcedInstanceCount || Bk), this
      }
      registerBeforeRender(kk) {
        return this.onBeforeRenderObservable.add(kk), this
      }
      unregisterBeforeRender(kk) {
        return this.onBeforeRenderObservable.removeCallback(kk), this
      }
      registerAfterRender(kk) {
        return this.onAfterRenderObservable.add(kk), this
      }
      unregisterAfterRender(kk) {
        return this.onAfterRenderObservable.removeCallback(kk), this
      }
      _getInstancesRenderList(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Fk) return Bk.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[kk] = !1, Bk.batchCacheReplacementModeInFrozenMode.renderSelf[kk] = !0, Bk.batchCacheReplacementModeInFrozenMode;
          if (Bk.previousBatch) return Bk.previousBatch
        }
        const Rk = this.XN(),
          tk = Rk._isInIntermediateRendering(),
          ak = tk ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Xk = Bk.batchCache;
        if (Xk.mustReturn = !1, Xk.renderSelf[kk] = Fk || !ak && this.isEnabled() && this.isVisible, Xk.visibleInstances[kk] = null, Bk.visibleInstances && !Fk) {
          const Fk = Bk.visibleInstances,
            ak = Rk.getRenderId(),
            bk = tk ? Fk.intermediateDefaultRenderId : Fk.defaultRenderId;
          Xk.visibleInstances[kk] = Fk[ak], !Xk.visibleInstances[kk] && bk && (Xk.visibleInstances[kk] = Fk[bk])
        }
        return Xk.hardwareInstancedRendering[kk] = !Fk && this._instanceDataStorage.hardwareInstancedRendering && null !== Xk.visibleInstances[kk] && void 0 !== Xk.visibleInstances[kk], Bk.previousBatch = Xk, Xk
      }
      _updateInstancedBuffers(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = Fk.visibleInstances[kk._id],
          bk = Xk ? Xk.length : 0,
          wk = Fk.parent,
          dk = this._instanceDataStorage;
        let sk = wk.instancesBuffer,
          Vk = wk.instancesPreviousBuffer,
          Jk = 0,
          Ak = 0;
        const ek = Fk.renderSelf[kk._id],
          yk = this._scene.floatingOriginOffset,
          fk = !sk || Bk !== wk.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !wk.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || dk.isFrozen && !fk) Ak = (ek ? 1 : 0) + bk;
        else {
          const Fk = this.getWorldMatrix();
          if (ek) {
            this._scene.needsPreviousWorldMatrices && (dk.masterMeshPreviousWorldMatrix ? (dk.masterMeshPreviousWorldMatrix.copyToArray(wk.instancesPreviousData, Jk), dk.masterMeshPreviousWorldMatrix.sBk(Fk)) : (dk.masterMeshPreviousWorldMatrix = Fk.clone(), dk.masterMeshPreviousWorldMatrix.copyToArray(wk.instancesPreviousData, Jk))), Fk.copyToArray(wk.instancesData, Jk);
            const kk = Fk.PBk();
            wk.instancesData[Jk + 12] = kk[12] - yk.x, wk.instancesData[Jk + 13] = kk[13] - yk.y, wk.instancesData[Jk + 14] = kk[14] - yk.z, Jk += 16, Ak++
          }
          if (Xk) {
            if (Ik.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && kk.Ry()?.needAlphaBlendingForMesh(kk.getRenderingMesh())) {
              const kk = this._scene.activeCamera.globalPosition;
              for (let Fk = 0; Fk < Xk.length; Fk++) {
                const Bk = Xk[Fk];
                Bk._distanceToCamera = Ek.s.Distance(Bk.ZH().JRk.centerWorld, kk)
              }
              Xk.sort(((kk, Fk) => kk._distanceToCamera > Fk._distanceToCamera ? -1 : kk._distanceToCamera < Fk._distanceToCamera ? 1 : 0))
            }
            for (let kk = 0; kk < Xk.length; kk++) {
              const Fk = Xk[kk],
                Bk = Fk.getWorldMatrix();
              Bk.copyToArray(wk.instancesData, Jk), this._scene.needsPreviousWorldMatrices && (Fk._previousWorldMatrix ? (Fk._previousWorldMatrix.copyToArray(wk.instancesPreviousData, Jk), Fk._previousWorldMatrix.sBk(Bk)) : (Fk._previousWorldMatrix = Bk.clone(), Fk._previousWorldMatrix.copyToArray(wk.instancesPreviousData, Jk)));
              const Rk = Bk.PBk();
              wk.instancesData[Jk + 12] = Rk[12] - yk.x, wk.instancesData[Jk + 13] = Rk[13] - yk.y, wk.instancesData[Jk + 14] = Rk[14] - yk.z, Jk += 16, Ak++
            }
          }
        }
        if (fk) {
          let kk;
          if (sk && sk.dispose(), Vk && Vk.dispose(), sk = new Hk.d(Rk, wk.instancesData, !0, 16, !1, !0), wk.instancesBuffer = sk, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.ne().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) kk = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Fk = this._instanceDataStorage.engine.currentRenderPassId;
            kk = this._userInstancedBuffersStorage.renderPasses[Fk], kk || (this._userInstancedBuffersStorage.renderPasses[Fk] = kk = {})
          }
          kk.world0 = sk.createVertexBuffer("world0", 0, 4), kk.world1 = sk.createVertexBuffer("world1", 4, 4), kk.world2 = sk.createVertexBuffer("world2", 8, 4), kk.world3 = sk.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Vk = new Hk.d(Rk, wk.instancesPreviousData, !0, 16, !1, !0), wk.instancesPreviousBuffer = Vk, kk.previousWorld0 = Vk.createVertexBuffer("previousWorld0", 0, 4), kk.previousWorld1 = Vk.createVertexBuffer("previousWorld1", 4, 4), kk.previousWorld2 = Vk.createVertexBuffer("previousWorld2", 8, 4), kk.previousWorld3 = Vk.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (sk.updateDirectly(wk.instancesData, 0, Ak), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Vk.updateDirectly(wk.instancesPreviousData, 0, Ak));
        this._processInstancedBuffers(Xk, ek), ak && void 0 !== tk && (this.XN()._activeIndices.addCount(kk.indexCount * Ak, !1), Rk._currentDrawContext && (Rk._currentDrawContext.useInstancing = !0), this._bind(kk, ak, tk), this._draw(kk, tk, Ak)), !this._scene.needsPreviousWorldMatrices || fk || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Vk.updateDirectly(wk.instancesData, 0, Ak)
      }
      _renderWithInstances(kk, Fk, Bk, Rk, tk) {
        const ak = Bk.visibleInstances[kk._id],
          Xk = ak ? ak.length : 0,
          bk = Bk.parent,
          wk = bk.instancesBufferSize,
          dk = 16 * (Xk + 1) * 4;
        for (; bk.instancesBufferSize < dk;) bk.instancesBufferSize *= 2;
        return bk.instancesData && wk == bk.instancesBufferSize || (bk.instancesData = new Float32Array(bk.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !bk.instancesPreviousData || wk != bk.instancesBufferSize) && (bk.instancesPreviousData = new Float32Array(bk.instancesBufferSize / 4)), this._updateInstancedBuffers(kk, Bk, wk, tk, Fk, Rk), tk.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(kk, Fk, Bk, Rk) {
        const tk = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.XN()._activeIndices.addCount(kk.indexCount * tk, !1), Rk._currentDrawContext && (Rk._currentDrawContext.useInstancing = !0), this._bind(kk, Bk, Fk), this._draw(kk, Fk, tk), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, tk) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Rk.unbindInstanceAttributes()
      }
      _processInstancedBuffers(kk, Fk) {}
      _processRendering(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = this.XN(),
          dk = wk.ne();
        if (Rk = this._getRenderingFillMode(Rk), ak && Fk.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Fk, Rk, Bk, dk), this;
        if (ak) this._renderWithInstances(Fk, Rk, tk, Bk, dk);
        else {
          dk._currentDrawContext && (dk._currentDrawContext.useInstancing = !1);
          let Bk = 0;
          tk.renderSelf[Fk._id] && (Xk && Xk(!1, kk.getWorldMatrix(), bk), Bk++, this._draw(Fk, Rk, this._instanceDataStorage.overridenInstanceCount));
          const ak = tk.visibleInstances[Fk._id];
          if (ak) {
            const kk = ak.length;
            Bk += kk;
            for (let Bk = 0; Bk < kk; Bk++) {
              const kk = ak[Bk].getWorldMatrix();
              Xk && Xk(!0, kk, bk), this._draw(Fk, Rk)
            }
          }
          wk._activeIndices.addCount(Fk.indexCount * Bk, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk?.instancesBuffer && (Fk && kk.instancesBuffer.dispose(), kk.instancesBuffer = null), kk?.instancesPreviousBuffer && (Fk && kk.instancesPreviousBuffer.dispose(), kk.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Fk in this._instanceDataStorage.renderPasses) {
          const Bk = this._instanceDataStorage.renderPasses[Fk];
          this._disposeInstanceDataStorageRenderPass(Bk, kk)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, kk), this._userInstancedBuffersStorage) {
          for (const Fk in this._userInstancedBuffersStorage.vertexBuffers) {
            const Bk = this._userInstancedBuffersStorage.vertexBuffers[Fk];
            Bk && (kk && Bk.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Fk] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(kk)
      }
      _releaseRenderPassId(kk) {
        const Fk = this._instanceDataStorage.renderPasses[kk];
        if (Fk && (this._disposeInstanceDataStorageRenderPass(Fk, !0), delete this._instanceDataStorage.renderPasses[kk]), this._userInstancedBuffersStorage?.renderPasses) {
          const Fk = this._userInstancedBuffersStorage.renderPasses[kk];
          if (Fk)
            for (const kk in Fk) Fk[kk]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[kk]
        }
        const Bk = this._userInstancedBuffersStorage?.interleavedBuffers;
        Bk?.[kk] && (Bk[kk].buffer.dispose(), delete Bk[kk])
      }
      _freeze() {
        if (this.AY) {
          for (let kk = 0; kk < this.AY.length; kk++) this._getInstancesRenderList(kk);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const kk in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[kk].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ak = this._scene.ne(),
          Xk = ak.currentRenderPassId;
        if (void 0 !== kk && (ak.currentRenderPassId = kk), Rk)(!tk || tk && Rk.isInFrustum(this._scene._frustumPlanes)) && this.render(Rk, !!Fk, Bk);
        else
          for (let bk = 0; bk < this.AY.length; bk++) {
            const kk = this.AY[bk];
            (!tk || tk && kk.isInFrustum(this._scene._frustumPlanes)) && this.render(kk, !!Fk, Bk)
          }
        return void 0 !== kk && (ak.currentRenderPassId = Xk), this
      }
      directRender() {
        if (!this.AY) return this;
        for (const kk of this.AY) this.render(kk, !1);
        return this
      }
      render(kk, Fk, Bk) {
        const Rk = this.XN(),
          tk = Rk.ne();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const ak = Rk.activeCameras?.length ?? 0,
          Xk = ak > 1 && Rk.activeCamera === Rk.activeCameras[0] || ak <= 1,
          bk = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== tk.currentRenderPassId;
        if (Xk && this._checkOcclusionQuery(bk) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const wk = this._getInstancesRenderList(kk._id, !!Bk);
        if (wk.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let dk = 0,
          sk = null;
        this.ignoreCameraMaxZ && Rk.activeCamera && !Rk._isInIntermediateRendering() && (dk = Rk.activeCamera.maxZ, sk = Rk.activeCamera, Rk.activeCamera.maxZ = 0, Rk.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Vk = kk.getRenderingMesh(),
          Jk = wk.hardwareInstancedRendering[kk._id] || Vk.hasThinInstances || !!this._userInstancedBuffersStorage && !kk.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Ak = this._instanceDataStorage,
          ek = kk.Ry();
        if (!ek) return sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), this;
        if (Ak.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === ek) {
          if (ek._storeEffectOnSubMeshes && !kk._drawWrapper?._wasPreviouslyReady || !ek._storeEffectOnSubMeshes && !ek._getDrawWrapper()._wasPreviouslyReady) return sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), this
        } else {
          if (ek._storeEffectOnSubMeshes) {
            if (!ek.isReadyForSubMesh(this, kk, Jk)) return sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), this
          } else if (!ek.isReady(this, Jk)) return sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = ek
        }
        if (Fk) {
          const kk = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === kk.alphaModes.length) tk.setAlphaMode(kk.alphaMode);
          else
            for (let Fk = 0; Fk < kk.alphaModes.length; Fk++) {
              const Bk = kk.alphaModes[Fk];
              tk.setAlphaMode(void 0 !== Bk ? Bk : 2, !1, Fk)
            }
        }
        let yk;
        yk = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? kk._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const fk = yk?.effect ?? null;
        for (let Ok = 0, Ek = Rk._beforeRenderingMeshStage; Ok < Ek.length; Ok++) {
          Ek[Ok].action(this, kk, wk, fk)
        }
        if (!yk || !fk) return sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), this;
        const mk = Bk || this;
        let Wk;
        if (!Ak.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const kk = mk._getWorldMatrixDeterminant();
          Wk = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), kk < 0 && (Wk = Wk === ck.c.ClockWiseSideOrientation ? ck.c.CounterClockWiseSideOrientation : ck.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = Wk
        }
        const vk = this._internalMeshDataInfo._effectiveMaterial._preBind(yk, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && tk.setDepthWrite(!0);
        const ik = this._internalMeshDataInfo._effectiveMaterial,
          Yk = ik.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Jk || this._bind(kk, fk, Yk, !1);
        const Lk = mk.getWorldMatrix();
        ik._storeEffectOnSubMeshes ? ik.bindForSubMesh(Lk, this, kk) : ik.bind(Lk, this);
        try {
          Gk.c._BindAttachmentsForEffect(tk, fk) && (!ik.backFaceCulling && ik.separateCullingPass && (tk.setState(!0, ik.zOffset, !1, !vk, ik.cullBackFaces, ik.stencil, ik.zOffsetUnits), this._processRendering(this, kk, fk, Yk, wk, Jk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), tk.setState(!0, ik.zOffset, !1, vk, ik.cullBackFaces, ik.stencil, ik.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(kk)), this._processRendering(this, kk, fk, Yk, wk, Jk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Gk.c._RestoreAttachments(tk)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Ok = 0, Ek = Rk._afterRenderingMeshStage; Ok < Ek.length; Ok++) {
          Ek[Ok].action(this, kk, wk, fk)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), sk && (sk.maxZ = dk, Rk.updateTransformMatrix(!0)), 2 !== Rk.performancePriority || Ak.isFrozen || this._freeze(), this
      }
      _renderRunFollower(kk, Fk) {
        const Bk = this._scene,
          Rk = Bk._engine;
        if (Rk.isWebGPU || kk._mesh !== this || 0 !== this.instances.length || this.render !== Ik.prototype.render) return !1;
        const tk = kk.Ry();
        if (!tk || tk !== Bk._cachedMaterial || void 0 === tk._canBindRunFollower) return !1;
        const ak = kk._drawWrapper,
          Xk = ak?.effect;
        if (!Xk || Xk !== Bk._cachedEffect || this.visibility !== Bk._cachedVisibility || ak._forceRebindOnNextCall) return !1;
        const bk = this.hasThinInstances;
        if (!bk && this._userInstancedBuffersStorage) return !1;
        if (!ak._wasPreviouslyReady || ak._wasPreviouslyUsingInstances !== bk) return !1;
        const wk = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Bk._isInIntermediateRendering() || 0 !== Bk._beforeRenderingMeshStage.length || 0 !== Bk._afterRenderingMeshStage.length || wk._onBeforeRenderObservable?.hasObservers() || wk._onBeforeBindObservable?.hasObservers() || wk._onAfterRenderObservable?.hasObservers()) return !1;
        const dk = this.occlusionType;
        if (void 0 !== dk && dk !== gk.b.OCCLUSION_TYPE_NONE || !tk._canBindRunFollower(Bk, Rk, this, kk, Xk)) return !1;
        const sk = this._internalAbstractMeshDataInfo,
          Vk = sk._isActiveIntermediate;
        Vk ? sk._isActiveIntermediate = !1 : sk._isActive = !1;
        const Jk = Bk.activeCameras?.length ?? 0;
        (Jk > 1 && Bk.activeCamera === Bk.activeCameras[0] || Jk <= 1) && this._checkOcclusionQuery(!1);
        const Ak = this._getInstancesRenderList(kk._id);
        if (Ak.mustReturn) return !0;
        if (!bk && !Ak.renderSelf[kk._id]) return Vk ? sk._isActiveIntermediate = !0 : sk._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (wk._effectiveMaterial = tk, Fk)
          if (1 === tk.alphaModes.length) Rk.setAlphaMode(tk.alphaMode);
          else
            for (let yk = 0; yk < tk.alphaModes.length; yk++) {
              const kk = tk.alphaModes[yk];
              Rk.setAlphaMode(void 0 !== kk ? kk : 2, !1, yk)
            }
        if (tk.backFaceCulling || null !== tk.sideOrientation || tk._twoSidedLighting) {
          const kk = this._getWorldMatrixDeterminant();
          let Fk = tk._getEffectiveOrientation(this);
          kk < 0 && (Fk = Fk === ck.c.ClockWiseSideOrientation ? ck.c.CounterClockWiseSideOrientation : ck.c.ClockWiseSideOrientation), wk._effectiveSideOrientation = Fk
        }
        tk._preBind(ak, wk._effectiveSideOrientation), tk.forceDepthWrite && Rk.setDepthWrite(!0);
        const ek = tk.fillMode;
        return bk || this._bind(kk, Xk, ek, !1), tk._bindRunFollower(this.getWorldMatrix(), this, kk, Xk), this._processRendering(this, kk, Xk, ek, Ak, bk, this._onBeforeDraw, tk), tk.unbind(), 2 === Bk.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Hk.n.MatricesWeightsKind) && (this.isVerticesDataPresent(Hk.n.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const kk = this.getVerticesData(Hk.n.MatricesWeightsKind),
          Fk = kk.length;
        for (let Bk = 0; Bk < Fk; Bk += 4) {
          const Fk = kk[Bk] + kk[Bk + 1] + kk[Bk + 2] + kk[Bk + 3];
          if (0 === Fk) kk[Bk] = 1;
          else {
            const Rk = 1 / Fk;
            kk[Bk] *= Rk, kk[Bk + 1] *= Rk, kk[Bk + 2] *= Rk, kk[Bk + 3] *= Rk
          }
        }
        this.setVerticesData(Hk.n.MatricesWeightsKind, kk)
      }
      _normalizeSkinWeightsAndExtra() {
        const kk = this.getVerticesData(Hk.n.MatricesWeightsExtraKind),
          Fk = this.getVerticesData(Hk.n.MatricesWeightsKind),
          Bk = Fk.length;
        for (let Rk = 0; Rk < Bk; Rk += 4) {
          let Bk = Fk[Rk] + Fk[Rk + 1] + Fk[Rk + 2] + Fk[Rk + 3];
          if (Bk += kk[Rk] + kk[Rk + 1] + kk[Rk + 2] + kk[Rk + 3], 0 === Bk) Fk[Rk] = 1;
          else {
            const tk = 1 / Bk;
            Fk[Rk] *= tk, Fk[Rk + 1] *= tk, Fk[Rk + 2] *= tk, Fk[Rk + 3] *= tk, kk[Rk] *= tk, kk[Rk + 1] *= tk, kk[Rk + 2] *= tk, kk[Rk + 3] *= tk
          }
        }
        this.setVerticesData(Hk.n.MatricesWeightsKind, Fk), this.setVerticesData(Hk.n.MatricesWeightsKind, kk)
      }
      validateSkinning() {
        const kk = this.getVerticesData(Hk.n.MatricesWeightsExtraKind),
          Fk = this.getVerticesData(Hk.n.MatricesWeightsKind);
        if (null === Fk || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          ve: "not skinned"
        };
        const Bk = Fk.length;
        let Rk = 0,
          tk = 0,
          ak = 0,
          Xk = 0;
        const bk = null === kk ? 4 : 8,
          wk = [];
        for (let Ak = 0; Ak <= bk; Ak++) wk[Ak] = 0;
        for (let Ak = 0; Ak < Bk; Ak += 4) {
          let Bk = Fk[Ak],
            dk = Bk,
            sk = 0 === dk ? 0 : 1;
          for (let tk = 1; tk < bk; tk++) {
            const ak = tk < 4 ? Fk[Ak + tk] : kk[Ak + tk - 4];
            ak > Bk && Rk++, 0 !== ak && sk++, dk += ak, Bk = ak
          }
          if (wk[sk]++, sk > ak && (ak = sk), 0 === dk) tk++;
          else {
            const Bk = 1 / dk;
            let Rk = 0;
            for (let tk = 0; tk < bk; tk++) Rk += tk < 4 ? Math.abs(Fk[Ak + tk] - Fk[Ak + tk] * Bk) : Math.abs(kk[Ak + tk - 4] - kk[Ak + tk - 4] * Bk);
            Rk > .001 && Xk++
          }
        }
        const dk = this.skeleton.bones.length,
          sk = this.getVerticesData(Hk.n.MatricesIndicesKind),
          Vk = this.getVerticesData(Hk.n.MatricesIndicesExtraKind);
        let Jk = 0;
        for (let Ak = 0; Ak < Bk; Ak += 4)
          for (let kk = 0; kk < bk; kk++) {
            const Fk = kk < 4 ? sk[Ak + kk] : Vk[Ak + kk - 4];
            (Fk >= dk || Fk < 0) && Jk++
          }
        return {
          skinned: !0,
          valid: 0 === tk && 0 === Xk && 0 === Jk,
          ve: "Number of Weights = " + Bk / 4 + "\nMaximum influences = " + ak + "\nMissing Weights = " + tk + "\nNot Sorted = " + Rk + "\nNot Normalized = " + Xk + "\nWeightCounts = [" + wk + "]\nNumber of bones = " + dk + "\nBad Bone Indices = " + Jk
        }
      }
      _checkDelayState() {
        const kk = this.XN();
        return this._geometry ? this._geometry.load(kk) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(kk)), this
      }
      _queueLoad(kk) {
        kk.addPendingData(this);
        const Fk = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Bk = await kk._loadDelayedFileAsync(this.delayLoadingFile, Fk, !0);
            Bk instanceof ArrayBuffer ? this._delayLoadingFunction(Bk, this) : this._delayLoadingFunction(JSON.parse(Bk), this);
            for (const kk of this.instances) kk.refreshBoundingInfo(), kk._syncSubMeshes();
            this.delayLoadState = 1, kk.removePendingData(this)
          } catch (Bk) {
            kk.removePendingData(this), kk.BBk || zk.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Bk}`)
          }
        })(), this
      }
      isInFrustum(kk) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(kk) && (this._checkDelayState(), !0))
      }
      setMaterialById(kk) {
        const Fk = this.XN().materials;
        let Bk;
        for (Bk = Fk.length - 1; Bk > -1; Bk--)
          if (Fk[Bk].id === kk) return this.material = Fk[Bk], this;
        const Rk = this.XN().multiMaterials;
        for (Bk = Rk.length - 1; Bk > -1; Bk--)
          if (Rk[Bk].id === kk) return this.material = Rk[Bk], this;
        return this
      }
      getAnimatables() {
        const kk = [];
        return this.material && kk.push(this.material), this.skeleton && kk.push(this.skeleton), kk
      }
      bakeTransformIntoVertices(kk) {
        if (!this.isVerticesDataPresent(Hk.n.PositionKind)) return this;
        const Fk = this.AY.splice(0);
        this._resetPointsArrayCache();
        let Bk = this.getVerticesData(Hk.n.PositionKind);
        const Rk = Ek.s.Zero();
        let tk;
        for (tk = 0; tk < Bk.length; tk += 3) Ek.s.TransformCoordinatesFromFloatsToRef(Bk[tk], Bk[tk + 1], Bk[tk + 2], kk, Rk).toArray(Bk, tk);
        if (this.setVerticesData(Hk.n.PositionKind, Bk, this.getVertexBuffer(Hk.n.PositionKind).isUpdatable()), this.isVerticesDataPresent(Hk.n.NormalKind)) {
          for (Bk = this.getVerticesData(Hk.n.NormalKind), tk = 0; tk < Bk.length; tk += 3) Ek.s.TransformNormalFromFloatsToRef(Bk[tk], Bk[tk + 1], Bk[tk + 2], kk, Rk).normalize().toArray(Bk, tk);
          this.setVerticesData(Hk.n.NormalKind, Bk, this.getVertexBuffer(Hk.n.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Hk.n.TangentKind)) {
          for (Bk = this.getVerticesData(Hk.n.TangentKind), tk = 0; tk < Bk.length; tk += 4) Ek.s.TransformNormalFromFloatsToRef(Bk[tk], Bk[tk + 1], Bk[tk + 2], kk, Rk).normalize().toArray(Bk, tk);
          this.setVerticesData(Hk.n.TangentKind, Bk, this.getVertexBuffer(Hk.n.TangentKind).isUpdatable())
        }
        return kk.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.AY = Fk, this
      }
      bakeCurrentTransformIntoVertices() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(kk), this
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Fk && void 0 === Fk._addToSceneRootNodes) {
          const Bk = Fk;
          return nk.source = this, nk.doNotCloneChildren = Bk.doNotCloneChildren, nk.clonePhysicsImpostor = Bk.clonePhysicsImpostor, nk.cloneThinInstances = Bk.cloneThinInstances, new Ik(kk, this.XN(), nk)
        }
        return new Ik(kk, this.XN(), Fk, this, Bk, Rk)
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Bk = this._internalMeshDataInfo;
        if (Bk._onBeforeDrawObservable && Bk._onBeforeDrawObservable.clear(), Bk._onBeforeBindObservable && Bk._onBeforeBindObservable.clear(), Bk._onBeforeRenderObservable && Bk._onBeforeRenderObservable.clear(), Bk._onAfterRenderObservable && Bk._onAfterRenderObservable.clear(), Bk._onBetweenPassObservable && Bk._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Bk.meshMap)
            for (const kk in Bk.meshMap) {
              const Fk = Bk.meshMap[kk];
              Fk && (Fk._internalMeshDataInfo._source = null, Bk.meshMap[kk] = void 0)
            }
          Bk._source && Bk._source._internalMeshDataInfo.meshMap && (Bk._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const kk = this.XN().meshes;
          for (const Fk of kk) {
            const kk = Fk;
            kk._internalMeshDataInfo && kk._internalMeshDataInfo._source && kk._internalMeshDataInfo._source === this && (kk._internalMeshDataInfo._source = null)
          }
        }
        Bk._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(kk, Fk)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          bk = arguments.length > 7 ? arguments[7] : void 0;
        const wk = this.XN();
        return (0, vk.j)(kk, (kk => {
          const bk = kk.width,
            wk = kk.height,
            dk = this.ne().createCanvas(bk, wk).getContext("2d");
          dk.drawImage(kk, 0, 0);
          const sk = dk.getImageData(0, 0, bk, wk).data;
          this.applyDisplacementMapFromBuffer(sk, bk, wk, Fk, Bk, tk, ak, Xk), Rk && Rk(this)
        }), bk || (() => {}), wk.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Hk.n.PositionKind) || !this.isVerticesDataPresent(Hk.n.NormalKind) || !this.isVerticesDataPresent(Hk.n.UVKind)) return zk.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const wk = this.getVerticesData(Hk.n.PositionKind, !0, !0),
          dk = this.getVerticesData(Hk.n.NormalKind),
          sk = this.getVerticesData(Hk.n.UVKind);
        let Vk = Ek.s.Zero();
        const Jk = Ek.s.Zero(),
          Ak = Ek.p.Zero();
        ak = ak || Ek.p.Zero(), Xk = Xk || new Ek.p(1, 1);
        for (let ek = 0; ek < wk.length; ek += 3) {
          Ek.s.FromArrayToRef(wk, ek, Vk), Ek.s.FromArrayToRef(dk, ek, Jk), Ek.p.FromArrayToRef(sk, ek / 3 * 2, Ak);
          const bk = 4 * ((Math.abs(Ak.x * Xk.x + ak.x % 1) * (Fk - 1) % Fk | 0) + (Math.abs(Ak.y * Xk.y + ak.y % 1) * (Bk - 1) % Bk | 0) * Fk),
            yk = .3 * (kk[bk] / 255) + .59 * (kk[bk + 1] / 255) + .11 * (kk[bk + 2] / 255);
          Jk.normalize(), Jk.scaleInPlace(Rk + (tk - Rk) * yk), Vk = Vk.add(Jk), Vk.toArray(wk, ek)
        }
        return uk.e.ComputeNormals(wk, this.hBk(), dk), bk ? (this.setVerticesData(Hk.n.PositionKind, wk), this.setVerticesData(Hk.n.NormalKind, dk), this.setVerticesData(Hk.n.UVKind, sk)) : (this.updateVerticesData(Hk.n.PositionKind, wk), this.updateVerticesData(Hk.n.NormalKind, dk)), this
      }
      _getFlattenedNormals(kk, Fk) {
        const Bk = new Float32Array(3 * kk.length);
        let Rk = 0;
        const tk = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let ak = 0; ak < kk.length; ak += 3) {
          const Xk = Ek.s.FromArray(Fk, 3 * kk[ak]),
            bk = Ek.s.FromArray(Fk, 3 * kk[ak + 1]),
            wk = Ek.s.FromArray(Fk, 3 * kk[ak + 2]),
            dk = Xk.subtract(bk),
            sk = wk.subtract(bk),
            Vk = Ek.s.Normalize(Ek.s.Cross(dk, sk));
          tk && Vk.scaleInPlace(-1);
          for (let kk = 0; kk < 3; kk++) Bk[Rk++] = Vk.x, Bk[Rk++] = Vk.y, Bk[Rk++] = Vk.z
        }
        return Bk
      }
      _convertToUnIndexedMesh() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = this.getVerticesDataKinds().filter((kk => !this.getVertexBuffer(kk)?.getIsInstanced())),
          Bk = this.hBk(!1, !0),
          Rk = {},
          tk = (kk, Fk) => {
            const Rk = new Float32Array(Bk.length * Fk);
            let tk = 0;
            for (let ak = 0; ak < Bk.length; ak++)
              for (let Xk = 0; Xk < Fk; Xk++) Rk[tk++] = kk[Bk[ak] * Fk + Xk];
            return Rk
          },
          ak = this.ZH(),
          Xk = this.geometry ? this.AY.slice(0) : [];
        for (const bk of Fk) Rk[bk] = this.getVerticesData(bk);
        for (const bk of Fk) {
          const Fk = this.getVertexBuffer(bk),
            ak = Fk.getSize();
          if (kk && bk === Hk.n.NormalKind) {
            const kk = this._getFlattenedNormals(Bk, Rk[Hk.n.PositionKind]);
            this.setVerticesData(Hk.n.NormalKind, kk, Fk.isUpdatable(), ak)
          } else this.setVerticesData(bk, tk(Rk[bk], ak), Fk.isUpdatable(), ak)
        }
        if (this.morphTargetManager) {
          for (let Fk = 0; Fk < this.morphTargetManager.numTargets; Fk++) {
            const Rk = this.morphTargetManager.getTarget(Fk),
              ak = Rk.getPositions();
            Rk.oXk(tk(ak, 3));
            const Xk = Rk.getNormals();
            Xk && Rk.setNormals(kk ? this._getFlattenedNormals(Bk, ak) : tk(Xk, 3));
            const bk = Rk.getTangents();
            bk && Rk.setTangents(tk(bk, 3));
            const wk = Rk.getUVs();
            wk && Rk.setUVs(tk(wk, 2));
            const dk = Rk.getColors();
            dk && Rk.setColors(tk(dk, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let bk = 0; bk < Bk.length; bk++) Bk[bk] = bk;
        this.setIndices(Bk), this._unIndexed = !0, this.releaseSubMeshes();
        for (const bk of Xk) {
          const kk = bk.ZH();
          Uk.d.AddToMesh(bk.materialIndex, bk.indexStart, bk.indexCount, bk.indexStart, bk.indexCount, this).setBoundingInfo(kk)
        }
        return this.setBoundingInfo(ak), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = uk.e.ExtractFromMesh(this);
        let Bk;
        if (kk && this.isVerticesDataPresent(Hk.n.NormalKind) && Fk.normals) {
          for (Bk = 0; Bk < Fk.normals.length; Bk++) Fk.normals[Bk] *= -1;
          this.setVerticesData(Hk.n.NormalKind, Fk.normals, this.isVertexBufferUpdatable(Hk.n.NormalKind))
        }
        if (Fk.indices) {
          let kk;
          for (Bk = 0; Bk < Fk.indices.length; Bk += 3) kk = Fk.indices[Bk + 1], Fk.indices[Bk + 1] = Fk.indices[Bk + 2], Fk.indices[Bk + 2] = kk;
          this.setIndices(Fk.indices, null, this.isVertexBufferUpdatable(Hk.n.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Fk = uk.e.ExtractFromMesh(this),
          Bk = Fk.indices && !Array.isArray(Fk.indices) && Array.from ? Array.from(Fk.indices) : Fk.indices,
          Rk = Fk.positions && !Array.isArray(Fk.positions) && Array.from ? Array.from(Fk.positions) : Fk.positions,
          tk = Fk.uvs && !Array.isArray(Fk.uvs) && Array.from ? Array.from(Fk.uvs) : Fk.uvs,
          ak = Fk.normals && !Array.isArray(Fk.normals) && Array.from ? Array.from(Fk.normals) : Fk.normals;
        if (Bk && Rk) {
          Fk.indices = Bk, Fk.positions = Rk, tk && (Fk.uvs = tk), ak && (Fk.normals = ak);
          const Xk = kk + 1,
            bk = [];
          for (let kk = 0; kk < Xk + 1; kk++) bk[kk] = [];
          let wk, dk;
          const sk = new Ek.s(0, 0, 0),
            Vk = new Ek.s(0, 0, 0),
            Jk = new Ek.p(0, 0),
            Ak = [],
            ek = [],
            yk = [];
          let fk, mk, Wk, vk = Rk.length;
          tk && (mk = tk.length), ak && (Wk = ak.length);
          for (let kk = 0; kk < Bk.length; kk += 3) {
            ek[0] = Bk[kk], ek[1] = Bk[kk + 1], ek[2] = Bk[kk + 2];
            for (let kk = 0; kk < 3; kk++)
              if (wk = ek[kk], dk = ek[(kk + 1) % 3], void 0 === yk[wk] && void 0 === yk[dk] ? (yk[wk] = [], yk[dk] = []) : (void 0 === yk[wk] && (yk[wk] = []), void 0 === yk[dk] && (yk[dk] = [])), void 0 === yk[wk][dk] && void 0 === yk[dk][wk]) {
                yk[wk][dk] = [], sk.x = (Rk[3 * dk] - Rk[3 * wk]) / Xk, sk.y = (Rk[3 * dk + 1] - Rk[3 * wk + 1]) / Xk, sk.z = (Rk[3 * dk + 2] - Rk[3 * wk + 2]) / Xk, ak && (Vk.x = (ak[3 * dk] - ak[3 * wk]) / Xk, Vk.y = (ak[3 * dk + 1] - ak[3 * wk + 1]) / Xk, Vk.z = (ak[3 * dk + 2] - ak[3 * wk + 2]) / Xk), tk && (Jk.x = (tk[2 * dk] - tk[2 * wk]) / Xk, Jk.y = (tk[2 * dk + 1] - tk[2 * wk + 1]) / Xk), yk[wk][dk].push(wk);
                for (let kk = 1; kk < Xk; kk++) yk[wk][dk].push(Rk.length / 3), Rk[vk++] = Rk[3 * wk] + kk * sk.x, Rk[vk++] = Rk[3 * wk + 1] + kk * sk.y, Rk[vk++] = Rk[3 * wk + 2] + kk * sk.z, ak && (ak[Wk++] = ak[3 * wk] + kk * Vk.x, ak[Wk++] = ak[3 * wk + 1] + kk * Vk.y, ak[Wk++] = ak[3 * wk + 2] + kk * Vk.z), tk && (tk[mk++] = tk[2 * wk] + kk * Jk.x, tk[mk++] = tk[2 * wk + 1] + kk * Jk.y);
                yk[wk][dk].push(dk), yk[dk][wk] = [], fk = yk[wk][dk].length;
                for (let kk = 0; kk < fk; kk++) yk[dk][wk][kk] = yk[wk][dk][fk - 1 - kk]
              } bk[0][0] = Bk[kk], bk[1][0] = yk[Bk[kk]][Bk[kk + 1]][1], bk[1][1] = yk[Bk[kk]][Bk[kk + 2]][1];
            for (let Fk = 2; Fk < Xk; Fk++) {
              bk[Fk][0] = yk[Bk[kk]][Bk[kk + 1]][Fk], bk[Fk][Fk] = yk[Bk[kk]][Bk[kk + 2]][Fk], sk.x = (Rk[3 * bk[Fk][Fk]] - Rk[3 * bk[Fk][0]]) / Fk, sk.y = (Rk[3 * bk[Fk][Fk] + 1] - Rk[3 * bk[Fk][0] + 1]) / Fk, sk.z = (Rk[3 * bk[Fk][Fk] + 2] - Rk[3 * bk[Fk][0] + 2]) / Fk, ak && (Vk.x = (ak[3 * bk[Fk][Fk]] - ak[3 * bk[Fk][0]]) / Fk, Vk.y = (ak[3 * bk[Fk][Fk] + 1] - ak[3 * bk[Fk][0] + 1]) / Fk, Vk.z = (ak[3 * bk[Fk][Fk] + 2] - ak[3 * bk[Fk][0] + 2]) / Fk), tk && (Jk.x = (tk[2 * bk[Fk][Fk]] - tk[2 * bk[Fk][0]]) / Fk, Jk.y = (tk[2 * bk[Fk][Fk] + 1] - tk[2 * bk[Fk][0] + 1]) / Fk);
              for (let kk = 1; kk < Fk; kk++) bk[Fk][kk] = Rk.length / 3, Rk[vk++] = Rk[3 * bk[Fk][0]] + kk * sk.x, Rk[vk++] = Rk[3 * bk[Fk][0] + 1] + kk * sk.y, Rk[vk++] = Rk[3 * bk[Fk][0] + 2] + kk * sk.z, ak && (ak[Wk++] = ak[3 * bk[Fk][0]] + kk * Vk.x, ak[Wk++] = ak[3 * bk[Fk][0] + 1] + kk * Vk.y, ak[Wk++] = ak[3 * bk[Fk][0] + 2] + kk * Vk.z), tk && (tk[mk++] = tk[2 * bk[Fk][0]] + kk * Jk.x, tk[mk++] = tk[2 * bk[Fk][0] + 1] + kk * Jk.y)
            }
            bk[Xk] = yk[Bk[kk + 1]][Bk[kk + 2]], Ak.push(bk[0][0], bk[1][0], bk[1][1]);
            for (let kk = 1; kk < Xk; kk++) {
              let Fk;
              for (Fk = 0; Fk < kk; Fk++) Ak.push(bk[kk][Fk], bk[kk + 1][Fk], bk[kk + 1][Fk + 1]), Ak.push(bk[kk][Fk], bk[kk + 1][Fk + 1], bk[kk][Fk + 1]);
              Ak.push(bk[kk][Fk], bk[kk + 1][Fk], bk[kk + 1][Fk + 1])
            }
          }
          Fk.indices = Ak, Fk.applyToMesh(this, this.isVertexBufferUpdatable(Hk.n.PositionKind))
        } else zk.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const kk = uk.e.ExtractFromMesh(this),
          Fk = kk.uvs,
          Bk = kk.indices,
          Rk = kk.positions,
          tk = kk.colors,
          ak = kk.matricesIndices,
          Xk = kk.matricesWeights,
          bk = kk.matricesIndicesExtra,
          wk = kk.matricesWeightsExtra;
        if (void 0 === Bk || void 0 === Rk || null === Bk || null === Rk) zk.b.Warn("VertexData contains empty entries");
        else {
          const dk = [],
            sk = [],
            Vk = [],
            Jk = [],
            Ak = [],
            ek = [],
            yk = [],
            fk = [];
          let mk, Wk = 0;
          const vk = {};
          let ik, Yk;
          for (let kk = 0; kk < Bk.length; kk += 3) {
            Yk = [Bk[kk], Bk[kk + 1], Bk[kk + 2]], mk = [];
            for (let kk = 0; kk < 3; kk++) {
              mk[kk] = "";
              for (let Fk = 0; Fk < 3; Fk++) Math.abs(Rk[3 * Yk[kk] + Fk]) < 1e-8 && (Rk[3 * Yk[kk] + Fk] = 0), mk[kk] += Rk[3 * Yk[kk] + Fk] + "|"
            }
            if (mk[0] != mk[1] && mk[0] != mk[2] && mk[1] != mk[2])
              for (let kk = 0; kk < 3; kk++) {
                if (ik = vk[mk[kk]], void 0 === ik) {
                  vk[mk[kk]] = Wk, ik = Wk++;
                  for (let Fk = 0; Fk < 3; Fk++) dk.push(Rk[3 * Yk[kk] + Fk]);
                  if (null !== tk && void 0 !== tk)
                    for (let Fk = 0; Fk < 4; Fk++) Jk.push(tk[4 * Yk[kk] + Fk]);
                  if (null !== Fk && void 0 !== Fk)
                    for (let Bk = 0; Bk < 2; Bk++) Vk.push(Fk[2 * Yk[kk] + Bk]);
                  if (null !== ak && void 0 !== ak)
                    for (let Fk = 0; Fk < 4; Fk++) Ak.push(ak[4 * Yk[kk] + Fk]);
                  if (null !== Xk && void 0 !== Xk)
                    for (let Fk = 0; Fk < 4; Fk++) ek.push(Xk[4 * Yk[kk] + Fk]);
                  if (null !== bk && void 0 !== bk)
                    for (let Fk = 0; Fk < 4; Fk++) yk.push(bk[4 * Yk[kk] + Fk]);
                  if (null !== wk && void 0 !== wk)
                    for (let Fk = 0; Fk < 4; Fk++) fk.push(wk[4 * Yk[kk] + Fk])
                }
                sk.push(ik)
              }
          }
          const Lk = [];
          uk.e.ComputeNormals(dk, sk, Lk), kk.positions = dk, kk.indices = sk, kk.normals = Lk, null !== Fk && void 0 !== Fk && (kk.uvs = Vk), null !== tk && void 0 !== tk && (kk.colors = Jk), null !== ak && void 0 !== ak && (kk.matricesIndices = Ak), null !== Xk && void 0 !== Xk && (kk.matricesWeights = ek), null !== bk && void 0 !== bk && (kk.matricesIndicesExtra = yk), null !== Xk && void 0 !== Xk && (kk.matricesWeightsExtra = fk), kk.applyToMesh(this, this.isVertexBufferUpdatable(Hk.n.PositionKind))
        }
      }
      static _instancedMeshFactory(kk, Fk) {
        throw (0, hk.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(kk, Fk, Bk) {
        throw (0, hk.i)("PhysicsImpostor")
      }
      createInstance(kk) {
        const Fk = Ik._instancedMeshFactory(kk, this);
        return Fk.parent = this.parent, Fk
      }
      synchronizeInstances() {
        for (let kk = 0; kk < this.instances.length; kk++) {
          this.instances[kk]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(kk) {
        const Fk = this.hBk(),
          Bk = this.getVerticesData(Hk.n.PositionKind);
        if (!Bk || !Fk) return this;
        const Rk = [];
        for (let ak = 0; ak < Bk.length; ak += 3) Rk.push(Ek.s.FromArray(Bk, ak));
        const tk = [];
        return Wk.d.SyncAsyncForLoop(Rk.length, 40, (kk => {
          const Fk = Rk.length - 1 - kk,
            Bk = Rk[Fk];
          for (let ak = 0; ak < Fk; ++ak) {
            const kk = Rk[ak];
            if (Bk.equals(kk)) {
              tk[Fk] = ak;
              break
            }
          }
        }), (() => {
          for (let kk = 0; kk < Fk.length; ++kk) Fk[kk] = tk[Fk[kk]] || Fk[kk];
          const Bk = this.AY.slice(0);
          this.setIndices(Fk), this.AY = Bk, kk && kk(this)
        })), this
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), Yk.b && Yk.b.HasTags(this) && (kk.tags = Yk.b.GetTags(this)), kk.position = this.position.PBk(), this.rotationQuaternion ? kk.rotationQuaternion = this.rotationQuaternion.PBk() : this.rotation && (kk.rotation = this.rotation.PBk()), kk.ta = this.ta.PBk(), this._postMultiplyPivotMatrix ? kk.pivotMatrix = this.getPivotMatrix().PBk() : kk.localMatrix = this.getPivotMatrix().PBk(), kk.isEnabled = this.isEnabled(!1), kk.isVisible = this.isVisible, kk.infiniteDistance = this.infiniteDistance, kk.pickable = this.ff, kk.receiveShadows = this.receiveShadows, kk.billboardMode = this.billboardMode, kk.visibility = this.visibility, kk.Ie = this.Ie, kk.checkCollisions = this.checkCollisions, kk.ellipsoid = this.ellipsoid.PBk(), kk.ellipsoidOffset = this.ellipsoidOffset.PBk(), kk.Fy = this.Fy, kk.isBlocker = this.isBlocker, kk.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (kk.oN = !0), this.parent && this.parent._serializeAsParent(kk), kk.isUnIndexed = this.isUnIndexed;
        const Fk = this._geometry;
        if (Fk && this.AY) {
          kk.geometryUniqueId = Fk.uniqueId, kk.geometryId = Fk.id, kk.AY = [];
          for (let Fk = 0; Fk < this.AY.length; Fk++) {
            const Bk = this.AY[Fk];
            kk.AY.push({
              materialIndex: Bk.materialIndex,
              verticesStart: Bk.verticesStart,
              verticesCount: Bk.verticesCount,
              indexStart: Bk.indexStart,
              indexCount: Bk.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (kk.materialUniqueId = this.material.uniqueId, kk.materialId = this.material.id) : (this.material = null, kk.materialUniqueId = this._scene.defaultMaterial.uniqueId, kk.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (kk.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (kk.skeletonId = this.skeleton.id, kk.skeletonUniqueId = this.skeleton.uniqueId, kk.numBoneInfluencers = this.numBoneInfluencers), this.XN()._getComponent(qk.b.NAME_PHYSICSENGINE)) {
          const Fk = this.getPhysicsImpostor?.();
          Fk && (kk.physicsMass = Fk.getParam("jX"), kk.physicsFriction = Fk.getParam("friction"), kk.physicsRestitution = Fk.getParam("jX"), kk.physicsImpostor = Fk.type)
        }
        this.metadata && (kk.metadata = this.metadata), 0 !== this.meshBlendingTag && (kk.meshBlendingTag = this.meshBlendingTag), kk.instances = [];
        for (let Bk = 0; Bk < this.instances.length; Bk++) {
          const Fk = this.instances[Bk];
          if (Fk.doNotSerialize) continue;
          const Rk = {
            name: Fk.name,
            id: Fk.id,
            isEnabled: Fk.isEnabled(!1),
            isVisible: Fk.isVisible,
            ff: Fk.ff,
            checkCollisions: Fk.checkCollisions,
            position: Fk.position.PBk(),
            ta: Fk.ta.PBk()
          };
          if (Fk.parent && Fk.parent._serializeAsParent(Rk), Fk.rotationQuaternion ? Rk.rotationQuaternion = Fk.rotationQuaternion.PBk() : Fk.rotation && (Rk.rotation = Fk.rotation.PBk()), this.XN()._getComponent(qk.b.NAME_PHYSICSENGINE)) {
            const kk = Fk.getPhysicsImpostor?.();
            kk && (Rk.physicsMass = kk.getParam("jX"), Rk.physicsFriction = kk.getParam("friction"), Rk.physicsRestitution = kk.getParam("jX"), Rk.physicsImpostor = kk.type)
          }
          Fk.metadata && (Rk.metadata = Fk.metadata), Fk.actionManager && (Rk.actions = Fk.actionManager.serialize(Fk.name)), kk.instances.push(Rk), Dk.c.AppendSerializedAnimations(Fk, Rk), Rk.hb = Fk.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (kk.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.wFk
          }, this._userThinInstanceBuffersStorage)) {
          const Fk = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const kk in this._userThinInstanceBuffersStorage.data) Fk.data[kk] = Array.from(this._userThinInstanceBuffersStorage.data[kk]), Fk.sizes[kk] = this._userThinInstanceBuffersStorage.sizes[kk], Fk.strides[kk] = this._userThinInstanceBuffersStorage.strides[kk];
          kk.thinInstances.userThinInstance = Fk
        }
        return Dk.c.AppendSerializedAnimations(this, kk), kk.hb = this.serializeAnimationRanges(), kk.layerMask = this.layerMask, kk.alphaIndex = this.alphaIndex, kk.hasVertexAlpha = this.hasVertexAlpha, kk.overlayAlpha = this.overlayAlpha, kk.overlayColor = this.overlayColor.PBk(), kk.renderOverlay = this.renderOverlay, kk.applyFog = this.applyFog, this.actionManager && (kk.actions = this.actionManager.serialize(this.name)), kk
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const kk = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (kk && kk.vertexCount) {
          if (kk.vertexCount !== this.getTotalVertices()) return zk.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (kk.isUsingTextureForTargets) return;
          for (let Fk = 0; Fk < kk.numInfluencers; Fk++) {
            const Bk = kk.getActiveTarget(Fk),
              Rk = Bk.getPositions();
            if (!Rk) return void zk.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Hk.n.PositionKind + Fk, Rk, !1, 3);
            const tk = Bk.getNormals();
            tk && this.geometry.setVerticesData(Hk.n.NormalKind + Fk, tk, !1, 3);
            const ak = Bk.getTangents();
            ak && this.geometry.setVerticesData(Hk.n.TangentKind + Fk, ak, !1, 3);
            const Xk = Bk.getUVs();
            Xk && this.geometry.setVerticesData(Hk.n.UVKind + "_" + Fk, Xk, !1, 2);
            const bk = Bk.getUV2s();
            bk && this.geometry.setVerticesData(Hk.n.UV2Kind + "_" + Fk, bk, !1, 2);
            const wk = Bk.getColors();
            wk && this.geometry.setVerticesData(Hk.n.ColorKind + Fk, wk, !1, 4)
          }
        } else {
          let kk = 0;
          for (; this.geometry.isVerticesDataPresent(Hk.n.PositionKind + kk);) this.geometry.removeVerticesData(Hk.n.PositionKind + kk), this.geometry.isVerticesDataPresent(Hk.n.NormalKind + kk) && this.geometry.removeVerticesData(Hk.n.NormalKind + kk), this.geometry.isVerticesDataPresent(Hk.n.TangentKind + kk) && this.geometry.removeVerticesData(Hk.n.TangentKind + kk), this.geometry.isVerticesDataPresent(Hk.n.UVKind + "_" + kk) && this.geometry.removeVerticesData(Hk.n.UVKind + "_" + kk), this.geometry.isVerticesDataPresent(Hk.n.UV2Kind + "_" + kk) && this.geometry.removeVerticesData(Hk.n.UV2Kind + "_" + kk), this.geometry.isVerticesDataPresent(Hk.n.ColorKind + kk) && this.geometry.removeVerticesData(Hk.n.ColorKind + kk), kk++
        }
      }
      static Parse(kk, Fk, Bk) {
        let Rk, tk = !1;
        if (kk.type && "LinesMesh" === kk.type ? Rk = Ik._LinesMeshParser(kk, Fk) : kk.type && "GroundMesh" === kk.type ? Rk = Ik._GroundMeshParser(kk, Fk) : kk.type && "GoldbergMesh" === kk.type ? Rk = Ik._GoldbergMeshParser(kk, Fk) : kk.type && "GreasedLineMesh" === kk.type ? Rk = Ik._GreasedLineMeshParser(kk, Fk) : kk.type && "TrailMesh" === kk.type ? Rk = Ik._TrailMeshParser(kk, Fk) : kk.type && "GaussianSplattingMesh" === kk.type ? (Rk = kk._isCompound ? Ik._GaussianSplattingCompoundMeshParser(kk, Fk) : Ik._GaussianSplattingMeshParser(kk, Fk), tk = !0) : kk.type && "GaussianSplattingPartProxyMesh" === kk.type ? (Rk = Ik._GaussianSplattingPartProxyMeshParser(kk, Fk), tk = !0) : Rk = new Ik(kk.name, Fk), Rk.id = kk.id, Rk._waitingParsedUniqueId = kk.uniqueId, Yk.b && Yk.b.AddTagsTo(Rk, kk.tags), Rk.position = Ek.s.FromArray(kk.position), void 0 !== kk.metadata && (Rk.metadata = kk.metadata), void 0 !== kk.meshBlendingTag && (Rk.meshBlendingTag = kk.meshBlendingTag), kk.rotationQuaternion ? Rk.rotationQuaternion = Ek.e.FromArray(kk.rotationQuaternion) : kk.rotation && (Rk.rotation = Ek.s.FromArray(kk.rotation)), Rk.ta = Ek.s.FromArray(kk.ta), kk.localMatrix ? Rk.setPreTransformMatrix(Ek.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Rk.setPivotMatrix(Ek.c.FromArray(kk.pivotMatrix)), Rk.lY(kk.isEnabled), Rk.isVisible = kk.isVisible, Rk.infiniteDistance = kk.infiniteDistance, Rk.Ie = !!kk.Ie, Rk.showBoundingBox = kk.showBoundingBox, Rk.showSubMeshesBoundingBox = kk.showSubMeshesBoundingBox, void 0 !== kk.applyFog && (Rk.applyFog = kk.applyFog), void 0 !== kk.pickable && (Rk.ff = kk.pickable), void 0 !== kk.alphaIndex && (Rk.alphaIndex = kk.alphaIndex), Rk.receiveShadows = kk.receiveShadows, void 0 !== kk.billboardMode && (Rk.billboardMode = kk.billboardMode), void 0 !== kk.visibility && (Rk.visibility = kk.visibility), Rk.checkCollisions = kk.checkCollisions, Rk.Fy = !!kk.Fy, kk.ellipsoid && (Rk.ellipsoid = Ek.s.FromArray(kk.ellipsoid)), kk.ellipsoidOffset && (Rk.ellipsoidOffset = Ek.s.FromArray(kk.ellipsoidOffset)), null != kk.overrideMaterialSideOrientation && (Rk.sideOrientation = kk.overrideMaterialSideOrientation), void 0 !== kk.sideOrientation && (Rk.sideOrientation = kk.sideOrientation), void 0 !== kk.isBlocker && (Rk.isBlocker = kk.isBlocker), Rk._shouldGenerateFlatShading = kk.useFlatShading, kk.oN && (Rk._waitingData.oN = kk.oN), void 0 !== kk.parentId && (Rk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Rk._waitingParentInstanceIndex = kk.parentInstanceIndex), void 0 !== kk.actions && (Rk._waitingData.actions = kk.actions), void 0 !== kk.overlayAlpha && (Rk.overlayAlpha = kk.overlayAlpha), void 0 !== kk.overlayColor && (Rk.overlayColor = Sk.e.FromArray(kk.overlayColor)), void 0 !== kk.renderOverlay && (Rk.renderOverlay = kk.renderOverlay), Rk.isUnIndexed = !!kk.isUnIndexed, Rk.hasVertexAlpha = kk.hasVertexAlpha, kk.delayLoadingFile ? (Rk.delayLoadState = 4, Rk.delayLoadingFile = Bk + kk.delayLoadingFile, Rk.buildBoundingInfo(Ek.s.FromArray(kk.boundingBoxMinimum), Ek.s.FromArray(kk.boundingBoxMaximum)), kk._binaryInfo && (Rk._binaryInfo = kk._binaryInfo), Rk._delayInfo = [], kk.hasUVs && Rk._delayInfo.push(Hk.n.UVKind), kk.hasUVs2 && Rk._delayInfo.push(Hk.n.UV2Kind), kk.hasUVs3 && Rk._delayInfo.push(Hk.n.UV3Kind), kk.hasUVs4 && Rk._delayInfo.push(Hk.n.UV4Kind), kk.hasUVs5 && Rk._delayInfo.push(Hk.n.UV5Kind), kk.hasUVs6 && Rk._delayInfo.push(Hk.n.UV6Kind), kk.hasColors && Rk._delayInfo.push(Hk.n.ColorKind), kk.hasMatricesIndices && Rk._delayInfo.push(Hk.n.MatricesIndicesKind), kk.hasMatricesWeights && Rk._delayInfo.push(Hk.n.MatricesWeightsKind), Rk._delayLoadingFunction = Mk.e._ImportGeometry, rk.e.ForceFullSceneLoadingForIncremental && Rk._checkDelayState()) : tk || Mk.e._ImportGeometry(kk, Rk), kk.materialUniqueId ? Rk._waitingMaterialId = kk.materialUniqueId : kk.materialId && (Rk._waitingMaterialId = kk.materialId), kk.morphTargetManagerId > -1 && (Rk._waitingMorphTargetManagerId = kk.morphTargetManagerId), void 0 !== kk.skeletonId && null !== kk.skeletonId && (Rk.skeleton = Fk.getLastSkeletonById(kk.skeletonId), Rk._waitingSkeletonId = kk.skeletonId, kk.numBoneInfluencers && (Rk.numBoneInfluencers = kk.numBoneInfluencers)), void 0 !== kk.skeletonUniqueId && null !== kk.skeletonUniqueId && (Rk._waitingSkeletonUniqueId = kk.skeletonUniqueId), kk.animations) {
          for (let Fk = 0; Fk < kk.animations.length; Fk++) {
            const Bk = kk.animations[Fk],
              tk = (0, Pk.c)("BABYLON.Animation");
            tk && Rk.animations.push(tk.Parse(Bk))
          }
          Nk.b.ParseAnimationRanges(Rk, kk, Fk)
        }
        if (kk.autoAnimate && Fk.beginAnimation(Rk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), kk.layerMask && !isNaN(kk.layerMask) ? Rk.layerMask = Math.abs(parseInt(kk.layerMask)) : Rk.layerMask = 268435455, kk.physicsImpostor && (Rk.physicsImpostor = Ik._PhysicsImpostorParser(Fk, Rk, kk)), kk.lodMeshIds && (Rk._waitingData.lods = {
            ids: kk.lodMeshIds,
            distances: kk.lodDistances ? kk.lodDistances : null,
            coverages: kk.lodCoverages ? kk.lodCoverages : null
          }), kk.instances)
          for (let ak = 0; ak < kk.instances.length; ak++) {
            const Bk = kk.instances[ak],
              tk = Rk.createInstance(Bk.name);
            if (Bk.id && (tk.id = Bk.id), Yk.b && (Bk.tags ? Yk.b.AddTagsTo(tk, Bk.tags) : Yk.b.AddTagsTo(tk, kk.tags)), tk.position = Ek.s.FromArray(Bk.position), void 0 !== Bk.metadata && (tk.metadata = Bk.metadata), void 0 !== Bk.parentId && (tk._waitingParentId = Bk.parentId), void 0 !== Bk.parentInstanceIndex && (tk._waitingParentInstanceIndex = Bk.parentInstanceIndex), void 0 !== Bk.isEnabled && null !== Bk.isEnabled && tk.lY(Bk.isEnabled), void 0 !== Bk.isVisible && null !== Bk.isVisible && (tk.isVisible = Bk.isVisible), void 0 !== Bk.ff && null !== Bk.ff && (tk.ff = Bk.ff), Bk.rotationQuaternion ? tk.rotationQuaternion = Ek.e.FromArray(Bk.rotationQuaternion) : Bk.rotation && (tk.rotation = Ek.s.FromArray(Bk.rotation)), tk.ta = Ek.s.FromArray(Bk.ta), void 0 != Bk.checkCollisions && null != Bk.checkCollisions && (tk.checkCollisions = Bk.checkCollisions), void 0 != Bk.pickable && null != Bk.pickable && (tk.ff = Bk.pickable), void 0 != Bk.showBoundingBox && null != Bk.showBoundingBox && (tk.showBoundingBox = Bk.showBoundingBox), void 0 != Bk.showSubMeshesBoundingBox && null != Bk.showSubMeshesBoundingBox && (tk.showSubMeshesBoundingBox = Bk.showSubMeshesBoundingBox), void 0 != Bk.alphaIndex && null != Bk.showSubMeshesBoundingBox && (tk.alphaIndex = Bk.alphaIndex), Bk.physicsImpostor && (tk.physicsImpostor = Ik._PhysicsImpostorParser(Fk, tk, Bk)), void 0 !== Bk.actions && (tk._waitingData.actions = Bk.actions), Bk.animations) {
              for (let kk = 0; kk < Bk.animations.length; kk++) {
                const Fk = Bk.animations[kk],
                  Rk = (0, Pk.c)("BABYLON.Animation");
                Rk && tk.animations.push(Rk.Parse(Fk))
              }
              Nk.b.ParseAnimationRanges(tk, Bk, Fk), Bk.autoAnimate && Fk.beginAnimation(tk, Bk.autoAnimateFrom, Bk.autoAnimateTo, Bk.autoAnimateLoop, Bk.autoAnimateSpeed || 1)
            }
          }
        if (kk.thinInstances) {
          const Fk = kk.thinInstances;
          if (Rk.wFk = !!Fk.enablePicking, Fk.matrixData ? (Rk.x_("matrix", new Float32Array(Fk.matrixData), 16, !1), Rk._thinInstanceDataStorage.matrixBufferSize = Fk.matrixBufferSize, Rk._thinInstanceDataStorage.instancesCount = Fk.instancesCount) : Rk._thinInstanceDataStorage.matrixBufferSize = Fk.matrixBufferSize, kk.thinInstances.userThinInstance) {
            const Fk = kk.thinInstances.userThinInstance;
            for (const kk in Fk.data) Rk.x_(kk, new Float32Array(Fk.data[kk]), Fk.strides[kk], !1), Rk._userThinInstanceBuffersStorage.sizes[kk] = Fk.sizes[kk]
          }
        }
        return Rk
      }
      setPositionsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourcePositions) {
          const Fk = this.getVerticesData(Hk.n.PositionKind);
          if (!Fk) return kk._sourcePositions;
          kk._sourcePositions = new Float32Array(Fk), this.isVertexBufferUpdatable(Hk.n.PositionKind) || this.setVerticesData(Hk.n.PositionKind, Fk, !0)
        }
        return kk._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourceNormals) {
          const Fk = this.getVerticesData(Hk.n.NormalKind);
          if (!Fk) return kk._sourceNormals;
          kk._sourceNormals = new Float32Array(Fk), this.isVertexBufferUpdatable(Hk.n.NormalKind) || this.setVerticesData(Hk.n.NormalKind, Fk, !0)
        }
        return kk._sourceNormals
      }
      applySkeleton(kk) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.XN().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.XN().getFrameId(), !this.isVerticesDataPresent(Hk.n.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Hk.n.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Hk.n.MatricesWeightsKind)) return this;
        const Fk = this.isVerticesDataPresent(Hk.n.NormalKind),
          Bk = this._internalMeshDataInfo;
        if (!Bk._sourcePositions) {
          const kk = this.AY.slice();
          this.setPositionsForCPUSkinning(), this.AY = kk
        }
        Fk && !Bk._sourceNormals && this.setNormalsForCPUSkinning();
        let Rk = this.getVerticesData(Hk.n.PositionKind);
        if (!Rk) return this;
        Rk instanceof Float32Array || (Rk = new Float32Array(Rk));
        let tk = this.getVerticesData(Hk.n.NormalKind);
        if (Fk) {
          if (!tk) return this;
          tk instanceof Float32Array || (tk = new Float32Array(tk))
        }
        const ak = this.getVerticesData(Hk.n.MatricesIndicesKind),
          Xk = this.getVerticesData(Hk.n.MatricesWeightsKind);
        if (!Xk || !ak) return this;
        const bk = this.numBoneInfluencers > 4,
          wk = bk ? this.getVerticesData(Hk.n.MatricesIndicesExtraKind) : null,
          dk = bk ? this.getVerticesData(Hk.n.MatricesWeightsExtraKind) : null,
          sk = kk.getTransformMatrices(this),
          Vk = Ek.s.Zero(),
          Jk = new Ek.c,
          Ak = new Ek.c;
        let ek, yk = 0;
        for (let fk = 0; fk < Rk.length; fk += 3, yk += 4) {
          let kk;
          for (ek = 0; ek < 4; ek++) kk = Xk[yk + ek], kk > 0 && (Ek.c.FromFloat32ArrayToRefScaled(sk, Math.floor(16 * ak[yk + ek]), kk, Ak), Jk.addToSelf(Ak));
          if (bk)
            for (ek = 0; ek < 4; ek++) kk = dk[yk + ek], kk > 0 && (Ek.c.FromFloat32ArrayToRefScaled(sk, Math.floor(16 * wk[yk + ek]), kk, Ak), Jk.addToSelf(Ak));
          Ek.s.TransformCoordinatesFromFloatsToRef(Bk._sourcePositions[fk], Bk._sourcePositions[fk + 1], Bk._sourcePositions[fk + 2], Jk, Vk), Vk.toArray(Rk, fk), Fk && (Ek.s.TransformNormalFromFloatsToRef(Bk._sourceNormals[fk], Bk._sourceNormals[fk + 1], Bk._sourceNormals[fk + 2], Jk, Vk), Vk.toArray(tk, fk)), Jk.reset()
        }
        return this.updateVerticesData(Hk.n.PositionKind, Rk), Fk && this.updateVerticesData(Hk.n.NormalKind, tk), this
      }
      static MinMax(kk) {
        let Fk = null,
          Bk = null;
        for (const Rk of kk) {
          const kk = Rk.ZH().boundingBox;
          Fk && Bk ? (Fk.minimizeInPlace(kk.minimumWorld), Bk.maximizeInPlace(kk.maximumWorld)) : (Fk = kk.minimumWorld.clone(), Bk = kk.maximumWorld.clone())
        }
        return Fk && Bk ? {
          min: Fk,
          max: Bk
        } : {
          min: Ek.s.Zero(),
          max: Ek.s.Zero()
        }
      }
      static Center(kk) {
        const Fk = kk instanceof Array ? Ik.MinMax(kk) : kk;
        return Ek.s.Center(Fk.min, Fk.max)
      }
      static MergeMeshes(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Lk.j)(Ik._MergeMeshesCoroutine(kk, Fk, Bk, Rk, tk, ak, !1))
      }
      static async MergeMeshesAsync(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Lk.h)(Ik._MergeMeshesCoroutine(kk, Fk, Bk, Rk, tk, ak, !0), (0, Lk.b)())
      }
      static * _MergeMeshesCoroutine(kk) {
        let Fk, Bk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Rk = arguments.length > 2 ? arguments[2] : void 0,
          tk = arguments.length > 3 ? arguments[3] : void 0,
          ak = arguments.length > 4 ? arguments[4] : void 0,
          Xk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (kk = kk.filter(Boolean)).length) return null;
        if (!Rk) {
          let Bk = 0;
          for (Fk = 0; Fk < kk.length; Fk++)
            if (Bk += kk[Fk].getTotalVertices(), Bk >= 65536) return zk.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const wk = kk[0];
        Xk && (ak = !1, kk.sort(((kk, Fk) => (kk.material?.uniqueId ?? -1) - (Fk.material?.uniqueId ?? -1))));
        const dk = new Array,
          sk = new Array,
          Vk = new Array,
          Jk = kk[0].sideOrientation;
        for (Fk = 0; Fk < kk.length; Fk++) {
          const Bk = kk[Fk];
          if (Bk.mN) return zk.b.Warn("Cannot merge instance meshes."), null;
          if (Jk !== Bk.sideOrientation) return zk.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (ak || Xk) {
            const kk = Vk.reduce(((kk, Fk) => Math.max(kk, Fk.start + Fk.count)), 0);
            if (Xk)
              if (Bk.material) {
                const Fk = Bk.material;
                if (Fk instanceof Tk.e) {
                  for (let kk = 0; kk < Fk.l_.length; kk++) dk.indexOf(Fk.l_[kk]) < 0 && dk.push(Fk.l_[kk]);
                  for (let Rk = 0; Rk < Bk.AY.length; Rk++) sk.push(dk.indexOf(Fk.l_[Bk.AY[Rk].materialIndex])), Vk.push({
                    start: kk + Bk.AY[Rk].indexStart,
                    count: Bk.AY[Rk].indexCount
                  })
                } else {
                  dk.indexOf(Fk) < 0 && dk.push(Fk);
                  for (let Rk = 0; Rk < Bk.AY.length; Rk++) sk.push(dk.indexOf(Fk)), Vk.push({
                    start: kk + Bk.AY[Rk].indexStart,
                    count: Bk.AY[Rk].indexCount
                  })
                }
              } else
                for (let Fk = 0; Fk < Bk.AY.length; Fk++) sk.push(0), Vk.push({
                  start: kk + Bk.AY[Fk].indexStart,
                  count: Bk.AY[Fk].indexCount
                });
            else Vk.push({
              start: kk,
              count: Bk.getTotalIndices()
            })
          }
        }
        if (Xk && Vk.length > 1) {
          let kk = 0;
          for (let Fk = 1; Fk < Vk.length; Fk++) {
            const Bk = Vk[kk],
              Rk = Vk[Fk];
            sk[Fk] === sk[kk] && Bk.start + Bk.count === Rk.start ? Bk.count += Rk.count : (kk++, Vk[kk] = Rk, sk[kk] = sk[Fk])
          }
          Vk.length = kk + 1, sk.length = kk + 1
        }
        const Ak = kk => {
            const Fk = kk.computeWorldMatrix(!0);
            return {
              vertexData: uk.e.ExtractFromMesh(kk, !1, !1),
              transform: Fk
            }
          },
          {
            vertexData: ek,
            transform: yk
          } = Ak(kk[0]);
        bk && (yield);
        const fk = new Array(kk.length - 1);
        for (let Lk = 1; Lk < kk.length; Lk++) fk[Lk - 1] = Ak(kk[Lk]), bk && (yield);
        const mk = ek._mergeCoroutine(yk, fk, Rk, bk, !Bk);
        let Wk = mk.next();
        for (; !Wk.done;) bk && (yield), Wk = mk.next();
        const vk = Wk.value;
        tk || (tk = new Ik(wk.name + "_merged", wk.XN()));
        const ik = vk._applyToCoroutine(tk, void 0, bk);
        let Yk = ik.next();
        for (; !Yk.done;) bk && (yield), Yk = ik.next();
        if (tk.checkCollisions = wk.checkCollisions, tk.sideOrientation = wk.sideOrientation, Bk)
          for (Fk = 0; Fk < kk.length; Fk++) kk[Fk].dispose();
        if (ak || Xk) {
          for (tk.releaseSubMeshes(), Fk = 0; Fk < Vk.length;) Uk.d.CreateFromIndices(0, Vk[Fk].start, Vk[Fk].count, tk, void 0, !1), Fk++;
          for (const kk of tk.AY) kk.refreshBoundingInfo();
          tk.computeWorldMatrix(!0)
        }
        if (Xk) {
          const kk = new Tk.e(wk.name + "_merged", wk.XN());
          kk.l_ = dk;
          for (let Fk = 0; Fk < tk.AY.length; Fk++) tk.AY[Fk].materialIndex = sk[Fk];
          tk.material = kk
        } else tk.material = wk.material;
        return tk
      }
      E_(kk) {
        kk._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(kk)
      }
      N_(kk) {
        const Fk = kk._indexInSourceMeshInstanceArray;
        if (-1 != Fk) {
          if (Fk !== this.instances.length - 1) {
            const kk = this.instances[this.instances.length - 1];
            this.instances[Fk] = kk, kk._indexInSourceMeshInstanceArray = Fk
          }
          kk._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === ck.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(kk) {
        const Fk = this.XN();
        return Fk.forcePointsCloud ? ck.c.PointFillMode : Fk.forceWireframe ? ck.c.WireFrameFillMode : this.overrideRenderingFillMode ?? kk
      }
      setMaterialByID(kk) {
        return this.setMaterialById(kk)
      }
      static CreateRibbon(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(kk, Fk, Bk, Rk, tk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(kk, Fk, Bk, Rk, tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(kk, Fk, Bk, Rk, tk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(kk, Fk, Bk, Rk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(kk, Fk, Bk, Rk, tk, ak, Xk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(kk, Fk, Bk, Rk, tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(kk, Fk, Bk, Rk, tk, ak, Xk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(kk, Fk, Bk, Rk, tk, ak, Xk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(kk, Fk, Bk, Rk, tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(kk, Fk, Bk, Rk, tk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(kk, Fk, Bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(kk, Fk, Bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(kk, Fk, Bk, Rk, tk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(kk, Fk, Bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(kk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Ik.FRONTSIDE = uk.e.FRONTSIDE, Ik.BACKSIDE = uk.e.BACKSIDE, Ik.DOUBLESIDE = uk.e.DOUBLESIDE, Ik.DEFAULTSIDE = uk.e.DEFAULTSIDE, Ik.NO_CAP = 0, Ik.CAP_START = 1, Ik.CAP_END = 2, Ik.CAP_ALL = 3, Ik.NO_FLIP = 0, Ik.FLIP_TILE = 1, Ik.ROTATE_TILE = 2, Ik.FLIP_ROW = 3, Ik.ROTATE_ROW = 4, Ik.FLIP_N_ROTATE_TILE = 5, Ik.FLIP_N_ROTATE_ROW = 6, Ik.CENTER = 0, Ik.LEFT = 1, Ik.RIGHT = 2, Ik.TOP = 3, Ik.BOTTOM = 4, Ik.INSTANCEDMESH_SORT_TRANSPARENT = !1, Ik._GroundMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GroundMesh")
    }, Ik._GoldbergMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GoldbergMesh")
    }, Ik._LinesMeshParser = (kk, Fk) => {
      throw (0, hk.i)("LinesMesh")
    }, Ik._GreasedLineMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GreasedLineMesh")
    }, Ik._GreasedLineRibbonMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GreasedLineRibbonMesh")
    }, Ik._TrailMeshParser = (kk, Fk) => {
      throw (0, hk.i)("TrailMesh")
    }, Ik._GaussianSplattingMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GaussianSplattingMesh")
    }, Ik._GaussianSplattingPartProxyMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GaussianSplattingPartProxyMesh")
    }, Ik._GaussianSplattingCompoundMeshParser = (kk, Fk) => {
      throw (0, hk.i)("GaussianSplattingCompoundMesh")
    };
    let Qk = !1;

    function kF() {
      Qk || (Qk = !0, (0, Pk.d)("BABYLON.Mesh", Ik))
    }(Rk = Ik.prototype).uH ?? (Rk.uH = (0, hk.g)("Mesh", "uH")), (tk = Ik.prototype).simplify ?? (tk.simplify = (0, hk.g)("Mesh", "simplify")), (ak = Ik.prototype).thinInstanceAdd ?? (ak.thinInstanceAdd = (0, hk.g)("Mesh", "thinInstanceAdd")), (Xk = Ik.prototype).thinInstanceAddSelf ?? (Xk.thinInstanceAddSelf = (0, hk.g)("Mesh", "thinInstanceAddSelf")), (bk = Ik.prototype).thinInstanceRegisterAttribute ?? (bk.thinInstanceRegisterAttribute = (0, hk.g)("Mesh", "thinInstanceRegisterAttribute")), (wk = Ik.prototype).thinInstanceSetMatrixAt ?? (wk.thinInstanceSetMatrixAt = (0, hk.g)("Mesh", "thinInstanceSetMatrixAt")), (dk = Ik.prototype).thinInstanceSetAttributeAt ?? (dk.thinInstanceSetAttributeAt = (0, hk.g)("Mesh", "thinInstanceSetAttributeAt")), (sk = Ik.prototype).x_ ?? (sk.x_ = (0, hk.g)("Mesh", "x_")), (Vk = Ik.prototype).thinInstanceGetWorldMatrices ?? (Vk.thinInstanceGetWorldMatrices = (0, hk.g)("Mesh", "thinInstanceGetWorldMatrices")), (Jk = Ik.prototype).r_ ?? (Jk.r_ = (0, hk.g)("Mesh", "r_")), (Ak = Ik.prototype).thinInstancePartialBufferUpdate ?? (Ak.thinInstancePartialBufferUpdate = (0, hk.g)("Mesh", "thinInstancePartialBufferUpdate")), (ek = Ik.prototype).thinInstanceRefreshBoundingInfo ?? (ek.thinInstanceRefreshBoundingInfo = (0, hk.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (yk = Ik.prototype).getEmittedParticleSystems ?? (yk.getEmittedParticleSystems = (0, hk.g)("Mesh", "getEmittedParticleSystems")), (fk = Ik.prototype).getHierarchyEmittedParticleSystems ?? (fk.getHierarchyEmittedParticleSystems = (0, hk.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Ik.prototype, "edgesShareWithInstances") || Object.defineProperty(Ik.prototype, "edgesShareWithInstances", (0, hk.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Ik.prototype, "wFk") || Object.defineProperty(Ik.prototype, "wFk", (0, hk.f)("Mesh", "wFk")), Object.getOwnPropertyDescriptor(Ik.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Ik.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, hk.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Ik.prototype, "i_") || Object.defineProperty(Ik.prototype, "i_", (0, hk.f)("Mesh", "i_"))
  },
  39829: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ek
    });
    var Rk = Bk(39397),
      tk = Bk(36758),
      ak = Bk(39541),
      Xk = Bk(39296),
      bk = Bk(36917),
      wk = Bk(38320),
      dk = Bk(39404),
      sk = Bk(39823),
      Vk = Bk(39453),
      Jk = Bk(39703);
    class Ak {}
    let ek = (() => {
      var kk;
      let Fk, Bk, ek, yk, fk = [];
      return kk = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, sk.e)(this._applyToCoroutine.bind(this)), this.uniqueId = kk._UniqueIdGenerator, kk._UniqueIdGenerator++
        }
        set(kk, Fk) {
          switch (kk.length || wk.b.Warn(`Setting vertex data kind '${Fk}' with an empty array`), Fk) {
            case ak.n.PositionKind:
              this.positions = kk;
              break;
            case ak.n.NormalKind:
              this.normals = kk;
              break;
            case ak.n.TangentKind:
              this.tangents = kk;
              break;
            case ak.n.UVKind:
              this.uvs = kk;
              break;
            case ak.n.UV2Kind:
              this.uvs2 = kk;
              break;
            case ak.n.UV3Kind:
              this.uvs3 = kk;
              break;
            case ak.n.UV4Kind:
              this.uvs4 = kk;
              break;
            case ak.n.UV5Kind:
              this.uvs5 = kk;
              break;
            case ak.n.UV6Kind:
              this.uvs6 = kk;
              break;
            case ak.n.ColorKind:
              this.colors = kk;
              break;
            case ak.n.MatricesIndicesKind:
              this.matricesIndices = kk;
              break;
            case ak.n.MatricesWeightsKind:
              this.matricesWeights = kk;
              break;
            case ak.n.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = kk;
              break;
            case ak.n.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = kk
          }
        }
        applyToMesh(kk, Fk) {
          return this._applyTo(kk, Fk, !1), this
        }
        applyToGeometry(kk, Fk) {
          return this._applyTo(kk, Fk, !1), this
        }
        updateMesh(kk) {
          return this._update(kk), this
        }
        updateGeometry(kk) {
          return this._update(kk), this
        }* _applyToCoroutine(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (kk.setVerticesData(ak.n.PositionKind, this.positions, Fk), Bk && (yield)), this.normals && (kk.setVerticesData(ak.n.NormalKind, this.normals, Fk), Bk && (yield)), this.tangents && (kk.setVerticesData(ak.n.TangentKind, this.tangents, Fk), Bk && (yield)), this.uvs && (kk.setVerticesData(ak.n.UVKind, this.uvs, Fk), Bk && (yield)), this.uvs2 && (kk.setVerticesData(ak.n.UV2Kind, this.uvs2, Fk), Bk && (yield)), this.uvs3 && (kk.setVerticesData(ak.n.UV3Kind, this.uvs3, Fk), Bk && (yield)), this.uvs4 && (kk.setVerticesData(ak.n.UV4Kind, this.uvs4, Fk), Bk && (yield)), this.uvs5 && (kk.setVerticesData(ak.n.UV5Kind, this.uvs5, Fk), Bk && (yield)), this.uvs6 && (kk.setVerticesData(ak.n.UV6Kind, this.uvs6, Fk), Bk && (yield)), this.colors) {
            const Rk = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            kk.setVerticesData(ak.n.ColorKind, this.colors, Fk, Rk), this.hasVertexAlpha && void 0 !== kk.hasVertexAlpha && (kk.hasVertexAlpha = !0), Bk && (yield)
          }
          if (this.matricesIndices && (kk.setVerticesData(ak.n.MatricesIndicesKind, this.matricesIndices, Fk), Bk && (yield)), this.matricesWeights && (kk.setVerticesData(ak.n.MatricesWeightsKind, this.matricesWeights, Fk), Bk && (yield)), this.matricesIndicesExtra && (kk.setVerticesData(ak.n.MatricesIndicesExtraKind, this.matricesIndicesExtra, Fk), Bk && (yield)), this.matricesWeightsExtra && (kk.setVerticesData(ak.n.MatricesWeightsExtraKind, this.matricesWeightsExtra, Fk), Bk && (yield)), this.indices ? (kk.setIndices(this.indices, null, Fk), Bk && (yield)) : kk.setIndices([], null), kk.AY && this.materialInfos && this.materialInfos.length > 1) {
            const Fk = kk;
            Fk.AY = [];
            for (const kk of this.materialInfos) new Jk.d(kk.materialIndex, kk.verticesStart, kk.verticesCount, kk.indexStart, kk.indexCount, Fk)
          }
          return this
        }
        _update(kk, Fk, Bk) {
          return this.positions && kk.updateVerticesData(ak.n.PositionKind, this.positions, Fk, Bk), this.normals && kk.updateVerticesData(ak.n.NormalKind, this.normals, Fk, Bk), this.tangents && kk.updateVerticesData(ak.n.TangentKind, this.tangents, Fk, Bk), this.uvs && kk.updateVerticesData(ak.n.UVKind, this.uvs, Fk, Bk), this.uvs2 && kk.updateVerticesData(ak.n.UV2Kind, this.uvs2, Fk, Bk), this.uvs3 && kk.updateVerticesData(ak.n.UV3Kind, this.uvs3, Fk, Bk), this.uvs4 && kk.updateVerticesData(ak.n.UV4Kind, this.uvs4, Fk, Bk), this.uvs5 && kk.updateVerticesData(ak.n.UV5Kind, this.uvs5, Fk, Bk), this.uvs6 && kk.updateVerticesData(ak.n.UV6Kind, this.uvs6, Fk, Bk), this.colors && kk.updateVerticesData(ak.n.ColorKind, this.colors, Fk, Bk), this.matricesIndices && kk.updateVerticesData(ak.n.MatricesIndicesKind, this.matricesIndices, Fk, Bk), this.matricesWeights && kk.updateVerticesData(ak.n.MatricesWeightsKind, this.matricesWeights, Fk, Bk), this.matricesIndicesExtra && kk.updateVerticesData(ak.n.MatricesIndicesExtraKind, this.matricesIndicesExtra, Fk, Bk), this.matricesWeightsExtra && kk.updateVerticesData(ak.n.MatricesWeightsExtraKind, this.matricesWeightsExtra, Fk, Bk), this.indices && kk.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ak = tk.l.Qe[0],
            Xk = tk.l.Qe[1];
          for (let bk = Bk; bk < Bk + Rk; bk += 3) tk.s.FromArrayToRef(kk, bk, ak), tk.s.TransformCoordinatesToRef(ak, Fk, Xk), kk[bk] = Xk.x, kk[bk + 1] = Xk.y, kk[bk + 2] = Xk.z
        }
        static _TransformVector3Normals(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ak = tk.l.Qe[0],
            Xk = tk.l.Qe[1];
          for (let bk = Bk; bk < Bk + Rk; bk += 3) tk.s.FromArrayToRef(kk, bk, ak), tk.s.TransformNormalToRef(ak, Fk, Xk), kk[bk] = Xk.x, kk[bk + 1] = Xk.y, kk[bk + 2] = Xk.z
        }
        static _TransformVector4Normals(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ak = tk.l.Vector4[0],
            Xk = tk.l.Vector4[1];
          for (let bk = Bk; bk < Bk + Rk; bk += 4) tk.v.FromArrayToRef(kk, bk, ak), tk.v.TransformNormalToRef(ak, Fk, Xk), kk[bk] = Xk.x, kk[bk + 1] = Xk.y, kk[bk + 2] = Xk.z, kk[bk + 3] = Xk.w
        }
        static _FlipFaces(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
          for (let Rk = Fk; Rk < Fk + Bk; Rk += 3) {
            const Fk = kk[Rk + 1];
            kk[Rk + 1] = kk[Rk + 2], kk[Rk + 2] = Fk
          }
        }
        transform(Fk) {
          const Bk = Fk.determinant() < 0;
          return this.positions && kk._TransformVector3Coordinates(this.positions, Fk), this.normals && kk._TransformVector3Normals(this.normals, Fk), this.tangents && kk._TransformVector4Normals(this.tangents, Fk), Bk && this.indices && kk._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Fk = [];
          for (const Bk of this.materialInfos) {
            const Rk = new kk;
            if (this.positions && (Rk.positions = this.positions.slice(3 * Bk.verticesStart, 3 * (Bk.verticesCount + Bk.verticesStart))), this.normals && (Rk.normals = this.normals.slice(3 * Bk.verticesStart, 3 * (Bk.verticesCount + Bk.verticesStart))), this.tangents && (Rk.tangents = this.tangents.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.colors && (Rk.colors = this.colors.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.uvs && (Rk.uvs = this.uvs.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.uvs2 && (Rk.uvs2 = this.uvs2.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.uvs3 && (Rk.uvs3 = this.uvs3.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.uvs4 && (Rk.uvs4 = this.uvs4.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.uvs5 && (Rk.uvs5 = this.uvs5.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.uvs6 && (Rk.uvs6 = this.uvs6.slice(2 * Bk.verticesStart, 2 * (Bk.verticesCount + Bk.verticesStart))), this.matricesIndices && (Rk.matricesIndices = this.matricesIndices.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.matricesIndicesExtra && (Rk.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.matricesWeights && (Rk.matricesWeights = this.matricesWeights.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.matricesWeightsExtra && (Rk.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Bk.verticesStart, 4 * (Bk.verticesCount + Bk.verticesStart))), this.indices) {
              Rk.indices = [];
              for (let kk = Bk.indexStart; kk < Bk.indexStart + Bk.indexCount; kk++) Rk.indices.push(this.indices[kk] - Bk.verticesStart)
            }
            const tk = new Ak;
            tk.indexStart = 0, tk.indexCount = Rk.indices ? Rk.indices.length : 0, tk.materialIndex = Bk.materialIndex, tk.verticesStart = 0, tk.verticesCount = (Rk.positions ? Rk.positions.length : 0) / 3, Rk.materialInfos = [tk], Fk.push(Rk)
          }
          return Fk
        }
        merge(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const ak = Array.isArray(kk) ? kk.map((kk => ({
            vertexData: kk
          }))) : [{
            vertexData: kk
          }];
          return (0, sk.j)(this._mergeCoroutine(void 0, ak, Fk, !1, Bk, Rk, tk))
        }* _mergeCoroutine(Fk, Bk) {
          let Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            tk = arguments.length > 3 ? arguments[3] : void 0,
            Xk = arguments.length > 4 ? arguments[4] : void 0,
            bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            wk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let dk = Bk.map((kk => kk.vertexData)),
            sk = this;
          if (wk)
            for (const kk of dk) kk && (kk._validate(), !this.normals && kk.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && kk.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && kk.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && kk.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && kk.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && kk.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && kk.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && kk.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && kk.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && kk.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && kk.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && kk.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && kk.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const kk of dk)
            if (kk)
              if (wk) this.normals && !kk.normals && (kk.normals = new Float32Array(kk.positions.length)), this.tangents && !kk.tangents && (kk.tangents = new Float32Array(kk.positions.length / 3 * 4)), this.uvs && !kk.uvs && (kk.uvs = new Float32Array(kk.positions.length / 3 * 2)), this.uvs2 && !kk.uvs2 && (kk.uvs2 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs3 && !kk.uvs3 && (kk.uvs3 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs4 && !kk.uvs4 && (kk.uvs4 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs5 && !kk.uvs5 && (kk.uvs5 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs6 && !kk.uvs6 && (kk.uvs6 = new Float32Array(kk.positions.length / 3 * 2)), this.colors && !kk.colors && (kk.colors = new Float32Array(kk.positions.length / 3 * 4), kk.colors.fill(1)), this.matricesIndices && !kk.matricesIndices && (kk.matricesIndices = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeights && !kk.matricesWeights && (kk.matricesWeights = new Float32Array(kk.positions.length / 3 * 4)), this.matricesIndicesExtra && !kk.matricesIndicesExtra && (kk.matricesIndicesExtra = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeightsExtra && !kk.matricesWeightsExtra && (kk.matricesWeightsExtra = new Float32Array(kk.positions.length / 3 * 4));
              else if (kk._validate(), !this.normals !== !kk.normals || !this.tangents !== !kk.tangents || !this.uvs !== !kk.uvs || !this.uvs2 !== !kk.uvs2 || !this.uvs3 !== !kk.uvs3 || !this.uvs4 !== !kk.uvs4 || !this.uvs5 !== !kk.uvs5 || !this.uvs6 !== !kk.uvs6 || !this.colors !== !kk.colors || !this.matricesIndices !== !kk.matricesIndices || !this.matricesWeights !== !kk.matricesWeights || !this.matricesIndicesExtra !== !kk.matricesIndicesExtra || !this.matricesWeightsExtra !== !kk.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (bk) {
            let kk, Rk = 0,
              tk = 0;
            const ak = [];
            let Xk = null;
            const bk = [];
            for (const Bk of this.splitBasedOnMaterialID()) bk.push({
              vertexData: Bk,
              transform: Fk
            });
            for (const Fk of Bk)
              if (Fk.vertexData)
                for (const kk of Fk.vertexData.splitBasedOnMaterialID()) bk.push({
                  vertexData: kk,
                  transform: Fk.transform
                });
            bk.sort(((kk, Fk) => {
              const Bk = kk.vertexData.materialInfos ? kk.vertexData.materialInfos[0].materialIndex : 0,
                Rk = Fk.vertexData.materialInfos ? Fk.vertexData.materialInfos[0].materialIndex : 0;
              return Bk > Rk ? 1 : Bk === Rk ? 0 : -1
            }));
            for (const Fk of bk) {
              const Bk = Fk.vertexData;
              if (kk = Bk.materialInfos ? Bk.materialInfos[0].materialIndex : 0, Xk && Xk.materialIndex === kk) Xk.indexCount += Bk.indices.length, Xk.verticesCount += Bk.positions.length / 3;
              else {
                const Fk = new Ak;
                Fk.materialIndex = kk, Fk.indexStart = Rk, Fk.indexCount = Bk.indices.length, Fk.verticesStart = tk, Fk.verticesCount = Bk.positions.length / 3, ak.push(Fk), Xk = Fk
              }
              Rk += Bk.indices.length, tk += Bk.positions.length / 3
            }
            const wk = bk.splice(0, 1)[0];
            sk = wk.vertexData, Fk = wk.transform, dk = bk.map((kk => kk.vertexData)), Bk = bk, this.materialInfos = ak
          }
          const Vk = dk.reduce(((kk, Fk) => kk + (Fk.indices?.length ?? 0)), sk.indices?.length ?? 0);
          let Jk = Xk || dk.some((kk => kk.indices === sk.indices)) ? sk.indices?.slice() : sk.indices;
          if (Vk > 0) {
            let ak = Jk?.length ?? 0;
            if (Jk || (Jk = new Array(Vk)), Jk.length !== Vk) {
              if (Array.isArray(Jk)) Jk.length = Vk;
              else {
                const kk = Rk || Jk instanceof Uint32Array ? new Uint32Array(Vk) : new Uint16Array(Vk);
                kk.set(Jk), Jk = kk
              }
              Fk && Fk.determinant() < 0 && kk._FlipFaces(Jk, 0, ak)
            }
            let Xk = sk.positions ? sk.positions.length / 3 : 0;
            for (const {
                vertexData: Fk,
                transform: Rk
              }
              of Bk)
              if (Fk.indices) {
                for (let kk = 0; kk < Fk.indices.length; kk++) Jk[ak + kk] = Fk.indices[kk] + Xk;
                Rk && Rk.determinant() < 0 && kk._FlipFaces(Jk, ak, Fk.indices.length), Xk += Fk.positions.length / 3, ak += Fk.indices.length, tk && (yield)
              }
          }
          return this.indices = Jk, this.positions = kk._MergeElement(ak.n.PositionKind, sk.positions, Fk, Bk.map((kk => [kk.vertexData.positions, kk.transform]))), tk && (yield), sk.normals && (this.normals = kk._MergeElement(ak.n.NormalKind, sk.normals, Fk, Bk.map((kk => [kk.vertexData.normals, kk.transform]))), tk && (yield)), sk.tangents && (this.tangents = kk._MergeElement(ak.n.TangentKind, sk.tangents, Fk, Bk.map((kk => [kk.vertexData.tangents, kk.transform]))), tk && (yield)), sk.uvs && (this.uvs = kk._MergeElement(ak.n.UVKind, sk.uvs, Fk, Bk.map((kk => [kk.vertexData.uvs, kk.transform]))), tk && (yield)), sk.uvs2 && (this.uvs2 = kk._MergeElement(ak.n.UV2Kind, sk.uvs2, Fk, Bk.map((kk => [kk.vertexData.uvs2, kk.transform]))), tk && (yield)), sk.uvs3 && (this.uvs3 = kk._MergeElement(ak.n.UV3Kind, sk.uvs3, Fk, Bk.map((kk => [kk.vertexData.uvs3, kk.transform]))), tk && (yield)), sk.uvs4 && (this.uvs4 = kk._MergeElement(ak.n.UV4Kind, sk.uvs4, Fk, Bk.map((kk => [kk.vertexData.uvs4, kk.transform]))), tk && (yield)), sk.uvs5 && (this.uvs5 = kk._MergeElement(ak.n.UV5Kind, sk.uvs5, Fk, Bk.map((kk => [kk.vertexData.uvs5, kk.transform]))), tk && (yield)), sk.uvs6 && (this.uvs6 = kk._MergeElement(ak.n.UV6Kind, sk.uvs6, Fk, Bk.map((kk => [kk.vertexData.uvs6, kk.transform]))), tk && (yield)), sk.colors && (this.colors = kk._MergeElement(ak.n.ColorKind, sk.colors, Fk, Bk.map((kk => [kk.vertexData.colors, kk.transform]))), (void 0 !== sk.hasVertexAlpha || Bk.some((kk => void 0 !== kk.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = sk.hasVertexAlpha || Bk.some((kk => kk.vertexData.hasVertexAlpha))), tk && (yield)), sk.matricesIndices && (this.matricesIndices = kk._MergeElement(ak.n.MatricesIndicesKind, sk.matricesIndices, Fk, Bk.map((kk => [kk.vertexData.matricesIndices, kk.transform]))), tk && (yield)), sk.matricesWeights && (this.matricesWeights = kk._MergeElement(ak.n.MatricesWeightsKind, sk.matricesWeights, Fk, Bk.map((kk => [kk.vertexData.matricesWeights, kk.transform]))), tk && (yield)), sk.matricesIndicesExtra && (this.matricesIndicesExtra = kk._MergeElement(ak.n.MatricesIndicesExtraKind, sk.matricesIndicesExtra, Fk, Bk.map((kk => [kk.vertexData.matricesIndicesExtra, kk.transform]))), tk && (yield)), sk.matricesWeightsExtra && (this.matricesWeightsExtra = kk._MergeElement(ak.n.MatricesWeightsExtraKind, sk.matricesWeightsExtra, Fk, Bk.map((kk => [kk.vertexData.matricesWeightsExtra, kk.transform])))), this
        }
        static _MergeElement(Fk, Bk, Rk, tk) {
          const Xk = tk.filter((kk => null !== kk[0] && void 0 !== kk[0]));
          if (!Bk && 0 == Xk.length) return Bk;
          if (!Bk) return this._MergeElement(Fk, Xk[0][0], Xk[0][1], Xk.slice(1));
          const bk = Xk.reduce(((kk, Fk) => kk + Fk[0].length), Bk.length),
            wk = Fk === ak.n.PositionKind ? kk._TransformVector3Coordinates : Fk === ak.n.NormalKind ? kk._TransformVector3Normals : Fk === ak.n.TangentKind ? kk._TransformVector4Normals : () => {};
          if (Bk instanceof Float32Array) {
            const kk = new Float32Array(bk);
            kk.set(Bk), Rk && wk(kk, Rk, 0, Bk.length);
            let Fk = Bk.length;
            for (const [Bk, Rk] of Xk) kk.set(Bk, Fk), Rk && wk(kk, Rk, Fk, Bk.length), Fk += Bk.length;
            return kk
          } {
            const kk = new Array(bk);
            for (let Rk = 0; Rk < Bk.length; Rk++) kk[Rk] = Bk[Rk];
            Rk && wk(kk, Rk, 0, Bk.length);
            let Fk = Bk.length;
            for (const [Bk, Rk] of Xk) {
              for (let Rk = 0; Rk < Bk.length; Rk++) kk[Fk + Rk] = Bk[Rk];
              Rk && wk(kk, Rk, Fk, Bk.length), Fk += Bk.length
            }
            return kk
          }
        }
        _validate() {
          if (!this.positions) throw new Vk.j("Positions are required", Vk.g.MeshInvalidPositionsError);
          const kk = (kk, Fk) => {
              const Bk = (0, ak.k)(kk);
              if (Fk.length % Bk !== 0) throw new Error("The " + kk + "s array count must be a multiple of " + Bk);
              return Fk.length / Bk
            },
            Fk = kk(ak.n.PositionKind, this.positions),
            Bk = (Bk, Rk) => {
              const tk = kk(Bk, Rk);
              if (tk !== Fk) throw new Error("The " + Bk + "s element count (" + tk + ") does not match the positions count (" + Fk + ")")
            };
          this.normals && Bk(ak.n.NormalKind, this.normals), this.tangents && Bk(ak.n.TangentKind, this.tangents), this.uvs && Bk(ak.n.UVKind, this.uvs), this.uvs2 && Bk(ak.n.UV2Kind, this.uvs2), this.uvs3 && Bk(ak.n.UV3Kind, this.uvs3), this.uvs4 && Bk(ak.n.UV4Kind, this.uvs4), this.uvs5 && Bk(ak.n.UV5Kind, this.uvs5), this.uvs6 && Bk(ak.n.UV6Kind, this.uvs6), this.colors && Bk(ak.n.ColorKind, this.colors), this.matricesIndices && Bk(ak.n.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Bk(ak.n.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Bk(ak.n.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Bk(ak.n.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Fk = this.serialize();
          return kk.Parse(Fk)
        }
        serialize() {
          const kk = {};
          if (this.positions && (kk.positions = Array.from(this.positions)), this.normals && (kk.normals = Array.from(this.normals)), this.tangents && (kk.tangents = Array.from(this.tangents)), this.uvs && (kk.uvs = Array.from(this.uvs)), this.uvs2 && (kk.uvs2 = Array.from(this.uvs2)), this.uvs3 && (kk.uvs3 = Array.from(this.uvs3)), this.uvs4 && (kk.uvs4 = Array.from(this.uvs4)), this.uvs5 && (kk.uvs5 = Array.from(this.uvs5)), this.uvs6 && (kk.uvs6 = Array.from(this.uvs6)), this.colors && (kk.colors = Array.from(this.colors), kk.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (kk.matricesIndices = Array.from(this.matricesIndices), kk.matricesIndicesExpanded = !0), this.matricesWeights && (kk.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (kk.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), kk.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (kk.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), kk.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            kk.materialInfos = [];
            for (const Fk of this.materialInfos) {
              const Bk = {
                indexStart: Fk.indexStart,
                indexCount: Fk.indexCount,
                materialIndex: Fk.materialIndex,
                verticesStart: Fk.verticesStart,
                verticesCount: Fk.verticesCount
              };
              kk.materialInfos.push(Bk)
            }
          }
          return kk
        }
        static ExtractFromMesh(Fk, Bk, Rk) {
          return kk._ExtractFrom(Fk, Bk, Rk)
        }
        static ExtractFromGeometry(Fk, Bk, Rk) {
          return kk._ExtractFrom(Fk, Bk, Rk)
        }
        static _ExtractFrom(Fk, Bk, Rk) {
          const tk = new kk;
          if (Fk.isVerticesDataPresent(ak.n.PositionKind) && (tk.positions = Fk.getVerticesData(ak.n.PositionKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.NormalKind) && (tk.normals = Fk.getVerticesData(ak.n.NormalKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.TangentKind) && (tk.tangents = Fk.getVerticesData(ak.n.TangentKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UVKind) && (tk.uvs = Fk.getVerticesData(ak.n.UVKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UV2Kind) && (tk.uvs2 = Fk.getVerticesData(ak.n.UV2Kind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UV3Kind) && (tk.uvs3 = Fk.getVerticesData(ak.n.UV3Kind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UV4Kind) && (tk.uvs4 = Fk.getVerticesData(ak.n.UV4Kind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UV5Kind) && (tk.uvs5 = Fk.getVerticesData(ak.n.UV5Kind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.UV6Kind) && (tk.uvs6 = Fk.getVerticesData(ak.n.UV6Kind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.ColorKind)) {
            const kk = Fk.geometry || Fk,
              Xk = kk.getVertexBuffer(ak.n.ColorKind),
              bk = kk.getVerticesData(ak.n.ColorKind, Bk, Rk);
            if (3 === Xk.getSize()) {
              const kk = new Float32Array(4 * bk.length / 3);
              for (let Fk = 0, Bk = 0; Fk < bk.length; Fk += 3, Bk += 4) kk[Bk] = bk[Fk], kk[Bk + 1] = bk[Fk + 1], kk[Bk + 2] = bk[Fk + 2], kk[Bk + 3] = 1;
              tk.colors = kk
            } else {
              if (4 !== Xk.getSize()) throw new Error(`Unexpected number of color components: ${Xk.getSize()}`);
              tk.colors = bk
            }
          }
          return Fk.isVerticesDataPresent(ak.n.MatricesIndicesKind) && (tk.matricesIndices = Fk.getVerticesData(ak.n.MatricesIndicesKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.MatricesWeightsKind) && (tk.matricesWeights = Fk.getVerticesData(ak.n.MatricesWeightsKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.MatricesIndicesExtraKind) && (tk.matricesIndicesExtra = Fk.getVerticesData(ak.n.MatricesIndicesExtraKind, Bk, Rk)), Fk.isVerticesDataPresent(ak.n.MatricesWeightsExtraKind) && (tk.matricesWeightsExtra = Fk.getVerticesData(ak.n.MatricesWeightsExtraKind, Bk, Rk)), tk.indices = Fk.hBk(Bk, Rk), tk
        }
        static CreateRibbon(kk) {
          throw (0, Xk.i)("ribbonBuilder")
        }
        static CreateBox(kk) {
          throw (0, Xk.i)("boxBuilder")
        }
        static CreateTiledBox(kk) {
          throw (0, Xk.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(kk) {
          throw (0, Xk.i)("tiledPlaneBuilder")
        }
        static CreateSphere(kk) {
          throw (0, Xk.i)("sphereBuilder")
        }
        static CreateCylinder(kk) {
          throw (0, Xk.i)("cylinderBuilder")
        }
        static CreateTorus(kk) {
          throw (0, Xk.i)("torusBuilder")
        }
        static CreateLineSystem(kk) {
          throw (0, Xk.i)("linesBuilder")
        }
        static CreateDashedLines(kk) {
          throw (0, Xk.i)("linesBuilder")
        }
        static CreateGround(kk) {
          throw (0, Xk.i)("groundBuilder")
        }
        static CreateTiledGround(kk) {
          throw (0, Xk.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(kk) {
          throw (0, Xk.i)("groundBuilder")
        }
        static CreatePlane(kk) {
          throw (0, Xk.i)("planeBuilder")
        }
        static CreateDisc(kk) {
          throw (0, Xk.i)("discBuilder")
        }
        static CreatePolygon(kk, Fk, Bk, Rk, tk, ak, bk) {
          throw (0, Xk.i)("polygonBuilder")
        }
        static CreateIcoSphere(kk) {
          throw (0, Xk.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(kk) {
          throw (0, Xk.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || tk.s.Up();
          throw (0, Xk.i)("capsuleBuilder")
        }
        static CreateTorusKnot(kk) {
          throw (0, Xk.i)("torusKnotBuilder")
        }
        static ComputeNormals(kk, Fk, Bk, Rk) {
          let ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk = !1,
            Nk = !1,
            Hk = !1,
            uk = !1,
            Mk = 1,
            gk = 0,
            Uk = null;
          Rk && (Sk = !!Rk.facetNormals, Nk = !!Rk.facetPositions, Hk = !!Rk.facetPartitioning, Mk = !0 === Rk.useRightHandedSystem ? -1 : 1, gk = Rk.ratio || 0, uk = !!Rk.depthSort, Uk = Rk.distanceTo, uk && void 0 === Uk && (Uk = tk.s.Zero()));
          let ck = 0,
            Gk = 0,
            Tk = 0,
            rk = 0;
          for (Hk && Rk && Rk.bbSize && (ck = Rk.subDiv.X * gk / Rk.bbSize.x, Gk = Rk.subDiv.Y * gk / Rk.bbSize.y, Tk = Rk.subDiv.Z * gk / Rk.bbSize.z, rk = Rk.subDiv.max * Rk.subDiv.max, Rk.facetPartitioning.length = 0), ak = 0; ak < kk.length; ak++) Bk[ak] = 0;
          const Dk = Fk.length / 3 | 0;
          for (ak = 0; ak < Dk; ak++) {
            if (fk = 3 * Fk[3 * ak], mk = fk + 1, Wk = fk + 2, vk = 3 * Fk[3 * ak + 1], ik = vk + 1, Yk = vk + 2, Lk = 3 * Fk[3 * ak + 2], Ok = Lk + 1, Ek = Lk + 2, Xk = kk[fk] - kk[vk], bk = kk[mk] - kk[ik], wk = kk[Wk] - kk[Yk], dk = kk[Lk] - kk[vk], sk = kk[Ok] - kk[ik], Vk = kk[Ek] - kk[Yk], Jk = Mk * (bk * Vk - wk * sk), Ak = Mk * (wk * dk - Xk * Vk), ek = Mk * (Xk * sk - bk * dk), yk = Math.sqrt(Jk * Jk + Ak * Ak + ek * ek), yk = 0 === yk ? 1 : yk, Jk /= yk, Ak /= yk, ek /= yk, Sk && Rk && (Rk.facetNormals[ak].x = Jk, Rk.facetNormals[ak].y = Ak, Rk.facetNormals[ak].z = ek), Nk && Rk && (Rk.facetPositions[ak].x = (kk[fk] + kk[vk] + kk[Lk]) / 3, Rk.facetPositions[ak].y = (kk[mk] + kk[ik] + kk[Ok]) / 3, Rk.facetPositions[ak].z = (kk[Wk] + kk[Yk] + kk[Ek]) / 3), Hk && Rk) {
              const Fk = Math.floor((Rk.facetPositions[ak].x - Rk.bInfo.minimum.x * gk) * ck),
                Bk = Math.floor((Rk.facetPositions[ak].y - Rk.bInfo.minimum.y * gk) * Gk),
                tk = Math.floor((Rk.facetPositions[ak].z - Rk.bInfo.minimum.z * gk) * Tk),
                Xk = Math.floor((kk[fk] - Rk.bInfo.minimum.x * gk) * ck),
                bk = Math.floor((kk[mk] - Rk.bInfo.minimum.y * gk) * Gk),
                wk = Math.floor((kk[Wk] - Rk.bInfo.minimum.z * gk) * Tk),
                dk = Math.floor((kk[vk] - Rk.bInfo.minimum.x * gk) * ck),
                sk = Math.floor((kk[ik] - Rk.bInfo.minimum.y * gk) * Gk),
                Vk = Math.floor((kk[Yk] - Rk.bInfo.minimum.z * gk) * Tk),
                Jk = Math.floor((kk[Lk] - Rk.bInfo.minimum.x * gk) * ck),
                Ak = Math.floor((kk[Ok] - Rk.bInfo.minimum.y * gk) * Gk),
                ek = Math.floor((kk[Ek] - Rk.bInfo.minimum.z * gk) * Tk),
                yk = Xk + Rk.subDiv.max * bk + rk * wk,
                Sk = dk + Rk.subDiv.max * sk + rk * Vk,
                Nk = Jk + Rk.subDiv.max * Ak + rk * ek,
                Hk = Fk + Rk.subDiv.max * Bk + rk * tk;
              Rk.facetPartitioning[Hk] = Rk.facetPartitioning[Hk] ? Rk.facetPartitioning[Hk] : [], Rk.facetPartitioning[yk] = Rk.facetPartitioning[yk] ? Rk.facetPartitioning[yk] : [], Rk.facetPartitioning[Sk] = Rk.facetPartitioning[Sk] ? Rk.facetPartitioning[Sk] : [], Rk.facetPartitioning[Nk] = Rk.facetPartitioning[Nk] ? Rk.facetPartitioning[Nk] : [], Rk.facetPartitioning[yk].push(ak), Sk != yk && Rk.facetPartitioning[Sk].push(ak), Nk != Sk && Nk != yk && Rk.facetPartitioning[Nk].push(ak), Hk != yk && Hk != Sk && Hk != Nk && Rk.facetPartitioning[Hk].push(ak)
            }
            if (uk && Rk && Rk.facetPositions) {
              const kk = Rk.depthSortedFacets[ak];
              kk.ind = 3 * ak, kk.sqDistance = tk.s.DistanceSquared(Rk.facetPositions[ak], Uk)
            }
            Bk[fk] += Jk, Bk[mk] += Ak, Bk[Wk] += ek, Bk[vk] += Jk, Bk[ik] += Ak, Bk[Yk] += ek, Bk[Lk] += Jk, Bk[Ok] += Ak, Bk[Ek] += ek
          }
          for (ak = 0; ak < Bk.length / 3; ak++) Jk = Bk[3 * ak], Ak = Bk[3 * ak + 1], ek = Bk[3 * ak + 2], yk = Math.sqrt(Jk * Jk + Ak * Ak + ek * ek), yk = 0 === yk ? 1 : yk, Jk /= yk, Ak /= yk, ek /= yk, Bk[3 * ak] = Jk, Bk[3 * ak + 1] = Ak, Bk[3 * ak + 2] = ek
        }
        static _ComputeSides(Fk, Bk, Rk, ak, Xk, bk, wk) {
          const dk = Rk.length,
            sk = ak.length;
          let Vk, Jk;
          switch (Fk = Fk || kk.DEFAULTSIDE) {
            case kk.FRONTSIDE:
              break;
            case kk.BACKSIDE:
              for (Vk = 0; Vk < dk; Vk += 3) {
                const kk = Rk[Vk];
                Rk[Vk] = Rk[Vk + 2], Rk[Vk + 2] = kk
              }
              for (Jk = 0; Jk < sk; Jk++) ak[Jk] = -ak[Jk];
              break;
            case kk.DOUBLESIDE: {
              const kk = Bk.length,
                Fk = kk / 3;
              for (let Rk = 0; Rk < kk; Rk++) Bk[kk + Rk] = Bk[Rk];
              for (Vk = 0; Vk < dk; Vk += 3) Rk[Vk + dk] = Rk[Vk + 2] + Fk, Rk[Vk + 1 + dk] = Rk[Vk + 1] + Fk, Rk[Vk + 2 + dk] = Rk[Vk] + Fk;
              for (Jk = 0; Jk < sk; Jk++) ak[sk + Jk] = -ak[Jk];
              const Ak = Xk.length;
              let ek;
              for (ek = 0; ek < Ak; ek++) Xk[ek + Ak] = Xk[ek];
              for (bk = bk || new tk.v(0, 0, 1, 1), wk = wk || new tk.v(0, 0, 1, 1), ek = 0, Vk = 0; Vk < Ak / 2; Vk++) Xk[ek] = bk.x + (bk.z - bk.x) * Xk[ek], Xk[ek + 1] = bk.y + (bk.w - bk.y) * Xk[ek + 1], Xk[ek + Ak] = wk.x + (wk.z - wk.x) * Xk[ek + Ak], Xk[ek + Ak + 1] = wk.y + (wk.w - wk.y) * Xk[ek + Ak + 1], ek += 2;
              break
            }
          }
        }
        static Parse(Fk) {
          const Bk = new kk,
            Rk = Fk.positions;
          Rk && Bk.set(Rk, ak.n.PositionKind);
          const tk = Fk.normals;
          tk && Bk.set(tk, ak.n.NormalKind);
          const Xk = Fk.tangents;
          Xk && Bk.set(Xk, ak.n.TangentKind);
          const wk = Fk.uvs;
          wk && Bk.set(wk, ak.n.UVKind);
          const dk = Fk.uvs2;
          dk && Bk.set(dk, ak.n.UV2Kind);
          const sk = Fk.uvs3;
          sk && Bk.set(sk, ak.n.UV3Kind);
          const Vk = Fk.uvs4;
          Vk && Bk.set(Vk, ak.n.UV4Kind);
          const Jk = Fk.uvs5;
          Jk && Bk.set(Jk, ak.n.UV5Kind);
          const ek = Fk.uvs6;
          ek && Bk.set(ek, ak.n.UV6Kind);
          const yk = Fk.colors;
          yk && (Bk.set(bk.i.CheckColors4(yk, Rk.length / 3), ak.n.ColorKind), void 0 !== Fk.hasVertexAlpha && (Bk.hasVertexAlpha = Fk.hasVertexAlpha));
          const fk = Fk.matricesIndices;
          fk && Bk.set(fk, ak.n.MatricesIndicesKind);
          const mk = Fk.matricesWeights;
          mk && Bk.set(mk, ak.n.MatricesWeightsKind);
          const Wk = Fk.indices;
          Wk && (Bk.indices = Wk);
          const vk = Fk.materialInfos;
          if (vk) {
            Bk.materialInfos = [];
            for (const kk of vk) {
              const Fk = new Ak;
              Fk.indexCount = kk.indexCount, Fk.indexStart = kk.indexStart, Fk.verticesCount = kk.verticesCount, Fk.verticesStart = kk.verticesStart, Fk.materialIndex = kk.materialIndex, Bk.materialInfos.push(Fk)
            }
          }
          return Bk
        }
        static ImportVertexData(Fk, Bk) {
          const Rk = kk.Parse(Fk);
          Bk.setAllVerticesData(Rk, Fk.updatable)
        }
      }, (() => {
        const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [dk.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Bk = [dk.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ek = [dk.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], yk = [dk.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Rk.j)(kk, null, Fk, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Coordinates" in kk,
            get: kk => kk._TransformVector3Coordinates
          },
          metadata: tk
        }, null, fk), (0, Rk.j)(kk, null, Bk, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Normals" in kk,
            get: kk => kk._TransformVector3Normals
          },
          metadata: tk
        }, null, fk), (0, Rk.j)(kk, null, ek, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector4Normals" in kk,
            get: kk => kk._TransformVector4Normals
          },
          metadata: tk
        }, null, fk), (0, Rk.j)(kk, null, yk, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: kk => "_FlipFaces" in kk,
            get: kk => kk._FlipFaces
          },
          metadata: tk
        }, null, fk), tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tk
        })
      })(), kk.FRONTSIDE = ((0, Rk.l)(kk, fk), 0), kk.BACKSIDE = 1, kk.DOUBLESIDE = 2, kk.DEFAULTSIDE = 0, kk._UniqueIdGenerator = 0, kk
    })()
  },
  39897: (kk, Fk, Bk) => {
    var Rk = Bk(36758),
      tk = Bk(38320),
      ak = Bk(39716),
      Xk = Bk(39817),
      bk = Bk(39541);
    const wk = "bakedVertexAnimationSettingsInstanced";

    function dk(kk) {
      const Fk = kk.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Fk instanceof Float32Array || Fk instanceof Uint16Array
    }

    function sk(kk, Fk, Bk, Rk) {
      Bk.J_(Number.POSITIVE_INFINITY), Rk.J_(Number.NEGATIVE_INFINITY);
      for (let tk = 0; tk < 3 * Fk; tk += 3) {
        const Fk = kk[tk],
          ak = kk[tk + 1],
          Xk = kk[tk + 2];
        Fk < Bk.x && (Bk.x = Fk), ak < Bk.y && (Bk.y = ak), Xk < Bk.z && (Bk.z = Xk), Fk > Rk.x && (Rk.x = Fk), ak > Rk.y && (Rk.y = ak), Xk > Rk.z && (Rk.z = Xk)
      }
    }

    function Vk(kk, Fk, Bk) {
      Bk && (kk.x -= kk.x * Bk.x + Bk.y, kk.y -= kk.y * Bk.x + Bk.y, kk.z -= kk.z * Bk.x + Bk.y, Fk.x += Fk.x * Bk.x + Bk.y, Fk.y += Fk.y * Bk.x + Bk.y, Fk.z += Fk.z * Bk.x + Bk.y)
    }

    function Jk(kk, Fk, Bk, tk, ak) {
      const Xk = Rk.l.Qe[7],
        bk = Rk.l.Qe[8];
      for (let wk = 0; wk < 2; ++wk)
        for (let dk = 0; dk < 2; ++dk)
          for (let sk = 0; sk < 2; ++sk) Xk.set(wk ? Fk.x : kk.x, dk ? Fk.y : kk.y, sk ? Fk.z : kk.z), Rk.s.TransformCoordinatesToRef(Xk, Bk, bk), tk.minimizeInPlace(bk), ak.maximizeInPlace(bk)
    }

    function Ak(kk, Fk, Bk, tk, ak) {
      const Xk = Rk.l.Qe[7];
      for (let bk = 0; bk < 3 * Fk; bk += 3) Rk.s.TransformCoordinatesFromFloatsToRef(kk[bk], kk[bk + 1], kk[bk + 2], Bk, Xk), tk.minimizeInPlace(Xk), ak.maximizeInPlace(Xk)
    }
    let ek = !1;
    ek || (ek = !0, Xk.b.prototype.thinInstanceAdd = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.XN().ne().getCaps().instancedArrays) return tk.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(kk) ? kk.length : 1);
      const Bk = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(kk))
        for (let Rk = 0; Rk < kk.length; ++Rk) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk[Rk], Rk === kk.length - 1 && Fk);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk, Fk);
      return Bk
    }, Xk.b.prototype.thinInstanceAddSelf = function() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Rk.c.IdentityReadOnly, kk)
    }, Xk.b.prototype.thinInstanceRegisterAttribute = function(kk, Fk) {
      kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), this.removeVerticesData(kk), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[kk] = Fk, this._userThinInstanceBuffersStorage.sizes[kk] = Fk * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[kk] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[kk]), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new bk.n(this.ne(), this._userThinInstanceBuffersStorage.data[kk], kk, !0, !1, Fk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk])
    }, Xk.b.prototype.thinInstanceSetMatrixAt = function(kk, Fk) {
      let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || kk >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Rk = this._thinInstanceDataStorage.matrixData;
      return Fk.copyToArray(Rk, 16 * kk), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[kk] = Fk), Bk && (this.r_("matrix"), this.Fy || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Xk.b.prototype.thinInstanceSetAttributeAt = function(kk, Fk, Bk) {
      let Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[kk] || Fk >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(kk, 0), this._userThinInstanceBuffersStorage.data[kk].set(Bk, Fk * this._userThinInstanceBuffersStorage.strides[kk]), Rk && this.r_(kk), !0)
    }, Object.defineProperty(Xk.b.prototype, "i_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(kk) {
        const Fk = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        kk <= (Fk ? Fk.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = kk)
      },
      enumerable: !0,
      configurable: !0
    }), Xk.b.prototype._thinInstanceCreateMatrixBuffer = function(kk, Fk) {
      let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Rk = new bk.d(this.ne(), Fk, !Bk, 16, !1, !0);
      for (let tk = 0; tk < 4; tk++) this.setVerticesBuffer(Rk.createVertexBuffer(kk + tk, 4 * tk, 4));
      return Rk
    }, Xk.b.prototype.x_ = function(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Bk = Bk || 16, "matrix" === kk) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Fk ? Fk.length : 32 * Bk, this._thinInstanceDataStorage.matrixData = Fk, this._thinInstanceDataStorage.worldMatrices = null, null !== Fk ? (this._thinInstanceDataStorage.instancesCount = Fk.length / Bk, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Fk, Rk), this.Fy || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Fy || this.refreshBoundingInfo());
      else if ("previousMatrix" === kk) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Fk, null !== Fk && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Fk, Rk));
      else if ("splatIndex" === kk && Fk) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Fk.length / Bk, this._userThinInstanceBuffersStorage.data[kk] = Fk, this._userThinInstanceBuffersStorage.strides[kk] = Bk, this._userThinInstanceBuffersStorage.sizes[kk] = Fk.length;
        const Rk = new bk.d(this.ne(), Fk, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Rk;
        for (let Fk = 0; Fk < 4; Fk++) this.setVerticesBuffer(Rk.createVertexBuffer(kk + Fk, 4 * Fk, 4))
      } else kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), null === Fk ? this._userThinInstanceBuffersStorage?.data[kk] && (this.removeVerticesData(kk), delete this._userThinInstanceBuffersStorage.data[kk], delete this._userThinInstanceBuffersStorage.strides[kk], delete this._userThinInstanceBuffersStorage.sizes[kk], delete this._userThinInstanceBuffersStorage.vertexBuffers[kk]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[kk] = Fk, this._userThinInstanceBuffersStorage.strides[kk] = Bk, this._userThinInstanceBuffersStorage.sizes[kk] = Fk.length, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new bk.n(this.ne(), Fk, kk, !Rk, !1, Bk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, Xk.b.prototype.r_ = function(kk) {
      "matrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === kk ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0, this._thinInstanceDataStorage.instancesCount) : (kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[kk].isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0)))
    }, Xk.b.prototype.thinInstancePartialBufferUpdate = function(kk, Fk, Bk) {
      if ("matrix" === kk) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Fk ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Bk * Float32Array.BYTES_PER_ELEMENT, 16 * Fk), 16 * Bk) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Fk, Bk));
      else if (kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk]) {
        const Rk = this._userThinInstanceBuffersStorage.vertexBuffers[kk];
        if ("number" === typeof Fk) {
          const Rk = new Float32Array(this._userThinInstanceBuffersStorage.data[kk].buffer, this._userThinInstanceBuffersStorage.data[kk].byteOffset + Bk * this._userThinInstanceBuffersStorage.strides[kk] * Float32Array.BYTES_PER_ELEMENT, Fk * this._userThinInstanceBuffersStorage.strides[kk]);
          this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(Rk, Bk * this._userThinInstanceBuffersStorage.strides[kk])
        } else Rk.updateDirectly(Fk, Bk)
      }
    }, Xk.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const kk = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Fk = 0; Fk < this._thinInstanceDataStorage.instancesCount; ++Fk) this._thinInstanceDataStorage.worldMatrices[Fk] = Rk.c.FromArray(kk, 16 * Fk)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Xk.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Xk = this._thinInstanceDataStorage.boundingVectors;
      if (kk || !this.rawBoundingInfo) {
        if (Xk.length = 0, tk && function(kk, Fk, Bk) {
            const tk = kk._userThinInstanceBuffersStorage,
              Xk = tk?.data[wk],
              ek = tk?.strides[wk];
            if (!Xk || !ek || ek < 4 || !dk(kk)) return !1;
            const yk = kk._thinInstanceDataStorage.matrixData;
            if (!yk) return !1;
            const fk = {},
              mk = Rk.l.Vector4[0],
              Wk = Rk.l.Qe[1],
              vk = Rk.l.Qe[2],
              ik = Rk.l.Qe[3],
              Yk = Rk.l.Qe[4],
              Lk = Rk.l.Qe[5],
              Ok = Rk.l.Qe[6],
              Ek = Rk.l.Matrix[2],
              Sk = kk.geometry ? kk.geometry.boundingBias : null,
              Nk = kk.getTotalVertices();
            Wk.J_(Number.POSITIVE_INFINITY), vk.J_(Number.NEGATIVE_INFINITY), ik.J_(Number.POSITIVE_INFINITY), Yk.J_(Number.NEGATIVE_INFINITY);
            for (let ak = 0; ak < kk._thinInstanceDataStorage.instancesCount; ++ak) {
              const Fk = ak * ek;
              mk.set(Xk[Fk], Xk[Fk + 1], Xk[Fk + 2], Xk[Fk + 3]);
              const tk = kk._getData({
                applyMorph: Bk,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: mk,
                updatePositionsArray: !1,
                cache: fk
              }, null, bk.n.PositionKind);
              if (!tk) return !1;
              sk(tk, Nk, Lk, Ok), Vk(Lk, Ok, Sk), Wk.minimizeInPlace(Lk), vk.maximizeInPlace(Ok), Rk.c.FromArrayToRef(yk, 16 * ak, Ek), Sk ? Jk(Lk, Ok, Ek, ik, Yk) : Ak(tk, Nk, Ek, ik, Yk)
            }
            return !(!isFinite(Wk.x) || !isFinite(ik.x)) && (kk.ZH().reConstruct(ik, Yk), kk.rawBoundingInfo = new ak.b(Wk, vk), function(kk, Fk) {
              kk.length = 0;
              for (let Bk = 0; Bk < Fk.boundingBox.vectors.length; ++Bk) kk.push(Fk.boundingBox.vectors[Bk].clone())
            }(Fk, kk.rawBoundingInfo), kk._updateBoundingInfo(), !0)
          }(this, Xk, Bk)) return;
        tk && this.bakedVertexAnimationManager?.isEnabled && dk(this) ? this.refreshBoundingInfo({
          applySkeleton: Fk,
          applyMorph: Bk,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Fk, Bk);
        const kk = this.ZH();
        this.rawBoundingInfo = new ak.b(kk.minimum, kk.maximum)
      }
      const ek = this.ZH(),
        yk = this._thinInstanceDataStorage.matrixData;
      if (0 === Xk.length)
        for (let Rk = 0; Rk < ek.boundingBox.vectors.length; ++Rk) Xk.push(ek.boundingBox.vectors[Rk].clone());
      Rk.l.Qe[0].J_(Number.POSITIVE_INFINITY), Rk.l.Qe[1].J_(Number.NEGATIVE_INFINITY);
      for (let ak = 0; ak < this._thinInstanceDataStorage.instancesCount; ++ak) {
        Rk.c.FromArrayToRef(yk, 16 * ak, Rk.l.Matrix[0]);
        for (let kk = 0; kk < Xk.length; ++kk) Rk.s.TransformCoordinatesToRef(Xk[kk], Rk.l.Matrix[0], Rk.l.Qe[2]), Rk.l.Qe[0].minimizeInPlace(Rk.l.Qe[2]), Rk.l.Qe[1].maximizeInPlace(Rk.l.Qe[2])
      }
      ek.reConstruct(Rk.l.Qe[0], Rk.l.Qe[1]), this._updateBoundingInfo()
    }, Xk.b.prototype._thinInstanceRecreateBuffer = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === kk ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Fk)) : "previousMatrix" === kk ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Fk)) : (kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new bk.n(this.ne(), this._userThinInstanceBuffersStorage.data[kk], kk, !Fk, !1, this._userThinInstanceBuffersStorage.strides[kk], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, Xk.b.prototype._thinInstanceUpdateBufferSize = function(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      kk === bk.n.ColorKind && (kk = bk.n.ColorInstanceKind);
      const Bk = "matrix" === kk;
      if (!Bk && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[kk])) return;
      const Rk = Bk ? 16 : this._userThinInstanceBuffersStorage.strides[kk],
        tk = Bk ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[kk];
      let ak = Bk ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[kk];
      const Xk = (this._thinInstanceDataStorage.instancesCount + Fk) * Rk;
      let wk = tk;
      for (; wk < Xk;) wk *= 2;
      if (!ak || tk != wk) {
        if (ak) {
          const kk = new Float32Array(wk);
          kk.set(ak, 0), ak = kk
        } else ak = new Float32Array(wk);
        Bk ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ak, !1), this._thinInstanceDataStorage.matrixData = ak, this._thinInstanceDataStorage.matrixBufferSize = wk, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ak, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.data[kk] = ak, this._userThinInstanceBuffersStorage.sizes[kk] = wk, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new bk.n(this.ne(), ak, kk, !0, !1, Rk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
      }
    }, Xk.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Xk.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39857: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Wk,
      e: () => yk
    });
    var Rk, tk, ak, Xk, bk = Bk(39397),
      wk = Bk(39404),
      dk = Bk(39414),
      sk = Bk(36781),
      Vk = Bk(36758),
      Jk = Bk(39628),
      Ak = Bk(36798),
      ek = Bk(39296);
    let yk = (() => {
      var kk;
      let Fk, Bk, Rk, tk, ak, Xk, Ak, ek, yk, fk = Jk.b,
        mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Sk = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [];
      return kk = class extends fk {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Fk) {
          this._billboardMode !== Fk && (this._billboardMode = Fk, this._cache.useBillboardPosition = 0 !== (this._billboardMode & kk.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(kk) {
          this._infiniteDistance !== kk && (this._infiniteDistance = kk)
        }
        constructor(Fk) {
          let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Fk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Vk.s(0, 0, 1), this._up = new Vk.s(0, 1, 0), this._right = new Vk.s(1, 0, 0), this._position = (0, bk.l)(this, mk, Vk.s.Zero()), this._rotation = ((0, bk.l)(this, Wk), (0, bk.l)(this, vk, Vk.s.Zero())), this._rotationQuaternion = ((0, bk.l)(this, ik), (0, bk.l)(this, Yk, null)), this._scaling = ((0, bk.l)(this, Lk), (0, bk.l)(this, Ok, Vk.s.One())), this._transformToBoneReferal = ((0, bk.l)(this, Ek), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, bk.l)(this, Sk, kk.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, bk.l)(this, Nk), (0, bk.l)(this, Hk, 1)), this._infiniteDistance = ((0, bk.l)(this, uk), (0, bk.l)(this, Mk, !1)), this.ignoreNonUniformScaling = ((0, bk.l)(this, gk), (0, bk.l)(this, Uk, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, bk.l)(this, ck), (0, bk.l)(this, Gk, !1)), this._poseMatrix = ((0, bk.l)(this, Tk), null), this._localMatrix = Vk.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Vk.s.Zero(), this._absoluteScaling = Vk.s.Zero(), this._absoluteRotationQuaternion = Vk.e.Identity(), this._pivotMatrix = Vk.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new sk.e, this._nonUniformScaling = !1, Bk && this.XN().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(kk) {
          this._position = kk, this._markAsDirtyInternal()
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
        set rotation(kk) {
          this._rotation = kk, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get ta() {
          return this._scaling
        }
        set ta(kk) {
          this._scaling = kk, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(kk) {
          this._rotationQuaternion = kk, kk && this._rotation.J_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Vk.s.TransformNormalFromFloatsToRef(0, 0, this.XN().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Vk.s.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Vk.s.TransformNormalFromFloatsToRef(this.XN().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(kk) {
          return this._poseMatrix ? (this._poseMatrix.sBk(kk), this) : (this._poseMatrix = kk.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Vk.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Fk = this._cache;
          return this._billboardMode === Fk.billboardMode && this._billboardMode === kk.BILLBOARDMODE_NONE && (!Fk.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const kk = this._cache;
          kk.localMatrixUpdated = !1, kk.billboardMode = -1, kk.infiniteDistance = !1, kk.useBillboardPosition = !1
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
        setPreTransformMatrix(kk) {
          return this.setPivotMatrix(kk, !1)
        }
        setPivotMatrix(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.sBk(kk), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Fk, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Vk.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Fk = arguments.length > 1 ? arguments[1] : void 0,
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          const Rk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0);
          Rk && Bk && Bk(this, Rk);
          for (const tk of this.getChildTransformNodes(!0)) tk.instantiateHierarchy(Rk, Fk, Bk);
          return Rk
        }
        oN() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.J_(0), this._rotationQuaternion = this._rotationQuaternion || Vk.e.Identity(), kk.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = kk, this._absolutePosition.E1(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get SXk() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(kk) {
          if (!kk) return this;
          let Fk, Bk, Rk;
          if (void 0 === kk.x) {
            if (arguments.length < 3) return this;
            Fk = arguments[0], Bk = arguments[1], Rk = arguments[2]
          } else Fk = kk.x, Bk = kk.y, Rk = kk.z;
          if (this.parent) {
            const kk = Vk.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(kk), Vk.s.TransformCoordinatesFromFloatsToRef(Fk, Bk, Rk, kk, this.position)
          } else this.position.x = Fk, this.position.y = Bk, this.position.z = Rk;
          return this._absolutePosition.sBk(kk), this
        }
        setPositionWithLocalVector(kk) {
          return this.computeWorldMatrix(), this.position = Vk.s.TransformNormal(kk, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const kk = Vk.l.Matrix[0];
          return this._localMatrix.invertToRef(kk), Vk.s.TransformNormal(this.position, kk)
        }
        locallyTranslate(kk) {
          return this.computeWorldMatrix(!0), this.position = Vk.s.TransformCoordinates(kk, this._localMatrix), this
        }
        lookAt(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Xk = kk._LookAtVectorCache,
            bk = 0 === ak ? this.position : this.getAbsolutePosition();
          if (Fk.subtractToRef(bk, Xk), this.setDirection(Xk, Bk, Rk, tk), 1 === ak && this.parent)
            if (this.rotationQuaternion) {
              const kk = Vk.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(kk);
              const Fk = Vk.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Fk), Fk.invert(), kk.multiplyToRef(Fk, kk), this.rotationQuaternion.fromRotationMatrix(kk)
            } else {
              const kk = Vk.l.Quaternion[0];
              Vk.e.FromEulerVectorToRef(this.rotation, kk);
              const Fk = Vk.l.Matrix[0];
              kk.toRotationMatrix(Fk);
              const Bk = Vk.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Bk), Bk.invert(), Fk.multiplyToRef(Bk, Fk), kk.fromRotationMatrix(Fk), kk.toEulerAnglesToRef(this.rotation)
            } return this
        }
        eZ(kk) {
          const Fk = Vk.s.Zero();
          return this.getDirectionToRef(kk, Fk), Fk
        }
        getDirectionToRef(kk, Fk) {
          return Vk.s.TransformNormalToRef(kk, this.getWorldMatrix(), Fk), this
        }
        setDirection(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const tk = -Math.atan2(kk.z, kk.x) + Math.PI / 2,
            ak = Math.sqrt(kk.x * kk.x + kk.z * kk.z),
            Xk = -Math.atan2(kk.y, ak);
          return this.rotationQuaternion ? Vk.e.RotationYawPitchRollToRef(tk + Fk, Xk + Bk, Rk, this.rotationQuaternion) : (this.rotation.x = Xk + Bk, this.rotation.y = tk + Fk, this.rotation.z = Rk), this
        }
        setPivotPoint(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.XN().getRenderId() && this.computeWorldMatrix(!0);
          const Bk = this.getWorldMatrix();
          if (1 == Fk) {
            const Fk = Vk.l.Matrix[0];
            Bk.invertToRef(Fk), kk = Vk.s.TransformCoordinates(kk, Fk)
          }
          return this.setPivotMatrix(Vk.c.Translation(-kk.x, -kk.y, -kk.z), !0)
        }
        getPivotPoint() {
          const kk = Vk.s.Zero();
          return this.getPivotPointToRef(kk), kk
        }
        getPivotPointToRef(kk) {
          return kk.x = -this._pivotMatrix.m[12], kk.y = -this._pivotMatrix.m[13], kk.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const kk = Vk.s.Zero();
          return this.getAbsolutePivotPointToRef(kk), kk
        }
        getAbsolutePivotPointToRef(kk) {
          return this.getPivotPointToRef(kk), Vk.s.TransformCoordinatesToRef(kk, this.getWorldMatrix(), kk), this
        }
        mFk(kk) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Fk of this._children) Fk.mFk(kk);
          return super.mFk(kk)
        }
        setParent(Fk) {
          let Bk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Fk && !this.parent) return this;
          const tk = Vk.l.Quaternion[0],
            ak = Vk.l.Qe[0],
            Xk = Vk.l.Qe[1],
            bk = Vk.l.Matrix[1];
          Vk.c.IdentityToRef(bk);
          const wk = Vk.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let dk = this.rotationQuaternion;
          return dk || (dk = kk._TmpRotation, Vk.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, dk)), Vk.c.ComposeToRef(this.ta, dk, this.position, wk), this.parent && wk.multiplyToRef(this.parent.computeWorldMatrix(!0), wk), Fk && (Fk.computeWorldMatrix(!0).invertToRef(bk), wk.multiplyToRef(bk, wk)), wk.decompose(Xk, tk, ak, Bk ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.sBk(tk) : tk.toEulerAnglesToRef(this.rotation), this.ta.sBk(Xk), this.position.sBk(ak), this.parent = Fk, Rk && this.setPivotMatrix(Vk.c.Identity()), this
        }
        addChild(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return kk.setParent(this, Fk), this
        }
        removeChild(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return kk.parent !== this || kk.setParent(null, Fk), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(kk) {
          return this._nonUniformScaling !== kk && (this._nonUniformScaling = kk, !0)
        }
        attachToBone(kk, Fk) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Fk, this.parent = kk, kk.getSkeleton().prepare(!0), kk.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = kk ? this._currentParentWhenAttachingToBone : null, this) : (kk && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Fk, Bk, Rk) {
          let tk;
          if (Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.J_(0)), Rk && 0 !== Rk) {
            if (this.parent) {
              const kk = this.parent.getWorldMatrix(),
                Rk = Vk.l.Matrix[0];
              kk.invertToRef(Rk), Fk = Vk.s.TransformNormal(Fk, Rk), kk.determinant() < 0 && (Bk *= -1)
            }
            tk = Vk.e.RotationAxisToRef(Fk, Bk, kk._RotationAxisCache), tk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else tk = Vk.e.RotationAxisToRef(Fk, Bk, kk._RotationAxisCache), this.rotationQuaternion.multiplyToRef(tk, this.rotationQuaternion);
          return this
        }
        rotateAround(kk, Fk, Bk) {
          Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Vk.e.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.J_(0));
          const Rk = Vk.l.Qe[0],
            tk = Vk.l.Qe[1],
            ak = Vk.l.Qe[2],
            Xk = Vk.l.Quaternion[0],
            bk = Vk.l.Matrix[0],
            wk = Vk.l.Matrix[1],
            dk = Vk.l.Matrix[2],
            sk = Vk.l.Matrix[3];
          return kk.subtractToRef(this.position, Rk), Vk.c.TranslationToRef(Rk.x, Rk.y, Rk.z, bk), Vk.c.TranslationToRef(-Rk.x, -Rk.y, -Rk.z, wk), Vk.c.RotationAxisToRef(Fk, Bk, dk), wk.multiplyToRef(dk, sk), sk.multiplyToRef(bk, sk), sk.decompose(tk, Xk, ak), this.position.addInPlace(ak), Xk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(kk, Fk, Bk) {
          const Rk = kk.scale(Fk);
          if (Bk && 0 !== Bk) this.setAbsolutePosition(this.getAbsolutePosition().add(Rk));
          else {
            const kk = this.getPositionExpressedInLocalSpace().add(Rk);
            this.setPositionWithLocalVector(kk)
          }
          return this
        }
        addRotation(kk, Fk, Bk) {
          let Rk;
          this.rotationQuaternion ? Rk = this.rotationQuaternion : (Rk = Vk.l.Quaternion[1], Vk.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Rk));
          const tk = Vk.l.Quaternion[0];
          return Vk.e.RotationYawPitchRollToRef(Fk, kk, Bk, tk), Rk.multiplyInPlace(tk), this.rotationQuaternion || Rk.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== kk.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Rk = this.XN().getRenderId();
          if (!this._isDirty && !Fk && (this._currentRenderId === Rk || this.isSynchronized())) return this._currentRenderId = Rk, this._worldMatrix;
          Bk = Bk || this.XN().activeCamera, this._updateCache();
          const tk = this._cache;
          tk.pivotMatrixUpdated = !1, tk.billboardMode = this.billboardMode, tk.infiniteDistance = this.infiniteDistance, tk.parent = this._parentNode, this._currentRenderId = Rk, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const ak = this._getEffectiveParent(),
            Xk = kk._TmpScaling;
          let bk, wk = this._position;
          if (this._infiniteDistance && !this.parent && Bk) {
            const Fk = Bk.getWorldMatrix().m;
            wk = kk._TmpTranslation, wk.E1(this._position.x + Fk[12], this._position.y + Fk[13], this._position.z + Fk[14])
          }
          if (Xk.E1(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, bk = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Vk.e.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.E1(0, 0, 0))
            }
          } else bk = kk._TmpRotation, Vk.e.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, bk);
          if (this._usePivotMatrix) {
            const kk = Vk.l.Matrix[1];
            Vk.c.ScalingToRef(Xk.x, Xk.y, Xk.z, kk);
            const Fk = Vk.l.Matrix[0];
            bk.toRotationMatrix(Fk), this._pivotMatrix.multiplyToRef(kk, Vk.l.Matrix[4]), Vk.l.Matrix[4].multiplyToRef(Fk, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(wk.x, wk.y, wk.z)
          } else Vk.c.ComposeToRef(Xk, bk, wk, this._localMatrix);
          if (ak && ak.getWorldMatrix) {
            if (Fk && ak.computeWorldMatrix(Fk), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const kk = this.parent;
                kk.getSkeleton().prepare(), kk.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Vk.l.Matrix[7])
              } else Vk.l.Matrix[7].sBk(ak.getWorldMatrix());
              const Fk = Vk.l.Qe[5],
                Bk = Vk.l.Qe[6],
                Rk = Vk.l.Quaternion[0];
              Vk.l.Matrix[7].decompose(Bk, Rk, Fk), Vk.c.ScalingToRef(Bk.x, Bk.y, Bk.z, Vk.l.Matrix[7]), Vk.l.Matrix[7].setTranslation(Fk), kk.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Rk, Fk), this._localMatrix.setTranslation(Fk)), this._localMatrix.multiplyToRef(Vk.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const kk = this.parent;
              kk.getSkeleton().prepare(), this._localMatrix.multiplyToRef(kk.getFinalMatrix(), Vk.l.Matrix[6]), Vk.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(ak.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.sBk(this._localMatrix);
          if (Bk && this.billboardMode)
            if (tk.useBillboardPosition) {
              const Fk = Vk.l.Qe[0];
              this._worldMatrix.getTranslationToRef(Fk);
              const Rk = Bk.globalPosition;
              this._worldMatrix.invertToRef(Vk.l.Matrix[1]);
              const tk = Vk.l.Qe[1];
              Vk.s.TransformCoordinatesToRef(Rk, Vk.l.Matrix[1], tk), tk.normalize();
              const ak = -Math.atan2(tk.z, tk.x) + Math.PI / 2,
                Xk = Math.sqrt(tk.x * tk.x + tk.z * tk.z),
                bk = -Math.atan2(tk.y, Xk);
              if (Vk.e.RotationYawPitchRollToRef(ak, bk, 0, Vk.l.Quaternion[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                const Fk = Vk.l.Qe[1];
                Vk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (Fk.z = 0), Vk.c.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, Vk.l.Matrix[0])
              } else Vk.c.FromQuaternionToRef(Vk.l.Quaternion[0], Vk.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Vk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Vk.l.Qe[0])
            } else {
              const Fk = Vk.l.Qe[0];
              this._worldMatrix.getTranslationToRef(Fk), Vk.l.Matrix[1].sBk(Bk.getViewMatrix());
              const Rk = this.XN().useRightHandedSystem;
              if (Rk && Vk.l.Matrix[1].multiplyToRef(kk._TmpRHRestore, Vk.l.Matrix[1]), Vk.l.Matrix[1].setTranslationFromFloats(0, 0, 0), Vk.l.Matrix[1].invertToRef(Vk.l.Matrix[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                Vk.l.Matrix[0].decompose(void 0, Vk.l.Quaternion[0], void 0);
                const Fk = Vk.l.Qe[1];
                Vk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (Fk.z = 0), Rk && (Fk.y += Math.PI), Vk.c.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, Vk.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Vk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Vk.l.Qe[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ak && ak._nonUniformScaling ? this._updateNonUniformScalingState(ak._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.E1(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Vk.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), kk) {
            const kk = this.getChildren();
            for (let Fk = 0; Fk < kk.length; ++Fk) {
              const Bk = kk[Fk];
              if (Bk) {
                Bk.computeWorldMatrix();
                const kk = Vk.l.Matrix[0];
                Bk._localMatrix.multiplyToRef(this._localMatrix, kk);
                const Fk = Vk.l.Quaternion[0];
                kk.decompose(Bk.ta, Fk, Bk.position), Bk.rotationQuaternion ? Bk.rotationQuaternion.sBk(Fk) : Fk.toEulerAnglesToRef(Bk.rotation)
              }
            }
          }
          this.ta.E1(1, 1, 1), this.position.E1(0, 0, 0), this.rotation.E1(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Vk.e.Identity()), this._worldMatrix = Vk.c.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(kk) {
          return this.onAfterWorldMatrixUpdateObservable.add(kk), this
        }
        unregisterAfterWorldMatrixUpdate(kk) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(kk), this
        }
        getPositionInCameraSpace() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk || (kk = this.XN().activeCamera), Vk.s.TransformCoordinates(this.getAbsolutePosition(), kk.getViewMatrix())
        }
        getDistanceToCamera() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk || (kk = this.XN().activeCamera), this.getAbsolutePosition().subtract(kk.globalPosition).length()
        }
        clone(Fk, Bk, Rk) {
          const tk = dk.c.Clone((() => new kk(Fk, this.XN())), this);
          if (tk.name = Fk, tk.id = Fk, Bk && (tk.parent = Bk), !Rk) {
            const kk = this.getDescendants(!0);
            for (let Bk = 0; Bk < kk.length; Bk++) {
              const Rk = kk[Bk];
              Rk.clone && Rk.clone(Fk + "." + Rk.name, tk)
            }
          }
          return tk
        }
        serialize(kk) {
          const Fk = dk.c.Serialize(this, kk);
          return Fk.type = this.getClassName(), Fk.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Fk), Fk.localMatrix = this.getPivotMatrix().PBk(), Fk.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Fk.oN = !0), dk.c.AppendSerializedAnimations(this, Fk), Fk.hb = this.serializeAnimationRanges(), Fk
        }
        getChildTransformNodes(Fk, Bk) {
          const Rk = [];
          return this._getDescendants(Rk, Fk, (Fk => (!Bk || Bk(Fk)) && Fk instanceof kk)), Rk
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.XN().stopAnimation(this), this.XN().removeTransformNode(this), this._parentContainer) {
            const kk = this._parentContainer.transformNodes.indexOf(this);
            kk > -1 && this._parentContainer.transformNodes.splice(kk, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), kk) {
            const kk = this.getChildTransformNodes(!0);
            for (const Fk of kk) Fk.parent = null, Fk.computeWorldMatrix(!0)
          }
          super.dispose(kk, Fk)
        }
        normalizeToUnitCube() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Bk = arguments.length > 2 ? arguments[2] : void 0,
            Rk = null,
            tk = null;
          Fk && (this.rotationQuaternion ? (tk = this.rotationQuaternion.clone(), this.rotationQuaternion.E1(0, 0, 0, 1)) : this.rotation && (Rk = this.rotation.clone(), this.rotation.E1(0, 0, 0)));
          const ak = this.getHierarchyBoundingVectors(kk, Bk),
            Xk = ak.max.subtract(ak.min),
            bk = Math.max(Xk.x, Xk.y, Xk.z);
          if (0 === bk) return this;
          const wk = 1 / bk;
          return this.ta.scaleInPlace(wk), Fk && (this.rotationQuaternion && tk ? this.rotationQuaternion.sBk(tk) : this.rotation && Rk && this.rotation.sBk(Rk)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const dk = "function" === typeof Symbol && Symbol.metadata ? Object.create(fk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, wk.K)("position")], Bk = [(0, wk.K)("rotation")], Rk = [(0, wk.A)("rotationQuaternion")], tk = [(0, wk.K)("ta")], ak = [(0, wk.M)("billboardMode")], Xk = [(0, wk.M)()], Ak = [(0, wk.M)("infiniteDistance")], ek = [(0, wk.M)()], yk = [(0, wk.M)()], (0, bk.j)(null, null, Fk, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: kk => "_position" in kk,
            get: kk => kk._position,
            set: (kk, Fk) => {
              kk._position = Fk
            }
          },
          metadata: dk
        }, mk, Wk), (0, bk.j)(null, null, Bk, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_rotation" in kk,
            get: kk => kk._rotation,
            set: (kk, Fk) => {
              kk._rotation = Fk
            }
          },
          metadata: dk
        }, vk, ik), (0, bk.j)(null, null, Rk, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: kk => "_rotationQuaternion" in kk,
            get: kk => kk._rotationQuaternion,
            set: (kk, Fk) => {
              kk._rotationQuaternion = Fk
            }
          },
          metadata: dk
        }, Yk, Lk), (0, bk.j)(null, null, tk, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "_scaling" in kk,
            get: kk => kk._scaling,
            set: (kk, Fk) => {
              kk._scaling = Fk
            }
          },
          metadata: dk
        }, Ok, Ek), (0, bk.j)(null, null, ak, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_billboardMode" in kk,
            get: kk => kk._billboardMode,
            set: (kk, Fk) => {
              kk._billboardMode = Fk
            }
          },
          metadata: dk
        }, Sk, Nk), (0, bk.j)(null, null, Xk, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: kk => "scalingDeterminant" in kk,
            get: kk => kk.scalingDeterminant,
            set: (kk, Fk) => {
              kk.scalingDeterminant = Fk
            }
          },
          metadata: dk
        }, Hk, uk), (0, bk.j)(null, null, Ak, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "_infiniteDistance" in kk,
            get: kk => kk._infiniteDistance,
            set: (kk, Fk) => {
              kk._infiniteDistance = Fk
            }
          },
          metadata: dk
        }, Mk, gk), (0, bk.j)(null, null, ek, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "ignoreNonUniformScaling" in kk,
            get: kk => kk.ignoreNonUniformScaling,
            set: (kk, Fk) => {
              kk.ignoreNonUniformScaling = Fk
            }
          },
          metadata: dk
        }, Uk, ck), (0, bk.j)(null, null, yk, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: kk => "reIntegrateRotationIntoRotationQuaternion" in kk,
            get: kk => kk.reIntegrateRotationIntoRotationQuaternion,
            set: (kk, Fk) => {
              kk.reIntegrateRotationIntoRotationQuaternion = Fk
            }
          },
          metadata: dk
        }, Gk, Tk), dk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dk
        })
      })(), kk.BILLBOARDMODE_NONE = 0, kk.BILLBOARDMODE_X = 1, kk.BILLBOARDMODE_Y = 2, kk.BILLBOARDMODE_Z = 4, kk.BILLBOARDMODE_ALL = 7, kk.BILLBOARDMODE_USE_POSITION = 128, kk.BillboardUseParentOrientation = !1, kk._TmpRotation = Vk.e.Zero(), kk._TmpScaling = Vk.s.Zero(), kk._TmpTranslation = Vk.s.Zero(), kk._TmpRHRestore = Vk.c.Scaling(1, 1, -1), kk._LookAtVectorCache = new Vk.s(0, 0, 0), kk._RotationAxisCache = new Vk.e, kk
    })();

    function fk(kk, Fk, Bk) {
      const Rk = dk.c.Parse((() => new yk(kk.name, Fk)), kk, Fk, Bk);
      if (kk.localMatrix ? Rk.setPreTransformMatrix(Vk.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Rk.setPivotMatrix(Vk.c.FromArray(kk.pivotMatrix)), Rk.lY(kk.isEnabled), Rk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Rk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Rk._waitingParentInstanceIndex = kk.parentInstanceIndex), kk.oN && (Rk._waitingFreezeWorldMatrix = kk.oN), kk.animations) {
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Bk = kk.animations[Fk],
            tk = (0, Ak.c)("BABYLON.Animation");
          tk && Rk.animations.push(tk.Parse(Bk))
        }
        Jk.b.ParseAnimationRanges(Rk, kk, Fk)
      }
      return kk.autoAnimate && Fk.beginAnimation(Rk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Rk
    }
    let mk = !1;

    function Wk() {
      mk || (mk = !0, yk.Parse = fk)
    }(Rk = yk.prototype).nG ?? (Rk.nG = (0, ek.g)("TransformNode", "nG")), (tk = yk.prototype).applyImpulse ?? (tk.applyImpulse = (0, ek.g)("TransformNode", "applyImpulse")), (ak = yk.prototype).applyAngularImpulse ?? (ak.applyAngularImpulse = (0, ek.g)("TransformNode", "applyAngularImpulse")), (Xk = yk.prototype).applyTorque ?? (Xk.applyTorque = (0, ek.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(yk.prototype, "physicsBody") || Object.defineProperty(yk.prototype, "physicsBody", (0, ek.f)("TransformNode", "physicsBody"))
  },
  39823: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk) {
      try {
        const Rk = kk.next();
        Rk.done ? Fk(Rk) : Rk.value ? Rk.value.then((() => {
          Rk.value = void 0, Fk(Rk)
        }), Bk) : Fk(Rk)
      } catch (Rk) {
        Bk(Rk)
      }
    }

    function tk() {
      let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Bk, tk, ak) => {
        const Xk = performance.now();
        void 0 === kk || Xk - kk > Fk ? (kk = Xk, setTimeout((() => {
          Rk(Bk, tk, ak)
        }), 0)) : Rk(Bk, tk, ak)
      }
    }

    function ak(kk, Fk, Bk, Rk, tk) {
      const ak = () => {
        let Xk;
        const bk = kk => {
          kk.done ? Bk(kk.value) : void 0 === Xk ? Xk = !0 : ak()
        };
        do {
          Xk = void 0, tk && tk.aborted ? Rk(new Error("Aborted")) : Fk(kk, bk, Rk), void 0 === Xk && (Xk = !1)
        } while (Xk)
      };
      ak()
    }

    function Xk(kk, Fk) {
      let Bk;
      return ak(kk, Rk, (kk => Bk = kk), (kk => {
        throw kk
      }), Fk), Bk
    }
    async function bk(kk, Fk, Bk) {
      return await new Promise(((Rk, tk) => {
        ak(kk, Fk, Rk, tk, Bk)
      }))
    }

    function wk(kk, Fk) {
      return function() {
        return Xk(kk(...arguments), Fk)
      }
    }
    Bk.d(Fk, {
      b: () => tk,
      e: () => wk,
      h: () => bk,
      j: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
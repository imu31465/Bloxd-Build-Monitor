export const id = 251;
export const ids = [251];
export const modules = {
  40214: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Hk,
      e: () => Pk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(40107),
      yk = Ik(37187),
      lk = Ik(37153),
      ak = Ik(40218),
      qk = Ik(38674),
      Lk = Ik(37201),
      tk = Ik(39863),
      Zk = Ik(38099),
      jk = Ik(37780),
      ek = Ik(39962),
      wk = Ik(40021);
    let Hk = (() => {
      var kk;
      let Fk, Ik, Lk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk = ak.b,
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        fk = [],
        Bk = [],
        dk = [],
        Yk = [],
        Ak = [],
        gk = [],
        mk = [],
        hk = [],
        rk = [],
        Dk = [],
        Mk = [],
        kF = [],
        FF = [],
        IF = [],
        XF = [],
        TF = [],
        iF = [];
      return kk = class extends pk {
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
          let Fk, Ik;
          if (this.mode === kk.PERSPECTIVE_CAMERA) this.fovMode === kk.FOVMODE_VERTICAL_FIXED ? (Ik = 2 * this.minZ * Math.tan(this.fov / 2), Fk = this.Oe().getAspectRatio(this) * Ik) : (Fk = 2 * this.minZ * Math.tan(this.fov / 2), Ik = Fk / this.Oe().getAspectRatio(this));
          else {
            const kk = this.Oe().getRenderWidth() / 2,
              Xk = this.Oe().getRenderHeight() / 2;
            Fk = (this.orthoRight ?? kk) - (this.orthoLeft ?? -kk), Ik = (this.orthoTop ?? Xk) - (this.orthoBottom ?? -Xk)
          }
          return Fk * Ik
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
        constructor(Fk, Ik, Tk) {
          let ak = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, ek.c)(), super(Fk, Tk, !1), this.inputs = (0, Xk.n)(this, uk), this._position = (0, Xk.n)(this, bk, lk.t.Zero()), this._upVector = ((0, Xk.n)(this, Rk), (0, Xk.n)(this, Uk, lk.t.Up())), this.oblique = ((0, Xk.n)(this, Ck), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Xk.n)(this, Nk, .8), this.projectionPlaneTilt = ((0, Xk.n)(this, ck), (0, Xk.n)(this, Wk, 0)), this.minZ = ((0, Xk.n)(this, fk), (0, Xk.n)(this, Bk, 1)), this.maxZ = ((0, Xk.n)(this, dk), (0, Xk.n)(this, Yk, 1e4)), this._baseInertia = ((0, Xk.n)(this, Ak), .9), this._mode = kk.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Zk.c(0, 0, 1, 1), this.layerMask = (0, Xk.n)(this, gk, 268435455), this.fovMode = ((0, Xk.n)(this, mk), (0, Xk.n)(this, hk, kk.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Xk.n)(this, rk), (0, Xk.n)(this, Dk, kk.RIG_MODE_NONE)), this.interaxialDistance = ((0, Xk.n)(this, Mk), (0, Xk.n)(this, kF, void 0)), this.isStereoscopicSideBySide = ((0, Xk.n)(this, FF), (0, Xk.n)(this, IF, void 0)), this.ignoreCameraMaxZ = ((0, Xk.n)(this, XF), (0, Xk.n)(this, TF, !1)), this.customRenderTargets = ((0, Xk.n)(this, iF), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new yk.e, this.onProjectionMatrixChangedObservable = new yk.e, this.onAfterCheckInputsObservable = new yk.e, this.onRestoreStateObservable = new yk.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new lk.c, this._postProcesses = new Array, this._activeMeshes = new ik.f(256), this._globalPosition = lk.t.Zero(), this._computedViewMatrix = lk.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = lk.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = lk.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.mG().defaultCameraLayerMask, this.mG().addCamera(this), ak && !this.mG().activeCamera && (this.mG().activeCamera = this), this.position = Ik, this.renderPassId = this.mG().Oe().createRenderPassId(`Camera ${Fk}`)
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
          return "pH"
        }
        toString(kk) {
          let Fk = "Name: " + this.name;
          if (Fk += ", type: " + this.getClassName(), this.animations)
            for (let Ik = 0; Ik < this.animations.length; Ik++) Fk += ", animation[0]: " + this.animations[Ik].toString(kk);
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
          super._initCache(), this._cache.position = new lk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new lk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(kk) {
          kk || super._updateCache(), this._cache.position.kS(this.position), this._cache.upVector.kS(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Fk = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let Ik = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Fk;
          if (!Ik) return !1;
          const Xk = this.Oe();
          return this.mode === kk.PERSPECTIVE_CAMERA ? Ik = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Xk.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (Ik = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Xk.getRenderWidth() && this._cache.renderHeight === Xk.getRenderHeight(), this.oblique && (Ik = Ik && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), Ik
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
          for (let Fk = 0, Ik = this._rigCameras.length; Fk < Ik; Fk++) {
            const kk = this._rigCameras[Fk],
              Ik = kk._rigPostProcess;
            if (Ik) {
              "pass" === Ik.getEffectName() && (kk.isIntermediate = 0 === this._postProcesses.length), kk._postProcesses = this._postProcesses.slice(0).concat(Ik), Ik.markTextureDirty()
            } else kk._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !kk.isReusable() && this._postProcesses.indexOf(kk) > -1 ? (qk.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Fk || Fk < 0 ? this._postProcesses.push(kk) : null === this._postProcesses[Fk] ? this._postProcesses[Fk] = kk : this._postProcesses.splice(Fk, 0, kk), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.UFk(), this._postProcesses.indexOf(kk))
        }
        detachPostProcess(kk) {
          const Fk = this._postProcesses.indexOf(kk); - 1 !== Fk && (this._postProcesses[Fk] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.UFk(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return lk.c.Identity()
        }
        getViewMatrix(kk) {
          return !kk && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.mG().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(kk) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== kk && (this._projectionMatrix = kk)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Fk) {
          if (this._doNotComputeProjectionMatrix || !Fk && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const Ik = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = Ik, this._refreshFrustumPlanes = !0;
          const Xk = this.Oe(),
            Tk = this.mG(),
            ik = Xk.IXk;
          if (this.mode === kk.PERSPECTIVE_CAMERA) {
            let Fk;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Xk.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Fk = Tk.useRightHandedSystem ? lk.c.PerspectiveFovRHToRef : lk.c.PerspectiveFovLHToRef, Fk(this.fov, Xk.getAspectRatio(this), ik ? Ik : this.minZ, ik ? this.minZ : Ik, this._projectionMatrix, this.fovMode === kk.FOVMODE_VERTICAL_FIXED, Xk.isNDCHalfZRange, this.projectionPlaneTilt, ik)
          } else {
            const kk = Xk.getRenderWidth() / 2,
              Fk = Xk.getRenderHeight() / 2;
            Tk.useRightHandedSystem ? this.oblique ? lk.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ik ? Ik : this.minZ, ik ? this.minZ : Ik, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Xk.isNDCHalfZRange) : lk.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ik ? Ik : this.minZ, ik ? this.minZ : Ik, this._projectionMatrix, Xk.isNDCHalfZRange) : this.oblique ? lk.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ik ? Ik : this.minZ, ik ? this.minZ : Ik, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Xk.isNDCHalfZRange) : lk.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -Fk, this.orthoTop ?? Fk, ik ? Ik : this.minZ, ik ? this.minZ : Ik, this._projectionMatrix, Xk.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Xk.getRenderWidth(), this._cache.renderHeight = Xk.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(kk) {
          return (this.radius || (this.target ? lk.t.Distance(this.position, this.target) : this.position.length())) + kk
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? jk.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = jk.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Fk && this.rigCameras.length > 0) {
            let Fk = !1;
            for (const Ik of this.rigCameras) Ik._updateFrustumPlanes(), Fk = Fk || kk.isInFrustum(Ik._frustumPlanes);
            return Fk
          }
          return kk.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(kk) {
          return this._updateFrustumPlanes(), kk.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, tk.j)("Ray")
        }
        getForwardRayToRef(kk) {
          throw (0, tk.j)("Ray")
        }
        dispose(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.mG().stopAnimation(this), this.mG().removeCamera(this); this._rigCameras.length > 0;) {
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
          let Xk = this.customRenderTargets.length;
          for (; --Xk >= 0;) this.customRenderTargets[Xk].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.mG().Oe().releaseRenderPassId(this.renderPassId), super.dispose(Fk, Ik)
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
        setCameraRigMode(Fk, Ik) {
          if (this.cameraRigMode !== Fk) {
            for (; this._rigCameras.length > 0;) {
              const kk = this._rigCameras.pop();
              kk && kk.dispose()
            }
            if (this.cameraRigMode = Fk, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = Ik.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== kk.RIG_MODE_NONE) {
              const kk = this.createRigCamera(this.name + "_L", 0);
              kk && (kk._isLeftCamera = !0);
              const Fk = this.createRigCamera(this.name + "_R", 1);
              Fk && (Fk._isRightCamera = !0), kk && Fk && (this._rigCameras.push(kk), this._rigCameras.push(Fk))
            }
            this._setRigMode(Ik), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(kk) {}
        _getVRProjectionMatrix() {
          return lk.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.Oe().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(kk, Fk) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[kk] = Fk, "interaxialDistance" === kk && (this._cameraRigParams.stereoHalfAngle = Fk / .0637 * (Math.PI / 180))
        }
        createRigCamera(kk, Fk) {
          return null
        }
        _updateRigCameras() {
          for (let kk = 0; kk < this._rigCameras.length; kk++) this._rigCameras[kk].minZ = this.minZ, this._rigCameras[kk].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[kk].fov = this.fov, this._rigCameras[kk].upVector.kS(this.upVector);
          this.cameraRigMode === kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const kk = wk.b.Serialize(this);
          return kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), this.parent && this.parent._serializeAsParent(kk), this.inputs && this.inputs.serialize(kk), wk.b.AppendSerializedAnimations(this, kk), kk.nZ = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        clone(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Xk = wk.b.Clone(kk.GetConstructorFromName(this.getClassName(), Fk, this.mG(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Xk.name = Fk, Xk.parent = Ik, this.onClonedObservable.notifyObservers(Xk), Xk
        }
        Am(kk) {
          const Fk = lk.t.Zero();
          return this.getDirectionToRef(kk, Fk), Fk
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(kk, Fk) {
          lk.t.TransformNormalToRef(kk, this.getWorldMatrix(), Fk)
        }
        static GetConstructorFromName(Fk, Ik, Xk) {
          let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ik = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const yk = ak.b.Construct(Fk, Ik, Xk, {
            interaxial_distance: Tk,
            isStereoscopicSideBySide: ik
          });
          return yk || (() => kk._CreateDefaultParsedCamera(Ik, Xk))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let kk = this.mG().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (kk *= -1), kk
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(pk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, Tk.H)("position")], Ik = [(0, Tk.H)("upVector")], Lk = [(0, Tk.J)()], Hk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], xk = [(0, Tk.J)()], Pk = [(0, Tk.J)()], Kk = [(0, Tk.J)()], Qk = [(0, Tk.J)()], sk = [(0, Tk.J)()], Vk = [(0, Tk.J)()], zk = [(0, Tk.J)()], Sk = [(0, Tk.J)()], vk = [(0, Tk.J)()], Ek = [(0, Tk.J)()], Ok = [(0, Tk.J)()], nk = [(0, Tk.J)()], Gk = [(0, Tk.J)()], (0, Xk.j)(kk, null, Lk, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoLeft" in kk,
            get: kk => kk.orthoLeft
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(kk, null, Hk, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoRight" in kk,
            get: kk => kk.orthoRight
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(kk, null, Jk, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoBottom" in kk,
            get: kk => kk.orthoBottom
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(kk, null, xk, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoTop" in kk,
            get: kk => kk.orthoTop
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(kk, null, Vk, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: kk => "inertia" in kk,
            get: kk => kk.inertia
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(kk, null, zk, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: kk => "mode" in kk,
            get: kk => kk.mode
          },
          metadata: ik
        }, null, uk), (0, Xk.j)(null, null, Fk, {
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
          metadata: ik
        }, bk, Rk), (0, Xk.j)(null, null, Ik, {
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
          metadata: ik
        }, Uk, Ck), (0, Xk.j)(null, null, Pk, {
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
          metadata: ik
        }, Nk, ck), (0, Xk.j)(null, null, Kk, {
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
          metadata: ik
        }, Wk, fk), (0, Xk.j)(null, null, Qk, {
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
          metadata: ik
        }, Bk, dk), (0, Xk.j)(null, null, sk, {
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
          metadata: ik
        }, Yk, Ak), (0, Xk.j)(null, null, Sk, {
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
          metadata: ik
        }, gk, mk), (0, Xk.j)(null, null, vk, {
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
          metadata: ik
        }, hk, rk), (0, Xk.j)(null, null, Ek, {
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
          metadata: ik
        }, Dk, Mk), (0, Xk.j)(null, null, Ok, {
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
          metadata: ik
        }, kF, FF), (0, Xk.j)(null, null, nk, {
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
          metadata: ik
        }, IF, XF), (0, Xk.j)(null, null, Gk, {
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
          metadata: ik
        }, TF, iF), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk._CreateDefaultParsedCamera = (kk, Fk) => {
        throw (0, tk.j)("UniversalCamera")
      }, kk.PERSPECTIVE_CAMERA = 0, kk.ORTHOGRAPHIC_CAMERA = 1, kk.FOVMODE_VERTICAL_FIXED = 0, kk.FOVMODE_HORIZONTAL_FIXED = 1, kk.RIG_MODE_NONE = 0, kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, kk.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, kk.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, kk.RIG_MODE_VR = 20, kk.RIG_MODE_CUSTOM = 22, kk.ForceAttachControlToAlwaysPreventDefault = !1, kk
    })();

    function Jk(kk, Fk) {
      const Ik = kk.type,
        Xk = Hk.GetConstructorFromName(Ik, kk.name, Fk, kk.interaxial_distance, kk.isStereoscopicSideBySide),
        Tk = wk.b.Parse(Xk, kk, Fk);
      if (void 0 !== kk.parentId && (Tk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Tk._waitingParentInstanceIndex = kk.parentInstanceIndex), Tk.inputs && (Tk.inputs.parse(kk), Tk._setupInputs()), kk.upVector && (Tk.upVector = lk.t.FromArray(kk.upVector)), Tk.setPosition && (Tk.position.t5(0, 0, 0), Tk.setPosition(lk.t.FromArray(kk.position))), kk.target && Tk.setTarget && Tk.setTarget(lk.t.FromArray(kk.target)), kk.cameraRigMode) {
        const Fk = kk.interaxial_distance ? {
          interaxialDistance: kk.interaxial_distance
        } : {};
        Tk.setCameraRigMode(kk.cameraRigMode, Fk)
      }
      if (kk.animations) {
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Ik = kk.animations[Fk],
            Xk = (0, Lk.b)("BABYLON.Animation");
          Xk && Tk.animations.push(Xk.Parse(Ik))
        }
        ak.b.ParseAnimationRanges(Tk, kk, Fk)
      }
      return kk.autoAnimate && Fk.beginAnimation(Tk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), void 0 !== kk.isEnabled && Tk.Av(kk.isEnabled), Tk
    }
    let xk = !1;

    function Pk() {
      xk || (xk = !0, Hk.Parse = Jk)
    }
  },
  40228: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik) {
        this._cameraPosition = Fk, this._behavior = Ik, this.activeInput = !1, this.speed = 1, this.lY = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Xk.t, this.rotationAccumulatedPixels = new Xk.t, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Xk.t.Zero(), this.rotationDeltaCurrentFrame = Xk.t.Zero(), this._zoomVelocity = 0, this._panVelocity = new Xk.t, this.referenceFrameRate = 60, this._rotationVelocity = new Xk.t, this._prevFrameTimeMs = 0, this._scene = kk
      }
      computeCurrentFrameDeltas() {
        const kk = this._scene.Oe().getDeltaTime(),
          Fk = this._getEffectiveDeltaMs(kk);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.I6(0), this.rotationDeltaCurrentFrame.I6(0), this.zoomDeltaCurrentFrame = 0, void(kk > 0 && (this._prevFrameTimeMs = kk));
        this.panDeltaCurrentFrame.I6(0), this.rotationDeltaCurrentFrame.I6(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.t5(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Fk, this.panDeltaCurrentFrame), this._rotationVelocity.t5(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.t5(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Fk, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Fk, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.lY * this._zoomSpeedMultiplier) * Fk, kk > 0 && (this._prevFrameTimeMs = kk), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.I6(0), this.rotationAccumulatedPixels.I6(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.I6(0), this.rotationAccumulatedPixels.I6(0)
      }
      resetPanVelocity() {
        this._panVelocity.I6(0), this.panAccumulatedPixels.I6(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(kk) {
        const Fk = this._scene.Oe().getDeltaTime(),
          Ik = this._getEffectiveDeltaMs(Fk),
          Xk = 1e3 / this.referenceFrameRate;
        return Math.pow(kk, Ik / Xk)
      }
      getFrameIndependentInputScale(kk) {
        const Fk = 1 - kk;
        if (Fk <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(kk)) / Fk
      }
      _getEffectiveDeltaMs(kk) {
        return kk > 0 ? kk : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(kk, Fk, Ik) {
        let Xk = kk;
        const Tk = this._scene.Oe().getDeltaTime(),
          ik = this._getEffectiveDeltaMs(Tk);
        if (0 === ik) return Xk;
        const yk = this.getFrameIndependentDecay(Ik);
        if (Xk *= yk, 0 !== Fk || this.activeInput) {
          const kk = 1 - Ik;
          Xk += Fk / ik * (kk > 0 ? (1 - yk) / kk : 1)
        } else Math.abs(Xk) < 1e-6 && (Xk = 0);
        return Xk
      }
    }
  },
  40236: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor(kk, Fk) {
        this.inputMap = [], this.handlers = kk, this._createDefaultEntries = Fk, this.resetInputMap()
      }
      resolveInteraction(kk, Fk) {
        for (const Ik of this.inputMap)
          if (Ik.source === kk && this._entryMatches(Ik, Fk)) return Ik;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(kk, Fk, Ik) {
        const Xk = this.inputMap;
        for (let Tk = 0; Tk < Xk.length; Tk++) {
          const ik = Xk[Tk];
          if (ik.source === kk && ik.interaction === Fk && this._entryConditionsMatch(ik, Ik)) return ik
        }
      }
      getEntries(kk, Fk, Ik) {
        const Xk = [],
          Tk = this.inputMap;
        for (let ik = 0; ik < Tk.length; ik++) {
          const yk = Tk[ik];
          yk.source === kk && yk.interaction === Fk && this._entryConditionsMatch(yk, Ik) && Xk.push(yk)
        }
        return Xk
      }
      addEntry(kk) {
        const Fk = this._entrySpecificity(kk);
        let Ik = this.inputMap.length;
        for (let Xk = 0; Xk < this.inputMap.length; Xk++)
          if (this._entrySpecificity(this.inputMap[Xk]) < Fk) {
            Ik = Xk;
            break
          } this.inputMap.splice(Ik, 0, kk)
      }
      setInteraction(kk, Fk, Ik) {
        const Xk = this.resolveInteraction(kk, Fk);
        return Xk && this._entryCoversAllConditionsOf(Xk, Fk) ? (Xk.interaction = Ik, !0) : (this.addEntry({
          source: kk,
          ...Fk ?? {},
          interaction: Ik
        }), !0)
      }
      _entryCoversAllConditionsOf(kk, Fk) {
        if (!Fk) return !0;
        const Ik = kk;
        for (const Xk of Object.keys(Fk)) {
          const kk = Fk[Xk];
          if (void 0 !== kk)
            if ("modifiers" === Xk) {
              const Fk = Ik.modifiers ?? {};
              for (const Ik of Object.keys(kk))
                if (void 0 !== kk[Ik] && void 0 === Fk[Ik]) return !1
            } else if (void 0 === Ik[Xk]) return !1
        }
        return !0
      }
      setInteractions(kk, Fk, Ik) {
        let Xk = 0;
        const Tk = this.inputMap;
        for (let ik = 0; ik < Tk.length; ik++) {
          const yk = Tk[ik];
          yk.source === kk && this._entryMatches(yk, Fk) && (yk.interaction = Ik, Xk++)
        }
        return Xk
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
  40207: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Jk,
      e: () => wk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(40214),
      yk = Ik(37153),
      lk = Ik(37158),
      ak = Ik(40220),
      qk = Ik(40218),
      Lk = Ik(40228),
      tk = Ik(40236);
    class Zk extends Lk.b {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik), this.input = new tk.d({
          translate: (kk, Fk, Ik) => {
            this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += Fk, this.panAccumulatedPixels.z += Ik
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
    const jk = yk.c.Zero(),
      ek = yk.f.Identity();
    let wk = (() => {
        var kk;
        let Fk, Ik, qk, Lk, tk = ik.d,
          wk = [],
          Hk = [],
          Jk = [],
          xk = [],
          Pk = [],
          Kk = [],
          Qk = [],
          sk = [];
        return kk = class extends tk {
          get inertia() {
            return this._targetInertia
          }
          set inertia(kk) {
            this._targetInertia = kk, this.movement && (this.movement.panInertia = kk, this.movement.rotationInertia = kk)
          }
          constructor(kk, Fk, Ik) {
            super(kk, Fk, Ik, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new yk.t(0, 0, 0), this.cameraRotation = new yk.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Xk.n)(this, wk, !1), this.rotation = ((0, Xk.n)(this, Hk), (0, Xk.n)(this, Jk, void 0)), this.rotationQuaternion = (0, Xk.n)(this, xk), this.speed = (0, Xk.n)(this, Pk, 2), this.noRotationConstraint = ((0, Xk.n)(this, Kk), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = lk.b, this._rotationEpsilon = lk.b, this.lockedTarget = (0, Xk.n)(this, Qk, null), this._currentTarget = ((0, Xk.n)(this, sk), yk.t.Zero()), this._initialFocalDistance = 1, this._viewMatrix = yk.c.Zero(), this._cameraTransformMatrix = yk.c.Zero(), this._cameraRotationMatrix = yk.c.Zero(), this._transformedReferencePoint = yk.t.Zero(), this._deferredPositionUpdate = new yk.t, this._deferredRotationQuaternionUpdate = new yk.f, this._deferredRotationUpdate = new yk.t, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = yk.t.Forward(this.mG().useRightHandedSystem), this.rotation = new yk.t(0, this.mG().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Zk(this.mG(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(kk) {
            this.getWorldMatrix();
            const Fk = yk.l.Ge[0],
              Ik = yk.l.Ge[1];
            return Ik.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(Ik, Fk), Fk.scaleInPlace(kk), this.globalPosition.add(Fk)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.t5(0, 0, 0), this.cameraRotation.t5(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new yk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new yk.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(kk) {
            kk || super._updateCache();
            const Fk = this._getLockedTargetPosition();
            Fk ? this._cache.lockedTarget ? this._cache.lockedTarget.kS(Fk) : this._cache.lockedTarget = Fk.clone() : this._cache.lockedTarget = null, this._cache.rotation.kS(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.kS(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const kk = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(kk) : !kk) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const kk = this.Oe();
            return this.speed * Math.sqrt(kk.getDeltaTime() / (100 * kk.getFps()))
          }
          setTarget(kk) {
            this.upVector.normalize(), this._initialFocalDistance = kk.subtract(this.position).length(), this.position.z === kk.z && (this.position.z += lk.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.mG().useRightHandedSystem ? yk.c.LookAtRHToRef(this.position, kk, yk.t.UpReadOnly, jk) : yk.c.LookAtLHToRef(this.position, kk, yk.t.UpReadOnly, jk), jk.invert();
            const Fk = this.rotationQuaternion || ek;
            yk.f.FromRotationMatrixToRef(jk, Fk), Fk.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(yk.l.Matrix[0]), yk.t.TransformNormalToRef(this.cameraDirection, yk.l.Matrix[0], yk.l.Ge[0]), this._deferredPositionUpdate.addInPlace(yk.l.Ge[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.kS(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.kS(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const kk = this.movement,
              Fk = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            kk.panAccumulatedPixels.addInPlace(this.cameraDirection), kk.rotationAccumulatedPixels.x += this.cameraRotation.x, kk.rotationAccumulatedPixels.y += this.cameraRotation.y, kk.computeCurrentFrameDeltas(), this.cameraDirection.kS(kk.panDeltaCurrentFrame), this.cameraRotation.set(kk.rotationDeltaCurrentFrame.x, kk.rotationDeltaCurrentFrame.y);
            const Ik = this.speed * this._panningEpsilon;
            !Fk && Math.abs(this.cameraDirection.x) < Ik && Math.abs(this.cameraDirection.y) < Ik && Math.abs(this.cameraDirection.z) < Ik && (this.cameraDirection.I6(0), kk.resetPanVelocity());
            const Xk = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Tk = this._decideIfNeedsToMove(),
              ik = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.kS(this.rotation), this._deferredPositionUpdate.kS(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.kS(this.rotationQuaternion), Tk && this._updatePosition(), ik) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Xk, this._deferredRotationUpdate.y += this.cameraRotation.y * Xk, !this.noRotationConstraint) {
                const kk = 1.570796;
                this._deferredRotationUpdate.x > kk && (this._deferredRotationUpdate.x = kk), this._deferredRotationUpdate.x < -kk && (this._deferredRotationUpdate.x = -kk)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.kS(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (yk.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.kS(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.I6(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : yk.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return yk.t.TransformNormalToRef(yk.t.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), yk.t.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? ak.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (yk.f.FromEulerVectorToRef(this.rotation, ek), ak.e.Y.rotateByQuaternionToRef(ek, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(kk, Fk, Ik) {
            if (this.mG().useRightHandedSystem ? yk.c.LookAtRHToRef(kk, Fk, Ik, this._viewMatrix) : yk.c.LookAtLHToRef(kk, Fk, Ik, this._viewMatrix), this.parent) {
              const kk = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(kk, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Fk, Ik) {
            if (this.cameraRigMode !== ik.d.RIG_MODE_NONE) {
              const Ik = new kk(Fk, this.position.clone(), this.mG());
              return Ik.isRigCamera = !0, Ik.rigParent = this, this.cameraRigMode === ik.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new yk.f), Ik._cameraRigParams = {}, Ik.rotationQuaternion = new yk.f), Ik.mode = this.mode, Ik.orthoLeft = this.orthoLeft, Ik.orthoRight = this.orthoRight, Ik.orthoTop = this.orthoTop, Ik.orthoBottom = this.orthoBottom, Ik
            }
            return null
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              Fk = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case ik.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case ik.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case ik.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case ik.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case ik.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const Ik = this.cameraRigMode === ik.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Xk = this.cameraRigMode === ik.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Ik, kk), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Xk, Fk);
                break
              }
              case ik.d.RIG_MODE_VR:
                kk.rotationQuaternion && Fk.rotationQuaternion && this.rotationQuaternion ? (kk.rotationQuaternion.kS(this.rotationQuaternion), Fk.rotationQuaternion.kS(this.rotationQuaternion)) : (kk.rotation.kS(this.rotation), Fk.rotation.kS(this.rotation)), kk.position.kS(this.position), Fk.position.kS(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Fk, Ik) {
            this.getTarget().subtractToRef(this.position, kk._TargetFocalPoint), kk._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Xk = kk._TargetFocalPoint.addInPlace(this.position);
            yk.c.TranslationToRef(-Xk.x, -Xk.y, -Xk.z, kk._TargetTransformMatrix), kk._TargetTransformMatrix.multiplyToRef(yk.c.RotationAxis(Ik.upVector, Fk), kk._RigCamTransformMatrix), yk.c.TranslationToRef(Xk.x, Xk.y, Xk.z, kk._TargetTransformMatrix), kk._RigCamTransformMatrix.multiplyToRef(kk._TargetTransformMatrix, kk._RigCamTransformMatrix), yk.t.TransformCoordinatesToRef(this.position, kk._RigCamTransformMatrix, Ik.position), Ik.setTarget(Xk)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(tk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.H)()], qk = [(0, Tk.J)()], Lk = [(0, Tk.x)("lockedTargetId")], (0, Xk.j)(null, null, Fk, {
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
            metadata: ik
          }, wk, Hk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ik
          }, Jk, xk), (0, Xk.j)(null, null, qk, {
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
            metadata: ik
          }, Pk, Kk), (0, Xk.j)(null, null, Lk, {
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
            metadata: ik
          }, Qk, sk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk._RigCamTransformMatrix = new yk.c, kk._TargetTransformMatrix = new yk.c, kk._TargetFocalPoint = new yk.t, kk
      })(),
      Hk = !1;

    function Jk() {
      Hk || (Hk = !0, qk.b.AddNodeConstructor("TargetCamera", ((kk, Fk) => () => new wk(kk, yk.t.Zero(), Fk))))
    }
  },
  39956: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(39885);
    let Tk = !1;

    function ik() {
      Tk || (Tk = !0, Xk.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Xk.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Xk.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Xk.c.prototype.getAspectRatio = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = kk.viewport;
        return this.getRenderWidth(Fk) * Ik.width / (this.getRenderHeight(Fk) * Ik.height)
      }, Xk.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Xk.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40031: (kk, Fk, Ik) => {
    var Xk = Ik(39885),
      Tk = Ik(40038);
    let ik = !1;
    ik || (ik = !0, (0, Tk.x)(), Xk.c.prototype._loadFileAsync = async function(kk, Fk, Ik) {
      return await new Promise(((Xk, Tk) => {
        this._loadFile(kk, (kk => {
          Xk(kk)
        }), void 0, Fk, Ik, ((kk, Fk) => {
          Tk(Fk)
        }))
      }))
    })
  },
  40027: (kk, Fk, Ik) => {
    (0, Ik(39962).c)()
  },
  39962: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(39885);
    let Tk = !1;

    function ik() {
      Tk || (Tk = !0, Xk.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Xk.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Xk.c.prototype.createRenderPassId = function(kk) {
        const Fk = ++Xk.c._RenderPassIdCounter;
        return this._renderPassNames[Fk] = kk ?? "NONAME", Fk
      }, Xk.c.prototype.releaseRenderPassId = function(kk) {
        this._renderPassNames[kk] = void 0;
        for (let Fk = 0; Fk < this.scenes.length; ++Fk) {
          const Ik = this.scenes[Fk];
          for (let Fk = 0; Fk < Ik.meshes.length; ++Fk) {
            const Xk = Ik.meshes[Fk];
            if (Xk._releaseRenderPassId(kk), Xk.lK)
              for (let Fk = 0; Fk < Xk.lK.length; ++Fk) {
                Xk.lK[Fk]._removeDrawWrapper(kk)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(kk)
      })
    }
  },
  40070: (kk, Fk, Ik) => {
    var Xk = Ik(40078),
      Tk = Ik(39885);
    let ik = !1;
    ik || (ik = !0, Tk.c.GetCompatibleTextureLoader = Xk.b)
  },
  39969: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(39825);
    let Tk = !1;

    function ik() {
      Tk || (Tk = !0, Xk.ThinEngine.prototype.setAlphaMode = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[Ik] === kk) {
          if (!Fk) {
            const Fk = 0 === kk;
            this.depthCullingState.depthMask !== Fk && (this.depthCullingState.depthMask = Fk)
          }
          return
        }
        const Xk = 0 === kk;
        this._alphaState.setAlphaBlend(!Xk, Ik), this._alphaState.setAlphaMode(kk, Ik), Fk || (this.depthCullingState.depthMask = Xk), this._alphaMode[Ik] = kk
      })
    }
  },
  39980: (kk, Fk, Ik) => {
    var Xk = Ik(39818),
      Tk = Ik(38674),
      ik = Ik(39825),
      yk = Ik(39983),
      lk = Ik(39939);
    class ak extends yk.d {
      setDepthStencilTexture(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(kk, Fk), !kk) return;
        const Ik = this._engine,
          Xk = this._context,
          Tk = kk._hardwareTexture;
        if (Tk && kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const Fk = Ik._currentFramebuffer;
          Ik._bindUnboundFramebuffer(this._MSAAFramebuffer), Xk.framebufferRenderbuffer(Xk.FRAMEBUFFER, (0, lk.e)(kk.format) ? Xk.DEPTH_STENCIL_ATTACHMENT : Xk.DEPTH_ATTACHMENT, Xk.RENDERBUFFER, Tk.getMSAARenderBuffer()), Ik._bindUnboundFramebuffer(Fk)
        }
      }
      constructor(kk, Fk, Ik, Xk, Tk) {
        super(kk, Fk, Ik, Xk), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Tk
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const kk = this._engine,
            Fk = kk._currentFramebuffer,
            Ik = this._context;
          kk._bindUnboundFramebuffer(this._framebuffer), Ik.framebufferRenderbuffer(Ik.FRAMEBUFFER, Ik.DEPTH_STENCIL_ATTACHMENT, Ik.RENDERBUFFER, null), Ik.framebufferRenderbuffer(Ik.FRAMEBUFFER, Ik.DEPTH_ATTACHMENT, Ik.RENDERBUFFER, null), Ik.framebufferRenderbuffer(Ik.FRAMEBUFFER, Ik.STENCIL_ATTACHMENT, Ik.RENDERBUFFER, null), kk._bindUnboundFramebuffer(Fk), Ik.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(kk, Fk, Ik, Xk, Tk, ik)
      }
      shareDepth(kk) {
        super.shareDepth(kk);
        const Fk = this._context,
          Ik = this._depthStencilBuffer,
          Xk = kk._MSAAFramebuffer || kk._framebuffer,
          Tk = this._engine;
        kk._depthStencilBuffer && kk._depthStencilBuffer !== Ik && Fk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = Ik;
        const ik = kk._generateStencilBuffer ? Fk.DEPTH_STENCIL_ATTACHMENT : Fk.DEPTH_ATTACHMENT;
        Tk._bindUnboundFramebuffer(Xk), Fk.framebufferRenderbuffer(Fk.FRAMEBUFFER, ik, Fk.RENDERBUFFER, Ik), Tk._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Tk = kk._hardwareTexture;
        if (!Tk) return;
        const ik = this._framebuffer,
          yk = this._engine,
          lk = yk._currentFramebuffer;
        let ak;
        if (yk._bindUnboundFramebuffer(ik), yk.tw > 1) {
          const ik = this._context;
          ak = ik["COLOR_ATTACHMENT" + Fk], kk.is2DArray || kk.is3D ? (Ik = Ik ?? this.layerIndices?.[Fk] ?? 0, ik.framebufferTextureLayer(ik.FRAMEBUFFER, ak, Tk.underlyingResource, Xk, Ik)) : kk.isCube ? (Ik = Ik ?? this.faceIndices?.[Fk] ?? 0, ik.framebufferTexture2D(ik.FRAMEBUFFER, ak, ik.TEXTURE_CUBE_MAP_POSITIVE_X + Ik, Tk.underlyingResource, Xk)) : ik.framebufferTexture2D(ik.FRAMEBUFFER, ak, ik.TEXTURE_2D, Tk.underlyingResource, Xk)
        } else {
          const kk = this._context;
          ak = kk["COLOR_ATTACHMENT" + Fk + "_WEBGL"];
          const ik = void 0 !== Ik ? kk.TEXTURE_CUBE_MAP_POSITIVE_X + Ik : kk.TEXTURE_2D;
          kk.framebufferTexture2D(kk.FRAMEBUFFER, ak, ik, Tk.underlyingResource, Xk)
        }
        if (kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const kk = this._context;
          yk._bindUnboundFramebuffer(this._MSAAFramebuffer), kk.framebufferRenderbuffer(kk.FRAMEBUFFER, ak, kk.RENDERBUFFER, Tk.getMSAARenderBuffer())
        }
        yk._bindUnboundFramebuffer(lk)
      }
      setTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(kk, Fk, Ik), this._bindTextureRenderTarget(kk, Fk)
      }
      setLayerAndFaceIndices(kk, Fk) {
        if (super.setLayerAndFaceIndices(kk, Fk), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Ik = this._attachments?.length ?? this.textures.length;
        for (let Xk = 0; Xk < Ik; Xk++) {
          const kk = this.textures[Xk];
          kk && (kk.is2DArray || kk.is3D ? this._bindTextureRenderTarget(kk, Xk, this.layerIndices[Xk]) : kk.isCube ? this._bindTextureRenderTarget(kk, Xk, this.faceIndices[Xk]) : this._bindTextureRenderTarget(kk, Xk))
        }
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(kk, Fk, Ik), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Xk = this.textures[kk];
        Xk.is2DArray || Xk.is3D ? this._bindTextureRenderTarget(this.textures[kk], kk, this.layerIndices[kk]) : Xk.isCube && this._bindTextureRenderTarget(this.textures[kk], kk, this.faceIndices[kk])
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
    let qk = !1;
    qk || (qk = !0, ik.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(kk, Fk, Ik) {
      const Xk = new ak(kk, Fk, Ik, this, this._gl);
      return this._renderTargetWrapperCache.push(Xk), Xk
    }, ik.ThinEngine.prototype.createRenderTargetTexture = function(kk, Fk) {
      const Ik = this._createHardwareRenderTargetWrapper(!1, !1, kk);
      let Xk, Tk, ik = !0,
        yk = !1,
        lk = !1,
        ak = 1;
      void 0 !== Fk && "object" === typeof Fk && (ik = Fk.generateDepthBuffer ?? !0, yk = !!Fk.generateStencilBuffer, lk = !!Fk.noColorAttachment, Xk = Fk.colorAttachment, ak = Fk.samples ?? 1, Tk = Fk.label);
      const qk = Xk || (lk ? null : this._createInternalTexture(kk, Fk, !0, 5)),
        Lk = kk.width || kk,
        tk = kk.height || kk,
        Zk = this._currentFramebuffer,
        jk = this._gl,
        ek = jk.createFramebuffer();
      if (this._bindUnboundFramebuffer(ek), Ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(yk, ik, Lk, tk), !qk || qk.is2DArray || qk.is3D || jk.framebufferTexture2D(jk.FRAMEBUFFER, jk.COLOR_ATTACHMENT0, jk.TEXTURE_2D, qk._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Zk), Ik.label = Tk ?? "RenderTargetWrapper", Ik._framebuffer = ek, Ik._generateDepthBuffer = ik, Ik._generateStencilBuffer = yk, Ik.setTextures(qk), Xk) {
        if (Ik._samples = Xk.samples, Xk.samples > 1) {
          const kk = Xk._hardwareTexture.getMSAARenderBuffer(0);
          Ik._MSAAFramebuffer = jk.createFramebuffer(), this._bindUnboundFramebuffer(Ik._MSAAFramebuffer), jk.framebufferRenderbuffer(jk.FRAMEBUFFER, jk.COLOR_ATTACHMENT0, jk.RENDERBUFFER, kk), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(Ik, ak);
      return Ik
    }, ik.ThinEngine.prototype._createDepthStencilTexture = function(kk, Fk, Ik) {
      const ik = this._gl,
        yk = kk.layers || 0,
        ak = kk.depth || 0;
      let qk = ik.TEXTURE_2D;
      0 !== yk ? qk = ik.TEXTURE_2D_ARRAY : 0 !== ak && (qk = ik.TEXTURE_3D);
      const Lk = new Xk.b(this, 12);
      if (Lk.label = Fk.label, !this._caps.depthTextureExtension) return Tk.e.Error("Depth texture is not supported by your browser or hardware."), Lk;
      const tk = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Fk
      };
      if (this._bindTextureDirectly(qk, Lk, !0), this._setupDepthStencilTexture(Lk, kk, 0 !== tk.comparisonFunction && tk.bilinearFiltering, tk.comparisonFunction, tk.samples), void 0 !== tk.depthTextureFormat) {
        if (15 !== tk.depthTextureFormat && 16 !== tk.depthTextureFormat && 17 !== tk.depthTextureFormat && 13 !== tk.depthTextureFormat && 14 !== tk.depthTextureFormat && 18 !== tk.depthTextureFormat) return Tk.e.Error(`Depth texture ${tk.depthTextureFormat} format is not supported.`), Lk;
        Lk.format = tk.depthTextureFormat
      } else Lk.format = tk.generateStencil ? 13 : 16;
      const Zk = (0, lk.e)(Lk.format),
        jk = this._getWebGLTextureTypeFromDepthTextureFormat(Lk.format),
        ek = Zk ? ik.DEPTH_STENCIL : ik.DEPTH_COMPONENT,
        wk = this._getInternalFormatFromDepthTextureFormat(Lk.format, !0, Zk);
      return Lk.is2DArray ? ik.texImage3D(qk, 0, wk, Lk.width, Lk.height, yk, 0, ek, jk, null) : Lk.is3D ? ik.texImage3D(qk, 0, wk, Lk.width, Lk.height, ak, 0, ek, jk, null) : ik.texImage2D(qk, 0, wk, Lk.width, Lk.height, 0, ek, jk, null), this._bindTextureDirectly(qk, null), this._internalTexturesCache.push(Lk), Ik._depthStencilBuffer && (ik.deleteRenderbuffer(Ik._depthStencilBuffer), Ik._depthStencilBuffer = null), this._bindUnboundFramebuffer(Ik._MSAAFramebuffer ?? Ik._framebuffer), Ik._generateStencilBuffer = Zk, Ik._depthStencilTextureWithStencil = Zk, Ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ik._generateStencilBuffer, Ik._generateDepthBuffer, Ik.width, Ik.height, Ik.samples, Lk.format), this._bindUnboundFramebuffer(null), Lk
    }, ik.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(kk, Fk) {
      if (this.tw < 2 || !kk) return 1;
      if (kk.samples === Fk) return Fk;
      const Ik = this._gl;
      Fk = Math.min(Fk, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (Ik.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (Ik.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
      const Xk = kk.texture?._hardwareTexture;
      if (Xk?.releaseMSAARenderBuffers(), kk.texture && Fk > 1 && "function" === typeof Ik.renderbufferStorageMultisample) {
        const Tk = Ik.createFramebuffer();
        if (!Tk) throw new Error("Unable to create multi sampled framebuffer");
        kk._MSAAFramebuffer = Tk, this._bindUnboundFramebuffer(kk._MSAAFramebuffer);
        const ik = this._createRenderBuffer(kk.texture.width, kk.texture.height, Fk, -1, this._getRGBABufferInternalSizedFormat(kk.texture.type, kk.texture.format, kk.texture._useSRGBBuffer), Ik.COLOR_ATTACHMENT0, !1);
        if (!ik) throw new Error("Unable to create multi sampled framebuffer");
        Xk?.addMSAARenderBuffer(ik)
      }
      this._bindUnboundFramebuffer(kk._MSAAFramebuffer ?? kk._framebuffer), kk.texture && (kk.texture.samples = Fk), kk._samples = Fk;
      const Tk = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
      return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, Fk, Tk), this._bindUnboundFramebuffer(null), Fk
    }, ik.ThinEngine.prototype._setupDepthStencilTexture = function(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const ik = Fk.width ?? Fk,
        yk = Fk.height ?? Fk,
        lk = Fk.layers || 0,
        ak = Fk.depth || 0;
      kk.baseWidth = ik, kk.baseHeight = yk, kk.width = ik, kk.height = yk, kk.is2DArray = lk > 0, kk.depth = lk || ak, kk.isReady = !0, kk.samples = Tk, kk.generateMipMaps = !1, kk.samplingMode = Ik ? 2 : 1, kk.type = 0, kk._comparisonFunction = Xk;
      const qk = this._gl,
        Lk = this._getTextureTarget(kk),
        tk = this._getSamplingParameters(kk.samplingMode, !1);
      qk.texParameteri(Lk, qk.TEXTURE_MAG_FILTER, tk.mag), qk.texParameteri(Lk, qk.TEXTURE_MIN_FILTER, tk.min), qk.texParameteri(Lk, qk.TEXTURE_WRAP_S, qk.CLAMP_TO_EDGE), qk.texParameteri(Lk, qk.TEXTURE_WRAP_T, qk.CLAMP_TO_EDGE), this.tw > 1 && (0 === Xk ? (qk.texParameteri(Lk, qk.TEXTURE_COMPARE_FUNC, 515), qk.texParameteri(Lk, qk.TEXTURE_COMPARE_MODE, qk.NONE)) : (qk.texParameteri(Lk, qk.TEXTURE_COMPARE_FUNC, Xk), qk.texParameteri(Lk, qk.TEXTURE_COMPARE_MODE, qk.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39806: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.d
    });
    var Xk = Ik(39815);
    (0, Ik(39969).e)();
    var Tk = Ik(39825);
    let ik = !1;
    ! function() {
      if (ik) return;
      ik = !0;
      const kk = new WeakMap,
        Fk = new WeakMap,
        Ik = new WeakMap,
        Xk = new WeakMap;
      Tk.ThinEngine.prototype.getAlphaToCoverage = function() {
        return kk.get(this) ?? !1
      }, Tk.ThinEngine.prototype.setAlphaToCoverage = function(Ik) {
        (kk.get(this) !== Ik || this._gl && Fk.get(this) !== this._gl) && (kk.set(this, Ik), this._gl && (Ik ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Fk.set(this, this._gl)))
      }, Object.defineProperty(Tk.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Xk.get(this) !== this._gl && (Ik.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Xk.set(this, this._gl)), Ik.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var yk = Ik(39818),
      lk = Ik(38674),
      ak = Ik(39923);
    let qk = !1;
    ! function() {
      function kk(kk, Fk, Ik, Xk) {
        let Tk, ik = 1;
        1 === Xk ? Tk = new Float32Array(Fk * Ik * 4) : 2 === Xk ? (Tk = new Uint16Array(Fk * Ik * 4), ik = 15360) : Tk = 7 === Xk ? new Uint32Array(Fk * Ik * 4) : new Uint8Array(Fk * Ik * 4);
        for (let yk = 0; yk < Fk; yk++)
          for (let Xk = 0; Xk < Ik; Xk++) {
            const Ik = 3 * (Xk * Fk + yk),
              lk = 4 * (Xk * Fk + yk);
            Tk[lk + 0] = kk[Ik + 0], Tk[lk + 1] = kk[Ik + 1], Tk[lk + 2] = kk[Ik + 2], Tk[lk + 3] = ik
          }
        return Tk
      }

      function Fk(kk) {
        return function(Fk, Ik, Xk, Tk, ik, lk, ak, qk) {
          let Lk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            tk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Zk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            jk = kk ? 10 : 11,
            ek = new yk.b(this, jk);
          ek.baseWidth = Ik, ek.baseHeight = Xk, ek.baseDepth = Tk, ek.width = Ik, ek.height = Xk, ek.depth = Tk, ek.format = ik, ek.type = tk, ek.generateMipMaps = lk, ek.samplingMode = qk, kk ? ek.is3D = !0 : ek.is2DArray = !0, this._doNotHandleContextLost || (ek._bufferView = Fk), kk ? this.updateRawTexture3D(ek, Fk, ik, ak, Lk, tk) : this.updateRawTexture2DArray(ek, Fk, ik, ak, Lk, tk), this._bindTextureDirectly(Zk, ek, !0);
          const wk = this._getSamplingParameters(qk, lk);
          return this._gl.texParameteri(Zk, this._gl.TEXTURE_MAG_FILTER, wk.mag), this._gl.texParameteri(Zk, this._gl.TEXTURE_MIN_FILTER, wk.min), lk && this._gl.generateMipmap(Zk), this._bindTextureDirectly(Zk, null), this._internalTexturesCache.push(ek), ek
        }
      }

      function Ik(kk) {
        return function(Fk, Ik, Xk, Tk) {
          let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const lk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            ak = this._getWebGLTextureType(yk),
            qk = this._getInternalFormat(Xk),
            Lk = this._getRGBABufferInternalSizedFormat(yk, Xk);
          this._bindTextureDirectly(lk, Fk, !0), this._unpackFlipY(void 0 === Tk || !!Tk), this._doNotHandleContextLost || (Fk._bufferView = Ik, Fk.format = Xk, Fk.invertY = Tk, Fk._compression = ik), Fk.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), ik && Ik ? this._gl.compressedTexImage3D(lk, 0, this.getCaps().s3tc[ik], Fk.width, Fk.height, Fk.depth, 0, Ik) : this._gl.texImage3D(lk, 0, Lk, Fk.width, Fk.height, Fk.depth, 0, qk, ak, Ik), Fk.generateMipMaps && this._gl.generateMipmap(lk), this._bindTextureDirectly(lk, null), Fk.isReady = !0
        }
      }
      qk || (qk = !0, Tk.ThinEngine.prototype.updateRawTexture = function(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!kk) return;
        const lk = this._getRGBABufferInternalSizedFormat(ik, Ik, yk),
          ak = this._getInternalFormat(Ik),
          qk = this._getWebGLTextureType(ik);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === Xk || !!Xk), this._doNotHandleContextLost || (kk._bufferView = Fk, kk.format = Ik, kk.type = ik, kk.invertY = Xk, kk._compression = Tk), kk.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Tk && Fk ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Tk], kk.width, kk.height, 0, Fk) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, lk, kk.width, kk.height, 0, ak, qk, Fk), kk.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), kk.isReady = !0
      }, Tk.ThinEngine.prototype.createRawTexture = function(kk, Fk, Ik, Xk, Tk, ik, lk) {
        let ak = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Lk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const tk = new yk.b(this, 3);
        tk.baseWidth = Fk, tk.baseHeight = Ik, tk.width = Fk, tk.height = Ik, tk.format = Xk, tk.generateMipMaps = Tk, tk.samplingMode = lk, tk.invertY = ik, tk._compression = ak, tk.type = qk, tk._useSRGBBuffer = this._getUseSRGBBuffer(Lk, !Tk), this._doNotHandleContextLost || (tk._bufferView = kk), this.updateRawTexture(tk, kk, Xk, ik, ak, qk, tk._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, tk, !0);
        const Zk = this._getSamplingParameters(lk, Tk);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Zk.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Zk.min), Tk && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(tk), tk
      }, Tk.ThinEngine.prototype.createRawCubeTexture = function(kk, Fk, Ik, Xk, Tk, ik, qk) {
        let Lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const tk = this._gl,
          Zk = new yk.b(this, 8);
        Zk.isCube = !0, Zk.format = Ik, Zk.type = Xk, this._doNotHandleContextLost || (Zk._bufferViewArray = kk);
        const jk = this._getWebGLTextureType(Xk);
        let ek = this._getInternalFormat(Ik);
        ek === tk.RGB && (ek = tk.RGBA), jk !== tk.FLOAT || this._caps.textureFloatLinearFiltering ? jk !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? jk !== tk.FLOAT || this._caps.textureFloatRender ? jk !== tk.HALF_FLOAT || this._caps.colorBufferFloat || (Tk = !1, lk.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Tk = !1, lk.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Tk = !1, qk = 1, lk.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Tk = !1, qk = 1, lk.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const wk = Fk,
          Hk = wk;
        Zk.width = wk, Zk.height = Hk, Zk.invertY = ik, Zk._compression = Lk;
        if (!this.needPOTTextures || (0, ak.j)(Zk.width) && (0, ak.j)(Zk.height) || (Tk = !1), kk) this.updateRawCubeTexture(Zk, kk, Ik, Xk, ik, Lk);
        else {
          const kk = this._getRGBABufferInternalSizedFormat(Xk),
            Fk = 0;
          this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, Zk, !0);
          for (let Ik = 0; Ik < 6; Ik++) Lk ? tk.compressedTexImage2D(tk.TEXTURE_CUBE_MAP_POSITIVE_X + Ik, Fk, this.getCaps().s3tc[Lk], Zk.width, Zk.height, 0, void 0) : tk.texImage2D(tk.TEXTURE_CUBE_MAP_POSITIVE_X + Ik, Fk, kk, Zk.width, Zk.height, 0, ek, jk, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Zk, !0), kk && Tk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Jk = this._getSamplingParameters(qk, Tk);
        return tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_MAG_FILTER, Jk.mag), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_MIN_FILTER, Jk.min), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_WRAP_S, tk.CLAMP_TO_EDGE), tk.texParameteri(tk.TEXTURE_CUBE_MAP, tk.TEXTURE_WRAP_T, tk.CLAMP_TO_EDGE), this._bindTextureDirectly(tk.TEXTURE_CUBE_MAP, null), Zk.generateMipMaps = Tk, Zk.samplingMode = qk, Zk.isReady = !0, Zk
      }, Tk.ThinEngine.prototype.updateRawCubeTexture = function(Fk, Ik, Xk, Tk, ik) {
        let yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Fk._bufferViewArray = Ik, Fk.format = Xk, Fk.type = Tk, Fk.invertY = ik, Fk._compression = yk;
        const qk = this._gl,
          Lk = this._getWebGLTextureType(Tk);
        let tk = this._getInternalFormat(Xk);
        const Zk = this._getRGBABufferInternalSizedFormat(Tk);
        let jk = !1;
        tk === qk.RGB && (tk = qk.RGBA, jk = !0), this._bindTextureDirectly(qk.TEXTURE_CUBE_MAP, Fk, !0), this._unpackFlipY(void 0 === ik || !!ik), Fk.width % 4 !== 0 && qk.pixelStorei(qk.UNPACK_ALIGNMENT, 1);
        for (let ak = 0; ak < 6; ak++) {
          let Xk = Ik[ak];
          yk ? qk.compressedTexImage2D(qk.TEXTURE_CUBE_MAP_POSITIVE_X + ak, lk, this.getCaps().s3tc[yk], Fk.width, Fk.height, 0, Xk) : (jk && (Xk = kk(Xk, Fk.width, Fk.height, Tk)), qk.texImage2D(qk.TEXTURE_CUBE_MAP_POSITIVE_X + ak, lk, Zk, Fk.width, Fk.height, 0, tk, Lk, Xk))
        }(!this.needPOTTextures || (0, ak.j)(Fk.width) && (0, ak.j)(Fk.height)) && Fk.generateMipMaps && 0 === lk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Fk.isReady = !0
      }, Tk.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        let qk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          tk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Zk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const jk = this._gl,
          ek = this.createRawCubeTexture(null, Xk, Tk, ik, !yk, Zk, tk, null);
        Ik?.addPendingData(ek), ek.url = Fk, ek.isReady = !1, this._internalTexturesCache.push(ek);
        const wk = (kk, Fk) => {
            Ik?.removePendingData(ek), Lk && Lk(kk ? kk.status + " " + kk.statusText : "Failed to parse texture data", Fk)
          },
          Hk = async Fk => {
            if (!ek._hardwareTexture) return;
            const Xk = lk(Fk);
            if (!Xk) return;
            const yk = Xk instanceof Promise ? await Xk : Xk,
              Lk = ek.width;
            if (ak) {
              const Fk = this._getWebGLTextureType(ik);
              let Ik = this._getInternalFormat(Tk);
              const Xk = this._getRGBABufferInternalSizedFormat(ik);
              let lk = !1;
              Ik === jk.RGB && (Ik = jk.RGBA, lk = !0), this._bindTextureDirectly(jk.TEXTURE_CUBE_MAP, ek, !0), this._unpackFlipY(!1);
              const qk = ak(yk);
              for (let Tk = 0; Tk < qk.length; Tk++) {
                const yk = Lk >> Tk;
                for (let ak = 0; ak < 6; ak++) {
                  let Lk = qk[Tk][ak];
                  lk && (Lk = kk(Lk, yk, yk, ik)), jk.texImage2D(ak, Tk, Xk, yk, yk, 0, Ik, Fk, Lk)
                }
              }
              this._bindTextureDirectly(jk.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(ek, yk, Tk, ik, Zk);
            ek.isReady = !0, Ik?.removePendingData(ek), ek.onLoadedObservable.notifyObservers(ek), ek.onLoadedObservable.clear(), qk && qk()
          };
        return this._loadFile(Fk, (kk => {
          Hk(kk).catch((kk => {
            wk(void 0, kk)
          }))
        }), void 0, Ik?.offlineProvider, !0, wk), ek
      }, Tk.ThinEngine.prototype.createRawTexture2DArray = Fk(!1), Tk.ThinEngine.prototype.createRawTexture3D = Fk(!0), Tk.ThinEngine.prototype.updateRawTexture2DArray = Ik(!1), Tk.ThinEngine.prototype.updateRawTexture3D = Ik(!0))
    }();
    var Lk = Ik(39860);
    let tk = !1;
    tk || (tk = !0, Tk.ThinEngine.prototype._readTexturePixelsSync = function(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        qk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const tk = this._gl;
      if (!tk) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const kk = tk.createFramebuffer();
        if (!kk) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = kk
      }
      tk.bindFramebuffer(tk.FRAMEBUFFER, this._dummyFramebuffer), Xk > -1 && (kk.is2DArray || kk.is3D) ? tk.framebufferTextureLayer(tk.FRAMEBUFFER, tk.COLOR_ATTACHMENT0, kk._hardwareTexture?.underlyingResource, Tk, Xk) : Xk > -1 ? tk.framebufferTexture2D(tk.FRAMEBUFFER, tk.COLOR_ATTACHMENT0, tk.TEXTURE_CUBE_MAP_POSITIVE_X + Xk, kk._hardwareTexture?.underlyingResource, Tk) : tk.framebufferTexture2D(tk.FRAMEBUFFER, tk.COLOR_ATTACHMENT0, tk.TEXTURE_2D, kk._hardwareTexture?.underlyingResource, Tk);
      let Zk = void 0 !== kk.type ? this._getWebGLTextureType(kk.type) : tk.UNSIGNED_BYTE;
      return lk ? ik || (ik = (0, Lk.o)(kk.type, 4 * Fk * Ik)) : Zk === tk.UNSIGNED_BYTE ? (ik || (ik = new Uint8Array(4 * Fk * Ik)), Zk = tk.UNSIGNED_BYTE) : (ik || (ik = new Float32Array(4 * Fk * Ik)), Zk = tk.FLOAT), yk && this.flushFramebuffer(), tk.readPixels(ak, qk, Fk, Ik, tk.RGBA, Zk, ik), tk.bindFramebuffer(tk.FRAMEBUFFER, this._currentFramebuffer), ik
    }, Tk.ThinEngine.prototype._readTexturePixels = function(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        qk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk))
    }), (0, Ik(39972).e)();
    let Zk = !1;
    Zk || (Zk = !0, Tk.ThinEngine.prototype._createDepthStencilCubeTexture = function(kk, Fk) {
      const Ik = new yk.b(this, 12);
      if (Ik.isCube = !0, 1 === this.tw) return lk.e.Error("Depth cube texture is not supported by WebGL 1."), Ik;
      const Xk = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Fk
        },
        Tk = this._gl;
      this._bindTextureDirectly(Tk.TEXTURE_CUBE_MAP, Ik, !0), this._setupDepthStencilTexture(Ik, kk, Xk.bilinearFiltering, Xk.comparisonFunction);
      for (let ik = 0; ik < 6; ik++) Xk.generateStencil ? Tk.texImage2D(Tk.TEXTURE_CUBE_MAP_POSITIVE_X + ik, 0, Tk.DEPTH24_STENCIL8, kk, kk, 0, Tk.DEPTH_STENCIL, Tk.UNSIGNED_INT_24_8, null) : Tk.texImage2D(Tk.TEXTURE_CUBE_MAP_POSITIVE_X + ik, 0, Tk.DEPTH_COMPONENT24, kk, kk, 0, Tk.DEPTH_COMPONENT, Tk.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Tk.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(Ik), Ik
    }, Tk.ThinEngine.prototype._setCubeMapTextureParams = function(kk, Fk, Ik) {
      const Xk = this._gl;
      Xk.texParameteri(Xk.TEXTURE_CUBE_MAP, Xk.TEXTURE_MAG_FILTER, Xk.LINEAR), Xk.texParameteri(Xk.TEXTURE_CUBE_MAP, Xk.TEXTURE_MIN_FILTER, Fk ? Xk.LINEAR_MIPMAP_LINEAR : Xk.LINEAR), Xk.texParameteri(Xk.TEXTURE_CUBE_MAP, Xk.TEXTURE_WRAP_S, Xk.CLAMP_TO_EDGE), Xk.texParameteri(Xk.TEXTURE_CUBE_MAP, Xk.TEXTURE_WRAP_T, Xk.CLAMP_TO_EDGE), kk.samplingMode = Fk ? 3 : 2, Fk && this.getCaps().textureMaxLevel && void 0 !== Ik && Ik > 0 && (Xk.texParameteri(Xk.TEXTURE_CUBE_MAP, Xk.TEXTURE_MAX_LEVEL, Ik), kk._maxLodLevel = Ik), this._bindTextureDirectly(Xk.TEXTURE_CUBE_MAP, null)
    }, Tk.ThinEngine.prototype.createCubeTexture = function(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yk = arguments.length > 6 ? arguments[6] : void 0,
        qk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Lk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        tk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Zk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        jk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        ek = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        wk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Hk = this._gl;
      return this.createCubeTextureBase(kk, Fk, Ik, !!Xk, Tk, ik, yk, qk, Lk, tk, Zk, jk, (kk => this._bindTextureDirectly(Hk.TEXTURE_CUBE_MAP, kk, !0)), ((kk, Fk) => {
        const Ik = this.needPOTTextures ? (0, ak.g)(Fk[0].width, this._caps.maxCubemapTextureSize) : Fk[0].width,
          ik = Ik,
          qk = [Hk.TEXTURE_CUBE_MAP_POSITIVE_X, Hk.TEXTURE_CUBE_MAP_POSITIVE_Y, Hk.TEXTURE_CUBE_MAP_POSITIVE_Z, Hk.TEXTURE_CUBE_MAP_NEGATIVE_X, Hk.TEXTURE_CUBE_MAP_NEGATIVE_Y, Hk.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Hk.TEXTURE_CUBE_MAP, kk, !0), this._unpackFlipY(!1);
        const Lk = yk ? this._getInternalFormat(yk, kk._useSRGBBuffer) : kk._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Hk.RGBA;
        let tk = yk ? this._getInternalFormat(yk) : Hk.RGBA;
        kk._useSRGBBuffer && 1 === this.tw && (tk = Lk);
        for (let Xk = 0; Xk < qk.length; Xk++)
          if (Fk[Xk].width !== Ik || Fk[Xk].height !== ik) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void lk.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = Ik, this._workingCanvas.height = ik, this._workingContext.drawImage(Fk[Xk], 0, 0, Fk[Xk].width, Fk[Xk].height, 0, 0, Ik, ik), Hk.texImage2D(qk[Xk], 0, Lk, tk, Hk.UNSIGNED_BYTE, this._workingCanvas)
          } else Hk.texImage2D(qk[Xk], 0, Lk, tk, Hk.UNSIGNED_BYTE, Fk[Xk]);
        Xk || Hk.generateMipmap(Hk.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(kk, !Xk), kk.width = Ik, kk.height = ik, kk.isReady = !0, yk && (kk.format = yk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear(), Tk && Tk()
      }), !!ek, wk)
    }, Tk.ThinEngine.prototype.generateMipMapsForCubemap = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk.generateMipMaps) {
        const Ik = this._gl;
        this._bindTextureDirectly(Ik.TEXTURE_CUBE_MAP, kk, !0), Ik.generateMipmap(Ik.TEXTURE_CUBE_MAP), Fk && this._bindTextureDirectly(Ik.TEXTURE_CUBE_MAP, null)
      }
    });
    Ik(39980);
    let jk = !1;
    jk || (jk = !0, Tk.ThinEngine.prototype.setDepthStencilTexture = function(kk, Fk, Ik, Xk) {
      void 0 !== kk && (Fk && (this._boundUniforms[kk] = Fk), Ik && Ik.depthStencilTexture ? this._setTexture(kk, Ik, !1, !0, Xk) : this._setTexture(kk, null, void 0, void 0, Xk))
    });
    let ek = !1;
    ek || (ek = !0, Tk.ThinEngine.prototype.createRenderTargetCubeTexture = function(kk, Fk) {
      const Ik = this._createHardwareRenderTargetWrapper(!1, !0, kk),
        Xk = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Fk
        };
      Xk.generateStencilBuffer = Xk.generateDepthBuffer && Xk.generateStencilBuffer, (1 !== Xk.type || this._caps.textureFloatLinearFiltering) && (2 !== Xk.type || this._caps.textureHalfFloatLinearFiltering) || (Xk.samplingMode = 1);
      const Tk = this._gl,
        ik = new yk.b(this, 5);
      this._bindTextureDirectly(Tk.TEXTURE_CUBE_MAP, ik, !0);
      const ak = this._getSamplingParameters(Xk.samplingMode, Xk.generateMipMaps);
      1 !== Xk.type || this._caps.textureFloat || (Xk.type = 0, lk.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Tk.texParameteri(Tk.TEXTURE_CUBE_MAP, Tk.TEXTURE_MAG_FILTER, ak.mag), Tk.texParameteri(Tk.TEXTURE_CUBE_MAP, Tk.TEXTURE_MIN_FILTER, ak.min), Tk.texParameteri(Tk.TEXTURE_CUBE_MAP, Tk.TEXTURE_WRAP_S, Tk.CLAMP_TO_EDGE), Tk.texParameteri(Tk.TEXTURE_CUBE_MAP, Tk.TEXTURE_WRAP_T, Tk.CLAMP_TO_EDGE);
      for (let yk = 0; yk < 6; yk++) Tk.texImage2D(Tk.TEXTURE_CUBE_MAP_POSITIVE_X + yk, 0, this._getRGBABufferInternalSizedFormat(Xk.type, Xk.format), kk, kk, 0, this._getInternalFormat(Xk.format), this._getWebGLTextureType(Xk.type), null);
      const qk = Tk.createFramebuffer();
      return this._bindUnboundFramebuffer(qk), Ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(Xk.generateStencilBuffer, Xk.generateDepthBuffer, kk, kk), Xk.generateMipMaps && Tk.generateMipmap(Tk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Tk.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), Ik._framebuffer = qk, Ik._generateDepthBuffer = Xk.generateDepthBuffer, Ik._generateStencilBuffer = Xk.generateStencilBuffer, ik.width = kk, ik.height = kk, ik.isReady = !0, ik.isCube = !0, ik.samples = 1, ik.generateMipMaps = Xk.generateMipMaps, ik.samplingMode = Xk.samplingMode, ik.type = Xk.type, ik.format = Xk.format, this._internalTexturesCache.push(ik), Ik.setTextures(ik), Ik
    });
    var wk = Ik(39989),
      Hk = Ik(39994);
    let Jk = !1;
    Jk || (Jk = !0, Tk.ThinEngine.prototype.createPrefilteredCubeTexture = function(kk, Fk, Xk, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        qk = arguments.length > 6 ? arguments[6] : void 0,
        Lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        tk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Zk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(kk, Fk, null, !1, (async kk => {
        if (!kk) return void(ik && ik(null));
        const ak = kk.texture;
        if (tk ? kk.info.sphericalPolynomial && (ak._sphericalPolynomial = kk.info.sphericalPolynomial) : ak._sphericalPolynomial = ak._sphericalPolynomial ?? new wk.h, ak._source = 9, this.getCaps().textureLOD) return void(ik && ik(ak));
        const qk = this._gl,
          Lk = kk.width;
        if (!Lk) return;
        const {
          DDSTools: Zk
        } = await Ik.e(306).then((() => Ik(41753))), jk = [];
        for (let Ik = 0; Ik < 3; Ik++) {
          const ik = 1 - Ik / 2,
            tk = Tk,
            ek = Math.log2(Lk) * Xk + Tk,
            wk = tk + (ek - tk) * ik,
            Jk = Math.round(Math.min(Math.max(wk, 0), ek)),
            xk = new yk.b(this, 2);
          if (xk.type = ak.type, xk.format = ak.format, xk.width = Math.pow(2, Math.max(Math.log2(Lk) - Jk, 0)), xk.height = xk.width, xk.isCube = !0, xk._cachedWrapU = 0, xk._cachedWrapV = 0, this._bindTextureDirectly(qk.TEXTURE_CUBE_MAP, xk, !0), xk.samplingMode = 2, qk.texParameteri(qk.TEXTURE_CUBE_MAP, qk.TEXTURE_MAG_FILTER, qk.LINEAR), qk.texParameteri(qk.TEXTURE_CUBE_MAP, qk.TEXTURE_MIN_FILTER, qk.LINEAR), qk.texParameteri(qk.TEXTURE_CUBE_MAP, qk.TEXTURE_WRAP_S, qk.CLAMP_TO_EDGE), qk.texParameteri(qk.TEXTURE_CUBE_MAP, qk.TEXTURE_WRAP_T, qk.CLAMP_TO_EDGE), kk.isDDS) {
            const Fk = kk.info,
              Ik = kk.data;
            this._unpackFlipY(Fk.isCompressed), Zk.UploadDDSLevels(this, xk, Ik, Fk, !0, 6, Jk)
          } else lk.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(qk.TEXTURE_CUBE_MAP, null);
          const Pk = new Hk.d(Fk);
          Pk._isCube = !0, Pk._texture = xk, xk.isReady = !0, jk.push(Pk)
        }
        ak._lodTextureHigh = jk[2], ak._lodTextureMid = jk[1], ak._lodTextureLow = jk[0], ik && ik(ak)
      }), ak, qk, Lk, tk, Xk, Tk, null, void 0, !1, Zk)
    });
    var xk = Ik(39906);
    let Pk = !1;
    Pk || (Pk = !0, Tk.ThinEngine.prototype.createUniformBuffer = function(kk, Fk) {
      const Ik = this._gl.createBuffer();
      if (!Ik) throw new Error("Unable to create uniform buffer");
      const Xk = new xk.e(Ik);
      return this.bindUniformBuffer(Xk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Xk.references = 1, Xk
    }, Tk.ThinEngine.prototype.createDynamicUniformBuffer = function(kk, Fk) {
      const Ik = this._gl.createBuffer();
      if (!Ik) throw new Error("Unable to create dynamic uniform buffer");
      const Xk = new xk.e(Ik);
      return this.bindUniformBuffer(Xk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Xk.references = 1, Xk
    }, Tk.ThinEngine.prototype.updateUniformBuffer = function(kk, Fk, Ik, Xk) {
      this.bindUniformBuffer(kk), void 0 === Ik && (Ik = 0), void 0 === Xk ? Fk instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Ik, Fk) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, Ik, new Float32Array(Fk)) : Fk instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Fk.subarray(Ik, Ik + Xk)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Fk).subarray(Ik, Ik + Xk)), this.bindUniformBuffer(null)
    }, Tk.ThinEngine.prototype.bindUniformBuffer = function(kk) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, kk ? kk.underlyingResource : null)
    }, Tk.ThinEngine.prototype.bindUniformBufferBase = function(kk, Fk, Ik) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Fk, kk ? kk.underlyingResource : null)
    }, Tk.ThinEngine.prototype.bindUniformBlock = function(kk, Fk, Ik) {
      const Xk = kk.program,
        Tk = this._gl.getUniformBlockIndex(Xk, Fk);
      4294967295 !== Tk && this._gl.uniformBlockBinding(Xk, Tk, Ik)
    });
    var Kk = Ik(39850),
      Qk = Ik(39885);
    let sk = !1;
    sk || (sk = !0, Qk.c.prototype.displayLoadingUI = function() {
      if (!(0, Kk.j)()) return;
      const kk = this.loadingScreen;
      kk && kk.displayLoadingUI()
    }, Qk.c.prototype.hideLoadingUI = function() {
      if (!(0, Kk.j)()) return;
      const kk = this._loadingScreen;
      kk && kk.hideLoadingUI()
    }, Object.defineProperty(Qk.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Qk.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(kk) {
        this._loadingScreen = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qk.c.prototype, "loadingUIText", {
      set: function(kk) {
        this.loadingScreen.loadingUIText = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Qk.c.prototype, "loadingUIBackgroundColor", {
      set: function(kk) {
        this.loadingScreen.loadingUIBackgroundColor = kk
      },
      enumerable: !0,
      configurable: !0
    })), (0, Ik(39956).b)();
    let Vk = !1;
    Vk || (Vk = !0, Qk.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Qk.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Qk.c.prototype.setDepthFunction = function(kk) {
      this._depthCullingState.depthFunc = kk
    }, Qk.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Qk.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Qk.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Qk.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Qk.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Qk.c.prototype.setDepthWrite = function(kk) {
      this._depthCullingState.depthMask = kk
    }, Qk.c.prototype.setAlphaConstants = function(kk, Fk, Ik, Xk) {
      this._alphaState.setAlphaBlendConstants(kk, Fk, Ik, Xk)
    }, Qk.c.prototype.getAlphaMode = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[kk]
    }, Qk.c.prototype.getAlphaEquation = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[kk]
    });
    let zk = !1;
    zk || (zk = !0, Qk.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Qk.c.prototype.setStencilBuffer = function(kk) {
      this._stencilState.stencilTest = kk
    }, Qk.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Qk.c.prototype.setStencilMask = function(kk) {
      this._stencilState.stencilMask = kk
    }, Qk.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Qk.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Qk.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Qk.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Qk.c.prototype.setStencilFunction = function(kk) {
      this._stencilState.stencilFunc = kk
    }, Qk.c.prototype.setStencilBackFunction = function(kk) {
      this._stencilState.stencilBackFunc = kk
    }, Qk.c.prototype.setStencilFunctionReference = function(kk) {
      this._stencilState.stencilFuncRef = kk
    }, Qk.c.prototype.setStencilFunctionMask = function(kk) {
      this._stencilState.stencilFuncMask = kk
    }, Qk.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Qk.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Qk.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Qk.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Qk.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Qk.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Qk.c.prototype.setStencilOperationFail = function(kk) {
      this._stencilState.stencilOpStencilFail = kk
    }, Qk.c.prototype.setStencilBackOperationFail = function(kk) {
      this._stencilState.stencilBackOpStencilFail = kk
    }, Qk.c.prototype.setStencilOperationDepthFail = function(kk) {
      this._stencilState.stencilOpDepthFail = kk
    }, Qk.c.prototype.setStencilBackOperationDepthFail = function(kk) {
      this._stencilState.stencilBackOpDepthFail = kk
    }, Qk.c.prototype.setStencilOperationPass = function(kk) {
      this._stencilState.stencilOpStencilDepthPass = kk
    }, Qk.c.prototype.setStencilBackOperationPass = function(kk) {
      this._stencilState.stencilBackOpStencilDepthPass = kk
    }, Qk.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Qk.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    Ik(40027);
    let Sk = !1;
    Sk || (Sk = !0, Qk.c.prototype.createDepthStencilTexture = function(kk, Fk, Ik) {
      if (Fk.isCube) {
        const Ik = kk.width || kk;
        return this._createDepthStencilCubeTexture(Ik, Fk)
      }
      return this._createDepthStencilTexture(kk, Fk, Ik)
    });
    Ik(40031), Ik(40070);
    let vk = !1;
    vk || (vk = !0, Tk.ThinEngine.prototype.enableScissor = function(kk, Fk, Ik, Xk) {
      const Tk = this._gl;
      Tk.enable(Tk.SCISSOR_TEST), Tk.scissor(kk, Fk, Ik, Xk)
    }, Tk.ThinEngine.prototype.disableScissor = function() {
      const kk = this._gl;
      kk.disable(kk.SCISSOR_TEST)
    })
  },
  39815: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Qk
    });
    var Xk = Ik(39818),
      Tk = Ik(37178),
      ik = Ik(39825),
      yk = Ik(39891);
    class lk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new ak(kk)
      }
      sampleFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.d.Now;
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
    class ak {
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
    var qk = Ik(39906),
      Lk = Ik(38674),
      tk = Ik(39931),
      Zk = Ik(39885),
      jk = Ik(39850);

    function ek(kk) {
      const Fk = function(kk) {
        if (!(0, jk.d)() || !document.body) return null;
        const Fk = document.createElement("span");
        Fk.textContent = "Hg", Fk.style.font = kk;
        const Ik = document.createElement("div");
        Ik.style.display = "inline-block", Ik.style.width = "1px", Ik.style.height = "0px", Ik.style.verticalAlign = "bottom";
        const Xk = document.createElement("div");
        let Tk, ik;
        Xk.style.whiteSpace = "nowrap", Xk.appendChild(Fk), Xk.appendChild(Ik), document.body.appendChild(Xk);
        try {
          ik = Ik.getBoundingClientRect().top - Fk.getBoundingClientRect().top, Ik.style.verticalAlign = "baseline", Tk = Ik.getBoundingClientRect().top - Fk.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Xk)
        }
        const yk = {
          ascent: Tk,
          height: ik,
          descent: ik - Tk
        };
        return wk(yk) ? yk : null
      }(kk);
      if (Fk) return Fk;
      const Ik = function(kk) {
        let Fk = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Fk = new OffscreenCanvas(64, 64) : (0, jk.d)() && "function" === typeof document.createElement && (Fk = document.createElement("canvas"), Fk.width = 64, Fk.height = 64);
          const Ik = Fk?.getContext("2d");
          if (!Ik) return null;
          Ik.font = kk;
          const Xk = Ik.measureText("Hg"),
            Tk = Number(Xk.actualBoundingBoxAscent ?? Xk.fontBoundingBoxAscent),
            ik = Number(Xk.actualBoundingBoxDescent ?? Xk.fontBoundingBoxDescent),
            yk = {
              ascent: Tk,
              height: Tk + ik,
              descent: ik
            };
          return wk(yk) ? yk : null
        } catch {
          return null
        } finally {
          const kk = Fk;
          "function" === typeof kk?.dispose && kk.dispose()
        }
      }(kk);
      return Ik || function(kk) {
        const Fk = Math.max(1, function(kk) {
            const Fk = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(kk || ""));
            return Fk ? Number(Fk[1]) : 16
          }(kk)),
          Ik = .8 * Fk,
          Xk = .2 * Fk;
        return {
          ascent: Ik,
          height: Ik + Xk,
          descent: Xk
        }
      }(kk)
    }

    function wk(kk) {
      return Number.isFinite(kk.ascent) && Number.isFinite(kk.height) && Number.isFinite(kk.descent) && kk.height > 0
    }

    function Hk(kk) {
      if (kk.requestPointerLock) {
        const Fk = kk.requestPointerLock();
        Fk instanceof Promise ? Fk.then((() => {
          kk.focus()
        })).catch((() => {})) : kk.focus()
      }
    }
    var Jk = Ik(39947),
      xk = Ik(39878),
      Pk = Ik(39956),
      Kk = Ik(39962);
    class Qk extends ik.ThinEngine {
      static get NpmPackage() {
        return Zk.c.NpmPackage
      }
      static get Version() {
        return Zk.c.Version
      }
      static get Instances() {
        return Tk.e.Instances
      }
      static get LastCreatedEngine() {
        return Tk.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Tk.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(kk) {
        return Zk.c.DefaultLoadingScreenFactory(kk)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Qk._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Pk.b)(), (0, Kk.c)(), super(kk, Fk, Ik, Xk), this._performanceMonitor = new lk, this._drawCalls = new Jk.e, kk && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(kk) {
        super._sharedInit(kk),
          function(kk, Fk, Ik) {
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
            }, kk._onCanvasPointerOut = Ik => {
              document.elementFromPoint(Ik.clientX, Ik.clientY) !== Fk && kk.onCanvasPointerOutObservable.notifyObservers(Ik)
            };
            const Xk = kk.getHostWindow();
            Xk && "function" === typeof Xk.addEventListener && (Xk.addEventListener("blur", kk._onBlur), Xk.addEventListener("focus", kk._onFocus)), Fk.addEventListener("pointerout", kk._onCanvasPointerOut), Ik.doNotHandleTouchAction || function(kk) {
              kk && kk.setAttribute && (kk.setAttribute("touch-action", "none"), kk.style.touchAction = "none", kk.style.webkitTapHighlightColor = "transparent")
            }(Fk), !Zk.c.audioEngine && Ik.audioEngine && Zk.c.AudioEngineFactory && (Zk.c.audioEngine = Zk.c.AudioEngineFactory(kk.getRenderingCanvas(), kk.getAudioContext(), kk.getAudioDestination())), (0, jk.d)() && (kk._onFullscreenChange = () => {
              kk.isFullscreen = !!document.fullscreenElement, kk.isFullscreen && kk._pointerLockRequested && Fk && Hk(Fk)
            }, document.addEventListener("fullscreenchange", kk._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", kk._onFullscreenChange, !1), kk._onPointerLockChange = () => {
              kk.isPointerLock = document.pointerLockElement === Fk
            }, document.addEventListener("pointerlockchange", kk._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", kk._onPointerLockChange, !1)), kk.enableOfflineSupport = void 0 !== Zk.c.OfflineProviderFactory, kk._deterministicLockstep = !!Ik.deterministicLockstep, kk._lockstepMaxSteps = Ik.lockstepMaxSteps || 0, kk._timeStep = Ik.timeStep || 1 / 60
          }(this, kk, this._creationOptions)
      }
      resizeImageBitmap(kk, Fk, Ik) {
        return function(kk, Fk, Ik, Xk) {
          const Tk = kk.createCanvas(Ik, Xk).getContext("2d");
          if (!Tk) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Tk.drawImage(Fk, 0, 0), Tk.getImageData(0, 0, Ik, Xk).data
        }(this, kk, Fk, Ik)
      }
      async _createImageBitmapFromSource(kk, Fk) {
        return await async function(kk, Fk, Ik) {
          return await new Promise(((Xk, Tk) => {
            const ik = new Image;
            ik.onload = () => {
              ik.decode().then((() => {
                kk.createImageBitmap(ik, Ik).then((kk => {
                  Xk(kk)
                }))
              }))
            }, ik.onerror = () => {
              Tk(`Error loading image ${ik.src}`)
            }, ik.src = Fk
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
      setDirectViewport(kk, Fk, Ik, Xk) {
        const Tk = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(kk, Fk, Ik, Xk), Tk
      }
      scissorClear(kk, Fk, Ik, Xk, Tk) {
        this.enableScissor(kk, Fk, Ik, Xk), this.clear(Tk, !0, !0, !0), this.disableScissor()
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
        this._renderingCanvas && Hk(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Zx() {
        this._measureFps(), super.Zx()
      }
      _deletePipelineContext(kk) {
        const Fk = kk;
        Fk && Fk.program && Fk.transformFeedback && (this.deleteTransformFeedback(Fk.transformFeedback), Fk.transformFeedback = null), super._deletePipelineContext(kk)
      }
      createShaderProgram(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Tk = Tk || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const yk = super.createShaderProgram(kk, Fk, Ik, Xk, Tk, ik);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), yk
      }
      _createShaderProgram(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ik = Xk.createProgram();
        if (kk.program = ik, !ik) throw new Error("Unable to create program");
        if (Xk.attachShader(ik, Fk), Xk.attachShader(ik, Ik), this.tw > 1 && Tk) {
          const Fk = this.createTransformFeedback();
          this.bindTransformFeedback(Fk), this.setTranformFeedbackVaryings(ik, Tk), kk.transformFeedback = Fk
        }
        return Xk.linkProgram(ik), this.tw > 1 && Tk && this.bindTransformFeedback(null), kk.context = Xk, kk.vertexShader = Fk, kk.fragmentShader = Ik, kk.isParallelCompiled || this._finalizePipelineContext(kk), ik
      }
      _releaseTexture(kk) {
        super._releaseTexture(kk)
      }
      _releaseRenderTargetWrapper(kk) {
        super._releaseRenderTargetWrapper(kk);
        for (const Fk of this.scenes) {
          for (const Ik of Fk.postProcesses) Ik._outputTexture === kk && (Ik._outputTexture = null);
          for (const Ik of Fk.cameras)
            for (const Fk of Ik._postProcesses) Fk && Fk._outputTexture === kk && (Fk._outputTexture = null)
        }
      }
      _rescaleTexture(kk, Fk, Ik, Xk, Tk) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const ik = this.createRenderTargetTexture({
          width: Fk.width,
          height: Fk.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Qk._RescalePostProcessFactory && (this._rescalePostProcess = Qk._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const yk = () => {
              this._rescalePostProcess.onApply = function(Fk) {
                Fk._bindTexture("textureSampler", kk)
              };
              let yk = Ik;
              yk || (yk = this.scenes[this.scenes.length - 1]), yk.postProcessManager.directRender([this._rescalePostProcess], ik, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Fk, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Xk, 0, 0, Fk.width, Fk.height, 0), this.unBindFramebuffer(ik), ik.dispose(), Tk && Tk()
            },
            lk = this._rescalePostProcess.getEffect();
          lk ? lk.executeWhenCompiled(yk) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((kk => {
            kk.executeWhenCompiled(yk)
          }))
        }
      }
      wrapWebGLTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const yk = new tk.b(kk, this._gl),
          lk = new Xk.b(this, 15, !0);
        return lk._hardwareTexture = yk, lk.baseWidth = Tk, lk.baseHeight = ik, lk.width = Tk, lk.height = ik, lk.isReady = !0, lk.useMipMaps = Fk, this.updateTextureSamplingMode(Ik, lk), lk
      }
      updateWrappedWebGLTexture(kk, Fk) {
        if (15 !== kk.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Xk of this._renderTargetWrapperCache)
          if (Xk.textures?.includes(kk)) {
            if (Xk.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Xk._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } kk._hardwareTexture = new tk.b(Fk, this._gl), kk.isReady = !0, kk._cachedCoordinatesMode = null, kk._cachedWrapU = null, kk._cachedWrapV = null, kk._cachedWrapR = null, kk._cachedAnisotropicFilteringLevel = null;
        for (const Xk in this._boundTexturesCache) this._boundTexturesCache[Xk] === kk && (this._boundTexturesCache[Xk] = null);
        this.updateTextureSamplingMode(kk.samplingMode, kk);
        const Ik = this._gl;
        for (const Xk of this._renderTargetWrapperCache) {
          if (Xk.texture !== kk) continue;
          const Tk = Xk,
            ik = Xk.samples,
            yk = ik > 1;
          Tk._framebuffer && Ik.deleteFramebuffer(Tk._framebuffer), !yk && Tk._depthStencilBuffer && (Ik.deleteRenderbuffer(Tk._depthStencilBuffer), Tk._depthStencilBuffer = null);
          const lk = this._currentFramebuffer,
            ak = Ik.createFramebuffer();
          this._bindUnboundFramebuffer(ak), Ik.framebufferTexture2D(Ik.FRAMEBUFFER, Ik.COLOR_ATTACHMENT0, Ik.TEXTURE_2D, Fk, 0), yk || (Tk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Xk._generateStencilBuffer, Xk._generateDepthBuffer, Xk.width, Xk.height)), this._bindUnboundFramebuffer(lk), Tk._framebuffer = ak, yk && (Xk._samples = 1, this.updateRenderTargetTextureSampleCount(Tk, ik))
        }
      }
      _uploadImageToTexture(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Tk = this._gl,
          ik = this._getWebGLTextureType(kk.type),
          yk = this._getInternalFormat(kk.format),
          lk = this._getRGBABufferInternalSizedFormat(kk.type, yk),
          ak = kk.isCube ? Tk.TEXTURE_CUBE_MAP : Tk.TEXTURE_2D;
        this._bindTextureDirectly(ak, kk, !0), this._unpackFlipY(kk.invertY);
        let qk = Tk.TEXTURE_2D;
        kk.isCube && (qk = Tk.TEXTURE_CUBE_MAP_POSITIVE_X + Ik), Tk.texImage2D(qk, Xk, lk, yk, ik, Fk), this._bindTextureDirectly(ak, null, !0)
      }
      updateTextureComparisonFunction(kk, Fk) {
        if (1 === this.tw) return void Lk.e.Error("WebGL 1 does not support texture comparison.");
        const Ik = this._gl;
        kk.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, kk, !0), 0 === Fk ? (Ik.texParameteri(Ik.TEXTURE_CUBE_MAP, Ik.TEXTURE_COMPARE_FUNC, 515), Ik.texParameteri(Ik.TEXTURE_CUBE_MAP, Ik.TEXTURE_COMPARE_MODE, Ik.NONE)) : (Ik.texParameteri(Ik.TEXTURE_CUBE_MAP, Ik.TEXTURE_COMPARE_FUNC, Fk), Ik.texParameteri(Ik.TEXTURE_CUBE_MAP, Ik.TEXTURE_COMPARE_MODE, Ik.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), 0 === Fk ? (Ik.texParameteri(Ik.TEXTURE_2D, Ik.TEXTURE_COMPARE_FUNC, 515), Ik.texParameteri(Ik.TEXTURE_2D, Ik.TEXTURE_COMPARE_MODE, Ik.NONE)) : (Ik.texParameteri(Ik.TEXTURE_2D, Ik.TEXTURE_COMPARE_FUNC, Fk), Ik.texParameteri(Ik.TEXTURE_2D, Ik.TEXTURE_COMPARE_MODE, Ik.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), kk._comparisonFunction = Fk
      }
      createInstancesBuffer(kk) {
        const Fk = this._gl.createBuffer();
        if (!Fk) throw new Error("Unable to create instance buffer");
        const Ik = new qk.e(Fk);
        return Ik.St = kk, this.bindArrayBuffer(Ik), this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, this._gl.DYNAMIC_DRAW), Ik.references = 1, Ik
      }
      deleteInstancesBuffer(kk) {
        this._gl.deleteBuffer(kk)
      }
      async _clientWaitAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Xk = this._gl;
        return await new Promise(((Tk, ik) => {
          (0, xk.h)((() => {
            const Ik = Xk.clientWaitSync(kk, Fk, 0);
            if (Ik == Xk.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return Ik != Xk.TIMEOUT_EXPIRED
          }), Tk, ik, Ik)
        }))
      }
      _readPixelsAsync(kk, Fk, Ik, Xk, Tk, ik, yk) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const lk = this._gl,
          ak = lk.createBuffer();
        lk.bindBuffer(lk.PIXEL_PACK_BUFFER, ak), lk.bufferData(lk.PIXEL_PACK_BUFFER, yk.byteLength, lk.STREAM_READ), lk.readPixels(kk, Fk, Ik, Xk, Tk, ik, 0), lk.bindBuffer(lk.PIXEL_PACK_BUFFER, null);
        const qk = lk.fenceSync(lk.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return qk ? (lk.flush(), this._clientWaitAsync(qk, 0, 10).then((() => (lk.deleteSync(qk), lk.bindBuffer(lk.PIXEL_PACK_BUFFER, ak), lk.getBufferSubData(lk.PIXEL_PACK_BUFFER, 0, yk), lk.bindBuffer(lk.PIXEL_PACK_BUFFER, null), lk.deleteBuffer(ak), yk)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(kk, Fk) {
            1 === Tk.e.Instances.length && Zk.c.audioEngine && (Zk.c.audioEngine.dispose(), Zk.c.audioEngine = null);
            const Ik = kk.getHostWindow();
            Ik && "function" === typeof Ik.removeEventListener && (Ik.removeEventListener("blur", kk._onBlur), Ik.removeEventListener("focus", kk._onFocus)), Fk && (Fk.removeEventListener("focus", kk._onCanvasFocus), Fk.removeEventListener("blur", kk._onCanvasBlur), Fk.removeEventListener("pointerout", kk._onCanvasPointerOut), Fk.removeEventListener("contextmenu", kk._onCanvasContextMenu)), (0, jk.d)() && (document.removeEventListener("fullscreenchange", kk._onFullscreenChange), document.removeEventListener("mozfullscreenchange", kk._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", kk._onFullscreenChange), document.removeEventListener("msfullscreenchange", kk._onFullscreenChange), document.removeEventListener("pointerlockchange", kk._onPointerLockChange), document.removeEventListener("mspointerlockchange", kk._onPointerLockChange), document.removeEventListener("mozpointerlockchange", kk._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", kk._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Qk.ALPHA_DISABLE = 0, Qk.ALPHA_ADD = 1, Qk.ALPHA_COMBINE = 2, Qk.ALPHA_SUBTRACT = 3, Qk.ALPHA_MULTIPLY = 4, Qk.ALPHA_MAXIMIZED = 5, Qk.ALPHA_ONEONE = 6, Qk.ALPHA_PREMULTIPLIED = 7, Qk.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Qk.ALPHA_INTERPOLATE = 9, Qk.ALPHA_SCREENMODE = 10, Qk.DELAYLOADSTATE_NONE = 0, Qk.DELAYLOADSTATE_LOADED = 1, Qk.DELAYLOADSTATE_LOADING = 2, Qk.DELAYLOADSTATE_NOTLOADED = 4, Qk.NEVER = 512, Qk.ALWAYS = 519, Qk.LESS = 513, Qk.EQUAL = 514, Qk.LEQUAL = 515, Qk.GREATER = 516, Qk.GEQUAL = 518, Qk.NOTEQUAL = 517, Qk.KEEP = 7680, Qk.REPLACE = 7681, Qk.INCR = 7682, Qk.DECR = 7683, Qk.INVERT = 5386, Qk.INCR_WRAP = 34055, Qk.DECR_WRAP = 34056, Qk.TEXTURE_CLAMP_ADDRESSMODE = 0, Qk.TEXTURE_WRAP_ADDRESSMODE = 1, Qk.TEXTURE_MIRROR_ADDRESSMODE = 2, Qk.TEXTUREFORMAT_ALPHA = 0, Qk.TEXTUREFORMAT_LUMINANCE = 1, Qk.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Qk.TEXTUREFORMAT_RGB = 4, Qk.TEXTUREFORMAT_RGBA = 5, Qk.TEXTUREFORMAT_RED = 6, Qk.TEXTUREFORMAT_R = 6, Qk.TEXTUREFORMAT_R16_UNORM = 33322, Qk.TEXTUREFORMAT_RG16_UNORM = 33324, Qk.TEXTUREFORMAT_RGB16_UNORM = 32852, Qk.TEXTUREFORMAT_RGBA16_UNORM = 32859, Qk.TEXTUREFORMAT_R16_SNORM = 36760, Qk.TEXTUREFORMAT_RG16_SNORM = 36761, Qk.TEXTUREFORMAT_RGB16_SNORM = 36762, Qk.TEXTUREFORMAT_RGBA16_SNORM = 36763, Qk.TEXTUREFORMAT_RG = 7, Qk.TEXTUREFORMAT_RED_INTEGER = 8, Qk.TEXTUREFORMAT_R_INTEGER = 8, Qk.TEXTUREFORMAT_RG_INTEGER = 9, Qk.TEXTUREFORMAT_RGB_INTEGER = 10, Qk.TEXTUREFORMAT_RGBA_INTEGER = 11, Qk.TEXTURETYPE_UNSIGNED_BYTE = 0, Qk.TEXTURETYPE_UNSIGNED_INT = 0, Qk.TEXTURETYPE_FLOAT = 1, Qk.TEXTURETYPE_HALF_FLOAT = 2, Qk.TEXTURETYPE_BYTE = 3, Qk.TEXTURETYPE_SHORT = 4, Qk.TEXTURETYPE_UNSIGNED_SHORT = 5, Qk.TEXTURETYPE_INT = 6, Qk.TEXTURETYPE_UNSIGNED_INTEGER = 7, Qk.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Qk.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Qk.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Qk.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Qk.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Qk.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Qk.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Qk.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Qk.TEXTURE_NEAREST_SAMPLINGMODE = 1, Qk.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Qk.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Qk.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Qk.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Qk.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Qk.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Qk.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Qk.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Qk.TEXTURE_NEAREST_LINEAR = 7, Qk.TEXTURE_NEAREST_NEAREST = 1, Qk.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Qk.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Qk.TEXTURE_LINEAR_LINEAR = 2, Qk.TEXTURE_LINEAR_NEAREST = 12, Qk.TEXTURE_EXPLICIT_MODE = 0, Qk.TEXTURE_SPHERICAL_MODE = 1, Qk.TEXTURE_PLANAR_MODE = 2, Qk.TEXTURE_CUBIC_MODE = 3, Qk.TEXTURE_PROJECTION_MODE = 4, Qk.TEXTURE_SKYBOX_MODE = 5, Qk.TEXTURE_INVCUBIC_MODE = 6, Qk.TEXTURE_EQUIRECTANGULAR_MODE = 7, Qk.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Qk.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Qk.SCALEMODE_FLOOR = 1, Qk.SCALEMODE_NEAREST = 2, Qk.SCALEMODE_CEILING = 3
  },
  39983: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(39939);
    class Tk {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = kk, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, kk && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Xk.e)(kk.format))
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
          Ik = this._layerIndices?.[kk] ?? 0,
          Xk = this._faceIndices?.[kk] ?? 0;
        return Fk.isCube ? 6 * Ik + Xk : Fk.is3D ? 0 : Ik
      }
      get samples() {
        return this._samples
      }
      setSamples(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === kk && !Ik) return kk;
        const Xk = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, kk, Fk) : this._engine.updateRenderTargetTextureSampleCount(this, kk);
        return this._samples = kk, Xk
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(kk, Fk, Ik, Xk, Tk) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = kk, this._isCube = Fk, this._size = Ik, this._engine = Xk, this._depthStencilTexture = null, this.label = Tk
      }
      setTextures(kk) {
        Array.isArray(kk) ? this._textures = kk : this._textures = kk ? [kk] : null
      }
      setTexture(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Fk] !== kk && (this._textures[Fk] && Ik && this._textures[Fk].dispose(), this._textures[Fk] = kk)
      }
      setLayerAndFaceIndices(kk, Fk) {
        this._layerIndices = kk, this._faceIndices = Fk
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Fk && Fk >= 0 && (this._layerIndices[kk] = Fk), void 0 !== Ik && Ik >= 0 && (this._faceIndices[kk] = Ik)
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = Ik, this._depthStencilTextureLabel = ik, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Fk,
          comparisonFunction: kk,
          generateStencil: Ik,
          isCube: this._isCube,
          samples: Xk,
          depthTextureFormat: Tk,
          label: ik
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
            let Ik = !1,
              Xk = Fk.length,
              Tk = -1;
            const ik = Fk[Fk.length - 1]._source;
            14 !== ik && 12 !== ik || (Ik = !0, Tk = Fk[Fk.length - 1].format, Xk--);
            const yk = [],
              lk = [],
              ak = [],
              qk = [],
              Lk = [],
              tk = [],
              Zk = [],
              jk = {};
            for (let kk = 0; kk < Xk; ++kk) {
              const Ik = Fk[kk];
              yk.push(Ik.samplingMode), lk.push(Ik.type), ak.push(Ik.format);
              void 0 !== jk[Ik.uniqueId] ? (qk.push(-1), Zk.push(0)) : (jk[Ik.uniqueId] = kk, Ik.is2DArray ? (qk.push(35866), Zk.push(Ik.depth)) : Ik.isCube ? (qk.push(34067), Zk.push(0)) : Ik.is3D ? (qk.push(32879), Zk.push(Ik.depth)) : (qk.push(3553), Zk.push(0))), this._faceIndices && Lk.push(this._faceIndices[kk] ?? 0), this._layerIndices && tk.push(this._layerIndices[kk] ?? 0)
            }
            const ek = {
                samplingModes: yk,
                generateMipMaps: Fk[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: Ik,
                depthTextureFormat: Tk,
                types: lk,
                formats: ak,
                uyk: Xk,
                targetTypes: qk,
                faceIndex: Lk,
                layerIndex: tk,
                layerCounts: Zk,
                label: this.label
              },
              wk = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            kk = this._engine.createMultipleRenderTarget(wk, ek);
            for (let Hk = 0; Hk < Xk; ++Hk) {
              if (-1 !== qk[Hk]) continue;
              const Ik = jk[Fk[Hk].uniqueId];
              kk.setTexture(kk.textures[Ik], Hk)
            }
          }
        } else {
          const Fk = {};
          if (Fk.generateDepthBuffer = this._generateDepthBuffer, Fk.generateMipMaps = this.texture?.generateMipMaps ?? !1, Fk.generateStencilBuffer = this._generateStencilBuffer, Fk.samplingMode = this.texture?.samplingMode, Fk.type = this.texture?.type, Fk.format = this.texture?.format, Fk.noColorAttachment = !this._textures, Fk.label = this.label, this.isCube) kk = this._engine.createRenderTargetCubeTexture(this.width, Fk);
          else {
            const Ik = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            kk = this._engine.createRenderTargetTexture(Ik, Fk)
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
              Ik = this._depthStencilTexture.format,
              Xk = 2 === Fk || 3 === Fk || 11 === Fk;
            kk.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Xk, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, Ik, this._depthStencilTextureLabel)
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
  40435: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      static get ForceFullSceneLoadingForIncremental() {
        return Xk._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(kk) {
        Xk._ForceFullSceneLoadingForIncremental = kk
      }
      static get ShowLoadingScreen() {
        return Xk._ShowLoadingScreen
      }
      static set ShowLoadingScreen(kk) {
        Xk._ShowLoadingScreen = kk
      }
      static get loggingLevel() {
        return Xk._LoggingLevel
      }
      static set loggingLevel(kk) {
        Xk._LoggingLevel = kk
      }
      static get CleanBoneMatrixWeights() {
        return Xk._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(kk) {
        Xk._CleanBoneMatrixWeights = kk
      }
    }
    Xk._ForceFullSceneLoadingForIncremental = !1, Xk._ShowLoadingScreen = !0, Xk._CleanBoneMatrixWeights = !1, Xk._LoggingLevel = 0
  },
  40078: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk
    });
    var Xk = Ik(38674);
    const Tk = new Map;

    function ik(kk, Fk) {
      (function(kk) {
        return Tk.delete(kk)
      })(kk) && Xk.e.Warn(`Extension with the name '${kk}' already exists`), Tk.set(kk, Fk)
    }

    function yk(kk, Fk) {
      "image/ktx" !== Fk && "image/ktx2" !== Fk || (kk = ".ktx"), Tk.has(kk) || (kk.endsWith(".ies") && ik(".ies", (async () => await Ik.e(309).then((() => Ik(41770))).then((kk => new kk._IESTextureLoader)))), kk.endsWith(".dds") && ik(".dds", (async () => await Ik.e(307).then((() => Ik(41777))).then((kk => new kk._DDSTextureLoader)))), kk.endsWith(".basis") && ik(".basis", (async () => await Ik.e(310).then((() => Ik(41780))).then((kk => new kk._BasisTextureLoader)))), kk.endsWith(".env") && ik(".env", (async () => await Promise.all([Ik.e(311), Ik.e(308)]).then((() => Ik(41787))).then((kk => new kk._ENVTextureLoader)))), kk.endsWith(".hdr") && ik(".hdr", (async () => await Ik.e(312).then((() => Ik(41837))).then((kk => new kk._HDRTextureLoader)))), (kk.endsWith(".ktx") || kk.endsWith(".ktx2")) && (ik(".ktx", (async () => await Ik.e(313).then((() => Ik(41840))).then((kk => new kk._KTXTextureLoader)))), ik(".ktx2", (async () => await Ik.e(313).then((() => Ik(41840))).then((kk => new kk._KTXTextureLoader))))), kk.endsWith(".tga") && ik(".tga", (async () => await Ik.e(314).then((() => Ik(41850))).then((kk => new kk._TGATextureLoader)))), kk.endsWith(".exr") && ik(".exr", (async () => await Ik.e(315).then((() => Ik(41859))).then((kk => new kk._ExrTextureLoader)))));
      const Xk = Tk.get(kk);
      return Xk ? Promise.resolve(Xk(Fk)) : null
    }
  },
  40452: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      g: () => qk
    });
    var Xk = Ik(40295),
      Tk = Ik(40025),
      ik = Ik(37201);
    class yk extends Xk.c {
      get W8() {
        return this._subMaterials
      }
      set W8(kk) {
        this._subMaterials = kk, this._hookArray(kk)
      }
      getChildren() {
        return this.W8
      }
      constructor(kk, Fk) {
        super(kk, Fk, !0), this._waitingSubMaterialsUniqueIds = [], this.mG().addMultiMaterial(this), this.W8 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(kk) {
        var Fk = this;
        const Ik = kk.push;
        kk.push = function() {
          for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
          const yk = Ik.apply(kk, Tk);
          return Fk._markAllSubMeshesAsTexturesDirty(), yk
        };
        const Xk = kk.splice;
        kk.splice = (Fk, Ik) => {
          const Tk = Xk.call(kk, Fk, Ik ?? kk.length);
          return this._markAllSubMeshesAsTexturesDirty(), Tk
        }
      }
      getSubMaterial(kk) {
        return kk < 0 || kk >= this.W8.length ? this.mG().defaultMaterial : this.W8[kk]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.W8.map((kk => kk ? kk.getActiveTextures() : [])))
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (let Fk = 0; Fk < this.W8.length; Fk++)
          if (this.W8[Fk]?.hasTexture(kk)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(kk, Fk, Ik) {
        for (let Xk = 0; Xk < this.W8.length; Xk++) {
          const Tk = this.W8[Xk];
          if (Tk) {
            if (Tk._storeEffectOnSubMeshes) {
              if (!Tk.isReadyForSubMesh(kk, Fk, Ik)) return !1;
              continue
            }
            if (!Tk.isReady(kk)) return !1
          }
        }
        return !0
      }
      clone(kk, Fk) {
        const Ik = new yk(kk, this.mG());
        for (let Xk = 0; Xk < this.W8.length; Xk++) {
          let Tk;
          const ik = this.W8[Xk];
          Tk = Fk && ik ? ik.clone(kk + "-" + ik.name) : this.W8[Xk], Ik.W8.push(Tk)
        }
        return Ik
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, Tk.d && (kk.tags = Tk.d.GetTags(this)), kk.materialsUniqueIds = [], kk.materials = [];
        for (let Fk = 0; Fk < this.W8.length; Fk++) {
          const Ik = this.W8[Fk];
          Ik ? (kk.materialsUniqueIds.push(Ik.uniqueId), kk.materials.push(Ik.id)) : (kk.materialsUniqueIds.push(null), kk.materials.push(null))
        }
        return kk
      }
      dispose(kk, Fk, Ik) {
        const Xk = this.mG();
        if (!Xk) return;
        if (Ik)
          for (let ik = 0; ik < this.W8.length; ik++) {
            const Ik = this.W8[ik];
            Ik && Ik.dispose(kk, Fk)
          }
        const Tk = Xk.multiMaterials.indexOf(this);
        Tk >= 0 && Xk.multiMaterials.splice(Tk, 1), super.dispose(kk, Fk)
      }
    }
    let lk = !1;

    function ak(kk, Fk) {
      const Ik = new yk(kk.name, Fk);
      if (Ik.id = kk.id, Ik._loadedUniqueId = kk.uniqueId, Tk.d && Tk.d.AddTagsTo(Ik, kk.tags), kk.materialsUniqueIds) Ik._waitingSubMaterialsUniqueIds = kk.materialsUniqueIds;
      else
        for (const Xk of kk.materials) Ik.W8.push(Fk.getLastMaterialById(Xk));
      return Ik
    }

    function qk() {
      lk || (lk = !0, yk.ParseMultiMaterial = ak, (0, ik.f)("BABYLON.MultiMaterial", yk))
    }
  },
  40220: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    var Xk, Tk, ik = Ik(37153);
    ! function(kk) {
      kk[kk.LOCAL = 0] = "LOCAL", kk[kk.WORLD = 1] = "WORLD", kk[kk.BONE = 2] = "BONE"
    }(Xk || (Xk = {}));
    class yk {}
    yk.X = new ik.t(1, 0, 0), yk.Y = new ik.t(0, 1, 0), yk.Z = new ik.t(0, 0, 1),
      function(kk) {
        kk[kk.X = 0] = "X", kk[kk.Y = 1] = "Y", kk[kk.Z = 2] = "Z"
      }(Tk || (Tk = {}))
  },
  39989: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      h: () => qk
    });
    var Xk = Ik(37153);
    const Tk = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      ik = [() => 1, kk => kk.y, kk => kk.z, kk => kk.x, kk => kk.x * kk.y, kk => kk.y * kk.z, kk => 3 * kk.z * kk.z - 1, kk => kk.x * kk.z, kk => kk.x * kk.x - kk.y * kk.y],
      yk = (kk, Fk) => Tk[kk] * ik[kk](Fk),
      lk = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class ak {
      constructor() {
        this.preScaled = !1, this.l00 = Xk.t.Zero(), this.l1_1 = Xk.t.Zero(), this.l10 = Xk.t.Zero(), this.l11 = Xk.t.Zero(), this.l2_2 = Xk.t.Zero(), this.l2_1 = Xk.t.Zero(), this.l20 = Xk.t.Zero(), this.l21 = Xk.t.Zero(), this.l22 = Xk.t.Zero()
      }
      addLight(kk, Fk, Ik) {
        Xk.l.Ge[0].set(Fk.r, Fk.g, Fk.b);
        const Tk = Xk.l.Ge[0],
          ik = Xk.l.Ge[1];
        Tk.scaleToRef(Ik, ik), ik.scaleToRef(yk(0, kk), Xk.l.Ge[2]), this.l00.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(1, kk), Xk.l.Ge[2]), this.l1_1.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(2, kk), Xk.l.Ge[2]), this.l10.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(3, kk), Xk.l.Ge[2]), this.l11.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(4, kk), Xk.l.Ge[2]), this.l2_2.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(5, kk), Xk.l.Ge[2]), this.l2_1.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(6, kk), Xk.l.Ge[2]), this.l20.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(7, kk), Xk.l.Ge[2]), this.l21.addInPlace(Xk.l.Ge[2]), ik.scaleToRef(yk(8, kk), Xk.l.Ge[2]), this.l22.addInPlace(Xk.l.Ge[2])
      }
      scaleInPlace(kk) {
        this.l00.scaleInPlace(kk), this.l1_1.scaleInPlace(kk), this.l10.scaleInPlace(kk), this.l11.scaleInPlace(kk), this.l2_2.scaleInPlace(kk), this.l2_1.scaleInPlace(kk), this.l20.scaleInPlace(kk), this.l21.scaleInPlace(kk), this.l22.scaleInPlace(kk)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(lk[0]), this.l1_1.scaleInPlace(lk[1]), this.l10.scaleInPlace(lk[2]), this.l11.scaleInPlace(lk[3]), this.l2_2.scaleInPlace(lk[4]), this.l2_1.scaleInPlace(lk[5]), this.l20.scaleInPlace(lk[6]), this.l21.scaleInPlace(lk[7]), this.l22.scaleInPlace(lk[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Tk[0]), this.l1_1.scaleInPlace(Tk[1]), this.l10.scaleInPlace(Tk[2]), this.l11.scaleInPlace(Tk[3]), this.l2_2.scaleInPlace(Tk[4]), this.l2_1.scaleInPlace(Tk[5]), this.l20.scaleInPlace(Tk[6]), this.l21.scaleInPlace(Tk[7]), this.l22.scaleInPlace(Tk[8])
      }
      updateFromArray(kk) {
        return Xk.t.FromArrayToRef(kk[0], 0, this.l00), Xk.t.FromArrayToRef(kk[1], 0, this.l1_1), Xk.t.FromArrayToRef(kk[2], 0, this.l10), Xk.t.FromArrayToRef(kk[3], 0, this.l11), Xk.t.FromArrayToRef(kk[4], 0, this.l2_2), Xk.t.FromArrayToRef(kk[5], 0, this.l2_1), Xk.t.FromArrayToRef(kk[6], 0, this.l20), Xk.t.FromArrayToRef(kk[7], 0, this.l21), Xk.t.FromArrayToRef(kk[8], 0, this.l22), this
      }
      updateFromFloatsArray(kk) {
        return Xk.t.FromFloatsToRef(kk[0], kk[1], kk[2], this.l00), Xk.t.FromFloatsToRef(kk[3], kk[4], kk[5], this.l1_1), Xk.t.FromFloatsToRef(kk[6], kk[7], kk[8], this.l10), Xk.t.FromFloatsToRef(kk[9], kk[10], kk[11], this.l11), Xk.t.FromFloatsToRef(kk[12], kk[13], kk[14], this.l2_2), Xk.t.FromFloatsToRef(kk[15], kk[16], kk[17], this.l2_1), Xk.t.FromFloatsToRef(kk[18], kk[19], kk[20], this.l20), Xk.t.FromFloatsToRef(kk[21], kk[22], kk[23], this.l21), Xk.t.FromFloatsToRef(kk[24], kk[25], kk[26], this.l22), this
      }
      static FromArray(kk) {
        return (new ak).updateFromArray(kk)
      }
      static FromPolynomial(kk) {
        const Fk = new ak;
        return Fk.l00 = kk.xx.scale(.376127).add(kk.yy.scale(.376127)).add(kk.zz.scale(.376126)), Fk.l1_1 = kk.y.scale(.977204), Fk.l10 = kk.z.scale(.977204), Fk.l11 = kk.x.scale(.977204), Fk.l2_2 = kk.xy.scale(1.16538), Fk.l2_1 = kk.yz.scale(1.16538), Fk.l20 = kk.zz.scale(1.34567).subtract(kk.xx.scale(.672834)).subtract(kk.yy.scale(.672834)), Fk.l21 = kk.zx.scale(1.16538), Fk.l22 = kk.xx.scale(1.16538).subtract(kk.yy.scale(1.16538)), Fk.l1_1.scaleInPlace(-1), Fk.l11.scaleInPlace(-1), Fk.l2_1.scaleInPlace(-1), Fk.l21.scaleInPlace(-1), Fk.scaleInPlace(Math.PI), Fk
      }
    }
    class qk {
      constructor() {
        this.x = Xk.t.Zero(), this.y = Xk.t.Zero(), this.z = Xk.t.Zero(), this.xx = Xk.t.Zero(), this.yy = Xk.t.Zero(), this.zz = Xk.t.Zero(), this.xy = Xk.t.Zero(), this.yz = Xk.t.Zero(), this.zx = Xk.t.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = ak.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(kk) {
        Xk.l.Ge[0].t5(kk.r, kk.g, kk.b);
        const Fk = Xk.l.Ge[0];
        this.xx.addInPlace(Fk), this.yy.addInPlace(Fk), this.zz.addInPlace(Fk)
      }
      scaleInPlace(kk) {
        this.x.scaleInPlace(kk), this.y.scaleInPlace(kk), this.z.scaleInPlace(kk), this.xx.scaleInPlace(kk), this.yy.scaleInPlace(kk), this.zz.scaleInPlace(kk), this.yz.scaleInPlace(kk), this.zx.scaleInPlace(kk), this.xy.scaleInPlace(kk)
      }
      updateFromHarmonics(kk) {
        return this._harmonics = kk, this.x.kS(kk.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.kS(kk.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.kS(kk.l10), this.z.scaleInPlace(1.02333), this.xx.kS(kk.l00), Xk.l.Ge[0].kS(kk.l20).scaleInPlace(.247708), Xk.l.Ge[1].kS(kk.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).zXk(Xk.l.Ge[0]).addInPlace(Xk.l.Ge[1]), this.yy.kS(kk.l00), this.yy.scaleInPlace(.886277).zXk(Xk.l.Ge[0]).zXk(Xk.l.Ge[1]), this.zz.kS(kk.l00), Xk.l.Ge[0].kS(kk.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Xk.l.Ge[0]), this.yz.kS(kk.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.kS(kk.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.kS(kk.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(kk) {
        return (new qk).updateFromHarmonics(kk)
      }
      static FromArray(kk) {
        const Fk = new qk;
        return Xk.t.FromArrayToRef(kk[0], 0, Fk.x), Xk.t.FromArrayToRef(kk[1], 0, Fk.y), Xk.t.FromArrayToRef(kk[2], 0, Fk.z), Xk.t.FromArrayToRef(kk[3], 0, Fk.xx), Xk.t.FromArrayToRef(kk[4], 0, Fk.yy), Xk.t.FromArrayToRef(kk[5], 0, Fk.zz), Xk.t.FromArrayToRef(kk[6], 0, Fk.yz), Xk.t.FromArrayToRef(kk[7], 0, Fk.zx), Xk.t.FromArrayToRef(kk[8], 0, Fk.xy), Fk
      }
    }
  },
  40441: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => pk,
      e: () => bk
    });
    var Xk = Ik(40003),
      Tk = Ik(37187),
      ik = Ik(37153),
      yk = Ik(40141),
      lk = Ik(40427),
      ak = Ik(40449),
      qk = Ik(40139),
      Lk = Ik(40308),
      tk = Ik(40134);
    class Zk {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new ik.t(0, 0, 0), this._diffPositionForCollisions = new ik.t(0, 0, 0), this._collisionResponse = !0
      }
    }
    var jk, ek, wk, Hk = Ik(39863),
      Jk = Ik(40064),
      xk = Ik(40319),
      Pk = Ik(37331),
      Kk = Ik(37158),
      Qk = Ik(40220),
      sk = Ik(38674),
      Vk = Ik(40011),
      zk = Ik(39885),
      Sk = Ik(37201);

    function vk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function Ek(kk, Fk, Ik) {
      kk instanceof Float32Array ? ik.c.FromArrayToRef(kk, Fk, Ik) : Ik.t5((0, Jk.c)(kk[Fk]), (0, Jk.c)(kk[Fk + 1]), (0, Jk.c)(kk[Fk + 2]), (0, Jk.c)(kk[Fk + 3]), (0, Jk.c)(kk[Fk + 4]), (0, Jk.c)(kk[Fk + 5]), (0, Jk.c)(kk[Fk + 6]), (0, Jk.c)(kk[Fk + 7]), (0, Jk.c)(kk[Fk + 8]), (0, Jk.c)(kk[Fk + 9]), (0, Jk.c)(kk[Fk + 10]), (0, Jk.c)(kk[Fk + 11]), (0, Jk.c)(kk[Fk + 12]), (0, Jk.c)(kk[Fk + 13]), (0, Jk.c)(kk[Fk + 14]), (0, Jk.c)(kk[Fk + 15]))
    }

    function Ok(kk, Fk, Ik, Xk, Tk, lk, ak, qk, Lk) {
      const tk = Ik.texture,
        Zk = tk?.getInternalTexture(),
        jk = Zk?._bufferView;
      if (!(jk instanceof Float32Array) && !(jk instanceof Uint16Array)) return sk.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const ek = tk.getSize(),
        wk = function(kk, Fk) {
          const Ik = kk.y - kk.x + 1,
            Xk = Fk * kk.w / Ik,
            Tk = Xk < 1 ? 0 : 1,
            ik = Ik - Tk;
          let yk = vk(Xk - Math.floor(Xk), 1) * ik;
          return yk = vk(yk + kk.z, ik), Math.floor(yk) + kk.x + Tk
        }(Xk, Ik.time);
      if (!isFinite(wk) || wk < 0 || wk >= ek.height) return sk.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Hk = ik.l.Ge[0],
        Jk = ik.l.Matrix[0],
        xk = ik.l.Matrix[1],
        Pk = wk * ek.width * 4,
        Kk = Fk === yk.l.NormalKind ? ik.t.TransformNormalFromFloatsToRef : ik.t.TransformCoordinatesFromFloatsToRef;
      for (let ik = 0, yk = 0; ik < kk.length; ik += 3, yk += 4) {
        let Fk, Ik;
        for (Jk.reset(), Fk = 0; Fk < 4 && Fk < Lk; Fk++) Ik = lk[yk + Fk], Ik > 0 && (Ek(jk, Pk + 16 * Math.floor(Tk[yk + Fk]), xk), xk.scaleAndAddToRef(Ik, Jk));
        if (ak && qk)
          for (Fk = 0; Fk < 4 && Fk + 4 < Lk; Fk++) Ik = qk[yk + Fk], Ik > 0 && (Ek(jk, Pk + 16 * Math.floor(ak[yk + Fk]), xk), xk.scaleAndAddToRef(Ik, Jk));
        Kk(kk[ik], kk[ik + 1], kk[ik + 2], Jk, Hk), Hk.toArray(kk, ik)
      }
      return !0
    }
    class nk {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = ik.t.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Gk {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new nk, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Zk, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let pk = (() => {
        var kk;
        let Fk, Zk = ak.h,
          jk = [];
        return kk = class extends Zk {
          static get BILLBOARDMODE_NONE() {
            return ak.h.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return ak.h.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return ak.h.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return ak.h.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return ak.h.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return ak.h.BILLBOARDMODE_USE_POSITION
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
          set eZ(kk) {
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
            this._internalAbstractMeshDataInfo._material !== kk && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = kk, kk && kk.meshMap && (kk.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.lK && (this.resetDrawCache(void 0, null == kk), this._unBindEffect()))
          }
          getMaterialForRenderPass(kk) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[kk]
          }
          setMaterialForRenderPass(kk, Fk) {
            this.resetDrawCache(kk), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const Ik = this._internalAbstractMeshDataInfo._materialForRenderPass[kk];
            Ik?.meshMap?.[this.uniqueId] && (Ik.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[kk] = Fk, Fk && Fk.meshMap && (Fk.meshMap[this.uniqueId] = this)
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
            var Ik;
            let Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Fk, Xk, !1), Ik = this, this._internalAbstractMeshDataInfo = new Gk, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Tk.e, this.onCollisionPositionChangeObservable = new Tk.e, this.onMaterialChangedObservable = new Tk.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.gw = kk.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Pk.e.Red(), this.outlineWidth = .02, this.overlayColor = Pk.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.ne = !1, this.ue = !1, this.actionManager = null, this.ellipsoid = new ik.t(.5, 1, .5), this.ellipsoidOffset = new ik.t(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Pk.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Xp: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Tk.e, this._onCollisionPositionChange = function(kk, Fk) {
                let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Fk.subtractToRef(Ik._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, Ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > zk.c.CollisionsEpsilon && Ik.position.addInPlace(Ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Xk && Ik.onCollideObservable.notifyObservers(Xk), Ik.onCollisionPositionChangeObservable.notifyObservers(Ik.position)
              }, Xk = this.mG(), this.layerMask = Xk.defaultRenderableLayerMask, Xk.lXk(this), this._resyncLightSources(), this._uniformBuffer = new tk.c(this.mG().Oe(), void 0, void 0, Fk, !this.mG().Oe().isWebGPU), this._buildUniformLayout(), Xk.performancePriority) {
              case 2:
                this.ue = !0;
              case 1:
                this.ne = !0, this.gw = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(kk) {
            const Fk = this._uniformBuffer;
            Fk.I9("world", kk), Fk.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Fk.update()
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
            Fk += ", # of submeshes: " + (this.lK ? this.lK.length : 0);
            const Ik = this._internalAbstractMeshDataInfo._skeleton;
            return Ik && (Fk += ", skeleton: " + Ik.name), kk && (Fk += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Fk += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Xp ? "YES" : "NO")), Fk
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== ak.h.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
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
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.lK) {
              for (const kk of this.lK) kk._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const kk of this.mG().lights) kk.isEnabled() && kk.canAffectMesh(this) && this._lightSources.push(kk);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(kk) {
            const Fk = kk.isEnabled() && kk.canAffectMesh(this),
              Ik = this._lightSources.indexOf(kk);
            let Xk = !1;
            if (-1 === Ik) {
              if (!Fk) return;
              this._lightSources.push(kk)
            } else {
              if (Fk) return;
              Xk = !0, this._lightSources.splice(Ik, 1)
            }
            this._markSubMeshesAsLightDirty(Xk)
          }
          _unBindEffect() {
            for (const kk of this.lK) kk.setEffect(null)
          }
          _removeLightSource(kk, Fk) {
            const Ik = this._lightSources.indexOf(kk); - 1 !== Ik && (this._lightSources.splice(Ik, 1), this._markSubMeshesAsLightDirty(Fk))
          }
          _markSubMeshesAsDirty(kk) {
            if (this.lK)
              for (const Fk of this.lK)
                for (let Ik = 0; Ik < Fk._drawWrappers.length; ++Ik) {
                  const Xk = Fk._drawWrappers[Ik];
                  Xk && Xk.defines && Xk.defines.markAllAsDirty && kk(Xk.defines)
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
          UFk(kk) {
            return this._currentRenderId = Number.MAX_VALUE, super.UFk(kk), this._isDirty = !0, this
          }
          resetDrawCache(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.lK)
              for (const Ik of this.lK) Ik.resetDrawCache(kk, Fk)
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
          yXk() {
            return null
          }
          getVerticesData(kk) {
            return null
          }
          setVerticesData(kk, Fk, Ik, Xk) {
            return this
          }
          updateVerticesData(kk, Fk, Ik, Xk) {
            return this
          }
          setIndices(kk, Fk) {
            return this
          }
          isVerticesDataPresent(kk) {
            return !1
          }
          vR() {
            return this._masterMesh ? this._masterMesh.vR() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.vR()
          }
          setBoundingInfo(kk) {
            return this._boundingInfo = kk, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(kk, Fk, Ik) {
            return this._boundingInfo = new Lk.d(kk, Fk, Ik), this._boundingInfo
          }
          normalizeToUnitCube() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(kk, Fk, Ik)
          }
          get useBones() {
            return this.skeleton && this.mG().skeletonsEnabled && this.isVerticesDataPresent(yk.l.MatricesIndicesKind) && this.isVerticesDataPresent(yk.l.MatricesWeightsKind)
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
            return this._masterMesh && this.billboardMode === ak.h.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get rG() {
            return !1
          }
          get rXk() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(kk, Fk, Ik) {
            return this.position.addInPlace(this.calcMovePOV(kk, Fk, Ik)), this
          }
          calcMovePOV(kk, Fk, Ik) {
            const Xk = new ik.c;
            (this.rotationQuaternion ? this.rotationQuaternion : ik.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Xk);
            const Tk = ik.t.Zero(),
              yk = this.definedFacingForward ? -1 : 1;
            return ik.t.TransformCoordinatesFromFloatsToRef(kk * yk, Fk, Ik * yk, Xk, Tk), Tk
          }
          rotatePOV(kk, Fk, Ik) {
            return this.rotation.addInPlace(this.calcRotatePOV(kk, Fk, Ik)), this
          }
          calcRotatePOV(kk, Fk, Ik) {
            const Xk = this.definedFacingForward ? 1 : -1;
            return new ik.t(kk * Xk, Fk, Ik * Xk)
          }
          _refreshBoundingInfo(kk, Fk) {
            if (kk) {
              const Ik = (0, xk.g)(kk, 0, this.getTotalVertices(), Fk);
              this._boundingInfo ? this._boundingInfo.reConstruct(Ik.minimum, Ik.maximum) : this._boundingInfo = new Lk.d(Ik.minimum, Ik.maximum)
            }
            if (this.lK)
              for (let Ik = 0; Ik < this.lK.length; Ik++) this.lK[Ik].refreshBoundingInfo(kk);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(kk) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(kk.minimum, kk.maximum) : this._boundingInfo = new Lk.d(kk.minimum, kk.maximum), this.lK)
              for (let Fk = 0; Fk < this.lK.length; Fk++) this.lK[Fk].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(kk, Fk, Ik, Xk, Tk, lk, ak) {
            ! function(kk, Fk, Ik, Xk, Tk, lk, ak) {
              const qk = ik.l.Ge[0],
                Lk = ik.l.Matrix[0],
                tk = ik.l.Matrix[1],
                Zk = Fk === yk.l.NormalKind ? ik.t.TransformNormalFromFloatsToRef : ik.t.TransformCoordinatesFromFloatsToRef;
              for (let yk = 0, jk = 0; yk < kk.length; yk += 3, jk += 4) {
                let Fk, ek;
                for (Lk.reset(), Fk = 0; Fk < 4; Fk++) ek = Tk[jk + Fk], ek > 0 && (ik.c.FromFloat32ArrayToRefScaled(Ik, Math.floor(16 * Xk[jk + Fk]), ek, tk), Lk.addToSelf(tk));
                if (lk && ak)
                  for (Fk = 0; Fk < 4; Fk++) ek = ak[jk + Fk], ek > 0 && (ik.c.FromFloat32ArrayToRefScaled(Ik, Math.floor(16 * lk[jk + Fk]), ek, tk), Lk.addToSelf(tk));
                Zk(kk[yk], kk[yk + 1], kk[yk + 2], Lk, qk), qk.toArray(kk, yk)
              }
            }(kk, Fk, Ik, Xk, Tk, lk, ak)
          }
          _getData(Fk, Ik) {
            let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yk.l.PositionKind;
            const Tk = Fk.cache,
              lk = kk => {
                if (Tk) {
                  const Fk = Tk._vertexData || (Tk._vertexData = {});
                  return Fk[kk] || this.copyVerticesData(kk, Fk), Fk[kk]
                }
                return this.getVerticesData(kk)
              };
            if (Ik || (Ik = lk(Xk)), !Ik) return null;
            Tk ? (Tk._outputData ? Tk._outputData.set(Ik) : Tk._outputData = new Float32Array(Ik), Ik = Tk._outputData) : (Fk.applyMorph && this.morphTargetManager || Fk.applySkeleton && this.skeleton || Fk.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (Ik = Ik.slice()), Fk.applyMorph && this.morphTargetManager && function(kk, Fk, Ik) {
              let Xk;
              switch (Fk) {
                case yk.l.PositionKind:
                  Xk = kk => kk.getPositions();
                  break;
                case yk.l.NormalKind:
                  Xk = kk => kk.getNormals();
                  break;
                case yk.l.TangentKind:
                  Xk = kk => kk.getTangents();
                  break;
                case yk.l.UVKind:
                  Xk = kk => kk.getUVs();
                  break;
                case yk.l.UV2Kind:
                  Xk = kk => kk.getUV2s();
                  break;
                case yk.l.ColorKind:
                  Xk = kk => kk.getColors();
                  break;
                default:
                  return
              }
              for (let Tk = 0; Tk < kk.length; Tk++) {
                let Fk = kk[Tk];
                for (let ik = 0; ik < Ik.numTargets; ik++) {
                  const yk = Ik.getTarget(ik),
                    lk = yk.influence;
                  if (0 !== lk) {
                    const Ik = Xk(yk);
                    Ik && (Fk += (Ik[Tk] - kk[Tk]) * lk)
                  }
                }
                kk[Tk] = Fk
              }
            }(Ik, Xk, this.morphTargetManager);
            const ak = this.bakedVertexAnimationManager;
            let qk = !1;
            if (Fk.applyBakedVertexAnimation && ak?.isEnabled) {
              const kk = lk(yk.l.MatricesIndicesKind),
                Tk = lk(yk.l.MatricesWeightsKind);
              if (Tk && kk) {
                const ik = this.numBoneInfluencers > 4,
                  Lk = ik ? lk(yk.l.MatricesIndicesExtraKind) : null,
                  tk = ik ? lk(yk.l.MatricesWeightsExtraKind) : null;
                qk = Ok(Ik, Xk, ak, Fk.bakedVertexAnimationSettings ?? ak.animationParameters, kk, Tk, Lk, tk, this.numBoneInfluencers)
              }
            }
            if (!qk && Fk.applySkeleton && this.skeleton) {
              const Fk = lk(yk.l.MatricesIndicesKind),
                Tk = lk(yk.l.MatricesWeightsKind);
              if (Tk && Fk) {
                const ik = this.numBoneInfluencers > 4,
                  ak = ik ? lk(yk.l.MatricesIndicesExtraKind) : null,
                  qk = ik ? lk(yk.l.MatricesWeightsExtraKind) : null,
                  Lk = this.skeleton.getTransformMatrices(this);
                kk._ApplySkeleton(Ik, Xk, Lk, Fk, Tk, ak, qk)
              }
            }
            if (!1 !== Fk.updatePositionsArray && Xk === yk.l.PositionKind) {
              const kk = this._internalAbstractMeshDataInfo._positions || [],
                Fk = kk.length;
              if (kk.length = Ik.length / 3, Fk < kk.length)
                for (let Ik = Fk; Ik < kk.length; Ik++) kk[Ik] = new ik.t;
              for (let Xk = 0, Tk = 0; Xk < kk.length; Xk++, Tk += 3) kk[Xk].t5(Ik[Tk], Ik[Tk + 1], Ik[Tk + 2]);
              this._internalAbstractMeshDataInfo._positions = kk
            }
            return Ik
          }
          getNormalsData() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: kk,
              applyMorph: Fk,
              updatePositionsArray: !1
            }, null, yk.l.NormalKind)
          }
          ZY() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: kk,
              applyMorph: Fk,
              updatePositionsArray: !1
            }, Ik, yk.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Lk.d(ik.t.Zero(), ik.t.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(kk) {
            if (!this.lK) return this;
            const Fk = this.lK.length;
            for (let Ik = 0; Ik < Fk; Ik++) {
              const Xk = this.lK[Ik];
              (Fk > 1 || !Xk.IsGlobal) && Xk.updateBoundingInfo(kk)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.ue || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(kk) {
            return this.vR().isInFrustum(kk, this.cullingStrategy)
          }
          isCompletelyInFrustum(kk) {
            return this.vR().isCompletelyInFrustum(kk)
          }
          dXk(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = arguments.length > 2 ? arguments[2] : void 0;
            const Xk = this.vR(),
              Tk = kk.vR();
            if (Xk.intersects(Tk, Fk)) return !0;
            if (Ik)
              for (const ik of this.getChildMeshes())
                if (ik.dXk(kk, Fk, !0)) return !0;
            return !1
          }
          intersectsPoint(kk) {
            return this.vR().intersectsPoint(kk)
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
            const Ik = this.mG().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = Ik.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, Ik.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, kk, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Fk), this
          }
          _collideForSubMesh(kk, Fk, Ik) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!kk._lastColliderWorldVertices || !kk._lastColliderTransformMatrix.equals(Fk)) {
              kk._lastColliderTransformMatrix = Fk.clone(), kk._lastColliderWorldVertices = [], kk._trianglePlanes = [];
              const Ik = kk.verticesStart,
                Xk = kk.verticesStart + kk.verticesCount;
              for (let Tk = Ik; Tk < Xk; Tk++) kk._lastColliderWorldVertices.push(ik.t.TransformCoordinates(this._positions[Tk], Fk))
            }
            return Ik._collide(kk._trianglePlanes, kk._lastColliderWorldVertices, this.yXk(), kk.indexStart, kk.indexStart + kk.indexCount, kk.verticesStart, !!kk.Ue(), this, this._shouldConvertRHS(), 7 === kk.Ue()?.fillMode), this
          }
          _processCollisionsForSubMeshes(kk, Fk) {
            const Ik = this._scene.getCollidingSubMeshCandidates(this, kk),
              Xk = Ik.length;
            for (let Tk = 0; Tk < Xk; Tk++) {
              const ik = Ik.data[Tk];
              Xk > 1 && !ik._checkCollision(kk) || this._collideForSubMesh(ik, Fk, kk)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(kk) {
            if (!this.vR()._checkCollision(kk)) return this;
            const Fk = ik.l.Matrix[0],
              Ik = ik.l.Matrix[1];
            return ik.c.ScalingToRef(1 / kk._radius.x, 1 / kk._radius.y, 1 / kk._radius.z, Fk), this.worldMatrixFromCache.multiplyToRef(Fk, Ik), this._processCollisionsForSubMeshes(kk, Ik), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(kk, Fk, Ik) {
            let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Tk = arguments.length > 4 ? arguments[4] : void 0,
              yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const lk = new qk.b,
              ak = this.getClassName(),
              Lk = "InstancedLinesMesh" === ak || "LinesMesh" === ak || "GreasedLineMesh" === ak ? this.intersectionThreshold : 0,
              tk = this.vR();
            if (!this.lK) return lk;
            if (!yk && (!kk.intersectsSphere(tk.EXk, Lk) || !kk.intersectsBox(tk.boundingBox, Lk))) return lk;
            if (Xk) return lk.hit = !yk, lk.pickedMesh = yk ? null : this, lk.distance = yk ? 0 : ik.t.Distance(kk.origin, tk.EXk.center), lk.subMeshId = 0, lk;
            if (!this._generatePointsArray()) return lk;
            let Zk = null;
            const jk = this._scene.getIntersectingSubMeshCandidates(this, kk),
              ek = jk.length;
            let wk = !1;
            for (let ik = 0; ik < ek; ik++) {
              const kk = jk.data[ik].Ue();
              if (kk && (7 == kk.fillMode || 0 == kk.fillMode || 1 == kk.fillMode || 2 == kk.fillMode || 4 == kk.fillMode)) {
                wk = !0;
                break
              }
            }
            if (!wk) return lk.hit = !0, lk.pickedMesh = this, lk.distance = ik.t.Distance(kk.origin, tk.EXk.center), lk.subMeshId = -1, lk;
            for (let ik = 0; ik < ek; ik++) {
              const Xk = jk.data[ik];
              if (ek > 1 && !yk && !Xk.canIntersects(kk)) continue;
              const Tk = Xk.intersects(kk, this._positions, this.yXk(), Fk, Ik);
              if (Tk && (Fk || !Zk || Tk.distance < Zk.distance) && (Zk = Tk, Zk.subMeshId = Xk._id, Zk._internalSubMeshId = ik, Fk)) break
            }
            if (Zk) {
              const Fk = Tk ?? this.getWorldMatrix(),
                Ik = ik.l.Ge[0],
                Xk = ik.l.Ge[1];
              ik.t.TransformCoordinatesToRef(kk.origin, Fk, Ik), kk.direction.scaleToRef(Zk.distance, Xk);
              const yk = ik.t.TransformNormal(Xk, Fk).addInPlace(Ik);
              return lk.hit = !0, lk.distance = ik.t.Distance(Ik, yk), lk.pickedPoint = yk, lk.pickedMesh = this, lk.bu = Zk.bu || 0, lk.bv = Zk.bv || 0, lk.subMeshFaceId = Zk.faceId, lk.faceId = Zk.faceId + jk.data[Zk._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), lk.subMeshId = Zk.subMeshId, lk
            }
            return lk
          }
          clone(kk, Fk, Ik) {
            return null
          }
          releaseSubMeshes() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.lK)
              for (; this.lK.length;) this.lK[0].dispose(kk);
            else this.lK = [];
            return this
          }
          dispose(kk) {
            let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Xk = this.mG();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Xk.freeActiveMeshes(), Xk.freeRenderingGroups(), Xk.renderingManager.maintainStateBetweenFrames && Xk.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((kk => kk !== this && kk.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Fk = 0; Fk < this._intersectionsInProgress.length; Fk++) {
              const kk = this._intersectionsInProgress[Fk],
                Ik = kk._intersectionsInProgress.indexOf(this);
              kk._intersectionsInProgress.splice(Ik, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Tk = Xk.lights;
            for (const yk of Tk) {
              let kk = yk.includedOnlyMeshes.indexOf(this); - 1 !== kk && yk.includedOnlyMeshes.splice(kk, 1), kk = yk.excludedMeshes.indexOf(this), -1 !== kk && yk.excludedMeshes.splice(kk, 1);
              const Fk = yk.getShadowGenerators();
              if (Fk) {
                const Ik = Fk.values();
                for (let Fk = Ik.next(); !0 !== Fk.done; Fk = Ik.next()) {
                  const Ik = Fk.value.getShadowMap();
                  Ik && Ik.renderList && (kk = Ik.renderList.indexOf(this), -1 !== kk && Ik.renderList.splice(kk, 1))
                }
              }
            }
            this.releaseSubMeshes(Xk._isDisposing);
            const ik = Xk.Oe();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, ik.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), ik.wipeCaches(), Xk.zp(this), this._parentContainer) {
              const kk = this._parentContainer.meshes.indexOf(this);
              kk > -1 && this._parentContainer.meshes.splice(kk, 1), this._parentContainer = null
            }
            if (Ik && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !kk)
              for (Fk = 0; Fk < Xk.jK.length; Fk++) Xk.jK[Fk].emitter === this && (Xk.jK[Fk].dispose(), Fk--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(kk, Ik)
          }
          _initFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetNormals || (kk.facetNormals = []), kk.facetPositions || (kk.facetPositions = []), kk.facetPartitioning || (kk.facetPartitioning = new Array), kk.facetNb = this.yXk().length / 3 | 0, kk.partitioningSubdivisions = kk.partitioningSubdivisions ? kk.partitioningSubdivisions : 10, kk.partitioningBBoxRatio = kk.partitioningBBoxRatio ? kk.partitioningBBoxRatio : 1.01;
            for (let Fk = 0; Fk < kk.facetNb; Fk++) kk.facetNormals[Fk] = ik.t.Zero(), kk.facetPositions[Fk] = ik.t.Zero();
            return kk.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetDataEnabled || this._initFacetData();
            const Fk = this.getVerticesData(yk.l.PositionKind),
              Ik = this.yXk(),
              Xk = this.getVerticesData(yk.l.NormalKind)?.slice(),
              Tk = this.vR();
            if (kk.facetDepthSort && !kk.facetDepthSortEnabled) {
              if (kk.facetDepthSortEnabled = !0, Ik instanceof Uint16Array) kk.depthSortedIndices = new Uint16Array(Ik);
              else if (Ik instanceof Uint32Array) kk.depthSortedIndices = new Uint32Array(Ik);
              else {
                let Fk = !1;
                for (let kk = 0; kk < Ik.length; kk++)
                  if (Ik[kk] > 65535) {
                    Fk = !0;
                    break
                  } kk.depthSortedIndices = Fk ? new Uint32Array(Ik) : new Uint16Array(Ik)
              }
              if (kk.facetDepthSortFunction = function(kk, Fk) {
                  return Fk.sqDistance - kk.sqDistance
                }, !kk.facetDepthSortFrom) {
                const Fk = this.mG().activeCamera;
                kk.facetDepthSortFrom = Fk ? Fk.position : ik.t.Zero()
              }
              kk.depthSortedFacets = [];
              for (let Fk = 0; Fk < kk.facetNb; Fk++) {
                const Ik = {
                  ind: 3 * Fk,
                  sqDistance: 0
                };
                kk.depthSortedFacets.push(Ik)
              }
              kk.invertedMatrix = ik.c.Identity(), kk.facetDepthSortOrigin = ik.t.Zero()
            }
            kk.bbSize.x = Tk.maximum.x - Tk.minimum.x > Kk.b ? Tk.maximum.x - Tk.minimum.x : Kk.b, kk.bbSize.y = Tk.maximum.y - Tk.minimum.y > Kk.b ? Tk.maximum.y - Tk.minimum.y : Kk.b, kk.bbSize.z = Tk.maximum.z - Tk.minimum.z > Kk.b ? Tk.maximum.z - Tk.minimum.z : Kk.b;
            let ak = kk.bbSize.x > kk.bbSize.y ? kk.bbSize.x : kk.bbSize.y;
            if (ak = ak > kk.bbSize.z ? ak : kk.bbSize.z, kk.subDiv.max = kk.partitioningSubdivisions, kk.subDiv.X = Math.floor(kk.subDiv.max * kk.bbSize.x / ak), kk.subDiv.Y = Math.floor(kk.subDiv.max * kk.bbSize.y / ak), kk.subDiv.Z = Math.floor(kk.subDiv.max * kk.bbSize.z / ak), kk.subDiv.X = kk.subDiv.X < 1 ? 1 : kk.subDiv.X, kk.subDiv.Y = kk.subDiv.Y < 1 ? 1 : kk.subDiv.Y, kk.subDiv.Z = kk.subDiv.Z < 1 ? 1 : kk.subDiv.Z, kk.facetParameters.facetNormals = this.getFacetLocalNormals(), kk.facetParameters.facetPositions = this.getFacetLocalPositions(), kk.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), kk.facetParameters.bInfo = Tk, kk.facetParameters.bbSize = kk.bbSize, kk.facetParameters.subDiv = kk.subDiv, kk.facetParameters.ratio = this.partitioningBBoxRatio, kk.facetParameters.depthSort = kk.facetDepthSort, kk.facetDepthSort && kk.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(kk.invertedMatrix), ik.t.TransformCoordinatesToRef(kk.facetDepthSortFrom, kk.invertedMatrix, kk.facetDepthSortOrigin), kk.facetParameters.distanceTo = kk.facetDepthSortOrigin), kk.facetParameters.depthSortedFacets = kk.depthSortedFacets, Xk && lk.c.ComputeNormals(Fk, Ik, Xk, kk.facetParameters), kk.facetDepthSort && kk.facetDepthSortEnabled) {
              kk.depthSortedFacets.sort(kk.facetDepthSortFunction);
              const Fk = kk.depthSortedIndices.length / 3 | 0;
              for (let Xk = 0; Xk < Fk; Xk++) {
                const Fk = kk.depthSortedFacets[Xk].ind;
                kk.depthSortedIndices[3 * Xk] = Ik[Fk], kk.depthSortedIndices[3 * Xk + 1] = Ik[Fk + 1], kk.depthSortedIndices[3 * Xk + 2] = Ik[Fk + 2]
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
            const Fk = ik.t.Zero();
            return this.getFacetPositionToRef(kk, Fk), Fk
          }
          getFacetPositionToRef(kk, Fk) {
            const Ik = this.getFacetLocalPositions()[kk],
              Xk = this.getWorldMatrix();
            return ik.t.TransformCoordinatesToRef(Ik, Xk, Fk), this
          }
          getFacetNormal(kk) {
            const Fk = ik.t.Zero();
            return this.getFacetNormalToRef(kk, Fk), Fk
          }
          getFacetNormalToRef(kk, Fk) {
            const Ik = this.getFacetLocalNormals()[kk];
            return ik.t.TransformNormalToRef(Ik, this.getWorldMatrix(), Fk), this
          }
          getFacetsAtLocalCoordinates(kk, Fk, Ik) {
            const Xk = this.vR(),
              Tk = this._internalAbstractMeshDataInfo._facetData,
              ik = Math.floor((kk - Xk.minimum.x * Tk.partitioningBBoxRatio) * Tk.subDiv.X * Tk.partitioningBBoxRatio / Tk.bbSize.x),
              yk = Math.floor((Fk - Xk.minimum.y * Tk.partitioningBBoxRatio) * Tk.subDiv.Y * Tk.partitioningBBoxRatio / Tk.bbSize.y),
              lk = Math.floor((Ik - Xk.minimum.z * Tk.partitioningBBoxRatio) * Tk.subDiv.Z * Tk.partitioningBBoxRatio / Tk.bbSize.z);
            return ik < 0 || ik > Tk.subDiv.max || yk < 0 || yk > Tk.subDiv.max || lk < 0 || lk > Tk.subDiv.max ? null : Tk.facetPartitioning[ik + Tk.subDiv.max * yk + Tk.subDiv.max * Tk.subDiv.max * lk]
          }
          getClosestFacetAtCoordinates(kk, Fk, Ik, Xk) {
            let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const lk = this.getWorldMatrix(),
              ak = ik.l.Matrix[5];
            lk.invertToRef(ak);
            const qk = ik.l.Ge[8];
            ik.t.TransformCoordinatesFromFloatsToRef(kk, Fk, Ik, ak, qk);
            const Lk = this.getClosestFacetAtLocalCoordinates(qk.x, qk.y, qk.z, Xk, Tk, yk);
            return Xk && ik.t.TransformCoordinatesFromFloatsToRef(Xk.x, Xk.y, Xk.z, lk, Xk), Lk
          }
          getClosestFacetAtLocalCoordinates(kk, Fk, Ik, Xk) {
            let Tk, ik, yk, lk, ak, qk, Lk, tk, Zk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              jk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              ek = null;
            const wk = this.getFacetLocalPositions(),
              Hk = this.getFacetLocalNormals(),
              Jk = this.getFacetsAtLocalCoordinates(kk, Fk, Ik);
            if (!Jk) return null;
            let xk, Pk, Kk, Qk, sk = Number.MAX_VALUE;
            for (let Vk = 0; Vk < Jk.length; Vk++) Pk = Jk[Vk], Kk = Hk[Pk], Qk = wk[Pk], lk = (kk - Qk.x) * Kk.x + (Fk - Qk.y) * Kk.y + (Ik - Qk.z) * Kk.z, (!Zk || Zk && jk && lk >= 0 || Zk && !jk && lk <= 0) && (lk = Kk.x * Qk.x + Kk.y * Qk.y + Kk.z * Qk.z, ak = -(Kk.x * kk + Kk.y * Fk + Kk.z * Ik - lk) / (Kk.x * Kk.x + Kk.y * Kk.y + Kk.z * Kk.z), qk = kk + Kk.x * ak, Lk = Fk + Kk.y * ak, tk = Ik + Kk.z * ak, Tk = qk - kk, ik = Lk - Fk, yk = tk - Ik, xk = Tk * Tk + ik * ik + yk * yk, xk < sk && (sk = xk, ek = Pk, Xk && (Xk.x = qk, Xk.y = Lk, Xk.z = tk)));
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
            const Fk = this.getVerticesData(yk.l.PositionKind),
              Ik = this.yXk();
            let Xk;
            return Xk = this.isVerticesDataPresent(yk.l.NormalKind) ? this.getVerticesData(yk.l.NormalKind) : [], lk.c.ComputeNormals(Fk, Ik, Xk, {
              useRightHandedSystem: this.mG().useRightHandedSystem
            }), this.setVerticesData(yk.l.NormalKind, Xk, kk), this
          }
          async optimizeIndicesAsync() {
            const kk = this.yXk();
            if (!kk) return this;
            const {
              OptimizeIndices: Fk
            } = await Ik.e(351).then((() => Ik(42554)));
            return Fk(kk), this.setIndices(kk, this.getTotalVertices()), this
          }
          alignWithNormal(kk, Fk) {
            Fk || (Fk = Qk.e.Y);
            const Ik = ik.l.Ge[0],
              Xk = ik.l.Ge[1];
            return ik.t.CrossToRef(Fk, kk, Xk), ik.t.CrossToRef(kk, Xk, Ik), this.rotationQuaternion ? ik.f.RotationQuaternionFromAxisToRef(Ik, kk, Xk, this.rotationQuaternion) : ik.t.RotationFromAxisToRef(Ik, kk, Xk, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Hk.j)("EdgesRenderer")
          }
          enableEdgesRendering(kk, Fk, Ik) {
            throw (0, Hk.j)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.jK.filter((kk => kk.emitter === this))
          }
        }, (() => {
          const Ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zk[Symbol.metadata] ?? null) : void 0;
          Fk = [Vk.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Xk.j)(kk, null, Fk, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: kk => "_ApplySkeleton" in kk,
              get: kk => kk._ApplySkeleton
            },
            metadata: Ik
          }, null, jk), Ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ik
          })
        })(), kk.OCCLUSION_TYPE_NONE = ((0, Xk.n)(kk, jk), 0), kk.OCCLUSION_TYPE_OPTIMISTIC = 1, kk.OCCLUSION_TYPE_STRICT = 2, kk.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, kk.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, kk.CULLINGSTRATEGY_STANDARD = 0, kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, kk.DefaultIsPickable = !0, kk
      })(),
      uk = !1;

    function bk() {
      uk || (uk = !0, (0, Sk.f)("BABYLON.AbstractMesh", pk))
    }(jk = pk.prototype).createOrUpdateSubmeshesOctree ?? (jk.createOrUpdateSubmeshesOctree = (0, Hk.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (ek = pk.prototype).getPhysicsImpostor ?? (ek.getPhysicsImpostor = (0, Hk.h)("AbstractMesh", "getPhysicsImpostor")), (wk = pk.prototype).setPhysicsLinkWith ?? (wk.setPhysicsLinkWith = (0, Hk.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(pk.prototype, "occlusionRetryCount") || Object.defineProperty(pk.prototype, "occlusionRetryCount", (0, Hk.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(pk.prototype, "occlusionType") || Object.defineProperty(pk.prototype, "occlusionType", (0, Hk.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(pk.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(pk.prototype, "occlusionQueryAlgorithmType", (0, Hk.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(pk.prototype, "isOccluded") || Object.defineProperty(pk.prototype, "isOccluded", (0, Hk.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(pk.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(pk.prototype, "isOcclusionQueryInProgress", (0, Hk.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(pk.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(pk.prototype, "forceRenderingWhenOccluded", (0, Hk.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(pk.prototype, "occlusionForRenderPassId") || Object.defineProperty(pk.prototype, "occlusionForRenderPassId", (0, Hk.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(pk.prototype, "decalMap") || Object.defineProperty(pk.prototype, "decalMap", (0, Hk.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(pk.prototype, "JR") || Object.defineProperty(pk.prototype, "JR", (0, Hk.g)("AbstractMesh", "JR")), Object.getOwnPropertyDescriptor(pk.prototype, "physicsImpostor") || Object.defineProperty(pk.prototype, "physicsImpostor", (0, Hk.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(pk.prototype, "showBoundingBox") || Object.defineProperty(pk.prototype, "showBoundingBox", (0, Hk.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(pk.prototype, "edgesRenderer") || Object.defineProperty(pk.prototype, "edgesRenderer", (0, Hk.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(pk.prototype, "renderOutline") || Object.defineProperty(pk.prototype, "renderOutline", (0, Hk.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(pk.prototype, "renderOverlay") || Object.defineProperty(pk.prototype, "renderOverlay", (0, Hk.g)("AbstractMesh", "renderOverlay"))
  },
  40429: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Jk
    });
    var Xk = Ik(37153),
      Tk = Ik(37331),
      ik = Ik(40427),
      yk = Ik(40141),
      lk = Ik(40297),
      ak = Ik(40435),
      qk = Ik(40308),
      Lk = Ik(40097),
      tk = Ik(38674),
      Zk = Ik(40025),
      jk = Ik(40319),
      ek = Ik(37178),
      wk = Ik(40439),
      Hk = Ik(40056);
    class Jk {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(kk) {
        this._boundingBias ? this._boundingBias.kS(kk) : this._boundingBias = kk.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(kk) {
        const Fk = new Jk(Jk.RandomId(), kk.mG());
        return Fk.applyToMesh(kk), Fk
      }
      get meshes() {
        return this._meshes
      }
      constructor(kk, Fk, Ik) {
        let Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Xk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Xk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Fk || ek.e.LastCreatedScene, this._scene && (this.id = kk, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.Oe(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Tk, null !== yk && (this._totalVertices = yk), Ik ? this.setAllVerticesData(Ik, Tk) : null === yk && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), ik && (this.applyToMesh(ik), ik.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      mG() {
        return this._scene
      }
      Oe() {
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        Ik && Array.isArray(Fk) && (Fk = new Float32Array(Fk));
        const Tk = new yk.l(this._engine, Fk, kk, {
          updatable: Ik,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Xk,
          label: "Geometry_" + this.id + "_" + kk
        });
        this.setVerticesBuffer(Tk)
      }
      removeVerticesData(kk) {
        this._vertexBuffers[kk] && (this._vertexBuffers[kk].dispose(), delete this._vertexBuffers[kk]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Tk = kk.getKind();
        this._vertexBuffers[Tk] && Ik && this._vertexBuffers[Tk].dispose(), kk._buffer && kk._ownsBuffer && kk._buffer._increaseReferences(), this._vertexBuffers[Tk] = kk;
        const ik = this._meshes,
          lk = ik.length;
        if (Tk === yk.l.PositionKind) {
          this._totalVertices = Fk ?? kk._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : kk.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const Ik = this._extend && this._extend.minimum || new Xk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Tk = this._extend && this._extend.maximum || new Xk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let kk = 0; kk < lk; kk++) {
            const Fk = ik[kk];
            Fk.buildBoundingInfo(Ik, Tk), Fk._createGlobalSubMesh(Fk.isUnIndexed), Fk.computeWorldMatrix(!0), Fk.synchronizeInstances()
          }
        }
        this._notifyUpdate(Tk)
      }
      updateVerticesDataDirectly(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tk = this.getVertexBuffer(kk);
        Tk && (Tk.updateDirectly(Fk, Ik, Xk), this._notifyUpdate(kk))
      }
      updateVerticesData(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this.getVertexBuffer(kk);
        Xk && (Xk.update(Fk), kk === yk.l.PositionKind && this._updateBoundingInfo(Ik, Fk), this._notifyUpdate(kk))
      }
      _updateBoundingInfo(kk, Fk) {
        if (kk && this._updateExtend(Fk), this._resetPointsArrayCache(), kk) {
          const kk = this._meshes;
          for (const Fk of kk) {
            Fk.hasBoundingInfo ? Fk.vR().reConstruct(this._extend.minimum, this._extend.maximum) : Fk.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const kk = Fk.lK;
            for (const Fk of kk) Fk.refreshBoundingInfo()
          }
        }
      }
      _bind(kk, Fk, Ik, Xk) {
        if (!kk) return;
        void 0 === Fk && (Fk = this._indexBuffer);
        const Tk = this.getVertexBuffers();
        if (!Tk) return;
        if (Fk != this._indexBuffer || !this._vertexArrayObjects && !Xk) return void this._engine.bindBuffers(Tk, Fk, kk, Ik);
        const ik = Xk || this._vertexArrayObjects,
          yk = this._engine;
        ik[kk.key] || (ik[kk.key] = yk.recordVertexArrayObject(Tk, Fk, kk, Ik)), yk.bindVertexArrayObject(ik[kk.key], Fk)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(kk, Fk, Ik) {
        const Xk = this.getVertexBuffer(kk);
        return Xk ? Xk.getFloatData(this._totalVertices, Ik || Fk && 1 !== this._meshes.length) : null
      }
      copyVerticesData(kk, Fk) {
        const Ik = this.getVertexBuffer(kk);
        if (!Ik) return;
        Fk[kk] || (Fk[kk] = new Float32Array(this._totalVertices * Ik.getSize()));
        const Xk = Ik.getData();
        Xk && (0, Hk.c)(Xk, Ik.getSize(), Ik.type, Ik.byteOffset, Ik.byteStride, Ik.normalized, this._totalVertices, Fk[kk])
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
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Xk = kk.length !== this._indices.length;
            if (Ik || (this._indices = kk.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, kk, Fk), Xk)
              for (const kk of this._meshes) kk._createGlobalSubMesh(!0)
          } else this.setIndices(kk, null, !0)
      }
      setIndexBuffer(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = kk, this._totalVertices = Fk, this._totalIndices = Ik, kk.is32Bits = null === Xk ? Fk > 65535 : Xk;
        for (const Tk of this._meshes) Tk._createGlobalSubMesh(!0), Tk.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = kk, this._indexBufferIsUpdatable = Ik, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Ik, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Fk && (this._totalVertices = Fk);
        for (const Tk of this._meshes) Tk._createGlobalSubMesh(!Xk), Tk.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      yXk(kk, Fk) {
        if (!this.isReady()) return null;
        const Ik = this._indices;
        return Fk || kk && 1 !== this._meshes.length ? Ik.slice() : Ik
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        kk && this._vertexArrayObjects && this._vertexArrayObjects[kk.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[kk.key]), delete this._vertexArrayObjects[kk.key])
      }
      releaseForMesh(kk, Fk) {
        const Ik = this._meshes,
          Xk = Ik.indexOf(kk); - 1 !== Xk && (Ik.splice(Xk, 1), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject(), kk._geometry = null, 0 === Ik.length && Fk && this.dispose())
      }
      applyToMesh(kk) {
        if (kk._geometry === this) return;
        const Fk = kk._geometry;
        Fk && Fk.releaseForMesh(kk), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject();
        const Ik = this._meshes;
        kk._geometry = this, kk._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Ik.push(kk), this.isReady() ? this._applyToMesh(kk) : this._boundingInfo && kk.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!kk && (kk = this.getVerticesData(yk.l.PositionKind), !kk)) return;
          this._extend = (0, jk.g)(kk, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(kk) {
        for (const Fk in this._vertexBuffers) {
          const Ik = this._vertexBuffers[Fk];
          Ik._buffer.getBuffer() || Ik.create(), Fk === yk.l.PositionKind && (this._extend || this._updateExtend(), kk.buildBoundingInfo(this._extend.minimum, this._extend.maximum), kk._createGlobalSubMesh(kk.isUnIndexed), kk._updateBoundingInfo())
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
            const Ik = await kk._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void kk.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(Ik), this), this.delayLoadState = 1, this._delayInfo = [], kk.removePendingData(this);
            const Xk = this._meshes,
              Tk = Xk.length;
            for (let kk = 0; kk < Tk; kk++) this._applyToMesh(Xk[kk]);
            Fk && Fk()
          } catch (Ik) {
            kk.removePendingData(this), kk.Hs || tk.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Ik}`)
          }
        })())
      }
      toLeftHanded() {
        const kk = this.yXk(!1);
        if (null != kk && kk.length > 0) {
          for (let Fk = 0; Fk < kk.length; Fk += 3) {
            const Ik = kk[Fk + 0];
            kk[Fk + 0] = kk[Fk + 2], kk[Fk + 2] = Ik
          }
          this.setIndices(kk)
        }
        const Fk = this.getVerticesData(yk.l.PositionKind, !1);
        if (null != Fk && Fk.length > 0) {
          for (let kk = 0; kk < Fk.length; kk += 3) Fk[kk + 2] = -Fk[kk + 2];
          this.setVerticesData(yk.l.PositionKind, Fk, !1)
        }
        const Ik = this.getVerticesData(yk.l.NormalKind, !1);
        if (null != Ik && Ik.length > 0) {
          for (let kk = 0; kk < Ik.length; kk += 3) Ik[kk + 2] = -Ik[kk + 2];
          this.setVerticesData(yk.l.NormalKind, Ik, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const kk = this.getVerticesData(yk.l.PositionKind);
        if (!kk || 0 === kk.length) return !1;
        for (let Fk = 3 * this._positionsCache.length, Ik = this._positionsCache.length; Fk < kk.length; Fk += 3, ++Ik) this._positionsCache[Ik] = Xk.t.FromArray(kk, Fk);
        for (let Fk = 0, Ik = 0; Fk < kk.length; Fk += 3, ++Ik) this._positionsCache[Ik].set(kk[0 + Fk], kk[1 + Fk], kk[2 + Fk]);
        return this._positionsCache.length = kk.length / 3, this._positions = this._positionsCache, !0
      }
      Hs() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const Ik in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Ik]);
          this._vertexArrayObjects = {};
          const kk = this._meshes,
            Fk = kk.length;
          for (let Ik = 0; Ik < Fk; Ik++) kk[Ik]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const kk = this._meshes,
          Fk = kk.length;
        let Ik;
        for (Ik = 0; Ik < Fk; Ik++) this.releaseForMesh(kk[Ik]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Xk in this._vertexBuffers) this._vertexBuffers[Xk].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const kk = this._parentContainer.geometries.indexOf(this);
          kk > -1 && this._parentContainer.geometries.splice(kk, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(kk) {
        const Fk = new Jk(kk, this._scene),
          Ik = this.yXk(void 0, !0);
        Ik && Fk.setIndices(Ik);
        let Xk, Tk = !1;
        for (Xk in this._vertexBuffers) {
          const kk = this.getVertexBuffer(Xk),
            Ik = kk.getData();
          if (!Ik) continue;
          const ik = kk.isUpdatable(),
            lk = kk.getSize(),
            {
              type: ak,
              byteOffset: qk,
              byteStride: Lk,
              normalized: tk
            } = kk;
          Tk = Tk || ik;
          let Zk = this._totalVertices;
          if (kk.getIsInstanced()) {
            let kk;
            kk = Ik instanceof Array ? 4 * Ik.length : Ik.byteLength, Zk = kk / Lk
          }
          const jk = (0, Hk.l)(Ik, lk, ak, qk, Lk, Zk, !0),
            ek = new yk.l(this._engine, jk, Xk, {
              updatable: ik,
              useBytes: !1,
              stride: lk,
              size: lk,
              offset: 0,
              type: ak,
              normalized: tk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            });
          Fk.setVerticesBuffer(ek, Zk)
        }
        for (Xk in Fk._updatable = Tk, Fk.delayLoadState = this.delayLoadState, Fk.delayLoadingFile = this.delayLoadingFile, Fk._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Fk._delayInfo = Fk._delayInfo || [], Fk._delayInfo.push(Xk);
        return Fk._boundingInfo = new qk.d(this._extend.minimum, this._extend.maximum), Fk
      }
      serialize() {
        const kk = {};
        return kk.id = this.id, kk.uniqueId = this.uniqueId, kk.updatable = this._updatable, Zk.d && Zk.d.HasTags(this) && (kk.tags = Zk.d.GetTags(this)), kk
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
        return this.isVerticesDataPresent(yk.l.PositionKind) && (kk.positions = this._toNumberArray(this.getVerticesData(yk.l.PositionKind)), this.isVertexBufferUpdatable(yk.l.PositionKind) && (kk.positionsUpdatable = !0)), this.isVerticesDataPresent(yk.l.NormalKind) && (kk.normals = this._toNumberArray(this.getVerticesData(yk.l.NormalKind)), this.isVertexBufferUpdatable(yk.l.NormalKind) && (kk.normalsUpdatable = !0)), this.isVerticesDataPresent(yk.l.TangentKind) && (kk.tangents = this._toNumberArray(this.getVerticesData(yk.l.TangentKind)), this.isVertexBufferUpdatable(yk.l.TangentKind) && (kk.tangentsUpdatable = !0)), this.isVerticesDataPresent(yk.l.UVKind) && (kk.uvs = this._toNumberArray(this.getVerticesData(yk.l.UVKind)), this.isVertexBufferUpdatable(yk.l.UVKind) && (kk.uvsUpdatable = !0)), this.isVerticesDataPresent(yk.l.UV2Kind) && (kk.uvs2 = this._toNumberArray(this.getVerticesData(yk.l.UV2Kind)), this.isVertexBufferUpdatable(yk.l.UV2Kind) && (kk.uvs2Updatable = !0)), this.isVerticesDataPresent(yk.l.UV3Kind) && (kk.uvs3 = this._toNumberArray(this.getVerticesData(yk.l.UV3Kind)), this.isVertexBufferUpdatable(yk.l.UV3Kind) && (kk.uvs3Updatable = !0)), this.isVerticesDataPresent(yk.l.UV4Kind) && (kk.uvs4 = this._toNumberArray(this.getVerticesData(yk.l.UV4Kind)), this.isVertexBufferUpdatable(yk.l.UV4Kind) && (kk.uvs4Updatable = !0)), this.isVerticesDataPresent(yk.l.UV5Kind) && (kk.uvs5 = this._toNumberArray(this.getVerticesData(yk.l.UV5Kind)), this.isVertexBufferUpdatable(yk.l.UV5Kind) && (kk.uvs5Updatable = !0)), this.isVerticesDataPresent(yk.l.UV6Kind) && (kk.uvs6 = this._toNumberArray(this.getVerticesData(yk.l.UV6Kind)), this.isVertexBufferUpdatable(yk.l.UV6Kind) && (kk.uvs6Updatable = !0)), this.isVerticesDataPresent(yk.l.ColorKind) && (kk.colors = this._toNumberArray(this.getVerticesData(yk.l.ColorKind)), this.isVertexBufferUpdatable(yk.l.ColorKind) && (kk.colorsUpdatable = !0)), this.isVerticesDataPresent(yk.l.MatricesIndicesKind) && (kk.matricesIndices = this._toNumberArray(this.getVerticesData(yk.l.MatricesIndicesKind)), kk.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(yk.l.MatricesIndicesKind) && (kk.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(yk.l.MatricesWeightsKind) && (kk.matricesWeights = this._toNumberArray(this.getVerticesData(yk.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(yk.l.MatricesWeightsKind) && (kk.matricesWeightsUpdatable = !0)), kk.indices = this._toNumberArray(this.yXk()), kk
      }
      static ExtractFromMesh(kk, Fk) {
        const Ik = kk._geometry;
        return Ik ? Ik.copy(Fk) : null
      }
      static RandomId() {
        return Lk.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(kk, Fk) {
        for (let Ik = 0; Ik < Fk.geometries.length; Ik++)
          if (Fk.geometries[Ik]._loadedUniqueId === kk) return Fk.geometries[Ik];
        return null
      }
      static _ImportGeometry(kk, Fk) {
        const Ik = Fk.mG(),
          Xk = kk.geometryUniqueId,
          ik = kk.geometryId;
        if (Xk || ik) {
          const kk = Xk ? this._GetGeometryByLoadedUniqueId(Xk, Ik) : Ik.getGeometryById(ik);
          kk && kk.applyToMesh(Fk)
        } else if (kk instanceof ArrayBuffer) {
          const Ik = Fk._binaryInfo;
          if (Ik.positionsAttrDesc && Ik.positionsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.positionsAttrDesc.offset, Ik.positionsAttrDesc.count);
            Fk.setVerticesData(yk.l.PositionKind, Xk, !1)
          }
          if (Ik.normalsAttrDesc && Ik.normalsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.normalsAttrDesc.offset, Ik.normalsAttrDesc.count);
            Fk.setVerticesData(yk.l.NormalKind, Xk, !1)
          }
          if (Ik.tangetsAttrDesc && Ik.tangetsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.tangetsAttrDesc.offset, Ik.tangetsAttrDesc.count);
            Fk.setVerticesData(yk.l.TangentKind, Xk, !1)
          }
          if (Ik.uvsAttrDesc && Ik.uvsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvsAttrDesc.offset, Ik.uvsAttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UVKind, Xk, !1)
          }
          if (Ik.uvs2AttrDesc && Ik.uvs2AttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvs2AttrDesc.offset, Ik.uvs2AttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UV2Kind, Xk, !1)
          }
          if (Ik.uvs3AttrDesc && Ik.uvs3AttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvs3AttrDesc.offset, Ik.uvs3AttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UV3Kind, Xk, !1)
          }
          if (Ik.uvs4AttrDesc && Ik.uvs4AttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvs4AttrDesc.offset, Ik.uvs4AttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UV4Kind, Xk, !1)
          }
          if (Ik.uvs5AttrDesc && Ik.uvs5AttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvs5AttrDesc.offset, Ik.uvs5AttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UV5Kind, Xk, !1)
          }
          if (Ik.uvs6AttrDesc && Ik.uvs6AttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.uvs6AttrDesc.offset, Ik.uvs6AttrDesc.count);
            if (wk.b)
              for (let kk = 1; kk < Xk.length; kk += 2) Xk[kk] = 1 - Xk[kk];
            Fk.setVerticesData(yk.l.UV6Kind, Xk, !1)
          }
          if (Ik.colorsAttrDesc && Ik.colorsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.colorsAttrDesc.offset, Ik.colorsAttrDesc.count);
            Fk.setVerticesData(yk.l.ColorKind, Xk, !1, Ik.colorsAttrDesc.stride)
          }
          if (Ik.matricesIndicesAttrDesc && Ik.matricesIndicesAttrDesc.count > 0) {
            const Xk = new Int32Array(kk, Ik.matricesIndicesAttrDesc.offset, Ik.matricesIndicesAttrDesc.count),
              Tk = [];
            for (let kk = 0; kk < Xk.length; kk++) {
              const Fk = Xk[kk];
              Tk.push(255 & Fk), Tk.push((65280 & Fk) >> 8), Tk.push((16711680 & Fk) >> 16), Tk.push(Fk >> 24 & 255)
            }
            Fk.setVerticesData(yk.l.MatricesIndicesKind, Tk, !1)
          }
          if (Ik.matricesIndicesExtraAttrDesc && Ik.matricesIndicesExtraAttrDesc.count > 0) {
            const Xk = new Int32Array(kk, Ik.matricesIndicesExtraAttrDesc.offset, Ik.matricesIndicesExtraAttrDesc.count),
              Tk = [];
            for (let kk = 0; kk < Xk.length; kk++) {
              const Fk = Xk[kk];
              Tk.push(255 & Fk), Tk.push((65280 & Fk) >> 8), Tk.push((16711680 & Fk) >> 16), Tk.push(Fk >> 24 & 255)
            }
            Fk.setVerticesData(yk.l.MatricesIndicesExtraKind, Tk, !1)
          }
          if (Ik.matricesWeightsAttrDesc && Ik.matricesWeightsAttrDesc.count > 0) {
            const Xk = new Float32Array(kk, Ik.matricesWeightsAttrDesc.offset, Ik.matricesWeightsAttrDesc.count);
            Fk.setVerticesData(yk.l.MatricesWeightsKind, Xk, !1)
          }
          if (Ik.indicesAttrDesc && Ik.indicesAttrDesc.count > 0) {
            const Xk = new Int32Array(kk, Ik.indicesAttrDesc.offset, Ik.indicesAttrDesc.count);
            Fk.setIndices(Xk, null)
          }
          if (Ik.subMeshesAttrDesc && Ik.subMeshesAttrDesc.count > 0) {
            const Xk = new Int32Array(kk, Ik.subMeshesAttrDesc.offset, 5 * Ik.subMeshesAttrDesc.count);
            Fk.lK = [];
            for (let kk = 0; kk < Ik.subMeshesAttrDesc.count; kk++) {
              const Ik = Xk[5 * kk + 0],
                Tk = Xk[5 * kk + 1],
                ik = Xk[5 * kk + 2],
                yk = Xk[5 * kk + 3],
                ak = Xk[5 * kk + 4];
              lk.b.AddToMesh(Ik, Tk, ik, yk, ak, Fk)
            }
          }
        } else if (kk.positions && kk.normals && kk.indices) {
          if (Fk.setVerticesData(yk.l.PositionKind, kk.positions, kk.positions._updatable || kk.positionsUpdatable), Fk.setVerticesData(yk.l.NormalKind, kk.normals, kk.normals._updatable || kk.normalsUpdatable), kk.tangents && Fk.setVerticesData(yk.l.TangentKind, kk.tangents, kk.tangents._updatable || kk.tangentsUpdatable), kk.uvs && Fk.setVerticesData(yk.l.UVKind, kk.uvs, kk.uvs._updatable || kk.uvsUpdatable), kk.uvs2 && Fk.setVerticesData(yk.l.UV2Kind, kk.uvs2, kk.uvs2._updatable || kk.uvs2Updatable), kk.uvs3 && Fk.setVerticesData(yk.l.UV3Kind, kk.uvs3, kk.uvs3._updatable || kk.uvs3Updatable), kk.uvs4 && Fk.setVerticesData(yk.l.UV4Kind, kk.uvs4, kk.uvs4._updatable || kk.uvs4Updatable), kk.uvs5 && Fk.setVerticesData(yk.l.UV5Kind, kk.uvs5, kk.uvs5._updatable || kk.uvs5Updatable), kk.uvs6 && Fk.setVerticesData(yk.l.UV6Kind, kk.uvs6, kk.uvs6._updatable || kk.uvs6Updatable), kk.colors && Fk.setVerticesData(yk.l.ColorKind, Tk.h.CheckColors4(kk.colors, kk.positions.length / 3), kk.colors._updatable), kk.matricesIndices)
            if (kk.matricesIndices._isExpanded || kk.matricesIndicesExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExpanded, Fk.setVerticesData(yk.l.MatricesIndicesKind, kk.matricesIndices, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable);
            else {
              const Ik = [];
              for (let Fk = 0; Fk < kk.matricesIndices.length; Fk++) {
                const Xk = kk.matricesIndices[Fk];
                Ik.push(255 & Xk), Ik.push((65280 & Xk) >> 8), Ik.push((16711680 & Xk) >> 16), Ik.push(Xk >> 24 & 255)
              }
              Fk.setVerticesData(yk.l.MatricesIndicesKind, Ik, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable)
            } if (kk.matricesIndicesExtra)
            if (kk.matricesIndicesExtraExpanded || kk.matricesIndicesExtra._isExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExtraExpanded, Fk.setVerticesData(yk.l.MatricesIndicesExtraKind, kk.matricesIndicesExtra, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable);
            else {
              const Ik = [];
              for (let Fk = 0; Fk < kk.matricesIndicesExtra.length; Fk++) {
                const Xk = kk.matricesIndicesExtra[Fk];
                Ik.push(255 & Xk), Ik.push((65280 & Xk) >> 8), Ik.push((16711680 & Xk) >> 16), Ik.push(Xk >> 24 & 255)
              }
              Fk.setVerticesData(yk.l.MatricesIndicesExtraKind, Ik, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable)
            } kk.matricesWeights && (Jk._CleanMatricesWeights(kk, Fk), Fk.setVerticesData(yk.l.MatricesWeightsKind, kk.matricesWeights, kk.matricesWeights._updatable)), kk.matricesWeightsExtra && Fk.setVerticesData(yk.l.MatricesWeightsExtraKind, kk.matricesWeightsExtra, kk.matricesWeights._updatable), Fk.setIndices(kk.indices, null)
        }
        if (kk.lK) {
          Fk.lK = [];
          for (let Ik = 0; Ik < kk.lK.length; Ik++) {
            const Xk = kk.lK[Ik];
            lk.b.AddToMesh(Xk.materialIndex, Xk.verticesStart, Xk.verticesCount, Xk.indexStart, Xk.indexCount, Fk)
          }
        }
        Fk._shouldGenerateFlatShading && (Fk.convertToFlatShadedMesh(), Fk._shouldGenerateFlatShading = !1), Fk.computeWorldMatrix(!0), Ik.onMeshImportedObservable.notifyObservers(Fk)
      }
      static _CleanMatricesWeights(kk, Fk) {
        const Ik = .001;
        if (!ak.b.CleanBoneMatrixWeights) return;
        let Xk;
        if (!(kk.skeletonId > -1)) return;
        {
          const Ik = Fk.mG().getLastSkeletonById(kk.skeletonId);
          if (!Ik) return;
          Xk = Ik.bones.length
        }
        const Tk = Fk.getVerticesData(yk.l.MatricesIndicesKind),
          ik = Fk.getVerticesData(yk.l.MatricesIndicesExtraKind),
          lk = kk.matricesWeights,
          qk = kk.matricesWeightsExtra,
          Lk = kk.numBoneInfluencer,
          tk = lk.length;
        for (let yk = 0; yk < tk; yk += 4) {
          let kk = 0,
            Fk = -1;
          for (let Xk = 0; Xk < 4; Xk++) {
            const Tk = lk[yk + Xk];
            kk += Tk, Tk < Ik && Fk < 0 && (Fk = Xk)
          }
          if (qk)
            for (let Xk = 0; Xk < 4; Xk++) {
              const Tk = qk[yk + Xk];
              kk += Tk, Tk < Ik && Fk < 0 && (Fk = Xk + 4)
            }
          if ((Fk < 0 || Fk > Lk - 1) && (Fk = Lk - 1), kk > Ik) {
            const Fk = 1 / kk;
            for (let kk = 0; kk < 4; kk++) lk[yk + kk] *= Fk;
            if (qk)
              for (let kk = 0; kk < 4; kk++) qk[yk + kk] *= Fk
          } else Fk >= 4 ? (qk[yk + Fk - 4] = 1 - kk, ik[yk + Fk - 4] = Xk) : (lk[yk + Fk] = 1 - kk, Tk[yk + Fk] = Xk)
        }
        Fk.setVerticesData(yk.l.MatricesIndicesKind, Tk), kk.matricesWeightsExtra && Fk.setVerticesData(yk.l.MatricesIndicesExtraKind, ik)
      }
      static Parse(kk, Fk, Ik) {
        const Tk = new Jk(kk.id, Fk, void 0, kk.updatable);
        return Tk._loadedUniqueId = kk.uniqueId, Zk.d && Zk.d.AddTagsTo(Tk, kk.tags), kk.delayLoadingFile ? (Tk.delayLoadState = 4, Tk.delayLoadingFile = Ik + kk.delayLoadingFile, Tk._boundingInfo = new qk.d(Xk.t.FromArray(kk.boundingBoxMinimum), Xk.t.FromArray(kk.boundingBoxMaximum)), Tk._delayInfo = [], kk.hasUVs && Tk._delayInfo.push(yk.l.UVKind), kk.hasUVs2 && Tk._delayInfo.push(yk.l.UV2Kind), kk.hasUVs3 && Tk._delayInfo.push(yk.l.UV3Kind), kk.hasUVs4 && Tk._delayInfo.push(yk.l.UV4Kind), kk.hasUVs5 && Tk._delayInfo.push(yk.l.UV5Kind), kk.hasUVs6 && Tk._delayInfo.push(yk.l.UV6Kind), kk.hasColors && Tk._delayInfo.push(yk.l.ColorKind), kk.hasMatricesIndices && Tk._delayInfo.push(yk.l.MatricesIndicesKind), kk.hasMatricesWeights && Tk._delayInfo.push(yk.l.MatricesWeightsKind), Tk._delayLoadingFunction = ik.c.ImportVertexData) : ik.c.ImportVertexData(kk, Tk), Fk.pushGeometry(Tk, !0), Tk
      }
    }
  },
  40475: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk,
      f: () => ek
    });
    var Xk = Ik(37153),
      Tk = Ik(38674),
      ik = Ik(40441),
      yk = Ik(40417),
      lk = Ik(38666),
      ak = Ik(40449),
      qk = Ik(40141),
      Lk = Ik(37201);
    class tk extends ik.d {
      constructor(kk, Fk) {
        super(kk, Fk.mG()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Fk.U3(this), this._sourceMesh = Fk, this._unIndexed = Fk._unIndexed, this.position.kS(Fk.position), this.rotation.kS(Fk.rotation), this.ci.kS(Fk.ci), Fk.rotationQuaternion && (this.rotationQuaternion = Fk.rotationQuaternion.clone()), this.animations = Fk.animations.slice();
        for (const Ik of Fk.getAnimationRanges()) null != Ik && this.createAnimationRange(Ik.name, Ik.from, Ik.to);
        if (this.infiniteDistance = Fk.infiniteDistance, this.setPivotMatrix(Fk.getPivotMatrix()), Fk.skeleton || Fk.morphTargetManager || !Fk.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const kk = Fk.vR();
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
        this._sourceMesh?.receiveShadows !== kk && Tk.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(kk) {
        this._sourceMesh?.material !== kk && Tk.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(kk) {
        this._sourceMesh?.visibility !== kk && Tk.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(kk) {
        this._sourceMesh?.skeleton !== kk && Tk.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(kk) {
        this._sourceMesh && kk !== this._sourceMesh.renderingGroupId && Tk.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(kk) {
        this._sourceMesh && kk !== this._sourceMesh.meshBlendingTag && Tk.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get DXk() {
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
      getVerticesData(kk, Fk, Ik) {
        return this._sourceMesh.getVerticesData(kk, Fk, Ik)
      }
      copyVerticesData(kk, Fk) {
        this._sourceMesh.copyVerticesData(kk, Fk)
      }
      getVertexBuffer(kk, Fk) {
        return this._sourceMesh.getVertexBuffer(kk, Fk)
      }
      setVerticesData(kk, Fk, Ik, Xk) {
        return this.DXk && this.DXk.setVerticesData(kk, Fk, Ik, Xk), this.DXk
      }
      updateVerticesData(kk, Fk, Ik, Xk) {
        return this.DXk && this.DXk.updateVerticesData(kk, Fk, Ik, Xk), this.DXk
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.DXk && this.DXk.setIndices(kk, Fk), this.DXk
      }
      isVerticesDataPresent(kk) {
        return this._sourceMesh.isVerticesDataPresent(kk)
      }
      yXk() {
        return this._sourceMesh.yXk()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.vR().isLocked) return this;
        kk = "object" === typeof Fk ? Fk : {
          applySkeleton: Fk,
          applyMorph: Ik
        };
        const Xk = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(kk, null, qk.l.PositionKind), Xk), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(kk, Fk) {
        if (super._activate(kk, Fk), this._sourceMesh.lK || Tk.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
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
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== ak.h.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Xk.c);
          const kk = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Xk.l.Ge[7].kS(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.kS(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.kS(Xk.l.Ge[7]), this._currentLOD._masterMesh = kk, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get rG() {
        return !0
      }
      getLOD(kk) {
        if (!kk) return this;
        const Fk = this.DXk.getLODLevels();
        if (Fk && 0 !== Fk.length) {
          const Fk = this.vR();
          this._currentLOD = this.DXk.getLOD(kk, Fk.EXk)
        } else this._currentLOD = this.DXk;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(kk) {
        return this.DXk._preActivateForIntermediateRendering(kk)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.lK)
          for (let kk = 0; kk < this._sourceMesh.lK.length; kk++) this._sourceMesh.lK[kk].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.vR().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(kk);
        if (lk.c.DeepCopy(this, Xk, ["name", "lK", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "DXk", "rG", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "rXk", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Nyk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Fk && (Xk.parent = Fk), !Ik)
          for (let Tk = 0; Tk < this.mG().meshes.length; Tk++) {
            const kk = this.mG().meshes[Tk];
            kk.parent === this && kk.clone(kk.name, Xk)
          }
        return Xk.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Xk), Xk
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z2(this), super.dispose(kk, Fk)
      }
      _serializeAsParent(kk) {
        super._serializeAsParent(kk), kk.parentId = this._sourceMesh.uniqueId, kk.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0, Fk && Fk.newSourcedMesh);
        Xk && Ik && Ik(this, Xk);
        for (const Tk of this.getChildTransformNodes(!0)) Tk.instantiateHierarchy(Xk, Fk, Ik);
        return Xk
      }
    }
    let Zk = !1;

    function jk(kk, Fk, Ik, Xk, Tk) {
      for (let ik = 0; ik < Fk.length; ik++) {
        const yk = kk[Fk[ik]] ?? 0,
          lk = Tk + Ik[ik];
        yk.toArray ? yk.toArray(Xk, lk) : yk.copyToArray ? yk.copyToArray(Xk, lk) : Xk[lk] = yk
      }
    }

    function ek() {
      Zk || (Zk = !0, yk.b._instancedMeshFactory = (kk, Fk) => {
        const Ik = new tk(kk, Fk);
        if (Fk.JR) {
          Ik.JR = {};
          for (const kk in Fk.JR) Ik.JR[kk] = Fk.JR[kk]
        }
        return Ik
      }, yk.b.prototype.jR = function(kk, Fk) {
        if (!this.JR) {
          this.JR = {};
          for (const kk of this.instances) kk.JR = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.Oe().getCaps().vertexArrayObject ? {} : void 0
        }), this.JR[kk] = null, this._userInstancedBuffersStorage.strides[kk] = Fk;
        const Ik = this._userInstancedBuffersStorage;
        Ik.interleavedKinds = [], Ik.interleavedOffsets = [], Ik.interleavedRowStride = 0;
        for (const Xk in Ik.strides) Ik.interleavedKinds.push(Xk), Ik.interleavedOffsets.push(Ik.interleavedRowStride), Ik.interleavedRowStride += Ik.strides[Xk];
        Ik.interleavedData = new Float32Array(32 * Ik.interleavedRowStride);
        for (const Xk in Ik.interleavedBuffers) Ik.interleavedBuffers[Xk].buffer.dispose();
        Ik.interleavedBuffers = {}, Ik.vertexBuffers[kk] = null;
        for (const Xk of this.instances) Xk.JR[kk] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, yk.b.prototype._processInstancedBuffers = function(kk, Fk) {
        const Ik = this._userInstancedBuffersStorage,
          Xk = Ik.interleavedRowStride;
        if (!Xk) return;
        const Tk = kk ? kk.length : 0,
          ik = (Tk + 1) * Xk;
        let yk = Ik.interleavedData;
        if (yk.length < ik) {
          let kk = yk.length;
          for (; kk < ik;) kk *= 2;
          yk = Ik.interleavedData = new Float32Array(kk)
        }
        const lk = Ik.interleavedKinds,
          ak = Ik.interleavedOffsets;
        let Lk = 0;
        Fk && (jk(this.JR, lk, ak, yk, Lk), Lk += Xk);
        for (let qk = 0; qk < Tk; qk++) jk(kk[qk].JR, lk, ak, yk, Lk), Lk += Xk;
        let tk = "shared",
          Zk = Ik.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (tk = this._instanceDataStorage.engine.currentRenderPassId, Ik.renderPasses || (Ik.renderPasses = {}), Ik.renderPasses[tk] || (Ik.renderPasses[tk] = {}), Zk = Ik.renderPasses[tk]);
        const ek = Ik.interleavedBuffers[tk];
        let wk = !ek || ek.data !== yk;
        for (let qk = 0; !wk && qk < lk.length; qk++) wk = !Zk[lk[qk]];
        if (!wk) return void ek.buffer.updateDirectly(yk, 0);
        ek?.buffer.dispose();
        const Hk = new qk.e(this.Oe(), yk, !0, Xk, !1, !0);
        for (let qk = 0; qk < lk.length; qk++) {
          const kk = lk[qk],
            Fk = Hk.createVertexBuffer(kk, ak[qk], Ik.strides[kk]);
          Fk.hashCode += Fk.byteOffset * 2 ** 24, Zk[kk] = Fk
        }
        Ik.interleavedBuffers[tk] = {
          buffer: Hk,
          data: yk
        }, this._invalidateInstanceVertexArrayObject()
      }, yk.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const kk in this._userInstancedBuffersStorage.vertexArrayObjects) this.Oe().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[kk]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, yk.b.prototype._disposeInstanceSpecificData = function() {
        for (const Fk in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Fk].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Fk in this.JR) this._userInstancedBuffersStorage.vertexBuffers[Fk] && this._userInstancedBuffersStorage.vertexBuffers[Fk].dispose();
        const kk = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (kk) {
          for (const Fk in kk) kk[Fk].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.JR = {}
      }, (0, Lk.f)("BABYLON.InstancedMesh", tk))
    }
  },
  40417: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Dk,
      d: () => kF,
      g: () => dk
    });
    var Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk = Ik(37187),
      xk = Ik(40097),
      Pk = Ik(40038),
      Kk = Ik(38666),
      Qk = Ik(40025),
      sk = Ik(40424),
      Vk = Ik(40214),
      zk = Ik(37153),
      Sk = Ik(37331),
      vk = Ik(40218),
      Ek = Ik(40141),
      Ok = Ik(40427),
      nk = Ik(40429),
      Gk = Ik(40441),
      pk = Ik(40297),
      uk = Ik(40295),
      bk = Ik(40382),
      Rk = Ik(40452),
      Uk = Ik(40435),
      Ck = Ik(40021),
      Nk = Ik(38674),
      ck = Ik(37201),
      Wk = Ik(39863),
      fk = Ik(40166);
    class Bk {
      constructor(kk, Fk) {
        this.distanceOrScreenCoverage = kk, this.mesh = Fk
      }
    }
    class dk {}
    class Yk {
      constructor() {
        this.batchCache = new gk(this), this.batchCacheReplacementModeInFrozenMode = new gk(this), this.instancesBufferSize = 2048
      }
    }
    class Ak {
      constructor() {
        this.renderPasses = {}
      }
    }
    class gk {
      constructor(kk) {
        this.parent = kk, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class mk {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class hk {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const rk = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Dk extends Gk.d {
      static _GetDefaultSideOrientation(kk) {
        return kk || Dk.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== kk && (kk && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Ek.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Ek.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = kk, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Jk.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Jk.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Jk.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Jk.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Jk.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(kk) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(kk)
      }
      get rXk() {
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
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tk = this.mG();
        if (kk._geometry && kk._geometry.applyToMesh(this), Kk.c.DeepCopy(kk, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "rXk", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "rG", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "Nyk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = kk, Tk.useClonedMeshMap && (kk._internalMeshDataInfo.meshMap || (kk._internalMeshDataInfo.meshMap = {}), kk._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = kk._originalBuilderSideOrientation, this._creationDataStorage = kk._creationDataStorage, kk._ranges) {
          const Fk = kk._ranges;
          for (const kk in Fk) Object.prototype.hasOwnProperty.call(Fk, kk) && Fk[kk] && this.createAnimationRange(kk, Fk[kk].from, Fk[kk].to)
        }
        if (kk.metadata && kk.metadata.clone ? this.metadata = kk.metadata.clone() : this.metadata = kk.metadata, this._internalMetadata = kk._internalMetadata, this.meshBlendingTag = kk.meshBlendingTag, Qk.d && Qk.d.HasTags(kk) && Qk.d.AddTagsTo(this, Qk.d.GetTags(kk, !0)), this.Av(kk.isEnabled(!1)), this.parent = kk.parent, this.setPivotMatrix(kk.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + kk.id, this.material = kk.material, !Fk) {
          const Tk = kk.getDescendants(!0);
          for (let kk = 0; kk < Tk.length; kk++) {
            const ik = Tk[kk];
            ik._isMesh ? (rk.parent = this, rk.doNotCloneChildren = Fk, rk.clonePhysicsImpostor = Ik, rk.cloneThinInstances = Xk, ik.clone(this.name + "." + ik.name, rk)) : ik.clone && ik.clone(this.name + "." + ik.name, this)
          }
        }
        if (kk.morphTargetManager && (this.morphTargetManager = kk.morphTargetManager), (0, Wk.e)(Tk.getPhysicsEngine)) {
          const Fk = Tk.getPhysicsEngine();
          if (Ik && Fk)
            if (1 === Fk.getPluginVersion()) {
              const Ik = Fk.getImpostorForPhysicsObject(kk);
              Ik && (this.physicsImpostor = Ik.clone(this))
            } else 2 === Fk.getPluginVersion() && kk.physicsBody && kk.physicsBody.clone(this)
        }
        for (let ik = 0; ik < Tk.jK.length; ik++) {
          const Fk = Tk.jK[ik];
          Fk.emitter === kk && Fk.clone(Fk.name, this)
        }
        if (this.skeleton = kk.skeleton, Xk && (kk._thinInstanceDataStorage.matrixData ? (this.K8("matrix", new Float32Array(kk._thinInstanceDataStorage.matrixData), 16, !kk._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = kk._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, kk._userThinInstanceBuffersStorage)) {
          const Fk = kk._userThinInstanceBuffersStorage;
          for (const kk in Fk.data) this.K8(kk, new Float32Array(Fk.data[kk]), Fk.strides[kk], !Fk.vertexBuffers?.[kk]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[kk] = Fk.sizes[kk]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(kk) {
        let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ik = arguments.length > 4 ? arguments[4] : void 0,
          yk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(kk, Ik), this._internalMeshDataInfo = new hk, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new mk, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Dk.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, Ik = this.mG(), this._instanceDataStorage = new Ak, this._instanceDataStorage.engine = Ik.Oe(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Yk), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (kk, Fk, Ik) => {
          kk && Ik && (this._uniformBuffer ? this.transferToEffect(Fk) : Ik.bindOnlyWorldMatrix(Fk))
        };
        let lk = !1;
        if (Xk && void 0 === Xk._addToSceneRootNodes) {
          const kk = Xk;
          Fk = kk.parent ?? null, Tk = kk.source ?? null, ik = kk.doNotCloneChildren ?? !1, yk = kk.clonePhysicsImpostor ?? !0, lk = kk.cloneThinInstances ?? !1
        } else Fk = Xk;
        Tk && this._copySource(Tk, ik, yk, lk), null !== Fk && (this.parent = Fk), this._instanceDataStorage.hardwareInstancedRendering = this.Oe().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = kk => {
          kk.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Jk.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), Tk && Tk.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = 0 === this.getTotalVertices() || Fk && Fk.doNotInstantiate && (!0 === Fk.doNotInstantiate || Fk.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Xk.parent = kk || this.parent, Xk.position = this.position.clone(), Xk.ci = this.ci.clone(), this.rotationQuaternion ? Xk.rotationQuaternion = this.rotationQuaternion.clone() : Xk.rotation = this.rotation.clone(), Ik && Ik(this, Xk);
        for (const Tk of this.getChildTransformNodes(!0)) "InstancedMesh" === Tk.getClassName() && "Mesh" === Xk.getClassName() && Tk.DXk === this ? Tk.instantiateHierarchy(Xk, {
          doNotInstantiate: Fk && Fk.doNotInstantiate || !1,
          newSourcedMesh: Xk
        }, Ik) : Tk.instantiateHierarchy(Xk, Fk, Ik);
        return Xk
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
          for (let Ik = 0; Ik < this.animations.length; Ik++) Fk += ", animation[0]: " + this.animations[Ik].toString(kk);
        if (kk)
          if (this._geometry) {
            const kk = this.yXk(),
              Ik = this.getVerticesData(Ek.l.PositionKind);
            Ik && kk && (Fk += ", flat shading: " + (Ik.length / 3 === kk.length ? "YES" : "NO"))
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
        this._internalMeshDataInfo._LODLevels.sort(((Fk, Ik) => Fk.distanceOrScreenCoverage < Ik.distanceOrScreenCoverage ? kk : Fk.distanceOrScreenCoverage > Ik.distanceOrScreenCoverage ? -kk : 0))
      }
      addLODLevel(kk, Fk) {
        if (Fk && Fk._masterMesh) return Nk.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const Ik = new Bk(kk, Fk);
        return this._internalMeshDataInfo._LODLevels.push(Ik), Fk && (Fk._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(kk) {
        const Fk = this._internalMeshDataInfo;
        for (let Ik = 0; Ik < Fk._LODLevels.length; Ik++) {
          const Xk = Fk._LODLevels[Ik];
          if (Xk.distanceOrScreenCoverage === kk) return Xk.mesh
        }
        return null
      }
      removeLODLevel(kk) {
        const Fk = this._internalMeshDataInfo;
        for (let Ik = 0; Ik < Fk._LODLevels.length; Ik++) Fk._LODLevels[Ik].mesh === kk && (Fk._LODLevels.splice(Ik, 1), kk && (kk._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(kk, Fk) {
        const Ik = this._internalMeshDataInfo;
        if (!Ik._LODLevels || 0 === Ik._LODLevels.length) return this;
        const Xk = Fk || this.vR().EXk,
          Tk = kk.mode === Vk.d.ORTHOGRAPHIC_CAMERA ? kk.minZ : Xk.centerWorld.subtract(kk.globalPosition).length();
        let ik = Tk,
          yk = 1;
        if (Ik._useLODScreenCoverage) {
          const Fk = kk.screenArea;
          let Ik = Xk.radiusWorld * kk.minZ / Tk;
          Ik = Ik * Ik * Math.PI, ik = Ik / Fk, yk = -1
        }
        if (yk * Ik._LODLevels[Ik._LODLevels.length - 1].distanceOrScreenCoverage > yk * ik) return this.onLODLevelSelection && this.onLODLevelSelection(ik, this, this), this;
        for (let lk = 0; lk < Ik._LODLevels.length; lk++) {
          const kk = Ik._LODLevels[lk];
          if (yk * kk.distanceOrScreenCoverage < yk * ik) {
            if (kk.mesh) {
              if (4 === kk.mesh.delayLoadState) return kk.mesh._checkDelayState(), this;
              if (2 === kk.mesh.delayLoadState) return this;
              kk.mesh._preActivate(), kk.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(ik, this, kk.mesh), kk.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(ik, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(kk, Fk, Ik, Xk) {
        if (!this._geometry) return null;
        let Tk = Xk ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[kk]?.getFloatData(this.instances.length + 1, Ik || Fk && 1 !== this._geometry.meshes.length);
        return Tk || (Tk = this._geometry.getVerticesData(kk, Fk, Ik)), Tk
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
          for (const Ik in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Fk.indexOf(Ik) && Fk.push(Ik);
        return Fk
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      yXk(kk, Fk) {
        return this._geometry ? this._geometry.yXk(kk, Fk) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(kk)) return !1;
        if (!this.lK || 0 === this.lK.length) return !0;
        if (!kk) return !0;
        const Ik = this.Oe(),
          Xk = this.mG(),
          Tk = Fk || Ik.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const ik = this.material || Xk.defaultMaterial;
        if (ik)
          if (ik._storeEffectOnSubMeshes)
            for (const lk of this.lK) {
              const kk = lk.Ue();
              if (kk)
                if (kk._storeEffectOnSubMeshes) {
                  if (!kk.isReadyForSubMesh(this, lk, Tk)) return !1
                } else if (!kk.isReady(this, Tk)) return !1
            } else if (!ik.isReady(this, Tk)) return !1;
        const yk = Ik.currentRenderPassId;
        for (const lk of this.lightSources) {
          const kk = lk.getShadowGenerators();
          if (!kk) continue;
          const Fk = kk.values();
          for (let Xk = Fk.next(); !0 !== Xk.done; Xk = Fk.next()) {
            const kk = Xk.value;
            if (kk && (!kk.getShadowMap()?.renderList || kk.getShadowMap()?.renderList && -1 !== kk.getShadowMap()?.renderList?.indexOf(this))) {
              const Fk = kk.getShadowMap().renderPassIds ?? [Ik.currentRenderPassId];
              for (let Xk = 0; Xk < Fk.length; ++Xk) {
                Ik.currentRenderPassId = Fk[Xk];
                for (const Fk of this.lK)
                  if (!kk.isReady(Fk, Tk, Fk.Ue()?.needAlphaBlendingForMesh(this) ?? !1)) return Ik.currentRenderPassId = yk, !1
              }
              Ik.currentRenderPassId = yk
            }
          }
        }
        for (const lk of this._internalMeshDataInfo._LODLevels)
          if (lk.mesh && !lk.mesh.isReady(Tk)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      Ce() {
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
        return Fk || (Fk = new Yk, this._instanceDataStorage.renderPasses[kk] = Fk), Fk
      }
      _preActivate() {
        const kk = this._internalMeshDataInfo,
          Fk = this.mG().getRenderId();
        return kk._preActivateId === Fk || (kk._preActivateId = Fk, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(kk) {
        const Fk = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Fk.visibleInstances && (Fk.visibleInstances.intermediateDefaultRenderId = kk), this
      }
      _registerInstanceForRenderId(kk, Fk) {
        const Ik = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Ik.visibleInstances || (Ik.visibleInstances = {
          defaultRenderId: Fk,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), Ik.visibleInstances[Fk] || (void 0 === Ik.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Ik.visibleInstances[Ik.previousRenderId], Ik.previousRenderId = Fk, Ik.visibleInstances[Fk] = new Array), Ik.visibleInstances[Fk].push(kk), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.ue || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.vR().isLocked) return this;
        kk = "object" === typeof Fk ? Fk : {
          applySkeleton: Fk,
          applyMorph: Ik
        };
        const Xk = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(kk, null, Ek.l.PositionKind), Xk), this
      }
      _createGlobalSubMesh(kk) {
        const Fk = this.getTotalVertices();
        if (!Fk || !this.yXk()) return null;
        if (this.lK && this.lK.length > 0) {
          const Ik = this.yXk();
          if (!Ik) return null;
          const Xk = Ik.length;
          let Tk = !1;
          if (kk) Tk = !0;
          else
            for (const kk of this.lK) {
              if (kk.indexStart + kk.indexCount > Xk) {
                Tk = !0;
                break
              }
              if (kk.verticesStart + kk.verticesCount > Fk) {
                Tk = !0;
                break
              }
            }
          if (!Tk) return this.lK[0]
        }
        return this.releaseSubMeshes(), new pk.b(0, 0, Fk, 0, this.getTotalIndices() || (this.isUnIndexed ? Fk : 0), this)
      }
      subdivide(kk) {
        if (kk < 1) return;
        const Fk = this.getTotalIndices();
        let Ik = Fk / kk | 0,
          Xk = 0;
        for (; Ik % 3 !== 0;) Ik++;
        this.releaseSubMeshes();
        for (let Tk = 0; Tk < kk && !(Xk >= Fk); Tk++) pk.b.CreateFromIndices(0, Xk, Xk + Ik >= Fk ? Fk - Xk : Ik, this, void 0, !1), Xk += Ik;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(kk, Fk, Ik, Xk);
        else {
          const Xk = new Ok.c;
          Xk.set(Fk, kk);
          const Tk = this.mG();
          new nk.d(nk.d.RandomId(), Tk, Xk, Ik, this)
        }
        return this
      }
      removeVerticesData(kk) {
        this._geometry && this._geometry.removeVerticesData(kk)
      }
      markVerticesDataAsUpdatable(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ik = this.getVertexBuffer(kk);
        Ik && Ik.isUpdatable() !== Fk && this.setVerticesData(kk, this.getVerticesData(kk), Fk)
      }
      setVerticesBuffer(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = nk.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(kk, Ik, Fk), this
      }
      updateVerticesData(kk, Fk, Ik, Xk) {
        return this._geometry ? (Xk ? (this.makeGeometryUnique(), this.updateVerticesData(kk, Fk, Ik, !1)) : this._geometry.updateVerticesData(kk, Fk, Ik), this) : this
      }
      updateMeshPositions(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ik = this.getVerticesData(Ek.l.PositionKind);
        if (!Ik) return this;
        if (kk(Ik), this.updateVerticesData(Ek.l.PositionKind, Ik, !1, !1), Fk) {
          const kk = this.yXk(),
            Fk = this.getVerticesData(Ek.l.NormalKind);
          if (!Fk) return this;
          Ok.c.ComputeNormals(Ik, kk, Fk), this.updateVerticesData(Ek.l.NormalKind, Fk, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const kk = this._geometry,
          Fk = this._geometry.copy(nk.d.RandomId());
        return kk.releaseForMesh(this, !0), Fk.applyToMesh(this), this
      }
      setIndexBuffer(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Tk = this._geometry;
        Tk || (Tk = new nk.d(nk.d.RandomId(), this.mG(), void 0, void 0, this)), Tk.setIndexBuffer(kk, Fk, Ik, Xk)
      }
      setIndices(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(kk, Fk, Ik, Xk);
        else {
          const Xk = new Ok.c;
          Xk.indices = kk;
          const Tk = this.mG();
          new nk.d(nk.d.RandomId(), Tk, Xk, Ik, this, Fk)
        }
        return this
      }
      updateIndices(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(kk, Fk, Ik), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(kk, Fk, Ik) {
        let Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Tk = this.mG().Oe();
        let ik;
        if (this._unIndexed)
          if (this._getRenderingFillMode(Ik) === uk.c.WireFrameFillMode) ik = kk._getLinesIndexBuffer(this.yXk(), Tk);
          else ik = null;
        else switch (this._getRenderingFillMode(Ik)) {
          case uk.c.PointFillMode:
            ik = null;
            break;
          case uk.c.WireFrameFillMode:
            ik = kk._getLinesIndexBuffer(this.yXk(), Tk);
            break;
          default:
          case uk.c.TriangleFillMode:
            ik = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Fk, ik, Xk)
      }
      _bindDirect(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(kk), Ik && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const kk = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Fk in kk) this._userInstancedBuffersStorage.vertexBuffers[Fk] = kk[Fk]
          }
          this._geometry._bind(kk, Fk, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(kk, Fk);
        return this
      }
      _draw(kk, Fk, Ik) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Xk = this.mG().Oe(),
          Tk = Xk._currentMaterialContext,
          ik = Tk && Tk.useVertexPulling;
        return this._unIndexed && Fk !== uk.c.WireFrameFillMode || Fk == uk.c.PointFillMode ? Xk.drawArraysType(Fk, kk.verticesStart, kk.verticesCount, this.forcedInstanceCount || Ik) : Fk == uk.c.WireFrameFillMode ? Xk.drawElementsType(Fk, 0, kk._linesIndexCount, this.forcedInstanceCount || Ik) : ik ? Xk.drawArraysType(Fk, kk.indexStart, kk.indexCount, this.forcedInstanceCount || Ik) : Xk.drawElementsType(Fk, kk.indexStart, kk.indexCount, this.forcedInstanceCount || Ik), this
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
        const Ik = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Fk) return Ik.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[kk] = !1, Ik.batchCacheReplacementModeInFrozenMode.renderSelf[kk] = !0, Ik.batchCacheReplacementModeInFrozenMode;
          if (Ik.previousBatch) return Ik.previousBatch
        }
        const Xk = this.mG(),
          Tk = Xk._isInIntermediateRendering(),
          ik = Tk ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          yk = Ik.batchCache;
        if (yk.mustReturn = !1, yk.renderSelf[kk] = Fk || !ik && this.isEnabled() && this.isVisible, yk.visibleInstances[kk] = null, Ik.visibleInstances && !Fk) {
          const Fk = Ik.visibleInstances,
            ik = Xk.getRenderId(),
            lk = Tk ? Fk.intermediateDefaultRenderId : Fk.defaultRenderId;
          yk.visibleInstances[kk] = Fk[ik], !yk.visibleInstances[kk] && lk && (yk.visibleInstances[kk] = Fk[lk])
        }
        return yk.hardwareInstancedRendering[kk] = !Fk && this._instanceDataStorage.hardwareInstancedRendering && null !== yk.visibleInstances[kk] && void 0 !== yk.visibleInstances[kk], Ik.previousBatch = yk, yk
      }
      _updateInstancedBuffers(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Fk.visibleInstances[kk._id],
          lk = yk ? yk.length : 0,
          ak = Fk.parent,
          qk = this._instanceDataStorage;
        let Lk = ak.instancesBuffer,
          tk = ak.instancesPreviousBuffer,
          Zk = 0,
          jk = 0;
        const ek = Fk.renderSelf[kk._id],
          wk = this._scene.floatingOriginOffset,
          Hk = !Lk || Ik !== ak.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !ak.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || qk.isFrozen && !Hk) jk = (ek ? 1 : 0) + lk;
        else {
          const Fk = this.getWorldMatrix();
          if (ek) {
            this._scene.needsPreviousWorldMatrices && (qk.masterMeshPreviousWorldMatrix ? (qk.masterMeshPreviousWorldMatrix.copyToArray(ak.instancesPreviousData, Zk), qk.masterMeshPreviousWorldMatrix.kS(Fk)) : (qk.masterMeshPreviousWorldMatrix = Fk.clone(), qk.masterMeshPreviousWorldMatrix.copyToArray(ak.instancesPreviousData, Zk))), Fk.copyToArray(ak.instancesData, Zk);
            const kk = Fk.iXk();
            ak.instancesData[Zk + 12] = kk[12] - wk.x, ak.instancesData[Zk + 13] = kk[13] - wk.y, ak.instancesData[Zk + 14] = kk[14] - wk.z, Zk += 16, jk++
          }
          if (yk) {
            if (Dk.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && kk.Ue()?.needAlphaBlendingForMesh(kk.getRenderingMesh())) {
              const kk = this._scene.activeCamera.globalPosition;
              for (let Fk = 0; Fk < yk.length; Fk++) {
                const Ik = yk[Fk];
                Ik._distanceToCamera = zk.t.Distance(Ik.vR().EXk.centerWorld, kk)
              }
              yk.sort(((kk, Fk) => kk._distanceToCamera > Fk._distanceToCamera ? -1 : kk._distanceToCamera < Fk._distanceToCamera ? 1 : 0))
            }
            for (let kk = 0; kk < yk.length; kk++) {
              const Fk = yk[kk],
                Ik = Fk.getWorldMatrix();
              Ik.copyToArray(ak.instancesData, Zk), this._scene.needsPreviousWorldMatrices && (Fk._previousWorldMatrix ? (Fk._previousWorldMatrix.copyToArray(ak.instancesPreviousData, Zk), Fk._previousWorldMatrix.kS(Ik)) : (Fk._previousWorldMatrix = Ik.clone(), Fk._previousWorldMatrix.copyToArray(ak.instancesPreviousData, Zk)));
              const Xk = Ik.iXk();
              ak.instancesData[Zk + 12] = Xk[12] - wk.x, ak.instancesData[Zk + 13] = Xk[13] - wk.y, ak.instancesData[Zk + 14] = Xk[14] - wk.z, Zk += 16, jk++
            }
          }
        }
        if (Hk) {
          let kk;
          if (Lk && Lk.dispose(), tk && tk.dispose(), Lk = new Ek.e(Xk, ak.instancesData, !0, 16, !1, !0), ak.instancesBuffer = Lk, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.Oe().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) kk = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Fk = this._instanceDataStorage.engine.currentRenderPassId;
            kk = this._userInstancedBuffersStorage.renderPasses[Fk], kk || (this._userInstancedBuffersStorage.renderPasses[Fk] = kk = {})
          }
          kk.world0 = Lk.createVertexBuffer("world0", 0, 4), kk.world1 = Lk.createVertexBuffer("world1", 4, 4), kk.world2 = Lk.createVertexBuffer("world2", 8, 4), kk.world3 = Lk.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (tk = new Ek.e(Xk, ak.instancesPreviousData, !0, 16, !1, !0), ak.instancesPreviousBuffer = tk, kk.previousWorld0 = tk.createVertexBuffer("previousWorld0", 0, 4), kk.previousWorld1 = tk.createVertexBuffer("previousWorld1", 4, 4), kk.previousWorld2 = tk.createVertexBuffer("previousWorld2", 8, 4), kk.previousWorld3 = tk.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Lk.updateDirectly(ak.instancesData, 0, jk), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || tk.updateDirectly(ak.instancesPreviousData, 0, jk));
        this._processInstancedBuffers(yk, ek), ik && void 0 !== Tk && (this.mG()._activeIndices.addCount(kk.indexCount * jk, !1), Xk._currentDrawContext && (Xk._currentDrawContext.useInstancing = !0), this._bind(kk, ik, Tk), this._draw(kk, Tk, jk)), !this._scene.needsPreviousWorldMatrices || Hk || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || tk.updateDirectly(ak.instancesData, 0, jk)
      }
      _renderWithInstances(kk, Fk, Ik, Xk, Tk) {
        const ik = Ik.visibleInstances[kk._id],
          yk = ik ? ik.length : 0,
          lk = Ik.parent,
          ak = lk.instancesBufferSize,
          qk = 16 * (yk + 1) * 4;
        for (; lk.instancesBufferSize < qk;) lk.instancesBufferSize *= 2;
        return lk.instancesData && ak == lk.instancesBufferSize || (lk.instancesData = new Float32Array(lk.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !lk.instancesPreviousData || ak != lk.instancesBufferSize) && (lk.instancesPreviousData = new Float32Array(lk.instancesBufferSize / 4)), this._updateInstancedBuffers(kk, Ik, ak, Tk, Fk, Xk), Tk.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(kk, Fk, Ik, Xk) {
        const Tk = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.mG()._activeIndices.addCount(kk.indexCount * Tk, !1), Xk._currentDrawContext && (Xk._currentDrawContext.useInstancing = !0), this._bind(kk, Ik, Fk), this._draw(kk, Fk, Tk), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Tk) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Xk.unbindInstanceAttributes()
      }
      _processInstancedBuffers(kk, Fk) {}
      _processRendering(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = this.mG(),
          qk = ak.Oe();
        if (Xk = this._getRenderingFillMode(Xk), ik && Fk.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Fk, Xk, Ik, qk), this;
        if (ik) this._renderWithInstances(Fk, Xk, Tk, Ik, qk);
        else {
          qk._currentDrawContext && (qk._currentDrawContext.useInstancing = !1);
          let Ik = 0;
          Tk.renderSelf[Fk._id] && (yk && yk(!1, kk.getWorldMatrix(), lk), Ik++, this._draw(Fk, Xk, this._instanceDataStorage.overridenInstanceCount));
          const ik = Tk.visibleInstances[Fk._id];
          if (ik) {
            const kk = ik.length;
            Ik += kk;
            for (let Ik = 0; Ik < kk; Ik++) {
              const kk = ik[Ik].getWorldMatrix();
              yk && yk(!0, kk, lk), this._draw(Fk, Xk)
            }
          }
          ak._activeIndices.addCount(Fk.indexCount * Ik, !1)
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
          const Ik = this._instanceDataStorage.renderPasses[Fk];
          this._disposeInstanceDataStorageRenderPass(Ik, kk)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, kk), this._userInstancedBuffersStorage) {
          for (const Fk in this._userInstancedBuffersStorage.vertexBuffers) {
            const Ik = this._userInstancedBuffersStorage.vertexBuffers[Fk];
            Ik && (kk && Ik.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Fk] = null)
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
        const Ik = this._userInstancedBuffersStorage?.interleavedBuffers;
        Ik?.[kk] && (Ik[kk].buffer.dispose(), delete Ik[kk])
      }
      _freeze() {
        if (this.lK) {
          for (let kk = 0; kk < this.lK.length; kk++) this._getInstancesRenderList(kk);
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
      renderWithRenderPassId(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const ik = this._scene.Oe(),
          yk = ik.currentRenderPassId;
        if (void 0 !== kk && (ik.currentRenderPassId = kk), Xk)(!Tk || Tk && Xk.isInFrustum(this._scene._frustumPlanes)) && this.render(Xk, !!Fk, Ik);
        else
          for (let lk = 0; lk < this.lK.length; lk++) {
            const kk = this.lK[lk];
            (!Tk || Tk && kk.isInFrustum(this._scene._frustumPlanes)) && this.render(kk, !!Fk, Ik)
          }
        return void 0 !== kk && (ik.currentRenderPassId = yk), this
      }
      directRender() {
        if (!this.lK) return this;
        for (const kk of this.lK) this.render(kk, !1);
        return this
      }
      render(kk, Fk, Ik) {
        const Xk = this.mG(),
          Tk = Xk.Oe();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const ik = Xk.activeCameras?.length ?? 0,
          yk = ik > 1 && Xk.activeCamera === Xk.activeCameras[0] || ik <= 1,
          lk = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Tk.currentRenderPassId;
        if (yk && this._checkOcclusionQuery(lk) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const ak = this._getInstancesRenderList(kk._id, !!Ik);
        if (ak.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let qk = 0,
          Lk = null;
        this.ignoreCameraMaxZ && Xk.activeCamera && !Xk._isInIntermediateRendering() && (qk = Xk.activeCamera.maxZ, Lk = Xk.activeCamera, Xk.activeCamera.maxZ = 0, Xk.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const tk = kk.getRenderingMesh(),
          Zk = ak.hardwareInstancedRendering[kk._id] || tk.hasThinInstances || !!this._userInstancedBuffersStorage && !kk.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          jk = this._instanceDataStorage,
          ek = kk.Ue();
        if (!ek) return Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), this;
        if (jk.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === ek) {
          if (ek._storeEffectOnSubMeshes && !kk._drawWrapper?._wasPreviouslyReady || !ek._storeEffectOnSubMeshes && !ek._getDrawWrapper()._wasPreviouslyReady) return Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), this
        } else {
          if (ek._storeEffectOnSubMeshes) {
            if (!ek.isReadyForSubMesh(this, kk, Zk)) return Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), this
          } else if (!ek.isReady(this, Zk)) return Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = ek
        }
        if (Fk) {
          const kk = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === kk.alphaModes.length) Tk.setAlphaMode(kk.alphaMode);
          else
            for (let Fk = 0; Fk < kk.alphaModes.length; Fk++) {
              const Ik = kk.alphaModes[Fk];
              Tk.setAlphaMode(void 0 !== Ik ? Ik : 2, !1, Fk)
            }
        }
        let wk;
        wk = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? kk._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Hk = wk?.effect ?? null;
        for (let Vk = 0, zk = Xk._beforeRenderingMeshStage; Vk < zk.length; Vk++) {
          zk[Vk].action(this, kk, ak, Hk)
        }
        if (!wk || !Hk) return Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), this;
        const Jk = Ik || this;
        let xk;
        if (!jk.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const kk = Jk._getWorldMatrixDeterminant();
          xk = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), kk < 0 && (xk = xk === uk.c.ClockWiseSideOrientation ? uk.c.CounterClockWiseSideOrientation : uk.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = xk
        }
        const Pk = this._internalMeshDataInfo._effectiveMaterial._preBind(wk, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Tk.setDepthWrite(!0);
        const Kk = this._internalMeshDataInfo._effectiveMaterial,
          Qk = Kk.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Zk || this._bind(kk, Hk, Qk, !1);
        const sk = Jk.getWorldMatrix();
        Kk._storeEffectOnSubMeshes ? Kk.bindForSubMesh(sk, this, kk) : Kk.bind(sk, this);
        try {
          bk.e._BindAttachmentsForEffect(Tk, Hk) && (!Kk.backFaceCulling && Kk.separateCullingPass && (Tk.setState(!0, Kk.zOffset, !1, !Pk, Kk.cullBackFaces, Kk.stencil, Kk.zOffsetUnits), this._processRendering(this, kk, Hk, Qk, ak, Zk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Tk.setState(!0, Kk.zOffset, !1, Pk, Kk.cullBackFaces, Kk.stencil, Kk.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(kk)), this._processRendering(this, kk, Hk, Qk, ak, Zk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          bk.e._RestoreAttachments(Tk)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Vk = 0, zk = Xk._afterRenderingMeshStage; Vk < zk.length; Vk++) {
          zk[Vk].action(this, kk, ak, Hk)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Lk && (Lk.maxZ = qk, Xk.updateTransformMatrix(!0)), 2 !== Xk.performancePriority || jk.isFrozen || this._freeze(), this
      }
      _renderRunFollower(kk, Fk) {
        const Ik = this._scene,
          Xk = Ik._engine;
        if (Xk.isWebGPU || kk._mesh !== this || 0 !== this.instances.length || this.render !== Dk.prototype.render) return !1;
        const Tk = kk.Ue();
        if (!Tk || Tk !== Ik._cachedMaterial || void 0 === Tk._canBindRunFollower) return !1;
        const ik = kk._drawWrapper,
          yk = ik?.effect;
        if (!yk || yk !== Ik._cachedEffect || this.visibility !== Ik._cachedVisibility || ik._forceRebindOnNextCall) return !1;
        const lk = this.hasThinInstances;
        if (!lk && this._userInstancedBuffersStorage) return !1;
        if (!ik._wasPreviouslyReady || ik._wasPreviouslyUsingInstances !== lk) return !1;
        const ak = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Ik._isInIntermediateRendering() || 0 !== Ik._beforeRenderingMeshStage.length || 0 !== Ik._afterRenderingMeshStage.length || ak._onBeforeRenderObservable?.hasObservers() || ak._onBeforeBindObservable?.hasObservers() || ak._onAfterRenderObservable?.hasObservers()) return !1;
        const qk = this.occlusionType;
        if (void 0 !== qk && qk !== Gk.d.OCCLUSION_TYPE_NONE || !Tk._canBindRunFollower(Ik, Xk, this, kk, yk)) return !1;
        const Lk = this._internalAbstractMeshDataInfo,
          tk = Lk._isActiveIntermediate;
        tk ? Lk._isActiveIntermediate = !1 : Lk._isActive = !1;
        const Zk = Ik.activeCameras?.length ?? 0;
        (Zk > 1 && Ik.activeCamera === Ik.activeCameras[0] || Zk <= 1) && this._checkOcclusionQuery(!1);
        const jk = this._getInstancesRenderList(kk._id);
        if (jk.mustReturn) return !0;
        if (!lk && !jk.renderSelf[kk._id]) return tk ? Lk._isActiveIntermediate = !0 : Lk._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (ak._effectiveMaterial = Tk, Fk)
          if (1 === Tk.alphaModes.length) Xk.setAlphaMode(Tk.alphaMode);
          else
            for (let wk = 0; wk < Tk.alphaModes.length; wk++) {
              const kk = Tk.alphaModes[wk];
              Xk.setAlphaMode(void 0 !== kk ? kk : 2, !1, wk)
            }
        if (Tk.backFaceCulling || null !== Tk.sideOrientation || Tk._twoSidedLighting) {
          const kk = this._getWorldMatrixDeterminant();
          let Fk = Tk._getEffectiveOrientation(this);
          kk < 0 && (Fk = Fk === uk.c.ClockWiseSideOrientation ? uk.c.CounterClockWiseSideOrientation : uk.c.ClockWiseSideOrientation), ak._effectiveSideOrientation = Fk
        }
        Tk._preBind(ik, ak._effectiveSideOrientation), Tk.forceDepthWrite && Xk.setDepthWrite(!0);
        const ek = Tk.fillMode;
        return lk || this._bind(kk, yk, ek, !1), Tk._bindRunFollower(this.getWorldMatrix(), this, kk, yk), this._processRendering(this, kk, yk, ek, jk, lk, this._onBeforeDraw, Tk), Tk.unbind(), 2 === Ik.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Ek.l.MatricesWeightsKind) && (this.isVerticesDataPresent(Ek.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const kk = this.getVerticesData(Ek.l.MatricesWeightsKind),
          Fk = kk.length;
        for (let Ik = 0; Ik < Fk; Ik += 4) {
          const Fk = kk[Ik] + kk[Ik + 1] + kk[Ik + 2] + kk[Ik + 3];
          if (0 === Fk) kk[Ik] = 1;
          else {
            const Xk = 1 / Fk;
            kk[Ik] *= Xk, kk[Ik + 1] *= Xk, kk[Ik + 2] *= Xk, kk[Ik + 3] *= Xk
          }
        }
        this.setVerticesData(Ek.l.MatricesWeightsKind, kk)
      }
      _normalizeSkinWeightsAndExtra() {
        const kk = this.getVerticesData(Ek.l.MatricesWeightsExtraKind),
          Fk = this.getVerticesData(Ek.l.MatricesWeightsKind),
          Ik = Fk.length;
        for (let Xk = 0; Xk < Ik; Xk += 4) {
          let Ik = Fk[Xk] + Fk[Xk + 1] + Fk[Xk + 2] + Fk[Xk + 3];
          if (Ik += kk[Xk] + kk[Xk + 1] + kk[Xk + 2] + kk[Xk + 3], 0 === Ik) Fk[Xk] = 1;
          else {
            const Tk = 1 / Ik;
            Fk[Xk] *= Tk, Fk[Xk + 1] *= Tk, Fk[Xk + 2] *= Tk, Fk[Xk + 3] *= Tk, kk[Xk] *= Tk, kk[Xk + 1] *= Tk, kk[Xk + 2] *= Tk, kk[Xk + 3] *= Tk
          }
        }
        this.setVerticesData(Ek.l.MatricesWeightsKind, Fk), this.setVerticesData(Ek.l.MatricesWeightsKind, kk)
      }
      validateSkinning() {
        const kk = this.getVerticesData(Ek.l.MatricesWeightsExtraKind),
          Fk = this.getVerticesData(Ek.l.MatricesWeightsKind);
        if (null === Fk || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Mj: "not skinned"
        };
        const Ik = Fk.length;
        let Xk = 0,
          Tk = 0,
          ik = 0,
          yk = 0;
        const lk = null === kk ? 4 : 8,
          ak = [];
        for (let jk = 0; jk <= lk; jk++) ak[jk] = 0;
        for (let jk = 0; jk < Ik; jk += 4) {
          let Ik = Fk[jk],
            qk = Ik,
            Lk = 0 === qk ? 0 : 1;
          for (let Tk = 1; Tk < lk; Tk++) {
            const ik = Tk < 4 ? Fk[jk + Tk] : kk[jk + Tk - 4];
            ik > Ik && Xk++, 0 !== ik && Lk++, qk += ik, Ik = ik
          }
          if (ak[Lk]++, Lk > ik && (ik = Lk), 0 === qk) Tk++;
          else {
            const Ik = 1 / qk;
            let Xk = 0;
            for (let Tk = 0; Tk < lk; Tk++) Xk += Tk < 4 ? Math.abs(Fk[jk + Tk] - Fk[jk + Tk] * Ik) : Math.abs(kk[jk + Tk - 4] - kk[jk + Tk - 4] * Ik);
            Xk > .001 && yk++
          }
        }
        const qk = this.skeleton.bones.length,
          Lk = this.getVerticesData(Ek.l.MatricesIndicesKind),
          tk = this.getVerticesData(Ek.l.MatricesIndicesExtraKind);
        let Zk = 0;
        for (let jk = 0; jk < Ik; jk += 4)
          for (let kk = 0; kk < lk; kk++) {
            const Fk = kk < 4 ? Lk[jk + kk] : tk[jk + kk - 4];
            (Fk >= qk || Fk < 0) && Zk++
          }
        return {
          skinned: !0,
          valid: 0 === Tk && 0 === yk && 0 === Zk,
          Mj: "Number of Weights = " + Ik / 4 + "\nMaximum influences = " + ik + "\nMissing Weights = " + Tk + "\nNot Sorted = " + Xk + "\nNot Normalized = " + yk + "\nWeightCounts = [" + ak + "]\nNumber of bones = " + qk + "\nBad Bone Indices = " + Zk
        }
      }
      _checkDelayState() {
        const kk = this.mG();
        return this._geometry ? this._geometry.load(kk) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(kk)), this
      }
      _queueLoad(kk) {
        kk.addPendingData(this);
        const Fk = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const Ik = await kk._loadDelayedFileAsync(this.delayLoadingFile, Fk, !0);
            Ik instanceof ArrayBuffer ? this._delayLoadingFunction(Ik, this) : this._delayLoadingFunction(JSON.parse(Ik), this);
            for (const kk of this.instances) kk.refreshBoundingInfo(), kk._syncSubMeshes();
            this.delayLoadState = 1, kk.removePendingData(this)
          } catch (Ik) {
            kk.removePendingData(this), kk.Hs || Nk.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Ik}`)
          }
        })(), this
      }
      isInFrustum(kk) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(kk) && (this._checkDelayState(), !0))
      }
      setMaterialById(kk) {
        const Fk = this.mG().materials;
        let Ik;
        for (Ik = Fk.length - 1; Ik > -1; Ik--)
          if (Fk[Ik].id === kk) return this.material = Fk[Ik], this;
        const Xk = this.mG().multiMaterials;
        for (Ik = Xk.length - 1; Ik > -1; Ik--)
          if (Xk[Ik].id === kk) return this.material = Xk[Ik], this;
        return this
      }
      getAnimatables() {
        const kk = [];
        return this.material && kk.push(this.material), this.skeleton && kk.push(this.skeleton), kk
      }
      bakeTransformIntoVertices(kk) {
        if (!this.isVerticesDataPresent(Ek.l.PositionKind)) return this;
        const Fk = this.lK.splice(0);
        this._resetPointsArrayCache();
        let Ik = this.getVerticesData(Ek.l.PositionKind);
        const Xk = zk.t.Zero();
        let Tk;
        for (Tk = 0; Tk < Ik.length; Tk += 3) zk.t.TransformCoordinatesFromFloatsToRef(Ik[Tk], Ik[Tk + 1], Ik[Tk + 2], kk, Xk).toArray(Ik, Tk);
        if (this.setVerticesData(Ek.l.PositionKind, Ik, this.getVertexBuffer(Ek.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(Ek.l.NormalKind)) {
          for (Ik = this.getVerticesData(Ek.l.NormalKind), Tk = 0; Tk < Ik.length; Tk += 3) zk.t.TransformNormalFromFloatsToRef(Ik[Tk], Ik[Tk + 1], Ik[Tk + 2], kk, Xk).normalize().toArray(Ik, Tk);
          this.setVerticesData(Ek.l.NormalKind, Ik, this.getVertexBuffer(Ek.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Ek.l.TangentKind)) {
          for (Ik = this.getVerticesData(Ek.l.TangentKind), Tk = 0; Tk < Ik.length; Tk += 4) zk.t.TransformNormalFromFloatsToRef(Ik[Tk], Ik[Tk + 1], Ik[Tk + 2], kk, Xk).normalize().toArray(Ik, Tk);
          this.setVerticesData(Ek.l.TangentKind, Ik, this.getVertexBuffer(Ek.l.TangentKind).isUpdatable())
        }
        return kk.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.lK = Fk, this
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
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Fk && void 0 === Fk._addToSceneRootNodes) {
          const Ik = Fk;
          return rk.source = this, rk.doNotCloneChildren = Ik.doNotCloneChildren, rk.clonePhysicsImpostor = Ik.clonePhysicsImpostor, rk.cloneThinInstances = Ik.cloneThinInstances, new Dk(kk, this.mG(), rk)
        }
        return new Dk(kk, this.mG(), Fk, this, Ik, Xk)
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const Ik = this._internalMeshDataInfo;
        if (Ik._onBeforeDrawObservable && Ik._onBeforeDrawObservable.clear(), Ik._onBeforeBindObservable && Ik._onBeforeBindObservable.clear(), Ik._onBeforeRenderObservable && Ik._onBeforeRenderObservable.clear(), Ik._onAfterRenderObservable && Ik._onAfterRenderObservable.clear(), Ik._onBetweenPassObservable && Ik._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (Ik.meshMap)
            for (const kk in Ik.meshMap) {
              const Fk = Ik.meshMap[kk];
              Fk && (Fk._internalMeshDataInfo._source = null, Ik.meshMap[kk] = void 0)
            }
          Ik._source && Ik._source._internalMeshDataInfo.meshMap && (Ik._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const kk = this.mG().meshes;
          for (const Fk of kk) {
            const kk = Fk;
            kk._internalMeshDataInfo && kk._internalMeshDataInfo._source && kk._internalMeshDataInfo._source === this && (kk._internalMeshDataInfo._source = null)
          }
        }
        Ik._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(kk, Fk)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          lk = arguments.length > 7 ? arguments[7] : void 0;
        const ak = this.mG();
        return (0, Pk.t)(kk, (kk => {
          const lk = kk.width,
            ak = kk.height,
            qk = this.Oe().createCanvas(lk, ak).getContext("2d");
          qk.drawImage(kk, 0, 0);
          const Lk = qk.getImageData(0, 0, lk, ak).data;
          this.applyDisplacementMapFromBuffer(Lk, lk, ak, Fk, Ik, Tk, ik, yk), Xk && Xk(this)
        }), lk || (() => {}), ak.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Ek.l.PositionKind) || !this.isVerticesDataPresent(Ek.l.NormalKind) || !this.isVerticesDataPresent(Ek.l.UVKind)) return Nk.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const ak = this.getVerticesData(Ek.l.PositionKind, !0, !0),
          qk = this.getVerticesData(Ek.l.NormalKind),
          Lk = this.getVerticesData(Ek.l.UVKind);
        let tk = zk.t.Zero();
        const Zk = zk.t.Zero(),
          jk = zk.p.Zero();
        ik = ik || zk.p.Zero(), yk = yk || new zk.p(1, 1);
        for (let ek = 0; ek < ak.length; ek += 3) {
          zk.t.FromArrayToRef(ak, ek, tk), zk.t.FromArrayToRef(qk, ek, Zk), zk.p.FromArrayToRef(Lk, ek / 3 * 2, jk);
          const lk = 4 * ((Math.abs(jk.x * yk.x + ik.x % 1) * (Fk - 1) % Fk | 0) + (Math.abs(jk.y * yk.y + ik.y % 1) * (Ik - 1) % Ik | 0) * Fk),
            wk = .3 * (kk[lk] / 255) + .59 * (kk[lk + 1] / 255) + .11 * (kk[lk + 2] / 255);
          Zk.normalize(), Zk.scaleInPlace(Xk + (Tk - Xk) * wk), tk = tk.add(Zk), tk.toArray(ak, ek)
        }
        return Ok.c.ComputeNormals(ak, this.yXk(), qk), lk ? (this.setVerticesData(Ek.l.PositionKind, ak), this.setVerticesData(Ek.l.NormalKind, qk), this.setVerticesData(Ek.l.UVKind, Lk)) : (this.updateVerticesData(Ek.l.PositionKind, ak), this.updateVerticesData(Ek.l.NormalKind, qk)), this
      }
      _getFlattenedNormals(kk, Fk) {
        const Ik = new Float32Array(3 * kk.length);
        let Xk = 0;
        const Tk = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let ik = 0; ik < kk.length; ik += 3) {
          const yk = zk.t.FromArray(Fk, 3 * kk[ik]),
            lk = zk.t.FromArray(Fk, 3 * kk[ik + 1]),
            ak = zk.t.FromArray(Fk, 3 * kk[ik + 2]),
            qk = yk.subtract(lk),
            Lk = ak.subtract(lk),
            tk = zk.t.Normalize(zk.t.Cross(qk, Lk));
          Tk && tk.scaleInPlace(-1);
          for (let kk = 0; kk < 3; kk++) Ik[Xk++] = tk.x, Ik[Xk++] = tk.y, Ik[Xk++] = tk.z
        }
        return Ik
      }
      _convertToUnIndexedMesh() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = this.getVerticesDataKinds().filter((kk => !this.getVertexBuffer(kk)?.getIsInstanced())),
          Ik = this.yXk(!1, !0),
          Xk = {},
          Tk = (kk, Fk) => {
            const Xk = new Float32Array(Ik.length * Fk);
            let Tk = 0;
            for (let ik = 0; ik < Ik.length; ik++)
              for (let yk = 0; yk < Fk; yk++) Xk[Tk++] = kk[Ik[ik] * Fk + yk];
            return Xk
          },
          ik = this.vR(),
          yk = this.geometry ? this.lK.slice(0) : [];
        for (const lk of Fk) Xk[lk] = this.getVerticesData(lk);
        for (const lk of Fk) {
          const Fk = this.getVertexBuffer(lk),
            ik = Fk.getSize();
          if (kk && lk === Ek.l.NormalKind) {
            const kk = this._getFlattenedNormals(Ik, Xk[Ek.l.PositionKind]);
            this.setVerticesData(Ek.l.NormalKind, kk, Fk.isUpdatable(), ik)
          } else this.setVerticesData(lk, Tk(Xk[lk], ik), Fk.isUpdatable(), ik)
        }
        if (this.morphTargetManager) {
          for (let Fk = 0; Fk < this.morphTargetManager.numTargets; Fk++) {
            const Xk = this.morphTargetManager.getTarget(Fk),
              ik = Xk.getPositions();
            Xk.byk(Tk(ik, 3));
            const yk = Xk.getNormals();
            yk && Xk.setNormals(kk ? this._getFlattenedNormals(Ik, ik) : Tk(yk, 3));
            const lk = Xk.getTangents();
            lk && Xk.setTangents(Tk(lk, 3));
            const ak = Xk.getUVs();
            ak && Xk.setUVs(Tk(ak, 2));
            const qk = Xk.getColors();
            qk && Xk.setColors(Tk(qk, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let lk = 0; lk < Ik.length; lk++) Ik[lk] = lk;
        this.setIndices(Ik), this._unIndexed = !0, this.releaseSubMeshes();
        for (const lk of yk) {
          const kk = lk.vR();
          pk.b.AddToMesh(lk.materialIndex, lk.indexStart, lk.indexCount, lk.indexStart, lk.indexCount, this).setBoundingInfo(kk)
        }
        return this.setBoundingInfo(ik), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = Ok.c.ExtractFromMesh(this);
        let Ik;
        if (kk && this.isVerticesDataPresent(Ek.l.NormalKind) && Fk.normals) {
          for (Ik = 0; Ik < Fk.normals.length; Ik++) Fk.normals[Ik] *= -1;
          this.setVerticesData(Ek.l.NormalKind, Fk.normals, this.isVertexBufferUpdatable(Ek.l.NormalKind))
        }
        if (Fk.indices) {
          let kk;
          for (Ik = 0; Ik < Fk.indices.length; Ik += 3) kk = Fk.indices[Ik + 1], Fk.indices[Ik + 1] = Fk.indices[Ik + 2], Fk.indices[Ik + 2] = kk;
          this.setIndices(Fk.indices, null, this.isVertexBufferUpdatable(Ek.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Fk = Ok.c.ExtractFromMesh(this),
          Ik = Fk.indices && !Array.isArray(Fk.indices) && Array.from ? Array.from(Fk.indices) : Fk.indices,
          Xk = Fk.positions && !Array.isArray(Fk.positions) && Array.from ? Array.from(Fk.positions) : Fk.positions,
          Tk = Fk.uvs && !Array.isArray(Fk.uvs) && Array.from ? Array.from(Fk.uvs) : Fk.uvs,
          ik = Fk.normals && !Array.isArray(Fk.normals) && Array.from ? Array.from(Fk.normals) : Fk.normals;
        if (Ik && Xk) {
          Fk.indices = Ik, Fk.positions = Xk, Tk && (Fk.uvs = Tk), ik && (Fk.normals = ik);
          const yk = kk + 1,
            lk = [];
          for (let kk = 0; kk < yk + 1; kk++) lk[kk] = [];
          let ak, qk;
          const Lk = new zk.t(0, 0, 0),
            tk = new zk.t(0, 0, 0),
            Zk = new zk.p(0, 0),
            jk = [],
            ek = [],
            wk = [];
          let Hk, Jk, xk, Pk = Xk.length;
          Tk && (Jk = Tk.length), ik && (xk = ik.length);
          for (let kk = 0; kk < Ik.length; kk += 3) {
            ek[0] = Ik[kk], ek[1] = Ik[kk + 1], ek[2] = Ik[kk + 2];
            for (let kk = 0; kk < 3; kk++)
              if (ak = ek[kk], qk = ek[(kk + 1) % 3], void 0 === wk[ak] && void 0 === wk[qk] ? (wk[ak] = [], wk[qk] = []) : (void 0 === wk[ak] && (wk[ak] = []), void 0 === wk[qk] && (wk[qk] = [])), void 0 === wk[ak][qk] && void 0 === wk[qk][ak]) {
                wk[ak][qk] = [], Lk.x = (Xk[3 * qk] - Xk[3 * ak]) / yk, Lk.y = (Xk[3 * qk + 1] - Xk[3 * ak + 1]) / yk, Lk.z = (Xk[3 * qk + 2] - Xk[3 * ak + 2]) / yk, ik && (tk.x = (ik[3 * qk] - ik[3 * ak]) / yk, tk.y = (ik[3 * qk + 1] - ik[3 * ak + 1]) / yk, tk.z = (ik[3 * qk + 2] - ik[3 * ak + 2]) / yk), Tk && (Zk.x = (Tk[2 * qk] - Tk[2 * ak]) / yk, Zk.y = (Tk[2 * qk + 1] - Tk[2 * ak + 1]) / yk), wk[ak][qk].push(ak);
                for (let kk = 1; kk < yk; kk++) wk[ak][qk].push(Xk.length / 3), Xk[Pk++] = Xk[3 * ak] + kk * Lk.x, Xk[Pk++] = Xk[3 * ak + 1] + kk * Lk.y, Xk[Pk++] = Xk[3 * ak + 2] + kk * Lk.z, ik && (ik[xk++] = ik[3 * ak] + kk * tk.x, ik[xk++] = ik[3 * ak + 1] + kk * tk.y, ik[xk++] = ik[3 * ak + 2] + kk * tk.z), Tk && (Tk[Jk++] = Tk[2 * ak] + kk * Zk.x, Tk[Jk++] = Tk[2 * ak + 1] + kk * Zk.y);
                wk[ak][qk].push(qk), wk[qk][ak] = [], Hk = wk[ak][qk].length;
                for (let kk = 0; kk < Hk; kk++) wk[qk][ak][kk] = wk[ak][qk][Hk - 1 - kk]
              } lk[0][0] = Ik[kk], lk[1][0] = wk[Ik[kk]][Ik[kk + 1]][1], lk[1][1] = wk[Ik[kk]][Ik[kk + 2]][1];
            for (let Fk = 2; Fk < yk; Fk++) {
              lk[Fk][0] = wk[Ik[kk]][Ik[kk + 1]][Fk], lk[Fk][Fk] = wk[Ik[kk]][Ik[kk + 2]][Fk], Lk.x = (Xk[3 * lk[Fk][Fk]] - Xk[3 * lk[Fk][0]]) / Fk, Lk.y = (Xk[3 * lk[Fk][Fk] + 1] - Xk[3 * lk[Fk][0] + 1]) / Fk, Lk.z = (Xk[3 * lk[Fk][Fk] + 2] - Xk[3 * lk[Fk][0] + 2]) / Fk, ik && (tk.x = (ik[3 * lk[Fk][Fk]] - ik[3 * lk[Fk][0]]) / Fk, tk.y = (ik[3 * lk[Fk][Fk] + 1] - ik[3 * lk[Fk][0] + 1]) / Fk, tk.z = (ik[3 * lk[Fk][Fk] + 2] - ik[3 * lk[Fk][0] + 2]) / Fk), Tk && (Zk.x = (Tk[2 * lk[Fk][Fk]] - Tk[2 * lk[Fk][0]]) / Fk, Zk.y = (Tk[2 * lk[Fk][Fk] + 1] - Tk[2 * lk[Fk][0] + 1]) / Fk);
              for (let kk = 1; kk < Fk; kk++) lk[Fk][kk] = Xk.length / 3, Xk[Pk++] = Xk[3 * lk[Fk][0]] + kk * Lk.x, Xk[Pk++] = Xk[3 * lk[Fk][0] + 1] + kk * Lk.y, Xk[Pk++] = Xk[3 * lk[Fk][0] + 2] + kk * Lk.z, ik && (ik[xk++] = ik[3 * lk[Fk][0]] + kk * tk.x, ik[xk++] = ik[3 * lk[Fk][0] + 1] + kk * tk.y, ik[xk++] = ik[3 * lk[Fk][0] + 2] + kk * tk.z), Tk && (Tk[Jk++] = Tk[2 * lk[Fk][0]] + kk * Zk.x, Tk[Jk++] = Tk[2 * lk[Fk][0] + 1] + kk * Zk.y)
            }
            lk[yk] = wk[Ik[kk + 1]][Ik[kk + 2]], jk.push(lk[0][0], lk[1][0], lk[1][1]);
            for (let kk = 1; kk < yk; kk++) {
              let Fk;
              for (Fk = 0; Fk < kk; Fk++) jk.push(lk[kk][Fk], lk[kk + 1][Fk], lk[kk + 1][Fk + 1]), jk.push(lk[kk][Fk], lk[kk + 1][Fk + 1], lk[kk][Fk + 1]);
              jk.push(lk[kk][Fk], lk[kk + 1][Fk], lk[kk + 1][Fk + 1])
            }
          }
          Fk.indices = jk, Fk.applyToMesh(this, this.isVertexBufferUpdatable(Ek.l.PositionKind))
        } else Nk.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const kk = Ok.c.ExtractFromMesh(this),
          Fk = kk.uvs,
          Ik = kk.indices,
          Xk = kk.positions,
          Tk = kk.colors,
          ik = kk.matricesIndices,
          yk = kk.matricesWeights,
          lk = kk.matricesIndicesExtra,
          ak = kk.matricesWeightsExtra;
        if (void 0 === Ik || void 0 === Xk || null === Ik || null === Xk) Nk.e.Warn("VertexData contains empty entries");
        else {
          const qk = [],
            Lk = [],
            tk = [],
            Zk = [],
            jk = [],
            ek = [],
            wk = [],
            Hk = [];
          let Jk, xk = 0;
          const Pk = {};
          let Kk, Qk;
          for (let kk = 0; kk < Ik.length; kk += 3) {
            Qk = [Ik[kk], Ik[kk + 1], Ik[kk + 2]], Jk = [];
            for (let kk = 0; kk < 3; kk++) {
              Jk[kk] = "";
              for (let Fk = 0; Fk < 3; Fk++) Math.abs(Xk[3 * Qk[kk] + Fk]) < 1e-8 && (Xk[3 * Qk[kk] + Fk] = 0), Jk[kk] += Xk[3 * Qk[kk] + Fk] + "|"
            }
            if (Jk[0] != Jk[1] && Jk[0] != Jk[2] && Jk[1] != Jk[2])
              for (let kk = 0; kk < 3; kk++) {
                if (Kk = Pk[Jk[kk]], void 0 === Kk) {
                  Pk[Jk[kk]] = xk, Kk = xk++;
                  for (let Fk = 0; Fk < 3; Fk++) qk.push(Xk[3 * Qk[kk] + Fk]);
                  if (null !== Tk && void 0 !== Tk)
                    for (let Fk = 0; Fk < 4; Fk++) Zk.push(Tk[4 * Qk[kk] + Fk]);
                  if (null !== Fk && void 0 !== Fk)
                    for (let Ik = 0; Ik < 2; Ik++) tk.push(Fk[2 * Qk[kk] + Ik]);
                  if (null !== ik && void 0 !== ik)
                    for (let Fk = 0; Fk < 4; Fk++) jk.push(ik[4 * Qk[kk] + Fk]);
                  if (null !== yk && void 0 !== yk)
                    for (let Fk = 0; Fk < 4; Fk++) ek.push(yk[4 * Qk[kk] + Fk]);
                  if (null !== lk && void 0 !== lk)
                    for (let Fk = 0; Fk < 4; Fk++) wk.push(lk[4 * Qk[kk] + Fk]);
                  if (null !== ak && void 0 !== ak)
                    for (let Fk = 0; Fk < 4; Fk++) Hk.push(ak[4 * Qk[kk] + Fk])
                }
                Lk.push(Kk)
              }
          }
          const sk = [];
          Ok.c.ComputeNormals(qk, Lk, sk), kk.positions = qk, kk.indices = Lk, kk.normals = sk, null !== Fk && void 0 !== Fk && (kk.uvs = tk), null !== Tk && void 0 !== Tk && (kk.colors = Zk), null !== ik && void 0 !== ik && (kk.matricesIndices = jk), null !== yk && void 0 !== yk && (kk.matricesWeights = ek), null !== lk && void 0 !== lk && (kk.matricesIndicesExtra = wk), null !== yk && void 0 !== yk && (kk.matricesWeightsExtra = Hk), kk.applyToMesh(this, this.isVertexBufferUpdatable(Ek.l.PositionKind))
        }
      }
      static _instancedMeshFactory(kk, Fk) {
        throw (0, Wk.j)("InstancedMesh")
      }
      static _PhysicsImpostorParser(kk, Fk, Ik) {
        throw (0, Wk.j)("PhysicsImpostor")
      }
      createInstance(kk) {
        const Fk = Dk._instancedMeshFactory(kk, this);
        return Fk.parent = this.parent, Fk
      }
      synchronizeInstances() {
        for (let kk = 0; kk < this.instances.length; kk++) {
          this.instances[kk]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(kk) {
        const Fk = this.yXk(),
          Ik = this.getVerticesData(Ek.l.PositionKind);
        if (!Ik || !Fk) return this;
        const Xk = [];
        for (let ik = 0; ik < Ik.length; ik += 3) Xk.push(zk.t.FromArray(Ik, ik));
        const Tk = [];
        return xk.b.SyncAsyncForLoop(Xk.length, 40, (kk => {
          const Fk = Xk.length - 1 - kk,
            Ik = Xk[Fk];
          for (let ik = 0; ik < Fk; ++ik) {
            const kk = Xk[ik];
            if (Ik.equals(kk)) {
              Tk[Fk] = ik;
              break
            }
          }
        }), (() => {
          for (let kk = 0; kk < Fk.length; ++kk) Fk[kk] = Tk[Fk[kk]] || Fk[kk];
          const Ik = this.lK.slice(0);
          this.setIndices(Fk), this.lK = Ik, kk && kk(this)
        })), this
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), Qk.d && Qk.d.HasTags(this) && (kk.tags = Qk.d.GetTags(this)), kk.position = this.position.iXk(), this.rotationQuaternion ? kk.rotationQuaternion = this.rotationQuaternion.iXk() : this.rotation && (kk.rotation = this.rotation.iXk()), kk.ci = this.ci.iXk(), this._postMultiplyPivotMatrix ? kk.pivotMatrix = this.getPivotMatrix().iXk() : kk.localMatrix = this.getPivotMatrix().iXk(), kk.isEnabled = this.isEnabled(!1), kk.isVisible = this.isVisible, kk.infiniteDistance = this.infiniteDistance, kk.pickable = this.gw, kk.receiveShadows = this.receiveShadows, kk.billboardMode = this.billboardMode, kk.visibility = this.visibility, kk.ne = this.ne, kk.checkCollisions = this.checkCollisions, kk.ellipsoid = this.ellipsoid.iXk(), kk.ellipsoidOffset = this.ellipsoidOffset.iXk(), kk.ue = this.ue, kk.isBlocker = this.isBlocker, kk.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (kk.Xp = !0), this.parent && this.parent._serializeAsParent(kk), kk.isUnIndexed = this.isUnIndexed;
        const Fk = this._geometry;
        if (Fk && this.lK) {
          kk.geometryUniqueId = Fk.uniqueId, kk.geometryId = Fk.id, kk.lK = [];
          for (let Fk = 0; Fk < this.lK.length; Fk++) {
            const Ik = this.lK[Fk];
            kk.lK.push({
              materialIndex: Ik.materialIndex,
              verticesStart: Ik.verticesStart,
              verticesCount: Ik.verticesCount,
              indexStart: Ik.indexStart,
              indexCount: Ik.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (kk.materialUniqueId = this.material.uniqueId, kk.materialId = this.material.id) : (this.material = null, kk.materialUniqueId = this._scene.defaultMaterial.uniqueId, kk.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (kk.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (kk.skeletonId = this.skeleton.id, kk.skeletonUniqueId = this.skeleton.uniqueId, kk.numBoneInfluencers = this.numBoneInfluencers), this.mG()._getComponent(fk.b.NAME_PHYSICSENGINE)) {
          const Fk = this.getPhysicsImpostor?.();
          Fk && (kk.physicsMass = Fk.getParam("Xq"), kk.physicsFriction = Fk.getParam("friction"), kk.physicsRestitution = Fk.getParam("Xq"), kk.physicsImpostor = Fk.type)
        }
        this.metadata && (kk.metadata = this.metadata), 0 !== this.meshBlendingTag && (kk.meshBlendingTag = this.meshBlendingTag), kk.instances = [];
        for (let Ik = 0; Ik < this.instances.length; Ik++) {
          const Fk = this.instances[Ik];
          if (Fk.doNotSerialize) continue;
          const Xk = {
            name: Fk.name,
            id: Fk.id,
            isEnabled: Fk.isEnabled(!1),
            isVisible: Fk.isVisible,
            gw: Fk.gw,
            checkCollisions: Fk.checkCollisions,
            position: Fk.position.iXk(),
            ci: Fk.ci.iXk()
          };
          if (Fk.parent && Fk.parent._serializeAsParent(Xk), Fk.rotationQuaternion ? Xk.rotationQuaternion = Fk.rotationQuaternion.iXk() : Fk.rotation && (Xk.rotation = Fk.rotation.iXk()), this.mG()._getComponent(fk.b.NAME_PHYSICSENGINE)) {
            const kk = Fk.getPhysicsImpostor?.();
            kk && (Xk.physicsMass = kk.getParam("Xq"), Xk.physicsFriction = kk.getParam("friction"), Xk.physicsRestitution = kk.getParam("Xq"), Xk.physicsImpostor = kk.type)
          }
          Fk.metadata && (Xk.metadata = Fk.metadata), Fk.actionManager && (Xk.actions = Fk.actionManager.serialize(Fk.name)), kk.instances.push(Xk), Ck.b.AppendSerializedAnimations(Fk, Xk), Xk.nZ = Fk.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (kk.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.vFk
          }, this._userThinInstanceBuffersStorage)) {
          const Fk = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const kk in this._userThinInstanceBuffersStorage.data) Fk.data[kk] = Array.from(this._userThinInstanceBuffersStorage.data[kk]), Fk.sizes[kk] = this._userThinInstanceBuffersStorage.sizes[kk], Fk.strides[kk] = this._userThinInstanceBuffersStorage.strides[kk];
          kk.thinInstances.userThinInstance = Fk
        }
        return Ck.b.AppendSerializedAnimations(this, kk), kk.nZ = this.serializeAnimationRanges(), kk.layerMask = this.layerMask, kk.alphaIndex = this.alphaIndex, kk.hasVertexAlpha = this.hasVertexAlpha, kk.overlayAlpha = this.overlayAlpha, kk.overlayColor = this.overlayColor.iXk(), kk.renderOverlay = this.renderOverlay, kk.applyFog = this.applyFog, this.actionManager && (kk.actions = this.actionManager.serialize(this.name)), kk
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const kk = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (kk && kk.vertexCount) {
          if (kk.vertexCount !== this.getTotalVertices()) return Nk.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (kk.isUsingTextureForTargets) return;
          for (let Fk = 0; Fk < kk.numInfluencers; Fk++) {
            const Ik = kk.getActiveTarget(Fk),
              Xk = Ik.getPositions();
            if (!Xk) return void Nk.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Ek.l.PositionKind + Fk, Xk, !1, 3);
            const Tk = Ik.getNormals();
            Tk && this.geometry.setVerticesData(Ek.l.NormalKind + Fk, Tk, !1, 3);
            const ik = Ik.getTangents();
            ik && this.geometry.setVerticesData(Ek.l.TangentKind + Fk, ik, !1, 3);
            const yk = Ik.getUVs();
            yk && this.geometry.setVerticesData(Ek.l.UVKind + "_" + Fk, yk, !1, 2);
            const lk = Ik.getUV2s();
            lk && this.geometry.setVerticesData(Ek.l.UV2Kind + "_" + Fk, lk, !1, 2);
            const ak = Ik.getColors();
            ak && this.geometry.setVerticesData(Ek.l.ColorKind + Fk, ak, !1, 4)
          }
        } else {
          let kk = 0;
          for (; this.geometry.isVerticesDataPresent(Ek.l.PositionKind + kk);) this.geometry.removeVerticesData(Ek.l.PositionKind + kk), this.geometry.isVerticesDataPresent(Ek.l.NormalKind + kk) && this.geometry.removeVerticesData(Ek.l.NormalKind + kk), this.geometry.isVerticesDataPresent(Ek.l.TangentKind + kk) && this.geometry.removeVerticesData(Ek.l.TangentKind + kk), this.geometry.isVerticesDataPresent(Ek.l.UVKind + "_" + kk) && this.geometry.removeVerticesData(Ek.l.UVKind + "_" + kk), this.geometry.isVerticesDataPresent(Ek.l.UV2Kind + "_" + kk) && this.geometry.removeVerticesData(Ek.l.UV2Kind + "_" + kk), this.geometry.isVerticesDataPresent(Ek.l.ColorKind + kk) && this.geometry.removeVerticesData(Ek.l.ColorKind + kk), kk++
        }
      }
      static Parse(kk, Fk, Ik) {
        let Xk, Tk = !1;
        if (kk.type && "LinesMesh" === kk.type ? Xk = Dk._LinesMeshParser(kk, Fk) : kk.type && "GroundMesh" === kk.type ? Xk = Dk._GroundMeshParser(kk, Fk) : kk.type && "GoldbergMesh" === kk.type ? Xk = Dk._GoldbergMeshParser(kk, Fk) : kk.type && "GreasedLineMesh" === kk.type ? Xk = Dk._GreasedLineMeshParser(kk, Fk) : kk.type && "TrailMesh" === kk.type ? Xk = Dk._TrailMeshParser(kk, Fk) : kk.type && "GaussianSplattingMesh" === kk.type ? (Xk = kk._isCompound ? Dk._GaussianSplattingCompoundMeshParser(kk, Fk) : Dk._GaussianSplattingMeshParser(kk, Fk), Tk = !0) : kk.type && "GaussianSplattingPartProxyMesh" === kk.type ? (Xk = Dk._GaussianSplattingPartProxyMeshParser(kk, Fk), Tk = !0) : Xk = new Dk(kk.name, Fk), Xk.id = kk.id, Xk._waitingParsedUniqueId = kk.uniqueId, Qk.d && Qk.d.AddTagsTo(Xk, kk.tags), Xk.position = zk.t.FromArray(kk.position), void 0 !== kk.metadata && (Xk.metadata = kk.metadata), void 0 !== kk.meshBlendingTag && (Xk.meshBlendingTag = kk.meshBlendingTag), kk.rotationQuaternion ? Xk.rotationQuaternion = zk.f.FromArray(kk.rotationQuaternion) : kk.rotation && (Xk.rotation = zk.t.FromArray(kk.rotation)), Xk.ci = zk.t.FromArray(kk.ci), kk.localMatrix ? Xk.setPreTransformMatrix(zk.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Xk.setPivotMatrix(zk.c.FromArray(kk.pivotMatrix)), Xk.Av(kk.isEnabled), Xk.isVisible = kk.isVisible, Xk.infiniteDistance = kk.infiniteDistance, Xk.ne = !!kk.ne, Xk.showBoundingBox = kk.showBoundingBox, Xk.showSubMeshesBoundingBox = kk.showSubMeshesBoundingBox, void 0 !== kk.applyFog && (Xk.applyFog = kk.applyFog), void 0 !== kk.pickable && (Xk.gw = kk.pickable), void 0 !== kk.alphaIndex && (Xk.alphaIndex = kk.alphaIndex), Xk.receiveShadows = kk.receiveShadows, void 0 !== kk.billboardMode && (Xk.billboardMode = kk.billboardMode), void 0 !== kk.visibility && (Xk.visibility = kk.visibility), Xk.checkCollisions = kk.checkCollisions, Xk.ue = !!kk.ue, kk.ellipsoid && (Xk.ellipsoid = zk.t.FromArray(kk.ellipsoid)), kk.ellipsoidOffset && (Xk.ellipsoidOffset = zk.t.FromArray(kk.ellipsoidOffset)), null != kk.overrideMaterialSideOrientation && (Xk.sideOrientation = kk.overrideMaterialSideOrientation), void 0 !== kk.sideOrientation && (Xk.sideOrientation = kk.sideOrientation), void 0 !== kk.isBlocker && (Xk.isBlocker = kk.isBlocker), Xk._shouldGenerateFlatShading = kk.useFlatShading, kk.Xp && (Xk._waitingData.Xp = kk.Xp), void 0 !== kk.parentId && (Xk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Xk._waitingParentInstanceIndex = kk.parentInstanceIndex), void 0 !== kk.actions && (Xk._waitingData.actions = kk.actions), void 0 !== kk.overlayAlpha && (Xk.overlayAlpha = kk.overlayAlpha), void 0 !== kk.overlayColor && (Xk.overlayColor = Sk.e.FromArray(kk.overlayColor)), void 0 !== kk.renderOverlay && (Xk.renderOverlay = kk.renderOverlay), Xk.isUnIndexed = !!kk.isUnIndexed, Xk.hasVertexAlpha = kk.hasVertexAlpha, kk.delayLoadingFile ? (Xk.delayLoadState = 4, Xk.delayLoadingFile = Ik + kk.delayLoadingFile, Xk.buildBoundingInfo(zk.t.FromArray(kk.boundingBoxMinimum), zk.t.FromArray(kk.boundingBoxMaximum)), kk._binaryInfo && (Xk._binaryInfo = kk._binaryInfo), Xk._delayInfo = [], kk.hasUVs && Xk._delayInfo.push(Ek.l.UVKind), kk.hasUVs2 && Xk._delayInfo.push(Ek.l.UV2Kind), kk.hasUVs3 && Xk._delayInfo.push(Ek.l.UV3Kind), kk.hasUVs4 && Xk._delayInfo.push(Ek.l.UV4Kind), kk.hasUVs5 && Xk._delayInfo.push(Ek.l.UV5Kind), kk.hasUVs6 && Xk._delayInfo.push(Ek.l.UV6Kind), kk.hasColors && Xk._delayInfo.push(Ek.l.ColorKind), kk.hasMatricesIndices && Xk._delayInfo.push(Ek.l.MatricesIndicesKind), kk.hasMatricesWeights && Xk._delayInfo.push(Ek.l.MatricesWeightsKind), Xk._delayLoadingFunction = nk.d._ImportGeometry, Uk.b.ForceFullSceneLoadingForIncremental && Xk._checkDelayState()) : Tk || nk.d._ImportGeometry(kk, Xk), kk.materialUniqueId ? Xk._waitingMaterialId = kk.materialUniqueId : kk.materialId && (Xk._waitingMaterialId = kk.materialId), kk.morphTargetManagerId > -1 && (Xk._waitingMorphTargetManagerId = kk.morphTargetManagerId), void 0 !== kk.skeletonId && null !== kk.skeletonId && (Xk.skeleton = Fk.getLastSkeletonById(kk.skeletonId), Xk._waitingSkeletonId = kk.skeletonId, kk.numBoneInfluencers && (Xk.numBoneInfluencers = kk.numBoneInfluencers)), void 0 !== kk.skeletonUniqueId && null !== kk.skeletonUniqueId && (Xk._waitingSkeletonUniqueId = kk.skeletonUniqueId), kk.animations) {
          for (let Fk = 0; Fk < kk.animations.length; Fk++) {
            const Ik = kk.animations[Fk],
              Tk = (0, ck.b)("BABYLON.Animation");
            Tk && Xk.animations.push(Tk.Parse(Ik))
          }
          vk.b.ParseAnimationRanges(Xk, kk, Fk)
        }
        if (kk.autoAnimate && Fk.beginAnimation(Xk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), kk.layerMask && !isNaN(kk.layerMask) ? Xk.layerMask = Math.abs(parseInt(kk.layerMask)) : Xk.layerMask = 268435455, kk.physicsImpostor && (Xk.physicsImpostor = Dk._PhysicsImpostorParser(Fk, Xk, kk)), kk.lodMeshIds && (Xk._waitingData.lods = {
            ids: kk.lodMeshIds,
            distances: kk.lodDistances ? kk.lodDistances : null,
            coverages: kk.lodCoverages ? kk.lodCoverages : null
          }), kk.instances)
          for (let ik = 0; ik < kk.instances.length; ik++) {
            const Ik = kk.instances[ik],
              Tk = Xk.createInstance(Ik.name);
            if (Ik.id && (Tk.id = Ik.id), Qk.d && (Ik.tags ? Qk.d.AddTagsTo(Tk, Ik.tags) : Qk.d.AddTagsTo(Tk, kk.tags)), Tk.position = zk.t.FromArray(Ik.position), void 0 !== Ik.metadata && (Tk.metadata = Ik.metadata), void 0 !== Ik.parentId && (Tk._waitingParentId = Ik.parentId), void 0 !== Ik.parentInstanceIndex && (Tk._waitingParentInstanceIndex = Ik.parentInstanceIndex), void 0 !== Ik.isEnabled && null !== Ik.isEnabled && Tk.Av(Ik.isEnabled), void 0 !== Ik.isVisible && null !== Ik.isVisible && (Tk.isVisible = Ik.isVisible), void 0 !== Ik.gw && null !== Ik.gw && (Tk.gw = Ik.gw), Ik.rotationQuaternion ? Tk.rotationQuaternion = zk.f.FromArray(Ik.rotationQuaternion) : Ik.rotation && (Tk.rotation = zk.t.FromArray(Ik.rotation)), Tk.ci = zk.t.FromArray(Ik.ci), void 0 != Ik.checkCollisions && null != Ik.checkCollisions && (Tk.checkCollisions = Ik.checkCollisions), void 0 != Ik.pickable && null != Ik.pickable && (Tk.gw = Ik.pickable), void 0 != Ik.showBoundingBox && null != Ik.showBoundingBox && (Tk.showBoundingBox = Ik.showBoundingBox), void 0 != Ik.showSubMeshesBoundingBox && null != Ik.showSubMeshesBoundingBox && (Tk.showSubMeshesBoundingBox = Ik.showSubMeshesBoundingBox), void 0 != Ik.alphaIndex && null != Ik.showSubMeshesBoundingBox && (Tk.alphaIndex = Ik.alphaIndex), Ik.physicsImpostor && (Tk.physicsImpostor = Dk._PhysicsImpostorParser(Fk, Tk, Ik)), void 0 !== Ik.actions && (Tk._waitingData.actions = Ik.actions), Ik.animations) {
              for (let kk = 0; kk < Ik.animations.length; kk++) {
                const Fk = Ik.animations[kk],
                  Xk = (0, ck.b)("BABYLON.Animation");
                Xk && Tk.animations.push(Xk.Parse(Fk))
              }
              vk.b.ParseAnimationRanges(Tk, Ik, Fk), Ik.autoAnimate && Fk.beginAnimation(Tk, Ik.autoAnimateFrom, Ik.autoAnimateTo, Ik.autoAnimateLoop, Ik.autoAnimateSpeed || 1)
            }
          }
        if (kk.thinInstances) {
          const Fk = kk.thinInstances;
          if (Xk.vFk = !!Fk.enablePicking, Fk.matrixData ? (Xk.K8("matrix", new Float32Array(Fk.matrixData), 16, !1), Xk._thinInstanceDataStorage.matrixBufferSize = Fk.matrixBufferSize, Xk._thinInstanceDataStorage.instancesCount = Fk.instancesCount) : Xk._thinInstanceDataStorage.matrixBufferSize = Fk.matrixBufferSize, kk.thinInstances.userThinInstance) {
            const Fk = kk.thinInstances.userThinInstance;
            for (const kk in Fk.data) Xk.K8(kk, new Float32Array(Fk.data[kk]), Fk.strides[kk], !1), Xk._userThinInstanceBuffersStorage.sizes[kk] = Fk.sizes[kk]
          }
        }
        return Xk
      }
      setPositionsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourcePositions) {
          const Fk = this.getVerticesData(Ek.l.PositionKind);
          if (!Fk) return kk._sourcePositions;
          kk._sourcePositions = new Float32Array(Fk), this.isVertexBufferUpdatable(Ek.l.PositionKind) || this.setVerticesData(Ek.l.PositionKind, Fk, !0)
        }
        return kk._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourceNormals) {
          const Fk = this.getVerticesData(Ek.l.NormalKind);
          if (!Fk) return kk._sourceNormals;
          kk._sourceNormals = new Float32Array(Fk), this.isVertexBufferUpdatable(Ek.l.NormalKind) || this.setVerticesData(Ek.l.NormalKind, Fk, !0)
        }
        return kk._sourceNormals
      }
      applySkeleton(kk) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.mG().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.mG().getFrameId(), !this.isVerticesDataPresent(Ek.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Ek.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Ek.l.MatricesWeightsKind)) return this;
        const Fk = this.isVerticesDataPresent(Ek.l.NormalKind),
          Ik = this._internalMeshDataInfo;
        if (!Ik._sourcePositions) {
          const kk = this.lK.slice();
          this.setPositionsForCPUSkinning(), this.lK = kk
        }
        Fk && !Ik._sourceNormals && this.setNormalsForCPUSkinning();
        let Xk = this.getVerticesData(Ek.l.PositionKind);
        if (!Xk) return this;
        Xk instanceof Float32Array || (Xk = new Float32Array(Xk));
        let Tk = this.getVerticesData(Ek.l.NormalKind);
        if (Fk) {
          if (!Tk) return this;
          Tk instanceof Float32Array || (Tk = new Float32Array(Tk))
        }
        const ik = this.getVerticesData(Ek.l.MatricesIndicesKind),
          yk = this.getVerticesData(Ek.l.MatricesWeightsKind);
        if (!yk || !ik) return this;
        const lk = this.numBoneInfluencers > 4,
          ak = lk ? this.getVerticesData(Ek.l.MatricesIndicesExtraKind) : null,
          qk = lk ? this.getVerticesData(Ek.l.MatricesWeightsExtraKind) : null,
          Lk = kk.getTransformMatrices(this),
          tk = zk.t.Zero(),
          Zk = new zk.c,
          jk = new zk.c;
        let ek, wk = 0;
        for (let Hk = 0; Hk < Xk.length; Hk += 3, wk += 4) {
          let kk;
          for (ek = 0; ek < 4; ek++) kk = yk[wk + ek], kk > 0 && (zk.c.FromFloat32ArrayToRefScaled(Lk, Math.floor(16 * ik[wk + ek]), kk, jk), Zk.addToSelf(jk));
          if (lk)
            for (ek = 0; ek < 4; ek++) kk = qk[wk + ek], kk > 0 && (zk.c.FromFloat32ArrayToRefScaled(Lk, Math.floor(16 * ak[wk + ek]), kk, jk), Zk.addToSelf(jk));
          zk.t.TransformCoordinatesFromFloatsToRef(Ik._sourcePositions[Hk], Ik._sourcePositions[Hk + 1], Ik._sourcePositions[Hk + 2], Zk, tk), tk.toArray(Xk, Hk), Fk && (zk.t.TransformNormalFromFloatsToRef(Ik._sourceNormals[Hk], Ik._sourceNormals[Hk + 1], Ik._sourceNormals[Hk + 2], Zk, tk), tk.toArray(Tk, Hk)), Zk.reset()
        }
        return this.updateVerticesData(Ek.l.PositionKind, Xk), Fk && this.updateVerticesData(Ek.l.NormalKind, Tk), this
      }
      static MinMax(kk) {
        let Fk = null,
          Ik = null;
        for (const Xk of kk) {
          const kk = Xk.vR().boundingBox;
          Fk && Ik ? (Fk.minimizeInPlace(kk.minimumWorld), Ik.maximizeInPlace(kk.maximumWorld)) : (Fk = kk.minimumWorld.clone(), Ik = kk.maximumWorld.clone())
        }
        return Fk && Ik ? {
          min: Fk,
          max: Ik
        } : {
          min: zk.t.Zero(),
          max: zk.t.Zero()
        }
      }
      static Center(kk) {
        const Fk = kk instanceof Array ? Dk.MinMax(kk) : kk;
        return zk.t.Center(Fk.min, Fk.max)
      }
      static MergeMeshes(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        return (0, sk.n)(Dk._MergeMeshesCoroutine(kk, Fk, Ik, Xk, Tk, ik, !1))
      }
      static async MergeMeshesAsync(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, sk.j)(Dk._MergeMeshesCoroutine(kk, Fk, Ik, Xk, Tk, ik, !0), (0, sk.e)())
      }
      static * _MergeMeshesCoroutine(kk) {
        let Fk, Ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Xk = arguments.length > 2 ? arguments[2] : void 0,
          Tk = arguments.length > 3 ? arguments[3] : void 0,
          ik = arguments.length > 4 ? arguments[4] : void 0,
          yk = arguments.length > 5 ? arguments[5] : void 0,
          lk = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (kk = kk.filter(Boolean)).length) return null;
        if (!Xk) {
          let Ik = 0;
          for (Fk = 0; Fk < kk.length; Fk++)
            if (Ik += kk[Fk].getTotalVertices(), Ik >= 65536) return Nk.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const ak = kk[0];
        yk && (ik = !1, kk.sort(((kk, Fk) => (kk.material?.uniqueId ?? -1) - (Fk.material?.uniqueId ?? -1))));
        const qk = new Array,
          Lk = new Array,
          tk = new Array,
          Zk = kk[0].sideOrientation;
        for (Fk = 0; Fk < kk.length; Fk++) {
          const Ik = kk[Fk];
          if (Ik.rG) return Nk.e.Warn("Cannot merge instance meshes."), null;
          if (Zk !== Ik.sideOrientation) return Nk.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (ik || yk) {
            const kk = tk.reduce(((kk, Fk) => Math.max(kk, Fk.start + Fk.count)), 0);
            if (yk)
              if (Ik.material) {
                const Fk = Ik.material;
                if (Fk instanceof Rk.c) {
                  for (let kk = 0; kk < Fk.W8.length; kk++) qk.indexOf(Fk.W8[kk]) < 0 && qk.push(Fk.W8[kk]);
                  for (let Xk = 0; Xk < Ik.lK.length; Xk++) Lk.push(qk.indexOf(Fk.W8[Ik.lK[Xk].materialIndex])), tk.push({
                    start: kk + Ik.lK[Xk].indexStart,
                    count: Ik.lK[Xk].indexCount
                  })
                } else {
                  qk.indexOf(Fk) < 0 && qk.push(Fk);
                  for (let Xk = 0; Xk < Ik.lK.length; Xk++) Lk.push(qk.indexOf(Fk)), tk.push({
                    start: kk + Ik.lK[Xk].indexStart,
                    count: Ik.lK[Xk].indexCount
                  })
                }
              } else
                for (let Fk = 0; Fk < Ik.lK.length; Fk++) Lk.push(0), tk.push({
                  start: kk + Ik.lK[Fk].indexStart,
                  count: Ik.lK[Fk].indexCount
                });
            else tk.push({
              start: kk,
              count: Ik.getTotalIndices()
            })
          }
        }
        if (yk && tk.length > 1) {
          let kk = 0;
          for (let Fk = 1; Fk < tk.length; Fk++) {
            const Ik = tk[kk],
              Xk = tk[Fk];
            Lk[Fk] === Lk[kk] && Ik.start + Ik.count === Xk.start ? Ik.count += Xk.count : (kk++, tk[kk] = Xk, Lk[kk] = Lk[Fk])
          }
          tk.length = kk + 1, Lk.length = kk + 1
        }
        const jk = kk => {
            const Fk = kk.computeWorldMatrix(!0);
            return {
              vertexData: Ok.c.ExtractFromMesh(kk, !1, !1),
              transform: Fk
            }
          },
          {
            vertexData: ek,
            transform: wk
          } = jk(kk[0]);
        lk && (yield);
        const Hk = new Array(kk.length - 1);
        for (let sk = 1; sk < kk.length; sk++) Hk[sk - 1] = jk(kk[sk]), lk && (yield);
        const Jk = ek._mergeCoroutine(wk, Hk, Xk, lk, !Ik);
        let xk = Jk.next();
        for (; !xk.done;) lk && (yield), xk = Jk.next();
        const Pk = xk.value;
        Tk || (Tk = new Dk(ak.name + "_merged", ak.mG()));
        const Kk = Pk._applyToCoroutine(Tk, void 0, lk);
        let Qk = Kk.next();
        for (; !Qk.done;) lk && (yield), Qk = Kk.next();
        if (Tk.checkCollisions = ak.checkCollisions, Tk.sideOrientation = ak.sideOrientation, Ik)
          for (Fk = 0; Fk < kk.length; Fk++) kk[Fk].dispose();
        if (ik || yk) {
          for (Tk.releaseSubMeshes(), Fk = 0; Fk < tk.length;) pk.b.CreateFromIndices(0, tk[Fk].start, tk[Fk].count, Tk, void 0, !1), Fk++;
          for (const kk of Tk.lK) kk.refreshBoundingInfo();
          Tk.computeWorldMatrix(!0)
        }
        if (yk) {
          const kk = new Rk.c(ak.name + "_merged", ak.mG());
          kk.W8 = qk;
          for (let Fk = 0; Fk < Tk.lK.length; Fk++) Tk.lK[Fk].materialIndex = Lk[Fk];
          Tk.material = kk
        } else Tk.material = ak.material;
        return Tk
      }
      U3(kk) {
        kk._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(kk)
      }
      Z2(kk) {
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
        return this._scene.useRightHandedSystem && this.sideOrientation === uk.c.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(kk) {
        const Fk = this.mG();
        return Fk.forcePointsCloud ? uk.c.PointFillMode : Fk.forceWireframe ? uk.c.WireFrameFillMode : this.overrideRenderingFillMode ?? kk
      }
      setMaterialByID(kk) {
        return this.setMaterialById(kk)
      }
      static CreateRibbon(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(kk, Fk, Ik, Xk, Tk, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(kk, Fk, Ik, Xk, Tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(kk, Fk, Ik, Xk, Tk, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(kk, Fk, Ik, Xk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(kk, Fk, Ik, Xk, Tk, ik, yk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(kk, Fk, Ik, Xk, Tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(kk, Fk, Ik, Xk, Tk, ik, yk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(kk, Fk, Ik, Xk, Tk, ik, yk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(kk, Fk, Ik, Xk, Tk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(kk, Fk, Ik, Xk, Tk, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(kk, Fk, Ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(kk, Fk, Ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(kk, Fk, Ik, Xk, Tk, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(kk, Fk, Ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(kk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Dk.FRONTSIDE = Ok.c.FRONTSIDE, Dk.BACKSIDE = Ok.c.BACKSIDE, Dk.DOUBLESIDE = Ok.c.DOUBLESIDE, Dk.DEFAULTSIDE = Ok.c.DEFAULTSIDE, Dk.NO_CAP = 0, Dk.CAP_START = 1, Dk.CAP_END = 2, Dk.CAP_ALL = 3, Dk.NO_FLIP = 0, Dk.FLIP_TILE = 1, Dk.ROTATE_TILE = 2, Dk.FLIP_ROW = 3, Dk.ROTATE_ROW = 4, Dk.FLIP_N_ROTATE_TILE = 5, Dk.FLIP_N_ROTATE_ROW = 6, Dk.CENTER = 0, Dk.LEFT = 1, Dk.RIGHT = 2, Dk.TOP = 3, Dk.BOTTOM = 4, Dk.INSTANCEDMESH_SORT_TRANSPARENT = !1, Dk._GroundMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GroundMesh")
    }, Dk._GoldbergMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GoldbergMesh")
    }, Dk._LinesMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("LinesMesh")
    }, Dk._GreasedLineMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GreasedLineMesh")
    }, Dk._GreasedLineRibbonMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GreasedLineRibbonMesh")
    }, Dk._TrailMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("TrailMesh")
    }, Dk._GaussianSplattingMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GaussianSplattingMesh")
    }, Dk._GaussianSplattingPartProxyMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GaussianSplattingPartProxyMesh")
    }, Dk._GaussianSplattingCompoundMeshParser = (kk, Fk) => {
      throw (0, Wk.j)("GaussianSplattingCompoundMesh")
    };
    let Mk = !1;

    function kF() {
      Mk || (Mk = !0, (0, ck.f)("BABYLON.Mesh", Dk))
    }(Xk = Dk.prototype).jR ?? (Xk.jR = (0, Wk.h)("Mesh", "jR")), (Tk = Dk.prototype).simplify ?? (Tk.simplify = (0, Wk.h)("Mesh", "simplify")), (ik = Dk.prototype).thinInstanceAdd ?? (ik.thinInstanceAdd = (0, Wk.h)("Mesh", "thinInstanceAdd")), (yk = Dk.prototype).thinInstanceAddSelf ?? (yk.thinInstanceAddSelf = (0, Wk.h)("Mesh", "thinInstanceAddSelf")), (lk = Dk.prototype).thinInstanceRegisterAttribute ?? (lk.thinInstanceRegisterAttribute = (0, Wk.h)("Mesh", "thinInstanceRegisterAttribute")), (ak = Dk.prototype).thinInstanceSetMatrixAt ?? (ak.thinInstanceSetMatrixAt = (0, Wk.h)("Mesh", "thinInstanceSetMatrixAt")), (qk = Dk.prototype).thinInstanceSetAttributeAt ?? (qk.thinInstanceSetAttributeAt = (0, Wk.h)("Mesh", "thinInstanceSetAttributeAt")), (Lk = Dk.prototype).K8 ?? (Lk.K8 = (0, Wk.h)("Mesh", "K8")), (tk = Dk.prototype).thinInstanceGetWorldMatrices ?? (tk.thinInstanceGetWorldMatrices = (0, Wk.h)("Mesh", "thinInstanceGetWorldMatrices")), (Zk = Dk.prototype).o9 ?? (Zk.o9 = (0, Wk.h)("Mesh", "o9")), (jk = Dk.prototype).thinInstancePartialBufferUpdate ?? (jk.thinInstancePartialBufferUpdate = (0, Wk.h)("Mesh", "thinInstancePartialBufferUpdate")), (ek = Dk.prototype).thinInstanceRefreshBoundingInfo ?? (ek.thinInstanceRefreshBoundingInfo = (0, Wk.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (wk = Dk.prototype).getEmittedParticleSystems ?? (wk.getEmittedParticleSystems = (0, Wk.h)("Mesh", "getEmittedParticleSystems")), (Hk = Dk.prototype).getHierarchyEmittedParticleSystems ?? (Hk.getHierarchyEmittedParticleSystems = (0, Wk.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Dk.prototype, "edgesShareWithInstances") || Object.defineProperty(Dk.prototype, "edgesShareWithInstances", (0, Wk.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Dk.prototype, "vFk") || Object.defineProperty(Dk.prototype, "vFk", (0, Wk.g)("Mesh", "vFk")), Object.getOwnPropertyDescriptor(Dk.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Dk.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Wk.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Dk.prototype, "M6") || Object.defineProperty(Dk.prototype, "M6", (0, Wk.g)("Mesh", "M6"))
  },
  40427: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ek
    });
    var Xk = Ik(40003),
      Tk = Ik(37153),
      ik = Ik(40141),
      yk = Ik(39863),
      lk = Ik(37331),
      ak = Ik(38674),
      qk = Ik(40011),
      Lk = Ik(40424),
      tk = Ik(40042),
      Zk = Ik(40297);
    class jk {}
    let ek = (() => {
      var kk;
      let Fk, Ik, ek, wk, Hk = [];
      return kk = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Lk.f)(this._applyToCoroutine.bind(this)), this.uniqueId = kk._UniqueIdGenerator, kk._UniqueIdGenerator++
        }
        set(kk, Fk) {
          switch (kk.length || ak.e.Warn(`Setting vertex data kind '${Fk}' with an empty array`), Fk) {
            case ik.l.PositionKind:
              this.positions = kk;
              break;
            case ik.l.NormalKind:
              this.normals = kk;
              break;
            case ik.l.TangentKind:
              this.tangents = kk;
              break;
            case ik.l.UVKind:
              this.uvs = kk;
              break;
            case ik.l.UV2Kind:
              this.uvs2 = kk;
              break;
            case ik.l.UV3Kind:
              this.uvs3 = kk;
              break;
            case ik.l.UV4Kind:
              this.uvs4 = kk;
              break;
            case ik.l.UV5Kind:
              this.uvs5 = kk;
              break;
            case ik.l.UV6Kind:
              this.uvs6 = kk;
              break;
            case ik.l.ColorKind:
              this.colors = kk;
              break;
            case ik.l.MatricesIndicesKind:
              this.matricesIndices = kk;
              break;
            case ik.l.MatricesWeightsKind:
              this.matricesWeights = kk;
              break;
            case ik.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = kk;
              break;
            case ik.l.MatricesWeightsExtraKind:
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
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (kk.setVerticesData(ik.l.PositionKind, this.positions, Fk), Ik && (yield)), this.normals && (kk.setVerticesData(ik.l.NormalKind, this.normals, Fk), Ik && (yield)), this.tangents && (kk.setVerticesData(ik.l.TangentKind, this.tangents, Fk), Ik && (yield)), this.uvs && (kk.setVerticesData(ik.l.UVKind, this.uvs, Fk), Ik && (yield)), this.uvs2 && (kk.setVerticesData(ik.l.UV2Kind, this.uvs2, Fk), Ik && (yield)), this.uvs3 && (kk.setVerticesData(ik.l.UV3Kind, this.uvs3, Fk), Ik && (yield)), this.uvs4 && (kk.setVerticesData(ik.l.UV4Kind, this.uvs4, Fk), Ik && (yield)), this.uvs5 && (kk.setVerticesData(ik.l.UV5Kind, this.uvs5, Fk), Ik && (yield)), this.uvs6 && (kk.setVerticesData(ik.l.UV6Kind, this.uvs6, Fk), Ik && (yield)), this.colors) {
            const Xk = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            kk.setVerticesData(ik.l.ColorKind, this.colors, Fk, Xk), this.hasVertexAlpha && void 0 !== kk.hasVertexAlpha && (kk.hasVertexAlpha = !0), Ik && (yield)
          }
          if (this.matricesIndices && (kk.setVerticesData(ik.l.MatricesIndicesKind, this.matricesIndices, Fk), Ik && (yield)), this.matricesWeights && (kk.setVerticesData(ik.l.MatricesWeightsKind, this.matricesWeights, Fk), Ik && (yield)), this.matricesIndicesExtra && (kk.setVerticesData(ik.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, Fk), Ik && (yield)), this.matricesWeightsExtra && (kk.setVerticesData(ik.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, Fk), Ik && (yield)), this.indices ? (kk.setIndices(this.indices, null, Fk), Ik && (yield)) : kk.setIndices([], null), kk.lK && this.materialInfos && this.materialInfos.length > 1) {
            const Fk = kk;
            Fk.lK = [];
            for (const kk of this.materialInfos) new Zk.b(kk.materialIndex, kk.verticesStart, kk.verticesCount, kk.indexStart, kk.indexCount, Fk)
          }
          return this
        }
        _update(kk, Fk, Ik) {
          return this.positions && kk.updateVerticesData(ik.l.PositionKind, this.positions, Fk, Ik), this.normals && kk.updateVerticesData(ik.l.NormalKind, this.normals, Fk, Ik), this.tangents && kk.updateVerticesData(ik.l.TangentKind, this.tangents, Fk, Ik), this.uvs && kk.updateVerticesData(ik.l.UVKind, this.uvs, Fk, Ik), this.uvs2 && kk.updateVerticesData(ik.l.UV2Kind, this.uvs2, Fk, Ik), this.uvs3 && kk.updateVerticesData(ik.l.UV3Kind, this.uvs3, Fk, Ik), this.uvs4 && kk.updateVerticesData(ik.l.UV4Kind, this.uvs4, Fk, Ik), this.uvs5 && kk.updateVerticesData(ik.l.UV5Kind, this.uvs5, Fk, Ik), this.uvs6 && kk.updateVerticesData(ik.l.UV6Kind, this.uvs6, Fk, Ik), this.colors && kk.updateVerticesData(ik.l.ColorKind, this.colors, Fk, Ik), this.matricesIndices && kk.updateVerticesData(ik.l.MatricesIndicesKind, this.matricesIndices, Fk, Ik), this.matricesWeights && kk.updateVerticesData(ik.l.MatricesWeightsKind, this.matricesWeights, Fk, Ik), this.matricesIndicesExtra && kk.updateVerticesData(ik.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, Fk, Ik), this.matricesWeightsExtra && kk.updateVerticesData(ik.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, Fk, Ik), this.indices && kk.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ik = Tk.l.Ge[0],
            yk = Tk.l.Ge[1];
          for (let lk = Ik; lk < Ik + Xk; lk += 3) Tk.t.FromArrayToRef(kk, lk, ik), Tk.t.TransformCoordinatesToRef(ik, Fk, yk), kk[lk] = yk.x, kk[lk + 1] = yk.y, kk[lk + 2] = yk.z
        }
        static _TransformVector3Normals(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ik = Tk.l.Ge[0],
            yk = Tk.l.Ge[1];
          for (let lk = Ik; lk < Ik + Xk; lk += 3) Tk.t.FromArrayToRef(kk, lk, ik), Tk.t.TransformNormalToRef(ik, Fk, yk), kk[lk] = yk.x, kk[lk + 1] = yk.y, kk[lk + 2] = yk.z
        }
        static _TransformVector4Normals(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const ik = Tk.l.Vector4[0],
            yk = Tk.l.Vector4[1];
          for (let lk = Ik; lk < Ik + Xk; lk += 4) Tk.u.FromArrayToRef(kk, lk, ik), Tk.u.TransformNormalToRef(ik, Fk, yk), kk[lk] = yk.x, kk[lk + 1] = yk.y, kk[lk + 2] = yk.z, kk[lk + 3] = yk.w
        }
        static _FlipFaces(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
          for (let Xk = Fk; Xk < Fk + Ik; Xk += 3) {
            const Fk = kk[Xk + 1];
            kk[Xk + 1] = kk[Xk + 2], kk[Xk + 2] = Fk
          }
        }
        transform(Fk) {
          const Ik = Fk.determinant() < 0;
          return this.positions && kk._TransformVector3Coordinates(this.positions, Fk), this.normals && kk._TransformVector3Normals(this.normals, Fk), this.tangents && kk._TransformVector4Normals(this.tangents, Fk), Ik && this.indices && kk._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Fk = [];
          for (const Ik of this.materialInfos) {
            const Xk = new kk;
            if (this.positions && (Xk.positions = this.positions.slice(3 * Ik.verticesStart, 3 * (Ik.verticesCount + Ik.verticesStart))), this.normals && (Xk.normals = this.normals.slice(3 * Ik.verticesStart, 3 * (Ik.verticesCount + Ik.verticesStart))), this.tangents && (Xk.tangents = this.tangents.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.colors && (Xk.colors = this.colors.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.uvs && (Xk.uvs = this.uvs.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.uvs2 && (Xk.uvs2 = this.uvs2.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.uvs3 && (Xk.uvs3 = this.uvs3.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.uvs4 && (Xk.uvs4 = this.uvs4.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.uvs5 && (Xk.uvs5 = this.uvs5.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.uvs6 && (Xk.uvs6 = this.uvs6.slice(2 * Ik.verticesStart, 2 * (Ik.verticesCount + Ik.verticesStart))), this.matricesIndices && (Xk.matricesIndices = this.matricesIndices.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.matricesIndicesExtra && (Xk.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.matricesWeights && (Xk.matricesWeights = this.matricesWeights.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.matricesWeightsExtra && (Xk.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * Ik.verticesStart, 4 * (Ik.verticesCount + Ik.verticesStart))), this.indices) {
              Xk.indices = [];
              for (let kk = Ik.indexStart; kk < Ik.indexStart + Ik.indexCount; kk++) Xk.indices.push(this.indices[kk] - Ik.verticesStart)
            }
            const Tk = new jk;
            Tk.indexStart = 0, Tk.indexCount = Xk.indices ? Xk.indices.length : 0, Tk.materialIndex = Ik.materialIndex, Tk.verticesStart = 0, Tk.verticesCount = (Xk.positions ? Xk.positions.length : 0) / 3, Xk.materialInfos = [Tk], Fk.push(Xk)
          }
          return Fk
        }
        merge(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const ik = Array.isArray(kk) ? kk.map((kk => ({
            vertexData: kk
          }))) : [{
            vertexData: kk
          }];
          return (0, Lk.n)(this._mergeCoroutine(void 0, ik, Fk, !1, Ik, Xk, Tk))
        }* _mergeCoroutine(Fk, Ik) {
          let Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Tk = arguments.length > 3 ? arguments[3] : void 0,
            yk = arguments.length > 4 ? arguments[4] : void 0,
            lk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            ak = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let qk = Ik.map((kk => kk.vertexData)),
            Lk = this;
          if (ak)
            for (const kk of qk) kk && (kk._validate(), !this.normals && kk.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && kk.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && kk.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && kk.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && kk.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && kk.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && kk.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && kk.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && kk.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && kk.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && kk.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && kk.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && kk.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const kk of qk)
            if (kk)
              if (ak) this.normals && !kk.normals && (kk.normals = new Float32Array(kk.positions.length)), this.tangents && !kk.tangents && (kk.tangents = new Float32Array(kk.positions.length / 3 * 4)), this.uvs && !kk.uvs && (kk.uvs = new Float32Array(kk.positions.length / 3 * 2)), this.uvs2 && !kk.uvs2 && (kk.uvs2 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs3 && !kk.uvs3 && (kk.uvs3 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs4 && !kk.uvs4 && (kk.uvs4 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs5 && !kk.uvs5 && (kk.uvs5 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs6 && !kk.uvs6 && (kk.uvs6 = new Float32Array(kk.positions.length / 3 * 2)), this.colors && !kk.colors && (kk.colors = new Float32Array(kk.positions.length / 3 * 4), kk.colors.fill(1)), this.matricesIndices && !kk.matricesIndices && (kk.matricesIndices = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeights && !kk.matricesWeights && (kk.matricesWeights = new Float32Array(kk.positions.length / 3 * 4)), this.matricesIndicesExtra && !kk.matricesIndicesExtra && (kk.matricesIndicesExtra = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeightsExtra && !kk.matricesWeightsExtra && (kk.matricesWeightsExtra = new Float32Array(kk.positions.length / 3 * 4));
              else if (kk._validate(), !this.normals !== !kk.normals || !this.tangents !== !kk.tangents || !this.uvs !== !kk.uvs || !this.uvs2 !== !kk.uvs2 || !this.uvs3 !== !kk.uvs3 || !this.uvs4 !== !kk.uvs4 || !this.uvs5 !== !kk.uvs5 || !this.uvs6 !== !kk.uvs6 || !this.colors !== !kk.colors || !this.matricesIndices !== !kk.matricesIndices || !this.matricesWeights !== !kk.matricesWeights || !this.matricesIndicesExtra !== !kk.matricesIndicesExtra || !this.matricesWeightsExtra !== !kk.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (lk) {
            let kk, Xk = 0,
              Tk = 0;
            const ik = [];
            let yk = null;
            const lk = [];
            for (const Ik of this.splitBasedOnMaterialID()) lk.push({
              vertexData: Ik,
              transform: Fk
            });
            for (const Fk of Ik)
              if (Fk.vertexData)
                for (const kk of Fk.vertexData.splitBasedOnMaterialID()) lk.push({
                  vertexData: kk,
                  transform: Fk.transform
                });
            lk.sort(((kk, Fk) => {
              const Ik = kk.vertexData.materialInfos ? kk.vertexData.materialInfos[0].materialIndex : 0,
                Xk = Fk.vertexData.materialInfos ? Fk.vertexData.materialInfos[0].materialIndex : 0;
              return Ik > Xk ? 1 : Ik === Xk ? 0 : -1
            }));
            for (const Fk of lk) {
              const Ik = Fk.vertexData;
              if (kk = Ik.materialInfos ? Ik.materialInfos[0].materialIndex : 0, yk && yk.materialIndex === kk) yk.indexCount += Ik.indices.length, yk.verticesCount += Ik.positions.length / 3;
              else {
                const Fk = new jk;
                Fk.materialIndex = kk, Fk.indexStart = Xk, Fk.indexCount = Ik.indices.length, Fk.verticesStart = Tk, Fk.verticesCount = Ik.positions.length / 3, ik.push(Fk), yk = Fk
              }
              Xk += Ik.indices.length, Tk += Ik.positions.length / 3
            }
            const ak = lk.splice(0, 1)[0];
            Lk = ak.vertexData, Fk = ak.transform, qk = lk.map((kk => kk.vertexData)), Ik = lk, this.materialInfos = ik
          }
          const tk = qk.reduce(((kk, Fk) => kk + (Fk.indices?.length ?? 0)), Lk.indices?.length ?? 0);
          let Zk = yk || qk.some((kk => kk.indices === Lk.indices)) ? Lk.indices?.slice() : Lk.indices;
          if (tk > 0) {
            let ik = Zk?.length ?? 0;
            if (Zk || (Zk = new Array(tk)), Zk.length !== tk) {
              if (Array.isArray(Zk)) Zk.length = tk;
              else {
                const kk = Xk || Zk instanceof Uint32Array ? new Uint32Array(tk) : new Uint16Array(tk);
                kk.set(Zk), Zk = kk
              }
              Fk && Fk.determinant() < 0 && kk._FlipFaces(Zk, 0, ik)
            }
            let yk = Lk.positions ? Lk.positions.length / 3 : 0;
            for (const {
                vertexData: Fk,
                transform: Xk
              }
              of Ik)
              if (Fk.indices) {
                for (let kk = 0; kk < Fk.indices.length; kk++) Zk[ik + kk] = Fk.indices[kk] + yk;
                Xk && Xk.determinant() < 0 && kk._FlipFaces(Zk, ik, Fk.indices.length), yk += Fk.positions.length / 3, ik += Fk.indices.length, Tk && (yield)
              }
          }
          return this.indices = Zk, this.positions = kk._MergeElement(ik.l.PositionKind, Lk.positions, Fk, Ik.map((kk => [kk.vertexData.positions, kk.transform]))), Tk && (yield), Lk.normals && (this.normals = kk._MergeElement(ik.l.NormalKind, Lk.normals, Fk, Ik.map((kk => [kk.vertexData.normals, kk.transform]))), Tk && (yield)), Lk.tangents && (this.tangents = kk._MergeElement(ik.l.TangentKind, Lk.tangents, Fk, Ik.map((kk => [kk.vertexData.tangents, kk.transform]))), Tk && (yield)), Lk.uvs && (this.uvs = kk._MergeElement(ik.l.UVKind, Lk.uvs, Fk, Ik.map((kk => [kk.vertexData.uvs, kk.transform]))), Tk && (yield)), Lk.uvs2 && (this.uvs2 = kk._MergeElement(ik.l.UV2Kind, Lk.uvs2, Fk, Ik.map((kk => [kk.vertexData.uvs2, kk.transform]))), Tk && (yield)), Lk.uvs3 && (this.uvs3 = kk._MergeElement(ik.l.UV3Kind, Lk.uvs3, Fk, Ik.map((kk => [kk.vertexData.uvs3, kk.transform]))), Tk && (yield)), Lk.uvs4 && (this.uvs4 = kk._MergeElement(ik.l.UV4Kind, Lk.uvs4, Fk, Ik.map((kk => [kk.vertexData.uvs4, kk.transform]))), Tk && (yield)), Lk.uvs5 && (this.uvs5 = kk._MergeElement(ik.l.UV5Kind, Lk.uvs5, Fk, Ik.map((kk => [kk.vertexData.uvs5, kk.transform]))), Tk && (yield)), Lk.uvs6 && (this.uvs6 = kk._MergeElement(ik.l.UV6Kind, Lk.uvs6, Fk, Ik.map((kk => [kk.vertexData.uvs6, kk.transform]))), Tk && (yield)), Lk.colors && (this.colors = kk._MergeElement(ik.l.ColorKind, Lk.colors, Fk, Ik.map((kk => [kk.vertexData.colors, kk.transform]))), (void 0 !== Lk.hasVertexAlpha || Ik.some((kk => void 0 !== kk.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Lk.hasVertexAlpha || Ik.some((kk => kk.vertexData.hasVertexAlpha))), Tk && (yield)), Lk.matricesIndices && (this.matricesIndices = kk._MergeElement(ik.l.MatricesIndicesKind, Lk.matricesIndices, Fk, Ik.map((kk => [kk.vertexData.matricesIndices, kk.transform]))), Tk && (yield)), Lk.matricesWeights && (this.matricesWeights = kk._MergeElement(ik.l.MatricesWeightsKind, Lk.matricesWeights, Fk, Ik.map((kk => [kk.vertexData.matricesWeights, kk.transform]))), Tk && (yield)), Lk.matricesIndicesExtra && (this.matricesIndicesExtra = kk._MergeElement(ik.l.MatricesIndicesExtraKind, Lk.matricesIndicesExtra, Fk, Ik.map((kk => [kk.vertexData.matricesIndicesExtra, kk.transform]))), Tk && (yield)), Lk.matricesWeightsExtra && (this.matricesWeightsExtra = kk._MergeElement(ik.l.MatricesWeightsExtraKind, Lk.matricesWeightsExtra, Fk, Ik.map((kk => [kk.vertexData.matricesWeightsExtra, kk.transform])))), this
        }
        static _MergeElement(Fk, Ik, Xk, Tk) {
          const yk = Tk.filter((kk => null !== kk[0] && void 0 !== kk[0]));
          if (!Ik && 0 == yk.length) return Ik;
          if (!Ik) return this._MergeElement(Fk, yk[0][0], yk[0][1], yk.slice(1));
          const lk = yk.reduce(((kk, Fk) => kk + Fk[0].length), Ik.length),
            ak = Fk === ik.l.PositionKind ? kk._TransformVector3Coordinates : Fk === ik.l.NormalKind ? kk._TransformVector3Normals : Fk === ik.l.TangentKind ? kk._TransformVector4Normals : () => {};
          if (Ik instanceof Float32Array) {
            const kk = new Float32Array(lk);
            kk.set(Ik), Xk && ak(kk, Xk, 0, Ik.length);
            let Fk = Ik.length;
            for (const [Ik, Xk] of yk) kk.set(Ik, Fk), Xk && ak(kk, Xk, Fk, Ik.length), Fk += Ik.length;
            return kk
          } {
            const kk = new Array(lk);
            for (let Xk = 0; Xk < Ik.length; Xk++) kk[Xk] = Ik[Xk];
            Xk && ak(kk, Xk, 0, Ik.length);
            let Fk = Ik.length;
            for (const [Ik, Xk] of yk) {
              for (let Xk = 0; Xk < Ik.length; Xk++) kk[Fk + Xk] = Ik[Xk];
              Xk && ak(kk, Xk, Fk, Ik.length), Fk += Ik.length
            }
            return kk
          }
        }
        _validate() {
          if (!this.positions) throw new tk.f("Positions are required", tk.e.MeshInvalidPositionsError);
          const kk = (kk, Fk) => {
              const Ik = (0, ik.i)(kk);
              if (Fk.length % Ik !== 0) throw new Error("The " + kk + "s array count must be a multiple of " + Ik);
              return Fk.length / Ik
            },
            Fk = kk(ik.l.PositionKind, this.positions),
            Ik = (Ik, Xk) => {
              const Tk = kk(Ik, Xk);
              if (Tk !== Fk) throw new Error("The " + Ik + "s element count (" + Tk + ") does not match the positions count (" + Fk + ")")
            };
          this.normals && Ik(ik.l.NormalKind, this.normals), this.tangents && Ik(ik.l.TangentKind, this.tangents), this.uvs && Ik(ik.l.UVKind, this.uvs), this.uvs2 && Ik(ik.l.UV2Kind, this.uvs2), this.uvs3 && Ik(ik.l.UV3Kind, this.uvs3), this.uvs4 && Ik(ik.l.UV4Kind, this.uvs4), this.uvs5 && Ik(ik.l.UV5Kind, this.uvs5), this.uvs6 && Ik(ik.l.UV6Kind, this.uvs6), this.colors && Ik(ik.l.ColorKind, this.colors), this.matricesIndices && Ik(ik.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && Ik(ik.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && Ik(ik.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && Ik(ik.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
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
              const Ik = {
                indexStart: Fk.indexStart,
                indexCount: Fk.indexCount,
                materialIndex: Fk.materialIndex,
                verticesStart: Fk.verticesStart,
                verticesCount: Fk.verticesCount
              };
              kk.materialInfos.push(Ik)
            }
          }
          return kk
        }
        static ExtractFromMesh(Fk, Ik, Xk) {
          return kk._ExtractFrom(Fk, Ik, Xk)
        }
        static ExtractFromGeometry(Fk, Ik, Xk) {
          return kk._ExtractFrom(Fk, Ik, Xk)
        }
        static _ExtractFrom(Fk, Ik, Xk) {
          const Tk = new kk;
          if (Fk.isVerticesDataPresent(ik.l.PositionKind) && (Tk.positions = Fk.getVerticesData(ik.l.PositionKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.NormalKind) && (Tk.normals = Fk.getVerticesData(ik.l.NormalKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.TangentKind) && (Tk.tangents = Fk.getVerticesData(ik.l.TangentKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UVKind) && (Tk.uvs = Fk.getVerticesData(ik.l.UVKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UV2Kind) && (Tk.uvs2 = Fk.getVerticesData(ik.l.UV2Kind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UV3Kind) && (Tk.uvs3 = Fk.getVerticesData(ik.l.UV3Kind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UV4Kind) && (Tk.uvs4 = Fk.getVerticesData(ik.l.UV4Kind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UV5Kind) && (Tk.uvs5 = Fk.getVerticesData(ik.l.UV5Kind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.UV6Kind) && (Tk.uvs6 = Fk.getVerticesData(ik.l.UV6Kind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.ColorKind)) {
            const kk = Fk.geometry || Fk,
              yk = kk.getVertexBuffer(ik.l.ColorKind),
              lk = kk.getVerticesData(ik.l.ColorKind, Ik, Xk);
            if (3 === yk.getSize()) {
              const kk = new Float32Array(4 * lk.length / 3);
              for (let Fk = 0, Ik = 0; Fk < lk.length; Fk += 3, Ik += 4) kk[Ik] = lk[Fk], kk[Ik + 1] = lk[Fk + 1], kk[Ik + 2] = lk[Fk + 2], kk[Ik + 3] = 1;
              Tk.colors = kk
            } else {
              if (4 !== yk.getSize()) throw new Error(`Unexpected number of color components: ${yk.getSize()}`);
              Tk.colors = lk
            }
          }
          return Fk.isVerticesDataPresent(ik.l.MatricesIndicesKind) && (Tk.matricesIndices = Fk.getVerticesData(ik.l.MatricesIndicesKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.MatricesWeightsKind) && (Tk.matricesWeights = Fk.getVerticesData(ik.l.MatricesWeightsKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.MatricesIndicesExtraKind) && (Tk.matricesIndicesExtra = Fk.getVerticesData(ik.l.MatricesIndicesExtraKind, Ik, Xk)), Fk.isVerticesDataPresent(ik.l.MatricesWeightsExtraKind) && (Tk.matricesWeightsExtra = Fk.getVerticesData(ik.l.MatricesWeightsExtraKind, Ik, Xk)), Tk.indices = Fk.yXk(Ik, Xk), Tk
        }
        static CreateRibbon(kk) {
          throw (0, yk.j)("ribbonBuilder")
        }
        static CreateBox(kk) {
          throw (0, yk.j)("boxBuilder")
        }
        static CreateTiledBox(kk) {
          throw (0, yk.j)("tiledBoxBuilder")
        }
        static CreateTiledPlane(kk) {
          throw (0, yk.j)("tiledPlaneBuilder")
        }
        static CreateSphere(kk) {
          throw (0, yk.j)("sphereBuilder")
        }
        static CreateCylinder(kk) {
          throw (0, yk.j)("cylinderBuilder")
        }
        static CreateTorus(kk) {
          throw (0, yk.j)("torusBuilder")
        }
        static CreateLineSystem(kk) {
          throw (0, yk.j)("linesBuilder")
        }
        static CreateDashedLines(kk) {
          throw (0, yk.j)("linesBuilder")
        }
        static CreateGround(kk) {
          throw (0, yk.j)("groundBuilder")
        }
        static CreateTiledGround(kk) {
          throw (0, yk.j)("groundBuilder")
        }
        static CreateGroundFromHeightMap(kk) {
          throw (0, yk.j)("groundBuilder")
        }
        static CreatePlane(kk) {
          throw (0, yk.j)("planeBuilder")
        }
        static CreateDisc(kk) {
          throw (0, yk.j)("discBuilder")
        }
        static CreatePolygon(kk, Fk, Ik, Xk, Tk, ik, lk) {
          throw (0, yk.j)("polygonBuilder")
        }
        static CreateIcoSphere(kk) {
          throw (0, yk.j)("icoSphereBuilder")
        }
        static CreatePolyhedron(kk) {
          throw (0, yk.j)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Tk.t.Up();
          throw (0, yk.j)("capsuleBuilder")
        }
        static CreateTorusKnot(kk) {
          throw (0, yk.j)("torusKnotBuilder")
        }
        static ComputeNormals(kk, Fk, Ik, Xk) {
          let ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk = !1,
            vk = !1,
            Ek = !1,
            Ok = !1,
            nk = 1,
            Gk = 0,
            pk = null;
          Xk && (Sk = !!Xk.facetNormals, vk = !!Xk.facetPositions, Ek = !!Xk.facetPartitioning, nk = !0 === Xk.useRightHandedSystem ? -1 : 1, Gk = Xk.ratio || 0, Ok = !!Xk.depthSort, pk = Xk.distanceTo, Ok && void 0 === pk && (pk = Tk.t.Zero()));
          let uk = 0,
            bk = 0,
            Rk = 0,
            Uk = 0;
          for (Ek && Xk && Xk.bbSize && (uk = Xk.subDiv.X * Gk / Xk.bbSize.x, bk = Xk.subDiv.Y * Gk / Xk.bbSize.y, Rk = Xk.subDiv.Z * Gk / Xk.bbSize.z, Uk = Xk.subDiv.max * Xk.subDiv.max, Xk.facetPartitioning.length = 0), ik = 0; ik < kk.length; ik++) Ik[ik] = 0;
          const Ck = Fk.length / 3 | 0;
          for (ik = 0; ik < Ck; ik++) {
            if (Hk = 3 * Fk[3 * ik], Jk = Hk + 1, xk = Hk + 2, Pk = 3 * Fk[3 * ik + 1], Kk = Pk + 1, Qk = Pk + 2, sk = 3 * Fk[3 * ik + 2], Vk = sk + 1, zk = sk + 2, yk = kk[Hk] - kk[Pk], lk = kk[Jk] - kk[Kk], ak = kk[xk] - kk[Qk], qk = kk[sk] - kk[Pk], Lk = kk[Vk] - kk[Kk], tk = kk[zk] - kk[Qk], Zk = nk * (lk * tk - ak * Lk), jk = nk * (ak * qk - yk * tk), ek = nk * (yk * Lk - lk * qk), wk = Math.sqrt(Zk * Zk + jk * jk + ek * ek), wk = 0 === wk ? 1 : wk, Zk /= wk, jk /= wk, ek /= wk, Sk && Xk && (Xk.facetNormals[ik].x = Zk, Xk.facetNormals[ik].y = jk, Xk.facetNormals[ik].z = ek), vk && Xk && (Xk.facetPositions[ik].x = (kk[Hk] + kk[Pk] + kk[sk]) / 3, Xk.facetPositions[ik].y = (kk[Jk] + kk[Kk] + kk[Vk]) / 3, Xk.facetPositions[ik].z = (kk[xk] + kk[Qk] + kk[zk]) / 3), Ek && Xk) {
              const Fk = Math.floor((Xk.facetPositions[ik].x - Xk.bInfo.minimum.x * Gk) * uk),
                Ik = Math.floor((Xk.facetPositions[ik].y - Xk.bInfo.minimum.y * Gk) * bk),
                Tk = Math.floor((Xk.facetPositions[ik].z - Xk.bInfo.minimum.z * Gk) * Rk),
                yk = Math.floor((kk[Hk] - Xk.bInfo.minimum.x * Gk) * uk),
                lk = Math.floor((kk[Jk] - Xk.bInfo.minimum.y * Gk) * bk),
                ak = Math.floor((kk[xk] - Xk.bInfo.minimum.z * Gk) * Rk),
                qk = Math.floor((kk[Pk] - Xk.bInfo.minimum.x * Gk) * uk),
                Lk = Math.floor((kk[Kk] - Xk.bInfo.minimum.y * Gk) * bk),
                tk = Math.floor((kk[Qk] - Xk.bInfo.minimum.z * Gk) * Rk),
                Zk = Math.floor((kk[sk] - Xk.bInfo.minimum.x * Gk) * uk),
                jk = Math.floor((kk[Vk] - Xk.bInfo.minimum.y * Gk) * bk),
                ek = Math.floor((kk[zk] - Xk.bInfo.minimum.z * Gk) * Rk),
                wk = yk + Xk.subDiv.max * lk + Uk * ak,
                Sk = qk + Xk.subDiv.max * Lk + Uk * tk,
                vk = Zk + Xk.subDiv.max * jk + Uk * ek,
                Ek = Fk + Xk.subDiv.max * Ik + Uk * Tk;
              Xk.facetPartitioning[Ek] = Xk.facetPartitioning[Ek] ? Xk.facetPartitioning[Ek] : [], Xk.facetPartitioning[wk] = Xk.facetPartitioning[wk] ? Xk.facetPartitioning[wk] : [], Xk.facetPartitioning[Sk] = Xk.facetPartitioning[Sk] ? Xk.facetPartitioning[Sk] : [], Xk.facetPartitioning[vk] = Xk.facetPartitioning[vk] ? Xk.facetPartitioning[vk] : [], Xk.facetPartitioning[wk].push(ik), Sk != wk && Xk.facetPartitioning[Sk].push(ik), vk != Sk && vk != wk && Xk.facetPartitioning[vk].push(ik), Ek != wk && Ek != Sk && Ek != vk && Xk.facetPartitioning[Ek].push(ik)
            }
            if (Ok && Xk && Xk.facetPositions) {
              const kk = Xk.depthSortedFacets[ik];
              kk.ind = 3 * ik, kk.sqDistance = Tk.t.DistanceSquared(Xk.facetPositions[ik], pk)
            }
            Ik[Hk] += Zk, Ik[Jk] += jk, Ik[xk] += ek, Ik[Pk] += Zk, Ik[Kk] += jk, Ik[Qk] += ek, Ik[sk] += Zk, Ik[Vk] += jk, Ik[zk] += ek
          }
          for (ik = 0; ik < Ik.length / 3; ik++) Zk = Ik[3 * ik], jk = Ik[3 * ik + 1], ek = Ik[3 * ik + 2], wk = Math.sqrt(Zk * Zk + jk * jk + ek * ek), wk = 0 === wk ? 1 : wk, Zk /= wk, jk /= wk, ek /= wk, Ik[3 * ik] = Zk, Ik[3 * ik + 1] = jk, Ik[3 * ik + 2] = ek
        }
        static _ComputeSides(Fk, Ik, Xk, ik, yk, lk, ak) {
          const qk = Xk.length,
            Lk = ik.length;
          let tk, Zk;
          switch (Fk = Fk || kk.DEFAULTSIDE) {
            case kk.FRONTSIDE:
              break;
            case kk.BACKSIDE:
              for (tk = 0; tk < qk; tk += 3) {
                const kk = Xk[tk];
                Xk[tk] = Xk[tk + 2], Xk[tk + 2] = kk
              }
              for (Zk = 0; Zk < Lk; Zk++) ik[Zk] = -ik[Zk];
              break;
            case kk.DOUBLESIDE: {
              const kk = Ik.length,
                Fk = kk / 3;
              for (let Xk = 0; Xk < kk; Xk++) Ik[kk + Xk] = Ik[Xk];
              for (tk = 0; tk < qk; tk += 3) Xk[tk + qk] = Xk[tk + 2] + Fk, Xk[tk + 1 + qk] = Xk[tk + 1] + Fk, Xk[tk + 2 + qk] = Xk[tk] + Fk;
              for (Zk = 0; Zk < Lk; Zk++) ik[Lk + Zk] = -ik[Zk];
              const jk = yk.length;
              let ek;
              for (ek = 0; ek < jk; ek++) yk[ek + jk] = yk[ek];
              for (lk = lk || new Tk.u(0, 0, 1, 1), ak = ak || new Tk.u(0, 0, 1, 1), ek = 0, tk = 0; tk < jk / 2; tk++) yk[ek] = lk.x + (lk.z - lk.x) * yk[ek], yk[ek + 1] = lk.y + (lk.w - lk.y) * yk[ek + 1], yk[ek + jk] = ak.x + (ak.z - ak.x) * yk[ek + jk], yk[ek + jk + 1] = ak.y + (ak.w - ak.y) * yk[ek + jk + 1], ek += 2;
              break
            }
          }
        }
        static Parse(Fk) {
          const Ik = new kk,
            Xk = Fk.positions;
          Xk && Ik.set(Xk, ik.l.PositionKind);
          const Tk = Fk.normals;
          Tk && Ik.set(Tk, ik.l.NormalKind);
          const yk = Fk.tangents;
          yk && Ik.set(yk, ik.l.TangentKind);
          const ak = Fk.uvs;
          ak && Ik.set(ak, ik.l.UVKind);
          const qk = Fk.uvs2;
          qk && Ik.set(qk, ik.l.UV2Kind);
          const Lk = Fk.uvs3;
          Lk && Ik.set(Lk, ik.l.UV3Kind);
          const tk = Fk.uvs4;
          tk && Ik.set(tk, ik.l.UV4Kind);
          const Zk = Fk.uvs5;
          Zk && Ik.set(Zk, ik.l.UV5Kind);
          const ek = Fk.uvs6;
          ek && Ik.set(ek, ik.l.UV6Kind);
          const wk = Fk.colors;
          wk && (Ik.set(lk.h.CheckColors4(wk, Xk.length / 3), ik.l.ColorKind), void 0 !== Fk.hasVertexAlpha && (Ik.hasVertexAlpha = Fk.hasVertexAlpha));
          const Hk = Fk.matricesIndices;
          Hk && Ik.set(Hk, ik.l.MatricesIndicesKind);
          const Jk = Fk.matricesWeights;
          Jk && Ik.set(Jk, ik.l.MatricesWeightsKind);
          const xk = Fk.indices;
          xk && (Ik.indices = xk);
          const Pk = Fk.materialInfos;
          if (Pk) {
            Ik.materialInfos = [];
            for (const kk of Pk) {
              const Fk = new jk;
              Fk.indexCount = kk.indexCount, Fk.indexStart = kk.indexStart, Fk.verticesCount = kk.verticesCount, Fk.verticesStart = kk.verticesStart, Fk.materialIndex = kk.materialIndex, Ik.materialInfos.push(Fk)
            }
          }
          return Ik
        }
        static ImportVertexData(Fk, Ik) {
          const Xk = kk.Parse(Fk);
          Ik.setAllVerticesData(Xk, Fk.updatable)
        }
      }, (() => {
        const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [qk.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ik = [qk.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ek = [qk.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], wk = [qk.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Xk.j)(kk, null, Fk, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Coordinates" in kk,
            get: kk => kk._TransformVector3Coordinates
          },
          metadata: Tk
        }, null, Hk), (0, Xk.j)(kk, null, Ik, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Normals" in kk,
            get: kk => kk._TransformVector3Normals
          },
          metadata: Tk
        }, null, Hk), (0, Xk.j)(kk, null, ek, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector4Normals" in kk,
            get: kk => kk._TransformVector4Normals
          },
          metadata: Tk
        }, null, Hk), (0, Xk.j)(kk, null, wk, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: kk => "_FlipFaces" in kk,
            get: kk => kk._FlipFaces
          },
          metadata: Tk
        }, null, Hk), Tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tk
        })
      })(), kk.FRONTSIDE = ((0, Xk.n)(kk, Hk), 0), kk.BACKSIDE = 1, kk.DOUBLESIDE = 2, kk.DEFAULTSIDE = 0, kk._UniqueIdGenerator = 0, kk
    })()
  },
  40498: (kk, Fk, Ik) => {
    var Xk = Ik(37153),
      Tk = Ik(38674),
      ik = Ik(40308),
      yk = Ik(40417),
      lk = Ik(40141);
    const ak = "bakedVertexAnimationSettingsInstanced";

    function qk(kk) {
      const Fk = kk.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Fk instanceof Float32Array || Fk instanceof Uint16Array
    }

    function Lk(kk, Fk, Ik, Xk) {
      Ik.I6(Number.POSITIVE_INFINITY), Xk.I6(Number.NEGATIVE_INFINITY);
      for (let Tk = 0; Tk < 3 * Fk; Tk += 3) {
        const Fk = kk[Tk],
          ik = kk[Tk + 1],
          yk = kk[Tk + 2];
        Fk < Ik.x && (Ik.x = Fk), ik < Ik.y && (Ik.y = ik), yk < Ik.z && (Ik.z = yk), Fk > Xk.x && (Xk.x = Fk), ik > Xk.y && (Xk.y = ik), yk > Xk.z && (Xk.z = yk)
      }
    }

    function tk(kk, Fk, Ik) {
      Ik && (kk.x -= kk.x * Ik.x + Ik.y, kk.y -= kk.y * Ik.x + Ik.y, kk.z -= kk.z * Ik.x + Ik.y, Fk.x += Fk.x * Ik.x + Ik.y, Fk.y += Fk.y * Ik.x + Ik.y, Fk.z += Fk.z * Ik.x + Ik.y)
    }

    function Zk(kk, Fk, Ik, Tk, ik) {
      const yk = Xk.l.Ge[7],
        lk = Xk.l.Ge[8];
      for (let ak = 0; ak < 2; ++ak)
        for (let qk = 0; qk < 2; ++qk)
          for (let Lk = 0; Lk < 2; ++Lk) yk.set(ak ? Fk.x : kk.x, qk ? Fk.y : kk.y, Lk ? Fk.z : kk.z), Xk.t.TransformCoordinatesToRef(yk, Ik, lk), Tk.minimizeInPlace(lk), ik.maximizeInPlace(lk)
    }

    function jk(kk, Fk, Ik, Tk, ik) {
      const yk = Xk.l.Ge[7];
      for (let lk = 0; lk < 3 * Fk; lk += 3) Xk.t.TransformCoordinatesFromFloatsToRef(kk[lk], kk[lk + 1], kk[lk + 2], Ik, yk), Tk.minimizeInPlace(yk), ik.maximizeInPlace(yk)
    }
    let ek = !1;
    ek || (ek = !0, yk.b.prototype.thinInstanceAdd = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.mG().Oe().getCaps().instancedArrays) return Tk.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(kk) ? kk.length : 1);
      const Ik = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(kk))
        for (let Xk = 0; Xk < kk.length; ++Xk) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk[Xk], Xk === kk.length - 1 && Fk);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk, Fk);
      return Ik
    }, yk.b.prototype.thinInstanceAddSelf = function() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Xk.c.IdentityReadOnly, kk)
    }, yk.b.prototype.thinInstanceRegisterAttribute = function(kk, Fk) {
      kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this.removeVerticesData(kk), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[kk] = Fk, this._userThinInstanceBuffersStorage.sizes[kk] = Fk * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[kk] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[kk]), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new lk.l(this.Oe(), this._userThinInstanceBuffersStorage.data[kk], kk, !0, !1, Fk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk])
    }, yk.b.prototype.thinInstanceSetMatrixAt = function(kk, Fk) {
      let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || kk >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Xk = this._thinInstanceDataStorage.matrixData;
      return Fk.copyToArray(Xk, 16 * kk), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[kk] = Fk), Ik && (this.o9("matrix"), this.ue || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, yk.b.prototype.thinInstanceSetAttributeAt = function(kk, Fk, Ik) {
      let Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[kk] || Fk >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(kk, 0), this._userThinInstanceBuffersStorage.data[kk].set(Ik, Fk * this._userThinInstanceBuffersStorage.strides[kk]), Xk && this.o9(kk), !0)
    }, Object.defineProperty(yk.b.prototype, "M6", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(kk) {
        const Fk = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        kk <= (Fk ? Fk.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = kk)
      },
      enumerable: !0,
      configurable: !0
    }), yk.b.prototype._thinInstanceCreateMatrixBuffer = function(kk, Fk) {
      let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Xk = new lk.e(this.Oe(), Fk, !Ik, 16, !1, !0);
      for (let Tk = 0; Tk < 4; Tk++) this.setVerticesBuffer(Xk.createVertexBuffer(kk + Tk, 4 * Tk, 4));
      return Xk
    }, yk.b.prototype.K8 = function(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (Ik = Ik || 16, "matrix" === kk) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Fk ? Fk.length : 32 * Ik, this._thinInstanceDataStorage.matrixData = Fk, this._thinInstanceDataStorage.worldMatrices = null, null !== Fk ? (this._thinInstanceDataStorage.instancesCount = Fk.length / Ik, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Fk, Xk), this.ue || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.ue || this.refreshBoundingInfo());
      else if ("previousMatrix" === kk) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Fk, null !== Fk && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Fk, Xk));
      else if ("splatIndex" === kk && Fk) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Fk.length / Ik, this._userThinInstanceBuffersStorage.data[kk] = Fk, this._userThinInstanceBuffersStorage.strides[kk] = Ik, this._userThinInstanceBuffersStorage.sizes[kk] = Fk.length;
        const Xk = new lk.e(this.Oe(), Fk, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Xk;
        for (let Fk = 0; Fk < 4; Fk++) this.setVerticesBuffer(Xk.createVertexBuffer(kk + Fk, 4 * Fk, 4))
      } else kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), null === Fk ? this._userThinInstanceBuffersStorage?.data[kk] && (this.removeVerticesData(kk), delete this._userThinInstanceBuffersStorage.data[kk], delete this._userThinInstanceBuffersStorage.strides[kk], delete this._userThinInstanceBuffersStorage.sizes[kk], delete this._userThinInstanceBuffersStorage.vertexBuffers[kk]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[kk] = Fk, this._userThinInstanceBuffersStorage.strides[kk] = Ik, this._userThinInstanceBuffersStorage.sizes[kk] = Fk.length, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new lk.l(this.Oe(), Fk, kk, !Xk, !1, Ik, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, yk.b.prototype.o9 = function(kk) {
      "matrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === kk ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0, this._thinInstanceDataStorage.instancesCount) : (kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[kk].isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0)))
    }, yk.b.prototype.thinInstancePartialBufferUpdate = function(kk, Fk, Ik) {
      if ("matrix" === kk) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Fk ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * Ik * Float32Array.BYTES_PER_ELEMENT, 16 * Fk), 16 * Ik) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Fk, Ik));
      else if (kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk]) {
        const Xk = this._userThinInstanceBuffersStorage.vertexBuffers[kk];
        if ("number" === typeof Fk) {
          const Xk = new Float32Array(this._userThinInstanceBuffersStorage.data[kk].buffer, this._userThinInstanceBuffersStorage.data[kk].byteOffset + Ik * this._userThinInstanceBuffersStorage.strides[kk] * Float32Array.BYTES_PER_ELEMENT, Fk * this._userThinInstanceBuffersStorage.strides[kk]);
          this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(Xk, Ik * this._userThinInstanceBuffersStorage.strides[kk])
        } else Xk.updateDirectly(Fk, Ik)
      }
    }, yk.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const kk = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Fk = 0; Fk < this._thinInstanceDataStorage.instancesCount; ++Fk) this._thinInstanceDataStorage.worldMatrices[Fk] = Xk.c.FromArray(kk, 16 * Fk)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, yk.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const yk = this._thinInstanceDataStorage.boundingVectors;
      if (kk || !this.rawBoundingInfo) {
        if (yk.length = 0, Tk && function(kk, Fk, Ik) {
            const Tk = kk._userThinInstanceBuffersStorage,
              yk = Tk?.data[ak],
              ek = Tk?.strides[ak];
            if (!yk || !ek || ek < 4 || !qk(kk)) return !1;
            const wk = kk._thinInstanceDataStorage.matrixData;
            if (!wk) return !1;
            const Hk = {},
              Jk = Xk.l.Vector4[0],
              xk = Xk.l.Ge[1],
              Pk = Xk.l.Ge[2],
              Kk = Xk.l.Ge[3],
              Qk = Xk.l.Ge[4],
              sk = Xk.l.Ge[5],
              Vk = Xk.l.Ge[6],
              zk = Xk.l.Matrix[2],
              Sk = kk.geometry ? kk.geometry.boundingBias : null,
              vk = kk.getTotalVertices();
            xk.I6(Number.POSITIVE_INFINITY), Pk.I6(Number.NEGATIVE_INFINITY), Kk.I6(Number.POSITIVE_INFINITY), Qk.I6(Number.NEGATIVE_INFINITY);
            for (let ik = 0; ik < kk._thinInstanceDataStorage.instancesCount; ++ik) {
              const Fk = ik * ek;
              Jk.set(yk[Fk], yk[Fk + 1], yk[Fk + 2], yk[Fk + 3]);
              const Tk = kk._getData({
                applyMorph: Ik,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Jk,
                updatePositionsArray: !1,
                cache: Hk
              }, null, lk.l.PositionKind);
              if (!Tk) return !1;
              Lk(Tk, vk, sk, Vk), tk(sk, Vk, Sk), xk.minimizeInPlace(sk), Pk.maximizeInPlace(Vk), Xk.c.FromArrayToRef(wk, 16 * ik, zk), Sk ? Zk(sk, Vk, zk, Kk, Qk) : jk(Tk, vk, zk, Kk, Qk)
            }
            return !(!isFinite(xk.x) || !isFinite(Kk.x)) && (kk.vR().reConstruct(Kk, Qk), kk.rawBoundingInfo = new ik.d(xk, Pk), function(kk, Fk) {
              kk.length = 0;
              for (let Ik = 0; Ik < Fk.boundingBox.vectors.length; ++Ik) kk.push(Fk.boundingBox.vectors[Ik].clone())
            }(Fk, kk.rawBoundingInfo), kk._updateBoundingInfo(), !0)
          }(this, yk, Ik)) return;
        Tk && this.bakedVertexAnimationManager?.isEnabled && qk(this) ? this.refreshBoundingInfo({
          applySkeleton: Fk,
          applyMorph: Ik,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Fk, Ik);
        const kk = this.vR();
        this.rawBoundingInfo = new ik.d(kk.minimum, kk.maximum)
      }
      const ek = this.vR(),
        wk = this._thinInstanceDataStorage.matrixData;
      if (0 === yk.length)
        for (let Xk = 0; Xk < ek.boundingBox.vectors.length; ++Xk) yk.push(ek.boundingBox.vectors[Xk].clone());
      Xk.l.Ge[0].I6(Number.POSITIVE_INFINITY), Xk.l.Ge[1].I6(Number.NEGATIVE_INFINITY);
      for (let ik = 0; ik < this._thinInstanceDataStorage.instancesCount; ++ik) {
        Xk.c.FromArrayToRef(wk, 16 * ik, Xk.l.Matrix[0]);
        for (let kk = 0; kk < yk.length; ++kk) Xk.t.TransformCoordinatesToRef(yk[kk], Xk.l.Matrix[0], Xk.l.Ge[2]), Xk.l.Ge[0].minimizeInPlace(Xk.l.Ge[2]), Xk.l.Ge[1].maximizeInPlace(Xk.l.Ge[2])
      }
      ek.reConstruct(Xk.l.Ge[0], Xk.l.Ge[1]), this._updateBoundingInfo()
    }, yk.b.prototype._thinInstanceRecreateBuffer = function(kk) {
      let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === kk ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Fk)) : "previousMatrix" === kk ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Fk)) : (kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new lk.l(this.Oe(), this._userThinInstanceBuffersStorage.data[kk], kk, !Fk, !1, this._userThinInstanceBuffersStorage.strides[kk], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, yk.b.prototype._thinInstanceUpdateBufferSize = function(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      kk === lk.l.ColorKind && (kk = lk.l.ColorInstanceKind);
      const Ik = "matrix" === kk;
      if (!Ik && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[kk])) return;
      const Xk = Ik ? 16 : this._userThinInstanceBuffersStorage.strides[kk],
        Tk = Ik ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[kk];
      let ik = Ik ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[kk];
      const yk = (this._thinInstanceDataStorage.instancesCount + Fk) * Xk;
      let ak = Tk;
      for (; ak < yk;) ak *= 2;
      if (!ik || Tk != ak) {
        if (ik) {
          const kk = new Float32Array(ak);
          kk.set(ik, 0), ik = kk
        } else ik = new Float32Array(ak);
        Ik ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ik, !1), this._thinInstanceDataStorage.matrixData = ik, this._thinInstanceDataStorage.matrixBufferSize = ak, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ik, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.data[kk] = ik, this._userThinInstanceBuffersStorage.sizes[kk] = ak, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new lk.l(this.Oe(), ik, kk, !0, !1, Xk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
      }
    }, yk.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, yk.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40449: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => xk,
      h: () => wk
    });
    var Xk, Tk, ik, yk, lk = Ik(40003),
      ak = Ik(40011),
      qk = Ik(40021),
      Lk = Ik(37187),
      tk = Ik(37153),
      Zk = Ik(40218),
      jk = Ik(37201),
      ek = Ik(39863);
    let wk = (() => {
      var kk;
      let Fk, Ik, Xk, Tk, ik, yk, jk, ek, wk, Hk = Zk.b,
        Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Sk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [];
      return kk = class extends Hk {
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
          let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Fk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new tk.t(0, 0, 1), this._up = new tk.t(0, 1, 0), this._right = new tk.t(1, 0, 0), this._position = (0, lk.n)(this, Jk, tk.t.Zero()), this._rotation = ((0, lk.n)(this, xk), (0, lk.n)(this, Pk, tk.t.Zero())), this._rotationQuaternion = ((0, lk.n)(this, Kk), (0, lk.n)(this, Qk, null)), this._scaling = ((0, lk.n)(this, sk), (0, lk.n)(this, Vk, tk.t.One())), this._transformToBoneReferal = ((0, lk.n)(this, zk), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, lk.n)(this, Sk, kk.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, lk.n)(this, vk), (0, lk.n)(this, Ek, 1)), this._infiniteDistance = ((0, lk.n)(this, Ok), (0, lk.n)(this, nk, !1)), this.ignoreNonUniformScaling = ((0, lk.n)(this, Gk), (0, lk.n)(this, pk, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, lk.n)(this, uk), (0, lk.n)(this, bk, !1)), this._poseMatrix = ((0, lk.n)(this, Rk), null), this._localMatrix = tk.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = tk.t.Zero(), this._absoluteScaling = tk.t.Zero(), this._absoluteRotationQuaternion = tk.f.Identity(), this._pivotMatrix = tk.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Lk.e, this._nonUniformScaling = !1, Ik && this.mG().addTransformNode(this)
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
        get ci() {
          return this._scaling
        }
        set ci(kk) {
          this._scaling = kk, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(kk) {
          this._rotationQuaternion = kk, kk && this._rotation.I6(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return tk.t.TransformNormalFromFloatsToRef(0, 0, this.mG().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return tk.t.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return tk.t.TransformNormalFromFloatsToRef(this.mG().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(kk) {
          return this._poseMatrix ? (this._poseMatrix.kS(kk), this) : (this._poseMatrix = kk.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = tk.c.Identity()), this._poseMatrix
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
          return this._pivotMatrix.kS(kk), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Fk, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = tk.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Fk = arguments.length > 1 ? arguments[1] : void 0,
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          const Xk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0);
          Xk && Ik && Ik(this, Xk);
          for (const Tk of this.getChildTransformNodes(!0)) Tk.instantiateHierarchy(Xk, Fk, Ik);
          return Xk
        }
        Xp() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I6(0), this._rotationQuaternion = this._rotationQuaternion || tk.f.Identity(), kk.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = kk, this._absolutePosition.t5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get Nyk() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(kk) {
          if (!kk) return this;
          let Fk, Ik, Xk;
          if (void 0 === kk.x) {
            if (arguments.length < 3) return this;
            Fk = arguments[0], Ik = arguments[1], Xk = arguments[2]
          } else Fk = kk.x, Ik = kk.y, Xk = kk.z;
          if (this.parent) {
            const kk = tk.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(kk), tk.t.TransformCoordinatesFromFloatsToRef(Fk, Ik, Xk, kk, this.position)
          } else this.position.x = Fk, this.position.y = Ik, this.position.z = Xk;
          return this._absolutePosition.kS(kk), this
        }
        setPositionWithLocalVector(kk) {
          return this.computeWorldMatrix(), this.position = tk.t.TransformNormal(kk, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const kk = tk.l.Matrix[0];
          return this._localMatrix.invertToRef(kk), tk.t.TransformNormal(this.position, kk)
        }
        locallyTranslate(kk) {
          return this.computeWorldMatrix(!0), this.position = tk.t.TransformCoordinates(kk, this._localMatrix), this
        }
        lookAt(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const yk = kk._LookAtVectorCache,
            lk = 0 === ik ? this.position : this.getAbsolutePosition();
          if (Fk.subtractToRef(lk, yk), this.setDirection(yk, Ik, Xk, Tk), 1 === ik && this.parent)
            if (this.rotationQuaternion) {
              const kk = tk.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(kk);
              const Fk = tk.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Fk), Fk.invert(), kk.multiplyToRef(Fk, kk), this.rotationQuaternion.fromRotationMatrix(kk)
            } else {
              const kk = tk.l.Quaternion[0];
              tk.f.FromEulerVectorToRef(this.rotation, kk);
              const Fk = tk.l.Matrix[0];
              kk.toRotationMatrix(Fk);
              const Ik = tk.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Ik), Ik.invert(), Fk.multiplyToRef(Ik, Fk), kk.fromRotationMatrix(Fk), kk.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Am(kk) {
          const Fk = tk.t.Zero();
          return this.getDirectionToRef(kk, Fk), Fk
        }
        getDirectionToRef(kk, Fk) {
          return tk.t.TransformNormalToRef(kk, this.getWorldMatrix(), Fk), this
        }
        setDirection(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Tk = -Math.atan2(kk.z, kk.x) + Math.PI / 2,
            ik = Math.sqrt(kk.x * kk.x + kk.z * kk.z),
            yk = -Math.atan2(kk.y, ik);
          return this.rotationQuaternion ? tk.f.RotationYawPitchRollToRef(Tk + Fk, yk + Ik, Xk, this.rotationQuaternion) : (this.rotation.x = yk + Ik, this.rotation.y = Tk + Fk, this.rotation.z = Xk), this
        }
        setPivotPoint(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.mG().getRenderId() && this.computeWorldMatrix(!0);
          const Ik = this.getWorldMatrix();
          if (1 == Fk) {
            const Fk = tk.l.Matrix[0];
            Ik.invertToRef(Fk), kk = tk.t.TransformCoordinates(kk, Fk)
          }
          return this.setPivotMatrix(tk.c.Translation(-kk.x, -kk.y, -kk.z), !0)
        }
        getPivotPoint() {
          const kk = tk.t.Zero();
          return this.getPivotPointToRef(kk), kk
        }
        getPivotPointToRef(kk) {
          return kk.x = -this._pivotMatrix.m[12], kk.y = -this._pivotMatrix.m[13], kk.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const kk = tk.t.Zero();
          return this.getAbsolutePivotPointToRef(kk), kk
        }
        getAbsolutePivotPointToRef(kk) {
          return this.getPivotPointToRef(kk), tk.t.TransformCoordinatesToRef(kk, this.getWorldMatrix(), kk), this
        }
        UFk(kk) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Fk of this._children) Fk.UFk(kk);
          return super.UFk(kk)
        }
        setParent(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Fk && !this.parent) return this;
          const Tk = tk.l.Quaternion[0],
            ik = tk.l.Ge[0],
            yk = tk.l.Ge[1],
            lk = tk.l.Matrix[1];
          tk.c.IdentityToRef(lk);
          const ak = tk.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let qk = this.rotationQuaternion;
          return qk || (qk = kk._TmpRotation, tk.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qk)), tk.c.ComposeToRef(this.ci, qk, this.position, ak), this.parent && ak.multiplyToRef(this.parent.computeWorldMatrix(!0), ak), Fk && (Fk.computeWorldMatrix(!0).invertToRef(lk), ak.multiplyToRef(lk, ak)), ak.decompose(yk, Tk, ik, Ik ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.kS(Tk) : Tk.toEulerAnglesToRef(this.rotation), this.ci.kS(yk), this.position.kS(ik), this.parent = Fk, Xk && this.setPivotMatrix(tk.c.Identity()), this
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
        rotate(Fk, Ik, Xk) {
          let Tk;
          if (Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I6(0)), Xk && 0 !== Xk) {
            if (this.parent) {
              const kk = this.parent.getWorldMatrix(),
                Xk = tk.l.Matrix[0];
              kk.invertToRef(Xk), Fk = tk.t.TransformNormal(Fk, Xk), kk.determinant() < 0 && (Ik *= -1)
            }
            Tk = tk.f.RotationAxisToRef(Fk, Ik, kk._RotationAxisCache), Tk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Tk = tk.f.RotationAxisToRef(Fk, Ik, kk._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Tk, this.rotationQuaternion);
          return this
        }
        rotateAround(kk, Fk, Ik) {
          Fk.normalize(), this.rotationQuaternion || (this.rotationQuaternion = tk.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I6(0));
          const Xk = tk.l.Ge[0],
            Tk = tk.l.Ge[1],
            ik = tk.l.Ge[2],
            yk = tk.l.Quaternion[0],
            lk = tk.l.Matrix[0],
            ak = tk.l.Matrix[1],
            qk = tk.l.Matrix[2],
            Lk = tk.l.Matrix[3];
          return kk.subtractToRef(this.position, Xk), tk.c.TranslationToRef(Xk.x, Xk.y, Xk.z, lk), tk.c.TranslationToRef(-Xk.x, -Xk.y, -Xk.z, ak), tk.c.RotationAxisToRef(Fk, Ik, qk), ak.multiplyToRef(qk, Lk), Lk.multiplyToRef(lk, Lk), Lk.decompose(Tk, yk, ik), this.position.addInPlace(ik), yk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(kk, Fk, Ik) {
          const Xk = kk.scale(Fk);
          if (Ik && 0 !== Ik) this.setAbsolutePosition(this.getAbsolutePosition().add(Xk));
          else {
            const kk = this.getPositionExpressedInLocalSpace().add(Xk);
            this.setPositionWithLocalVector(kk)
          }
          return this
        }
        addRotation(kk, Fk, Ik) {
          let Xk;
          this.rotationQuaternion ? Xk = this.rotationQuaternion : (Xk = tk.l.Quaternion[1], tk.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Xk));
          const Tk = tk.l.Quaternion[0];
          return tk.f.RotationYawPitchRollToRef(Fk, kk, Ik, Tk), Xk.multiplyInPlace(Tk), this.rotationQuaternion || Xk.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== kk.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Xk = this.mG().getRenderId();
          if (!this._isDirty && !Fk && (this._currentRenderId === Xk || this.isSynchronized())) return this._currentRenderId = Xk, this._worldMatrix;
          Ik = Ik || this.mG().activeCamera, this._updateCache();
          const Tk = this._cache;
          Tk.pivotMatrixUpdated = !1, Tk.billboardMode = this.billboardMode, Tk.infiniteDistance = this.infiniteDistance, Tk.parent = this._parentNode, this._currentRenderId = Xk, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const ik = this._getEffectiveParent(),
            yk = kk._TmpScaling;
          let lk, ak = this._position;
          if (this._infiniteDistance && !this.parent && Ik) {
            const Fk = Ik.getWorldMatrix().m;
            ak = kk._TmpTranslation, ak.t5(this._position.x + Fk[12], this._position.y + Fk[13], this._position.z + Fk[14])
          }
          if (yk.t5(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, lk = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(tk.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.t5(0, 0, 0))
            }
          } else lk = kk._TmpRotation, tk.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, lk);
          if (this._usePivotMatrix) {
            const kk = tk.l.Matrix[1];
            tk.c.ScalingToRef(yk.x, yk.y, yk.z, kk);
            const Fk = tk.l.Matrix[0];
            lk.toRotationMatrix(Fk), this._pivotMatrix.multiplyToRef(kk, tk.l.Matrix[4]), tk.l.Matrix[4].multiplyToRef(Fk, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(ak.x, ak.y, ak.z)
          } else tk.c.ComposeToRef(yk, lk, ak, this._localMatrix);
          if (ik && ik.getWorldMatrix) {
            if (Fk && ik.computeWorldMatrix(Fk), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const kk = this.parent;
                kk.getSkeleton().prepare(), kk.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), tk.l.Matrix[7])
              } else tk.l.Matrix[7].kS(ik.getWorldMatrix());
              const Fk = tk.l.Ge[5],
                Ik = tk.l.Ge[6],
                Xk = tk.l.Quaternion[0];
              tk.l.Matrix[7].decompose(Ik, Xk, Fk), tk.c.ScalingToRef(Ik.x, Ik.y, Ik.z, tk.l.Matrix[7]), tk.l.Matrix[7].setTranslation(Fk), kk.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Xk, Fk), this._localMatrix.setTranslation(Fk)), this._localMatrix.multiplyToRef(tk.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const kk = this.parent;
              kk.getSkeleton().prepare(), this._localMatrix.multiplyToRef(kk.getFinalMatrix(), tk.l.Matrix[6]), tk.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(ik.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.kS(this._localMatrix);
          if (Ik && this.billboardMode)
            if (Tk.useBillboardPosition) {
              const Fk = tk.l.Ge[0];
              this._worldMatrix.getTranslationToRef(Fk);
              const Xk = Ik.globalPosition;
              this._worldMatrix.invertToRef(tk.l.Matrix[1]);
              const Tk = tk.l.Ge[1];
              tk.t.TransformCoordinatesToRef(Xk, tk.l.Matrix[1], Tk), Tk.normalize();
              const ik = -Math.atan2(Tk.z, Tk.x) + Math.PI / 2,
                yk = Math.sqrt(Tk.x * Tk.x + Tk.z * Tk.z),
                lk = -Math.atan2(Tk.y, yk);
              if (tk.f.RotationYawPitchRollToRef(ik, lk, 0, tk.l.Quaternion[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                const Fk = tk.l.Ge[1];
                tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (Fk.z = 0), tk.c.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, tk.l.Matrix[0])
              } else tk.c.FromQuaternionToRef(tk.l.Quaternion[0], tk.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
            } else {
              const Fk = tk.l.Ge[0];
              this._worldMatrix.getTranslationToRef(Fk), tk.l.Matrix[1].kS(Ik.getViewMatrix());
              const Xk = this.mG().useRightHandedSystem;
              if (Xk && tk.l.Matrix[1].multiplyToRef(kk._TmpRHRestore, tk.l.Matrix[1]), tk.l.Matrix[1].setTranslationFromFloats(0, 0, 0), tk.l.Matrix[1].invertToRef(tk.l.Matrix[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                tk.l.Matrix[0].decompose(void 0, tk.l.Quaternion[0], void 0);
                const Fk = tk.l.Ge[1];
                tk.l.Quaternion[0].toEulerAnglesToRef(Fk), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (Fk.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (Fk.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (Fk.z = 0), Xk && (Fk.y += Math.PI), tk.c.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, tk.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(tk.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(tk.l.Ge[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : ik && ik._nonUniformScaling ? this._updateNonUniformScalingState(ik._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.t5(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = tk.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), kk) {
            const kk = this.getChildren();
            for (let Fk = 0; Fk < kk.length; ++Fk) {
              const Ik = kk[Fk];
              if (Ik) {
                Ik.computeWorldMatrix();
                const kk = tk.l.Matrix[0];
                Ik._localMatrix.multiplyToRef(this._localMatrix, kk);
                const Fk = tk.l.Quaternion[0];
                kk.decompose(Ik.ci, Fk, Ik.position), Ik.rotationQuaternion ? Ik.rotationQuaternion.kS(Fk) : Fk.toEulerAnglesToRef(Ik.rotation)
              }
            }
          }
          this.ci.t5(1, 1, 1), this.position.t5(0, 0, 0), this.rotation.t5(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = tk.f.Identity()), this._worldMatrix = tk.c.Identity()
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
          return kk || (kk = this.mG().activeCamera), tk.t.TransformCoordinates(this.getAbsolutePosition(), kk.getViewMatrix())
        }
        getDistanceToCamera() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk || (kk = this.mG().activeCamera), this.getAbsolutePosition().subtract(kk.globalPosition).length()
        }
        clone(Fk, Ik, Xk) {
          const Tk = qk.b.Clone((() => new kk(Fk, this.mG())), this);
          if (Tk.name = Fk, Tk.id = Fk, Ik && (Tk.parent = Ik), !Xk) {
            const kk = this.getDescendants(!0);
            for (let Ik = 0; Ik < kk.length; Ik++) {
              const Xk = kk[Ik];
              Xk.clone && Xk.clone(Fk + "." + Xk.name, Tk)
            }
          }
          return Tk
        }
        serialize(kk) {
          const Fk = qk.b.Serialize(this, kk);
          return Fk.type = this.getClassName(), Fk.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Fk), Fk.localMatrix = this.getPivotMatrix().iXk(), Fk.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Fk.Xp = !0), qk.b.AppendSerializedAnimations(this, Fk), Fk.nZ = this.serializeAnimationRanges(), Fk
        }
        getChildTransformNodes(Fk, Ik) {
          const Xk = [];
          return this._getDescendants(Xk, Fk, (Fk => (!Ik || Ik(Fk)) && Fk instanceof kk)), Xk
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.mG().stopAnimation(this), this.mG().removeTransformNode(this), this._parentContainer) {
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
            Ik = arguments.length > 2 ? arguments[2] : void 0,
            Xk = null,
            Tk = null;
          Fk && (this.rotationQuaternion ? (Tk = this.rotationQuaternion.clone(), this.rotationQuaternion.t5(0, 0, 0, 1)) : this.rotation && (Xk = this.rotation.clone(), this.rotation.t5(0, 0, 0)));
          const ik = this.getHierarchyBoundingVectors(kk, Ik),
            yk = ik.max.subtract(ik.min),
            lk = Math.max(yk.x, yk.y, yk.z);
          if (0 === lk) return this;
          const ak = 1 / lk;
          return this.ci.scaleInPlace(ak), Fk && (this.rotationQuaternion && Tk ? this.rotationQuaternion.kS(Tk) : this.rotation && Xk && this.rotation.kS(Xk)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const qk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, ak.H)("position")], Ik = [(0, ak.H)("rotation")], Xk = [(0, ak.z)("rotationQuaternion")], Tk = [(0, ak.H)("ci")], ik = [(0, ak.J)("billboardMode")], yk = [(0, ak.J)()], jk = [(0, ak.J)("infiniteDistance")], ek = [(0, ak.J)()], wk = [(0, ak.J)()], (0, lk.j)(null, null, Fk, {
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
          metadata: qk
        }, Jk, xk), (0, lk.j)(null, null, Ik, {
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
          metadata: qk
        }, Pk, Kk), (0, lk.j)(null, null, Xk, {
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
          metadata: qk
        }, Qk, sk), (0, lk.j)(null, null, Tk, {
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
          metadata: qk
        }, Vk, zk), (0, lk.j)(null, null, ik, {
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
          metadata: qk
        }, Sk, vk), (0, lk.j)(null, null, yk, {
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
          metadata: qk
        }, Ek, Ok), (0, lk.j)(null, null, jk, {
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
          metadata: qk
        }, nk, Gk), (0, lk.j)(null, null, ek, {
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
          metadata: qk
        }, pk, uk), (0, lk.j)(null, null, wk, {
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
          metadata: qk
        }, bk, Rk), qk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qk
        })
      })(), kk.BILLBOARDMODE_NONE = 0, kk.BILLBOARDMODE_X = 1, kk.BILLBOARDMODE_Y = 2, kk.BILLBOARDMODE_Z = 4, kk.BILLBOARDMODE_ALL = 7, kk.BILLBOARDMODE_USE_POSITION = 128, kk.BillboardUseParentOrientation = !1, kk._TmpRotation = tk.f.Zero(), kk._TmpScaling = tk.t.Zero(), kk._TmpTranslation = tk.t.Zero(), kk._TmpRHRestore = tk.c.Scaling(1, 1, -1), kk._LookAtVectorCache = new tk.t(0, 0, 0), kk._RotationAxisCache = new tk.f, kk
    })();

    function Hk(kk, Fk, Ik) {
      const Xk = qk.b.Parse((() => new wk(kk.name, Fk)), kk, Fk, Ik);
      if (kk.localMatrix ? Xk.setPreTransformMatrix(tk.c.FromArray(kk.localMatrix)) : kk.pivotMatrix && Xk.setPivotMatrix(tk.c.FromArray(kk.pivotMatrix)), Xk.Av(kk.isEnabled), Xk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Xk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Xk._waitingParentInstanceIndex = kk.parentInstanceIndex), kk.Xp && (Xk._waitingFreezeWorldMatrix = kk.Xp), kk.animations) {
        for (let Fk = 0; Fk < kk.animations.length; Fk++) {
          const Ik = kk.animations[Fk],
            Tk = (0, jk.b)("BABYLON.Animation");
          Tk && Xk.animations.push(Tk.Parse(Ik))
        }
        Zk.b.ParseAnimationRanges(Xk, kk, Fk)
      }
      return kk.autoAnimate && Fk.beginAnimation(Xk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Xk
    }
    let Jk = !1;

    function xk() {
      Jk || (Jk = !0, wk.Parse = Hk)
    }(Xk = wk.prototype).aN ?? (Xk.aN = (0, ek.h)("TransformNode", "aN")), (Tk = wk.prototype).applyImpulse ?? (Tk.applyImpulse = (0, ek.h)("TransformNode", "applyImpulse")), (ik = wk.prototype).applyAngularImpulse ?? (ik.applyAngularImpulse = (0, ek.h)("TransformNode", "applyAngularImpulse")), (yk = wk.prototype).applyTorque ?? (yk.applyTorque = (0, ek.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(wk.prototype, "physicsBody") || Object.defineProperty(wk.prototype, "physicsBody", (0, ek.g)("TransformNode", "physicsBody"))
  },
  40424: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      try {
        const Xk = kk.next();
        Xk.done ? Fk(Xk) : Xk.value ? Xk.value.then((() => {
          Xk.value = void 0, Fk(Xk)
        }), Ik) : Fk(Xk)
      } catch (Xk) {
        Ik(Xk)
      }
    }

    function Tk() {
      let kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (Ik, Tk, ik) => {
        const yk = performance.now();
        void 0 === kk || yk - kk > Fk ? (kk = yk, setTimeout((() => {
          Xk(Ik, Tk, ik)
        }), 0)) : Xk(Ik, Tk, ik)
      }
    }

    function ik(kk, Fk, Ik, Xk, Tk) {
      const ik = () => {
        let yk;
        const lk = kk => {
          kk.done ? Ik(kk.value) : void 0 === yk ? yk = !0 : ik()
        };
        do {
          yk = void 0, Tk && Tk.aborted ? Xk(new Error("Aborted")) : Fk(kk, lk, Xk), void 0 === yk && (yk = !1)
        } while (yk)
      };
      ik()
    }

    function yk(kk, Fk) {
      let Ik;
      return ik(kk, Xk, (kk => Ik = kk), (kk => {
        throw kk
      }), Fk), Ik
    }
    async function lk(kk, Fk, Ik) {
      return await new Promise(((Xk, Tk) => {
        ik(kk, Fk, Xk, Tk, Ik)
      }))
    }

    function ak(kk, Fk) {
      return function() {
        return yk(kk(...arguments), Fk)
      }
    }
    Ik.d(Fk, {
      e: () => Tk,
      f: () => ak,
      j: () => lk,
      n: () => yk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
export const id = 247;
export const ids = [247];
export const modules = {
  39782: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => wk,
      f: () => yk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39672),
      bk = ik(36726),
      rk = ik(36698),
      Pk = ik(39787),
      mk = ik(38272),
      Mk = ik(36734),
      Kk = ik(39447),
      xk = ik(37679),
      nk = ik(37365),
      Uk = ik(39535),
      Hk = ik(39585);
    let wk = (() => {
      var kk;
      let ek, ik, Mk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik = Pk.b,
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Xk = [],
        Bk = [],
        ck = [],
        Tk = [],
        Zk = [],
        Ok = [],
        gk = [],
        Gk = [],
        Nk = [],
        Rk = [],
        Jk = [],
        ke = [],
        ee = [],
        ie = [],
        De = [],
        fe = [],
        Se = [];
      return kk = class extends Ik {
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
          let ek, ik;
          if (this.mode === kk.PERSPECTIVE_CAMERA) this.fovMode === kk.FOVMODE_VERTICAL_FIXED ? (ik = 2 * this.minZ * Math.tan(this.fov / 2), ek = this.JU().getAspectRatio(this) * ik) : (ek = 2 * this.minZ * Math.tan(this.fov / 2), ik = ek / this.JU().getAspectRatio(this));
          else {
            const kk = this.JU().getRenderWidth() / 2,
              Dk = this.JU().getRenderHeight() / 2;
            ek = (this.orthoRight ?? kk) - (this.orthoLeft ?? -kk), ik = (this.orthoTop ?? Dk) - (this.orthoBottom ?? -Dk)
          }
          return ek * ik
        }
        set orthoLeft(kk) {
          this._orthoLeft = kk;
          for (const ek of this._rigCameras) ek.orthoLeft = kk
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(kk) {
          this._orthoRight = kk;
          for (const ek of this._rigCameras) ek.orthoRight = kk
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(kk) {
          this._orthoBottom = kk;
          for (const ek of this._rigCameras) ek.orthoBottom = kk
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(kk) {
          this._orthoTop = kk;
          for (const ek of this._rigCameras) ek.orthoTop = kk
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(ek / (2 * kk))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(kk) {
          this._baseInertia = kk
        }
        set mode(kk) {
          this._mode = kk;
          for (const ek of this._rigCameras) ek.mode = kk
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(ek, ik, fk) {
          let Pk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Uk.e)(), super(ek, fk, !1), this.inputs = (0, Dk.e)(this, zk), this._position = (0, Dk.e)(this, Qk, rk.o.Zero()), this._upVector = ((0, Dk.e)(this, vk), (0, Dk.e)(this, Ek, rk.o.Up())), this.oblique = ((0, Dk.e)(this, hk), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Dk.e)(this, ak, .8), this.projectionPlaneTilt = ((0, Dk.e)(this, Wk), (0, Dk.e)(this, tk, 0)), this.minZ = ((0, Dk.e)(this, Xk), (0, Dk.e)(this, Bk, 1)), this.maxZ = ((0, Dk.e)(this, ck), (0, Dk.e)(this, Tk, 1e4)), this._baseInertia = ((0, Dk.e)(this, Zk), .9), this._mode = kk.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new xk.b(0, 0, 1, 1), this.layerMask = (0, Dk.e)(this, Ok, 268435455), this.fovMode = ((0, Dk.e)(this, gk), (0, Dk.e)(this, Gk, kk.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Dk.e)(this, Nk), (0, Dk.e)(this, Rk, kk.RIG_MODE_NONE)), this.interaxialDistance = ((0, Dk.e)(this, Jk), (0, Dk.e)(this, ke, void 0)), this.isStereoscopicSideBySide = ((0, Dk.e)(this, ee), (0, Dk.e)(this, ie, void 0)), this.ignoreCameraMaxZ = ((0, Dk.e)(this, De), (0, Dk.e)(this, fe, !1)), this.customRenderTargets = ((0, Dk.e)(this, Se), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new bk.c, this.onProjectionMatrixChangedObservable = new bk.c, this.onAfterCheckInputsObservable = new bk.c, this.onRestoreStateObservable = new bk.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new rk.b, this._postProcesses = new Array, this._activeMeshes = new Sk.h(256), this._globalPosition = rk.o.Zero(), this._computedViewMatrix = rk.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = rk.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = rk.c.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.XF().defaultCameraLayerMask, this.XF().addCamera(this), Pk && !this.XF().activeCamera && (this.XF().activeCamera = this), this.position = ik, this.renderPassId = this.XF().JU().createRenderPassId(`Camera ${ek}`)
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
          return "gw"
        }
        toString(kk) {
          let ek = "Name: " + this.name;
          if (ek += ", type: " + this.getClassName(), this.animations)
            for (let ik = 0; ik < this.animations.length; ik++) ek += ", animation[0]: " + this.animations[ik].toString(kk);
          return ek
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
            for (const ek of this._postProcesses)
              if (ek && !ek.isReady()) return !1;
          return super.isReady(kk)
        }
        _initCache() {
          super._initCache(), this._cache.position = new rk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new rk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(kk) {
          kk || super._updateCache(), this._cache.position.Fs(this.position), this._cache.upVector.Fs(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const ek = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ik = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === ek;
          if (!ik) return !1;
          const Dk = this.JU();
          return this.mode === kk.PERSPECTIVE_CAMERA ? ik = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Dk.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ik = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Dk.getRenderWidth() && this._cache.renderHeight === Dk.getRenderHeight(), this.oblique && (ik = ik && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ik
        }
        attachControl(kk, ek) {}
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
          for (let ek = 0, ik = this._rigCameras.length; ek < ik; ek++) {
            const kk = this._rigCameras[ek],
              ik = kk._rigPostProcess;
            if (ik) {
              "pass" === ik.getEffectName() && (kk.isIntermediate = 0 === this._postProcesses.length), kk._postProcesses = this._postProcesses.slice(0).concat(ik), ik.markTextureDirty()
            } else kk._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !kk.isReusable() && this._postProcesses.indexOf(kk) > -1 ? (mk.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == ek || ek < 0 ? this._postProcesses.push(kk) : null === this._postProcesses[ek] ? this._postProcesses[ek] = kk : this._postProcesses.splice(ek, 0, kk), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.pek(), this._postProcesses.indexOf(kk))
        }
        detachPostProcess(kk) {
          const ek = this._postProcesses.indexOf(kk); - 1 !== ek && (this._postProcesses[ek] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.pek(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return rk.b.Identity()
        }
        getViewMatrix(kk) {
          return !kk && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.XF().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(kk) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== kk && (this._projectionMatrix = kk)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(ek) {
          if (this._doNotComputeProjectionMatrix || !ek && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ik = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ik, this._refreshFrustumPlanes = !0;
          const Dk = this.JU(),
            fk = this.XF(),
            Sk = Dk.Xik;
          if (this.mode === kk.PERSPECTIVE_CAMERA) {
            let ek;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Dk.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), ek = fk.useRightHandedSystem ? rk.b.PerspectiveFovRHToRef : rk.b.PerspectiveFovLHToRef, ek(this.fov, Dk.getAspectRatio(this), Sk ? ik : this.minZ, Sk ? this.minZ : ik, this._projectionMatrix, this.fovMode === kk.FOVMODE_VERTICAL_FIXED, Dk.isNDCHalfZRange, this.projectionPlaneTilt, Sk)
          } else {
            const kk = Dk.getRenderWidth() / 2,
              ek = Dk.getRenderHeight() / 2;
            fk.useRightHandedSystem ? this.oblique ? rk.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -ek, this.orthoTop ?? ek, Sk ? ik : this.minZ, Sk ? this.minZ : ik, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Dk.isNDCHalfZRange) : rk.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -ek, this.orthoTop ?? ek, Sk ? ik : this.minZ, Sk ? this.minZ : ik, this._projectionMatrix, Dk.isNDCHalfZRange) : this.oblique ? rk.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -ek, this.orthoTop ?? ek, Sk ? ik : this.minZ, Sk ? this.minZ : ik, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Dk.isNDCHalfZRange) : rk.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -kk, this.orthoRight ?? kk, this.orthoBottom ?? -ek, this.orthoTop ?? ek, Sk ? ik : this.minZ, Sk ? this.minZ : ik, this._projectionMatrix, Dk.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Dk.getRenderWidth(), this._cache.renderHeight = Dk.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(kk) {
          return (this.radius || (this.target ? rk.o.Distance(this.position, this.target) : this.position.length())) + kk
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? nk.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = nk.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), ek && this.rigCameras.length > 0) {
            let ek = !1;
            for (const ik of this.rigCameras) ik._updateFrustumPlanes(), ek = ek || kk.isInFrustum(ik._frustumPlanes);
            return ek
          }
          return kk.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(kk) {
          return this._updateFrustumPlanes(), kk.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, Kk.k)("Ray")
        }
        getForwardRayToRef(kk) {
          throw (0, Kk.k)("Ray")
        }
        dispose(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.XF().stopAnimation(this), this.XF().removeCamera(this); this._rigCameras.length > 0;) {
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
              const ek = this._postProcesses[kk];
              ek && ek.dispose(this)
            }
          }
          let Dk = this.customRenderTargets.length;
          for (; --Dk >= 0;) this.customRenderTargets[Dk].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.XF().JU().releaseRenderPassId(this.renderPassId), super.dispose(ek, ik)
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
        setCameraRigMode(ek, ik) {
          if (this.cameraRigMode !== ek) {
            for (; this._rigCameras.length > 0;) {
              const kk = this._rigCameras.pop();
              kk && kk.dispose()
            }
            if (this.cameraRigMode = ek, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ik.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== kk.RIG_MODE_NONE) {
              const kk = this.createRigCamera(this.name + "_L", 0);
              kk && (kk._isLeftCamera = !0);
              const ek = this.createRigCamera(this.name + "_R", 1);
              ek && (ek._isRightCamera = !0), kk && ek && (this._rigCameras.push(kk), this._rigCameras.push(ek))
            }
            this._setRigMode(ik), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(kk) {}
        _getVRProjectionMatrix() {
          return rk.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.JU().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(kk, ek) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[kk] = ek, "interaxialDistance" === kk && (this._cameraRigParams.stereoHalfAngle = ek / .0637 * (Math.PI / 180))
        }
        createRigCamera(kk, ek) {
          return null
        }
        _updateRigCameras() {
          for (let kk = 0; kk < this._rigCameras.length; kk++) this._rigCameras[kk].minZ = this.minZ, this._rigCameras[kk].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[kk].fov = this.fov, this._rigCameras[kk].upVector.Fs(this.upVector);
          this.cameraRigMode === kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const kk = Hk.b.Serialize(this);
          return kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), this.parent && this.parent._serializeAsParent(kk), this.inputs && this.inputs.serialize(kk), Hk.b.AppendSerializedAnimations(this, kk), kk.lw = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        clone(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Dk = Hk.b.Clone(kk.GetConstructorFromName(this.getClassName(), ek, this.XF(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Dk.name = ek, Dk.parent = ik, this.onClonedObservable.notifyObservers(Dk), Dk
        }
        yN(kk) {
          const ek = rk.o.Zero();
          return this.getDirectionToRef(kk, ek), ek
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(kk, ek) {
          rk.o.TransformNormalToRef(kk, this.getWorldMatrix(), ek)
        }
        static GetConstructorFromName(ek, ik, Dk) {
          let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const bk = Pk.b.Construct(ek, ik, Dk, {
            interaxial_distance: fk,
            isStereoscopicSideBySide: Sk
          });
          return bk || (() => kk._CreateDefaultParsedCamera(ik, Dk))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let kk = this.XF().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (kk *= -1), kk
        }
      }, (() => {
        const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ik[Symbol.metadata] ?? null) : void 0;
        ek = [(0, fk.F)("position")], ik = [(0, fk.F)("upVector")], Mk = [(0, fk.I)()], wk = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0, fk.I)()], Vk = [(0, fk.I)()], Fk = [(0, fk.I)()], uk = [(0, fk.I)()], qk = [(0, fk.I)()], (0, Dk.d)(kk, null, Mk, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoLeft" in kk,
            get: kk => kk.orthoLeft
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(kk, null, wk, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoRight" in kk,
            get: kk => kk.orthoRight
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(kk, null, lk, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoBottom" in kk,
            get: kk => kk.orthoBottom
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(kk, null, pk, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: kk => "orthoTop" in kk,
            get: kk => kk.orthoTop
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(kk, null, Ak, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: kk => "inertia" in kk,
            get: kk => kk.inertia
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(kk, null, jk, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: kk => "mode" in kk,
            get: kk => kk.mode
          },
          metadata: Sk
        }, null, zk), (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: kk => "_position" in kk,
            get: kk => kk._position,
            set: (kk, ek) => {
              kk._position = ek
            }
          },
          metadata: Sk
        }, Qk, vk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: kk => "_upVector" in kk,
            get: kk => kk._upVector,
            set: (kk, ek) => {
              kk._upVector = ek
            }
          },
          metadata: Sk
        }, Ek, hk), (0, Dk.d)(null, null, yk, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: kk => "fov" in kk,
            get: kk => kk.fov,
            set: (kk, ek) => {
              kk.fov = ek
            }
          },
          metadata: Sk
        }, ak, Wk), (0, Dk.d)(null, null, Yk, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: kk => "projectionPlaneTilt" in kk,
            get: kk => kk.projectionPlaneTilt,
            set: (kk, ek) => {
              kk.projectionPlaneTilt = ek
            }
          },
          metadata: Sk
        }, tk, Xk), (0, Dk.d)(null, null, Lk, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "minZ" in kk,
            get: kk => kk.minZ,
            set: (kk, ek) => {
              kk.minZ = ek
            }
          },
          metadata: Sk
        }, Bk, ck), (0, Dk.d)(null, null, Ck, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "maxZ" in kk,
            get: kk => kk.maxZ,
            set: (kk, ek) => {
              kk.maxZ = ek
            }
          },
          metadata: Sk
        }, Tk, Zk), (0, Dk.d)(null, null, sk, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "layerMask" in kk,
            get: kk => kk.layerMask,
            set: (kk, ek) => {
              kk.layerMask = ek
            }
          },
          metadata: Sk
        }, Ok, gk), (0, Dk.d)(null, null, dk, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "fovMode" in kk,
            get: kk => kk.fovMode,
            set: (kk, ek) => {
              kk.fovMode = ek
            }
          },
          metadata: Sk
        }, Gk, Nk), (0, Dk.d)(null, null, Vk, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "cameraRigMode" in kk,
            get: kk => kk.cameraRigMode,
            set: (kk, ek) => {
              kk.cameraRigMode = ek
            }
          },
          metadata: Sk
        }, Rk, Jk), (0, Dk.d)(null, null, Fk, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "interaxialDistance" in kk,
            get: kk => kk.interaxialDistance,
            set: (kk, ek) => {
              kk.interaxialDistance = ek
            }
          },
          metadata: Sk
        }, ke, ee), (0, Dk.d)(null, null, uk, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: kk => "isStereoscopicSideBySide" in kk,
            get: kk => kk.isStereoscopicSideBySide,
            set: (kk, ek) => {
              kk.isStereoscopicSideBySide = ek
            }
          },
          metadata: Sk
        }, ie, De), (0, Dk.d)(null, null, qk, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "ignoreCameraMaxZ" in kk,
            get: kk => kk.ignoreCameraMaxZ,
            set: (kk, ek) => {
              kk.ignoreCameraMaxZ = ek
            }
          },
          metadata: Sk
        }, fe, Se), Sk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sk
        })
      })(), kk._CreateDefaultParsedCamera = (kk, ek) => {
        throw (0, Kk.k)("UniversalCamera")
      }, kk.PERSPECTIVE_CAMERA = 0, kk.ORTHOGRAPHIC_CAMERA = 1, kk.FOVMODE_VERTICAL_FIXED = 0, kk.FOVMODE_HORIZONTAL_FIXED = 1, kk.RIG_MODE_NONE = 0, kk.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, kk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, kk.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, kk.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, kk.RIG_MODE_VR = 20, kk.RIG_MODE_CUSTOM = 22, kk.ForceAttachControlToAlwaysPreventDefault = !1, kk
    })();

    function lk(kk, ek) {
      const ik = kk.type,
        Dk = wk.GetConstructorFromName(ik, kk.name, ek, kk.interaxial_distance, kk.isStereoscopicSideBySide),
        fk = Hk.b.Parse(Dk, kk, ek);
      if (void 0 !== kk.parentId && (fk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (fk._waitingParentInstanceIndex = kk.parentInstanceIndex), fk.inputs && (fk.inputs.parse(kk), fk._setupInputs()), kk.upVector && (fk.upVector = rk.o.FromArray(kk.upVector)), fk.setPosition && (fk.position.Z6(0, 0, 0), fk.setPosition(rk.o.FromArray(kk.position))), kk.target && fk.setTarget && fk.setTarget(rk.o.FromArray(kk.target)), kk.cameraRigMode) {
        const ek = kk.interaxial_distance ? {
          interaxialDistance: kk.interaxial_distance
        } : {};
        fk.setCameraRigMode(kk.cameraRigMode, ek)
      }
      if (kk.animations) {
        for (let ek = 0; ek < kk.animations.length; ek++) {
          const ik = kk.animations[ek],
            Dk = (0, Mk.d)("BABYLON.Animation");
          Dk && fk.animations.push(Dk.Parse(ik))
        }
        Pk.b.ParseAnimationRanges(fk, kk, ek)
      }
      return kk.autoAnimate && ek.beginAnimation(fk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), void 0 !== kk.isEnabled && fk.bV(kk.isEnabled), fk
    }
    let pk = !1;

    function yk() {
      pk || (pk = !0, wk.Parse = lk)
    }
  },
  39792: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik) {
        this._cameraPosition = ek, this._behavior = ik, this.activeInput = !1, this.speed = 1, this.sZ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Dk.o, this.rotationAccumulatedPixels = new Dk.o, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Dk.o.Zero(), this.rotationDeltaCurrentFrame = Dk.o.Zero(), this._zoomVelocity = 0, this._panVelocity = new Dk.o, this.referenceFrameRate = 60, this._rotationVelocity = new Dk.o, this._prevFrameTimeMs = 0, this._scene = kk
      }
      computeCurrentFrameDeltas() {
        const kk = this._scene.JU().getDeltaTime(),
          ek = this._getEffectiveDeltaMs(kk);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.A_(0), this.rotationDeltaCurrentFrame.A_(0), this.zoomDeltaCurrentFrame = 0, void(kk > 0 && (this._prevFrameTimeMs = kk));
        this.panDeltaCurrentFrame.A_(0), this.rotationDeltaCurrentFrame.A_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Z6(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * ek, this.panDeltaCurrentFrame), this._rotationVelocity.Z6(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.Z6(this._rotationVelocity.x * this.speed * this.rotationXSpeed * ek, this._rotationVelocity.y * this.speed * this.rotationYSpeed * ek, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.sZ * this._zoomSpeedMultiplier) * ek, kk > 0 && (this._prevFrameTimeMs = kk), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.A_(0), this.rotationAccumulatedPixels.A_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.A_(0), this.rotationAccumulatedPixels.A_(0)
      }
      resetPanVelocity() {
        this._panVelocity.A_(0), this.panAccumulatedPixels.A_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(kk) {
        const ek = this._scene.JU().getDeltaTime(),
          ik = this._getEffectiveDeltaMs(ek),
          Dk = 1e3 / this.referenceFrameRate;
        return Math.pow(kk, ik / Dk)
      }
      getFrameIndependentInputScale(kk) {
        const ek = 1 - kk;
        if (ek <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(kk)) / ek
      }
      _getEffectiveDeltaMs(kk) {
        return kk > 0 ? kk : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(kk, ek, ik) {
        let Dk = kk;
        const fk = this._scene.JU().getDeltaTime(),
          Sk = this._getEffectiveDeltaMs(fk);
        if (0 === Sk) return Dk;
        const bk = this.getFrameIndependentDecay(ik);
        if (Dk *= bk, 0 !== ek || this.activeInput) {
          const kk = 1 - ik;
          Dk += ek / Sk * (kk > 0 ? (1 - bk) / kk : 1)
        } else Math.abs(Dk) < 1e-6 && (Dk = 0);
        return Dk
      }
    }
  },
  39800: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek) {
        this.inputMap = [], this.handlers = kk, this._createDefaultEntries = ek, this.resetInputMap()
      }
      resolveInteraction(kk, ek) {
        for (const ik of this.inputMap)
          if (ik.source === kk && this._entryMatches(ik, ek)) return ik;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(kk, ek, ik) {
        const Dk = this.inputMap;
        for (let fk = 0; fk < Dk.length; fk++) {
          const Sk = Dk[fk];
          if (Sk.source === kk && Sk.interaction === ek && this._entryConditionsMatch(Sk, ik)) return Sk
        }
      }
      getEntries(kk, ek, ik) {
        const Dk = [],
          fk = this.inputMap;
        for (let Sk = 0; Sk < fk.length; Sk++) {
          const bk = fk[Sk];
          bk.source === kk && bk.interaction === ek && this._entryConditionsMatch(bk, ik) && Dk.push(bk)
        }
        return Dk
      }
      addEntry(kk) {
        const ek = this._entrySpecificity(kk);
        let ik = this.inputMap.length;
        for (let Dk = 0; Dk < this.inputMap.length; Dk++)
          if (this._entrySpecificity(this.inputMap[Dk]) < ek) {
            ik = Dk;
            break
          } this.inputMap.splice(ik, 0, kk)
      }
      setInteraction(kk, ek, ik) {
        const Dk = this.resolveInteraction(kk, ek);
        return Dk && this._entryCoversAllConditionsOf(Dk, ek) ? (Dk.interaction = ik, !0) : (this.addEntry({
          source: kk,
          ...ek ?? {},
          interaction: ik
        }), !0)
      }
      _entryCoversAllConditionsOf(kk, ek) {
        if (!ek) return !0;
        const ik = kk;
        for (const Dk of Object.keys(ek)) {
          const kk = ek[Dk];
          if (void 0 !== kk)
            if ("modifiers" === Dk) {
              const ek = ik.modifiers ?? {};
              for (const ik of Object.keys(kk))
                if (void 0 !== kk[ik] && void 0 === ek[ik]) return !1
            } else if (void 0 === ik[Dk]) return !1
        }
        return !0
      }
      setInteractions(kk, ek, ik) {
        let Dk = 0;
        const fk = this.inputMap;
        for (let Sk = 0; Sk < fk.length; Sk++) {
          const bk = fk[Sk];
          bk.source === kk && this._entryMatches(bk, ek) && (bk.interaction = ik, Dk++)
        }
        return Dk
      }
      _entryMatches(kk, ek) {
        switch (kk.source) {
          case "pointer":
            return (void 0 === kk.button || kk.button === ek?.button) && this._matchModifiers(kk.modifiers, ek?.modifiers);
          case "wheel":
            return this._matchModifiers(kk.modifiers, ek?.modifiers);
          case "touch":
            return void 0 === kk.touchCount || kk.touchCount === ek?.touchCount;
          case "keyboard":
            return (void 0 === kk.key || (Array.isArray(kk.key) ? -1 !== kk.key.indexOf(ek?.key ?? -1) : kk.key === ek?.key)) && this._matchModifiers(kk.modifiers, ek?.modifiers)
        }
      }
      _entryConditionsMatch(kk, ek) {
        if (!ek) return !0;
        switch (kk.source) {
          case "pointer":
            return (!("button" in ek) || kk.button === ek.button) && (!("modifiers" in ek) || this._entryModifiersMatch(kk.modifiers, ek.modifiers));
          case "wheel":
            return !("modifiers" in ek) || this._entryModifiersMatch(kk.modifiers, ek.modifiers);
          case "touch":
            return !("touchCount" in ek) || kk.touchCount === ek.touchCount;
          case "keyboard":
            if ("key" in ek) {
              if (void 0 === kk.key) return void 0 === ek.key;
              if (void 0 === ek.key || (Array.isArray(kk.key) ? -1 === kk.key.indexOf(ek.key) : kk.key !== ek.key)) return !1
            }
            return !("modifiers" in ek) || this._entryModifiersMatch(kk.modifiers, ek.modifiers)
        }
      }
      _entrySpecificity(kk) {
        let ek = 0;
        return "button" in kk && void 0 !== kk.button && ek++, "key" in kk && void 0 !== kk.key && ek++, "touchCount" in kk && void 0 !== kk.touchCount && ek++, "modifiers" in kk && kk.modifiers && ek++, ek
      }
      _matchModifiers(kk, ek) {
        return !kk || (void 0 === kk.ctrl || kk.ctrl === (ek?.ctrl ?? !1)) && ((void 0 === kk.shift || kk.shift === (ek?.shift ?? !1)) && (void 0 === kk.alt || kk.alt === (ek?.alt ?? !1)))
      }
      _entryModifiersMatch(kk, ek) {
        if (!ek) return !kk;
        return void 0 !== ek.ctrl || void 0 !== ek.shift || void 0 !== ek.alt ? (void 0 === ek.ctrl || kk?.ctrl === ek.ctrl) && ((void 0 === ek.shift || kk?.shift === ek.shift) && (void 0 === ek.alt || kk?.alt === ek.alt)) : !kk || void 0 === kk.ctrl && void 0 === kk.shift && void 0 === kk.alt
      }
    }
  },
  39778: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => lk,
      e: () => Hk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39782),
      bk = ik(36698),
      rk = ik(36703),
      Pk = ik(39790),
      mk = ik(39787),
      Mk = ik(39792),
      Kk = ik(39800);
    class xk extends Mk.e {
      constructor(kk, ek, ik) {
        super(kk, ek, ik), this.input = new Kk.b({
          translate: (kk, ek, ik) => {
            this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += ek, this.panAccumulatedPixels.z += ik
          },
          rotate: (kk, ek) => {
            this.rotationAccumulatedPixels.x += kk, this.rotationAccumulatedPixels.y += ek
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
    const nk = bk.b.Zero(),
      Uk = bk.c.Identity();
    let Hk = (() => {
        var kk;
        let ek, ik, mk, Mk, Kk = Sk.e,
          Hk = [],
          wk = [],
          lk = [],
          pk = [],
          yk = [],
          Yk = [],
          Lk = [],
          Ck = [];
        return kk = class extends Kk {
          get inertia() {
            return this._targetInertia
          }
          set inertia(kk) {
            this._targetInertia = kk, this.movement && (this.movement.panInertia = kk, this.movement.rotationInertia = kk)
          }
          constructor(kk, ek, ik) {
            super(kk, ek, ik, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new bk.o(0, 0, 0), this.cameraRotation = new bk.l(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Dk.e)(this, Hk, !1), this.rotation = ((0, Dk.e)(this, wk), (0, Dk.e)(this, lk, void 0)), this.rotationQuaternion = (0, Dk.e)(this, pk), this.speed = (0, Dk.e)(this, yk, 2), this.noRotationConstraint = ((0, Dk.e)(this, Yk), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = rk.d, this._rotationEpsilon = rk.d, this.lockedTarget = (0, Dk.e)(this, Lk, null), this._currentTarget = ((0, Dk.e)(this, Ck), bk.o.Zero()), this._initialFocalDistance = 1, this._viewMatrix = bk.b.Zero(), this._cameraTransformMatrix = bk.b.Zero(), this._cameraRotationMatrix = bk.b.Zero(), this._transformedReferencePoint = bk.o.Zero(), this._deferredPositionUpdate = new bk.o, this._deferredRotationQuaternionUpdate = new bk.c, this._deferredRotationUpdate = new bk.o, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = bk.o.Forward(this.XF().useRightHandedSystem), this.rotation = new bk.o(0, this.XF().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new xk(this.XF(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(kk) {
            this.getWorldMatrix();
            const ek = bk.j.eH[0],
              ik = bk.j.eH[1];
            return ik.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ik, ek), ek.scaleInPlace(kk), this.globalPosition.add(ek)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.Z6(0, 0, 0), this.cameraRotation.Z6(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new bk.c(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(kk) {
            kk || super._updateCache();
            const ek = this._getLockedTargetPosition();
            ek ? this._cache.lockedTarget ? this._cache.lockedTarget.Fs(ek) : this._cache.lockedTarget = ek.clone() : this._cache.lockedTarget = null, this._cache.rotation.Fs(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Fs(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const kk = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(kk) : !kk) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const kk = this.JU();
            return this.speed * Math.sqrt(kk.getDeltaTime() / (100 * kk.getFps()))
          }
          setTarget(kk) {
            this.upVector.normalize(), this._initialFocalDistance = kk.subtract(this.position).length(), this.position.z === kk.z && (this.position.z += rk.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.XF().useRightHandedSystem ? bk.b.LookAtRHToRef(this.position, kk, bk.o.UpReadOnly, nk) : bk.b.LookAtLHToRef(this.position, kk, bk.o.UpReadOnly, nk), nk.invert();
            const ek = this.rotationQuaternion || Uk;
            bk.c.FromRotationMatrixToRef(nk, ek), ek.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(bk.j.Matrix[0]), bk.o.TransformNormalToRef(this.cameraDirection, bk.j.Matrix[0], bk.j.eH[0]), this._deferredPositionUpdate.addInPlace(bk.j.eH[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Fs(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Fs(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const kk = this.movement,
              ek = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            kk.panAccumulatedPixels.addInPlace(this.cameraDirection), kk.rotationAccumulatedPixels.x += this.cameraRotation.x, kk.rotationAccumulatedPixels.y += this.cameraRotation.y, kk.computeCurrentFrameDeltas(), this.cameraDirection.Fs(kk.panDeltaCurrentFrame), this.cameraRotation.set(kk.rotationDeltaCurrentFrame.x, kk.rotationDeltaCurrentFrame.y);
            const ik = this.speed * this._panningEpsilon;
            !ek && Math.abs(this.cameraDirection.x) < ik && Math.abs(this.cameraDirection.y) < ik && Math.abs(this.cameraDirection.z) < ik && (this.cameraDirection.A_(0), kk.resetPanVelocity());
            const Dk = this.invertRotation ? -this.inverseRotationSpeed : 1,
              fk = this._decideIfNeedsToMove(),
              Sk = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Fs(this.rotation), this._deferredPositionUpdate.Fs(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Fs(this.rotationQuaternion), fk && this._updatePosition(), Sk) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Dk, this._deferredRotationUpdate.y += this.cameraRotation.y * Dk, !this.noRotationConstraint) {
                const kk = 1.570796;
                this._deferredRotationUpdate.x > kk && (this._deferredRotationUpdate.x = kk), this._deferredRotationUpdate.x < -kk && (this._deferredRotationUpdate.x = -kk)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Fs(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (bk.c.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Fs(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.A_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : bk.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return bk.o.TransformNormalToRef(bk.o.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), bk.o.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Pk.d.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (bk.c.FromEulerVectorToRef(this.rotation, Uk), Pk.d.Y.rotateByQuaternionToRef(Uk, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(kk, ek, ik) {
            if (this.XF().useRightHandedSystem ? bk.b.LookAtRHToRef(kk, ek, ik, this._viewMatrix) : bk.b.LookAtLHToRef(kk, ek, ik, this._viewMatrix), this.parent) {
              const kk = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(kk, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(ek, ik) {
            if (this.cameraRigMode !== Sk.e.RIG_MODE_NONE) {
              const ik = new kk(ek, this.position.clone(), this.XF());
              return ik.isRigCamera = !0, ik.rigParent = this, this.cameraRigMode === Sk.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new bk.c), ik._cameraRigParams = {}, ik.rotationQuaternion = new bk.c), ik.mode = this.mode, ik.orthoLeft = this.orthoLeft, ik.orthoRight = this.orthoRight, ik.orthoTop = this.orthoTop, ik.orthoBottom = this.orthoBottom, ik
            }
            return null
          }
          _updateRigCameras() {
            const kk = this._rigCameras[0],
              ek = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Sk.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Sk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Sk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Sk.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Sk.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ik = this.cameraRigMode === Sk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Dk = this.cameraRigMode === Sk.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ik, kk), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Dk, ek);
                break
              }
              case Sk.e.RIG_MODE_VR:
                kk.rotationQuaternion && ek.rotationQuaternion && this.rotationQuaternion ? (kk.rotationQuaternion.Fs(this.rotationQuaternion), ek.rotationQuaternion.Fs(this.rotationQuaternion)) : (kk.rotation.Fs(this.rotation), ek.rotation.Fs(this.rotation)), kk.position.Fs(this.position), ek.position.Fs(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(ek, ik) {
            this.getTarget().subtractToRef(this.position, kk._TargetFocalPoint), kk._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Dk = kk._TargetFocalPoint.addInPlace(this.position);
            bk.b.TranslationToRef(-Dk.x, -Dk.y, -Dk.z, kk._TargetTransformMatrix), kk._TargetTransformMatrix.multiplyToRef(bk.b.RotationAxis(ik.upVector, ek), kk._RigCamTransformMatrix), bk.b.TranslationToRef(Dk.x, Dk.y, Dk.z, kk._TargetTransformMatrix), kk._RigCamTransformMatrix.multiplyToRef(kk._TargetTransformMatrix, kk._RigCamTransformMatrix), bk.o.TransformCoordinatesToRef(this.position, kk._RigCamTransformMatrix, ik.position), ik.setTarget(Dk)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.F)()], mk = [(0, fk.I)()], Mk = [(0, fk.u)("lockedTargetId")], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: kk => "updateUpVectorFromRotation" in kk,
              get: kk => kk.updateUpVectorFromRotation,
              set: (kk, ek) => {
                kk.updateUpVectorFromRotation = ek
              }
            },
            metadata: Sk
          }, Hk, wk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: kk => "rotation" in kk,
              get: kk => kk.rotation,
              set: (kk, ek) => {
                kk.rotation = ek
              }
            },
            metadata: Sk
          }, lk, pk), (0, Dk.d)(null, null, mk, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: kk => "speed" in kk,
              get: kk => kk.speed,
              set: (kk, ek) => {
                kk.speed = ek
              }
            },
            metadata: Sk
          }, yk, Yk), (0, Dk.d)(null, null, Mk, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: kk => "lockedTarget" in kk,
              get: kk => kk.lockedTarget,
              set: (kk, ek) => {
                kk.lockedTarget = ek
              }
            },
            metadata: Sk
          }, Lk, Ck), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk._RigCamTransformMatrix = new bk.b, kk._TargetTransformMatrix = new bk.b, kk._TargetFocalPoint = new bk.o, kk
      })(),
      wk = !1;

    function lk() {
      wk || (wk = !0, mk.b.AddNodeConstructor("TargetCamera", ((kk, ek) => () => new Hk(kk, bk.o.Zero(), ek))))
    }
  },
  39531: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(39467);
    let fk = !1;

    function Sk() {
      fk || (fk = !0, Dk.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Dk.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Dk.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Dk.c.prototype.getAspectRatio = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = kk.viewport;
        return this.getRenderWidth(ek) * ik.width / (this.getRenderHeight(ek) * ik.height)
      }, Dk.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Dk.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39601: (kk, ek, ik) => {
    var Dk = ik(39467),
      fk = ik(39607);
    let Sk = !1;
    Sk || (Sk = !0, (0, fk.s)(), Dk.c.prototype._loadFileAsync = async function(kk, ek, ik) {
      return await new Promise(((Dk, fk) => {
        this._loadFile(kk, (kk => {
          Dk(kk)
        }), void 0, ek, ik, ((kk, ek) => {
          fk(ek)
        }))
      }))
    })
  },
  39599: (kk, ek, ik) => {
    (0, ik(39535).e)()
  },
  39535: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(39467);
    let fk = !1;

    function Sk() {
      fk || (fk = !0, Dk.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Dk.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Dk.c.prototype.createRenderPassId = function(kk) {
        const ek = ++Dk.c._RenderPassIdCounter;
        return this._renderPassNames[ek] = kk ?? "NONAME", ek
      }, Dk.c.prototype.releaseRenderPassId = function(kk) {
        this._renderPassNames[kk] = void 0;
        for (let ek = 0; ek < this.scenes.length; ++ek) {
          const ik = this.scenes[ek];
          for (let ek = 0; ek < ik.meshes.length; ++ek) {
            const Dk = ik.meshes[ek];
            if (Dk._releaseRenderPassId(kk), Dk.TY)
              for (let ek = 0; ek < Dk.TY.length; ++ek) {
                Dk.TY[ek]._removeDrawWrapper(kk)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(kk)
      })
    }
  },
  39637: (kk, ek, ik) => {
    var Dk = ik(39646),
      fk = ik(39467);
    let Sk = !1;
    Sk || (Sk = !0, fk.c.GetCompatibleTextureLoader = Dk.b)
  },
  39540: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(39398);
    let fk = !1;

    function Sk() {
      fk || (fk = !0, Dk.ThinEngine.prototype.setAlphaMode = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ik] === kk) {
          if (!ek) {
            const ek = 0 === kk;
            this.depthCullingState.depthMask !== ek && (this.depthCullingState.depthMask = ek)
          }
          return
        }
        const Dk = 0 === kk;
        this._alphaState.setAlphaBlend(!Dk, ik), this._alphaState.setAlphaMode(kk, ik), ek || (this.depthCullingState.depthMask = Dk), this._alphaMode[ik] = kk
      })
    }
  },
  39552: (kk, ek, ik) => {
    var Dk = ik(39391),
      fk = ik(38272),
      Sk = ik(39398),
      bk = ik(39555),
      rk = ik(39517);
    class Pk extends bk.c {
      setDepthStencilTexture(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(kk, ek), !kk) return;
        const ik = this._engine,
          Dk = this._context,
          fk = kk._hardwareTexture;
        if (fk && kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const ek = ik._currentFramebuffer;
          ik._bindUnboundFramebuffer(this._MSAAFramebuffer), Dk.framebufferRenderbuffer(Dk.FRAMEBUFFER, (0, rk.b)(kk.format) ? Dk.DEPTH_STENCIL_ATTACHMENT : Dk.DEPTH_ATTACHMENT, Dk.RENDERBUFFER, fk.getMSAARenderBuffer()), ik._bindUnboundFramebuffer(ek)
        }
      }
      constructor(kk, ek, ik, Dk, fk) {
        super(kk, ek, ik, Dk), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = fk
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
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const kk = this._engine,
            ek = kk._currentFramebuffer,
            ik = this._context;
          kk._bindUnboundFramebuffer(this._framebuffer), ik.framebufferRenderbuffer(ik.FRAMEBUFFER, ik.DEPTH_STENCIL_ATTACHMENT, ik.RENDERBUFFER, null), ik.framebufferRenderbuffer(ik.FRAMEBUFFER, ik.DEPTH_ATTACHMENT, ik.RENDERBUFFER, null), ik.framebufferRenderbuffer(ik.FRAMEBUFFER, ik.STENCIL_ATTACHMENT, ik.RENDERBUFFER, null), kk._bindUnboundFramebuffer(ek), ik.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(kk, ek, ik, Dk, fk, Sk)
      }
      shareDepth(kk) {
        super.shareDepth(kk);
        const ek = this._context,
          ik = this._depthStencilBuffer,
          Dk = kk._MSAAFramebuffer || kk._framebuffer,
          fk = this._engine;
        kk._depthStencilBuffer && kk._depthStencilBuffer !== ik && ek.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = ik;
        const Sk = kk._generateStencilBuffer ? ek.DEPTH_STENCIL_ATTACHMENT : ek.DEPTH_ATTACHMENT;
        fk._bindUnboundFramebuffer(Dk), ek.framebufferRenderbuffer(ek.FRAMEBUFFER, Sk, ek.RENDERBUFFER, ik), fk._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const fk = kk._hardwareTexture;
        if (!fk) return;
        const Sk = this._framebuffer,
          bk = this._engine,
          rk = bk._currentFramebuffer;
        let Pk;
        if (bk._bindUnboundFramebuffer(Sk), bk.VH > 1) {
          const Sk = this._context;
          Pk = Sk["COLOR_ATTACHMENT" + ek], kk.is2DArray || kk.is3D ? (ik = ik ?? this.layerIndices?.[ek] ?? 0, Sk.framebufferTextureLayer(Sk.FRAMEBUFFER, Pk, fk.underlyingResource, Dk, ik)) : kk.isCube ? (ik = ik ?? this.faceIndices?.[ek] ?? 0, Sk.framebufferTexture2D(Sk.FRAMEBUFFER, Pk, Sk.TEXTURE_CUBE_MAP_POSITIVE_X + ik, fk.underlyingResource, Dk)) : Sk.framebufferTexture2D(Sk.FRAMEBUFFER, Pk, Sk.TEXTURE_2D, fk.underlyingResource, Dk)
        } else {
          const kk = this._context;
          Pk = kk["COLOR_ATTACHMENT" + ek + "_WEBGL"];
          const Sk = void 0 !== ik ? kk.TEXTURE_CUBE_MAP_POSITIVE_X + ik : kk.TEXTURE_2D;
          kk.framebufferTexture2D(kk.FRAMEBUFFER, Pk, Sk, fk.underlyingResource, Dk)
        }
        if (kk._autoMSAAManagement && this._MSAAFramebuffer) {
          const kk = this._context;
          bk._bindUnboundFramebuffer(this._MSAAFramebuffer), kk.framebufferRenderbuffer(kk.FRAMEBUFFER, Pk, kk.RENDERBUFFER, fk.getMSAARenderBuffer())
        }
        bk._bindUnboundFramebuffer(rk)
      }
      setTexture(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(kk, ek, ik), this._bindTextureRenderTarget(kk, ek)
      }
      setLayerAndFaceIndices(kk, ek) {
        if (super.setLayerAndFaceIndices(kk, ek), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ik = this._attachments?.length ?? this.textures.length;
        for (let Dk = 0; Dk < ik; Dk++) {
          const kk = this.textures[Dk];
          kk && (kk.is2DArray || kk.is3D ? this._bindTextureRenderTarget(kk, Dk, this.layerIndices[Dk]) : kk.isCube ? this._bindTextureRenderTarget(kk, Dk, this.faceIndices[Dk]) : this._bindTextureRenderTarget(kk, Dk))
        }
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(kk, ek, ik), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Dk = this.textures[kk];
        Dk.is2DArray || Dk.is3D ? this._bindTextureRenderTarget(this.textures[kk], kk, this.layerIndices[kk]) : Dk.isCube && this._bindTextureRenderTarget(this.textures[kk], kk, this.faceIndices[kk])
      }
      resolveMSAATextures() {
        const kk = this._engine,
          ek = kk._currentFramebuffer;
        kk._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), kk._bindUnboundFramebuffer(ek)
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const ek = this._context;
        kk || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (ek.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (ek.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (ek.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(kk)
      }
    }
    let mk = !1;
    mk || (mk = !0, Sk.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(kk, ek, ik) {
      const Dk = new Pk(kk, ek, ik, this, this._gl);
      return this._renderTargetWrapperCache.push(Dk), Dk
    }, Sk.ThinEngine.prototype.createRenderTargetTexture = function(kk, ek) {
      const ik = this._createHardwareRenderTargetWrapper(!1, !1, kk);
      let Dk, fk, Sk = !0,
        bk = !1,
        rk = !1,
        Pk = 1;
      void 0 !== ek && "object" === typeof ek && (Sk = ek.generateDepthBuffer ?? !0, bk = !!ek.generateStencilBuffer, rk = !!ek.noColorAttachment, Dk = ek.colorAttachment, Pk = ek.samples ?? 1, fk = ek.label);
      const mk = Dk || (rk ? null : this._createInternalTexture(kk, ek, !0, 5)),
        Mk = kk.width || kk,
        Kk = kk.height || kk,
        xk = this._currentFramebuffer,
        nk = this._gl,
        Uk = nk.createFramebuffer();
      if (this._bindUnboundFramebuffer(Uk), ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(bk, Sk, Mk, Kk), !mk || mk.is2DArray || mk.is3D || nk.framebufferTexture2D(nk.FRAMEBUFFER, nk.COLOR_ATTACHMENT0, nk.TEXTURE_2D, mk._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(xk), ik.label = fk ?? "RenderTargetWrapper", ik._framebuffer = Uk, ik._generateDepthBuffer = Sk, ik._generateStencilBuffer = bk, ik.setTextures(mk), Dk) {
        if (ik._samples = Dk.samples, Dk.samples > 1) {
          const kk = Dk._hardwareTexture.getMSAARenderBuffer(0);
          ik._MSAAFramebuffer = nk.createFramebuffer(), this._bindUnboundFramebuffer(ik._MSAAFramebuffer), nk.framebufferRenderbuffer(nk.FRAMEBUFFER, nk.COLOR_ATTACHMENT0, nk.RENDERBUFFER, kk), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ik, Pk);
      return ik
    }, Sk.ThinEngine.prototype._createDepthStencilTexture = function(kk, ek, ik) {
      const Sk = this._gl,
        bk = kk.layers || 0,
        Pk = kk.depth || 0;
      let mk = Sk.TEXTURE_2D;
      0 !== bk ? mk = Sk.TEXTURE_2D_ARRAY : 0 !== Pk && (mk = Sk.TEXTURE_3D);
      const Mk = new Dk.b(this, 12);
      if (Mk.label = ek.label, !this._caps.depthTextureExtension) return fk.b.Error("Depth texture is not supported by your browser or hardware."), Mk;
      const Kk = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...ek
      };
      if (this._bindTextureDirectly(mk, Mk, !0), this._setupDepthStencilTexture(Mk, kk, 0 !== Kk.comparisonFunction && Kk.bilinearFiltering, Kk.comparisonFunction, Kk.samples), void 0 !== Kk.depthTextureFormat) {
        if (15 !== Kk.depthTextureFormat && 16 !== Kk.depthTextureFormat && 17 !== Kk.depthTextureFormat && 13 !== Kk.depthTextureFormat && 14 !== Kk.depthTextureFormat && 18 !== Kk.depthTextureFormat) return fk.b.Error(`Depth texture ${Kk.depthTextureFormat} format is not supported.`), Mk;
        Mk.format = Kk.depthTextureFormat
      } else Mk.format = Kk.generateStencil ? 13 : 16;
      const xk = (0, rk.b)(Mk.format),
        nk = this._getWebGLTextureTypeFromDepthTextureFormat(Mk.format),
        Uk = xk ? Sk.DEPTH_STENCIL : Sk.DEPTH_COMPONENT,
        Hk = this._getInternalFormatFromDepthTextureFormat(Mk.format, !0, xk);
      return Mk.is2DArray ? Sk.texImage3D(mk, 0, Hk, Mk.width, Mk.height, bk, 0, Uk, nk, null) : Mk.is3D ? Sk.texImage3D(mk, 0, Hk, Mk.width, Mk.height, Pk, 0, Uk, nk, null) : Sk.texImage2D(mk, 0, Hk, Mk.width, Mk.height, 0, Uk, nk, null), this._bindTextureDirectly(mk, null), this._internalTexturesCache.push(Mk), ik._depthStencilBuffer && (Sk.deleteRenderbuffer(ik._depthStencilBuffer), ik._depthStencilBuffer = null), this._bindUnboundFramebuffer(ik._MSAAFramebuffer ?? ik._framebuffer), ik._generateStencilBuffer = xk, ik._depthStencilTextureWithStencil = xk, ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(ik._generateStencilBuffer, ik._generateDepthBuffer, ik.width, ik.height, ik.samples, Mk.format), this._bindUnboundFramebuffer(null), Mk
    }, Sk.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(kk, ek) {
      if (this.VH < 2 || !kk) return 1;
      if (kk.samples === ek) return ek;
      const ik = this._gl;
      ek = Math.min(ek, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (ik.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (ik.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
      const Dk = kk.texture?._hardwareTexture;
      if (Dk?.releaseMSAARenderBuffers(), kk.texture && ek > 1 && "function" === typeof ik.renderbufferStorageMultisample) {
        const fk = ik.createFramebuffer();
        if (!fk) throw new Error("Unable to create multi sampled framebuffer");
        kk._MSAAFramebuffer = fk, this._bindUnboundFramebuffer(kk._MSAAFramebuffer);
        const Sk = this._createRenderBuffer(kk.texture.width, kk.texture.height, ek, -1, this._getRGBABufferInternalSizedFormat(kk.texture.type, kk.texture.format, kk.texture._useSRGBBuffer), ik.COLOR_ATTACHMENT0, !1);
        if (!Sk) throw new Error("Unable to create multi sampled framebuffer");
        Dk?.addMSAARenderBuffer(Sk)
      }
      this._bindUnboundFramebuffer(kk._MSAAFramebuffer ?? kk._framebuffer), kk.texture && (kk.texture.samples = ek), kk._samples = ek;
      const fk = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
      return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, ek, fk), this._bindUnboundFramebuffer(null), ek
    }, Sk.ThinEngine.prototype._setupDepthStencilTexture = function(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Sk = ek.width ?? ek,
        bk = ek.height ?? ek,
        rk = ek.layers || 0,
        Pk = ek.depth || 0;
      kk.baseWidth = Sk, kk.baseHeight = bk, kk.width = Sk, kk.height = bk, kk.is2DArray = rk > 0, kk.depth = rk || Pk, kk.isReady = !0, kk.samples = fk, kk.generateMipMaps = !1, kk.samplingMode = ik ? 2 : 1, kk.type = 0, kk._comparisonFunction = Dk;
      const mk = this._gl,
        Mk = this._getTextureTarget(kk),
        Kk = this._getSamplingParameters(kk.samplingMode, !1);
      mk.texParameteri(Mk, mk.TEXTURE_MAG_FILTER, Kk.mag), mk.texParameteri(Mk, mk.TEXTURE_MIN_FILTER, Kk.min), mk.texParameteri(Mk, mk.TEXTURE_WRAP_S, mk.CLAMP_TO_EDGE), mk.texParameteri(Mk, mk.TEXTURE_WRAP_T, mk.CLAMP_TO_EDGE), this.VH > 1 && (0 === Dk ? (mk.texParameteri(Mk, mk.TEXTURE_COMPARE_FUNC, 515), mk.texParameteri(Mk, mk.TEXTURE_COMPARE_MODE, mk.NONE)) : (mk.texParameteri(Mk, mk.TEXTURE_COMPARE_FUNC, Dk), mk.texParameteri(Mk, mk.TEXTURE_COMPARE_MODE, mk.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39377: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.e
    });
    var Dk = ik(39384);
    (0, ik(39540).b)();
    var fk = ik(39398);
    let Sk = !1;
    ! function() {
      if (Sk) return;
      Sk = !0;
      const kk = new WeakMap,
        ek = new WeakMap,
        ik = new WeakMap,
        Dk = new WeakMap;
      fk.ThinEngine.prototype.getAlphaToCoverage = function() {
        return kk.get(this) ?? !1
      }, fk.ThinEngine.prototype.setAlphaToCoverage = function(ik) {
        (kk.get(this) !== ik || this._gl && ek.get(this) !== this._gl) && (kk.set(this, ik), this._gl && (ik ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), ek.set(this, this._gl)))
      }, Object.defineProperty(fk.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Dk.get(this) !== this._gl && (ik.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Dk.set(this, this._gl)), ik.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var bk = ik(39391),
      rk = ik(38272),
      Pk = ik(39501);
    let mk = !1;
    ! function() {
      function kk(kk, ek, ik, Dk) {
        let fk, Sk = 1;
        1 === Dk ? fk = new Float32Array(ek * ik * 4) : 2 === Dk ? (fk = new Uint16Array(ek * ik * 4), Sk = 15360) : fk = 7 === Dk ? new Uint32Array(ek * ik * 4) : new Uint8Array(ek * ik * 4);
        for (let bk = 0; bk < ek; bk++)
          for (let Dk = 0; Dk < ik; Dk++) {
            const ik = 3 * (Dk * ek + bk),
              rk = 4 * (Dk * ek + bk);
            fk[rk + 0] = kk[ik + 0], fk[rk + 1] = kk[ik + 1], fk[rk + 2] = kk[ik + 2], fk[rk + 3] = Sk
          }
        return fk
      }

      function ek(kk) {
        return function(ek, ik, Dk, fk, Sk, rk, Pk, mk) {
          let Mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            Kk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const xk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            nk = kk ? 10 : 11,
            Uk = new bk.b(this, nk);
          Uk.baseWidth = ik, Uk.baseHeight = Dk, Uk.baseDepth = fk, Uk.width = ik, Uk.height = Dk, Uk.depth = fk, Uk.format = Sk, Uk.type = Kk, Uk.generateMipMaps = rk, Uk.samplingMode = mk, kk ? Uk.is3D = !0 : Uk.is2DArray = !0, this._doNotHandleContextLost || (Uk._bufferView = ek), kk ? this.updateRawTexture3D(Uk, ek, Sk, Pk, Mk, Kk) : this.updateRawTexture2DArray(Uk, ek, Sk, Pk, Mk, Kk), this._bindTextureDirectly(xk, Uk, !0);
          const Hk = this._getSamplingParameters(mk, rk);
          return this._gl.texParameteri(xk, this._gl.TEXTURE_MAG_FILTER, Hk.mag), this._gl.texParameteri(xk, this._gl.TEXTURE_MIN_FILTER, Hk.min), rk && this._gl.generateMipmap(xk), this._bindTextureDirectly(xk, null), this._internalTexturesCache.push(Uk), Uk
        }
      }

      function ik(kk) {
        return function(ek, ik, Dk, fk) {
          let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const rk = kk ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Pk = this._getWebGLTextureType(bk),
            mk = this._getInternalFormat(Dk),
            Mk = this._getRGBABufferInternalSizedFormat(bk, Dk);
          this._bindTextureDirectly(rk, ek, !0), this._unpackFlipY(void 0 === fk || !!fk), this._doNotHandleContextLost || (ek._bufferView = ik, ek.format = Dk, ek.invertY = fk, ek._compression = Sk), ek.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Sk && ik ? this._gl.compressedTexImage3D(rk, 0, this.getCaps().s3tc[Sk], ek.width, ek.height, ek.depth, 0, ik) : this._gl.texImage3D(rk, 0, Mk, ek.width, ek.height, ek.depth, 0, mk, Pk, ik), ek.generateMipMaps && this._gl.generateMipmap(rk), this._bindTextureDirectly(rk, null), ek.isReady = !0
        }
      }
      mk || (mk = !0, fk.ThinEngine.prototype.updateRawTexture = function(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!kk) return;
        const rk = this._getRGBABufferInternalSizedFormat(Sk, ik, bk),
          Pk = this._getInternalFormat(ik),
          mk = this._getWebGLTextureType(Sk);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), this._unpackFlipY(void 0 === Dk || !!Dk), this._doNotHandleContextLost || (kk._bufferView = ek, kk.format = ik, kk.type = Sk, kk.invertY = Dk, kk._compression = fk), kk.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), fk && ek ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[fk], kk.width, kk.height, 0, ek) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, rk, kk.width, kk.height, 0, Pk, mk, ek), kk.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), kk.isReady = !0
      }, fk.ThinEngine.prototype.createRawTexture = function(kk, ek, ik, Dk, fk, Sk, rk) {
        let Pk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Mk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Kk = new bk.b(this, 3);
        Kk.baseWidth = ek, Kk.baseHeight = ik, Kk.width = ek, Kk.height = ik, Kk.format = Dk, Kk.generateMipMaps = fk, Kk.samplingMode = rk, Kk.invertY = Sk, Kk._compression = Pk, Kk.type = mk, Kk._useSRGBBuffer = this._getUseSRGBBuffer(Mk, !fk), this._doNotHandleContextLost || (Kk._bufferView = kk), this.updateRawTexture(Kk, kk, Dk, Sk, Pk, mk, Kk._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, Kk, !0);
        const xk = this._getSamplingParameters(rk, fk);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, xk.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, xk.min), fk && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(Kk), Kk
      }, fk.ThinEngine.prototype.createRawCubeTexture = function(kk, ek, ik, Dk, fk, Sk, mk) {
        let Mk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const Kk = this._gl,
          xk = new bk.b(this, 8);
        xk.isCube = !0, xk.format = ik, xk.type = Dk, this._doNotHandleContextLost || (xk._bufferViewArray = kk);
        const nk = this._getWebGLTextureType(Dk);
        let Uk = this._getInternalFormat(ik);
        Uk === Kk.RGB && (Uk = Kk.RGBA), nk !== Kk.FLOAT || this._caps.textureFloatLinearFiltering ? nk !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? nk !== Kk.FLOAT || this._caps.textureFloatRender ? nk !== Kk.HALF_FLOAT || this._caps.colorBufferFloat || (fk = !1, rk.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (fk = !1, rk.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (fk = !1, mk = 1, rk.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (fk = !1, mk = 1, rk.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Hk = ek,
          wk = Hk;
        xk.width = Hk, xk.height = wk, xk.invertY = Sk, xk._compression = Mk;
        if (!this.needPOTTextures || (0, Pk.j)(xk.width) && (0, Pk.j)(xk.height) || (fk = !1), kk) this.updateRawCubeTexture(xk, kk, ik, Dk, Sk, Mk);
        else {
          const kk = this._getRGBABufferInternalSizedFormat(Dk),
            ek = 0;
          this._bindTextureDirectly(Kk.TEXTURE_CUBE_MAP, xk, !0);
          for (let ik = 0; ik < 6; ik++) Mk ? Kk.compressedTexImage2D(Kk.TEXTURE_CUBE_MAP_POSITIVE_X + ik, ek, this.getCaps().s3tc[Mk], xk.width, xk.height, 0, void 0) : Kk.texImage2D(Kk.TEXTURE_CUBE_MAP_POSITIVE_X + ik, ek, kk, xk.width, xk.height, 0, Uk, nk, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, xk, !0), kk && fk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const lk = this._getSamplingParameters(mk, fk);
        return Kk.texParameteri(Kk.TEXTURE_CUBE_MAP, Kk.TEXTURE_MAG_FILTER, lk.mag), Kk.texParameteri(Kk.TEXTURE_CUBE_MAP, Kk.TEXTURE_MIN_FILTER, lk.min), Kk.texParameteri(Kk.TEXTURE_CUBE_MAP, Kk.TEXTURE_WRAP_S, Kk.CLAMP_TO_EDGE), Kk.texParameteri(Kk.TEXTURE_CUBE_MAP, Kk.TEXTURE_WRAP_T, Kk.CLAMP_TO_EDGE), this._bindTextureDirectly(Kk.TEXTURE_CUBE_MAP, null), xk.generateMipMaps = fk, xk.samplingMode = mk, xk.isReady = !0, xk
      }, fk.ThinEngine.prototype.updateRawCubeTexture = function(ek, ik, Dk, fk, Sk) {
        let bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        ek._bufferViewArray = ik, ek.format = Dk, ek.type = fk, ek.invertY = Sk, ek._compression = bk;
        const mk = this._gl,
          Mk = this._getWebGLTextureType(fk);
        let Kk = this._getInternalFormat(Dk);
        const xk = this._getRGBABufferInternalSizedFormat(fk);
        let nk = !1;
        Kk === mk.RGB && (Kk = mk.RGBA, nk = !0), this._bindTextureDirectly(mk.TEXTURE_CUBE_MAP, ek, !0), this._unpackFlipY(void 0 === Sk || !!Sk), ek.width % 4 !== 0 && mk.pixelStorei(mk.UNPACK_ALIGNMENT, 1);
        for (let Pk = 0; Pk < 6; Pk++) {
          let Dk = ik[Pk];
          bk ? mk.compressedTexImage2D(mk.TEXTURE_CUBE_MAP_POSITIVE_X + Pk, rk, this.getCaps().s3tc[bk], ek.width, ek.height, 0, Dk) : (nk && (Dk = kk(Dk, ek.width, ek.height, fk)), mk.texImage2D(mk.TEXTURE_CUBE_MAP_POSITIVE_X + Pk, rk, xk, ek.width, ek.height, 0, Kk, Mk, Dk))
        }(!this.needPOTTextures || (0, Pk.j)(ek.width) && (0, Pk.j)(ek.height)) && ek.generateMipMaps && 0 === rk && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), ek.isReady = !0
      }, fk.ThinEngine.prototype.createRawCubeTextureFromUrl = function(ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        let mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Kk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          xk = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const nk = this._gl,
          Uk = this.createRawCubeTexture(null, Dk, fk, Sk, !bk, xk, Kk, null);
        ik?.addPendingData(Uk), Uk.url = ek, Uk.isReady = !1, this._internalTexturesCache.push(Uk);
        const Hk = (kk, ek) => {
            ik?.removePendingData(Uk), Mk && Mk(kk ? kk.status + " " + kk.statusText : "Failed to parse texture data", ek)
          },
          wk = async ek => {
            if (!Uk._hardwareTexture) return;
            const Dk = rk(ek);
            if (!Dk) return;
            const bk = Dk instanceof Promise ? await Dk : Dk,
              Mk = Uk.width;
            if (Pk) {
              const ek = this._getWebGLTextureType(Sk);
              let ik = this._getInternalFormat(fk);
              const Dk = this._getRGBABufferInternalSizedFormat(Sk);
              let rk = !1;
              ik === nk.RGB && (ik = nk.RGBA, rk = !0), this._bindTextureDirectly(nk.TEXTURE_CUBE_MAP, Uk, !0), this._unpackFlipY(!1);
              const mk = Pk(bk);
              for (let fk = 0; fk < mk.length; fk++) {
                const bk = Mk >> fk;
                for (let Pk = 0; Pk < 6; Pk++) {
                  let Mk = mk[fk][Pk];
                  rk && (Mk = kk(Mk, bk, bk, Sk)), nk.texImage2D(Pk, fk, Dk, bk, bk, 0, ik, ek, Mk)
                }
              }
              this._bindTextureDirectly(nk.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Uk, bk, fk, Sk, xk);
            Uk.isReady = !0, ik?.removePendingData(Uk), Uk.onLoadedObservable.notifyObservers(Uk), Uk.onLoadedObservable.clear(), mk && mk()
          };
        return this._loadFile(ek, (kk => {
          wk(kk).catch((kk => {
            Hk(void 0, kk)
          }))
        }), void 0, ik?.offlineProvider, !0, Hk), Uk
      }, fk.ThinEngine.prototype.createRawTexture2DArray = ek(!1), fk.ThinEngine.prototype.createRawTexture3D = ek(!0), fk.ThinEngine.prototype.updateRawTexture2DArray = ik(!1), fk.ThinEngine.prototype.updateRawTexture3D = ik(!0))
    }();
    var Mk = ik(39445);
    let Kk = !1;
    Kk || (Kk = !0, fk.ThinEngine.prototype._readTexturePixelsSync = function(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const Kk = this._gl;
      if (!Kk) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const kk = Kk.createFramebuffer();
        if (!kk) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = kk
      }
      Kk.bindFramebuffer(Kk.FRAMEBUFFER, this._dummyFramebuffer), Dk > -1 && (kk.is2DArray || kk.is3D) ? Kk.framebufferTextureLayer(Kk.FRAMEBUFFER, Kk.COLOR_ATTACHMENT0, kk._hardwareTexture?.underlyingResource, fk, Dk) : Dk > -1 ? Kk.framebufferTexture2D(Kk.FRAMEBUFFER, Kk.COLOR_ATTACHMENT0, Kk.TEXTURE_CUBE_MAP_POSITIVE_X + Dk, kk._hardwareTexture?.underlyingResource, fk) : Kk.framebufferTexture2D(Kk.FRAMEBUFFER, Kk.COLOR_ATTACHMENT0, Kk.TEXTURE_2D, kk._hardwareTexture?.underlyingResource, fk);
      let xk = void 0 !== kk.type ? this._getWebGLTextureType(kk.type) : Kk.UNSIGNED_BYTE;
      return rk ? Sk || (Sk = (0, Mk.k)(kk.type, 4 * ek * ik)) : xk === Kk.UNSIGNED_BYTE ? (Sk || (Sk = new Uint8Array(4 * ek * ik)), xk = Kk.UNSIGNED_BYTE) : (Sk || (Sk = new Float32Array(4 * ek * ik)), xk = Kk.FLOAT), bk && this.flushFramebuffer(), Kk.readPixels(Pk, mk, ek, ik, Kk.RGBA, xk, Sk), Kk.bindFramebuffer(Kk.FRAMEBUFFER, this._currentFramebuffer), Sk
    }, fk.ThinEngine.prototype._readTexturePixels = function(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk))
    }), (0, ik(39545).d)();
    let xk = !1;
    xk || (xk = !0, fk.ThinEngine.prototype._createDepthStencilCubeTexture = function(kk, ek) {
      const ik = new bk.b(this, 12);
      if (ik.isCube = !0, 1 === this.VH) return rk.b.Error("Depth cube texture is not supported by WebGL 1."), ik;
      const Dk = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...ek
        },
        fk = this._gl;
      this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, ik, !0), this._setupDepthStencilTexture(ik, kk, Dk.bilinearFiltering, Dk.comparisonFunction);
      for (let Sk = 0; Sk < 6; Sk++) Dk.generateStencil ? fk.texImage2D(fk.TEXTURE_CUBE_MAP_POSITIVE_X + Sk, 0, fk.DEPTH24_STENCIL8, kk, kk, 0, fk.DEPTH_STENCIL, fk.UNSIGNED_INT_24_8, null) : fk.texImage2D(fk.TEXTURE_CUBE_MAP_POSITIVE_X + Sk, 0, fk.DEPTH_COMPONENT24, kk, kk, 0, fk.DEPTH_COMPONENT, fk.UNSIGNED_INT, null);
      return this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ik), ik
    }, fk.ThinEngine.prototype._setCubeMapTextureParams = function(kk, ek, ik) {
      const Dk = this._gl;
      Dk.texParameteri(Dk.TEXTURE_CUBE_MAP, Dk.TEXTURE_MAG_FILTER, Dk.LINEAR), Dk.texParameteri(Dk.TEXTURE_CUBE_MAP, Dk.TEXTURE_MIN_FILTER, ek ? Dk.LINEAR_MIPMAP_LINEAR : Dk.LINEAR), Dk.texParameteri(Dk.TEXTURE_CUBE_MAP, Dk.TEXTURE_WRAP_S, Dk.CLAMP_TO_EDGE), Dk.texParameteri(Dk.TEXTURE_CUBE_MAP, Dk.TEXTURE_WRAP_T, Dk.CLAMP_TO_EDGE), kk.samplingMode = ek ? 3 : 2, ek && this.getCaps().textureMaxLevel && void 0 !== ik && ik > 0 && (Dk.texParameteri(Dk.TEXTURE_CUBE_MAP, Dk.TEXTURE_MAX_LEVEL, ik), kk._maxLodLevel = ik), this._bindTextureDirectly(Dk.TEXTURE_CUBE_MAP, null)
    }, fk.ThinEngine.prototype.createCubeTexture = function(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        bk = arguments.length > 6 ? arguments[6] : void 0,
        mk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Mk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Kk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        xk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        nk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Uk = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Hk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const wk = this._gl;
      return this.createCubeTextureBase(kk, ek, ik, !!Dk, fk, Sk, bk, mk, Mk, Kk, xk, nk, (kk => this._bindTextureDirectly(wk.TEXTURE_CUBE_MAP, kk, !0)), ((kk, ek) => {
        const ik = this.needPOTTextures ? (0, Pk.g)(ek[0].width, this._caps.maxCubemapTextureSize) : ek[0].width,
          Sk = ik,
          mk = [wk.TEXTURE_CUBE_MAP_POSITIVE_X, wk.TEXTURE_CUBE_MAP_POSITIVE_Y, wk.TEXTURE_CUBE_MAP_POSITIVE_Z, wk.TEXTURE_CUBE_MAP_NEGATIVE_X, wk.TEXTURE_CUBE_MAP_NEGATIVE_Y, wk.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(wk.TEXTURE_CUBE_MAP, kk, !0), this._unpackFlipY(!1);
        const Mk = bk ? this._getInternalFormat(bk, kk._useSRGBBuffer) : kk._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : wk.RGBA;
        let Kk = bk ? this._getInternalFormat(bk) : wk.RGBA;
        kk._useSRGBBuffer && 1 === this.VH && (Kk = Mk);
        for (let Dk = 0; Dk < mk.length; Dk++)
          if (ek[Dk].width !== ik || ek[Dk].height !== Sk) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void rk.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ik, this._workingCanvas.height = Sk, this._workingContext.drawImage(ek[Dk], 0, 0, ek[Dk].width, ek[Dk].height, 0, 0, ik, Sk), wk.texImage2D(mk[Dk], 0, Mk, Kk, wk.UNSIGNED_BYTE, this._workingCanvas)
          } else wk.texImage2D(mk[Dk], 0, Mk, Kk, wk.UNSIGNED_BYTE, ek[Dk]);
        Dk || wk.generateMipmap(wk.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(kk, !Dk), kk.width = ik, kk.height = Sk, kk.isReady = !0, bk && (kk.format = bk), kk.onLoadedObservable.notifyObservers(kk), kk.onLoadedObservable.clear(), fk && fk()
      }), !!Uk, Hk)
    }, fk.ThinEngine.prototype.generateMipMapsForCubemap = function(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (kk.generateMipMaps) {
        const ik = this._gl;
        this._bindTextureDirectly(ik.TEXTURE_CUBE_MAP, kk, !0), ik.generateMipmap(ik.TEXTURE_CUBE_MAP), ek && this._bindTextureDirectly(ik.TEXTURE_CUBE_MAP, null)
      }
    });
    ik(39552);
    let nk = !1;
    nk || (nk = !0, fk.ThinEngine.prototype.setDepthStencilTexture = function(kk, ek, ik, Dk) {
      void 0 !== kk && (ek && (this._boundUniforms[kk] = ek), ik && ik.depthStencilTexture ? this._setTexture(kk, ik, !1, !0, Dk) : this._setTexture(kk, null, void 0, void 0, Dk))
    });
    let Uk = !1;
    Uk || (Uk = !0, fk.ThinEngine.prototype.createRenderTargetCubeTexture = function(kk, ek) {
      const ik = this._createHardwareRenderTargetWrapper(!1, !0, kk),
        Dk = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...ek
        };
      Dk.generateStencilBuffer = Dk.generateDepthBuffer && Dk.generateStencilBuffer, (1 !== Dk.type || this._caps.textureFloatLinearFiltering) && (2 !== Dk.type || this._caps.textureHalfFloatLinearFiltering) || (Dk.samplingMode = 1);
      const fk = this._gl,
        Sk = new bk.b(this, 5);
      this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, Sk, !0);
      const Pk = this._getSamplingParameters(Dk.samplingMode, Dk.generateMipMaps);
      1 !== Dk.type || this._caps.textureFloat || (Dk.type = 0, rk.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), fk.texParameteri(fk.TEXTURE_CUBE_MAP, fk.TEXTURE_MAG_FILTER, Pk.mag), fk.texParameteri(fk.TEXTURE_CUBE_MAP, fk.TEXTURE_MIN_FILTER, Pk.min), fk.texParameteri(fk.TEXTURE_CUBE_MAP, fk.TEXTURE_WRAP_S, fk.CLAMP_TO_EDGE), fk.texParameteri(fk.TEXTURE_CUBE_MAP, fk.TEXTURE_WRAP_T, fk.CLAMP_TO_EDGE);
      for (let bk = 0; bk < 6; bk++) fk.texImage2D(fk.TEXTURE_CUBE_MAP_POSITIVE_X + bk, 0, this._getRGBABufferInternalSizedFormat(Dk.type, Dk.format), kk, kk, 0, this._getInternalFormat(Dk.format), this._getWebGLTextureType(Dk.type), null);
      const mk = fk.createFramebuffer();
      return this._bindUnboundFramebuffer(mk), ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(Dk.generateStencilBuffer, Dk.generateDepthBuffer, kk, kk), Dk.generateMipMaps && fk.generateMipmap(fk.TEXTURE_CUBE_MAP), this._bindTextureDirectly(fk.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ik._framebuffer = mk, ik._generateDepthBuffer = Dk.generateDepthBuffer, ik._generateStencilBuffer = Dk.generateStencilBuffer, Sk.width = kk, Sk.height = kk, Sk.isReady = !0, Sk.isCube = !0, Sk.samples = 1, Sk.generateMipMaps = Dk.generateMipMaps, Sk.samplingMode = Dk.samplingMode, Sk.type = Dk.type, Sk.format = Dk.format, this._internalTexturesCache.push(Sk), ik.setTextures(Sk), ik
    });
    var Hk = ik(39558),
      wk = ik(39564);
    let lk = !1;
    lk || (lk = !0, fk.ThinEngine.prototype.createPrefilteredCubeTexture = function(kk, ek, Dk, fk) {
      let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Pk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mk = arguments.length > 6 ? arguments[6] : void 0,
        Mk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Kk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        xk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(kk, ek, null, !1, (async kk => {
        if (!kk) return void(Sk && Sk(null));
        const Pk = kk.texture;
        if (Kk ? kk.info.sphericalPolynomial && (Pk._sphericalPolynomial = kk.info.sphericalPolynomial) : Pk._sphericalPolynomial = Pk._sphericalPolynomial ?? new Hk.f, Pk._source = 9, this.getCaps().textureLOD) return void(Sk && Sk(Pk));
        const mk = this._gl,
          Mk = kk.width;
        if (!Mk) return;
        const {
          DDSTools: xk
        } = await ik.e(305).then((() => ik(41338))), nk = [];
        for (let ik = 0; ik < 3; ik++) {
          const Sk = 1 - ik / 2,
            Kk = fk,
            Uk = Math.log2(Mk) * Dk + fk,
            Hk = Kk + (Uk - Kk) * Sk,
            lk = Math.round(Math.min(Math.max(Hk, 0), Uk)),
            pk = new bk.b(this, 2);
          if (pk.type = Pk.type, pk.format = Pk.format, pk.width = Math.pow(2, Math.max(Math.log2(Mk) - lk, 0)), pk.height = pk.width, pk.isCube = !0, pk._cachedWrapU = 0, pk._cachedWrapV = 0, this._bindTextureDirectly(mk.TEXTURE_CUBE_MAP, pk, !0), pk.samplingMode = 2, mk.texParameteri(mk.TEXTURE_CUBE_MAP, mk.TEXTURE_MAG_FILTER, mk.LINEAR), mk.texParameteri(mk.TEXTURE_CUBE_MAP, mk.TEXTURE_MIN_FILTER, mk.LINEAR), mk.texParameteri(mk.TEXTURE_CUBE_MAP, mk.TEXTURE_WRAP_S, mk.CLAMP_TO_EDGE), mk.texParameteri(mk.TEXTURE_CUBE_MAP, mk.TEXTURE_WRAP_T, mk.CLAMP_TO_EDGE), kk.isDDS) {
            const ek = kk.info,
              ik = kk.data;
            this._unpackFlipY(ek.isCompressed), xk.UploadDDSLevels(this, pk, ik, ek, !0, 6, lk)
          } else rk.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(mk.TEXTURE_CUBE_MAP, null);
          const yk = new wk.b(ek);
          yk._isCube = !0, yk._texture = pk, pk.isReady = !0, nk.push(yk)
        }
        Pk._lodTextureHigh = nk[2], Pk._lodTextureMid = nk[1], Pk._lodTextureLow = nk[0], Sk && Sk(Pk)
      }), Pk, mk, Mk, Kk, Dk, fk, null, void 0, !1, xk)
    });
    var pk = ik(39486);
    let yk = !1;
    yk || (yk = !0, fk.ThinEngine.prototype.createUniformBuffer = function(kk, ek) {
      const ik = this._gl.createBuffer();
      if (!ik) throw new Error("Unable to create uniform buffer");
      const Dk = new pk.b(ik);
      return this.bindUniformBuffer(Dk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Dk.references = 1, Dk
    }, fk.ThinEngine.prototype.createDynamicUniformBuffer = function(kk, ek) {
      const ik = this._gl.createBuffer();
      if (!ik) throw new Error("Unable to create dynamic uniform buffer");
      const Dk = new pk.b(ik);
      return this.bindUniformBuffer(Dk), kk instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, kk, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(kk), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Dk.references = 1, Dk
    }, fk.ThinEngine.prototype.updateUniformBuffer = function(kk, ek, ik, Dk) {
      this.bindUniformBuffer(kk), void 0 === ik && (ik = 0), void 0 === Dk ? ek instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ik, ek) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ik, new Float32Array(ek)) : ek instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, ek.subarray(ik, ik + Dk)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(ek).subarray(ik, ik + Dk)), this.bindUniformBuffer(null)
    }, fk.ThinEngine.prototype.bindUniformBuffer = function(kk) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, kk ? kk.underlyingResource : null)
    }, fk.ThinEngine.prototype.bindUniformBufferBase = function(kk, ek, ik) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, ek, kk ? kk.underlyingResource : null)
    }, fk.ThinEngine.prototype.bindUniformBlock = function(kk, ek, ik) {
      const Dk = kk.program,
        fk = this._gl.getUniformBlockIndex(Dk, ek);
      4294967295 !== fk && this._gl.uniformBlockBinding(Dk, fk, ik)
    });
    var Yk = ik(39429),
      Lk = ik(39467);
    let Ck = !1;
    Ck || (Ck = !0, Lk.c.prototype.displayLoadingUI = function() {
      if (!(0, Yk.i)()) return;
      const kk = this.loadingScreen;
      kk && kk.displayLoadingUI()
    }, Lk.c.prototype.hideLoadingUI = function() {
      if (!(0, Yk.i)()) return;
      const kk = this._loadingScreen;
      kk && kk.hideLoadingUI()
    }, Object.defineProperty(Lk.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Lk.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(kk) {
        this._loadingScreen = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Lk.c.prototype, "loadingUIText", {
      set: function(kk) {
        this.loadingScreen.loadingUIText = kk
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Lk.c.prototype, "loadingUIBackgroundColor", {
      set: function(kk) {
        this.loadingScreen.loadingUIBackgroundColor = kk
      },
      enumerable: !0,
      configurable: !0
    })), (0, ik(39531).d)();
    let Ak = !1;
    Ak || (Ak = !0, Lk.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Lk.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Lk.c.prototype.setDepthFunction = function(kk) {
      this._depthCullingState.depthFunc = kk
    }, Lk.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Lk.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Lk.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Lk.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Lk.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Lk.c.prototype.setDepthWrite = function(kk) {
      this._depthCullingState.depthMask = kk
    }, Lk.c.prototype.setAlphaConstants = function(kk, ek, ik, Dk) {
      this._alphaState.setAlphaBlendConstants(kk, ek, ik, Dk)
    }, Lk.c.prototype.getAlphaMode = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[kk]
    }, Lk.c.prototype.getAlphaEquation = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[kk]
    });
    let jk = !1;
    jk || (jk = !0, Lk.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Lk.c.prototype.setStencilBuffer = function(kk) {
      this._stencilState.stencilTest = kk
    }, Lk.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Lk.c.prototype.setStencilMask = function(kk) {
      this._stencilState.stencilMask = kk
    }, Lk.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Lk.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Lk.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Lk.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Lk.c.prototype.setStencilFunction = function(kk) {
      this._stencilState.stencilFunc = kk
    }, Lk.c.prototype.setStencilBackFunction = function(kk) {
      this._stencilState.stencilBackFunc = kk
    }, Lk.c.prototype.setStencilFunctionReference = function(kk) {
      this._stencilState.stencilFuncRef = kk
    }, Lk.c.prototype.setStencilFunctionMask = function(kk) {
      this._stencilState.stencilFuncMask = kk
    }, Lk.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Lk.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Lk.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Lk.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Lk.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Lk.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Lk.c.prototype.setStencilOperationFail = function(kk) {
      this._stencilState.stencilOpStencilFail = kk
    }, Lk.c.prototype.setStencilBackOperationFail = function(kk) {
      this._stencilState.stencilBackOpStencilFail = kk
    }, Lk.c.prototype.setStencilOperationDepthFail = function(kk) {
      this._stencilState.stencilOpDepthFail = kk
    }, Lk.c.prototype.setStencilBackOperationDepthFail = function(kk) {
      this._stencilState.stencilBackOpDepthFail = kk
    }, Lk.c.prototype.setStencilOperationPass = function(kk) {
      this._stencilState.stencilOpStencilDepthPass = kk
    }, Lk.c.prototype.setStencilBackOperationPass = function(kk) {
      this._stencilState.stencilBackOpStencilDepthPass = kk
    }, Lk.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Lk.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ik(39599);
    let sk = !1;
    sk || (sk = !0, Lk.c.prototype.createDepthStencilTexture = function(kk, ek, ik) {
      if (ek.isCube) {
        const ik = kk.width || kk;
        return this._createDepthStencilCubeTexture(ik, ek)
      }
      return this._createDepthStencilTexture(kk, ek, ik)
    });
    ik(39601), ik(39637);
    let dk = !1;
    dk || (dk = !0, fk.ThinEngine.prototype.enableScissor = function(kk, ek, ik, Dk) {
      const fk = this._gl;
      fk.enable(fk.SCISSOR_TEST), fk.scissor(kk, ek, ik, Dk)
    }, fk.ThinEngine.prototype.disableScissor = function() {
      const kk = this._gl;
      kk.disable(kk.SCISSOR_TEST)
    })
  },
  39384: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Lk
    });
    var Dk = ik(39391),
      fk = ik(36722),
      Sk = ik(39398),
      bk = ik(39470);
    class rk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Pk(kk)
      }
      sampleFrame() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const ek = kk - this._lastFrameTimeMs;
            this._rollingFrameTime.add(ek)
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
    class Pk {
      constructor(kk) {
        this._samples = new Array(kk), this.reset()
      }
      add(kk) {
        let ek;
        if (this.isSaturated()) {
          const kk = this._samples[this._pos];
          ek = kk - this.average, this.average -= ek / (this._sampleCount - 1), this._m2 -= ek * (kk - this.average)
        } else this._sampleCount++;
        ek = kk - this.average, this.average += ek / this._sampleCount, this._m2 += ek * (kk - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = kk, this._pos++, this._pos %= this._samples.length
      }
      history(kk) {
        if (kk >= this._sampleCount || kk >= this._samples.length) return 0;
        const ek = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(ek - kk)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(kk) {
        const ek = this._samples.length;
        return (kk % ek + ek) % ek
      }
    }
    var mk = ik(39486),
      Mk = ik(38272),
      Kk = ik(39509),
      xk = ik(39467),
      nk = ik(39429);

    function Uk(kk) {
      const ek = function(kk) {
        if (!(0, nk.e)() || !document.body) return null;
        const ek = document.createElement("span");
        ek.textContent = "Hg", ek.style.font = kk;
        const ik = document.createElement("div");
        ik.style.display = "inline-block", ik.style.width = "1px", ik.style.height = "0px", ik.style.verticalAlign = "bottom";
        const Dk = document.createElement("div");
        let fk, Sk;
        Dk.style.whiteSpace = "nowrap", Dk.appendChild(ek), Dk.appendChild(ik), document.body.appendChild(Dk);
        try {
          Sk = ik.getBoundingClientRect().top - ek.getBoundingClientRect().top, ik.style.verticalAlign = "baseline", fk = ik.getBoundingClientRect().top - ek.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Dk)
        }
        const bk = {
          ascent: fk,
          height: Sk,
          descent: Sk - fk
        };
        return Hk(bk) ? bk : null
      }(kk);
      if (ek) return ek;
      const ik = function(kk) {
        let ek = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? ek = new OffscreenCanvas(64, 64) : (0, nk.e)() && "function" === typeof document.createElement && (ek = document.createElement("canvas"), ek.width = 64, ek.height = 64);
          const ik = ek?.getContext("2d");
          if (!ik) return null;
          ik.font = kk;
          const Dk = ik.measureText("Hg"),
            fk = Number(Dk.actualBoundingBoxAscent ?? Dk.fontBoundingBoxAscent),
            Sk = Number(Dk.actualBoundingBoxDescent ?? Dk.fontBoundingBoxDescent),
            bk = {
              ascent: fk,
              height: fk + Sk,
              descent: Sk
            };
          return Hk(bk) ? bk : null
        } catch {
          return null
        } finally {
          const kk = ek;
          "function" === typeof kk?.dispose && kk.dispose()
        }
      }(kk);
      return ik || function(kk) {
        const ek = Math.max(1, function(kk) {
            const ek = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(kk || ""));
            return ek ? Number(ek[1]) : 16
          }(kk)),
          ik = .8 * ek,
          Dk = .2 * ek;
        return {
          ascent: ik,
          height: ik + Dk,
          descent: Dk
        }
      }(kk)
    }

    function Hk(kk) {
      return Number.isFinite(kk.ascent) && Number.isFinite(kk.height) && Number.isFinite(kk.descent) && kk.height > 0
    }

    function wk(kk) {
      if (kk.requestPointerLock) {
        const ek = kk.requestPointerLock();
        ek instanceof Promise ? ek.then((() => {
          kk.focus()
        })).catch((() => {})) : kk.focus()
      }
    }
    var lk = ik(39523),
      pk = ik(39458),
      yk = ik(39531),
      Yk = ik(39535);
    class Lk extends Sk.ThinEngine {
      static get NpmPackage() {
        return xk.c.NpmPackage
      }
      static get Version() {
        return xk.c.Version
      }
      static get Instances() {
        return fk.e.Instances
      }
      static get LastCreatedEngine() {
        return fk.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return fk.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(kk) {
        return xk.c.DefaultLoadingScreenFactory(kk)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Lk._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, yk.d)(), (0, Yk.e)(), super(kk, ek, ik, Dk), this._performanceMonitor = new rk, this._drawCalls = new lk.b, kk && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(kk) {
        super._sharedInit(kk),
          function(kk, ek, ik) {
            kk._onCanvasFocus = () => {
              kk.onCanvasFocusObservable.notifyObservers(kk)
            }, kk._onCanvasBlur = () => {
              kk.onCanvasBlurObservable.notifyObservers(kk)
            }, kk._onCanvasContextMenu = ek => {
              kk.disableContextMenu && ek.preventDefault()
            }, ek.addEventListener("focus", kk._onCanvasFocus), ek.addEventListener("blur", kk._onCanvasBlur), ek.addEventListener("contextmenu", kk._onCanvasContextMenu), kk._onBlur = () => {
              kk.disablePerformanceMonitorInBackground && kk.performanceMonitor.disable(), kk._windowIsBackground = !0
            }, kk._onFocus = () => {
              kk.disablePerformanceMonitorInBackground && kk.performanceMonitor.enable(), kk._windowIsBackground = !1
            }, kk._onCanvasPointerOut = ik => {
              document.elementFromPoint(ik.clientX, ik.clientY) !== ek && kk.onCanvasPointerOutObservable.notifyObservers(ik)
            };
            const Dk = kk.getHostWindow();
            Dk && "function" === typeof Dk.addEventListener && (Dk.addEventListener("blur", kk._onBlur), Dk.addEventListener("focus", kk._onFocus)), ek.addEventListener("pointerout", kk._onCanvasPointerOut), ik.doNotHandleTouchAction || function(kk) {
              kk && kk.setAttribute && (kk.setAttribute("touch-action", "none"), kk.style.touchAction = "none", kk.style.webkitTapHighlightColor = "transparent")
            }(ek), !xk.c.audioEngine && ik.audioEngine && xk.c.AudioEngineFactory && (xk.c.audioEngine = xk.c.AudioEngineFactory(kk.getRenderingCanvas(), kk.getAudioContext(), kk.getAudioDestination())), (0, nk.e)() && (kk._onFullscreenChange = () => {
              kk.isFullscreen = !!document.fullscreenElement, kk.isFullscreen && kk._pointerLockRequested && ek && wk(ek)
            }, document.addEventListener("fullscreenchange", kk._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", kk._onFullscreenChange, !1), kk._onPointerLockChange = () => {
              kk.isPointerLock = document.pointerLockElement === ek
            }, document.addEventListener("pointerlockchange", kk._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", kk._onPointerLockChange, !1)), kk.enableOfflineSupport = void 0 !== xk.c.OfflineProviderFactory, kk._deterministicLockstep = !!ik.deterministicLockstep, kk._lockstepMaxSteps = ik.lockstepMaxSteps || 0, kk._timeStep = ik.timeStep || 1 / 60
          }(this, kk, this._creationOptions)
      }
      resizeImageBitmap(kk, ek, ik) {
        return function(kk, ek, ik, Dk) {
          const fk = kk.createCanvas(ik, Dk).getContext("2d");
          if (!fk) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return fk.drawImage(ek, 0, 0), fk.getImageData(0, 0, ik, Dk).data
        }(this, kk, ek, ik)
      }
      async _createImageBitmapFromSource(kk, ek) {
        return await async function(kk, ek, ik) {
          return await new Promise(((Dk, fk) => {
            const Sk = new Image;
            Sk.onload = () => {
              Sk.decode().then((() => {
                kk.createImageBitmap(Sk, ik).then((kk => {
                  Dk(kk)
                }))
              }))
            }, Sk.onerror = () => {
              fk(`Error loading image ${Sk.src}`)
            }, Sk.src = ek
          }))
        }(this, kk, ek)
      }
      switchFullscreen(kk) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(kk)
      }
      enterFullscreen(kk) {
        this.isFullscreen || (this._pointerLockRequested = kk, this._renderingCanvas && function(kk) {
          const ek = kk.requestFullscreen || kk.webkitRequestFullscreen;
          ek && ek.call(kk)
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
      setDirectViewport(kk, ek, ik, Dk) {
        const fk = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(kk, ek, ik, Dk), fk
      }
      scissorClear(kk, ek, ik, Dk, fk) {
        this.enableScissor(kk, ek, ik, Dk), this.clear(fk, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(kk) {
        const ek = this._gl.getAttachedShaders(kk);
        return ek ? this._gl.getShaderSource(ek[0]) : null
      }
      getFragmentShaderSource(kk) {
        const ek = this._gl.getAttachedShaders(kk);
        return ek ? this._gl.getShaderSource(ek[1]) : null
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
        return Uk(kk)
      }
      enterPointerlock() {
        this._renderingCanvas && wk(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      AY() {
        this._measureFps(), super.AY()
      }
      _deletePipelineContext(kk) {
        const ek = kk;
        ek && ek.program && ek.transformFeedback && (this.deleteTransformFeedback(ek.transformFeedback), ek.transformFeedback = null), super._deletePipelineContext(kk)
      }
      createShaderProgram(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        fk = fk || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const bk = super.createShaderProgram(kk, ek, ik, Dk, fk, Sk);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), bk
      }
      _createShaderProgram(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Sk = Dk.createProgram();
        if (kk.program = Sk, !Sk) throw new Error("Unable to create program");
        if (Dk.attachShader(Sk, ek), Dk.attachShader(Sk, ik), this.VH > 1 && fk) {
          const ek = this.createTransformFeedback();
          this.bindTransformFeedback(ek), this.setTranformFeedbackVaryings(Sk, fk), kk.transformFeedback = ek
        }
        return Dk.linkProgram(Sk), this.VH > 1 && fk && this.bindTransformFeedback(null), kk.context = Dk, kk.vertexShader = ek, kk.fragmentShader = ik, kk.isParallelCompiled || this._finalizePipelineContext(kk), Sk
      }
      _releaseTexture(kk) {
        super._releaseTexture(kk)
      }
      _releaseRenderTargetWrapper(kk) {
        super._releaseRenderTargetWrapper(kk);
        for (const ek of this.scenes) {
          for (const ik of ek.postProcesses) ik._outputTexture === kk && (ik._outputTexture = null);
          for (const ik of ek.cameras)
            for (const ek of ik._postProcesses) ek && ek._outputTexture === kk && (ek._outputTexture = null)
        }
      }
      _rescaleTexture(kk, ek, ik, Dk, fk) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Sk = this.createRenderTargetTexture({
          width: ek.width,
          height: ek.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Lk._RescalePostProcessFactory && (this._rescalePostProcess = Lk._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const bk = () => {
              this._rescalePostProcess.onApply = function(ek) {
                ek._bindTexture("textureSampler", kk)
              };
              let bk = ik;
              bk || (bk = this.scenes[this.scenes.length - 1]), bk.postProcessManager.directRender([this._rescalePostProcess], Sk, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, ek, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Dk, 0, 0, ek.width, ek.height, 0), this.unBindFramebuffer(Sk), Sk.dispose(), fk && fk()
            },
            rk = this._rescalePostProcess.getEffect();
          rk ? rk.executeWhenCompiled(bk) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((kk => {
            kk.executeWhenCompiled(bk)
          }))
        }
      }
      wrapWebGLTexture(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const bk = new Kk.c(kk, this._gl),
          rk = new Dk.b(this, 15, !0);
        return rk._hardwareTexture = bk, rk.baseWidth = fk, rk.baseHeight = Sk, rk.width = fk, rk.height = Sk, rk.isReady = !0, rk.useMipMaps = ek, this.updateTextureSamplingMode(ik, rk), rk
      }
      updateWrappedWebGLTexture(kk, ek) {
        if (15 !== kk.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Dk of this._renderTargetWrapperCache)
          if (Dk.textures?.includes(kk)) {
            if (Dk.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Dk._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } kk._hardwareTexture = new Kk.c(ek, this._gl), kk.isReady = !0, kk._cachedCoordinatesMode = null, kk._cachedWrapU = null, kk._cachedWrapV = null, kk._cachedWrapR = null, kk._cachedAnisotropicFilteringLevel = null;
        for (const Dk in this._boundTexturesCache) this._boundTexturesCache[Dk] === kk && (this._boundTexturesCache[Dk] = null);
        this.updateTextureSamplingMode(kk.samplingMode, kk);
        const ik = this._gl;
        for (const Dk of this._renderTargetWrapperCache) {
          if (Dk.texture !== kk) continue;
          const fk = Dk,
            Sk = Dk.samples,
            bk = Sk > 1;
          fk._framebuffer && ik.deleteFramebuffer(fk._framebuffer), !bk && fk._depthStencilBuffer && (ik.deleteRenderbuffer(fk._depthStencilBuffer), fk._depthStencilBuffer = null);
          const rk = this._currentFramebuffer,
            Pk = ik.createFramebuffer();
          this._bindUnboundFramebuffer(Pk), ik.framebufferTexture2D(ik.FRAMEBUFFER, ik.COLOR_ATTACHMENT0, ik.TEXTURE_2D, ek, 0), bk || (fk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Dk._generateStencilBuffer, Dk._generateDepthBuffer, Dk.width, Dk.height)), this._bindUnboundFramebuffer(rk), fk._framebuffer = Pk, bk && (Dk._samples = 1, this.updateRenderTargetTextureSampleCount(fk, Sk))
        }
      }
      _uploadImageToTexture(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const fk = this._gl,
          Sk = this._getWebGLTextureType(kk.type),
          bk = this._getInternalFormat(kk.format),
          rk = this._getRGBABufferInternalSizedFormat(kk.type, bk),
          Pk = kk.isCube ? fk.TEXTURE_CUBE_MAP : fk.TEXTURE_2D;
        this._bindTextureDirectly(Pk, kk, !0), this._unpackFlipY(kk.invertY);
        let mk = fk.TEXTURE_2D;
        kk.isCube && (mk = fk.TEXTURE_CUBE_MAP_POSITIVE_X + ik), fk.texImage2D(mk, Dk, rk, bk, Sk, ek), this._bindTextureDirectly(Pk, null, !0)
      }
      updateTextureComparisonFunction(kk, ek) {
        if (1 === this.VH) return void Mk.b.Error("WebGL 1 does not support texture comparison.");
        const ik = this._gl;
        kk.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, kk, !0), 0 === ek ? (ik.texParameteri(ik.TEXTURE_CUBE_MAP, ik.TEXTURE_COMPARE_FUNC, 515), ik.texParameteri(ik.TEXTURE_CUBE_MAP, ik.TEXTURE_COMPARE_MODE, ik.NONE)) : (ik.texParameteri(ik.TEXTURE_CUBE_MAP, ik.TEXTURE_COMPARE_FUNC, ek), ik.texParameteri(ik.TEXTURE_CUBE_MAP, ik.TEXTURE_COMPARE_MODE, ik.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, kk, !0), 0 === ek ? (ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_COMPARE_FUNC, 515), ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_COMPARE_MODE, ik.NONE)) : (ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_COMPARE_FUNC, ek), ik.texParameteri(ik.TEXTURE_2D, ik.TEXTURE_COMPARE_MODE, ik.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), kk._comparisonFunction = ek
      }
      createInstancesBuffer(kk) {
        const ek = this._gl.createBuffer();
        if (!ek) throw new Error("Unable to create instance buffer");
        const ik = new mk.b(ek);
        return ik.vK = kk, this.bindArrayBuffer(ik), this._gl.bufferData(this._gl.ARRAY_BUFFER, kk, this._gl.DYNAMIC_DRAW), ik.references = 1, ik
      }
      deleteInstancesBuffer(kk) {
        this._gl.deleteBuffer(kk)
      }
      async _clientWaitAsync(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Dk = this._gl;
        return await new Promise(((fk, Sk) => {
          (0, pk.h)((() => {
            const ik = Dk.clientWaitSync(kk, ek, 0);
            if (ik == Dk.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ik != Dk.TIMEOUT_EXPIRED
          }), fk, Sk, ik)
        }))
      }
      _readPixelsAsync(kk, ek, ik, Dk, fk, Sk, bk) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const rk = this._gl,
          Pk = rk.createBuffer();
        rk.bindBuffer(rk.PIXEL_PACK_BUFFER, Pk), rk.bufferData(rk.PIXEL_PACK_BUFFER, bk.byteLength, rk.STREAM_READ), rk.readPixels(kk, ek, ik, Dk, fk, Sk, 0), rk.bindBuffer(rk.PIXEL_PACK_BUFFER, null);
        const mk = rk.fenceSync(rk.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return mk ? (rk.flush(), this._clientWaitAsync(mk, 0, 10).then((() => (rk.deleteSync(mk), rk.bindBuffer(rk.PIXEL_PACK_BUFFER, Pk), rk.getBufferSubData(rk.PIXEL_PACK_BUFFER, 0, bk), rk.bindBuffer(rk.PIXEL_PACK_BUFFER, null), rk.deleteBuffer(Pk), bk)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(kk, ek) {
            1 === fk.e.Instances.length && xk.c.audioEngine && (xk.c.audioEngine.dispose(), xk.c.audioEngine = null);
            const ik = kk.getHostWindow();
            ik && "function" === typeof ik.removeEventListener && (ik.removeEventListener("blur", kk._onBlur), ik.removeEventListener("focus", kk._onFocus)), ek && (ek.removeEventListener("focus", kk._onCanvasFocus), ek.removeEventListener("blur", kk._onCanvasBlur), ek.removeEventListener("pointerout", kk._onCanvasPointerOut), ek.removeEventListener("contextmenu", kk._onCanvasContextMenu)), (0, nk.e)() && (document.removeEventListener("fullscreenchange", kk._onFullscreenChange), document.removeEventListener("mozfullscreenchange", kk._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", kk._onFullscreenChange), document.removeEventListener("msfullscreenchange", kk._onFullscreenChange), document.removeEventListener("pointerlockchange", kk._onPointerLockChange), document.removeEventListener("mspointerlockchange", kk._onPointerLockChange), document.removeEventListener("mozpointerlockchange", kk._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", kk._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Lk.ALPHA_DISABLE = 0, Lk.ALPHA_ADD = 1, Lk.ALPHA_COMBINE = 2, Lk.ALPHA_SUBTRACT = 3, Lk.ALPHA_MULTIPLY = 4, Lk.ALPHA_MAXIMIZED = 5, Lk.ALPHA_ONEONE = 6, Lk.ALPHA_PREMULTIPLIED = 7, Lk.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Lk.ALPHA_INTERPOLATE = 9, Lk.ALPHA_SCREENMODE = 10, Lk.DELAYLOADSTATE_NONE = 0, Lk.DELAYLOADSTATE_LOADED = 1, Lk.DELAYLOADSTATE_LOADING = 2, Lk.DELAYLOADSTATE_NOTLOADED = 4, Lk.NEVER = 512, Lk.ALWAYS = 519, Lk.LESS = 513, Lk.EQUAL = 514, Lk.LEQUAL = 515, Lk.GREATER = 516, Lk.GEQUAL = 518, Lk.NOTEQUAL = 517, Lk.KEEP = 7680, Lk.REPLACE = 7681, Lk.INCR = 7682, Lk.DECR = 7683, Lk.INVERT = 5386, Lk.INCR_WRAP = 34055, Lk.DECR_WRAP = 34056, Lk.TEXTURE_CLAMP_ADDRESSMODE = 0, Lk.TEXTURE_WRAP_ADDRESSMODE = 1, Lk.TEXTURE_MIRROR_ADDRESSMODE = 2, Lk.TEXTUREFORMAT_ALPHA = 0, Lk.TEXTUREFORMAT_LUMINANCE = 1, Lk.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Lk.TEXTUREFORMAT_RGB = 4, Lk.TEXTUREFORMAT_RGBA = 5, Lk.TEXTUREFORMAT_RED = 6, Lk.TEXTUREFORMAT_R = 6, Lk.TEXTUREFORMAT_R16_UNORM = 33322, Lk.TEXTUREFORMAT_RG16_UNORM = 33324, Lk.TEXTUREFORMAT_RGB16_UNORM = 32852, Lk.TEXTUREFORMAT_RGBA16_UNORM = 32859, Lk.TEXTUREFORMAT_R16_SNORM = 36760, Lk.TEXTUREFORMAT_RG16_SNORM = 36761, Lk.TEXTUREFORMAT_RGB16_SNORM = 36762, Lk.TEXTUREFORMAT_RGBA16_SNORM = 36763, Lk.TEXTUREFORMAT_RG = 7, Lk.TEXTUREFORMAT_RED_INTEGER = 8, Lk.TEXTUREFORMAT_R_INTEGER = 8, Lk.TEXTUREFORMAT_RG_INTEGER = 9, Lk.TEXTUREFORMAT_RGB_INTEGER = 10, Lk.TEXTUREFORMAT_RGBA_INTEGER = 11, Lk.TEXTURETYPE_UNSIGNED_BYTE = 0, Lk.TEXTURETYPE_UNSIGNED_INT = 0, Lk.TEXTURETYPE_FLOAT = 1, Lk.TEXTURETYPE_HALF_FLOAT = 2, Lk.TEXTURETYPE_BYTE = 3, Lk.TEXTURETYPE_SHORT = 4, Lk.TEXTURETYPE_UNSIGNED_SHORT = 5, Lk.TEXTURETYPE_INT = 6, Lk.TEXTURETYPE_UNSIGNED_INTEGER = 7, Lk.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Lk.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Lk.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Lk.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Lk.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Lk.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Lk.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Lk.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Lk.TEXTURE_NEAREST_SAMPLINGMODE = 1, Lk.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Lk.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Lk.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Lk.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Lk.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Lk.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Lk.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Lk.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Lk.TEXTURE_NEAREST_LINEAR = 7, Lk.TEXTURE_NEAREST_NEAREST = 1, Lk.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Lk.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Lk.TEXTURE_LINEAR_LINEAR = 2, Lk.TEXTURE_LINEAR_NEAREST = 12, Lk.TEXTURE_EXPLICIT_MODE = 0, Lk.TEXTURE_SPHERICAL_MODE = 1, Lk.TEXTURE_PLANAR_MODE = 2, Lk.TEXTURE_CUBIC_MODE = 3, Lk.TEXTURE_PROJECTION_MODE = 4, Lk.TEXTURE_SKYBOX_MODE = 5, Lk.TEXTURE_INVCUBIC_MODE = 6, Lk.TEXTURE_EQUIRECTANGULAR_MODE = 7, Lk.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Lk.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Lk.SCALEMODE_FLOOR = 1, Lk.SCALEMODE_NEAREST = 2, Lk.SCALEMODE_CEILING = 3
  },
  39555: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(39517);
    class fk {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = kk, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, kk && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Dk.b)(kk.format))
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
        const ek = this._textures[kk],
          ik = this._layerIndices?.[kk] ?? 0,
          Dk = this._faceIndices?.[kk] ?? 0;
        return ek.isCube ? 6 * ik + Dk : ek.is3D ? 0 : ik
      }
      get samples() {
        return this._samples
      }
      setSamples(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === kk && !ik) return kk;
        const Dk = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, kk, ek) : this._engine.updateRenderTargetTextureSampleCount(this, kk);
        return this._samples = kk, Dk
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(kk, ek, ik, Dk, fk) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = kk, this._isCube = ek, this._size = ik, this._engine = Dk, this._depthStencilTexture = null, this.label = fk
      }
      setTextures(kk) {
        Array.isArray(kk) ? this._textures = kk : this._textures = kk ? [kk] : null
      }
      setTexture(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[ek] !== kk && (this._textures[ek] && ik && this._textures[ek].dispose(), this._textures[ek] = kk)
      }
      setLayerAndFaceIndices(kk, ek) {
        this._layerIndices = kk, this._faceIndices = ek
      }
      setLayerAndFaceIndex() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== ek && ek >= 0 && (this._layerIndices[kk] = ek), void 0 !== ik && ik >= 0 && (this._faceIndices[kk] = ik)
      }
      createDepthStencilTexture() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ik, this._depthStencilTextureLabel = Sk, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: ek,
          comparisonFunction: kk,
          generateStencil: ik,
          isCube: this._isCube,
          samples: Dk,
          depthTextureFormat: fk,
          label: Sk
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
          const ek = this.textures;
          if (ek && ek.length > 0) {
            let ik = !1,
              Dk = ek.length,
              fk = -1;
            const Sk = ek[ek.length - 1]._source;
            14 !== Sk && 12 !== Sk || (ik = !0, fk = ek[ek.length - 1].format, Dk--);
            const bk = [],
              rk = [],
              Pk = [],
              mk = [],
              Mk = [],
              Kk = [],
              xk = [],
              nk = {};
            for (let kk = 0; kk < Dk; ++kk) {
              const ik = ek[kk];
              bk.push(ik.samplingMode), rk.push(ik.type), Pk.push(ik.format);
              void 0 !== nk[ik.uniqueId] ? (mk.push(-1), xk.push(0)) : (nk[ik.uniqueId] = kk, ik.is2DArray ? (mk.push(35866), xk.push(ik.depth)) : ik.isCube ? (mk.push(34067), xk.push(0)) : ik.is3D ? (mk.push(32879), xk.push(ik.depth)) : (mk.push(3553), xk.push(0))), this._faceIndices && Mk.push(this._faceIndices[kk] ?? 0), this._layerIndices && Kk.push(this._layerIndices[kk] ?? 0)
            }
            const Uk = {
                samplingModes: bk,
                generateMipMaps: ek[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ik,
                depthTextureFormat: fk,
                types: rk,
                formats: Pk,
                nbk: Dk,
                targetTypes: mk,
                faceIndex: Mk,
                layerIndex: Kk,
                layerCounts: xk,
                label: this.label
              },
              Hk = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            kk = this._engine.createMultipleRenderTarget(Hk, Uk);
            for (let wk = 0; wk < Dk; ++wk) {
              if (-1 !== mk[wk]) continue;
              const ik = nk[ek[wk].uniqueId];
              kk.setTexture(kk.textures[ik], wk)
            }
          }
        } else {
          const ek = {};
          if (ek.generateDepthBuffer = this._generateDepthBuffer, ek.generateMipMaps = this.texture?.generateMipMaps ?? !1, ek.generateStencilBuffer = this._generateStencilBuffer, ek.samplingMode = this.texture?.samplingMode, ek.type = this.texture?.type, ek.format = this.texture?.format, ek.noColorAttachment = !this._textures, ek.label = this.label, this.isCube) kk = this._engine.createRenderTargetCubeTexture(this.width, ek);
          else {
            const ik = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            kk = this._engine.createRenderTargetTexture(ik, ek)
          }
          kk.texture && (kk.texture.isReady = !0)
        }
        return kk
      }
      _swapRenderTargetWrapper(kk) {
        if (this._textures && kk._textures)
          for (let ek = 0; ek < this._textures.length; ++ek) this._textures[ek]._swapAndDie(kk._textures[ek], !1), kk._textures[ek].isReady = !0;
        this._depthStencilTexture && kk._depthStencilTexture && (this._depthStencilTexture._swapAndDie(kk._depthStencilTexture), kk._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const kk = this._cloneRenderTargetWrapper();
        if (kk) {
          if (this._depthStencilTexture) {
            const ek = this._depthStencilTexture.samplingMode,
              ik = this._depthStencilTexture.format,
              Dk = 2 === ek || 3 === ek || 11 === ek;
            kk.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Dk, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ik, this._depthStencilTextureLabel)
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
  40012: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      static get ForceFullSceneLoadingForIncremental() {
        return Dk._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(kk) {
        Dk._ForceFullSceneLoadingForIncremental = kk
      }
      static get ShowLoadingScreen() {
        return Dk._ShowLoadingScreen
      }
      static set ShowLoadingScreen(kk) {
        Dk._ShowLoadingScreen = kk
      }
      static get loggingLevel() {
        return Dk._LoggingLevel
      }
      static set loggingLevel(kk) {
        Dk._LoggingLevel = kk
      }
      static get CleanBoneMatrixWeights() {
        return Dk._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(kk) {
        Dk._CleanBoneMatrixWeights = kk
      }
    }
    Dk._ForceFullSceneLoadingForIncremental = !1, Dk._ShowLoadingScreen = !0, Dk._CleanBoneMatrixWeights = !1, Dk._LoggingLevel = 0
  },
  39646: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(38272);
    const fk = new Map;

    function Sk(kk, ek) {
      (function(kk) {
        return fk.delete(kk)
      })(kk) && Dk.b.Warn(`Extension with the name '${kk}' already exists`), fk.set(kk, ek)
    }

    function bk(kk, ek) {
      "image/ktx" !== ek && "image/ktx2" !== ek || (kk = ".ktx"), fk.has(kk) || (kk.endsWith(".ies") && Sk(".ies", (async () => await ik.e(308).then((() => ik(41355))).then((kk => new kk._IESTextureLoader)))), kk.endsWith(".dds") && Sk(".dds", (async () => await ik.e(306).then((() => ik(41358))).then((kk => new kk._DDSTextureLoader)))), kk.endsWith(".basis") && Sk(".basis", (async () => await ik.e(309).then((() => ik(41367))).then((kk => new kk._BasisTextureLoader)))), kk.endsWith(".env") && Sk(".env", (async () => await Promise.all([ik.e(310), ik.e(307)]).then((() => ik(41373))).then((kk => new kk._ENVTextureLoader)))), kk.endsWith(".hdr") && Sk(".hdr", (async () => await ik.e(311).then((() => ik(41426))).then((kk => new kk._HDRTextureLoader)))), (kk.endsWith(".ktx") || kk.endsWith(".ktx2")) && (Sk(".ktx", (async () => await ik.e(312).then((() => ik(41428))).then((kk => new kk._KTXTextureLoader)))), Sk(".ktx2", (async () => await ik.e(312).then((() => ik(41428))).then((kk => new kk._KTXTextureLoader))))), kk.endsWith(".tga") && Sk(".tga", (async () => await ik.e(313).then((() => ik(41438))).then((kk => new kk._TGATextureLoader)))), kk.endsWith(".exr") && Sk(".exr", (async () => await ik.e(314).then((() => ik(41444))).then((kk => new kk._ExrTextureLoader)))));
      const Dk = fk.get(kk);
      return Dk ? Promise.resolve(Dk(ek)) : null
    }
  },
  40020: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => mk
    });
    var Dk = ik(39861),
      fk = ik(39592),
      Sk = ik(36734);
    class bk extends Dk.e {
      get M6() {
        return this._subMaterials
      }
      set M6(kk) {
        this._subMaterials = kk, this._hookArray(kk)
      }
      getChildren() {
        return this.M6
      }
      constructor(kk, ek) {
        super(kk, ek, !0), this._waitingSubMaterialsUniqueIds = [], this.XF().addMultiMaterial(this), this.M6 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(kk) {
        var ek = this;
        const ik = kk.push;
        kk.push = function() {
          for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
          const bk = ik.apply(kk, fk);
          return ek._markAllSubMeshesAsTexturesDirty(), bk
        };
        const Dk = kk.splice;
        kk.splice = (ek, ik) => {
          const fk = Dk.call(kk, ek, ik ?? kk.length);
          return this._markAllSubMeshesAsTexturesDirty(), fk
        }
      }
      getSubMaterial(kk) {
        return kk < 0 || kk >= this.M6.length ? this.XF().defaultMaterial : this.M6[kk]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.M6.map((kk => kk ? kk.getActiveTextures() : [])))
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (let ek = 0; ek < this.M6.length; ek++)
          if (this.M6[ek]?.hasTexture(kk)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(kk, ek, ik) {
        for (let Dk = 0; Dk < this.M6.length; Dk++) {
          const fk = this.M6[Dk];
          if (fk) {
            if (fk._storeEffectOnSubMeshes) {
              if (!fk.isReadyForSubMesh(kk, ek, ik)) return !1;
              continue
            }
            if (!fk.isReady(kk)) return !1
          }
        }
        return !0
      }
      clone(kk, ek) {
        const ik = new bk(kk, this.XF());
        for (let Dk = 0; Dk < this.M6.length; Dk++) {
          let fk;
          const Sk = this.M6[Dk];
          fk = ek && Sk ? Sk.clone(kk + "-" + Sk.name) : this.M6[Dk], ik.M6.push(fk)
        }
        return ik
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, fk.c && (kk.tags = fk.c.GetTags(this)), kk.materialsUniqueIds = [], kk.materials = [];
        for (let ek = 0; ek < this.M6.length; ek++) {
          const ik = this.M6[ek];
          ik ? (kk.materialsUniqueIds.push(ik.uniqueId), kk.materials.push(ik.id)) : (kk.materialsUniqueIds.push(null), kk.materials.push(null))
        }
        return kk
      }
      dispose(kk, ek, ik) {
        const Dk = this.XF();
        if (!Dk) return;
        if (ik)
          for (let Sk = 0; Sk < this.M6.length; Sk++) {
            const ik = this.M6[Sk];
            ik && ik.dispose(kk, ek)
          }
        const fk = Dk.multiMaterials.indexOf(this);
        fk >= 0 && Dk.multiMaterials.splice(fk, 1), super.dispose(kk, ek)
      }
    }
    let rk = !1;

    function Pk(kk, ek) {
      const ik = new bk(kk.name, ek);
      if (ik.id = kk.id, ik._loadedUniqueId = kk.uniqueId, fk.c && fk.c.AddTagsTo(ik, kk.tags), kk.materialsUniqueIds) ik._waitingSubMaterialsUniqueIds = kk.materialsUniqueIds;
      else
        for (const Dk of kk.materials) ik.M6.push(ek.getLastMaterialById(Dk));
      return ik
    }

    function mk() {
      rk || (rk = !0, bk.ParseMultiMaterial = Pk, (0, Sk.h)("BABYLON.MultiMaterial", bk))
    }
  },
  39790: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk, fk, Sk = ik(36698);
    ! function(kk) {
      kk[kk.LOCAL = 0] = "LOCAL", kk[kk.WORLD = 1] = "WORLD", kk[kk.BONE = 2] = "BONE"
    }(Dk || (Dk = {}));
    class bk {}
    bk.X = new Sk.o(1, 0, 0), bk.Y = new Sk.o(0, 1, 0), bk.Z = new Sk.o(0, 0, 1),
      function(kk) {
        kk[kk.X = 0] = "X", kk[kk.Y = 1] = "Y", kk[kk.Z = 2] = "Z"
      }(fk || (fk = {}))
  },
  39558: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      f: () => mk
    });
    var Dk = ik(36698);
    const fk = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Sk = [() => 1, kk => kk.y, kk => kk.z, kk => kk.x, kk => kk.x * kk.y, kk => kk.y * kk.z, kk => 3 * kk.z * kk.z - 1, kk => kk.x * kk.z, kk => kk.x * kk.x - kk.y * kk.y],
      bk = (kk, ek) => fk[kk] * Sk[kk](ek),
      rk = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Pk {
      constructor() {
        this.preScaled = !1, this.l00 = Dk.o.Zero(), this.l1_1 = Dk.o.Zero(), this.l10 = Dk.o.Zero(), this.l11 = Dk.o.Zero(), this.l2_2 = Dk.o.Zero(), this.l2_1 = Dk.o.Zero(), this.l20 = Dk.o.Zero(), this.l21 = Dk.o.Zero(), this.l22 = Dk.o.Zero()
      }
      addLight(kk, ek, ik) {
        Dk.j.eH[0].set(ek.r, ek.g, ek.b);
        const fk = Dk.j.eH[0],
          Sk = Dk.j.eH[1];
        fk.scaleToRef(ik, Sk), Sk.scaleToRef(bk(0, kk), Dk.j.eH[2]), this.l00.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(1, kk), Dk.j.eH[2]), this.l1_1.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(2, kk), Dk.j.eH[2]), this.l10.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(3, kk), Dk.j.eH[2]), this.l11.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(4, kk), Dk.j.eH[2]), this.l2_2.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(5, kk), Dk.j.eH[2]), this.l2_1.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(6, kk), Dk.j.eH[2]), this.l20.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(7, kk), Dk.j.eH[2]), this.l21.addInPlace(Dk.j.eH[2]), Sk.scaleToRef(bk(8, kk), Dk.j.eH[2]), this.l22.addInPlace(Dk.j.eH[2])
      }
      scaleInPlace(kk) {
        this.l00.scaleInPlace(kk), this.l1_1.scaleInPlace(kk), this.l10.scaleInPlace(kk), this.l11.scaleInPlace(kk), this.l2_2.scaleInPlace(kk), this.l2_1.scaleInPlace(kk), this.l20.scaleInPlace(kk), this.l21.scaleInPlace(kk), this.l22.scaleInPlace(kk)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(rk[0]), this.l1_1.scaleInPlace(rk[1]), this.l10.scaleInPlace(rk[2]), this.l11.scaleInPlace(rk[3]), this.l2_2.scaleInPlace(rk[4]), this.l2_1.scaleInPlace(rk[5]), this.l20.scaleInPlace(rk[6]), this.l21.scaleInPlace(rk[7]), this.l22.scaleInPlace(rk[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(fk[0]), this.l1_1.scaleInPlace(fk[1]), this.l10.scaleInPlace(fk[2]), this.l11.scaleInPlace(fk[3]), this.l2_2.scaleInPlace(fk[4]), this.l2_1.scaleInPlace(fk[5]), this.l20.scaleInPlace(fk[6]), this.l21.scaleInPlace(fk[7]), this.l22.scaleInPlace(fk[8])
      }
      updateFromArray(kk) {
        return Dk.o.FromArrayToRef(kk[0], 0, this.l00), Dk.o.FromArrayToRef(kk[1], 0, this.l1_1), Dk.o.FromArrayToRef(kk[2], 0, this.l10), Dk.o.FromArrayToRef(kk[3], 0, this.l11), Dk.o.FromArrayToRef(kk[4], 0, this.l2_2), Dk.o.FromArrayToRef(kk[5], 0, this.l2_1), Dk.o.FromArrayToRef(kk[6], 0, this.l20), Dk.o.FromArrayToRef(kk[7], 0, this.l21), Dk.o.FromArrayToRef(kk[8], 0, this.l22), this
      }
      updateFromFloatsArray(kk) {
        return Dk.o.FromFloatsToRef(kk[0], kk[1], kk[2], this.l00), Dk.o.FromFloatsToRef(kk[3], kk[4], kk[5], this.l1_1), Dk.o.FromFloatsToRef(kk[6], kk[7], kk[8], this.l10), Dk.o.FromFloatsToRef(kk[9], kk[10], kk[11], this.l11), Dk.o.FromFloatsToRef(kk[12], kk[13], kk[14], this.l2_2), Dk.o.FromFloatsToRef(kk[15], kk[16], kk[17], this.l2_1), Dk.o.FromFloatsToRef(kk[18], kk[19], kk[20], this.l20), Dk.o.FromFloatsToRef(kk[21], kk[22], kk[23], this.l21), Dk.o.FromFloatsToRef(kk[24], kk[25], kk[26], this.l22), this
      }
      static FromArray(kk) {
        return (new Pk).updateFromArray(kk)
      }
      static FromPolynomial(kk) {
        const ek = new Pk;
        return ek.l00 = kk.xx.scale(.376127).add(kk.yy.scale(.376127)).add(kk.zz.scale(.376126)), ek.l1_1 = kk.y.scale(.977204), ek.l10 = kk.z.scale(.977204), ek.l11 = kk.x.scale(.977204), ek.l2_2 = kk.xy.scale(1.16538), ek.l2_1 = kk.yz.scale(1.16538), ek.l20 = kk.zz.scale(1.34567).subtract(kk.xx.scale(.672834)).subtract(kk.yy.scale(.672834)), ek.l21 = kk.zx.scale(1.16538), ek.l22 = kk.xx.scale(1.16538).subtract(kk.yy.scale(1.16538)), ek.l1_1.scaleInPlace(-1), ek.l11.scaleInPlace(-1), ek.l2_1.scaleInPlace(-1), ek.l21.scaleInPlace(-1), ek.scaleInPlace(Math.PI), ek
      }
    }
    class mk {
      constructor() {
        this.x = Dk.o.Zero(), this.y = Dk.o.Zero(), this.z = Dk.o.Zero(), this.xx = Dk.o.Zero(), this.yy = Dk.o.Zero(), this.zz = Dk.o.Zero(), this.xy = Dk.o.Zero(), this.yz = Dk.o.Zero(), this.zx = Dk.o.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Pk.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(kk) {
        Dk.j.eH[0].Z6(kk.r, kk.g, kk.b);
        const ek = Dk.j.eH[0];
        this.xx.addInPlace(ek), this.yy.addInPlace(ek), this.zz.addInPlace(ek)
      }
      scaleInPlace(kk) {
        this.x.scaleInPlace(kk), this.y.scaleInPlace(kk), this.z.scaleInPlace(kk), this.xx.scaleInPlace(kk), this.yy.scaleInPlace(kk), this.zz.scaleInPlace(kk), this.yz.scaleInPlace(kk), this.zx.scaleInPlace(kk), this.xy.scaleInPlace(kk)
      }
      updateFromHarmonics(kk) {
        return this._harmonics = kk, this.x.Fs(kk.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Fs(kk.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Fs(kk.l10), this.z.scaleInPlace(1.02333), this.xx.Fs(kk.l00), Dk.j.eH[0].Fs(kk.l20).scaleInPlace(.247708), Dk.j.eH[1].Fs(kk.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).KDk(Dk.j.eH[0]).addInPlace(Dk.j.eH[1]), this.yy.Fs(kk.l00), this.yy.scaleInPlace(.886277).KDk(Dk.j.eH[0]).KDk(Dk.j.eH[1]), this.zz.Fs(kk.l00), Dk.j.eH[0].Fs(kk.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Dk.j.eH[0]), this.yz.Fs(kk.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Fs(kk.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Fs(kk.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(kk) {
        return (new mk).updateFromHarmonics(kk)
      }
      static FromArray(kk) {
        const ek = new mk;
        return Dk.o.FromArrayToRef(kk[0], 0, ek.x), Dk.o.FromArrayToRef(kk[1], 0, ek.y), Dk.o.FromArrayToRef(kk[2], 0, ek.z), Dk.o.FromArrayToRef(kk[3], 0, ek.xx), Dk.o.FromArrayToRef(kk[4], 0, ek.yy), Dk.o.FromArrayToRef(kk[5], 0, ek.zz), Dk.o.FromArrayToRef(kk[6], 0, ek.yz), Dk.o.FromArrayToRef(kk[7], 0, ek.zx), Dk.o.FromArrayToRef(kk[8], 0, ek.xy), ek
      }
    }
  },
  40016: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Ik,
      e: () => Qk
    });
    var Dk = ik(39566),
      fk = ik(36726),
      Sk = ik(36698),
      bk = ik(39708),
      rk = ik(40001),
      Pk = ik(40018),
      mk = ik(39701),
      Mk = ik(39887),
      Kk = ik(39696);
    class xk {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Sk.o(0, 0, 0), this._diffPositionForCollisions = new Sk.o(0, 0, 0), this._collisionResponse = !0
      }
    }
    var nk, Uk, Hk, wk = ik(39447),
      lk = ik(39628),
      pk = ik(39901),
      yk = ik(36874),
      Yk = ik(36703),
      Lk = ik(39790),
      Ck = ik(38272),
      Ak = ik(39570),
      jk = ik(39467),
      sk = ik(36734);

    function dk(kk, ek) {
      return kk - Math.floor(kk / ek) * ek
    }

    function Vk(kk, ek, ik) {
      kk instanceof Float32Array ? Sk.b.FromArrayToRef(kk, ek, ik) : ik.Z6((0, lk.e)(kk[ek]), (0, lk.e)(kk[ek + 1]), (0, lk.e)(kk[ek + 2]), (0, lk.e)(kk[ek + 3]), (0, lk.e)(kk[ek + 4]), (0, lk.e)(kk[ek + 5]), (0, lk.e)(kk[ek + 6]), (0, lk.e)(kk[ek + 7]), (0, lk.e)(kk[ek + 8]), (0, lk.e)(kk[ek + 9]), (0, lk.e)(kk[ek + 10]), (0, lk.e)(kk[ek + 11]), (0, lk.e)(kk[ek + 12]), (0, lk.e)(kk[ek + 13]), (0, lk.e)(kk[ek + 14]), (0, lk.e)(kk[ek + 15]))
    }

    function Fk(kk, ek, ik, Dk, fk, rk, Pk, mk, Mk) {
      const Kk = ik.texture,
        xk = Kk?.getInternalTexture(),
        nk = xk?._bufferView;
      if (!(nk instanceof Float32Array) && !(nk instanceof Uint16Array)) return Ck.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Uk = Kk.getSize(),
        Hk = function(kk, ek) {
          const ik = kk.y - kk.x + 1,
            Dk = ek * kk.w / ik,
            fk = Dk < 1 ? 0 : 1,
            Sk = ik - fk;
          let bk = dk(Dk - Math.floor(Dk), 1) * Sk;
          return bk = dk(bk + kk.z, Sk), Math.floor(bk) + kk.x + fk
        }(Dk, ik.time);
      if (!isFinite(Hk) || Hk < 0 || Hk >= Uk.height) return Ck.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const wk = Sk.j.eH[0],
        lk = Sk.j.Matrix[0],
        pk = Sk.j.Matrix[1],
        yk = Hk * Uk.width * 4,
        Yk = ek === bk.e.NormalKind ? Sk.o.TransformNormalFromFloatsToRef : Sk.o.TransformCoordinatesFromFloatsToRef;
      for (let Sk = 0, bk = 0; Sk < kk.length; Sk += 3, bk += 4) {
        let ek, ik;
        for (lk.reset(), ek = 0; ek < 4 && ek < Mk; ek++) ik = rk[bk + ek], ik > 0 && (Vk(nk, yk + 16 * Math.floor(fk[bk + ek]), pk), pk.scaleAndAddToRef(ik, lk));
        if (Pk && mk)
          for (ek = 0; ek < 4 && ek + 4 < Mk; ek++) ik = mk[bk + ek], ik > 0 && (Vk(nk, yk + 16 * Math.floor(Pk[bk + ek]), pk), pk.scaleAndAddToRef(ik, lk));
        Yk(kk[Sk], kk[Sk + 1], kk[Sk + 2], lk, wk), wk.toArray(kk, Sk)
      }
      return !0
    }
    class uk {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Sk.o.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class qk {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new uk, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new xk, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let Ik = (() => {
        var kk;
        let ek, xk = Pk.i,
          nk = [];
        return kk = class extends xk {
          static get BILLBOARDMODE_NONE() {
            return Pk.i.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Pk.i.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Pk.i.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Pk.i.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Pk.i.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Pk.i.BILLBOARDMODE_USE_POSITION
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
          set Vx(kk) {
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
            const ek = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = kk, (1 === ek && 1 !== kk || 1 !== ek && 1 === kk) && this._markSubMeshesAsDirty((kk => {
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
            this._internalAbstractMeshDataInfo._material !== kk && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = kk, kk && kk.meshMap && (kk.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.TY && (this.resetDrawCache(void 0, null == kk), this._unBindEffect()))
          }
          getMaterialForRenderPass(kk) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[kk]
          }
          setMaterialForRenderPass(kk, ek) {
            this.resetDrawCache(kk), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ik = this._internalAbstractMeshDataInfo._materialForRenderPass[kk];
            ik?.meshMap?.[this.uniqueId] && (ik.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[kk] = ek, ek && ek.meshMap && (ek.meshMap[this.uniqueId] = this)
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
            const ek = this._internalAbstractMeshDataInfo._skeleton;
            ek && ek.needInitialSkinMatrix && ek._unregisterMeshWithPoseMatrix(this), kk && kk.needInitialSkinMatrix && kk._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = kk, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(ek) {
            var ik;
            let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(ek, Dk, !1), ik = this, this._internalAbstractMeshDataInfo = new qk, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new fk.c, this.onCollisionPositionChangeObservable = new fk.c, this.onMaterialChangedObservable = new fk.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Pw = kk.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = yk.e.Red(), this.outlineWidth = .02, this.overlayColor = yk.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.kH = !1, this.DH = !1, this.actionManager = null, this.ellipsoid = new Sk.o(.5, 1, .5), this.ellipsoidOffset = new Sk.o(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new yk.f(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Eu: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new fk.c, this._onCollisionPositionChange = function(kk, ek) {
                let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ek.subtractToRef(ik._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > jk.c.CollisionsEpsilon && ik.position.addInPlace(ik._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Dk && ik.onCollideObservable.notifyObservers(Dk), ik.onCollisionPositionChangeObservable.notifyObservers(ik.position)
              }, Dk = this.XF(), this.layerMask = Dk.defaultRenderableLayerMask, Dk.Zik(this), this._resyncLightSources(), this._uniformBuffer = new Kk.d(this.XF().JU(), void 0, void 0, ek, !this.XF().JU().isWebGPU), this._buildUniformLayout(), Dk.performancePriority) {
              case 2:
                this.DH = !0;
              case 1:
                this.kH = !0, this.Pw = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(kk) {
            const ek = this._uniformBuffer;
            ek.N7("world", kk), ek.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), ek.update()
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
            let ek = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            ek += ", # of submeshes: " + (this.TY ? this.TY.length : 0);
            const ik = this._internalAbstractMeshDataInfo._skeleton;
            return ik && (ek += ", skeleton: " + ik.name), kk && (ek += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], ek += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Eu ? "YES" : "NO")), ek
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Pk.i.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(kk) {
            let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (ek || this.actionManager.isRecursive)) {
              if (!kk) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(kk)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(kk, !1) : null
          }
          _releaseRenderPassId(kk) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.TY) {
              for (const kk of this.TY) kk._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const kk of this.XF().lights) kk.isEnabled() && kk.canAffectMesh(this) && this._lightSources.push(kk);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(kk) {
            const ek = kk.isEnabled() && kk.canAffectMesh(this),
              ik = this._lightSources.indexOf(kk);
            let Dk = !1;
            if (-1 === ik) {
              if (!ek) return;
              this._lightSources.push(kk)
            } else {
              if (ek) return;
              Dk = !0, this._lightSources.splice(ik, 1)
            }
            this._markSubMeshesAsLightDirty(Dk)
          }
          _unBindEffect() {
            for (const kk of this.TY) kk.setEffect(null)
          }
          _removeLightSource(kk, ek) {
            const ik = this._lightSources.indexOf(kk); - 1 !== ik && (this._lightSources.splice(ik, 1), this._markSubMeshesAsLightDirty(ek))
          }
          _markSubMeshesAsDirty(kk) {
            if (this.TY)
              for (const ek of this.TY)
                for (let ik = 0; ik < ek._drawWrappers.length; ++ik) {
                  const Dk = ek._drawWrappers[ik];
                  Dk && Dk.defines && Dk.defines.markAllAsDirty && kk(Dk.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((ek => ek.markAsLightDirty(kk)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((kk => kk.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((kk => kk.markAsMiscDirty()))
          }
          pek(kk) {
            return this._currentRenderId = Number.MAX_VALUE, super.pek(kk), this._isDirty = !0, this
          }
          resetDrawCache(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.TY)
              for (const ik of this.TY) ik.resetDrawCache(kk, ek)
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
          oik() {
            return null
          }
          getVerticesData(kk) {
            return null
          }
          setVerticesData(kk, ek, ik, Dk) {
            return this
          }
          updateVerticesData(kk, ek, ik, Dk) {
            return this
          }
          setIndices(kk, ek) {
            return this
          }
          isVerticesDataPresent(kk) {
            return !1
          }
          hq() {
            return this._masterMesh ? this._masterMesh.hq() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.hq()
          }
          setBoundingInfo(kk) {
            return this._boundingInfo = kk, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(kk, ek, ik) {
            return this._boundingInfo = new Mk.b(kk, ek, ik), this._boundingInfo
          }
          normalizeToUnitCube() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(kk, ek, ik)
          }
          get useBones() {
            return this.skeleton && this.XF().skeletonsEnabled && this.isVerticesDataPresent(bk.e.MatricesIndicesKind) && this.isVerticesDataPresent(bk.e.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(kk) {}
          _activate(kk, ek) {
            return this._renderId = kk, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Pk.i.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get JF() {
            return !1
          }
          get hDk() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(kk, ek, ik) {
            return this.position.addInPlace(this.calcMovePOV(kk, ek, ik)), this
          }
          calcMovePOV(kk, ek, ik) {
            const Dk = new Sk.b;
            (this.rotationQuaternion ? this.rotationQuaternion : Sk.c.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Dk);
            const fk = Sk.o.Zero(),
              bk = this.definedFacingForward ? -1 : 1;
            return Sk.o.TransformCoordinatesFromFloatsToRef(kk * bk, ek, ik * bk, Dk, fk), fk
          }
          rotatePOV(kk, ek, ik) {
            return this.rotation.addInPlace(this.calcRotatePOV(kk, ek, ik)), this
          }
          calcRotatePOV(kk, ek, ik) {
            const Dk = this.definedFacingForward ? 1 : -1;
            return new Sk.o(kk * Dk, ek, ik * Dk)
          }
          _refreshBoundingInfo(kk, ek) {
            if (kk) {
              const ik = (0, pk.f)(kk, 0, this.getTotalVertices(), ek);
              this._boundingInfo ? this._boundingInfo.reConstruct(ik.minimum, ik.maximum) : this._boundingInfo = new Mk.b(ik.minimum, ik.maximum)
            }
            if (this.TY)
              for (let ik = 0; ik < this.TY.length; ik++) this.TY[ik].refreshBoundingInfo(kk);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(kk) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(kk.minimum, kk.maximum) : this._boundingInfo = new Mk.b(kk.minimum, kk.maximum), this.TY)
              for (let ek = 0; ek < this.TY.length; ek++) this.TY[ek].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(kk, ek, ik, Dk, fk, rk, Pk) {
            ! function(kk, ek, ik, Dk, fk, rk, Pk) {
              const mk = Sk.j.eH[0],
                Mk = Sk.j.Matrix[0],
                Kk = Sk.j.Matrix[1],
                xk = ek === bk.e.NormalKind ? Sk.o.TransformNormalFromFloatsToRef : Sk.o.TransformCoordinatesFromFloatsToRef;
              for (let bk = 0, nk = 0; bk < kk.length; bk += 3, nk += 4) {
                let ek, Uk;
                for (Mk.reset(), ek = 0; ek < 4; ek++) Uk = fk[nk + ek], Uk > 0 && (Sk.b.FromFloat32ArrayToRefScaled(ik, Math.floor(16 * Dk[nk + ek]), Uk, Kk), Mk.addToSelf(Kk));
                if (rk && Pk)
                  for (ek = 0; ek < 4; ek++) Uk = Pk[nk + ek], Uk > 0 && (Sk.b.FromFloat32ArrayToRefScaled(ik, Math.floor(16 * rk[nk + ek]), Uk, Kk), Mk.addToSelf(Kk));
                xk(kk[bk], kk[bk + 1], kk[bk + 2], Mk, mk), mk.toArray(kk, bk)
              }
            }(kk, ek, ik, Dk, fk, rk, Pk)
          }
          _getData(ek, ik) {
            let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bk.e.PositionKind;
            const fk = ek.cache,
              rk = kk => {
                if (fk) {
                  const ek = fk._vertexData || (fk._vertexData = {});
                  return ek[kk] || this.copyVerticesData(kk, ek), ek[kk]
                }
                return this.getVerticesData(kk)
              };
            if (ik || (ik = rk(Dk)), !ik) return null;
            fk ? (fk._outputData ? fk._outputData.set(ik) : fk._outputData = new Float32Array(ik), ik = fk._outputData) : (ek.applyMorph && this.morphTargetManager || ek.applySkeleton && this.skeleton || ek.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ik = ik.slice()), ek.applyMorph && this.morphTargetManager && function(kk, ek, ik) {
              let Dk;
              switch (ek) {
                case bk.e.PositionKind:
                  Dk = kk => kk.getPositions();
                  break;
                case bk.e.NormalKind:
                  Dk = kk => kk.getNormals();
                  break;
                case bk.e.TangentKind:
                  Dk = kk => kk.getTangents();
                  break;
                case bk.e.UVKind:
                  Dk = kk => kk.getUVs();
                  break;
                case bk.e.UV2Kind:
                  Dk = kk => kk.getUV2s();
                  break;
                case bk.e.ColorKind:
                  Dk = kk => kk.getColors();
                  break;
                default:
                  return
              }
              for (let fk = 0; fk < kk.length; fk++) {
                let ek = kk[fk];
                for (let Sk = 0; Sk < ik.numTargets; Sk++) {
                  const bk = ik.getTarget(Sk),
                    rk = bk.influence;
                  if (0 !== rk) {
                    const ik = Dk(bk);
                    ik && (ek += (ik[fk] - kk[fk]) * rk)
                  }
                }
                kk[fk] = ek
              }
            }(ik, Dk, this.morphTargetManager);
            const Pk = this.bakedVertexAnimationManager;
            let mk = !1;
            if (ek.applyBakedVertexAnimation && Pk?.isEnabled) {
              const kk = rk(bk.e.MatricesIndicesKind),
                fk = rk(bk.e.MatricesWeightsKind);
              if (fk && kk) {
                const Sk = this.numBoneInfluencers > 4,
                  Mk = Sk ? rk(bk.e.MatricesIndicesExtraKind) : null,
                  Kk = Sk ? rk(bk.e.MatricesWeightsExtraKind) : null;
                mk = Fk(ik, Dk, Pk, ek.bakedVertexAnimationSettings ?? Pk.animationParameters, kk, fk, Mk, Kk, this.numBoneInfluencers)
              }
            }
            if (!mk && ek.applySkeleton && this.skeleton) {
              const ek = rk(bk.e.MatricesIndicesKind),
                fk = rk(bk.e.MatricesWeightsKind);
              if (fk && ek) {
                const Sk = this.numBoneInfluencers > 4,
                  Pk = Sk ? rk(bk.e.MatricesIndicesExtraKind) : null,
                  mk = Sk ? rk(bk.e.MatricesWeightsExtraKind) : null,
                  Mk = this.skeleton.getTransformMatrices(this);
                kk._ApplySkeleton(ik, Dk, Mk, ek, fk, Pk, mk)
              }
            }
            if (!1 !== ek.updatePositionsArray && Dk === bk.e.PositionKind) {
              const kk = this._internalAbstractMeshDataInfo._positions || [],
                ek = kk.length;
              if (kk.length = ik.length / 3, ek < kk.length)
                for (let ik = ek; ik < kk.length; ik++) kk[ik] = new Sk.o;
              for (let Dk = 0, fk = 0; Dk < kk.length; Dk++, fk += 3) kk[Dk].Z6(ik[fk], ik[fk + 1], ik[fk + 2]);
              this._internalAbstractMeshDataInfo._positions = kk
            }
            return ik
          }
          getNormalsData() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: kk,
              applyMorph: ek,
              updatePositionsArray: !1
            }, null, bk.e.NormalKind)
          }
          ZZ() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: kk,
              applyMorph: ek,
              updatePositionsArray: !1
            }, ik, bk.e.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Mk.b(Sk.o.Zero(), Sk.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(kk) {
            if (!this.TY) return this;
            const ek = this.TY.length;
            for (let ik = 0; ik < ek; ik++) {
              const Dk = this.TY[ik];
              (ek > 1 || !Dk.IsGlobal) && Dk.updateBoundingInfo(kk)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.DH || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(kk) {
            return this.hq().isInFrustum(kk, this.cullingStrategy)
          }
          isCompletelyInFrustum(kk) {
            return this.hq().isCompletelyInFrustum(kk)
          }
          qDk(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = arguments.length > 2 ? arguments[2] : void 0;
            const Dk = this.hq(),
              fk = kk.hq();
            if (Dk.intersects(fk, ek)) return !0;
            if (ik)
              for (const Sk of this.getChildMeshes())
                if (Sk.qDk(kk, ek, !0)) return !0;
            return !1
          }
          intersectsPoint(kk) {
            return this.hq().intersectsPoint(kk)
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
            let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ik = this.XF().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ik.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ik.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, kk, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, ek), this
          }
          _collideForSubMesh(kk, ek, ik) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!kk._lastColliderWorldVertices || !kk._lastColliderTransformMatrix.equals(ek)) {
              kk._lastColliderTransformMatrix = ek.clone(), kk._lastColliderWorldVertices = [], kk._trianglePlanes = [];
              const ik = kk.verticesStart,
                Dk = kk.verticesStart + kk.verticesCount;
              for (let fk = ik; fk < Dk; fk++) kk._lastColliderWorldVertices.push(Sk.o.TransformCoordinates(this._positions[fk], ek))
            }
            return ik._collide(kk._trianglePlanes, kk._lastColliderWorldVertices, this.oik(), kk.indexStart, kk.indexStart + kk.indexCount, kk.verticesStart, !!kk.fH(), this, this._shouldConvertRHS(), 7 === kk.fH()?.fillMode), this
          }
          _processCollisionsForSubMeshes(kk, ek) {
            const ik = this._scene.getCollidingSubMeshCandidates(this, kk),
              Dk = ik.length;
            for (let fk = 0; fk < Dk; fk++) {
              const Sk = ik.data[fk];
              Dk > 1 && !Sk._checkCollision(kk) || this._collideForSubMesh(Sk, ek, kk)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(kk) {
            if (!this.hq()._checkCollision(kk)) return this;
            const ek = Sk.j.Matrix[0],
              ik = Sk.j.Matrix[1];
            return Sk.b.ScalingToRef(1 / kk._radius.x, 1 / kk._radius.y, 1 / kk._radius.z, ek), this.worldMatrixFromCache.multiplyToRef(ek, ik), this._processCollisionsForSubMeshes(kk, ik), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(kk, ek, ik) {
            let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              fk = arguments.length > 4 ? arguments[4] : void 0,
              bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const rk = new mk.b,
              Pk = this.getClassName(),
              Mk = "InstancedLinesMesh" === Pk || "LinesMesh" === Pk || "GreasedLineMesh" === Pk ? this.intersectionThreshold : 0,
              Kk = this.hq();
            if (!this.TY) return rk;
            if (!bk && (!kk.intersectsSphere(Kk.HDk, Mk) || !kk.intersectsBox(Kk.boundingBox, Mk))) return rk;
            if (Dk) return rk.hit = !bk, rk.pickedMesh = bk ? null : this, rk.distance = bk ? 0 : Sk.o.Distance(kk.origin, Kk.HDk.center), rk.subMeshId = 0, rk;
            if (!this._generatePointsArray()) return rk;
            let xk = null;
            const nk = this._scene.getIntersectingSubMeshCandidates(this, kk),
              Uk = nk.length;
            let Hk = !1;
            for (let Sk = 0; Sk < Uk; Sk++) {
              const kk = nk.data[Sk].fH();
              if (kk && (7 == kk.fillMode || 0 == kk.fillMode || 1 == kk.fillMode || 2 == kk.fillMode || 4 == kk.fillMode)) {
                Hk = !0;
                break
              }
            }
            if (!Hk) return rk.hit = !0, rk.pickedMesh = this, rk.distance = Sk.o.Distance(kk.origin, Kk.HDk.center), rk.subMeshId = -1, rk;
            for (let Sk = 0; Sk < Uk; Sk++) {
              const Dk = nk.data[Sk];
              if (Uk > 1 && !bk && !Dk.canIntersects(kk)) continue;
              const fk = Dk.intersects(kk, this._positions, this.oik(), ek, ik);
              if (fk && (ek || !xk || fk.distance < xk.distance) && (xk = fk, xk.subMeshId = Dk._id, xk._internalSubMeshId = Sk, ek)) break
            }
            if (xk) {
              const ek = fk ?? this.getWorldMatrix(),
                ik = Sk.j.eH[0],
                Dk = Sk.j.eH[1];
              Sk.o.TransformCoordinatesToRef(kk.origin, ek, ik), kk.direction.scaleToRef(xk.distance, Dk);
              const bk = Sk.o.TransformNormal(Dk, ek).addInPlace(ik);
              return rk.hit = !0, rk.distance = Sk.o.Distance(ik, bk), rk.pickedPoint = bk, rk.pickedMesh = this, rk.bu = xk.bu || 0, rk.bv = xk.bv || 0, rk.subMeshFaceId = xk.faceId, rk.faceId = xk.faceId + nk.data[xk._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), rk.subMeshId = xk.subMeshId, rk
            }
            return rk
          }
          clone(kk, ek, ik) {
            return null
          }
          releaseSubMeshes() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.TY)
              for (; this.TY.length;) this.TY[0].dispose(kk);
            else this.TY = [];
            return this
          }
          dispose(kk) {
            let ek, ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Dk = this.XF();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Dk.freeActiveMeshes(), Dk.freeRenderingGroups(), Dk.renderingManager.maintainStateBetweenFrames && Dk.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((kk => kk !== this && kk.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), ek = 0; ek < this._intersectionsInProgress.length; ek++) {
              const kk = this._intersectionsInProgress[ek],
                ik = kk._intersectionsInProgress.indexOf(this);
              kk._intersectionsInProgress.splice(ik, 1)
            }
            this._intersectionsInProgress.length = 0;
            const fk = Dk.lights;
            for (const bk of fk) {
              let kk = bk.includedOnlyMeshes.indexOf(this); - 1 !== kk && bk.includedOnlyMeshes.splice(kk, 1), kk = bk.excludedMeshes.indexOf(this), -1 !== kk && bk.excludedMeshes.splice(kk, 1);
              const ek = bk.getShadowGenerators();
              if (ek) {
                const ik = ek.values();
                for (let ek = ik.next(); !0 !== ek.done; ek = ik.next()) {
                  const ik = ek.value.getShadowMap();
                  ik && ik.renderList && (kk = ik.renderList.indexOf(this), -1 !== kk && ik.renderList.splice(kk, 1))
                }
              }
            }
            this.releaseSubMeshes(Dk._isDisposing);
            const Sk = Dk.JU();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Sk.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Sk.wipeCaches(), Dk.Tu(this), this._parentContainer) {
              const kk = this._parentContainer.meshes.indexOf(this);
              kk > -1 && this._parentContainer.meshes.splice(kk, 1), this._parentContainer = null
            }
            if (ik && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !kk)
              for (ek = 0; ek < Dk.ZY.length; ek++) Dk.ZY[ek].emitter === this && (Dk.ZY[ek].dispose(), ek--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(kk, ik)
          }
          _initFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetNormals || (kk.facetNormals = []), kk.facetPositions || (kk.facetPositions = []), kk.facetPartitioning || (kk.facetPartitioning = new Array), kk.facetNb = this.oik().length / 3 | 0, kk.partitioningSubdivisions = kk.partitioningSubdivisions ? kk.partitioningSubdivisions : 10, kk.partitioningBBoxRatio = kk.partitioningBBoxRatio ? kk.partitioningBBoxRatio : 1.01;
            for (let ek = 0; ek < kk.facetNb; ek++) kk.facetNormals[ek] = Sk.o.Zero(), kk.facetPositions[ek] = Sk.o.Zero();
            return kk.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            kk.facetDataEnabled || this._initFacetData();
            const ek = this.getVerticesData(bk.e.PositionKind),
              ik = this.oik(),
              Dk = this.getVerticesData(bk.e.NormalKind)?.slice(),
              fk = this.hq();
            if (kk.facetDepthSort && !kk.facetDepthSortEnabled) {
              if (kk.facetDepthSortEnabled = !0, ik instanceof Uint16Array) kk.depthSortedIndices = new Uint16Array(ik);
              else if (ik instanceof Uint32Array) kk.depthSortedIndices = new Uint32Array(ik);
              else {
                let ek = !1;
                for (let kk = 0; kk < ik.length; kk++)
                  if (ik[kk] > 65535) {
                    ek = !0;
                    break
                  } kk.depthSortedIndices = ek ? new Uint32Array(ik) : new Uint16Array(ik)
              }
              if (kk.facetDepthSortFunction = function(kk, ek) {
                  return ek.sqDistance - kk.sqDistance
                }, !kk.facetDepthSortFrom) {
                const ek = this.XF().activeCamera;
                kk.facetDepthSortFrom = ek ? ek.position : Sk.o.Zero()
              }
              kk.depthSortedFacets = [];
              for (let ek = 0; ek < kk.facetNb; ek++) {
                const ik = {
                  ind: 3 * ek,
                  sqDistance: 0
                };
                kk.depthSortedFacets.push(ik)
              }
              kk.invertedMatrix = Sk.b.Identity(), kk.facetDepthSortOrigin = Sk.o.Zero()
            }
            kk.bbSize.x = fk.maximum.x - fk.minimum.x > Yk.d ? fk.maximum.x - fk.minimum.x : Yk.d, kk.bbSize.y = fk.maximum.y - fk.minimum.y > Yk.d ? fk.maximum.y - fk.minimum.y : Yk.d, kk.bbSize.z = fk.maximum.z - fk.minimum.z > Yk.d ? fk.maximum.z - fk.minimum.z : Yk.d;
            let Pk = kk.bbSize.x > kk.bbSize.y ? kk.bbSize.x : kk.bbSize.y;
            if (Pk = Pk > kk.bbSize.z ? Pk : kk.bbSize.z, kk.subDiv.max = kk.partitioningSubdivisions, kk.subDiv.X = Math.floor(kk.subDiv.max * kk.bbSize.x / Pk), kk.subDiv.Y = Math.floor(kk.subDiv.max * kk.bbSize.y / Pk), kk.subDiv.Z = Math.floor(kk.subDiv.max * kk.bbSize.z / Pk), kk.subDiv.X = kk.subDiv.X < 1 ? 1 : kk.subDiv.X, kk.subDiv.Y = kk.subDiv.Y < 1 ? 1 : kk.subDiv.Y, kk.subDiv.Z = kk.subDiv.Z < 1 ? 1 : kk.subDiv.Z, kk.facetParameters.facetNormals = this.getFacetLocalNormals(), kk.facetParameters.facetPositions = this.getFacetLocalPositions(), kk.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), kk.facetParameters.bInfo = fk, kk.facetParameters.bbSize = kk.bbSize, kk.facetParameters.subDiv = kk.subDiv, kk.facetParameters.ratio = this.partitioningBBoxRatio, kk.facetParameters.depthSort = kk.facetDepthSort, kk.facetDepthSort && kk.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(kk.invertedMatrix), Sk.o.TransformCoordinatesToRef(kk.facetDepthSortFrom, kk.invertedMatrix, kk.facetDepthSortOrigin), kk.facetParameters.distanceTo = kk.facetDepthSortOrigin), kk.facetParameters.depthSortedFacets = kk.depthSortedFacets, Dk && rk.b.ComputeNormals(ek, ik, Dk, kk.facetParameters), kk.facetDepthSort && kk.facetDepthSortEnabled) {
              kk.depthSortedFacets.sort(kk.facetDepthSortFunction);
              const ek = kk.depthSortedIndices.length / 3 | 0;
              for (let Dk = 0; Dk < ek; Dk++) {
                const ek = kk.depthSortedFacets[Dk].ind;
                kk.depthSortedIndices[3 * Dk] = ik[ek], kk.depthSortedIndices[3 * Dk + 1] = ik[ek + 1], kk.depthSortedIndices[3 * Dk + 2] = ik[ek + 2]
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
            const ek = Sk.o.Zero();
            return this.getFacetPositionToRef(kk, ek), ek
          }
          getFacetPositionToRef(kk, ek) {
            const ik = this.getFacetLocalPositions()[kk],
              Dk = this.getWorldMatrix();
            return Sk.o.TransformCoordinatesToRef(ik, Dk, ek), this
          }
          getFacetNormal(kk) {
            const ek = Sk.o.Zero();
            return this.getFacetNormalToRef(kk, ek), ek
          }
          getFacetNormalToRef(kk, ek) {
            const ik = this.getFacetLocalNormals()[kk];
            return Sk.o.TransformNormalToRef(ik, this.getWorldMatrix(), ek), this
          }
          getFacetsAtLocalCoordinates(kk, ek, ik) {
            const Dk = this.hq(),
              fk = this._internalAbstractMeshDataInfo._facetData,
              Sk = Math.floor((kk - Dk.minimum.x * fk.partitioningBBoxRatio) * fk.subDiv.X * fk.partitioningBBoxRatio / fk.bbSize.x),
              bk = Math.floor((ek - Dk.minimum.y * fk.partitioningBBoxRatio) * fk.subDiv.Y * fk.partitioningBBoxRatio / fk.bbSize.y),
              rk = Math.floor((ik - Dk.minimum.z * fk.partitioningBBoxRatio) * fk.subDiv.Z * fk.partitioningBBoxRatio / fk.bbSize.z);
            return Sk < 0 || Sk > fk.subDiv.max || bk < 0 || bk > fk.subDiv.max || rk < 0 || rk > fk.subDiv.max ? null : fk.facetPartitioning[Sk + fk.subDiv.max * bk + fk.subDiv.max * fk.subDiv.max * rk]
          }
          getClosestFacetAtCoordinates(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const rk = this.getWorldMatrix(),
              Pk = Sk.j.Matrix[5];
            rk.invertToRef(Pk);
            const mk = Sk.j.eH[8];
            Sk.o.TransformCoordinatesFromFloatsToRef(kk, ek, ik, Pk, mk);
            const Mk = this.getClosestFacetAtLocalCoordinates(mk.x, mk.y, mk.z, Dk, fk, bk);
            return Dk && Sk.o.TransformCoordinatesFromFloatsToRef(Dk.x, Dk.y, Dk.z, rk, Dk), Mk
          }
          getClosestFacetAtLocalCoordinates(kk, ek, ik, Dk) {
            let fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              nk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Uk = null;
            const Hk = this.getFacetLocalPositions(),
              wk = this.getFacetLocalNormals(),
              lk = this.getFacetsAtLocalCoordinates(kk, ek, ik);
            if (!lk) return null;
            let pk, yk, Yk, Lk, Ck = Number.MAX_VALUE;
            for (let Ak = 0; Ak < lk.length; Ak++) yk = lk[Ak], Yk = wk[yk], Lk = Hk[yk], rk = (kk - Lk.x) * Yk.x + (ek - Lk.y) * Yk.y + (ik - Lk.z) * Yk.z, (!xk || xk && nk && rk >= 0 || xk && !nk && rk <= 0) && (rk = Yk.x * Lk.x + Yk.y * Lk.y + Yk.z * Lk.z, Pk = -(Yk.x * kk + Yk.y * ek + Yk.z * ik - rk) / (Yk.x * Yk.x + Yk.y * Yk.y + Yk.z * Yk.z), mk = kk + Yk.x * Pk, Mk = ek + Yk.y * Pk, Kk = ik + Yk.z * Pk, fk = mk - kk, Sk = Mk - ek, bk = Kk - ik, pk = fk * fk + Sk * Sk + bk * bk, pk < Ck && (Ck = pk, Uk = yk, Dk && (Dk.x = mk, Dk.y = Mk, Dk.z = Kk)));
            return Uk
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const kk = this._internalAbstractMeshDataInfo._facetData;
            return kk.facetDataEnabled && (kk.facetDataEnabled = !1, kk.facetPositions = [], kk.facetNormals = [], kk.facetPartitioning = new Array, kk.facetParameters = {}, kk.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(kk, ek) {
            return this
          }
          createNormals(kk) {
            const ek = this.getVerticesData(bk.e.PositionKind),
              ik = this.oik();
            let Dk;
            return Dk = this.isVerticesDataPresent(bk.e.NormalKind) ? this.getVerticesData(bk.e.NormalKind) : [], rk.b.ComputeNormals(ek, ik, Dk, {
              useRightHandedSystem: this.XF().useRightHandedSystem
            }), this.setVerticesData(bk.e.NormalKind, Dk, kk), this
          }
          async optimizeIndicesAsync() {
            const kk = this.oik();
            if (!kk) return this;
            const {
              OptimizeIndices: ek
            } = await ik.e(350).then((() => ik(42146)));
            return ek(kk), this.setIndices(kk, this.getTotalVertices()), this
          }
          alignWithNormal(kk, ek) {
            ek || (ek = Lk.d.Y);
            const ik = Sk.j.eH[0],
              Dk = Sk.j.eH[1];
            return Sk.o.CrossToRef(ek, kk, Dk), Sk.o.CrossToRef(kk, Dk, ik), this.rotationQuaternion ? Sk.c.RotationQuaternionFromAxisToRef(ik, kk, Dk, this.rotationQuaternion) : Sk.o.RotationFromAxisToRef(ik, kk, Dk, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, wk.k)("EdgesRenderer")
          }
          enableEdgesRendering(kk, ek, ik) {
            throw (0, wk.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.ZY.filter((kk => kk.emitter === this))
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(xk[Symbol.metadata] ?? null) : void 0;
          ek = [Ak.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Dk.d)(kk, null, ek, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: kk => "_ApplySkeleton" in kk,
              get: kk => kk._ApplySkeleton
            },
            metadata: ik
          }, null, nk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk.OCCLUSION_TYPE_NONE = ((0, Dk.e)(kk, nk), 0), kk.OCCLUSION_TYPE_OPTIMISTIC = 1, kk.OCCLUSION_TYPE_STRICT = 2, kk.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, kk.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, kk.CULLINGSTRATEGY_STANDARD = 0, kk.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, kk.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, kk.DefaultIsPickable = !0, kk
      })(),
      zk = !1;

    function Qk() {
      zk || (zk = !0, (0, sk.h)("BABYLON.AbstractMesh", Ik))
    }(nk = Ik.prototype).createOrUpdateSubmeshesOctree ?? (nk.createOrUpdateSubmeshesOctree = (0, wk.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Uk = Ik.prototype).getPhysicsImpostor ?? (Uk.getPhysicsImpostor = (0, wk.i)("AbstractMesh", "getPhysicsImpostor")), (Hk = Ik.prototype).setPhysicsLinkWith ?? (Hk.setPhysicsLinkWith = (0, wk.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(Ik.prototype, "occlusionRetryCount") || Object.defineProperty(Ik.prototype, "occlusionRetryCount", (0, wk.h)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(Ik.prototype, "occlusionType") || Object.defineProperty(Ik.prototype, "occlusionType", (0, wk.h)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(Ik.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(Ik.prototype, "occlusionQueryAlgorithmType", (0, wk.h)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(Ik.prototype, "isOccluded") || Object.defineProperty(Ik.prototype, "isOccluded", (0, wk.h)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(Ik.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(Ik.prototype, "isOcclusionQueryInProgress", (0, wk.h)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(Ik.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(Ik.prototype, "forceRenderingWhenOccluded", (0, wk.h)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(Ik.prototype, "occlusionForRenderPassId") || Object.defineProperty(Ik.prototype, "occlusionForRenderPassId", (0, wk.h)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(Ik.prototype, "decalMap") || Object.defineProperty(Ik.prototype, "decalMap", (0, wk.h)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(Ik.prototype, "Iq") || Object.defineProperty(Ik.prototype, "Iq", (0, wk.h)("AbstractMesh", "Iq")), Object.getOwnPropertyDescriptor(Ik.prototype, "physicsImpostor") || Object.defineProperty(Ik.prototype, "physicsImpostor", (0, wk.h)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(Ik.prototype, "showBoundingBox") || Object.defineProperty(Ik.prototype, "showBoundingBox", (0, wk.h)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(Ik.prototype, "edgesRenderer") || Object.defineProperty(Ik.prototype, "edgesRenderer", (0, wk.h)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(Ik.prototype, "renderOutline") || Object.defineProperty(Ik.prototype, "renderOutline", (0, wk.h)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(Ik.prototype, "renderOverlay") || Object.defineProperty(Ik.prototype, "renderOverlay", (0, wk.h)("AbstractMesh", "renderOverlay"))
  },
  40010: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => lk
    });
    var Dk = ik(36698),
      fk = ik(36874),
      Sk = ik(40001),
      bk = ik(39708),
      rk = ik(39870),
      Pk = ik(40012),
      mk = ik(39887),
      Mk = ik(39662),
      Kk = ik(38272),
      xk = ik(39592),
      nk = ik(39901),
      Uk = ik(36722),
      Hk = ik(40014),
      wk = ik(39623);
    class lk {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(kk) {
        this._boundingBias ? this._boundingBias.Fs(kk) : this._boundingBias = kk.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(kk) {
        const ek = new lk(lk.RandomId(), kk.XF());
        return ek.applyToMesh(kk), ek
      }
      get meshes() {
        return this._meshes
      }
      constructor(kk, ek, ik) {
        let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Dk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Dk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = ek || Uk.e.LastCreatedScene, this._scene && (this.id = kk, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.JU(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = fk, null !== bk && (this._totalVertices = bk), ik ? this.setAllVerticesData(ik, fk) : null === bk && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Sk && (this.applyToMesh(Sk), Sk.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      XF() {
        return this._scene
      }
      JU() {
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
        for (const ek in this._vertexBuffers) kk.add(this._vertexBuffers[ek].getWrapperBuffer());
        kk.forEach((kk => {
          kk._rebuild()
        }))
      }
      setAllVerticesData(kk, ek) {
        kk.applyToGeometry(this, ek), this._notifyUpdate()
      }
      setVerticesData(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        ik && Array.isArray(ek) && (ek = new Float32Array(ek));
        const fk = new bk.e(this._engine, ek, kk, {
          updatable: ik,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Dk,
          label: "Geometry_" + this.id + "_" + kk
        });
        this.setVerticesBuffer(fk)
      }
      removeVerticesData(kk) {
        this._vertexBuffers[kk] && (this._vertexBuffers[kk].dispose(), delete this._vertexBuffers[kk]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const fk = kk.getKind();
        this._vertexBuffers[fk] && ik && this._vertexBuffers[fk].dispose(), kk._buffer && kk._ownsBuffer && kk._buffer._increaseReferences(), this._vertexBuffers[fk] = kk;
        const Sk = this._meshes,
          rk = Sk.length;
        if (fk === bk.e.PositionKind) {
          this._totalVertices = ek ?? kk._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : kk.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ik = this._extend && this._extend.minimum || new Dk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            fk = this._extend && this._extend.maximum || new Dk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let kk = 0; kk < rk; kk++) {
            const ek = Sk[kk];
            ek.buildBoundingInfo(ik, fk), ek._createGlobalSubMesh(ek.isUnIndexed), ek.computeWorldMatrix(!0), ek.synchronizeInstances()
          }
        }
        this._notifyUpdate(fk)
      }
      updateVerticesDataDirectly(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fk = this.getVertexBuffer(kk);
        fk && (fk.updateDirectly(ek, ik, Dk), this._notifyUpdate(kk))
      }
      updateVerticesData(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this.getVertexBuffer(kk);
        Dk && (Dk.update(ek), kk === bk.e.PositionKind && this._updateBoundingInfo(ik, ek), this._notifyUpdate(kk))
      }
      _updateBoundingInfo(kk, ek) {
        if (kk && this._updateExtend(ek), this._resetPointsArrayCache(), kk) {
          const kk = this._meshes;
          for (const ek of kk) {
            ek.hasBoundingInfo ? ek.hq().reConstruct(this._extend.minimum, this._extend.maximum) : ek.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const kk = ek.TY;
            for (const ek of kk) ek.refreshBoundingInfo()
          }
        }
      }
      _bind(kk, ek, ik, Dk) {
        if (!kk) return;
        void 0 === ek && (ek = this._indexBuffer);
        const fk = this.getVertexBuffers();
        if (!fk) return;
        if (ek != this._indexBuffer || !this._vertexArrayObjects && !Dk) return void this._engine.bindBuffers(fk, ek, kk, ik);
        const Sk = Dk || this._vertexArrayObjects,
          bk = this._engine;
        Sk[kk.key] || (Sk[kk.key] = bk.recordVertexArrayObject(fk, ek, kk, ik)), bk.bindVertexArrayObject(Sk[kk.key], ek)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(kk, ek, ik) {
        const Dk = this.getVertexBuffer(kk);
        return Dk ? Dk.getFloatData(this._totalVertices, ik || ek && 1 !== this._meshes.length) : null
      }
      copyVerticesData(kk, ek) {
        const ik = this.getVertexBuffer(kk);
        if (!ik) return;
        ek[kk] || (ek[kk] = new Float32Array(this._totalVertices * ik.getSize()));
        const Dk = ik.getData();
        Dk && (0, wk.i)(Dk, ik.getSize(), ik.type, ik.byteOffset, ik.byteStride, ik.normalized, this._totalVertices, ek[kk])
      }
      isVertexBufferUpdatable(kk) {
        const ek = this._vertexBuffers[kk];
        return !!ek && ek.isUpdatable()
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
        let ek;
        if (!this._vertexBuffers && this._delayInfo)
          for (ek in this._delayInfo) kk.push(ek);
        else
          for (ek in this._vertexBuffers) kk.push(ek);
        return kk
      }
      updateIndices(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Dk = kk.length !== this._indices.length;
            if (ik || (this._indices = kk.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, kk, ek), Dk)
              for (const kk of this._meshes) kk._createGlobalSubMesh(!0)
          } else this.setIndices(kk, null, !0)
      }
      setIndexBuffer(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = kk, this._totalVertices = ek, this._totalIndices = ik, kk.is32Bits = null === Dk ? ek > 65535 : Dk;
        for (const fk of this._meshes) fk._createGlobalSubMesh(!0), fk.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = kk, this._indexBufferIsUpdatable = ik, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ik, "Geometry_" + this.id + "_IndexBuffer")), void 0 != ek && (this._totalVertices = ek);
        for (const fk of this._meshes) fk._createGlobalSubMesh(!Dk), fk.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      oik(kk, ek) {
        if (!this.isReady()) return null;
        const ik = this._indices;
        return ek || kk && 1 !== this._meshes.length ? ik.slice() : ik
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        kk && this._vertexArrayObjects && this._vertexArrayObjects[kk.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[kk.key]), delete this._vertexArrayObjects[kk.key])
      }
      releaseForMesh(kk, ek) {
        const ik = this._meshes,
          Dk = ik.indexOf(kk); - 1 !== Dk && (ik.splice(Dk, 1), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject(), kk._geometry = null, 0 === ik.length && ek && this.dispose())
      }
      applyToMesh(kk) {
        if (kk._geometry === this) return;
        const ek = kk._geometry;
        ek && ek.releaseForMesh(kk), this._vertexArrayObjects && kk._invalidateInstanceVertexArrayObject();
        const ik = this._meshes;
        kk._geometry = this, kk._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ik.push(kk), this.isReady() ? this._applyToMesh(kk) : this._boundingInfo && kk.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!kk && (kk = this.getVerticesData(bk.e.PositionKind), !kk)) return;
          this._extend = (0, nk.f)(kk, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(kk) {
        for (const ek in this._vertexBuffers) {
          const ik = this._vertexBuffers[ek];
          ik._buffer.getBuffer() || ik.create(), ek === bk.e.PositionKind && (this._extend || this._updateExtend(), kk.buildBoundingInfo(this._extend.minimum, this._extend.maximum), kk._createGlobalSubMesh(kk.isUnIndexed), kk._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), kk._syncGeometryWithMorphTargetManager(), kk.synchronizeInstances()
      }
      _notifyUpdate(kk) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, kk), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const ek of this._meshes) ek._markSubMeshesAsAttributesDirty()
      }
      load(kk, ek) {
        2 !== this.delayLoadState && (this.isReady() ? ek && ek() : (this.delayLoadState = 2, this._queueLoad(kk, ek)))
      }
      _queueLoad(kk, ek) {
        this.delayLoadingFile && (kk.addPendingData(this), (async () => {
          try {
            const ik = await kk._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void kk.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ik), this), this.delayLoadState = 1, this._delayInfo = [], kk.removePendingData(this);
            const Dk = this._meshes,
              fk = Dk.length;
            for (let kk = 0; kk < fk; kk++) this._applyToMesh(Dk[kk]);
            ek && ek()
          } catch (ik) {
            kk.removePendingData(this), kk.RL || Kk.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ik}`)
          }
        })())
      }
      toLeftHanded() {
        const kk = this.oik(!1);
        if (null != kk && kk.length > 0) {
          for (let ek = 0; ek < kk.length; ek += 3) {
            const ik = kk[ek + 0];
            kk[ek + 0] = kk[ek + 2], kk[ek + 2] = ik
          }
          this.setIndices(kk)
        }
        const ek = this.getVerticesData(bk.e.PositionKind, !1);
        if (null != ek && ek.length > 0) {
          for (let kk = 0; kk < ek.length; kk += 3) ek[kk + 2] = -ek[kk + 2];
          this.setVerticesData(bk.e.PositionKind, ek, !1)
        }
        const ik = this.getVerticesData(bk.e.NormalKind, !1);
        if (null != ik && ik.length > 0) {
          for (let kk = 0; kk < ik.length; kk += 3) ik[kk + 2] = -ik[kk + 2];
          this.setVerticesData(bk.e.NormalKind, ik, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const kk = this.getVerticesData(bk.e.PositionKind);
        if (!kk || 0 === kk.length) return !1;
        for (let ek = 3 * this._positionsCache.length, ik = this._positionsCache.length; ek < kk.length; ek += 3, ++ik) this._positionsCache[ik] = Dk.o.FromArray(kk, ek);
        for (let ek = 0, ik = 0; ek < kk.length; ek += 3, ++ik) this._positionsCache[ik].set(kk[0 + ek], kk[1 + ek], kk[2 + ek]);
        return this._positionsCache.length = kk.length / 3, this._positions = this._positionsCache, !0
      }
      RL() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ik in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ik]);
          this._vertexArrayObjects = {};
          const kk = this._meshes,
            ek = kk.length;
          for (let ik = 0; ik < ek; ik++) kk[ik]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const kk = this._meshes,
          ek = kk.length;
        let ik;
        for (ik = 0; ik < ek; ik++) this.releaseForMesh(kk[ik]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Dk in this._vertexBuffers) this._vertexBuffers[Dk].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const kk = this._parentContainer.geometries.indexOf(this);
          kk > -1 && this._parentContainer.geometries.splice(kk, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(kk) {
        const ek = new lk(kk, this._scene),
          ik = this.oik(void 0, !0);
        ik && ek.setIndices(ik);
        let Dk, fk = !1;
        for (Dk in this._vertexBuffers) {
          const kk = this.getVertexBuffer(Dk),
            ik = kk.getData();
          if (!ik) continue;
          const Sk = kk.isUpdatable(),
            rk = kk.getSize(),
            {
              type: Pk,
              byteOffset: mk,
              byteStride: Mk,
              normalized: Kk
            } = kk;
          fk = fk || Sk;
          let xk = this._totalVertices;
          if (kk.getIsInstanced()) {
            let kk;
            kk = ik instanceof Array ? 4 * ik.length : ik.byteLength, xk = kk / Mk
          }
          const nk = (0, wk.q)(ik, rk, Pk, mk, Mk, xk, !0),
            Uk = new bk.e(this._engine, nk, Dk, {
              updatable: Sk,
              useBytes: !1,
              stride: rk,
              size: rk,
              offset: 0,
              type: Pk,
              normalized: Kk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            });
          ek.setVerticesBuffer(Uk, xk)
        }
        for (Dk in ek._updatable = fk, ek.delayLoadState = this.delayLoadState, ek.delayLoadingFile = this.delayLoadingFile, ek._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) ek._delayInfo = ek._delayInfo || [], ek._delayInfo.push(Dk);
        return ek._boundingInfo = new mk.b(this._extend.minimum, this._extend.maximum), ek
      }
      serialize() {
        const kk = {};
        return kk.id = this.id, kk.uniqueId = this.uniqueId, kk.updatable = this._updatable, xk.c && xk.c.HasTags(this) && (kk.tags = xk.c.GetTags(this)), kk
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
        return this.isVerticesDataPresent(bk.e.PositionKind) && (kk.positions = this._toNumberArray(this.getVerticesData(bk.e.PositionKind)), this.isVertexBufferUpdatable(bk.e.PositionKind) && (kk.positionsUpdatable = !0)), this.isVerticesDataPresent(bk.e.NormalKind) && (kk.normals = this._toNumberArray(this.getVerticesData(bk.e.NormalKind)), this.isVertexBufferUpdatable(bk.e.NormalKind) && (kk.normalsUpdatable = !0)), this.isVerticesDataPresent(bk.e.TangentKind) && (kk.tangents = this._toNumberArray(this.getVerticesData(bk.e.TangentKind)), this.isVertexBufferUpdatable(bk.e.TangentKind) && (kk.tangentsUpdatable = !0)), this.isVerticesDataPresent(bk.e.UVKind) && (kk.uvs = this._toNumberArray(this.getVerticesData(bk.e.UVKind)), this.isVertexBufferUpdatable(bk.e.UVKind) && (kk.uvsUpdatable = !0)), this.isVerticesDataPresent(bk.e.UV2Kind) && (kk.uvs2 = this._toNumberArray(this.getVerticesData(bk.e.UV2Kind)), this.isVertexBufferUpdatable(bk.e.UV2Kind) && (kk.uvs2Updatable = !0)), this.isVerticesDataPresent(bk.e.UV3Kind) && (kk.uvs3 = this._toNumberArray(this.getVerticesData(bk.e.UV3Kind)), this.isVertexBufferUpdatable(bk.e.UV3Kind) && (kk.uvs3Updatable = !0)), this.isVerticesDataPresent(bk.e.UV4Kind) && (kk.uvs4 = this._toNumberArray(this.getVerticesData(bk.e.UV4Kind)), this.isVertexBufferUpdatable(bk.e.UV4Kind) && (kk.uvs4Updatable = !0)), this.isVerticesDataPresent(bk.e.UV5Kind) && (kk.uvs5 = this._toNumberArray(this.getVerticesData(bk.e.UV5Kind)), this.isVertexBufferUpdatable(bk.e.UV5Kind) && (kk.uvs5Updatable = !0)), this.isVerticesDataPresent(bk.e.UV6Kind) && (kk.uvs6 = this._toNumberArray(this.getVerticesData(bk.e.UV6Kind)), this.isVertexBufferUpdatable(bk.e.UV6Kind) && (kk.uvs6Updatable = !0)), this.isVerticesDataPresent(bk.e.ColorKind) && (kk.colors = this._toNumberArray(this.getVerticesData(bk.e.ColorKind)), this.isVertexBufferUpdatable(bk.e.ColorKind) && (kk.colorsUpdatable = !0)), this.isVerticesDataPresent(bk.e.MatricesIndicesKind) && (kk.matricesIndices = this._toNumberArray(this.getVerticesData(bk.e.MatricesIndicesKind)), kk.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(bk.e.MatricesIndicesKind) && (kk.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(bk.e.MatricesWeightsKind) && (kk.matricesWeights = this._toNumberArray(this.getVerticesData(bk.e.MatricesWeightsKind)), this.isVertexBufferUpdatable(bk.e.MatricesWeightsKind) && (kk.matricesWeightsUpdatable = !0)), kk.indices = this._toNumberArray(this.oik()), kk
      }
      static ExtractFromMesh(kk, ek) {
        const ik = kk._geometry;
        return ik ? ik.copy(ek) : null
      }
      static RandomId() {
        return Mk.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(kk, ek) {
        for (let ik = 0; ik < ek.geometries.length; ik++)
          if (ek.geometries[ik]._loadedUniqueId === kk) return ek.geometries[ik];
        return null
      }
      static _ImportGeometry(kk, ek) {
        const ik = ek.XF(),
          Dk = kk.geometryUniqueId,
          Sk = kk.geometryId;
        if (Dk || Sk) {
          const kk = Dk ? this._GetGeometryByLoadedUniqueId(Dk, ik) : ik.getGeometryById(Sk);
          kk && kk.applyToMesh(ek)
        } else if (kk instanceof ArrayBuffer) {
          const ik = ek._binaryInfo;
          if (ik.positionsAttrDesc && ik.positionsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.positionsAttrDesc.offset, ik.positionsAttrDesc.count);
            ek.setVerticesData(bk.e.PositionKind, Dk, !1)
          }
          if (ik.normalsAttrDesc && ik.normalsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.normalsAttrDesc.offset, ik.normalsAttrDesc.count);
            ek.setVerticesData(bk.e.NormalKind, Dk, !1)
          }
          if (ik.tangetsAttrDesc && ik.tangetsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.tangetsAttrDesc.offset, ik.tangetsAttrDesc.count);
            ek.setVerticesData(bk.e.TangentKind, Dk, !1)
          }
          if (ik.uvsAttrDesc && ik.uvsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvsAttrDesc.offset, ik.uvsAttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UVKind, Dk, !1)
          }
          if (ik.uvs2AttrDesc && ik.uvs2AttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvs2AttrDesc.offset, ik.uvs2AttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UV2Kind, Dk, !1)
          }
          if (ik.uvs3AttrDesc && ik.uvs3AttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvs3AttrDesc.offset, ik.uvs3AttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UV3Kind, Dk, !1)
          }
          if (ik.uvs4AttrDesc && ik.uvs4AttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvs4AttrDesc.offset, ik.uvs4AttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UV4Kind, Dk, !1)
          }
          if (ik.uvs5AttrDesc && ik.uvs5AttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvs5AttrDesc.offset, ik.uvs5AttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UV5Kind, Dk, !1)
          }
          if (ik.uvs6AttrDesc && ik.uvs6AttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.uvs6AttrDesc.offset, ik.uvs6AttrDesc.count);
            if (Hk.e)
              for (let kk = 1; kk < Dk.length; kk += 2) Dk[kk] = 1 - Dk[kk];
            ek.setVerticesData(bk.e.UV6Kind, Dk, !1)
          }
          if (ik.colorsAttrDesc && ik.colorsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.colorsAttrDesc.offset, ik.colorsAttrDesc.count);
            ek.setVerticesData(bk.e.ColorKind, Dk, !1, ik.colorsAttrDesc.stride)
          }
          if (ik.matricesIndicesAttrDesc && ik.matricesIndicesAttrDesc.count > 0) {
            const Dk = new Int32Array(kk, ik.matricesIndicesAttrDesc.offset, ik.matricesIndicesAttrDesc.count),
              fk = [];
            for (let kk = 0; kk < Dk.length; kk++) {
              const ek = Dk[kk];
              fk.push(255 & ek), fk.push((65280 & ek) >> 8), fk.push((16711680 & ek) >> 16), fk.push(ek >> 24 & 255)
            }
            ek.setVerticesData(bk.e.MatricesIndicesKind, fk, !1)
          }
          if (ik.matricesIndicesExtraAttrDesc && ik.matricesIndicesExtraAttrDesc.count > 0) {
            const Dk = new Int32Array(kk, ik.matricesIndicesExtraAttrDesc.offset, ik.matricesIndicesExtraAttrDesc.count),
              fk = [];
            for (let kk = 0; kk < Dk.length; kk++) {
              const ek = Dk[kk];
              fk.push(255 & ek), fk.push((65280 & ek) >> 8), fk.push((16711680 & ek) >> 16), fk.push(ek >> 24 & 255)
            }
            ek.setVerticesData(bk.e.MatricesIndicesExtraKind, fk, !1)
          }
          if (ik.matricesWeightsAttrDesc && ik.matricesWeightsAttrDesc.count > 0) {
            const Dk = new Float32Array(kk, ik.matricesWeightsAttrDesc.offset, ik.matricesWeightsAttrDesc.count);
            ek.setVerticesData(bk.e.MatricesWeightsKind, Dk, !1)
          }
          if (ik.indicesAttrDesc && ik.indicesAttrDesc.count > 0) {
            const Dk = new Int32Array(kk, ik.indicesAttrDesc.offset, ik.indicesAttrDesc.count);
            ek.setIndices(Dk, null)
          }
          if (ik.subMeshesAttrDesc && ik.subMeshesAttrDesc.count > 0) {
            const Dk = new Int32Array(kk, ik.subMeshesAttrDesc.offset, 5 * ik.subMeshesAttrDesc.count);
            ek.TY = [];
            for (let kk = 0; kk < ik.subMeshesAttrDesc.count; kk++) {
              const ik = Dk[5 * kk + 0],
                fk = Dk[5 * kk + 1],
                Sk = Dk[5 * kk + 2],
                bk = Dk[5 * kk + 3],
                Pk = Dk[5 * kk + 4];
              rk.e.AddToMesh(ik, fk, Sk, bk, Pk, ek)
            }
          }
        } else if (kk.positions && kk.normals && kk.indices) {
          if (ek.setVerticesData(bk.e.PositionKind, kk.positions, kk.positions._updatable || kk.positionsUpdatable), ek.setVerticesData(bk.e.NormalKind, kk.normals, kk.normals._updatable || kk.normalsUpdatable), kk.tangents && ek.setVerticesData(bk.e.TangentKind, kk.tangents, kk.tangents._updatable || kk.tangentsUpdatable), kk.uvs && ek.setVerticesData(bk.e.UVKind, kk.uvs, kk.uvs._updatable || kk.uvsUpdatable), kk.uvs2 && ek.setVerticesData(bk.e.UV2Kind, kk.uvs2, kk.uvs2._updatable || kk.uvs2Updatable), kk.uvs3 && ek.setVerticesData(bk.e.UV3Kind, kk.uvs3, kk.uvs3._updatable || kk.uvs3Updatable), kk.uvs4 && ek.setVerticesData(bk.e.UV4Kind, kk.uvs4, kk.uvs4._updatable || kk.uvs4Updatable), kk.uvs5 && ek.setVerticesData(bk.e.UV5Kind, kk.uvs5, kk.uvs5._updatable || kk.uvs5Updatable), kk.uvs6 && ek.setVerticesData(bk.e.UV6Kind, kk.uvs6, kk.uvs6._updatable || kk.uvs6Updatable), kk.colors && ek.setVerticesData(bk.e.ColorKind, fk.f.CheckColors4(kk.colors, kk.positions.length / 3), kk.colors._updatable), kk.matricesIndices)
            if (kk.matricesIndices._isExpanded || kk.matricesIndicesExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExpanded, ek.setVerticesData(bk.e.MatricesIndicesKind, kk.matricesIndices, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable);
            else {
              const ik = [];
              for (let ek = 0; ek < kk.matricesIndices.length; ek++) {
                const Dk = kk.matricesIndices[ek];
                ik.push(255 & Dk), ik.push((65280 & Dk) >> 8), ik.push((16711680 & Dk) >> 16), ik.push(Dk >> 24 & 255)
              }
              ek.setVerticesData(bk.e.MatricesIndicesKind, ik, kk.matricesIndices._updatable || kk.matricesIndicesUpdatable)
            } if (kk.matricesIndicesExtra)
            if (kk.matricesIndicesExtraExpanded || kk.matricesIndicesExtra._isExpanded) delete kk.matricesIndices._isExpanded, delete kk.matricesIndicesExtraExpanded, ek.setVerticesData(bk.e.MatricesIndicesExtraKind, kk.matricesIndicesExtra, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable);
            else {
              const ik = [];
              for (let ek = 0; ek < kk.matricesIndicesExtra.length; ek++) {
                const Dk = kk.matricesIndicesExtra[ek];
                ik.push(255 & Dk), ik.push((65280 & Dk) >> 8), ik.push((16711680 & Dk) >> 16), ik.push(Dk >> 24 & 255)
              }
              ek.setVerticesData(bk.e.MatricesIndicesExtraKind, ik, kk.matricesIndicesExtra._updatable || kk.matricesIndicesExtraUpdatable)
            } kk.matricesWeights && (lk._CleanMatricesWeights(kk, ek), ek.setVerticesData(bk.e.MatricesWeightsKind, kk.matricesWeights, kk.matricesWeights._updatable)), kk.matricesWeightsExtra && ek.setVerticesData(bk.e.MatricesWeightsExtraKind, kk.matricesWeightsExtra, kk.matricesWeights._updatable), ek.setIndices(kk.indices, null)
        }
        if (kk.TY) {
          ek.TY = [];
          for (let ik = 0; ik < kk.TY.length; ik++) {
            const Dk = kk.TY[ik];
            rk.e.AddToMesh(Dk.materialIndex, Dk.verticesStart, Dk.verticesCount, Dk.indexStart, Dk.indexCount, ek)
          }
        }
        ek._shouldGenerateFlatShading && (ek.convertToFlatShadedMesh(), ek._shouldGenerateFlatShading = !1), ek.computeWorldMatrix(!0), ik.onMeshImportedObservable.notifyObservers(ek)
      }
      static _CleanMatricesWeights(kk, ek) {
        const ik = .001;
        if (!Pk.c.CleanBoneMatrixWeights) return;
        let Dk;
        if (!(kk.skeletonId > -1)) return;
        {
          const ik = ek.XF().getLastSkeletonById(kk.skeletonId);
          if (!ik) return;
          Dk = ik.bones.length
        }
        const fk = ek.getVerticesData(bk.e.MatricesIndicesKind),
          Sk = ek.getVerticesData(bk.e.MatricesIndicesExtraKind),
          rk = kk.matricesWeights,
          mk = kk.matricesWeightsExtra,
          Mk = kk.numBoneInfluencer,
          Kk = rk.length;
        for (let bk = 0; bk < Kk; bk += 4) {
          let kk = 0,
            ek = -1;
          for (let Dk = 0; Dk < 4; Dk++) {
            const fk = rk[bk + Dk];
            kk += fk, fk < ik && ek < 0 && (ek = Dk)
          }
          if (mk)
            for (let Dk = 0; Dk < 4; Dk++) {
              const fk = mk[bk + Dk];
              kk += fk, fk < ik && ek < 0 && (ek = Dk + 4)
            }
          if ((ek < 0 || ek > Mk - 1) && (ek = Mk - 1), kk > ik) {
            const ek = 1 / kk;
            for (let kk = 0; kk < 4; kk++) rk[bk + kk] *= ek;
            if (mk)
              for (let kk = 0; kk < 4; kk++) mk[bk + kk] *= ek
          } else ek >= 4 ? (mk[bk + ek - 4] = 1 - kk, Sk[bk + ek - 4] = Dk) : (rk[bk + ek] = 1 - kk, fk[bk + ek] = Dk)
        }
        ek.setVerticesData(bk.e.MatricesIndicesKind, fk), kk.matricesWeightsExtra && ek.setVerticesData(bk.e.MatricesIndicesExtraKind, Sk)
      }
      static Parse(kk, ek, ik) {
        const fk = new lk(kk.id, ek, void 0, kk.updatable);
        return fk._loadedUniqueId = kk.uniqueId, xk.c && xk.c.AddTagsTo(fk, kk.tags), kk.delayLoadingFile ? (fk.delayLoadState = 4, fk.delayLoadingFile = ik + kk.delayLoadingFile, fk._boundingInfo = new mk.b(Dk.o.FromArray(kk.boundingBoxMinimum), Dk.o.FromArray(kk.boundingBoxMaximum)), fk._delayInfo = [], kk.hasUVs && fk._delayInfo.push(bk.e.UVKind), kk.hasUVs2 && fk._delayInfo.push(bk.e.UV2Kind), kk.hasUVs3 && fk._delayInfo.push(bk.e.UV3Kind), kk.hasUVs4 && fk._delayInfo.push(bk.e.UV4Kind), kk.hasUVs5 && fk._delayInfo.push(bk.e.UV5Kind), kk.hasUVs6 && fk._delayInfo.push(bk.e.UV6Kind), kk.hasColors && fk._delayInfo.push(bk.e.ColorKind), kk.hasMatricesIndices && fk._delayInfo.push(bk.e.MatricesIndicesKind), kk.hasMatricesWeights && fk._delayInfo.push(bk.e.MatricesWeightsKind), fk._delayLoadingFunction = Sk.b.ImportVertexData) : Sk.b.ImportVertexData(kk, fk), ek.pushGeometry(fk, !0), fk
      }
    }
  },
  40045: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      c: () => Uk
    });
    var Dk = ik(36698),
      fk = ik(38272),
      Sk = ik(40016),
      bk = ik(39997),
      rk = ik(38265),
      Pk = ik(40018),
      mk = ik(39708),
      Mk = ik(36734);
    class Kk extends Sk.c {
      constructor(kk, ek) {
        super(kk, ek.XF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, ek.N_(this), this._sourceMesh = ek, this._unIndexed = ek._unIndexed, this.position.Fs(ek.position), this.rotation.Fs(ek.rotation), this.wi.Fs(ek.wi), ek.rotationQuaternion && (this.rotationQuaternion = ek.rotationQuaternion.clone()), this.animations = ek.animations.slice();
        for (const ik of ek.getAnimationRanges()) null != ik && this.createAnimationRange(ik.name, ik.from, ik.to);
        if (this.infiniteDistance = ek.infiniteDistance, this.setPivotMatrix(ek.getPivotMatrix()), ek.skeleton || ek.morphTargetManager || !ek.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const kk = ek.hq();
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
        this._sourceMesh?.receiveShadows !== kk && fk.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(kk) {
        this._sourceMesh?.material !== kk && fk.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(kk) {
        this._sourceMesh?.visibility !== kk && fk.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(kk) {
        this._sourceMesh?.skeleton !== kk && fk.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(kk) {
        this._sourceMesh && kk !== this._sourceMesh.renderingGroupId && fk.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(kk) {
        this._sourceMesh && kk !== this._sourceMesh.meshBlendingTag && fk.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get aDk() {
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
      getVerticesData(kk, ek, ik) {
        return this._sourceMesh.getVerticesData(kk, ek, ik)
      }
      copyVerticesData(kk, ek) {
        this._sourceMesh.copyVerticesData(kk, ek)
      }
      getVertexBuffer(kk, ek) {
        return this._sourceMesh.getVertexBuffer(kk, ek)
      }
      setVerticesData(kk, ek, ik, Dk) {
        return this.aDk && this.aDk.setVerticesData(kk, ek, ik, Dk), this.aDk
      }
      updateVerticesData(kk, ek, ik, Dk) {
        return this.aDk && this.aDk.updateVerticesData(kk, ek, ik, Dk), this.aDk
      }
      setIndices(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.aDk && this.aDk.setIndices(kk, ek), this.aDk
      }
      isVerticesDataPresent(kk) {
        return this._sourceMesh.isVerticesDataPresent(kk)
      }
      oik() {
        return this._sourceMesh.oik()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let kk, ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.hq().isLocked) return this;
        kk = "object" === typeof ek ? ek : {
          applySkeleton: ek,
          applyMorph: ik
        };
        const Dk = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(kk, null, mk.e.PositionKind), Dk), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(kk, ek) {
        if (super._activate(kk, ek), this._sourceMesh.TY || fk.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, kk), ek) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Pk.i.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Dk.b);
          const kk = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Dk.j.eH[7].Fs(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Fs(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Fs(Dk.j.eH[7]), this._currentLOD._masterMesh = kk, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get JF() {
        return !0
      }
      getLOD(kk) {
        if (!kk) return this;
        const ek = this.aDk.getLODLevels();
        if (ek && 0 !== ek.length) {
          const ek = this.hq();
          this._currentLOD = this.aDk.getLOD(kk, ek.HDk)
        } else this._currentLOD = this.aDk;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(kk) {
        return this.aDk._preActivateForIntermediateRendering(kk)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.TY)
          for (let kk = 0; kk < this._sourceMesh.TY.length; kk++) this._sourceMesh.TY[kk].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.hq().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(kk);
        if (rk.c.DeepCopy(this, Dk, ["name", "TY", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "aDk", "JF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "hDk", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "pbk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), ek && (Dk.parent = ek), !ik)
          for (let fk = 0; fk < this.XF().meshes.length; fk++) {
            const kk = this.XF().meshes[fk];
            kk.parent === this && kk.clone(kk.name, Dk)
          }
        return Dk.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Dk), Dk
      }
      dispose(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.J_(this), super.dispose(kk, ek)
      }
      _serializeAsParent(kk) {
        super._serializeAsParent(kk), kk.parentId = this._sourceMesh.uniqueId, kk.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0, ek && ek.newSourcedMesh);
        Dk && ik && ik(this, Dk);
        for (const fk of this.getChildTransformNodes(!0)) fk.instantiateHierarchy(Dk, ek, ik);
        return Dk
      }
    }
    let xk = !1;

    function nk(kk, ek, ik, Dk, fk) {
      for (let Sk = 0; Sk < ek.length; Sk++) {
        const bk = kk[ek[Sk]] ?? 0,
          rk = fk + ik[Sk];
        bk.toArray ? bk.toArray(Dk, rk) : bk.copyToArray ? bk.copyToArray(Dk, rk) : Dk[rk] = bk
      }
    }

    function Uk() {
      xk || (xk = !0, bk.e._instancedMeshFactory = (kk, ek) => {
        const ik = new Kk(kk, ek);
        if (ek.Iq) {
          ik.Iq = {};
          for (const kk in ek.Iq) ik.Iq[kk] = ek.Iq[kk]
        }
        return ik
      }, bk.e.prototype.uq = function(kk, ek) {
        if (!this.Iq) {
          this.Iq = {};
          for (const kk of this.instances) kk.Iq = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.JU().getCaps().vertexArrayObject ? {} : void 0
        }), this.Iq[kk] = null, this._userInstancedBuffersStorage.strides[kk] = ek;
        const ik = this._userInstancedBuffersStorage;
        ik.interleavedKinds = [], ik.interleavedOffsets = [], ik.interleavedRowStride = 0;
        for (const Dk in ik.strides) ik.interleavedKinds.push(Dk), ik.interleavedOffsets.push(ik.interleavedRowStride), ik.interleavedRowStride += ik.strides[Dk];
        ik.interleavedData = new Float32Array(32 * ik.interleavedRowStride);
        for (const Dk in ik.interleavedBuffers) ik.interleavedBuffers[Dk].buffer.dispose();
        ik.interleavedBuffers = {}, ik.vertexBuffers[kk] = null;
        for (const Dk of this.instances) Dk.Iq[kk] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, bk.e.prototype._processInstancedBuffers = function(kk, ek) {
        const ik = this._userInstancedBuffersStorage,
          Dk = ik.interleavedRowStride;
        if (!Dk) return;
        const fk = kk ? kk.length : 0,
          Sk = (fk + 1) * Dk;
        let bk = ik.interleavedData;
        if (bk.length < Sk) {
          let kk = bk.length;
          for (; kk < Sk;) kk *= 2;
          bk = ik.interleavedData = new Float32Array(kk)
        }
        const rk = ik.interleavedKinds,
          Pk = ik.interleavedOffsets;
        let Mk = 0;
        ek && (nk(this.Iq, rk, Pk, bk, Mk), Mk += Dk);
        for (let mk = 0; mk < fk; mk++) nk(kk[mk].Iq, rk, Pk, bk, Mk), Mk += Dk;
        let Kk = "shared",
          xk = ik.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (Kk = this._instanceDataStorage.engine.currentRenderPassId, ik.renderPasses || (ik.renderPasses = {}), ik.renderPasses[Kk] || (ik.renderPasses[Kk] = {}), xk = ik.renderPasses[Kk]);
        const Uk = ik.interleavedBuffers[Kk];
        let Hk = !Uk || Uk.data !== bk;
        for (let mk = 0; !Hk && mk < rk.length; mk++) Hk = !xk[rk[mk]];
        if (!Hk) return void Uk.buffer.updateDirectly(bk, 0);
        Uk?.buffer.dispose();
        const wk = new mk.b(this.JU(), bk, !0, Dk, !1, !0);
        for (let mk = 0; mk < rk.length; mk++) {
          const kk = rk[mk],
            ek = wk.createVertexBuffer(kk, Pk[mk], ik.strides[kk]);
          ek.hashCode += ek.byteOffset * 2 ** 24, xk[kk] = ek
        }
        ik.interleavedBuffers[Kk] = {
          buffer: wk,
          data: bk
        }, this._invalidateInstanceVertexArrayObject()
      }, bk.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const kk in this._userInstancedBuffersStorage.vertexArrayObjects) this.JU().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[kk]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, bk.e.prototype._disposeInstanceSpecificData = function() {
        for (const ek in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[ek].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const ek in this.Iq) this._userInstancedBuffersStorage.vertexBuffers[ek] && this._userInstancedBuffersStorage.vertexBuffers[ek].dispose();
        const kk = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (kk) {
          for (const ek in kk) kk[ek].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.Iq = {}
      }, (0, Mk.h)("BABYLON.InstancedMesh", Kk))
    }
  },
  39997: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Rk,
      f: () => ke,
      j: () => ck
    });
    var Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = ik(36726),
      pk = ik(39662),
      yk = ik(39607),
      Yk = ik(38265),
      Lk = ik(39592),
      Ck = ik(39999),
      Ak = ik(39782),
      jk = ik(36698),
      sk = ik(36874),
      dk = ik(39787),
      Vk = ik(39708),
      Fk = ik(40001),
      uk = ik(40010),
      qk = ik(40016),
      Ik = ik(39870),
      zk = ik(39861),
      Qk = ik(39971),
      vk = ik(40020),
      Ek = ik(40012),
      hk = ik(39585),
      ak = ik(38272),
      Wk = ik(36734),
      tk = ik(39447),
      Xk = ik(39736);
    class Bk {
      constructor(kk, ek) {
        this.distanceOrScreenCoverage = kk, this.mesh = ek
      }
    }
    class ck {}
    class Tk {
      constructor() {
        this.batchCache = new Ok(this), this.batchCacheReplacementModeInFrozenMode = new Ok(this), this.instancesBufferSize = 2048
      }
    }
    class Zk {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Ok {
      constructor(kk) {
        this.parent = kk, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class gk {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Gk {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Nk = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class Rk extends qk.c {
      static _GetDefaultSideOrientation(kk) {
        return kk || Rk.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== kk && (kk && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Vk.e.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Vk.e.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = kk, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new lk.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new lk.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new lk.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new lk.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new lk.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(kk) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(kk)
      }
      get hDk() {
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
      _copySource(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fk = this.XF();
        if (kk._geometry && kk._geometry.applyToMesh(this), Yk.c.DeepCopy(kk, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "hDk", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "JF", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "pbk", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = kk, fk.useClonedMeshMap && (kk._internalMeshDataInfo.meshMap || (kk._internalMeshDataInfo.meshMap = {}), kk._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = kk._originalBuilderSideOrientation, this._creationDataStorage = kk._creationDataStorage, kk._ranges) {
          const ek = kk._ranges;
          for (const kk in ek) Object.prototype.hasOwnProperty.call(ek, kk) && ek[kk] && this.createAnimationRange(kk, ek[kk].from, ek[kk].to)
        }
        if (kk.metadata && kk.metadata.clone ? this.metadata = kk.metadata.clone() : this.metadata = kk.metadata, this._internalMetadata = kk._internalMetadata, this.meshBlendingTag = kk.meshBlendingTag, Lk.c && Lk.c.HasTags(kk) && Lk.c.AddTagsTo(this, Lk.c.GetTags(kk, !0)), this.bV(kk.isEnabled(!1)), this.parent = kk.parent, this.setPivotMatrix(kk.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + kk.id, this.material = kk.material, !ek) {
          const fk = kk.getDescendants(!0);
          for (let kk = 0; kk < fk.length; kk++) {
            const Sk = fk[kk];
            Sk._isMesh ? (Nk.parent = this, Nk.doNotCloneChildren = ek, Nk.clonePhysicsImpostor = ik, Nk.cloneThinInstances = Dk, Sk.clone(this.name + "." + Sk.name, Nk)) : Sk.clone && Sk.clone(this.name + "." + Sk.name, this)
          }
        }
        if (kk.morphTargetManager && (this.morphTargetManager = kk.morphTargetManager), (0, tk.d)(fk.getPhysicsEngine)) {
          const ek = fk.getPhysicsEngine();
          if (ik && ek)
            if (1 === ek.getPluginVersion()) {
              const ik = ek.getImpostorForPhysicsObject(kk);
              ik && (this.physicsImpostor = ik.clone(this))
            } else 2 === ek.getPluginVersion() && kk.physicsBody && kk.physicsBody.clone(this)
        }
        for (let Sk = 0; Sk < fk.ZY.length; Sk++) {
          const ek = fk.ZY[Sk];
          ek.emitter === kk && ek.clone(ek.name, this)
        }
        if (this.skeleton = kk.skeleton, Dk && (kk._thinInstanceDataStorage.matrixData ? (this.i6("matrix", new Float32Array(kk._thinInstanceDataStorage.matrixData), 16, !kk._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = kk._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = kk._thinInstanceDataStorage.matrixBufferSize, kk._userThinInstanceBuffersStorage)) {
          const ek = kk._userThinInstanceBuffersStorage;
          for (const kk in ek.data) this.i6(kk, new Float32Array(ek.data[kk]), ek.strides[kk], !ek.vertexBuffers?.[kk]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[kk] = ek.sizes[kk]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(kk) {
        let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Sk = arguments.length > 4 ? arguments[4] : void 0,
          bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(kk, ik), this._internalMeshDataInfo = new Gk, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new gk, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = Rk.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ik = this.XF(), this._instanceDataStorage = new Zk, this._instanceDataStorage.engine = ik.JU(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Tk), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (kk, ek, ik) => {
          kk && ik && (this._uniformBuffer ? this.transferToEffect(ek) : ik.bindOnlyWorldMatrix(ek))
        };
        let rk = !1;
        if (Dk && void 0 === Dk._addToSceneRootNodes) {
          const kk = Dk;
          ek = kk.parent ?? null, fk = kk.source ?? null, Sk = kk.doNotCloneChildren ?? !1, bk = kk.clonePhysicsImpostor ?? !0, rk = kk.cloneThinInstances ?? !1
        } else ek = Dk;
        fk && this._copySource(fk, Sk, bk, rk), null !== ek && (this.parent = ek), this._instanceDataStorage.hardwareInstancedRendering = this.JU().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = kk => {
          kk.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new lk.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), fk && fk.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = 0 === this.getTotalVertices() || ek && ek.doNotInstantiate && (!0 === ek.doNotInstantiate || ek.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Dk.parent = kk || this.parent, Dk.position = this.position.clone(), Dk.wi = this.wi.clone(), this.rotationQuaternion ? Dk.rotationQuaternion = this.rotationQuaternion.clone() : Dk.rotation = this.rotation.clone(), ik && ik(this, Dk);
        for (const fk of this.getChildTransformNodes(!0)) "InstancedMesh" === fk.getClassName() && "Mesh" === Dk.getClassName() && fk.aDk === this ? fk.instantiateHierarchy(Dk, {
          doNotInstantiate: ek && ek.doNotInstantiate || !1,
          newSourcedMesh: Dk
        }, ik) : fk.instantiateHierarchy(Dk, ek, ik);
        return Dk
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(kk) {
        let ek = super.toString(kk);
        if (ek += ", n vertices: " + this.getTotalVertices(), ek += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ik = 0; ik < this.animations.length; ik++) ek += ", animation[0]: " + this.animations[ik].toString(kk);
        if (kk)
          if (this._geometry) {
            const kk = this.oik(),
              ik = this.getVerticesData(Vk.e.PositionKind);
            ik && kk && (ek += ", flat shading: " + (ik.length / 3 === kk.length ? "YES" : "NO"))
          } else ek += ", flat shading: UNKNOWN";
        return ek
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
        this._internalMeshDataInfo._LODLevels.sort(((ek, ik) => ek.distanceOrScreenCoverage < ik.distanceOrScreenCoverage ? kk : ek.distanceOrScreenCoverage > ik.distanceOrScreenCoverage ? -kk : 0))
      }
      addLODLevel(kk, ek) {
        if (ek && ek._masterMesh) return ak.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const ik = new Bk(kk, ek);
        return this._internalMeshDataInfo._LODLevels.push(ik), ek && (ek._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(kk) {
        const ek = this._internalMeshDataInfo;
        for (let ik = 0; ik < ek._LODLevels.length; ik++) {
          const Dk = ek._LODLevels[ik];
          if (Dk.distanceOrScreenCoverage === kk) return Dk.mesh
        }
        return null
      }
      removeLODLevel(kk) {
        const ek = this._internalMeshDataInfo;
        for (let ik = 0; ik < ek._LODLevels.length; ik++) ek._LODLevels[ik].mesh === kk && (ek._LODLevels.splice(ik, 1), kk && (kk._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(kk, ek) {
        const ik = this._internalMeshDataInfo;
        if (!ik._LODLevels || 0 === ik._LODLevels.length) return this;
        const Dk = ek || this.hq().HDk,
          fk = kk.mode === Ak.e.ORTHOGRAPHIC_CAMERA ? kk.minZ : Dk.centerWorld.subtract(kk.globalPosition).length();
        let Sk = fk,
          bk = 1;
        if (ik._useLODScreenCoverage) {
          const ek = kk.screenArea;
          let ik = Dk.radiusWorld * kk.minZ / fk;
          ik = ik * ik * Math.PI, Sk = ik / ek, bk = -1
        }
        if (bk * ik._LODLevels[ik._LODLevels.length - 1].distanceOrScreenCoverage > bk * Sk) return this.onLODLevelSelection && this.onLODLevelSelection(Sk, this, this), this;
        for (let rk = 0; rk < ik._LODLevels.length; rk++) {
          const kk = ik._LODLevels[rk];
          if (bk * kk.distanceOrScreenCoverage < bk * Sk) {
            if (kk.mesh) {
              if (4 === kk.mesh.delayLoadState) return kk.mesh._checkDelayState(), this;
              if (2 === kk.mesh.delayLoadState) return this;
              kk.mesh._preActivate(), kk.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Sk, this, kk.mesh), kk.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Sk, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(kk, ek, ik, Dk) {
        if (!this._geometry) return null;
        let fk = Dk ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[kk]?.getFloatData(this.instances.length + 1, ik || ek && 1 !== this._geometry.meshes.length);
        return fk || (fk = this._geometry.getVerticesData(kk, ek, ik)), fk
      }
      copyVerticesData(kk, ek) {
        this._geometry && this._geometry.copyVerticesData(kk, ek)
      }
      getVertexBuffer(kk, ek) {
        return this._geometry ? (ek ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[kk]) ?? this._geometry.getVertexBuffer(kk) : null
      }
      isVerticesDataPresent(kk, ek) {
        return this._geometry ? !ek && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[kk] || this._geometry.isVerticesDataPresent(kk) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(kk)
      }
      isVertexBufferUpdatable(kk, ek) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(kk);
        if (!ek) {
          const ek = this._userInstancedBuffersStorage?.vertexBuffers[kk];
          if (ek) return ek.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(kk)
      }
      getVerticesDataKinds(kk) {
        if (!this._geometry) {
          const kk = [];
          if (this._delayInfo)
            for (const ek of this._delayInfo) kk.push(ek);
          return kk
        }
        const ek = this._geometry.getVerticesDataKinds();
        if (!kk && this._userInstancedBuffersStorage)
          for (const ik in this._userInstancedBuffersStorage.vertexBuffers) - 1 === ek.indexOf(ik) && ek.push(ik);
        return ek
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      oik(kk, ek) {
        return this._geometry ? this._geometry.oik(kk, ek) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(kk)) return !1;
        if (!this.TY || 0 === this.TY.length) return !0;
        if (!kk) return !0;
        const ik = this.JU(),
          Dk = this.XF(),
          fk = ek || ik.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Sk = this.material || Dk.defaultMaterial;
        if (Sk)
          if (Sk._storeEffectOnSubMeshes)
            for (const rk of this.TY) {
              const kk = rk.fH();
              if (kk)
                if (kk._storeEffectOnSubMeshes) {
                  if (!kk.isReadyForSubMesh(this, rk, fk)) return !1
                } else if (!kk.isReady(this, fk)) return !1
            } else if (!Sk.isReady(this, fk)) return !1;
        const bk = ik.currentRenderPassId;
        for (const rk of this.lightSources) {
          const kk = rk.getShadowGenerators();
          if (!kk) continue;
          const ek = kk.values();
          for (let Dk = ek.next(); !0 !== Dk.done; Dk = ek.next()) {
            const kk = Dk.value;
            if (kk && (!kk.getShadowMap()?.renderList || kk.getShadowMap()?.renderList && -1 !== kk.getShadowMap()?.renderList?.indexOf(this))) {
              const ek = kk.getShadowMap().renderPassIds ?? [ik.currentRenderPassId];
              for (let Dk = 0; Dk < ek.length; ++Dk) {
                ik.currentRenderPassId = ek[Dk];
                for (const ek of this.TY)
                  if (!kk.isReady(ek, fk, ek.fH()?.needAlphaBlendingForMesh(this) ?? !1)) return ik.currentRenderPassId = bk, !1
              }
              ik.currentRenderPassId = bk
            }
          }
        }
        for (const rk of this._internalMeshDataInfo._LODLevels)
          if (rk.mesh && !rk.mesh.isReady(fk)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      SH() {
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
        let ek = this._instanceDataStorage.renderPasses[kk];
        return ek || (ek = new Tk, this._instanceDataStorage.renderPasses[kk] = ek), ek
      }
      _preActivate() {
        const kk = this._internalMeshDataInfo,
          ek = this.XF().getRenderId();
        return kk._preActivateId === ek || (kk._preActivateId = ek, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(kk) {
        const ek = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ek.visibleInstances && (ek.visibleInstances.intermediateDefaultRenderId = kk), this
      }
      _registerInstanceForRenderId(kk, ek) {
        const ik = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ik.visibleInstances || (ik.visibleInstances = {
          defaultRenderId: ek,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ik.visibleInstances[ek] || (void 0 === ik.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ik.visibleInstances[ik.previousRenderId], ik.previousRenderId = ek, ik.visibleInstances[ek] = new Array), ik.visibleInstances[ek].push(kk), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.DH || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let kk, ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.hq().isLocked) return this;
        kk = "object" === typeof ek ? ek : {
          applySkeleton: ek,
          applyMorph: ik
        };
        const Dk = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(kk, null, Vk.e.PositionKind), Dk), this
      }
      _createGlobalSubMesh(kk) {
        const ek = this.getTotalVertices();
        if (!ek || !this.oik()) return null;
        if (this.TY && this.TY.length > 0) {
          const ik = this.oik();
          if (!ik) return null;
          const Dk = ik.length;
          let fk = !1;
          if (kk) fk = !0;
          else
            for (const kk of this.TY) {
              if (kk.indexStart + kk.indexCount > Dk) {
                fk = !0;
                break
              }
              if (kk.verticesStart + kk.verticesCount > ek) {
                fk = !0;
                break
              }
            }
          if (!fk) return this.TY[0]
        }
        return this.releaseSubMeshes(), new Ik.e(0, 0, ek, 0, this.getTotalIndices() || (this.isUnIndexed ? ek : 0), this)
      }
      subdivide(kk) {
        if (kk < 1) return;
        const ek = this.getTotalIndices();
        let ik = ek / kk | 0,
          Dk = 0;
        for (; ik % 3 !== 0;) ik++;
        this.releaseSubMeshes();
        for (let fk = 0; fk < kk && !(Dk >= ek); fk++) Ik.e.CreateFromIndices(0, Dk, Dk + ik >= ek ? ek - Dk : ik, this, void 0, !1), Dk += ik;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(kk, ek, ik, Dk);
        else {
          const Dk = new Fk.b;
          Dk.set(ek, kk);
          const fk = this.XF();
          new uk.e(uk.e.RandomId(), fk, Dk, ik, this)
        }
        return this
      }
      removeVerticesData(kk) {
        this._geometry && this._geometry.removeVerticesData(kk)
      }
      markVerticesDataAsUpdatable(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ik = this.getVertexBuffer(kk);
        ik && ik.isUpdatable() !== ek && this.setVerticesData(kk, this.getVerticesData(kk), ek)
      }
      setVerticesBuffer(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = uk.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(kk, ik, ek), this
      }
      updateVerticesData(kk, ek, ik, Dk) {
        return this._geometry ? (Dk ? (this.makeGeometryUnique(), this.updateVerticesData(kk, ek, ik, !1)) : this._geometry.updateVerticesData(kk, ek, ik), this) : this
      }
      updateMeshPositions(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ik = this.getVerticesData(Vk.e.PositionKind);
        if (!ik) return this;
        if (kk(ik), this.updateVerticesData(Vk.e.PositionKind, ik, !1, !1), ek) {
          const kk = this.oik(),
            ek = this.getVerticesData(Vk.e.NormalKind);
          if (!ek) return this;
          Fk.b.ComputeNormals(ik, kk, ek), this.updateVerticesData(Vk.e.NormalKind, ek, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const kk = this._geometry,
          ek = this._geometry.copy(uk.e.RandomId());
        return kk.releaseForMesh(this, !0), ek.applyToMesh(this), this
      }
      setIndexBuffer(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          fk = this._geometry;
        fk || (fk = new uk.e(uk.e.RandomId(), this.XF(), void 0, void 0, this)), fk.setIndexBuffer(kk, ek, ik, Dk)
      }
      setIndices(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(kk, ek, ik, Dk);
        else {
          const Dk = new Fk.b;
          Dk.indices = kk;
          const fk = this.XF();
          new uk.e(uk.e.RandomId(), fk, Dk, ik, this, ek)
        }
        return this
      }
      updateIndices(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(kk, ek, ik), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(kk, ek, ik) {
        let Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const fk = this.XF().JU();
        let Sk;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ik) === zk.e.WireFrameFillMode) Sk = kk._getLinesIndexBuffer(this.oik(), fk);
          else Sk = null;
        else switch (this._getRenderingFillMode(ik)) {
          case zk.e.PointFillMode:
            Sk = null;
            break;
          case zk.e.WireFrameFillMode:
            Sk = kk._getLinesIndexBuffer(this.oik(), fk);
            break;
          default:
          case zk.e.TriangleFillMode:
            Sk = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(ek, Sk, Dk)
      }
      _bindDirect(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(kk), ik && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const kk = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const ek in kk) this._userInstancedBuffersStorage.vertexBuffers[ek] = kk[ek]
          }
          this._geometry._bind(kk, ek, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(kk, ek);
        return this
      }
      _draw(kk, ek, ik) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Dk = this.XF().JU(),
          fk = Dk._currentMaterialContext,
          Sk = fk && fk.useVertexPulling;
        return this._unIndexed && ek !== zk.e.WireFrameFillMode || ek == zk.e.PointFillMode ? Dk.drawArraysType(ek, kk.verticesStart, kk.verticesCount, this.forcedInstanceCount || ik) : ek == zk.e.WireFrameFillMode ? Dk.drawElementsType(ek, 0, kk._linesIndexCount, this.forcedInstanceCount || ik) : Sk ? Dk.drawArraysType(ek, kk.indexStart, kk.indexCount, this.forcedInstanceCount || ik) : Dk.drawElementsType(ek, kk.indexStart, kk.indexCount, this.forcedInstanceCount || ik), this
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
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (ek) return ik.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[kk] = !1, ik.batchCacheReplacementModeInFrozenMode.renderSelf[kk] = !0, ik.batchCacheReplacementModeInFrozenMode;
          if (ik.previousBatch) return ik.previousBatch
        }
        const Dk = this.XF(),
          fk = Dk._isInIntermediateRendering(),
          Sk = fk ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          bk = ik.batchCache;
        if (bk.mustReturn = !1, bk.renderSelf[kk] = ek || !Sk && this.isEnabled() && this.isVisible, bk.visibleInstances[kk] = null, ik.visibleInstances && !ek) {
          const ek = ik.visibleInstances,
            Sk = Dk.getRenderId(),
            rk = fk ? ek.intermediateDefaultRenderId : ek.defaultRenderId;
          bk.visibleInstances[kk] = ek[Sk], !bk.visibleInstances[kk] && rk && (bk.visibleInstances[kk] = ek[rk])
        }
        return bk.hardwareInstancedRendering[kk] = !ek && this._instanceDataStorage.hardwareInstancedRendering && null !== bk.visibleInstances[kk] && void 0 !== bk.visibleInstances[kk], ik.previousBatch = bk, bk
      }
      _updateInstancedBuffers(kk, ek, ik, Dk, fk, Sk) {
        const bk = ek.visibleInstances[kk._id],
          rk = bk ? bk.length : 0,
          Pk = ek.parent,
          mk = this._instanceDataStorage;
        let Mk = Pk.instancesBuffer,
          Kk = Pk.instancesPreviousBuffer,
          xk = 0,
          nk = 0;
        const Uk = ek.renderSelf[kk._id],
          Hk = this._scene.floatingOriginOffset,
          wk = !Mk || ik !== Pk.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Pk.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || mk.isFrozen && !wk) nk = (Uk ? 1 : 0) + rk;
        else {
          const ek = this.getWorldMatrix();
          if (Uk) {
            this._scene.needsPreviousWorldMatrices && (mk.masterMeshPreviousWorldMatrix ? (mk.masterMeshPreviousWorldMatrix.copyToArray(Pk.instancesPreviousData, xk), mk.masterMeshPreviousWorldMatrix.Fs(ek)) : (mk.masterMeshPreviousWorldMatrix = ek.clone(), mk.masterMeshPreviousWorldMatrix.copyToArray(Pk.instancesPreviousData, xk))), ek.copyToArray(Pk.instancesData, xk);
            const kk = ek.Tik();
            Pk.instancesData[xk + 12] = kk[12] - Hk.x, Pk.instancesData[xk + 13] = kk[13] - Hk.y, Pk.instancesData[xk + 14] = kk[14] - Hk.z, xk += 16, nk++
          }
          if (bk) {
            if (Rk.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && kk.fH()?.needAlphaBlendingForMesh(kk.getRenderingMesh())) {
              const kk = this._scene.activeCamera.globalPosition;
              for (let ek = 0; ek < bk.length; ek++) {
                const ik = bk[ek];
                ik._distanceToCamera = jk.o.Distance(ik.hq().HDk.centerWorld, kk)
              }
              bk.sort(((kk, ek) => kk._distanceToCamera > ek._distanceToCamera ? -1 : kk._distanceToCamera < ek._distanceToCamera ? 1 : 0))
            }
            for (let kk = 0; kk < bk.length; kk++) {
              const ek = bk[kk],
                ik = ek.getWorldMatrix();
              ik.copyToArray(Pk.instancesData, xk), this._scene.needsPreviousWorldMatrices && (ek._previousWorldMatrix ? (ek._previousWorldMatrix.copyToArray(Pk.instancesPreviousData, xk), ek._previousWorldMatrix.Fs(ik)) : (ek._previousWorldMatrix = ik.clone(), ek._previousWorldMatrix.copyToArray(Pk.instancesPreviousData, xk)));
              const Dk = ik.Tik();
              Pk.instancesData[xk + 12] = Dk[12] - Hk.x, Pk.instancesData[xk + 13] = Dk[13] - Hk.y, Pk.instancesData[xk + 14] = Dk[14] - Hk.z, xk += 16, nk++
            }
          }
        }
        if (wk) {
          let kk;
          if (Mk && Mk.dispose(), Kk && Kk.dispose(), Mk = new Vk.b(Dk, Pk.instancesData, !0, 16, !1, !0), Pk.instancesBuffer = Mk, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.JU().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) kk = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const ek = this._instanceDataStorage.engine.currentRenderPassId;
            kk = this._userInstancedBuffersStorage.renderPasses[ek], kk || (this._userInstancedBuffersStorage.renderPasses[ek] = kk = {})
          }
          kk.world0 = Mk.createVertexBuffer("world0", 0, 4), kk.world1 = Mk.createVertexBuffer("world1", 4, 4), kk.world2 = Mk.createVertexBuffer("world2", 8, 4), kk.world3 = Mk.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (Kk = new Vk.b(Dk, Pk.instancesPreviousData, !0, 16, !1, !0), Pk.instancesPreviousBuffer = Kk, kk.previousWorld0 = Kk.createVertexBuffer("previousWorld0", 0, 4), kk.previousWorld1 = Kk.createVertexBuffer("previousWorld1", 4, 4), kk.previousWorld2 = Kk.createVertexBuffer("previousWorld2", 8, 4), kk.previousWorld3 = Kk.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Mk.updateDirectly(Pk.instancesData, 0, nk), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || Kk.updateDirectly(Pk.instancesPreviousData, 0, nk));
        this._processInstancedBuffers(bk, Uk), Sk && void 0 !== fk && (this.XF()._activeIndices.addCount(kk.indexCount * nk, !1), Dk._currentDrawContext && (Dk._currentDrawContext.useInstancing = !0), this._bind(kk, Sk, fk), this._draw(kk, fk, nk)), !this._scene.needsPreviousWorldMatrices || wk || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || Kk.updateDirectly(Pk.instancesData, 0, nk)
      }
      _renderWithInstances(kk, ek, ik, Dk, fk) {
        const Sk = ik.visibleInstances[kk._id],
          bk = Sk ? Sk.length : 0,
          rk = ik.parent,
          Pk = rk.instancesBufferSize,
          mk = 16 * (bk + 1) * 4;
        for (; rk.instancesBufferSize < mk;) rk.instancesBufferSize *= 2;
        return rk.instancesData && Pk == rk.instancesBufferSize || (rk.instancesData = new Float32Array(rk.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !rk.instancesPreviousData || Pk != rk.instancesBufferSize) && (rk.instancesPreviousData = new Float32Array(rk.instancesBufferSize / 4)), this._updateInstancedBuffers(kk, ik, Pk, fk, ek, Dk), fk.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(kk, ek, ik, Dk) {
        const fk = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.XF()._activeIndices.addCount(kk.indexCount * fk, !1), Dk._currentDrawContext && (Dk._currentDrawContext.useInstancing = !0), this._bind(kk, ik, ek), this._draw(kk, ek, fk), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, fk) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Dk.unbindInstanceAttributes()
      }
      _processInstancedBuffers(kk, ek) {}
      _processRendering(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = this.XF(),
          mk = Pk.JU();
        if (Dk = this._getRenderingFillMode(Dk), Sk && ek.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(ek, Dk, ik, mk), this;
        if (Sk) this._renderWithInstances(ek, Dk, fk, ik, mk);
        else {
          mk._currentDrawContext && (mk._currentDrawContext.useInstancing = !1);
          let ik = 0;
          fk.renderSelf[ek._id] && (bk && bk(!1, kk.getWorldMatrix(), rk), ik++, this._draw(ek, Dk, this._instanceDataStorage.overridenInstanceCount));
          const Sk = fk.visibleInstances[ek._id];
          if (Sk) {
            const kk = Sk.length;
            ik += kk;
            for (let ik = 0; ik < kk; ik++) {
              const kk = Sk[ik].getWorldMatrix();
              bk && bk(!0, kk, rk), this._draw(ek, Dk)
            }
          }
          Pk._activeIndices.addCount(ek.indexCount * ik, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        kk?.instancesBuffer && (ek && kk.instancesBuffer.dispose(), kk.instancesBuffer = null), kk?.instancesPreviousBuffer && (ek && kk.instancesPreviousBuffer.dispose(), kk.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ek in this._instanceDataStorage.renderPasses) {
          const ik = this._instanceDataStorage.renderPasses[ek];
          this._disposeInstanceDataStorageRenderPass(ik, kk)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, kk), this._userInstancedBuffersStorage) {
          for (const ek in this._userInstancedBuffersStorage.vertexBuffers) {
            const ik = this._userInstancedBuffersStorage.vertexBuffers[ek];
            ik && (kk && ik.dispose(), this._userInstancedBuffersStorage.vertexBuffers[ek] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(kk)
      }
      _releaseRenderPassId(kk) {
        const ek = this._instanceDataStorage.renderPasses[kk];
        if (ek && (this._disposeInstanceDataStorageRenderPass(ek, !0), delete this._instanceDataStorage.renderPasses[kk]), this._userInstancedBuffersStorage?.renderPasses) {
          const ek = this._userInstancedBuffersStorage.renderPasses[kk];
          if (ek)
            for (const kk in ek) ek[kk]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[kk]
        }
        const ik = this._userInstancedBuffersStorage?.interleavedBuffers;
        ik?.[kk] && (ik[kk].buffer.dispose(), delete ik[kk])
      }
      _freeze() {
        if (this.TY) {
          for (let kk = 0; kk < this.TY.length; kk++) this._getInstancesRenderList(kk);
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
      renderWithRenderPassId(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Sk = this._scene.JU(),
          bk = Sk.currentRenderPassId;
        if (void 0 !== kk && (Sk.currentRenderPassId = kk), Dk)(!fk || fk && Dk.isInFrustum(this._scene._frustumPlanes)) && this.render(Dk, !!ek, ik);
        else
          for (let rk = 0; rk < this.TY.length; rk++) {
            const kk = this.TY[rk];
            (!fk || fk && kk.isInFrustum(this._scene._frustumPlanes)) && this.render(kk, !!ek, ik)
          }
        return void 0 !== kk && (Sk.currentRenderPassId = bk), this
      }
      directRender() {
        if (!this.TY) return this;
        for (const kk of this.TY) this.render(kk, !1);
        return this
      }
      render(kk, ek, ik) {
        const Dk = this.XF(),
          fk = Dk.JU();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Sk = Dk.activeCameras?.length ?? 0,
          bk = Sk > 1 && Dk.activeCamera === Dk.activeCameras[0] || Sk <= 1,
          rk = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== fk.currentRenderPassId;
        if (bk && this._checkOcclusionQuery(rk) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Pk = this._getInstancesRenderList(kk._id, !!ik);
        if (Pk.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let mk = 0,
          Mk = null;
        this.ignoreCameraMaxZ && Dk.activeCamera && !Dk._isInIntermediateRendering() && (mk = Dk.activeCamera.maxZ, Mk = Dk.activeCamera, Dk.activeCamera.maxZ = 0, Dk.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const Kk = kk.getRenderingMesh(),
          xk = Pk.hardwareInstancedRendering[kk._id] || Kk.hasThinInstances || !!this._userInstancedBuffersStorage && !kk.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          nk = this._instanceDataStorage,
          Uk = kk.fH();
        if (!Uk) return Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), this;
        if (nk.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Uk) {
          if (Uk._storeEffectOnSubMeshes && !kk._drawWrapper?._wasPreviouslyReady || !Uk._storeEffectOnSubMeshes && !Uk._getDrawWrapper()._wasPreviouslyReady) return Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), this
        } else {
          if (Uk._storeEffectOnSubMeshes) {
            if (!Uk.isReadyForSubMesh(this, kk, xk)) return Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), this
          } else if (!Uk.isReady(this, xk)) return Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Uk
        }
        if (ek) {
          const kk = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === kk.alphaModes.length) fk.setAlphaMode(kk.alphaMode);
          else
            for (let ek = 0; ek < kk.alphaModes.length; ek++) {
              const ik = kk.alphaModes[ek];
              fk.setAlphaMode(void 0 !== ik ? ik : 2, !1, ek)
            }
        }
        let Hk;
        Hk = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? kk._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const wk = Hk?.effect ?? null;
        for (let Ak = 0, jk = Dk._beforeRenderingMeshStage; Ak < jk.length; Ak++) {
          jk[Ak].action(this, kk, Pk, wk)
        }
        if (!Hk || !wk) return Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), this;
        const lk = ik || this;
        let pk;
        if (!nk.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const kk = lk._getWorldMatrixDeterminant();
          pk = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), kk < 0 && (pk = pk === zk.e.ClockWiseSideOrientation ? zk.e.CounterClockWiseSideOrientation : zk.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = pk
        }
        const yk = this._internalMeshDataInfo._effectiveMaterial._preBind(Hk, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && fk.setDepthWrite(!0);
        const Yk = this._internalMeshDataInfo._effectiveMaterial,
          Lk = Yk.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), xk || this._bind(kk, wk, Lk, !1);
        const Ck = lk.getWorldMatrix();
        Yk._storeEffectOnSubMeshes ? Yk.bindForSubMesh(Ck, this, kk) : Yk.bind(Ck, this);
        try {
          Qk.e._BindAttachmentsForEffect(fk, wk) && (!Yk.backFaceCulling && Yk.separateCullingPass && (fk.setState(!0, Yk.zOffset, !1, !yk, Yk.cullBackFaces, Yk.stencil, Yk.zOffsetUnits), this._processRendering(this, kk, wk, Lk, Pk, xk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), fk.setState(!0, Yk.zOffset, !1, yk, Yk.cullBackFaces, Yk.stencil, Yk.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(kk)), this._processRendering(this, kk, wk, Lk, Pk, xk, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Qk.e._RestoreAttachments(fk)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let Ak = 0, jk = Dk._afterRenderingMeshStage; Ak < jk.length; Ak++) {
          jk[Ak].action(this, kk, Pk, wk)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Mk && (Mk.maxZ = mk, Dk.updateTransformMatrix(!0)), 2 !== Dk.performancePriority || nk.isFrozen || this._freeze(), this
      }
      _renderRunFollower(kk, ek) {
        const ik = this._scene,
          Dk = ik._engine;
        if (Dk.isWebGPU || kk._mesh !== this || 0 !== this.instances.length || this.render !== Rk.prototype.render) return !1;
        const fk = kk.fH();
        if (!fk || fk !== ik._cachedMaterial || void 0 === fk._canBindRunFollower) return !1;
        const Sk = kk._drawWrapper,
          bk = Sk?.effect;
        if (!bk || bk !== ik._cachedEffect || this.visibility !== ik._cachedVisibility || Sk._forceRebindOnNextCall) return !1;
        const rk = this.hasThinInstances;
        if (!rk && this._userInstancedBuffersStorage) return !1;
        if (!Sk._wasPreviouslyReady || Sk._wasPreviouslyUsingInstances !== rk) return !1;
        const Pk = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ik._isInIntermediateRendering() || 0 !== ik._beforeRenderingMeshStage.length || 0 !== ik._afterRenderingMeshStage.length || Pk._onBeforeRenderObservable?.hasObservers() || Pk._onBeforeBindObservable?.hasObservers() || Pk._onAfterRenderObservable?.hasObservers()) return !1;
        const mk = this.occlusionType;
        if (void 0 !== mk && mk !== qk.c.OCCLUSION_TYPE_NONE || !fk._canBindRunFollower(ik, Dk, this, kk, bk)) return !1;
        const Mk = this._internalAbstractMeshDataInfo,
          Kk = Mk._isActiveIntermediate;
        Kk ? Mk._isActiveIntermediate = !1 : Mk._isActive = !1;
        const xk = ik.activeCameras?.length ?? 0;
        (xk > 1 && ik.activeCamera === ik.activeCameras[0] || xk <= 1) && this._checkOcclusionQuery(!1);
        const nk = this._getInstancesRenderList(kk._id);
        if (nk.mustReturn) return !0;
        if (!rk && !nk.renderSelf[kk._id]) return Kk ? Mk._isActiveIntermediate = !0 : Mk._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Pk._effectiveMaterial = fk, ek)
          if (1 === fk.alphaModes.length) Dk.setAlphaMode(fk.alphaMode);
          else
            for (let Hk = 0; Hk < fk.alphaModes.length; Hk++) {
              const kk = fk.alphaModes[Hk];
              Dk.setAlphaMode(void 0 !== kk ? kk : 2, !1, Hk)
            }
        if (fk.backFaceCulling || null !== fk.sideOrientation || fk._twoSidedLighting) {
          const kk = this._getWorldMatrixDeterminant();
          let ek = fk._getEffectiveOrientation(this);
          kk < 0 && (ek = ek === zk.e.ClockWiseSideOrientation ? zk.e.CounterClockWiseSideOrientation : zk.e.ClockWiseSideOrientation), Pk._effectiveSideOrientation = ek
        }
        fk._preBind(Sk, Pk._effectiveSideOrientation), fk.forceDepthWrite && Dk.setDepthWrite(!0);
        const Uk = fk.fillMode;
        return rk || this._bind(kk, bk, Uk, !1), fk._bindRunFollower(this.getWorldMatrix(), this, kk, bk), this._processRendering(this, kk, bk, Uk, nk, rk, this._onBeforeDraw, fk), fk.unbind(), 2 === ik.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Vk.e.MatricesWeightsKind) && (this.isVerticesDataPresent(Vk.e.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const kk = this.getVerticesData(Vk.e.MatricesWeightsKind),
          ek = kk.length;
        for (let ik = 0; ik < ek; ik += 4) {
          const ek = kk[ik] + kk[ik + 1] + kk[ik + 2] + kk[ik + 3];
          if (0 === ek) kk[ik] = 1;
          else {
            const Dk = 1 / ek;
            kk[ik] *= Dk, kk[ik + 1] *= Dk, kk[ik + 2] *= Dk, kk[ik + 3] *= Dk
          }
        }
        this.setVerticesData(Vk.e.MatricesWeightsKind, kk)
      }
      _normalizeSkinWeightsAndExtra() {
        const kk = this.getVerticesData(Vk.e.MatricesWeightsExtraKind),
          ek = this.getVerticesData(Vk.e.MatricesWeightsKind),
          ik = ek.length;
        for (let Dk = 0; Dk < ik; Dk += 4) {
          let ik = ek[Dk] + ek[Dk + 1] + ek[Dk + 2] + ek[Dk + 3];
          if (ik += kk[Dk] + kk[Dk + 1] + kk[Dk + 2] + kk[Dk + 3], 0 === ik) ek[Dk] = 1;
          else {
            const fk = 1 / ik;
            ek[Dk] *= fk, ek[Dk + 1] *= fk, ek[Dk + 2] *= fk, ek[Dk + 3] *= fk, kk[Dk] *= fk, kk[Dk + 1] *= fk, kk[Dk + 2] *= fk, kk[Dk + 3] *= fk
          }
        }
        this.setVerticesData(Vk.e.MatricesWeightsKind, ek), this.setVerticesData(Vk.e.MatricesWeightsKind, kk)
      }
      validateSkinning() {
        const kk = this.getVerticesData(Vk.e.MatricesWeightsExtraKind),
          ek = this.getVerticesData(Vk.e.MatricesWeightsKind);
        if (null === ek || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          CU: "not skinned"
        };
        const ik = ek.length;
        let Dk = 0,
          fk = 0,
          Sk = 0,
          bk = 0;
        const rk = null === kk ? 4 : 8,
          Pk = [];
        for (let nk = 0; nk <= rk; nk++) Pk[nk] = 0;
        for (let nk = 0; nk < ik; nk += 4) {
          let ik = ek[nk],
            mk = ik,
            Mk = 0 === mk ? 0 : 1;
          for (let fk = 1; fk < rk; fk++) {
            const Sk = fk < 4 ? ek[nk + fk] : kk[nk + fk - 4];
            Sk > ik && Dk++, 0 !== Sk && Mk++, mk += Sk, ik = Sk
          }
          if (Pk[Mk]++, Mk > Sk && (Sk = Mk), 0 === mk) fk++;
          else {
            const ik = 1 / mk;
            let Dk = 0;
            for (let fk = 0; fk < rk; fk++) Dk += fk < 4 ? Math.abs(ek[nk + fk] - ek[nk + fk] * ik) : Math.abs(kk[nk + fk - 4] - kk[nk + fk - 4] * ik);
            Dk > .001 && bk++
          }
        }
        const mk = this.skeleton.bones.length,
          Mk = this.getVerticesData(Vk.e.MatricesIndicesKind),
          Kk = this.getVerticesData(Vk.e.MatricesIndicesExtraKind);
        let xk = 0;
        for (let nk = 0; nk < ik; nk += 4)
          for (let kk = 0; kk < rk; kk++) {
            const ek = kk < 4 ? Mk[nk + kk] : Kk[nk + kk - 4];
            (ek >= mk || ek < 0) && xk++
          }
        return {
          skinned: !0,
          valid: 0 === fk && 0 === bk && 0 === xk,
          CU: "Number of Weights = " + ik / 4 + "\nMaximum influences = " + Sk + "\nMissing Weights = " + fk + "\nNot Sorted = " + Dk + "\nNot Normalized = " + bk + "\nWeightCounts = [" + Pk + "]\nNumber of bones = " + mk + "\nBad Bone Indices = " + xk
        }
      }
      _checkDelayState() {
        const kk = this.XF();
        return this._geometry ? this._geometry.load(kk) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(kk)), this
      }
      _queueLoad(kk) {
        kk.addPendingData(this);
        const ek = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ik = await kk._loadDelayedFileAsync(this.delayLoadingFile, ek, !0);
            ik instanceof ArrayBuffer ? this._delayLoadingFunction(ik, this) : this._delayLoadingFunction(JSON.parse(ik), this);
            for (const kk of this.instances) kk.refreshBoundingInfo(), kk._syncSubMeshes();
            this.delayLoadState = 1, kk.removePendingData(this)
          } catch (ik) {
            kk.removePendingData(this), kk.RL || ak.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ik}`)
          }
        })(), this
      }
      isInFrustum(kk) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(kk) && (this._checkDelayState(), !0))
      }
      setMaterialById(kk) {
        const ek = this.XF().materials;
        let ik;
        for (ik = ek.length - 1; ik > -1; ik--)
          if (ek[ik].id === kk) return this.material = ek[ik], this;
        const Dk = this.XF().multiMaterials;
        for (ik = Dk.length - 1; ik > -1; ik--)
          if (Dk[ik].id === kk) return this.material = Dk[ik], this;
        return this
      }
      getAnimatables() {
        const kk = [];
        return this.material && kk.push(this.material), this.skeleton && kk.push(this.skeleton), kk
      }
      bakeTransformIntoVertices(kk) {
        if (!this.isVerticesDataPresent(Vk.e.PositionKind)) return this;
        const ek = this.TY.splice(0);
        this._resetPointsArrayCache();
        let ik = this.getVerticesData(Vk.e.PositionKind);
        const Dk = jk.o.Zero();
        let fk;
        for (fk = 0; fk < ik.length; fk += 3) jk.o.TransformCoordinatesFromFloatsToRef(ik[fk], ik[fk + 1], ik[fk + 2], kk, Dk).toArray(ik, fk);
        if (this.setVerticesData(Vk.e.PositionKind, ik, this.getVertexBuffer(Vk.e.PositionKind).isUpdatable()), this.isVerticesDataPresent(Vk.e.NormalKind)) {
          for (ik = this.getVerticesData(Vk.e.NormalKind), fk = 0; fk < ik.length; fk += 3) jk.o.TransformNormalFromFloatsToRef(ik[fk], ik[fk + 1], ik[fk + 2], kk, Dk).normalize().toArray(ik, fk);
          this.setVerticesData(Vk.e.NormalKind, ik, this.getVertexBuffer(Vk.e.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Vk.e.TangentKind)) {
          for (ik = this.getVerticesData(Vk.e.TangentKind), fk = 0; fk < ik.length; fk += 4) jk.o.TransformNormalFromFloatsToRef(ik[fk], ik[fk + 1], ik[fk + 2], kk, Dk).normalize().toArray(ik, fk);
          this.setVerticesData(Vk.e.TangentKind, ik, this.getVertexBuffer(Vk.e.TangentKind).isUpdatable())
        }
        return kk.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.TY = ek, this
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (ek && void 0 === ek._addToSceneRootNodes) {
          const ik = ek;
          return Nk.source = this, Nk.doNotCloneChildren = ik.doNotCloneChildren, Nk.clonePhysicsImpostor = ik.clonePhysicsImpostor, Nk.cloneThinInstances = ik.cloneThinInstances, new Rk(kk, this.XF(), Nk)
        }
        return new Rk(kk, this.XF(), ek, this, ik, Dk)
      }
      dispose(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ik = this._internalMeshDataInfo;
        if (ik._onBeforeDrawObservable && ik._onBeforeDrawObservable.clear(), ik._onBeforeBindObservable && ik._onBeforeBindObservable.clear(), ik._onBeforeRenderObservable && ik._onBeforeRenderObservable.clear(), ik._onAfterRenderObservable && ik._onAfterRenderObservable.clear(), ik._onBetweenPassObservable && ik._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ik.meshMap)
            for (const kk in ik.meshMap) {
              const ek = ik.meshMap[kk];
              ek && (ek._internalMeshDataInfo._source = null, ik.meshMap[kk] = void 0)
            }
          ik._source && ik._source._internalMeshDataInfo.meshMap && (ik._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const kk = this.XF().meshes;
          for (const ek of kk) {
            const kk = ek;
            kk._internalMeshDataInfo && kk._internalMeshDataInfo._source && kk._internalMeshDataInfo._source === this && (kk._internalMeshDataInfo._source = null)
          }
        }
        ik._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(kk, ek)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(kk, ek, ik, Dk, fk, Sk) {
        let bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          rk = arguments.length > 7 ? arguments[7] : void 0;
        const Pk = this.XF();
        return (0, yk.o)(kk, (kk => {
          const rk = kk.width,
            Pk = kk.height,
            mk = this.JU().createCanvas(rk, Pk).getContext("2d");
          mk.drawImage(kk, 0, 0);
          const Mk = mk.getImageData(0, 0, rk, Pk).data;
          this.applyDisplacementMapFromBuffer(Mk, rk, Pk, ek, ik, fk, Sk, bk), Dk && Dk(this)
        }), rk || (() => {}), Pk.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Vk.e.PositionKind) || !this.isVerticesDataPresent(Vk.e.NormalKind) || !this.isVerticesDataPresent(Vk.e.UVKind)) return ak.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Pk = this.getVerticesData(Vk.e.PositionKind, !0, !0),
          mk = this.getVerticesData(Vk.e.NormalKind),
          Mk = this.getVerticesData(Vk.e.UVKind);
        let Kk = jk.o.Zero();
        const xk = jk.o.Zero(),
          nk = jk.l.Zero();
        Sk = Sk || jk.l.Zero(), bk = bk || new jk.l(1, 1);
        for (let Uk = 0; Uk < Pk.length; Uk += 3) {
          jk.o.FromArrayToRef(Pk, Uk, Kk), jk.o.FromArrayToRef(mk, Uk, xk), jk.l.FromArrayToRef(Mk, Uk / 3 * 2, nk);
          const rk = 4 * ((Math.abs(nk.x * bk.x + Sk.x % 1) * (ek - 1) % ek | 0) + (Math.abs(nk.y * bk.y + Sk.y % 1) * (ik - 1) % ik | 0) * ek),
            Hk = .3 * (kk[rk] / 255) + .59 * (kk[rk + 1] / 255) + .11 * (kk[rk + 2] / 255);
          xk.normalize(), xk.scaleInPlace(Dk + (fk - Dk) * Hk), Kk = Kk.add(xk), Kk.toArray(Pk, Uk)
        }
        return Fk.b.ComputeNormals(Pk, this.oik(), mk), rk ? (this.setVerticesData(Vk.e.PositionKind, Pk), this.setVerticesData(Vk.e.NormalKind, mk), this.setVerticesData(Vk.e.UVKind, Mk)) : (this.updateVerticesData(Vk.e.PositionKind, Pk), this.updateVerticesData(Vk.e.NormalKind, mk)), this
      }
      _getFlattenedNormals(kk, ek) {
        const ik = new Float32Array(3 * kk.length);
        let Dk = 0;
        const fk = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Sk = 0; Sk < kk.length; Sk += 3) {
          const bk = jk.o.FromArray(ek, 3 * kk[Sk]),
            rk = jk.o.FromArray(ek, 3 * kk[Sk + 1]),
            Pk = jk.o.FromArray(ek, 3 * kk[Sk + 2]),
            mk = bk.subtract(rk),
            Mk = Pk.subtract(rk),
            Kk = jk.o.Normalize(jk.o.Cross(mk, Mk));
          fk && Kk.scaleInPlace(-1);
          for (let kk = 0; kk < 3; kk++) ik[Dk++] = Kk.x, ik[Dk++] = Kk.y, ik[Dk++] = Kk.z
        }
        return ik
      }
      _convertToUnIndexedMesh() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = this.getVerticesDataKinds().filter((kk => !this.getVertexBuffer(kk)?.getIsInstanced())),
          ik = this.oik(!1, !0),
          Dk = {},
          fk = (kk, ek) => {
            const Dk = new Float32Array(ik.length * ek);
            let fk = 0;
            for (let Sk = 0; Sk < ik.length; Sk++)
              for (let bk = 0; bk < ek; bk++) Dk[fk++] = kk[ik[Sk] * ek + bk];
            return Dk
          },
          Sk = this.hq(),
          bk = this.geometry ? this.TY.slice(0) : [];
        for (const rk of ek) Dk[rk] = this.getVerticesData(rk);
        for (const rk of ek) {
          const ek = this.getVertexBuffer(rk),
            Sk = ek.getSize();
          if (kk && rk === Vk.e.NormalKind) {
            const kk = this._getFlattenedNormals(ik, Dk[Vk.e.PositionKind]);
            this.setVerticesData(Vk.e.NormalKind, kk, ek.isUpdatable(), Sk)
          } else this.setVerticesData(rk, fk(Dk[rk], Sk), ek.isUpdatable(), Sk)
        }
        if (this.morphTargetManager) {
          for (let ek = 0; ek < this.morphTargetManager.numTargets; ek++) {
            const Dk = this.morphTargetManager.getTarget(ek),
              Sk = Dk.getPositions();
            Dk.Ubk(fk(Sk, 3));
            const bk = Dk.getNormals();
            bk && Dk.setNormals(kk ? this._getFlattenedNormals(ik, Sk) : fk(bk, 3));
            const rk = Dk.getTangents();
            rk && Dk.setTangents(fk(rk, 3));
            const Pk = Dk.getUVs();
            Pk && Dk.setUVs(fk(Pk, 2));
            const mk = Dk.getColors();
            mk && Dk.setColors(fk(mk, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let rk = 0; rk < ik.length; rk++) ik[rk] = rk;
        this.setIndices(ik), this._unIndexed = !0, this.releaseSubMeshes();
        for (const rk of bk) {
          const kk = rk.hq();
          Ik.e.AddToMesh(rk.materialIndex, rk.indexStart, rk.indexCount, rk.indexStart, rk.indexCount, this).setBoundingInfo(kk)
        }
        return this.setBoundingInfo(Sk), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = Fk.b.ExtractFromMesh(this);
        let ik;
        if (kk && this.isVerticesDataPresent(Vk.e.NormalKind) && ek.normals) {
          for (ik = 0; ik < ek.normals.length; ik++) ek.normals[ik] *= -1;
          this.setVerticesData(Vk.e.NormalKind, ek.normals, this.isVertexBufferUpdatable(Vk.e.NormalKind))
        }
        if (ek.indices) {
          let kk;
          for (ik = 0; ik < ek.indices.length; ik += 3) kk = ek.indices[ik + 1], ek.indices[ik + 1] = ek.indices[ik + 2], ek.indices[ik + 2] = kk;
          this.setIndices(ek.indices, null, this.isVertexBufferUpdatable(Vk.e.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const ek = Fk.b.ExtractFromMesh(this),
          ik = ek.indices && !Array.isArray(ek.indices) && Array.from ? Array.from(ek.indices) : ek.indices,
          Dk = ek.positions && !Array.isArray(ek.positions) && Array.from ? Array.from(ek.positions) : ek.positions,
          fk = ek.uvs && !Array.isArray(ek.uvs) && Array.from ? Array.from(ek.uvs) : ek.uvs,
          Sk = ek.normals && !Array.isArray(ek.normals) && Array.from ? Array.from(ek.normals) : ek.normals;
        if (ik && Dk) {
          ek.indices = ik, ek.positions = Dk, fk && (ek.uvs = fk), Sk && (ek.normals = Sk);
          const bk = kk + 1,
            rk = [];
          for (let kk = 0; kk < bk + 1; kk++) rk[kk] = [];
          let Pk, mk;
          const Mk = new jk.o(0, 0, 0),
            Kk = new jk.o(0, 0, 0),
            xk = new jk.l(0, 0),
            nk = [],
            Uk = [],
            Hk = [];
          let wk, lk, pk, yk = Dk.length;
          fk && (lk = fk.length), Sk && (pk = Sk.length);
          for (let kk = 0; kk < ik.length; kk += 3) {
            Uk[0] = ik[kk], Uk[1] = ik[kk + 1], Uk[2] = ik[kk + 2];
            for (let kk = 0; kk < 3; kk++)
              if (Pk = Uk[kk], mk = Uk[(kk + 1) % 3], void 0 === Hk[Pk] && void 0 === Hk[mk] ? (Hk[Pk] = [], Hk[mk] = []) : (void 0 === Hk[Pk] && (Hk[Pk] = []), void 0 === Hk[mk] && (Hk[mk] = [])), void 0 === Hk[Pk][mk] && void 0 === Hk[mk][Pk]) {
                Hk[Pk][mk] = [], Mk.x = (Dk[3 * mk] - Dk[3 * Pk]) / bk, Mk.y = (Dk[3 * mk + 1] - Dk[3 * Pk + 1]) / bk, Mk.z = (Dk[3 * mk + 2] - Dk[3 * Pk + 2]) / bk, Sk && (Kk.x = (Sk[3 * mk] - Sk[3 * Pk]) / bk, Kk.y = (Sk[3 * mk + 1] - Sk[3 * Pk + 1]) / bk, Kk.z = (Sk[3 * mk + 2] - Sk[3 * Pk + 2]) / bk), fk && (xk.x = (fk[2 * mk] - fk[2 * Pk]) / bk, xk.y = (fk[2 * mk + 1] - fk[2 * Pk + 1]) / bk), Hk[Pk][mk].push(Pk);
                for (let kk = 1; kk < bk; kk++) Hk[Pk][mk].push(Dk.length / 3), Dk[yk++] = Dk[3 * Pk] + kk * Mk.x, Dk[yk++] = Dk[3 * Pk + 1] + kk * Mk.y, Dk[yk++] = Dk[3 * Pk + 2] + kk * Mk.z, Sk && (Sk[pk++] = Sk[3 * Pk] + kk * Kk.x, Sk[pk++] = Sk[3 * Pk + 1] + kk * Kk.y, Sk[pk++] = Sk[3 * Pk + 2] + kk * Kk.z), fk && (fk[lk++] = fk[2 * Pk] + kk * xk.x, fk[lk++] = fk[2 * Pk + 1] + kk * xk.y);
                Hk[Pk][mk].push(mk), Hk[mk][Pk] = [], wk = Hk[Pk][mk].length;
                for (let kk = 0; kk < wk; kk++) Hk[mk][Pk][kk] = Hk[Pk][mk][wk - 1 - kk]
              } rk[0][0] = ik[kk], rk[1][0] = Hk[ik[kk]][ik[kk + 1]][1], rk[1][1] = Hk[ik[kk]][ik[kk + 2]][1];
            for (let ek = 2; ek < bk; ek++) {
              rk[ek][0] = Hk[ik[kk]][ik[kk + 1]][ek], rk[ek][ek] = Hk[ik[kk]][ik[kk + 2]][ek], Mk.x = (Dk[3 * rk[ek][ek]] - Dk[3 * rk[ek][0]]) / ek, Mk.y = (Dk[3 * rk[ek][ek] + 1] - Dk[3 * rk[ek][0] + 1]) / ek, Mk.z = (Dk[3 * rk[ek][ek] + 2] - Dk[3 * rk[ek][0] + 2]) / ek, Sk && (Kk.x = (Sk[3 * rk[ek][ek]] - Sk[3 * rk[ek][0]]) / ek, Kk.y = (Sk[3 * rk[ek][ek] + 1] - Sk[3 * rk[ek][0] + 1]) / ek, Kk.z = (Sk[3 * rk[ek][ek] + 2] - Sk[3 * rk[ek][0] + 2]) / ek), fk && (xk.x = (fk[2 * rk[ek][ek]] - fk[2 * rk[ek][0]]) / ek, xk.y = (fk[2 * rk[ek][ek] + 1] - fk[2 * rk[ek][0] + 1]) / ek);
              for (let kk = 1; kk < ek; kk++) rk[ek][kk] = Dk.length / 3, Dk[yk++] = Dk[3 * rk[ek][0]] + kk * Mk.x, Dk[yk++] = Dk[3 * rk[ek][0] + 1] + kk * Mk.y, Dk[yk++] = Dk[3 * rk[ek][0] + 2] + kk * Mk.z, Sk && (Sk[pk++] = Sk[3 * rk[ek][0]] + kk * Kk.x, Sk[pk++] = Sk[3 * rk[ek][0] + 1] + kk * Kk.y, Sk[pk++] = Sk[3 * rk[ek][0] + 2] + kk * Kk.z), fk && (fk[lk++] = fk[2 * rk[ek][0]] + kk * xk.x, fk[lk++] = fk[2 * rk[ek][0] + 1] + kk * xk.y)
            }
            rk[bk] = Hk[ik[kk + 1]][ik[kk + 2]], nk.push(rk[0][0], rk[1][0], rk[1][1]);
            for (let kk = 1; kk < bk; kk++) {
              let ek;
              for (ek = 0; ek < kk; ek++) nk.push(rk[kk][ek], rk[kk + 1][ek], rk[kk + 1][ek + 1]), nk.push(rk[kk][ek], rk[kk + 1][ek + 1], rk[kk][ek + 1]);
              nk.push(rk[kk][ek], rk[kk + 1][ek], rk[kk + 1][ek + 1])
            }
          }
          ek.indices = nk, ek.applyToMesh(this, this.isVertexBufferUpdatable(Vk.e.PositionKind))
        } else ak.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const kk = Fk.b.ExtractFromMesh(this),
          ek = kk.uvs,
          ik = kk.indices,
          Dk = kk.positions,
          fk = kk.colors,
          Sk = kk.matricesIndices,
          bk = kk.matricesWeights,
          rk = kk.matricesIndicesExtra,
          Pk = kk.matricesWeightsExtra;
        if (void 0 === ik || void 0 === Dk || null === ik || null === Dk) ak.b.Warn("VertexData contains empty entries");
        else {
          const mk = [],
            Mk = [],
            Kk = [],
            xk = [],
            nk = [],
            Uk = [],
            Hk = [],
            wk = [];
          let lk, pk = 0;
          const yk = {};
          let Yk, Lk;
          for (let kk = 0; kk < ik.length; kk += 3) {
            Lk = [ik[kk], ik[kk + 1], ik[kk + 2]], lk = [];
            for (let kk = 0; kk < 3; kk++) {
              lk[kk] = "";
              for (let ek = 0; ek < 3; ek++) Math.abs(Dk[3 * Lk[kk] + ek]) < 1e-8 && (Dk[3 * Lk[kk] + ek] = 0), lk[kk] += Dk[3 * Lk[kk] + ek] + "|"
            }
            if (lk[0] != lk[1] && lk[0] != lk[2] && lk[1] != lk[2])
              for (let kk = 0; kk < 3; kk++) {
                if (Yk = yk[lk[kk]], void 0 === Yk) {
                  yk[lk[kk]] = pk, Yk = pk++;
                  for (let ek = 0; ek < 3; ek++) mk.push(Dk[3 * Lk[kk] + ek]);
                  if (null !== fk && void 0 !== fk)
                    for (let ek = 0; ek < 4; ek++) xk.push(fk[4 * Lk[kk] + ek]);
                  if (null !== ek && void 0 !== ek)
                    for (let ik = 0; ik < 2; ik++) Kk.push(ek[2 * Lk[kk] + ik]);
                  if (null !== Sk && void 0 !== Sk)
                    for (let ek = 0; ek < 4; ek++) nk.push(Sk[4 * Lk[kk] + ek]);
                  if (null !== bk && void 0 !== bk)
                    for (let ek = 0; ek < 4; ek++) Uk.push(bk[4 * Lk[kk] + ek]);
                  if (null !== rk && void 0 !== rk)
                    for (let ek = 0; ek < 4; ek++) Hk.push(rk[4 * Lk[kk] + ek]);
                  if (null !== Pk && void 0 !== Pk)
                    for (let ek = 0; ek < 4; ek++) wk.push(Pk[4 * Lk[kk] + ek])
                }
                Mk.push(Yk)
              }
          }
          const Ck = [];
          Fk.b.ComputeNormals(mk, Mk, Ck), kk.positions = mk, kk.indices = Mk, kk.normals = Ck, null !== ek && void 0 !== ek && (kk.uvs = Kk), null !== fk && void 0 !== fk && (kk.colors = xk), null !== Sk && void 0 !== Sk && (kk.matricesIndices = nk), null !== bk && void 0 !== bk && (kk.matricesWeights = Uk), null !== rk && void 0 !== rk && (kk.matricesIndicesExtra = Hk), null !== bk && void 0 !== bk && (kk.matricesWeightsExtra = wk), kk.applyToMesh(this, this.isVertexBufferUpdatable(Vk.e.PositionKind))
        }
      }
      static _instancedMeshFactory(kk, ek) {
        throw (0, tk.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(kk, ek, ik) {
        throw (0, tk.k)("PhysicsImpostor")
      }
      createInstance(kk) {
        const ek = Rk._instancedMeshFactory(kk, this);
        return ek.parent = this.parent, ek
      }
      synchronizeInstances() {
        for (let kk = 0; kk < this.instances.length; kk++) {
          this.instances[kk]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(kk) {
        const ek = this.oik(),
          ik = this.getVerticesData(Vk.e.PositionKind);
        if (!ik || !ek) return this;
        const Dk = [];
        for (let Sk = 0; Sk < ik.length; Sk += 3) Dk.push(jk.o.FromArray(ik, Sk));
        const fk = [];
        return pk.d.SyncAsyncForLoop(Dk.length, 40, (kk => {
          const ek = Dk.length - 1 - kk,
            ik = Dk[ek];
          for (let Sk = 0; Sk < ek; ++Sk) {
            const kk = Dk[Sk];
            if (ik.equals(kk)) {
              fk[ek] = Sk;
              break
            }
          }
        }), (() => {
          for (let kk = 0; kk < ek.length; ++kk) ek[kk] = fk[ek[kk]] || ek[kk];
          const ik = this.TY.slice(0);
          this.setIndices(ek), this.TY = ik, kk && kk(this)
        })), this
      }
      serialize() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        kk.name = this.name, kk.id = this.id, kk.uniqueId = this.uniqueId, kk.type = this.getClassName(), Lk.c && Lk.c.HasTags(this) && (kk.tags = Lk.c.GetTags(this)), kk.position = this.position.Tik(), this.rotationQuaternion ? kk.rotationQuaternion = this.rotationQuaternion.Tik() : this.rotation && (kk.rotation = this.rotation.Tik()), kk.wi = this.wi.Tik(), this._postMultiplyPivotMatrix ? kk.pivotMatrix = this.getPivotMatrix().Tik() : kk.localMatrix = this.getPivotMatrix().Tik(), kk.isEnabled = this.isEnabled(!1), kk.isVisible = this.isVisible, kk.infiniteDistance = this.infiniteDistance, kk.pickable = this.Pw, kk.receiveShadows = this.receiveShadows, kk.billboardMode = this.billboardMode, kk.visibility = this.visibility, kk.kH = this.kH, kk.checkCollisions = this.checkCollisions, kk.ellipsoid = this.ellipsoid.Tik(), kk.ellipsoidOffset = this.ellipsoidOffset.Tik(), kk.DH = this.DH, kk.isBlocker = this.isBlocker, kk.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (kk.Eu = !0), this.parent && this.parent._serializeAsParent(kk), kk.isUnIndexed = this.isUnIndexed;
        const ek = this._geometry;
        if (ek && this.TY) {
          kk.geometryUniqueId = ek.uniqueId, kk.geometryId = ek.id, kk.TY = [];
          for (let ek = 0; ek < this.TY.length; ek++) {
            const ik = this.TY[ek];
            kk.TY.push({
              materialIndex: ik.materialIndex,
              verticesStart: ik.verticesStart,
              verticesCount: ik.verticesCount,
              indexStart: ik.indexStart,
              indexCount: ik.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (kk.materialUniqueId = this.material.uniqueId, kk.materialId = this.material.id) : (this.material = null, kk.materialUniqueId = this._scene.defaultMaterial.uniqueId, kk.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (kk.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (kk.skeletonId = this.skeleton.id, kk.skeletonUniqueId = this.skeleton.uniqueId, kk.numBoneInfluencers = this.numBoneInfluencers), this.XF()._getComponent(Xk.b.NAME_PHYSICSENGINE)) {
          const ek = this.getPhysicsImpostor?.();
          ek && (kk.physicsMass = ek.getParam("Or"), kk.physicsFriction = ek.getParam("friction"), kk.physicsRestitution = ek.getParam("Or"), kk.physicsImpostor = ek.type)
        }
        this.metadata && (kk.metadata = this.metadata), 0 !== this.meshBlendingTag && (kk.meshBlendingTag = this.meshBlendingTag), kk.instances = [];
        for (let ik = 0; ik < this.instances.length; ik++) {
          const ek = this.instances[ik];
          if (ek.doNotSerialize) continue;
          const Dk = {
            name: ek.name,
            id: ek.id,
            isEnabled: ek.isEnabled(!1),
            isVisible: ek.isVisible,
            Pw: ek.Pw,
            checkCollisions: ek.checkCollisions,
            position: ek.position.Tik(),
            wi: ek.wi.Tik()
          };
          if (ek.parent && ek.parent._serializeAsParent(Dk), ek.rotationQuaternion ? Dk.rotationQuaternion = ek.rotationQuaternion.Tik() : ek.rotation && (Dk.rotation = ek.rotation.Tik()), this.XF()._getComponent(Xk.b.NAME_PHYSICSENGINE)) {
            const kk = ek.getPhysicsImpostor?.();
            kk && (Dk.physicsMass = kk.getParam("Or"), Dk.physicsFriction = kk.getParam("friction"), Dk.physicsRestitution = kk.getParam("Or"), Dk.physicsImpostor = kk.type)
          }
          ek.metadata && (Dk.metadata = ek.metadata), ek.actionManager && (Dk.actions = ek.actionManager.serialize(ek.name)), kk.instances.push(Dk), hk.b.AppendSerializedAnimations(ek, Dk), Dk.lw = ek.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (kk.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.Pek
          }, this._userThinInstanceBuffersStorage)) {
          const ek = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const kk in this._userThinInstanceBuffersStorage.data) ek.data[kk] = Array.from(this._userThinInstanceBuffersStorage.data[kk]), ek.sizes[kk] = this._userThinInstanceBuffersStorage.sizes[kk], ek.strides[kk] = this._userThinInstanceBuffersStorage.strides[kk];
          kk.thinInstances.userThinInstance = ek
        }
        return hk.b.AppendSerializedAnimations(this, kk), kk.lw = this.serializeAnimationRanges(), kk.layerMask = this.layerMask, kk.alphaIndex = this.alphaIndex, kk.hasVertexAlpha = this.hasVertexAlpha, kk.overlayAlpha = this.overlayAlpha, kk.overlayColor = this.overlayColor.Tik(), kk.renderOverlay = this.renderOverlay, kk.applyFog = this.applyFog, this.actionManager && (kk.actions = this.actionManager.serialize(this.name)), kk
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const kk = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (kk && kk.vertexCount) {
          if (kk.vertexCount !== this.getTotalVertices()) return ak.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (kk.isUsingTextureForTargets) return;
          for (let ek = 0; ek < kk.numInfluencers; ek++) {
            const ik = kk.getActiveTarget(ek),
              Dk = ik.getPositions();
            if (!Dk) return void ak.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Vk.e.PositionKind + ek, Dk, !1, 3);
            const fk = ik.getNormals();
            fk && this.geometry.setVerticesData(Vk.e.NormalKind + ek, fk, !1, 3);
            const Sk = ik.getTangents();
            Sk && this.geometry.setVerticesData(Vk.e.TangentKind + ek, Sk, !1, 3);
            const bk = ik.getUVs();
            bk && this.geometry.setVerticesData(Vk.e.UVKind + "_" + ek, bk, !1, 2);
            const rk = ik.getUV2s();
            rk && this.geometry.setVerticesData(Vk.e.UV2Kind + "_" + ek, rk, !1, 2);
            const Pk = ik.getColors();
            Pk && this.geometry.setVerticesData(Vk.e.ColorKind + ek, Pk, !1, 4)
          }
        } else {
          let kk = 0;
          for (; this.geometry.isVerticesDataPresent(Vk.e.PositionKind + kk);) this.geometry.removeVerticesData(Vk.e.PositionKind + kk), this.geometry.isVerticesDataPresent(Vk.e.NormalKind + kk) && this.geometry.removeVerticesData(Vk.e.NormalKind + kk), this.geometry.isVerticesDataPresent(Vk.e.TangentKind + kk) && this.geometry.removeVerticesData(Vk.e.TangentKind + kk), this.geometry.isVerticesDataPresent(Vk.e.UVKind + "_" + kk) && this.geometry.removeVerticesData(Vk.e.UVKind + "_" + kk), this.geometry.isVerticesDataPresent(Vk.e.UV2Kind + "_" + kk) && this.geometry.removeVerticesData(Vk.e.UV2Kind + "_" + kk), this.geometry.isVerticesDataPresent(Vk.e.ColorKind + kk) && this.geometry.removeVerticesData(Vk.e.ColorKind + kk), kk++
        }
      }
      static Parse(kk, ek, ik) {
        let Dk, fk = !1;
        if (kk.type && "LinesMesh" === kk.type ? Dk = Rk._LinesMeshParser(kk, ek) : kk.type && "GroundMesh" === kk.type ? Dk = Rk._GroundMeshParser(kk, ek) : kk.type && "GoldbergMesh" === kk.type ? Dk = Rk._GoldbergMeshParser(kk, ek) : kk.type && "GreasedLineMesh" === kk.type ? Dk = Rk._GreasedLineMeshParser(kk, ek) : kk.type && "TrailMesh" === kk.type ? Dk = Rk._TrailMeshParser(kk, ek) : kk.type && "GaussianSplattingMesh" === kk.type ? (Dk = kk._isCompound ? Rk._GaussianSplattingCompoundMeshParser(kk, ek) : Rk._GaussianSplattingMeshParser(kk, ek), fk = !0) : kk.type && "GaussianSplattingPartProxyMesh" === kk.type ? (Dk = Rk._GaussianSplattingPartProxyMeshParser(kk, ek), fk = !0) : Dk = new Rk(kk.name, ek), Dk.id = kk.id, Dk._waitingParsedUniqueId = kk.uniqueId, Lk.c && Lk.c.AddTagsTo(Dk, kk.tags), Dk.position = jk.o.FromArray(kk.position), void 0 !== kk.metadata && (Dk.metadata = kk.metadata), void 0 !== kk.meshBlendingTag && (Dk.meshBlendingTag = kk.meshBlendingTag), kk.rotationQuaternion ? Dk.rotationQuaternion = jk.c.FromArray(kk.rotationQuaternion) : kk.rotation && (Dk.rotation = jk.o.FromArray(kk.rotation)), Dk.wi = jk.o.FromArray(kk.wi), kk.localMatrix ? Dk.setPreTransformMatrix(jk.b.FromArray(kk.localMatrix)) : kk.pivotMatrix && Dk.setPivotMatrix(jk.b.FromArray(kk.pivotMatrix)), Dk.bV(kk.isEnabled), Dk.isVisible = kk.isVisible, Dk.infiniteDistance = kk.infiniteDistance, Dk.kH = !!kk.kH, Dk.showBoundingBox = kk.showBoundingBox, Dk.showSubMeshesBoundingBox = kk.showSubMeshesBoundingBox, void 0 !== kk.applyFog && (Dk.applyFog = kk.applyFog), void 0 !== kk.pickable && (Dk.Pw = kk.pickable), void 0 !== kk.alphaIndex && (Dk.alphaIndex = kk.alphaIndex), Dk.receiveShadows = kk.receiveShadows, void 0 !== kk.billboardMode && (Dk.billboardMode = kk.billboardMode), void 0 !== kk.visibility && (Dk.visibility = kk.visibility), Dk.checkCollisions = kk.checkCollisions, Dk.DH = !!kk.DH, kk.ellipsoid && (Dk.ellipsoid = jk.o.FromArray(kk.ellipsoid)), kk.ellipsoidOffset && (Dk.ellipsoidOffset = jk.o.FromArray(kk.ellipsoidOffset)), null != kk.overrideMaterialSideOrientation && (Dk.sideOrientation = kk.overrideMaterialSideOrientation), void 0 !== kk.sideOrientation && (Dk.sideOrientation = kk.sideOrientation), void 0 !== kk.isBlocker && (Dk.isBlocker = kk.isBlocker), Dk._shouldGenerateFlatShading = kk.useFlatShading, kk.Eu && (Dk._waitingData.Eu = kk.Eu), void 0 !== kk.parentId && (Dk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Dk._waitingParentInstanceIndex = kk.parentInstanceIndex), void 0 !== kk.actions && (Dk._waitingData.actions = kk.actions), void 0 !== kk.overlayAlpha && (Dk.overlayAlpha = kk.overlayAlpha), void 0 !== kk.overlayColor && (Dk.overlayColor = sk.e.FromArray(kk.overlayColor)), void 0 !== kk.renderOverlay && (Dk.renderOverlay = kk.renderOverlay), Dk.isUnIndexed = !!kk.isUnIndexed, Dk.hasVertexAlpha = kk.hasVertexAlpha, kk.delayLoadingFile ? (Dk.delayLoadState = 4, Dk.delayLoadingFile = ik + kk.delayLoadingFile, Dk.buildBoundingInfo(jk.o.FromArray(kk.boundingBoxMinimum), jk.o.FromArray(kk.boundingBoxMaximum)), kk._binaryInfo && (Dk._binaryInfo = kk._binaryInfo), Dk._delayInfo = [], kk.hasUVs && Dk._delayInfo.push(Vk.e.UVKind), kk.hasUVs2 && Dk._delayInfo.push(Vk.e.UV2Kind), kk.hasUVs3 && Dk._delayInfo.push(Vk.e.UV3Kind), kk.hasUVs4 && Dk._delayInfo.push(Vk.e.UV4Kind), kk.hasUVs5 && Dk._delayInfo.push(Vk.e.UV5Kind), kk.hasUVs6 && Dk._delayInfo.push(Vk.e.UV6Kind), kk.hasColors && Dk._delayInfo.push(Vk.e.ColorKind), kk.hasMatricesIndices && Dk._delayInfo.push(Vk.e.MatricesIndicesKind), kk.hasMatricesWeights && Dk._delayInfo.push(Vk.e.MatricesWeightsKind), Dk._delayLoadingFunction = uk.e._ImportGeometry, Ek.c.ForceFullSceneLoadingForIncremental && Dk._checkDelayState()) : fk || uk.e._ImportGeometry(kk, Dk), kk.materialUniqueId ? Dk._waitingMaterialId = kk.materialUniqueId : kk.materialId && (Dk._waitingMaterialId = kk.materialId), kk.morphTargetManagerId > -1 && (Dk._waitingMorphTargetManagerId = kk.morphTargetManagerId), void 0 !== kk.skeletonId && null !== kk.skeletonId && (Dk.skeleton = ek.getLastSkeletonById(kk.skeletonId), Dk._waitingSkeletonId = kk.skeletonId, kk.numBoneInfluencers && (Dk.numBoneInfluencers = kk.numBoneInfluencers)), void 0 !== kk.skeletonUniqueId && null !== kk.skeletonUniqueId && (Dk._waitingSkeletonUniqueId = kk.skeletonUniqueId), kk.animations) {
          for (let ek = 0; ek < kk.animations.length; ek++) {
            const ik = kk.animations[ek],
              fk = (0, Wk.d)("BABYLON.Animation");
            fk && Dk.animations.push(fk.Parse(ik))
          }
          dk.b.ParseAnimationRanges(Dk, kk, ek)
        }
        if (kk.autoAnimate && ek.beginAnimation(Dk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), kk.layerMask && !isNaN(kk.layerMask) ? Dk.layerMask = Math.abs(parseInt(kk.layerMask)) : Dk.layerMask = 268435455, kk.physicsImpostor && (Dk.physicsImpostor = Rk._PhysicsImpostorParser(ek, Dk, kk)), kk.lodMeshIds && (Dk._waitingData.lods = {
            ids: kk.lodMeshIds,
            distances: kk.lodDistances ? kk.lodDistances : null,
            coverages: kk.lodCoverages ? kk.lodCoverages : null
          }), kk.instances)
          for (let Sk = 0; Sk < kk.instances.length; Sk++) {
            const ik = kk.instances[Sk],
              fk = Dk.createInstance(ik.name);
            if (ik.id && (fk.id = ik.id), Lk.c && (ik.tags ? Lk.c.AddTagsTo(fk, ik.tags) : Lk.c.AddTagsTo(fk, kk.tags)), fk.position = jk.o.FromArray(ik.position), void 0 !== ik.metadata && (fk.metadata = ik.metadata), void 0 !== ik.parentId && (fk._waitingParentId = ik.parentId), void 0 !== ik.parentInstanceIndex && (fk._waitingParentInstanceIndex = ik.parentInstanceIndex), void 0 !== ik.isEnabled && null !== ik.isEnabled && fk.bV(ik.isEnabled), void 0 !== ik.isVisible && null !== ik.isVisible && (fk.isVisible = ik.isVisible), void 0 !== ik.Pw && null !== ik.Pw && (fk.Pw = ik.Pw), ik.rotationQuaternion ? fk.rotationQuaternion = jk.c.FromArray(ik.rotationQuaternion) : ik.rotation && (fk.rotation = jk.o.FromArray(ik.rotation)), fk.wi = jk.o.FromArray(ik.wi), void 0 != ik.checkCollisions && null != ik.checkCollisions && (fk.checkCollisions = ik.checkCollisions), void 0 != ik.pickable && null != ik.pickable && (fk.Pw = ik.pickable), void 0 != ik.showBoundingBox && null != ik.showBoundingBox && (fk.showBoundingBox = ik.showBoundingBox), void 0 != ik.showSubMeshesBoundingBox && null != ik.showSubMeshesBoundingBox && (fk.showSubMeshesBoundingBox = ik.showSubMeshesBoundingBox), void 0 != ik.alphaIndex && null != ik.showSubMeshesBoundingBox && (fk.alphaIndex = ik.alphaIndex), ik.physicsImpostor && (fk.physicsImpostor = Rk._PhysicsImpostorParser(ek, fk, ik)), void 0 !== ik.actions && (fk._waitingData.actions = ik.actions), ik.animations) {
              for (let kk = 0; kk < ik.animations.length; kk++) {
                const ek = ik.animations[kk],
                  Dk = (0, Wk.d)("BABYLON.Animation");
                Dk && fk.animations.push(Dk.Parse(ek))
              }
              dk.b.ParseAnimationRanges(fk, ik, ek), ik.autoAnimate && ek.beginAnimation(fk, ik.autoAnimateFrom, ik.autoAnimateTo, ik.autoAnimateLoop, ik.autoAnimateSpeed || 1)
            }
          }
        if (kk.thinInstances) {
          const ek = kk.thinInstances;
          if (Dk.Pek = !!ek.enablePicking, ek.matrixData ? (Dk.i6("matrix", new Float32Array(ek.matrixData), 16, !1), Dk._thinInstanceDataStorage.matrixBufferSize = ek.matrixBufferSize, Dk._thinInstanceDataStorage.instancesCount = ek.instancesCount) : Dk._thinInstanceDataStorage.matrixBufferSize = ek.matrixBufferSize, kk.thinInstances.userThinInstance) {
            const ek = kk.thinInstances.userThinInstance;
            for (const kk in ek.data) Dk.i6(kk, new Float32Array(ek.data[kk]), ek.strides[kk], !1), Dk._userThinInstanceBuffersStorage.sizes[kk] = ek.sizes[kk]
          }
        }
        return Dk
      }
      setPositionsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourcePositions) {
          const ek = this.getVerticesData(Vk.e.PositionKind);
          if (!ek) return kk._sourcePositions;
          kk._sourcePositions = new Float32Array(ek), this.isVertexBufferUpdatable(Vk.e.PositionKind) || this.setVerticesData(Vk.e.PositionKind, ek, !0)
        }
        return kk._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const kk = this._internalMeshDataInfo;
        if (!kk._sourceNormals) {
          const ek = this.getVerticesData(Vk.e.NormalKind);
          if (!ek) return kk._sourceNormals;
          kk._sourceNormals = new Float32Array(ek), this.isVertexBufferUpdatable(Vk.e.NormalKind) || this.setVerticesData(Vk.e.NormalKind, ek, !0)
        }
        return kk._sourceNormals
      }
      applySkeleton(kk) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.XF().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.XF().getFrameId(), !this.isVerticesDataPresent(Vk.e.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Vk.e.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Vk.e.MatricesWeightsKind)) return this;
        const ek = this.isVerticesDataPresent(Vk.e.NormalKind),
          ik = this._internalMeshDataInfo;
        if (!ik._sourcePositions) {
          const kk = this.TY.slice();
          this.setPositionsForCPUSkinning(), this.TY = kk
        }
        ek && !ik._sourceNormals && this.setNormalsForCPUSkinning();
        let Dk = this.getVerticesData(Vk.e.PositionKind);
        if (!Dk) return this;
        Dk instanceof Float32Array || (Dk = new Float32Array(Dk));
        let fk = this.getVerticesData(Vk.e.NormalKind);
        if (ek) {
          if (!fk) return this;
          fk instanceof Float32Array || (fk = new Float32Array(fk))
        }
        const Sk = this.getVerticesData(Vk.e.MatricesIndicesKind),
          bk = this.getVerticesData(Vk.e.MatricesWeightsKind);
        if (!bk || !Sk) return this;
        const rk = this.numBoneInfluencers > 4,
          Pk = rk ? this.getVerticesData(Vk.e.MatricesIndicesExtraKind) : null,
          mk = rk ? this.getVerticesData(Vk.e.MatricesWeightsExtraKind) : null,
          Mk = kk.getTransformMatrices(this),
          Kk = jk.o.Zero(),
          xk = new jk.b,
          nk = new jk.b;
        let Uk, Hk = 0;
        for (let wk = 0; wk < Dk.length; wk += 3, Hk += 4) {
          let kk;
          for (Uk = 0; Uk < 4; Uk++) kk = bk[Hk + Uk], kk > 0 && (jk.b.FromFloat32ArrayToRefScaled(Mk, Math.floor(16 * Sk[Hk + Uk]), kk, nk), xk.addToSelf(nk));
          if (rk)
            for (Uk = 0; Uk < 4; Uk++) kk = mk[Hk + Uk], kk > 0 && (jk.b.FromFloat32ArrayToRefScaled(Mk, Math.floor(16 * Pk[Hk + Uk]), kk, nk), xk.addToSelf(nk));
          jk.o.TransformCoordinatesFromFloatsToRef(ik._sourcePositions[wk], ik._sourcePositions[wk + 1], ik._sourcePositions[wk + 2], xk, Kk), Kk.toArray(Dk, wk), ek && (jk.o.TransformNormalFromFloatsToRef(ik._sourceNormals[wk], ik._sourceNormals[wk + 1], ik._sourceNormals[wk + 2], xk, Kk), Kk.toArray(fk, wk)), xk.reset()
        }
        return this.updateVerticesData(Vk.e.PositionKind, Dk), ek && this.updateVerticesData(Vk.e.NormalKind, fk), this
      }
      static MinMax(kk) {
        let ek = null,
          ik = null;
        for (const Dk of kk) {
          const kk = Dk.hq().boundingBox;
          ek && ik ? (ek.minimizeInPlace(kk.minimumWorld), ik.maximizeInPlace(kk.maximumWorld)) : (ek = kk.minimumWorld.clone(), ik = kk.maximumWorld.clone())
        }
        return ek && ik ? {
          min: ek,
          max: ik
        } : {
          min: jk.o.Zero(),
          max: jk.o.Zero()
        }
      }
      static Center(kk) {
        const ek = kk instanceof Array ? Rk.MinMax(kk) : kk;
        return jk.o.Center(ek.min, ek.max)
      }
      static MergeMeshes(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Ck.k)(Rk._MergeMeshesCoroutine(kk, ek, ik, Dk, fk, Sk, !1))
      }
      static async MergeMeshesAsync(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Ck.h)(Rk._MergeMeshesCoroutine(kk, ek, ik, Dk, fk, Sk, !0), (0, Ck.d)())
      }
      static * _MergeMeshesCoroutine(kk) {
        let ek, ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Dk = arguments.length > 2 ? arguments[2] : void 0,
          fk = arguments.length > 3 ? arguments[3] : void 0,
          Sk = arguments.length > 4 ? arguments[4] : void 0,
          bk = arguments.length > 5 ? arguments[5] : void 0,
          rk = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (kk = kk.filter(Boolean)).length) return null;
        if (!Dk) {
          let ik = 0;
          for (ek = 0; ek < kk.length; ek++)
            if (ik += kk[ek].getTotalVertices(), ik >= 65536) return ak.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Pk = kk[0];
        bk && (Sk = !1, kk.sort(((kk, ek) => (kk.material?.uniqueId ?? -1) - (ek.material?.uniqueId ?? -1))));
        const mk = new Array,
          Mk = new Array,
          Kk = new Array,
          xk = kk[0].sideOrientation;
        for (ek = 0; ek < kk.length; ek++) {
          const ik = kk[ek];
          if (ik.JF) return ak.b.Warn("Cannot merge instance meshes."), null;
          if (xk !== ik.sideOrientation) return ak.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Sk || bk) {
            const kk = Kk.reduce(((kk, ek) => Math.max(kk, ek.start + ek.count)), 0);
            if (bk)
              if (ik.material) {
                const ek = ik.material;
                if (ek instanceof vk.e) {
                  for (let kk = 0; kk < ek.M6.length; kk++) mk.indexOf(ek.M6[kk]) < 0 && mk.push(ek.M6[kk]);
                  for (let Dk = 0; Dk < ik.TY.length; Dk++) Mk.push(mk.indexOf(ek.M6[ik.TY[Dk].materialIndex])), Kk.push({
                    start: kk + ik.TY[Dk].indexStart,
                    count: ik.TY[Dk].indexCount
                  })
                } else {
                  mk.indexOf(ek) < 0 && mk.push(ek);
                  for (let Dk = 0; Dk < ik.TY.length; Dk++) Mk.push(mk.indexOf(ek)), Kk.push({
                    start: kk + ik.TY[Dk].indexStart,
                    count: ik.TY[Dk].indexCount
                  })
                }
              } else
                for (let ek = 0; ek < ik.TY.length; ek++) Mk.push(0), Kk.push({
                  start: kk + ik.TY[ek].indexStart,
                  count: ik.TY[ek].indexCount
                });
            else Kk.push({
              start: kk,
              count: ik.getTotalIndices()
            })
          }
        }
        if (bk && Kk.length > 1) {
          let kk = 0;
          for (let ek = 1; ek < Kk.length; ek++) {
            const ik = Kk[kk],
              Dk = Kk[ek];
            Mk[ek] === Mk[kk] && ik.start + ik.count === Dk.start ? ik.count += Dk.count : (kk++, Kk[kk] = Dk, Mk[kk] = Mk[ek])
          }
          Kk.length = kk + 1, Mk.length = kk + 1
        }
        const nk = kk => {
            const ek = kk.computeWorldMatrix(!0);
            return {
              vertexData: Fk.b.ExtractFromMesh(kk, !1, !1),
              transform: ek
            }
          },
          {
            vertexData: Uk,
            transform: Hk
          } = nk(kk[0]);
        rk && (yield);
        const wk = new Array(kk.length - 1);
        for (let Ck = 1; Ck < kk.length; Ck++) wk[Ck - 1] = nk(kk[Ck]), rk && (yield);
        const lk = Uk._mergeCoroutine(Hk, wk, Dk, rk, !ik);
        let pk = lk.next();
        for (; !pk.done;) rk && (yield), pk = lk.next();
        const yk = pk.value;
        fk || (fk = new Rk(Pk.name + "_merged", Pk.XF()));
        const Yk = yk._applyToCoroutine(fk, void 0, rk);
        let Lk = Yk.next();
        for (; !Lk.done;) rk && (yield), Lk = Yk.next();
        if (fk.checkCollisions = Pk.checkCollisions, fk.sideOrientation = Pk.sideOrientation, ik)
          for (ek = 0; ek < kk.length; ek++) kk[ek].dispose();
        if (Sk || bk) {
          for (fk.releaseSubMeshes(), ek = 0; ek < Kk.length;) Ik.e.CreateFromIndices(0, Kk[ek].start, Kk[ek].count, fk, void 0, !1), ek++;
          for (const kk of fk.TY) kk.refreshBoundingInfo();
          fk.computeWorldMatrix(!0)
        }
        if (bk) {
          const kk = new vk.e(Pk.name + "_merged", Pk.XF());
          kk.M6 = mk;
          for (let ek = 0; ek < fk.TY.length; ek++) fk.TY[ek].materialIndex = Mk[ek];
          fk.material = kk
        } else fk.material = Pk.material;
        return fk
      }
      N_(kk) {
        kk._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(kk)
      }
      J_(kk) {
        const ek = kk._indexInSourceMeshInstanceArray;
        if (-1 != ek) {
          if (ek !== this.instances.length - 1) {
            const kk = this.instances[this.instances.length - 1];
            this.instances[ek] = kk, kk._indexInSourceMeshInstanceArray = ek
          }
          kk._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === zk.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(kk) {
        const ek = this.XF();
        return ek.forcePointsCloud ? zk.e.PointFillMode : ek.forceWireframe ? zk.e.WireFrameFillMode : this.overrideRenderingFillMode ?? kk
      }
      setMaterialByID(kk) {
        return this.setMaterialById(kk)
      }
      static CreateRibbon(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(kk, ek, ik, Dk, fk, Sk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(kk, ek, ik, Dk, fk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(kk, ek, ik, Dk, fk, Sk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(kk, ek, ik, Dk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(kk, ek, ik, Dk, fk, Sk, bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(kk, ek, ik, Dk, fk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(kk, ek, ik, Dk, fk, Sk, bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(kk, ek, ik, Dk, fk, Sk, bk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(kk, ek, ik, Dk, fk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(kk, ek, ik, Dk, fk, Sk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(kk, ek, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(kk, ek, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(kk, ek, ik, Dk, fk, Sk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(kk, ek, ik) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(kk) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    Rk.FRONTSIDE = Fk.b.FRONTSIDE, Rk.BACKSIDE = Fk.b.BACKSIDE, Rk.DOUBLESIDE = Fk.b.DOUBLESIDE, Rk.DEFAULTSIDE = Fk.b.DEFAULTSIDE, Rk.NO_CAP = 0, Rk.CAP_START = 1, Rk.CAP_END = 2, Rk.CAP_ALL = 3, Rk.NO_FLIP = 0, Rk.FLIP_TILE = 1, Rk.ROTATE_TILE = 2, Rk.FLIP_ROW = 3, Rk.ROTATE_ROW = 4, Rk.FLIP_N_ROTATE_TILE = 5, Rk.FLIP_N_ROTATE_ROW = 6, Rk.CENTER = 0, Rk.LEFT = 1, Rk.RIGHT = 2, Rk.TOP = 3, Rk.BOTTOM = 4, Rk.INSTANCEDMESH_SORT_TRANSPARENT = !1, Rk._GroundMeshParser = (kk, ek) => {
      throw (0, tk.k)("GroundMesh")
    }, Rk._GoldbergMeshParser = (kk, ek) => {
      throw (0, tk.k)("GoldbergMesh")
    }, Rk._LinesMeshParser = (kk, ek) => {
      throw (0, tk.k)("LinesMesh")
    }, Rk._GreasedLineMeshParser = (kk, ek) => {
      throw (0, tk.k)("GreasedLineMesh")
    }, Rk._GreasedLineRibbonMeshParser = (kk, ek) => {
      throw (0, tk.k)("GreasedLineRibbonMesh")
    }, Rk._TrailMeshParser = (kk, ek) => {
      throw (0, tk.k)("TrailMesh")
    }, Rk._GaussianSplattingMeshParser = (kk, ek) => {
      throw (0, tk.k)("GaussianSplattingMesh")
    }, Rk._GaussianSplattingPartProxyMeshParser = (kk, ek) => {
      throw (0, tk.k)("GaussianSplattingPartProxyMesh")
    }, Rk._GaussianSplattingCompoundMeshParser = (kk, ek) => {
      throw (0, tk.k)("GaussianSplattingCompoundMesh")
    };
    let Jk = !1;

    function ke() {
      Jk || (Jk = !0, (0, Wk.h)("BABYLON.Mesh", Rk))
    }(Dk = Rk.prototype).uq ?? (Dk.uq = (0, tk.i)("Mesh", "uq")), (fk = Rk.prototype).simplify ?? (fk.simplify = (0, tk.i)("Mesh", "simplify")), (Sk = Rk.prototype).thinInstanceAdd ?? (Sk.thinInstanceAdd = (0, tk.i)("Mesh", "thinInstanceAdd")), (bk = Rk.prototype).thinInstanceAddSelf ?? (bk.thinInstanceAddSelf = (0, tk.i)("Mesh", "thinInstanceAddSelf")), (rk = Rk.prototype).thinInstanceRegisterAttribute ?? (rk.thinInstanceRegisterAttribute = (0, tk.i)("Mesh", "thinInstanceRegisterAttribute")), (Pk = Rk.prototype).thinInstanceSetMatrixAt ?? (Pk.thinInstanceSetMatrixAt = (0, tk.i)("Mesh", "thinInstanceSetMatrixAt")), (mk = Rk.prototype).thinInstanceSetAttributeAt ?? (mk.thinInstanceSetAttributeAt = (0, tk.i)("Mesh", "thinInstanceSetAttributeAt")), (Mk = Rk.prototype).i6 ?? (Mk.i6 = (0, tk.i)("Mesh", "i6")), (Kk = Rk.prototype).thinInstanceGetWorldMatrices ?? (Kk.thinInstanceGetWorldMatrices = (0, tk.i)("Mesh", "thinInstanceGetWorldMatrices")), (xk = Rk.prototype).Z2 ?? (xk.Z2 = (0, tk.i)("Mesh", "Z2")), (nk = Rk.prototype).thinInstancePartialBufferUpdate ?? (nk.thinInstancePartialBufferUpdate = (0, tk.i)("Mesh", "thinInstancePartialBufferUpdate")), (Uk = Rk.prototype).thinInstanceRefreshBoundingInfo ?? (Uk.thinInstanceRefreshBoundingInfo = (0, tk.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (Hk = Rk.prototype).getEmittedParticleSystems ?? (Hk.getEmittedParticleSystems = (0, tk.i)("Mesh", "getEmittedParticleSystems")), (wk = Rk.prototype).getHierarchyEmittedParticleSystems ?? (wk.getHierarchyEmittedParticleSystems = (0, tk.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(Rk.prototype, "edgesShareWithInstances") || Object.defineProperty(Rk.prototype, "edgesShareWithInstances", (0, tk.h)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(Rk.prototype, "Pek") || Object.defineProperty(Rk.prototype, "Pek", (0, tk.h)("Mesh", "Pek")), Object.getOwnPropertyDescriptor(Rk.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(Rk.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, tk.h)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(Rk.prototype, "h_") || Object.defineProperty(Rk.prototype, "h_", (0, tk.h)("Mesh", "h_"))
  },
  40001: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Uk
    });
    var Dk = ik(39566),
      fk = ik(36698),
      Sk = ik(39708),
      bk = ik(39447),
      rk = ik(36874),
      Pk = ik(38272),
      mk = ik(39570),
      Mk = ik(39999),
      Kk = ik(39617),
      xk = ik(39870);
    class nk {}
    let Uk = (() => {
      var kk;
      let ek, ik, Uk, Hk, wk = [];
      return kk = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Mk.f)(this._applyToCoroutine.bind(this)), this.uniqueId = kk._UniqueIdGenerator, kk._UniqueIdGenerator++
        }
        set(kk, ek) {
          switch (kk.length || Pk.b.Warn(`Setting vertex data kind '${ek}' with an empty array`), ek) {
            case Sk.e.PositionKind:
              this.positions = kk;
              break;
            case Sk.e.NormalKind:
              this.normals = kk;
              break;
            case Sk.e.TangentKind:
              this.tangents = kk;
              break;
            case Sk.e.UVKind:
              this.uvs = kk;
              break;
            case Sk.e.UV2Kind:
              this.uvs2 = kk;
              break;
            case Sk.e.UV3Kind:
              this.uvs3 = kk;
              break;
            case Sk.e.UV4Kind:
              this.uvs4 = kk;
              break;
            case Sk.e.UV5Kind:
              this.uvs5 = kk;
              break;
            case Sk.e.UV6Kind:
              this.uvs6 = kk;
              break;
            case Sk.e.ColorKind:
              this.colors = kk;
              break;
            case Sk.e.MatricesIndicesKind:
              this.matricesIndices = kk;
              break;
            case Sk.e.MatricesWeightsKind:
              this.matricesWeights = kk;
              break;
            case Sk.e.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = kk;
              break;
            case Sk.e.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = kk
          }
        }
        applyToMesh(kk, ek) {
          return this._applyTo(kk, ek, !1), this
        }
        applyToGeometry(kk, ek) {
          return this._applyTo(kk, ek, !1), this
        }
        updateMesh(kk) {
          return this._update(kk), this
        }
        updateGeometry(kk) {
          return this._update(kk), this
        }* _applyToCoroutine(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ik = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (kk.setVerticesData(Sk.e.PositionKind, this.positions, ek), ik && (yield)), this.normals && (kk.setVerticesData(Sk.e.NormalKind, this.normals, ek), ik && (yield)), this.tangents && (kk.setVerticesData(Sk.e.TangentKind, this.tangents, ek), ik && (yield)), this.uvs && (kk.setVerticesData(Sk.e.UVKind, this.uvs, ek), ik && (yield)), this.uvs2 && (kk.setVerticesData(Sk.e.UV2Kind, this.uvs2, ek), ik && (yield)), this.uvs3 && (kk.setVerticesData(Sk.e.UV3Kind, this.uvs3, ek), ik && (yield)), this.uvs4 && (kk.setVerticesData(Sk.e.UV4Kind, this.uvs4, ek), ik && (yield)), this.uvs5 && (kk.setVerticesData(Sk.e.UV5Kind, this.uvs5, ek), ik && (yield)), this.uvs6 && (kk.setVerticesData(Sk.e.UV6Kind, this.uvs6, ek), ik && (yield)), this.colors) {
            const Dk = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            kk.setVerticesData(Sk.e.ColorKind, this.colors, ek, Dk), this.hasVertexAlpha && void 0 !== kk.hasVertexAlpha && (kk.hasVertexAlpha = !0), ik && (yield)
          }
          if (this.matricesIndices && (kk.setVerticesData(Sk.e.MatricesIndicesKind, this.matricesIndices, ek), ik && (yield)), this.matricesWeights && (kk.setVerticesData(Sk.e.MatricesWeightsKind, this.matricesWeights, ek), ik && (yield)), this.matricesIndicesExtra && (kk.setVerticesData(Sk.e.MatricesIndicesExtraKind, this.matricesIndicesExtra, ek), ik && (yield)), this.matricesWeightsExtra && (kk.setVerticesData(Sk.e.MatricesWeightsExtraKind, this.matricesWeightsExtra, ek), ik && (yield)), this.indices ? (kk.setIndices(this.indices, null, ek), ik && (yield)) : kk.setIndices([], null), kk.TY && this.materialInfos && this.materialInfos.length > 1) {
            const ek = kk;
            ek.TY = [];
            for (const kk of this.materialInfos) new xk.e(kk.materialIndex, kk.verticesStart, kk.verticesCount, kk.indexStart, kk.indexCount, ek)
          }
          return this
        }
        _update(kk, ek, ik) {
          return this.positions && kk.updateVerticesData(Sk.e.PositionKind, this.positions, ek, ik), this.normals && kk.updateVerticesData(Sk.e.NormalKind, this.normals, ek, ik), this.tangents && kk.updateVerticesData(Sk.e.TangentKind, this.tangents, ek, ik), this.uvs && kk.updateVerticesData(Sk.e.UVKind, this.uvs, ek, ik), this.uvs2 && kk.updateVerticesData(Sk.e.UV2Kind, this.uvs2, ek, ik), this.uvs3 && kk.updateVerticesData(Sk.e.UV3Kind, this.uvs3, ek, ik), this.uvs4 && kk.updateVerticesData(Sk.e.UV4Kind, this.uvs4, ek, ik), this.uvs5 && kk.updateVerticesData(Sk.e.UV5Kind, this.uvs5, ek, ik), this.uvs6 && kk.updateVerticesData(Sk.e.UV6Kind, this.uvs6, ek, ik), this.colors && kk.updateVerticesData(Sk.e.ColorKind, this.colors, ek, ik), this.matricesIndices && kk.updateVerticesData(Sk.e.MatricesIndicesKind, this.matricesIndices, ek, ik), this.matricesWeights && kk.updateVerticesData(Sk.e.MatricesWeightsKind, this.matricesWeights, ek, ik), this.matricesIndicesExtra && kk.updateVerticesData(Sk.e.MatricesIndicesExtraKind, this.matricesIndicesExtra, ek, ik), this.matricesWeightsExtra && kk.updateVerticesData(Sk.e.MatricesWeightsExtraKind, this.matricesWeightsExtra, ek, ik), this.indices && kk.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const Sk = fk.j.eH[0],
            bk = fk.j.eH[1];
          for (let rk = ik; rk < ik + Dk; rk += 3) fk.o.FromArrayToRef(kk, rk, Sk), fk.o.TransformCoordinatesToRef(Sk, ek, bk), kk[rk] = bk.x, kk[rk + 1] = bk.y, kk[rk + 2] = bk.z
        }
        static _TransformVector3Normals(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const Sk = fk.j.eH[0],
            bk = fk.j.eH[1];
          for (let rk = ik; rk < ik + Dk; rk += 3) fk.o.FromArrayToRef(kk, rk, Sk), fk.o.TransformNormalToRef(Sk, ek, bk), kk[rk] = bk.x, kk[rk + 1] = bk.y, kk[rk + 2] = bk.z
        }
        static _TransformVector4Normals(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          const Sk = fk.j.Vector4[0],
            bk = fk.j.Vector4[1];
          for (let rk = ik; rk < ik + Dk; rk += 4) fk.p.FromArrayToRef(kk, rk, Sk), fk.p.TransformNormalToRef(Sk, ek, bk), kk[rk] = bk.x, kk[rk + 1] = bk.y, kk[rk + 2] = bk.z, kk[rk + 3] = bk.w
        }
        static _FlipFaces(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.length;
          for (let Dk = ek; Dk < ek + ik; Dk += 3) {
            const ek = kk[Dk + 1];
            kk[Dk + 1] = kk[Dk + 2], kk[Dk + 2] = ek
          }
        }
        transform(ek) {
          const ik = ek.determinant() < 0;
          return this.positions && kk._TransformVector3Coordinates(this.positions, ek), this.normals && kk._TransformVector3Normals(this.normals, ek), this.tangents && kk._TransformVector4Normals(this.tangents, ek), ik && this.indices && kk._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const ek = [];
          for (const ik of this.materialInfos) {
            const Dk = new kk;
            if (this.positions && (Dk.positions = this.positions.slice(3 * ik.verticesStart, 3 * (ik.verticesCount + ik.verticesStart))), this.normals && (Dk.normals = this.normals.slice(3 * ik.verticesStart, 3 * (ik.verticesCount + ik.verticesStart))), this.tangents && (Dk.tangents = this.tangents.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.colors && (Dk.colors = this.colors.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.uvs && (Dk.uvs = this.uvs.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.uvs2 && (Dk.uvs2 = this.uvs2.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.uvs3 && (Dk.uvs3 = this.uvs3.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.uvs4 && (Dk.uvs4 = this.uvs4.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.uvs5 && (Dk.uvs5 = this.uvs5.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.uvs6 && (Dk.uvs6 = this.uvs6.slice(2 * ik.verticesStart, 2 * (ik.verticesCount + ik.verticesStart))), this.matricesIndices && (Dk.matricesIndices = this.matricesIndices.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.matricesIndicesExtra && (Dk.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.matricesWeights && (Dk.matricesWeights = this.matricesWeights.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.matricesWeightsExtra && (Dk.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ik.verticesStart, 4 * (ik.verticesCount + ik.verticesStart))), this.indices) {
              Dk.indices = [];
              for (let kk = ik.indexStart; kk < ik.indexStart + ik.indexCount; kk++) Dk.indices.push(this.indices[kk] - ik.verticesStart)
            }
            const fk = new nk;
            fk.indexStart = 0, fk.indexCount = Dk.indices ? Dk.indices.length : 0, fk.materialIndex = ik.materialIndex, fk.verticesStart = 0, fk.verticesCount = (Dk.positions ? Dk.positions.length : 0) / 3, Dk.materialInfos = [fk], ek.push(Dk)
          }
          return ek
        }
        merge(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Sk = Array.isArray(kk) ? kk.map((kk => ({
            vertexData: kk
          }))) : [{
            vertexData: kk
          }];
          return (0, Mk.k)(this._mergeCoroutine(void 0, Sk, ek, !1, ik, Dk, fk))
        }* _mergeCoroutine(ek, ik) {
          let Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            fk = arguments.length > 3 ? arguments[3] : void 0,
            bk = arguments.length > 4 ? arguments[4] : void 0,
            rk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Pk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let mk = ik.map((kk => kk.vertexData)),
            Mk = this;
          if (Pk)
            for (const kk of mk) kk && (kk._validate(), !this.normals && kk.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && kk.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && kk.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && kk.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && kk.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && kk.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && kk.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && kk.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && kk.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && kk.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && kk.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && kk.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && kk.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const kk of mk)
            if (kk)
              if (Pk) this.normals && !kk.normals && (kk.normals = new Float32Array(kk.positions.length)), this.tangents && !kk.tangents && (kk.tangents = new Float32Array(kk.positions.length / 3 * 4)), this.uvs && !kk.uvs && (kk.uvs = new Float32Array(kk.positions.length / 3 * 2)), this.uvs2 && !kk.uvs2 && (kk.uvs2 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs3 && !kk.uvs3 && (kk.uvs3 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs4 && !kk.uvs4 && (kk.uvs4 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs5 && !kk.uvs5 && (kk.uvs5 = new Float32Array(kk.positions.length / 3 * 2)), this.uvs6 && !kk.uvs6 && (kk.uvs6 = new Float32Array(kk.positions.length / 3 * 2)), this.colors && !kk.colors && (kk.colors = new Float32Array(kk.positions.length / 3 * 4), kk.colors.fill(1)), this.matricesIndices && !kk.matricesIndices && (kk.matricesIndices = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeights && !kk.matricesWeights && (kk.matricesWeights = new Float32Array(kk.positions.length / 3 * 4)), this.matricesIndicesExtra && !kk.matricesIndicesExtra && (kk.matricesIndicesExtra = new Float32Array(kk.positions.length / 3 * 4)), this.matricesWeightsExtra && !kk.matricesWeightsExtra && (kk.matricesWeightsExtra = new Float32Array(kk.positions.length / 3 * 4));
              else if (kk._validate(), !this.normals !== !kk.normals || !this.tangents !== !kk.tangents || !this.uvs !== !kk.uvs || !this.uvs2 !== !kk.uvs2 || !this.uvs3 !== !kk.uvs3 || !this.uvs4 !== !kk.uvs4 || !this.uvs5 !== !kk.uvs5 || !this.uvs6 !== !kk.uvs6 || !this.colors !== !kk.colors || !this.matricesIndices !== !kk.matricesIndices || !this.matricesWeights !== !kk.matricesWeights || !this.matricesIndicesExtra !== !kk.matricesIndicesExtra || !this.matricesWeightsExtra !== !kk.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (rk) {
            let kk, Dk = 0,
              fk = 0;
            const Sk = [];
            let bk = null;
            const rk = [];
            for (const ik of this.splitBasedOnMaterialID()) rk.push({
              vertexData: ik,
              transform: ek
            });
            for (const ek of ik)
              if (ek.vertexData)
                for (const kk of ek.vertexData.splitBasedOnMaterialID()) rk.push({
                  vertexData: kk,
                  transform: ek.transform
                });
            rk.sort(((kk, ek) => {
              const ik = kk.vertexData.materialInfos ? kk.vertexData.materialInfos[0].materialIndex : 0,
                Dk = ek.vertexData.materialInfos ? ek.vertexData.materialInfos[0].materialIndex : 0;
              return ik > Dk ? 1 : ik === Dk ? 0 : -1
            }));
            for (const ek of rk) {
              const ik = ek.vertexData;
              if (kk = ik.materialInfos ? ik.materialInfos[0].materialIndex : 0, bk && bk.materialIndex === kk) bk.indexCount += ik.indices.length, bk.verticesCount += ik.positions.length / 3;
              else {
                const ek = new nk;
                ek.materialIndex = kk, ek.indexStart = Dk, ek.indexCount = ik.indices.length, ek.verticesStart = fk, ek.verticesCount = ik.positions.length / 3, Sk.push(ek), bk = ek
              }
              Dk += ik.indices.length, fk += ik.positions.length / 3
            }
            const Pk = rk.splice(0, 1)[0];
            Mk = Pk.vertexData, ek = Pk.transform, mk = rk.map((kk => kk.vertexData)), ik = rk, this.materialInfos = Sk
          }
          const Kk = mk.reduce(((kk, ek) => kk + (ek.indices?.length ?? 0)), Mk.indices?.length ?? 0);
          let xk = bk || mk.some((kk => kk.indices === Mk.indices)) ? Mk.indices?.slice() : Mk.indices;
          if (Kk > 0) {
            let Sk = xk?.length ?? 0;
            if (xk || (xk = new Array(Kk)), xk.length !== Kk) {
              if (Array.isArray(xk)) xk.length = Kk;
              else {
                const kk = Dk || xk instanceof Uint32Array ? new Uint32Array(Kk) : new Uint16Array(Kk);
                kk.set(xk), xk = kk
              }
              ek && ek.determinant() < 0 && kk._FlipFaces(xk, 0, Sk)
            }
            let bk = Mk.positions ? Mk.positions.length / 3 : 0;
            for (const {
                vertexData: ek,
                transform: Dk
              }
              of ik)
              if (ek.indices) {
                for (let kk = 0; kk < ek.indices.length; kk++) xk[Sk + kk] = ek.indices[kk] + bk;
                Dk && Dk.determinant() < 0 && kk._FlipFaces(xk, Sk, ek.indices.length), bk += ek.positions.length / 3, Sk += ek.indices.length, fk && (yield)
              }
          }
          return this.indices = xk, this.positions = kk._MergeElement(Sk.e.PositionKind, Mk.positions, ek, ik.map((kk => [kk.vertexData.positions, kk.transform]))), fk && (yield), Mk.normals && (this.normals = kk._MergeElement(Sk.e.NormalKind, Mk.normals, ek, ik.map((kk => [kk.vertexData.normals, kk.transform]))), fk && (yield)), Mk.tangents && (this.tangents = kk._MergeElement(Sk.e.TangentKind, Mk.tangents, ek, ik.map((kk => [kk.vertexData.tangents, kk.transform]))), fk && (yield)), Mk.uvs && (this.uvs = kk._MergeElement(Sk.e.UVKind, Mk.uvs, ek, ik.map((kk => [kk.vertexData.uvs, kk.transform]))), fk && (yield)), Mk.uvs2 && (this.uvs2 = kk._MergeElement(Sk.e.UV2Kind, Mk.uvs2, ek, ik.map((kk => [kk.vertexData.uvs2, kk.transform]))), fk && (yield)), Mk.uvs3 && (this.uvs3 = kk._MergeElement(Sk.e.UV3Kind, Mk.uvs3, ek, ik.map((kk => [kk.vertexData.uvs3, kk.transform]))), fk && (yield)), Mk.uvs4 && (this.uvs4 = kk._MergeElement(Sk.e.UV4Kind, Mk.uvs4, ek, ik.map((kk => [kk.vertexData.uvs4, kk.transform]))), fk && (yield)), Mk.uvs5 && (this.uvs5 = kk._MergeElement(Sk.e.UV5Kind, Mk.uvs5, ek, ik.map((kk => [kk.vertexData.uvs5, kk.transform]))), fk && (yield)), Mk.uvs6 && (this.uvs6 = kk._MergeElement(Sk.e.UV6Kind, Mk.uvs6, ek, ik.map((kk => [kk.vertexData.uvs6, kk.transform]))), fk && (yield)), Mk.colors && (this.colors = kk._MergeElement(Sk.e.ColorKind, Mk.colors, ek, ik.map((kk => [kk.vertexData.colors, kk.transform]))), (void 0 !== Mk.hasVertexAlpha || ik.some((kk => void 0 !== kk.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Mk.hasVertexAlpha || ik.some((kk => kk.vertexData.hasVertexAlpha))), fk && (yield)), Mk.matricesIndices && (this.matricesIndices = kk._MergeElement(Sk.e.MatricesIndicesKind, Mk.matricesIndices, ek, ik.map((kk => [kk.vertexData.matricesIndices, kk.transform]))), fk && (yield)), Mk.matricesWeights && (this.matricesWeights = kk._MergeElement(Sk.e.MatricesWeightsKind, Mk.matricesWeights, ek, ik.map((kk => [kk.vertexData.matricesWeights, kk.transform]))), fk && (yield)), Mk.matricesIndicesExtra && (this.matricesIndicesExtra = kk._MergeElement(Sk.e.MatricesIndicesExtraKind, Mk.matricesIndicesExtra, ek, ik.map((kk => [kk.vertexData.matricesIndicesExtra, kk.transform]))), fk && (yield)), Mk.matricesWeightsExtra && (this.matricesWeightsExtra = kk._MergeElement(Sk.e.MatricesWeightsExtraKind, Mk.matricesWeightsExtra, ek, ik.map((kk => [kk.vertexData.matricesWeightsExtra, kk.transform])))), this
        }
        static _MergeElement(ek, ik, Dk, fk) {
          const bk = fk.filter((kk => null !== kk[0] && void 0 !== kk[0]));
          if (!ik && 0 == bk.length) return ik;
          if (!ik) return this._MergeElement(ek, bk[0][0], bk[0][1], bk.slice(1));
          const rk = bk.reduce(((kk, ek) => kk + ek[0].length), ik.length),
            Pk = ek === Sk.e.PositionKind ? kk._TransformVector3Coordinates : ek === Sk.e.NormalKind ? kk._TransformVector3Normals : ek === Sk.e.TangentKind ? kk._TransformVector4Normals : () => {};
          if (ik instanceof Float32Array) {
            const kk = new Float32Array(rk);
            kk.set(ik), Dk && Pk(kk, Dk, 0, ik.length);
            let ek = ik.length;
            for (const [ik, Dk] of bk) kk.set(ik, ek), Dk && Pk(kk, Dk, ek, ik.length), ek += ik.length;
            return kk
          } {
            const kk = new Array(rk);
            for (let Dk = 0; Dk < ik.length; Dk++) kk[Dk] = ik[Dk];
            Dk && Pk(kk, Dk, 0, ik.length);
            let ek = ik.length;
            for (const [ik, Dk] of bk) {
              for (let Dk = 0; Dk < ik.length; Dk++) kk[ek + Dk] = ik[Dk];
              Dk && Pk(kk, Dk, ek, ik.length), ek += ik.length
            }
            return kk
          }
        }
        _validate() {
          if (!this.positions) throw new Kk.j("Positions are required", Kk.g.MeshInvalidPositionsError);
          const kk = (kk, ek) => {
              const ik = (0, Sk.d)(kk);
              if (ek.length % ik !== 0) throw new Error("The " + kk + "s array count must be a multiple of " + ik);
              return ek.length / ik
            },
            ek = kk(Sk.e.PositionKind, this.positions),
            ik = (ik, Dk) => {
              const fk = kk(ik, Dk);
              if (fk !== ek) throw new Error("The " + ik + "s element count (" + fk + ") does not match the positions count (" + ek + ")")
            };
          this.normals && ik(Sk.e.NormalKind, this.normals), this.tangents && ik(Sk.e.TangentKind, this.tangents), this.uvs && ik(Sk.e.UVKind, this.uvs), this.uvs2 && ik(Sk.e.UV2Kind, this.uvs2), this.uvs3 && ik(Sk.e.UV3Kind, this.uvs3), this.uvs4 && ik(Sk.e.UV4Kind, this.uvs4), this.uvs5 && ik(Sk.e.UV5Kind, this.uvs5), this.uvs6 && ik(Sk.e.UV6Kind, this.uvs6), this.colors && ik(Sk.e.ColorKind, this.colors), this.matricesIndices && ik(Sk.e.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ik(Sk.e.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ik(Sk.e.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ik(Sk.e.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const ek = this.serialize();
          return kk.Parse(ek)
        }
        serialize() {
          const kk = {};
          if (this.positions && (kk.positions = Array.from(this.positions)), this.normals && (kk.normals = Array.from(this.normals)), this.tangents && (kk.tangents = Array.from(this.tangents)), this.uvs && (kk.uvs = Array.from(this.uvs)), this.uvs2 && (kk.uvs2 = Array.from(this.uvs2)), this.uvs3 && (kk.uvs3 = Array.from(this.uvs3)), this.uvs4 && (kk.uvs4 = Array.from(this.uvs4)), this.uvs5 && (kk.uvs5 = Array.from(this.uvs5)), this.uvs6 && (kk.uvs6 = Array.from(this.uvs6)), this.colors && (kk.colors = Array.from(this.colors), kk.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (kk.matricesIndices = Array.from(this.matricesIndices), kk.matricesIndicesExpanded = !0), this.matricesWeights && (kk.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (kk.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), kk.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (kk.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), kk.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            kk.materialInfos = [];
            for (const ek of this.materialInfos) {
              const ik = {
                indexStart: ek.indexStart,
                indexCount: ek.indexCount,
                materialIndex: ek.materialIndex,
                verticesStart: ek.verticesStart,
                verticesCount: ek.verticesCount
              };
              kk.materialInfos.push(ik)
            }
          }
          return kk
        }
        static ExtractFromMesh(ek, ik, Dk) {
          return kk._ExtractFrom(ek, ik, Dk)
        }
        static ExtractFromGeometry(ek, ik, Dk) {
          return kk._ExtractFrom(ek, ik, Dk)
        }
        static _ExtractFrom(ek, ik, Dk) {
          const fk = new kk;
          if (ek.isVerticesDataPresent(Sk.e.PositionKind) && (fk.positions = ek.getVerticesData(Sk.e.PositionKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.NormalKind) && (fk.normals = ek.getVerticesData(Sk.e.NormalKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.TangentKind) && (fk.tangents = ek.getVerticesData(Sk.e.TangentKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UVKind) && (fk.uvs = ek.getVerticesData(Sk.e.UVKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UV2Kind) && (fk.uvs2 = ek.getVerticesData(Sk.e.UV2Kind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UV3Kind) && (fk.uvs3 = ek.getVerticesData(Sk.e.UV3Kind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UV4Kind) && (fk.uvs4 = ek.getVerticesData(Sk.e.UV4Kind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UV5Kind) && (fk.uvs5 = ek.getVerticesData(Sk.e.UV5Kind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.UV6Kind) && (fk.uvs6 = ek.getVerticesData(Sk.e.UV6Kind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.ColorKind)) {
            const kk = ek.geometry || ek,
              bk = kk.getVertexBuffer(Sk.e.ColorKind),
              rk = kk.getVerticesData(Sk.e.ColorKind, ik, Dk);
            if (3 === bk.getSize()) {
              const kk = new Float32Array(4 * rk.length / 3);
              for (let ek = 0, ik = 0; ek < rk.length; ek += 3, ik += 4) kk[ik] = rk[ek], kk[ik + 1] = rk[ek + 1], kk[ik + 2] = rk[ek + 2], kk[ik + 3] = 1;
              fk.colors = kk
            } else {
              if (4 !== bk.getSize()) throw new Error(`Unexpected number of color components: ${bk.getSize()}`);
              fk.colors = rk
            }
          }
          return ek.isVerticesDataPresent(Sk.e.MatricesIndicesKind) && (fk.matricesIndices = ek.getVerticesData(Sk.e.MatricesIndicesKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.MatricesWeightsKind) && (fk.matricesWeights = ek.getVerticesData(Sk.e.MatricesWeightsKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.MatricesIndicesExtraKind) && (fk.matricesIndicesExtra = ek.getVerticesData(Sk.e.MatricesIndicesExtraKind, ik, Dk)), ek.isVerticesDataPresent(Sk.e.MatricesWeightsExtraKind) && (fk.matricesWeightsExtra = ek.getVerticesData(Sk.e.MatricesWeightsExtraKind, ik, Dk)), fk.indices = ek.oik(ik, Dk), fk
        }
        static CreateRibbon(kk) {
          throw (0, bk.k)("ribbonBuilder")
        }
        static CreateBox(kk) {
          throw (0, bk.k)("boxBuilder")
        }
        static CreateTiledBox(kk) {
          throw (0, bk.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(kk) {
          throw (0, bk.k)("tiledPlaneBuilder")
        }
        static CreateSphere(kk) {
          throw (0, bk.k)("sphereBuilder")
        }
        static CreateCylinder(kk) {
          throw (0, bk.k)("cylinderBuilder")
        }
        static CreateTorus(kk) {
          throw (0, bk.k)("torusBuilder")
        }
        static CreateLineSystem(kk) {
          throw (0, bk.k)("linesBuilder")
        }
        static CreateDashedLines(kk) {
          throw (0, bk.k)("linesBuilder")
        }
        static CreateGround(kk) {
          throw (0, bk.k)("groundBuilder")
        }
        static CreateTiledGround(kk) {
          throw (0, bk.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(kk) {
          throw (0, bk.k)("groundBuilder")
        }
        static CreatePlane(kk) {
          throw (0, bk.k)("planeBuilder")
        }
        static CreateDisc(kk) {
          throw (0, bk.k)("discBuilder")
        }
        static CreatePolygon(kk, ek, ik, Dk, fk, Sk, rk) {
          throw (0, bk.k)("polygonBuilder")
        }
        static CreateIcoSphere(kk) {
          throw (0, bk.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(kk) {
          throw (0, bk.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || fk.o.Up();
          throw (0, bk.k)("capsuleBuilder")
        }
        static CreateTorusKnot(kk) {
          throw (0, bk.k)("torusKnotBuilder")
        }
        static ComputeNormals(kk, ek, ik, Dk) {
          let Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk = !1,
            dk = !1,
            Vk = !1,
            Fk = !1,
            uk = 1,
            qk = 0,
            Ik = null;
          Dk && (sk = !!Dk.facetNormals, dk = !!Dk.facetPositions, Vk = !!Dk.facetPartitioning, uk = !0 === Dk.useRightHandedSystem ? -1 : 1, qk = Dk.ratio || 0, Fk = !!Dk.depthSort, Ik = Dk.distanceTo, Fk && void 0 === Ik && (Ik = fk.o.Zero()));
          let zk = 0,
            Qk = 0,
            vk = 0,
            Ek = 0;
          for (Vk && Dk && Dk.bbSize && (zk = Dk.subDiv.X * qk / Dk.bbSize.x, Qk = Dk.subDiv.Y * qk / Dk.bbSize.y, vk = Dk.subDiv.Z * qk / Dk.bbSize.z, Ek = Dk.subDiv.max * Dk.subDiv.max, Dk.facetPartitioning.length = 0), Sk = 0; Sk < kk.length; Sk++) ik[Sk] = 0;
          const hk = ek.length / 3 | 0;
          for (Sk = 0; Sk < hk; Sk++) {
            if (wk = 3 * ek[3 * Sk], lk = wk + 1, pk = wk + 2, yk = 3 * ek[3 * Sk + 1], Yk = yk + 1, Lk = yk + 2, Ck = 3 * ek[3 * Sk + 2], Ak = Ck + 1, jk = Ck + 2, bk = kk[wk] - kk[yk], rk = kk[lk] - kk[Yk], Pk = kk[pk] - kk[Lk], mk = kk[Ck] - kk[yk], Mk = kk[Ak] - kk[Yk], Kk = kk[jk] - kk[Lk], xk = uk * (rk * Kk - Pk * Mk), nk = uk * (Pk * mk - bk * Kk), Uk = uk * (bk * Mk - rk * mk), Hk = Math.sqrt(xk * xk + nk * nk + Uk * Uk), Hk = 0 === Hk ? 1 : Hk, xk /= Hk, nk /= Hk, Uk /= Hk, sk && Dk && (Dk.facetNormals[Sk].x = xk, Dk.facetNormals[Sk].y = nk, Dk.facetNormals[Sk].z = Uk), dk && Dk && (Dk.facetPositions[Sk].x = (kk[wk] + kk[yk] + kk[Ck]) / 3, Dk.facetPositions[Sk].y = (kk[lk] + kk[Yk] + kk[Ak]) / 3, Dk.facetPositions[Sk].z = (kk[pk] + kk[Lk] + kk[jk]) / 3), Vk && Dk) {
              const ek = Math.floor((Dk.facetPositions[Sk].x - Dk.bInfo.minimum.x * qk) * zk),
                ik = Math.floor((Dk.facetPositions[Sk].y - Dk.bInfo.minimum.y * qk) * Qk),
                fk = Math.floor((Dk.facetPositions[Sk].z - Dk.bInfo.minimum.z * qk) * vk),
                bk = Math.floor((kk[wk] - Dk.bInfo.minimum.x * qk) * zk),
                rk = Math.floor((kk[lk] - Dk.bInfo.minimum.y * qk) * Qk),
                Pk = Math.floor((kk[pk] - Dk.bInfo.minimum.z * qk) * vk),
                mk = Math.floor((kk[yk] - Dk.bInfo.minimum.x * qk) * zk),
                Mk = Math.floor((kk[Yk] - Dk.bInfo.minimum.y * qk) * Qk),
                Kk = Math.floor((kk[Lk] - Dk.bInfo.minimum.z * qk) * vk),
                xk = Math.floor((kk[Ck] - Dk.bInfo.minimum.x * qk) * zk),
                nk = Math.floor((kk[Ak] - Dk.bInfo.minimum.y * qk) * Qk),
                Uk = Math.floor((kk[jk] - Dk.bInfo.minimum.z * qk) * vk),
                Hk = bk + Dk.subDiv.max * rk + Ek * Pk,
                sk = mk + Dk.subDiv.max * Mk + Ek * Kk,
                dk = xk + Dk.subDiv.max * nk + Ek * Uk,
                Vk = ek + Dk.subDiv.max * ik + Ek * fk;
              Dk.facetPartitioning[Vk] = Dk.facetPartitioning[Vk] ? Dk.facetPartitioning[Vk] : [], Dk.facetPartitioning[Hk] = Dk.facetPartitioning[Hk] ? Dk.facetPartitioning[Hk] : [], Dk.facetPartitioning[sk] = Dk.facetPartitioning[sk] ? Dk.facetPartitioning[sk] : [], Dk.facetPartitioning[dk] = Dk.facetPartitioning[dk] ? Dk.facetPartitioning[dk] : [], Dk.facetPartitioning[Hk].push(Sk), sk != Hk && Dk.facetPartitioning[sk].push(Sk), dk != sk && dk != Hk && Dk.facetPartitioning[dk].push(Sk), Vk != Hk && Vk != sk && Vk != dk && Dk.facetPartitioning[Vk].push(Sk)
            }
            if (Fk && Dk && Dk.facetPositions) {
              const kk = Dk.depthSortedFacets[Sk];
              kk.ind = 3 * Sk, kk.sqDistance = fk.o.DistanceSquared(Dk.facetPositions[Sk], Ik)
            }
            ik[wk] += xk, ik[lk] += nk, ik[pk] += Uk, ik[yk] += xk, ik[Yk] += nk, ik[Lk] += Uk, ik[Ck] += xk, ik[Ak] += nk, ik[jk] += Uk
          }
          for (Sk = 0; Sk < ik.length / 3; Sk++) xk = ik[3 * Sk], nk = ik[3 * Sk + 1], Uk = ik[3 * Sk + 2], Hk = Math.sqrt(xk * xk + nk * nk + Uk * Uk), Hk = 0 === Hk ? 1 : Hk, xk /= Hk, nk /= Hk, Uk /= Hk, ik[3 * Sk] = xk, ik[3 * Sk + 1] = nk, ik[3 * Sk + 2] = Uk
        }
        static _ComputeSides(ek, ik, Dk, Sk, bk, rk, Pk) {
          const mk = Dk.length,
            Mk = Sk.length;
          let Kk, xk;
          switch (ek = ek || kk.DEFAULTSIDE) {
            case kk.FRONTSIDE:
              break;
            case kk.BACKSIDE:
              for (Kk = 0; Kk < mk; Kk += 3) {
                const kk = Dk[Kk];
                Dk[Kk] = Dk[Kk + 2], Dk[Kk + 2] = kk
              }
              for (xk = 0; xk < Mk; xk++) Sk[xk] = -Sk[xk];
              break;
            case kk.DOUBLESIDE: {
              const kk = ik.length,
                ek = kk / 3;
              for (let Dk = 0; Dk < kk; Dk++) ik[kk + Dk] = ik[Dk];
              for (Kk = 0; Kk < mk; Kk += 3) Dk[Kk + mk] = Dk[Kk + 2] + ek, Dk[Kk + 1 + mk] = Dk[Kk + 1] + ek, Dk[Kk + 2 + mk] = Dk[Kk] + ek;
              for (xk = 0; xk < Mk; xk++) Sk[Mk + xk] = -Sk[xk];
              const nk = bk.length;
              let Uk;
              for (Uk = 0; Uk < nk; Uk++) bk[Uk + nk] = bk[Uk];
              for (rk = rk || new fk.p(0, 0, 1, 1), Pk = Pk || new fk.p(0, 0, 1, 1), Uk = 0, Kk = 0; Kk < nk / 2; Kk++) bk[Uk] = rk.x + (rk.z - rk.x) * bk[Uk], bk[Uk + 1] = rk.y + (rk.w - rk.y) * bk[Uk + 1], bk[Uk + nk] = Pk.x + (Pk.z - Pk.x) * bk[Uk + nk], bk[Uk + nk + 1] = Pk.y + (Pk.w - Pk.y) * bk[Uk + nk + 1], Uk += 2;
              break
            }
          }
        }
        static Parse(ek) {
          const ik = new kk,
            Dk = ek.positions;
          Dk && ik.set(Dk, Sk.e.PositionKind);
          const fk = ek.normals;
          fk && ik.set(fk, Sk.e.NormalKind);
          const bk = ek.tangents;
          bk && ik.set(bk, Sk.e.TangentKind);
          const Pk = ek.uvs;
          Pk && ik.set(Pk, Sk.e.UVKind);
          const mk = ek.uvs2;
          mk && ik.set(mk, Sk.e.UV2Kind);
          const Mk = ek.uvs3;
          Mk && ik.set(Mk, Sk.e.UV3Kind);
          const Kk = ek.uvs4;
          Kk && ik.set(Kk, Sk.e.UV4Kind);
          const xk = ek.uvs5;
          xk && ik.set(xk, Sk.e.UV5Kind);
          const Uk = ek.uvs6;
          Uk && ik.set(Uk, Sk.e.UV6Kind);
          const Hk = ek.colors;
          Hk && (ik.set(rk.f.CheckColors4(Hk, Dk.length / 3), Sk.e.ColorKind), void 0 !== ek.hasVertexAlpha && (ik.hasVertexAlpha = ek.hasVertexAlpha));
          const wk = ek.matricesIndices;
          wk && ik.set(wk, Sk.e.MatricesIndicesKind);
          const lk = ek.matricesWeights;
          lk && ik.set(lk, Sk.e.MatricesWeightsKind);
          const pk = ek.indices;
          pk && (ik.indices = pk);
          const yk = ek.materialInfos;
          if (yk) {
            ik.materialInfos = [];
            for (const kk of yk) {
              const ek = new nk;
              ek.indexCount = kk.indexCount, ek.indexStart = kk.indexStart, ek.verticesCount = kk.verticesCount, ek.verticesStart = kk.verticesStart, ek.materialIndex = kk.materialIndex, ik.materialInfos.push(ek)
            }
          }
          return ik
        }
        static ImportVertexData(ek, ik) {
          const Dk = kk.Parse(ek);
          ik.setAllVerticesData(Dk, ek.updatable)
        }
      }, (() => {
        const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [mk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ik = [mk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Uk = [mk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Hk = [mk.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Dk.d)(kk, null, ek, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Coordinates" in kk,
            get: kk => kk._TransformVector3Coordinates
          },
          metadata: fk
        }, null, wk), (0, Dk.d)(kk, null, ik, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector3Normals" in kk,
            get: kk => kk._TransformVector3Normals
          },
          metadata: fk
        }, null, wk), (0, Dk.d)(kk, null, Uk, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: kk => "_TransformVector4Normals" in kk,
            get: kk => kk._TransformVector4Normals
          },
          metadata: fk
        }, null, wk), (0, Dk.d)(kk, null, Hk, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: kk => "_FlipFaces" in kk,
            get: kk => kk._FlipFaces
          },
          metadata: fk
        }, null, wk), fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fk
        })
      })(), kk.FRONTSIDE = ((0, Dk.e)(kk, wk), 0), kk.BACKSIDE = 1, kk.DOUBLESIDE = 2, kk.DEFAULTSIDE = 0, kk._UniqueIdGenerator = 0, kk
    })()
  },
  40055: (kk, ek, ik) => {
    var Dk = ik(36698),
      fk = ik(38272),
      Sk = ik(39887),
      bk = ik(39997),
      rk = ik(39708);
    const Pk = "bakedVertexAnimationSettingsInstanced";

    function mk(kk) {
      const ek = kk.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return ek instanceof Float32Array || ek instanceof Uint16Array
    }

    function Mk(kk, ek, ik, Dk) {
      ik.A_(Number.POSITIVE_INFINITY), Dk.A_(Number.NEGATIVE_INFINITY);
      for (let fk = 0; fk < 3 * ek; fk += 3) {
        const ek = kk[fk],
          Sk = kk[fk + 1],
          bk = kk[fk + 2];
        ek < ik.x && (ik.x = ek), Sk < ik.y && (ik.y = Sk), bk < ik.z && (ik.z = bk), ek > Dk.x && (Dk.x = ek), Sk > Dk.y && (Dk.y = Sk), bk > Dk.z && (Dk.z = bk)
      }
    }

    function Kk(kk, ek, ik) {
      ik && (kk.x -= kk.x * ik.x + ik.y, kk.y -= kk.y * ik.x + ik.y, kk.z -= kk.z * ik.x + ik.y, ek.x += ek.x * ik.x + ik.y, ek.y += ek.y * ik.x + ik.y, ek.z += ek.z * ik.x + ik.y)
    }

    function xk(kk, ek, ik, fk, Sk) {
      const bk = Dk.j.eH[7],
        rk = Dk.j.eH[8];
      for (let Pk = 0; Pk < 2; ++Pk)
        for (let mk = 0; mk < 2; ++mk)
          for (let Mk = 0; Mk < 2; ++Mk) bk.set(Pk ? ek.x : kk.x, mk ? ek.y : kk.y, Mk ? ek.z : kk.z), Dk.o.TransformCoordinatesToRef(bk, ik, rk), fk.minimizeInPlace(rk), Sk.maximizeInPlace(rk)
    }

    function nk(kk, ek, ik, fk, Sk) {
      const bk = Dk.j.eH[7];
      for (let rk = 0; rk < 3 * ek; rk += 3) Dk.o.TransformCoordinatesFromFloatsToRef(kk[rk], kk[rk + 1], kk[rk + 2], ik, bk), fk.minimizeInPlace(bk), Sk.maximizeInPlace(bk)
    }
    let Uk = !1;
    Uk || (Uk = !0, bk.e.prototype.thinInstanceAdd = function(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.XF().JU().getCaps().instancedArrays) return fk.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(kk) ? kk.length : 1);
      const ik = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(kk))
        for (let Dk = 0; Dk < kk.length; ++Dk) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk[Dk], Dk === kk.length - 1 && ek);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, kk, ek);
      return ik
    }, bk.e.prototype.thinInstanceAddSelf = function() {
      let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Dk.b.IdentityReadOnly, kk)
    }, bk.e.prototype.thinInstanceRegisterAttribute = function(kk, ek) {
      kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), this.removeVerticesData(kk), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[kk] = ek, this._userThinInstanceBuffersStorage.sizes[kk] = ek * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[kk] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[kk]), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new rk.e(this.JU(), this._userThinInstanceBuffersStorage.data[kk], kk, !0, !1, ek, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk])
    }, bk.e.prototype.thinInstanceSetMatrixAt = function(kk, ek) {
      let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || kk >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Dk = this._thinInstanceDataStorage.matrixData;
      return ek.copyToArray(Dk, 16 * kk), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[kk] = ek), ik && (this.Z2("matrix"), this.DH || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, bk.e.prototype.thinInstanceSetAttributeAt = function(kk, ek, ik) {
      let Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[kk] || ek >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(kk, 0), this._userThinInstanceBuffersStorage.data[kk].set(ik, ek * this._userThinInstanceBuffersStorage.strides[kk]), Dk && this.Z2(kk), !0)
    }, Object.defineProperty(bk.e.prototype, "h_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(kk) {
        const ek = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        kk <= (ek ? ek.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = kk)
      },
      enumerable: !0,
      configurable: !0
    }), bk.e.prototype._thinInstanceCreateMatrixBuffer = function(kk, ek) {
      let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Dk = new rk.b(this.JU(), ek, !ik, 16, !1, !0);
      for (let fk = 0; fk < 4; fk++) this.setVerticesBuffer(Dk.createVertexBuffer(kk + fk, 4 * fk, 4));
      return Dk
    }, bk.e.prototype.i6 = function(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ik = ik || 16, "matrix" === kk) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = ek ? ek.length : 32 * ik, this._thinInstanceDataStorage.matrixData = ek, this._thinInstanceDataStorage.worldMatrices = null, null !== ek ? (this._thinInstanceDataStorage.instancesCount = ek.length / ik, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", ek, Dk), this.DH || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.DH || this.refreshBoundingInfo());
      else if ("previousMatrix" === kk) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = ek, null !== ek && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", ek, Dk));
      else if ("splatIndex" === kk && ek) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = ek.length / ik, this._userThinInstanceBuffersStorage.data[kk] = ek, this._userThinInstanceBuffersStorage.strides[kk] = ik, this._userThinInstanceBuffersStorage.sizes[kk] = ek.length;
        const Dk = new rk.b(this.JU(), ek, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Dk;
        for (let ek = 0; ek < 4; ek++) this.setVerticesBuffer(Dk.createVertexBuffer(kk + ek, 4 * ek, 4))
      } else kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), null === ek ? this._userThinInstanceBuffersStorage?.data[kk] && (this.removeVerticesData(kk), delete this._userThinInstanceBuffersStorage.data[kk], delete this._userThinInstanceBuffersStorage.strides[kk], delete this._userThinInstanceBuffersStorage.sizes[kk], delete this._userThinInstanceBuffersStorage.vertexBuffers[kk]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[kk] = ek, this._userThinInstanceBuffersStorage.strides[kk] = ik, this._userThinInstanceBuffersStorage.sizes[kk] = ek.length, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new rk.e(this.JU(), ek, kk, !Dk, !1, ik, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, bk.e.prototype.Z2 = function(kk) {
      "matrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === kk ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === kk ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0, this._thinInstanceDataStorage.instancesCount) : (kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[kk].isUpdatable() && this._thinInstanceRecreateBuffer(kk), this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(this._userThinInstanceBuffersStorage.data[kk], 0)))
    }, bk.e.prototype.thinInstancePartialBufferUpdate = function(kk, ek, ik) {
      if ("matrix" === kk) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof ek ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ik * Float32Array.BYTES_PER_ELEMENT, 16 * ek), 16 * ik) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(ek, ik));
      else if (kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[kk]) {
        const Dk = this._userThinInstanceBuffersStorage.vertexBuffers[kk];
        if ("number" === typeof ek) {
          const Dk = new Float32Array(this._userThinInstanceBuffersStorage.data[kk].buffer, this._userThinInstanceBuffersStorage.data[kk].byteOffset + ik * this._userThinInstanceBuffersStorage.strides[kk] * Float32Array.BYTES_PER_ELEMENT, ek * this._userThinInstanceBuffersStorage.strides[kk]);
          this._userThinInstanceBuffersStorage.vertexBuffers[kk].updateDirectly(Dk, ik * this._userThinInstanceBuffersStorage.strides[kk])
        } else Dk.updateDirectly(ek, ik)
      }
    }, bk.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const kk = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let ek = 0; ek < this._thinInstanceDataStorage.instancesCount; ++ek) this._thinInstanceDataStorage.worldMatrices[ek] = Dk.b.FromArray(kk, 16 * ek)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, bk.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const bk = this._thinInstanceDataStorage.boundingVectors;
      if (kk || !this.rawBoundingInfo) {
        if (bk.length = 0, fk && function(kk, ek, ik) {
            const fk = kk._userThinInstanceBuffersStorage,
              bk = fk?.data[Pk],
              Uk = fk?.strides[Pk];
            if (!bk || !Uk || Uk < 4 || !mk(kk)) return !1;
            const Hk = kk._thinInstanceDataStorage.matrixData;
            if (!Hk) return !1;
            const wk = {},
              lk = Dk.j.Vector4[0],
              pk = Dk.j.eH[1],
              yk = Dk.j.eH[2],
              Yk = Dk.j.eH[3],
              Lk = Dk.j.eH[4],
              Ck = Dk.j.eH[5],
              Ak = Dk.j.eH[6],
              jk = Dk.j.Matrix[2],
              sk = kk.geometry ? kk.geometry.boundingBias : null,
              dk = kk.getTotalVertices();
            pk.A_(Number.POSITIVE_INFINITY), yk.A_(Number.NEGATIVE_INFINITY), Yk.A_(Number.POSITIVE_INFINITY), Lk.A_(Number.NEGATIVE_INFINITY);
            for (let Sk = 0; Sk < kk._thinInstanceDataStorage.instancesCount; ++Sk) {
              const ek = Sk * Uk;
              lk.set(bk[ek], bk[ek + 1], bk[ek + 2], bk[ek + 3]);
              const fk = kk._getData({
                applyMorph: ik,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: lk,
                updatePositionsArray: !1,
                cache: wk
              }, null, rk.e.PositionKind);
              if (!fk) return !1;
              Mk(fk, dk, Ck, Ak), Kk(Ck, Ak, sk), pk.minimizeInPlace(Ck), yk.maximizeInPlace(Ak), Dk.b.FromArrayToRef(Hk, 16 * Sk, jk), sk ? xk(Ck, Ak, jk, Yk, Lk) : nk(fk, dk, jk, Yk, Lk)
            }
            return !(!isFinite(pk.x) || !isFinite(Yk.x)) && (kk.hq().reConstruct(Yk, Lk), kk.rawBoundingInfo = new Sk.b(pk, yk), function(kk, ek) {
              kk.length = 0;
              for (let ik = 0; ik < ek.boundingBox.vectors.length; ++ik) kk.push(ek.boundingBox.vectors[ik].clone())
            }(ek, kk.rawBoundingInfo), kk._updateBoundingInfo(), !0)
          }(this, bk, ik)) return;
        fk && this.bakedVertexAnimationManager?.isEnabled && mk(this) ? this.refreshBoundingInfo({
          applySkeleton: ek,
          applyMorph: ik,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(ek, ik);
        const kk = this.hq();
        this.rawBoundingInfo = new Sk.b(kk.minimum, kk.maximum)
      }
      const Uk = this.hq(),
        Hk = this._thinInstanceDataStorage.matrixData;
      if (0 === bk.length)
        for (let Dk = 0; Dk < Uk.boundingBox.vectors.length; ++Dk) bk.push(Uk.boundingBox.vectors[Dk].clone());
      Dk.j.eH[0].A_(Number.POSITIVE_INFINITY), Dk.j.eH[1].A_(Number.NEGATIVE_INFINITY);
      for (let Sk = 0; Sk < this._thinInstanceDataStorage.instancesCount; ++Sk) {
        Dk.b.FromArrayToRef(Hk, 16 * Sk, Dk.j.Matrix[0]);
        for (let kk = 0; kk < bk.length; ++kk) Dk.o.TransformCoordinatesToRef(bk[kk], Dk.j.Matrix[0], Dk.j.eH[2]), Dk.j.eH[0].minimizeInPlace(Dk.j.eH[2]), Dk.j.eH[1].maximizeInPlace(Dk.j.eH[2])
      }
      Uk.reConstruct(Dk.j.eH[0], Dk.j.eH[1]), this._updateBoundingInfo()
    }, bk.e.prototype._thinInstanceRecreateBuffer = function(kk) {
      let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === kk ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, ek)) : "previousMatrix" === kk ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, ek)) : (kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new rk.e(this.JU(), this._userThinInstanceBuffersStorage.data[kk], kk, !ek, !1, this._userThinInstanceBuffersStorage.strides[kk], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
    }, bk.e.prototype._thinInstanceUpdateBufferSize = function(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      kk === rk.e.ColorKind && (kk = rk.e.ColorInstanceKind);
      const ik = "matrix" === kk;
      if (!ik && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[kk])) return;
      const Dk = ik ? 16 : this._userThinInstanceBuffersStorage.strides[kk],
        fk = ik ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[kk];
      let Sk = ik ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[kk];
      const bk = (this._thinInstanceDataStorage.instancesCount + ek) * Dk;
      let Pk = fk;
      for (; Pk < bk;) Pk *= 2;
      if (!Sk || fk != Pk) {
        if (Sk) {
          const kk = new Float32Array(Pk);
          kk.set(Sk, 0), Sk = kk
        } else Sk = new Float32Array(Pk);
        ik ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Sk, !1), this._thinInstanceDataStorage.matrixData = Sk, this._thinInstanceDataStorage.matrixBufferSize = Pk, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Sk, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[kk]?.dispose(), this._userThinInstanceBuffersStorage.data[kk] = Sk, this._userThinInstanceBuffersStorage.sizes[kk] = Pk, this._userThinInstanceBuffersStorage.vertexBuffers[kk] = new rk.e(this.JU(), Sk, kk, !0, !1, Dk, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[kk]))
      }
    }, bk.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, bk.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40018: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => pk,
      i: () => Hk
    });
    var Dk, fk, Sk, bk, rk = ik(39566),
      Pk = ik(39570),
      mk = ik(39585),
      Mk = ik(36726),
      Kk = ik(36698),
      xk = ik(39787),
      nk = ik(36734),
      Uk = ik(39447);
    let Hk = (() => {
      var kk;
      let ek, ik, Dk, fk, Sk, bk, nk, Uk, Hk, wk = xk.b,
        lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        sk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [];
      return kk = class extends wk {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(ek) {
          this._billboardMode !== ek && (this._billboardMode = ek, this._cache.useBillboardPosition = 0 !== (this._billboardMode & kk.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(kk) {
          this._infiniteDistance !== kk && (this._infiniteDistance = kk)
        }
        constructor(ek) {
          let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(ek, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new Kk.o(0, 0, 1), this._up = new Kk.o(0, 1, 0), this._right = new Kk.o(1, 0, 0), this._position = (0, rk.e)(this, lk, Kk.o.Zero()), this._rotation = ((0, rk.e)(this, pk), (0, rk.e)(this, yk, Kk.o.Zero())), this._rotationQuaternion = ((0, rk.e)(this, Yk), (0, rk.e)(this, Lk, null)), this._scaling = ((0, rk.e)(this, Ck), (0, rk.e)(this, Ak, Kk.o.One())), this._transformToBoneReferal = ((0, rk.e)(this, jk), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, rk.e)(this, sk, kk.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, rk.e)(this, dk), (0, rk.e)(this, Vk, 1)), this._infiniteDistance = ((0, rk.e)(this, Fk), (0, rk.e)(this, uk, !1)), this.ignoreNonUniformScaling = ((0, rk.e)(this, qk), (0, rk.e)(this, Ik, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, rk.e)(this, zk), (0, rk.e)(this, Qk, !1)), this._poseMatrix = ((0, rk.e)(this, vk), null), this._localMatrix = Kk.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = Kk.o.Zero(), this._absoluteScaling = Kk.o.Zero(), this._absoluteRotationQuaternion = Kk.c.Identity(), this._pivotMatrix = Kk.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Mk.c, this._nonUniformScaling = !1, ik && this.XF().addTransformNode(this)
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
        get wi() {
          return this._scaling
        }
        set wi(kk) {
          this._scaling = kk, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(kk) {
          this._rotationQuaternion = kk, kk && this._rotation.A_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return Kk.o.TransformNormalFromFloatsToRef(0, 0, this.XF().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return Kk.o.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return Kk.o.TransformNormalFromFloatsToRef(this.XF().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(kk) {
          return this._poseMatrix ? (this._poseMatrix.Fs(kk), this) : (this._poseMatrix = kk.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = Kk.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const ek = this._cache;
          return this._billboardMode === ek.billboardMode && this._billboardMode === kk.BILLBOARDMODE_NONE && (!ek.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Fs(kk), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = ek, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = Kk.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            ek = arguments.length > 1 ? arguments[1] : void 0,
            ik = arguments.length > 2 ? arguments[2] : void 0;
          const Dk = this.clone("Clone of " + (this.name || this.id), kk || this.parent, !0);
          Dk && ik && ik(this, Dk);
          for (const fk of this.getChildTransformNodes(!0)) fk.instantiateHierarchy(Dk, ek, ik);
          return Dk
        }
        Eu() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.A_(0), this._rotationQuaternion = this._rotationQuaternion || Kk.c.Identity(), kk.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = kk, this._absolutePosition.Z6(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get pbk() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(kk) {
          if (!kk) return this;
          let ek, ik, Dk;
          if (void 0 === kk.x) {
            if (arguments.length < 3) return this;
            ek = arguments[0], ik = arguments[1], Dk = arguments[2]
          } else ek = kk.x, ik = kk.y, Dk = kk.z;
          if (this.parent) {
            const kk = Kk.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(kk), Kk.o.TransformCoordinatesFromFloatsToRef(ek, ik, Dk, kk, this.position)
          } else this.position.x = ek, this.position.y = ik, this.position.z = Dk;
          return this._absolutePosition.Fs(kk), this
        }
        setPositionWithLocalVector(kk) {
          return this.computeWorldMatrix(), this.position = Kk.o.TransformNormal(kk, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const kk = Kk.j.Matrix[0];
          return this._localMatrix.invertToRef(kk), Kk.o.TransformNormal(this.position, kk)
        }
        locallyTranslate(kk) {
          return this.computeWorldMatrix(!0), this.position = Kk.o.TransformCoordinates(kk, this._localMatrix), this
        }
        lookAt(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const bk = kk._LookAtVectorCache,
            rk = 0 === Sk ? this.position : this.getAbsolutePosition();
          if (ek.subtractToRef(rk, bk), this.setDirection(bk, ik, Dk, fk), 1 === Sk && this.parent)
            if (this.rotationQuaternion) {
              const kk = Kk.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(kk);
              const ek = Kk.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ek), ek.invert(), kk.multiplyToRef(ek, kk), this.rotationQuaternion.fromRotationMatrix(kk)
            } else {
              const kk = Kk.j.Quaternion[0];
              Kk.c.FromEulerVectorToRef(this.rotation, kk);
              const ek = Kk.j.Matrix[0];
              kk.toRotationMatrix(ek);
              const ik = Kk.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ik), ik.invert(), ek.multiplyToRef(ik, ek), kk.fromRotationMatrix(ek), kk.toEulerAnglesToRef(this.rotation)
            } return this
        }
        yN(kk) {
          const ek = Kk.o.Zero();
          return this.getDirectionToRef(kk, ek), ek
        }
        getDirectionToRef(kk, ek) {
          return Kk.o.TransformNormalToRef(kk, this.getWorldMatrix(), ek), this
        }
        setDirection(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const fk = -Math.atan2(kk.z, kk.x) + Math.PI / 2,
            Sk = Math.sqrt(kk.x * kk.x + kk.z * kk.z),
            bk = -Math.atan2(kk.y, Sk);
          return this.rotationQuaternion ? Kk.c.RotationYawPitchRollToRef(fk + ek, bk + ik, Dk, this.rotationQuaternion) : (this.rotation.x = bk + ik, this.rotation.y = fk + ek, this.rotation.z = Dk), this
        }
        setPivotPoint(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.XF().getRenderId() && this.computeWorldMatrix(!0);
          const ik = this.getWorldMatrix();
          if (1 == ek) {
            const ek = Kk.j.Matrix[0];
            ik.invertToRef(ek), kk = Kk.o.TransformCoordinates(kk, ek)
          }
          return this.setPivotMatrix(Kk.b.Translation(-kk.x, -kk.y, -kk.z), !0)
        }
        getPivotPoint() {
          const kk = Kk.o.Zero();
          return this.getPivotPointToRef(kk), kk
        }
        getPivotPointToRef(kk) {
          return kk.x = -this._pivotMatrix.m[12], kk.y = -this._pivotMatrix.m[13], kk.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const kk = Kk.o.Zero();
          return this.getAbsolutePivotPointToRef(kk), kk
        }
        getAbsolutePivotPointToRef(kk) {
          return this.getPivotPointToRef(kk), Kk.o.TransformCoordinatesToRef(kk, this.getWorldMatrix(), kk), this
        }
        pek(kk) {
          if (this._isDirty) return this;
          if (this._children)
            for (const ek of this._children) ek.pek(kk);
          return super.pek(kk)
        }
        setParent(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!ek && !this.parent) return this;
          const fk = Kk.j.Quaternion[0],
            Sk = Kk.j.eH[0],
            bk = Kk.j.eH[1],
            rk = Kk.j.Matrix[1];
          Kk.b.IdentityToRef(rk);
          const Pk = Kk.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let mk = this.rotationQuaternion;
          return mk || (mk = kk._TmpRotation, Kk.c.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, mk)), Kk.b.ComposeToRef(this.wi, mk, this.position, Pk), this.parent && Pk.multiplyToRef(this.parent.computeWorldMatrix(!0), Pk), ek && (ek.computeWorldMatrix(!0).invertToRef(rk), Pk.multiplyToRef(rk, Pk)), Pk.decompose(bk, fk, Sk, ik ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Fs(fk) : fk.toEulerAnglesToRef(this.rotation), this.wi.Fs(bk), this.position.Fs(Sk), this.parent = ek, Dk && this.setPivotMatrix(Kk.b.Identity()), this
        }
        addChild(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return kk.setParent(this, ek), this
        }
        removeChild(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return kk.parent !== this || kk.setParent(null, ek), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(kk) {
          return this._nonUniformScaling !== kk && (this._nonUniformScaling = kk, !0)
        }
        attachToBone(kk, ek) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = ek, this.parent = kk, kk.getSkeleton().prepare(!0), kk.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = kk ? this._currentParentWhenAttachingToBone : null, this) : (kk && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(ek, ik, Dk) {
          let fk;
          if (ek.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.A_(0)), Dk && 0 !== Dk) {
            if (this.parent) {
              const kk = this.parent.getWorldMatrix(),
                Dk = Kk.j.Matrix[0];
              kk.invertToRef(Dk), ek = Kk.o.TransformNormal(ek, Dk), kk.determinant() < 0 && (ik *= -1)
            }
            fk = Kk.c.RotationAxisToRef(ek, ik, kk._RotationAxisCache), fk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else fk = Kk.c.RotationAxisToRef(ek, ik, kk._RotationAxisCache), this.rotationQuaternion.multiplyToRef(fk, this.rotationQuaternion);
          return this
        }
        rotateAround(kk, ek, ik) {
          ek.normalize(), this.rotationQuaternion || (this.rotationQuaternion = Kk.c.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.A_(0));
          const Dk = Kk.j.eH[0],
            fk = Kk.j.eH[1],
            Sk = Kk.j.eH[2],
            bk = Kk.j.Quaternion[0],
            rk = Kk.j.Matrix[0],
            Pk = Kk.j.Matrix[1],
            mk = Kk.j.Matrix[2],
            Mk = Kk.j.Matrix[3];
          return kk.subtractToRef(this.position, Dk), Kk.b.TranslationToRef(Dk.x, Dk.y, Dk.z, rk), Kk.b.TranslationToRef(-Dk.x, -Dk.y, -Dk.z, Pk), Kk.b.RotationAxisToRef(ek, ik, mk), Pk.multiplyToRef(mk, Mk), Mk.multiplyToRef(rk, Mk), Mk.decompose(fk, bk, Sk), this.position.addInPlace(Sk), bk.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(kk, ek, ik) {
          const Dk = kk.scale(ek);
          if (ik && 0 !== ik) this.setAbsolutePosition(this.getAbsolutePosition().add(Dk));
          else {
            const kk = this.getPositionExpressedInLocalSpace().add(Dk);
            this.setPositionWithLocalVector(kk)
          }
          return this
        }
        addRotation(kk, ek, ik) {
          let Dk;
          this.rotationQuaternion ? Dk = this.rotationQuaternion : (Dk = Kk.j.Quaternion[1], Kk.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Dk));
          const fk = Kk.j.Quaternion[0];
          return Kk.c.RotationYawPitchRollToRef(ek, kk, ik, fk), Dk.multiplyInPlace(fk), this.rotationQuaternion || Dk.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== kk.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Dk = this.XF().getRenderId();
          if (!this._isDirty && !ek && (this._currentRenderId === Dk || this.isSynchronized())) return this._currentRenderId = Dk, this._worldMatrix;
          ik = ik || this.XF().activeCamera, this._updateCache();
          const fk = this._cache;
          fk.pivotMatrixUpdated = !1, fk.billboardMode = this.billboardMode, fk.infiniteDistance = this.infiniteDistance, fk.parent = this._parentNode, this._currentRenderId = Dk, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Sk = this._getEffectiveParent(),
            bk = kk._TmpScaling;
          let rk, Pk = this._position;
          if (this._infiniteDistance && !this.parent && ik) {
            const ek = ik.getWorldMatrix().m;
            Pk = kk._TmpTranslation, Pk.Z6(this._position.x + ek[12], this._position.y + ek[13], this._position.z + ek[14])
          }
          if (bk.Z6(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, rk = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(Kk.c.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Z6(0, 0, 0))
            }
          } else rk = kk._TmpRotation, Kk.c.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, rk);
          if (this._usePivotMatrix) {
            const kk = Kk.j.Matrix[1];
            Kk.b.ScalingToRef(bk.x, bk.y, bk.z, kk);
            const ek = Kk.j.Matrix[0];
            rk.toRotationMatrix(ek), this._pivotMatrix.multiplyToRef(kk, Kk.j.Matrix[4]), Kk.j.Matrix[4].multiplyToRef(ek, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Pk.x, Pk.y, Pk.z)
          } else Kk.b.ComposeToRef(bk, rk, Pk, this._localMatrix);
          if (Sk && Sk.getWorldMatrix) {
            if (ek && Sk.computeWorldMatrix(ek), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const kk = this.parent;
                kk.getSkeleton().prepare(), kk.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), Kk.j.Matrix[7])
              } else Kk.j.Matrix[7].Fs(Sk.getWorldMatrix());
              const ek = Kk.j.eH[5],
                ik = Kk.j.eH[6],
                Dk = Kk.j.Quaternion[0];
              Kk.j.Matrix[7].decompose(ik, Dk, ek), Kk.b.ScalingToRef(ik.x, ik.y, ik.z, Kk.j.Matrix[7]), Kk.j.Matrix[7].setTranslation(ek), kk.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Dk, ek), this._localMatrix.setTranslation(ek)), this._localMatrix.multiplyToRef(Kk.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const kk = this.parent;
              kk.getSkeleton().prepare(), this._localMatrix.multiplyToRef(kk.getFinalMatrix(), Kk.j.Matrix[6]), Kk.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Sk.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Fs(this._localMatrix);
          if (ik && this.billboardMode)
            if (fk.useBillboardPosition) {
              const ek = Kk.j.eH[0];
              this._worldMatrix.getTranslationToRef(ek);
              const Dk = ik.globalPosition;
              this._worldMatrix.invertToRef(Kk.j.Matrix[1]);
              const fk = Kk.j.eH[1];
              Kk.o.TransformCoordinatesToRef(Dk, Kk.j.Matrix[1], fk), fk.normalize();
              const Sk = -Math.atan2(fk.z, fk.x) + Math.PI / 2,
                bk = Math.sqrt(fk.x * fk.x + fk.z * fk.z),
                rk = -Math.atan2(fk.y, bk);
              if (Kk.c.RotationYawPitchRollToRef(Sk, rk, 0, Kk.j.Quaternion[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                const ek = Kk.j.eH[1];
                Kk.j.Quaternion[0].toEulerAnglesToRef(ek), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (ek.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (ek.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (ek.z = 0), Kk.b.RotationYawPitchRollToRef(ek.y, ek.x, ek.z, Kk.j.Matrix[0])
              } else Kk.b.FromQuaternionToRef(Kk.j.Quaternion[0], Kk.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Kk.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Kk.j.eH[0])
            } else {
              const ek = Kk.j.eH[0];
              this._worldMatrix.getTranslationToRef(ek), Kk.j.Matrix[1].Fs(ik.getViewMatrix());
              const Dk = this.XF().useRightHandedSystem;
              if (Dk && Kk.j.Matrix[1].multiplyToRef(kk._TmpRHRestore, Kk.j.Matrix[1]), Kk.j.Matrix[1].setTranslationFromFloats(0, 0, 0), Kk.j.Matrix[1].invertToRef(Kk.j.Matrix[0]), (this.billboardMode & kk.BILLBOARDMODE_ALL) !== kk.BILLBOARDMODE_ALL) {
                Kk.j.Matrix[0].decompose(void 0, Kk.j.Quaternion[0], void 0);
                const ek = Kk.j.eH[1];
                Kk.j.Quaternion[0].toEulerAnglesToRef(ek), (this.billboardMode & kk.BILLBOARDMODE_X) !== kk.BILLBOARDMODE_X && (ek.x = 0), (this.billboardMode & kk.BILLBOARDMODE_Y) !== kk.BILLBOARDMODE_Y && (ek.y = 0), (this.billboardMode & kk.BILLBOARDMODE_Z) !== kk.BILLBOARDMODE_Z && (ek.z = 0), Dk && (ek.y += Math.PI), Kk.b.RotationYawPitchRollToRef(ek.y, ek.x, ek.z, Kk.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(Kk.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(Kk.j.eH[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Sk && Sk._nonUniformScaling ? this._updateNonUniformScalingState(Sk._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.Z6(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = Kk.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), kk) {
            const kk = this.getChildren();
            for (let ek = 0; ek < kk.length; ++ek) {
              const ik = kk[ek];
              if (ik) {
                ik.computeWorldMatrix();
                const kk = Kk.j.Matrix[0];
                ik._localMatrix.multiplyToRef(this._localMatrix, kk);
                const ek = Kk.j.Quaternion[0];
                kk.decompose(ik.wi, ek, ik.position), ik.rotationQuaternion ? ik.rotationQuaternion.Fs(ek) : ek.toEulerAnglesToRef(ik.rotation)
              }
            }
          }
          this.wi.Z6(1, 1, 1), this.position.Z6(0, 0, 0), this.rotation.Z6(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = Kk.c.Identity()), this._worldMatrix = Kk.b.Identity()
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
          return kk || (kk = this.XF().activeCamera), Kk.o.TransformCoordinates(this.getAbsolutePosition(), kk.getViewMatrix())
        }
        getDistanceToCamera() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return kk || (kk = this.XF().activeCamera), this.getAbsolutePosition().subtract(kk.globalPosition).length()
        }
        clone(ek, ik, Dk) {
          const fk = mk.b.Clone((() => new kk(ek, this.XF())), this);
          if (fk.name = ek, fk.id = ek, ik && (fk.parent = ik), !Dk) {
            const kk = this.getDescendants(!0);
            for (let ik = 0; ik < kk.length; ik++) {
              const Dk = kk[ik];
              Dk.clone && Dk.clone(ek + "." + Dk.name, fk)
            }
          }
          return fk
        }
        serialize(kk) {
          const ek = mk.b.Serialize(this, kk);
          return ek.type = this.getClassName(), ek.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(ek), ek.localMatrix = this.getPivotMatrix().Tik(), ek.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (ek.Eu = !0), mk.b.AppendSerializedAnimations(this, ek), ek.lw = this.serializeAnimationRanges(), ek
        }
        getChildTransformNodes(ek, ik) {
          const Dk = [];
          return this._getDescendants(Dk, ek, (ek => (!ik || ik(ek)) && ek instanceof kk)), Dk
        }
        dispose(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.XF().stopAnimation(this), this.XF().removeTransformNode(this), this._parentContainer) {
            const kk = this._parentContainer.transformNodes.indexOf(this);
            kk > -1 && this._parentContainer.transformNodes.splice(kk, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), kk) {
            const kk = this.getChildTransformNodes(!0);
            for (const ek of kk) ek.parent = null, ek.computeWorldMatrix(!0)
          }
          super.dispose(kk, ek)
        }
        normalizeToUnitCube() {
          let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ik = arguments.length > 2 ? arguments[2] : void 0,
            Dk = null,
            fk = null;
          ek && (this.rotationQuaternion ? (fk = this.rotationQuaternion.clone(), this.rotationQuaternion.Z6(0, 0, 0, 1)) : this.rotation && (Dk = this.rotation.clone(), this.rotation.Z6(0, 0, 0)));
          const Sk = this.getHierarchyBoundingVectors(kk, ik),
            bk = Sk.max.subtract(Sk.min),
            rk = Math.max(bk.x, bk.y, bk.z);
          if (0 === rk) return this;
          const Pk = 1 / rk;
          return this.wi.scaleInPlace(Pk), ek && (this.rotationQuaternion && fk ? this.rotationQuaternion.Fs(fk) : this.rotation && Dk && this.rotation.Fs(Dk)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
        ek = [(0, Pk.F)("position")], ik = [(0, Pk.F)("rotation")], Dk = [(0, Pk.v)("rotationQuaternion")], fk = [(0, Pk.F)("wi")], Sk = [(0, Pk.I)("billboardMode")], bk = [(0, Pk.I)()], nk = [(0, Pk.I)("infiniteDistance")], Uk = [(0, Pk.I)()], Hk = [(0, Pk.I)()], (0, rk.d)(null, null, ek, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: kk => "_position" in kk,
            get: kk => kk._position,
            set: (kk, ek) => {
              kk._position = ek
            }
          },
          metadata: mk
        }, lk, pk), (0, rk.d)(null, null, ik, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: kk => "_rotation" in kk,
            get: kk => kk._rotation,
            set: (kk, ek) => {
              kk._rotation = ek
            }
          },
          metadata: mk
        }, yk, Yk), (0, rk.d)(null, null, Dk, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: kk => "_rotationQuaternion" in kk,
            get: kk => kk._rotationQuaternion,
            set: (kk, ek) => {
              kk._rotationQuaternion = ek
            }
          },
          metadata: mk
        }, Lk, Ck), (0, rk.d)(null, null, fk, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "_scaling" in kk,
            get: kk => kk._scaling,
            set: (kk, ek) => {
              kk._scaling = ek
            }
          },
          metadata: mk
        }, Ak, jk), (0, rk.d)(null, null, Sk, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_billboardMode" in kk,
            get: kk => kk._billboardMode,
            set: (kk, ek) => {
              kk._billboardMode = ek
            }
          },
          metadata: mk
        }, sk, dk), (0, rk.d)(null, null, bk, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: kk => "scalingDeterminant" in kk,
            get: kk => kk.scalingDeterminant,
            set: (kk, ek) => {
              kk.scalingDeterminant = ek
            }
          },
          metadata: mk
        }, Vk, Fk), (0, rk.d)(null, null, nk, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "_infiniteDistance" in kk,
            get: kk => kk._infiniteDistance,
            set: (kk, ek) => {
              kk._infiniteDistance = ek
            }
          },
          metadata: mk
        }, uk, qk), (0, rk.d)(null, null, Uk, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "ignoreNonUniformScaling" in kk,
            get: kk => kk.ignoreNonUniformScaling,
            set: (kk, ek) => {
              kk.ignoreNonUniformScaling = ek
            }
          },
          metadata: mk
        }, Ik, zk), (0, rk.d)(null, null, Hk, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: kk => "reIntegrateRotationIntoRotationQuaternion" in kk,
            get: kk => kk.reIntegrateRotationIntoRotationQuaternion,
            set: (kk, ek) => {
              kk.reIntegrateRotationIntoRotationQuaternion = ek
            }
          },
          metadata: mk
        }, Qk, vk), mk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mk
        })
      })(), kk.BILLBOARDMODE_NONE = 0, kk.BILLBOARDMODE_X = 1, kk.BILLBOARDMODE_Y = 2, kk.BILLBOARDMODE_Z = 4, kk.BILLBOARDMODE_ALL = 7, kk.BILLBOARDMODE_USE_POSITION = 128, kk.BillboardUseParentOrientation = !1, kk._TmpRotation = Kk.c.Zero(), kk._TmpScaling = Kk.o.Zero(), kk._TmpTranslation = Kk.o.Zero(), kk._TmpRHRestore = Kk.b.Scaling(1, 1, -1), kk._LookAtVectorCache = new Kk.o(0, 0, 0), kk._RotationAxisCache = new Kk.c, kk
    })();

    function wk(kk, ek, ik) {
      const Dk = mk.b.Parse((() => new Hk(kk.name, ek)), kk, ek, ik);
      if (kk.localMatrix ? Dk.setPreTransformMatrix(Kk.b.FromArray(kk.localMatrix)) : kk.pivotMatrix && Dk.setPivotMatrix(Kk.b.FromArray(kk.pivotMatrix)), Dk.bV(kk.isEnabled), Dk._waitingParsedUniqueId = kk.uniqueId, void 0 !== kk.parentId && (Dk._waitingParentId = kk.parentId), void 0 !== kk.parentInstanceIndex && (Dk._waitingParentInstanceIndex = kk.parentInstanceIndex), kk.Eu && (Dk._waitingFreezeWorldMatrix = kk.Eu), kk.animations) {
        for (let ek = 0; ek < kk.animations.length; ek++) {
          const ik = kk.animations[ek],
            fk = (0, nk.d)("BABYLON.Animation");
          fk && Dk.animations.push(fk.Parse(ik))
        }
        xk.b.ParseAnimationRanges(Dk, kk, ek)
      }
      return kk.autoAnimate && ek.beginAnimation(Dk, kk.autoAnimateFrom, kk.autoAnimateTo, kk.autoAnimateLoop, kk.autoAnimateSpeed || 1), Dk
    }
    let lk = !1;

    function pk() {
      lk || (lk = !0, Hk.Parse = wk)
    }(Dk = Hk.prototype).jW ?? (Dk.jW = (0, Uk.i)("TransformNode", "jW")), (fk = Hk.prototype).applyImpulse ?? (fk.applyImpulse = (0, Uk.i)("TransformNode", "applyImpulse")), (Sk = Hk.prototype).applyAngularImpulse ?? (Sk.applyAngularImpulse = (0, Uk.i)("TransformNode", "applyAngularImpulse")), (bk = Hk.prototype).applyTorque ?? (bk.applyTorque = (0, Uk.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Hk.prototype, "physicsBody") || Object.defineProperty(Hk.prototype, "physicsBody", (0, Uk.h)("TransformNode", "physicsBody"))
  },
  39999: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      try {
        const Dk = kk.next();
        Dk.done ? ek(Dk) : Dk.value ? Dk.value.then((() => {
          Dk.value = void 0, ek(Dk)
        }), ik) : ek(Dk)
      } catch (Dk) {
        ik(Dk)
      }
    }

    function fk() {
      let kk, ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ik, fk, Sk) => {
        const bk = performance.now();
        void 0 === kk || bk - kk > ek ? (kk = bk, setTimeout((() => {
          Dk(ik, fk, Sk)
        }), 0)) : Dk(ik, fk, Sk)
      }
    }

    function Sk(kk, ek, ik, Dk, fk) {
      const Sk = () => {
        let bk;
        const rk = kk => {
          kk.done ? ik(kk.value) : void 0 === bk ? bk = !0 : Sk()
        };
        do {
          bk = void 0, fk && fk.aborted ? Dk(new Error("Aborted")) : ek(kk, rk, Dk), void 0 === bk && (bk = !1)
        } while (bk)
      };
      Sk()
    }

    function bk(kk, ek) {
      let ik;
      return Sk(kk, Dk, (kk => ik = kk), (kk => {
        throw kk
      }), ek), ik
    }
    async function rk(kk, ek, ik) {
      return await new Promise(((Dk, fk) => {
        Sk(kk, ek, Dk, fk, ik)
      }))
    }

    function Pk(kk, ek) {
      return function() {
        return bk(kk(...arguments), ek)
      }
    }
    ik.d(ek, {
      d: () => fk,
      f: () => Pk,
      h: () => rk,
      k: () => bk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);
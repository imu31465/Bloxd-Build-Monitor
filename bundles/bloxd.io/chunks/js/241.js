export const id = 241;
export const ids = [241];
export const modules = {
  39774: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Tu,
      g: () => Hu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39667),
      mu = yu(36858),
      Ju = yu(36830),
      Nu = yu(39780),
      Xu = yu(38448),
      Vu = yu(36871),
      ru = yu(39430),
      Bu = yu(37842),
      xu = yu(37525),
      Su = yu(39520),
      pu = yu(39582);
    let Tu = (() => {
      var uu;
      let Ru, yu, Vu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu = Nu.e,
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        wu = [],
        Zu = [],
        hu = [],
        Pu = [],
        iu = [],
        Yu = [],
        ou = [],
        qu = [],
        Ou = [],
        vu = [],
        au = [],
        fu = [],
        uR = [],
        RR = [],
        yR = [],
        ER = [],
        KR = [];
      return uu = class extends nu {
        get position() {
          return this._position
        }
        set position(uu) {
          this._position = uu
        }
        set upVector(uu) {
          this._upVector = uu
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let Ru, yu;
          if (this.mode === uu.PERSPECTIVE_CAMERA) this.fovMode === uu.FOVMODE_VERTICAL_FIXED ? (yu = 2 * this.minZ * Math.tan(this.fov / 2), Ru = this.eS().getAspectRatio(this) * yu) : (Ru = 2 * this.minZ * Math.tan(this.fov / 2), yu = Ru / this.eS().getAspectRatio(this));
          else {
            const uu = this.eS().getRenderWidth() / 2,
              Eu = this.eS().getRenderHeight() / 2;
            Ru = (this.orthoRight ?? uu) - (this.orthoLeft ?? -uu), yu = (this.orthoTop ?? Eu) - (this.orthoBottom ?? -Eu)
          }
          return Ru * yu
        }
        set orthoLeft(uu) {
          this._orthoLeft = uu;
          for (const Ru of this._rigCameras) Ru.orthoLeft = uu
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(uu) {
          this._orthoRight = uu;
          for (const Ru of this._rigCameras) Ru.orthoRight = uu
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(uu) {
          this._orthoBottom = uu;
          for (const Ru of this._rigCameras) Ru.orthoBottom = uu
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(uu) {
          this._orthoTop = uu;
          for (const Ru of this._rigCameras) Ru.orthoTop = uu
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Ru / (2 * uu))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(uu) {
          this._baseInertia = uu
        }
        set mode(uu) {
          this._mode = uu;
          for (const Ru of this._rigCameras) Ru.mode = uu
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Ru, yu, Ku) {
          let Nu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Su.d)(), super(Ru, Ku, !1), this.inputs = (0, Eu.l)(this, su), this._position = (0, Eu.l)(this, tu, Ju.p.Zero()), this._upVector = ((0, Eu.l)(this, lu), (0, Eu.l)(this, gu, Ju.p.Up())), this.oblique = ((0, Eu.l)(this, cu), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, Eu.l)(this, Lu, .8), this.projectionPlaneTilt = ((0, Eu.l)(this, zu), (0, Eu.l)(this, Fu, 0)), this.minZ = ((0, Eu.l)(this, wu), (0, Eu.l)(this, Zu, 1)), this.maxZ = ((0, Eu.l)(this, hu), (0, Eu.l)(this, Pu, 1e4)), this._baseInertia = ((0, Eu.l)(this, iu), .9), this._mode = uu.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new Bu.c(0, 0, 1, 1), this.layerMask = (0, Eu.l)(this, Yu, 268435455), this.fovMode = ((0, Eu.l)(this, ou), (0, Eu.l)(this, qu, uu.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, Eu.l)(this, Ou), (0, Eu.l)(this, vu, uu.RIG_MODE_NONE)), this.interaxialDistance = ((0, Eu.l)(this, au), (0, Eu.l)(this, fu, void 0)), this.isStereoscopicSideBySide = ((0, Eu.l)(this, uR), (0, Eu.l)(this, RR, void 0)), this.ignoreCameraMaxZ = ((0, Eu.l)(this, yR), (0, Eu.l)(this, ER, !1)), this.customRenderTargets = ((0, Eu.l)(this, KR), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new mu.b, this.onProjectionMatrixChangedObservable = new mu.b, this.onAfterCheckInputsObservable = new mu.b, this.onRestoreStateObservable = new mu.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new Ju.d, this._postProcesses = new Array, this._activeMeshes = new Qu.i(256), this._globalPosition = Ju.p.Zero(), this._computedViewMatrix = Ju.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = Ju.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = Ju.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.lD().defaultCameraLayerMask, this.lD().addCamera(this), Nu && !this.lD().activeCamera && (this.lD().activeCamera = this), this.position = yu, this.renderPassId = this.lD().eS().createRenderPassId(`Camera ${Ru}`)
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
          return "GT"
        }
        toString(uu) {
          let Ru = "Name: " + this.name;
          if (Ru += ", type: " + this.getClassName(), this.animations)
            for (let yu = 0; yu < this.animations.length; yu++) Ru += ", animation[0]: " + this.animations[yu].toString(uu);
          return Ru
        }
        applyVerticalCorrection() {
          const uu = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -uu.x : uu.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(uu) {
          return -1 !== this._activeMeshes.indexOf(uu)
        }
        isReady() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (uu)
            for (const Ru of this._postProcesses)
              if (Ru && !Ru.isReady()) return !1;
          return super.isReady(uu)
        }
        _initCache() {
          super._initCache(), this._cache.position = new Ju.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new Ju.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(uu) {
          uu || super._updateCache(), this._cache.position.Oyu(this.position), this._cache.upVector.Oyu(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Ru = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let yu = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Ru;
          if (!yu) return !1;
          const Eu = this.eS();
          return this.mode === uu.PERSPECTIVE_CAMERA ? yu = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === Eu.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (yu = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === Eu.getRenderWidth() && this._cache.renderHeight === Eu.getRenderHeight(), this.oblique && (yu = yu && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), yu
        }
        attachControl(uu, Ru) {}
        detachControl(uu) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== uu.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let uu = 0; uu < this._postProcesses.length; uu++)
            if (null !== this._postProcesses[uu]) return this._postProcesses[uu];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const uu = this._getFirstPostProcess();
          uu && uu.markTextureDirty();
          for (let Ru = 0, yu = this._rigCameras.length; Ru < yu; Ru++) {
            const uu = this._rigCameras[Ru],
              yu = uu._rigPostProcess;
            if (yu) {
              "pass" === yu.getEffectName() && (uu.isIntermediate = 0 === this._postProcesses.length), uu._postProcesses = this._postProcesses.slice(0).concat(yu), yu.markTextureDirty()
            } else uu._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !uu.isReusable() && this._postProcesses.indexOf(uu) > -1 ? (Xu.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Ru || Ru < 0 ? this._postProcesses.push(uu) : null === this._postProcesses[Ru] ? this._postProcesses[Ru] = uu : this._postProcesses.splice(Ru, 0, uu), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.Eyu(), this._postProcesses.indexOf(uu))
        }
        detachPostProcess(uu) {
          const Ru = this._postProcesses.indexOf(uu); - 1 !== Ru && (this._postProcesses[Ru] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.Eyu(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return Ju.d.Identity()
        }
        getViewMatrix(uu) {
          return !uu && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.lD().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(uu) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== uu && (this._projectionMatrix = uu)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Ru) {
          if (this._doNotComputeProjectionMatrix || !Ru && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const yu = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = yu, this._refreshFrustumPlanes = !0;
          const Eu = this.eS(),
            Ku = this.lD(),
            Qu = Eu.CEu;
          if (this.mode === uu.PERSPECTIVE_CAMERA) {
            let Ru;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = Eu.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Ru = Ku.useRightHandedSystem ? Ju.d.PerspectiveFovRHToRef : Ju.d.PerspectiveFovLHToRef, Ru(this.fov, Eu.getAspectRatio(this), Qu ? yu : this.minZ, Qu ? this.minZ : yu, this._projectionMatrix, this.fovMode === uu.FOVMODE_VERTICAL_FIXED, Eu.isNDCHalfZRange, this.projectionPlaneTilt, Qu)
          } else {
            const uu = Eu.getRenderWidth() / 2,
              Ru = Eu.getRenderHeight() / 2;
            Ku.useRightHandedSystem ? this.oblique ? Ju.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Ru, this.orthoTop ?? Ru, Qu ? yu : this.minZ, Qu ? this.minZ : yu, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Eu.isNDCHalfZRange) : Ju.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Ru, this.orthoTop ?? Ru, Qu ? yu : this.minZ, Qu ? this.minZ : yu, this._projectionMatrix, Eu.isNDCHalfZRange) : this.oblique ? Ju.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Ru, this.orthoTop ?? Ru, Qu ? yu : this.minZ, Qu ? this.minZ : yu, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, Eu.isNDCHalfZRange) : Ju.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Ru, this.orthoTop ?? Ru, Qu ? yu : this.minZ, Qu ? this.minZ : yu, this._projectionMatrix, Eu.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = Eu.getRenderWidth(), this._cache.renderHeight = Eu.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(uu) {
          return (this.radius || (this.target ? Ju.p.Distance(this.position, this.target) : this.position.length())) + uu
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? xu.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = xu.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Ru && this.rigCameras.length > 0) {
            let Ru = !1;
            for (const yu of this.rigCameras) yu._updateFrustumPlanes(), Ru = Ru || uu.isInFrustum(yu._frustumPlanes);
            return Ru
          }
          return uu.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(uu) {
          return this._updateFrustumPlanes(), uu.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, ru.k)("Ray")
        }
        getForwardRayToRef(uu) {
          throw (0, ru.k)("Ray")
        }
        dispose(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.lD().stopAnimation(this), this.lD().removeCamera(this); this._rigCameras.length > 0;) {
            const uu = this._rigCameras.pop();
            uu && uu.dispose()
          }
          if (this._parentContainer) {
            const uu = this._parentContainer.cameras.indexOf(this);
            uu > -1 && this._parentContainer.cameras.splice(uu, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== uu.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let uu = this._postProcesses.length;
            for (; --uu >= 0;) {
              const Ru = this._postProcesses[uu];
              Ru && Ru.dispose(this)
            }
          }
          let Eu = this.customRenderTargets.length;
          for (; --Eu >= 0;) this.customRenderTargets[Eu].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.lD().eS().releaseRenderPassId(this.renderPassId), super.dispose(Ru, yu)
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
        setCameraRigMode(Ru, yu) {
          if (this.cameraRigMode !== Ru) {
            for (; this._rigCameras.length > 0;) {
              const uu = this._rigCameras.pop();
              uu && uu.dispose()
            }
            if (this.cameraRigMode = Ru, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = yu.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== uu.RIG_MODE_NONE) {
              const uu = this.createRigCamera(this.name + "_L", 0);
              uu && (uu._isLeftCamera = !0);
              const Ru = this.createRigCamera(this.name + "_R", 1);
              Ru && (Ru._isRightCamera = !0), uu && Ru && (this._rigCameras.push(uu), this._rigCameras.push(Ru))
            }
            this._setRigMode(yu), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(uu) {}
        _getVRProjectionMatrix() {
          return Ju.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.eS().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(uu, Ru) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[uu] = Ru, "interaxialDistance" === uu && (this._cameraRigParams.stereoHalfAngle = Ru / .0637 * (Math.PI / 180))
        }
        createRigCamera(uu, Ru) {
          return null
        }
        _updateRigCameras() {
          for (let uu = 0; uu < this._rigCameras.length; uu++) this._rigCameras[uu].minZ = this.minZ, this._rigCameras[uu].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[uu].fov = this.fov, this._rigCameras[uu].upVector.Oyu(this.upVector);
          this.cameraRigMode === uu.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const uu = pu.c.Serialize(this);
          return uu.uniqueId = this.uniqueId, uu.type = this.getClassName(), this.parent && this.parent._serializeAsParent(uu), this.inputs && this.inputs.serialize(uu), pu.c.AppendSerializedAnimations(this, uu), uu.yT = this.serializeAnimationRanges(), uu.isEnabled = this.isEnabled(), uu
        }
        clone(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Eu = pu.c.Clone(uu.GetConstructorFromName(this.getClassName(), Ru, this.lD(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return Eu.name = Ru, Eu.parent = yu, this.onClonedObservable.notifyObservers(Eu), Eu
        }
        Mq(uu) {
          const Ru = Ju.p.Zero();
          return this.getDirectionToRef(uu, Ru), Ru
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(uu, Ru) {
          Ju.p.TransformNormalToRef(uu, this.getWorldMatrix(), Ru)
        }
        static GetConstructorFromName(Ru, yu, Eu) {
          let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const mu = Nu.e.Construct(Ru, yu, Eu, {
            interaxial_distance: Ku,
            isStereoscopicSideBySide: Qu
          });
          return mu || (() => uu._CreateDefaultParsedCamera(yu, Eu))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let uu = this.lD().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (uu *= -1), uu
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(nu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Ku.G)("position")], yu = [(0, Ku.G)("upVector")], Vu = [(0, Ku.K)()], Tu = [(0, Ku.K)()], Wu = [(0, Ku.K)()], ju = [(0, Ku.K)()], Hu = [(0, Ku.K)()], du = [(0, Ku.K)()], bu = [(0, Ku.K)()], Cu = [(0, Ku.K)()], ku = [(0, Ku.K)()], eu = [(0, Ku.K)()], Au = [(0, Ku.K)()], Du = [(0, Ku.K)()], Mu = [(0, Ku.K)()], Iu = [(0, Ku.K)()], Gu = [(0, Ku.K)()], Uu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Vu, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoLeft" in uu,
            get: uu => uu.orthoLeft
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(uu, null, Tu, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoRight" in uu,
            get: uu => uu.orthoRight
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(uu, null, Wu, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoBottom" in uu,
            get: uu => uu.orthoBottom
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(uu, null, ju, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoTop" in uu,
            get: uu => uu.orthoTop
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(uu, null, ku, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: uu => "inertia" in uu,
            get: uu => uu.inertia
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(uu, null, eu, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: uu => "mode" in uu,
            get: uu => uu.mode
          },
          metadata: Qu
        }, null, su), (0, Eu.h)(null, null, Ru, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: uu => "_position" in uu,
            get: uu => uu._position,
            set: (uu, Ru) => {
              uu._position = Ru
            }
          },
          metadata: Qu
        }, tu, lu), (0, Eu.h)(null, null, yu, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: uu => "_upVector" in uu,
            get: uu => uu._upVector,
            set: (uu, Ru) => {
              uu._upVector = Ru
            }
          },
          metadata: Qu
        }, gu, cu), (0, Eu.h)(null, null, Hu, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: uu => "fov" in uu,
            get: uu => uu.fov,
            set: (uu, Ru) => {
              uu.fov = Ru
            }
          },
          metadata: Qu
        }, Lu, zu), (0, Eu.h)(null, null, du, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: uu => "projectionPlaneTilt" in uu,
            get: uu => uu.projectionPlaneTilt,
            set: (uu, Ru) => {
              uu.projectionPlaneTilt = Ru
            }
          },
          metadata: Qu
        }, Fu, wu), (0, Eu.h)(null, null, bu, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "minZ" in uu,
            get: uu => uu.minZ,
            set: (uu, Ru) => {
              uu.minZ = Ru
            }
          },
          metadata: Qu
        }, Zu, hu), (0, Eu.h)(null, null, Cu, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "maxZ" in uu,
            get: uu => uu.maxZ,
            set: (uu, Ru) => {
              uu.maxZ = Ru
            }
          },
          metadata: Qu
        }, Pu, iu), (0, Eu.h)(null, null, Au, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "layerMask" in uu,
            get: uu => uu.layerMask,
            set: (uu, Ru) => {
              uu.layerMask = Ru
            }
          },
          metadata: Qu
        }, Yu, ou), (0, Eu.h)(null, null, Du, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "fovMode" in uu,
            get: uu => uu.fovMode,
            set: (uu, Ru) => {
              uu.fovMode = Ru
            }
          },
          metadata: Qu
        }, qu, Ou), (0, Eu.h)(null, null, Mu, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "cameraRigMode" in uu,
            get: uu => uu.cameraRigMode,
            set: (uu, Ru) => {
              uu.cameraRigMode = Ru
            }
          },
          metadata: Qu
        }, vu, au), (0, Eu.h)(null, null, Iu, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "interaxialDistance" in uu,
            get: uu => uu.interaxialDistance,
            set: (uu, Ru) => {
              uu.interaxialDistance = Ru
            }
          },
          metadata: Qu
        }, fu, uR), (0, Eu.h)(null, null, Gu, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: uu => "isStereoscopicSideBySide" in uu,
            get: uu => uu.isStereoscopicSideBySide,
            set: (uu, Ru) => {
              uu.isStereoscopicSideBySide = Ru
            }
          },
          metadata: Qu
        }, RR, yR), (0, Eu.h)(null, null, Uu, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "ignoreCameraMaxZ" in uu,
            get: uu => uu.ignoreCameraMaxZ,
            set: (uu, Ru) => {
              uu.ignoreCameraMaxZ = Ru
            }
          },
          metadata: Qu
        }, ER, KR), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu._CreateDefaultParsedCamera = (uu, Ru) => {
        throw (0, ru.k)("UniversalCamera")
      }, uu.PERSPECTIVE_CAMERA = 0, uu.ORTHOGRAPHIC_CAMERA = 1, uu.FOVMODE_VERTICAL_FIXED = 0, uu.FOVMODE_HORIZONTAL_FIXED = 1, uu.RIG_MODE_NONE = 0, uu.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, uu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, uu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, uu.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, uu.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, uu.RIG_MODE_VR = 20, uu.RIG_MODE_CUSTOM = 22, uu.ForceAttachControlToAlwaysPreventDefault = !1, uu
    })();

    function Wu(uu, Ru) {
      const yu = uu.type,
        Eu = Tu.GetConstructorFromName(yu, uu.name, Ru, uu.interaxial_distance, uu.isStereoscopicSideBySide),
        Ku = pu.c.Parse(Eu, uu, Ru);
      if (void 0 !== uu.parentId && (Ku._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (Ku._waitingParentInstanceIndex = uu.parentInstanceIndex), Ku.inputs && (Ku.inputs.parse(uu), Ku._setupInputs()), uu.upVector && (Ku.upVector = Ju.p.FromArray(uu.upVector)), Ku.setPosition && (Ku.position.muu(0, 0, 0), Ku.setPosition(Ju.p.FromArray(uu.position))), uu.target && Ku.setTarget && Ku.setTarget(Ju.p.FromArray(uu.target)), uu.cameraRigMode) {
        const Ru = uu.interaxial_distance ? {
          interaxialDistance: uu.interaxial_distance
        } : {};
        Ku.setCameraRigMode(uu.cameraRigMode, Ru)
      }
      if (uu.animations) {
        for (let Ru = 0; Ru < uu.animations.length; Ru++) {
          const yu = uu.animations[Ru],
            Eu = (0, Vu.b)("BABYLON.Animation");
          Eu && Ku.animations.push(Eu.Parse(yu))
        }
        Nu.e.ParseAnimationRanges(Ku, uu, Ru)
      }
      return uu.autoAnimate && Ru.beginAnimation(Ku, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), void 0 !== uu.isEnabled && Ku.tC(uu.isEnabled), Ku
    }
    let ju = !1;

    function Hu() {
      ju || (ju = !0, Tu.Parse = Wu)
    }
  },
  39787: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu) {
        this._cameraPosition = Ru, this._behavior = yu, this.activeInput = !1, this.speed = 1, this.wZ = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new Eu.p, this.rotationAccumulatedPixels = new Eu.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = Eu.p.Zero(), this.rotationDeltaCurrentFrame = Eu.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new Eu.p, this.referenceFrameRate = 60, this._rotationVelocity = new Eu.p, this._prevFrameTimeMs = 0, this._scene = uu
      }
      computeCurrentFrameDeltas() {
        const uu = this._scene.eS().getDeltaTime(),
          Ru = this._getEffectiveDeltaMs(uu);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.e_(0), this.rotationDeltaCurrentFrame.e_(0), this.zoomDeltaCurrentFrame = 0, void(uu > 0 && (this._prevFrameTimeMs = uu));
        this.panDeltaCurrentFrame.e_(0), this.rotationDeltaCurrentFrame.e_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.muu(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Ru, this.panDeltaCurrentFrame), this._rotationVelocity.muu(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.muu(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Ru, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Ru, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.wZ * this._zoomSpeedMultiplier) * Ru, uu > 0 && (this._prevFrameTimeMs = uu), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.e_(0), this.rotationAccumulatedPixels.e_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.e_(0), this.rotationAccumulatedPixels.e_(0)
      }
      resetPanVelocity() {
        this._panVelocity.e_(0), this.panAccumulatedPixels.e_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(uu) {
        const Ru = this._scene.eS().getDeltaTime(),
          yu = this._getEffectiveDeltaMs(Ru),
          Eu = 1e3 / this.referenceFrameRate;
        return Math.pow(uu, yu / Eu)
      }
      getFrameIndependentInputScale(uu) {
        const Ru = 1 - uu;
        if (Ru <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(uu)) / Ru
      }
      _getEffectiveDeltaMs(uu) {
        return uu > 0 ? uu : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(uu, Ru, yu) {
        let Eu = uu;
        const Ku = this._scene.eS().getDeltaTime(),
          Qu = this._getEffectiveDeltaMs(Ku);
        if (0 === Qu) return Eu;
        const mu = this.getFrameIndependentDecay(yu);
        if (Eu *= mu, 0 !== Ru || this.activeInput) {
          const uu = 1 - yu;
          Eu += Ru / Qu * (uu > 0 ? (1 - mu) / uu : 1)
        } else Math.abs(Eu) < 1e-6 && (Eu = 0);
        return Eu
      }
    }
  },
  39796: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor(uu, Ru) {
        this.inputMap = [], this.handlers = uu, this._createDefaultEntries = Ru, this.resetInputMap()
      }
      resolveInteraction(uu, Ru) {
        for (const yu of this.inputMap)
          if (yu.source === uu && this._entryMatches(yu, Ru)) return yu;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(uu, Ru, yu) {
        const Eu = this.inputMap;
        for (let Ku = 0; Ku < Eu.length; Ku++) {
          const Qu = Eu[Ku];
          if (Qu.source === uu && Qu.interaction === Ru && this._entryConditionsMatch(Qu, yu)) return Qu
        }
      }
      getEntries(uu, Ru, yu) {
        const Eu = [],
          Ku = this.inputMap;
        for (let Qu = 0; Qu < Ku.length; Qu++) {
          const mu = Ku[Qu];
          mu.source === uu && mu.interaction === Ru && this._entryConditionsMatch(mu, yu) && Eu.push(mu)
        }
        return Eu
      }
      addEntry(uu) {
        const Ru = this._entrySpecificity(uu);
        let yu = this.inputMap.length;
        for (let Eu = 0; Eu < this.inputMap.length; Eu++)
          if (this._entrySpecificity(this.inputMap[Eu]) < Ru) {
            yu = Eu;
            break
          } this.inputMap.splice(yu, 0, uu)
      }
      setInteraction(uu, Ru, yu) {
        const Eu = this.resolveInteraction(uu, Ru);
        return Eu && this._entryCoversAllConditionsOf(Eu, Ru) ? (Eu.interaction = yu, !0) : (this.addEntry({
          source: uu,
          ...Ru ?? {},
          interaction: yu
        }), !0)
      }
      _entryCoversAllConditionsOf(uu, Ru) {
        if (!Ru) return !0;
        const yu = uu;
        for (const Eu of Object.keys(Ru)) {
          const uu = Ru[Eu];
          if (void 0 !== uu)
            if ("modifiers" === Eu) {
              const Ru = yu.modifiers ?? {};
              for (const yu of Object.keys(uu))
                if (void 0 !== uu[yu] && void 0 === Ru[yu]) return !1
            } else if (void 0 === yu[Eu]) return !1
        }
        return !0
      }
      setInteractions(uu, Ru, yu) {
        let Eu = 0;
        const Ku = this.inputMap;
        for (let Qu = 0; Qu < Ku.length; Qu++) {
          const mu = Ku[Qu];
          mu.source === uu && this._entryMatches(mu, Ru) && (mu.interaction = yu, Eu++)
        }
        return Eu
      }
      _entryMatches(uu, Ru) {
        switch (uu.source) {
          case "pointer":
            return (void 0 === uu.button || uu.button === Ru?.button) && this._matchModifiers(uu.modifiers, Ru?.modifiers);
          case "wheel":
            return this._matchModifiers(uu.modifiers, Ru?.modifiers);
          case "touch":
            return void 0 === uu.touchCount || uu.touchCount === Ru?.touchCount;
          case "keyboard":
            return (void 0 === uu.key || (Array.isArray(uu.key) ? -1 !== uu.key.indexOf(Ru?.key ?? -1) : uu.key === Ru?.key)) && this._matchModifiers(uu.modifiers, Ru?.modifiers)
        }
      }
      _entryConditionsMatch(uu, Ru) {
        if (!Ru) return !0;
        switch (uu.source) {
          case "pointer":
            return (!("button" in Ru) || uu.button === Ru.button) && (!("modifiers" in Ru) || this._entryModifiersMatch(uu.modifiers, Ru.modifiers));
          case "wheel":
            return !("modifiers" in Ru) || this._entryModifiersMatch(uu.modifiers, Ru.modifiers);
          case "touch":
            return !("touchCount" in Ru) || uu.touchCount === Ru.touchCount;
          case "keyboard":
            if ("key" in Ru) {
              if (void 0 === uu.key) return void 0 === Ru.key;
              if (void 0 === Ru.key || (Array.isArray(uu.key) ? -1 === uu.key.indexOf(Ru.key) : uu.key !== Ru.key)) return !1
            }
            return !("modifiers" in Ru) || this._entryModifiersMatch(uu.modifiers, Ru.modifiers)
        }
      }
      _entrySpecificity(uu) {
        let Ru = 0;
        return "button" in uu && void 0 !== uu.button && Ru++, "key" in uu && void 0 !== uu.key && Ru++, "touchCount" in uu && void 0 !== uu.touchCount && Ru++, "modifiers" in uu && uu.modifiers && Ru++, Ru
      }
      _matchModifiers(uu, Ru) {
        return !uu || (void 0 === uu.ctrl || uu.ctrl === (Ru?.ctrl ?? !1)) && ((void 0 === uu.shift || uu.shift === (Ru?.shift ?? !1)) && (void 0 === uu.alt || uu.alt === (Ru?.alt ?? !1)))
      }
      _entryModifiersMatch(uu, Ru) {
        if (!Ru) return !uu;
        return void 0 !== Ru.ctrl || void 0 !== Ru.shift || void 0 !== Ru.alt ? (void 0 === Ru.ctrl || uu?.ctrl === Ru.ctrl) && ((void 0 === Ru.shift || uu?.shift === Ru.shift) && (void 0 === Ru.alt || uu?.alt === Ru.alt)) : !uu || void 0 === uu.ctrl && void 0 === uu.shift && void 0 === uu.alt
      }
    }
  },
  39770: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Wu,
      f: () => pu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39774),
      mu = yu(36830),
      Ju = yu(36833),
      Nu = yu(39784),
      Xu = yu(39780),
      Vu = yu(39787),
      ru = yu(39796);
    class Bu extends Vu.d {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu), this.input = new ru.d({
          translate: (uu, Ru, yu) => {
            this.panAccumulatedPixels.x += uu, this.panAccumulatedPixels.y += Ru, this.panAccumulatedPixels.z += yu
          },
          rotate: (uu, Ru) => {
            this.rotationAccumulatedPixels.x += uu, this.rotationAccumulatedPixels.y += Ru
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
    const xu = mu.d.Zero(),
      Su = mu.f.Identity();
    let pu = (() => {
        var uu;
        let Ru, yu, Xu, Vu, ru = Qu.c,
          pu = [],
          Tu = [],
          Wu = [],
          ju = [],
          Hu = [],
          du = [],
          bu = [],
          Cu = [];
        return uu = class extends ru {
          get inertia() {
            return this._targetInertia
          }
          set inertia(uu) {
            this._targetInertia = uu, this.movement && (this.movement.panInertia = uu, this.movement.rotationInertia = uu)
          }
          constructor(uu, Ru, yu) {
            super(uu, Ru, yu, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new mu.p(0, 0, 0), this.cameraRotation = new mu.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, Eu.l)(this, pu, !1), this.rotation = ((0, Eu.l)(this, Tu), (0, Eu.l)(this, Wu, void 0)), this.rotationQuaternion = (0, Eu.l)(this, ju), this.speed = (0, Eu.l)(this, Hu, 2), this.noRotationConstraint = ((0, Eu.l)(this, du), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = Ju.d, this._rotationEpsilon = Ju.d, this.lockedTarget = (0, Eu.l)(this, bu, null), this._currentTarget = ((0, Eu.l)(this, Cu), mu.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = mu.d.Zero(), this._cameraTransformMatrix = mu.d.Zero(), this._cameraRotationMatrix = mu.d.Zero(), this._transformedReferencePoint = mu.p.Zero(), this._deferredPositionUpdate = new mu.p, this._deferredRotationQuaternionUpdate = new mu.f, this._deferredRotationUpdate = new mu.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = mu.p.Forward(this.lD().useRightHandedSystem), this.rotation = new mu.p(0, this.lD().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new Bu(this.lD(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(uu) {
            this.getWorldMatrix();
            const Ru = mu.m.MS[0],
              yu = mu.m.MS[1];
            return yu.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(yu, Ru), Ru.scaleInPlace(uu), this.globalPosition.add(Ru)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const uu = this.lockedTarget;
              uu.computeWorldMatrix().getTranslationToRef(uu.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.muu(0, 0, 0), this.cameraRotation.muu(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new mu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new mu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new mu.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(uu) {
            uu || super._updateCache();
            const Ru = this._getLockedTargetPosition();
            Ru ? this._cache.lockedTarget ? this._cache.lockedTarget.Oyu(Ru) : this._cache.lockedTarget = Ru.clone() : this._cache.lockedTarget = null, this._cache.rotation.Oyu(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Oyu(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const uu = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(uu) : !uu) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const uu = this.eS();
            return this.speed * Math.sqrt(uu.getDeltaTime() / (100 * uu.getFps()))
          }
          setTarget(uu) {
            this.upVector.normalize(), this._initialFocalDistance = uu.subtract(this.position).length(), this.position.z === uu.z && (this.position.z += Ju.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.lD().useRightHandedSystem ? mu.d.LookAtRHToRef(this.position, uu, mu.p.UpReadOnly, xu) : mu.d.LookAtLHToRef(this.position, uu, mu.p.UpReadOnly, xu), xu.invert();
            const Ru = this.rotationQuaternion || Su;
            mu.f.FromRotationMatrixToRef(xu, Ru), Ru.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(uu) {
            this.setTarget(uu)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(mu.m.Matrix[0]), mu.p.TransformNormalToRef(this.cameraDirection, mu.m.Matrix[0], mu.m.MS[0]), this._deferredPositionUpdate.addInPlace(mu.m.MS[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Oyu(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Oyu(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const uu = this.movement,
              Ru = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            uu.panAccumulatedPixels.addInPlace(this.cameraDirection), uu.rotationAccumulatedPixels.x += this.cameraRotation.x, uu.rotationAccumulatedPixels.y += this.cameraRotation.y, uu.computeCurrentFrameDeltas(), this.cameraDirection.Oyu(uu.panDeltaCurrentFrame), this.cameraRotation.set(uu.rotationDeltaCurrentFrame.x, uu.rotationDeltaCurrentFrame.y);
            const yu = this.speed * this._panningEpsilon;
            !Ru && Math.abs(this.cameraDirection.x) < yu && Math.abs(this.cameraDirection.y) < yu && Math.abs(this.cameraDirection.z) < yu && (this.cameraDirection.e_(0), uu.resetPanVelocity());
            const Eu = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Ku = this._decideIfNeedsToMove(),
              Qu = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Oyu(this.rotation), this._deferredPositionUpdate.Oyu(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Oyu(this.rotationQuaternion), Ku && this._updatePosition(), Qu) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * Eu, this._deferredRotationUpdate.y += this.cameraRotation.y * Eu, !this.noRotationConstraint) {
                const uu = 1.570796;
                this._deferredRotationUpdate.x > uu && (this._deferredRotationUpdate.x = uu), this._deferredRotationUpdate.x < -uu && (this._deferredRotationUpdate.x = -uu)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Oyu(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (mu.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Oyu(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.e_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : mu.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return mu.p.TransformNormalToRef(mu.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), mu.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? Nu.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (mu.f.FromEulerVectorToRef(this.rotation, Su), Nu.b.Y.rotateByQuaternionToRef(Su, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(uu, Ru, yu) {
            if (this.lD().useRightHandedSystem ? mu.d.LookAtRHToRef(uu, Ru, yu, this._viewMatrix) : mu.d.LookAtLHToRef(uu, Ru, yu, this._viewMatrix), this.parent) {
              const uu = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(uu, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Ru, yu) {
            if (this.cameraRigMode !== Qu.c.RIG_MODE_NONE) {
              const yu = new uu(Ru, this.position.clone(), this.lD());
              return yu.isRigCamera = !0, yu.rigParent = this, this.cameraRigMode === Qu.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new mu.f), yu._cameraRigParams = {}, yu.rotationQuaternion = new mu.f), yu.mode = this.mode, yu.orthoLeft = this.orthoLeft, yu.orthoRight = this.orthoRight, yu.orthoTop = this.orthoTop, yu.orthoBottom = this.orthoBottom, yu
            }
            return null
          }
          _updateRigCameras() {
            const uu = this._rigCameras[0],
              Ru = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Qu.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Qu.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Qu.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Qu.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Qu.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const yu = this.cameraRigMode === Qu.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  Eu = this.cameraRigMode === Qu.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * yu, uu), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * Eu, Ru);
                break
              }
              case Qu.c.RIG_MODE_VR:
                uu.rotationQuaternion && Ru.rotationQuaternion && this.rotationQuaternion ? (uu.rotationQuaternion.Oyu(this.rotationQuaternion), Ru.rotationQuaternion.Oyu(this.rotationQuaternion)) : (uu.rotation.Oyu(this.rotation), Ru.rotation.Oyu(this.rotation)), uu.position.Oyu(this.position), Ru.position.Oyu(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Ru, yu) {
            this.getTarget().subtractToRef(this.position, uu._TargetFocalPoint), uu._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const Eu = uu._TargetFocalPoint.addInPlace(this.position);
            mu.d.TranslationToRef(-Eu.x, -Eu.y, -Eu.z, uu._TargetTransformMatrix), uu._TargetTransformMatrix.multiplyToRef(mu.d.RotationAxis(yu.upVector, Ru), uu._RigCamTransformMatrix), mu.d.TranslationToRef(Eu.x, Eu.y, Eu.z, uu._TargetTransformMatrix), uu._RigCamTransformMatrix.multiplyToRef(uu._TargetTransformMatrix, uu._RigCamTransformMatrix), mu.p.TransformCoordinatesToRef(this.position, uu._RigCamTransformMatrix, yu.position), yu.setTarget(Eu)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(ru[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.G)()], Xu = [(0, Ku.K)()], Vu = [(0, Ku.y)("lockedTargetId")], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: uu => "updateUpVectorFromRotation" in uu,
              get: uu => uu.updateUpVectorFromRotation,
              set: (uu, Ru) => {
                uu.updateUpVectorFromRotation = Ru
              }
            },
            metadata: Qu
          }, pu, Tu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: uu => "rotation" in uu,
              get: uu => uu.rotation,
              set: (uu, Ru) => {
                uu.rotation = Ru
              }
            },
            metadata: Qu
          }, Wu, ju), (0, Eu.h)(null, null, Xu, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: uu => "speed" in uu,
              get: uu => uu.speed,
              set: (uu, Ru) => {
                uu.speed = Ru
              }
            },
            metadata: Qu
          }, Hu, du), (0, Eu.h)(null, null, Vu, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: uu => "lockedTarget" in uu,
              get: uu => uu.lockedTarget,
              set: (uu, Ru) => {
                uu.lockedTarget = Ru
              }
            },
            metadata: Qu
          }, bu, Cu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu._RigCamTransformMatrix = new mu.d, uu._TargetTransformMatrix = new mu.d, uu._TargetFocalPoint = new mu.p, uu
      })(),
      Tu = !1;

    function Wu() {
      Tu || (Tu = !0, Xu.e.AddNodeConstructor("TargetCamera", ((uu, Ru) => () => new pu(uu, mu.p.Zero(), Ru))))
    }
  },
  39516: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(39455);
    let Ku = !1;

    function Qu() {
      Ku || (Ku = !0, Eu.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, Eu.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, Eu.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, Eu.d.prototype.getAspectRatio = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = uu.viewport;
        return this.getRenderWidth(Ru) * yu.width / (this.getRenderHeight(Ru) * yu.height)
      }, Eu.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, Eu.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39599: (uu, Ru, yu) => {
    var Eu = yu(39455),
      Ku = yu(39606);
    let Qu = !1;
    Qu || (Qu = !0, (0, Ku.v)(), Eu.d.prototype._loadFileAsync = async function(uu, Ru, yu) {
      return await new Promise(((Eu, Ku) => {
        this._loadFile(uu, (uu => {
          Eu(uu)
        }), void 0, Ru, yu, ((uu, Ru) => {
          Ku(Ru)
        }))
      }))
    })
  },
  39591: (uu, Ru, yu) => {
    (0, yu(39520).d)()
  },
  39520: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(39455);
    let Ku = !1;

    function Qu() {
      Ku || (Ku = !0, Eu.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, Eu.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, Eu.d.prototype.createRenderPassId = function(uu) {
        const Ru = ++Eu.d._RenderPassIdCounter;
        return this._renderPassNames[Ru] = uu ?? "NONAME", Ru
      }, Eu.d.prototype.releaseRenderPassId = function(uu) {
        this._renderPassNames[uu] = void 0;
        for (let Ru = 0; Ru < this.scenes.length; ++Ru) {
          const yu = this.scenes[Ru];
          for (let Ru = 0; Ru < yu.meshes.length; ++Ru) {
            const Eu = yu.meshes[Ru];
            if (Eu._releaseRenderPassId(uu), Eu.mC)
              for (let Ru = 0; Ru < Eu.mC.length; ++Ru) {
                Eu.mC[Ru]._removeDrawWrapper(uu)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(uu)
      })
    }
  },
  39637: (uu, Ru, yu) => {
    var Eu = yu(39639),
      Ku = yu(39455);
    let Qu = !1;
    Qu || (Qu = !0, Ku.d.GetCompatibleTextureLoader = Eu.e)
  },
  39526: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(39396);
    let Ku = !1;

    function Qu() {
      Ku || (Ku = !0, Eu.ThinEngine.prototype.setAlphaMode = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[yu] === uu) {
          if (!Ru) {
            const Ru = 0 === uu;
            this.depthCullingState.depthMask !== Ru && (this.depthCullingState.depthMask = Ru)
          }
          return
        }
        const Eu = 0 === uu;
        this._alphaState.setAlphaBlend(!Eu, yu), this._alphaState.setAlphaMode(uu, yu), Ru || (this.depthCullingState.depthMask = Eu), this._alphaMode[yu] = uu
      })
    }
  },
  39539: (uu, Ru, yu) => {
    var Eu = yu(39385),
      Ku = yu(38448),
      Qu = yu(39396),
      mu = yu(39541),
      Ju = yu(39506);
    class Nu extends mu.b {
      setDepthStencilTexture(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(uu, Ru), !uu) return;
        const yu = this._engine,
          Eu = this._context,
          Ku = uu._hardwareTexture;
        if (Ku && uu._autoMSAAManagement && this._MSAAFramebuffer) {
          const Ru = yu._currentFramebuffer;
          yu._bindUnboundFramebuffer(this._MSAAFramebuffer), Eu.framebufferRenderbuffer(Eu.FRAMEBUFFER, (0, Ju.d)(uu.format) ? Eu.DEPTH_STENCIL_ATTACHMENT : Eu.DEPTH_ATTACHMENT, Eu.RENDERBUFFER, Ku.getMSAARenderBuffer()), yu._bindUnboundFramebuffer(Ru)
        }
      }
      constructor(uu, Ru, yu, Eu, Ku) {
        super(uu, Ru, yu, Eu), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Ku
      }
      _cloneRenderTargetWrapper() {
        let uu;
        return this._colorTextureArray && this._depthStencilTextureArray ? (uu = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), uu.texture.isReady = !0) : uu = super._cloneRenderTargetWrapper(), uu
      }
      _swapRenderTargetWrapper(uu) {
        super._swapRenderTargetWrapper(uu), uu._framebuffer = this._framebuffer, uu._depthStencilBuffer = this._depthStencilBuffer, uu._MSAAFramebuffer = this._MSAAFramebuffer, uu._colorTextureArray = this._colorTextureArray, uu._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const uu = this._engine,
            Ru = uu._currentFramebuffer,
            yu = this._context;
          uu._bindUnboundFramebuffer(this._framebuffer), yu.framebufferRenderbuffer(yu.FRAMEBUFFER, yu.DEPTH_STENCIL_ATTACHMENT, yu.RENDERBUFFER, null), yu.framebufferRenderbuffer(yu.FRAMEBUFFER, yu.DEPTH_ATTACHMENT, yu.RENDERBUFFER, null), yu.framebufferRenderbuffer(yu.FRAMEBUFFER, yu.STENCIL_ATTACHMENT, yu.RENDERBUFFER, null), uu._bindUnboundFramebuffer(Ru), yu.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(uu, Ru, yu, Eu, Ku, Qu)
      }
      shareDepth(uu) {
        super.shareDepth(uu);
        const Ru = this._context,
          yu = this._depthStencilBuffer,
          Eu = uu._MSAAFramebuffer || uu._framebuffer,
          Ku = this._engine;
        uu._depthStencilBuffer && uu._depthStencilBuffer !== yu && Ru.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = yu;
        const Qu = uu._generateStencilBuffer ? Ru.DEPTH_STENCIL_ATTACHMENT : Ru.DEPTH_ATTACHMENT;
        Ku._bindUnboundFramebuffer(Eu), Ru.framebufferRenderbuffer(Ru.FRAMEBUFFER, Qu, Ru.RENDERBUFFER, yu), Ku._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ku = uu._hardwareTexture;
        if (!Ku) return;
        const Qu = this._framebuffer,
          mu = this._engine,
          Ju = mu._currentFramebuffer;
        let Nu;
        if (mu._bindUnboundFramebuffer(Qu), mu.Ep > 1) {
          const Qu = this._context;
          Nu = Qu["COLOR_ATTACHMENT" + Ru], uu.is2DArray || uu.is3D ? (yu = yu ?? this.layerIndices?.[Ru] ?? 0, Qu.framebufferTextureLayer(Qu.FRAMEBUFFER, Nu, Ku.underlyingResource, Eu, yu)) : uu.isCube ? (yu = yu ?? this.faceIndices?.[Ru] ?? 0, Qu.framebufferTexture2D(Qu.FRAMEBUFFER, Nu, Qu.TEXTURE_CUBE_MAP_POSITIVE_X + yu, Ku.underlyingResource, Eu)) : Qu.framebufferTexture2D(Qu.FRAMEBUFFER, Nu, Qu.TEXTURE_2D, Ku.underlyingResource, Eu)
        } else {
          const uu = this._context;
          Nu = uu["COLOR_ATTACHMENT" + Ru + "_WEBGL"];
          const Qu = void 0 !== yu ? uu.TEXTURE_CUBE_MAP_POSITIVE_X + yu : uu.TEXTURE_2D;
          uu.framebufferTexture2D(uu.FRAMEBUFFER, Nu, Qu, Ku.underlyingResource, Eu)
        }
        if (uu._autoMSAAManagement && this._MSAAFramebuffer) {
          const uu = this._context;
          mu._bindUnboundFramebuffer(this._MSAAFramebuffer), uu.framebufferRenderbuffer(uu.FRAMEBUFFER, Nu, uu.RENDERBUFFER, Ku.getMSAARenderBuffer())
        }
        mu._bindUnboundFramebuffer(Ju)
      }
      setTexture(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(uu, Ru, yu), this._bindTextureRenderTarget(uu, Ru)
      }
      setLayerAndFaceIndices(uu, Ru) {
        if (super.setLayerAndFaceIndices(uu, Ru), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const yu = this._attachments?.length ?? this.textures.length;
        for (let Eu = 0; Eu < yu; Eu++) {
          const uu = this.textures[Eu];
          uu && (uu.is2DArray || uu.is3D ? this._bindTextureRenderTarget(uu, Eu, this.layerIndices[Eu]) : uu.isCube ? this._bindTextureRenderTarget(uu, Eu, this.faceIndices[Eu]) : this._bindTextureRenderTarget(uu, Eu))
        }
      }
      setLayerAndFaceIndex() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(uu, Ru, yu), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const Eu = this.textures[uu];
        Eu.is2DArray || Eu.is3D ? this._bindTextureRenderTarget(this.textures[uu], uu, this.layerIndices[uu]) : Eu.isCube && this._bindTextureRenderTarget(this.textures[uu], uu, this.faceIndices[uu])
      }
      resolveMSAATextures() {
        const uu = this._engine,
          Ru = uu._currentFramebuffer;
        uu._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), uu._bindUnboundFramebuffer(Ru)
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Ru = this._context;
        uu || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Ru.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Ru.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Ru.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(uu)
      }
    }
    let Xu = !1;
    Xu || (Xu = !0, Qu.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(uu, Ru, yu) {
      const Eu = new Nu(uu, Ru, yu, this, this._gl);
      return this._renderTargetWrapperCache.push(Eu), Eu
    }, Qu.ThinEngine.prototype.createRenderTargetTexture = function(uu, Ru) {
      const yu = this._createHardwareRenderTargetWrapper(!1, !1, uu);
      let Eu, Ku, Qu = !0,
        mu = !1,
        Ju = !1,
        Nu = 1;
      void 0 !== Ru && "object" === typeof Ru && (Qu = Ru.generateDepthBuffer ?? !0, mu = !!Ru.generateStencilBuffer, Ju = !!Ru.noColorAttachment, Eu = Ru.colorAttachment, Nu = Ru.samples ?? 1, Ku = Ru.label);
      const Xu = Eu || (Ju ? null : this._createInternalTexture(uu, Ru, !0, 5)),
        Vu = uu.width || uu,
        ru = uu.height || uu,
        Bu = this._currentFramebuffer,
        xu = this._gl,
        Su = xu.createFramebuffer();
      if (this._bindUnboundFramebuffer(Su), yu._depthStencilBuffer = this._setupFramebufferDepthAttachments(mu, Qu, Vu, ru), !Xu || Xu.is2DArray || Xu.is3D || xu.framebufferTexture2D(xu.FRAMEBUFFER, xu.COLOR_ATTACHMENT0, xu.TEXTURE_2D, Xu._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(Bu), yu.label = Ku ?? "RenderTargetWrapper", yu._framebuffer = Su, yu._generateDepthBuffer = Qu, yu._generateStencilBuffer = mu, yu.setTextures(Xu), Eu) {
        if (yu._samples = Eu.samples, Eu.samples > 1) {
          const uu = Eu._hardwareTexture.getMSAARenderBuffer(0);
          yu._MSAAFramebuffer = xu.createFramebuffer(), this._bindUnboundFramebuffer(yu._MSAAFramebuffer), xu.framebufferRenderbuffer(xu.FRAMEBUFFER, xu.COLOR_ATTACHMENT0, xu.RENDERBUFFER, uu), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(yu, Nu);
      return yu
    }, Qu.ThinEngine.prototype._createDepthStencilTexture = function(uu, Ru, yu) {
      const Qu = this._gl,
        mu = uu.layers || 0,
        Nu = uu.depth || 0;
      let Xu = Qu.TEXTURE_2D;
      0 !== mu ? Xu = Qu.TEXTURE_2D_ARRAY : 0 !== Nu && (Xu = Qu.TEXTURE_3D);
      const Vu = new Eu.c(this, 12);
      if (Vu.label = Ru.label, !this._caps.depthTextureExtension) return Ku.e.Error("Depth texture is not supported by your browser or hardware."), Vu;
      const ru = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Ru
      };
      if (this._bindTextureDirectly(Xu, Vu, !0), this._setupDepthStencilTexture(Vu, uu, 0 !== ru.comparisonFunction && ru.bilinearFiltering, ru.comparisonFunction, ru.samples), void 0 !== ru.depthTextureFormat) {
        if (15 !== ru.depthTextureFormat && 16 !== ru.depthTextureFormat && 17 !== ru.depthTextureFormat && 13 !== ru.depthTextureFormat && 14 !== ru.depthTextureFormat && 18 !== ru.depthTextureFormat) return Ku.e.Error(`Depth texture ${ru.depthTextureFormat} format is not supported.`), Vu;
        Vu.format = ru.depthTextureFormat
      } else Vu.format = ru.generateStencil ? 13 : 16;
      const Bu = (0, Ju.d)(Vu.format),
        xu = this._getWebGLTextureTypeFromDepthTextureFormat(Vu.format),
        Su = Bu ? Qu.DEPTH_STENCIL : Qu.DEPTH_COMPONENT,
        pu = this._getInternalFormatFromDepthTextureFormat(Vu.format, !0, Bu);
      return Vu.is2DArray ? Qu.texImage3D(Xu, 0, pu, Vu.width, Vu.height, mu, 0, Su, xu, null) : Vu.is3D ? Qu.texImage3D(Xu, 0, pu, Vu.width, Vu.height, Nu, 0, Su, xu, null) : Qu.texImage2D(Xu, 0, pu, Vu.width, Vu.height, 0, Su, xu, null), this._bindTextureDirectly(Xu, null), this._internalTexturesCache.push(Vu), yu._depthStencilBuffer && (Qu.deleteRenderbuffer(yu._depthStencilBuffer), yu._depthStencilBuffer = null), this._bindUnboundFramebuffer(yu._MSAAFramebuffer ?? yu._framebuffer), yu._generateStencilBuffer = Bu, yu._depthStencilTextureWithStencil = Bu, yu._depthStencilBuffer = this._setupFramebufferDepthAttachments(yu._generateStencilBuffer, yu._generateDepthBuffer, yu.width, yu.height, yu.samples, Vu.format), this._bindUnboundFramebuffer(null), Vu
    }, Qu.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(uu, Ru) {
      if (this.Ep < 2 || !uu) return 1;
      if (uu.samples === Ru) return Ru;
      const yu = this._gl;
      Ru = Math.min(Ru, this.getCaps().maxMSAASamples), uu._depthStencilBuffer && (yu.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = null), uu._MSAAFramebuffer && (yu.deleteFramebuffer(uu._MSAAFramebuffer), uu._MSAAFramebuffer = null);
      const Eu = uu.texture?._hardwareTexture;
      if (Eu?.releaseMSAARenderBuffers(), uu.texture && Ru > 1 && "function" === typeof yu.renderbufferStorageMultisample) {
        const Ku = yu.createFramebuffer();
        if (!Ku) throw new Error("Unable to create multi sampled framebuffer");
        uu._MSAAFramebuffer = Ku, this._bindUnboundFramebuffer(uu._MSAAFramebuffer);
        const Qu = this._createRenderBuffer(uu.texture.width, uu.texture.height, Ru, -1, this._getRGBABufferInternalSizedFormat(uu.texture.type, uu.texture.format, uu.texture._useSRGBBuffer), yu.COLOR_ATTACHMENT0, !1);
        if (!Qu) throw new Error("Unable to create multi sampled framebuffer");
        Eu?.addMSAARenderBuffer(Qu)
      }
      this._bindUnboundFramebuffer(uu._MSAAFramebuffer ?? uu._framebuffer), uu.texture && (uu.texture.samples = Ru), uu._samples = Ru;
      const Ku = uu._depthStencilTexture ? uu._depthStencilTexture.format : void 0;
      return uu._depthStencilBuffer = this._setupFramebufferDepthAttachments(uu._generateStencilBuffer, uu._generateDepthBuffer, uu.width, uu.height, Ru, Ku), this._bindUnboundFramebuffer(null), Ru
    }, Qu.ThinEngine.prototype._setupDepthStencilTexture = function(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Qu = Ru.width ?? Ru,
        mu = Ru.height ?? Ru,
        Ju = Ru.layers || 0,
        Nu = Ru.depth || 0;
      uu.baseWidth = Qu, uu.baseHeight = mu, uu.width = Qu, uu.height = mu, uu.is2DArray = Ju > 0, uu.depth = Ju || Nu, uu.isReady = !0, uu.samples = Ku, uu.generateMipMaps = !1, uu.samplingMode = yu ? 2 : 1, uu.type = 0, uu._comparisonFunction = Eu;
      const Xu = this._gl,
        Vu = this._getTextureTarget(uu),
        ru = this._getSamplingParameters(uu.samplingMode, !1);
      Xu.texParameteri(Vu, Xu.TEXTURE_MAG_FILTER, ru.mag), Xu.texParameteri(Vu, Xu.TEXTURE_MIN_FILTER, ru.min), Xu.texParameteri(Vu, Xu.TEXTURE_WRAP_S, Xu.CLAMP_TO_EDGE), Xu.texParameteri(Vu, Xu.TEXTURE_WRAP_T, Xu.CLAMP_TO_EDGE), this.Ep > 1 && (0 === Eu ? (Xu.texParameteri(Vu, Xu.TEXTURE_COMPARE_FUNC, 515), Xu.texParameteri(Vu, Xu.TEXTURE_COMPARE_MODE, Xu.NONE)) : (Xu.texParameteri(Vu, Xu.TEXTURE_COMPARE_FUNC, Eu), Xu.texParameteri(Vu, Xu.TEXTURE_COMPARE_MODE, Xu.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39380: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu.b
    });
    var Eu = yu(39383);
    (0, yu(39526).d)();
    var Ku = yu(39396);
    let Qu = !1;
    ! function() {
      if (Qu) return;
      Qu = !0;
      const uu = new WeakMap,
        Ru = new WeakMap,
        yu = new WeakMap,
        Eu = new WeakMap;
      Ku.ThinEngine.prototype.getAlphaToCoverage = function() {
        return uu.get(this) ?? !1
      }, Ku.ThinEngine.prototype.setAlphaToCoverage = function(yu) {
        (uu.get(this) !== yu || this._gl && Ru.get(this) !== this._gl) && (uu.set(this, yu), this._gl && (yu ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Ru.set(this, this._gl)))
      }, Object.defineProperty(Ku.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (Eu.get(this) !== this._gl && (yu.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), Eu.set(this, this._gl)), yu.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var mu = yu(39385),
      Ju = yu(38448),
      Nu = yu(39496);
    let Xu = !1;
    ! function() {
      function uu(uu, Ru, yu, Eu) {
        let Ku, Qu = 1;
        1 === Eu ? Ku = new Float32Array(Ru * yu * 4) : 2 === Eu ? (Ku = new Uint16Array(Ru * yu * 4), Qu = 15360) : Ku = 7 === Eu ? new Uint32Array(Ru * yu * 4) : new Uint8Array(Ru * yu * 4);
        for (let mu = 0; mu < Ru; mu++)
          for (let Eu = 0; Eu < yu; Eu++) {
            const yu = 3 * (Eu * Ru + mu),
              Ju = 4 * (Eu * Ru + mu);
            Ku[Ju + 0] = uu[yu + 0], Ku[Ju + 1] = uu[yu + 1], Ku[Ju + 2] = uu[yu + 2], Ku[Ju + 3] = Qu
          }
        return Ku
      }

      function Ru(uu) {
        return function(Ru, yu, Eu, Ku, Qu, Ju, Nu, Xu) {
          let Vu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            ru = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const Bu = uu ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            xu = uu ? 10 : 11,
            Su = new mu.c(this, xu);
          Su.baseWidth = yu, Su.baseHeight = Eu, Su.baseDepth = Ku, Su.width = yu, Su.height = Eu, Su.depth = Ku, Su.format = Qu, Su.type = ru, Su.generateMipMaps = Ju, Su.samplingMode = Xu, uu ? Su.is3D = !0 : Su.is2DArray = !0, this._doNotHandleContextLost || (Su._bufferView = Ru), uu ? this.updateRawTexture3D(Su, Ru, Qu, Nu, Vu, ru) : this.updateRawTexture2DArray(Su, Ru, Qu, Nu, Vu, ru), this._bindTextureDirectly(Bu, Su, !0);
          const pu = this._getSamplingParameters(Xu, Ju);
          return this._gl.texParameteri(Bu, this._gl.TEXTURE_MAG_FILTER, pu.mag), this._gl.texParameteri(Bu, this._gl.TEXTURE_MIN_FILTER, pu.min), Ju && this._gl.generateMipmap(Bu), this._bindTextureDirectly(Bu, null), this._internalTexturesCache.push(Su), Su
        }
      }

      function yu(uu) {
        return function(Ru, yu, Eu, Ku) {
          let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const Ju = uu ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Nu = this._getWebGLTextureType(mu),
            Xu = this._getInternalFormat(Eu),
            Vu = this._getRGBABufferInternalSizedFormat(mu, Eu);
          this._bindTextureDirectly(Ju, Ru, !0), this._unpackFlipY(void 0 === Ku || !!Ku), this._doNotHandleContextLost || (Ru._bufferView = yu, Ru.format = Eu, Ru.invertY = Ku, Ru._compression = Qu), Ru.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Qu && yu ? this._gl.compressedTexImage3D(Ju, 0, this.getCaps().s3tc[Qu], Ru.width, Ru.height, Ru.depth, 0, yu) : this._gl.texImage3D(Ju, 0, Vu, Ru.width, Ru.height, Ru.depth, 0, Xu, Nu, yu), Ru.generateMipMaps && this._gl.generateMipmap(Ju), this._bindTextureDirectly(Ju, null), Ru.isReady = !0
        }
      }
      Xu || (Xu = !0, Ku.ThinEngine.prototype.updateRawTexture = function(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!uu) return;
        const Ju = this._getRGBABufferInternalSizedFormat(Qu, yu, mu),
          Nu = this._getInternalFormat(yu),
          Xu = this._getWebGLTextureType(Qu);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, uu, !0), this._unpackFlipY(void 0 === Eu || !!Eu), this._doNotHandleContextLost || (uu._bufferView = Ru, uu.format = yu, uu.type = Qu, uu.invertY = Eu, uu._compression = Ku), uu.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Ku && Ru ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Ku], uu.width, uu.height, 0, Ru) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, Ju, uu.width, uu.height, 0, Nu, Xu, Ru), uu.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), uu.isReady = !0
      }, Ku.ThinEngine.prototype.createRawTexture = function(uu, Ru, yu, Eu, Ku, Qu, Ju) {
        let Nu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Vu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ru = new mu.c(this, 3);
        ru.baseWidth = Ru, ru.baseHeight = yu, ru.width = Ru, ru.height = yu, ru.format = Eu, ru.generateMipMaps = Ku, ru.samplingMode = Ju, ru.invertY = Qu, ru._compression = Nu, ru.type = Xu, ru._useSRGBBuffer = this._getUseSRGBBuffer(Vu, !Ku), this._doNotHandleContextLost || (ru._bufferView = uu), this.updateRawTexture(ru, uu, Eu, Qu, Nu, Xu, ru._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, ru, !0);
        const Bu = this._getSamplingParameters(Ju, Ku);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, Bu.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, Bu.min), Ku && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(ru), ru
      }, Ku.ThinEngine.prototype.createRawCubeTexture = function(uu, Ru, yu, Eu, Ku, Qu, Xu) {
        let Vu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const ru = this._gl,
          Bu = new mu.c(this, 8);
        Bu.isCube = !0, Bu.format = yu, Bu.type = Eu, this._doNotHandleContextLost || (Bu._bufferViewArray = uu);
        const xu = this._getWebGLTextureType(Eu);
        let Su = this._getInternalFormat(yu);
        Su === ru.RGB && (Su = ru.RGBA), xu !== ru.FLOAT || this._caps.textureFloatLinearFiltering ? xu !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? xu !== ru.FLOAT || this._caps.textureFloatRender ? xu !== ru.HALF_FLOAT || this._caps.colorBufferFloat || (Ku = !1, Ju.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Ku = !1, Ju.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Ku = !1, Xu = 1, Ju.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Ku = !1, Xu = 1, Ju.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const pu = Ru,
          Tu = pu;
        Bu.width = pu, Bu.height = Tu, Bu.invertY = Qu, Bu._compression = Vu;
        if (!this.needPOTTextures || (0, Nu.h)(Bu.width) && (0, Nu.h)(Bu.height) || (Ku = !1), uu) this.updateRawCubeTexture(Bu, uu, yu, Eu, Qu, Vu);
        else {
          const uu = this._getRGBABufferInternalSizedFormat(Eu),
            Ru = 0;
          this._bindTextureDirectly(ru.TEXTURE_CUBE_MAP, Bu, !0);
          for (let yu = 0; yu < 6; yu++) Vu ? ru.compressedTexImage2D(ru.TEXTURE_CUBE_MAP_POSITIVE_X + yu, Ru, this.getCaps().s3tc[Vu], Bu.width, Bu.height, 0, void 0) : ru.texImage2D(ru.TEXTURE_CUBE_MAP_POSITIVE_X + yu, Ru, uu, Bu.width, Bu.height, 0, Su, xu, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, Bu, !0), uu && Ku && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Wu = this._getSamplingParameters(Xu, Ku);
        return ru.texParameteri(ru.TEXTURE_CUBE_MAP, ru.TEXTURE_MAG_FILTER, Wu.mag), ru.texParameteri(ru.TEXTURE_CUBE_MAP, ru.TEXTURE_MIN_FILTER, Wu.min), ru.texParameteri(ru.TEXTURE_CUBE_MAP, ru.TEXTURE_WRAP_S, ru.CLAMP_TO_EDGE), ru.texParameteri(ru.TEXTURE_CUBE_MAP, ru.TEXTURE_WRAP_T, ru.CLAMP_TO_EDGE), this._bindTextureDirectly(ru.TEXTURE_CUBE_MAP, null), Bu.generateMipMaps = Ku, Bu.samplingMode = Xu, Bu.isReady = !0, Bu
      }, Ku.ThinEngine.prototype.updateRawCubeTexture = function(Ru, yu, Eu, Ku, Qu) {
        let mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Ru._bufferViewArray = yu, Ru.format = Eu, Ru.type = Ku, Ru.invertY = Qu, Ru._compression = mu;
        const Xu = this._gl,
          Vu = this._getWebGLTextureType(Ku);
        let ru = this._getInternalFormat(Eu);
        const Bu = this._getRGBABufferInternalSizedFormat(Ku);
        let xu = !1;
        ru === Xu.RGB && (ru = Xu.RGBA, xu = !0), this._bindTextureDirectly(Xu.TEXTURE_CUBE_MAP, Ru, !0), this._unpackFlipY(void 0 === Qu || !!Qu), Ru.width % 4 !== 0 && Xu.pixelStorei(Xu.UNPACK_ALIGNMENT, 1);
        for (let Nu = 0; Nu < 6; Nu++) {
          let Eu = yu[Nu];
          mu ? Xu.compressedTexImage2D(Xu.TEXTURE_CUBE_MAP_POSITIVE_X + Nu, Ju, this.getCaps().s3tc[mu], Ru.width, Ru.height, 0, Eu) : (xu && (Eu = uu(Eu, Ru.width, Ru.height, Ku)), Xu.texImage2D(Xu.TEXTURE_CUBE_MAP_POSITIVE_X + Nu, Ju, Bu, Ru.width, Ru.height, 0, ru, Vu, Eu))
        }(!this.needPOTTextures || (0, Nu.h)(Ru.width) && (0, Nu.h)(Ru.height)) && Ru.generateMipMaps && 0 === Ju && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Ru.isReady = !0
      }, Ku.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        let Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Vu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ru = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          Bu = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const xu = this._gl,
          Su = this.createRawCubeTexture(null, Eu, Ku, Qu, !mu, Bu, ru, null);
        yu?.addPendingData(Su), Su.url = Ru, Su.isReady = !1, this._internalTexturesCache.push(Su);
        const pu = (uu, Ru) => {
            yu?.removePendingData(Su), Vu && Vu(uu ? uu.status + " " + uu.statusText : "Failed to parse texture data", Ru)
          },
          Tu = async Ru => {
            if (!Su._hardwareTexture) return;
            const Eu = Ju(Ru);
            if (!Eu) return;
            const mu = Eu instanceof Promise ? await Eu : Eu,
              Vu = Su.width;
            if (Nu) {
              const Ru = this._getWebGLTextureType(Qu);
              let yu = this._getInternalFormat(Ku);
              const Eu = this._getRGBABufferInternalSizedFormat(Qu);
              let Ju = !1;
              yu === xu.RGB && (yu = xu.RGBA, Ju = !0), this._bindTextureDirectly(xu.TEXTURE_CUBE_MAP, Su, !0), this._unpackFlipY(!1);
              const Xu = Nu(mu);
              for (let Ku = 0; Ku < Xu.length; Ku++) {
                const mu = Vu >> Ku;
                for (let Nu = 0; Nu < 6; Nu++) {
                  let Vu = Xu[Ku][Nu];
                  Ju && (Vu = uu(Vu, mu, mu, Qu)), xu.texImage2D(Nu, Ku, Eu, mu, mu, 0, yu, Ru, Vu)
                }
              }
              this._bindTextureDirectly(xu.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Su, mu, Ku, Qu, Bu);
            Su.isReady = !0, yu?.removePendingData(Su), Su.onLoadedObservable.notifyObservers(Su), Su.onLoadedObservable.clear(), Xu && Xu()
          };
        return this._loadFile(Ru, (uu => {
          Tu(uu).catch((uu => {
            pu(void 0, uu)
          }))
        }), void 0, yu?.offlineProvider, !0, pu), Su
      }, Ku.ThinEngine.prototype.createRawTexture2DArray = Ru(!1), Ku.ThinEngine.prototype.createRawTexture3D = Ru(!0), Ku.ThinEngine.prototype.updateRawTexture2DArray = yu(!1), Ku.ThinEngine.prototype.updateRawTexture3D = yu(!0))
    }();
    var Vu = yu(39425);
    let ru = !1;
    ru || (ru = !0, Ku.ThinEngine.prototype._readTexturePixelsSync = function(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Xu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const ru = this._gl;
      if (!ru) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const uu = ru.createFramebuffer();
        if (!uu) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = uu
      }
      ru.bindFramebuffer(ru.FRAMEBUFFER, this._dummyFramebuffer), Eu > -1 && (uu.is2DArray || uu.is3D) ? ru.framebufferTextureLayer(ru.FRAMEBUFFER, ru.COLOR_ATTACHMENT0, uu._hardwareTexture?.underlyingResource, Ku, Eu) : Eu > -1 ? ru.framebufferTexture2D(ru.FRAMEBUFFER, ru.COLOR_ATTACHMENT0, ru.TEXTURE_CUBE_MAP_POSITIVE_X + Eu, uu._hardwareTexture?.underlyingResource, Ku) : ru.framebufferTexture2D(ru.FRAMEBUFFER, ru.COLOR_ATTACHMENT0, ru.TEXTURE_2D, uu._hardwareTexture?.underlyingResource, Ku);
      let Bu = void 0 !== uu.type ? this._getWebGLTextureType(uu.type) : ru.UNSIGNED_BYTE;
      return Ju ? Qu || (Qu = (0, Vu.j)(uu.type, 4 * Ru * yu)) : Bu === ru.UNSIGNED_BYTE ? (Qu || (Qu = new Uint8Array(4 * Ru * yu)), Bu = ru.UNSIGNED_BYTE) : (Qu || (Qu = new Float32Array(4 * Ru * yu)), Bu = ru.FLOAT), mu && this.flushFramebuffer(), ru.readPixels(Nu, Xu, Ru, yu, ru.RGBA, Bu, Qu), ru.bindFramebuffer(ru.FRAMEBUFFER, this._currentFramebuffer), Qu
    }, Ku.ThinEngine.prototype._readTexturePixels = function(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        Xu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu))
    }), (0, yu(39531).d)();
    let Bu = !1;
    Bu || (Bu = !0, Ku.ThinEngine.prototype._createDepthStencilCubeTexture = function(uu, Ru) {
      const yu = new mu.c(this, 12);
      if (yu.isCube = !0, 1 === this.Ep) return Ju.e.Error("Depth cube texture is not supported by WebGL 1."), yu;
      const Eu = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Ru
        },
        Ku = this._gl;
      this._bindTextureDirectly(Ku.TEXTURE_CUBE_MAP, yu, !0), this._setupDepthStencilTexture(yu, uu, Eu.bilinearFiltering, Eu.comparisonFunction);
      for (let Qu = 0; Qu < 6; Qu++) Eu.generateStencil ? Ku.texImage2D(Ku.TEXTURE_CUBE_MAP_POSITIVE_X + Qu, 0, Ku.DEPTH24_STENCIL8, uu, uu, 0, Ku.DEPTH_STENCIL, Ku.UNSIGNED_INT_24_8, null) : Ku.texImage2D(Ku.TEXTURE_CUBE_MAP_POSITIVE_X + Qu, 0, Ku.DEPTH_COMPONENT24, uu, uu, 0, Ku.DEPTH_COMPONENT, Ku.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Ku.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(yu), yu
    }, Ku.ThinEngine.prototype._setCubeMapTextureParams = function(uu, Ru, yu) {
      const Eu = this._gl;
      Eu.texParameteri(Eu.TEXTURE_CUBE_MAP, Eu.TEXTURE_MAG_FILTER, Eu.LINEAR), Eu.texParameteri(Eu.TEXTURE_CUBE_MAP, Eu.TEXTURE_MIN_FILTER, Ru ? Eu.LINEAR_MIPMAP_LINEAR : Eu.LINEAR), Eu.texParameteri(Eu.TEXTURE_CUBE_MAP, Eu.TEXTURE_WRAP_S, Eu.CLAMP_TO_EDGE), Eu.texParameteri(Eu.TEXTURE_CUBE_MAP, Eu.TEXTURE_WRAP_T, Eu.CLAMP_TO_EDGE), uu.samplingMode = Ru ? 3 : 2, Ru && this.getCaps().textureMaxLevel && void 0 !== yu && yu > 0 && (Eu.texParameteri(Eu.TEXTURE_CUBE_MAP, Eu.TEXTURE_MAX_LEVEL, yu), uu._maxLodLevel = yu), this._bindTextureDirectly(Eu.TEXTURE_CUBE_MAP, null)
    }, Ku.ThinEngine.prototype.createCubeTexture = function(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        mu = arguments.length > 6 ? arguments[6] : void 0,
        Xu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Vu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ru = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        Bu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        xu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Su = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        pu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const Tu = this._gl;
      return this.createCubeTextureBase(uu, Ru, yu, !!Eu, Ku, Qu, mu, Xu, Vu, ru, Bu, xu, (uu => this._bindTextureDirectly(Tu.TEXTURE_CUBE_MAP, uu, !0)), ((uu, Ru) => {
        const yu = this.needPOTTextures ? (0, Nu.e)(Ru[0].width, this._caps.maxCubemapTextureSize) : Ru[0].width,
          Qu = yu,
          Xu = [Tu.TEXTURE_CUBE_MAP_POSITIVE_X, Tu.TEXTURE_CUBE_MAP_POSITIVE_Y, Tu.TEXTURE_CUBE_MAP_POSITIVE_Z, Tu.TEXTURE_CUBE_MAP_NEGATIVE_X, Tu.TEXTURE_CUBE_MAP_NEGATIVE_Y, Tu.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(Tu.TEXTURE_CUBE_MAP, uu, !0), this._unpackFlipY(!1);
        const Vu = mu ? this._getInternalFormat(mu, uu._useSRGBBuffer) : uu._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : Tu.RGBA;
        let ru = mu ? this._getInternalFormat(mu) : Tu.RGBA;
        uu._useSRGBBuffer && 1 === this.Ep && (ru = Vu);
        for (let Eu = 0; Eu < Xu.length; Eu++)
          if (Ru[Eu].width !== yu || Ru[Eu].height !== Qu) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void Ju.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = yu, this._workingCanvas.height = Qu, this._workingContext.drawImage(Ru[Eu], 0, 0, Ru[Eu].width, Ru[Eu].height, 0, 0, yu, Qu), Tu.texImage2D(Xu[Eu], 0, Vu, ru, Tu.UNSIGNED_BYTE, this._workingCanvas)
          } else Tu.texImage2D(Xu[Eu], 0, Vu, ru, Tu.UNSIGNED_BYTE, Ru[Eu]);
        Eu || Tu.generateMipmap(Tu.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(uu, !Eu), uu.width = yu, uu.height = Qu, uu.isReady = !0, mu && (uu.format = mu), uu.onLoadedObservable.notifyObservers(uu), uu.onLoadedObservable.clear(), Ku && Ku()
      }), !!Su, pu)
    }, Ku.ThinEngine.prototype.generateMipMapsForCubemap = function(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu.generateMipMaps) {
        const yu = this._gl;
        this._bindTextureDirectly(yu.TEXTURE_CUBE_MAP, uu, !0), yu.generateMipmap(yu.TEXTURE_CUBE_MAP), Ru && this._bindTextureDirectly(yu.TEXTURE_CUBE_MAP, null)
      }
    });
    yu(39539);
    let xu = !1;
    xu || (xu = !0, Ku.ThinEngine.prototype.setDepthStencilTexture = function(uu, Ru, yu, Eu) {
      void 0 !== uu && (Ru && (this._boundUniforms[uu] = Ru), yu && yu.depthStencilTexture ? this._setTexture(uu, yu, !1, !0, Eu) : this._setTexture(uu, null, void 0, void 0, Eu))
    });
    let Su = !1;
    Su || (Su = !0, Ku.ThinEngine.prototype.createRenderTargetCubeTexture = function(uu, Ru) {
      const yu = this._createHardwareRenderTargetWrapper(!1, !0, uu),
        Eu = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Ru
        };
      Eu.generateStencilBuffer = Eu.generateDepthBuffer && Eu.generateStencilBuffer, (1 !== Eu.type || this._caps.textureFloatLinearFiltering) && (2 !== Eu.type || this._caps.textureHalfFloatLinearFiltering) || (Eu.samplingMode = 1);
      const Ku = this._gl,
        Qu = new mu.c(this, 5);
      this._bindTextureDirectly(Ku.TEXTURE_CUBE_MAP, Qu, !0);
      const Nu = this._getSamplingParameters(Eu.samplingMode, Eu.generateMipMaps);
      1 !== Eu.type || this._caps.textureFloat || (Eu.type = 0, Ju.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Ku.texParameteri(Ku.TEXTURE_CUBE_MAP, Ku.TEXTURE_MAG_FILTER, Nu.mag), Ku.texParameteri(Ku.TEXTURE_CUBE_MAP, Ku.TEXTURE_MIN_FILTER, Nu.min), Ku.texParameteri(Ku.TEXTURE_CUBE_MAP, Ku.TEXTURE_WRAP_S, Ku.CLAMP_TO_EDGE), Ku.texParameteri(Ku.TEXTURE_CUBE_MAP, Ku.TEXTURE_WRAP_T, Ku.CLAMP_TO_EDGE);
      for (let mu = 0; mu < 6; mu++) Ku.texImage2D(Ku.TEXTURE_CUBE_MAP_POSITIVE_X + mu, 0, this._getRGBABufferInternalSizedFormat(Eu.type, Eu.format), uu, uu, 0, this._getInternalFormat(Eu.format), this._getWebGLTextureType(Eu.type), null);
      const Xu = Ku.createFramebuffer();
      return this._bindUnboundFramebuffer(Xu), yu._depthStencilBuffer = this._setupFramebufferDepthAttachments(Eu.generateStencilBuffer, Eu.generateDepthBuffer, uu, uu), Eu.generateMipMaps && Ku.generateMipmap(Ku.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Ku.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), yu._framebuffer = Xu, yu._generateDepthBuffer = Eu.generateDepthBuffer, yu._generateStencilBuffer = Eu.generateStencilBuffer, Qu.width = uu, Qu.height = uu, Qu.isReady = !0, Qu.isCube = !0, Qu.samples = 1, Qu.generateMipMaps = Eu.generateMipMaps, Qu.samplingMode = Eu.samplingMode, Qu.type = Eu.type, Qu.format = Eu.format, this._internalTexturesCache.push(Qu), yu.setTextures(Qu), yu
    });
    var pu = yu(39547),
      Tu = yu(39555);
    let Wu = !1;
    Wu || (Wu = !0, Ku.ThinEngine.prototype.createPrefilteredCubeTexture = function(uu, Ru, Eu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Nu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xu = arguments.length > 6 ? arguments[6] : void 0,
        Vu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ru = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(uu, Ru, null, !1, (async uu => {
        if (!uu) return void(Qu && Qu(null));
        const Nu = uu.texture;
        if (ru ? uu.info.sphericalPolynomial && (Nu._sphericalPolynomial = uu.info.sphericalPolynomial) : Nu._sphericalPolynomial = Nu._sphericalPolynomial ?? new pu.e, Nu._source = 9, this.getCaps().textureLOD) return void(Qu && Qu(Nu));
        const Xu = this._gl,
          Vu = uu.width;
        if (!Vu) return;
        const {
          DDSTools: Bu
        } = await yu.e(296).then((() => yu(41343))), xu = [];
        for (let yu = 0; yu < 3; yu++) {
          const Qu = 1 - yu / 2,
            ru = Ku,
            Su = Math.log2(Vu) * Eu + Ku,
            pu = ru + (Su - ru) * Qu,
            Wu = Math.round(Math.min(Math.max(pu, 0), Su)),
            ju = new mu.c(this, 2);
          if (ju.type = Nu.type, ju.format = Nu.format, ju.width = Math.pow(2, Math.max(Math.log2(Vu) - Wu, 0)), ju.height = ju.width, ju.isCube = !0, ju._cachedWrapU = 0, ju._cachedWrapV = 0, this._bindTextureDirectly(Xu.TEXTURE_CUBE_MAP, ju, !0), ju.samplingMode = 2, Xu.texParameteri(Xu.TEXTURE_CUBE_MAP, Xu.TEXTURE_MAG_FILTER, Xu.LINEAR), Xu.texParameteri(Xu.TEXTURE_CUBE_MAP, Xu.TEXTURE_MIN_FILTER, Xu.LINEAR), Xu.texParameteri(Xu.TEXTURE_CUBE_MAP, Xu.TEXTURE_WRAP_S, Xu.CLAMP_TO_EDGE), Xu.texParameteri(Xu.TEXTURE_CUBE_MAP, Xu.TEXTURE_WRAP_T, Xu.CLAMP_TO_EDGE), uu.isDDS) {
            const Ru = uu.info,
              yu = uu.data;
            this._unpackFlipY(Ru.isCompressed), Bu.UploadDDSLevels(this, ju, yu, Ru, !0, 6, Wu)
          } else Ju.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(Xu.TEXTURE_CUBE_MAP, null);
          const Hu = new Tu.e(Ru);
          Hu._isCube = !0, Hu._texture = ju, ju.isReady = !0, xu.push(Hu)
        }
        Nu._lodTextureHigh = xu[2], Nu._lodTextureMid = xu[1], Nu._lodTextureLow = xu[0], Qu && Qu(Nu)
      }), Nu, Xu, Vu, ru, Eu, Ku, null, void 0, !1, Bu)
    });
    var ju = yu(39480);
    let Hu = !1;
    Hu || (Hu = !0, Ku.ThinEngine.prototype.createUniformBuffer = function(uu, Ru) {
      const yu = this._gl.createBuffer();
      if (!yu) throw new Error("Unable to create uniform buffer");
      const Eu = new ju.d(yu);
      return this.bindUniformBuffer(Eu), uu instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, uu, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(uu), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), Eu.references = 1, Eu
    }, Ku.ThinEngine.prototype.createDynamicUniformBuffer = function(uu, Ru) {
      const yu = this._gl.createBuffer();
      if (!yu) throw new Error("Unable to create dynamic uniform buffer");
      const Eu = new ju.d(yu);
      return this.bindUniformBuffer(Eu), uu instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, uu, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(uu), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), Eu.references = 1, Eu
    }, Ku.ThinEngine.prototype.updateUniformBuffer = function(uu, Ru, yu, Eu) {
      this.bindUniformBuffer(uu), void 0 === yu && (yu = 0), void 0 === Eu ? Ru instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, yu, Ru) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, yu, new Float32Array(Ru)) : Ru instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Ru.subarray(yu, yu + Eu)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Ru).subarray(yu, yu + Eu)), this.bindUniformBuffer(null)
    }, Ku.ThinEngine.prototype.bindUniformBuffer = function(uu) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, uu ? uu.underlyingResource : null)
    }, Ku.ThinEngine.prototype.bindUniformBufferBase = function(uu, Ru, yu) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Ru, uu ? uu.underlyingResource : null)
    }, Ku.ThinEngine.prototype.bindUniformBlock = function(uu, Ru, yu) {
      const Eu = uu.program,
        Ku = this._gl.getUniformBlockIndex(Eu, Ru);
      4294967295 !== Ku && this._gl.uniformBlockBinding(Eu, Ku, yu)
    });
    var du = yu(39411),
      bu = yu(39455);
    let Cu = !1;
    Cu || (Cu = !0, bu.d.prototype.displayLoadingUI = function() {
      if (!(0, du.f)()) return;
      const uu = this.loadingScreen;
      uu && uu.displayLoadingUI()
    }, bu.d.prototype.hideLoadingUI = function() {
      if (!(0, du.f)()) return;
      const uu = this._loadingScreen;
      uu && uu.hideLoadingUI()
    }, Object.defineProperty(bu.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = bu.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(uu) {
        this._loadingScreen = uu
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(bu.d.prototype, "loadingUIText", {
      set: function(uu) {
        this.loadingScreen.loadingUIText = uu
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(bu.d.prototype, "loadingUIBackgroundColor", {
      set: function(uu) {
        this.loadingScreen.loadingUIBackgroundColor = uu
      },
      enumerable: !0,
      configurable: !0
    })), (0, yu(39516).d)();
    let ku = !1;
    ku || (ku = !0, bu.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, bu.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, bu.d.prototype.setDepthFunction = function(uu) {
      this._depthCullingState.depthFunc = uu
    }, bu.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, bu.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, bu.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, bu.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, bu.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, bu.d.prototype.setDepthWrite = function(uu) {
      this._depthCullingState.depthMask = uu
    }, bu.d.prototype.setAlphaConstants = function(uu, Ru, yu, Eu) {
      this._alphaState.setAlphaBlendConstants(uu, Ru, yu, Eu)
    }, bu.d.prototype.getAlphaMode = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[uu]
    }, bu.d.prototype.getAlphaEquation = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[uu]
    });
    let eu = !1;
    eu || (eu = !0, bu.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, bu.d.prototype.setStencilBuffer = function(uu) {
      this._stencilState.stencilTest = uu
    }, bu.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, bu.d.prototype.setStencilMask = function(uu) {
      this._stencilState.stencilMask = uu
    }, bu.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, bu.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, bu.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, bu.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, bu.d.prototype.setStencilFunction = function(uu) {
      this._stencilState.stencilFunc = uu
    }, bu.d.prototype.setStencilBackFunction = function(uu) {
      this._stencilState.stencilBackFunc = uu
    }, bu.d.prototype.setStencilFunctionReference = function(uu) {
      this._stencilState.stencilFuncRef = uu
    }, bu.d.prototype.setStencilFunctionMask = function(uu) {
      this._stencilState.stencilFuncMask = uu
    }, bu.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, bu.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, bu.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, bu.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, bu.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, bu.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, bu.d.prototype.setStencilOperationFail = function(uu) {
      this._stencilState.stencilOpStencilFail = uu
    }, bu.d.prototype.setStencilBackOperationFail = function(uu) {
      this._stencilState.stencilBackOpStencilFail = uu
    }, bu.d.prototype.setStencilOperationDepthFail = function(uu) {
      this._stencilState.stencilOpDepthFail = uu
    }, bu.d.prototype.setStencilBackOperationDepthFail = function(uu) {
      this._stencilState.stencilBackOpDepthFail = uu
    }, bu.d.prototype.setStencilOperationPass = function(uu) {
      this._stencilState.stencilOpStencilDepthPass = uu
    }, bu.d.prototype.setStencilBackOperationPass = function(uu) {
      this._stencilState.stencilBackOpStencilDepthPass = uu
    }, bu.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, bu.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    yu(39591);
    let Au = !1;
    Au || (Au = !0, bu.d.prototype.createDepthStencilTexture = function(uu, Ru, yu) {
      if (Ru.isCube) {
        const yu = uu.width || uu;
        return this._createDepthStencilCubeTexture(yu, Ru)
      }
      return this._createDepthStencilTexture(uu, Ru, yu)
    });
    yu(39599), yu(39637);
    let Du = !1;
    Du || (Du = !0, Ku.ThinEngine.prototype.enableScissor = function(uu, Ru, yu, Eu) {
      const Ku = this._gl;
      Ku.enable(Ku.SCISSOR_TEST), Ku.scissor(uu, Ru, yu, Eu)
    }, Ku.ThinEngine.prototype.disableScissor = function() {
      const uu = this._gl;
      uu.disable(uu.SCISSOR_TEST)
    })
  },
  39383: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => bu
    });
    var Eu = yu(39385),
      Ku = yu(36851),
      Qu = yu(39396),
      mu = yu(39458);
    class Ju {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new Nu(uu)
      }
      sampleFrame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mu.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Ru = uu - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Ru)
          }
          this._lastFrameTimeMs = uu
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
        const uu = this._rollingFrameTime.history(0);
        return 0 === uu ? 0 : 1e3 / uu
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
    class Nu {
      constructor(uu) {
        this._samples = new Array(uu), this.reset()
      }
      add(uu) {
        let Ru;
        if (this.isSaturated()) {
          const uu = this._samples[this._pos];
          Ru = uu - this.average, this.average -= Ru / (this._sampleCount - 1), this._m2 -= Ru * (uu - this.average)
        } else this._sampleCount++;
        Ru = uu - this.average, this.average += Ru / this._sampleCount, this._m2 += Ru * (uu - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = uu, this._pos++, this._pos %= this._samples.length
      }
      history(uu) {
        if (uu >= this._sampleCount || uu >= this._samples.length) return 0;
        const Ru = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Ru - uu)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(uu) {
        const Ru = this._samples.length;
        return (uu % Ru + Ru) % Ru
      }
    }
    var Xu = yu(39480),
      Vu = yu(38448),
      ru = yu(39501),
      Bu = yu(39455),
      xu = yu(39411);

    function Su(uu) {
      const Ru = function(uu) {
        if (!(0, xu.d)() || !document.body) return null;
        const Ru = document.createElement("span");
        Ru.textContent = "Hg", Ru.style.font = uu;
        const yu = document.createElement("div");
        yu.style.display = "inline-block", yu.style.width = "1px", yu.style.height = "0px", yu.style.verticalAlign = "bottom";
        const Eu = document.createElement("div");
        let Ku, Qu;
        Eu.style.whiteSpace = "nowrap", Eu.appendChild(Ru), Eu.appendChild(yu), document.body.appendChild(Eu);
        try {
          Qu = yu.getBoundingClientRect().top - Ru.getBoundingClientRect().top, yu.style.verticalAlign = "baseline", Ku = yu.getBoundingClientRect().top - Ru.getBoundingClientRect().top
        } finally {
          document.body.removeChild(Eu)
        }
        const mu = {
          ascent: Ku,
          height: Qu,
          descent: Qu - Ku
        };
        return pu(mu) ? mu : null
      }(uu);
      if (Ru) return Ru;
      const yu = function(uu) {
        let Ru = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Ru = new OffscreenCanvas(64, 64) : (0, xu.d)() && "function" === typeof document.createElement && (Ru = document.createElement("canvas"), Ru.width = 64, Ru.height = 64);
          const yu = Ru?.getContext("2d");
          if (!yu) return null;
          yu.font = uu;
          const Eu = yu.measureText("Hg"),
            Ku = Number(Eu.actualBoundingBoxAscent ?? Eu.fontBoundingBoxAscent),
            Qu = Number(Eu.actualBoundingBoxDescent ?? Eu.fontBoundingBoxDescent),
            mu = {
              ascent: Ku,
              height: Ku + Qu,
              descent: Qu
            };
          return pu(mu) ? mu : null
        } catch {
          return null
        } finally {
          const uu = Ru;
          "function" === typeof uu?.dispose && uu.dispose()
        }
      }(uu);
      return yu || function(uu) {
        const Ru = Math.max(1, function(uu) {
            const Ru = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(uu || ""));
            return Ru ? Number(Ru[1]) : 16
          }(uu)),
          yu = .8 * Ru,
          Eu = .2 * Ru;
        return {
          ascent: yu,
          height: yu + Eu,
          descent: Eu
        }
      }(uu)
    }

    function pu(uu) {
      return Number.isFinite(uu.ascent) && Number.isFinite(uu.height) && Number.isFinite(uu.descent) && uu.height > 0
    }

    function Tu(uu) {
      if (uu.requestPointerLock) {
        const Ru = uu.requestPointerLock();
        Ru instanceof Promise ? Ru.then((() => {
          uu.focus()
        })).catch((() => {})) : uu.focus()
      }
    }
    var Wu = yu(39514),
      ju = yu(39447),
      Hu = yu(39516),
      du = yu(39520);
    class bu extends Qu.ThinEngine {
      static get NpmPackage() {
        return Bu.d.NpmPackage
      }
      static get Version() {
        return Bu.d.Version
      }
      static get Instances() {
        return Ku.b.Instances
      }
      static get LastCreatedEngine() {
        return Ku.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Ku.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(uu) {
        return Bu.d.DefaultLoadingScreenFactory(uu)
      }
      get _supportsHardwareTextureRescaling() {
        return !!bu._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Hu.d)(), (0, du.d)(), super(uu, Ru, yu, Eu), this._performanceMonitor = new Ju, this._drawCalls = new Wu.b, uu && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(uu) {
        super._sharedInit(uu),
          function(uu, Ru, yu) {
            uu._onCanvasFocus = () => {
              uu.onCanvasFocusObservable.notifyObservers(uu)
            }, uu._onCanvasBlur = () => {
              uu.onCanvasBlurObservable.notifyObservers(uu)
            }, uu._onCanvasContextMenu = Ru => {
              uu.disableContextMenu && Ru.preventDefault()
            }, Ru.addEventListener("focus", uu._onCanvasFocus), Ru.addEventListener("blur", uu._onCanvasBlur), Ru.addEventListener("contextmenu", uu._onCanvasContextMenu), uu._onBlur = () => {
              uu.disablePerformanceMonitorInBackground && uu.performanceMonitor.disable(), uu._windowIsBackground = !0
            }, uu._onFocus = () => {
              uu.disablePerformanceMonitorInBackground && uu.performanceMonitor.enable(), uu._windowIsBackground = !1
            }, uu._onCanvasPointerOut = yu => {
              document.elementFromPoint(yu.clientX, yu.clientY) !== Ru && uu.onCanvasPointerOutObservable.notifyObservers(yu)
            };
            const Eu = uu.getHostWindow();
            Eu && "function" === typeof Eu.addEventListener && (Eu.addEventListener("blur", uu._onBlur), Eu.addEventListener("focus", uu._onFocus)), Ru.addEventListener("pointerout", uu._onCanvasPointerOut), yu.doNotHandleTouchAction || function(uu) {
              uu && uu.setAttribute && (uu.setAttribute("touch-action", "none"), uu.style.touchAction = "none", uu.style.webkitTapHighlightColor = "transparent")
            }(Ru), !Bu.d.audioEngine && yu.audioEngine && Bu.d.AudioEngineFactory && (Bu.d.audioEngine = Bu.d.AudioEngineFactory(uu.getRenderingCanvas(), uu.getAudioContext(), uu.getAudioDestination())), (0, xu.d)() && (uu._onFullscreenChange = () => {
              uu.isFullscreen = !!document.fullscreenElement, uu.isFullscreen && uu._pointerLockRequested && Ru && Tu(Ru)
            }, document.addEventListener("fullscreenchange", uu._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", uu._onFullscreenChange, !1), uu._onPointerLockChange = () => {
              uu.isPointerLock = document.pointerLockElement === Ru
            }, document.addEventListener("pointerlockchange", uu._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", uu._onPointerLockChange, !1)), uu.enableOfflineSupport = void 0 !== Bu.d.OfflineProviderFactory, uu._deterministicLockstep = !!yu.deterministicLockstep, uu._lockstepMaxSteps = yu.lockstepMaxSteps || 0, uu._timeStep = yu.timeStep || 1 / 60
          }(this, uu, this._creationOptions)
      }
      resizeImageBitmap(uu, Ru, yu) {
        return function(uu, Ru, yu, Eu) {
          const Ku = uu.createCanvas(yu, Eu).getContext("2d");
          if (!Ku) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Ku.drawImage(Ru, 0, 0), Ku.getImageData(0, 0, yu, Eu).data
        }(this, uu, Ru, yu)
      }
      async _createImageBitmapFromSource(uu, Ru) {
        return await async function(uu, Ru, yu) {
          return await new Promise(((Eu, Ku) => {
            const Qu = new Image;
            Qu.onload = () => {
              Qu.decode().then((() => {
                uu.createImageBitmap(Qu, yu).then((uu => {
                  Eu(uu)
                }))
              }))
            }, Qu.onerror = () => {
              Ku(`Error loading image ${Qu.src}`)
            }, Qu.src = Ru
          }))
        }(this, uu, Ru)
      }
      switchFullscreen(uu) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(uu)
      }
      enterFullscreen(uu) {
        this.isFullscreen || (this._pointerLockRequested = uu, this._renderingCanvas && function(uu) {
          const Ru = uu.requestFullscreen || uu.webkitRequestFullscreen;
          Ru && Ru.call(uu)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const uu = document;
          document.exitFullscreen ? document.exitFullscreen() : uu.webkitCancelFullScreen && uu.webkitCancelFullScreen()
        }()
      }
      setDitheringState(uu) {
        uu ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(uu) {
        uu ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(uu, Ru, yu, Eu) {
        const Ku = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(uu, Ru, yu, Eu), Ku
      }
      scissorClear(uu, Ru, yu, Eu, Ku) {
        this.enableScissor(uu, Ru, yu, Eu), this.clear(Ku, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(uu) {
        const Ru = this._gl.getAttachedShaders(uu);
        return Ru ? this._gl.getShaderSource(Ru[0]) : null
      }
      getFragmentShaderSource(uu) {
        const Ru = this._gl.getAttachedShaders(uu);
        return Ru ? this._gl.getShaderSource(Ru[1]) : null
      }
      set framebufferDimensionsObject(uu) {
        this._framebufferDimensionsObject = uu, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const uu of this.scenes) uu.resetCachedMaterial(), uu._rebuildGeometries();
        for (const uu of this._virtualScenes) uu.resetCachedMaterial(), uu._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(uu) {
        return Su(uu)
      }
      enterPointerlock() {
        this._renderingCanvas && Tu(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      gH() {
        this._measureFps(), super.gH()
      }
      _deletePipelineContext(uu) {
        const Ru = uu;
        Ru && Ru.program && Ru.transformFeedback && (this.deleteTransformFeedback(Ru.transformFeedback), Ru.transformFeedback = null), super._deletePipelineContext(uu)
      }
      createShaderProgram(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Ku = Ku || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const mu = super.createShaderProgram(uu, Ru, yu, Eu, Ku, Qu);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), mu
      }
      _createShaderProgram(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Qu = Eu.createProgram();
        if (uu.program = Qu, !Qu) throw new Error("Unable to create program");
        if (Eu.attachShader(Qu, Ru), Eu.attachShader(Qu, yu), this.Ep > 1 && Ku) {
          const Ru = this.createTransformFeedback();
          this.bindTransformFeedback(Ru), this.setTranformFeedbackVaryings(Qu, Ku), uu.transformFeedback = Ru
        }
        return Eu.linkProgram(Qu), this.Ep > 1 && Ku && this.bindTransformFeedback(null), uu.context = Eu, uu.vertexShader = Ru, uu.fragmentShader = yu, uu.isParallelCompiled || this._finalizePipelineContext(uu), Qu
      }
      _releaseTexture(uu) {
        super._releaseTexture(uu)
      }
      _releaseRenderTargetWrapper(uu) {
        super._releaseRenderTargetWrapper(uu);
        for (const Ru of this.scenes) {
          for (const yu of Ru.postProcesses) yu._outputTexture === uu && (yu._outputTexture = null);
          for (const yu of Ru.cameras)
            for (const Ru of yu._postProcesses) Ru && Ru._outputTexture === uu && (Ru._outputTexture = null)
        }
      }
      _rescaleTexture(uu, Ru, yu, Eu, Ku) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Qu = this.createRenderTargetTexture({
          width: Ru.width,
          height: Ru.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && bu._RescalePostProcessFactory && (this._rescalePostProcess = bu._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const mu = () => {
              this._rescalePostProcess.onApply = function(Ru) {
                Ru._bindTexture("textureSampler", uu)
              };
              let mu = yu;
              mu || (mu = this.scenes[this.scenes.length - 1]), mu.postProcessManager.directRender([this._rescalePostProcess], Qu, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Ru, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, Eu, 0, 0, Ru.width, Ru.height, 0), this.unBindFramebuffer(Qu), Qu.dispose(), Ku && Ku()
            },
            Ju = this._rescalePostProcess.getEffect();
          Ju ? Ju.executeWhenCompiled(mu) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((uu => {
            uu.executeWhenCompiled(mu)
          }))
        }
      }
      wrapWebGLTexture(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const mu = new ru.e(uu, this._gl),
          Ju = new Eu.c(this, 15, !0);
        return Ju._hardwareTexture = mu, Ju.baseWidth = Ku, Ju.baseHeight = Qu, Ju.width = Ku, Ju.height = Qu, Ju.isReady = !0, Ju.useMipMaps = Ru, this.updateTextureSamplingMode(yu, Ju), Ju
      }
      updateWrappedWebGLTexture(uu, Ru) {
        if (15 !== uu.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const Eu of this._renderTargetWrapperCache)
          if (Eu.textures?.includes(uu)) {
            if (Eu.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (Eu._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } uu._hardwareTexture = new ru.e(Ru, this._gl), uu.isReady = !0, uu._cachedCoordinatesMode = null, uu._cachedWrapU = null, uu._cachedWrapV = null, uu._cachedWrapR = null, uu._cachedAnisotropicFilteringLevel = null;
        for (const Eu in this._boundTexturesCache) this._boundTexturesCache[Eu] === uu && (this._boundTexturesCache[Eu] = null);
        this.updateTextureSamplingMode(uu.samplingMode, uu);
        const yu = this._gl;
        for (const Eu of this._renderTargetWrapperCache) {
          if (Eu.texture !== uu) continue;
          const Ku = Eu,
            Qu = Eu.samples,
            mu = Qu > 1;
          Ku._framebuffer && yu.deleteFramebuffer(Ku._framebuffer), !mu && Ku._depthStencilBuffer && (yu.deleteRenderbuffer(Ku._depthStencilBuffer), Ku._depthStencilBuffer = null);
          const Ju = this._currentFramebuffer,
            Nu = yu.createFramebuffer();
          this._bindUnboundFramebuffer(Nu), yu.framebufferTexture2D(yu.FRAMEBUFFER, yu.COLOR_ATTACHMENT0, yu.TEXTURE_2D, Ru, 0), mu || (Ku._depthStencilBuffer = this._setupFramebufferDepthAttachments(Eu._generateStencilBuffer, Eu._generateDepthBuffer, Eu.width, Eu.height)), this._bindUnboundFramebuffer(Ju), Ku._framebuffer = Nu, mu && (Eu._samples = 1, this.updateRenderTargetTextureSampleCount(Ku, Qu))
        }
      }
      _uploadImageToTexture(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ku = this._gl,
          Qu = this._getWebGLTextureType(uu.type),
          mu = this._getInternalFormat(uu.format),
          Ju = this._getRGBABufferInternalSizedFormat(uu.type, mu),
          Nu = uu.isCube ? Ku.TEXTURE_CUBE_MAP : Ku.TEXTURE_2D;
        this._bindTextureDirectly(Nu, uu, !0), this._unpackFlipY(uu.invertY);
        let Xu = Ku.TEXTURE_2D;
        uu.isCube && (Xu = Ku.TEXTURE_CUBE_MAP_POSITIVE_X + yu), Ku.texImage2D(Xu, Eu, Ju, mu, Qu, Ru), this._bindTextureDirectly(Nu, null, !0)
      }
      updateTextureComparisonFunction(uu, Ru) {
        if (1 === this.Ep) return void Vu.e.Error("WebGL 1 does not support texture comparison.");
        const yu = this._gl;
        uu.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, uu, !0), 0 === Ru ? (yu.texParameteri(yu.TEXTURE_CUBE_MAP, yu.TEXTURE_COMPARE_FUNC, 515), yu.texParameteri(yu.TEXTURE_CUBE_MAP, yu.TEXTURE_COMPARE_MODE, yu.NONE)) : (yu.texParameteri(yu.TEXTURE_CUBE_MAP, yu.TEXTURE_COMPARE_FUNC, Ru), yu.texParameteri(yu.TEXTURE_CUBE_MAP, yu.TEXTURE_COMPARE_MODE, yu.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, uu, !0), 0 === Ru ? (yu.texParameteri(yu.TEXTURE_2D, yu.TEXTURE_COMPARE_FUNC, 515), yu.texParameteri(yu.TEXTURE_2D, yu.TEXTURE_COMPARE_MODE, yu.NONE)) : (yu.texParameteri(yu.TEXTURE_2D, yu.TEXTURE_COMPARE_FUNC, Ru), yu.texParameteri(yu.TEXTURE_2D, yu.TEXTURE_COMPARE_MODE, yu.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), uu._comparisonFunction = Ru
      }
      createInstancesBuffer(uu) {
        const Ru = this._gl.createBuffer();
        if (!Ru) throw new Error("Unable to create instance buffer");
        const yu = new Xu.d(Ru);
        return yu.Nr = uu, this.bindArrayBuffer(yu), this._gl.bufferData(this._gl.ARRAY_BUFFER, uu, this._gl.DYNAMIC_DRAW), yu.references = 1, yu
      }
      deleteInstancesBuffer(uu) {
        this._gl.deleteBuffer(uu)
      }
      async _clientWaitAsync(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const Eu = this._gl;
        return await new Promise(((Ku, Qu) => {
          (0, ju.f)((() => {
            const yu = Eu.clientWaitSync(uu, Ru, 0);
            if (yu == Eu.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return yu != Eu.TIMEOUT_EXPIRED
          }), Ku, Qu, yu)
        }))
      }
      _readPixelsAsync(uu, Ru, yu, Eu, Ku, Qu, mu) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const Ju = this._gl,
          Nu = Ju.createBuffer();
        Ju.bindBuffer(Ju.PIXEL_PACK_BUFFER, Nu), Ju.bufferData(Ju.PIXEL_PACK_BUFFER, mu.byteLength, Ju.STREAM_READ), Ju.readPixels(uu, Ru, yu, Eu, Ku, Qu, 0), Ju.bindBuffer(Ju.PIXEL_PACK_BUFFER, null);
        const Xu = Ju.fenceSync(Ju.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return Xu ? (Ju.flush(), this._clientWaitAsync(Xu, 0, 10).then((() => (Ju.deleteSync(Xu), Ju.bindBuffer(Ju.PIXEL_PACK_BUFFER, Nu), Ju.getBufferSubData(Ju.PIXEL_PACK_BUFFER, 0, mu), Ju.bindBuffer(Ju.PIXEL_PACK_BUFFER, null), Ju.deleteBuffer(Nu), mu)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(uu, Ru) {
            1 === Ku.b.Instances.length && Bu.d.audioEngine && (Bu.d.audioEngine.dispose(), Bu.d.audioEngine = null);
            const yu = uu.getHostWindow();
            yu && "function" === typeof yu.removeEventListener && (yu.removeEventListener("blur", uu._onBlur), yu.removeEventListener("focus", uu._onFocus)), Ru && (Ru.removeEventListener("focus", uu._onCanvasFocus), Ru.removeEventListener("blur", uu._onCanvasBlur), Ru.removeEventListener("pointerout", uu._onCanvasPointerOut), Ru.removeEventListener("contextmenu", uu._onCanvasContextMenu)), (0, xu.d)() && (document.removeEventListener("fullscreenchange", uu._onFullscreenChange), document.removeEventListener("mozfullscreenchange", uu._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", uu._onFullscreenChange), document.removeEventListener("msfullscreenchange", uu._onFullscreenChange), document.removeEventListener("pointerlockchange", uu._onPointerLockChange), document.removeEventListener("mspointerlockchange", uu._onPointerLockChange), document.removeEventListener("mozpointerlockchange", uu._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", uu._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    bu.ALPHA_DISABLE = 0, bu.ALPHA_ADD = 1, bu.ALPHA_COMBINE = 2, bu.ALPHA_SUBTRACT = 3, bu.ALPHA_MULTIPLY = 4, bu.ALPHA_MAXIMIZED = 5, bu.ALPHA_ONEONE = 6, bu.ALPHA_PREMULTIPLIED = 7, bu.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, bu.ALPHA_INTERPOLATE = 9, bu.ALPHA_SCREENMODE = 10, bu.DELAYLOADSTATE_NONE = 0, bu.DELAYLOADSTATE_LOADED = 1, bu.DELAYLOADSTATE_LOADING = 2, bu.DELAYLOADSTATE_NOTLOADED = 4, bu.NEVER = 512, bu.ALWAYS = 519, bu.LESS = 513, bu.EQUAL = 514, bu.LEQUAL = 515, bu.GREATER = 516, bu.GEQUAL = 518, bu.NOTEQUAL = 517, bu.KEEP = 7680, bu.REPLACE = 7681, bu.INCR = 7682, bu.DECR = 7683, bu.INVERT = 5386, bu.INCR_WRAP = 34055, bu.DECR_WRAP = 34056, bu.TEXTURE_CLAMP_ADDRESSMODE = 0, bu.TEXTURE_WRAP_ADDRESSMODE = 1, bu.TEXTURE_MIRROR_ADDRESSMODE = 2, bu.TEXTUREFORMAT_ALPHA = 0, bu.TEXTUREFORMAT_LUMINANCE = 1, bu.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, bu.TEXTUREFORMAT_RGB = 4, bu.TEXTUREFORMAT_RGBA = 5, bu.TEXTUREFORMAT_RED = 6, bu.TEXTUREFORMAT_R = 6, bu.TEXTUREFORMAT_R16_UNORM = 33322, bu.TEXTUREFORMAT_RG16_UNORM = 33324, bu.TEXTUREFORMAT_RGB16_UNORM = 32852, bu.TEXTUREFORMAT_RGBA16_UNORM = 32859, bu.TEXTUREFORMAT_R16_SNORM = 36760, bu.TEXTUREFORMAT_RG16_SNORM = 36761, bu.TEXTUREFORMAT_RGB16_SNORM = 36762, bu.TEXTUREFORMAT_RGBA16_SNORM = 36763, bu.TEXTUREFORMAT_RG = 7, bu.TEXTUREFORMAT_RED_INTEGER = 8, bu.TEXTUREFORMAT_R_INTEGER = 8, bu.TEXTUREFORMAT_RG_INTEGER = 9, bu.TEXTUREFORMAT_RGB_INTEGER = 10, bu.TEXTUREFORMAT_RGBA_INTEGER = 11, bu.TEXTURETYPE_UNSIGNED_BYTE = 0, bu.TEXTURETYPE_UNSIGNED_INT = 0, bu.TEXTURETYPE_FLOAT = 1, bu.TEXTURETYPE_HALF_FLOAT = 2, bu.TEXTURETYPE_BYTE = 3, bu.TEXTURETYPE_SHORT = 4, bu.TEXTURETYPE_UNSIGNED_SHORT = 5, bu.TEXTURETYPE_INT = 6, bu.TEXTURETYPE_UNSIGNED_INTEGER = 7, bu.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, bu.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, bu.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, bu.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, bu.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, bu.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, bu.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, bu.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, bu.TEXTURE_NEAREST_SAMPLINGMODE = 1, bu.TEXTURE_BILINEAR_SAMPLINGMODE = 2, bu.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, bu.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, bu.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, bu.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, bu.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, bu.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, bu.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, bu.TEXTURE_NEAREST_LINEAR = 7, bu.TEXTURE_NEAREST_NEAREST = 1, bu.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, bu.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, bu.TEXTURE_LINEAR_LINEAR = 2, bu.TEXTURE_LINEAR_NEAREST = 12, bu.TEXTURE_EXPLICIT_MODE = 0, bu.TEXTURE_SPHERICAL_MODE = 1, bu.TEXTURE_PLANAR_MODE = 2, bu.TEXTURE_CUBIC_MODE = 3, bu.TEXTURE_PROJECTION_MODE = 4, bu.TEXTURE_SKYBOX_MODE = 5, bu.TEXTURE_INVCUBIC_MODE = 6, bu.TEXTURE_EQUIRECTANGULAR_MODE = 7, bu.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, bu.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, bu.SCALEMODE_FLOOR = 1, bu.SCALEMODE_NEAREST = 2, bu.SCALEMODE_CEILING = 3
  },
  39541: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(39506);
    class Ku {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(uu) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = uu, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, uu && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, Eu.d)(uu.format))
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
      getBaseArrayLayer(uu) {
        if (!this._textures) return -1;
        const Ru = this._textures[uu],
          yu = this._layerIndices?.[uu] ?? 0,
          Eu = this._faceIndices?.[uu] ?? 0;
        return Ru.isCube ? 6 * yu + Eu : Ru.is3D ? 0 : yu
      }
      get samples() {
        return this._samples
      }
      setSamples(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === uu && !yu) return uu;
        const Eu = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, uu, Ru) : this._engine.updateRenderTargetTextureSampleCount(this, uu);
        return this._samples = uu, Eu
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(uu, Ru, yu, Eu, Ku) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = uu, this._isCube = Ru, this._size = yu, this._engine = Eu, this._depthStencilTexture = null, this.label = Ku
      }
      setTextures(uu) {
        Array.isArray(uu) ? this._textures = uu : this._textures = uu ? [uu] : null
      }
      setTexture(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Ru] !== uu && (this._textures[Ru] && yu && this._textures[Ru].dispose(), this._textures[Ru] = uu)
      }
      setLayerAndFaceIndices(uu, Ru) {
        this._layerIndices = uu, this._faceIndices = Ru
      }
      setLayerAndFaceIndex() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Ru && Ru >= 0 && (this._layerIndices[uu] = Ru), void 0 !== yu && yu >= 0 && (this._faceIndices[uu] = yu)
      }
      createDepthStencilTexture() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = yu, this._depthStencilTextureLabel = Qu, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Ru,
          comparisonFunction: uu,
          generateStencil: yu,
          isCube: this._isCube,
          samples: Eu,
          depthTextureFormat: Ku,
          label: Qu
        }, this), this._depthStencilTexture
      }
      _shareDepth(uu) {
        this.shareDepth(uu)
      }
      shareDepth(uu) {
        this._depthStencilTexture && (uu._depthStencilTexture && uu._depthStencilTexture.dispose(), uu._depthStencilTexture = this._depthStencilTexture, uu._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(uu) {
        this.texture && this.texture._swapAndDie(uu), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let uu = null;
        if (this._isMulti) {
          const Ru = this.textures;
          if (Ru && Ru.length > 0) {
            let yu = !1,
              Eu = Ru.length,
              Ku = -1;
            const Qu = Ru[Ru.length - 1]._source;
            14 !== Qu && 12 !== Qu || (yu = !0, Ku = Ru[Ru.length - 1].format, Eu--);
            const mu = [],
              Ju = [],
              Nu = [],
              Xu = [],
              Vu = [],
              ru = [],
              Bu = [],
              xu = {};
            for (let uu = 0; uu < Eu; ++uu) {
              const yu = Ru[uu];
              mu.push(yu.samplingMode), Ju.push(yu.type), Nu.push(yu.format);
              void 0 !== xu[yu.uniqueId] ? (Xu.push(-1), Bu.push(0)) : (xu[yu.uniqueId] = uu, yu.is2DArray ? (Xu.push(35866), Bu.push(yu.depth)) : yu.isCube ? (Xu.push(34067), Bu.push(0)) : yu.is3D ? (Xu.push(32879), Bu.push(yu.depth)) : (Xu.push(3553), Bu.push(0))), this._faceIndices && Vu.push(this._faceIndices[uu] ?? 0), this._layerIndices && ru.push(this._layerIndices[uu] ?? 0)
            }
            const Su = {
                samplingModes: mu,
                generateMipMaps: Ru[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: yu,
                depthTextureFormat: Ku,
                types: Ju,
                formats: Nu,
                Omu: Eu,
                targetTypes: Xu,
                faceIndex: Vu,
                layerIndex: ru,
                layerCounts: Bu,
                label: this.label
              },
              pu = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            uu = this._engine.createMultipleRenderTarget(pu, Su);
            for (let Tu = 0; Tu < Eu; ++Tu) {
              if (-1 !== Xu[Tu]) continue;
              const yu = xu[Ru[Tu].uniqueId];
              uu.setTexture(uu.textures[yu], Tu)
            }
          }
        } else {
          const Ru = {};
          if (Ru.generateDepthBuffer = this._generateDepthBuffer, Ru.generateMipMaps = this.texture?.generateMipMaps ?? !1, Ru.generateStencilBuffer = this._generateStencilBuffer, Ru.samplingMode = this.texture?.samplingMode, Ru.type = this.texture?.type, Ru.format = this.texture?.format, Ru.noColorAttachment = !this._textures, Ru.label = this.label, this.isCube) uu = this._engine.createRenderTargetCubeTexture(this.width, Ru);
          else {
            const yu = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            uu = this._engine.createRenderTargetTexture(yu, Ru)
          }
          uu.texture && (uu.texture.isReady = !0)
        }
        return uu
      }
      _swapRenderTargetWrapper(uu) {
        if (this._textures && uu._textures)
          for (let Ru = 0; Ru < this._textures.length; ++Ru) this._textures[Ru]._swapAndDie(uu._textures[Ru], !1), uu._textures[Ru].isReady = !0;
        this._depthStencilTexture && uu._depthStencilTexture && (this._depthStencilTexture._swapAndDie(uu._depthStencilTexture), uu._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const uu = this._cloneRenderTargetWrapper();
        if (uu) {
          if (this._depthStencilTexture) {
            const Ru = this._depthStencilTexture.samplingMode,
              yu = this._depthStencilTexture.format,
              Eu = 2 === Ru || 3 === Ru || 11 === Ru;
            uu.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, Eu, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, yu, this._depthStencilTextureLabel)
          }
          this.samples > 1 && uu.setSamples(this.samples), uu._swapRenderTargetWrapper(this), uu.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let uu = 0; uu < this._textures.length; ++uu) this._textures[uu].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  39998: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    class Eu {
      static get ForceFullSceneLoadingForIncremental() {
        return Eu._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(uu) {
        Eu._ForceFullSceneLoadingForIncremental = uu
      }
      static get ShowLoadingScreen() {
        return Eu._ShowLoadingScreen
      }
      static set ShowLoadingScreen(uu) {
        Eu._ShowLoadingScreen = uu
      }
      static get loggingLevel() {
        return Eu._LoggingLevel
      }
      static set loggingLevel(uu) {
        Eu._LoggingLevel = uu
      }
      static get CleanBoneMatrixWeights() {
        return Eu._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(uu) {
        Eu._CleanBoneMatrixWeights = uu
      }
    }
    Eu._ForceFullSceneLoadingForIncremental = !1, Eu._ShowLoadingScreen = !0, Eu._CleanBoneMatrixWeights = !1, Eu._LoggingLevel = 0
  },
  39639: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(38448);
    const Ku = new Map;

    function Qu(uu, Ru) {
      (function(uu) {
        return Ku.delete(uu)
      })(uu) && Eu.e.Warn(`Extension with the name '${uu}' already exists`), Ku.set(uu, Ru)
    }

    function mu(uu, Ru) {
      "image/ktx" !== Ru && "image/ktx2" !== Ru || (uu = ".ktx"), Ku.has(uu) || (uu.endsWith(".ies") && Qu(".ies", (async () => await yu.e(299).then((() => yu(41352))).then((uu => new uu._IESTextureLoader)))), uu.endsWith(".dds") && Qu(".dds", (async () => await yu.e(297).then((() => yu(41356))).then((uu => new uu._DDSTextureLoader)))), uu.endsWith(".basis") && Qu(".basis", (async () => await yu.e(300).then((() => yu(41360))).then((uu => new uu._BasisTextureLoader)))), uu.endsWith(".env") && Qu(".env", (async () => await Promise.all([yu.e(301), yu.e(298)]).then((() => yu(41366))).then((uu => new uu._ENVTextureLoader)))), uu.endsWith(".hdr") && Qu(".hdr", (async () => await yu.e(302).then((() => yu(41416))).then((uu => new uu._HDRTextureLoader)))), (uu.endsWith(".ktx") || uu.endsWith(".ktx2")) && (Qu(".ktx", (async () => await yu.e(303).then((() => yu(41423))).then((uu => new uu._KTXTextureLoader)))), Qu(".ktx2", (async () => await yu.e(303).then((() => yu(41423))).then((uu => new uu._KTXTextureLoader))))), uu.endsWith(".tga") && Qu(".tga", (async () => await yu.e(304).then((() => yu(41438))).then((uu => new uu._TGATextureLoader)))), uu.endsWith(".exr") && Qu(".exr", (async () => await yu.e(305).then((() => yu(41446))).then((uu => new uu._ExrTextureLoader)))));
      const Eu = Ku.get(uu);
      return Eu ? Promise.resolve(Eu(Ru)) : null
    }
  },
  40026: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      f: () => Xu
    });
    var Eu = yu(39863),
      Ku = yu(39584),
      Qu = yu(36871);
    class mu extends Eu.d {
      get yuu() {
        return this._subMaterials
      }
      set yuu(uu) {
        this._subMaterials = uu, this._hookArray(uu)
      }
      getChildren() {
        return this.yuu
      }
      constructor(uu, Ru) {
        super(uu, Ru, !0), this._waitingSubMaterialsUniqueIds = [], this.lD().addMultiMaterial(this), this.yuu = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(uu) {
        var Ru = this;
        const yu = uu.push;
        uu.push = function() {
          for (var Eu = arguments.length, Ku = new Array(Eu), Qu = 0; Qu < Eu; Qu++) Ku[Qu] = arguments[Qu];
          const mu = yu.apply(uu, Ku);
          return Ru._markAllSubMeshesAsTexturesDirty(), mu
        };
        const Eu = uu.splice;
        uu.splice = (Ru, yu) => {
          const Ku = Eu.call(uu, Ru, yu ?? uu.length);
          return this._markAllSubMeshesAsTexturesDirty(), Ku
        }
      }
      getSubMaterial(uu) {
        return uu < 0 || uu >= this.yuu.length ? this.lD().defaultMaterial : this.yuu[uu]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.yuu.map((uu => uu ? uu.getActiveTextures() : [])))
      }
      hasTexture(uu) {
        if (super.hasTexture(uu)) return !0;
        for (let Ru = 0; Ru < this.yuu.length; Ru++)
          if (this.yuu[Ru]?.hasTexture(uu)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(uu, Ru, yu) {
        for (let Eu = 0; Eu < this.yuu.length; Eu++) {
          const Ku = this.yuu[Eu];
          if (Ku) {
            if (Ku._storeEffectOnSubMeshes) {
              if (!Ku.isReadyForSubMesh(uu, Ru, yu)) return !1;
              continue
            }
            if (!Ku.isReady(uu)) return !1
          }
        }
        return !0
      }
      clone(uu, Ru) {
        const yu = new mu(uu, this.lD());
        for (let Eu = 0; Eu < this.yuu.length; Eu++) {
          let Ku;
          const Qu = this.yuu[Eu];
          Ku = Ru && Qu ? Qu.clone(uu + "-" + Qu.name) : this.yuu[Eu], yu.yuu.push(Ku)
        }
        return yu
      }
      serialize() {
        const uu = {};
        uu.name = this.name, uu.id = this.id, uu.uniqueId = this.uniqueId, Ku.e && (uu.tags = Ku.e.GetTags(this)), uu.materialsUniqueIds = [], uu.materials = [];
        for (let Ru = 0; Ru < this.yuu.length; Ru++) {
          const yu = this.yuu[Ru];
          yu ? (uu.materialsUniqueIds.push(yu.uniqueId), uu.materials.push(yu.id)) : (uu.materialsUniqueIds.push(null), uu.materials.push(null))
        }
        return uu
      }
      dispose(uu, Ru, yu) {
        const Eu = this.lD();
        if (!Eu) return;
        if (yu)
          for (let Qu = 0; Qu < this.yuu.length; Qu++) {
            const yu = this.yuu[Qu];
            yu && yu.dispose(uu, Ru)
          }
        const Ku = Eu.multiMaterials.indexOf(this);
        Ku >= 0 && Eu.multiMaterials.splice(Ku, 1), super.dispose(uu, Ru)
      }
    }
    let Ju = !1;

    function Nu(uu, Ru) {
      const yu = new mu(uu.name, Ru);
      if (yu.id = uu.id, yu._loadedUniqueId = uu.uniqueId, Ku.e && Ku.e.AddTagsTo(yu, uu.tags), uu.materialsUniqueIds) yu._waitingSubMaterialsUniqueIds = uu.materialsUniqueIds;
      else
        for (const Eu of uu.materials) yu.yuu.push(Ru.getLastMaterialById(Eu));
      return yu
    }

    function Xu() {
      Ju || (Ju = !0, mu.ParseMultiMaterial = Nu, (0, Qu.c)("BABYLON.MultiMaterial", mu))
    }
  },
  39784: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu, Ku, Qu = yu(36830);
    ! function(uu) {
      uu[uu.LOCAL = 0] = "LOCAL", uu[uu.WORLD = 1] = "WORLD", uu[uu.BONE = 2] = "BONE"
    }(Eu || (Eu = {}));
    class mu {}
    mu.X = new Qu.p(1, 0, 0), mu.Y = new Qu.p(0, 1, 0), mu.Z = new Qu.p(0, 0, 1),
      function(uu) {
        uu[uu.X = 0] = "X", uu[uu.Y = 1] = "Y", uu[uu.Z = 2] = "Z"
      }(Ku || (Ku = {}))
  },
  39547: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      e: () => Xu
    });
    var Eu = yu(36830);
    const Ku = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Qu = [() => 1, uu => uu.y, uu => uu.z, uu => uu.x, uu => uu.x * uu.y, uu => uu.y * uu.z, uu => 3 * uu.z * uu.z - 1, uu => uu.x * uu.z, uu => uu.x * uu.x - uu.y * uu.y],
      mu = (uu, Ru) => Ku[uu] * Qu[uu](Ru),
      Ju = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class Nu {
      constructor() {
        this.preScaled = !1, this.l00 = Eu.p.Zero(), this.l1_1 = Eu.p.Zero(), this.l10 = Eu.p.Zero(), this.l11 = Eu.p.Zero(), this.l2_2 = Eu.p.Zero(), this.l2_1 = Eu.p.Zero(), this.l20 = Eu.p.Zero(), this.l21 = Eu.p.Zero(), this.l22 = Eu.p.Zero()
      }
      addLight(uu, Ru, yu) {
        Eu.m.MS[0].set(Ru.r, Ru.g, Ru.b);
        const Ku = Eu.m.MS[0],
          Qu = Eu.m.MS[1];
        Ku.scaleToRef(yu, Qu), Qu.scaleToRef(mu(0, uu), Eu.m.MS[2]), this.l00.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(1, uu), Eu.m.MS[2]), this.l1_1.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(2, uu), Eu.m.MS[2]), this.l10.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(3, uu), Eu.m.MS[2]), this.l11.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(4, uu), Eu.m.MS[2]), this.l2_2.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(5, uu), Eu.m.MS[2]), this.l2_1.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(6, uu), Eu.m.MS[2]), this.l20.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(7, uu), Eu.m.MS[2]), this.l21.addInPlace(Eu.m.MS[2]), Qu.scaleToRef(mu(8, uu), Eu.m.MS[2]), this.l22.addInPlace(Eu.m.MS[2])
      }
      scaleInPlace(uu) {
        this.l00.scaleInPlace(uu), this.l1_1.scaleInPlace(uu), this.l10.scaleInPlace(uu), this.l11.scaleInPlace(uu), this.l2_2.scaleInPlace(uu), this.l2_1.scaleInPlace(uu), this.l20.scaleInPlace(uu), this.l21.scaleInPlace(uu), this.l22.scaleInPlace(uu)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(Ju[0]), this.l1_1.scaleInPlace(Ju[1]), this.l10.scaleInPlace(Ju[2]), this.l11.scaleInPlace(Ju[3]), this.l2_2.scaleInPlace(Ju[4]), this.l2_1.scaleInPlace(Ju[5]), this.l20.scaleInPlace(Ju[6]), this.l21.scaleInPlace(Ju[7]), this.l22.scaleInPlace(Ju[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Ku[0]), this.l1_1.scaleInPlace(Ku[1]), this.l10.scaleInPlace(Ku[2]), this.l11.scaleInPlace(Ku[3]), this.l2_2.scaleInPlace(Ku[4]), this.l2_1.scaleInPlace(Ku[5]), this.l20.scaleInPlace(Ku[6]), this.l21.scaleInPlace(Ku[7]), this.l22.scaleInPlace(Ku[8])
      }
      updateFromArray(uu) {
        return Eu.p.FromArrayToRef(uu[0], 0, this.l00), Eu.p.FromArrayToRef(uu[1], 0, this.l1_1), Eu.p.FromArrayToRef(uu[2], 0, this.l10), Eu.p.FromArrayToRef(uu[3], 0, this.l11), Eu.p.FromArrayToRef(uu[4], 0, this.l2_2), Eu.p.FromArrayToRef(uu[5], 0, this.l2_1), Eu.p.FromArrayToRef(uu[6], 0, this.l20), Eu.p.FromArrayToRef(uu[7], 0, this.l21), Eu.p.FromArrayToRef(uu[8], 0, this.l22), this
      }
      updateFromFloatsArray(uu) {
        return Eu.p.FromFloatsToRef(uu[0], uu[1], uu[2], this.l00), Eu.p.FromFloatsToRef(uu[3], uu[4], uu[5], this.l1_1), Eu.p.FromFloatsToRef(uu[6], uu[7], uu[8], this.l10), Eu.p.FromFloatsToRef(uu[9], uu[10], uu[11], this.l11), Eu.p.FromFloatsToRef(uu[12], uu[13], uu[14], this.l2_2), Eu.p.FromFloatsToRef(uu[15], uu[16], uu[17], this.l2_1), Eu.p.FromFloatsToRef(uu[18], uu[19], uu[20], this.l20), Eu.p.FromFloatsToRef(uu[21], uu[22], uu[23], this.l21), Eu.p.FromFloatsToRef(uu[24], uu[25], uu[26], this.l22), this
      }
      static FromArray(uu) {
        return (new Nu).updateFromArray(uu)
      }
      static FromPolynomial(uu) {
        const Ru = new Nu;
        return Ru.l00 = uu.xx.scale(.376127).add(uu.yy.scale(.376127)).add(uu.zz.scale(.376126)), Ru.l1_1 = uu.y.scale(.977204), Ru.l10 = uu.z.scale(.977204), Ru.l11 = uu.x.scale(.977204), Ru.l2_2 = uu.xy.scale(1.16538), Ru.l2_1 = uu.yz.scale(1.16538), Ru.l20 = uu.zz.scale(1.34567).subtract(uu.xx.scale(.672834)).subtract(uu.yy.scale(.672834)), Ru.l21 = uu.zx.scale(1.16538), Ru.l22 = uu.xx.scale(1.16538).subtract(uu.yy.scale(1.16538)), Ru.l1_1.scaleInPlace(-1), Ru.l11.scaleInPlace(-1), Ru.l2_1.scaleInPlace(-1), Ru.l21.scaleInPlace(-1), Ru.scaleInPlace(Math.PI), Ru
      }
    }
    class Xu {
      constructor() {
        this.x = Eu.p.Zero(), this.y = Eu.p.Zero(), this.z = Eu.p.Zero(), this.xx = Eu.p.Zero(), this.yy = Eu.p.Zero(), this.zz = Eu.p.Zero(), this.xy = Eu.p.Zero(), this.yz = Eu.p.Zero(), this.zx = Eu.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = Nu.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(uu) {
        Eu.m.MS[0].muu(uu.r, uu.g, uu.b);
        const Ru = Eu.m.MS[0];
        this.xx.addInPlace(Ru), this.yy.addInPlace(Ru), this.zz.addInPlace(Ru)
      }
      scaleInPlace(uu) {
        this.x.scaleInPlace(uu), this.y.scaleInPlace(uu), this.z.scaleInPlace(uu), this.xx.scaleInPlace(uu), this.yy.scaleInPlace(uu), this.zz.scaleInPlace(uu), this.yz.scaleInPlace(uu), this.zx.scaleInPlace(uu), this.xy.scaleInPlace(uu)
      }
      updateFromHarmonics(uu) {
        return this._harmonics = uu, this.x.Oyu(uu.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Oyu(uu.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Oyu(uu.l10), this.z.scaleInPlace(1.02333), this.xx.Oyu(uu.l00), Eu.m.MS[0].Oyu(uu.l20).scaleInPlace(.247708), Eu.m.MS[1].Oyu(uu.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).oEu(Eu.m.MS[0]).addInPlace(Eu.m.MS[1]), this.yy.Oyu(uu.l00), this.yy.scaleInPlace(.886277).oEu(Eu.m.MS[0]).oEu(Eu.m.MS[1]), this.zz.Oyu(uu.l00), Eu.m.MS[0].Oyu(uu.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(Eu.m.MS[0]), this.yz.Oyu(uu.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Oyu(uu.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Oyu(uu.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(uu) {
        return (new Xu).updateFromHarmonics(uu)
      }
      static FromArray(uu) {
        const Ru = new Xu;
        return Eu.p.FromArrayToRef(uu[0], 0, Ru.x), Eu.p.FromArrayToRef(uu[1], 0, Ru.y), Eu.p.FromArrayToRef(uu[2], 0, Ru.z), Eu.p.FromArrayToRef(uu[3], 0, Ru.xx), Eu.p.FromArrayToRef(uu[4], 0, Ru.yy), Eu.p.FromArrayToRef(uu[5], 0, Ru.zz), Eu.p.FromArrayToRef(uu[6], 0, Ru.yz), Eu.p.FromArrayToRef(uu[7], 0, Ru.zx), Eu.p.FromArrayToRef(uu[8], 0, Ru.xy), Ru
      }
    }
  },
  40008: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => nu,
      i: () => tu
    });
    var Eu = yu(39560),
      Ku = yu(36858),
      Qu = yu(36830),
      mu = yu(39706),
      Ju = yu(39990),
      Nu = yu(40017),
      Xu = yu(39698),
      Vu = yu(39877),
      ru = yu(39693);
    class Bu {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Qu.p(0, 0, 0), this._diffPositionForCollisions = new Qu.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var xu, Su, pu, Tu = yu(39430),
      Wu = yu(39633),
      ju = yu(39893),
      Hu = yu(36991),
      du = yu(36833),
      bu = yu(39784),
      Cu = yu(38448),
      ku = yu(39566),
      eu = yu(39455),
      Au = yu(36871);

    function Du(uu, Ru) {
      return uu - Math.floor(uu / Ru) * Ru
    }

    function Mu(uu, Ru, yu) {
      uu instanceof Float32Array ? Qu.d.FromArrayToRef(uu, Ru, yu) : yu.muu((0, Wu.c)(uu[Ru]), (0, Wu.c)(uu[Ru + 1]), (0, Wu.c)(uu[Ru + 2]), (0, Wu.c)(uu[Ru + 3]), (0, Wu.c)(uu[Ru + 4]), (0, Wu.c)(uu[Ru + 5]), (0, Wu.c)(uu[Ru + 6]), (0, Wu.c)(uu[Ru + 7]), (0, Wu.c)(uu[Ru + 8]), (0, Wu.c)(uu[Ru + 9]), (0, Wu.c)(uu[Ru + 10]), (0, Wu.c)(uu[Ru + 11]), (0, Wu.c)(uu[Ru + 12]), (0, Wu.c)(uu[Ru + 13]), (0, Wu.c)(uu[Ru + 14]), (0, Wu.c)(uu[Ru + 15]))
    }

    function Iu(uu, Ru, yu, Eu, Ku, Ju, Nu, Xu, Vu) {
      const ru = yu.texture,
        Bu = ru?.getInternalTexture(),
        xu = Bu?._bufferView;
      if (!(xu instanceof Float32Array) && !(xu instanceof Uint16Array)) return Cu.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Su = ru.getSize(),
        pu = function(uu, Ru) {
          const yu = uu.y - uu.x + 1,
            Eu = Ru * uu.w / yu,
            Ku = Eu < 1 ? 0 : 1,
            Qu = yu - Ku;
          let mu = Du(Eu - Math.floor(Eu), 1) * Qu;
          return mu = Du(mu + uu.z, Qu), Math.floor(mu) + uu.x + Ku
        }(Eu, yu.time);
      if (!isFinite(pu) || pu < 0 || pu >= Su.height) return Cu.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const Tu = Qu.m.MS[0],
        Wu = Qu.m.Matrix[0],
        ju = Qu.m.Matrix[1],
        Hu = pu * Su.width * 4,
        du = Ru === mu.h.NormalKind ? Qu.p.TransformNormalFromFloatsToRef : Qu.p.TransformCoordinatesFromFloatsToRef;
      for (let Qu = 0, mu = 0; Qu < uu.length; Qu += 3, mu += 4) {
        let Ru, yu;
        for (Wu.reset(), Ru = 0; Ru < 4 && Ru < Vu; Ru++) yu = Ju[mu + Ru], yu > 0 && (Mu(xu, Hu + 16 * Math.floor(Ku[mu + Ru]), ju), ju.scaleAndAddToRef(yu, Wu));
        if (Nu && Xu)
          for (Ru = 0; Ru < 4 && Ru + 4 < Vu; Ru++) yu = Xu[mu + Ru], yu > 0 && (Mu(xu, Hu + 16 * Math.floor(Nu[mu + Ru]), ju), ju.scaleAndAddToRef(yu, Wu));
        du(uu[Qu], uu[Qu + 1], uu[Qu + 2], Wu, Tu), Tu.toArray(uu, Qu)
      }
      return !0
    }
    class Gu {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Qu.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class Uu {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new Gu, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new Bu, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let nu = (() => {
        var uu;
        let Ru, Bu = Nu.d,
          xu = [];
        return uu = class extends Bu {
          static get BILLBOARDMODE_NONE() {
            return Nu.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return Nu.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return Nu.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return Nu.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return Nu.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return Nu.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(uu) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = uu
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(uu) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = uu
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(uu) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = uu
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(uu) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = uu
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(uu) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = uu
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(uu) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== uu && (this._internalAbstractMeshDataInfo._morphTargetManager = uu, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(uu) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== uu && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = uu, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(uu) {
            return !!super._updateNonUniformScalingState(uu) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(uu) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = uu
          }
          set uB(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(uu)
          }
          set onCollisionPositionChange(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(uu)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(uu) {
            if (this._internalAbstractMeshDataInfo._visibility === uu) return;
            const Ru = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = uu, (1 === Ru && 1 !== uu || 1 !== Ru && 1 === uu) && this._markSubMeshesAsDirty((uu => {
              uu.markAsMiscDirty(), uu.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(uu) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = uu
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(uu) {
            this._internalAbstractMeshDataInfo._renderingGroupId = uu
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(uu) {
            if (!Number.isInteger(uu) || uu < 0 || uu > 255 || 0 !== uu && 0 === (63 & uu)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = uu
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(uu) {
            this._setMaterial(uu)
          }
          _setMaterial(uu) {
            this._internalAbstractMeshDataInfo._material !== uu && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = uu, uu && uu.meshMap && (uu.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.mC && (this.resetDrawCache(void 0, null == uu), this._unBindEffect()))
          }
          getMaterialForRenderPass(uu) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[uu]
          }
          setMaterialForRenderPass(uu, Ru) {
            this.resetDrawCache(uu), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const yu = this._internalAbstractMeshDataInfo._materialForRenderPass[uu];
            yu?.meshMap?.[this.uniqueId] && (yu.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[uu] = Ru, Ru && Ru.meshMap && (Ru.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(uu) {
            this._internalAbstractMeshDataInfo._receiveShadows !== uu && (this._internalAbstractMeshDataInfo._receiveShadows = uu, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(uu) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== uu && (this._internalAbstractMeshDataInfo._hasVertexAlpha = uu, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(uu) {
            this._internalAbstractMeshDataInfo._useVertexColors !== uu && (this._internalAbstractMeshDataInfo._useVertexColors = uu, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(uu) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== uu && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = uu, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(uu) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== uu && (this._internalAbstractMeshDataInfo._numBoneInfluencers = uu, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(uu) {
            this._internalAbstractMeshDataInfo._applyFog !== uu && (this._internalAbstractMeshDataInfo._applyFog = uu, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(uu) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = uu
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(uu) {
            uu !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = uu, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(uu) ? -1 : uu
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = uu
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(uu) ? -1 : uu
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = uu
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(uu) {
            const Ru = this._internalAbstractMeshDataInfo._skeleton;
            Ru && Ru.needInitialSkinMatrix && Ru._unregisterMeshWithPoseMatrix(this), uu && uu.needInitialSkinMatrix && uu._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = uu, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Ru) {
            var yu;
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Ru, Eu, !1), yu = this, this._internalAbstractMeshDataInfo = new Uu, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = uu.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Ku.b, this.onCollisionPositionChangeObservable = new Ku.b, this.onMaterialChangedObservable = new Ku.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.zp = uu.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Hu.d.Red(), this.outlineWidth = .02, this.overlayColor = Hu.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.DS = !1, this.US = !1, this.actionManager = null, this.ellipsoid = new Qu.p(.5, 1, .5), this.ellipsoidOffset = new Qu.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Hu.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                fD: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Ku.b, this._onCollisionPositionChange = function(uu, Ru) {
                let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Ru.subtractToRef(yu._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, yu._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), yu._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > eu.d.CollisionsEpsilon && yu.position.addInPlace(yu._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), Eu && yu.onCollideObservable.notifyObservers(Eu), yu.onCollisionPositionChangeObservable.notifyObservers(yu.position)
              }, Eu = this.lD(), this.layerMask = Eu.defaultRenderableLayerMask, Eu.MEu(this), this._resyncLightSources(), this._uniformBuffer = new ru.c(this.lD().eS(), void 0, void 0, Ru, !this.lD().eS().isWebGPU), this._buildUniformLayout(), Eu.performancePriority) {
              case 2:
                this.US = !0;
              case 1:
                this.DS = !0, this.zp = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(uu) {
            const Ru = this._uniformBuffer;
            Ru.v_("world", uu), Ru.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Ru.update()
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
          toString(uu) {
            let Ru = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Ru += ", # of submeshes: " + (this.mC ? this.mC.length : 0);
            const yu = this._internalAbstractMeshDataInfo._skeleton;
            return yu && (Ru += ", skeleton: " + yu.name), uu && (Ru += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Ru += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.fD ? "YES" : "NO")), Ru
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== Nu.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(uu) {
            let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Ru || this.actionManager.isRecursive)) {
              if (!uu) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(uu)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(uu, !1) : null
          }
          _releaseRenderPassId(uu) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.mC) {
              for (const uu of this.mC) uu._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const uu of this.lD().lights) uu.isEnabled() && uu.canAffectMesh(this) && this._lightSources.push(uu);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(uu) {
            const Ru = uu.isEnabled() && uu.canAffectMesh(this),
              yu = this._lightSources.indexOf(uu);
            let Eu = !1;
            if (-1 === yu) {
              if (!Ru) return;
              this._lightSources.push(uu)
            } else {
              if (Ru) return;
              Eu = !0, this._lightSources.splice(yu, 1)
            }
            this._markSubMeshesAsLightDirty(Eu)
          }
          _unBindEffect() {
            for (const uu of this.mC) uu.setEffect(null)
          }
          _removeLightSource(uu, Ru) {
            const yu = this._lightSources.indexOf(uu); - 1 !== yu && (this._lightSources.splice(yu, 1), this._markSubMeshesAsLightDirty(Ru))
          }
          _markSubMeshesAsDirty(uu) {
            if (this.mC)
              for (const Ru of this.mC)
                for (let yu = 0; yu < Ru._drawWrappers.length; ++yu) {
                  const Eu = Ru._drawWrappers[yu];
                  Eu && Eu.defines && Eu.defines.markAllAsDirty && uu(Eu.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Ru => Ru.markAsLightDirty(uu)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((uu => uu.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((uu => uu.markAsMiscDirty()))
          }
          Eyu(uu) {
            return this._currentRenderId = Number.MAX_VALUE, super.Eyu(uu), this._isDirty = !0, this
          }
          resetDrawCache(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.mC)
              for (const yu of this.mC) yu.resetDrawCache(uu, Ru)
          }
          get isBlocked() {
            return !1
          }
          getLOD(uu) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          DEu() {
            return null
          }
          getVerticesData(uu) {
            return null
          }
          setVerticesData(uu, Ru, yu, Eu) {
            return this
          }
          updateVerticesData(uu, Ru, yu, Eu) {
            return this
          }
          setIndices(uu, Ru) {
            return this
          }
          isVerticesDataPresent(uu) {
            return !1
          }
          vI() {
            return this._masterMesh ? this._masterMesh.vI() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.vI()
          }
          setBoundingInfo(uu) {
            return this._boundingInfo = uu, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(uu, Ru, yu) {
            return this._boundingInfo = new Vu.c(uu, Ru, yu), this._boundingInfo
          }
          normalizeToUnitCube() {
            let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(uu, Ru, yu)
          }
          get useBones() {
            return this.skeleton && this.lD().skeletonsEnabled && this.isVerticesDataPresent(mu.h.MatricesIndicesKind) && this.isVerticesDataPresent(mu.h.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(uu) {}
          _activate(uu, Ru) {
            return this._renderId = uu, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === Nu.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get ZD() {
            return !1
          }
          get HKu() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(uu, Ru, yu) {
            return this.position.addInPlace(this.calcMovePOV(uu, Ru, yu)), this
          }
          calcMovePOV(uu, Ru, yu) {
            const Eu = new Qu.d;
            (this.rotationQuaternion ? this.rotationQuaternion : Qu.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(Eu);
            const Ku = Qu.p.Zero(),
              mu = this.definedFacingForward ? -1 : 1;
            return Qu.p.TransformCoordinatesFromFloatsToRef(uu * mu, Ru, yu * mu, Eu, Ku), Ku
          }
          rotatePOV(uu, Ru, yu) {
            return this.rotation.addInPlace(this.calcRotatePOV(uu, Ru, yu)), this
          }
          calcRotatePOV(uu, Ru, yu) {
            const Eu = this.definedFacingForward ? 1 : -1;
            return new Qu.p(uu * Eu, Ru, yu * Eu)
          }
          _refreshBoundingInfo(uu, Ru) {
            if (uu) {
              const yu = (0, ju.d)(uu, 0, this.getTotalVertices(), Ru);
              this._boundingInfo ? this._boundingInfo.reConstruct(yu.minimum, yu.maximum) : this._boundingInfo = new Vu.c(yu.minimum, yu.maximum)
            }
            if (this.mC)
              for (let yu = 0; yu < this.mC.length; yu++) this.mC[yu].refreshBoundingInfo(uu);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(uu) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(uu.minimum, uu.maximum) : this._boundingInfo = new Vu.c(uu.minimum, uu.maximum), this.mC)
              for (let Ru = 0; Ru < this.mC.length; Ru++) this.mC[Ru].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(uu, Ru, yu, Eu, Ku, Ju, Nu) {
            ! function(uu, Ru, yu, Eu, Ku, Ju, Nu) {
              const Xu = Qu.m.MS[0],
                Vu = Qu.m.Matrix[0],
                ru = Qu.m.Matrix[1],
                Bu = Ru === mu.h.NormalKind ? Qu.p.TransformNormalFromFloatsToRef : Qu.p.TransformCoordinatesFromFloatsToRef;
              for (let mu = 0, xu = 0; mu < uu.length; mu += 3, xu += 4) {
                let Ru, Su;
                for (Vu.reset(), Ru = 0; Ru < 4; Ru++) Su = Ku[xu + Ru], Su > 0 && (Qu.d.FromFloat32ArrayToRefScaled(yu, Math.floor(16 * Eu[xu + Ru]), Su, ru), Vu.addToSelf(ru));
                if (Ju && Nu)
                  for (Ru = 0; Ru < 4; Ru++) Su = Nu[xu + Ru], Su > 0 && (Qu.d.FromFloat32ArrayToRefScaled(yu, Math.floor(16 * Ju[xu + Ru]), Su, ru), Vu.addToSelf(ru));
                Bu(uu[mu], uu[mu + 1], uu[mu + 2], Vu, Xu), Xu.toArray(uu, mu)
              }
            }(uu, Ru, yu, Eu, Ku, Ju, Nu)
          }
          _getData(Ru, yu) {
            let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mu.h.PositionKind;
            const Ku = Ru.cache,
              Ju = uu => {
                if (Ku) {
                  const Ru = Ku._vertexData || (Ku._vertexData = {});
                  return Ru[uu] || this.copyVerticesData(uu, Ru), Ru[uu]
                }
                return this.getVerticesData(uu)
              };
            if (yu || (yu = Ju(Eu)), !yu) return null;
            Ku ? (Ku._outputData ? Ku._outputData.set(yu) : Ku._outputData = new Float32Array(yu), yu = Ku._outputData) : (Ru.applyMorph && this.morphTargetManager || Ru.applySkeleton && this.skeleton || Ru.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (yu = yu.slice()), Ru.applyMorph && this.morphTargetManager && function(uu, Ru, yu) {
              let Eu;
              switch (Ru) {
                case mu.h.PositionKind:
                  Eu = uu => uu.getPositions();
                  break;
                case mu.h.NormalKind:
                  Eu = uu => uu.getNormals();
                  break;
                case mu.h.TangentKind:
                  Eu = uu => uu.getTangents();
                  break;
                case mu.h.UVKind:
                  Eu = uu => uu.getUVs();
                  break;
                case mu.h.UV2Kind:
                  Eu = uu => uu.getUV2s();
                  break;
                case mu.h.ColorKind:
                  Eu = uu => uu.getColors();
                  break;
                default:
                  return
              }
              for (let Ku = 0; Ku < uu.length; Ku++) {
                let Ru = uu[Ku];
                for (let Qu = 0; Qu < yu.numTargets; Qu++) {
                  const mu = yu.getTarget(Qu),
                    Ju = mu.influence;
                  if (0 !== Ju) {
                    const yu = Eu(mu);
                    yu && (Ru += (yu[Ku] - uu[Ku]) * Ju)
                  }
                }
                uu[Ku] = Ru
              }
            }(yu, Eu, this.morphTargetManager);
            const Nu = this.bakedVertexAnimationManager;
            let Xu = !1;
            if (Ru.applyBakedVertexAnimation && Nu?.isEnabled) {
              const uu = Ju(mu.h.MatricesIndicesKind),
                Ku = Ju(mu.h.MatricesWeightsKind);
              if (Ku && uu) {
                const Qu = this.numBoneInfluencers > 4,
                  Vu = Qu ? Ju(mu.h.MatricesIndicesExtraKind) : null,
                  ru = Qu ? Ju(mu.h.MatricesWeightsExtraKind) : null;
                Xu = Iu(yu, Eu, Nu, Ru.bakedVertexAnimationSettings ?? Nu.animationParameters, uu, Ku, Vu, ru, this.numBoneInfluencers)
              }
            }
            if (!Xu && Ru.applySkeleton && this.skeleton) {
              const Ru = Ju(mu.h.MatricesIndicesKind),
                Ku = Ju(mu.h.MatricesWeightsKind);
              if (Ku && Ru) {
                const Qu = this.numBoneInfluencers > 4,
                  Nu = Qu ? Ju(mu.h.MatricesIndicesExtraKind) : null,
                  Xu = Qu ? Ju(mu.h.MatricesWeightsExtraKind) : null,
                  Vu = this.skeleton.getTransformMatrices(this);
                uu._ApplySkeleton(yu, Eu, Vu, Ru, Ku, Nu, Xu)
              }
            }
            if (!1 !== Ru.updatePositionsArray && Eu === mu.h.PositionKind) {
              const uu = this._internalAbstractMeshDataInfo._positions || [],
                Ru = uu.length;
              if (uu.length = yu.length / 3, Ru < uu.length)
                for (let yu = Ru; yu < uu.length; yu++) uu[yu] = new Qu.p;
              for (let Eu = 0, Ku = 0; Eu < uu.length; Eu++, Ku += 3) uu[Eu].muu(yu[Ku], yu[Ku + 1], yu[Ku + 2]);
              this._internalAbstractMeshDataInfo._positions = uu
            }
            return yu
          }
          getNormalsData() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: uu,
              applyMorph: Ru,
              updatePositionsArray: !1
            }, null, mu.h.NormalKind)
          }
          aZ() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: uu,
              applyMorph: Ru,
              updatePositionsArray: !1
            }, yu, mu.h.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Vu.c(Qu.p.Zero(), Qu.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(uu) {
            if (!this.mC) return this;
            const Ru = this.mC.length;
            for (let yu = 0; yu < Ru; yu++) {
              const Eu = this.mC[yu];
              (Ru > 1 || !Eu.IsGlobal) && Eu.updateBoundingInfo(uu)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.US || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(uu) {
            return this.vI().isInFrustum(uu, this.cullingStrategy)
          }
          isCompletelyInFrustum(uu) {
            return this.vI().isCompletelyInFrustum(uu)
          }
          xKu(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = arguments.length > 2 ? arguments[2] : void 0;
            const Eu = this.vI(),
              Ku = uu.vI();
            if (Eu.intersects(Ku, Ru)) return !0;
            if (yu)
              for (const Qu of this.getChildMeshes())
                if (Qu.xKu(uu, Ru, !0)) return !0;
            return !1
          }
          intersectsPoint(uu) {
            return this.vI().intersectsPoint(uu)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(uu) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = uu
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(uu) {
            let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const yu = this.lD().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = yu.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, yu.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, uu, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Ru), this
          }
          _collideForSubMesh(uu, Ru, yu) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!uu._lastColliderWorldVertices || !uu._lastColliderTransformMatrix.equals(Ru)) {
              uu._lastColliderTransformMatrix = Ru.clone(), uu._lastColliderWorldVertices = [], uu._trianglePlanes = [];
              const yu = uu.verticesStart,
                Eu = uu.verticesStart + uu.verticesCount;
              for (let Ku = yu; Ku < Eu; Ku++) uu._lastColliderWorldVertices.push(Qu.p.TransformCoordinates(this._positions[Ku], Ru))
            }
            return yu._collide(uu._trianglePlanes, uu._lastColliderWorldVertices, this.DEu(), uu.indexStart, uu.indexStart + uu.indexCount, uu.verticesStart, !!uu.nS(), this, this._shouldConvertRHS(), 7 === uu.nS()?.fillMode), this
          }
          _processCollisionsForSubMeshes(uu, Ru) {
            const yu = this._scene.getCollidingSubMeshCandidates(this, uu),
              Eu = yu.length;
            for (let Ku = 0; Ku < Eu; Ku++) {
              const Qu = yu.data[Ku];
              Eu > 1 && !Qu._checkCollision(uu) || this._collideForSubMesh(Qu, Ru, uu)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(uu) {
            if (!this.vI()._checkCollision(uu)) return this;
            const Ru = Qu.m.Matrix[0],
              yu = Qu.m.Matrix[1];
            return Qu.d.ScalingToRef(1 / uu._radius.x, 1 / uu._radius.y, 1 / uu._radius.z, Ru), this.worldMatrixFromCache.multiplyToRef(Ru, yu), this._processCollisionsForSubMeshes(uu, yu), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(uu, Ru, yu) {
            let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Ku = arguments.length > 4 ? arguments[4] : void 0,
              mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const Ju = new Xu.c,
              Nu = this.getClassName(),
              Vu = "InstancedLinesMesh" === Nu || "LinesMesh" === Nu || "GreasedLineMesh" === Nu ? this.intersectionThreshold : 0,
              ru = this.vI();
            if (!this.mC) return Ju;
            if (!mu && (!uu.intersectsSphere(ru.aEu, Vu) || !uu.intersectsBox(ru.boundingBox, Vu))) return Ju;
            if (Eu) return Ju.hit = !mu, Ju.pickedMesh = mu ? null : this, Ju.distance = mu ? 0 : Qu.p.Distance(uu.origin, ru.aEu.center), Ju.subMeshId = 0, Ju;
            if (!this._generatePointsArray()) return Ju;
            let Bu = null;
            const xu = this._scene.getIntersectingSubMeshCandidates(this, uu),
              Su = xu.length;
            let pu = !1;
            for (let Qu = 0; Qu < Su; Qu++) {
              const uu = xu.data[Qu].nS();
              if (uu && (7 == uu.fillMode || 0 == uu.fillMode || 1 == uu.fillMode || 2 == uu.fillMode || 4 == uu.fillMode)) {
                pu = !0;
                break
              }
            }
            if (!pu) return Ju.hit = !0, Ju.pickedMesh = this, Ju.distance = Qu.p.Distance(uu.origin, ru.aEu.center), Ju.subMeshId = -1, Ju;
            for (let Qu = 0; Qu < Su; Qu++) {
              const Eu = xu.data[Qu];
              if (Su > 1 && !mu && !Eu.canIntersects(uu)) continue;
              const Ku = Eu.intersects(uu, this._positions, this.DEu(), Ru, yu);
              if (Ku && (Ru || !Bu || Ku.distance < Bu.distance) && (Bu = Ku, Bu.subMeshId = Eu._id, Bu._internalSubMeshId = Qu, Ru)) break
            }
            if (Bu) {
              const Ru = Ku ?? this.getWorldMatrix(),
                yu = Qu.m.MS[0],
                Eu = Qu.m.MS[1];
              Qu.p.TransformCoordinatesToRef(uu.origin, Ru, yu), uu.direction.scaleToRef(Bu.distance, Eu);
              const mu = Qu.p.TransformNormal(Eu, Ru).addInPlace(yu);
              return Ju.hit = !0, Ju.distance = Qu.p.Distance(yu, mu), Ju.pickedPoint = mu, Ju.pickedMesh = this, Ju.bu = Bu.bu || 0, Ju.bv = Bu.bv || 0, Ju.subMeshFaceId = Bu.faceId, Ju.faceId = Bu.faceId + xu.data[Bu._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), Ju.subMeshId = Bu.subMeshId, Ju
            }
            return Ju
          }
          clone(uu, Ru, yu) {
            return null
          }
          releaseSubMeshes() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.mC)
              for (; this.mC.length;) this.mC[0].dispose(uu);
            else this.mC = [];
            return this
          }
          dispose(uu) {
            let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Eu = this.lD();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), Eu.freeActiveMeshes(), Eu.freeRenderingGroups(), Eu.renderingManager.maintainStateBetweenFrames && Eu.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((uu => uu !== this && uu.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Ru = 0; Ru < this._intersectionsInProgress.length; Ru++) {
              const uu = this._intersectionsInProgress[Ru],
                yu = uu._intersectionsInProgress.indexOf(this);
              uu._intersectionsInProgress.splice(yu, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Ku = Eu.lights;
            for (const mu of Ku) {
              let uu = mu.includedOnlyMeshes.indexOf(this); - 1 !== uu && mu.includedOnlyMeshes.splice(uu, 1), uu = mu.excludedMeshes.indexOf(this), -1 !== uu && mu.excludedMeshes.splice(uu, 1);
              const Ru = mu.getShadowGenerators();
              if (Ru) {
                const yu = Ru.values();
                for (let Ru = yu.next(); !0 !== Ru.done; Ru = yu.next()) {
                  const yu = Ru.value.getShadowMap();
                  yu && yu.renderList && (uu = yu.renderList.indexOf(this), -1 !== uu && yu.renderList.splice(uu, 1))
                }
              }
            }
            this.releaseSubMeshes(Eu._isDisposing);
            const Qu = Eu.eS();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Qu.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Qu.wipeCaches(), Eu.rM(this), this._parentContainer) {
              const uu = this._parentContainer.meshes.indexOf(this);
              uu > -1 && this._parentContainer.meshes.splice(uu, 1), this._parentContainer = null
            }
            if (yu && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !uu)
              for (Ru = 0; Ru < Eu.JC.length; Ru++) Eu.JC[Ru].emitter === this && (Eu.JC[Ru].dispose(), Ru--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(uu, yu)
          }
          _initFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            uu.facetNormals || (uu.facetNormals = []), uu.facetPositions || (uu.facetPositions = []), uu.facetPartitioning || (uu.facetPartitioning = new Array), uu.facetNb = this.DEu().length / 3 | 0, uu.partitioningSubdivisions = uu.partitioningSubdivisions ? uu.partitioningSubdivisions : 10, uu.partitioningBBoxRatio = uu.partitioningBBoxRatio ? uu.partitioningBBoxRatio : 1.01;
            for (let Ru = 0; Ru < uu.facetNb; Ru++) uu.facetNormals[Ru] = Qu.p.Zero(), uu.facetPositions[Ru] = Qu.p.Zero();
            return uu.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            uu.facetDataEnabled || this._initFacetData();
            const Ru = this.getVerticesData(mu.h.PositionKind),
              yu = this.DEu(),
              Eu = this.getVerticesData(mu.h.NormalKind)?.slice(),
              Ku = this.vI();
            if (uu.facetDepthSort && !uu.facetDepthSortEnabled) {
              if (uu.facetDepthSortEnabled = !0, yu instanceof Uint16Array) uu.depthSortedIndices = new Uint16Array(yu);
              else if (yu instanceof Uint32Array) uu.depthSortedIndices = new Uint32Array(yu);
              else {
                let Ru = !1;
                for (let uu = 0; uu < yu.length; uu++)
                  if (yu[uu] > 65535) {
                    Ru = !0;
                    break
                  } uu.depthSortedIndices = Ru ? new Uint32Array(yu) : new Uint16Array(yu)
              }
              if (uu.facetDepthSortFunction = function(uu, Ru) {
                  return Ru.sqDistance - uu.sqDistance
                }, !uu.facetDepthSortFrom) {
                const Ru = this.lD().activeCamera;
                uu.facetDepthSortFrom = Ru ? Ru.position : Qu.p.Zero()
              }
              uu.depthSortedFacets = [];
              for (let Ru = 0; Ru < uu.facetNb; Ru++) {
                const yu = {
                  ind: 3 * Ru,
                  sqDistance: 0
                };
                uu.depthSortedFacets.push(yu)
              }
              uu.invertedMatrix = Qu.d.Identity(), uu.facetDepthSortOrigin = Qu.p.Zero()
            }
            uu.bbSize.x = Ku.maximum.x - Ku.minimum.x > du.d ? Ku.maximum.x - Ku.minimum.x : du.d, uu.bbSize.y = Ku.maximum.y - Ku.minimum.y > du.d ? Ku.maximum.y - Ku.minimum.y : du.d, uu.bbSize.z = Ku.maximum.z - Ku.minimum.z > du.d ? Ku.maximum.z - Ku.minimum.z : du.d;
            let Nu = uu.bbSize.x > uu.bbSize.y ? uu.bbSize.x : uu.bbSize.y;
            if (Nu = Nu > uu.bbSize.z ? Nu : uu.bbSize.z, uu.subDiv.max = uu.partitioningSubdivisions, uu.subDiv.X = Math.floor(uu.subDiv.max * uu.bbSize.x / Nu), uu.subDiv.Y = Math.floor(uu.subDiv.max * uu.bbSize.y / Nu), uu.subDiv.Z = Math.floor(uu.subDiv.max * uu.bbSize.z / Nu), uu.subDiv.X = uu.subDiv.X < 1 ? 1 : uu.subDiv.X, uu.subDiv.Y = uu.subDiv.Y < 1 ? 1 : uu.subDiv.Y, uu.subDiv.Z = uu.subDiv.Z < 1 ? 1 : uu.subDiv.Z, uu.facetParameters.facetNormals = this.getFacetLocalNormals(), uu.facetParameters.facetPositions = this.getFacetLocalPositions(), uu.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), uu.facetParameters.bInfo = Ku, uu.facetParameters.bbSize = uu.bbSize, uu.facetParameters.subDiv = uu.subDiv, uu.facetParameters.ratio = this.partitioningBBoxRatio, uu.facetParameters.depthSort = uu.facetDepthSort, uu.facetDepthSort && uu.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(uu.invertedMatrix), Qu.p.TransformCoordinatesToRef(uu.facetDepthSortFrom, uu.invertedMatrix, uu.facetDepthSortOrigin), uu.facetParameters.distanceTo = uu.facetDepthSortOrigin), uu.facetParameters.depthSortedFacets = uu.depthSortedFacets, Eu && Ju.e.ComputeNormals(Ru, yu, Eu, uu.facetParameters), uu.facetDepthSort && uu.facetDepthSortEnabled) {
              uu.depthSortedFacets.sort(uu.facetDepthSortFunction);
              const Ru = uu.depthSortedIndices.length / 3 | 0;
              for (let Eu = 0; Eu < Ru; Eu++) {
                const Ru = uu.depthSortedFacets[Eu].ind;
                uu.depthSortedIndices[3 * Eu] = yu[Ru], uu.depthSortedIndices[3 * Eu + 1] = yu[Ru + 1], uu.depthSortedIndices[3 * Eu + 2] = yu[Ru + 2]
              }
              this.updateIndices(uu.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            return uu.facetNormals || this.updateFacetData(), uu.facetNormals
          }
          getFacetLocalPositions() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            return uu.facetPositions || this.updateFacetData(), uu.facetPositions
          }
          getFacetLocalPartitioning() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            return uu.facetPartitioning || this.updateFacetData(), uu.facetPartitioning
          }
          getFacetPosition(uu) {
            const Ru = Qu.p.Zero();
            return this.getFacetPositionToRef(uu, Ru), Ru
          }
          getFacetPositionToRef(uu, Ru) {
            const yu = this.getFacetLocalPositions()[uu],
              Eu = this.getWorldMatrix();
            return Qu.p.TransformCoordinatesToRef(yu, Eu, Ru), this
          }
          getFacetNormal(uu) {
            const Ru = Qu.p.Zero();
            return this.getFacetNormalToRef(uu, Ru), Ru
          }
          getFacetNormalToRef(uu, Ru) {
            const yu = this.getFacetLocalNormals()[uu];
            return Qu.p.TransformNormalToRef(yu, this.getWorldMatrix(), Ru), this
          }
          getFacetsAtLocalCoordinates(uu, Ru, yu) {
            const Eu = this.vI(),
              Ku = this._internalAbstractMeshDataInfo._facetData,
              Qu = Math.floor((uu - Eu.minimum.x * Ku.partitioningBBoxRatio) * Ku.subDiv.X * Ku.partitioningBBoxRatio / Ku.bbSize.x),
              mu = Math.floor((Ru - Eu.minimum.y * Ku.partitioningBBoxRatio) * Ku.subDiv.Y * Ku.partitioningBBoxRatio / Ku.bbSize.y),
              Ju = Math.floor((yu - Eu.minimum.z * Ku.partitioningBBoxRatio) * Ku.subDiv.Z * Ku.partitioningBBoxRatio / Ku.bbSize.z);
            return Qu < 0 || Qu > Ku.subDiv.max || mu < 0 || mu > Ku.subDiv.max || Ju < 0 || Ju > Ku.subDiv.max ? null : Ku.facetPartitioning[Qu + Ku.subDiv.max * mu + Ku.subDiv.max * Ku.subDiv.max * Ju]
          }
          getClosestFacetAtCoordinates(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const Ju = this.getWorldMatrix(),
              Nu = Qu.m.Matrix[5];
            Ju.invertToRef(Nu);
            const Xu = Qu.m.MS[8];
            Qu.p.TransformCoordinatesFromFloatsToRef(uu, Ru, yu, Nu, Xu);
            const Vu = this.getClosestFacetAtLocalCoordinates(Xu.x, Xu.y, Xu.z, Eu, Ku, mu);
            return Eu && Qu.p.TransformCoordinatesFromFloatsToRef(Eu.x, Eu.y, Eu.z, Ju, Eu), Vu
          }
          getClosestFacetAtLocalCoordinates(uu, Ru, yu, Eu) {
            let Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Su = null;
            const pu = this.getFacetLocalPositions(),
              Tu = this.getFacetLocalNormals(),
              Wu = this.getFacetsAtLocalCoordinates(uu, Ru, yu);
            if (!Wu) return null;
            let ju, Hu, du, bu, Cu = Number.MAX_VALUE;
            for (let ku = 0; ku < Wu.length; ku++) Hu = Wu[ku], du = Tu[Hu], bu = pu[Hu], Ju = (uu - bu.x) * du.x + (Ru - bu.y) * du.y + (yu - bu.z) * du.z, (!Bu || Bu && xu && Ju >= 0 || Bu && !xu && Ju <= 0) && (Ju = du.x * bu.x + du.y * bu.y + du.z * bu.z, Nu = -(du.x * uu + du.y * Ru + du.z * yu - Ju) / (du.x * du.x + du.y * du.y + du.z * du.z), Xu = uu + du.x * Nu, Vu = Ru + du.y * Nu, ru = yu + du.z * Nu, Ku = Xu - uu, Qu = Vu - Ru, mu = ru - yu, ju = Ku * Ku + Qu * Qu + mu * mu, ju < Cu && (Cu = ju, Su = Hu, Eu && (Eu.x = Xu, Eu.y = Vu, Eu.z = ru)));
            return Su
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            return uu.facetDataEnabled && (uu.facetDataEnabled = !1, uu.facetPositions = [], uu.facetNormals = [], uu.facetPartitioning = new Array, uu.facetParameters = {}, uu.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(uu, Ru) {
            return this
          }
          createNormals(uu) {
            const Ru = this.getVerticesData(mu.h.PositionKind),
              yu = this.DEu();
            let Eu;
            return Eu = this.isVerticesDataPresent(mu.h.NormalKind) ? this.getVerticesData(mu.h.NormalKind) : [], Ju.e.ComputeNormals(Ru, yu, Eu, {
              useRightHandedSystem: this.lD().useRightHandedSystem
            }), this.setVerticesData(mu.h.NormalKind, Eu, uu), this
          }
          async optimizeIndicesAsync() {
            const uu = this.DEu();
            if (!uu) return this;
            const {
              OptimizeIndices: Ru
            } = await yu.e(341).then((() => yu(42109)));
            return Ru(uu), this.setIndices(uu, this.getTotalVertices()), this
          }
          alignWithNormal(uu, Ru) {
            Ru || (Ru = bu.b.Y);
            const yu = Qu.m.MS[0],
              Eu = Qu.m.MS[1];
            return Qu.p.CrossToRef(Ru, uu, Eu), Qu.p.CrossToRef(uu, Eu, yu), this.rotationQuaternion ? Qu.f.RotationQuaternionFromAxisToRef(yu, uu, Eu, this.rotationQuaternion) : Qu.p.RotationFromAxisToRef(yu, uu, Eu, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, Tu.k)("EdgesRenderer")
          }
          enableEdgesRendering(uu, Ru, yu) {
            throw (0, Tu.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.JC.filter((uu => uu.emitter === this))
          }
        }, (() => {
          const yu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bu[Symbol.metadata] ?? null) : void 0;
          Ru = [ku.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, Eu.h)(uu, null, Ru, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: uu => "_ApplySkeleton" in uu,
              get: uu => uu._ApplySkeleton
            },
            metadata: yu
          }, null, xu), yu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yu
          })
        })(), uu.OCCLUSION_TYPE_NONE = ((0, Eu.l)(uu, xu), 0), uu.OCCLUSION_TYPE_OPTIMISTIC = 1, uu.OCCLUSION_TYPE_STRICT = 2, uu.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, uu.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, uu.CULLINGSTRATEGY_STANDARD = 0, uu.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, uu.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, uu.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, uu.DefaultIsPickable = !0, uu
      })(),
      su = !1;

    function tu() {
      su || (su = !0, (0, Au.c)("BABYLON.AbstractMesh", nu))
    }(xu = nu.prototype).createOrUpdateSubmeshesOctree ?? (xu.createOrUpdateSubmeshesOctree = (0, Tu.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Su = nu.prototype).getPhysicsImpostor ?? (Su.getPhysicsImpostor = (0, Tu.i)("AbstractMesh", "getPhysicsImpostor")), (pu = nu.prototype).setPhysicsLinkWith ?? (pu.setPhysicsLinkWith = (0, Tu.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(nu.prototype, "occlusionRetryCount") || Object.defineProperty(nu.prototype, "occlusionRetryCount", (0, Tu.e)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(nu.prototype, "occlusionType") || Object.defineProperty(nu.prototype, "occlusionType", (0, Tu.e)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(nu.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(nu.prototype, "occlusionQueryAlgorithmType", (0, Tu.e)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(nu.prototype, "isOccluded") || Object.defineProperty(nu.prototype, "isOccluded", (0, Tu.e)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(nu.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(nu.prototype, "isOcclusionQueryInProgress", (0, Tu.e)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(nu.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(nu.prototype, "forceRenderingWhenOccluded", (0, Tu.e)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(nu.prototype, "occlusionForRenderPassId") || Object.defineProperty(nu.prototype, "occlusionForRenderPassId", (0, Tu.e)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(nu.prototype, "decalMap") || Object.defineProperty(nu.prototype, "decalMap", (0, Tu.e)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(nu.prototype, "bI") || Object.defineProperty(nu.prototype, "bI", (0, Tu.e)("AbstractMesh", "bI")), Object.getOwnPropertyDescriptor(nu.prototype, "physicsImpostor") || Object.defineProperty(nu.prototype, "physicsImpostor", (0, Tu.e)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(nu.prototype, "showBoundingBox") || Object.defineProperty(nu.prototype, "showBoundingBox", (0, Tu.e)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(nu.prototype, "edgesRenderer") || Object.defineProperty(nu.prototype, "edgesRenderer", (0, Tu.e)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(nu.prototype, "renderOutline") || Object.defineProperty(nu.prototype, "renderOutline", (0, Tu.e)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(nu.prototype, "renderOverlay") || Object.defineProperty(nu.prototype, "renderOverlay", (0, Tu.e)("AbstractMesh", "renderOverlay"))
  },
  39994: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Wu
    });
    var Eu = yu(36830),
      Ku = yu(36991),
      Qu = yu(39990),
      mu = yu(39706),
      Ju = yu(39866),
      Nu = yu(39998),
      Xu = yu(39877),
      Vu = yu(39655),
      ru = yu(38448),
      Bu = yu(39584),
      xu = yu(39893),
      Su = yu(36851),
      pu = yu(40003),
      Tu = yu(39625);
    class Wu {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(uu) {
        this._boundingBias ? this._boundingBias.Oyu(uu) : this._boundingBias = uu.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(uu) {
        const Ru = new Wu(Wu.RandomId(), uu.lD());
        return Ru.applyToMesh(uu), Ru
      }
      get meshes() {
        return this._meshes
      }
      constructor(uu, Ru, yu) {
        let Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new Eu.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new Eu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Ru || Su.b.LastCreatedScene, this._scene && (this.id = uu, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.eS(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Ku, null !== mu && (this._totalVertices = mu), yu ? this.setAllVerticesData(yu, Ku) : null === mu && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Qu && (this.applyToMesh(Qu), Qu.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      lD() {
        return this._scene
      }
      eS() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let uu = 0; uu < this._meshes.length; uu++)
          if (!this._meshes[uu].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const uu = new Set;
        for (const Ru in this._vertexBuffers) uu.add(this._vertexBuffers[Ru].getWrapperBuffer());
        uu.forEach((uu => {
          uu._rebuild()
        }))
      }
      setAllVerticesData(uu, Ru) {
        uu.applyToGeometry(this, Ru), this._notifyUpdate()
      }
      setVerticesData(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        yu && Array.isArray(Ru) && (Ru = new Float32Array(Ru));
        const Ku = new mu.h(this._engine, Ru, uu, {
          updatable: yu,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: Eu,
          label: "Geometry_" + this.id + "_" + uu
        });
        this.setVerticesBuffer(Ku)
      }
      removeVerticesData(uu) {
        this._vertexBuffers[uu] && (this._vertexBuffers[uu].dispose(), delete this._vertexBuffers[uu]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Ku = uu.getKind();
        this._vertexBuffers[Ku] && yu && this._vertexBuffers[Ku].dispose(), uu._buffer && uu._ownsBuffer && uu._buffer._increaseReferences(), this._vertexBuffers[Ku] = uu;
        const Qu = this._meshes,
          Ju = Qu.length;
        if (Ku === mu.h.PositionKind) {
          this._totalVertices = Ru ?? uu._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : uu.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const yu = this._extend && this._extend.minimum || new Eu.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Ku = this._extend && this._extend.maximum || new Eu.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let uu = 0; uu < Ju; uu++) {
            const Ru = Qu[uu];
            Ru.buildBoundingInfo(yu, Ku), Ru._createGlobalSubMesh(Ru.isUnIndexed), Ru.computeWorldMatrix(!0), Ru.synchronizeInstances()
          }
        }
        this._notifyUpdate(Ku)
      }
      updateVerticesDataDirectly(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ku = this.getVertexBuffer(uu);
        Ku && (Ku.updateDirectly(Ru, yu, Eu), this._notifyUpdate(uu))
      }
      updateVerticesData(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this.getVertexBuffer(uu);
        Eu && (Eu.update(Ru), uu === mu.h.PositionKind && this._updateBoundingInfo(yu, Ru), this._notifyUpdate(uu))
      }
      _updateBoundingInfo(uu, Ru) {
        if (uu && this._updateExtend(Ru), this._resetPointsArrayCache(), uu) {
          const uu = this._meshes;
          for (const Ru of uu) {
            Ru.hasBoundingInfo ? Ru.vI().reConstruct(this._extend.minimum, this._extend.maximum) : Ru.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const uu = Ru.mC;
            for (const Ru of uu) Ru.refreshBoundingInfo()
          }
        }
      }
      _bind(uu, Ru, yu, Eu) {
        if (!uu) return;
        void 0 === Ru && (Ru = this._indexBuffer);
        const Ku = this.getVertexBuffers();
        if (!Ku) return;
        if (Ru != this._indexBuffer || !this._vertexArrayObjects && !Eu) return void this._engine.bindBuffers(Ku, Ru, uu, yu);
        const Qu = Eu || this._vertexArrayObjects,
          mu = this._engine;
        Qu[uu.key] || (Qu[uu.key] = mu.recordVertexArrayObject(Ku, Ru, uu, yu)), mu.bindVertexArrayObject(Qu[uu.key], Ru)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(uu, Ru, yu) {
        const Eu = this.getVertexBuffer(uu);
        return Eu ? Eu.getFloatData(this._totalVertices, yu || Ru && 1 !== this._meshes.length) : null
      }
      copyVerticesData(uu, Ru) {
        const yu = this.getVertexBuffer(uu);
        if (!yu) return;
        Ru[uu] || (Ru[uu] = new Float32Array(this._totalVertices * yu.getSize()));
        const Eu = yu.getData();
        Eu && (0, Tu.e)(Eu, yu.getSize(), yu.type, yu.byteOffset, yu.byteStride, yu.normalized, this._totalVertices, Ru[uu])
      }
      isVertexBufferUpdatable(uu) {
        const Ru = this._vertexBuffers[uu];
        return !!Ru && Ru.isUpdatable()
      }
      getVertexBuffer(uu) {
        return this.isReady() ? this._vertexBuffers[uu] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(uu) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[uu] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(uu)
      }
      getVerticesDataKinds() {
        const uu = [];
        let Ru;
        if (!this._vertexBuffers && this._delayInfo)
          for (Ru in this._delayInfo) uu.push(Ru);
        else
          for (Ru in this._vertexBuffers) uu.push(Ru);
        return uu
      }
      updateIndices(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const Eu = uu.length !== this._indices.length;
            if (yu || (this._indices = uu.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, uu, Ru), Eu)
              for (const uu of this._meshes) uu._createGlobalSubMesh(!0)
          } else this.setIndices(uu, null, !0)
      }
      setIndexBuffer(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = uu, this._totalVertices = Ru, this._totalIndices = yu, uu.is32Bits = null === Eu ? Ru > 65535 : Eu;
        for (const Ku of this._meshes) Ku._createGlobalSubMesh(!0), Ku.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = uu, this._indexBufferIsUpdatable = yu, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, yu, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Ru && (this._totalVertices = Ru);
        for (const Ku of this._meshes) Ku._createGlobalSubMesh(!Eu), Ku.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      DEu(uu, Ru) {
        if (!this.isReady()) return null;
        const yu = this._indices;
        return Ru || uu && 1 !== this._meshes.length ? yu.slice() : yu
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        uu && this._vertexArrayObjects && this._vertexArrayObjects[uu.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[uu.key]), delete this._vertexArrayObjects[uu.key])
      }
      releaseForMesh(uu, Ru) {
        const yu = this._meshes,
          Eu = yu.indexOf(uu); - 1 !== Eu && (yu.splice(Eu, 1), this._vertexArrayObjects && uu._invalidateInstanceVertexArrayObject(), uu._geometry = null, 0 === yu.length && Ru && this.dispose())
      }
      applyToMesh(uu) {
        if (uu._geometry === this) return;
        const Ru = uu._geometry;
        Ru && Ru.releaseForMesh(uu), this._vertexArrayObjects && uu._invalidateInstanceVertexArrayObject();
        const yu = this._meshes;
        uu._geometry = this, uu._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), yu.push(uu), this.isReady() ? this._applyToMesh(uu) : this._boundingInfo && uu.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!uu && (uu = this.getVerticesData(mu.h.PositionKind), !uu)) return;
          this._extend = (0, xu.d)(uu, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(uu) {
        for (const Ru in this._vertexBuffers) {
          const yu = this._vertexBuffers[Ru];
          yu._buffer.getBuffer() || yu.create(), Ru === mu.h.PositionKind && (this._extend || this._updateExtend(), uu.buildBoundingInfo(this._extend.minimum, this._extend.maximum), uu._createGlobalSubMesh(uu.isUnIndexed), uu._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), uu._syncGeometryWithMorphTargetManager(), uu.synchronizeInstances()
      }
      _notifyUpdate(uu) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, uu), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Ru of this._meshes) Ru._markSubMeshesAsAttributesDirty()
      }
      load(uu, Ru) {
        2 !== this.delayLoadState && (this.isReady() ? Ru && Ru() : (this.delayLoadState = 2, this._queueLoad(uu, Ru)))
      }
      _queueLoad(uu, Ru) {
        this.delayLoadingFile && (uu.addPendingData(this), (async () => {
          try {
            const yu = await uu._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void uu.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(yu), this), this.delayLoadState = 1, this._delayInfo = [], uu.removePendingData(this);
            const Eu = this._meshes,
              Ku = Eu.length;
            for (let uu = 0; uu < Ku; uu++) this._applyToMesh(Eu[uu]);
            Ru && Ru()
          } catch (yu) {
            uu.removePendingData(this), uu.wyu || ru.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${yu}`)
          }
        })())
      }
      toLeftHanded() {
        const uu = this.DEu(!1);
        if (null != uu && uu.length > 0) {
          for (let Ru = 0; Ru < uu.length; Ru += 3) {
            const yu = uu[Ru + 0];
            uu[Ru + 0] = uu[Ru + 2], uu[Ru + 2] = yu
          }
          this.setIndices(uu)
        }
        const Ru = this.getVerticesData(mu.h.PositionKind, !1);
        if (null != Ru && Ru.length > 0) {
          for (let uu = 0; uu < Ru.length; uu += 3) Ru[uu + 2] = -Ru[uu + 2];
          this.setVerticesData(mu.h.PositionKind, Ru, !1)
        }
        const yu = this.getVerticesData(mu.h.NormalKind, !1);
        if (null != yu && yu.length > 0) {
          for (let uu = 0; uu < yu.length; uu += 3) yu[uu + 2] = -yu[uu + 2];
          this.setVerticesData(mu.h.NormalKind, yu, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const uu = this.getVerticesData(mu.h.PositionKind);
        if (!uu || 0 === uu.length) return !1;
        for (let Ru = 3 * this._positionsCache.length, yu = this._positionsCache.length; Ru < uu.length; Ru += 3, ++yu) this._positionsCache[yu] = Eu.p.FromArray(uu, Ru);
        for (let Ru = 0, yu = 0; Ru < uu.length; Ru += 3, ++yu) this._positionsCache[yu].set(uu[0 + Ru], uu[1 + Ru], uu[2 + Ru]);
        return this._positionsCache.length = uu.length / 3, this._positions = this._positionsCache, !0
      }
      wyu() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const yu in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[yu]);
          this._vertexArrayObjects = {};
          const uu = this._meshes,
            Ru = uu.length;
          for (let yu = 0; yu < Ru; yu++) uu[yu]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const uu = this._meshes,
          Ru = uu.length;
        let yu;
        for (yu = 0; yu < Ru; yu++) this.releaseForMesh(uu[yu]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const Eu in this._vertexBuffers) this._vertexBuffers[Eu].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const uu = this._parentContainer.geometries.indexOf(this);
          uu > -1 && this._parentContainer.geometries.splice(uu, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(uu) {
        const Ru = new Wu(uu, this._scene),
          yu = this.DEu(void 0, !0);
        yu && Ru.setIndices(yu);
        let Eu, Ku = !1;
        for (Eu in this._vertexBuffers) {
          const uu = this.getVertexBuffer(Eu),
            yu = uu.getData();
          if (!yu) continue;
          const Qu = uu.isUpdatable(),
            Ju = uu.getSize(),
            {
              type: Nu,
              byteOffset: Xu,
              byteStride: Vu,
              normalized: ru
            } = uu;
          Ku = Ku || Qu;
          let Bu = this._totalVertices;
          if (uu.getIsInstanced()) {
            let uu;
            uu = yu instanceof Array ? 4 * yu.length : yu.byteLength, Bu = uu / Vu
          }
          const xu = (0, Tu.u)(yu, Ju, Nu, Xu, Vu, Bu, !0),
            Su = new mu.h(this._engine, xu, Eu, {
              updatable: Qu,
              useBytes: !1,
              stride: Ju,
              size: Ju,
              offset: 0,
              type: Nu,
              normalized: ru,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            });
          Ru.setVerticesBuffer(Su, Bu)
        }
        for (Eu in Ru._updatable = Ku, Ru.delayLoadState = this.delayLoadState, Ru.delayLoadingFile = this.delayLoadingFile, Ru._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Ru._delayInfo = Ru._delayInfo || [], Ru._delayInfo.push(Eu);
        return Ru._boundingInfo = new Xu.c(this._extend.minimum, this._extend.maximum), Ru
      }
      serialize() {
        const uu = {};
        return uu.id = this.id, uu.uniqueId = this.uniqueId, uu.updatable = this._updatable, Bu.e && Bu.e.HasTags(this) && (uu.tags = Bu.e.GetTags(this)), uu
      }
      _toNumberArray(uu) {
        return Array.isArray(uu) ? uu : Array.prototype.slice.call(uu)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const uu in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, uu) && (this._vertexBuffers[uu]._buffer._data = null)
      }
      serializeVerticeData() {
        const uu = this.serialize();
        return this.isVerticesDataPresent(mu.h.PositionKind) && (uu.positions = this._toNumberArray(this.getVerticesData(mu.h.PositionKind)), this.isVertexBufferUpdatable(mu.h.PositionKind) && (uu.positionsUpdatable = !0)), this.isVerticesDataPresent(mu.h.NormalKind) && (uu.normals = this._toNumberArray(this.getVerticesData(mu.h.NormalKind)), this.isVertexBufferUpdatable(mu.h.NormalKind) && (uu.normalsUpdatable = !0)), this.isVerticesDataPresent(mu.h.TangentKind) && (uu.tangents = this._toNumberArray(this.getVerticesData(mu.h.TangentKind)), this.isVertexBufferUpdatable(mu.h.TangentKind) && (uu.tangentsUpdatable = !0)), this.isVerticesDataPresent(mu.h.UVKind) && (uu.uvs = this._toNumberArray(this.getVerticesData(mu.h.UVKind)), this.isVertexBufferUpdatable(mu.h.UVKind) && (uu.uvsUpdatable = !0)), this.isVerticesDataPresent(mu.h.UV2Kind) && (uu.uvs2 = this._toNumberArray(this.getVerticesData(mu.h.UV2Kind)), this.isVertexBufferUpdatable(mu.h.UV2Kind) && (uu.uvs2Updatable = !0)), this.isVerticesDataPresent(mu.h.UV3Kind) && (uu.uvs3 = this._toNumberArray(this.getVerticesData(mu.h.UV3Kind)), this.isVertexBufferUpdatable(mu.h.UV3Kind) && (uu.uvs3Updatable = !0)), this.isVerticesDataPresent(mu.h.UV4Kind) && (uu.uvs4 = this._toNumberArray(this.getVerticesData(mu.h.UV4Kind)), this.isVertexBufferUpdatable(mu.h.UV4Kind) && (uu.uvs4Updatable = !0)), this.isVerticesDataPresent(mu.h.UV5Kind) && (uu.uvs5 = this._toNumberArray(this.getVerticesData(mu.h.UV5Kind)), this.isVertexBufferUpdatable(mu.h.UV5Kind) && (uu.uvs5Updatable = !0)), this.isVerticesDataPresent(mu.h.UV6Kind) && (uu.uvs6 = this._toNumberArray(this.getVerticesData(mu.h.UV6Kind)), this.isVertexBufferUpdatable(mu.h.UV6Kind) && (uu.uvs6Updatable = !0)), this.isVerticesDataPresent(mu.h.ColorKind) && (uu.colors = this._toNumberArray(this.getVerticesData(mu.h.ColorKind)), this.isVertexBufferUpdatable(mu.h.ColorKind) && (uu.colorsUpdatable = !0)), this.isVerticesDataPresent(mu.h.MatricesIndicesKind) && (uu.matricesIndices = this._toNumberArray(this.getVerticesData(mu.h.MatricesIndicesKind)), uu.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(mu.h.MatricesIndicesKind) && (uu.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(mu.h.MatricesWeightsKind) && (uu.matricesWeights = this._toNumberArray(this.getVerticesData(mu.h.MatricesWeightsKind)), this.isVertexBufferUpdatable(mu.h.MatricesWeightsKind) && (uu.matricesWeightsUpdatable = !0)), uu.indices = this._toNumberArray(this.DEu()), uu
      }
      static ExtractFromMesh(uu, Ru) {
        const yu = uu._geometry;
        return yu ? yu.copy(Ru) : null
      }
      static RandomId() {
        return Vu.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(uu, Ru) {
        for (let yu = 0; yu < Ru.geometries.length; yu++)
          if (Ru.geometries[yu]._loadedUniqueId === uu) return Ru.geometries[yu];
        return null
      }
      static _ImportGeometry(uu, Ru) {
        const yu = Ru.lD(),
          Eu = uu.geometryUniqueId,
          Qu = uu.geometryId;
        if (Eu || Qu) {
          const uu = Eu ? this._GetGeometryByLoadedUniqueId(Eu, yu) : yu.getGeometryById(Qu);
          uu && uu.applyToMesh(Ru)
        } else if (uu instanceof ArrayBuffer) {
          const yu = Ru._binaryInfo;
          if (yu.positionsAttrDesc && yu.positionsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.positionsAttrDesc.offset, yu.positionsAttrDesc.count);
            Ru.setVerticesData(mu.h.PositionKind, Eu, !1)
          }
          if (yu.normalsAttrDesc && yu.normalsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.normalsAttrDesc.offset, yu.normalsAttrDesc.count);
            Ru.setVerticesData(mu.h.NormalKind, Eu, !1)
          }
          if (yu.tangetsAttrDesc && yu.tangetsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.tangetsAttrDesc.offset, yu.tangetsAttrDesc.count);
            Ru.setVerticesData(mu.h.TangentKind, Eu, !1)
          }
          if (yu.uvsAttrDesc && yu.uvsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvsAttrDesc.offset, yu.uvsAttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UVKind, Eu, !1)
          }
          if (yu.uvs2AttrDesc && yu.uvs2AttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvs2AttrDesc.offset, yu.uvs2AttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UV2Kind, Eu, !1)
          }
          if (yu.uvs3AttrDesc && yu.uvs3AttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvs3AttrDesc.offset, yu.uvs3AttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UV3Kind, Eu, !1)
          }
          if (yu.uvs4AttrDesc && yu.uvs4AttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvs4AttrDesc.offset, yu.uvs4AttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UV4Kind, Eu, !1)
          }
          if (yu.uvs5AttrDesc && yu.uvs5AttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvs5AttrDesc.offset, yu.uvs5AttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UV5Kind, Eu, !1)
          }
          if (yu.uvs6AttrDesc && yu.uvs6AttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.uvs6AttrDesc.offset, yu.uvs6AttrDesc.count);
            if (pu.e)
              for (let uu = 1; uu < Eu.length; uu += 2) Eu[uu] = 1 - Eu[uu];
            Ru.setVerticesData(mu.h.UV6Kind, Eu, !1)
          }
          if (yu.colorsAttrDesc && yu.colorsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.colorsAttrDesc.offset, yu.colorsAttrDesc.count);
            Ru.setVerticesData(mu.h.ColorKind, Eu, !1, yu.colorsAttrDesc.stride)
          }
          if (yu.matricesIndicesAttrDesc && yu.matricesIndicesAttrDesc.count > 0) {
            const Eu = new Int32Array(uu, yu.matricesIndicesAttrDesc.offset, yu.matricesIndicesAttrDesc.count),
              Ku = [];
            for (let uu = 0; uu < Eu.length; uu++) {
              const Ru = Eu[uu];
              Ku.push(255 & Ru), Ku.push((65280 & Ru) >> 8), Ku.push((16711680 & Ru) >> 16), Ku.push(Ru >> 24 & 255)
            }
            Ru.setVerticesData(mu.h.MatricesIndicesKind, Ku, !1)
          }
          if (yu.matricesIndicesExtraAttrDesc && yu.matricesIndicesExtraAttrDesc.count > 0) {
            const Eu = new Int32Array(uu, yu.matricesIndicesExtraAttrDesc.offset, yu.matricesIndicesExtraAttrDesc.count),
              Ku = [];
            for (let uu = 0; uu < Eu.length; uu++) {
              const Ru = Eu[uu];
              Ku.push(255 & Ru), Ku.push((65280 & Ru) >> 8), Ku.push((16711680 & Ru) >> 16), Ku.push(Ru >> 24 & 255)
            }
            Ru.setVerticesData(mu.h.MatricesIndicesExtraKind, Ku, !1)
          }
          if (yu.matricesWeightsAttrDesc && yu.matricesWeightsAttrDesc.count > 0) {
            const Eu = new Float32Array(uu, yu.matricesWeightsAttrDesc.offset, yu.matricesWeightsAttrDesc.count);
            Ru.setVerticesData(mu.h.MatricesWeightsKind, Eu, !1)
          }
          if (yu.indicesAttrDesc && yu.indicesAttrDesc.count > 0) {
            const Eu = new Int32Array(uu, yu.indicesAttrDesc.offset, yu.indicesAttrDesc.count);
            Ru.setIndices(Eu, null)
          }
          if (yu.subMeshesAttrDesc && yu.subMeshesAttrDesc.count > 0) {
            const Eu = new Int32Array(uu, yu.subMeshesAttrDesc.offset, 5 * yu.subMeshesAttrDesc.count);
            Ru.mC = [];
            for (let uu = 0; uu < yu.subMeshesAttrDesc.count; uu++) {
              const yu = Eu[5 * uu + 0],
                Ku = Eu[5 * uu + 1],
                Qu = Eu[5 * uu + 2],
                mu = Eu[5 * uu + 3],
                Nu = Eu[5 * uu + 4];
              Ju.c.AddToMesh(yu, Ku, Qu, mu, Nu, Ru)
            }
          }
        } else if (uu.positions && uu.normals && uu.indices) {
          if (Ru.setVerticesData(mu.h.PositionKind, uu.positions, uu.positions._updatable || uu.positionsUpdatable), Ru.setVerticesData(mu.h.NormalKind, uu.normals, uu.normals._updatable || uu.normalsUpdatable), uu.tangents && Ru.setVerticesData(mu.h.TangentKind, uu.tangents, uu.tangents._updatable || uu.tangentsUpdatable), uu.uvs && Ru.setVerticesData(mu.h.UVKind, uu.uvs, uu.uvs._updatable || uu.uvsUpdatable), uu.uvs2 && Ru.setVerticesData(mu.h.UV2Kind, uu.uvs2, uu.uvs2._updatable || uu.uvs2Updatable), uu.uvs3 && Ru.setVerticesData(mu.h.UV3Kind, uu.uvs3, uu.uvs3._updatable || uu.uvs3Updatable), uu.uvs4 && Ru.setVerticesData(mu.h.UV4Kind, uu.uvs4, uu.uvs4._updatable || uu.uvs4Updatable), uu.uvs5 && Ru.setVerticesData(mu.h.UV5Kind, uu.uvs5, uu.uvs5._updatable || uu.uvs5Updatable), uu.uvs6 && Ru.setVerticesData(mu.h.UV6Kind, uu.uvs6, uu.uvs6._updatable || uu.uvs6Updatable), uu.colors && Ru.setVerticesData(mu.h.ColorKind, Ku.h.CheckColors4(uu.colors, uu.positions.length / 3), uu.colors._updatable), uu.matricesIndices)
            if (uu.matricesIndices._isExpanded || uu.matricesIndicesExpanded) delete uu.matricesIndices._isExpanded, delete uu.matricesIndicesExpanded, Ru.setVerticesData(mu.h.MatricesIndicesKind, uu.matricesIndices, uu.matricesIndices._updatable || uu.matricesIndicesUpdatable);
            else {
              const yu = [];
              for (let Ru = 0; Ru < uu.matricesIndices.length; Ru++) {
                const Eu = uu.matricesIndices[Ru];
                yu.push(255 & Eu), yu.push((65280 & Eu) >> 8), yu.push((16711680 & Eu) >> 16), yu.push(Eu >> 24 & 255)
              }
              Ru.setVerticesData(mu.h.MatricesIndicesKind, yu, uu.matricesIndices._updatable || uu.matricesIndicesUpdatable)
            } if (uu.matricesIndicesExtra)
            if (uu.matricesIndicesExtraExpanded || uu.matricesIndicesExtra._isExpanded) delete uu.matricesIndices._isExpanded, delete uu.matricesIndicesExtraExpanded, Ru.setVerticesData(mu.h.MatricesIndicesExtraKind, uu.matricesIndicesExtra, uu.matricesIndicesExtra._updatable || uu.matricesIndicesExtraUpdatable);
            else {
              const yu = [];
              for (let Ru = 0; Ru < uu.matricesIndicesExtra.length; Ru++) {
                const Eu = uu.matricesIndicesExtra[Ru];
                yu.push(255 & Eu), yu.push((65280 & Eu) >> 8), yu.push((16711680 & Eu) >> 16), yu.push(Eu >> 24 & 255)
              }
              Ru.setVerticesData(mu.h.MatricesIndicesExtraKind, yu, uu.matricesIndicesExtra._updatable || uu.matricesIndicesExtraUpdatable)
            } uu.matricesWeights && (Wu._CleanMatricesWeights(uu, Ru), Ru.setVerticesData(mu.h.MatricesWeightsKind, uu.matricesWeights, uu.matricesWeights._updatable)), uu.matricesWeightsExtra && Ru.setVerticesData(mu.h.MatricesWeightsExtraKind, uu.matricesWeightsExtra, uu.matricesWeights._updatable), Ru.setIndices(uu.indices, null)
        }
        if (uu.mC) {
          Ru.mC = [];
          for (let yu = 0; yu < uu.mC.length; yu++) {
            const Eu = uu.mC[yu];
            Ju.c.AddToMesh(Eu.materialIndex, Eu.verticesStart, Eu.verticesCount, Eu.indexStart, Eu.indexCount, Ru)
          }
        }
        Ru._shouldGenerateFlatShading && (Ru.convertToFlatShadedMesh(), Ru._shouldGenerateFlatShading = !1), Ru.computeWorldMatrix(!0), yu.onMeshImportedObservable.notifyObservers(Ru)
      }
      static _CleanMatricesWeights(uu, Ru) {
        const yu = .001;
        if (!Nu.b.CleanBoneMatrixWeights) return;
        let Eu;
        if (!(uu.skeletonId > -1)) return;
        {
          const yu = Ru.lD().getLastSkeletonById(uu.skeletonId);
          if (!yu) return;
          Eu = yu.bones.length
        }
        const Ku = Ru.getVerticesData(mu.h.MatricesIndicesKind),
          Qu = Ru.getVerticesData(mu.h.MatricesIndicesExtraKind),
          Ju = uu.matricesWeights,
          Xu = uu.matricesWeightsExtra,
          Vu = uu.numBoneInfluencer,
          ru = Ju.length;
        for (let mu = 0; mu < ru; mu += 4) {
          let uu = 0,
            Ru = -1;
          for (let Eu = 0; Eu < 4; Eu++) {
            const Ku = Ju[mu + Eu];
            uu += Ku, Ku < yu && Ru < 0 && (Ru = Eu)
          }
          if (Xu)
            for (let Eu = 0; Eu < 4; Eu++) {
              const Ku = Xu[mu + Eu];
              uu += Ku, Ku < yu && Ru < 0 && (Ru = Eu + 4)
            }
          if ((Ru < 0 || Ru > Vu - 1) && (Ru = Vu - 1), uu > yu) {
            const Ru = 1 / uu;
            for (let uu = 0; uu < 4; uu++) Ju[mu + uu] *= Ru;
            if (Xu)
              for (let uu = 0; uu < 4; uu++) Xu[mu + uu] *= Ru
          } else Ru >= 4 ? (Xu[mu + Ru - 4] = 1 - uu, Qu[mu + Ru - 4] = Eu) : (Ju[mu + Ru] = 1 - uu, Ku[mu + Ru] = Eu)
        }
        Ru.setVerticesData(mu.h.MatricesIndicesKind, Ku), uu.matricesWeightsExtra && Ru.setVerticesData(mu.h.MatricesIndicesExtraKind, Qu)
      }
      static Parse(uu, Ru, yu) {
        const Ku = new Wu(uu.id, Ru, void 0, uu.updatable);
        return Ku._loadedUniqueId = uu.uniqueId, Bu.e && Bu.e.AddTagsTo(Ku, uu.tags), uu.delayLoadingFile ? (Ku.delayLoadState = 4, Ku.delayLoadingFile = yu + uu.delayLoadingFile, Ku._boundingInfo = new Xu.c(Eu.p.FromArray(uu.boundingBoxMinimum), Eu.p.FromArray(uu.boundingBoxMaximum)), Ku._delayInfo = [], uu.hasUVs && Ku._delayInfo.push(mu.h.UVKind), uu.hasUVs2 && Ku._delayInfo.push(mu.h.UV2Kind), uu.hasUVs3 && Ku._delayInfo.push(mu.h.UV3Kind), uu.hasUVs4 && Ku._delayInfo.push(mu.h.UV4Kind), uu.hasUVs5 && Ku._delayInfo.push(mu.h.UV5Kind), uu.hasUVs6 && Ku._delayInfo.push(mu.h.UV6Kind), uu.hasColors && Ku._delayInfo.push(mu.h.ColorKind), uu.hasMatricesIndices && Ku._delayInfo.push(mu.h.MatricesIndicesKind), uu.hasMatricesWeights && Ku._delayInfo.push(mu.h.MatricesWeightsKind), Ku._delayLoadingFunction = Qu.e.ImportVertexData) : Qu.e.ImportVertexData(uu, Ku), Ru.pushGeometry(Ku, !0), Ku
      }
    }
  },
  40038: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ru,
      e: () => Su
    });
    var Eu = yu(36830),
      Ku = yu(38448),
      Qu = yu(40008),
      mu = yu(39984),
      Ju = yu(38444),
      Nu = yu(40017),
      Xu = yu(39706),
      Vu = yu(36871);
    class ru extends Qu.e {
      constructor(uu, Ru) {
        super(uu, Ru.lD()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Ru.Y_(this), this._sourceMesh = Ru, this._unIndexed = Ru._unIndexed, this.position.Oyu(Ru.position), this.rotation.Oyu(Ru.rotation), this.pp.Oyu(Ru.pp), Ru.rotationQuaternion && (this.rotationQuaternion = Ru.rotationQuaternion.clone()), this.animations = Ru.animations.slice();
        for (const yu of Ru.getAnimationRanges()) null != yu && this.createAnimationRange(yu.name, yu.from, yu.to);
        if (this.infiniteDistance = Ru.infiniteDistance, this.setPivotMatrix(Ru.getPivotMatrix()), Ru.skeleton || Ru.morphTargetManager || !Ru.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const uu = Ru.vI();
          this.buildBoundingInfo(uu.minimum, uu.maximum)
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
      set receiveShadows(uu) {
        this._sourceMesh?.receiveShadows !== uu && Ku.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(uu) {
        this._sourceMesh?.material !== uu && Ku.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(uu) {
        this._sourceMesh?.visibility !== uu && Ku.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(uu) {
        this._sourceMesh?.skeleton !== uu && Ku.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(uu) {
        this._sourceMesh && uu !== this._sourceMesh.renderingGroupId && Ku.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(uu) {
        this._sourceMesh && uu !== this._sourceMesh.meshBlendingTag && Ku.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get dKu() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(uu) {
        return this._sourceMesh.createInstance(uu)
      }
      isReady() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(uu, !0)
      }
      getVerticesData(uu, Ru, yu) {
        return this._sourceMesh.getVerticesData(uu, Ru, yu)
      }
      copyVerticesData(uu, Ru) {
        this._sourceMesh.copyVerticesData(uu, Ru)
      }
      getVertexBuffer(uu, Ru) {
        return this._sourceMesh.getVertexBuffer(uu, Ru)
      }
      setVerticesData(uu, Ru, yu, Eu) {
        return this.dKu && this.dKu.setVerticesData(uu, Ru, yu, Eu), this.dKu
      }
      updateVerticesData(uu, Ru, yu, Eu) {
        return this.dKu && this.dKu.updateVerticesData(uu, Ru, yu, Eu), this.dKu
      }
      setIndices(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.dKu && this.dKu.setIndices(uu, Ru), this.dKu
      }
      isVerticesDataPresent(uu) {
        return this._sourceMesh.isVerticesDataPresent(uu)
      }
      DEu() {
        return this._sourceMesh.DEu()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.vI().isLocked) return this;
        uu = "object" === typeof Ru ? Ru : {
          applySkeleton: Ru,
          applyMorph: yu
        };
        const Eu = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(uu, null, Xu.h.PositionKind), Eu), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(uu, Ru) {
        if (super._activate(uu, Ru), this._sourceMesh.mC || Ku.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, uu), Ru) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== Nu.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new Eu.d);
          const uu = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, Eu.m.MS[7].Oyu(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Oyu(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Oyu(Eu.m.MS[7]), this._currentLOD._masterMesh = uu, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get ZD() {
        return !0
      }
      getLOD(uu) {
        if (!uu) return this;
        const Ru = this.dKu.getLODLevels();
        if (Ru && 0 !== Ru.length) {
          const Ru = this.vI();
          this._currentLOD = this.dKu.getLOD(uu, Ru.aEu)
        } else this._currentLOD = this.dKu;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(uu) {
        return this.dKu._preActivateForIntermediateRendering(uu)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.mC)
          for (let uu = 0; uu < this._sourceMesh.mC.length; uu++) this._sourceMesh.mC[uu].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.vI().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(uu);
        if (Ju.e.DeepCopy(this, Eu, ["name", "mC", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "dKu", "ZD", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "HKu", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "RJu", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Ru && (Eu.parent = Ru), !yu)
          for (let Ku = 0; Ku < this.lD().meshes.length; Ku++) {
            const uu = this.lD().meshes[Ku];
            uu.parent === this && uu.clone(uu.name, Eu)
          }
        return Eu.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Eu), Eu
      }
      dispose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.q_(this), super.dispose(uu, Ru)
      }
      _serializeAsParent(uu) {
        super._serializeAsParent(uu), uu.parentId = this._sourceMesh.uniqueId, uu.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0, Ru && Ru.newSourcedMesh);
        Eu && yu && yu(this, Eu);
        for (const Ku of this.getChildTransformNodes(!0)) Ku.instantiateHierarchy(Eu, Ru, yu);
        return Eu
      }
    }
    let Bu = !1;

    function xu(uu, Ru, yu, Eu, Ku) {
      for (let Qu = 0; Qu < Ru.length; Qu++) {
        const mu = uu[Ru[Qu]] ?? 0,
          Ju = Ku + yu[Qu];
        mu.toArray ? mu.toArray(Eu, Ju) : mu.copyToArray ? mu.copyToArray(Eu, Ju) : Eu[Ju] = mu
      }
    }

    function Su() {
      Bu || (Bu = !0, mu.e._instancedMeshFactory = (uu, Ru) => {
        const yu = new ru(uu, Ru);
        if (Ru.bI) {
          yu.bI = {};
          for (const uu in Ru.bI) yu.bI[uu] = Ru.bI[uu]
        }
        return yu
      }, mu.e.prototype.HI = function(uu, Ru) {
        if (!this.bI) {
          this.bI = {};
          for (const uu of this.instances) uu.bI = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.eS().getCaps().vertexArrayObject ? {} : void 0
        }), this.bI[uu] = null, this._userInstancedBuffersStorage.strides[uu] = Ru;
        const yu = this._userInstancedBuffersStorage;
        yu.interleavedKinds = [], yu.interleavedOffsets = [], yu.interleavedRowStride = 0;
        for (const Eu in yu.strides) yu.interleavedKinds.push(Eu), yu.interleavedOffsets.push(yu.interleavedRowStride), yu.interleavedRowStride += yu.strides[Eu];
        yu.interleavedData = new Float32Array(32 * yu.interleavedRowStride);
        for (const Eu in yu.interleavedBuffers) yu.interleavedBuffers[Eu].buffer.dispose();
        yu.interleavedBuffers = {}, yu.vertexBuffers[uu] = null;
        for (const Eu of this.instances) Eu.bI[uu] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, mu.e.prototype._processInstancedBuffers = function(uu, Ru) {
        const yu = this._userInstancedBuffersStorage,
          Eu = yu.interleavedRowStride;
        if (!Eu) return;
        const Ku = uu ? uu.length : 0,
          Qu = (Ku + 1) * Eu;
        let mu = yu.interleavedData;
        if (mu.length < Qu) {
          let uu = mu.length;
          for (; uu < Qu;) uu *= 2;
          mu = yu.interleavedData = new Float32Array(uu)
        }
        const Ju = yu.interleavedKinds,
          Nu = yu.interleavedOffsets;
        let Vu = 0;
        Ru && (xu(this.bI, Ju, Nu, mu, Vu), Vu += Eu);
        for (let Xu = 0; Xu < Ku; Xu++) xu(uu[Xu].bI, Ju, Nu, mu, Vu), Vu += Eu;
        let ru = "shared",
          Bu = yu.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (ru = this._instanceDataStorage.engine.currentRenderPassId, yu.renderPasses || (yu.renderPasses = {}), yu.renderPasses[ru] || (yu.renderPasses[ru] = {}), Bu = yu.renderPasses[ru]);
        const Su = yu.interleavedBuffers[ru];
        let pu = !Su || Su.data !== mu;
        for (let Xu = 0; !pu && Xu < Ju.length; Xu++) pu = !Bu[Ju[Xu]];
        if (!pu) return void Su.buffer.updateDirectly(mu, 0);
        Su?.buffer.dispose();
        const Tu = new Xu.c(this.eS(), mu, !0, Eu, !1, !0);
        for (let Xu = 0; Xu < Ju.length; Xu++) {
          const uu = Ju[Xu],
            Ru = Tu.createVertexBuffer(uu, Nu[Xu], yu.strides[uu]);
          Ru.hashCode += Ru.byteOffset * 2 ** 24, Bu[uu] = Ru
        }
        yu.interleavedBuffers[ru] = {
          buffer: Tu,
          data: mu
        }, this._invalidateInstanceVertexArrayObject()
      }, mu.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const uu in this._userInstancedBuffersStorage.vertexArrayObjects) this.eS().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[uu]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, mu.e.prototype._disposeInstanceSpecificData = function() {
        for (const Ru in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Ru].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Ru in this.bI) this._userInstancedBuffersStorage.vertexBuffers[Ru] && this._userInstancedBuffersStorage.vertexBuffers[Ru].dispose();
        const uu = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (uu) {
          for (const Ru in uu) uu[Ru].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.bI = {}
      }, (0, Vu.c)("BABYLON.InstancedMesh", ru))
    }
  },
  39984: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => vu,
      f: () => fu,
      h: () => hu
    });
    var Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu = yu(36858),
      ju = yu(39655),
      Hu = yu(39606),
      du = yu(38444),
      bu = yu(39584),
      Cu = yu(39987),
      ku = yu(39774),
      eu = yu(36830),
      Au = yu(36991),
      Du = yu(39780),
      Mu = yu(39706),
      Iu = yu(39990),
      Gu = yu(39994),
      Uu = yu(40008),
      nu = yu(39866),
      su = yu(39863),
      tu = yu(39951),
      lu = yu(40026),
      gu = yu(39998),
      cu = yu(39582),
      Lu = yu(38448),
      zu = yu(36871),
      Fu = yu(39430),
      wu = yu(39736);
    class Zu {
      constructor(uu, Ru) {
        this.distanceOrScreenCoverage = uu, this.mesh = Ru
      }
    }
    class hu {}
    class Pu {
      constructor() {
        this.batchCache = new Yu(this), this.batchCacheReplacementModeInFrozenMode = new Yu(this), this.instancesBufferSize = 2048
      }
    }
    class iu {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Yu {
      constructor(uu) {
        this.parent = uu, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class ou {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class qu {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const Ou = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class vu extends Uu.e {
      static _GetDefaultSideOrientation(uu) {
        return uu || vu.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(uu) {
        this._internalMeshDataInfo._useLODScreenCoverage = uu, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(uu) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== uu && (uu && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Mu.h.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Mu.h.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = uu, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Wu.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Wu.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Wu.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Wu.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Wu.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(uu) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(uu)
      }
      get HKu() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(uu) {
        this._internalMeshDataInfo._forcedInstanceCount = uu
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(uu) {
        this._internalMeshDataInfo._sideOrientation = uu, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === uu || !this._scene.useRightHandedSystem && 0 === uu
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(uu) {
        this.sideOrientation = uu, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(uu) {
        this._internalMeshDataInfo._overrideRenderingFillMode = uu
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(uu) {
        uu && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (uu.sideOrientation = null), this._setMaterial(uu)
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
      set isUnIndexed(uu) {
        this._unIndexed !== uu && (this._unIndexed = uu, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const uu = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return uu ? uu.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const uu = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return uu ? uu.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(uu) {
        this._instanceDataStorage.manualUpdate = uu
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(uu) {
        this._instanceDataStorage.previousManualUpdate = uu
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(uu) {
        this._instanceDataStorage.forceMatrixUpdates = uu
      }
      _copySource(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ku = this.lD();
        if (uu._geometry && uu._geometry.applyToMesh(this), du.e.DeepCopy(uu, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "HKu", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "ZD", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "RJu", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = uu, Ku.useClonedMeshMap && (uu._internalMeshDataInfo.meshMap || (uu._internalMeshDataInfo.meshMap = {}), uu._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = uu._originalBuilderSideOrientation, this._creationDataStorage = uu._creationDataStorage, uu._ranges) {
          const Ru = uu._ranges;
          for (const uu in Ru) Object.prototype.hasOwnProperty.call(Ru, uu) && Ru[uu] && this.createAnimationRange(uu, Ru[uu].from, Ru[uu].to)
        }
        if (uu.metadata && uu.metadata.clone ? this.metadata = uu.metadata.clone() : this.metadata = uu.metadata, this._internalMetadata = uu._internalMetadata, this.meshBlendingTag = uu.meshBlendingTag, bu.e && bu.e.HasTags(uu) && bu.e.AddTagsTo(this, bu.e.GetTags(uu, !0)), this.tC(uu.isEnabled(!1)), this.parent = uu.parent, this.setPivotMatrix(uu.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + uu.id, this.material = uu.material, !Ru) {
          const Ku = uu.getDescendants(!0);
          for (let uu = 0; uu < Ku.length; uu++) {
            const Qu = Ku[uu];
            Qu._isMesh ? (Ou.parent = this, Ou.doNotCloneChildren = Ru, Ou.clonePhysicsImpostor = yu, Ou.cloneThinInstances = Eu, Qu.clone(this.name + "." + Qu.name, Ou)) : Qu.clone && Qu.clone(this.name + "." + Qu.name, this)
          }
        }
        if (uu.morphTargetManager && (this.morphTargetManager = uu.morphTargetManager), (0, Fu.c)(Ku.getPhysicsEngine)) {
          const Ru = Ku.getPhysicsEngine();
          if (yu && Ru)
            if (1 === Ru.getPluginVersion()) {
              const yu = Ru.getImpostorForPhysicsObject(uu);
              yu && (this.physicsImpostor = yu.clone(this))
            } else 2 === Ru.getPluginVersion() && uu.physicsBody && uu.physicsBody.clone(this)
        }
        for (let Qu = 0; Qu < Ku.JC.length; Qu++) {
          const Ru = Ku.JC[Qu];
          Ru.emitter === uu && Ru.clone(Ru.name, this)
        }
        if (this.skeleton = uu.skeleton, Eu && (uu._thinInstanceDataStorage.matrixData ? (this.uuu("matrix", new Float32Array(uu._thinInstanceDataStorage.matrixData), 16, !uu._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = uu._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = uu._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = uu._thinInstanceDataStorage.matrixBufferSize, uu._userThinInstanceBuffersStorage)) {
          const Ru = uu._userThinInstanceBuffersStorage;
          for (const uu in Ru.data) this.uuu(uu, new Float32Array(Ru.data[uu]), Ru.strides[uu], !Ru.vertexBuffers?.[uu]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[uu] = Ru.sizes[uu]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(uu) {
        let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Qu = arguments.length > 4 ? arguments[4] : void 0,
          mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(uu, yu), this._internalMeshDataInfo = new qu, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new ou, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = vu.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, yu = this.lD(), this._instanceDataStorage = new iu, this._instanceDataStorage.engine = yu.eS(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new Pu), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (uu, Ru, yu) => {
          uu && yu && (this._uniformBuffer ? this.transferToEffect(Ru) : yu.bindOnlyWorldMatrix(Ru))
        };
        let Ju = !1;
        if (Eu && void 0 === Eu._addToSceneRootNodes) {
          const uu = Eu;
          Ru = uu.parent ?? null, Ku = uu.source ?? null, Qu = uu.doNotCloneChildren ?? !1, mu = uu.clonePhysicsImpostor ?? !0, Ju = uu.cloneThinInstances ?? !1
        } else Ru = Eu;
        Ku && this._copySource(Ku, Qu, mu, Ju), null !== Ru && (this.parent = Ru), this._instanceDataStorage.hardwareInstancedRendering = this.eS().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = uu => {
          uu.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Wu.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), Ku && Ku.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = 0 === this.getTotalVertices() || Ru && Ru.doNotInstantiate && (!0 === Ru.doNotInstantiate || Ru.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        Eu.parent = uu || this.parent, Eu.position = this.position.clone(), Eu.pp = this.pp.clone(), this.rotationQuaternion ? Eu.rotationQuaternion = this.rotationQuaternion.clone() : Eu.rotation = this.rotation.clone(), yu && yu(this, Eu);
        for (const Ku of this.getChildTransformNodes(!0)) "InstancedMesh" === Ku.getClassName() && "Mesh" === Eu.getClassName() && Ku.dKu === this ? Ku.instantiateHierarchy(Eu, {
          doNotInstantiate: Ru && Ru.doNotInstantiate || !1,
          newSourcedMesh: Eu
        }, yu) : Ku.instantiateHierarchy(Eu, Ru, yu);
        return Eu
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(uu) {
        let Ru = super.toString(uu);
        if (Ru += ", n vertices: " + this.getTotalVertices(), Ru += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let yu = 0; yu < this.animations.length; yu++) Ru += ", animation[0]: " + this.animations[yu].toString(uu);
        if (uu)
          if (this._geometry) {
            const uu = this.DEu(),
              yu = this.getVerticesData(Mu.h.PositionKind);
            yu && uu && (Ru += ", flat shading: " + (yu.length / 3 === uu.length ? "YES" : "NO"))
          } else Ru += ", flat shading: UNKNOWN";
        return Ru
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const uu of this.instances) uu._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const uu = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((Ru, yu) => Ru.distanceOrScreenCoverage < yu.distanceOrScreenCoverage ? uu : Ru.distanceOrScreenCoverage > yu.distanceOrScreenCoverage ? -uu : 0))
      }
      addLODLevel(uu, Ru) {
        if (Ru && Ru._masterMesh) return Lu.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const yu = new Zu(uu, Ru);
        return this._internalMeshDataInfo._LODLevels.push(yu), Ru && (Ru._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(uu) {
        const Ru = this._internalMeshDataInfo;
        for (let yu = 0; yu < Ru._LODLevels.length; yu++) {
          const Eu = Ru._LODLevels[yu];
          if (Eu.distanceOrScreenCoverage === uu) return Eu.mesh
        }
        return null
      }
      removeLODLevel(uu) {
        const Ru = this._internalMeshDataInfo;
        for (let yu = 0; yu < Ru._LODLevels.length; yu++) Ru._LODLevels[yu].mesh === uu && (Ru._LODLevels.splice(yu, 1), uu && (uu._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(uu, Ru) {
        const yu = this._internalMeshDataInfo;
        if (!yu._LODLevels || 0 === yu._LODLevels.length) return this;
        const Eu = Ru || this.vI().aEu,
          Ku = uu.mode === ku.c.ORTHOGRAPHIC_CAMERA ? uu.minZ : Eu.centerWorld.subtract(uu.globalPosition).length();
        let Qu = Ku,
          mu = 1;
        if (yu._useLODScreenCoverage) {
          const Ru = uu.screenArea;
          let yu = Eu.radiusWorld * uu.minZ / Ku;
          yu = yu * yu * Math.PI, Qu = yu / Ru, mu = -1
        }
        if (mu * yu._LODLevels[yu._LODLevels.length - 1].distanceOrScreenCoverage > mu * Qu) return this.onLODLevelSelection && this.onLODLevelSelection(Qu, this, this), this;
        for (let Ju = 0; Ju < yu._LODLevels.length; Ju++) {
          const uu = yu._LODLevels[Ju];
          if (mu * uu.distanceOrScreenCoverage < mu * Qu) {
            if (uu.mesh) {
              if (4 === uu.mesh.delayLoadState) return uu.mesh._checkDelayState(), this;
              if (2 === uu.mesh.delayLoadState) return this;
              uu.mesh._preActivate(), uu.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Qu, this, uu.mesh), uu.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Qu, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(uu, Ru, yu, Eu) {
        if (!this._geometry) return null;
        let Ku = Eu ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[uu]?.getFloatData(this.instances.length + 1, yu || Ru && 1 !== this._geometry.meshes.length);
        return Ku || (Ku = this._geometry.getVerticesData(uu, Ru, yu)), Ku
      }
      copyVerticesData(uu, Ru) {
        this._geometry && this._geometry.copyVerticesData(uu, Ru)
      }
      getVertexBuffer(uu, Ru) {
        return this._geometry ? (Ru ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[uu]) ?? this._geometry.getVertexBuffer(uu) : null
      }
      isVerticesDataPresent(uu, Ru) {
        return this._geometry ? !Ru && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[uu] || this._geometry.isVerticesDataPresent(uu) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(uu)
      }
      isVertexBufferUpdatable(uu, Ru) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(uu);
        if (!Ru) {
          const Ru = this._userInstancedBuffersStorage?.vertexBuffers[uu];
          if (Ru) return Ru.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(uu)
      }
      getVerticesDataKinds(uu) {
        if (!this._geometry) {
          const uu = [];
          if (this._delayInfo)
            for (const Ru of this._delayInfo) uu.push(Ru);
          return uu
        }
        const Ru = this._geometry.getVerticesDataKinds();
        if (!uu && this._userInstancedBuffersStorage)
          for (const yu in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Ru.indexOf(yu) && Ru.push(yu);
        return Ru
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      DEu(uu, Ru) {
        return this._geometry ? this._geometry.DEu(uu, Ru) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(uu)) return !1;
        if (!this.mC || 0 === this.mC.length) return !0;
        if (!uu) return !0;
        const yu = this.eS(),
          Eu = this.lD(),
          Ku = Ru || yu.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Qu = this.material || Eu.defaultMaterial;
        if (Qu)
          if (Qu._storeEffectOnSubMeshes)
            for (const Ju of this.mC) {
              const uu = Ju.nS();
              if (uu)
                if (uu._storeEffectOnSubMeshes) {
                  if (!uu.isReadyForSubMesh(this, Ju, Ku)) return !1
                } else if (!uu.isReady(this, Ku)) return !1
            } else if (!Qu.isReady(this, Ku)) return !1;
        const mu = yu.currentRenderPassId;
        for (const Ju of this.lightSources) {
          const uu = Ju.getShadowGenerators();
          if (!uu) continue;
          const Ru = uu.values();
          for (let Eu = Ru.next(); !0 !== Eu.done; Eu = Ru.next()) {
            const uu = Eu.value;
            if (uu && (!uu.getShadowMap()?.renderList || uu.getShadowMap()?.renderList && -1 !== uu.getShadowMap()?.renderList?.indexOf(this))) {
              const Ru = uu.getShadowMap().renderPassIds ?? [yu.currentRenderPassId];
              for (let Eu = 0; Eu < Ru.length; ++Eu) {
                yu.currentRenderPassId = Ru[Eu];
                for (const Ru of this.mC)
                  if (!uu.isReady(Ru, Ku, Ru.nS()?.needAlphaBlendingForMesh(this) ?? !1)) return yu.currentRenderPassId = mu, !1
              }
              yu.currentRenderPassId = mu
            }
          }
        }
        for (const Ju of this._internalMeshDataInfo._LODLevels)
          if (Ju.mesh && !Ju.mesh.isReady(Ku)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      sS() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(uu) {
        this._instanceDataStorage.overridenInstanceCount = uu
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const uu = this._instanceDataStorage.engine.currentRenderPassId;
        let Ru = this._instanceDataStorage.renderPasses[uu];
        return Ru || (Ru = new Pu, this._instanceDataStorage.renderPasses[uu] = Ru), Ru
      }
      _preActivate() {
        const uu = this._internalMeshDataInfo,
          Ru = this.lD().getRenderId();
        return uu._preActivateId === Ru || (uu._preActivateId = Ru, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(uu) {
        const Ru = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Ru.visibleInstances && (Ru.visibleInstances.intermediateDefaultRenderId = uu), this
      }
      _registerInstanceForRenderId(uu, Ru) {
        const yu = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return yu.visibleInstances || (yu.visibleInstances = {
          defaultRenderId: Ru,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), yu.visibleInstances[Ru] || (void 0 === yu.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete yu.visibleInstances[yu.previousRenderId], yu.previousRenderId = Ru, yu.visibleInstances[Ru] = new Array), yu.visibleInstances[Ru].push(uu), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.US || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.vI().isLocked) return this;
        uu = "object" === typeof Ru ? Ru : {
          applySkeleton: Ru,
          applyMorph: yu
        };
        const Eu = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(uu, null, Mu.h.PositionKind), Eu), this
      }
      _createGlobalSubMesh(uu) {
        const Ru = this.getTotalVertices();
        if (!Ru || !this.DEu()) return null;
        if (this.mC && this.mC.length > 0) {
          const yu = this.DEu();
          if (!yu) return null;
          const Eu = yu.length;
          let Ku = !1;
          if (uu) Ku = !0;
          else
            for (const uu of this.mC) {
              if (uu.indexStart + uu.indexCount > Eu) {
                Ku = !0;
                break
              }
              if (uu.verticesStart + uu.verticesCount > Ru) {
                Ku = !0;
                break
              }
            }
          if (!Ku) return this.mC[0]
        }
        return this.releaseSubMeshes(), new nu.c(0, 0, Ru, 0, this.getTotalIndices() || (this.isUnIndexed ? Ru : 0), this)
      }
      subdivide(uu) {
        if (uu < 1) return;
        const Ru = this.getTotalIndices();
        let yu = Ru / uu | 0,
          Eu = 0;
        for (; yu % 3 !== 0;) yu++;
        this.releaseSubMeshes();
        for (let Ku = 0; Ku < uu && !(Eu >= Ru); Ku++) nu.c.CreateFromIndices(0, Eu, Eu + yu >= Ru ? Ru - Eu : yu, this, void 0, !1), Eu += yu;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(uu, Ru, yu, Eu);
        else {
          const Eu = new Iu.e;
          Eu.set(Ru, uu);
          const Ku = this.lD();
          new Gu.b(Gu.b.RandomId(), Ku, Eu, yu, this)
        }
        return this
      }
      removeVerticesData(uu) {
        this._geometry && this._geometry.removeVerticesData(uu)
      }
      markVerticesDataAsUpdatable(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const yu = this.getVertexBuffer(uu);
        yu && yu.isUpdatable() !== Ru && this.setVerticesData(uu, this.getVerticesData(uu), Ru)
      }
      setVerticesBuffer(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = Gu.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(uu, yu, Ru), this
      }
      updateVerticesData(uu, Ru, yu, Eu) {
        return this._geometry ? (Eu ? (this.makeGeometryUnique(), this.updateVerticesData(uu, Ru, yu, !1)) : this._geometry.updateVerticesData(uu, Ru, yu), this) : this
      }
      updateMeshPositions(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const yu = this.getVerticesData(Mu.h.PositionKind);
        if (!yu) return this;
        if (uu(yu), this.updateVerticesData(Mu.h.PositionKind, yu, !1, !1), Ru) {
          const uu = this.DEu(),
            Ru = this.getVerticesData(Mu.h.NormalKind);
          if (!Ru) return this;
          Iu.e.ComputeNormals(yu, uu, Ru), this.updateVerticesData(Mu.h.NormalKind, Ru, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const uu = this._geometry,
          Ru = this._geometry.copy(Gu.b.RandomId());
        return uu.releaseForMesh(this, !0), Ru.applyToMesh(this), this
      }
      setIndexBuffer(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ku = this._geometry;
        Ku || (Ku = new Gu.b(Gu.b.RandomId(), this.lD(), void 0, void 0, this)), Ku.setIndexBuffer(uu, Ru, yu, Eu)
      }
      setIndices(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(uu, Ru, yu, Eu);
        else {
          const Eu = new Iu.e;
          Eu.indices = uu;
          const Ku = this.lD();
          new Gu.b(Gu.b.RandomId(), Ku, Eu, yu, this, Ru)
        }
        return this
      }
      updateIndices(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(uu, Ru, yu), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(uu, Ru, yu) {
        let Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Ku = this.lD().eS();
        let Qu;
        if (this._unIndexed)
          if (this._getRenderingFillMode(yu) === su.d.WireFrameFillMode) Qu = uu._getLinesIndexBuffer(this.DEu(), Ku);
          else Qu = null;
        else switch (this._getRenderingFillMode(yu)) {
          case su.d.PointFillMode:
            Qu = null;
            break;
          case su.d.WireFrameFillMode:
            Qu = uu._getLinesIndexBuffer(this.DEu(), Ku);
            break;
          default:
          case su.d.TriangleFillMode:
            Qu = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Ru, Qu, Eu)
      }
      _bindDirect(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(uu), yu && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const uu = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Ru in uu) this._userInstancedBuffersStorage.vertexBuffers[Ru] = uu[Ru]
          }
          this._geometry._bind(uu, Ru, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(uu, Ru);
        return this
      }
      _draw(uu, Ru, yu) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const Eu = this.lD().eS(),
          Ku = Eu._currentMaterialContext,
          Qu = Ku && Ku.useVertexPulling;
        return this._unIndexed && Ru !== su.d.WireFrameFillMode || Ru == su.d.PointFillMode ? Eu.drawArraysType(Ru, uu.verticesStart, uu.verticesCount, this.forcedInstanceCount || yu) : Ru == su.d.WireFrameFillMode ? Eu.drawElementsType(Ru, 0, uu._linesIndexCount, this.forcedInstanceCount || yu) : Qu ? Eu.drawArraysType(Ru, uu.indexStart, uu.indexCount, this.forcedInstanceCount || yu) : Eu.drawElementsType(Ru, uu.indexStart, uu.indexCount, this.forcedInstanceCount || yu), this
      }
      registerBeforeRender(uu) {
        return this.onBeforeRenderObservable.add(uu), this
      }
      unregisterBeforeRender(uu) {
        return this.onBeforeRenderObservable.removeCallback(uu), this
      }
      registerAfterRender(uu) {
        return this.onAfterRenderObservable.add(uu), this
      }
      unregisterAfterRender(uu) {
        return this.onAfterRenderObservable.removeCallback(uu), this
      }
      _getInstancesRenderList(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Ru) return yu.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[uu] = !1, yu.batchCacheReplacementModeInFrozenMode.renderSelf[uu] = !0, yu.batchCacheReplacementModeInFrozenMode;
          if (yu.previousBatch) return yu.previousBatch
        }
        const Eu = this.lD(),
          Ku = Eu._isInIntermediateRendering(),
          Qu = Ku ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          mu = yu.batchCache;
        if (mu.mustReturn = !1, mu.renderSelf[uu] = Ru || !Qu && this.isEnabled() && this.isVisible, mu.visibleInstances[uu] = null, yu.visibleInstances && !Ru) {
          const Ru = yu.visibleInstances,
            Qu = Eu.getRenderId(),
            Ju = Ku ? Ru.intermediateDefaultRenderId : Ru.defaultRenderId;
          mu.visibleInstances[uu] = Ru[Qu], !mu.visibleInstances[uu] && Ju && (mu.visibleInstances[uu] = Ru[Ju])
        }
        return mu.hardwareInstancedRendering[uu] = !Ru && this._instanceDataStorage.hardwareInstancedRendering && null !== mu.visibleInstances[uu] && void 0 !== mu.visibleInstances[uu], yu.previousBatch = mu, mu
      }
      _updateInstancedBuffers(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ru.visibleInstances[uu._id],
          Ju = mu ? mu.length : 0,
          Nu = Ru.parent,
          Xu = this._instanceDataStorage;
        let Vu = Nu.instancesBuffer,
          ru = Nu.instancesPreviousBuffer,
          Bu = 0,
          xu = 0;
        const Su = Ru.renderSelf[uu._id],
          pu = this._scene.floatingOriginOffset,
          Tu = !Vu || yu !== Nu.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !Nu.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || Xu.isFrozen && !Tu) xu = (Su ? 1 : 0) + Ju;
        else {
          const Ru = this.getWorldMatrix();
          if (Su) {
            this._scene.needsPreviousWorldMatrices && (Xu.masterMeshPreviousWorldMatrix ? (Xu.masterMeshPreviousWorldMatrix.copyToArray(Nu.instancesPreviousData, Bu), Xu.masterMeshPreviousWorldMatrix.Oyu(Ru)) : (Xu.masterMeshPreviousWorldMatrix = Ru.clone(), Xu.masterMeshPreviousWorldMatrix.copyToArray(Nu.instancesPreviousData, Bu))), Ru.copyToArray(Nu.instancesData, Bu);
            const uu = Ru.AEu();
            Nu.instancesData[Bu + 12] = uu[12] - pu.x, Nu.instancesData[Bu + 13] = uu[13] - pu.y, Nu.instancesData[Bu + 14] = uu[14] - pu.z, Bu += 16, xu++
          }
          if (mu) {
            if (vu.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && uu.nS()?.needAlphaBlendingForMesh(uu.getRenderingMesh())) {
              const uu = this._scene.activeCamera.globalPosition;
              for (let Ru = 0; Ru < mu.length; Ru++) {
                const yu = mu[Ru];
                yu._distanceToCamera = eu.p.Distance(yu.vI().aEu.centerWorld, uu)
              }
              mu.sort(((uu, Ru) => uu._distanceToCamera > Ru._distanceToCamera ? -1 : uu._distanceToCamera < Ru._distanceToCamera ? 1 : 0))
            }
            for (let uu = 0; uu < mu.length; uu++) {
              const Ru = mu[uu],
                yu = Ru.getWorldMatrix();
              yu.copyToArray(Nu.instancesData, Bu), this._scene.needsPreviousWorldMatrices && (Ru._previousWorldMatrix ? (Ru._previousWorldMatrix.copyToArray(Nu.instancesPreviousData, Bu), Ru._previousWorldMatrix.Oyu(yu)) : (Ru._previousWorldMatrix = yu.clone(), Ru._previousWorldMatrix.copyToArray(Nu.instancesPreviousData, Bu)));
              const Eu = yu.AEu();
              Nu.instancesData[Bu + 12] = Eu[12] - pu.x, Nu.instancesData[Bu + 13] = Eu[13] - pu.y, Nu.instancesData[Bu + 14] = Eu[14] - pu.z, Bu += 16, xu++
            }
          }
        }
        if (Tu) {
          let uu;
          if (Vu && Vu.dispose(), ru && ru.dispose(), Vu = new Mu.c(Eu, Nu.instancesData, !0, 16, !1, !0), Nu.instancesBuffer = Vu, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.eS().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) uu = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Ru = this._instanceDataStorage.engine.currentRenderPassId;
            uu = this._userInstancedBuffersStorage.renderPasses[Ru], uu || (this._userInstancedBuffersStorage.renderPasses[Ru] = uu = {})
          }
          uu.world0 = Vu.createVertexBuffer("world0", 0, 4), uu.world1 = Vu.createVertexBuffer("world1", 4, 4), uu.world2 = Vu.createVertexBuffer("world2", 8, 4), uu.world3 = Vu.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (ru = new Mu.c(Eu, Nu.instancesPreviousData, !0, 16, !1, !0), Nu.instancesPreviousBuffer = ru, uu.previousWorld0 = ru.createVertexBuffer("previousWorld0", 0, 4), uu.previousWorld1 = ru.createVertexBuffer("previousWorld1", 4, 4), uu.previousWorld2 = ru.createVertexBuffer("previousWorld2", 8, 4), uu.previousWorld3 = ru.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Vu.updateDirectly(Nu.instancesData, 0, xu), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || ru.updateDirectly(Nu.instancesPreviousData, 0, xu));
        this._processInstancedBuffers(mu, Su), Qu && void 0 !== Ku && (this.lD()._activeIndices.addCount(uu.indexCount * xu, !1), Eu._currentDrawContext && (Eu._currentDrawContext.useInstancing = !0), this._bind(uu, Qu, Ku), this._draw(uu, Ku, xu)), !this._scene.needsPreviousWorldMatrices || Tu || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || ru.updateDirectly(Nu.instancesData, 0, xu)
      }
      _renderWithInstances(uu, Ru, yu, Eu, Ku) {
        const Qu = yu.visibleInstances[uu._id],
          mu = Qu ? Qu.length : 0,
          Ju = yu.parent,
          Nu = Ju.instancesBufferSize,
          Xu = 16 * (mu + 1) * 4;
        for (; Ju.instancesBufferSize < Xu;) Ju.instancesBufferSize *= 2;
        return Ju.instancesData && Nu == Ju.instancesBufferSize || (Ju.instancesData = new Float32Array(Ju.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !Ju.instancesPreviousData || Nu != Ju.instancesBufferSize) && (Ju.instancesPreviousData = new Float32Array(Ju.instancesBufferSize / 4)), this._updateInstancedBuffers(uu, yu, Nu, Ku, Ru, Eu), Ku.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(uu, Ru, yu, Eu) {
        const Ku = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.lD()._activeIndices.addCount(uu.indexCount * Ku, !1), Eu._currentDrawContext && (Eu._currentDrawContext.useInstancing = !0), this._bind(uu, yu, Ru), this._draw(uu, Ru, Ku), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Ku) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), Eu.unbindInstanceAttributes()
      }
      _processInstancedBuffers(uu, Ru) {}
      _processRendering(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = this.lD(),
          Xu = Nu.eS();
        if (Eu = this._getRenderingFillMode(Eu), Qu && Ru.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Ru, Eu, yu, Xu), this;
        if (Qu) this._renderWithInstances(Ru, Eu, Ku, yu, Xu);
        else {
          Xu._currentDrawContext && (Xu._currentDrawContext.useInstancing = !1);
          let yu = 0;
          Ku.renderSelf[Ru._id] && (mu && mu(!1, uu.getWorldMatrix(), Ju), yu++, this._draw(Ru, Eu, this._instanceDataStorage.overridenInstanceCount));
          const Qu = Ku.visibleInstances[Ru._id];
          if (Qu) {
            const uu = Qu.length;
            yu += uu;
            for (let yu = 0; yu < uu; yu++) {
              const uu = Qu[yu].getWorldMatrix();
              mu && mu(!0, uu, Ju), this._draw(Ru, Eu)
            }
          }
          Nu._activeIndices.addCount(Ru.indexCount * yu, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu?.instancesBuffer && (Ru && uu.instancesBuffer.dispose(), uu.instancesBuffer = null), uu?.instancesPreviousBuffer && (Ru && uu.instancesPreviousBuffer.dispose(), uu.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Ru in this._instanceDataStorage.renderPasses) {
          const yu = this._instanceDataStorage.renderPasses[Ru];
          this._disposeInstanceDataStorageRenderPass(yu, uu)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, uu), this._userInstancedBuffersStorage) {
          for (const Ru in this._userInstancedBuffersStorage.vertexBuffers) {
            const yu = this._userInstancedBuffersStorage.vertexBuffers[Ru];
            yu && (uu && yu.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Ru] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(uu)
      }
      _releaseRenderPassId(uu) {
        const Ru = this._instanceDataStorage.renderPasses[uu];
        if (Ru && (this._disposeInstanceDataStorageRenderPass(Ru, !0), delete this._instanceDataStorage.renderPasses[uu]), this._userInstancedBuffersStorage?.renderPasses) {
          const Ru = this._userInstancedBuffersStorage.renderPasses[uu];
          if (Ru)
            for (const uu in Ru) Ru[uu]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[uu]
        }
        const yu = this._userInstancedBuffersStorage?.interleavedBuffers;
        yu?.[uu] && (yu[uu].buffer.dispose(), delete yu[uu])
      }
      _freeze() {
        if (this.mC) {
          for (let uu = 0; uu < this.mC.length; uu++) this._getInstancesRenderList(uu);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const uu in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[uu].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(uu, Ru, yu, Eu) {
        let Ku = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Qu = this._scene.eS(),
          mu = Qu.currentRenderPassId;
        if (void 0 !== uu && (Qu.currentRenderPassId = uu), Eu)(!Ku || Ku && Eu.isInFrustum(this._scene._frustumPlanes)) && this.render(Eu, !!Ru, yu);
        else
          for (let Ju = 0; Ju < this.mC.length; Ju++) {
            const uu = this.mC[Ju];
            (!Ku || Ku && uu.isInFrustum(this._scene._frustumPlanes)) && this.render(uu, !!Ru, yu)
          }
        return void 0 !== uu && (Qu.currentRenderPassId = mu), this
      }
      directRender() {
        if (!this.mC) return this;
        for (const uu of this.mC) this.render(uu, !1);
        return this
      }
      render(uu, Ru, yu) {
        const Eu = this.lD(),
          Ku = Eu.eS();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Qu = Eu.activeCameras?.length ?? 0,
          mu = Qu > 1 && Eu.activeCamera === Eu.activeCameras[0] || Qu <= 1,
          Ju = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Ku.currentRenderPassId;
        if (mu && this._checkOcclusionQuery(Ju) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const Nu = this._getInstancesRenderList(uu._id, !!yu);
        if (Nu.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let Xu = 0,
          Vu = null;
        this.ignoreCameraMaxZ && Eu.activeCamera && !Eu._isInIntermediateRendering() && (Xu = Eu.activeCamera.maxZ, Vu = Eu.activeCamera, Eu.activeCamera.maxZ = 0, Eu.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const ru = uu.getRenderingMesh(),
          Bu = Nu.hardwareInstancedRendering[uu._id] || ru.hasThinInstances || !!this._userInstancedBuffersStorage && !uu.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          xu = this._instanceDataStorage,
          Su = uu.nS();
        if (!Su) return Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), this;
        if (xu.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Su) {
          if (Su._storeEffectOnSubMeshes && !uu._drawWrapper?._wasPreviouslyReady || !Su._storeEffectOnSubMeshes && !Su._getDrawWrapper()._wasPreviouslyReady) return Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), this
        } else {
          if (Su._storeEffectOnSubMeshes) {
            if (!Su.isReadyForSubMesh(this, uu, Bu)) return Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), this
          } else if (!Su.isReady(this, Bu)) return Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Su
        }
        if (Ru) {
          const uu = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === uu.alphaModes.length) Ku.setAlphaMode(uu.alphaMode);
          else
            for (let Ru = 0; Ru < uu.alphaModes.length; Ru++) {
              const yu = uu.alphaModes[Ru];
              Ku.setAlphaMode(void 0 !== yu ? yu : 2, !1, Ru)
            }
        }
        let pu;
        pu = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? uu._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const Tu = pu?.effect ?? null;
        for (let ku = 0, eu = Eu._beforeRenderingMeshStage; ku < eu.length; ku++) {
          eu[ku].action(this, uu, Nu, Tu)
        }
        if (!pu || !Tu) return Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), this;
        const Wu = yu || this;
        let ju;
        if (!xu.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const uu = Wu._getWorldMatrixDeterminant();
          ju = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), uu < 0 && (ju = ju === su.d.ClockWiseSideOrientation ? su.d.CounterClockWiseSideOrientation : su.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = ju
        }
        const Hu = this._internalMeshDataInfo._effectiveMaterial._preBind(pu, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Ku.setDepthWrite(!0);
        const du = this._internalMeshDataInfo._effectiveMaterial,
          bu = du.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), Bu || this._bind(uu, Tu, bu, !1);
        const Cu = Wu.getWorldMatrix();
        du._storeEffectOnSubMeshes ? du.bindForSubMesh(Cu, this, uu) : du.bind(Cu, this);
        try {
          tu.b._BindAttachmentsForEffect(Ku, Tu) && (!du.backFaceCulling && du.separateCullingPass && (Ku.setState(!0, du.zOffset, !1, !Hu, du.cullBackFaces, du.stencil, du.zOffsetUnits), this._processRendering(this, uu, Tu, bu, Nu, Bu, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Ku.setState(!0, du.zOffset, !1, Hu, du.cullBackFaces, du.stencil, du.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(uu)), this._processRendering(this, uu, Tu, bu, Nu, Bu, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          tu.b._RestoreAttachments(Ku)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let ku = 0, eu = Eu._afterRenderingMeshStage; ku < eu.length; ku++) {
          eu[ku].action(this, uu, Nu, Tu)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Vu && (Vu.maxZ = Xu, Eu.updateTransformMatrix(!0)), 2 !== Eu.performancePriority || xu.isFrozen || this._freeze(), this
      }
      _renderRunFollower(uu, Ru) {
        const yu = this._scene,
          Eu = yu._engine;
        if (Eu.isWebGPU || uu._mesh !== this || 0 !== this.instances.length || this.render !== vu.prototype.render) return !1;
        const Ku = uu.nS();
        if (!Ku || Ku !== yu._cachedMaterial || void 0 === Ku._canBindRunFollower) return !1;
        const Qu = uu._drawWrapper,
          mu = Qu?.effect;
        if (!mu || mu !== yu._cachedEffect || this.visibility !== yu._cachedVisibility || Qu._forceRebindOnNextCall) return !1;
        const Ju = this.hasThinInstances;
        if (!Ju && this._userInstancedBuffersStorage) return !1;
        if (!Qu._wasPreviouslyReady || Qu._wasPreviouslyUsingInstances !== Ju) return !1;
        const Nu = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || yu._isInIntermediateRendering() || 0 !== yu._beforeRenderingMeshStage.length || 0 !== yu._afterRenderingMeshStage.length || Nu._onBeforeRenderObservable?.hasObservers() || Nu._onBeforeBindObservable?.hasObservers() || Nu._onAfterRenderObservable?.hasObservers()) return !1;
        const Xu = this.occlusionType;
        if (void 0 !== Xu && Xu !== Uu.e.OCCLUSION_TYPE_NONE || !Ku._canBindRunFollower(yu, Eu, this, uu, mu)) return !1;
        const Vu = this._internalAbstractMeshDataInfo,
          ru = Vu._isActiveIntermediate;
        ru ? Vu._isActiveIntermediate = !1 : Vu._isActive = !1;
        const Bu = yu.activeCameras?.length ?? 0;
        (Bu > 1 && yu.activeCamera === yu.activeCameras[0] || Bu <= 1) && this._checkOcclusionQuery(!1);
        const xu = this._getInstancesRenderList(uu._id);
        if (xu.mustReturn) return !0;
        if (!Ju && !xu.renderSelf[uu._id]) return ru ? Vu._isActiveIntermediate = !0 : Vu._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (Nu._effectiveMaterial = Ku, Ru)
          if (1 === Ku.alphaModes.length) Eu.setAlphaMode(Ku.alphaMode);
          else
            for (let pu = 0; pu < Ku.alphaModes.length; pu++) {
              const uu = Ku.alphaModes[pu];
              Eu.setAlphaMode(void 0 !== uu ? uu : 2, !1, pu)
            }
        if (Ku.backFaceCulling || null !== Ku.sideOrientation || Ku._twoSidedLighting) {
          const uu = this._getWorldMatrixDeterminant();
          let Ru = Ku._getEffectiveOrientation(this);
          uu < 0 && (Ru = Ru === su.d.ClockWiseSideOrientation ? su.d.CounterClockWiseSideOrientation : su.d.ClockWiseSideOrientation), Nu._effectiveSideOrientation = Ru
        }
        Ku._preBind(Qu, Nu._effectiveSideOrientation), Ku.forceDepthWrite && Eu.setDepthWrite(!0);
        const Su = Ku.fillMode;
        return Ju || this._bind(uu, mu, Su, !1), Ku._bindRunFollower(this.getWorldMatrix(), this, uu, mu), this._processRendering(this, uu, mu, Su, xu, Ju, this._onBeforeDraw, Ku), Ku.unbind(), 2 === yu.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Mu.h.MatricesWeightsKind) && (this.isVerticesDataPresent(Mu.h.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const uu = this.getVerticesData(Mu.h.MatricesWeightsKind),
          Ru = uu.length;
        for (let yu = 0; yu < Ru; yu += 4) {
          const Ru = uu[yu] + uu[yu + 1] + uu[yu + 2] + uu[yu + 3];
          if (0 === Ru) uu[yu] = 1;
          else {
            const Eu = 1 / Ru;
            uu[yu] *= Eu, uu[yu + 1] *= Eu, uu[yu + 2] *= Eu, uu[yu + 3] *= Eu
          }
        }
        this.setVerticesData(Mu.h.MatricesWeightsKind, uu)
      }
      _normalizeSkinWeightsAndExtra() {
        const uu = this.getVerticesData(Mu.h.MatricesWeightsExtraKind),
          Ru = this.getVerticesData(Mu.h.MatricesWeightsKind),
          yu = Ru.length;
        for (let Eu = 0; Eu < yu; Eu += 4) {
          let yu = Ru[Eu] + Ru[Eu + 1] + Ru[Eu + 2] + Ru[Eu + 3];
          if (yu += uu[Eu] + uu[Eu + 1] + uu[Eu + 2] + uu[Eu + 3], 0 === yu) Ru[Eu] = 1;
          else {
            const Ku = 1 / yu;
            Ru[Eu] *= Ku, Ru[Eu + 1] *= Ku, Ru[Eu + 2] *= Ku, Ru[Eu + 3] *= Ku, uu[Eu] *= Ku, uu[Eu + 1] *= Ku, uu[Eu + 2] *= Ku, uu[Eu + 3] *= Ku
          }
        }
        this.setVerticesData(Mu.h.MatricesWeightsKind, Ru), this.setVerticesData(Mu.h.MatricesWeightsKind, uu)
      }
      validateSkinning() {
        const uu = this.getVerticesData(Mu.h.MatricesWeightsExtraKind),
          Ru = this.getVerticesData(Mu.h.MatricesWeightsKind);
        if (null === Ru || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Px: "not skinned"
        };
        const yu = Ru.length;
        let Eu = 0,
          Ku = 0,
          Qu = 0,
          mu = 0;
        const Ju = null === uu ? 4 : 8,
          Nu = [];
        for (let xu = 0; xu <= Ju; xu++) Nu[xu] = 0;
        for (let xu = 0; xu < yu; xu += 4) {
          let yu = Ru[xu],
            Xu = yu,
            Vu = 0 === Xu ? 0 : 1;
          for (let Ku = 1; Ku < Ju; Ku++) {
            const Qu = Ku < 4 ? Ru[xu + Ku] : uu[xu + Ku - 4];
            Qu > yu && Eu++, 0 !== Qu && Vu++, Xu += Qu, yu = Qu
          }
          if (Nu[Vu]++, Vu > Qu && (Qu = Vu), 0 === Xu) Ku++;
          else {
            const yu = 1 / Xu;
            let Eu = 0;
            for (let Ku = 0; Ku < Ju; Ku++) Eu += Ku < 4 ? Math.abs(Ru[xu + Ku] - Ru[xu + Ku] * yu) : Math.abs(uu[xu + Ku - 4] - uu[xu + Ku - 4] * yu);
            Eu > .001 && mu++
          }
        }
        const Xu = this.skeleton.bones.length,
          Vu = this.getVerticesData(Mu.h.MatricesIndicesKind),
          ru = this.getVerticesData(Mu.h.MatricesIndicesExtraKind);
        let Bu = 0;
        for (let xu = 0; xu < yu; xu += 4)
          for (let uu = 0; uu < Ju; uu++) {
            const Ru = uu < 4 ? Vu[xu + uu] : ru[xu + uu - 4];
            (Ru >= Xu || Ru < 0) && Bu++
          }
        return {
          skinned: !0,
          valid: 0 === Ku && 0 === mu && 0 === Bu,
          Px: "Number of Weights = " + yu / 4 + "\nMaximum influences = " + Qu + "\nMissing Weights = " + Ku + "\nNot Sorted = " + Eu + "\nNot Normalized = " + mu + "\nWeightCounts = [" + Nu + "]\nNumber of bones = " + Xu + "\nBad Bone Indices = " + Bu
        }
      }
      _checkDelayState() {
        const uu = this.lD();
        return this._geometry ? this._geometry.load(uu) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(uu)), this
      }
      _queueLoad(uu) {
        uu.addPendingData(this);
        const Ru = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const yu = await uu._loadDelayedFileAsync(this.delayLoadingFile, Ru, !0);
            yu instanceof ArrayBuffer ? this._delayLoadingFunction(yu, this) : this._delayLoadingFunction(JSON.parse(yu), this);
            for (const uu of this.instances) uu.refreshBoundingInfo(), uu._syncSubMeshes();
            this.delayLoadState = 1, uu.removePendingData(this)
          } catch (yu) {
            uu.removePendingData(this), uu.wyu || Lu.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${yu}`)
          }
        })(), this
      }
      isInFrustum(uu) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(uu) && (this._checkDelayState(), !0))
      }
      setMaterialById(uu) {
        const Ru = this.lD().materials;
        let yu;
        for (yu = Ru.length - 1; yu > -1; yu--)
          if (Ru[yu].id === uu) return this.material = Ru[yu], this;
        const Eu = this.lD().multiMaterials;
        for (yu = Eu.length - 1; yu > -1; yu--)
          if (Eu[yu].id === uu) return this.material = Eu[yu], this;
        return this
      }
      getAnimatables() {
        const uu = [];
        return this.material && uu.push(this.material), this.skeleton && uu.push(this.skeleton), uu
      }
      bakeTransformIntoVertices(uu) {
        if (!this.isVerticesDataPresent(Mu.h.PositionKind)) return this;
        const Ru = this.mC.splice(0);
        this._resetPointsArrayCache();
        let yu = this.getVerticesData(Mu.h.PositionKind);
        const Eu = eu.p.Zero();
        let Ku;
        for (Ku = 0; Ku < yu.length; Ku += 3) eu.p.TransformCoordinatesFromFloatsToRef(yu[Ku], yu[Ku + 1], yu[Ku + 2], uu, Eu).toArray(yu, Ku);
        if (this.setVerticesData(Mu.h.PositionKind, yu, this.getVertexBuffer(Mu.h.PositionKind).isUpdatable()), this.isVerticesDataPresent(Mu.h.NormalKind)) {
          for (yu = this.getVerticesData(Mu.h.NormalKind), Ku = 0; Ku < yu.length; Ku += 3) eu.p.TransformNormalFromFloatsToRef(yu[Ku], yu[Ku + 1], yu[Ku + 2], uu, Eu).normalize().toArray(yu, Ku);
          this.setVerticesData(Mu.h.NormalKind, yu, this.getVertexBuffer(Mu.h.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Mu.h.TangentKind)) {
          for (yu = this.getVerticesData(Mu.h.TangentKind), Ku = 0; Ku < yu.length; Ku += 4) eu.p.TransformNormalFromFloatsToRef(yu[Ku], yu[Ku + 1], yu[Ku + 2], uu, Eu).normalize().toArray(yu, Ku);
          this.setVerticesData(Mu.h.TangentKind, yu, this.getVertexBuffer(Mu.h.TangentKind).isUpdatable())
        }
        return uu.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.mC = Ru, this
      }
      bakeCurrentTransformIntoVertices() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(uu), this
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
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Ru && void 0 === Ru._addToSceneRootNodes) {
          const yu = Ru;
          return Ou.source = this, Ou.doNotCloneChildren = yu.doNotCloneChildren, Ou.clonePhysicsImpostor = yu.clonePhysicsImpostor, Ou.cloneThinInstances = yu.cloneThinInstances, new vu(uu, this.lD(), Ou)
        }
        return new vu(uu, this.lD(), Ru, this, yu, Eu)
      }
      dispose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const yu = this._internalMeshDataInfo;
        if (yu._onBeforeDrawObservable && yu._onBeforeDrawObservable.clear(), yu._onBeforeBindObservable && yu._onBeforeBindObservable.clear(), yu._onBeforeRenderObservable && yu._onBeforeRenderObservable.clear(), yu._onAfterRenderObservable && yu._onAfterRenderObservable.clear(), yu._onBetweenPassObservable && yu._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (yu.meshMap)
            for (const uu in yu.meshMap) {
              const Ru = yu.meshMap[uu];
              Ru && (Ru._internalMeshDataInfo._source = null, yu.meshMap[uu] = void 0)
            }
          yu._source && yu._source._internalMeshDataInfo.meshMap && (yu._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const uu = this.lD().meshes;
          for (const Ru of uu) {
            const uu = Ru;
            uu._internalMeshDataInfo && uu._internalMeshDataInfo._source && uu._internalMeshDataInfo._source === this && (uu._internalMeshDataInfo._source = null)
          }
        }
        yu._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(uu, Ru)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ju = arguments.length > 7 ? arguments[7] : void 0;
        const Nu = this.lD();
        return (0, Hu.r)(uu, (uu => {
          const Ju = uu.width,
            Nu = uu.height,
            Xu = this.eS().createCanvas(Ju, Nu).getContext("2d");
          Xu.drawImage(uu, 0, 0);
          const Vu = Xu.getImageData(0, 0, Ju, Nu).data;
          this.applyDisplacementMapFromBuffer(Vu, Ju, Nu, Ru, yu, Ku, Qu, mu), Eu && Eu(this)
        }), Ju || (() => {}), Nu.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Mu.h.PositionKind) || !this.isVerticesDataPresent(Mu.h.NormalKind) || !this.isVerticesDataPresent(Mu.h.UVKind)) return Lu.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const Nu = this.getVerticesData(Mu.h.PositionKind, !0, !0),
          Xu = this.getVerticesData(Mu.h.NormalKind),
          Vu = this.getVerticesData(Mu.h.UVKind);
        let ru = eu.p.Zero();
        const Bu = eu.p.Zero(),
          xu = eu.n.Zero();
        Qu = Qu || eu.n.Zero(), mu = mu || new eu.n(1, 1);
        for (let Su = 0; Su < Nu.length; Su += 3) {
          eu.p.FromArrayToRef(Nu, Su, ru), eu.p.FromArrayToRef(Xu, Su, Bu), eu.n.FromArrayToRef(Vu, Su / 3 * 2, xu);
          const Ju = 4 * ((Math.abs(xu.x * mu.x + Qu.x % 1) * (Ru - 1) % Ru | 0) + (Math.abs(xu.y * mu.y + Qu.y % 1) * (yu - 1) % yu | 0) * Ru),
            pu = .3 * (uu[Ju] / 255) + .59 * (uu[Ju + 1] / 255) + .11 * (uu[Ju + 2] / 255);
          Bu.normalize(), Bu.scaleInPlace(Eu + (Ku - Eu) * pu), ru = ru.add(Bu), ru.toArray(Nu, Su)
        }
        return Iu.e.ComputeNormals(Nu, this.DEu(), Xu), Ju ? (this.setVerticesData(Mu.h.PositionKind, Nu), this.setVerticesData(Mu.h.NormalKind, Xu), this.setVerticesData(Mu.h.UVKind, Vu)) : (this.updateVerticesData(Mu.h.PositionKind, Nu), this.updateVerticesData(Mu.h.NormalKind, Xu)), this
      }
      _getFlattenedNormals(uu, Ru) {
        const yu = new Float32Array(3 * uu.length);
        let Eu = 0;
        const Ku = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Qu = 0; Qu < uu.length; Qu += 3) {
          const mu = eu.p.FromArray(Ru, 3 * uu[Qu]),
            Ju = eu.p.FromArray(Ru, 3 * uu[Qu + 1]),
            Nu = eu.p.FromArray(Ru, 3 * uu[Qu + 2]),
            Xu = mu.subtract(Ju),
            Vu = Nu.subtract(Ju),
            ru = eu.p.Normalize(eu.p.Cross(Xu, Vu));
          Ku && ru.scaleInPlace(-1);
          for (let uu = 0; uu < 3; uu++) yu[Eu++] = ru.x, yu[Eu++] = ru.y, yu[Eu++] = ru.z
        }
        return yu
      }
      _convertToUnIndexedMesh() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = this.getVerticesDataKinds().filter((uu => !this.getVertexBuffer(uu)?.getIsInstanced())),
          yu = this.DEu(!1, !0),
          Eu = {},
          Ku = (uu, Ru) => {
            const Eu = new Float32Array(yu.length * Ru);
            let Ku = 0;
            for (let Qu = 0; Qu < yu.length; Qu++)
              for (let mu = 0; mu < Ru; mu++) Eu[Ku++] = uu[yu[Qu] * Ru + mu];
            return Eu
          },
          Qu = this.vI(),
          mu = this.geometry ? this.mC.slice(0) : [];
        for (const Ju of Ru) Eu[Ju] = this.getVerticesData(Ju);
        for (const Ju of Ru) {
          const Ru = this.getVertexBuffer(Ju),
            Qu = Ru.getSize();
          if (uu && Ju === Mu.h.NormalKind) {
            const uu = this._getFlattenedNormals(yu, Eu[Mu.h.PositionKind]);
            this.setVerticesData(Mu.h.NormalKind, uu, Ru.isUpdatable(), Qu)
          } else this.setVerticesData(Ju, Ku(Eu[Ju], Qu), Ru.isUpdatable(), Qu)
        }
        if (this.morphTargetManager) {
          for (let Ru = 0; Ru < this.morphTargetManager.numTargets; Ru++) {
            const Eu = this.morphTargetManager.getTarget(Ru),
              Qu = Eu.getPositions();
            Eu.vmu(Ku(Qu, 3));
            const mu = Eu.getNormals();
            mu && Eu.setNormals(uu ? this._getFlattenedNormals(yu, Qu) : Ku(mu, 3));
            const Ju = Eu.getTangents();
            Ju && Eu.setTangents(Ku(Ju, 3));
            const Nu = Eu.getUVs();
            Nu && Eu.setUVs(Ku(Nu, 2));
            const Xu = Eu.getColors();
            Xu && Eu.setColors(Ku(Xu, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let Ju = 0; Ju < yu.length; Ju++) yu[Ju] = Ju;
        this.setIndices(yu), this._unIndexed = !0, this.releaseSubMeshes();
        for (const Ju of mu) {
          const uu = Ju.vI();
          nu.c.AddToMesh(Ju.materialIndex, Ju.indexStart, Ju.indexCount, Ju.indexStart, Ju.indexCount, this).setBoundingInfo(uu)
        }
        return this.setBoundingInfo(Qu), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = Iu.e.ExtractFromMesh(this);
        let yu;
        if (uu && this.isVerticesDataPresent(Mu.h.NormalKind) && Ru.normals) {
          for (yu = 0; yu < Ru.normals.length; yu++) Ru.normals[yu] *= -1;
          this.setVerticesData(Mu.h.NormalKind, Ru.normals, this.isVertexBufferUpdatable(Mu.h.NormalKind))
        }
        if (Ru.indices) {
          let uu;
          for (yu = 0; yu < Ru.indices.length; yu += 3) uu = Ru.indices[yu + 1], Ru.indices[yu + 1] = Ru.indices[yu + 2], Ru.indices[yu + 2] = uu;
          this.setIndices(Ru.indices, null, this.isVertexBufferUpdatable(Mu.h.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Ru = Iu.e.ExtractFromMesh(this),
          yu = Ru.indices && !Array.isArray(Ru.indices) && Array.from ? Array.from(Ru.indices) : Ru.indices,
          Eu = Ru.positions && !Array.isArray(Ru.positions) && Array.from ? Array.from(Ru.positions) : Ru.positions,
          Ku = Ru.uvs && !Array.isArray(Ru.uvs) && Array.from ? Array.from(Ru.uvs) : Ru.uvs,
          Qu = Ru.normals && !Array.isArray(Ru.normals) && Array.from ? Array.from(Ru.normals) : Ru.normals;
        if (yu && Eu) {
          Ru.indices = yu, Ru.positions = Eu, Ku && (Ru.uvs = Ku), Qu && (Ru.normals = Qu);
          const mu = uu + 1,
            Ju = [];
          for (let uu = 0; uu < mu + 1; uu++) Ju[uu] = [];
          let Nu, Xu;
          const Vu = new eu.p(0, 0, 0),
            ru = new eu.p(0, 0, 0),
            Bu = new eu.n(0, 0),
            xu = [],
            Su = [],
            pu = [];
          let Tu, Wu, ju, Hu = Eu.length;
          Ku && (Wu = Ku.length), Qu && (ju = Qu.length);
          for (let uu = 0; uu < yu.length; uu += 3) {
            Su[0] = yu[uu], Su[1] = yu[uu + 1], Su[2] = yu[uu + 2];
            for (let uu = 0; uu < 3; uu++)
              if (Nu = Su[uu], Xu = Su[(uu + 1) % 3], void 0 === pu[Nu] && void 0 === pu[Xu] ? (pu[Nu] = [], pu[Xu] = []) : (void 0 === pu[Nu] && (pu[Nu] = []), void 0 === pu[Xu] && (pu[Xu] = [])), void 0 === pu[Nu][Xu] && void 0 === pu[Xu][Nu]) {
                pu[Nu][Xu] = [], Vu.x = (Eu[3 * Xu] - Eu[3 * Nu]) / mu, Vu.y = (Eu[3 * Xu + 1] - Eu[3 * Nu + 1]) / mu, Vu.z = (Eu[3 * Xu + 2] - Eu[3 * Nu + 2]) / mu, Qu && (ru.x = (Qu[3 * Xu] - Qu[3 * Nu]) / mu, ru.y = (Qu[3 * Xu + 1] - Qu[3 * Nu + 1]) / mu, ru.z = (Qu[3 * Xu + 2] - Qu[3 * Nu + 2]) / mu), Ku && (Bu.x = (Ku[2 * Xu] - Ku[2 * Nu]) / mu, Bu.y = (Ku[2 * Xu + 1] - Ku[2 * Nu + 1]) / mu), pu[Nu][Xu].push(Nu);
                for (let uu = 1; uu < mu; uu++) pu[Nu][Xu].push(Eu.length / 3), Eu[Hu++] = Eu[3 * Nu] + uu * Vu.x, Eu[Hu++] = Eu[3 * Nu + 1] + uu * Vu.y, Eu[Hu++] = Eu[3 * Nu + 2] + uu * Vu.z, Qu && (Qu[ju++] = Qu[3 * Nu] + uu * ru.x, Qu[ju++] = Qu[3 * Nu + 1] + uu * ru.y, Qu[ju++] = Qu[3 * Nu + 2] + uu * ru.z), Ku && (Ku[Wu++] = Ku[2 * Nu] + uu * Bu.x, Ku[Wu++] = Ku[2 * Nu + 1] + uu * Bu.y);
                pu[Nu][Xu].push(Xu), pu[Xu][Nu] = [], Tu = pu[Nu][Xu].length;
                for (let uu = 0; uu < Tu; uu++) pu[Xu][Nu][uu] = pu[Nu][Xu][Tu - 1 - uu]
              } Ju[0][0] = yu[uu], Ju[1][0] = pu[yu[uu]][yu[uu + 1]][1], Ju[1][1] = pu[yu[uu]][yu[uu + 2]][1];
            for (let Ru = 2; Ru < mu; Ru++) {
              Ju[Ru][0] = pu[yu[uu]][yu[uu + 1]][Ru], Ju[Ru][Ru] = pu[yu[uu]][yu[uu + 2]][Ru], Vu.x = (Eu[3 * Ju[Ru][Ru]] - Eu[3 * Ju[Ru][0]]) / Ru, Vu.y = (Eu[3 * Ju[Ru][Ru] + 1] - Eu[3 * Ju[Ru][0] + 1]) / Ru, Vu.z = (Eu[3 * Ju[Ru][Ru] + 2] - Eu[3 * Ju[Ru][0] + 2]) / Ru, Qu && (ru.x = (Qu[3 * Ju[Ru][Ru]] - Qu[3 * Ju[Ru][0]]) / Ru, ru.y = (Qu[3 * Ju[Ru][Ru] + 1] - Qu[3 * Ju[Ru][0] + 1]) / Ru, ru.z = (Qu[3 * Ju[Ru][Ru] + 2] - Qu[3 * Ju[Ru][0] + 2]) / Ru), Ku && (Bu.x = (Ku[2 * Ju[Ru][Ru]] - Ku[2 * Ju[Ru][0]]) / Ru, Bu.y = (Ku[2 * Ju[Ru][Ru] + 1] - Ku[2 * Ju[Ru][0] + 1]) / Ru);
              for (let uu = 1; uu < Ru; uu++) Ju[Ru][uu] = Eu.length / 3, Eu[Hu++] = Eu[3 * Ju[Ru][0]] + uu * Vu.x, Eu[Hu++] = Eu[3 * Ju[Ru][0] + 1] + uu * Vu.y, Eu[Hu++] = Eu[3 * Ju[Ru][0] + 2] + uu * Vu.z, Qu && (Qu[ju++] = Qu[3 * Ju[Ru][0]] + uu * ru.x, Qu[ju++] = Qu[3 * Ju[Ru][0] + 1] + uu * ru.y, Qu[ju++] = Qu[3 * Ju[Ru][0] + 2] + uu * ru.z), Ku && (Ku[Wu++] = Ku[2 * Ju[Ru][0]] + uu * Bu.x, Ku[Wu++] = Ku[2 * Ju[Ru][0] + 1] + uu * Bu.y)
            }
            Ju[mu] = pu[yu[uu + 1]][yu[uu + 2]], xu.push(Ju[0][0], Ju[1][0], Ju[1][1]);
            for (let uu = 1; uu < mu; uu++) {
              let Ru;
              for (Ru = 0; Ru < uu; Ru++) xu.push(Ju[uu][Ru], Ju[uu + 1][Ru], Ju[uu + 1][Ru + 1]), xu.push(Ju[uu][Ru], Ju[uu + 1][Ru + 1], Ju[uu][Ru + 1]);
              xu.push(Ju[uu][Ru], Ju[uu + 1][Ru], Ju[uu + 1][Ru + 1])
            }
          }
          Ru.indices = xu, Ru.applyToMesh(this, this.isVertexBufferUpdatable(Mu.h.PositionKind))
        } else Lu.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const uu = Iu.e.ExtractFromMesh(this),
          Ru = uu.uvs,
          yu = uu.indices,
          Eu = uu.positions,
          Ku = uu.colors,
          Qu = uu.matricesIndices,
          mu = uu.matricesWeights,
          Ju = uu.matricesIndicesExtra,
          Nu = uu.matricesWeightsExtra;
        if (void 0 === yu || void 0 === Eu || null === yu || null === Eu) Lu.e.Warn("VertexData contains empty entries");
        else {
          const Xu = [],
            Vu = [],
            ru = [],
            Bu = [],
            xu = [],
            Su = [],
            pu = [],
            Tu = [];
          let Wu, ju = 0;
          const Hu = {};
          let du, bu;
          for (let uu = 0; uu < yu.length; uu += 3) {
            bu = [yu[uu], yu[uu + 1], yu[uu + 2]], Wu = [];
            for (let uu = 0; uu < 3; uu++) {
              Wu[uu] = "";
              for (let Ru = 0; Ru < 3; Ru++) Math.abs(Eu[3 * bu[uu] + Ru]) < 1e-8 && (Eu[3 * bu[uu] + Ru] = 0), Wu[uu] += Eu[3 * bu[uu] + Ru] + "|"
            }
            if (Wu[0] != Wu[1] && Wu[0] != Wu[2] && Wu[1] != Wu[2])
              for (let uu = 0; uu < 3; uu++) {
                if (du = Hu[Wu[uu]], void 0 === du) {
                  Hu[Wu[uu]] = ju, du = ju++;
                  for (let Ru = 0; Ru < 3; Ru++) Xu.push(Eu[3 * bu[uu] + Ru]);
                  if (null !== Ku && void 0 !== Ku)
                    for (let Ru = 0; Ru < 4; Ru++) Bu.push(Ku[4 * bu[uu] + Ru]);
                  if (null !== Ru && void 0 !== Ru)
                    for (let yu = 0; yu < 2; yu++) ru.push(Ru[2 * bu[uu] + yu]);
                  if (null !== Qu && void 0 !== Qu)
                    for (let Ru = 0; Ru < 4; Ru++) xu.push(Qu[4 * bu[uu] + Ru]);
                  if (null !== mu && void 0 !== mu)
                    for (let Ru = 0; Ru < 4; Ru++) Su.push(mu[4 * bu[uu] + Ru]);
                  if (null !== Ju && void 0 !== Ju)
                    for (let Ru = 0; Ru < 4; Ru++) pu.push(Ju[4 * bu[uu] + Ru]);
                  if (null !== Nu && void 0 !== Nu)
                    for (let Ru = 0; Ru < 4; Ru++) Tu.push(Nu[4 * bu[uu] + Ru])
                }
                Vu.push(du)
              }
          }
          const Cu = [];
          Iu.e.ComputeNormals(Xu, Vu, Cu), uu.positions = Xu, uu.indices = Vu, uu.normals = Cu, null !== Ru && void 0 !== Ru && (uu.uvs = ru), null !== Ku && void 0 !== Ku && (uu.colors = Bu), null !== Qu && void 0 !== Qu && (uu.matricesIndices = xu), null !== mu && void 0 !== mu && (uu.matricesWeights = Su), null !== Ju && void 0 !== Ju && (uu.matricesIndicesExtra = pu), null !== mu && void 0 !== mu && (uu.matricesWeightsExtra = Tu), uu.applyToMesh(this, this.isVertexBufferUpdatable(Mu.h.PositionKind))
        }
      }
      static _instancedMeshFactory(uu, Ru) {
        throw (0, Fu.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(uu, Ru, yu) {
        throw (0, Fu.k)("PhysicsImpostor")
      }
      createInstance(uu) {
        const Ru = vu._instancedMeshFactory(uu, this);
        return Ru.parent = this.parent, Ru
      }
      synchronizeInstances() {
        for (let uu = 0; uu < this.instances.length; uu++) {
          this.instances[uu]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(uu) {
        const Ru = this.DEu(),
          yu = this.getVerticesData(Mu.h.PositionKind);
        if (!yu || !Ru) return this;
        const Eu = [];
        for (let Qu = 0; Qu < yu.length; Qu += 3) Eu.push(eu.p.FromArray(yu, Qu));
        const Ku = [];
        return ju.d.SyncAsyncForLoop(Eu.length, 40, (uu => {
          const Ru = Eu.length - 1 - uu,
            yu = Eu[Ru];
          for (let Qu = 0; Qu < Ru; ++Qu) {
            const uu = Eu[Qu];
            if (yu.equals(uu)) {
              Ku[Ru] = Qu;
              break
            }
          }
        }), (() => {
          for (let uu = 0; uu < Ru.length; ++uu) Ru[uu] = Ku[Ru[uu]] || Ru[uu];
          const yu = this.mC.slice(0);
          this.setIndices(Ru), this.mC = yu, uu && uu(this)
        })), this
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        uu.name = this.name, uu.id = this.id, uu.uniqueId = this.uniqueId, uu.type = this.getClassName(), bu.e && bu.e.HasTags(this) && (uu.tags = bu.e.GetTags(this)), uu.position = this.position.AEu(), this.rotationQuaternion ? uu.rotationQuaternion = this.rotationQuaternion.AEu() : this.rotation && (uu.rotation = this.rotation.AEu()), uu.pp = this.pp.AEu(), this._postMultiplyPivotMatrix ? uu.pivotMatrix = this.getPivotMatrix().AEu() : uu.localMatrix = this.getPivotMatrix().AEu(), uu.isEnabled = this.isEnabled(!1), uu.isVisible = this.isVisible, uu.infiniteDistance = this.infiniteDistance, uu.pickable = this.zp, uu.receiveShadows = this.receiveShadows, uu.billboardMode = this.billboardMode, uu.visibility = this.visibility, uu.DS = this.DS, uu.checkCollisions = this.checkCollisions, uu.ellipsoid = this.ellipsoid.AEu(), uu.ellipsoidOffset = this.ellipsoidOffset.AEu(), uu.US = this.US, uu.isBlocker = this.isBlocker, uu.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (uu.fD = !0), this.parent && this.parent._serializeAsParent(uu), uu.isUnIndexed = this.isUnIndexed;
        const Ru = this._geometry;
        if (Ru && this.mC) {
          uu.geometryUniqueId = Ru.uniqueId, uu.geometryId = Ru.id, uu.mC = [];
          for (let Ru = 0; Ru < this.mC.length; Ru++) {
            const yu = this.mC[Ru];
            uu.mC.push({
              materialIndex: yu.materialIndex,
              verticesStart: yu.verticesStart,
              verticesCount: yu.verticesCount,
              indexStart: yu.indexStart,
              indexCount: yu.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (uu.materialUniqueId = this.material.uniqueId, uu.materialId = this.material.id) : (this.material = null, uu.materialUniqueId = this._scene.defaultMaterial.uniqueId, uu.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (uu.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (uu.skeletonId = this.skeleton.id, uu.skeletonUniqueId = this.skeleton.uniqueId, uu.numBoneInfluencers = this.numBoneInfluencers), this.lD()._getComponent(wu.c.NAME_PHYSICSENGINE)) {
          const Ru = this.getPhysicsImpostor?.();
          Ru && (uu.physicsMass = Ru.getParam("Pm"), uu.physicsFriction = Ru.getParam("friction"), uu.physicsRestitution = Ru.getParam("Pm"), uu.physicsImpostor = Ru.type)
        }
        this.metadata && (uu.metadata = this.metadata), 0 !== this.meshBlendingTag && (uu.meshBlendingTag = this.meshBlendingTag), uu.instances = [];
        for (let yu = 0; yu < this.instances.length; yu++) {
          const Ru = this.instances[yu];
          if (Ru.doNotSerialize) continue;
          const Eu = {
            name: Ru.name,
            id: Ru.id,
            isEnabled: Ru.isEnabled(!1),
            isVisible: Ru.isVisible,
            zp: Ru.zp,
            checkCollisions: Ru.checkCollisions,
            position: Ru.position.AEu(),
            pp: Ru.pp.AEu()
          };
          if (Ru.parent && Ru.parent._serializeAsParent(Eu), Ru.rotationQuaternion ? Eu.rotationQuaternion = Ru.rotationQuaternion.AEu() : Ru.rotation && (Eu.rotation = Ru.rotation.AEu()), this.lD()._getComponent(wu.c.NAME_PHYSICSENGINE)) {
            const uu = Ru.getPhysicsImpostor?.();
            uu && (Eu.physicsMass = uu.getParam("Pm"), Eu.physicsFriction = uu.getParam("friction"), Eu.physicsRestitution = uu.getParam("Pm"), Eu.physicsImpostor = uu.type)
          }
          Ru.metadata && (Eu.metadata = Ru.metadata), Ru.actionManager && (Eu.actions = Ru.actionManager.serialize(Ru.name)), uu.instances.push(Eu), cu.c.AppendSerializedAnimations(Ru, Eu), Eu.yT = Ru.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (uu.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.YRu
          }, this._userThinInstanceBuffersStorage)) {
          const Ru = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const uu in this._userThinInstanceBuffersStorage.data) Ru.data[uu] = Array.from(this._userThinInstanceBuffersStorage.data[uu]), Ru.sizes[uu] = this._userThinInstanceBuffersStorage.sizes[uu], Ru.strides[uu] = this._userThinInstanceBuffersStorage.strides[uu];
          uu.thinInstances.userThinInstance = Ru
        }
        return cu.c.AppendSerializedAnimations(this, uu), uu.yT = this.serializeAnimationRanges(), uu.layerMask = this.layerMask, uu.alphaIndex = this.alphaIndex, uu.hasVertexAlpha = this.hasVertexAlpha, uu.overlayAlpha = this.overlayAlpha, uu.overlayColor = this.overlayColor.AEu(), uu.renderOverlay = this.renderOverlay, uu.applyFog = this.applyFog, this.actionManager && (uu.actions = this.actionManager.serialize(this.name)), uu
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const uu = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (uu && uu.vertexCount) {
          if (uu.vertexCount !== this.getTotalVertices()) return Lu.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (uu.isUsingTextureForTargets) return;
          for (let Ru = 0; Ru < uu.numInfluencers; Ru++) {
            const yu = uu.getActiveTarget(Ru),
              Eu = yu.getPositions();
            if (!Eu) return void Lu.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Mu.h.PositionKind + Ru, Eu, !1, 3);
            const Ku = yu.getNormals();
            Ku && this.geometry.setVerticesData(Mu.h.NormalKind + Ru, Ku, !1, 3);
            const Qu = yu.getTangents();
            Qu && this.geometry.setVerticesData(Mu.h.TangentKind + Ru, Qu, !1, 3);
            const mu = yu.getUVs();
            mu && this.geometry.setVerticesData(Mu.h.UVKind + "_" + Ru, mu, !1, 2);
            const Ju = yu.getUV2s();
            Ju && this.geometry.setVerticesData(Mu.h.UV2Kind + "_" + Ru, Ju, !1, 2);
            const Nu = yu.getColors();
            Nu && this.geometry.setVerticesData(Mu.h.ColorKind + Ru, Nu, !1, 4)
          }
        } else {
          let uu = 0;
          for (; this.geometry.isVerticesDataPresent(Mu.h.PositionKind + uu);) this.geometry.removeVerticesData(Mu.h.PositionKind + uu), this.geometry.isVerticesDataPresent(Mu.h.NormalKind + uu) && this.geometry.removeVerticesData(Mu.h.NormalKind + uu), this.geometry.isVerticesDataPresent(Mu.h.TangentKind + uu) && this.geometry.removeVerticesData(Mu.h.TangentKind + uu), this.geometry.isVerticesDataPresent(Mu.h.UVKind + "_" + uu) && this.geometry.removeVerticesData(Mu.h.UVKind + "_" + uu), this.geometry.isVerticesDataPresent(Mu.h.UV2Kind + "_" + uu) && this.geometry.removeVerticesData(Mu.h.UV2Kind + "_" + uu), this.geometry.isVerticesDataPresent(Mu.h.ColorKind + uu) && this.geometry.removeVerticesData(Mu.h.ColorKind + uu), uu++
        }
      }
      static Parse(uu, Ru, yu) {
        let Eu, Ku = !1;
        if (uu.type && "LinesMesh" === uu.type ? Eu = vu._LinesMeshParser(uu, Ru) : uu.type && "GroundMesh" === uu.type ? Eu = vu._GroundMeshParser(uu, Ru) : uu.type && "GoldbergMesh" === uu.type ? Eu = vu._GoldbergMeshParser(uu, Ru) : uu.type && "GreasedLineMesh" === uu.type ? Eu = vu._GreasedLineMeshParser(uu, Ru) : uu.type && "TrailMesh" === uu.type ? Eu = vu._TrailMeshParser(uu, Ru) : uu.type && "GaussianSplattingMesh" === uu.type ? (Eu = uu._isCompound ? vu._GaussianSplattingCompoundMeshParser(uu, Ru) : vu._GaussianSplattingMeshParser(uu, Ru), Ku = !0) : uu.type && "GaussianSplattingPartProxyMesh" === uu.type ? (Eu = vu._GaussianSplattingPartProxyMeshParser(uu, Ru), Ku = !0) : Eu = new vu(uu.name, Ru), Eu.id = uu.id, Eu._waitingParsedUniqueId = uu.uniqueId, bu.e && bu.e.AddTagsTo(Eu, uu.tags), Eu.position = eu.p.FromArray(uu.position), void 0 !== uu.metadata && (Eu.metadata = uu.metadata), void 0 !== uu.meshBlendingTag && (Eu.meshBlendingTag = uu.meshBlendingTag), uu.rotationQuaternion ? Eu.rotationQuaternion = eu.f.FromArray(uu.rotationQuaternion) : uu.rotation && (Eu.rotation = eu.p.FromArray(uu.rotation)), Eu.pp = eu.p.FromArray(uu.pp), uu.localMatrix ? Eu.setPreTransformMatrix(eu.d.FromArray(uu.localMatrix)) : uu.pivotMatrix && Eu.setPivotMatrix(eu.d.FromArray(uu.pivotMatrix)), Eu.tC(uu.isEnabled), Eu.isVisible = uu.isVisible, Eu.infiniteDistance = uu.infiniteDistance, Eu.DS = !!uu.DS, Eu.showBoundingBox = uu.showBoundingBox, Eu.showSubMeshesBoundingBox = uu.showSubMeshesBoundingBox, void 0 !== uu.applyFog && (Eu.applyFog = uu.applyFog), void 0 !== uu.pickable && (Eu.zp = uu.pickable), void 0 !== uu.alphaIndex && (Eu.alphaIndex = uu.alphaIndex), Eu.receiveShadows = uu.receiveShadows, void 0 !== uu.billboardMode && (Eu.billboardMode = uu.billboardMode), void 0 !== uu.visibility && (Eu.visibility = uu.visibility), Eu.checkCollisions = uu.checkCollisions, Eu.US = !!uu.US, uu.ellipsoid && (Eu.ellipsoid = eu.p.FromArray(uu.ellipsoid)), uu.ellipsoidOffset && (Eu.ellipsoidOffset = eu.p.FromArray(uu.ellipsoidOffset)), null != uu.overrideMaterialSideOrientation && (Eu.sideOrientation = uu.overrideMaterialSideOrientation), void 0 !== uu.sideOrientation && (Eu.sideOrientation = uu.sideOrientation), void 0 !== uu.isBlocker && (Eu.isBlocker = uu.isBlocker), Eu._shouldGenerateFlatShading = uu.useFlatShading, uu.fD && (Eu._waitingData.fD = uu.fD), void 0 !== uu.parentId && (Eu._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (Eu._waitingParentInstanceIndex = uu.parentInstanceIndex), void 0 !== uu.actions && (Eu._waitingData.actions = uu.actions), void 0 !== uu.overlayAlpha && (Eu.overlayAlpha = uu.overlayAlpha), void 0 !== uu.overlayColor && (Eu.overlayColor = Au.d.FromArray(uu.overlayColor)), void 0 !== uu.renderOverlay && (Eu.renderOverlay = uu.renderOverlay), Eu.isUnIndexed = !!uu.isUnIndexed, Eu.hasVertexAlpha = uu.hasVertexAlpha, uu.delayLoadingFile ? (Eu.delayLoadState = 4, Eu.delayLoadingFile = yu + uu.delayLoadingFile, Eu.buildBoundingInfo(eu.p.FromArray(uu.boundingBoxMinimum), eu.p.FromArray(uu.boundingBoxMaximum)), uu._binaryInfo && (Eu._binaryInfo = uu._binaryInfo), Eu._delayInfo = [], uu.hasUVs && Eu._delayInfo.push(Mu.h.UVKind), uu.hasUVs2 && Eu._delayInfo.push(Mu.h.UV2Kind), uu.hasUVs3 && Eu._delayInfo.push(Mu.h.UV3Kind), uu.hasUVs4 && Eu._delayInfo.push(Mu.h.UV4Kind), uu.hasUVs5 && Eu._delayInfo.push(Mu.h.UV5Kind), uu.hasUVs6 && Eu._delayInfo.push(Mu.h.UV6Kind), uu.hasColors && Eu._delayInfo.push(Mu.h.ColorKind), uu.hasMatricesIndices && Eu._delayInfo.push(Mu.h.MatricesIndicesKind), uu.hasMatricesWeights && Eu._delayInfo.push(Mu.h.MatricesWeightsKind), Eu._delayLoadingFunction = Gu.b._ImportGeometry, gu.b.ForceFullSceneLoadingForIncremental && Eu._checkDelayState()) : Ku || Gu.b._ImportGeometry(uu, Eu), uu.materialUniqueId ? Eu._waitingMaterialId = uu.materialUniqueId : uu.materialId && (Eu._waitingMaterialId = uu.materialId), uu.morphTargetManagerId > -1 && (Eu._waitingMorphTargetManagerId = uu.morphTargetManagerId), void 0 !== uu.skeletonId && null !== uu.skeletonId && (Eu.skeleton = Ru.getLastSkeletonById(uu.skeletonId), Eu._waitingSkeletonId = uu.skeletonId, uu.numBoneInfluencers && (Eu.numBoneInfluencers = uu.numBoneInfluencers)), void 0 !== uu.skeletonUniqueId && null !== uu.skeletonUniqueId && (Eu._waitingSkeletonUniqueId = uu.skeletonUniqueId), uu.animations) {
          for (let Ru = 0; Ru < uu.animations.length; Ru++) {
            const yu = uu.animations[Ru],
              Ku = (0, zu.b)("BABYLON.Animation");
            Ku && Eu.animations.push(Ku.Parse(yu))
          }
          Du.e.ParseAnimationRanges(Eu, uu, Ru)
        }
        if (uu.autoAnimate && Ru.beginAnimation(Eu, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), uu.layerMask && !isNaN(uu.layerMask) ? Eu.layerMask = Math.abs(parseInt(uu.layerMask)) : Eu.layerMask = 268435455, uu.physicsImpostor && (Eu.physicsImpostor = vu._PhysicsImpostorParser(Ru, Eu, uu)), uu.lodMeshIds && (Eu._waitingData.lods = {
            ids: uu.lodMeshIds,
            distances: uu.lodDistances ? uu.lodDistances : null,
            coverages: uu.lodCoverages ? uu.lodCoverages : null
          }), uu.instances)
          for (let Qu = 0; Qu < uu.instances.length; Qu++) {
            const yu = uu.instances[Qu],
              Ku = Eu.createInstance(yu.name);
            if (yu.id && (Ku.id = yu.id), bu.e && (yu.tags ? bu.e.AddTagsTo(Ku, yu.tags) : bu.e.AddTagsTo(Ku, uu.tags)), Ku.position = eu.p.FromArray(yu.position), void 0 !== yu.metadata && (Ku.metadata = yu.metadata), void 0 !== yu.parentId && (Ku._waitingParentId = yu.parentId), void 0 !== yu.parentInstanceIndex && (Ku._waitingParentInstanceIndex = yu.parentInstanceIndex), void 0 !== yu.isEnabled && null !== yu.isEnabled && Ku.tC(yu.isEnabled), void 0 !== yu.isVisible && null !== yu.isVisible && (Ku.isVisible = yu.isVisible), void 0 !== yu.zp && null !== yu.zp && (Ku.zp = yu.zp), yu.rotationQuaternion ? Ku.rotationQuaternion = eu.f.FromArray(yu.rotationQuaternion) : yu.rotation && (Ku.rotation = eu.p.FromArray(yu.rotation)), Ku.pp = eu.p.FromArray(yu.pp), void 0 != yu.checkCollisions && null != yu.checkCollisions && (Ku.checkCollisions = yu.checkCollisions), void 0 != yu.pickable && null != yu.pickable && (Ku.zp = yu.pickable), void 0 != yu.showBoundingBox && null != yu.showBoundingBox && (Ku.showBoundingBox = yu.showBoundingBox), void 0 != yu.showSubMeshesBoundingBox && null != yu.showSubMeshesBoundingBox && (Ku.showSubMeshesBoundingBox = yu.showSubMeshesBoundingBox), void 0 != yu.alphaIndex && null != yu.showSubMeshesBoundingBox && (Ku.alphaIndex = yu.alphaIndex), yu.physicsImpostor && (Ku.physicsImpostor = vu._PhysicsImpostorParser(Ru, Ku, yu)), void 0 !== yu.actions && (Ku._waitingData.actions = yu.actions), yu.animations) {
              for (let uu = 0; uu < yu.animations.length; uu++) {
                const Ru = yu.animations[uu],
                  Eu = (0, zu.b)("BABYLON.Animation");
                Eu && Ku.animations.push(Eu.Parse(Ru))
              }
              Du.e.ParseAnimationRanges(Ku, yu, Ru), yu.autoAnimate && Ru.beginAnimation(Ku, yu.autoAnimateFrom, yu.autoAnimateTo, yu.autoAnimateLoop, yu.autoAnimateSpeed || 1)
            }
          }
        if (uu.thinInstances) {
          const Ru = uu.thinInstances;
          if (Eu.YRu = !!Ru.enablePicking, Ru.matrixData ? (Eu.uuu("matrix", new Float32Array(Ru.matrixData), 16, !1), Eu._thinInstanceDataStorage.matrixBufferSize = Ru.matrixBufferSize, Eu._thinInstanceDataStorage.instancesCount = Ru.instancesCount) : Eu._thinInstanceDataStorage.matrixBufferSize = Ru.matrixBufferSize, uu.thinInstances.userThinInstance) {
            const Ru = uu.thinInstances.userThinInstance;
            for (const uu in Ru.data) Eu.uuu(uu, new Float32Array(Ru.data[uu]), Ru.strides[uu], !1), Eu._userThinInstanceBuffersStorage.sizes[uu] = Ru.sizes[uu]
          }
        }
        return Eu
      }
      setPositionsForCPUSkinning() {
        const uu = this._internalMeshDataInfo;
        if (!uu._sourcePositions) {
          const Ru = this.getVerticesData(Mu.h.PositionKind);
          if (!Ru) return uu._sourcePositions;
          uu._sourcePositions = new Float32Array(Ru), this.isVertexBufferUpdatable(Mu.h.PositionKind) || this.setVerticesData(Mu.h.PositionKind, Ru, !0)
        }
        return uu._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const uu = this._internalMeshDataInfo;
        if (!uu._sourceNormals) {
          const Ru = this.getVerticesData(Mu.h.NormalKind);
          if (!Ru) return uu._sourceNormals;
          uu._sourceNormals = new Float32Array(Ru), this.isVertexBufferUpdatable(Mu.h.NormalKind) || this.setVerticesData(Mu.h.NormalKind, Ru, !0)
        }
        return uu._sourceNormals
      }
      applySkeleton(uu) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.lD().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.lD().getFrameId(), !this.isVerticesDataPresent(Mu.h.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Mu.h.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Mu.h.MatricesWeightsKind)) return this;
        const Ru = this.isVerticesDataPresent(Mu.h.NormalKind),
          yu = this._internalMeshDataInfo;
        if (!yu._sourcePositions) {
          const uu = this.mC.slice();
          this.setPositionsForCPUSkinning(), this.mC = uu
        }
        Ru && !yu._sourceNormals && this.setNormalsForCPUSkinning();
        let Eu = this.getVerticesData(Mu.h.PositionKind);
        if (!Eu) return this;
        Eu instanceof Float32Array || (Eu = new Float32Array(Eu));
        let Ku = this.getVerticesData(Mu.h.NormalKind);
        if (Ru) {
          if (!Ku) return this;
          Ku instanceof Float32Array || (Ku = new Float32Array(Ku))
        }
        const Qu = this.getVerticesData(Mu.h.MatricesIndicesKind),
          mu = this.getVerticesData(Mu.h.MatricesWeightsKind);
        if (!mu || !Qu) return this;
        const Ju = this.numBoneInfluencers > 4,
          Nu = Ju ? this.getVerticesData(Mu.h.MatricesIndicesExtraKind) : null,
          Xu = Ju ? this.getVerticesData(Mu.h.MatricesWeightsExtraKind) : null,
          Vu = uu.getTransformMatrices(this),
          ru = eu.p.Zero(),
          Bu = new eu.d,
          xu = new eu.d;
        let Su, pu = 0;
        for (let Tu = 0; Tu < Eu.length; Tu += 3, pu += 4) {
          let uu;
          for (Su = 0; Su < 4; Su++) uu = mu[pu + Su], uu > 0 && (eu.d.FromFloat32ArrayToRefScaled(Vu, Math.floor(16 * Qu[pu + Su]), uu, xu), Bu.addToSelf(xu));
          if (Ju)
            for (Su = 0; Su < 4; Su++) uu = Xu[pu + Su], uu > 0 && (eu.d.FromFloat32ArrayToRefScaled(Vu, Math.floor(16 * Nu[pu + Su]), uu, xu), Bu.addToSelf(xu));
          eu.p.TransformCoordinatesFromFloatsToRef(yu._sourcePositions[Tu], yu._sourcePositions[Tu + 1], yu._sourcePositions[Tu + 2], Bu, ru), ru.toArray(Eu, Tu), Ru && (eu.p.TransformNormalFromFloatsToRef(yu._sourceNormals[Tu], yu._sourceNormals[Tu + 1], yu._sourceNormals[Tu + 2], Bu, ru), ru.toArray(Ku, Tu)), Bu.reset()
        }
        return this.updateVerticesData(Mu.h.PositionKind, Eu), Ru && this.updateVerticesData(Mu.h.NormalKind, Ku), this
      }
      static MinMax(uu) {
        let Ru = null,
          yu = null;
        for (const Eu of uu) {
          const uu = Eu.vI().boundingBox;
          Ru && yu ? (Ru.minimizeInPlace(uu.minimumWorld), yu.maximizeInPlace(uu.maximumWorld)) : (Ru = uu.minimumWorld.clone(), yu = uu.maximumWorld.clone())
        }
        return Ru && yu ? {
          min: Ru,
          max: yu
        } : {
          min: eu.p.Zero(),
          max: eu.p.Zero()
        }
      }
      static Center(uu) {
        const Ru = uu instanceof Array ? vu.MinMax(uu) : uu;
        return eu.p.Center(Ru.min, Ru.max)
      }
      static MergeMeshes(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        return (0, Cu.k)(vu._MergeMeshesCoroutine(uu, Ru, yu, Eu, Ku, Qu, !1))
      }
      static async MergeMeshesAsync(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, Cu.g)(vu._MergeMeshesCoroutine(uu, Ru, yu, Eu, Ku, Qu, !0), (0, Cu.b)())
      }
      static * _MergeMeshesCoroutine(uu) {
        let Ru, yu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Eu = arguments.length > 2 ? arguments[2] : void 0,
          Ku = arguments.length > 3 ? arguments[3] : void 0,
          Qu = arguments.length > 4 ? arguments[4] : void 0,
          mu = arguments.length > 5 ? arguments[5] : void 0,
          Ju = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (uu = uu.filter(Boolean)).length) return null;
        if (!Eu) {
          let yu = 0;
          for (Ru = 0; Ru < uu.length; Ru++)
            if (yu += uu[Ru].getTotalVertices(), yu >= 65536) return Lu.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const Nu = uu[0];
        mu && (Qu = !1, uu.sort(((uu, Ru) => (uu.material?.uniqueId ?? -1) - (Ru.material?.uniqueId ?? -1))));
        const Xu = new Array,
          Vu = new Array,
          ru = new Array,
          Bu = uu[0].sideOrientation;
        for (Ru = 0; Ru < uu.length; Ru++) {
          const yu = uu[Ru];
          if (yu.ZD) return Lu.e.Warn("Cannot merge instance meshes."), null;
          if (Bu !== yu.sideOrientation) return Lu.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Qu || mu) {
            const uu = ru.reduce(((uu, Ru) => Math.max(uu, Ru.start + Ru.count)), 0);
            if (mu)
              if (yu.material) {
                const Ru = yu.material;
                if (Ru instanceof lu.c) {
                  for (let uu = 0; uu < Ru.yuu.length; uu++) Xu.indexOf(Ru.yuu[uu]) < 0 && Xu.push(Ru.yuu[uu]);
                  for (let Eu = 0; Eu < yu.mC.length; Eu++) Vu.push(Xu.indexOf(Ru.yuu[yu.mC[Eu].materialIndex])), ru.push({
                    start: uu + yu.mC[Eu].indexStart,
                    count: yu.mC[Eu].indexCount
                  })
                } else {
                  Xu.indexOf(Ru) < 0 && Xu.push(Ru);
                  for (let Eu = 0; Eu < yu.mC.length; Eu++) Vu.push(Xu.indexOf(Ru)), ru.push({
                    start: uu + yu.mC[Eu].indexStart,
                    count: yu.mC[Eu].indexCount
                  })
                }
              } else
                for (let Ru = 0; Ru < yu.mC.length; Ru++) Vu.push(0), ru.push({
                  start: uu + yu.mC[Ru].indexStart,
                  count: yu.mC[Ru].indexCount
                });
            else ru.push({
              start: uu,
              count: yu.getTotalIndices()
            })
          }
        }
        if (mu && ru.length > 1) {
          let uu = 0;
          for (let Ru = 1; Ru < ru.length; Ru++) {
            const yu = ru[uu],
              Eu = ru[Ru];
            Vu[Ru] === Vu[uu] && yu.start + yu.count === Eu.start ? yu.count += Eu.count : (uu++, ru[uu] = Eu, Vu[uu] = Vu[Ru])
          }
          ru.length = uu + 1, Vu.length = uu + 1
        }
        const xu = uu => {
            const Ru = uu.computeWorldMatrix(!0);
            return {
              vertexData: Iu.e.ExtractFromMesh(uu, !1, !1),
              transform: Ru
            }
          },
          {
            vertexData: Su,
            transform: pu
          } = xu(uu[0]);
        Ju && (yield);
        const Tu = new Array(uu.length - 1);
        for (let Cu = 1; Cu < uu.length; Cu++) Tu[Cu - 1] = xu(uu[Cu]), Ju && (yield);
        const Wu = Su._mergeCoroutine(pu, Tu, Eu, Ju, !yu);
        let ju = Wu.next();
        for (; !ju.done;) Ju && (yield), ju = Wu.next();
        const Hu = ju.value;
        Ku || (Ku = new vu(Nu.name + "_merged", Nu.lD()));
        const du = Hu._applyToCoroutine(Ku, void 0, Ju);
        let bu = du.next();
        for (; !bu.done;) Ju && (yield), bu = du.next();
        if (Ku.checkCollisions = Nu.checkCollisions, Ku.sideOrientation = Nu.sideOrientation, yu)
          for (Ru = 0; Ru < uu.length; Ru++) uu[Ru].dispose();
        if (Qu || mu) {
          for (Ku.releaseSubMeshes(), Ru = 0; Ru < ru.length;) nu.c.CreateFromIndices(0, ru[Ru].start, ru[Ru].count, Ku, void 0, !1), Ru++;
          for (const uu of Ku.mC) uu.refreshBoundingInfo();
          Ku.computeWorldMatrix(!0)
        }
        if (mu) {
          const uu = new lu.c(Nu.name + "_merged", Nu.lD());
          uu.yuu = Xu;
          for (let Ru = 0; Ru < Ku.mC.length; Ru++) Ku.mC[Ru].materialIndex = Vu[Ru];
          Ku.material = uu
        } else Ku.material = Nu.material;
        return Ku
      }
      Y_(uu) {
        uu._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(uu)
      }
      q_(uu) {
        const Ru = uu._indexInSourceMeshInstanceArray;
        if (-1 != Ru) {
          if (Ru !== this.instances.length - 1) {
            const uu = this.instances[this.instances.length - 1];
            this.instances[Ru] = uu, uu._indexInSourceMeshInstanceArray = Ru
          }
          uu._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === su.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(uu) {
        const Ru = this.lD();
        return Ru.forcePointsCloud ? su.d.PointFillMode : Ru.forceWireframe ? su.d.WireFrameFillMode : this.overrideRenderingFillMode ?? uu
      }
      setMaterialByID(uu) {
        return this.setMaterialById(uu)
      }
      static CreateRibbon(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(uu, Ru, yu, Eu, Ku, Qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(uu, Ru, yu, Eu, Ku) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(uu, Ru, yu, Eu, Ku, Qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(uu, Ru, yu, Eu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(uu, Ru, yu, Eu, Ku, Qu, mu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(uu, Ru, yu, Eu, Ku) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(uu, Ru, yu, Eu, Ku, Qu, mu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(uu, Ru, yu, Eu, Ku, Qu, mu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(uu, Ru, yu, Eu, Ku) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(uu, Ru, yu, Eu, Ku, Qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(uu, Ru, yu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(uu, Ru, yu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(uu, Ru, yu, Eu, Ku, Qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(uu, Ru, yu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(uu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    vu.FRONTSIDE = Iu.e.FRONTSIDE, vu.BACKSIDE = Iu.e.BACKSIDE, vu.DOUBLESIDE = Iu.e.DOUBLESIDE, vu.DEFAULTSIDE = Iu.e.DEFAULTSIDE, vu.NO_CAP = 0, vu.CAP_START = 1, vu.CAP_END = 2, vu.CAP_ALL = 3, vu.NO_FLIP = 0, vu.FLIP_TILE = 1, vu.ROTATE_TILE = 2, vu.FLIP_ROW = 3, vu.ROTATE_ROW = 4, vu.FLIP_N_ROTATE_TILE = 5, vu.FLIP_N_ROTATE_ROW = 6, vu.CENTER = 0, vu.LEFT = 1, vu.RIGHT = 2, vu.TOP = 3, vu.BOTTOM = 4, vu.INSTANCEDMESH_SORT_TRANSPARENT = !1, vu._GroundMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GroundMesh")
    }, vu._GoldbergMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GoldbergMesh")
    }, vu._LinesMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("LinesMesh")
    }, vu._GreasedLineMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GreasedLineMesh")
    }, vu._GreasedLineRibbonMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GreasedLineRibbonMesh")
    }, vu._TrailMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("TrailMesh")
    }, vu._GaussianSplattingMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GaussianSplattingMesh")
    }, vu._GaussianSplattingPartProxyMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GaussianSplattingPartProxyMesh")
    }, vu._GaussianSplattingCompoundMeshParser = (uu, Ru) => {
      throw (0, Fu.k)("GaussianSplattingCompoundMesh")
    };
    let au = !1;

    function fu() {
      au || (au = !0, (0, zu.c)("BABYLON.Mesh", vu))
    }(Eu = vu.prototype).HI ?? (Eu.HI = (0, Fu.i)("Mesh", "HI")), (Ku = vu.prototype).simplify ?? (Ku.simplify = (0, Fu.i)("Mesh", "simplify")), (Qu = vu.prototype).thinInstanceAdd ?? (Qu.thinInstanceAdd = (0, Fu.i)("Mesh", "thinInstanceAdd")), (mu = vu.prototype).thinInstanceAddSelf ?? (mu.thinInstanceAddSelf = (0, Fu.i)("Mesh", "thinInstanceAddSelf")), (Ju = vu.prototype).thinInstanceRegisterAttribute ?? (Ju.thinInstanceRegisterAttribute = (0, Fu.i)("Mesh", "thinInstanceRegisterAttribute")), (Nu = vu.prototype).thinInstanceSetMatrixAt ?? (Nu.thinInstanceSetMatrixAt = (0, Fu.i)("Mesh", "thinInstanceSetMatrixAt")), (Xu = vu.prototype).thinInstanceSetAttributeAt ?? (Xu.thinInstanceSetAttributeAt = (0, Fu.i)("Mesh", "thinInstanceSetAttributeAt")), (Vu = vu.prototype).uuu ?? (Vu.uuu = (0, Fu.i)("Mesh", "uuu")), (ru = vu.prototype).thinInstanceGetWorldMatrices ?? (ru.thinInstanceGetWorldMatrices = (0, Fu.i)("Mesh", "thinInstanceGetWorldMatrices")), (Bu = vu.prototype).W4 ?? (Bu.W4 = (0, Fu.i)("Mesh", "W4")), (xu = vu.prototype).thinInstancePartialBufferUpdate ?? (xu.thinInstancePartialBufferUpdate = (0, Fu.i)("Mesh", "thinInstancePartialBufferUpdate")), (Su = vu.prototype).thinInstanceRefreshBoundingInfo ?? (Su.thinInstanceRefreshBoundingInfo = (0, Fu.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (pu = vu.prototype).getEmittedParticleSystems ?? (pu.getEmittedParticleSystems = (0, Fu.i)("Mesh", "getEmittedParticleSystems")), (Tu = vu.prototype).getHierarchyEmittedParticleSystems ?? (Tu.getHierarchyEmittedParticleSystems = (0, Fu.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(vu.prototype, "edgesShareWithInstances") || Object.defineProperty(vu.prototype, "edgesShareWithInstances", (0, Fu.e)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(vu.prototype, "YRu") || Object.defineProperty(vu.prototype, "YRu", (0, Fu.e)("Mesh", "YRu")), Object.getOwnPropertyDescriptor(vu.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(vu.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Fu.e)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(vu.prototype, "F_") || Object.defineProperty(vu.prototype, "F_", (0, Fu.e)("Mesh", "F_"))
  },
  39990: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Su
    });
    var Eu = yu(39560),
      Ku = yu(36830),
      Qu = yu(39706),
      mu = yu(39430),
      Ju = yu(36991),
      Nu = yu(38448),
      Xu = yu(39566),
      Vu = yu(39987),
      ru = yu(39613),
      Bu = yu(39866);
    class xu {}
    let Su = (() => {
      var uu;
      let Ru, yu, Su, pu, Tu = [];
      return uu = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Vu.f)(this._applyToCoroutine.bind(this)), this.uniqueId = uu._UniqueIdGenerator, uu._UniqueIdGenerator++
        }
        set(uu, Ru) {
          switch (uu.length || Nu.e.Warn(`Setting vertex data kind '${Ru}' with an empty array`), Ru) {
            case Qu.h.PositionKind:
              this.positions = uu;
              break;
            case Qu.h.NormalKind:
              this.normals = uu;
              break;
            case Qu.h.TangentKind:
              this.tangents = uu;
              break;
            case Qu.h.UVKind:
              this.uvs = uu;
              break;
            case Qu.h.UV2Kind:
              this.uvs2 = uu;
              break;
            case Qu.h.UV3Kind:
              this.uvs3 = uu;
              break;
            case Qu.h.UV4Kind:
              this.uvs4 = uu;
              break;
            case Qu.h.UV5Kind:
              this.uvs5 = uu;
              break;
            case Qu.h.UV6Kind:
              this.uvs6 = uu;
              break;
            case Qu.h.ColorKind:
              this.colors = uu;
              break;
            case Qu.h.MatricesIndicesKind:
              this.matricesIndices = uu;
              break;
            case Qu.h.MatricesWeightsKind:
              this.matricesWeights = uu;
              break;
            case Qu.h.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = uu;
              break;
            case Qu.h.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = uu
          }
        }
        applyToMesh(uu, Ru) {
          return this._applyTo(uu, Ru, !1), this
        }
        applyToGeometry(uu, Ru) {
          return this._applyTo(uu, Ru, !1), this
        }
        updateMesh(uu) {
          return this._update(uu), this
        }
        updateGeometry(uu) {
          return this._update(uu), this
        }* _applyToCoroutine(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            yu = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (uu.setVerticesData(Qu.h.PositionKind, this.positions, Ru), yu && (yield)), this.normals && (uu.setVerticesData(Qu.h.NormalKind, this.normals, Ru), yu && (yield)), this.tangents && (uu.setVerticesData(Qu.h.TangentKind, this.tangents, Ru), yu && (yield)), this.uvs && (uu.setVerticesData(Qu.h.UVKind, this.uvs, Ru), yu && (yield)), this.uvs2 && (uu.setVerticesData(Qu.h.UV2Kind, this.uvs2, Ru), yu && (yield)), this.uvs3 && (uu.setVerticesData(Qu.h.UV3Kind, this.uvs3, Ru), yu && (yield)), this.uvs4 && (uu.setVerticesData(Qu.h.UV4Kind, this.uvs4, Ru), yu && (yield)), this.uvs5 && (uu.setVerticesData(Qu.h.UV5Kind, this.uvs5, Ru), yu && (yield)), this.uvs6 && (uu.setVerticesData(Qu.h.UV6Kind, this.uvs6, Ru), yu && (yield)), this.colors) {
            const Eu = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            uu.setVerticesData(Qu.h.ColorKind, this.colors, Ru, Eu), this.hasVertexAlpha && void 0 !== uu.hasVertexAlpha && (uu.hasVertexAlpha = !0), yu && (yield)
          }
          if (this.matricesIndices && (uu.setVerticesData(Qu.h.MatricesIndicesKind, this.matricesIndices, Ru), yu && (yield)), this.matricesWeights && (uu.setVerticesData(Qu.h.MatricesWeightsKind, this.matricesWeights, Ru), yu && (yield)), this.matricesIndicesExtra && (uu.setVerticesData(Qu.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, Ru), yu && (yield)), this.matricesWeightsExtra && (uu.setVerticesData(Qu.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, Ru), yu && (yield)), this.indices ? (uu.setIndices(this.indices, null, Ru), yu && (yield)) : uu.setIndices([], null), uu.mC && this.materialInfos && this.materialInfos.length > 1) {
            const Ru = uu;
            Ru.mC = [];
            for (const uu of this.materialInfos) new Bu.c(uu.materialIndex, uu.verticesStart, uu.verticesCount, uu.indexStart, uu.indexCount, Ru)
          }
          return this
        }
        _update(uu, Ru, yu) {
          return this.positions && uu.updateVerticesData(Qu.h.PositionKind, this.positions, Ru, yu), this.normals && uu.updateVerticesData(Qu.h.NormalKind, this.normals, Ru, yu), this.tangents && uu.updateVerticesData(Qu.h.TangentKind, this.tangents, Ru, yu), this.uvs && uu.updateVerticesData(Qu.h.UVKind, this.uvs, Ru, yu), this.uvs2 && uu.updateVerticesData(Qu.h.UV2Kind, this.uvs2, Ru, yu), this.uvs3 && uu.updateVerticesData(Qu.h.UV3Kind, this.uvs3, Ru, yu), this.uvs4 && uu.updateVerticesData(Qu.h.UV4Kind, this.uvs4, Ru, yu), this.uvs5 && uu.updateVerticesData(Qu.h.UV5Kind, this.uvs5, Ru, yu), this.uvs6 && uu.updateVerticesData(Qu.h.UV6Kind, this.uvs6, Ru, yu), this.colors && uu.updateVerticesData(Qu.h.ColorKind, this.colors, Ru, yu), this.matricesIndices && uu.updateVerticesData(Qu.h.MatricesIndicesKind, this.matricesIndices, Ru, yu), this.matricesWeights && uu.updateVerticesData(Qu.h.MatricesWeightsKind, this.matricesWeights, Ru, yu), this.matricesIndicesExtra && uu.updateVerticesData(Qu.h.MatricesIndicesExtraKind, this.matricesIndicesExtra, Ru, yu), this.matricesWeightsExtra && uu.updateVerticesData(Qu.h.MatricesWeightsExtraKind, this.matricesWeightsExtra, Ru, yu), this.indices && uu.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Qu = Ku.m.MS[0],
            mu = Ku.m.MS[1];
          for (let Ju = yu; Ju < yu + Eu; Ju += 3) Ku.p.FromArrayToRef(uu, Ju, Qu), Ku.p.TransformCoordinatesToRef(Qu, Ru, mu), uu[Ju] = mu.x, uu[Ju + 1] = mu.y, uu[Ju + 2] = mu.z
        }
        static _TransformVector3Normals(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Qu = Ku.m.MS[0],
            mu = Ku.m.MS[1];
          for (let Ju = yu; Ju < yu + Eu; Ju += 3) Ku.p.FromArrayToRef(uu, Ju, Qu), Ku.p.TransformNormalToRef(Qu, Ru, mu), uu[Ju] = mu.x, uu[Ju + 1] = mu.y, uu[Ju + 2] = mu.z
        }
        static _TransformVector4Normals(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Qu = Ku.m.Vector4[0],
            mu = Ku.m.Vector4[1];
          for (let Ju = yu; Ju < yu + Eu; Ju += 4) Ku.r.FromArrayToRef(uu, Ju, Qu), Ku.r.TransformNormalToRef(Qu, Ru, mu), uu[Ju] = mu.x, uu[Ju + 1] = mu.y, uu[Ju + 2] = mu.z, uu[Ju + 3] = mu.w
        }
        static _FlipFaces(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length;
          for (let Eu = Ru; Eu < Ru + yu; Eu += 3) {
            const Ru = uu[Eu + 1];
            uu[Eu + 1] = uu[Eu + 2], uu[Eu + 2] = Ru
          }
        }
        transform(Ru) {
          const yu = Ru.determinant() < 0;
          return this.positions && uu._TransformVector3Coordinates(this.positions, Ru), this.normals && uu._TransformVector3Normals(this.normals, Ru), this.tangents && uu._TransformVector4Normals(this.tangents, Ru), yu && this.indices && uu._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Ru = [];
          for (const yu of this.materialInfos) {
            const Eu = new uu;
            if (this.positions && (Eu.positions = this.positions.slice(3 * yu.verticesStart, 3 * (yu.verticesCount + yu.verticesStart))), this.normals && (Eu.normals = this.normals.slice(3 * yu.verticesStart, 3 * (yu.verticesCount + yu.verticesStart))), this.tangents && (Eu.tangents = this.tangents.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.colors && (Eu.colors = this.colors.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.uvs && (Eu.uvs = this.uvs.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.uvs2 && (Eu.uvs2 = this.uvs2.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.uvs3 && (Eu.uvs3 = this.uvs3.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.uvs4 && (Eu.uvs4 = this.uvs4.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.uvs5 && (Eu.uvs5 = this.uvs5.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.uvs6 && (Eu.uvs6 = this.uvs6.slice(2 * yu.verticesStart, 2 * (yu.verticesCount + yu.verticesStart))), this.matricesIndices && (Eu.matricesIndices = this.matricesIndices.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.matricesIndicesExtra && (Eu.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.matricesWeights && (Eu.matricesWeights = this.matricesWeights.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.matricesWeightsExtra && (Eu.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * yu.verticesStart, 4 * (yu.verticesCount + yu.verticesStart))), this.indices) {
              Eu.indices = [];
              for (let uu = yu.indexStart; uu < yu.indexStart + yu.indexCount; uu++) Eu.indices.push(this.indices[uu] - yu.verticesStart)
            }
            const Ku = new xu;
            Ku.indexStart = 0, Ku.indexCount = Eu.indices ? Eu.indices.length : 0, Ku.materialIndex = yu.materialIndex, Ku.verticesStart = 0, Ku.verticesCount = (Eu.positions ? Eu.positions.length : 0) / 3, Eu.materialInfos = [Ku], Ru.push(Eu)
          }
          return Ru
        }
        merge(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Qu = Array.isArray(uu) ? uu.map((uu => ({
            vertexData: uu
          }))) : [{
            vertexData: uu
          }];
          return (0, Vu.k)(this._mergeCoroutine(void 0, Qu, Ru, !1, yu, Eu, Ku))
        }* _mergeCoroutine(Ru, yu) {
          let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Ku = arguments.length > 3 ? arguments[3] : void 0,
            mu = arguments.length > 4 ? arguments[4] : void 0,
            Ju = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            Nu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let Xu = yu.map((uu => uu.vertexData)),
            Vu = this;
          if (Nu)
            for (const uu of Xu) uu && (uu._validate(), !this.normals && uu.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && uu.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && uu.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && uu.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && uu.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && uu.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && uu.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && uu.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && uu.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && uu.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && uu.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && uu.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && uu.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const uu of Xu)
            if (uu)
              if (Nu) this.normals && !uu.normals && (uu.normals = new Float32Array(uu.positions.length)), this.tangents && !uu.tangents && (uu.tangents = new Float32Array(uu.positions.length / 3 * 4)), this.uvs && !uu.uvs && (uu.uvs = new Float32Array(uu.positions.length / 3 * 2)), this.uvs2 && !uu.uvs2 && (uu.uvs2 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs3 && !uu.uvs3 && (uu.uvs3 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs4 && !uu.uvs4 && (uu.uvs4 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs5 && !uu.uvs5 && (uu.uvs5 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs6 && !uu.uvs6 && (uu.uvs6 = new Float32Array(uu.positions.length / 3 * 2)), this.colors && !uu.colors && (uu.colors = new Float32Array(uu.positions.length / 3 * 4), uu.colors.fill(1)), this.matricesIndices && !uu.matricesIndices && (uu.matricesIndices = new Float32Array(uu.positions.length / 3 * 4)), this.matricesWeights && !uu.matricesWeights && (uu.matricesWeights = new Float32Array(uu.positions.length / 3 * 4)), this.matricesIndicesExtra && !uu.matricesIndicesExtra && (uu.matricesIndicesExtra = new Float32Array(uu.positions.length / 3 * 4)), this.matricesWeightsExtra && !uu.matricesWeightsExtra && (uu.matricesWeightsExtra = new Float32Array(uu.positions.length / 3 * 4));
              else if (uu._validate(), !this.normals !== !uu.normals || !this.tangents !== !uu.tangents || !this.uvs !== !uu.uvs || !this.uvs2 !== !uu.uvs2 || !this.uvs3 !== !uu.uvs3 || !this.uvs4 !== !uu.uvs4 || !this.uvs5 !== !uu.uvs5 || !this.uvs6 !== !uu.uvs6 || !this.colors !== !uu.colors || !this.matricesIndices !== !uu.matricesIndices || !this.matricesWeights !== !uu.matricesWeights || !this.matricesIndicesExtra !== !uu.matricesIndicesExtra || !this.matricesWeightsExtra !== !uu.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (Ju) {
            let uu, Eu = 0,
              Ku = 0;
            const Qu = [];
            let mu = null;
            const Ju = [];
            for (const yu of this.splitBasedOnMaterialID()) Ju.push({
              vertexData: yu,
              transform: Ru
            });
            for (const Ru of yu)
              if (Ru.vertexData)
                for (const uu of Ru.vertexData.splitBasedOnMaterialID()) Ju.push({
                  vertexData: uu,
                  transform: Ru.transform
                });
            Ju.sort(((uu, Ru) => {
              const yu = uu.vertexData.materialInfos ? uu.vertexData.materialInfos[0].materialIndex : 0,
                Eu = Ru.vertexData.materialInfos ? Ru.vertexData.materialInfos[0].materialIndex : 0;
              return yu > Eu ? 1 : yu === Eu ? 0 : -1
            }));
            for (const Ru of Ju) {
              const yu = Ru.vertexData;
              if (uu = yu.materialInfos ? yu.materialInfos[0].materialIndex : 0, mu && mu.materialIndex === uu) mu.indexCount += yu.indices.length, mu.verticesCount += yu.positions.length / 3;
              else {
                const Ru = new xu;
                Ru.materialIndex = uu, Ru.indexStart = Eu, Ru.indexCount = yu.indices.length, Ru.verticesStart = Ku, Ru.verticesCount = yu.positions.length / 3, Qu.push(Ru), mu = Ru
              }
              Eu += yu.indices.length, Ku += yu.positions.length / 3
            }
            const Nu = Ju.splice(0, 1)[0];
            Vu = Nu.vertexData, Ru = Nu.transform, Xu = Ju.map((uu => uu.vertexData)), yu = Ju, this.materialInfos = Qu
          }
          const ru = Xu.reduce(((uu, Ru) => uu + (Ru.indices?.length ?? 0)), Vu.indices?.length ?? 0);
          let Bu = mu || Xu.some((uu => uu.indices === Vu.indices)) ? Vu.indices?.slice() : Vu.indices;
          if (ru > 0) {
            let Qu = Bu?.length ?? 0;
            if (Bu || (Bu = new Array(ru)), Bu.length !== ru) {
              if (Array.isArray(Bu)) Bu.length = ru;
              else {
                const uu = Eu || Bu instanceof Uint32Array ? new Uint32Array(ru) : new Uint16Array(ru);
                uu.set(Bu), Bu = uu
              }
              Ru && Ru.determinant() < 0 && uu._FlipFaces(Bu, 0, Qu)
            }
            let mu = Vu.positions ? Vu.positions.length / 3 : 0;
            for (const {
                vertexData: Ru,
                transform: Eu
              }
              of yu)
              if (Ru.indices) {
                for (let uu = 0; uu < Ru.indices.length; uu++) Bu[Qu + uu] = Ru.indices[uu] + mu;
                Eu && Eu.determinant() < 0 && uu._FlipFaces(Bu, Qu, Ru.indices.length), mu += Ru.positions.length / 3, Qu += Ru.indices.length, Ku && (yield)
              }
          }
          return this.indices = Bu, this.positions = uu._MergeElement(Qu.h.PositionKind, Vu.positions, Ru, yu.map((uu => [uu.vertexData.positions, uu.transform]))), Ku && (yield), Vu.normals && (this.normals = uu._MergeElement(Qu.h.NormalKind, Vu.normals, Ru, yu.map((uu => [uu.vertexData.normals, uu.transform]))), Ku && (yield)), Vu.tangents && (this.tangents = uu._MergeElement(Qu.h.TangentKind, Vu.tangents, Ru, yu.map((uu => [uu.vertexData.tangents, uu.transform]))), Ku && (yield)), Vu.uvs && (this.uvs = uu._MergeElement(Qu.h.UVKind, Vu.uvs, Ru, yu.map((uu => [uu.vertexData.uvs, uu.transform]))), Ku && (yield)), Vu.uvs2 && (this.uvs2 = uu._MergeElement(Qu.h.UV2Kind, Vu.uvs2, Ru, yu.map((uu => [uu.vertexData.uvs2, uu.transform]))), Ku && (yield)), Vu.uvs3 && (this.uvs3 = uu._MergeElement(Qu.h.UV3Kind, Vu.uvs3, Ru, yu.map((uu => [uu.vertexData.uvs3, uu.transform]))), Ku && (yield)), Vu.uvs4 && (this.uvs4 = uu._MergeElement(Qu.h.UV4Kind, Vu.uvs4, Ru, yu.map((uu => [uu.vertexData.uvs4, uu.transform]))), Ku && (yield)), Vu.uvs5 && (this.uvs5 = uu._MergeElement(Qu.h.UV5Kind, Vu.uvs5, Ru, yu.map((uu => [uu.vertexData.uvs5, uu.transform]))), Ku && (yield)), Vu.uvs6 && (this.uvs6 = uu._MergeElement(Qu.h.UV6Kind, Vu.uvs6, Ru, yu.map((uu => [uu.vertexData.uvs6, uu.transform]))), Ku && (yield)), Vu.colors && (this.colors = uu._MergeElement(Qu.h.ColorKind, Vu.colors, Ru, yu.map((uu => [uu.vertexData.colors, uu.transform]))), (void 0 !== Vu.hasVertexAlpha || yu.some((uu => void 0 !== uu.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Vu.hasVertexAlpha || yu.some((uu => uu.vertexData.hasVertexAlpha))), Ku && (yield)), Vu.matricesIndices && (this.matricesIndices = uu._MergeElement(Qu.h.MatricesIndicesKind, Vu.matricesIndices, Ru, yu.map((uu => [uu.vertexData.matricesIndices, uu.transform]))), Ku && (yield)), Vu.matricesWeights && (this.matricesWeights = uu._MergeElement(Qu.h.MatricesWeightsKind, Vu.matricesWeights, Ru, yu.map((uu => [uu.vertexData.matricesWeights, uu.transform]))), Ku && (yield)), Vu.matricesIndicesExtra && (this.matricesIndicesExtra = uu._MergeElement(Qu.h.MatricesIndicesExtraKind, Vu.matricesIndicesExtra, Ru, yu.map((uu => [uu.vertexData.matricesIndicesExtra, uu.transform]))), Ku && (yield)), Vu.matricesWeightsExtra && (this.matricesWeightsExtra = uu._MergeElement(Qu.h.MatricesWeightsExtraKind, Vu.matricesWeightsExtra, Ru, yu.map((uu => [uu.vertexData.matricesWeightsExtra, uu.transform])))), this
        }
        static _MergeElement(Ru, yu, Eu, Ku) {
          const mu = Ku.filter((uu => null !== uu[0] && void 0 !== uu[0]));
          if (!yu && 0 == mu.length) return yu;
          if (!yu) return this._MergeElement(Ru, mu[0][0], mu[0][1], mu.slice(1));
          const Ju = mu.reduce(((uu, Ru) => uu + Ru[0].length), yu.length),
            Nu = Ru === Qu.h.PositionKind ? uu._TransformVector3Coordinates : Ru === Qu.h.NormalKind ? uu._TransformVector3Normals : Ru === Qu.h.TangentKind ? uu._TransformVector4Normals : () => {};
          if (yu instanceof Float32Array) {
            const uu = new Float32Array(Ju);
            uu.set(yu), Eu && Nu(uu, Eu, 0, yu.length);
            let Ru = yu.length;
            for (const [yu, Eu] of mu) uu.set(yu, Ru), Eu && Nu(uu, Eu, Ru, yu.length), Ru += yu.length;
            return uu
          } {
            const uu = new Array(Ju);
            for (let Eu = 0; Eu < yu.length; Eu++) uu[Eu] = yu[Eu];
            Eu && Nu(uu, Eu, 0, yu.length);
            let Ru = yu.length;
            for (const [yu, Eu] of mu) {
              for (let Eu = 0; Eu < yu.length; Eu++) uu[Ru + Eu] = yu[Eu];
              Eu && Nu(uu, Eu, Ru, yu.length), Ru += yu.length
            }
            return uu
          }
        }
        _validate() {
          if (!this.positions) throw new ru.f("Positions are required", ru.e.MeshInvalidPositionsError);
          const uu = (uu, Ru) => {
              const yu = (0, Qu.g)(uu);
              if (Ru.length % yu !== 0) throw new Error("The " + uu + "s array count must be a multiple of " + yu);
              return Ru.length / yu
            },
            Ru = uu(Qu.h.PositionKind, this.positions),
            yu = (yu, Eu) => {
              const Ku = uu(yu, Eu);
              if (Ku !== Ru) throw new Error("The " + yu + "s element count (" + Ku + ") does not match the positions count (" + Ru + ")")
            };
          this.normals && yu(Qu.h.NormalKind, this.normals), this.tangents && yu(Qu.h.TangentKind, this.tangents), this.uvs && yu(Qu.h.UVKind, this.uvs), this.uvs2 && yu(Qu.h.UV2Kind, this.uvs2), this.uvs3 && yu(Qu.h.UV3Kind, this.uvs3), this.uvs4 && yu(Qu.h.UV4Kind, this.uvs4), this.uvs5 && yu(Qu.h.UV5Kind, this.uvs5), this.uvs6 && yu(Qu.h.UV6Kind, this.uvs6), this.colors && yu(Qu.h.ColorKind, this.colors), this.matricesIndices && yu(Qu.h.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && yu(Qu.h.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && yu(Qu.h.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && yu(Qu.h.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Ru = this.serialize();
          return uu.Parse(Ru)
        }
        serialize() {
          const uu = {};
          if (this.positions && (uu.positions = Array.from(this.positions)), this.normals && (uu.normals = Array.from(this.normals)), this.tangents && (uu.tangents = Array.from(this.tangents)), this.uvs && (uu.uvs = Array.from(this.uvs)), this.uvs2 && (uu.uvs2 = Array.from(this.uvs2)), this.uvs3 && (uu.uvs3 = Array.from(this.uvs3)), this.uvs4 && (uu.uvs4 = Array.from(this.uvs4)), this.uvs5 && (uu.uvs5 = Array.from(this.uvs5)), this.uvs6 && (uu.uvs6 = Array.from(this.uvs6)), this.colors && (uu.colors = Array.from(this.colors), uu.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (uu.matricesIndices = Array.from(this.matricesIndices), uu.matricesIndicesExpanded = !0), this.matricesWeights && (uu.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (uu.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), uu.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (uu.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), uu.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            uu.materialInfos = [];
            for (const Ru of this.materialInfos) {
              const yu = {
                indexStart: Ru.indexStart,
                indexCount: Ru.indexCount,
                materialIndex: Ru.materialIndex,
                verticesStart: Ru.verticesStart,
                verticesCount: Ru.verticesCount
              };
              uu.materialInfos.push(yu)
            }
          }
          return uu
        }
        static ExtractFromMesh(Ru, yu, Eu) {
          return uu._ExtractFrom(Ru, yu, Eu)
        }
        static ExtractFromGeometry(Ru, yu, Eu) {
          return uu._ExtractFrom(Ru, yu, Eu)
        }
        static _ExtractFrom(Ru, yu, Eu) {
          const Ku = new uu;
          if (Ru.isVerticesDataPresent(Qu.h.PositionKind) && (Ku.positions = Ru.getVerticesData(Qu.h.PositionKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.NormalKind) && (Ku.normals = Ru.getVerticesData(Qu.h.NormalKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.TangentKind) && (Ku.tangents = Ru.getVerticesData(Qu.h.TangentKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UVKind) && (Ku.uvs = Ru.getVerticesData(Qu.h.UVKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UV2Kind) && (Ku.uvs2 = Ru.getVerticesData(Qu.h.UV2Kind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UV3Kind) && (Ku.uvs3 = Ru.getVerticesData(Qu.h.UV3Kind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UV4Kind) && (Ku.uvs4 = Ru.getVerticesData(Qu.h.UV4Kind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UV5Kind) && (Ku.uvs5 = Ru.getVerticesData(Qu.h.UV5Kind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.UV6Kind) && (Ku.uvs6 = Ru.getVerticesData(Qu.h.UV6Kind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.ColorKind)) {
            const uu = Ru.geometry || Ru,
              mu = uu.getVertexBuffer(Qu.h.ColorKind),
              Ju = uu.getVerticesData(Qu.h.ColorKind, yu, Eu);
            if (3 === mu.getSize()) {
              const uu = new Float32Array(4 * Ju.length / 3);
              for (let Ru = 0, yu = 0; Ru < Ju.length; Ru += 3, yu += 4) uu[yu] = Ju[Ru], uu[yu + 1] = Ju[Ru + 1], uu[yu + 2] = Ju[Ru + 2], uu[yu + 3] = 1;
              Ku.colors = uu
            } else {
              if (4 !== mu.getSize()) throw new Error(`Unexpected number of color components: ${mu.getSize()}`);
              Ku.colors = Ju
            }
          }
          return Ru.isVerticesDataPresent(Qu.h.MatricesIndicesKind) && (Ku.matricesIndices = Ru.getVerticesData(Qu.h.MatricesIndicesKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.MatricesWeightsKind) && (Ku.matricesWeights = Ru.getVerticesData(Qu.h.MatricesWeightsKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.MatricesIndicesExtraKind) && (Ku.matricesIndicesExtra = Ru.getVerticesData(Qu.h.MatricesIndicesExtraKind, yu, Eu)), Ru.isVerticesDataPresent(Qu.h.MatricesWeightsExtraKind) && (Ku.matricesWeightsExtra = Ru.getVerticesData(Qu.h.MatricesWeightsExtraKind, yu, Eu)), Ku.indices = Ru.DEu(yu, Eu), Ku
        }
        static CreateRibbon(uu) {
          throw (0, mu.k)("ribbonBuilder")
        }
        static CreateBox(uu) {
          throw (0, mu.k)("boxBuilder")
        }
        static CreateTiledBox(uu) {
          throw (0, mu.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(uu) {
          throw (0, mu.k)("tiledPlaneBuilder")
        }
        static CreateSphere(uu) {
          throw (0, mu.k)("sphereBuilder")
        }
        static CreateCylinder(uu) {
          throw (0, mu.k)("cylinderBuilder")
        }
        static CreateTorus(uu) {
          throw (0, mu.k)("torusBuilder")
        }
        static CreateLineSystem(uu) {
          throw (0, mu.k)("linesBuilder")
        }
        static CreateDashedLines(uu) {
          throw (0, mu.k)("linesBuilder")
        }
        static CreateGround(uu) {
          throw (0, mu.k)("groundBuilder")
        }
        static CreateTiledGround(uu) {
          throw (0, mu.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(uu) {
          throw (0, mu.k)("groundBuilder")
        }
        static CreatePlane(uu) {
          throw (0, mu.k)("planeBuilder")
        }
        static CreateDisc(uu) {
          throw (0, mu.k)("discBuilder")
        }
        static CreatePolygon(uu, Ru, yu, Eu, Ku, Qu, Ju) {
          throw (0, mu.k)("polygonBuilder")
        }
        static CreateIcoSphere(uu) {
          throw (0, mu.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(uu) {
          throw (0, mu.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Ku.p.Up();
          throw (0, mu.k)("capsuleBuilder")
        }
        static CreateTorusKnot(uu) {
          throw (0, mu.k)("torusKnotBuilder")
        }
        static ComputeNormals(uu, Ru, yu, Eu) {
          let Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au = !1,
            Du = !1,
            Mu = !1,
            Iu = !1,
            Gu = 1,
            Uu = 0,
            nu = null;
          Eu && (Au = !!Eu.facetNormals, Du = !!Eu.facetPositions, Mu = !!Eu.facetPartitioning, Gu = !0 === Eu.useRightHandedSystem ? -1 : 1, Uu = Eu.ratio || 0, Iu = !!Eu.depthSort, nu = Eu.distanceTo, Iu && void 0 === nu && (nu = Ku.p.Zero()));
          let su = 0,
            tu = 0,
            lu = 0,
            gu = 0;
          for (Mu && Eu && Eu.bbSize && (su = Eu.subDiv.X * Uu / Eu.bbSize.x, tu = Eu.subDiv.Y * Uu / Eu.bbSize.y, lu = Eu.subDiv.Z * Uu / Eu.bbSize.z, gu = Eu.subDiv.max * Eu.subDiv.max, Eu.facetPartitioning.length = 0), Qu = 0; Qu < uu.length; Qu++) yu[Qu] = 0;
          const cu = Ru.length / 3 | 0;
          for (Qu = 0; Qu < cu; Qu++) {
            if (Tu = 3 * Ru[3 * Qu], Wu = Tu + 1, ju = Tu + 2, Hu = 3 * Ru[3 * Qu + 1], du = Hu + 1, bu = Hu + 2, Cu = 3 * Ru[3 * Qu + 2], ku = Cu + 1, eu = Cu + 2, mu = uu[Tu] - uu[Hu], Ju = uu[Wu] - uu[du], Nu = uu[ju] - uu[bu], Xu = uu[Cu] - uu[Hu], Vu = uu[ku] - uu[du], ru = uu[eu] - uu[bu], Bu = Gu * (Ju * ru - Nu * Vu), xu = Gu * (Nu * Xu - mu * ru), Su = Gu * (mu * Vu - Ju * Xu), pu = Math.sqrt(Bu * Bu + xu * xu + Su * Su), pu = 0 === pu ? 1 : pu, Bu /= pu, xu /= pu, Su /= pu, Au && Eu && (Eu.facetNormals[Qu].x = Bu, Eu.facetNormals[Qu].y = xu, Eu.facetNormals[Qu].z = Su), Du && Eu && (Eu.facetPositions[Qu].x = (uu[Tu] + uu[Hu] + uu[Cu]) / 3, Eu.facetPositions[Qu].y = (uu[Wu] + uu[du] + uu[ku]) / 3, Eu.facetPositions[Qu].z = (uu[ju] + uu[bu] + uu[eu]) / 3), Mu && Eu) {
              const Ru = Math.floor((Eu.facetPositions[Qu].x - Eu.bInfo.minimum.x * Uu) * su),
                yu = Math.floor((Eu.facetPositions[Qu].y - Eu.bInfo.minimum.y * Uu) * tu),
                Ku = Math.floor((Eu.facetPositions[Qu].z - Eu.bInfo.minimum.z * Uu) * lu),
                mu = Math.floor((uu[Tu] - Eu.bInfo.minimum.x * Uu) * su),
                Ju = Math.floor((uu[Wu] - Eu.bInfo.minimum.y * Uu) * tu),
                Nu = Math.floor((uu[ju] - Eu.bInfo.minimum.z * Uu) * lu),
                Xu = Math.floor((uu[Hu] - Eu.bInfo.minimum.x * Uu) * su),
                Vu = Math.floor((uu[du] - Eu.bInfo.minimum.y * Uu) * tu),
                ru = Math.floor((uu[bu] - Eu.bInfo.minimum.z * Uu) * lu),
                Bu = Math.floor((uu[Cu] - Eu.bInfo.minimum.x * Uu) * su),
                xu = Math.floor((uu[ku] - Eu.bInfo.minimum.y * Uu) * tu),
                Su = Math.floor((uu[eu] - Eu.bInfo.minimum.z * Uu) * lu),
                pu = mu + Eu.subDiv.max * Ju + gu * Nu,
                Au = Xu + Eu.subDiv.max * Vu + gu * ru,
                Du = Bu + Eu.subDiv.max * xu + gu * Su,
                Mu = Ru + Eu.subDiv.max * yu + gu * Ku;
              Eu.facetPartitioning[Mu] = Eu.facetPartitioning[Mu] ? Eu.facetPartitioning[Mu] : [], Eu.facetPartitioning[pu] = Eu.facetPartitioning[pu] ? Eu.facetPartitioning[pu] : [], Eu.facetPartitioning[Au] = Eu.facetPartitioning[Au] ? Eu.facetPartitioning[Au] : [], Eu.facetPartitioning[Du] = Eu.facetPartitioning[Du] ? Eu.facetPartitioning[Du] : [], Eu.facetPartitioning[pu].push(Qu), Au != pu && Eu.facetPartitioning[Au].push(Qu), Du != Au && Du != pu && Eu.facetPartitioning[Du].push(Qu), Mu != pu && Mu != Au && Mu != Du && Eu.facetPartitioning[Mu].push(Qu)
            }
            if (Iu && Eu && Eu.facetPositions) {
              const uu = Eu.depthSortedFacets[Qu];
              uu.ind = 3 * Qu, uu.sqDistance = Ku.p.DistanceSquared(Eu.facetPositions[Qu], nu)
            }
            yu[Tu] += Bu, yu[Wu] += xu, yu[ju] += Su, yu[Hu] += Bu, yu[du] += xu, yu[bu] += Su, yu[Cu] += Bu, yu[ku] += xu, yu[eu] += Su
          }
          for (Qu = 0; Qu < yu.length / 3; Qu++) Bu = yu[3 * Qu], xu = yu[3 * Qu + 1], Su = yu[3 * Qu + 2], pu = Math.sqrt(Bu * Bu + xu * xu + Su * Su), pu = 0 === pu ? 1 : pu, Bu /= pu, xu /= pu, Su /= pu, yu[3 * Qu] = Bu, yu[3 * Qu + 1] = xu, yu[3 * Qu + 2] = Su
        }
        static _ComputeSides(Ru, yu, Eu, Qu, mu, Ju, Nu) {
          const Xu = Eu.length,
            Vu = Qu.length;
          let ru, Bu;
          switch (Ru = Ru || uu.DEFAULTSIDE) {
            case uu.FRONTSIDE:
              break;
            case uu.BACKSIDE:
              for (ru = 0; ru < Xu; ru += 3) {
                const uu = Eu[ru];
                Eu[ru] = Eu[ru + 2], Eu[ru + 2] = uu
              }
              for (Bu = 0; Bu < Vu; Bu++) Qu[Bu] = -Qu[Bu];
              break;
            case uu.DOUBLESIDE: {
              const uu = yu.length,
                Ru = uu / 3;
              for (let Eu = 0; Eu < uu; Eu++) yu[uu + Eu] = yu[Eu];
              for (ru = 0; ru < Xu; ru += 3) Eu[ru + Xu] = Eu[ru + 2] + Ru, Eu[ru + 1 + Xu] = Eu[ru + 1] + Ru, Eu[ru + 2 + Xu] = Eu[ru] + Ru;
              for (Bu = 0; Bu < Vu; Bu++) Qu[Vu + Bu] = -Qu[Bu];
              const xu = mu.length;
              let Su;
              for (Su = 0; Su < xu; Su++) mu[Su + xu] = mu[Su];
              for (Ju = Ju || new Ku.r(0, 0, 1, 1), Nu = Nu || new Ku.r(0, 0, 1, 1), Su = 0, ru = 0; ru < xu / 2; ru++) mu[Su] = Ju.x + (Ju.z - Ju.x) * mu[Su], mu[Su + 1] = Ju.y + (Ju.w - Ju.y) * mu[Su + 1], mu[Su + xu] = Nu.x + (Nu.z - Nu.x) * mu[Su + xu], mu[Su + xu + 1] = Nu.y + (Nu.w - Nu.y) * mu[Su + xu + 1], Su += 2;
              break
            }
          }
        }
        static Parse(Ru) {
          const yu = new uu,
            Eu = Ru.positions;
          Eu && yu.set(Eu, Qu.h.PositionKind);
          const Ku = Ru.normals;
          Ku && yu.set(Ku, Qu.h.NormalKind);
          const mu = Ru.tangents;
          mu && yu.set(mu, Qu.h.TangentKind);
          const Nu = Ru.uvs;
          Nu && yu.set(Nu, Qu.h.UVKind);
          const Xu = Ru.uvs2;
          Xu && yu.set(Xu, Qu.h.UV2Kind);
          const Vu = Ru.uvs3;
          Vu && yu.set(Vu, Qu.h.UV3Kind);
          const ru = Ru.uvs4;
          ru && yu.set(ru, Qu.h.UV4Kind);
          const Bu = Ru.uvs5;
          Bu && yu.set(Bu, Qu.h.UV5Kind);
          const Su = Ru.uvs6;
          Su && yu.set(Su, Qu.h.UV6Kind);
          const pu = Ru.colors;
          pu && (yu.set(Ju.h.CheckColors4(pu, Eu.length / 3), Qu.h.ColorKind), void 0 !== Ru.hasVertexAlpha && (yu.hasVertexAlpha = Ru.hasVertexAlpha));
          const Tu = Ru.matricesIndices;
          Tu && yu.set(Tu, Qu.h.MatricesIndicesKind);
          const Wu = Ru.matricesWeights;
          Wu && yu.set(Wu, Qu.h.MatricesWeightsKind);
          const ju = Ru.indices;
          ju && (yu.indices = ju);
          const Hu = Ru.materialInfos;
          if (Hu) {
            yu.materialInfos = [];
            for (const uu of Hu) {
              const Ru = new xu;
              Ru.indexCount = uu.indexCount, Ru.indexStart = uu.indexStart, Ru.verticesCount = uu.verticesCount, Ru.verticesStart = uu.verticesStart, Ru.materialIndex = uu.materialIndex, yu.materialInfos.push(Ru)
            }
          }
          return yu
        }
        static ImportVertexData(Ru, yu) {
          const Eu = uu.Parse(Ru);
          yu.setAllVerticesData(Eu, Ru.updatable)
        }
      }, (() => {
        const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [Xu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], yu = [Xu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Su = [Xu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], pu = [Xu.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, Eu.h)(uu, null, Ru, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector3Coordinates" in uu,
            get: uu => uu._TransformVector3Coordinates
          },
          metadata: Ku
        }, null, Tu), (0, Eu.h)(uu, null, yu, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector3Normals" in uu,
            get: uu => uu._TransformVector3Normals
          },
          metadata: Ku
        }, null, Tu), (0, Eu.h)(uu, null, Su, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector4Normals" in uu,
            get: uu => uu._TransformVector4Normals
          },
          metadata: Ku
        }, null, Tu), (0, Eu.h)(uu, null, pu, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: uu => "_FlipFaces" in uu,
            get: uu => uu._FlipFaces
          },
          metadata: Ku
        }, null, Tu), Ku && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ku
        })
      })(), uu.FRONTSIDE = ((0, Eu.l)(uu, Tu), 0), uu.BACKSIDE = 1, uu.DOUBLESIDE = 2, uu.DEFAULTSIDE = 0, uu._UniqueIdGenerator = 0, uu
    })()
  },
  40057: (uu, Ru, yu) => {
    var Eu = yu(36830),
      Ku = yu(38448),
      Qu = yu(39877),
      mu = yu(39984),
      Ju = yu(39706);
    const Nu = "bakedVertexAnimationSettingsInstanced";

    function Xu(uu) {
      const Ru = uu.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Ru instanceof Float32Array || Ru instanceof Uint16Array
    }

    function Vu(uu, Ru, yu, Eu) {
      yu.e_(Number.POSITIVE_INFINITY), Eu.e_(Number.NEGATIVE_INFINITY);
      for (let Ku = 0; Ku < 3 * Ru; Ku += 3) {
        const Ru = uu[Ku],
          Qu = uu[Ku + 1],
          mu = uu[Ku + 2];
        Ru < yu.x && (yu.x = Ru), Qu < yu.y && (yu.y = Qu), mu < yu.z && (yu.z = mu), Ru > Eu.x && (Eu.x = Ru), Qu > Eu.y && (Eu.y = Qu), mu > Eu.z && (Eu.z = mu)
      }
    }

    function ru(uu, Ru, yu) {
      yu && (uu.x -= uu.x * yu.x + yu.y, uu.y -= uu.y * yu.x + yu.y, uu.z -= uu.z * yu.x + yu.y, Ru.x += Ru.x * yu.x + yu.y, Ru.y += Ru.y * yu.x + yu.y, Ru.z += Ru.z * yu.x + yu.y)
    }

    function Bu(uu, Ru, yu, Ku, Qu) {
      const mu = Eu.m.MS[7],
        Ju = Eu.m.MS[8];
      for (let Nu = 0; Nu < 2; ++Nu)
        for (let Xu = 0; Xu < 2; ++Xu)
          for (let Vu = 0; Vu < 2; ++Vu) mu.set(Nu ? Ru.x : uu.x, Xu ? Ru.y : uu.y, Vu ? Ru.z : uu.z), Eu.p.TransformCoordinatesToRef(mu, yu, Ju), Ku.minimizeInPlace(Ju), Qu.maximizeInPlace(Ju)
    }

    function xu(uu, Ru, yu, Ku, Qu) {
      const mu = Eu.m.MS[7];
      for (let Ju = 0; Ju < 3 * Ru; Ju += 3) Eu.p.TransformCoordinatesFromFloatsToRef(uu[Ju], uu[Ju + 1], uu[Ju + 2], yu, mu), Ku.minimizeInPlace(mu), Qu.maximizeInPlace(mu)
    }
    let Su = !1;
    Su || (Su = !0, mu.e.prototype.thinInstanceAdd = function(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.lD().eS().getCaps().instancedArrays) return Ku.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(uu) ? uu.length : 1);
      const yu = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(uu))
        for (let Eu = 0; Eu < uu.length; ++Eu) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, uu[Eu], Eu === uu.length - 1 && Ru);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, uu, Ru);
      return yu
    }, mu.e.prototype.thinInstanceAddSelf = function() {
      let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(Eu.d.IdentityReadOnly, uu)
    }, mu.e.prototype.thinInstanceRegisterAttribute = function(uu, Ru) {
      uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), this.removeVerticesData(uu), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[uu] = Ru, this._userThinInstanceBuffersStorage.sizes[uu] = Ru * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[uu] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[uu]), this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new Ju.h(this.eS(), this._userThinInstanceBuffersStorage.data[uu], uu, !0, !1, Ru, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu])
    }, mu.e.prototype.thinInstanceSetMatrixAt = function(uu, Ru) {
      let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || uu >= this._thinInstanceDataStorage.instancesCount) return !1;
      const Eu = this._thinInstanceDataStorage.matrixData;
      return Ru.copyToArray(Eu, 16 * uu), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[uu] = Ru), yu && (this.W4("matrix"), this.US || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, mu.e.prototype.thinInstanceSetAttributeAt = function(uu, Ru, yu) {
      let Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[uu] || Ru >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(uu, 0), this._userThinInstanceBuffersStorage.data[uu].set(yu, Ru * this._userThinInstanceBuffersStorage.strides[uu]), Eu && this.W4(uu), !0)
    }, Object.defineProperty(mu.e.prototype, "F_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(uu) {
        const Ru = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        uu <= (Ru ? Ru.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = uu)
      },
      enumerable: !0,
      configurable: !0
    }), mu.e.prototype._thinInstanceCreateMatrixBuffer = function(uu, Ru) {
      let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Eu = new Ju.c(this.eS(), Ru, !yu, 16, !1, !0);
      for (let Ku = 0; Ku < 4; Ku++) this.setVerticesBuffer(Eu.createVertexBuffer(uu + Ku, 4 * Ku, 4));
      return Eu
    }, mu.e.prototype.uuu = function(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (yu = yu || 16, "matrix" === uu) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Ru ? Ru.length : 32 * yu, this._thinInstanceDataStorage.matrixData = Ru, this._thinInstanceDataStorage.worldMatrices = null, null !== Ru ? (this._thinInstanceDataStorage.instancesCount = Ru.length / yu, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Ru, Eu), this.US || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.US || this.refreshBoundingInfo());
      else if ("previousMatrix" === uu) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Ru, null !== Ru && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Ru, Eu));
      else if ("splatIndex" === uu && Ru) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Ru.length / yu, this._userThinInstanceBuffersStorage.data[uu] = Ru, this._userThinInstanceBuffersStorage.strides[uu] = yu, this._userThinInstanceBuffersStorage.sizes[uu] = Ru.length;
        const Eu = new Ju.c(this.eS(), Ru, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = Eu;
        for (let Ru = 0; Ru < 4; Ru++) this.setVerticesBuffer(Eu.createVertexBuffer(uu + Ru, 4 * Ru, 4))
      } else uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), null === Ru ? this._userThinInstanceBuffersStorage?.data[uu] && (this.removeVerticesData(uu), delete this._userThinInstanceBuffersStorage.data[uu], delete this._userThinInstanceBuffersStorage.strides[uu], delete this._userThinInstanceBuffersStorage.sizes[uu], delete this._userThinInstanceBuffersStorage.vertexBuffers[uu]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[uu] = Ru, this._userThinInstanceBuffersStorage.strides[uu] = yu, this._userThinInstanceBuffersStorage.sizes[uu] = Ru.length, this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new Ju.h(this.eS(), Ru, uu, !Eu, !1, yu, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
    }, mu.e.prototype.W4 = function(uu) {
      "matrix" === uu ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === uu ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === uu ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[uu], 0, this._thinInstanceDataStorage.instancesCount) : (uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[uu] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[uu].isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._userThinInstanceBuffersStorage.vertexBuffers[uu].updateDirectly(this._userThinInstanceBuffersStorage.data[uu], 0)))
    }, mu.e.prototype.thinInstancePartialBufferUpdate = function(uu, Ru, yu) {
      if ("matrix" === uu) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Ru ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * yu * Float32Array.BYTES_PER_ELEMENT, 16 * Ru), 16 * yu) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Ru, yu));
      else if (uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[uu]) {
        const Eu = this._userThinInstanceBuffersStorage.vertexBuffers[uu];
        if ("number" === typeof Ru) {
          const Eu = new Float32Array(this._userThinInstanceBuffersStorage.data[uu].buffer, this._userThinInstanceBuffersStorage.data[uu].byteOffset + yu * this._userThinInstanceBuffersStorage.strides[uu] * Float32Array.BYTES_PER_ELEMENT, Ru * this._userThinInstanceBuffersStorage.strides[uu]);
          this._userThinInstanceBuffersStorage.vertexBuffers[uu].updateDirectly(Eu, yu * this._userThinInstanceBuffersStorage.strides[uu])
        } else Eu.updateDirectly(Ru, yu)
      }
    }, mu.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const uu = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Ru = 0; Ru < this._thinInstanceDataStorage.instancesCount; ++Ru) this._thinInstanceDataStorage.worldMatrices[Ru] = Eu.d.FromArray(uu, 16 * Ru)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, mu.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const mu = this._thinInstanceDataStorage.boundingVectors;
      if (uu || !this.rawBoundingInfo) {
        if (mu.length = 0, Ku && function(uu, Ru, yu) {
            const Ku = uu._userThinInstanceBuffersStorage,
              mu = Ku?.data[Nu],
              Su = Ku?.strides[Nu];
            if (!mu || !Su || Su < 4 || !Xu(uu)) return !1;
            const pu = uu._thinInstanceDataStorage.matrixData;
            if (!pu) return !1;
            const Tu = {},
              Wu = Eu.m.Vector4[0],
              ju = Eu.m.MS[1],
              Hu = Eu.m.MS[2],
              du = Eu.m.MS[3],
              bu = Eu.m.MS[4],
              Cu = Eu.m.MS[5],
              ku = Eu.m.MS[6],
              eu = Eu.m.Matrix[2],
              Au = uu.geometry ? uu.geometry.boundingBias : null,
              Du = uu.getTotalVertices();
            ju.e_(Number.POSITIVE_INFINITY), Hu.e_(Number.NEGATIVE_INFINITY), du.e_(Number.POSITIVE_INFINITY), bu.e_(Number.NEGATIVE_INFINITY);
            for (let Qu = 0; Qu < uu._thinInstanceDataStorage.instancesCount; ++Qu) {
              const Ru = Qu * Su;
              Wu.set(mu[Ru], mu[Ru + 1], mu[Ru + 2], mu[Ru + 3]);
              const Ku = uu._getData({
                applyMorph: yu,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Wu,
                updatePositionsArray: !1,
                cache: Tu
              }, null, Ju.h.PositionKind);
              if (!Ku) return !1;
              Vu(Ku, Du, Cu, ku), ru(Cu, ku, Au), ju.minimizeInPlace(Cu), Hu.maximizeInPlace(ku), Eu.d.FromArrayToRef(pu, 16 * Qu, eu), Au ? Bu(Cu, ku, eu, du, bu) : xu(Ku, Du, eu, du, bu)
            }
            return !(!isFinite(ju.x) || !isFinite(du.x)) && (uu.vI().reConstruct(du, bu), uu.rawBoundingInfo = new Qu.c(ju, Hu), function(uu, Ru) {
              uu.length = 0;
              for (let yu = 0; yu < Ru.boundingBox.vectors.length; ++yu) uu.push(Ru.boundingBox.vectors[yu].clone())
            }(Ru, uu.rawBoundingInfo), uu._updateBoundingInfo(), !0)
          }(this, mu, yu)) return;
        Ku && this.bakedVertexAnimationManager?.isEnabled && Xu(this) ? this.refreshBoundingInfo({
          applySkeleton: Ru,
          applyMorph: yu,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Ru, yu);
        const uu = this.vI();
        this.rawBoundingInfo = new Qu.c(uu.minimum, uu.maximum)
      }
      const Su = this.vI(),
        pu = this._thinInstanceDataStorage.matrixData;
      if (0 === mu.length)
        for (let Eu = 0; Eu < Su.boundingBox.vectors.length; ++Eu) mu.push(Su.boundingBox.vectors[Eu].clone());
      Eu.m.MS[0].e_(Number.POSITIVE_INFINITY), Eu.m.MS[1].e_(Number.NEGATIVE_INFINITY);
      for (let Qu = 0; Qu < this._thinInstanceDataStorage.instancesCount; ++Qu) {
        Eu.d.FromArrayToRef(pu, 16 * Qu, Eu.m.Matrix[0]);
        for (let uu = 0; uu < mu.length; ++uu) Eu.p.TransformCoordinatesToRef(mu[uu], Eu.m.Matrix[0], Eu.m.MS[2]), Eu.m.MS[0].minimizeInPlace(Eu.m.MS[2]), Eu.m.MS[1].maximizeInPlace(Eu.m.MS[2])
      }
      Su.reConstruct(Eu.m.MS[0], Eu.m.MS[1]), this._updateBoundingInfo()
    }, mu.e.prototype._thinInstanceRecreateBuffer = function(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === uu ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Ru)) : "previousMatrix" === uu ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Ru)) : (uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[uu]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new Ju.h(this.eS(), this._userThinInstanceBuffersStorage.data[uu], uu, !Ru, !1, this._userThinInstanceBuffersStorage.strides[uu], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
    }, mu.e.prototype._thinInstanceUpdateBufferSize = function(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      uu === Ju.h.ColorKind && (uu = Ju.h.ColorInstanceKind);
      const yu = "matrix" === uu;
      if (!yu && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[uu])) return;
      const Eu = yu ? 16 : this._userThinInstanceBuffersStorage.strides[uu],
        Ku = yu ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[uu];
      let Qu = yu ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[uu];
      const mu = (this._thinInstanceDataStorage.instancesCount + Ru) * Eu;
      let Nu = Ku;
      for (; Nu < mu;) Nu *= 2;
      if (!Qu || Ku != Nu) {
        if (Qu) {
          const uu = new Float32Array(Nu);
          uu.set(Qu, 0), Qu = uu
        } else Qu = new Float32Array(Nu);
        yu ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Qu, !1), this._thinInstanceDataStorage.matrixData = Qu, this._thinInstanceDataStorage.matrixBufferSize = Nu, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Qu, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[uu]?.dispose(), this._userThinInstanceBuffersStorage.data[uu] = Qu, this._userThinInstanceBuffersStorage.sizes[uu] = Nu, this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new Ju.h(this.eS(), Qu, uu, !0, !1, Eu, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
      }
    }, mu.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, mu.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40017: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => ju,
      d: () => pu
    });
    var Eu, Ku, Qu, mu, Ju = yu(39560),
      Nu = yu(39566),
      Xu = yu(39582),
      Vu = yu(36858),
      ru = yu(36830),
      Bu = yu(39780),
      xu = yu(36871),
      Su = yu(39430);
    let pu = (() => {
      var uu;
      let Ru, yu, Eu, Ku, Qu, mu, xu, Su, pu, Tu = Bu.e,
        Wu = [],
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Au = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [];
      return uu = class extends Tu {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Ru) {
          this._billboardMode !== Ru && (this._billboardMode = Ru, this._cache.useBillboardPosition = 0 !== (this._billboardMode & uu.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(uu) {
          this._infiniteDistance !== uu && (this._infiniteDistance = uu)
        }
        constructor(Ru) {
          let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Ru, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new ru.p(0, 0, 1), this._up = new ru.p(0, 1, 0), this._right = new ru.p(1, 0, 0), this._position = (0, Ju.l)(this, Wu, ru.p.Zero()), this._rotation = ((0, Ju.l)(this, ju), (0, Ju.l)(this, Hu, ru.p.Zero())), this._rotationQuaternion = ((0, Ju.l)(this, du), (0, Ju.l)(this, bu, null)), this._scaling = ((0, Ju.l)(this, Cu), (0, Ju.l)(this, ku, ru.p.One())), this._transformToBoneReferal = ((0, Ju.l)(this, eu), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, Ju.l)(this, Au, uu.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, Ju.l)(this, Du), (0, Ju.l)(this, Mu, 1)), this._infiniteDistance = ((0, Ju.l)(this, Iu), (0, Ju.l)(this, Gu, !1)), this.ignoreNonUniformScaling = ((0, Ju.l)(this, Uu), (0, Ju.l)(this, nu, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, Ju.l)(this, su), (0, Ju.l)(this, tu, !1)), this._poseMatrix = ((0, Ju.l)(this, lu), null), this._localMatrix = ru.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = ru.p.Zero(), this._absoluteScaling = ru.p.Zero(), this._absoluteRotationQuaternion = ru.f.Identity(), this._pivotMatrix = ru.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Vu.b, this._nonUniformScaling = !1, yu && this.lD().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(uu) {
          this._position = uu, this._markAsDirtyInternal()
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
        set rotation(uu) {
          this._rotation = uu, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get pp() {
          return this._scaling
        }
        set pp(uu) {
          this._scaling = uu, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(uu) {
          this._rotationQuaternion = uu, uu && this._rotation.e_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return ru.p.TransformNormalFromFloatsToRef(0, 0, this.lD().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return ru.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return ru.p.TransformNormalFromFloatsToRef(this.lD().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(uu) {
          return this._poseMatrix ? (this._poseMatrix.Oyu(uu), this) : (this._poseMatrix = uu.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = ru.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Ru = this._cache;
          return this._billboardMode === Ru.billboardMode && this._billboardMode === uu.BILLBOARDMODE_NONE && (!Ru.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const uu = this._cache;
          uu.localMatrixUpdated = !1, uu.billboardMode = -1, uu.infiniteDistance = !1, uu.useBillboardPosition = !1
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
        setPreTransformMatrix(uu) {
          return this.setPivotMatrix(uu, !1)
        }
        setPivotMatrix(uu) {
          let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Oyu(uu), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Ru, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = ru.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Ru = arguments.length > 1 ? arguments[1] : void 0,
            yu = arguments.length > 2 ? arguments[2] : void 0;
          const Eu = this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0);
          Eu && yu && yu(this, Eu);
          for (const Ku of this.getChildTransformNodes(!0)) Ku.instantiateHierarchy(Eu, Ru, yu);
          return Eu
        }
        fD() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return uu ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.e_(0), this._rotationQuaternion = this._rotationQuaternion || ru.f.Identity(), uu.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = uu, this._absolutePosition.muu(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get RJu() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(uu) {
          if (!uu) return this;
          let Ru, yu, Eu;
          if (void 0 === uu.x) {
            if (arguments.length < 3) return this;
            Ru = arguments[0], yu = arguments[1], Eu = arguments[2]
          } else Ru = uu.x, yu = uu.y, Eu = uu.z;
          if (this.parent) {
            const uu = ru.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(uu), ru.p.TransformCoordinatesFromFloatsToRef(Ru, yu, Eu, uu, this.position)
          } else this.position.x = Ru, this.position.y = yu, this.position.z = Eu;
          return this._absolutePosition.Oyu(uu), this
        }
        setPositionWithLocalVector(uu) {
          return this.computeWorldMatrix(), this.position = ru.p.TransformNormal(uu, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const uu = ru.m.Matrix[0];
          return this._localMatrix.invertToRef(uu), ru.p.TransformNormal(this.position, uu)
        }
        locallyTranslate(uu) {
          return this.computeWorldMatrix(!0), this.position = ru.p.TransformCoordinates(uu, this._localMatrix), this
        }
        lookAt(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const mu = uu._LookAtVectorCache,
            Ju = 0 === Qu ? this.position : this.getAbsolutePosition();
          if (Ru.subtractToRef(Ju, mu), this.setDirection(mu, yu, Eu, Ku), 1 === Qu && this.parent)
            if (this.rotationQuaternion) {
              const uu = ru.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(uu);
              const Ru = ru.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Ru), Ru.invert(), uu.multiplyToRef(Ru, uu), this.rotationQuaternion.fromRotationMatrix(uu)
            } else {
              const uu = ru.m.Quaternion[0];
              ru.f.FromEulerVectorToRef(this.rotation, uu);
              const Ru = ru.m.Matrix[0];
              uu.toRotationMatrix(Ru);
              const yu = ru.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(yu), yu.invert(), Ru.multiplyToRef(yu, Ru), uu.fromRotationMatrix(Ru), uu.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Mq(uu) {
          const Ru = ru.p.Zero();
          return this.getDirectionToRef(uu, Ru), Ru
        }
        getDirectionToRef(uu, Ru) {
          return ru.p.TransformNormalToRef(uu, this.getWorldMatrix(), Ru), this
        }
        setDirection(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Ku = -Math.atan2(uu.z, uu.x) + Math.PI / 2,
            Qu = Math.sqrt(uu.x * uu.x + uu.z * uu.z),
            mu = -Math.atan2(uu.y, Qu);
          return this.rotationQuaternion ? ru.f.RotationYawPitchRollToRef(Ku + Ru, mu + yu, Eu, this.rotationQuaternion) : (this.rotation.x = mu + yu, this.rotation.y = Ku + Ru, this.rotation.z = Eu), this
        }
        setPivotPoint(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.lD().getRenderId() && this.computeWorldMatrix(!0);
          const yu = this.getWorldMatrix();
          if (1 == Ru) {
            const Ru = ru.m.Matrix[0];
            yu.invertToRef(Ru), uu = ru.p.TransformCoordinates(uu, Ru)
          }
          return this.setPivotMatrix(ru.d.Translation(-uu.x, -uu.y, -uu.z), !0)
        }
        getPivotPoint() {
          const uu = ru.p.Zero();
          return this.getPivotPointToRef(uu), uu
        }
        getPivotPointToRef(uu) {
          return uu.x = -this._pivotMatrix.m[12], uu.y = -this._pivotMatrix.m[13], uu.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const uu = ru.p.Zero();
          return this.getAbsolutePivotPointToRef(uu), uu
        }
        getAbsolutePivotPointToRef(uu) {
          return this.getPivotPointToRef(uu), ru.p.TransformCoordinatesToRef(uu, this.getWorldMatrix(), uu), this
        }
        Eyu(uu) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Ru of this._children) Ru.Eyu(uu);
          return super.Eyu(uu)
        }
        setParent(Ru) {
          let yu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Ru && !this.parent) return this;
          const Ku = ru.m.Quaternion[0],
            Qu = ru.m.MS[0],
            mu = ru.m.MS[1],
            Ju = ru.m.Matrix[1];
          ru.d.IdentityToRef(Ju);
          const Nu = ru.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let Xu = this.rotationQuaternion;
          return Xu || (Xu = uu._TmpRotation, ru.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Xu)), ru.d.ComposeToRef(this.pp, Xu, this.position, Nu), this.parent && Nu.multiplyToRef(this.parent.computeWorldMatrix(!0), Nu), Ru && (Ru.computeWorldMatrix(!0).invertToRef(Ju), Nu.multiplyToRef(Ju, Nu)), Nu.decompose(mu, Ku, Qu, yu ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Oyu(Ku) : Ku.toEulerAnglesToRef(this.rotation), this.pp.Oyu(mu), this.position.Oyu(Qu), this.parent = Ru, Eu && this.setPivotMatrix(ru.d.Identity()), this
        }
        addChild(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return uu.setParent(this, Ru), this
        }
        removeChild(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return uu.parent !== this || uu.setParent(null, Ru), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(uu) {
          return this._nonUniformScaling !== uu && (this._nonUniformScaling = uu, !0)
        }
        attachToBone(uu, Ru) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Ru, this.parent = uu, uu.getSkeleton().prepare(!0), uu.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = uu ? this._currentParentWhenAttachingToBone : null, this) : (uu && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Ru, yu, Eu) {
          let Ku;
          if (Ru.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.e_(0)), Eu && 0 !== Eu) {
            if (this.parent) {
              const uu = this.parent.getWorldMatrix(),
                Eu = ru.m.Matrix[0];
              uu.invertToRef(Eu), Ru = ru.p.TransformNormal(Ru, Eu), uu.determinant() < 0 && (yu *= -1)
            }
            Ku = ru.f.RotationAxisToRef(Ru, yu, uu._RotationAxisCache), Ku.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Ku = ru.f.RotationAxisToRef(Ru, yu, uu._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Ku, this.rotationQuaternion);
          return this
        }
        rotateAround(uu, Ru, yu) {
          Ru.normalize(), this.rotationQuaternion || (this.rotationQuaternion = ru.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.e_(0));
          const Eu = ru.m.MS[0],
            Ku = ru.m.MS[1],
            Qu = ru.m.MS[2],
            mu = ru.m.Quaternion[0],
            Ju = ru.m.Matrix[0],
            Nu = ru.m.Matrix[1],
            Xu = ru.m.Matrix[2],
            Vu = ru.m.Matrix[3];
          return uu.subtractToRef(this.position, Eu), ru.d.TranslationToRef(Eu.x, Eu.y, Eu.z, Ju), ru.d.TranslationToRef(-Eu.x, -Eu.y, -Eu.z, Nu), ru.d.RotationAxisToRef(Ru, yu, Xu), Nu.multiplyToRef(Xu, Vu), Vu.multiplyToRef(Ju, Vu), Vu.decompose(Ku, mu, Qu), this.position.addInPlace(Qu), mu.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(uu, Ru, yu) {
          const Eu = uu.scale(Ru);
          if (yu && 0 !== yu) this.setAbsolutePosition(this.getAbsolutePosition().add(Eu));
          else {
            const uu = this.getPositionExpressedInLocalSpace().add(Eu);
            this.setPositionWithLocalVector(uu)
          }
          return this
        }
        addRotation(uu, Ru, yu) {
          let Eu;
          this.rotationQuaternion ? Eu = this.rotationQuaternion : (Eu = ru.m.Quaternion[1], ru.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, Eu));
          const Ku = ru.m.Quaternion[0];
          return ru.f.RotationYawPitchRollToRef(Ru, uu, yu, Ku), Eu.multiplyInPlace(Ku), this.rotationQuaternion || Eu.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== uu.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const Eu = this.lD().getRenderId();
          if (!this._isDirty && !Ru && (this._currentRenderId === Eu || this.isSynchronized())) return this._currentRenderId = Eu, this._worldMatrix;
          yu = yu || this.lD().activeCamera, this._updateCache();
          const Ku = this._cache;
          Ku.pivotMatrixUpdated = !1, Ku.billboardMode = this.billboardMode, Ku.infiniteDistance = this.infiniteDistance, Ku.parent = this._parentNode, this._currentRenderId = Eu, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Qu = this._getEffectiveParent(),
            mu = uu._TmpScaling;
          let Ju, Nu = this._position;
          if (this._infiniteDistance && !this.parent && yu) {
            const Ru = yu.getWorldMatrix().m;
            Nu = uu._TmpTranslation, Nu.muu(this._position.x + Ru[12], this._position.y + Ru[13], this._position.z + Ru[14])
          }
          if (mu.muu(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, Ju = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(ru.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.muu(0, 0, 0))
            }
          } else Ju = uu._TmpRotation, ru.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ju);
          if (this._usePivotMatrix) {
            const uu = ru.m.Matrix[1];
            ru.d.ScalingToRef(mu.x, mu.y, mu.z, uu);
            const Ru = ru.m.Matrix[0];
            Ju.toRotationMatrix(Ru), this._pivotMatrix.multiplyToRef(uu, ru.m.Matrix[4]), ru.m.Matrix[4].multiplyToRef(Ru, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(Nu.x, Nu.y, Nu.z)
          } else ru.d.ComposeToRef(mu, Ju, Nu, this._localMatrix);
          if (Qu && Qu.getWorldMatrix) {
            if (Ru && Qu.computeWorldMatrix(Ru), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const uu = this.parent;
                uu.getSkeleton().prepare(), uu.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), ru.m.Matrix[7])
              } else ru.m.Matrix[7].Oyu(Qu.getWorldMatrix());
              const Ru = ru.m.MS[5],
                yu = ru.m.MS[6],
                Eu = ru.m.Quaternion[0];
              ru.m.Matrix[7].decompose(yu, Eu, Ru), ru.d.ScalingToRef(yu.x, yu.y, yu.z, ru.m.Matrix[7]), ru.m.Matrix[7].setTranslation(Ru), uu.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(Eu, Ru), this._localMatrix.setTranslation(Ru)), this._localMatrix.multiplyToRef(ru.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const uu = this.parent;
              uu.getSkeleton().prepare(), this._localMatrix.multiplyToRef(uu.getFinalMatrix(), ru.m.Matrix[6]), ru.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Qu.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Oyu(this._localMatrix);
          if (yu && this.billboardMode)
            if (Ku.useBillboardPosition) {
              const Ru = ru.m.MS[0];
              this._worldMatrix.getTranslationToRef(Ru);
              const Eu = yu.globalPosition;
              this._worldMatrix.invertToRef(ru.m.Matrix[1]);
              const Ku = ru.m.MS[1];
              ru.p.TransformCoordinatesToRef(Eu, ru.m.Matrix[1], Ku), Ku.normalize();
              const Qu = -Math.atan2(Ku.z, Ku.x) + Math.PI / 2,
                mu = Math.sqrt(Ku.x * Ku.x + Ku.z * Ku.z),
                Ju = -Math.atan2(Ku.y, mu);
              if (ru.f.RotationYawPitchRollToRef(Qu, Ju, 0, ru.m.Quaternion[0]), (this.billboardMode & uu.BILLBOARDMODE_ALL) !== uu.BILLBOARDMODE_ALL) {
                const Ru = ru.m.MS[1];
                ru.m.Quaternion[0].toEulerAnglesToRef(Ru), (this.billboardMode & uu.BILLBOARDMODE_X) !== uu.BILLBOARDMODE_X && (Ru.x = 0), (this.billboardMode & uu.BILLBOARDMODE_Y) !== uu.BILLBOARDMODE_Y && (Ru.y = 0), (this.billboardMode & uu.BILLBOARDMODE_Z) !== uu.BILLBOARDMODE_Z && (Ru.z = 0), ru.d.RotationYawPitchRollToRef(Ru.y, Ru.x, Ru.z, ru.m.Matrix[0])
              } else ru.d.FromQuaternionToRef(ru.m.Quaternion[0], ru.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ru.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ru.m.MS[0])
            } else {
              const Ru = ru.m.MS[0];
              this._worldMatrix.getTranslationToRef(Ru), ru.m.Matrix[1].Oyu(yu.getViewMatrix());
              const Eu = this.lD().useRightHandedSystem;
              if (Eu && ru.m.Matrix[1].multiplyToRef(uu._TmpRHRestore, ru.m.Matrix[1]), ru.m.Matrix[1].setTranslationFromFloats(0, 0, 0), ru.m.Matrix[1].invertToRef(ru.m.Matrix[0]), (this.billboardMode & uu.BILLBOARDMODE_ALL) !== uu.BILLBOARDMODE_ALL) {
                ru.m.Matrix[0].decompose(void 0, ru.m.Quaternion[0], void 0);
                const Ru = ru.m.MS[1];
                ru.m.Quaternion[0].toEulerAnglesToRef(Ru), (this.billboardMode & uu.BILLBOARDMODE_X) !== uu.BILLBOARDMODE_X && (Ru.x = 0), (this.billboardMode & uu.BILLBOARDMODE_Y) !== uu.BILLBOARDMODE_Y && (Ru.y = 0), (this.billboardMode & uu.BILLBOARDMODE_Z) !== uu.BILLBOARDMODE_Z && (Ru.z = 0), Eu && (Ru.y += Math.PI), ru.d.RotationYawPitchRollToRef(Ru.y, Ru.x, Ru.z, ru.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ru.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ru.m.MS[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Qu && Qu._nonUniformScaling ? this._updateNonUniformScalingState(Qu._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.muu(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = ru.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), uu) {
            const uu = this.getChildren();
            for (let Ru = 0; Ru < uu.length; ++Ru) {
              const yu = uu[Ru];
              if (yu) {
                yu.computeWorldMatrix();
                const uu = ru.m.Matrix[0];
                yu._localMatrix.multiplyToRef(this._localMatrix, uu);
                const Ru = ru.m.Quaternion[0];
                uu.decompose(yu.pp, Ru, yu.position), yu.rotationQuaternion ? yu.rotationQuaternion.Oyu(Ru) : Ru.toEulerAnglesToRef(yu.rotation)
              }
            }
          }
          this.pp.muu(1, 1, 1), this.position.muu(0, 0, 0), this.rotation.muu(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = ru.f.Identity()), this._worldMatrix = ru.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(uu) {
          return this.onAfterWorldMatrixUpdateObservable.add(uu), this
        }
        unregisterAfterWorldMatrixUpdate(uu) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(uu), this
        }
        getPositionInCameraSpace() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return uu || (uu = this.lD().activeCamera), ru.p.TransformCoordinates(this.getAbsolutePosition(), uu.getViewMatrix())
        }
        getDistanceToCamera() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return uu || (uu = this.lD().activeCamera), this.getAbsolutePosition().subtract(uu.globalPosition).length()
        }
        clone(Ru, yu, Eu) {
          const Ku = Xu.c.Clone((() => new uu(Ru, this.lD())), this);
          if (Ku.name = Ru, Ku.id = Ru, yu && (Ku.parent = yu), !Eu) {
            const uu = this.getDescendants(!0);
            for (let yu = 0; yu < uu.length; yu++) {
              const Eu = uu[yu];
              Eu.clone && Eu.clone(Ru + "." + Eu.name, Ku)
            }
          }
          return Ku
        }
        serialize(uu) {
          const Ru = Xu.c.Serialize(this, uu);
          return Ru.type = this.getClassName(), Ru.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Ru), Ru.localMatrix = this.getPivotMatrix().AEu(), Ru.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Ru.fD = !0), Xu.c.AppendSerializedAnimations(this, Ru), Ru.yT = this.serializeAnimationRanges(), Ru
        }
        getChildTransformNodes(Ru, yu) {
          const Eu = [];
          return this._getDescendants(Eu, Ru, (Ru => (!yu || yu(Ru)) && Ru instanceof uu)), Eu
        }
        dispose(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.lD().stopAnimation(this), this.lD().removeTransformNode(this), this._parentContainer) {
            const uu = this._parentContainer.transformNodes.indexOf(this);
            uu > -1 && this._parentContainer.transformNodes.splice(uu, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), uu) {
            const uu = this.getChildTransformNodes(!0);
            for (const Ru of uu) Ru.parent = null, Ru.computeWorldMatrix(!0)
          }
          super.dispose(uu, Ru)
        }
        normalizeToUnitCube() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            yu = arguments.length > 2 ? arguments[2] : void 0,
            Eu = null,
            Ku = null;
          Ru && (this.rotationQuaternion ? (Ku = this.rotationQuaternion.clone(), this.rotationQuaternion.muu(0, 0, 0, 1)) : this.rotation && (Eu = this.rotation.clone(), this.rotation.muu(0, 0, 0)));
          const Qu = this.getHierarchyBoundingVectors(uu, yu),
            mu = Qu.max.subtract(Qu.min),
            Ju = Math.max(mu.x, mu.y, mu.z);
          if (0 === Ju) return this;
          const Nu = 1 / Ju;
          return this.pp.scaleInPlace(Nu), Ru && (this.rotationQuaternion && Ku ? this.rotationQuaternion.Oyu(Ku) : this.rotation && Eu && this.rotation.Oyu(Eu)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const Xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Nu.G)("position")], yu = [(0, Nu.G)("rotation")], Eu = [(0, Nu.z)("rotationQuaternion")], Ku = [(0, Nu.G)("pp")], Qu = [(0, Nu.K)("billboardMode")], mu = [(0, Nu.K)()], xu = [(0, Nu.K)("infiniteDistance")], Su = [(0, Nu.K)()], pu = [(0, Nu.K)()], (0, Ju.h)(null, null, Ru, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: uu => "_position" in uu,
            get: uu => uu._position,
            set: (uu, Ru) => {
              uu._position = Ru
            }
          },
          metadata: Xu
        }, Wu, ju), (0, Ju.h)(null, null, yu, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_rotation" in uu,
            get: uu => uu._rotation,
            set: (uu, Ru) => {
              uu._rotation = Ru
            }
          },
          metadata: Xu
        }, Hu, du), (0, Ju.h)(null, null, Eu, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: uu => "_rotationQuaternion" in uu,
            get: uu => uu._rotationQuaternion,
            set: (uu, Ru) => {
              uu._rotationQuaternion = Ru
            }
          },
          metadata: Xu
        }, bu, Cu), (0, Ju.h)(null, null, Ku, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "_scaling" in uu,
            get: uu => uu._scaling,
            set: (uu, Ru) => {
              uu._scaling = Ru
            }
          },
          metadata: Xu
        }, ku, eu), (0, Ju.h)(null, null, Qu, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_billboardMode" in uu,
            get: uu => uu._billboardMode,
            set: (uu, Ru) => {
              uu._billboardMode = Ru
            }
          },
          metadata: Xu
        }, Au, Du), (0, Ju.h)(null, null, mu, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: uu => "scalingDeterminant" in uu,
            get: uu => uu.scalingDeterminant,
            set: (uu, Ru) => {
              uu.scalingDeterminant = Ru
            }
          },
          metadata: Xu
        }, Mu, Iu), (0, Ju.h)(null, null, xu, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "_infiniteDistance" in uu,
            get: uu => uu._infiniteDistance,
            set: (uu, Ru) => {
              uu._infiniteDistance = Ru
            }
          },
          metadata: Xu
        }, Gu, Uu), (0, Ju.h)(null, null, Su, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "ignoreNonUniformScaling" in uu,
            get: uu => uu.ignoreNonUniformScaling,
            set: (uu, Ru) => {
              uu.ignoreNonUniformScaling = Ru
            }
          },
          metadata: Xu
        }, nu, su), (0, Ju.h)(null, null, pu, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: uu => "reIntegrateRotationIntoRotationQuaternion" in uu,
            get: uu => uu.reIntegrateRotationIntoRotationQuaternion,
            set: (uu, Ru) => {
              uu.reIntegrateRotationIntoRotationQuaternion = Ru
            }
          },
          metadata: Xu
        }, tu, lu), Xu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Xu
        })
      })(), uu.BILLBOARDMODE_NONE = 0, uu.BILLBOARDMODE_X = 1, uu.BILLBOARDMODE_Y = 2, uu.BILLBOARDMODE_Z = 4, uu.BILLBOARDMODE_ALL = 7, uu.BILLBOARDMODE_USE_POSITION = 128, uu.BillboardUseParentOrientation = !1, uu._TmpRotation = ru.f.Zero(), uu._TmpScaling = ru.p.Zero(), uu._TmpTranslation = ru.p.Zero(), uu._TmpRHRestore = ru.d.Scaling(1, 1, -1), uu._LookAtVectorCache = new ru.p(0, 0, 0), uu._RotationAxisCache = new ru.f, uu
    })();

    function Tu(uu, Ru, yu) {
      const Eu = Xu.c.Parse((() => new pu(uu.name, Ru)), uu, Ru, yu);
      if (uu.localMatrix ? Eu.setPreTransformMatrix(ru.d.FromArray(uu.localMatrix)) : uu.pivotMatrix && Eu.setPivotMatrix(ru.d.FromArray(uu.pivotMatrix)), Eu.tC(uu.isEnabled), Eu._waitingParsedUniqueId = uu.uniqueId, void 0 !== uu.parentId && (Eu._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (Eu._waitingParentInstanceIndex = uu.parentInstanceIndex), uu.fD && (Eu._waitingFreezeWorldMatrix = uu.fD), uu.animations) {
        for (let Ru = 0; Ru < uu.animations.length; Ru++) {
          const yu = uu.animations[Ru],
            Ku = (0, xu.b)("BABYLON.Animation");
          Ku && Eu.animations.push(Ku.Parse(yu))
        }
        Bu.e.ParseAnimationRanges(Eu, uu, Ru)
      }
      return uu.autoAnimate && Ru.beginAnimation(Eu, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), Eu
    }
    let Wu = !1;

    function ju() {
      Wu || (Wu = !0, pu.Parse = Tu)
    }(Eu = pu.prototype).Al ?? (Eu.Al = (0, Su.i)("TransformNode", "Al")), (Ku = pu.prototype).applyImpulse ?? (Ku.applyImpulse = (0, Su.i)("TransformNode", "applyImpulse")), (Qu = pu.prototype).applyAngularImpulse ?? (Qu.applyAngularImpulse = (0, Su.i)("TransformNode", "applyAngularImpulse")), (mu = pu.prototype).applyTorque ?? (mu.applyTorque = (0, Su.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(pu.prototype, "physicsBody") || Object.defineProperty(pu.prototype, "physicsBody", (0, Su.e)("TransformNode", "physicsBody"))
  },
  39987: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      try {
        const Eu = uu.next();
        Eu.done ? Ru(Eu) : Eu.value ? Eu.value.then((() => {
          Eu.value = void 0, Ru(Eu)
        }), yu) : Ru(Eu)
      } catch (Eu) {
        yu(Eu)
      }
    }

    function Ku() {
      let uu, Ru = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (yu, Ku, Qu) => {
        const mu = performance.now();
        void 0 === uu || mu - uu > Ru ? (uu = mu, setTimeout((() => {
          Eu(yu, Ku, Qu)
        }), 0)) : Eu(yu, Ku, Qu)
      }
    }

    function Qu(uu, Ru, yu, Eu, Ku) {
      const Qu = () => {
        let mu;
        const Ju = uu => {
          uu.done ? yu(uu.value) : void 0 === mu ? mu = !0 : Qu()
        };
        do {
          mu = void 0, Ku && Ku.aborted ? Eu(new Error("Aborted")) : Ru(uu, Ju, Eu), void 0 === mu && (mu = !1)
        } while (mu)
      };
      Qu()
    }

    function mu(uu, Ru) {
      let yu;
      return Qu(uu, Eu, (uu => yu = uu), (uu => {
        throw uu
      }), Ru), yu
    }
    async function Ju(uu, Ru, yu) {
      return await new Promise(((Eu, Ku) => {
        Qu(uu, Ru, Eu, Ku, yu)
      }))
    }

    function Nu(uu, Ru) {
      return function() {
        return mu(uu(...arguments), Ru)
      }
    }
    yu.d(Ru, {
      b: () => Ku,
      f: () => Nu,
      g: () => Ju,
      k: () => mu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
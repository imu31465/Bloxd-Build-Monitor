export const id = 255;
export const ids = [255];
export const modules = {
  40462: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu,
      f: () => Mu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40366),
      Xu = ju(37514),
      lu = ju(37494),
      qu = ju(40467),
      fu = ju(39032),
      Cu = ju(37532),
      bu = ju(40153),
      cu = ju(38458),
      Nu = ju(38152),
      Ou = ju(40222),
      Yu = ju(40272);
    let hu = (() => {
      var uu;
      let Eu, ju, Cu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu = qu.c,
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Fu = [],
        Bu = [],
        Lu = [],
        tu = [],
        xu = [],
        Tu = [],
        Hu = [],
        Au = [],
        nu = [],
        yu = [],
        zu = [],
        Ru = [],
        uE = [],
        EE = [],
        jE = [],
        sE = [],
        UE = [];
      return uu = class extends vu {
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
          let Eu, ju;
          if (this.mode === uu.PERSPECTIVE_CAMERA) this.fovMode === uu.FOVMODE_VERTICAL_FIXED ? (ju = 2 * this.minZ * Math.tan(this.fov / 2), Eu = this.wO().getAspectRatio(this) * ju) : (Eu = 2 * this.minZ * Math.tan(this.fov / 2), ju = Eu / this.wO().getAspectRatio(this));
          else {
            const uu = this.wO().getRenderWidth() / 2,
              su = this.wO().getRenderHeight() / 2;
            Eu = (this.orthoRight ?? uu) - (this.orthoLeft ?? -uu), ju = (this.orthoTop ?? su) - (this.orthoBottom ?? -su)
          }
          return Eu * ju
        }
        set orthoLeft(uu) {
          this._orthoLeft = uu;
          for (const Eu of this._rigCameras) Eu.orthoLeft = uu
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(uu) {
          this._orthoRight = uu;
          for (const Eu of this._rigCameras) Eu.orthoRight = uu
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(uu) {
          this._orthoBottom = uu;
          for (const Eu of this._rigCameras) Eu.orthoBottom = uu
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(uu) {
          this._orthoTop = uu;
          for (const Eu of this._rigCameras) Eu.orthoTop = uu
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(Eu / (2 * uu))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(uu) {
          this._baseInertia = uu
        }
        set mode(uu) {
          this._mode = uu;
          for (const Eu of this._rigCameras) Eu.mode = uu
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(Eu, ju, Uu) {
          let qu = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, Ou.c)(), super(Eu, Uu, !1), this.inputs = (0, su.g)(this, Ku), this._position = (0, su.g)(this, Vu, lu.t.Zero()), this._upVector = ((0, su.g)(this, ru), (0, su.g)(this, Qu, lu.t.Up())), this.oblique = ((0, su.g)(this, iu), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, su.g)(this, Wu, .8), this.projectionPlaneTilt = ((0, su.g)(this, Su), (0, su.g)(this, Iu, 0)), this.minZ = ((0, su.g)(this, Fu), (0, su.g)(this, Bu, 1)), this.maxZ = ((0, su.g)(this, Lu), (0, su.g)(this, tu, 1e4)), this._baseInertia = ((0, su.g)(this, xu), .9), this._mode = uu.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new cu.b(0, 0, 1, 1), this.layerMask = (0, su.g)(this, Tu, 268435455), this.fovMode = ((0, su.g)(this, Hu), (0, su.g)(this, Au, uu.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, su.g)(this, nu), (0, su.g)(this, yu, uu.RIG_MODE_NONE)), this.interaxialDistance = ((0, su.g)(this, zu), (0, su.g)(this, Ru, void 0)), this.isStereoscopicSideBySide = ((0, su.g)(this, uE), (0, su.g)(this, EE, void 0)), this.ignoreCameraMaxZ = ((0, su.g)(this, jE), (0, su.g)(this, sE, !1)), this.customRenderTargets = ((0, su.g)(this, UE), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new Xu.d, this.onProjectionMatrixChangedObservable = new Xu.d, this.onAfterCheckInputsObservable = new Xu.d, this.onRestoreStateObservable = new Xu.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new lu.e, this._postProcesses = new Array, this._activeMeshes = new Zu.f(256), this._globalPosition = lu.t.Zero(), this._computedViewMatrix = lu.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = lu.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = lu.i.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.hV().defaultCameraLayerMask, this.hV().addCamera(this), qu && !this.hV().activeCamera && (this.hV().activeCamera = this), this.position = ju, this.renderPassId = this.hV().wO().createRenderPassId(`Camera ${Eu}`)
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
          return "Vh"
        }
        toString(uu) {
          let Eu = "Name: " + this.name;
          if (Eu += ", type: " + this.getClassName(), this.animations)
            for (let ju = 0; ju < this.animations.length; ju++) Eu += ", animation[0]: " + this.animations[ju].toString(uu);
          return Eu
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
            for (const Eu of this._postProcesses)
              if (Eu && !Eu.isReady()) return !1;
          return super.isReady(uu)
        }
        _initCache() {
          super._initCache(), this._cache.position = new lu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new lu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(uu) {
          uu || super._updateCache(), this._cache.position.yJ(this.position), this._cache.upVector.yJ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const Eu = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ju = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === Eu;
          if (!ju) return !1;
          const su = this.wO();
          return this.mode === uu.PERSPECTIVE_CAMERA ? ju = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === su.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ju = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === su.getRenderWidth() && this._cache.renderHeight === su.getRenderHeight(), this.oblique && (ju = ju && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ju
        }
        attachControl(uu, Eu) {}
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
          for (let Eu = 0, ju = this._rigCameras.length; Eu < ju; Eu++) {
            const uu = this._rigCameras[Eu],
              ju = uu._rigPostProcess;
            if (ju) {
              "pass" === ju.getEffectName() && (uu.isIntermediate = 0 === this._postProcesses.length), uu._postProcesses = this._postProcesses.slice(0).concat(ju), ju.markTextureDirty()
            } else uu._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !uu.isReusable() && this._postProcesses.indexOf(uu) > -1 ? (fu.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == Eu || Eu < 0 ? this._postProcesses.push(uu) : null === this._postProcesses[Eu] ? this._postProcesses[Eu] = uu : this._postProcesses.splice(Eu, 0, uu), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.tEu(), this._postProcesses.indexOf(uu))
        }
        detachPostProcess(uu) {
          const Eu = this._postProcesses.indexOf(uu); - 1 !== Eu && (this._postProcesses[Eu] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.tEu(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return lu.e.Identity()
        }
        getViewMatrix(uu) {
          return !uu && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.hV().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(uu) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== uu && (this._projectionMatrix = uu)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(Eu) {
          if (this._doNotComputeProjectionMatrix || !Eu && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ju = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ju, this._refreshFrustumPlanes = !0;
          const su = this.wO(),
            Uu = this.hV(),
            Zu = su.bsu;
          if (this.mode === uu.PERSPECTIVE_CAMERA) {
            let Eu;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = su.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), Eu = Uu.useRightHandedSystem ? lu.e.PerspectiveFovRHToRef : lu.e.PerspectiveFovLHToRef, Eu(this.fov, su.getAspectRatio(this), Zu ? ju : this.minZ, Zu ? this.minZ : ju, this._projectionMatrix, this.fovMode === uu.FOVMODE_VERTICAL_FIXED, su.isNDCHalfZRange, this.projectionPlaneTilt, Zu)
          } else {
            const uu = su.getRenderWidth() / 2,
              Eu = su.getRenderHeight() / 2;
            Uu.useRightHandedSystem ? this.oblique ? lu.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Eu, this.orthoTop ?? Eu, Zu ? ju : this.minZ, Zu ? this.minZ : ju, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, su.isNDCHalfZRange) : lu.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Eu, this.orthoTop ?? Eu, Zu ? ju : this.minZ, Zu ? this.minZ : ju, this._projectionMatrix, su.isNDCHalfZRange) : this.oblique ? lu.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Eu, this.orthoTop ?? Eu, Zu ? ju : this.minZ, Zu ? this.minZ : ju, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, su.isNDCHalfZRange) : lu.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -uu, this.orthoRight ?? uu, this.orthoBottom ?? -Eu, this.orthoTop ?? Eu, Zu ? ju : this.minZ, Zu ? this.minZ : ju, this._projectionMatrix, su.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = su.getRenderWidth(), this._cache.renderHeight = su.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(uu) {
          return (this.radius || (this.target ? lu.t.Distance(this.position, this.target) : this.position.length())) + uu
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? Nu.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Nu.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), Eu && this.rigCameras.length > 0) {
            let Eu = !1;
            for (const ju of this.rigCameras) ju._updateFrustumPlanes(), Eu = Eu || uu.isInFrustum(ju._frustumPlanes);
            return Eu
          }
          return uu.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(uu) {
          return this._updateFrustumPlanes(), uu.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, bu.h)("Ray")
        }
        getForwardRayToRef(uu) {
          throw (0, bu.h)("Ray")
        }
        dispose(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.hV().stopAnimation(this), this.hV().removeCamera(this); this._rigCameras.length > 0;) {
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
              const Eu = this._postProcesses[uu];
              Eu && Eu.dispose(this)
            }
          }
          let su = this.customRenderTargets.length;
          for (; --su >= 0;) this.customRenderTargets[su].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.hV().wO().releaseRenderPassId(this.renderPassId), super.dispose(Eu, ju)
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
        setCameraRigMode(Eu, ju) {
          if (this.cameraRigMode !== Eu) {
            for (; this._rigCameras.length > 0;) {
              const uu = this._rigCameras.pop();
              uu && uu.dispose()
            }
            if (this.cameraRigMode = Eu, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ju.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== uu.RIG_MODE_NONE) {
              const uu = this.createRigCamera(this.name + "_L", 0);
              uu && (uu._isLeftCamera = !0);
              const Eu = this.createRigCamera(this.name + "_R", 1);
              Eu && (Eu._isRightCamera = !0), uu && Eu && (this._rigCameras.push(uu), this._rigCameras.push(Eu))
            }
            this._setRigMode(ju), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(uu) {}
        _getVRProjectionMatrix() {
          return lu.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.wO().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(uu, Eu) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[uu] = Eu, "interaxialDistance" === uu && (this._cameraRigParams.stereoHalfAngle = Eu / .0637 * (Math.PI / 180))
        }
        createRigCamera(uu, Eu) {
          return null
        }
        _updateRigCameras() {
          for (let uu = 0; uu < this._rigCameras.length; uu++) this._rigCameras[uu].minZ = this.minZ, this._rigCameras[uu].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[uu].fov = this.fov, this._rigCameras[uu].upVector.yJ(this.upVector);
          this.cameraRigMode === uu.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const uu = Yu.e.Serialize(this);
          return uu.uniqueId = this.uniqueId, uu.type = this.getClassName(), this.parent && this.parent._serializeAsParent(uu), this.inputs && this.inputs.serialize(uu), Yu.e.AppendSerializedAnimations(this, uu), uu.HY = this.serializeAnimationRanges(), uu.isEnabled = this.isEnabled(), uu
        }
        clone(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const su = Yu.e.Clone(uu.GetConstructorFromName(this.getClassName(), Eu, this.hV(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return su.name = Eu, su.parent = ju, this.onClonedObservable.notifyObservers(su), su
        }
        Gy(uu) {
          const Eu = lu.t.Zero();
          return this.getDirectionToRef(uu, Eu), Eu
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(uu, Eu) {
          lu.t.TransformNormalToRef(uu, this.getWorldMatrix(), Eu)
        }
        static GetConstructorFromName(Eu, ju, su) {
          let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Zu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Xu = qu.c.Construct(Eu, ju, su, {
            interaxial_distance: Uu,
            isStereoscopicSideBySide: Zu
          });
          return Xu || (() => uu._CreateDefaultParsedCamera(ju, su))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let uu = this.hV().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (uu *= -1), uu
        }
      }, (() => {
        const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(vu[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, Uu.A)("position")], ju = [(0, Uu.A)("upVector")], Cu = [(0, Uu.E)()], hu = [(0, Uu.E)()], Du = [(0, Uu.E)()], gu = [(0, Uu.E)()], Mu = [(0, Uu.E)()], eu = [(0, Uu.E)()], Gu = [(0, Uu.E)()], pu = [(0, Uu.E)()], wu = [(0, Uu.E)()], Ju = [(0, Uu.E)()], du = [(0, Uu.E)()], au = [(0, Uu.E)()], Pu = [(0, Uu.E)()], ou = [(0, Uu.E)()], ku = [(0, Uu.E)()], mu = [(0, Uu.E)()], (0, su.e)(uu, null, Cu, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoLeft" in uu,
            get: uu => uu.orthoLeft
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(uu, null, hu, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoRight" in uu,
            get: uu => uu.orthoRight
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(uu, null, Du, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoBottom" in uu,
            get: uu => uu.orthoBottom
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(uu, null, gu, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: uu => "orthoTop" in uu,
            get: uu => uu.orthoTop
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(uu, null, wu, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: uu => "inertia" in uu,
            get: uu => uu.inertia
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(uu, null, Ju, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: uu => "mode" in uu,
            get: uu => uu.mode
          },
          metadata: Zu
        }, null, Ku), (0, su.e)(null, null, Eu, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: uu => "_position" in uu,
            get: uu => uu._position,
            set: (uu, Eu) => {
              uu._position = Eu
            }
          },
          metadata: Zu
        }, Vu, ru), (0, su.e)(null, null, ju, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: uu => "_upVector" in uu,
            get: uu => uu._upVector,
            set: (uu, Eu) => {
              uu._upVector = Eu
            }
          },
          metadata: Zu
        }, Qu, iu), (0, su.e)(null, null, Mu, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: uu => "fov" in uu,
            get: uu => uu.fov,
            set: (uu, Eu) => {
              uu.fov = Eu
            }
          },
          metadata: Zu
        }, Wu, Su), (0, su.e)(null, null, eu, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: uu => "projectionPlaneTilt" in uu,
            get: uu => uu.projectionPlaneTilt,
            set: (uu, Eu) => {
              uu.projectionPlaneTilt = Eu
            }
          },
          metadata: Zu
        }, Iu, Fu), (0, su.e)(null, null, Gu, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "minZ" in uu,
            get: uu => uu.minZ,
            set: (uu, Eu) => {
              uu.minZ = Eu
            }
          },
          metadata: Zu
        }, Bu, Lu), (0, su.e)(null, null, pu, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "maxZ" in uu,
            get: uu => uu.maxZ,
            set: (uu, Eu) => {
              uu.maxZ = Eu
            }
          },
          metadata: Zu
        }, tu, xu), (0, su.e)(null, null, du, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: uu => "layerMask" in uu,
            get: uu => uu.layerMask,
            set: (uu, Eu) => {
              uu.layerMask = Eu
            }
          },
          metadata: Zu
        }, Tu, Hu), (0, su.e)(null, null, au, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "fovMode" in uu,
            get: uu => uu.fovMode,
            set: (uu, Eu) => {
              uu.fovMode = Eu
            }
          },
          metadata: Zu
        }, Au, nu), (0, su.e)(null, null, Pu, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "cameraRigMode" in uu,
            get: uu => uu.cameraRigMode,
            set: (uu, Eu) => {
              uu.cameraRigMode = Eu
            }
          },
          metadata: Zu
        }, yu, zu), (0, su.e)(null, null, ou, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "interaxialDistance" in uu,
            get: uu => uu.interaxialDistance,
            set: (uu, Eu) => {
              uu.interaxialDistance = Eu
            }
          },
          metadata: Zu
        }, Ru, uE), (0, su.e)(null, null, ku, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: uu => "isStereoscopicSideBySide" in uu,
            get: uu => uu.isStereoscopicSideBySide,
            set: (uu, Eu) => {
              uu.isStereoscopicSideBySide = Eu
            }
          },
          metadata: Zu
        }, EE, jE), (0, su.e)(null, null, mu, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "ignoreCameraMaxZ" in uu,
            get: uu => uu.ignoreCameraMaxZ,
            set: (uu, Eu) => {
              uu.ignoreCameraMaxZ = Eu
            }
          },
          metadata: Zu
        }, sE, UE), Zu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zu
        })
      })(), uu._CreateDefaultParsedCamera = (uu, Eu) => {
        throw (0, bu.h)("UniversalCamera")
      }, uu.PERSPECTIVE_CAMERA = 0, uu.ORTHOGRAPHIC_CAMERA = 1, uu.FOVMODE_VERTICAL_FIXED = 0, uu.FOVMODE_HORIZONTAL_FIXED = 1, uu.RIG_MODE_NONE = 0, uu.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, uu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, uu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, uu.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, uu.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, uu.RIG_MODE_VR = 20, uu.RIG_MODE_CUSTOM = 22, uu.ForceAttachControlToAlwaysPreventDefault = !1, uu
    })();

    function Du(uu, Eu) {
      const ju = uu.type,
        su = hu.GetConstructorFromName(ju, uu.name, Eu, uu.interaxial_distance, uu.isStereoscopicSideBySide),
        Uu = Yu.e.Parse(su, uu, Eu);
      if (void 0 !== uu.parentId && (Uu._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (Uu._waitingParentInstanceIndex = uu.parentInstanceIndex), Uu.inputs && (Uu.inputs.parse(uu), Uu._setupInputs()), uu.upVector && (Uu.upVector = lu.t.FromArray(uu.upVector)), Uu.setPosition && (Uu.position.T6(0, 0, 0), Uu.setPosition(lu.t.FromArray(uu.position))), uu.target && Uu.setTarget && Uu.setTarget(lu.t.FromArray(uu.target)), uu.cameraRigMode) {
        const Eu = uu.interaxial_distance ? {
          interaxialDistance: uu.interaxial_distance
        } : {};
        Uu.setCameraRigMode(uu.cameraRigMode, Eu)
      }
      if (uu.animations) {
        for (let Eu = 0; Eu < uu.animations.length; Eu++) {
          const ju = uu.animations[Eu],
            su = (0, Cu.d)("BABYLON.Animation");
          su && Uu.animations.push(su.Parse(ju))
        }
        qu.c.ParseAnimationRanges(Uu, uu, Eu)
      }
      return uu.autoAnimate && Eu.beginAnimation(Uu, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), void 0 !== uu.isEnabled && Uu.Wk(uu.isEnabled), Uu
    }
    let gu = !1;

    function Mu() {
      gu || (gu = !0, hu.Parse = Du)
    }
  },
  40481: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju) {
        this._cameraPosition = Eu, this._behavior = ju, this.activeInput = !1, this.speed = 1, this.hT = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new su.t, this.rotationAccumulatedPixels = new su.t, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = su.t.Zero(), this.rotationDeltaCurrentFrame = su.t.Zero(), this._zoomVelocity = 0, this._panVelocity = new su.t, this.referenceFrameRate = 60, this._rotationVelocity = new su.t, this._prevFrameTimeMs = 0, this._scene = uu
      }
      computeCurrentFrameDeltas() {
        const uu = this._scene.wO().getDeltaTime(),
          Eu = this._getEffectiveDeltaMs(uu);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.k_(0), this.rotationDeltaCurrentFrame.k_(0), this.zoomDeltaCurrentFrame = 0, void(uu > 0 && (this._prevFrameTimeMs = uu));
        this.panDeltaCurrentFrame.k_(0), this.rotationDeltaCurrentFrame.k_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.T6(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * Eu, this.panDeltaCurrentFrame), this._rotationVelocity.T6(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.T6(this._rotationVelocity.x * this.speed * this.rotationXSpeed * Eu, this._rotationVelocity.y * this.speed * this.rotationYSpeed * Eu, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.hT * this._zoomSpeedMultiplier) * Eu, uu > 0 && (this._prevFrameTimeMs = uu), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.k_(0), this.rotationAccumulatedPixels.k_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.k_(0), this.rotationAccumulatedPixels.k_(0)
      }
      resetPanVelocity() {
        this._panVelocity.k_(0), this.panAccumulatedPixels.k_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(uu) {
        const Eu = this._scene.wO().getDeltaTime(),
          ju = this._getEffectiveDeltaMs(Eu),
          su = 1e3 / this.referenceFrameRate;
        return Math.pow(uu, ju / su)
      }
      getFrameIndependentInputScale(uu) {
        const Eu = 1 - uu;
        if (Eu <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(uu)) / Eu
      }
      _getEffectiveDeltaMs(uu) {
        return uu > 0 ? uu : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(uu, Eu, ju) {
        let su = uu;
        const Uu = this._scene.wO().getDeltaTime(),
          Zu = this._getEffectiveDeltaMs(Uu);
        if (0 === Zu) return su;
        const Xu = this.getFrameIndependentDecay(ju);
        if (su *= Xu, 0 !== Eu || this.activeInput) {
          const uu = 1 - ju;
          su += Eu / Zu * (uu > 0 ? (1 - Xu) / uu : 1)
        } else Math.abs(su) < 1e-6 && (su = 0);
        return su
      }
    }
  },
  40490: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor(uu, Eu) {
        this.inputMap = [], this.handlers = uu, this._createDefaultEntries = Eu, this.resetInputMap()
      }
      resolveInteraction(uu, Eu) {
        for (const ju of this.inputMap)
          if (ju.source === uu && this._entryMatches(ju, Eu)) return ju;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(uu, Eu, ju) {
        const su = this.inputMap;
        for (let Uu = 0; Uu < su.length; Uu++) {
          const Zu = su[Uu];
          if (Zu.source === uu && Zu.interaction === Eu && this._entryConditionsMatch(Zu, ju)) return Zu
        }
      }
      getEntries(uu, Eu, ju) {
        const su = [],
          Uu = this.inputMap;
        for (let Zu = 0; Zu < Uu.length; Zu++) {
          const Xu = Uu[Zu];
          Xu.source === uu && Xu.interaction === Eu && this._entryConditionsMatch(Xu, ju) && su.push(Xu)
        }
        return su
      }
      addEntry(uu) {
        const Eu = this._entrySpecificity(uu);
        let ju = this.inputMap.length;
        for (let su = 0; su < this.inputMap.length; su++)
          if (this._entrySpecificity(this.inputMap[su]) < Eu) {
            ju = su;
            break
          } this.inputMap.splice(ju, 0, uu)
      }
      setInteraction(uu, Eu, ju) {
        const su = this.resolveInteraction(uu, Eu);
        return su && this._entryCoversAllConditionsOf(su, Eu) ? (su.interaction = ju, !0) : (this.addEntry({
          source: uu,
          ...Eu ?? {},
          interaction: ju
        }), !0)
      }
      _entryCoversAllConditionsOf(uu, Eu) {
        if (!Eu) return !0;
        const ju = uu;
        for (const su of Object.keys(Eu)) {
          const uu = Eu[su];
          if (void 0 !== uu)
            if ("modifiers" === su) {
              const Eu = ju.modifiers ?? {};
              for (const ju of Object.keys(uu))
                if (void 0 !== uu[ju] && void 0 === Eu[ju]) return !1
            } else if (void 0 === ju[su]) return !1
        }
        return !0
      }
      setInteractions(uu, Eu, ju) {
        let su = 0;
        const Uu = this.inputMap;
        for (let Zu = 0; Zu < Uu.length; Zu++) {
          const Xu = Uu[Zu];
          Xu.source === uu && this._entryMatches(Xu, Eu) && (Xu.interaction = ju, su++)
        }
        return su
      }
      _entryMatches(uu, Eu) {
        switch (uu.source) {
          case "pointer":
            return (void 0 === uu.button || uu.button === Eu?.button) && this._matchModifiers(uu.modifiers, Eu?.modifiers);
          case "wheel":
            return this._matchModifiers(uu.modifiers, Eu?.modifiers);
          case "touch":
            return void 0 === uu.touchCount || uu.touchCount === Eu?.touchCount;
          case "keyboard":
            return (void 0 === uu.key || (Array.isArray(uu.key) ? -1 !== uu.key.indexOf(Eu?.key ?? -1) : uu.key === Eu?.key)) && this._matchModifiers(uu.modifiers, Eu?.modifiers)
        }
      }
      _entryConditionsMatch(uu, Eu) {
        if (!Eu) return !0;
        switch (uu.source) {
          case "pointer":
            return (!("button" in Eu) || uu.button === Eu.button) && (!("modifiers" in Eu) || this._entryModifiersMatch(uu.modifiers, Eu.modifiers));
          case "wheel":
            return !("modifiers" in Eu) || this._entryModifiersMatch(uu.modifiers, Eu.modifiers);
          case "touch":
            return !("touchCount" in Eu) || uu.touchCount === Eu.touchCount;
          case "keyboard":
            if ("key" in Eu) {
              if (void 0 === uu.key) return void 0 === Eu.key;
              if (void 0 === Eu.key || (Array.isArray(uu.key) ? -1 === uu.key.indexOf(Eu.key) : uu.key !== Eu.key)) return !1
            }
            return !("modifiers" in Eu) || this._entryModifiersMatch(uu.modifiers, Eu.modifiers)
        }
      }
      _entrySpecificity(uu) {
        let Eu = 0;
        return "button" in uu && void 0 !== uu.button && Eu++, "key" in uu && void 0 !== uu.key && Eu++, "touchCount" in uu && void 0 !== uu.touchCount && Eu++, "modifiers" in uu && uu.modifiers && Eu++, Eu
      }
      _matchModifiers(uu, Eu) {
        return !uu || (void 0 === uu.ctrl || uu.ctrl === (Eu?.ctrl ?? !1)) && ((void 0 === uu.shift || uu.shift === (Eu?.shift ?? !1)) && (void 0 === uu.alt || uu.alt === (Eu?.alt ?? !1)))
      }
      _entryModifiersMatch(uu, Eu) {
        if (!Eu) return !uu;
        return void 0 !== Eu.ctrl || void 0 !== Eu.shift || void 0 !== Eu.alt ? (void 0 === Eu.ctrl || uu?.ctrl === Eu.ctrl) && ((void 0 === Eu.shift || uu?.shift === Eu.shift) && (void 0 === Eu.alt || uu?.alt === Eu.alt)) : !uu || void 0 === uu.ctrl && void 0 === uu.shift && void 0 === uu.alt
      }
    }
  },
  40459: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Du,
      e: () => Yu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40462),
      Xu = ju(37494),
      lu = ju(37496),
      qu = ju(40475),
      fu = ju(40467),
      Cu = ju(40481),
      bu = ju(40490);
    class cu extends Cu.b {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju), this.input = new bu.e({
          translate: (uu, Eu, ju) => {
            this.panAccumulatedPixels.x += uu, this.panAccumulatedPixels.y += Eu, this.panAccumulatedPixels.z += ju
          },
          rotate: (uu, Eu) => {
            this.rotationAccumulatedPixels.x += uu, this.rotationAccumulatedPixels.y += Eu
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
    const Nu = Xu.e.Zero(),
      Ou = Xu.i.Identity();
    let Yu = (() => {
        var uu;
        let Eu, ju, fu, Cu, bu = Zu.e,
          Yu = [],
          hu = [],
          Du = [],
          gu = [],
          Mu = [],
          eu = [],
          Gu = [],
          pu = [];
        return uu = class extends bu {
          get inertia() {
            return this._targetInertia
          }
          set inertia(uu) {
            this._targetInertia = uu, this.movement && (this.movement.panInertia = uu, this.movement.rotationInertia = uu)
          }
          constructor(uu, Eu, ju) {
            super(uu, Eu, ju, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new Xu.t(0, 0, 0), this.cameraRotation = new Xu.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, su.g)(this, Yu, !1), this.rotation = ((0, su.g)(this, hu), (0, su.g)(this, Du, void 0)), this.rotationQuaternion = (0, su.g)(this, gu), this.speed = (0, su.g)(this, Mu, 2), this.noRotationConstraint = ((0, su.g)(this, eu), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = lu.c, this._rotationEpsilon = lu.c, this.lockedTarget = (0, su.g)(this, Gu, null), this._currentTarget = ((0, su.g)(this, pu), Xu.t.Zero()), this._initialFocalDistance = 1, this._viewMatrix = Xu.e.Zero(), this._cameraTransformMatrix = Xu.e.Zero(), this._cameraRotationMatrix = Xu.e.Zero(), this._transformedReferencePoint = Xu.t.Zero(), this._deferredPositionUpdate = new Xu.t, this._deferredRotationQuaternionUpdate = new Xu.i, this._deferredRotationUpdate = new Xu.t, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = Xu.t.Forward(this.hV().useRightHandedSystem), this.rotation = new Xu.t(0, this.hV().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new cu(this.hV(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(uu) {
            this.getWorldMatrix();
            const Eu = Xu.m.dO[0],
              ju = Xu.m.dO[1];
            return ju.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ju, Eu), Eu.scaleInPlace(uu), this.globalPosition.add(Eu)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.T6(0, 0, 0), this.cameraRotation.T6(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new Xu.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new Xu.i(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(uu) {
            uu || super._updateCache();
            const Eu = this._getLockedTargetPosition();
            Eu ? this._cache.lockedTarget ? this._cache.lockedTarget.yJ(Eu) : this._cache.lockedTarget = Eu.clone() : this._cache.lockedTarget = null, this._cache.rotation.yJ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.yJ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const uu = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(uu) : !uu) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const uu = this.wO();
            return this.speed * Math.sqrt(uu.getDeltaTime() / (100 * uu.getFps()))
          }
          setTarget(uu) {
            this.upVector.normalize(), this._initialFocalDistance = uu.subtract(this.position).length(), this.position.z === uu.z && (this.position.z += lu.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.hV().useRightHandedSystem ? Xu.e.LookAtRHToRef(this.position, uu, Xu.t.UpReadOnly, Nu) : Xu.e.LookAtLHToRef(this.position, uu, Xu.t.UpReadOnly, Nu), Nu.invert();
            const Eu = this.rotationQuaternion || Ou;
            Xu.i.FromRotationMatrixToRef(Nu, Eu), Eu.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(Xu.m.Matrix[0]), Xu.t.TransformNormalToRef(this.cameraDirection, Xu.m.Matrix[0], Xu.m.dO[0]), this._deferredPositionUpdate.addInPlace(Xu.m.dO[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.yJ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.yJ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const uu = this.movement,
              Eu = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            uu.panAccumulatedPixels.addInPlace(this.cameraDirection), uu.rotationAccumulatedPixels.x += this.cameraRotation.x, uu.rotationAccumulatedPixels.y += this.cameraRotation.y, uu.computeCurrentFrameDeltas(), this.cameraDirection.yJ(uu.panDeltaCurrentFrame), this.cameraRotation.set(uu.rotationDeltaCurrentFrame.x, uu.rotationDeltaCurrentFrame.y);
            const ju = this.speed * this._panningEpsilon;
            !Eu && Math.abs(this.cameraDirection.x) < ju && Math.abs(this.cameraDirection.y) < ju && Math.abs(this.cameraDirection.z) < ju && (this.cameraDirection.k_(0), uu.resetPanVelocity());
            const su = this.invertRotation ? -this.inverseRotationSpeed : 1,
              Uu = this._decideIfNeedsToMove(),
              Zu = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.yJ(this.rotation), this._deferredPositionUpdate.yJ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.yJ(this.rotationQuaternion), Uu && this._updatePosition(), Zu) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * su, this._deferredRotationUpdate.y += this.cameraRotation.y * su, !this.noRotationConstraint) {
                const uu = 1.570796;
                this._deferredRotationUpdate.x > uu && (this._deferredRotationUpdate.x = uu), this._deferredRotationUpdate.x < -uu && (this._deferredRotationUpdate.x = -uu)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.yJ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (Xu.i.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.yJ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.k_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : Xu.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return Xu.t.TransformNormalToRef(Xu.t.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), Xu.t.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? qu.b.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (Xu.i.FromEulerVectorToRef(this.rotation, Ou), qu.b.Y.rotateByQuaternionToRef(Ou, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(uu, Eu, ju) {
            if (this.hV().useRightHandedSystem ? Xu.e.LookAtRHToRef(uu, Eu, ju, this._viewMatrix) : Xu.e.LookAtLHToRef(uu, Eu, ju, this._viewMatrix), this.parent) {
              const uu = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(uu, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(Eu, ju) {
            if (this.cameraRigMode !== Zu.e.RIG_MODE_NONE) {
              const ju = new uu(Eu, this.position.clone(), this.hV());
              return ju.isRigCamera = !0, ju.rigParent = this, this.cameraRigMode === Zu.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new Xu.i), ju._cameraRigParams = {}, ju.rotationQuaternion = new Xu.i), ju.mode = this.mode, ju.orthoLeft = this.orthoLeft, ju.orthoRight = this.orthoRight, ju.orthoTop = this.orthoTop, ju.orthoBottom = this.orthoBottom, ju
            }
            return null
          }
          _updateRigCameras() {
            const uu = this._rigCameras[0],
              Eu = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case Zu.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case Zu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case Zu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case Zu.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case Zu.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ju = this.cameraRigMode === Zu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  su = this.cameraRigMode === Zu.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ju, uu), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * su, Eu);
                break
              }
              case Zu.e.RIG_MODE_VR:
                uu.rotationQuaternion && Eu.rotationQuaternion && this.rotationQuaternion ? (uu.rotationQuaternion.yJ(this.rotationQuaternion), Eu.rotationQuaternion.yJ(this.rotationQuaternion)) : (uu.rotation.yJ(this.rotation), Eu.rotation.yJ(this.rotation)), uu.position.yJ(this.position), Eu.position.yJ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(Eu, ju) {
            this.getTarget().subtractToRef(this.position, uu._TargetFocalPoint), uu._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const su = uu._TargetFocalPoint.addInPlace(this.position);
            Xu.e.TranslationToRef(-su.x, -su.y, -su.z, uu._TargetTransformMatrix), uu._TargetTransformMatrix.multiplyToRef(Xu.e.RotationAxis(ju.upVector, Eu), uu._RigCamTransformMatrix), Xu.e.TranslationToRef(su.x, su.y, su.z, uu._TargetTransformMatrix), uu._RigCamTransformMatrix.multiplyToRef(uu._TargetTransformMatrix, uu._RigCamTransformMatrix), Xu.t.TransformCoordinatesToRef(this.position, uu._RigCamTransformMatrix, ju.position), ju.setTarget(su)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(bu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.A)()], fu = [(0, Uu.E)()], Cu = [(0, Uu.u)("lockedTargetId")], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: uu => "updateUpVectorFromRotation" in uu,
              get: uu => uu.updateUpVectorFromRotation,
              set: (uu, Eu) => {
                uu.updateUpVectorFromRotation = Eu
              }
            },
            metadata: Zu
          }, Yu, hu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: uu => "rotation" in uu,
              get: uu => uu.rotation,
              set: (uu, Eu) => {
                uu.rotation = Eu
              }
            },
            metadata: Zu
          }, Du, gu), (0, su.e)(null, null, fu, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: uu => "speed" in uu,
              get: uu => uu.speed,
              set: (uu, Eu) => {
                uu.speed = Eu
              }
            },
            metadata: Zu
          }, Mu, eu), (0, su.e)(null, null, Cu, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: uu => "lockedTarget" in uu,
              get: uu => uu.lockedTarget,
              set: (uu, Eu) => {
                uu.lockedTarget = Eu
              }
            },
            metadata: Zu
          }, Gu, pu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu._RigCamTransformMatrix = new Xu.e, uu._TargetTransformMatrix = new Xu.e, uu._TargetFocalPoint = new Xu.t, uu
      })(),
      hu = !1;

    function Du() {
      hu || (hu = !0, fu.c.AddNodeConstructor("TargetCamera", ((uu, Eu) => () => new Yu(uu, Xu.t.Zero(), Eu))))
    }
  },
  40218: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(40168);
    let Uu = !1;

    function Zu() {
      Uu || (Uu = !0, su.d.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, su.d.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, su.d.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, su.d.prototype.getAspectRatio = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = uu.viewport;
        return this.getRenderWidth(Eu) * ju.width / (this.getRenderHeight(Eu) * ju.height)
      }, su.d.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, su.d.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40290: (uu, Eu, ju) => {
    var su = ju(40168),
      Uu = ju(40294);
    let Zu = !1;
    Zu || (Zu = !0, (0, Uu.v)(), su.d.prototype._loadFileAsync = async function(uu, Eu, ju) {
      return await new Promise(((su, Uu) => {
        this._loadFile(uu, (uu => {
          su(uu)
        }), void 0, Eu, ju, ((uu, Eu) => {
          Uu(Eu)
        }))
      }))
    })
  },
  40287: (uu, Eu, ju) => {
    (0, ju(40222).c)()
  },
  40222: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(40168);
    let Uu = !1;

    function Zu() {
      Uu || (Uu = !0, su.d.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, su.d.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, su.d.prototype.createRenderPassId = function(uu) {
        const Eu = ++su.d._RenderPassIdCounter;
        return this._renderPassNames[Eu] = uu ?? "NONAME", Eu
      }, su.d.prototype.releaseRenderPassId = function(uu) {
        this._renderPassNames[uu] = void 0;
        for (let Eu = 0; Eu < this.scenes.length; ++Eu) {
          const ju = this.scenes[Eu];
          for (let Eu = 0; Eu < ju.meshes.length; ++Eu) {
            const su = ju.meshes[Eu];
            if (su._releaseRenderPassId(uu), su.iG)
              for (let Eu = 0; Eu < su.iG.length; ++Eu) {
                su.iG[Eu]._removeDrawWrapper(uu)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(uu)
      })
    }
  },
  40332: (uu, Eu, ju) => {
    var su = ju(40339),
      Uu = ju(40168);
    let Zu = !1;
    Zu || (Zu = !0, Uu.d.GetCompatibleTextureLoader = su.d)
  },
  40228: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(40118);
    let Uu = !1;

    function Zu() {
      Uu || (Uu = !0, su.ThinEngine.prototype.setAlphaMode = function(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ju] === uu) {
          if (!Eu) {
            const Eu = 0 === uu;
            this.depthCullingState.depthMask !== Eu && (this.depthCullingState.depthMask = Eu)
          }
          return
        }
        const su = 0 === uu;
        this._alphaState.setAlphaBlend(!su, ju), this._alphaState.setAlphaMode(uu, ju), Eu || (this.depthCullingState.depthMask = su), this._alphaMode[ju] = uu
      })
    }
  },
  40238: (uu, Eu, ju) => {
    var su = ju(40108),
      Uu = ju(39032),
      Zu = ju(40118),
      Xu = ju(40243),
      lu = ju(40206);
    class qu extends Xu.b {
      setDepthStencilTexture(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(uu, Eu), !uu) return;
        const ju = this._engine,
          su = this._context,
          Uu = uu._hardwareTexture;
        if (Uu && uu._autoMSAAManagement && this._MSAAFramebuffer) {
          const Eu = ju._currentFramebuffer;
          ju._bindUnboundFramebuffer(this._MSAAFramebuffer), su.framebufferRenderbuffer(su.FRAMEBUFFER, (0, lu.b)(uu.format) ? su.DEPTH_STENCIL_ATTACHMENT : su.DEPTH_ATTACHMENT, su.RENDERBUFFER, Uu.getMSAARenderBuffer()), ju._bindUnboundFramebuffer(Eu)
        }
      }
      constructor(uu, Eu, ju, su, Uu) {
        super(uu, Eu, ju, su), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = Uu
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
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const uu = this._engine,
            Eu = uu._currentFramebuffer,
            ju = this._context;
          uu._bindUnboundFramebuffer(this._framebuffer), ju.framebufferRenderbuffer(ju.FRAMEBUFFER, ju.DEPTH_STENCIL_ATTACHMENT, ju.RENDERBUFFER, null), ju.framebufferRenderbuffer(ju.FRAMEBUFFER, ju.DEPTH_ATTACHMENT, ju.RENDERBUFFER, null), ju.framebufferRenderbuffer(ju.FRAMEBUFFER, ju.STENCIL_ATTACHMENT, ju.RENDERBUFFER, null), uu._bindUnboundFramebuffer(Eu), ju.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(uu, Eu, ju, su, Uu, Zu)
      }
      shareDepth(uu) {
        super.shareDepth(uu);
        const Eu = this._context,
          ju = this._depthStencilBuffer,
          su = uu._MSAAFramebuffer || uu._framebuffer,
          Uu = this._engine;
        uu._depthStencilBuffer && uu._depthStencilBuffer !== ju && Eu.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = ju;
        const Zu = uu._generateStencilBuffer ? Eu.DEPTH_STENCIL_ATTACHMENT : Eu.DEPTH_ATTACHMENT;
        Uu._bindUnboundFramebuffer(su), Eu.framebufferRenderbuffer(Eu.FRAMEBUFFER, Zu, Eu.RENDERBUFFER, ju), Uu._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Uu = uu._hardwareTexture;
        if (!Uu) return;
        const Zu = this._framebuffer,
          Xu = this._engine,
          lu = Xu._currentFramebuffer;
        let qu;
        if (Xu._bindUnboundFramebuffer(Zu), Xu.uY > 1) {
          const Zu = this._context;
          qu = Zu["COLOR_ATTACHMENT" + Eu], uu.is2DArray || uu.is3D ? (ju = ju ?? this.layerIndices?.[Eu] ?? 0, Zu.framebufferTextureLayer(Zu.FRAMEBUFFER, qu, Uu.underlyingResource, su, ju)) : uu.isCube ? (ju = ju ?? this.faceIndices?.[Eu] ?? 0, Zu.framebufferTexture2D(Zu.FRAMEBUFFER, qu, Zu.TEXTURE_CUBE_MAP_POSITIVE_X + ju, Uu.underlyingResource, su)) : Zu.framebufferTexture2D(Zu.FRAMEBUFFER, qu, Zu.TEXTURE_2D, Uu.underlyingResource, su)
        } else {
          const uu = this._context;
          qu = uu["COLOR_ATTACHMENT" + Eu + "_WEBGL"];
          const Zu = void 0 !== ju ? uu.TEXTURE_CUBE_MAP_POSITIVE_X + ju : uu.TEXTURE_2D;
          uu.framebufferTexture2D(uu.FRAMEBUFFER, qu, Zu, Uu.underlyingResource, su)
        }
        if (uu._autoMSAAManagement && this._MSAAFramebuffer) {
          const uu = this._context;
          Xu._bindUnboundFramebuffer(this._MSAAFramebuffer), uu.framebufferRenderbuffer(uu.FRAMEBUFFER, qu, uu.RENDERBUFFER, Uu.getMSAARenderBuffer())
        }
        Xu._bindUnboundFramebuffer(lu)
      }
      setTexture(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(uu, Eu, ju), this._bindTextureRenderTarget(uu, Eu)
      }
      setLayerAndFaceIndices(uu, Eu) {
        if (super.setLayerAndFaceIndices(uu, Eu), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ju = this._attachments?.length ?? this.textures.length;
        for (let su = 0; su < ju; su++) {
          const uu = this.textures[su];
          uu && (uu.is2DArray || uu.is3D ? this._bindTextureRenderTarget(uu, su, this.layerIndices[su]) : uu.isCube ? this._bindTextureRenderTarget(uu, su, this.faceIndices[su]) : this._bindTextureRenderTarget(uu, su))
        }
      }
      setLayerAndFaceIndex() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(uu, Eu, ju), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const su = this.textures[uu];
        su.is2DArray || su.is3D ? this._bindTextureRenderTarget(this.textures[uu], uu, this.layerIndices[uu]) : su.isCube && this._bindTextureRenderTarget(this.textures[uu], uu, this.faceIndices[uu])
      }
      resolveMSAATextures() {
        const uu = this._engine,
          Eu = uu._currentFramebuffer;
        uu._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), uu._bindUnboundFramebuffer(Eu)
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const Eu = this._context;
        uu || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (Eu.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (Eu.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (Eu.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(uu)
      }
    }
    let fu = !1;
    fu || (fu = !0, Zu.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(uu, Eu, ju) {
      const su = new qu(uu, Eu, ju, this, this._gl);
      return this._renderTargetWrapperCache.push(su), su
    }, Zu.ThinEngine.prototype.createRenderTargetTexture = function(uu, Eu) {
      const ju = this._createHardwareRenderTargetWrapper(!1, !1, uu);
      let su, Uu, Zu = !0,
        Xu = !1,
        lu = !1,
        qu = 1;
      void 0 !== Eu && "object" === typeof Eu && (Zu = Eu.generateDepthBuffer ?? !0, Xu = !!Eu.generateStencilBuffer, lu = !!Eu.noColorAttachment, su = Eu.colorAttachment, qu = Eu.samples ?? 1, Uu = Eu.label);
      const fu = su || (lu ? null : this._createInternalTexture(uu, Eu, !0, 5)),
        Cu = uu.width || uu,
        bu = uu.height || uu,
        cu = this._currentFramebuffer,
        Nu = this._gl,
        Ou = Nu.createFramebuffer();
      if (this._bindUnboundFramebuffer(Ou), ju._depthStencilBuffer = this._setupFramebufferDepthAttachments(Xu, Zu, Cu, bu), !fu || fu.is2DArray || fu.is3D || Nu.framebufferTexture2D(Nu.FRAMEBUFFER, Nu.COLOR_ATTACHMENT0, Nu.TEXTURE_2D, fu._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(cu), ju.label = Uu ?? "RenderTargetWrapper", ju._framebuffer = Ou, ju._generateDepthBuffer = Zu, ju._generateStencilBuffer = Xu, ju.setTextures(fu), su) {
        if (ju._samples = su.samples, su.samples > 1) {
          const uu = su._hardwareTexture.getMSAARenderBuffer(0);
          ju._MSAAFramebuffer = Nu.createFramebuffer(), this._bindUnboundFramebuffer(ju._MSAAFramebuffer), Nu.framebufferRenderbuffer(Nu.FRAMEBUFFER, Nu.COLOR_ATTACHMENT0, Nu.RENDERBUFFER, uu), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ju, qu);
      return ju
    }, Zu.ThinEngine.prototype._createDepthStencilTexture = function(uu, Eu, ju) {
      const Zu = this._gl,
        Xu = uu.layers || 0,
        qu = uu.depth || 0;
      let fu = Zu.TEXTURE_2D;
      0 !== Xu ? fu = Zu.TEXTURE_2D_ARRAY : 0 !== qu && (fu = Zu.TEXTURE_3D);
      const Cu = new su.c(this, 12);
      if (Cu.label = Eu.label, !this._caps.depthTextureExtension) return Uu.b.Error("Depth texture is not supported by your browser or hardware."), Cu;
      const bu = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...Eu
      };
      if (this._bindTextureDirectly(fu, Cu, !0), this._setupDepthStencilTexture(Cu, uu, 0 !== bu.comparisonFunction && bu.bilinearFiltering, bu.comparisonFunction, bu.samples), void 0 !== bu.depthTextureFormat) {
        if (15 !== bu.depthTextureFormat && 16 !== bu.depthTextureFormat && 17 !== bu.depthTextureFormat && 13 !== bu.depthTextureFormat && 14 !== bu.depthTextureFormat && 18 !== bu.depthTextureFormat) return Uu.b.Error(`Depth texture ${bu.depthTextureFormat} format is not supported.`), Cu;
        Cu.format = bu.depthTextureFormat
      } else Cu.format = bu.generateStencil ? 13 : 16;
      const cu = (0, lu.b)(Cu.format),
        Nu = this._getWebGLTextureTypeFromDepthTextureFormat(Cu.format),
        Ou = cu ? Zu.DEPTH_STENCIL : Zu.DEPTH_COMPONENT,
        Yu = this._getInternalFormatFromDepthTextureFormat(Cu.format, !0, cu);
      return Cu.is2DArray ? Zu.texImage3D(fu, 0, Yu, Cu.width, Cu.height, Xu, 0, Ou, Nu, null) : Cu.is3D ? Zu.texImage3D(fu, 0, Yu, Cu.width, Cu.height, qu, 0, Ou, Nu, null) : Zu.texImage2D(fu, 0, Yu, Cu.width, Cu.height, 0, Ou, Nu, null), this._bindTextureDirectly(fu, null), this._internalTexturesCache.push(Cu), ju._depthStencilBuffer && (Zu.deleteRenderbuffer(ju._depthStencilBuffer), ju._depthStencilBuffer = null), this._bindUnboundFramebuffer(ju._MSAAFramebuffer ?? ju._framebuffer), ju._generateStencilBuffer = cu, ju._depthStencilTextureWithStencil = cu, ju._depthStencilBuffer = this._setupFramebufferDepthAttachments(ju._generateStencilBuffer, ju._generateDepthBuffer, ju.width, ju.height, ju.samples, Cu.format), this._bindUnboundFramebuffer(null), Cu
    }, Zu.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(uu, Eu) {
      if (this.uY < 2 || !uu) return 1;
      if (uu.samples === Eu) return Eu;
      const ju = this._gl;
      Eu = Math.min(Eu, this.getCaps().maxMSAASamples), uu._depthStencilBuffer && (ju.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = null), uu._MSAAFramebuffer && (ju.deleteFramebuffer(uu._MSAAFramebuffer), uu._MSAAFramebuffer = null);
      const su = uu.texture?._hardwareTexture;
      if (su?.releaseMSAARenderBuffers(), uu.texture && Eu > 1 && "function" === typeof ju.renderbufferStorageMultisample) {
        const Uu = ju.createFramebuffer();
        if (!Uu) throw new Error("Unable to create multi sampled framebuffer");
        uu._MSAAFramebuffer = Uu, this._bindUnboundFramebuffer(uu._MSAAFramebuffer);
        const Zu = this._createRenderBuffer(uu.texture.width, uu.texture.height, Eu, -1, this._getRGBABufferInternalSizedFormat(uu.texture.type, uu.texture.format, uu.texture._useSRGBBuffer), ju.COLOR_ATTACHMENT0, !1);
        if (!Zu) throw new Error("Unable to create multi sampled framebuffer");
        su?.addMSAARenderBuffer(Zu)
      }
      this._bindUnboundFramebuffer(uu._MSAAFramebuffer ?? uu._framebuffer), uu.texture && (uu.texture.samples = Eu), uu._samples = Eu;
      const Uu = uu._depthStencilTexture ? uu._depthStencilTexture.format : void 0;
      return uu._depthStencilBuffer = this._setupFramebufferDepthAttachments(uu._generateStencilBuffer, uu._generateDepthBuffer, uu.width, uu.height, Eu, Uu), this._bindUnboundFramebuffer(null), Eu
    }, Zu.ThinEngine.prototype._setupDepthStencilTexture = function(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const Zu = Eu.width ?? Eu,
        Xu = Eu.height ?? Eu,
        lu = Eu.layers || 0,
        qu = Eu.depth || 0;
      uu.baseWidth = Zu, uu.baseHeight = Xu, uu.width = Zu, uu.height = Xu, uu.is2DArray = lu > 0, uu.depth = lu || qu, uu.isReady = !0, uu.samples = Uu, uu.generateMipMaps = !1, uu.samplingMode = ju ? 2 : 1, uu.type = 0, uu._comparisonFunction = su;
      const fu = this._gl,
        Cu = this._getTextureTarget(uu),
        bu = this._getSamplingParameters(uu.samplingMode, !1);
      fu.texParameteri(Cu, fu.TEXTURE_MAG_FILTER, bu.mag), fu.texParameteri(Cu, fu.TEXTURE_MIN_FILTER, bu.min), fu.texParameteri(Cu, fu.TEXTURE_WRAP_S, fu.CLAMP_TO_EDGE), fu.texParameteri(Cu, fu.TEXTURE_WRAP_T, fu.CLAMP_TO_EDGE), this.uY > 1 && (0 === su ? (fu.texParameteri(Cu, fu.TEXTURE_COMPARE_FUNC, 515), fu.texParameteri(Cu, fu.TEXTURE_COMPARE_MODE, fu.NONE)) : (fu.texParameteri(Cu, fu.TEXTURE_COMPARE_FUNC, su), fu.texParameteri(Cu, fu.TEXTURE_COMPARE_MODE, fu.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40092: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su.c
    });
    var su = ju(40101);
    (0, ju(40228).d)();
    var Uu = ju(40118);
    let Zu = !1;
    ! function() {
      if (Zu) return;
      Zu = !0;
      const uu = new WeakMap,
        Eu = new WeakMap,
        ju = new WeakMap,
        su = new WeakMap;
      Uu.ThinEngine.prototype.getAlphaToCoverage = function() {
        return uu.get(this) ?? !1
      }, Uu.ThinEngine.prototype.setAlphaToCoverage = function(ju) {
        (uu.get(this) !== ju || this._gl && Eu.get(this) !== this._gl) && (uu.set(this, ju), this._gl && (ju ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), Eu.set(this, this._gl)))
      }, Object.defineProperty(Uu.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (su.get(this) !== this._gl && (ju.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), su.set(this, this._gl)), ju.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var Xu = ju(40108),
      lu = ju(39032),
      qu = ju(40192);
    let fu = !1;
    ! function() {
      function uu(uu, Eu, ju, su) {
        let Uu, Zu = 1;
        1 === su ? Uu = new Float32Array(Eu * ju * 4) : 2 === su ? (Uu = new Uint16Array(Eu * ju * 4), Zu = 15360) : Uu = 7 === su ? new Uint32Array(Eu * ju * 4) : new Uint8Array(Eu * ju * 4);
        for (let Xu = 0; Xu < Eu; Xu++)
          for (let su = 0; su < ju; su++) {
            const ju = 3 * (su * Eu + Xu),
              lu = 4 * (su * Eu + Xu);
            Uu[lu + 0] = uu[ju + 0], Uu[lu + 1] = uu[ju + 1], Uu[lu + 2] = uu[ju + 2], Uu[lu + 3] = Zu
          }
        return Uu
      }

      function Eu(uu) {
        return function(Eu, ju, su, Uu, Zu, lu, qu, fu) {
          let Cu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const cu = uu ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            Nu = uu ? 10 : 11,
            Ou = new Xu.c(this, Nu);
          Ou.baseWidth = ju, Ou.baseHeight = su, Ou.baseDepth = Uu, Ou.width = ju, Ou.height = su, Ou.depth = Uu, Ou.format = Zu, Ou.type = bu, Ou.generateMipMaps = lu, Ou.samplingMode = fu, uu ? Ou.is3D = !0 : Ou.is2DArray = !0, this._doNotHandleContextLost || (Ou._bufferView = Eu), uu ? this.updateRawTexture3D(Ou, Eu, Zu, qu, Cu, bu) : this.updateRawTexture2DArray(Ou, Eu, Zu, qu, Cu, bu), this._bindTextureDirectly(cu, Ou, !0);
          const Yu = this._getSamplingParameters(fu, lu);
          return this._gl.texParameteri(cu, this._gl.TEXTURE_MAG_FILTER, Yu.mag), this._gl.texParameteri(cu, this._gl.TEXTURE_MIN_FILTER, Yu.min), lu && this._gl.generateMipmap(cu), this._bindTextureDirectly(cu, null), this._internalTexturesCache.push(Ou), Ou
        }
      }

      function ju(uu) {
        return function(Eu, ju, su, Uu) {
          let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const lu = uu ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            qu = this._getWebGLTextureType(Xu),
            fu = this._getInternalFormat(su),
            Cu = this._getRGBABufferInternalSizedFormat(Xu, su);
          this._bindTextureDirectly(lu, Eu, !0), this._unpackFlipY(void 0 === Uu || !!Uu), this._doNotHandleContextLost || (Eu._bufferView = ju, Eu.format = su, Eu.invertY = Uu, Eu._compression = Zu), Eu.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Zu && ju ? this._gl.compressedTexImage3D(lu, 0, this.getCaps().s3tc[Zu], Eu.width, Eu.height, Eu.depth, 0, ju) : this._gl.texImage3D(lu, 0, Cu, Eu.width, Eu.height, Eu.depth, 0, fu, qu, ju), Eu.generateMipMaps && this._gl.generateMipmap(lu), this._bindTextureDirectly(lu, null), Eu.isReady = !0
        }
      }
      fu || (fu = !0, Uu.ThinEngine.prototype.updateRawTexture = function(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!uu) return;
        const lu = this._getRGBABufferInternalSizedFormat(Zu, ju, Xu),
          qu = this._getInternalFormat(ju),
          fu = this._getWebGLTextureType(Zu);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, uu, !0), this._unpackFlipY(void 0 === su || !!su), this._doNotHandleContextLost || (uu._bufferView = Eu, uu.format = ju, uu.type = Zu, uu.invertY = su, uu._compression = Uu), uu.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), Uu && Eu ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[Uu], uu.width, uu.height, 0, Eu) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, lu, uu.width, uu.height, 0, qu, fu, Eu), uu.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), uu.isReady = !0
      }, Uu.ThinEngine.prototype.createRawTexture = function(uu, Eu, ju, su, Uu, Zu, lu) {
        let qu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Cu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const bu = new Xu.c(this, 3);
        bu.baseWidth = Eu, bu.baseHeight = ju, bu.width = Eu, bu.height = ju, bu.format = su, bu.generateMipMaps = Uu, bu.samplingMode = lu, bu.invertY = Zu, bu._compression = qu, bu.type = fu, bu._useSRGBBuffer = this._getUseSRGBBuffer(Cu, !Uu), this._doNotHandleContextLost || (bu._bufferView = uu), this.updateRawTexture(bu, uu, su, Zu, qu, fu, bu._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, bu, !0);
        const cu = this._getSamplingParameters(lu, Uu);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, cu.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, cu.min), Uu && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(bu), bu
      }, Uu.ThinEngine.prototype.createRawCubeTexture = function(uu, Eu, ju, su, Uu, Zu, fu) {
        let Cu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const bu = this._gl,
          cu = new Xu.c(this, 8);
        cu.isCube = !0, cu.format = ju, cu.type = su, this._doNotHandleContextLost || (cu._bufferViewArray = uu);
        const Nu = this._getWebGLTextureType(su);
        let Ou = this._getInternalFormat(ju);
        Ou === bu.RGB && (Ou = bu.RGBA), Nu !== bu.FLOAT || this._caps.textureFloatLinearFiltering ? Nu !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? Nu !== bu.FLOAT || this._caps.textureFloatRender ? Nu !== bu.HALF_FLOAT || this._caps.colorBufferFloat || (Uu = !1, lu.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (Uu = !1, lu.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (Uu = !1, fu = 1, lu.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (Uu = !1, fu = 1, lu.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const Yu = Eu,
          hu = Yu;
        cu.width = Yu, cu.height = hu, cu.invertY = Zu, cu._compression = Cu;
        if (!this.needPOTTextures || (0, qu.k)(cu.width) && (0, qu.k)(cu.height) || (Uu = !1), uu) this.updateRawCubeTexture(cu, uu, ju, su, Zu, Cu);
        else {
          const uu = this._getRGBABufferInternalSizedFormat(su),
            Eu = 0;
          this._bindTextureDirectly(bu.TEXTURE_CUBE_MAP, cu, !0);
          for (let ju = 0; ju < 6; ju++) Cu ? bu.compressedTexImage2D(bu.TEXTURE_CUBE_MAP_POSITIVE_X + ju, Eu, this.getCaps().s3tc[Cu], cu.width, cu.height, 0, void 0) : bu.texImage2D(bu.TEXTURE_CUBE_MAP_POSITIVE_X + ju, Eu, uu, cu.width, cu.height, 0, Ou, Nu, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, cu, !0), uu && Uu && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const Du = this._getSamplingParameters(fu, Uu);
        return bu.texParameteri(bu.TEXTURE_CUBE_MAP, bu.TEXTURE_MAG_FILTER, Du.mag), bu.texParameteri(bu.TEXTURE_CUBE_MAP, bu.TEXTURE_MIN_FILTER, Du.min), bu.texParameteri(bu.TEXTURE_CUBE_MAP, bu.TEXTURE_WRAP_S, bu.CLAMP_TO_EDGE), bu.texParameteri(bu.TEXTURE_CUBE_MAP, bu.TEXTURE_WRAP_T, bu.CLAMP_TO_EDGE), this._bindTextureDirectly(bu.TEXTURE_CUBE_MAP, null), cu.generateMipMaps = Uu, cu.samplingMode = fu, cu.isReady = !0, cu
      }, Uu.ThinEngine.prototype.updateRawCubeTexture = function(Eu, ju, su, Uu, Zu) {
        let Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        Eu._bufferViewArray = ju, Eu.format = su, Eu.type = Uu, Eu.invertY = Zu, Eu._compression = Xu;
        const fu = this._gl,
          Cu = this._getWebGLTextureType(Uu);
        let bu = this._getInternalFormat(su);
        const cu = this._getRGBABufferInternalSizedFormat(Uu);
        let Nu = !1;
        bu === fu.RGB && (bu = fu.RGBA, Nu = !0), this._bindTextureDirectly(fu.TEXTURE_CUBE_MAP, Eu, !0), this._unpackFlipY(void 0 === Zu || !!Zu), Eu.width % 4 !== 0 && fu.pixelStorei(fu.UNPACK_ALIGNMENT, 1);
        for (let qu = 0; qu < 6; qu++) {
          let su = ju[qu];
          Xu ? fu.compressedTexImage2D(fu.TEXTURE_CUBE_MAP_POSITIVE_X + qu, lu, this.getCaps().s3tc[Xu], Eu.width, Eu.height, 0, su) : (Nu && (su = uu(su, Eu.width, Eu.height, Uu)), fu.texImage2D(fu.TEXTURE_CUBE_MAP_POSITIVE_X + qu, lu, cu, Eu.width, Eu.height, 0, bu, Cu, su))
        }(!this.needPOTTextures || (0, qu.k)(Eu.width) && (0, qu.k)(Eu.height)) && Eu.generateMipMaps && 0 === lu && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), Eu.isReady = !0
      }, Uu.ThinEngine.prototype.createRawCubeTextureFromUrl = function(Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        let fu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          bu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          cu = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Nu = this._gl,
          Ou = this.createRawCubeTexture(null, su, Uu, Zu, !Xu, cu, bu, null);
        ju?.addPendingData(Ou), Ou.url = Eu, Ou.isReady = !1, this._internalTexturesCache.push(Ou);
        const Yu = (uu, Eu) => {
            ju?.removePendingData(Ou), Cu && Cu(uu ? uu.status + " " + uu.statusText : "Failed to parse texture data", Eu)
          },
          hu = async Eu => {
            if (!Ou._hardwareTexture) return;
            const su = lu(Eu);
            if (!su) return;
            const Xu = su instanceof Promise ? await su : su,
              Cu = Ou.width;
            if (qu) {
              const Eu = this._getWebGLTextureType(Zu);
              let ju = this._getInternalFormat(Uu);
              const su = this._getRGBABufferInternalSizedFormat(Zu);
              let lu = !1;
              ju === Nu.RGB && (ju = Nu.RGBA, lu = !0), this._bindTextureDirectly(Nu.TEXTURE_CUBE_MAP, Ou, !0), this._unpackFlipY(!1);
              const fu = qu(Xu);
              for (let Uu = 0; Uu < fu.length; Uu++) {
                const Xu = Cu >> Uu;
                for (let qu = 0; qu < 6; qu++) {
                  let Cu = fu[Uu][qu];
                  lu && (Cu = uu(Cu, Xu, Xu, Zu)), Nu.texImage2D(qu, Uu, su, Xu, Xu, 0, ju, Eu, Cu)
                }
              }
              this._bindTextureDirectly(Nu.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(Ou, Xu, Uu, Zu, cu);
            Ou.isReady = !0, ju?.removePendingData(Ou), Ou.onLoadedObservable.notifyObservers(Ou), Ou.onLoadedObservable.clear(), fu && fu()
          };
        return this._loadFile(Eu, (uu => {
          hu(uu).catch((uu => {
            Yu(void 0, uu)
          }))
        }), void 0, ju?.offlineProvider, !0, Yu), Ou
      }, Uu.ThinEngine.prototype.createRawTexture2DArray = Eu(!1), Uu.ThinEngine.prototype.createRawTexture3D = Eu(!0), Uu.ThinEngine.prototype.updateRawTexture2DArray = ju(!1), Uu.ThinEngine.prototype.updateRawTexture3D = ju(!0))
    }();
    var Cu = ju(40149);
    let bu = !1;
    bu || (bu = !0, Uu.ThinEngine.prototype._readTexturePixelsSync = function(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        fu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const bu = this._gl;
      if (!bu) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const uu = bu.createFramebuffer();
        if (!uu) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = uu
      }
      bu.bindFramebuffer(bu.FRAMEBUFFER, this._dummyFramebuffer), su > -1 && (uu.is2DArray || uu.is3D) ? bu.framebufferTextureLayer(bu.FRAMEBUFFER, bu.COLOR_ATTACHMENT0, uu._hardwareTexture?.underlyingResource, Uu, su) : su > -1 ? bu.framebufferTexture2D(bu.FRAMEBUFFER, bu.COLOR_ATTACHMENT0, bu.TEXTURE_CUBE_MAP_POSITIVE_X + su, uu._hardwareTexture?.underlyingResource, Uu) : bu.framebufferTexture2D(bu.FRAMEBUFFER, bu.COLOR_ATTACHMENT0, bu.TEXTURE_2D, uu._hardwareTexture?.underlyingResource, Uu);
      let cu = void 0 !== uu.type ? this._getWebGLTextureType(uu.type) : bu.UNSIGNED_BYTE;
      return lu ? Zu || (Zu = (0, Cu.o)(uu.type, 4 * Eu * ju)) : cu === bu.UNSIGNED_BYTE ? (Zu || (Zu = new Uint8Array(4 * Eu * ju)), cu = bu.UNSIGNED_BYTE) : (Zu || (Zu = new Float32Array(4 * Eu * ju)), cu = bu.FLOAT), Xu && this.flushFramebuffer(), bu.readPixels(qu, fu, Eu, ju, bu.RGBA, cu, Zu), bu.bindFramebuffer(bu.FRAMEBUFFER, this._currentFramebuffer), Zu
    }, Uu.ThinEngine.prototype._readTexturePixels = function(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        fu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu))
    }), (0, ju(40236).e)();
    let cu = !1;
    cu || (cu = !0, Uu.ThinEngine.prototype._createDepthStencilCubeTexture = function(uu, Eu) {
      const ju = new Xu.c(this, 12);
      if (ju.isCube = !0, 1 === this.uY) return lu.b.Error("Depth cube texture is not supported by WebGL 1."), ju;
      const su = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...Eu
        },
        Uu = this._gl;
      this._bindTextureDirectly(Uu.TEXTURE_CUBE_MAP, ju, !0), this._setupDepthStencilTexture(ju, uu, su.bilinearFiltering, su.comparisonFunction);
      for (let Zu = 0; Zu < 6; Zu++) su.generateStencil ? Uu.texImage2D(Uu.TEXTURE_CUBE_MAP_POSITIVE_X + Zu, 0, Uu.DEPTH24_STENCIL8, uu, uu, 0, Uu.DEPTH_STENCIL, Uu.UNSIGNED_INT_24_8, null) : Uu.texImage2D(Uu.TEXTURE_CUBE_MAP_POSITIVE_X + Zu, 0, Uu.DEPTH_COMPONENT24, uu, uu, 0, Uu.DEPTH_COMPONENT, Uu.UNSIGNED_INT, null);
      return this._bindTextureDirectly(Uu.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ju), ju
    }, Uu.ThinEngine.prototype._setCubeMapTextureParams = function(uu, Eu, ju) {
      const su = this._gl;
      su.texParameteri(su.TEXTURE_CUBE_MAP, su.TEXTURE_MAG_FILTER, su.LINEAR), su.texParameteri(su.TEXTURE_CUBE_MAP, su.TEXTURE_MIN_FILTER, Eu ? su.LINEAR_MIPMAP_LINEAR : su.LINEAR), su.texParameteri(su.TEXTURE_CUBE_MAP, su.TEXTURE_WRAP_S, su.CLAMP_TO_EDGE), su.texParameteri(su.TEXTURE_CUBE_MAP, su.TEXTURE_WRAP_T, su.CLAMP_TO_EDGE), uu.samplingMode = Eu ? 3 : 2, Eu && this.getCaps().textureMaxLevel && void 0 !== ju && ju > 0 && (su.texParameteri(su.TEXTURE_CUBE_MAP, su.TEXTURE_MAX_LEVEL, ju), uu._maxLodLevel = ju), this._bindTextureDirectly(su.TEXTURE_CUBE_MAP, null)
    }, Uu.ThinEngine.prototype.createCubeTexture = function(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Xu = arguments.length > 6 ? arguments[6] : void 0,
        fu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Cu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        bu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        cu = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        Nu = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        Ou = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        Yu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const hu = this._gl;
      return this.createCubeTextureBase(uu, Eu, ju, !!su, Uu, Zu, Xu, fu, Cu, bu, cu, Nu, (uu => this._bindTextureDirectly(hu.TEXTURE_CUBE_MAP, uu, !0)), ((uu, Eu) => {
        const ju = this.needPOTTextures ? (0, qu.g)(Eu[0].width, this._caps.maxCubemapTextureSize) : Eu[0].width,
          Zu = ju,
          fu = [hu.TEXTURE_CUBE_MAP_POSITIVE_X, hu.TEXTURE_CUBE_MAP_POSITIVE_Y, hu.TEXTURE_CUBE_MAP_POSITIVE_Z, hu.TEXTURE_CUBE_MAP_NEGATIVE_X, hu.TEXTURE_CUBE_MAP_NEGATIVE_Y, hu.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(hu.TEXTURE_CUBE_MAP, uu, !0), this._unpackFlipY(!1);
        const Cu = Xu ? this._getInternalFormat(Xu, uu._useSRGBBuffer) : uu._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : hu.RGBA;
        let bu = Xu ? this._getInternalFormat(Xu) : hu.RGBA;
        uu._useSRGBBuffer && 1 === this.uY && (bu = Cu);
        for (let su = 0; su < fu.length; su++)
          if (Eu[su].width !== ju || Eu[su].height !== Zu) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void lu.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ju, this._workingCanvas.height = Zu, this._workingContext.drawImage(Eu[su], 0, 0, Eu[su].width, Eu[su].height, 0, 0, ju, Zu), hu.texImage2D(fu[su], 0, Cu, bu, hu.UNSIGNED_BYTE, this._workingCanvas)
          } else hu.texImage2D(fu[su], 0, Cu, bu, hu.UNSIGNED_BYTE, Eu[su]);
        su || hu.generateMipmap(hu.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(uu, !su), uu.width = ju, uu.height = Zu, uu.isReady = !0, Xu && (uu.format = Xu), uu.onLoadedObservable.notifyObservers(uu), uu.onLoadedObservable.clear(), Uu && Uu()
      }), !!Ou, Yu)
    }, Uu.ThinEngine.prototype.generateMipMapsForCubemap = function(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu.generateMipMaps) {
        const ju = this._gl;
        this._bindTextureDirectly(ju.TEXTURE_CUBE_MAP, uu, !0), ju.generateMipmap(ju.TEXTURE_CUBE_MAP), Eu && this._bindTextureDirectly(ju.TEXTURE_CUBE_MAP, null)
      }
    });
    ju(40238);
    let Nu = !1;
    Nu || (Nu = !0, Uu.ThinEngine.prototype.setDepthStencilTexture = function(uu, Eu, ju, su) {
      void 0 !== uu && (Eu && (this._boundUniforms[uu] = Eu), ju && ju.depthStencilTexture ? this._setTexture(uu, ju, !1, !0, su) : this._setTexture(uu, null, void 0, void 0, su))
    });
    let Ou = !1;
    Ou || (Ou = !0, Uu.ThinEngine.prototype.createRenderTargetCubeTexture = function(uu, Eu) {
      const ju = this._createHardwareRenderTargetWrapper(!1, !0, uu),
        su = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...Eu
        };
      su.generateStencilBuffer = su.generateDepthBuffer && su.generateStencilBuffer, (1 !== su.type || this._caps.textureFloatLinearFiltering) && (2 !== su.type || this._caps.textureHalfFloatLinearFiltering) || (su.samplingMode = 1);
      const Uu = this._gl,
        Zu = new Xu.c(this, 5);
      this._bindTextureDirectly(Uu.TEXTURE_CUBE_MAP, Zu, !0);
      const qu = this._getSamplingParameters(su.samplingMode, su.generateMipMaps);
      1 !== su.type || this._caps.textureFloat || (su.type = 0, lu.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), Uu.texParameteri(Uu.TEXTURE_CUBE_MAP, Uu.TEXTURE_MAG_FILTER, qu.mag), Uu.texParameteri(Uu.TEXTURE_CUBE_MAP, Uu.TEXTURE_MIN_FILTER, qu.min), Uu.texParameteri(Uu.TEXTURE_CUBE_MAP, Uu.TEXTURE_WRAP_S, Uu.CLAMP_TO_EDGE), Uu.texParameteri(Uu.TEXTURE_CUBE_MAP, Uu.TEXTURE_WRAP_T, Uu.CLAMP_TO_EDGE);
      for (let Xu = 0; Xu < 6; Xu++) Uu.texImage2D(Uu.TEXTURE_CUBE_MAP_POSITIVE_X + Xu, 0, this._getRGBABufferInternalSizedFormat(su.type, su.format), uu, uu, 0, this._getInternalFormat(su.format), this._getWebGLTextureType(su.type), null);
      const fu = Uu.createFramebuffer();
      return this._bindUnboundFramebuffer(fu), ju._depthStencilBuffer = this._setupFramebufferDepthAttachments(su.generateStencilBuffer, su.generateDepthBuffer, uu, uu), su.generateMipMaps && Uu.generateMipmap(Uu.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Uu.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ju._framebuffer = fu, ju._generateDepthBuffer = su.generateDepthBuffer, ju._generateStencilBuffer = su.generateStencilBuffer, Zu.width = uu, Zu.height = uu, Zu.isReady = !0, Zu.isCube = !0, Zu.samples = 1, Zu.generateMipMaps = su.generateMipMaps, Zu.samplingMode = su.samplingMode, Zu.type = su.type, Zu.format = su.format, this._internalTexturesCache.push(Zu), ju.setTextures(Zu), ju
    });
    var Yu = ju(40245),
      hu = ju(40253);
    let Du = !1;
    Du || (Du = !0, Uu.ThinEngine.prototype.createPrefilteredCubeTexture = function(uu, Eu, su, Uu) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fu = arguments.length > 6 ? arguments[6] : void 0,
        Cu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        bu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        cu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(uu, Eu, null, !1, (async uu => {
        if (!uu) return void(Zu && Zu(null));
        const qu = uu.texture;
        if (bu ? uu.info.sphericalPolynomial && (qu._sphericalPolynomial = uu.info.sphericalPolynomial) : qu._sphericalPolynomial = qu._sphericalPolynomial ?? new Yu.e, qu._source = 9, this.getCaps().textureLOD) return void(Zu && Zu(qu));
        const fu = this._gl,
          Cu = uu.width;
        if (!Cu) return;
        const {
          DDSTools: cu
        } = await ju.e(311).then((() => ju(42032))), Nu = [];
        for (let ju = 0; ju < 3; ju++) {
          const Zu = 1 - ju / 2,
            bu = Uu,
            Ou = Math.log2(Cu) * su + Uu,
            Yu = bu + (Ou - bu) * Zu,
            Du = Math.round(Math.min(Math.max(Yu, 0), Ou)),
            gu = new Xu.c(this, 2);
          if (gu.type = qu.type, gu.format = qu.format, gu.width = Math.pow(2, Math.max(Math.log2(Cu) - Du, 0)), gu.height = gu.width, gu.isCube = !0, gu._cachedWrapU = 0, gu._cachedWrapV = 0, this._bindTextureDirectly(fu.TEXTURE_CUBE_MAP, gu, !0), gu.samplingMode = 2, fu.texParameteri(fu.TEXTURE_CUBE_MAP, fu.TEXTURE_MAG_FILTER, fu.LINEAR), fu.texParameteri(fu.TEXTURE_CUBE_MAP, fu.TEXTURE_MIN_FILTER, fu.LINEAR), fu.texParameteri(fu.TEXTURE_CUBE_MAP, fu.TEXTURE_WRAP_S, fu.CLAMP_TO_EDGE), fu.texParameteri(fu.TEXTURE_CUBE_MAP, fu.TEXTURE_WRAP_T, fu.CLAMP_TO_EDGE), uu.isDDS) {
            const Eu = uu.info,
              ju = uu.data;
            this._unpackFlipY(Eu.isCompressed), cu.UploadDDSLevels(this, gu, ju, Eu, !0, 6, Du)
          } else lu.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(fu.TEXTURE_CUBE_MAP, null);
          const Mu = new hu.c(Eu);
          Mu._isCube = !0, Mu._texture = gu, gu.isReady = !0, Nu.push(Mu)
        }
        qu._lodTextureHigh = Nu[2], qu._lodTextureMid = Nu[1], qu._lodTextureLow = Nu[0], Zu && Zu(qu)
      }), qu, fu, Cu, bu, su, Uu, null, void 0, !1, cu)
    });
    var gu = ju(40184);
    let Mu = !1;
    Mu || (Mu = !0, Uu.ThinEngine.prototype.createUniformBuffer = function(uu, Eu) {
      const ju = this._gl.createBuffer();
      if (!ju) throw new Error("Unable to create uniform buffer");
      const su = new gu.e(ju);
      return this.bindUniformBuffer(su), uu instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, uu, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(uu), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), su.references = 1, su
    }, Uu.ThinEngine.prototype.createDynamicUniformBuffer = function(uu, Eu) {
      const ju = this._gl.createBuffer();
      if (!ju) throw new Error("Unable to create dynamic uniform buffer");
      const su = new gu.e(ju);
      return this.bindUniformBuffer(su), uu instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, uu, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(uu), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), su.references = 1, su
    }, Uu.ThinEngine.prototype.updateUniformBuffer = function(uu, Eu, ju, su) {
      this.bindUniformBuffer(uu), void 0 === ju && (ju = 0), void 0 === su ? Eu instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ju, Eu) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ju, new Float32Array(Eu)) : Eu instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, Eu.subarray(ju, ju + su)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(Eu).subarray(ju, ju + su)), this.bindUniformBuffer(null)
    }, Uu.ThinEngine.prototype.bindUniformBuffer = function(uu) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, uu ? uu.underlyingResource : null)
    }, Uu.ThinEngine.prototype.bindUniformBufferBase = function(uu, Eu, ju) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, Eu, uu ? uu.underlyingResource : null)
    }, Uu.ThinEngine.prototype.bindUniformBlock = function(uu, Eu, ju) {
      const su = uu.program,
        Uu = this._gl.getUniformBlockIndex(su, Eu);
      4294967295 !== Uu && this._gl.uniformBlockBinding(su, Uu, ju)
    });
    var eu = ju(40138),
      Gu = ju(40168);
    let pu = !1;
    pu || (pu = !0, Gu.d.prototype.displayLoadingUI = function() {
      if (!(0, eu.m)()) return;
      const uu = this.loadingScreen;
      uu && uu.displayLoadingUI()
    }, Gu.d.prototype.hideLoadingUI = function() {
      if (!(0, eu.m)()) return;
      const uu = this._loadingScreen;
      uu && uu.hideLoadingUI()
    }, Object.defineProperty(Gu.d.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = Gu.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(uu) {
        this._loadingScreen = uu
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Gu.d.prototype, "loadingUIText", {
      set: function(uu) {
        this.loadingScreen.loadingUIText = uu
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(Gu.d.prototype, "loadingUIBackgroundColor", {
      set: function(uu) {
        this.loadingScreen.loadingUIBackgroundColor = uu
      },
      enumerable: !0,
      configurable: !0
    })), (0, ju(40218).d)();
    let wu = !1;
    wu || (wu = !0, Gu.d.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, Gu.d.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, Gu.d.prototype.setDepthFunction = function(uu) {
      this._depthCullingState.depthFunc = uu
    }, Gu.d.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, Gu.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, Gu.d.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, Gu.d.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, Gu.d.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, Gu.d.prototype.setDepthWrite = function(uu) {
      this._depthCullingState.depthMask = uu
    }, Gu.d.prototype.setAlphaConstants = function(uu, Eu, ju, su) {
      this._alphaState.setAlphaBlendConstants(uu, Eu, ju, su)
    }, Gu.d.prototype.getAlphaMode = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[uu]
    }, Gu.d.prototype.getAlphaEquation = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[uu]
    });
    let Ju = !1;
    Ju || (Ju = !0, Gu.d.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, Gu.d.prototype.setStencilBuffer = function(uu) {
      this._stencilState.stencilTest = uu
    }, Gu.d.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, Gu.d.prototype.setStencilMask = function(uu) {
      this._stencilState.stencilMask = uu
    }, Gu.d.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, Gu.d.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, Gu.d.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, Gu.d.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, Gu.d.prototype.setStencilFunction = function(uu) {
      this._stencilState.stencilFunc = uu
    }, Gu.d.prototype.setStencilBackFunction = function(uu) {
      this._stencilState.stencilBackFunc = uu
    }, Gu.d.prototype.setStencilFunctionReference = function(uu) {
      this._stencilState.stencilFuncRef = uu
    }, Gu.d.prototype.setStencilFunctionMask = function(uu) {
      this._stencilState.stencilFuncMask = uu
    }, Gu.d.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, Gu.d.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, Gu.d.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, Gu.d.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, Gu.d.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, Gu.d.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, Gu.d.prototype.setStencilOperationFail = function(uu) {
      this._stencilState.stencilOpStencilFail = uu
    }, Gu.d.prototype.setStencilBackOperationFail = function(uu) {
      this._stencilState.stencilBackOpStencilFail = uu
    }, Gu.d.prototype.setStencilOperationDepthFail = function(uu) {
      this._stencilState.stencilOpDepthFail = uu
    }, Gu.d.prototype.setStencilBackOperationDepthFail = function(uu) {
      this._stencilState.stencilBackOpDepthFail = uu
    }, Gu.d.prototype.setStencilOperationPass = function(uu) {
      this._stencilState.stencilOpStencilDepthPass = uu
    }, Gu.d.prototype.setStencilBackOperationPass = function(uu) {
      this._stencilState.stencilBackOpStencilDepthPass = uu
    }, Gu.d.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, Gu.d.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ju(40287);
    let du = !1;
    du || (du = !0, Gu.d.prototype.createDepthStencilTexture = function(uu, Eu, ju) {
      if (Eu.isCube) {
        const ju = uu.width || uu;
        return this._createDepthStencilCubeTexture(ju, Eu)
      }
      return this._createDepthStencilTexture(uu, Eu, ju)
    });
    ju(40290), ju(40332);
    let au = !1;
    au || (au = !0, Uu.ThinEngine.prototype.enableScissor = function(uu, Eu, ju, su) {
      const Uu = this._gl;
      Uu.enable(Uu.SCISSOR_TEST), Uu.scissor(uu, Eu, ju, su)
    }, Uu.ThinEngine.prototype.disableScissor = function() {
      const uu = this._gl;
      uu.disable(uu.SCISSOR_TEST)
    })
  },
  40101: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Gu
    });
    var su = ju(40108),
      Uu = ju(37506),
      Zu = ju(40118),
      Xu = ju(40170);
    class lu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new qu(uu)
      }
      sampleFrame() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const Eu = uu - this._lastFrameTimeMs;
            this._rollingFrameTime.add(Eu)
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
    class qu {
      constructor(uu) {
        this._samples = new Array(uu), this.reset()
      }
      add(uu) {
        let Eu;
        if (this.isSaturated()) {
          const uu = this._samples[this._pos];
          Eu = uu - this.average, this.average -= Eu / (this._sampleCount - 1), this._m2 -= Eu * (uu - this.average)
        } else this._sampleCount++;
        Eu = uu - this.average, this.average += Eu / this._sampleCount, this._m2 += Eu * (uu - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = uu, this._pos++, this._pos %= this._samples.length
      }
      history(uu) {
        if (uu >= this._sampleCount || uu >= this._samples.length) return 0;
        const Eu = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(Eu - uu)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(uu) {
        const Eu = this._samples.length;
        return (uu % Eu + Eu) % Eu
      }
    }
    var fu = ju(40184),
      Cu = ju(39032),
      bu = ju(40198),
      cu = ju(40168),
      Nu = ju(40138);

    function Ou(uu) {
      const Eu = function(uu) {
        if (!(0, Nu.e)() || !document.body) return null;
        const Eu = document.createElement("span");
        Eu.textContent = "Hg", Eu.style.font = uu;
        const ju = document.createElement("div");
        ju.style.display = "inline-block", ju.style.width = "1px", ju.style.height = "0px", ju.style.verticalAlign = "bottom";
        const su = document.createElement("div");
        let Uu, Zu;
        su.style.whiteSpace = "nowrap", su.appendChild(Eu), su.appendChild(ju), document.body.appendChild(su);
        try {
          Zu = ju.getBoundingClientRect().top - Eu.getBoundingClientRect().top, ju.style.verticalAlign = "baseline", Uu = ju.getBoundingClientRect().top - Eu.getBoundingClientRect().top
        } finally {
          document.body.removeChild(su)
        }
        const Xu = {
          ascent: Uu,
          height: Zu,
          descent: Zu - Uu
        };
        return Yu(Xu) ? Xu : null
      }(uu);
      if (Eu) return Eu;
      const ju = function(uu) {
        let Eu = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? Eu = new OffscreenCanvas(64, 64) : (0, Nu.e)() && "function" === typeof document.createElement && (Eu = document.createElement("canvas"), Eu.width = 64, Eu.height = 64);
          const ju = Eu?.getContext("2d");
          if (!ju) return null;
          ju.font = uu;
          const su = ju.measureText("Hg"),
            Uu = Number(su.actualBoundingBoxAscent ?? su.fontBoundingBoxAscent),
            Zu = Number(su.actualBoundingBoxDescent ?? su.fontBoundingBoxDescent),
            Xu = {
              ascent: Uu,
              height: Uu + Zu,
              descent: Zu
            };
          return Yu(Xu) ? Xu : null
        } catch {
          return null
        } finally {
          const uu = Eu;
          "function" === typeof uu?.dispose && uu.dispose()
        }
      }(uu);
      return ju || function(uu) {
        const Eu = Math.max(1, function(uu) {
            const Eu = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(uu || ""));
            return Eu ? Number(Eu[1]) : 16
          }(uu)),
          ju = .8 * Eu,
          su = .2 * Eu;
        return {
          ascent: ju,
          height: ju + su,
          descent: su
        }
      }(uu)
    }

    function Yu(uu) {
      return Number.isFinite(uu.ascent) && Number.isFinite(uu.height) && Number.isFinite(uu.descent) && uu.height > 0
    }

    function hu(uu) {
      if (uu.requestPointerLock) {
        const Eu = uu.requestPointerLock();
        Eu instanceof Promise ? Eu.then((() => {
          uu.focus()
        })).catch((() => {})) : uu.focus()
      }
    }
    var Du = ju(40209),
      gu = ju(40164),
      Mu = ju(40218),
      eu = ju(40222);
    class Gu extends Zu.ThinEngine {
      static get NpmPackage() {
        return cu.d.NpmPackage
      }
      static get Version() {
        return cu.d.Version
      }
      static get Instances() {
        return Uu.b.Instances
      }
      static get LastCreatedEngine() {
        return Uu.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return Uu.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(uu) {
        return cu.d.DefaultLoadingScreenFactory(uu)
      }
      get _supportsHardwareTextureRescaling() {
        return !!Gu._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, Mu.d)(), (0, eu.c)(), super(uu, Eu, ju, su), this._performanceMonitor = new lu, this._drawCalls = new Du.b, uu && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(uu) {
        super._sharedInit(uu),
          function(uu, Eu, ju) {
            uu._onCanvasFocus = () => {
              uu.onCanvasFocusObservable.notifyObservers(uu)
            }, uu._onCanvasBlur = () => {
              uu.onCanvasBlurObservable.notifyObservers(uu)
            }, uu._onCanvasContextMenu = Eu => {
              uu.disableContextMenu && Eu.preventDefault()
            }, Eu.addEventListener("focus", uu._onCanvasFocus), Eu.addEventListener("blur", uu._onCanvasBlur), Eu.addEventListener("contextmenu", uu._onCanvasContextMenu), uu._onBlur = () => {
              uu.disablePerformanceMonitorInBackground && uu.performanceMonitor.disable(), uu._windowIsBackground = !0
            }, uu._onFocus = () => {
              uu.disablePerformanceMonitorInBackground && uu.performanceMonitor.enable(), uu._windowIsBackground = !1
            }, uu._onCanvasPointerOut = ju => {
              document.elementFromPoint(ju.clientX, ju.clientY) !== Eu && uu.onCanvasPointerOutObservable.notifyObservers(ju)
            };
            const su = uu.getHostWindow();
            su && "function" === typeof su.addEventListener && (su.addEventListener("blur", uu._onBlur), su.addEventListener("focus", uu._onFocus)), Eu.addEventListener("pointerout", uu._onCanvasPointerOut), ju.doNotHandleTouchAction || function(uu) {
              uu && uu.setAttribute && (uu.setAttribute("touch-action", "none"), uu.style.touchAction = "none", uu.style.webkitTapHighlightColor = "transparent")
            }(Eu), !cu.d.audioEngine && ju.audioEngine && cu.d.AudioEngineFactory && (cu.d.audioEngine = cu.d.AudioEngineFactory(uu.getRenderingCanvas(), uu.getAudioContext(), uu.getAudioDestination())), (0, Nu.e)() && (uu._onFullscreenChange = () => {
              uu.isFullscreen = !!document.fullscreenElement, uu.isFullscreen && uu._pointerLockRequested && Eu && hu(Eu)
            }, document.addEventListener("fullscreenchange", uu._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", uu._onFullscreenChange, !1), uu._onPointerLockChange = () => {
              uu.isPointerLock = document.pointerLockElement === Eu
            }, document.addEventListener("pointerlockchange", uu._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", uu._onPointerLockChange, !1)), uu.enableOfflineSupport = void 0 !== cu.d.OfflineProviderFactory, uu._deterministicLockstep = !!ju.deterministicLockstep, uu._lockstepMaxSteps = ju.lockstepMaxSteps || 0, uu._timeStep = ju.timeStep || 1 / 60
          }(this, uu, this._creationOptions)
      }
      resizeImageBitmap(uu, Eu, ju) {
        return function(uu, Eu, ju, su) {
          const Uu = uu.createCanvas(ju, su).getContext("2d");
          if (!Uu) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return Uu.drawImage(Eu, 0, 0), Uu.getImageData(0, 0, ju, su).data
        }(this, uu, Eu, ju)
      }
      async _createImageBitmapFromSource(uu, Eu) {
        return await async function(uu, Eu, ju) {
          return await new Promise(((su, Uu) => {
            const Zu = new Image;
            Zu.onload = () => {
              Zu.decode().then((() => {
                uu.createImageBitmap(Zu, ju).then((uu => {
                  su(uu)
                }))
              }))
            }, Zu.onerror = () => {
              Uu(`Error loading image ${Zu.src}`)
            }, Zu.src = Eu
          }))
        }(this, uu, Eu)
      }
      switchFullscreen(uu) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(uu)
      }
      enterFullscreen(uu) {
        this.isFullscreen || (this._pointerLockRequested = uu, this._renderingCanvas && function(uu) {
          const Eu = uu.requestFullscreen || uu.webkitRequestFullscreen;
          Eu && Eu.call(uu)
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
      setDirectViewport(uu, Eu, ju, su) {
        const Uu = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(uu, Eu, ju, su), Uu
      }
      scissorClear(uu, Eu, ju, su, Uu) {
        this.enableScissor(uu, Eu, ju, su), this.clear(Uu, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(uu) {
        const Eu = this._gl.getAttachedShaders(uu);
        return Eu ? this._gl.getShaderSource(Eu[0]) : null
      }
      getFragmentShaderSource(uu) {
        const Eu = this._gl.getAttachedShaders(uu);
        return Eu ? this._gl.getShaderSource(Eu[1]) : null
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
        return Ou(uu)
      }
      enterPointerlock() {
        this._renderingCanvas && hu(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      wG() {
        this._measureFps(), super.wG()
      }
      _deletePipelineContext(uu) {
        const Eu = uu;
        Eu && Eu.program && Eu.transformFeedback && (this.deleteTransformFeedback(Eu.transformFeedback), Eu.transformFeedback = null), super._deletePipelineContext(uu)
      }
      createShaderProgram(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        Uu = Uu || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const Xu = super.createShaderProgram(uu, Eu, ju, su, Uu, Zu);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), Xu
      }
      _createShaderProgram(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Zu = su.createProgram();
        if (uu.program = Zu, !Zu) throw new Error("Unable to create program");
        if (su.attachShader(Zu, Eu), su.attachShader(Zu, ju), this.uY > 1 && Uu) {
          const Eu = this.createTransformFeedback();
          this.bindTransformFeedback(Eu), this.setTranformFeedbackVaryings(Zu, Uu), uu.transformFeedback = Eu
        }
        return su.linkProgram(Zu), this.uY > 1 && Uu && this.bindTransformFeedback(null), uu.context = su, uu.vertexShader = Eu, uu.fragmentShader = ju, uu.isParallelCompiled || this._finalizePipelineContext(uu), Zu
      }
      _releaseTexture(uu) {
        super._releaseTexture(uu)
      }
      _releaseRenderTargetWrapper(uu) {
        super._releaseRenderTargetWrapper(uu);
        for (const Eu of this.scenes) {
          for (const ju of Eu.postProcesses) ju._outputTexture === uu && (ju._outputTexture = null);
          for (const ju of Eu.cameras)
            for (const Eu of ju._postProcesses) Eu && Eu._outputTexture === uu && (Eu._outputTexture = null)
        }
      }
      _rescaleTexture(uu, Eu, ju, su, Uu) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const Zu = this.createRenderTargetTexture({
          width: Eu.width,
          height: Eu.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && Gu._RescalePostProcessFactory && (this._rescalePostProcess = Gu._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const Xu = () => {
              this._rescalePostProcess.onApply = function(Eu) {
                Eu._bindTexture("textureSampler", uu)
              };
              let Xu = ju;
              Xu || (Xu = this.scenes[this.scenes.length - 1]), Xu.postProcessManager.directRender([this._rescalePostProcess], Zu, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, Eu, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, su, 0, 0, Eu.width, Eu.height, 0), this.unBindFramebuffer(Zu), Zu.dispose(), Uu && Uu()
            },
            lu = this._rescalePostProcess.getEffect();
          lu ? lu.executeWhenCompiled(Xu) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((uu => {
            uu.executeWhenCompiled(Xu)
          }))
        }
      }
      wrapWebGLTexture(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Xu = new bu.c(uu, this._gl),
          lu = new su.c(this, 15, !0);
        return lu._hardwareTexture = Xu, lu.baseWidth = Uu, lu.baseHeight = Zu, lu.width = Uu, lu.height = Zu, lu.isReady = !0, lu.useMipMaps = Eu, this.updateTextureSamplingMode(ju, lu), lu
      }
      updateWrappedWebGLTexture(uu, Eu) {
        if (15 !== uu.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const su of this._renderTargetWrapperCache)
          if (su.textures?.includes(uu)) {
            if (su.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (su._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } uu._hardwareTexture = new bu.c(Eu, this._gl), uu.isReady = !0, uu._cachedCoordinatesMode = null, uu._cachedWrapU = null, uu._cachedWrapV = null, uu._cachedWrapR = null, uu._cachedAnisotropicFilteringLevel = null;
        for (const su in this._boundTexturesCache) this._boundTexturesCache[su] === uu && (this._boundTexturesCache[su] = null);
        this.updateTextureSamplingMode(uu.samplingMode, uu);
        const ju = this._gl;
        for (const su of this._renderTargetWrapperCache) {
          if (su.texture !== uu) continue;
          const Uu = su,
            Zu = su.samples,
            Xu = Zu > 1;
          Uu._framebuffer && ju.deleteFramebuffer(Uu._framebuffer), !Xu && Uu._depthStencilBuffer && (ju.deleteRenderbuffer(Uu._depthStencilBuffer), Uu._depthStencilBuffer = null);
          const lu = this._currentFramebuffer,
            qu = ju.createFramebuffer();
          this._bindUnboundFramebuffer(qu), ju.framebufferTexture2D(ju.FRAMEBUFFER, ju.COLOR_ATTACHMENT0, ju.TEXTURE_2D, Eu, 0), Xu || (Uu._depthStencilBuffer = this._setupFramebufferDepthAttachments(su._generateStencilBuffer, su._generateDepthBuffer, su.width, su.height)), this._bindUnboundFramebuffer(lu), Uu._framebuffer = qu, Xu && (su._samples = 1, this.updateRenderTargetTextureSampleCount(Uu, Zu))
        }
      }
      _uploadImageToTexture(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Uu = this._gl,
          Zu = this._getWebGLTextureType(uu.type),
          Xu = this._getInternalFormat(uu.format),
          lu = this._getRGBABufferInternalSizedFormat(uu.type, Xu),
          qu = uu.isCube ? Uu.TEXTURE_CUBE_MAP : Uu.TEXTURE_2D;
        this._bindTextureDirectly(qu, uu, !0), this._unpackFlipY(uu.invertY);
        let fu = Uu.TEXTURE_2D;
        uu.isCube && (fu = Uu.TEXTURE_CUBE_MAP_POSITIVE_X + ju), Uu.texImage2D(fu, su, lu, Xu, Zu, Eu), this._bindTextureDirectly(qu, null, !0)
      }
      updateTextureComparisonFunction(uu, Eu) {
        if (1 === this.uY) return void Cu.b.Error("WebGL 1 does not support texture comparison.");
        const ju = this._gl;
        uu.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, uu, !0), 0 === Eu ? (ju.texParameteri(ju.TEXTURE_CUBE_MAP, ju.TEXTURE_COMPARE_FUNC, 515), ju.texParameteri(ju.TEXTURE_CUBE_MAP, ju.TEXTURE_COMPARE_MODE, ju.NONE)) : (ju.texParameteri(ju.TEXTURE_CUBE_MAP, ju.TEXTURE_COMPARE_FUNC, Eu), ju.texParameteri(ju.TEXTURE_CUBE_MAP, ju.TEXTURE_COMPARE_MODE, ju.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, uu, !0), 0 === Eu ? (ju.texParameteri(ju.TEXTURE_2D, ju.TEXTURE_COMPARE_FUNC, 515), ju.texParameteri(ju.TEXTURE_2D, ju.TEXTURE_COMPARE_MODE, ju.NONE)) : (ju.texParameteri(ju.TEXTURE_2D, ju.TEXTURE_COMPARE_FUNC, Eu), ju.texParameteri(ju.TEXTURE_2D, ju.TEXTURE_COMPARE_MODE, ju.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), uu._comparisonFunction = Eu
      }
      createInstancesBuffer(uu) {
        const Eu = this._gl.createBuffer();
        if (!Eu) throw new Error("Unable to create instance buffer");
        const ju = new fu.e(Eu);
        return ju.Mb = uu, this.bindArrayBuffer(ju), this._gl.bufferData(this._gl.ARRAY_BUFFER, uu, this._gl.DYNAMIC_DRAW), ju.references = 1, ju
      }
      deleteInstancesBuffer(uu) {
        this._gl.deleteBuffer(uu)
      }
      async _clientWaitAsync(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const su = this._gl;
        return await new Promise(((Uu, Zu) => {
          (0, gu.d)((() => {
            const ju = su.clientWaitSync(uu, Eu, 0);
            if (ju == su.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ju != su.TIMEOUT_EXPIRED
          }), Uu, Zu, ju)
        }))
      }
      _readPixelsAsync(uu, Eu, ju, su, Uu, Zu, Xu) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const lu = this._gl,
          qu = lu.createBuffer();
        lu.bindBuffer(lu.PIXEL_PACK_BUFFER, qu), lu.bufferData(lu.PIXEL_PACK_BUFFER, Xu.byteLength, lu.STREAM_READ), lu.readPixels(uu, Eu, ju, su, Uu, Zu, 0), lu.bindBuffer(lu.PIXEL_PACK_BUFFER, null);
        const fu = lu.fenceSync(lu.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return fu ? (lu.flush(), this._clientWaitAsync(fu, 0, 10).then((() => (lu.deleteSync(fu), lu.bindBuffer(lu.PIXEL_PACK_BUFFER, qu), lu.getBufferSubData(lu.PIXEL_PACK_BUFFER, 0, Xu), lu.bindBuffer(lu.PIXEL_PACK_BUFFER, null), lu.deleteBuffer(qu), Xu)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(uu, Eu) {
            1 === Uu.b.Instances.length && cu.d.audioEngine && (cu.d.audioEngine.dispose(), cu.d.audioEngine = null);
            const ju = uu.getHostWindow();
            ju && "function" === typeof ju.removeEventListener && (ju.removeEventListener("blur", uu._onBlur), ju.removeEventListener("focus", uu._onFocus)), Eu && (Eu.removeEventListener("focus", uu._onCanvasFocus), Eu.removeEventListener("blur", uu._onCanvasBlur), Eu.removeEventListener("pointerout", uu._onCanvasPointerOut), Eu.removeEventListener("contextmenu", uu._onCanvasContextMenu)), (0, Nu.e)() && (document.removeEventListener("fullscreenchange", uu._onFullscreenChange), document.removeEventListener("mozfullscreenchange", uu._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", uu._onFullscreenChange), document.removeEventListener("msfullscreenchange", uu._onFullscreenChange), document.removeEventListener("pointerlockchange", uu._onPointerLockChange), document.removeEventListener("mspointerlockchange", uu._onPointerLockChange), document.removeEventListener("mozpointerlockchange", uu._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", uu._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    Gu.ALPHA_DISABLE = 0, Gu.ALPHA_ADD = 1, Gu.ALPHA_COMBINE = 2, Gu.ALPHA_SUBTRACT = 3, Gu.ALPHA_MULTIPLY = 4, Gu.ALPHA_MAXIMIZED = 5, Gu.ALPHA_ONEONE = 6, Gu.ALPHA_PREMULTIPLIED = 7, Gu.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Gu.ALPHA_INTERPOLATE = 9, Gu.ALPHA_SCREENMODE = 10, Gu.DELAYLOADSTATE_NONE = 0, Gu.DELAYLOADSTATE_LOADED = 1, Gu.DELAYLOADSTATE_LOADING = 2, Gu.DELAYLOADSTATE_NOTLOADED = 4, Gu.NEVER = 512, Gu.ALWAYS = 519, Gu.LESS = 513, Gu.EQUAL = 514, Gu.LEQUAL = 515, Gu.GREATER = 516, Gu.GEQUAL = 518, Gu.NOTEQUAL = 517, Gu.KEEP = 7680, Gu.REPLACE = 7681, Gu.INCR = 7682, Gu.DECR = 7683, Gu.INVERT = 5386, Gu.INCR_WRAP = 34055, Gu.DECR_WRAP = 34056, Gu.TEXTURE_CLAMP_ADDRESSMODE = 0, Gu.TEXTURE_WRAP_ADDRESSMODE = 1, Gu.TEXTURE_MIRROR_ADDRESSMODE = 2, Gu.TEXTUREFORMAT_ALPHA = 0, Gu.TEXTUREFORMAT_LUMINANCE = 1, Gu.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Gu.TEXTUREFORMAT_RGB = 4, Gu.TEXTUREFORMAT_RGBA = 5, Gu.TEXTUREFORMAT_RED = 6, Gu.TEXTUREFORMAT_R = 6, Gu.TEXTUREFORMAT_R16_UNORM = 33322, Gu.TEXTUREFORMAT_RG16_UNORM = 33324, Gu.TEXTUREFORMAT_RGB16_UNORM = 32852, Gu.TEXTUREFORMAT_RGBA16_UNORM = 32859, Gu.TEXTUREFORMAT_R16_SNORM = 36760, Gu.TEXTUREFORMAT_RG16_SNORM = 36761, Gu.TEXTUREFORMAT_RGB16_SNORM = 36762, Gu.TEXTUREFORMAT_RGBA16_SNORM = 36763, Gu.TEXTUREFORMAT_RG = 7, Gu.TEXTUREFORMAT_RED_INTEGER = 8, Gu.TEXTUREFORMAT_R_INTEGER = 8, Gu.TEXTUREFORMAT_RG_INTEGER = 9, Gu.TEXTUREFORMAT_RGB_INTEGER = 10, Gu.TEXTUREFORMAT_RGBA_INTEGER = 11, Gu.TEXTURETYPE_UNSIGNED_BYTE = 0, Gu.TEXTURETYPE_UNSIGNED_INT = 0, Gu.TEXTURETYPE_FLOAT = 1, Gu.TEXTURETYPE_HALF_FLOAT = 2, Gu.TEXTURETYPE_BYTE = 3, Gu.TEXTURETYPE_SHORT = 4, Gu.TEXTURETYPE_UNSIGNED_SHORT = 5, Gu.TEXTURETYPE_INT = 6, Gu.TEXTURETYPE_UNSIGNED_INTEGER = 7, Gu.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Gu.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Gu.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Gu.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Gu.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Gu.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Gu.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Gu.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Gu.TEXTURE_NEAREST_SAMPLINGMODE = 1, Gu.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Gu.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Gu.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Gu.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Gu.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Gu.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Gu.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Gu.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Gu.TEXTURE_NEAREST_LINEAR = 7, Gu.TEXTURE_NEAREST_NEAREST = 1, Gu.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Gu.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Gu.TEXTURE_LINEAR_LINEAR = 2, Gu.TEXTURE_LINEAR_NEAREST = 12, Gu.TEXTURE_EXPLICIT_MODE = 0, Gu.TEXTURE_SPHERICAL_MODE = 1, Gu.TEXTURE_PLANAR_MODE = 2, Gu.TEXTURE_CUBIC_MODE = 3, Gu.TEXTURE_PROJECTION_MODE = 4, Gu.TEXTURE_SKYBOX_MODE = 5, Gu.TEXTURE_INVCUBIC_MODE = 6, Gu.TEXTURE_EQUIRECTANGULAR_MODE = 7, Gu.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Gu.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Gu.SCALEMODE_FLOOR = 1, Gu.SCALEMODE_NEAREST = 2, Gu.SCALEMODE_CEILING = 3
  },
  40243: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(40206);
    class Uu {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(uu) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = uu, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, uu && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, su.b)(uu.format))
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
        const Eu = this._textures[uu],
          ju = this._layerIndices?.[uu] ?? 0,
          su = this._faceIndices?.[uu] ?? 0;
        return Eu.isCube ? 6 * ju + su : Eu.is3D ? 0 : ju
      }
      get samples() {
        return this._samples
      }
      setSamples(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === uu && !ju) return uu;
        const su = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, uu, Eu) : this._engine.updateRenderTargetTextureSampleCount(this, uu);
        return this._samples = uu, su
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(uu, Eu, ju, su, Uu) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = uu, this._isCube = Eu, this._size = ju, this._engine = su, this._depthStencilTexture = null, this.label = Uu
      }
      setTextures(uu) {
        Array.isArray(uu) ? this._textures = uu : this._textures = uu ? [uu] : null
      }
      setTexture(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[Eu] !== uu && (this._textures[Eu] && ju && this._textures[Eu].dispose(), this._textures[Eu] = uu)
      }
      setLayerAndFaceIndices(uu, Eu) {
        this._layerIndices = uu, this._faceIndices = Eu
      }
      setLayerAndFaceIndex() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== Eu && Eu >= 0 && (this._layerIndices[uu] = Eu), void 0 !== ju && ju >= 0 && (this._faceIndices[uu] = ju)
      }
      createDepthStencilTexture() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ju, this._depthStencilTextureLabel = Zu, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: Eu,
          comparisonFunction: uu,
          generateStencil: ju,
          isCube: this._isCube,
          samples: su,
          depthTextureFormat: Uu,
          label: Zu
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
          const Eu = this.textures;
          if (Eu && Eu.length > 0) {
            let ju = !1,
              su = Eu.length,
              Uu = -1;
            const Zu = Eu[Eu.length - 1]._source;
            14 !== Zu && 12 !== Zu || (ju = !0, Uu = Eu[Eu.length - 1].format, su--);
            const Xu = [],
              lu = [],
              qu = [],
              fu = [],
              Cu = [],
              bu = [],
              cu = [],
              Nu = {};
            for (let uu = 0; uu < su; ++uu) {
              const ju = Eu[uu];
              Xu.push(ju.samplingMode), lu.push(ju.type), qu.push(ju.format);
              void 0 !== Nu[ju.uniqueId] ? (fu.push(-1), cu.push(0)) : (Nu[ju.uniqueId] = uu, ju.is2DArray ? (fu.push(35866), cu.push(ju.depth)) : ju.isCube ? (fu.push(34067), cu.push(0)) : ju.is3D ? (fu.push(32879), cu.push(ju.depth)) : (fu.push(3553), cu.push(0))), this._faceIndices && Cu.push(this._faceIndices[uu] ?? 0), this._layerIndices && bu.push(this._layerIndices[uu] ?? 0)
            }
            const Ou = {
                samplingModes: Xu,
                generateMipMaps: Eu[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ju,
                depthTextureFormat: Uu,
                types: lu,
                formats: qu,
                IXu: su,
                targetTypes: fu,
                faceIndex: Cu,
                layerIndex: bu,
                layerCounts: cu,
                label: this.label
              },
              Yu = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            uu = this._engine.createMultipleRenderTarget(Yu, Ou);
            for (let hu = 0; hu < su; ++hu) {
              if (-1 !== fu[hu]) continue;
              const ju = Nu[Eu[hu].uniqueId];
              uu.setTexture(uu.textures[ju], hu)
            }
          }
        } else {
          const Eu = {};
          if (Eu.generateDepthBuffer = this._generateDepthBuffer, Eu.generateMipMaps = this.texture?.generateMipMaps ?? !1, Eu.generateStencilBuffer = this._generateStencilBuffer, Eu.samplingMode = this.texture?.samplingMode, Eu.type = this.texture?.type, Eu.format = this.texture?.format, Eu.noColorAttachment = !this._textures, Eu.label = this.label, this.isCube) uu = this._engine.createRenderTargetCubeTexture(this.width, Eu);
          else {
            const ju = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            uu = this._engine.createRenderTargetTexture(ju, Eu)
          }
          uu.texture && (uu.texture.isReady = !0)
        }
        return uu
      }
      _swapRenderTargetWrapper(uu) {
        if (this._textures && uu._textures)
          for (let Eu = 0; Eu < this._textures.length; ++Eu) this._textures[Eu]._swapAndDie(uu._textures[Eu], !1), uu._textures[Eu].isReady = !0;
        this._depthStencilTexture && uu._depthStencilTexture && (this._depthStencilTexture._swapAndDie(uu._depthStencilTexture), uu._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const uu = this._cloneRenderTargetWrapper();
        if (uu) {
          if (this._depthStencilTexture) {
            const Eu = this._depthStencilTexture.samplingMode,
              ju = this._depthStencilTexture.format,
              su = 2 === Eu || 3 === Eu || 11 === Eu;
            uu.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, su, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ju, this._depthStencilTextureLabel)
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
  40685: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static get ForceFullSceneLoadingForIncremental() {
        return su._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(uu) {
        su._ForceFullSceneLoadingForIncremental = uu
      }
      static get ShowLoadingScreen() {
        return su._ShowLoadingScreen
      }
      static set ShowLoadingScreen(uu) {
        su._ShowLoadingScreen = uu
      }
      static get loggingLevel() {
        return su._LoggingLevel
      }
      static set loggingLevel(uu) {
        su._LoggingLevel = uu
      }
      static get CleanBoneMatrixWeights() {
        return su._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(uu) {
        su._CleanBoneMatrixWeights = uu
      }
    }
    su._ForceFullSceneLoadingForIncremental = !1, su._ShowLoadingScreen = !0, su._CleanBoneMatrixWeights = !1, su._LoggingLevel = 0
  },
  40339: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(39032);
    const Uu = new Map;

    function Zu(uu, Eu) {
      (function(uu) {
        return Uu.delete(uu)
      })(uu) && su.b.Warn(`Extension with the name '${uu}' already exists`), Uu.set(uu, Eu)
    }

    function Xu(uu, Eu) {
      "image/ktx" !== Eu && "image/ktx2" !== Eu || (uu = ".ktx"), Uu.has(uu) || (uu.endsWith(".ies") && Zu(".ies", (async () => await ju.e(314).then((() => ju(42046))).then((uu => new uu._IESTextureLoader)))), uu.endsWith(".dds") && Zu(".dds", (async () => await ju.e(312).then((() => ju(42055))).then((uu => new uu._DDSTextureLoader)))), uu.endsWith(".basis") && Zu(".basis", (async () => await ju.e(315).then((() => ju(42062))).then((uu => new uu._BasisTextureLoader)))), uu.endsWith(".env") && Zu(".env", (async () => await Promise.all([ju.e(316), ju.e(313)]).then((() => ju(42066))).then((uu => new uu._ENVTextureLoader)))), uu.endsWith(".hdr") && Zu(".hdr", (async () => await ju.e(317).then((() => ju(42114))).then((uu => new uu._HDRTextureLoader)))), (uu.endsWith(".ktx") || uu.endsWith(".ktx2")) && (Zu(".ktx", (async () => await ju.e(318).then((() => ju(42121))).then((uu => new uu._KTXTextureLoader)))), Zu(".ktx2", (async () => await ju.e(318).then((() => ju(42121))).then((uu => new uu._KTXTextureLoader))))), uu.endsWith(".tga") && Zu(".tga", (async () => await ju.e(319).then((() => ju(42137))).then((uu => new uu._TGATextureLoader)))), uu.endsWith(".exr") && Zu(".exr", (async () => await ju.e(320).then((() => ju(42145))).then((uu => new uu._ExrTextureLoader)))));
      const su = Uu.get(uu);
      return su ? Promise.resolve(su(Eu)) : null
    }
  },
  40711: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      f: () => fu
    });
    var su = ju(40552),
      Uu = ju(40281),
      Zu = ju(37532);
    class Xu extends su.b {
      get M6() {
        return this._subMaterials
      }
      set M6(uu) {
        this._subMaterials = uu, this._hookArray(uu)
      }
      getChildren() {
        return this.M6
      }
      constructor(uu, Eu) {
        super(uu, Eu, !0), this._waitingSubMaterialsUniqueIds = [], this.hV().addMultiMaterial(this), this.M6 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(uu) {
        var Eu = this;
        const ju = uu.push;
        uu.push = function() {
          for (var su = arguments.length, Uu = new Array(su), Zu = 0; Zu < su; Zu++) Uu[Zu] = arguments[Zu];
          const Xu = ju.apply(uu, Uu);
          return Eu._markAllSubMeshesAsTexturesDirty(), Xu
        };
        const su = uu.splice;
        uu.splice = (Eu, ju) => {
          const Uu = su.call(uu, Eu, ju ?? uu.length);
          return this._markAllSubMeshesAsTexturesDirty(), Uu
        }
      }
      getSubMaterial(uu) {
        return uu < 0 || uu >= this.M6.length ? this.hV().defaultMaterial : this.M6[uu]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.M6.map((uu => uu ? uu.getActiveTextures() : [])))
      }
      hasTexture(uu) {
        if (super.hasTexture(uu)) return !0;
        for (let Eu = 0; Eu < this.M6.length; Eu++)
          if (this.M6[Eu]?.hasTexture(uu)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(uu, Eu, ju) {
        for (let su = 0; su < this.M6.length; su++) {
          const Uu = this.M6[su];
          if (Uu) {
            if (Uu._storeEffectOnSubMeshes) {
              if (!Uu.isReadyForSubMesh(uu, Eu, ju)) return !1;
              continue
            }
            if (!Uu.isReady(uu)) return !1
          }
        }
        return !0
      }
      clone(uu, Eu) {
        const ju = new Xu(uu, this.hV());
        for (let su = 0; su < this.M6.length; su++) {
          let Uu;
          const Zu = this.M6[su];
          Uu = Eu && Zu ? Zu.clone(uu + "-" + Zu.name) : this.M6[su], ju.M6.push(Uu)
        }
        return ju
      }
      serialize() {
        const uu = {};
        uu.name = this.name, uu.id = this.id, uu.uniqueId = this.uniqueId, Uu.c && (uu.tags = Uu.c.GetTags(this)), uu.materialsUniqueIds = [], uu.materials = [];
        for (let Eu = 0; Eu < this.M6.length; Eu++) {
          const ju = this.M6[Eu];
          ju ? (uu.materialsUniqueIds.push(ju.uniqueId), uu.materials.push(ju.id)) : (uu.materialsUniqueIds.push(null), uu.materials.push(null))
        }
        return uu
      }
      dispose(uu, Eu, ju) {
        const su = this.hV();
        if (!su) return;
        if (ju)
          for (let Zu = 0; Zu < this.M6.length; Zu++) {
            const ju = this.M6[Zu];
            ju && ju.dispose(uu, Eu)
          }
        const Uu = su.multiMaterials.indexOf(this);
        Uu >= 0 && su.multiMaterials.splice(Uu, 1), super.dispose(uu, Eu)
      }
    }
    let lu = !1;

    function qu(uu, Eu) {
      const ju = new Xu(uu.name, Eu);
      if (ju.id = uu.id, ju._loadedUniqueId = uu.uniqueId, Uu.c && Uu.c.AddTagsTo(ju, uu.tags), uu.materialsUniqueIds) ju._waitingSubMaterialsUniqueIds = uu.materialsUniqueIds;
      else
        for (const su of uu.materials) ju.M6.push(Eu.getLastMaterialById(su));
      return ju
    }

    function fu() {
      lu || (lu = !0, Xu.ParseMultiMaterial = qu, (0, Zu.f)("BABYLON.MultiMaterial", Xu))
    }
  },
  40475: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su, Uu, Zu = ju(37494);
    ! function(uu) {
      uu[uu.LOCAL = 0] = "LOCAL", uu[uu.WORLD = 1] = "WORLD", uu[uu.BONE = 2] = "BONE"
    }(su || (su = {}));
    class Xu {}
    Xu.X = new Zu.t(1, 0, 0), Xu.Y = new Zu.t(0, 1, 0), Xu.Z = new Zu.t(0, 0, 1),
      function(uu) {
        uu[uu.X = 0] = "X", uu[uu.Y = 1] = "Y", uu[uu.Z = 2] = "Z"
      }(Uu || (Uu = {}))
  },
  40245: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu,
      e: () => fu
    });
    var su = ju(37494);
    const Uu = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      Zu = [() => 1, uu => uu.y, uu => uu.z, uu => uu.x, uu => uu.x * uu.y, uu => uu.y * uu.z, uu => 3 * uu.z * uu.z - 1, uu => uu.x * uu.z, uu => uu.x * uu.x - uu.y * uu.y],
      Xu = (uu, Eu) => Uu[uu] * Zu[uu](Eu),
      lu = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class qu {
      constructor() {
        this.preScaled = !1, this.l00 = su.t.Zero(), this.l1_1 = su.t.Zero(), this.l10 = su.t.Zero(), this.l11 = su.t.Zero(), this.l2_2 = su.t.Zero(), this.l2_1 = su.t.Zero(), this.l20 = su.t.Zero(), this.l21 = su.t.Zero(), this.l22 = su.t.Zero()
      }
      addLight(uu, Eu, ju) {
        su.m.dO[0].set(Eu.r, Eu.g, Eu.b);
        const Uu = su.m.dO[0],
          Zu = su.m.dO[1];
        Uu.scaleToRef(ju, Zu), Zu.scaleToRef(Xu(0, uu), su.m.dO[2]), this.l00.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(1, uu), su.m.dO[2]), this.l1_1.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(2, uu), su.m.dO[2]), this.l10.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(3, uu), su.m.dO[2]), this.l11.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(4, uu), su.m.dO[2]), this.l2_2.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(5, uu), su.m.dO[2]), this.l2_1.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(6, uu), su.m.dO[2]), this.l20.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(7, uu), su.m.dO[2]), this.l21.addInPlace(su.m.dO[2]), Zu.scaleToRef(Xu(8, uu), su.m.dO[2]), this.l22.addInPlace(su.m.dO[2])
      }
      scaleInPlace(uu) {
        this.l00.scaleInPlace(uu), this.l1_1.scaleInPlace(uu), this.l10.scaleInPlace(uu), this.l11.scaleInPlace(uu), this.l2_2.scaleInPlace(uu), this.l2_1.scaleInPlace(uu), this.l20.scaleInPlace(uu), this.l21.scaleInPlace(uu), this.l22.scaleInPlace(uu)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(lu[0]), this.l1_1.scaleInPlace(lu[1]), this.l10.scaleInPlace(lu[2]), this.l11.scaleInPlace(lu[3]), this.l2_2.scaleInPlace(lu[4]), this.l2_1.scaleInPlace(lu[5]), this.l20.scaleInPlace(lu[6]), this.l21.scaleInPlace(lu[7]), this.l22.scaleInPlace(lu[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(Uu[0]), this.l1_1.scaleInPlace(Uu[1]), this.l10.scaleInPlace(Uu[2]), this.l11.scaleInPlace(Uu[3]), this.l2_2.scaleInPlace(Uu[4]), this.l2_1.scaleInPlace(Uu[5]), this.l20.scaleInPlace(Uu[6]), this.l21.scaleInPlace(Uu[7]), this.l22.scaleInPlace(Uu[8])
      }
      updateFromArray(uu) {
        return su.t.FromArrayToRef(uu[0], 0, this.l00), su.t.FromArrayToRef(uu[1], 0, this.l1_1), su.t.FromArrayToRef(uu[2], 0, this.l10), su.t.FromArrayToRef(uu[3], 0, this.l11), su.t.FromArrayToRef(uu[4], 0, this.l2_2), su.t.FromArrayToRef(uu[5], 0, this.l2_1), su.t.FromArrayToRef(uu[6], 0, this.l20), su.t.FromArrayToRef(uu[7], 0, this.l21), su.t.FromArrayToRef(uu[8], 0, this.l22), this
      }
      updateFromFloatsArray(uu) {
        return su.t.FromFloatsToRef(uu[0], uu[1], uu[2], this.l00), su.t.FromFloatsToRef(uu[3], uu[4], uu[5], this.l1_1), su.t.FromFloatsToRef(uu[6], uu[7], uu[8], this.l10), su.t.FromFloatsToRef(uu[9], uu[10], uu[11], this.l11), su.t.FromFloatsToRef(uu[12], uu[13], uu[14], this.l2_2), su.t.FromFloatsToRef(uu[15], uu[16], uu[17], this.l2_1), su.t.FromFloatsToRef(uu[18], uu[19], uu[20], this.l20), su.t.FromFloatsToRef(uu[21], uu[22], uu[23], this.l21), su.t.FromFloatsToRef(uu[24], uu[25], uu[26], this.l22), this
      }
      static FromArray(uu) {
        return (new qu).updateFromArray(uu)
      }
      static FromPolynomial(uu) {
        const Eu = new qu;
        return Eu.l00 = uu.xx.scale(.376127).add(uu.yy.scale(.376127)).add(uu.zz.scale(.376126)), Eu.l1_1 = uu.y.scale(.977204), Eu.l10 = uu.z.scale(.977204), Eu.l11 = uu.x.scale(.977204), Eu.l2_2 = uu.xy.scale(1.16538), Eu.l2_1 = uu.yz.scale(1.16538), Eu.l20 = uu.zz.scale(1.34567).subtract(uu.xx.scale(.672834)).subtract(uu.yy.scale(.672834)), Eu.l21 = uu.zx.scale(1.16538), Eu.l22 = uu.xx.scale(1.16538).subtract(uu.yy.scale(1.16538)), Eu.l1_1.scaleInPlace(-1), Eu.l11.scaleInPlace(-1), Eu.l2_1.scaleInPlace(-1), Eu.l21.scaleInPlace(-1), Eu.scaleInPlace(Math.PI), Eu
      }
    }
    class fu {
      constructor() {
        this.x = su.t.Zero(), this.y = su.t.Zero(), this.z = su.t.Zero(), this.xx = su.t.Zero(), this.yy = su.t.Zero(), this.zz = su.t.Zero(), this.xy = su.t.Zero(), this.yz = su.t.Zero(), this.zx = su.t.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = qu.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(uu) {
        su.m.dO[0].T6(uu.r, uu.g, uu.b);
        const Eu = su.m.dO[0];
        this.xx.addInPlace(Eu), this.yy.addInPlace(Eu), this.zz.addInPlace(Eu)
      }
      scaleInPlace(uu) {
        this.x.scaleInPlace(uu), this.y.scaleInPlace(uu), this.z.scaleInPlace(uu), this.xx.scaleInPlace(uu), this.yy.scaleInPlace(uu), this.zz.scaleInPlace(uu), this.yz.scaleInPlace(uu), this.zx.scaleInPlace(uu), this.xy.scaleInPlace(uu)
      }
      updateFromHarmonics(uu) {
        return this._harmonics = uu, this.x.yJ(uu.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.yJ(uu.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.yJ(uu.l10), this.z.scaleInPlace(1.02333), this.xx.yJ(uu.l00), su.m.dO[0].yJ(uu.l20).scaleInPlace(.247708), su.m.dO[1].yJ(uu.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).Qsu(su.m.dO[0]).addInPlace(su.m.dO[1]), this.yy.yJ(uu.l00), this.yy.scaleInPlace(.886277).Qsu(su.m.dO[0]).Qsu(su.m.dO[1]), this.zz.yJ(uu.l00), su.m.dO[0].yJ(uu.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(su.m.dO[0]), this.yz.yJ(uu.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.yJ(uu.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.yJ(uu.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(uu) {
        return (new fu).updateFromHarmonics(uu)
      }
      static FromArray(uu) {
        const Eu = new fu;
        return su.t.FromArrayToRef(uu[0], 0, Eu.x), su.t.FromArrayToRef(uu[1], 0, Eu.y), su.t.FromArrayToRef(uu[2], 0, Eu.z), su.t.FromArrayToRef(uu[3], 0, Eu.xx), su.t.FromArrayToRef(uu[4], 0, Eu.yy), su.t.FromArrayToRef(uu[5], 0, Eu.zz), su.t.FromArrayToRef(uu[6], 0, Eu.yz), su.t.FromArrayToRef(uu[7], 0, Eu.zx), su.t.FromArrayToRef(uu[8], 0, Eu.xy), Eu
      }
    }
  },
  40699: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => vu,
      f: () => Vu
    });
    var su = ju(40255),
      Uu = ju(37514),
      Zu = ju(37494),
      Xu = ju(40399),
      lu = ju(40668),
      qu = ju(40706),
      fu = ju(40393),
      Cu = ju(40574),
      bu = ju(40390);
    class cu {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new Zu.t(0, 0, 0), this._diffPositionForCollisions = new Zu.t(0, 0, 0), this._collisionResponse = !0
      }
    }
    var Nu, Ou, Yu, hu = ju(40153),
      Du = ju(40326),
      gu = ju(40583),
      Mu = ju(37680),
      eu = ju(37496),
      Gu = ju(40475),
      pu = ju(39032),
      wu = ju(40258),
      Ju = ju(40168),
      du = ju(37532);

    function au(uu, Eu) {
      return uu - Math.floor(uu / Eu) * Eu
    }

    function Pu(uu, Eu, ju) {
      uu instanceof Float32Array ? Zu.e.FromArrayToRef(uu, Eu, ju) : ju.T6((0, Du.e)(uu[Eu]), (0, Du.e)(uu[Eu + 1]), (0, Du.e)(uu[Eu + 2]), (0, Du.e)(uu[Eu + 3]), (0, Du.e)(uu[Eu + 4]), (0, Du.e)(uu[Eu + 5]), (0, Du.e)(uu[Eu + 6]), (0, Du.e)(uu[Eu + 7]), (0, Du.e)(uu[Eu + 8]), (0, Du.e)(uu[Eu + 9]), (0, Du.e)(uu[Eu + 10]), (0, Du.e)(uu[Eu + 11]), (0, Du.e)(uu[Eu + 12]), (0, Du.e)(uu[Eu + 13]), (0, Du.e)(uu[Eu + 14]), (0, Du.e)(uu[Eu + 15]))
    }

    function ou(uu, Eu, ju, su, Uu, lu, qu, fu, Cu) {
      const bu = ju.texture,
        cu = bu?.getInternalTexture(),
        Nu = cu?._bufferView;
      if (!(Nu instanceof Float32Array) && !(Nu instanceof Uint16Array)) return pu.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const Ou = bu.getSize(),
        Yu = function(uu, Eu) {
          const ju = uu.y - uu.x + 1,
            su = Eu * uu.w / ju,
            Uu = su < 1 ? 0 : 1,
            Zu = ju - Uu;
          let Xu = au(su - Math.floor(su), 1) * Zu;
          return Xu = au(Xu + uu.z, Zu), Math.floor(Xu) + uu.x + Uu
        }(su, ju.time);
      if (!isFinite(Yu) || Yu < 0 || Yu >= Ou.height) return pu.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const hu = Zu.m.dO[0],
        Du = Zu.m.Matrix[0],
        gu = Zu.m.Matrix[1],
        Mu = Yu * Ou.width * 4,
        eu = Eu === Xu.j.NormalKind ? Zu.t.TransformNormalFromFloatsToRef : Zu.t.TransformCoordinatesFromFloatsToRef;
      for (let Zu = 0, Xu = 0; Zu < uu.length; Zu += 3, Xu += 4) {
        let Eu, ju;
        for (Du.reset(), Eu = 0; Eu < 4 && Eu < Cu; Eu++) ju = lu[Xu + Eu], ju > 0 && (Pu(Nu, Mu + 16 * Math.floor(Uu[Xu + Eu]), gu), gu.scaleAndAddToRef(ju, Du));
        if (qu && fu)
          for (Eu = 0; Eu < 4 && Eu + 4 < Cu; Eu++) ju = fu[Xu + Eu], ju > 0 && (Pu(Nu, Mu + 16 * Math.floor(qu[Xu + Eu]), gu), gu.scaleAndAddToRef(ju, Du));
        eu(uu[Zu], uu[Zu + 1], uu[Zu + 2], Du, hu), hu.toArray(uu, Zu)
      }
      return !0
    }
    class ku {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = Zu.t.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class mu {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new ku, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new cu, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let vu = (() => {
        var uu;
        let Eu, cu = qu.e,
          Nu = [];
        return uu = class extends cu {
          static get BILLBOARDMODE_NONE() {
            return qu.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return qu.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return qu.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return qu.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return qu.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return qu.e.BILLBOARDMODE_USE_POSITION
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
          set fc(uu) {
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
            const Eu = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = uu, (1 === Eu && 1 !== uu || 1 !== Eu && 1 === uu) && this._markSubMeshesAsDirty((uu => {
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
            this._internalAbstractMeshDataInfo._material !== uu && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = uu, uu && uu.meshMap && (uu.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.iG && (this.resetDrawCache(void 0, null == uu), this._unBindEffect()))
          }
          getMaterialForRenderPass(uu) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[uu]
          }
          setMaterialForRenderPass(uu, Eu) {
            this.resetDrawCache(uu), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ju = this._internalAbstractMeshDataInfo._materialForRenderPass[uu];
            ju?.meshMap?.[this.uniqueId] && (ju.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[uu] = Eu, Eu && Eu.meshMap && (Eu.meshMap[this.uniqueId] = this)
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
            const Eu = this._internalAbstractMeshDataInfo._skeleton;
            Eu && Eu.needInitialSkinMatrix && Eu._unregisterMeshWithPoseMatrix(this), uu && uu.needInitialSkinMatrix && uu._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = uu, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(Eu) {
            var ju;
            let su = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(Eu, su, !1), ju = this, this._internalAbstractMeshDataInfo = new mu, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = uu.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new Uu.d, this.onCollisionPositionChangeObservable = new Uu.d, this.onMaterialChangedObservable = new Uu.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.VY = uu.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = Mu.c.Red(), this.outlineWidth = .02, this.overlayColor = Mu.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.JO = !1, this.PO = !1, this.actionManager = null, this.ellipsoid = new Zu.t(.5, 1, .5), this.ellipsoidOffset = new Zu.t(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new Mu.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                KV: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new Uu.d, this._onCollisionPositionChange = function(uu, Eu) {
                let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Eu.subtractToRef(ju._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ju._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ju._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > Ju.d.CollisionsEpsilon && ju.position.addInPlace(ju._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), su && ju.onCollideObservable.notifyObservers(su), ju.onCollisionPositionChangeObservable.notifyObservers(ju.position)
              }, su = this.hV(), this.layerMask = su.defaultRenderableLayerMask, su.hsu(this), this._resyncLightSources(), this._uniformBuffer = new bu.d(this.hV().wO(), void 0, void 0, Eu, !this.hV().wO().isWebGPU), this._buildUniformLayout(), su.performancePriority) {
              case 2:
                this.PO = !0;
              case 1:
                this.JO = !0, this.VY = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(uu) {
            const Eu = this._uniformBuffer;
            Eu.y_("world", uu), Eu.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), Eu.update()
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
            let Eu = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            Eu += ", # of submeshes: " + (this.iG ? this.iG.length : 0);
            const ju = this._internalAbstractMeshDataInfo._skeleton;
            return ju && (Eu += ", skeleton: " + ju.name), uu && (Eu += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], Eu += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.KV ? "YES" : "NO")), Eu
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== qu.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(uu) {
            let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (Eu || this.actionManager.isRecursive)) {
              if (!uu) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(uu)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(uu, !1) : null
          }
          _releaseRenderPassId(uu) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.iG) {
              for (const uu of this.iG) uu._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const uu of this.hV().lights) uu.isEnabled() && uu.canAffectMesh(this) && this._lightSources.push(uu);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(uu) {
            const Eu = uu.isEnabled() && uu.canAffectMesh(this),
              ju = this._lightSources.indexOf(uu);
            let su = !1;
            if (-1 === ju) {
              if (!Eu) return;
              this._lightSources.push(uu)
            } else {
              if (Eu) return;
              su = !0, this._lightSources.splice(ju, 1)
            }
            this._markSubMeshesAsLightDirty(su)
          }
          _unBindEffect() {
            for (const uu of this.iG) uu.setEffect(null)
          }
          _removeLightSource(uu, Eu) {
            const ju = this._lightSources.indexOf(uu); - 1 !== ju && (this._lightSources.splice(ju, 1), this._markSubMeshesAsLightDirty(Eu))
          }
          _markSubMeshesAsDirty(uu) {
            if (this.iG)
              for (const Eu of this.iG)
                for (let ju = 0; ju < Eu._drawWrappers.length; ++ju) {
                  const su = Eu._drawWrappers[ju];
                  su && su.defines && su.defines.markAllAsDirty && uu(su.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((Eu => Eu.markAsLightDirty(uu)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((uu => uu.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((uu => uu.markAsMiscDirty()))
          }
          tEu(uu) {
            return this._currentRenderId = Number.MAX_VALUE, super.tEu(uu), this._isDirty = !0, this
          }
          resetDrawCache(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.iG)
              for (const ju of this.iG) ju.resetDrawCache(uu, Eu)
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
          Ysu() {
            return null
          }
          getVerticesData(uu) {
            return null
          }
          setVerticesData(uu, Eu, ju, su) {
            return this
          }
          updateVerticesData(uu, Eu, ju, su) {
            return this
          }
          setIndices(uu, Eu) {
            return this
          }
          isVerticesDataPresent(uu) {
            return !1
          }
          EW() {
            return this._masterMesh ? this._masterMesh.EW() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.EW()
          }
          setBoundingInfo(uu) {
            return this._boundingInfo = uu, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(uu, Eu, ju) {
            return this._boundingInfo = new Cu.c(uu, Eu, ju), this._boundingInfo
          }
          normalizeToUnitCube() {
            let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(uu, Eu, ju)
          }
          get useBones() {
            return this.skeleton && this.hV().skeletonsEnabled && this.isVerticesDataPresent(Xu.j.MatricesIndicesKind) && this.isVerticesDataPresent(Xu.j.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(uu) {}
          _activate(uu, Eu) {
            return this._renderId = uu, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === qu.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get JV() {
            return !1
          }
          get fUu() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(uu, Eu, ju) {
            return this.position.addInPlace(this.calcMovePOV(uu, Eu, ju)), this
          }
          calcMovePOV(uu, Eu, ju) {
            const su = new Zu.e;
            (this.rotationQuaternion ? this.rotationQuaternion : Zu.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(su);
            const Uu = Zu.t.Zero(),
              Xu = this.definedFacingForward ? -1 : 1;
            return Zu.t.TransformCoordinatesFromFloatsToRef(uu * Xu, Eu, ju * Xu, su, Uu), Uu
          }
          rotatePOV(uu, Eu, ju) {
            return this.rotation.addInPlace(this.calcRotatePOV(uu, Eu, ju)), this
          }
          calcRotatePOV(uu, Eu, ju) {
            const su = this.definedFacingForward ? 1 : -1;
            return new Zu.t(uu * su, Eu, ju * su)
          }
          _refreshBoundingInfo(uu, Eu) {
            if (uu) {
              const ju = (0, gu.f)(uu, 0, this.getTotalVertices(), Eu);
              this._boundingInfo ? this._boundingInfo.reConstruct(ju.minimum, ju.maximum) : this._boundingInfo = new Cu.c(ju.minimum, ju.maximum)
            }
            if (this.iG)
              for (let ju = 0; ju < this.iG.length; ju++) this.iG[ju].refreshBoundingInfo(uu);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(uu) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(uu.minimum, uu.maximum) : this._boundingInfo = new Cu.c(uu.minimum, uu.maximum), this.iG)
              for (let Eu = 0; Eu < this.iG.length; Eu++) this.iG[Eu].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(uu, Eu, ju, su, Uu, lu, qu) {
            ! function(uu, Eu, ju, su, Uu, lu, qu) {
              const fu = Zu.m.dO[0],
                Cu = Zu.m.Matrix[0],
                bu = Zu.m.Matrix[1],
                cu = Eu === Xu.j.NormalKind ? Zu.t.TransformNormalFromFloatsToRef : Zu.t.TransformCoordinatesFromFloatsToRef;
              for (let Xu = 0, Nu = 0; Xu < uu.length; Xu += 3, Nu += 4) {
                let Eu, Ou;
                for (Cu.reset(), Eu = 0; Eu < 4; Eu++) Ou = Uu[Nu + Eu], Ou > 0 && (Zu.e.FromFloat32ArrayToRefScaled(ju, Math.floor(16 * su[Nu + Eu]), Ou, bu), Cu.addToSelf(bu));
                if (lu && qu)
                  for (Eu = 0; Eu < 4; Eu++) Ou = qu[Nu + Eu], Ou > 0 && (Zu.e.FromFloat32ArrayToRefScaled(ju, Math.floor(16 * lu[Nu + Eu]), Ou, bu), Cu.addToSelf(bu));
                cu(uu[Xu], uu[Xu + 1], uu[Xu + 2], Cu, fu), fu.toArray(uu, Xu)
              }
            }(uu, Eu, ju, su, Uu, lu, qu)
          }
          _getData(Eu, ju) {
            let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xu.j.PositionKind;
            const Uu = Eu.cache,
              lu = uu => {
                if (Uu) {
                  const Eu = Uu._vertexData || (Uu._vertexData = {});
                  return Eu[uu] || this.copyVerticesData(uu, Eu), Eu[uu]
                }
                return this.getVerticesData(uu)
              };
            if (ju || (ju = lu(su)), !ju) return null;
            Uu ? (Uu._outputData ? Uu._outputData.set(ju) : Uu._outputData = new Float32Array(ju), ju = Uu._outputData) : (Eu.applyMorph && this.morphTargetManager || Eu.applySkeleton && this.skeleton || Eu.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ju = ju.slice()), Eu.applyMorph && this.morphTargetManager && function(uu, Eu, ju) {
              let su;
              switch (Eu) {
                case Xu.j.PositionKind:
                  su = uu => uu.getPositions();
                  break;
                case Xu.j.NormalKind:
                  su = uu => uu.getNormals();
                  break;
                case Xu.j.TangentKind:
                  su = uu => uu.getTangents();
                  break;
                case Xu.j.UVKind:
                  su = uu => uu.getUVs();
                  break;
                case Xu.j.UV2Kind:
                  su = uu => uu.getUV2s();
                  break;
                case Xu.j.ColorKind:
                  su = uu => uu.getColors();
                  break;
                default:
                  return
              }
              for (let Uu = 0; Uu < uu.length; Uu++) {
                let Eu = uu[Uu];
                for (let Zu = 0; Zu < ju.numTargets; Zu++) {
                  const Xu = ju.getTarget(Zu),
                    lu = Xu.influence;
                  if (0 !== lu) {
                    const ju = su(Xu);
                    ju && (Eu += (ju[Uu] - uu[Uu]) * lu)
                  }
                }
                uu[Uu] = Eu
              }
            }(ju, su, this.morphTargetManager);
            const qu = this.bakedVertexAnimationManager;
            let fu = !1;
            if (Eu.applyBakedVertexAnimation && qu?.isEnabled) {
              const uu = lu(Xu.j.MatricesIndicesKind),
                Uu = lu(Xu.j.MatricesWeightsKind);
              if (Uu && uu) {
                const Zu = this.numBoneInfluencers > 4,
                  Cu = Zu ? lu(Xu.j.MatricesIndicesExtraKind) : null,
                  bu = Zu ? lu(Xu.j.MatricesWeightsExtraKind) : null;
                fu = ou(ju, su, qu, Eu.bakedVertexAnimationSettings ?? qu.animationParameters, uu, Uu, Cu, bu, this.numBoneInfluencers)
              }
            }
            if (!fu && Eu.applySkeleton && this.skeleton) {
              const Eu = lu(Xu.j.MatricesIndicesKind),
                Uu = lu(Xu.j.MatricesWeightsKind);
              if (Uu && Eu) {
                const Zu = this.numBoneInfluencers > 4,
                  qu = Zu ? lu(Xu.j.MatricesIndicesExtraKind) : null,
                  fu = Zu ? lu(Xu.j.MatricesWeightsExtraKind) : null,
                  Cu = this.skeleton.getTransformMatrices(this);
                uu._ApplySkeleton(ju, su, Cu, Eu, Uu, qu, fu)
              }
            }
            if (!1 !== Eu.updatePositionsArray && su === Xu.j.PositionKind) {
              const uu = this._internalAbstractMeshDataInfo._positions || [],
                Eu = uu.length;
              if (uu.length = ju.length / 3, Eu < uu.length)
                for (let ju = Eu; ju < uu.length; ju++) uu[ju] = new Zu.t;
              for (let su = 0, Uu = 0; su < uu.length; su++, Uu += 3) uu[su].T6(ju[Uu], ju[Uu + 1], ju[Uu + 2]);
              this._internalAbstractMeshDataInfo._positions = uu
            }
            return ju
          }
          getNormalsData() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: uu,
              applyMorph: Eu,
              updatePositionsArray: !1
            }, null, Xu.j.NormalKind)
          }
          wT() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: uu,
              applyMorph: Eu,
              updatePositionsArray: !1
            }, ju, Xu.j.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new Cu.c(Zu.t.Zero(), Zu.t.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(uu) {
            if (!this.iG) return this;
            const Eu = this.iG.length;
            for (let ju = 0; ju < Eu; ju++) {
              const su = this.iG[ju];
              (Eu > 1 || !su.IsGlobal) && su.updateBoundingInfo(uu)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.PO || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(uu) {
            return this.EW().isInFrustum(uu, this.cullingStrategy)
          }
          isCompletelyInFrustum(uu) {
            return this.EW().isCompletelyInFrustum(uu)
          }
          sUu(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = arguments.length > 2 ? arguments[2] : void 0;
            const su = this.EW(),
              Uu = uu.EW();
            if (su.intersects(Uu, Eu)) return !0;
            if (ju)
              for (const Zu of this.getChildMeshes())
                if (Zu.sUu(uu, Eu, !0)) return !0;
            return !1
          }
          intersectsPoint(uu) {
            return this.EW().intersectsPoint(uu)
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
            let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ju = this.hV().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ju.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ju.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, uu, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, Eu), this
          }
          _collideForSubMesh(uu, Eu, ju) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!uu._lastColliderWorldVertices || !uu._lastColliderTransformMatrix.equals(Eu)) {
              uu._lastColliderTransformMatrix = Eu.clone(), uu._lastColliderWorldVertices = [], uu._trianglePlanes = [];
              const ju = uu.verticesStart,
                su = uu.verticesStart + uu.verticesCount;
              for (let Uu = ju; Uu < su; Uu++) uu._lastColliderWorldVertices.push(Zu.t.TransformCoordinates(this._positions[Uu], Eu))
            }
            return ju._collide(uu._trianglePlanes, uu._lastColliderWorldVertices, this.Ysu(), uu.indexStart, uu.indexStart + uu.indexCount, uu.verticesStart, !!uu.oO(), this, this._shouldConvertRHS(), 7 === uu.oO()?.fillMode), this
          }
          _processCollisionsForSubMeshes(uu, Eu) {
            const ju = this._scene.getCollidingSubMeshCandidates(this, uu),
              su = ju.length;
            for (let Uu = 0; Uu < su; Uu++) {
              const Zu = ju.data[Uu];
              su > 1 && !Zu._checkCollision(uu) || this._collideForSubMesh(Zu, Eu, uu)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(uu) {
            if (!this.EW()._checkCollision(uu)) return this;
            const Eu = Zu.m.Matrix[0],
              ju = Zu.m.Matrix[1];
            return Zu.e.ScalingToRef(1 / uu._radius.x, 1 / uu._radius.y, 1 / uu._radius.z, Eu), this.worldMatrixFromCache.multiplyToRef(Eu, ju), this._processCollisionsForSubMeshes(uu, ju), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(uu, Eu, ju) {
            let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              Uu = arguments.length > 4 ? arguments[4] : void 0,
              Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const lu = new fu.b,
              qu = this.getClassName(),
              Cu = "InstancedLinesMesh" === qu || "LinesMesh" === qu || "GreasedLineMesh" === qu ? this.intersectionThreshold : 0,
              bu = this.EW();
            if (!this.iG) return lu;
            if (!Xu && (!uu.intersectsSphere(bu.Isu, Cu) || !uu.intersectsBox(bu.boundingBox, Cu))) return lu;
            if (su) return lu.hit = !Xu, lu.pickedMesh = Xu ? null : this, lu.distance = Xu ? 0 : Zu.t.Distance(uu.origin, bu.Isu.center), lu.subMeshId = 0, lu;
            if (!this._generatePointsArray()) return lu;
            let cu = null;
            const Nu = this._scene.getIntersectingSubMeshCandidates(this, uu),
              Ou = Nu.length;
            let Yu = !1;
            for (let Zu = 0; Zu < Ou; Zu++) {
              const uu = Nu.data[Zu].oO();
              if (uu && (7 == uu.fillMode || 0 == uu.fillMode || 1 == uu.fillMode || 2 == uu.fillMode || 4 == uu.fillMode)) {
                Yu = !0;
                break
              }
            }
            if (!Yu) return lu.hit = !0, lu.pickedMesh = this, lu.distance = Zu.t.Distance(uu.origin, bu.Isu.center), lu.subMeshId = -1, lu;
            for (let Zu = 0; Zu < Ou; Zu++) {
              const su = Nu.data[Zu];
              if (Ou > 1 && !Xu && !su.canIntersects(uu)) continue;
              const Uu = su.intersects(uu, this._positions, this.Ysu(), Eu, ju);
              if (Uu && (Eu || !cu || Uu.distance < cu.distance) && (cu = Uu, cu.subMeshId = su._id, cu._internalSubMeshId = Zu, Eu)) break
            }
            if (cu) {
              const Eu = Uu ?? this.getWorldMatrix(),
                ju = Zu.m.dO[0],
                su = Zu.m.dO[1];
              Zu.t.TransformCoordinatesToRef(uu.origin, Eu, ju), uu.direction.scaleToRef(cu.distance, su);
              const Xu = Zu.t.TransformNormal(su, Eu).addInPlace(ju);
              return lu.hit = !0, lu.distance = Zu.t.Distance(ju, Xu), lu.pickedPoint = Xu, lu.pickedMesh = this, lu.bu = cu.bu || 0, lu.bv = cu.bv || 0, lu.subMeshFaceId = cu.faceId, lu.faceId = cu.faceId + Nu.data[cu._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), lu.subMeshId = cu.subMeshId, lu
            }
            return lu
          }
          clone(uu, Eu, ju) {
            return null
          }
          releaseSubMeshes() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.iG)
              for (; this.iG.length;) this.iG[0].dispose(uu);
            else this.iG = [];
            return this
          }
          dispose(uu) {
            let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const su = this.hV();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), su.freeActiveMeshes(), su.freeRenderingGroups(), su.renderingManager.maintainStateBetweenFrames && su.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((uu => uu !== this && uu.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), Eu = 0; Eu < this._intersectionsInProgress.length; Eu++) {
              const uu = this._intersectionsInProgress[Eu],
                ju = uu._intersectionsInProgress.indexOf(this);
              uu._intersectionsInProgress.splice(ju, 1)
            }
            this._intersectionsInProgress.length = 0;
            const Uu = su.lights;
            for (const Xu of Uu) {
              let uu = Xu.includedOnlyMeshes.indexOf(this); - 1 !== uu && Xu.includedOnlyMeshes.splice(uu, 1), uu = Xu.excludedMeshes.indexOf(this), -1 !== uu && Xu.excludedMeshes.splice(uu, 1);
              const Eu = Xu.getShadowGenerators();
              if (Eu) {
                const ju = Eu.values();
                for (let Eu = ju.next(); !0 !== Eu.done; Eu = ju.next()) {
                  const ju = Eu.value.getShadowMap();
                  ju && ju.renderList && (uu = ju.renderList.indexOf(this), -1 !== uu && ju.renderList.splice(uu, 1))
                }
              }
            }
            this.releaseSubMeshes(su._isDisposing);
            const Zu = su.wO();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, Zu.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), Zu.wipeCaches(), su.rV(this), this._parentContainer) {
              const uu = this._parentContainer.meshes.indexOf(this);
              uu > -1 && this._parentContainer.meshes.splice(uu, 1), this._parentContainer = null
            }
            if (ju && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !uu)
              for (Eu = 0; Eu < su.WG.length; Eu++) su.WG[Eu].emitter === this && (su.WG[Eu].dispose(), Eu--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(uu, ju)
          }
          _initFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            uu.facetNormals || (uu.facetNormals = []), uu.facetPositions || (uu.facetPositions = []), uu.facetPartitioning || (uu.facetPartitioning = new Array), uu.facetNb = this.Ysu().length / 3 | 0, uu.partitioningSubdivisions = uu.partitioningSubdivisions ? uu.partitioningSubdivisions : 10, uu.partitioningBBoxRatio = uu.partitioningBBoxRatio ? uu.partitioningBBoxRatio : 1.01;
            for (let Eu = 0; Eu < uu.facetNb; Eu++) uu.facetNormals[Eu] = Zu.t.Zero(), uu.facetPositions[Eu] = Zu.t.Zero();
            return uu.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            uu.facetDataEnabled || this._initFacetData();
            const Eu = this.getVerticesData(Xu.j.PositionKind),
              ju = this.Ysu(),
              su = this.getVerticesData(Xu.j.NormalKind)?.slice(),
              Uu = this.EW();
            if (uu.facetDepthSort && !uu.facetDepthSortEnabled) {
              if (uu.facetDepthSortEnabled = !0, ju instanceof Uint16Array) uu.depthSortedIndices = new Uint16Array(ju);
              else if (ju instanceof Uint32Array) uu.depthSortedIndices = new Uint32Array(ju);
              else {
                let Eu = !1;
                for (let uu = 0; uu < ju.length; uu++)
                  if (ju[uu] > 65535) {
                    Eu = !0;
                    break
                  } uu.depthSortedIndices = Eu ? new Uint32Array(ju) : new Uint16Array(ju)
              }
              if (uu.facetDepthSortFunction = function(uu, Eu) {
                  return Eu.sqDistance - uu.sqDistance
                }, !uu.facetDepthSortFrom) {
                const Eu = this.hV().activeCamera;
                uu.facetDepthSortFrom = Eu ? Eu.position : Zu.t.Zero()
              }
              uu.depthSortedFacets = [];
              for (let Eu = 0; Eu < uu.facetNb; Eu++) {
                const ju = {
                  ind: 3 * Eu,
                  sqDistance: 0
                };
                uu.depthSortedFacets.push(ju)
              }
              uu.invertedMatrix = Zu.e.Identity(), uu.facetDepthSortOrigin = Zu.t.Zero()
            }
            uu.bbSize.x = Uu.maximum.x - Uu.minimum.x > eu.c ? Uu.maximum.x - Uu.minimum.x : eu.c, uu.bbSize.y = Uu.maximum.y - Uu.minimum.y > eu.c ? Uu.maximum.y - Uu.minimum.y : eu.c, uu.bbSize.z = Uu.maximum.z - Uu.minimum.z > eu.c ? Uu.maximum.z - Uu.minimum.z : eu.c;
            let qu = uu.bbSize.x > uu.bbSize.y ? uu.bbSize.x : uu.bbSize.y;
            if (qu = qu > uu.bbSize.z ? qu : uu.bbSize.z, uu.subDiv.max = uu.partitioningSubdivisions, uu.subDiv.X = Math.floor(uu.subDiv.max * uu.bbSize.x / qu), uu.subDiv.Y = Math.floor(uu.subDiv.max * uu.bbSize.y / qu), uu.subDiv.Z = Math.floor(uu.subDiv.max * uu.bbSize.z / qu), uu.subDiv.X = uu.subDiv.X < 1 ? 1 : uu.subDiv.X, uu.subDiv.Y = uu.subDiv.Y < 1 ? 1 : uu.subDiv.Y, uu.subDiv.Z = uu.subDiv.Z < 1 ? 1 : uu.subDiv.Z, uu.facetParameters.facetNormals = this.getFacetLocalNormals(), uu.facetParameters.facetPositions = this.getFacetLocalPositions(), uu.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), uu.facetParameters.bInfo = Uu, uu.facetParameters.bbSize = uu.bbSize, uu.facetParameters.subDiv = uu.subDiv, uu.facetParameters.ratio = this.partitioningBBoxRatio, uu.facetParameters.depthSort = uu.facetDepthSort, uu.facetDepthSort && uu.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(uu.invertedMatrix), Zu.t.TransformCoordinatesToRef(uu.facetDepthSortFrom, uu.invertedMatrix, uu.facetDepthSortOrigin), uu.facetParameters.distanceTo = uu.facetDepthSortOrigin), uu.facetParameters.depthSortedFacets = uu.depthSortedFacets, su && lu.b.ComputeNormals(Eu, ju, su, uu.facetParameters), uu.facetDepthSort && uu.facetDepthSortEnabled) {
              uu.depthSortedFacets.sort(uu.facetDepthSortFunction);
              const Eu = uu.depthSortedIndices.length / 3 | 0;
              for (let su = 0; su < Eu; su++) {
                const Eu = uu.depthSortedFacets[su].ind;
                uu.depthSortedIndices[3 * su] = ju[Eu], uu.depthSortedIndices[3 * su + 1] = ju[Eu + 1], uu.depthSortedIndices[3 * su + 2] = ju[Eu + 2]
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
            const Eu = Zu.t.Zero();
            return this.getFacetPositionToRef(uu, Eu), Eu
          }
          getFacetPositionToRef(uu, Eu) {
            const ju = this.getFacetLocalPositions()[uu],
              su = this.getWorldMatrix();
            return Zu.t.TransformCoordinatesToRef(ju, su, Eu), this
          }
          getFacetNormal(uu) {
            const Eu = Zu.t.Zero();
            return this.getFacetNormalToRef(uu, Eu), Eu
          }
          getFacetNormalToRef(uu, Eu) {
            const ju = this.getFacetLocalNormals()[uu];
            return Zu.t.TransformNormalToRef(ju, this.getWorldMatrix(), Eu), this
          }
          getFacetsAtLocalCoordinates(uu, Eu, ju) {
            const su = this.EW(),
              Uu = this._internalAbstractMeshDataInfo._facetData,
              Zu = Math.floor((uu - su.minimum.x * Uu.partitioningBBoxRatio) * Uu.subDiv.X * Uu.partitioningBBoxRatio / Uu.bbSize.x),
              Xu = Math.floor((Eu - su.minimum.y * Uu.partitioningBBoxRatio) * Uu.subDiv.Y * Uu.partitioningBBoxRatio / Uu.bbSize.y),
              lu = Math.floor((ju - su.minimum.z * Uu.partitioningBBoxRatio) * Uu.subDiv.Z * Uu.partitioningBBoxRatio / Uu.bbSize.z);
            return Zu < 0 || Zu > Uu.subDiv.max || Xu < 0 || Xu > Uu.subDiv.max || lu < 0 || lu > Uu.subDiv.max ? null : Uu.facetPartitioning[Zu + Uu.subDiv.max * Xu + Uu.subDiv.max * Uu.subDiv.max * lu]
          }
          getClosestFacetAtCoordinates(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const lu = this.getWorldMatrix(),
              qu = Zu.m.Matrix[5];
            lu.invertToRef(qu);
            const fu = Zu.m.dO[8];
            Zu.t.TransformCoordinatesFromFloatsToRef(uu, Eu, ju, qu, fu);
            const Cu = this.getClosestFacetAtLocalCoordinates(fu.x, fu.y, fu.z, su, Uu, Xu);
            return su && Zu.t.TransformCoordinatesFromFloatsToRef(su.x, su.y, su.z, lu, su), Cu
          }
          getClosestFacetAtLocalCoordinates(uu, Eu, ju, su) {
            let Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Nu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              Ou = null;
            const Yu = this.getFacetLocalPositions(),
              hu = this.getFacetLocalNormals(),
              Du = this.getFacetsAtLocalCoordinates(uu, Eu, ju);
            if (!Du) return null;
            let gu, Mu, eu, Gu, pu = Number.MAX_VALUE;
            for (let wu = 0; wu < Du.length; wu++) Mu = Du[wu], eu = hu[Mu], Gu = Yu[Mu], lu = (uu - Gu.x) * eu.x + (Eu - Gu.y) * eu.y + (ju - Gu.z) * eu.z, (!cu || cu && Nu && lu >= 0 || cu && !Nu && lu <= 0) && (lu = eu.x * Gu.x + eu.y * Gu.y + eu.z * Gu.z, qu = -(eu.x * uu + eu.y * Eu + eu.z * ju - lu) / (eu.x * eu.x + eu.y * eu.y + eu.z * eu.z), fu = uu + eu.x * qu, Cu = Eu + eu.y * qu, bu = ju + eu.z * qu, Uu = fu - uu, Zu = Cu - Eu, Xu = bu - ju, gu = Uu * Uu + Zu * Zu + Xu * Xu, gu < pu && (pu = gu, Ou = Mu, su && (su.x = fu, su.y = Cu, su.z = bu)));
            return Ou
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const uu = this._internalAbstractMeshDataInfo._facetData;
            return uu.facetDataEnabled && (uu.facetDataEnabled = !1, uu.facetPositions = [], uu.facetNormals = [], uu.facetPartitioning = new Array, uu.facetParameters = {}, uu.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(uu, Eu) {
            return this
          }
          createNormals(uu) {
            const Eu = this.getVerticesData(Xu.j.PositionKind),
              ju = this.Ysu();
            let su;
            return su = this.isVerticesDataPresent(Xu.j.NormalKind) ? this.getVerticesData(Xu.j.NormalKind) : [], lu.b.ComputeNormals(Eu, ju, su, {
              useRightHandedSystem: this.hV().useRightHandedSystem
            }), this.setVerticesData(Xu.j.NormalKind, su, uu), this
          }
          async optimizeIndicesAsync() {
            const uu = this.Ysu();
            if (!uu) return this;
            const {
              OptimizeIndices: Eu
            } = await ju.e(356).then((() => ju(42830)));
            return Eu(uu), this.setIndices(uu, this.getTotalVertices()), this
          }
          alignWithNormal(uu, Eu) {
            Eu || (Eu = Gu.b.Y);
            const ju = Zu.m.dO[0],
              su = Zu.m.dO[1];
            return Zu.t.CrossToRef(Eu, uu, su), Zu.t.CrossToRef(uu, su, ju), this.rotationQuaternion ? Zu.i.RotationQuaternionFromAxisToRef(ju, uu, su, this.rotationQuaternion) : Zu.t.RotationFromAxisToRef(ju, uu, su, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, hu.h)("EdgesRenderer")
          }
          enableEdgesRendering(uu, Eu, ju) {
            throw (0, hu.h)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.WG.filter((uu => uu.emitter === this))
          }
        }, (() => {
          const ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(cu[Symbol.metadata] ?? null) : void 0;
          Eu = [wu.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, su.e)(uu, null, Eu, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: uu => "_ApplySkeleton" in uu,
              get: uu => uu._ApplySkeleton
            },
            metadata: ju
          }, null, Nu), ju && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ju
          })
        })(), uu.OCCLUSION_TYPE_NONE = ((0, su.g)(uu, Nu), 0), uu.OCCLUSION_TYPE_OPTIMISTIC = 1, uu.OCCLUSION_TYPE_STRICT = 2, uu.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, uu.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, uu.CULLINGSTRATEGY_STANDARD = 0, uu.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, uu.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, uu.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, uu.DefaultIsPickable = !0, uu
      })(),
      Ku = !1;

    function Vu() {
      Ku || (Ku = !0, (0, du.f)("BABYLON.AbstractMesh", vu))
    }(Nu = vu.prototype).createOrUpdateSubmeshesOctree ?? (Nu.createOrUpdateSubmeshesOctree = (0, hu.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (Ou = vu.prototype).getPhysicsImpostor ?? (Ou.getPhysicsImpostor = (0, hu.g)("AbstractMesh", "getPhysicsImpostor")), (Yu = vu.prototype).setPhysicsLinkWith ?? (Yu.setPhysicsLinkWith = (0, hu.g)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(vu.prototype, "occlusionRetryCount") || Object.defineProperty(vu.prototype, "occlusionRetryCount", (0, hu.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(vu.prototype, "occlusionType") || Object.defineProperty(vu.prototype, "occlusionType", (0, hu.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(vu.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(vu.prototype, "occlusionQueryAlgorithmType", (0, hu.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(vu.prototype, "isOccluded") || Object.defineProperty(vu.prototype, "isOccluded", (0, hu.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(vu.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(vu.prototype, "isOcclusionQueryInProgress", (0, hu.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(vu.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(vu.prototype, "forceRenderingWhenOccluded", (0, hu.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(vu.prototype, "occlusionForRenderPassId") || Object.defineProperty(vu.prototype, "occlusionForRenderPassId", (0, hu.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(vu.prototype, "decalMap") || Object.defineProperty(vu.prototype, "decalMap", (0, hu.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(vu.prototype, "Hr") || Object.defineProperty(vu.prototype, "Hr", (0, hu.d)("AbstractMesh", "Hr")), Object.getOwnPropertyDescriptor(vu.prototype, "physicsImpostor") || Object.defineProperty(vu.prototype, "physicsImpostor", (0, hu.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(vu.prototype, "showBoundingBox") || Object.defineProperty(vu.prototype, "showBoundingBox", (0, hu.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(vu.prototype, "edgesRenderer") || Object.defineProperty(vu.prototype, "edgesRenderer", (0, hu.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(vu.prototype, "renderOutline") || Object.defineProperty(vu.prototype, "renderOutline", (0, hu.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(vu.prototype, "renderOverlay") || Object.defineProperty(vu.prototype, "renderOverlay", (0, hu.d)("AbstractMesh", "renderOverlay"))
  },
  40676: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Du
    });
    var su = ju(37494),
      Uu = ju(37680),
      Zu = ju(40668),
      Xu = ju(40399),
      lu = ju(40556),
      qu = ju(40685),
      fu = ju(40574),
      Cu = ju(40356),
      bu = ju(39032),
      cu = ju(40281),
      Nu = ju(40583),
      Ou = ju(37506),
      Yu = ju(40693),
      hu = ju(40319);
    class Du {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(uu) {
        this._boundingBias ? this._boundingBias.yJ(uu) : this._boundingBias = uu.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(uu) {
        const Eu = new Du(Du.RandomId(), uu.hV());
        return Eu.applyToMesh(uu), Eu
      }
      get meshes() {
        return this._meshes
      }
      constructor(uu, Eu, ju) {
        let Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new su.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new su.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = Eu || Ou.b.LastCreatedScene, this._scene && (this.id = uu, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.wO(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = Uu, null !== Xu && (this._totalVertices = Xu), ju ? this.setAllVerticesData(ju, Uu) : null === Xu && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), Zu && (this.applyToMesh(Zu), Zu.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      hV() {
        return this._scene
      }
      wO() {
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
        for (const Eu in this._vertexBuffers) uu.add(this._vertexBuffers[Eu].getWrapperBuffer());
        uu.forEach((uu => {
          uu._rebuild()
        }))
      }
      setAllVerticesData(uu, Eu) {
        uu.applyToGeometry(this, Eu), this._notifyUpdate()
      }
      setVerticesData(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0;
        ju && Array.isArray(Eu) && (Eu = new Float32Array(Eu));
        const Uu = new Xu.j(this._engine, Eu, uu, {
          updatable: ju,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: su,
          label: "Geometry_" + this.id + "_" + uu
        });
        this.setVerticesBuffer(Uu)
      }
      removeVerticesData(uu) {
        this._vertexBuffers[uu] && (this._vertexBuffers[uu].dispose(), delete this._vertexBuffers[uu]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Uu = uu.getKind();
        this._vertexBuffers[Uu] && ju && this._vertexBuffers[Uu].dispose(), uu._buffer && uu._ownsBuffer && uu._buffer._increaseReferences(), this._vertexBuffers[Uu] = uu;
        const Zu = this._meshes,
          lu = Zu.length;
        if (Uu === Xu.j.PositionKind) {
          this._totalVertices = Eu ?? uu._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : uu.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ju = this._extend && this._extend.minimum || new su.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            Uu = this._extend && this._extend.maximum || new su.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let uu = 0; uu < lu; uu++) {
            const Eu = Zu[uu];
            Eu.buildBoundingInfo(ju, Uu), Eu._createGlobalSubMesh(Eu.isUnIndexed), Eu.computeWorldMatrix(!0), Eu.synchronizeInstances()
          }
        }
        this._notifyUpdate(Uu)
      }
      updateVerticesDataDirectly(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Uu = this.getVertexBuffer(uu);
        Uu && (Uu.updateDirectly(Eu, ju, su), this._notifyUpdate(uu))
      }
      updateVerticesData(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this.getVertexBuffer(uu);
        su && (su.update(Eu), uu === Xu.j.PositionKind && this._updateBoundingInfo(ju, Eu), this._notifyUpdate(uu))
      }
      _updateBoundingInfo(uu, Eu) {
        if (uu && this._updateExtend(Eu), this._resetPointsArrayCache(), uu) {
          const uu = this._meshes;
          for (const Eu of uu) {
            Eu.hasBoundingInfo ? Eu.EW().reConstruct(this._extend.minimum, this._extend.maximum) : Eu.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const uu = Eu.iG;
            for (const Eu of uu) Eu.refreshBoundingInfo()
          }
        }
      }
      _bind(uu, Eu, ju, su) {
        if (!uu) return;
        void 0 === Eu && (Eu = this._indexBuffer);
        const Uu = this.getVertexBuffers();
        if (!Uu) return;
        if (Eu != this._indexBuffer || !this._vertexArrayObjects && !su) return void this._engine.bindBuffers(Uu, Eu, uu, ju);
        const Zu = su || this._vertexArrayObjects,
          Xu = this._engine;
        Zu[uu.key] || (Zu[uu.key] = Xu.recordVertexArrayObject(Uu, Eu, uu, ju)), Xu.bindVertexArrayObject(Zu[uu.key], Eu)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(uu, Eu, ju) {
        const su = this.getVertexBuffer(uu);
        return su ? su.getFloatData(this._totalVertices, ju || Eu && 1 !== this._meshes.length) : null
      }
      copyVerticesData(uu, Eu) {
        const ju = this.getVertexBuffer(uu);
        if (!ju) return;
        Eu[uu] || (Eu[uu] = new Float32Array(this._totalVertices * ju.getSize()));
        const su = ju.getData();
        su && (0, hu.f)(su, ju.getSize(), ju.type, ju.byteOffset, ju.byteStride, ju.normalized, this._totalVertices, Eu[uu])
      }
      isVertexBufferUpdatable(uu) {
        const Eu = this._vertexBuffers[uu];
        return !!Eu && Eu.isUpdatable()
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
        let Eu;
        if (!this._vertexBuffers && this._delayInfo)
          for (Eu in this._delayInfo) uu.push(Eu);
        else
          for (Eu in this._vertexBuffers) uu.push(Eu);
        return uu
      }
      updateIndices(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const su = uu.length !== this._indices.length;
            if (ju || (this._indices = uu.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, uu, Eu), su)
              for (const uu of this._meshes) uu._createGlobalSubMesh(!0)
          } else this.setIndices(uu, null, !0)
      }
      setIndexBuffer(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = uu, this._totalVertices = Eu, this._totalIndices = ju, uu.is32Bits = null === su ? Eu > 65535 : su;
        for (const Uu of this._meshes) Uu._createGlobalSubMesh(!0), Uu.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = uu, this._indexBufferIsUpdatable = ju, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ju, "Geometry_" + this.id + "_IndexBuffer")), void 0 != Eu && (this._totalVertices = Eu);
        for (const Uu of this._meshes) Uu._createGlobalSubMesh(!su), Uu.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      Ysu(uu, Eu) {
        if (!this.isReady()) return null;
        const ju = this._indices;
        return Eu || uu && 1 !== this._meshes.length ? ju.slice() : ju
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        uu && this._vertexArrayObjects && this._vertexArrayObjects[uu.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[uu.key]), delete this._vertexArrayObjects[uu.key])
      }
      releaseForMesh(uu, Eu) {
        const ju = this._meshes,
          su = ju.indexOf(uu); - 1 !== su && (ju.splice(su, 1), this._vertexArrayObjects && uu._invalidateInstanceVertexArrayObject(), uu._geometry = null, 0 === ju.length && Eu && this.dispose())
      }
      applyToMesh(uu) {
        if (uu._geometry === this) return;
        const Eu = uu._geometry;
        Eu && Eu.releaseForMesh(uu), this._vertexArrayObjects && uu._invalidateInstanceVertexArrayObject();
        const ju = this._meshes;
        uu._geometry = this, uu._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ju.push(uu), this.isReady() ? this._applyToMesh(uu) : this._boundingInfo && uu.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!uu && (uu = this.getVerticesData(Xu.j.PositionKind), !uu)) return;
          this._extend = (0, Nu.f)(uu, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(uu) {
        for (const Eu in this._vertexBuffers) {
          const ju = this._vertexBuffers[Eu];
          ju._buffer.getBuffer() || ju.create(), Eu === Xu.j.PositionKind && (this._extend || this._updateExtend(), uu.buildBoundingInfo(this._extend.minimum, this._extend.maximum), uu._createGlobalSubMesh(uu.isUnIndexed), uu._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), uu._syncGeometryWithMorphTargetManager(), uu.synchronizeInstances()
      }
      _notifyUpdate(uu) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, uu), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const Eu of this._meshes) Eu._markSubMeshesAsAttributesDirty()
      }
      load(uu, Eu) {
        2 !== this.delayLoadState && (this.isReady() ? Eu && Eu() : (this.delayLoadState = 2, this._queueLoad(uu, Eu)))
      }
      _queueLoad(uu, Eu) {
        this.delayLoadingFile && (uu.addPendingData(this), (async () => {
          try {
            const ju = await uu._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void uu.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ju), this), this.delayLoadState = 1, this._delayInfo = [], uu.removePendingData(this);
            const su = this._meshes,
              Uu = su.length;
            for (let uu = 0; uu < Uu; uu++) this._applyToMesh(su[uu]);
            Eu && Eu()
          } catch (ju) {
            uu.removePendingData(this), uu.Gw || bu.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ju}`)
          }
        })())
      }
      toLeftHanded() {
        const uu = this.Ysu(!1);
        if (null != uu && uu.length > 0) {
          for (let Eu = 0; Eu < uu.length; Eu += 3) {
            const ju = uu[Eu + 0];
            uu[Eu + 0] = uu[Eu + 2], uu[Eu + 2] = ju
          }
          this.setIndices(uu)
        }
        const Eu = this.getVerticesData(Xu.j.PositionKind, !1);
        if (null != Eu && Eu.length > 0) {
          for (let uu = 0; uu < Eu.length; uu += 3) Eu[uu + 2] = -Eu[uu + 2];
          this.setVerticesData(Xu.j.PositionKind, Eu, !1)
        }
        const ju = this.getVerticesData(Xu.j.NormalKind, !1);
        if (null != ju && ju.length > 0) {
          for (let uu = 0; uu < ju.length; uu += 3) ju[uu + 2] = -ju[uu + 2];
          this.setVerticesData(Xu.j.NormalKind, ju, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const uu = this.getVerticesData(Xu.j.PositionKind);
        if (!uu || 0 === uu.length) return !1;
        for (let Eu = 3 * this._positionsCache.length, ju = this._positionsCache.length; Eu < uu.length; Eu += 3, ++ju) this._positionsCache[ju] = su.t.FromArray(uu, Eu);
        for (let Eu = 0, ju = 0; Eu < uu.length; Eu += 3, ++ju) this._positionsCache[ju].set(uu[0 + Eu], uu[1 + Eu], uu[2 + Eu]);
        return this._positionsCache.length = uu.length / 3, this._positions = this._positionsCache, !0
      }
      Gw() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ju in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ju]);
          this._vertexArrayObjects = {};
          const uu = this._meshes,
            Eu = uu.length;
          for (let ju = 0; ju < Eu; ju++) uu[ju]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const uu = this._meshes,
          Eu = uu.length;
        let ju;
        for (ju = 0; ju < Eu; ju++) this.releaseForMesh(uu[ju]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const su in this._vertexBuffers) this._vertexBuffers[su].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const uu = this._parentContainer.geometries.indexOf(this);
          uu > -1 && this._parentContainer.geometries.splice(uu, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(uu) {
        const Eu = new Du(uu, this._scene),
          ju = this.Ysu(void 0, !0);
        ju && Eu.setIndices(ju);
        let su, Uu = !1;
        for (su in this._vertexBuffers) {
          const uu = this.getVertexBuffer(su),
            ju = uu.getData();
          if (!ju) continue;
          const Zu = uu.isUpdatable(),
            lu = uu.getSize(),
            {
              type: qu,
              byteOffset: fu,
              byteStride: Cu,
              normalized: bu
            } = uu;
          Uu = Uu || Zu;
          let cu = this._totalVertices;
          if (uu.getIsInstanced()) {
            let uu;
            uu = ju instanceof Array ? 4 * ju.length : ju.byteLength, cu = uu / Cu
          }
          const Nu = (0, hu.s)(ju, lu, qu, fu, Cu, cu, !0),
            Ou = new Xu.j(this._engine, Nu, su, {
              updatable: Zu,
              useBytes: !1,
              stride: lu,
              size: lu,
              offset: 0,
              type: qu,
              normalized: bu,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            });
          Eu.setVerticesBuffer(Ou, cu)
        }
        for (su in Eu._updatable = Uu, Eu.delayLoadState = this.delayLoadState, Eu.delayLoadingFile = this.delayLoadingFile, Eu._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) Eu._delayInfo = Eu._delayInfo || [], Eu._delayInfo.push(su);
        return Eu._boundingInfo = new fu.c(this._extend.minimum, this._extend.maximum), Eu
      }
      serialize() {
        const uu = {};
        return uu.id = this.id, uu.uniqueId = this.uniqueId, uu.updatable = this._updatable, cu.c && cu.c.HasTags(this) && (uu.tags = cu.c.GetTags(this)), uu
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
        return this.isVerticesDataPresent(Xu.j.PositionKind) && (uu.positions = this._toNumberArray(this.getVerticesData(Xu.j.PositionKind)), this.isVertexBufferUpdatable(Xu.j.PositionKind) && (uu.positionsUpdatable = !0)), this.isVerticesDataPresent(Xu.j.NormalKind) && (uu.normals = this._toNumberArray(this.getVerticesData(Xu.j.NormalKind)), this.isVertexBufferUpdatable(Xu.j.NormalKind) && (uu.normalsUpdatable = !0)), this.isVerticesDataPresent(Xu.j.TangentKind) && (uu.tangents = this._toNumberArray(this.getVerticesData(Xu.j.TangentKind)), this.isVertexBufferUpdatable(Xu.j.TangentKind) && (uu.tangentsUpdatable = !0)), this.isVerticesDataPresent(Xu.j.UVKind) && (uu.uvs = this._toNumberArray(this.getVerticesData(Xu.j.UVKind)), this.isVertexBufferUpdatable(Xu.j.UVKind) && (uu.uvsUpdatable = !0)), this.isVerticesDataPresent(Xu.j.UV2Kind) && (uu.uvs2 = this._toNumberArray(this.getVerticesData(Xu.j.UV2Kind)), this.isVertexBufferUpdatable(Xu.j.UV2Kind) && (uu.uvs2Updatable = !0)), this.isVerticesDataPresent(Xu.j.UV3Kind) && (uu.uvs3 = this._toNumberArray(this.getVerticesData(Xu.j.UV3Kind)), this.isVertexBufferUpdatable(Xu.j.UV3Kind) && (uu.uvs3Updatable = !0)), this.isVerticesDataPresent(Xu.j.UV4Kind) && (uu.uvs4 = this._toNumberArray(this.getVerticesData(Xu.j.UV4Kind)), this.isVertexBufferUpdatable(Xu.j.UV4Kind) && (uu.uvs4Updatable = !0)), this.isVerticesDataPresent(Xu.j.UV5Kind) && (uu.uvs5 = this._toNumberArray(this.getVerticesData(Xu.j.UV5Kind)), this.isVertexBufferUpdatable(Xu.j.UV5Kind) && (uu.uvs5Updatable = !0)), this.isVerticesDataPresent(Xu.j.UV6Kind) && (uu.uvs6 = this._toNumberArray(this.getVerticesData(Xu.j.UV6Kind)), this.isVertexBufferUpdatable(Xu.j.UV6Kind) && (uu.uvs6Updatable = !0)), this.isVerticesDataPresent(Xu.j.ColorKind) && (uu.colors = this._toNumberArray(this.getVerticesData(Xu.j.ColorKind)), this.isVertexBufferUpdatable(Xu.j.ColorKind) && (uu.colorsUpdatable = !0)), this.isVerticesDataPresent(Xu.j.MatricesIndicesKind) && (uu.matricesIndices = this._toNumberArray(this.getVerticesData(Xu.j.MatricesIndicesKind)), uu.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(Xu.j.MatricesIndicesKind) && (uu.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(Xu.j.MatricesWeightsKind) && (uu.matricesWeights = this._toNumberArray(this.getVerticesData(Xu.j.MatricesWeightsKind)), this.isVertexBufferUpdatable(Xu.j.MatricesWeightsKind) && (uu.matricesWeightsUpdatable = !0)), uu.indices = this._toNumberArray(this.Ysu()), uu
      }
      static ExtractFromMesh(uu, Eu) {
        const ju = uu._geometry;
        return ju ? ju.copy(Eu) : null
      }
      static RandomId() {
        return Cu.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(uu, Eu) {
        for (let ju = 0; ju < Eu.geometries.length; ju++)
          if (Eu.geometries[ju]._loadedUniqueId === uu) return Eu.geometries[ju];
        return null
      }
      static _ImportGeometry(uu, Eu) {
        const ju = Eu.hV(),
          su = uu.geometryUniqueId,
          Zu = uu.geometryId;
        if (su || Zu) {
          const uu = su ? this._GetGeometryByLoadedUniqueId(su, ju) : ju.getGeometryById(Zu);
          uu && uu.applyToMesh(Eu)
        } else if (uu instanceof ArrayBuffer) {
          const ju = Eu._binaryInfo;
          if (ju.positionsAttrDesc && ju.positionsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.positionsAttrDesc.offset, ju.positionsAttrDesc.count);
            Eu.setVerticesData(Xu.j.PositionKind, su, !1)
          }
          if (ju.normalsAttrDesc && ju.normalsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.normalsAttrDesc.offset, ju.normalsAttrDesc.count);
            Eu.setVerticesData(Xu.j.NormalKind, su, !1)
          }
          if (ju.tangetsAttrDesc && ju.tangetsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.tangetsAttrDesc.offset, ju.tangetsAttrDesc.count);
            Eu.setVerticesData(Xu.j.TangentKind, su, !1)
          }
          if (ju.uvsAttrDesc && ju.uvsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvsAttrDesc.offset, ju.uvsAttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UVKind, su, !1)
          }
          if (ju.uvs2AttrDesc && ju.uvs2AttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvs2AttrDesc.offset, ju.uvs2AttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UV2Kind, su, !1)
          }
          if (ju.uvs3AttrDesc && ju.uvs3AttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvs3AttrDesc.offset, ju.uvs3AttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UV3Kind, su, !1)
          }
          if (ju.uvs4AttrDesc && ju.uvs4AttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvs4AttrDesc.offset, ju.uvs4AttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UV4Kind, su, !1)
          }
          if (ju.uvs5AttrDesc && ju.uvs5AttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvs5AttrDesc.offset, ju.uvs5AttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UV5Kind, su, !1)
          }
          if (ju.uvs6AttrDesc && ju.uvs6AttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.uvs6AttrDesc.offset, ju.uvs6AttrDesc.count);
            if (Yu.c)
              for (let uu = 1; uu < su.length; uu += 2) su[uu] = 1 - su[uu];
            Eu.setVerticesData(Xu.j.UV6Kind, su, !1)
          }
          if (ju.colorsAttrDesc && ju.colorsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.colorsAttrDesc.offset, ju.colorsAttrDesc.count);
            Eu.setVerticesData(Xu.j.ColorKind, su, !1, ju.colorsAttrDesc.stride)
          }
          if (ju.matricesIndicesAttrDesc && ju.matricesIndicesAttrDesc.count > 0) {
            const su = new Int32Array(uu, ju.matricesIndicesAttrDesc.offset, ju.matricesIndicesAttrDesc.count),
              Uu = [];
            for (let uu = 0; uu < su.length; uu++) {
              const Eu = su[uu];
              Uu.push(255 & Eu), Uu.push((65280 & Eu) >> 8), Uu.push((16711680 & Eu) >> 16), Uu.push(Eu >> 24 & 255)
            }
            Eu.setVerticesData(Xu.j.MatricesIndicesKind, Uu, !1)
          }
          if (ju.matricesIndicesExtraAttrDesc && ju.matricesIndicesExtraAttrDesc.count > 0) {
            const su = new Int32Array(uu, ju.matricesIndicesExtraAttrDesc.offset, ju.matricesIndicesExtraAttrDesc.count),
              Uu = [];
            for (let uu = 0; uu < su.length; uu++) {
              const Eu = su[uu];
              Uu.push(255 & Eu), Uu.push((65280 & Eu) >> 8), Uu.push((16711680 & Eu) >> 16), Uu.push(Eu >> 24 & 255)
            }
            Eu.setVerticesData(Xu.j.MatricesIndicesExtraKind, Uu, !1)
          }
          if (ju.matricesWeightsAttrDesc && ju.matricesWeightsAttrDesc.count > 0) {
            const su = new Float32Array(uu, ju.matricesWeightsAttrDesc.offset, ju.matricesWeightsAttrDesc.count);
            Eu.setVerticesData(Xu.j.MatricesWeightsKind, su, !1)
          }
          if (ju.indicesAttrDesc && ju.indicesAttrDesc.count > 0) {
            const su = new Int32Array(uu, ju.indicesAttrDesc.offset, ju.indicesAttrDesc.count);
            Eu.setIndices(su, null)
          }
          if (ju.subMeshesAttrDesc && ju.subMeshesAttrDesc.count > 0) {
            const su = new Int32Array(uu, ju.subMeshesAttrDesc.offset, 5 * ju.subMeshesAttrDesc.count);
            Eu.iG = [];
            for (let uu = 0; uu < ju.subMeshesAttrDesc.count; uu++) {
              const ju = su[5 * uu + 0],
                Uu = su[5 * uu + 1],
                Zu = su[5 * uu + 2],
                Xu = su[5 * uu + 3],
                qu = su[5 * uu + 4];
              lu.e.AddToMesh(ju, Uu, Zu, Xu, qu, Eu)
            }
          }
        } else if (uu.positions && uu.normals && uu.indices) {
          if (Eu.setVerticesData(Xu.j.PositionKind, uu.positions, uu.positions._updatable || uu.positionsUpdatable), Eu.setVerticesData(Xu.j.NormalKind, uu.normals, uu.normals._updatable || uu.normalsUpdatable), uu.tangents && Eu.setVerticesData(Xu.j.TangentKind, uu.tangents, uu.tangents._updatable || uu.tangentsUpdatable), uu.uvs && Eu.setVerticesData(Xu.j.UVKind, uu.uvs, uu.uvs._updatable || uu.uvsUpdatable), uu.uvs2 && Eu.setVerticesData(Xu.j.UV2Kind, uu.uvs2, uu.uvs2._updatable || uu.uvs2Updatable), uu.uvs3 && Eu.setVerticesData(Xu.j.UV3Kind, uu.uvs3, uu.uvs3._updatable || uu.uvs3Updatable), uu.uvs4 && Eu.setVerticesData(Xu.j.UV4Kind, uu.uvs4, uu.uvs4._updatable || uu.uvs4Updatable), uu.uvs5 && Eu.setVerticesData(Xu.j.UV5Kind, uu.uvs5, uu.uvs5._updatable || uu.uvs5Updatable), uu.uvs6 && Eu.setVerticesData(Xu.j.UV6Kind, uu.uvs6, uu.uvs6._updatable || uu.uvs6Updatable), uu.colors && Eu.setVerticesData(Xu.j.ColorKind, Uu.g.CheckColors4(uu.colors, uu.positions.length / 3), uu.colors._updatable), uu.matricesIndices)
            if (uu.matricesIndices._isExpanded || uu.matricesIndicesExpanded) delete uu.matricesIndices._isExpanded, delete uu.matricesIndicesExpanded, Eu.setVerticesData(Xu.j.MatricesIndicesKind, uu.matricesIndices, uu.matricesIndices._updatable || uu.matricesIndicesUpdatable);
            else {
              const ju = [];
              for (let Eu = 0; Eu < uu.matricesIndices.length; Eu++) {
                const su = uu.matricesIndices[Eu];
                ju.push(255 & su), ju.push((65280 & su) >> 8), ju.push((16711680 & su) >> 16), ju.push(su >> 24 & 255)
              }
              Eu.setVerticesData(Xu.j.MatricesIndicesKind, ju, uu.matricesIndices._updatable || uu.matricesIndicesUpdatable)
            } if (uu.matricesIndicesExtra)
            if (uu.matricesIndicesExtraExpanded || uu.matricesIndicesExtra._isExpanded) delete uu.matricesIndices._isExpanded, delete uu.matricesIndicesExtraExpanded, Eu.setVerticesData(Xu.j.MatricesIndicesExtraKind, uu.matricesIndicesExtra, uu.matricesIndicesExtra._updatable || uu.matricesIndicesExtraUpdatable);
            else {
              const ju = [];
              for (let Eu = 0; Eu < uu.matricesIndicesExtra.length; Eu++) {
                const su = uu.matricesIndicesExtra[Eu];
                ju.push(255 & su), ju.push((65280 & su) >> 8), ju.push((16711680 & su) >> 16), ju.push(su >> 24 & 255)
              }
              Eu.setVerticesData(Xu.j.MatricesIndicesExtraKind, ju, uu.matricesIndicesExtra._updatable || uu.matricesIndicesExtraUpdatable)
            } uu.matricesWeights && (Du._CleanMatricesWeights(uu, Eu), Eu.setVerticesData(Xu.j.MatricesWeightsKind, uu.matricesWeights, uu.matricesWeights._updatable)), uu.matricesWeightsExtra && Eu.setVerticesData(Xu.j.MatricesWeightsExtraKind, uu.matricesWeightsExtra, uu.matricesWeights._updatable), Eu.setIndices(uu.indices, null)
        }
        if (uu.iG) {
          Eu.iG = [];
          for (let ju = 0; ju < uu.iG.length; ju++) {
            const su = uu.iG[ju];
            lu.e.AddToMesh(su.materialIndex, su.verticesStart, su.verticesCount, su.indexStart, su.indexCount, Eu)
          }
        }
        Eu._shouldGenerateFlatShading && (Eu.convertToFlatShadedMesh(), Eu._shouldGenerateFlatShading = !1), Eu.computeWorldMatrix(!0), ju.onMeshImportedObservable.notifyObservers(Eu)
      }
      static _CleanMatricesWeights(uu, Eu) {
        const ju = .001;
        if (!qu.b.CleanBoneMatrixWeights) return;
        let su;
        if (!(uu.skeletonId > -1)) return;
        {
          const ju = Eu.hV().getLastSkeletonById(uu.skeletonId);
          if (!ju) return;
          su = ju.bones.length
        }
        const Uu = Eu.getVerticesData(Xu.j.MatricesIndicesKind),
          Zu = Eu.getVerticesData(Xu.j.MatricesIndicesExtraKind),
          lu = uu.matricesWeights,
          fu = uu.matricesWeightsExtra,
          Cu = uu.numBoneInfluencer,
          bu = lu.length;
        for (let Xu = 0; Xu < bu; Xu += 4) {
          let uu = 0,
            Eu = -1;
          for (let su = 0; su < 4; su++) {
            const Uu = lu[Xu + su];
            uu += Uu, Uu < ju && Eu < 0 && (Eu = su)
          }
          if (fu)
            for (let su = 0; su < 4; su++) {
              const Uu = fu[Xu + su];
              uu += Uu, Uu < ju && Eu < 0 && (Eu = su + 4)
            }
          if ((Eu < 0 || Eu > Cu - 1) && (Eu = Cu - 1), uu > ju) {
            const Eu = 1 / uu;
            for (let uu = 0; uu < 4; uu++) lu[Xu + uu] *= Eu;
            if (fu)
              for (let uu = 0; uu < 4; uu++) fu[Xu + uu] *= Eu
          } else Eu >= 4 ? (fu[Xu + Eu - 4] = 1 - uu, Zu[Xu + Eu - 4] = su) : (lu[Xu + Eu] = 1 - uu, Uu[Xu + Eu] = su)
        }
        Eu.setVerticesData(Xu.j.MatricesIndicesKind, Uu), uu.matricesWeightsExtra && Eu.setVerticesData(Xu.j.MatricesIndicesExtraKind, Zu)
      }
      static Parse(uu, Eu, ju) {
        const Uu = new Du(uu.id, Eu, void 0, uu.updatable);
        return Uu._loadedUniqueId = uu.uniqueId, cu.c && cu.c.AddTagsTo(Uu, uu.tags), uu.delayLoadingFile ? (Uu.delayLoadState = 4, Uu.delayLoadingFile = ju + uu.delayLoadingFile, Uu._boundingInfo = new fu.c(su.t.FromArray(uu.boundingBoxMinimum), su.t.FromArray(uu.boundingBoxMaximum)), Uu._delayInfo = [], uu.hasUVs && Uu._delayInfo.push(Xu.j.UVKind), uu.hasUVs2 && Uu._delayInfo.push(Xu.j.UV2Kind), uu.hasUVs3 && Uu._delayInfo.push(Xu.j.UV3Kind), uu.hasUVs4 && Uu._delayInfo.push(Xu.j.UV4Kind), uu.hasUVs5 && Uu._delayInfo.push(Xu.j.UV5Kind), uu.hasUVs6 && Uu._delayInfo.push(Xu.j.UV6Kind), uu.hasColors && Uu._delayInfo.push(Xu.j.ColorKind), uu.hasMatricesIndices && Uu._delayInfo.push(Xu.j.MatricesIndicesKind), uu.hasMatricesWeights && Uu._delayInfo.push(Xu.j.MatricesWeightsKind), Uu._delayLoadingFunction = Zu.b.ImportVertexData) : Zu.b.ImportVertexData(uu, Uu), Eu.pushGeometry(Uu, !0), Uu
      }
    }
  },
  40731: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      c: () => Ou
    });
    var su = ju(37494),
      Uu = ju(39032),
      Zu = ju(40699),
      Xu = ju(40661),
      lu = ju(39030),
      qu = ju(40706),
      fu = ju(40399),
      Cu = ju(37532);
    class bu extends Zu.e {
      constructor(uu, Eu) {
        super(uu, Eu.hV()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, Eu.T_(this), this._sourceMesh = Eu, this._unIndexed = Eu._unIndexed, this.position.yJ(Eu.position), this.rotation.yJ(Eu.rotation), this.Of.yJ(Eu.Of), Eu.rotationQuaternion && (this.rotationQuaternion = Eu.rotationQuaternion.clone()), this.animations = Eu.animations.slice();
        for (const ju of Eu.getAnimationRanges()) null != ju && this.createAnimationRange(ju.name, ju.from, ju.to);
        if (this.infiniteDistance = Eu.infiniteDistance, this.setPivotMatrix(Eu.getPivotMatrix()), Eu.skeleton || Eu.morphTargetManager || !Eu.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const uu = Eu.EW();
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
        this._sourceMesh?.receiveShadows !== uu && Uu.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(uu) {
        this._sourceMesh?.material !== uu && Uu.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(uu) {
        this._sourceMesh?.visibility !== uu && Uu.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(uu) {
        this._sourceMesh?.skeleton !== uu && Uu.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(uu) {
        this._sourceMesh && uu !== this._sourceMesh.renderingGroupId && Uu.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(uu) {
        this._sourceMesh && uu !== this._sourceMesh.meshBlendingTag && Uu.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get CUu() {
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
      getVerticesData(uu, Eu, ju) {
        return this._sourceMesh.getVerticesData(uu, Eu, ju)
      }
      copyVerticesData(uu, Eu) {
        this._sourceMesh.copyVerticesData(uu, Eu)
      }
      getVertexBuffer(uu, Eu) {
        return this._sourceMesh.getVertexBuffer(uu, Eu)
      }
      setVerticesData(uu, Eu, ju, su) {
        return this.CUu && this.CUu.setVerticesData(uu, Eu, ju, su), this.CUu
      }
      updateVerticesData(uu, Eu, ju, su) {
        return this.CUu && this.CUu.updateVerticesData(uu, Eu, ju, su), this.CUu
      }
      setIndices(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.CUu && this.CUu.setIndices(uu, Eu), this.CUu
      }
      isVerticesDataPresent(uu) {
        return this._sourceMesh.isVerticesDataPresent(uu)
      }
      Ysu() {
        return this._sourceMesh.Ysu()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.EW().isLocked) return this;
        uu = "object" === typeof Eu ? Eu : {
          applySkeleton: Eu,
          applyMorph: ju
        };
        const su = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(uu, null, fu.j.PositionKind), su), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(uu, Eu) {
        if (super._activate(uu, Eu), this._sourceMesh.iG || Uu.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, uu), Eu) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== qu.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new su.e);
          const uu = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, su.m.dO[7].yJ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.yJ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.yJ(su.m.dO[7]), this._currentLOD._masterMesh = uu, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get JV() {
        return !0
      }
      getLOD(uu) {
        if (!uu) return this;
        const Eu = this.CUu.getLODLevels();
        if (Eu && 0 !== Eu.length) {
          const Eu = this.EW();
          this._currentLOD = this.CUu.getLOD(uu, Eu.Isu)
        } else this._currentLOD = this.CUu;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(uu) {
        return this.CUu._preActivateForIntermediateRendering(uu)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.iG)
          for (let uu = 0; uu < this._sourceMesh.iG.length; uu++) this._sourceMesh.iG[uu].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.EW().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(uu);
        if (lu.d.DeepCopy(this, su, ["name", "iG", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "CUu", "JV", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "fUu", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xXu", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), Eu && (su.parent = Eu), !ju)
          for (let Uu = 0; Uu < this.hV().meshes.length; Uu++) {
            const uu = this.hV().meshes[Uu];
            uu.parent === this && uu.clone(uu.name, su)
          }
        return su.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(su), su
      }
      dispose(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.n_(this), super.dispose(uu, Eu)
      }
      _serializeAsParent(uu) {
        super._serializeAsParent(uu), uu.parentId = this._sourceMesh.uniqueId, uu.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0, Eu && Eu.newSourcedMesh);
        su && ju && ju(this, su);
        for (const Uu of this.getChildTransformNodes(!0)) Uu.instantiateHierarchy(su, Eu, ju);
        return su
      }
    }
    let cu = !1;

    function Nu(uu, Eu, ju, su, Uu) {
      for (let Zu = 0; Zu < Eu.length; Zu++) {
        const Xu = uu[Eu[Zu]] ?? 0,
          lu = Uu + ju[Zu];
        Xu.toArray ? Xu.toArray(su, lu) : Xu.copyToArray ? Xu.copyToArray(su, lu) : su[lu] = Xu
      }
    }

    function Ou() {
      cu || (cu = !0, Xu.e._instancedMeshFactory = (uu, Eu) => {
        const ju = new bu(uu, Eu);
        if (Eu.Hr) {
          ju.Hr = {};
          for (const uu in Eu.Hr) ju.Hr[uu] = Eu.Hr[uu]
        }
        return ju
      }, Xu.e.prototype.Qr = function(uu, Eu) {
        if (!this.Hr) {
          this.Hr = {};
          for (const uu of this.instances) uu.Hr = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.wO().getCaps().vertexArrayObject ? {} : void 0
        }), this.Hr[uu] = null, this._userInstancedBuffersStorage.strides[uu] = Eu;
        const ju = this._userInstancedBuffersStorage;
        ju.interleavedKinds = [], ju.interleavedOffsets = [], ju.interleavedRowStride = 0;
        for (const su in ju.strides) ju.interleavedKinds.push(su), ju.interleavedOffsets.push(ju.interleavedRowStride), ju.interleavedRowStride += ju.strides[su];
        ju.interleavedData = new Float32Array(32 * ju.interleavedRowStride);
        for (const su in ju.interleavedBuffers) ju.interleavedBuffers[su].buffer.dispose();
        ju.interleavedBuffers = {}, ju.vertexBuffers[uu] = null;
        for (const su of this.instances) su.Hr[uu] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, Xu.e.prototype._processInstancedBuffers = function(uu, Eu) {
        const ju = this._userInstancedBuffersStorage,
          su = ju.interleavedRowStride;
        if (!su) return;
        const Uu = uu ? uu.length : 0,
          Zu = (Uu + 1) * su;
        let Xu = ju.interleavedData;
        if (Xu.length < Zu) {
          let uu = Xu.length;
          for (; uu < Zu;) uu *= 2;
          Xu = ju.interleavedData = new Float32Array(uu)
        }
        const lu = ju.interleavedKinds,
          qu = ju.interleavedOffsets;
        let Cu = 0;
        Eu && (Nu(this.Hr, lu, qu, Xu, Cu), Cu += su);
        for (let fu = 0; fu < Uu; fu++) Nu(uu[fu].Hr, lu, qu, Xu, Cu), Cu += su;
        let bu = "shared",
          cu = ju.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (bu = this._instanceDataStorage.engine.currentRenderPassId, ju.renderPasses || (ju.renderPasses = {}), ju.renderPasses[bu] || (ju.renderPasses[bu] = {}), cu = ju.renderPasses[bu]);
        const Ou = ju.interleavedBuffers[bu];
        let Yu = !Ou || Ou.data !== Xu;
        for (let fu = 0; !Yu && fu < lu.length; fu++) Yu = !cu[lu[fu]];
        if (!Yu) return void Ou.buffer.updateDirectly(Xu, 0);
        Ou?.buffer.dispose();
        const hu = new fu.b(this.wO(), Xu, !0, su, !1, !0);
        for (let fu = 0; fu < lu.length; fu++) {
          const uu = lu[fu],
            Eu = hu.createVertexBuffer(uu, qu[fu], ju.strides[uu]);
          Eu.hashCode += Eu.byteOffset * 2 ** 24, cu[uu] = Eu
        }
        ju.interleavedBuffers[bu] = {
          buffer: hu,
          data: Xu
        }, this._invalidateInstanceVertexArrayObject()
      }, Xu.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const uu in this._userInstancedBuffersStorage.vertexArrayObjects) this.wO().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[uu]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, Xu.e.prototype._disposeInstanceSpecificData = function() {
        for (const Eu in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[Eu].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const Eu in this.Hr) this._userInstancedBuffersStorage.vertexBuffers[Eu] && this._userInstancedBuffersStorage.vertexBuffers[Eu].dispose();
        const uu = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (uu) {
          for (const Eu in uu) uu[Eu].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.Hr = {}
      }, (0, Cu.f)("BABYLON.InstancedMesh", bu))
    }
  },
  40661: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => yu,
      f: () => Ru,
      g: () => Lu
    });
    var su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du = ju(37514),
      gu = ju(40356),
      Mu = ju(40294),
      eu = ju(39030),
      Gu = ju(40281),
      pu = ju(40663),
      wu = ju(40462),
      Ju = ju(37494),
      du = ju(37680),
      au = ju(40467),
      Pu = ju(40399),
      ou = ju(40668),
      ku = ju(40676),
      mu = ju(40699),
      vu = ju(40556),
      Ku = ju(40552),
      Vu = ju(40634),
      ru = ju(40711),
      Qu = ju(40685),
      iu = ju(40272),
      Wu = ju(39032),
      Su = ju(37532),
      Iu = ju(40153),
      Fu = ju(40422);
    class Bu {
      constructor(uu, Eu) {
        this.distanceOrScreenCoverage = uu, this.mesh = Eu
      }
    }
    class Lu {}
    class tu {
      constructor() {
        this.batchCache = new Tu(this), this.batchCacheReplacementModeInFrozenMode = new Tu(this), this.instancesBufferSize = 2048
      }
    }
    class xu {
      constructor() {
        this.renderPasses = {}
      }
    }
    class Tu {
      constructor(uu) {
        this.parent = uu, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class Hu {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class Au {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const nu = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class yu extends mu.e {
      static _GetDefaultSideOrientation(uu) {
        return uu || yu.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== uu && (uu && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Pu.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(Pu.j.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = uu, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new Du.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new Du.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new Du.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new Du.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new Du.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(uu) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(uu)
      }
      get fUu() {
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
      _copySource(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Uu = this.hV();
        if (uu._geometry && uu._geometry.applyToMesh(this), eu.d.DeepCopy(uu, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "fUu", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "JV", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "xXu", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = uu, Uu.useClonedMeshMap && (uu._internalMeshDataInfo.meshMap || (uu._internalMeshDataInfo.meshMap = {}), uu._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = uu._originalBuilderSideOrientation, this._creationDataStorage = uu._creationDataStorage, uu._ranges) {
          const Eu = uu._ranges;
          for (const uu in Eu) Object.prototype.hasOwnProperty.call(Eu, uu) && Eu[uu] && this.createAnimationRange(uu, Eu[uu].from, Eu[uu].to)
        }
        if (uu.metadata && uu.metadata.clone ? this.metadata = uu.metadata.clone() : this.metadata = uu.metadata, this._internalMetadata = uu._internalMetadata, this.meshBlendingTag = uu.meshBlendingTag, Gu.c && Gu.c.HasTags(uu) && Gu.c.AddTagsTo(this, Gu.c.GetTags(uu, !0)), this.Wk(uu.isEnabled(!1)), this.parent = uu.parent, this.setPivotMatrix(uu.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + uu.id, this.material = uu.material, !Eu) {
          const Uu = uu.getDescendants(!0);
          for (let uu = 0; uu < Uu.length; uu++) {
            const Zu = Uu[uu];
            Zu._isMesh ? (nu.parent = this, nu.doNotCloneChildren = Eu, nu.clonePhysicsImpostor = ju, nu.cloneThinInstances = su, Zu.clone(this.name + "." + Zu.name, nu)) : Zu.clone && Zu.clone(this.name + "." + Zu.name, this)
          }
        }
        if (uu.morphTargetManager && (this.morphTargetManager = uu.morphTargetManager), (0, Iu.b)(Uu.getPhysicsEngine)) {
          const Eu = Uu.getPhysicsEngine();
          if (ju && Eu)
            if (1 === Eu.getPluginVersion()) {
              const ju = Eu.getImpostorForPhysicsObject(uu);
              ju && (this.physicsImpostor = ju.clone(this))
            } else 2 === Eu.getPluginVersion() && uu.physicsBody && uu.physicsBody.clone(this)
        }
        for (let Zu = 0; Zu < Uu.WG.length; Zu++) {
          const Eu = Uu.WG[Zu];
          Eu.emitter === uu && Eu.clone(Eu.name, this)
        }
        if (this.skeleton = uu.skeleton, su && (uu._thinInstanceDataStorage.matrixData ? (this.Z6("matrix", new Float32Array(uu._thinInstanceDataStorage.matrixData), 16, !uu._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = uu._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = uu._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = uu._thinInstanceDataStorage.matrixBufferSize, uu._userThinInstanceBuffersStorage)) {
          const Eu = uu._userThinInstanceBuffersStorage;
          for (const uu in Eu.data) this.Z6(uu, new Float32Array(Eu.data[uu]), Eu.strides[uu], !Eu.vertexBuffers?.[uu]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[uu] = Eu.sizes[uu]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(uu) {
        let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zu = arguments.length > 4 ? arguments[4] : void 0,
          Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(uu, ju), this._internalMeshDataInfo = new Au, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new Hu, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = yu.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ju = this.hV(), this._instanceDataStorage = new xu, this._instanceDataStorage.engine = ju.wO(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new tu), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (uu, Eu, ju) => {
          uu && ju && (this._uniformBuffer ? this.transferToEffect(Eu) : ju.bindOnlyWorldMatrix(Eu))
        };
        let lu = !1;
        if (su && void 0 === su._addToSceneRootNodes) {
          const uu = su;
          Eu = uu.parent ?? null, Uu = uu.source ?? null, Zu = uu.doNotCloneChildren ?? !1, Xu = uu.clonePhysicsImpostor ?? !0, lu = uu.cloneThinInstances ?? !1
        } else Eu = su;
        Uu && this._copySource(Uu, Zu, Xu, lu), null !== Eu && (this.parent = Eu), this._instanceDataStorage.hardwareInstancedRendering = this.wO().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = uu => {
          uu.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new Du.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), Uu && Uu.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = 0 === this.getTotalVertices() || Eu && Eu.doNotInstantiate && (!0 === Eu.doNotInstantiate || Eu.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        su.parent = uu || this.parent, su.position = this.position.clone(), su.Of = this.Of.clone(), this.rotationQuaternion ? su.rotationQuaternion = this.rotationQuaternion.clone() : su.rotation = this.rotation.clone(), ju && ju(this, su);
        for (const Uu of this.getChildTransformNodes(!0)) "InstancedMesh" === Uu.getClassName() && "Mesh" === su.getClassName() && Uu.CUu === this ? Uu.instantiateHierarchy(su, {
          doNotInstantiate: Eu && Eu.doNotInstantiate || !1,
          newSourcedMesh: su
        }, ju) : Uu.instantiateHierarchy(su, Eu, ju);
        return su
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(uu) {
        let Eu = super.toString(uu);
        if (Eu += ", n vertices: " + this.getTotalVertices(), Eu += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ju = 0; ju < this.animations.length; ju++) Eu += ", animation[0]: " + this.animations[ju].toString(uu);
        if (uu)
          if (this._geometry) {
            const uu = this.Ysu(),
              ju = this.getVerticesData(Pu.j.PositionKind);
            ju && uu && (Eu += ", flat shading: " + (ju.length / 3 === uu.length ? "YES" : "NO"))
          } else Eu += ", flat shading: UNKNOWN";
        return Eu
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
        this._internalMeshDataInfo._LODLevels.sort(((Eu, ju) => Eu.distanceOrScreenCoverage < ju.distanceOrScreenCoverage ? uu : Eu.distanceOrScreenCoverage > ju.distanceOrScreenCoverage ? -uu : 0))
      }
      addLODLevel(uu, Eu) {
        if (Eu && Eu._masterMesh) return Wu.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const ju = new Bu(uu, Eu);
        return this._internalMeshDataInfo._LODLevels.push(ju), Eu && (Eu._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(uu) {
        const Eu = this._internalMeshDataInfo;
        for (let ju = 0; ju < Eu._LODLevels.length; ju++) {
          const su = Eu._LODLevels[ju];
          if (su.distanceOrScreenCoverage === uu) return su.mesh
        }
        return null
      }
      removeLODLevel(uu) {
        const Eu = this._internalMeshDataInfo;
        for (let ju = 0; ju < Eu._LODLevels.length; ju++) Eu._LODLevels[ju].mesh === uu && (Eu._LODLevels.splice(ju, 1), uu && (uu._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(uu, Eu) {
        const ju = this._internalMeshDataInfo;
        if (!ju._LODLevels || 0 === ju._LODLevels.length) return this;
        const su = Eu || this.EW().Isu,
          Uu = uu.mode === wu.e.ORTHOGRAPHIC_CAMERA ? uu.minZ : su.centerWorld.subtract(uu.globalPosition).length();
        let Zu = Uu,
          Xu = 1;
        if (ju._useLODScreenCoverage) {
          const Eu = uu.screenArea;
          let ju = su.radiusWorld * uu.minZ / Uu;
          ju = ju * ju * Math.PI, Zu = ju / Eu, Xu = -1
        }
        if (Xu * ju._LODLevels[ju._LODLevels.length - 1].distanceOrScreenCoverage > Xu * Zu) return this.onLODLevelSelection && this.onLODLevelSelection(Zu, this, this), this;
        for (let lu = 0; lu < ju._LODLevels.length; lu++) {
          const uu = ju._LODLevels[lu];
          if (Xu * uu.distanceOrScreenCoverage < Xu * Zu) {
            if (uu.mesh) {
              if (4 === uu.mesh.delayLoadState) return uu.mesh._checkDelayState(), this;
              if (2 === uu.mesh.delayLoadState) return this;
              uu.mesh._preActivate(), uu.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(Zu, this, uu.mesh), uu.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(Zu, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(uu, Eu, ju, su) {
        if (!this._geometry) return null;
        let Uu = su ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[uu]?.getFloatData(this.instances.length + 1, ju || Eu && 1 !== this._geometry.meshes.length);
        return Uu || (Uu = this._geometry.getVerticesData(uu, Eu, ju)), Uu
      }
      copyVerticesData(uu, Eu) {
        this._geometry && this._geometry.copyVerticesData(uu, Eu)
      }
      getVertexBuffer(uu, Eu) {
        return this._geometry ? (Eu ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[uu]) ?? this._geometry.getVertexBuffer(uu) : null
      }
      isVerticesDataPresent(uu, Eu) {
        return this._geometry ? !Eu && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[uu] || this._geometry.isVerticesDataPresent(uu) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(uu)
      }
      isVertexBufferUpdatable(uu, Eu) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(uu);
        if (!Eu) {
          const Eu = this._userInstancedBuffersStorage?.vertexBuffers[uu];
          if (Eu) return Eu.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(uu)
      }
      getVerticesDataKinds(uu) {
        if (!this._geometry) {
          const uu = [];
          if (this._delayInfo)
            for (const Eu of this._delayInfo) uu.push(Eu);
          return uu
        }
        const Eu = this._geometry.getVerticesDataKinds();
        if (!uu && this._userInstancedBuffersStorage)
          for (const ju in this._userInstancedBuffersStorage.vertexBuffers) - 1 === Eu.indexOf(ju) && Eu.push(ju);
        return Eu
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      Ysu(uu, Eu) {
        return this._geometry ? this._geometry.Ysu(uu, Eu) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(uu)) return !1;
        if (!this.iG || 0 === this.iG.length) return !0;
        if (!uu) return !0;
        const ju = this.wO(),
          su = this.hV(),
          Uu = Eu || ju.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const Zu = this.material || su.defaultMaterial;
        if (Zu)
          if (Zu._storeEffectOnSubMeshes)
            for (const lu of this.iG) {
              const uu = lu.oO();
              if (uu)
                if (uu._storeEffectOnSubMeshes) {
                  if (!uu.isReadyForSubMesh(this, lu, Uu)) return !1
                } else if (!uu.isReady(this, Uu)) return !1
            } else if (!Zu.isReady(this, Uu)) return !1;
        const Xu = ju.currentRenderPassId;
        for (const lu of this.lightSources) {
          const uu = lu.getShadowGenerators();
          if (!uu) continue;
          const Eu = uu.values();
          for (let su = Eu.next(); !0 !== su.done; su = Eu.next()) {
            const uu = su.value;
            if (uu && (!uu.getShadowMap()?.renderList || uu.getShadowMap()?.renderList && -1 !== uu.getShadowMap()?.renderList?.indexOf(this))) {
              const Eu = uu.getShadowMap().renderPassIds ?? [ju.currentRenderPassId];
              for (let su = 0; su < Eu.length; ++su) {
                ju.currentRenderPassId = Eu[su];
                for (const Eu of this.iG)
                  if (!uu.isReady(Eu, Uu, Eu.oO()?.needAlphaBlendingForMesh(this) ?? !1)) return ju.currentRenderPassId = Xu, !1
              }
              ju.currentRenderPassId = Xu
            }
          }
        }
        for (const lu of this._internalMeshDataInfo._LODLevels)
          if (lu.mesh && !lu.mesh.isReady(Uu)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      kO() {
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
        let Eu = this._instanceDataStorage.renderPasses[uu];
        return Eu || (Eu = new tu, this._instanceDataStorage.renderPasses[uu] = Eu), Eu
      }
      _preActivate() {
        const uu = this._internalMeshDataInfo,
          Eu = this.hV().getRenderId();
        return uu._preActivateId === Eu || (uu._preActivateId = Eu, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(uu) {
        const Eu = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return Eu.visibleInstances && (Eu.visibleInstances.intermediateDefaultRenderId = uu), this
      }
      _registerInstanceForRenderId(uu, Eu) {
        const ju = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ju.visibleInstances || (ju.visibleInstances = {
          defaultRenderId: Eu,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ju.visibleInstances[Eu] || (void 0 === ju.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ju.visibleInstances[ju.previousRenderId], ju.previousRenderId = Eu, ju.visibleInstances[Eu] = new Array), ju.visibleInstances[Eu].push(uu), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.PO || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.EW().isLocked) return this;
        uu = "object" === typeof Eu ? Eu : {
          applySkeleton: Eu,
          applyMorph: ju
        };
        const su = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(uu, null, Pu.j.PositionKind), su), this
      }
      _createGlobalSubMesh(uu) {
        const Eu = this.getTotalVertices();
        if (!Eu || !this.Ysu()) return null;
        if (this.iG && this.iG.length > 0) {
          const ju = this.Ysu();
          if (!ju) return null;
          const su = ju.length;
          let Uu = !1;
          if (uu) Uu = !0;
          else
            for (const uu of this.iG) {
              if (uu.indexStart + uu.indexCount > su) {
                Uu = !0;
                break
              }
              if (uu.verticesStart + uu.verticesCount > Eu) {
                Uu = !0;
                break
              }
            }
          if (!Uu) return this.iG[0]
        }
        return this.releaseSubMeshes(), new vu.e(0, 0, Eu, 0, this.getTotalIndices() || (this.isUnIndexed ? Eu : 0), this)
      }
      subdivide(uu) {
        if (uu < 1) return;
        const Eu = this.getTotalIndices();
        let ju = Eu / uu | 0,
          su = 0;
        for (; ju % 3 !== 0;) ju++;
        this.releaseSubMeshes();
        for (let Uu = 0; Uu < uu && !(su >= Eu); Uu++) vu.e.CreateFromIndices(0, su, su + ju >= Eu ? Eu - su : ju, this, void 0, !1), su += ju;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(uu, Eu, ju, su);
        else {
          const su = new ou.b;
          su.set(Eu, uu);
          const Uu = this.hV();
          new ku.b(ku.b.RandomId(), Uu, su, ju, this)
        }
        return this
      }
      removeVerticesData(uu) {
        this._geometry && this._geometry.removeVerticesData(uu)
      }
      markVerticesDataAsUpdatable(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ju = this.getVertexBuffer(uu);
        ju && ju.isUpdatable() !== Eu && this.setVerticesData(uu, this.getVerticesData(uu), Eu)
      }
      setVerticesBuffer(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = ku.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(uu, ju, Eu), this
      }
      updateVerticesData(uu, Eu, ju, su) {
        return this._geometry ? (su ? (this.makeGeometryUnique(), this.updateVerticesData(uu, Eu, ju, !1)) : this._geometry.updateVerticesData(uu, Eu, ju), this) : this
      }
      updateMeshPositions(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ju = this.getVerticesData(Pu.j.PositionKind);
        if (!ju) return this;
        if (uu(ju), this.updateVerticesData(Pu.j.PositionKind, ju, !1, !1), Eu) {
          const uu = this.Ysu(),
            Eu = this.getVerticesData(Pu.j.NormalKind);
          if (!Eu) return this;
          ou.b.ComputeNormals(ju, uu, Eu), this.updateVerticesData(Pu.j.NormalKind, Eu, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const uu = this._geometry,
          Eu = this._geometry.copy(ku.b.RandomId());
        return uu.releaseForMesh(this, !0), Eu.applyToMesh(this), this
      }
      setIndexBuffer(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Uu = this._geometry;
        Uu || (Uu = new ku.b(ku.b.RandomId(), this.hV(), void 0, void 0, this)), Uu.setIndexBuffer(uu, Eu, ju, su)
      }
      setIndices(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(uu, Eu, ju, su);
        else {
          const su = new ou.b;
          su.indices = uu;
          const Uu = this.hV();
          new ku.b(ku.b.RandomId(), Uu, su, ju, this, Eu)
        }
        return this
      }
      updateIndices(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(uu, Eu, ju), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(uu, Eu, ju) {
        let su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const Uu = this.hV().wO();
        let Zu;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ju) === Ku.b.WireFrameFillMode) Zu = uu._getLinesIndexBuffer(this.Ysu(), Uu);
          else Zu = null;
        else switch (this._getRenderingFillMode(ju)) {
          case Ku.b.PointFillMode:
            Zu = null;
            break;
          case Ku.b.WireFrameFillMode:
            Zu = uu._getLinesIndexBuffer(this.Ysu(), Uu);
            break;
          default:
          case Ku.b.TriangleFillMode:
            Zu = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(Eu, Zu, su)
      }
      _bindDirect(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(uu), ju && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const uu = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const Eu in uu) this._userInstancedBuffersStorage.vertexBuffers[Eu] = uu[Eu]
          }
          this._geometry._bind(uu, Eu, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(uu, Eu);
        return this
      }
      _draw(uu, Eu, ju) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const su = this.hV().wO(),
          Uu = su._currentMaterialContext,
          Zu = Uu && Uu.useVertexPulling;
        return this._unIndexed && Eu !== Ku.b.WireFrameFillMode || Eu == Ku.b.PointFillMode ? su.drawArraysType(Eu, uu.verticesStart, uu.verticesCount, this.forcedInstanceCount || ju) : Eu == Ku.b.WireFrameFillMode ? su.drawElementsType(Eu, 0, uu._linesIndexCount, this.forcedInstanceCount || ju) : Zu ? su.drawArraysType(Eu, uu.indexStart, uu.indexCount, this.forcedInstanceCount || ju) : su.drawElementsType(Eu, uu.indexStart, uu.indexCount, this.forcedInstanceCount || ju), this
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (Eu) return ju.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[uu] = !1, ju.batchCacheReplacementModeInFrozenMode.renderSelf[uu] = !0, ju.batchCacheReplacementModeInFrozenMode;
          if (ju.previousBatch) return ju.previousBatch
        }
        const su = this.hV(),
          Uu = su._isInIntermediateRendering(),
          Zu = Uu ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          Xu = ju.batchCache;
        if (Xu.mustReturn = !1, Xu.renderSelf[uu] = Eu || !Zu && this.isEnabled() && this.isVisible, Xu.visibleInstances[uu] = null, ju.visibleInstances && !Eu) {
          const Eu = ju.visibleInstances,
            Zu = su.getRenderId(),
            lu = Uu ? Eu.intermediateDefaultRenderId : Eu.defaultRenderId;
          Xu.visibleInstances[uu] = Eu[Zu], !Xu.visibleInstances[uu] && lu && (Xu.visibleInstances[uu] = Eu[lu])
        }
        return Xu.hardwareInstancedRendering[uu] = !Eu && this._instanceDataStorage.hardwareInstancedRendering && null !== Xu.visibleInstances[uu] && void 0 !== Xu.visibleInstances[uu], ju.previousBatch = Xu, Xu
      }
      _updateInstancedBuffers(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Eu.visibleInstances[uu._id],
          lu = Xu ? Xu.length : 0,
          qu = Eu.parent,
          fu = this._instanceDataStorage;
        let Cu = qu.instancesBuffer,
          bu = qu.instancesPreviousBuffer,
          cu = 0,
          Nu = 0;
        const Ou = Eu.renderSelf[uu._id],
          Yu = this._scene.floatingOriginOffset,
          hu = !Cu || ju !== qu.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !qu.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || fu.isFrozen && !hu) Nu = (Ou ? 1 : 0) + lu;
        else {
          const Eu = this.getWorldMatrix();
          if (Ou) {
            this._scene.needsPreviousWorldMatrices && (fu.masterMeshPreviousWorldMatrix ? (fu.masterMeshPreviousWorldMatrix.copyToArray(qu.instancesPreviousData, cu), fu.masterMeshPreviousWorldMatrix.yJ(Eu)) : (fu.masterMeshPreviousWorldMatrix = Eu.clone(), fu.masterMeshPreviousWorldMatrix.copyToArray(qu.instancesPreviousData, cu))), Eu.copyToArray(qu.instancesData, cu);
            const uu = Eu.Osu();
            qu.instancesData[cu + 12] = uu[12] - Yu.x, qu.instancesData[cu + 13] = uu[13] - Yu.y, qu.instancesData[cu + 14] = uu[14] - Yu.z, cu += 16, Nu++
          }
          if (Xu) {
            if (yu.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && uu.oO()?.needAlphaBlendingForMesh(uu.getRenderingMesh())) {
              const uu = this._scene.activeCamera.globalPosition;
              for (let Eu = 0; Eu < Xu.length; Eu++) {
                const ju = Xu[Eu];
                ju._distanceToCamera = Ju.t.Distance(ju.EW().Isu.centerWorld, uu)
              }
              Xu.sort(((uu, Eu) => uu._distanceToCamera > Eu._distanceToCamera ? -1 : uu._distanceToCamera < Eu._distanceToCamera ? 1 : 0))
            }
            for (let uu = 0; uu < Xu.length; uu++) {
              const Eu = Xu[uu],
                ju = Eu.getWorldMatrix();
              ju.copyToArray(qu.instancesData, cu), this._scene.needsPreviousWorldMatrices && (Eu._previousWorldMatrix ? (Eu._previousWorldMatrix.copyToArray(qu.instancesPreviousData, cu), Eu._previousWorldMatrix.yJ(ju)) : (Eu._previousWorldMatrix = ju.clone(), Eu._previousWorldMatrix.copyToArray(qu.instancesPreviousData, cu)));
              const su = ju.Osu();
              qu.instancesData[cu + 12] = su[12] - Yu.x, qu.instancesData[cu + 13] = su[13] - Yu.y, qu.instancesData[cu + 14] = su[14] - Yu.z, cu += 16, Nu++
            }
          }
        }
        if (hu) {
          let uu;
          if (Cu && Cu.dispose(), bu && bu.dispose(), Cu = new Pu.b(su, qu.instancesData, !0, 16, !1, !0), qu.instancesBuffer = Cu, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.wO().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) uu = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const Eu = this._instanceDataStorage.engine.currentRenderPassId;
            uu = this._userInstancedBuffersStorage.renderPasses[Eu], uu || (this._userInstancedBuffersStorage.renderPasses[Eu] = uu = {})
          }
          uu.world0 = Cu.createVertexBuffer("world0", 0, 4), uu.world1 = Cu.createVertexBuffer("world1", 4, 4), uu.world2 = Cu.createVertexBuffer("world2", 8, 4), uu.world3 = Cu.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (bu = new Pu.b(su, qu.instancesPreviousData, !0, 16, !1, !0), qu.instancesPreviousBuffer = bu, uu.previousWorld0 = bu.createVertexBuffer("previousWorld0", 0, 4), uu.previousWorld1 = bu.createVertexBuffer("previousWorld1", 4, 4), uu.previousWorld2 = bu.createVertexBuffer("previousWorld2", 8, 4), uu.previousWorld3 = bu.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (Cu.updateDirectly(qu.instancesData, 0, Nu), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || bu.updateDirectly(qu.instancesPreviousData, 0, Nu));
        this._processInstancedBuffers(Xu, Ou), Zu && void 0 !== Uu && (this.hV()._activeIndices.addCount(uu.indexCount * Nu, !1), su._currentDrawContext && (su._currentDrawContext.useInstancing = !0), this._bind(uu, Zu, Uu), this._draw(uu, Uu, Nu)), !this._scene.needsPreviousWorldMatrices || hu || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || bu.updateDirectly(qu.instancesData, 0, Nu)
      }
      _renderWithInstances(uu, Eu, ju, su, Uu) {
        const Zu = ju.visibleInstances[uu._id],
          Xu = Zu ? Zu.length : 0,
          lu = ju.parent,
          qu = lu.instancesBufferSize,
          fu = 16 * (Xu + 1) * 4;
        for (; lu.instancesBufferSize < fu;) lu.instancesBufferSize *= 2;
        return lu.instancesData && qu == lu.instancesBufferSize || (lu.instancesData = new Float32Array(lu.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !lu.instancesPreviousData || qu != lu.instancesBufferSize) && (lu.instancesPreviousData = new Float32Array(lu.instancesBufferSize / 4)), this._updateInstancedBuffers(uu, ju, qu, Uu, Eu, su), Uu.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(uu, Eu, ju, su) {
        const Uu = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.hV()._activeIndices.addCount(uu.indexCount * Uu, !1), su._currentDrawContext && (su._currentDrawContext.useInstancing = !0), this._bind(uu, ju, Eu), this._draw(uu, Eu, Uu), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, Uu) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), su.unbindInstanceAttributes()
      }
      _processInstancedBuffers(uu, Eu) {}
      _processRendering(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = this.hV(),
          fu = qu.wO();
        if (su = this._getRenderingFillMode(su), Zu && Eu.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(Eu, su, ju, fu), this;
        if (Zu) this._renderWithInstances(Eu, su, Uu, ju, fu);
        else {
          fu._currentDrawContext && (fu._currentDrawContext.useInstancing = !1);
          let ju = 0;
          Uu.renderSelf[Eu._id] && (Xu && Xu(!1, uu.getWorldMatrix(), lu), ju++, this._draw(Eu, su, this._instanceDataStorage.overridenInstanceCount));
          const Zu = Uu.visibleInstances[Eu._id];
          if (Zu) {
            const uu = Zu.length;
            ju += uu;
            for (let ju = 0; ju < uu; ju++) {
              const uu = Zu[ju].getWorldMatrix();
              Xu && Xu(!0, uu, lu), this._draw(Eu, su)
            }
          }
          qu._activeIndices.addCount(Eu.indexCount * ju, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        uu?.instancesBuffer && (Eu && uu.instancesBuffer.dispose(), uu.instancesBuffer = null), uu?.instancesPreviousBuffer && (Eu && uu.instancesPreviousBuffer.dispose(), uu.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eu in this._instanceDataStorage.renderPasses) {
          const ju = this._instanceDataStorage.renderPasses[Eu];
          this._disposeInstanceDataStorageRenderPass(ju, uu)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, uu), this._userInstancedBuffersStorage) {
          for (const Eu in this._userInstancedBuffersStorage.vertexBuffers) {
            const ju = this._userInstancedBuffersStorage.vertexBuffers[Eu];
            ju && (uu && ju.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Eu] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(uu)
      }
      _releaseRenderPassId(uu) {
        const Eu = this._instanceDataStorage.renderPasses[uu];
        if (Eu && (this._disposeInstanceDataStorageRenderPass(Eu, !0), delete this._instanceDataStorage.renderPasses[uu]), this._userInstancedBuffersStorage?.renderPasses) {
          const Eu = this._userInstancedBuffersStorage.renderPasses[uu];
          if (Eu)
            for (const uu in Eu) Eu[uu]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[uu]
        }
        const ju = this._userInstancedBuffersStorage?.interleavedBuffers;
        ju?.[uu] && (ju[uu].buffer.dispose(), delete ju[uu])
      }
      _freeze() {
        if (this.iG) {
          for (let uu = 0; uu < this.iG.length; uu++) this._getInstancesRenderList(uu);
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
      renderWithRenderPassId(uu, Eu, ju, su) {
        let Uu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const Zu = this._scene.wO(),
          Xu = Zu.currentRenderPassId;
        if (void 0 !== uu && (Zu.currentRenderPassId = uu), su)(!Uu || Uu && su.isInFrustum(this._scene._frustumPlanes)) && this.render(su, !!Eu, ju);
        else
          for (let lu = 0; lu < this.iG.length; lu++) {
            const uu = this.iG[lu];
            (!Uu || Uu && uu.isInFrustum(this._scene._frustumPlanes)) && this.render(uu, !!Eu, ju)
          }
        return void 0 !== uu && (Zu.currentRenderPassId = Xu), this
      }
      directRender() {
        if (!this.iG) return this;
        for (const uu of this.iG) this.render(uu, !1);
        return this
      }
      render(uu, Eu, ju) {
        const su = this.hV(),
          Uu = su.wO();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const Zu = su.activeCameras?.length ?? 0,
          Xu = Zu > 1 && su.activeCamera === su.activeCameras[0] || Zu <= 1,
          lu = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== Uu.currentRenderPassId;
        if (Xu && this._checkOcclusionQuery(lu) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const qu = this._getInstancesRenderList(uu._id, !!ju);
        if (qu.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let fu = 0,
          Cu = null;
        this.ignoreCameraMaxZ && su.activeCamera && !su._isInIntermediateRendering() && (fu = su.activeCamera.maxZ, Cu = su.activeCamera, su.activeCamera.maxZ = 0, su.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const bu = uu.getRenderingMesh(),
          cu = qu.hardwareInstancedRendering[uu._id] || bu.hasThinInstances || !!this._userInstancedBuffersStorage && !uu.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          Nu = this._instanceDataStorage,
          Ou = uu.oO();
        if (!Ou) return Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), this;
        if (Nu.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === Ou) {
          if (Ou._storeEffectOnSubMeshes && !uu._drawWrapper?._wasPreviouslyReady || !Ou._storeEffectOnSubMeshes && !Ou._getDrawWrapper()._wasPreviouslyReady) return Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), this
        } else {
          if (Ou._storeEffectOnSubMeshes) {
            if (!Ou.isReadyForSubMesh(this, uu, cu)) return Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), this
          } else if (!Ou.isReady(this, cu)) return Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = Ou
        }
        if (Eu) {
          const uu = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === uu.alphaModes.length) Uu.setAlphaMode(uu.alphaMode);
          else
            for (let Eu = 0; Eu < uu.alphaModes.length; Eu++) {
              const ju = uu.alphaModes[Eu];
              Uu.setAlphaMode(void 0 !== ju ? ju : 2, !1, Eu)
            }
        }
        let Yu;
        Yu = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? uu._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const hu = Yu?.effect ?? null;
        for (let wu = 0, Ju = su._beforeRenderingMeshStage; wu < Ju.length; wu++) {
          Ju[wu].action(this, uu, qu, hu)
        }
        if (!Yu || !hu) return Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), this;
        const Du = ju || this;
        let gu;
        if (!Nu.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const uu = Du._getWorldMatrixDeterminant();
          gu = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), uu < 0 && (gu = gu === Ku.b.ClockWiseSideOrientation ? Ku.b.CounterClockWiseSideOrientation : Ku.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = gu
        }
        const Mu = this._internalMeshDataInfo._effectiveMaterial._preBind(Yu, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && Uu.setDepthWrite(!0);
        const eu = this._internalMeshDataInfo._effectiveMaterial,
          Gu = eu.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), cu || this._bind(uu, hu, Gu, !1);
        const pu = Du.getWorldMatrix();
        eu._storeEffectOnSubMeshes ? eu.bindForSubMesh(pu, this, uu) : eu.bind(pu, this);
        try {
          Vu.c._BindAttachmentsForEffect(Uu, hu) && (!eu.backFaceCulling && eu.separateCullingPass && (Uu.setState(!0, eu.zOffset, !1, !Mu, eu.cullBackFaces, eu.stencil, eu.zOffsetUnits), this._processRendering(this, uu, hu, Gu, qu, cu, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), Uu.setState(!0, eu.zOffset, !1, Mu, eu.cullBackFaces, eu.stencil, eu.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(uu)), this._processRendering(this, uu, hu, Gu, qu, cu, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          Vu.c._RestoreAttachments(Uu)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let wu = 0, Ju = su._afterRenderingMeshStage; wu < Ju.length; wu++) {
          Ju[wu].action(this, uu, qu, hu)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), Cu && (Cu.maxZ = fu, su.updateTransformMatrix(!0)), 2 !== su.performancePriority || Nu.isFrozen || this._freeze(), this
      }
      _renderRunFollower(uu, Eu) {
        const ju = this._scene,
          su = ju._engine;
        if (su.isWebGPU || uu._mesh !== this || 0 !== this.instances.length || this.render !== yu.prototype.render) return !1;
        const Uu = uu.oO();
        if (!Uu || Uu !== ju._cachedMaterial || void 0 === Uu._canBindRunFollower) return !1;
        const Zu = uu._drawWrapper,
          Xu = Zu?.effect;
        if (!Xu || Xu !== ju._cachedEffect || this.visibility !== ju._cachedVisibility || Zu._forceRebindOnNextCall) return !1;
        const lu = this.hasThinInstances;
        if (!lu && this._userInstancedBuffersStorage) return !1;
        if (!Zu._wasPreviouslyReady || Zu._wasPreviouslyUsingInstances !== lu) return !1;
        const qu = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ju._isInIntermediateRendering() || 0 !== ju._beforeRenderingMeshStage.length || 0 !== ju._afterRenderingMeshStage.length || qu._onBeforeRenderObservable?.hasObservers() || qu._onBeforeBindObservable?.hasObservers() || qu._onAfterRenderObservable?.hasObservers()) return !1;
        const fu = this.occlusionType;
        if (void 0 !== fu && fu !== mu.e.OCCLUSION_TYPE_NONE || !Uu._canBindRunFollower(ju, su, this, uu, Xu)) return !1;
        const Cu = this._internalAbstractMeshDataInfo,
          bu = Cu._isActiveIntermediate;
        bu ? Cu._isActiveIntermediate = !1 : Cu._isActive = !1;
        const cu = ju.activeCameras?.length ?? 0;
        (cu > 1 && ju.activeCamera === ju.activeCameras[0] || cu <= 1) && this._checkOcclusionQuery(!1);
        const Nu = this._getInstancesRenderList(uu._id);
        if (Nu.mustReturn) return !0;
        if (!lu && !Nu.renderSelf[uu._id]) return bu ? Cu._isActiveIntermediate = !0 : Cu._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (qu._effectiveMaterial = Uu, Eu)
          if (1 === Uu.alphaModes.length) su.setAlphaMode(Uu.alphaMode);
          else
            for (let Yu = 0; Yu < Uu.alphaModes.length; Yu++) {
              const uu = Uu.alphaModes[Yu];
              su.setAlphaMode(void 0 !== uu ? uu : 2, !1, Yu)
            }
        if (Uu.backFaceCulling || null !== Uu.sideOrientation || Uu._twoSidedLighting) {
          const uu = this._getWorldMatrixDeterminant();
          let Eu = Uu._getEffectiveOrientation(this);
          uu < 0 && (Eu = Eu === Ku.b.ClockWiseSideOrientation ? Ku.b.CounterClockWiseSideOrientation : Ku.b.ClockWiseSideOrientation), qu._effectiveSideOrientation = Eu
        }
        Uu._preBind(Zu, qu._effectiveSideOrientation), Uu.forceDepthWrite && su.setDepthWrite(!0);
        const Ou = Uu.fillMode;
        return lu || this._bind(uu, Xu, Ou, !1), Uu._bindRunFollower(this.getWorldMatrix(), this, uu, Xu), this._processRendering(this, uu, Xu, Ou, Nu, lu, this._onBeforeDraw, Uu), Uu.unbind(), 2 === ju.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(Pu.j.MatricesWeightsKind) && (this.isVerticesDataPresent(Pu.j.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const uu = this.getVerticesData(Pu.j.MatricesWeightsKind),
          Eu = uu.length;
        for (let ju = 0; ju < Eu; ju += 4) {
          const Eu = uu[ju] + uu[ju + 1] + uu[ju + 2] + uu[ju + 3];
          if (0 === Eu) uu[ju] = 1;
          else {
            const su = 1 / Eu;
            uu[ju] *= su, uu[ju + 1] *= su, uu[ju + 2] *= su, uu[ju + 3] *= su
          }
        }
        this.setVerticesData(Pu.j.MatricesWeightsKind, uu)
      }
      _normalizeSkinWeightsAndExtra() {
        const uu = this.getVerticesData(Pu.j.MatricesWeightsExtraKind),
          Eu = this.getVerticesData(Pu.j.MatricesWeightsKind),
          ju = Eu.length;
        for (let su = 0; su < ju; su += 4) {
          let ju = Eu[su] + Eu[su + 1] + Eu[su + 2] + Eu[su + 3];
          if (ju += uu[su] + uu[su + 1] + uu[su + 2] + uu[su + 3], 0 === ju) Eu[su] = 1;
          else {
            const Uu = 1 / ju;
            Eu[su] *= Uu, Eu[su + 1] *= Uu, Eu[su + 2] *= Uu, Eu[su + 3] *= Uu, uu[su] *= Uu, uu[su + 1] *= Uu, uu[su + 2] *= Uu, uu[su + 3] *= Uu
          }
        }
        this.setVerticesData(Pu.j.MatricesWeightsKind, Eu), this.setVerticesData(Pu.j.MatricesWeightsKind, uu)
      }
      validateSkinning() {
        const uu = this.getVerticesData(Pu.j.MatricesWeightsExtraKind),
          Eu = this.getVerticesData(Pu.j.MatricesWeightsKind);
        if (null === Eu || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          HN: "not skinned"
        };
        const ju = Eu.length;
        let su = 0,
          Uu = 0,
          Zu = 0,
          Xu = 0;
        const lu = null === uu ? 4 : 8,
          qu = [];
        for (let Nu = 0; Nu <= lu; Nu++) qu[Nu] = 0;
        for (let Nu = 0; Nu < ju; Nu += 4) {
          let ju = Eu[Nu],
            fu = ju,
            Cu = 0 === fu ? 0 : 1;
          for (let Uu = 1; Uu < lu; Uu++) {
            const Zu = Uu < 4 ? Eu[Nu + Uu] : uu[Nu + Uu - 4];
            Zu > ju && su++, 0 !== Zu && Cu++, fu += Zu, ju = Zu
          }
          if (qu[Cu]++, Cu > Zu && (Zu = Cu), 0 === fu) Uu++;
          else {
            const ju = 1 / fu;
            let su = 0;
            for (let Uu = 0; Uu < lu; Uu++) su += Uu < 4 ? Math.abs(Eu[Nu + Uu] - Eu[Nu + Uu] * ju) : Math.abs(uu[Nu + Uu - 4] - uu[Nu + Uu - 4] * ju);
            su > .001 && Xu++
          }
        }
        const fu = this.skeleton.bones.length,
          Cu = this.getVerticesData(Pu.j.MatricesIndicesKind),
          bu = this.getVerticesData(Pu.j.MatricesIndicesExtraKind);
        let cu = 0;
        for (let Nu = 0; Nu < ju; Nu += 4)
          for (let uu = 0; uu < lu; uu++) {
            const Eu = uu < 4 ? Cu[Nu + uu] : bu[Nu + uu - 4];
            (Eu >= fu || Eu < 0) && cu++
          }
        return {
          skinned: !0,
          valid: 0 === Uu && 0 === Xu && 0 === cu,
          HN: "Number of Weights = " + ju / 4 + "\nMaximum influences = " + Zu + "\nMissing Weights = " + Uu + "\nNot Sorted = " + su + "\nNot Normalized = " + Xu + "\nWeightCounts = [" + qu + "]\nNumber of bones = " + fu + "\nBad Bone Indices = " + cu
        }
      }
      _checkDelayState() {
        const uu = this.hV();
        return this._geometry ? this._geometry.load(uu) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(uu)), this
      }
      _queueLoad(uu) {
        uu.addPendingData(this);
        const Eu = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ju = await uu._loadDelayedFileAsync(this.delayLoadingFile, Eu, !0);
            ju instanceof ArrayBuffer ? this._delayLoadingFunction(ju, this) : this._delayLoadingFunction(JSON.parse(ju), this);
            for (const uu of this.instances) uu.refreshBoundingInfo(), uu._syncSubMeshes();
            this.delayLoadState = 1, uu.removePendingData(this)
          } catch (ju) {
            uu.removePendingData(this), uu.Gw || Wu.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ju}`)
          }
        })(), this
      }
      isInFrustum(uu) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(uu) && (this._checkDelayState(), !0))
      }
      setMaterialById(uu) {
        const Eu = this.hV().materials;
        let ju;
        for (ju = Eu.length - 1; ju > -1; ju--)
          if (Eu[ju].id === uu) return this.material = Eu[ju], this;
        const su = this.hV().multiMaterials;
        for (ju = su.length - 1; ju > -1; ju--)
          if (su[ju].id === uu) return this.material = su[ju], this;
        return this
      }
      getAnimatables() {
        const uu = [];
        return this.material && uu.push(this.material), this.skeleton && uu.push(this.skeleton), uu
      }
      bakeTransformIntoVertices(uu) {
        if (!this.isVerticesDataPresent(Pu.j.PositionKind)) return this;
        const Eu = this.iG.splice(0);
        this._resetPointsArrayCache();
        let ju = this.getVerticesData(Pu.j.PositionKind);
        const su = Ju.t.Zero();
        let Uu;
        for (Uu = 0; Uu < ju.length; Uu += 3) Ju.t.TransformCoordinatesFromFloatsToRef(ju[Uu], ju[Uu + 1], ju[Uu + 2], uu, su).toArray(ju, Uu);
        if (this.setVerticesData(Pu.j.PositionKind, ju, this.getVertexBuffer(Pu.j.PositionKind).isUpdatable()), this.isVerticesDataPresent(Pu.j.NormalKind)) {
          for (ju = this.getVerticesData(Pu.j.NormalKind), Uu = 0; Uu < ju.length; Uu += 3) Ju.t.TransformNormalFromFloatsToRef(ju[Uu], ju[Uu + 1], ju[Uu + 2], uu, su).normalize().toArray(ju, Uu);
          this.setVerticesData(Pu.j.NormalKind, ju, this.getVertexBuffer(Pu.j.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(Pu.j.TangentKind)) {
          for (ju = this.getVerticesData(Pu.j.TangentKind), Uu = 0; Uu < ju.length; Uu += 4) Ju.t.TransformNormalFromFloatsToRef(ju[Uu], ju[Uu + 1], ju[Uu + 2], uu, su).normalize().toArray(ju, Uu);
          this.setVerticesData(Pu.j.TangentKind, ju, this.getVertexBuffer(Pu.j.TangentKind).isUpdatable())
        }
        return uu.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.iG = Eu, this
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
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (Eu && void 0 === Eu._addToSceneRootNodes) {
          const ju = Eu;
          return nu.source = this, nu.doNotCloneChildren = ju.doNotCloneChildren, nu.clonePhysicsImpostor = ju.clonePhysicsImpostor, nu.cloneThinInstances = ju.cloneThinInstances, new yu(uu, this.hV(), nu)
        }
        return new yu(uu, this.hV(), Eu, this, ju, su)
      }
      dispose(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ju = this._internalMeshDataInfo;
        if (ju._onBeforeDrawObservable && ju._onBeforeDrawObservable.clear(), ju._onBeforeBindObservable && ju._onBeforeBindObservable.clear(), ju._onBeforeRenderObservable && ju._onBeforeRenderObservable.clear(), ju._onAfterRenderObservable && ju._onAfterRenderObservable.clear(), ju._onBetweenPassObservable && ju._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ju.meshMap)
            for (const uu in ju.meshMap) {
              const Eu = ju.meshMap[uu];
              Eu && (Eu._internalMeshDataInfo._source = null, ju.meshMap[uu] = void 0)
            }
          ju._source && ju._source._internalMeshDataInfo.meshMap && (ju._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const uu = this.hV().meshes;
          for (const Eu of uu) {
            const uu = Eu;
            uu._internalMeshDataInfo && uu._internalMeshDataInfo._source && uu._internalMeshDataInfo._source === this && (uu._internalMeshDataInfo._source = null)
          }
        }
        ju._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(uu, Eu)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(uu, Eu, ju, su, Uu, Zu) {
        let Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          lu = arguments.length > 7 ? arguments[7] : void 0;
        const qu = this.hV();
        return (0, Mu.q)(uu, (uu => {
          const lu = uu.width,
            qu = uu.height,
            fu = this.wO().createCanvas(lu, qu).getContext("2d");
          fu.drawImage(uu, 0, 0);
          const Cu = fu.getImageData(0, 0, lu, qu).data;
          this.applyDisplacementMapFromBuffer(Cu, lu, qu, Eu, ju, Uu, Zu, Xu), su && su(this)
        }), lu || (() => {}), qu.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(Pu.j.PositionKind) || !this.isVerticesDataPresent(Pu.j.NormalKind) || !this.isVerticesDataPresent(Pu.j.UVKind)) return Wu.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const qu = this.getVerticesData(Pu.j.PositionKind, !0, !0),
          fu = this.getVerticesData(Pu.j.NormalKind),
          Cu = this.getVerticesData(Pu.j.UVKind);
        let bu = Ju.t.Zero();
        const cu = Ju.t.Zero(),
          Nu = Ju.p.Zero();
        Zu = Zu || Ju.p.Zero(), Xu = Xu || new Ju.p(1, 1);
        for (let Ou = 0; Ou < qu.length; Ou += 3) {
          Ju.t.FromArrayToRef(qu, Ou, bu), Ju.t.FromArrayToRef(fu, Ou, cu), Ju.p.FromArrayToRef(Cu, Ou / 3 * 2, Nu);
          const lu = 4 * ((Math.abs(Nu.x * Xu.x + Zu.x % 1) * (Eu - 1) % Eu | 0) + (Math.abs(Nu.y * Xu.y + Zu.y % 1) * (ju - 1) % ju | 0) * Eu),
            Yu = .3 * (uu[lu] / 255) + .59 * (uu[lu + 1] / 255) + .11 * (uu[lu + 2] / 255);
          cu.normalize(), cu.scaleInPlace(su + (Uu - su) * Yu), bu = bu.add(cu), bu.toArray(qu, Ou)
        }
        return ou.b.ComputeNormals(qu, this.Ysu(), fu), lu ? (this.setVerticesData(Pu.j.PositionKind, qu), this.setVerticesData(Pu.j.NormalKind, fu), this.setVerticesData(Pu.j.UVKind, Cu)) : (this.updateVerticesData(Pu.j.PositionKind, qu), this.updateVerticesData(Pu.j.NormalKind, fu)), this
      }
      _getFlattenedNormals(uu, Eu) {
        const ju = new Float32Array(3 * uu.length);
        let su = 0;
        const Uu = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let Zu = 0; Zu < uu.length; Zu += 3) {
          const Xu = Ju.t.FromArray(Eu, 3 * uu[Zu]),
            lu = Ju.t.FromArray(Eu, 3 * uu[Zu + 1]),
            qu = Ju.t.FromArray(Eu, 3 * uu[Zu + 2]),
            fu = Xu.subtract(lu),
            Cu = qu.subtract(lu),
            bu = Ju.t.Normalize(Ju.t.Cross(fu, Cu));
          Uu && bu.scaleInPlace(-1);
          for (let uu = 0; uu < 3; uu++) ju[su++] = bu.x, ju[su++] = bu.y, ju[su++] = bu.z
        }
        return ju
      }
      _convertToUnIndexedMesh() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = this.getVerticesDataKinds().filter((uu => !this.getVertexBuffer(uu)?.getIsInstanced())),
          ju = this.Ysu(!1, !0),
          su = {},
          Uu = (uu, Eu) => {
            const su = new Float32Array(ju.length * Eu);
            let Uu = 0;
            for (let Zu = 0; Zu < ju.length; Zu++)
              for (let Xu = 0; Xu < Eu; Xu++) su[Uu++] = uu[ju[Zu] * Eu + Xu];
            return su
          },
          Zu = this.EW(),
          Xu = this.geometry ? this.iG.slice(0) : [];
        for (const lu of Eu) su[lu] = this.getVerticesData(lu);
        for (const lu of Eu) {
          const Eu = this.getVertexBuffer(lu),
            Zu = Eu.getSize();
          if (uu && lu === Pu.j.NormalKind) {
            const uu = this._getFlattenedNormals(ju, su[Pu.j.PositionKind]);
            this.setVerticesData(Pu.j.NormalKind, uu, Eu.isUpdatable(), Zu)
          } else this.setVerticesData(lu, Uu(su[lu], Zu), Eu.isUpdatable(), Zu)
        }
        if (this.morphTargetManager) {
          for (let Eu = 0; Eu < this.morphTargetManager.numTargets; Eu++) {
            const su = this.morphTargetManager.getTarget(Eu),
              Zu = su.getPositions();
            su.FXu(Uu(Zu, 3));
            const Xu = su.getNormals();
            Xu && su.setNormals(uu ? this._getFlattenedNormals(ju, Zu) : Uu(Xu, 3));
            const lu = su.getTangents();
            lu && su.setTangents(Uu(lu, 3));
            const qu = su.getUVs();
            qu && su.setUVs(Uu(qu, 2));
            const fu = su.getColors();
            fu && su.setColors(Uu(fu, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let lu = 0; lu < ju.length; lu++) ju[lu] = lu;
        this.setIndices(ju), this._unIndexed = !0, this.releaseSubMeshes();
        for (const lu of Xu) {
          const uu = lu.EW();
          vu.e.AddToMesh(lu.materialIndex, lu.indexStart, lu.indexCount, lu.indexStart, lu.indexCount, this).setBoundingInfo(uu)
        }
        return this.setBoundingInfo(Zu), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = ou.b.ExtractFromMesh(this);
        let ju;
        if (uu && this.isVerticesDataPresent(Pu.j.NormalKind) && Eu.normals) {
          for (ju = 0; ju < Eu.normals.length; ju++) Eu.normals[ju] *= -1;
          this.setVerticesData(Pu.j.NormalKind, Eu.normals, this.isVertexBufferUpdatable(Pu.j.NormalKind))
        }
        if (Eu.indices) {
          let uu;
          for (ju = 0; ju < Eu.indices.length; ju += 3) uu = Eu.indices[ju + 1], Eu.indices[ju + 1] = Eu.indices[ju + 2], Eu.indices[ju + 2] = uu;
          this.setIndices(Eu.indices, null, this.isVertexBufferUpdatable(Pu.j.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const Eu = ou.b.ExtractFromMesh(this),
          ju = Eu.indices && !Array.isArray(Eu.indices) && Array.from ? Array.from(Eu.indices) : Eu.indices,
          su = Eu.positions && !Array.isArray(Eu.positions) && Array.from ? Array.from(Eu.positions) : Eu.positions,
          Uu = Eu.uvs && !Array.isArray(Eu.uvs) && Array.from ? Array.from(Eu.uvs) : Eu.uvs,
          Zu = Eu.normals && !Array.isArray(Eu.normals) && Array.from ? Array.from(Eu.normals) : Eu.normals;
        if (ju && su) {
          Eu.indices = ju, Eu.positions = su, Uu && (Eu.uvs = Uu), Zu && (Eu.normals = Zu);
          const Xu = uu + 1,
            lu = [];
          for (let uu = 0; uu < Xu + 1; uu++) lu[uu] = [];
          let qu, fu;
          const Cu = new Ju.t(0, 0, 0),
            bu = new Ju.t(0, 0, 0),
            cu = new Ju.p(0, 0),
            Nu = [],
            Ou = [],
            Yu = [];
          let hu, Du, gu, Mu = su.length;
          Uu && (Du = Uu.length), Zu && (gu = Zu.length);
          for (let uu = 0; uu < ju.length; uu += 3) {
            Ou[0] = ju[uu], Ou[1] = ju[uu + 1], Ou[2] = ju[uu + 2];
            for (let uu = 0; uu < 3; uu++)
              if (qu = Ou[uu], fu = Ou[(uu + 1) % 3], void 0 === Yu[qu] && void 0 === Yu[fu] ? (Yu[qu] = [], Yu[fu] = []) : (void 0 === Yu[qu] && (Yu[qu] = []), void 0 === Yu[fu] && (Yu[fu] = [])), void 0 === Yu[qu][fu] && void 0 === Yu[fu][qu]) {
                Yu[qu][fu] = [], Cu.x = (su[3 * fu] - su[3 * qu]) / Xu, Cu.y = (su[3 * fu + 1] - su[3 * qu + 1]) / Xu, Cu.z = (su[3 * fu + 2] - su[3 * qu + 2]) / Xu, Zu && (bu.x = (Zu[3 * fu] - Zu[3 * qu]) / Xu, bu.y = (Zu[3 * fu + 1] - Zu[3 * qu + 1]) / Xu, bu.z = (Zu[3 * fu + 2] - Zu[3 * qu + 2]) / Xu), Uu && (cu.x = (Uu[2 * fu] - Uu[2 * qu]) / Xu, cu.y = (Uu[2 * fu + 1] - Uu[2 * qu + 1]) / Xu), Yu[qu][fu].push(qu);
                for (let uu = 1; uu < Xu; uu++) Yu[qu][fu].push(su.length / 3), su[Mu++] = su[3 * qu] + uu * Cu.x, su[Mu++] = su[3 * qu + 1] + uu * Cu.y, su[Mu++] = su[3 * qu + 2] + uu * Cu.z, Zu && (Zu[gu++] = Zu[3 * qu] + uu * bu.x, Zu[gu++] = Zu[3 * qu + 1] + uu * bu.y, Zu[gu++] = Zu[3 * qu + 2] + uu * bu.z), Uu && (Uu[Du++] = Uu[2 * qu] + uu * cu.x, Uu[Du++] = Uu[2 * qu + 1] + uu * cu.y);
                Yu[qu][fu].push(fu), Yu[fu][qu] = [], hu = Yu[qu][fu].length;
                for (let uu = 0; uu < hu; uu++) Yu[fu][qu][uu] = Yu[qu][fu][hu - 1 - uu]
              } lu[0][0] = ju[uu], lu[1][0] = Yu[ju[uu]][ju[uu + 1]][1], lu[1][1] = Yu[ju[uu]][ju[uu + 2]][1];
            for (let Eu = 2; Eu < Xu; Eu++) {
              lu[Eu][0] = Yu[ju[uu]][ju[uu + 1]][Eu], lu[Eu][Eu] = Yu[ju[uu]][ju[uu + 2]][Eu], Cu.x = (su[3 * lu[Eu][Eu]] - su[3 * lu[Eu][0]]) / Eu, Cu.y = (su[3 * lu[Eu][Eu] + 1] - su[3 * lu[Eu][0] + 1]) / Eu, Cu.z = (su[3 * lu[Eu][Eu] + 2] - su[3 * lu[Eu][0] + 2]) / Eu, Zu && (bu.x = (Zu[3 * lu[Eu][Eu]] - Zu[3 * lu[Eu][0]]) / Eu, bu.y = (Zu[3 * lu[Eu][Eu] + 1] - Zu[3 * lu[Eu][0] + 1]) / Eu, bu.z = (Zu[3 * lu[Eu][Eu] + 2] - Zu[3 * lu[Eu][0] + 2]) / Eu), Uu && (cu.x = (Uu[2 * lu[Eu][Eu]] - Uu[2 * lu[Eu][0]]) / Eu, cu.y = (Uu[2 * lu[Eu][Eu] + 1] - Uu[2 * lu[Eu][0] + 1]) / Eu);
              for (let uu = 1; uu < Eu; uu++) lu[Eu][uu] = su.length / 3, su[Mu++] = su[3 * lu[Eu][0]] + uu * Cu.x, su[Mu++] = su[3 * lu[Eu][0] + 1] + uu * Cu.y, su[Mu++] = su[3 * lu[Eu][0] + 2] + uu * Cu.z, Zu && (Zu[gu++] = Zu[3 * lu[Eu][0]] + uu * bu.x, Zu[gu++] = Zu[3 * lu[Eu][0] + 1] + uu * bu.y, Zu[gu++] = Zu[3 * lu[Eu][0] + 2] + uu * bu.z), Uu && (Uu[Du++] = Uu[2 * lu[Eu][0]] + uu * cu.x, Uu[Du++] = Uu[2 * lu[Eu][0] + 1] + uu * cu.y)
            }
            lu[Xu] = Yu[ju[uu + 1]][ju[uu + 2]], Nu.push(lu[0][0], lu[1][0], lu[1][1]);
            for (let uu = 1; uu < Xu; uu++) {
              let Eu;
              for (Eu = 0; Eu < uu; Eu++) Nu.push(lu[uu][Eu], lu[uu + 1][Eu], lu[uu + 1][Eu + 1]), Nu.push(lu[uu][Eu], lu[uu + 1][Eu + 1], lu[uu][Eu + 1]);
              Nu.push(lu[uu][Eu], lu[uu + 1][Eu], lu[uu + 1][Eu + 1])
            }
          }
          Eu.indices = Nu, Eu.applyToMesh(this, this.isVertexBufferUpdatable(Pu.j.PositionKind))
        } else Wu.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const uu = ou.b.ExtractFromMesh(this),
          Eu = uu.uvs,
          ju = uu.indices,
          su = uu.positions,
          Uu = uu.colors,
          Zu = uu.matricesIndices,
          Xu = uu.matricesWeights,
          lu = uu.matricesIndicesExtra,
          qu = uu.matricesWeightsExtra;
        if (void 0 === ju || void 0 === su || null === ju || null === su) Wu.b.Warn("VertexData contains empty entries");
        else {
          const fu = [],
            Cu = [],
            bu = [],
            cu = [],
            Nu = [],
            Ou = [],
            Yu = [],
            hu = [];
          let Du, gu = 0;
          const Mu = {};
          let eu, Gu;
          for (let uu = 0; uu < ju.length; uu += 3) {
            Gu = [ju[uu], ju[uu + 1], ju[uu + 2]], Du = [];
            for (let uu = 0; uu < 3; uu++) {
              Du[uu] = "";
              for (let Eu = 0; Eu < 3; Eu++) Math.abs(su[3 * Gu[uu] + Eu]) < 1e-8 && (su[3 * Gu[uu] + Eu] = 0), Du[uu] += su[3 * Gu[uu] + Eu] + "|"
            }
            if (Du[0] != Du[1] && Du[0] != Du[2] && Du[1] != Du[2])
              for (let uu = 0; uu < 3; uu++) {
                if (eu = Mu[Du[uu]], void 0 === eu) {
                  Mu[Du[uu]] = gu, eu = gu++;
                  for (let Eu = 0; Eu < 3; Eu++) fu.push(su[3 * Gu[uu] + Eu]);
                  if (null !== Uu && void 0 !== Uu)
                    for (let Eu = 0; Eu < 4; Eu++) cu.push(Uu[4 * Gu[uu] + Eu]);
                  if (null !== Eu && void 0 !== Eu)
                    for (let ju = 0; ju < 2; ju++) bu.push(Eu[2 * Gu[uu] + ju]);
                  if (null !== Zu && void 0 !== Zu)
                    for (let Eu = 0; Eu < 4; Eu++) Nu.push(Zu[4 * Gu[uu] + Eu]);
                  if (null !== Xu && void 0 !== Xu)
                    for (let Eu = 0; Eu < 4; Eu++) Ou.push(Xu[4 * Gu[uu] + Eu]);
                  if (null !== lu && void 0 !== lu)
                    for (let Eu = 0; Eu < 4; Eu++) Yu.push(lu[4 * Gu[uu] + Eu]);
                  if (null !== qu && void 0 !== qu)
                    for (let Eu = 0; Eu < 4; Eu++) hu.push(qu[4 * Gu[uu] + Eu])
                }
                Cu.push(eu)
              }
          }
          const pu = [];
          ou.b.ComputeNormals(fu, Cu, pu), uu.positions = fu, uu.indices = Cu, uu.normals = pu, null !== Eu && void 0 !== Eu && (uu.uvs = bu), null !== Uu && void 0 !== Uu && (uu.colors = cu), null !== Zu && void 0 !== Zu && (uu.matricesIndices = Nu), null !== Xu && void 0 !== Xu && (uu.matricesWeights = Ou), null !== lu && void 0 !== lu && (uu.matricesIndicesExtra = Yu), null !== Xu && void 0 !== Xu && (uu.matricesWeightsExtra = hu), uu.applyToMesh(this, this.isVertexBufferUpdatable(Pu.j.PositionKind))
        }
      }
      static _instancedMeshFactory(uu, Eu) {
        throw (0, Iu.h)("InstancedMesh")
      }
      static _PhysicsImpostorParser(uu, Eu, ju) {
        throw (0, Iu.h)("PhysicsImpostor")
      }
      createInstance(uu) {
        const Eu = yu._instancedMeshFactory(uu, this);
        return Eu.parent = this.parent, Eu
      }
      synchronizeInstances() {
        for (let uu = 0; uu < this.instances.length; uu++) {
          this.instances[uu]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(uu) {
        const Eu = this.Ysu(),
          ju = this.getVerticesData(Pu.j.PositionKind);
        if (!ju || !Eu) return this;
        const su = [];
        for (let Zu = 0; Zu < ju.length; Zu += 3) su.push(Ju.t.FromArray(ju, Zu));
        const Uu = [];
        return gu.d.SyncAsyncForLoop(su.length, 40, (uu => {
          const Eu = su.length - 1 - uu,
            ju = su[Eu];
          for (let Zu = 0; Zu < Eu; ++Zu) {
            const uu = su[Zu];
            if (ju.equals(uu)) {
              Uu[Eu] = Zu;
              break
            }
          }
        }), (() => {
          for (let uu = 0; uu < Eu.length; ++uu) Eu[uu] = Uu[Eu[uu]] || Eu[uu];
          const ju = this.iG.slice(0);
          this.setIndices(Eu), this.iG = ju, uu && uu(this)
        })), this
      }
      serialize() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        uu.name = this.name, uu.id = this.id, uu.uniqueId = this.uniqueId, uu.type = this.getClassName(), Gu.c && Gu.c.HasTags(this) && (uu.tags = Gu.c.GetTags(this)), uu.position = this.position.Osu(), this.rotationQuaternion ? uu.rotationQuaternion = this.rotationQuaternion.Osu() : this.rotation && (uu.rotation = this.rotation.Osu()), uu.Of = this.Of.Osu(), this._postMultiplyPivotMatrix ? uu.pivotMatrix = this.getPivotMatrix().Osu() : uu.localMatrix = this.getPivotMatrix().Osu(), uu.isEnabled = this.isEnabled(!1), uu.isVisible = this.isVisible, uu.infiniteDistance = this.infiniteDistance, uu.pickable = this.VY, uu.receiveShadows = this.receiveShadows, uu.billboardMode = this.billboardMode, uu.visibility = this.visibility, uu.JO = this.JO, uu.checkCollisions = this.checkCollisions, uu.ellipsoid = this.ellipsoid.Osu(), uu.ellipsoidOffset = this.ellipsoidOffset.Osu(), uu.PO = this.PO, uu.isBlocker = this.isBlocker, uu.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (uu.KV = !0), this.parent && this.parent._serializeAsParent(uu), uu.isUnIndexed = this.isUnIndexed;
        const Eu = this._geometry;
        if (Eu && this.iG) {
          uu.geometryUniqueId = Eu.uniqueId, uu.geometryId = Eu.id, uu.iG = [];
          for (let Eu = 0; Eu < this.iG.length; Eu++) {
            const ju = this.iG[Eu];
            uu.iG.push({
              materialIndex: ju.materialIndex,
              verticesStart: ju.verticesStart,
              verticesCount: ju.verticesCount,
              indexStart: ju.indexStart,
              indexCount: ju.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (uu.materialUniqueId = this.material.uniqueId, uu.materialId = this.material.id) : (this.material = null, uu.materialUniqueId = this._scene.defaultMaterial.uniqueId, uu.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (uu.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (uu.skeletonId = this.skeleton.id, uu.skeletonUniqueId = this.skeleton.uniqueId, uu.numBoneInfluencers = this.numBoneInfluencers), this.hV()._getComponent(Fu.b.NAME_PHYSICSENGINE)) {
          const Eu = this.getPhysicsImpostor?.();
          Eu && (uu.physicsMass = Eu.getParam("pl"), uu.physicsFriction = Eu.getParam("friction"), uu.physicsRestitution = Eu.getParam("pl"), uu.physicsImpostor = Eu.type)
        }
        this.metadata && (uu.metadata = this.metadata), 0 !== this.meshBlendingTag && (uu.meshBlendingTag = this.meshBlendingTag), uu.instances = [];
        for (let ju = 0; ju < this.instances.length; ju++) {
          const Eu = this.instances[ju];
          if (Eu.doNotSerialize) continue;
          const su = {
            name: Eu.name,
            id: Eu.id,
            isEnabled: Eu.isEnabled(!1),
            isVisible: Eu.isVisible,
            VY: Eu.VY,
            checkCollisions: Eu.checkCollisions,
            position: Eu.position.Osu(),
            Of: Eu.Of.Osu()
          };
          if (Eu.parent && Eu.parent._serializeAsParent(su), Eu.rotationQuaternion ? su.rotationQuaternion = Eu.rotationQuaternion.Osu() : Eu.rotation && (su.rotation = Eu.rotation.Osu()), this.hV()._getComponent(Fu.b.NAME_PHYSICSENGINE)) {
            const uu = Eu.getPhysicsImpostor?.();
            uu && (su.physicsMass = uu.getParam("pl"), su.physicsFriction = uu.getParam("friction"), su.physicsRestitution = uu.getParam("pl"), su.physicsImpostor = uu.type)
          }
          Eu.metadata && (su.metadata = Eu.metadata), Eu.actionManager && (su.actions = Eu.actionManager.serialize(Eu.name)), uu.instances.push(su), iu.e.AppendSerializedAnimations(Eu, su), su.HY = Eu.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (uu.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.rEu
          }, this._userThinInstanceBuffersStorage)) {
          const Eu = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const uu in this._userThinInstanceBuffersStorage.data) Eu.data[uu] = Array.from(this._userThinInstanceBuffersStorage.data[uu]), Eu.sizes[uu] = this._userThinInstanceBuffersStorage.sizes[uu], Eu.strides[uu] = this._userThinInstanceBuffersStorage.strides[uu];
          uu.thinInstances.userThinInstance = Eu
        }
        return iu.e.AppendSerializedAnimations(this, uu), uu.HY = this.serializeAnimationRanges(), uu.layerMask = this.layerMask, uu.alphaIndex = this.alphaIndex, uu.hasVertexAlpha = this.hasVertexAlpha, uu.overlayAlpha = this.overlayAlpha, uu.overlayColor = this.overlayColor.Osu(), uu.renderOverlay = this.renderOverlay, uu.applyFog = this.applyFog, this.actionManager && (uu.actions = this.actionManager.serialize(this.name)), uu
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const uu = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (uu && uu.vertexCount) {
          if (uu.vertexCount !== this.getTotalVertices()) return Wu.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (uu.isUsingTextureForTargets) return;
          for (let Eu = 0; Eu < uu.numInfluencers; Eu++) {
            const ju = uu.getActiveTarget(Eu),
              su = ju.getPositions();
            if (!su) return void Wu.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(Pu.j.PositionKind + Eu, su, !1, 3);
            const Uu = ju.getNormals();
            Uu && this.geometry.setVerticesData(Pu.j.NormalKind + Eu, Uu, !1, 3);
            const Zu = ju.getTangents();
            Zu && this.geometry.setVerticesData(Pu.j.TangentKind + Eu, Zu, !1, 3);
            const Xu = ju.getUVs();
            Xu && this.geometry.setVerticesData(Pu.j.UVKind + "_" + Eu, Xu, !1, 2);
            const lu = ju.getUV2s();
            lu && this.geometry.setVerticesData(Pu.j.UV2Kind + "_" + Eu, lu, !1, 2);
            const qu = ju.getColors();
            qu && this.geometry.setVerticesData(Pu.j.ColorKind + Eu, qu, !1, 4)
          }
        } else {
          let uu = 0;
          for (; this.geometry.isVerticesDataPresent(Pu.j.PositionKind + uu);) this.geometry.removeVerticesData(Pu.j.PositionKind + uu), this.geometry.isVerticesDataPresent(Pu.j.NormalKind + uu) && this.geometry.removeVerticesData(Pu.j.NormalKind + uu), this.geometry.isVerticesDataPresent(Pu.j.TangentKind + uu) && this.geometry.removeVerticesData(Pu.j.TangentKind + uu), this.geometry.isVerticesDataPresent(Pu.j.UVKind + "_" + uu) && this.geometry.removeVerticesData(Pu.j.UVKind + "_" + uu), this.geometry.isVerticesDataPresent(Pu.j.UV2Kind + "_" + uu) && this.geometry.removeVerticesData(Pu.j.UV2Kind + "_" + uu), this.geometry.isVerticesDataPresent(Pu.j.ColorKind + uu) && this.geometry.removeVerticesData(Pu.j.ColorKind + uu), uu++
        }
      }
      static Parse(uu, Eu, ju) {
        let su, Uu = !1;
        if (uu.type && "LinesMesh" === uu.type ? su = yu._LinesMeshParser(uu, Eu) : uu.type && "GroundMesh" === uu.type ? su = yu._GroundMeshParser(uu, Eu) : uu.type && "GoldbergMesh" === uu.type ? su = yu._GoldbergMeshParser(uu, Eu) : uu.type && "GreasedLineMesh" === uu.type ? su = yu._GreasedLineMeshParser(uu, Eu) : uu.type && "TrailMesh" === uu.type ? su = yu._TrailMeshParser(uu, Eu) : uu.type && "GaussianSplattingMesh" === uu.type ? (su = uu._isCompound ? yu._GaussianSplattingCompoundMeshParser(uu, Eu) : yu._GaussianSplattingMeshParser(uu, Eu), Uu = !0) : uu.type && "GaussianSplattingPartProxyMesh" === uu.type ? (su = yu._GaussianSplattingPartProxyMeshParser(uu, Eu), Uu = !0) : su = new yu(uu.name, Eu), su.id = uu.id, su._waitingParsedUniqueId = uu.uniqueId, Gu.c && Gu.c.AddTagsTo(su, uu.tags), su.position = Ju.t.FromArray(uu.position), void 0 !== uu.metadata && (su.metadata = uu.metadata), void 0 !== uu.meshBlendingTag && (su.meshBlendingTag = uu.meshBlendingTag), uu.rotationQuaternion ? su.rotationQuaternion = Ju.i.FromArray(uu.rotationQuaternion) : uu.rotation && (su.rotation = Ju.t.FromArray(uu.rotation)), su.Of = Ju.t.FromArray(uu.Of), uu.localMatrix ? su.setPreTransformMatrix(Ju.e.FromArray(uu.localMatrix)) : uu.pivotMatrix && su.setPivotMatrix(Ju.e.FromArray(uu.pivotMatrix)), su.Wk(uu.isEnabled), su.isVisible = uu.isVisible, su.infiniteDistance = uu.infiniteDistance, su.JO = !!uu.JO, su.showBoundingBox = uu.showBoundingBox, su.showSubMeshesBoundingBox = uu.showSubMeshesBoundingBox, void 0 !== uu.applyFog && (su.applyFog = uu.applyFog), void 0 !== uu.pickable && (su.VY = uu.pickable), void 0 !== uu.alphaIndex && (su.alphaIndex = uu.alphaIndex), su.receiveShadows = uu.receiveShadows, void 0 !== uu.billboardMode && (su.billboardMode = uu.billboardMode), void 0 !== uu.visibility && (su.visibility = uu.visibility), su.checkCollisions = uu.checkCollisions, su.PO = !!uu.PO, uu.ellipsoid && (su.ellipsoid = Ju.t.FromArray(uu.ellipsoid)), uu.ellipsoidOffset && (su.ellipsoidOffset = Ju.t.FromArray(uu.ellipsoidOffset)), null != uu.overrideMaterialSideOrientation && (su.sideOrientation = uu.overrideMaterialSideOrientation), void 0 !== uu.sideOrientation && (su.sideOrientation = uu.sideOrientation), void 0 !== uu.isBlocker && (su.isBlocker = uu.isBlocker), su._shouldGenerateFlatShading = uu.useFlatShading, uu.KV && (su._waitingData.KV = uu.KV), void 0 !== uu.parentId && (su._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (su._waitingParentInstanceIndex = uu.parentInstanceIndex), void 0 !== uu.actions && (su._waitingData.actions = uu.actions), void 0 !== uu.overlayAlpha && (su.overlayAlpha = uu.overlayAlpha), void 0 !== uu.overlayColor && (su.overlayColor = du.c.FromArray(uu.overlayColor)), void 0 !== uu.renderOverlay && (su.renderOverlay = uu.renderOverlay), su.isUnIndexed = !!uu.isUnIndexed, su.hasVertexAlpha = uu.hasVertexAlpha, uu.delayLoadingFile ? (su.delayLoadState = 4, su.delayLoadingFile = ju + uu.delayLoadingFile, su.buildBoundingInfo(Ju.t.FromArray(uu.boundingBoxMinimum), Ju.t.FromArray(uu.boundingBoxMaximum)), uu._binaryInfo && (su._binaryInfo = uu._binaryInfo), su._delayInfo = [], uu.hasUVs && su._delayInfo.push(Pu.j.UVKind), uu.hasUVs2 && su._delayInfo.push(Pu.j.UV2Kind), uu.hasUVs3 && su._delayInfo.push(Pu.j.UV3Kind), uu.hasUVs4 && su._delayInfo.push(Pu.j.UV4Kind), uu.hasUVs5 && su._delayInfo.push(Pu.j.UV5Kind), uu.hasUVs6 && su._delayInfo.push(Pu.j.UV6Kind), uu.hasColors && su._delayInfo.push(Pu.j.ColorKind), uu.hasMatricesIndices && su._delayInfo.push(Pu.j.MatricesIndicesKind), uu.hasMatricesWeights && su._delayInfo.push(Pu.j.MatricesWeightsKind), su._delayLoadingFunction = ku.b._ImportGeometry, Qu.b.ForceFullSceneLoadingForIncremental && su._checkDelayState()) : Uu || ku.b._ImportGeometry(uu, su), uu.materialUniqueId ? su._waitingMaterialId = uu.materialUniqueId : uu.materialId && (su._waitingMaterialId = uu.materialId), uu.morphTargetManagerId > -1 && (su._waitingMorphTargetManagerId = uu.morphTargetManagerId), void 0 !== uu.skeletonId && null !== uu.skeletonId && (su.skeleton = Eu.getLastSkeletonById(uu.skeletonId), su._waitingSkeletonId = uu.skeletonId, uu.numBoneInfluencers && (su.numBoneInfluencers = uu.numBoneInfluencers)), void 0 !== uu.skeletonUniqueId && null !== uu.skeletonUniqueId && (su._waitingSkeletonUniqueId = uu.skeletonUniqueId), uu.animations) {
          for (let Eu = 0; Eu < uu.animations.length; Eu++) {
            const ju = uu.animations[Eu],
              Uu = (0, Su.d)("BABYLON.Animation");
            Uu && su.animations.push(Uu.Parse(ju))
          }
          au.c.ParseAnimationRanges(su, uu, Eu)
        }
        if (uu.autoAnimate && Eu.beginAnimation(su, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), uu.layerMask && !isNaN(uu.layerMask) ? su.layerMask = Math.abs(parseInt(uu.layerMask)) : su.layerMask = 268435455, uu.physicsImpostor && (su.physicsImpostor = yu._PhysicsImpostorParser(Eu, su, uu)), uu.lodMeshIds && (su._waitingData.lods = {
            ids: uu.lodMeshIds,
            distances: uu.lodDistances ? uu.lodDistances : null,
            coverages: uu.lodCoverages ? uu.lodCoverages : null
          }), uu.instances)
          for (let Zu = 0; Zu < uu.instances.length; Zu++) {
            const ju = uu.instances[Zu],
              Uu = su.createInstance(ju.name);
            if (ju.id && (Uu.id = ju.id), Gu.c && (ju.tags ? Gu.c.AddTagsTo(Uu, ju.tags) : Gu.c.AddTagsTo(Uu, uu.tags)), Uu.position = Ju.t.FromArray(ju.position), void 0 !== ju.metadata && (Uu.metadata = ju.metadata), void 0 !== ju.parentId && (Uu._waitingParentId = ju.parentId), void 0 !== ju.parentInstanceIndex && (Uu._waitingParentInstanceIndex = ju.parentInstanceIndex), void 0 !== ju.isEnabled && null !== ju.isEnabled && Uu.Wk(ju.isEnabled), void 0 !== ju.isVisible && null !== ju.isVisible && (Uu.isVisible = ju.isVisible), void 0 !== ju.VY && null !== ju.VY && (Uu.VY = ju.VY), ju.rotationQuaternion ? Uu.rotationQuaternion = Ju.i.FromArray(ju.rotationQuaternion) : ju.rotation && (Uu.rotation = Ju.t.FromArray(ju.rotation)), Uu.Of = Ju.t.FromArray(ju.Of), void 0 != ju.checkCollisions && null != ju.checkCollisions && (Uu.checkCollisions = ju.checkCollisions), void 0 != ju.pickable && null != ju.pickable && (Uu.VY = ju.pickable), void 0 != ju.showBoundingBox && null != ju.showBoundingBox && (Uu.showBoundingBox = ju.showBoundingBox), void 0 != ju.showSubMeshesBoundingBox && null != ju.showSubMeshesBoundingBox && (Uu.showSubMeshesBoundingBox = ju.showSubMeshesBoundingBox), void 0 != ju.alphaIndex && null != ju.showSubMeshesBoundingBox && (Uu.alphaIndex = ju.alphaIndex), ju.physicsImpostor && (Uu.physicsImpostor = yu._PhysicsImpostorParser(Eu, Uu, ju)), void 0 !== ju.actions && (Uu._waitingData.actions = ju.actions), ju.animations) {
              for (let uu = 0; uu < ju.animations.length; uu++) {
                const Eu = ju.animations[uu],
                  su = (0, Su.d)("BABYLON.Animation");
                su && Uu.animations.push(su.Parse(Eu))
              }
              au.c.ParseAnimationRanges(Uu, ju, Eu), ju.autoAnimate && Eu.beginAnimation(Uu, ju.autoAnimateFrom, ju.autoAnimateTo, ju.autoAnimateLoop, ju.autoAnimateSpeed || 1)
            }
          }
        if (uu.thinInstances) {
          const Eu = uu.thinInstances;
          if (su.rEu = !!Eu.enablePicking, Eu.matrixData ? (su.Z6("matrix", new Float32Array(Eu.matrixData), 16, !1), su._thinInstanceDataStorage.matrixBufferSize = Eu.matrixBufferSize, su._thinInstanceDataStorage.instancesCount = Eu.instancesCount) : su._thinInstanceDataStorage.matrixBufferSize = Eu.matrixBufferSize, uu.thinInstances.userThinInstance) {
            const Eu = uu.thinInstances.userThinInstance;
            for (const uu in Eu.data) su.Z6(uu, new Float32Array(Eu.data[uu]), Eu.strides[uu], !1), su._userThinInstanceBuffersStorage.sizes[uu] = Eu.sizes[uu]
          }
        }
        return su
      }
      setPositionsForCPUSkinning() {
        const uu = this._internalMeshDataInfo;
        if (!uu._sourcePositions) {
          const Eu = this.getVerticesData(Pu.j.PositionKind);
          if (!Eu) return uu._sourcePositions;
          uu._sourcePositions = new Float32Array(Eu), this.isVertexBufferUpdatable(Pu.j.PositionKind) || this.setVerticesData(Pu.j.PositionKind, Eu, !0)
        }
        return uu._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const uu = this._internalMeshDataInfo;
        if (!uu._sourceNormals) {
          const Eu = this.getVerticesData(Pu.j.NormalKind);
          if (!Eu) return uu._sourceNormals;
          uu._sourceNormals = new Float32Array(Eu), this.isVertexBufferUpdatable(Pu.j.NormalKind) || this.setVerticesData(Pu.j.NormalKind, Eu, !0)
        }
        return uu._sourceNormals
      }
      applySkeleton(uu) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.hV().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.hV().getFrameId(), !this.isVerticesDataPresent(Pu.j.PositionKind)) return this;
        if (!this.isVerticesDataPresent(Pu.j.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(Pu.j.MatricesWeightsKind)) return this;
        const Eu = this.isVerticesDataPresent(Pu.j.NormalKind),
          ju = this._internalMeshDataInfo;
        if (!ju._sourcePositions) {
          const uu = this.iG.slice();
          this.setPositionsForCPUSkinning(), this.iG = uu
        }
        Eu && !ju._sourceNormals && this.setNormalsForCPUSkinning();
        let su = this.getVerticesData(Pu.j.PositionKind);
        if (!su) return this;
        su instanceof Float32Array || (su = new Float32Array(su));
        let Uu = this.getVerticesData(Pu.j.NormalKind);
        if (Eu) {
          if (!Uu) return this;
          Uu instanceof Float32Array || (Uu = new Float32Array(Uu))
        }
        const Zu = this.getVerticesData(Pu.j.MatricesIndicesKind),
          Xu = this.getVerticesData(Pu.j.MatricesWeightsKind);
        if (!Xu || !Zu) return this;
        const lu = this.numBoneInfluencers > 4,
          qu = lu ? this.getVerticesData(Pu.j.MatricesIndicesExtraKind) : null,
          fu = lu ? this.getVerticesData(Pu.j.MatricesWeightsExtraKind) : null,
          Cu = uu.getTransformMatrices(this),
          bu = Ju.t.Zero(),
          cu = new Ju.e,
          Nu = new Ju.e;
        let Ou, Yu = 0;
        for (let hu = 0; hu < su.length; hu += 3, Yu += 4) {
          let uu;
          for (Ou = 0; Ou < 4; Ou++) uu = Xu[Yu + Ou], uu > 0 && (Ju.e.FromFloat32ArrayToRefScaled(Cu, Math.floor(16 * Zu[Yu + Ou]), uu, Nu), cu.addToSelf(Nu));
          if (lu)
            for (Ou = 0; Ou < 4; Ou++) uu = fu[Yu + Ou], uu > 0 && (Ju.e.FromFloat32ArrayToRefScaled(Cu, Math.floor(16 * qu[Yu + Ou]), uu, Nu), cu.addToSelf(Nu));
          Ju.t.TransformCoordinatesFromFloatsToRef(ju._sourcePositions[hu], ju._sourcePositions[hu + 1], ju._sourcePositions[hu + 2], cu, bu), bu.toArray(su, hu), Eu && (Ju.t.TransformNormalFromFloatsToRef(ju._sourceNormals[hu], ju._sourceNormals[hu + 1], ju._sourceNormals[hu + 2], cu, bu), bu.toArray(Uu, hu)), cu.reset()
        }
        return this.updateVerticesData(Pu.j.PositionKind, su), Eu && this.updateVerticesData(Pu.j.NormalKind, Uu), this
      }
      static MinMax(uu) {
        let Eu = null,
          ju = null;
        for (const su of uu) {
          const uu = su.EW().boundingBox;
          Eu && ju ? (Eu.minimizeInPlace(uu.minimumWorld), ju.maximizeInPlace(uu.maximumWorld)) : (Eu = uu.minimumWorld.clone(), ju = uu.maximumWorld.clone())
        }
        return Eu && ju ? {
          min: Eu,
          max: ju
        } : {
          min: Ju.t.Zero(),
          max: Ju.t.Zero()
        }
      }
      static Center(uu) {
        const Eu = uu instanceof Array ? yu.MinMax(uu) : uu;
        return Ju.t.Center(Eu.min, Eu.max)
      }
      static MergeMeshes(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        return (0, pu.k)(yu._MergeMeshesCoroutine(uu, Eu, ju, su, Uu, Zu, !1))
      }
      static async MergeMeshesAsync(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, pu.h)(yu._MergeMeshesCoroutine(uu, Eu, ju, su, Uu, Zu, !0), (0, pu.b)())
      }
      static * _MergeMeshesCoroutine(uu) {
        let Eu, ju = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          su = arguments.length > 2 ? arguments[2] : void 0,
          Uu = arguments.length > 3 ? arguments[3] : void 0,
          Zu = arguments.length > 4 ? arguments[4] : void 0,
          Xu = arguments.length > 5 ? arguments[5] : void 0,
          lu = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (uu = uu.filter(Boolean)).length) return null;
        if (!su) {
          let ju = 0;
          for (Eu = 0; Eu < uu.length; Eu++)
            if (ju += uu[Eu].getTotalVertices(), ju >= 65536) return Wu.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const qu = uu[0];
        Xu && (Zu = !1, uu.sort(((uu, Eu) => (uu.material?.uniqueId ?? -1) - (Eu.material?.uniqueId ?? -1))));
        const fu = new Array,
          Cu = new Array,
          bu = new Array,
          cu = uu[0].sideOrientation;
        for (Eu = 0; Eu < uu.length; Eu++) {
          const ju = uu[Eu];
          if (ju.JV) return Wu.b.Warn("Cannot merge instance meshes."), null;
          if (cu !== ju.sideOrientation) return Wu.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (Zu || Xu) {
            const uu = bu.reduce(((uu, Eu) => Math.max(uu, Eu.start + Eu.count)), 0);
            if (Xu)
              if (ju.material) {
                const Eu = ju.material;
                if (Eu instanceof ru.b) {
                  for (let uu = 0; uu < Eu.M6.length; uu++) fu.indexOf(Eu.M6[uu]) < 0 && fu.push(Eu.M6[uu]);
                  for (let su = 0; su < ju.iG.length; su++) Cu.push(fu.indexOf(Eu.M6[ju.iG[su].materialIndex])), bu.push({
                    start: uu + ju.iG[su].indexStart,
                    count: ju.iG[su].indexCount
                  })
                } else {
                  fu.indexOf(Eu) < 0 && fu.push(Eu);
                  for (let su = 0; su < ju.iG.length; su++) Cu.push(fu.indexOf(Eu)), bu.push({
                    start: uu + ju.iG[su].indexStart,
                    count: ju.iG[su].indexCount
                  })
                }
              } else
                for (let Eu = 0; Eu < ju.iG.length; Eu++) Cu.push(0), bu.push({
                  start: uu + ju.iG[Eu].indexStart,
                  count: ju.iG[Eu].indexCount
                });
            else bu.push({
              start: uu,
              count: ju.getTotalIndices()
            })
          }
        }
        if (Xu && bu.length > 1) {
          let uu = 0;
          for (let Eu = 1; Eu < bu.length; Eu++) {
            const ju = bu[uu],
              su = bu[Eu];
            Cu[Eu] === Cu[uu] && ju.start + ju.count === su.start ? ju.count += su.count : (uu++, bu[uu] = su, Cu[uu] = Cu[Eu])
          }
          bu.length = uu + 1, Cu.length = uu + 1
        }
        const Nu = uu => {
            const Eu = uu.computeWorldMatrix(!0);
            return {
              vertexData: ou.b.ExtractFromMesh(uu, !1, !1),
              transform: Eu
            }
          },
          {
            vertexData: Ou,
            transform: Yu
          } = Nu(uu[0]);
        lu && (yield);
        const hu = new Array(uu.length - 1);
        for (let pu = 1; pu < uu.length; pu++) hu[pu - 1] = Nu(uu[pu]), lu && (yield);
        const Du = Ou._mergeCoroutine(Yu, hu, su, lu, !ju);
        let gu = Du.next();
        for (; !gu.done;) lu && (yield), gu = Du.next();
        const Mu = gu.value;
        Uu || (Uu = new yu(qu.name + "_merged", qu.hV()));
        const eu = Mu._applyToCoroutine(Uu, void 0, lu);
        let Gu = eu.next();
        for (; !Gu.done;) lu && (yield), Gu = eu.next();
        if (Uu.checkCollisions = qu.checkCollisions, Uu.sideOrientation = qu.sideOrientation, ju)
          for (Eu = 0; Eu < uu.length; Eu++) uu[Eu].dispose();
        if (Zu || Xu) {
          for (Uu.releaseSubMeshes(), Eu = 0; Eu < bu.length;) vu.e.CreateFromIndices(0, bu[Eu].start, bu[Eu].count, Uu, void 0, !1), Eu++;
          for (const uu of Uu.iG) uu.refreshBoundingInfo();
          Uu.computeWorldMatrix(!0)
        }
        if (Xu) {
          const uu = new ru.b(qu.name + "_merged", qu.hV());
          uu.M6 = fu;
          for (let Eu = 0; Eu < Uu.iG.length; Eu++) Uu.iG[Eu].materialIndex = Cu[Eu];
          Uu.material = uu
        } else Uu.material = qu.material;
        return Uu
      }
      T_(uu) {
        uu._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(uu)
      }
      n_(uu) {
        const Eu = uu._indexInSourceMeshInstanceArray;
        if (-1 != Eu) {
          if (Eu !== this.instances.length - 1) {
            const uu = this.instances[this.instances.length - 1];
            this.instances[Eu] = uu, uu._indexInSourceMeshInstanceArray = Eu
          }
          uu._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === Ku.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(uu) {
        const Eu = this.hV();
        return Eu.forcePointsCloud ? Ku.b.PointFillMode : Eu.forceWireframe ? Ku.b.WireFrameFillMode : this.overrideRenderingFillMode ?? uu
      }
      setMaterialByID(uu) {
        return this.setMaterialById(uu)
      }
      static CreateRibbon(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(uu, Eu, ju, su, Uu, Zu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(uu, Eu, ju, su, Uu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(uu, Eu, ju, su, Uu, Zu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(uu, Eu, ju, su) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(uu, Eu, ju, su, Uu, Zu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(uu, Eu, ju, su, Uu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(uu, Eu, ju, su, Uu, Zu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(uu, Eu, ju, su, Uu, Zu, Xu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(uu, Eu, ju, su, Uu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(uu, Eu, ju, su, Uu, Zu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(uu, Eu, ju) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(uu, Eu, ju) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(uu, Eu, ju, su, Uu, Zu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(uu, Eu, ju) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(uu) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    yu.FRONTSIDE = ou.b.FRONTSIDE, yu.BACKSIDE = ou.b.BACKSIDE, yu.DOUBLESIDE = ou.b.DOUBLESIDE, yu.DEFAULTSIDE = ou.b.DEFAULTSIDE, yu.NO_CAP = 0, yu.CAP_START = 1, yu.CAP_END = 2, yu.CAP_ALL = 3, yu.NO_FLIP = 0, yu.FLIP_TILE = 1, yu.ROTATE_TILE = 2, yu.FLIP_ROW = 3, yu.ROTATE_ROW = 4, yu.FLIP_N_ROTATE_TILE = 5, yu.FLIP_N_ROTATE_ROW = 6, yu.CENTER = 0, yu.LEFT = 1, yu.RIGHT = 2, yu.TOP = 3, yu.BOTTOM = 4, yu.INSTANCEDMESH_SORT_TRANSPARENT = !1, yu._GroundMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GroundMesh")
    }, yu._GoldbergMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GoldbergMesh")
    }, yu._LinesMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("LinesMesh")
    }, yu._GreasedLineMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GreasedLineMesh")
    }, yu._GreasedLineRibbonMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GreasedLineRibbonMesh")
    }, yu._TrailMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("TrailMesh")
    }, yu._GaussianSplattingMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GaussianSplattingMesh")
    }, yu._GaussianSplattingPartProxyMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GaussianSplattingPartProxyMesh")
    }, yu._GaussianSplattingCompoundMeshParser = (uu, Eu) => {
      throw (0, Iu.h)("GaussianSplattingCompoundMesh")
    };
    let zu = !1;

    function Ru() {
      zu || (zu = !0, (0, Su.f)("BABYLON.Mesh", yu))
    }(su = yu.prototype).Qr ?? (su.Qr = (0, Iu.g)("Mesh", "Qr")), (Uu = yu.prototype).simplify ?? (Uu.simplify = (0, Iu.g)("Mesh", "simplify")), (Zu = yu.prototype).thinInstanceAdd ?? (Zu.thinInstanceAdd = (0, Iu.g)("Mesh", "thinInstanceAdd")), (Xu = yu.prototype).thinInstanceAddSelf ?? (Xu.thinInstanceAddSelf = (0, Iu.g)("Mesh", "thinInstanceAddSelf")), (lu = yu.prototype).thinInstanceRegisterAttribute ?? (lu.thinInstanceRegisterAttribute = (0, Iu.g)("Mesh", "thinInstanceRegisterAttribute")), (qu = yu.prototype).thinInstanceSetMatrixAt ?? (qu.thinInstanceSetMatrixAt = (0, Iu.g)("Mesh", "thinInstanceSetMatrixAt")), (fu = yu.prototype).thinInstanceSetAttributeAt ?? (fu.thinInstanceSetAttributeAt = (0, Iu.g)("Mesh", "thinInstanceSetAttributeAt")), (Cu = yu.prototype).Z6 ?? (Cu.Z6 = (0, Iu.g)("Mesh", "Z6")), (bu = yu.prototype).thinInstanceGetWorldMatrices ?? (bu.thinInstanceGetWorldMatrices = (0, Iu.g)("Mesh", "thinInstanceGetWorldMatrices")), (cu = yu.prototype).U1 ?? (cu.U1 = (0, Iu.g)("Mesh", "U1")), (Nu = yu.prototype).thinInstancePartialBufferUpdate ?? (Nu.thinInstancePartialBufferUpdate = (0, Iu.g)("Mesh", "thinInstancePartialBufferUpdate")), (Ou = yu.prototype).thinInstanceRefreshBoundingInfo ?? (Ou.thinInstanceRefreshBoundingInfo = (0, Iu.g)("Mesh", "thinInstanceRefreshBoundingInfo")), (Yu = yu.prototype).getEmittedParticleSystems ?? (Yu.getEmittedParticleSystems = (0, Iu.g)("Mesh", "getEmittedParticleSystems")), (hu = yu.prototype).getHierarchyEmittedParticleSystems ?? (hu.getHierarchyEmittedParticleSystems = (0, Iu.g)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(yu.prototype, "edgesShareWithInstances") || Object.defineProperty(yu.prototype, "edgesShareWithInstances", (0, Iu.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(yu.prototype, "rEu") || Object.defineProperty(yu.prototype, "rEu", (0, Iu.d)("Mesh", "rEu")), Object.getOwnPropertyDescriptor(yu.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(yu.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, Iu.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(yu.prototype, "F_") || Object.defineProperty(yu.prototype, "F_", (0, Iu.d)("Mesh", "F_"))
  },
  40668: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Ou
    });
    var su = ju(40255),
      Uu = ju(37494),
      Zu = ju(40399),
      Xu = ju(40153),
      lu = ju(37680),
      qu = ju(39032),
      fu = ju(40258),
      Cu = ju(40663),
      bu = ju(40308),
      cu = ju(40556);
    class Nu {}
    let Ou = (() => {
      var uu;
      let Eu, ju, Ou, Yu, hu = [];
      return uu = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, Cu.d)(this._applyToCoroutine.bind(this)), this.uniqueId = uu._UniqueIdGenerator, uu._UniqueIdGenerator++
        }
        set(uu, Eu) {
          switch (uu.length || qu.b.Warn(`Setting vertex data kind '${Eu}' with an empty array`), Eu) {
            case Zu.j.PositionKind:
              this.positions = uu;
              break;
            case Zu.j.NormalKind:
              this.normals = uu;
              break;
            case Zu.j.TangentKind:
              this.tangents = uu;
              break;
            case Zu.j.UVKind:
              this.uvs = uu;
              break;
            case Zu.j.UV2Kind:
              this.uvs2 = uu;
              break;
            case Zu.j.UV3Kind:
              this.uvs3 = uu;
              break;
            case Zu.j.UV4Kind:
              this.uvs4 = uu;
              break;
            case Zu.j.UV5Kind:
              this.uvs5 = uu;
              break;
            case Zu.j.UV6Kind:
              this.uvs6 = uu;
              break;
            case Zu.j.ColorKind:
              this.colors = uu;
              break;
            case Zu.j.MatricesIndicesKind:
              this.matricesIndices = uu;
              break;
            case Zu.j.MatricesWeightsKind:
              this.matricesWeights = uu;
              break;
            case Zu.j.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = uu;
              break;
            case Zu.j.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = uu
          }
        }
        applyToMesh(uu, Eu) {
          return this._applyTo(uu, Eu, !1), this
        }
        applyToGeometry(uu, Eu) {
          return this._applyTo(uu, Eu, !1), this
        }
        updateMesh(uu) {
          return this._update(uu), this
        }
        updateGeometry(uu) {
          return this._update(uu), this
        }* _applyToCoroutine(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ju = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (uu.setVerticesData(Zu.j.PositionKind, this.positions, Eu), ju && (yield)), this.normals && (uu.setVerticesData(Zu.j.NormalKind, this.normals, Eu), ju && (yield)), this.tangents && (uu.setVerticesData(Zu.j.TangentKind, this.tangents, Eu), ju && (yield)), this.uvs && (uu.setVerticesData(Zu.j.UVKind, this.uvs, Eu), ju && (yield)), this.uvs2 && (uu.setVerticesData(Zu.j.UV2Kind, this.uvs2, Eu), ju && (yield)), this.uvs3 && (uu.setVerticesData(Zu.j.UV3Kind, this.uvs3, Eu), ju && (yield)), this.uvs4 && (uu.setVerticesData(Zu.j.UV4Kind, this.uvs4, Eu), ju && (yield)), this.uvs5 && (uu.setVerticesData(Zu.j.UV5Kind, this.uvs5, Eu), ju && (yield)), this.uvs6 && (uu.setVerticesData(Zu.j.UV6Kind, this.uvs6, Eu), ju && (yield)), this.colors) {
            const su = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            uu.setVerticesData(Zu.j.ColorKind, this.colors, Eu, su), this.hasVertexAlpha && void 0 !== uu.hasVertexAlpha && (uu.hasVertexAlpha = !0), ju && (yield)
          }
          if (this.matricesIndices && (uu.setVerticesData(Zu.j.MatricesIndicesKind, this.matricesIndices, Eu), ju && (yield)), this.matricesWeights && (uu.setVerticesData(Zu.j.MatricesWeightsKind, this.matricesWeights, Eu), ju && (yield)), this.matricesIndicesExtra && (uu.setVerticesData(Zu.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Eu), ju && (yield)), this.matricesWeightsExtra && (uu.setVerticesData(Zu.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Eu), ju && (yield)), this.indices ? (uu.setIndices(this.indices, null, Eu), ju && (yield)) : uu.setIndices([], null), uu.iG && this.materialInfos && this.materialInfos.length > 1) {
            const Eu = uu;
            Eu.iG = [];
            for (const uu of this.materialInfos) new cu.e(uu.materialIndex, uu.verticesStart, uu.verticesCount, uu.indexStart, uu.indexCount, Eu)
          }
          return this
        }
        _update(uu, Eu, ju) {
          return this.positions && uu.updateVerticesData(Zu.j.PositionKind, this.positions, Eu, ju), this.normals && uu.updateVerticesData(Zu.j.NormalKind, this.normals, Eu, ju), this.tangents && uu.updateVerticesData(Zu.j.TangentKind, this.tangents, Eu, ju), this.uvs && uu.updateVerticesData(Zu.j.UVKind, this.uvs, Eu, ju), this.uvs2 && uu.updateVerticesData(Zu.j.UV2Kind, this.uvs2, Eu, ju), this.uvs3 && uu.updateVerticesData(Zu.j.UV3Kind, this.uvs3, Eu, ju), this.uvs4 && uu.updateVerticesData(Zu.j.UV4Kind, this.uvs4, Eu, ju), this.uvs5 && uu.updateVerticesData(Zu.j.UV5Kind, this.uvs5, Eu, ju), this.uvs6 && uu.updateVerticesData(Zu.j.UV6Kind, this.uvs6, Eu, ju), this.colors && uu.updateVerticesData(Zu.j.ColorKind, this.colors, Eu, ju), this.matricesIndices && uu.updateVerticesData(Zu.j.MatricesIndicesKind, this.matricesIndices, Eu, ju), this.matricesWeights && uu.updateVerticesData(Zu.j.MatricesWeightsKind, this.matricesWeights, Eu, ju), this.matricesIndicesExtra && uu.updateVerticesData(Zu.j.MatricesIndicesExtraKind, this.matricesIndicesExtra, Eu, ju), this.matricesWeightsExtra && uu.updateVerticesData(Zu.j.MatricesWeightsExtraKind, this.matricesWeightsExtra, Eu, ju), this.indices && uu.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Zu = Uu.m.dO[0],
            Xu = Uu.m.dO[1];
          for (let lu = ju; lu < ju + su; lu += 3) Uu.t.FromArrayToRef(uu, lu, Zu), Uu.t.TransformCoordinatesToRef(Zu, Eu, Xu), uu[lu] = Xu.x, uu[lu + 1] = Xu.y, uu[lu + 2] = Xu.z
        }
        static _TransformVector3Normals(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Zu = Uu.m.dO[0],
            Xu = Uu.m.dO[1];
          for (let lu = ju; lu < ju + su; lu += 3) Uu.t.FromArrayToRef(uu, lu, Zu), Uu.t.TransformNormalToRef(Zu, Eu, Xu), uu[lu] = Xu.x, uu[lu + 1] = Xu.y, uu[lu + 2] = Xu.z
        }
        static _TransformVector4Normals(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu.length;
          const Zu = Uu.m.Vector4[0],
            Xu = Uu.m.Vector4[1];
          for (let lu = ju; lu < ju + su; lu += 4) Uu.u.FromArrayToRef(uu, lu, Zu), Uu.u.TransformNormalToRef(Zu, Eu, Xu), uu[lu] = Xu.x, uu[lu + 1] = Xu.y, uu[lu + 2] = Xu.z, uu[lu + 3] = Xu.w
        }
        static _FlipFaces(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.length;
          for (let su = Eu; su < Eu + ju; su += 3) {
            const Eu = uu[su + 1];
            uu[su + 1] = uu[su + 2], uu[su + 2] = Eu
          }
        }
        transform(Eu) {
          const ju = Eu.determinant() < 0;
          return this.positions && uu._TransformVector3Coordinates(this.positions, Eu), this.normals && uu._TransformVector3Normals(this.normals, Eu), this.tangents && uu._TransformVector4Normals(this.tangents, Eu), ju && this.indices && uu._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const Eu = [];
          for (const ju of this.materialInfos) {
            const su = new uu;
            if (this.positions && (su.positions = this.positions.slice(3 * ju.verticesStart, 3 * (ju.verticesCount + ju.verticesStart))), this.normals && (su.normals = this.normals.slice(3 * ju.verticesStart, 3 * (ju.verticesCount + ju.verticesStart))), this.tangents && (su.tangents = this.tangents.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.colors && (su.colors = this.colors.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.uvs && (su.uvs = this.uvs.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.uvs2 && (su.uvs2 = this.uvs2.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.uvs3 && (su.uvs3 = this.uvs3.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.uvs4 && (su.uvs4 = this.uvs4.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.uvs5 && (su.uvs5 = this.uvs5.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.uvs6 && (su.uvs6 = this.uvs6.slice(2 * ju.verticesStart, 2 * (ju.verticesCount + ju.verticesStart))), this.matricesIndices && (su.matricesIndices = this.matricesIndices.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.matricesIndicesExtra && (su.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.matricesWeights && (su.matricesWeights = this.matricesWeights.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.matricesWeightsExtra && (su.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ju.verticesStart, 4 * (ju.verticesCount + ju.verticesStart))), this.indices) {
              su.indices = [];
              for (let uu = ju.indexStart; uu < ju.indexStart + ju.indexCount; uu++) su.indices.push(this.indices[uu] - ju.verticesStart)
            }
            const Uu = new Nu;
            Uu.indexStart = 0, Uu.indexCount = su.indices ? su.indices.length : 0, Uu.materialIndex = ju.materialIndex, Uu.verticesStart = 0, Uu.verticesCount = (su.positions ? su.positions.length : 0) / 3, su.materialInfos = [Uu], Eu.push(su)
          }
          return Eu
        }
        merge(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const Zu = Array.isArray(uu) ? uu.map((uu => ({
            vertexData: uu
          }))) : [{
            vertexData: uu
          }];
          return (0, Cu.k)(this._mergeCoroutine(void 0, Zu, Eu, !1, ju, su, Uu))
        }* _mergeCoroutine(Eu, ju) {
          let su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            Uu = arguments.length > 3 ? arguments[3] : void 0,
            Xu = arguments.length > 4 ? arguments[4] : void 0,
            lu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            qu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let fu = ju.map((uu => uu.vertexData)),
            Cu = this;
          if (qu)
            for (const uu of fu) uu && (uu._validate(), !this.normals && uu.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && uu.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && uu.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && uu.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && uu.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && uu.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && uu.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && uu.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && uu.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && uu.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && uu.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && uu.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && uu.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const uu of fu)
            if (uu)
              if (qu) this.normals && !uu.normals && (uu.normals = new Float32Array(uu.positions.length)), this.tangents && !uu.tangents && (uu.tangents = new Float32Array(uu.positions.length / 3 * 4)), this.uvs && !uu.uvs && (uu.uvs = new Float32Array(uu.positions.length / 3 * 2)), this.uvs2 && !uu.uvs2 && (uu.uvs2 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs3 && !uu.uvs3 && (uu.uvs3 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs4 && !uu.uvs4 && (uu.uvs4 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs5 && !uu.uvs5 && (uu.uvs5 = new Float32Array(uu.positions.length / 3 * 2)), this.uvs6 && !uu.uvs6 && (uu.uvs6 = new Float32Array(uu.positions.length / 3 * 2)), this.colors && !uu.colors && (uu.colors = new Float32Array(uu.positions.length / 3 * 4), uu.colors.fill(1)), this.matricesIndices && !uu.matricesIndices && (uu.matricesIndices = new Float32Array(uu.positions.length / 3 * 4)), this.matricesWeights && !uu.matricesWeights && (uu.matricesWeights = new Float32Array(uu.positions.length / 3 * 4)), this.matricesIndicesExtra && !uu.matricesIndicesExtra && (uu.matricesIndicesExtra = new Float32Array(uu.positions.length / 3 * 4)), this.matricesWeightsExtra && !uu.matricesWeightsExtra && (uu.matricesWeightsExtra = new Float32Array(uu.positions.length / 3 * 4));
              else if (uu._validate(), !this.normals !== !uu.normals || !this.tangents !== !uu.tangents || !this.uvs !== !uu.uvs || !this.uvs2 !== !uu.uvs2 || !this.uvs3 !== !uu.uvs3 || !this.uvs4 !== !uu.uvs4 || !this.uvs5 !== !uu.uvs5 || !this.uvs6 !== !uu.uvs6 || !this.colors !== !uu.colors || !this.matricesIndices !== !uu.matricesIndices || !this.matricesWeights !== !uu.matricesWeights || !this.matricesIndicesExtra !== !uu.matricesIndicesExtra || !this.matricesWeightsExtra !== !uu.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (lu) {
            let uu, su = 0,
              Uu = 0;
            const Zu = [];
            let Xu = null;
            const lu = [];
            for (const ju of this.splitBasedOnMaterialID()) lu.push({
              vertexData: ju,
              transform: Eu
            });
            for (const Eu of ju)
              if (Eu.vertexData)
                for (const uu of Eu.vertexData.splitBasedOnMaterialID()) lu.push({
                  vertexData: uu,
                  transform: Eu.transform
                });
            lu.sort(((uu, Eu) => {
              const ju = uu.vertexData.materialInfos ? uu.vertexData.materialInfos[0].materialIndex : 0,
                su = Eu.vertexData.materialInfos ? Eu.vertexData.materialInfos[0].materialIndex : 0;
              return ju > su ? 1 : ju === su ? 0 : -1
            }));
            for (const Eu of lu) {
              const ju = Eu.vertexData;
              if (uu = ju.materialInfos ? ju.materialInfos[0].materialIndex : 0, Xu && Xu.materialIndex === uu) Xu.indexCount += ju.indices.length, Xu.verticesCount += ju.positions.length / 3;
              else {
                const Eu = new Nu;
                Eu.materialIndex = uu, Eu.indexStart = su, Eu.indexCount = ju.indices.length, Eu.verticesStart = Uu, Eu.verticesCount = ju.positions.length / 3, Zu.push(Eu), Xu = Eu
              }
              su += ju.indices.length, Uu += ju.positions.length / 3
            }
            const qu = lu.splice(0, 1)[0];
            Cu = qu.vertexData, Eu = qu.transform, fu = lu.map((uu => uu.vertexData)), ju = lu, this.materialInfos = Zu
          }
          const bu = fu.reduce(((uu, Eu) => uu + (Eu.indices?.length ?? 0)), Cu.indices?.length ?? 0);
          let cu = Xu || fu.some((uu => uu.indices === Cu.indices)) ? Cu.indices?.slice() : Cu.indices;
          if (bu > 0) {
            let Zu = cu?.length ?? 0;
            if (cu || (cu = new Array(bu)), cu.length !== bu) {
              if (Array.isArray(cu)) cu.length = bu;
              else {
                const uu = su || cu instanceof Uint32Array ? new Uint32Array(bu) : new Uint16Array(bu);
                uu.set(cu), cu = uu
              }
              Eu && Eu.determinant() < 0 && uu._FlipFaces(cu, 0, Zu)
            }
            let Xu = Cu.positions ? Cu.positions.length / 3 : 0;
            for (const {
                vertexData: Eu,
                transform: su
              }
              of ju)
              if (Eu.indices) {
                for (let uu = 0; uu < Eu.indices.length; uu++) cu[Zu + uu] = Eu.indices[uu] + Xu;
                su && su.determinant() < 0 && uu._FlipFaces(cu, Zu, Eu.indices.length), Xu += Eu.positions.length / 3, Zu += Eu.indices.length, Uu && (yield)
              }
          }
          return this.indices = cu, this.positions = uu._MergeElement(Zu.j.PositionKind, Cu.positions, Eu, ju.map((uu => [uu.vertexData.positions, uu.transform]))), Uu && (yield), Cu.normals && (this.normals = uu._MergeElement(Zu.j.NormalKind, Cu.normals, Eu, ju.map((uu => [uu.vertexData.normals, uu.transform]))), Uu && (yield)), Cu.tangents && (this.tangents = uu._MergeElement(Zu.j.TangentKind, Cu.tangents, Eu, ju.map((uu => [uu.vertexData.tangents, uu.transform]))), Uu && (yield)), Cu.uvs && (this.uvs = uu._MergeElement(Zu.j.UVKind, Cu.uvs, Eu, ju.map((uu => [uu.vertexData.uvs, uu.transform]))), Uu && (yield)), Cu.uvs2 && (this.uvs2 = uu._MergeElement(Zu.j.UV2Kind, Cu.uvs2, Eu, ju.map((uu => [uu.vertexData.uvs2, uu.transform]))), Uu && (yield)), Cu.uvs3 && (this.uvs3 = uu._MergeElement(Zu.j.UV3Kind, Cu.uvs3, Eu, ju.map((uu => [uu.vertexData.uvs3, uu.transform]))), Uu && (yield)), Cu.uvs4 && (this.uvs4 = uu._MergeElement(Zu.j.UV4Kind, Cu.uvs4, Eu, ju.map((uu => [uu.vertexData.uvs4, uu.transform]))), Uu && (yield)), Cu.uvs5 && (this.uvs5 = uu._MergeElement(Zu.j.UV5Kind, Cu.uvs5, Eu, ju.map((uu => [uu.vertexData.uvs5, uu.transform]))), Uu && (yield)), Cu.uvs6 && (this.uvs6 = uu._MergeElement(Zu.j.UV6Kind, Cu.uvs6, Eu, ju.map((uu => [uu.vertexData.uvs6, uu.transform]))), Uu && (yield)), Cu.colors && (this.colors = uu._MergeElement(Zu.j.ColorKind, Cu.colors, Eu, ju.map((uu => [uu.vertexData.colors, uu.transform]))), (void 0 !== Cu.hasVertexAlpha || ju.some((uu => void 0 !== uu.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = Cu.hasVertexAlpha || ju.some((uu => uu.vertexData.hasVertexAlpha))), Uu && (yield)), Cu.matricesIndices && (this.matricesIndices = uu._MergeElement(Zu.j.MatricesIndicesKind, Cu.matricesIndices, Eu, ju.map((uu => [uu.vertexData.matricesIndices, uu.transform]))), Uu && (yield)), Cu.matricesWeights && (this.matricesWeights = uu._MergeElement(Zu.j.MatricesWeightsKind, Cu.matricesWeights, Eu, ju.map((uu => [uu.vertexData.matricesWeights, uu.transform]))), Uu && (yield)), Cu.matricesIndicesExtra && (this.matricesIndicesExtra = uu._MergeElement(Zu.j.MatricesIndicesExtraKind, Cu.matricesIndicesExtra, Eu, ju.map((uu => [uu.vertexData.matricesIndicesExtra, uu.transform]))), Uu && (yield)), Cu.matricesWeightsExtra && (this.matricesWeightsExtra = uu._MergeElement(Zu.j.MatricesWeightsExtraKind, Cu.matricesWeightsExtra, Eu, ju.map((uu => [uu.vertexData.matricesWeightsExtra, uu.transform])))), this
        }
        static _MergeElement(Eu, ju, su, Uu) {
          const Xu = Uu.filter((uu => null !== uu[0] && void 0 !== uu[0]));
          if (!ju && 0 == Xu.length) return ju;
          if (!ju) return this._MergeElement(Eu, Xu[0][0], Xu[0][1], Xu.slice(1));
          const lu = Xu.reduce(((uu, Eu) => uu + Eu[0].length), ju.length),
            qu = Eu === Zu.j.PositionKind ? uu._TransformVector3Coordinates : Eu === Zu.j.NormalKind ? uu._TransformVector3Normals : Eu === Zu.j.TangentKind ? uu._TransformVector4Normals : () => {};
          if (ju instanceof Float32Array) {
            const uu = new Float32Array(lu);
            uu.set(ju), su && qu(uu, su, 0, ju.length);
            let Eu = ju.length;
            for (const [ju, su] of Xu) uu.set(ju, Eu), su && qu(uu, su, Eu, ju.length), Eu += ju.length;
            return uu
          } {
            const uu = new Array(lu);
            for (let su = 0; su < ju.length; su++) uu[su] = ju[su];
            su && qu(uu, su, 0, ju.length);
            let Eu = ju.length;
            for (const [ju, su] of Xu) {
              for (let su = 0; su < ju.length; su++) uu[Eu + su] = ju[su];
              su && qu(uu, su, Eu, ju.length), Eu += ju.length
            }
            return uu
          }
        }
        _validate() {
          if (!this.positions) throw new bu.i("Positions are required", bu.f.MeshInvalidPositionsError);
          const uu = (uu, Eu) => {
              const ju = (0, Zu.f)(uu);
              if (Eu.length % ju !== 0) throw new Error("The " + uu + "s array count must be a multiple of " + ju);
              return Eu.length / ju
            },
            Eu = uu(Zu.j.PositionKind, this.positions),
            ju = (ju, su) => {
              const Uu = uu(ju, su);
              if (Uu !== Eu) throw new Error("The " + ju + "s element count (" + Uu + ") does not match the positions count (" + Eu + ")")
            };
          this.normals && ju(Zu.j.NormalKind, this.normals), this.tangents && ju(Zu.j.TangentKind, this.tangents), this.uvs && ju(Zu.j.UVKind, this.uvs), this.uvs2 && ju(Zu.j.UV2Kind, this.uvs2), this.uvs3 && ju(Zu.j.UV3Kind, this.uvs3), this.uvs4 && ju(Zu.j.UV4Kind, this.uvs4), this.uvs5 && ju(Zu.j.UV5Kind, this.uvs5), this.uvs6 && ju(Zu.j.UV6Kind, this.uvs6), this.colors && ju(Zu.j.ColorKind, this.colors), this.matricesIndices && ju(Zu.j.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ju(Zu.j.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ju(Zu.j.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ju(Zu.j.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const Eu = this.serialize();
          return uu.Parse(Eu)
        }
        serialize() {
          const uu = {};
          if (this.positions && (uu.positions = Array.from(this.positions)), this.normals && (uu.normals = Array.from(this.normals)), this.tangents && (uu.tangents = Array.from(this.tangents)), this.uvs && (uu.uvs = Array.from(this.uvs)), this.uvs2 && (uu.uvs2 = Array.from(this.uvs2)), this.uvs3 && (uu.uvs3 = Array.from(this.uvs3)), this.uvs4 && (uu.uvs4 = Array.from(this.uvs4)), this.uvs5 && (uu.uvs5 = Array.from(this.uvs5)), this.uvs6 && (uu.uvs6 = Array.from(this.uvs6)), this.colors && (uu.colors = Array.from(this.colors), uu.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (uu.matricesIndices = Array.from(this.matricesIndices), uu.matricesIndicesExpanded = !0), this.matricesWeights && (uu.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (uu.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), uu.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (uu.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), uu.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            uu.materialInfos = [];
            for (const Eu of this.materialInfos) {
              const ju = {
                indexStart: Eu.indexStart,
                indexCount: Eu.indexCount,
                materialIndex: Eu.materialIndex,
                verticesStart: Eu.verticesStart,
                verticesCount: Eu.verticesCount
              };
              uu.materialInfos.push(ju)
            }
          }
          return uu
        }
        static ExtractFromMesh(Eu, ju, su) {
          return uu._ExtractFrom(Eu, ju, su)
        }
        static ExtractFromGeometry(Eu, ju, su) {
          return uu._ExtractFrom(Eu, ju, su)
        }
        static _ExtractFrom(Eu, ju, su) {
          const Uu = new uu;
          if (Eu.isVerticesDataPresent(Zu.j.PositionKind) && (Uu.positions = Eu.getVerticesData(Zu.j.PositionKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.NormalKind) && (Uu.normals = Eu.getVerticesData(Zu.j.NormalKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.TangentKind) && (Uu.tangents = Eu.getVerticesData(Zu.j.TangentKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UVKind) && (Uu.uvs = Eu.getVerticesData(Zu.j.UVKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UV2Kind) && (Uu.uvs2 = Eu.getVerticesData(Zu.j.UV2Kind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UV3Kind) && (Uu.uvs3 = Eu.getVerticesData(Zu.j.UV3Kind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UV4Kind) && (Uu.uvs4 = Eu.getVerticesData(Zu.j.UV4Kind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UV5Kind) && (Uu.uvs5 = Eu.getVerticesData(Zu.j.UV5Kind, ju, su)), Eu.isVerticesDataPresent(Zu.j.UV6Kind) && (Uu.uvs6 = Eu.getVerticesData(Zu.j.UV6Kind, ju, su)), Eu.isVerticesDataPresent(Zu.j.ColorKind)) {
            const uu = Eu.geometry || Eu,
              Xu = uu.getVertexBuffer(Zu.j.ColorKind),
              lu = uu.getVerticesData(Zu.j.ColorKind, ju, su);
            if (3 === Xu.getSize()) {
              const uu = new Float32Array(4 * lu.length / 3);
              for (let Eu = 0, ju = 0; Eu < lu.length; Eu += 3, ju += 4) uu[ju] = lu[Eu], uu[ju + 1] = lu[Eu + 1], uu[ju + 2] = lu[Eu + 2], uu[ju + 3] = 1;
              Uu.colors = uu
            } else {
              if (4 !== Xu.getSize()) throw new Error(`Unexpected number of color components: ${Xu.getSize()}`);
              Uu.colors = lu
            }
          }
          return Eu.isVerticesDataPresent(Zu.j.MatricesIndicesKind) && (Uu.matricesIndices = Eu.getVerticesData(Zu.j.MatricesIndicesKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.MatricesWeightsKind) && (Uu.matricesWeights = Eu.getVerticesData(Zu.j.MatricesWeightsKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.MatricesIndicesExtraKind) && (Uu.matricesIndicesExtra = Eu.getVerticesData(Zu.j.MatricesIndicesExtraKind, ju, su)), Eu.isVerticesDataPresent(Zu.j.MatricesWeightsExtraKind) && (Uu.matricesWeightsExtra = Eu.getVerticesData(Zu.j.MatricesWeightsExtraKind, ju, su)), Uu.indices = Eu.Ysu(ju, su), Uu
        }
        static CreateRibbon(uu) {
          throw (0, Xu.h)("ribbonBuilder")
        }
        static CreateBox(uu) {
          throw (0, Xu.h)("boxBuilder")
        }
        static CreateTiledBox(uu) {
          throw (0, Xu.h)("tiledBoxBuilder")
        }
        static CreateTiledPlane(uu) {
          throw (0, Xu.h)("tiledPlaneBuilder")
        }
        static CreateSphere(uu) {
          throw (0, Xu.h)("sphereBuilder")
        }
        static CreateCylinder(uu) {
          throw (0, Xu.h)("cylinderBuilder")
        }
        static CreateTorus(uu) {
          throw (0, Xu.h)("torusBuilder")
        }
        static CreateLineSystem(uu) {
          throw (0, Xu.h)("linesBuilder")
        }
        static CreateDashedLines(uu) {
          throw (0, Xu.h)("linesBuilder")
        }
        static CreateGround(uu) {
          throw (0, Xu.h)("groundBuilder")
        }
        static CreateTiledGround(uu) {
          throw (0, Xu.h)("groundBuilder")
        }
        static CreateGroundFromHeightMap(uu) {
          throw (0, Xu.h)("groundBuilder")
        }
        static CreatePlane(uu) {
          throw (0, Xu.h)("planeBuilder")
        }
        static CreateDisc(uu) {
          throw (0, Xu.h)("discBuilder")
        }
        static CreatePolygon(uu, Eu, ju, su, Uu, Zu, lu) {
          throw (0, Xu.h)("polygonBuilder")
        }
        static CreateIcoSphere(uu) {
          throw (0, Xu.h)("icoSphereBuilder")
        }
        static CreatePolyhedron(uu) {
          throw (0, Xu.h)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || Uu.t.Up();
          throw (0, Xu.h)("capsuleBuilder")
        }
        static CreateTorusKnot(uu) {
          throw (0, Xu.h)("torusKnotBuilder")
        }
        static ComputeNormals(uu, Eu, ju, su) {
          let Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, du = !1,
            au = !1,
            Pu = !1,
            ou = !1,
            ku = 1,
            mu = 0,
            vu = null;
          su && (du = !!su.facetNormals, au = !!su.facetPositions, Pu = !!su.facetPartitioning, ku = !0 === su.useRightHandedSystem ? -1 : 1, mu = su.ratio || 0, ou = !!su.depthSort, vu = su.distanceTo, ou && void 0 === vu && (vu = Uu.t.Zero()));
          let Ku = 0,
            Vu = 0,
            ru = 0,
            Qu = 0;
          for (Pu && su && su.bbSize && (Ku = su.subDiv.X * mu / su.bbSize.x, Vu = su.subDiv.Y * mu / su.bbSize.y, ru = su.subDiv.Z * mu / su.bbSize.z, Qu = su.subDiv.max * su.subDiv.max, su.facetPartitioning.length = 0), Zu = 0; Zu < uu.length; Zu++) ju[Zu] = 0;
          const iu = Eu.length / 3 | 0;
          for (Zu = 0; Zu < iu; Zu++) {
            if (hu = 3 * Eu[3 * Zu], Du = hu + 1, gu = hu + 2, Mu = 3 * Eu[3 * Zu + 1], eu = Mu + 1, Gu = Mu + 2, pu = 3 * Eu[3 * Zu + 2], wu = pu + 1, Ju = pu + 2, Xu = uu[hu] - uu[Mu], lu = uu[Du] - uu[eu], qu = uu[gu] - uu[Gu], fu = uu[pu] - uu[Mu], Cu = uu[wu] - uu[eu], bu = uu[Ju] - uu[Gu], cu = ku * (lu * bu - qu * Cu), Nu = ku * (qu * fu - Xu * bu), Ou = ku * (Xu * Cu - lu * fu), Yu = Math.sqrt(cu * cu + Nu * Nu + Ou * Ou), Yu = 0 === Yu ? 1 : Yu, cu /= Yu, Nu /= Yu, Ou /= Yu, du && su && (su.facetNormals[Zu].x = cu, su.facetNormals[Zu].y = Nu, su.facetNormals[Zu].z = Ou), au && su && (su.facetPositions[Zu].x = (uu[hu] + uu[Mu] + uu[pu]) / 3, su.facetPositions[Zu].y = (uu[Du] + uu[eu] + uu[wu]) / 3, su.facetPositions[Zu].z = (uu[gu] + uu[Gu] + uu[Ju]) / 3), Pu && su) {
              const Eu = Math.floor((su.facetPositions[Zu].x - su.bInfo.minimum.x * mu) * Ku),
                ju = Math.floor((su.facetPositions[Zu].y - su.bInfo.minimum.y * mu) * Vu),
                Uu = Math.floor((su.facetPositions[Zu].z - su.bInfo.minimum.z * mu) * ru),
                Xu = Math.floor((uu[hu] - su.bInfo.minimum.x * mu) * Ku),
                lu = Math.floor((uu[Du] - su.bInfo.minimum.y * mu) * Vu),
                qu = Math.floor((uu[gu] - su.bInfo.minimum.z * mu) * ru),
                fu = Math.floor((uu[Mu] - su.bInfo.minimum.x * mu) * Ku),
                Cu = Math.floor((uu[eu] - su.bInfo.minimum.y * mu) * Vu),
                bu = Math.floor((uu[Gu] - su.bInfo.minimum.z * mu) * ru),
                cu = Math.floor((uu[pu] - su.bInfo.minimum.x * mu) * Ku),
                Nu = Math.floor((uu[wu] - su.bInfo.minimum.y * mu) * Vu),
                Ou = Math.floor((uu[Ju] - su.bInfo.minimum.z * mu) * ru),
                Yu = Xu + su.subDiv.max * lu + Qu * qu,
                du = fu + su.subDiv.max * Cu + Qu * bu,
                au = cu + su.subDiv.max * Nu + Qu * Ou,
                Pu = Eu + su.subDiv.max * ju + Qu * Uu;
              su.facetPartitioning[Pu] = su.facetPartitioning[Pu] ? su.facetPartitioning[Pu] : [], su.facetPartitioning[Yu] = su.facetPartitioning[Yu] ? su.facetPartitioning[Yu] : [], su.facetPartitioning[du] = su.facetPartitioning[du] ? su.facetPartitioning[du] : [], su.facetPartitioning[au] = su.facetPartitioning[au] ? su.facetPartitioning[au] : [], su.facetPartitioning[Yu].push(Zu), du != Yu && su.facetPartitioning[du].push(Zu), au != du && au != Yu && su.facetPartitioning[au].push(Zu), Pu != Yu && Pu != du && Pu != au && su.facetPartitioning[Pu].push(Zu)
            }
            if (ou && su && su.facetPositions) {
              const uu = su.depthSortedFacets[Zu];
              uu.ind = 3 * Zu, uu.sqDistance = Uu.t.DistanceSquared(su.facetPositions[Zu], vu)
            }
            ju[hu] += cu, ju[Du] += Nu, ju[gu] += Ou, ju[Mu] += cu, ju[eu] += Nu, ju[Gu] += Ou, ju[pu] += cu, ju[wu] += Nu, ju[Ju] += Ou
          }
          for (Zu = 0; Zu < ju.length / 3; Zu++) cu = ju[3 * Zu], Nu = ju[3 * Zu + 1], Ou = ju[3 * Zu + 2], Yu = Math.sqrt(cu * cu + Nu * Nu + Ou * Ou), Yu = 0 === Yu ? 1 : Yu, cu /= Yu, Nu /= Yu, Ou /= Yu, ju[3 * Zu] = cu, ju[3 * Zu + 1] = Nu, ju[3 * Zu + 2] = Ou
        }
        static _ComputeSides(Eu, ju, su, Zu, Xu, lu, qu) {
          const fu = su.length,
            Cu = Zu.length;
          let bu, cu;
          switch (Eu = Eu || uu.DEFAULTSIDE) {
            case uu.FRONTSIDE:
              break;
            case uu.BACKSIDE:
              for (bu = 0; bu < fu; bu += 3) {
                const uu = su[bu];
                su[bu] = su[bu + 2], su[bu + 2] = uu
              }
              for (cu = 0; cu < Cu; cu++) Zu[cu] = -Zu[cu];
              break;
            case uu.DOUBLESIDE: {
              const uu = ju.length,
                Eu = uu / 3;
              for (let su = 0; su < uu; su++) ju[uu + su] = ju[su];
              for (bu = 0; bu < fu; bu += 3) su[bu + fu] = su[bu + 2] + Eu, su[bu + 1 + fu] = su[bu + 1] + Eu, su[bu + 2 + fu] = su[bu] + Eu;
              for (cu = 0; cu < Cu; cu++) Zu[Cu + cu] = -Zu[cu];
              const Nu = Xu.length;
              let Ou;
              for (Ou = 0; Ou < Nu; Ou++) Xu[Ou + Nu] = Xu[Ou];
              for (lu = lu || new Uu.u(0, 0, 1, 1), qu = qu || new Uu.u(0, 0, 1, 1), Ou = 0, bu = 0; bu < Nu / 2; bu++) Xu[Ou] = lu.x + (lu.z - lu.x) * Xu[Ou], Xu[Ou + 1] = lu.y + (lu.w - lu.y) * Xu[Ou + 1], Xu[Ou + Nu] = qu.x + (qu.z - qu.x) * Xu[Ou + Nu], Xu[Ou + Nu + 1] = qu.y + (qu.w - qu.y) * Xu[Ou + Nu + 1], Ou += 2;
              break
            }
          }
        }
        static Parse(Eu) {
          const ju = new uu,
            su = Eu.positions;
          su && ju.set(su, Zu.j.PositionKind);
          const Uu = Eu.normals;
          Uu && ju.set(Uu, Zu.j.NormalKind);
          const Xu = Eu.tangents;
          Xu && ju.set(Xu, Zu.j.TangentKind);
          const qu = Eu.uvs;
          qu && ju.set(qu, Zu.j.UVKind);
          const fu = Eu.uvs2;
          fu && ju.set(fu, Zu.j.UV2Kind);
          const Cu = Eu.uvs3;
          Cu && ju.set(Cu, Zu.j.UV3Kind);
          const bu = Eu.uvs4;
          bu && ju.set(bu, Zu.j.UV4Kind);
          const cu = Eu.uvs5;
          cu && ju.set(cu, Zu.j.UV5Kind);
          const Ou = Eu.uvs6;
          Ou && ju.set(Ou, Zu.j.UV6Kind);
          const Yu = Eu.colors;
          Yu && (ju.set(lu.g.CheckColors4(Yu, su.length / 3), Zu.j.ColorKind), void 0 !== Eu.hasVertexAlpha && (ju.hasVertexAlpha = Eu.hasVertexAlpha));
          const hu = Eu.matricesIndices;
          hu && ju.set(hu, Zu.j.MatricesIndicesKind);
          const Du = Eu.matricesWeights;
          Du && ju.set(Du, Zu.j.MatricesWeightsKind);
          const gu = Eu.indices;
          gu && (ju.indices = gu);
          const Mu = Eu.materialInfos;
          if (Mu) {
            ju.materialInfos = [];
            for (const uu of Mu) {
              const Eu = new Nu;
              Eu.indexCount = uu.indexCount, Eu.indexStart = uu.indexStart, Eu.verticesCount = uu.verticesCount, Eu.verticesStart = uu.verticesStart, Eu.materialIndex = uu.materialIndex, ju.materialInfos.push(Eu)
            }
          }
          return ju
        }
        static ImportVertexData(Eu, ju) {
          const su = uu.Parse(Eu);
          ju.setAllVerticesData(su, Eu.updatable)
        }
      }, (() => {
        const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [fu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ju = [fu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Ou = [fu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], Yu = [fu.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, su.e)(uu, null, Eu, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector3Coordinates" in uu,
            get: uu => uu._TransformVector3Coordinates
          },
          metadata: Uu
        }, null, hu), (0, su.e)(uu, null, ju, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector3Normals" in uu,
            get: uu => uu._TransformVector3Normals
          },
          metadata: Uu
        }, null, hu), (0, su.e)(uu, null, Ou, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: uu => "_TransformVector4Normals" in uu,
            get: uu => uu._TransformVector4Normals
          },
          metadata: Uu
        }, null, hu), (0, su.e)(uu, null, Yu, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: uu => "_FlipFaces" in uu,
            get: uu => uu._FlipFaces
          },
          metadata: Uu
        }, null, hu), Uu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Uu
        })
      })(), uu.FRONTSIDE = ((0, su.g)(uu, hu), 0), uu.BACKSIDE = 1, uu.DOUBLESIDE = 2, uu.DEFAULTSIDE = 0, uu._UniqueIdGenerator = 0, uu
    })()
  },
  40742: (uu, Eu, ju) => {
    var su = ju(37494),
      Uu = ju(39032),
      Zu = ju(40574),
      Xu = ju(40661),
      lu = ju(40399);
    const qu = "bakedVertexAnimationSettingsInstanced";

    function fu(uu) {
      const Eu = uu.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return Eu instanceof Float32Array || Eu instanceof Uint16Array
    }

    function Cu(uu, Eu, ju, su) {
      ju.k_(Number.POSITIVE_INFINITY), su.k_(Number.NEGATIVE_INFINITY);
      for (let Uu = 0; Uu < 3 * Eu; Uu += 3) {
        const Eu = uu[Uu],
          Zu = uu[Uu + 1],
          Xu = uu[Uu + 2];
        Eu < ju.x && (ju.x = Eu), Zu < ju.y && (ju.y = Zu), Xu < ju.z && (ju.z = Xu), Eu > su.x && (su.x = Eu), Zu > su.y && (su.y = Zu), Xu > su.z && (su.z = Xu)
      }
    }

    function bu(uu, Eu, ju) {
      ju && (uu.x -= uu.x * ju.x + ju.y, uu.y -= uu.y * ju.x + ju.y, uu.z -= uu.z * ju.x + ju.y, Eu.x += Eu.x * ju.x + ju.y, Eu.y += Eu.y * ju.x + ju.y, Eu.z += Eu.z * ju.x + ju.y)
    }

    function cu(uu, Eu, ju, Uu, Zu) {
      const Xu = su.m.dO[7],
        lu = su.m.dO[8];
      for (let qu = 0; qu < 2; ++qu)
        for (let fu = 0; fu < 2; ++fu)
          for (let Cu = 0; Cu < 2; ++Cu) Xu.set(qu ? Eu.x : uu.x, fu ? Eu.y : uu.y, Cu ? Eu.z : uu.z), su.t.TransformCoordinatesToRef(Xu, ju, lu), Uu.minimizeInPlace(lu), Zu.maximizeInPlace(lu)
    }

    function Nu(uu, Eu, ju, Uu, Zu) {
      const Xu = su.m.dO[7];
      for (let lu = 0; lu < 3 * Eu; lu += 3) su.t.TransformCoordinatesFromFloatsToRef(uu[lu], uu[lu + 1], uu[lu + 2], ju, Xu), Uu.minimizeInPlace(Xu), Zu.maximizeInPlace(Xu)
    }
    let Ou = !1;
    Ou || (Ou = !0, Xu.e.prototype.thinInstanceAdd = function(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.hV().wO().getCaps().instancedArrays) return Uu.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(uu) ? uu.length : 1);
      const ju = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(uu))
        for (let su = 0; su < uu.length; ++su) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, uu[su], su === uu.length - 1 && Eu);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, uu, Eu);
      return ju
    }, Xu.e.prototype.thinInstanceAddSelf = function() {
      let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(su.e.IdentityReadOnly, uu)
    }, Xu.e.prototype.thinInstanceRegisterAttribute = function(uu, Eu) {
      uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), this.removeVerticesData(uu), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[uu] = Eu, this._userThinInstanceBuffersStorage.sizes[uu] = Eu * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[uu] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[uu]), this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new lu.j(this.wO(), this._userThinInstanceBuffersStorage.data[uu], uu, !0, !1, Eu, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu])
    }, Xu.e.prototype.thinInstanceSetMatrixAt = function(uu, Eu) {
      let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || uu >= this._thinInstanceDataStorage.instancesCount) return !1;
      const su = this._thinInstanceDataStorage.matrixData;
      return Eu.copyToArray(su, 16 * uu), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[uu] = Eu), ju && (this.U1("matrix"), this.PO || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, Xu.e.prototype.thinInstanceSetAttributeAt = function(uu, Eu, ju) {
      let su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[uu] || Eu >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(uu, 0), this._userThinInstanceBuffersStorage.data[uu].set(ju, Eu * this._userThinInstanceBuffersStorage.strides[uu]), su && this.U1(uu), !0)
    }, Object.defineProperty(Xu.e.prototype, "F_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(uu) {
        const Eu = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        uu <= (Eu ? Eu.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = uu)
      },
      enumerable: !0,
      configurable: !0
    }), Xu.e.prototype._thinInstanceCreateMatrixBuffer = function(uu, Eu) {
      let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const su = new lu.b(this.wO(), Eu, !ju, 16, !1, !0);
      for (let Uu = 0; Uu < 4; Uu++) this.setVerticesBuffer(su.createVertexBuffer(uu + Uu, 4 * Uu, 4));
      return su
    }, Xu.e.prototype.Z6 = function(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ju = ju || 16, "matrix" === uu) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = Eu ? Eu.length : 32 * ju, this._thinInstanceDataStorage.matrixData = Eu, this._thinInstanceDataStorage.worldMatrices = null, null !== Eu ? (this._thinInstanceDataStorage.instancesCount = Eu.length / ju, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Eu, su), this.PO || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.PO || this.refreshBoundingInfo());
      else if ("previousMatrix" === uu) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = Eu, null !== Eu && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Eu, su));
      else if ("splatIndex" === uu && Eu) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = Eu.length / ju, this._userThinInstanceBuffersStorage.data[uu] = Eu, this._userThinInstanceBuffersStorage.strides[uu] = ju, this._userThinInstanceBuffersStorage.sizes[uu] = Eu.length;
        const su = new lu.b(this.wO(), Eu, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = su;
        for (let Eu = 0; Eu < 4; Eu++) this.setVerticesBuffer(su.createVertexBuffer(uu + Eu, 4 * Eu, 4))
      } else uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), null === Eu ? this._userThinInstanceBuffersStorage?.data[uu] && (this.removeVerticesData(uu), delete this._userThinInstanceBuffersStorage.data[uu], delete this._userThinInstanceBuffersStorage.strides[uu], delete this._userThinInstanceBuffersStorage.sizes[uu], delete this._userThinInstanceBuffersStorage.vertexBuffers[uu]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[uu] = Eu, this._userThinInstanceBuffersStorage.strides[uu] = ju, this._userThinInstanceBuffersStorage.sizes[uu] = Eu.length, this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new lu.j(this.wO(), Eu, uu, !su, !1, ju, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
    }, Xu.e.prototype.U1 = function(uu) {
      "matrix" === uu ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === uu ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === uu ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[uu], 0, this._thinInstanceDataStorage.instancesCount) : (uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[uu] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[uu].isUpdatable() && this._thinInstanceRecreateBuffer(uu), this._userThinInstanceBuffersStorage.vertexBuffers[uu].updateDirectly(this._userThinInstanceBuffersStorage.data[uu], 0)))
    }, Xu.e.prototype.thinInstancePartialBufferUpdate = function(uu, Eu, ju) {
      if ("matrix" === uu) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof Eu ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ju * Float32Array.BYTES_PER_ELEMENT, 16 * Eu), 16 * ju) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(Eu, ju));
      else if (uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[uu]) {
        const su = this._userThinInstanceBuffersStorage.vertexBuffers[uu];
        if ("number" === typeof Eu) {
          const su = new Float32Array(this._userThinInstanceBuffersStorage.data[uu].buffer, this._userThinInstanceBuffersStorage.data[uu].byteOffset + ju * this._userThinInstanceBuffersStorage.strides[uu] * Float32Array.BYTES_PER_ELEMENT, Eu * this._userThinInstanceBuffersStorage.strides[uu]);
          this._userThinInstanceBuffersStorage.vertexBuffers[uu].updateDirectly(su, ju * this._userThinInstanceBuffersStorage.strides[uu])
        } else su.updateDirectly(Eu, ju)
      }
    }, Xu.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const uu = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let Eu = 0; Eu < this._thinInstanceDataStorage.instancesCount; ++Eu) this._thinInstanceDataStorage.worldMatrices[Eu] = su.e.FromArray(uu, 16 * Eu)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, Xu.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const Xu = this._thinInstanceDataStorage.boundingVectors;
      if (uu || !this.rawBoundingInfo) {
        if (Xu.length = 0, Uu && function(uu, Eu, ju) {
            const Uu = uu._userThinInstanceBuffersStorage,
              Xu = Uu?.data[qu],
              Ou = Uu?.strides[qu];
            if (!Xu || !Ou || Ou < 4 || !fu(uu)) return !1;
            const Yu = uu._thinInstanceDataStorage.matrixData;
            if (!Yu) return !1;
            const hu = {},
              Du = su.m.Vector4[0],
              gu = su.m.dO[1],
              Mu = su.m.dO[2],
              eu = su.m.dO[3],
              Gu = su.m.dO[4],
              pu = su.m.dO[5],
              wu = su.m.dO[6],
              Ju = su.m.Matrix[2],
              du = uu.geometry ? uu.geometry.boundingBias : null,
              au = uu.getTotalVertices();
            gu.k_(Number.POSITIVE_INFINITY), Mu.k_(Number.NEGATIVE_INFINITY), eu.k_(Number.POSITIVE_INFINITY), Gu.k_(Number.NEGATIVE_INFINITY);
            for (let Zu = 0; Zu < uu._thinInstanceDataStorage.instancesCount; ++Zu) {
              const Eu = Zu * Ou;
              Du.set(Xu[Eu], Xu[Eu + 1], Xu[Eu + 2], Xu[Eu + 3]);
              const Uu = uu._getData({
                applyMorph: ju,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: Du,
                updatePositionsArray: !1,
                cache: hu
              }, null, lu.j.PositionKind);
              if (!Uu) return !1;
              Cu(Uu, au, pu, wu), bu(pu, wu, du), gu.minimizeInPlace(pu), Mu.maximizeInPlace(wu), su.e.FromArrayToRef(Yu, 16 * Zu, Ju), du ? cu(pu, wu, Ju, eu, Gu) : Nu(Uu, au, Ju, eu, Gu)
            }
            return !(!isFinite(gu.x) || !isFinite(eu.x)) && (uu.EW().reConstruct(eu, Gu), uu.rawBoundingInfo = new Zu.c(gu, Mu), function(uu, Eu) {
              uu.length = 0;
              for (let ju = 0; ju < Eu.boundingBox.vectors.length; ++ju) uu.push(Eu.boundingBox.vectors[ju].clone())
            }(Eu, uu.rawBoundingInfo), uu._updateBoundingInfo(), !0)
          }(this, Xu, ju)) return;
        Uu && this.bakedVertexAnimationManager?.isEnabled && fu(this) ? this.refreshBoundingInfo({
          applySkeleton: Eu,
          applyMorph: ju,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(Eu, ju);
        const uu = this.EW();
        this.rawBoundingInfo = new Zu.c(uu.minimum, uu.maximum)
      }
      const Ou = this.EW(),
        Yu = this._thinInstanceDataStorage.matrixData;
      if (0 === Xu.length)
        for (let su = 0; su < Ou.boundingBox.vectors.length; ++su) Xu.push(Ou.boundingBox.vectors[su].clone());
      su.m.dO[0].k_(Number.POSITIVE_INFINITY), su.m.dO[1].k_(Number.NEGATIVE_INFINITY);
      for (let Zu = 0; Zu < this._thinInstanceDataStorage.instancesCount; ++Zu) {
        su.e.FromArrayToRef(Yu, 16 * Zu, su.m.Matrix[0]);
        for (let uu = 0; uu < Xu.length; ++uu) su.t.TransformCoordinatesToRef(Xu[uu], su.m.Matrix[0], su.m.dO[2]), su.m.dO[0].minimizeInPlace(su.m.dO[2]), su.m.dO[1].maximizeInPlace(su.m.dO[2])
      }
      Ou.reConstruct(su.m.dO[0], su.m.dO[1]), this._updateBoundingInfo()
    }, Xu.e.prototype._thinInstanceRecreateBuffer = function(uu) {
      let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === uu ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, Eu)) : "previousMatrix" === uu ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, Eu)) : (uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[uu]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new lu.j(this.wO(), this._userThinInstanceBuffersStorage.data[uu], uu, !Eu, !1, this._userThinInstanceBuffersStorage.strides[uu], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
    }, Xu.e.prototype._thinInstanceUpdateBufferSize = function(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      uu === lu.j.ColorKind && (uu = lu.j.ColorInstanceKind);
      const ju = "matrix" === uu;
      if (!ju && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[uu])) return;
      const su = ju ? 16 : this._userThinInstanceBuffersStorage.strides[uu],
        Uu = ju ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[uu];
      let Zu = ju ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[uu];
      const Xu = (this._thinInstanceDataStorage.instancesCount + Eu) * su;
      let qu = Uu;
      for (; qu < Xu;) qu *= 2;
      if (!Zu || Uu != qu) {
        if (Zu) {
          const uu = new Float32Array(qu);
          uu.set(Zu, 0), Zu = uu
        } else Zu = new Float32Array(qu);
        ju ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", Zu, !1), this._thinInstanceDataStorage.matrixData = Zu, this._thinInstanceDataStorage.matrixBufferSize = qu, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", Zu, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[uu]?.dispose(), this._userThinInstanceBuffersStorage.data[uu] = Zu, this._userThinInstanceBuffersStorage.sizes[uu] = qu, this._userThinInstanceBuffersStorage.vertexBuffers[uu] = new lu.j(this.wO(), Zu, uu, !0, !1, su, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[uu]))
      }
    }, Xu.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, Xu.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40706: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => gu,
      e: () => Yu
    });
    var su, Uu, Zu, Xu, lu = ju(40255),
      qu = ju(40258),
      fu = ju(40272),
      Cu = ju(37514),
      bu = ju(37494),
      cu = ju(40467),
      Nu = ju(37532),
      Ou = ju(40153);
    let Yu = (() => {
      var uu;
      let Eu, ju, su, Uu, Zu, Xu, Nu, Ou, Yu, hu = cu.c,
        Du = [],
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        du = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [];
      return uu = class extends hu {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(Eu) {
          this._billboardMode !== Eu && (this._billboardMode = Eu, this._cache.useBillboardPosition = 0 !== (this._billboardMode & uu.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(uu) {
          this._infiniteDistance !== uu && (this._infiniteDistance = uu)
        }
        constructor(Eu) {
          let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(Eu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new bu.t(0, 0, 1), this._up = new bu.t(0, 1, 0), this._right = new bu.t(1, 0, 0), this._position = (0, lu.g)(this, Du, bu.t.Zero()), this._rotation = ((0, lu.g)(this, gu), (0, lu.g)(this, Mu, bu.t.Zero())), this._rotationQuaternion = ((0, lu.g)(this, eu), (0, lu.g)(this, Gu, null)), this._scaling = ((0, lu.g)(this, pu), (0, lu.g)(this, wu, bu.t.One())), this._transformToBoneReferal = ((0, lu.g)(this, Ju), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, lu.g)(this, du, uu.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, lu.g)(this, au), (0, lu.g)(this, Pu, 1)), this._infiniteDistance = ((0, lu.g)(this, ou), (0, lu.g)(this, ku, !1)), this.ignoreNonUniformScaling = ((0, lu.g)(this, mu), (0, lu.g)(this, vu, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, lu.g)(this, Ku), (0, lu.g)(this, Vu, !1)), this._poseMatrix = ((0, lu.g)(this, ru), null), this._localMatrix = bu.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = bu.t.Zero(), this._absoluteScaling = bu.t.Zero(), this._absoluteRotationQuaternion = bu.i.Identity(), this._pivotMatrix = bu.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new Cu.d, this._nonUniformScaling = !1, ju && this.hV().addTransformNode(this)
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
        get Of() {
          return this._scaling
        }
        set Of(uu) {
          this._scaling = uu, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(uu) {
          this._rotationQuaternion = uu, uu && this._rotation.k_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return bu.t.TransformNormalFromFloatsToRef(0, 0, this.hV().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return bu.t.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return bu.t.TransformNormalFromFloatsToRef(this.hV().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(uu) {
          return this._poseMatrix ? (this._poseMatrix.yJ(uu), this) : (this._poseMatrix = uu.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = bu.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const Eu = this._cache;
          return this._billboardMode === Eu.billboardMode && this._billboardMode === uu.BILLBOARDMODE_NONE && (!Eu.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.yJ(uu), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Eu, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = bu.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            Eu = arguments.length > 1 ? arguments[1] : void 0,
            ju = arguments.length > 2 ? arguments[2] : void 0;
          const su = this.clone("Clone of " + (this.name || this.id), uu || this.parent, !0);
          su && ju && ju(this, su);
          for (const Uu of this.getChildTransformNodes(!0)) Uu.instantiateHierarchy(su, Eu, ju);
          return su
        }
        KV() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return uu ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.k_(0), this._rotationQuaternion = this._rotationQuaternion || bu.i.Identity(), uu.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = uu, this._absolutePosition.T6(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get xXu() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(uu) {
          if (!uu) return this;
          let Eu, ju, su;
          if (void 0 === uu.x) {
            if (arguments.length < 3) return this;
            Eu = arguments[0], ju = arguments[1], su = arguments[2]
          } else Eu = uu.x, ju = uu.y, su = uu.z;
          if (this.parent) {
            const uu = bu.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(uu), bu.t.TransformCoordinatesFromFloatsToRef(Eu, ju, su, uu, this.position)
          } else this.position.x = Eu, this.position.y = ju, this.position.z = su;
          return this._absolutePosition.yJ(uu), this
        }
        setPositionWithLocalVector(uu) {
          return this.computeWorldMatrix(), this.position = bu.t.TransformNormal(uu, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const uu = bu.m.Matrix[0];
          return this._localMatrix.invertToRef(uu), bu.t.TransformNormal(this.position, uu)
        }
        locallyTranslate(uu) {
          return this.computeWorldMatrix(!0), this.position = bu.t.TransformCoordinates(uu, this._localMatrix), this
        }
        lookAt(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const Xu = uu._LookAtVectorCache,
            lu = 0 === Zu ? this.position : this.getAbsolutePosition();
          if (Eu.subtractToRef(lu, Xu), this.setDirection(Xu, ju, su, Uu), 1 === Zu && this.parent)
            if (this.rotationQuaternion) {
              const uu = bu.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(uu);
              const Eu = bu.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(Eu), Eu.invert(), uu.multiplyToRef(Eu, uu), this.rotationQuaternion.fromRotationMatrix(uu)
            } else {
              const uu = bu.m.Quaternion[0];
              bu.i.FromEulerVectorToRef(this.rotation, uu);
              const Eu = bu.m.Matrix[0];
              uu.toRotationMatrix(Eu);
              const ju = bu.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ju), ju.invert(), Eu.multiplyToRef(ju, Eu), uu.fromRotationMatrix(Eu), uu.toEulerAnglesToRef(this.rotation)
            } return this
        }
        Gy(uu) {
          const Eu = bu.t.Zero();
          return this.getDirectionToRef(uu, Eu), Eu
        }
        getDirectionToRef(uu, Eu) {
          return bu.t.TransformNormalToRef(uu, this.getWorldMatrix(), Eu), this
        }
        setDirection(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const Uu = -Math.atan2(uu.z, uu.x) + Math.PI / 2,
            Zu = Math.sqrt(uu.x * uu.x + uu.z * uu.z),
            Xu = -Math.atan2(uu.y, Zu);
          return this.rotationQuaternion ? bu.i.RotationYawPitchRollToRef(Uu + Eu, Xu + ju, su, this.rotationQuaternion) : (this.rotation.x = Xu + ju, this.rotation.y = Uu + Eu, this.rotation.z = su), this
        }
        setPivotPoint(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.hV().getRenderId() && this.computeWorldMatrix(!0);
          const ju = this.getWorldMatrix();
          if (1 == Eu) {
            const Eu = bu.m.Matrix[0];
            ju.invertToRef(Eu), uu = bu.t.TransformCoordinates(uu, Eu)
          }
          return this.setPivotMatrix(bu.e.Translation(-uu.x, -uu.y, -uu.z), !0)
        }
        getPivotPoint() {
          const uu = bu.t.Zero();
          return this.getPivotPointToRef(uu), uu
        }
        getPivotPointToRef(uu) {
          return uu.x = -this._pivotMatrix.m[12], uu.y = -this._pivotMatrix.m[13], uu.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const uu = bu.t.Zero();
          return this.getAbsolutePivotPointToRef(uu), uu
        }
        getAbsolutePivotPointToRef(uu) {
          return this.getPivotPointToRef(uu), bu.t.TransformCoordinatesToRef(uu, this.getWorldMatrix(), uu), this
        }
        tEu(uu) {
          if (this._isDirty) return this;
          if (this._children)
            for (const Eu of this._children) Eu.tEu(uu);
          return super.tEu(uu)
        }
        setParent(Eu) {
          let ju = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!Eu && !this.parent) return this;
          const Uu = bu.m.Quaternion[0],
            Zu = bu.m.dO[0],
            Xu = bu.m.dO[1],
            lu = bu.m.Matrix[1];
          bu.e.IdentityToRef(lu);
          const qu = bu.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let fu = this.rotationQuaternion;
          return fu || (fu = uu._TmpRotation, bu.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, fu)), bu.e.ComposeToRef(this.Of, fu, this.position, qu), this.parent && qu.multiplyToRef(this.parent.computeWorldMatrix(!0), qu), Eu && (Eu.computeWorldMatrix(!0).invertToRef(lu), qu.multiplyToRef(lu, qu)), qu.decompose(Xu, Uu, Zu, ju ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.yJ(Uu) : Uu.toEulerAnglesToRef(this.rotation), this.Of.yJ(Xu), this.position.yJ(Zu), this.parent = Eu, su && this.setPivotMatrix(bu.e.Identity()), this
        }
        addChild(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return uu.setParent(this, Eu), this
        }
        removeChild(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return uu.parent !== this || uu.setParent(null, Eu), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(uu) {
          return this._nonUniformScaling !== uu && (this._nonUniformScaling = uu, !0)
        }
        attachToBone(uu, Eu) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = Eu, this.parent = uu, uu.getSkeleton().prepare(!0), uu.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = uu ? this._currentParentWhenAttachingToBone : null, this) : (uu && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(Eu, ju, su) {
          let Uu;
          if (Eu.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.k_(0)), su && 0 !== su) {
            if (this.parent) {
              const uu = this.parent.getWorldMatrix(),
                su = bu.m.Matrix[0];
              uu.invertToRef(su), Eu = bu.t.TransformNormal(Eu, su), uu.determinant() < 0 && (ju *= -1)
            }
            Uu = bu.i.RotationAxisToRef(Eu, ju, uu._RotationAxisCache), Uu.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else Uu = bu.i.RotationAxisToRef(Eu, ju, uu._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Uu, this.rotationQuaternion);
          return this
        }
        rotateAround(uu, Eu, ju) {
          Eu.normalize(), this.rotationQuaternion || (this.rotationQuaternion = bu.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.k_(0));
          const su = bu.m.dO[0],
            Uu = bu.m.dO[1],
            Zu = bu.m.dO[2],
            Xu = bu.m.Quaternion[0],
            lu = bu.m.Matrix[0],
            qu = bu.m.Matrix[1],
            fu = bu.m.Matrix[2],
            Cu = bu.m.Matrix[3];
          return uu.subtractToRef(this.position, su), bu.e.TranslationToRef(su.x, su.y, su.z, lu), bu.e.TranslationToRef(-su.x, -su.y, -su.z, qu), bu.e.RotationAxisToRef(Eu, ju, fu), qu.multiplyToRef(fu, Cu), Cu.multiplyToRef(lu, Cu), Cu.decompose(Uu, Xu, Zu), this.position.addInPlace(Zu), Xu.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(uu, Eu, ju) {
          const su = uu.scale(Eu);
          if (ju && 0 !== ju) this.setAbsolutePosition(this.getAbsolutePosition().add(su));
          else {
            const uu = this.getPositionExpressedInLocalSpace().add(su);
            this.setPositionWithLocalVector(uu)
          }
          return this
        }
        addRotation(uu, Eu, ju) {
          let su;
          this.rotationQuaternion ? su = this.rotationQuaternion : (su = bu.m.Quaternion[1], bu.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, su));
          const Uu = bu.m.Quaternion[0];
          return bu.i.RotationYawPitchRollToRef(Eu, uu, ju, Uu), su.multiplyInPlace(Uu), this.rotationQuaternion || su.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== uu.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const su = this.hV().getRenderId();
          if (!this._isDirty && !Eu && (this._currentRenderId === su || this.isSynchronized())) return this._currentRenderId = su, this._worldMatrix;
          ju = ju || this.hV().activeCamera, this._updateCache();
          const Uu = this._cache;
          Uu.pivotMatrixUpdated = !1, Uu.billboardMode = this.billboardMode, Uu.infiniteDistance = this.infiniteDistance, Uu.parent = this._parentNode, this._currentRenderId = su, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const Zu = this._getEffectiveParent(),
            Xu = uu._TmpScaling;
          let lu, qu = this._position;
          if (this._infiniteDistance && !this.parent && ju) {
            const Eu = ju.getWorldMatrix().m;
            qu = uu._TmpTranslation, qu.T6(this._position.x + Eu[12], this._position.y + Eu[13], this._position.z + Eu[14])
          }
          if (Xu.T6(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, lu = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(bu.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.T6(0, 0, 0))
            }
          } else lu = uu._TmpRotation, bu.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, lu);
          if (this._usePivotMatrix) {
            const uu = bu.m.Matrix[1];
            bu.e.ScalingToRef(Xu.x, Xu.y, Xu.z, uu);
            const Eu = bu.m.Matrix[0];
            lu.toRotationMatrix(Eu), this._pivotMatrix.multiplyToRef(uu, bu.m.Matrix[4]), bu.m.Matrix[4].multiplyToRef(Eu, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(qu.x, qu.y, qu.z)
          } else bu.e.ComposeToRef(Xu, lu, qu, this._localMatrix);
          if (Zu && Zu.getWorldMatrix) {
            if (Eu && Zu.computeWorldMatrix(Eu), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const uu = this.parent;
                uu.getSkeleton().prepare(), uu.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), bu.m.Matrix[7])
              } else bu.m.Matrix[7].yJ(Zu.getWorldMatrix());
              const Eu = bu.m.dO[5],
                ju = bu.m.dO[6],
                su = bu.m.Quaternion[0];
              bu.m.Matrix[7].decompose(ju, su, Eu), bu.e.ScalingToRef(ju.x, ju.y, ju.z, bu.m.Matrix[7]), bu.m.Matrix[7].setTranslation(Eu), uu.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(su, Eu), this._localMatrix.setTranslation(Eu)), this._localMatrix.multiplyToRef(bu.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const uu = this.parent;
              uu.getSkeleton().prepare(), this._localMatrix.multiplyToRef(uu.getFinalMatrix(), bu.m.Matrix[6]), bu.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(Zu.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.yJ(this._localMatrix);
          if (ju && this.billboardMode)
            if (Uu.useBillboardPosition) {
              const Eu = bu.m.dO[0];
              this._worldMatrix.getTranslationToRef(Eu);
              const su = ju.globalPosition;
              this._worldMatrix.invertToRef(bu.m.Matrix[1]);
              const Uu = bu.m.dO[1];
              bu.t.TransformCoordinatesToRef(su, bu.m.Matrix[1], Uu), Uu.normalize();
              const Zu = -Math.atan2(Uu.z, Uu.x) + Math.PI / 2,
                Xu = Math.sqrt(Uu.x * Uu.x + Uu.z * Uu.z),
                lu = -Math.atan2(Uu.y, Xu);
              if (bu.i.RotationYawPitchRollToRef(Zu, lu, 0, bu.m.Quaternion[0]), (this.billboardMode & uu.BILLBOARDMODE_ALL) !== uu.BILLBOARDMODE_ALL) {
                const Eu = bu.m.dO[1];
                bu.m.Quaternion[0].toEulerAnglesToRef(Eu), (this.billboardMode & uu.BILLBOARDMODE_X) !== uu.BILLBOARDMODE_X && (Eu.x = 0), (this.billboardMode & uu.BILLBOARDMODE_Y) !== uu.BILLBOARDMODE_Y && (Eu.y = 0), (this.billboardMode & uu.BILLBOARDMODE_Z) !== uu.BILLBOARDMODE_Z && (Eu.z = 0), bu.e.RotationYawPitchRollToRef(Eu.y, Eu.x, Eu.z, bu.m.Matrix[0])
              } else bu.e.FromQuaternionToRef(bu.m.Quaternion[0], bu.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(bu.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(bu.m.dO[0])
            } else {
              const Eu = bu.m.dO[0];
              this._worldMatrix.getTranslationToRef(Eu), bu.m.Matrix[1].yJ(ju.getViewMatrix());
              const su = this.hV().useRightHandedSystem;
              if (su && bu.m.Matrix[1].multiplyToRef(uu._TmpRHRestore, bu.m.Matrix[1]), bu.m.Matrix[1].setTranslationFromFloats(0, 0, 0), bu.m.Matrix[1].invertToRef(bu.m.Matrix[0]), (this.billboardMode & uu.BILLBOARDMODE_ALL) !== uu.BILLBOARDMODE_ALL) {
                bu.m.Matrix[0].decompose(void 0, bu.m.Quaternion[0], void 0);
                const Eu = bu.m.dO[1];
                bu.m.Quaternion[0].toEulerAnglesToRef(Eu), (this.billboardMode & uu.BILLBOARDMODE_X) !== uu.BILLBOARDMODE_X && (Eu.x = 0), (this.billboardMode & uu.BILLBOARDMODE_Y) !== uu.BILLBOARDMODE_Y && (Eu.y = 0), (this.billboardMode & uu.BILLBOARDMODE_Z) !== uu.BILLBOARDMODE_Z && (Eu.z = 0), su && (Eu.y += Math.PI), bu.e.RotationYawPitchRollToRef(Eu.y, Eu.x, Eu.z, bu.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(bu.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(bu.m.dO[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : Zu && Zu._nonUniformScaling ? this._updateNonUniformScalingState(Zu._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.T6(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = bu.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), uu) {
            const uu = this.getChildren();
            for (let Eu = 0; Eu < uu.length; ++Eu) {
              const ju = uu[Eu];
              if (ju) {
                ju.computeWorldMatrix();
                const uu = bu.m.Matrix[0];
                ju._localMatrix.multiplyToRef(this._localMatrix, uu);
                const Eu = bu.m.Quaternion[0];
                uu.decompose(ju.Of, Eu, ju.position), ju.rotationQuaternion ? ju.rotationQuaternion.yJ(Eu) : Eu.toEulerAnglesToRef(ju.rotation)
              }
            }
          }
          this.Of.T6(1, 1, 1), this.position.T6(0, 0, 0), this.rotation.T6(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = bu.i.Identity()), this._worldMatrix = bu.e.Identity()
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
          return uu || (uu = this.hV().activeCamera), bu.t.TransformCoordinates(this.getAbsolutePosition(), uu.getViewMatrix())
        }
        getDistanceToCamera() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return uu || (uu = this.hV().activeCamera), this.getAbsolutePosition().subtract(uu.globalPosition).length()
        }
        clone(Eu, ju, su) {
          const Uu = fu.e.Clone((() => new uu(Eu, this.hV())), this);
          if (Uu.name = Eu, Uu.id = Eu, ju && (Uu.parent = ju), !su) {
            const uu = this.getDescendants(!0);
            for (let ju = 0; ju < uu.length; ju++) {
              const su = uu[ju];
              su.clone && su.clone(Eu + "." + su.name, Uu)
            }
          }
          return Uu
        }
        serialize(uu) {
          const Eu = fu.e.Serialize(this, uu);
          return Eu.type = this.getClassName(), Eu.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Eu), Eu.localMatrix = this.getPivotMatrix().Osu(), Eu.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Eu.KV = !0), fu.e.AppendSerializedAnimations(this, Eu), Eu.HY = this.serializeAnimationRanges(), Eu
        }
        getChildTransformNodes(Eu, ju) {
          const su = [];
          return this._getDescendants(su, Eu, (Eu => (!ju || ju(Eu)) && Eu instanceof uu)), su
        }
        dispose(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.hV().stopAnimation(this), this.hV().removeTransformNode(this), this._parentContainer) {
            const uu = this._parentContainer.transformNodes.indexOf(this);
            uu > -1 && this._parentContainer.transformNodes.splice(uu, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), uu) {
            const uu = this.getChildTransformNodes(!0);
            for (const Eu of uu) Eu.parent = null, Eu.computeWorldMatrix(!0)
          }
          super.dispose(uu, Eu)
        }
        normalizeToUnitCube() {
          let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ju = arguments.length > 2 ? arguments[2] : void 0,
            su = null,
            Uu = null;
          Eu && (this.rotationQuaternion ? (Uu = this.rotationQuaternion.clone(), this.rotationQuaternion.T6(0, 0, 0, 1)) : this.rotation && (su = this.rotation.clone(), this.rotation.T6(0, 0, 0)));
          const Zu = this.getHierarchyBoundingVectors(uu, ju),
            Xu = Zu.max.subtract(Zu.min),
            lu = Math.max(Xu.x, Xu.y, Xu.z);
          if (0 === lu) return this;
          const qu = 1 / lu;
          return this.Of.scaleInPlace(qu), Eu && (this.rotationQuaternion && Uu ? this.rotationQuaternion.yJ(Uu) : this.rotation && su && this.rotation.yJ(su)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const fu = "function" === typeof Symbol && Symbol.metadata ? Object.create(hu[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, qu.A)("position")], ju = [(0, qu.A)("rotation")], su = [(0, qu.x)("rotationQuaternion")], Uu = [(0, qu.A)("Of")], Zu = [(0, qu.E)("billboardMode")], Xu = [(0, qu.E)()], Nu = [(0, qu.E)("infiniteDistance")], Ou = [(0, qu.E)()], Yu = [(0, qu.E)()], (0, lu.e)(null, null, Eu, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: uu => "_position" in uu,
            get: uu => uu._position,
            set: (uu, Eu) => {
              uu._position = Eu
            }
          },
          metadata: fu
        }, Du, gu), (0, lu.e)(null, null, ju, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: uu => "_rotation" in uu,
            get: uu => uu._rotation,
            set: (uu, Eu) => {
              uu._rotation = Eu
            }
          },
          metadata: fu
        }, Mu, eu), (0, lu.e)(null, null, su, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: uu => "_rotationQuaternion" in uu,
            get: uu => uu._rotationQuaternion,
            set: (uu, Eu) => {
              uu._rotationQuaternion = Eu
            }
          },
          metadata: fu
        }, Gu, pu), (0, lu.e)(null, null, Uu, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "_scaling" in uu,
            get: uu => uu._scaling,
            set: (uu, Eu) => {
              uu._scaling = Eu
            }
          },
          metadata: fu
        }, wu, Ju), (0, lu.e)(null, null, Zu, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "_billboardMode" in uu,
            get: uu => uu._billboardMode,
            set: (uu, Eu) => {
              uu._billboardMode = Eu
            }
          },
          metadata: fu
        }, du, au), (0, lu.e)(null, null, Xu, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: uu => "scalingDeterminant" in uu,
            get: uu => uu.scalingDeterminant,
            set: (uu, Eu) => {
              uu.scalingDeterminant = Eu
            }
          },
          metadata: fu
        }, Pu, ou), (0, lu.e)(null, null, Nu, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "_infiniteDistance" in uu,
            get: uu => uu._infiniteDistance,
            set: (uu, Eu) => {
              uu._infiniteDistance = Eu
            }
          },
          metadata: fu
        }, ku, mu), (0, lu.e)(null, null, Ou, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "ignoreNonUniformScaling" in uu,
            get: uu => uu.ignoreNonUniformScaling,
            set: (uu, Eu) => {
              uu.ignoreNonUniformScaling = Eu
            }
          },
          metadata: fu
        }, vu, Ku), (0, lu.e)(null, null, Yu, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: uu => "reIntegrateRotationIntoRotationQuaternion" in uu,
            get: uu => uu.reIntegrateRotationIntoRotationQuaternion,
            set: (uu, Eu) => {
              uu.reIntegrateRotationIntoRotationQuaternion = Eu
            }
          },
          metadata: fu
        }, Vu, ru), fu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fu
        })
      })(), uu.BILLBOARDMODE_NONE = 0, uu.BILLBOARDMODE_X = 1, uu.BILLBOARDMODE_Y = 2, uu.BILLBOARDMODE_Z = 4, uu.BILLBOARDMODE_ALL = 7, uu.BILLBOARDMODE_USE_POSITION = 128, uu.BillboardUseParentOrientation = !1, uu._TmpRotation = bu.i.Zero(), uu._TmpScaling = bu.t.Zero(), uu._TmpTranslation = bu.t.Zero(), uu._TmpRHRestore = bu.e.Scaling(1, 1, -1), uu._LookAtVectorCache = new bu.t(0, 0, 0), uu._RotationAxisCache = new bu.i, uu
    })();

    function hu(uu, Eu, ju) {
      const su = fu.e.Parse((() => new Yu(uu.name, Eu)), uu, Eu, ju);
      if (uu.localMatrix ? su.setPreTransformMatrix(bu.e.FromArray(uu.localMatrix)) : uu.pivotMatrix && su.setPivotMatrix(bu.e.FromArray(uu.pivotMatrix)), su.Wk(uu.isEnabled), su._waitingParsedUniqueId = uu.uniqueId, void 0 !== uu.parentId && (su._waitingParentId = uu.parentId), void 0 !== uu.parentInstanceIndex && (su._waitingParentInstanceIndex = uu.parentInstanceIndex), uu.KV && (su._waitingFreezeWorldMatrix = uu.KV), uu.animations) {
        for (let Eu = 0; Eu < uu.animations.length; Eu++) {
          const ju = uu.animations[Eu],
            Uu = (0, Nu.d)("BABYLON.Animation");
          Uu && su.animations.push(Uu.Parse(ju))
        }
        cu.c.ParseAnimationRanges(su, uu, Eu)
      }
      return uu.autoAnimate && Eu.beginAnimation(su, uu.autoAnimateFrom, uu.autoAnimateTo, uu.autoAnimateLoop, uu.autoAnimateSpeed || 1), su
    }
    let Du = !1;

    function gu() {
      Du || (Du = !0, Yu.Parse = hu)
    }(su = Yu.prototype).SF ?? (su.SF = (0, Ou.g)("TransformNode", "SF")), (Uu = Yu.prototype).applyImpulse ?? (Uu.applyImpulse = (0, Ou.g)("TransformNode", "applyImpulse")), (Zu = Yu.prototype).applyAngularImpulse ?? (Zu.applyAngularImpulse = (0, Ou.g)("TransformNode", "applyAngularImpulse")), (Xu = Yu.prototype).applyTorque ?? (Xu.applyTorque = (0, Ou.g)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(Yu.prototype, "physicsBody") || Object.defineProperty(Yu.prototype, "physicsBody", (0, Ou.d)("TransformNode", "physicsBody"))
  },
  40663: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      try {
        const su = uu.next();
        su.done ? Eu(su) : su.value ? su.value.then((() => {
          su.value = void 0, Eu(su)
        }), ju) : Eu(su)
      } catch (su) {
        ju(su)
      }
    }

    function Uu() {
      let uu, Eu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ju, Uu, Zu) => {
        const Xu = performance.now();
        void 0 === uu || Xu - uu > Eu ? (uu = Xu, setTimeout((() => {
          su(ju, Uu, Zu)
        }), 0)) : su(ju, Uu, Zu)
      }
    }

    function Zu(uu, Eu, ju, su, Uu) {
      const Zu = () => {
        let Xu;
        const lu = uu => {
          uu.done ? ju(uu.value) : void 0 === Xu ? Xu = !0 : Zu()
        };
        do {
          Xu = void 0, Uu && Uu.aborted ? su(new Error("Aborted")) : Eu(uu, lu, su), void 0 === Xu && (Xu = !1)
        } while (Xu)
      };
      Zu()
    }

    function Xu(uu, Eu) {
      let ju;
      return Zu(uu, su, (uu => ju = uu), (uu => {
        throw uu
      }), Eu), ju
    }
    async function lu(uu, Eu, ju) {
      return await new Promise(((su, Uu) => {
        Zu(uu, Eu, su, Uu, ju)
      }))
    }

    function qu(uu, Eu) {
      return function() {
        return Xu(uu(...arguments), Eu)
      }
    }
    ju.d(Eu, {
      b: () => Uu,
      d: () => qu,
      h: () => lu,
      k: () => Xu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);
export const id = 251;
export const ids = [251];
export const modules = {
  40148: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => GD,
      d: () => MD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(40043),
      rD = wD(37119),
      LD = wD(37079),
      cD = wD(40155),
      gD = wD(38662),
      RD = wD(37134),
      AD = wD(39808),
      UD = wD(38074),
      fD = wD(37752),
      ID = wD(39886),
      BD = wD(39939);
    let GD = (() => {
      var DD;
      let zD, wD, RD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD = cD.b,
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        kD = [],
        mD = [],
        eD = [],
        oD = [],
        aD = [],
        uD = [],
        vD = [],
        tD = [],
        FD = [],
        YD = [],
        HD = [],
        qD = [],
        Dz = [],
        zz = [],
        wz = [],
        pz = [],
        sz = [];
      return DD = class extends jD {
        get position() {
          return this._position
        }
        set position(DD) {
          this._position = DD
        }
        set upVector(DD) {
          this._upVector = DD
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let zD, wD;
          if (this.mode === DD.PERSPECTIVE_CAMERA) this.fovMode === DD.FOVMODE_VERTICAL_FIXED ? (wD = 2 * this.minZ * Math.tan(this.fov / 2), zD = this.iI().getAspectRatio(this) * wD) : (zD = 2 * this.minZ * Math.tan(this.fov / 2), wD = zD / this.iI().getAspectRatio(this));
          else {
            const DD = this.iI().getRenderWidth() / 2,
              pD = this.iI().getRenderHeight() / 2;
            zD = (this.orthoRight ?? DD) - (this.orthoLeft ?? -DD), wD = (this.orthoTop ?? pD) - (this.orthoBottom ?? -pD)
          }
          return zD * wD
        }
        set orthoLeft(DD) {
          this._orthoLeft = DD;
          for (const zD of this._rigCameras) zD.orthoLeft = DD
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(DD) {
          this._orthoRight = DD;
          for (const zD of this._rigCameras) zD.orthoRight = DD
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(DD) {
          this._orthoBottom = DD;
          for (const zD of this._rigCameras) zD.orthoBottom = DD
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(DD) {
          this._orthoTop = DD;
          for (const zD of this._rigCameras) zD.orthoTop = DD
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(zD / (2 * DD))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(DD) {
          this._baseInertia = DD
        }
        set mode(DD) {
          this._mode = DD;
          for (const zD of this._rigCameras) zD.mode = DD
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(zD, wD, sD) {
          let cD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, ID.b)(), super(zD, sD, !1), this.inputs = (0, pD.m)(this, dD), this._position = (0, pD.m)(this, SD, LD.s.Zero()), this._upVector = ((0, pD.m)(this, iD), (0, pD.m)(this, lD, LD.s.Up())), this.oblique = ((0, pD.m)(this, WD), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, pD.m)(this, ND, .8), this.projectionPlaneTilt = ((0, pD.m)(this, ZD), (0, pD.m)(this, yD, 0)), this.minZ = ((0, pD.m)(this, kD), (0, pD.m)(this, mD, 1)), this.maxZ = ((0, pD.m)(this, eD), (0, pD.m)(this, oD, 1e4)), this._baseInertia = ((0, pD.m)(this, aD), .9), this._mode = DD.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new UD.e(0, 0, 1, 1), this.layerMask = (0, pD.m)(this, uD, 268435455), this.fovMode = ((0, pD.m)(this, vD), (0, pD.m)(this, tD, DD.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, pD.m)(this, FD), (0, pD.m)(this, YD, DD.RIG_MODE_NONE)), this.interaxialDistance = ((0, pD.m)(this, HD), (0, pD.m)(this, qD, void 0)), this.isStereoscopicSideBySide = ((0, pD.m)(this, Dz), (0, pD.m)(this, zz, void 0)), this.ignoreCameraMaxZ = ((0, pD.m)(this, wz), (0, pD.m)(this, pz, !1)), this.customRenderTargets = ((0, pD.m)(this, sz), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new rD.b, this.onProjectionMatrixChangedObservable = new rD.b, this.onAfterCheckInputsObservable = new rD.b, this.onRestoreStateObservable = new rD.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new LD.e, this._postProcesses = new Array, this._activeMeshes = new KD.f(256), this._globalPosition = LD.s.Zero(), this._computedViewMatrix = LD.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = LD.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = LD.i.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Ul().defaultCameraLayerMask, this.Ul().addCamera(this), cD && !this.Ul().activeCamera && (this.Ul().activeCamera = this), this.position = wD, this.renderPassId = this.Ul().iI().createRenderPassId(`Camera ${zD}`)
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
          return "WG"
        }
        toString(DD) {
          let zD = "Name: " + this.name;
          if (zD += ", type: " + this.getClassName(), this.animations)
            for (let wD = 0; wD < this.animations.length; wD++) zD += ", animation[0]: " + this.animations[wD].toString(DD);
          return zD
        }
        applyVerticalCorrection() {
          const DD = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -DD.x : DD.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(DD) {
          return -1 !== this._activeMeshes.indexOf(DD)
        }
        isReady() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (DD)
            for (const zD of this._postProcesses)
              if (zD && !zD.isReady()) return !1;
          return super.isReady(DD)
        }
        _initCache() {
          super._initCache(), this._cache.position = new LD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new LD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(DD) {
          DD || super._updateCache(), this._cache.position.pC(this.position), this._cache.upVector.pC(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const zD = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let wD = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === zD;
          if (!wD) return !1;
          const pD = this.iI();
          return this.mode === DD.PERSPECTIVE_CAMERA ? wD = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === pD.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (wD = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === pD.getRenderWidth() && this._cache.renderHeight === pD.getRenderHeight(), this.oblique && (wD = wD && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), wD
        }
        attachControl(DD, zD) {}
        detachControl(DD) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== DD.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let DD = 0; DD < this._postProcesses.length; DD++)
            if (null !== this._postProcesses[DD]) return this._postProcesses[DD];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const DD = this._getFirstPostProcess();
          DD && DD.markTextureDirty();
          for (let zD = 0, wD = this._rigCameras.length; zD < wD; zD++) {
            const DD = this._rigCameras[zD],
              wD = DD._rigPostProcess;
            if (wD) {
              "pass" === wD.getEffectName() && (DD.isIntermediate = 0 === this._postProcesses.length), DD._postProcesses = this._postProcesses.slice(0).concat(wD), wD.markTextureDirty()
            } else DD._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !DD.isReusable() && this._postProcesses.indexOf(DD) > -1 ? (gD.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == zD || zD < 0 ? this._postProcesses.push(DD) : null === this._postProcesses[zD] ? this._postProcesses[zD] = DD : this._postProcesses.splice(zD, 0, DD), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.vzD(), this._postProcesses.indexOf(DD))
        }
        detachPostProcess(DD) {
          const zD = this._postProcesses.indexOf(DD); - 1 !== zD && (this._postProcesses[zD] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.vzD(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return LD.e.Identity()
        }
        getViewMatrix(DD) {
          return !DD && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Ul().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(DD) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== DD && (this._projectionMatrix = DD)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(zD) {
          if (this._doNotComputeProjectionMatrix || !zD && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const wD = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = wD, this._refreshFrustumPlanes = !0;
          const pD = this.iI(),
            sD = this.Ul(),
            KD = pD.OpD;
          if (this.mode === DD.PERSPECTIVE_CAMERA) {
            let zD;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = pD.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), zD = sD.useRightHandedSystem ? LD.e.PerspectiveFovRHToRef : LD.e.PerspectiveFovLHToRef, zD(this.fov, pD.getAspectRatio(this), KD ? wD : this.minZ, KD ? this.minZ : wD, this._projectionMatrix, this.fovMode === DD.FOVMODE_VERTICAL_FIXED, pD.isNDCHalfZRange, this.projectionPlaneTilt, KD)
          } else {
            const DD = pD.getRenderWidth() / 2,
              zD = pD.getRenderHeight() / 2;
            sD.useRightHandedSystem ? this.oblique ? LD.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -zD, this.orthoTop ?? zD, KD ? wD : this.minZ, KD ? this.minZ : wD, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, pD.isNDCHalfZRange) : LD.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -zD, this.orthoTop ?? zD, KD ? wD : this.minZ, KD ? this.minZ : wD, this._projectionMatrix, pD.isNDCHalfZRange) : this.oblique ? LD.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -zD, this.orthoTop ?? zD, KD ? wD : this.minZ, KD ? this.minZ : wD, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, pD.isNDCHalfZRange) : LD.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -zD, this.orthoTop ?? zD, KD ? wD : this.minZ, KD ? this.minZ : wD, this._projectionMatrix, pD.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = pD.getRenderWidth(), this._cache.renderHeight = pD.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(DD) {
          return (this.radius || (this.target ? LD.s.Distance(this.position, this.target) : this.position.length())) + DD
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? fD.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = fD.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), zD && this.rigCameras.length > 0) {
            let zD = !1;
            for (const wD of this.rigCameras) wD._updateFrustumPlanes(), zD = zD || DD.isInFrustum(wD._frustumPlanes);
            return zD
          }
          return DD.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(DD) {
          return this._updateFrustumPlanes(), DD.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, AD.j)("Ray")
        }
        getForwardRayToRef(DD) {
          throw (0, AD.j)("Ray")
        }
        dispose(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Ul().stopAnimation(this), this.Ul().removeCamera(this); this._rigCameras.length > 0;) {
            const DD = this._rigCameras.pop();
            DD && DD.dispose()
          }
          if (this._parentContainer) {
            const DD = this._parentContainer.cameras.indexOf(this);
            DD > -1 && this._parentContainer.cameras.splice(DD, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== DD.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let DD = this._postProcesses.length;
            for (; --DD >= 0;) {
              const zD = this._postProcesses[DD];
              zD && zD.dispose(this)
            }
          }
          let pD = this.customRenderTargets.length;
          for (; --pD >= 0;) this.customRenderTargets[pD].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Ul().iI().releaseRenderPassId(this.renderPassId), super.dispose(zD, wD)
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
        setCameraRigMode(zD, wD) {
          if (this.cameraRigMode !== zD) {
            for (; this._rigCameras.length > 0;) {
              const DD = this._rigCameras.pop();
              DD && DD.dispose()
            }
            if (this.cameraRigMode = zD, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = wD.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== DD.RIG_MODE_NONE) {
              const DD = this.createRigCamera(this.name + "_L", 0);
              DD && (DD._isLeftCamera = !0);
              const zD = this.createRigCamera(this.name + "_R", 1);
              zD && (zD._isRightCamera = !0), DD && zD && (this._rigCameras.push(DD), this._rigCameras.push(zD))
            }
            this._setRigMode(wD), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(DD) {}
        _getVRProjectionMatrix() {
          return LD.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.iI().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(DD, zD) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[DD] = zD, "interaxialDistance" === DD && (this._cameraRigParams.stereoHalfAngle = zD / .0637 * (Math.PI / 180))
        }
        createRigCamera(DD, zD) {
          return null
        }
        _updateRigCameras() {
          for (let DD = 0; DD < this._rigCameras.length; DD++) this._rigCameras[DD].minZ = this.minZ, this._rigCameras[DD].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[DD].fov = this.fov, this._rigCameras[DD].upVector.pC(this.upVector);
          this.cameraRigMode === DD.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const DD = BD.d.Serialize(this);
          return DD.uniqueId = this.uniqueId, DD.type = this.getClassName(), this.parent && this.parent._serializeAsParent(DD), this.inputs && this.inputs.serialize(DD), BD.d.AppendSerializedAnimations(this, DD), DD.rG = this.serializeAnimationRanges(), DD.isEnabled = this.isEnabled(), DD
        }
        clone(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pD = BD.d.Clone(DD.GetConstructorFromName(this.getClassName(), zD, this.Ul(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return pD.name = zD, pD.parent = wD, this.onClonedObservable.notifyObservers(pD), pD
        }
        WH(DD) {
          const zD = LD.s.Zero();
          return this.getDirectionToRef(DD, zD), zD
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(DD, zD) {
          LD.s.TransformNormalToRef(DD, this.getWorldMatrix(), zD)
        }
        static GetConstructorFromName(zD, wD, pD) {
          let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const rD = cD.b.Construct(zD, wD, pD, {
            interaxial_distance: sD,
            isStereoscopicSideBySide: KD
          });
          return rD || (() => DD._CreateDefaultParsedCamera(wD, pD))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let DD = this.Ul().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (DD *= -1), DD
        }
      }, (() => {
        const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(jD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, sD.B)("position")], wD = [(0, sD.B)("upVector")], RD = [(0, sD.C)()], GD = [(0, sD.C)()], hD = [(0, sD.C)()], nD = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)()], QD = [(0, sD.C)()], XD = [(0, sD.C)()], VD = [(0, sD.C)()], PD = [(0, sD.C)()], CD = [(0, sD.C)()], xD = [(0, sD.C)()], TD = [(0, sD.C)()], bD = [(0, sD.C)()], (0, pD.i)(DD, null, RD, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoLeft" in DD,
            get: DD => DD.orthoLeft
          },
          metadata: KD
        }, null, dD), (0, pD.i)(DD, null, GD, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoRight" in DD,
            get: DD => DD.orthoRight
          },
          metadata: KD
        }, null, dD), (0, pD.i)(DD, null, hD, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoBottom" in DD,
            get: DD => DD.orthoBottom
          },
          metadata: KD
        }, null, dD), (0, pD.i)(DD, null, nD, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoTop" in DD,
            get: DD => DD.orthoTop
          },
          metadata: KD
        }, null, dD), (0, pD.i)(DD, null, QD, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: DD => "inertia" in DD,
            get: DD => DD.inertia
          },
          metadata: KD
        }, null, dD), (0, pD.i)(DD, null, XD, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: DD => "mode" in DD,
            get: DD => DD.mode
          },
          metadata: KD
        }, null, dD), (0, pD.i)(null, null, zD, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: DD => "_position" in DD,
            get: DD => DD._position,
            set: (DD, zD) => {
              DD._position = zD
            }
          },
          metadata: KD
        }, SD, iD), (0, pD.i)(null, null, wD, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: DD => "_upVector" in DD,
            get: DD => DD._upVector,
            set: (DD, zD) => {
              DD._upVector = zD
            }
          },
          metadata: KD
        }, lD, WD), (0, pD.i)(null, null, MD, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: DD => "fov" in DD,
            get: DD => DD.fov,
            set: (DD, zD) => {
              DD.fov = zD
            }
          },
          metadata: KD
        }, ND, ZD), (0, pD.i)(null, null, OD, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: DD => "projectionPlaneTilt" in DD,
            get: DD => DD.projectionPlaneTilt,
            set: (DD, zD) => {
              DD.projectionPlaneTilt = zD
            }
          },
          metadata: KD
        }, yD, kD), (0, pD.i)(null, null, JD, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "minZ" in DD,
            get: DD => DD.minZ,
            set: (DD, zD) => {
              DD.minZ = zD
            }
          },
          metadata: KD
        }, mD, eD), (0, pD.i)(null, null, ED, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "maxZ" in DD,
            get: DD => DD.maxZ,
            set: (DD, zD) => {
              DD.maxZ = zD
            }
          },
          metadata: KD
        }, oD, aD), (0, pD.i)(null, null, VD, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "layerMask" in DD,
            get: DD => DD.layerMask,
            set: (DD, zD) => {
              DD.layerMask = zD
            }
          },
          metadata: KD
        }, uD, vD), (0, pD.i)(null, null, PD, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "fovMode" in DD,
            get: DD => DD.fovMode,
            set: (DD, zD) => {
              DD.fovMode = zD
            }
          },
          metadata: KD
        }, tD, FD), (0, pD.i)(null, null, CD, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "cameraRigMode" in DD,
            get: DD => DD.cameraRigMode,
            set: (DD, zD) => {
              DD.cameraRigMode = zD
            }
          },
          metadata: KD
        }, YD, HD), (0, pD.i)(null, null, xD, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "interaxialDistance" in DD,
            get: DD => DD.interaxialDistance,
            set: (DD, zD) => {
              DD.interaxialDistance = zD
            }
          },
          metadata: KD
        }, qD, Dz), (0, pD.i)(null, null, TD, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: DD => "isStereoscopicSideBySide" in DD,
            get: DD => DD.isStereoscopicSideBySide,
            set: (DD, zD) => {
              DD.isStereoscopicSideBySide = zD
            }
          },
          metadata: KD
        }, zz, wz), (0, pD.i)(null, null, bD, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "ignoreCameraMaxZ" in DD,
            get: DD => DD.ignoreCameraMaxZ,
            set: (DD, zD) => {
              DD.ignoreCameraMaxZ = zD
            }
          },
          metadata: KD
        }, pz, sz), KD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KD
        })
      })(), DD._CreateDefaultParsedCamera = (DD, zD) => {
        throw (0, AD.j)("UniversalCamera")
      }, DD.PERSPECTIVE_CAMERA = 0, DD.ORTHOGRAPHIC_CAMERA = 1, DD.FOVMODE_VERTICAL_FIXED = 0, DD.FOVMODE_HORIZONTAL_FIXED = 1, DD.RIG_MODE_NONE = 0, DD.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, DD.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, DD.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, DD.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, DD.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, DD.RIG_MODE_VR = 20, DD.RIG_MODE_CUSTOM = 22, DD.ForceAttachControlToAlwaysPreventDefault = !1, DD
    })();

    function hD(DD, zD) {
      const wD = DD.type,
        pD = GD.GetConstructorFromName(wD, DD.name, zD, DD.interaxial_distance, DD.isStereoscopicSideBySide),
        sD = BD.d.Parse(pD, DD, zD);
      if (void 0 !== DD.parentId && (sD._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (sD._waitingParentInstanceIndex = DD.parentInstanceIndex), sD.inputs && (sD.inputs.parse(DD), sD._setupInputs()), DD.upVector && (sD.upVector = LD.s.FromArray(DD.upVector)), sD.setPosition && (sD.position.Z2(0, 0, 0), sD.setPosition(LD.s.FromArray(DD.position))), DD.target && sD.setTarget && sD.setTarget(LD.s.FromArray(DD.target)), DD.cameraRigMode) {
        const zD = DD.interaxial_distance ? {
          interaxialDistance: DD.interaxial_distance
        } : {};
        sD.setCameraRigMode(DD.cameraRigMode, zD)
      }
      if (DD.animations) {
        for (let zD = 0; zD < DD.animations.length; zD++) {
          const wD = DD.animations[zD],
            pD = (0, RD.e)("BABYLON.Animation");
          pD && sD.animations.push(pD.Parse(wD))
        }
        cD.b.ParseAnimationRanges(sD, DD, zD)
      }
      return DD.autoAnimate && zD.beginAnimation(sD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), void 0 !== DD.isEnabled && sD.nC(DD.isEnabled), sD
    }
    let nD = !1;

    function MD() {
      nD || (nD = !0, GD.Parse = hD)
    }
  },
  40162: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD) {
        this._cameraPosition = zD, this._behavior = wD, this.activeInput = !1, this.speed = 1, this.pY = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new pD.s, this.rotationAccumulatedPixels = new pD.s, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = pD.s.Zero(), this.rotationDeltaCurrentFrame = pD.s.Zero(), this._zoomVelocity = 0, this._panVelocity = new pD.s, this.referenceFrameRate = 60, this._rotationVelocity = new pD.s, this._prevFrameTimeMs = 0, this._scene = DD
      }
      computeCurrentFrameDeltas() {
        const DD = this._scene.iI().getDeltaTime(),
          zD = this._getEffectiveDeltaMs(DD);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.I9(0), this.rotationDeltaCurrentFrame.I9(0), this.zoomDeltaCurrentFrame = 0, void(DD > 0 && (this._prevFrameTimeMs = DD));
        this.panDeltaCurrentFrame.I9(0), this.rotationDeltaCurrentFrame.I9(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.Z2(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * zD, this.panDeltaCurrentFrame), this._rotationVelocity.Z2(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.Z2(this._rotationVelocity.x * this.speed * this.rotationXSpeed * zD, this._rotationVelocity.y * this.speed * this.rotationYSpeed * zD, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.pY * this._zoomSpeedMultiplier) * zD, DD > 0 && (this._prevFrameTimeMs = DD), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.I9(0), this.rotationAccumulatedPixels.I9(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.I9(0), this.rotationAccumulatedPixels.I9(0)
      }
      resetPanVelocity() {
        this._panVelocity.I9(0), this.panAccumulatedPixels.I9(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(DD) {
        const zD = this._scene.iI().getDeltaTime(),
          wD = this._getEffectiveDeltaMs(zD),
          pD = 1e3 / this.referenceFrameRate;
        return Math.pow(DD, wD / pD)
      }
      getFrameIndependentInputScale(DD) {
        const zD = 1 - DD;
        if (zD <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(DD)) / zD
      }
      _getEffectiveDeltaMs(DD) {
        return DD > 0 ? DD : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(DD, zD, wD) {
        let pD = DD;
        const sD = this._scene.iI().getDeltaTime(),
          KD = this._getEffectiveDeltaMs(sD);
        if (0 === KD) return pD;
        const rD = this.getFrameIndependentDecay(wD);
        if (pD *= rD, 0 !== zD || this.activeInput) {
          const DD = 1 - wD;
          pD += zD / KD * (DD > 0 ? (1 - rD) / DD : 1)
        } else Math.abs(pD) < 1e-6 && (pD = 0);
        return pD
      }
    }
  },
  40171: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor(DD, zD) {
        this.inputMap = [], this.handlers = DD, this._createDefaultEntries = zD, this.resetInputMap()
      }
      resolveInteraction(DD, zD) {
        for (const wD of this.inputMap)
          if (wD.source === DD && this._entryMatches(wD, zD)) return wD;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(DD, zD, wD) {
        const pD = this.inputMap;
        for (let sD = 0; sD < pD.length; sD++) {
          const KD = pD[sD];
          if (KD.source === DD && KD.interaction === zD && this._entryConditionsMatch(KD, wD)) return KD
        }
      }
      getEntries(DD, zD, wD) {
        const pD = [],
          sD = this.inputMap;
        for (let KD = 0; KD < sD.length; KD++) {
          const rD = sD[KD];
          rD.source === DD && rD.interaction === zD && this._entryConditionsMatch(rD, wD) && pD.push(rD)
        }
        return pD
      }
      addEntry(DD) {
        const zD = this._entrySpecificity(DD);
        let wD = this.inputMap.length;
        for (let pD = 0; pD < this.inputMap.length; pD++)
          if (this._entrySpecificity(this.inputMap[pD]) < zD) {
            wD = pD;
            break
          } this.inputMap.splice(wD, 0, DD)
      }
      setInteraction(DD, zD, wD) {
        const pD = this.resolveInteraction(DD, zD);
        return pD && this._entryCoversAllConditionsOf(pD, zD) ? (pD.interaction = wD, !0) : (this.addEntry({
          source: DD,
          ...zD ?? {},
          interaction: wD
        }), !0)
      }
      _entryCoversAllConditionsOf(DD, zD) {
        if (!zD) return !0;
        const wD = DD;
        for (const pD of Object.keys(zD)) {
          const DD = zD[pD];
          if (void 0 !== DD)
            if ("modifiers" === pD) {
              const zD = wD.modifiers ?? {};
              for (const wD of Object.keys(DD))
                if (void 0 !== DD[wD] && void 0 === zD[wD]) return !1
            } else if (void 0 === wD[pD]) return !1
        }
        return !0
      }
      setInteractions(DD, zD, wD) {
        let pD = 0;
        const sD = this.inputMap;
        for (let KD = 0; KD < sD.length; KD++) {
          const rD = sD[KD];
          rD.source === DD && this._entryMatches(rD, zD) && (rD.interaction = wD, pD++)
        }
        return pD
      }
      _entryMatches(DD, zD) {
        switch (DD.source) {
          case "pointer":
            return (void 0 === DD.button || DD.button === zD?.button) && this._matchModifiers(DD.modifiers, zD?.modifiers);
          case "wheel":
            return this._matchModifiers(DD.modifiers, zD?.modifiers);
          case "touch":
            return void 0 === DD.touchCount || DD.touchCount === zD?.touchCount;
          case "keyboard":
            return (void 0 === DD.key || (Array.isArray(DD.key) ? -1 !== DD.key.indexOf(zD?.key ?? -1) : DD.key === zD?.key)) && this._matchModifiers(DD.modifiers, zD?.modifiers)
        }
      }
      _entryConditionsMatch(DD, zD) {
        if (!zD) return !0;
        switch (DD.source) {
          case "pointer":
            return (!("button" in zD) || DD.button === zD.button) && (!("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers));
          case "wheel":
            return !("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers);
          case "touch":
            return !("touchCount" in zD) || DD.touchCount === zD.touchCount;
          case "keyboard":
            if ("key" in zD) {
              if (void 0 === DD.key) return void 0 === zD.key;
              if (void 0 === zD.key || (Array.isArray(DD.key) ? -1 === DD.key.indexOf(zD.key) : DD.key !== zD.key)) return !1
            }
            return !("modifiers" in zD) || this._entryModifiersMatch(DD.modifiers, zD.modifiers)
        }
      }
      _entrySpecificity(DD) {
        let zD = 0;
        return "button" in DD && void 0 !== DD.button && zD++, "key" in DD && void 0 !== DD.key && zD++, "touchCount" in DD && void 0 !== DD.touchCount && zD++, "modifiers" in DD && DD.modifiers && zD++, zD
      }
      _matchModifiers(DD, zD) {
        return !DD || (void 0 === DD.ctrl || DD.ctrl === (zD?.ctrl ?? !1)) && ((void 0 === DD.shift || DD.shift === (zD?.shift ?? !1)) && (void 0 === DD.alt || DD.alt === (zD?.alt ?? !1)))
      }
      _entryModifiersMatch(DD, zD) {
        if (!zD) return !DD;
        return void 0 !== zD.ctrl || void 0 !== zD.shift || void 0 !== zD.alt ? (void 0 === zD.ctrl || DD?.ctrl === zD.ctrl) && ((void 0 === zD.shift || DD?.shift === zD.shift) && (void 0 === zD.alt || DD?.alt === zD.alt)) : !DD || void 0 === DD.ctrl && void 0 === DD.shift && void 0 === DD.alt
      }
    }
  },
  40146: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => hD,
      g: () => BD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(40148),
      rD = wD(37079),
      LD = wD(37088),
      cD = wD(40157),
      gD = wD(40155),
      RD = wD(40162),
      AD = wD(40171);
    class UD extends RD.b {
      constructor(DD, zD, wD) {
        super(DD, zD, wD), this.input = new AD.d({
          translate: (DD, zD, wD) => {
            this.panAccumulatedPixels.x += DD, this.panAccumulatedPixels.y += zD, this.panAccumulatedPixels.z += wD
          },
          rotate: (DD, zD) => {
            this.rotationAccumulatedPixels.x += DD, this.rotationAccumulatedPixels.y += zD
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
    const fD = rD.e.Zero(),
      ID = rD.i.Identity();
    let BD = (() => {
        var DD;
        let zD, wD, gD, RD, AD = KD.c,
          BD = [],
          GD = [],
          hD = [],
          nD = [],
          MD = [],
          OD = [],
          JD = [],
          ED = [];
        return DD = class extends AD {
          get inertia() {
            return this._targetInertia
          }
          set inertia(DD) {
            this._targetInertia = DD, this.movement && (this.movement.panInertia = DD, this.movement.rotationInertia = DD)
          }
          constructor(DD, zD, wD) {
            super(DD, zD, wD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new rD.s(0, 0, 0), this.cameraRotation = new rD.r(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, pD.m)(this, BD, !1), this.rotation = ((0, pD.m)(this, GD), (0, pD.m)(this, hD, void 0)), this.rotationQuaternion = (0, pD.m)(this, nD), this.speed = (0, pD.m)(this, MD, 2), this.noRotationConstraint = ((0, pD.m)(this, OD), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = LD.b, this._rotationEpsilon = LD.b, this.lockedTarget = (0, pD.m)(this, JD, null), this._currentTarget = ((0, pD.m)(this, ED), rD.s.Zero()), this._initialFocalDistance = 1, this._viewMatrix = rD.e.Zero(), this._cameraTransformMatrix = rD.e.Zero(), this._cameraRotationMatrix = rD.e.Zero(), this._transformedReferencePoint = rD.s.Zero(), this._deferredPositionUpdate = new rD.s, this._deferredRotationQuaternionUpdate = new rD.i, this._deferredRotationUpdate = new rD.s, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = rD.s.Forward(this.Ul().useRightHandedSystem), this.rotation = new rD.s(0, this.Ul().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new UD(this.Ul(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(DD) {
            this.getWorldMatrix();
            const zD = rD.n.WI[0],
              wD = rD.n.WI[1];
            return wD.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(wD, zD), zD.scaleInPlace(DD), this.globalPosition.add(zD)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const DD = this.lockedTarget;
              DD.computeWorldMatrix().getTranslationToRef(DD.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.Z2(0, 0, 0), this.cameraRotation.Z2(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new rD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new rD.i(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(DD) {
            DD || super._updateCache();
            const zD = this._getLockedTargetPosition();
            zD ? this._cache.lockedTarget ? this._cache.lockedTarget.pC(zD) : this._cache.lockedTarget = zD.clone() : this._cache.lockedTarget = null, this._cache.rotation.pC(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.pC(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const DD = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(DD) : !DD) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const DD = this.iI();
            return this.speed * Math.sqrt(DD.getDeltaTime() / (100 * DD.getFps()))
          }
          setTarget(DD) {
            this.upVector.normalize(), this._initialFocalDistance = DD.subtract(this.position).length(), this.position.z === DD.z && (this.position.z += LD.b), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Ul().useRightHandedSystem ? rD.e.LookAtRHToRef(this.position, DD, rD.s.UpReadOnly, fD) : rD.e.LookAtLHToRef(this.position, DD, rD.s.UpReadOnly, fD), fD.invert();
            const zD = this.rotationQuaternion || ID;
            rD.i.FromRotationMatrixToRef(fD, zD), zD.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(DD) {
            this.setTarget(DD)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(rD.n.Matrix[0]), rD.s.TransformNormalToRef(this.cameraDirection, rD.n.Matrix[0], rD.n.WI[0]), this._deferredPositionUpdate.addInPlace(rD.n.WI[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.pC(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.pC(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const DD = this.movement,
              zD = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            DD.panAccumulatedPixels.addInPlace(this.cameraDirection), DD.rotationAccumulatedPixels.x += this.cameraRotation.x, DD.rotationAccumulatedPixels.y += this.cameraRotation.y, DD.computeCurrentFrameDeltas(), this.cameraDirection.pC(DD.panDeltaCurrentFrame), this.cameraRotation.set(DD.rotationDeltaCurrentFrame.x, DD.rotationDeltaCurrentFrame.y);
            const wD = this.speed * this._panningEpsilon;
            !zD && Math.abs(this.cameraDirection.x) < wD && Math.abs(this.cameraDirection.y) < wD && Math.abs(this.cameraDirection.z) < wD && (this.cameraDirection.I9(0), DD.resetPanVelocity());
            const pD = this.invertRotation ? -this.inverseRotationSpeed : 1,
              sD = this._decideIfNeedsToMove(),
              KD = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.pC(this.rotation), this._deferredPositionUpdate.pC(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.pC(this.rotationQuaternion), sD && this._updatePosition(), KD) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * pD, this._deferredRotationUpdate.y += this.cameraRotation.y * pD, !this.noRotationConstraint) {
                const DD = 1.570796;
                this._deferredRotationUpdate.x > DD && (this._deferredRotationUpdate.x = DD), this._deferredRotationUpdate.x < -DD && (this._deferredRotationUpdate.x = -DD)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.pC(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (rD.i.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.pC(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.I9(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : rD.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return rD.s.TransformNormalToRef(rD.s.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), rD.s.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? cD.e.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (rD.i.FromEulerVectorToRef(this.rotation, ID), cD.e.Y.rotateByQuaternionToRef(ID, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(DD, zD, wD) {
            if (this.Ul().useRightHandedSystem ? rD.e.LookAtRHToRef(DD, zD, wD, this._viewMatrix) : rD.e.LookAtLHToRef(DD, zD, wD, this._viewMatrix), this.parent) {
              const DD = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(DD, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(zD, wD) {
            if (this.cameraRigMode !== KD.c.RIG_MODE_NONE) {
              const wD = new DD(zD, this.position.clone(), this.Ul());
              return wD.isRigCamera = !0, wD.rigParent = this, this.cameraRigMode === KD.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new rD.i), wD._cameraRigParams = {}, wD.rotationQuaternion = new rD.i), wD.mode = this.mode, wD.orthoLeft = this.orthoLeft, wD.orthoRight = this.orthoRight, wD.orthoTop = this.orthoTop, wD.orthoBottom = this.orthoBottom, wD
            }
            return null
          }
          _updateRigCameras() {
            const DD = this._rigCameras[0],
              zD = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case KD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case KD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case KD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case KD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case KD.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const wD = this.cameraRigMode === KD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  pD = this.cameraRigMode === KD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * wD, DD), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * pD, zD);
                break
              }
              case KD.c.RIG_MODE_VR:
                DD.rotationQuaternion && zD.rotationQuaternion && this.rotationQuaternion ? (DD.rotationQuaternion.pC(this.rotationQuaternion), zD.rotationQuaternion.pC(this.rotationQuaternion)) : (DD.rotation.pC(this.rotation), zD.rotation.pC(this.rotation)), DD.position.pC(this.position), zD.position.pC(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(zD, wD) {
            this.getTarget().subtractToRef(this.position, DD._TargetFocalPoint), DD._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const pD = DD._TargetFocalPoint.addInPlace(this.position);
            rD.e.TranslationToRef(-pD.x, -pD.y, -pD.z, DD._TargetTransformMatrix), DD._TargetTransformMatrix.multiplyToRef(rD.e.RotationAxis(wD.upVector, zD), DD._RigCamTransformMatrix), rD.e.TranslationToRef(pD.x, pD.y, pD.z, DD._TargetTransformMatrix), DD._RigCamTransformMatrix.multiplyToRef(DD._TargetTransformMatrix, DD._RigCamTransformMatrix), rD.s.TransformCoordinatesToRef(this.position, DD._RigCamTransformMatrix, wD.position), wD.setTarget(pD)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(AD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.B)()], gD = [(0, sD.C)()], RD = [(0, sD.q)("lockedTargetId")], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: DD => "updateUpVectorFromRotation" in DD,
              get: DD => DD.updateUpVectorFromRotation,
              set: (DD, zD) => {
                DD.updateUpVectorFromRotation = zD
              }
            },
            metadata: KD
          }, BD, GD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: DD => "rotation" in DD,
              get: DD => DD.rotation,
              set: (DD, zD) => {
                DD.rotation = zD
              }
            },
            metadata: KD
          }, hD, nD), (0, pD.i)(null, null, gD, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: DD => "speed" in DD,
              get: DD => DD.speed,
              set: (DD, zD) => {
                DD.speed = zD
              }
            },
            metadata: KD
          }, MD, OD), (0, pD.i)(null, null, RD, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: DD => "lockedTarget" in DD,
              get: DD => DD.lockedTarget,
              set: (DD, zD) => {
                DD.lockedTarget = zD
              }
            },
            metadata: KD
          }, JD, ED), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD._RigCamTransformMatrix = new rD.e, DD._TargetTransformMatrix = new rD.e, DD._TargetFocalPoint = new rD.s, DD
      })(),
      GD = !1;

    function hD() {
      GD || (GD = !0, gD.b.AddNodeConstructor("TargetCamera", ((DD, zD) => () => new BD(DD, rD.s.Zero(), zD))))
    }
  },
  39878: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(39826);
    let sD = !1;

    function KD() {
      sD || (sD = !0, pD.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, pD.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, pD.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, pD.c.prototype.getAspectRatio = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = DD.viewport;
        return this.getRenderWidth(zD) * wD.width / (this.getRenderHeight(zD) * wD.height)
      }, pD.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, pD.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39958: (DD, zD, wD) => {
    var pD = wD(39826),
      sD = wD(39960);
    let KD = !1;
    KD || (KD = !0, (0, sD.y)(), pD.c.prototype._loadFileAsync = async function(DD, zD, wD) {
      return await new Promise(((pD, sD) => {
        this._loadFile(DD, (DD => {
          pD(DD)
        }), void 0, zD, wD, ((DD, zD) => {
          sD(zD)
        }))
      }))
    })
  },
  39951: (DD, zD, wD) => {
    (0, wD(39886).b)()
  },
  39886: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(39826);
    let sD = !1;

    function KD() {
      sD || (sD = !0, pD.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, pD.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, pD.c.prototype.createRenderPassId = function(DD) {
        const zD = ++pD.c._RenderPassIdCounter;
        return this._renderPassNames[zD] = DD ?? "NONAME", zD
      }, pD.c.prototype.releaseRenderPassId = function(DD) {
        this._renderPassNames[DD] = void 0;
        for (let zD = 0; zD < this.scenes.length; ++zD) {
          const wD = this.scenes[zD];
          for (let zD = 0; zD < wD.meshes.length; ++zD) {
            const pD = wD.meshes[zD];
            if (pD._releaseRenderPassId(DD), pD.QE)
              for (let zD = 0; zD < pD.QE.length; ++zD) {
                pD.QE[zD]._removeDrawWrapper(DD)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(DD)
      })
    }
  },
  39998: (DD, zD, wD) => {
    var pD = wD(40006),
      sD = wD(39826);
    let KD = !1;
    KD || (KD = !0, sD.c.GetCompatibleTextureLoader = pD.b)
  },
  39889: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(39766);
    let sD = !1;

    function KD() {
      sD || (sD = !0, pD.ThinEngine.prototype.setAlphaMode = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[wD] === DD) {
          if (!zD) {
            const zD = 0 === DD;
            this.depthCullingState.depthMask !== zD && (this.depthCullingState.depthMask = zD)
          }
          return
        }
        const pD = 0 === DD;
        this._alphaState.setAlphaBlend(!pD, wD), this._alphaState.setAlphaMode(DD, wD), zD || (this.depthCullingState.depthMask = pD), this._alphaMode[wD] = DD
      })
    }
  },
  39905: (DD, zD, wD) => {
    var pD = wD(39761),
      sD = wD(38662),
      KD = wD(39766),
      rD = wD(39914),
      LD = wD(39867);
    class cD extends rD.b {
      setDepthStencilTexture(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(DD, zD), !DD) return;
        const wD = this._engine,
          pD = this._context,
          sD = DD._hardwareTexture;
        if (sD && DD._autoMSAAManagement && this._MSAAFramebuffer) {
          const zD = wD._currentFramebuffer;
          wD._bindUnboundFramebuffer(this._MSAAFramebuffer), pD.framebufferRenderbuffer(pD.FRAMEBUFFER, (0, LD.c)(DD.format) ? pD.DEPTH_STENCIL_ATTACHMENT : pD.DEPTH_ATTACHMENT, pD.RENDERBUFFER, sD.getMSAARenderBuffer()), wD._bindUnboundFramebuffer(zD)
        }
      }
      constructor(DD, zD, wD, pD, sD) {
        super(DD, zD, wD, pD), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = sD
      }
      _cloneRenderTargetWrapper() {
        let DD;
        return this._colorTextureArray && this._depthStencilTextureArray ? (DD = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), DD.texture.isReady = !0) : DD = super._cloneRenderTargetWrapper(), DD
      }
      _swapRenderTargetWrapper(DD) {
        super._swapRenderTargetWrapper(DD), DD._framebuffer = this._framebuffer, DD._depthStencilBuffer = this._depthStencilBuffer, DD._MSAAFramebuffer = this._MSAAFramebuffer, DD._colorTextureArray = this._colorTextureArray, DD._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const DD = this._engine,
            zD = DD._currentFramebuffer,
            wD = this._context;
          DD._bindUnboundFramebuffer(this._framebuffer), wD.framebufferRenderbuffer(wD.FRAMEBUFFER, wD.DEPTH_STENCIL_ATTACHMENT, wD.RENDERBUFFER, null), wD.framebufferRenderbuffer(wD.FRAMEBUFFER, wD.DEPTH_ATTACHMENT, wD.RENDERBUFFER, null), wD.framebufferRenderbuffer(wD.FRAMEBUFFER, wD.STENCIL_ATTACHMENT, wD.RENDERBUFFER, null), DD._bindUnboundFramebuffer(zD), wD.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(DD, zD, wD, pD, sD, KD)
      }
      shareDepth(DD) {
        super.shareDepth(DD);
        const zD = this._context,
          wD = this._depthStencilBuffer,
          pD = DD._MSAAFramebuffer || DD._framebuffer,
          sD = this._engine;
        DD._depthStencilBuffer && DD._depthStencilBuffer !== wD && zD.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = wD;
        const KD = DD._generateStencilBuffer ? zD.DEPTH_STENCIL_ATTACHMENT : zD.DEPTH_ATTACHMENT;
        sD._bindUnboundFramebuffer(pD), zD.framebufferRenderbuffer(zD.FRAMEBUFFER, KD, zD.RENDERBUFFER, wD), sD._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const sD = DD._hardwareTexture;
        if (!sD) return;
        const KD = this._framebuffer,
          rD = this._engine,
          LD = rD._currentFramebuffer;
        let cD;
        if (rD._bindUnboundFramebuffer(KD), rD.AB > 1) {
          const KD = this._context;
          cD = KD["COLOR_ATTACHMENT" + zD], DD.is2DArray || DD.is3D ? (wD = wD ?? this.layerIndices?.[zD] ?? 0, KD.framebufferTextureLayer(KD.FRAMEBUFFER, cD, sD.underlyingResource, pD, wD)) : DD.isCube ? (wD = wD ?? this.faceIndices?.[zD] ?? 0, KD.framebufferTexture2D(KD.FRAMEBUFFER, cD, KD.TEXTURE_CUBE_MAP_POSITIVE_X + wD, sD.underlyingResource, pD)) : KD.framebufferTexture2D(KD.FRAMEBUFFER, cD, KD.TEXTURE_2D, sD.underlyingResource, pD)
        } else {
          const DD = this._context;
          cD = DD["COLOR_ATTACHMENT" + zD + "_WEBGL"];
          const KD = void 0 !== wD ? DD.TEXTURE_CUBE_MAP_POSITIVE_X + wD : DD.TEXTURE_2D;
          DD.framebufferTexture2D(DD.FRAMEBUFFER, cD, KD, sD.underlyingResource, pD)
        }
        if (DD._autoMSAAManagement && this._MSAAFramebuffer) {
          const DD = this._context;
          rD._bindUnboundFramebuffer(this._MSAAFramebuffer), DD.framebufferRenderbuffer(DD.FRAMEBUFFER, cD, DD.RENDERBUFFER, sD.getMSAARenderBuffer())
        }
        rD._bindUnboundFramebuffer(LD)
      }
      setTexture(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(DD, zD, wD), this._bindTextureRenderTarget(DD, zD)
      }
      setLayerAndFaceIndices(DD, zD) {
        if (super.setLayerAndFaceIndices(DD, zD), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const wD = this._attachments?.length ?? this.textures.length;
        for (let pD = 0; pD < wD; pD++) {
          const DD = this.textures[pD];
          DD && (DD.is2DArray || DD.is3D ? this._bindTextureRenderTarget(DD, pD, this.layerIndices[pD]) : DD.isCube ? this._bindTextureRenderTarget(DD, pD, this.faceIndices[pD]) : this._bindTextureRenderTarget(DD, pD))
        }
      }
      setLayerAndFaceIndex() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(DD, zD, wD), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const pD = this.textures[DD];
        pD.is2DArray || pD.is3D ? this._bindTextureRenderTarget(this.textures[DD], DD, this.layerIndices[DD]) : pD.isCube && this._bindTextureRenderTarget(this.textures[DD], DD, this.faceIndices[DD])
      }
      resolveMSAATextures() {
        const DD = this._engine,
          zD = DD._currentFramebuffer;
        DD._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), DD._bindUnboundFramebuffer(zD)
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const zD = this._context;
        DD || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (zD.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (zD.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (zD.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(DD)
      }
    }
    let gD = !1;
    gD || (gD = !0, KD.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(DD, zD, wD) {
      const pD = new cD(DD, zD, wD, this, this._gl);
      return this._renderTargetWrapperCache.push(pD), pD
    }, KD.ThinEngine.prototype.createRenderTargetTexture = function(DD, zD) {
      const wD = this._createHardwareRenderTargetWrapper(!1, !1, DD);
      let pD, sD, KD = !0,
        rD = !1,
        LD = !1,
        cD = 1;
      void 0 !== zD && "object" === typeof zD && (KD = zD.generateDepthBuffer ?? !0, rD = !!zD.generateStencilBuffer, LD = !!zD.noColorAttachment, pD = zD.colorAttachment, cD = zD.samples ?? 1, sD = zD.label);
      const gD = pD || (LD ? null : this._createInternalTexture(DD, zD, !0, 5)),
        RD = DD.width || DD,
        AD = DD.height || DD,
        UD = this._currentFramebuffer,
        fD = this._gl,
        ID = fD.createFramebuffer();
      if (this._bindUnboundFramebuffer(ID), wD._depthStencilBuffer = this._setupFramebufferDepthAttachments(rD, KD, RD, AD), !gD || gD.is2DArray || gD.is3D || fD.framebufferTexture2D(fD.FRAMEBUFFER, fD.COLOR_ATTACHMENT0, fD.TEXTURE_2D, gD._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(UD), wD.label = sD ?? "RenderTargetWrapper", wD._framebuffer = ID, wD._generateDepthBuffer = KD, wD._generateStencilBuffer = rD, wD.setTextures(gD), pD) {
        if (wD._samples = pD.samples, pD.samples > 1) {
          const DD = pD._hardwareTexture.getMSAARenderBuffer(0);
          wD._MSAAFramebuffer = fD.createFramebuffer(), this._bindUnboundFramebuffer(wD._MSAAFramebuffer), fD.framebufferRenderbuffer(fD.FRAMEBUFFER, fD.COLOR_ATTACHMENT0, fD.RENDERBUFFER, DD), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(wD, cD);
      return wD
    }, KD.ThinEngine.prototype._createDepthStencilTexture = function(DD, zD, wD) {
      const KD = this._gl,
        rD = DD.layers || 0,
        cD = DD.depth || 0;
      let gD = KD.TEXTURE_2D;
      0 !== rD ? gD = KD.TEXTURE_2D_ARRAY : 0 !== cD && (gD = KD.TEXTURE_3D);
      const RD = new pD.e(this, 12);
      if (RD.label = zD.label, !this._caps.depthTextureExtension) return sD.d.Error("Depth texture is not supported by your browser or hardware."), RD;
      const AD = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...zD
      };
      if (this._bindTextureDirectly(gD, RD, !0), this._setupDepthStencilTexture(RD, DD, 0 !== AD.comparisonFunction && AD.bilinearFiltering, AD.comparisonFunction, AD.samples), void 0 !== AD.depthTextureFormat) {
        if (15 !== AD.depthTextureFormat && 16 !== AD.depthTextureFormat && 17 !== AD.depthTextureFormat && 13 !== AD.depthTextureFormat && 14 !== AD.depthTextureFormat && 18 !== AD.depthTextureFormat) return sD.d.Error(`Depth texture ${AD.depthTextureFormat} format is not supported.`), RD;
        RD.format = AD.depthTextureFormat
      } else RD.format = AD.generateStencil ? 13 : 16;
      const UD = (0, LD.c)(RD.format),
        fD = this._getWebGLTextureTypeFromDepthTextureFormat(RD.format),
        ID = UD ? KD.DEPTH_STENCIL : KD.DEPTH_COMPONENT,
        BD = this._getInternalFormatFromDepthTextureFormat(RD.format, !0, UD);
      return RD.is2DArray ? KD.texImage3D(gD, 0, BD, RD.width, RD.height, rD, 0, ID, fD, null) : RD.is3D ? KD.texImage3D(gD, 0, BD, RD.width, RD.height, cD, 0, ID, fD, null) : KD.texImage2D(gD, 0, BD, RD.width, RD.height, 0, ID, fD, null), this._bindTextureDirectly(gD, null), this._internalTexturesCache.push(RD), wD._depthStencilBuffer && (KD.deleteRenderbuffer(wD._depthStencilBuffer), wD._depthStencilBuffer = null), this._bindUnboundFramebuffer(wD._MSAAFramebuffer ?? wD._framebuffer), wD._generateStencilBuffer = UD, wD._depthStencilTextureWithStencil = UD, wD._depthStencilBuffer = this._setupFramebufferDepthAttachments(wD._generateStencilBuffer, wD._generateDepthBuffer, wD.width, wD.height, wD.samples, RD.format), this._bindUnboundFramebuffer(null), RD
    }, KD.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(DD, zD) {
      if (this.AB < 2 || !DD) return 1;
      if (DD.samples === zD) return zD;
      const wD = this._gl;
      zD = Math.min(zD, this.getCaps().maxMSAASamples), DD._depthStencilBuffer && (wD.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = null), DD._MSAAFramebuffer && (wD.deleteFramebuffer(DD._MSAAFramebuffer), DD._MSAAFramebuffer = null);
      const pD = DD.texture?._hardwareTexture;
      if (pD?.releaseMSAARenderBuffers(), DD.texture && zD > 1 && "function" === typeof wD.renderbufferStorageMultisample) {
        const sD = wD.createFramebuffer();
        if (!sD) throw new Error("Unable to create multi sampled framebuffer");
        DD._MSAAFramebuffer = sD, this._bindUnboundFramebuffer(DD._MSAAFramebuffer);
        const KD = this._createRenderBuffer(DD.texture.width, DD.texture.height, zD, -1, this._getRGBABufferInternalSizedFormat(DD.texture.type, DD.texture.format, DD.texture._useSRGBBuffer), wD.COLOR_ATTACHMENT0, !1);
        if (!KD) throw new Error("Unable to create multi sampled framebuffer");
        pD?.addMSAARenderBuffer(KD)
      }
      this._bindUnboundFramebuffer(DD._MSAAFramebuffer ?? DD._framebuffer), DD.texture && (DD.texture.samples = zD), DD._samples = zD;
      const sD = DD._depthStencilTexture ? DD._depthStencilTexture.format : void 0;
      return DD._depthStencilBuffer = this._setupFramebufferDepthAttachments(DD._generateStencilBuffer, DD._generateDepthBuffer, DD.width, DD.height, zD, sD), this._bindUnboundFramebuffer(null), zD
    }, KD.ThinEngine.prototype._setupDepthStencilTexture = function(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const KD = zD.width ?? zD,
        rD = zD.height ?? zD,
        LD = zD.layers || 0,
        cD = zD.depth || 0;
      DD.baseWidth = KD, DD.baseHeight = rD, DD.width = KD, DD.height = rD, DD.is2DArray = LD > 0, DD.depth = LD || cD, DD.isReady = !0, DD.samples = sD, DD.generateMipMaps = !1, DD.samplingMode = wD ? 2 : 1, DD.type = 0, DD._comparisonFunction = pD;
      const gD = this._gl,
        RD = this._getTextureTarget(DD),
        AD = this._getSamplingParameters(DD.samplingMode, !1);
      gD.texParameteri(RD, gD.TEXTURE_MAG_FILTER, AD.mag), gD.texParameteri(RD, gD.TEXTURE_MIN_FILTER, AD.min), gD.texParameteri(RD, gD.TEXTURE_WRAP_S, gD.CLAMP_TO_EDGE), gD.texParameteri(RD, gD.TEXTURE_WRAP_T, gD.CLAMP_TO_EDGE), this.AB > 1 && (0 === pD ? (gD.texParameteri(RD, gD.TEXTURE_COMPARE_FUNC, 515), gD.texParameteri(RD, gD.TEXTURE_COMPARE_MODE, gD.NONE)) : (gD.texParameteri(RD, gD.TEXTURE_COMPARE_FUNC, pD), gD.texParameteri(RD, gD.TEXTURE_COMPARE_MODE, gD.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39744: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.e
    });
    var pD = wD(39753);
    (0, wD(39889).d)();
    var sD = wD(39766);
    let KD = !1;
    ! function() {
      if (KD) return;
      KD = !0;
      const DD = new WeakMap,
        zD = new WeakMap,
        wD = new WeakMap,
        pD = new WeakMap;
      sD.ThinEngine.prototype.getAlphaToCoverage = function() {
        return DD.get(this) ?? !1
      }, sD.ThinEngine.prototype.setAlphaToCoverage = function(wD) {
        (DD.get(this) !== wD || this._gl && zD.get(this) !== this._gl) && (DD.set(this, wD), this._gl && (wD ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), zD.set(this, this._gl)))
      }, Object.defineProperty(sD.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (pD.get(this) !== this._gl && (wD.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), pD.set(this, this._gl)), wD.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var rD = wD(39761),
      LD = wD(38662),
      cD = wD(39852);
    let gD = !1;
    ! function() {
      function DD(DD, zD, wD, pD) {
        let sD, KD = 1;
        1 === pD ? sD = new Float32Array(zD * wD * 4) : 2 === pD ? (sD = new Uint16Array(zD * wD * 4), KD = 15360) : sD = 7 === pD ? new Uint32Array(zD * wD * 4) : new Uint8Array(zD * wD * 4);
        for (let rD = 0; rD < zD; rD++)
          for (let pD = 0; pD < wD; pD++) {
            const wD = 3 * (pD * zD + rD),
              LD = 4 * (pD * zD + rD);
            sD[LD + 0] = DD[wD + 0], sD[LD + 1] = DD[wD + 1], sD[LD + 2] = DD[wD + 2], sD[LD + 3] = KD
          }
        return sD
      }

      function zD(DD) {
        return function(zD, wD, pD, sD, KD, LD, cD, gD) {
          let RD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            AD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const UD = DD ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            fD = DD ? 10 : 11,
            ID = new rD.e(this, fD);
          ID.baseWidth = wD, ID.baseHeight = pD, ID.baseDepth = sD, ID.width = wD, ID.height = pD, ID.depth = sD, ID.format = KD, ID.type = AD, ID.generateMipMaps = LD, ID.samplingMode = gD, DD ? ID.is3D = !0 : ID.is2DArray = !0, this._doNotHandleContextLost || (ID._bufferView = zD), DD ? this.updateRawTexture3D(ID, zD, KD, cD, RD, AD) : this.updateRawTexture2DArray(ID, zD, KD, cD, RD, AD), this._bindTextureDirectly(UD, ID, !0);
          const BD = this._getSamplingParameters(gD, LD);
          return this._gl.texParameteri(UD, this._gl.TEXTURE_MAG_FILTER, BD.mag), this._gl.texParameteri(UD, this._gl.TEXTURE_MIN_FILTER, BD.min), LD && this._gl.generateMipmap(UD), this._bindTextureDirectly(UD, null), this._internalTexturesCache.push(ID), ID
        }
      }

      function wD(DD) {
        return function(zD, wD, pD, sD) {
          let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const LD = DD ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            cD = this._getWebGLTextureType(rD),
            gD = this._getInternalFormat(pD),
            RD = this._getRGBABufferInternalSizedFormat(rD, pD);
          this._bindTextureDirectly(LD, zD, !0), this._unpackFlipY(void 0 === sD || !!sD), this._doNotHandleContextLost || (zD._bufferView = wD, zD.format = pD, zD.invertY = sD, zD._compression = KD), zD.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), KD && wD ? this._gl.compressedTexImage3D(LD, 0, this.getCaps().s3tc[KD], zD.width, zD.height, zD.depth, 0, wD) : this._gl.texImage3D(LD, 0, RD, zD.width, zD.height, zD.depth, 0, gD, cD, wD), zD.generateMipMaps && this._gl.generateMipmap(LD), this._bindTextureDirectly(LD, null), zD.isReady = !0
        }
      }
      gD || (gD = !0, sD.ThinEngine.prototype.updateRawTexture = function(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!DD) return;
        const LD = this._getRGBABufferInternalSizedFormat(KD, wD, rD),
          cD = this._getInternalFormat(wD),
          gD = this._getWebGLTextureType(KD);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, DD, !0), this._unpackFlipY(void 0 === pD || !!pD), this._doNotHandleContextLost || (DD._bufferView = zD, DD.format = wD, DD.type = KD, DD.invertY = pD, DD._compression = sD), DD.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), sD && zD ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[sD], DD.width, DD.height, 0, zD) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, LD, DD.width, DD.height, 0, cD, gD, zD), DD.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), DD.isReady = !0
      }, sD.ThinEngine.prototype.createRawTexture = function(DD, zD, wD, pD, sD, KD, LD) {
        let cD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          RD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const AD = new rD.e(this, 3);
        AD.baseWidth = zD, AD.baseHeight = wD, AD.width = zD, AD.height = wD, AD.format = pD, AD.generateMipMaps = sD, AD.samplingMode = LD, AD.invertY = KD, AD._compression = cD, AD.type = gD, AD._useSRGBBuffer = this._getUseSRGBBuffer(RD, !sD), this._doNotHandleContextLost || (AD._bufferView = DD), this.updateRawTexture(AD, DD, pD, KD, cD, gD, AD._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, AD, !0);
        const UD = this._getSamplingParameters(LD, sD);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, UD.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, UD.min), sD && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(AD), AD
      }, sD.ThinEngine.prototype.createRawCubeTexture = function(DD, zD, wD, pD, sD, KD, gD) {
        let RD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const AD = this._gl,
          UD = new rD.e(this, 8);
        UD.isCube = !0, UD.format = wD, UD.type = pD, this._doNotHandleContextLost || (UD._bufferViewArray = DD);
        const fD = this._getWebGLTextureType(pD);
        let ID = this._getInternalFormat(wD);
        ID === AD.RGB && (ID = AD.RGBA), fD !== AD.FLOAT || this._caps.textureFloatLinearFiltering ? fD !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? fD !== AD.FLOAT || this._caps.textureFloatRender ? fD !== AD.HALF_FLOAT || this._caps.colorBufferFloat || (sD = !1, LD.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (sD = !1, LD.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (sD = !1, gD = 1, LD.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (sD = !1, gD = 1, LD.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const BD = zD,
          GD = BD;
        UD.width = BD, UD.height = GD, UD.invertY = KD, UD._compression = RD;
        if (!this.needPOTTextures || (0, cD.g)(UD.width) && (0, cD.g)(UD.height) || (sD = !1), DD) this.updateRawCubeTexture(UD, DD, wD, pD, KD, RD);
        else {
          const DD = this._getRGBABufferInternalSizedFormat(pD),
            zD = 0;
          this._bindTextureDirectly(AD.TEXTURE_CUBE_MAP, UD, !0);
          for (let wD = 0; wD < 6; wD++) RD ? AD.compressedTexImage2D(AD.TEXTURE_CUBE_MAP_POSITIVE_X + wD, zD, this.getCaps().s3tc[RD], UD.width, UD.height, 0, void 0) : AD.texImage2D(AD.TEXTURE_CUBE_MAP_POSITIVE_X + wD, zD, DD, UD.width, UD.height, 0, ID, fD, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, UD, !0), DD && sD && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const hD = this._getSamplingParameters(gD, sD);
        return AD.texParameteri(AD.TEXTURE_CUBE_MAP, AD.TEXTURE_MAG_FILTER, hD.mag), AD.texParameteri(AD.TEXTURE_CUBE_MAP, AD.TEXTURE_MIN_FILTER, hD.min), AD.texParameteri(AD.TEXTURE_CUBE_MAP, AD.TEXTURE_WRAP_S, AD.CLAMP_TO_EDGE), AD.texParameteri(AD.TEXTURE_CUBE_MAP, AD.TEXTURE_WRAP_T, AD.CLAMP_TO_EDGE), this._bindTextureDirectly(AD.TEXTURE_CUBE_MAP, null), UD.generateMipMaps = sD, UD.samplingMode = gD, UD.isReady = !0, UD
      }, sD.ThinEngine.prototype.updateRawCubeTexture = function(zD, wD, pD, sD, KD) {
        let rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        zD._bufferViewArray = wD, zD.format = pD, zD.type = sD, zD.invertY = KD, zD._compression = rD;
        const gD = this._gl,
          RD = this._getWebGLTextureType(sD);
        let AD = this._getInternalFormat(pD);
        const UD = this._getRGBABufferInternalSizedFormat(sD);
        let fD = !1;
        AD === gD.RGB && (AD = gD.RGBA, fD = !0), this._bindTextureDirectly(gD.TEXTURE_CUBE_MAP, zD, !0), this._unpackFlipY(void 0 === KD || !!KD), zD.width % 4 !== 0 && gD.pixelStorei(gD.UNPACK_ALIGNMENT, 1);
        for (let cD = 0; cD < 6; cD++) {
          let pD = wD[cD];
          rD ? gD.compressedTexImage2D(gD.TEXTURE_CUBE_MAP_POSITIVE_X + cD, LD, this.getCaps().s3tc[rD], zD.width, zD.height, 0, pD) : (fD && (pD = DD(pD, zD.width, zD.height, sD)), gD.texImage2D(gD.TEXTURE_CUBE_MAP_POSITIVE_X + cD, LD, UD, zD.width, zD.height, 0, AD, RD, pD))
        }(!this.needPOTTextures || (0, cD.g)(zD.width) && (0, cD.g)(zD.height)) && zD.generateMipMaps && 0 === LD && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), zD.isReady = !0
      }, sD.ThinEngine.prototype.createRawCubeTextureFromUrl = function(zD, wD, pD, sD, KD, rD, LD, cD) {
        let gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          RD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          AD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          UD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const fD = this._gl,
          ID = this.createRawCubeTexture(null, pD, sD, KD, !rD, UD, AD, null);
        wD?.addPendingData(ID), ID.url = zD, ID.isReady = !1, this._internalTexturesCache.push(ID);
        const BD = (DD, zD) => {
            wD?.removePendingData(ID), RD && RD(DD ? DD.status + " " + DD.statusText : "Failed to parse texture data", zD)
          },
          GD = async zD => {
            if (!ID._hardwareTexture) return;
            const pD = LD(zD);
            if (!pD) return;
            const rD = pD instanceof Promise ? await pD : pD,
              RD = ID.width;
            if (cD) {
              const zD = this._getWebGLTextureType(KD);
              let wD = this._getInternalFormat(sD);
              const pD = this._getRGBABufferInternalSizedFormat(KD);
              let LD = !1;
              wD === fD.RGB && (wD = fD.RGBA, LD = !0), this._bindTextureDirectly(fD.TEXTURE_CUBE_MAP, ID, !0), this._unpackFlipY(!1);
              const gD = cD(rD);
              for (let sD = 0; sD < gD.length; sD++) {
                const rD = RD >> sD;
                for (let cD = 0; cD < 6; cD++) {
                  let RD = gD[sD][cD];
                  LD && (RD = DD(RD, rD, rD, KD)), fD.texImage2D(cD, sD, pD, rD, rD, 0, wD, zD, RD)
                }
              }
              this._bindTextureDirectly(fD.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(ID, rD, sD, KD, UD);
            ID.isReady = !0, wD?.removePendingData(ID), ID.onLoadedObservable.notifyObservers(ID), ID.onLoadedObservable.clear(), gD && gD()
          };
        return this._loadFile(zD, (DD => {
          GD(DD).catch((DD => {
            BD(void 0, DD)
          }))
        }), void 0, wD?.offlineProvider, !0, BD), ID
      }, sD.ThinEngine.prototype.createRawTexture2DArray = zD(!1), sD.ThinEngine.prototype.createRawTexture3D = zD(!0), sD.ThinEngine.prototype.updateRawTexture2DArray = wD(!1), sD.ThinEngine.prototype.updateRawTexture3D = wD(!0))
    }();
    var RD = wD(39800);
    let AD = !1;
    AD || (AD = !0, sD.ThinEngine.prototype._readTexturePixelsSync = function(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        gD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const AD = this._gl;
      if (!AD) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const DD = AD.createFramebuffer();
        if (!DD) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = DD
      }
      AD.bindFramebuffer(AD.FRAMEBUFFER, this._dummyFramebuffer), pD > -1 && (DD.is2DArray || DD.is3D) ? AD.framebufferTextureLayer(AD.FRAMEBUFFER, AD.COLOR_ATTACHMENT0, DD._hardwareTexture?.underlyingResource, sD, pD) : pD > -1 ? AD.framebufferTexture2D(AD.FRAMEBUFFER, AD.COLOR_ATTACHMENT0, AD.TEXTURE_CUBE_MAP_POSITIVE_X + pD, DD._hardwareTexture?.underlyingResource, sD) : AD.framebufferTexture2D(AD.FRAMEBUFFER, AD.COLOR_ATTACHMENT0, AD.TEXTURE_2D, DD._hardwareTexture?.underlyingResource, sD);
      let UD = void 0 !== DD.type ? this._getWebGLTextureType(DD.type) : AD.UNSIGNED_BYTE;
      return LD ? KD || (KD = (0, RD.l)(DD.type, 4 * zD * wD)) : UD === AD.UNSIGNED_BYTE ? (KD || (KD = new Uint8Array(4 * zD * wD)), UD = AD.UNSIGNED_BYTE) : (KD || (KD = new Float32Array(4 * zD * wD)), UD = AD.FLOAT), rD && this.flushFramebuffer(), AD.readPixels(cD, gD, zD, wD, AD.RGBA, UD, KD), AD.bindFramebuffer(AD.FRAMEBUFFER, this._currentFramebuffer), KD
    }, sD.ThinEngine.prototype._readTexturePixels = function(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        rD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        gD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD))
    }), (0, wD(39898).b)();
    let UD = !1;
    UD || (UD = !0, sD.ThinEngine.prototype._createDepthStencilCubeTexture = function(DD, zD) {
      const wD = new rD.e(this, 12);
      if (wD.isCube = !0, 1 === this.AB) return LD.d.Error("Depth cube texture is not supported by WebGL 1."), wD;
      const pD = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...zD
        },
        sD = this._gl;
      this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, wD, !0), this._setupDepthStencilTexture(wD, DD, pD.bilinearFiltering, pD.comparisonFunction);
      for (let KD = 0; KD < 6; KD++) pD.generateStencil ? sD.texImage2D(sD.TEXTURE_CUBE_MAP_POSITIVE_X + KD, 0, sD.DEPTH24_STENCIL8, DD, DD, 0, sD.DEPTH_STENCIL, sD.UNSIGNED_INT_24_8, null) : sD.texImage2D(sD.TEXTURE_CUBE_MAP_POSITIVE_X + KD, 0, sD.DEPTH_COMPONENT24, DD, DD, 0, sD.DEPTH_COMPONENT, sD.UNSIGNED_INT, null);
      return this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(wD), wD
    }, sD.ThinEngine.prototype._setCubeMapTextureParams = function(DD, zD, wD) {
      const pD = this._gl;
      pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MAG_FILTER, pD.LINEAR), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MIN_FILTER, zD ? pD.LINEAR_MIPMAP_LINEAR : pD.LINEAR), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_WRAP_S, pD.CLAMP_TO_EDGE), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_WRAP_T, pD.CLAMP_TO_EDGE), DD.samplingMode = zD ? 3 : 2, zD && this.getCaps().textureMaxLevel && void 0 !== wD && wD > 0 && (pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MAX_LEVEL, wD), DD._maxLodLevel = wD), this._bindTextureDirectly(pD.TEXTURE_CUBE_MAP, null)
    }, sD.ThinEngine.prototype.createCubeTexture = function(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        rD = arguments.length > 6 ? arguments[6] : void 0,
        gD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        RD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        AD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        UD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        fD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        ID = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        BD = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const GD = this._gl;
      return this.createCubeTextureBase(DD, zD, wD, !!pD, sD, KD, rD, gD, RD, AD, UD, fD, (DD => this._bindTextureDirectly(GD.TEXTURE_CUBE_MAP, DD, !0)), ((DD, zD) => {
        const wD = this.needPOTTextures ? (0, cD.f)(zD[0].width, this._caps.maxCubemapTextureSize) : zD[0].width,
          KD = wD,
          gD = [GD.TEXTURE_CUBE_MAP_POSITIVE_X, GD.TEXTURE_CUBE_MAP_POSITIVE_Y, GD.TEXTURE_CUBE_MAP_POSITIVE_Z, GD.TEXTURE_CUBE_MAP_NEGATIVE_X, GD.TEXTURE_CUBE_MAP_NEGATIVE_Y, GD.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(GD.TEXTURE_CUBE_MAP, DD, !0), this._unpackFlipY(!1);
        const RD = rD ? this._getInternalFormat(rD, DD._useSRGBBuffer) : DD._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : GD.RGBA;
        let AD = rD ? this._getInternalFormat(rD) : GD.RGBA;
        DD._useSRGBBuffer && 1 === this.AB && (AD = RD);
        for (let pD = 0; pD < gD.length; pD++)
          if (zD[pD].width !== wD || zD[pD].height !== KD) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void LD.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = wD, this._workingCanvas.height = KD, this._workingContext.drawImage(zD[pD], 0, 0, zD[pD].width, zD[pD].height, 0, 0, wD, KD), GD.texImage2D(gD[pD], 0, RD, AD, GD.UNSIGNED_BYTE, this._workingCanvas)
          } else GD.texImage2D(gD[pD], 0, RD, AD, GD.UNSIGNED_BYTE, zD[pD]);
        pD || GD.generateMipmap(GD.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(DD, !pD), DD.width = wD, DD.height = KD, DD.isReady = !0, rD && (DD.format = rD), DD.onLoadedObservable.notifyObservers(DD), DD.onLoadedObservable.clear(), sD && sD()
      }), !!ID, BD)
    }, sD.ThinEngine.prototype.generateMipMapsForCubemap = function(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD.generateMipMaps) {
        const wD = this._gl;
        this._bindTextureDirectly(wD.TEXTURE_CUBE_MAP, DD, !0), wD.generateMipmap(wD.TEXTURE_CUBE_MAP), zD && this._bindTextureDirectly(wD.TEXTURE_CUBE_MAP, null)
      }
    });
    wD(39905);
    let fD = !1;
    fD || (fD = !0, sD.ThinEngine.prototype.setDepthStencilTexture = function(DD, zD, wD, pD) {
      void 0 !== DD && (zD && (this._boundUniforms[DD] = zD), wD && wD.depthStencilTexture ? this._setTexture(DD, wD, !1, !0, pD) : this._setTexture(DD, null, void 0, void 0, pD))
    });
    let ID = !1;
    ID || (ID = !0, sD.ThinEngine.prototype.createRenderTargetCubeTexture = function(DD, zD) {
      const wD = this._createHardwareRenderTargetWrapper(!1, !0, DD),
        pD = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...zD
        };
      pD.generateStencilBuffer = pD.generateDepthBuffer && pD.generateStencilBuffer, (1 !== pD.type || this._caps.textureFloatLinearFiltering) && (2 !== pD.type || this._caps.textureHalfFloatLinearFiltering) || (pD.samplingMode = 1);
      const sD = this._gl,
        KD = new rD.e(this, 5);
      this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, KD, !0);
      const cD = this._getSamplingParameters(pD.samplingMode, pD.generateMipMaps);
      1 !== pD.type || this._caps.textureFloat || (pD.type = 0, LD.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), sD.texParameteri(sD.TEXTURE_CUBE_MAP, sD.TEXTURE_MAG_FILTER, cD.mag), sD.texParameteri(sD.TEXTURE_CUBE_MAP, sD.TEXTURE_MIN_FILTER, cD.min), sD.texParameteri(sD.TEXTURE_CUBE_MAP, sD.TEXTURE_WRAP_S, sD.CLAMP_TO_EDGE), sD.texParameteri(sD.TEXTURE_CUBE_MAP, sD.TEXTURE_WRAP_T, sD.CLAMP_TO_EDGE);
      for (let rD = 0; rD < 6; rD++) sD.texImage2D(sD.TEXTURE_CUBE_MAP_POSITIVE_X + rD, 0, this._getRGBABufferInternalSizedFormat(pD.type, pD.format), DD, DD, 0, this._getInternalFormat(pD.format), this._getWebGLTextureType(pD.type), null);
      const gD = sD.createFramebuffer();
      return this._bindUnboundFramebuffer(gD), wD._depthStencilBuffer = this._setupFramebufferDepthAttachments(pD.generateStencilBuffer, pD.generateDepthBuffer, DD, DD), pD.generateMipMaps && sD.generateMipmap(sD.TEXTURE_CUBE_MAP), this._bindTextureDirectly(sD.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), wD._framebuffer = gD, wD._generateDepthBuffer = pD.generateDepthBuffer, wD._generateStencilBuffer = pD.generateStencilBuffer, KD.width = DD, KD.height = DD, KD.isReady = !0, KD.isCube = !0, KD.samples = 1, KD.generateMipMaps = pD.generateMipMaps, KD.samplingMode = pD.samplingMode, KD.type = pD.type, KD.format = pD.format, this._internalTexturesCache.push(KD), wD.setTextures(KD), wD
    });
    var BD = wD(39916),
      GD = wD(39918);
    let hD = !1;
    hD || (hD = !0, sD.ThinEngine.prototype.createPrefilteredCubeTexture = function(DD, zD, pD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        cD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gD = arguments.length > 6 ? arguments[6] : void 0,
        RD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        AD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        UD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(DD, zD, null, !1, (async DD => {
        if (!DD) return void(KD && KD(null));
        const cD = DD.texture;
        if (AD ? DD.info.sphericalPolynomial && (cD._sphericalPolynomial = DD.info.sphericalPolynomial) : cD._sphericalPolynomial = cD._sphericalPolynomial ?? new BD.e, cD._source = 9, this.getCaps().textureLOD) return void(KD && KD(cD));
        const gD = this._gl,
          RD = DD.width;
        if (!RD) return;
        const {
          DDSTools: UD
        } = await wD.e(306).then((() => wD(41670))), fD = [];
        for (let wD = 0; wD < 3; wD++) {
          const KD = 1 - wD / 2,
            AD = sD,
            ID = Math.log2(RD) * pD + sD,
            BD = AD + (ID - AD) * KD,
            hD = Math.round(Math.min(Math.max(BD, 0), ID)),
            nD = new rD.e(this, 2);
          if (nD.type = cD.type, nD.format = cD.format, nD.width = Math.pow(2, Math.max(Math.log2(RD) - hD, 0)), nD.height = nD.width, nD.isCube = !0, nD._cachedWrapU = 0, nD._cachedWrapV = 0, this._bindTextureDirectly(gD.TEXTURE_CUBE_MAP, nD, !0), nD.samplingMode = 2, gD.texParameteri(gD.TEXTURE_CUBE_MAP, gD.TEXTURE_MAG_FILTER, gD.LINEAR), gD.texParameteri(gD.TEXTURE_CUBE_MAP, gD.TEXTURE_MIN_FILTER, gD.LINEAR), gD.texParameteri(gD.TEXTURE_CUBE_MAP, gD.TEXTURE_WRAP_S, gD.CLAMP_TO_EDGE), gD.texParameteri(gD.TEXTURE_CUBE_MAP, gD.TEXTURE_WRAP_T, gD.CLAMP_TO_EDGE), DD.isDDS) {
            const zD = DD.info,
              wD = DD.data;
            this._unpackFlipY(zD.isCompressed), UD.UploadDDSLevels(this, nD, wD, zD, !0, 6, hD)
          } else LD.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(gD.TEXTURE_CUBE_MAP, null);
          const MD = new GD.d(zD);
          MD._isCube = !0, MD._texture = nD, nD.isReady = !0, fD.push(MD)
        }
        cD._lodTextureHigh = fD[2], cD._lodTextureMid = fD[1], cD._lodTextureLow = fD[0], KD && KD(cD)
      }), cD, gD, RD, AD, pD, sD, null, void 0, !1, UD)
    });
    var nD = wD(39847);
    let MD = !1;
    MD || (MD = !0, sD.ThinEngine.prototype.createUniformBuffer = function(DD, zD) {
      const wD = this._gl.createBuffer();
      if (!wD) throw new Error("Unable to create uniform buffer");
      const pD = new nD.b(wD);
      return this.bindUniformBuffer(pD), DD instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, DD, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(DD), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), pD.references = 1, pD
    }, sD.ThinEngine.prototype.createDynamicUniformBuffer = function(DD, zD) {
      const wD = this._gl.createBuffer();
      if (!wD) throw new Error("Unable to create dynamic uniform buffer");
      const pD = new nD.b(wD);
      return this.bindUniformBuffer(pD), DD instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, DD, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(DD), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), pD.references = 1, pD
    }, sD.ThinEngine.prototype.updateUniformBuffer = function(DD, zD, wD, pD) {
      this.bindUniformBuffer(DD), void 0 === wD && (wD = 0), void 0 === pD ? zD instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, wD, zD) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, wD, new Float32Array(zD)) : zD instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, zD.subarray(wD, wD + pD)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(zD).subarray(wD, wD + pD)), this.bindUniformBuffer(null)
    }, sD.ThinEngine.prototype.bindUniformBuffer = function(DD) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, DD ? DD.underlyingResource : null)
    }, sD.ThinEngine.prototype.bindUniformBufferBase = function(DD, zD, wD) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, zD, DD ? DD.underlyingResource : null)
    }, sD.ThinEngine.prototype.bindUniformBlock = function(DD, zD, wD) {
      const pD = DD.program,
        sD = this._gl.getUniformBlockIndex(pD, zD);
      4294967295 !== sD && this._gl.uniformBlockBinding(pD, sD, wD)
    });
    var OD = wD(39785),
      JD = wD(39826);
    let ED = !1;
    ED || (ED = !0, JD.c.prototype.displayLoadingUI = function() {
      if (!(0, OD.h)()) return;
      const DD = this.loadingScreen;
      DD && DD.displayLoadingUI()
    }, JD.c.prototype.hideLoadingUI = function() {
      if (!(0, OD.h)()) return;
      const DD = this._loadingScreen;
      DD && DD.hideLoadingUI()
    }, Object.defineProperty(JD.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = JD.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(DD) {
        this._loadingScreen = DD
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(JD.c.prototype, "loadingUIText", {
      set: function(DD) {
        this.loadingScreen.loadingUIText = DD
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(JD.c.prototype, "loadingUIBackgroundColor", {
      set: function(DD) {
        this.loadingScreen.loadingUIBackgroundColor = DD
      },
      enumerable: !0,
      configurable: !0
    })), (0, wD(39878).b)();
    let QD = !1;
    QD || (QD = !0, JD.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, JD.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, JD.c.prototype.setDepthFunction = function(DD) {
      this._depthCullingState.depthFunc = DD
    }, JD.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, JD.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, JD.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, JD.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, JD.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, JD.c.prototype.setDepthWrite = function(DD) {
      this._depthCullingState.depthMask = DD
    }, JD.c.prototype.setAlphaConstants = function(DD, zD, wD, pD) {
      this._alphaState.setAlphaBlendConstants(DD, zD, wD, pD)
    }, JD.c.prototype.getAlphaMode = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[DD]
    }, JD.c.prototype.getAlphaEquation = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[DD]
    });
    let XD = !1;
    XD || (XD = !0, JD.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, JD.c.prototype.setStencilBuffer = function(DD) {
      this._stencilState.stencilTest = DD
    }, JD.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, JD.c.prototype.setStencilMask = function(DD) {
      this._stencilState.stencilMask = DD
    }, JD.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, JD.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, JD.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, JD.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, JD.c.prototype.setStencilFunction = function(DD) {
      this._stencilState.stencilFunc = DD
    }, JD.c.prototype.setStencilBackFunction = function(DD) {
      this._stencilState.stencilBackFunc = DD
    }, JD.c.prototype.setStencilFunctionReference = function(DD) {
      this._stencilState.stencilFuncRef = DD
    }, JD.c.prototype.setStencilFunctionMask = function(DD) {
      this._stencilState.stencilFuncMask = DD
    }, JD.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, JD.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, JD.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, JD.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, JD.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, JD.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, JD.c.prototype.setStencilOperationFail = function(DD) {
      this._stencilState.stencilOpStencilFail = DD
    }, JD.c.prototype.setStencilBackOperationFail = function(DD) {
      this._stencilState.stencilBackOpStencilFail = DD
    }, JD.c.prototype.setStencilOperationDepthFail = function(DD) {
      this._stencilState.stencilOpDepthFail = DD
    }, JD.c.prototype.setStencilBackOperationDepthFail = function(DD) {
      this._stencilState.stencilBackOpDepthFail = DD
    }, JD.c.prototype.setStencilOperationPass = function(DD) {
      this._stencilState.stencilOpStencilDepthPass = DD
    }, JD.c.prototype.setStencilBackOperationPass = function(DD) {
      this._stencilState.stencilBackOpStencilDepthPass = DD
    }, JD.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, JD.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    wD(39951);
    let VD = !1;
    VD || (VD = !0, JD.c.prototype.createDepthStencilTexture = function(DD, zD, wD) {
      if (zD.isCube) {
        const wD = DD.width || DD;
        return this._createDepthStencilCubeTexture(wD, zD)
      }
      return this._createDepthStencilTexture(DD, zD, wD)
    });
    wD(39958), wD(39998);
    let PD = !1;
    PD || (PD = !0, sD.ThinEngine.prototype.enableScissor = function(DD, zD, wD, pD) {
      const sD = this._gl;
      sD.enable(sD.SCISSOR_TEST), sD.scissor(DD, zD, wD, pD)
    }, sD.ThinEngine.prototype.disableScissor = function() {
      const DD = this._gl;
      DD.disable(DD.SCISSOR_TEST)
    })
  },
  39753: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => JD
    });
    var pD = wD(39761),
      sD = wD(37110),
      KD = wD(39766),
      rD = wD(39832);
    class LD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new cD(DD)
      }
      sampleFrame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const zD = DD - this._lastFrameTimeMs;
            this._rollingFrameTime.add(zD)
          }
          this._lastFrameTimeMs = DD
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
        const DD = this._rollingFrameTime.history(0);
        return 0 === DD ? 0 : 1e3 / DD
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
    class cD {
      constructor(DD) {
        this._samples = new Array(DD), this.reset()
      }
      add(DD) {
        let zD;
        if (this.isSaturated()) {
          const DD = this._samples[this._pos];
          zD = DD - this.average, this.average -= zD / (this._sampleCount - 1), this._m2 -= zD * (DD - this.average)
        } else this._sampleCount++;
        zD = DD - this.average, this.average += zD / this._sampleCount, this._m2 += zD * (DD - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = DD, this._pos++, this._pos %= this._samples.length
      }
      history(DD) {
        if (DD >= this._sampleCount || DD >= this._samples.length) return 0;
        const zD = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(zD - DD)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(DD) {
        const zD = this._samples.length;
        return (DD % zD + zD) % zD
      }
    }
    var gD = wD(39847),
      RD = wD(38662),
      AD = wD(39858),
      UD = wD(39826),
      fD = wD(39785);

    function ID(DD) {
      const zD = function(DD) {
        if (!(0, fD.c)() || !document.body) return null;
        const zD = document.createElement("span");
        zD.textContent = "Hg", zD.style.font = DD;
        const wD = document.createElement("div");
        wD.style.display = "inline-block", wD.style.width = "1px", wD.style.height = "0px", wD.style.verticalAlign = "bottom";
        const pD = document.createElement("div");
        let sD, KD;
        pD.style.whiteSpace = "nowrap", pD.appendChild(zD), pD.appendChild(wD), document.body.appendChild(pD);
        try {
          KD = wD.getBoundingClientRect().top - zD.getBoundingClientRect().top, wD.style.verticalAlign = "baseline", sD = wD.getBoundingClientRect().top - zD.getBoundingClientRect().top
        } finally {
          document.body.removeChild(pD)
        }
        const rD = {
          ascent: sD,
          height: KD,
          descent: KD - sD
        };
        return BD(rD) ? rD : null
      }(DD);
      if (zD) return zD;
      const wD = function(DD) {
        let zD = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? zD = new OffscreenCanvas(64, 64) : (0, fD.c)() && "function" === typeof document.createElement && (zD = document.createElement("canvas"), zD.width = 64, zD.height = 64);
          const wD = zD?.getContext("2d");
          if (!wD) return null;
          wD.font = DD;
          const pD = wD.measureText("Hg"),
            sD = Number(pD.actualBoundingBoxAscent ?? pD.fontBoundingBoxAscent),
            KD = Number(pD.actualBoundingBoxDescent ?? pD.fontBoundingBoxDescent),
            rD = {
              ascent: sD,
              height: sD + KD,
              descent: KD
            };
          return BD(rD) ? rD : null
        } catch {
          return null
        } finally {
          const DD = zD;
          "function" === typeof DD?.dispose && DD.dispose()
        }
      }(DD);
      return wD || function(DD) {
        const zD = Math.max(1, function(DD) {
            const zD = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(DD || ""));
            return zD ? Number(zD[1]) : 16
          }(DD)),
          wD = .8 * zD,
          pD = .2 * zD;
        return {
          ascent: wD,
          height: wD + pD,
          descent: pD
        }
      }(DD)
    }

    function BD(DD) {
      return Number.isFinite(DD.ascent) && Number.isFinite(DD.height) && Number.isFinite(DD.descent) && DD.height > 0
    }

    function GD(DD) {
      if (DD.requestPointerLock) {
        const zD = DD.requestPointerLock();
        zD instanceof Promise ? zD.then((() => {
          DD.focus()
        })).catch((() => {})) : DD.focus()
      }
    }
    var hD = wD(39872),
      nD = wD(39820),
      MD = wD(39878),
      OD = wD(39886);
    class JD extends KD.ThinEngine {
      static get NpmPackage() {
        return UD.c.NpmPackage
      }
      static get Version() {
        return UD.c.Version
      }
      static get Instances() {
        return sD.d.Instances
      }
      static get LastCreatedEngine() {
        return sD.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return sD.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(DD) {
        return UD.c.DefaultLoadingScreenFactory(DD)
      }
      get _supportsHardwareTextureRescaling() {
        return !!JD._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, MD.b)(), (0, OD.b)(), super(DD, zD, wD, pD), this._performanceMonitor = new LD, this._drawCalls = new hD.e, DD && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(DD) {
        super._sharedInit(DD),
          function(DD, zD, wD) {
            DD._onCanvasFocus = () => {
              DD.onCanvasFocusObservable.notifyObservers(DD)
            }, DD._onCanvasBlur = () => {
              DD.onCanvasBlurObservable.notifyObservers(DD)
            }, DD._onCanvasContextMenu = zD => {
              DD.disableContextMenu && zD.preventDefault()
            }, zD.addEventListener("focus", DD._onCanvasFocus), zD.addEventListener("blur", DD._onCanvasBlur), zD.addEventListener("contextmenu", DD._onCanvasContextMenu), DD._onBlur = () => {
              DD.disablePerformanceMonitorInBackground && DD.performanceMonitor.disable(), DD._windowIsBackground = !0
            }, DD._onFocus = () => {
              DD.disablePerformanceMonitorInBackground && DD.performanceMonitor.enable(), DD._windowIsBackground = !1
            }, DD._onCanvasPointerOut = wD => {
              document.elementFromPoint(wD.clientX, wD.clientY) !== zD && DD.onCanvasPointerOutObservable.notifyObservers(wD)
            };
            const pD = DD.getHostWindow();
            pD && "function" === typeof pD.addEventListener && (pD.addEventListener("blur", DD._onBlur), pD.addEventListener("focus", DD._onFocus)), zD.addEventListener("pointerout", DD._onCanvasPointerOut), wD.doNotHandleTouchAction || function(DD) {
              DD && DD.setAttribute && (DD.setAttribute("touch-action", "none"), DD.style.touchAction = "none", DD.style.webkitTapHighlightColor = "transparent")
            }(zD), !UD.c.audioEngine && wD.audioEngine && UD.c.AudioEngineFactory && (UD.c.audioEngine = UD.c.AudioEngineFactory(DD.getRenderingCanvas(), DD.getAudioContext(), DD.getAudioDestination())), (0, fD.c)() && (DD._onFullscreenChange = () => {
              DD.isFullscreen = !!document.fullscreenElement, DD.isFullscreen && DD._pointerLockRequested && zD && GD(zD)
            }, document.addEventListener("fullscreenchange", DD._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", DD._onFullscreenChange, !1), DD._onPointerLockChange = () => {
              DD.isPointerLock = document.pointerLockElement === zD
            }, document.addEventListener("pointerlockchange", DD._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", DD._onPointerLockChange, !1)), DD.enableOfflineSupport = void 0 !== UD.c.OfflineProviderFactory, DD._deterministicLockstep = !!wD.deterministicLockstep, DD._lockstepMaxSteps = wD.lockstepMaxSteps || 0, DD._timeStep = wD.timeStep || 1 / 60
          }(this, DD, this._creationOptions)
      }
      resizeImageBitmap(DD, zD, wD) {
        return function(DD, zD, wD, pD) {
          const sD = DD.createCanvas(wD, pD).getContext("2d");
          if (!sD) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return sD.drawImage(zD, 0, 0), sD.getImageData(0, 0, wD, pD).data
        }(this, DD, zD, wD)
      }
      async _createImageBitmapFromSource(DD, zD) {
        return await async function(DD, zD, wD) {
          return await new Promise(((pD, sD) => {
            const KD = new Image;
            KD.onload = () => {
              KD.decode().then((() => {
                DD.createImageBitmap(KD, wD).then((DD => {
                  pD(DD)
                }))
              }))
            }, KD.onerror = () => {
              sD(`Error loading image ${KD.src}`)
            }, KD.src = zD
          }))
        }(this, DD, zD)
      }
      switchFullscreen(DD) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(DD)
      }
      enterFullscreen(DD) {
        this.isFullscreen || (this._pointerLockRequested = DD, this._renderingCanvas && function(DD) {
          const zD = DD.requestFullscreen || DD.webkitRequestFullscreen;
          zD && zD.call(DD)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const DD = document;
          document.exitFullscreen ? document.exitFullscreen() : DD.webkitCancelFullScreen && DD.webkitCancelFullScreen()
        }()
      }
      setDitheringState(DD) {
        DD ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(DD) {
        DD ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(DD, zD, wD, pD) {
        const sD = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(DD, zD, wD, pD), sD
      }
      scissorClear(DD, zD, wD, pD, sD) {
        this.enableScissor(DD, zD, wD, pD), this.clear(sD, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(DD) {
        const zD = this._gl.getAttachedShaders(DD);
        return zD ? this._gl.getShaderSource(zD[0]) : null
      }
      getFragmentShaderSource(DD) {
        const zD = this._gl.getAttachedShaders(DD);
        return zD ? this._gl.getShaderSource(zD[1]) : null
      }
      set framebufferDimensionsObject(DD) {
        this._framebufferDimensionsObject = DD, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const DD of this.scenes) DD.resetCachedMaterial(), DD._rebuildGeometries();
        for (const DD of this._virtualScenes) DD.resetCachedMaterial(), DD._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(DD) {
        return ID(DD)
      }
      enterPointerlock() {
        this._renderingCanvas && GD(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      aJ() {
        this._measureFps(), super.aJ()
      }
      _deletePipelineContext(DD) {
        const zD = DD;
        zD && zD.program && zD.transformFeedback && (this.deleteTransformFeedback(zD.transformFeedback), zD.transformFeedback = null), super._deletePipelineContext(DD)
      }
      createShaderProgram(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        sD = sD || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const rD = super.createShaderProgram(DD, zD, wD, pD, sD, KD);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), rD
      }
      _createShaderProgram(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const KD = pD.createProgram();
        if (DD.program = KD, !KD) throw new Error("Unable to create program");
        if (pD.attachShader(KD, zD), pD.attachShader(KD, wD), this.AB > 1 && sD) {
          const zD = this.createTransformFeedback();
          this.bindTransformFeedback(zD), this.setTranformFeedbackVaryings(KD, sD), DD.transformFeedback = zD
        }
        return pD.linkProgram(KD), this.AB > 1 && sD && this.bindTransformFeedback(null), DD.context = pD, DD.vertexShader = zD, DD.fragmentShader = wD, DD.isParallelCompiled || this._finalizePipelineContext(DD), KD
      }
      _releaseTexture(DD) {
        super._releaseTexture(DD)
      }
      _releaseRenderTargetWrapper(DD) {
        super._releaseRenderTargetWrapper(DD);
        for (const zD of this.scenes) {
          for (const wD of zD.postProcesses) wD._outputTexture === DD && (wD._outputTexture = null);
          for (const wD of zD.cameras)
            for (const zD of wD._postProcesses) zD && zD._outputTexture === DD && (zD._outputTexture = null)
        }
      }
      _rescaleTexture(DD, zD, wD, pD, sD) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const KD = this.createRenderTargetTexture({
          width: zD.width,
          height: zD.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && JD._RescalePostProcessFactory && (this._rescalePostProcess = JD._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const rD = () => {
              this._rescalePostProcess.onApply = function(zD) {
                zD._bindTexture("textureSampler", DD)
              };
              let rD = wD;
              rD || (rD = this.scenes[this.scenes.length - 1]), rD.postProcessManager.directRender([this._rescalePostProcess], KD, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, zD, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, pD, 0, 0, zD.width, zD.height, 0), this.unBindFramebuffer(KD), KD.dispose(), sD && sD()
            },
            LD = this._rescalePostProcess.getEffect();
          LD ? LD.executeWhenCompiled(rD) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((DD => {
            DD.executeWhenCompiled(rD)
          }))
        }
      }
      wrapWebGLTexture(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const rD = new AD.e(DD, this._gl),
          LD = new pD.e(this, 15, !0);
        return LD._hardwareTexture = rD, LD.baseWidth = sD, LD.baseHeight = KD, LD.width = sD, LD.height = KD, LD.isReady = !0, LD.useMipMaps = zD, this.updateTextureSamplingMode(wD, LD), LD
      }
      updateWrappedWebGLTexture(DD, zD) {
        if (15 !== DD.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const pD of this._renderTargetWrapperCache)
          if (pD.textures?.includes(DD)) {
            if (pD.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (pD._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } DD._hardwareTexture = new AD.e(zD, this._gl), DD.isReady = !0, DD._cachedCoordinatesMode = null, DD._cachedWrapU = null, DD._cachedWrapV = null, DD._cachedWrapR = null, DD._cachedAnisotropicFilteringLevel = null;
        for (const pD in this._boundTexturesCache) this._boundTexturesCache[pD] === DD && (this._boundTexturesCache[pD] = null);
        this.updateTextureSamplingMode(DD.samplingMode, DD);
        const wD = this._gl;
        for (const pD of this._renderTargetWrapperCache) {
          if (pD.texture !== DD) continue;
          const sD = pD,
            KD = pD.samples,
            rD = KD > 1;
          sD._framebuffer && wD.deleteFramebuffer(sD._framebuffer), !rD && sD._depthStencilBuffer && (wD.deleteRenderbuffer(sD._depthStencilBuffer), sD._depthStencilBuffer = null);
          const LD = this._currentFramebuffer,
            cD = wD.createFramebuffer();
          this._bindUnboundFramebuffer(cD), wD.framebufferTexture2D(wD.FRAMEBUFFER, wD.COLOR_ATTACHMENT0, wD.TEXTURE_2D, zD, 0), rD || (sD._depthStencilBuffer = this._setupFramebufferDepthAttachments(pD._generateStencilBuffer, pD._generateDepthBuffer, pD.width, pD.height)), this._bindUnboundFramebuffer(LD), sD._framebuffer = cD, rD && (pD._samples = 1, this.updateRenderTargetTextureSampleCount(sD, KD))
        }
      }
      _uploadImageToTexture(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const sD = this._gl,
          KD = this._getWebGLTextureType(DD.type),
          rD = this._getInternalFormat(DD.format),
          LD = this._getRGBABufferInternalSizedFormat(DD.type, rD),
          cD = DD.isCube ? sD.TEXTURE_CUBE_MAP : sD.TEXTURE_2D;
        this._bindTextureDirectly(cD, DD, !0), this._unpackFlipY(DD.invertY);
        let gD = sD.TEXTURE_2D;
        DD.isCube && (gD = sD.TEXTURE_CUBE_MAP_POSITIVE_X + wD), sD.texImage2D(gD, pD, LD, rD, KD, zD), this._bindTextureDirectly(cD, null, !0)
      }
      updateTextureComparisonFunction(DD, zD) {
        if (1 === this.AB) return void RD.d.Error("WebGL 1 does not support texture comparison.");
        const wD = this._gl;
        DD.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, DD, !0), 0 === zD ? (wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_COMPARE_FUNC, 515), wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_COMPARE_MODE, wD.NONE)) : (wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_COMPARE_FUNC, zD), wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_COMPARE_MODE, wD.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, DD, !0), 0 === zD ? (wD.texParameteri(wD.TEXTURE_2D, wD.TEXTURE_COMPARE_FUNC, 515), wD.texParameteri(wD.TEXTURE_2D, wD.TEXTURE_COMPARE_MODE, wD.NONE)) : (wD.texParameteri(wD.TEXTURE_2D, wD.TEXTURE_COMPARE_FUNC, zD), wD.texParameteri(wD.TEXTURE_2D, wD.TEXTURE_COMPARE_MODE, wD.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), DD._comparisonFunction = zD
      }
      createInstancesBuffer(DD) {
        const zD = this._gl.createBuffer();
        if (!zD) throw new Error("Unable to create instance buffer");
        const wD = new gD.b(zD);
        return wD.bA = DD, this.bindArrayBuffer(wD), this._gl.bufferData(this._gl.ARRAY_BUFFER, DD, this._gl.DYNAMIC_DRAW), wD.references = 1, wD
      }
      deleteInstancesBuffer(DD) {
        this._gl.deleteBuffer(DD)
      }
      async _clientWaitAsync(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const pD = this._gl;
        return await new Promise(((sD, KD) => {
          (0, nD.e)((() => {
            const wD = pD.clientWaitSync(DD, zD, 0);
            if (wD == pD.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return wD != pD.TIMEOUT_EXPIRED
          }), sD, KD, wD)
        }))
      }
      _readPixelsAsync(DD, zD, wD, pD, sD, KD, rD) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const LD = this._gl,
          cD = LD.createBuffer();
        LD.bindBuffer(LD.PIXEL_PACK_BUFFER, cD), LD.bufferData(LD.PIXEL_PACK_BUFFER, rD.byteLength, LD.STREAM_READ), LD.readPixels(DD, zD, wD, pD, sD, KD, 0), LD.bindBuffer(LD.PIXEL_PACK_BUFFER, null);
        const gD = LD.fenceSync(LD.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return gD ? (LD.flush(), this._clientWaitAsync(gD, 0, 10).then((() => (LD.deleteSync(gD), LD.bindBuffer(LD.PIXEL_PACK_BUFFER, cD), LD.getBufferSubData(LD.PIXEL_PACK_BUFFER, 0, rD), LD.bindBuffer(LD.PIXEL_PACK_BUFFER, null), LD.deleteBuffer(cD), rD)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(DD, zD) {
            1 === sD.d.Instances.length && UD.c.audioEngine && (UD.c.audioEngine.dispose(), UD.c.audioEngine = null);
            const wD = DD.getHostWindow();
            wD && "function" === typeof wD.removeEventListener && (wD.removeEventListener("blur", DD._onBlur), wD.removeEventListener("focus", DD._onFocus)), zD && (zD.removeEventListener("focus", DD._onCanvasFocus), zD.removeEventListener("blur", DD._onCanvasBlur), zD.removeEventListener("pointerout", DD._onCanvasPointerOut), zD.removeEventListener("contextmenu", DD._onCanvasContextMenu)), (0, fD.c)() && (document.removeEventListener("fullscreenchange", DD._onFullscreenChange), document.removeEventListener("mozfullscreenchange", DD._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", DD._onFullscreenChange), document.removeEventListener("msfullscreenchange", DD._onFullscreenChange), document.removeEventListener("pointerlockchange", DD._onPointerLockChange), document.removeEventListener("mspointerlockchange", DD._onPointerLockChange), document.removeEventListener("mozpointerlockchange", DD._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", DD._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    JD.ALPHA_DISABLE = 0, JD.ALPHA_ADD = 1, JD.ALPHA_COMBINE = 2, JD.ALPHA_SUBTRACT = 3, JD.ALPHA_MULTIPLY = 4, JD.ALPHA_MAXIMIZED = 5, JD.ALPHA_ONEONE = 6, JD.ALPHA_PREMULTIPLIED = 7, JD.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, JD.ALPHA_INTERPOLATE = 9, JD.ALPHA_SCREENMODE = 10, JD.DELAYLOADSTATE_NONE = 0, JD.DELAYLOADSTATE_LOADED = 1, JD.DELAYLOADSTATE_LOADING = 2, JD.DELAYLOADSTATE_NOTLOADED = 4, JD.NEVER = 512, JD.ALWAYS = 519, JD.LESS = 513, JD.EQUAL = 514, JD.LEQUAL = 515, JD.GREATER = 516, JD.GEQUAL = 518, JD.NOTEQUAL = 517, JD.KEEP = 7680, JD.REPLACE = 7681, JD.INCR = 7682, JD.DECR = 7683, JD.INVERT = 5386, JD.INCR_WRAP = 34055, JD.DECR_WRAP = 34056, JD.TEXTURE_CLAMP_ADDRESSMODE = 0, JD.TEXTURE_WRAP_ADDRESSMODE = 1, JD.TEXTURE_MIRROR_ADDRESSMODE = 2, JD.TEXTUREFORMAT_ALPHA = 0, JD.TEXTUREFORMAT_LUMINANCE = 1, JD.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, JD.TEXTUREFORMAT_RGB = 4, JD.TEXTUREFORMAT_RGBA = 5, JD.TEXTUREFORMAT_RED = 6, JD.TEXTUREFORMAT_R = 6, JD.TEXTUREFORMAT_R16_UNORM = 33322, JD.TEXTUREFORMAT_RG16_UNORM = 33324, JD.TEXTUREFORMAT_RGB16_UNORM = 32852, JD.TEXTUREFORMAT_RGBA16_UNORM = 32859, JD.TEXTUREFORMAT_R16_SNORM = 36760, JD.TEXTUREFORMAT_RG16_SNORM = 36761, JD.TEXTUREFORMAT_RGB16_SNORM = 36762, JD.TEXTUREFORMAT_RGBA16_SNORM = 36763, JD.TEXTUREFORMAT_RG = 7, JD.TEXTUREFORMAT_RED_INTEGER = 8, JD.TEXTUREFORMAT_R_INTEGER = 8, JD.TEXTUREFORMAT_RG_INTEGER = 9, JD.TEXTUREFORMAT_RGB_INTEGER = 10, JD.TEXTUREFORMAT_RGBA_INTEGER = 11, JD.TEXTURETYPE_UNSIGNED_BYTE = 0, JD.TEXTURETYPE_UNSIGNED_INT = 0, JD.TEXTURETYPE_FLOAT = 1, JD.TEXTURETYPE_HALF_FLOAT = 2, JD.TEXTURETYPE_BYTE = 3, JD.TEXTURETYPE_SHORT = 4, JD.TEXTURETYPE_UNSIGNED_SHORT = 5, JD.TEXTURETYPE_INT = 6, JD.TEXTURETYPE_UNSIGNED_INTEGER = 7, JD.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, JD.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, JD.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, JD.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, JD.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, JD.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, JD.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, JD.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, JD.TEXTURE_NEAREST_SAMPLINGMODE = 1, JD.TEXTURE_BILINEAR_SAMPLINGMODE = 2, JD.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, JD.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, JD.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, JD.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, JD.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, JD.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, JD.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, JD.TEXTURE_NEAREST_LINEAR = 7, JD.TEXTURE_NEAREST_NEAREST = 1, JD.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, JD.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, JD.TEXTURE_LINEAR_LINEAR = 2, JD.TEXTURE_LINEAR_NEAREST = 12, JD.TEXTURE_EXPLICIT_MODE = 0, JD.TEXTURE_SPHERICAL_MODE = 1, JD.TEXTURE_PLANAR_MODE = 2, JD.TEXTURE_CUBIC_MODE = 3, JD.TEXTURE_PROJECTION_MODE = 4, JD.TEXTURE_SKYBOX_MODE = 5, JD.TEXTURE_INVCUBIC_MODE = 6, JD.TEXTURE_EQUIRECTANGULAR_MODE = 7, JD.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, JD.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, JD.SCALEMODE_FLOOR = 1, JD.SCALEMODE_NEAREST = 2, JD.SCALEMODE_CEILING = 3
  },
  39914: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD
    });
    var pD = wD(39867);
    class sD {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(DD) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = DD, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, DD && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, pD.c)(DD.format))
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
      getBaseArrayLayer(DD) {
        if (!this._textures) return -1;
        const zD = this._textures[DD],
          wD = this._layerIndices?.[DD] ?? 0,
          pD = this._faceIndices?.[DD] ?? 0;
        return zD.isCube ? 6 * wD + pD : zD.is3D ? 0 : wD
      }
      get samples() {
        return this._samples
      }
      setSamples(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === DD && !wD) return DD;
        const pD = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, DD, zD) : this._engine.updateRenderTargetTextureSampleCount(this, DD);
        return this._samples = DD, pD
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(DD, zD, wD, pD, sD) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = DD, this._isCube = zD, this._size = wD, this._engine = pD, this._depthStencilTexture = null, this.label = sD
      }
      setTextures(DD) {
        Array.isArray(DD) ? this._textures = DD : this._textures = DD ? [DD] : null
      }
      setTexture(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[zD] !== DD && (this._textures[zD] && wD && this._textures[zD].dispose(), this._textures[zD] = DD)
      }
      setLayerAndFaceIndices(DD, zD) {
        this._layerIndices = DD, this._faceIndices = zD
      }
      setLayerAndFaceIndex() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== zD && zD >= 0 && (this._layerIndices[DD] = zD), void 0 !== wD && wD >= 0 && (this._faceIndices[DD] = wD)
      }
      createDepthStencilTexture() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = wD, this._depthStencilTextureLabel = KD, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: zD,
          comparisonFunction: DD,
          generateStencil: wD,
          isCube: this._isCube,
          samples: pD,
          depthTextureFormat: sD,
          label: KD
        }, this), this._depthStencilTexture
      }
      _shareDepth(DD) {
        this.shareDepth(DD)
      }
      shareDepth(DD) {
        this._depthStencilTexture && (DD._depthStencilTexture && DD._depthStencilTexture.dispose(), DD._depthStencilTexture = this._depthStencilTexture, DD._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(DD) {
        this.texture && this.texture._swapAndDie(DD), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let DD = null;
        if (this._isMulti) {
          const zD = this.textures;
          if (zD && zD.length > 0) {
            let wD = !1,
              pD = zD.length,
              sD = -1;
            const KD = zD[zD.length - 1]._source;
            14 !== KD && 12 !== KD || (wD = !0, sD = zD[zD.length - 1].format, pD--);
            const rD = [],
              LD = [],
              cD = [],
              gD = [],
              RD = [],
              AD = [],
              UD = [],
              fD = {};
            for (let DD = 0; DD < pD; ++DD) {
              const wD = zD[DD];
              rD.push(wD.samplingMode), LD.push(wD.type), cD.push(wD.format);
              void 0 !== fD[wD.uniqueId] ? (gD.push(-1), UD.push(0)) : (fD[wD.uniqueId] = DD, wD.is2DArray ? (gD.push(35866), UD.push(wD.depth)) : wD.isCube ? (gD.push(34067), UD.push(0)) : wD.is3D ? (gD.push(32879), UD.push(wD.depth)) : (gD.push(3553), UD.push(0))), this._faceIndices && RD.push(this._faceIndices[DD] ?? 0), this._layerIndices && AD.push(this._layerIndices[DD] ?? 0)
            }
            const ID = {
                samplingModes: rD,
                generateMipMaps: zD[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: wD,
                depthTextureFormat: sD,
                types: LD,
                formats: cD,
                wLD: pD,
                targetTypes: gD,
                faceIndex: RD,
                layerIndex: AD,
                layerCounts: UD,
                label: this.label
              },
              BD = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            DD = this._engine.createMultipleRenderTarget(BD, ID);
            for (let GD = 0; GD < pD; ++GD) {
              if (-1 !== gD[GD]) continue;
              const wD = fD[zD[GD].uniqueId];
              DD.setTexture(DD.textures[wD], GD)
            }
          }
        } else {
          const zD = {};
          if (zD.generateDepthBuffer = this._generateDepthBuffer, zD.generateMipMaps = this.texture?.generateMipMaps ?? !1, zD.generateStencilBuffer = this._generateStencilBuffer, zD.samplingMode = this.texture?.samplingMode, zD.type = this.texture?.type, zD.format = this.texture?.format, zD.noColorAttachment = !this._textures, zD.label = this.label, this.isCube) DD = this._engine.createRenderTargetCubeTexture(this.width, zD);
          else {
            const wD = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            DD = this._engine.createRenderTargetTexture(wD, zD)
          }
          DD.texture && (DD.texture.isReady = !0)
        }
        return DD
      }
      _swapRenderTargetWrapper(DD) {
        if (this._textures && DD._textures)
          for (let zD = 0; zD < this._textures.length; ++zD) this._textures[zD]._swapAndDie(DD._textures[zD], !1), DD._textures[zD].isReady = !0;
        this._depthStencilTexture && DD._depthStencilTexture && (this._depthStencilTexture._swapAndDie(DD._depthStencilTexture), DD._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const DD = this._cloneRenderTargetWrapper();
        if (DD) {
          if (this._depthStencilTexture) {
            const zD = this._depthStencilTexture.samplingMode,
              wD = this._depthStencilTexture.format,
              pD = 2 === zD || 3 === zD || 11 === zD;
            DD.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, pD, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, wD, this._depthStencilTextureLabel)
          }
          this.samples > 1 && DD.setSamples(this.samples), DD._swapRenderTargetWrapper(this), DD.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let DD = 0; DD < this._textures.length; ++DD) this._textures[DD].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40359: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static get ForceFullSceneLoadingForIncremental() {
        return pD._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(DD) {
        pD._ForceFullSceneLoadingForIncremental = DD
      }
      static get ShowLoadingScreen() {
        return pD._ShowLoadingScreen
      }
      static set ShowLoadingScreen(DD) {
        pD._ShowLoadingScreen = DD
      }
      static get loggingLevel() {
        return pD._LoggingLevel
      }
      static set loggingLevel(DD) {
        pD._LoggingLevel = DD
      }
      static get CleanBoneMatrixWeights() {
        return pD._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(DD) {
        pD._CleanBoneMatrixWeights = DD
      }
    }
    pD._ForceFullSceneLoadingForIncremental = !1, pD._ShowLoadingScreen = !0, pD._CleanBoneMatrixWeights = !1, pD._LoggingLevel = 0
  },
  40006: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(38662);
    const sD = new Map;

    function KD(DD, zD) {
      (function(DD) {
        return sD.delete(DD)
      })(DD) && pD.d.Warn(`Extension with the name '${DD}' already exists`), sD.set(DD, zD)
    }

    function rD(DD, zD) {
      "image/ktx" !== zD && "image/ktx2" !== zD || (DD = ".ktx"), sD.has(DD) || (DD.endsWith(".ies") && KD(".ies", (async () => await wD.e(309).then((() => wD(41686))).then((DD => new DD._IESTextureLoader)))), DD.endsWith(".dds") && KD(".dds", (async () => await wD.e(307).then((() => wD(41690))).then((DD => new DD._DDSTextureLoader)))), DD.endsWith(".basis") && KD(".basis", (async () => await wD.e(310).then((() => wD(41697))).then((DD => new DD._BasisTextureLoader)))), DD.endsWith(".env") && KD(".env", (async () => await Promise.all([wD.e(311), wD.e(308)]).then((() => wD(41702))).then((DD => new DD._ENVTextureLoader)))), DD.endsWith(".hdr") && KD(".hdr", (async () => await wD.e(312).then((() => wD(41749))).then((DD => new DD._HDRTextureLoader)))), (DD.endsWith(".ktx") || DD.endsWith(".ktx2")) && (KD(".ktx", (async () => await wD.e(313).then((() => wD(41758))).then((DD => new DD._KTXTextureLoader)))), KD(".ktx2", (async () => await wD.e(313).then((() => wD(41758))).then((DD => new DD._KTXTextureLoader))))), DD.endsWith(".tga") && KD(".tga", (async () => await wD.e(314).then((() => wD(41770))).then((DD => new DD._TGATextureLoader)))), DD.endsWith(".exr") && KD(".exr", (async () => await wD.e(315).then((() => wD(41777))).then((DD => new DD._ExrTextureLoader)))));
      const pD = sD.get(DD);
      return pD ? Promise.resolve(pD(zD)) : null
    }
  },
  40380: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      g: () => gD
    });
    var pD = wD(40220),
      sD = wD(39944),
      KD = wD(37134);
    class rD extends pD.b {
      get M6() {
        return this._subMaterials
      }
      set M6(DD) {
        this._subMaterials = DD, this._hookArray(DD)
      }
      getChildren() {
        return this.M6
      }
      constructor(DD, zD) {
        super(DD, zD, !0), this._waitingSubMaterialsUniqueIds = [], this.Ul().addMultiMaterial(this), this.M6 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(DD) {
        var zD = this;
        const wD = DD.push;
        DD.push = function() {
          for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
          const rD = wD.apply(DD, sD);
          return zD._markAllSubMeshesAsTexturesDirty(), rD
        };
        const pD = DD.splice;
        DD.splice = (zD, wD) => {
          const sD = pD.call(DD, zD, wD ?? DD.length);
          return this._markAllSubMeshesAsTexturesDirty(), sD
        }
      }
      getSubMaterial(DD) {
        return DD < 0 || DD >= this.M6.length ? this.Ul().defaultMaterial : this.M6[DD]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.M6.map((DD => DD ? DD.getActiveTextures() : [])))
      }
      hasTexture(DD) {
        if (super.hasTexture(DD)) return !0;
        for (let zD = 0; zD < this.M6.length; zD++)
          if (this.M6[zD]?.hasTexture(DD)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(DD, zD, wD) {
        for (let pD = 0; pD < this.M6.length; pD++) {
          const sD = this.M6[pD];
          if (sD) {
            if (sD._storeEffectOnSubMeshes) {
              if (!sD.isReadyForSubMesh(DD, zD, wD)) return !1;
              continue
            }
            if (!sD.isReady(DD)) return !1
          }
        }
        return !0
      }
      clone(DD, zD) {
        const wD = new rD(DD, this.Ul());
        for (let pD = 0; pD < this.M6.length; pD++) {
          let sD;
          const KD = this.M6[pD];
          sD = zD && KD ? KD.clone(DD + "-" + KD.name) : this.M6[pD], wD.M6.push(sD)
        }
        return wD
      }
      serialize() {
        const DD = {};
        DD.name = this.name, DD.id = this.id, DD.uniqueId = this.uniqueId, sD.c && (DD.tags = sD.c.GetTags(this)), DD.materialsUniqueIds = [], DD.materials = [];
        for (let zD = 0; zD < this.M6.length; zD++) {
          const wD = this.M6[zD];
          wD ? (DD.materialsUniqueIds.push(wD.uniqueId), DD.materials.push(wD.id)) : (DD.materialsUniqueIds.push(null), DD.materials.push(null))
        }
        return DD
      }
      dispose(DD, zD, wD) {
        const pD = this.Ul();
        if (!pD) return;
        if (wD)
          for (let KD = 0; KD < this.M6.length; KD++) {
            const wD = this.M6[KD];
            wD && wD.dispose(DD, zD)
          }
        const sD = pD.multiMaterials.indexOf(this);
        sD >= 0 && pD.multiMaterials.splice(sD, 1), super.dispose(DD, zD)
      }
    }
    let LD = !1;

    function cD(DD, zD) {
      const wD = new rD(DD.name, zD);
      if (wD.id = DD.id, wD._loadedUniqueId = DD.uniqueId, sD.c && sD.c.AddTagsTo(wD, DD.tags), DD.materialsUniqueIds) wD._waitingSubMaterialsUniqueIds = DD.materialsUniqueIds;
      else
        for (const pD of DD.materials) wD.M6.push(zD.getLastMaterialById(pD));
      return wD
    }

    function gD() {
      LD || (LD = !0, rD.ParseMultiMaterial = cD, (0, KD.i)("BABYLON.MultiMaterial", rD))
    }
  },
  40157: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD, sD, KD = wD(37079);
    ! function(DD) {
      DD[DD.LOCAL = 0] = "LOCAL", DD[DD.WORLD = 1] = "WORLD", DD[DD.BONE = 2] = "BONE"
    }(pD || (pD = {}));
    class rD {}
    rD.X = new KD.s(1, 0, 0), rD.Y = new KD.s(0, 1, 0), rD.Z = new KD.s(0, 0, 1),
      function(DD) {
        DD[DD.X = 0] = "X", DD[DD.Y = 1] = "Y", DD[DD.Z = 2] = "Z"
      }(sD || (sD = {}))
  },
  39916: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD,
      e: () => gD
    });
    var pD = wD(37079);
    const sD = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      KD = [() => 1, DD => DD.y, DD => DD.z, DD => DD.x, DD => DD.x * DD.y, DD => DD.y * DD.z, DD => 3 * DD.z * DD.z - 1, DD => DD.x * DD.z, DD => DD.x * DD.x - DD.y * DD.y],
      rD = (DD, zD) => sD[DD] * KD[DD](zD),
      LD = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class cD {
      constructor() {
        this.preScaled = !1, this.l00 = pD.s.Zero(), this.l1_1 = pD.s.Zero(), this.l10 = pD.s.Zero(), this.l11 = pD.s.Zero(), this.l2_2 = pD.s.Zero(), this.l2_1 = pD.s.Zero(), this.l20 = pD.s.Zero(), this.l21 = pD.s.Zero(), this.l22 = pD.s.Zero()
      }
      addLight(DD, zD, wD) {
        pD.n.WI[0].set(zD.r, zD.g, zD.b);
        const sD = pD.n.WI[0],
          KD = pD.n.WI[1];
        sD.scaleToRef(wD, KD), KD.scaleToRef(rD(0, DD), pD.n.WI[2]), this.l00.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(1, DD), pD.n.WI[2]), this.l1_1.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(2, DD), pD.n.WI[2]), this.l10.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(3, DD), pD.n.WI[2]), this.l11.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(4, DD), pD.n.WI[2]), this.l2_2.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(5, DD), pD.n.WI[2]), this.l2_1.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(6, DD), pD.n.WI[2]), this.l20.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(7, DD), pD.n.WI[2]), this.l21.addInPlace(pD.n.WI[2]), KD.scaleToRef(rD(8, DD), pD.n.WI[2]), this.l22.addInPlace(pD.n.WI[2])
      }
      scaleInPlace(DD) {
        this.l00.scaleInPlace(DD), this.l1_1.scaleInPlace(DD), this.l10.scaleInPlace(DD), this.l11.scaleInPlace(DD), this.l2_2.scaleInPlace(DD), this.l2_1.scaleInPlace(DD), this.l20.scaleInPlace(DD), this.l21.scaleInPlace(DD), this.l22.scaleInPlace(DD)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(LD[0]), this.l1_1.scaleInPlace(LD[1]), this.l10.scaleInPlace(LD[2]), this.l11.scaleInPlace(LD[3]), this.l2_2.scaleInPlace(LD[4]), this.l2_1.scaleInPlace(LD[5]), this.l20.scaleInPlace(LD[6]), this.l21.scaleInPlace(LD[7]), this.l22.scaleInPlace(LD[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(sD[0]), this.l1_1.scaleInPlace(sD[1]), this.l10.scaleInPlace(sD[2]), this.l11.scaleInPlace(sD[3]), this.l2_2.scaleInPlace(sD[4]), this.l2_1.scaleInPlace(sD[5]), this.l20.scaleInPlace(sD[6]), this.l21.scaleInPlace(sD[7]), this.l22.scaleInPlace(sD[8])
      }
      updateFromArray(DD) {
        return pD.s.FromArrayToRef(DD[0], 0, this.l00), pD.s.FromArrayToRef(DD[1], 0, this.l1_1), pD.s.FromArrayToRef(DD[2], 0, this.l10), pD.s.FromArrayToRef(DD[3], 0, this.l11), pD.s.FromArrayToRef(DD[4], 0, this.l2_2), pD.s.FromArrayToRef(DD[5], 0, this.l2_1), pD.s.FromArrayToRef(DD[6], 0, this.l20), pD.s.FromArrayToRef(DD[7], 0, this.l21), pD.s.FromArrayToRef(DD[8], 0, this.l22), this
      }
      updateFromFloatsArray(DD) {
        return pD.s.FromFloatsToRef(DD[0], DD[1], DD[2], this.l00), pD.s.FromFloatsToRef(DD[3], DD[4], DD[5], this.l1_1), pD.s.FromFloatsToRef(DD[6], DD[7], DD[8], this.l10), pD.s.FromFloatsToRef(DD[9], DD[10], DD[11], this.l11), pD.s.FromFloatsToRef(DD[12], DD[13], DD[14], this.l2_2), pD.s.FromFloatsToRef(DD[15], DD[16], DD[17], this.l2_1), pD.s.FromFloatsToRef(DD[18], DD[19], DD[20], this.l20), pD.s.FromFloatsToRef(DD[21], DD[22], DD[23], this.l21), pD.s.FromFloatsToRef(DD[24], DD[25], DD[26], this.l22), this
      }
      static FromArray(DD) {
        return (new cD).updateFromArray(DD)
      }
      static FromPolynomial(DD) {
        const zD = new cD;
        return zD.l00 = DD.xx.scale(.376127).add(DD.yy.scale(.376127)).add(DD.zz.scale(.376126)), zD.l1_1 = DD.y.scale(.977204), zD.l10 = DD.z.scale(.977204), zD.l11 = DD.x.scale(.977204), zD.l2_2 = DD.xy.scale(1.16538), zD.l2_1 = DD.yz.scale(1.16538), zD.l20 = DD.zz.scale(1.34567).subtract(DD.xx.scale(.672834)).subtract(DD.yy.scale(.672834)), zD.l21 = DD.zx.scale(1.16538), zD.l22 = DD.xx.scale(1.16538).subtract(DD.yy.scale(1.16538)), zD.l1_1.scaleInPlace(-1), zD.l11.scaleInPlace(-1), zD.l2_1.scaleInPlace(-1), zD.l21.scaleInPlace(-1), zD.scaleInPlace(Math.PI), zD
      }
    }
    class gD {
      constructor() {
        this.x = pD.s.Zero(), this.y = pD.s.Zero(), this.z = pD.s.Zero(), this.xx = pD.s.Zero(), this.yy = pD.s.Zero(), this.zz = pD.s.Zero(), this.xy = pD.s.Zero(), this.yz = pD.s.Zero(), this.zx = pD.s.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = cD.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(DD) {
        pD.n.WI[0].Z2(DD.r, DD.g, DD.b);
        const zD = pD.n.WI[0];
        this.xx.addInPlace(zD), this.yy.addInPlace(zD), this.zz.addInPlace(zD)
      }
      scaleInPlace(DD) {
        this.x.scaleInPlace(DD), this.y.scaleInPlace(DD), this.z.scaleInPlace(DD), this.xx.scaleInPlace(DD), this.yy.scaleInPlace(DD), this.zz.scaleInPlace(DD), this.yz.scaleInPlace(DD), this.zx.scaleInPlace(DD), this.xy.scaleInPlace(DD)
      }
      updateFromHarmonics(DD) {
        return this._harmonics = DD, this.x.pC(DD.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.pC(DD.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.pC(DD.l10), this.z.scaleInPlace(1.02333), this.xx.pC(DD.l00), pD.n.WI[0].pC(DD.l20).scaleInPlace(.247708), pD.n.WI[1].pC(DD.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).apD(pD.n.WI[0]).addInPlace(pD.n.WI[1]), this.yy.pC(DD.l00), this.yy.scaleInPlace(.886277).apD(pD.n.WI[0]).apD(pD.n.WI[1]), this.zz.pC(DD.l00), pD.n.WI[0].pC(DD.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(pD.n.WI[0]), this.yz.pC(DD.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.pC(DD.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.pC(DD.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(DD) {
        return (new gD).updateFromHarmonics(DD)
      }
      static FromArray(DD) {
        const zD = new gD;
        return pD.s.FromArrayToRef(DD[0], 0, zD.x), pD.s.FromArrayToRef(DD[1], 0, zD.y), pD.s.FromArrayToRef(DD[2], 0, zD.z), pD.s.FromArrayToRef(DD[3], 0, zD.xx), pD.s.FromArrayToRef(DD[4], 0, zD.yy), pD.s.FromArrayToRef(DD[5], 0, zD.zz), pD.s.FromArrayToRef(DD[6], 0, zD.yz), pD.s.FromArrayToRef(DD[7], 0, zD.zx), pD.s.FromArrayToRef(DD[8], 0, zD.xy), zD
      }
    }
  },
  40368: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => jD,
      f: () => SD
    });
    var pD = wD(39921),
      sD = wD(37119),
      KD = wD(37079),
      rD = wD(40066),
      LD = wD(40348),
      cD = wD(40372),
      gD = wD(40063),
      RD = wD(40234),
      AD = wD(40055);
    class UD {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new KD.s(0, 0, 0), this._diffPositionForCollisions = new KD.s(0, 0, 0), this._collisionResponse = !0
      }
    }
    var fD, ID, BD, GD = wD(39808),
      hD = wD(39990),
      nD = wD(40246),
      MD = wD(37273),
      OD = wD(37088),
      JD = wD(40157),
      ED = wD(38662),
      QD = wD(39927),
      XD = wD(39826),
      VD = wD(37134);

    function PD(DD, zD) {
      return DD - Math.floor(DD / zD) * zD
    }

    function CD(DD, zD, wD) {
      DD instanceof Float32Array ? KD.e.FromArrayToRef(DD, zD, wD) : wD.Z2((0, hD.c)(DD[zD]), (0, hD.c)(DD[zD + 1]), (0, hD.c)(DD[zD + 2]), (0, hD.c)(DD[zD + 3]), (0, hD.c)(DD[zD + 4]), (0, hD.c)(DD[zD + 5]), (0, hD.c)(DD[zD + 6]), (0, hD.c)(DD[zD + 7]), (0, hD.c)(DD[zD + 8]), (0, hD.c)(DD[zD + 9]), (0, hD.c)(DD[zD + 10]), (0, hD.c)(DD[zD + 11]), (0, hD.c)(DD[zD + 12]), (0, hD.c)(DD[zD + 13]), (0, hD.c)(DD[zD + 14]), (0, hD.c)(DD[zD + 15]))
    }

    function xD(DD, zD, wD, pD, sD, LD, cD, gD, RD) {
      const AD = wD.texture,
        UD = AD?.getInternalTexture(),
        fD = UD?._bufferView;
      if (!(fD instanceof Float32Array) && !(fD instanceof Uint16Array)) return ED.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const ID = AD.getSize(),
        BD = function(DD, zD) {
          const wD = DD.y - DD.x + 1,
            pD = zD * DD.w / wD,
            sD = pD < 1 ? 0 : 1,
            KD = wD - sD;
          let rD = PD(pD - Math.floor(pD), 1) * KD;
          return rD = PD(rD + DD.z, KD), Math.floor(rD) + DD.x + sD
        }(pD, wD.time);
      if (!isFinite(BD) || BD < 0 || BD >= ID.height) return ED.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const GD = KD.n.WI[0],
        hD = KD.n.Matrix[0],
        nD = KD.n.Matrix[1],
        MD = BD * ID.width * 4,
        OD = zD === rD.k.NormalKind ? KD.s.TransformNormalFromFloatsToRef : KD.s.TransformCoordinatesFromFloatsToRef;
      for (let KD = 0, rD = 0; KD < DD.length; KD += 3, rD += 4) {
        let zD, wD;
        for (hD.reset(), zD = 0; zD < 4 && zD < RD; zD++) wD = LD[rD + zD], wD > 0 && (CD(fD, MD + 16 * Math.floor(sD[rD + zD]), nD), nD.scaleAndAddToRef(wD, hD));
        if (cD && gD)
          for (zD = 0; zD < 4 && zD + 4 < RD; zD++) wD = gD[rD + zD], wD > 0 && (CD(fD, MD + 16 * Math.floor(cD[rD + zD]), nD), nD.scaleAndAddToRef(wD, hD));
        OD(DD[KD], DD[KD + 1], DD[KD + 2], hD, GD), GD.toArray(DD, KD)
      }
      return !0
    }
    class TD {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = KD.s.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class bD {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new TD, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new UD, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let jD = (() => {
        var DD;
        let zD, UD = cD.f,
          fD = [];
        return DD = class extends UD {
          static get BILLBOARDMODE_NONE() {
            return cD.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return cD.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return cD.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return cD.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return cD.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return cD.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(DD) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = DD
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(DD) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = DD
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(DD) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = DD
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(DD) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = DD
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(DD) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = DD
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(DD) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== DD && (this._internalAbstractMeshDataInfo._morphTargetManager = DD, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(DD) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== DD && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = DD, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(DD) {
            return !!super._updateNonUniformScalingState(DD) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(DD) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = DD
          }
          set GU(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(DD)
          }
          set onCollisionPositionChange(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(DD)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(DD) {
            if (this._internalAbstractMeshDataInfo._visibility === DD) return;
            const zD = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = DD, (1 === zD && 1 !== DD || 1 !== zD && 1 === DD) && this._markSubMeshesAsDirty((DD => {
              DD.markAsMiscDirty(), DD.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(DD) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = DD
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(DD) {
            this._internalAbstractMeshDataInfo._renderingGroupId = DD
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(DD) {
            if (!Number.isInteger(DD) || DD < 0 || DD > 255 || 0 !== DD && 0 === (63 & DD)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = DD
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(DD) {
            this._setMaterial(DD)
          }
          _setMaterial(DD) {
            this._internalAbstractMeshDataInfo._material !== DD && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = DD, DD && DD.meshMap && (DD.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.QE && (this.resetDrawCache(void 0, null == DD), this._unBindEffect()))
          }
          getMaterialForRenderPass(DD) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[DD]
          }
          setMaterialForRenderPass(DD, zD) {
            this.resetDrawCache(DD), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const wD = this._internalAbstractMeshDataInfo._materialForRenderPass[DD];
            wD?.meshMap?.[this.uniqueId] && (wD.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[DD] = zD, zD && zD.meshMap && (zD.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(DD) {
            this._internalAbstractMeshDataInfo._receiveShadows !== DD && (this._internalAbstractMeshDataInfo._receiveShadows = DD, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(DD) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== DD && (this._internalAbstractMeshDataInfo._hasVertexAlpha = DD, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(DD) {
            this._internalAbstractMeshDataInfo._useVertexColors !== DD && (this._internalAbstractMeshDataInfo._useVertexColors = DD, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(DD) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== DD && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = DD, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(DD) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== DD && (this._internalAbstractMeshDataInfo._numBoneInfluencers = DD, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(DD) {
            this._internalAbstractMeshDataInfo._applyFog !== DD && (this._internalAbstractMeshDataInfo._applyFog = DD, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(DD) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = DD
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(DD) {
            DD !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = DD, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(DD) ? -1 : DD
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = DD
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(DD) ? -1 : DD
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = DD
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(DD) {
            const zD = this._internalAbstractMeshDataInfo._skeleton;
            zD && zD.needInitialSkinMatrix && zD._unregisterMeshWithPoseMatrix(this), DD && DD.needInitialSkinMatrix && DD._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = DD, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(zD) {
            var wD;
            let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(zD, pD, !1), wD = this, this._internalAbstractMeshDataInfo = new bD, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = DD.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new sD.b, this.onCollisionPositionChangeObservable = new sD.b, this.onMaterialChangedObservable = new sD.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.uB = DD.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = MD.d.Red(), this.outlineWidth = .02, this.overlayColor = MD.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.lI = !1, this.ZI = !1, this.actionManager = null, this.ellipsoid = new KD.s(.5, 1, .5), this.ellipsoidOffset = new KD.s(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new MD.h(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Tl: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new sD.b, this._onCollisionPositionChange = function(DD, zD) {
                let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                zD.subtractToRef(wD._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, wD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), wD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > XD.c.CollisionsEpsilon && wD.position.addInPlace(wD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), pD && wD.onCollideObservable.notifyObservers(pD), wD.onCollisionPositionChangeObservable.notifyObservers(wD.position)
              }, pD = this.Ul(), this.layerMask = pD.defaultRenderableLayerMask, pD.VpD(this), this._resyncLightSources(), this._uniformBuffer = new AD.e(this.Ul().iI(), void 0, void 0, zD, !this.Ul().iI().isWebGPU), this._buildUniformLayout(), pD.performancePriority) {
              case 2:
                this.ZI = !0;
              case 1:
                this.lI = !0, this.uB = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(DD) {
            const zD = this._uniformBuffer;
            zD.i5("world", DD), zD.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), zD.update()
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
          toString(DD) {
            let zD = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            zD += ", # of submeshes: " + (this.QE ? this.QE.length : 0);
            const wD = this._internalAbstractMeshDataInfo._skeleton;
            return wD && (zD += ", skeleton: " + wD.name), DD && (zD += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], zD += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Tl ? "YES" : "NO")), zD
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== cD.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(DD) {
            let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (zD || this.actionManager.isRecursive)) {
              if (!DD) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(DD)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(DD, !1) : null
          }
          _releaseRenderPassId(DD) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.QE) {
              for (const DD of this.QE) DD._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const DD of this.Ul().lights) DD.isEnabled() && DD.canAffectMesh(this) && this._lightSources.push(DD);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(DD) {
            const zD = DD.isEnabled() && DD.canAffectMesh(this),
              wD = this._lightSources.indexOf(DD);
            let pD = !1;
            if (-1 === wD) {
              if (!zD) return;
              this._lightSources.push(DD)
            } else {
              if (zD) return;
              pD = !0, this._lightSources.splice(wD, 1)
            }
            this._markSubMeshesAsLightDirty(pD)
          }
          _unBindEffect() {
            for (const DD of this.QE) DD.setEffect(null)
          }
          _removeLightSource(DD, zD) {
            const wD = this._lightSources.indexOf(DD); - 1 !== wD && (this._lightSources.splice(wD, 1), this._markSubMeshesAsLightDirty(zD))
          }
          _markSubMeshesAsDirty(DD) {
            if (this.QE)
              for (const zD of this.QE)
                for (let wD = 0; wD < zD._drawWrappers.length; ++wD) {
                  const pD = zD._drawWrappers[wD];
                  pD && pD.defines && pD.defines.markAllAsDirty && DD(pD.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((zD => zD.markAsLightDirty(DD)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((DD => DD.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((DD => DD.markAsMiscDirty()))
          }
          vzD(DD) {
            return this._currentRenderId = Number.MAX_VALUE, super.vzD(DD), this._isDirty = !0, this
          }
          resetDrawCache(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.QE)
              for (const wD of this.QE) wD.resetDrawCache(DD, zD)
          }
          get isBlocked() {
            return !1
          }
          getLOD(DD) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          XpD() {
            return null
          }
          getVerticesData(DD) {
            return null
          }
          setVerticesData(DD, zD, wD, pD) {
            return this
          }
          updateVerticesData(DD, zD, wD, pD) {
            return this
          }
          setIndices(DD, zD) {
            return this
          }
          isVerticesDataPresent(DD) {
            return !1
          }
          FW() {
            return this._masterMesh ? this._masterMesh.FW() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.FW()
          }
          setBoundingInfo(DD) {
            return this._boundingInfo = DD, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(DD, zD, wD) {
            return this._boundingInfo = new RD.b(DD, zD, wD), this._boundingInfo
          }
          normalizeToUnitCube() {
            let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(DD, zD, wD)
          }
          get useBones() {
            return this.skeleton && this.Ul().skeletonsEnabled && this.isVerticesDataPresent(rD.k.MatricesIndicesKind) && this.isVerticesDataPresent(rD.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(DD) {}
          _activate(DD, zD) {
            return this._renderId = DD, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === cD.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Gl() {
            return !1
          }
          get hsD() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(DD, zD, wD) {
            return this.position.addInPlace(this.calcMovePOV(DD, zD, wD)), this
          }
          calcMovePOV(DD, zD, wD) {
            const pD = new KD.e;
            (this.rotationQuaternion ? this.rotationQuaternion : KD.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(pD);
            const sD = KD.s.Zero(),
              rD = this.definedFacingForward ? -1 : 1;
            return KD.s.TransformCoordinatesFromFloatsToRef(DD * rD, zD, wD * rD, pD, sD), sD
          }
          rotatePOV(DD, zD, wD) {
            return this.rotation.addInPlace(this.calcRotatePOV(DD, zD, wD)), this
          }
          calcRotatePOV(DD, zD, wD) {
            const pD = this.definedFacingForward ? 1 : -1;
            return new KD.s(DD * pD, zD, wD * pD)
          }
          _refreshBoundingInfo(DD, zD) {
            if (DD) {
              const wD = (0, nD.g)(DD, 0, this.getTotalVertices(), zD);
              this._boundingInfo ? this._boundingInfo.reConstruct(wD.minimum, wD.maximum) : this._boundingInfo = new RD.b(wD.minimum, wD.maximum)
            }
            if (this.QE)
              for (let wD = 0; wD < this.QE.length; wD++) this.QE[wD].refreshBoundingInfo(DD);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(DD) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(DD.minimum, DD.maximum) : this._boundingInfo = new RD.b(DD.minimum, DD.maximum), this.QE)
              for (let zD = 0; zD < this.QE.length; zD++) this.QE[zD].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(DD, zD, wD, pD, sD, LD, cD) {
            ! function(DD, zD, wD, pD, sD, LD, cD) {
              const gD = KD.n.WI[0],
                RD = KD.n.Matrix[0],
                AD = KD.n.Matrix[1],
                UD = zD === rD.k.NormalKind ? KD.s.TransformNormalFromFloatsToRef : KD.s.TransformCoordinatesFromFloatsToRef;
              for (let rD = 0, fD = 0; rD < DD.length; rD += 3, fD += 4) {
                let zD, ID;
                for (RD.reset(), zD = 0; zD < 4; zD++) ID = sD[fD + zD], ID > 0 && (KD.e.FromFloat32ArrayToRefScaled(wD, Math.floor(16 * pD[fD + zD]), ID, AD), RD.addToSelf(AD));
                if (LD && cD)
                  for (zD = 0; zD < 4; zD++) ID = cD[fD + zD], ID > 0 && (KD.e.FromFloat32ArrayToRefScaled(wD, Math.floor(16 * LD[fD + zD]), ID, AD), RD.addToSelf(AD));
                UD(DD[rD], DD[rD + 1], DD[rD + 2], RD, gD), gD.toArray(DD, rD)
              }
            }(DD, zD, wD, pD, sD, LD, cD)
          }
          _getData(zD, wD) {
            let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rD.k.PositionKind;
            const sD = zD.cache,
              LD = DD => {
                if (sD) {
                  const zD = sD._vertexData || (sD._vertexData = {});
                  return zD[DD] || this.copyVerticesData(DD, zD), zD[DD]
                }
                return this.getVerticesData(DD)
              };
            if (wD || (wD = LD(pD)), !wD) return null;
            sD ? (sD._outputData ? sD._outputData.set(wD) : sD._outputData = new Float32Array(wD), wD = sD._outputData) : (zD.applyMorph && this.morphTargetManager || zD.applySkeleton && this.skeleton || zD.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (wD = wD.slice()), zD.applyMorph && this.morphTargetManager && function(DD, zD, wD) {
              let pD;
              switch (zD) {
                case rD.k.PositionKind:
                  pD = DD => DD.getPositions();
                  break;
                case rD.k.NormalKind:
                  pD = DD => DD.getNormals();
                  break;
                case rD.k.TangentKind:
                  pD = DD => DD.getTangents();
                  break;
                case rD.k.UVKind:
                  pD = DD => DD.getUVs();
                  break;
                case rD.k.UV2Kind:
                  pD = DD => DD.getUV2s();
                  break;
                case rD.k.ColorKind:
                  pD = DD => DD.getColors();
                  break;
                default:
                  return
              }
              for (let sD = 0; sD < DD.length; sD++) {
                let zD = DD[sD];
                for (let KD = 0; KD < wD.numTargets; KD++) {
                  const rD = wD.getTarget(KD),
                    LD = rD.influence;
                  if (0 !== LD) {
                    const wD = pD(rD);
                    wD && (zD += (wD[sD] - DD[sD]) * LD)
                  }
                }
                DD[sD] = zD
              }
            }(wD, pD, this.morphTargetManager);
            const cD = this.bakedVertexAnimationManager;
            let gD = !1;
            if (zD.applyBakedVertexAnimation && cD?.isEnabled) {
              const DD = LD(rD.k.MatricesIndicesKind),
                sD = LD(rD.k.MatricesWeightsKind);
              if (sD && DD) {
                const KD = this.numBoneInfluencers > 4,
                  RD = KD ? LD(rD.k.MatricesIndicesExtraKind) : null,
                  AD = KD ? LD(rD.k.MatricesWeightsExtraKind) : null;
                gD = xD(wD, pD, cD, zD.bakedVertexAnimationSettings ?? cD.animationParameters, DD, sD, RD, AD, this.numBoneInfluencers)
              }
            }
            if (!gD && zD.applySkeleton && this.skeleton) {
              const zD = LD(rD.k.MatricesIndicesKind),
                sD = LD(rD.k.MatricesWeightsKind);
              if (sD && zD) {
                const KD = this.numBoneInfluencers > 4,
                  cD = KD ? LD(rD.k.MatricesIndicesExtraKind) : null,
                  gD = KD ? LD(rD.k.MatricesWeightsExtraKind) : null,
                  RD = this.skeleton.getTransformMatrices(this);
                DD._ApplySkeleton(wD, pD, RD, zD, sD, cD, gD)
              }
            }
            if (!1 !== zD.updatePositionsArray && pD === rD.k.PositionKind) {
              const DD = this._internalAbstractMeshDataInfo._positions || [],
                zD = DD.length;
              if (DD.length = wD.length / 3, zD < DD.length)
                for (let wD = zD; wD < DD.length; wD++) DD[wD] = new KD.s;
              for (let pD = 0, sD = 0; pD < DD.length; pD++, sD += 3) DD[pD].Z2(wD[sD], wD[sD + 1], wD[sD + 2]);
              this._internalAbstractMeshDataInfo._positions = DD
            }
            return wD
          }
          getNormalsData() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: DD,
              applyMorph: zD,
              updatePositionsArray: !1
            }, null, rD.k.NormalKind)
          }
          AY() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: DD,
              applyMorph: zD,
              updatePositionsArray: !1
            }, wD, rD.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new RD.b(KD.s.Zero(), KD.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(DD) {
            if (!this.QE) return this;
            const zD = this.QE.length;
            for (let wD = 0; wD < zD; wD++) {
              const pD = this.QE[wD];
              (zD > 1 || !pD.IsGlobal) && pD.updateBoundingInfo(DD)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.ZI || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(DD) {
            return this.FW().isInFrustum(DD, this.cullingStrategy)
          }
          isCompletelyInFrustum(DD) {
            return this.FW().isCompletelyInFrustum(DD)
          }
          AsD(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = arguments.length > 2 ? arguments[2] : void 0;
            const pD = this.FW(),
              sD = DD.FW();
            if (pD.intersects(sD, zD)) return !0;
            if (wD)
              for (const KD of this.getChildMeshes())
                if (KD.AsD(DD, zD, !0)) return !0;
            return !1
          }
          intersectsPoint(DD) {
            return this.FW().intersectsPoint(DD)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(DD) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = DD
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(DD) {
            let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const wD = this.Ul().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = wD.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, wD.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, DD, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, zD), this
          }
          _collideForSubMesh(DD, zD, wD) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!DD._lastColliderWorldVertices || !DD._lastColliderTransformMatrix.equals(zD)) {
              DD._lastColliderTransformMatrix = zD.clone(), DD._lastColliderWorldVertices = [], DD._trianglePlanes = [];
              const wD = DD.verticesStart,
                pD = DD.verticesStart + DD.verticesCount;
              for (let sD = wD; sD < pD; sD++) DD._lastColliderWorldVertices.push(KD.s.TransformCoordinates(this._positions[sD], zD))
            }
            return wD._collide(DD._trianglePlanes, DD._lastColliderWorldVertices, this.XpD(), DD.indexStart, DD.indexStart + DD.indexCount, DD.verticesStart, !!DD.yI(), this, this._shouldConvertRHS(), 7 === DD.yI()?.fillMode), this
          }
          _processCollisionsForSubMeshes(DD, zD) {
            const wD = this._scene.getCollidingSubMeshCandidates(this, DD),
              pD = wD.length;
            for (let sD = 0; sD < pD; sD++) {
              const KD = wD.data[sD];
              pD > 1 && !KD._checkCollision(DD) || this._collideForSubMesh(KD, zD, DD)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(DD) {
            if (!this.FW()._checkCollision(DD)) return this;
            const zD = KD.n.Matrix[0],
              wD = KD.n.Matrix[1];
            return KD.e.ScalingToRef(1 / DD._radius.x, 1 / DD._radius.y, 1 / DD._radius.z, zD), this.worldMatrixFromCache.multiplyToRef(zD, wD), this._processCollisionsForSubMeshes(DD, wD), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(DD, zD, wD) {
            let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              sD = arguments.length > 4 ? arguments[4] : void 0,
              rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const LD = new gD.c,
              cD = this.getClassName(),
              RD = "InstancedLinesMesh" === cD || "LinesMesh" === cD || "GreasedLineMesh" === cD ? this.intersectionThreshold : 0,
              AD = this.FW();
            if (!this.QE) return LD;
            if (!rD && (!DD.intersectsSphere(AD.FpD, RD) || !DD.intersectsBox(AD.boundingBox, RD))) return LD;
            if (pD) return LD.hit = !rD, LD.pickedMesh = rD ? null : this, LD.distance = rD ? 0 : KD.s.Distance(DD.origin, AD.FpD.center), LD.subMeshId = 0, LD;
            if (!this._generatePointsArray()) return LD;
            let UD = null;
            const fD = this._scene.getIntersectingSubMeshCandidates(this, DD),
              ID = fD.length;
            let BD = !1;
            for (let KD = 0; KD < ID; KD++) {
              const DD = fD.data[KD].yI();
              if (DD && (7 == DD.fillMode || 0 == DD.fillMode || 1 == DD.fillMode || 2 == DD.fillMode || 4 == DD.fillMode)) {
                BD = !0;
                break
              }
            }
            if (!BD) return LD.hit = !0, LD.pickedMesh = this, LD.distance = KD.s.Distance(DD.origin, AD.FpD.center), LD.subMeshId = -1, LD;
            for (let KD = 0; KD < ID; KD++) {
              const pD = fD.data[KD];
              if (ID > 1 && !rD && !pD.canIntersects(DD)) continue;
              const sD = pD.intersects(DD, this._positions, this.XpD(), zD, wD);
              if (sD && (zD || !UD || sD.distance < UD.distance) && (UD = sD, UD.subMeshId = pD._id, UD._internalSubMeshId = KD, zD)) break
            }
            if (UD) {
              const zD = sD ?? this.getWorldMatrix(),
                wD = KD.n.WI[0],
                pD = KD.n.WI[1];
              KD.s.TransformCoordinatesToRef(DD.origin, zD, wD), DD.direction.scaleToRef(UD.distance, pD);
              const rD = KD.s.TransformNormal(pD, zD).addInPlace(wD);
              return LD.hit = !0, LD.distance = KD.s.Distance(wD, rD), LD.pickedPoint = rD, LD.pickedMesh = this, LD.bu = UD.bu || 0, LD.bv = UD.bv || 0, LD.subMeshFaceId = UD.faceId, LD.faceId = UD.faceId + fD.data[UD._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), LD.subMeshId = UD.subMeshId, LD
            }
            return LD
          }
          clone(DD, zD, wD) {
            return null
          }
          releaseSubMeshes() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.QE)
              for (; this.QE.length;) this.QE[0].dispose(DD);
            else this.QE = [];
            return this
          }
          dispose(DD) {
            let zD, wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const pD = this.Ul();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), pD.freeActiveMeshes(), pD.freeRenderingGroups(), pD.renderingManager.maintainStateBetweenFrames && pD.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((DD => DD !== this && DD.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), zD = 0; zD < this._intersectionsInProgress.length; zD++) {
              const DD = this._intersectionsInProgress[zD],
                wD = DD._intersectionsInProgress.indexOf(this);
              DD._intersectionsInProgress.splice(wD, 1)
            }
            this._intersectionsInProgress.length = 0;
            const sD = pD.lights;
            for (const rD of sD) {
              let DD = rD.includedOnlyMeshes.indexOf(this); - 1 !== DD && rD.includedOnlyMeshes.splice(DD, 1), DD = rD.excludedMeshes.indexOf(this), -1 !== DD && rD.excludedMeshes.splice(DD, 1);
              const zD = rD.getShadowGenerators();
              if (zD) {
                const wD = zD.values();
                for (let zD = wD.next(); !0 !== zD.done; zD = wD.next()) {
                  const wD = zD.value.getShadowMap();
                  wD && wD.renderList && (DD = wD.renderList.indexOf(this), -1 !== DD && wD.renderList.splice(DD, 1))
                }
              }
            }
            this.releaseSubMeshes(pD._isDisposing);
            const KD = pD.iI();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, KD.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), KD.wipeCaches(), pD.zW(this), this._parentContainer) {
              const DD = this._parentContainer.meshes.indexOf(this);
              DD > -1 && this._parentContainer.meshes.splice(DD, 1), this._parentContainer = null
            }
            if (wD && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !DD)
              for (zD = 0; zD < pD.XE.length; zD++) pD.XE[zD].emitter === this && (pD.XE[zD].dispose(), zD--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(DD, wD)
          }
          _initFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            DD.facetNormals || (DD.facetNormals = []), DD.facetPositions || (DD.facetPositions = []), DD.facetPartitioning || (DD.facetPartitioning = new Array), DD.facetNb = this.XpD().length / 3 | 0, DD.partitioningSubdivisions = DD.partitioningSubdivisions ? DD.partitioningSubdivisions : 10, DD.partitioningBBoxRatio = DD.partitioningBBoxRatio ? DD.partitioningBBoxRatio : 1.01;
            for (let zD = 0; zD < DD.facetNb; zD++) DD.facetNormals[zD] = KD.s.Zero(), DD.facetPositions[zD] = KD.s.Zero();
            return DD.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            DD.facetDataEnabled || this._initFacetData();
            const zD = this.getVerticesData(rD.k.PositionKind),
              wD = this.XpD(),
              pD = this.getVerticesData(rD.k.NormalKind)?.slice(),
              sD = this.FW();
            if (DD.facetDepthSort && !DD.facetDepthSortEnabled) {
              if (DD.facetDepthSortEnabled = !0, wD instanceof Uint16Array) DD.depthSortedIndices = new Uint16Array(wD);
              else if (wD instanceof Uint32Array) DD.depthSortedIndices = new Uint32Array(wD);
              else {
                let zD = !1;
                for (let DD = 0; DD < wD.length; DD++)
                  if (wD[DD] > 65535) {
                    zD = !0;
                    break
                  } DD.depthSortedIndices = zD ? new Uint32Array(wD) : new Uint16Array(wD)
              }
              if (DD.facetDepthSortFunction = function(DD, zD) {
                  return zD.sqDistance - DD.sqDistance
                }, !DD.facetDepthSortFrom) {
                const zD = this.Ul().activeCamera;
                DD.facetDepthSortFrom = zD ? zD.position : KD.s.Zero()
              }
              DD.depthSortedFacets = [];
              for (let zD = 0; zD < DD.facetNb; zD++) {
                const wD = {
                  ind: 3 * zD,
                  sqDistance: 0
                };
                DD.depthSortedFacets.push(wD)
              }
              DD.invertedMatrix = KD.e.Identity(), DD.facetDepthSortOrigin = KD.s.Zero()
            }
            DD.bbSize.x = sD.maximum.x - sD.minimum.x > OD.b ? sD.maximum.x - sD.minimum.x : OD.b, DD.bbSize.y = sD.maximum.y - sD.minimum.y > OD.b ? sD.maximum.y - sD.minimum.y : OD.b, DD.bbSize.z = sD.maximum.z - sD.minimum.z > OD.b ? sD.maximum.z - sD.minimum.z : OD.b;
            let cD = DD.bbSize.x > DD.bbSize.y ? DD.bbSize.x : DD.bbSize.y;
            if (cD = cD > DD.bbSize.z ? cD : DD.bbSize.z, DD.subDiv.max = DD.partitioningSubdivisions, DD.subDiv.X = Math.floor(DD.subDiv.max * DD.bbSize.x / cD), DD.subDiv.Y = Math.floor(DD.subDiv.max * DD.bbSize.y / cD), DD.subDiv.Z = Math.floor(DD.subDiv.max * DD.bbSize.z / cD), DD.subDiv.X = DD.subDiv.X < 1 ? 1 : DD.subDiv.X, DD.subDiv.Y = DD.subDiv.Y < 1 ? 1 : DD.subDiv.Y, DD.subDiv.Z = DD.subDiv.Z < 1 ? 1 : DD.subDiv.Z, DD.facetParameters.facetNormals = this.getFacetLocalNormals(), DD.facetParameters.facetPositions = this.getFacetLocalPositions(), DD.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), DD.facetParameters.bInfo = sD, DD.facetParameters.bbSize = DD.bbSize, DD.facetParameters.subDiv = DD.subDiv, DD.facetParameters.ratio = this.partitioningBBoxRatio, DD.facetParameters.depthSort = DD.facetDepthSort, DD.facetDepthSort && DD.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(DD.invertedMatrix), KD.s.TransformCoordinatesToRef(DD.facetDepthSortFrom, DD.invertedMatrix, DD.facetDepthSortOrigin), DD.facetParameters.distanceTo = DD.facetDepthSortOrigin), DD.facetParameters.depthSortedFacets = DD.depthSortedFacets, pD && LD.b.ComputeNormals(zD, wD, pD, DD.facetParameters), DD.facetDepthSort && DD.facetDepthSortEnabled) {
              DD.depthSortedFacets.sort(DD.facetDepthSortFunction);
              const zD = DD.depthSortedIndices.length / 3 | 0;
              for (let pD = 0; pD < zD; pD++) {
                const zD = DD.depthSortedFacets[pD].ind;
                DD.depthSortedIndices[3 * pD] = wD[zD], DD.depthSortedIndices[3 * pD + 1] = wD[zD + 1], DD.depthSortedIndices[3 * pD + 2] = wD[zD + 2]
              }
              this.updateIndices(DD.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            return DD.facetNormals || this.updateFacetData(), DD.facetNormals
          }
          getFacetLocalPositions() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            return DD.facetPositions || this.updateFacetData(), DD.facetPositions
          }
          getFacetLocalPartitioning() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            return DD.facetPartitioning || this.updateFacetData(), DD.facetPartitioning
          }
          getFacetPosition(DD) {
            const zD = KD.s.Zero();
            return this.getFacetPositionToRef(DD, zD), zD
          }
          getFacetPositionToRef(DD, zD) {
            const wD = this.getFacetLocalPositions()[DD],
              pD = this.getWorldMatrix();
            return KD.s.TransformCoordinatesToRef(wD, pD, zD), this
          }
          getFacetNormal(DD) {
            const zD = KD.s.Zero();
            return this.getFacetNormalToRef(DD, zD), zD
          }
          getFacetNormalToRef(DD, zD) {
            const wD = this.getFacetLocalNormals()[DD];
            return KD.s.TransformNormalToRef(wD, this.getWorldMatrix(), zD), this
          }
          getFacetsAtLocalCoordinates(DD, zD, wD) {
            const pD = this.FW(),
              sD = this._internalAbstractMeshDataInfo._facetData,
              KD = Math.floor((DD - pD.minimum.x * sD.partitioningBBoxRatio) * sD.subDiv.X * sD.partitioningBBoxRatio / sD.bbSize.x),
              rD = Math.floor((zD - pD.minimum.y * sD.partitioningBBoxRatio) * sD.subDiv.Y * sD.partitioningBBoxRatio / sD.bbSize.y),
              LD = Math.floor((wD - pD.minimum.z * sD.partitioningBBoxRatio) * sD.subDiv.Z * sD.partitioningBBoxRatio / sD.bbSize.z);
            return KD < 0 || KD > sD.subDiv.max || rD < 0 || rD > sD.subDiv.max || LD < 0 || LD > sD.subDiv.max ? null : sD.facetPartitioning[KD + sD.subDiv.max * rD + sD.subDiv.max * sD.subDiv.max * LD]
          }
          getClosestFacetAtCoordinates(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const LD = this.getWorldMatrix(),
              cD = KD.n.Matrix[5];
            LD.invertToRef(cD);
            const gD = KD.n.WI[8];
            KD.s.TransformCoordinatesFromFloatsToRef(DD, zD, wD, cD, gD);
            const RD = this.getClosestFacetAtLocalCoordinates(gD.x, gD.y, gD.z, pD, sD, rD);
            return pD && KD.s.TransformCoordinatesFromFloatsToRef(pD.x, pD.y, pD.z, LD, pD), RD
          }
          getClosestFacetAtLocalCoordinates(DD, zD, wD, pD) {
            let sD, KD, rD, LD, cD, gD, RD, AD, UD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              ID = null;
            const BD = this.getFacetLocalPositions(),
              GD = this.getFacetLocalNormals(),
              hD = this.getFacetsAtLocalCoordinates(DD, zD, wD);
            if (!hD) return null;
            let nD, MD, OD, JD, ED = Number.MAX_VALUE;
            for (let QD = 0; QD < hD.length; QD++) MD = hD[QD], OD = GD[MD], JD = BD[MD], LD = (DD - JD.x) * OD.x + (zD - JD.y) * OD.y + (wD - JD.z) * OD.z, (!UD || UD && fD && LD >= 0 || UD && !fD && LD <= 0) && (LD = OD.x * JD.x + OD.y * JD.y + OD.z * JD.z, cD = -(OD.x * DD + OD.y * zD + OD.z * wD - LD) / (OD.x * OD.x + OD.y * OD.y + OD.z * OD.z), gD = DD + OD.x * cD, RD = zD + OD.y * cD, AD = wD + OD.z * cD, sD = gD - DD, KD = RD - zD, rD = AD - wD, nD = sD * sD + KD * KD + rD * rD, nD < ED && (ED = nD, ID = MD, pD && (pD.x = gD, pD.y = RD, pD.z = AD)));
            return ID
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            return DD.facetDataEnabled && (DD.facetDataEnabled = !1, DD.facetPositions = [], DD.facetNormals = [], DD.facetPartitioning = new Array, DD.facetParameters = {}, DD.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(DD, zD) {
            return this
          }
          createNormals(DD) {
            const zD = this.getVerticesData(rD.k.PositionKind),
              wD = this.XpD();
            let pD;
            return pD = this.isVerticesDataPresent(rD.k.NormalKind) ? this.getVerticesData(rD.k.NormalKind) : [], LD.b.ComputeNormals(zD, wD, pD, {
              useRightHandedSystem: this.Ul().useRightHandedSystem
            }), this.setVerticesData(rD.k.NormalKind, pD, DD), this
          }
          async optimizeIndicesAsync() {
            const DD = this.XpD();
            if (!DD) return this;
            const {
              OptimizeIndices: zD
            } = await wD.e(351).then((() => wD(42423)));
            return zD(DD), this.setIndices(DD, this.getTotalVertices()), this
          }
          alignWithNormal(DD, zD) {
            zD || (zD = JD.e.Y);
            const wD = KD.n.WI[0],
              pD = KD.n.WI[1];
            return KD.s.CrossToRef(zD, DD, pD), KD.s.CrossToRef(DD, pD, wD), this.rotationQuaternion ? KD.i.RotationQuaternionFromAxisToRef(wD, DD, pD, this.rotationQuaternion) : KD.s.RotationFromAxisToRef(wD, DD, pD, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, GD.j)("EdgesRenderer")
          }
          enableEdgesRendering(DD, zD, wD) {
            throw (0, GD.j)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.XE.filter((DD => DD.emitter === this))
          }
        }, (() => {
          const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(UD[Symbol.metadata] ?? null) : void 0;
          zD = [QD.i.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, pD.i)(DD, null, zD, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: DD => "_ApplySkeleton" in DD,
              get: DD => DD._ApplySkeleton
            },
            metadata: wD
          }, null, fD), wD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wD
          })
        })(), DD.OCCLUSION_TYPE_NONE = ((0, pD.m)(DD, fD), 0), DD.OCCLUSION_TYPE_OPTIMISTIC = 1, DD.OCCLUSION_TYPE_STRICT = 2, DD.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, DD.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, DD.CULLINGSTRATEGY_STANDARD = 0, DD.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, DD.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, DD.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, DD.DefaultIsPickable = !0, DD
      })(),
      dD = !1;

    function SD() {
      dD || (dD = !0, (0, VD.i)("BABYLON.AbstractMesh", jD))
    }(fD = jD.prototype).createOrUpdateSubmeshesOctree ?? (fD.createOrUpdateSubmeshesOctree = (0, GD.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (ID = jD.prototype).getPhysicsImpostor ?? (ID.getPhysicsImpostor = (0, GD.h)("AbstractMesh", "getPhysicsImpostor")), (BD = jD.prototype).setPhysicsLinkWith ?? (BD.setPhysicsLinkWith = (0, GD.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(jD.prototype, "occlusionRetryCount") || Object.defineProperty(jD.prototype, "occlusionRetryCount", (0, GD.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(jD.prototype, "occlusionType") || Object.defineProperty(jD.prototype, "occlusionType", (0, GD.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(jD.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(jD.prototype, "occlusionQueryAlgorithmType", (0, GD.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(jD.prototype, "isOccluded") || Object.defineProperty(jD.prototype, "isOccluded", (0, GD.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(jD.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(jD.prototype, "isOcclusionQueryInProgress", (0, GD.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(jD.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(jD.prototype, "forceRenderingWhenOccluded", (0, GD.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(jD.prototype, "occlusionForRenderPassId") || Object.defineProperty(jD.prototype, "occlusionForRenderPassId", (0, GD.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(jD.prototype, "decalMap") || Object.defineProperty(jD.prototype, "decalMap", (0, GD.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(jD.prototype, "iW") || Object.defineProperty(jD.prototype, "iW", (0, GD.g)("AbstractMesh", "iW")), Object.getOwnPropertyDescriptor(jD.prototype, "physicsImpostor") || Object.defineProperty(jD.prototype, "physicsImpostor", (0, GD.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(jD.prototype, "showBoundingBox") || Object.defineProperty(jD.prototype, "showBoundingBox", (0, GD.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(jD.prototype, "edgesRenderer") || Object.defineProperty(jD.prototype, "edgesRenderer", (0, GD.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(jD.prototype, "renderOutline") || Object.defineProperty(jD.prototype, "renderOutline", (0, GD.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(jD.prototype, "renderOverlay") || Object.defineProperty(jD.prototype, "renderOverlay", (0, GD.g)("AbstractMesh", "renderOverlay"))
  },
  40354: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => hD
    });
    var pD = wD(37079),
      sD = wD(37273),
      KD = wD(40348),
      rD = wD(40066),
      LD = wD(40224),
      cD = wD(40359),
      gD = wD(40234),
      RD = wD(40027),
      AD = wD(38662),
      UD = wD(39944),
      fD = wD(40246),
      ID = wD(37110),
      BD = wD(40364),
      GD = wD(39984);
    class hD {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(DD) {
        this._boundingBias ? this._boundingBias.pC(DD) : this._boundingBias = DD.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(DD) {
        const zD = new hD(hD.RandomId(), DD.Ul());
        return zD.applyToMesh(DD), zD
      }
      get meshes() {
        return this._meshes
      }
      constructor(DD, zD, wD) {
        let sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new pD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new pD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = zD || ID.d.LastCreatedScene, this._scene && (this.id = DD, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.iI(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = sD, null !== rD && (this._totalVertices = rD), wD ? this.setAllVerticesData(wD, sD) : null === rD && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), KD && (this.applyToMesh(KD), KD.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Ul() {
        return this._scene
      }
      iI() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let DD = 0; DD < this._meshes.length; DD++)
          if (!this._meshes[DD].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const DD = new Set;
        for (const zD in this._vertexBuffers) DD.add(this._vertexBuffers[zD].getWrapperBuffer());
        DD.forEach((DD => {
          DD._rebuild()
        }))
      }
      setAllVerticesData(DD, zD) {
        DD.applyToGeometry(this, zD), this._notifyUpdate()
      }
      setVerticesData(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0;
        wD && Array.isArray(zD) && (zD = new Float32Array(zD));
        const sD = new rD.k(this._engine, zD, DD, {
          updatable: wD,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: pD,
          label: "Geometry_" + this.id + "_" + DD
        });
        this.setVerticesBuffer(sD)
      }
      removeVerticesData(DD) {
        this._vertexBuffers[DD] && (this._vertexBuffers[DD].dispose(), delete this._vertexBuffers[DD]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const sD = DD.getKind();
        this._vertexBuffers[sD] && wD && this._vertexBuffers[sD].dispose(), DD._buffer && DD._ownsBuffer && DD._buffer._increaseReferences(), this._vertexBuffers[sD] = DD;
        const KD = this._meshes,
          LD = KD.length;
        if (sD === rD.k.PositionKind) {
          this._totalVertices = zD ?? DD._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : DD.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const wD = this._extend && this._extend.minimum || new pD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            sD = this._extend && this._extend.maximum || new pD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let DD = 0; DD < LD; DD++) {
            const zD = KD[DD];
            zD.buildBoundingInfo(wD, sD), zD._createGlobalSubMesh(zD.isUnIndexed), zD.computeWorldMatrix(!0), zD.synchronizeInstances()
          }
        }
        this._notifyUpdate(sD)
      }
      updateVerticesDataDirectly(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const sD = this.getVertexBuffer(DD);
        sD && (sD.updateDirectly(zD, wD, pD), this._notifyUpdate(DD))
      }
      updateVerticesData(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this.getVertexBuffer(DD);
        pD && (pD.update(zD), DD === rD.k.PositionKind && this._updateBoundingInfo(wD, zD), this._notifyUpdate(DD))
      }
      _updateBoundingInfo(DD, zD) {
        if (DD && this._updateExtend(zD), this._resetPointsArrayCache(), DD) {
          const DD = this._meshes;
          for (const zD of DD) {
            zD.hasBoundingInfo ? zD.FW().reConstruct(this._extend.minimum, this._extend.maximum) : zD.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const DD = zD.QE;
            for (const zD of DD) zD.refreshBoundingInfo()
          }
        }
      }
      _bind(DD, zD, wD, pD) {
        if (!DD) return;
        void 0 === zD && (zD = this._indexBuffer);
        const sD = this.getVertexBuffers();
        if (!sD) return;
        if (zD != this._indexBuffer || !this._vertexArrayObjects && !pD) return void this._engine.bindBuffers(sD, zD, DD, wD);
        const KD = pD || this._vertexArrayObjects,
          rD = this._engine;
        KD[DD.key] || (KD[DD.key] = rD.recordVertexArrayObject(sD, zD, DD, wD)), rD.bindVertexArrayObject(KD[DD.key], zD)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(DD, zD, wD) {
        const pD = this.getVertexBuffer(DD);
        return pD ? pD.getFloatData(this._totalVertices, wD || zD && 1 !== this._meshes.length) : null
      }
      copyVerticesData(DD, zD) {
        const wD = this.getVertexBuffer(DD);
        if (!wD) return;
        zD[DD] || (zD[DD] = new Float32Array(this._totalVertices * wD.getSize()));
        const pD = wD.getData();
        pD && (0, GD.g)(pD, wD.getSize(), wD.type, wD.byteOffset, wD.byteStride, wD.normalized, this._totalVertices, zD[DD])
      }
      isVertexBufferUpdatable(DD) {
        const zD = this._vertexBuffers[DD];
        return !!zD && zD.isUpdatable()
      }
      getVertexBuffer(DD) {
        return this.isReady() ? this._vertexBuffers[DD] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(DD) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[DD] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(DD)
      }
      getVerticesDataKinds() {
        const DD = [];
        let zD;
        if (!this._vertexBuffers && this._delayInfo)
          for (zD in this._delayInfo) DD.push(zD);
        else
          for (zD in this._vertexBuffers) DD.push(zD);
        return DD
      }
      updateIndices(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const pD = DD.length !== this._indices.length;
            if (wD || (this._indices = DD.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, DD, zD), pD)
              for (const DD of this._meshes) DD._createGlobalSubMesh(!0)
          } else this.setIndices(DD, null, !0)
      }
      setIndexBuffer(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = DD, this._totalVertices = zD, this._totalIndices = wD, DD.is32Bits = null === pD ? zD > 65535 : pD;
        for (const sD of this._meshes) sD._createGlobalSubMesh(!0), sD.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = DD, this._indexBufferIsUpdatable = wD, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, wD, "Geometry_" + this.id + "_IndexBuffer")), void 0 != zD && (this._totalVertices = zD);
        for (const sD of this._meshes) sD._createGlobalSubMesh(!pD), sD.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      XpD(DD, zD) {
        if (!this.isReady()) return null;
        const wD = this._indices;
        return zD || DD && 1 !== this._meshes.length ? wD.slice() : wD
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        DD && this._vertexArrayObjects && this._vertexArrayObjects[DD.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[DD.key]), delete this._vertexArrayObjects[DD.key])
      }
      releaseForMesh(DD, zD) {
        const wD = this._meshes,
          pD = wD.indexOf(DD); - 1 !== pD && (wD.splice(pD, 1), this._vertexArrayObjects && DD._invalidateInstanceVertexArrayObject(), DD._geometry = null, 0 === wD.length && zD && this.dispose())
      }
      applyToMesh(DD) {
        if (DD._geometry === this) return;
        const zD = DD._geometry;
        zD && zD.releaseForMesh(DD), this._vertexArrayObjects && DD._invalidateInstanceVertexArrayObject();
        const wD = this._meshes;
        DD._geometry = this, DD._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), wD.push(DD), this.isReady() ? this._applyToMesh(DD) : this._boundingInfo && DD.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!DD && (DD = this.getVerticesData(rD.k.PositionKind), !DD)) return;
          this._extend = (0, fD.g)(DD, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(DD) {
        for (const zD in this._vertexBuffers) {
          const wD = this._vertexBuffers[zD];
          wD._buffer.getBuffer() || wD.create(), zD === rD.k.PositionKind && (this._extend || this._updateExtend(), DD.buildBoundingInfo(this._extend.minimum, this._extend.maximum), DD._createGlobalSubMesh(DD.isUnIndexed), DD._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), DD._syncGeometryWithMorphTargetManager(), DD.synchronizeInstances()
      }
      _notifyUpdate(DD) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, DD), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const zD of this._meshes) zD._markSubMeshesAsAttributesDirty()
      }
      load(DD, zD) {
        2 !== this.delayLoadState && (this.isReady() ? zD && zD() : (this.delayLoadState = 2, this._queueLoad(DD, zD)))
      }
      _queueLoad(DD, zD) {
        this.delayLoadingFile && (DD.addPendingData(this), (async () => {
          try {
            const wD = await DD._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void DD.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(wD), this), this.delayLoadState = 1, this._delayInfo = [], DD.removePendingData(this);
            const pD = this._meshes,
              sD = pD.length;
            for (let DD = 0; DD < sD; DD++) this._applyToMesh(pD[DD]);
            zD && zD()
          } catch (wD) {
            DD.removePendingData(this), DD.EX || AD.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${wD}`)
          }
        })())
      }
      toLeftHanded() {
        const DD = this.XpD(!1);
        if (null != DD && DD.length > 0) {
          for (let zD = 0; zD < DD.length; zD += 3) {
            const wD = DD[zD + 0];
            DD[zD + 0] = DD[zD + 2], DD[zD + 2] = wD
          }
          this.setIndices(DD)
        }
        const zD = this.getVerticesData(rD.k.PositionKind, !1);
        if (null != zD && zD.length > 0) {
          for (let DD = 0; DD < zD.length; DD += 3) zD[DD + 2] = -zD[DD + 2];
          this.setVerticesData(rD.k.PositionKind, zD, !1)
        }
        const wD = this.getVerticesData(rD.k.NormalKind, !1);
        if (null != wD && wD.length > 0) {
          for (let DD = 0; DD < wD.length; DD += 3) wD[DD + 2] = -wD[DD + 2];
          this.setVerticesData(rD.k.NormalKind, wD, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const DD = this.getVerticesData(rD.k.PositionKind);
        if (!DD || 0 === DD.length) return !1;
        for (let zD = 3 * this._positionsCache.length, wD = this._positionsCache.length; zD < DD.length; zD += 3, ++wD) this._positionsCache[wD] = pD.s.FromArray(DD, zD);
        for (let zD = 0, wD = 0; zD < DD.length; zD += 3, ++wD) this._positionsCache[wD].set(DD[0 + zD], DD[1 + zD], DD[2 + zD]);
        return this._positionsCache.length = DD.length / 3, this._positions = this._positionsCache, !0
      }
      EX() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const wD in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[wD]);
          this._vertexArrayObjects = {};
          const DD = this._meshes,
            zD = DD.length;
          for (let wD = 0; wD < zD; wD++) DD[wD]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const DD = this._meshes,
          zD = DD.length;
        let wD;
        for (wD = 0; wD < zD; wD++) this.releaseForMesh(DD[wD]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const pD in this._vertexBuffers) this._vertexBuffers[pD].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const DD = this._parentContainer.geometries.indexOf(this);
          DD > -1 && this._parentContainer.geometries.splice(DD, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(DD) {
        const zD = new hD(DD, this._scene),
          wD = this.XpD(void 0, !0);
        wD && zD.setIndices(wD);
        let pD, sD = !1;
        for (pD in this._vertexBuffers) {
          const DD = this.getVertexBuffer(pD),
            wD = DD.getData();
          if (!wD) continue;
          const KD = DD.isUpdatable(),
            LD = DD.getSize(),
            {
              type: cD,
              byteOffset: gD,
              byteStride: RD,
              normalized: AD
            } = DD;
          sD = sD || KD;
          let UD = this._totalVertices;
          if (DD.getIsInstanced()) {
            let DD;
            DD = wD instanceof Array ? 4 * wD.length : wD.byteLength, UD = DD / RD
          }
          const fD = (0, GD.r)(wD, LD, cD, gD, RD, UD, !0),
            ID = new rD.k(this._engine, fD, pD, {
              updatable: KD,
              useBytes: !1,
              stride: LD,
              size: LD,
              offset: 0,
              type: cD,
              normalized: AD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            });
          zD.setVerticesBuffer(ID, UD)
        }
        for (pD in zD._updatable = sD, zD.delayLoadState = this.delayLoadState, zD.delayLoadingFile = this.delayLoadingFile, zD._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) zD._delayInfo = zD._delayInfo || [], zD._delayInfo.push(pD);
        return zD._boundingInfo = new gD.b(this._extend.minimum, this._extend.maximum), zD
      }
      serialize() {
        const DD = {};
        return DD.id = this.id, DD.uniqueId = this.uniqueId, DD.updatable = this._updatable, UD.c && UD.c.HasTags(this) && (DD.tags = UD.c.GetTags(this)), DD
      }
      _toNumberArray(DD) {
        return Array.isArray(DD) ? DD : Array.prototype.slice.call(DD)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const DD in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, DD) && (this._vertexBuffers[DD]._buffer._data = null)
      }
      serializeVerticeData() {
        const DD = this.serialize();
        return this.isVerticesDataPresent(rD.k.PositionKind) && (DD.positions = this._toNumberArray(this.getVerticesData(rD.k.PositionKind)), this.isVertexBufferUpdatable(rD.k.PositionKind) && (DD.positionsUpdatable = !0)), this.isVerticesDataPresent(rD.k.NormalKind) && (DD.normals = this._toNumberArray(this.getVerticesData(rD.k.NormalKind)), this.isVertexBufferUpdatable(rD.k.NormalKind) && (DD.normalsUpdatable = !0)), this.isVerticesDataPresent(rD.k.TangentKind) && (DD.tangents = this._toNumberArray(this.getVerticesData(rD.k.TangentKind)), this.isVertexBufferUpdatable(rD.k.TangentKind) && (DD.tangentsUpdatable = !0)), this.isVerticesDataPresent(rD.k.UVKind) && (DD.uvs = this._toNumberArray(this.getVerticesData(rD.k.UVKind)), this.isVertexBufferUpdatable(rD.k.UVKind) && (DD.uvsUpdatable = !0)), this.isVerticesDataPresent(rD.k.UV2Kind) && (DD.uvs2 = this._toNumberArray(this.getVerticesData(rD.k.UV2Kind)), this.isVertexBufferUpdatable(rD.k.UV2Kind) && (DD.uvs2Updatable = !0)), this.isVerticesDataPresent(rD.k.UV3Kind) && (DD.uvs3 = this._toNumberArray(this.getVerticesData(rD.k.UV3Kind)), this.isVertexBufferUpdatable(rD.k.UV3Kind) && (DD.uvs3Updatable = !0)), this.isVerticesDataPresent(rD.k.UV4Kind) && (DD.uvs4 = this._toNumberArray(this.getVerticesData(rD.k.UV4Kind)), this.isVertexBufferUpdatable(rD.k.UV4Kind) && (DD.uvs4Updatable = !0)), this.isVerticesDataPresent(rD.k.UV5Kind) && (DD.uvs5 = this._toNumberArray(this.getVerticesData(rD.k.UV5Kind)), this.isVertexBufferUpdatable(rD.k.UV5Kind) && (DD.uvs5Updatable = !0)), this.isVerticesDataPresent(rD.k.UV6Kind) && (DD.uvs6 = this._toNumberArray(this.getVerticesData(rD.k.UV6Kind)), this.isVertexBufferUpdatable(rD.k.UV6Kind) && (DD.uvs6Updatable = !0)), this.isVerticesDataPresent(rD.k.ColorKind) && (DD.colors = this._toNumberArray(this.getVerticesData(rD.k.ColorKind)), this.isVertexBufferUpdatable(rD.k.ColorKind) && (DD.colorsUpdatable = !0)), this.isVerticesDataPresent(rD.k.MatricesIndicesKind) && (DD.matricesIndices = this._toNumberArray(this.getVerticesData(rD.k.MatricesIndicesKind)), DD.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(rD.k.MatricesIndicesKind) && (DD.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(rD.k.MatricesWeightsKind) && (DD.matricesWeights = this._toNumberArray(this.getVerticesData(rD.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(rD.k.MatricesWeightsKind) && (DD.matricesWeightsUpdatable = !0)), DD.indices = this._toNumberArray(this.XpD()), DD
      }
      static ExtractFromMesh(DD, zD) {
        const wD = DD._geometry;
        return wD ? wD.copy(zD) : null
      }
      static RandomId() {
        return RD.h.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(DD, zD) {
        for (let wD = 0; wD < zD.geometries.length; wD++)
          if (zD.geometries[wD]._loadedUniqueId === DD) return zD.geometries[wD];
        return null
      }
      static _ImportGeometry(DD, zD) {
        const wD = zD.Ul(),
          pD = DD.geometryUniqueId,
          KD = DD.geometryId;
        if (pD || KD) {
          const DD = pD ? this._GetGeometryByLoadedUniqueId(pD, wD) : wD.getGeometryById(KD);
          DD && DD.applyToMesh(zD)
        } else if (DD instanceof ArrayBuffer) {
          const wD = zD._binaryInfo;
          if (wD.positionsAttrDesc && wD.positionsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.positionsAttrDesc.offset, wD.positionsAttrDesc.count);
            zD.setVerticesData(rD.k.PositionKind, pD, !1)
          }
          if (wD.normalsAttrDesc && wD.normalsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.normalsAttrDesc.offset, wD.normalsAttrDesc.count);
            zD.setVerticesData(rD.k.NormalKind, pD, !1)
          }
          if (wD.tangetsAttrDesc && wD.tangetsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.tangetsAttrDesc.offset, wD.tangetsAttrDesc.count);
            zD.setVerticesData(rD.k.TangentKind, pD, !1)
          }
          if (wD.uvsAttrDesc && wD.uvsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvsAttrDesc.offset, wD.uvsAttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UVKind, pD, !1)
          }
          if (wD.uvs2AttrDesc && wD.uvs2AttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvs2AttrDesc.offset, wD.uvs2AttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UV2Kind, pD, !1)
          }
          if (wD.uvs3AttrDesc && wD.uvs3AttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvs3AttrDesc.offset, wD.uvs3AttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UV3Kind, pD, !1)
          }
          if (wD.uvs4AttrDesc && wD.uvs4AttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvs4AttrDesc.offset, wD.uvs4AttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UV4Kind, pD, !1)
          }
          if (wD.uvs5AttrDesc && wD.uvs5AttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvs5AttrDesc.offset, wD.uvs5AttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UV5Kind, pD, !1)
          }
          if (wD.uvs6AttrDesc && wD.uvs6AttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.uvs6AttrDesc.offset, wD.uvs6AttrDesc.count);
            if (BD.e)
              for (let DD = 1; DD < pD.length; DD += 2) pD[DD] = 1 - pD[DD];
            zD.setVerticesData(rD.k.UV6Kind, pD, !1)
          }
          if (wD.colorsAttrDesc && wD.colorsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.colorsAttrDesc.offset, wD.colorsAttrDesc.count);
            zD.setVerticesData(rD.k.ColorKind, pD, !1, wD.colorsAttrDesc.stride)
          }
          if (wD.matricesIndicesAttrDesc && wD.matricesIndicesAttrDesc.count > 0) {
            const pD = new Int32Array(DD, wD.matricesIndicesAttrDesc.offset, wD.matricesIndicesAttrDesc.count),
              sD = [];
            for (let DD = 0; DD < pD.length; DD++) {
              const zD = pD[DD];
              sD.push(255 & zD), sD.push((65280 & zD) >> 8), sD.push((16711680 & zD) >> 16), sD.push(zD >> 24 & 255)
            }
            zD.setVerticesData(rD.k.MatricesIndicesKind, sD, !1)
          }
          if (wD.matricesIndicesExtraAttrDesc && wD.matricesIndicesExtraAttrDesc.count > 0) {
            const pD = new Int32Array(DD, wD.matricesIndicesExtraAttrDesc.offset, wD.matricesIndicesExtraAttrDesc.count),
              sD = [];
            for (let DD = 0; DD < pD.length; DD++) {
              const zD = pD[DD];
              sD.push(255 & zD), sD.push((65280 & zD) >> 8), sD.push((16711680 & zD) >> 16), sD.push(zD >> 24 & 255)
            }
            zD.setVerticesData(rD.k.MatricesIndicesExtraKind, sD, !1)
          }
          if (wD.matricesWeightsAttrDesc && wD.matricesWeightsAttrDesc.count > 0) {
            const pD = new Float32Array(DD, wD.matricesWeightsAttrDesc.offset, wD.matricesWeightsAttrDesc.count);
            zD.setVerticesData(rD.k.MatricesWeightsKind, pD, !1)
          }
          if (wD.indicesAttrDesc && wD.indicesAttrDesc.count > 0) {
            const pD = new Int32Array(DD, wD.indicesAttrDesc.offset, wD.indicesAttrDesc.count);
            zD.setIndices(pD, null)
          }
          if (wD.subMeshesAttrDesc && wD.subMeshesAttrDesc.count > 0) {
            const pD = new Int32Array(DD, wD.subMeshesAttrDesc.offset, 5 * wD.subMeshesAttrDesc.count);
            zD.QE = [];
            for (let DD = 0; DD < wD.subMeshesAttrDesc.count; DD++) {
              const wD = pD[5 * DD + 0],
                sD = pD[5 * DD + 1],
                KD = pD[5 * DD + 2],
                rD = pD[5 * DD + 3],
                cD = pD[5 * DD + 4];
              LD.b.AddToMesh(wD, sD, KD, rD, cD, zD)
            }
          }
        } else if (DD.positions && DD.normals && DD.indices) {
          if (zD.setVerticesData(rD.k.PositionKind, DD.positions, DD.positions._updatable || DD.positionsUpdatable), zD.setVerticesData(rD.k.NormalKind, DD.normals, DD.normals._updatable || DD.normalsUpdatable), DD.tangents && zD.setVerticesData(rD.k.TangentKind, DD.tangents, DD.tangents._updatable || DD.tangentsUpdatable), DD.uvs && zD.setVerticesData(rD.k.UVKind, DD.uvs, DD.uvs._updatable || DD.uvsUpdatable), DD.uvs2 && zD.setVerticesData(rD.k.UV2Kind, DD.uvs2, DD.uvs2._updatable || DD.uvs2Updatable), DD.uvs3 && zD.setVerticesData(rD.k.UV3Kind, DD.uvs3, DD.uvs3._updatable || DD.uvs3Updatable), DD.uvs4 && zD.setVerticesData(rD.k.UV4Kind, DD.uvs4, DD.uvs4._updatable || DD.uvs4Updatable), DD.uvs5 && zD.setVerticesData(rD.k.UV5Kind, DD.uvs5, DD.uvs5._updatable || DD.uvs5Updatable), DD.uvs6 && zD.setVerticesData(rD.k.UV6Kind, DD.uvs6, DD.uvs6._updatable || DD.uvs6Updatable), DD.colors && zD.setVerticesData(rD.k.ColorKind, sD.h.CheckColors4(DD.colors, DD.positions.length / 3), DD.colors._updatable), DD.matricesIndices)
            if (DD.matricesIndices._isExpanded || DD.matricesIndicesExpanded) delete DD.matricesIndices._isExpanded, delete DD.matricesIndicesExpanded, zD.setVerticesData(rD.k.MatricesIndicesKind, DD.matricesIndices, DD.matricesIndices._updatable || DD.matricesIndicesUpdatable);
            else {
              const wD = [];
              for (let zD = 0; zD < DD.matricesIndices.length; zD++) {
                const pD = DD.matricesIndices[zD];
                wD.push(255 & pD), wD.push((65280 & pD) >> 8), wD.push((16711680 & pD) >> 16), wD.push(pD >> 24 & 255)
              }
              zD.setVerticesData(rD.k.MatricesIndicesKind, wD, DD.matricesIndices._updatable || DD.matricesIndicesUpdatable)
            } if (DD.matricesIndicesExtra)
            if (DD.matricesIndicesExtraExpanded || DD.matricesIndicesExtra._isExpanded) delete DD.matricesIndices._isExpanded, delete DD.matricesIndicesExtraExpanded, zD.setVerticesData(rD.k.MatricesIndicesExtraKind, DD.matricesIndicesExtra, DD.matricesIndicesExtra._updatable || DD.matricesIndicesExtraUpdatable);
            else {
              const wD = [];
              for (let zD = 0; zD < DD.matricesIndicesExtra.length; zD++) {
                const pD = DD.matricesIndicesExtra[zD];
                wD.push(255 & pD), wD.push((65280 & pD) >> 8), wD.push((16711680 & pD) >> 16), wD.push(pD >> 24 & 255)
              }
              zD.setVerticesData(rD.k.MatricesIndicesExtraKind, wD, DD.matricesIndicesExtra._updatable || DD.matricesIndicesExtraUpdatable)
            } DD.matricesWeights && (hD._CleanMatricesWeights(DD, zD), zD.setVerticesData(rD.k.MatricesWeightsKind, DD.matricesWeights, DD.matricesWeights._updatable)), DD.matricesWeightsExtra && zD.setVerticesData(rD.k.MatricesWeightsExtraKind, DD.matricesWeightsExtra, DD.matricesWeights._updatable), zD.setIndices(DD.indices, null)
        }
        if (DD.QE) {
          zD.QE = [];
          for (let wD = 0; wD < DD.QE.length; wD++) {
            const pD = DD.QE[wD];
            LD.b.AddToMesh(pD.materialIndex, pD.verticesStart, pD.verticesCount, pD.indexStart, pD.indexCount, zD)
          }
        }
        zD._shouldGenerateFlatShading && (zD.convertToFlatShadedMesh(), zD._shouldGenerateFlatShading = !1), zD.computeWorldMatrix(!0), wD.onMeshImportedObservable.notifyObservers(zD)
      }
      static _CleanMatricesWeights(DD, zD) {
        const wD = .001;
        if (!cD.d.CleanBoneMatrixWeights) return;
        let pD;
        if (!(DD.skeletonId > -1)) return;
        {
          const wD = zD.Ul().getLastSkeletonById(DD.skeletonId);
          if (!wD) return;
          pD = wD.bones.length
        }
        const sD = zD.getVerticesData(rD.k.MatricesIndicesKind),
          KD = zD.getVerticesData(rD.k.MatricesIndicesExtraKind),
          LD = DD.matricesWeights,
          gD = DD.matricesWeightsExtra,
          RD = DD.numBoneInfluencer,
          AD = LD.length;
        for (let rD = 0; rD < AD; rD += 4) {
          let DD = 0,
            zD = -1;
          for (let pD = 0; pD < 4; pD++) {
            const sD = LD[rD + pD];
            DD += sD, sD < wD && zD < 0 && (zD = pD)
          }
          if (gD)
            for (let pD = 0; pD < 4; pD++) {
              const sD = gD[rD + pD];
              DD += sD, sD < wD && zD < 0 && (zD = pD + 4)
            }
          if ((zD < 0 || zD > RD - 1) && (zD = RD - 1), DD > wD) {
            const zD = 1 / DD;
            for (let DD = 0; DD < 4; DD++) LD[rD + DD] *= zD;
            if (gD)
              for (let DD = 0; DD < 4; DD++) gD[rD + DD] *= zD
          } else zD >= 4 ? (gD[rD + zD - 4] = 1 - DD, KD[rD + zD - 4] = pD) : (LD[rD + zD] = 1 - DD, sD[rD + zD] = pD)
        }
        zD.setVerticesData(rD.k.MatricesIndicesKind, sD), DD.matricesWeightsExtra && zD.setVerticesData(rD.k.MatricesIndicesExtraKind, KD)
      }
      static Parse(DD, zD, wD) {
        const sD = new hD(DD.id, zD, void 0, DD.updatable);
        return sD._loadedUniqueId = DD.uniqueId, UD.c && UD.c.AddTagsTo(sD, DD.tags), DD.delayLoadingFile ? (sD.delayLoadState = 4, sD.delayLoadingFile = wD + DD.delayLoadingFile, sD._boundingInfo = new gD.b(pD.s.FromArray(DD.boundingBoxMinimum), pD.s.FromArray(DD.boundingBoxMaximum)), sD._delayInfo = [], DD.hasUVs && sD._delayInfo.push(rD.k.UVKind), DD.hasUVs2 && sD._delayInfo.push(rD.k.UV2Kind), DD.hasUVs3 && sD._delayInfo.push(rD.k.UV3Kind), DD.hasUVs4 && sD._delayInfo.push(rD.k.UV4Kind), DD.hasUVs5 && sD._delayInfo.push(rD.k.UV5Kind), DD.hasUVs6 && sD._delayInfo.push(rD.k.UV6Kind), DD.hasColors && sD._delayInfo.push(rD.k.ColorKind), DD.hasMatricesIndices && sD._delayInfo.push(rD.k.MatricesIndicesKind), DD.hasMatricesWeights && sD._delayInfo.push(rD.k.MatricesWeightsKind), sD._delayLoadingFunction = KD.b.ImportVertexData) : KD.b.ImportVertexData(DD, sD), zD.pushGeometry(sD, !0), sD
      }
    }
  },
  40394: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD,
      h: () => ID
    });
    var pD = wD(37079),
      sD = wD(38662),
      KD = wD(40368),
      rD = wD(40335),
      LD = wD(38658),
      cD = wD(40372),
      gD = wD(40066),
      RD = wD(37134);
    class AD extends KD.e {
      constructor(DD, zD) {
        super(DD, zD.Ul()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, zD.o4(this), this._sourceMesh = zD, this._unIndexed = zD._unIndexed, this.position.pC(zD.position), this.rotation.pC(zD.rotation), this.rc.pC(zD.rc), zD.rotationQuaternion && (this.rotationQuaternion = zD.rotationQuaternion.clone()), this.animations = zD.animations.slice();
        for (const wD of zD.getAnimationRanges()) null != wD && this.createAnimationRange(wD.name, wD.from, wD.to);
        if (this.infiniteDistance = zD.infiniteDistance, this.setPivotMatrix(zD.getPivotMatrix()), zD.skeleton || zD.morphTargetManager || !zD.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const DD = zD.FW();
          this.buildBoundingInfo(DD.minimum, DD.maximum)
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
      set receiveShadows(DD) {
        this._sourceMesh?.receiveShadows !== DD && sD.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(DD) {
        this._sourceMesh?.material !== DD && sD.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(DD) {
        this._sourceMesh?.visibility !== DD && sD.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(DD) {
        this._sourceMesh?.skeleton !== DD && sD.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(DD) {
        this._sourceMesh && DD !== this._sourceMesh.renderingGroupId && sD.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(DD) {
        this._sourceMesh && DD !== this._sourceMesh.meshBlendingTag && sD.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get nsD() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(DD) {
        return this._sourceMesh.createInstance(DD)
      }
      isReady() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(DD, !0)
      }
      getVerticesData(DD, zD, wD) {
        return this._sourceMesh.getVerticesData(DD, zD, wD)
      }
      copyVerticesData(DD, zD) {
        this._sourceMesh.copyVerticesData(DD, zD)
      }
      getVertexBuffer(DD, zD) {
        return this._sourceMesh.getVertexBuffer(DD, zD)
      }
      setVerticesData(DD, zD, wD, pD) {
        return this.nsD && this.nsD.setVerticesData(DD, zD, wD, pD), this.nsD
      }
      updateVerticesData(DD, zD, wD, pD) {
        return this.nsD && this.nsD.updateVerticesData(DD, zD, wD, pD), this.nsD
      }
      setIndices(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.nsD && this.nsD.setIndices(DD, zD), this.nsD
      }
      isVerticesDataPresent(DD) {
        return this._sourceMesh.isVerticesDataPresent(DD)
      }
      XpD() {
        return this._sourceMesh.XpD()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let DD, zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.FW().isLocked) return this;
        DD = "object" === typeof zD ? zD : {
          applySkeleton: zD,
          applyMorph: wD
        };
        const pD = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(DD, null, gD.k.PositionKind), pD), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(DD, zD) {
        if (super._activate(DD, zD), this._sourceMesh.QE || sD.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, DD), zD) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== cD.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new pD.e);
          const DD = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, pD.n.WI[7].pC(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.pC(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.pC(pD.n.WI[7]), this._currentLOD._masterMesh = DD, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Gl() {
        return !0
      }
      getLOD(DD) {
        if (!DD) return this;
        const zD = this.nsD.getLODLevels();
        if (zD && 0 !== zD.length) {
          const zD = this.FW();
          this._currentLOD = this.nsD.getLOD(DD, zD.FpD)
        } else this._currentLOD = this.nsD;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(DD) {
        return this.nsD._preActivateForIntermediateRendering(DD)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.QE)
          for (let DD = 0; DD < this._sourceMesh.QE.length; DD++) this._sourceMesh.QE[DD].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.FW().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(DD);
        if (LD.e.DeepCopy(this, pD, ["name", "QE", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "nsD", "Gl", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "hsD", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LLD", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), zD && (pD.parent = zD), !wD)
          for (let sD = 0; sD < this.Ul().meshes.length; sD++) {
            const DD = this.Ul().meshes[sD];
            DD.parent === this && DD.clone(DD.name, pD)
          }
        return pD.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(pD), pD
      }
      dispose(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.B5(this), super.dispose(DD, zD)
      }
      _serializeAsParent(DD) {
        super._serializeAsParent(DD), DD.parentId = this._sourceMesh.uniqueId, DD.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0, zD && zD.newSourcedMesh);
        pD && wD && wD(this, pD);
        for (const sD of this.getChildTransformNodes(!0)) sD.instantiateHierarchy(pD, zD, wD);
        return pD
      }
    }
    let UD = !1;

    function fD(DD, zD, wD, pD, sD) {
      for (let KD = 0; KD < zD.length; KD++) {
        const rD = DD[zD[KD]] ?? 0,
          LD = sD + wD[KD];
        rD.toArray ? rD.toArray(pD, LD) : rD.copyToArray ? rD.copyToArray(pD, LD) : pD[LD] = rD
      }
    }

    function ID() {
      UD || (UD = !0, rD.e._instancedMeshFactory = (DD, zD) => {
        const wD = new AD(DD, zD);
        if (zD.iW) {
          wD.iW = {};
          for (const DD in zD.iW) wD.iW[DD] = zD.iW[DD]
        }
        return wD
      }, rD.e.prototype.dW = function(DD, zD) {
        if (!this.iW) {
          this.iW = {};
          for (const DD of this.instances) DD.iW = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.iI().getCaps().vertexArrayObject ? {} : void 0
        }), this.iW[DD] = null, this._userInstancedBuffersStorage.strides[DD] = zD;
        const wD = this._userInstancedBuffersStorage;
        wD.interleavedKinds = [], wD.interleavedOffsets = [], wD.interleavedRowStride = 0;
        for (const pD in wD.strides) wD.interleavedKinds.push(pD), wD.interleavedOffsets.push(wD.interleavedRowStride), wD.interleavedRowStride += wD.strides[pD];
        wD.interleavedData = new Float32Array(32 * wD.interleavedRowStride);
        for (const pD in wD.interleavedBuffers) wD.interleavedBuffers[pD].buffer.dispose();
        wD.interleavedBuffers = {}, wD.vertexBuffers[DD] = null;
        for (const pD of this.instances) pD.iW[DD] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, rD.e.prototype._processInstancedBuffers = function(DD, zD) {
        const wD = this._userInstancedBuffersStorage,
          pD = wD.interleavedRowStride;
        if (!pD) return;
        const sD = DD ? DD.length : 0,
          KD = (sD + 1) * pD;
        let rD = wD.interleavedData;
        if (rD.length < KD) {
          let DD = rD.length;
          for (; DD < KD;) DD *= 2;
          rD = wD.interleavedData = new Float32Array(DD)
        }
        const LD = wD.interleavedKinds,
          cD = wD.interleavedOffsets;
        let RD = 0;
        zD && (fD(this.iW, LD, cD, rD, RD), RD += pD);
        for (let gD = 0; gD < sD; gD++) fD(DD[gD].iW, LD, cD, rD, RD), RD += pD;
        let AD = "shared",
          UD = wD.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (AD = this._instanceDataStorage.engine.currentRenderPassId, wD.renderPasses || (wD.renderPasses = {}), wD.renderPasses[AD] || (wD.renderPasses[AD] = {}), UD = wD.renderPasses[AD]);
        const ID = wD.interleavedBuffers[AD];
        let BD = !ID || ID.data !== rD;
        for (let gD = 0; !BD && gD < LD.length; gD++) BD = !UD[LD[gD]];
        if (!BD) return void ID.buffer.updateDirectly(rD, 0);
        ID?.buffer.dispose();
        const GD = new gD.b(this.iI(), rD, !0, pD, !1, !0);
        for (let gD = 0; gD < LD.length; gD++) {
          const DD = LD[gD],
            zD = GD.createVertexBuffer(DD, cD[gD], wD.strides[DD]);
          zD.hashCode += zD.byteOffset * 2 ** 24, UD[DD] = zD
        }
        wD.interleavedBuffers[AD] = {
          buffer: GD,
          data: rD
        }, this._invalidateInstanceVertexArrayObject()
      }, rD.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const DD in this._userInstancedBuffersStorage.vertexArrayObjects) this.iI().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[DD]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, rD.e.prototype._disposeInstanceSpecificData = function() {
        for (const zD in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[zD].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const zD in this.iW) this._userInstancedBuffersStorage.vertexBuffers[zD] && this._userInstancedBuffersStorage.vertexBuffers[zD].dispose();
        const DD = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (DD) {
          for (const zD in DD) DD[zD].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.iW = {}
      }, (0, RD.i)("BABYLON.InstancedMesh", AD))
    }
  },
  40335: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => YD,
      g: () => qD,
      k: () => eD
    });
    var pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD = wD(37119),
      nD = wD(40027),
      MD = wD(39960),
      OD = wD(38658),
      JD = wD(39944),
      ED = wD(40342),
      QD = wD(40148),
      XD = wD(37079),
      VD = wD(37273),
      PD = wD(40155),
      CD = wD(40066),
      xD = wD(40348),
      TD = wD(40354),
      bD = wD(40368),
      jD = wD(40224),
      dD = wD(40220),
      SD = wD(40307),
      iD = wD(40380),
      lD = wD(40359),
      WD = wD(39939),
      ND = wD(38662),
      ZD = wD(37134),
      yD = wD(39808),
      kD = wD(40097);
    class mD {
      constructor(DD, zD) {
        this.distanceOrScreenCoverage = DD, this.mesh = zD
      }
    }
    class eD {}
    class oD {
      constructor() {
        this.batchCache = new uD(this), this.batchCacheReplacementModeInFrozenMode = new uD(this), this.instancesBufferSize = 2048
      }
    }
    class aD {
      constructor() {
        this.renderPasses = {}
      }
    }
    class uD {
      constructor(DD) {
        this.parent = DD, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class vD {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class tD {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const FD = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class YD extends bD.e {
      static _GetDefaultSideOrientation(DD) {
        return DD || YD.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(DD) {
        this._internalMeshDataInfo._useLODScreenCoverage = DD, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(DD) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== DD && (DD && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(CD.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(CD.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = DD, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new hD.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new hD.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new hD.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new hD.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new hD.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(DD) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(DD)
      }
      get hsD() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(DD) {
        this._internalMeshDataInfo._forcedInstanceCount = DD
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(DD) {
        this._internalMeshDataInfo._sideOrientation = DD, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === DD || !this._scene.useRightHandedSystem && 0 === DD
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(DD) {
        this.sideOrientation = DD, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(DD) {
        this._internalMeshDataInfo._overrideRenderingFillMode = DD
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(DD) {
        DD && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (DD.sideOrientation = null), this._setMaterial(DD)
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
      set isUnIndexed(DD) {
        this._unIndexed !== DD && (this._unIndexed = DD, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const DD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return DD ? DD.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const DD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return DD ? DD.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(DD) {
        this._instanceDataStorage.manualUpdate = DD
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(DD) {
        this._instanceDataStorage.previousManualUpdate = DD
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(DD) {
        this._instanceDataStorage.forceMatrixUpdates = DD
      }
      _copySource(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const sD = this.Ul();
        if (DD._geometry && DD._geometry.applyToMesh(this), OD.e.DeepCopy(DD, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "hsD", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Gl", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LLD", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = DD, sD.useClonedMeshMap && (DD._internalMeshDataInfo.meshMap || (DD._internalMeshDataInfo.meshMap = {}), DD._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = DD._originalBuilderSideOrientation, this._creationDataStorage = DD._creationDataStorage, DD._ranges) {
          const zD = DD._ranges;
          for (const DD in zD) Object.prototype.hasOwnProperty.call(zD, DD) && zD[DD] && this.createAnimationRange(DD, zD[DD].from, zD[DD].to)
        }
        if (DD.metadata && DD.metadata.clone ? this.metadata = DD.metadata.clone() : this.metadata = DD.metadata, this._internalMetadata = DD._internalMetadata, this.meshBlendingTag = DD.meshBlendingTag, JD.c && JD.c.HasTags(DD) && JD.c.AddTagsTo(this, JD.c.GetTags(DD, !0)), this.nC(DD.isEnabled(!1)), this.parent = DD.parent, this.setPivotMatrix(DD.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + DD.id, this.material = DD.material, !zD) {
          const sD = DD.getDescendants(!0);
          for (let DD = 0; DD < sD.length; DD++) {
            const KD = sD[DD];
            KD._isMesh ? (FD.parent = this, FD.doNotCloneChildren = zD, FD.clonePhysicsImpostor = wD, FD.cloneThinInstances = pD, KD.clone(this.name + "." + KD.name, FD)) : KD.clone && KD.clone(this.name + "." + KD.name, this)
          }
        }
        if (DD.morphTargetManager && (this.morphTargetManager = DD.morphTargetManager), (0, yD.d)(sD.getPhysicsEngine)) {
          const zD = sD.getPhysicsEngine();
          if (wD && zD)
            if (1 === zD.getPluginVersion()) {
              const wD = zD.getImpostorForPhysicsObject(DD);
              wD && (this.physicsImpostor = wD.clone(this))
            } else 2 === zD.getPluginVersion() && DD.physicsBody && DD.physicsBody.clone(this)
        }
        for (let KD = 0; KD < sD.XE.length; KD++) {
          const zD = sD.XE[KD];
          zD.emitter === DD && zD.clone(zD.name, this)
        }
        if (this.skeleton = DD.skeleton, pD && (DD._thinInstanceDataStorage.matrixData ? (this.f6("matrix", new Float32Array(DD._thinInstanceDataStorage.matrixData), 16, !DD._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = DD._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = DD._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = DD._thinInstanceDataStorage.matrixBufferSize, DD._userThinInstanceBuffersStorage)) {
          const zD = DD._userThinInstanceBuffersStorage;
          for (const DD in zD.data) this.f6(DD, new Float32Array(zD.data[DD]), zD.strides[DD], !zD.vertexBuffers?.[DD]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[DD] = zD.sizes[DD]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(DD) {
        let zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          KD = arguments.length > 4 ? arguments[4] : void 0,
          rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(DD, wD), this._internalMeshDataInfo = new tD, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new vD, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = YD.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, wD = this.Ul(), this._instanceDataStorage = new aD, this._instanceDataStorage.engine = wD.iI(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new oD), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (DD, zD, wD) => {
          DD && wD && (this._uniformBuffer ? this.transferToEffect(zD) : wD.bindOnlyWorldMatrix(zD))
        };
        let LD = !1;
        if (pD && void 0 === pD._addToSceneRootNodes) {
          const DD = pD;
          zD = DD.parent ?? null, sD = DD.source ?? null, KD = DD.doNotCloneChildren ?? !1, rD = DD.clonePhysicsImpostor ?? !0, LD = DD.cloneThinInstances ?? !1
        } else zD = pD;
        sD && this._copySource(sD, KD, rD, LD), null !== zD && (this.parent = zD), this._instanceDataStorage.hardwareInstancedRendering = this.iI().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = DD => {
          DD.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new hD.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), sD && sD.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = 0 === this.getTotalVertices() || zD && zD.doNotInstantiate && (!0 === zD.doNotInstantiate || zD.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        pD.parent = DD || this.parent, pD.position = this.position.clone(), pD.rc = this.rc.clone(), this.rotationQuaternion ? pD.rotationQuaternion = this.rotationQuaternion.clone() : pD.rotation = this.rotation.clone(), wD && wD(this, pD);
        for (const sD of this.getChildTransformNodes(!0)) "InstancedMesh" === sD.getClassName() && "Mesh" === pD.getClassName() && sD.nsD === this ? sD.instantiateHierarchy(pD, {
          doNotInstantiate: zD && zD.doNotInstantiate || !1,
          newSourcedMesh: pD
        }, wD) : sD.instantiateHierarchy(pD, zD, wD);
        return pD
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(DD) {
        let zD = super.toString(DD);
        if (zD += ", n vertices: " + this.getTotalVertices(), zD += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let wD = 0; wD < this.animations.length; wD++) zD += ", animation[0]: " + this.animations[wD].toString(DD);
        if (DD)
          if (this._geometry) {
            const DD = this.XpD(),
              wD = this.getVerticesData(CD.k.PositionKind);
            wD && DD && (zD += ", flat shading: " + (wD.length / 3 === DD.length ? "YES" : "NO"))
          } else zD += ", flat shading: UNKNOWN";
        return zD
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const DD of this.instances) DD._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const DD = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((zD, wD) => zD.distanceOrScreenCoverage < wD.distanceOrScreenCoverage ? DD : zD.distanceOrScreenCoverage > wD.distanceOrScreenCoverage ? -DD : 0))
      }
      addLODLevel(DD, zD) {
        if (zD && zD._masterMesh) return ND.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const wD = new mD(DD, zD);
        return this._internalMeshDataInfo._LODLevels.push(wD), zD && (zD._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(DD) {
        const zD = this._internalMeshDataInfo;
        for (let wD = 0; wD < zD._LODLevels.length; wD++) {
          const pD = zD._LODLevels[wD];
          if (pD.distanceOrScreenCoverage === DD) return pD.mesh
        }
        return null
      }
      removeLODLevel(DD) {
        const zD = this._internalMeshDataInfo;
        for (let wD = 0; wD < zD._LODLevels.length; wD++) zD._LODLevels[wD].mesh === DD && (zD._LODLevels.splice(wD, 1), DD && (DD._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(DD, zD) {
        const wD = this._internalMeshDataInfo;
        if (!wD._LODLevels || 0 === wD._LODLevels.length) return this;
        const pD = zD || this.FW().FpD,
          sD = DD.mode === QD.c.ORTHOGRAPHIC_CAMERA ? DD.minZ : pD.centerWorld.subtract(DD.globalPosition).length();
        let KD = sD,
          rD = 1;
        if (wD._useLODScreenCoverage) {
          const zD = DD.screenArea;
          let wD = pD.radiusWorld * DD.minZ / sD;
          wD = wD * wD * Math.PI, KD = wD / zD, rD = -1
        }
        if (rD * wD._LODLevels[wD._LODLevels.length - 1].distanceOrScreenCoverage > rD * KD) return this.onLODLevelSelection && this.onLODLevelSelection(KD, this, this), this;
        for (let LD = 0; LD < wD._LODLevels.length; LD++) {
          const DD = wD._LODLevels[LD];
          if (rD * DD.distanceOrScreenCoverage < rD * KD) {
            if (DD.mesh) {
              if (4 === DD.mesh.delayLoadState) return DD.mesh._checkDelayState(), this;
              if (2 === DD.mesh.delayLoadState) return this;
              DD.mesh._preActivate(), DD.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(KD, this, DD.mesh), DD.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(KD, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(DD, zD, wD, pD) {
        if (!this._geometry) return null;
        let sD = pD ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[DD]?.getFloatData(this.instances.length + 1, wD || zD && 1 !== this._geometry.meshes.length);
        return sD || (sD = this._geometry.getVerticesData(DD, zD, wD)), sD
      }
      copyVerticesData(DD, zD) {
        this._geometry && this._geometry.copyVerticesData(DD, zD)
      }
      getVertexBuffer(DD, zD) {
        return this._geometry ? (zD ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[DD]) ?? this._geometry.getVertexBuffer(DD) : null
      }
      isVerticesDataPresent(DD, zD) {
        return this._geometry ? !zD && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[DD] || this._geometry.isVerticesDataPresent(DD) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(DD)
      }
      isVertexBufferUpdatable(DD, zD) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(DD);
        if (!zD) {
          const zD = this._userInstancedBuffersStorage?.vertexBuffers[DD];
          if (zD) return zD.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(DD)
      }
      getVerticesDataKinds(DD) {
        if (!this._geometry) {
          const DD = [];
          if (this._delayInfo)
            for (const zD of this._delayInfo) DD.push(zD);
          return DD
        }
        const zD = this._geometry.getVerticesDataKinds();
        if (!DD && this._userInstancedBuffersStorage)
          for (const wD in this._userInstancedBuffersStorage.vertexBuffers) - 1 === zD.indexOf(wD) && zD.push(wD);
        return zD
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      XpD(DD, zD) {
        return this._geometry ? this._geometry.XpD(DD, zD) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(DD)) return !1;
        if (!this.QE || 0 === this.QE.length) return !0;
        if (!DD) return !0;
        const wD = this.iI(),
          pD = this.Ul(),
          sD = zD || wD.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const KD = this.material || pD.defaultMaterial;
        if (KD)
          if (KD._storeEffectOnSubMeshes)
            for (const LD of this.QE) {
              const DD = LD.yI();
              if (DD)
                if (DD._storeEffectOnSubMeshes) {
                  if (!DD.isReadyForSubMesh(this, LD, sD)) return !1
                } else if (!DD.isReady(this, sD)) return !1
            } else if (!KD.isReady(this, sD)) return !1;
        const rD = wD.currentRenderPassId;
        for (const LD of this.lightSources) {
          const DD = LD.getShadowGenerators();
          if (!DD) continue;
          const zD = DD.values();
          for (let pD = zD.next(); !0 !== pD.done; pD = zD.next()) {
            const DD = pD.value;
            if (DD && (!DD.getShadowMap()?.renderList || DD.getShadowMap()?.renderList && -1 !== DD.getShadowMap()?.renderList?.indexOf(this))) {
              const zD = DD.getShadowMap().renderPassIds ?? [wD.currentRenderPassId];
              for (let pD = 0; pD < zD.length; ++pD) {
                wD.currentRenderPassId = zD[pD];
                for (const zD of this.QE)
                  if (!DD.isReady(zD, sD, zD.yI()?.needAlphaBlendingForMesh(this) ?? !1)) return wD.currentRenderPassId = rD, !1
              }
              wD.currentRenderPassId = rD
            }
          }
        }
        for (const LD of this._internalMeshDataInfo._LODLevels)
          if (LD.mesh && !LD.mesh.isReady(sD)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      kI() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(DD) {
        this._instanceDataStorage.overridenInstanceCount = DD
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const DD = this._instanceDataStorage.engine.currentRenderPassId;
        let zD = this._instanceDataStorage.renderPasses[DD];
        return zD || (zD = new oD, this._instanceDataStorage.renderPasses[DD] = zD), zD
      }
      _preActivate() {
        const DD = this._internalMeshDataInfo,
          zD = this.Ul().getRenderId();
        return DD._preActivateId === zD || (DD._preActivateId = zD, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(DD) {
        const zD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return zD.visibleInstances && (zD.visibleInstances.intermediateDefaultRenderId = DD), this
      }
      _registerInstanceForRenderId(DD, zD) {
        const wD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return wD.visibleInstances || (wD.visibleInstances = {
          defaultRenderId: zD,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), wD.visibleInstances[zD] || (void 0 === wD.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete wD.visibleInstances[wD.previousRenderId], wD.previousRenderId = zD, wD.visibleInstances[zD] = new Array), wD.visibleInstances[zD].push(DD), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.ZI || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let DD, zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.FW().isLocked) return this;
        DD = "object" === typeof zD ? zD : {
          applySkeleton: zD,
          applyMorph: wD
        };
        const pD = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(DD, null, CD.k.PositionKind), pD), this
      }
      _createGlobalSubMesh(DD) {
        const zD = this.getTotalVertices();
        if (!zD || !this.XpD()) return null;
        if (this.QE && this.QE.length > 0) {
          const wD = this.XpD();
          if (!wD) return null;
          const pD = wD.length;
          let sD = !1;
          if (DD) sD = !0;
          else
            for (const DD of this.QE) {
              if (DD.indexStart + DD.indexCount > pD) {
                sD = !0;
                break
              }
              if (DD.verticesStart + DD.verticesCount > zD) {
                sD = !0;
                break
              }
            }
          if (!sD) return this.QE[0]
        }
        return this.releaseSubMeshes(), new jD.b(0, 0, zD, 0, this.getTotalIndices() || (this.isUnIndexed ? zD : 0), this)
      }
      subdivide(DD) {
        if (DD < 1) return;
        const zD = this.getTotalIndices();
        let wD = zD / DD | 0,
          pD = 0;
        for (; wD % 3 !== 0;) wD++;
        this.releaseSubMeshes();
        for (let sD = 0; sD < DD && !(pD >= zD); sD++) jD.b.CreateFromIndices(0, pD, pD + wD >= zD ? zD - pD : wD, this, void 0, !1), pD += wD;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(DD, zD, wD, pD);
        else {
          const pD = new xD.b;
          pD.set(zD, DD);
          const sD = this.Ul();
          new TD.e(TD.e.RandomId(), sD, pD, wD, this)
        }
        return this
      }
      removeVerticesData(DD) {
        this._geometry && this._geometry.removeVerticesData(DD)
      }
      markVerticesDataAsUpdatable(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wD = this.getVertexBuffer(DD);
        wD && wD.isUpdatable() !== zD && this.setVerticesData(DD, this.getVerticesData(DD), zD)
      }
      setVerticesBuffer(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = TD.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(DD, wD, zD), this
      }
      updateVerticesData(DD, zD, wD, pD) {
        return this._geometry ? (pD ? (this.makeGeometryUnique(), this.updateVerticesData(DD, zD, wD, !1)) : this._geometry.updateVerticesData(DD, zD, wD), this) : this
      }
      updateMeshPositions(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wD = this.getVerticesData(CD.k.PositionKind);
        if (!wD) return this;
        if (DD(wD), this.updateVerticesData(CD.k.PositionKind, wD, !1, !1), zD) {
          const DD = this.XpD(),
            zD = this.getVerticesData(CD.k.NormalKind);
          if (!zD) return this;
          xD.b.ComputeNormals(wD, DD, zD), this.updateVerticesData(CD.k.NormalKind, zD, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const DD = this._geometry,
          zD = this._geometry.copy(TD.e.RandomId());
        return DD.releaseForMesh(this, !0), zD.applyToMesh(this), this
      }
      setIndexBuffer(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          sD = this._geometry;
        sD || (sD = new TD.e(TD.e.RandomId(), this.Ul(), void 0, void 0, this)), sD.setIndexBuffer(DD, zD, wD, pD)
      }
      setIndices(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(DD, zD, wD, pD);
        else {
          const pD = new xD.b;
          pD.indices = DD;
          const sD = this.Ul();
          new TD.e(TD.e.RandomId(), sD, pD, wD, this, zD)
        }
        return this
      }
      updateIndices(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(DD, zD, wD), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(DD, zD, wD) {
        let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const sD = this.Ul().iI();
        let KD;
        if (this._unIndexed)
          if (this._getRenderingFillMode(wD) === dD.b.WireFrameFillMode) KD = DD._getLinesIndexBuffer(this.XpD(), sD);
          else KD = null;
        else switch (this._getRenderingFillMode(wD)) {
          case dD.b.PointFillMode:
            KD = null;
            break;
          case dD.b.WireFrameFillMode:
            KD = DD._getLinesIndexBuffer(this.XpD(), sD);
            break;
          default:
          case dD.b.TriangleFillMode:
            KD = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(zD, KD, pD)
      }
      _bindDirect(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(DD), wD && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const DD = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const zD in DD) this._userInstancedBuffersStorage.vertexBuffers[zD] = DD[zD]
          }
          this._geometry._bind(DD, zD, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(DD, zD);
        return this
      }
      _draw(DD, zD, wD) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const pD = this.Ul().iI(),
          sD = pD._currentMaterialContext,
          KD = sD && sD.useVertexPulling;
        return this._unIndexed && zD !== dD.b.WireFrameFillMode || zD == dD.b.PointFillMode ? pD.drawArraysType(zD, DD.verticesStart, DD.verticesCount, this.forcedInstanceCount || wD) : zD == dD.b.WireFrameFillMode ? pD.drawElementsType(zD, 0, DD._linesIndexCount, this.forcedInstanceCount || wD) : KD ? pD.drawArraysType(zD, DD.indexStart, DD.indexCount, this.forcedInstanceCount || wD) : pD.drawElementsType(zD, DD.indexStart, DD.indexCount, this.forcedInstanceCount || wD), this
      }
      registerBeforeRender(DD) {
        return this.onBeforeRenderObservable.add(DD), this
      }
      unregisterBeforeRender(DD) {
        return this.onBeforeRenderObservable.removeCallback(DD), this
      }
      registerAfterRender(DD) {
        return this.onAfterRenderObservable.add(DD), this
      }
      unregisterAfterRender(DD) {
        return this.onAfterRenderObservable.removeCallback(DD), this
      }
      _getInstancesRenderList(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (zD) return wD.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[DD] = !1, wD.batchCacheReplacementModeInFrozenMode.renderSelf[DD] = !0, wD.batchCacheReplacementModeInFrozenMode;
          if (wD.previousBatch) return wD.previousBatch
        }
        const pD = this.Ul(),
          sD = pD._isInIntermediateRendering(),
          KD = sD ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          rD = wD.batchCache;
        if (rD.mustReturn = !1, rD.renderSelf[DD] = zD || !KD && this.isEnabled() && this.isVisible, rD.visibleInstances[DD] = null, wD.visibleInstances && !zD) {
          const zD = wD.visibleInstances,
            KD = pD.getRenderId(),
            LD = sD ? zD.intermediateDefaultRenderId : zD.defaultRenderId;
          rD.visibleInstances[DD] = zD[KD], !rD.visibleInstances[DD] && LD && (rD.visibleInstances[DD] = zD[LD])
        }
        return rD.hardwareInstancedRendering[DD] = !zD && this._instanceDataStorage.hardwareInstancedRendering && null !== rD.visibleInstances[DD] && void 0 !== rD.visibleInstances[DD], wD.previousBatch = rD, rD
      }
      _updateInstancedBuffers(DD, zD, wD, pD, sD, KD) {
        const rD = zD.visibleInstances[DD._id],
          LD = rD ? rD.length : 0,
          cD = zD.parent,
          gD = this._instanceDataStorage;
        let RD = cD.instancesBuffer,
          AD = cD.instancesPreviousBuffer,
          UD = 0,
          fD = 0;
        const ID = zD.renderSelf[DD._id],
          BD = this._scene.floatingOriginOffset,
          GD = !RD || wD !== cD.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !cD.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || gD.isFrozen && !GD) fD = (ID ? 1 : 0) + LD;
        else {
          const zD = this.getWorldMatrix();
          if (ID) {
            this._scene.needsPreviousWorldMatrices && (gD.masterMeshPreviousWorldMatrix ? (gD.masterMeshPreviousWorldMatrix.copyToArray(cD.instancesPreviousData, UD), gD.masterMeshPreviousWorldMatrix.pC(zD)) : (gD.masterMeshPreviousWorldMatrix = zD.clone(), gD.masterMeshPreviousWorldMatrix.copyToArray(cD.instancesPreviousData, UD))), zD.copyToArray(cD.instancesData, UD);
            const DD = zD.QpD();
            cD.instancesData[UD + 12] = DD[12] - BD.x, cD.instancesData[UD + 13] = DD[13] - BD.y, cD.instancesData[UD + 14] = DD[14] - BD.z, UD += 16, fD++
          }
          if (rD) {
            if (YD.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && DD.yI()?.needAlphaBlendingForMesh(DD.getRenderingMesh())) {
              const DD = this._scene.activeCamera.globalPosition;
              for (let zD = 0; zD < rD.length; zD++) {
                const wD = rD[zD];
                wD._distanceToCamera = XD.s.Distance(wD.FW().FpD.centerWorld, DD)
              }
              rD.sort(((DD, zD) => DD._distanceToCamera > zD._distanceToCamera ? -1 : DD._distanceToCamera < zD._distanceToCamera ? 1 : 0))
            }
            for (let DD = 0; DD < rD.length; DD++) {
              const zD = rD[DD],
                wD = zD.getWorldMatrix();
              wD.copyToArray(cD.instancesData, UD), this._scene.needsPreviousWorldMatrices && (zD._previousWorldMatrix ? (zD._previousWorldMatrix.copyToArray(cD.instancesPreviousData, UD), zD._previousWorldMatrix.pC(wD)) : (zD._previousWorldMatrix = wD.clone(), zD._previousWorldMatrix.copyToArray(cD.instancesPreviousData, UD)));
              const pD = wD.QpD();
              cD.instancesData[UD + 12] = pD[12] - BD.x, cD.instancesData[UD + 13] = pD[13] - BD.y, cD.instancesData[UD + 14] = pD[14] - BD.z, UD += 16, fD++
            }
          }
        }
        if (GD) {
          let DD;
          if (RD && RD.dispose(), AD && AD.dispose(), RD = new CD.b(pD, cD.instancesData, !0, 16, !1, !0), cD.instancesBuffer = RD, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.iI().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) DD = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const zD = this._instanceDataStorage.engine.currentRenderPassId;
            DD = this._userInstancedBuffersStorage.renderPasses[zD], DD || (this._userInstancedBuffersStorage.renderPasses[zD] = DD = {})
          }
          DD.world0 = RD.createVertexBuffer("world0", 0, 4), DD.world1 = RD.createVertexBuffer("world1", 4, 4), DD.world2 = RD.createVertexBuffer("world2", 8, 4), DD.world3 = RD.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (AD = new CD.b(pD, cD.instancesPreviousData, !0, 16, !1, !0), cD.instancesPreviousBuffer = AD, DD.previousWorld0 = AD.createVertexBuffer("previousWorld0", 0, 4), DD.previousWorld1 = AD.createVertexBuffer("previousWorld1", 4, 4), DD.previousWorld2 = AD.createVertexBuffer("previousWorld2", 8, 4), DD.previousWorld3 = AD.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (RD.updateDirectly(cD.instancesData, 0, fD), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || AD.updateDirectly(cD.instancesPreviousData, 0, fD));
        this._processInstancedBuffers(rD, ID), KD && void 0 !== sD && (this.Ul()._activeIndices.addCount(DD.indexCount * fD, !1), pD._currentDrawContext && (pD._currentDrawContext.useInstancing = !0), this._bind(DD, KD, sD), this._draw(DD, sD, fD)), !this._scene.needsPreviousWorldMatrices || GD || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || AD.updateDirectly(cD.instancesData, 0, fD)
      }
      _renderWithInstances(DD, zD, wD, pD, sD) {
        const KD = wD.visibleInstances[DD._id],
          rD = KD ? KD.length : 0,
          LD = wD.parent,
          cD = LD.instancesBufferSize,
          gD = 16 * (rD + 1) * 4;
        for (; LD.instancesBufferSize < gD;) LD.instancesBufferSize *= 2;
        return LD.instancesData && cD == LD.instancesBufferSize || (LD.instancesData = new Float32Array(LD.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !LD.instancesPreviousData || cD != LD.instancesBufferSize) && (LD.instancesPreviousData = new Float32Array(LD.instancesBufferSize / 4)), this._updateInstancedBuffers(DD, wD, cD, sD, zD, pD), sD.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(DD, zD, wD, pD) {
        const sD = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Ul()._activeIndices.addCount(DD.indexCount * sD, !1), pD._currentDrawContext && (pD._currentDrawContext.useInstancing = !0), this._bind(DD, wD, zD), this._draw(DD, zD, sD), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, sD) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), pD.unbindInstanceAttributes()
      }
      _processInstancedBuffers(DD, zD) {}
      _processRendering(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = this.Ul(),
          gD = cD.iI();
        if (pD = this._getRenderingFillMode(pD), KD && zD.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(zD, pD, wD, gD), this;
        if (KD) this._renderWithInstances(zD, pD, sD, wD, gD);
        else {
          gD._currentDrawContext && (gD._currentDrawContext.useInstancing = !1);
          let wD = 0;
          sD.renderSelf[zD._id] && (rD && rD(!1, DD.getWorldMatrix(), LD), wD++, this._draw(zD, pD, this._instanceDataStorage.overridenInstanceCount));
          const KD = sD.visibleInstances[zD._id];
          if (KD) {
            const DD = KD.length;
            wD += DD;
            for (let wD = 0; wD < DD; wD++) {
              const DD = KD[wD].getWorldMatrix();
              rD && rD(!0, DD, LD), this._draw(zD, pD)
            }
          }
          cD._activeIndices.addCount(zD.indexCount * wD, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD?.instancesBuffer && (zD && DD.instancesBuffer.dispose(), DD.instancesBuffer = null), DD?.instancesPreviousBuffer && (zD && DD.instancesPreviousBuffer.dispose(), DD.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zD in this._instanceDataStorage.renderPasses) {
          const wD = this._instanceDataStorage.renderPasses[zD];
          this._disposeInstanceDataStorageRenderPass(wD, DD)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, DD), this._userInstancedBuffersStorage) {
          for (const zD in this._userInstancedBuffersStorage.vertexBuffers) {
            const wD = this._userInstancedBuffersStorage.vertexBuffers[zD];
            wD && (DD && wD.dispose(), this._userInstancedBuffersStorage.vertexBuffers[zD] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(DD)
      }
      _releaseRenderPassId(DD) {
        const zD = this._instanceDataStorage.renderPasses[DD];
        if (zD && (this._disposeInstanceDataStorageRenderPass(zD, !0), delete this._instanceDataStorage.renderPasses[DD]), this._userInstancedBuffersStorage?.renderPasses) {
          const zD = this._userInstancedBuffersStorage.renderPasses[DD];
          if (zD)
            for (const DD in zD) zD[DD]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[DD]
        }
        const wD = this._userInstancedBuffersStorage?.interleavedBuffers;
        wD?.[DD] && (wD[DD].buffer.dispose(), delete wD[DD])
      }
      _freeze() {
        if (this.QE) {
          for (let DD = 0; DD < this.QE.length; DD++) this._getInstancesRenderList(DD);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const DD in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[DD].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const KD = this._scene.iI(),
          rD = KD.currentRenderPassId;
        if (void 0 !== DD && (KD.currentRenderPassId = DD), pD)(!sD || sD && pD.isInFrustum(this._scene._frustumPlanes)) && this.render(pD, !!zD, wD);
        else
          for (let LD = 0; LD < this.QE.length; LD++) {
            const DD = this.QE[LD];
            (!sD || sD && DD.isInFrustum(this._scene._frustumPlanes)) && this.render(DD, !!zD, wD)
          }
        return void 0 !== DD && (KD.currentRenderPassId = rD), this
      }
      directRender() {
        if (!this.QE) return this;
        for (const DD of this.QE) this.render(DD, !1);
        return this
      }
      render(DD, zD, wD) {
        const pD = this.Ul(),
          sD = pD.iI();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const KD = pD.activeCameras?.length ?? 0,
          rD = KD > 1 && pD.activeCamera === pD.activeCameras[0] || KD <= 1,
          LD = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== sD.currentRenderPassId;
        if (rD && this._checkOcclusionQuery(LD) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const cD = this._getInstancesRenderList(DD._id, !!wD);
        if (cD.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let gD = 0,
          RD = null;
        this.ignoreCameraMaxZ && pD.activeCamera && !pD._isInIntermediateRendering() && (gD = pD.activeCamera.maxZ, RD = pD.activeCamera, pD.activeCamera.maxZ = 0, pD.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const AD = DD.getRenderingMesh(),
          UD = cD.hardwareInstancedRendering[DD._id] || AD.hasThinInstances || !!this._userInstancedBuffersStorage && !DD.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          fD = this._instanceDataStorage,
          ID = DD.yI();
        if (!ID) return RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), this;
        if (fD.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === ID) {
          if (ID._storeEffectOnSubMeshes && !DD._drawWrapper?._wasPreviouslyReady || !ID._storeEffectOnSubMeshes && !ID._getDrawWrapper()._wasPreviouslyReady) return RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), this
        } else {
          if (ID._storeEffectOnSubMeshes) {
            if (!ID.isReadyForSubMesh(this, DD, UD)) return RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), this
          } else if (!ID.isReady(this, UD)) return RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = ID
        }
        if (zD) {
          const DD = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === DD.alphaModes.length) sD.setAlphaMode(DD.alphaMode);
          else
            for (let zD = 0; zD < DD.alphaModes.length; zD++) {
              const wD = DD.alphaModes[zD];
              sD.setAlphaMode(void 0 !== wD ? wD : 2, !1, zD)
            }
        }
        let BD;
        BD = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? DD._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const GD = BD?.effect ?? null;
        for (let QD = 0, XD = pD._beforeRenderingMeshStage; QD < XD.length; QD++) {
          XD[QD].action(this, DD, cD, GD)
        }
        if (!BD || !GD) return RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), this;
        const hD = wD || this;
        let nD;
        if (!fD.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const DD = hD._getWorldMatrixDeterminant();
          nD = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), DD < 0 && (nD = nD === dD.b.ClockWiseSideOrientation ? dD.b.CounterClockWiseSideOrientation : dD.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = nD
        }
        const MD = this._internalMeshDataInfo._effectiveMaterial._preBind(BD, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && sD.setDepthWrite(!0);
        const OD = this._internalMeshDataInfo._effectiveMaterial,
          JD = OD.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), UD || this._bind(DD, GD, JD, !1);
        const ED = hD.getWorldMatrix();
        OD._storeEffectOnSubMeshes ? OD.bindForSubMesh(ED, this, DD) : OD.bind(ED, this);
        try {
          SD.d._BindAttachmentsForEffect(sD, GD) && (!OD.backFaceCulling && OD.separateCullingPass && (sD.setState(!0, OD.zOffset, !1, !MD, OD.cullBackFaces, OD.stencil, OD.zOffsetUnits), this._processRendering(this, DD, GD, JD, cD, UD, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), sD.setState(!0, OD.zOffset, !1, MD, OD.cullBackFaces, OD.stencil, OD.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(DD)), this._processRendering(this, DD, GD, JD, cD, UD, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          SD.d._RestoreAttachments(sD)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let QD = 0, XD = pD._afterRenderingMeshStage; QD < XD.length; QD++) {
          XD[QD].action(this, DD, cD, GD)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), RD && (RD.maxZ = gD, pD.updateTransformMatrix(!0)), 2 !== pD.performancePriority || fD.isFrozen || this._freeze(), this
      }
      _renderRunFollower(DD, zD) {
        const wD = this._scene,
          pD = wD._engine;
        if (pD.isWebGPU || DD._mesh !== this || 0 !== this.instances.length || this.render !== YD.prototype.render) return !1;
        const sD = DD.yI();
        if (!sD || sD !== wD._cachedMaterial || void 0 === sD._canBindRunFollower) return !1;
        const KD = DD._drawWrapper,
          rD = KD?.effect;
        if (!rD || rD !== wD._cachedEffect || this.visibility !== wD._cachedVisibility || KD._forceRebindOnNextCall) return !1;
        const LD = this.hasThinInstances;
        if (!LD && this._userInstancedBuffersStorage) return !1;
        if (!KD._wasPreviouslyReady || KD._wasPreviouslyUsingInstances !== LD) return !1;
        const cD = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || wD._isInIntermediateRendering() || 0 !== wD._beforeRenderingMeshStage.length || 0 !== wD._afterRenderingMeshStage.length || cD._onBeforeRenderObservable?.hasObservers() || cD._onBeforeBindObservable?.hasObservers() || cD._onAfterRenderObservable?.hasObservers()) return !1;
        const gD = this.occlusionType;
        if (void 0 !== gD && gD !== bD.e.OCCLUSION_TYPE_NONE || !sD._canBindRunFollower(wD, pD, this, DD, rD)) return !1;
        const RD = this._internalAbstractMeshDataInfo,
          AD = RD._isActiveIntermediate;
        AD ? RD._isActiveIntermediate = !1 : RD._isActive = !1;
        const UD = wD.activeCameras?.length ?? 0;
        (UD > 1 && wD.activeCamera === wD.activeCameras[0] || UD <= 1) && this._checkOcclusionQuery(!1);
        const fD = this._getInstancesRenderList(DD._id);
        if (fD.mustReturn) return !0;
        if (!LD && !fD.renderSelf[DD._id]) return AD ? RD._isActiveIntermediate = !0 : RD._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (cD._effectiveMaterial = sD, zD)
          if (1 === sD.alphaModes.length) pD.setAlphaMode(sD.alphaMode);
          else
            for (let BD = 0; BD < sD.alphaModes.length; BD++) {
              const DD = sD.alphaModes[BD];
              pD.setAlphaMode(void 0 !== DD ? DD : 2, !1, BD)
            }
        if (sD.backFaceCulling || null !== sD.sideOrientation || sD._twoSidedLighting) {
          const DD = this._getWorldMatrixDeterminant();
          let zD = sD._getEffectiveOrientation(this);
          DD < 0 && (zD = zD === dD.b.ClockWiseSideOrientation ? dD.b.CounterClockWiseSideOrientation : dD.b.ClockWiseSideOrientation), cD._effectiveSideOrientation = zD
        }
        sD._preBind(KD, cD._effectiveSideOrientation), sD.forceDepthWrite && pD.setDepthWrite(!0);
        const ID = sD.fillMode;
        return LD || this._bind(DD, rD, ID, !1), sD._bindRunFollower(this.getWorldMatrix(), this, DD, rD), this._processRendering(this, DD, rD, ID, fD, LD, this._onBeforeDraw, sD), sD.unbind(), 2 === wD.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(CD.k.MatricesWeightsKind) && (this.isVerticesDataPresent(CD.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const DD = this.getVerticesData(CD.k.MatricesWeightsKind),
          zD = DD.length;
        for (let wD = 0; wD < zD; wD += 4) {
          const zD = DD[wD] + DD[wD + 1] + DD[wD + 2] + DD[wD + 3];
          if (0 === zD) DD[wD] = 1;
          else {
            const pD = 1 / zD;
            DD[wD] *= pD, DD[wD + 1] *= pD, DD[wD + 2] *= pD, DD[wD + 3] *= pD
          }
        }
        this.setVerticesData(CD.k.MatricesWeightsKind, DD)
      }
      _normalizeSkinWeightsAndExtra() {
        const DD = this.getVerticesData(CD.k.MatricesWeightsExtraKind),
          zD = this.getVerticesData(CD.k.MatricesWeightsKind),
          wD = zD.length;
        for (let pD = 0; pD < wD; pD += 4) {
          let wD = zD[pD] + zD[pD + 1] + zD[pD + 2] + zD[pD + 3];
          if (wD += DD[pD] + DD[pD + 1] + DD[pD + 2] + DD[pD + 3], 0 === wD) zD[pD] = 1;
          else {
            const sD = 1 / wD;
            zD[pD] *= sD, zD[pD + 1] *= sD, zD[pD + 2] *= sD, zD[pD + 3] *= sD, DD[pD] *= sD, DD[pD + 1] *= sD, DD[pD + 2] *= sD, DD[pD + 3] *= sD
          }
        }
        this.setVerticesData(CD.k.MatricesWeightsKind, zD), this.setVerticesData(CD.k.MatricesWeightsKind, DD)
      }
      validateSkinning() {
        const DD = this.getVerticesData(CD.k.MatricesWeightsExtraKind),
          zD = this.getVerticesData(CD.k.MatricesWeightsKind);
        if (null === zD || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          sI: "not skinned"
        };
        const wD = zD.length;
        let pD = 0,
          sD = 0,
          KD = 0,
          rD = 0;
        const LD = null === DD ? 4 : 8,
          cD = [];
        for (let fD = 0; fD <= LD; fD++) cD[fD] = 0;
        for (let fD = 0; fD < wD; fD += 4) {
          let wD = zD[fD],
            gD = wD,
            RD = 0 === gD ? 0 : 1;
          for (let sD = 1; sD < LD; sD++) {
            const KD = sD < 4 ? zD[fD + sD] : DD[fD + sD - 4];
            KD > wD && pD++, 0 !== KD && RD++, gD += KD, wD = KD
          }
          if (cD[RD]++, RD > KD && (KD = RD), 0 === gD) sD++;
          else {
            const wD = 1 / gD;
            let pD = 0;
            for (let sD = 0; sD < LD; sD++) pD += sD < 4 ? Math.abs(zD[fD + sD] - zD[fD + sD] * wD) : Math.abs(DD[fD + sD - 4] - DD[fD + sD - 4] * wD);
            pD > .001 && rD++
          }
        }
        const gD = this.skeleton.bones.length,
          RD = this.getVerticesData(CD.k.MatricesIndicesKind),
          AD = this.getVerticesData(CD.k.MatricesIndicesExtraKind);
        let UD = 0;
        for (let fD = 0; fD < wD; fD += 4)
          for (let DD = 0; DD < LD; DD++) {
            const zD = DD < 4 ? RD[fD + DD] : AD[fD + DD - 4];
            (zD >= gD || zD < 0) && UD++
          }
        return {
          skinned: !0,
          valid: 0 === sD && 0 === rD && 0 === UD,
          sI: "Number of Weights = " + wD / 4 + "\nMaximum influences = " + KD + "\nMissing Weights = " + sD + "\nNot Sorted = " + pD + "\nNot Normalized = " + rD + "\nWeightCounts = [" + cD + "]\nNumber of bones = " + gD + "\nBad Bone Indices = " + UD
        }
      }
      _checkDelayState() {
        const DD = this.Ul();
        return this._geometry ? this._geometry.load(DD) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(DD)), this
      }
      _queueLoad(DD) {
        DD.addPendingData(this);
        const zD = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const wD = await DD._loadDelayedFileAsync(this.delayLoadingFile, zD, !0);
            wD instanceof ArrayBuffer ? this._delayLoadingFunction(wD, this) : this._delayLoadingFunction(JSON.parse(wD), this);
            for (const DD of this.instances) DD.refreshBoundingInfo(), DD._syncSubMeshes();
            this.delayLoadState = 1, DD.removePendingData(this)
          } catch (wD) {
            DD.removePendingData(this), DD.EX || ND.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${wD}`)
          }
        })(), this
      }
      isInFrustum(DD) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(DD) && (this._checkDelayState(), !0))
      }
      setMaterialById(DD) {
        const zD = this.Ul().materials;
        let wD;
        for (wD = zD.length - 1; wD > -1; wD--)
          if (zD[wD].id === DD) return this.material = zD[wD], this;
        const pD = this.Ul().multiMaterials;
        for (wD = pD.length - 1; wD > -1; wD--)
          if (pD[wD].id === DD) return this.material = pD[wD], this;
        return this
      }
      getAnimatables() {
        const DD = [];
        return this.material && DD.push(this.material), this.skeleton && DD.push(this.skeleton), DD
      }
      bakeTransformIntoVertices(DD) {
        if (!this.isVerticesDataPresent(CD.k.PositionKind)) return this;
        const zD = this.QE.splice(0);
        this._resetPointsArrayCache();
        let wD = this.getVerticesData(CD.k.PositionKind);
        const pD = XD.s.Zero();
        let sD;
        for (sD = 0; sD < wD.length; sD += 3) XD.s.TransformCoordinatesFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).toArray(wD, sD);
        if (this.setVerticesData(CD.k.PositionKind, wD, this.getVertexBuffer(CD.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(CD.k.NormalKind)) {
          for (wD = this.getVerticesData(CD.k.NormalKind), sD = 0; sD < wD.length; sD += 3) XD.s.TransformNormalFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).normalize().toArray(wD, sD);
          this.setVerticesData(CD.k.NormalKind, wD, this.getVertexBuffer(CD.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(CD.k.TangentKind)) {
          for (wD = this.getVerticesData(CD.k.TangentKind), sD = 0; sD < wD.length; sD += 4) XD.s.TransformNormalFromFloatsToRef(wD[sD], wD[sD + 1], wD[sD + 2], DD, pD).normalize().toArray(wD, sD);
          this.setVerticesData(CD.k.TangentKind, wD, this.getVertexBuffer(CD.k.TangentKind).isUpdatable())
        }
        return DD.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.QE = zD, this
      }
      bakeCurrentTransformIntoVertices() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(DD), this
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (zD && void 0 === zD._addToSceneRootNodes) {
          const wD = zD;
          return FD.source = this, FD.doNotCloneChildren = wD.doNotCloneChildren, FD.clonePhysicsImpostor = wD.clonePhysicsImpostor, FD.cloneThinInstances = wD.cloneThinInstances, new YD(DD, this.Ul(), FD)
        }
        return new YD(DD, this.Ul(), zD, this, wD, pD)
      }
      dispose(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const wD = this._internalMeshDataInfo;
        if (wD._onBeforeDrawObservable && wD._onBeforeDrawObservable.clear(), wD._onBeforeBindObservable && wD._onBeforeBindObservable.clear(), wD._onBeforeRenderObservable && wD._onBeforeRenderObservable.clear(), wD._onAfterRenderObservable && wD._onAfterRenderObservable.clear(), wD._onBetweenPassObservable && wD._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (wD.meshMap)
            for (const DD in wD.meshMap) {
              const zD = wD.meshMap[DD];
              zD && (zD._internalMeshDataInfo._source = null, wD.meshMap[DD] = void 0)
            }
          wD._source && wD._source._internalMeshDataInfo.meshMap && (wD._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const DD = this.Ul().meshes;
          for (const zD of DD) {
            const DD = zD;
            DD._internalMeshDataInfo && DD._internalMeshDataInfo._source && DD._internalMeshDataInfo._source === this && (DD._internalMeshDataInfo._source = null)
          }
        }
        wD._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(DD, zD)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(DD, zD, wD, pD, sD, KD) {
        let rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          LD = arguments.length > 7 ? arguments[7] : void 0;
        const cD = this.Ul();
        return (0, MD.r)(DD, (DD => {
          const LD = DD.width,
            cD = DD.height,
            gD = this.iI().createCanvas(LD, cD).getContext("2d");
          gD.drawImage(DD, 0, 0);
          const RD = gD.getImageData(0, 0, LD, cD).data;
          this.applyDisplacementMapFromBuffer(RD, LD, cD, zD, wD, sD, KD, rD), pD && pD(this)
        }), LD || (() => {}), cD.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(DD, zD, wD, pD, sD, KD, rD) {
        let LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(CD.k.PositionKind) || !this.isVerticesDataPresent(CD.k.NormalKind) || !this.isVerticesDataPresent(CD.k.UVKind)) return ND.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const cD = this.getVerticesData(CD.k.PositionKind, !0, !0),
          gD = this.getVerticesData(CD.k.NormalKind),
          RD = this.getVerticesData(CD.k.UVKind);
        let AD = XD.s.Zero();
        const UD = XD.s.Zero(),
          fD = XD.r.Zero();
        KD = KD || XD.r.Zero(), rD = rD || new XD.r(1, 1);
        for (let ID = 0; ID < cD.length; ID += 3) {
          XD.s.FromArrayToRef(cD, ID, AD), XD.s.FromArrayToRef(gD, ID, UD), XD.r.FromArrayToRef(RD, ID / 3 * 2, fD);
          const LD = 4 * ((Math.abs(fD.x * rD.x + KD.x % 1) * (zD - 1) % zD | 0) + (Math.abs(fD.y * rD.y + KD.y % 1) * (wD - 1) % wD | 0) * zD),
            BD = .3 * (DD[LD] / 255) + .59 * (DD[LD + 1] / 255) + .11 * (DD[LD + 2] / 255);
          UD.normalize(), UD.scaleInPlace(pD + (sD - pD) * BD), AD = AD.add(UD), AD.toArray(cD, ID)
        }
        return xD.b.ComputeNormals(cD, this.XpD(), gD), LD ? (this.setVerticesData(CD.k.PositionKind, cD), this.setVerticesData(CD.k.NormalKind, gD), this.setVerticesData(CD.k.UVKind, RD)) : (this.updateVerticesData(CD.k.PositionKind, cD), this.updateVerticesData(CD.k.NormalKind, gD)), this
      }
      _getFlattenedNormals(DD, zD) {
        const wD = new Float32Array(3 * DD.length);
        let pD = 0;
        const sD = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let KD = 0; KD < DD.length; KD += 3) {
          const rD = XD.s.FromArray(zD, 3 * DD[KD]),
            LD = XD.s.FromArray(zD, 3 * DD[KD + 1]),
            cD = XD.s.FromArray(zD, 3 * DD[KD + 2]),
            gD = rD.subtract(LD),
            RD = cD.subtract(LD),
            AD = XD.s.Normalize(XD.s.Cross(gD, RD));
          sD && AD.scaleInPlace(-1);
          for (let DD = 0; DD < 3; DD++) wD[pD++] = AD.x, wD[pD++] = AD.y, wD[pD++] = AD.z
        }
        return wD
      }
      _convertToUnIndexedMesh() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = this.getVerticesDataKinds().filter((DD => !this.getVertexBuffer(DD)?.getIsInstanced())),
          wD = this.XpD(!1, !0),
          pD = {},
          sD = (DD, zD) => {
            const pD = new Float32Array(wD.length * zD);
            let sD = 0;
            for (let KD = 0; KD < wD.length; KD++)
              for (let rD = 0; rD < zD; rD++) pD[sD++] = DD[wD[KD] * zD + rD];
            return pD
          },
          KD = this.FW(),
          rD = this.geometry ? this.QE.slice(0) : [];
        for (const LD of zD) pD[LD] = this.getVerticesData(LD);
        for (const LD of zD) {
          const zD = this.getVertexBuffer(LD),
            KD = zD.getSize();
          if (DD && LD === CD.k.NormalKind) {
            const DD = this._getFlattenedNormals(wD, pD[CD.k.PositionKind]);
            this.setVerticesData(CD.k.NormalKind, DD, zD.isUpdatable(), KD)
          } else this.setVerticesData(LD, sD(pD[LD], KD), zD.isUpdatable(), KD)
        }
        if (this.morphTargetManager) {
          for (let zD = 0; zD < this.morphTargetManager.numTargets; zD++) {
            const pD = this.morphTargetManager.getTarget(zD),
              KD = pD.getPositions();
            pD.pLD(sD(KD, 3));
            const rD = pD.getNormals();
            rD && pD.setNormals(DD ? this._getFlattenedNormals(wD, KD) : sD(rD, 3));
            const LD = pD.getTangents();
            LD && pD.setTangents(sD(LD, 3));
            const cD = pD.getUVs();
            cD && pD.setUVs(sD(cD, 2));
            const gD = pD.getColors();
            gD && pD.setColors(sD(gD, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let LD = 0; LD < wD.length; LD++) wD[LD] = LD;
        this.setIndices(wD), this._unIndexed = !0, this.releaseSubMeshes();
        for (const LD of rD) {
          const DD = LD.FW();
          jD.b.AddToMesh(LD.materialIndex, LD.indexStart, LD.indexCount, LD.indexStart, LD.indexCount, this).setBoundingInfo(DD)
        }
        return this.setBoundingInfo(KD), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = xD.b.ExtractFromMesh(this);
        let wD;
        if (DD && this.isVerticesDataPresent(CD.k.NormalKind) && zD.normals) {
          for (wD = 0; wD < zD.normals.length; wD++) zD.normals[wD] *= -1;
          this.setVerticesData(CD.k.NormalKind, zD.normals, this.isVertexBufferUpdatable(CD.k.NormalKind))
        }
        if (zD.indices) {
          let DD;
          for (wD = 0; wD < zD.indices.length; wD += 3) DD = zD.indices[wD + 1], zD.indices[wD + 1] = zD.indices[wD + 2], zD.indices[wD + 2] = DD;
          this.setIndices(zD.indices, null, this.isVertexBufferUpdatable(CD.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const zD = xD.b.ExtractFromMesh(this),
          wD = zD.indices && !Array.isArray(zD.indices) && Array.from ? Array.from(zD.indices) : zD.indices,
          pD = zD.positions && !Array.isArray(zD.positions) && Array.from ? Array.from(zD.positions) : zD.positions,
          sD = zD.uvs && !Array.isArray(zD.uvs) && Array.from ? Array.from(zD.uvs) : zD.uvs,
          KD = zD.normals && !Array.isArray(zD.normals) && Array.from ? Array.from(zD.normals) : zD.normals;
        if (wD && pD) {
          zD.indices = wD, zD.positions = pD, sD && (zD.uvs = sD), KD && (zD.normals = KD);
          const rD = DD + 1,
            LD = [];
          for (let DD = 0; DD < rD + 1; DD++) LD[DD] = [];
          let cD, gD;
          const RD = new XD.s(0, 0, 0),
            AD = new XD.s(0, 0, 0),
            UD = new XD.r(0, 0),
            fD = [],
            ID = [],
            BD = [];
          let GD, hD, nD, MD = pD.length;
          sD && (hD = sD.length), KD && (nD = KD.length);
          for (let DD = 0; DD < wD.length; DD += 3) {
            ID[0] = wD[DD], ID[1] = wD[DD + 1], ID[2] = wD[DD + 2];
            for (let DD = 0; DD < 3; DD++)
              if (cD = ID[DD], gD = ID[(DD + 1) % 3], void 0 === BD[cD] && void 0 === BD[gD] ? (BD[cD] = [], BD[gD] = []) : (void 0 === BD[cD] && (BD[cD] = []), void 0 === BD[gD] && (BD[gD] = [])), void 0 === BD[cD][gD] && void 0 === BD[gD][cD]) {
                BD[cD][gD] = [], RD.x = (pD[3 * gD] - pD[3 * cD]) / rD, RD.y = (pD[3 * gD + 1] - pD[3 * cD + 1]) / rD, RD.z = (pD[3 * gD + 2] - pD[3 * cD + 2]) / rD, KD && (AD.x = (KD[3 * gD] - KD[3 * cD]) / rD, AD.y = (KD[3 * gD + 1] - KD[3 * cD + 1]) / rD, AD.z = (KD[3 * gD + 2] - KD[3 * cD + 2]) / rD), sD && (UD.x = (sD[2 * gD] - sD[2 * cD]) / rD, UD.y = (sD[2 * gD + 1] - sD[2 * cD + 1]) / rD), BD[cD][gD].push(cD);
                for (let DD = 1; DD < rD; DD++) BD[cD][gD].push(pD.length / 3), pD[MD++] = pD[3 * cD] + DD * RD.x, pD[MD++] = pD[3 * cD + 1] + DD * RD.y, pD[MD++] = pD[3 * cD + 2] + DD * RD.z, KD && (KD[nD++] = KD[3 * cD] + DD * AD.x, KD[nD++] = KD[3 * cD + 1] + DD * AD.y, KD[nD++] = KD[3 * cD + 2] + DD * AD.z), sD && (sD[hD++] = sD[2 * cD] + DD * UD.x, sD[hD++] = sD[2 * cD + 1] + DD * UD.y);
                BD[cD][gD].push(gD), BD[gD][cD] = [], GD = BD[cD][gD].length;
                for (let DD = 0; DD < GD; DD++) BD[gD][cD][DD] = BD[cD][gD][GD - 1 - DD]
              } LD[0][0] = wD[DD], LD[1][0] = BD[wD[DD]][wD[DD + 1]][1], LD[1][1] = BD[wD[DD]][wD[DD + 2]][1];
            for (let zD = 2; zD < rD; zD++) {
              LD[zD][0] = BD[wD[DD]][wD[DD + 1]][zD], LD[zD][zD] = BD[wD[DD]][wD[DD + 2]][zD], RD.x = (pD[3 * LD[zD][zD]] - pD[3 * LD[zD][0]]) / zD, RD.y = (pD[3 * LD[zD][zD] + 1] - pD[3 * LD[zD][0] + 1]) / zD, RD.z = (pD[3 * LD[zD][zD] + 2] - pD[3 * LD[zD][0] + 2]) / zD, KD && (AD.x = (KD[3 * LD[zD][zD]] - KD[3 * LD[zD][0]]) / zD, AD.y = (KD[3 * LD[zD][zD] + 1] - KD[3 * LD[zD][0] + 1]) / zD, AD.z = (KD[3 * LD[zD][zD] + 2] - KD[3 * LD[zD][0] + 2]) / zD), sD && (UD.x = (sD[2 * LD[zD][zD]] - sD[2 * LD[zD][0]]) / zD, UD.y = (sD[2 * LD[zD][zD] + 1] - sD[2 * LD[zD][0] + 1]) / zD);
              for (let DD = 1; DD < zD; DD++) LD[zD][DD] = pD.length / 3, pD[MD++] = pD[3 * LD[zD][0]] + DD * RD.x, pD[MD++] = pD[3 * LD[zD][0] + 1] + DD * RD.y, pD[MD++] = pD[3 * LD[zD][0] + 2] + DD * RD.z, KD && (KD[nD++] = KD[3 * LD[zD][0]] + DD * AD.x, KD[nD++] = KD[3 * LD[zD][0] + 1] + DD * AD.y, KD[nD++] = KD[3 * LD[zD][0] + 2] + DD * AD.z), sD && (sD[hD++] = sD[2 * LD[zD][0]] + DD * UD.x, sD[hD++] = sD[2 * LD[zD][0] + 1] + DD * UD.y)
            }
            LD[rD] = BD[wD[DD + 1]][wD[DD + 2]], fD.push(LD[0][0], LD[1][0], LD[1][1]);
            for (let DD = 1; DD < rD; DD++) {
              let zD;
              for (zD = 0; zD < DD; zD++) fD.push(LD[DD][zD], LD[DD + 1][zD], LD[DD + 1][zD + 1]), fD.push(LD[DD][zD], LD[DD + 1][zD + 1], LD[DD][zD + 1]);
              fD.push(LD[DD][zD], LD[DD + 1][zD], LD[DD + 1][zD + 1])
            }
          }
          zD.indices = fD, zD.applyToMesh(this, this.isVertexBufferUpdatable(CD.k.PositionKind))
        } else ND.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const DD = xD.b.ExtractFromMesh(this),
          zD = DD.uvs,
          wD = DD.indices,
          pD = DD.positions,
          sD = DD.colors,
          KD = DD.matricesIndices,
          rD = DD.matricesWeights,
          LD = DD.matricesIndicesExtra,
          cD = DD.matricesWeightsExtra;
        if (void 0 === wD || void 0 === pD || null === wD || null === pD) ND.d.Warn("VertexData contains empty entries");
        else {
          const gD = [],
            RD = [],
            AD = [],
            UD = [],
            fD = [],
            ID = [],
            BD = [],
            GD = [];
          let hD, nD = 0;
          const MD = {};
          let OD, JD;
          for (let DD = 0; DD < wD.length; DD += 3) {
            JD = [wD[DD], wD[DD + 1], wD[DD + 2]], hD = [];
            for (let DD = 0; DD < 3; DD++) {
              hD[DD] = "";
              for (let zD = 0; zD < 3; zD++) Math.abs(pD[3 * JD[DD] + zD]) < 1e-8 && (pD[3 * JD[DD] + zD] = 0), hD[DD] += pD[3 * JD[DD] + zD] + "|"
            }
            if (hD[0] != hD[1] && hD[0] != hD[2] && hD[1] != hD[2])
              for (let DD = 0; DD < 3; DD++) {
                if (OD = MD[hD[DD]], void 0 === OD) {
                  MD[hD[DD]] = nD, OD = nD++;
                  for (let zD = 0; zD < 3; zD++) gD.push(pD[3 * JD[DD] + zD]);
                  if (null !== sD && void 0 !== sD)
                    for (let zD = 0; zD < 4; zD++) UD.push(sD[4 * JD[DD] + zD]);
                  if (null !== zD && void 0 !== zD)
                    for (let wD = 0; wD < 2; wD++) AD.push(zD[2 * JD[DD] + wD]);
                  if (null !== KD && void 0 !== KD)
                    for (let zD = 0; zD < 4; zD++) fD.push(KD[4 * JD[DD] + zD]);
                  if (null !== rD && void 0 !== rD)
                    for (let zD = 0; zD < 4; zD++) ID.push(rD[4 * JD[DD] + zD]);
                  if (null !== LD && void 0 !== LD)
                    for (let zD = 0; zD < 4; zD++) BD.push(LD[4 * JD[DD] + zD]);
                  if (null !== cD && void 0 !== cD)
                    for (let zD = 0; zD < 4; zD++) GD.push(cD[4 * JD[DD] + zD])
                }
                RD.push(OD)
              }
          }
          const ED = [];
          xD.b.ComputeNormals(gD, RD, ED), DD.positions = gD, DD.indices = RD, DD.normals = ED, null !== zD && void 0 !== zD && (DD.uvs = AD), null !== sD && void 0 !== sD && (DD.colors = UD), null !== KD && void 0 !== KD && (DD.matricesIndices = fD), null !== rD && void 0 !== rD && (DD.matricesWeights = ID), null !== LD && void 0 !== LD && (DD.matricesIndicesExtra = BD), null !== rD && void 0 !== rD && (DD.matricesWeightsExtra = GD), DD.applyToMesh(this, this.isVertexBufferUpdatable(CD.k.PositionKind))
        }
      }
      static _instancedMeshFactory(DD, zD) {
        throw (0, yD.j)("InstancedMesh")
      }
      static _PhysicsImpostorParser(DD, zD, wD) {
        throw (0, yD.j)("PhysicsImpostor")
      }
      createInstance(DD) {
        const zD = YD._instancedMeshFactory(DD, this);
        return zD.parent = this.parent, zD
      }
      synchronizeInstances() {
        for (let DD = 0; DD < this.instances.length; DD++) {
          this.instances[DD]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(DD) {
        const zD = this.XpD(),
          wD = this.getVerticesData(CD.k.PositionKind);
        if (!wD || !zD) return this;
        const pD = [];
        for (let KD = 0; KD < wD.length; KD += 3) pD.push(XD.s.FromArray(wD, KD));
        const sD = [];
        return nD.c.SyncAsyncForLoop(pD.length, 40, (DD => {
          const zD = pD.length - 1 - DD,
            wD = pD[zD];
          for (let KD = 0; KD < zD; ++KD) {
            const DD = pD[KD];
            if (wD.equals(DD)) {
              sD[zD] = KD;
              break
            }
          }
        }), (() => {
          for (let DD = 0; DD < zD.length; ++DD) zD[DD] = sD[zD[DD]] || zD[DD];
          const wD = this.QE.slice(0);
          this.setIndices(zD), this.QE = wD, DD && DD(this)
        })), this
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        DD.name = this.name, DD.id = this.id, DD.uniqueId = this.uniqueId, DD.type = this.getClassName(), JD.c && JD.c.HasTags(this) && (DD.tags = JD.c.GetTags(this)), DD.position = this.position.QpD(), this.rotationQuaternion ? DD.rotationQuaternion = this.rotationQuaternion.QpD() : this.rotation && (DD.rotation = this.rotation.QpD()), DD.rc = this.rc.QpD(), this._postMultiplyPivotMatrix ? DD.pivotMatrix = this.getPivotMatrix().QpD() : DD.localMatrix = this.getPivotMatrix().QpD(), DD.isEnabled = this.isEnabled(!1), DD.isVisible = this.isVisible, DD.infiniteDistance = this.infiniteDistance, DD.pickable = this.uB, DD.receiveShadows = this.receiveShadows, DD.billboardMode = this.billboardMode, DD.visibility = this.visibility, DD.lI = this.lI, DD.checkCollisions = this.checkCollisions, DD.ellipsoid = this.ellipsoid.QpD(), DD.ellipsoidOffset = this.ellipsoidOffset.QpD(), DD.ZI = this.ZI, DD.isBlocker = this.isBlocker, DD.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (DD.Tl = !0), this.parent && this.parent._serializeAsParent(DD), DD.isUnIndexed = this.isUnIndexed;
        const zD = this._geometry;
        if (zD && this.QE) {
          DD.geometryUniqueId = zD.uniqueId, DD.geometryId = zD.id, DD.QE = [];
          for (let zD = 0; zD < this.QE.length; zD++) {
            const wD = this.QE[zD];
            DD.QE.push({
              materialIndex: wD.materialIndex,
              verticesStart: wD.verticesStart,
              verticesCount: wD.verticesCount,
              indexStart: wD.indexStart,
              indexCount: wD.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (DD.materialUniqueId = this.material.uniqueId, DD.materialId = this.material.id) : (this.material = null, DD.materialUniqueId = this._scene.defaultMaterial.uniqueId, DD.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (DD.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (DD.skeletonId = this.skeleton.id, DD.skeletonUniqueId = this.skeleton.uniqueId, DD.numBoneInfluencers = this.numBoneInfluencers), this.Ul()._getComponent(kD.d.NAME_PHYSICSENGINE)) {
          const zD = this.getPhysicsImpostor?.();
          zD && (DD.physicsMass = zD.getParam("Ug"), DD.physicsFriction = zD.getParam("friction"), DD.physicsRestitution = zD.getParam("Ug"), DD.physicsImpostor = zD.type)
        }
        this.metadata && (DD.metadata = this.metadata), 0 !== this.meshBlendingTag && (DD.meshBlendingTag = this.meshBlendingTag), DD.instances = [];
        for (let wD = 0; wD < this.instances.length; wD++) {
          const zD = this.instances[wD];
          if (zD.doNotSerialize) continue;
          const pD = {
            name: zD.name,
            id: zD.id,
            isEnabled: zD.isEnabled(!1),
            isVisible: zD.isVisible,
            uB: zD.uB,
            checkCollisions: zD.checkCollisions,
            position: zD.position.QpD(),
            rc: zD.rc.QpD()
          };
          if (zD.parent && zD.parent._serializeAsParent(pD), zD.rotationQuaternion ? pD.rotationQuaternion = zD.rotationQuaternion.QpD() : zD.rotation && (pD.rotation = zD.rotation.QpD()), this.Ul()._getComponent(kD.d.NAME_PHYSICSENGINE)) {
            const DD = zD.getPhysicsImpostor?.();
            DD && (pD.physicsMass = DD.getParam("Ug"), pD.physicsFriction = DD.getParam("friction"), pD.physicsRestitution = DD.getParam("Ug"), pD.physicsImpostor = DD.type)
          }
          zD.metadata && (pD.metadata = zD.metadata), zD.actionManager && (pD.actions = zD.actionManager.serialize(zD.name)), DD.instances.push(pD), WD.d.AppendSerializedAnimations(zD, pD), pD.rG = zD.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (DD.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.WzD
          }, this._userThinInstanceBuffersStorage)) {
          const zD = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const DD in this._userThinInstanceBuffersStorage.data) zD.data[DD] = Array.from(this._userThinInstanceBuffersStorage.data[DD]), zD.sizes[DD] = this._userThinInstanceBuffersStorage.sizes[DD], zD.strides[DD] = this._userThinInstanceBuffersStorage.strides[DD];
          DD.thinInstances.userThinInstance = zD
        }
        return WD.d.AppendSerializedAnimations(this, DD), DD.rG = this.serializeAnimationRanges(), DD.layerMask = this.layerMask, DD.alphaIndex = this.alphaIndex, DD.hasVertexAlpha = this.hasVertexAlpha, DD.overlayAlpha = this.overlayAlpha, DD.overlayColor = this.overlayColor.QpD(), DD.renderOverlay = this.renderOverlay, DD.applyFog = this.applyFog, this.actionManager && (DD.actions = this.actionManager.serialize(this.name)), DD
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const DD = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (DD && DD.vertexCount) {
          if (DD.vertexCount !== this.getTotalVertices()) return ND.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (DD.isUsingTextureForTargets) return;
          for (let zD = 0; zD < DD.numInfluencers; zD++) {
            const wD = DD.getActiveTarget(zD),
              pD = wD.getPositions();
            if (!pD) return void ND.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(CD.k.PositionKind + zD, pD, !1, 3);
            const sD = wD.getNormals();
            sD && this.geometry.setVerticesData(CD.k.NormalKind + zD, sD, !1, 3);
            const KD = wD.getTangents();
            KD && this.geometry.setVerticesData(CD.k.TangentKind + zD, KD, !1, 3);
            const rD = wD.getUVs();
            rD && this.geometry.setVerticesData(CD.k.UVKind + "_" + zD, rD, !1, 2);
            const LD = wD.getUV2s();
            LD && this.geometry.setVerticesData(CD.k.UV2Kind + "_" + zD, LD, !1, 2);
            const cD = wD.getColors();
            cD && this.geometry.setVerticesData(CD.k.ColorKind + zD, cD, !1, 4)
          }
        } else {
          let DD = 0;
          for (; this.geometry.isVerticesDataPresent(CD.k.PositionKind + DD);) this.geometry.removeVerticesData(CD.k.PositionKind + DD), this.geometry.isVerticesDataPresent(CD.k.NormalKind + DD) && this.geometry.removeVerticesData(CD.k.NormalKind + DD), this.geometry.isVerticesDataPresent(CD.k.TangentKind + DD) && this.geometry.removeVerticesData(CD.k.TangentKind + DD), this.geometry.isVerticesDataPresent(CD.k.UVKind + "_" + DD) && this.geometry.removeVerticesData(CD.k.UVKind + "_" + DD), this.geometry.isVerticesDataPresent(CD.k.UV2Kind + "_" + DD) && this.geometry.removeVerticesData(CD.k.UV2Kind + "_" + DD), this.geometry.isVerticesDataPresent(CD.k.ColorKind + DD) && this.geometry.removeVerticesData(CD.k.ColorKind + DD), DD++
        }
      }
      static Parse(DD, zD, wD) {
        let pD, sD = !1;
        if (DD.type && "LinesMesh" === DD.type ? pD = YD._LinesMeshParser(DD, zD) : DD.type && "GroundMesh" === DD.type ? pD = YD._GroundMeshParser(DD, zD) : DD.type && "GoldbergMesh" === DD.type ? pD = YD._GoldbergMeshParser(DD, zD) : DD.type && "GreasedLineMesh" === DD.type ? pD = YD._GreasedLineMeshParser(DD, zD) : DD.type && "TrailMesh" === DD.type ? pD = YD._TrailMeshParser(DD, zD) : DD.type && "GaussianSplattingMesh" === DD.type ? (pD = DD._isCompound ? YD._GaussianSplattingCompoundMeshParser(DD, zD) : YD._GaussianSplattingMeshParser(DD, zD), sD = !0) : DD.type && "GaussianSplattingPartProxyMesh" === DD.type ? (pD = YD._GaussianSplattingPartProxyMeshParser(DD, zD), sD = !0) : pD = new YD(DD.name, zD), pD.id = DD.id, pD._waitingParsedUniqueId = DD.uniqueId, JD.c && JD.c.AddTagsTo(pD, DD.tags), pD.position = XD.s.FromArray(DD.position), void 0 !== DD.metadata && (pD.metadata = DD.metadata), void 0 !== DD.meshBlendingTag && (pD.meshBlendingTag = DD.meshBlendingTag), DD.rotationQuaternion ? pD.rotationQuaternion = XD.i.FromArray(DD.rotationQuaternion) : DD.rotation && (pD.rotation = XD.s.FromArray(DD.rotation)), pD.rc = XD.s.FromArray(DD.rc), DD.localMatrix ? pD.setPreTransformMatrix(XD.e.FromArray(DD.localMatrix)) : DD.pivotMatrix && pD.setPivotMatrix(XD.e.FromArray(DD.pivotMatrix)), pD.nC(DD.isEnabled), pD.isVisible = DD.isVisible, pD.infiniteDistance = DD.infiniteDistance, pD.lI = !!DD.lI, pD.showBoundingBox = DD.showBoundingBox, pD.showSubMeshesBoundingBox = DD.showSubMeshesBoundingBox, void 0 !== DD.applyFog && (pD.applyFog = DD.applyFog), void 0 !== DD.pickable && (pD.uB = DD.pickable), void 0 !== DD.alphaIndex && (pD.alphaIndex = DD.alphaIndex), pD.receiveShadows = DD.receiveShadows, void 0 !== DD.billboardMode && (pD.billboardMode = DD.billboardMode), void 0 !== DD.visibility && (pD.visibility = DD.visibility), pD.checkCollisions = DD.checkCollisions, pD.ZI = !!DD.ZI, DD.ellipsoid && (pD.ellipsoid = XD.s.FromArray(DD.ellipsoid)), DD.ellipsoidOffset && (pD.ellipsoidOffset = XD.s.FromArray(DD.ellipsoidOffset)), null != DD.overrideMaterialSideOrientation && (pD.sideOrientation = DD.overrideMaterialSideOrientation), void 0 !== DD.sideOrientation && (pD.sideOrientation = DD.sideOrientation), void 0 !== DD.isBlocker && (pD.isBlocker = DD.isBlocker), pD._shouldGenerateFlatShading = DD.useFlatShading, DD.Tl && (pD._waitingData.Tl = DD.Tl), void 0 !== DD.parentId && (pD._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (pD._waitingParentInstanceIndex = DD.parentInstanceIndex), void 0 !== DD.actions && (pD._waitingData.actions = DD.actions), void 0 !== DD.overlayAlpha && (pD.overlayAlpha = DD.overlayAlpha), void 0 !== DD.overlayColor && (pD.overlayColor = VD.d.FromArray(DD.overlayColor)), void 0 !== DD.renderOverlay && (pD.renderOverlay = DD.renderOverlay), pD.isUnIndexed = !!DD.isUnIndexed, pD.hasVertexAlpha = DD.hasVertexAlpha, DD.delayLoadingFile ? (pD.delayLoadState = 4, pD.delayLoadingFile = wD + DD.delayLoadingFile, pD.buildBoundingInfo(XD.s.FromArray(DD.boundingBoxMinimum), XD.s.FromArray(DD.boundingBoxMaximum)), DD._binaryInfo && (pD._binaryInfo = DD._binaryInfo), pD._delayInfo = [], DD.hasUVs && pD._delayInfo.push(CD.k.UVKind), DD.hasUVs2 && pD._delayInfo.push(CD.k.UV2Kind), DD.hasUVs3 && pD._delayInfo.push(CD.k.UV3Kind), DD.hasUVs4 && pD._delayInfo.push(CD.k.UV4Kind), DD.hasUVs5 && pD._delayInfo.push(CD.k.UV5Kind), DD.hasUVs6 && pD._delayInfo.push(CD.k.UV6Kind), DD.hasColors && pD._delayInfo.push(CD.k.ColorKind), DD.hasMatricesIndices && pD._delayInfo.push(CD.k.MatricesIndicesKind), DD.hasMatricesWeights && pD._delayInfo.push(CD.k.MatricesWeightsKind), pD._delayLoadingFunction = TD.e._ImportGeometry, lD.d.ForceFullSceneLoadingForIncremental && pD._checkDelayState()) : sD || TD.e._ImportGeometry(DD, pD), DD.materialUniqueId ? pD._waitingMaterialId = DD.materialUniqueId : DD.materialId && (pD._waitingMaterialId = DD.materialId), DD.morphTargetManagerId > -1 && (pD._waitingMorphTargetManagerId = DD.morphTargetManagerId), void 0 !== DD.skeletonId && null !== DD.skeletonId && (pD.skeleton = zD.getLastSkeletonById(DD.skeletonId), pD._waitingSkeletonId = DD.skeletonId, DD.numBoneInfluencers && (pD.numBoneInfluencers = DD.numBoneInfluencers)), void 0 !== DD.skeletonUniqueId && null !== DD.skeletonUniqueId && (pD._waitingSkeletonUniqueId = DD.skeletonUniqueId), DD.animations) {
          for (let zD = 0; zD < DD.animations.length; zD++) {
            const wD = DD.animations[zD],
              sD = (0, ZD.e)("BABYLON.Animation");
            sD && pD.animations.push(sD.Parse(wD))
          }
          PD.b.ParseAnimationRanges(pD, DD, zD)
        }
        if (DD.autoAnimate && zD.beginAnimation(pD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), DD.layerMask && !isNaN(DD.layerMask) ? pD.layerMask = Math.abs(parseInt(DD.layerMask)) : pD.layerMask = 268435455, DD.physicsImpostor && (pD.physicsImpostor = YD._PhysicsImpostorParser(zD, pD, DD)), DD.lodMeshIds && (pD._waitingData.lods = {
            ids: DD.lodMeshIds,
            distances: DD.lodDistances ? DD.lodDistances : null,
            coverages: DD.lodCoverages ? DD.lodCoverages : null
          }), DD.instances)
          for (let KD = 0; KD < DD.instances.length; KD++) {
            const wD = DD.instances[KD],
              sD = pD.createInstance(wD.name);
            if (wD.id && (sD.id = wD.id), JD.c && (wD.tags ? JD.c.AddTagsTo(sD, wD.tags) : JD.c.AddTagsTo(sD, DD.tags)), sD.position = XD.s.FromArray(wD.position), void 0 !== wD.metadata && (sD.metadata = wD.metadata), void 0 !== wD.parentId && (sD._waitingParentId = wD.parentId), void 0 !== wD.parentInstanceIndex && (sD._waitingParentInstanceIndex = wD.parentInstanceIndex), void 0 !== wD.isEnabled && null !== wD.isEnabled && sD.nC(wD.isEnabled), void 0 !== wD.isVisible && null !== wD.isVisible && (sD.isVisible = wD.isVisible), void 0 !== wD.uB && null !== wD.uB && (sD.uB = wD.uB), wD.rotationQuaternion ? sD.rotationQuaternion = XD.i.FromArray(wD.rotationQuaternion) : wD.rotation && (sD.rotation = XD.s.FromArray(wD.rotation)), sD.rc = XD.s.FromArray(wD.rc), void 0 != wD.checkCollisions && null != wD.checkCollisions && (sD.checkCollisions = wD.checkCollisions), void 0 != wD.pickable && null != wD.pickable && (sD.uB = wD.pickable), void 0 != wD.showBoundingBox && null != wD.showBoundingBox && (sD.showBoundingBox = wD.showBoundingBox), void 0 != wD.showSubMeshesBoundingBox && null != wD.showSubMeshesBoundingBox && (sD.showSubMeshesBoundingBox = wD.showSubMeshesBoundingBox), void 0 != wD.alphaIndex && null != wD.showSubMeshesBoundingBox && (sD.alphaIndex = wD.alphaIndex), wD.physicsImpostor && (sD.physicsImpostor = YD._PhysicsImpostorParser(zD, sD, wD)), void 0 !== wD.actions && (sD._waitingData.actions = wD.actions), wD.animations) {
              for (let DD = 0; DD < wD.animations.length; DD++) {
                const zD = wD.animations[DD],
                  pD = (0, ZD.e)("BABYLON.Animation");
                pD && sD.animations.push(pD.Parse(zD))
              }
              PD.b.ParseAnimationRanges(sD, wD, zD), wD.autoAnimate && zD.beginAnimation(sD, wD.autoAnimateFrom, wD.autoAnimateTo, wD.autoAnimateLoop, wD.autoAnimateSpeed || 1)
            }
          }
        if (DD.thinInstances) {
          const zD = DD.thinInstances;
          if (pD.WzD = !!zD.enablePicking, zD.matrixData ? (pD.f6("matrix", new Float32Array(zD.matrixData), 16, !1), pD._thinInstanceDataStorage.matrixBufferSize = zD.matrixBufferSize, pD._thinInstanceDataStorage.instancesCount = zD.instancesCount) : pD._thinInstanceDataStorage.matrixBufferSize = zD.matrixBufferSize, DD.thinInstances.userThinInstance) {
            const zD = DD.thinInstances.userThinInstance;
            for (const DD in zD.data) pD.f6(DD, new Float32Array(zD.data[DD]), zD.strides[DD], !1), pD._userThinInstanceBuffersStorage.sizes[DD] = zD.sizes[DD]
          }
        }
        return pD
      }
      setPositionsForCPUSkinning() {
        const DD = this._internalMeshDataInfo;
        if (!DD._sourcePositions) {
          const zD = this.getVerticesData(CD.k.PositionKind);
          if (!zD) return DD._sourcePositions;
          DD._sourcePositions = new Float32Array(zD), this.isVertexBufferUpdatable(CD.k.PositionKind) || this.setVerticesData(CD.k.PositionKind, zD, !0)
        }
        return DD._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const DD = this._internalMeshDataInfo;
        if (!DD._sourceNormals) {
          const zD = this.getVerticesData(CD.k.NormalKind);
          if (!zD) return DD._sourceNormals;
          DD._sourceNormals = new Float32Array(zD), this.isVertexBufferUpdatable(CD.k.NormalKind) || this.setVerticesData(CD.k.NormalKind, zD, !0)
        }
        return DD._sourceNormals
      }
      applySkeleton(DD) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Ul().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Ul().getFrameId(), !this.isVerticesDataPresent(CD.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(CD.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(CD.k.MatricesWeightsKind)) return this;
        const zD = this.isVerticesDataPresent(CD.k.NormalKind),
          wD = this._internalMeshDataInfo;
        if (!wD._sourcePositions) {
          const DD = this.QE.slice();
          this.setPositionsForCPUSkinning(), this.QE = DD
        }
        zD && !wD._sourceNormals && this.setNormalsForCPUSkinning();
        let pD = this.getVerticesData(CD.k.PositionKind);
        if (!pD) return this;
        pD instanceof Float32Array || (pD = new Float32Array(pD));
        let sD = this.getVerticesData(CD.k.NormalKind);
        if (zD) {
          if (!sD) return this;
          sD instanceof Float32Array || (sD = new Float32Array(sD))
        }
        const KD = this.getVerticesData(CD.k.MatricesIndicesKind),
          rD = this.getVerticesData(CD.k.MatricesWeightsKind);
        if (!rD || !KD) return this;
        const LD = this.numBoneInfluencers > 4,
          cD = LD ? this.getVerticesData(CD.k.MatricesIndicesExtraKind) : null,
          gD = LD ? this.getVerticesData(CD.k.MatricesWeightsExtraKind) : null,
          RD = DD.getTransformMatrices(this),
          AD = XD.s.Zero(),
          UD = new XD.e,
          fD = new XD.e;
        let ID, BD = 0;
        for (let GD = 0; GD < pD.length; GD += 3, BD += 4) {
          let DD;
          for (ID = 0; ID < 4; ID++) DD = rD[BD + ID], DD > 0 && (XD.e.FromFloat32ArrayToRefScaled(RD, Math.floor(16 * KD[BD + ID]), DD, fD), UD.addToSelf(fD));
          if (LD)
            for (ID = 0; ID < 4; ID++) DD = gD[BD + ID], DD > 0 && (XD.e.FromFloat32ArrayToRefScaled(RD, Math.floor(16 * cD[BD + ID]), DD, fD), UD.addToSelf(fD));
          XD.s.TransformCoordinatesFromFloatsToRef(wD._sourcePositions[GD], wD._sourcePositions[GD + 1], wD._sourcePositions[GD + 2], UD, AD), AD.toArray(pD, GD), zD && (XD.s.TransformNormalFromFloatsToRef(wD._sourceNormals[GD], wD._sourceNormals[GD + 1], wD._sourceNormals[GD + 2], UD, AD), AD.toArray(sD, GD)), UD.reset()
        }
        return this.updateVerticesData(CD.k.PositionKind, pD), zD && this.updateVerticesData(CD.k.NormalKind, sD), this
      }
      static MinMax(DD) {
        let zD = null,
          wD = null;
        for (const pD of DD) {
          const DD = pD.FW().boundingBox;
          zD && wD ? (zD.minimizeInPlace(DD.minimumWorld), wD.maximizeInPlace(DD.maximumWorld)) : (zD = DD.minimumWorld.clone(), wD = DD.maximumWorld.clone())
        }
        return zD && wD ? {
          min: zD,
          max: wD
        } : {
          min: XD.s.Zero(),
          max: XD.s.Zero()
        }
      }
      static Center(DD) {
        const zD = DD instanceof Array ? YD.MinMax(DD) : DD;
        return XD.s.Center(zD.min, zD.max)
      }
      static MergeMeshes(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        return (0, ED.j)(YD._MergeMeshesCoroutine(DD, zD, wD, pD, sD, KD, !1))
      }
      static async MergeMeshesAsync(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, ED.f)(YD._MergeMeshesCoroutine(DD, zD, wD, pD, sD, KD, !0), (0, ED.b)())
      }
      static * _MergeMeshesCoroutine(DD) {
        let zD, wD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          pD = arguments.length > 2 ? arguments[2] : void 0,
          sD = arguments.length > 3 ? arguments[3] : void 0,
          KD = arguments.length > 4 ? arguments[4] : void 0,
          rD = arguments.length > 5 ? arguments[5] : void 0,
          LD = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (DD = DD.filter(Boolean)).length) return null;
        if (!pD) {
          let wD = 0;
          for (zD = 0; zD < DD.length; zD++)
            if (wD += DD[zD].getTotalVertices(), wD >= 65536) return ND.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const cD = DD[0];
        rD && (KD = !1, DD.sort(((DD, zD) => (DD.material?.uniqueId ?? -1) - (zD.material?.uniqueId ?? -1))));
        const gD = new Array,
          RD = new Array,
          AD = new Array,
          UD = DD[0].sideOrientation;
        for (zD = 0; zD < DD.length; zD++) {
          const wD = DD[zD];
          if (wD.Gl) return ND.d.Warn("Cannot merge instance meshes."), null;
          if (UD !== wD.sideOrientation) return ND.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (KD || rD) {
            const DD = AD.reduce(((DD, zD) => Math.max(DD, zD.start + zD.count)), 0);
            if (rD)
              if (wD.material) {
                const zD = wD.material;
                if (zD instanceof iD.d) {
                  for (let DD = 0; DD < zD.M6.length; DD++) gD.indexOf(zD.M6[DD]) < 0 && gD.push(zD.M6[DD]);
                  for (let pD = 0; pD < wD.QE.length; pD++) RD.push(gD.indexOf(zD.M6[wD.QE[pD].materialIndex])), AD.push({
                    start: DD + wD.QE[pD].indexStart,
                    count: wD.QE[pD].indexCount
                  })
                } else {
                  gD.indexOf(zD) < 0 && gD.push(zD);
                  for (let pD = 0; pD < wD.QE.length; pD++) RD.push(gD.indexOf(zD)), AD.push({
                    start: DD + wD.QE[pD].indexStart,
                    count: wD.QE[pD].indexCount
                  })
                }
              } else
                for (let zD = 0; zD < wD.QE.length; zD++) RD.push(0), AD.push({
                  start: DD + wD.QE[zD].indexStart,
                  count: wD.QE[zD].indexCount
                });
            else AD.push({
              start: DD,
              count: wD.getTotalIndices()
            })
          }
        }
        if (rD && AD.length > 1) {
          let DD = 0;
          for (let zD = 1; zD < AD.length; zD++) {
            const wD = AD[DD],
              pD = AD[zD];
            RD[zD] === RD[DD] && wD.start + wD.count === pD.start ? wD.count += pD.count : (DD++, AD[DD] = pD, RD[DD] = RD[zD])
          }
          AD.length = DD + 1, RD.length = DD + 1
        }
        const fD = DD => {
            const zD = DD.computeWorldMatrix(!0);
            return {
              vertexData: xD.b.ExtractFromMesh(DD, !1, !1),
              transform: zD
            }
          },
          {
            vertexData: ID,
            transform: BD
          } = fD(DD[0]);
        LD && (yield);
        const GD = new Array(DD.length - 1);
        for (let ED = 1; ED < DD.length; ED++) GD[ED - 1] = fD(DD[ED]), LD && (yield);
        const hD = ID._mergeCoroutine(BD, GD, pD, LD, !wD);
        let nD = hD.next();
        for (; !nD.done;) LD && (yield), nD = hD.next();
        const MD = nD.value;
        sD || (sD = new YD(cD.name + "_merged", cD.Ul()));
        const OD = MD._applyToCoroutine(sD, void 0, LD);
        let JD = OD.next();
        for (; !JD.done;) LD && (yield), JD = OD.next();
        if (sD.checkCollisions = cD.checkCollisions, sD.sideOrientation = cD.sideOrientation, wD)
          for (zD = 0; zD < DD.length; zD++) DD[zD].dispose();
        if (KD || rD) {
          for (sD.releaseSubMeshes(), zD = 0; zD < AD.length;) jD.b.CreateFromIndices(0, AD[zD].start, AD[zD].count, sD, void 0, !1), zD++;
          for (const DD of sD.QE) DD.refreshBoundingInfo();
          sD.computeWorldMatrix(!0)
        }
        if (rD) {
          const DD = new iD.d(cD.name + "_merged", cD.Ul());
          DD.M6 = gD;
          for (let zD = 0; zD < sD.QE.length; zD++) sD.QE[zD].materialIndex = RD[zD];
          sD.material = DD
        } else sD.material = cD.material;
        return sD
      }
      o4(DD) {
        DD._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(DD)
      }
      B5(DD) {
        const zD = DD._indexInSourceMeshInstanceArray;
        if (-1 != zD) {
          if (zD !== this.instances.length - 1) {
            const DD = this.instances[this.instances.length - 1];
            this.instances[zD] = DD, DD._indexInSourceMeshInstanceArray = zD
          }
          DD._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === dD.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(DD) {
        const zD = this.Ul();
        return zD.forcePointsCloud ? dD.b.PointFillMode : zD.forceWireframe ? dD.b.WireFrameFillMode : this.overrideRenderingFillMode ?? DD
      }
      setMaterialByID(DD) {
        return this.setMaterialById(DD)
      }
      static CreateRibbon(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(DD, zD, wD, pD, sD, KD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(DD, zD, wD, pD, sD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(DD, zD, wD, pD, sD, KD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(DD, zD, wD, pD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(DD, zD, wD, pD, sD, KD, rD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(DD, zD, wD, pD, sD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(DD, zD, wD, pD, sD, KD, rD, LD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(DD, zD, wD, pD, sD, KD, rD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(DD, zD, wD, pD, sD, KD, rD, LD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(DD, zD, wD, pD, sD, KD, rD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(DD, zD, wD, pD, sD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(DD, zD, wD, pD, sD, KD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(DD, zD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(DD, zD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(DD, zD, wD, pD, sD, KD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(DD, zD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(DD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    YD.FRONTSIDE = xD.b.FRONTSIDE, YD.BACKSIDE = xD.b.BACKSIDE, YD.DOUBLESIDE = xD.b.DOUBLESIDE, YD.DEFAULTSIDE = xD.b.DEFAULTSIDE, YD.NO_CAP = 0, YD.CAP_START = 1, YD.CAP_END = 2, YD.CAP_ALL = 3, YD.NO_FLIP = 0, YD.FLIP_TILE = 1, YD.ROTATE_TILE = 2, YD.FLIP_ROW = 3, YD.ROTATE_ROW = 4, YD.FLIP_N_ROTATE_TILE = 5, YD.FLIP_N_ROTATE_ROW = 6, YD.CENTER = 0, YD.LEFT = 1, YD.RIGHT = 2, YD.TOP = 3, YD.BOTTOM = 4, YD.INSTANCEDMESH_SORT_TRANSPARENT = !1, YD._GroundMeshParser = (DD, zD) => {
      throw (0, yD.j)("GroundMesh")
    }, YD._GoldbergMeshParser = (DD, zD) => {
      throw (0, yD.j)("GoldbergMesh")
    }, YD._LinesMeshParser = (DD, zD) => {
      throw (0, yD.j)("LinesMesh")
    }, YD._GreasedLineMeshParser = (DD, zD) => {
      throw (0, yD.j)("GreasedLineMesh")
    }, YD._GreasedLineRibbonMeshParser = (DD, zD) => {
      throw (0, yD.j)("GreasedLineRibbonMesh")
    }, YD._TrailMeshParser = (DD, zD) => {
      throw (0, yD.j)("TrailMesh")
    }, YD._GaussianSplattingMeshParser = (DD, zD) => {
      throw (0, yD.j)("GaussianSplattingMesh")
    }, YD._GaussianSplattingPartProxyMeshParser = (DD, zD) => {
      throw (0, yD.j)("GaussianSplattingPartProxyMesh")
    }, YD._GaussianSplattingCompoundMeshParser = (DD, zD) => {
      throw (0, yD.j)("GaussianSplattingCompoundMesh")
    };
    let HD = !1;

    function qD() {
      HD || (HD = !0, (0, ZD.i)("BABYLON.Mesh", YD))
    }(pD = YD.prototype).dW ?? (pD.dW = (0, yD.h)("Mesh", "dW")), (sD = YD.prototype).simplify ?? (sD.simplify = (0, yD.h)("Mesh", "simplify")), (KD = YD.prototype).thinInstanceAdd ?? (KD.thinInstanceAdd = (0, yD.h)("Mesh", "thinInstanceAdd")), (rD = YD.prototype).thinInstanceAddSelf ?? (rD.thinInstanceAddSelf = (0, yD.h)("Mesh", "thinInstanceAddSelf")), (LD = YD.prototype).thinInstanceRegisterAttribute ?? (LD.thinInstanceRegisterAttribute = (0, yD.h)("Mesh", "thinInstanceRegisterAttribute")), (cD = YD.prototype).thinInstanceSetMatrixAt ?? (cD.thinInstanceSetMatrixAt = (0, yD.h)("Mesh", "thinInstanceSetMatrixAt")), (gD = YD.prototype).thinInstanceSetAttributeAt ?? (gD.thinInstanceSetAttributeAt = (0, yD.h)("Mesh", "thinInstanceSetAttributeAt")), (RD = YD.prototype).f6 ?? (RD.f6 = (0, yD.h)("Mesh", "f6")), (AD = YD.prototype).thinInstanceGetWorldMatrices ?? (AD.thinInstanceGetWorldMatrices = (0, yD.h)("Mesh", "thinInstanceGetWorldMatrices")), (UD = YD.prototype).o5 ?? (UD.o5 = (0, yD.h)("Mesh", "o5")), (fD = YD.prototype).thinInstancePartialBufferUpdate ?? (fD.thinInstancePartialBufferUpdate = (0, yD.h)("Mesh", "thinInstancePartialBufferUpdate")), (ID = YD.prototype).thinInstanceRefreshBoundingInfo ?? (ID.thinInstanceRefreshBoundingInfo = (0, yD.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (BD = YD.prototype).getEmittedParticleSystems ?? (BD.getEmittedParticleSystems = (0, yD.h)("Mesh", "getEmittedParticleSystems")), (GD = YD.prototype).getHierarchyEmittedParticleSystems ?? (GD.getHierarchyEmittedParticleSystems = (0, yD.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(YD.prototype, "edgesShareWithInstances") || Object.defineProperty(YD.prototype, "edgesShareWithInstances", (0, yD.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(YD.prototype, "WzD") || Object.defineProperty(YD.prototype, "WzD", (0, yD.g)("Mesh", "WzD")), Object.getOwnPropertyDescriptor(YD.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(YD.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, yD.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(YD.prototype, "A4") || Object.defineProperty(YD.prototype, "A4", (0, yD.g)("Mesh", "A4"))
  },
  40348: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID
    });
    var pD = wD(39921),
      sD = wD(37079),
      KD = wD(40066),
      rD = wD(39808),
      LD = wD(37273),
      cD = wD(38662),
      gD = wD(39927),
      RD = wD(40342),
      AD = wD(39971),
      UD = wD(40224);
    class fD {}
    let ID = (() => {
      var DD;
      let zD, wD, ID, BD, GD = [];
      return DD = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, RD.c)(this._applyToCoroutine.bind(this)), this.uniqueId = DD._UniqueIdGenerator, DD._UniqueIdGenerator++
        }
        set(DD, zD) {
          switch (DD.length || cD.d.Warn(`Setting vertex data kind '${zD}' with an empty array`), zD) {
            case KD.k.PositionKind:
              this.positions = DD;
              break;
            case KD.k.NormalKind:
              this.normals = DD;
              break;
            case KD.k.TangentKind:
              this.tangents = DD;
              break;
            case KD.k.UVKind:
              this.uvs = DD;
              break;
            case KD.k.UV2Kind:
              this.uvs2 = DD;
              break;
            case KD.k.UV3Kind:
              this.uvs3 = DD;
              break;
            case KD.k.UV4Kind:
              this.uvs4 = DD;
              break;
            case KD.k.UV5Kind:
              this.uvs5 = DD;
              break;
            case KD.k.UV6Kind:
              this.uvs6 = DD;
              break;
            case KD.k.ColorKind:
              this.colors = DD;
              break;
            case KD.k.MatricesIndicesKind:
              this.matricesIndices = DD;
              break;
            case KD.k.MatricesWeightsKind:
              this.matricesWeights = DD;
              break;
            case KD.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = DD;
              break;
            case KD.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = DD
          }
        }
        applyToMesh(DD, zD) {
          return this._applyTo(DD, zD, !1), this
        }
        applyToGeometry(DD, zD) {
          return this._applyTo(DD, zD, !1), this
        }
        updateMesh(DD) {
          return this._update(DD), this
        }
        updateGeometry(DD) {
          return this._update(DD), this
        }* _applyToCoroutine(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wD = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (DD.setVerticesData(KD.k.PositionKind, this.positions, zD), wD && (yield)), this.normals && (DD.setVerticesData(KD.k.NormalKind, this.normals, zD), wD && (yield)), this.tangents && (DD.setVerticesData(KD.k.TangentKind, this.tangents, zD), wD && (yield)), this.uvs && (DD.setVerticesData(KD.k.UVKind, this.uvs, zD), wD && (yield)), this.uvs2 && (DD.setVerticesData(KD.k.UV2Kind, this.uvs2, zD), wD && (yield)), this.uvs3 && (DD.setVerticesData(KD.k.UV3Kind, this.uvs3, zD), wD && (yield)), this.uvs4 && (DD.setVerticesData(KD.k.UV4Kind, this.uvs4, zD), wD && (yield)), this.uvs5 && (DD.setVerticesData(KD.k.UV5Kind, this.uvs5, zD), wD && (yield)), this.uvs6 && (DD.setVerticesData(KD.k.UV6Kind, this.uvs6, zD), wD && (yield)), this.colors) {
            const pD = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            DD.setVerticesData(KD.k.ColorKind, this.colors, zD, pD), this.hasVertexAlpha && void 0 !== DD.hasVertexAlpha && (DD.hasVertexAlpha = !0), wD && (yield)
          }
          if (this.matricesIndices && (DD.setVerticesData(KD.k.MatricesIndicesKind, this.matricesIndices, zD), wD && (yield)), this.matricesWeights && (DD.setVerticesData(KD.k.MatricesWeightsKind, this.matricesWeights, zD), wD && (yield)), this.matricesIndicesExtra && (DD.setVerticesData(KD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zD), wD && (yield)), this.matricesWeightsExtra && (DD.setVerticesData(KD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zD), wD && (yield)), this.indices ? (DD.setIndices(this.indices, null, zD), wD && (yield)) : DD.setIndices([], null), DD.QE && this.materialInfos && this.materialInfos.length > 1) {
            const zD = DD;
            zD.QE = [];
            for (const DD of this.materialInfos) new UD.b(DD.materialIndex, DD.verticesStart, DD.verticesCount, DD.indexStart, DD.indexCount, zD)
          }
          return this
        }
        _update(DD, zD, wD) {
          return this.positions && DD.updateVerticesData(KD.k.PositionKind, this.positions, zD, wD), this.normals && DD.updateVerticesData(KD.k.NormalKind, this.normals, zD, wD), this.tangents && DD.updateVerticesData(KD.k.TangentKind, this.tangents, zD, wD), this.uvs && DD.updateVerticesData(KD.k.UVKind, this.uvs, zD, wD), this.uvs2 && DD.updateVerticesData(KD.k.UV2Kind, this.uvs2, zD, wD), this.uvs3 && DD.updateVerticesData(KD.k.UV3Kind, this.uvs3, zD, wD), this.uvs4 && DD.updateVerticesData(KD.k.UV4Kind, this.uvs4, zD, wD), this.uvs5 && DD.updateVerticesData(KD.k.UV5Kind, this.uvs5, zD, wD), this.uvs6 && DD.updateVerticesData(KD.k.UV6Kind, this.uvs6, zD, wD), this.colors && DD.updateVerticesData(KD.k.ColorKind, this.colors, zD, wD), this.matricesIndices && DD.updateVerticesData(KD.k.MatricesIndicesKind, this.matricesIndices, zD, wD), this.matricesWeights && DD.updateVerticesData(KD.k.MatricesWeightsKind, this.matricesWeights, zD, wD), this.matricesIndicesExtra && DD.updateVerticesData(KD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zD, wD), this.matricesWeightsExtra && DD.updateVerticesData(KD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zD, wD), this.indices && DD.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const KD = sD.n.WI[0],
            rD = sD.n.WI[1];
          for (let LD = wD; LD < wD + pD; LD += 3) sD.s.FromArrayToRef(DD, LD, KD), sD.s.TransformCoordinatesToRef(KD, zD, rD), DD[LD] = rD.x, DD[LD + 1] = rD.y, DD[LD + 2] = rD.z
        }
        static _TransformVector3Normals(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const KD = sD.n.WI[0],
            rD = sD.n.WI[1];
          for (let LD = wD; LD < wD + pD; LD += 3) sD.s.FromArrayToRef(DD, LD, KD), sD.s.TransformNormalToRef(KD, zD, rD), DD[LD] = rD.x, DD[LD + 1] = rD.y, DD[LD + 2] = rD.z
        }
        static _TransformVector4Normals(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const KD = sD.n.Vector4[0],
            rD = sD.n.Vector4[1];
          for (let LD = wD; LD < wD + pD; LD += 4) sD.t.FromArrayToRef(DD, LD, KD), sD.t.TransformNormalToRef(KD, zD, rD), DD[LD] = rD.x, DD[LD + 1] = rD.y, DD[LD + 2] = rD.z, DD[LD + 3] = rD.w
        }
        static _FlipFaces(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length;
          for (let pD = zD; pD < zD + wD; pD += 3) {
            const zD = DD[pD + 1];
            DD[pD + 1] = DD[pD + 2], DD[pD + 2] = zD
          }
        }
        transform(zD) {
          const wD = zD.determinant() < 0;
          return this.positions && DD._TransformVector3Coordinates(this.positions, zD), this.normals && DD._TransformVector3Normals(this.normals, zD), this.tangents && DD._TransformVector4Normals(this.tangents, zD), wD && this.indices && DD._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const zD = [];
          for (const wD of this.materialInfos) {
            const pD = new DD;
            if (this.positions && (pD.positions = this.positions.slice(3 * wD.verticesStart, 3 * (wD.verticesCount + wD.verticesStart))), this.normals && (pD.normals = this.normals.slice(3 * wD.verticesStart, 3 * (wD.verticesCount + wD.verticesStart))), this.tangents && (pD.tangents = this.tangents.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.colors && (pD.colors = this.colors.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.uvs && (pD.uvs = this.uvs.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.uvs2 && (pD.uvs2 = this.uvs2.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.uvs3 && (pD.uvs3 = this.uvs3.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.uvs4 && (pD.uvs4 = this.uvs4.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.uvs5 && (pD.uvs5 = this.uvs5.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.uvs6 && (pD.uvs6 = this.uvs6.slice(2 * wD.verticesStart, 2 * (wD.verticesCount + wD.verticesStart))), this.matricesIndices && (pD.matricesIndices = this.matricesIndices.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.matricesIndicesExtra && (pD.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.matricesWeights && (pD.matricesWeights = this.matricesWeights.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.matricesWeightsExtra && (pD.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * wD.verticesStart, 4 * (wD.verticesCount + wD.verticesStart))), this.indices) {
              pD.indices = [];
              for (let DD = wD.indexStart; DD < wD.indexStart + wD.indexCount; DD++) pD.indices.push(this.indices[DD] - wD.verticesStart)
            }
            const sD = new fD;
            sD.indexStart = 0, sD.indexCount = pD.indices ? pD.indices.length : 0, sD.materialIndex = wD.materialIndex, sD.verticesStart = 0, sD.verticesCount = (pD.positions ? pD.positions.length : 0) / 3, pD.materialInfos = [sD], zD.push(pD)
          }
          return zD
        }
        merge(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const KD = Array.isArray(DD) ? DD.map((DD => ({
            vertexData: DD
          }))) : [{
            vertexData: DD
          }];
          return (0, RD.j)(this._mergeCoroutine(void 0, KD, zD, !1, wD, pD, sD))
        }* _mergeCoroutine(zD, wD) {
          let pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            sD = arguments.length > 3 ? arguments[3] : void 0,
            rD = arguments.length > 4 ? arguments[4] : void 0,
            LD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            cD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let gD = wD.map((DD => DD.vertexData)),
            RD = this;
          if (cD)
            for (const DD of gD) DD && (DD._validate(), !this.normals && DD.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && DD.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && DD.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && DD.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && DD.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && DD.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && DD.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && DD.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && DD.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && DD.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && DD.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && DD.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && DD.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const DD of gD)
            if (DD)
              if (cD) this.normals && !DD.normals && (DD.normals = new Float32Array(DD.positions.length)), this.tangents && !DD.tangents && (DD.tangents = new Float32Array(DD.positions.length / 3 * 4)), this.uvs && !DD.uvs && (DD.uvs = new Float32Array(DD.positions.length / 3 * 2)), this.uvs2 && !DD.uvs2 && (DD.uvs2 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs3 && !DD.uvs3 && (DD.uvs3 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs4 && !DD.uvs4 && (DD.uvs4 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs5 && !DD.uvs5 && (DD.uvs5 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs6 && !DD.uvs6 && (DD.uvs6 = new Float32Array(DD.positions.length / 3 * 2)), this.colors && !DD.colors && (DD.colors = new Float32Array(DD.positions.length / 3 * 4), DD.colors.fill(1)), this.matricesIndices && !DD.matricesIndices && (DD.matricesIndices = new Float32Array(DD.positions.length / 3 * 4)), this.matricesWeights && !DD.matricesWeights && (DD.matricesWeights = new Float32Array(DD.positions.length / 3 * 4)), this.matricesIndicesExtra && !DD.matricesIndicesExtra && (DD.matricesIndicesExtra = new Float32Array(DD.positions.length / 3 * 4)), this.matricesWeightsExtra && !DD.matricesWeightsExtra && (DD.matricesWeightsExtra = new Float32Array(DD.positions.length / 3 * 4));
              else if (DD._validate(), !this.normals !== !DD.normals || !this.tangents !== !DD.tangents || !this.uvs !== !DD.uvs || !this.uvs2 !== !DD.uvs2 || !this.uvs3 !== !DD.uvs3 || !this.uvs4 !== !DD.uvs4 || !this.uvs5 !== !DD.uvs5 || !this.uvs6 !== !DD.uvs6 || !this.colors !== !DD.colors || !this.matricesIndices !== !DD.matricesIndices || !this.matricesWeights !== !DD.matricesWeights || !this.matricesIndicesExtra !== !DD.matricesIndicesExtra || !this.matricesWeightsExtra !== !DD.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (LD) {
            let DD, pD = 0,
              sD = 0;
            const KD = [];
            let rD = null;
            const LD = [];
            for (const wD of this.splitBasedOnMaterialID()) LD.push({
              vertexData: wD,
              transform: zD
            });
            for (const zD of wD)
              if (zD.vertexData)
                for (const DD of zD.vertexData.splitBasedOnMaterialID()) LD.push({
                  vertexData: DD,
                  transform: zD.transform
                });
            LD.sort(((DD, zD) => {
              const wD = DD.vertexData.materialInfos ? DD.vertexData.materialInfos[0].materialIndex : 0,
                pD = zD.vertexData.materialInfos ? zD.vertexData.materialInfos[0].materialIndex : 0;
              return wD > pD ? 1 : wD === pD ? 0 : -1
            }));
            for (const zD of LD) {
              const wD = zD.vertexData;
              if (DD = wD.materialInfos ? wD.materialInfos[0].materialIndex : 0, rD && rD.materialIndex === DD) rD.indexCount += wD.indices.length, rD.verticesCount += wD.positions.length / 3;
              else {
                const zD = new fD;
                zD.materialIndex = DD, zD.indexStart = pD, zD.indexCount = wD.indices.length, zD.verticesStart = sD, zD.verticesCount = wD.positions.length / 3, KD.push(zD), rD = zD
              }
              pD += wD.indices.length, sD += wD.positions.length / 3
            }
            const cD = LD.splice(0, 1)[0];
            RD = cD.vertexData, zD = cD.transform, gD = LD.map((DD => DD.vertexData)), wD = LD, this.materialInfos = KD
          }
          const AD = gD.reduce(((DD, zD) => DD + (zD.indices?.length ?? 0)), RD.indices?.length ?? 0);
          let UD = rD || gD.some((DD => DD.indices === RD.indices)) ? RD.indices?.slice() : RD.indices;
          if (AD > 0) {
            let KD = UD?.length ?? 0;
            if (UD || (UD = new Array(AD)), UD.length !== AD) {
              if (Array.isArray(UD)) UD.length = AD;
              else {
                const DD = pD || UD instanceof Uint32Array ? new Uint32Array(AD) : new Uint16Array(AD);
                DD.set(UD), UD = DD
              }
              zD && zD.determinant() < 0 && DD._FlipFaces(UD, 0, KD)
            }
            let rD = RD.positions ? RD.positions.length / 3 : 0;
            for (const {
                vertexData: zD,
                transform: pD
              }
              of wD)
              if (zD.indices) {
                for (let DD = 0; DD < zD.indices.length; DD++) UD[KD + DD] = zD.indices[DD] + rD;
                pD && pD.determinant() < 0 && DD._FlipFaces(UD, KD, zD.indices.length), rD += zD.positions.length / 3, KD += zD.indices.length, sD && (yield)
              }
          }
          return this.indices = UD, this.positions = DD._MergeElement(KD.k.PositionKind, RD.positions, zD, wD.map((DD => [DD.vertexData.positions, DD.transform]))), sD && (yield), RD.normals && (this.normals = DD._MergeElement(KD.k.NormalKind, RD.normals, zD, wD.map((DD => [DD.vertexData.normals, DD.transform]))), sD && (yield)), RD.tangents && (this.tangents = DD._MergeElement(KD.k.TangentKind, RD.tangents, zD, wD.map((DD => [DD.vertexData.tangents, DD.transform]))), sD && (yield)), RD.uvs && (this.uvs = DD._MergeElement(KD.k.UVKind, RD.uvs, zD, wD.map((DD => [DD.vertexData.uvs, DD.transform]))), sD && (yield)), RD.uvs2 && (this.uvs2 = DD._MergeElement(KD.k.UV2Kind, RD.uvs2, zD, wD.map((DD => [DD.vertexData.uvs2, DD.transform]))), sD && (yield)), RD.uvs3 && (this.uvs3 = DD._MergeElement(KD.k.UV3Kind, RD.uvs3, zD, wD.map((DD => [DD.vertexData.uvs3, DD.transform]))), sD && (yield)), RD.uvs4 && (this.uvs4 = DD._MergeElement(KD.k.UV4Kind, RD.uvs4, zD, wD.map((DD => [DD.vertexData.uvs4, DD.transform]))), sD && (yield)), RD.uvs5 && (this.uvs5 = DD._MergeElement(KD.k.UV5Kind, RD.uvs5, zD, wD.map((DD => [DD.vertexData.uvs5, DD.transform]))), sD && (yield)), RD.uvs6 && (this.uvs6 = DD._MergeElement(KD.k.UV6Kind, RD.uvs6, zD, wD.map((DD => [DD.vertexData.uvs6, DD.transform]))), sD && (yield)), RD.colors && (this.colors = DD._MergeElement(KD.k.ColorKind, RD.colors, zD, wD.map((DD => [DD.vertexData.colors, DD.transform]))), (void 0 !== RD.hasVertexAlpha || wD.some((DD => void 0 !== DD.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = RD.hasVertexAlpha || wD.some((DD => DD.vertexData.hasVertexAlpha))), sD && (yield)), RD.matricesIndices && (this.matricesIndices = DD._MergeElement(KD.k.MatricesIndicesKind, RD.matricesIndices, zD, wD.map((DD => [DD.vertexData.matricesIndices, DD.transform]))), sD && (yield)), RD.matricesWeights && (this.matricesWeights = DD._MergeElement(KD.k.MatricesWeightsKind, RD.matricesWeights, zD, wD.map((DD => [DD.vertexData.matricesWeights, DD.transform]))), sD && (yield)), RD.matricesIndicesExtra && (this.matricesIndicesExtra = DD._MergeElement(KD.k.MatricesIndicesExtraKind, RD.matricesIndicesExtra, zD, wD.map((DD => [DD.vertexData.matricesIndicesExtra, DD.transform]))), sD && (yield)), RD.matricesWeightsExtra && (this.matricesWeightsExtra = DD._MergeElement(KD.k.MatricesWeightsExtraKind, RD.matricesWeightsExtra, zD, wD.map((DD => [DD.vertexData.matricesWeightsExtra, DD.transform])))), this
        }
        static _MergeElement(zD, wD, pD, sD) {
          const rD = sD.filter((DD => null !== DD[0] && void 0 !== DD[0]));
          if (!wD && 0 == rD.length) return wD;
          if (!wD) return this._MergeElement(zD, rD[0][0], rD[0][1], rD.slice(1));
          const LD = rD.reduce(((DD, zD) => DD + zD[0].length), wD.length),
            cD = zD === KD.k.PositionKind ? DD._TransformVector3Coordinates : zD === KD.k.NormalKind ? DD._TransformVector3Normals : zD === KD.k.TangentKind ? DD._TransformVector4Normals : () => {};
          if (wD instanceof Float32Array) {
            const DD = new Float32Array(LD);
            DD.set(wD), pD && cD(DD, pD, 0, wD.length);
            let zD = wD.length;
            for (const [wD, pD] of rD) DD.set(wD, zD), pD && cD(DD, pD, zD, wD.length), zD += wD.length;
            return DD
          } {
            const DD = new Array(LD);
            for (let pD = 0; pD < wD.length; pD++) DD[pD] = wD[pD];
            pD && cD(DD, pD, 0, wD.length);
            let zD = wD.length;
            for (const [wD, pD] of rD) {
              for (let pD = 0; pD < wD.length; pD++) DD[zD + pD] = wD[pD];
              pD && cD(DD, pD, zD, wD.length), zD += wD.length
            }
            return DD
          }
        }
        _validate() {
          if (!this.positions) throw new AD.g("Positions are required", AD.d.MeshInvalidPositionsError);
          const DD = (DD, zD) => {
              const wD = (0, KD.h)(DD);
              if (zD.length % wD !== 0) throw new Error("The " + DD + "s array count must be a multiple of " + wD);
              return zD.length / wD
            },
            zD = DD(KD.k.PositionKind, this.positions),
            wD = (wD, pD) => {
              const sD = DD(wD, pD);
              if (sD !== zD) throw new Error("The " + wD + "s element count (" + sD + ") does not match the positions count (" + zD + ")")
            };
          this.normals && wD(KD.k.NormalKind, this.normals), this.tangents && wD(KD.k.TangentKind, this.tangents), this.uvs && wD(KD.k.UVKind, this.uvs), this.uvs2 && wD(KD.k.UV2Kind, this.uvs2), this.uvs3 && wD(KD.k.UV3Kind, this.uvs3), this.uvs4 && wD(KD.k.UV4Kind, this.uvs4), this.uvs5 && wD(KD.k.UV5Kind, this.uvs5), this.uvs6 && wD(KD.k.UV6Kind, this.uvs6), this.colors && wD(KD.k.ColorKind, this.colors), this.matricesIndices && wD(KD.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && wD(KD.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && wD(KD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && wD(KD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const zD = this.serialize();
          return DD.Parse(zD)
        }
        serialize() {
          const DD = {};
          if (this.positions && (DD.positions = Array.from(this.positions)), this.normals && (DD.normals = Array.from(this.normals)), this.tangents && (DD.tangents = Array.from(this.tangents)), this.uvs && (DD.uvs = Array.from(this.uvs)), this.uvs2 && (DD.uvs2 = Array.from(this.uvs2)), this.uvs3 && (DD.uvs3 = Array.from(this.uvs3)), this.uvs4 && (DD.uvs4 = Array.from(this.uvs4)), this.uvs5 && (DD.uvs5 = Array.from(this.uvs5)), this.uvs6 && (DD.uvs6 = Array.from(this.uvs6)), this.colors && (DD.colors = Array.from(this.colors), DD.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (DD.matricesIndices = Array.from(this.matricesIndices), DD.matricesIndicesExpanded = !0), this.matricesWeights && (DD.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (DD.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), DD.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (DD.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), DD.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            DD.materialInfos = [];
            for (const zD of this.materialInfos) {
              const wD = {
                indexStart: zD.indexStart,
                indexCount: zD.indexCount,
                materialIndex: zD.materialIndex,
                verticesStart: zD.verticesStart,
                verticesCount: zD.verticesCount
              };
              DD.materialInfos.push(wD)
            }
          }
          return DD
        }
        static ExtractFromMesh(zD, wD, pD) {
          return DD._ExtractFrom(zD, wD, pD)
        }
        static ExtractFromGeometry(zD, wD, pD) {
          return DD._ExtractFrom(zD, wD, pD)
        }
        static _ExtractFrom(zD, wD, pD) {
          const sD = new DD;
          if (zD.isVerticesDataPresent(KD.k.PositionKind) && (sD.positions = zD.getVerticesData(KD.k.PositionKind, wD, pD)), zD.isVerticesDataPresent(KD.k.NormalKind) && (sD.normals = zD.getVerticesData(KD.k.NormalKind, wD, pD)), zD.isVerticesDataPresent(KD.k.TangentKind) && (sD.tangents = zD.getVerticesData(KD.k.TangentKind, wD, pD)), zD.isVerticesDataPresent(KD.k.UVKind) && (sD.uvs = zD.getVerticesData(KD.k.UVKind, wD, pD)), zD.isVerticesDataPresent(KD.k.UV2Kind) && (sD.uvs2 = zD.getVerticesData(KD.k.UV2Kind, wD, pD)), zD.isVerticesDataPresent(KD.k.UV3Kind) && (sD.uvs3 = zD.getVerticesData(KD.k.UV3Kind, wD, pD)), zD.isVerticesDataPresent(KD.k.UV4Kind) && (sD.uvs4 = zD.getVerticesData(KD.k.UV4Kind, wD, pD)), zD.isVerticesDataPresent(KD.k.UV5Kind) && (sD.uvs5 = zD.getVerticesData(KD.k.UV5Kind, wD, pD)), zD.isVerticesDataPresent(KD.k.UV6Kind) && (sD.uvs6 = zD.getVerticesData(KD.k.UV6Kind, wD, pD)), zD.isVerticesDataPresent(KD.k.ColorKind)) {
            const DD = zD.geometry || zD,
              rD = DD.getVertexBuffer(KD.k.ColorKind),
              LD = DD.getVerticesData(KD.k.ColorKind, wD, pD);
            if (3 === rD.getSize()) {
              const DD = new Float32Array(4 * LD.length / 3);
              for (let zD = 0, wD = 0; zD < LD.length; zD += 3, wD += 4) DD[wD] = LD[zD], DD[wD + 1] = LD[zD + 1], DD[wD + 2] = LD[zD + 2], DD[wD + 3] = 1;
              sD.colors = DD
            } else {
              if (4 !== rD.getSize()) throw new Error(`Unexpected number of color components: ${rD.getSize()}`);
              sD.colors = LD
            }
          }
          return zD.isVerticesDataPresent(KD.k.MatricesIndicesKind) && (sD.matricesIndices = zD.getVerticesData(KD.k.MatricesIndicesKind, wD, pD)), zD.isVerticesDataPresent(KD.k.MatricesWeightsKind) && (sD.matricesWeights = zD.getVerticesData(KD.k.MatricesWeightsKind, wD, pD)), zD.isVerticesDataPresent(KD.k.MatricesIndicesExtraKind) && (sD.matricesIndicesExtra = zD.getVerticesData(KD.k.MatricesIndicesExtraKind, wD, pD)), zD.isVerticesDataPresent(KD.k.MatricesWeightsExtraKind) && (sD.matricesWeightsExtra = zD.getVerticesData(KD.k.MatricesWeightsExtraKind, wD, pD)), sD.indices = zD.XpD(wD, pD), sD
        }
        static CreateRibbon(DD) {
          throw (0, rD.j)("ribbonBuilder")
        }
        static CreateBox(DD) {
          throw (0, rD.j)("boxBuilder")
        }
        static CreateTiledBox(DD) {
          throw (0, rD.j)("tiledBoxBuilder")
        }
        static CreateTiledPlane(DD) {
          throw (0, rD.j)("tiledPlaneBuilder")
        }
        static CreateSphere(DD) {
          throw (0, rD.j)("sphereBuilder")
        }
        static CreateCylinder(DD) {
          throw (0, rD.j)("cylinderBuilder")
        }
        static CreateTorus(DD) {
          throw (0, rD.j)("torusBuilder")
        }
        static CreateLineSystem(DD) {
          throw (0, rD.j)("linesBuilder")
        }
        static CreateDashedLines(DD) {
          throw (0, rD.j)("linesBuilder")
        }
        static CreateGround(DD) {
          throw (0, rD.j)("groundBuilder")
        }
        static CreateTiledGround(DD) {
          throw (0, rD.j)("groundBuilder")
        }
        static CreateGroundFromHeightMap(DD) {
          throw (0, rD.j)("groundBuilder")
        }
        static CreatePlane(DD) {
          throw (0, rD.j)("planeBuilder")
        }
        static CreateDisc(DD) {
          throw (0, rD.j)("discBuilder")
        }
        static CreatePolygon(DD, zD, wD, pD, sD, KD, LD) {
          throw (0, rD.j)("polygonBuilder")
        }
        static CreateIcoSphere(DD) {
          throw (0, rD.j)("icoSphereBuilder")
        }
        static CreatePolyhedron(DD) {
          throw (0, rD.j)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || sD.s.Up();
          throw (0, rD.j)("capsuleBuilder")
        }
        static CreateTorusKnot(DD) {
          throw (0, rD.j)("torusKnotBuilder")
        }
        static ComputeNormals(DD, zD, wD, pD) {
          let KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD = !1,
            PD = !1,
            CD = !1,
            xD = !1,
            TD = 1,
            bD = 0,
            jD = null;
          pD && (VD = !!pD.facetNormals, PD = !!pD.facetPositions, CD = !!pD.facetPartitioning, TD = !0 === pD.useRightHandedSystem ? -1 : 1, bD = pD.ratio || 0, xD = !!pD.depthSort, jD = pD.distanceTo, xD && void 0 === jD && (jD = sD.s.Zero()));
          let dD = 0,
            SD = 0,
            iD = 0,
            lD = 0;
          for (CD && pD && pD.bbSize && (dD = pD.subDiv.X * bD / pD.bbSize.x, SD = pD.subDiv.Y * bD / pD.bbSize.y, iD = pD.subDiv.Z * bD / pD.bbSize.z, lD = pD.subDiv.max * pD.subDiv.max, pD.facetPartitioning.length = 0), KD = 0; KD < DD.length; KD++) wD[KD] = 0;
          const WD = zD.length / 3 | 0;
          for (KD = 0; KD < WD; KD++) {
            if (GD = 3 * zD[3 * KD], hD = GD + 1, nD = GD + 2, MD = 3 * zD[3 * KD + 1], OD = MD + 1, JD = MD + 2, ED = 3 * zD[3 * KD + 2], QD = ED + 1, XD = ED + 2, rD = DD[GD] - DD[MD], LD = DD[hD] - DD[OD], cD = DD[nD] - DD[JD], gD = DD[ED] - DD[MD], RD = DD[QD] - DD[OD], AD = DD[XD] - DD[JD], UD = TD * (LD * AD - cD * RD), fD = TD * (cD * gD - rD * AD), ID = TD * (rD * RD - LD * gD), BD = Math.sqrt(UD * UD + fD * fD + ID * ID), BD = 0 === BD ? 1 : BD, UD /= BD, fD /= BD, ID /= BD, VD && pD && (pD.facetNormals[KD].x = UD, pD.facetNormals[KD].y = fD, pD.facetNormals[KD].z = ID), PD && pD && (pD.facetPositions[KD].x = (DD[GD] + DD[MD] + DD[ED]) / 3, pD.facetPositions[KD].y = (DD[hD] + DD[OD] + DD[QD]) / 3, pD.facetPositions[KD].z = (DD[nD] + DD[JD] + DD[XD]) / 3), CD && pD) {
              const zD = Math.floor((pD.facetPositions[KD].x - pD.bInfo.minimum.x * bD) * dD),
                wD = Math.floor((pD.facetPositions[KD].y - pD.bInfo.minimum.y * bD) * SD),
                sD = Math.floor((pD.facetPositions[KD].z - pD.bInfo.minimum.z * bD) * iD),
                rD = Math.floor((DD[GD] - pD.bInfo.minimum.x * bD) * dD),
                LD = Math.floor((DD[hD] - pD.bInfo.minimum.y * bD) * SD),
                cD = Math.floor((DD[nD] - pD.bInfo.minimum.z * bD) * iD),
                gD = Math.floor((DD[MD] - pD.bInfo.minimum.x * bD) * dD),
                RD = Math.floor((DD[OD] - pD.bInfo.minimum.y * bD) * SD),
                AD = Math.floor((DD[JD] - pD.bInfo.minimum.z * bD) * iD),
                UD = Math.floor((DD[ED] - pD.bInfo.minimum.x * bD) * dD),
                fD = Math.floor((DD[QD] - pD.bInfo.minimum.y * bD) * SD),
                ID = Math.floor((DD[XD] - pD.bInfo.minimum.z * bD) * iD),
                BD = rD + pD.subDiv.max * LD + lD * cD,
                VD = gD + pD.subDiv.max * RD + lD * AD,
                PD = UD + pD.subDiv.max * fD + lD * ID,
                CD = zD + pD.subDiv.max * wD + lD * sD;
              pD.facetPartitioning[CD] = pD.facetPartitioning[CD] ? pD.facetPartitioning[CD] : [], pD.facetPartitioning[BD] = pD.facetPartitioning[BD] ? pD.facetPartitioning[BD] : [], pD.facetPartitioning[VD] = pD.facetPartitioning[VD] ? pD.facetPartitioning[VD] : [], pD.facetPartitioning[PD] = pD.facetPartitioning[PD] ? pD.facetPartitioning[PD] : [], pD.facetPartitioning[BD].push(KD), VD != BD && pD.facetPartitioning[VD].push(KD), PD != VD && PD != BD && pD.facetPartitioning[PD].push(KD), CD != BD && CD != VD && CD != PD && pD.facetPartitioning[CD].push(KD)
            }
            if (xD && pD && pD.facetPositions) {
              const DD = pD.depthSortedFacets[KD];
              DD.ind = 3 * KD, DD.sqDistance = sD.s.DistanceSquared(pD.facetPositions[KD], jD)
            }
            wD[GD] += UD, wD[hD] += fD, wD[nD] += ID, wD[MD] += UD, wD[OD] += fD, wD[JD] += ID, wD[ED] += UD, wD[QD] += fD, wD[XD] += ID
          }
          for (KD = 0; KD < wD.length / 3; KD++) UD = wD[3 * KD], fD = wD[3 * KD + 1], ID = wD[3 * KD + 2], BD = Math.sqrt(UD * UD + fD * fD + ID * ID), BD = 0 === BD ? 1 : BD, UD /= BD, fD /= BD, ID /= BD, wD[3 * KD] = UD, wD[3 * KD + 1] = fD, wD[3 * KD + 2] = ID
        }
        static _ComputeSides(zD, wD, pD, KD, rD, LD, cD) {
          const gD = pD.length,
            RD = KD.length;
          let AD, UD;
          switch (zD = zD || DD.DEFAULTSIDE) {
            case DD.FRONTSIDE:
              break;
            case DD.BACKSIDE:
              for (AD = 0; AD < gD; AD += 3) {
                const DD = pD[AD];
                pD[AD] = pD[AD + 2], pD[AD + 2] = DD
              }
              for (UD = 0; UD < RD; UD++) KD[UD] = -KD[UD];
              break;
            case DD.DOUBLESIDE: {
              const DD = wD.length,
                zD = DD / 3;
              for (let pD = 0; pD < DD; pD++) wD[DD + pD] = wD[pD];
              for (AD = 0; AD < gD; AD += 3) pD[AD + gD] = pD[AD + 2] + zD, pD[AD + 1 + gD] = pD[AD + 1] + zD, pD[AD + 2 + gD] = pD[AD] + zD;
              for (UD = 0; UD < RD; UD++) KD[RD + UD] = -KD[UD];
              const fD = rD.length;
              let ID;
              for (ID = 0; ID < fD; ID++) rD[ID + fD] = rD[ID];
              for (LD = LD || new sD.t(0, 0, 1, 1), cD = cD || new sD.t(0, 0, 1, 1), ID = 0, AD = 0; AD < fD / 2; AD++) rD[ID] = LD.x + (LD.z - LD.x) * rD[ID], rD[ID + 1] = LD.y + (LD.w - LD.y) * rD[ID + 1], rD[ID + fD] = cD.x + (cD.z - cD.x) * rD[ID + fD], rD[ID + fD + 1] = cD.y + (cD.w - cD.y) * rD[ID + fD + 1], ID += 2;
              break
            }
          }
        }
        static Parse(zD) {
          const wD = new DD,
            pD = zD.positions;
          pD && wD.set(pD, KD.k.PositionKind);
          const sD = zD.normals;
          sD && wD.set(sD, KD.k.NormalKind);
          const rD = zD.tangents;
          rD && wD.set(rD, KD.k.TangentKind);
          const cD = zD.uvs;
          cD && wD.set(cD, KD.k.UVKind);
          const gD = zD.uvs2;
          gD && wD.set(gD, KD.k.UV2Kind);
          const RD = zD.uvs3;
          RD && wD.set(RD, KD.k.UV3Kind);
          const AD = zD.uvs4;
          AD && wD.set(AD, KD.k.UV4Kind);
          const UD = zD.uvs5;
          UD && wD.set(UD, KD.k.UV5Kind);
          const ID = zD.uvs6;
          ID && wD.set(ID, KD.k.UV6Kind);
          const BD = zD.colors;
          BD && (wD.set(LD.h.CheckColors4(BD, pD.length / 3), KD.k.ColorKind), void 0 !== zD.hasVertexAlpha && (wD.hasVertexAlpha = zD.hasVertexAlpha));
          const GD = zD.matricesIndices;
          GD && wD.set(GD, KD.k.MatricesIndicesKind);
          const hD = zD.matricesWeights;
          hD && wD.set(hD, KD.k.MatricesWeightsKind);
          const nD = zD.indices;
          nD && (wD.indices = nD);
          const MD = zD.materialInfos;
          if (MD) {
            wD.materialInfos = [];
            for (const DD of MD) {
              const zD = new fD;
              zD.indexCount = DD.indexCount, zD.indexStart = DD.indexStart, zD.verticesCount = DD.verticesCount, zD.verticesStart = DD.verticesStart, zD.materialIndex = DD.materialIndex, wD.materialInfos.push(zD)
            }
          }
          return wD
        }
        static ImportVertexData(zD, wD) {
          const pD = DD.Parse(zD);
          wD.setAllVerticesData(pD, zD.updatable)
        }
      }, (() => {
        const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [gD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], wD = [gD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ID = [gD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], BD = [gD.i.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, pD.i)(DD, null, zD, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector3Coordinates" in DD,
            get: DD => DD._TransformVector3Coordinates
          },
          metadata: sD
        }, null, GD), (0, pD.i)(DD, null, wD, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector3Normals" in DD,
            get: DD => DD._TransformVector3Normals
          },
          metadata: sD
        }, null, GD), (0, pD.i)(DD, null, ID, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector4Normals" in DD,
            get: DD => DD._TransformVector4Normals
          },
          metadata: sD
        }, null, GD), (0, pD.i)(DD, null, BD, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: DD => "_FlipFaces" in DD,
            get: DD => DD._FlipFaces
          },
          metadata: sD
        }, null, GD), sD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sD
        })
      })(), DD.FRONTSIDE = ((0, pD.m)(DD, GD), 0), DD.BACKSIDE = 1, DD.DOUBLESIDE = 2, DD.DEFAULTSIDE = 0, DD._UniqueIdGenerator = 0, DD
    })()
  },
  40408: (DD, zD, wD) => {
    var pD = wD(37079),
      sD = wD(38662),
      KD = wD(40234),
      rD = wD(40335),
      LD = wD(40066);
    const cD = "bakedVertexAnimationSettingsInstanced";

    function gD(DD) {
      const zD = DD.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return zD instanceof Float32Array || zD instanceof Uint16Array
    }

    function RD(DD, zD, wD, pD) {
      wD.I9(Number.POSITIVE_INFINITY), pD.I9(Number.NEGATIVE_INFINITY);
      for (let sD = 0; sD < 3 * zD; sD += 3) {
        const zD = DD[sD],
          KD = DD[sD + 1],
          rD = DD[sD + 2];
        zD < wD.x && (wD.x = zD), KD < wD.y && (wD.y = KD), rD < wD.z && (wD.z = rD), zD > pD.x && (pD.x = zD), KD > pD.y && (pD.y = KD), rD > pD.z && (pD.z = rD)
      }
    }

    function AD(DD, zD, wD) {
      wD && (DD.x -= DD.x * wD.x + wD.y, DD.y -= DD.y * wD.x + wD.y, DD.z -= DD.z * wD.x + wD.y, zD.x += zD.x * wD.x + wD.y, zD.y += zD.y * wD.x + wD.y, zD.z += zD.z * wD.x + wD.y)
    }

    function UD(DD, zD, wD, sD, KD) {
      const rD = pD.n.WI[7],
        LD = pD.n.WI[8];
      for (let cD = 0; cD < 2; ++cD)
        for (let gD = 0; gD < 2; ++gD)
          for (let RD = 0; RD < 2; ++RD) rD.set(cD ? zD.x : DD.x, gD ? zD.y : DD.y, RD ? zD.z : DD.z), pD.s.TransformCoordinatesToRef(rD, wD, LD), sD.minimizeInPlace(LD), KD.maximizeInPlace(LD)
    }

    function fD(DD, zD, wD, sD, KD) {
      const rD = pD.n.WI[7];
      for (let LD = 0; LD < 3 * zD; LD += 3) pD.s.TransformCoordinatesFromFloatsToRef(DD[LD], DD[LD + 1], DD[LD + 2], wD, rD), sD.minimizeInPlace(rD), KD.maximizeInPlace(rD)
    }
    let ID = !1;
    ID || (ID = !0, rD.e.prototype.thinInstanceAdd = function(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Ul().iI().getCaps().instancedArrays) return sD.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(DD) ? DD.length : 1);
      const wD = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(DD))
        for (let pD = 0; pD < DD.length; ++pD) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD[pD], pD === DD.length - 1 && zD);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD, zD);
      return wD
    }, rD.e.prototype.thinInstanceAddSelf = function() {
      let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(pD.e.IdentityReadOnly, DD)
    }, rD.e.prototype.thinInstanceRegisterAttribute = function(DD, zD) {
      DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this.removeVerticesData(DD), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[DD] = zD, this._userThinInstanceBuffersStorage.sizes[DD] = zD * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[DD] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[DD]), this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new LD.k(this.iI(), this._userThinInstanceBuffersStorage.data[DD], DD, !0, !1, zD, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD])
    }, rD.e.prototype.thinInstanceSetMatrixAt = function(DD, zD) {
      let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || DD >= this._thinInstanceDataStorage.instancesCount) return !1;
      const pD = this._thinInstanceDataStorage.matrixData;
      return zD.copyToArray(pD, 16 * DD), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[DD] = zD), wD && (this.o5("matrix"), this.ZI || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, rD.e.prototype.thinInstanceSetAttributeAt = function(DD, zD, wD) {
      let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[DD] || zD >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(DD, 0), this._userThinInstanceBuffersStorage.data[DD].set(wD, zD * this._userThinInstanceBuffersStorage.strides[DD]), pD && this.o5(DD), !0)
    }, Object.defineProperty(rD.e.prototype, "A4", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(DD) {
        const zD = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        DD <= (zD ? zD.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = DD)
      },
      enumerable: !0,
      configurable: !0
    }), rD.e.prototype._thinInstanceCreateMatrixBuffer = function(DD, zD) {
      let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const pD = new LD.b(this.iI(), zD, !wD, 16, !1, !0);
      for (let sD = 0; sD < 4; sD++) this.setVerticesBuffer(pD.createVertexBuffer(DD + sD, 4 * sD, 4));
      return pD
    }, rD.e.prototype.f6 = function(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (wD = wD || 16, "matrix" === DD) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zD ? zD.length : 32 * wD, this._thinInstanceDataStorage.matrixData = zD, this._thinInstanceDataStorage.worldMatrices = null, null !== zD ? (this._thinInstanceDataStorage.instancesCount = zD.length / wD, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", zD, pD), this.ZI || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.ZI || this.refreshBoundingInfo());
      else if ("previousMatrix" === DD) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = zD, null !== zD && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", zD, pD));
      else if ("splatIndex" === DD && zD) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = zD.length / wD, this._userThinInstanceBuffersStorage.data[DD] = zD, this._userThinInstanceBuffersStorage.strides[DD] = wD, this._userThinInstanceBuffersStorage.sizes[DD] = zD.length;
        const pD = new LD.b(this.iI(), zD, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = pD;
        for (let zD = 0; zD < 4; zD++) this.setVerticesBuffer(pD.createVertexBuffer(DD + zD, 4 * zD, 4))
      } else DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), null === zD ? this._userThinInstanceBuffersStorage?.data[DD] && (this.removeVerticesData(DD), delete this._userThinInstanceBuffersStorage.data[DD], delete this._userThinInstanceBuffersStorage.strides[DD], delete this._userThinInstanceBuffersStorage.sizes[DD], delete this._userThinInstanceBuffersStorage.vertexBuffers[DD]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[DD] = zD, this._userThinInstanceBuffersStorage.strides[DD] = wD, this._userThinInstanceBuffersStorage.sizes[DD] = zD.length, this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new LD.k(this.iI(), zD, DD, !pD, !1, wD, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
    }, rD.e.prototype.o5 = function(DD) {
      "matrix" === DD ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === DD ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === DD ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[DD], 0, this._thinInstanceDataStorage.instancesCount) : (DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[DD] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[DD].isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._userThinInstanceBuffersStorage.vertexBuffers[DD].updateDirectly(this._userThinInstanceBuffersStorage.data[DD], 0)))
    }, rD.e.prototype.thinInstancePartialBufferUpdate = function(DD, zD, wD) {
      if ("matrix" === DD) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof zD ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * wD * Float32Array.BYTES_PER_ELEMENT, 16 * zD), 16 * wD) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(zD, wD));
      else if (DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[DD]) {
        const pD = this._userThinInstanceBuffersStorage.vertexBuffers[DD];
        if ("number" === typeof zD) {
          const pD = new Float32Array(this._userThinInstanceBuffersStorage.data[DD].buffer, this._userThinInstanceBuffersStorage.data[DD].byteOffset + wD * this._userThinInstanceBuffersStorage.strides[DD] * Float32Array.BYTES_PER_ELEMENT, zD * this._userThinInstanceBuffersStorage.strides[DD]);
          this._userThinInstanceBuffersStorage.vertexBuffers[DD].updateDirectly(pD, wD * this._userThinInstanceBuffersStorage.strides[DD])
        } else pD.updateDirectly(zD, wD)
      }
    }, rD.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const DD = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let zD = 0; zD < this._thinInstanceDataStorage.instancesCount; ++zD) this._thinInstanceDataStorage.worldMatrices[zD] = pD.e.FromArray(DD, 16 * zD)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, rD.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const rD = this._thinInstanceDataStorage.boundingVectors;
      if (DD || !this.rawBoundingInfo) {
        if (rD.length = 0, sD && function(DD, zD, wD) {
            const sD = DD._userThinInstanceBuffersStorage,
              rD = sD?.data[cD],
              ID = sD?.strides[cD];
            if (!rD || !ID || ID < 4 || !gD(DD)) return !1;
            const BD = DD._thinInstanceDataStorage.matrixData;
            if (!BD) return !1;
            const GD = {},
              hD = pD.n.Vector4[0],
              nD = pD.n.WI[1],
              MD = pD.n.WI[2],
              OD = pD.n.WI[3],
              JD = pD.n.WI[4],
              ED = pD.n.WI[5],
              QD = pD.n.WI[6],
              XD = pD.n.Matrix[2],
              VD = DD.geometry ? DD.geometry.boundingBias : null,
              PD = DD.getTotalVertices();
            nD.I9(Number.POSITIVE_INFINITY), MD.I9(Number.NEGATIVE_INFINITY), OD.I9(Number.POSITIVE_INFINITY), JD.I9(Number.NEGATIVE_INFINITY);
            for (let KD = 0; KD < DD._thinInstanceDataStorage.instancesCount; ++KD) {
              const zD = KD * ID;
              hD.set(rD[zD], rD[zD + 1], rD[zD + 2], rD[zD + 3]);
              const sD = DD._getData({
                applyMorph: wD,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: hD,
                updatePositionsArray: !1,
                cache: GD
              }, null, LD.k.PositionKind);
              if (!sD) return !1;
              RD(sD, PD, ED, QD), AD(ED, QD, VD), nD.minimizeInPlace(ED), MD.maximizeInPlace(QD), pD.e.FromArrayToRef(BD, 16 * KD, XD), VD ? UD(ED, QD, XD, OD, JD) : fD(sD, PD, XD, OD, JD)
            }
            return !(!isFinite(nD.x) || !isFinite(OD.x)) && (DD.FW().reConstruct(OD, JD), DD.rawBoundingInfo = new KD.b(nD, MD), function(DD, zD) {
              DD.length = 0;
              for (let wD = 0; wD < zD.boundingBox.vectors.length; ++wD) DD.push(zD.boundingBox.vectors[wD].clone())
            }(zD, DD.rawBoundingInfo), DD._updateBoundingInfo(), !0)
          }(this, rD, wD)) return;
        sD && this.bakedVertexAnimationManager?.isEnabled && gD(this) ? this.refreshBoundingInfo({
          applySkeleton: zD,
          applyMorph: wD,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(zD, wD);
        const DD = this.FW();
        this.rawBoundingInfo = new KD.b(DD.minimum, DD.maximum)
      }
      const ID = this.FW(),
        BD = this._thinInstanceDataStorage.matrixData;
      if (0 === rD.length)
        for (let pD = 0; pD < ID.boundingBox.vectors.length; ++pD) rD.push(ID.boundingBox.vectors[pD].clone());
      pD.n.WI[0].I9(Number.POSITIVE_INFINITY), pD.n.WI[1].I9(Number.NEGATIVE_INFINITY);
      for (let KD = 0; KD < this._thinInstanceDataStorage.instancesCount; ++KD) {
        pD.e.FromArrayToRef(BD, 16 * KD, pD.n.Matrix[0]);
        for (let DD = 0; DD < rD.length; ++DD) pD.s.TransformCoordinatesToRef(rD[DD], pD.n.Matrix[0], pD.n.WI[2]), pD.n.WI[0].minimizeInPlace(pD.n.WI[2]), pD.n.WI[1].maximizeInPlace(pD.n.WI[2])
      }
      ID.reConstruct(pD.n.WI[0], pD.n.WI[1]), this._updateBoundingInfo()
    }, rD.e.prototype._thinInstanceRecreateBuffer = function(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === DD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zD)) : "previousMatrix" === DD ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, zD)) : (DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[DD]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new LD.k(this.iI(), this._userThinInstanceBuffersStorage.data[DD], DD, !zD, !1, this._userThinInstanceBuffersStorage.strides[DD], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
    }, rD.e.prototype._thinInstanceUpdateBufferSize = function(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      DD === LD.k.ColorKind && (DD = LD.k.ColorInstanceKind);
      const wD = "matrix" === DD;
      if (!wD && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[DD])) return;
      const pD = wD ? 16 : this._userThinInstanceBuffersStorage.strides[DD],
        sD = wD ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[DD];
      let KD = wD ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[DD];
      const rD = (this._thinInstanceDataStorage.instancesCount + zD) * pD;
      let cD = sD;
      for (; cD < rD;) cD *= 2;
      if (!KD || sD != cD) {
        if (KD) {
          const DD = new Float32Array(cD);
          DD.set(KD, 0), KD = DD
        } else KD = new Float32Array(cD);
        wD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", KD, !1), this._thinInstanceDataStorage.matrixData = KD, this._thinInstanceDataStorage.matrixBufferSize = cD, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", KD, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[DD]?.dispose(), this._userThinInstanceBuffersStorage.data[DD] = KD, this._userThinInstanceBuffersStorage.sizes[DD] = cD, this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new LD.k(this.iI(), KD, DD, !0, !1, pD, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
      }
    }, rD.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, rD.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40372: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => nD,
      f: () => BD
    });
    var pD, sD, KD, rD, LD = wD(39921),
      cD = wD(39927),
      gD = wD(39939),
      RD = wD(37119),
      AD = wD(37079),
      UD = wD(40155),
      fD = wD(37134),
      ID = wD(39808);
    let BD = (() => {
      var DD;
      let zD, wD, pD, sD, KD, rD, fD, ID, BD, GD = UD.b,
        hD = [],
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        VD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [];
      return DD = class extends GD {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(zD) {
          this._billboardMode !== zD && (this._billboardMode = zD, this._cache.useBillboardPosition = 0 !== (this._billboardMode & DD.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(DD) {
          this._infiniteDistance !== DD && (this._infiniteDistance = DD)
        }
        constructor(zD) {
          let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(zD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new AD.s(0, 0, 1), this._up = new AD.s(0, 1, 0), this._right = new AD.s(1, 0, 0), this._position = (0, LD.m)(this, hD, AD.s.Zero()), this._rotation = ((0, LD.m)(this, nD), (0, LD.m)(this, MD, AD.s.Zero())), this._rotationQuaternion = ((0, LD.m)(this, OD), (0, LD.m)(this, JD, null)), this._scaling = ((0, LD.m)(this, ED), (0, LD.m)(this, QD, AD.s.One())), this._transformToBoneReferal = ((0, LD.m)(this, XD), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, LD.m)(this, VD, DD.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, LD.m)(this, PD), (0, LD.m)(this, CD, 1)), this._infiniteDistance = ((0, LD.m)(this, xD), (0, LD.m)(this, TD, !1)), this.ignoreNonUniformScaling = ((0, LD.m)(this, bD), (0, LD.m)(this, jD, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, LD.m)(this, dD), (0, LD.m)(this, SD, !1)), this._poseMatrix = ((0, LD.m)(this, iD), null), this._localMatrix = AD.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = AD.s.Zero(), this._absoluteScaling = AD.s.Zero(), this._absoluteRotationQuaternion = AD.i.Identity(), this._pivotMatrix = AD.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new RD.b, this._nonUniformScaling = !1, wD && this.Ul().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(DD) {
          this._position = DD, this._markAsDirtyInternal()
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
        set rotation(DD) {
          this._rotation = DD, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get rc() {
          return this._scaling
        }
        set rc(DD) {
          this._scaling = DD, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(DD) {
          this._rotationQuaternion = DD, DD && this._rotation.I9(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return AD.s.TransformNormalFromFloatsToRef(0, 0, this.Ul().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return AD.s.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return AD.s.TransformNormalFromFloatsToRef(this.Ul().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(DD) {
          return this._poseMatrix ? (this._poseMatrix.pC(DD), this) : (this._poseMatrix = DD.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = AD.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const zD = this._cache;
          return this._billboardMode === zD.billboardMode && this._billboardMode === DD.BILLBOARDMODE_NONE && (!zD.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const DD = this._cache;
          DD.localMatrixUpdated = !1, DD.billboardMode = -1, DD.infiniteDistance = !1, DD.useBillboardPosition = !1
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
        setPreTransformMatrix(DD) {
          return this.setPivotMatrix(DD, !1)
        }
        setPivotMatrix(DD) {
          let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.pC(DD), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zD, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = AD.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            zD = arguments.length > 1 ? arguments[1] : void 0,
            wD = arguments.length > 2 ? arguments[2] : void 0;
          const pD = this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0);
          pD && wD && wD(this, pD);
          for (const sD of this.getChildTransformNodes(!0)) sD.instantiateHierarchy(pD, zD, wD);
          return pD
        }
        Tl() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return DD ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.I9(0), this._rotationQuaternion = this._rotationQuaternion || AD.i.Identity(), DD.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = DD, this._absolutePosition.Z2(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get LLD() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(DD) {
          if (!DD) return this;
          let zD, wD, pD;
          if (void 0 === DD.x) {
            if (arguments.length < 3) return this;
            zD = arguments[0], wD = arguments[1], pD = arguments[2]
          } else zD = DD.x, wD = DD.y, pD = DD.z;
          if (this.parent) {
            const DD = AD.n.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(DD), AD.s.TransformCoordinatesFromFloatsToRef(zD, wD, pD, DD, this.position)
          } else this.position.x = zD, this.position.y = wD, this.position.z = pD;
          return this._absolutePosition.pC(DD), this
        }
        setPositionWithLocalVector(DD) {
          return this.computeWorldMatrix(), this.position = AD.s.TransformNormal(DD, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const DD = AD.n.Matrix[0];
          return this._localMatrix.invertToRef(DD), AD.s.TransformNormal(this.position, DD)
        }
        locallyTranslate(DD) {
          return this.computeWorldMatrix(!0), this.position = AD.s.TransformCoordinates(DD, this._localMatrix), this
        }
        lookAt(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const rD = DD._LookAtVectorCache,
            LD = 0 === KD ? this.position : this.getAbsolutePosition();
          if (zD.subtractToRef(LD, rD), this.setDirection(rD, wD, pD, sD), 1 === KD && this.parent)
            if (this.rotationQuaternion) {
              const DD = AD.n.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(DD);
              const zD = AD.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(zD), zD.invert(), DD.multiplyToRef(zD, DD), this.rotationQuaternion.fromRotationMatrix(DD)
            } else {
              const DD = AD.n.Quaternion[0];
              AD.i.FromEulerVectorToRef(this.rotation, DD);
              const zD = AD.n.Matrix[0];
              DD.toRotationMatrix(zD);
              const wD = AD.n.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(wD), wD.invert(), zD.multiplyToRef(wD, zD), DD.fromRotationMatrix(zD), DD.toEulerAnglesToRef(this.rotation)
            } return this
        }
        WH(DD) {
          const zD = AD.s.Zero();
          return this.getDirectionToRef(DD, zD), zD
        }
        getDirectionToRef(DD, zD) {
          return AD.s.TransformNormalToRef(DD, this.getWorldMatrix(), zD), this
        }
        setDirection(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const sD = -Math.atan2(DD.z, DD.x) + Math.PI / 2,
            KD = Math.sqrt(DD.x * DD.x + DD.z * DD.z),
            rD = -Math.atan2(DD.y, KD);
          return this.rotationQuaternion ? AD.i.RotationYawPitchRollToRef(sD + zD, rD + wD, pD, this.rotationQuaternion) : (this.rotation.x = rD + wD, this.rotation.y = sD + zD, this.rotation.z = pD), this
        }
        setPivotPoint(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Ul().getRenderId() && this.computeWorldMatrix(!0);
          const wD = this.getWorldMatrix();
          if (1 == zD) {
            const zD = AD.n.Matrix[0];
            wD.invertToRef(zD), DD = AD.s.TransformCoordinates(DD, zD)
          }
          return this.setPivotMatrix(AD.e.Translation(-DD.x, -DD.y, -DD.z), !0)
        }
        getPivotPoint() {
          const DD = AD.s.Zero();
          return this.getPivotPointToRef(DD), DD
        }
        getPivotPointToRef(DD) {
          return DD.x = -this._pivotMatrix.m[12], DD.y = -this._pivotMatrix.m[13], DD.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const DD = AD.s.Zero();
          return this.getAbsolutePivotPointToRef(DD), DD
        }
        getAbsolutePivotPointToRef(DD) {
          return this.getPivotPointToRef(DD), AD.s.TransformCoordinatesToRef(DD, this.getWorldMatrix(), DD), this
        }
        vzD(DD) {
          if (this._isDirty) return this;
          if (this._children)
            for (const zD of this._children) zD.vzD(DD);
          return super.vzD(DD)
        }
        setParent(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!zD && !this.parent) return this;
          const sD = AD.n.Quaternion[0],
            KD = AD.n.WI[0],
            rD = AD.n.WI[1],
            LD = AD.n.Matrix[1];
          AD.e.IdentityToRef(LD);
          const cD = AD.n.Matrix[0];
          this.computeWorldMatrix(!0);
          let gD = this.rotationQuaternion;
          return gD || (gD = DD._TmpRotation, AD.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, gD)), AD.e.ComposeToRef(this.rc, gD, this.position, cD), this.parent && cD.multiplyToRef(this.parent.computeWorldMatrix(!0), cD), zD && (zD.computeWorldMatrix(!0).invertToRef(LD), cD.multiplyToRef(LD, cD)), cD.decompose(rD, sD, KD, wD ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.pC(sD) : sD.toEulerAnglesToRef(this.rotation), this.rc.pC(rD), this.position.pC(KD), this.parent = zD, pD && this.setPivotMatrix(AD.e.Identity()), this
        }
        addChild(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return DD.setParent(this, zD), this
        }
        removeChild(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return DD.parent !== this || DD.setParent(null, zD), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(DD) {
          return this._nonUniformScaling !== DD && (this._nonUniformScaling = DD, !0)
        }
        attachToBone(DD, zD) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = zD, this.parent = DD, DD.getSkeleton().prepare(!0), DD.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = DD ? this._currentParentWhenAttachingToBone : null, this) : (DD && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(zD, wD, pD) {
          let sD;
          if (zD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.I9(0)), pD && 0 !== pD) {
            if (this.parent) {
              const DD = this.parent.getWorldMatrix(),
                pD = AD.n.Matrix[0];
              DD.invertToRef(pD), zD = AD.s.TransformNormal(zD, pD), DD.determinant() < 0 && (wD *= -1)
            }
            sD = AD.i.RotationAxisToRef(zD, wD, DD._RotationAxisCache), sD.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else sD = AD.i.RotationAxisToRef(zD, wD, DD._RotationAxisCache), this.rotationQuaternion.multiplyToRef(sD, this.rotationQuaternion);
          return this
        }
        rotateAround(DD, zD, wD) {
          zD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = AD.i.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.I9(0));
          const pD = AD.n.WI[0],
            sD = AD.n.WI[1],
            KD = AD.n.WI[2],
            rD = AD.n.Quaternion[0],
            LD = AD.n.Matrix[0],
            cD = AD.n.Matrix[1],
            gD = AD.n.Matrix[2],
            RD = AD.n.Matrix[3];
          return DD.subtractToRef(this.position, pD), AD.e.TranslationToRef(pD.x, pD.y, pD.z, LD), AD.e.TranslationToRef(-pD.x, -pD.y, -pD.z, cD), AD.e.RotationAxisToRef(zD, wD, gD), cD.multiplyToRef(gD, RD), RD.multiplyToRef(LD, RD), RD.decompose(sD, rD, KD), this.position.addInPlace(KD), rD.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(DD, zD, wD) {
          const pD = DD.scale(zD);
          if (wD && 0 !== wD) this.setAbsolutePosition(this.getAbsolutePosition().add(pD));
          else {
            const DD = this.getPositionExpressedInLocalSpace().add(pD);
            this.setPositionWithLocalVector(DD)
          }
          return this
        }
        addRotation(DD, zD, wD) {
          let pD;
          this.rotationQuaternion ? pD = this.rotationQuaternion : (pD = AD.n.Quaternion[1], AD.i.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, pD));
          const sD = AD.n.Quaternion[0];
          return AD.i.RotationYawPitchRollToRef(zD, DD, wD, sD), pD.multiplyInPlace(sD), this.rotationQuaternion || pD.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== DD.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let zD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const pD = this.Ul().getRenderId();
          if (!this._isDirty && !zD && (this._currentRenderId === pD || this.isSynchronized())) return this._currentRenderId = pD, this._worldMatrix;
          wD = wD || this.Ul().activeCamera, this._updateCache();
          const sD = this._cache;
          sD.pivotMatrixUpdated = !1, sD.billboardMode = this.billboardMode, sD.infiniteDistance = this.infiniteDistance, sD.parent = this._parentNode, this._currentRenderId = pD, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const KD = this._getEffectiveParent(),
            rD = DD._TmpScaling;
          let LD, cD = this._position;
          if (this._infiniteDistance && !this.parent && wD) {
            const zD = wD.getWorldMatrix().m;
            cD = DD._TmpTranslation, cD.Z2(this._position.x + zD[12], this._position.y + zD[13], this._position.z + zD[14])
          }
          if (rD.Z2(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, LD = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(AD.i.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.Z2(0, 0, 0))
            }
          } else LD = DD._TmpRotation, AD.i.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, LD);
          if (this._usePivotMatrix) {
            const DD = AD.n.Matrix[1];
            AD.e.ScalingToRef(rD.x, rD.y, rD.z, DD);
            const zD = AD.n.Matrix[0];
            LD.toRotationMatrix(zD), this._pivotMatrix.multiplyToRef(DD, AD.n.Matrix[4]), AD.n.Matrix[4].multiplyToRef(zD, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(cD.x, cD.y, cD.z)
          } else AD.e.ComposeToRef(rD, LD, cD, this._localMatrix);
          if (KD && KD.getWorldMatrix) {
            if (zD && KD.computeWorldMatrix(zD), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const DD = this.parent;
                DD.getSkeleton().prepare(), DD.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), AD.n.Matrix[7])
              } else AD.n.Matrix[7].pC(KD.getWorldMatrix());
              const zD = AD.n.WI[5],
                wD = AD.n.WI[6],
                pD = AD.n.Quaternion[0];
              AD.n.Matrix[7].decompose(wD, pD, zD), AD.e.ScalingToRef(wD.x, wD.y, wD.z, AD.n.Matrix[7]), AD.n.Matrix[7].setTranslation(zD), DD.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(pD, zD), this._localMatrix.setTranslation(zD)), this._localMatrix.multiplyToRef(AD.n.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const DD = this.parent;
              DD.getSkeleton().prepare(), this._localMatrix.multiplyToRef(DD.getFinalMatrix(), AD.n.Matrix[6]), AD.n.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(KD.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.pC(this._localMatrix);
          if (wD && this.billboardMode)
            if (sD.useBillboardPosition) {
              const zD = AD.n.WI[0];
              this._worldMatrix.getTranslationToRef(zD);
              const pD = wD.globalPosition;
              this._worldMatrix.invertToRef(AD.n.Matrix[1]);
              const sD = AD.n.WI[1];
              AD.s.TransformCoordinatesToRef(pD, AD.n.Matrix[1], sD), sD.normalize();
              const KD = -Math.atan2(sD.z, sD.x) + Math.PI / 2,
                rD = Math.sqrt(sD.x * sD.x + sD.z * sD.z),
                LD = -Math.atan2(sD.y, rD);
              if (AD.i.RotationYawPitchRollToRef(KD, LD, 0, AD.n.Quaternion[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
                const zD = AD.n.WI[1];
                AD.n.Quaternion[0].toEulerAnglesToRef(zD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (zD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (zD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMODE_Z && (zD.z = 0), AD.e.RotationYawPitchRollToRef(zD.y, zD.x, zD.z, AD.n.Matrix[0])
              } else AD.e.FromQuaternionToRef(AD.n.Quaternion[0], AD.n.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AD.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AD.n.WI[0])
            } else {
              const zD = AD.n.WI[0];
              this._worldMatrix.getTranslationToRef(zD), AD.n.Matrix[1].pC(wD.getViewMatrix());
              const pD = this.Ul().useRightHandedSystem;
              if (pD && AD.n.Matrix[1].multiplyToRef(DD._TmpRHRestore, AD.n.Matrix[1]), AD.n.Matrix[1].setTranslationFromFloats(0, 0, 0), AD.n.Matrix[1].invertToRef(AD.n.Matrix[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
                AD.n.Matrix[0].decompose(void 0, AD.n.Quaternion[0], void 0);
                const zD = AD.n.WI[1];
                AD.n.Quaternion[0].toEulerAnglesToRef(zD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (zD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (zD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMODE_Z && (zD.z = 0), pD && (zD.y += Math.PI), AD.e.RotationYawPitchRollToRef(zD.y, zD.x, zD.z, AD.n.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(AD.n.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(AD.n.WI[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : KD && KD._nonUniformScaling ? this._updateNonUniformScalingState(KD._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.Z2(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = AD.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), DD) {
            const DD = this.getChildren();
            for (let zD = 0; zD < DD.length; ++zD) {
              const wD = DD[zD];
              if (wD) {
                wD.computeWorldMatrix();
                const DD = AD.n.Matrix[0];
                wD._localMatrix.multiplyToRef(this._localMatrix, DD);
                const zD = AD.n.Quaternion[0];
                DD.decompose(wD.rc, zD, wD.position), wD.rotationQuaternion ? wD.rotationQuaternion.pC(zD) : zD.toEulerAnglesToRef(wD.rotation)
              }
            }
          }
          this.rc.Z2(1, 1, 1), this.position.Z2(0, 0, 0), this.rotation.Z2(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = AD.i.Identity()), this._worldMatrix = AD.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(DD) {
          return this.onAfterWorldMatrixUpdateObservable.add(DD), this
        }
        unregisterAfterWorldMatrixUpdate(DD) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(DD), this
        }
        getPositionInCameraSpace() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return DD || (DD = this.Ul().activeCamera), AD.s.TransformCoordinates(this.getAbsolutePosition(), DD.getViewMatrix())
        }
        getDistanceToCamera() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return DD || (DD = this.Ul().activeCamera), this.getAbsolutePosition().subtract(DD.globalPosition).length()
        }
        clone(zD, wD, pD) {
          const sD = gD.d.Clone((() => new DD(zD, this.Ul())), this);
          if (sD.name = zD, sD.id = zD, wD && (sD.parent = wD), !pD) {
            const DD = this.getDescendants(!0);
            for (let wD = 0; wD < DD.length; wD++) {
              const pD = DD[wD];
              pD.clone && pD.clone(zD + "." + pD.name, sD)
            }
          }
          return sD
        }
        serialize(DD) {
          const zD = gD.d.Serialize(this, DD);
          return zD.type = this.getClassName(), zD.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zD), zD.localMatrix = this.getPivotMatrix().QpD(), zD.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zD.Tl = !0), gD.d.AppendSerializedAnimations(this, zD), zD.rG = this.serializeAnimationRanges(), zD
        }
        getChildTransformNodes(zD, wD) {
          const pD = [];
          return this._getDescendants(pD, zD, (zD => (!wD || wD(zD)) && zD instanceof DD)), pD
        }
        dispose(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Ul().stopAnimation(this), this.Ul().removeTransformNode(this), this._parentContainer) {
            const DD = this._parentContainer.transformNodes.indexOf(this);
            DD > -1 && this._parentContainer.transformNodes.splice(DD, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), DD) {
            const DD = this.getChildTransformNodes(!0);
            for (const zD of DD) zD.parent = null, zD.computeWorldMatrix(!0)
          }
          super.dispose(DD, zD)
        }
        normalizeToUnitCube() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wD = arguments.length > 2 ? arguments[2] : void 0,
            pD = null,
            sD = null;
          zD && (this.rotationQuaternion ? (sD = this.rotationQuaternion.clone(), this.rotationQuaternion.Z2(0, 0, 0, 1)) : this.rotation && (pD = this.rotation.clone(), this.rotation.Z2(0, 0, 0)));
          const KD = this.getHierarchyBoundingVectors(DD, wD),
            rD = KD.max.subtract(KD.min),
            LD = Math.max(rD.x, rD.y, rD.z);
          if (0 === LD) return this;
          const cD = 1 / LD;
          return this.rc.scaleInPlace(cD), zD && (this.rotationQuaternion && sD ? this.rotationQuaternion.pC(sD) : this.rotation && pD && this.rotation.pC(pD)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const gD = "function" === typeof Symbol && Symbol.metadata ? Object.create(GD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, cD.B)("position")], wD = [(0, cD.B)("rotation")], pD = [(0, cD.t)("rotationQuaternion")], sD = [(0, cD.B)("rc")], KD = [(0, cD.C)("billboardMode")], rD = [(0, cD.C)()], fD = [(0, cD.C)("infiniteDistance")], ID = [(0, cD.C)()], BD = [(0, cD.C)()], (0, LD.i)(null, null, zD, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: DD => "_position" in DD,
            get: DD => DD._position,
            set: (DD, zD) => {
              DD._position = zD
            }
          },
          metadata: gD
        }, hD, nD), (0, LD.i)(null, null, wD, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_rotation" in DD,
            get: DD => DD._rotation,
            set: (DD, zD) => {
              DD._rotation = zD
            }
          },
          metadata: gD
        }, MD, OD), (0, LD.i)(null, null, pD, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: DD => "_rotationQuaternion" in DD,
            get: DD => DD._rotationQuaternion,
            set: (DD, zD) => {
              DD._rotationQuaternion = zD
            }
          },
          metadata: gD
        }, JD, ED), (0, LD.i)(null, null, sD, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "_scaling" in DD,
            get: DD => DD._scaling,
            set: (DD, zD) => {
              DD._scaling = zD
            }
          },
          metadata: gD
        }, QD, XD), (0, LD.i)(null, null, KD, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_billboardMode" in DD,
            get: DD => DD._billboardMode,
            set: (DD, zD) => {
              DD._billboardMode = zD
            }
          },
          metadata: gD
        }, VD, PD), (0, LD.i)(null, null, rD, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: DD => "scalingDeterminant" in DD,
            get: DD => DD.scalingDeterminant,
            set: (DD, zD) => {
              DD.scalingDeterminant = zD
            }
          },
          metadata: gD
        }, CD, xD), (0, LD.i)(null, null, fD, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "_infiniteDistance" in DD,
            get: DD => DD._infiniteDistance,
            set: (DD, zD) => {
              DD._infiniteDistance = zD
            }
          },
          metadata: gD
        }, TD, bD), (0, LD.i)(null, null, ID, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "ignoreNonUniformScaling" in DD,
            get: DD => DD.ignoreNonUniformScaling,
            set: (DD, zD) => {
              DD.ignoreNonUniformScaling = zD
            }
          },
          metadata: gD
        }, jD, dD), (0, LD.i)(null, null, BD, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: DD => "reIntegrateRotationIntoRotationQuaternion" in DD,
            get: DD => DD.reIntegrateRotationIntoRotationQuaternion,
            set: (DD, zD) => {
              DD.reIntegrateRotationIntoRotationQuaternion = zD
            }
          },
          metadata: gD
        }, SD, iD), gD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gD
        })
      })(), DD.BILLBOARDMODE_NONE = 0, DD.BILLBOARDMODE_X = 1, DD.BILLBOARDMODE_Y = 2, DD.BILLBOARDMODE_Z = 4, DD.BILLBOARDMODE_ALL = 7, DD.BILLBOARDMODE_USE_POSITION = 128, DD.BillboardUseParentOrientation = !1, DD._TmpRotation = AD.i.Zero(), DD._TmpScaling = AD.s.Zero(), DD._TmpTranslation = AD.s.Zero(), DD._TmpRHRestore = AD.e.Scaling(1, 1, -1), DD._LookAtVectorCache = new AD.s(0, 0, 0), DD._RotationAxisCache = new AD.i, DD
    })();

    function GD(DD, zD, wD) {
      const pD = gD.d.Parse((() => new BD(DD.name, zD)), DD, zD, wD);
      if (DD.localMatrix ? pD.setPreTransformMatrix(AD.e.FromArray(DD.localMatrix)) : DD.pivotMatrix && pD.setPivotMatrix(AD.e.FromArray(DD.pivotMatrix)), pD.nC(DD.isEnabled), pD._waitingParsedUniqueId = DD.uniqueId, void 0 !== DD.parentId && (pD._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (pD._waitingParentInstanceIndex = DD.parentInstanceIndex), DD.Tl && (pD._waitingFreezeWorldMatrix = DD.Tl), DD.animations) {
        for (let zD = 0; zD < DD.animations.length; zD++) {
          const wD = DD.animations[zD],
            sD = (0, fD.e)("BABYLON.Animation");
          sD && pD.animations.push(sD.Parse(wD))
        }
        UD.b.ParseAnimationRanges(pD, DD, zD)
      }
      return DD.autoAnimate && zD.beginAnimation(pD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), pD
    }
    let hD = !1;

    function nD() {
      hD || (hD = !0, BD.Parse = GD)
    }(pD = BD.prototype).Vk ?? (pD.Vk = (0, ID.h)("TransformNode", "Vk")), (sD = BD.prototype).applyImpulse ?? (sD.applyImpulse = (0, ID.h)("TransformNode", "applyImpulse")), (KD = BD.prototype).applyAngularImpulse ?? (KD.applyAngularImpulse = (0, ID.h)("TransformNode", "applyAngularImpulse")), (rD = BD.prototype).applyTorque ?? (rD.applyTorque = (0, ID.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(BD.prototype, "physicsBody") || Object.defineProperty(BD.prototype, "physicsBody", (0, ID.g)("TransformNode", "physicsBody"))
  },
  40342: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      try {
        const pD = DD.next();
        pD.done ? zD(pD) : pD.value ? pD.value.then((() => {
          pD.value = void 0, zD(pD)
        }), wD) : zD(pD)
      } catch (pD) {
        wD(pD)
      }
    }

    function sD() {
      let DD, zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (wD, sD, KD) => {
        const rD = performance.now();
        void 0 === DD || rD - DD > zD ? (DD = rD, setTimeout((() => {
          pD(wD, sD, KD)
        }), 0)) : pD(wD, sD, KD)
      }
    }

    function KD(DD, zD, wD, pD, sD) {
      const KD = () => {
        let rD;
        const LD = DD => {
          DD.done ? wD(DD.value) : void 0 === rD ? rD = !0 : KD()
        };
        do {
          rD = void 0, sD && sD.aborted ? pD(new Error("Aborted")) : zD(DD, LD, pD), void 0 === rD && (rD = !1)
        } while (rD)
      };
      KD()
    }

    function rD(DD, zD) {
      let wD;
      return KD(DD, pD, (DD => wD = DD), (DD => {
        throw DD
      }), zD), wD
    }
    async function LD(DD, zD, wD) {
      return await new Promise(((pD, sD) => {
        KD(DD, zD, pD, sD, wD)
      }))
    }

    function cD(DD, zD) {
      return function() {
        return rD(DD(...arguments), zD)
      }
    }
    wD.d(zD, {
      b: () => sD,
      c: () => cD,
      f: () => LD,
      j: () => rD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
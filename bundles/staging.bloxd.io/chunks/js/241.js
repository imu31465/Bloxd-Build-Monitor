export const id = 241;
export const ids = [241];
export const modules = {
  39351: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      d: () => gD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39257),
      fD = cD(36473),
      bD = cD(36446),
      QD = cD(39356),
      wD = cD(38048),
      SD = cD(36488),
      BD = cD(39027),
      yD = cD(37479),
      MD = cD(37159),
      tD = cD(39115),
      ZD = cD(39174);
    let oD = (() => {
      var DD;
      let CD, cD, SD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD = QD.b,
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        kD = [],
        dD = [],
        YD = [],
        WD = [],
        sD = [],
        ED = [],
        eD = [],
        uD = [],
        hD = [],
        rD = [],
        AD = [],
        FD = [],
        DC = [],
        CC = [],
        cC = [],
        IC = [],
        pC = [];
      return DD = class extends aD {
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
          let CD, cD;
          if (this.mode === DD.PERSPECTIVE_CAMERA) this.fovMode === DD.FOVMODE_VERTICAL_FIXED ? (cD = 2 * this.minZ * Math.tan(this.fov / 2), CD = this.DZ().getAspectRatio(this) * cD) : (CD = 2 * this.minZ * Math.tan(this.fov / 2), cD = CD / this.DZ().getAspectRatio(this));
          else {
            const DD = this.DZ().getRenderWidth() / 2,
              ID = this.DZ().getRenderHeight() / 2;
            CD = (this.orthoRight ?? DD) - (this.orthoLeft ?? -DD), cD = (this.orthoTop ?? ID) - (this.orthoBottom ?? -ID)
          }
          return CD * cD
        }
        set orthoLeft(DD) {
          this._orthoLeft = DD;
          for (const CD of this._rigCameras) CD.orthoLeft = DD
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(DD) {
          this._orthoRight = DD;
          for (const CD of this._rigCameras) CD.orthoRight = DD
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(DD) {
          this._orthoBottom = DD;
          for (const CD of this._rigCameras) CD.orthoBottom = DD
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(DD) {
          this._orthoTop = DD;
          for (const CD of this._rigCameras) CD.orthoTop = DD
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(CD / (2 * DD))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(DD) {
          this._baseInertia = DD
        }
        set mode(DD) {
          this._mode = DD;
          for (const CD of this._rigCameras) CD.mode = DD
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(CD, cD, pD) {
          let QD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, tD.b)(), super(CD, pD, !1), this.inputs = (0, ID.m)(this, VD), this._position = (0, ID.m)(this, zD, bD.p.Zero()), this._upVector = ((0, ID.m)(this, jD), (0, ID.m)(this, lD, bD.p.Up())), this.oblique = ((0, ID.m)(this, LD), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, ID.m)(this, TD, .8), this.projectionPlaneTilt = ((0, ID.m)(this, GD), (0, ID.m)(this, RD, 0)), this.minZ = ((0, ID.m)(this, kD), (0, ID.m)(this, dD, 1)), this.maxZ = ((0, ID.m)(this, YD), (0, ID.m)(this, WD, 1e4)), this._baseInertia = ((0, ID.m)(this, sD), .9), this._mode = DD.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new yD.e(0, 0, 1, 1), this.layerMask = (0, ID.m)(this, ED, 268435455), this.fovMode = ((0, ID.m)(this, eD), (0, ID.m)(this, uD, DD.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, ID.m)(this, hD), (0, ID.m)(this, rD, DD.RIG_MODE_NONE)), this.interaxialDistance = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, void 0)), this.isStereoscopicSideBySide = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, void 0)), this.ignoreCameraMaxZ = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, !1)), this.customRenderTargets = ((0, ID.m)(this, pC), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new fD.c, this.onProjectionMatrixChangedObservable = new fD.c, this.onAfterCheckInputsObservable = new fD.c, this.onRestoreStateObservable = new fD.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new bD.d, this._postProcesses = new Array, this._activeMeshes = new iD.f(256), this._globalPosition = bD.p.Zero(), this._computedViewMatrix = bD.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = bD.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = bD.h.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.hq().defaultCameraLayerMask, this.hq().addCamera(this), QD && !this.hq().activeCamera && (this.hq().activeCamera = this), this.position = cD, this.renderPassId = this.hq().DZ().createRenderPassId(`Camera ${CD}`)
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
          return "To"
        }
        toString(DD) {
          let CD = "Name: " + this.name;
          if (CD += ", type: " + this.getClassName(), this.animations)
            for (let cD = 0; cD < this.animations.length; cD++) CD += ", animation[0]: " + this.animations[cD].toString(DD);
          return CD
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
            for (const CD of this._postProcesses)
              if (CD && !CD.isReady()) return !1;
          return super.isReady(DD)
        }
        _initCache() {
          super._initCache(), this._cache.position = new bD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new bD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(DD) {
          DD || super._updateCache(), this._cache.position.YCD(this.position), this._cache.upVector.YCD(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const CD = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let cD = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === CD;
          if (!cD) return !1;
          const ID = this.DZ();
          return this.mode === DD.PERSPECTIVE_CAMERA ? cD = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === ID.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (cD = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === ID.getRenderWidth() && this._cache.renderHeight === ID.getRenderHeight(), this.oblique && (cD = cD && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), cD
        }
        attachControl(DD, CD) {}
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
          for (let CD = 0, cD = this._rigCameras.length; CD < cD; CD++) {
            const DD = this._rigCameras[CD],
              cD = DD._rigPostProcess;
            if (cD) {
              "pass" === cD.getEffectName() && (DD.isIntermediate = 0 === this._postProcesses.length), DD._postProcesses = this._postProcesses.slice(0).concat(cD), cD.markTextureDirty()
            } else DD._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !DD.isReusable() && this._postProcesses.indexOf(DD) > -1 ? (wD.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == CD || CD < 0 ? this._postProcesses.push(DD) : null === this._postProcesses[CD] ? this._postProcesses[CD] = DD : this._postProcesses.splice(CD, 0, DD), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.sDD(), this._postProcesses.indexOf(DD))
        }
        detachPostProcess(DD) {
          const CD = this._postProcesses.indexOf(DD); - 1 !== CD && (this._postProcesses[CD] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.sDD(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return bD.d.Identity()
        }
        getViewMatrix(DD) {
          return !DD && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.hq().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(DD) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== DD && (this._projectionMatrix = DD)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(CD) {
          if (this._doNotComputeProjectionMatrix || !CD && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const cD = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = cD, this._refreshFrustumPlanes = !0;
          const ID = this.DZ(),
            pD = this.hq(),
            iD = ID.vcD;
          if (this.mode === DD.PERSPECTIVE_CAMERA) {
            let CD;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = ID.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), CD = pD.useRightHandedSystem ? bD.d.PerspectiveFovRHToRef : bD.d.PerspectiveFovLHToRef, CD(this.fov, ID.getAspectRatio(this), iD ? cD : this.minZ, iD ? this.minZ : cD, this._projectionMatrix, this.fovMode === DD.FOVMODE_VERTICAL_FIXED, ID.isNDCHalfZRange, this.projectionPlaneTilt, iD)
          } else {
            const DD = ID.getRenderWidth() / 2,
              CD = ID.getRenderHeight() / 2;
            pD.useRightHandedSystem ? this.oblique ? bD.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -CD, this.orthoTop ?? CD, iD ? cD : this.minZ, iD ? this.minZ : cD, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, ID.isNDCHalfZRange) : bD.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -CD, this.orthoTop ?? CD, iD ? cD : this.minZ, iD ? this.minZ : cD, this._projectionMatrix, ID.isNDCHalfZRange) : this.oblique ? bD.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -CD, this.orthoTop ?? CD, iD ? cD : this.minZ, iD ? this.minZ : cD, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, ID.isNDCHalfZRange) : bD.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -DD, this.orthoRight ?? DD, this.orthoBottom ?? -CD, this.orthoTop ?? CD, iD ? cD : this.minZ, iD ? this.minZ : cD, this._projectionMatrix, ID.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = ID.getRenderWidth(), this._cache.renderHeight = ID.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(DD) {
          return (this.radius || (this.target ? bD.p.Distance(this.position, this.target) : this.position.length())) + DD
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? MD.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = MD.c.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), CD && this.rigCameras.length > 0) {
            let CD = !1;
            for (const cD of this.rigCameras) cD._updateFrustumPlanes(), CD = CD || DD.isInFrustum(cD._frustumPlanes);
            return CD
          }
          return DD.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(DD) {
          return this._updateFrustumPlanes(), DD.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, BD.m)("Ray")
        }
        getForwardRayToRef(DD) {
          throw (0, BD.m)("Ray")
        }
        dispose(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.hq().stopAnimation(this), this.hq().removeCamera(this); this._rigCameras.length > 0;) {
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
              const CD = this._postProcesses[DD];
              CD && CD.dispose(this)
            }
          }
          let ID = this.customRenderTargets.length;
          for (; --ID >= 0;) this.customRenderTargets[ID].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.hq().DZ().releaseRenderPassId(this.renderPassId), super.dispose(CD, cD)
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
        setCameraRigMode(CD, cD) {
          if (this.cameraRigMode !== CD) {
            for (; this._rigCameras.length > 0;) {
              const DD = this._rigCameras.pop();
              DD && DD.dispose()
            }
            if (this.cameraRigMode = CD, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = cD.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== DD.RIG_MODE_NONE) {
              const DD = this.createRigCamera(this.name + "_L", 0);
              DD && (DD._isLeftCamera = !0);
              const CD = this.createRigCamera(this.name + "_R", 1);
              CD && (CD._isRightCamera = !0), DD && CD && (this._rigCameras.push(DD), this._rigCameras.push(CD))
            }
            this._setRigMode(cD), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(DD) {}
        _getVRProjectionMatrix() {
          return bD.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.DZ().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(DD, CD) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[DD] = CD, "interaxialDistance" === DD && (this._cameraRigParams.stereoHalfAngle = CD / .0637 * (Math.PI / 180))
        }
        createRigCamera(DD, CD) {
          return null
        }
        _updateRigCameras() {
          for (let DD = 0; DD < this._rigCameras.length; DD++) this._rigCameras[DD].minZ = this.minZ, this._rigCameras[DD].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[DD].fov = this.fov, this._rigCameras[DD].upVector.YCD(this.upVector);
          this.cameraRigMode === DD.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const DD = ZD.d.Serialize(this);
          return DD.uniqueId = this.uniqueId, DD.type = this.getClassName(), this.parent && this.parent._serializeAsParent(DD), this.inputs && this.inputs.serialize(DD), ZD.d.AppendSerializedAnimations(this, DD), DD.df = this.serializeAnimationRanges(), DD.isEnabled = this.isEnabled(), DD
        }
        clone(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const ID = ZD.d.Clone(DD.GetConstructorFromName(this.getClassName(), CD, this.hq(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return ID.name = CD, ID.parent = cD, this.onClonedObservable.notifyObservers(ID), ID
        }
        qY(DD) {
          const CD = bD.p.Zero();
          return this.getDirectionToRef(DD, CD), CD
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(DD, CD) {
          bD.p.TransformNormalToRef(DD, this.getWorldMatrix(), CD)
        }
        static GetConstructorFromName(CD, cD, ID) {
          let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            iD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const fD = QD.b.Construct(CD, cD, ID, {
            interaxial_distance: pD,
            isStereoscopicSideBySide: iD
          });
          return fD || (() => DD._CreateDefaultParsedCamera(cD, ID))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let DD = this.hq().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (DD *= -1), DD
        }
      }, (() => {
        const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(aD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, pD.C)("position")], cD = [(0, pD.C)("upVector")], SD = [(0, pD.G)()], oD = [(0, pD.G)()], vD = [(0, pD.G)()], ND = [(0, pD.G)()], gD = [(0, pD.G)()], XD = [(0, pD.G)()], mD = [(0, pD.G)()], nD = [(0, pD.G)()], OD = [(0, pD.G)()], PD = [(0, pD.G)()], HD = [(0, pD.G)()], UD = [(0, pD.G)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], KD = [(0, pD.G)()], (0, ID.k)(DD, null, SD, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoLeft" in DD,
            get: DD => DD.orthoLeft
          },
          metadata: iD
        }, null, VD), (0, ID.k)(DD, null, oD, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoRight" in DD,
            get: DD => DD.orthoRight
          },
          metadata: iD
        }, null, VD), (0, ID.k)(DD, null, vD, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoBottom" in DD,
            get: DD => DD.orthoBottom
          },
          metadata: iD
        }, null, VD), (0, ID.k)(DD, null, ND, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: DD => "orthoTop" in DD,
            get: DD => DD.orthoTop
          },
          metadata: iD
        }, null, VD), (0, ID.k)(DD, null, OD, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: DD => "inertia" in DD,
            get: DD => DD.inertia
          },
          metadata: iD
        }, null, VD), (0, ID.k)(DD, null, PD, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: DD => "mode" in DD,
            get: DD => DD.mode
          },
          metadata: iD
        }, null, VD), (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: DD => "_position" in DD,
            get: DD => DD._position,
            set: (DD, CD) => {
              DD._position = CD
            }
          },
          metadata: iD
        }, zD, jD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: DD => "_upVector" in DD,
            get: DD => DD._upVector,
            set: (DD, CD) => {
              DD._upVector = CD
            }
          },
          metadata: iD
        }, lD, LD), (0, ID.k)(null, null, gD, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: DD => "fov" in DD,
            get: DD => DD.fov,
            set: (DD, CD) => {
              DD.fov = CD
            }
          },
          metadata: iD
        }, TD, GD), (0, ID.k)(null, null, XD, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: DD => "projectionPlaneTilt" in DD,
            get: DD => DD.projectionPlaneTilt,
            set: (DD, CD) => {
              DD.projectionPlaneTilt = CD
            }
          },
          metadata: iD
        }, RD, kD), (0, ID.k)(null, null, mD, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "minZ" in DD,
            get: DD => DD.minZ,
            set: (DD, CD) => {
              DD.minZ = CD
            }
          },
          metadata: iD
        }, dD, YD), (0, ID.k)(null, null, nD, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "maxZ" in DD,
            get: DD => DD.maxZ,
            set: (DD, CD) => {
              DD.maxZ = CD
            }
          },
          metadata: iD
        }, WD, sD), (0, ID.k)(null, null, HD, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: DD => "layerMask" in DD,
            get: DD => DD.layerMask,
            set: (DD, CD) => {
              DD.layerMask = CD
            }
          },
          metadata: iD
        }, ED, eD), (0, ID.k)(null, null, UD, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "fovMode" in DD,
            get: DD => DD.fovMode,
            set: (DD, CD) => {
              DD.fovMode = CD
            }
          },
          metadata: iD
        }, uD, hD), (0, ID.k)(null, null, xD, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "cameraRigMode" in DD,
            get: DD => DD.cameraRigMode,
            set: (DD, CD) => {
              DD.cameraRigMode = CD
            }
          },
          metadata: iD
        }, rD, AD), (0, ID.k)(null, null, qD, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "interaxialDistance" in DD,
            get: DD => DD.interaxialDistance,
            set: (DD, CD) => {
              DD.interaxialDistance = CD
            }
          },
          metadata: iD
        }, FD, DC), (0, ID.k)(null, null, JD, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: DD => "isStereoscopicSideBySide" in DD,
            get: DD => DD.isStereoscopicSideBySide,
            set: (DD, CD) => {
              DD.isStereoscopicSideBySide = CD
            }
          },
          metadata: iD
        }, CC, cC), (0, ID.k)(null, null, KD, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: DD => "ignoreCameraMaxZ" in DD,
            get: DD => DD.ignoreCameraMaxZ,
            set: (DD, CD) => {
              DD.ignoreCameraMaxZ = CD
            }
          },
          metadata: iD
        }, IC, pC), iD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iD
        })
      })(), DD._CreateDefaultParsedCamera = (DD, CD) => {
        throw (0, BD.m)("UniversalCamera")
      }, DD.PERSPECTIVE_CAMERA = 0, DD.ORTHOGRAPHIC_CAMERA = 1, DD.FOVMODE_VERTICAL_FIXED = 0, DD.FOVMODE_HORIZONTAL_FIXED = 1, DD.RIG_MODE_NONE = 0, DD.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, DD.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, DD.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, DD.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, DD.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, DD.RIG_MODE_VR = 20, DD.RIG_MODE_CUSTOM = 22, DD.ForceAttachControlToAlwaysPreventDefault = !1, DD
    })();

    function vD(DD, CD) {
      const cD = DD.type,
        ID = oD.GetConstructorFromName(cD, DD.name, CD, DD.interaxial_distance, DD.isStereoscopicSideBySide),
        pD = ZD.d.Parse(ID, DD, CD);
      if (void 0 !== DD.parentId && (pD._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (pD._waitingParentInstanceIndex = DD.parentInstanceIndex), pD.inputs && (pD.inputs.parse(DD), pD._setupInputs()), DD.upVector && (pD.upVector = bD.p.FromArray(DD.upVector)), pD.setPosition && (pD.position.K4(0, 0, 0), pD.setPosition(bD.p.FromArray(DD.position))), DD.target && pD.setTarget && pD.setTarget(bD.p.FromArray(DD.target)), DD.cameraRigMode) {
        const CD = DD.interaxial_distance ? {
          interaxialDistance: DD.interaxial_distance
        } : {};
        pD.setCameraRigMode(DD.cameraRigMode, CD)
      }
      if (DD.animations) {
        for (let CD = 0; CD < DD.animations.length; CD++) {
          const cD = DD.animations[CD],
            ID = (0, SD.b)("BABYLON.Animation");
          ID && pD.animations.push(ID.Parse(cD))
        }
        QD.b.ParseAnimationRanges(pD, DD, CD)
      }
      return DD.autoAnimate && CD.beginAnimation(pD, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), void 0 !== DD.isEnabled && pD.lH(DD.isEnabled), pD
    }
    let ND = !1;

    function gD() {
      ND || (ND = !0, oD.Parse = vD)
    }
  },
  39368: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD) {
        this._cameraPosition = CD, this._behavior = cD, this.activeInput = !1, this.speed = 1, this.hG = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new ID.p, this.rotationAccumulatedPixels = new ID.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = ID.p.Zero(), this.rotationDeltaCurrentFrame = ID.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new ID.p, this.referenceFrameRate = 60, this._rotationVelocity = new ID.p, this._prevFrameTimeMs = 0, this._scene = DD
      }
      computeCurrentFrameDeltas() {
        const DD = this._scene.DZ().getDeltaTime(),
          CD = this._getEffectiveDeltaMs(DD);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.YF(0), this.rotationDeltaCurrentFrame.YF(0), this.zoomDeltaCurrentFrame = 0, void(DD > 0 && (this._prevFrameTimeMs = DD));
        this.panDeltaCurrentFrame.YF(0), this.rotationDeltaCurrentFrame.YF(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.K4(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * CD, this.panDeltaCurrentFrame), this._rotationVelocity.K4(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.K4(this._rotationVelocity.x * this.speed * this.rotationXSpeed * CD, this._rotationVelocity.y * this.speed * this.rotationYSpeed * CD, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.hG * this._zoomSpeedMultiplier) * CD, DD > 0 && (this._prevFrameTimeMs = DD), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.YF(0), this.rotationAccumulatedPixels.YF(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.YF(0), this.rotationAccumulatedPixels.YF(0)
      }
      resetPanVelocity() {
        this._panVelocity.YF(0), this.panAccumulatedPixels.YF(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(DD) {
        const CD = this._scene.DZ().getDeltaTime(),
          cD = this._getEffectiveDeltaMs(CD),
          ID = 1e3 / this.referenceFrameRate;
        return Math.pow(DD, cD / ID)
      }
      getFrameIndependentInputScale(DD) {
        const CD = 1 - DD;
        if (CD <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(DD)) / CD
      }
      _getEffectiveDeltaMs(DD) {
        return DD > 0 ? DD : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(DD, CD, cD) {
        let ID = DD;
        const pD = this._scene.DZ().getDeltaTime(),
          iD = this._getEffectiveDeltaMs(pD);
        if (0 === iD) return ID;
        const fD = this.getFrameIndependentDecay(cD);
        if (ID *= fD, 0 !== CD || this.activeInput) {
          const DD = 1 - cD;
          ID += CD / iD * (DD > 0 ? (1 - fD) / DD : 1)
        } else Math.abs(ID) < 1e-6 && (ID = 0);
        return ID
      }
    }
  },
  39373: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    class ID {
      constructor(DD, CD) {
        this.inputMap = [], this.handlers = DD, this._createDefaultEntries = CD, this.resetInputMap()
      }
      resolveInteraction(DD, CD) {
        for (const cD of this.inputMap)
          if (cD.source === DD && this._entryMatches(cD, CD)) return cD;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(DD, CD, cD) {
        const ID = this.inputMap;
        for (let pD = 0; pD < ID.length; pD++) {
          const iD = ID[pD];
          if (iD.source === DD && iD.interaction === CD && this._entryConditionsMatch(iD, cD)) return iD
        }
      }
      getEntries(DD, CD, cD) {
        const ID = [],
          pD = this.inputMap;
        for (let iD = 0; iD < pD.length; iD++) {
          const fD = pD[iD];
          fD.source === DD && fD.interaction === CD && this._entryConditionsMatch(fD, cD) && ID.push(fD)
        }
        return ID
      }
      addEntry(DD) {
        const CD = this._entrySpecificity(DD);
        let cD = this.inputMap.length;
        for (let ID = 0; ID < this.inputMap.length; ID++)
          if (this._entrySpecificity(this.inputMap[ID]) < CD) {
            cD = ID;
            break
          } this.inputMap.splice(cD, 0, DD)
      }
      setInteraction(DD, CD, cD) {
        const ID = this.resolveInteraction(DD, CD);
        return ID && this._entryCoversAllConditionsOf(ID, CD) ? (ID.interaction = cD, !0) : (this.addEntry({
          source: DD,
          ...CD ?? {},
          interaction: cD
        }), !0)
      }
      _entryCoversAllConditionsOf(DD, CD) {
        if (!CD) return !0;
        const cD = DD;
        for (const ID of Object.keys(CD)) {
          const DD = CD[ID];
          if (void 0 !== DD)
            if ("modifiers" === ID) {
              const CD = cD.modifiers ?? {};
              for (const cD of Object.keys(DD))
                if (void 0 !== DD[cD] && void 0 === CD[cD]) return !1
            } else if (void 0 === cD[ID]) return !1
        }
        return !0
      }
      setInteractions(DD, CD, cD) {
        let ID = 0;
        const pD = this.inputMap;
        for (let iD = 0; iD < pD.length; iD++) {
          const fD = pD[iD];
          fD.source === DD && this._entryMatches(fD, CD) && (fD.interaction = cD, ID++)
        }
        return ID
      }
      _entryMatches(DD, CD) {
        switch (DD.source) {
          case "pointer":
            return (void 0 === DD.button || DD.button === CD?.button) && this._matchModifiers(DD.modifiers, CD?.modifiers);
          case "wheel":
            return this._matchModifiers(DD.modifiers, CD?.modifiers);
          case "touch":
            return void 0 === DD.touchCount || DD.touchCount === CD?.touchCount;
          case "keyboard":
            return (void 0 === DD.key || (Array.isArray(DD.key) ? -1 !== DD.key.indexOf(CD?.key ?? -1) : DD.key === CD?.key)) && this._matchModifiers(DD.modifiers, CD?.modifiers)
        }
      }
      _entryConditionsMatch(DD, CD) {
        if (!CD) return !0;
        switch (DD.source) {
          case "pointer":
            return (!("button" in CD) || DD.button === CD.button) && (!("modifiers" in CD) || this._entryModifiersMatch(DD.modifiers, CD.modifiers));
          case "wheel":
            return !("modifiers" in CD) || this._entryModifiersMatch(DD.modifiers, CD.modifiers);
          case "touch":
            return !("touchCount" in CD) || DD.touchCount === CD.touchCount;
          case "keyboard":
            if ("key" in CD) {
              if (void 0 === DD.key) return void 0 === CD.key;
              if (void 0 === CD.key || (Array.isArray(DD.key) ? -1 === DD.key.indexOf(CD.key) : DD.key !== CD.key)) return !1
            }
            return !("modifiers" in CD) || this._entryModifiersMatch(DD.modifiers, CD.modifiers)
        }
      }
      _entrySpecificity(DD) {
        let CD = 0;
        return "button" in DD && void 0 !== DD.button && CD++, "key" in DD && void 0 !== DD.key && CD++, "touchCount" in DD && void 0 !== DD.touchCount && CD++, "modifiers" in DD && DD.modifiers && CD++, CD
      }
      _matchModifiers(DD, CD) {
        return !DD || (void 0 === DD.ctrl || DD.ctrl === (CD?.ctrl ?? !1)) && ((void 0 === DD.shift || DD.shift === (CD?.shift ?? !1)) && (void 0 === DD.alt || DD.alt === (CD?.alt ?? !1)))
      }
      _entryModifiersMatch(DD, CD) {
        if (!CD) return !DD;
        return void 0 !== CD.ctrl || void 0 !== CD.shift || void 0 !== CD.alt ? (void 0 === CD.ctrl || DD?.ctrl === CD.ctrl) && ((void 0 === CD.shift || DD?.shift === CD.shift) && (void 0 === CD.alt || DD?.alt === CD.alt)) : !DD || void 0 === DD.ctrl && void 0 === DD.shift && void 0 === DD.alt
      }
    }
  },
  39349: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => vD,
      e: () => ZD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39351),
      fD = cD(36446),
      bD = cD(36449),
      QD = cD(39359),
      wD = cD(39356),
      SD = cD(39368),
      BD = cD(39373);
    class yD extends SD.c {
      constructor(DD, CD, cD) {
        super(DD, CD, cD), this.input = new BD.b({
          translate: (DD, CD, cD) => {
            this.panAccumulatedPixels.x += DD, this.panAccumulatedPixels.y += CD, this.panAccumulatedPixels.z += cD
          },
          rotate: (DD, CD) => {
            this.rotationAccumulatedPixels.x += DD, this.rotationAccumulatedPixels.y += CD
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
    const MD = fD.d.Zero(),
      tD = fD.h.Identity();
    let ZD = (() => {
        var DD;
        let CD, cD, wD, SD, BD = iD.c,
          ZD = [],
          oD = [],
          vD = [],
          ND = [],
          gD = [],
          XD = [],
          mD = [],
          nD = [];
        return DD = class extends BD {
          get inertia() {
            return this._targetInertia
          }
          set inertia(DD) {
            this._targetInertia = DD, this.movement && (this.movement.panInertia = DD, this.movement.rotationInertia = DD)
          }
          constructor(DD, CD, cD) {
            super(DD, CD, cD, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new fD.p(0, 0, 0), this.cameraRotation = new fD.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, ID.m)(this, ZD, !1), this.rotation = ((0, ID.m)(this, oD), (0, ID.m)(this, vD, void 0)), this.rotationQuaternion = (0, ID.m)(this, ND), this.speed = (0, ID.m)(this, gD, 2), this.noRotationConstraint = ((0, ID.m)(this, XD), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = bD.c, this._rotationEpsilon = bD.c, this.lockedTarget = (0, ID.m)(this, mD, null), this._currentTarget = ((0, ID.m)(this, nD), fD.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = fD.d.Zero(), this._cameraTransformMatrix = fD.d.Zero(), this._cameraRotationMatrix = fD.d.Zero(), this._transformedReferencePoint = fD.p.Zero(), this._deferredPositionUpdate = new fD.p, this._deferredRotationQuaternionUpdate = new fD.h, this._deferredRotationUpdate = new fD.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = fD.p.Forward(this.hq().useRightHandedSystem), this.rotation = new fD.p(0, this.hq().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new yD(this.hq(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(DD) {
            this.getWorldMatrix();
            const CD = fD.l.cZ[0],
              cD = fD.l.cZ[1];
            return cD.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(cD, CD), CD.scaleInPlace(DD), this.globalPosition.add(CD)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.K4(0, 0, 0), this.cameraRotation.K4(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new fD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new fD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new fD.h(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(DD) {
            DD || super._updateCache();
            const CD = this._getLockedTargetPosition();
            CD ? this._cache.lockedTarget ? this._cache.lockedTarget.YCD(CD) : this._cache.lockedTarget = CD.clone() : this._cache.lockedTarget = null, this._cache.rotation.YCD(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.YCD(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const DD = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(DD) : !DD) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const DD = this.DZ();
            return this.speed * Math.sqrt(DD.getDeltaTime() / (100 * DD.getFps()))
          }
          setTarget(DD) {
            this.upVector.normalize(), this._initialFocalDistance = DD.subtract(this.position).length(), this.position.z === DD.z && (this.position.z += bD.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.hq().useRightHandedSystem ? fD.d.LookAtRHToRef(this.position, DD, fD.p.UpReadOnly, MD) : fD.d.LookAtLHToRef(this.position, DD, fD.p.UpReadOnly, MD), MD.invert();
            const CD = this.rotationQuaternion || tD;
            fD.h.FromRotationMatrixToRef(MD, CD), CD.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(fD.l.Matrix[0]), fD.p.TransformNormalToRef(this.cameraDirection, fD.l.Matrix[0], fD.l.cZ[0]), this._deferredPositionUpdate.addInPlace(fD.l.cZ[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.YCD(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.YCD(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const DD = this.movement,
              CD = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            DD.panAccumulatedPixels.addInPlace(this.cameraDirection), DD.rotationAccumulatedPixels.x += this.cameraRotation.x, DD.rotationAccumulatedPixels.y += this.cameraRotation.y, DD.computeCurrentFrameDeltas(), this.cameraDirection.YCD(DD.panDeltaCurrentFrame), this.cameraRotation.set(DD.rotationDeltaCurrentFrame.x, DD.rotationDeltaCurrentFrame.y);
            const cD = this.speed * this._panningEpsilon;
            !CD && Math.abs(this.cameraDirection.x) < cD && Math.abs(this.cameraDirection.y) < cD && Math.abs(this.cameraDirection.z) < cD && (this.cameraDirection.YF(0), DD.resetPanVelocity());
            const ID = this.invertRotation ? -this.inverseRotationSpeed : 1,
              pD = this._decideIfNeedsToMove(),
              iD = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.YCD(this.rotation), this._deferredPositionUpdate.YCD(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.YCD(this.rotationQuaternion), pD && this._updatePosition(), iD) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * ID, this._deferredRotationUpdate.y += this.cameraRotation.y * ID, !this.noRotationConstraint) {
                const DD = 1.570796;
                this._deferredRotationUpdate.x > DD && (this._deferredRotationUpdate.x = DD), this._deferredRotationUpdate.x < -DD && (this._deferredRotationUpdate.x = -DD)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.YCD(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (fD.h.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.YCD(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.YF(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : fD.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return fD.p.TransformNormalToRef(fD.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), fD.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? QD.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (fD.h.FromEulerVectorToRef(this.rotation, tD), QD.c.Y.rotateByQuaternionToRef(tD, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(DD, CD, cD) {
            if (this.hq().useRightHandedSystem ? fD.d.LookAtRHToRef(DD, CD, cD, this._viewMatrix) : fD.d.LookAtLHToRef(DD, CD, cD, this._viewMatrix), this.parent) {
              const DD = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(DD, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(CD, cD) {
            if (this.cameraRigMode !== iD.c.RIG_MODE_NONE) {
              const cD = new DD(CD, this.position.clone(), this.hq());
              return cD.isRigCamera = !0, cD.rigParent = this, this.cameraRigMode === iD.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new fD.h), cD._cameraRigParams = {}, cD.rotationQuaternion = new fD.h), cD.mode = this.mode, cD.orthoLeft = this.orthoLeft, cD.orthoRight = this.orthoRight, cD.orthoTop = this.orthoTop, cD.orthoBottom = this.orthoBottom, cD
            }
            return null
          }
          _updateRigCameras() {
            const DD = this._rigCameras[0],
              CD = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case iD.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case iD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case iD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case iD.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case iD.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const cD = this.cameraRigMode === iD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  ID = this.cameraRigMode === iD.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * cD, DD), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ID, CD);
                break
              }
              case iD.c.RIG_MODE_VR:
                DD.rotationQuaternion && CD.rotationQuaternion && this.rotationQuaternion ? (DD.rotationQuaternion.YCD(this.rotationQuaternion), CD.rotationQuaternion.YCD(this.rotationQuaternion)) : (DD.rotation.YCD(this.rotation), CD.rotation.YCD(this.rotation)), DD.position.YCD(this.position), CD.position.YCD(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(CD, cD) {
            this.getTarget().subtractToRef(this.position, DD._TargetFocalPoint), DD._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const ID = DD._TargetFocalPoint.addInPlace(this.position);
            fD.d.TranslationToRef(-ID.x, -ID.y, -ID.z, DD._TargetTransformMatrix), DD._TargetTransformMatrix.multiplyToRef(fD.d.RotationAxis(cD.upVector, CD), DD._RigCamTransformMatrix), fD.d.TranslationToRef(ID.x, ID.y, ID.z, DD._TargetTransformMatrix), DD._RigCamTransformMatrix.multiplyToRef(DD._TargetTransformMatrix, DD._RigCamTransformMatrix), fD.p.TransformCoordinatesToRef(this.position, DD._RigCamTransformMatrix, cD.position), cD.setTarget(ID)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(BD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.C)()], wD = [(0, pD.G)()], SD = [(0, pD.s)("lockedTargetId")], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: DD => "updateUpVectorFromRotation" in DD,
              get: DD => DD.updateUpVectorFromRotation,
              set: (DD, CD) => {
                DD.updateUpVectorFromRotation = CD
              }
            },
            metadata: iD
          }, ZD, oD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: DD => "rotation" in DD,
              get: DD => DD.rotation,
              set: (DD, CD) => {
                DD.rotation = CD
              }
            },
            metadata: iD
          }, vD, ND), (0, ID.k)(null, null, wD, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: DD => "speed" in DD,
              get: DD => DD.speed,
              set: (DD, CD) => {
                DD.speed = CD
              }
            },
            metadata: iD
          }, gD, XD), (0, ID.k)(null, null, SD, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: DD => "lockedTarget" in DD,
              get: DD => DD.lockedTarget,
              set: (DD, CD) => {
                DD.lockedTarget = CD
              }
            },
            metadata: iD
          }, mD, nD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD._RigCamTransformMatrix = new fD.d, DD._TargetTransformMatrix = new fD.d, DD._TargetFocalPoint = new fD.p, DD
      })(),
      oD = !1;

    function vD() {
      oD || (oD = !0, wD.b.AddNodeConstructor("TargetCamera", ((DD, CD) => () => new ZD(DD, fD.p.Zero(), CD))))
    }
  },
  39109: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(39046);
    let pD = !1;

    function iD() {
      pD || (pD = !0, ID.e.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, ID.e.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, ID.e.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, ID.e.prototype.getAspectRatio = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = DD.viewport;
        return this.getRenderWidth(CD) * cD.width / (this.getRenderHeight(CD) * cD.height)
      }, ID.e.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, ID.e.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39186: (DD, CD, cD) => {
    var ID = cD(39046),
      pD = cD(39193);
    let iD = !1;
    iD || (iD = !0, (0, pD.t)(), ID.e.prototype._loadFileAsync = async function(DD, CD, cD) {
      return await new Promise(((ID, pD) => {
        this._loadFile(DD, (DD => {
          ID(DD)
        }), void 0, CD, cD, ((DD, CD) => {
          pD(CD)
        }))
      }))
    })
  },
  39181: (DD, CD, cD) => {
    (0, cD(39115).b)()
  },
  39115: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(39046);
    let pD = !1;

    function iD() {
      pD || (pD = !0, ID.e.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, ID.e.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, ID.e.prototype.createRenderPassId = function(DD) {
        const CD = ++ID.e._RenderPassIdCounter;
        return this._renderPassNames[CD] = DD ?? "NONAME", CD
      }, ID.e.prototype.releaseRenderPassId = function(DD) {
        this._renderPassNames[DD] = void 0;
        for (let CD = 0; CD < this.scenes.length; ++CD) {
          const cD = this.scenes[CD];
          for (let CD = 0; CD < cD.meshes.length; ++CD) {
            const ID = cD.meshes[CD];
            if (ID._releaseRenderPassId(DD), ID.IH)
              for (let CD = 0; CD < ID.IH.length; ++CD) {
                ID.IH[CD]._removeDrawWrapper(DD)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(DD)
      })
    }
  },
  39220: (DD, CD, cD) => {
    var ID = cD(39223),
      pD = cD(39046);
    let iD = !1;
    iD || (iD = !0, pD.e.GetCompatibleTextureLoader = ID.d)
  },
  39124: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(38991);
    let pD = !1;

    function iD() {
      pD || (pD = !0, ID.ThinEngine.prototype.setAlphaMode = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[cD] === DD) {
          if (!CD) {
            const CD = 0 === DD;
            this.depthCullingState.depthMask !== CD && (this.depthCullingState.depthMask = CD)
          }
          return
        }
        const ID = 0 === DD;
        this._alphaState.setAlphaBlend(!ID, cD), this._alphaState.setAlphaMode(DD, cD), CD || (this.depthCullingState.depthMask = ID), this._alphaMode[cD] = DD
      })
    }
  },
  39133: (DD, CD, cD) => {
    var ID = cD(38979),
      pD = cD(38048),
      iD = cD(38991),
      fD = cD(39139),
      bD = cD(39097);
    class QD extends fD.c {
      setDepthStencilTexture(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(DD, CD), !DD) return;
        const cD = this._engine,
          ID = this._context,
          pD = DD._hardwareTexture;
        if (pD && DD._autoMSAAManagement && this._MSAAFramebuffer) {
          const CD = cD._currentFramebuffer;
          cD._bindUnboundFramebuffer(this._MSAAFramebuffer), ID.framebufferRenderbuffer(ID.FRAMEBUFFER, (0, bD.c)(DD.format) ? ID.DEPTH_STENCIL_ATTACHMENT : ID.DEPTH_ATTACHMENT, ID.RENDERBUFFER, pD.getMSAARenderBuffer()), cD._bindUnboundFramebuffer(CD)
        }
      }
      constructor(DD, CD, cD, ID, pD) {
        super(DD, CD, cD, ID), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = pD
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
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const DD = this._engine,
            CD = DD._currentFramebuffer,
            cD = this._context;
          DD._bindUnboundFramebuffer(this._framebuffer), cD.framebufferRenderbuffer(cD.FRAMEBUFFER, cD.DEPTH_STENCIL_ATTACHMENT, cD.RENDERBUFFER, null), cD.framebufferRenderbuffer(cD.FRAMEBUFFER, cD.DEPTH_ATTACHMENT, cD.RENDERBUFFER, null), cD.framebufferRenderbuffer(cD.FRAMEBUFFER, cD.STENCIL_ATTACHMENT, cD.RENDERBUFFER, null), DD._bindUnboundFramebuffer(CD), cD.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(DD, CD, cD, ID, pD, iD)
      }
      shareDepth(DD) {
        super.shareDepth(DD);
        const CD = this._context,
          cD = this._depthStencilBuffer,
          ID = DD._MSAAFramebuffer || DD._framebuffer,
          pD = this._engine;
        DD._depthStencilBuffer && DD._depthStencilBuffer !== cD && CD.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = cD;
        const iD = DD._generateStencilBuffer ? CD.DEPTH_STENCIL_ATTACHMENT : CD.DEPTH_ATTACHMENT;
        pD._bindUnboundFramebuffer(ID), CD.framebufferRenderbuffer(CD.FRAMEBUFFER, iD, CD.RENDERBUFFER, cD), pD._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pD = DD._hardwareTexture;
        if (!pD) return;
        const iD = this._framebuffer,
          fD = this._engine,
          bD = fD._currentFramebuffer;
        let QD;
        if (fD._bindUnboundFramebuffer(iD), fD.JZ > 1) {
          const iD = this._context;
          QD = iD["COLOR_ATTACHMENT" + CD], DD.is2DArray || DD.is3D ? (cD = cD ?? this.layerIndices?.[CD] ?? 0, iD.framebufferTextureLayer(iD.FRAMEBUFFER, QD, pD.underlyingResource, ID, cD)) : DD.isCube ? (cD = cD ?? this.faceIndices?.[CD] ?? 0, iD.framebufferTexture2D(iD.FRAMEBUFFER, QD, iD.TEXTURE_CUBE_MAP_POSITIVE_X + cD, pD.underlyingResource, ID)) : iD.framebufferTexture2D(iD.FRAMEBUFFER, QD, iD.TEXTURE_2D, pD.underlyingResource, ID)
        } else {
          const DD = this._context;
          QD = DD["COLOR_ATTACHMENT" + CD + "_WEBGL"];
          const iD = void 0 !== cD ? DD.TEXTURE_CUBE_MAP_POSITIVE_X + cD : DD.TEXTURE_2D;
          DD.framebufferTexture2D(DD.FRAMEBUFFER, QD, iD, pD.underlyingResource, ID)
        }
        if (DD._autoMSAAManagement && this._MSAAFramebuffer) {
          const DD = this._context;
          fD._bindUnboundFramebuffer(this._MSAAFramebuffer), DD.framebufferRenderbuffer(DD.FRAMEBUFFER, QD, DD.RENDERBUFFER, pD.getMSAARenderBuffer())
        }
        fD._bindUnboundFramebuffer(bD)
      }
      setTexture(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(DD, CD, cD), this._bindTextureRenderTarget(DD, CD)
      }
      setLayerAndFaceIndices(DD, CD) {
        if (super.setLayerAndFaceIndices(DD, CD), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const cD = this._attachments?.length ?? this.textures.length;
        for (let ID = 0; ID < cD; ID++) {
          const DD = this.textures[ID];
          DD && (DD.is2DArray || DD.is3D ? this._bindTextureRenderTarget(DD, ID, this.layerIndices[ID]) : DD.isCube ? this._bindTextureRenderTarget(DD, ID, this.faceIndices[ID]) : this._bindTextureRenderTarget(DD, ID))
        }
      }
      setLayerAndFaceIndex() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(DD, CD, cD), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ID = this.textures[DD];
        ID.is2DArray || ID.is3D ? this._bindTextureRenderTarget(this.textures[DD], DD, this.layerIndices[DD]) : ID.isCube && this._bindTextureRenderTarget(this.textures[DD], DD, this.faceIndices[DD])
      }
      resolveMSAATextures() {
        const DD = this._engine,
          CD = DD._currentFramebuffer;
        DD._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), DD._bindUnboundFramebuffer(CD)
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const CD = this._context;
        DD || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (CD.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (CD.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (CD.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(DD)
      }
    }
    let wD = !1;
    wD || (wD = !0, iD.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(DD, CD, cD) {
      const ID = new QD(DD, CD, cD, this, this._gl);
      return this._renderTargetWrapperCache.push(ID), ID
    }, iD.ThinEngine.prototype.createRenderTargetTexture = function(DD, CD) {
      const cD = this._createHardwareRenderTargetWrapper(!1, !1, DD);
      let ID, pD, iD = !0,
        fD = !1,
        bD = !1,
        QD = 1;
      void 0 !== CD && "object" === typeof CD && (iD = CD.generateDepthBuffer ?? !0, fD = !!CD.generateStencilBuffer, bD = !!CD.noColorAttachment, ID = CD.colorAttachment, QD = CD.samples ?? 1, pD = CD.label);
      const wD = ID || (bD ? null : this._createInternalTexture(DD, CD, !0, 5)),
        SD = DD.width || DD,
        BD = DD.height || DD,
        yD = this._currentFramebuffer,
        MD = this._gl,
        tD = MD.createFramebuffer();
      if (this._bindUnboundFramebuffer(tD), cD._depthStencilBuffer = this._setupFramebufferDepthAttachments(fD, iD, SD, BD), !wD || wD.is2DArray || wD.is3D || MD.framebufferTexture2D(MD.FRAMEBUFFER, MD.COLOR_ATTACHMENT0, MD.TEXTURE_2D, wD._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(yD), cD.label = pD ?? "RenderTargetWrapper", cD._framebuffer = tD, cD._generateDepthBuffer = iD, cD._generateStencilBuffer = fD, cD.setTextures(wD), ID) {
        if (cD._samples = ID.samples, ID.samples > 1) {
          const DD = ID._hardwareTexture.getMSAARenderBuffer(0);
          cD._MSAAFramebuffer = MD.createFramebuffer(), this._bindUnboundFramebuffer(cD._MSAAFramebuffer), MD.framebufferRenderbuffer(MD.FRAMEBUFFER, MD.COLOR_ATTACHMENT0, MD.RENDERBUFFER, DD), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(cD, QD);
      return cD
    }, iD.ThinEngine.prototype._createDepthStencilTexture = function(DD, CD, cD) {
      const iD = this._gl,
        fD = DD.layers || 0,
        QD = DD.depth || 0;
      let wD = iD.TEXTURE_2D;
      0 !== fD ? wD = iD.TEXTURE_2D_ARRAY : 0 !== QD && (wD = iD.TEXTURE_3D);
      const SD = new ID.c(this, 12);
      if (SD.label = CD.label, !this._caps.depthTextureExtension) return pD.e.Error("Depth texture is not supported by your browser or hardware."), SD;
      const BD = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...CD
      };
      if (this._bindTextureDirectly(wD, SD, !0), this._setupDepthStencilTexture(SD, DD, 0 !== BD.comparisonFunction && BD.bilinearFiltering, BD.comparisonFunction, BD.samples), void 0 !== BD.depthTextureFormat) {
        if (15 !== BD.depthTextureFormat && 16 !== BD.depthTextureFormat && 17 !== BD.depthTextureFormat && 13 !== BD.depthTextureFormat && 14 !== BD.depthTextureFormat && 18 !== BD.depthTextureFormat) return pD.e.Error(`Depth texture ${BD.depthTextureFormat} format is not supported.`), SD;
        SD.format = BD.depthTextureFormat
      } else SD.format = BD.generateStencil ? 13 : 16;
      const yD = (0, bD.c)(SD.format),
        MD = this._getWebGLTextureTypeFromDepthTextureFormat(SD.format),
        tD = yD ? iD.DEPTH_STENCIL : iD.DEPTH_COMPONENT,
        ZD = this._getInternalFormatFromDepthTextureFormat(SD.format, !0, yD);
      return SD.is2DArray ? iD.texImage3D(wD, 0, ZD, SD.width, SD.height, fD, 0, tD, MD, null) : SD.is3D ? iD.texImage3D(wD, 0, ZD, SD.width, SD.height, QD, 0, tD, MD, null) : iD.texImage2D(wD, 0, ZD, SD.width, SD.height, 0, tD, MD, null), this._bindTextureDirectly(wD, null), this._internalTexturesCache.push(SD), cD._depthStencilBuffer && (iD.deleteRenderbuffer(cD._depthStencilBuffer), cD._depthStencilBuffer = null), this._bindUnboundFramebuffer(cD._MSAAFramebuffer ?? cD._framebuffer), cD._generateStencilBuffer = yD, cD._depthStencilTextureWithStencil = yD, cD._depthStencilBuffer = this._setupFramebufferDepthAttachments(cD._generateStencilBuffer, cD._generateDepthBuffer, cD.width, cD.height, cD.samples, SD.format), this._bindUnboundFramebuffer(null), SD
    }, iD.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(DD, CD) {
      if (this.JZ < 2 || !DD) return 1;
      if (DD.samples === CD) return CD;
      const cD = this._gl;
      CD = Math.min(CD, this.getCaps().maxMSAASamples), DD._depthStencilBuffer && (cD.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = null), DD._MSAAFramebuffer && (cD.deleteFramebuffer(DD._MSAAFramebuffer), DD._MSAAFramebuffer = null);
      const ID = DD.texture?._hardwareTexture;
      if (ID?.releaseMSAARenderBuffers(), DD.texture && CD > 1 && "function" === typeof cD.renderbufferStorageMultisample) {
        const pD = cD.createFramebuffer();
        if (!pD) throw new Error("Unable to create multi sampled framebuffer");
        DD._MSAAFramebuffer = pD, this._bindUnboundFramebuffer(DD._MSAAFramebuffer);
        const iD = this._createRenderBuffer(DD.texture.width, DD.texture.height, CD, -1, this._getRGBABufferInternalSizedFormat(DD.texture.type, DD.texture.format, DD.texture._useSRGBBuffer), cD.COLOR_ATTACHMENT0, !1);
        if (!iD) throw new Error("Unable to create multi sampled framebuffer");
        ID?.addMSAARenderBuffer(iD)
      }
      this._bindUnboundFramebuffer(DD._MSAAFramebuffer ?? DD._framebuffer), DD.texture && (DD.texture.samples = CD), DD._samples = CD;
      const pD = DD._depthStencilTexture ? DD._depthStencilTexture.format : void 0;
      return DD._depthStencilBuffer = this._setupFramebufferDepthAttachments(DD._generateStencilBuffer, DD._generateDepthBuffer, DD.width, DD.height, CD, pD), this._bindUnboundFramebuffer(null), CD
    }, iD.ThinEngine.prototype._setupDepthStencilTexture = function(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const iD = CD.width ?? CD,
        fD = CD.height ?? CD,
        bD = CD.layers || 0,
        QD = CD.depth || 0;
      DD.baseWidth = iD, DD.baseHeight = fD, DD.width = iD, DD.height = fD, DD.is2DArray = bD > 0, DD.depth = bD || QD, DD.isReady = !0, DD.samples = pD, DD.generateMipMaps = !1, DD.samplingMode = cD ? 2 : 1, DD.type = 0, DD._comparisonFunction = ID;
      const wD = this._gl,
        SD = this._getTextureTarget(DD),
        BD = this._getSamplingParameters(DD.samplingMode, !1);
      wD.texParameteri(SD, wD.TEXTURE_MAG_FILTER, BD.mag), wD.texParameteri(SD, wD.TEXTURE_MIN_FILTER, BD.min), wD.texParameteri(SD, wD.TEXTURE_WRAP_S, wD.CLAMP_TO_EDGE), wD.texParameteri(SD, wD.TEXTURE_WRAP_T, wD.CLAMP_TO_EDGE), this.JZ > 1 && (0 === ID ? (wD.texParameteri(SD, wD.TEXTURE_COMPARE_FUNC, 515), wD.texParameteri(SD, wD.TEXTURE_COMPARE_MODE, wD.NONE)) : (wD.texParameteri(SD, wD.TEXTURE_COMPARE_FUNC, ID), wD.texParameteri(SD, wD.TEXTURE_COMPARE_MODE, wD.COMPARE_REF_TO_TEXTURE)))
    })
  },
  38968: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID.c
    });
    var ID = cD(38977);
    (0, cD(39124).d)();
    var pD = cD(38991);
    let iD = !1;
    ! function() {
      if (iD) return;
      iD = !0;
      const DD = new WeakMap,
        CD = new WeakMap,
        cD = new WeakMap,
        ID = new WeakMap;
      pD.ThinEngine.prototype.getAlphaToCoverage = function() {
        return DD.get(this) ?? !1
      }, pD.ThinEngine.prototype.setAlphaToCoverage = function(cD) {
        (DD.get(this) !== cD || this._gl && CD.get(this) !== this._gl) && (DD.set(this, cD), this._gl && (cD ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), CD.set(this, this._gl)))
      }, Object.defineProperty(pD.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (ID.get(this) !== this._gl && (cD.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), ID.set(this, this._gl)), cD.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var fD = cD(38979),
      bD = cD(38048),
      QD = cD(39084);
    let wD = !1;
    ! function() {
      function DD(DD, CD, cD, ID) {
        let pD, iD = 1;
        1 === ID ? pD = new Float32Array(CD * cD * 4) : 2 === ID ? (pD = new Uint16Array(CD * cD * 4), iD = 15360) : pD = 7 === ID ? new Uint32Array(CD * cD * 4) : new Uint8Array(CD * cD * 4);
        for (let fD = 0; fD < CD; fD++)
          for (let ID = 0; ID < cD; ID++) {
            const cD = 3 * (ID * CD + fD),
              bD = 4 * (ID * CD + fD);
            pD[bD + 0] = DD[cD + 0], pD[bD + 1] = DD[cD + 1], pD[bD + 2] = DD[cD + 2], pD[bD + 3] = iD
          }
        return pD
      }

      function CD(DD) {
        return function(CD, cD, ID, pD, iD, bD, QD, wD) {
          let SD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            BD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const yD = DD ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            MD = DD ? 10 : 11,
            tD = new fD.c(this, MD);
          tD.baseWidth = cD, tD.baseHeight = ID, tD.baseDepth = pD, tD.width = cD, tD.height = ID, tD.depth = pD, tD.format = iD, tD.type = BD, tD.generateMipMaps = bD, tD.samplingMode = wD, DD ? tD.is3D = !0 : tD.is2DArray = !0, this._doNotHandleContextLost || (tD._bufferView = CD), DD ? this.updateRawTexture3D(tD, CD, iD, QD, SD, BD) : this.updateRawTexture2DArray(tD, CD, iD, QD, SD, BD), this._bindTextureDirectly(yD, tD, !0);
          const ZD = this._getSamplingParameters(wD, bD);
          return this._gl.texParameteri(yD, this._gl.TEXTURE_MAG_FILTER, ZD.mag), this._gl.texParameteri(yD, this._gl.TEXTURE_MIN_FILTER, ZD.min), bD && this._gl.generateMipmap(yD), this._bindTextureDirectly(yD, null), this._internalTexturesCache.push(tD), tD
        }
      }

      function cD(DD) {
        return function(CD, cD, ID, pD) {
          let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const bD = DD ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            QD = this._getWebGLTextureType(fD),
            wD = this._getInternalFormat(ID),
            SD = this._getRGBABufferInternalSizedFormat(fD, ID);
          this._bindTextureDirectly(bD, CD, !0), this._unpackFlipY(void 0 === pD || !!pD), this._doNotHandleContextLost || (CD._bufferView = cD, CD.format = ID, CD.invertY = pD, CD._compression = iD), CD.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), iD && cD ? this._gl.compressedTexImage3D(bD, 0, this.getCaps().s3tc[iD], CD.width, CD.height, CD.depth, 0, cD) : this._gl.texImage3D(bD, 0, SD, CD.width, CD.height, CD.depth, 0, wD, QD, cD), CD.generateMipMaps && this._gl.generateMipmap(bD), this._bindTextureDirectly(bD, null), CD.isReady = !0
        }
      }
      wD || (wD = !0, pD.ThinEngine.prototype.updateRawTexture = function(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!DD) return;
        const bD = this._getRGBABufferInternalSizedFormat(iD, cD, fD),
          QD = this._getInternalFormat(cD),
          wD = this._getWebGLTextureType(iD);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, DD, !0), this._unpackFlipY(void 0 === ID || !!ID), this._doNotHandleContextLost || (DD._bufferView = CD, DD.format = cD, DD.type = iD, DD.invertY = ID, DD._compression = pD), DD.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), pD && CD ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[pD], DD.width, DD.height, 0, CD) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, bD, DD.width, DD.height, 0, QD, wD, CD), DD.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), DD.isReady = !0
      }, pD.ThinEngine.prototype.createRawTexture = function(DD, CD, cD, ID, pD, iD, bD) {
        let QD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          SD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const BD = new fD.c(this, 3);
        BD.baseWidth = CD, BD.baseHeight = cD, BD.width = CD, BD.height = cD, BD.format = ID, BD.generateMipMaps = pD, BD.samplingMode = bD, BD.invertY = iD, BD._compression = QD, BD.type = wD, BD._useSRGBBuffer = this._getUseSRGBBuffer(SD, !pD), this._doNotHandleContextLost || (BD._bufferView = DD), this.updateRawTexture(BD, DD, ID, iD, QD, wD, BD._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, BD, !0);
        const yD = this._getSamplingParameters(bD, pD);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, yD.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, yD.min), pD && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(BD), BD
      }, pD.ThinEngine.prototype.createRawCubeTexture = function(DD, CD, cD, ID, pD, iD, wD) {
        let SD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const BD = this._gl,
          yD = new fD.c(this, 8);
        yD.isCube = !0, yD.format = cD, yD.type = ID, this._doNotHandleContextLost || (yD._bufferViewArray = DD);
        const MD = this._getWebGLTextureType(ID);
        let tD = this._getInternalFormat(cD);
        tD === BD.RGB && (tD = BD.RGBA), MD !== BD.FLOAT || this._caps.textureFloatLinearFiltering ? MD !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? MD !== BD.FLOAT || this._caps.textureFloatRender ? MD !== BD.HALF_FLOAT || this._caps.colorBufferFloat || (pD = !1, bD.e.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (pD = !1, bD.e.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (pD = !1, wD = 1, bD.e.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (pD = !1, wD = 1, bD.e.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const ZD = CD,
          oD = ZD;
        yD.width = ZD, yD.height = oD, yD.invertY = iD, yD._compression = SD;
        if (!this.needPOTTextures || (0, QD.h)(yD.width) && (0, QD.h)(yD.height) || (pD = !1), DD) this.updateRawCubeTexture(yD, DD, cD, ID, iD, SD);
        else {
          const DD = this._getRGBABufferInternalSizedFormat(ID),
            CD = 0;
          this._bindTextureDirectly(BD.TEXTURE_CUBE_MAP, yD, !0);
          for (let cD = 0; cD < 6; cD++) SD ? BD.compressedTexImage2D(BD.TEXTURE_CUBE_MAP_POSITIVE_X + cD, CD, this.getCaps().s3tc[SD], yD.width, yD.height, 0, void 0) : BD.texImage2D(BD.TEXTURE_CUBE_MAP_POSITIVE_X + cD, CD, DD, yD.width, yD.height, 0, tD, MD, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, yD, !0), DD && pD && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const vD = this._getSamplingParameters(wD, pD);
        return BD.texParameteri(BD.TEXTURE_CUBE_MAP, BD.TEXTURE_MAG_FILTER, vD.mag), BD.texParameteri(BD.TEXTURE_CUBE_MAP, BD.TEXTURE_MIN_FILTER, vD.min), BD.texParameteri(BD.TEXTURE_CUBE_MAP, BD.TEXTURE_WRAP_S, BD.CLAMP_TO_EDGE), BD.texParameteri(BD.TEXTURE_CUBE_MAP, BD.TEXTURE_WRAP_T, BD.CLAMP_TO_EDGE), this._bindTextureDirectly(BD.TEXTURE_CUBE_MAP, null), yD.generateMipMaps = pD, yD.samplingMode = wD, yD.isReady = !0, yD
      }, pD.ThinEngine.prototype.updateRawCubeTexture = function(CD, cD, ID, pD, iD) {
        let fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        CD._bufferViewArray = cD, CD.format = ID, CD.type = pD, CD.invertY = iD, CD._compression = fD;
        const wD = this._gl,
          SD = this._getWebGLTextureType(pD);
        let BD = this._getInternalFormat(ID);
        const yD = this._getRGBABufferInternalSizedFormat(pD);
        let MD = !1;
        BD === wD.RGB && (BD = wD.RGBA, MD = !0), this._bindTextureDirectly(wD.TEXTURE_CUBE_MAP, CD, !0), this._unpackFlipY(void 0 === iD || !!iD), CD.width % 4 !== 0 && wD.pixelStorei(wD.UNPACK_ALIGNMENT, 1);
        for (let QD = 0; QD < 6; QD++) {
          let ID = cD[QD];
          fD ? wD.compressedTexImage2D(wD.TEXTURE_CUBE_MAP_POSITIVE_X + QD, bD, this.getCaps().s3tc[fD], CD.width, CD.height, 0, ID) : (MD && (ID = DD(ID, CD.width, CD.height, pD)), wD.texImage2D(wD.TEXTURE_CUBE_MAP_POSITIVE_X + QD, bD, yD, CD.width, CD.height, 0, BD, SD, ID))
        }(!this.needPOTTextures || (0, QD.h)(CD.width) && (0, QD.h)(CD.height)) && CD.generateMipMaps && 0 === bD && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), CD.isReady = !0
      }, pD.ThinEngine.prototype.createRawCubeTextureFromUrl = function(CD, cD, ID, pD, iD, fD, bD, QD) {
        let wD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          SD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          BD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          yD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const MD = this._gl,
          tD = this.createRawCubeTexture(null, ID, pD, iD, !fD, yD, BD, null);
        cD?.addPendingData(tD), tD.url = CD, tD.isReady = !1, this._internalTexturesCache.push(tD);
        const ZD = (DD, CD) => {
            cD?.removePendingData(tD), SD && SD(DD ? DD.status + " " + DD.statusText : "Failed to parse texture data", CD)
          },
          oD = async CD => {
            if (!tD._hardwareTexture) return;
            const ID = bD(CD);
            if (!ID) return;
            const fD = ID instanceof Promise ? await ID : ID,
              SD = tD.width;
            if (QD) {
              const CD = this._getWebGLTextureType(iD);
              let cD = this._getInternalFormat(pD);
              const ID = this._getRGBABufferInternalSizedFormat(iD);
              let bD = !1;
              cD === MD.RGB && (cD = MD.RGBA, bD = !0), this._bindTextureDirectly(MD.TEXTURE_CUBE_MAP, tD, !0), this._unpackFlipY(!1);
              const wD = QD(fD);
              for (let pD = 0; pD < wD.length; pD++) {
                const fD = SD >> pD;
                for (let QD = 0; QD < 6; QD++) {
                  let SD = wD[pD][QD];
                  bD && (SD = DD(SD, fD, fD, iD)), MD.texImage2D(QD, pD, ID, fD, fD, 0, cD, CD, SD)
                }
              }
              this._bindTextureDirectly(MD.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(tD, fD, pD, iD, yD);
            tD.isReady = !0, cD?.removePendingData(tD), tD.onLoadedObservable.notifyObservers(tD), tD.onLoadedObservable.clear(), wD && wD()
          };
        return this._loadFile(CD, (DD => {
          oD(DD).catch((DD => {
            ZD(void 0, DD)
          }))
        }), void 0, cD?.offlineProvider, !0, ZD), tD
      }, pD.ThinEngine.prototype.createRawTexture2DArray = CD(!1), pD.ThinEngine.prototype.createRawTexture3D = CD(!0), pD.ThinEngine.prototype.updateRawTexture2DArray = cD(!1), pD.ThinEngine.prototype.updateRawTexture3D = cD(!0))
    }();
    var SD = cD(39023);
    let BD = !1;
    BD || (BD = !0, pD.ThinEngine.prototype._readTexturePixelsSync = function(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        wD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const BD = this._gl;
      if (!BD) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const DD = BD.createFramebuffer();
        if (!DD) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = DD
      }
      BD.bindFramebuffer(BD.FRAMEBUFFER, this._dummyFramebuffer), ID > -1 && (DD.is2DArray || DD.is3D) ? BD.framebufferTextureLayer(BD.FRAMEBUFFER, BD.COLOR_ATTACHMENT0, DD._hardwareTexture?.underlyingResource, pD, ID) : ID > -1 ? BD.framebufferTexture2D(BD.FRAMEBUFFER, BD.COLOR_ATTACHMENT0, BD.TEXTURE_CUBE_MAP_POSITIVE_X + ID, DD._hardwareTexture?.underlyingResource, pD) : BD.framebufferTexture2D(BD.FRAMEBUFFER, BD.COLOR_ATTACHMENT0, BD.TEXTURE_2D, DD._hardwareTexture?.underlyingResource, pD);
      let yD = void 0 !== DD.type ? this._getWebGLTextureType(DD.type) : BD.UNSIGNED_BYTE;
      return bD ? iD || (iD = (0, SD.p)(DD.type, 4 * CD * cD)) : yD === BD.UNSIGNED_BYTE ? (iD || (iD = new Uint8Array(4 * CD * cD)), yD = BD.UNSIGNED_BYTE) : (iD || (iD = new Float32Array(4 * CD * cD)), yD = BD.FLOAT), fD && this.flushFramebuffer(), BD.readPixels(QD, wD, CD, cD, BD.RGBA, yD, iD), BD.bindFramebuffer(BD.FRAMEBUFFER, this._currentFramebuffer), iD
    }, pD.ThinEngine.prototype._readTexturePixels = function(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        wD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD))
    }), (0, cD(39131).b)();
    let yD = !1;
    yD || (yD = !0, pD.ThinEngine.prototype._createDepthStencilCubeTexture = function(DD, CD) {
      const cD = new fD.c(this, 12);
      if (cD.isCube = !0, 1 === this.JZ) return bD.e.Error("Depth cube texture is not supported by WebGL 1."), cD;
      const ID = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...CD
        },
        pD = this._gl;
      this._bindTextureDirectly(pD.TEXTURE_CUBE_MAP, cD, !0), this._setupDepthStencilTexture(cD, DD, ID.bilinearFiltering, ID.comparisonFunction);
      for (let iD = 0; iD < 6; iD++) ID.generateStencil ? pD.texImage2D(pD.TEXTURE_CUBE_MAP_POSITIVE_X + iD, 0, pD.DEPTH24_STENCIL8, DD, DD, 0, pD.DEPTH_STENCIL, pD.UNSIGNED_INT_24_8, null) : pD.texImage2D(pD.TEXTURE_CUBE_MAP_POSITIVE_X + iD, 0, pD.DEPTH_COMPONENT24, DD, DD, 0, pD.DEPTH_COMPONENT, pD.UNSIGNED_INT, null);
      return this._bindTextureDirectly(pD.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(cD), cD
    }, pD.ThinEngine.prototype._setCubeMapTextureParams = function(DD, CD, cD) {
      const ID = this._gl;
      ID.texParameteri(ID.TEXTURE_CUBE_MAP, ID.TEXTURE_MAG_FILTER, ID.LINEAR), ID.texParameteri(ID.TEXTURE_CUBE_MAP, ID.TEXTURE_MIN_FILTER, CD ? ID.LINEAR_MIPMAP_LINEAR : ID.LINEAR), ID.texParameteri(ID.TEXTURE_CUBE_MAP, ID.TEXTURE_WRAP_S, ID.CLAMP_TO_EDGE), ID.texParameteri(ID.TEXTURE_CUBE_MAP, ID.TEXTURE_WRAP_T, ID.CLAMP_TO_EDGE), DD.samplingMode = CD ? 3 : 2, CD && this.getCaps().textureMaxLevel && void 0 !== cD && cD > 0 && (ID.texParameteri(ID.TEXTURE_CUBE_MAP, ID.TEXTURE_MAX_LEVEL, cD), DD._maxLodLevel = cD), this._bindTextureDirectly(ID.TEXTURE_CUBE_MAP, null)
    }, pD.ThinEngine.prototype.createCubeTexture = function(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fD = arguments.length > 6 ? arguments[6] : void 0,
        wD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        SD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        BD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        yD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        MD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        tD = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        ZD = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const oD = this._gl;
      return this.createCubeTextureBase(DD, CD, cD, !!ID, pD, iD, fD, wD, SD, BD, yD, MD, (DD => this._bindTextureDirectly(oD.TEXTURE_CUBE_MAP, DD, !0)), ((DD, CD) => {
        const cD = this.needPOTTextures ? (0, QD.e)(CD[0].width, this._caps.maxCubemapTextureSize) : CD[0].width,
          iD = cD,
          wD = [oD.TEXTURE_CUBE_MAP_POSITIVE_X, oD.TEXTURE_CUBE_MAP_POSITIVE_Y, oD.TEXTURE_CUBE_MAP_POSITIVE_Z, oD.TEXTURE_CUBE_MAP_NEGATIVE_X, oD.TEXTURE_CUBE_MAP_NEGATIVE_Y, oD.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(oD.TEXTURE_CUBE_MAP, DD, !0), this._unpackFlipY(!1);
        const SD = fD ? this._getInternalFormat(fD, DD._useSRGBBuffer) : DD._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : oD.RGBA;
        let BD = fD ? this._getInternalFormat(fD) : oD.RGBA;
        DD._useSRGBBuffer && 1 === this.JZ && (BD = SD);
        for (let ID = 0; ID < wD.length; ID++)
          if (CD[ID].width !== cD || CD[ID].height !== iD) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void bD.e.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = cD, this._workingCanvas.height = iD, this._workingContext.drawImage(CD[ID], 0, 0, CD[ID].width, CD[ID].height, 0, 0, cD, iD), oD.texImage2D(wD[ID], 0, SD, BD, oD.UNSIGNED_BYTE, this._workingCanvas)
          } else oD.texImage2D(wD[ID], 0, SD, BD, oD.UNSIGNED_BYTE, CD[ID]);
        ID || oD.generateMipmap(oD.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(DD, !ID), DD.width = cD, DD.height = iD, DD.isReady = !0, fD && (DD.format = fD), DD.onLoadedObservable.notifyObservers(DD), DD.onLoadedObservable.clear(), pD && pD()
      }), !!tD, ZD)
    }, pD.ThinEngine.prototype.generateMipMapsForCubemap = function(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD.generateMipMaps) {
        const cD = this._gl;
        this._bindTextureDirectly(cD.TEXTURE_CUBE_MAP, DD, !0), cD.generateMipmap(cD.TEXTURE_CUBE_MAP), CD && this._bindTextureDirectly(cD.TEXTURE_CUBE_MAP, null)
      }
    });
    cD(39133);
    let MD = !1;
    MD || (MD = !0, pD.ThinEngine.prototype.setDepthStencilTexture = function(DD, CD, cD, ID) {
      void 0 !== DD && (CD && (this._boundUniforms[DD] = CD), cD && cD.depthStencilTexture ? this._setTexture(DD, cD, !1, !0, ID) : this._setTexture(DD, null, void 0, void 0, ID))
    });
    let tD = !1;
    tD || (tD = !0, pD.ThinEngine.prototype.createRenderTargetCubeTexture = function(DD, CD) {
      const cD = this._createHardwareRenderTargetWrapper(!1, !0, DD),
        ID = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...CD
        };
      ID.generateStencilBuffer = ID.generateDepthBuffer && ID.generateStencilBuffer, (1 !== ID.type || this._caps.textureFloatLinearFiltering) && (2 !== ID.type || this._caps.textureHalfFloatLinearFiltering) || (ID.samplingMode = 1);
      const pD = this._gl,
        iD = new fD.c(this, 5);
      this._bindTextureDirectly(pD.TEXTURE_CUBE_MAP, iD, !0);
      const QD = this._getSamplingParameters(ID.samplingMode, ID.generateMipMaps);
      1 !== ID.type || this._caps.textureFloat || (ID.type = 0, bD.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MAG_FILTER, QD.mag), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_MIN_FILTER, QD.min), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_WRAP_S, pD.CLAMP_TO_EDGE), pD.texParameteri(pD.TEXTURE_CUBE_MAP, pD.TEXTURE_WRAP_T, pD.CLAMP_TO_EDGE);
      for (let fD = 0; fD < 6; fD++) pD.texImage2D(pD.TEXTURE_CUBE_MAP_POSITIVE_X + fD, 0, this._getRGBABufferInternalSizedFormat(ID.type, ID.format), DD, DD, 0, this._getInternalFormat(ID.format), this._getWebGLTextureType(ID.type), null);
      const wD = pD.createFramebuffer();
      return this._bindUnboundFramebuffer(wD), cD._depthStencilBuffer = this._setupFramebufferDepthAttachments(ID.generateStencilBuffer, ID.generateDepthBuffer, DD, DD), ID.generateMipMaps && pD.generateMipmap(pD.TEXTURE_CUBE_MAP), this._bindTextureDirectly(pD.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), cD._framebuffer = wD, cD._generateDepthBuffer = ID.generateDepthBuffer, cD._generateStencilBuffer = ID.generateStencilBuffer, iD.width = DD, iD.height = DD, iD.isReady = !0, iD.isCube = !0, iD.samples = 1, iD.generateMipMaps = ID.generateMipMaps, iD.samplingMode = ID.samplingMode, iD.type = ID.type, iD.format = ID.format, this._internalTexturesCache.push(iD), cD.setTextures(iD), cD
    });
    var ZD = cD(39142),
      oD = cD(39148);
    let vD = !1;
    vD || (vD = !0, pD.ThinEngine.prototype.createPrefilteredCubeTexture = function(DD, CD, ID, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        QD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        wD = arguments.length > 6 ? arguments[6] : void 0,
        SD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        BD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        yD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(DD, CD, null, !1, (async DD => {
        if (!DD) return void(iD && iD(null));
        const QD = DD.texture;
        if (BD ? DD.info.sphericalPolynomial && (QD._sphericalPolynomial = DD.info.sphericalPolynomial) : QD._sphericalPolynomial = QD._sphericalPolynomial ?? new ZD.f, QD._source = 9, this.getCaps().textureLOD) return void(iD && iD(QD));
        const wD = this._gl,
          SD = DD.width;
        if (!SD) return;
        const {
          DDSTools: yD
        } = await cD.e(296).then((() => cD(40851))), MD = [];
        for (let cD = 0; cD < 3; cD++) {
          const iD = 1 - cD / 2,
            BD = pD,
            tD = Math.log2(SD) * ID + pD,
            ZD = BD + (tD - BD) * iD,
            vD = Math.round(Math.min(Math.max(ZD, 0), tD)),
            ND = new fD.c(this, 2);
          if (ND.type = QD.type, ND.format = QD.format, ND.width = Math.pow(2, Math.max(Math.log2(SD) - vD, 0)), ND.height = ND.width, ND.isCube = !0, ND._cachedWrapU = 0, ND._cachedWrapV = 0, this._bindTextureDirectly(wD.TEXTURE_CUBE_MAP, ND, !0), ND.samplingMode = 2, wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_MAG_FILTER, wD.LINEAR), wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_MIN_FILTER, wD.LINEAR), wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_WRAP_S, wD.CLAMP_TO_EDGE), wD.texParameteri(wD.TEXTURE_CUBE_MAP, wD.TEXTURE_WRAP_T, wD.CLAMP_TO_EDGE), DD.isDDS) {
            const CD = DD.info,
              cD = DD.data;
            this._unpackFlipY(CD.isCompressed), yD.UploadDDSLevels(this, ND, cD, CD, !0, 6, vD)
          } else bD.e.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(wD.TEXTURE_CUBE_MAP, null);
          const gD = new oD.d(CD);
          gD._isCube = !0, gD._texture = ND, ND.isReady = !0, MD.push(gD)
        }
        QD._lodTextureHigh = MD[2], QD._lodTextureMid = MD[1], QD._lodTextureLow = MD[0], iD && iD(QD)
      }), QD, wD, SD, BD, ID, pD, null, void 0, !1, yD)
    });
    var ND = cD(39071);
    let gD = !1;
    gD || (gD = !0, pD.ThinEngine.prototype.createUniformBuffer = function(DD, CD) {
      const cD = this._gl.createBuffer();
      if (!cD) throw new Error("Unable to create uniform buffer");
      const ID = new ND.b(cD);
      return this.bindUniformBuffer(ID), DD instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, DD, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(DD), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), ID.references = 1, ID
    }, pD.ThinEngine.prototype.createDynamicUniformBuffer = function(DD, CD) {
      const cD = this._gl.createBuffer();
      if (!cD) throw new Error("Unable to create dynamic uniform buffer");
      const ID = new ND.b(cD);
      return this.bindUniformBuffer(ID), DD instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, DD, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(DD), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), ID.references = 1, ID
    }, pD.ThinEngine.prototype.updateUniformBuffer = function(DD, CD, cD, ID) {
      this.bindUniformBuffer(DD), void 0 === cD && (cD = 0), void 0 === ID ? CD instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cD, CD) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, cD, new Float32Array(CD)) : CD instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, CD.subarray(cD, cD + ID)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(CD).subarray(cD, cD + ID)), this.bindUniformBuffer(null)
    }, pD.ThinEngine.prototype.bindUniformBuffer = function(DD) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, DD ? DD.underlyingResource : null)
    }, pD.ThinEngine.prototype.bindUniformBufferBase = function(DD, CD, cD) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, CD, DD ? DD.underlyingResource : null)
    }, pD.ThinEngine.prototype.bindUniformBlock = function(DD, CD, cD) {
      const ID = DD.program,
        pD = this._gl.getUniformBlockIndex(ID, CD);
      4294967295 !== pD && this._gl.uniformBlockBinding(ID, pD, cD)
    });
    var XD = cD(39010),
      mD = cD(39046);
    let nD = !1;
    nD || (nD = !0, mD.e.prototype.displayLoadingUI = function() {
      if (!(0, XD.m)()) return;
      const DD = this.loadingScreen;
      DD && DD.displayLoadingUI()
    }, mD.e.prototype.hideLoadingUI = function() {
      if (!(0, XD.m)()) return;
      const DD = this._loadingScreen;
      DD && DD.hideLoadingUI()
    }, Object.defineProperty(mD.e.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = mD.e.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(DD) {
        this._loadingScreen = DD
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(mD.e.prototype, "loadingUIText", {
      set: function(DD) {
        this.loadingScreen.loadingUIText = DD
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(mD.e.prototype, "loadingUIBackgroundColor", {
      set: function(DD) {
        this.loadingScreen.loadingUIBackgroundColor = DD
      },
      enumerable: !0,
      configurable: !0
    })), (0, cD(39109).e)();
    let OD = !1;
    OD || (OD = !0, mD.e.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, mD.e.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, mD.e.prototype.setDepthFunction = function(DD) {
      this._depthCullingState.depthFunc = DD
    }, mD.e.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, mD.e.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, mD.e.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, mD.e.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, mD.e.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, mD.e.prototype.setDepthWrite = function(DD) {
      this._depthCullingState.depthMask = DD
    }, mD.e.prototype.setAlphaConstants = function(DD, CD, cD, ID) {
      this._alphaState.setAlphaBlendConstants(DD, CD, cD, ID)
    }, mD.e.prototype.getAlphaMode = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[DD]
    }, mD.e.prototype.getAlphaEquation = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[DD]
    });
    let PD = !1;
    PD || (PD = !0, mD.e.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, mD.e.prototype.setStencilBuffer = function(DD) {
      this._stencilState.stencilTest = DD
    }, mD.e.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, mD.e.prototype.setStencilMask = function(DD) {
      this._stencilState.stencilMask = DD
    }, mD.e.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, mD.e.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, mD.e.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, mD.e.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, mD.e.prototype.setStencilFunction = function(DD) {
      this._stencilState.stencilFunc = DD
    }, mD.e.prototype.setStencilBackFunction = function(DD) {
      this._stencilState.stencilBackFunc = DD
    }, mD.e.prototype.setStencilFunctionReference = function(DD) {
      this._stencilState.stencilFuncRef = DD
    }, mD.e.prototype.setStencilFunctionMask = function(DD) {
      this._stencilState.stencilFuncMask = DD
    }, mD.e.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, mD.e.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, mD.e.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, mD.e.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, mD.e.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, mD.e.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, mD.e.prototype.setStencilOperationFail = function(DD) {
      this._stencilState.stencilOpStencilFail = DD
    }, mD.e.prototype.setStencilBackOperationFail = function(DD) {
      this._stencilState.stencilBackOpStencilFail = DD
    }, mD.e.prototype.setStencilOperationDepthFail = function(DD) {
      this._stencilState.stencilOpDepthFail = DD
    }, mD.e.prototype.setStencilBackOperationDepthFail = function(DD) {
      this._stencilState.stencilBackOpDepthFail = DD
    }, mD.e.prototype.setStencilOperationPass = function(DD) {
      this._stencilState.stencilOpStencilDepthPass = DD
    }, mD.e.prototype.setStencilBackOperationPass = function(DD) {
      this._stencilState.stencilBackOpStencilDepthPass = DD
    }, mD.e.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, mD.e.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    cD(39181);
    let HD = !1;
    HD || (HD = !0, mD.e.prototype.createDepthStencilTexture = function(DD, CD, cD) {
      if (CD.isCube) {
        const cD = DD.width || DD;
        return this._createDepthStencilCubeTexture(cD, CD)
      }
      return this._createDepthStencilTexture(DD, CD, cD)
    });
    cD(39186), cD(39220);
    let UD = !1;
    UD || (UD = !0, pD.ThinEngine.prototype.enableScissor = function(DD, CD, cD, ID) {
      const pD = this._gl;
      pD.enable(pD.SCISSOR_TEST), pD.scissor(DD, CD, cD, ID)
    }, pD.ThinEngine.prototype.disableScissor = function() {
      const DD = this._gl;
      DD.disable(DD.SCISSOR_TEST)
    })
  },
  38977: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => mD
    });
    var ID = cD(38979),
      pD = cD(36464),
      iD = cD(38991),
      fD = cD(39054);
    class bD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new QD(DD)
      }
      sampleFrame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fD.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const CD = DD - this._lastFrameTimeMs;
            this._rollingFrameTime.add(CD)
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
    class QD {
      constructor(DD) {
        this._samples = new Array(DD), this.reset()
      }
      add(DD) {
        let CD;
        if (this.isSaturated()) {
          const DD = this._samples[this._pos];
          CD = DD - this.average, this.average -= CD / (this._sampleCount - 1), this._m2 -= CD * (DD - this.average)
        } else this._sampleCount++;
        CD = DD - this.average, this.average += CD / this._sampleCount, this._m2 += CD * (DD - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = DD, this._pos++, this._pos %= this._samples.length
      }
      history(DD) {
        if (DD >= this._sampleCount || DD >= this._samples.length) return 0;
        const CD = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(CD - DD)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(DD) {
        const CD = this._samples.length;
        return (DD % CD + CD) % CD
      }
    }
    var wD = cD(39071),
      SD = cD(38048),
      BD = cD(39091),
      yD = cD(39046),
      MD = cD(39010);

    function tD(DD) {
      const CD = function(DD) {
        if (!(0, MD.e)() || !document.body) return null;
        const CD = document.createElement("span");
        CD.textContent = "Hg", CD.style.font = DD;
        const cD = document.createElement("div");
        cD.style.display = "inline-block", cD.style.width = "1px", cD.style.height = "0px", cD.style.verticalAlign = "bottom";
        const ID = document.createElement("div");
        let pD, iD;
        ID.style.whiteSpace = "nowrap", ID.appendChild(CD), ID.appendChild(cD), document.body.appendChild(ID);
        try {
          iD = cD.getBoundingClientRect().top - CD.getBoundingClientRect().top, cD.style.verticalAlign = "baseline", pD = cD.getBoundingClientRect().top - CD.getBoundingClientRect().top
        } finally {
          document.body.removeChild(ID)
        }
        const fD = {
          ascent: pD,
          height: iD,
          descent: iD - pD
        };
        return ZD(fD) ? fD : null
      }(DD);
      if (CD) return CD;
      const cD = function(DD) {
        let CD = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? CD = new OffscreenCanvas(64, 64) : (0, MD.e)() && "function" === typeof document.createElement && (CD = document.createElement("canvas"), CD.width = 64, CD.height = 64);
          const cD = CD?.getContext("2d");
          if (!cD) return null;
          cD.font = DD;
          const ID = cD.measureText("Hg"),
            pD = Number(ID.actualBoundingBoxAscent ?? ID.fontBoundingBoxAscent),
            iD = Number(ID.actualBoundingBoxDescent ?? ID.fontBoundingBoxDescent),
            fD = {
              ascent: pD,
              height: pD + iD,
              descent: iD
            };
          return ZD(fD) ? fD : null
        } catch {
          return null
        } finally {
          const DD = CD;
          "function" === typeof DD?.dispose && DD.dispose()
        }
      }(DD);
      return cD || function(DD) {
        const CD = Math.max(1, function(DD) {
            const CD = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(DD || ""));
            return CD ? Number(CD[1]) : 16
          }(DD)),
          cD = .8 * CD,
          ID = .2 * CD;
        return {
          ascent: cD,
          height: cD + ID,
          descent: ID
        }
      }(DD)
    }

    function ZD(DD) {
      return Number.isFinite(DD.ascent) && Number.isFinite(DD.height) && Number.isFinite(DD.descent) && DD.height > 0
    }

    function oD(DD) {
      if (DD.requestPointerLock) {
        const CD = DD.requestPointerLock();
        CD instanceof Promise ? CD.then((() => {
          DD.focus()
        })).catch((() => {})) : DD.focus()
      }
    }
    var vD = cD(39104),
      ND = cD(39039),
      gD = cD(39109),
      XD = cD(39115);
    class mD extends iD.ThinEngine {
      static get NpmPackage() {
        return yD.e.NpmPackage
      }
      static get Version() {
        return yD.e.Version
      }
      static get Instances() {
        return pD.b.Instances
      }
      static get LastCreatedEngine() {
        return pD.b.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return pD.b.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(DD) {
        return yD.e.DefaultLoadingScreenFactory(DD)
      }
      get _supportsHardwareTextureRescaling() {
        return !!mD._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, gD.e)(), (0, XD.b)(), super(DD, CD, cD, ID), this._performanceMonitor = new bD, this._drawCalls = new vD.c, DD && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(DD) {
        super._sharedInit(DD),
          function(DD, CD, cD) {
            DD._onCanvasFocus = () => {
              DD.onCanvasFocusObservable.notifyObservers(DD)
            }, DD._onCanvasBlur = () => {
              DD.onCanvasBlurObservable.notifyObservers(DD)
            }, DD._onCanvasContextMenu = CD => {
              DD.disableContextMenu && CD.preventDefault()
            }, CD.addEventListener("focus", DD._onCanvasFocus), CD.addEventListener("blur", DD._onCanvasBlur), CD.addEventListener("contextmenu", DD._onCanvasContextMenu), DD._onBlur = () => {
              DD.disablePerformanceMonitorInBackground && DD.performanceMonitor.disable(), DD._windowIsBackground = !0
            }, DD._onFocus = () => {
              DD.disablePerformanceMonitorInBackground && DD.performanceMonitor.enable(), DD._windowIsBackground = !1
            }, DD._onCanvasPointerOut = cD => {
              document.elementFromPoint(cD.clientX, cD.clientY) !== CD && DD.onCanvasPointerOutObservable.notifyObservers(cD)
            };
            const ID = DD.getHostWindow();
            ID && "function" === typeof ID.addEventListener && (ID.addEventListener("blur", DD._onBlur), ID.addEventListener("focus", DD._onFocus)), CD.addEventListener("pointerout", DD._onCanvasPointerOut), cD.doNotHandleTouchAction || function(DD) {
              DD && DD.setAttribute && (DD.setAttribute("touch-action", "none"), DD.style.touchAction = "none", DD.style.webkitTapHighlightColor = "transparent")
            }(CD), !yD.e.audioEngine && cD.audioEngine && yD.e.AudioEngineFactory && (yD.e.audioEngine = yD.e.AudioEngineFactory(DD.getRenderingCanvas(), DD.getAudioContext(), DD.getAudioDestination())), (0, MD.e)() && (DD._onFullscreenChange = () => {
              DD.isFullscreen = !!document.fullscreenElement, DD.isFullscreen && DD._pointerLockRequested && CD && oD(CD)
            }, document.addEventListener("fullscreenchange", DD._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", DD._onFullscreenChange, !1), DD._onPointerLockChange = () => {
              DD.isPointerLock = document.pointerLockElement === CD
            }, document.addEventListener("pointerlockchange", DD._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", DD._onPointerLockChange, !1)), DD.enableOfflineSupport = void 0 !== yD.e.OfflineProviderFactory, DD._deterministicLockstep = !!cD.deterministicLockstep, DD._lockstepMaxSteps = cD.lockstepMaxSteps || 0, DD._timeStep = cD.timeStep || 1 / 60
          }(this, DD, this._creationOptions)
      }
      resizeImageBitmap(DD, CD, cD) {
        return function(DD, CD, cD, ID) {
          const pD = DD.createCanvas(cD, ID).getContext("2d");
          if (!pD) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return pD.drawImage(CD, 0, 0), pD.getImageData(0, 0, cD, ID).data
        }(this, DD, CD, cD)
      }
      async _createImageBitmapFromSource(DD, CD) {
        return await async function(DD, CD, cD) {
          return await new Promise(((ID, pD) => {
            const iD = new Image;
            iD.onload = () => {
              iD.decode().then((() => {
                DD.createImageBitmap(iD, cD).then((DD => {
                  ID(DD)
                }))
              }))
            }, iD.onerror = () => {
              pD(`Error loading image ${iD.src}`)
            }, iD.src = CD
          }))
        }(this, DD, CD)
      }
      switchFullscreen(DD) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(DD)
      }
      enterFullscreen(DD) {
        this.isFullscreen || (this._pointerLockRequested = DD, this._renderingCanvas && function(DD) {
          const CD = DD.requestFullscreen || DD.webkitRequestFullscreen;
          CD && CD.call(DD)
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
      setDirectViewport(DD, CD, cD, ID) {
        const pD = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(DD, CD, cD, ID), pD
      }
      scissorClear(DD, CD, cD, ID, pD) {
        this.enableScissor(DD, CD, cD, ID), this.clear(pD, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(DD) {
        const CD = this._gl.getAttachedShaders(DD);
        return CD ? this._gl.getShaderSource(CD[0]) : null
      }
      getFragmentShaderSource(DD) {
        const CD = this._gl.getAttachedShaders(DD);
        return CD ? this._gl.getShaderSource(CD[1]) : null
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
        return tD(DD)
      }
      enterPointerlock() {
        this._renderingCanvas && oD(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      Wm() {
        this._measureFps(), super.Wm()
      }
      _deletePipelineContext(DD) {
        const CD = DD;
        CD && CD.program && CD.transformFeedback && (this.deleteTransformFeedback(CD.transformFeedback), CD.transformFeedback = null), super._deletePipelineContext(DD)
      }
      createShaderProgram(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        pD = pD || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const fD = super.createShaderProgram(DD, CD, cD, ID, pD, iD);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), fD
      }
      _createShaderProgram(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const iD = ID.createProgram();
        if (DD.program = iD, !iD) throw new Error("Unable to create program");
        if (ID.attachShader(iD, CD), ID.attachShader(iD, cD), this.JZ > 1 && pD) {
          const CD = this.createTransformFeedback();
          this.bindTransformFeedback(CD), this.setTranformFeedbackVaryings(iD, pD), DD.transformFeedback = CD
        }
        return ID.linkProgram(iD), this.JZ > 1 && pD && this.bindTransformFeedback(null), DD.context = ID, DD.vertexShader = CD, DD.fragmentShader = cD, DD.isParallelCompiled || this._finalizePipelineContext(DD), iD
      }
      _releaseTexture(DD) {
        super._releaseTexture(DD)
      }
      _releaseRenderTargetWrapper(DD) {
        super._releaseRenderTargetWrapper(DD);
        for (const CD of this.scenes) {
          for (const cD of CD.postProcesses) cD._outputTexture === DD && (cD._outputTexture = null);
          for (const cD of CD.cameras)
            for (const CD of cD._postProcesses) CD && CD._outputTexture === DD && (CD._outputTexture = null)
        }
      }
      _rescaleTexture(DD, CD, cD, ID, pD) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const iD = this.createRenderTargetTexture({
          width: CD.width,
          height: CD.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && mD._RescalePostProcessFactory && (this._rescalePostProcess = mD._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const fD = () => {
              this._rescalePostProcess.onApply = function(CD) {
                CD._bindTexture("textureSampler", DD)
              };
              let fD = cD;
              fD || (fD = this.scenes[this.scenes.length - 1]), fD.postProcessManager.directRender([this._rescalePostProcess], iD, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, CD, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, ID, 0, 0, CD.width, CD.height, 0), this.unBindFramebuffer(iD), iD.dispose(), pD && pD()
            },
            bD = this._rescalePostProcess.getEffect();
          bD ? bD.executeWhenCompiled(fD) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((DD => {
            DD.executeWhenCompiled(fD)
          }))
        }
      }
      wrapWebGLTexture(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const fD = new BD.e(DD, this._gl),
          bD = new ID.c(this, 15, !0);
        return bD._hardwareTexture = fD, bD.baseWidth = pD, bD.baseHeight = iD, bD.width = pD, bD.height = iD, bD.isReady = !0, bD.useMipMaps = CD, this.updateTextureSamplingMode(cD, bD), bD
      }
      updateWrappedWebGLTexture(DD, CD) {
        if (15 !== DD.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const ID of this._renderTargetWrapperCache)
          if (ID.textures?.includes(DD)) {
            if (ID.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (ID._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } DD._hardwareTexture = new BD.e(CD, this._gl), DD.isReady = !0, DD._cachedCoordinatesMode = null, DD._cachedWrapU = null, DD._cachedWrapV = null, DD._cachedWrapR = null, DD._cachedAnisotropicFilteringLevel = null;
        for (const ID in this._boundTexturesCache) this._boundTexturesCache[ID] === DD && (this._boundTexturesCache[ID] = null);
        this.updateTextureSamplingMode(DD.samplingMode, DD);
        const cD = this._gl;
        for (const ID of this._renderTargetWrapperCache) {
          if (ID.texture !== DD) continue;
          const pD = ID,
            iD = ID.samples,
            fD = iD > 1;
          pD._framebuffer && cD.deleteFramebuffer(pD._framebuffer), !fD && pD._depthStencilBuffer && (cD.deleteRenderbuffer(pD._depthStencilBuffer), pD._depthStencilBuffer = null);
          const bD = this._currentFramebuffer,
            QD = cD.createFramebuffer();
          this._bindUnboundFramebuffer(QD), cD.framebufferTexture2D(cD.FRAMEBUFFER, cD.COLOR_ATTACHMENT0, cD.TEXTURE_2D, CD, 0), fD || (pD._depthStencilBuffer = this._setupFramebufferDepthAttachments(ID._generateStencilBuffer, ID._generateDepthBuffer, ID.width, ID.height)), this._bindUnboundFramebuffer(bD), pD._framebuffer = QD, fD && (ID._samples = 1, this.updateRenderTargetTextureSampleCount(pD, iD))
        }
      }
      _uploadImageToTexture(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pD = this._gl,
          iD = this._getWebGLTextureType(DD.type),
          fD = this._getInternalFormat(DD.format),
          bD = this._getRGBABufferInternalSizedFormat(DD.type, fD),
          QD = DD.isCube ? pD.TEXTURE_CUBE_MAP : pD.TEXTURE_2D;
        this._bindTextureDirectly(QD, DD, !0), this._unpackFlipY(DD.invertY);
        let wD = pD.TEXTURE_2D;
        DD.isCube && (wD = pD.TEXTURE_CUBE_MAP_POSITIVE_X + cD), pD.texImage2D(wD, ID, bD, fD, iD, CD), this._bindTextureDirectly(QD, null, !0)
      }
      updateTextureComparisonFunction(DD, CD) {
        if (1 === this.JZ) return void SD.e.Error("WebGL 1 does not support texture comparison.");
        const cD = this._gl;
        DD.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, DD, !0), 0 === CD ? (cD.texParameteri(cD.TEXTURE_CUBE_MAP, cD.TEXTURE_COMPARE_FUNC, 515), cD.texParameteri(cD.TEXTURE_CUBE_MAP, cD.TEXTURE_COMPARE_MODE, cD.NONE)) : (cD.texParameteri(cD.TEXTURE_CUBE_MAP, cD.TEXTURE_COMPARE_FUNC, CD), cD.texParameteri(cD.TEXTURE_CUBE_MAP, cD.TEXTURE_COMPARE_MODE, cD.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, DD, !0), 0 === CD ? (cD.texParameteri(cD.TEXTURE_2D, cD.TEXTURE_COMPARE_FUNC, 515), cD.texParameteri(cD.TEXTURE_2D, cD.TEXTURE_COMPARE_MODE, cD.NONE)) : (cD.texParameteri(cD.TEXTURE_2D, cD.TEXTURE_COMPARE_FUNC, CD), cD.texParameteri(cD.TEXTURE_2D, cD.TEXTURE_COMPARE_MODE, cD.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), DD._comparisonFunction = CD
      }
      createInstancesBuffer(DD) {
        const CD = this._gl.createBuffer();
        if (!CD) throw new Error("Unable to create instance buffer");
        const cD = new wD.b(CD);
        return cD.LB = DD, this.bindArrayBuffer(cD), this._gl.bufferData(this._gl.ARRAY_BUFFER, DD, this._gl.DYNAMIC_DRAW), cD.references = 1, cD
      }
      deleteInstancesBuffer(DD) {
        this._gl.deleteBuffer(DD)
      }
      async _clientWaitAsync(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const ID = this._gl;
        return await new Promise(((pD, iD) => {
          (0, ND.e)((() => {
            const cD = ID.clientWaitSync(DD, CD, 0);
            if (cD == ID.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return cD != ID.TIMEOUT_EXPIRED
          }), pD, iD, cD)
        }))
      }
      _readPixelsAsync(DD, CD, cD, ID, pD, iD, fD) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const bD = this._gl,
          QD = bD.createBuffer();
        bD.bindBuffer(bD.PIXEL_PACK_BUFFER, QD), bD.bufferData(bD.PIXEL_PACK_BUFFER, fD.byteLength, bD.STREAM_READ), bD.readPixels(DD, CD, cD, ID, pD, iD, 0), bD.bindBuffer(bD.PIXEL_PACK_BUFFER, null);
        const wD = bD.fenceSync(bD.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return wD ? (bD.flush(), this._clientWaitAsync(wD, 0, 10).then((() => (bD.deleteSync(wD), bD.bindBuffer(bD.PIXEL_PACK_BUFFER, QD), bD.getBufferSubData(bD.PIXEL_PACK_BUFFER, 0, fD), bD.bindBuffer(bD.PIXEL_PACK_BUFFER, null), bD.deleteBuffer(QD), fD)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(DD, CD) {
            1 === pD.b.Instances.length && yD.e.audioEngine && (yD.e.audioEngine.dispose(), yD.e.audioEngine = null);
            const cD = DD.getHostWindow();
            cD && "function" === typeof cD.removeEventListener && (cD.removeEventListener("blur", DD._onBlur), cD.removeEventListener("focus", DD._onFocus)), CD && (CD.removeEventListener("focus", DD._onCanvasFocus), CD.removeEventListener("blur", DD._onCanvasBlur), CD.removeEventListener("pointerout", DD._onCanvasPointerOut), CD.removeEventListener("contextmenu", DD._onCanvasContextMenu)), (0, MD.e)() && (document.removeEventListener("fullscreenchange", DD._onFullscreenChange), document.removeEventListener("mozfullscreenchange", DD._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", DD._onFullscreenChange), document.removeEventListener("msfullscreenchange", DD._onFullscreenChange), document.removeEventListener("pointerlockchange", DD._onPointerLockChange), document.removeEventListener("mspointerlockchange", DD._onPointerLockChange), document.removeEventListener("mozpointerlockchange", DD._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", DD._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    mD.ALPHA_DISABLE = 0, mD.ALPHA_ADD = 1, mD.ALPHA_COMBINE = 2, mD.ALPHA_SUBTRACT = 3, mD.ALPHA_MULTIPLY = 4, mD.ALPHA_MAXIMIZED = 5, mD.ALPHA_ONEONE = 6, mD.ALPHA_PREMULTIPLIED = 7, mD.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, mD.ALPHA_INTERPOLATE = 9, mD.ALPHA_SCREENMODE = 10, mD.DELAYLOADSTATE_NONE = 0, mD.DELAYLOADSTATE_LOADED = 1, mD.DELAYLOADSTATE_LOADING = 2, mD.DELAYLOADSTATE_NOTLOADED = 4, mD.NEVER = 512, mD.ALWAYS = 519, mD.LESS = 513, mD.EQUAL = 514, mD.LEQUAL = 515, mD.GREATER = 516, mD.GEQUAL = 518, mD.NOTEQUAL = 517, mD.KEEP = 7680, mD.REPLACE = 7681, mD.INCR = 7682, mD.DECR = 7683, mD.INVERT = 5386, mD.INCR_WRAP = 34055, mD.DECR_WRAP = 34056, mD.TEXTURE_CLAMP_ADDRESSMODE = 0, mD.TEXTURE_WRAP_ADDRESSMODE = 1, mD.TEXTURE_MIRROR_ADDRESSMODE = 2, mD.TEXTUREFORMAT_ALPHA = 0, mD.TEXTUREFORMAT_LUMINANCE = 1, mD.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, mD.TEXTUREFORMAT_RGB = 4, mD.TEXTUREFORMAT_RGBA = 5, mD.TEXTUREFORMAT_RED = 6, mD.TEXTUREFORMAT_R = 6, mD.TEXTUREFORMAT_R16_UNORM = 33322, mD.TEXTUREFORMAT_RG16_UNORM = 33324, mD.TEXTUREFORMAT_RGB16_UNORM = 32852, mD.TEXTUREFORMAT_RGBA16_UNORM = 32859, mD.TEXTUREFORMAT_R16_SNORM = 36760, mD.TEXTUREFORMAT_RG16_SNORM = 36761, mD.TEXTUREFORMAT_RGB16_SNORM = 36762, mD.TEXTUREFORMAT_RGBA16_SNORM = 36763, mD.TEXTUREFORMAT_RG = 7, mD.TEXTUREFORMAT_RED_INTEGER = 8, mD.TEXTUREFORMAT_R_INTEGER = 8, mD.TEXTUREFORMAT_RG_INTEGER = 9, mD.TEXTUREFORMAT_RGB_INTEGER = 10, mD.TEXTUREFORMAT_RGBA_INTEGER = 11, mD.TEXTURETYPE_UNSIGNED_BYTE = 0, mD.TEXTURETYPE_UNSIGNED_INT = 0, mD.TEXTURETYPE_FLOAT = 1, mD.TEXTURETYPE_HALF_FLOAT = 2, mD.TEXTURETYPE_BYTE = 3, mD.TEXTURETYPE_SHORT = 4, mD.TEXTURETYPE_UNSIGNED_SHORT = 5, mD.TEXTURETYPE_INT = 6, mD.TEXTURETYPE_UNSIGNED_INTEGER = 7, mD.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, mD.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, mD.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, mD.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, mD.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, mD.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, mD.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, mD.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, mD.TEXTURE_NEAREST_SAMPLINGMODE = 1, mD.TEXTURE_BILINEAR_SAMPLINGMODE = 2, mD.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, mD.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, mD.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, mD.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, mD.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, mD.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, mD.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, mD.TEXTURE_NEAREST_LINEAR = 7, mD.TEXTURE_NEAREST_NEAREST = 1, mD.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, mD.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, mD.TEXTURE_LINEAR_LINEAR = 2, mD.TEXTURE_LINEAR_NEAREST = 12, mD.TEXTURE_EXPLICIT_MODE = 0, mD.TEXTURE_SPHERICAL_MODE = 1, mD.TEXTURE_PLANAR_MODE = 2, mD.TEXTURE_CUBIC_MODE = 3, mD.TEXTURE_PROJECTION_MODE = 4, mD.TEXTURE_SKYBOX_MODE = 5, mD.TEXTURE_INVCUBIC_MODE = 6, mD.TEXTURE_EQUIRECTANGULAR_MODE = 7, mD.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, mD.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, mD.SCALEMODE_FLOOR = 1, mD.SCALEMODE_NEAREST = 2, mD.SCALEMODE_CEILING = 3
  },
  39139: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(39097);
    class pD {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(DD) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = DD, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, DD && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, ID.c)(DD.format))
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
        const CD = this._textures[DD],
          cD = this._layerIndices?.[DD] ?? 0,
          ID = this._faceIndices?.[DD] ?? 0;
        return CD.isCube ? 6 * cD + ID : CD.is3D ? 0 : cD
      }
      get samples() {
        return this._samples
      }
      setSamples(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === DD && !cD) return DD;
        const ID = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, DD, CD) : this._engine.updateRenderTargetTextureSampleCount(this, DD);
        return this._samples = DD, ID
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(DD, CD, cD, ID, pD) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = DD, this._isCube = CD, this._size = cD, this._engine = ID, this._depthStencilTexture = null, this.label = pD
      }
      setTextures(DD) {
        Array.isArray(DD) ? this._textures = DD : this._textures = DD ? [DD] : null
      }
      setTexture(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[CD] !== DD && (this._textures[CD] && cD && this._textures[CD].dispose(), this._textures[CD] = DD)
      }
      setLayerAndFaceIndices(DD, CD) {
        this._layerIndices = DD, this._faceIndices = CD
      }
      setLayerAndFaceIndex() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== CD && CD >= 0 && (this._layerIndices[DD] = CD), void 0 !== cD && cD >= 0 && (this._faceIndices[DD] = cD)
      }
      createDepthStencilTexture() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = cD, this._depthStencilTextureLabel = iD, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: CD,
          comparisonFunction: DD,
          generateStencil: cD,
          isCube: this._isCube,
          samples: ID,
          depthTextureFormat: pD,
          label: iD
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
          const CD = this.textures;
          if (CD && CD.length > 0) {
            let cD = !1,
              ID = CD.length,
              pD = -1;
            const iD = CD[CD.length - 1]._source;
            14 !== iD && 12 !== iD || (cD = !0, pD = CD[CD.length - 1].format, ID--);
            const fD = [],
              bD = [],
              QD = [],
              wD = [],
              SD = [],
              BD = [],
              yD = [],
              MD = {};
            for (let DD = 0; DD < ID; ++DD) {
              const cD = CD[DD];
              fD.push(cD.samplingMode), bD.push(cD.type), QD.push(cD.format);
              void 0 !== MD[cD.uniqueId] ? (wD.push(-1), yD.push(0)) : (MD[cD.uniqueId] = DD, cD.is2DArray ? (wD.push(35866), yD.push(cD.depth)) : cD.isCube ? (wD.push(34067), yD.push(0)) : cD.is3D ? (wD.push(32879), yD.push(cD.depth)) : (wD.push(3553), yD.push(0))), this._faceIndices && SD.push(this._faceIndices[DD] ?? 0), this._layerIndices && BD.push(this._layerIndices[DD] ?? 0)
            }
            const tD = {
                samplingModes: fD,
                generateMipMaps: CD[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: cD,
                depthTextureFormat: pD,
                types: bD,
                formats: QD,
                bfD: ID,
                targetTypes: wD,
                faceIndex: SD,
                layerIndex: BD,
                layerCounts: yD,
                label: this.label
              },
              ZD = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            DD = this._engine.createMultipleRenderTarget(ZD, tD);
            for (let oD = 0; oD < ID; ++oD) {
              if (-1 !== wD[oD]) continue;
              const cD = MD[CD[oD].uniqueId];
              DD.setTexture(DD.textures[cD], oD)
            }
          }
        } else {
          const CD = {};
          if (CD.generateDepthBuffer = this._generateDepthBuffer, CD.generateMipMaps = this.texture?.generateMipMaps ?? !1, CD.generateStencilBuffer = this._generateStencilBuffer, CD.samplingMode = this.texture?.samplingMode, CD.type = this.texture?.type, CD.format = this.texture?.format, CD.noColorAttachment = !this._textures, CD.label = this.label, this.isCube) DD = this._engine.createRenderTargetCubeTexture(this.width, CD);
          else {
            const cD = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            DD = this._engine.createRenderTargetTexture(cD, CD)
          }
          DD.texture && (DD.texture.isReady = !0)
        }
        return DD
      }
      _swapRenderTargetWrapper(DD) {
        if (this._textures && DD._textures)
          for (let CD = 0; CD < this._textures.length; ++CD) this._textures[CD]._swapAndDie(DD._textures[CD], !1), DD._textures[CD].isReady = !0;
        this._depthStencilTexture && DD._depthStencilTexture && (this._depthStencilTexture._swapAndDie(DD._depthStencilTexture), DD._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const DD = this._cloneRenderTargetWrapper();
        if (DD) {
          if (this._depthStencilTexture) {
            const CD = this._depthStencilTexture.samplingMode,
              cD = this._depthStencilTexture.format,
              ID = 2 === CD || 3 === CD || 11 === CD;
            DD.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, ID, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, cD, this._depthStencilTextureLabel)
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
  39555: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    class ID {
      static get ForceFullSceneLoadingForIncremental() {
        return ID._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(DD) {
        ID._ForceFullSceneLoadingForIncremental = DD
      }
      static get ShowLoadingScreen() {
        return ID._ShowLoadingScreen
      }
      static set ShowLoadingScreen(DD) {
        ID._ShowLoadingScreen = DD
      }
      static get loggingLevel() {
        return ID._LoggingLevel
      }
      static set loggingLevel(DD) {
        ID._LoggingLevel = DD
      }
      static get CleanBoneMatrixWeights() {
        return ID._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(DD) {
        ID._CleanBoneMatrixWeights = DD
      }
    }
    ID._ForceFullSceneLoadingForIncremental = !1, ID._ShowLoadingScreen = !0, ID._CleanBoneMatrixWeights = !1, ID._LoggingLevel = 0
  },
  39223: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(38048);
    const pD = new Map;

    function iD(DD, CD) {
      (function(DD) {
        return pD.delete(DD)
      })(DD) && ID.e.Warn(`Extension with the name '${DD}' already exists`), pD.set(DD, CD)
    }

    function fD(DD, CD) {
      "image/ktx" !== CD && "image/ktx2" !== CD || (DD = ".ktx"), pD.has(DD) || (DD.endsWith(".ies") && iD(".ies", (async () => await cD.e(299).then((() => cD(40867))).then((DD => new DD._IESTextureLoader)))), DD.endsWith(".dds") && iD(".dds", (async () => await cD.e(297).then((() => cD(40871))).then((DD => new DD._DDSTextureLoader)))), DD.endsWith(".basis") && iD(".basis", (async () => await cD.e(300).then((() => cD(40879))).then((DD => new DD._BasisTextureLoader)))), DD.endsWith(".env") && iD(".env", (async () => await Promise.all([cD.e(301), cD.e(298)]).then((() => cD(40888))).then((DD => new DD._ENVTextureLoader)))), DD.endsWith(".hdr") && iD(".hdr", (async () => await cD.e(302).then((() => cD(40956))).then((DD => new DD._HDRTextureLoader)))), (DD.endsWith(".ktx") || DD.endsWith(".ktx2")) && (iD(".ktx", (async () => await cD.e(303).then((() => cD(40959))).then((DD => new DD._KTXTextureLoader)))), iD(".ktx2", (async () => await cD.e(303).then((() => cD(40959))).then((DD => new DD._KTXTextureLoader))))), DD.endsWith(".tga") && iD(".tga", (async () => await cD.e(304).then((() => cD(40969))).then((DD => new DD._TGATextureLoader)))), DD.endsWith(".exr") && iD(".exr", (async () => await cD.e(305).then((() => cD(40976))).then((DD => new DD._ExrTextureLoader)))));
      const ID = pD.get(DD);
      return ID ? Promise.resolve(ID(CD)) : null
    }
  },
  39572: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => wD
    });
    var ID = cD(39416),
      pD = cD(39176),
      iD = cD(36488);
    class fD extends ID.d {
      get Z2() {
        return this._subMaterials
      }
      set Z2(DD) {
        this._subMaterials = DD, this._hookArray(DD)
      }
      getChildren() {
        return this.Z2
      }
      constructor(DD, CD) {
        super(DD, CD, !0), this._waitingSubMaterialsUniqueIds = [], this.hq().addMultiMaterial(this), this.Z2 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(DD) {
        var CD = this;
        const cD = DD.push;
        DD.push = function() {
          for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
          const fD = cD.apply(DD, pD);
          return CD._markAllSubMeshesAsTexturesDirty(), fD
        };
        const ID = DD.splice;
        DD.splice = (CD, cD) => {
          const pD = ID.call(DD, CD, cD ?? DD.length);
          return this._markAllSubMeshesAsTexturesDirty(), pD
        }
      }
      getSubMaterial(DD) {
        return DD < 0 || DD >= this.Z2.length ? this.hq().defaultMaterial : this.Z2[DD]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Z2.map((DD => DD ? DD.getActiveTextures() : [])))
      }
      hasTexture(DD) {
        if (super.hasTexture(DD)) return !0;
        for (let CD = 0; CD < this.Z2.length; CD++)
          if (this.Z2[CD]?.hasTexture(DD)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(DD, CD, cD) {
        for (let ID = 0; ID < this.Z2.length; ID++) {
          const pD = this.Z2[ID];
          if (pD) {
            if (pD._storeEffectOnSubMeshes) {
              if (!pD.isReadyForSubMesh(DD, CD, cD)) return !1;
              continue
            }
            if (!pD.isReady(DD)) return !1
          }
        }
        return !0
      }
      clone(DD, CD) {
        const cD = new fD(DD, this.hq());
        for (let ID = 0; ID < this.Z2.length; ID++) {
          let pD;
          const iD = this.Z2[ID];
          pD = CD && iD ? iD.clone(DD + "-" + iD.name) : this.Z2[ID], cD.Z2.push(pD)
        }
        return cD
      }
      serialize() {
        const DD = {};
        DD.name = this.name, DD.id = this.id, DD.uniqueId = this.uniqueId, pD.c && (DD.tags = pD.c.GetTags(this)), DD.materialsUniqueIds = [], DD.materials = [];
        for (let CD = 0; CD < this.Z2.length; CD++) {
          const cD = this.Z2[CD];
          cD ? (DD.materialsUniqueIds.push(cD.uniqueId), DD.materials.push(cD.id)) : (DD.materialsUniqueIds.push(null), DD.materials.push(null))
        }
        return DD
      }
      dispose(DD, CD, cD) {
        const ID = this.hq();
        if (!ID) return;
        if (cD)
          for (let iD = 0; iD < this.Z2.length; iD++) {
            const cD = this.Z2[iD];
            cD && cD.dispose(DD, CD)
          }
        const pD = ID.multiMaterials.indexOf(this);
        pD >= 0 && ID.multiMaterials.splice(pD, 1), super.dispose(DD, CD)
      }
    }
    let bD = !1;

    function QD(DD, CD) {
      const cD = new fD(DD.name, CD);
      if (cD.id = DD.id, cD._loadedUniqueId = DD.uniqueId, pD.c && pD.c.AddTagsTo(cD, DD.tags), DD.materialsUniqueIds) cD._waitingSubMaterialsUniqueIds = DD.materialsUniqueIds;
      else
        for (const ID of DD.materials) cD.Z2.push(CD.getLastMaterialById(ID));
      return cD
    }

    function wD() {
      bD || (bD = !0, fD.ParseMultiMaterial = QD, (0, iD.d)("BABYLON.MultiMaterial", fD))
    }
  },
  39359: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID, pD, iD = cD(36446);
    ! function(DD) {
      DD[DD.LOCAL = 0] = "LOCAL", DD[DD.WORLD = 1] = "WORLD", DD[DD.BONE = 2] = "BONE"
    }(ID || (ID = {}));
    class fD {}
    fD.X = new iD.p(1, 0, 0), fD.Y = new iD.p(0, 1, 0), fD.Z = new iD.p(0, 0, 1),
      function(DD) {
        DD[DD.X = 0] = "X", DD[DD.Y = 1] = "Y", DD[DD.Z = 2] = "Z"
      }(pD || (pD = {}))
  },
  39142: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD,
      f: () => wD
    });
    var ID = cD(36446);
    const pD = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      iD = [() => 1, DD => DD.y, DD => DD.z, DD => DD.x, DD => DD.x * DD.y, DD => DD.y * DD.z, DD => 3 * DD.z * DD.z - 1, DD => DD.x * DD.z, DD => DD.x * DD.x - DD.y * DD.y],
      fD = (DD, CD) => pD[DD] * iD[DD](CD),
      bD = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class QD {
      constructor() {
        this.preScaled = !1, this.l00 = ID.p.Zero(), this.l1_1 = ID.p.Zero(), this.l10 = ID.p.Zero(), this.l11 = ID.p.Zero(), this.l2_2 = ID.p.Zero(), this.l2_1 = ID.p.Zero(), this.l20 = ID.p.Zero(), this.l21 = ID.p.Zero(), this.l22 = ID.p.Zero()
      }
      addLight(DD, CD, cD) {
        ID.l.cZ[0].set(CD.r, CD.g, CD.b);
        const pD = ID.l.cZ[0],
          iD = ID.l.cZ[1];
        pD.scaleToRef(cD, iD), iD.scaleToRef(fD(0, DD), ID.l.cZ[2]), this.l00.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(1, DD), ID.l.cZ[2]), this.l1_1.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(2, DD), ID.l.cZ[2]), this.l10.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(3, DD), ID.l.cZ[2]), this.l11.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(4, DD), ID.l.cZ[2]), this.l2_2.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(5, DD), ID.l.cZ[2]), this.l2_1.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(6, DD), ID.l.cZ[2]), this.l20.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(7, DD), ID.l.cZ[2]), this.l21.addInPlace(ID.l.cZ[2]), iD.scaleToRef(fD(8, DD), ID.l.cZ[2]), this.l22.addInPlace(ID.l.cZ[2])
      }
      scaleInPlace(DD) {
        this.l00.scaleInPlace(DD), this.l1_1.scaleInPlace(DD), this.l10.scaleInPlace(DD), this.l11.scaleInPlace(DD), this.l2_2.scaleInPlace(DD), this.l2_1.scaleInPlace(DD), this.l20.scaleInPlace(DD), this.l21.scaleInPlace(DD), this.l22.scaleInPlace(DD)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(bD[0]), this.l1_1.scaleInPlace(bD[1]), this.l10.scaleInPlace(bD[2]), this.l11.scaleInPlace(bD[3]), this.l2_2.scaleInPlace(bD[4]), this.l2_1.scaleInPlace(bD[5]), this.l20.scaleInPlace(bD[6]), this.l21.scaleInPlace(bD[7]), this.l22.scaleInPlace(bD[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(pD[0]), this.l1_1.scaleInPlace(pD[1]), this.l10.scaleInPlace(pD[2]), this.l11.scaleInPlace(pD[3]), this.l2_2.scaleInPlace(pD[4]), this.l2_1.scaleInPlace(pD[5]), this.l20.scaleInPlace(pD[6]), this.l21.scaleInPlace(pD[7]), this.l22.scaleInPlace(pD[8])
      }
      updateFromArray(DD) {
        return ID.p.FromArrayToRef(DD[0], 0, this.l00), ID.p.FromArrayToRef(DD[1], 0, this.l1_1), ID.p.FromArrayToRef(DD[2], 0, this.l10), ID.p.FromArrayToRef(DD[3], 0, this.l11), ID.p.FromArrayToRef(DD[4], 0, this.l2_2), ID.p.FromArrayToRef(DD[5], 0, this.l2_1), ID.p.FromArrayToRef(DD[6], 0, this.l20), ID.p.FromArrayToRef(DD[7], 0, this.l21), ID.p.FromArrayToRef(DD[8], 0, this.l22), this
      }
      updateFromFloatsArray(DD) {
        return ID.p.FromFloatsToRef(DD[0], DD[1], DD[2], this.l00), ID.p.FromFloatsToRef(DD[3], DD[4], DD[5], this.l1_1), ID.p.FromFloatsToRef(DD[6], DD[7], DD[8], this.l10), ID.p.FromFloatsToRef(DD[9], DD[10], DD[11], this.l11), ID.p.FromFloatsToRef(DD[12], DD[13], DD[14], this.l2_2), ID.p.FromFloatsToRef(DD[15], DD[16], DD[17], this.l2_1), ID.p.FromFloatsToRef(DD[18], DD[19], DD[20], this.l20), ID.p.FromFloatsToRef(DD[21], DD[22], DD[23], this.l21), ID.p.FromFloatsToRef(DD[24], DD[25], DD[26], this.l22), this
      }
      static FromArray(DD) {
        return (new QD).updateFromArray(DD)
      }
      static FromPolynomial(DD) {
        const CD = new QD;
        return CD.l00 = DD.xx.scale(.376127).add(DD.yy.scale(.376127)).add(DD.zz.scale(.376126)), CD.l1_1 = DD.y.scale(.977204), CD.l10 = DD.z.scale(.977204), CD.l11 = DD.x.scale(.977204), CD.l2_2 = DD.xy.scale(1.16538), CD.l2_1 = DD.yz.scale(1.16538), CD.l20 = DD.zz.scale(1.34567).subtract(DD.xx.scale(.672834)).subtract(DD.yy.scale(.672834)), CD.l21 = DD.zx.scale(1.16538), CD.l22 = DD.xx.scale(1.16538).subtract(DD.yy.scale(1.16538)), CD.l1_1.scaleInPlace(-1), CD.l11.scaleInPlace(-1), CD.l2_1.scaleInPlace(-1), CD.l21.scaleInPlace(-1), CD.scaleInPlace(Math.PI), CD
      }
    }
    class wD {
      constructor() {
        this.x = ID.p.Zero(), this.y = ID.p.Zero(), this.z = ID.p.Zero(), this.xx = ID.p.Zero(), this.yy = ID.p.Zero(), this.zz = ID.p.Zero(), this.xy = ID.p.Zero(), this.yz = ID.p.Zero(), this.zx = ID.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = QD.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(DD) {
        ID.l.cZ[0].K4(DD.r, DD.g, DD.b);
        const CD = ID.l.cZ[0];
        this.xx.addInPlace(CD), this.yy.addInPlace(CD), this.zz.addInPlace(CD)
      }
      scaleInPlace(DD) {
        this.x.scaleInPlace(DD), this.y.scaleInPlace(DD), this.z.scaleInPlace(DD), this.xx.scaleInPlace(DD), this.yy.scaleInPlace(DD), this.zz.scaleInPlace(DD), this.yz.scaleInPlace(DD), this.zx.scaleInPlace(DD), this.xy.scaleInPlace(DD)
      }
      updateFromHarmonics(DD) {
        return this._harmonics = DD, this.x.YCD(DD.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.YCD(DD.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.YCD(DD.l10), this.z.scaleInPlace(1.02333), this.xx.YCD(DD.l00), ID.l.cZ[0].YCD(DD.l20).scaleInPlace(.247708), ID.l.cZ[1].YCD(DD.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).EcD(ID.l.cZ[0]).addInPlace(ID.l.cZ[1]), this.yy.YCD(DD.l00), this.yy.scaleInPlace(.886277).EcD(ID.l.cZ[0]).EcD(ID.l.cZ[1]), this.zz.YCD(DD.l00), ID.l.cZ[0].YCD(DD.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(ID.l.cZ[0]), this.yz.YCD(DD.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.YCD(DD.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.YCD(DD.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(DD) {
        return (new wD).updateFromHarmonics(DD)
      }
      static FromArray(DD) {
        const CD = new wD;
        return ID.p.FromArrayToRef(DD[0], 0, CD.x), ID.p.FromArrayToRef(DD[1], 0, CD.y), ID.p.FromArrayToRef(DD[2], 0, CD.z), ID.p.FromArrayToRef(DD[3], 0, CD.xx), ID.p.FromArrayToRef(DD[4], 0, CD.yy), ID.p.FromArrayToRef(DD[5], 0, CD.zz), ID.p.FromArrayToRef(DD[6], 0, CD.yz), ID.p.FromArrayToRef(DD[7], 0, CD.zx), ID.p.FromArrayToRef(DD[8], 0, CD.xy), CD
      }
    }
  },
  39567: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => aD,
      f: () => zD
    });
    var ID = cD(39154),
      pD = cD(36473),
      iD = cD(36446),
      fD = cD(39286),
      bD = cD(39545),
      QD = cD(39569),
      wD = cD(39284),
      SD = cD(39441),
      BD = cD(39281);
    class yD {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new iD.p(0, 0, 0), this._diffPositionForCollisions = new iD.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var MD, tD, ZD, oD = cD(39027),
      vD = cD(39215),
      ND = cD(39454),
      gD = cD(36622),
      XD = cD(36449),
      mD = cD(39359),
      nD = cD(38048),
      OD = cD(39156),
      PD = cD(39046),
      HD = cD(36488);

    function UD(DD, CD) {
      return DD - Math.floor(DD / CD) * CD
    }

    function xD(DD, CD, cD) {
      DD instanceof Float32Array ? iD.d.FromArrayToRef(DD, CD, cD) : cD.K4((0, vD.c)(DD[CD]), (0, vD.c)(DD[CD + 1]), (0, vD.c)(DD[CD + 2]), (0, vD.c)(DD[CD + 3]), (0, vD.c)(DD[CD + 4]), (0, vD.c)(DD[CD + 5]), (0, vD.c)(DD[CD + 6]), (0, vD.c)(DD[CD + 7]), (0, vD.c)(DD[CD + 8]), (0, vD.c)(DD[CD + 9]), (0, vD.c)(DD[CD + 10]), (0, vD.c)(DD[CD + 11]), (0, vD.c)(DD[CD + 12]), (0, vD.c)(DD[CD + 13]), (0, vD.c)(DD[CD + 14]), (0, vD.c)(DD[CD + 15]))
    }

    function qD(DD, CD, cD, ID, pD, bD, QD, wD, SD) {
      const BD = cD.texture,
        yD = BD?.getInternalTexture(),
        MD = yD?._bufferView;
      if (!(MD instanceof Float32Array) && !(MD instanceof Uint16Array)) return nD.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const tD = BD.getSize(),
        ZD = function(DD, CD) {
          const cD = DD.y - DD.x + 1,
            ID = CD * DD.w / cD,
            pD = ID < 1 ? 0 : 1,
            iD = cD - pD;
          let fD = UD(ID - Math.floor(ID), 1) * iD;
          return fD = UD(fD + DD.z, iD), Math.floor(fD) + DD.x + pD
        }(ID, cD.time);
      if (!isFinite(ZD) || ZD < 0 || ZD >= tD.height) return nD.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const oD = iD.l.cZ[0],
        vD = iD.l.Matrix[0],
        ND = iD.l.Matrix[1],
        gD = ZD * tD.width * 4,
        XD = CD === fD.k.NormalKind ? iD.p.TransformNormalFromFloatsToRef : iD.p.TransformCoordinatesFromFloatsToRef;
      for (let iD = 0, fD = 0; iD < DD.length; iD += 3, fD += 4) {
        let CD, cD;
        for (vD.reset(), CD = 0; CD < 4 && CD < SD; CD++) cD = bD[fD + CD], cD > 0 && (xD(MD, gD + 16 * Math.floor(pD[fD + CD]), ND), ND.scaleAndAddToRef(cD, vD));
        if (QD && wD)
          for (CD = 0; CD < 4 && CD + 4 < SD; CD++) cD = wD[fD + CD], cD > 0 && (xD(MD, gD + 16 * Math.floor(QD[fD + CD]), ND), ND.scaleAndAddToRef(cD, vD));
        XD(DD[iD], DD[iD + 1], DD[iD + 2], vD, oD), oD.toArray(DD, iD)
      }
      return !0
    }
    class JD {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = iD.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class KD {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new JD, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new yD, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let aD = (() => {
        var DD;
        let CD, yD = QD.g,
          MD = [];
        return DD = class extends yD {
          static get BILLBOARDMODE_NONE() {
            return QD.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return QD.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return QD.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return QD.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return QD.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return QD.g.BILLBOARDMODE_USE_POSITION
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
          set xy(DD) {
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
            const CD = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = DD, (1 === CD && 1 !== DD || 1 !== CD && 1 === DD) && this._markSubMeshesAsDirty((DD => {
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
            this._internalAbstractMeshDataInfo._material !== DD && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = DD, DD && DD.meshMap && (DD.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.IH && (this.resetDrawCache(void 0, null == DD), this._unBindEffect()))
          }
          getMaterialForRenderPass(DD) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[DD]
          }
          setMaterialForRenderPass(DD, CD) {
            this.resetDrawCache(DD), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const cD = this._internalAbstractMeshDataInfo._materialForRenderPass[DD];
            cD?.meshMap?.[this.uniqueId] && (cD.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[DD] = CD, CD && CD.meshMap && (CD.meshMap[this.uniqueId] = this)
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
            const CD = this._internalAbstractMeshDataInfo._skeleton;
            CD && CD.needInitialSkinMatrix && CD._unregisterMeshWithPoseMatrix(this), DD && DD.needInitialSkinMatrix && DD._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = DD, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(CD) {
            var cD;
            let ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(CD, ID, !1), cD = this, this._internalAbstractMeshDataInfo = new KD, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = DD.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new pD.c, this.onCollisionPositionChangeObservable = new pD.c, this.onMaterialChangedObservable = new pD.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.yo = DD.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = gD.d.Red(), this.outlineWidth = .02, this.overlayColor = gD.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.CZ = !1, this.pZ = !1, this.actionManager = null, this.ellipsoid = new iD.p(.5, 1, .5), this.ellipsoidOffset = new iD.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new gD.e(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                QJ: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new pD.c, this._onCollisionPositionChange = function(DD, CD) {
                let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                CD.subtractToRef(cD._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, cD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), cD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > PD.e.CollisionsEpsilon && cD.position.addInPlace(cD._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ID && cD.onCollideObservable.notifyObservers(ID), cD.onCollisionPositionChangeObservable.notifyObservers(cD.position)
              }, ID = this.hq(), this.layerMask = ID.defaultRenderableLayerMask, ID.HcD(this), this._resyncLightSources(), this._uniformBuffer = new BD.b(this.hq().DZ(), void 0, void 0, CD, !this.hq().DZ().isWebGPU), this._buildUniformLayout(), ID.performancePriority) {
              case 2:
                this.pZ = !0;
              case 1:
                this.CZ = !0, this.yo = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(DD) {
            const CD = this._uniformBuffer;
            CD.o5("world", DD), CD.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), CD.update()
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
            let CD = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            CD += ", # of submeshes: " + (this.IH ? this.IH.length : 0);
            const cD = this._internalAbstractMeshDataInfo._skeleton;
            return cD && (CD += ", skeleton: " + cD.name), DD && (CD += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], CD += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.QJ ? "YES" : "NO")), CD
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== QD.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(DD) {
            let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (CD || this.actionManager.isRecursive)) {
              if (!DD) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(DD)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(DD, !1) : null
          }
          _releaseRenderPassId(DD) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.IH) {
              for (const DD of this.IH) DD._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const DD of this.hq().lights) DD.isEnabled() && DD.canAffectMesh(this) && this._lightSources.push(DD);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(DD) {
            const CD = DD.isEnabled() && DD.canAffectMesh(this),
              cD = this._lightSources.indexOf(DD);
            let ID = !1;
            if (-1 === cD) {
              if (!CD) return;
              this._lightSources.push(DD)
            } else {
              if (CD) return;
              ID = !0, this._lightSources.splice(cD, 1)
            }
            this._markSubMeshesAsLightDirty(ID)
          }
          _unBindEffect() {
            for (const DD of this.IH) DD.setEffect(null)
          }
          _removeLightSource(DD, CD) {
            const cD = this._lightSources.indexOf(DD); - 1 !== cD && (this._lightSources.splice(cD, 1), this._markSubMeshesAsLightDirty(CD))
          }
          _markSubMeshesAsDirty(DD) {
            if (this.IH)
              for (const CD of this.IH)
                for (let cD = 0; cD < CD._drawWrappers.length; ++cD) {
                  const ID = CD._drawWrappers[cD];
                  ID && ID.defines && ID.defines.markAllAsDirty && DD(ID.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((CD => CD.markAsLightDirty(DD)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((DD => DD.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((DD => DD.markAsMiscDirty()))
          }
          sDD(DD) {
            return this._currentRenderId = Number.MAX_VALUE, super.sDD(DD), this._isDirty = !0, this
          }
          resetDrawCache(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.IH)
              for (const cD of this.IH) cD.resetDrawCache(DD, CD)
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
          ncD() {
            return null
          }
          getVerticesData(DD) {
            return null
          }
          setVerticesData(DD, CD, cD, ID) {
            return this
          }
          updateVerticesData(DD, CD, cD, ID) {
            return this
          }
          setIndices(DD, CD) {
            return this
          }
          isVerticesDataPresent(DD) {
            return !1
          }
          VJ() {
            return this._masterMesh ? this._masterMesh.VJ() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.VJ()
          }
          setBoundingInfo(DD) {
            return this._boundingInfo = DD, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(DD, CD, cD) {
            return this._boundingInfo = new SD.e(DD, CD, cD), this._boundingInfo
          }
          normalizeToUnitCube() {
            let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(DD, CD, cD)
          }
          get useBones() {
            return this.skeleton && this.hq().skeletonsEnabled && this.isVerticesDataPresent(fD.k.MatricesIndicesKind) && this.isVerticesDataPresent(fD.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(DD) {}
          _activate(DD, CD) {
            return this._renderId = DD, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === QD.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Fq() {
            return !1
          }
          get nID() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(DD, CD, cD) {
            return this.position.addInPlace(this.calcMovePOV(DD, CD, cD)), this
          }
          calcMovePOV(DD, CD, cD) {
            const ID = new iD.d;
            (this.rotationQuaternion ? this.rotationQuaternion : iD.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(ID);
            const pD = iD.p.Zero(),
              fD = this.definedFacingForward ? -1 : 1;
            return iD.p.TransformCoordinatesFromFloatsToRef(DD * fD, CD, cD * fD, ID, pD), pD
          }
          rotatePOV(DD, CD, cD) {
            return this.rotation.addInPlace(this.calcRotatePOV(DD, CD, cD)), this
          }
          calcRotatePOV(DD, CD, cD) {
            const ID = this.definedFacingForward ? 1 : -1;
            return new iD.p(DD * ID, CD, cD * ID)
          }
          _refreshBoundingInfo(DD, CD) {
            if (DD) {
              const cD = (0, ND.f)(DD, 0, this.getTotalVertices(), CD);
              this._boundingInfo ? this._boundingInfo.reConstruct(cD.minimum, cD.maximum) : this._boundingInfo = new SD.e(cD.minimum, cD.maximum)
            }
            if (this.IH)
              for (let cD = 0; cD < this.IH.length; cD++) this.IH[cD].refreshBoundingInfo(DD);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(DD) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(DD.minimum, DD.maximum) : this._boundingInfo = new SD.e(DD.minimum, DD.maximum), this.IH)
              for (let CD = 0; CD < this.IH.length; CD++) this.IH[CD].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(DD, CD, cD, ID, pD, bD, QD) {
            ! function(DD, CD, cD, ID, pD, bD, QD) {
              const wD = iD.l.cZ[0],
                SD = iD.l.Matrix[0],
                BD = iD.l.Matrix[1],
                yD = CD === fD.k.NormalKind ? iD.p.TransformNormalFromFloatsToRef : iD.p.TransformCoordinatesFromFloatsToRef;
              for (let fD = 0, MD = 0; fD < DD.length; fD += 3, MD += 4) {
                let CD, tD;
                for (SD.reset(), CD = 0; CD < 4; CD++) tD = pD[MD + CD], tD > 0 && (iD.d.FromFloat32ArrayToRefScaled(cD, Math.floor(16 * ID[MD + CD]), tD, BD), SD.addToSelf(BD));
                if (bD && QD)
                  for (CD = 0; CD < 4; CD++) tD = QD[MD + CD], tD > 0 && (iD.d.FromFloat32ArrayToRefScaled(cD, Math.floor(16 * bD[MD + CD]), tD, BD), SD.addToSelf(BD));
                yD(DD[fD], DD[fD + 1], DD[fD + 2], SD, wD), wD.toArray(DD, fD)
              }
            }(DD, CD, cD, ID, pD, bD, QD)
          }
          _getData(CD, cD) {
            let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fD.k.PositionKind;
            const pD = CD.cache,
              bD = DD => {
                if (pD) {
                  const CD = pD._vertexData || (pD._vertexData = {});
                  return CD[DD] || this.copyVerticesData(DD, CD), CD[DD]
                }
                return this.getVerticesData(DD)
              };
            if (cD || (cD = bD(ID)), !cD) return null;
            pD ? (pD._outputData ? pD._outputData.set(cD) : pD._outputData = new Float32Array(cD), cD = pD._outputData) : (CD.applyMorph && this.morphTargetManager || CD.applySkeleton && this.skeleton || CD.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (cD = cD.slice()), CD.applyMorph && this.morphTargetManager && function(DD, CD, cD) {
              let ID;
              switch (CD) {
                case fD.k.PositionKind:
                  ID = DD => DD.getPositions();
                  break;
                case fD.k.NormalKind:
                  ID = DD => DD.getNormals();
                  break;
                case fD.k.TangentKind:
                  ID = DD => DD.getTangents();
                  break;
                case fD.k.UVKind:
                  ID = DD => DD.getUVs();
                  break;
                case fD.k.UV2Kind:
                  ID = DD => DD.getUV2s();
                  break;
                case fD.k.ColorKind:
                  ID = DD => DD.getColors();
                  break;
                default:
                  return
              }
              for (let pD = 0; pD < DD.length; pD++) {
                let CD = DD[pD];
                for (let iD = 0; iD < cD.numTargets; iD++) {
                  const fD = cD.getTarget(iD),
                    bD = fD.influence;
                  if (0 !== bD) {
                    const cD = ID(fD);
                    cD && (CD += (cD[pD] - DD[pD]) * bD)
                  }
                }
                DD[pD] = CD
              }
            }(cD, ID, this.morphTargetManager);
            const QD = this.bakedVertexAnimationManager;
            let wD = !1;
            if (CD.applyBakedVertexAnimation && QD?.isEnabled) {
              const DD = bD(fD.k.MatricesIndicesKind),
                pD = bD(fD.k.MatricesWeightsKind);
              if (pD && DD) {
                const iD = this.numBoneInfluencers > 4,
                  SD = iD ? bD(fD.k.MatricesIndicesExtraKind) : null,
                  BD = iD ? bD(fD.k.MatricesWeightsExtraKind) : null;
                wD = qD(cD, ID, QD, CD.bakedVertexAnimationSettings ?? QD.animationParameters, DD, pD, SD, BD, this.numBoneInfluencers)
              }
            }
            if (!wD && CD.applySkeleton && this.skeleton) {
              const CD = bD(fD.k.MatricesIndicesKind),
                pD = bD(fD.k.MatricesWeightsKind);
              if (pD && CD) {
                const iD = this.numBoneInfluencers > 4,
                  QD = iD ? bD(fD.k.MatricesIndicesExtraKind) : null,
                  wD = iD ? bD(fD.k.MatricesWeightsExtraKind) : null,
                  SD = this.skeleton.getTransformMatrices(this);
                DD._ApplySkeleton(cD, ID, SD, CD, pD, QD, wD)
              }
            }
            if (!1 !== CD.updatePositionsArray && ID === fD.k.PositionKind) {
              const DD = this._internalAbstractMeshDataInfo._positions || [],
                CD = DD.length;
              if (DD.length = cD.length / 3, CD < DD.length)
                for (let cD = CD; cD < DD.length; cD++) DD[cD] = new iD.p;
              for (let ID = 0, pD = 0; ID < DD.length; ID++, pD += 3) DD[ID].K4(cD[pD], cD[pD + 1], cD[pD + 2]);
              this._internalAbstractMeshDataInfo._positions = DD
            }
            return cD
          }
          getNormalsData() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: DD,
              applyMorph: CD,
              updatePositionsArray: !1
            }, null, fD.k.NormalKind)
          }
          fR() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: DD,
              applyMorph: CD,
              updatePositionsArray: !1
            }, cD, fD.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new SD.e(iD.p.Zero(), iD.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(DD) {
            if (!this.IH) return this;
            const CD = this.IH.length;
            for (let cD = 0; cD < CD; cD++) {
              const ID = this.IH[cD];
              (CD > 1 || !ID.IsGlobal) && ID.updateBoundingInfo(DD)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.pZ || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(DD) {
            return this.VJ().isInFrustum(DD, this.cullingStrategy)
          }
          isCompletelyInFrustum(DD) {
            return this.VJ().isCompletelyInFrustum(DD)
          }
          ZID(DD) {
            let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cD = arguments.length > 2 ? arguments[2] : void 0;
            const ID = this.VJ(),
              pD = DD.VJ();
            if (ID.intersects(pD, CD)) return !0;
            if (cD)
              for (const iD of this.getChildMeshes())
                if (iD.ZID(DD, CD, !0)) return !0;
            return !1
          }
          intersectsPoint(DD) {
            return this.VJ().intersectsPoint(DD)
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
            let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const cD = this.hq().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = cD.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, cD.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, DD, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, CD), this
          }
          _collideForSubMesh(DD, CD, cD) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!DD._lastColliderWorldVertices || !DD._lastColliderTransformMatrix.equals(CD)) {
              DD._lastColliderTransformMatrix = CD.clone(), DD._lastColliderWorldVertices = [], DD._trianglePlanes = [];
              const cD = DD.verticesStart,
                ID = DD.verticesStart + DD.verticesCount;
              for (let pD = cD; pD < ID; pD++) DD._lastColliderWorldVertices.push(iD.p.TransformCoordinates(this._positions[pD], CD))
            }
            return cD._collide(DD._trianglePlanes, DD._lastColliderWorldVertices, this.ncD(), DD.indexStart, DD.indexStart + DD.indexCount, DD.verticesStart, !!DD.iZ(), this, this._shouldConvertRHS(), 7 === DD.iZ()?.fillMode), this
          }
          _processCollisionsForSubMeshes(DD, CD) {
            const cD = this._scene.getCollidingSubMeshCandidates(this, DD),
              ID = cD.length;
            for (let pD = 0; pD < ID; pD++) {
              const iD = cD.data[pD];
              ID > 1 && !iD._checkCollision(DD) || this._collideForSubMesh(iD, CD, DD)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(DD) {
            if (!this.VJ()._checkCollision(DD)) return this;
            const CD = iD.l.Matrix[0],
              cD = iD.l.Matrix[1];
            return iD.d.ScalingToRef(1 / DD._radius.x, 1 / DD._radius.y, 1 / DD._radius.z, CD), this.worldMatrixFromCache.multiplyToRef(CD, cD), this._processCollisionsForSubMeshes(DD, cD), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(DD, CD, cD) {
            let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              pD = arguments.length > 4 ? arguments[4] : void 0,
              fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const bD = new wD.c,
              QD = this.getClassName(),
              SD = "InstancedLinesMesh" === QD || "LinesMesh" === QD || "GreasedLineMesh" === QD ? this.intersectionThreshold : 0,
              BD = this.VJ();
            if (!this.IH) return bD;
            if (!fD && (!DD.intersectsSphere(BD.rcD, SD) || !DD.intersectsBox(BD.boundingBox, SD))) return bD;
            if (ID) return bD.hit = !fD, bD.pickedMesh = fD ? null : this, bD.distance = fD ? 0 : iD.p.Distance(DD.origin, BD.rcD.center), bD.subMeshId = 0, bD;
            if (!this._generatePointsArray()) return bD;
            let yD = null;
            const MD = this._scene.getIntersectingSubMeshCandidates(this, DD),
              tD = MD.length;
            let ZD = !1;
            for (let iD = 0; iD < tD; iD++) {
              const DD = MD.data[iD].iZ();
              if (DD && (7 == DD.fillMode || 0 == DD.fillMode || 1 == DD.fillMode || 2 == DD.fillMode || 4 == DD.fillMode)) {
                ZD = !0;
                break
              }
            }
            if (!ZD) return bD.hit = !0, bD.pickedMesh = this, bD.distance = iD.p.Distance(DD.origin, BD.rcD.center), bD.subMeshId = -1, bD;
            for (let iD = 0; iD < tD; iD++) {
              const ID = MD.data[iD];
              if (tD > 1 && !fD && !ID.canIntersects(DD)) continue;
              const pD = ID.intersects(DD, this._positions, this.ncD(), CD, cD);
              if (pD && (CD || !yD || pD.distance < yD.distance) && (yD = pD, yD.subMeshId = ID._id, yD._internalSubMeshId = iD, CD)) break
            }
            if (yD) {
              const CD = pD ?? this.getWorldMatrix(),
                cD = iD.l.cZ[0],
                ID = iD.l.cZ[1];
              iD.p.TransformCoordinatesToRef(DD.origin, CD, cD), DD.direction.scaleToRef(yD.distance, ID);
              const fD = iD.p.TransformNormal(ID, CD).addInPlace(cD);
              return bD.hit = !0, bD.distance = iD.p.Distance(cD, fD), bD.pickedPoint = fD, bD.pickedMesh = this, bD.bu = yD.bu || 0, bD.bv = yD.bv || 0, bD.subMeshFaceId = yD.faceId, bD.faceId = yD.faceId + MD.data[yD._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), bD.subMeshId = yD.subMeshId, bD
            }
            return bD
          }
          clone(DD, CD, cD) {
            return null
          }
          releaseSubMeshes() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.IH)
              for (; this.IH.length;) this.IH[0].dispose(DD);
            else this.IH = [];
            return this
          }
          dispose(DD) {
            let CD, cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ID = this.hq();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), ID.freeActiveMeshes(), ID.freeRenderingGroups(), ID.renderingManager.maintainStateBetweenFrames && ID.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((DD => DD !== this && DD.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), CD = 0; CD < this._intersectionsInProgress.length; CD++) {
              const DD = this._intersectionsInProgress[CD],
                cD = DD._intersectionsInProgress.indexOf(this);
              DD._intersectionsInProgress.splice(cD, 1)
            }
            this._intersectionsInProgress.length = 0;
            const pD = ID.lights;
            for (const fD of pD) {
              let DD = fD.includedOnlyMeshes.indexOf(this); - 1 !== DD && fD.includedOnlyMeshes.splice(DD, 1), DD = fD.excludedMeshes.indexOf(this), -1 !== DD && fD.excludedMeshes.splice(DD, 1);
              const CD = fD.getShadowGenerators();
              if (CD) {
                const cD = CD.values();
                for (let CD = cD.next(); !0 !== CD.done; CD = cD.next()) {
                  const cD = CD.value.getShadowMap();
                  cD && cD.renderList && (DD = cD.renderList.indexOf(this), -1 !== DD && cD.renderList.splice(DD, 1))
                }
              }
            }
            this.releaseSubMeshes(ID._isDisposing);
            const iD = ID.DZ();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, iD.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), iD.wipeCaches(), ID.MJ(this), this._parentContainer) {
              const DD = this._parentContainer.meshes.indexOf(this);
              DD > -1 && this._parentContainer.meshes.splice(DD, 1), this._parentContainer = null
            }
            if (cD && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !DD)
              for (CD = 0; CD < ID.iH.length; CD++) ID.iH[CD].emitter === this && (ID.iH[CD].dispose(), CD--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(DD, cD)
          }
          _initFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            DD.facetNormals || (DD.facetNormals = []), DD.facetPositions || (DD.facetPositions = []), DD.facetPartitioning || (DD.facetPartitioning = new Array), DD.facetNb = this.ncD().length / 3 | 0, DD.partitioningSubdivisions = DD.partitioningSubdivisions ? DD.partitioningSubdivisions : 10, DD.partitioningBBoxRatio = DD.partitioningBBoxRatio ? DD.partitioningBBoxRatio : 1.01;
            for (let CD = 0; CD < DD.facetNb; CD++) DD.facetNormals[CD] = iD.p.Zero(), DD.facetPositions[CD] = iD.p.Zero();
            return DD.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            DD.facetDataEnabled || this._initFacetData();
            const CD = this.getVerticesData(fD.k.PositionKind),
              cD = this.ncD(),
              ID = this.getVerticesData(fD.k.NormalKind)?.slice(),
              pD = this.VJ();
            if (DD.facetDepthSort && !DD.facetDepthSortEnabled) {
              if (DD.facetDepthSortEnabled = !0, cD instanceof Uint16Array) DD.depthSortedIndices = new Uint16Array(cD);
              else if (cD instanceof Uint32Array) DD.depthSortedIndices = new Uint32Array(cD);
              else {
                let CD = !1;
                for (let DD = 0; DD < cD.length; DD++)
                  if (cD[DD] > 65535) {
                    CD = !0;
                    break
                  } DD.depthSortedIndices = CD ? new Uint32Array(cD) : new Uint16Array(cD)
              }
              if (DD.facetDepthSortFunction = function(DD, CD) {
                  return CD.sqDistance - DD.sqDistance
                }, !DD.facetDepthSortFrom) {
                const CD = this.hq().activeCamera;
                DD.facetDepthSortFrom = CD ? CD.position : iD.p.Zero()
              }
              DD.depthSortedFacets = [];
              for (let CD = 0; CD < DD.facetNb; CD++) {
                const cD = {
                  ind: 3 * CD,
                  sqDistance: 0
                };
                DD.depthSortedFacets.push(cD)
              }
              DD.invertedMatrix = iD.d.Identity(), DD.facetDepthSortOrigin = iD.p.Zero()
            }
            DD.bbSize.x = pD.maximum.x - pD.minimum.x > XD.c ? pD.maximum.x - pD.minimum.x : XD.c, DD.bbSize.y = pD.maximum.y - pD.minimum.y > XD.c ? pD.maximum.y - pD.minimum.y : XD.c, DD.bbSize.z = pD.maximum.z - pD.minimum.z > XD.c ? pD.maximum.z - pD.minimum.z : XD.c;
            let QD = DD.bbSize.x > DD.bbSize.y ? DD.bbSize.x : DD.bbSize.y;
            if (QD = QD > DD.bbSize.z ? QD : DD.bbSize.z, DD.subDiv.max = DD.partitioningSubdivisions, DD.subDiv.X = Math.floor(DD.subDiv.max * DD.bbSize.x / QD), DD.subDiv.Y = Math.floor(DD.subDiv.max * DD.bbSize.y / QD), DD.subDiv.Z = Math.floor(DD.subDiv.max * DD.bbSize.z / QD), DD.subDiv.X = DD.subDiv.X < 1 ? 1 : DD.subDiv.X, DD.subDiv.Y = DD.subDiv.Y < 1 ? 1 : DD.subDiv.Y, DD.subDiv.Z = DD.subDiv.Z < 1 ? 1 : DD.subDiv.Z, DD.facetParameters.facetNormals = this.getFacetLocalNormals(), DD.facetParameters.facetPositions = this.getFacetLocalPositions(), DD.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), DD.facetParameters.bInfo = pD, DD.facetParameters.bbSize = DD.bbSize, DD.facetParameters.subDiv = DD.subDiv, DD.facetParameters.ratio = this.partitioningBBoxRatio, DD.facetParameters.depthSort = DD.facetDepthSort, DD.facetDepthSort && DD.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(DD.invertedMatrix), iD.p.TransformCoordinatesToRef(DD.facetDepthSortFrom, DD.invertedMatrix, DD.facetDepthSortOrigin), DD.facetParameters.distanceTo = DD.facetDepthSortOrigin), DD.facetParameters.depthSortedFacets = DD.depthSortedFacets, ID && bD.c.ComputeNormals(CD, cD, ID, DD.facetParameters), DD.facetDepthSort && DD.facetDepthSortEnabled) {
              DD.depthSortedFacets.sort(DD.facetDepthSortFunction);
              const CD = DD.depthSortedIndices.length / 3 | 0;
              for (let ID = 0; ID < CD; ID++) {
                const CD = DD.depthSortedFacets[ID].ind;
                DD.depthSortedIndices[3 * ID] = cD[CD], DD.depthSortedIndices[3 * ID + 1] = cD[CD + 1], DD.depthSortedIndices[3 * ID + 2] = cD[CD + 2]
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
            const CD = iD.p.Zero();
            return this.getFacetPositionToRef(DD, CD), CD
          }
          getFacetPositionToRef(DD, CD) {
            const cD = this.getFacetLocalPositions()[DD],
              ID = this.getWorldMatrix();
            return iD.p.TransformCoordinatesToRef(cD, ID, CD), this
          }
          getFacetNormal(DD) {
            const CD = iD.p.Zero();
            return this.getFacetNormalToRef(DD, CD), CD
          }
          getFacetNormalToRef(DD, CD) {
            const cD = this.getFacetLocalNormals()[DD];
            return iD.p.TransformNormalToRef(cD, this.getWorldMatrix(), CD), this
          }
          getFacetsAtLocalCoordinates(DD, CD, cD) {
            const ID = this.VJ(),
              pD = this._internalAbstractMeshDataInfo._facetData,
              iD = Math.floor((DD - ID.minimum.x * pD.partitioningBBoxRatio) * pD.subDiv.X * pD.partitioningBBoxRatio / pD.bbSize.x),
              fD = Math.floor((CD - ID.minimum.y * pD.partitioningBBoxRatio) * pD.subDiv.Y * pD.partitioningBBoxRatio / pD.bbSize.y),
              bD = Math.floor((cD - ID.minimum.z * pD.partitioningBBoxRatio) * pD.subDiv.Z * pD.partitioningBBoxRatio / pD.bbSize.z);
            return iD < 0 || iD > pD.subDiv.max || fD < 0 || fD > pD.subDiv.max || bD < 0 || bD > pD.subDiv.max ? null : pD.facetPartitioning[iD + pD.subDiv.max * fD + pD.subDiv.max * pD.subDiv.max * bD]
          }
          getClosestFacetAtCoordinates(DD, CD, cD, ID) {
            let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const bD = this.getWorldMatrix(),
              QD = iD.l.Matrix[5];
            bD.invertToRef(QD);
            const wD = iD.l.cZ[8];
            iD.p.TransformCoordinatesFromFloatsToRef(DD, CD, cD, QD, wD);
            const SD = this.getClosestFacetAtLocalCoordinates(wD.x, wD.y, wD.z, ID, pD, fD);
            return ID && iD.p.TransformCoordinatesFromFloatsToRef(ID.x, ID.y, ID.z, bD, ID), SD
          }
          getClosestFacetAtLocalCoordinates(DD, CD, cD, ID) {
            let pD, iD, fD, bD, QD, wD, SD, BD, yD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              MD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              tD = null;
            const ZD = this.getFacetLocalPositions(),
              oD = this.getFacetLocalNormals(),
              vD = this.getFacetsAtLocalCoordinates(DD, CD, cD);
            if (!vD) return null;
            let ND, gD, XD, mD, nD = Number.MAX_VALUE;
            for (let OD = 0; OD < vD.length; OD++) gD = vD[OD], XD = oD[gD], mD = ZD[gD], bD = (DD - mD.x) * XD.x + (CD - mD.y) * XD.y + (cD - mD.z) * XD.z, (!yD || yD && MD && bD >= 0 || yD && !MD && bD <= 0) && (bD = XD.x * mD.x + XD.y * mD.y + XD.z * mD.z, QD = -(XD.x * DD + XD.y * CD + XD.z * cD - bD) / (XD.x * XD.x + XD.y * XD.y + XD.z * XD.z), wD = DD + XD.x * QD, SD = CD + XD.y * QD, BD = cD + XD.z * QD, pD = wD - DD, iD = SD - CD, fD = BD - cD, ND = pD * pD + iD * iD + fD * fD, ND < nD && (nD = ND, tD = gD, ID && (ID.x = wD, ID.y = SD, ID.z = BD)));
            return tD
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const DD = this._internalAbstractMeshDataInfo._facetData;
            return DD.facetDataEnabled && (DD.facetDataEnabled = !1, DD.facetPositions = [], DD.facetNormals = [], DD.facetPartitioning = new Array, DD.facetParameters = {}, DD.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(DD, CD) {
            return this
          }
          createNormals(DD) {
            const CD = this.getVerticesData(fD.k.PositionKind),
              cD = this.ncD();
            let ID;
            return ID = this.isVerticesDataPresent(fD.k.NormalKind) ? this.getVerticesData(fD.k.NormalKind) : [], bD.c.ComputeNormals(CD, cD, ID, {
              useRightHandedSystem: this.hq().useRightHandedSystem
            }), this.setVerticesData(fD.k.NormalKind, ID, DD), this
          }
          async optimizeIndicesAsync() {
            const DD = this.ncD();
            if (!DD) return this;
            const {
              OptimizeIndices: CD
            } = await cD.e(341).then((() => cD(41705)));
            return CD(DD), this.setIndices(DD, this.getTotalVertices()), this
          }
          alignWithNormal(DD, CD) {
            CD || (CD = mD.c.Y);
            const cD = iD.l.cZ[0],
              ID = iD.l.cZ[1];
            return iD.p.CrossToRef(CD, DD, ID), iD.p.CrossToRef(DD, ID, cD), this.rotationQuaternion ? iD.h.RotationQuaternionFromAxisToRef(cD, DD, ID, this.rotationQuaternion) : iD.p.RotationFromAxisToRef(cD, DD, ID, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, oD.m)("EdgesRenderer")
          }
          enableEdgesRendering(DD, CD, cD) {
            throw (0, oD.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.iH.filter((DD => DD.emitter === this))
          }
        }, (() => {
          const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(yD[Symbol.metadata] ?? null) : void 0;
          CD = [OD.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, ID.k)(DD, null, CD, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: DD => "_ApplySkeleton" in DD,
              get: DD => DD._ApplySkeleton
            },
            metadata: cD
          }, null, MD), cD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cD
          })
        })(), DD.OCCLUSION_TYPE_NONE = ((0, ID.m)(DD, MD), 0), DD.OCCLUSION_TYPE_OPTIMISTIC = 1, DD.OCCLUSION_TYPE_STRICT = 2, DD.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, DD.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, DD.CULLINGSTRATEGY_STANDARD = 0, DD.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, DD.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, DD.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, DD.DefaultIsPickable = !0, DD
      })(),
      VD = !1;

    function zD() {
      VD || (VD = !0, (0, HD.d)("BABYLON.AbstractMesh", aD))
    }(MD = aD.prototype).createOrUpdateSubmeshesOctree ?? (MD.createOrUpdateSubmeshesOctree = (0, oD.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (tD = aD.prototype).getPhysicsImpostor ?? (tD.getPhysicsImpostor = (0, oD.j)("AbstractMesh", "getPhysicsImpostor")), (ZD = aD.prototype).setPhysicsLinkWith ?? (ZD.setPhysicsLinkWith = (0, oD.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(aD.prototype, "occlusionRetryCount") || Object.defineProperty(aD.prototype, "occlusionRetryCount", (0, oD.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(aD.prototype, "occlusionType") || Object.defineProperty(aD.prototype, "occlusionType", (0, oD.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(aD.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(aD.prototype, "occlusionQueryAlgorithmType", (0, oD.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(aD.prototype, "isOccluded") || Object.defineProperty(aD.prototype, "isOccluded", (0, oD.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(aD.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(aD.prototype, "isOcclusionQueryInProgress", (0, oD.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(aD.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(aD.prototype, "forceRenderingWhenOccluded", (0, oD.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(aD.prototype, "occlusionForRenderPassId") || Object.defineProperty(aD.prototype, "occlusionForRenderPassId", (0, oD.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(aD.prototype, "decalMap") || Object.defineProperty(aD.prototype, "decalMap", (0, oD.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(aD.prototype, "qJ") || Object.defineProperty(aD.prototype, "qJ", (0, oD.g)("AbstractMesh", "qJ")), Object.getOwnPropertyDescriptor(aD.prototype, "physicsImpostor") || Object.defineProperty(aD.prototype, "physicsImpostor", (0, oD.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(aD.prototype, "showBoundingBox") || Object.defineProperty(aD.prototype, "showBoundingBox", (0, oD.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(aD.prototype, "edgesRenderer") || Object.defineProperty(aD.prototype, "edgesRenderer", (0, oD.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(aD.prototype, "renderOutline") || Object.defineProperty(aD.prototype, "renderOutline", (0, oD.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(aD.prototype, "renderOverlay") || Object.defineProperty(aD.prototype, "renderOverlay", (0, oD.g)("AbstractMesh", "renderOverlay"))
  },
  39549: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => vD
    });
    var ID = cD(36446),
      pD = cD(36622),
      iD = cD(39545),
      fD = cD(39286),
      bD = cD(39425),
      QD = cD(39555),
      wD = cD(39441),
      SD = cD(39245),
      BD = cD(38048),
      yD = cD(39176),
      MD = cD(39454),
      tD = cD(36464),
      ZD = cD(39560),
      oD = cD(39213);
    class vD {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(DD) {
        this._boundingBias ? this._boundingBias.YCD(DD) : this._boundingBias = DD.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(DD) {
        const CD = new vD(vD.RandomId(), DD.hq());
        return CD.applyToMesh(DD), CD
      }
      get meshes() {
        return this._meshes
      }
      constructor(DD, CD, cD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new ID.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new ID.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = CD || tD.b.LastCreatedScene, this._scene && (this.id = DD, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.DZ(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = pD, null !== fD && (this._totalVertices = fD), cD ? this.setAllVerticesData(cD, pD) : null === fD && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), iD && (this.applyToMesh(iD), iD.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      hq() {
        return this._scene
      }
      DZ() {
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
        for (const CD in this._vertexBuffers) DD.add(this._vertexBuffers[CD].getWrapperBuffer());
        DD.forEach((DD => {
          DD._rebuild()
        }))
      }
      setAllVerticesData(DD, CD) {
        DD.applyToGeometry(this, CD), this._notifyUpdate()
      }
      setVerticesData(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0;
        cD && Array.isArray(CD) && (CD = new Float32Array(CD));
        const pD = new fD.k(this._engine, CD, DD, {
          updatable: cD,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: ID,
          label: "Geometry_" + this.id + "_" + DD
        });
        this.setVerticesBuffer(pD)
      }
      removeVerticesData(DD) {
        this._vertexBuffers[DD] && (this._vertexBuffers[DD].dispose(), delete this._vertexBuffers[DD]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const pD = DD.getKind();
        this._vertexBuffers[pD] && cD && this._vertexBuffers[pD].dispose(), DD._buffer && DD._ownsBuffer && DD._buffer._increaseReferences(), this._vertexBuffers[pD] = DD;
        const iD = this._meshes,
          bD = iD.length;
        if (pD === fD.k.PositionKind) {
          this._totalVertices = CD ?? DD._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : DD.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const cD = this._extend && this._extend.minimum || new ID.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            pD = this._extend && this._extend.maximum || new ID.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let DD = 0; DD < bD; DD++) {
            const CD = iD[DD];
            CD.buildBoundingInfo(cD, pD), CD._createGlobalSubMesh(CD.isUnIndexed), CD.computeWorldMatrix(!0), CD.synchronizeInstances()
          }
        }
        this._notifyUpdate(pD)
      }
      updateVerticesDataDirectly(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pD = this.getVertexBuffer(DD);
        pD && (pD.updateDirectly(CD, cD, ID), this._notifyUpdate(DD))
      }
      updateVerticesData(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this.getVertexBuffer(DD);
        ID && (ID.update(CD), DD === fD.k.PositionKind && this._updateBoundingInfo(cD, CD), this._notifyUpdate(DD))
      }
      _updateBoundingInfo(DD, CD) {
        if (DD && this._updateExtend(CD), this._resetPointsArrayCache(), DD) {
          const DD = this._meshes;
          for (const CD of DD) {
            CD.hasBoundingInfo ? CD.VJ().reConstruct(this._extend.minimum, this._extend.maximum) : CD.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const DD = CD.IH;
            for (const CD of DD) CD.refreshBoundingInfo()
          }
        }
      }
      _bind(DD, CD, cD, ID) {
        if (!DD) return;
        void 0 === CD && (CD = this._indexBuffer);
        const pD = this.getVertexBuffers();
        if (!pD) return;
        if (CD != this._indexBuffer || !this._vertexArrayObjects && !ID) return void this._engine.bindBuffers(pD, CD, DD, cD);
        const iD = ID || this._vertexArrayObjects,
          fD = this._engine;
        iD[DD.key] || (iD[DD.key] = fD.recordVertexArrayObject(pD, CD, DD, cD)), fD.bindVertexArrayObject(iD[DD.key], CD)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(DD, CD, cD) {
        const ID = this.getVertexBuffer(DD);
        return ID ? ID.getFloatData(this._totalVertices, cD || CD && 1 !== this._meshes.length) : null
      }
      copyVerticesData(DD, CD) {
        const cD = this.getVertexBuffer(DD);
        if (!cD) return;
        CD[DD] || (CD[DD] = new Float32Array(this._totalVertices * cD.getSize()));
        const ID = cD.getData();
        ID && (0, oD.f)(ID, cD.getSize(), cD.type, cD.byteOffset, cD.byteStride, cD.normalized, this._totalVertices, CD[DD])
      }
      isVertexBufferUpdatable(DD) {
        const CD = this._vertexBuffers[DD];
        return !!CD && CD.isUpdatable()
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
        let CD;
        if (!this._vertexBuffers && this._delayInfo)
          for (CD in this._delayInfo) DD.push(CD);
        else
          for (CD in this._vertexBuffers) DD.push(CD);
        return DD
      }
      updateIndices(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const ID = DD.length !== this._indices.length;
            if (cD || (this._indices = DD.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, DD, CD), ID)
              for (const DD of this._meshes) DD._createGlobalSubMesh(!0)
          } else this.setIndices(DD, null, !0)
      }
      setIndexBuffer(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = DD, this._totalVertices = CD, this._totalIndices = cD, DD.is32Bits = null === ID ? CD > 65535 : ID;
        for (const pD of this._meshes) pD._createGlobalSubMesh(!0), pD.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = DD, this._indexBufferIsUpdatable = cD, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, cD, "Geometry_" + this.id + "_IndexBuffer")), void 0 != CD && (this._totalVertices = CD);
        for (const pD of this._meshes) pD._createGlobalSubMesh(!ID), pD.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      ncD(DD, CD) {
        if (!this.isReady()) return null;
        const cD = this._indices;
        return CD || DD && 1 !== this._meshes.length ? cD.slice() : cD
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        DD && this._vertexArrayObjects && this._vertexArrayObjects[DD.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[DD.key]), delete this._vertexArrayObjects[DD.key])
      }
      releaseForMesh(DD, CD) {
        const cD = this._meshes,
          ID = cD.indexOf(DD); - 1 !== ID && (cD.splice(ID, 1), this._vertexArrayObjects && DD._invalidateInstanceVertexArrayObject(), DD._geometry = null, 0 === cD.length && CD && this.dispose())
      }
      applyToMesh(DD) {
        if (DD._geometry === this) return;
        const CD = DD._geometry;
        CD && CD.releaseForMesh(DD), this._vertexArrayObjects && DD._invalidateInstanceVertexArrayObject();
        const cD = this._meshes;
        DD._geometry = this, DD._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), cD.push(DD), this.isReady() ? this._applyToMesh(DD) : this._boundingInfo && DD.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!DD && (DD = this.getVerticesData(fD.k.PositionKind), !DD)) return;
          this._extend = (0, MD.f)(DD, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(DD) {
        for (const CD in this._vertexBuffers) {
          const cD = this._vertexBuffers[CD];
          cD._buffer.getBuffer() || cD.create(), CD === fD.k.PositionKind && (this._extend || this._updateExtend(), DD.buildBoundingInfo(this._extend.minimum, this._extend.maximum), DD._createGlobalSubMesh(DD.isUnIndexed), DD._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), DD._syncGeometryWithMorphTargetManager(), DD.synchronizeInstances()
      }
      _notifyUpdate(DD) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, DD), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const CD of this._meshes) CD._markSubMeshesAsAttributesDirty()
      }
      load(DD, CD) {
        2 !== this.delayLoadState && (this.isReady() ? CD && CD() : (this.delayLoadState = 2, this._queueLoad(DD, CD)))
      }
      _queueLoad(DD, CD) {
        this.delayLoadingFile && (DD.addPendingData(this), (async () => {
          try {
            const cD = await DD._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void DD.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(cD), this), this.delayLoadState = 1, this._delayInfo = [], DD.removePendingData(this);
            const ID = this._meshes,
              pD = ID.length;
            for (let DD = 0; DD < pD; DD++) this._applyToMesh(ID[DD]);
            CD && CD()
          } catch (cD) {
            DD.removePendingData(this), DD.jCD || BD.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${cD}`)
          }
        })())
      }
      toLeftHanded() {
        const DD = this.ncD(!1);
        if (null != DD && DD.length > 0) {
          for (let CD = 0; CD < DD.length; CD += 3) {
            const cD = DD[CD + 0];
            DD[CD + 0] = DD[CD + 2], DD[CD + 2] = cD
          }
          this.setIndices(DD)
        }
        const CD = this.getVerticesData(fD.k.PositionKind, !1);
        if (null != CD && CD.length > 0) {
          for (let DD = 0; DD < CD.length; DD += 3) CD[DD + 2] = -CD[DD + 2];
          this.setVerticesData(fD.k.PositionKind, CD, !1)
        }
        const cD = this.getVerticesData(fD.k.NormalKind, !1);
        if (null != cD && cD.length > 0) {
          for (let DD = 0; DD < cD.length; DD += 3) cD[DD + 2] = -cD[DD + 2];
          this.setVerticesData(fD.k.NormalKind, cD, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const DD = this.getVerticesData(fD.k.PositionKind);
        if (!DD || 0 === DD.length) return !1;
        for (let CD = 3 * this._positionsCache.length, cD = this._positionsCache.length; CD < DD.length; CD += 3, ++cD) this._positionsCache[cD] = ID.p.FromArray(DD, CD);
        for (let CD = 0, cD = 0; CD < DD.length; CD += 3, ++cD) this._positionsCache[cD].set(DD[0 + CD], DD[1 + CD], DD[2 + CD]);
        return this._positionsCache.length = DD.length / 3, this._positions = this._positionsCache, !0
      }
      jCD() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const cD in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[cD]);
          this._vertexArrayObjects = {};
          const DD = this._meshes,
            CD = DD.length;
          for (let cD = 0; cD < CD; cD++) DD[cD]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const DD = this._meshes,
          CD = DD.length;
        let cD;
        for (cD = 0; cD < CD; cD++) this.releaseForMesh(DD[cD]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const ID in this._vertexBuffers) this._vertexBuffers[ID].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const DD = this._parentContainer.geometries.indexOf(this);
          DD > -1 && this._parentContainer.geometries.splice(DD, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(DD) {
        const CD = new vD(DD, this._scene),
          cD = this.ncD(void 0, !0);
        cD && CD.setIndices(cD);
        let ID, pD = !1;
        for (ID in this._vertexBuffers) {
          const DD = this.getVertexBuffer(ID),
            cD = DD.getData();
          if (!cD) continue;
          const iD = DD.isUpdatable(),
            bD = DD.getSize(),
            {
              type: QD,
              byteOffset: wD,
              byteStride: SD,
              normalized: BD
            } = DD;
          pD = pD || iD;
          let yD = this._totalVertices;
          if (DD.getIsInstanced()) {
            let DD;
            DD = cD instanceof Array ? 4 * cD.length : cD.byteLength, yD = DD / SD
          }
          const MD = (0, oD.u)(cD, bD, QD, wD, SD, yD, !0),
            tD = new fD.k(this._engine, MD, ID, {
              updatable: iD,
              useBytes: !1,
              stride: bD,
              size: bD,
              offset: 0,
              type: QD,
              normalized: BD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            });
          CD.setVerticesBuffer(tD, yD)
        }
        for (ID in CD._updatable = pD, CD.delayLoadState = this.delayLoadState, CD.delayLoadingFile = this.delayLoadingFile, CD._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) CD._delayInfo = CD._delayInfo || [], CD._delayInfo.push(ID);
        return CD._boundingInfo = new wD.e(this._extend.minimum, this._extend.maximum), CD
      }
      serialize() {
        const DD = {};
        return DD.id = this.id, DD.uniqueId = this.uniqueId, DD.updatable = this._updatable, yD.c && yD.c.HasTags(this) && (DD.tags = yD.c.GetTags(this)), DD
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
        return this.isVerticesDataPresent(fD.k.PositionKind) && (DD.positions = this._toNumberArray(this.getVerticesData(fD.k.PositionKind)), this.isVertexBufferUpdatable(fD.k.PositionKind) && (DD.positionsUpdatable = !0)), this.isVerticesDataPresent(fD.k.NormalKind) && (DD.normals = this._toNumberArray(this.getVerticesData(fD.k.NormalKind)), this.isVertexBufferUpdatable(fD.k.NormalKind) && (DD.normalsUpdatable = !0)), this.isVerticesDataPresent(fD.k.TangentKind) && (DD.tangents = this._toNumberArray(this.getVerticesData(fD.k.TangentKind)), this.isVertexBufferUpdatable(fD.k.TangentKind) && (DD.tangentsUpdatable = !0)), this.isVerticesDataPresent(fD.k.UVKind) && (DD.uvs = this._toNumberArray(this.getVerticesData(fD.k.UVKind)), this.isVertexBufferUpdatable(fD.k.UVKind) && (DD.uvsUpdatable = !0)), this.isVerticesDataPresent(fD.k.UV2Kind) && (DD.uvs2 = this._toNumberArray(this.getVerticesData(fD.k.UV2Kind)), this.isVertexBufferUpdatable(fD.k.UV2Kind) && (DD.uvs2Updatable = !0)), this.isVerticesDataPresent(fD.k.UV3Kind) && (DD.uvs3 = this._toNumberArray(this.getVerticesData(fD.k.UV3Kind)), this.isVertexBufferUpdatable(fD.k.UV3Kind) && (DD.uvs3Updatable = !0)), this.isVerticesDataPresent(fD.k.UV4Kind) && (DD.uvs4 = this._toNumberArray(this.getVerticesData(fD.k.UV4Kind)), this.isVertexBufferUpdatable(fD.k.UV4Kind) && (DD.uvs4Updatable = !0)), this.isVerticesDataPresent(fD.k.UV5Kind) && (DD.uvs5 = this._toNumberArray(this.getVerticesData(fD.k.UV5Kind)), this.isVertexBufferUpdatable(fD.k.UV5Kind) && (DD.uvs5Updatable = !0)), this.isVerticesDataPresent(fD.k.UV6Kind) && (DD.uvs6 = this._toNumberArray(this.getVerticesData(fD.k.UV6Kind)), this.isVertexBufferUpdatable(fD.k.UV6Kind) && (DD.uvs6Updatable = !0)), this.isVerticesDataPresent(fD.k.ColorKind) && (DD.colors = this._toNumberArray(this.getVerticesData(fD.k.ColorKind)), this.isVertexBufferUpdatable(fD.k.ColorKind) && (DD.colorsUpdatable = !0)), this.isVerticesDataPresent(fD.k.MatricesIndicesKind) && (DD.matricesIndices = this._toNumberArray(this.getVerticesData(fD.k.MatricesIndicesKind)), DD.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(fD.k.MatricesIndicesKind) && (DD.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(fD.k.MatricesWeightsKind) && (DD.matricesWeights = this._toNumberArray(this.getVerticesData(fD.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(fD.k.MatricesWeightsKind) && (DD.matricesWeightsUpdatable = !0)), DD.indices = this._toNumberArray(this.ncD()), DD
      }
      static ExtractFromMesh(DD, CD) {
        const cD = DD._geometry;
        return cD ? cD.copy(CD) : null
      }
      static RandomId() {
        return SD.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(DD, CD) {
        for (let cD = 0; cD < CD.geometries.length; cD++)
          if (CD.geometries[cD]._loadedUniqueId === DD) return CD.geometries[cD];
        return null
      }
      static _ImportGeometry(DD, CD) {
        const cD = CD.hq(),
          ID = DD.geometryUniqueId,
          iD = DD.geometryId;
        if (ID || iD) {
          const DD = ID ? this._GetGeometryByLoadedUniqueId(ID, cD) : cD.getGeometryById(iD);
          DD && DD.applyToMesh(CD)
        } else if (DD instanceof ArrayBuffer) {
          const cD = CD._binaryInfo;
          if (cD.positionsAttrDesc && cD.positionsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.positionsAttrDesc.offset, cD.positionsAttrDesc.count);
            CD.setVerticesData(fD.k.PositionKind, ID, !1)
          }
          if (cD.normalsAttrDesc && cD.normalsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.normalsAttrDesc.offset, cD.normalsAttrDesc.count);
            CD.setVerticesData(fD.k.NormalKind, ID, !1)
          }
          if (cD.tangetsAttrDesc && cD.tangetsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.tangetsAttrDesc.offset, cD.tangetsAttrDesc.count);
            CD.setVerticesData(fD.k.TangentKind, ID, !1)
          }
          if (cD.uvsAttrDesc && cD.uvsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvsAttrDesc.offset, cD.uvsAttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UVKind, ID, !1)
          }
          if (cD.uvs2AttrDesc && cD.uvs2AttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvs2AttrDesc.offset, cD.uvs2AttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UV2Kind, ID, !1)
          }
          if (cD.uvs3AttrDesc && cD.uvs3AttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvs3AttrDesc.offset, cD.uvs3AttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UV3Kind, ID, !1)
          }
          if (cD.uvs4AttrDesc && cD.uvs4AttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvs4AttrDesc.offset, cD.uvs4AttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UV4Kind, ID, !1)
          }
          if (cD.uvs5AttrDesc && cD.uvs5AttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvs5AttrDesc.offset, cD.uvs5AttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UV5Kind, ID, !1)
          }
          if (cD.uvs6AttrDesc && cD.uvs6AttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.uvs6AttrDesc.offset, cD.uvs6AttrDesc.count);
            if (ZD.c)
              for (let DD = 1; DD < ID.length; DD += 2) ID[DD] = 1 - ID[DD];
            CD.setVerticesData(fD.k.UV6Kind, ID, !1)
          }
          if (cD.colorsAttrDesc && cD.colorsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.colorsAttrDesc.offset, cD.colorsAttrDesc.count);
            CD.setVerticesData(fD.k.ColorKind, ID, !1, cD.colorsAttrDesc.stride)
          }
          if (cD.matricesIndicesAttrDesc && cD.matricesIndicesAttrDesc.count > 0) {
            const ID = new Int32Array(DD, cD.matricesIndicesAttrDesc.offset, cD.matricesIndicesAttrDesc.count),
              pD = [];
            for (let DD = 0; DD < ID.length; DD++) {
              const CD = ID[DD];
              pD.push(255 & CD), pD.push((65280 & CD) >> 8), pD.push((16711680 & CD) >> 16), pD.push(CD >> 24 & 255)
            }
            CD.setVerticesData(fD.k.MatricesIndicesKind, pD, !1)
          }
          if (cD.matricesIndicesExtraAttrDesc && cD.matricesIndicesExtraAttrDesc.count > 0) {
            const ID = new Int32Array(DD, cD.matricesIndicesExtraAttrDesc.offset, cD.matricesIndicesExtraAttrDesc.count),
              pD = [];
            for (let DD = 0; DD < ID.length; DD++) {
              const CD = ID[DD];
              pD.push(255 & CD), pD.push((65280 & CD) >> 8), pD.push((16711680 & CD) >> 16), pD.push(CD >> 24 & 255)
            }
            CD.setVerticesData(fD.k.MatricesIndicesExtraKind, pD, !1)
          }
          if (cD.matricesWeightsAttrDesc && cD.matricesWeightsAttrDesc.count > 0) {
            const ID = new Float32Array(DD, cD.matricesWeightsAttrDesc.offset, cD.matricesWeightsAttrDesc.count);
            CD.setVerticesData(fD.k.MatricesWeightsKind, ID, !1)
          }
          if (cD.indicesAttrDesc && cD.indicesAttrDesc.count > 0) {
            const ID = new Int32Array(DD, cD.indicesAttrDesc.offset, cD.indicesAttrDesc.count);
            CD.setIndices(ID, null)
          }
          if (cD.subMeshesAttrDesc && cD.subMeshesAttrDesc.count > 0) {
            const ID = new Int32Array(DD, cD.subMeshesAttrDesc.offset, 5 * cD.subMeshesAttrDesc.count);
            CD.IH = [];
            for (let DD = 0; DD < cD.subMeshesAttrDesc.count; DD++) {
              const cD = ID[5 * DD + 0],
                pD = ID[5 * DD + 1],
                iD = ID[5 * DD + 2],
                fD = ID[5 * DD + 3],
                QD = ID[5 * DD + 4];
              bD.c.AddToMesh(cD, pD, iD, fD, QD, CD)
            }
          }
        } else if (DD.positions && DD.normals && DD.indices) {
          if (CD.setVerticesData(fD.k.PositionKind, DD.positions, DD.positions._updatable || DD.positionsUpdatable), CD.setVerticesData(fD.k.NormalKind, DD.normals, DD.normals._updatable || DD.normalsUpdatable), DD.tangents && CD.setVerticesData(fD.k.TangentKind, DD.tangents, DD.tangents._updatable || DD.tangentsUpdatable), DD.uvs && CD.setVerticesData(fD.k.UVKind, DD.uvs, DD.uvs._updatable || DD.uvsUpdatable), DD.uvs2 && CD.setVerticesData(fD.k.UV2Kind, DD.uvs2, DD.uvs2._updatable || DD.uvs2Updatable), DD.uvs3 && CD.setVerticesData(fD.k.UV3Kind, DD.uvs3, DD.uvs3._updatable || DD.uvs3Updatable), DD.uvs4 && CD.setVerticesData(fD.k.UV4Kind, DD.uvs4, DD.uvs4._updatable || DD.uvs4Updatable), DD.uvs5 && CD.setVerticesData(fD.k.UV5Kind, DD.uvs5, DD.uvs5._updatable || DD.uvs5Updatable), DD.uvs6 && CD.setVerticesData(fD.k.UV6Kind, DD.uvs6, DD.uvs6._updatable || DD.uvs6Updatable), DD.colors && CD.setVerticesData(fD.k.ColorKind, pD.e.CheckColors4(DD.colors, DD.positions.length / 3), DD.colors._updatable), DD.matricesIndices)
            if (DD.matricesIndices._isExpanded || DD.matricesIndicesExpanded) delete DD.matricesIndices._isExpanded, delete DD.matricesIndicesExpanded, CD.setVerticesData(fD.k.MatricesIndicesKind, DD.matricesIndices, DD.matricesIndices._updatable || DD.matricesIndicesUpdatable);
            else {
              const cD = [];
              for (let CD = 0; CD < DD.matricesIndices.length; CD++) {
                const ID = DD.matricesIndices[CD];
                cD.push(255 & ID), cD.push((65280 & ID) >> 8), cD.push((16711680 & ID) >> 16), cD.push(ID >> 24 & 255)
              }
              CD.setVerticesData(fD.k.MatricesIndicesKind, cD, DD.matricesIndices._updatable || DD.matricesIndicesUpdatable)
            } if (DD.matricesIndicesExtra)
            if (DD.matricesIndicesExtraExpanded || DD.matricesIndicesExtra._isExpanded) delete DD.matricesIndices._isExpanded, delete DD.matricesIndicesExtraExpanded, CD.setVerticesData(fD.k.MatricesIndicesExtraKind, DD.matricesIndicesExtra, DD.matricesIndicesExtra._updatable || DD.matricesIndicesExtraUpdatable);
            else {
              const cD = [];
              for (let CD = 0; CD < DD.matricesIndicesExtra.length; CD++) {
                const ID = DD.matricesIndicesExtra[CD];
                cD.push(255 & ID), cD.push((65280 & ID) >> 8), cD.push((16711680 & ID) >> 16), cD.push(ID >> 24 & 255)
              }
              CD.setVerticesData(fD.k.MatricesIndicesExtraKind, cD, DD.matricesIndicesExtra._updatable || DD.matricesIndicesExtraUpdatable)
            } DD.matricesWeights && (vD._CleanMatricesWeights(DD, CD), CD.setVerticesData(fD.k.MatricesWeightsKind, DD.matricesWeights, DD.matricesWeights._updatable)), DD.matricesWeightsExtra && CD.setVerticesData(fD.k.MatricesWeightsExtraKind, DD.matricesWeightsExtra, DD.matricesWeights._updatable), CD.setIndices(DD.indices, null)
        }
        if (DD.IH) {
          CD.IH = [];
          for (let cD = 0; cD < DD.IH.length; cD++) {
            const ID = DD.IH[cD];
            bD.c.AddToMesh(ID.materialIndex, ID.verticesStart, ID.verticesCount, ID.indexStart, ID.indexCount, CD)
          }
        }
        CD._shouldGenerateFlatShading && (CD.convertToFlatShadedMesh(), CD._shouldGenerateFlatShading = !1), CD.computeWorldMatrix(!0), cD.onMeshImportedObservable.notifyObservers(CD)
      }
      static _CleanMatricesWeights(DD, CD) {
        const cD = .001;
        if (!QD.b.CleanBoneMatrixWeights) return;
        let ID;
        if (!(DD.skeletonId > -1)) return;
        {
          const cD = CD.hq().getLastSkeletonById(DD.skeletonId);
          if (!cD) return;
          ID = cD.bones.length
        }
        const pD = CD.getVerticesData(fD.k.MatricesIndicesKind),
          iD = CD.getVerticesData(fD.k.MatricesIndicesExtraKind),
          bD = DD.matricesWeights,
          wD = DD.matricesWeightsExtra,
          SD = DD.numBoneInfluencer,
          BD = bD.length;
        for (let fD = 0; fD < BD; fD += 4) {
          let DD = 0,
            CD = -1;
          for (let ID = 0; ID < 4; ID++) {
            const pD = bD[fD + ID];
            DD += pD, pD < cD && CD < 0 && (CD = ID)
          }
          if (wD)
            for (let ID = 0; ID < 4; ID++) {
              const pD = wD[fD + ID];
              DD += pD, pD < cD && CD < 0 && (CD = ID + 4)
            }
          if ((CD < 0 || CD > SD - 1) && (CD = SD - 1), DD > cD) {
            const CD = 1 / DD;
            for (let DD = 0; DD < 4; DD++) bD[fD + DD] *= CD;
            if (wD)
              for (let DD = 0; DD < 4; DD++) wD[fD + DD] *= CD
          } else CD >= 4 ? (wD[fD + CD - 4] = 1 - DD, iD[fD + CD - 4] = ID) : (bD[fD + CD] = 1 - DD, pD[fD + CD] = ID)
        }
        CD.setVerticesData(fD.k.MatricesIndicesKind, pD), DD.matricesWeightsExtra && CD.setVerticesData(fD.k.MatricesIndicesExtraKind, iD)
      }
      static Parse(DD, CD, cD) {
        const pD = new vD(DD.id, CD, void 0, DD.updatable);
        return pD._loadedUniqueId = DD.uniqueId, yD.c && yD.c.AddTagsTo(pD, DD.tags), DD.delayLoadingFile ? (pD.delayLoadState = 4, pD.delayLoadingFile = cD + DD.delayLoadingFile, pD._boundingInfo = new wD.e(ID.p.FromArray(DD.boundingBoxMinimum), ID.p.FromArray(DD.boundingBoxMaximum)), pD._delayInfo = [], DD.hasUVs && pD._delayInfo.push(fD.k.UVKind), DD.hasUVs2 && pD._delayInfo.push(fD.k.UV2Kind), DD.hasUVs3 && pD._delayInfo.push(fD.k.UV3Kind), DD.hasUVs4 && pD._delayInfo.push(fD.k.UV4Kind), DD.hasUVs5 && pD._delayInfo.push(fD.k.UV5Kind), DD.hasUVs6 && pD._delayInfo.push(fD.k.UV6Kind), DD.hasColors && pD._delayInfo.push(fD.k.ColorKind), DD.hasMatricesIndices && pD._delayInfo.push(fD.k.MatricesIndicesKind), DD.hasMatricesWeights && pD._delayInfo.push(fD.k.MatricesWeightsKind), pD._delayLoadingFunction = iD.c.ImportVertexData) : iD.c.ImportVertexData(DD, pD), CD.pushGeometry(pD, !0), pD
      }
    }
  },
  39586: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD,
      e: () => tD
    });
    var ID = cD(36446),
      pD = cD(38048),
      iD = cD(39567),
      fD = cD(39531),
      bD = cD(38045),
      QD = cD(39569),
      wD = cD(39286),
      SD = cD(36488);
    class BD extends iD.b {
      constructor(DD, CD) {
        super(DD, CD.hq()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, CD.y5(this), this._sourceMesh = CD, this._unIndexed = CD._unIndexed, this.position.YCD(CD.position), this.rotation.YCD(CD.rotation), this.ci.YCD(CD.ci), CD.rotationQuaternion && (this.rotationQuaternion = CD.rotationQuaternion.clone()), this.animations = CD.animations.slice();
        for (const cD of CD.getAnimationRanges()) null != cD && this.createAnimationRange(cD.name, cD.from, cD.to);
        if (this.infiniteDistance = CD.infiniteDistance, this.setPivotMatrix(CD.getPivotMatrix()), CD.skeleton || CD.morphTargetManager || !CD.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const DD = CD.VJ();
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
        this._sourceMesh?.receiveShadows !== DD && pD.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(DD) {
        this._sourceMesh?.material !== DD && pD.e.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(DD) {
        this._sourceMesh?.visibility !== DD && pD.e.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(DD) {
        this._sourceMesh?.skeleton !== DD && pD.e.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(DD) {
        this._sourceMesh && DD !== this._sourceMesh.renderingGroupId && pD.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(DD) {
        this._sourceMesh && DD !== this._sourceMesh.meshBlendingTag && pD.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get OID() {
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
      getVerticesData(DD, CD, cD) {
        return this._sourceMesh.getVerticesData(DD, CD, cD)
      }
      copyVerticesData(DD, CD) {
        this._sourceMesh.copyVerticesData(DD, CD)
      }
      getVertexBuffer(DD, CD) {
        return this._sourceMesh.getVertexBuffer(DD, CD)
      }
      setVerticesData(DD, CD, cD, ID) {
        return this.OID && this.OID.setVerticesData(DD, CD, cD, ID), this.OID
      }
      updateVerticesData(DD, CD, cD, ID) {
        return this.OID && this.OID.updateVerticesData(DD, CD, cD, ID), this.OID
      }
      setIndices(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.OID && this.OID.setIndices(DD, CD), this.OID
      }
      isVerticesDataPresent(DD) {
        return this._sourceMesh.isVerticesDataPresent(DD)
      }
      ncD() {
        return this._sourceMesh.ncD()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let DD, CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.VJ().isLocked) return this;
        DD = "object" === typeof CD ? CD : {
          applySkeleton: CD,
          applyMorph: cD
        };
        const ID = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(DD, null, wD.k.PositionKind), ID), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(DD, CD) {
        if (super._activate(DD, CD), this._sourceMesh.IH || pD.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, DD), CD) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== QD.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new ID.d);
          const DD = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, ID.l.cZ[7].YCD(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.YCD(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.YCD(ID.l.cZ[7]), this._currentLOD._masterMesh = DD, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Fq() {
        return !0
      }
      getLOD(DD) {
        if (!DD) return this;
        const CD = this.OID.getLODLevels();
        if (CD && 0 !== CD.length) {
          const CD = this.VJ();
          this._currentLOD = this.OID.getLOD(DD, CD.rcD)
        } else this._currentLOD = this.OID;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(DD) {
        return this.OID._preActivateForIntermediateRendering(DD)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.IH)
          for (let DD = 0; DD < this._sourceMesh.IH.length; DD++) this._sourceMesh.IH[DD].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.VJ().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(DD);
        if (bD.e.DeepCopy(this, ID, ["name", "IH", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "OID", "Fq", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "nID", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "yfD", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), CD && (ID.parent = CD), !cD)
          for (let pD = 0; pD < this.hq().meshes.length; pD++) {
            const DD = this.hq().meshes[pD];
            DD.parent === this && DD.clone(DD.name, ID)
          }
        return ID.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(ID), ID
      }
      dispose(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z5(this), super.dispose(DD, CD)
      }
      _serializeAsParent(DD) {
        super._serializeAsParent(DD), DD.parentId = this._sourceMesh.uniqueId, DD.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0, CD && CD.newSourcedMesh);
        ID && cD && cD(this, ID);
        for (const pD of this.getChildTransformNodes(!0)) pD.instantiateHierarchy(ID, CD, cD);
        return ID
      }
    }
    let yD = !1;

    function MD(DD, CD, cD, ID, pD) {
      for (let iD = 0; iD < CD.length; iD++) {
        const fD = DD[CD[iD]] ?? 0,
          bD = pD + cD[iD];
        fD.toArray ? fD.toArray(ID, bD) : fD.copyToArray ? fD.copyToArray(ID, bD) : ID[bD] = fD
      }
    }

    function tD() {
      yD || (yD = !0, fD.d._instancedMeshFactory = (DD, CD) => {
        const cD = new BD(DD, CD);
        if (CD.qJ) {
          cD.qJ = {};
          for (const DD in CD.qJ) cD.qJ[DD] = CD.qJ[DD]
        }
        return cD
      }, fD.d.prototype.xJ = function(DD, CD) {
        if (!this.qJ) {
          this.qJ = {};
          for (const DD of this.instances) DD.qJ = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.DZ().getCaps().vertexArrayObject ? {} : void 0
        }), this.qJ[DD] = null, this._userInstancedBuffersStorage.strides[DD] = CD;
        const cD = this._userInstancedBuffersStorage;
        cD.interleavedKinds = [], cD.interleavedOffsets = [], cD.interleavedRowStride = 0;
        for (const ID in cD.strides) cD.interleavedKinds.push(ID), cD.interleavedOffsets.push(cD.interleavedRowStride), cD.interleavedRowStride += cD.strides[ID];
        cD.interleavedData = new Float32Array(32 * cD.interleavedRowStride);
        for (const ID in cD.interleavedBuffers) cD.interleavedBuffers[ID].buffer.dispose();
        cD.interleavedBuffers = {}, cD.vertexBuffers[DD] = null;
        for (const ID of this.instances) ID.qJ[DD] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, fD.d.prototype._processInstancedBuffers = function(DD, CD) {
        const cD = this._userInstancedBuffersStorage,
          ID = cD.interleavedRowStride;
        if (!ID) return;
        const pD = DD ? DD.length : 0,
          iD = (pD + 1) * ID;
        let fD = cD.interleavedData;
        if (fD.length < iD) {
          let DD = fD.length;
          for (; DD < iD;) DD *= 2;
          fD = cD.interleavedData = new Float32Array(DD)
        }
        const bD = cD.interleavedKinds,
          QD = cD.interleavedOffsets;
        let SD = 0;
        CD && (MD(this.qJ, bD, QD, fD, SD), SD += ID);
        for (let wD = 0; wD < pD; wD++) MD(DD[wD].qJ, bD, QD, fD, SD), SD += ID;
        let BD = "shared",
          yD = cD.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (BD = this._instanceDataStorage.engine.currentRenderPassId, cD.renderPasses || (cD.renderPasses = {}), cD.renderPasses[BD] || (cD.renderPasses[BD] = {}), yD = cD.renderPasses[BD]);
        const tD = cD.interleavedBuffers[BD];
        let ZD = !tD || tD.data !== fD;
        for (let wD = 0; !ZD && wD < bD.length; wD++) ZD = !yD[bD[wD]];
        if (!ZD) return void tD.buffer.updateDirectly(fD, 0);
        tD?.buffer.dispose();
        const oD = new wD.c(this.DZ(), fD, !0, ID, !1, !0);
        for (let wD = 0; wD < bD.length; wD++) {
          const DD = bD[wD],
            CD = oD.createVertexBuffer(DD, QD[wD], cD.strides[DD]);
          CD.hashCode += CD.byteOffset * 2 ** 24, yD[DD] = CD
        }
        cD.interleavedBuffers[BD] = {
          buffer: oD,
          data: fD
        }, this._invalidateInstanceVertexArrayObject()
      }, fD.d.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const DD in this._userInstancedBuffersStorage.vertexArrayObjects) this.DZ().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[DD]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, fD.d.prototype._disposeInstanceSpecificData = function() {
        for (const CD in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[CD].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const CD in this.qJ) this._userInstancedBuffersStorage.vertexBuffers[CD] && this._userInstancedBuffersStorage.vertexBuffers[CD].dispose();
        const DD = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (DD) {
          for (const CD in DD) DD[CD].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.qJ = {}
      }, (0, SD.d)("BABYLON.InstancedMesh", BD))
    }
  },
  39531: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => rD,
      f: () => FD,
      j: () => YD
    });
    var ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD = cD(36473),
      ND = cD(39245),
      gD = cD(39193),
      XD = cD(38045),
      mD = cD(39176),
      nD = cD(39538),
      OD = cD(39351),
      PD = cD(36446),
      HD = cD(36622),
      UD = cD(39356),
      xD = cD(39286),
      qD = cD(39545),
      JD = cD(39549),
      KD = cD(39567),
      aD = cD(39425),
      VD = cD(39416),
      zD = cD(39508),
      jD = cD(39572),
      lD = cD(39555),
      LD = cD(39174),
      TD = cD(38048),
      GD = cD(36488),
      RD = cD(39027),
      kD = cD(39315);
    class dD {
      constructor(DD, CD) {
        this.distanceOrScreenCoverage = DD, this.mesh = CD
      }
    }
    class YD {}
    class WD {
      constructor() {
        this.batchCache = new ED(this), this.batchCacheReplacementModeInFrozenMode = new ED(this), this.instancesBufferSize = 2048
      }
    }
    class sD {
      constructor() {
        this.renderPasses = {}
      }
    }
    class ED {
      constructor(DD) {
        this.parent = DD, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class eD {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class uD {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const hD = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class rD extends KD.b {
      static _GetDefaultSideOrientation(DD) {
        return DD || rD.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== DD && (DD && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(xD.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(xD.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = DD, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new vD.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new vD.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new vD.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new vD.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new vD.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(DD) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(DD)
      }
      get nID() {
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
      _copySource(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pD = this.hq();
        if (DD._geometry && DD._geometry.applyToMesh(this), XD.e.DeepCopy(DD, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "nID", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Fq", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "yfD", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = DD, pD.useClonedMeshMap && (DD._internalMeshDataInfo.meshMap || (DD._internalMeshDataInfo.meshMap = {}), DD._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = DD._originalBuilderSideOrientation, this._creationDataStorage = DD._creationDataStorage, DD._ranges) {
          const CD = DD._ranges;
          for (const DD in CD) Object.prototype.hasOwnProperty.call(CD, DD) && CD[DD] && this.createAnimationRange(DD, CD[DD].from, CD[DD].to)
        }
        if (DD.metadata && DD.metadata.clone ? this.metadata = DD.metadata.clone() : this.metadata = DD.metadata, this._internalMetadata = DD._internalMetadata, this.meshBlendingTag = DD.meshBlendingTag, mD.c && mD.c.HasTags(DD) && mD.c.AddTagsTo(this, mD.c.GetTags(DD, !0)), this.lH(DD.isEnabled(!1)), this.parent = DD.parent, this.setPivotMatrix(DD.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + DD.id, this.material = DD.material, !CD) {
          const pD = DD.getDescendants(!0);
          for (let DD = 0; DD < pD.length; DD++) {
            const iD = pD[DD];
            iD._isMesh ? (hD.parent = this, hD.doNotCloneChildren = CD, hD.clonePhysicsImpostor = cD, hD.cloneThinInstances = ID, iD.clone(this.name + "." + iD.name, hD)) : iD.clone && iD.clone(this.name + "." + iD.name, this)
          }
        }
        if (DD.morphTargetManager && (this.morphTargetManager = DD.morphTargetManager), (0, RD.d)(pD.getPhysicsEngine)) {
          const CD = pD.getPhysicsEngine();
          if (cD && CD)
            if (1 === CD.getPluginVersion()) {
              const cD = CD.getImpostorForPhysicsObject(DD);
              cD && (this.physicsImpostor = cD.clone(this))
            } else 2 === CD.getPluginVersion() && DD.physicsBody && DD.physicsBody.clone(this)
        }
        for (let iD = 0; iD < pD.iH.length; iD++) {
          const CD = pD.iH[iD];
          CD.emitter === DD && CD.clone(CD.name, this)
        }
        if (this.skeleton = DD.skeleton, ID && (DD._thinInstanceDataStorage.matrixData ? (this.U3("matrix", new Float32Array(DD._thinInstanceDataStorage.matrixData), 16, !DD._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = DD._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = DD._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = DD._thinInstanceDataStorage.matrixBufferSize, DD._userThinInstanceBuffersStorage)) {
          const CD = DD._userThinInstanceBuffersStorage;
          for (const DD in CD.data) this.U3(DD, new Float32Array(CD.data[DD]), CD.strides[DD], !CD.vertexBuffers?.[DD]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[DD] = CD.sizes[DD]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(DD) {
        let CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iD = arguments.length > 4 ? arguments[4] : void 0,
          fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(DD, cD), this._internalMeshDataInfo = new uD, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new eD, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = rD.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, cD = this.hq(), this._instanceDataStorage = new sD, this._instanceDataStorage.engine = cD.DZ(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new WD), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (DD, CD, cD) => {
          DD && cD && (this._uniformBuffer ? this.transferToEffect(CD) : cD.bindOnlyWorldMatrix(CD))
        };
        let bD = !1;
        if (ID && void 0 === ID._addToSceneRootNodes) {
          const DD = ID;
          CD = DD.parent ?? null, pD = DD.source ?? null, iD = DD.doNotCloneChildren ?? !1, fD = DD.clonePhysicsImpostor ?? !0, bD = DD.cloneThinInstances ?? !1
        } else CD = ID;
        pD && this._copySource(pD, iD, fD, bD), null !== CD && (this.parent = CD), this._instanceDataStorage.hardwareInstancedRendering = this.DZ().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = DD => {
          DD.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new vD.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), pD && pD.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = 0 === this.getTotalVertices() || CD && CD.doNotInstantiate && (!0 === CD.doNotInstantiate || CD.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        ID.parent = DD || this.parent, ID.position = this.position.clone(), ID.ci = this.ci.clone(), this.rotationQuaternion ? ID.rotationQuaternion = this.rotationQuaternion.clone() : ID.rotation = this.rotation.clone(), cD && cD(this, ID);
        for (const pD of this.getChildTransformNodes(!0)) "InstancedMesh" === pD.getClassName() && "Mesh" === ID.getClassName() && pD.OID === this ? pD.instantiateHierarchy(ID, {
          doNotInstantiate: CD && CD.doNotInstantiate || !1,
          newSourcedMesh: ID
        }, cD) : pD.instantiateHierarchy(ID, CD, cD);
        return ID
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(DD) {
        let CD = super.toString(DD);
        if (CD += ", n vertices: " + this.getTotalVertices(), CD += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let cD = 0; cD < this.animations.length; cD++) CD += ", animation[0]: " + this.animations[cD].toString(DD);
        if (DD)
          if (this._geometry) {
            const DD = this.ncD(),
              cD = this.getVerticesData(xD.k.PositionKind);
            cD && DD && (CD += ", flat shading: " + (cD.length / 3 === DD.length ? "YES" : "NO"))
          } else CD += ", flat shading: UNKNOWN";
        return CD
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
        this._internalMeshDataInfo._LODLevels.sort(((CD, cD) => CD.distanceOrScreenCoverage < cD.distanceOrScreenCoverage ? DD : CD.distanceOrScreenCoverage > cD.distanceOrScreenCoverage ? -DD : 0))
      }
      addLODLevel(DD, CD) {
        if (CD && CD._masterMesh) return TD.e.Warn("You cannot use a mesh as LOD level twice"), this;
        const cD = new dD(DD, CD);
        return this._internalMeshDataInfo._LODLevels.push(cD), CD && (CD._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(DD) {
        const CD = this._internalMeshDataInfo;
        for (let cD = 0; cD < CD._LODLevels.length; cD++) {
          const ID = CD._LODLevels[cD];
          if (ID.distanceOrScreenCoverage === DD) return ID.mesh
        }
        return null
      }
      removeLODLevel(DD) {
        const CD = this._internalMeshDataInfo;
        for (let cD = 0; cD < CD._LODLevels.length; cD++) CD._LODLevels[cD].mesh === DD && (CD._LODLevels.splice(cD, 1), DD && (DD._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(DD, CD) {
        const cD = this._internalMeshDataInfo;
        if (!cD._LODLevels || 0 === cD._LODLevels.length) return this;
        const ID = CD || this.VJ().rcD,
          pD = DD.mode === OD.c.ORTHOGRAPHIC_CAMERA ? DD.minZ : ID.centerWorld.subtract(DD.globalPosition).length();
        let iD = pD,
          fD = 1;
        if (cD._useLODScreenCoverage) {
          const CD = DD.screenArea;
          let cD = ID.radiusWorld * DD.minZ / pD;
          cD = cD * cD * Math.PI, iD = cD / CD, fD = -1
        }
        if (fD * cD._LODLevels[cD._LODLevels.length - 1].distanceOrScreenCoverage > fD * iD) return this.onLODLevelSelection && this.onLODLevelSelection(iD, this, this), this;
        for (let bD = 0; bD < cD._LODLevels.length; bD++) {
          const DD = cD._LODLevels[bD];
          if (fD * DD.distanceOrScreenCoverage < fD * iD) {
            if (DD.mesh) {
              if (4 === DD.mesh.delayLoadState) return DD.mesh._checkDelayState(), this;
              if (2 === DD.mesh.delayLoadState) return this;
              DD.mesh._preActivate(), DD.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(iD, this, DD.mesh), DD.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(iD, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(DD, CD, cD, ID) {
        if (!this._geometry) return null;
        let pD = ID ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[DD]?.getFloatData(this.instances.length + 1, cD || CD && 1 !== this._geometry.meshes.length);
        return pD || (pD = this._geometry.getVerticesData(DD, CD, cD)), pD
      }
      copyVerticesData(DD, CD) {
        this._geometry && this._geometry.copyVerticesData(DD, CD)
      }
      getVertexBuffer(DD, CD) {
        return this._geometry ? (CD ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[DD]) ?? this._geometry.getVertexBuffer(DD) : null
      }
      isVerticesDataPresent(DD, CD) {
        return this._geometry ? !CD && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[DD] || this._geometry.isVerticesDataPresent(DD) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(DD)
      }
      isVertexBufferUpdatable(DD, CD) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(DD);
        if (!CD) {
          const CD = this._userInstancedBuffersStorage?.vertexBuffers[DD];
          if (CD) return CD.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(DD)
      }
      getVerticesDataKinds(DD) {
        if (!this._geometry) {
          const DD = [];
          if (this._delayInfo)
            for (const CD of this._delayInfo) DD.push(CD);
          return DD
        }
        const CD = this._geometry.getVerticesDataKinds();
        if (!DD && this._userInstancedBuffersStorage)
          for (const cD in this._userInstancedBuffersStorage.vertexBuffers) - 1 === CD.indexOf(cD) && CD.push(cD);
        return CD
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      ncD(DD, CD) {
        return this._geometry ? this._geometry.ncD(DD, CD) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(DD)) return !1;
        if (!this.IH || 0 === this.IH.length) return !0;
        if (!DD) return !0;
        const cD = this.DZ(),
          ID = this.hq(),
          pD = CD || cD.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const iD = this.material || ID.defaultMaterial;
        if (iD)
          if (iD._storeEffectOnSubMeshes)
            for (const bD of this.IH) {
              const DD = bD.iZ();
              if (DD)
                if (DD._storeEffectOnSubMeshes) {
                  if (!DD.isReadyForSubMesh(this, bD, pD)) return !1
                } else if (!DD.isReady(this, pD)) return !1
            } else if (!iD.isReady(this, pD)) return !1;
        const fD = cD.currentRenderPassId;
        for (const bD of this.lightSources) {
          const DD = bD.getShadowGenerators();
          if (!DD) continue;
          const CD = DD.values();
          for (let ID = CD.next(); !0 !== ID.done; ID = CD.next()) {
            const DD = ID.value;
            if (DD && (!DD.getShadowMap()?.renderList || DD.getShadowMap()?.renderList && -1 !== DD.getShadowMap()?.renderList?.indexOf(this))) {
              const CD = DD.getShadowMap().renderPassIds ?? [cD.currentRenderPassId];
              for (let ID = 0; ID < CD.length; ++ID) {
                cD.currentRenderPassId = CD[ID];
                for (const CD of this.IH)
                  if (!DD.isReady(CD, pD, CD.iZ()?.needAlphaBlendingForMesh(this) ?? !1)) return cD.currentRenderPassId = fD, !1
              }
              cD.currentRenderPassId = fD
            }
          }
        }
        for (const bD of this._internalMeshDataInfo._LODLevels)
          if (bD.mesh && !bD.mesh.isReady(pD)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      fZ() {
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
        let CD = this._instanceDataStorage.renderPasses[DD];
        return CD || (CD = new WD, this._instanceDataStorage.renderPasses[DD] = CD), CD
      }
      _preActivate() {
        const DD = this._internalMeshDataInfo,
          CD = this.hq().getRenderId();
        return DD._preActivateId === CD || (DD._preActivateId = CD, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(DD) {
        const CD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return CD.visibleInstances && (CD.visibleInstances.intermediateDefaultRenderId = DD), this
      }
      _registerInstanceForRenderId(DD, CD) {
        const cD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return cD.visibleInstances || (cD.visibleInstances = {
          defaultRenderId: CD,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), cD.visibleInstances[CD] || (void 0 === cD.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete cD.visibleInstances[cD.previousRenderId], cD.previousRenderId = CD, cD.visibleInstances[CD] = new Array), cD.visibleInstances[CD].push(DD), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.pZ || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let DD, CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.VJ().isLocked) return this;
        DD = "object" === typeof CD ? CD : {
          applySkeleton: CD,
          applyMorph: cD
        };
        const ID = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(DD, null, xD.k.PositionKind), ID), this
      }
      _createGlobalSubMesh(DD) {
        const CD = this.getTotalVertices();
        if (!CD || !this.ncD()) return null;
        if (this.IH && this.IH.length > 0) {
          const cD = this.ncD();
          if (!cD) return null;
          const ID = cD.length;
          let pD = !1;
          if (DD) pD = !0;
          else
            for (const DD of this.IH) {
              if (DD.indexStart + DD.indexCount > ID) {
                pD = !0;
                break
              }
              if (DD.verticesStart + DD.verticesCount > CD) {
                pD = !0;
                break
              }
            }
          if (!pD) return this.IH[0]
        }
        return this.releaseSubMeshes(), new aD.c(0, 0, CD, 0, this.getTotalIndices() || (this.isUnIndexed ? CD : 0), this)
      }
      subdivide(DD) {
        if (DD < 1) return;
        const CD = this.getTotalIndices();
        let cD = CD / DD | 0,
          ID = 0;
        for (; cD % 3 !== 0;) cD++;
        this.releaseSubMeshes();
        for (let pD = 0; pD < DD && !(ID >= CD); pD++) aD.c.CreateFromIndices(0, ID, ID + cD >= CD ? CD - ID : cD, this, void 0, !1), ID += cD;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(DD, CD, cD, ID);
        else {
          const ID = new qD.c;
          ID.set(CD, DD);
          const pD = this.hq();
          new JD.e(JD.e.RandomId(), pD, ID, cD, this)
        }
        return this
      }
      removeVerticesData(DD) {
        this._geometry && this._geometry.removeVerticesData(DD)
      }
      markVerticesDataAsUpdatable(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cD = this.getVertexBuffer(DD);
        cD && cD.isUpdatable() !== CD && this.setVerticesData(DD, this.getVerticesData(DD), CD)
      }
      setVerticesBuffer(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = JD.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(DD, cD, CD), this
      }
      updateVerticesData(DD, CD, cD, ID) {
        return this._geometry ? (ID ? (this.makeGeometryUnique(), this.updateVerticesData(DD, CD, cD, !1)) : this._geometry.updateVerticesData(DD, CD, cD), this) : this
      }
      updateMeshPositions(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cD = this.getVerticesData(xD.k.PositionKind);
        if (!cD) return this;
        if (DD(cD), this.updateVerticesData(xD.k.PositionKind, cD, !1, !1), CD) {
          const DD = this.ncD(),
            CD = this.getVerticesData(xD.k.NormalKind);
          if (!CD) return this;
          qD.c.ComputeNormals(cD, DD, CD), this.updateVerticesData(xD.k.NormalKind, CD, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const DD = this._geometry,
          CD = this._geometry.copy(JD.e.RandomId());
        return DD.releaseForMesh(this, !0), CD.applyToMesh(this), this
      }
      setIndexBuffer(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pD = this._geometry;
        pD || (pD = new JD.e(JD.e.RandomId(), this.hq(), void 0, void 0, this)), pD.setIndexBuffer(DD, CD, cD, ID)
      }
      setIndices(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(DD, CD, cD, ID);
        else {
          const ID = new qD.c;
          ID.indices = DD;
          const pD = this.hq();
          new JD.e(JD.e.RandomId(), pD, ID, cD, this, CD)
        }
        return this
      }
      updateIndices(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(DD, CD, cD), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(DD, CD, cD) {
        let ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const pD = this.hq().DZ();
        let iD;
        if (this._unIndexed)
          if (this._getRenderingFillMode(cD) === VD.d.WireFrameFillMode) iD = DD._getLinesIndexBuffer(this.ncD(), pD);
          else iD = null;
        else switch (this._getRenderingFillMode(cD)) {
          case VD.d.PointFillMode:
            iD = null;
            break;
          case VD.d.WireFrameFillMode:
            iD = DD._getLinesIndexBuffer(this.ncD(), pD);
            break;
          default:
          case VD.d.TriangleFillMode:
            iD = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(CD, iD, ID)
      }
      _bindDirect(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(DD), cD && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const DD = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const CD in DD) this._userInstancedBuffersStorage.vertexBuffers[CD] = DD[CD]
          }
          this._geometry._bind(DD, CD, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(DD, CD);
        return this
      }
      _draw(DD, CD, cD) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const ID = this.hq().DZ(),
          pD = ID._currentMaterialContext,
          iD = pD && pD.useVertexPulling;
        return this._unIndexed && CD !== VD.d.WireFrameFillMode || CD == VD.d.PointFillMode ? ID.drawArraysType(CD, DD.verticesStart, DD.verticesCount, this.forcedInstanceCount || cD) : CD == VD.d.WireFrameFillMode ? ID.drawElementsType(CD, 0, DD._linesIndexCount, this.forcedInstanceCount || cD) : iD ? ID.drawArraysType(CD, DD.indexStart, DD.indexCount, this.forcedInstanceCount || cD) : ID.drawElementsType(CD, DD.indexStart, DD.indexCount, this.forcedInstanceCount || cD), this
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
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (CD) return cD.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[DD] = !1, cD.batchCacheReplacementModeInFrozenMode.renderSelf[DD] = !0, cD.batchCacheReplacementModeInFrozenMode;
          if (cD.previousBatch) return cD.previousBatch
        }
        const ID = this.hq(),
          pD = ID._isInIntermediateRendering(),
          iD = pD ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          fD = cD.batchCache;
        if (fD.mustReturn = !1, fD.renderSelf[DD] = CD || !iD && this.isEnabled() && this.isVisible, fD.visibleInstances[DD] = null, cD.visibleInstances && !CD) {
          const CD = cD.visibleInstances,
            iD = ID.getRenderId(),
            bD = pD ? CD.intermediateDefaultRenderId : CD.defaultRenderId;
          fD.visibleInstances[DD] = CD[iD], !fD.visibleInstances[DD] && bD && (fD.visibleInstances[DD] = CD[bD])
        }
        return fD.hardwareInstancedRendering[DD] = !CD && this._instanceDataStorage.hardwareInstancedRendering && null !== fD.visibleInstances[DD] && void 0 !== fD.visibleInstances[DD], cD.previousBatch = fD, fD
      }
      _updateInstancedBuffers(DD, CD, cD, ID, pD, iD) {
        const fD = CD.visibleInstances[DD._id],
          bD = fD ? fD.length : 0,
          QD = CD.parent,
          wD = this._instanceDataStorage;
        let SD = QD.instancesBuffer,
          BD = QD.instancesPreviousBuffer,
          yD = 0,
          MD = 0;
        const tD = CD.renderSelf[DD._id],
          ZD = this._scene.floatingOriginOffset,
          oD = !SD || cD !== QD.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !QD.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || wD.isFrozen && !oD) MD = (tD ? 1 : 0) + bD;
        else {
          const CD = this.getWorldMatrix();
          if (tD) {
            this._scene.needsPreviousWorldMatrices && (wD.masterMeshPreviousWorldMatrix ? (wD.masterMeshPreviousWorldMatrix.copyToArray(QD.instancesPreviousData, yD), wD.masterMeshPreviousWorldMatrix.YCD(CD)) : (wD.masterMeshPreviousWorldMatrix = CD.clone(), wD.masterMeshPreviousWorldMatrix.copyToArray(QD.instancesPreviousData, yD))), CD.copyToArray(QD.instancesData, yD);
            const DD = CD.XcD();
            QD.instancesData[yD + 12] = DD[12] - ZD.x, QD.instancesData[yD + 13] = DD[13] - ZD.y, QD.instancesData[yD + 14] = DD[14] - ZD.z, yD += 16, MD++
          }
          if (fD) {
            if (rD.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && DD.iZ()?.needAlphaBlendingForMesh(DD.getRenderingMesh())) {
              const DD = this._scene.activeCamera.globalPosition;
              for (let CD = 0; CD < fD.length; CD++) {
                const cD = fD[CD];
                cD._distanceToCamera = PD.p.Distance(cD.VJ().rcD.centerWorld, DD)
              }
              fD.sort(((DD, CD) => DD._distanceToCamera > CD._distanceToCamera ? -1 : DD._distanceToCamera < CD._distanceToCamera ? 1 : 0))
            }
            for (let DD = 0; DD < fD.length; DD++) {
              const CD = fD[DD],
                cD = CD.getWorldMatrix();
              cD.copyToArray(QD.instancesData, yD), this._scene.needsPreviousWorldMatrices && (CD._previousWorldMatrix ? (CD._previousWorldMatrix.copyToArray(QD.instancesPreviousData, yD), CD._previousWorldMatrix.YCD(cD)) : (CD._previousWorldMatrix = cD.clone(), CD._previousWorldMatrix.copyToArray(QD.instancesPreviousData, yD)));
              const ID = cD.XcD();
              QD.instancesData[yD + 12] = ID[12] - ZD.x, QD.instancesData[yD + 13] = ID[13] - ZD.y, QD.instancesData[yD + 14] = ID[14] - ZD.z, yD += 16, MD++
            }
          }
        }
        if (oD) {
          let DD;
          if (SD && SD.dispose(), BD && BD.dispose(), SD = new xD.c(ID, QD.instancesData, !0, 16, !1, !0), QD.instancesBuffer = SD, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.DZ().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) DD = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const CD = this._instanceDataStorage.engine.currentRenderPassId;
            DD = this._userInstancedBuffersStorage.renderPasses[CD], DD || (this._userInstancedBuffersStorage.renderPasses[CD] = DD = {})
          }
          DD.world0 = SD.createVertexBuffer("world0", 0, 4), DD.world1 = SD.createVertexBuffer("world1", 4, 4), DD.world2 = SD.createVertexBuffer("world2", 8, 4), DD.world3 = SD.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (BD = new xD.c(ID, QD.instancesPreviousData, !0, 16, !1, !0), QD.instancesPreviousBuffer = BD, DD.previousWorld0 = BD.createVertexBuffer("previousWorld0", 0, 4), DD.previousWorld1 = BD.createVertexBuffer("previousWorld1", 4, 4), DD.previousWorld2 = BD.createVertexBuffer("previousWorld2", 8, 4), DD.previousWorld3 = BD.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (SD.updateDirectly(QD.instancesData, 0, MD), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || BD.updateDirectly(QD.instancesPreviousData, 0, MD));
        this._processInstancedBuffers(fD, tD), iD && void 0 !== pD && (this.hq()._activeIndices.addCount(DD.indexCount * MD, !1), ID._currentDrawContext && (ID._currentDrawContext.useInstancing = !0), this._bind(DD, iD, pD), this._draw(DD, pD, MD)), !this._scene.needsPreviousWorldMatrices || oD || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || BD.updateDirectly(QD.instancesData, 0, MD)
      }
      _renderWithInstances(DD, CD, cD, ID, pD) {
        const iD = cD.visibleInstances[DD._id],
          fD = iD ? iD.length : 0,
          bD = cD.parent,
          QD = bD.instancesBufferSize,
          wD = 16 * (fD + 1) * 4;
        for (; bD.instancesBufferSize < wD;) bD.instancesBufferSize *= 2;
        return bD.instancesData && QD == bD.instancesBufferSize || (bD.instancesData = new Float32Array(bD.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !bD.instancesPreviousData || QD != bD.instancesBufferSize) && (bD.instancesPreviousData = new Float32Array(bD.instancesBufferSize / 4)), this._updateInstancedBuffers(DD, cD, QD, pD, CD, ID), pD.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(DD, CD, cD, ID) {
        const pD = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.hq()._activeIndices.addCount(DD.indexCount * pD, !1), ID._currentDrawContext && (ID._currentDrawContext.useInstancing = !0), this._bind(DD, cD, CD), this._draw(DD, CD, pD), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, pD) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), ID.unbindInstanceAttributes()
      }
      _processInstancedBuffers(DD, CD) {}
      _processRendering(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = this.hq(),
          wD = QD.DZ();
        if (ID = this._getRenderingFillMode(ID), iD && CD.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(CD, ID, cD, wD), this;
        if (iD) this._renderWithInstances(CD, ID, pD, cD, wD);
        else {
          wD._currentDrawContext && (wD._currentDrawContext.useInstancing = !1);
          let cD = 0;
          pD.renderSelf[CD._id] && (fD && fD(!1, DD.getWorldMatrix(), bD), cD++, this._draw(CD, ID, this._instanceDataStorage.overridenInstanceCount));
          const iD = pD.visibleInstances[CD._id];
          if (iD) {
            const DD = iD.length;
            cD += DD;
            for (let cD = 0; cD < DD; cD++) {
              const DD = iD[cD].getWorldMatrix();
              fD && fD(!0, DD, bD), this._draw(CD, ID)
            }
          }
          QD._activeIndices.addCount(CD.indexCount * cD, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD?.instancesBuffer && (CD && DD.instancesBuffer.dispose(), DD.instancesBuffer = null), DD?.instancesPreviousBuffer && (CD && DD.instancesPreviousBuffer.dispose(), DD.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const CD in this._instanceDataStorage.renderPasses) {
          const cD = this._instanceDataStorage.renderPasses[CD];
          this._disposeInstanceDataStorageRenderPass(cD, DD)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, DD), this._userInstancedBuffersStorage) {
          for (const CD in this._userInstancedBuffersStorage.vertexBuffers) {
            const cD = this._userInstancedBuffersStorage.vertexBuffers[CD];
            cD && (DD && cD.dispose(), this._userInstancedBuffersStorage.vertexBuffers[CD] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(DD)
      }
      _releaseRenderPassId(DD) {
        const CD = this._instanceDataStorage.renderPasses[DD];
        if (CD && (this._disposeInstanceDataStorageRenderPass(CD, !0), delete this._instanceDataStorage.renderPasses[DD]), this._userInstancedBuffersStorage?.renderPasses) {
          const CD = this._userInstancedBuffersStorage.renderPasses[DD];
          if (CD)
            for (const DD in CD) CD[DD]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[DD]
        }
        const cD = this._userInstancedBuffersStorage?.interleavedBuffers;
        cD?.[DD] && (cD[DD].buffer.dispose(), delete cD[DD])
      }
      _freeze() {
        if (this.IH) {
          for (let DD = 0; DD < this.IH.length; DD++) this._getInstancesRenderList(DD);
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
      renderWithRenderPassId(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const iD = this._scene.DZ(),
          fD = iD.currentRenderPassId;
        if (void 0 !== DD && (iD.currentRenderPassId = DD), ID)(!pD || pD && ID.isInFrustum(this._scene._frustumPlanes)) && this.render(ID, !!CD, cD);
        else
          for (let bD = 0; bD < this.IH.length; bD++) {
            const DD = this.IH[bD];
            (!pD || pD && DD.isInFrustum(this._scene._frustumPlanes)) && this.render(DD, !!CD, cD)
          }
        return void 0 !== DD && (iD.currentRenderPassId = fD), this
      }
      directRender() {
        if (!this.IH) return this;
        for (const DD of this.IH) this.render(DD, !1);
        return this
      }
      render(DD, CD, cD) {
        const ID = this.hq(),
          pD = ID.DZ();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const iD = ID.activeCameras?.length ?? 0,
          fD = iD > 1 && ID.activeCamera === ID.activeCameras[0] || iD <= 1,
          bD = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== pD.currentRenderPassId;
        if (fD && this._checkOcclusionQuery(bD) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const QD = this._getInstancesRenderList(DD._id, !!cD);
        if (QD.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let wD = 0,
          SD = null;
        this.ignoreCameraMaxZ && ID.activeCamera && !ID._isInIntermediateRendering() && (wD = ID.activeCamera.maxZ, SD = ID.activeCamera, ID.activeCamera.maxZ = 0, ID.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const BD = DD.getRenderingMesh(),
          yD = QD.hardwareInstancedRendering[DD._id] || BD.hasThinInstances || !!this._userInstancedBuffersStorage && !DD.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          MD = this._instanceDataStorage,
          tD = DD.iZ();
        if (!tD) return SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), this;
        if (MD.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === tD) {
          if (tD._storeEffectOnSubMeshes && !DD._drawWrapper?._wasPreviouslyReady || !tD._storeEffectOnSubMeshes && !tD._getDrawWrapper()._wasPreviouslyReady) return SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), this
        } else {
          if (tD._storeEffectOnSubMeshes) {
            if (!tD.isReadyForSubMesh(this, DD, yD)) return SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), this
          } else if (!tD.isReady(this, yD)) return SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = tD
        }
        if (CD) {
          const DD = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === DD.alphaModes.length) pD.setAlphaMode(DD.alphaMode);
          else
            for (let CD = 0; CD < DD.alphaModes.length; CD++) {
              const cD = DD.alphaModes[CD];
              pD.setAlphaMode(void 0 !== cD ? cD : 2, !1, CD)
            }
        }
        let ZD;
        ZD = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? DD._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const oD = ZD?.effect ?? null;
        for (let OD = 0, PD = ID._beforeRenderingMeshStage; OD < PD.length; OD++) {
          PD[OD].action(this, DD, QD, oD)
        }
        if (!ZD || !oD) return SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), this;
        const vD = cD || this;
        let ND;
        if (!MD.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const DD = vD._getWorldMatrixDeterminant();
          ND = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), DD < 0 && (ND = ND === VD.d.ClockWiseSideOrientation ? VD.d.CounterClockWiseSideOrientation : VD.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = ND
        }
        const gD = this._internalMeshDataInfo._effectiveMaterial._preBind(ZD, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && pD.setDepthWrite(!0);
        const XD = this._internalMeshDataInfo._effectiveMaterial,
          mD = XD.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), yD || this._bind(DD, oD, mD, !1);
        const nD = vD.getWorldMatrix();
        XD._storeEffectOnSubMeshes ? XD.bindForSubMesh(nD, this, DD) : XD.bind(nD, this);
        try {
          zD.d._BindAttachmentsForEffect(pD, oD) && (!XD.backFaceCulling && XD.separateCullingPass && (pD.setState(!0, XD.zOffset, !1, !gD, XD.cullBackFaces, XD.stencil, XD.zOffsetUnits), this._processRendering(this, DD, oD, mD, QD, yD, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), pD.setState(!0, XD.zOffset, !1, gD, XD.cullBackFaces, XD.stencil, XD.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(DD)), this._processRendering(this, DD, oD, mD, QD, yD, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          zD.d._RestoreAttachments(pD)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let OD = 0, PD = ID._afterRenderingMeshStage; OD < PD.length; OD++) {
          PD[OD].action(this, DD, QD, oD)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), SD && (SD.maxZ = wD, ID.updateTransformMatrix(!0)), 2 !== ID.performancePriority || MD.isFrozen || this._freeze(), this
      }
      _renderRunFollower(DD, CD) {
        const cD = this._scene,
          ID = cD._engine;
        if (ID.isWebGPU || DD._mesh !== this || 0 !== this.instances.length || this.render !== rD.prototype.render) return !1;
        const pD = DD.iZ();
        if (!pD || pD !== cD._cachedMaterial || void 0 === pD._canBindRunFollower) return !1;
        const iD = DD._drawWrapper,
          fD = iD?.effect;
        if (!fD || fD !== cD._cachedEffect || this.visibility !== cD._cachedVisibility || iD._forceRebindOnNextCall) return !1;
        const bD = this.hasThinInstances;
        if (!bD && this._userInstancedBuffersStorage) return !1;
        if (!iD._wasPreviouslyReady || iD._wasPreviouslyUsingInstances !== bD) return !1;
        const QD = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || cD._isInIntermediateRendering() || 0 !== cD._beforeRenderingMeshStage.length || 0 !== cD._afterRenderingMeshStage.length || QD._onBeforeRenderObservable?.hasObservers() || QD._onBeforeBindObservable?.hasObservers() || QD._onAfterRenderObservable?.hasObservers()) return !1;
        const wD = this.occlusionType;
        if (void 0 !== wD && wD !== KD.b.OCCLUSION_TYPE_NONE || !pD._canBindRunFollower(cD, ID, this, DD, fD)) return !1;
        const SD = this._internalAbstractMeshDataInfo,
          BD = SD._isActiveIntermediate;
        BD ? SD._isActiveIntermediate = !1 : SD._isActive = !1;
        const yD = cD.activeCameras?.length ?? 0;
        (yD > 1 && cD.activeCamera === cD.activeCameras[0] || yD <= 1) && this._checkOcclusionQuery(!1);
        const MD = this._getInstancesRenderList(DD._id);
        if (MD.mustReturn) return !0;
        if (!bD && !MD.renderSelf[DD._id]) return BD ? SD._isActiveIntermediate = !0 : SD._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (QD._effectiveMaterial = pD, CD)
          if (1 === pD.alphaModes.length) ID.setAlphaMode(pD.alphaMode);
          else
            for (let ZD = 0; ZD < pD.alphaModes.length; ZD++) {
              const DD = pD.alphaModes[ZD];
              ID.setAlphaMode(void 0 !== DD ? DD : 2, !1, ZD)
            }
        if (pD.backFaceCulling || null !== pD.sideOrientation || pD._twoSidedLighting) {
          const DD = this._getWorldMatrixDeterminant();
          let CD = pD._getEffectiveOrientation(this);
          DD < 0 && (CD = CD === VD.d.ClockWiseSideOrientation ? VD.d.CounterClockWiseSideOrientation : VD.d.ClockWiseSideOrientation), QD._effectiveSideOrientation = CD
        }
        pD._preBind(iD, QD._effectiveSideOrientation), pD.forceDepthWrite && ID.setDepthWrite(!0);
        const tD = pD.fillMode;
        return bD || this._bind(DD, fD, tD, !1), pD._bindRunFollower(this.getWorldMatrix(), this, DD, fD), this._processRendering(this, DD, fD, tD, MD, bD, this._onBeforeDraw, pD), pD.unbind(), 2 === cD.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(xD.k.MatricesWeightsKind) && (this.isVerticesDataPresent(xD.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const DD = this.getVerticesData(xD.k.MatricesWeightsKind),
          CD = DD.length;
        for (let cD = 0; cD < CD; cD += 4) {
          const CD = DD[cD] + DD[cD + 1] + DD[cD + 2] + DD[cD + 3];
          if (0 === CD) DD[cD] = 1;
          else {
            const ID = 1 / CD;
            DD[cD] *= ID, DD[cD + 1] *= ID, DD[cD + 2] *= ID, DD[cD + 3] *= ID
          }
        }
        this.setVerticesData(xD.k.MatricesWeightsKind, DD)
      }
      _normalizeSkinWeightsAndExtra() {
        const DD = this.getVerticesData(xD.k.MatricesWeightsExtraKind),
          CD = this.getVerticesData(xD.k.MatricesWeightsKind),
          cD = CD.length;
        for (let ID = 0; ID < cD; ID += 4) {
          let cD = CD[ID] + CD[ID + 1] + CD[ID + 2] + CD[ID + 3];
          if (cD += DD[ID] + DD[ID + 1] + DD[ID + 2] + DD[ID + 3], 0 === cD) CD[ID] = 1;
          else {
            const pD = 1 / cD;
            CD[ID] *= pD, CD[ID + 1] *= pD, CD[ID + 2] *= pD, CD[ID + 3] *= pD, DD[ID] *= pD, DD[ID + 1] *= pD, DD[ID + 2] *= pD, DD[ID + 3] *= pD
          }
        }
        this.setVerticesData(xD.k.MatricesWeightsKind, CD), this.setVerticesData(xD.k.MatricesWeightsKind, DD)
      }
      validateSkinning() {
        const DD = this.getVerticesData(xD.k.MatricesWeightsExtraKind),
          CD = this.getVerticesData(xD.k.MatricesWeightsKind);
        if (null === CD || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Nt: "not skinned"
        };
        const cD = CD.length;
        let ID = 0,
          pD = 0,
          iD = 0,
          fD = 0;
        const bD = null === DD ? 4 : 8,
          QD = [];
        for (let MD = 0; MD <= bD; MD++) QD[MD] = 0;
        for (let MD = 0; MD < cD; MD += 4) {
          let cD = CD[MD],
            wD = cD,
            SD = 0 === wD ? 0 : 1;
          for (let pD = 1; pD < bD; pD++) {
            const iD = pD < 4 ? CD[MD + pD] : DD[MD + pD - 4];
            iD > cD && ID++, 0 !== iD && SD++, wD += iD, cD = iD
          }
          if (QD[SD]++, SD > iD && (iD = SD), 0 === wD) pD++;
          else {
            const cD = 1 / wD;
            let ID = 0;
            for (let pD = 0; pD < bD; pD++) ID += pD < 4 ? Math.abs(CD[MD + pD] - CD[MD + pD] * cD) : Math.abs(DD[MD + pD - 4] - DD[MD + pD - 4] * cD);
            ID > .001 && fD++
          }
        }
        const wD = this.skeleton.bones.length,
          SD = this.getVerticesData(xD.k.MatricesIndicesKind),
          BD = this.getVerticesData(xD.k.MatricesIndicesExtraKind);
        let yD = 0;
        for (let MD = 0; MD < cD; MD += 4)
          for (let DD = 0; DD < bD; DD++) {
            const CD = DD < 4 ? SD[MD + DD] : BD[MD + DD - 4];
            (CD >= wD || CD < 0) && yD++
          }
        return {
          skinned: !0,
          valid: 0 === pD && 0 === fD && 0 === yD,
          Nt: "Number of Weights = " + cD / 4 + "\nMaximum influences = " + iD + "\nMissing Weights = " + pD + "\nNot Sorted = " + ID + "\nNot Normalized = " + fD + "\nWeightCounts = [" + QD + "]\nNumber of bones = " + wD + "\nBad Bone Indices = " + yD
        }
      }
      _checkDelayState() {
        const DD = this.hq();
        return this._geometry ? this._geometry.load(DD) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(DD)), this
      }
      _queueLoad(DD) {
        DD.addPendingData(this);
        const CD = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const cD = await DD._loadDelayedFileAsync(this.delayLoadingFile, CD, !0);
            cD instanceof ArrayBuffer ? this._delayLoadingFunction(cD, this) : this._delayLoadingFunction(JSON.parse(cD), this);
            for (const DD of this.instances) DD.refreshBoundingInfo(), DD._syncSubMeshes();
            this.delayLoadState = 1, DD.removePendingData(this)
          } catch (cD) {
            DD.removePendingData(this), DD.jCD || TD.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${cD}`)
          }
        })(), this
      }
      isInFrustum(DD) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(DD) && (this._checkDelayState(), !0))
      }
      setMaterialById(DD) {
        const CD = this.hq().materials;
        let cD;
        for (cD = CD.length - 1; cD > -1; cD--)
          if (CD[cD].id === DD) return this.material = CD[cD], this;
        const ID = this.hq().multiMaterials;
        for (cD = ID.length - 1; cD > -1; cD--)
          if (ID[cD].id === DD) return this.material = ID[cD], this;
        return this
      }
      getAnimatables() {
        const DD = [];
        return this.material && DD.push(this.material), this.skeleton && DD.push(this.skeleton), DD
      }
      bakeTransformIntoVertices(DD) {
        if (!this.isVerticesDataPresent(xD.k.PositionKind)) return this;
        const CD = this.IH.splice(0);
        this._resetPointsArrayCache();
        let cD = this.getVerticesData(xD.k.PositionKind);
        const ID = PD.p.Zero();
        let pD;
        for (pD = 0; pD < cD.length; pD += 3) PD.p.TransformCoordinatesFromFloatsToRef(cD[pD], cD[pD + 1], cD[pD + 2], DD, ID).toArray(cD, pD);
        if (this.setVerticesData(xD.k.PositionKind, cD, this.getVertexBuffer(xD.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(xD.k.NormalKind)) {
          for (cD = this.getVerticesData(xD.k.NormalKind), pD = 0; pD < cD.length; pD += 3) PD.p.TransformNormalFromFloatsToRef(cD[pD], cD[pD + 1], cD[pD + 2], DD, ID).normalize().toArray(cD, pD);
          this.setVerticesData(xD.k.NormalKind, cD, this.getVertexBuffer(xD.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(xD.k.TangentKind)) {
          for (cD = this.getVerticesData(xD.k.TangentKind), pD = 0; pD < cD.length; pD += 4) PD.p.TransformNormalFromFloatsToRef(cD[pD], cD[pD + 1], cD[pD + 2], DD, ID).normalize().toArray(cD, pD);
          this.setVerticesData(xD.k.TangentKind, cD, this.getVertexBuffer(xD.k.TangentKind).isUpdatable())
        }
        return DD.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.IH = CD, this
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
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (CD && void 0 === CD._addToSceneRootNodes) {
          const cD = CD;
          return hD.source = this, hD.doNotCloneChildren = cD.doNotCloneChildren, hD.clonePhysicsImpostor = cD.clonePhysicsImpostor, hD.cloneThinInstances = cD.cloneThinInstances, new rD(DD, this.hq(), hD)
        }
        return new rD(DD, this.hq(), CD, this, cD, ID)
      }
      dispose(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const cD = this._internalMeshDataInfo;
        if (cD._onBeforeDrawObservable && cD._onBeforeDrawObservable.clear(), cD._onBeforeBindObservable && cD._onBeforeBindObservable.clear(), cD._onBeforeRenderObservable && cD._onBeforeRenderObservable.clear(), cD._onAfterRenderObservable && cD._onAfterRenderObservable.clear(), cD._onBetweenPassObservable && cD._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (cD.meshMap)
            for (const DD in cD.meshMap) {
              const CD = cD.meshMap[DD];
              CD && (CD._internalMeshDataInfo._source = null, cD.meshMap[DD] = void 0)
            }
          cD._source && cD._source._internalMeshDataInfo.meshMap && (cD._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const DD = this.hq().meshes;
          for (const CD of DD) {
            const DD = CD;
            DD._internalMeshDataInfo && DD._internalMeshDataInfo._source && DD._internalMeshDataInfo._source === this && (DD._internalMeshDataInfo._source = null)
          }
        }
        cD._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(DD, CD)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(DD, CD, cD, ID, pD, iD) {
        let fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          bD = arguments.length > 7 ? arguments[7] : void 0;
        const QD = this.hq();
        return (0, gD.q)(DD, (DD => {
          const bD = DD.width,
            QD = DD.height,
            wD = this.DZ().createCanvas(bD, QD).getContext("2d");
          wD.drawImage(DD, 0, 0);
          const SD = wD.getImageData(0, 0, bD, QD).data;
          this.applyDisplacementMapFromBuffer(SD, bD, QD, CD, cD, pD, iD, fD), ID && ID(this)
        }), bD || (() => {}), QD.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(DD, CD, cD, ID, pD, iD, fD) {
        let bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(xD.k.PositionKind) || !this.isVerticesDataPresent(xD.k.NormalKind) || !this.isVerticesDataPresent(xD.k.UVKind)) return TD.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const QD = this.getVerticesData(xD.k.PositionKind, !0, !0),
          wD = this.getVerticesData(xD.k.NormalKind),
          SD = this.getVerticesData(xD.k.UVKind);
        let BD = PD.p.Zero();
        const yD = PD.p.Zero(),
          MD = PD.n.Zero();
        iD = iD || PD.n.Zero(), fD = fD || new PD.n(1, 1);
        for (let tD = 0; tD < QD.length; tD += 3) {
          PD.p.FromArrayToRef(QD, tD, BD), PD.p.FromArrayToRef(wD, tD, yD), PD.n.FromArrayToRef(SD, tD / 3 * 2, MD);
          const bD = 4 * ((Math.abs(MD.x * fD.x + iD.x % 1) * (CD - 1) % CD | 0) + (Math.abs(MD.y * fD.y + iD.y % 1) * (cD - 1) % cD | 0) * CD),
            ZD = .3 * (DD[bD] / 255) + .59 * (DD[bD + 1] / 255) + .11 * (DD[bD + 2] / 255);
          yD.normalize(), yD.scaleInPlace(ID + (pD - ID) * ZD), BD = BD.add(yD), BD.toArray(QD, tD)
        }
        return qD.c.ComputeNormals(QD, this.ncD(), wD), bD ? (this.setVerticesData(xD.k.PositionKind, QD), this.setVerticesData(xD.k.NormalKind, wD), this.setVerticesData(xD.k.UVKind, SD)) : (this.updateVerticesData(xD.k.PositionKind, QD), this.updateVerticesData(xD.k.NormalKind, wD)), this
      }
      _getFlattenedNormals(DD, CD) {
        const cD = new Float32Array(3 * DD.length);
        let ID = 0;
        const pD = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let iD = 0; iD < DD.length; iD += 3) {
          const fD = PD.p.FromArray(CD, 3 * DD[iD]),
            bD = PD.p.FromArray(CD, 3 * DD[iD + 1]),
            QD = PD.p.FromArray(CD, 3 * DD[iD + 2]),
            wD = fD.subtract(bD),
            SD = QD.subtract(bD),
            BD = PD.p.Normalize(PD.p.Cross(wD, SD));
          pD && BD.scaleInPlace(-1);
          for (let DD = 0; DD < 3; DD++) cD[ID++] = BD.x, cD[ID++] = BD.y, cD[ID++] = BD.z
        }
        return cD
      }
      _convertToUnIndexedMesh() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = this.getVerticesDataKinds().filter((DD => !this.getVertexBuffer(DD)?.getIsInstanced())),
          cD = this.ncD(!1, !0),
          ID = {},
          pD = (DD, CD) => {
            const ID = new Float32Array(cD.length * CD);
            let pD = 0;
            for (let iD = 0; iD < cD.length; iD++)
              for (let fD = 0; fD < CD; fD++) ID[pD++] = DD[cD[iD] * CD + fD];
            return ID
          },
          iD = this.VJ(),
          fD = this.geometry ? this.IH.slice(0) : [];
        for (const bD of CD) ID[bD] = this.getVerticesData(bD);
        for (const bD of CD) {
          const CD = this.getVertexBuffer(bD),
            iD = CD.getSize();
          if (DD && bD === xD.k.NormalKind) {
            const DD = this._getFlattenedNormals(cD, ID[xD.k.PositionKind]);
            this.setVerticesData(xD.k.NormalKind, DD, CD.isUpdatable(), iD)
          } else this.setVerticesData(bD, pD(ID[bD], iD), CD.isUpdatable(), iD)
        }
        if (this.morphTargetManager) {
          for (let CD = 0; CD < this.morphTargetManager.numTargets; CD++) {
            const ID = this.morphTargetManager.getTarget(CD),
              iD = ID.getPositions();
            ID.QfD(pD(iD, 3));
            const fD = ID.getNormals();
            fD && ID.setNormals(DD ? this._getFlattenedNormals(cD, iD) : pD(fD, 3));
            const bD = ID.getTangents();
            bD && ID.setTangents(pD(bD, 3));
            const QD = ID.getUVs();
            QD && ID.setUVs(pD(QD, 2));
            const wD = ID.getColors();
            wD && ID.setColors(pD(wD, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let bD = 0; bD < cD.length; bD++) cD[bD] = bD;
        this.setIndices(cD), this._unIndexed = !0, this.releaseSubMeshes();
        for (const bD of fD) {
          const DD = bD.VJ();
          aD.c.AddToMesh(bD.materialIndex, bD.indexStart, bD.indexCount, bD.indexStart, bD.indexCount, this).setBoundingInfo(DD)
        }
        return this.setBoundingInfo(iD), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = qD.c.ExtractFromMesh(this);
        let cD;
        if (DD && this.isVerticesDataPresent(xD.k.NormalKind) && CD.normals) {
          for (cD = 0; cD < CD.normals.length; cD++) CD.normals[cD] *= -1;
          this.setVerticesData(xD.k.NormalKind, CD.normals, this.isVertexBufferUpdatable(xD.k.NormalKind))
        }
        if (CD.indices) {
          let DD;
          for (cD = 0; cD < CD.indices.length; cD += 3) DD = CD.indices[cD + 1], CD.indices[cD + 1] = CD.indices[cD + 2], CD.indices[cD + 2] = DD;
          this.setIndices(CD.indices, null, this.isVertexBufferUpdatable(xD.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const CD = qD.c.ExtractFromMesh(this),
          cD = CD.indices && !Array.isArray(CD.indices) && Array.from ? Array.from(CD.indices) : CD.indices,
          ID = CD.positions && !Array.isArray(CD.positions) && Array.from ? Array.from(CD.positions) : CD.positions,
          pD = CD.uvs && !Array.isArray(CD.uvs) && Array.from ? Array.from(CD.uvs) : CD.uvs,
          iD = CD.normals && !Array.isArray(CD.normals) && Array.from ? Array.from(CD.normals) : CD.normals;
        if (cD && ID) {
          CD.indices = cD, CD.positions = ID, pD && (CD.uvs = pD), iD && (CD.normals = iD);
          const fD = DD + 1,
            bD = [];
          for (let DD = 0; DD < fD + 1; DD++) bD[DD] = [];
          let QD, wD;
          const SD = new PD.p(0, 0, 0),
            BD = new PD.p(0, 0, 0),
            yD = new PD.n(0, 0),
            MD = [],
            tD = [],
            ZD = [];
          let oD, vD, ND, gD = ID.length;
          pD && (vD = pD.length), iD && (ND = iD.length);
          for (let DD = 0; DD < cD.length; DD += 3) {
            tD[0] = cD[DD], tD[1] = cD[DD + 1], tD[2] = cD[DD + 2];
            for (let DD = 0; DD < 3; DD++)
              if (QD = tD[DD], wD = tD[(DD + 1) % 3], void 0 === ZD[QD] && void 0 === ZD[wD] ? (ZD[QD] = [], ZD[wD] = []) : (void 0 === ZD[QD] && (ZD[QD] = []), void 0 === ZD[wD] && (ZD[wD] = [])), void 0 === ZD[QD][wD] && void 0 === ZD[wD][QD]) {
                ZD[QD][wD] = [], SD.x = (ID[3 * wD] - ID[3 * QD]) / fD, SD.y = (ID[3 * wD + 1] - ID[3 * QD + 1]) / fD, SD.z = (ID[3 * wD + 2] - ID[3 * QD + 2]) / fD, iD && (BD.x = (iD[3 * wD] - iD[3 * QD]) / fD, BD.y = (iD[3 * wD + 1] - iD[3 * QD + 1]) / fD, BD.z = (iD[3 * wD + 2] - iD[3 * QD + 2]) / fD), pD && (yD.x = (pD[2 * wD] - pD[2 * QD]) / fD, yD.y = (pD[2 * wD + 1] - pD[2 * QD + 1]) / fD), ZD[QD][wD].push(QD);
                for (let DD = 1; DD < fD; DD++) ZD[QD][wD].push(ID.length / 3), ID[gD++] = ID[3 * QD] + DD * SD.x, ID[gD++] = ID[3 * QD + 1] + DD * SD.y, ID[gD++] = ID[3 * QD + 2] + DD * SD.z, iD && (iD[ND++] = iD[3 * QD] + DD * BD.x, iD[ND++] = iD[3 * QD + 1] + DD * BD.y, iD[ND++] = iD[3 * QD + 2] + DD * BD.z), pD && (pD[vD++] = pD[2 * QD] + DD * yD.x, pD[vD++] = pD[2 * QD + 1] + DD * yD.y);
                ZD[QD][wD].push(wD), ZD[wD][QD] = [], oD = ZD[QD][wD].length;
                for (let DD = 0; DD < oD; DD++) ZD[wD][QD][DD] = ZD[QD][wD][oD - 1 - DD]
              } bD[0][0] = cD[DD], bD[1][0] = ZD[cD[DD]][cD[DD + 1]][1], bD[1][1] = ZD[cD[DD]][cD[DD + 2]][1];
            for (let CD = 2; CD < fD; CD++) {
              bD[CD][0] = ZD[cD[DD]][cD[DD + 1]][CD], bD[CD][CD] = ZD[cD[DD]][cD[DD + 2]][CD], SD.x = (ID[3 * bD[CD][CD]] - ID[3 * bD[CD][0]]) / CD, SD.y = (ID[3 * bD[CD][CD] + 1] - ID[3 * bD[CD][0] + 1]) / CD, SD.z = (ID[3 * bD[CD][CD] + 2] - ID[3 * bD[CD][0] + 2]) / CD, iD && (BD.x = (iD[3 * bD[CD][CD]] - iD[3 * bD[CD][0]]) / CD, BD.y = (iD[3 * bD[CD][CD] + 1] - iD[3 * bD[CD][0] + 1]) / CD, BD.z = (iD[3 * bD[CD][CD] + 2] - iD[3 * bD[CD][0] + 2]) / CD), pD && (yD.x = (pD[2 * bD[CD][CD]] - pD[2 * bD[CD][0]]) / CD, yD.y = (pD[2 * bD[CD][CD] + 1] - pD[2 * bD[CD][0] + 1]) / CD);
              for (let DD = 1; DD < CD; DD++) bD[CD][DD] = ID.length / 3, ID[gD++] = ID[3 * bD[CD][0]] + DD * SD.x, ID[gD++] = ID[3 * bD[CD][0] + 1] + DD * SD.y, ID[gD++] = ID[3 * bD[CD][0] + 2] + DD * SD.z, iD && (iD[ND++] = iD[3 * bD[CD][0]] + DD * BD.x, iD[ND++] = iD[3 * bD[CD][0] + 1] + DD * BD.y, iD[ND++] = iD[3 * bD[CD][0] + 2] + DD * BD.z), pD && (pD[vD++] = pD[2 * bD[CD][0]] + DD * yD.x, pD[vD++] = pD[2 * bD[CD][0] + 1] + DD * yD.y)
            }
            bD[fD] = ZD[cD[DD + 1]][cD[DD + 2]], MD.push(bD[0][0], bD[1][0], bD[1][1]);
            for (let DD = 1; DD < fD; DD++) {
              let CD;
              for (CD = 0; CD < DD; CD++) MD.push(bD[DD][CD], bD[DD + 1][CD], bD[DD + 1][CD + 1]), MD.push(bD[DD][CD], bD[DD + 1][CD + 1], bD[DD][CD + 1]);
              MD.push(bD[DD][CD], bD[DD + 1][CD], bD[DD + 1][CD + 1])
            }
          }
          CD.indices = MD, CD.applyToMesh(this, this.isVertexBufferUpdatable(xD.k.PositionKind))
        } else TD.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const DD = qD.c.ExtractFromMesh(this),
          CD = DD.uvs,
          cD = DD.indices,
          ID = DD.positions,
          pD = DD.colors,
          iD = DD.matricesIndices,
          fD = DD.matricesWeights,
          bD = DD.matricesIndicesExtra,
          QD = DD.matricesWeightsExtra;
        if (void 0 === cD || void 0 === ID || null === cD || null === ID) TD.e.Warn("VertexData contains empty entries");
        else {
          const wD = [],
            SD = [],
            BD = [],
            yD = [],
            MD = [],
            tD = [],
            ZD = [],
            oD = [];
          let vD, ND = 0;
          const gD = {};
          let XD, mD;
          for (let DD = 0; DD < cD.length; DD += 3) {
            mD = [cD[DD], cD[DD + 1], cD[DD + 2]], vD = [];
            for (let DD = 0; DD < 3; DD++) {
              vD[DD] = "";
              for (let CD = 0; CD < 3; CD++) Math.abs(ID[3 * mD[DD] + CD]) < 1e-8 && (ID[3 * mD[DD] + CD] = 0), vD[DD] += ID[3 * mD[DD] + CD] + "|"
            }
            if (vD[0] != vD[1] && vD[0] != vD[2] && vD[1] != vD[2])
              for (let DD = 0; DD < 3; DD++) {
                if (XD = gD[vD[DD]], void 0 === XD) {
                  gD[vD[DD]] = ND, XD = ND++;
                  for (let CD = 0; CD < 3; CD++) wD.push(ID[3 * mD[DD] + CD]);
                  if (null !== pD && void 0 !== pD)
                    for (let CD = 0; CD < 4; CD++) yD.push(pD[4 * mD[DD] + CD]);
                  if (null !== CD && void 0 !== CD)
                    for (let cD = 0; cD < 2; cD++) BD.push(CD[2 * mD[DD] + cD]);
                  if (null !== iD && void 0 !== iD)
                    for (let CD = 0; CD < 4; CD++) MD.push(iD[4 * mD[DD] + CD]);
                  if (null !== fD && void 0 !== fD)
                    for (let CD = 0; CD < 4; CD++) tD.push(fD[4 * mD[DD] + CD]);
                  if (null !== bD && void 0 !== bD)
                    for (let CD = 0; CD < 4; CD++) ZD.push(bD[4 * mD[DD] + CD]);
                  if (null !== QD && void 0 !== QD)
                    for (let CD = 0; CD < 4; CD++) oD.push(QD[4 * mD[DD] + CD])
                }
                SD.push(XD)
              }
          }
          const nD = [];
          qD.c.ComputeNormals(wD, SD, nD), DD.positions = wD, DD.indices = SD, DD.normals = nD, null !== CD && void 0 !== CD && (DD.uvs = BD), null !== pD && void 0 !== pD && (DD.colors = yD), null !== iD && void 0 !== iD && (DD.matricesIndices = MD), null !== fD && void 0 !== fD && (DD.matricesWeights = tD), null !== bD && void 0 !== bD && (DD.matricesIndicesExtra = ZD), null !== fD && void 0 !== fD && (DD.matricesWeightsExtra = oD), DD.applyToMesh(this, this.isVertexBufferUpdatable(xD.k.PositionKind))
        }
      }
      static _instancedMeshFactory(DD, CD) {
        throw (0, RD.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(DD, CD, cD) {
        throw (0, RD.m)("PhysicsImpostor")
      }
      createInstance(DD) {
        const CD = rD._instancedMeshFactory(DD, this);
        return CD.parent = this.parent, CD
      }
      synchronizeInstances() {
        for (let DD = 0; DD < this.instances.length; DD++) {
          this.instances[DD]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(DD) {
        const CD = this.ncD(),
          cD = this.getVerticesData(xD.k.PositionKind);
        if (!cD || !CD) return this;
        const ID = [];
        for (let iD = 0; iD < cD.length; iD += 3) ID.push(PD.p.FromArray(cD, iD));
        const pD = [];
        return ND.d.SyncAsyncForLoop(ID.length, 40, (DD => {
          const CD = ID.length - 1 - DD,
            cD = ID[CD];
          for (let iD = 0; iD < CD; ++iD) {
            const DD = ID[iD];
            if (cD.equals(DD)) {
              pD[CD] = iD;
              break
            }
          }
        }), (() => {
          for (let DD = 0; DD < CD.length; ++DD) CD[DD] = pD[CD[DD]] || CD[DD];
          const cD = this.IH.slice(0);
          this.setIndices(CD), this.IH = cD, DD && DD(this)
        })), this
      }
      serialize() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        DD.name = this.name, DD.id = this.id, DD.uniqueId = this.uniqueId, DD.type = this.getClassName(), mD.c && mD.c.HasTags(this) && (DD.tags = mD.c.GetTags(this)), DD.position = this.position.XcD(), this.rotationQuaternion ? DD.rotationQuaternion = this.rotationQuaternion.XcD() : this.rotation && (DD.rotation = this.rotation.XcD()), DD.ci = this.ci.XcD(), this._postMultiplyPivotMatrix ? DD.pivotMatrix = this.getPivotMatrix().XcD() : DD.localMatrix = this.getPivotMatrix().XcD(), DD.isEnabled = this.isEnabled(!1), DD.isVisible = this.isVisible, DD.infiniteDistance = this.infiniteDistance, DD.pickable = this.yo, DD.receiveShadows = this.receiveShadows, DD.billboardMode = this.billboardMode, DD.visibility = this.visibility, DD.CZ = this.CZ, DD.checkCollisions = this.checkCollisions, DD.ellipsoid = this.ellipsoid.XcD(), DD.ellipsoidOffset = this.ellipsoidOffset.XcD(), DD.pZ = this.pZ, DD.isBlocker = this.isBlocker, DD.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (DD.QJ = !0), this.parent && this.parent._serializeAsParent(DD), DD.isUnIndexed = this.isUnIndexed;
        const CD = this._geometry;
        if (CD && this.IH) {
          DD.geometryUniqueId = CD.uniqueId, DD.geometryId = CD.id, DD.IH = [];
          for (let CD = 0; CD < this.IH.length; CD++) {
            const cD = this.IH[CD];
            DD.IH.push({
              materialIndex: cD.materialIndex,
              verticesStart: cD.verticesStart,
              verticesCount: cD.verticesCount,
              indexStart: cD.indexStart,
              indexCount: cD.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (DD.materialUniqueId = this.material.uniqueId, DD.materialId = this.material.id) : (this.material = null, DD.materialUniqueId = this._scene.defaultMaterial.uniqueId, DD.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (DD.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (DD.skeletonId = this.skeleton.id, DD.skeletonUniqueId = this.skeleton.uniqueId, DD.numBoneInfluencers = this.numBoneInfluencers), this.hq()._getComponent(kD.c.NAME_PHYSICSENGINE)) {
          const CD = this.getPhysicsImpostor?.();
          CD && (DD.physicsMass = CD.getParam("pb"), DD.physicsFriction = CD.getParam("friction"), DD.physicsRestitution = CD.getParam("pb"), DD.physicsImpostor = CD.type)
        }
        this.metadata && (DD.metadata = this.metadata), 0 !== this.meshBlendingTag && (DD.meshBlendingTag = this.meshBlendingTag), DD.instances = [];
        for (let cD = 0; cD < this.instances.length; cD++) {
          const CD = this.instances[cD];
          if (CD.doNotSerialize) continue;
          const ID = {
            name: CD.name,
            id: CD.id,
            isEnabled: CD.isEnabled(!1),
            isVisible: CD.isVisible,
            yo: CD.yo,
            checkCollisions: CD.checkCollisions,
            position: CD.position.XcD(),
            ci: CD.ci.XcD()
          };
          if (CD.parent && CD.parent._serializeAsParent(ID), CD.rotationQuaternion ? ID.rotationQuaternion = CD.rotationQuaternion.XcD() : CD.rotation && (ID.rotation = CD.rotation.XcD()), this.hq()._getComponent(kD.c.NAME_PHYSICSENGINE)) {
            const DD = CD.getPhysicsImpostor?.();
            DD && (ID.physicsMass = DD.getParam("pb"), ID.physicsFriction = DD.getParam("friction"), ID.physicsRestitution = DD.getParam("pb"), ID.physicsImpostor = DD.type)
          }
          CD.metadata && (ID.metadata = CD.metadata), CD.actionManager && (ID.actions = CD.actionManager.serialize(CD.name)), DD.instances.push(ID), LD.d.AppendSerializedAnimations(CD, ID), ID.df = CD.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (DD.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.lDD
          }, this._userThinInstanceBuffersStorage)) {
          const CD = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const DD in this._userThinInstanceBuffersStorage.data) CD.data[DD] = Array.from(this._userThinInstanceBuffersStorage.data[DD]), CD.sizes[DD] = this._userThinInstanceBuffersStorage.sizes[DD], CD.strides[DD] = this._userThinInstanceBuffersStorage.strides[DD];
          DD.thinInstances.userThinInstance = CD
        }
        return LD.d.AppendSerializedAnimations(this, DD), DD.df = this.serializeAnimationRanges(), DD.layerMask = this.layerMask, DD.alphaIndex = this.alphaIndex, DD.hasVertexAlpha = this.hasVertexAlpha, DD.overlayAlpha = this.overlayAlpha, DD.overlayColor = this.overlayColor.XcD(), DD.renderOverlay = this.renderOverlay, DD.applyFog = this.applyFog, this.actionManager && (DD.actions = this.actionManager.serialize(this.name)), DD
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const DD = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (DD && DD.vertexCount) {
          if (DD.vertexCount !== this.getTotalVertices()) return TD.e.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (DD.isUsingTextureForTargets) return;
          for (let CD = 0; CD < DD.numInfluencers; CD++) {
            const cD = DD.getActiveTarget(CD),
              ID = cD.getPositions();
            if (!ID) return void TD.e.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(xD.k.PositionKind + CD, ID, !1, 3);
            const pD = cD.getNormals();
            pD && this.geometry.setVerticesData(xD.k.NormalKind + CD, pD, !1, 3);
            const iD = cD.getTangents();
            iD && this.geometry.setVerticesData(xD.k.TangentKind + CD, iD, !1, 3);
            const fD = cD.getUVs();
            fD && this.geometry.setVerticesData(xD.k.UVKind + "_" + CD, fD, !1, 2);
            const bD = cD.getUV2s();
            bD && this.geometry.setVerticesData(xD.k.UV2Kind + "_" + CD, bD, !1, 2);
            const QD = cD.getColors();
            QD && this.geometry.setVerticesData(xD.k.ColorKind + CD, QD, !1, 4)
          }
        } else {
          let DD = 0;
          for (; this.geometry.isVerticesDataPresent(xD.k.PositionKind + DD);) this.geometry.removeVerticesData(xD.k.PositionKind + DD), this.geometry.isVerticesDataPresent(xD.k.NormalKind + DD) && this.geometry.removeVerticesData(xD.k.NormalKind + DD), this.geometry.isVerticesDataPresent(xD.k.TangentKind + DD) && this.geometry.removeVerticesData(xD.k.TangentKind + DD), this.geometry.isVerticesDataPresent(xD.k.UVKind + "_" + DD) && this.geometry.removeVerticesData(xD.k.UVKind + "_" + DD), this.geometry.isVerticesDataPresent(xD.k.UV2Kind + "_" + DD) && this.geometry.removeVerticesData(xD.k.UV2Kind + "_" + DD), this.geometry.isVerticesDataPresent(xD.k.ColorKind + DD) && this.geometry.removeVerticesData(xD.k.ColorKind + DD), DD++
        }
      }
      static Parse(DD, CD, cD) {
        let ID, pD = !1;
        if (DD.type && "LinesMesh" === DD.type ? ID = rD._LinesMeshParser(DD, CD) : DD.type && "GroundMesh" === DD.type ? ID = rD._GroundMeshParser(DD, CD) : DD.type && "GoldbergMesh" === DD.type ? ID = rD._GoldbergMeshParser(DD, CD) : DD.type && "GreasedLineMesh" === DD.type ? ID = rD._GreasedLineMeshParser(DD, CD) : DD.type && "TrailMesh" === DD.type ? ID = rD._TrailMeshParser(DD, CD) : DD.type && "GaussianSplattingMesh" === DD.type ? (ID = DD._isCompound ? rD._GaussianSplattingCompoundMeshParser(DD, CD) : rD._GaussianSplattingMeshParser(DD, CD), pD = !0) : DD.type && "GaussianSplattingPartProxyMesh" === DD.type ? (ID = rD._GaussianSplattingPartProxyMeshParser(DD, CD), pD = !0) : ID = new rD(DD.name, CD), ID.id = DD.id, ID._waitingParsedUniqueId = DD.uniqueId, mD.c && mD.c.AddTagsTo(ID, DD.tags), ID.position = PD.p.FromArray(DD.position), void 0 !== DD.metadata && (ID.metadata = DD.metadata), void 0 !== DD.meshBlendingTag && (ID.meshBlendingTag = DD.meshBlendingTag), DD.rotationQuaternion ? ID.rotationQuaternion = PD.h.FromArray(DD.rotationQuaternion) : DD.rotation && (ID.rotation = PD.p.FromArray(DD.rotation)), ID.ci = PD.p.FromArray(DD.ci), DD.localMatrix ? ID.setPreTransformMatrix(PD.d.FromArray(DD.localMatrix)) : DD.pivotMatrix && ID.setPivotMatrix(PD.d.FromArray(DD.pivotMatrix)), ID.lH(DD.isEnabled), ID.isVisible = DD.isVisible, ID.infiniteDistance = DD.infiniteDistance, ID.CZ = !!DD.CZ, ID.showBoundingBox = DD.showBoundingBox, ID.showSubMeshesBoundingBox = DD.showSubMeshesBoundingBox, void 0 !== DD.applyFog && (ID.applyFog = DD.applyFog), void 0 !== DD.pickable && (ID.yo = DD.pickable), void 0 !== DD.alphaIndex && (ID.alphaIndex = DD.alphaIndex), ID.receiveShadows = DD.receiveShadows, void 0 !== DD.billboardMode && (ID.billboardMode = DD.billboardMode), void 0 !== DD.visibility && (ID.visibility = DD.visibility), ID.checkCollisions = DD.checkCollisions, ID.pZ = !!DD.pZ, DD.ellipsoid && (ID.ellipsoid = PD.p.FromArray(DD.ellipsoid)), DD.ellipsoidOffset && (ID.ellipsoidOffset = PD.p.FromArray(DD.ellipsoidOffset)), null != DD.overrideMaterialSideOrientation && (ID.sideOrientation = DD.overrideMaterialSideOrientation), void 0 !== DD.sideOrientation && (ID.sideOrientation = DD.sideOrientation), void 0 !== DD.isBlocker && (ID.isBlocker = DD.isBlocker), ID._shouldGenerateFlatShading = DD.useFlatShading, DD.QJ && (ID._waitingData.QJ = DD.QJ), void 0 !== DD.parentId && (ID._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (ID._waitingParentInstanceIndex = DD.parentInstanceIndex), void 0 !== DD.actions && (ID._waitingData.actions = DD.actions), void 0 !== DD.overlayAlpha && (ID.overlayAlpha = DD.overlayAlpha), void 0 !== DD.overlayColor && (ID.overlayColor = HD.d.FromArray(DD.overlayColor)), void 0 !== DD.renderOverlay && (ID.renderOverlay = DD.renderOverlay), ID.isUnIndexed = !!DD.isUnIndexed, ID.hasVertexAlpha = DD.hasVertexAlpha, DD.delayLoadingFile ? (ID.delayLoadState = 4, ID.delayLoadingFile = cD + DD.delayLoadingFile, ID.buildBoundingInfo(PD.p.FromArray(DD.boundingBoxMinimum), PD.p.FromArray(DD.boundingBoxMaximum)), DD._binaryInfo && (ID._binaryInfo = DD._binaryInfo), ID._delayInfo = [], DD.hasUVs && ID._delayInfo.push(xD.k.UVKind), DD.hasUVs2 && ID._delayInfo.push(xD.k.UV2Kind), DD.hasUVs3 && ID._delayInfo.push(xD.k.UV3Kind), DD.hasUVs4 && ID._delayInfo.push(xD.k.UV4Kind), DD.hasUVs5 && ID._delayInfo.push(xD.k.UV5Kind), DD.hasUVs6 && ID._delayInfo.push(xD.k.UV6Kind), DD.hasColors && ID._delayInfo.push(xD.k.ColorKind), DD.hasMatricesIndices && ID._delayInfo.push(xD.k.MatricesIndicesKind), DD.hasMatricesWeights && ID._delayInfo.push(xD.k.MatricesWeightsKind), ID._delayLoadingFunction = JD.e._ImportGeometry, lD.b.ForceFullSceneLoadingForIncremental && ID._checkDelayState()) : pD || JD.e._ImportGeometry(DD, ID), DD.materialUniqueId ? ID._waitingMaterialId = DD.materialUniqueId : DD.materialId && (ID._waitingMaterialId = DD.materialId), DD.morphTargetManagerId > -1 && (ID._waitingMorphTargetManagerId = DD.morphTargetManagerId), void 0 !== DD.skeletonId && null !== DD.skeletonId && (ID.skeleton = CD.getLastSkeletonById(DD.skeletonId), ID._waitingSkeletonId = DD.skeletonId, DD.numBoneInfluencers && (ID.numBoneInfluencers = DD.numBoneInfluencers)), void 0 !== DD.skeletonUniqueId && null !== DD.skeletonUniqueId && (ID._waitingSkeletonUniqueId = DD.skeletonUniqueId), DD.animations) {
          for (let CD = 0; CD < DD.animations.length; CD++) {
            const cD = DD.animations[CD],
              pD = (0, GD.b)("BABYLON.Animation");
            pD && ID.animations.push(pD.Parse(cD))
          }
          UD.b.ParseAnimationRanges(ID, DD, CD)
        }
        if (DD.autoAnimate && CD.beginAnimation(ID, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), DD.layerMask && !isNaN(DD.layerMask) ? ID.layerMask = Math.abs(parseInt(DD.layerMask)) : ID.layerMask = 268435455, DD.physicsImpostor && (ID.physicsImpostor = rD._PhysicsImpostorParser(CD, ID, DD)), DD.lodMeshIds && (ID._waitingData.lods = {
            ids: DD.lodMeshIds,
            distances: DD.lodDistances ? DD.lodDistances : null,
            coverages: DD.lodCoverages ? DD.lodCoverages : null
          }), DD.instances)
          for (let iD = 0; iD < DD.instances.length; iD++) {
            const cD = DD.instances[iD],
              pD = ID.createInstance(cD.name);
            if (cD.id && (pD.id = cD.id), mD.c && (cD.tags ? mD.c.AddTagsTo(pD, cD.tags) : mD.c.AddTagsTo(pD, DD.tags)), pD.position = PD.p.FromArray(cD.position), void 0 !== cD.metadata && (pD.metadata = cD.metadata), void 0 !== cD.parentId && (pD._waitingParentId = cD.parentId), void 0 !== cD.parentInstanceIndex && (pD._waitingParentInstanceIndex = cD.parentInstanceIndex), void 0 !== cD.isEnabled && null !== cD.isEnabled && pD.lH(cD.isEnabled), void 0 !== cD.isVisible && null !== cD.isVisible && (pD.isVisible = cD.isVisible), void 0 !== cD.yo && null !== cD.yo && (pD.yo = cD.yo), cD.rotationQuaternion ? pD.rotationQuaternion = PD.h.FromArray(cD.rotationQuaternion) : cD.rotation && (pD.rotation = PD.p.FromArray(cD.rotation)), pD.ci = PD.p.FromArray(cD.ci), void 0 != cD.checkCollisions && null != cD.checkCollisions && (pD.checkCollisions = cD.checkCollisions), void 0 != cD.pickable && null != cD.pickable && (pD.yo = cD.pickable), void 0 != cD.showBoundingBox && null != cD.showBoundingBox && (pD.showBoundingBox = cD.showBoundingBox), void 0 != cD.showSubMeshesBoundingBox && null != cD.showSubMeshesBoundingBox && (pD.showSubMeshesBoundingBox = cD.showSubMeshesBoundingBox), void 0 != cD.alphaIndex && null != cD.showSubMeshesBoundingBox && (pD.alphaIndex = cD.alphaIndex), cD.physicsImpostor && (pD.physicsImpostor = rD._PhysicsImpostorParser(CD, pD, cD)), void 0 !== cD.actions && (pD._waitingData.actions = cD.actions), cD.animations) {
              for (let DD = 0; DD < cD.animations.length; DD++) {
                const CD = cD.animations[DD],
                  ID = (0, GD.b)("BABYLON.Animation");
                ID && pD.animations.push(ID.Parse(CD))
              }
              UD.b.ParseAnimationRanges(pD, cD, CD), cD.autoAnimate && CD.beginAnimation(pD, cD.autoAnimateFrom, cD.autoAnimateTo, cD.autoAnimateLoop, cD.autoAnimateSpeed || 1)
            }
          }
        if (DD.thinInstances) {
          const CD = DD.thinInstances;
          if (ID.lDD = !!CD.enablePicking, CD.matrixData ? (ID.U3("matrix", new Float32Array(CD.matrixData), 16, !1), ID._thinInstanceDataStorage.matrixBufferSize = CD.matrixBufferSize, ID._thinInstanceDataStorage.instancesCount = CD.instancesCount) : ID._thinInstanceDataStorage.matrixBufferSize = CD.matrixBufferSize, DD.thinInstances.userThinInstance) {
            const CD = DD.thinInstances.userThinInstance;
            for (const DD in CD.data) ID.U3(DD, new Float32Array(CD.data[DD]), CD.strides[DD], !1), ID._userThinInstanceBuffersStorage.sizes[DD] = CD.sizes[DD]
          }
        }
        return ID
      }
      setPositionsForCPUSkinning() {
        const DD = this._internalMeshDataInfo;
        if (!DD._sourcePositions) {
          const CD = this.getVerticesData(xD.k.PositionKind);
          if (!CD) return DD._sourcePositions;
          DD._sourcePositions = new Float32Array(CD), this.isVertexBufferUpdatable(xD.k.PositionKind) || this.setVerticesData(xD.k.PositionKind, CD, !0)
        }
        return DD._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const DD = this._internalMeshDataInfo;
        if (!DD._sourceNormals) {
          const CD = this.getVerticesData(xD.k.NormalKind);
          if (!CD) return DD._sourceNormals;
          DD._sourceNormals = new Float32Array(CD), this.isVertexBufferUpdatable(xD.k.NormalKind) || this.setVerticesData(xD.k.NormalKind, CD, !0)
        }
        return DD._sourceNormals
      }
      applySkeleton(DD) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.hq().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.hq().getFrameId(), !this.isVerticesDataPresent(xD.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(xD.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(xD.k.MatricesWeightsKind)) return this;
        const CD = this.isVerticesDataPresent(xD.k.NormalKind),
          cD = this._internalMeshDataInfo;
        if (!cD._sourcePositions) {
          const DD = this.IH.slice();
          this.setPositionsForCPUSkinning(), this.IH = DD
        }
        CD && !cD._sourceNormals && this.setNormalsForCPUSkinning();
        let ID = this.getVerticesData(xD.k.PositionKind);
        if (!ID) return this;
        ID instanceof Float32Array || (ID = new Float32Array(ID));
        let pD = this.getVerticesData(xD.k.NormalKind);
        if (CD) {
          if (!pD) return this;
          pD instanceof Float32Array || (pD = new Float32Array(pD))
        }
        const iD = this.getVerticesData(xD.k.MatricesIndicesKind),
          fD = this.getVerticesData(xD.k.MatricesWeightsKind);
        if (!fD || !iD) return this;
        const bD = this.numBoneInfluencers > 4,
          QD = bD ? this.getVerticesData(xD.k.MatricesIndicesExtraKind) : null,
          wD = bD ? this.getVerticesData(xD.k.MatricesWeightsExtraKind) : null,
          SD = DD.getTransformMatrices(this),
          BD = PD.p.Zero(),
          yD = new PD.d,
          MD = new PD.d;
        let tD, ZD = 0;
        for (let oD = 0; oD < ID.length; oD += 3, ZD += 4) {
          let DD;
          for (tD = 0; tD < 4; tD++) DD = fD[ZD + tD], DD > 0 && (PD.d.FromFloat32ArrayToRefScaled(SD, Math.floor(16 * iD[ZD + tD]), DD, MD), yD.addToSelf(MD));
          if (bD)
            for (tD = 0; tD < 4; tD++) DD = wD[ZD + tD], DD > 0 && (PD.d.FromFloat32ArrayToRefScaled(SD, Math.floor(16 * QD[ZD + tD]), DD, MD), yD.addToSelf(MD));
          PD.p.TransformCoordinatesFromFloatsToRef(cD._sourcePositions[oD], cD._sourcePositions[oD + 1], cD._sourcePositions[oD + 2], yD, BD), BD.toArray(ID, oD), CD && (PD.p.TransformNormalFromFloatsToRef(cD._sourceNormals[oD], cD._sourceNormals[oD + 1], cD._sourceNormals[oD + 2], yD, BD), BD.toArray(pD, oD)), yD.reset()
        }
        return this.updateVerticesData(xD.k.PositionKind, ID), CD && this.updateVerticesData(xD.k.NormalKind, pD), this
      }
      static MinMax(DD) {
        let CD = null,
          cD = null;
        for (const ID of DD) {
          const DD = ID.VJ().boundingBox;
          CD && cD ? (CD.minimizeInPlace(DD.minimumWorld), cD.maximizeInPlace(DD.maximumWorld)) : (CD = DD.minimumWorld.clone(), cD = DD.maximumWorld.clone())
        }
        return CD && cD ? {
          min: CD,
          max: cD
        } : {
          min: PD.p.Zero(),
          max: PD.p.Zero()
        }
      }
      static Center(DD) {
        const CD = DD instanceof Array ? rD.MinMax(DD) : DD;
        return PD.p.Center(CD.min, CD.max)
      }
      static MergeMeshes(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        return (0, nD.n)(rD._MergeMeshesCoroutine(DD, CD, cD, ID, pD, iD, !1))
      }
      static async MergeMeshesAsync(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, nD.j)(rD._MergeMeshesCoroutine(DD, CD, cD, ID, pD, iD, !0), (0, nD.e)())
      }
      static * _MergeMeshesCoroutine(DD) {
        let CD, cD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ID = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          iD = arguments.length > 4 ? arguments[4] : void 0,
          fD = arguments.length > 5 ? arguments[5] : void 0,
          bD = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (DD = DD.filter(Boolean)).length) return null;
        if (!ID) {
          let cD = 0;
          for (CD = 0; CD < DD.length; CD++)
            if (cD += DD[CD].getTotalVertices(), cD >= 65536) return TD.e.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const QD = DD[0];
        fD && (iD = !1, DD.sort(((DD, CD) => (DD.material?.uniqueId ?? -1) - (CD.material?.uniqueId ?? -1))));
        const wD = new Array,
          SD = new Array,
          BD = new Array,
          yD = DD[0].sideOrientation;
        for (CD = 0; CD < DD.length; CD++) {
          const cD = DD[CD];
          if (cD.Fq) return TD.e.Warn("Cannot merge instance meshes."), null;
          if (yD !== cD.sideOrientation) return TD.e.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (iD || fD) {
            const DD = BD.reduce(((DD, CD) => Math.max(DD, CD.start + CD.count)), 0);
            if (fD)
              if (cD.material) {
                const CD = cD.material;
                if (CD instanceof jD.c) {
                  for (let DD = 0; DD < CD.Z2.length; DD++) wD.indexOf(CD.Z2[DD]) < 0 && wD.push(CD.Z2[DD]);
                  for (let ID = 0; ID < cD.IH.length; ID++) SD.push(wD.indexOf(CD.Z2[cD.IH[ID].materialIndex])), BD.push({
                    start: DD + cD.IH[ID].indexStart,
                    count: cD.IH[ID].indexCount
                  })
                } else {
                  wD.indexOf(CD) < 0 && wD.push(CD);
                  for (let ID = 0; ID < cD.IH.length; ID++) SD.push(wD.indexOf(CD)), BD.push({
                    start: DD + cD.IH[ID].indexStart,
                    count: cD.IH[ID].indexCount
                  })
                }
              } else
                for (let CD = 0; CD < cD.IH.length; CD++) SD.push(0), BD.push({
                  start: DD + cD.IH[CD].indexStart,
                  count: cD.IH[CD].indexCount
                });
            else BD.push({
              start: DD,
              count: cD.getTotalIndices()
            })
          }
        }
        if (fD && BD.length > 1) {
          let DD = 0;
          for (let CD = 1; CD < BD.length; CD++) {
            const cD = BD[DD],
              ID = BD[CD];
            SD[CD] === SD[DD] && cD.start + cD.count === ID.start ? cD.count += ID.count : (DD++, BD[DD] = ID, SD[DD] = SD[CD])
          }
          BD.length = DD + 1, SD.length = DD + 1
        }
        const MD = DD => {
            const CD = DD.computeWorldMatrix(!0);
            return {
              vertexData: qD.c.ExtractFromMesh(DD, !1, !1),
              transform: CD
            }
          },
          {
            vertexData: tD,
            transform: ZD
          } = MD(DD[0]);
        bD && (yield);
        const oD = new Array(DD.length - 1);
        for (let nD = 1; nD < DD.length; nD++) oD[nD - 1] = MD(DD[nD]), bD && (yield);
        const vD = tD._mergeCoroutine(ZD, oD, ID, bD, !cD);
        let ND = vD.next();
        for (; !ND.done;) bD && (yield), ND = vD.next();
        const gD = ND.value;
        pD || (pD = new rD(QD.name + "_merged", QD.hq()));
        const XD = gD._applyToCoroutine(pD, void 0, bD);
        let mD = XD.next();
        for (; !mD.done;) bD && (yield), mD = XD.next();
        if (pD.checkCollisions = QD.checkCollisions, pD.sideOrientation = QD.sideOrientation, cD)
          for (CD = 0; CD < DD.length; CD++) DD[CD].dispose();
        if (iD || fD) {
          for (pD.releaseSubMeshes(), CD = 0; CD < BD.length;) aD.c.CreateFromIndices(0, BD[CD].start, BD[CD].count, pD, void 0, !1), CD++;
          for (const DD of pD.IH) DD.refreshBoundingInfo();
          pD.computeWorldMatrix(!0)
        }
        if (fD) {
          const DD = new jD.c(QD.name + "_merged", QD.hq());
          DD.Z2 = wD;
          for (let CD = 0; CD < pD.IH.length; CD++) pD.IH[CD].materialIndex = SD[CD];
          pD.material = DD
        } else pD.material = QD.material;
        return pD
      }
      y5(DD) {
        DD._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(DD)
      }
      Z5(DD) {
        const CD = DD._indexInSourceMeshInstanceArray;
        if (-1 != CD) {
          if (CD !== this.instances.length - 1) {
            const DD = this.instances[this.instances.length - 1];
            this.instances[CD] = DD, DD._indexInSourceMeshInstanceArray = CD
          }
          DD._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === VD.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(DD) {
        const CD = this.hq();
        return CD.forcePointsCloud ? VD.d.PointFillMode : CD.forceWireframe ? VD.d.WireFrameFillMode : this.overrideRenderingFillMode ?? DD
      }
      setMaterialByID(DD) {
        return this.setMaterialById(DD)
      }
      static CreateRibbon(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(DD, CD, cD, ID, pD, iD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(DD, CD, cD, ID, pD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(DD, CD, cD, ID, pD, iD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(DD, CD, cD, ID) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(DD, CD, cD, ID, pD, iD, fD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(DD, CD, cD, ID, pD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(DD, CD, cD, ID, pD, iD, fD, bD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(DD, CD, cD, ID, pD, iD, fD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(DD, CD, cD, ID, pD, iD, fD, bD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(DD, CD, cD, ID, pD, iD, fD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(DD, CD, cD, ID, pD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(DD, CD, cD, ID, pD, iD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(DD, CD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(DD, CD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(DD, CD, cD, ID, pD, iD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(DD, CD, cD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(DD) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    rD.FRONTSIDE = qD.c.FRONTSIDE, rD.BACKSIDE = qD.c.BACKSIDE, rD.DOUBLESIDE = qD.c.DOUBLESIDE, rD.DEFAULTSIDE = qD.c.DEFAULTSIDE, rD.NO_CAP = 0, rD.CAP_START = 1, rD.CAP_END = 2, rD.CAP_ALL = 3, rD.NO_FLIP = 0, rD.FLIP_TILE = 1, rD.ROTATE_TILE = 2, rD.FLIP_ROW = 3, rD.ROTATE_ROW = 4, rD.FLIP_N_ROTATE_TILE = 5, rD.FLIP_N_ROTATE_ROW = 6, rD.CENTER = 0, rD.LEFT = 1, rD.RIGHT = 2, rD.TOP = 3, rD.BOTTOM = 4, rD.INSTANCEDMESH_SORT_TRANSPARENT = !1, rD._GroundMeshParser = (DD, CD) => {
      throw (0, RD.m)("GroundMesh")
    }, rD._GoldbergMeshParser = (DD, CD) => {
      throw (0, RD.m)("GoldbergMesh")
    }, rD._LinesMeshParser = (DD, CD) => {
      throw (0, RD.m)("LinesMesh")
    }, rD._GreasedLineMeshParser = (DD, CD) => {
      throw (0, RD.m)("GreasedLineMesh")
    }, rD._GreasedLineRibbonMeshParser = (DD, CD) => {
      throw (0, RD.m)("GreasedLineRibbonMesh")
    }, rD._TrailMeshParser = (DD, CD) => {
      throw (0, RD.m)("TrailMesh")
    }, rD._GaussianSplattingMeshParser = (DD, CD) => {
      throw (0, RD.m)("GaussianSplattingMesh")
    }, rD._GaussianSplattingPartProxyMeshParser = (DD, CD) => {
      throw (0, RD.m)("GaussianSplattingPartProxyMesh")
    }, rD._GaussianSplattingCompoundMeshParser = (DD, CD) => {
      throw (0, RD.m)("GaussianSplattingCompoundMesh")
    };
    let AD = !1;

    function FD() {
      AD || (AD = !0, (0, GD.d)("BABYLON.Mesh", rD))
    }(ID = rD.prototype).xJ ?? (ID.xJ = (0, RD.j)("Mesh", "xJ")), (pD = rD.prototype).simplify ?? (pD.simplify = (0, RD.j)("Mesh", "simplify")), (iD = rD.prototype).thinInstanceAdd ?? (iD.thinInstanceAdd = (0, RD.j)("Mesh", "thinInstanceAdd")), (fD = rD.prototype).thinInstanceAddSelf ?? (fD.thinInstanceAddSelf = (0, RD.j)("Mesh", "thinInstanceAddSelf")), (bD = rD.prototype).thinInstanceRegisterAttribute ?? (bD.thinInstanceRegisterAttribute = (0, RD.j)("Mesh", "thinInstanceRegisterAttribute")), (QD = rD.prototype).thinInstanceSetMatrixAt ?? (QD.thinInstanceSetMatrixAt = (0, RD.j)("Mesh", "thinInstanceSetMatrixAt")), (wD = rD.prototype).thinInstanceSetAttributeAt ?? (wD.thinInstanceSetAttributeAt = (0, RD.j)("Mesh", "thinInstanceSetAttributeAt")), (SD = rD.prototype).U3 ?? (SD.U3 = (0, RD.j)("Mesh", "U3")), (BD = rD.prototype).thinInstanceGetWorldMatrices ?? (BD.thinInstanceGetWorldMatrices = (0, RD.j)("Mesh", "thinInstanceGetWorldMatrices")), (yD = rD.prototype).E1 ?? (yD.E1 = (0, RD.j)("Mesh", "E1")), (MD = rD.prototype).thinInstancePartialBufferUpdate ?? (MD.thinInstancePartialBufferUpdate = (0, RD.j)("Mesh", "thinInstancePartialBufferUpdate")), (tD = rD.prototype).thinInstanceRefreshBoundingInfo ?? (tD.thinInstanceRefreshBoundingInfo = (0, RD.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (ZD = rD.prototype).getEmittedParticleSystems ?? (ZD.getEmittedParticleSystems = (0, RD.j)("Mesh", "getEmittedParticleSystems")), (oD = rD.prototype).getHierarchyEmittedParticleSystems ?? (oD.getHierarchyEmittedParticleSystems = (0, RD.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(rD.prototype, "edgesShareWithInstances") || Object.defineProperty(rD.prototype, "edgesShareWithInstances", (0, RD.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(rD.prototype, "lDD") || Object.defineProperty(rD.prototype, "lDD", (0, RD.g)("Mesh", "lDD")), Object.getOwnPropertyDescriptor(rD.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(rD.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, RD.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(rD.prototype, "Q0") || Object.defineProperty(rD.prototype, "Q0", (0, RD.g)("Mesh", "Q0"))
  },
  39545: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => tD
    });
    var ID = cD(39154),
      pD = cD(36446),
      iD = cD(39286),
      fD = cD(39027),
      bD = cD(36622),
      QD = cD(38048),
      wD = cD(39156),
      SD = cD(39538),
      BD = cD(39206),
      yD = cD(39425);
    class MD {}
    let tD = (() => {
      var DD;
      let CD, cD, tD, ZD, oD = [];
      return DD = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, SD.g)(this._applyToCoroutine.bind(this)), this.uniqueId = DD._UniqueIdGenerator, DD._UniqueIdGenerator++
        }
        set(DD, CD) {
          switch (DD.length || QD.e.Warn(`Setting vertex data kind '${CD}' with an empty array`), CD) {
            case iD.k.PositionKind:
              this.positions = DD;
              break;
            case iD.k.NormalKind:
              this.normals = DD;
              break;
            case iD.k.TangentKind:
              this.tangents = DD;
              break;
            case iD.k.UVKind:
              this.uvs = DD;
              break;
            case iD.k.UV2Kind:
              this.uvs2 = DD;
              break;
            case iD.k.UV3Kind:
              this.uvs3 = DD;
              break;
            case iD.k.UV4Kind:
              this.uvs4 = DD;
              break;
            case iD.k.UV5Kind:
              this.uvs5 = DD;
              break;
            case iD.k.UV6Kind:
              this.uvs6 = DD;
              break;
            case iD.k.ColorKind:
              this.colors = DD;
              break;
            case iD.k.MatricesIndicesKind:
              this.matricesIndices = DD;
              break;
            case iD.k.MatricesWeightsKind:
              this.matricesWeights = DD;
              break;
            case iD.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = DD;
              break;
            case iD.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = DD
          }
        }
        applyToMesh(DD, CD) {
          return this._applyTo(DD, CD, !1), this
        }
        applyToGeometry(DD, CD) {
          return this._applyTo(DD, CD, !1), this
        }
        updateMesh(DD) {
          return this._update(DD), this
        }
        updateGeometry(DD) {
          return this._update(DD), this
        }* _applyToCoroutine(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cD = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (DD.setVerticesData(iD.k.PositionKind, this.positions, CD), cD && (yield)), this.normals && (DD.setVerticesData(iD.k.NormalKind, this.normals, CD), cD && (yield)), this.tangents && (DD.setVerticesData(iD.k.TangentKind, this.tangents, CD), cD && (yield)), this.uvs && (DD.setVerticesData(iD.k.UVKind, this.uvs, CD), cD && (yield)), this.uvs2 && (DD.setVerticesData(iD.k.UV2Kind, this.uvs2, CD), cD && (yield)), this.uvs3 && (DD.setVerticesData(iD.k.UV3Kind, this.uvs3, CD), cD && (yield)), this.uvs4 && (DD.setVerticesData(iD.k.UV4Kind, this.uvs4, CD), cD && (yield)), this.uvs5 && (DD.setVerticesData(iD.k.UV5Kind, this.uvs5, CD), cD && (yield)), this.uvs6 && (DD.setVerticesData(iD.k.UV6Kind, this.uvs6, CD), cD && (yield)), this.colors) {
            const ID = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            DD.setVerticesData(iD.k.ColorKind, this.colors, CD, ID), this.hasVertexAlpha && void 0 !== DD.hasVertexAlpha && (DD.hasVertexAlpha = !0), cD && (yield)
          }
          if (this.matricesIndices && (DD.setVerticesData(iD.k.MatricesIndicesKind, this.matricesIndices, CD), cD && (yield)), this.matricesWeights && (DD.setVerticesData(iD.k.MatricesWeightsKind, this.matricesWeights, CD), cD && (yield)), this.matricesIndicesExtra && (DD.setVerticesData(iD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, CD), cD && (yield)), this.matricesWeightsExtra && (DD.setVerticesData(iD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, CD), cD && (yield)), this.indices ? (DD.setIndices(this.indices, null, CD), cD && (yield)) : DD.setIndices([], null), DD.IH && this.materialInfos && this.materialInfos.length > 1) {
            const CD = DD;
            CD.IH = [];
            for (const DD of this.materialInfos) new yD.c(DD.materialIndex, DD.verticesStart, DD.verticesCount, DD.indexStart, DD.indexCount, CD)
          }
          return this
        }
        _update(DD, CD, cD) {
          return this.positions && DD.updateVerticesData(iD.k.PositionKind, this.positions, CD, cD), this.normals && DD.updateVerticesData(iD.k.NormalKind, this.normals, CD, cD), this.tangents && DD.updateVerticesData(iD.k.TangentKind, this.tangents, CD, cD), this.uvs && DD.updateVerticesData(iD.k.UVKind, this.uvs, CD, cD), this.uvs2 && DD.updateVerticesData(iD.k.UV2Kind, this.uvs2, CD, cD), this.uvs3 && DD.updateVerticesData(iD.k.UV3Kind, this.uvs3, CD, cD), this.uvs4 && DD.updateVerticesData(iD.k.UV4Kind, this.uvs4, CD, cD), this.uvs5 && DD.updateVerticesData(iD.k.UV5Kind, this.uvs5, CD, cD), this.uvs6 && DD.updateVerticesData(iD.k.UV6Kind, this.uvs6, CD, cD), this.colors && DD.updateVerticesData(iD.k.ColorKind, this.colors, CD, cD), this.matricesIndices && DD.updateVerticesData(iD.k.MatricesIndicesKind, this.matricesIndices, CD, cD), this.matricesWeights && DD.updateVerticesData(iD.k.MatricesWeightsKind, this.matricesWeights, CD, cD), this.matricesIndicesExtra && DD.updateVerticesData(iD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, CD, cD), this.matricesWeightsExtra && DD.updateVerticesData(iD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, CD, cD), this.indices && DD.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const iD = pD.l.cZ[0],
            fD = pD.l.cZ[1];
          for (let bD = cD; bD < cD + ID; bD += 3) pD.p.FromArrayToRef(DD, bD, iD), pD.p.TransformCoordinatesToRef(iD, CD, fD), DD[bD] = fD.x, DD[bD + 1] = fD.y, DD[bD + 2] = fD.z
        }
        static _TransformVector3Normals(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const iD = pD.l.cZ[0],
            fD = pD.l.cZ[1];
          for (let bD = cD; bD < cD + ID; bD += 3) pD.p.FromArrayToRef(DD, bD, iD), pD.p.TransformNormalToRef(iD, CD, fD), DD[bD] = fD.x, DD[bD + 1] = fD.y, DD[bD + 2] = fD.z
        }
        static _TransformVector4Normals(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          const iD = pD.l.Vector4[0],
            fD = pD.l.Vector4[1];
          for (let bD = cD; bD < cD + ID; bD += 4) pD.s.FromArrayToRef(DD, bD, iD), pD.s.TransformNormalToRef(iD, CD, fD), DD[bD] = fD.x, DD[bD + 1] = fD.y, DD[bD + 2] = fD.z, DD[bD + 3] = fD.w
        }
        static _FlipFaces(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.length;
          for (let ID = CD; ID < CD + cD; ID += 3) {
            const CD = DD[ID + 1];
            DD[ID + 1] = DD[ID + 2], DD[ID + 2] = CD
          }
        }
        transform(CD) {
          const cD = CD.determinant() < 0;
          return this.positions && DD._TransformVector3Coordinates(this.positions, CD), this.normals && DD._TransformVector3Normals(this.normals, CD), this.tangents && DD._TransformVector4Normals(this.tangents, CD), cD && this.indices && DD._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const CD = [];
          for (const cD of this.materialInfos) {
            const ID = new DD;
            if (this.positions && (ID.positions = this.positions.slice(3 * cD.verticesStart, 3 * (cD.verticesCount + cD.verticesStart))), this.normals && (ID.normals = this.normals.slice(3 * cD.verticesStart, 3 * (cD.verticesCount + cD.verticesStart))), this.tangents && (ID.tangents = this.tangents.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.colors && (ID.colors = this.colors.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.uvs && (ID.uvs = this.uvs.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.uvs2 && (ID.uvs2 = this.uvs2.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.uvs3 && (ID.uvs3 = this.uvs3.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.uvs4 && (ID.uvs4 = this.uvs4.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.uvs5 && (ID.uvs5 = this.uvs5.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.uvs6 && (ID.uvs6 = this.uvs6.slice(2 * cD.verticesStart, 2 * (cD.verticesCount + cD.verticesStart))), this.matricesIndices && (ID.matricesIndices = this.matricesIndices.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.matricesIndicesExtra && (ID.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.matricesWeights && (ID.matricesWeights = this.matricesWeights.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.matricesWeightsExtra && (ID.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * cD.verticesStart, 4 * (cD.verticesCount + cD.verticesStart))), this.indices) {
              ID.indices = [];
              for (let DD = cD.indexStart; DD < cD.indexStart + cD.indexCount; DD++) ID.indices.push(this.indices[DD] - cD.verticesStart)
            }
            const pD = new MD;
            pD.indexStart = 0, pD.indexCount = ID.indices ? ID.indices.length : 0, pD.materialIndex = cD.materialIndex, pD.verticesStart = 0, pD.verticesCount = (ID.positions ? ID.positions.length : 0) / 3, ID.materialInfos = [pD], CD.push(ID)
          }
          return CD
        }
        merge(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const iD = Array.isArray(DD) ? DD.map((DD => ({
            vertexData: DD
          }))) : [{
            vertexData: DD
          }];
          return (0, SD.n)(this._mergeCoroutine(void 0, iD, CD, !1, cD, ID, pD))
        }* _mergeCoroutine(CD, cD) {
          let ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            pD = arguments.length > 3 ? arguments[3] : void 0,
            fD = arguments.length > 4 ? arguments[4] : void 0,
            bD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            QD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let wD = cD.map((DD => DD.vertexData)),
            SD = this;
          if (QD)
            for (const DD of wD) DD && (DD._validate(), !this.normals && DD.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && DD.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && DD.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && DD.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && DD.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && DD.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && DD.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && DD.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && DD.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && DD.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && DD.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && DD.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && DD.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const DD of wD)
            if (DD)
              if (QD) this.normals && !DD.normals && (DD.normals = new Float32Array(DD.positions.length)), this.tangents && !DD.tangents && (DD.tangents = new Float32Array(DD.positions.length / 3 * 4)), this.uvs && !DD.uvs && (DD.uvs = new Float32Array(DD.positions.length / 3 * 2)), this.uvs2 && !DD.uvs2 && (DD.uvs2 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs3 && !DD.uvs3 && (DD.uvs3 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs4 && !DD.uvs4 && (DD.uvs4 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs5 && !DD.uvs5 && (DD.uvs5 = new Float32Array(DD.positions.length / 3 * 2)), this.uvs6 && !DD.uvs6 && (DD.uvs6 = new Float32Array(DD.positions.length / 3 * 2)), this.colors && !DD.colors && (DD.colors = new Float32Array(DD.positions.length / 3 * 4), DD.colors.fill(1)), this.matricesIndices && !DD.matricesIndices && (DD.matricesIndices = new Float32Array(DD.positions.length / 3 * 4)), this.matricesWeights && !DD.matricesWeights && (DD.matricesWeights = new Float32Array(DD.positions.length / 3 * 4)), this.matricesIndicesExtra && !DD.matricesIndicesExtra && (DD.matricesIndicesExtra = new Float32Array(DD.positions.length / 3 * 4)), this.matricesWeightsExtra && !DD.matricesWeightsExtra && (DD.matricesWeightsExtra = new Float32Array(DD.positions.length / 3 * 4));
              else if (DD._validate(), !this.normals !== !DD.normals || !this.tangents !== !DD.tangents || !this.uvs !== !DD.uvs || !this.uvs2 !== !DD.uvs2 || !this.uvs3 !== !DD.uvs3 || !this.uvs4 !== !DD.uvs4 || !this.uvs5 !== !DD.uvs5 || !this.uvs6 !== !DD.uvs6 || !this.colors !== !DD.colors || !this.matricesIndices !== !DD.matricesIndices || !this.matricesWeights !== !DD.matricesWeights || !this.matricesIndicesExtra !== !DD.matricesIndicesExtra || !this.matricesWeightsExtra !== !DD.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (bD) {
            let DD, ID = 0,
              pD = 0;
            const iD = [];
            let fD = null;
            const bD = [];
            for (const cD of this.splitBasedOnMaterialID()) bD.push({
              vertexData: cD,
              transform: CD
            });
            for (const CD of cD)
              if (CD.vertexData)
                for (const DD of CD.vertexData.splitBasedOnMaterialID()) bD.push({
                  vertexData: DD,
                  transform: CD.transform
                });
            bD.sort(((DD, CD) => {
              const cD = DD.vertexData.materialInfos ? DD.vertexData.materialInfos[0].materialIndex : 0,
                ID = CD.vertexData.materialInfos ? CD.vertexData.materialInfos[0].materialIndex : 0;
              return cD > ID ? 1 : cD === ID ? 0 : -1
            }));
            for (const CD of bD) {
              const cD = CD.vertexData;
              if (DD = cD.materialInfos ? cD.materialInfos[0].materialIndex : 0, fD && fD.materialIndex === DD) fD.indexCount += cD.indices.length, fD.verticesCount += cD.positions.length / 3;
              else {
                const CD = new MD;
                CD.materialIndex = DD, CD.indexStart = ID, CD.indexCount = cD.indices.length, CD.verticesStart = pD, CD.verticesCount = cD.positions.length / 3, iD.push(CD), fD = CD
              }
              ID += cD.indices.length, pD += cD.positions.length / 3
            }
            const QD = bD.splice(0, 1)[0];
            SD = QD.vertexData, CD = QD.transform, wD = bD.map((DD => DD.vertexData)), cD = bD, this.materialInfos = iD
          }
          const BD = wD.reduce(((DD, CD) => DD + (CD.indices?.length ?? 0)), SD.indices?.length ?? 0);
          let yD = fD || wD.some((DD => DD.indices === SD.indices)) ? SD.indices?.slice() : SD.indices;
          if (BD > 0) {
            let iD = yD?.length ?? 0;
            if (yD || (yD = new Array(BD)), yD.length !== BD) {
              if (Array.isArray(yD)) yD.length = BD;
              else {
                const DD = ID || yD instanceof Uint32Array ? new Uint32Array(BD) : new Uint16Array(BD);
                DD.set(yD), yD = DD
              }
              CD && CD.determinant() < 0 && DD._FlipFaces(yD, 0, iD)
            }
            let fD = SD.positions ? SD.positions.length / 3 : 0;
            for (const {
                vertexData: CD,
                transform: ID
              }
              of cD)
              if (CD.indices) {
                for (let DD = 0; DD < CD.indices.length; DD++) yD[iD + DD] = CD.indices[DD] + fD;
                ID && ID.determinant() < 0 && DD._FlipFaces(yD, iD, CD.indices.length), fD += CD.positions.length / 3, iD += CD.indices.length, pD && (yield)
              }
          }
          return this.indices = yD, this.positions = DD._MergeElement(iD.k.PositionKind, SD.positions, CD, cD.map((DD => [DD.vertexData.positions, DD.transform]))), pD && (yield), SD.normals && (this.normals = DD._MergeElement(iD.k.NormalKind, SD.normals, CD, cD.map((DD => [DD.vertexData.normals, DD.transform]))), pD && (yield)), SD.tangents && (this.tangents = DD._MergeElement(iD.k.TangentKind, SD.tangents, CD, cD.map((DD => [DD.vertexData.tangents, DD.transform]))), pD && (yield)), SD.uvs && (this.uvs = DD._MergeElement(iD.k.UVKind, SD.uvs, CD, cD.map((DD => [DD.vertexData.uvs, DD.transform]))), pD && (yield)), SD.uvs2 && (this.uvs2 = DD._MergeElement(iD.k.UV2Kind, SD.uvs2, CD, cD.map((DD => [DD.vertexData.uvs2, DD.transform]))), pD && (yield)), SD.uvs3 && (this.uvs3 = DD._MergeElement(iD.k.UV3Kind, SD.uvs3, CD, cD.map((DD => [DD.vertexData.uvs3, DD.transform]))), pD && (yield)), SD.uvs4 && (this.uvs4 = DD._MergeElement(iD.k.UV4Kind, SD.uvs4, CD, cD.map((DD => [DD.vertexData.uvs4, DD.transform]))), pD && (yield)), SD.uvs5 && (this.uvs5 = DD._MergeElement(iD.k.UV5Kind, SD.uvs5, CD, cD.map((DD => [DD.vertexData.uvs5, DD.transform]))), pD && (yield)), SD.uvs6 && (this.uvs6 = DD._MergeElement(iD.k.UV6Kind, SD.uvs6, CD, cD.map((DD => [DD.vertexData.uvs6, DD.transform]))), pD && (yield)), SD.colors && (this.colors = DD._MergeElement(iD.k.ColorKind, SD.colors, CD, cD.map((DD => [DD.vertexData.colors, DD.transform]))), (void 0 !== SD.hasVertexAlpha || cD.some((DD => void 0 !== DD.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = SD.hasVertexAlpha || cD.some((DD => DD.vertexData.hasVertexAlpha))), pD && (yield)), SD.matricesIndices && (this.matricesIndices = DD._MergeElement(iD.k.MatricesIndicesKind, SD.matricesIndices, CD, cD.map((DD => [DD.vertexData.matricesIndices, DD.transform]))), pD && (yield)), SD.matricesWeights && (this.matricesWeights = DD._MergeElement(iD.k.MatricesWeightsKind, SD.matricesWeights, CD, cD.map((DD => [DD.vertexData.matricesWeights, DD.transform]))), pD && (yield)), SD.matricesIndicesExtra && (this.matricesIndicesExtra = DD._MergeElement(iD.k.MatricesIndicesExtraKind, SD.matricesIndicesExtra, CD, cD.map((DD => [DD.vertexData.matricesIndicesExtra, DD.transform]))), pD && (yield)), SD.matricesWeightsExtra && (this.matricesWeightsExtra = DD._MergeElement(iD.k.MatricesWeightsExtraKind, SD.matricesWeightsExtra, CD, cD.map((DD => [DD.vertexData.matricesWeightsExtra, DD.transform])))), this
        }
        static _MergeElement(CD, cD, ID, pD) {
          const fD = pD.filter((DD => null !== DD[0] && void 0 !== DD[0]));
          if (!cD && 0 == fD.length) return cD;
          if (!cD) return this._MergeElement(CD, fD[0][0], fD[0][1], fD.slice(1));
          const bD = fD.reduce(((DD, CD) => DD + CD[0].length), cD.length),
            QD = CD === iD.k.PositionKind ? DD._TransformVector3Coordinates : CD === iD.k.NormalKind ? DD._TransformVector3Normals : CD === iD.k.TangentKind ? DD._TransformVector4Normals : () => {};
          if (cD instanceof Float32Array) {
            const DD = new Float32Array(bD);
            DD.set(cD), ID && QD(DD, ID, 0, cD.length);
            let CD = cD.length;
            for (const [cD, ID] of fD) DD.set(cD, CD), ID && QD(DD, ID, CD, cD.length), CD += cD.length;
            return DD
          } {
            const DD = new Array(bD);
            for (let ID = 0; ID < cD.length; ID++) DD[ID] = cD[ID];
            ID && QD(DD, ID, 0, cD.length);
            let CD = cD.length;
            for (const [cD, ID] of fD) {
              for (let ID = 0; ID < cD.length; ID++) DD[CD + ID] = cD[ID];
              ID && QD(DD, ID, CD, cD.length), CD += cD.length
            }
            return DD
          }
        }
        _validate() {
          if (!this.positions) throw new BD.f("Positions are required", BD.c.MeshInvalidPositionsError);
          const DD = (DD, CD) => {
              const cD = (0, iD.j)(DD);
              if (CD.length % cD !== 0) throw new Error("The " + DD + "s array count must be a multiple of " + cD);
              return CD.length / cD
            },
            CD = DD(iD.k.PositionKind, this.positions),
            cD = (cD, ID) => {
              const pD = DD(cD, ID);
              if (pD !== CD) throw new Error("The " + cD + "s element count (" + pD + ") does not match the positions count (" + CD + ")")
            };
          this.normals && cD(iD.k.NormalKind, this.normals), this.tangents && cD(iD.k.TangentKind, this.tangents), this.uvs && cD(iD.k.UVKind, this.uvs), this.uvs2 && cD(iD.k.UV2Kind, this.uvs2), this.uvs3 && cD(iD.k.UV3Kind, this.uvs3), this.uvs4 && cD(iD.k.UV4Kind, this.uvs4), this.uvs5 && cD(iD.k.UV5Kind, this.uvs5), this.uvs6 && cD(iD.k.UV6Kind, this.uvs6), this.colors && cD(iD.k.ColorKind, this.colors), this.matricesIndices && cD(iD.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && cD(iD.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && cD(iD.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && cD(iD.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const CD = this.serialize();
          return DD.Parse(CD)
        }
        serialize() {
          const DD = {};
          if (this.positions && (DD.positions = Array.from(this.positions)), this.normals && (DD.normals = Array.from(this.normals)), this.tangents && (DD.tangents = Array.from(this.tangents)), this.uvs && (DD.uvs = Array.from(this.uvs)), this.uvs2 && (DD.uvs2 = Array.from(this.uvs2)), this.uvs3 && (DD.uvs3 = Array.from(this.uvs3)), this.uvs4 && (DD.uvs4 = Array.from(this.uvs4)), this.uvs5 && (DD.uvs5 = Array.from(this.uvs5)), this.uvs6 && (DD.uvs6 = Array.from(this.uvs6)), this.colors && (DD.colors = Array.from(this.colors), DD.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (DD.matricesIndices = Array.from(this.matricesIndices), DD.matricesIndicesExpanded = !0), this.matricesWeights && (DD.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (DD.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), DD.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (DD.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), DD.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            DD.materialInfos = [];
            for (const CD of this.materialInfos) {
              const cD = {
                indexStart: CD.indexStart,
                indexCount: CD.indexCount,
                materialIndex: CD.materialIndex,
                verticesStart: CD.verticesStart,
                verticesCount: CD.verticesCount
              };
              DD.materialInfos.push(cD)
            }
          }
          return DD
        }
        static ExtractFromMesh(CD, cD, ID) {
          return DD._ExtractFrom(CD, cD, ID)
        }
        static ExtractFromGeometry(CD, cD, ID) {
          return DD._ExtractFrom(CD, cD, ID)
        }
        static _ExtractFrom(CD, cD, ID) {
          const pD = new DD;
          if (CD.isVerticesDataPresent(iD.k.PositionKind) && (pD.positions = CD.getVerticesData(iD.k.PositionKind, cD, ID)), CD.isVerticesDataPresent(iD.k.NormalKind) && (pD.normals = CD.getVerticesData(iD.k.NormalKind, cD, ID)), CD.isVerticesDataPresent(iD.k.TangentKind) && (pD.tangents = CD.getVerticesData(iD.k.TangentKind, cD, ID)), CD.isVerticesDataPresent(iD.k.UVKind) && (pD.uvs = CD.getVerticesData(iD.k.UVKind, cD, ID)), CD.isVerticesDataPresent(iD.k.UV2Kind) && (pD.uvs2 = CD.getVerticesData(iD.k.UV2Kind, cD, ID)), CD.isVerticesDataPresent(iD.k.UV3Kind) && (pD.uvs3 = CD.getVerticesData(iD.k.UV3Kind, cD, ID)), CD.isVerticesDataPresent(iD.k.UV4Kind) && (pD.uvs4 = CD.getVerticesData(iD.k.UV4Kind, cD, ID)), CD.isVerticesDataPresent(iD.k.UV5Kind) && (pD.uvs5 = CD.getVerticesData(iD.k.UV5Kind, cD, ID)), CD.isVerticesDataPresent(iD.k.UV6Kind) && (pD.uvs6 = CD.getVerticesData(iD.k.UV6Kind, cD, ID)), CD.isVerticesDataPresent(iD.k.ColorKind)) {
            const DD = CD.geometry || CD,
              fD = DD.getVertexBuffer(iD.k.ColorKind),
              bD = DD.getVerticesData(iD.k.ColorKind, cD, ID);
            if (3 === fD.getSize()) {
              const DD = new Float32Array(4 * bD.length / 3);
              for (let CD = 0, cD = 0; CD < bD.length; CD += 3, cD += 4) DD[cD] = bD[CD], DD[cD + 1] = bD[CD + 1], DD[cD + 2] = bD[CD + 2], DD[cD + 3] = 1;
              pD.colors = DD
            } else {
              if (4 !== fD.getSize()) throw new Error(`Unexpected number of color components: ${fD.getSize()}`);
              pD.colors = bD
            }
          }
          return CD.isVerticesDataPresent(iD.k.MatricesIndicesKind) && (pD.matricesIndices = CD.getVerticesData(iD.k.MatricesIndicesKind, cD, ID)), CD.isVerticesDataPresent(iD.k.MatricesWeightsKind) && (pD.matricesWeights = CD.getVerticesData(iD.k.MatricesWeightsKind, cD, ID)), CD.isVerticesDataPresent(iD.k.MatricesIndicesExtraKind) && (pD.matricesIndicesExtra = CD.getVerticesData(iD.k.MatricesIndicesExtraKind, cD, ID)), CD.isVerticesDataPresent(iD.k.MatricesWeightsExtraKind) && (pD.matricesWeightsExtra = CD.getVerticesData(iD.k.MatricesWeightsExtraKind, cD, ID)), pD.indices = CD.ncD(cD, ID), pD
        }
        static CreateRibbon(DD) {
          throw (0, fD.m)("ribbonBuilder")
        }
        static CreateBox(DD) {
          throw (0, fD.m)("boxBuilder")
        }
        static CreateTiledBox(DD) {
          throw (0, fD.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(DD) {
          throw (0, fD.m)("tiledPlaneBuilder")
        }
        static CreateSphere(DD) {
          throw (0, fD.m)("sphereBuilder")
        }
        static CreateCylinder(DD) {
          throw (0, fD.m)("cylinderBuilder")
        }
        static CreateTorus(DD) {
          throw (0, fD.m)("torusBuilder")
        }
        static CreateLineSystem(DD) {
          throw (0, fD.m)("linesBuilder")
        }
        static CreateDashedLines(DD) {
          throw (0, fD.m)("linesBuilder")
        }
        static CreateGround(DD) {
          throw (0, fD.m)("groundBuilder")
        }
        static CreateTiledGround(DD) {
          throw (0, fD.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(DD) {
          throw (0, fD.m)("groundBuilder")
        }
        static CreatePlane(DD) {
          throw (0, fD.m)("planeBuilder")
        }
        static CreateDisc(DD) {
          throw (0, fD.m)("discBuilder")
        }
        static CreatePolygon(DD, CD, cD, ID, pD, iD, bD) {
          throw (0, fD.m)("polygonBuilder")
        }
        static CreateIcoSphere(DD) {
          throw (0, fD.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(DD) {
          throw (0, fD.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || pD.p.Up();
          throw (0, fD.m)("capsuleBuilder")
        }
        static CreateTorusKnot(DD) {
          throw (0, fD.m)("torusKnotBuilder")
        }
        static ComputeNormals(DD, CD, cD, ID) {
          let iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD = !1,
            UD = !1,
            xD = !1,
            qD = !1,
            JD = 1,
            KD = 0,
            aD = null;
          ID && (HD = !!ID.facetNormals, UD = !!ID.facetPositions, xD = !!ID.facetPartitioning, JD = !0 === ID.useRightHandedSystem ? -1 : 1, KD = ID.ratio || 0, qD = !!ID.depthSort, aD = ID.distanceTo, qD && void 0 === aD && (aD = pD.p.Zero()));
          let VD = 0,
            zD = 0,
            jD = 0,
            lD = 0;
          for (xD && ID && ID.bbSize && (VD = ID.subDiv.X * KD / ID.bbSize.x, zD = ID.subDiv.Y * KD / ID.bbSize.y, jD = ID.subDiv.Z * KD / ID.bbSize.z, lD = ID.subDiv.max * ID.subDiv.max, ID.facetPartitioning.length = 0), iD = 0; iD < DD.length; iD++) cD[iD] = 0;
          const LD = CD.length / 3 | 0;
          for (iD = 0; iD < LD; iD++) {
            if (oD = 3 * CD[3 * iD], vD = oD + 1, ND = oD + 2, gD = 3 * CD[3 * iD + 1], XD = gD + 1, mD = gD + 2, nD = 3 * CD[3 * iD + 2], OD = nD + 1, PD = nD + 2, fD = DD[oD] - DD[gD], bD = DD[vD] - DD[XD], QD = DD[ND] - DD[mD], wD = DD[nD] - DD[gD], SD = DD[OD] - DD[XD], BD = DD[PD] - DD[mD], yD = JD * (bD * BD - QD * SD), MD = JD * (QD * wD - fD * BD), tD = JD * (fD * SD - bD * wD), ZD = Math.sqrt(yD * yD + MD * MD + tD * tD), ZD = 0 === ZD ? 1 : ZD, yD /= ZD, MD /= ZD, tD /= ZD, HD && ID && (ID.facetNormals[iD].x = yD, ID.facetNormals[iD].y = MD, ID.facetNormals[iD].z = tD), UD && ID && (ID.facetPositions[iD].x = (DD[oD] + DD[gD] + DD[nD]) / 3, ID.facetPositions[iD].y = (DD[vD] + DD[XD] + DD[OD]) / 3, ID.facetPositions[iD].z = (DD[ND] + DD[mD] + DD[PD]) / 3), xD && ID) {
              const CD = Math.floor((ID.facetPositions[iD].x - ID.bInfo.minimum.x * KD) * VD),
                cD = Math.floor((ID.facetPositions[iD].y - ID.bInfo.minimum.y * KD) * zD),
                pD = Math.floor((ID.facetPositions[iD].z - ID.bInfo.minimum.z * KD) * jD),
                fD = Math.floor((DD[oD] - ID.bInfo.minimum.x * KD) * VD),
                bD = Math.floor((DD[vD] - ID.bInfo.minimum.y * KD) * zD),
                QD = Math.floor((DD[ND] - ID.bInfo.minimum.z * KD) * jD),
                wD = Math.floor((DD[gD] - ID.bInfo.minimum.x * KD) * VD),
                SD = Math.floor((DD[XD] - ID.bInfo.minimum.y * KD) * zD),
                BD = Math.floor((DD[mD] - ID.bInfo.minimum.z * KD) * jD),
                yD = Math.floor((DD[nD] - ID.bInfo.minimum.x * KD) * VD),
                MD = Math.floor((DD[OD] - ID.bInfo.minimum.y * KD) * zD),
                tD = Math.floor((DD[PD] - ID.bInfo.minimum.z * KD) * jD),
                ZD = fD + ID.subDiv.max * bD + lD * QD,
                HD = wD + ID.subDiv.max * SD + lD * BD,
                UD = yD + ID.subDiv.max * MD + lD * tD,
                xD = CD + ID.subDiv.max * cD + lD * pD;
              ID.facetPartitioning[xD] = ID.facetPartitioning[xD] ? ID.facetPartitioning[xD] : [], ID.facetPartitioning[ZD] = ID.facetPartitioning[ZD] ? ID.facetPartitioning[ZD] : [], ID.facetPartitioning[HD] = ID.facetPartitioning[HD] ? ID.facetPartitioning[HD] : [], ID.facetPartitioning[UD] = ID.facetPartitioning[UD] ? ID.facetPartitioning[UD] : [], ID.facetPartitioning[ZD].push(iD), HD != ZD && ID.facetPartitioning[HD].push(iD), UD != HD && UD != ZD && ID.facetPartitioning[UD].push(iD), xD != ZD && xD != HD && xD != UD && ID.facetPartitioning[xD].push(iD)
            }
            if (qD && ID && ID.facetPositions) {
              const DD = ID.depthSortedFacets[iD];
              DD.ind = 3 * iD, DD.sqDistance = pD.p.DistanceSquared(ID.facetPositions[iD], aD)
            }
            cD[oD] += yD, cD[vD] += MD, cD[ND] += tD, cD[gD] += yD, cD[XD] += MD, cD[mD] += tD, cD[nD] += yD, cD[OD] += MD, cD[PD] += tD
          }
          for (iD = 0; iD < cD.length / 3; iD++) yD = cD[3 * iD], MD = cD[3 * iD + 1], tD = cD[3 * iD + 2], ZD = Math.sqrt(yD * yD + MD * MD + tD * tD), ZD = 0 === ZD ? 1 : ZD, yD /= ZD, MD /= ZD, tD /= ZD, cD[3 * iD] = yD, cD[3 * iD + 1] = MD, cD[3 * iD + 2] = tD
        }
        static _ComputeSides(CD, cD, ID, iD, fD, bD, QD) {
          const wD = ID.length,
            SD = iD.length;
          let BD, yD;
          switch (CD = CD || DD.DEFAULTSIDE) {
            case DD.FRONTSIDE:
              break;
            case DD.BACKSIDE:
              for (BD = 0; BD < wD; BD += 3) {
                const DD = ID[BD];
                ID[BD] = ID[BD + 2], ID[BD + 2] = DD
              }
              for (yD = 0; yD < SD; yD++) iD[yD] = -iD[yD];
              break;
            case DD.DOUBLESIDE: {
              const DD = cD.length,
                CD = DD / 3;
              for (let ID = 0; ID < DD; ID++) cD[DD + ID] = cD[ID];
              for (BD = 0; BD < wD; BD += 3) ID[BD + wD] = ID[BD + 2] + CD, ID[BD + 1 + wD] = ID[BD + 1] + CD, ID[BD + 2 + wD] = ID[BD] + CD;
              for (yD = 0; yD < SD; yD++) iD[SD + yD] = -iD[yD];
              const MD = fD.length;
              let tD;
              for (tD = 0; tD < MD; tD++) fD[tD + MD] = fD[tD];
              for (bD = bD || new pD.s(0, 0, 1, 1), QD = QD || new pD.s(0, 0, 1, 1), tD = 0, BD = 0; BD < MD / 2; BD++) fD[tD] = bD.x + (bD.z - bD.x) * fD[tD], fD[tD + 1] = bD.y + (bD.w - bD.y) * fD[tD + 1], fD[tD + MD] = QD.x + (QD.z - QD.x) * fD[tD + MD], fD[tD + MD + 1] = QD.y + (QD.w - QD.y) * fD[tD + MD + 1], tD += 2;
              break
            }
          }
        }
        static Parse(CD) {
          const cD = new DD,
            ID = CD.positions;
          ID && cD.set(ID, iD.k.PositionKind);
          const pD = CD.normals;
          pD && cD.set(pD, iD.k.NormalKind);
          const fD = CD.tangents;
          fD && cD.set(fD, iD.k.TangentKind);
          const QD = CD.uvs;
          QD && cD.set(QD, iD.k.UVKind);
          const wD = CD.uvs2;
          wD && cD.set(wD, iD.k.UV2Kind);
          const SD = CD.uvs3;
          SD && cD.set(SD, iD.k.UV3Kind);
          const BD = CD.uvs4;
          BD && cD.set(BD, iD.k.UV4Kind);
          const yD = CD.uvs5;
          yD && cD.set(yD, iD.k.UV5Kind);
          const tD = CD.uvs6;
          tD && cD.set(tD, iD.k.UV6Kind);
          const ZD = CD.colors;
          ZD && (cD.set(bD.e.CheckColors4(ZD, ID.length / 3), iD.k.ColorKind), void 0 !== CD.hasVertexAlpha && (cD.hasVertexAlpha = CD.hasVertexAlpha));
          const oD = CD.matricesIndices;
          oD && cD.set(oD, iD.k.MatricesIndicesKind);
          const vD = CD.matricesWeights;
          vD && cD.set(vD, iD.k.MatricesWeightsKind);
          const ND = CD.indices;
          ND && (cD.indices = ND);
          const gD = CD.materialInfos;
          if (gD) {
            cD.materialInfos = [];
            for (const DD of gD) {
              const CD = new MD;
              CD.indexCount = DD.indexCount, CD.indexStart = DD.indexStart, CD.verticesCount = DD.verticesCount, CD.verticesStart = DD.verticesStart, CD.materialIndex = DD.materialIndex, cD.materialInfos.push(CD)
            }
          }
          return cD
        }
        static ImportVertexData(CD, cD) {
          const ID = DD.Parse(CD);
          cD.setAllVerticesData(ID, CD.updatable)
        }
      }, (() => {
        const pD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [wD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], cD = [wD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], tD = [wD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZD = [wD.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, ID.k)(DD, null, CD, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector3Coordinates" in DD,
            get: DD => DD._TransformVector3Coordinates
          },
          metadata: pD
        }, null, oD), (0, ID.k)(DD, null, cD, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector3Normals" in DD,
            get: DD => DD._TransformVector3Normals
          },
          metadata: pD
        }, null, oD), (0, ID.k)(DD, null, tD, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: DD => "_TransformVector4Normals" in DD,
            get: DD => DD._TransformVector4Normals
          },
          metadata: pD
        }, null, oD), (0, ID.k)(DD, null, ZD, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: DD => "_FlipFaces" in DD,
            get: DD => DD._FlipFaces
          },
          metadata: pD
        }, null, oD), pD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: pD
        })
      })(), DD.FRONTSIDE = ((0, ID.m)(DD, oD), 0), DD.BACKSIDE = 1, DD.DOUBLESIDE = 2, DD.DEFAULTSIDE = 0, DD._UniqueIdGenerator = 0, DD
    })()
  },
  39602: (DD, CD, cD) => {
    var ID = cD(36446),
      pD = cD(38048),
      iD = cD(39441),
      fD = cD(39531),
      bD = cD(39286);
    const QD = "bakedVertexAnimationSettingsInstanced";

    function wD(DD) {
      const CD = DD.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return CD instanceof Float32Array || CD instanceof Uint16Array
    }

    function SD(DD, CD, cD, ID) {
      cD.YF(Number.POSITIVE_INFINITY), ID.YF(Number.NEGATIVE_INFINITY);
      for (let pD = 0; pD < 3 * CD; pD += 3) {
        const CD = DD[pD],
          iD = DD[pD + 1],
          fD = DD[pD + 2];
        CD < cD.x && (cD.x = CD), iD < cD.y && (cD.y = iD), fD < cD.z && (cD.z = fD), CD > ID.x && (ID.x = CD), iD > ID.y && (ID.y = iD), fD > ID.z && (ID.z = fD)
      }
    }

    function BD(DD, CD, cD) {
      cD && (DD.x -= DD.x * cD.x + cD.y, DD.y -= DD.y * cD.x + cD.y, DD.z -= DD.z * cD.x + cD.y, CD.x += CD.x * cD.x + cD.y, CD.y += CD.y * cD.x + cD.y, CD.z += CD.z * cD.x + cD.y)
    }

    function yD(DD, CD, cD, pD, iD) {
      const fD = ID.l.cZ[7],
        bD = ID.l.cZ[8];
      for (let QD = 0; QD < 2; ++QD)
        for (let wD = 0; wD < 2; ++wD)
          for (let SD = 0; SD < 2; ++SD) fD.set(QD ? CD.x : DD.x, wD ? CD.y : DD.y, SD ? CD.z : DD.z), ID.p.TransformCoordinatesToRef(fD, cD, bD), pD.minimizeInPlace(bD), iD.maximizeInPlace(bD)
    }

    function MD(DD, CD, cD, pD, iD) {
      const fD = ID.l.cZ[7];
      for (let bD = 0; bD < 3 * CD; bD += 3) ID.p.TransformCoordinatesFromFloatsToRef(DD[bD], DD[bD + 1], DD[bD + 2], cD, fD), pD.minimizeInPlace(fD), iD.maximizeInPlace(fD)
    }
    let tD = !1;
    tD || (tD = !0, fD.d.prototype.thinInstanceAdd = function(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.hq().DZ().getCaps().instancedArrays) return pD.e.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(DD) ? DD.length : 1);
      const cD = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(DD))
        for (let ID = 0; ID < DD.length; ++ID) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD[ID], ID === DD.length - 1 && CD);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, DD, CD);
      return cD
    }, fD.d.prototype.thinInstanceAddSelf = function() {
      let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(ID.d.IdentityReadOnly, DD)
    }, fD.d.prototype.thinInstanceRegisterAttribute = function(DD, CD) {
      DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), this.removeVerticesData(DD), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[DD] = CD, this._userThinInstanceBuffersStorage.sizes[DD] = CD * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[DD] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[DD]), this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new bD.k(this.DZ(), this._userThinInstanceBuffersStorage.data[DD], DD, !0, !1, CD, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD])
    }, fD.d.prototype.thinInstanceSetMatrixAt = function(DD, CD) {
      let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || DD >= this._thinInstanceDataStorage.instancesCount) return !1;
      const ID = this._thinInstanceDataStorage.matrixData;
      return CD.copyToArray(ID, 16 * DD), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[DD] = CD), cD && (this.E1("matrix"), this.pZ || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, fD.d.prototype.thinInstanceSetAttributeAt = function(DD, CD, cD) {
      let ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[DD] || CD >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(DD, 0), this._userThinInstanceBuffersStorage.data[DD].set(cD, CD * this._userThinInstanceBuffersStorage.strides[DD]), ID && this.E1(DD), !0)
    }, Object.defineProperty(fD.d.prototype, "Q0", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(DD) {
        const CD = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        DD <= (CD ? CD.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = DD)
      },
      enumerable: !0,
      configurable: !0
    }), fD.d.prototype._thinInstanceCreateMatrixBuffer = function(DD, CD) {
      let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const ID = new bD.c(this.DZ(), CD, !cD, 16, !1, !0);
      for (let pD = 0; pD < 4; pD++) this.setVerticesBuffer(ID.createVertexBuffer(DD + pD, 4 * pD, 4));
      return ID
    }, fD.d.prototype.U3 = function(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (cD = cD || 16, "matrix" === DD) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = CD ? CD.length : 32 * cD, this._thinInstanceDataStorage.matrixData = CD, this._thinInstanceDataStorage.worldMatrices = null, null !== CD ? (this._thinInstanceDataStorage.instancesCount = CD.length / cD, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", CD, ID), this.pZ || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.pZ || this.refreshBoundingInfo());
      else if ("previousMatrix" === DD) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = CD, null !== CD && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", CD, ID));
      else if ("splatIndex" === DD && CD) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = CD.length / cD, this._userThinInstanceBuffersStorage.data[DD] = CD, this._userThinInstanceBuffersStorage.strides[DD] = cD, this._userThinInstanceBuffersStorage.sizes[DD] = CD.length;
        const ID = new bD.c(this.DZ(), CD, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = ID;
        for (let CD = 0; CD < 4; CD++) this.setVerticesBuffer(ID.createVertexBuffer(DD + CD, 4 * CD, 4))
      } else DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), null === CD ? this._userThinInstanceBuffersStorage?.data[DD] && (this.removeVerticesData(DD), delete this._userThinInstanceBuffersStorage.data[DD], delete this._userThinInstanceBuffersStorage.strides[DD], delete this._userThinInstanceBuffersStorage.sizes[DD], delete this._userThinInstanceBuffersStorage.vertexBuffers[DD]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[DD] = CD, this._userThinInstanceBuffersStorage.strides[DD] = cD, this._userThinInstanceBuffersStorage.sizes[DD] = CD.length, this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new bD.k(this.DZ(), CD, DD, !ID, !1, cD, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
    }, fD.d.prototype.E1 = function(DD) {
      "matrix" === DD ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === DD ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === DD ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[DD], 0, this._thinInstanceDataStorage.instancesCount) : (DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[DD] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[DD].isUpdatable() && this._thinInstanceRecreateBuffer(DD), this._userThinInstanceBuffersStorage.vertexBuffers[DD].updateDirectly(this._userThinInstanceBuffersStorage.data[DD], 0)))
    }, fD.d.prototype.thinInstancePartialBufferUpdate = function(DD, CD, cD) {
      if ("matrix" === DD) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof CD ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * cD * Float32Array.BYTES_PER_ELEMENT, 16 * CD), 16 * cD) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(CD, cD));
      else if (DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[DD]) {
        const ID = this._userThinInstanceBuffersStorage.vertexBuffers[DD];
        if ("number" === typeof CD) {
          const ID = new Float32Array(this._userThinInstanceBuffersStorage.data[DD].buffer, this._userThinInstanceBuffersStorage.data[DD].byteOffset + cD * this._userThinInstanceBuffersStorage.strides[DD] * Float32Array.BYTES_PER_ELEMENT, CD * this._userThinInstanceBuffersStorage.strides[DD]);
          this._userThinInstanceBuffersStorage.vertexBuffers[DD].updateDirectly(ID, cD * this._userThinInstanceBuffersStorage.strides[DD])
        } else ID.updateDirectly(CD, cD)
      }
    }, fD.d.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const DD = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let CD = 0; CD < this._thinInstanceDataStorage.instancesCount; ++CD) this._thinInstanceDataStorage.worldMatrices[CD] = ID.d.FromArray(DD, 16 * CD)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, fD.d.prototype.thinInstanceRefreshBoundingInfo = function() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const fD = this._thinInstanceDataStorage.boundingVectors;
      if (DD || !this.rawBoundingInfo) {
        if (fD.length = 0, pD && function(DD, CD, cD) {
            const pD = DD._userThinInstanceBuffersStorage,
              fD = pD?.data[QD],
              tD = pD?.strides[QD];
            if (!fD || !tD || tD < 4 || !wD(DD)) return !1;
            const ZD = DD._thinInstanceDataStorage.matrixData;
            if (!ZD) return !1;
            const oD = {},
              vD = ID.l.Vector4[0],
              ND = ID.l.cZ[1],
              gD = ID.l.cZ[2],
              XD = ID.l.cZ[3],
              mD = ID.l.cZ[4],
              nD = ID.l.cZ[5],
              OD = ID.l.cZ[6],
              PD = ID.l.Matrix[2],
              HD = DD.geometry ? DD.geometry.boundingBias : null,
              UD = DD.getTotalVertices();
            ND.YF(Number.POSITIVE_INFINITY), gD.YF(Number.NEGATIVE_INFINITY), XD.YF(Number.POSITIVE_INFINITY), mD.YF(Number.NEGATIVE_INFINITY);
            for (let iD = 0; iD < DD._thinInstanceDataStorage.instancesCount; ++iD) {
              const CD = iD * tD;
              vD.set(fD[CD], fD[CD + 1], fD[CD + 2], fD[CD + 3]);
              const pD = DD._getData({
                applyMorph: cD,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: vD,
                updatePositionsArray: !1,
                cache: oD
              }, null, bD.k.PositionKind);
              if (!pD) return !1;
              SD(pD, UD, nD, OD), BD(nD, OD, HD), ND.minimizeInPlace(nD), gD.maximizeInPlace(OD), ID.d.FromArrayToRef(ZD, 16 * iD, PD), HD ? yD(nD, OD, PD, XD, mD) : MD(pD, UD, PD, XD, mD)
            }
            return !(!isFinite(ND.x) || !isFinite(XD.x)) && (DD.VJ().reConstruct(XD, mD), DD.rawBoundingInfo = new iD.e(ND, gD), function(DD, CD) {
              DD.length = 0;
              for (let cD = 0; cD < CD.boundingBox.vectors.length; ++cD) DD.push(CD.boundingBox.vectors[cD].clone())
            }(CD, DD.rawBoundingInfo), DD._updateBoundingInfo(), !0)
          }(this, fD, cD)) return;
        pD && this.bakedVertexAnimationManager?.isEnabled && wD(this) ? this.refreshBoundingInfo({
          applySkeleton: CD,
          applyMorph: cD,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(CD, cD);
        const DD = this.VJ();
        this.rawBoundingInfo = new iD.e(DD.minimum, DD.maximum)
      }
      const tD = this.VJ(),
        ZD = this._thinInstanceDataStorage.matrixData;
      if (0 === fD.length)
        for (let ID = 0; ID < tD.boundingBox.vectors.length; ++ID) fD.push(tD.boundingBox.vectors[ID].clone());
      ID.l.cZ[0].YF(Number.POSITIVE_INFINITY), ID.l.cZ[1].YF(Number.NEGATIVE_INFINITY);
      for (let iD = 0; iD < this._thinInstanceDataStorage.instancesCount; ++iD) {
        ID.d.FromArrayToRef(ZD, 16 * iD, ID.l.Matrix[0]);
        for (let DD = 0; DD < fD.length; ++DD) ID.p.TransformCoordinatesToRef(fD[DD], ID.l.Matrix[0], ID.l.cZ[2]), ID.l.cZ[0].minimizeInPlace(ID.l.cZ[2]), ID.l.cZ[1].maximizeInPlace(ID.l.cZ[2])
      }
      tD.reConstruct(ID.l.cZ[0], ID.l.cZ[1]), this._updateBoundingInfo()
    }, fD.d.prototype._thinInstanceRecreateBuffer = function(DD) {
      let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === DD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, CD)) : "previousMatrix" === DD ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, CD)) : (DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[DD]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new bD.k(this.DZ(), this._userThinInstanceBuffersStorage.data[DD], DD, !CD, !1, this._userThinInstanceBuffersStorage.strides[DD], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
    }, fD.d.prototype._thinInstanceUpdateBufferSize = function(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      DD === bD.k.ColorKind && (DD = bD.k.ColorInstanceKind);
      const cD = "matrix" === DD;
      if (!cD && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[DD])) return;
      const ID = cD ? 16 : this._userThinInstanceBuffersStorage.strides[DD],
        pD = cD ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[DD];
      let iD = cD ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[DD];
      const fD = (this._thinInstanceDataStorage.instancesCount + CD) * ID;
      let QD = pD;
      for (; QD < fD;) QD *= 2;
      if (!iD || pD != QD) {
        if (iD) {
          const DD = new Float32Array(QD);
          DD.set(iD, 0), iD = DD
        } else iD = new Float32Array(QD);
        cD ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", iD, !1), this._thinInstanceDataStorage.matrixData = iD, this._thinInstanceDataStorage.matrixBufferSize = QD, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", iD, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[DD]?.dispose(), this._userThinInstanceBuffersStorage.data[DD] = iD, this._userThinInstanceBuffersStorage.sizes[DD] = QD, this._userThinInstanceBuffersStorage.vertexBuffers[DD] = new bD.k(this.DZ(), iD, DD, !0, !1, ID, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[DD]))
      }
    }, fD.d.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, fD.d.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  39569: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ND,
      g: () => ZD
    });
    var ID, pD, iD, fD, bD = cD(39154),
      QD = cD(39156),
      wD = cD(39174),
      SD = cD(36473),
      BD = cD(36446),
      yD = cD(39356),
      MD = cD(36488),
      tD = cD(39027);
    let ZD = (() => {
      var DD;
      let CD, cD, ID, pD, iD, fD, MD, tD, ZD, oD = yD.b,
        vD = [],
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        HD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [];
      return DD = class extends oD {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(CD) {
          this._billboardMode !== CD && (this._billboardMode = CD, this._cache.useBillboardPosition = 0 !== (this._billboardMode & DD.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(DD) {
          this._infiniteDistance !== DD && (this._infiniteDistance = DD)
        }
        constructor(CD) {
          let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(CD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new BD.p(0, 0, 1), this._up = new BD.p(0, 1, 0), this._right = new BD.p(1, 0, 0), this._position = (0, bD.m)(this, vD, BD.p.Zero()), this._rotation = ((0, bD.m)(this, ND), (0, bD.m)(this, gD, BD.p.Zero())), this._rotationQuaternion = ((0, bD.m)(this, XD), (0, bD.m)(this, mD, null)), this._scaling = ((0, bD.m)(this, nD), (0, bD.m)(this, OD, BD.p.One())), this._transformToBoneReferal = ((0, bD.m)(this, PD), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, bD.m)(this, HD, DD.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, bD.m)(this, UD), (0, bD.m)(this, xD, 1)), this._infiniteDistance = ((0, bD.m)(this, qD), (0, bD.m)(this, JD, !1)), this.ignoreNonUniformScaling = ((0, bD.m)(this, KD), (0, bD.m)(this, aD, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, bD.m)(this, VD), (0, bD.m)(this, zD, !1)), this._poseMatrix = ((0, bD.m)(this, jD), null), this._localMatrix = BD.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = BD.p.Zero(), this._absoluteScaling = BD.p.Zero(), this._absoluteRotationQuaternion = BD.h.Identity(), this._pivotMatrix = BD.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new SD.c, this._nonUniformScaling = !1, cD && this.hq().addTransformNode(this)
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
        get ci() {
          return this._scaling
        }
        set ci(DD) {
          this._scaling = DD, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(DD) {
          this._rotationQuaternion = DD, DD && this._rotation.YF(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return BD.p.TransformNormalFromFloatsToRef(0, 0, this.hq().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return BD.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return BD.p.TransformNormalFromFloatsToRef(this.hq().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(DD) {
          return this._poseMatrix ? (this._poseMatrix.YCD(DD), this) : (this._poseMatrix = DD.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = BD.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const CD = this._cache;
          return this._billboardMode === CD.billboardMode && this._billboardMode === DD.BILLBOARDMODE_NONE && (!CD.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.YCD(DD), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = CD, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = BD.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            CD = arguments.length > 1 ? arguments[1] : void 0,
            cD = arguments.length > 2 ? arguments[2] : void 0;
          const ID = this.clone("Clone of " + (this.name || this.id), DD || this.parent, !0);
          ID && cD && cD(this, ID);
          for (const pD of this.getChildTransformNodes(!0)) pD.instantiateHierarchy(ID, CD, cD);
          return ID
        }
        QJ() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return DD ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.YF(0), this._rotationQuaternion = this._rotationQuaternion || BD.h.Identity(), DD.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = DD, this._absolutePosition.K4(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get yfD() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(DD) {
          if (!DD) return this;
          let CD, cD, ID;
          if (void 0 === DD.x) {
            if (arguments.length < 3) return this;
            CD = arguments[0], cD = arguments[1], ID = arguments[2]
          } else CD = DD.x, cD = DD.y, ID = DD.z;
          if (this.parent) {
            const DD = BD.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(DD), BD.p.TransformCoordinatesFromFloatsToRef(CD, cD, ID, DD, this.position)
          } else this.position.x = CD, this.position.y = cD, this.position.z = ID;
          return this._absolutePosition.YCD(DD), this
        }
        setPositionWithLocalVector(DD) {
          return this.computeWorldMatrix(), this.position = BD.p.TransformNormal(DD, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const DD = BD.l.Matrix[0];
          return this._localMatrix.invertToRef(DD), BD.p.TransformNormal(this.position, DD)
        }
        locallyTranslate(DD) {
          return this.computeWorldMatrix(!0), this.position = BD.p.TransformCoordinates(DD, this._localMatrix), this
        }
        lookAt(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const fD = DD._LookAtVectorCache,
            bD = 0 === iD ? this.position : this.getAbsolutePosition();
          if (CD.subtractToRef(bD, fD), this.setDirection(fD, cD, ID, pD), 1 === iD && this.parent)
            if (this.rotationQuaternion) {
              const DD = BD.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(DD);
              const CD = BD.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(CD), CD.invert(), DD.multiplyToRef(CD, DD), this.rotationQuaternion.fromRotationMatrix(DD)
            } else {
              const DD = BD.l.Quaternion[0];
              BD.h.FromEulerVectorToRef(this.rotation, DD);
              const CD = BD.l.Matrix[0];
              DD.toRotationMatrix(CD);
              const cD = BD.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(cD), cD.invert(), CD.multiplyToRef(cD, CD), DD.fromRotationMatrix(CD), DD.toEulerAnglesToRef(this.rotation)
            } return this
        }
        qY(DD) {
          const CD = BD.p.Zero();
          return this.getDirectionToRef(DD, CD), CD
        }
        getDirectionToRef(DD, CD) {
          return BD.p.TransformNormalToRef(DD, this.getWorldMatrix(), CD), this
        }
        setDirection(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const pD = -Math.atan2(DD.z, DD.x) + Math.PI / 2,
            iD = Math.sqrt(DD.x * DD.x + DD.z * DD.z),
            fD = -Math.atan2(DD.y, iD);
          return this.rotationQuaternion ? BD.h.RotationYawPitchRollToRef(pD + CD, fD + cD, ID, this.rotationQuaternion) : (this.rotation.x = fD + cD, this.rotation.y = pD + CD, this.rotation.z = ID), this
        }
        setPivotPoint(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.hq().getRenderId() && this.computeWorldMatrix(!0);
          const cD = this.getWorldMatrix();
          if (1 == CD) {
            const CD = BD.l.Matrix[0];
            cD.invertToRef(CD), DD = BD.p.TransformCoordinates(DD, CD)
          }
          return this.setPivotMatrix(BD.d.Translation(-DD.x, -DD.y, -DD.z), !0)
        }
        getPivotPoint() {
          const DD = BD.p.Zero();
          return this.getPivotPointToRef(DD), DD
        }
        getPivotPointToRef(DD) {
          return DD.x = -this._pivotMatrix.m[12], DD.y = -this._pivotMatrix.m[13], DD.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const DD = BD.p.Zero();
          return this.getAbsolutePivotPointToRef(DD), DD
        }
        getAbsolutePivotPointToRef(DD) {
          return this.getPivotPointToRef(DD), BD.p.TransformCoordinatesToRef(DD, this.getWorldMatrix(), DD), this
        }
        sDD(DD) {
          if (this._isDirty) return this;
          if (this._children)
            for (const CD of this._children) CD.sDD(DD);
          return super.sDD(DD)
        }
        setParent(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!CD && !this.parent) return this;
          const pD = BD.l.Quaternion[0],
            iD = BD.l.cZ[0],
            fD = BD.l.cZ[1],
            bD = BD.l.Matrix[1];
          BD.d.IdentityToRef(bD);
          const QD = BD.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let wD = this.rotationQuaternion;
          return wD || (wD = DD._TmpRotation, BD.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, wD)), BD.d.ComposeToRef(this.ci, wD, this.position, QD), this.parent && QD.multiplyToRef(this.parent.computeWorldMatrix(!0), QD), CD && (CD.computeWorldMatrix(!0).invertToRef(bD), QD.multiplyToRef(bD, QD)), QD.decompose(fD, pD, iD, cD ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.YCD(pD) : pD.toEulerAnglesToRef(this.rotation), this.ci.YCD(fD), this.position.YCD(iD), this.parent = CD, ID && this.setPivotMatrix(BD.d.Identity()), this
        }
        addChild(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return DD.setParent(this, CD), this
        }
        removeChild(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return DD.parent !== this || DD.setParent(null, CD), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(DD) {
          return this._nonUniformScaling !== DD && (this._nonUniformScaling = DD, !0)
        }
        attachToBone(DD, CD) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = CD, this.parent = DD, DD.getSkeleton().prepare(!0), DD.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = DD ? this._currentParentWhenAttachingToBone : null, this) : (DD && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(CD, cD, ID) {
          let pD;
          if (CD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.YF(0)), ID && 0 !== ID) {
            if (this.parent) {
              const DD = this.parent.getWorldMatrix(),
                ID = BD.l.Matrix[0];
              DD.invertToRef(ID), CD = BD.p.TransformNormal(CD, ID), DD.determinant() < 0 && (cD *= -1)
            }
            pD = BD.h.RotationAxisToRef(CD, cD, DD._RotationAxisCache), pD.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else pD = BD.h.RotationAxisToRef(CD, cD, DD._RotationAxisCache), this.rotationQuaternion.multiplyToRef(pD, this.rotationQuaternion);
          return this
        }
        rotateAround(DD, CD, cD) {
          CD.normalize(), this.rotationQuaternion || (this.rotationQuaternion = BD.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.YF(0));
          const ID = BD.l.cZ[0],
            pD = BD.l.cZ[1],
            iD = BD.l.cZ[2],
            fD = BD.l.Quaternion[0],
            bD = BD.l.Matrix[0],
            QD = BD.l.Matrix[1],
            wD = BD.l.Matrix[2],
            SD = BD.l.Matrix[3];
          return DD.subtractToRef(this.position, ID), BD.d.TranslationToRef(ID.x, ID.y, ID.z, bD), BD.d.TranslationToRef(-ID.x, -ID.y, -ID.z, QD), BD.d.RotationAxisToRef(CD, cD, wD), QD.multiplyToRef(wD, SD), SD.multiplyToRef(bD, SD), SD.decompose(pD, fD, iD), this.position.addInPlace(iD), fD.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(DD, CD, cD) {
          const ID = DD.scale(CD);
          if (cD && 0 !== cD) this.setAbsolutePosition(this.getAbsolutePosition().add(ID));
          else {
            const DD = this.getPositionExpressedInLocalSpace().add(ID);
            this.setPositionWithLocalVector(DD)
          }
          return this
        }
        addRotation(DD, CD, cD) {
          let ID;
          this.rotationQuaternion ? ID = this.rotationQuaternion : (ID = BD.l.Quaternion[1], BD.h.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, ID));
          const pD = BD.l.Quaternion[0];
          return BD.h.RotationYawPitchRollToRef(CD, DD, cD, pD), ID.multiplyInPlace(pD), this.rotationQuaternion || ID.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== DD.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const ID = this.hq().getRenderId();
          if (!this._isDirty && !CD && (this._currentRenderId === ID || this.isSynchronized())) return this._currentRenderId = ID, this._worldMatrix;
          cD = cD || this.hq().activeCamera, this._updateCache();
          const pD = this._cache;
          pD.pivotMatrixUpdated = !1, pD.billboardMode = this.billboardMode, pD.infiniteDistance = this.infiniteDistance, pD.parent = this._parentNode, this._currentRenderId = ID, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const iD = this._getEffectiveParent(),
            fD = DD._TmpScaling;
          let bD, QD = this._position;
          if (this._infiniteDistance && !this.parent && cD) {
            const CD = cD.getWorldMatrix().m;
            QD = DD._TmpTranslation, QD.K4(this._position.x + CD[12], this._position.y + CD[13], this._position.z + CD[14])
          }
          if (fD.K4(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, bD = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(BD.h.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.K4(0, 0, 0))
            }
          } else bD = DD._TmpRotation, BD.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, bD);
          if (this._usePivotMatrix) {
            const DD = BD.l.Matrix[1];
            BD.d.ScalingToRef(fD.x, fD.y, fD.z, DD);
            const CD = BD.l.Matrix[0];
            bD.toRotationMatrix(CD), this._pivotMatrix.multiplyToRef(DD, BD.l.Matrix[4]), BD.l.Matrix[4].multiplyToRef(CD, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(QD.x, QD.y, QD.z)
          } else BD.d.ComposeToRef(fD, bD, QD, this._localMatrix);
          if (iD && iD.getWorldMatrix) {
            if (CD && iD.computeWorldMatrix(CD), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const DD = this.parent;
                DD.getSkeleton().prepare(), DD.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), BD.l.Matrix[7])
              } else BD.l.Matrix[7].YCD(iD.getWorldMatrix());
              const CD = BD.l.cZ[5],
                cD = BD.l.cZ[6],
                ID = BD.l.Quaternion[0];
              BD.l.Matrix[7].decompose(cD, ID, CD), BD.d.ScalingToRef(cD.x, cD.y, cD.z, BD.l.Matrix[7]), BD.l.Matrix[7].setTranslation(CD), DD.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(ID, CD), this._localMatrix.setTranslation(CD)), this._localMatrix.multiplyToRef(BD.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const DD = this.parent;
              DD.getSkeleton().prepare(), this._localMatrix.multiplyToRef(DD.getFinalMatrix(), BD.l.Matrix[6]), BD.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(iD.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.YCD(this._localMatrix);
          if (cD && this.billboardMode)
            if (pD.useBillboardPosition) {
              const CD = BD.l.cZ[0];
              this._worldMatrix.getTranslationToRef(CD);
              const ID = cD.globalPosition;
              this._worldMatrix.invertToRef(BD.l.Matrix[1]);
              const pD = BD.l.cZ[1];
              BD.p.TransformCoordinatesToRef(ID, BD.l.Matrix[1], pD), pD.normalize();
              const iD = -Math.atan2(pD.z, pD.x) + Math.PI / 2,
                fD = Math.sqrt(pD.x * pD.x + pD.z * pD.z),
                bD = -Math.atan2(pD.y, fD);
              if (BD.h.RotationYawPitchRollToRef(iD, bD, 0, BD.l.Quaternion[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
                const CD = BD.l.cZ[1];
                BD.l.Quaternion[0].toEulerAnglesToRef(CD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (CD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (CD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMODE_Z && (CD.z = 0), BD.d.RotationYawPitchRollToRef(CD.y, CD.x, CD.z, BD.l.Matrix[0])
              } else BD.d.FromQuaternionToRef(BD.l.Quaternion[0], BD.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(BD.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(BD.l.cZ[0])
            } else {
              const CD = BD.l.cZ[0];
              this._worldMatrix.getTranslationToRef(CD), BD.l.Matrix[1].YCD(cD.getViewMatrix());
              const ID = this.hq().useRightHandedSystem;
              if (ID && BD.l.Matrix[1].multiplyToRef(DD._TmpRHRestore, BD.l.Matrix[1]), BD.l.Matrix[1].setTranslationFromFloats(0, 0, 0), BD.l.Matrix[1].invertToRef(BD.l.Matrix[0]), (this.billboardMode & DD.BILLBOARDMODE_ALL) !== DD.BILLBOARDMODE_ALL) {
                BD.l.Matrix[0].decompose(void 0, BD.l.Quaternion[0], void 0);
                const CD = BD.l.cZ[1];
                BD.l.Quaternion[0].toEulerAnglesToRef(CD), (this.billboardMode & DD.BILLBOARDMODE_X) !== DD.BILLBOARDMODE_X && (CD.x = 0), (this.billboardMode & DD.BILLBOARDMODE_Y) !== DD.BILLBOARDMODE_Y && (CD.y = 0), (this.billboardMode & DD.BILLBOARDMODE_Z) !== DD.BILLBOARDMODE_Z && (CD.z = 0), ID && (CD.y += Math.PI), BD.d.RotationYawPitchRollToRef(CD.y, CD.x, CD.z, BD.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(BD.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(BD.l.cZ[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : iD && iD._nonUniformScaling ? this._updateNonUniformScalingState(iD._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.K4(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = BD.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), DD) {
            const DD = this.getChildren();
            for (let CD = 0; CD < DD.length; ++CD) {
              const cD = DD[CD];
              if (cD) {
                cD.computeWorldMatrix();
                const DD = BD.l.Matrix[0];
                cD._localMatrix.multiplyToRef(this._localMatrix, DD);
                const CD = BD.l.Quaternion[0];
                DD.decompose(cD.ci, CD, cD.position), cD.rotationQuaternion ? cD.rotationQuaternion.YCD(CD) : CD.toEulerAnglesToRef(cD.rotation)
              }
            }
          }
          this.ci.K4(1, 1, 1), this.position.K4(0, 0, 0), this.rotation.K4(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = BD.h.Identity()), this._worldMatrix = BD.d.Identity()
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
          return DD || (DD = this.hq().activeCamera), BD.p.TransformCoordinates(this.getAbsolutePosition(), DD.getViewMatrix())
        }
        getDistanceToCamera() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return DD || (DD = this.hq().activeCamera), this.getAbsolutePosition().subtract(DD.globalPosition).length()
        }
        clone(CD, cD, ID) {
          const pD = wD.d.Clone((() => new DD(CD, this.hq())), this);
          if (pD.name = CD, pD.id = CD, cD && (pD.parent = cD), !ID) {
            const DD = this.getDescendants(!0);
            for (let cD = 0; cD < DD.length; cD++) {
              const ID = DD[cD];
              ID.clone && ID.clone(CD + "." + ID.name, pD)
            }
          }
          return pD
        }
        serialize(DD) {
          const CD = wD.d.Serialize(this, DD);
          return CD.type = this.getClassName(), CD.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(CD), CD.localMatrix = this.getPivotMatrix().XcD(), CD.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (CD.QJ = !0), wD.d.AppendSerializedAnimations(this, CD), CD.df = this.serializeAnimationRanges(), CD
        }
        getChildTransformNodes(CD, cD) {
          const ID = [];
          return this._getDescendants(ID, CD, (CD => (!cD || cD(CD)) && CD instanceof DD)), ID
        }
        dispose(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.hq().stopAnimation(this), this.hq().removeTransformNode(this), this._parentContainer) {
            const DD = this._parentContainer.transformNodes.indexOf(this);
            DD > -1 && this._parentContainer.transformNodes.splice(DD, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), DD) {
            const DD = this.getChildTransformNodes(!0);
            for (const CD of DD) CD.parent = null, CD.computeWorldMatrix(!0)
          }
          super.dispose(DD, CD)
        }
        normalizeToUnitCube() {
          let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cD = arguments.length > 2 ? arguments[2] : void 0,
            ID = null,
            pD = null;
          CD && (this.rotationQuaternion ? (pD = this.rotationQuaternion.clone(), this.rotationQuaternion.K4(0, 0, 0, 1)) : this.rotation && (ID = this.rotation.clone(), this.rotation.K4(0, 0, 0)));
          const iD = this.getHierarchyBoundingVectors(DD, cD),
            fD = iD.max.subtract(iD.min),
            bD = Math.max(fD.x, fD.y, fD.z);
          if (0 === bD) return this;
          const QD = 1 / bD;
          return this.ci.scaleInPlace(QD), CD && (this.rotationQuaternion && pD ? this.rotationQuaternion.YCD(pD) : this.rotation && ID && this.rotation.YCD(ID)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(oD[Symbol.metadata] ?? null) : void 0;
        CD = [(0, QD.C)("position")], cD = [(0, QD.C)("rotation")], ID = [(0, QD.t)("rotationQuaternion")], pD = [(0, QD.C)("ci")], iD = [(0, QD.G)("billboardMode")], fD = [(0, QD.G)()], MD = [(0, QD.G)("infiniteDistance")], tD = [(0, QD.G)()], ZD = [(0, QD.G)()], (0, bD.k)(null, null, CD, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: DD => "_position" in DD,
            get: DD => DD._position,
            set: (DD, CD) => {
              DD._position = CD
            }
          },
          metadata: wD
        }, vD, ND), (0, bD.k)(null, null, cD, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_rotation" in DD,
            get: DD => DD._rotation,
            set: (DD, CD) => {
              DD._rotation = CD
            }
          },
          metadata: wD
        }, gD, XD), (0, bD.k)(null, null, ID, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: DD => "_rotationQuaternion" in DD,
            get: DD => DD._rotationQuaternion,
            set: (DD, CD) => {
              DD._rotationQuaternion = CD
            }
          },
          metadata: wD
        }, mD, nD), (0, bD.k)(null, null, pD, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "_scaling" in DD,
            get: DD => DD._scaling,
            set: (DD, CD) => {
              DD._scaling = CD
            }
          },
          metadata: wD
        }, OD, PD), (0, bD.k)(null, null, iD, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "_billboardMode" in DD,
            get: DD => DD._billboardMode,
            set: (DD, CD) => {
              DD._billboardMode = CD
            }
          },
          metadata: wD
        }, HD, UD), (0, bD.k)(null, null, fD, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: DD => "scalingDeterminant" in DD,
            get: DD => DD.scalingDeterminant,
            set: (DD, CD) => {
              DD.scalingDeterminant = CD
            }
          },
          metadata: wD
        }, xD, qD), (0, bD.k)(null, null, MD, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "_infiniteDistance" in DD,
            get: DD => DD._infiniteDistance,
            set: (DD, CD) => {
              DD._infiniteDistance = CD
            }
          },
          metadata: wD
        }, JD, KD), (0, bD.k)(null, null, tD, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "ignoreNonUniformScaling" in DD,
            get: DD => DD.ignoreNonUniformScaling,
            set: (DD, CD) => {
              DD.ignoreNonUniformScaling = CD
            }
          },
          metadata: wD
        }, aD, VD), (0, bD.k)(null, null, ZD, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: DD => "reIntegrateRotationIntoRotationQuaternion" in DD,
            get: DD => DD.reIntegrateRotationIntoRotationQuaternion,
            set: (DD, CD) => {
              DD.reIntegrateRotationIntoRotationQuaternion = CD
            }
          },
          metadata: wD
        }, zD, jD), wD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wD
        })
      })(), DD.BILLBOARDMODE_NONE = 0, DD.BILLBOARDMODE_X = 1, DD.BILLBOARDMODE_Y = 2, DD.BILLBOARDMODE_Z = 4, DD.BILLBOARDMODE_ALL = 7, DD.BILLBOARDMODE_USE_POSITION = 128, DD.BillboardUseParentOrientation = !1, DD._TmpRotation = BD.h.Zero(), DD._TmpScaling = BD.p.Zero(), DD._TmpTranslation = BD.p.Zero(), DD._TmpRHRestore = BD.d.Scaling(1, 1, -1), DD._LookAtVectorCache = new BD.p(0, 0, 0), DD._RotationAxisCache = new BD.h, DD
    })();

    function oD(DD, CD, cD) {
      const ID = wD.d.Parse((() => new ZD(DD.name, CD)), DD, CD, cD);
      if (DD.localMatrix ? ID.setPreTransformMatrix(BD.d.FromArray(DD.localMatrix)) : DD.pivotMatrix && ID.setPivotMatrix(BD.d.FromArray(DD.pivotMatrix)), ID.lH(DD.isEnabled), ID._waitingParsedUniqueId = DD.uniqueId, void 0 !== DD.parentId && (ID._waitingParentId = DD.parentId), void 0 !== DD.parentInstanceIndex && (ID._waitingParentInstanceIndex = DD.parentInstanceIndex), DD.QJ && (ID._waitingFreezeWorldMatrix = DD.QJ), DD.animations) {
        for (let CD = 0; CD < DD.animations.length; CD++) {
          const cD = DD.animations[CD],
            pD = (0, MD.b)("BABYLON.Animation");
          pD && ID.animations.push(pD.Parse(cD))
        }
        yD.b.ParseAnimationRanges(ID, DD, CD)
      }
      return DD.autoAnimate && CD.beginAnimation(ID, DD.autoAnimateFrom, DD.autoAnimateTo, DD.autoAnimateLoop, DD.autoAnimateSpeed || 1), ID
    }
    let vD = !1;

    function ND() {
      vD || (vD = !0, ZD.Parse = oD)
    }(ID = ZD.prototype).Yz ?? (ID.Yz = (0, tD.j)("TransformNode", "Yz")), (pD = ZD.prototype).applyImpulse ?? (pD.applyImpulse = (0, tD.j)("TransformNode", "applyImpulse")), (iD = ZD.prototype).applyAngularImpulse ?? (iD.applyAngularImpulse = (0, tD.j)("TransformNode", "applyAngularImpulse")), (fD = ZD.prototype).applyTorque ?? (fD.applyTorque = (0, tD.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(ZD.prototype, "physicsBody") || Object.defineProperty(ZD.prototype, "physicsBody", (0, tD.g)("TransformNode", "physicsBody"))
  },
  39538: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      try {
        const ID = DD.next();
        ID.done ? CD(ID) : ID.value ? ID.value.then((() => {
          ID.value = void 0, CD(ID)
        }), cD) : CD(ID)
      } catch (ID) {
        cD(ID)
      }
    }

    function pD() {
      let DD, CD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (cD, pD, iD) => {
        const fD = performance.now();
        void 0 === DD || fD - DD > CD ? (DD = fD, setTimeout((() => {
          ID(cD, pD, iD)
        }), 0)) : ID(cD, pD, iD)
      }
    }

    function iD(DD, CD, cD, ID, pD) {
      const iD = () => {
        let fD;
        const bD = DD => {
          DD.done ? cD(DD.value) : void 0 === fD ? fD = !0 : iD()
        };
        do {
          fD = void 0, pD && pD.aborted ? ID(new Error("Aborted")) : CD(DD, bD, ID), void 0 === fD && (fD = !1)
        } while (fD)
      };
      iD()
    }

    function fD(DD, CD) {
      let cD;
      return iD(DD, ID, (DD => cD = DD), (DD => {
        throw DD
      }), CD), cD
    }
    async function bD(DD, CD, cD) {
      return await new Promise(((ID, pD) => {
        iD(DD, CD, ID, pD, cD)
      }))
    }

    function QD(DD, CD) {
      return function() {
        return fD(DD(...arguments), CD)
      }
    }
    cD.d(CD, {
      e: () => pD,
      g: () => QD,
      j: () => bD,
      n: () => fD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);
export const id = 251;
export const ids = [251];
export const modules = {
  40042: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => pC,
      h: () => RC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39925),
      nC = ZC(36987),
      fC = ZC(36963),
      oC = ZC(40046),
      qC = ZC(38507),
      FC = ZC(37002),
      WC = ZC(39694),
      NC = ZC(37931),
      MC = ZC(37590),
      gC = ZC(39774),
      SC = ZC(39842);
    let pC = (() => {
      var CC;
      let zC, ZC, FC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC = oC.d,
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        TC = [],
        aC = [],
        tC = [],
        DC = [],
        jC = [],
        yC = [],
        LC = [],
        UC = [],
        BC = [],
        OC = [],
        kC = [],
        VC = [],
        Cz = [],
        zz = [],
        Zz = [],
        Qz = [],
        wz = [];
      return CC = class extends mC {
        get position() {
          return this._position
        }
        set position(CC) {
          this._position = CC
        }
        set upVector(CC) {
          this._upVector = CC
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let zC, ZC;
          if (this.mode === CC.PERSPECTIVE_CAMERA) this.fovMode === CC.FOVMODE_VERTICAL_FIXED ? (ZC = 2 * this.minZ * Math.tan(this.fov / 2), zC = this.mg().getAspectRatio(this) * ZC) : (zC = 2 * this.minZ * Math.tan(this.fov / 2), ZC = zC / this.mg().getAspectRatio(this));
          else {
            const CC = this.mg().getRenderWidth() / 2,
              QC = this.mg().getRenderHeight() / 2;
            zC = (this.orthoRight ?? CC) - (this.orthoLeft ?? -CC), ZC = (this.orthoTop ?? QC) - (this.orthoBottom ?? -QC)
          }
          return zC * ZC
        }
        set orthoLeft(CC) {
          this._orthoLeft = CC;
          for (const zC of this._rigCameras) zC.orthoLeft = CC
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(CC) {
          this._orthoRight = CC;
          for (const zC of this._rigCameras) zC.orthoRight = CC
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(CC) {
          this._orthoBottom = CC;
          for (const zC of this._rigCameras) zC.orthoBottom = CC
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(CC) {
          this._orthoTop = CC;
          for (const zC of this._rigCameras) zC.orthoTop = CC
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(zC / (2 * CC))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(CC) {
          this._baseInertia = CC
        }
        set mode(CC) {
          this._mode = CC;
          for (const zC of this._rigCameras) zC.mode = CC
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(zC, ZC, wC) {
          let oC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, gC.e)(), super(zC, wC, !1), this.inputs = (0, QC.n)(this, HC), this._position = (0, QC.n)(this, EC, fC.r.Zero()), this._upVector = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, fC.r.Up())), this.oblique = ((0, QC.n)(this, cC), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, QC.n)(this, uC, .8), this.projectionPlaneTilt = ((0, QC.n)(this, rC), (0, QC.n)(this, sC, 0)), this.minZ = ((0, QC.n)(this, TC), (0, QC.n)(this, aC, 1)), this.maxZ = ((0, QC.n)(this, tC), (0, QC.n)(this, DC, 1e4)), this._baseInertia = ((0, QC.n)(this, jC), .9), this._mode = CC.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new NC.d(0, 0, 1, 1), this.layerMask = (0, QC.n)(this, yC, 268435455), this.fovMode = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, CC.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, CC.RIG_MODE_NONE)), this.interaxialDistance = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this.isStereoscopicSideBySide = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, void 0)), this.ignoreCameraMaxZ = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, !1)), this.customRenderTargets = ((0, QC.n)(this, wz), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new nC.d, this.onProjectionMatrixChangedObservable = new nC.d, this.onAfterCheckInputsObservable = new nC.d, this.onRestoreStateObservable = new nC.d, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new fC.b, this._postProcesses = new Array, this._activeMeshes = new bC.i(256), this._globalPosition = fC.r.Zero(), this._computedViewMatrix = fC.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = fC.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = fC.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Km().defaultCameraLayerMask, this.Km().addCamera(this), oC && !this.Km().activeCamera && (this.Km().activeCamera = this), this.position = ZC, this.renderPassId = this.Km().mg().createRenderPassId(`Camera ${zC}`)
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
          return "cp"
        }
        toString(CC) {
          let zC = "Name: " + this.name;
          if (zC += ", type: " + this.getClassName(), this.animations)
            for (let ZC = 0; ZC < this.animations.length; ZC++) zC += ", animation[0]: " + this.animations[ZC].toString(CC);
          return zC
        }
        applyVerticalCorrection() {
          const CC = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -CC.x : CC.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(CC) {
          return -1 !== this._activeMeshes.indexOf(CC)
        }
        isReady() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (CC)
            for (const zC of this._postProcesses)
              if (zC && !zC.isReady()) return !1;
          return super.isReady(CC)
        }
        _initCache() {
          super._initCache(), this._cache.position = new fC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new fC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(CC) {
          CC || super._updateCache(), this._cache.position.Av(this.position), this._cache.upVector.Av(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const zC = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ZC = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === zC;
          if (!ZC) return !1;
          const QC = this.mg();
          return this.mode === CC.PERSPECTIVE_CAMERA ? ZC = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === QC.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ZC = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === QC.getRenderWidth() && this._cache.renderHeight === QC.getRenderHeight(), this.oblique && (ZC = ZC && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ZC
        }
        attachControl(CC, zC) {}
        detachControl(CC) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== CC.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let CC = 0; CC < this._postProcesses.length; CC++)
            if (null !== this._postProcesses[CC]) return this._postProcesses[CC];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const CC = this._getFirstPostProcess();
          CC && CC.markTextureDirty();
          for (let zC = 0, ZC = this._rigCameras.length; zC < ZC; zC++) {
            const CC = this._rigCameras[zC],
              ZC = CC._rigPostProcess;
            if (ZC) {
              "pass" === ZC.getEffectName() && (CC.isIntermediate = 0 === this._postProcesses.length), CC._postProcesses = this._postProcesses.slice(0).concat(ZC), ZC.markTextureDirty()
            } else CC._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !CC.isReusable() && this._postProcesses.indexOf(CC) > -1 ? (qC.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == zC || zC < 0 ? this._postProcesses.push(CC) : null === this._postProcesses[zC] ? this._postProcesses[zC] = CC : this._postProcesses.splice(zC, 0, CC), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.YzC(), this._postProcesses.indexOf(CC))
        }
        detachPostProcess(CC) {
          const zC = this._postProcesses.indexOf(CC); - 1 !== zC && (this._postProcesses[zC] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.YzC(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return fC.b.Identity()
        }
        getViewMatrix(CC) {
          return !CC && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Km().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(CC) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== CC && (this._projectionMatrix = CC)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(zC) {
          if (this._doNotComputeProjectionMatrix || !zC && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ZC = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ZC, this._refreshFrustumPlanes = !0;
          const QC = this.mg(),
            wC = this.Km(),
            bC = QC.BZC;
          if (this.mode === CC.PERSPECTIVE_CAMERA) {
            let zC;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = QC.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), zC = wC.useRightHandedSystem ? fC.b.PerspectiveFovRHToRef : fC.b.PerspectiveFovLHToRef, zC(this.fov, QC.getAspectRatio(this), bC ? ZC : this.minZ, bC ? this.minZ : ZC, this._projectionMatrix, this.fovMode === CC.FOVMODE_VERTICAL_FIXED, QC.isNDCHalfZRange, this.projectionPlaneTilt, bC)
          } else {
            const CC = QC.getRenderWidth() / 2,
              zC = QC.getRenderHeight() / 2;
            wC.useRightHandedSystem ? this.oblique ? fC.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -CC, this.orthoRight ?? CC, this.orthoBottom ?? -zC, this.orthoTop ?? zC, bC ? ZC : this.minZ, bC ? this.minZ : ZC, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, QC.isNDCHalfZRange) : fC.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -CC, this.orthoRight ?? CC, this.orthoBottom ?? -zC, this.orthoTop ?? zC, bC ? ZC : this.minZ, bC ? this.minZ : ZC, this._projectionMatrix, QC.isNDCHalfZRange) : this.oblique ? fC.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -CC, this.orthoRight ?? CC, this.orthoBottom ?? -zC, this.orthoTop ?? zC, bC ? ZC : this.minZ, bC ? this.minZ : ZC, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, QC.isNDCHalfZRange) : fC.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -CC, this.orthoRight ?? CC, this.orthoBottom ?? -zC, this.orthoTop ?? zC, bC ? ZC : this.minZ, bC ? this.minZ : ZC, this._projectionMatrix, QC.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = QC.getRenderWidth(), this._cache.renderHeight = QC.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(CC) {
          return (this.radius || (this.target ? fC.r.Distance(this.position, this.target) : this.position.length())) + CC
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? MC.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = MC.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), zC && this.rigCameras.length > 0) {
            let zC = !1;
            for (const ZC of this.rigCameras) ZC._updateFrustumPlanes(), zC = zC || CC.isInFrustum(ZC._frustumPlanes);
            return zC
          }
          return CC.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(CC) {
          return this._updateFrustumPlanes(), CC.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, WC.i)("Ray")
        }
        getForwardRayToRef(CC) {
          throw (0, WC.i)("Ray")
        }
        dispose(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Km().stopAnimation(this), this.Km().removeCamera(this); this._rigCameras.length > 0;) {
            const CC = this._rigCameras.pop();
            CC && CC.dispose()
          }
          if (this._parentContainer) {
            const CC = this._parentContainer.cameras.indexOf(this);
            CC > -1 && this._parentContainer.cameras.splice(CC, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== CC.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let CC = this._postProcesses.length;
            for (; --CC >= 0;) {
              const zC = this._postProcesses[CC];
              zC && zC.dispose(this)
            }
          }
          let QC = this.customRenderTargets.length;
          for (; --QC >= 0;) this.customRenderTargets[QC].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Km().mg().releaseRenderPassId(this.renderPassId), super.dispose(zC, ZC)
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
        setCameraRigMode(zC, ZC) {
          if (this.cameraRigMode !== zC) {
            for (; this._rigCameras.length > 0;) {
              const CC = this._rigCameras.pop();
              CC && CC.dispose()
            }
            if (this.cameraRigMode = zC, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ZC.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== CC.RIG_MODE_NONE) {
              const CC = this.createRigCamera(this.name + "_L", 0);
              CC && (CC._isLeftCamera = !0);
              const zC = this.createRigCamera(this.name + "_R", 1);
              zC && (zC._isRightCamera = !0), CC && zC && (this._rigCameras.push(CC), this._rigCameras.push(zC))
            }
            this._setRigMode(ZC), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(CC) {}
        _getVRProjectionMatrix() {
          return fC.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.mg().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(CC, zC) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[CC] = zC, "interaxialDistance" === CC && (this._cameraRigParams.stereoHalfAngle = zC / .0637 * (Math.PI / 180))
        }
        createRigCamera(CC, zC) {
          return null
        }
        _updateRigCameras() {
          for (let CC = 0; CC < this._rigCameras.length; CC++) this._rigCameras[CC].minZ = this.minZ, this._rigCameras[CC].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[CC].fov = this.fov, this._rigCameras[CC].upVector.Av(this.upVector);
          this.cameraRigMode === CC.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const CC = SC.d.Serialize(this);
          return CC.uniqueId = this.uniqueId, CC.type = this.getClassName(), this.parent && this.parent._serializeAsParent(CC), this.inputs && this.inputs.serialize(CC), SC.d.AppendSerializedAnimations(this, CC), CC.np = this.serializeAnimationRanges(), CC.isEnabled = this.isEnabled(), CC
        }
        clone(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QC = SC.d.Clone(CC.GetConstructorFromName(this.getClassName(), zC, this.Km(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return QC.name = zC, QC.parent = ZC, this.onClonedObservable.notifyObservers(QC), QC
        }
        yB(CC) {
          const zC = fC.r.Zero();
          return this.getDirectionToRef(CC, zC), zC
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(CC, zC) {
          fC.r.TransformNormalToRef(CC, this.getWorldMatrix(), zC)
        }
        static GetConstructorFromName(zC, ZC, QC) {
          let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const nC = oC.d.Construct(zC, ZC, QC, {
            interaxial_distance: wC,
            isStereoscopicSideBySide: bC
          });
          return nC || (() => CC._CreateDefaultParsedCamera(ZC, QC))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let CC = this.Km().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (CC *= -1), CC
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(mC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, wC.J)("position")], ZC = [(0, wC.J)("upVector")], FC = [(0, wC.M)()], pC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], (0, QC.j)(CC, null, FC, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: CC => "orthoLeft" in CC,
            get: CC => CC.orthoLeft
          },
          metadata: bC
        }, null, HC), (0, QC.j)(CC, null, pC, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: CC => "orthoRight" in CC,
            get: CC => CC.orthoRight
          },
          metadata: bC
        }, null, HC), (0, QC.j)(CC, null, PC, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: CC => "orthoBottom" in CC,
            get: CC => CC.orthoBottom
          },
          metadata: bC
        }, null, HC), (0, QC.j)(CC, null, GC, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: CC => "orthoTop" in CC,
            get: CC => CC.orthoTop
          },
          metadata: bC
        }, null, HC), (0, QC.j)(CC, null, IC, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: CC => "inertia" in CC,
            get: CC => CC.inertia
          },
          metadata: bC
        }, null, HC), (0, QC.j)(CC, null, iC, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: CC => "mode" in CC,
            get: CC => CC.mode
          },
          metadata: bC
        }, null, HC), (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: CC => "_position" in CC,
            get: CC => CC._position,
            set: (CC, zC) => {
              CC._position = zC
            }
          },
          metadata: bC
        }, EC, lC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: CC => "_upVector" in CC,
            get: CC => CC._upVector,
            set: (CC, zC) => {
              CC._upVector = zC
            }
          },
          metadata: bC
        }, XC, cC), (0, QC.j)(null, null, RC, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: CC => "fov" in CC,
            get: CC => CC.fov,
            set: (CC, zC) => {
              CC.fov = zC
            }
          },
          metadata: bC
        }, uC, rC), (0, QC.j)(null, null, AC, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: CC => "projectionPlaneTilt" in CC,
            get: CC => CC.projectionPlaneTilt,
            set: (CC, zC) => {
              CC.projectionPlaneTilt = zC
            }
          },
          metadata: bC
        }, sC, TC), (0, QC.j)(null, null, xC, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "minZ" in CC,
            get: CC => CC.minZ,
            set: (CC, zC) => {
              CC.minZ = zC
            }
          },
          metadata: bC
        }, aC, tC), (0, QC.j)(null, null, JC, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "maxZ" in CC,
            get: CC => CC.maxZ,
            set: (CC, zC) => {
              CC.maxZ = zC
            }
          },
          metadata: bC
        }, DC, jC), (0, QC.j)(null, null, vC, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: CC => "layerMask" in CC,
            get: CC => CC.layerMask,
            set: (CC, zC) => {
              CC.layerMask = zC
            }
          },
          metadata: bC
        }, yC, LC), (0, QC.j)(null, null, eC, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "fovMode" in CC,
            get: CC => CC.fovMode,
            set: (CC, zC) => {
              CC.fovMode = zC
            }
          },
          metadata: bC
        }, UC, BC), (0, QC.j)(null, null, hC, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "cameraRigMode" in CC,
            get: CC => CC.cameraRigMode,
            set: (CC, zC) => {
              CC.cameraRigMode = zC
            }
          },
          metadata: bC
        }, OC, kC), (0, QC.j)(null, null, KC, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: CC => "interaxialDistance" in CC,
            get: CC => CC.interaxialDistance,
            set: (CC, zC) => {
              CC.interaxialDistance = zC
            }
          },
          metadata: bC
        }, VC, Cz), (0, QC.j)(null, null, YC, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: CC => "isStereoscopicSideBySide" in CC,
            get: CC => CC.isStereoscopicSideBySide,
            set: (CC, zC) => {
              CC.isStereoscopicSideBySide = zC
            }
          },
          metadata: bC
        }, zz, Zz), (0, QC.j)(null, null, dC, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "ignoreCameraMaxZ" in CC,
            get: CC => CC.ignoreCameraMaxZ,
            set: (CC, zC) => {
              CC.ignoreCameraMaxZ = zC
            }
          },
          metadata: bC
        }, Qz, wz), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC._CreateDefaultParsedCamera = (CC, zC) => {
        throw (0, WC.i)("UniversalCamera")
      }, CC.PERSPECTIVE_CAMERA = 0, CC.ORTHOGRAPHIC_CAMERA = 1, CC.FOVMODE_VERTICAL_FIXED = 0, CC.FOVMODE_HORIZONTAL_FIXED = 1, CC.RIG_MODE_NONE = 0, CC.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, CC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, CC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, CC.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, CC.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, CC.RIG_MODE_VR = 20, CC.RIG_MODE_CUSTOM = 22, CC.ForceAttachControlToAlwaysPreventDefault = !1, CC
    })();

    function PC(CC, zC) {
      const ZC = CC.type,
        QC = pC.GetConstructorFromName(ZC, CC.name, zC, CC.interaxial_distance, CC.isStereoscopicSideBySide),
        wC = SC.d.Parse(QC, CC, zC);
      if (void 0 !== CC.parentId && (wC._waitingParentId = CC.parentId), void 0 !== CC.parentInstanceIndex && (wC._waitingParentInstanceIndex = CC.parentInstanceIndex), wC.inputs && (wC.inputs.parse(CC), wC._setupInputs()), CC.upVector && (wC.upVector = fC.r.FromArray(CC.upVector)), wC.setPosition && (wC.position.L_(0, 0, 0), wC.setPosition(fC.r.FromArray(CC.position))), CC.target && wC.setTarget && wC.setTarget(fC.r.FromArray(CC.target)), CC.cameraRigMode) {
        const zC = CC.interaxial_distance ? {
          interaxialDistance: CC.interaxial_distance
        } : {};
        wC.setCameraRigMode(CC.cameraRigMode, zC)
      }
      if (CC.animations) {
        for (let zC = 0; zC < CC.animations.length; zC++) {
          const ZC = CC.animations[zC],
            QC = (0, FC.c)("BABYLON.Animation");
          QC && wC.animations.push(QC.Parse(ZC))
        }
        oC.d.ParseAnimationRanges(wC, CC, zC)
      }
      return CC.autoAnimate && zC.beginAnimation(wC, CC.autoAnimateFrom, CC.autoAnimateTo, CC.autoAnimateLoop, CC.autoAnimateSpeed || 1), void 0 !== CC.isEnabled && wC.IK(CC.isEnabled), wC
    }
    let GC = !1;

    function RC() {
      GC || (GC = !0, pC.Parse = PC)
    }
  },
  40054: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC) {
        this._cameraPosition = zC, this._behavior = ZC, this.activeInput = !1, this.speed = 1, this.RL = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new QC.r, this.rotationAccumulatedPixels = new QC.r, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = QC.r.Zero(), this.rotationDeltaCurrentFrame = QC.r.Zero(), this._zoomVelocity = 0, this._panVelocity = new QC.r, this.referenceFrameRate = 60, this._rotationVelocity = new QC.r, this._prevFrameTimeMs = 0, this._scene = CC
      }
      computeCurrentFrameDeltas() {
        const CC = this._scene.mg().getDeltaTime(),
          zC = this._getEffectiveDeltaMs(CC);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Q_(0), this.rotationDeltaCurrentFrame.Q_(0), this.zoomDeltaCurrentFrame = 0, void(CC > 0 && (this._prevFrameTimeMs = CC));
        this.panDeltaCurrentFrame.Q_(0), this.rotationDeltaCurrentFrame.Q_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.L_(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * zC, this.panDeltaCurrentFrame), this._rotationVelocity.L_(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.L_(this._rotationVelocity.x * this.speed * this.rotationXSpeed * zC, this._rotationVelocity.y * this.speed * this.rotationYSpeed * zC, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.RL * this._zoomSpeedMultiplier) * zC, CC > 0 && (this._prevFrameTimeMs = CC), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Q_(0), this.rotationAccumulatedPixels.Q_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Q_(0), this.rotationAccumulatedPixels.Q_(0)
      }
      resetPanVelocity() {
        this._panVelocity.Q_(0), this.panAccumulatedPixels.Q_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(CC) {
        const zC = this._scene.mg().getDeltaTime(),
          ZC = this._getEffectiveDeltaMs(zC),
          QC = 1e3 / this.referenceFrameRate;
        return Math.pow(CC, ZC / QC)
      }
      getFrameIndependentInputScale(CC) {
        const zC = 1 - CC;
        if (zC <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(CC)) / zC
      }
      _getEffectiveDeltaMs(CC) {
        return CC > 0 ? CC : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(CC, zC, ZC) {
        let QC = CC;
        const wC = this._scene.mg().getDeltaTime(),
          bC = this._getEffectiveDeltaMs(wC);
        if (0 === bC) return QC;
        const nC = this.getFrameIndependentDecay(ZC);
        if (QC *= nC, 0 !== zC || this.activeInput) {
          const CC = 1 - ZC;
          QC += zC / bC * (CC > 0 ? (1 - nC) / CC : 1)
        } else Math.abs(QC) < 1e-6 && (QC = 0);
        return QC
      }
    }
  },
  40061: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC) {
        this.inputMap = [], this.handlers = CC, this._createDefaultEntries = zC, this.resetInputMap()
      }
      resolveInteraction(CC, zC) {
        for (const ZC of this.inputMap)
          if (ZC.source === CC && this._entryMatches(ZC, zC)) return ZC;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(CC, zC, ZC) {
        const QC = this.inputMap;
        for (let wC = 0; wC < QC.length; wC++) {
          const bC = QC[wC];
          if (bC.source === CC && bC.interaction === zC && this._entryConditionsMatch(bC, ZC)) return bC
        }
      }
      getEntries(CC, zC, ZC) {
        const QC = [],
          wC = this.inputMap;
        for (let bC = 0; bC < wC.length; bC++) {
          const nC = wC[bC];
          nC.source === CC && nC.interaction === zC && this._entryConditionsMatch(nC, ZC) && QC.push(nC)
        }
        return QC
      }
      addEntry(CC) {
        const zC = this._entrySpecificity(CC);
        let ZC = this.inputMap.length;
        for (let QC = 0; QC < this.inputMap.length; QC++)
          if (this._entrySpecificity(this.inputMap[QC]) < zC) {
            ZC = QC;
            break
          } this.inputMap.splice(ZC, 0, CC)
      }
      setInteraction(CC, zC, ZC) {
        const QC = this.resolveInteraction(CC, zC);
        return QC && this._entryCoversAllConditionsOf(QC, zC) ? (QC.interaction = ZC, !0) : (this.addEntry({
          source: CC,
          ...zC ?? {},
          interaction: ZC
        }), !0)
      }
      _entryCoversAllConditionsOf(CC, zC) {
        if (!zC) return !0;
        const ZC = CC;
        for (const QC of Object.keys(zC)) {
          const CC = zC[QC];
          if (void 0 !== CC)
            if ("modifiers" === QC) {
              const zC = ZC.modifiers ?? {};
              for (const ZC of Object.keys(CC))
                if (void 0 !== CC[ZC] && void 0 === zC[ZC]) return !1
            } else if (void 0 === ZC[QC]) return !1
        }
        return !0
      }
      setInteractions(CC, zC, ZC) {
        let QC = 0;
        const wC = this.inputMap;
        for (let bC = 0; bC < wC.length; bC++) {
          const nC = wC[bC];
          nC.source === CC && this._entryMatches(nC, zC) && (nC.interaction = ZC, QC++)
        }
        return QC
      }
      _entryMatches(CC, zC) {
        switch (CC.source) {
          case "pointer":
            return (void 0 === CC.button || CC.button === zC?.button) && this._matchModifiers(CC.modifiers, zC?.modifiers);
          case "wheel":
            return this._matchModifiers(CC.modifiers, zC?.modifiers);
          case "touch":
            return void 0 === CC.touchCount || CC.touchCount === zC?.touchCount;
          case "keyboard":
            return (void 0 === CC.key || (Array.isArray(CC.key) ? -1 !== CC.key.indexOf(zC?.key ?? -1) : CC.key === zC?.key)) && this._matchModifiers(CC.modifiers, zC?.modifiers)
        }
      }
      _entryConditionsMatch(CC, zC) {
        if (!zC) return !0;
        switch (CC.source) {
          case "pointer":
            return (!("button" in zC) || CC.button === zC.button) && (!("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers));
          case "wheel":
            return !("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers);
          case "touch":
            return !("touchCount" in zC) || CC.touchCount === zC.touchCount;
          case "keyboard":
            if ("key" in zC) {
              if (void 0 === CC.key) return void 0 === zC.key;
              if (void 0 === zC.key || (Array.isArray(CC.key) ? -1 === CC.key.indexOf(zC.key) : CC.key !== zC.key)) return !1
            }
            return !("modifiers" in zC) || this._entryModifiersMatch(CC.modifiers, zC.modifiers)
        }
      }
      _entrySpecificity(CC) {
        let zC = 0;
        return "button" in CC && void 0 !== CC.button && zC++, "key" in CC && void 0 !== CC.key && zC++, "touchCount" in CC && void 0 !== CC.touchCount && zC++, "modifiers" in CC && CC.modifiers && zC++, zC
      }
      _matchModifiers(CC, zC) {
        return !CC || (void 0 === CC.ctrl || CC.ctrl === (zC?.ctrl ?? !1)) && ((void 0 === CC.shift || CC.shift === (zC?.shift ?? !1)) && (void 0 === CC.alt || CC.alt === (zC?.alt ?? !1)))
      }
      _entryModifiersMatch(CC, zC) {
        if (!zC) return !CC;
        return void 0 !== zC.ctrl || void 0 !== zC.shift || void 0 !== zC.alt ? (void 0 === zC.ctrl || CC?.ctrl === zC.ctrl) && ((void 0 === zC.shift || CC?.shift === zC.shift) && (void 0 === zC.alt || CC?.alt === zC.alt)) : !CC || void 0 === CC.ctrl && void 0 === CC.shift && void 0 === CC.alt
      }
    }
  },
  40035: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => PC,
      h: () => SC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(40042),
      nC = ZC(36963),
      fC = ZC(36968),
      oC = ZC(40049),
      qC = ZC(40046),
      FC = ZC(40054),
      WC = ZC(40061);
    class NC extends FC.b {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC), this.input = new WC.d({
          translate: (CC, zC, ZC) => {
            this.panAccumulatedPixels.x += CC, this.panAccumulatedPixels.y += zC, this.panAccumulatedPixels.z += ZC
          },
          rotate: (CC, zC) => {
            this.rotationAccumulatedPixels.x += CC, this.rotationAccumulatedPixels.y += zC
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
    const MC = nC.b.Zero(),
      gC = nC.f.Identity();
    let SC = (() => {
        var CC;
        let zC, ZC, qC, FC, WC = bC.d,
          SC = [],
          pC = [],
          PC = [],
          GC = [],
          RC = [],
          AC = [],
          xC = [],
          JC = [];
        return CC = class extends WC {
          get inertia() {
            return this._targetInertia
          }
          set inertia(CC) {
            this._targetInertia = CC, this.movement && (this.movement.panInertia = CC, this.movement.rotationInertia = CC)
          }
          constructor(CC, zC, ZC) {
            super(CC, zC, ZC, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new nC.r(0, 0, 0), this.cameraRotation = new nC.n(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, QC.n)(this, SC, !1), this.rotation = ((0, QC.n)(this, pC), (0, QC.n)(this, PC, void 0)), this.rotationQuaternion = (0, QC.n)(this, GC), this.speed = (0, QC.n)(this, RC, 2), this.noRotationConstraint = ((0, QC.n)(this, AC), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = fC.e, this._rotationEpsilon = fC.e, this.lockedTarget = (0, QC.n)(this, xC, null), this._currentTarget = ((0, QC.n)(this, JC), nC.r.Zero()), this._initialFocalDistance = 1, this._viewMatrix = nC.b.Zero(), this._cameraTransformMatrix = nC.b.Zero(), this._cameraRotationMatrix = nC.b.Zero(), this._transformedReferencePoint = nC.r.Zero(), this._deferredPositionUpdate = new nC.r, this._deferredRotationQuaternionUpdate = new nC.f, this._deferredRotationUpdate = new nC.r, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = nC.r.Forward(this.Km().useRightHandedSystem), this.rotation = new nC.r(0, this.Km().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new NC(this.Km(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(CC) {
            this.getWorldMatrix();
            const zC = nC.j.Eg[0],
              ZC = nC.j.Eg[1];
            return ZC.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ZC, zC), zC.scaleInPlace(CC), this.globalPosition.add(zC)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const CC = this.lockedTarget;
              CC.computeWorldMatrix().getTranslationToRef(CC.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.L_(0, 0, 0), this.cameraRotation.L_(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new nC.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(CC) {
            CC || super._updateCache();
            const zC = this._getLockedTargetPosition();
            zC ? this._cache.lockedTarget ? this._cache.lockedTarget.Av(zC) : this._cache.lockedTarget = zC.clone() : this._cache.lockedTarget = null, this._cache.rotation.Av(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.Av(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const CC = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(CC) : !CC) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const CC = this.mg();
            return this.speed * Math.sqrt(CC.getDeltaTime() / (100 * CC.getFps()))
          }
          setTarget(CC) {
            this.upVector.normalize(), this._initialFocalDistance = CC.subtract(this.position).length(), this.position.z === CC.z && (this.position.z += fC.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Km().useRightHandedSystem ? nC.b.LookAtRHToRef(this.position, CC, nC.r.UpReadOnly, MC) : nC.b.LookAtLHToRef(this.position, CC, nC.r.UpReadOnly, MC), MC.invert();
            const zC = this.rotationQuaternion || gC;
            nC.f.FromRotationMatrixToRef(MC, zC), zC.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(CC) {
            this.setTarget(CC)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(nC.j.Matrix[0]), nC.r.TransformNormalToRef(this.cameraDirection, nC.j.Matrix[0], nC.j.Eg[0]), this._deferredPositionUpdate.addInPlace(nC.j.Eg[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.Av(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.Av(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const CC = this.movement,
              zC = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            CC.panAccumulatedPixels.addInPlace(this.cameraDirection), CC.rotationAccumulatedPixels.x += this.cameraRotation.x, CC.rotationAccumulatedPixels.y += this.cameraRotation.y, CC.computeCurrentFrameDeltas(), this.cameraDirection.Av(CC.panDeltaCurrentFrame), this.cameraRotation.set(CC.rotationDeltaCurrentFrame.x, CC.rotationDeltaCurrentFrame.y);
            const ZC = this.speed * this._panningEpsilon;
            !zC && Math.abs(this.cameraDirection.x) < ZC && Math.abs(this.cameraDirection.y) < ZC && Math.abs(this.cameraDirection.z) < ZC && (this.cameraDirection.Q_(0), CC.resetPanVelocity());
            const QC = this.invertRotation ? -this.inverseRotationSpeed : 1,
              wC = this._decideIfNeedsToMove(),
              bC = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.Av(this.rotation), this._deferredPositionUpdate.Av(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.Av(this.rotationQuaternion), wC && this._updatePosition(), bC) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * QC, this._deferredRotationUpdate.y += this.cameraRotation.y * QC, !this.noRotationConstraint) {
                const CC = 1.570796;
                this._deferredRotationUpdate.x > CC && (this._deferredRotationUpdate.x = CC), this._deferredRotationUpdate.x < -CC && (this._deferredRotationUpdate.x = -CC)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.Av(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (nC.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.Av(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Q_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : nC.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return nC.r.TransformNormalToRef(nC.r.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), nC.r.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? oC.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (nC.f.FromEulerVectorToRef(this.rotation, gC), oC.c.Y.rotateByQuaternionToRef(gC, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(CC, zC, ZC) {
            if (this.Km().useRightHandedSystem ? nC.b.LookAtRHToRef(CC, zC, ZC, this._viewMatrix) : nC.b.LookAtLHToRef(CC, zC, ZC, this._viewMatrix), this.parent) {
              const CC = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(CC, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(zC, ZC) {
            if (this.cameraRigMode !== bC.d.RIG_MODE_NONE) {
              const ZC = new CC(zC, this.position.clone(), this.Km());
              return ZC.isRigCamera = !0, ZC.rigParent = this, this.cameraRigMode === bC.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new nC.f), ZC._cameraRigParams = {}, ZC.rotationQuaternion = new nC.f), ZC.mode = this.mode, ZC.orthoLeft = this.orthoLeft, ZC.orthoRight = this.orthoRight, ZC.orthoTop = this.orthoTop, ZC.orthoBottom = this.orthoBottom, ZC
            }
            return null
          }
          _updateRigCameras() {
            const CC = this._rigCameras[0],
              zC = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case bC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case bC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case bC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case bC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case bC.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ZC = this.cameraRigMode === bC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  QC = this.cameraRigMode === bC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ZC, CC), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * QC, zC);
                break
              }
              case bC.d.RIG_MODE_VR:
                CC.rotationQuaternion && zC.rotationQuaternion && this.rotationQuaternion ? (CC.rotationQuaternion.Av(this.rotationQuaternion), zC.rotationQuaternion.Av(this.rotationQuaternion)) : (CC.rotation.Av(this.rotation), zC.rotation.Av(this.rotation)), CC.position.Av(this.position), zC.position.Av(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(zC, ZC) {
            this.getTarget().subtractToRef(this.position, CC._TargetFocalPoint), CC._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const QC = CC._TargetFocalPoint.addInPlace(this.position);
            nC.b.TranslationToRef(-QC.x, -QC.y, -QC.z, CC._TargetTransformMatrix), CC._TargetTransformMatrix.multiplyToRef(nC.b.RotationAxis(ZC.upVector, zC), CC._RigCamTransformMatrix), nC.b.TranslationToRef(QC.x, QC.y, QC.z, CC._TargetTransformMatrix), CC._RigCamTransformMatrix.multiplyToRef(CC._TargetTransformMatrix, CC._RigCamTransformMatrix), nC.r.TransformCoordinatesToRef(this.position, CC._RigCamTransformMatrix, ZC.position), ZC.setTarget(QC)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(WC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.J)()], qC = [(0, wC.M)()], FC = [(0, wC.w)("lockedTargetId")], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: CC => "updateUpVectorFromRotation" in CC,
              get: CC => CC.updateUpVectorFromRotation,
              set: (CC, zC) => {
                CC.updateUpVectorFromRotation = zC
              }
            },
            metadata: bC
          }, SC, pC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: CC => "rotation" in CC,
              get: CC => CC.rotation,
              set: (CC, zC) => {
                CC.rotation = zC
              }
            },
            metadata: bC
          }, PC, GC), (0, QC.j)(null, null, qC, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: CC => "speed" in CC,
              get: CC => CC.speed,
              set: (CC, zC) => {
                CC.speed = zC
              }
            },
            metadata: bC
          }, RC, AC), (0, QC.j)(null, null, FC, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: CC => "lockedTarget" in CC,
              get: CC => CC.lockedTarget,
              set: (CC, zC) => {
                CC.lockedTarget = zC
              }
            },
            metadata: bC
          }, xC, JC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC._RigCamTransformMatrix = new nC.b, CC._TargetTransformMatrix = new nC.b, CC._TargetFocalPoint = new nC.r, CC
      })(),
      pC = !1;

    function PC() {
      pC || (pC = !0, qC.d.AddNodeConstructor("TargetCamera", ((CC, zC) => () => new SC(CC, nC.r.Zero(), zC))))
    }
  },
  39771: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(39721);
    let wC = !1;

    function bC() {
      wC || (wC = !0, QC.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, QC.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, QC.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, QC.b.prototype.getAspectRatio = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = CC.viewport;
        return this.getRenderWidth(zC) * ZC.width / (this.getRenderHeight(zC) * ZC.height)
      }, QC.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, QC.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  39860: (CC, zC, ZC) => {
    var QC = ZC(39721),
      wC = ZC(39865);
    let bC = !1;
    bC || (bC = !0, (0, wC.p)(), QC.b.prototype._loadFileAsync = async function(CC, zC, ZC) {
      return await new Promise(((QC, wC) => {
        this._loadFile(CC, (CC => {
          QC(CC)
        }), void 0, zC, ZC, ((CC, zC) => {
          wC(zC)
        }))
      }))
    })
  },
  39858: (CC, zC, ZC) => {
    (0, ZC(39774).e)()
  },
  39774: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(39721);
    let wC = !1;

    function bC() {
      wC || (wC = !0, QC.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, QC.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, QC.b.prototype.createRenderPassId = function(CC) {
        const zC = ++QC.b._RenderPassIdCounter;
        return this._renderPassNames[zC] = CC ?? "NONAME", zC
      }, QC.b.prototype.releaseRenderPassId = function(CC) {
        this._renderPassNames[CC] = void 0;
        for (let zC = 0; zC < this.scenes.length; ++zC) {
          const ZC = this.scenes[zC];
          for (let zC = 0; zC < ZC.meshes.length; ++zC) {
            const QC = ZC.meshes[zC];
            if (QC._releaseRenderPassId(CC), QC.Zx)
              for (let zC = 0; zC < QC.Zx.length; ++zC) {
                QC.Zx[zC]._removeDrawWrapper(CC)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(CC)
      })
    }
  },
  39891: (CC, zC, ZC) => {
    var QC = ZC(39896),
      wC = ZC(39721);
    let bC = !1;
    bC || (bC = !0, wC.b.GetCompatibleTextureLoader = QC.e)
  },
  39778: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC
    });
    var QC = ZC(39663);
    let wC = !1;

    function bC() {
      wC || (wC = !0, QC.ThinEngine.prototype.setAlphaMode = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ZC] === CC) {
          if (!zC) {
            const zC = 0 === CC;
            this.depthCullingState.depthMask !== zC && (this.depthCullingState.depthMask = zC)
          }
          return
        }
        const QC = 0 === CC;
        this._alphaState.setAlphaBlend(!QC, ZC), this._alphaState.setAlphaMode(CC, ZC), zC || (this.depthCullingState.depthMask = QC), this._alphaMode[ZC] = CC
      })
    }
  },
  39791: (CC, zC, ZC) => {
    var QC = ZC(39650),
      wC = ZC(38507),
      bC = ZC(39663),
      nC = ZC(39794),
      fC = ZC(39758);
    class oC extends nC.b {
      setDepthStencilTexture(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(CC, zC), !CC) return;
        const ZC = this._engine,
          QC = this._context,
          wC = CC._hardwareTexture;
        if (wC && CC._autoMSAAManagement && this._MSAAFramebuffer) {
          const zC = ZC._currentFramebuffer;
          ZC._bindUnboundFramebuffer(this._MSAAFramebuffer), QC.framebufferRenderbuffer(QC.FRAMEBUFFER, (0, fC.e)(CC.format) ? QC.DEPTH_STENCIL_ATTACHMENT : QC.DEPTH_ATTACHMENT, QC.RENDERBUFFER, wC.getMSAARenderBuffer()), ZC._bindUnboundFramebuffer(zC)
        }
      }
      constructor(CC, zC, ZC, QC, wC) {
        super(CC, zC, ZC, QC), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = wC
      }
      _cloneRenderTargetWrapper() {
        let CC;
        return this._colorTextureArray && this._depthStencilTextureArray ? (CC = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), CC.texture.isReady = !0) : CC = super._cloneRenderTargetWrapper(), CC
      }
      _swapRenderTargetWrapper(CC) {
        super._swapRenderTargetWrapper(CC), CC._framebuffer = this._framebuffer, CC._depthStencilBuffer = this._depthStencilBuffer, CC._MSAAFramebuffer = this._MSAAFramebuffer, CC._colorTextureArray = this._colorTextureArray, CC._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const CC = this._engine,
            zC = CC._currentFramebuffer,
            ZC = this._context;
          CC._bindUnboundFramebuffer(this._framebuffer), ZC.framebufferRenderbuffer(ZC.FRAMEBUFFER, ZC.DEPTH_STENCIL_ATTACHMENT, ZC.RENDERBUFFER, null), ZC.framebufferRenderbuffer(ZC.FRAMEBUFFER, ZC.DEPTH_ATTACHMENT, ZC.RENDERBUFFER, null), ZC.framebufferRenderbuffer(ZC.FRAMEBUFFER, ZC.STENCIL_ATTACHMENT, ZC.RENDERBUFFER, null), CC._bindUnboundFramebuffer(zC), ZC.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(CC, zC, ZC, QC, wC, bC)
      }
      shareDepth(CC) {
        super.shareDepth(CC);
        const zC = this._context,
          ZC = this._depthStencilBuffer,
          QC = CC._MSAAFramebuffer || CC._framebuffer,
          wC = this._engine;
        CC._depthStencilBuffer && CC._depthStencilBuffer !== ZC && zC.deleteRenderbuffer(CC._depthStencilBuffer), CC._depthStencilBuffer = ZC;
        const bC = CC._generateStencilBuffer ? zC.DEPTH_STENCIL_ATTACHMENT : zC.DEPTH_ATTACHMENT;
        wC._bindUnboundFramebuffer(QC), zC.framebufferRenderbuffer(zC.FRAMEBUFFER, bC, zC.RENDERBUFFER, ZC), wC._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const wC = CC._hardwareTexture;
        if (!wC) return;
        const bC = this._framebuffer,
          nC = this._engine,
          fC = nC._currentFramebuffer;
        let oC;
        if (nC._bindUnboundFramebuffer(bC), nC.fS > 1) {
          const bC = this._context;
          oC = bC["COLOR_ATTACHMENT" + zC], CC.is2DArray || CC.is3D ? (ZC = ZC ?? this.layerIndices?.[zC] ?? 0, bC.framebufferTextureLayer(bC.FRAMEBUFFER, oC, wC.underlyingResource, QC, ZC)) : CC.isCube ? (ZC = ZC ?? this.faceIndices?.[zC] ?? 0, bC.framebufferTexture2D(bC.FRAMEBUFFER, oC, bC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC, wC.underlyingResource, QC)) : bC.framebufferTexture2D(bC.FRAMEBUFFER, oC, bC.TEXTURE_2D, wC.underlyingResource, QC)
        } else {
          const CC = this._context;
          oC = CC["COLOR_ATTACHMENT" + zC + "_WEBGL"];
          const bC = void 0 !== ZC ? CC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC : CC.TEXTURE_2D;
          CC.framebufferTexture2D(CC.FRAMEBUFFER, oC, bC, wC.underlyingResource, QC)
        }
        if (CC._autoMSAAManagement && this._MSAAFramebuffer) {
          const CC = this._context;
          nC._bindUnboundFramebuffer(this._MSAAFramebuffer), CC.framebufferRenderbuffer(CC.FRAMEBUFFER, oC, CC.RENDERBUFFER, wC.getMSAARenderBuffer())
        }
        nC._bindUnboundFramebuffer(fC)
      }
      setTexture(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(CC, zC, ZC), this._bindTextureRenderTarget(CC, zC)
      }
      setLayerAndFaceIndices(CC, zC) {
        if (super.setLayerAndFaceIndices(CC, zC), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ZC = this._attachments?.length ?? this.textures.length;
        for (let QC = 0; QC < ZC; QC++) {
          const CC = this.textures[QC];
          CC && (CC.is2DArray || CC.is3D ? this._bindTextureRenderTarget(CC, QC, this.layerIndices[QC]) : CC.isCube ? this._bindTextureRenderTarget(CC, QC, this.faceIndices[QC]) : this._bindTextureRenderTarget(CC, QC))
        }
      }
      setLayerAndFaceIndex() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(CC, zC, ZC), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const QC = this.textures[CC];
        QC.is2DArray || QC.is3D ? this._bindTextureRenderTarget(this.textures[CC], CC, this.layerIndices[CC]) : QC.isCube && this._bindTextureRenderTarget(this.textures[CC], CC, this.faceIndices[CC])
      }
      resolveMSAATextures() {
        const CC = this._engine,
          zC = CC._currentFramebuffer;
        CC._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), CC._bindUnboundFramebuffer(zC)
      }
      dispose() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const zC = this._context;
        CC || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (zC.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (zC.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (zC.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(CC)
      }
    }
    let qC = !1;
    qC || (qC = !0, bC.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(CC, zC, ZC) {
      const QC = new oC(CC, zC, ZC, this, this._gl);
      return this._renderTargetWrapperCache.push(QC), QC
    }, bC.ThinEngine.prototype.createRenderTargetTexture = function(CC, zC) {
      const ZC = this._createHardwareRenderTargetWrapper(!1, !1, CC);
      let QC, wC, bC = !0,
        nC = !1,
        fC = !1,
        oC = 1;
      void 0 !== zC && "object" === typeof zC && (bC = zC.generateDepthBuffer ?? !0, nC = !!zC.generateStencilBuffer, fC = !!zC.noColorAttachment, QC = zC.colorAttachment, oC = zC.samples ?? 1, wC = zC.label);
      const qC = QC || (fC ? null : this._createInternalTexture(CC, zC, !0, 5)),
        FC = CC.width || CC,
        WC = CC.height || CC,
        NC = this._currentFramebuffer,
        MC = this._gl,
        gC = MC.createFramebuffer();
      if (this._bindUnboundFramebuffer(gC), ZC._depthStencilBuffer = this._setupFramebufferDepthAttachments(nC, bC, FC, WC), !qC || qC.is2DArray || qC.is3D || MC.framebufferTexture2D(MC.FRAMEBUFFER, MC.COLOR_ATTACHMENT0, MC.TEXTURE_2D, qC._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(NC), ZC.label = wC ?? "RenderTargetWrapper", ZC._framebuffer = gC, ZC._generateDepthBuffer = bC, ZC._generateStencilBuffer = nC, ZC.setTextures(qC), QC) {
        if (ZC._samples = QC.samples, QC.samples > 1) {
          const CC = QC._hardwareTexture.getMSAARenderBuffer(0);
          ZC._MSAAFramebuffer = MC.createFramebuffer(), this._bindUnboundFramebuffer(ZC._MSAAFramebuffer), MC.framebufferRenderbuffer(MC.FRAMEBUFFER, MC.COLOR_ATTACHMENT0, MC.RENDERBUFFER, CC), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ZC, oC);
      return ZC
    }, bC.ThinEngine.prototype._createDepthStencilTexture = function(CC, zC, ZC) {
      const bC = this._gl,
        nC = CC.layers || 0,
        oC = CC.depth || 0;
      let qC = bC.TEXTURE_2D;
      0 !== nC ? qC = bC.TEXTURE_2D_ARRAY : 0 !== oC && (qC = bC.TEXTURE_3D);
      const FC = new QC.c(this, 12);
      if (FC.label = zC.label, !this._caps.depthTextureExtension) return wC.c.Error("Depth texture is not supported by your browser or hardware."), FC;
      const WC = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...zC
      };
      if (this._bindTextureDirectly(qC, FC, !0), this._setupDepthStencilTexture(FC, CC, 0 !== WC.comparisonFunction && WC.bilinearFiltering, WC.comparisonFunction, WC.samples), void 0 !== WC.depthTextureFormat) {
        if (15 !== WC.depthTextureFormat && 16 !== WC.depthTextureFormat && 17 !== WC.depthTextureFormat && 13 !== WC.depthTextureFormat && 14 !== WC.depthTextureFormat && 18 !== WC.depthTextureFormat) return wC.c.Error(`Depth texture ${WC.depthTextureFormat} format is not supported.`), FC;
        FC.format = WC.depthTextureFormat
      } else FC.format = WC.generateStencil ? 13 : 16;
      const NC = (0, fC.e)(FC.format),
        MC = this._getWebGLTextureTypeFromDepthTextureFormat(FC.format),
        gC = NC ? bC.DEPTH_STENCIL : bC.DEPTH_COMPONENT,
        SC = this._getInternalFormatFromDepthTextureFormat(FC.format, !0, NC);
      return FC.is2DArray ? bC.texImage3D(qC, 0, SC, FC.width, FC.height, nC, 0, gC, MC, null) : FC.is3D ? bC.texImage3D(qC, 0, SC, FC.width, FC.height, oC, 0, gC, MC, null) : bC.texImage2D(qC, 0, SC, FC.width, FC.height, 0, gC, MC, null), this._bindTextureDirectly(qC, null), this._internalTexturesCache.push(FC), ZC._depthStencilBuffer && (bC.deleteRenderbuffer(ZC._depthStencilBuffer), ZC._depthStencilBuffer = null), this._bindUnboundFramebuffer(ZC._MSAAFramebuffer ?? ZC._framebuffer), ZC._generateStencilBuffer = NC, ZC._depthStencilTextureWithStencil = NC, ZC._depthStencilBuffer = this._setupFramebufferDepthAttachments(ZC._generateStencilBuffer, ZC._generateDepthBuffer, ZC.width, ZC.height, ZC.samples, FC.format), this._bindUnboundFramebuffer(null), FC
    }, bC.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(CC, zC) {
      if (this.fS < 2 || !CC) return 1;
      if (CC.samples === zC) return zC;
      const ZC = this._gl;
      zC = Math.min(zC, this.getCaps().maxMSAASamples), CC._depthStencilBuffer && (ZC.deleteRenderbuffer(CC._depthStencilBuffer), CC._depthStencilBuffer = null), CC._MSAAFramebuffer && (ZC.deleteFramebuffer(CC._MSAAFramebuffer), CC._MSAAFramebuffer = null);
      const QC = CC.texture?._hardwareTexture;
      if (QC?.releaseMSAARenderBuffers(), CC.texture && zC > 1 && "function" === typeof ZC.renderbufferStorageMultisample) {
        const wC = ZC.createFramebuffer();
        if (!wC) throw new Error("Unable to create multi sampled framebuffer");
        CC._MSAAFramebuffer = wC, this._bindUnboundFramebuffer(CC._MSAAFramebuffer);
        const bC = this._createRenderBuffer(CC.texture.width, CC.texture.height, zC, -1, this._getRGBABufferInternalSizedFormat(CC.texture.type, CC.texture.format, CC.texture._useSRGBBuffer), ZC.COLOR_ATTACHMENT0, !1);
        if (!bC) throw new Error("Unable to create multi sampled framebuffer");
        QC?.addMSAARenderBuffer(bC)
      }
      this._bindUnboundFramebuffer(CC._MSAAFramebuffer ?? CC._framebuffer), CC.texture && (CC.texture.samples = zC), CC._samples = zC;
      const wC = CC._depthStencilTexture ? CC._depthStencilTexture.format : void 0;
      return CC._depthStencilBuffer = this._setupFramebufferDepthAttachments(CC._generateStencilBuffer, CC._generateDepthBuffer, CC.width, CC.height, zC, wC), this._bindUnboundFramebuffer(null), zC
    }, bC.ThinEngine.prototype._setupDepthStencilTexture = function(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const bC = zC.width ?? zC,
        nC = zC.height ?? zC,
        fC = zC.layers || 0,
        oC = zC.depth || 0;
      CC.baseWidth = bC, CC.baseHeight = nC, CC.width = bC, CC.height = nC, CC.is2DArray = fC > 0, CC.depth = fC || oC, CC.isReady = !0, CC.samples = wC, CC.generateMipMaps = !1, CC.samplingMode = ZC ? 2 : 1, CC.type = 0, CC._comparisonFunction = QC;
      const qC = this._gl,
        FC = this._getTextureTarget(CC),
        WC = this._getSamplingParameters(CC.samplingMode, !1);
      qC.texParameteri(FC, qC.TEXTURE_MAG_FILTER, WC.mag), qC.texParameteri(FC, qC.TEXTURE_MIN_FILTER, WC.min), qC.texParameteri(FC, qC.TEXTURE_WRAP_S, qC.CLAMP_TO_EDGE), qC.texParameteri(FC, qC.TEXTURE_WRAP_T, qC.CLAMP_TO_EDGE), this.fS > 1 && (0 === QC ? (qC.texParameteri(FC, qC.TEXTURE_COMPARE_FUNC, 515), qC.texParameteri(FC, qC.TEXTURE_COMPARE_MODE, qC.NONE)) : (qC.texParameteri(FC, qC.TEXTURE_COMPARE_FUNC, QC), qC.texParameteri(FC, qC.TEXTURE_COMPARE_MODE, qC.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39635: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC.d
    });
    var QC = ZC(39641);
    (0, ZC(39778).b)();
    var wC = ZC(39663);
    let bC = !1;
    ! function() {
      if (bC) return;
      bC = !0;
      const CC = new WeakMap,
        zC = new WeakMap,
        ZC = new WeakMap,
        QC = new WeakMap;
      wC.ThinEngine.prototype.getAlphaToCoverage = function() {
        return CC.get(this) ?? !1
      }, wC.ThinEngine.prototype.setAlphaToCoverage = function(ZC) {
        (CC.get(this) !== ZC || this._gl && zC.get(this) !== this._gl) && (CC.set(this, ZC), this._gl && (ZC ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), zC.set(this, this._gl)))
      }, Object.defineProperty(wC.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (QC.get(this) !== this._gl && (ZC.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), QC.set(this, this._gl)), ZC.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var nC = ZC(39650),
      fC = ZC(38507),
      oC = ZC(39747);
    let qC = !1;
    ! function() {
      function CC(CC, zC, ZC, QC) {
        let wC, bC = 1;
        1 === QC ? wC = new Float32Array(zC * ZC * 4) : 2 === QC ? (wC = new Uint16Array(zC * ZC * 4), bC = 15360) : wC = 7 === QC ? new Uint32Array(zC * ZC * 4) : new Uint8Array(zC * ZC * 4);
        for (let nC = 0; nC < zC; nC++)
          for (let QC = 0; QC < ZC; QC++) {
            const ZC = 3 * (QC * zC + nC),
              fC = 4 * (QC * zC + nC);
            wC[fC + 0] = CC[ZC + 0], wC[fC + 1] = CC[ZC + 1], wC[fC + 2] = CC[ZC + 2], wC[fC + 3] = bC
          }
        return wC
      }

      function zC(CC) {
        return function(zC, ZC, QC, wC, bC, fC, oC, qC) {
          let FC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            WC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const NC = CC ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            MC = CC ? 10 : 11,
            gC = new nC.c(this, MC);
          gC.baseWidth = ZC, gC.baseHeight = QC, gC.baseDepth = wC, gC.width = ZC, gC.height = QC, gC.depth = wC, gC.format = bC, gC.type = WC, gC.generateMipMaps = fC, gC.samplingMode = qC, CC ? gC.is3D = !0 : gC.is2DArray = !0, this._doNotHandleContextLost || (gC._bufferView = zC), CC ? this.updateRawTexture3D(gC, zC, bC, oC, FC, WC) : this.updateRawTexture2DArray(gC, zC, bC, oC, FC, WC), this._bindTextureDirectly(NC, gC, !0);
          const SC = this._getSamplingParameters(qC, fC);
          return this._gl.texParameteri(NC, this._gl.TEXTURE_MAG_FILTER, SC.mag), this._gl.texParameteri(NC, this._gl.TEXTURE_MIN_FILTER, SC.min), fC && this._gl.generateMipmap(NC), this._bindTextureDirectly(NC, null), this._internalTexturesCache.push(gC), gC
        }
      }

      function ZC(CC) {
        return function(zC, ZC, QC, wC) {
          let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const fC = CC ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            oC = this._getWebGLTextureType(nC),
            qC = this._getInternalFormat(QC),
            FC = this._getRGBABufferInternalSizedFormat(nC, QC);
          this._bindTextureDirectly(fC, zC, !0), this._unpackFlipY(void 0 === wC || !!wC), this._doNotHandleContextLost || (zC._bufferView = ZC, zC.format = QC, zC.invertY = wC, zC._compression = bC), zC.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), bC && ZC ? this._gl.compressedTexImage3D(fC, 0, this.getCaps().s3tc[bC], zC.width, zC.height, zC.depth, 0, ZC) : this._gl.texImage3D(fC, 0, FC, zC.width, zC.height, zC.depth, 0, qC, oC, ZC), zC.generateMipMaps && this._gl.generateMipmap(fC), this._bindTextureDirectly(fC, null), zC.isReady = !0
        }
      }
      qC || (qC = !0, wC.ThinEngine.prototype.updateRawTexture = function(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!CC) return;
        const fC = this._getRGBABufferInternalSizedFormat(bC, ZC, nC),
          oC = this._getInternalFormat(ZC),
          qC = this._getWebGLTextureType(bC);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, CC, !0), this._unpackFlipY(void 0 === QC || !!QC), this._doNotHandleContextLost || (CC._bufferView = zC, CC.format = ZC, CC.type = bC, CC.invertY = QC, CC._compression = wC), CC.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), wC && zC ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[wC], CC.width, CC.height, 0, zC) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, fC, CC.width, CC.height, 0, oC, qC, zC), CC.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), CC.isReady = !0
      }, wC.ThinEngine.prototype.createRawTexture = function(CC, zC, ZC, QC, wC, bC, fC) {
        let oC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          FC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const WC = new nC.c(this, 3);
        WC.baseWidth = zC, WC.baseHeight = ZC, WC.width = zC, WC.height = ZC, WC.format = QC, WC.generateMipMaps = wC, WC.samplingMode = fC, WC.invertY = bC, WC._compression = oC, WC.type = qC, WC._useSRGBBuffer = this._getUseSRGBBuffer(FC, !wC), this._doNotHandleContextLost || (WC._bufferView = CC), this.updateRawTexture(WC, CC, QC, bC, oC, qC, WC._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, WC, !0);
        const NC = this._getSamplingParameters(fC, wC);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, NC.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, NC.min), wC && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(WC), WC
      }, wC.ThinEngine.prototype.createRawCubeTexture = function(CC, zC, ZC, QC, wC, bC, qC) {
        let FC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const WC = this._gl,
          NC = new nC.c(this, 8);
        NC.isCube = !0, NC.format = ZC, NC.type = QC, this._doNotHandleContextLost || (NC._bufferViewArray = CC);
        const MC = this._getWebGLTextureType(QC);
        let gC = this._getInternalFormat(ZC);
        gC === WC.RGB && (gC = WC.RGBA), MC !== WC.FLOAT || this._caps.textureFloatLinearFiltering ? MC !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? MC !== WC.FLOAT || this._caps.textureFloatRender ? MC !== WC.HALF_FLOAT || this._caps.colorBufferFloat || (wC = !1, fC.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (wC = !1, fC.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (wC = !1, qC = 1, fC.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (wC = !1, qC = 1, fC.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const SC = zC,
          pC = SC;
        NC.width = SC, NC.height = pC, NC.invertY = bC, NC._compression = FC;
        if (!this.needPOTTextures || (0, oC.h)(NC.width) && (0, oC.h)(NC.height) || (wC = !1), CC) this.updateRawCubeTexture(NC, CC, ZC, QC, bC, FC);
        else {
          const CC = this._getRGBABufferInternalSizedFormat(QC),
            zC = 0;
          this._bindTextureDirectly(WC.TEXTURE_CUBE_MAP, NC, !0);
          for (let ZC = 0; ZC < 6; ZC++) FC ? WC.compressedTexImage2D(WC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC, zC, this.getCaps().s3tc[FC], NC.width, NC.height, 0, void 0) : WC.texImage2D(WC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC, zC, CC, NC.width, NC.height, 0, gC, MC, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, NC, !0), CC && wC && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const PC = this._getSamplingParameters(qC, wC);
        return WC.texParameteri(WC.TEXTURE_CUBE_MAP, WC.TEXTURE_MAG_FILTER, PC.mag), WC.texParameteri(WC.TEXTURE_CUBE_MAP, WC.TEXTURE_MIN_FILTER, PC.min), WC.texParameteri(WC.TEXTURE_CUBE_MAP, WC.TEXTURE_WRAP_S, WC.CLAMP_TO_EDGE), WC.texParameteri(WC.TEXTURE_CUBE_MAP, WC.TEXTURE_WRAP_T, WC.CLAMP_TO_EDGE), this._bindTextureDirectly(WC.TEXTURE_CUBE_MAP, null), NC.generateMipMaps = wC, NC.samplingMode = qC, NC.isReady = !0, NC
      }, wC.ThinEngine.prototype.updateRawCubeTexture = function(zC, ZC, QC, wC, bC) {
        let nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        zC._bufferViewArray = ZC, zC.format = QC, zC.type = wC, zC.invertY = bC, zC._compression = nC;
        const qC = this._gl,
          FC = this._getWebGLTextureType(wC);
        let WC = this._getInternalFormat(QC);
        const NC = this._getRGBABufferInternalSizedFormat(wC);
        let MC = !1;
        WC === qC.RGB && (WC = qC.RGBA, MC = !0), this._bindTextureDirectly(qC.TEXTURE_CUBE_MAP, zC, !0), this._unpackFlipY(void 0 === bC || !!bC), zC.width % 4 !== 0 && qC.pixelStorei(qC.UNPACK_ALIGNMENT, 1);
        for (let oC = 0; oC < 6; oC++) {
          let QC = ZC[oC];
          nC ? qC.compressedTexImage2D(qC.TEXTURE_CUBE_MAP_POSITIVE_X + oC, fC, this.getCaps().s3tc[nC], zC.width, zC.height, 0, QC) : (MC && (QC = CC(QC, zC.width, zC.height, wC)), qC.texImage2D(qC.TEXTURE_CUBE_MAP_POSITIVE_X + oC, fC, NC, zC.width, zC.height, 0, WC, FC, QC))
        }(!this.needPOTTextures || (0, oC.h)(zC.width) && (0, oC.h)(zC.height)) && zC.generateMipMaps && 0 === fC && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), zC.isReady = !0
      }, wC.ThinEngine.prototype.createRawCubeTextureFromUrl = function(zC, ZC, QC, wC, bC, nC, fC, oC) {
        let qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          FC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          WC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          NC = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const MC = this._gl,
          gC = this.createRawCubeTexture(null, QC, wC, bC, !nC, NC, WC, null);
        ZC?.addPendingData(gC), gC.url = zC, gC.isReady = !1, this._internalTexturesCache.push(gC);
        const SC = (CC, zC) => {
            ZC?.removePendingData(gC), FC && FC(CC ? CC.status + " " + CC.statusText : "Failed to parse texture data", zC)
          },
          pC = async zC => {
            if (!gC._hardwareTexture) return;
            const QC = fC(zC);
            if (!QC) return;
            const nC = QC instanceof Promise ? await QC : QC,
              FC = gC.width;
            if (oC) {
              const zC = this._getWebGLTextureType(bC);
              let ZC = this._getInternalFormat(wC);
              const QC = this._getRGBABufferInternalSizedFormat(bC);
              let fC = !1;
              ZC === MC.RGB && (ZC = MC.RGBA, fC = !0), this._bindTextureDirectly(MC.TEXTURE_CUBE_MAP, gC, !0), this._unpackFlipY(!1);
              const qC = oC(nC);
              for (let wC = 0; wC < qC.length; wC++) {
                const nC = FC >> wC;
                for (let oC = 0; oC < 6; oC++) {
                  let FC = qC[wC][oC];
                  fC && (FC = CC(FC, nC, nC, bC)), MC.texImage2D(oC, wC, QC, nC, nC, 0, ZC, zC, FC)
                }
              }
              this._bindTextureDirectly(MC.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(gC, nC, wC, bC, NC);
            gC.isReady = !0, ZC?.removePendingData(gC), gC.onLoadedObservable.notifyObservers(gC), gC.onLoadedObservable.clear(), qC && qC()
          };
        return this._loadFile(zC, (CC => {
          pC(CC).catch((CC => {
            SC(void 0, CC)
          }))
        }), void 0, ZC?.offlineProvider, !0, SC), gC
      }, wC.ThinEngine.prototype.createRawTexture2DArray = zC(!1), wC.ThinEngine.prototype.createRawTexture3D = zC(!0), wC.ThinEngine.prototype.updateRawTexture2DArray = ZC(!1), wC.ThinEngine.prototype.updateRawTexture3D = ZC(!0))
    }();
    var FC = ZC(39692);
    let WC = !1;
    WC || (WC = !0, wC.ThinEngine.prototype._readTexturePixelsSync = function(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        qC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const WC = this._gl;
      if (!WC) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const CC = WC.createFramebuffer();
        if (!CC) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = CC
      }
      WC.bindFramebuffer(WC.FRAMEBUFFER, this._dummyFramebuffer), QC > -1 && (CC.is2DArray || CC.is3D) ? WC.framebufferTextureLayer(WC.FRAMEBUFFER, WC.COLOR_ATTACHMENT0, CC._hardwareTexture?.underlyingResource, wC, QC) : QC > -1 ? WC.framebufferTexture2D(WC.FRAMEBUFFER, WC.COLOR_ATTACHMENT0, WC.TEXTURE_CUBE_MAP_POSITIVE_X + QC, CC._hardwareTexture?.underlyingResource, wC) : WC.framebufferTexture2D(WC.FRAMEBUFFER, WC.COLOR_ATTACHMENT0, WC.TEXTURE_2D, CC._hardwareTexture?.underlyingResource, wC);
      let NC = void 0 !== CC.type ? this._getWebGLTextureType(CC.type) : WC.UNSIGNED_BYTE;
      return fC ? bC || (bC = (0, FC.o)(CC.type, 4 * zC * ZC)) : NC === WC.UNSIGNED_BYTE ? (bC || (bC = new Uint8Array(4 * zC * ZC)), NC = WC.UNSIGNED_BYTE) : (bC || (bC = new Float32Array(4 * zC * ZC)), NC = WC.FLOAT), nC && this.flushFramebuffer(), WC.readPixels(oC, qC, zC, ZC, WC.RGBA, NC, bC), WC.bindFramebuffer(WC.FRAMEBUFFER, this._currentFramebuffer), bC
    }, wC.ThinEngine.prototype._readTexturePixels = function(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        qC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC))
    }), (0, ZC(39783).e)();
    let NC = !1;
    NC || (NC = !0, wC.ThinEngine.prototype._createDepthStencilCubeTexture = function(CC, zC) {
      const ZC = new nC.c(this, 12);
      if (ZC.isCube = !0, 1 === this.fS) return fC.c.Error("Depth cube texture is not supported by WebGL 1."), ZC;
      const QC = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...zC
        },
        wC = this._gl;
      this._bindTextureDirectly(wC.TEXTURE_CUBE_MAP, ZC, !0), this._setupDepthStencilTexture(ZC, CC, QC.bilinearFiltering, QC.comparisonFunction);
      for (let bC = 0; bC < 6; bC++) QC.generateStencil ? wC.texImage2D(wC.TEXTURE_CUBE_MAP_POSITIVE_X + bC, 0, wC.DEPTH24_STENCIL8, CC, CC, 0, wC.DEPTH_STENCIL, wC.UNSIGNED_INT_24_8, null) : wC.texImage2D(wC.TEXTURE_CUBE_MAP_POSITIVE_X + bC, 0, wC.DEPTH_COMPONENT24, CC, CC, 0, wC.DEPTH_COMPONENT, wC.UNSIGNED_INT, null);
      return this._bindTextureDirectly(wC.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ZC), ZC
    }, wC.ThinEngine.prototype._setCubeMapTextureParams = function(CC, zC, ZC) {
      const QC = this._gl;
      QC.texParameteri(QC.TEXTURE_CUBE_MAP, QC.TEXTURE_MAG_FILTER, QC.LINEAR), QC.texParameteri(QC.TEXTURE_CUBE_MAP, QC.TEXTURE_MIN_FILTER, zC ? QC.LINEAR_MIPMAP_LINEAR : QC.LINEAR), QC.texParameteri(QC.TEXTURE_CUBE_MAP, QC.TEXTURE_WRAP_S, QC.CLAMP_TO_EDGE), QC.texParameteri(QC.TEXTURE_CUBE_MAP, QC.TEXTURE_WRAP_T, QC.CLAMP_TO_EDGE), CC.samplingMode = zC ? 3 : 2, zC && this.getCaps().textureMaxLevel && void 0 !== ZC && ZC > 0 && (QC.texParameteri(QC.TEXTURE_CUBE_MAP, QC.TEXTURE_MAX_LEVEL, ZC), CC._maxLodLevel = ZC), this._bindTextureDirectly(QC.TEXTURE_CUBE_MAP, null)
    }, wC.ThinEngine.prototype.createCubeTexture = function(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nC = arguments.length > 6 ? arguments[6] : void 0,
        qC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        FC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        WC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        NC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        MC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        gC = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        SC = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const pC = this._gl;
      return this.createCubeTextureBase(CC, zC, ZC, !!QC, wC, bC, nC, qC, FC, WC, NC, MC, (CC => this._bindTextureDirectly(pC.TEXTURE_CUBE_MAP, CC, !0)), ((CC, zC) => {
        const ZC = this.needPOTTextures ? (0, oC.e)(zC[0].width, this._caps.maxCubemapTextureSize) : zC[0].width,
          bC = ZC,
          qC = [pC.TEXTURE_CUBE_MAP_POSITIVE_X, pC.TEXTURE_CUBE_MAP_POSITIVE_Y, pC.TEXTURE_CUBE_MAP_POSITIVE_Z, pC.TEXTURE_CUBE_MAP_NEGATIVE_X, pC.TEXTURE_CUBE_MAP_NEGATIVE_Y, pC.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(pC.TEXTURE_CUBE_MAP, CC, !0), this._unpackFlipY(!1);
        const FC = nC ? this._getInternalFormat(nC, CC._useSRGBBuffer) : CC._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : pC.RGBA;
        let WC = nC ? this._getInternalFormat(nC) : pC.RGBA;
        CC._useSRGBBuffer && 1 === this.fS && (WC = FC);
        for (let QC = 0; QC < qC.length; QC++)
          if (zC[QC].width !== ZC || zC[QC].height !== bC) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void fC.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ZC, this._workingCanvas.height = bC, this._workingContext.drawImage(zC[QC], 0, 0, zC[QC].width, zC[QC].height, 0, 0, ZC, bC), pC.texImage2D(qC[QC], 0, FC, WC, pC.UNSIGNED_BYTE, this._workingCanvas)
          } else pC.texImage2D(qC[QC], 0, FC, WC, pC.UNSIGNED_BYTE, zC[QC]);
        QC || pC.generateMipmap(pC.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(CC, !QC), CC.width = ZC, CC.height = bC, CC.isReady = !0, nC && (CC.format = nC), CC.onLoadedObservable.notifyObservers(CC), CC.onLoadedObservable.clear(), wC && wC()
      }), !!gC, SC)
    }, wC.ThinEngine.prototype.generateMipMapsForCubemap = function(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (CC.generateMipMaps) {
        const ZC = this._gl;
        this._bindTextureDirectly(ZC.TEXTURE_CUBE_MAP, CC, !0), ZC.generateMipmap(ZC.TEXTURE_CUBE_MAP), zC && this._bindTextureDirectly(ZC.TEXTURE_CUBE_MAP, null)
      }
    });
    ZC(39791);
    let MC = !1;
    MC || (MC = !0, wC.ThinEngine.prototype.setDepthStencilTexture = function(CC, zC, ZC, QC) {
      void 0 !== CC && (zC && (this._boundUniforms[CC] = zC), ZC && ZC.depthStencilTexture ? this._setTexture(CC, ZC, !1, !0, QC) : this._setTexture(CC, null, void 0, void 0, QC))
    });
    let gC = !1;
    gC || (gC = !0, wC.ThinEngine.prototype.createRenderTargetCubeTexture = function(CC, zC) {
      const ZC = this._createHardwareRenderTargetWrapper(!1, !0, CC),
        QC = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...zC
        };
      QC.generateStencilBuffer = QC.generateDepthBuffer && QC.generateStencilBuffer, (1 !== QC.type || this._caps.textureFloatLinearFiltering) && (2 !== QC.type || this._caps.textureHalfFloatLinearFiltering) || (QC.samplingMode = 1);
      const wC = this._gl,
        bC = new nC.c(this, 5);
      this._bindTextureDirectly(wC.TEXTURE_CUBE_MAP, bC, !0);
      const oC = this._getSamplingParameters(QC.samplingMode, QC.generateMipMaps);
      1 !== QC.type || this._caps.textureFloat || (QC.type = 0, fC.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), wC.texParameteri(wC.TEXTURE_CUBE_MAP, wC.TEXTURE_MAG_FILTER, oC.mag), wC.texParameteri(wC.TEXTURE_CUBE_MAP, wC.TEXTURE_MIN_FILTER, oC.min), wC.texParameteri(wC.TEXTURE_CUBE_MAP, wC.TEXTURE_WRAP_S, wC.CLAMP_TO_EDGE), wC.texParameteri(wC.TEXTURE_CUBE_MAP, wC.TEXTURE_WRAP_T, wC.CLAMP_TO_EDGE);
      for (let nC = 0; nC < 6; nC++) wC.texImage2D(wC.TEXTURE_CUBE_MAP_POSITIVE_X + nC, 0, this._getRGBABufferInternalSizedFormat(QC.type, QC.format), CC, CC, 0, this._getInternalFormat(QC.format), this._getWebGLTextureType(QC.type), null);
      const qC = wC.createFramebuffer();
      return this._bindUnboundFramebuffer(qC), ZC._depthStencilBuffer = this._setupFramebufferDepthAttachments(QC.generateStencilBuffer, QC.generateDepthBuffer, CC, CC), QC.generateMipMaps && wC.generateMipmap(wC.TEXTURE_CUBE_MAP), this._bindTextureDirectly(wC.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ZC._framebuffer = qC, ZC._generateDepthBuffer = QC.generateDepthBuffer, ZC._generateStencilBuffer = QC.generateStencilBuffer, bC.width = CC, bC.height = CC, bC.isReady = !0, bC.isCube = !0, bC.samples = 1, bC.generateMipMaps = QC.generateMipMaps, bC.samplingMode = QC.samplingMode, bC.type = QC.type, bC.format = QC.format, this._internalTexturesCache.push(bC), ZC.setTextures(bC), ZC
    });
    var SC = ZC(39800),
      pC = ZC(39803);
    let PC = !1;
    PC || (PC = !0, wC.ThinEngine.prototype.createPrefilteredCubeTexture = function(CC, zC, QC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        qC = arguments.length > 6 ? arguments[6] : void 0,
        FC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        WC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        NC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(CC, zC, null, !1, (async CC => {
        if (!CC) return void(bC && bC(null));
        const oC = CC.texture;
        if (WC ? CC.info.sphericalPolynomial && (oC._sphericalPolynomial = CC.info.sphericalPolynomial) : oC._sphericalPolynomial = oC._sphericalPolynomial ?? new SC.g, oC._source = 9, this.getCaps().textureLOD) return void(bC && bC(oC));
        const qC = this._gl,
          FC = CC.width;
        if (!FC) return;
        const {
          DDSTools: NC
        } = await ZC.e(306).then((() => ZC(41585))), MC = [];
        for (let ZC = 0; ZC < 3; ZC++) {
          const bC = 1 - ZC / 2,
            WC = wC,
            gC = Math.log2(FC) * QC + wC,
            SC = WC + (gC - WC) * bC,
            PC = Math.round(Math.min(Math.max(SC, 0), gC)),
            GC = new nC.c(this, 2);
          if (GC.type = oC.type, GC.format = oC.format, GC.width = Math.pow(2, Math.max(Math.log2(FC) - PC, 0)), GC.height = GC.width, GC.isCube = !0, GC._cachedWrapU = 0, GC._cachedWrapV = 0, this._bindTextureDirectly(qC.TEXTURE_CUBE_MAP, GC, !0), GC.samplingMode = 2, qC.texParameteri(qC.TEXTURE_CUBE_MAP, qC.TEXTURE_MAG_FILTER, qC.LINEAR), qC.texParameteri(qC.TEXTURE_CUBE_MAP, qC.TEXTURE_MIN_FILTER, qC.LINEAR), qC.texParameteri(qC.TEXTURE_CUBE_MAP, qC.TEXTURE_WRAP_S, qC.CLAMP_TO_EDGE), qC.texParameteri(qC.TEXTURE_CUBE_MAP, qC.TEXTURE_WRAP_T, qC.CLAMP_TO_EDGE), CC.isDDS) {
            const zC = CC.info,
              ZC = CC.data;
            this._unpackFlipY(zC.isCompressed), NC.UploadDDSLevels(this, GC, ZC, zC, !0, 6, PC)
          } else fC.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(qC.TEXTURE_CUBE_MAP, null);
          const RC = new pC.b(zC);
          RC._isCube = !0, RC._texture = GC, GC.isReady = !0, MC.push(RC)
        }
        oC._lodTextureHigh = MC[2], oC._lodTextureMid = MC[1], oC._lodTextureLow = MC[0], bC && bC(oC)
      }), oC, qC, FC, WC, QC, wC, null, void 0, !1, NC)
    });
    var GC = ZC(39740);
    let RC = !1;
    RC || (RC = !0, wC.ThinEngine.prototype.createUniformBuffer = function(CC, zC) {
      const ZC = this._gl.createBuffer();
      if (!ZC) throw new Error("Unable to create uniform buffer");
      const QC = new GC.c(ZC);
      return this.bindUniformBuffer(QC), CC instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, CC, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(CC), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), QC.references = 1, QC
    }, wC.ThinEngine.prototype.createDynamicUniformBuffer = function(CC, zC) {
      const ZC = this._gl.createBuffer();
      if (!ZC) throw new Error("Unable to create dynamic uniform buffer");
      const QC = new GC.c(ZC);
      return this.bindUniformBuffer(QC), CC instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, CC, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(CC), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), QC.references = 1, QC
    }, wC.ThinEngine.prototype.updateUniformBuffer = function(CC, zC, ZC, QC) {
      this.bindUniformBuffer(CC), void 0 === ZC && (ZC = 0), void 0 === QC ? zC instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZC, zC) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZC, new Float32Array(zC)) : zC instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, zC.subarray(ZC, ZC + QC)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(zC).subarray(ZC, ZC + QC)), this.bindUniformBuffer(null)
    }, wC.ThinEngine.prototype.bindUniformBuffer = function(CC) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, CC ? CC.underlyingResource : null)
    }, wC.ThinEngine.prototype.bindUniformBufferBase = function(CC, zC, ZC) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, zC, CC ? CC.underlyingResource : null)
    }, wC.ThinEngine.prototype.bindUniformBlock = function(CC, zC, ZC) {
      const QC = CC.program,
        wC = this._gl.getUniformBlockIndex(QC, zC);
      4294967295 !== wC && this._gl.uniformBlockBinding(QC, wC, ZC)
    });
    var AC = ZC(39680),
      xC = ZC(39721);
    let JC = !1;
    JC || (JC = !0, xC.b.prototype.displayLoadingUI = function() {
      if (!(0, AC.k)()) return;
      const CC = this.loadingScreen;
      CC && CC.displayLoadingUI()
    }, xC.b.prototype.hideLoadingUI = function() {
      if (!(0, AC.k)()) return;
      const CC = this._loadingScreen;
      CC && CC.hideLoadingUI()
    }, Object.defineProperty(xC.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = xC.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(CC) {
        this._loadingScreen = CC
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xC.b.prototype, "loadingUIText", {
      set: function(CC) {
        this.loadingScreen.loadingUIText = CC
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(xC.b.prototype, "loadingUIBackgroundColor", {
      set: function(CC) {
        this.loadingScreen.loadingUIBackgroundColor = CC
      },
      enumerable: !0,
      configurable: !0
    })), (0, ZC(39771).d)();
    let IC = !1;
    IC || (IC = !0, xC.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, xC.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, xC.b.prototype.setDepthFunction = function(CC) {
      this._depthCullingState.depthFunc = CC
    }, xC.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, xC.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, xC.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, xC.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, xC.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, xC.b.prototype.setDepthWrite = function(CC) {
      this._depthCullingState.depthMask = CC
    }, xC.b.prototype.setAlphaConstants = function(CC, zC, ZC, QC) {
      this._alphaState.setAlphaBlendConstants(CC, zC, ZC, QC)
    }, xC.b.prototype.getAlphaMode = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[CC]
    }, xC.b.prototype.getAlphaEquation = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[CC]
    });
    let iC = !1;
    iC || (iC = !0, xC.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, xC.b.prototype.setStencilBuffer = function(CC) {
      this._stencilState.stencilTest = CC
    }, xC.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, xC.b.prototype.setStencilMask = function(CC) {
      this._stencilState.stencilMask = CC
    }, xC.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, xC.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, xC.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, xC.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, xC.b.prototype.setStencilFunction = function(CC) {
      this._stencilState.stencilFunc = CC
    }, xC.b.prototype.setStencilBackFunction = function(CC) {
      this._stencilState.stencilBackFunc = CC
    }, xC.b.prototype.setStencilFunctionReference = function(CC) {
      this._stencilState.stencilFuncRef = CC
    }, xC.b.prototype.setStencilFunctionMask = function(CC) {
      this._stencilState.stencilFuncMask = CC
    }, xC.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, xC.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, xC.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, xC.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, xC.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, xC.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, xC.b.prototype.setStencilOperationFail = function(CC) {
      this._stencilState.stencilOpStencilFail = CC
    }, xC.b.prototype.setStencilBackOperationFail = function(CC) {
      this._stencilState.stencilBackOpStencilFail = CC
    }, xC.b.prototype.setStencilOperationDepthFail = function(CC) {
      this._stencilState.stencilOpDepthFail = CC
    }, xC.b.prototype.setStencilBackOperationDepthFail = function(CC) {
      this._stencilState.stencilBackOpDepthFail = CC
    }, xC.b.prototype.setStencilOperationPass = function(CC) {
      this._stencilState.stencilOpStencilDepthPass = CC
    }, xC.b.prototype.setStencilBackOperationPass = function(CC) {
      this._stencilState.stencilBackOpStencilDepthPass = CC
    }, xC.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, xC.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ZC(39858);
    let vC = !1;
    vC || (vC = !0, xC.b.prototype.createDepthStencilTexture = function(CC, zC, ZC) {
      if (zC.isCube) {
        const ZC = CC.width || CC;
        return this._createDepthStencilCubeTexture(ZC, zC)
      }
      return this._createDepthStencilTexture(CC, zC, ZC)
    });
    ZC(39860), ZC(39891);
    let eC = !1;
    eC || (eC = !0, wC.ThinEngine.prototype.enableScissor = function(CC, zC, ZC, QC) {
      const wC = this._gl;
      wC.enable(wC.SCISSOR_TEST), wC.scissor(CC, zC, ZC, QC)
    }, wC.ThinEngine.prototype.disableScissor = function() {
      const CC = this._gl;
      CC.disable(CC.SCISSOR_TEST)
    })
  },
  39641: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => xC
    });
    var QC = ZC(39650),
      wC = ZC(36985),
      bC = ZC(39663),
      nC = ZC(39730);
    class fC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new oC(CC)
      }
      sampleFrame() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC.b.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const zC = CC - this._lastFrameTimeMs;
            this._rollingFrameTime.add(zC)
          }
          this._lastFrameTimeMs = CC
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
        const CC = this._rollingFrameTime.history(0);
        return 0 === CC ? 0 : 1e3 / CC
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
    class oC {
      constructor(CC) {
        this._samples = new Array(CC), this.reset()
      }
      add(CC) {
        let zC;
        if (this.isSaturated()) {
          const CC = this._samples[this._pos];
          zC = CC - this.average, this.average -= zC / (this._sampleCount - 1), this._m2 -= zC * (CC - this.average)
        } else this._sampleCount++;
        zC = CC - this.average, this.average += zC / this._sampleCount, this._m2 += zC * (CC - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = CC, this._pos++, this._pos %= this._samples.length
      }
      history(CC) {
        if (CC >= this._sampleCount || CC >= this._samples.length) return 0;
        const zC = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(zC - CC)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(CC) {
        const zC = this._samples.length;
        return (CC % zC + zC) % zC
      }
    }
    var qC = ZC(39740),
      FC = ZC(38507),
      WC = ZC(39756),
      NC = ZC(39721),
      MC = ZC(39680);

    function gC(CC) {
      const zC = function(CC) {
        if (!(0, MC.f)() || !document.body) return null;
        const zC = document.createElement("span");
        zC.textContent = "Hg", zC.style.font = CC;
        const ZC = document.createElement("div");
        ZC.style.display = "inline-block", ZC.style.width = "1px", ZC.style.height = "0px", ZC.style.verticalAlign = "bottom";
        const QC = document.createElement("div");
        let wC, bC;
        QC.style.whiteSpace = "nowrap", QC.appendChild(zC), QC.appendChild(ZC), document.body.appendChild(QC);
        try {
          bC = ZC.getBoundingClientRect().top - zC.getBoundingClientRect().top, ZC.style.verticalAlign = "baseline", wC = ZC.getBoundingClientRect().top - zC.getBoundingClientRect().top
        } finally {
          document.body.removeChild(QC)
        }
        const nC = {
          ascent: wC,
          height: bC,
          descent: bC - wC
        };
        return SC(nC) ? nC : null
      }(CC);
      if (zC) return zC;
      const ZC = function(CC) {
        let zC = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? zC = new OffscreenCanvas(64, 64) : (0, MC.f)() && "function" === typeof document.createElement && (zC = document.createElement("canvas"), zC.width = 64, zC.height = 64);
          const ZC = zC?.getContext("2d");
          if (!ZC) return null;
          ZC.font = CC;
          const QC = ZC.measureText("Hg"),
            wC = Number(QC.actualBoundingBoxAscent ?? QC.fontBoundingBoxAscent),
            bC = Number(QC.actualBoundingBoxDescent ?? QC.fontBoundingBoxDescent),
            nC = {
              ascent: wC,
              height: wC + bC,
              descent: bC
            };
          return SC(nC) ? nC : null
        } catch {
          return null
        } finally {
          const CC = zC;
          "function" === typeof CC?.dispose && CC.dispose()
        }
      }(CC);
      return ZC || function(CC) {
        const zC = Math.max(1, function(CC) {
            const zC = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(CC || ""));
            return zC ? Number(zC[1]) : 16
          }(CC)),
          ZC = .8 * zC,
          QC = .2 * zC;
        return {
          ascent: ZC,
          height: ZC + QC,
          descent: QC
        }
      }(CC)
    }

    function SC(CC) {
      return Number.isFinite(CC.ascent) && Number.isFinite(CC.height) && Number.isFinite(CC.descent) && CC.height > 0
    }

    function pC(CC) {
      if (CC.requestPointerLock) {
        const zC = CC.requestPointerLock();
        zC instanceof Promise ? zC.then((() => {
          CC.focus()
        })).catch((() => {})) : CC.focus()
      }
    }
    var PC = ZC(39766),
      GC = ZC(39712),
      RC = ZC(39771),
      AC = ZC(39774);
    class xC extends bC.ThinEngine {
      static get NpmPackage() {
        return NC.b.NpmPackage
      }
      static get Version() {
        return NC.b.Version
      }
      static get Instances() {
        return wC.c.Instances
      }
      static get LastCreatedEngine() {
        return wC.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return wC.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(CC) {
        return NC.b.DefaultLoadingScreenFactory(CC)
      }
      get _supportsHardwareTextureRescaling() {
        return !!xC._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, RC.d)(), (0, AC.e)(), super(CC, zC, ZC, QC), this._performanceMonitor = new fC, this._drawCalls = new PC.b, CC && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(CC) {
        super._sharedInit(CC),
          function(CC, zC, ZC) {
            CC._onCanvasFocus = () => {
              CC.onCanvasFocusObservable.notifyObservers(CC)
            }, CC._onCanvasBlur = () => {
              CC.onCanvasBlurObservable.notifyObservers(CC)
            }, CC._onCanvasContextMenu = zC => {
              CC.disableContextMenu && zC.preventDefault()
            }, zC.addEventListener("focus", CC._onCanvasFocus), zC.addEventListener("blur", CC._onCanvasBlur), zC.addEventListener("contextmenu", CC._onCanvasContextMenu), CC._onBlur = () => {
              CC.disablePerformanceMonitorInBackground && CC.performanceMonitor.disable(), CC._windowIsBackground = !0
            }, CC._onFocus = () => {
              CC.disablePerformanceMonitorInBackground && CC.performanceMonitor.enable(), CC._windowIsBackground = !1
            }, CC._onCanvasPointerOut = ZC => {
              document.elementFromPoint(ZC.clientX, ZC.clientY) !== zC && CC.onCanvasPointerOutObservable.notifyObservers(ZC)
            };
            const QC = CC.getHostWindow();
            QC && "function" === typeof QC.addEventListener && (QC.addEventListener("blur", CC._onBlur), QC.addEventListener("focus", CC._onFocus)), zC.addEventListener("pointerout", CC._onCanvasPointerOut), ZC.doNotHandleTouchAction || function(CC) {
              CC && CC.setAttribute && (CC.setAttribute("touch-action", "none"), CC.style.touchAction = "none", CC.style.webkitTapHighlightColor = "transparent")
            }(zC), !NC.b.audioEngine && ZC.audioEngine && NC.b.AudioEngineFactory && (NC.b.audioEngine = NC.b.AudioEngineFactory(CC.getRenderingCanvas(), CC.getAudioContext(), CC.getAudioDestination())), (0, MC.f)() && (CC._onFullscreenChange = () => {
              CC.isFullscreen = !!document.fullscreenElement, CC.isFullscreen && CC._pointerLockRequested && zC && pC(zC)
            }, document.addEventListener("fullscreenchange", CC._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", CC._onFullscreenChange, !1), CC._onPointerLockChange = () => {
              CC.isPointerLock = document.pointerLockElement === zC
            }, document.addEventListener("pointerlockchange", CC._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", CC._onPointerLockChange, !1)), CC.enableOfflineSupport = void 0 !== NC.b.OfflineProviderFactory, CC._deterministicLockstep = !!ZC.deterministicLockstep, CC._lockstepMaxSteps = ZC.lockstepMaxSteps || 0, CC._timeStep = ZC.timeStep || 1 / 60
          }(this, CC, this._creationOptions)
      }
      resizeImageBitmap(CC, zC, ZC) {
        return function(CC, zC, ZC, QC) {
          const wC = CC.createCanvas(ZC, QC).getContext("2d");
          if (!wC) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return wC.drawImage(zC, 0, 0), wC.getImageData(0, 0, ZC, QC).data
        }(this, CC, zC, ZC)
      }
      async _createImageBitmapFromSource(CC, zC) {
        return await async function(CC, zC, ZC) {
          return await new Promise(((QC, wC) => {
            const bC = new Image;
            bC.onload = () => {
              bC.decode().then((() => {
                CC.createImageBitmap(bC, ZC).then((CC => {
                  QC(CC)
                }))
              }))
            }, bC.onerror = () => {
              wC(`Error loading image ${bC.src}`)
            }, bC.src = zC
          }))
        }(this, CC, zC)
      }
      switchFullscreen(CC) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(CC)
      }
      enterFullscreen(CC) {
        this.isFullscreen || (this._pointerLockRequested = CC, this._renderingCanvas && function(CC) {
          const zC = CC.requestFullscreen || CC.webkitRequestFullscreen;
          zC && zC.call(CC)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const CC = document;
          document.exitFullscreen ? document.exitFullscreen() : CC.webkitCancelFullScreen && CC.webkitCancelFullScreen()
        }()
      }
      setDitheringState(CC) {
        CC ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(CC) {
        CC ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(CC, zC, ZC, QC) {
        const wC = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(CC, zC, ZC, QC), wC
      }
      scissorClear(CC, zC, ZC, QC, wC) {
        this.enableScissor(CC, zC, ZC, QC), this.clear(wC, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(CC) {
        const zC = this._gl.getAttachedShaders(CC);
        return zC ? this._gl.getShaderSource(zC[0]) : null
      }
      getFragmentShaderSource(CC) {
        const zC = this._gl.getAttachedShaders(CC);
        return zC ? this._gl.getShaderSource(zC[1]) : null
      }
      set framebufferDimensionsObject(CC) {
        this._framebufferDimensionsObject = CC, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const CC of this.scenes) CC.resetCachedMaterial(), CC._rebuildGeometries();
        for (const CC of this._virtualScenes) CC.resetCachedMaterial(), CC._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(CC) {
        return gC(CC)
      }
      enterPointerlock() {
        this._renderingCanvas && pC(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      jR() {
        this._measureFps(), super.jR()
      }
      _deletePipelineContext(CC) {
        const zC = CC;
        zC && zC.program && zC.transformFeedback && (this.deleteTransformFeedback(zC.transformFeedback), zC.transformFeedback = null), super._deletePipelineContext(CC)
      }
      createShaderProgram(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        wC = wC || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const nC = super.createShaderProgram(CC, zC, ZC, QC, wC, bC);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), nC
      }
      _createShaderProgram(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const bC = QC.createProgram();
        if (CC.program = bC, !bC) throw new Error("Unable to create program");
        if (QC.attachShader(bC, zC), QC.attachShader(bC, ZC), this.fS > 1 && wC) {
          const zC = this.createTransformFeedback();
          this.bindTransformFeedback(zC), this.setTranformFeedbackVaryings(bC, wC), CC.transformFeedback = zC
        }
        return QC.linkProgram(bC), this.fS > 1 && wC && this.bindTransformFeedback(null), CC.context = QC, CC.vertexShader = zC, CC.fragmentShader = ZC, CC.isParallelCompiled || this._finalizePipelineContext(CC), bC
      }
      _releaseTexture(CC) {
        super._releaseTexture(CC)
      }
      _releaseRenderTargetWrapper(CC) {
        super._releaseRenderTargetWrapper(CC);
        for (const zC of this.scenes) {
          for (const ZC of zC.postProcesses) ZC._outputTexture === CC && (ZC._outputTexture = null);
          for (const ZC of zC.cameras)
            for (const zC of ZC._postProcesses) zC && zC._outputTexture === CC && (zC._outputTexture = null)
        }
      }
      _rescaleTexture(CC, zC, ZC, QC, wC) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const bC = this.createRenderTargetTexture({
          width: zC.width,
          height: zC.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && xC._RescalePostProcessFactory && (this._rescalePostProcess = xC._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const nC = () => {
              this._rescalePostProcess.onApply = function(zC) {
                zC._bindTexture("textureSampler", CC)
              };
              let nC = ZC;
              nC || (nC = this.scenes[this.scenes.length - 1]), nC.postProcessManager.directRender([this._rescalePostProcess], bC, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, zC, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, QC, 0, 0, zC.width, zC.height, 0), this.unBindFramebuffer(bC), bC.dispose(), wC && wC()
            },
            fC = this._rescalePostProcess.getEffect();
          fC ? fC.executeWhenCompiled(nC) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((CC => {
            CC.executeWhenCompiled(nC)
          }))
        }
      }
      wrapWebGLTexture(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const nC = new WC.d(CC, this._gl),
          fC = new QC.c(this, 15, !0);
        return fC._hardwareTexture = nC, fC.baseWidth = wC, fC.baseHeight = bC, fC.width = wC, fC.height = bC, fC.isReady = !0, fC.useMipMaps = zC, this.updateTextureSamplingMode(ZC, fC), fC
      }
      updateWrappedWebGLTexture(CC, zC) {
        if (15 !== CC.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const QC of this._renderTargetWrapperCache)
          if (QC.textures?.includes(CC)) {
            if (QC.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (QC._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } CC._hardwareTexture = new WC.d(zC, this._gl), CC.isReady = !0, CC._cachedCoordinatesMode = null, CC._cachedWrapU = null, CC._cachedWrapV = null, CC._cachedWrapR = null, CC._cachedAnisotropicFilteringLevel = null;
        for (const QC in this._boundTexturesCache) this._boundTexturesCache[QC] === CC && (this._boundTexturesCache[QC] = null);
        this.updateTextureSamplingMode(CC.samplingMode, CC);
        const ZC = this._gl;
        for (const QC of this._renderTargetWrapperCache) {
          if (QC.texture !== CC) continue;
          const wC = QC,
            bC = QC.samples,
            nC = bC > 1;
          wC._framebuffer && ZC.deleteFramebuffer(wC._framebuffer), !nC && wC._depthStencilBuffer && (ZC.deleteRenderbuffer(wC._depthStencilBuffer), wC._depthStencilBuffer = null);
          const fC = this._currentFramebuffer,
            oC = ZC.createFramebuffer();
          this._bindUnboundFramebuffer(oC), ZC.framebufferTexture2D(ZC.FRAMEBUFFER, ZC.COLOR_ATTACHMENT0, ZC.TEXTURE_2D, zC, 0), nC || (wC._depthStencilBuffer = this._setupFramebufferDepthAttachments(QC._generateStencilBuffer, QC._generateDepthBuffer, QC.width, QC.height)), this._bindUnboundFramebuffer(fC), wC._framebuffer = oC, nC && (QC._samples = 1, this.updateRenderTargetTextureSampleCount(wC, bC))
        }
      }
      _uploadImageToTexture(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const wC = this._gl,
          bC = this._getWebGLTextureType(CC.type),
          nC = this._getInternalFormat(CC.format),
          fC = this._getRGBABufferInternalSizedFormat(CC.type, nC),
          oC = CC.isCube ? wC.TEXTURE_CUBE_MAP : wC.TEXTURE_2D;
        this._bindTextureDirectly(oC, CC, !0), this._unpackFlipY(CC.invertY);
        let qC = wC.TEXTURE_2D;
        CC.isCube && (qC = wC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC), wC.texImage2D(qC, QC, fC, nC, bC, zC), this._bindTextureDirectly(oC, null, !0)
      }
      updateTextureComparisonFunction(CC, zC) {
        if (1 === this.fS) return void FC.c.Error("WebGL 1 does not support texture comparison.");
        const ZC = this._gl;
        CC.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, CC, !0), 0 === zC ? (ZC.texParameteri(ZC.TEXTURE_CUBE_MAP, ZC.TEXTURE_COMPARE_FUNC, 515), ZC.texParameteri(ZC.TEXTURE_CUBE_MAP, ZC.TEXTURE_COMPARE_MODE, ZC.NONE)) : (ZC.texParameteri(ZC.TEXTURE_CUBE_MAP, ZC.TEXTURE_COMPARE_FUNC, zC), ZC.texParameteri(ZC.TEXTURE_CUBE_MAP, ZC.TEXTURE_COMPARE_MODE, ZC.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, CC, !0), 0 === zC ? (ZC.texParameteri(ZC.TEXTURE_2D, ZC.TEXTURE_COMPARE_FUNC, 515), ZC.texParameteri(ZC.TEXTURE_2D, ZC.TEXTURE_COMPARE_MODE, ZC.NONE)) : (ZC.texParameteri(ZC.TEXTURE_2D, ZC.TEXTURE_COMPARE_FUNC, zC), ZC.texParameteri(ZC.TEXTURE_2D, ZC.TEXTURE_COMPARE_MODE, ZC.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), CC._comparisonFunction = zC
      }
      createInstancesBuffer(CC) {
        const zC = this._gl.createBuffer();
        if (!zC) throw new Error("Unable to create instance buffer");
        const ZC = new qC.c(zC);
        return ZC.HW = CC, this.bindArrayBuffer(ZC), this._gl.bufferData(this._gl.ARRAY_BUFFER, CC, this._gl.DYNAMIC_DRAW), ZC.references = 1, ZC
      }
      deleteInstancesBuffer(CC) {
        this._gl.deleteBuffer(CC)
      }
      async _clientWaitAsync(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const QC = this._gl;
        return await new Promise(((wC, bC) => {
          (0, GC.g)((() => {
            const ZC = QC.clientWaitSync(CC, zC, 0);
            if (ZC == QC.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ZC != QC.TIMEOUT_EXPIRED
          }), wC, bC, ZC)
        }))
      }
      _readPixelsAsync(CC, zC, ZC, QC, wC, bC, nC) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const fC = this._gl,
          oC = fC.createBuffer();
        fC.bindBuffer(fC.PIXEL_PACK_BUFFER, oC), fC.bufferData(fC.PIXEL_PACK_BUFFER, nC.byteLength, fC.STREAM_READ), fC.readPixels(CC, zC, ZC, QC, wC, bC, 0), fC.bindBuffer(fC.PIXEL_PACK_BUFFER, null);
        const qC = fC.fenceSync(fC.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return qC ? (fC.flush(), this._clientWaitAsync(qC, 0, 10).then((() => (fC.deleteSync(qC), fC.bindBuffer(fC.PIXEL_PACK_BUFFER, oC), fC.getBufferSubData(fC.PIXEL_PACK_BUFFER, 0, nC), fC.bindBuffer(fC.PIXEL_PACK_BUFFER, null), fC.deleteBuffer(oC), nC)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(CC, zC) {
            1 === wC.c.Instances.length && NC.b.audioEngine && (NC.b.audioEngine.dispose(), NC.b.audioEngine = null);
            const ZC = CC.getHostWindow();
            ZC && "function" === typeof ZC.removeEventListener && (ZC.removeEventListener("blur", CC._onBlur), ZC.removeEventListener("focus", CC._onFocus)), zC && (zC.removeEventListener("focus", CC._onCanvasFocus), zC.removeEventListener("blur", CC._onCanvasBlur), zC.removeEventListener("pointerout", CC._onCanvasPointerOut), zC.removeEventListener("contextmenu", CC._onCanvasContextMenu)), (0, MC.f)() && (document.removeEventListener("fullscreenchange", CC._onFullscreenChange), document.removeEventListener("mozfullscreenchange", CC._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", CC._onFullscreenChange), document.removeEventListener("msfullscreenchange", CC._onFullscreenChange), document.removeEventListener("pointerlockchange", CC._onPointerLockChange), document.removeEventListener("mspointerlockchange", CC._onPointerLockChange), document.removeEventListener("mozpointerlockchange", CC._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", CC._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    xC.ALPHA_DISABLE = 0, xC.ALPHA_ADD = 1, xC.ALPHA_COMBINE = 2, xC.ALPHA_SUBTRACT = 3, xC.ALPHA_MULTIPLY = 4, xC.ALPHA_MAXIMIZED = 5, xC.ALPHA_ONEONE = 6, xC.ALPHA_PREMULTIPLIED = 7, xC.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, xC.ALPHA_INTERPOLATE = 9, xC.ALPHA_SCREENMODE = 10, xC.DELAYLOADSTATE_NONE = 0, xC.DELAYLOADSTATE_LOADED = 1, xC.DELAYLOADSTATE_LOADING = 2, xC.DELAYLOADSTATE_NOTLOADED = 4, xC.NEVER = 512, xC.ALWAYS = 519, xC.LESS = 513, xC.EQUAL = 514, xC.LEQUAL = 515, xC.GREATER = 516, xC.GEQUAL = 518, xC.NOTEQUAL = 517, xC.KEEP = 7680, xC.REPLACE = 7681, xC.INCR = 7682, xC.DECR = 7683, xC.INVERT = 5386, xC.INCR_WRAP = 34055, xC.DECR_WRAP = 34056, xC.TEXTURE_CLAMP_ADDRESSMODE = 0, xC.TEXTURE_WRAP_ADDRESSMODE = 1, xC.TEXTURE_MIRROR_ADDRESSMODE = 2, xC.TEXTUREFORMAT_ALPHA = 0, xC.TEXTUREFORMAT_LUMINANCE = 1, xC.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, xC.TEXTUREFORMAT_RGB = 4, xC.TEXTUREFORMAT_RGBA = 5, xC.TEXTUREFORMAT_RED = 6, xC.TEXTUREFORMAT_R = 6, xC.TEXTUREFORMAT_R16_UNORM = 33322, xC.TEXTUREFORMAT_RG16_UNORM = 33324, xC.TEXTUREFORMAT_RGB16_UNORM = 32852, xC.TEXTUREFORMAT_RGBA16_UNORM = 32859, xC.TEXTUREFORMAT_R16_SNORM = 36760, xC.TEXTUREFORMAT_RG16_SNORM = 36761, xC.TEXTUREFORMAT_RGB16_SNORM = 36762, xC.TEXTUREFORMAT_RGBA16_SNORM = 36763, xC.TEXTUREFORMAT_RG = 7, xC.TEXTUREFORMAT_RED_INTEGER = 8, xC.TEXTUREFORMAT_R_INTEGER = 8, xC.TEXTUREFORMAT_RG_INTEGER = 9, xC.TEXTUREFORMAT_RGB_INTEGER = 10, xC.TEXTUREFORMAT_RGBA_INTEGER = 11, xC.TEXTURETYPE_UNSIGNED_BYTE = 0, xC.TEXTURETYPE_UNSIGNED_INT = 0, xC.TEXTURETYPE_FLOAT = 1, xC.TEXTURETYPE_HALF_FLOAT = 2, xC.TEXTURETYPE_BYTE = 3, xC.TEXTURETYPE_SHORT = 4, xC.TEXTURETYPE_UNSIGNED_SHORT = 5, xC.TEXTURETYPE_INT = 6, xC.TEXTURETYPE_UNSIGNED_INTEGER = 7, xC.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, xC.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, xC.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, xC.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, xC.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, xC.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, xC.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, xC.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, xC.TEXTURE_NEAREST_SAMPLINGMODE = 1, xC.TEXTURE_BILINEAR_SAMPLINGMODE = 2, xC.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, xC.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, xC.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, xC.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, xC.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, xC.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, xC.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, xC.TEXTURE_NEAREST_LINEAR = 7, xC.TEXTURE_NEAREST_NEAREST = 1, xC.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, xC.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, xC.TEXTURE_LINEAR_LINEAR = 2, xC.TEXTURE_LINEAR_NEAREST = 12, xC.TEXTURE_EXPLICIT_MODE = 0, xC.TEXTURE_SPHERICAL_MODE = 1, xC.TEXTURE_PLANAR_MODE = 2, xC.TEXTURE_CUBIC_MODE = 3, xC.TEXTURE_PROJECTION_MODE = 4, xC.TEXTURE_SKYBOX_MODE = 5, xC.TEXTURE_INVCUBIC_MODE = 6, xC.TEXTURE_EQUIRECTANGULAR_MODE = 7, xC.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, xC.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, xC.SCALEMODE_FLOOR = 1, xC.SCALEMODE_NEAREST = 2, xC.SCALEMODE_CEILING = 3
  },
  39794: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(39758);
    class wC {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(CC) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = CC, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, CC && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, QC.e)(CC.format))
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
      getBaseArrayLayer(CC) {
        if (!this._textures) return -1;
        const zC = this._textures[CC],
          ZC = this._layerIndices?.[CC] ?? 0,
          QC = this._faceIndices?.[CC] ?? 0;
        return zC.isCube ? 6 * ZC + QC : zC.is3D ? 0 : ZC
      }
      get samples() {
        return this._samples
      }
      setSamples(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === CC && !ZC) return CC;
        const QC = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, CC, zC) : this._engine.updateRenderTargetTextureSampleCount(this, CC);
        return this._samples = CC, QC
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(CC, zC, ZC, QC, wC) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = CC, this._isCube = zC, this._size = ZC, this._engine = QC, this._depthStencilTexture = null, this.label = wC
      }
      setTextures(CC) {
        Array.isArray(CC) ? this._textures = CC : this._textures = CC ? [CC] : null
      }
      setTexture(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[zC] !== CC && (this._textures[zC] && ZC && this._textures[zC].dispose(), this._textures[zC] = CC)
      }
      setLayerAndFaceIndices(CC, zC) {
        this._layerIndices = CC, this._faceIndices = zC
      }
      setLayerAndFaceIndex() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== zC && zC >= 0 && (this._layerIndices[CC] = zC), void 0 !== ZC && ZC >= 0 && (this._faceIndices[CC] = ZC)
      }
      createDepthStencilTexture() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ZC, this._depthStencilTextureLabel = bC, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: zC,
          comparisonFunction: CC,
          generateStencil: ZC,
          isCube: this._isCube,
          samples: QC,
          depthTextureFormat: wC,
          label: bC
        }, this), this._depthStencilTexture
      }
      _shareDepth(CC) {
        this.shareDepth(CC)
      }
      shareDepth(CC) {
        this._depthStencilTexture && (CC._depthStencilTexture && CC._depthStencilTexture.dispose(), CC._depthStencilTexture = this._depthStencilTexture, CC._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(CC) {
        this.texture && this.texture._swapAndDie(CC), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let CC = null;
        if (this._isMulti) {
          const zC = this.textures;
          if (zC && zC.length > 0) {
            let ZC = !1,
              QC = zC.length,
              wC = -1;
            const bC = zC[zC.length - 1]._source;
            14 !== bC && 12 !== bC || (ZC = !0, wC = zC[zC.length - 1].format, QC--);
            const nC = [],
              fC = [],
              oC = [],
              qC = [],
              FC = [],
              WC = [],
              NC = [],
              MC = {};
            for (let CC = 0; CC < QC; ++CC) {
              const ZC = zC[CC];
              nC.push(ZC.samplingMode), fC.push(ZC.type), oC.push(ZC.format);
              void 0 !== MC[ZC.uniqueId] ? (qC.push(-1), NC.push(0)) : (MC[ZC.uniqueId] = CC, ZC.is2DArray ? (qC.push(35866), NC.push(ZC.depth)) : ZC.isCube ? (qC.push(34067), NC.push(0)) : ZC.is3D ? (qC.push(32879), NC.push(ZC.depth)) : (qC.push(3553), NC.push(0))), this._faceIndices && FC.push(this._faceIndices[CC] ?? 0), this._layerIndices && WC.push(this._layerIndices[CC] ?? 0)
            }
            const gC = {
                samplingModes: nC,
                generateMipMaps: zC[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ZC,
                depthTextureFormat: wC,
                types: fC,
                formats: oC,
                KnC: QC,
                targetTypes: qC,
                faceIndex: FC,
                layerIndex: WC,
                layerCounts: NC,
                label: this.label
              },
              SC = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            CC = this._engine.createMultipleRenderTarget(SC, gC);
            for (let pC = 0; pC < QC; ++pC) {
              if (-1 !== qC[pC]) continue;
              const ZC = MC[zC[pC].uniqueId];
              CC.setTexture(CC.textures[ZC], pC)
            }
          }
        } else {
          const zC = {};
          if (zC.generateDepthBuffer = this._generateDepthBuffer, zC.generateMipMaps = this.texture?.generateMipMaps ?? !1, zC.generateStencilBuffer = this._generateStencilBuffer, zC.samplingMode = this.texture?.samplingMode, zC.type = this.texture?.type, zC.format = this.texture?.format, zC.noColorAttachment = !this._textures, zC.label = this.label, this.isCube) CC = this._engine.createRenderTargetCubeTexture(this.width, zC);
          else {
            const ZC = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            CC = this._engine.createRenderTargetTexture(ZC, zC)
          }
          CC.texture && (CC.texture.isReady = !0)
        }
        return CC
      }
      _swapRenderTargetWrapper(CC) {
        if (this._textures && CC._textures)
          for (let zC = 0; zC < this._textures.length; ++zC) this._textures[zC]._swapAndDie(CC._textures[zC], !1), CC._textures[zC].isReady = !0;
        this._depthStencilTexture && CC._depthStencilTexture && (this._depthStencilTexture._swapAndDie(CC._depthStencilTexture), CC._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const CC = this._cloneRenderTargetWrapper();
        if (CC) {
          if (this._depthStencilTexture) {
            const zC = this._depthStencilTexture.samplingMode,
              ZC = this._depthStencilTexture.format,
              QC = 2 === zC || 3 === zC || 11 === zC;
            CC.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, QC, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ZC, this._depthStencilTextureLabel)
          }
          this.samples > 1 && CC.setSamples(this.samples), CC._swapRenderTargetWrapper(this), CC.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let CC = 0; CC < this._textures.length; ++CC) this._textures[CC].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40247: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      static get ForceFullSceneLoadingForIncremental() {
        return QC._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(CC) {
        QC._ForceFullSceneLoadingForIncremental = CC
      }
      static get ShowLoadingScreen() {
        return QC._ShowLoadingScreen
      }
      static set ShowLoadingScreen(CC) {
        QC._ShowLoadingScreen = CC
      }
      static get loggingLevel() {
        return QC._LoggingLevel
      }
      static set loggingLevel(CC) {
        QC._LoggingLevel = CC
      }
      static get CleanBoneMatrixWeights() {
        return QC._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(CC) {
        QC._CleanBoneMatrixWeights = CC
      }
    }
    QC._ForceFullSceneLoadingForIncremental = !1, QC._ShowLoadingScreen = !0, QC._CleanBoneMatrixWeights = !1, QC._LoggingLevel = 0
  },
  39896: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(38507);
    const wC = new Map;

    function bC(CC, zC) {
      (function(CC) {
        return wC.delete(CC)
      })(CC) && QC.c.Warn(`Extension with the name '${CC}' already exists`), wC.set(CC, zC)
    }

    function nC(CC, zC) {
      "image/ktx" !== zC && "image/ktx2" !== zC || (CC = ".ktx"), wC.has(CC) || (CC.endsWith(".ies") && bC(".ies", (async () => await ZC.e(309).then((() => ZC(41598))).then((CC => new CC._IESTextureLoader)))), CC.endsWith(".dds") && bC(".dds", (async () => await ZC.e(307).then((() => ZC(41600))).then((CC => new CC._DDSTextureLoader)))), CC.endsWith(".basis") && bC(".basis", (async () => await ZC.e(310).then((() => ZC(41604))).then((CC => new CC._BasisTextureLoader)))), CC.endsWith(".env") && bC(".env", (async () => await Promise.all([ZC.e(311), ZC.e(308)]).then((() => ZC(41612))).then((CC => new CC._ENVTextureLoader)))), CC.endsWith(".hdr") && bC(".hdr", (async () => await ZC.e(312).then((() => ZC(41657))).then((CC => new CC._HDRTextureLoader)))), (CC.endsWith(".ktx") || CC.endsWith(".ktx2")) && (bC(".ktx", (async () => await ZC.e(313).then((() => ZC(41665))).then((CC => new CC._KTXTextureLoader)))), bC(".ktx2", (async () => await ZC.e(313).then((() => ZC(41665))).then((CC => new CC._KTXTextureLoader))))), CC.endsWith(".tga") && bC(".tga", (async () => await ZC.e(314).then((() => ZC(41679))).then((CC => new CC._TGATextureLoader)))), CC.endsWith(".exr") && bC(".exr", (async () => await ZC.e(315).then((() => ZC(41687))).then((CC => new CC._ExrTextureLoader)))));
      const QC = wC.get(CC);
      return QC ? Promise.resolve(QC(zC)) : null
    }
  },
  40274: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      g: () => qC
    });
    var QC = ZC(40110),
      wC = ZC(39851),
      bC = ZC(37002);
    class nC extends QC.d {
      get r_() {
        return this._subMaterials
      }
      set r_(CC) {
        this._subMaterials = CC, this._hookArray(CC)
      }
      getChildren() {
        return this.r_
      }
      constructor(CC, zC) {
        super(CC, zC, !0), this._waitingSubMaterialsUniqueIds = [], this.Km().addMultiMaterial(this), this.r_ = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(CC) {
        var zC = this;
        const ZC = CC.push;
        CC.push = function() {
          for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
          const nC = ZC.apply(CC, wC);
          return zC._markAllSubMeshesAsTexturesDirty(), nC
        };
        const QC = CC.splice;
        CC.splice = (zC, ZC) => {
          const wC = QC.call(CC, zC, ZC ?? CC.length);
          return this._markAllSubMeshesAsTexturesDirty(), wC
        }
      }
      getSubMaterial(CC) {
        return CC < 0 || CC >= this.r_.length ? this.Km().defaultMaterial : this.r_[CC]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.r_.map((CC => CC ? CC.getActiveTextures() : [])))
      }
      hasTexture(CC) {
        if (super.hasTexture(CC)) return !0;
        for (let zC = 0; zC < this.r_.length; zC++)
          if (this.r_[zC]?.hasTexture(CC)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(CC, zC, ZC) {
        for (let QC = 0; QC < this.r_.length; QC++) {
          const wC = this.r_[QC];
          if (wC) {
            if (wC._storeEffectOnSubMeshes) {
              if (!wC.isReadyForSubMesh(CC, zC, ZC)) return !1;
              continue
            }
            if (!wC.isReady(CC)) return !1
          }
        }
        return !0
      }
      clone(CC, zC) {
        const ZC = new nC(CC, this.Km());
        for (let QC = 0; QC < this.r_.length; QC++) {
          let wC;
          const bC = this.r_[QC];
          wC = zC && bC ? bC.clone(CC + "-" + bC.name) : this.r_[QC], ZC.r_.push(wC)
        }
        return ZC
      }
      serialize() {
        const CC = {};
        CC.name = this.name, CC.id = this.id, CC.uniqueId = this.uniqueId, wC.e && (CC.tags = wC.e.GetTags(this)), CC.materialsUniqueIds = [], CC.materials = [];
        for (let zC = 0; zC < this.r_.length; zC++) {
          const ZC = this.r_[zC];
          ZC ? (CC.materialsUniqueIds.push(ZC.uniqueId), CC.materials.push(ZC.id)) : (CC.materialsUniqueIds.push(null), CC.materials.push(null))
        }
        return CC
      }
      dispose(CC, zC, ZC) {
        const QC = this.Km();
        if (!QC) return;
        if (ZC)
          for (let bC = 0; bC < this.r_.length; bC++) {
            const ZC = this.r_[bC];
            ZC && ZC.dispose(CC, zC)
          }
        const wC = QC.multiMaterials.indexOf(this);
        wC >= 0 && QC.multiMaterials.splice(wC, 1), super.dispose(CC, zC)
      }
    }
    let fC = !1;

    function oC(CC, zC) {
      const ZC = new nC(CC.name, zC);
      if (ZC.id = CC.id, ZC._loadedUniqueId = CC.uniqueId, wC.e && wC.e.AddTagsTo(ZC, CC.tags), CC.materialsUniqueIds) ZC._waitingSubMaterialsUniqueIds = CC.materialsUniqueIds;
      else
        for (const QC of CC.materials) ZC.r_.push(zC.getLastMaterialById(QC));
      return ZC
    }

    function qC() {
      fC || (fC = !0, nC.ParseMultiMaterial = oC, (0, bC.d)("BABYLON.MultiMaterial", nC))
    }
  },
  40049: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC, wC, bC = ZC(36963);
    ! function(CC) {
      CC[CC.LOCAL = 0] = "LOCAL", CC[CC.WORLD = 1] = "WORLD", CC[CC.BONE = 2] = "BONE"
    }(QC || (QC = {}));
    class nC {}
    nC.X = new bC.r(1, 0, 0), nC.Y = new bC.r(0, 1, 0), nC.Z = new bC.r(0, 0, 1),
      function(CC) {
        CC[CC.X = 0] = "X", CC[CC.Y = 1] = "Y", CC[CC.Z = 2] = "Z"
      }(wC || (wC = {}))
  },
  39800: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      g: () => qC
    });
    var QC = ZC(36963);
    const wC = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      bC = [() => 1, CC => CC.y, CC => CC.z, CC => CC.x, CC => CC.x * CC.y, CC => CC.y * CC.z, CC => 3 * CC.z * CC.z - 1, CC => CC.x * CC.z, CC => CC.x * CC.x - CC.y * CC.y],
      nC = (CC, zC) => wC[CC] * bC[CC](zC),
      fC = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class oC {
      constructor() {
        this.preScaled = !1, this.l00 = QC.r.Zero(), this.l1_1 = QC.r.Zero(), this.l10 = QC.r.Zero(), this.l11 = QC.r.Zero(), this.l2_2 = QC.r.Zero(), this.l2_1 = QC.r.Zero(), this.l20 = QC.r.Zero(), this.l21 = QC.r.Zero(), this.l22 = QC.r.Zero()
      }
      addLight(CC, zC, ZC) {
        QC.j.Eg[0].set(zC.r, zC.g, zC.b);
        const wC = QC.j.Eg[0],
          bC = QC.j.Eg[1];
        wC.scaleToRef(ZC, bC), bC.scaleToRef(nC(0, CC), QC.j.Eg[2]), this.l00.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(1, CC), QC.j.Eg[2]), this.l1_1.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(2, CC), QC.j.Eg[2]), this.l10.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(3, CC), QC.j.Eg[2]), this.l11.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(4, CC), QC.j.Eg[2]), this.l2_2.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(5, CC), QC.j.Eg[2]), this.l2_1.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(6, CC), QC.j.Eg[2]), this.l20.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(7, CC), QC.j.Eg[2]), this.l21.addInPlace(QC.j.Eg[2]), bC.scaleToRef(nC(8, CC), QC.j.Eg[2]), this.l22.addInPlace(QC.j.Eg[2])
      }
      scaleInPlace(CC) {
        this.l00.scaleInPlace(CC), this.l1_1.scaleInPlace(CC), this.l10.scaleInPlace(CC), this.l11.scaleInPlace(CC), this.l2_2.scaleInPlace(CC), this.l2_1.scaleInPlace(CC), this.l20.scaleInPlace(CC), this.l21.scaleInPlace(CC), this.l22.scaleInPlace(CC)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(fC[0]), this.l1_1.scaleInPlace(fC[1]), this.l10.scaleInPlace(fC[2]), this.l11.scaleInPlace(fC[3]), this.l2_2.scaleInPlace(fC[4]), this.l2_1.scaleInPlace(fC[5]), this.l20.scaleInPlace(fC[6]), this.l21.scaleInPlace(fC[7]), this.l22.scaleInPlace(fC[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(wC[0]), this.l1_1.scaleInPlace(wC[1]), this.l10.scaleInPlace(wC[2]), this.l11.scaleInPlace(wC[3]), this.l2_2.scaleInPlace(wC[4]), this.l2_1.scaleInPlace(wC[5]), this.l20.scaleInPlace(wC[6]), this.l21.scaleInPlace(wC[7]), this.l22.scaleInPlace(wC[8])
      }
      updateFromArray(CC) {
        return QC.r.FromArrayToRef(CC[0], 0, this.l00), QC.r.FromArrayToRef(CC[1], 0, this.l1_1), QC.r.FromArrayToRef(CC[2], 0, this.l10), QC.r.FromArrayToRef(CC[3], 0, this.l11), QC.r.FromArrayToRef(CC[4], 0, this.l2_2), QC.r.FromArrayToRef(CC[5], 0, this.l2_1), QC.r.FromArrayToRef(CC[6], 0, this.l20), QC.r.FromArrayToRef(CC[7], 0, this.l21), QC.r.FromArrayToRef(CC[8], 0, this.l22), this
      }
      updateFromFloatsArray(CC) {
        return QC.r.FromFloatsToRef(CC[0], CC[1], CC[2], this.l00), QC.r.FromFloatsToRef(CC[3], CC[4], CC[5], this.l1_1), QC.r.FromFloatsToRef(CC[6], CC[7], CC[8], this.l10), QC.r.FromFloatsToRef(CC[9], CC[10], CC[11], this.l11), QC.r.FromFloatsToRef(CC[12], CC[13], CC[14], this.l2_2), QC.r.FromFloatsToRef(CC[15], CC[16], CC[17], this.l2_1), QC.r.FromFloatsToRef(CC[18], CC[19], CC[20], this.l20), QC.r.FromFloatsToRef(CC[21], CC[22], CC[23], this.l21), QC.r.FromFloatsToRef(CC[24], CC[25], CC[26], this.l22), this
      }
      static FromArray(CC) {
        return (new oC).updateFromArray(CC)
      }
      static FromPolynomial(CC) {
        const zC = new oC;
        return zC.l00 = CC.xx.scale(.376127).add(CC.yy.scale(.376127)).add(CC.zz.scale(.376126)), zC.l1_1 = CC.y.scale(.977204), zC.l10 = CC.z.scale(.977204), zC.l11 = CC.x.scale(.977204), zC.l2_2 = CC.xy.scale(1.16538), zC.l2_1 = CC.yz.scale(1.16538), zC.l20 = CC.zz.scale(1.34567).subtract(CC.xx.scale(.672834)).subtract(CC.yy.scale(.672834)), zC.l21 = CC.zx.scale(1.16538), zC.l22 = CC.xx.scale(1.16538).subtract(CC.yy.scale(1.16538)), zC.l1_1.scaleInPlace(-1), zC.l11.scaleInPlace(-1), zC.l2_1.scaleInPlace(-1), zC.l21.scaleInPlace(-1), zC.scaleInPlace(Math.PI), zC
      }
    }
    class qC {
      constructor() {
        this.x = QC.r.Zero(), this.y = QC.r.Zero(), this.z = QC.r.Zero(), this.xx = QC.r.Zero(), this.yy = QC.r.Zero(), this.zz = QC.r.Zero(), this.xy = QC.r.Zero(), this.yz = QC.r.Zero(), this.zx = QC.r.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = oC.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(CC) {
        QC.j.Eg[0].L_(CC.r, CC.g, CC.b);
        const zC = QC.j.Eg[0];
        this.xx.addInPlace(zC), this.yy.addInPlace(zC), this.zz.addInPlace(zC)
      }
      scaleInPlace(CC) {
        this.x.scaleInPlace(CC), this.y.scaleInPlace(CC), this.z.scaleInPlace(CC), this.xx.scaleInPlace(CC), this.yy.scaleInPlace(CC), this.zz.scaleInPlace(CC), this.yz.scaleInPlace(CC), this.zx.scaleInPlace(CC), this.xy.scaleInPlace(CC)
      }
      updateFromHarmonics(CC) {
        return this._harmonics = CC, this.x.Av(CC.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Av(CC.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Av(CC.l10), this.z.scaleInPlace(1.02333), this.xx.Av(CC.l00), QC.j.Eg[0].Av(CC.l20).scaleInPlace(.247708), QC.j.Eg[1].Av(CC.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).RQC(QC.j.Eg[0]).addInPlace(QC.j.Eg[1]), this.yy.Av(CC.l00), this.yy.scaleInPlace(.886277).RQC(QC.j.Eg[0]).RQC(QC.j.Eg[1]), this.zz.Av(CC.l00), QC.j.Eg[0].Av(CC.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(QC.j.Eg[0]), this.yz.Av(CC.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.Av(CC.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.Av(CC.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(CC) {
        return (new qC).updateFromHarmonics(CC)
      }
      static FromArray(CC) {
        const zC = new qC;
        return QC.r.FromArrayToRef(CC[0], 0, zC.x), QC.r.FromArrayToRef(CC[1], 0, zC.y), QC.r.FromArrayToRef(CC[2], 0, zC.z), QC.r.FromArrayToRef(CC[3], 0, zC.xx), QC.r.FromArrayToRef(CC[4], 0, zC.yy), QC.r.FromArrayToRef(CC[5], 0, zC.zz), QC.r.FromArrayToRef(CC[6], 0, zC.yz), QC.r.FromArrayToRef(CC[7], 0, zC.zx), QC.r.FromArrayToRef(CC[8], 0, zC.xy), zC
      }
    }
  },
  40265: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => mC,
      e: () => EC
    });
    var QC = ZC(39811),
      wC = ZC(36987),
      bC = ZC(36963),
      nC = ZC(39959),
      fC = ZC(40235),
      oC = ZC(40272),
      qC = ZC(39953),
      FC = ZC(40127),
      WC = ZC(39950);
    class NC {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new bC.r(0, 0, 0), this._diffPositionForCollisions = new bC.r(0, 0, 0), this._collisionResponse = !0
      }
    }
    var MC, gC, SC, pC = ZC(39694),
      PC = ZC(39889),
      GC = ZC(40145),
      RC = ZC(37142),
      AC = ZC(36968),
      xC = ZC(40049),
      JC = ZC(38507),
      IC = ZC(39818),
      iC = ZC(39721),
      vC = ZC(37002);

    function eC(CC, zC) {
      return CC - Math.floor(CC / zC) * zC
    }

    function hC(CC, zC, ZC) {
      CC instanceof Float32Array ? bC.b.FromArrayToRef(CC, zC, ZC) : ZC.L_((0, PC.e)(CC[zC]), (0, PC.e)(CC[zC + 1]), (0, PC.e)(CC[zC + 2]), (0, PC.e)(CC[zC + 3]), (0, PC.e)(CC[zC + 4]), (0, PC.e)(CC[zC + 5]), (0, PC.e)(CC[zC + 6]), (0, PC.e)(CC[zC + 7]), (0, PC.e)(CC[zC + 8]), (0, PC.e)(CC[zC + 9]), (0, PC.e)(CC[zC + 10]), (0, PC.e)(CC[zC + 11]), (0, PC.e)(CC[zC + 12]), (0, PC.e)(CC[zC + 13]), (0, PC.e)(CC[zC + 14]), (0, PC.e)(CC[zC + 15]))
    }

    function KC(CC, zC, ZC, QC, wC, fC, oC, qC, FC) {
      const WC = ZC.texture,
        NC = WC?.getInternalTexture(),
        MC = NC?._bufferView;
      if (!(MC instanceof Float32Array) && !(MC instanceof Uint16Array)) return JC.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const gC = WC.getSize(),
        SC = function(CC, zC) {
          const ZC = CC.y - CC.x + 1,
            QC = zC * CC.w / ZC,
            wC = QC < 1 ? 0 : 1,
            bC = ZC - wC;
          let nC = eC(QC - Math.floor(QC), 1) * bC;
          return nC = eC(nC + CC.z, bC), Math.floor(nC) + CC.x + wC
        }(QC, ZC.time);
      if (!isFinite(SC) || SC < 0 || SC >= gC.height) return JC.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const pC = bC.j.Eg[0],
        PC = bC.j.Matrix[0],
        GC = bC.j.Matrix[1],
        RC = SC * gC.width * 4,
        AC = zC === nC.k.NormalKind ? bC.r.TransformNormalFromFloatsToRef : bC.r.TransformCoordinatesFromFloatsToRef;
      for (let bC = 0, nC = 0; bC < CC.length; bC += 3, nC += 4) {
        let zC, ZC;
        for (PC.reset(), zC = 0; zC < 4 && zC < FC; zC++) ZC = fC[nC + zC], ZC > 0 && (hC(MC, RC + 16 * Math.floor(wC[nC + zC]), GC), GC.scaleAndAddToRef(ZC, PC));
        if (oC && qC)
          for (zC = 0; zC < 4 && zC + 4 < FC; zC++) ZC = qC[nC + zC], ZC > 0 && (hC(MC, RC + 16 * Math.floor(oC[nC + zC]), GC), GC.scaleAndAddToRef(ZC, PC));
        AC(CC[bC], CC[bC + 1], CC[bC + 2], PC, pC), pC.toArray(CC, bC)
      }
      return !0
    }
    class YC {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = bC.r.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class dC {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new YC, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new NC, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let mC = (() => {
        var CC;
        let zC, NC = oC.e,
          MC = [];
        return CC = class extends NC {
          static get BILLBOARDMODE_NONE() {
            return oC.e.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return oC.e.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return oC.e.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return oC.e.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return oC.e.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return oC.e.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(CC) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = CC
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(CC) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = CC
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(CC) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = CC
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(CC) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = CC
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(CC) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = CC
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(CC) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== CC && (this._internalAbstractMeshDataInfo._morphTargetManager = CC, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(CC) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== CC && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = CC, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(CC) {
            return !!super._updateNonUniformScalingState(CC) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(CC) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = CC
          }
          set GN(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(CC)
          }
          set onCollisionPositionChange(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(CC)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(CC) {
            if (this._internalAbstractMeshDataInfo._visibility === CC) return;
            const zC = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = CC, (1 === zC && 1 !== CC || 1 !== zC && 1 === CC) && this._markSubMeshesAsDirty((CC => {
              CC.markAsMiscDirty(), CC.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(CC) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = CC
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(CC) {
            this._internalAbstractMeshDataInfo._renderingGroupId = CC
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(CC) {
            if (!Number.isInteger(CC) || CC < 0 || CC > 255 || 0 !== CC && 0 === (63 & CC)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = CC
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(CC) {
            this._setMaterial(CC)
          }
          _setMaterial(CC) {
            this._internalAbstractMeshDataInfo._material !== CC && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = CC, CC && CC.meshMap && (CC.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.Zx && (this.resetDrawCache(void 0, null == CC), this._unBindEffect()))
          }
          getMaterialForRenderPass(CC) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[CC]
          }
          setMaterialForRenderPass(CC, zC) {
            this.resetDrawCache(CC), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ZC = this._internalAbstractMeshDataInfo._materialForRenderPass[CC];
            ZC?.meshMap?.[this.uniqueId] && (ZC.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[CC] = zC, zC && zC.meshMap && (zC.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(CC) {
            this._internalAbstractMeshDataInfo._receiveShadows !== CC && (this._internalAbstractMeshDataInfo._receiveShadows = CC, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(CC) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== CC && (this._internalAbstractMeshDataInfo._hasVertexAlpha = CC, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(CC) {
            this._internalAbstractMeshDataInfo._useVertexColors !== CC && (this._internalAbstractMeshDataInfo._useVertexColors = CC, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(CC) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== CC && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = CC, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(CC) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== CC && (this._internalAbstractMeshDataInfo._numBoneInfluencers = CC, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(CC) {
            this._internalAbstractMeshDataInfo._applyFog !== CC && (this._internalAbstractMeshDataInfo._applyFog = CC, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(CC) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = CC
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(CC) {
            CC !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = CC, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(CC) ? -1 : CC
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = CC
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(CC) ? -1 : CC
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = CC
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(CC) {
            const zC = this._internalAbstractMeshDataInfo._skeleton;
            zC && zC.needInitialSkinMatrix && zC._unregisterMeshWithPoseMatrix(this), CC && CC.needInitialSkinMatrix && CC._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = CC, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(zC) {
            var ZC;
            let QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(zC, QC, !1), ZC = this, this._internalAbstractMeshDataInfo = new dC, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = CC.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new wC.d, this.onCollisionPositionChangeObservable = new wC.d, this.onMaterialChangedObservable = new wC.d, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.tS = CC.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = RC.e.Red(), this.outlineWidth = .02, this.overlayColor = RC.e.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.Hg = !1, this.Xg = !1, this.actionManager = null, this.ellipsoid = new bC.r(.5, 1, .5), this.ellipsoidOffset = new bC.r(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new RC.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                gH: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new wC.d, this._onCollisionPositionChange = function(CC, zC) {
                let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                zC.subtractToRef(ZC._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ZC._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ZC._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > iC.b.CollisionsEpsilon && ZC.position.addInPlace(ZC._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), QC && ZC.onCollideObservable.notifyObservers(QC), ZC.onCollisionPositionChangeObservable.notifyObservers(ZC.position)
              }, QC = this.Km(), this.layerMask = QC.defaultRenderableLayerMask, QC.zQC(this), this._resyncLightSources(), this._uniformBuffer = new WC.c(this.Km().mg(), void 0, void 0, zC, !this.Km().mg().isWebGPU), this._buildUniformLayout(), QC.performancePriority) {
              case 2:
                this.Xg = !0;
              case 1:
                this.Hg = !0, this.tS = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(CC) {
            const zC = this._uniformBuffer;
            zC.x_("world", CC), zC.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), zC.update()
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
          toString(CC) {
            let zC = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            zC += ", # of submeshes: " + (this.Zx ? this.Zx.length : 0);
            const ZC = this._internalAbstractMeshDataInfo._skeleton;
            return ZC && (zC += ", skeleton: " + ZC.name), CC && (zC += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], zC += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.gH ? "YES" : "NO")), zC
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== oC.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(CC) {
            let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (zC || this.actionManager.isRecursive)) {
              if (!CC) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(CC)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(CC, !1) : null
          }
          _releaseRenderPassId(CC) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.Zx) {
              for (const CC of this.Zx) CC._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const CC of this.Km().lights) CC.isEnabled() && CC.canAffectMesh(this) && this._lightSources.push(CC);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(CC) {
            const zC = CC.isEnabled() && CC.canAffectMesh(this),
              ZC = this._lightSources.indexOf(CC);
            let QC = !1;
            if (-1 === ZC) {
              if (!zC) return;
              this._lightSources.push(CC)
            } else {
              if (zC) return;
              QC = !0, this._lightSources.splice(ZC, 1)
            }
            this._markSubMeshesAsLightDirty(QC)
          }
          _unBindEffect() {
            for (const CC of this.Zx) CC.setEffect(null)
          }
          _removeLightSource(CC, zC) {
            const ZC = this._lightSources.indexOf(CC); - 1 !== ZC && (this._lightSources.splice(ZC, 1), this._markSubMeshesAsLightDirty(zC))
          }
          _markSubMeshesAsDirty(CC) {
            if (this.Zx)
              for (const zC of this.Zx)
                for (let ZC = 0; ZC < zC._drawWrappers.length; ++ZC) {
                  const QC = zC._drawWrappers[ZC];
                  QC && QC.defines && QC.defines.markAllAsDirty && CC(QC.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((zC => zC.markAsLightDirty(CC)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((CC => CC.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((CC => CC.markAsMiscDirty()))
          }
          YzC(CC) {
            return this._currentRenderId = Number.MAX_VALUE, super.YzC(CC), this._isDirty = !0, this
          }
          resetDrawCache(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.Zx)
              for (const ZC of this.Zx) ZC.resetDrawCache(CC, zC)
          }
          get isBlocked() {
            return !1
          }
          getLOD(CC) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          CQC() {
            return null
          }
          getVerticesData(CC) {
            return null
          }
          setVerticesData(CC, zC, ZC, QC) {
            return this
          }
          updateVerticesData(CC, zC, ZC, QC) {
            return this
          }
          setIndices(CC, zC) {
            return this
          }
          isVerticesDataPresent(CC) {
            return !1
          }
          WE() {
            return this._masterMesh ? this._masterMesh.WE() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.WE()
          }
          setBoundingInfo(CC) {
            return this._boundingInfo = CC, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(CC, zC, ZC) {
            return this._boundingInfo = new FC.d(CC, zC, ZC), this._boundingInfo
          }
          normalizeToUnitCube() {
            let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(CC, zC, ZC)
          }
          get useBones() {
            return this.skeleton && this.Km().skeletonsEnabled && this.isVerticesDataPresent(nC.k.MatricesIndicesKind) && this.isVerticesDataPresent(nC.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(CC) {}
          _activate(CC, zC) {
            return this._renderId = CC, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === oC.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get ZH() {
            return !1
          }
          get yQC() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(CC, zC, ZC) {
            return this.position.addInPlace(this.calcMovePOV(CC, zC, ZC)), this
          }
          calcMovePOV(CC, zC, ZC) {
            const QC = new bC.b;
            (this.rotationQuaternion ? this.rotationQuaternion : bC.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(QC);
            const wC = bC.r.Zero(),
              nC = this.definedFacingForward ? -1 : 1;
            return bC.r.TransformCoordinatesFromFloatsToRef(CC * nC, zC, ZC * nC, QC, wC), wC
          }
          rotatePOV(CC, zC, ZC) {
            return this.rotation.addInPlace(this.calcRotatePOV(CC, zC, ZC)), this
          }
          calcRotatePOV(CC, zC, ZC) {
            const QC = this.definedFacingForward ? 1 : -1;
            return new bC.r(CC * QC, zC, ZC * QC)
          }
          _refreshBoundingInfo(CC, zC) {
            if (CC) {
              const ZC = (0, GC.d)(CC, 0, this.getTotalVertices(), zC);
              this._boundingInfo ? this._boundingInfo.reConstruct(ZC.minimum, ZC.maximum) : this._boundingInfo = new FC.d(ZC.minimum, ZC.maximum)
            }
            if (this.Zx)
              for (let ZC = 0; ZC < this.Zx.length; ZC++) this.Zx[ZC].refreshBoundingInfo(CC);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(CC) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(CC.minimum, CC.maximum) : this._boundingInfo = new FC.d(CC.minimum, CC.maximum), this.Zx)
              for (let zC = 0; zC < this.Zx.length; zC++) this.Zx[zC].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(CC, zC, ZC, QC, wC, fC, oC) {
            ! function(CC, zC, ZC, QC, wC, fC, oC) {
              const qC = bC.j.Eg[0],
                FC = bC.j.Matrix[0],
                WC = bC.j.Matrix[1],
                NC = zC === nC.k.NormalKind ? bC.r.TransformNormalFromFloatsToRef : bC.r.TransformCoordinatesFromFloatsToRef;
              for (let nC = 0, MC = 0; nC < CC.length; nC += 3, MC += 4) {
                let zC, gC;
                for (FC.reset(), zC = 0; zC < 4; zC++) gC = wC[MC + zC], gC > 0 && (bC.b.FromFloat32ArrayToRefScaled(ZC, Math.floor(16 * QC[MC + zC]), gC, WC), FC.addToSelf(WC));
                if (fC && oC)
                  for (zC = 0; zC < 4; zC++) gC = oC[MC + zC], gC > 0 && (bC.b.FromFloat32ArrayToRefScaled(ZC, Math.floor(16 * fC[MC + zC]), gC, WC), FC.addToSelf(WC));
                NC(CC[nC], CC[nC + 1], CC[nC + 2], FC, qC), qC.toArray(CC, nC)
              }
            }(CC, zC, ZC, QC, wC, fC, oC)
          }
          _getData(zC, ZC) {
            let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nC.k.PositionKind;
            const wC = zC.cache,
              fC = CC => {
                if (wC) {
                  const zC = wC._vertexData || (wC._vertexData = {});
                  return zC[CC] || this.copyVerticesData(CC, zC), zC[CC]
                }
                return this.getVerticesData(CC)
              };
            if (ZC || (ZC = fC(QC)), !ZC) return null;
            wC ? (wC._outputData ? wC._outputData.set(ZC) : wC._outputData = new Float32Array(ZC), ZC = wC._outputData) : (zC.applyMorph && this.morphTargetManager || zC.applySkeleton && this.skeleton || zC.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ZC = ZC.slice()), zC.applyMorph && this.morphTargetManager && function(CC, zC, ZC) {
              let QC;
              switch (zC) {
                case nC.k.PositionKind:
                  QC = CC => CC.getPositions();
                  break;
                case nC.k.NormalKind:
                  QC = CC => CC.getNormals();
                  break;
                case nC.k.TangentKind:
                  QC = CC => CC.getTangents();
                  break;
                case nC.k.UVKind:
                  QC = CC => CC.getUVs();
                  break;
                case nC.k.UV2Kind:
                  QC = CC => CC.getUV2s();
                  break;
                case nC.k.ColorKind:
                  QC = CC => CC.getColors();
                  break;
                default:
                  return
              }
              for (let wC = 0; wC < CC.length; wC++) {
                let zC = CC[wC];
                for (let bC = 0; bC < ZC.numTargets; bC++) {
                  const nC = ZC.getTarget(bC),
                    fC = nC.influence;
                  if (0 !== fC) {
                    const ZC = QC(nC);
                    ZC && (zC += (ZC[wC] - CC[wC]) * fC)
                  }
                }
                CC[wC] = zC
              }
            }(ZC, QC, this.morphTargetManager);
            const oC = this.bakedVertexAnimationManager;
            let qC = !1;
            if (zC.applyBakedVertexAnimation && oC?.isEnabled) {
              const CC = fC(nC.k.MatricesIndicesKind),
                wC = fC(nC.k.MatricesWeightsKind);
              if (wC && CC) {
                const bC = this.numBoneInfluencers > 4,
                  FC = bC ? fC(nC.k.MatricesIndicesExtraKind) : null,
                  WC = bC ? fC(nC.k.MatricesWeightsExtraKind) : null;
                qC = KC(ZC, QC, oC, zC.bakedVertexAnimationSettings ?? oC.animationParameters, CC, wC, FC, WC, this.numBoneInfluencers)
              }
            }
            if (!qC && zC.applySkeleton && this.skeleton) {
              const zC = fC(nC.k.MatricesIndicesKind),
                wC = fC(nC.k.MatricesWeightsKind);
              if (wC && zC) {
                const bC = this.numBoneInfluencers > 4,
                  oC = bC ? fC(nC.k.MatricesIndicesExtraKind) : null,
                  qC = bC ? fC(nC.k.MatricesWeightsExtraKind) : null,
                  FC = this.skeleton.getTransformMatrices(this);
                CC._ApplySkeleton(ZC, QC, FC, zC, wC, oC, qC)
              }
            }
            if (!1 !== zC.updatePositionsArray && QC === nC.k.PositionKind) {
              const CC = this._internalAbstractMeshDataInfo._positions || [],
                zC = CC.length;
              if (CC.length = ZC.length / 3, zC < CC.length)
                for (let ZC = zC; ZC < CC.length; ZC++) CC[ZC] = new bC.r;
              for (let QC = 0, wC = 0; QC < CC.length; QC++, wC += 3) CC[QC].L_(ZC[wC], ZC[wC + 1], ZC[wC + 2]);
              this._internalAbstractMeshDataInfo._positions = CC
            }
            return ZC
          }
          getNormalsData() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: CC,
              applyMorph: zC,
              updatePositionsArray: !1
            }, null, nC.k.NormalKind)
          }
          lL() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: CC,
              applyMorph: zC,
              updatePositionsArray: !1
            }, ZC, nC.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new FC.d(bC.r.Zero(), bC.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(CC) {
            if (!this.Zx) return this;
            const zC = this.Zx.length;
            for (let ZC = 0; ZC < zC; ZC++) {
              const QC = this.Zx[ZC];
              (zC > 1 || !QC.IsGlobal) && QC.updateBoundingInfo(CC)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.Xg || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(CC) {
            return this.WE().isInFrustum(CC, this.cullingStrategy)
          }
          isCompletelyInFrustum(CC) {
            return this.WE().isCompletelyInFrustum(CC)
          }
          sQC(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZC = arguments.length > 2 ? arguments[2] : void 0;
            const QC = this.WE(),
              wC = CC.WE();
            if (QC.intersects(wC, zC)) return !0;
            if (ZC)
              for (const bC of this.getChildMeshes())
                if (bC.sQC(CC, zC, !0)) return !0;
            return !1
          }
          intersectsPoint(CC) {
            return this.WE().intersectsPoint(CC)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(CC) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = CC
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(CC) {
            let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ZC = this.Km().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ZC.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ZC.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, CC, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, zC), this
          }
          _collideForSubMesh(CC, zC, ZC) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!CC._lastColliderWorldVertices || !CC._lastColliderTransformMatrix.equals(zC)) {
              CC._lastColliderTransformMatrix = zC.clone(), CC._lastColliderWorldVertices = [], CC._trianglePlanes = [];
              const ZC = CC.verticesStart,
                QC = CC.verticesStart + CC.verticesCount;
              for (let wC = ZC; wC < QC; wC++) CC._lastColliderWorldVertices.push(bC.r.TransformCoordinates(this._positions[wC], zC))
            }
            return ZC._collide(CC._trianglePlanes, CC._lastColliderWorldVertices, this.CQC(), CC.indexStart, CC.indexStart + CC.indexCount, CC.verticesStart, !!CC.cg(), this, this._shouldConvertRHS(), 7 === CC.cg()?.fillMode), this
          }
          _processCollisionsForSubMeshes(CC, zC) {
            const ZC = this._scene.getCollidingSubMeshCandidates(this, CC),
              QC = ZC.length;
            for (let wC = 0; wC < QC; wC++) {
              const bC = ZC.data[wC];
              QC > 1 && !bC._checkCollision(CC) || this._collideForSubMesh(bC, zC, CC)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(CC) {
            if (!this.WE()._checkCollision(CC)) return this;
            const zC = bC.j.Matrix[0],
              ZC = bC.j.Matrix[1];
            return bC.b.ScalingToRef(1 / CC._radius.x, 1 / CC._radius.y, 1 / CC._radius.z, zC), this.worldMatrixFromCache.multiplyToRef(zC, ZC), this._processCollisionsForSubMeshes(CC, ZC), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(CC, zC, ZC) {
            let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              wC = arguments.length > 4 ? arguments[4] : void 0,
              nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const fC = new qC.c,
              oC = this.getClassName(),
              FC = "InstancedLinesMesh" === oC || "LinesMesh" === oC || "GreasedLineMesh" === oC ? this.intersectionThreshold : 0,
              WC = this.WE();
            if (!this.Zx) return fC;
            if (!nC && (!CC.intersectsSphere(WC.IQC, FC) || !CC.intersectsBox(WC.boundingBox, FC))) return fC;
            if (QC) return fC.hit = !nC, fC.pickedMesh = nC ? null : this, fC.distance = nC ? 0 : bC.r.Distance(CC.origin, WC.IQC.center), fC.subMeshId = 0, fC;
            if (!this._generatePointsArray()) return fC;
            let NC = null;
            const MC = this._scene.getIntersectingSubMeshCandidates(this, CC),
              gC = MC.length;
            let SC = !1;
            for (let bC = 0; bC < gC; bC++) {
              const CC = MC.data[bC].cg();
              if (CC && (7 == CC.fillMode || 0 == CC.fillMode || 1 == CC.fillMode || 2 == CC.fillMode || 4 == CC.fillMode)) {
                SC = !0;
                break
              }
            }
            if (!SC) return fC.hit = !0, fC.pickedMesh = this, fC.distance = bC.r.Distance(CC.origin, WC.IQC.center), fC.subMeshId = -1, fC;
            for (let bC = 0; bC < gC; bC++) {
              const QC = MC.data[bC];
              if (gC > 1 && !nC && !QC.canIntersects(CC)) continue;
              const wC = QC.intersects(CC, this._positions, this.CQC(), zC, ZC);
              if (wC && (zC || !NC || wC.distance < NC.distance) && (NC = wC, NC.subMeshId = QC._id, NC._internalSubMeshId = bC, zC)) break
            }
            if (NC) {
              const zC = wC ?? this.getWorldMatrix(),
                ZC = bC.j.Eg[0],
                QC = bC.j.Eg[1];
              bC.r.TransformCoordinatesToRef(CC.origin, zC, ZC), CC.direction.scaleToRef(NC.distance, QC);
              const nC = bC.r.TransformNormal(QC, zC).addInPlace(ZC);
              return fC.hit = !0, fC.distance = bC.r.Distance(ZC, nC), fC.pickedPoint = nC, fC.pickedMesh = this, fC.bu = NC.bu || 0, fC.bv = NC.bv || 0, fC.subMeshFaceId = NC.faceId, fC.faceId = NC.faceId + MC.data[NC._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), fC.subMeshId = NC.subMeshId, fC
            }
            return fC
          }
          clone(CC, zC, ZC) {
            return null
          }
          releaseSubMeshes() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.Zx)
              for (; this.Zx.length;) this.Zx[0].dispose(CC);
            else this.Zx = [];
            return this
          }
          dispose(CC) {
            let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const QC = this.Km();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), QC.freeActiveMeshes(), QC.freeRenderingGroups(), QC.renderingManager.maintainStateBetweenFrames && QC.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((CC => CC !== this && CC.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), zC = 0; zC < this._intersectionsInProgress.length; zC++) {
              const CC = this._intersectionsInProgress[zC],
                ZC = CC._intersectionsInProgress.indexOf(this);
              CC._intersectionsInProgress.splice(ZC, 1)
            }
            this._intersectionsInProgress.length = 0;
            const wC = QC.lights;
            for (const nC of wC) {
              let CC = nC.includedOnlyMeshes.indexOf(this); - 1 !== CC && nC.includedOnlyMeshes.splice(CC, 1), CC = nC.excludedMeshes.indexOf(this), -1 !== CC && nC.excludedMeshes.splice(CC, 1);
              const zC = nC.getShadowGenerators();
              if (zC) {
                const ZC = zC.values();
                for (let zC = ZC.next(); !0 !== zC.done; zC = ZC.next()) {
                  const ZC = zC.value.getShadowMap();
                  ZC && ZC.renderList && (CC = ZC.renderList.indexOf(this), -1 !== CC && ZC.renderList.splice(CC, 1))
                }
              }
            }
            this.releaseSubMeshes(QC._isDisposing);
            const bC = QC.mg();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, bC.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), bC.wipeCaches(), QC.IH(this), this._parentContainer) {
              const CC = this._parentContainer.meshes.indexOf(this);
              CC > -1 && this._parentContainer.meshes.splice(CC, 1), this._parentContainer = null
            }
            if (ZC && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !CC)
              for (zC = 0; zC < QC.Ix.length; zC++) QC.Ix[zC].emitter === this && (QC.Ix[zC].dispose(), zC--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(CC, ZC)
          }
          _initFacetData() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            CC.facetNormals || (CC.facetNormals = []), CC.facetPositions || (CC.facetPositions = []), CC.facetPartitioning || (CC.facetPartitioning = new Array), CC.facetNb = this.CQC().length / 3 | 0, CC.partitioningSubdivisions = CC.partitioningSubdivisions ? CC.partitioningSubdivisions : 10, CC.partitioningBBoxRatio = CC.partitioningBBoxRatio ? CC.partitioningBBoxRatio : 1.01;
            for (let zC = 0; zC < CC.facetNb; zC++) CC.facetNormals[zC] = bC.r.Zero(), CC.facetPositions[zC] = bC.r.Zero();
            return CC.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            CC.facetDataEnabled || this._initFacetData();
            const zC = this.getVerticesData(nC.k.PositionKind),
              ZC = this.CQC(),
              QC = this.getVerticesData(nC.k.NormalKind)?.slice(),
              wC = this.WE();
            if (CC.facetDepthSort && !CC.facetDepthSortEnabled) {
              if (CC.facetDepthSortEnabled = !0, ZC instanceof Uint16Array) CC.depthSortedIndices = new Uint16Array(ZC);
              else if (ZC instanceof Uint32Array) CC.depthSortedIndices = new Uint32Array(ZC);
              else {
                let zC = !1;
                for (let CC = 0; CC < ZC.length; CC++)
                  if (ZC[CC] > 65535) {
                    zC = !0;
                    break
                  } CC.depthSortedIndices = zC ? new Uint32Array(ZC) : new Uint16Array(ZC)
              }
              if (CC.facetDepthSortFunction = function(CC, zC) {
                  return zC.sqDistance - CC.sqDistance
                }, !CC.facetDepthSortFrom) {
                const zC = this.Km().activeCamera;
                CC.facetDepthSortFrom = zC ? zC.position : bC.r.Zero()
              }
              CC.depthSortedFacets = [];
              for (let zC = 0; zC < CC.facetNb; zC++) {
                const ZC = {
                  ind: 3 * zC,
                  sqDistance: 0
                };
                CC.depthSortedFacets.push(ZC)
              }
              CC.invertedMatrix = bC.b.Identity(), CC.facetDepthSortOrigin = bC.r.Zero()
            }
            CC.bbSize.x = wC.maximum.x - wC.minimum.x > AC.e ? wC.maximum.x - wC.minimum.x : AC.e, CC.bbSize.y = wC.maximum.y - wC.minimum.y > AC.e ? wC.maximum.y - wC.minimum.y : AC.e, CC.bbSize.z = wC.maximum.z - wC.minimum.z > AC.e ? wC.maximum.z - wC.minimum.z : AC.e;
            let oC = CC.bbSize.x > CC.bbSize.y ? CC.bbSize.x : CC.bbSize.y;
            if (oC = oC > CC.bbSize.z ? oC : CC.bbSize.z, CC.subDiv.max = CC.partitioningSubdivisions, CC.subDiv.X = Math.floor(CC.subDiv.max * CC.bbSize.x / oC), CC.subDiv.Y = Math.floor(CC.subDiv.max * CC.bbSize.y / oC), CC.subDiv.Z = Math.floor(CC.subDiv.max * CC.bbSize.z / oC), CC.subDiv.X = CC.subDiv.X < 1 ? 1 : CC.subDiv.X, CC.subDiv.Y = CC.subDiv.Y < 1 ? 1 : CC.subDiv.Y, CC.subDiv.Z = CC.subDiv.Z < 1 ? 1 : CC.subDiv.Z, CC.facetParameters.facetNormals = this.getFacetLocalNormals(), CC.facetParameters.facetPositions = this.getFacetLocalPositions(), CC.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), CC.facetParameters.bInfo = wC, CC.facetParameters.bbSize = CC.bbSize, CC.facetParameters.subDiv = CC.subDiv, CC.facetParameters.ratio = this.partitioningBBoxRatio, CC.facetParameters.depthSort = CC.facetDepthSort, CC.facetDepthSort && CC.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(CC.invertedMatrix), bC.r.TransformCoordinatesToRef(CC.facetDepthSortFrom, CC.invertedMatrix, CC.facetDepthSortOrigin), CC.facetParameters.distanceTo = CC.facetDepthSortOrigin), CC.facetParameters.depthSortedFacets = CC.depthSortedFacets, QC && fC.e.ComputeNormals(zC, ZC, QC, CC.facetParameters), CC.facetDepthSort && CC.facetDepthSortEnabled) {
              CC.depthSortedFacets.sort(CC.facetDepthSortFunction);
              const zC = CC.depthSortedIndices.length / 3 | 0;
              for (let QC = 0; QC < zC; QC++) {
                const zC = CC.depthSortedFacets[QC].ind;
                CC.depthSortedIndices[3 * QC] = ZC[zC], CC.depthSortedIndices[3 * QC + 1] = ZC[zC + 1], CC.depthSortedIndices[3 * QC + 2] = ZC[zC + 2]
              }
              this.updateIndices(CC.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            return CC.facetNormals || this.updateFacetData(), CC.facetNormals
          }
          getFacetLocalPositions() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            return CC.facetPositions || this.updateFacetData(), CC.facetPositions
          }
          getFacetLocalPartitioning() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            return CC.facetPartitioning || this.updateFacetData(), CC.facetPartitioning
          }
          getFacetPosition(CC) {
            const zC = bC.r.Zero();
            return this.getFacetPositionToRef(CC, zC), zC
          }
          getFacetPositionToRef(CC, zC) {
            const ZC = this.getFacetLocalPositions()[CC],
              QC = this.getWorldMatrix();
            return bC.r.TransformCoordinatesToRef(ZC, QC, zC), this
          }
          getFacetNormal(CC) {
            const zC = bC.r.Zero();
            return this.getFacetNormalToRef(CC, zC), zC
          }
          getFacetNormalToRef(CC, zC) {
            const ZC = this.getFacetLocalNormals()[CC];
            return bC.r.TransformNormalToRef(ZC, this.getWorldMatrix(), zC), this
          }
          getFacetsAtLocalCoordinates(CC, zC, ZC) {
            const QC = this.WE(),
              wC = this._internalAbstractMeshDataInfo._facetData,
              bC = Math.floor((CC - QC.minimum.x * wC.partitioningBBoxRatio) * wC.subDiv.X * wC.partitioningBBoxRatio / wC.bbSize.x),
              nC = Math.floor((zC - QC.minimum.y * wC.partitioningBBoxRatio) * wC.subDiv.Y * wC.partitioningBBoxRatio / wC.bbSize.y),
              fC = Math.floor((ZC - QC.minimum.z * wC.partitioningBBoxRatio) * wC.subDiv.Z * wC.partitioningBBoxRatio / wC.bbSize.z);
            return bC < 0 || bC > wC.subDiv.max || nC < 0 || nC > wC.subDiv.max || fC < 0 || fC > wC.subDiv.max ? null : wC.facetPartitioning[bC + wC.subDiv.max * nC + wC.subDiv.max * wC.subDiv.max * fC]
          }
          getClosestFacetAtCoordinates(CC, zC, ZC, QC) {
            let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const fC = this.getWorldMatrix(),
              oC = bC.j.Matrix[5];
            fC.invertToRef(oC);
            const qC = bC.j.Eg[8];
            bC.r.TransformCoordinatesFromFloatsToRef(CC, zC, ZC, oC, qC);
            const FC = this.getClosestFacetAtLocalCoordinates(qC.x, qC.y, qC.z, QC, wC, nC);
            return QC && bC.r.TransformCoordinatesFromFloatsToRef(QC.x, QC.y, QC.z, fC, QC), FC
          }
          getClosestFacetAtLocalCoordinates(CC, zC, ZC, QC) {
            let wC, bC, nC, fC, oC, qC, FC, WC, NC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              MC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              gC = null;
            const SC = this.getFacetLocalPositions(),
              pC = this.getFacetLocalNormals(),
              PC = this.getFacetsAtLocalCoordinates(CC, zC, ZC);
            if (!PC) return null;
            let GC, RC, AC, xC, JC = Number.MAX_VALUE;
            for (let IC = 0; IC < PC.length; IC++) RC = PC[IC], AC = pC[RC], xC = SC[RC], fC = (CC - xC.x) * AC.x + (zC - xC.y) * AC.y + (ZC - xC.z) * AC.z, (!NC || NC && MC && fC >= 0 || NC && !MC && fC <= 0) && (fC = AC.x * xC.x + AC.y * xC.y + AC.z * xC.z, oC = -(AC.x * CC + AC.y * zC + AC.z * ZC - fC) / (AC.x * AC.x + AC.y * AC.y + AC.z * AC.z), qC = CC + AC.x * oC, FC = zC + AC.y * oC, WC = ZC + AC.z * oC, wC = qC - CC, bC = FC - zC, nC = WC - ZC, GC = wC * wC + bC * bC + nC * nC, GC < JC && (JC = GC, gC = RC, QC && (QC.x = qC, QC.y = FC, QC.z = WC)));
            return gC
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const CC = this._internalAbstractMeshDataInfo._facetData;
            return CC.facetDataEnabled && (CC.facetDataEnabled = !1, CC.facetPositions = [], CC.facetNormals = [], CC.facetPartitioning = new Array, CC.facetParameters = {}, CC.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(CC, zC) {
            return this
          }
          createNormals(CC) {
            const zC = this.getVerticesData(nC.k.PositionKind),
              ZC = this.CQC();
            let QC;
            return QC = this.isVerticesDataPresent(nC.k.NormalKind) ? this.getVerticesData(nC.k.NormalKind) : [], fC.e.ComputeNormals(zC, ZC, QC, {
              useRightHandedSystem: this.Km().useRightHandedSystem
            }), this.setVerticesData(nC.k.NormalKind, QC, CC), this
          }
          async optimizeIndicesAsync() {
            const CC = this.CQC();
            if (!CC) return this;
            const {
              OptimizeIndices: zC
            } = await ZC.e(351).then((() => ZC(42347)));
            return zC(CC), this.setIndices(CC, this.getTotalVertices()), this
          }
          alignWithNormal(CC, zC) {
            zC || (zC = xC.c.Y);
            const ZC = bC.j.Eg[0],
              QC = bC.j.Eg[1];
            return bC.r.CrossToRef(zC, CC, QC), bC.r.CrossToRef(CC, QC, ZC), this.rotationQuaternion ? bC.f.RotationQuaternionFromAxisToRef(ZC, CC, QC, this.rotationQuaternion) : bC.r.RotationFromAxisToRef(ZC, CC, QC, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, pC.i)("EdgesRenderer")
          }
          enableEdgesRendering(CC, zC, ZC) {
            throw (0, pC.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.Ix.filter((CC => CC.emitter === this))
          }
        }, (() => {
          const ZC = "function" === typeof Symbol && Symbol.metadata ? Object.create(NC[Symbol.metadata] ?? null) : void 0;
          zC = [IC.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, QC.j)(CC, null, zC, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: CC => "_ApplySkeleton" in CC,
              get: CC => CC._ApplySkeleton
            },
            metadata: ZC
          }, null, MC), ZC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZC
          })
        })(), CC.OCCLUSION_TYPE_NONE = ((0, QC.n)(CC, MC), 0), CC.OCCLUSION_TYPE_OPTIMISTIC = 1, CC.OCCLUSION_TYPE_STRICT = 2, CC.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, CC.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, CC.CULLINGSTRATEGY_STANDARD = 0, CC.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, CC.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, CC.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, CC.DefaultIsPickable = !0, CC
      })(),
      HC = !1;

    function EC() {
      HC || (HC = !0, (0, vC.d)("BABYLON.AbstractMesh", mC))
    }(MC = mC.prototype).createOrUpdateSubmeshesOctree ?? (MC.createOrUpdateSubmeshesOctree = (0, pC.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (gC = mC.prototype).getPhysicsImpostor ?? (gC.getPhysicsImpostor = (0, pC.f)("AbstractMesh", "getPhysicsImpostor")), (SC = mC.prototype).setPhysicsLinkWith ?? (SC.setPhysicsLinkWith = (0, pC.f)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(mC.prototype, "occlusionRetryCount") || Object.defineProperty(mC.prototype, "occlusionRetryCount", (0, pC.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(mC.prototype, "occlusionType") || Object.defineProperty(mC.prototype, "occlusionType", (0, pC.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(mC.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(mC.prototype, "occlusionQueryAlgorithmType", (0, pC.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(mC.prototype, "isOccluded") || Object.defineProperty(mC.prototype, "isOccluded", (0, pC.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(mC.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(mC.prototype, "isOcclusionQueryInProgress", (0, pC.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(mC.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(mC.prototype, "forceRenderingWhenOccluded", (0, pC.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(mC.prototype, "occlusionForRenderPassId") || Object.defineProperty(mC.prototype, "occlusionForRenderPassId", (0, pC.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(mC.prototype, "decalMap") || Object.defineProperty(mC.prototype, "decalMap", (0, pC.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(mC.prototype, "ZE") || Object.defineProperty(mC.prototype, "ZE", (0, pC.d)("AbstractMesh", "ZE")), Object.getOwnPropertyDescriptor(mC.prototype, "physicsImpostor") || Object.defineProperty(mC.prototype, "physicsImpostor", (0, pC.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(mC.prototype, "showBoundingBox") || Object.defineProperty(mC.prototype, "showBoundingBox", (0, pC.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(mC.prototype, "edgesRenderer") || Object.defineProperty(mC.prototype, "edgesRenderer", (0, pC.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(mC.prototype, "renderOutline") || Object.defineProperty(mC.prototype, "renderOutline", (0, pC.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(mC.prototype, "renderOverlay") || Object.defineProperty(mC.prototype, "renderOverlay", (0, pC.d)("AbstractMesh", "renderOverlay"))
  },
  40244: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => PC
    });
    var QC = ZC(36963),
      wC = ZC(37142),
      bC = ZC(40235),
      nC = ZC(39959),
      fC = ZC(40119),
      oC = ZC(40247),
      qC = ZC(40127),
      FC = ZC(39913),
      WC = ZC(38507),
      NC = ZC(39851),
      MC = ZC(40145),
      gC = ZC(36985),
      SC = ZC(40256),
      pC = ZC(39882);
    class PC {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(CC) {
        this._boundingBias ? this._boundingBias.Av(CC) : this._boundingBias = CC.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(CC) {
        const zC = new PC(PC.RandomId(), CC.Km());
        return zC.applyToMesh(CC), zC
      }
      get meshes() {
        return this._meshes
      }
      constructor(CC, zC, ZC) {
        let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new QC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new QC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = zC || gC.c.LastCreatedScene, this._scene && (this.id = CC, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.mg(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = wC, null !== nC && (this._totalVertices = nC), ZC ? this.setAllVerticesData(ZC, wC) : null === nC && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), bC && (this.applyToMesh(bC), bC.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Km() {
        return this._scene
      }
      mg() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let CC = 0; CC < this._meshes.length; CC++)
          if (!this._meshes[CC].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const CC = new Set;
        for (const zC in this._vertexBuffers) CC.add(this._vertexBuffers[zC].getWrapperBuffer());
        CC.forEach((CC => {
          CC._rebuild()
        }))
      }
      setAllVerticesData(CC, zC) {
        CC.applyToGeometry(this, zC), this._notifyUpdate()
      }
      setVerticesData(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0;
        ZC && Array.isArray(zC) && (zC = new Float32Array(zC));
        const wC = new nC.k(this._engine, zC, CC, {
          updatable: ZC,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: QC,
          label: "Geometry_" + this.id + "_" + CC
        });
        this.setVerticesBuffer(wC)
      }
      removeVerticesData(CC) {
        this._vertexBuffers[CC] && (this._vertexBuffers[CC].dispose(), delete this._vertexBuffers[CC]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const wC = CC.getKind();
        this._vertexBuffers[wC] && ZC && this._vertexBuffers[wC].dispose(), CC._buffer && CC._ownsBuffer && CC._buffer._increaseReferences(), this._vertexBuffers[wC] = CC;
        const bC = this._meshes,
          fC = bC.length;
        if (wC === nC.k.PositionKind) {
          this._totalVertices = zC ?? CC._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : CC.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ZC = this._extend && this._extend.minimum || new QC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            wC = this._extend && this._extend.maximum || new QC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let CC = 0; CC < fC; CC++) {
            const zC = bC[CC];
            zC.buildBoundingInfo(ZC, wC), zC._createGlobalSubMesh(zC.isUnIndexed), zC.computeWorldMatrix(!0), zC.synchronizeInstances()
          }
        }
        this._notifyUpdate(wC)
      }
      updateVerticesDataDirectly(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const wC = this.getVertexBuffer(CC);
        wC && (wC.updateDirectly(zC, ZC, QC), this._notifyUpdate(CC))
      }
      updateVerticesData(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this.getVertexBuffer(CC);
        QC && (QC.update(zC), CC === nC.k.PositionKind && this._updateBoundingInfo(ZC, zC), this._notifyUpdate(CC))
      }
      _updateBoundingInfo(CC, zC) {
        if (CC && this._updateExtend(zC), this._resetPointsArrayCache(), CC) {
          const CC = this._meshes;
          for (const zC of CC) {
            zC.hasBoundingInfo ? zC.WE().reConstruct(this._extend.minimum, this._extend.maximum) : zC.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const CC = zC.Zx;
            for (const zC of CC) zC.refreshBoundingInfo()
          }
        }
      }
      _bind(CC, zC, ZC, QC) {
        if (!CC) return;
        void 0 === zC && (zC = this._indexBuffer);
        const wC = this.getVertexBuffers();
        if (!wC) return;
        if (zC != this._indexBuffer || !this._vertexArrayObjects && !QC) return void this._engine.bindBuffers(wC, zC, CC, ZC);
        const bC = QC || this._vertexArrayObjects,
          nC = this._engine;
        bC[CC.key] || (bC[CC.key] = nC.recordVertexArrayObject(wC, zC, CC, ZC)), nC.bindVertexArrayObject(bC[CC.key], zC)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(CC, zC, ZC) {
        const QC = this.getVertexBuffer(CC);
        return QC ? QC.getFloatData(this._totalVertices, ZC || zC && 1 !== this._meshes.length) : null
      }
      copyVerticesData(CC, zC) {
        const ZC = this.getVertexBuffer(CC);
        if (!ZC) return;
        zC[CC] || (zC[CC] = new Float32Array(this._totalVertices * ZC.getSize()));
        const QC = ZC.getData();
        QC && (0, pC.g)(QC, ZC.getSize(), ZC.type, ZC.byteOffset, ZC.byteStride, ZC.normalized, this._totalVertices, zC[CC])
      }
      isVertexBufferUpdatable(CC) {
        const zC = this._vertexBuffers[CC];
        return !!zC && zC.isUpdatable()
      }
      getVertexBuffer(CC) {
        return this.isReady() ? this._vertexBuffers[CC] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(CC) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[CC] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(CC)
      }
      getVerticesDataKinds() {
        const CC = [];
        let zC;
        if (!this._vertexBuffers && this._delayInfo)
          for (zC in this._delayInfo) CC.push(zC);
        else
          for (zC in this._vertexBuffers) CC.push(zC);
        return CC
      }
      updateIndices(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const QC = CC.length !== this._indices.length;
            if (ZC || (this._indices = CC.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, CC, zC), QC)
              for (const CC of this._meshes) CC._createGlobalSubMesh(!0)
          } else this.setIndices(CC, null, !0)
      }
      setIndexBuffer(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = CC, this._totalVertices = zC, this._totalIndices = ZC, CC.is32Bits = null === QC ? zC > 65535 : QC;
        for (const wC of this._meshes) wC._createGlobalSubMesh(!0), wC.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = CC, this._indexBufferIsUpdatable = ZC, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ZC, "Geometry_" + this.id + "_IndexBuffer")), void 0 != zC && (this._totalVertices = zC);
        for (const wC of this._meshes) wC._createGlobalSubMesh(!QC), wC.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      CQC(CC, zC) {
        if (!this.isReady()) return null;
        const ZC = this._indices;
        return zC || CC && 1 !== this._meshes.length ? ZC.slice() : ZC
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        CC && this._vertexArrayObjects && this._vertexArrayObjects[CC.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[CC.key]), delete this._vertexArrayObjects[CC.key])
      }
      releaseForMesh(CC, zC) {
        const ZC = this._meshes,
          QC = ZC.indexOf(CC); - 1 !== QC && (ZC.splice(QC, 1), this._vertexArrayObjects && CC._invalidateInstanceVertexArrayObject(), CC._geometry = null, 0 === ZC.length && zC && this.dispose())
      }
      applyToMesh(CC) {
        if (CC._geometry === this) return;
        const zC = CC._geometry;
        zC && zC.releaseForMesh(CC), this._vertexArrayObjects && CC._invalidateInstanceVertexArrayObject();
        const ZC = this._meshes;
        CC._geometry = this, CC._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ZC.push(CC), this.isReady() ? this._applyToMesh(CC) : this._boundingInfo && CC.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!CC && (CC = this.getVerticesData(nC.k.PositionKind), !CC)) return;
          this._extend = (0, MC.d)(CC, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(CC) {
        for (const zC in this._vertexBuffers) {
          const ZC = this._vertexBuffers[zC];
          ZC._buffer.getBuffer() || ZC.create(), zC === nC.k.PositionKind && (this._extend || this._updateExtend(), CC.buildBoundingInfo(this._extend.minimum, this._extend.maximum), CC._createGlobalSubMesh(CC.isUnIndexed), CC._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), CC._syncGeometryWithMorphTargetManager(), CC.synchronizeInstances()
      }
      _notifyUpdate(CC) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, CC), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const zC of this._meshes) zC._markSubMeshesAsAttributesDirty()
      }
      load(CC, zC) {
        2 !== this.delayLoadState && (this.isReady() ? zC && zC() : (this.delayLoadState = 2, this._queueLoad(CC, zC)))
      }
      _queueLoad(CC, zC) {
        this.delayLoadingFile && (CC.addPendingData(this), (async () => {
          try {
            const ZC = await CC._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void CC.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ZC), this), this.delayLoadState = 1, this._delayInfo = [], CC.removePendingData(this);
            const QC = this._meshes,
              wC = QC.length;
            for (let CC = 0; CC < wC; CC++) this._applyToMesh(QC[CC]);
            zC && zC()
          } catch (ZC) {
            CC.removePendingData(this), CC.GJ || WC.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZC}`)
          }
        })())
      }
      toLeftHanded() {
        const CC = this.CQC(!1);
        if (null != CC && CC.length > 0) {
          for (let zC = 0; zC < CC.length; zC += 3) {
            const ZC = CC[zC + 0];
            CC[zC + 0] = CC[zC + 2], CC[zC + 2] = ZC
          }
          this.setIndices(CC)
        }
        const zC = this.getVerticesData(nC.k.PositionKind, !1);
        if (null != zC && zC.length > 0) {
          for (let CC = 0; CC < zC.length; CC += 3) zC[CC + 2] = -zC[CC + 2];
          this.setVerticesData(nC.k.PositionKind, zC, !1)
        }
        const ZC = this.getVerticesData(nC.k.NormalKind, !1);
        if (null != ZC && ZC.length > 0) {
          for (let CC = 0; CC < ZC.length; CC += 3) ZC[CC + 2] = -ZC[CC + 2];
          this.setVerticesData(nC.k.NormalKind, ZC, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const CC = this.getVerticesData(nC.k.PositionKind);
        if (!CC || 0 === CC.length) return !1;
        for (let zC = 3 * this._positionsCache.length, ZC = this._positionsCache.length; zC < CC.length; zC += 3, ++ZC) this._positionsCache[ZC] = QC.r.FromArray(CC, zC);
        for (let zC = 0, ZC = 0; zC < CC.length; zC += 3, ++ZC) this._positionsCache[ZC].set(CC[0 + zC], CC[1 + zC], CC[2 + zC]);
        return this._positionsCache.length = CC.length / 3, this._positions = this._positionsCache, !0
      }
      GJ() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ZC in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ZC]);
          this._vertexArrayObjects = {};
          const CC = this._meshes,
            zC = CC.length;
          for (let ZC = 0; ZC < zC; ZC++) CC[ZC]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const CC = this._meshes,
          zC = CC.length;
        let ZC;
        for (ZC = 0; ZC < zC; ZC++) this.releaseForMesh(CC[ZC]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const QC in this._vertexBuffers) this._vertexBuffers[QC].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const CC = this._parentContainer.geometries.indexOf(this);
          CC > -1 && this._parentContainer.geometries.splice(CC, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(CC) {
        const zC = new PC(CC, this._scene),
          ZC = this.CQC(void 0, !0);
        ZC && zC.setIndices(ZC);
        let QC, wC = !1;
        for (QC in this._vertexBuffers) {
          const CC = this.getVertexBuffer(QC),
            ZC = CC.getData();
          if (!ZC) continue;
          const bC = CC.isUpdatable(),
            fC = CC.getSize(),
            {
              type: oC,
              byteOffset: qC,
              byteStride: FC,
              normalized: WC
            } = CC;
          wC = wC || bC;
          let NC = this._totalVertices;
          if (CC.getIsInstanced()) {
            let CC;
            CC = ZC instanceof Array ? 4 * ZC.length : ZC.byteLength, NC = CC / FC
          }
          const MC = (0, pC.o)(ZC, fC, oC, qC, FC, NC, !0),
            gC = new nC.k(this._engine, MC, QC, {
              updatable: bC,
              useBytes: !1,
              stride: fC,
              size: fC,
              offset: 0,
              type: oC,
              normalized: WC,
              takeBufferOwnership: !0,
              instanced: CC.getIsInstanced()
            });
          zC.setVerticesBuffer(gC, NC)
        }
        for (QC in zC._updatable = wC, zC.delayLoadState = this.delayLoadState, zC.delayLoadingFile = this.delayLoadingFile, zC._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) zC._delayInfo = zC._delayInfo || [], zC._delayInfo.push(QC);
        return zC._boundingInfo = new qC.d(this._extend.minimum, this._extend.maximum), zC
      }
      serialize() {
        const CC = {};
        return CC.id = this.id, CC.uniqueId = this.uniqueId, CC.updatable = this._updatable, NC.e && NC.e.HasTags(this) && (CC.tags = NC.e.GetTags(this)), CC
      }
      _toNumberArray(CC) {
        return Array.isArray(CC) ? CC : Array.prototype.slice.call(CC)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const CC in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, CC) && (this._vertexBuffers[CC]._buffer._data = null)
      }
      serializeVerticeData() {
        const CC = this.serialize();
        return this.isVerticesDataPresent(nC.k.PositionKind) && (CC.positions = this._toNumberArray(this.getVerticesData(nC.k.PositionKind)), this.isVertexBufferUpdatable(nC.k.PositionKind) && (CC.positionsUpdatable = !0)), this.isVerticesDataPresent(nC.k.NormalKind) && (CC.normals = this._toNumberArray(this.getVerticesData(nC.k.NormalKind)), this.isVertexBufferUpdatable(nC.k.NormalKind) && (CC.normalsUpdatable = !0)), this.isVerticesDataPresent(nC.k.TangentKind) && (CC.tangents = this._toNumberArray(this.getVerticesData(nC.k.TangentKind)), this.isVertexBufferUpdatable(nC.k.TangentKind) && (CC.tangentsUpdatable = !0)), this.isVerticesDataPresent(nC.k.UVKind) && (CC.uvs = this._toNumberArray(this.getVerticesData(nC.k.UVKind)), this.isVertexBufferUpdatable(nC.k.UVKind) && (CC.uvsUpdatable = !0)), this.isVerticesDataPresent(nC.k.UV2Kind) && (CC.uvs2 = this._toNumberArray(this.getVerticesData(nC.k.UV2Kind)), this.isVertexBufferUpdatable(nC.k.UV2Kind) && (CC.uvs2Updatable = !0)), this.isVerticesDataPresent(nC.k.UV3Kind) && (CC.uvs3 = this._toNumberArray(this.getVerticesData(nC.k.UV3Kind)), this.isVertexBufferUpdatable(nC.k.UV3Kind) && (CC.uvs3Updatable = !0)), this.isVerticesDataPresent(nC.k.UV4Kind) && (CC.uvs4 = this._toNumberArray(this.getVerticesData(nC.k.UV4Kind)), this.isVertexBufferUpdatable(nC.k.UV4Kind) && (CC.uvs4Updatable = !0)), this.isVerticesDataPresent(nC.k.UV5Kind) && (CC.uvs5 = this._toNumberArray(this.getVerticesData(nC.k.UV5Kind)), this.isVertexBufferUpdatable(nC.k.UV5Kind) && (CC.uvs5Updatable = !0)), this.isVerticesDataPresent(nC.k.UV6Kind) && (CC.uvs6 = this._toNumberArray(this.getVerticesData(nC.k.UV6Kind)), this.isVertexBufferUpdatable(nC.k.UV6Kind) && (CC.uvs6Updatable = !0)), this.isVerticesDataPresent(nC.k.ColorKind) && (CC.colors = this._toNumberArray(this.getVerticesData(nC.k.ColorKind)), this.isVertexBufferUpdatable(nC.k.ColorKind) && (CC.colorsUpdatable = !0)), this.isVerticesDataPresent(nC.k.MatricesIndicesKind) && (CC.matricesIndices = this._toNumberArray(this.getVerticesData(nC.k.MatricesIndicesKind)), CC.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(nC.k.MatricesIndicesKind) && (CC.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(nC.k.MatricesWeightsKind) && (CC.matricesWeights = this._toNumberArray(this.getVerticesData(nC.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(nC.k.MatricesWeightsKind) && (CC.matricesWeightsUpdatable = !0)), CC.indices = this._toNumberArray(this.CQC()), CC
      }
      static ExtractFromMesh(CC, zC) {
        const ZC = CC._geometry;
        return ZC ? ZC.copy(zC) : null
      }
      static RandomId() {
        return FC.g.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(CC, zC) {
        for (let ZC = 0; ZC < zC.geometries.length; ZC++)
          if (zC.geometries[ZC]._loadedUniqueId === CC) return zC.geometries[ZC];
        return null
      }
      static _ImportGeometry(CC, zC) {
        const ZC = zC.Km(),
          QC = CC.geometryUniqueId,
          bC = CC.geometryId;
        if (QC || bC) {
          const CC = QC ? this._GetGeometryByLoadedUniqueId(QC, ZC) : ZC.getGeometryById(bC);
          CC && CC.applyToMesh(zC)
        } else if (CC instanceof ArrayBuffer) {
          const ZC = zC._binaryInfo;
          if (ZC.positionsAttrDesc && ZC.positionsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.positionsAttrDesc.offset, ZC.positionsAttrDesc.count);
            zC.setVerticesData(nC.k.PositionKind, QC, !1)
          }
          if (ZC.normalsAttrDesc && ZC.normalsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.normalsAttrDesc.offset, ZC.normalsAttrDesc.count);
            zC.setVerticesData(nC.k.NormalKind, QC, !1)
          }
          if (ZC.tangetsAttrDesc && ZC.tangetsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.tangetsAttrDesc.offset, ZC.tangetsAttrDesc.count);
            zC.setVerticesData(nC.k.TangentKind, QC, !1)
          }
          if (ZC.uvsAttrDesc && ZC.uvsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvsAttrDesc.offset, ZC.uvsAttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UVKind, QC, !1)
          }
          if (ZC.uvs2AttrDesc && ZC.uvs2AttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvs2AttrDesc.offset, ZC.uvs2AttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UV2Kind, QC, !1)
          }
          if (ZC.uvs3AttrDesc && ZC.uvs3AttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvs3AttrDesc.offset, ZC.uvs3AttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UV3Kind, QC, !1)
          }
          if (ZC.uvs4AttrDesc && ZC.uvs4AttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvs4AttrDesc.offset, ZC.uvs4AttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UV4Kind, QC, !1)
          }
          if (ZC.uvs5AttrDesc && ZC.uvs5AttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvs5AttrDesc.offset, ZC.uvs5AttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UV5Kind, QC, !1)
          }
          if (ZC.uvs6AttrDesc && ZC.uvs6AttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.uvs6AttrDesc.offset, ZC.uvs6AttrDesc.count);
            if (SC.d)
              for (let CC = 1; CC < QC.length; CC += 2) QC[CC] = 1 - QC[CC];
            zC.setVerticesData(nC.k.UV6Kind, QC, !1)
          }
          if (ZC.colorsAttrDesc && ZC.colorsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.colorsAttrDesc.offset, ZC.colorsAttrDesc.count);
            zC.setVerticesData(nC.k.ColorKind, QC, !1, ZC.colorsAttrDesc.stride)
          }
          if (ZC.matricesIndicesAttrDesc && ZC.matricesIndicesAttrDesc.count > 0) {
            const QC = new Int32Array(CC, ZC.matricesIndicesAttrDesc.offset, ZC.matricesIndicesAttrDesc.count),
              wC = [];
            for (let CC = 0; CC < QC.length; CC++) {
              const zC = QC[CC];
              wC.push(255 & zC), wC.push((65280 & zC) >> 8), wC.push((16711680 & zC) >> 16), wC.push(zC >> 24 & 255)
            }
            zC.setVerticesData(nC.k.MatricesIndicesKind, wC, !1)
          }
          if (ZC.matricesIndicesExtraAttrDesc && ZC.matricesIndicesExtraAttrDesc.count > 0) {
            const QC = new Int32Array(CC, ZC.matricesIndicesExtraAttrDesc.offset, ZC.matricesIndicesExtraAttrDesc.count),
              wC = [];
            for (let CC = 0; CC < QC.length; CC++) {
              const zC = QC[CC];
              wC.push(255 & zC), wC.push((65280 & zC) >> 8), wC.push((16711680 & zC) >> 16), wC.push(zC >> 24 & 255)
            }
            zC.setVerticesData(nC.k.MatricesIndicesExtraKind, wC, !1)
          }
          if (ZC.matricesWeightsAttrDesc && ZC.matricesWeightsAttrDesc.count > 0) {
            const QC = new Float32Array(CC, ZC.matricesWeightsAttrDesc.offset, ZC.matricesWeightsAttrDesc.count);
            zC.setVerticesData(nC.k.MatricesWeightsKind, QC, !1)
          }
          if (ZC.indicesAttrDesc && ZC.indicesAttrDesc.count > 0) {
            const QC = new Int32Array(CC, ZC.indicesAttrDesc.offset, ZC.indicesAttrDesc.count);
            zC.setIndices(QC, null)
          }
          if (ZC.subMeshesAttrDesc && ZC.subMeshesAttrDesc.count > 0) {
            const QC = new Int32Array(CC, ZC.subMeshesAttrDesc.offset, 5 * ZC.subMeshesAttrDesc.count);
            zC.Zx = [];
            for (let CC = 0; CC < ZC.subMeshesAttrDesc.count; CC++) {
              const ZC = QC[5 * CC + 0],
                wC = QC[5 * CC + 1],
                bC = QC[5 * CC + 2],
                nC = QC[5 * CC + 3],
                oC = QC[5 * CC + 4];
              fC.d.AddToMesh(ZC, wC, bC, nC, oC, zC)
            }
          }
        } else if (CC.positions && CC.normals && CC.indices) {
          if (zC.setVerticesData(nC.k.PositionKind, CC.positions, CC.positions._updatable || CC.positionsUpdatable), zC.setVerticesData(nC.k.NormalKind, CC.normals, CC.normals._updatable || CC.normalsUpdatable), CC.tangents && zC.setVerticesData(nC.k.TangentKind, CC.tangents, CC.tangents._updatable || CC.tangentsUpdatable), CC.uvs && zC.setVerticesData(nC.k.UVKind, CC.uvs, CC.uvs._updatable || CC.uvsUpdatable), CC.uvs2 && zC.setVerticesData(nC.k.UV2Kind, CC.uvs2, CC.uvs2._updatable || CC.uvs2Updatable), CC.uvs3 && zC.setVerticesData(nC.k.UV3Kind, CC.uvs3, CC.uvs3._updatable || CC.uvs3Updatable), CC.uvs4 && zC.setVerticesData(nC.k.UV4Kind, CC.uvs4, CC.uvs4._updatable || CC.uvs4Updatable), CC.uvs5 && zC.setVerticesData(nC.k.UV5Kind, CC.uvs5, CC.uvs5._updatable || CC.uvs5Updatable), CC.uvs6 && zC.setVerticesData(nC.k.UV6Kind, CC.uvs6, CC.uvs6._updatable || CC.uvs6Updatable), CC.colors && zC.setVerticesData(nC.k.ColorKind, wC.g.CheckColors4(CC.colors, CC.positions.length / 3), CC.colors._updatable), CC.matricesIndices)
            if (CC.matricesIndices._isExpanded || CC.matricesIndicesExpanded) delete CC.matricesIndices._isExpanded, delete CC.matricesIndicesExpanded, zC.setVerticesData(nC.k.MatricesIndicesKind, CC.matricesIndices, CC.matricesIndices._updatable || CC.matricesIndicesUpdatable);
            else {
              const ZC = [];
              for (let zC = 0; zC < CC.matricesIndices.length; zC++) {
                const QC = CC.matricesIndices[zC];
                ZC.push(255 & QC), ZC.push((65280 & QC) >> 8), ZC.push((16711680 & QC) >> 16), ZC.push(QC >> 24 & 255)
              }
              zC.setVerticesData(nC.k.MatricesIndicesKind, ZC, CC.matricesIndices._updatable || CC.matricesIndicesUpdatable)
            } if (CC.matricesIndicesExtra)
            if (CC.matricesIndicesExtraExpanded || CC.matricesIndicesExtra._isExpanded) delete CC.matricesIndices._isExpanded, delete CC.matricesIndicesExtraExpanded, zC.setVerticesData(nC.k.MatricesIndicesExtraKind, CC.matricesIndicesExtra, CC.matricesIndicesExtra._updatable || CC.matricesIndicesExtraUpdatable);
            else {
              const ZC = [];
              for (let zC = 0; zC < CC.matricesIndicesExtra.length; zC++) {
                const QC = CC.matricesIndicesExtra[zC];
                ZC.push(255 & QC), ZC.push((65280 & QC) >> 8), ZC.push((16711680 & QC) >> 16), ZC.push(QC >> 24 & 255)
              }
              zC.setVerticesData(nC.k.MatricesIndicesExtraKind, ZC, CC.matricesIndicesExtra._updatable || CC.matricesIndicesExtraUpdatable)
            } CC.matricesWeights && (PC._CleanMatricesWeights(CC, zC), zC.setVerticesData(nC.k.MatricesWeightsKind, CC.matricesWeights, CC.matricesWeights._updatable)), CC.matricesWeightsExtra && zC.setVerticesData(nC.k.MatricesWeightsExtraKind, CC.matricesWeightsExtra, CC.matricesWeights._updatable), zC.setIndices(CC.indices, null)
        }
        if (CC.Zx) {
          zC.Zx = [];
          for (let ZC = 0; ZC < CC.Zx.length; ZC++) {
            const QC = CC.Zx[ZC];
            fC.d.AddToMesh(QC.materialIndex, QC.verticesStart, QC.verticesCount, QC.indexStart, QC.indexCount, zC)
          }
        }
        zC._shouldGenerateFlatShading && (zC.convertToFlatShadedMesh(), zC._shouldGenerateFlatShading = !1), zC.computeWorldMatrix(!0), ZC.onMeshImportedObservable.notifyObservers(zC)
      }
      static _CleanMatricesWeights(CC, zC) {
        const ZC = .001;
        if (!oC.d.CleanBoneMatrixWeights) return;
        let QC;
        if (!(CC.skeletonId > -1)) return;
        {
          const ZC = zC.Km().getLastSkeletonById(CC.skeletonId);
          if (!ZC) return;
          QC = ZC.bones.length
        }
        const wC = zC.getVerticesData(nC.k.MatricesIndicesKind),
          bC = zC.getVerticesData(nC.k.MatricesIndicesExtraKind),
          fC = CC.matricesWeights,
          qC = CC.matricesWeightsExtra,
          FC = CC.numBoneInfluencer,
          WC = fC.length;
        for (let nC = 0; nC < WC; nC += 4) {
          let CC = 0,
            zC = -1;
          for (let QC = 0; QC < 4; QC++) {
            const wC = fC[nC + QC];
            CC += wC, wC < ZC && zC < 0 && (zC = QC)
          }
          if (qC)
            for (let QC = 0; QC < 4; QC++) {
              const wC = qC[nC + QC];
              CC += wC, wC < ZC && zC < 0 && (zC = QC + 4)
            }
          if ((zC < 0 || zC > FC - 1) && (zC = FC - 1), CC > ZC) {
            const zC = 1 / CC;
            for (let CC = 0; CC < 4; CC++) fC[nC + CC] *= zC;
            if (qC)
              for (let CC = 0; CC < 4; CC++) qC[nC + CC] *= zC
          } else zC >= 4 ? (qC[nC + zC - 4] = 1 - CC, bC[nC + zC - 4] = QC) : (fC[nC + zC] = 1 - CC, wC[nC + zC] = QC)
        }
        zC.setVerticesData(nC.k.MatricesIndicesKind, wC), CC.matricesWeightsExtra && zC.setVerticesData(nC.k.MatricesIndicesExtraKind, bC)
      }
      static Parse(CC, zC, ZC) {
        const wC = new PC(CC.id, zC, void 0, CC.updatable);
        return wC._loadedUniqueId = CC.uniqueId, NC.e && NC.e.AddTagsTo(wC, CC.tags), CC.delayLoadingFile ? (wC.delayLoadState = 4, wC.delayLoadingFile = ZC + CC.delayLoadingFile, wC._boundingInfo = new qC.d(QC.r.FromArray(CC.boundingBoxMinimum), QC.r.FromArray(CC.boundingBoxMaximum)), wC._delayInfo = [], CC.hasUVs && wC._delayInfo.push(nC.k.UVKind), CC.hasUVs2 && wC._delayInfo.push(nC.k.UV2Kind), CC.hasUVs3 && wC._delayInfo.push(nC.k.UV3Kind), CC.hasUVs4 && wC._delayInfo.push(nC.k.UV4Kind), CC.hasUVs5 && wC._delayInfo.push(nC.k.UV5Kind), CC.hasUVs6 && wC._delayInfo.push(nC.k.UV6Kind), CC.hasColors && wC._delayInfo.push(nC.k.ColorKind), CC.hasMatricesIndices && wC._delayInfo.push(nC.k.MatricesIndicesKind), CC.hasMatricesWeights && wC._delayInfo.push(nC.k.MatricesWeightsKind), wC._delayLoadingFunction = bC.e.ImportVertexData) : bC.e.ImportVertexData(CC, wC), zC.pushGeometry(wC, !0), wC
      }
    }
  },
  40292: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => WC,
      d: () => gC
    });
    var QC = ZC(36963),
      wC = ZC(38507),
      bC = ZC(40265),
      nC = ZC(40224),
      fC = ZC(38501),
      oC = ZC(40272),
      qC = ZC(39959),
      FC = ZC(37002);
    class WC extends bC.b {
      constructor(CC, zC) {
        super(CC, zC.Km()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, zC.P_(this), this._sourceMesh = zC, this._unIndexed = zC._unIndexed, this.position.Av(zC.position), this.rotation.Av(zC.rotation), this.sq.Av(zC.sq), zC.rotationQuaternion && (this.rotationQuaternion = zC.rotationQuaternion.clone()), this.animations = zC.animations.slice();
        for (const ZC of zC.getAnimationRanges()) null != ZC && this.createAnimationRange(ZC.name, ZC.from, ZC.to);
        if (this.infiniteDistance = zC.infiniteDistance, this.setPivotMatrix(zC.getPivotMatrix()), zC.skeleton || zC.morphTargetManager || !zC.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const CC = zC.WE();
          this.buildBoundingInfo(CC.minimum, CC.maximum)
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
      set receiveShadows(CC) {
        this._sourceMesh?.receiveShadows !== CC && wC.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(CC) {
        this._sourceMesh?.material !== CC && wC.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(CC) {
        this._sourceMesh?.visibility !== CC && wC.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(CC) {
        this._sourceMesh?.skeleton !== CC && wC.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(CC) {
        this._sourceMesh && CC !== this._sourceMesh.renderingGroupId && wC.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(CC) {
        this._sourceMesh && CC !== this._sourceMesh.meshBlendingTag && wC.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get LQC() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(CC) {
        return this._sourceMesh.createInstance(CC)
      }
      isReady() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(CC, !0)
      }
      getVerticesData(CC, zC, ZC) {
        return this._sourceMesh.getVerticesData(CC, zC, ZC)
      }
      copyVerticesData(CC, zC) {
        this._sourceMesh.copyVerticesData(CC, zC)
      }
      getVertexBuffer(CC, zC) {
        return this._sourceMesh.getVertexBuffer(CC, zC)
      }
      setVerticesData(CC, zC, ZC, QC) {
        return this.LQC && this.LQC.setVerticesData(CC, zC, ZC, QC), this.LQC
      }
      updateVerticesData(CC, zC, ZC, QC) {
        return this.LQC && this.LQC.updateVerticesData(CC, zC, ZC, QC), this.LQC
      }
      setIndices(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.LQC && this.LQC.setIndices(CC, zC), this.LQC
      }
      isVerticesDataPresent(CC) {
        return this._sourceMesh.isVerticesDataPresent(CC)
      }
      CQC() {
        return this._sourceMesh.CQC()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let CC, zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.WE().isLocked) return this;
        CC = "object" === typeof zC ? zC : {
          applySkeleton: zC,
          applyMorph: ZC
        };
        const QC = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(CC, null, qC.k.PositionKind), QC), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(CC, zC) {
        if (super._activate(CC, zC), this._sourceMesh.Zx || wC.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, CC), zC) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== oC.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new QC.b);
          const CC = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, QC.j.Eg[7].Av(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Av(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Av(QC.j.Eg[7]), this._currentLOD._masterMesh = CC, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get ZH() {
        return !0
      }
      getLOD(CC) {
        if (!CC) return this;
        const zC = this.LQC.getLODLevels();
        if (zC && 0 !== zC.length) {
          const zC = this.WE();
          this._currentLOD = this.LQC.getLOD(CC, zC.IQC)
        } else this._currentLOD = this.LQC;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(CC) {
        return this.LQC._preActivateForIntermediateRendering(CC)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.Zx)
          for (let CC = 0; CC < this._sourceMesh.Zx.length; CC++) this._sourceMesh.Zx[CC].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.WE().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(CC);
        if (fC.e.DeepCopy(this, QC, ["name", "Zx", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "LQC", "ZH", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "yQC", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "EnC", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), zC && (QC.parent = zC), !ZC)
          for (let wC = 0; wC < this.Km().meshes.length; wC++) {
            const CC = this.Km().meshes[wC];
            CC.parent === this && CC.clone(CC.name, QC)
          }
        return QC.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(QC), QC
      }
      dispose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.A_(this), super.dispose(CC, zC)
      }
      _serializeAsParent(CC) {
        super._serializeAsParent(CC), CC.parentId = this._sourceMesh.uniqueId, CC.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = this.clone("Clone of " + (this.name || this.id), CC || this.parent, !0, zC && zC.newSourcedMesh);
        QC && ZC && ZC(this, QC);
        for (const wC of this.getChildTransformNodes(!0)) wC.instantiateHierarchy(QC, zC, ZC);
        return QC
      }
    }
    let NC = !1;

    function MC(CC, zC, ZC, QC, wC) {
      for (let bC = 0; bC < zC.length; bC++) {
        const nC = CC[zC[bC]] ?? 0,
          fC = wC + ZC[bC];
        nC.toArray ? nC.toArray(QC, fC) : nC.copyToArray ? nC.copyToArray(QC, fC) : QC[fC] = nC
      }
    }

    function gC() {
      NC || (NC = !0, nC.b._instancedMeshFactory = (CC, zC) => {
        const ZC = new WC(CC, zC);
        if (zC.ZE) {
          ZC.ZE = {};
          for (const CC in zC.ZE) ZC.ZE[CC] = zC.ZE[CC]
        }
        return ZC
      }, nC.b.prototype.UH = function(CC, zC) {
        if (!this.ZE) {
          this.ZE = {};
          for (const CC of this.instances) CC.ZE = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.mg().getCaps().vertexArrayObject ? {} : void 0
        }), this.ZE[CC] = null, this._userInstancedBuffersStorage.strides[CC] = zC;
        const ZC = this._userInstancedBuffersStorage;
        ZC.interleavedKinds = [], ZC.interleavedOffsets = [], ZC.interleavedRowStride = 0;
        for (const QC in ZC.strides) ZC.interleavedKinds.push(QC), ZC.interleavedOffsets.push(ZC.interleavedRowStride), ZC.interleavedRowStride += ZC.strides[QC];
        ZC.interleavedData = new Float32Array(32 * ZC.interleavedRowStride);
        for (const QC in ZC.interleavedBuffers) ZC.interleavedBuffers[QC].buffer.dispose();
        ZC.interleavedBuffers = {}, ZC.vertexBuffers[CC] = null;
        for (const QC of this.instances) QC.ZE[CC] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, nC.b.prototype._processInstancedBuffers = function(CC, zC) {
        const ZC = this._userInstancedBuffersStorage,
          QC = ZC.interleavedRowStride;
        if (!QC) return;
        const wC = CC ? CC.length : 0,
          bC = (wC + 1) * QC;
        let nC = ZC.interleavedData;
        if (nC.length < bC) {
          let CC = nC.length;
          for (; CC < bC;) CC *= 2;
          nC = ZC.interleavedData = new Float32Array(CC)
        }
        const fC = ZC.interleavedKinds,
          oC = ZC.interleavedOffsets;
        let FC = 0;
        zC && (MC(this.ZE, fC, oC, nC, FC), FC += QC);
        for (let qC = 0; qC < wC; qC++) MC(CC[qC].ZE, fC, oC, nC, FC), FC += QC;
        let WC = "shared",
          NC = ZC.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (WC = this._instanceDataStorage.engine.currentRenderPassId, ZC.renderPasses || (ZC.renderPasses = {}), ZC.renderPasses[WC] || (ZC.renderPasses[WC] = {}), NC = ZC.renderPasses[WC]);
        const gC = ZC.interleavedBuffers[WC];
        let SC = !gC || gC.data !== nC;
        for (let qC = 0; !SC && qC < fC.length; qC++) SC = !NC[fC[qC]];
        if (!SC) return void gC.buffer.updateDirectly(nC, 0);
        gC?.buffer.dispose();
        const pC = new qC.c(this.mg(), nC, !0, QC, !1, !0);
        for (let qC = 0; qC < fC.length; qC++) {
          const CC = fC[qC],
            zC = pC.createVertexBuffer(CC, oC[qC], ZC.strides[CC]);
          zC.hashCode += zC.byteOffset * 2 ** 24, NC[CC] = zC
        }
        ZC.interleavedBuffers[WC] = {
          buffer: pC,
          data: nC
        }, this._invalidateInstanceVertexArrayObject()
      }, nC.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const CC in this._userInstancedBuffersStorage.vertexArrayObjects) this.mg().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[CC]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, nC.b.prototype._disposeInstanceSpecificData = function() {
        for (const zC in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[zC].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const zC in this.ZE) this._userInstancedBuffersStorage.vertexBuffers[zC] && this._userInstancedBuffersStorage.vertexBuffers[zC].dispose();
        const CC = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (CC) {
          for (const zC in CC) CC[zC].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.ZE = {}
      }, (0, FC.d)("BABYLON.InstancedMesh", WC))
    }
  },
  40224: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => OC,
      d: () => VC,
      f: () => tC
    });
    var QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC = ZC(36987),
      GC = ZC(39913),
      RC = ZC(39865),
      AC = ZC(38501),
      xC = ZC(39851),
      JC = ZC(40229),
      IC = ZC(40042),
      iC = ZC(36963),
      vC = ZC(37142),
      eC = ZC(40046),
      hC = ZC(39959),
      KC = ZC(40235),
      YC = ZC(40244),
      dC = ZC(40265),
      mC = ZC(40119),
      HC = ZC(40110),
      EC = ZC(40200),
      lC = ZC(40274),
      XC = ZC(40247),
      cC = ZC(39842),
      uC = ZC(38507),
      rC = ZC(37002),
      sC = ZC(39694),
      TC = ZC(39990);
    class aC {
      constructor(CC, zC) {
        this.distanceOrScreenCoverage = CC, this.mesh = zC
      }
    }
    class tC {}
    class DC {
      constructor() {
        this.batchCache = new yC(this), this.batchCacheReplacementModeInFrozenMode = new yC(this), this.instancesBufferSize = 2048
      }
    }
    class jC {
      constructor() {
        this.renderPasses = {}
      }
    }
    class yC {
      constructor(CC) {
        this.parent = CC, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class LC {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class UC {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const BC = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class OC extends dC.b {
      static _GetDefaultSideOrientation(CC) {
        return CC || OC.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(CC) {
        this._internalMeshDataInfo._useLODScreenCoverage = CC, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(CC) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== CC && (CC && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(hC.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(hC.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = CC, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new PC.d), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new PC.d), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new PC.d), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new PC.d), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new PC.d), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(CC) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(CC)
      }
      get yQC() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(CC) {
        this._internalMeshDataInfo._forcedInstanceCount = CC
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(CC) {
        this._internalMeshDataInfo._sideOrientation = CC, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === CC || !this._scene.useRightHandedSystem && 0 === CC
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(CC) {
        this.sideOrientation = CC, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(CC) {
        this._internalMeshDataInfo._overrideRenderingFillMode = CC
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(CC) {
        CC && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (CC.sideOrientation = null), this._setMaterial(CC)
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
      set isUnIndexed(CC) {
        this._unIndexed !== CC && (this._unIndexed = CC, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const CC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return CC ? CC.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const CC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return CC ? CC.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(CC) {
        this._instanceDataStorage.manualUpdate = CC
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(CC) {
        this._instanceDataStorage.previousManualUpdate = CC
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(CC) {
        this._instanceDataStorage.forceMatrixUpdates = CC
      }
      _copySource(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const wC = this.Km();
        if (CC._geometry && CC._geometry.applyToMesh(this), AC.e.DeepCopy(CC, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "yQC", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "ZH", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "EnC", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = CC, wC.useClonedMeshMap && (CC._internalMeshDataInfo.meshMap || (CC._internalMeshDataInfo.meshMap = {}), CC._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = CC._originalBuilderSideOrientation, this._creationDataStorage = CC._creationDataStorage, CC._ranges) {
          const zC = CC._ranges;
          for (const CC in zC) Object.prototype.hasOwnProperty.call(zC, CC) && zC[CC] && this.createAnimationRange(CC, zC[CC].from, zC[CC].to)
        }
        if (CC.metadata && CC.metadata.clone ? this.metadata = CC.metadata.clone() : this.metadata = CC.metadata, this._internalMetadata = CC._internalMetadata, this.meshBlendingTag = CC.meshBlendingTag, xC.e && xC.e.HasTags(CC) && xC.e.AddTagsTo(this, xC.e.GetTags(CC, !0)), this.IK(CC.isEnabled(!1)), this.parent = CC.parent, this.setPivotMatrix(CC.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + CC.id, this.material = CC.material, !zC) {
          const wC = CC.getDescendants(!0);
          for (let CC = 0; CC < wC.length; CC++) {
            const bC = wC[CC];
            bC._isMesh ? (BC.parent = this, BC.doNotCloneChildren = zC, BC.clonePhysicsImpostor = ZC, BC.cloneThinInstances = QC, bC.clone(this.name + "." + bC.name, BC)) : bC.clone && bC.clone(this.name + "." + bC.name, this)
          }
        }
        if (CC.morphTargetManager && (this.morphTargetManager = CC.morphTargetManager), (0, sC.b)(wC.getPhysicsEngine)) {
          const zC = wC.getPhysicsEngine();
          if (ZC && zC)
            if (1 === zC.getPluginVersion()) {
              const ZC = zC.getImpostorForPhysicsObject(CC);
              ZC && (this.physicsImpostor = ZC.clone(this))
            } else 2 === zC.getPluginVersion() && CC.physicsBody && CC.physicsBody.clone(this)
        }
        for (let bC = 0; bC < wC.Ix.length; bC++) {
          const zC = wC.Ix[bC];
          zC.emitter === CC && zC.clone(zC.name, this)
        }
        if (this.skeleton = CC.skeleton, QC && (CC._thinInstanceDataStorage.matrixData ? (this.E_("matrix", new Float32Array(CC._thinInstanceDataStorage.matrixData), 16, !CC._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = CC._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = CC._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = CC._thinInstanceDataStorage.matrixBufferSize, CC._userThinInstanceBuffersStorage)) {
          const zC = CC._userThinInstanceBuffersStorage;
          for (const CC in zC.data) this.E_(CC, new Float32Array(zC.data[CC]), zC.strides[CC], !zC.vertexBuffers?.[CC]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[CC] = zC.sizes[CC]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(CC) {
        let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bC = arguments.length > 4 ? arguments[4] : void 0,
          nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(CC, ZC), this._internalMeshDataInfo = new UC, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new LC, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = OC.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ZC = this.Km(), this._instanceDataStorage = new jC, this._instanceDataStorage.engine = ZC.mg(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new DC), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (CC, zC, ZC) => {
          CC && ZC && (this._uniformBuffer ? this.transferToEffect(zC) : ZC.bindOnlyWorldMatrix(zC))
        };
        let fC = !1;
        if (QC && void 0 === QC._addToSceneRootNodes) {
          const CC = QC;
          zC = CC.parent ?? null, wC = CC.source ?? null, bC = CC.doNotCloneChildren ?? !1, nC = CC.clonePhysicsImpostor ?? !0, fC = CC.cloneThinInstances ?? !1
        } else zC = QC;
        wC && this._copySource(wC, bC, nC, fC), null !== zC && (this.parent = zC), this._instanceDataStorage.hardwareInstancedRendering = this.mg().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = CC => {
          CC.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new PC.d(this._internalMeshDataInfo._onMeshReadyObserverAdded), wC && wC.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = 0 === this.getTotalVertices() || zC && zC.doNotInstantiate && (!0 === zC.doNotInstantiate || zC.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), CC || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        QC.parent = CC || this.parent, QC.position = this.position.clone(), QC.sq = this.sq.clone(), this.rotationQuaternion ? QC.rotationQuaternion = this.rotationQuaternion.clone() : QC.rotation = this.rotation.clone(), ZC && ZC(this, QC);
        for (const wC of this.getChildTransformNodes(!0)) "InstancedMesh" === wC.getClassName() && "Mesh" === QC.getClassName() && wC.LQC === this ? wC.instantiateHierarchy(QC, {
          doNotInstantiate: zC && zC.doNotInstantiate || !1,
          newSourcedMesh: QC
        }, ZC) : wC.instantiateHierarchy(QC, zC, ZC);
        return QC
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(CC) {
        let zC = super.toString(CC);
        if (zC += ", n vertices: " + this.getTotalVertices(), zC += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ZC = 0; ZC < this.animations.length; ZC++) zC += ", animation[0]: " + this.animations[ZC].toString(CC);
        if (CC)
          if (this._geometry) {
            const CC = this.CQC(),
              ZC = this.getVerticesData(hC.k.PositionKind);
            ZC && CC && (zC += ", flat shading: " + (ZC.length / 3 === CC.length ? "YES" : "NO"))
          } else zC += ", flat shading: UNKNOWN";
        return zC
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const CC of this.instances) CC._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const CC = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((zC, ZC) => zC.distanceOrScreenCoverage < ZC.distanceOrScreenCoverage ? CC : zC.distanceOrScreenCoverage > ZC.distanceOrScreenCoverage ? -CC : 0))
      }
      addLODLevel(CC, zC) {
        if (zC && zC._masterMesh) return uC.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const ZC = new aC(CC, zC);
        return this._internalMeshDataInfo._LODLevels.push(ZC), zC && (zC._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(CC) {
        const zC = this._internalMeshDataInfo;
        for (let ZC = 0; ZC < zC._LODLevels.length; ZC++) {
          const QC = zC._LODLevels[ZC];
          if (QC.distanceOrScreenCoverage === CC) return QC.mesh
        }
        return null
      }
      removeLODLevel(CC) {
        const zC = this._internalMeshDataInfo;
        for (let ZC = 0; ZC < zC._LODLevels.length; ZC++) zC._LODLevels[ZC].mesh === CC && (zC._LODLevels.splice(ZC, 1), CC && (CC._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(CC, zC) {
        const ZC = this._internalMeshDataInfo;
        if (!ZC._LODLevels || 0 === ZC._LODLevels.length) return this;
        const QC = zC || this.WE().IQC,
          wC = CC.mode === IC.d.ORTHOGRAPHIC_CAMERA ? CC.minZ : QC.centerWorld.subtract(CC.globalPosition).length();
        let bC = wC,
          nC = 1;
        if (ZC._useLODScreenCoverage) {
          const zC = CC.screenArea;
          let ZC = QC.radiusWorld * CC.minZ / wC;
          ZC = ZC * ZC * Math.PI, bC = ZC / zC, nC = -1
        }
        if (nC * ZC._LODLevels[ZC._LODLevels.length - 1].distanceOrScreenCoverage > nC * bC) return this.onLODLevelSelection && this.onLODLevelSelection(bC, this, this), this;
        for (let fC = 0; fC < ZC._LODLevels.length; fC++) {
          const CC = ZC._LODLevels[fC];
          if (nC * CC.distanceOrScreenCoverage < nC * bC) {
            if (CC.mesh) {
              if (4 === CC.mesh.delayLoadState) return CC.mesh._checkDelayState(), this;
              if (2 === CC.mesh.delayLoadState) return this;
              CC.mesh._preActivate(), CC.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(bC, this, CC.mesh), CC.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(bC, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(CC, zC, ZC, QC) {
        if (!this._geometry) return null;
        let wC = QC ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[CC]?.getFloatData(this.instances.length + 1, ZC || zC && 1 !== this._geometry.meshes.length);
        return wC || (wC = this._geometry.getVerticesData(CC, zC, ZC)), wC
      }
      copyVerticesData(CC, zC) {
        this._geometry && this._geometry.copyVerticesData(CC, zC)
      }
      getVertexBuffer(CC, zC) {
        return this._geometry ? (zC ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[CC]) ?? this._geometry.getVertexBuffer(CC) : null
      }
      isVerticesDataPresent(CC, zC) {
        return this._geometry ? !zC && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[CC] || this._geometry.isVerticesDataPresent(CC) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(CC)
      }
      isVertexBufferUpdatable(CC, zC) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(CC);
        if (!zC) {
          const zC = this._userInstancedBuffersStorage?.vertexBuffers[CC];
          if (zC) return zC.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(CC)
      }
      getVerticesDataKinds(CC) {
        if (!this._geometry) {
          const CC = [];
          if (this._delayInfo)
            for (const zC of this._delayInfo) CC.push(zC);
          return CC
        }
        const zC = this._geometry.getVerticesDataKinds();
        if (!CC && this._userInstancedBuffersStorage)
          for (const ZC in this._userInstancedBuffersStorage.vertexBuffers) - 1 === zC.indexOf(ZC) && zC.push(ZC);
        return zC
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      CQC(CC, zC) {
        return this._geometry ? this._geometry.CQC(CC, zC) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(CC)) return !1;
        if (!this.Zx || 0 === this.Zx.length) return !0;
        if (!CC) return !0;
        const ZC = this.mg(),
          QC = this.Km(),
          wC = zC || ZC.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const bC = this.material || QC.defaultMaterial;
        if (bC)
          if (bC._storeEffectOnSubMeshes)
            for (const fC of this.Zx) {
              const CC = fC.cg();
              if (CC)
                if (CC._storeEffectOnSubMeshes) {
                  if (!CC.isReadyForSubMesh(this, fC, wC)) return !1
                } else if (!CC.isReady(this, wC)) return !1
            } else if (!bC.isReady(this, wC)) return !1;
        const nC = ZC.currentRenderPassId;
        for (const fC of this.lightSources) {
          const CC = fC.getShadowGenerators();
          if (!CC) continue;
          const zC = CC.values();
          for (let QC = zC.next(); !0 !== QC.done; QC = zC.next()) {
            const CC = QC.value;
            if (CC && (!CC.getShadowMap()?.renderList || CC.getShadowMap()?.renderList && -1 !== CC.getShadowMap()?.renderList?.indexOf(this))) {
              const zC = CC.getShadowMap().renderPassIds ?? [ZC.currentRenderPassId];
              for (let QC = 0; QC < zC.length; ++QC) {
                ZC.currentRenderPassId = zC[QC];
                for (const zC of this.Zx)
                  if (!CC.isReady(zC, wC, zC.cg()?.needAlphaBlendingForMesh(this) ?? !1)) return ZC.currentRenderPassId = nC, !1
              }
              ZC.currentRenderPassId = nC
            }
          }
        }
        for (const fC of this._internalMeshDataInfo._LODLevels)
          if (fC.mesh && !fC.mesh.isReady(wC)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      ug() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(CC) {
        this._instanceDataStorage.overridenInstanceCount = CC
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const CC = this._instanceDataStorage.engine.currentRenderPassId;
        let zC = this._instanceDataStorage.renderPasses[CC];
        return zC || (zC = new DC, this._instanceDataStorage.renderPasses[CC] = zC), zC
      }
      _preActivate() {
        const CC = this._internalMeshDataInfo,
          zC = this.Km().getRenderId();
        return CC._preActivateId === zC || (CC._preActivateId = zC, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(CC) {
        const zC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return zC.visibleInstances && (zC.visibleInstances.intermediateDefaultRenderId = CC), this
      }
      _registerInstanceForRenderId(CC, zC) {
        const ZC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ZC.visibleInstances || (ZC.visibleInstances = {
          defaultRenderId: zC,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ZC.visibleInstances[zC] || (void 0 === ZC.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ZC.visibleInstances[ZC.previousRenderId], ZC.previousRenderId = zC, ZC.visibleInstances[zC] = new Array), ZC.visibleInstances[zC].push(CC), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.Xg || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let CC, zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.WE().isLocked) return this;
        CC = "object" === typeof zC ? zC : {
          applySkeleton: zC,
          applyMorph: ZC
        };
        const QC = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(CC, null, hC.k.PositionKind), QC), this
      }
      _createGlobalSubMesh(CC) {
        const zC = this.getTotalVertices();
        if (!zC || !this.CQC()) return null;
        if (this.Zx && this.Zx.length > 0) {
          const ZC = this.CQC();
          if (!ZC) return null;
          const QC = ZC.length;
          let wC = !1;
          if (CC) wC = !0;
          else
            for (const CC of this.Zx) {
              if (CC.indexStart + CC.indexCount > QC) {
                wC = !0;
                break
              }
              if (CC.verticesStart + CC.verticesCount > zC) {
                wC = !0;
                break
              }
            }
          if (!wC) return this.Zx[0]
        }
        return this.releaseSubMeshes(), new mC.d(0, 0, zC, 0, this.getTotalIndices() || (this.isUnIndexed ? zC : 0), this)
      }
      subdivide(CC) {
        if (CC < 1) return;
        const zC = this.getTotalIndices();
        let ZC = zC / CC | 0,
          QC = 0;
        for (; ZC % 3 !== 0;) ZC++;
        this.releaseSubMeshes();
        for (let wC = 0; wC < CC && !(QC >= zC); wC++) mC.d.CreateFromIndices(0, QC, QC + ZC >= zC ? zC - QC : ZC, this, void 0, !1), QC += ZC;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(CC, zC, ZC, QC);
        else {
          const QC = new KC.e;
          QC.set(zC, CC);
          const wC = this.Km();
          new YC.c(YC.c.RandomId(), wC, QC, ZC, this)
        }
        return this
      }
      removeVerticesData(CC) {
        this._geometry && this._geometry.removeVerticesData(CC)
      }
      markVerticesDataAsUpdatable(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZC = this.getVertexBuffer(CC);
        ZC && ZC.isUpdatable() !== zC && this.setVerticesData(CC, this.getVerticesData(CC), zC)
      }
      setVerticesBuffer(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = YC.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(CC, ZC, zC), this
      }
      updateVerticesData(CC, zC, ZC, QC) {
        return this._geometry ? (QC ? (this.makeGeometryUnique(), this.updateVerticesData(CC, zC, ZC, !1)) : this._geometry.updateVerticesData(CC, zC, ZC), this) : this
      }
      updateMeshPositions(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZC = this.getVerticesData(hC.k.PositionKind);
        if (!ZC) return this;
        if (CC(ZC), this.updateVerticesData(hC.k.PositionKind, ZC, !1, !1), zC) {
          const CC = this.CQC(),
            zC = this.getVerticesData(hC.k.NormalKind);
          if (!zC) return this;
          KC.e.ComputeNormals(ZC, CC, zC), this.updateVerticesData(hC.k.NormalKind, zC, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const CC = this._geometry,
          zC = this._geometry.copy(YC.c.RandomId());
        return CC.releaseForMesh(this, !0), zC.applyToMesh(this), this
      }
      setIndexBuffer(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          wC = this._geometry;
        wC || (wC = new YC.c(YC.c.RandomId(), this.Km(), void 0, void 0, this)), wC.setIndexBuffer(CC, zC, ZC, QC)
      }
      setIndices(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(CC, zC, ZC, QC);
        else {
          const QC = new KC.e;
          QC.indices = CC;
          const wC = this.Km();
          new YC.c(YC.c.RandomId(), wC, QC, ZC, this, zC)
        }
        return this
      }
      updateIndices(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(CC, zC, ZC), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(CC, zC, ZC) {
        let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const wC = this.Km().mg();
        let bC;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ZC) === HC.d.WireFrameFillMode) bC = CC._getLinesIndexBuffer(this.CQC(), wC);
          else bC = null;
        else switch (this._getRenderingFillMode(ZC)) {
          case HC.d.PointFillMode:
            bC = null;
            break;
          case HC.d.WireFrameFillMode:
            bC = CC._getLinesIndexBuffer(this.CQC(), wC);
            break;
          default:
          case HC.d.TriangleFillMode:
            bC = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(zC, bC, QC)
      }
      _bindDirect(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(CC), ZC && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const CC = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const zC in CC) this._userInstancedBuffersStorage.vertexBuffers[zC] = CC[zC]
          }
          this._geometry._bind(CC, zC, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(CC, zC);
        return this
      }
      _draw(CC, zC, ZC) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const QC = this.Km().mg(),
          wC = QC._currentMaterialContext,
          bC = wC && wC.useVertexPulling;
        return this._unIndexed && zC !== HC.d.WireFrameFillMode || zC == HC.d.PointFillMode ? QC.drawArraysType(zC, CC.verticesStart, CC.verticesCount, this.forcedInstanceCount || ZC) : zC == HC.d.WireFrameFillMode ? QC.drawElementsType(zC, 0, CC._linesIndexCount, this.forcedInstanceCount || ZC) : bC ? QC.drawArraysType(zC, CC.indexStart, CC.indexCount, this.forcedInstanceCount || ZC) : QC.drawElementsType(zC, CC.indexStart, CC.indexCount, this.forcedInstanceCount || ZC), this
      }
      registerBeforeRender(CC) {
        return this.onBeforeRenderObservable.add(CC), this
      }
      unregisterBeforeRender(CC) {
        return this.onBeforeRenderObservable.removeCallback(CC), this
      }
      registerAfterRender(CC) {
        return this.onAfterRenderObservable.add(CC), this
      }
      unregisterAfterRender(CC) {
        return this.onAfterRenderObservable.removeCallback(CC), this
      }
      _getInstancesRenderList(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (zC) return ZC.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[CC] = !1, ZC.batchCacheReplacementModeInFrozenMode.renderSelf[CC] = !0, ZC.batchCacheReplacementModeInFrozenMode;
          if (ZC.previousBatch) return ZC.previousBatch
        }
        const QC = this.Km(),
          wC = QC._isInIntermediateRendering(),
          bC = wC ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          nC = ZC.batchCache;
        if (nC.mustReturn = !1, nC.renderSelf[CC] = zC || !bC && this.isEnabled() && this.isVisible, nC.visibleInstances[CC] = null, ZC.visibleInstances && !zC) {
          const zC = ZC.visibleInstances,
            bC = QC.getRenderId(),
            fC = wC ? zC.intermediateDefaultRenderId : zC.defaultRenderId;
          nC.visibleInstances[CC] = zC[bC], !nC.visibleInstances[CC] && fC && (nC.visibleInstances[CC] = zC[fC])
        }
        return nC.hardwareInstancedRendering[CC] = !zC && this._instanceDataStorage.hardwareInstancedRendering && null !== nC.visibleInstances[CC] && void 0 !== nC.visibleInstances[CC], ZC.previousBatch = nC, nC
      }
      _updateInstancedBuffers(CC, zC, ZC, QC, wC, bC) {
        const nC = zC.visibleInstances[CC._id],
          fC = nC ? nC.length : 0,
          oC = zC.parent,
          qC = this._instanceDataStorage;
        let FC = oC.instancesBuffer,
          WC = oC.instancesPreviousBuffer,
          NC = 0,
          MC = 0;
        const gC = zC.renderSelf[CC._id],
          SC = this._scene.floatingOriginOffset,
          pC = !FC || ZC !== oC.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !oC.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || qC.isFrozen && !pC) MC = (gC ? 1 : 0) + fC;
        else {
          const zC = this.getWorldMatrix();
          if (gC) {
            this._scene.needsPreviousWorldMatrices && (qC.masterMeshPreviousWorldMatrix ? (qC.masterMeshPreviousWorldMatrix.copyToArray(oC.instancesPreviousData, NC), qC.masterMeshPreviousWorldMatrix.Av(zC)) : (qC.masterMeshPreviousWorldMatrix = zC.clone(), qC.masterMeshPreviousWorldMatrix.copyToArray(oC.instancesPreviousData, NC))), zC.copyToArray(oC.instancesData, NC);
            const CC = zC.VZC();
            oC.instancesData[NC + 12] = CC[12] - SC.x, oC.instancesData[NC + 13] = CC[13] - SC.y, oC.instancesData[NC + 14] = CC[14] - SC.z, NC += 16, MC++
          }
          if (nC) {
            if (OC.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && CC.cg()?.needAlphaBlendingForMesh(CC.getRenderingMesh())) {
              const CC = this._scene.activeCamera.globalPosition;
              for (let zC = 0; zC < nC.length; zC++) {
                const ZC = nC[zC];
                ZC._distanceToCamera = iC.r.Distance(ZC.WE().IQC.centerWorld, CC)
              }
              nC.sort(((CC, zC) => CC._distanceToCamera > zC._distanceToCamera ? -1 : CC._distanceToCamera < zC._distanceToCamera ? 1 : 0))
            }
            for (let CC = 0; CC < nC.length; CC++) {
              const zC = nC[CC],
                ZC = zC.getWorldMatrix();
              ZC.copyToArray(oC.instancesData, NC), this._scene.needsPreviousWorldMatrices && (zC._previousWorldMatrix ? (zC._previousWorldMatrix.copyToArray(oC.instancesPreviousData, NC), zC._previousWorldMatrix.Av(ZC)) : (zC._previousWorldMatrix = ZC.clone(), zC._previousWorldMatrix.copyToArray(oC.instancesPreviousData, NC)));
              const QC = ZC.VZC();
              oC.instancesData[NC + 12] = QC[12] - SC.x, oC.instancesData[NC + 13] = QC[13] - SC.y, oC.instancesData[NC + 14] = QC[14] - SC.z, NC += 16, MC++
            }
          }
        }
        if (pC) {
          let CC;
          if (FC && FC.dispose(), WC && WC.dispose(), FC = new hC.c(QC, oC.instancesData, !0, 16, !1, !0), oC.instancesBuffer = FC, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.mg().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) CC = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const zC = this._instanceDataStorage.engine.currentRenderPassId;
            CC = this._userInstancedBuffersStorage.renderPasses[zC], CC || (this._userInstancedBuffersStorage.renderPasses[zC] = CC = {})
          }
          CC.world0 = FC.createVertexBuffer("world0", 0, 4), CC.world1 = FC.createVertexBuffer("world1", 4, 4), CC.world2 = FC.createVertexBuffer("world2", 8, 4), CC.world3 = FC.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (WC = new hC.c(QC, oC.instancesPreviousData, !0, 16, !1, !0), oC.instancesPreviousBuffer = WC, CC.previousWorld0 = WC.createVertexBuffer("previousWorld0", 0, 4), CC.previousWorld1 = WC.createVertexBuffer("previousWorld1", 4, 4), CC.previousWorld2 = WC.createVertexBuffer("previousWorld2", 8, 4), CC.previousWorld3 = WC.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (FC.updateDirectly(oC.instancesData, 0, MC), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || WC.updateDirectly(oC.instancesPreviousData, 0, MC));
        this._processInstancedBuffers(nC, gC), bC && void 0 !== wC && (this.Km()._activeIndices.addCount(CC.indexCount * MC, !1), QC._currentDrawContext && (QC._currentDrawContext.useInstancing = !0), this._bind(CC, bC, wC), this._draw(CC, wC, MC)), !this._scene.needsPreviousWorldMatrices || pC || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || WC.updateDirectly(oC.instancesData, 0, MC)
      }
      _renderWithInstances(CC, zC, ZC, QC, wC) {
        const bC = ZC.visibleInstances[CC._id],
          nC = bC ? bC.length : 0,
          fC = ZC.parent,
          oC = fC.instancesBufferSize,
          qC = 16 * (nC + 1) * 4;
        for (; fC.instancesBufferSize < qC;) fC.instancesBufferSize *= 2;
        return fC.instancesData && oC == fC.instancesBufferSize || (fC.instancesData = new Float32Array(fC.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !fC.instancesPreviousData || oC != fC.instancesBufferSize) && (fC.instancesPreviousData = new Float32Array(fC.instancesBufferSize / 4)), this._updateInstancedBuffers(CC, ZC, oC, wC, zC, QC), wC.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(CC, zC, ZC, QC) {
        const wC = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Km()._activeIndices.addCount(CC.indexCount * wC, !1), QC._currentDrawContext && (QC._currentDrawContext.useInstancing = !0), this._bind(CC, ZC, zC), this._draw(CC, zC, wC), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, wC) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), QC.unbindInstanceAttributes()
      }
      _processInstancedBuffers(CC, zC) {}
      _processRendering(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = this.Km(),
          qC = oC.mg();
        if (QC = this._getRenderingFillMode(QC), bC && zC.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(zC, QC, ZC, qC), this;
        if (bC) this._renderWithInstances(zC, QC, wC, ZC, qC);
        else {
          qC._currentDrawContext && (qC._currentDrawContext.useInstancing = !1);
          let ZC = 0;
          wC.renderSelf[zC._id] && (nC && nC(!1, CC.getWorldMatrix(), fC), ZC++, this._draw(zC, QC, this._instanceDataStorage.overridenInstanceCount));
          const bC = wC.visibleInstances[zC._id];
          if (bC) {
            const CC = bC.length;
            ZC += CC;
            for (let ZC = 0; ZC < CC; ZC++) {
              const CC = bC[ZC].getWorldMatrix();
              nC && nC(!0, CC, fC), this._draw(zC, QC)
            }
          }
          oC._activeIndices.addCount(zC.indexCount * ZC, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        CC?.instancesBuffer && (zC && CC.instancesBuffer.dispose(), CC.instancesBuffer = null), CC?.instancesPreviousBuffer && (zC && CC.instancesPreviousBuffer.dispose(), CC.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const zC in this._instanceDataStorage.renderPasses) {
          const ZC = this._instanceDataStorage.renderPasses[zC];
          this._disposeInstanceDataStorageRenderPass(ZC, CC)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, CC), this._userInstancedBuffersStorage) {
          for (const zC in this._userInstancedBuffersStorage.vertexBuffers) {
            const ZC = this._userInstancedBuffersStorage.vertexBuffers[zC];
            ZC && (CC && ZC.dispose(), this._userInstancedBuffersStorage.vertexBuffers[zC] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(CC)
      }
      _releaseRenderPassId(CC) {
        const zC = this._instanceDataStorage.renderPasses[CC];
        if (zC && (this._disposeInstanceDataStorageRenderPass(zC, !0), delete this._instanceDataStorage.renderPasses[CC]), this._userInstancedBuffersStorage?.renderPasses) {
          const zC = this._userInstancedBuffersStorage.renderPasses[CC];
          if (zC)
            for (const CC in zC) zC[CC]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[CC]
        }
        const ZC = this._userInstancedBuffersStorage?.interleavedBuffers;
        ZC?.[CC] && (ZC[CC].buffer.dispose(), delete ZC[CC])
      }
      _freeze() {
        if (this.Zx) {
          for (let CC = 0; CC < this.Zx.length; CC++) this._getInstancesRenderList(CC);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const CC in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[CC].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const bC = this._scene.mg(),
          nC = bC.currentRenderPassId;
        if (void 0 !== CC && (bC.currentRenderPassId = CC), QC)(!wC || wC && QC.isInFrustum(this._scene._frustumPlanes)) && this.render(QC, !!zC, ZC);
        else
          for (let fC = 0; fC < this.Zx.length; fC++) {
            const CC = this.Zx[fC];
            (!wC || wC && CC.isInFrustum(this._scene._frustumPlanes)) && this.render(CC, !!zC, ZC)
          }
        return void 0 !== CC && (bC.currentRenderPassId = nC), this
      }
      directRender() {
        if (!this.Zx) return this;
        for (const CC of this.Zx) this.render(CC, !1);
        return this
      }
      render(CC, zC, ZC) {
        const QC = this.Km(),
          wC = QC.mg();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const bC = QC.activeCameras?.length ?? 0,
          nC = bC > 1 && QC.activeCamera === QC.activeCameras[0] || bC <= 1,
          fC = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== wC.currentRenderPassId;
        if (nC && this._checkOcclusionQuery(fC) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const oC = this._getInstancesRenderList(CC._id, !!ZC);
        if (oC.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let qC = 0,
          FC = null;
        this.ignoreCameraMaxZ && QC.activeCamera && !QC._isInIntermediateRendering() && (qC = QC.activeCamera.maxZ, FC = QC.activeCamera, QC.activeCamera.maxZ = 0, QC.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const WC = CC.getRenderingMesh(),
          NC = oC.hardwareInstancedRendering[CC._id] || WC.hasThinInstances || !!this._userInstancedBuffersStorage && !CC.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          MC = this._instanceDataStorage,
          gC = CC.cg();
        if (!gC) return FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), this;
        if (MC.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === gC) {
          if (gC._storeEffectOnSubMeshes && !CC._drawWrapper?._wasPreviouslyReady || !gC._storeEffectOnSubMeshes && !gC._getDrawWrapper()._wasPreviouslyReady) return FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), this
        } else {
          if (gC._storeEffectOnSubMeshes) {
            if (!gC.isReadyForSubMesh(this, CC, NC)) return FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), this
          } else if (!gC.isReady(this, NC)) return FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = gC
        }
        if (zC) {
          const CC = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === CC.alphaModes.length) wC.setAlphaMode(CC.alphaMode);
          else
            for (let zC = 0; zC < CC.alphaModes.length; zC++) {
              const ZC = CC.alphaModes[zC];
              wC.setAlphaMode(void 0 !== ZC ? ZC : 2, !1, zC)
            }
        }
        let SC;
        SC = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? CC._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const pC = SC?.effect ?? null;
        for (let IC = 0, iC = QC._beforeRenderingMeshStage; IC < iC.length; IC++) {
          iC[IC].action(this, CC, oC, pC)
        }
        if (!SC || !pC) return FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), this;
        const PC = ZC || this;
        let GC;
        if (!MC.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const CC = PC._getWorldMatrixDeterminant();
          GC = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), CC < 0 && (GC = GC === HC.d.ClockWiseSideOrientation ? HC.d.CounterClockWiseSideOrientation : HC.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = GC
        }
        const RC = this._internalMeshDataInfo._effectiveMaterial._preBind(SC, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && wC.setDepthWrite(!0);
        const AC = this._internalMeshDataInfo._effectiveMaterial,
          xC = AC.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), NC || this._bind(CC, pC, xC, !1);
        const JC = PC.getWorldMatrix();
        AC._storeEffectOnSubMeshes ? AC.bindForSubMesh(JC, this, CC) : AC.bind(JC, this);
        try {
          EC.e._BindAttachmentsForEffect(wC, pC) && (!AC.backFaceCulling && AC.separateCullingPass && (wC.setState(!0, AC.zOffset, !1, !RC, AC.cullBackFaces, AC.stencil, AC.zOffsetUnits), this._processRendering(this, CC, pC, xC, oC, NC, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), wC.setState(!0, AC.zOffset, !1, RC, AC.cullBackFaces, AC.stencil, AC.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(CC)), this._processRendering(this, CC, pC, xC, oC, NC, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          EC.e._RestoreAttachments(wC)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let IC = 0, iC = QC._afterRenderingMeshStage; IC < iC.length; IC++) {
          iC[IC].action(this, CC, oC, pC)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), FC && (FC.maxZ = qC, QC.updateTransformMatrix(!0)), 2 !== QC.performancePriority || MC.isFrozen || this._freeze(), this
      }
      _renderRunFollower(CC, zC) {
        const ZC = this._scene,
          QC = ZC._engine;
        if (QC.isWebGPU || CC._mesh !== this || 0 !== this.instances.length || this.render !== OC.prototype.render) return !1;
        const wC = CC.cg();
        if (!wC || wC !== ZC._cachedMaterial || void 0 === wC._canBindRunFollower) return !1;
        const bC = CC._drawWrapper,
          nC = bC?.effect;
        if (!nC || nC !== ZC._cachedEffect || this.visibility !== ZC._cachedVisibility || bC._forceRebindOnNextCall) return !1;
        const fC = this.hasThinInstances;
        if (!fC && this._userInstancedBuffersStorage) return !1;
        if (!bC._wasPreviouslyReady || bC._wasPreviouslyUsingInstances !== fC) return !1;
        const oC = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ZC._isInIntermediateRendering() || 0 !== ZC._beforeRenderingMeshStage.length || 0 !== ZC._afterRenderingMeshStage.length || oC._onBeforeRenderObservable?.hasObservers() || oC._onBeforeBindObservable?.hasObservers() || oC._onAfterRenderObservable?.hasObservers()) return !1;
        const qC = this.occlusionType;
        if (void 0 !== qC && qC !== dC.b.OCCLUSION_TYPE_NONE || !wC._canBindRunFollower(ZC, QC, this, CC, nC)) return !1;
        const FC = this._internalAbstractMeshDataInfo,
          WC = FC._isActiveIntermediate;
        WC ? FC._isActiveIntermediate = !1 : FC._isActive = !1;
        const NC = ZC.activeCameras?.length ?? 0;
        (NC > 1 && ZC.activeCamera === ZC.activeCameras[0] || NC <= 1) && this._checkOcclusionQuery(!1);
        const MC = this._getInstancesRenderList(CC._id);
        if (MC.mustReturn) return !0;
        if (!fC && !MC.renderSelf[CC._id]) return WC ? FC._isActiveIntermediate = !0 : FC._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (oC._effectiveMaterial = wC, zC)
          if (1 === wC.alphaModes.length) QC.setAlphaMode(wC.alphaMode);
          else
            for (let SC = 0; SC < wC.alphaModes.length; SC++) {
              const CC = wC.alphaModes[SC];
              QC.setAlphaMode(void 0 !== CC ? CC : 2, !1, SC)
            }
        if (wC.backFaceCulling || null !== wC.sideOrientation || wC._twoSidedLighting) {
          const CC = this._getWorldMatrixDeterminant();
          let zC = wC._getEffectiveOrientation(this);
          CC < 0 && (zC = zC === HC.d.ClockWiseSideOrientation ? HC.d.CounterClockWiseSideOrientation : HC.d.ClockWiseSideOrientation), oC._effectiveSideOrientation = zC
        }
        wC._preBind(bC, oC._effectiveSideOrientation), wC.forceDepthWrite && QC.setDepthWrite(!0);
        const gC = wC.fillMode;
        return fC || this._bind(CC, nC, gC, !1), wC._bindRunFollower(this.getWorldMatrix(), this, CC, nC), this._processRendering(this, CC, nC, gC, MC, fC, this._onBeforeDraw, wC), wC.unbind(), 2 === ZC.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(hC.k.MatricesWeightsKind) && (this.isVerticesDataPresent(hC.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const CC = this.getVerticesData(hC.k.MatricesWeightsKind),
          zC = CC.length;
        for (let ZC = 0; ZC < zC; ZC += 4) {
          const zC = CC[ZC] + CC[ZC + 1] + CC[ZC + 2] + CC[ZC + 3];
          if (0 === zC) CC[ZC] = 1;
          else {
            const QC = 1 / zC;
            CC[ZC] *= QC, CC[ZC + 1] *= QC, CC[ZC + 2] *= QC, CC[ZC + 3] *= QC
          }
        }
        this.setVerticesData(hC.k.MatricesWeightsKind, CC)
      }
      _normalizeSkinWeightsAndExtra() {
        const CC = this.getVerticesData(hC.k.MatricesWeightsExtraKind),
          zC = this.getVerticesData(hC.k.MatricesWeightsKind),
          ZC = zC.length;
        for (let QC = 0; QC < ZC; QC += 4) {
          let ZC = zC[QC] + zC[QC + 1] + zC[QC + 2] + zC[QC + 3];
          if (ZC += CC[QC] + CC[QC + 1] + CC[QC + 2] + CC[QC + 3], 0 === ZC) zC[QC] = 1;
          else {
            const wC = 1 / ZC;
            zC[QC] *= wC, zC[QC + 1] *= wC, zC[QC + 2] *= wC, zC[QC + 3] *= wC, CC[QC] *= wC, CC[QC + 1] *= wC, CC[QC + 2] *= wC, CC[QC + 3] *= wC
          }
        }
        this.setVerticesData(hC.k.MatricesWeightsKind, zC), this.setVerticesData(hC.k.MatricesWeightsKind, CC)
      }
      validateSkinning() {
        const CC = this.getVerticesData(hC.k.MatricesWeightsExtraKind),
          zC = this.getVerticesData(hC.k.MatricesWeightsKind);
        if (null === zC || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          Cg: "not skinned"
        };
        const ZC = zC.length;
        let QC = 0,
          wC = 0,
          bC = 0,
          nC = 0;
        const fC = null === CC ? 4 : 8,
          oC = [];
        for (let MC = 0; MC <= fC; MC++) oC[MC] = 0;
        for (let MC = 0; MC < ZC; MC += 4) {
          let ZC = zC[MC],
            qC = ZC,
            FC = 0 === qC ? 0 : 1;
          for (let wC = 1; wC < fC; wC++) {
            const bC = wC < 4 ? zC[MC + wC] : CC[MC + wC - 4];
            bC > ZC && QC++, 0 !== bC && FC++, qC += bC, ZC = bC
          }
          if (oC[FC]++, FC > bC && (bC = FC), 0 === qC) wC++;
          else {
            const ZC = 1 / qC;
            let QC = 0;
            for (let wC = 0; wC < fC; wC++) QC += wC < 4 ? Math.abs(zC[MC + wC] - zC[MC + wC] * ZC) : Math.abs(CC[MC + wC - 4] - CC[MC + wC - 4] * ZC);
            QC > .001 && nC++
          }
        }
        const qC = this.skeleton.bones.length,
          FC = this.getVerticesData(hC.k.MatricesIndicesKind),
          WC = this.getVerticesData(hC.k.MatricesIndicesExtraKind);
        let NC = 0;
        for (let MC = 0; MC < ZC; MC += 4)
          for (let CC = 0; CC < fC; CC++) {
            const zC = CC < 4 ? FC[MC + CC] : WC[MC + CC - 4];
            (zC >= qC || zC < 0) && NC++
          }
        return {
          skinned: !0,
          valid: 0 === wC && 0 === nC && 0 === NC,
          Cg: "Number of Weights = " + ZC / 4 + "\nMaximum influences = " + bC + "\nMissing Weights = " + wC + "\nNot Sorted = " + QC + "\nNot Normalized = " + nC + "\nWeightCounts = [" + oC + "]\nNumber of bones = " + qC + "\nBad Bone Indices = " + NC
        }
      }
      _checkDelayState() {
        const CC = this.Km();
        return this._geometry ? this._geometry.load(CC) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(CC)), this
      }
      _queueLoad(CC) {
        CC.addPendingData(this);
        const zC = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ZC = await CC._loadDelayedFileAsync(this.delayLoadingFile, zC, !0);
            ZC instanceof ArrayBuffer ? this._delayLoadingFunction(ZC, this) : this._delayLoadingFunction(JSON.parse(ZC), this);
            for (const CC of this.instances) CC.refreshBoundingInfo(), CC._syncSubMeshes();
            this.delayLoadState = 1, CC.removePendingData(this)
          } catch (ZC) {
            CC.removePendingData(this), CC.GJ || uC.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZC}`)
          }
        })(), this
      }
      isInFrustum(CC) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(CC) && (this._checkDelayState(), !0))
      }
      setMaterialById(CC) {
        const zC = this.Km().materials;
        let ZC;
        for (ZC = zC.length - 1; ZC > -1; ZC--)
          if (zC[ZC].id === CC) return this.material = zC[ZC], this;
        const QC = this.Km().multiMaterials;
        for (ZC = QC.length - 1; ZC > -1; ZC--)
          if (QC[ZC].id === CC) return this.material = QC[ZC], this;
        return this
      }
      getAnimatables() {
        const CC = [];
        return this.material && CC.push(this.material), this.skeleton && CC.push(this.skeleton), CC
      }
      bakeTransformIntoVertices(CC) {
        if (!this.isVerticesDataPresent(hC.k.PositionKind)) return this;
        const zC = this.Zx.splice(0);
        this._resetPointsArrayCache();
        let ZC = this.getVerticesData(hC.k.PositionKind);
        const QC = iC.r.Zero();
        let wC;
        for (wC = 0; wC < ZC.length; wC += 3) iC.r.TransformCoordinatesFromFloatsToRef(ZC[wC], ZC[wC + 1], ZC[wC + 2], CC, QC).toArray(ZC, wC);
        if (this.setVerticesData(hC.k.PositionKind, ZC, this.getVertexBuffer(hC.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(hC.k.NormalKind)) {
          for (ZC = this.getVerticesData(hC.k.NormalKind), wC = 0; wC < ZC.length; wC += 3) iC.r.TransformNormalFromFloatsToRef(ZC[wC], ZC[wC + 1], ZC[wC + 2], CC, QC).normalize().toArray(ZC, wC);
          this.setVerticesData(hC.k.NormalKind, ZC, this.getVertexBuffer(hC.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(hC.k.TangentKind)) {
          for (ZC = this.getVerticesData(hC.k.TangentKind), wC = 0; wC < ZC.length; wC += 4) iC.r.TransformNormalFromFloatsToRef(ZC[wC], ZC[wC + 1], ZC[wC + 2], CC, QC).normalize().toArray(ZC, wC);
          this.setVerticesData(hC.k.TangentKind, ZC, this.getVertexBuffer(hC.k.TangentKind).isUpdatable())
        }
        return CC.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.Zx = zC, this
      }
      bakeCurrentTransformIntoVertices() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(CC), this
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (zC && void 0 === zC._addToSceneRootNodes) {
          const ZC = zC;
          return BC.source = this, BC.doNotCloneChildren = ZC.doNotCloneChildren, BC.clonePhysicsImpostor = ZC.clonePhysicsImpostor, BC.cloneThinInstances = ZC.cloneThinInstances, new OC(CC, this.Km(), BC)
        }
        return new OC(CC, this.Km(), zC, this, ZC, QC)
      }
      dispose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ZC = this._internalMeshDataInfo;
        if (ZC._onBeforeDrawObservable && ZC._onBeforeDrawObservable.clear(), ZC._onBeforeBindObservable && ZC._onBeforeBindObservable.clear(), ZC._onBeforeRenderObservable && ZC._onBeforeRenderObservable.clear(), ZC._onAfterRenderObservable && ZC._onAfterRenderObservable.clear(), ZC._onBetweenPassObservable && ZC._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ZC.meshMap)
            for (const CC in ZC.meshMap) {
              const zC = ZC.meshMap[CC];
              zC && (zC._internalMeshDataInfo._source = null, ZC.meshMap[CC] = void 0)
            }
          ZC._source && ZC._source._internalMeshDataInfo.meshMap && (ZC._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const CC = this.Km().meshes;
          for (const zC of CC) {
            const CC = zC;
            CC._internalMeshDataInfo && CC._internalMeshDataInfo._source && CC._internalMeshDataInfo._source === this && (CC._internalMeshDataInfo._source = null)
          }
        }
        ZC._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(CC, zC)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(CC, zC, ZC, QC, wC, bC) {
        let nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fC = arguments.length > 7 ? arguments[7] : void 0;
        const oC = this.Km();
        return (0, RC.m)(CC, (CC => {
          const fC = CC.width,
            oC = CC.height,
            qC = this.mg().createCanvas(fC, oC).getContext("2d");
          qC.drawImage(CC, 0, 0);
          const FC = qC.getImageData(0, 0, fC, oC).data;
          this.applyDisplacementMapFromBuffer(FC, fC, oC, zC, ZC, wC, bC, nC), QC && QC(this)
        }), fC || (() => {}), oC.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(hC.k.PositionKind) || !this.isVerticesDataPresent(hC.k.NormalKind) || !this.isVerticesDataPresent(hC.k.UVKind)) return uC.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const oC = this.getVerticesData(hC.k.PositionKind, !0, !0),
          qC = this.getVerticesData(hC.k.NormalKind),
          FC = this.getVerticesData(hC.k.UVKind);
        let WC = iC.r.Zero();
        const NC = iC.r.Zero(),
          MC = iC.n.Zero();
        bC = bC || iC.n.Zero(), nC = nC || new iC.n(1, 1);
        for (let gC = 0; gC < oC.length; gC += 3) {
          iC.r.FromArrayToRef(oC, gC, WC), iC.r.FromArrayToRef(qC, gC, NC), iC.n.FromArrayToRef(FC, gC / 3 * 2, MC);
          const fC = 4 * ((Math.abs(MC.x * nC.x + bC.x % 1) * (zC - 1) % zC | 0) + (Math.abs(MC.y * nC.y + bC.y % 1) * (ZC - 1) % ZC | 0) * zC),
            SC = .3 * (CC[fC] / 255) + .59 * (CC[fC + 1] / 255) + .11 * (CC[fC + 2] / 255);
          NC.normalize(), NC.scaleInPlace(QC + (wC - QC) * SC), WC = WC.add(NC), WC.toArray(oC, gC)
        }
        return KC.e.ComputeNormals(oC, this.CQC(), qC), fC ? (this.setVerticesData(hC.k.PositionKind, oC), this.setVerticesData(hC.k.NormalKind, qC), this.setVerticesData(hC.k.UVKind, FC)) : (this.updateVerticesData(hC.k.PositionKind, oC), this.updateVerticesData(hC.k.NormalKind, qC)), this
      }
      _getFlattenedNormals(CC, zC) {
        const ZC = new Float32Array(3 * CC.length);
        let QC = 0;
        const wC = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let bC = 0; bC < CC.length; bC += 3) {
          const nC = iC.r.FromArray(zC, 3 * CC[bC]),
            fC = iC.r.FromArray(zC, 3 * CC[bC + 1]),
            oC = iC.r.FromArray(zC, 3 * CC[bC + 2]),
            qC = nC.subtract(fC),
            FC = oC.subtract(fC),
            WC = iC.r.Normalize(iC.r.Cross(qC, FC));
          wC && WC.scaleInPlace(-1);
          for (let CC = 0; CC < 3; CC++) ZC[QC++] = WC.x, ZC[QC++] = WC.y, ZC[QC++] = WC.z
        }
        return ZC
      }
      _convertToUnIndexedMesh() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = this.getVerticesDataKinds().filter((CC => !this.getVertexBuffer(CC)?.getIsInstanced())),
          ZC = this.CQC(!1, !0),
          QC = {},
          wC = (CC, zC) => {
            const QC = new Float32Array(ZC.length * zC);
            let wC = 0;
            for (let bC = 0; bC < ZC.length; bC++)
              for (let nC = 0; nC < zC; nC++) QC[wC++] = CC[ZC[bC] * zC + nC];
            return QC
          },
          bC = this.WE(),
          nC = this.geometry ? this.Zx.slice(0) : [];
        for (const fC of zC) QC[fC] = this.getVerticesData(fC);
        for (const fC of zC) {
          const zC = this.getVertexBuffer(fC),
            bC = zC.getSize();
          if (CC && fC === hC.k.NormalKind) {
            const CC = this._getFlattenedNormals(ZC, QC[hC.k.PositionKind]);
            this.setVerticesData(hC.k.NormalKind, CC, zC.isUpdatable(), bC)
          } else this.setVerticesData(fC, wC(QC[fC], bC), zC.isUpdatable(), bC)
        }
        if (this.morphTargetManager) {
          for (let zC = 0; zC < this.morphTargetManager.numTargets; zC++) {
            const QC = this.morphTargetManager.getTarget(zC),
              bC = QC.getPositions();
            QC.YnC(wC(bC, 3));
            const nC = QC.getNormals();
            nC && QC.setNormals(CC ? this._getFlattenedNormals(ZC, bC) : wC(nC, 3));
            const fC = QC.getTangents();
            fC && QC.setTangents(wC(fC, 3));
            const oC = QC.getUVs();
            oC && QC.setUVs(wC(oC, 2));
            const qC = QC.getColors();
            qC && QC.setColors(wC(qC, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let fC = 0; fC < ZC.length; fC++) ZC[fC] = fC;
        this.setIndices(ZC), this._unIndexed = !0, this.releaseSubMeshes();
        for (const fC of nC) {
          const CC = fC.WE();
          mC.d.AddToMesh(fC.materialIndex, fC.indexStart, fC.indexCount, fC.indexStart, fC.indexCount, this).setBoundingInfo(CC)
        }
        return this.setBoundingInfo(bC), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = KC.e.ExtractFromMesh(this);
        let ZC;
        if (CC && this.isVerticesDataPresent(hC.k.NormalKind) && zC.normals) {
          for (ZC = 0; ZC < zC.normals.length; ZC++) zC.normals[ZC] *= -1;
          this.setVerticesData(hC.k.NormalKind, zC.normals, this.isVertexBufferUpdatable(hC.k.NormalKind))
        }
        if (zC.indices) {
          let CC;
          for (ZC = 0; ZC < zC.indices.length; ZC += 3) CC = zC.indices[ZC + 1], zC.indices[ZC + 1] = zC.indices[ZC + 2], zC.indices[ZC + 2] = CC;
          this.setIndices(zC.indices, null, this.isVertexBufferUpdatable(hC.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const zC = KC.e.ExtractFromMesh(this),
          ZC = zC.indices && !Array.isArray(zC.indices) && Array.from ? Array.from(zC.indices) : zC.indices,
          QC = zC.positions && !Array.isArray(zC.positions) && Array.from ? Array.from(zC.positions) : zC.positions,
          wC = zC.uvs && !Array.isArray(zC.uvs) && Array.from ? Array.from(zC.uvs) : zC.uvs,
          bC = zC.normals && !Array.isArray(zC.normals) && Array.from ? Array.from(zC.normals) : zC.normals;
        if (ZC && QC) {
          zC.indices = ZC, zC.positions = QC, wC && (zC.uvs = wC), bC && (zC.normals = bC);
          const nC = CC + 1,
            fC = [];
          for (let CC = 0; CC < nC + 1; CC++) fC[CC] = [];
          let oC, qC;
          const FC = new iC.r(0, 0, 0),
            WC = new iC.r(0, 0, 0),
            NC = new iC.n(0, 0),
            MC = [],
            gC = [],
            SC = [];
          let pC, PC, GC, RC = QC.length;
          wC && (PC = wC.length), bC && (GC = bC.length);
          for (let CC = 0; CC < ZC.length; CC += 3) {
            gC[0] = ZC[CC], gC[1] = ZC[CC + 1], gC[2] = ZC[CC + 2];
            for (let CC = 0; CC < 3; CC++)
              if (oC = gC[CC], qC = gC[(CC + 1) % 3], void 0 === SC[oC] && void 0 === SC[qC] ? (SC[oC] = [], SC[qC] = []) : (void 0 === SC[oC] && (SC[oC] = []), void 0 === SC[qC] && (SC[qC] = [])), void 0 === SC[oC][qC] && void 0 === SC[qC][oC]) {
                SC[oC][qC] = [], FC.x = (QC[3 * qC] - QC[3 * oC]) / nC, FC.y = (QC[3 * qC + 1] - QC[3 * oC + 1]) / nC, FC.z = (QC[3 * qC + 2] - QC[3 * oC + 2]) / nC, bC && (WC.x = (bC[3 * qC] - bC[3 * oC]) / nC, WC.y = (bC[3 * qC + 1] - bC[3 * oC + 1]) / nC, WC.z = (bC[3 * qC + 2] - bC[3 * oC + 2]) / nC), wC && (NC.x = (wC[2 * qC] - wC[2 * oC]) / nC, NC.y = (wC[2 * qC + 1] - wC[2 * oC + 1]) / nC), SC[oC][qC].push(oC);
                for (let CC = 1; CC < nC; CC++) SC[oC][qC].push(QC.length / 3), QC[RC++] = QC[3 * oC] + CC * FC.x, QC[RC++] = QC[3 * oC + 1] + CC * FC.y, QC[RC++] = QC[3 * oC + 2] + CC * FC.z, bC && (bC[GC++] = bC[3 * oC] + CC * WC.x, bC[GC++] = bC[3 * oC + 1] + CC * WC.y, bC[GC++] = bC[3 * oC + 2] + CC * WC.z), wC && (wC[PC++] = wC[2 * oC] + CC * NC.x, wC[PC++] = wC[2 * oC + 1] + CC * NC.y);
                SC[oC][qC].push(qC), SC[qC][oC] = [], pC = SC[oC][qC].length;
                for (let CC = 0; CC < pC; CC++) SC[qC][oC][CC] = SC[oC][qC][pC - 1 - CC]
              } fC[0][0] = ZC[CC], fC[1][0] = SC[ZC[CC]][ZC[CC + 1]][1], fC[1][1] = SC[ZC[CC]][ZC[CC + 2]][1];
            for (let zC = 2; zC < nC; zC++) {
              fC[zC][0] = SC[ZC[CC]][ZC[CC + 1]][zC], fC[zC][zC] = SC[ZC[CC]][ZC[CC + 2]][zC], FC.x = (QC[3 * fC[zC][zC]] - QC[3 * fC[zC][0]]) / zC, FC.y = (QC[3 * fC[zC][zC] + 1] - QC[3 * fC[zC][0] + 1]) / zC, FC.z = (QC[3 * fC[zC][zC] + 2] - QC[3 * fC[zC][0] + 2]) / zC, bC && (WC.x = (bC[3 * fC[zC][zC]] - bC[3 * fC[zC][0]]) / zC, WC.y = (bC[3 * fC[zC][zC] + 1] - bC[3 * fC[zC][0] + 1]) / zC, WC.z = (bC[3 * fC[zC][zC] + 2] - bC[3 * fC[zC][0] + 2]) / zC), wC && (NC.x = (wC[2 * fC[zC][zC]] - wC[2 * fC[zC][0]]) / zC, NC.y = (wC[2 * fC[zC][zC] + 1] - wC[2 * fC[zC][0] + 1]) / zC);
              for (let CC = 1; CC < zC; CC++) fC[zC][CC] = QC.length / 3, QC[RC++] = QC[3 * fC[zC][0]] + CC * FC.x, QC[RC++] = QC[3 * fC[zC][0] + 1] + CC * FC.y, QC[RC++] = QC[3 * fC[zC][0] + 2] + CC * FC.z, bC && (bC[GC++] = bC[3 * fC[zC][0]] + CC * WC.x, bC[GC++] = bC[3 * fC[zC][0] + 1] + CC * WC.y, bC[GC++] = bC[3 * fC[zC][0] + 2] + CC * WC.z), wC && (wC[PC++] = wC[2 * fC[zC][0]] + CC * NC.x, wC[PC++] = wC[2 * fC[zC][0] + 1] + CC * NC.y)
            }
            fC[nC] = SC[ZC[CC + 1]][ZC[CC + 2]], MC.push(fC[0][0], fC[1][0], fC[1][1]);
            for (let CC = 1; CC < nC; CC++) {
              let zC;
              for (zC = 0; zC < CC; zC++) MC.push(fC[CC][zC], fC[CC + 1][zC], fC[CC + 1][zC + 1]), MC.push(fC[CC][zC], fC[CC + 1][zC + 1], fC[CC][zC + 1]);
              MC.push(fC[CC][zC], fC[CC + 1][zC], fC[CC + 1][zC + 1])
            }
          }
          zC.indices = MC, zC.applyToMesh(this, this.isVertexBufferUpdatable(hC.k.PositionKind))
        } else uC.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const CC = KC.e.ExtractFromMesh(this),
          zC = CC.uvs,
          ZC = CC.indices,
          QC = CC.positions,
          wC = CC.colors,
          bC = CC.matricesIndices,
          nC = CC.matricesWeights,
          fC = CC.matricesIndicesExtra,
          oC = CC.matricesWeightsExtra;
        if (void 0 === ZC || void 0 === QC || null === ZC || null === QC) uC.c.Warn("VertexData contains empty entries");
        else {
          const qC = [],
            FC = [],
            WC = [],
            NC = [],
            MC = [],
            gC = [],
            SC = [],
            pC = [];
          let PC, GC = 0;
          const RC = {};
          let AC, xC;
          for (let CC = 0; CC < ZC.length; CC += 3) {
            xC = [ZC[CC], ZC[CC + 1], ZC[CC + 2]], PC = [];
            for (let CC = 0; CC < 3; CC++) {
              PC[CC] = "";
              for (let zC = 0; zC < 3; zC++) Math.abs(QC[3 * xC[CC] + zC]) < 1e-8 && (QC[3 * xC[CC] + zC] = 0), PC[CC] += QC[3 * xC[CC] + zC] + "|"
            }
            if (PC[0] != PC[1] && PC[0] != PC[2] && PC[1] != PC[2])
              for (let CC = 0; CC < 3; CC++) {
                if (AC = RC[PC[CC]], void 0 === AC) {
                  RC[PC[CC]] = GC, AC = GC++;
                  for (let zC = 0; zC < 3; zC++) qC.push(QC[3 * xC[CC] + zC]);
                  if (null !== wC && void 0 !== wC)
                    for (let zC = 0; zC < 4; zC++) NC.push(wC[4 * xC[CC] + zC]);
                  if (null !== zC && void 0 !== zC)
                    for (let ZC = 0; ZC < 2; ZC++) WC.push(zC[2 * xC[CC] + ZC]);
                  if (null !== bC && void 0 !== bC)
                    for (let zC = 0; zC < 4; zC++) MC.push(bC[4 * xC[CC] + zC]);
                  if (null !== nC && void 0 !== nC)
                    for (let zC = 0; zC < 4; zC++) gC.push(nC[4 * xC[CC] + zC]);
                  if (null !== fC && void 0 !== fC)
                    for (let zC = 0; zC < 4; zC++) SC.push(fC[4 * xC[CC] + zC]);
                  if (null !== oC && void 0 !== oC)
                    for (let zC = 0; zC < 4; zC++) pC.push(oC[4 * xC[CC] + zC])
                }
                FC.push(AC)
              }
          }
          const JC = [];
          KC.e.ComputeNormals(qC, FC, JC), CC.positions = qC, CC.indices = FC, CC.normals = JC, null !== zC && void 0 !== zC && (CC.uvs = WC), null !== wC && void 0 !== wC && (CC.colors = NC), null !== bC && void 0 !== bC && (CC.matricesIndices = MC), null !== nC && void 0 !== nC && (CC.matricesWeights = gC), null !== fC && void 0 !== fC && (CC.matricesIndicesExtra = SC), null !== nC && void 0 !== nC && (CC.matricesWeightsExtra = pC), CC.applyToMesh(this, this.isVertexBufferUpdatable(hC.k.PositionKind))
        }
      }
      static _instancedMeshFactory(CC, zC) {
        throw (0, sC.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(CC, zC, ZC) {
        throw (0, sC.i)("PhysicsImpostor")
      }
      createInstance(CC) {
        const zC = OC._instancedMeshFactory(CC, this);
        return zC.parent = this.parent, zC
      }
      synchronizeInstances() {
        for (let CC = 0; CC < this.instances.length; CC++) {
          this.instances[CC]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(CC) {
        const zC = this.CQC(),
          ZC = this.getVerticesData(hC.k.PositionKind);
        if (!ZC || !zC) return this;
        const QC = [];
        for (let bC = 0; bC < ZC.length; bC += 3) QC.push(iC.r.FromArray(ZC, bC));
        const wC = [];
        return GC.d.SyncAsyncForLoop(QC.length, 40, (CC => {
          const zC = QC.length - 1 - CC,
            ZC = QC[zC];
          for (let bC = 0; bC < zC; ++bC) {
            const CC = QC[bC];
            if (ZC.equals(CC)) {
              wC[zC] = bC;
              break
            }
          }
        }), (() => {
          for (let CC = 0; CC < zC.length; ++CC) zC[CC] = wC[zC[CC]] || zC[CC];
          const ZC = this.Zx.slice(0);
          this.setIndices(zC), this.Zx = ZC, CC && CC(this)
        })), this
      }
      serialize() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        CC.name = this.name, CC.id = this.id, CC.uniqueId = this.uniqueId, CC.type = this.getClassName(), xC.e && xC.e.HasTags(this) && (CC.tags = xC.e.GetTags(this)), CC.position = this.position.VZC(), this.rotationQuaternion ? CC.rotationQuaternion = this.rotationQuaternion.VZC() : this.rotation && (CC.rotation = this.rotation.VZC()), CC.sq = this.sq.VZC(), this._postMultiplyPivotMatrix ? CC.pivotMatrix = this.getPivotMatrix().VZC() : CC.localMatrix = this.getPivotMatrix().VZC(), CC.isEnabled = this.isEnabled(!1), CC.isVisible = this.isVisible, CC.infiniteDistance = this.infiniteDistance, CC.pickable = this.tS, CC.receiveShadows = this.receiveShadows, CC.billboardMode = this.billboardMode, CC.visibility = this.visibility, CC.Hg = this.Hg, CC.checkCollisions = this.checkCollisions, CC.ellipsoid = this.ellipsoid.VZC(), CC.ellipsoidOffset = this.ellipsoidOffset.VZC(), CC.Xg = this.Xg, CC.isBlocker = this.isBlocker, CC.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (CC.gH = !0), this.parent && this.parent._serializeAsParent(CC), CC.isUnIndexed = this.isUnIndexed;
        const zC = this._geometry;
        if (zC && this.Zx) {
          CC.geometryUniqueId = zC.uniqueId, CC.geometryId = zC.id, CC.Zx = [];
          for (let zC = 0; zC < this.Zx.length; zC++) {
            const ZC = this.Zx[zC];
            CC.Zx.push({
              materialIndex: ZC.materialIndex,
              verticesStart: ZC.verticesStart,
              verticesCount: ZC.verticesCount,
              indexStart: ZC.indexStart,
              indexCount: ZC.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (CC.materialUniqueId = this.material.uniqueId, CC.materialId = this.material.id) : (this.material = null, CC.materialUniqueId = this._scene.defaultMaterial.uniqueId, CC.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (CC.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (CC.skeletonId = this.skeleton.id, CC.skeletonUniqueId = this.skeleton.uniqueId, CC.numBoneInfluencers = this.numBoneInfluencers), this.Km()._getComponent(TC.b.NAME_PHYSICSENGINE)) {
          const zC = this.getPhysicsImpostor?.();
          zC && (CC.physicsMass = zC.getParam("Mq"), CC.physicsFriction = zC.getParam("friction"), CC.physicsRestitution = zC.getParam("Mq"), CC.physicsImpostor = zC.type)
        }
        this.metadata && (CC.metadata = this.metadata), 0 !== this.meshBlendingTag && (CC.meshBlendingTag = this.meshBlendingTag), CC.instances = [];
        for (let ZC = 0; ZC < this.instances.length; ZC++) {
          const zC = this.instances[ZC];
          if (zC.doNotSerialize) continue;
          const QC = {
            name: zC.name,
            id: zC.id,
            isEnabled: zC.isEnabled(!1),
            isVisible: zC.isVisible,
            tS: zC.tS,
            checkCollisions: zC.checkCollisions,
            position: zC.position.VZC(),
            sq: zC.sq.VZC()
          };
          if (zC.parent && zC.parent._serializeAsParent(QC), zC.rotationQuaternion ? QC.rotationQuaternion = zC.rotationQuaternion.VZC() : zC.rotation && (QC.rotation = zC.rotation.VZC()), this.Km()._getComponent(TC.b.NAME_PHYSICSENGINE)) {
            const CC = zC.getPhysicsImpostor?.();
            CC && (QC.physicsMass = CC.getParam("Mq"), QC.physicsFriction = CC.getParam("friction"), QC.physicsRestitution = CC.getParam("Mq"), QC.physicsImpostor = CC.type)
          }
          zC.metadata && (QC.metadata = zC.metadata), zC.actionManager && (QC.actions = zC.actionManager.serialize(zC.name)), CC.instances.push(QC), cC.d.AppendSerializedAnimations(zC, QC), QC.np = zC.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (CC.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.AzC
          }, this._userThinInstanceBuffersStorage)) {
          const zC = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const CC in this._userThinInstanceBuffersStorage.data) zC.data[CC] = Array.from(this._userThinInstanceBuffersStorage.data[CC]), zC.sizes[CC] = this._userThinInstanceBuffersStorage.sizes[CC], zC.strides[CC] = this._userThinInstanceBuffersStorage.strides[CC];
          CC.thinInstances.userThinInstance = zC
        }
        return cC.d.AppendSerializedAnimations(this, CC), CC.np = this.serializeAnimationRanges(), CC.layerMask = this.layerMask, CC.alphaIndex = this.alphaIndex, CC.hasVertexAlpha = this.hasVertexAlpha, CC.overlayAlpha = this.overlayAlpha, CC.overlayColor = this.overlayColor.VZC(), CC.renderOverlay = this.renderOverlay, CC.applyFog = this.applyFog, this.actionManager && (CC.actions = this.actionManager.serialize(this.name)), CC
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const CC = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (CC && CC.vertexCount) {
          if (CC.vertexCount !== this.getTotalVertices()) return uC.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (CC.isUsingTextureForTargets) return;
          for (let zC = 0; zC < CC.numInfluencers; zC++) {
            const ZC = CC.getActiveTarget(zC),
              QC = ZC.getPositions();
            if (!QC) return void uC.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(hC.k.PositionKind + zC, QC, !1, 3);
            const wC = ZC.getNormals();
            wC && this.geometry.setVerticesData(hC.k.NormalKind + zC, wC, !1, 3);
            const bC = ZC.getTangents();
            bC && this.geometry.setVerticesData(hC.k.TangentKind + zC, bC, !1, 3);
            const nC = ZC.getUVs();
            nC && this.geometry.setVerticesData(hC.k.UVKind + "_" + zC, nC, !1, 2);
            const fC = ZC.getUV2s();
            fC && this.geometry.setVerticesData(hC.k.UV2Kind + "_" + zC, fC, !1, 2);
            const oC = ZC.getColors();
            oC && this.geometry.setVerticesData(hC.k.ColorKind + zC, oC, !1, 4)
          }
        } else {
          let CC = 0;
          for (; this.geometry.isVerticesDataPresent(hC.k.PositionKind + CC);) this.geometry.removeVerticesData(hC.k.PositionKind + CC), this.geometry.isVerticesDataPresent(hC.k.NormalKind + CC) && this.geometry.removeVerticesData(hC.k.NormalKind + CC), this.geometry.isVerticesDataPresent(hC.k.TangentKind + CC) && this.geometry.removeVerticesData(hC.k.TangentKind + CC), this.geometry.isVerticesDataPresent(hC.k.UVKind + "_" + CC) && this.geometry.removeVerticesData(hC.k.UVKind + "_" + CC), this.geometry.isVerticesDataPresent(hC.k.UV2Kind + "_" + CC) && this.geometry.removeVerticesData(hC.k.UV2Kind + "_" + CC), this.geometry.isVerticesDataPresent(hC.k.ColorKind + CC) && this.geometry.removeVerticesData(hC.k.ColorKind + CC), CC++
        }
      }
      static Parse(CC, zC, ZC) {
        let QC, wC = !1;
        if (CC.type && "LinesMesh" === CC.type ? QC = OC._LinesMeshParser(CC, zC) : CC.type && "GroundMesh" === CC.type ? QC = OC._GroundMeshParser(CC, zC) : CC.type && "GoldbergMesh" === CC.type ? QC = OC._GoldbergMeshParser(CC, zC) : CC.type && "GreasedLineMesh" === CC.type ? QC = OC._GreasedLineMeshParser(CC, zC) : CC.type && "TrailMesh" === CC.type ? QC = OC._TrailMeshParser(CC, zC) : CC.type && "GaussianSplattingMesh" === CC.type ? (QC = CC._isCompound ? OC._GaussianSplattingCompoundMeshParser(CC, zC) : OC._GaussianSplattingMeshParser(CC, zC), wC = !0) : CC.type && "GaussianSplattingPartProxyMesh" === CC.type ? (QC = OC._GaussianSplattingPartProxyMeshParser(CC, zC), wC = !0) : QC = new OC(CC.name, zC), QC.id = CC.id, QC._waitingParsedUniqueId = CC.uniqueId, xC.e && xC.e.AddTagsTo(QC, CC.tags), QC.position = iC.r.FromArray(CC.position), void 0 !== CC.metadata && (QC.metadata = CC.metadata), void 0 !== CC.meshBlendingTag && (QC.meshBlendingTag = CC.meshBlendingTag), CC.rotationQuaternion ? QC.rotationQuaternion = iC.f.FromArray(CC.rotationQuaternion) : CC.rotation && (QC.rotation = iC.r.FromArray(CC.rotation)), QC.sq = iC.r.FromArray(CC.sq), CC.localMatrix ? QC.setPreTransformMatrix(iC.b.FromArray(CC.localMatrix)) : CC.pivotMatrix && QC.setPivotMatrix(iC.b.FromArray(CC.pivotMatrix)), QC.IK(CC.isEnabled), QC.isVisible = CC.isVisible, QC.infiniteDistance = CC.infiniteDistance, QC.Hg = !!CC.Hg, QC.showBoundingBox = CC.showBoundingBox, QC.showSubMeshesBoundingBox = CC.showSubMeshesBoundingBox, void 0 !== CC.applyFog && (QC.applyFog = CC.applyFog), void 0 !== CC.pickable && (QC.tS = CC.pickable), void 0 !== CC.alphaIndex && (QC.alphaIndex = CC.alphaIndex), QC.receiveShadows = CC.receiveShadows, void 0 !== CC.billboardMode && (QC.billboardMode = CC.billboardMode), void 0 !== CC.visibility && (QC.visibility = CC.visibility), QC.checkCollisions = CC.checkCollisions, QC.Xg = !!CC.Xg, CC.ellipsoid && (QC.ellipsoid = iC.r.FromArray(CC.ellipsoid)), CC.ellipsoidOffset && (QC.ellipsoidOffset = iC.r.FromArray(CC.ellipsoidOffset)), null != CC.overrideMaterialSideOrientation && (QC.sideOrientation = CC.overrideMaterialSideOrientation), void 0 !== CC.sideOrientation && (QC.sideOrientation = CC.sideOrientation), void 0 !== CC.isBlocker && (QC.isBlocker = CC.isBlocker), QC._shouldGenerateFlatShading = CC.useFlatShading, CC.gH && (QC._waitingData.gH = CC.gH), void 0 !== CC.parentId && (QC._waitingParentId = CC.parentId), void 0 !== CC.parentInstanceIndex && (QC._waitingParentInstanceIndex = CC.parentInstanceIndex), void 0 !== CC.actions && (QC._waitingData.actions = CC.actions), void 0 !== CC.overlayAlpha && (QC.overlayAlpha = CC.overlayAlpha), void 0 !== CC.overlayColor && (QC.overlayColor = vC.e.FromArray(CC.overlayColor)), void 0 !== CC.renderOverlay && (QC.renderOverlay = CC.renderOverlay), QC.isUnIndexed = !!CC.isUnIndexed, QC.hasVertexAlpha = CC.hasVertexAlpha, CC.delayLoadingFile ? (QC.delayLoadState = 4, QC.delayLoadingFile = ZC + CC.delayLoadingFile, QC.buildBoundingInfo(iC.r.FromArray(CC.boundingBoxMinimum), iC.r.FromArray(CC.boundingBoxMaximum)), CC._binaryInfo && (QC._binaryInfo = CC._binaryInfo), QC._delayInfo = [], CC.hasUVs && QC._delayInfo.push(hC.k.UVKind), CC.hasUVs2 && QC._delayInfo.push(hC.k.UV2Kind), CC.hasUVs3 && QC._delayInfo.push(hC.k.UV3Kind), CC.hasUVs4 && QC._delayInfo.push(hC.k.UV4Kind), CC.hasUVs5 && QC._delayInfo.push(hC.k.UV5Kind), CC.hasUVs6 && QC._delayInfo.push(hC.k.UV6Kind), CC.hasColors && QC._delayInfo.push(hC.k.ColorKind), CC.hasMatricesIndices && QC._delayInfo.push(hC.k.MatricesIndicesKind), CC.hasMatricesWeights && QC._delayInfo.push(hC.k.MatricesWeightsKind), QC._delayLoadingFunction = YC.c._ImportGeometry, XC.d.ForceFullSceneLoadingForIncremental && QC._checkDelayState()) : wC || YC.c._ImportGeometry(CC, QC), CC.materialUniqueId ? QC._waitingMaterialId = CC.materialUniqueId : CC.materialId && (QC._waitingMaterialId = CC.materialId), CC.morphTargetManagerId > -1 && (QC._waitingMorphTargetManagerId = CC.morphTargetManagerId), void 0 !== CC.skeletonId && null !== CC.skeletonId && (QC.skeleton = zC.getLastSkeletonById(CC.skeletonId), QC._waitingSkeletonId = CC.skeletonId, CC.numBoneInfluencers && (QC.numBoneInfluencers = CC.numBoneInfluencers)), void 0 !== CC.skeletonUniqueId && null !== CC.skeletonUniqueId && (QC._waitingSkeletonUniqueId = CC.skeletonUniqueId), CC.animations) {
          for (let zC = 0; zC < CC.animations.length; zC++) {
            const ZC = CC.animations[zC],
              wC = (0, rC.c)("BABYLON.Animation");
            wC && QC.animations.push(wC.Parse(ZC))
          }
          eC.d.ParseAnimationRanges(QC, CC, zC)
        }
        if (CC.autoAnimate && zC.beginAnimation(QC, CC.autoAnimateFrom, CC.autoAnimateTo, CC.autoAnimateLoop, CC.autoAnimateSpeed || 1), CC.layerMask && !isNaN(CC.layerMask) ? QC.layerMask = Math.abs(parseInt(CC.layerMask)) : QC.layerMask = 268435455, CC.physicsImpostor && (QC.physicsImpostor = OC._PhysicsImpostorParser(zC, QC, CC)), CC.lodMeshIds && (QC._waitingData.lods = {
            ids: CC.lodMeshIds,
            distances: CC.lodDistances ? CC.lodDistances : null,
            coverages: CC.lodCoverages ? CC.lodCoverages : null
          }), CC.instances)
          for (let bC = 0; bC < CC.instances.length; bC++) {
            const ZC = CC.instances[bC],
              wC = QC.createInstance(ZC.name);
            if (ZC.id && (wC.id = ZC.id), xC.e && (ZC.tags ? xC.e.AddTagsTo(wC, ZC.tags) : xC.e.AddTagsTo(wC, CC.tags)), wC.position = iC.r.FromArray(ZC.position), void 0 !== ZC.metadata && (wC.metadata = ZC.metadata), void 0 !== ZC.parentId && (wC._waitingParentId = ZC.parentId), void 0 !== ZC.parentInstanceIndex && (wC._waitingParentInstanceIndex = ZC.parentInstanceIndex), void 0 !== ZC.isEnabled && null !== ZC.isEnabled && wC.IK(ZC.isEnabled), void 0 !== ZC.isVisible && null !== ZC.isVisible && (wC.isVisible = ZC.isVisible), void 0 !== ZC.tS && null !== ZC.tS && (wC.tS = ZC.tS), ZC.rotationQuaternion ? wC.rotationQuaternion = iC.f.FromArray(ZC.rotationQuaternion) : ZC.rotation && (wC.rotation = iC.r.FromArray(ZC.rotation)), wC.sq = iC.r.FromArray(ZC.sq), void 0 != ZC.checkCollisions && null != ZC.checkCollisions && (wC.checkCollisions = ZC.checkCollisions), void 0 != ZC.pickable && null != ZC.pickable && (wC.tS = ZC.pickable), void 0 != ZC.showBoundingBox && null != ZC.showBoundingBox && (wC.showBoundingBox = ZC.showBoundingBox), void 0 != ZC.showSubMeshesBoundingBox && null != ZC.showSubMeshesBoundingBox && (wC.showSubMeshesBoundingBox = ZC.showSubMeshesBoundingBox), void 0 != ZC.alphaIndex && null != ZC.showSubMeshesBoundingBox && (wC.alphaIndex = ZC.alphaIndex), ZC.physicsImpostor && (wC.physicsImpostor = OC._PhysicsImpostorParser(zC, wC, ZC)), void 0 !== ZC.actions && (wC._waitingData.actions = ZC.actions), ZC.animations) {
              for (let CC = 0; CC < ZC.animations.length; CC++) {
                const zC = ZC.animations[CC],
                  QC = (0, rC.c)("BABYLON.Animation");
                QC && wC.animations.push(QC.Parse(zC))
              }
              eC.d.ParseAnimationRanges(wC, ZC, zC), ZC.autoAnimate && zC.beginAnimation(wC, ZC.autoAnimateFrom, ZC.autoAnimateTo, ZC.autoAnimateLoop, ZC.autoAnimateSpeed || 1)
            }
          }
        if (CC.thinInstances) {
          const zC = CC.thinInstances;
          if (QC.AzC = !!zC.enablePicking, zC.matrixData ? (QC.E_("matrix", new Float32Array(zC.matrixData), 16, !1), QC._thinInstanceDataStorage.matrixBufferSize = zC.matrixBufferSize, QC._thinInstanceDataStorage.instancesCount = zC.instancesCount) : QC._thinInstanceDataStorage.matrixBufferSize = zC.matrixBufferSize, CC.thinInstances.userThinInstance) {
            const zC = CC.thinInstances.userThinInstance;
            for (const CC in zC.data) QC.E_(CC, new Float32Array(zC.data[CC]), zC.strides[CC], !1), QC._userThinInstanceBuffersStorage.sizes[CC] = zC.sizes[CC]
          }
        }
        return QC
      }
      setPositionsForCPUSkinning() {
        const CC = this._internalMeshDataInfo;
        if (!CC._sourcePositions) {
          const zC = this.getVerticesData(hC.k.PositionKind);
          if (!zC) return CC._sourcePositions;
          CC._sourcePositions = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.PositionKind) || this.setVerticesData(hC.k.PositionKind, zC, !0)
        }
        return CC._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const CC = this._internalMeshDataInfo;
        if (!CC._sourceNormals) {
          const zC = this.getVerticesData(hC.k.NormalKind);
          if (!zC) return CC._sourceNormals;
          CC._sourceNormals = new Float32Array(zC), this.isVertexBufferUpdatable(hC.k.NormalKind) || this.setVerticesData(hC.k.NormalKind, zC, !0)
        }
        return CC._sourceNormals
      }
      applySkeleton(CC) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Km().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Km().getFrameId(), !this.isVerticesDataPresent(hC.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(hC.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(hC.k.MatricesWeightsKind)) return this;
        const zC = this.isVerticesDataPresent(hC.k.NormalKind),
          ZC = this._internalMeshDataInfo;
        if (!ZC._sourcePositions) {
          const CC = this.Zx.slice();
          this.setPositionsForCPUSkinning(), this.Zx = CC
        }
        zC && !ZC._sourceNormals && this.setNormalsForCPUSkinning();
        let QC = this.getVerticesData(hC.k.PositionKind);
        if (!QC) return this;
        QC instanceof Float32Array || (QC = new Float32Array(QC));
        let wC = this.getVerticesData(hC.k.NormalKind);
        if (zC) {
          if (!wC) return this;
          wC instanceof Float32Array || (wC = new Float32Array(wC))
        }
        const bC = this.getVerticesData(hC.k.MatricesIndicesKind),
          nC = this.getVerticesData(hC.k.MatricesWeightsKind);
        if (!nC || !bC) return this;
        const fC = this.numBoneInfluencers > 4,
          oC = fC ? this.getVerticesData(hC.k.MatricesIndicesExtraKind) : null,
          qC = fC ? this.getVerticesData(hC.k.MatricesWeightsExtraKind) : null,
          FC = CC.getTransformMatrices(this),
          WC = iC.r.Zero(),
          NC = new iC.b,
          MC = new iC.b;
        let gC, SC = 0;
        for (let pC = 0; pC < QC.length; pC += 3, SC += 4) {
          let CC;
          for (gC = 0; gC < 4; gC++) CC = nC[SC + gC], CC > 0 && (iC.b.FromFloat32ArrayToRefScaled(FC, Math.floor(16 * bC[SC + gC]), CC, MC), NC.addToSelf(MC));
          if (fC)
            for (gC = 0; gC < 4; gC++) CC = qC[SC + gC], CC > 0 && (iC.b.FromFloat32ArrayToRefScaled(FC, Math.floor(16 * oC[SC + gC]), CC, MC), NC.addToSelf(MC));
          iC.r.TransformCoordinatesFromFloatsToRef(ZC._sourcePositions[pC], ZC._sourcePositions[pC + 1], ZC._sourcePositions[pC + 2], NC, WC), WC.toArray(QC, pC), zC && (iC.r.TransformNormalFromFloatsToRef(ZC._sourceNormals[pC], ZC._sourceNormals[pC + 1], ZC._sourceNormals[pC + 2], NC, WC), WC.toArray(wC, pC)), NC.reset()
        }
        return this.updateVerticesData(hC.k.PositionKind, QC), zC && this.updateVerticesData(hC.k.NormalKind, wC), this
      }
      static MinMax(CC) {
        let zC = null,
          ZC = null;
        for (const QC of CC) {
          const CC = QC.WE().boundingBox;
          zC && ZC ? (zC.minimizeInPlace(CC.minimumWorld), ZC.maximizeInPlace(CC.maximumWorld)) : (zC = CC.minimumWorld.clone(), ZC = CC.maximumWorld.clone())
        }
        return zC && ZC ? {
          min: zC,
          max: ZC
        } : {
          min: iC.r.Zero(),
          max: iC.r.Zero()
        }
      }
      static Center(CC) {
        const zC = CC instanceof Array ? OC.MinMax(CC) : CC;
        return iC.r.Center(zC.min, zC.max)
      }
      static MergeMeshes(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        return (0, JC.l)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !1))
      }
      static async MergeMeshesAsync(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, JC.h)(OC._MergeMeshesCoroutine(CC, zC, ZC, QC, wC, bC, !0), (0, JC.d)())
      }
      static * _MergeMeshesCoroutine(CC) {
        let zC, ZC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          QC = arguments.length > 2 ? arguments[2] : void 0,
          wC = arguments.length > 3 ? arguments[3] : void 0,
          bC = arguments.length > 4 ? arguments[4] : void 0,
          nC = arguments.length > 5 ? arguments[5] : void 0,
          fC = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (CC = CC.filter(Boolean)).length) return null;
        if (!QC) {
          let ZC = 0;
          for (zC = 0; zC < CC.length; zC++)
            if (ZC += CC[zC].getTotalVertices(), ZC >= 65536) return uC.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const oC = CC[0];
        nC && (bC = !1, CC.sort(((CC, zC) => (CC.material?.uniqueId ?? -1) - (zC.material?.uniqueId ?? -1))));
        const qC = new Array,
          FC = new Array,
          WC = new Array,
          NC = CC[0].sideOrientation;
        for (zC = 0; zC < CC.length; zC++) {
          const ZC = CC[zC];
          if (ZC.ZH) return uC.c.Warn("Cannot merge instance meshes."), null;
          if (NC !== ZC.sideOrientation) return uC.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (bC || nC) {
            const CC = WC.reduce(((CC, zC) => Math.max(CC, zC.start + zC.count)), 0);
            if (nC)
              if (ZC.material) {
                const zC = ZC.material;
                if (zC instanceof lC.c) {
                  for (let CC = 0; CC < zC.r_.length; CC++) qC.indexOf(zC.r_[CC]) < 0 && qC.push(zC.r_[CC]);
                  for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC.r_[ZC.Zx[QC].materialIndex])), WC.push({
                    start: CC + ZC.Zx[QC].indexStart,
                    count: ZC.Zx[QC].indexCount
                  })
                } else {
                  qC.indexOf(zC) < 0 && qC.push(zC);
                  for (let QC = 0; QC < ZC.Zx.length; QC++) FC.push(qC.indexOf(zC)), WC.push({
                    start: CC + ZC.Zx[QC].indexStart,
                    count: ZC.Zx[QC].indexCount
                  })
                }
              } else
                for (let zC = 0; zC < ZC.Zx.length; zC++) FC.push(0), WC.push({
                  start: CC + ZC.Zx[zC].indexStart,
                  count: ZC.Zx[zC].indexCount
                });
            else WC.push({
              start: CC,
              count: ZC.getTotalIndices()
            })
          }
        }
        if (nC && WC.length > 1) {
          let CC = 0;
          for (let zC = 1; zC < WC.length; zC++) {
            const ZC = WC[CC],
              QC = WC[zC];
            FC[zC] === FC[CC] && ZC.start + ZC.count === QC.start ? ZC.count += QC.count : (CC++, WC[CC] = QC, FC[CC] = FC[zC])
          }
          WC.length = CC + 1, FC.length = CC + 1
        }
        const MC = CC => {
            const zC = CC.computeWorldMatrix(!0);
            return {
              vertexData: KC.e.ExtractFromMesh(CC, !1, !1),
              transform: zC
            }
          },
          {
            vertexData: gC,
            transform: SC
          } = MC(CC[0]);
        fC && (yield);
        const pC = new Array(CC.length - 1);
        for (let JC = 1; JC < CC.length; JC++) pC[JC - 1] = MC(CC[JC]), fC && (yield);
        const PC = gC._mergeCoroutine(SC, pC, QC, fC, !ZC);
        let GC = PC.next();
        for (; !GC.done;) fC && (yield), GC = PC.next();
        const RC = GC.value;
        wC || (wC = new OC(oC.name + "_merged", oC.Km()));
        const AC = RC._applyToCoroutine(wC, void 0, fC);
        let xC = AC.next();
        for (; !xC.done;) fC && (yield), xC = AC.next();
        if (wC.checkCollisions = oC.checkCollisions, wC.sideOrientation = oC.sideOrientation, ZC)
          for (zC = 0; zC < CC.length; zC++) CC[zC].dispose();
        if (bC || nC) {
          for (wC.releaseSubMeshes(), zC = 0; zC < WC.length;) mC.d.CreateFromIndices(0, WC[zC].start, WC[zC].count, wC, void 0, !1), zC++;
          for (const CC of wC.Zx) CC.refreshBoundingInfo();
          wC.computeWorldMatrix(!0)
        }
        if (nC) {
          const CC = new lC.c(oC.name + "_merged", oC.Km());
          CC.r_ = qC;
          for (let zC = 0; zC < wC.Zx.length; zC++) wC.Zx[zC].materialIndex = FC[zC];
          wC.material = CC
        } else wC.material = oC.material;
        return wC
      }
      P_(CC) {
        CC._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(CC)
      }
      A_(CC) {
        const zC = CC._indexInSourceMeshInstanceArray;
        if (-1 != zC) {
          if (zC !== this.instances.length - 1) {
            const CC = this.instances[this.instances.length - 1];
            this.instances[zC] = CC, CC._indexInSourceMeshInstanceArray = zC
          }
          CC._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === HC.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(CC) {
        const zC = this.Km();
        return zC.forcePointsCloud ? HC.d.PointFillMode : zC.forceWireframe ? HC.d.WireFrameFillMode : this.overrideRenderingFillMode ?? CC
      }
      setMaterialByID(CC) {
        return this.setMaterialById(CC)
      }
      static CreateRibbon(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(CC, zC, ZC, QC, wC, bC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(CC, zC, ZC, QC, wC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(CC, zC, ZC, QC, wC, bC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(CC, zC, ZC, QC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(CC, zC, ZC, QC, wC, bC, nC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(CC, zC, ZC, QC, wC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(CC, zC, ZC, QC, wC, bC, nC, fC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(CC, zC, ZC, QC, wC, bC, nC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(CC, zC, ZC, QC, wC, bC, nC, fC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(CC, zC, ZC, QC, wC, bC, nC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(CC, zC, ZC, QC, wC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(CC, zC, ZC, QC, wC, bC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(CC, zC, ZC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(CC, zC, ZC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(CC, zC, ZC, QC, wC, bC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(CC, zC, ZC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(CC) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    OC.FRONTSIDE = KC.e.FRONTSIDE, OC.BACKSIDE = KC.e.BACKSIDE, OC.DOUBLESIDE = KC.e.DOUBLESIDE, OC.DEFAULTSIDE = KC.e.DEFAULTSIDE, OC.NO_CAP = 0, OC.CAP_START = 1, OC.CAP_END = 2, OC.CAP_ALL = 3, OC.NO_FLIP = 0, OC.FLIP_TILE = 1, OC.ROTATE_TILE = 2, OC.FLIP_ROW = 3, OC.ROTATE_ROW = 4, OC.FLIP_N_ROTATE_TILE = 5, OC.FLIP_N_ROTATE_ROW = 6, OC.CENTER = 0, OC.LEFT = 1, OC.RIGHT = 2, OC.TOP = 3, OC.BOTTOM = 4, OC.INSTANCEDMESH_SORT_TRANSPARENT = !1, OC._GroundMeshParser = (CC, zC) => {
      throw (0, sC.i)("GroundMesh")
    }, OC._GoldbergMeshParser = (CC, zC) => {
      throw (0, sC.i)("GoldbergMesh")
    }, OC._LinesMeshParser = (CC, zC) => {
      throw (0, sC.i)("LinesMesh")
    }, OC._GreasedLineMeshParser = (CC, zC) => {
      throw (0, sC.i)("GreasedLineMesh")
    }, OC._GreasedLineRibbonMeshParser = (CC, zC) => {
      throw (0, sC.i)("GreasedLineRibbonMesh")
    }, OC._TrailMeshParser = (CC, zC) => {
      throw (0, sC.i)("TrailMesh")
    }, OC._GaussianSplattingMeshParser = (CC, zC) => {
      throw (0, sC.i)("GaussianSplattingMesh")
    }, OC._GaussianSplattingPartProxyMeshParser = (CC, zC) => {
      throw (0, sC.i)("GaussianSplattingPartProxyMesh")
    }, OC._GaussianSplattingCompoundMeshParser = (CC, zC) => {
      throw (0, sC.i)("GaussianSplattingCompoundMesh")
    };
    let kC = !1;

    function VC() {
      kC || (kC = !0, (0, rC.d)("BABYLON.Mesh", OC))
    }(QC = OC.prototype).UH ?? (QC.UH = (0, sC.f)("Mesh", "UH")), (wC = OC.prototype).simplify ?? (wC.simplify = (0, sC.f)("Mesh", "simplify")), (bC = OC.prototype).thinInstanceAdd ?? (bC.thinInstanceAdd = (0, sC.f)("Mesh", "thinInstanceAdd")), (nC = OC.prototype).thinInstanceAddSelf ?? (nC.thinInstanceAddSelf = (0, sC.f)("Mesh", "thinInstanceAddSelf")), (fC = OC.prototype).thinInstanceRegisterAttribute ?? (fC.thinInstanceRegisterAttribute = (0, sC.f)("Mesh", "thinInstanceRegisterAttribute")), (oC = OC.prototype).thinInstanceSetMatrixAt ?? (oC.thinInstanceSetMatrixAt = (0, sC.f)("Mesh", "thinInstanceSetMatrixAt")), (qC = OC.prototype).thinInstanceSetAttributeAt ?? (qC.thinInstanceSetAttributeAt = (0, sC.f)("Mesh", "thinInstanceSetAttributeAt")), (FC = OC.prototype).E_ ?? (FC.E_ = (0, sC.f)("Mesh", "E_")), (WC = OC.prototype).thinInstanceGetWorldMatrices ?? (WC.thinInstanceGetWorldMatrices = (0, sC.f)("Mesh", "thinInstanceGetWorldMatrices")), (NC = OC.prototype).v_ ?? (NC.v_ = (0, sC.f)("Mesh", "v_")), (MC = OC.prototype).thinInstancePartialBufferUpdate ?? (MC.thinInstancePartialBufferUpdate = (0, sC.f)("Mesh", "thinInstancePartialBufferUpdate")), (gC = OC.prototype).thinInstanceRefreshBoundingInfo ?? (gC.thinInstanceRefreshBoundingInfo = (0, sC.f)("Mesh", "thinInstanceRefreshBoundingInfo")), (SC = OC.prototype).getEmittedParticleSystems ?? (SC.getEmittedParticleSystems = (0, sC.f)("Mesh", "getEmittedParticleSystems")), (pC = OC.prototype).getHierarchyEmittedParticleSystems ?? (pC.getHierarchyEmittedParticleSystems = (0, sC.f)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(OC.prototype, "edgesShareWithInstances") || Object.defineProperty(OC.prototype, "edgesShareWithInstances", (0, sC.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(OC.prototype, "AzC") || Object.defineProperty(OC.prototype, "AzC", (0, sC.d)("Mesh", "AzC")), Object.getOwnPropertyDescriptor(OC.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(OC.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, sC.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(OC.prototype, "N_") || Object.defineProperty(OC.prototype, "N_", (0, sC.d)("Mesh", "N_"))
  },
  40235: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => gC
    });
    var QC = ZC(39811),
      wC = ZC(36963),
      bC = ZC(39959),
      nC = ZC(39694),
      fC = ZC(37142),
      oC = ZC(38507),
      qC = ZC(39818),
      FC = ZC(40229),
      WC = ZC(39872),
      NC = ZC(40119);
    class MC {}
    let gC = (() => {
      var CC;
      let zC, ZC, gC, SC, pC = [];
      return CC = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, FC.g)(this._applyToCoroutine.bind(this)), this.uniqueId = CC._UniqueIdGenerator, CC._UniqueIdGenerator++
        }
        set(CC, zC) {
          switch (CC.length || oC.c.Warn(`Setting vertex data kind '${zC}' with an empty array`), zC) {
            case bC.k.PositionKind:
              this.positions = CC;
              break;
            case bC.k.NormalKind:
              this.normals = CC;
              break;
            case bC.k.TangentKind:
              this.tangents = CC;
              break;
            case bC.k.UVKind:
              this.uvs = CC;
              break;
            case bC.k.UV2Kind:
              this.uvs2 = CC;
              break;
            case bC.k.UV3Kind:
              this.uvs3 = CC;
              break;
            case bC.k.UV4Kind:
              this.uvs4 = CC;
              break;
            case bC.k.UV5Kind:
              this.uvs5 = CC;
              break;
            case bC.k.UV6Kind:
              this.uvs6 = CC;
              break;
            case bC.k.ColorKind:
              this.colors = CC;
              break;
            case bC.k.MatricesIndicesKind:
              this.matricesIndices = CC;
              break;
            case bC.k.MatricesWeightsKind:
              this.matricesWeights = CC;
              break;
            case bC.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = CC;
              break;
            case bC.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = CC
          }
        }
        applyToMesh(CC, zC) {
          return this._applyTo(CC, zC, !1), this
        }
        applyToGeometry(CC, zC) {
          return this._applyTo(CC, zC, !1), this
        }
        updateMesh(CC) {
          return this._update(CC), this
        }
        updateGeometry(CC) {
          return this._update(CC), this
        }* _applyToCoroutine(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (CC.setVerticesData(bC.k.PositionKind, this.positions, zC), ZC && (yield)), this.normals && (CC.setVerticesData(bC.k.NormalKind, this.normals, zC), ZC && (yield)), this.tangents && (CC.setVerticesData(bC.k.TangentKind, this.tangents, zC), ZC && (yield)), this.uvs && (CC.setVerticesData(bC.k.UVKind, this.uvs, zC), ZC && (yield)), this.uvs2 && (CC.setVerticesData(bC.k.UV2Kind, this.uvs2, zC), ZC && (yield)), this.uvs3 && (CC.setVerticesData(bC.k.UV3Kind, this.uvs3, zC), ZC && (yield)), this.uvs4 && (CC.setVerticesData(bC.k.UV4Kind, this.uvs4, zC), ZC && (yield)), this.uvs5 && (CC.setVerticesData(bC.k.UV5Kind, this.uvs5, zC), ZC && (yield)), this.uvs6 && (CC.setVerticesData(bC.k.UV6Kind, this.uvs6, zC), ZC && (yield)), this.colors) {
            const QC = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            CC.setVerticesData(bC.k.ColorKind, this.colors, zC, QC), this.hasVertexAlpha && void 0 !== CC.hasVertexAlpha && (CC.hasVertexAlpha = !0), ZC && (yield)
          }
          if (this.matricesIndices && (CC.setVerticesData(bC.k.MatricesIndicesKind, this.matricesIndices, zC), ZC && (yield)), this.matricesWeights && (CC.setVerticesData(bC.k.MatricesWeightsKind, this.matricesWeights, zC), ZC && (yield)), this.matricesIndicesExtra && (CC.setVerticesData(bC.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zC), ZC && (yield)), this.matricesWeightsExtra && (CC.setVerticesData(bC.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zC), ZC && (yield)), this.indices ? (CC.setIndices(this.indices, null, zC), ZC && (yield)) : CC.setIndices([], null), CC.Zx && this.materialInfos && this.materialInfos.length > 1) {
            const zC = CC;
            zC.Zx = [];
            for (const CC of this.materialInfos) new NC.d(CC.materialIndex, CC.verticesStart, CC.verticesCount, CC.indexStart, CC.indexCount, zC)
          }
          return this
        }
        _update(CC, zC, ZC) {
          return this.positions && CC.updateVerticesData(bC.k.PositionKind, this.positions, zC, ZC), this.normals && CC.updateVerticesData(bC.k.NormalKind, this.normals, zC, ZC), this.tangents && CC.updateVerticesData(bC.k.TangentKind, this.tangents, zC, ZC), this.uvs && CC.updateVerticesData(bC.k.UVKind, this.uvs, zC, ZC), this.uvs2 && CC.updateVerticesData(bC.k.UV2Kind, this.uvs2, zC, ZC), this.uvs3 && CC.updateVerticesData(bC.k.UV3Kind, this.uvs3, zC, ZC), this.uvs4 && CC.updateVerticesData(bC.k.UV4Kind, this.uvs4, zC, ZC), this.uvs5 && CC.updateVerticesData(bC.k.UV5Kind, this.uvs5, zC, ZC), this.uvs6 && CC.updateVerticesData(bC.k.UV6Kind, this.uvs6, zC, ZC), this.colors && CC.updateVerticesData(bC.k.ColorKind, this.colors, zC, ZC), this.matricesIndices && CC.updateVerticesData(bC.k.MatricesIndicesKind, this.matricesIndices, zC, ZC), this.matricesWeights && CC.updateVerticesData(bC.k.MatricesWeightsKind, this.matricesWeights, zC, ZC), this.matricesIndicesExtra && CC.updateVerticesData(bC.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, zC, ZC), this.matricesWeightsExtra && CC.updateVerticesData(bC.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, zC, ZC), this.indices && CC.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length;
          const bC = wC.j.Eg[0],
            nC = wC.j.Eg[1];
          for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformCoordinatesToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
        }
        static _TransformVector3Normals(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length;
          const bC = wC.j.Eg[0],
            nC = wC.j.Eg[1];
          for (let fC = ZC; fC < ZC + QC; fC += 3) wC.r.FromArrayToRef(CC, fC, bC), wC.r.TransformNormalToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z
        }
        static _TransformVector4Normals(CC, zC) {
          let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.length;
          const bC = wC.j.Vector4[0],
            nC = wC.j.Vector4[1];
          for (let fC = ZC; fC < ZC + QC; fC += 4) wC.u.FromArrayToRef(CC, fC, bC), wC.u.TransformNormalToRef(bC, zC, nC), CC[fC] = nC.x, CC[fC + 1] = nC.y, CC[fC + 2] = nC.z, CC[fC + 3] = nC.w
        }
        static _FlipFaces(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC.length;
          for (let QC = zC; QC < zC + ZC; QC += 3) {
            const zC = CC[QC + 1];
            CC[QC + 1] = CC[QC + 2], CC[QC + 2] = zC
          }
        }
        transform(zC) {
          const ZC = zC.determinant() < 0;
          return this.positions && CC._TransformVector3Coordinates(this.positions, zC), this.normals && CC._TransformVector3Normals(this.normals, zC), this.tangents && CC._TransformVector4Normals(this.tangents, zC), ZC && this.indices && CC._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const zC = [];
          for (const ZC of this.materialInfos) {
            const QC = new CC;
            if (this.positions && (QC.positions = this.positions.slice(3 * ZC.verticesStart, 3 * (ZC.verticesCount + ZC.verticesStart))), this.normals && (QC.normals = this.normals.slice(3 * ZC.verticesStart, 3 * (ZC.verticesCount + ZC.verticesStart))), this.tangents && (QC.tangents = this.tangents.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.colors && (QC.colors = this.colors.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.uvs && (QC.uvs = this.uvs.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.uvs2 && (QC.uvs2 = this.uvs2.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.uvs3 && (QC.uvs3 = this.uvs3.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.uvs4 && (QC.uvs4 = this.uvs4.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.uvs5 && (QC.uvs5 = this.uvs5.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.uvs6 && (QC.uvs6 = this.uvs6.slice(2 * ZC.verticesStart, 2 * (ZC.verticesCount + ZC.verticesStart))), this.matricesIndices && (QC.matricesIndices = this.matricesIndices.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.matricesIndicesExtra && (QC.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.matricesWeights && (QC.matricesWeights = this.matricesWeights.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.matricesWeightsExtra && (QC.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ZC.verticesStart, 4 * (ZC.verticesCount + ZC.verticesStart))), this.indices) {
              QC.indices = [];
              for (let CC = ZC.indexStart; CC < ZC.indexStart + ZC.indexCount; CC++) QC.indices.push(this.indices[CC] - ZC.verticesStart)
            }
            const wC = new MC;
            wC.indexStart = 0, wC.indexCount = QC.indices ? QC.indices.length : 0, wC.materialIndex = ZC.materialIndex, wC.verticesStart = 0, wC.verticesCount = (QC.positions ? QC.positions.length : 0) / 3, QC.materialInfos = [wC], zC.push(QC)
          }
          return zC
        }
        merge(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const bC = Array.isArray(CC) ? CC.map((CC => ({
            vertexData: CC
          }))) : [{
            vertexData: CC
          }];
          return (0, FC.l)(this._mergeCoroutine(void 0, bC, zC, !1, ZC, QC, wC))
        }* _mergeCoroutine(zC, ZC) {
          let QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            wC = arguments.length > 3 ? arguments[3] : void 0,
            nC = arguments.length > 4 ? arguments[4] : void 0,
            fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            oC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let qC = ZC.map((CC => CC.vertexData)),
            FC = this;
          if (oC)
            for (const CC of qC) CC && (CC._validate(), !this.normals && CC.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && CC.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && CC.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && CC.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && CC.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && CC.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && CC.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && CC.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && CC.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && CC.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && CC.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && CC.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && CC.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const CC of qC)
            if (CC)
              if (oC) this.normals && !CC.normals && (CC.normals = new Float32Array(CC.positions.length)), this.tangents && !CC.tangents && (CC.tangents = new Float32Array(CC.positions.length / 3 * 4)), this.uvs && !CC.uvs && (CC.uvs = new Float32Array(CC.positions.length / 3 * 2)), this.uvs2 && !CC.uvs2 && (CC.uvs2 = new Float32Array(CC.positions.length / 3 * 2)), this.uvs3 && !CC.uvs3 && (CC.uvs3 = new Float32Array(CC.positions.length / 3 * 2)), this.uvs4 && !CC.uvs4 && (CC.uvs4 = new Float32Array(CC.positions.length / 3 * 2)), this.uvs5 && !CC.uvs5 && (CC.uvs5 = new Float32Array(CC.positions.length / 3 * 2)), this.uvs6 && !CC.uvs6 && (CC.uvs6 = new Float32Array(CC.positions.length / 3 * 2)), this.colors && !CC.colors && (CC.colors = new Float32Array(CC.positions.length / 3 * 4), CC.colors.fill(1)), this.matricesIndices && !CC.matricesIndices && (CC.matricesIndices = new Float32Array(CC.positions.length / 3 * 4)), this.matricesWeights && !CC.matricesWeights && (CC.matricesWeights = new Float32Array(CC.positions.length / 3 * 4)), this.matricesIndicesExtra && !CC.matricesIndicesExtra && (CC.matricesIndicesExtra = new Float32Array(CC.positions.length / 3 * 4)), this.matricesWeightsExtra && !CC.matricesWeightsExtra && (CC.matricesWeightsExtra = new Float32Array(CC.positions.length / 3 * 4));
              else if (CC._validate(), !this.normals !== !CC.normals || !this.tangents !== !CC.tangents || !this.uvs !== !CC.uvs || !this.uvs2 !== !CC.uvs2 || !this.uvs3 !== !CC.uvs3 || !this.uvs4 !== !CC.uvs4 || !this.uvs5 !== !CC.uvs5 || !this.uvs6 !== !CC.uvs6 || !this.colors !== !CC.colors || !this.matricesIndices !== !CC.matricesIndices || !this.matricesWeights !== !CC.matricesWeights || !this.matricesIndicesExtra !== !CC.matricesIndicesExtra || !this.matricesWeightsExtra !== !CC.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (fC) {
            let CC, QC = 0,
              wC = 0;
            const bC = [];
            let nC = null;
            const fC = [];
            for (const ZC of this.splitBasedOnMaterialID()) fC.push({
              vertexData: ZC,
              transform: zC
            });
            for (const zC of ZC)
              if (zC.vertexData)
                for (const CC of zC.vertexData.splitBasedOnMaterialID()) fC.push({
                  vertexData: CC,
                  transform: zC.transform
                });
            fC.sort(((CC, zC) => {
              const ZC = CC.vertexData.materialInfos ? CC.vertexData.materialInfos[0].materialIndex : 0,
                QC = zC.vertexData.materialInfos ? zC.vertexData.materialInfos[0].materialIndex : 0;
              return ZC > QC ? 1 : ZC === QC ? 0 : -1
            }));
            for (const zC of fC) {
              const ZC = zC.vertexData;
              if (CC = ZC.materialInfos ? ZC.materialInfos[0].materialIndex : 0, nC && nC.materialIndex === CC) nC.indexCount += ZC.indices.length, nC.verticesCount += ZC.positions.length / 3;
              else {
                const zC = new MC;
                zC.materialIndex = CC, zC.indexStart = QC, zC.indexCount = ZC.indices.length, zC.verticesStart = wC, zC.verticesCount = ZC.positions.length / 3, bC.push(zC), nC = zC
              }
              QC += ZC.indices.length, wC += ZC.positions.length / 3
            }
            const oC = fC.splice(0, 1)[0];
            FC = oC.vertexData, zC = oC.transform, qC = fC.map((CC => CC.vertexData)), ZC = fC, this.materialInfos = bC
          }
          const WC = qC.reduce(((CC, zC) => CC + (zC.indices?.length ?? 0)), FC.indices?.length ?? 0);
          let NC = nC || qC.some((CC => CC.indices === FC.indices)) ? FC.indices?.slice() : FC.indices;
          if (WC > 0) {
            let bC = NC?.length ?? 0;
            if (NC || (NC = new Array(WC)), NC.length !== WC) {
              if (Array.isArray(NC)) NC.length = WC;
              else {
                const CC = QC || NC instanceof Uint32Array ? new Uint32Array(WC) : new Uint16Array(WC);
                CC.set(NC), NC = CC
              }
              zC && zC.determinant() < 0 && CC._FlipFaces(NC, 0, bC)
            }
            let nC = FC.positions ? FC.positions.length / 3 : 0;
            for (const {
                vertexData: zC,
                transform: QC
              }
              of ZC)
              if (zC.indices) {
                for (let CC = 0; CC < zC.indices.length; CC++) NC[bC + CC] = zC.indices[CC] + nC;
                QC && QC.determinant() < 0 && CC._FlipFaces(NC, bC, zC.indices.length), nC += zC.positions.length / 3, bC += zC.indices.length, wC && (yield)
              }
          }
          return this.indices = NC, this.positions = CC._MergeElement(bC.k.PositionKind, FC.positions, zC, ZC.map((CC => [CC.vertexData.positions, CC.transform]))), wC && (yield), FC.normals && (this.normals = CC._MergeElement(bC.k.NormalKind, FC.normals, zC, ZC.map((CC => [CC.vertexData.normals, CC.transform]))), wC && (yield)), FC.tangents && (this.tangents = CC._MergeElement(bC.k.TangentKind, FC.tangents, zC, ZC.map((CC => [CC.vertexData.tangents, CC.transform]))), wC && (yield)), FC.uvs && (this.uvs = CC._MergeElement(bC.k.UVKind, FC.uvs, zC, ZC.map((CC => [CC.vertexData.uvs, CC.transform]))), wC && (yield)), FC.uvs2 && (this.uvs2 = CC._MergeElement(bC.k.UV2Kind, FC.uvs2, zC, ZC.map((CC => [CC.vertexData.uvs2, CC.transform]))), wC && (yield)), FC.uvs3 && (this.uvs3 = CC._MergeElement(bC.k.UV3Kind, FC.uvs3, zC, ZC.map((CC => [CC.vertexData.uvs3, CC.transform]))), wC && (yield)), FC.uvs4 && (this.uvs4 = CC._MergeElement(bC.k.UV4Kind, FC.uvs4, zC, ZC.map((CC => [CC.vertexData.uvs4, CC.transform]))), wC && (yield)), FC.uvs5 && (this.uvs5 = CC._MergeElement(bC.k.UV5Kind, FC.uvs5, zC, ZC.map((CC => [CC.vertexData.uvs5, CC.transform]))), wC && (yield)), FC.uvs6 && (this.uvs6 = CC._MergeElement(bC.k.UV6Kind, FC.uvs6, zC, ZC.map((CC => [CC.vertexData.uvs6, CC.transform]))), wC && (yield)), FC.colors && (this.colors = CC._MergeElement(bC.k.ColorKind, FC.colors, zC, ZC.map((CC => [CC.vertexData.colors, CC.transform]))), (void 0 !== FC.hasVertexAlpha || ZC.some((CC => void 0 !== CC.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = FC.hasVertexAlpha || ZC.some((CC => CC.vertexData.hasVertexAlpha))), wC && (yield)), FC.matricesIndices && (this.matricesIndices = CC._MergeElement(bC.k.MatricesIndicesKind, FC.matricesIndices, zC, ZC.map((CC => [CC.vertexData.matricesIndices, CC.transform]))), wC && (yield)), FC.matricesWeights && (this.matricesWeights = CC._MergeElement(bC.k.MatricesWeightsKind, FC.matricesWeights, zC, ZC.map((CC => [CC.vertexData.matricesWeights, CC.transform]))), wC && (yield)), FC.matricesIndicesExtra && (this.matricesIndicesExtra = CC._MergeElement(bC.k.MatricesIndicesExtraKind, FC.matricesIndicesExtra, zC, ZC.map((CC => [CC.vertexData.matricesIndicesExtra, CC.transform]))), wC && (yield)), FC.matricesWeightsExtra && (this.matricesWeightsExtra = CC._MergeElement(bC.k.MatricesWeightsExtraKind, FC.matricesWeightsExtra, zC, ZC.map((CC => [CC.vertexData.matricesWeightsExtra, CC.transform])))), this
        }
        static _MergeElement(zC, ZC, QC, wC) {
          const nC = wC.filter((CC => null !== CC[0] && void 0 !== CC[0]));
          if (!ZC && 0 == nC.length) return ZC;
          if (!ZC) return this._MergeElement(zC, nC[0][0], nC[0][1], nC.slice(1));
          const fC = nC.reduce(((CC, zC) => CC + zC[0].length), ZC.length),
            oC = zC === bC.k.PositionKind ? CC._TransformVector3Coordinates : zC === bC.k.NormalKind ? CC._TransformVector3Normals : zC === bC.k.TangentKind ? CC._TransformVector4Normals : () => {};
          if (ZC instanceof Float32Array) {
            const CC = new Float32Array(fC);
            CC.set(ZC), QC && oC(CC, QC, 0, ZC.length);
            let zC = ZC.length;
            for (const [ZC, QC] of nC) CC.set(ZC, zC), QC && oC(CC, QC, zC, ZC.length), zC += ZC.length;
            return CC
          } {
            const CC = new Array(fC);
            for (let QC = 0; QC < ZC.length; QC++) CC[QC] = ZC[QC];
            QC && oC(CC, QC, 0, ZC.length);
            let zC = ZC.length;
            for (const [ZC, QC] of nC) {
              for (let QC = 0; QC < ZC.length; QC++) CC[zC + QC] = ZC[QC];
              QC && oC(CC, QC, zC, ZC.length), zC += ZC.length
            }
            return CC
          }
        }
        _validate() {
          if (!this.positions) throw new WC.j("Positions are required", WC.f.MeshInvalidPositionsError);
          const CC = (CC, zC) => {
              const ZC = (0, bC.i)(CC);
              if (zC.length % ZC !== 0) throw new Error("The " + CC + "s array count must be a multiple of " + ZC);
              return zC.length / ZC
            },
            zC = CC(bC.k.PositionKind, this.positions),
            ZC = (ZC, QC) => {
              const wC = CC(ZC, QC);
              if (wC !== zC) throw new Error("The " + ZC + "s element count (" + wC + ") does not match the positions count (" + zC + ")")
            };
          this.normals && ZC(bC.k.NormalKind, this.normals), this.tangents && ZC(bC.k.TangentKind, this.tangents), this.uvs && ZC(bC.k.UVKind, this.uvs), this.uvs2 && ZC(bC.k.UV2Kind, this.uvs2), this.uvs3 && ZC(bC.k.UV3Kind, this.uvs3), this.uvs4 && ZC(bC.k.UV4Kind, this.uvs4), this.uvs5 && ZC(bC.k.UV5Kind, this.uvs5), this.uvs6 && ZC(bC.k.UV6Kind, this.uvs6), this.colors && ZC(bC.k.ColorKind, this.colors), this.matricesIndices && ZC(bC.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ZC(bC.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ZC(bC.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ZC(bC.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const zC = this.serialize();
          return CC.Parse(zC)
        }
        serialize() {
          const CC = {};
          if (this.positions && (CC.positions = Array.from(this.positions)), this.normals && (CC.normals = Array.from(this.normals)), this.tangents && (CC.tangents = Array.from(this.tangents)), this.uvs && (CC.uvs = Array.from(this.uvs)), this.uvs2 && (CC.uvs2 = Array.from(this.uvs2)), this.uvs3 && (CC.uvs3 = Array.from(this.uvs3)), this.uvs4 && (CC.uvs4 = Array.from(this.uvs4)), this.uvs5 && (CC.uvs5 = Array.from(this.uvs5)), this.uvs6 && (CC.uvs6 = Array.from(this.uvs6)), this.colors && (CC.colors = Array.from(this.colors), CC.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (CC.matricesIndices = Array.from(this.matricesIndices), CC.matricesIndicesExpanded = !0), this.matricesWeights && (CC.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (CC.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), CC.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (CC.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), CC.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            CC.materialInfos = [];
            for (const zC of this.materialInfos) {
              const ZC = {
                indexStart: zC.indexStart,
                indexCount: zC.indexCount,
                materialIndex: zC.materialIndex,
                verticesStart: zC.verticesStart,
                verticesCount: zC.verticesCount
              };
              CC.materialInfos.push(ZC)
            }
          }
          return CC
        }
        static ExtractFromMesh(zC, ZC, QC) {
          return CC._ExtractFrom(zC, ZC, QC)
        }
        static ExtractFromGeometry(zC, ZC, QC) {
          return CC._ExtractFrom(zC, ZC, QC)
        }
        static _ExtractFrom(zC, ZC, QC) {
          const wC = new CC;
          if (zC.isVerticesDataPresent(bC.k.PositionKind) && (wC.positions = zC.getVerticesData(bC.k.PositionKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.NormalKind) && (wC.normals = zC.getVerticesData(bC.k.NormalKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.TangentKind) && (wC.tangents = zC.getVerticesData(bC.k.TangentKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UVKind) && (wC.uvs = zC.getVerticesData(bC.k.UVKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UV2Kind) && (wC.uvs2 = zC.getVerticesData(bC.k.UV2Kind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UV3Kind) && (wC.uvs3 = zC.getVerticesData(bC.k.UV3Kind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UV4Kind) && (wC.uvs4 = zC.getVerticesData(bC.k.UV4Kind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UV5Kind) && (wC.uvs5 = zC.getVerticesData(bC.k.UV5Kind, ZC, QC)), zC.isVerticesDataPresent(bC.k.UV6Kind) && (wC.uvs6 = zC.getVerticesData(bC.k.UV6Kind, ZC, QC)), zC.isVerticesDataPresent(bC.k.ColorKind)) {
            const CC = zC.geometry || zC,
              nC = CC.getVertexBuffer(bC.k.ColorKind),
              fC = CC.getVerticesData(bC.k.ColorKind, ZC, QC);
            if (3 === nC.getSize()) {
              const CC = new Float32Array(4 * fC.length / 3);
              for (let zC = 0, ZC = 0; zC < fC.length; zC += 3, ZC += 4) CC[ZC] = fC[zC], CC[ZC + 1] = fC[zC + 1], CC[ZC + 2] = fC[zC + 2], CC[ZC + 3] = 1;
              wC.colors = CC
            } else {
              if (4 !== nC.getSize()) throw new Error(`Unexpected number of color components: ${nC.getSize()}`);
              wC.colors = fC
            }
          }
          return zC.isVerticesDataPresent(bC.k.MatricesIndicesKind) && (wC.matricesIndices = zC.getVerticesData(bC.k.MatricesIndicesKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.MatricesWeightsKind) && (wC.matricesWeights = zC.getVerticesData(bC.k.MatricesWeightsKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.MatricesIndicesExtraKind) && (wC.matricesIndicesExtra = zC.getVerticesData(bC.k.MatricesIndicesExtraKind, ZC, QC)), zC.isVerticesDataPresent(bC.k.MatricesWeightsExtraKind) && (wC.matricesWeightsExtra = zC.getVerticesData(bC.k.MatricesWeightsExtraKind, ZC, QC)), wC.indices = zC.CQC(ZC, QC), wC
        }
        static CreateRibbon(CC) {
          throw (0, nC.i)("ribbonBuilder")
        }
        static CreateBox(CC) {
          throw (0, nC.i)("boxBuilder")
        }
        static CreateTiledBox(CC) {
          throw (0, nC.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(CC) {
          throw (0, nC.i)("tiledPlaneBuilder")
        }
        static CreateSphere(CC) {
          throw (0, nC.i)("sphereBuilder")
        }
        static CreateCylinder(CC) {
          throw (0, nC.i)("cylinderBuilder")
        }
        static CreateTorus(CC) {
          throw (0, nC.i)("torusBuilder")
        }
        static CreateLineSystem(CC) {
          throw (0, nC.i)("linesBuilder")
        }
        static CreateDashedLines(CC) {
          throw (0, nC.i)("linesBuilder")
        }
        static CreateGround(CC) {
          throw (0, nC.i)("groundBuilder")
        }
        static CreateTiledGround(CC) {
          throw (0, nC.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(CC) {
          throw (0, nC.i)("groundBuilder")
        }
        static CreatePlane(CC) {
          throw (0, nC.i)("planeBuilder")
        }
        static CreateDisc(CC) {
          throw (0, nC.i)("discBuilder")
        }
        static CreatePolygon(CC, zC, ZC, QC, wC, bC, fC) {
          throw (0, nC.i)("polygonBuilder")
        }
        static CreateIcoSphere(CC) {
          throw (0, nC.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(CC) {
          throw (0, nC.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || wC.r.Up();
          throw (0, nC.i)("capsuleBuilder")
        }
        static CreateTorusKnot(CC) {
          throw (0, nC.i)("torusKnotBuilder")
        }
        static ComputeNormals(CC, zC, ZC, QC) {
          let bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC = !1,
            eC = !1,
            hC = !1,
            KC = !1,
            YC = 1,
            dC = 0,
            mC = null;
          QC && (vC = !!QC.facetNormals, eC = !!QC.facetPositions, hC = !!QC.facetPartitioning, YC = !0 === QC.useRightHandedSystem ? -1 : 1, dC = QC.ratio || 0, KC = !!QC.depthSort, mC = QC.distanceTo, KC && void 0 === mC && (mC = wC.r.Zero()));
          let HC = 0,
            EC = 0,
            lC = 0,
            XC = 0;
          for (hC && QC && QC.bbSize && (HC = QC.subDiv.X * dC / QC.bbSize.x, EC = QC.subDiv.Y * dC / QC.bbSize.y, lC = QC.subDiv.Z * dC / QC.bbSize.z, XC = QC.subDiv.max * QC.subDiv.max, QC.facetPartitioning.length = 0), bC = 0; bC < CC.length; bC++) ZC[bC] = 0;
          const cC = zC.length / 3 | 0;
          for (bC = 0; bC < cC; bC++) {
            if (pC = 3 * zC[3 * bC], PC = pC + 1, GC = pC + 2, RC = 3 * zC[3 * bC + 1], AC = RC + 1, xC = RC + 2, JC = 3 * zC[3 * bC + 2], IC = JC + 1, iC = JC + 2, nC = CC[pC] - CC[RC], fC = CC[PC] - CC[AC], oC = CC[GC] - CC[xC], qC = CC[JC] - CC[RC], FC = CC[IC] - CC[AC], WC = CC[iC] - CC[xC], NC = YC * (fC * WC - oC * FC), MC = YC * (oC * qC - nC * WC), gC = YC * (nC * FC - fC * qC), SC = Math.sqrt(NC * NC + MC * MC + gC * gC), SC = 0 === SC ? 1 : SC, NC /= SC, MC /= SC, gC /= SC, vC && QC && (QC.facetNormals[bC].x = NC, QC.facetNormals[bC].y = MC, QC.facetNormals[bC].z = gC), eC && QC && (QC.facetPositions[bC].x = (CC[pC] + CC[RC] + CC[JC]) / 3, QC.facetPositions[bC].y = (CC[PC] + CC[AC] + CC[IC]) / 3, QC.facetPositions[bC].z = (CC[GC] + CC[xC] + CC[iC]) / 3), hC && QC) {
              const zC = Math.floor((QC.facetPositions[bC].x - QC.bInfo.minimum.x * dC) * HC),
                ZC = Math.floor((QC.facetPositions[bC].y - QC.bInfo.minimum.y * dC) * EC),
                wC = Math.floor((QC.facetPositions[bC].z - QC.bInfo.minimum.z * dC) * lC),
                nC = Math.floor((CC[pC] - QC.bInfo.minimum.x * dC) * HC),
                fC = Math.floor((CC[PC] - QC.bInfo.minimum.y * dC) * EC),
                oC = Math.floor((CC[GC] - QC.bInfo.minimum.z * dC) * lC),
                qC = Math.floor((CC[RC] - QC.bInfo.minimum.x * dC) * HC),
                FC = Math.floor((CC[AC] - QC.bInfo.minimum.y * dC) * EC),
                WC = Math.floor((CC[xC] - QC.bInfo.minimum.z * dC) * lC),
                NC = Math.floor((CC[JC] - QC.bInfo.minimum.x * dC) * HC),
                MC = Math.floor((CC[IC] - QC.bInfo.minimum.y * dC) * EC),
                gC = Math.floor((CC[iC] - QC.bInfo.minimum.z * dC) * lC),
                SC = nC + QC.subDiv.max * fC + XC * oC,
                vC = qC + QC.subDiv.max * FC + XC * WC,
                eC = NC + QC.subDiv.max * MC + XC * gC,
                hC = zC + QC.subDiv.max * ZC + XC * wC;
              QC.facetPartitioning[hC] = QC.facetPartitioning[hC] ? QC.facetPartitioning[hC] : [], QC.facetPartitioning[SC] = QC.facetPartitioning[SC] ? QC.facetPartitioning[SC] : [], QC.facetPartitioning[vC] = QC.facetPartitioning[vC] ? QC.facetPartitioning[vC] : [], QC.facetPartitioning[eC] = QC.facetPartitioning[eC] ? QC.facetPartitioning[eC] : [], QC.facetPartitioning[SC].push(bC), vC != SC && QC.facetPartitioning[vC].push(bC), eC != vC && eC != SC && QC.facetPartitioning[eC].push(bC), hC != SC && hC != vC && hC != eC && QC.facetPartitioning[hC].push(bC)
            }
            if (KC && QC && QC.facetPositions) {
              const CC = QC.depthSortedFacets[bC];
              CC.ind = 3 * bC, CC.sqDistance = wC.r.DistanceSquared(QC.facetPositions[bC], mC)
            }
            ZC[pC] += NC, ZC[PC] += MC, ZC[GC] += gC, ZC[RC] += NC, ZC[AC] += MC, ZC[xC] += gC, ZC[JC] += NC, ZC[IC] += MC, ZC[iC] += gC
          }
          for (bC = 0; bC < ZC.length / 3; bC++) NC = ZC[3 * bC], MC = ZC[3 * bC + 1], gC = ZC[3 * bC + 2], SC = Math.sqrt(NC * NC + MC * MC + gC * gC), SC = 0 === SC ? 1 : SC, NC /= SC, MC /= SC, gC /= SC, ZC[3 * bC] = NC, ZC[3 * bC + 1] = MC, ZC[3 * bC + 2] = gC
        }
        static _ComputeSides(zC, ZC, QC, bC, nC, fC, oC) {
          const qC = QC.length,
            FC = bC.length;
          let WC, NC;
          switch (zC = zC || CC.DEFAULTSIDE) {
            case CC.FRONTSIDE:
              break;
            case CC.BACKSIDE:
              for (WC = 0; WC < qC; WC += 3) {
                const CC = QC[WC];
                QC[WC] = QC[WC + 2], QC[WC + 2] = CC
              }
              for (NC = 0; NC < FC; NC++) bC[NC] = -bC[NC];
              break;
            case CC.DOUBLESIDE: {
              const CC = ZC.length,
                zC = CC / 3;
              for (let QC = 0; QC < CC; QC++) ZC[CC + QC] = ZC[QC];
              for (WC = 0; WC < qC; WC += 3) QC[WC + qC] = QC[WC + 2] + zC, QC[WC + 1 + qC] = QC[WC + 1] + zC, QC[WC + 2 + qC] = QC[WC] + zC;
              for (NC = 0; NC < FC; NC++) bC[FC + NC] = -bC[NC];
              const MC = nC.length;
              let gC;
              for (gC = 0; gC < MC; gC++) nC[gC + MC] = nC[gC];
              for (fC = fC || new wC.u(0, 0, 1, 1), oC = oC || new wC.u(0, 0, 1, 1), gC = 0, WC = 0; WC < MC / 2; WC++) nC[gC] = fC.x + (fC.z - fC.x) * nC[gC], nC[gC + 1] = fC.y + (fC.w - fC.y) * nC[gC + 1], nC[gC + MC] = oC.x + (oC.z - oC.x) * nC[gC + MC], nC[gC + MC + 1] = oC.y + (oC.w - oC.y) * nC[gC + MC + 1], gC += 2;
              break
            }
          }
        }
        static Parse(zC) {
          const ZC = new CC,
            QC = zC.positions;
          QC && ZC.set(QC, bC.k.PositionKind);
          const wC = zC.normals;
          wC && ZC.set(wC, bC.k.NormalKind);
          const nC = zC.tangents;
          nC && ZC.set(nC, bC.k.TangentKind);
          const oC = zC.uvs;
          oC && ZC.set(oC, bC.k.UVKind);
          const qC = zC.uvs2;
          qC && ZC.set(qC, bC.k.UV2Kind);
          const FC = zC.uvs3;
          FC && ZC.set(FC, bC.k.UV3Kind);
          const WC = zC.uvs4;
          WC && ZC.set(WC, bC.k.UV4Kind);
          const NC = zC.uvs5;
          NC && ZC.set(NC, bC.k.UV5Kind);
          const gC = zC.uvs6;
          gC && ZC.set(gC, bC.k.UV6Kind);
          const SC = zC.colors;
          SC && (ZC.set(fC.g.CheckColors4(SC, QC.length / 3), bC.k.ColorKind), void 0 !== zC.hasVertexAlpha && (ZC.hasVertexAlpha = zC.hasVertexAlpha));
          const pC = zC.matricesIndices;
          pC && ZC.set(pC, bC.k.MatricesIndicesKind);
          const PC = zC.matricesWeights;
          PC && ZC.set(PC, bC.k.MatricesWeightsKind);
          const GC = zC.indices;
          GC && (ZC.indices = GC);
          const RC = zC.materialInfos;
          if (RC) {
            ZC.materialInfos = [];
            for (const CC of RC) {
              const zC = new MC;
              zC.indexCount = CC.indexCount, zC.indexStart = CC.indexStart, zC.verticesCount = CC.verticesCount, zC.verticesStart = CC.verticesStart, zC.materialIndex = CC.materialIndex, ZC.materialInfos.push(zC)
            }
          }
          return ZC
        }
        static ImportVertexData(zC, ZC) {
          const QC = CC.Parse(zC);
          ZC.setAllVerticesData(QC, zC.updatable)
        }
      }, (() => {
        const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [qC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZC = [qC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gC = [qC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], SC = [qC.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, QC.j)(CC, null, zC, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: CC => "_TransformVector3Coordinates" in CC,
            get: CC => CC._TransformVector3Coordinates
          },
          metadata: wC
        }, null, pC), (0, QC.j)(CC, null, ZC, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: CC => "_TransformVector3Normals" in CC,
            get: CC => CC._TransformVector3Normals
          },
          metadata: wC
        }, null, pC), (0, QC.j)(CC, null, gC, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: CC => "_TransformVector4Normals" in CC,
            get: CC => CC._TransformVector4Normals
          },
          metadata: wC
        }, null, pC), (0, QC.j)(CC, null, SC, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: CC => "_FlipFaces" in CC,
            get: CC => CC._FlipFaces
          },
          metadata: wC
        }, null, pC), wC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wC
        })
      })(), CC.FRONTSIDE = ((0, QC.n)(CC, pC), 0), CC.BACKSIDE = 1, CC.DOUBLESIDE = 2, CC.DEFAULTSIDE = 0, CC._UniqueIdGenerator = 0, CC
    })()
  },
  40308: (CC, zC, ZC) => {
    var QC = ZC(36963),
      wC = ZC(38507),
      bC = ZC(40127),
      nC = ZC(40224),
      fC = ZC(39959);
    const oC = "bakedVertexAnimationSettingsInstanced";

    function qC(CC) {
      const zC = CC.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return zC instanceof Float32Array || zC instanceof Uint16Array
    }

    function FC(CC, zC, ZC, QC) {
      ZC.Q_(Number.POSITIVE_INFINITY), QC.Q_(Number.NEGATIVE_INFINITY);
      for (let wC = 0; wC < 3 * zC; wC += 3) {
        const zC = CC[wC],
          bC = CC[wC + 1],
          nC = CC[wC + 2];
        zC < ZC.x && (ZC.x = zC), bC < ZC.y && (ZC.y = bC), nC < ZC.z && (ZC.z = nC), zC > QC.x && (QC.x = zC), bC > QC.y && (QC.y = bC), nC > QC.z && (QC.z = nC)
      }
    }

    function WC(CC, zC, ZC) {
      ZC && (CC.x -= CC.x * ZC.x + ZC.y, CC.y -= CC.y * ZC.x + ZC.y, CC.z -= CC.z * ZC.x + ZC.y, zC.x += zC.x * ZC.x + ZC.y, zC.y += zC.y * ZC.x + ZC.y, zC.z += zC.z * ZC.x + ZC.y)
    }

    function NC(CC, zC, ZC, wC, bC) {
      const nC = QC.j.Eg[7],
        fC = QC.j.Eg[8];
      for (let oC = 0; oC < 2; ++oC)
        for (let qC = 0; qC < 2; ++qC)
          for (let FC = 0; FC < 2; ++FC) nC.set(oC ? zC.x : CC.x, qC ? zC.y : CC.y, FC ? zC.z : CC.z), QC.r.TransformCoordinatesToRef(nC, ZC, fC), wC.minimizeInPlace(fC), bC.maximizeInPlace(fC)
    }

    function MC(CC, zC, ZC, wC, bC) {
      const nC = QC.j.Eg[7];
      for (let fC = 0; fC < 3 * zC; fC += 3) QC.r.TransformCoordinatesFromFloatsToRef(CC[fC], CC[fC + 1], CC[fC + 2], ZC, nC), wC.minimizeInPlace(nC), bC.maximizeInPlace(nC)
    }
    let gC = !1;
    gC || (gC = !0, nC.b.prototype.thinInstanceAdd = function(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Km().mg().getCaps().instancedArrays) return wC.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(CC) ? CC.length : 1);
      const ZC = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(CC))
        for (let QC = 0; QC < CC.length; ++QC) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, CC[QC], QC === CC.length - 1 && zC);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, CC, zC);
      return ZC
    }, nC.b.prototype.thinInstanceAddSelf = function() {
      let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(QC.b.IdentityReadOnly, CC)
    }, nC.b.prototype.thinInstanceRegisterAttribute = function(CC, zC) {
      CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this.removeVerticesData(CC), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[CC] = zC, this._userThinInstanceBuffersStorage.sizes[CC] = zC * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[CC] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[CC]), this._userThinInstanceBuffersStorage.vertexBuffers[CC] = new fC.k(this.mg(), this._userThinInstanceBuffersStorage.data[CC], CC, !0, !1, zC, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[CC])
    }, nC.b.prototype.thinInstanceSetMatrixAt = function(CC, zC) {
      let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || CC >= this._thinInstanceDataStorage.instancesCount) return !1;
      const QC = this._thinInstanceDataStorage.matrixData;
      return zC.copyToArray(QC, 16 * CC), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[CC] = zC), ZC && (this.v_("matrix"), this.Xg || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, nC.b.prototype.thinInstanceSetAttributeAt = function(CC, zC, ZC) {
      let QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[CC] || zC >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(CC, 0), this._userThinInstanceBuffersStorage.data[CC].set(ZC, zC * this._userThinInstanceBuffersStorage.strides[CC]), QC && this.v_(CC), !0)
    }, Object.defineProperty(nC.b.prototype, "N_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(CC) {
        const zC = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        CC <= (zC ? zC.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = CC)
      },
      enumerable: !0,
      configurable: !0
    }), nC.b.prototype._thinInstanceCreateMatrixBuffer = function(CC, zC) {
      let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const QC = new fC.c(this.mg(), zC, !ZC, 16, !1, !0);
      for (let wC = 0; wC < 4; wC++) this.setVerticesBuffer(QC.createVertexBuffer(CC + wC, 4 * wC, 4));
      return QC
    }, nC.b.prototype.E_ = function(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ZC = ZC || 16, "matrix" === CC) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = zC ? zC.length : 32 * ZC, this._thinInstanceDataStorage.matrixData = zC, this._thinInstanceDataStorage.worldMatrices = null, null !== zC ? (this._thinInstanceDataStorage.instancesCount = zC.length / ZC, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", zC, QC), this.Xg || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.Xg || this.refreshBoundingInfo());
      else if ("previousMatrix" === CC) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = zC, null !== zC && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", zC, QC));
      else if ("splatIndex" === CC && zC) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = zC.length / ZC, this._userThinInstanceBuffersStorage.data[CC] = zC, this._userThinInstanceBuffersStorage.strides[CC] = ZC, this._userThinInstanceBuffersStorage.sizes[CC] = zC.length;
        const QC = new fC.c(this.mg(), zC, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = QC;
        for (let zC = 0; zC < 4; zC++) this.setVerticesBuffer(QC.createVertexBuffer(CC + zC, 4 * zC, 4))
      } else CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), null === zC ? this._userThinInstanceBuffersStorage?.data[CC] && (this.removeVerticesData(CC), delete this._userThinInstanceBuffersStorage.data[CC], delete this._userThinInstanceBuffersStorage.strides[CC], delete this._userThinInstanceBuffersStorage.sizes[CC], delete this._userThinInstanceBuffersStorage.vertexBuffers[CC]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[CC] = zC, this._userThinInstanceBuffersStorage.strides[CC] = ZC, this._userThinInstanceBuffersStorage.sizes[CC] = zC.length, this._userThinInstanceBuffersStorage.vertexBuffers[CC] = new fC.k(this.mg(), zC, CC, !QC, !1, ZC, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[CC]))
    }, nC.b.prototype.v_ = function(CC) {
      "matrix" === CC ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(CC), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === CC ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(CC), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === CC ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[CC], 0, this._thinInstanceDataStorage.instancesCount) : (CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[CC] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[CC].isUpdatable() && this._thinInstanceRecreateBuffer(CC), this._userThinInstanceBuffersStorage.vertexBuffers[CC].updateDirectly(this._userThinInstanceBuffersStorage.data[CC], 0)))
    }, nC.b.prototype.thinInstancePartialBufferUpdate = function(CC, zC, ZC) {
      if ("matrix" === CC) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof zC ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ZC * Float32Array.BYTES_PER_ELEMENT, 16 * zC), 16 * ZC) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(zC, ZC));
      else if (CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[CC]) {
        const QC = this._userThinInstanceBuffersStorage.vertexBuffers[CC];
        if ("number" === typeof zC) {
          const QC = new Float32Array(this._userThinInstanceBuffersStorage.data[CC].buffer, this._userThinInstanceBuffersStorage.data[CC].byteOffset + ZC * this._userThinInstanceBuffersStorage.strides[CC] * Float32Array.BYTES_PER_ELEMENT, zC * this._userThinInstanceBuffersStorage.strides[CC]);
          this._userThinInstanceBuffersStorage.vertexBuffers[CC].updateDirectly(QC, ZC * this._userThinInstanceBuffersStorage.strides[CC])
        } else QC.updateDirectly(zC, ZC)
      }
    }, nC.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const CC = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let zC = 0; zC < this._thinInstanceDataStorage.instancesCount; ++zC) this._thinInstanceDataStorage.worldMatrices[zC] = QC.b.FromArray(CC, 16 * zC)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, nC.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const nC = this._thinInstanceDataStorage.boundingVectors;
      if (CC || !this.rawBoundingInfo) {
        if (nC.length = 0, wC && function(CC, zC, ZC) {
            const wC = CC._userThinInstanceBuffersStorage,
              nC = wC?.data[oC],
              gC = wC?.strides[oC];
            if (!nC || !gC || gC < 4 || !qC(CC)) return !1;
            const SC = CC._thinInstanceDataStorage.matrixData;
            if (!SC) return !1;
            const pC = {},
              PC = QC.j.Vector4[0],
              GC = QC.j.Eg[1],
              RC = QC.j.Eg[2],
              AC = QC.j.Eg[3],
              xC = QC.j.Eg[4],
              JC = QC.j.Eg[5],
              IC = QC.j.Eg[6],
              iC = QC.j.Matrix[2],
              vC = CC.geometry ? CC.geometry.boundingBias : null,
              eC = CC.getTotalVertices();
            GC.Q_(Number.POSITIVE_INFINITY), RC.Q_(Number.NEGATIVE_INFINITY), AC.Q_(Number.POSITIVE_INFINITY), xC.Q_(Number.NEGATIVE_INFINITY);
            for (let bC = 0; bC < CC._thinInstanceDataStorage.instancesCount; ++bC) {
              const zC = bC * gC;
              PC.set(nC[zC], nC[zC + 1], nC[zC + 2], nC[zC + 3]);
              const wC = CC._getData({
                applyMorph: ZC,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: PC,
                updatePositionsArray: !1,
                cache: pC
              }, null, fC.k.PositionKind);
              if (!wC) return !1;
              FC(wC, eC, JC, IC), WC(JC, IC, vC), GC.minimizeInPlace(JC), RC.maximizeInPlace(IC), QC.b.FromArrayToRef(SC, 16 * bC, iC), vC ? NC(JC, IC, iC, AC, xC) : MC(wC, eC, iC, AC, xC)
            }
            return !(!isFinite(GC.x) || !isFinite(AC.x)) && (CC.WE().reConstruct(AC, xC), CC.rawBoundingInfo = new bC.d(GC, RC), function(CC, zC) {
              CC.length = 0;
              for (let ZC = 0; ZC < zC.boundingBox.vectors.length; ++ZC) CC.push(zC.boundingBox.vectors[ZC].clone())
            }(zC, CC.rawBoundingInfo), CC._updateBoundingInfo(), !0)
          }(this, nC, ZC)) return;
        wC && this.bakedVertexAnimationManager?.isEnabled && qC(this) ? this.refreshBoundingInfo({
          applySkeleton: zC,
          applyMorph: ZC,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(zC, ZC);
        const CC = this.WE();
        this.rawBoundingInfo = new bC.d(CC.minimum, CC.maximum)
      }
      const gC = this.WE(),
        SC = this._thinInstanceDataStorage.matrixData;
      if (0 === nC.length)
        for (let QC = 0; QC < gC.boundingBox.vectors.length; ++QC) nC.push(gC.boundingBox.vectors[QC].clone());
      QC.j.Eg[0].Q_(Number.POSITIVE_INFINITY), QC.j.Eg[1].Q_(Number.NEGATIVE_INFINITY);
      for (let bC = 0; bC < this._thinInstanceDataStorage.instancesCount; ++bC) {
        QC.b.FromArrayToRef(SC, 16 * bC, QC.j.Matrix[0]);
        for (let CC = 0; CC < nC.length; ++CC) QC.r.TransformCoordinatesToRef(nC[CC], QC.j.Matrix[0], QC.j.Eg[2]), QC.j.Eg[0].minimizeInPlace(QC.j.Eg[2]), QC.j.Eg[1].maximizeInPlace(QC.j.Eg[2])
      }
      gC.reConstruct(QC.j.Eg[0], QC.j.Eg[1]), this._updateBoundingInfo()
    }, nC.b.prototype._thinInstanceRecreateBuffer = function(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === CC ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, zC)) : "previousMatrix" === CC ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, zC)) : (CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[CC]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[CC] = new fC.k(this.mg(), this._userThinInstanceBuffersStorage.data[CC], CC, !zC, !1, this._userThinInstanceBuffersStorage.strides[CC], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[CC]))
    }, nC.b.prototype._thinInstanceUpdateBufferSize = function(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      CC === fC.k.ColorKind && (CC = fC.k.ColorInstanceKind);
      const ZC = "matrix" === CC;
      if (!ZC && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[CC])) return;
      const QC = ZC ? 16 : this._userThinInstanceBuffersStorage.strides[CC],
        wC = ZC ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[CC];
      let bC = ZC ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[CC];
      const nC = (this._thinInstanceDataStorage.instancesCount + zC) * QC;
      let oC = wC;
      for (; oC < nC;) oC *= 2;
      if (!bC || wC != oC) {
        if (bC) {
          const CC = new Float32Array(oC);
          CC.set(bC, 0), bC = CC
        } else bC = new Float32Array(oC);
        ZC ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", bC, !1), this._thinInstanceDataStorage.matrixData = bC, this._thinInstanceDataStorage.matrixBufferSize = oC, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", bC, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[CC]?.dispose(), this._userThinInstanceBuffersStorage.data[CC] = bC, this._userThinInstanceBuffersStorage.sizes[CC] = oC, this._userThinInstanceBuffersStorage.vertexBuffers[CC] = new fC.k(this.mg(), bC, CC, !0, !1, QC, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[CC]))
      }
    }, nC.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, nC.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40272: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => GC,
      e: () => SC
    });
    var QC, wC, bC, nC, fC = ZC(39811),
      oC = ZC(39818),
      qC = ZC(39842),
      FC = ZC(36987),
      WC = ZC(36963),
      NC = ZC(40046),
      MC = ZC(37002),
      gC = ZC(39694);
    let SC = (() => {
      var CC;
      let zC, ZC, QC, wC, bC, nC, MC, gC, SC, pC = NC.d,
        PC = [],
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        vC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [];
      return CC = class extends pC {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(zC) {
          this._billboardMode !== zC && (this._billboardMode = zC, this._cache.useBillboardPosition = 0 !== (this._billboardMode & CC.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(CC) {
          this._infiniteDistance !== CC && (this._infiniteDistance = CC)
        }
        constructor(zC) {
          let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(zC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new WC.r(0, 0, 1), this._up = new WC.r(0, 1, 0), this._right = new WC.r(1, 0, 0), this._position = (0, fC.n)(this, PC, WC.r.Zero()), this._rotation = ((0, fC.n)(this, GC), (0, fC.n)(this, RC, WC.r.Zero())), this._rotationQuaternion = ((0, fC.n)(this, AC), (0, fC.n)(this, xC, null)), this._scaling = ((0, fC.n)(this, JC), (0, fC.n)(this, IC, WC.r.One())), this._transformToBoneReferal = ((0, fC.n)(this, iC), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, fC.n)(this, vC, CC.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, fC.n)(this, eC), (0, fC.n)(this, hC, 1)), this._infiniteDistance = ((0, fC.n)(this, KC), (0, fC.n)(this, YC, !1)), this.ignoreNonUniformScaling = ((0, fC.n)(this, dC), (0, fC.n)(this, mC, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, fC.n)(this, HC), (0, fC.n)(this, EC, !1)), this._poseMatrix = ((0, fC.n)(this, lC), null), this._localMatrix = WC.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = WC.r.Zero(), this._absoluteScaling = WC.r.Zero(), this._absoluteRotationQuaternion = WC.f.Identity(), this._pivotMatrix = WC.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new FC.d, this._nonUniformScaling = !1, ZC && this.Km().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(CC) {
          this._position = CC, this._markAsDirtyInternal()
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
        set rotation(CC) {
          this._rotation = CC, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get sq() {
          return this._scaling
        }
        set sq(CC) {
          this._scaling = CC, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(CC) {
          this._rotationQuaternion = CC, CC && this._rotation.Q_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return WC.r.TransformNormalFromFloatsToRef(0, 0, this.Km().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return WC.r.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return WC.r.TransformNormalFromFloatsToRef(this.Km().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(CC) {
          return this._poseMatrix ? (this._poseMatrix.Av(CC), this) : (this._poseMatrix = CC.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = WC.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const zC = this._cache;
          return this._billboardMode === zC.billboardMode && this._billboardMode === CC.BILLBOARDMODE_NONE && (!zC.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const CC = this._cache;
          CC.localMatrixUpdated = !1, CC.billboardMode = -1, CC.infiniteDistance = !1, CC.useBillboardPosition = !1
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
        setPreTransformMatrix(CC) {
          return this.setPivotMatrix(CC, !1)
        }
        setPivotMatrix(CC) {
          let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.Av(CC), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = zC, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = WC.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            zC = arguments.length > 1 ? arguments[1] : void 0,
            ZC = arguments.length > 2 ? arguments[2] : void 0;
          const QC = this.clone("Clone of " + (this.name || this.id), CC || this.parent, !0);
          QC && ZC && ZC(this, QC);
          for (const wC of this.getChildTransformNodes(!0)) wC.instantiateHierarchy(QC, zC, ZC);
          return QC
        }
        gH() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return CC ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Q_(0), this._rotationQuaternion = this._rotationQuaternion || WC.f.Identity(), CC.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = CC, this._absolutePosition.L_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get EnC() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(CC) {
          if (!CC) return this;
          let zC, ZC, QC;
          if (void 0 === CC.x) {
            if (arguments.length < 3) return this;
            zC = arguments[0], ZC = arguments[1], QC = arguments[2]
          } else zC = CC.x, ZC = CC.y, QC = CC.z;
          if (this.parent) {
            const CC = WC.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(CC), WC.r.TransformCoordinatesFromFloatsToRef(zC, ZC, QC, CC, this.position)
          } else this.position.x = zC, this.position.y = ZC, this.position.z = QC;
          return this._absolutePosition.Av(CC), this
        }
        setPositionWithLocalVector(CC) {
          return this.computeWorldMatrix(), this.position = WC.r.TransformNormal(CC, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const CC = WC.j.Matrix[0];
          return this._localMatrix.invertToRef(CC), WC.r.TransformNormal(this.position, CC)
        }
        locallyTranslate(CC) {
          return this.computeWorldMatrix(!0), this.position = WC.r.TransformCoordinates(CC, this._localMatrix), this
        }
        lookAt(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const nC = CC._LookAtVectorCache,
            fC = 0 === bC ? this.position : this.getAbsolutePosition();
          if (zC.subtractToRef(fC, nC), this.setDirection(nC, ZC, QC, wC), 1 === bC && this.parent)
            if (this.rotationQuaternion) {
              const CC = WC.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(CC);
              const zC = WC.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(zC), zC.invert(), CC.multiplyToRef(zC, CC), this.rotationQuaternion.fromRotationMatrix(CC)
            } else {
              const CC = WC.j.Quaternion[0];
              WC.f.FromEulerVectorToRef(this.rotation, CC);
              const zC = WC.j.Matrix[0];
              CC.toRotationMatrix(zC);
              const ZC = WC.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ZC), ZC.invert(), zC.multiplyToRef(ZC, zC), CC.fromRotationMatrix(zC), CC.toEulerAnglesToRef(this.rotation)
            } return this
        }
        yB(CC) {
          const zC = WC.r.Zero();
          return this.getDirectionToRef(CC, zC), zC
        }
        getDirectionToRef(CC, zC) {
          return WC.r.TransformNormalToRef(CC, this.getWorldMatrix(), zC), this
        }
        setDirection(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const wC = -Math.atan2(CC.z, CC.x) + Math.PI / 2,
            bC = Math.sqrt(CC.x * CC.x + CC.z * CC.z),
            nC = -Math.atan2(CC.y, bC);
          return this.rotationQuaternion ? WC.f.RotationYawPitchRollToRef(wC + zC, nC + ZC, QC, this.rotationQuaternion) : (this.rotation.x = nC + ZC, this.rotation.y = wC + zC, this.rotation.z = QC), this
        }
        setPivotPoint(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Km().getRenderId() && this.computeWorldMatrix(!0);
          const ZC = this.getWorldMatrix();
          if (1 == zC) {
            const zC = WC.j.Matrix[0];
            ZC.invertToRef(zC), CC = WC.r.TransformCoordinates(CC, zC)
          }
          return this.setPivotMatrix(WC.b.Translation(-CC.x, -CC.y, -CC.z), !0)
        }
        getPivotPoint() {
          const CC = WC.r.Zero();
          return this.getPivotPointToRef(CC), CC
        }
        getPivotPointToRef(CC) {
          return CC.x = -this._pivotMatrix.m[12], CC.y = -this._pivotMatrix.m[13], CC.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const CC = WC.r.Zero();
          return this.getAbsolutePivotPointToRef(CC), CC
        }
        getAbsolutePivotPointToRef(CC) {
          return this.getPivotPointToRef(CC), WC.r.TransformCoordinatesToRef(CC, this.getWorldMatrix(), CC), this
        }
        YzC(CC) {
          if (this._isDirty) return this;
          if (this._children)
            for (const zC of this._children) zC.YzC(CC);
          return super.YzC(CC)
        }
        setParent(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!zC && !this.parent) return this;
          const wC = WC.j.Quaternion[0],
            bC = WC.j.Eg[0],
            nC = WC.j.Eg[1],
            fC = WC.j.Matrix[1];
          WC.b.IdentityToRef(fC);
          const oC = WC.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let qC = this.rotationQuaternion;
          return qC || (qC = CC._TmpRotation, WC.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, qC)), WC.b.ComposeToRef(this.sq, qC, this.position, oC), this.parent && oC.multiplyToRef(this.parent.computeWorldMatrix(!0), oC), zC && (zC.computeWorldMatrix(!0).invertToRef(fC), oC.multiplyToRef(fC, oC)), oC.decompose(nC, wC, bC, ZC ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.Av(wC) : wC.toEulerAnglesToRef(this.rotation), this.sq.Av(nC), this.position.Av(bC), this.parent = zC, QC && this.setPivotMatrix(WC.b.Identity()), this
        }
        addChild(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return CC.setParent(this, zC), this
        }
        removeChild(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return CC.parent !== this || CC.setParent(null, zC), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(CC) {
          return this._nonUniformScaling !== CC && (this._nonUniformScaling = CC, !0)
        }
        attachToBone(CC, zC) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = zC, this.parent = CC, CC.getSkeleton().prepare(!0), CC.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = CC ? this._currentParentWhenAttachingToBone : null, this) : (CC && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(zC, ZC, QC) {
          let wC;
          if (zC.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Q_(0)), QC && 0 !== QC) {
            if (this.parent) {
              const CC = this.parent.getWorldMatrix(),
                QC = WC.j.Matrix[0];
              CC.invertToRef(QC), zC = WC.r.TransformNormal(zC, QC), CC.determinant() < 0 && (ZC *= -1)
            }
            wC = WC.f.RotationAxisToRef(zC, ZC, CC._RotationAxisCache), wC.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else wC = WC.f.RotationAxisToRef(zC, ZC, CC._RotationAxisCache), this.rotationQuaternion.multiplyToRef(wC, this.rotationQuaternion);
          return this
        }
        rotateAround(CC, zC, ZC) {
          zC.normalize(), this.rotationQuaternion || (this.rotationQuaternion = WC.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Q_(0));
          const QC = WC.j.Eg[0],
            wC = WC.j.Eg[1],
            bC = WC.j.Eg[2],
            nC = WC.j.Quaternion[0],
            fC = WC.j.Matrix[0],
            oC = WC.j.Matrix[1],
            qC = WC.j.Matrix[2],
            FC = WC.j.Matrix[3];
          return CC.subtractToRef(this.position, QC), WC.b.TranslationToRef(QC.x, QC.y, QC.z, fC), WC.b.TranslationToRef(-QC.x, -QC.y, -QC.z, oC), WC.b.RotationAxisToRef(zC, ZC, qC), oC.multiplyToRef(qC, FC), FC.multiplyToRef(fC, FC), FC.decompose(wC, nC, bC), this.position.addInPlace(bC), nC.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(CC, zC, ZC) {
          const QC = CC.scale(zC);
          if (ZC && 0 !== ZC) this.setAbsolutePosition(this.getAbsolutePosition().add(QC));
          else {
            const CC = this.getPositionExpressedInLocalSpace().add(QC);
            this.setPositionWithLocalVector(CC)
          }
          return this
        }
        addRotation(CC, zC, ZC) {
          let QC;
          this.rotationQuaternion ? QC = this.rotationQuaternion : (QC = WC.j.Quaternion[1], WC.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, QC));
          const wC = WC.j.Quaternion[0];
          return WC.f.RotationYawPitchRollToRef(zC, CC, ZC, wC), QC.multiplyInPlace(wC), this.rotationQuaternion || QC.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== CC.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const QC = this.Km().getRenderId();
          if (!this._isDirty && !zC && (this._currentRenderId === QC || this.isSynchronized())) return this._currentRenderId = QC, this._worldMatrix;
          ZC = ZC || this.Km().activeCamera, this._updateCache();
          const wC = this._cache;
          wC.pivotMatrixUpdated = !1, wC.billboardMode = this.billboardMode, wC.infiniteDistance = this.infiniteDistance, wC.parent = this._parentNode, this._currentRenderId = QC, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const bC = this._getEffectiveParent(),
            nC = CC._TmpScaling;
          let fC, oC = this._position;
          if (this._infiniteDistance && !this.parent && ZC) {
            const zC = ZC.getWorldMatrix().m;
            oC = CC._TmpTranslation, oC.L_(this._position.x + zC[12], this._position.y + zC[13], this._position.z + zC[14])
          }
          if (nC.L_(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, fC = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(WC.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.L_(0, 0, 0))
            }
          } else fC = CC._TmpRotation, WC.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, fC);
          if (this._usePivotMatrix) {
            const CC = WC.j.Matrix[1];
            WC.b.ScalingToRef(nC.x, nC.y, nC.z, CC);
            const zC = WC.j.Matrix[0];
            fC.toRotationMatrix(zC), this._pivotMatrix.multiplyToRef(CC, WC.j.Matrix[4]), WC.j.Matrix[4].multiplyToRef(zC, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(oC.x, oC.y, oC.z)
          } else WC.b.ComposeToRef(nC, fC, oC, this._localMatrix);
          if (bC && bC.getWorldMatrix) {
            if (zC && bC.computeWorldMatrix(zC), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const CC = this.parent;
                CC.getSkeleton().prepare(), CC.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), WC.j.Matrix[7])
              } else WC.j.Matrix[7].Av(bC.getWorldMatrix());
              const zC = WC.j.Eg[5],
                ZC = WC.j.Eg[6],
                QC = WC.j.Quaternion[0];
              WC.j.Matrix[7].decompose(ZC, QC, zC), WC.b.ScalingToRef(ZC.x, ZC.y, ZC.z, WC.j.Matrix[7]), WC.j.Matrix[7].setTranslation(zC), CC.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(QC, zC), this._localMatrix.setTranslation(zC)), this._localMatrix.multiplyToRef(WC.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const CC = this.parent;
              CC.getSkeleton().prepare(), this._localMatrix.multiplyToRef(CC.getFinalMatrix(), WC.j.Matrix[6]), WC.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(bC.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.Av(this._localMatrix);
          if (ZC && this.billboardMode)
            if (wC.useBillboardPosition) {
              const zC = WC.j.Eg[0];
              this._worldMatrix.getTranslationToRef(zC);
              const QC = ZC.globalPosition;
              this._worldMatrix.invertToRef(WC.j.Matrix[1]);
              const wC = WC.j.Eg[1];
              WC.r.TransformCoordinatesToRef(QC, WC.j.Matrix[1], wC), wC.normalize();
              const bC = -Math.atan2(wC.z, wC.x) + Math.PI / 2,
                nC = Math.sqrt(wC.x * wC.x + wC.z * wC.z),
                fC = -Math.atan2(wC.y, nC);
              if (WC.f.RotationYawPitchRollToRef(bC, fC, 0, WC.j.Quaternion[0]), (this.billboardMode & CC.BILLBOARDMODE_ALL) !== CC.BILLBOARDMODE_ALL) {
                const zC = WC.j.Eg[1];
                WC.j.Quaternion[0].toEulerAnglesToRef(zC), (this.billboardMode & CC.BILLBOARDMODE_X) !== CC.BILLBOARDMODE_X && (zC.x = 0), (this.billboardMode & CC.BILLBOARDMODE_Y) !== CC.BILLBOARDMODE_Y && (zC.y = 0), (this.billboardMode & CC.BILLBOARDMODE_Z) !== CC.BILLBOARDMODE_Z && (zC.z = 0), WC.b.RotationYawPitchRollToRef(zC.y, zC.x, zC.z, WC.j.Matrix[0])
              } else WC.b.FromQuaternionToRef(WC.j.Quaternion[0], WC.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(WC.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(WC.j.Eg[0])
            } else {
              const zC = WC.j.Eg[0];
              this._worldMatrix.getTranslationToRef(zC), WC.j.Matrix[1].Av(ZC.getViewMatrix());
              const QC = this.Km().useRightHandedSystem;
              if (QC && WC.j.Matrix[1].multiplyToRef(CC._TmpRHRestore, WC.j.Matrix[1]), WC.j.Matrix[1].setTranslationFromFloats(0, 0, 0), WC.j.Matrix[1].invertToRef(WC.j.Matrix[0]), (this.billboardMode & CC.BILLBOARDMODE_ALL) !== CC.BILLBOARDMODE_ALL) {
                WC.j.Matrix[0].decompose(void 0, WC.j.Quaternion[0], void 0);
                const zC = WC.j.Eg[1];
                WC.j.Quaternion[0].toEulerAnglesToRef(zC), (this.billboardMode & CC.BILLBOARDMODE_X) !== CC.BILLBOARDMODE_X && (zC.x = 0), (this.billboardMode & CC.BILLBOARDMODE_Y) !== CC.BILLBOARDMODE_Y && (zC.y = 0), (this.billboardMode & CC.BILLBOARDMODE_Z) !== CC.BILLBOARDMODE_Z && (zC.z = 0), QC && (zC.y += Math.PI), WC.b.RotationYawPitchRollToRef(zC.y, zC.x, zC.z, WC.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(WC.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(WC.j.Eg[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : bC && bC._nonUniformScaling ? this._updateNonUniformScalingState(bC._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.L_(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = WC.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), CC) {
            const CC = this.getChildren();
            for (let zC = 0; zC < CC.length; ++zC) {
              const ZC = CC[zC];
              if (ZC) {
                ZC.computeWorldMatrix();
                const CC = WC.j.Matrix[0];
                ZC._localMatrix.multiplyToRef(this._localMatrix, CC);
                const zC = WC.j.Quaternion[0];
                CC.decompose(ZC.sq, zC, ZC.position), ZC.rotationQuaternion ? ZC.rotationQuaternion.Av(zC) : zC.toEulerAnglesToRef(ZC.rotation)
              }
            }
          }
          this.sq.L_(1, 1, 1), this.position.L_(0, 0, 0), this.rotation.L_(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = WC.f.Identity()), this._worldMatrix = WC.b.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(CC) {
          return this.onAfterWorldMatrixUpdateObservable.add(CC), this
        }
        unregisterAfterWorldMatrixUpdate(CC) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(CC), this
        }
        getPositionInCameraSpace() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return CC || (CC = this.Km().activeCamera), WC.r.TransformCoordinates(this.getAbsolutePosition(), CC.getViewMatrix())
        }
        getDistanceToCamera() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return CC || (CC = this.Km().activeCamera), this.getAbsolutePosition().subtract(CC.globalPosition).length()
        }
        clone(zC, ZC, QC) {
          const wC = qC.d.Clone((() => new CC(zC, this.Km())), this);
          if (wC.name = zC, wC.id = zC, ZC && (wC.parent = ZC), !QC) {
            const CC = this.getDescendants(!0);
            for (let ZC = 0; ZC < CC.length; ZC++) {
              const QC = CC[ZC];
              QC.clone && QC.clone(zC + "." + QC.name, wC)
            }
          }
          return wC
        }
        serialize(CC) {
          const zC = qC.d.Serialize(this, CC);
          return zC.type = this.getClassName(), zC.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(zC), zC.localMatrix = this.getPivotMatrix().VZC(), zC.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (zC.gH = !0), qC.d.AppendSerializedAnimations(this, zC), zC.np = this.serializeAnimationRanges(), zC
        }
        getChildTransformNodes(zC, ZC) {
          const QC = [];
          return this._getDescendants(QC, zC, (zC => (!ZC || ZC(zC)) && zC instanceof CC)), QC
        }
        dispose(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Km().stopAnimation(this), this.Km().removeTransformNode(this), this._parentContainer) {
            const CC = this._parentContainer.transformNodes.indexOf(this);
            CC > -1 && this._parentContainer.transformNodes.splice(CC, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), CC) {
            const CC = this.getChildTransformNodes(!0);
            for (const zC of CC) zC.parent = null, zC.computeWorldMatrix(!0)
          }
          super.dispose(CC, zC)
        }
        normalizeToUnitCube() {
          let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZC = arguments.length > 2 ? arguments[2] : void 0,
            QC = null,
            wC = null;
          zC && (this.rotationQuaternion ? (wC = this.rotationQuaternion.clone(), this.rotationQuaternion.L_(0, 0, 0, 1)) : this.rotation && (QC = this.rotation.clone(), this.rotation.L_(0, 0, 0)));
          const bC = this.getHierarchyBoundingVectors(CC, ZC),
            nC = bC.max.subtract(bC.min),
            fC = Math.max(nC.x, nC.y, nC.z);
          if (0 === fC) return this;
          const oC = 1 / fC;
          return this.sq.scaleInPlace(oC), zC && (this.rotationQuaternion && wC ? this.rotationQuaternion.Av(wC) : this.rotation && QC && this.rotation.Av(QC)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const qC = "function" === typeof Symbol && Symbol.metadata ? Object.create(pC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, oC.J)("position")], ZC = [(0, oC.J)("rotation")], QC = [(0, oC.z)("rotationQuaternion")], wC = [(0, oC.J)("sq")], bC = [(0, oC.M)("billboardMode")], nC = [(0, oC.M)()], MC = [(0, oC.M)("infiniteDistance")], gC = [(0, oC.M)()], SC = [(0, oC.M)()], (0, fC.j)(null, null, zC, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: CC => "_position" in CC,
            get: CC => CC._position,
            set: (CC, zC) => {
              CC._position = zC
            }
          },
          metadata: qC
        }, PC, GC), (0, fC.j)(null, null, ZC, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: CC => "_rotation" in CC,
            get: CC => CC._rotation,
            set: (CC, zC) => {
              CC._rotation = zC
            }
          },
          metadata: qC
        }, RC, AC), (0, fC.j)(null, null, QC, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: CC => "_rotationQuaternion" in CC,
            get: CC => CC._rotationQuaternion,
            set: (CC, zC) => {
              CC._rotationQuaternion = zC
            }
          },
          metadata: qC
        }, xC, JC), (0, fC.j)(null, null, wC, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: CC => "_scaling" in CC,
            get: CC => CC._scaling,
            set: (CC, zC) => {
              CC._scaling = zC
            }
          },
          metadata: qC
        }, IC, iC), (0, fC.j)(null, null, bC, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: CC => "_billboardMode" in CC,
            get: CC => CC._billboardMode,
            set: (CC, zC) => {
              CC._billboardMode = zC
            }
          },
          metadata: qC
        }, vC, eC), (0, fC.j)(null, null, nC, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: CC => "scalingDeterminant" in CC,
            get: CC => CC.scalingDeterminant,
            set: (CC, zC) => {
              CC.scalingDeterminant = zC
            }
          },
          metadata: qC
        }, hC, KC), (0, fC.j)(null, null, MC, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: CC => "_infiniteDistance" in CC,
            get: CC => CC._infiniteDistance,
            set: (CC, zC) => {
              CC._infiniteDistance = zC
            }
          },
          metadata: qC
        }, YC, dC), (0, fC.j)(null, null, gC, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: CC => "ignoreNonUniformScaling" in CC,
            get: CC => CC.ignoreNonUniformScaling,
            set: (CC, zC) => {
              CC.ignoreNonUniformScaling = zC
            }
          },
          metadata: qC
        }, mC, HC), (0, fC.j)(null, null, SC, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: CC => "reIntegrateRotationIntoRotationQuaternion" in CC,
            get: CC => CC.reIntegrateRotationIntoRotationQuaternion,
            set: (CC, zC) => {
              CC.reIntegrateRotationIntoRotationQuaternion = zC
            }
          },
          metadata: qC
        }, EC, lC), qC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qC
        })
      })(), CC.BILLBOARDMODE_NONE = 0, CC.BILLBOARDMODE_X = 1, CC.BILLBOARDMODE_Y = 2, CC.BILLBOARDMODE_Z = 4, CC.BILLBOARDMODE_ALL = 7, CC.BILLBOARDMODE_USE_POSITION = 128, CC.BillboardUseParentOrientation = !1, CC._TmpRotation = WC.f.Zero(), CC._TmpScaling = WC.r.Zero(), CC._TmpTranslation = WC.r.Zero(), CC._TmpRHRestore = WC.b.Scaling(1, 1, -1), CC._LookAtVectorCache = new WC.r(0, 0, 0), CC._RotationAxisCache = new WC.f, CC
    })();

    function pC(CC, zC, ZC) {
      const QC = qC.d.Parse((() => new SC(CC.name, zC)), CC, zC, ZC);
      if (CC.localMatrix ? QC.setPreTransformMatrix(WC.b.FromArray(CC.localMatrix)) : CC.pivotMatrix && QC.setPivotMatrix(WC.b.FromArray(CC.pivotMatrix)), QC.IK(CC.isEnabled), QC._waitingParsedUniqueId = CC.uniqueId, void 0 !== CC.parentId && (QC._waitingParentId = CC.parentId), void 0 !== CC.parentInstanceIndex && (QC._waitingParentInstanceIndex = CC.parentInstanceIndex), CC.gH && (QC._waitingFreezeWorldMatrix = CC.gH), CC.animations) {
        for (let zC = 0; zC < CC.animations.length; zC++) {
          const ZC = CC.animations[zC],
            wC = (0, MC.c)("BABYLON.Animation");
          wC && QC.animations.push(wC.Parse(ZC))
        }
        NC.d.ParseAnimationRanges(QC, CC, zC)
      }
      return CC.autoAnimate && zC.beginAnimation(QC, CC.autoAnimateFrom, CC.autoAnimateTo, CC.autoAnimateLoop, CC.autoAnimateSpeed || 1), QC
    }
    let PC = !1;

    function GC() {
      PC || (PC = !0, SC.Parse = pC)
    }(QC = SC.prototype).eT ?? (QC.eT = (0, gC.f)("TransformNode", "eT")), (wC = SC.prototype).applyImpulse ?? (wC.applyImpulse = (0, gC.f)("TransformNode", "applyImpulse")), (bC = SC.prototype).applyAngularImpulse ?? (bC.applyAngularImpulse = (0, gC.f)("TransformNode", "applyAngularImpulse")), (nC = SC.prototype).applyTorque ?? (nC.applyTorque = (0, gC.f)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(SC.prototype, "physicsBody") || Object.defineProperty(SC.prototype, "physicsBody", (0, gC.d)("TransformNode", "physicsBody"))
  },
  40229: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      try {
        const QC = CC.next();
        QC.done ? zC(QC) : QC.value ? QC.value.then((() => {
          QC.value = void 0, zC(QC)
        }), ZC) : zC(QC)
      } catch (QC) {
        ZC(QC)
      }
    }

    function wC() {
      let CC, zC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ZC, wC, bC) => {
        const nC = performance.now();
        void 0 === CC || nC - CC > zC ? (CC = nC, setTimeout((() => {
          QC(ZC, wC, bC)
        }), 0)) : QC(ZC, wC, bC)
      }
    }

    function bC(CC, zC, ZC, QC, wC) {
      const bC = () => {
        let nC;
        const fC = CC => {
          CC.done ? ZC(CC.value) : void 0 === nC ? nC = !0 : bC()
        };
        do {
          nC = void 0, wC && wC.aborted ? QC(new Error("Aborted")) : zC(CC, fC, QC), void 0 === nC && (nC = !1)
        } while (nC)
      };
      bC()
    }

    function nC(CC, zC) {
      let ZC;
      return bC(CC, QC, (CC => ZC = CC), (CC => {
        throw CC
      }), zC), ZC
    }
    async function fC(CC, zC, ZC) {
      return await new Promise(((QC, wC) => {
        bC(CC, zC, QC, wC, ZC)
      }))
    }

    function oC(CC, zC) {
      return function() {
        return nC(CC(...arguments), zC)
      }
    }
    ZC.d(zC, {
      d: () => wC,
      g: () => oC,
      h: () => fC,
      l: () => nC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);
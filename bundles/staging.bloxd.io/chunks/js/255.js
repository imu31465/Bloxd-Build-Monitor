export const id = 255;
export const ids = [255];
export const modules = {
  40592: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => dG,
      h: () => zG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40484),
      yG = ZG(37465),
      kG = ZG(37439),
      UG = ZG(40599),
      YG = ZG(39093),
      VG = ZG(37484),
      pG = ZG(40258),
      fG = ZG(38499),
      QG = ZG(38167),
      KG = ZG(40354),
      hG = ZG(40416);
    let dG = (() => {
      var GG;
      let bG, ZG, VG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG = UG.e,
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        nG = [],
        gG = [],
        eG = [],
        RG = [],
        TG = [],
        HG = [],
        tG = [],
        DG = [],
        NG = [],
        OG = [],
        xG = [],
        BG = [],
        Gb = [],
        bb = [],
        Zb = [],
        wb = [],
        Sb = [];
      return GG = class extends aG {
        get position() {
          return this._position
        }
        set position(GG) {
          this._position = GG
        }
        set upVector(GG) {
          this._upVector = GG
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let bG, ZG;
          if (this.mode === GG.PERSPECTIVE_CAMERA) this.fovMode === GG.FOVMODE_VERTICAL_FIXED ? (ZG = 2 * this.minZ * Math.tan(this.fov / 2), bG = this.CK().getAspectRatio(this) * ZG) : (bG = 2 * this.minZ * Math.tan(this.fov / 2), ZG = bG / this.CK().getAspectRatio(this));
          else {
            const GG = this.CK().getRenderWidth() / 2,
              wG = this.CK().getRenderHeight() / 2;
            bG = (this.orthoRight ?? GG) - (this.orthoLeft ?? -GG), ZG = (this.orthoTop ?? wG) - (this.orthoBottom ?? -wG)
          }
          return bG * ZG
        }
        set orthoLeft(GG) {
          this._orthoLeft = GG;
          for (const bG of this._rigCameras) bG.orthoLeft = GG
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(GG) {
          this._orthoRight = GG;
          for (const bG of this._rigCameras) bG.orthoRight = GG
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(GG) {
          this._orthoBottom = GG;
          for (const bG of this._rigCameras) bG.orthoBottom = GG
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(GG) {
          this._orthoTop = GG;
          for (const bG of this._rigCameras) bG.orthoTop = GG
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(bG / (2 * GG))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(GG) {
          this._baseInertia = GG
        }
        set mode(GG) {
          this._mode = GG;
          for (const bG of this._rigCameras) bG.mode = GG
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(bG, ZG, SG) {
          let UG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, KG.b)(), super(bG, SG, !1), this.inputs = (0, wG.n)(this, cG), this._position = (0, wG.n)(this, lG, kG.p.Zero()), this._upVector = ((0, wG.n)(this, jG), (0, wG.n)(this, PG, kG.p.Up())), this.oblique = ((0, wG.n)(this, MG), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, wG.n)(this, AG, .8), this.projectionPlaneTilt = ((0, wG.n)(this, sG), (0, wG.n)(this, qG, 0)), this.minZ = ((0, wG.n)(this, nG), (0, wG.n)(this, gG, 1)), this.maxZ = ((0, wG.n)(this, eG), (0, wG.n)(this, RG, 1e4)), this._baseInertia = ((0, wG.n)(this, TG), .9), this._mode = GG.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new fG.d(0, 0, 1, 1), this.layerMask = (0, wG.n)(this, HG, 268435455), this.fovMode = ((0, wG.n)(this, tG), (0, wG.n)(this, DG, GG.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, wG.n)(this, NG), (0, wG.n)(this, OG, GG.RIG_MODE_NONE)), this.interaxialDistance = ((0, wG.n)(this, xG), (0, wG.n)(this, BG, void 0)), this.isStereoscopicSideBySide = ((0, wG.n)(this, Gb), (0, wG.n)(this, bb, void 0)), this.ignoreCameraMaxZ = ((0, wG.n)(this, Zb), (0, wG.n)(this, wb, !1)), this.customRenderTargets = ((0, wG.n)(this, Sb), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new yG.c, this.onProjectionMatrixChangedObservable = new yG.c, this.onAfterCheckInputsObservable = new yG.c, this.onRestoreStateObservable = new yG.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new kG.e, this._postProcesses = new Array, this._activeMeshes = new LG.g(256), this._globalPosition = kG.p.Zero(), this._computedViewMatrix = kG.e.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = kG.e.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = kG.g.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.Dv().defaultCameraLayerMask, this.Dv().addCamera(this), UG && !this.Dv().activeCamera && (this.Dv().activeCamera = this), this.position = ZG, this.renderPassId = this.Dv().CK().createRenderPassId(`Camera ${bG}`)
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
          return "nd"
        }
        toString(GG) {
          let bG = "Name: " + this.name;
          if (bG += ", type: " + this.getClassName(), this.animations)
            for (let ZG = 0; ZG < this.animations.length; ZG++) bG += ", animation[0]: " + this.animations[ZG].toString(GG);
          return bG
        }
        applyVerticalCorrection() {
          const GG = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -GG.x : GG.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(GG) {
          return -1 !== this._activeMeshes.indexOf(GG)
        }
        isReady() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (GG)
            for (const bG of this._postProcesses)
              if (bG && !bG.isReady()) return !1;
          return super.isReady(GG)
        }
        _initCache() {
          super._initCache(), this._cache.position = new kG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new kG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(GG) {
          GG || super._updateCache(), this._cache.position.oW(this.position), this._cache.upVector.oW(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const bG = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ZG = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === bG;
          if (!ZG) return !1;
          const wG = this.CK();
          return this.mode === GG.PERSPECTIVE_CAMERA ? ZG = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === wG.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ZG = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === wG.getRenderWidth() && this._cache.renderHeight === wG.getRenderHeight(), this.oblique && (ZG = ZG && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ZG
        }
        attachControl(GG, bG) {}
        detachControl(GG) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== GG.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let GG = 0; GG < this._postProcesses.length; GG++)
            if (null !== this._postProcesses[GG]) return this._postProcesses[GG];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const GG = this._getFirstPostProcess();
          GG && GG.markTextureDirty();
          for (let bG = 0, ZG = this._rigCameras.length; bG < ZG; bG++) {
            const GG = this._rigCameras[bG],
              ZG = GG._rigPostProcess;
            if (ZG) {
              "pass" === ZG.getEffectName() && (GG.isIntermediate = 0 === this._postProcesses.length), GG._postProcesses = this._postProcesses.slice(0).concat(ZG), ZG.markTextureDirty()
            } else GG._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !GG.isReusable() && this._postProcesses.indexOf(GG) > -1 ? (YG.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == bG || bG < 0 ? this._postProcesses.push(GG) : null === this._postProcesses[bG] ? this._postProcesses[bG] = GG : this._postProcesses.splice(bG, 0, GG), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.wZG(), this._postProcesses.indexOf(GG))
        }
        detachPostProcess(GG) {
          const bG = this._postProcesses.indexOf(GG); - 1 !== bG && (this._postProcesses[bG] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.wZG(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return kG.e.Identity()
        }
        getViewMatrix(GG) {
          return !GG && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Dv().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(GG) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== GG && (this._projectionMatrix = GG)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(bG) {
          if (this._doNotComputeProjectionMatrix || !bG && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ZG = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ZG, this._refreshFrustumPlanes = !0;
          const wG = this.CK(),
            SG = this.Dv(),
            LG = wG.iwG;
          if (this.mode === GG.PERSPECTIVE_CAMERA) {
            let bG;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = wG.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), bG = SG.useRightHandedSystem ? kG.e.PerspectiveFovRHToRef : kG.e.PerspectiveFovLHToRef, bG(this.fov, wG.getAspectRatio(this), LG ? ZG : this.minZ, LG ? this.minZ : ZG, this._projectionMatrix, this.fovMode === GG.FOVMODE_VERTICAL_FIXED, wG.isNDCHalfZRange, this.projectionPlaneTilt, LG)
          } else {
            const GG = wG.getRenderWidth() / 2,
              bG = wG.getRenderHeight() / 2;
            SG.useRightHandedSystem ? this.oblique ? kG.e.ObliqueOffCenterRHToRef(this.orthoLeft ?? -GG, this.orthoRight ?? GG, this.orthoBottom ?? -bG, this.orthoTop ?? bG, LG ? ZG : this.minZ, LG ? this.minZ : ZG, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wG.isNDCHalfZRange) : kG.e.OrthoOffCenterRHToRef(this.orthoLeft ?? -GG, this.orthoRight ?? GG, this.orthoBottom ?? -bG, this.orthoTop ?? bG, LG ? ZG : this.minZ, LG ? this.minZ : ZG, this._projectionMatrix, wG.isNDCHalfZRange) : this.oblique ? kG.e.ObliqueOffCenterLHToRef(this.orthoLeft ?? -GG, this.orthoRight ?? GG, this.orthoBottom ?? -bG, this.orthoTop ?? bG, LG ? ZG : this.minZ, LG ? this.minZ : ZG, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, wG.isNDCHalfZRange) : kG.e.OrthoOffCenterLHToRef(this.orthoLeft ?? -GG, this.orthoRight ?? GG, this.orthoBottom ?? -bG, this.orthoTop ?? bG, LG ? ZG : this.minZ, LG ? this.minZ : ZG, this._projectionMatrix, wG.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = wG.getRenderWidth(), this._cache.renderHeight = wG.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(GG) {
          return (this.radius || (this.target ? kG.p.Distance(this.position, this.target) : this.position.length())) + GG
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? QG.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = QG.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), bG && this.rigCameras.length > 0) {
            let bG = !1;
            for (const ZG of this.rigCameras) ZG._updateFrustumPlanes(), bG = bG || GG.isInFrustum(ZG._frustumPlanes);
            return bG
          }
          return GG.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(GG) {
          return this._updateFrustumPlanes(), GG.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, pG.i)("Ray")
        }
        getForwardRayToRef(GG) {
          throw (0, pG.i)("Ray")
        }
        dispose(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Dv().stopAnimation(this), this.Dv().removeCamera(this); this._rigCameras.length > 0;) {
            const GG = this._rigCameras.pop();
            GG && GG.dispose()
          }
          if (this._parentContainer) {
            const GG = this._parentContainer.cameras.indexOf(this);
            GG > -1 && this._parentContainer.cameras.splice(GG, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== GG.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let GG = this._postProcesses.length;
            for (; --GG >= 0;) {
              const bG = this._postProcesses[GG];
              bG && bG.dispose(this)
            }
          }
          let wG = this.customRenderTargets.length;
          for (; --wG >= 0;) this.customRenderTargets[wG].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.Dv().CK().releaseRenderPassId(this.renderPassId), super.dispose(bG, ZG)
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
        setCameraRigMode(bG, ZG) {
          if (this.cameraRigMode !== bG) {
            for (; this._rigCameras.length > 0;) {
              const GG = this._rigCameras.pop();
              GG && GG.dispose()
            }
            if (this.cameraRigMode = bG, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ZG.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== GG.RIG_MODE_NONE) {
              const GG = this.createRigCamera(this.name + "_L", 0);
              GG && (GG._isLeftCamera = !0);
              const bG = this.createRigCamera(this.name + "_R", 1);
              bG && (bG._isRightCamera = !0), GG && bG && (this._rigCameras.push(GG), this._rigCameras.push(bG))
            }
            this._setRigMode(ZG), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(GG) {}
        _getVRProjectionMatrix() {
          return kG.e.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.CK().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(GG, bG) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[GG] = bG, "interaxialDistance" === GG && (this._cameraRigParams.stereoHalfAngle = bG / .0637 * (Math.PI / 180))
        }
        createRigCamera(GG, bG) {
          return null
        }
        _updateRigCameras() {
          for (let GG = 0; GG < this._rigCameras.length; GG++) this._rigCameras[GG].minZ = this.minZ, this._rigCameras[GG].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[GG].fov = this.fov, this._rigCameras[GG].upVector.oW(this.upVector);
          this.cameraRigMode === GG.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const GG = hG.b.Serialize(this);
          return GG.uniqueId = this.uniqueId, GG.type = this.getClassName(), this.parent && this.parent._serializeAsParent(GG), this.inputs && this.inputs.serialize(GG), hG.b.AppendSerializedAnimations(this, GG), GG.Bh = this.serializeAnimationRanges(), GG.isEnabled = this.isEnabled(), GG
        }
        clone(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wG = hG.b.Clone(GG.GetConstructorFromName(this.getClassName(), bG, this.Dv(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return wG.name = bG, wG.parent = ZG, this.onClonedObservable.notifyObservers(wG), wG
        }
        zB(GG) {
          const bG = kG.p.Zero();
          return this.getDirectionToRef(GG, bG), bG
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(GG, bG) {
          kG.p.TransformNormalToRef(GG, this.getWorldMatrix(), bG)
        }
        static GetConstructorFromName(bG, ZG, wG) {
          let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            LG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const yG = UG.e.Construct(bG, ZG, wG, {
            interaxial_distance: SG,
            isStereoscopicSideBySide: LG
          });
          return yG || (() => GG._CreateDefaultParsedCamera(ZG, wG))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let GG = this.Dv().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (GG *= -1), GG
        }
      }, (() => {
        const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(aG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, SG.M)("position")], ZG = [(0, SG.M)("upVector")], VG = [(0, SG.Q)()], dG = [(0, SG.Q)()], JG = [(0, SG.Q)()], rG = [(0, SG.Q)()], zG = [(0, SG.Q)()], EG = [(0, SG.Q)()], oG = [(0, SG.Q)()], XG = [(0, SG.Q)()], uG = [(0, SG.Q)()], iG = [(0, SG.Q)()], CG = [(0, SG.Q)()], WG = [(0, SG.Q)()], mG = [(0, SG.Q)()], IG = [(0, SG.Q)()], FG = [(0, SG.Q)()], vG = [(0, SG.Q)()], (0, wG.k)(GG, null, VG, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: GG => "orthoLeft" in GG,
            get: GG => GG.orthoLeft
          },
          metadata: LG
        }, null, cG), (0, wG.k)(GG, null, dG, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: GG => "orthoRight" in GG,
            get: GG => GG.orthoRight
          },
          metadata: LG
        }, null, cG), (0, wG.k)(GG, null, JG, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: GG => "orthoBottom" in GG,
            get: GG => GG.orthoBottom
          },
          metadata: LG
        }, null, cG), (0, wG.k)(GG, null, rG, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: GG => "orthoTop" in GG,
            get: GG => GG.orthoTop
          },
          metadata: LG
        }, null, cG), (0, wG.k)(GG, null, uG, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: GG => "inertia" in GG,
            get: GG => GG.inertia
          },
          metadata: LG
        }, null, cG), (0, wG.k)(GG, null, iG, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: GG => "mode" in GG,
            get: GG => GG.mode
          },
          metadata: LG
        }, null, cG), (0, wG.k)(null, null, bG, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: GG => "_position" in GG,
            get: GG => GG._position,
            set: (GG, bG) => {
              GG._position = bG
            }
          },
          metadata: LG
        }, lG, jG), (0, wG.k)(null, null, ZG, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: GG => "_upVector" in GG,
            get: GG => GG._upVector,
            set: (GG, bG) => {
              GG._upVector = bG
            }
          },
          metadata: LG
        }, PG, MG), (0, wG.k)(null, null, zG, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: GG => "fov" in GG,
            get: GG => GG.fov,
            set: (GG, bG) => {
              GG.fov = bG
            }
          },
          metadata: LG
        }, AG, sG), (0, wG.k)(null, null, EG, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: GG => "projectionPlaneTilt" in GG,
            get: GG => GG.projectionPlaneTilt,
            set: (GG, bG) => {
              GG.projectionPlaneTilt = bG
            }
          },
          metadata: LG
        }, qG, nG), (0, wG.k)(null, null, oG, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: GG => "minZ" in GG,
            get: GG => GG.minZ,
            set: (GG, bG) => {
              GG.minZ = bG
            }
          },
          metadata: LG
        }, gG, eG), (0, wG.k)(null, null, XG, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: GG => "maxZ" in GG,
            get: GG => GG.maxZ,
            set: (GG, bG) => {
              GG.maxZ = bG
            }
          },
          metadata: LG
        }, RG, TG), (0, wG.k)(null, null, CG, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: GG => "layerMask" in GG,
            get: GG => GG.layerMask,
            set: (GG, bG) => {
              GG.layerMask = bG
            }
          },
          metadata: LG
        }, HG, tG), (0, wG.k)(null, null, WG, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "fovMode" in GG,
            get: GG => GG.fovMode,
            set: (GG, bG) => {
              GG.fovMode = bG
            }
          },
          metadata: LG
        }, DG, NG), (0, wG.k)(null, null, mG, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "cameraRigMode" in GG,
            get: GG => GG.cameraRigMode,
            set: (GG, bG) => {
              GG.cameraRigMode = bG
            }
          },
          metadata: LG
        }, OG, xG), (0, wG.k)(null, null, IG, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: GG => "interaxialDistance" in GG,
            get: GG => GG.interaxialDistance,
            set: (GG, bG) => {
              GG.interaxialDistance = bG
            }
          },
          metadata: LG
        }, BG, Gb), (0, wG.k)(null, null, FG, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: GG => "isStereoscopicSideBySide" in GG,
            get: GG => GG.isStereoscopicSideBySide,
            set: (GG, bG) => {
              GG.isStereoscopicSideBySide = bG
            }
          },
          metadata: LG
        }, bb, Zb), (0, wG.k)(null, null, vG, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: GG => "ignoreCameraMaxZ" in GG,
            get: GG => GG.ignoreCameraMaxZ,
            set: (GG, bG) => {
              GG.ignoreCameraMaxZ = bG
            }
          },
          metadata: LG
        }, wb, Sb), LG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LG
        })
      })(), GG._CreateDefaultParsedCamera = (GG, bG) => {
        throw (0, pG.i)("UniversalCamera")
      }, GG.PERSPECTIVE_CAMERA = 0, GG.ORTHOGRAPHIC_CAMERA = 1, GG.FOVMODE_VERTICAL_FIXED = 0, GG.FOVMODE_HORIZONTAL_FIXED = 1, GG.RIG_MODE_NONE = 0, GG.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, GG.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, GG.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, GG.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, GG.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, GG.RIG_MODE_VR = 20, GG.RIG_MODE_CUSTOM = 22, GG.ForceAttachControlToAlwaysPreventDefault = !1, GG
    })();

    function JG(GG, bG) {
      const ZG = GG.type,
        wG = dG.GetConstructorFromName(ZG, GG.name, bG, GG.interaxial_distance, GG.isStereoscopicSideBySide),
        SG = hG.b.Parse(wG, GG, bG);
      if (void 0 !== GG.parentId && (SG._waitingParentId = GG.parentId), void 0 !== GG.parentInstanceIndex && (SG._waitingParentInstanceIndex = GG.parentInstanceIndex), SG.inputs && (SG.inputs.parse(GG), SG._setupInputs()), GG.upVector && (SG.upVector = kG.p.FromArray(GG.upVector)), SG.setPosition && (SG.position.fGG(0, 0, 0), SG.setPosition(kG.p.FromArray(GG.position))), GG.target && SG.setTarget && SG.setTarget(kG.p.FromArray(GG.target)), GG.cameraRigMode) {
        const bG = GG.interaxial_distance ? {
          interaxialDistance: GG.interaxial_distance
        } : {};
        SG.setCameraRigMode(GG.cameraRigMode, bG)
      }
      if (GG.animations) {
        for (let bG = 0; bG < GG.animations.length; bG++) {
          const ZG = GG.animations[bG],
            wG = (0, VG.e)("BABYLON.Animation");
          wG && SG.animations.push(wG.Parse(ZG))
        }
        UG.e.ParseAnimationRanges(SG, GG, bG)
      }
      return GG.autoAnimate && bG.beginAnimation(SG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), void 0 !== GG.isEnabled && SG.DW(GG.isEnabled), SG
    }
    let rG = !1;

    function zG() {
      rG || (rG = !0, dG.Parse = JG)
    }
  },
  40610: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG) {
        this._cameraPosition = bG, this._behavior = ZG, this.activeInput = !1, this.speed = 1, this.ND = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new wG.p, this.rotationAccumulatedPixels = new wG.p, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = wG.p.Zero(), this.rotationDeltaCurrentFrame = wG.p.Zero(), this._zoomVelocity = 0, this._panVelocity = new wG.p, this.referenceFrameRate = 60, this._rotationVelocity = new wG.p, this._prevFrameTimeMs = 0, this._scene = GG
      }
      computeCurrentFrameDeltas() {
        const GG = this._scene.CK().getDeltaTime(),
          bG = this._getEffectiveDeltaMs(GG);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.N7(0), this.rotationDeltaCurrentFrame.N7(0), this.zoomDeltaCurrentFrame = 0, void(GG > 0 && (this._prevFrameTimeMs = GG));
        this.panDeltaCurrentFrame.N7(0), this.rotationDeltaCurrentFrame.N7(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.fGG(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * bG, this.panDeltaCurrentFrame), this._rotationVelocity.fGG(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.fGG(this._rotationVelocity.x * this.speed * this.rotationXSpeed * bG, this._rotationVelocity.y * this.speed * this.rotationYSpeed * bG, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.ND * this._zoomSpeedMultiplier) * bG, GG > 0 && (this._prevFrameTimeMs = GG), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.N7(0), this.rotationAccumulatedPixels.N7(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.N7(0), this.rotationAccumulatedPixels.N7(0)
      }
      resetPanVelocity() {
        this._panVelocity.N7(0), this.panAccumulatedPixels.N7(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(GG) {
        const bG = this._scene.CK().getDeltaTime(),
          ZG = this._getEffectiveDeltaMs(bG),
          wG = 1e3 / this.referenceFrameRate;
        return Math.pow(GG, ZG / wG)
      }
      getFrameIndependentInputScale(GG) {
        const bG = 1 - GG;
        if (bG <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(GG)) / bG
      }
      _getEffectiveDeltaMs(GG) {
        return GG > 0 ? GG : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(GG, bG, ZG) {
        let wG = GG;
        const SG = this._scene.CK().getDeltaTime(),
          LG = this._getEffectiveDeltaMs(SG);
        if (0 === LG) return wG;
        const yG = this.getFrameIndependentDecay(ZG);
        if (wG *= yG, 0 !== bG || this.activeInput) {
          const GG = 1 - ZG;
          wG += bG / LG * (GG > 0 ? (1 - yG) / GG : 1)
        } else Math.abs(wG) < 1e-6 && (wG = 0);
        return wG
      }
    }
  },
  40617: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    class wG {
      constructor(GG, bG) {
        this.inputMap = [], this.handlers = GG, this._createDefaultEntries = bG, this.resetInputMap()
      }
      resolveInteraction(GG, bG) {
        for (const ZG of this.inputMap)
          if (ZG.source === GG && this._entryMatches(ZG, bG)) return ZG;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(GG, bG, ZG) {
        const wG = this.inputMap;
        for (let SG = 0; SG < wG.length; SG++) {
          const LG = wG[SG];
          if (LG.source === GG && LG.interaction === bG && this._entryConditionsMatch(LG, ZG)) return LG
        }
      }
      getEntries(GG, bG, ZG) {
        const wG = [],
          SG = this.inputMap;
        for (let LG = 0; LG < SG.length; LG++) {
          const yG = SG[LG];
          yG.source === GG && yG.interaction === bG && this._entryConditionsMatch(yG, ZG) && wG.push(yG)
        }
        return wG
      }
      addEntry(GG) {
        const bG = this._entrySpecificity(GG);
        let ZG = this.inputMap.length;
        for (let wG = 0; wG < this.inputMap.length; wG++)
          if (this._entrySpecificity(this.inputMap[wG]) < bG) {
            ZG = wG;
            break
          } this.inputMap.splice(ZG, 0, GG)
      }
      setInteraction(GG, bG, ZG) {
        const wG = this.resolveInteraction(GG, bG);
        return wG && this._entryCoversAllConditionsOf(wG, bG) ? (wG.interaction = ZG, !0) : (this.addEntry({
          source: GG,
          ...bG ?? {},
          interaction: ZG
        }), !0)
      }
      _entryCoversAllConditionsOf(GG, bG) {
        if (!bG) return !0;
        const ZG = GG;
        for (const wG of Object.keys(bG)) {
          const GG = bG[wG];
          if (void 0 !== GG)
            if ("modifiers" === wG) {
              const bG = ZG.modifiers ?? {};
              for (const ZG of Object.keys(GG))
                if (void 0 !== GG[ZG] && void 0 === bG[ZG]) return !1
            } else if (void 0 === ZG[wG]) return !1
        }
        return !0
      }
      setInteractions(GG, bG, ZG) {
        let wG = 0;
        const SG = this.inputMap;
        for (let LG = 0; LG < SG.length; LG++) {
          const yG = SG[LG];
          yG.source === GG && this._entryMatches(yG, bG) && (yG.interaction = ZG, wG++)
        }
        return wG
      }
      _entryMatches(GG, bG) {
        switch (GG.source) {
          case "pointer":
            return (void 0 === GG.button || GG.button === bG?.button) && this._matchModifiers(GG.modifiers, bG?.modifiers);
          case "wheel":
            return this._matchModifiers(GG.modifiers, bG?.modifiers);
          case "touch":
            return void 0 === GG.touchCount || GG.touchCount === bG?.touchCount;
          case "keyboard":
            return (void 0 === GG.key || (Array.isArray(GG.key) ? -1 !== GG.key.indexOf(bG?.key ?? -1) : GG.key === bG?.key)) && this._matchModifiers(GG.modifiers, bG?.modifiers)
        }
      }
      _entryConditionsMatch(GG, bG) {
        if (!bG) return !0;
        switch (GG.source) {
          case "pointer":
            return (!("button" in bG) || GG.button === bG.button) && (!("modifiers" in bG) || this._entryModifiersMatch(GG.modifiers, bG.modifiers));
          case "wheel":
            return !("modifiers" in bG) || this._entryModifiersMatch(GG.modifiers, bG.modifiers);
          case "touch":
            return !("touchCount" in bG) || GG.touchCount === bG.touchCount;
          case "keyboard":
            if ("key" in bG) {
              if (void 0 === GG.key) return void 0 === bG.key;
              if (void 0 === bG.key || (Array.isArray(GG.key) ? -1 === GG.key.indexOf(bG.key) : GG.key !== bG.key)) return !1
            }
            return !("modifiers" in bG) || this._entryModifiersMatch(GG.modifiers, bG.modifiers)
        }
      }
      _entrySpecificity(GG) {
        let bG = 0;
        return "button" in GG && void 0 !== GG.button && bG++, "key" in GG && void 0 !== GG.key && bG++, "touchCount" in GG && void 0 !== GG.touchCount && bG++, "modifiers" in GG && GG.modifiers && bG++, bG
      }
      _matchModifiers(GG, bG) {
        return !GG || (void 0 === GG.ctrl || GG.ctrl === (bG?.ctrl ?? !1)) && ((void 0 === GG.shift || GG.shift === (bG?.shift ?? !1)) && (void 0 === GG.alt || GG.alt === (bG?.alt ?? !1)))
      }
      _entryModifiersMatch(GG, bG) {
        if (!bG) return !GG;
        return void 0 !== bG.ctrl || void 0 !== bG.shift || void 0 !== bG.alt ? (void 0 === bG.ctrl || GG?.ctrl === bG.ctrl) && ((void 0 === bG.shift || GG?.shift === bG.shift) && (void 0 === bG.alt || GG?.alt === bG.alt)) : !GG || void 0 === GG.ctrl && void 0 === GG.shift && void 0 === GG.alt
      }
    }
  },
  40585: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => JG,
      e: () => hG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40592),
      yG = ZG(37439),
      kG = ZG(37443),
      UG = ZG(40601),
      YG = ZG(40599),
      VG = ZG(40610),
      pG = ZG(40617);
    class fG extends VG.b {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG), this.input = new pG.e({
          translate: (GG, bG, ZG) => {
            this.panAccumulatedPixels.x += GG, this.panAccumulatedPixels.y += bG, this.panAccumulatedPixels.z += ZG
          },
          rotate: (GG, bG) => {
            this.rotationAccumulatedPixels.x += GG, this.rotationAccumulatedPixels.y += bG
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
    const QG = yG.e.Zero(),
      KG = yG.g.Identity();
    let hG = (() => {
        var GG;
        let bG, ZG, YG, VG, pG = LG.d,
          hG = [],
          dG = [],
          JG = [],
          rG = [],
          zG = [],
          EG = [],
          oG = [],
          XG = [];
        return GG = class extends pG {
          get inertia() {
            return this._targetInertia
          }
          set inertia(GG) {
            this._targetInertia = GG, this.movement && (this.movement.panInertia = GG, this.movement.rotationInertia = GG)
          }
          constructor(GG, bG, ZG) {
            super(GG, bG, ZG, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new yG.p(0, 0, 0), this.cameraRotation = new yG.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, wG.n)(this, hG, !1), this.rotation = ((0, wG.n)(this, dG), (0, wG.n)(this, JG, void 0)), this.rotationQuaternion = (0, wG.n)(this, rG), this.speed = (0, wG.n)(this, zG, 2), this.noRotationConstraint = ((0, wG.n)(this, EG), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = kG.d, this._rotationEpsilon = kG.d, this.lockedTarget = (0, wG.n)(this, oG, null), this._currentTarget = ((0, wG.n)(this, XG), yG.p.Zero()), this._initialFocalDistance = 1, this._viewMatrix = yG.e.Zero(), this._cameraTransformMatrix = yG.e.Zero(), this._cameraRotationMatrix = yG.e.Zero(), this._transformedReferencePoint = yG.p.Zero(), this._deferredPositionUpdate = new yG.p, this._deferredRotationQuaternionUpdate = new yG.g, this._deferredRotationUpdate = new yG.p, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = yG.p.Forward(this.Dv().useRightHandedSystem), this.rotation = new yG.p(0, this.Dv().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new fG(this.Dv(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(GG) {
            this.getWorldMatrix();
            const bG = yG.j.mK[0],
              ZG = yG.j.mK[1];
            return ZG.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ZG, bG), bG.scaleInPlace(GG), this.globalPosition.add(bG)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const GG = this.lockedTarget;
              GG.computeWorldMatrix().getTranslationToRef(GG.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.fGG(0, 0, 0), this.cameraRotation.fGG(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new yG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new yG.g(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(GG) {
            GG || super._updateCache();
            const bG = this._getLockedTargetPosition();
            bG ? this._cache.lockedTarget ? this._cache.lockedTarget.oW(bG) : this._cache.lockedTarget = bG.clone() : this._cache.lockedTarget = null, this._cache.rotation.oW(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.oW(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const GG = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(GG) : !GG) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const GG = this.CK();
            return this.speed * Math.sqrt(GG.getDeltaTime() / (100 * GG.getFps()))
          }
          setTarget(GG) {
            this.upVector.normalize(), this._initialFocalDistance = GG.subtract(this.position).length(), this.position.z === GG.z && (this.position.z += kG.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.Dv().useRightHandedSystem ? yG.e.LookAtRHToRef(this.position, GG, yG.p.UpReadOnly, QG) : yG.e.LookAtLHToRef(this.position, GG, yG.p.UpReadOnly, QG), QG.invert();
            const bG = this.rotationQuaternion || KG;
            yG.g.FromRotationMatrixToRef(QG, bG), bG.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(GG) {
            this.setTarget(GG)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(yG.j.Matrix[0]), yG.p.TransformNormalToRef(this.cameraDirection, yG.j.Matrix[0], yG.j.mK[0]), this._deferredPositionUpdate.addInPlace(yG.j.mK[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.oW(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.oW(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const GG = this.movement,
              bG = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            GG.panAccumulatedPixels.addInPlace(this.cameraDirection), GG.rotationAccumulatedPixels.x += this.cameraRotation.x, GG.rotationAccumulatedPixels.y += this.cameraRotation.y, GG.computeCurrentFrameDeltas(), this.cameraDirection.oW(GG.panDeltaCurrentFrame), this.cameraRotation.set(GG.rotationDeltaCurrentFrame.x, GG.rotationDeltaCurrentFrame.y);
            const ZG = this.speed * this._panningEpsilon;
            !bG && Math.abs(this.cameraDirection.x) < ZG && Math.abs(this.cameraDirection.y) < ZG && Math.abs(this.cameraDirection.z) < ZG && (this.cameraDirection.N7(0), GG.resetPanVelocity());
            const wG = this.invertRotation ? -this.inverseRotationSpeed : 1,
              SG = this._decideIfNeedsToMove(),
              LG = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.oW(this.rotation), this._deferredPositionUpdate.oW(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.oW(this.rotationQuaternion), SG && this._updatePosition(), LG) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * wG, this._deferredRotationUpdate.y += this.cameraRotation.y * wG, !this.noRotationConstraint) {
                const GG = 1.570796;
                this._deferredRotationUpdate.x > GG && (this._deferredRotationUpdate.x = GG), this._deferredRotationUpdate.x < -GG && (this._deferredRotationUpdate.x = -GG)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.oW(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (yG.g.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.oW(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.N7(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : yG.e.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return yG.p.TransformNormalToRef(yG.p.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), yG.p.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? UG.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (yG.g.FromEulerVectorToRef(this.rotation, KG), UG.c.Y.rotateByQuaternionToRef(KG, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(GG, bG, ZG) {
            if (this.Dv().useRightHandedSystem ? yG.e.LookAtRHToRef(GG, bG, ZG, this._viewMatrix) : yG.e.LookAtLHToRef(GG, bG, ZG, this._viewMatrix), this.parent) {
              const GG = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(GG, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(bG, ZG) {
            if (this.cameraRigMode !== LG.d.RIG_MODE_NONE) {
              const ZG = new GG(bG, this.position.clone(), this.Dv());
              return ZG.isRigCamera = !0, ZG.rigParent = this, this.cameraRigMode === LG.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new yG.g), ZG._cameraRigParams = {}, ZG.rotationQuaternion = new yG.g), ZG.mode = this.mode, ZG.orthoLeft = this.orthoLeft, ZG.orthoRight = this.orthoRight, ZG.orthoTop = this.orthoTop, ZG.orthoBottom = this.orthoBottom, ZG
            }
            return null
          }
          _updateRigCameras() {
            const GG = this._rigCameras[0],
              bG = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case LG.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case LG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case LG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case LG.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case LG.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ZG = this.cameraRigMode === LG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  wG = this.cameraRigMode === LG.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ZG, GG), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * wG, bG);
                break
              }
              case LG.d.RIG_MODE_VR:
                GG.rotationQuaternion && bG.rotationQuaternion && this.rotationQuaternion ? (GG.rotationQuaternion.oW(this.rotationQuaternion), bG.rotationQuaternion.oW(this.rotationQuaternion)) : (GG.rotation.oW(this.rotation), bG.rotation.oW(this.rotation)), GG.position.oW(this.position), bG.position.oW(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(bG, ZG) {
            this.getTarget().subtractToRef(this.position, GG._TargetFocalPoint), GG._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const wG = GG._TargetFocalPoint.addInPlace(this.position);
            yG.e.TranslationToRef(-wG.x, -wG.y, -wG.z, GG._TargetTransformMatrix), GG._TargetTransformMatrix.multiplyToRef(yG.e.RotationAxis(ZG.upVector, bG), GG._RigCamTransformMatrix), yG.e.TranslationToRef(wG.x, wG.y, wG.z, GG._TargetTransformMatrix), GG._RigCamTransformMatrix.multiplyToRef(GG._TargetTransformMatrix, GG._RigCamTransformMatrix), yG.p.TransformCoordinatesToRef(this.position, GG._RigCamTransformMatrix, ZG.position), ZG.setTarget(wG)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(pG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.M)()], YG = [(0, SG.Q)()], VG = [(0, SG.z)("lockedTargetId")], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: GG => "updateUpVectorFromRotation" in GG,
              get: GG => GG.updateUpVectorFromRotation,
              set: (GG, bG) => {
                GG.updateUpVectorFromRotation = bG
              }
            },
            metadata: LG
          }, hG, dG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: GG => "rotation" in GG,
              get: GG => GG.rotation,
              set: (GG, bG) => {
                GG.rotation = bG
              }
            },
            metadata: LG
          }, JG, rG), (0, wG.k)(null, null, YG, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: GG => "speed" in GG,
              get: GG => GG.speed,
              set: (GG, bG) => {
                GG.speed = bG
              }
            },
            metadata: LG
          }, zG, EG), (0, wG.k)(null, null, VG, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: GG => "lockedTarget" in GG,
              get: GG => GG.lockedTarget,
              set: (GG, bG) => {
                GG.lockedTarget = bG
              }
            },
            metadata: LG
          }, oG, XG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG._RigCamTransformMatrix = new yG.e, GG._TargetTransformMatrix = new yG.e, GG._TargetFocalPoint = new yG.p, GG
      })(),
      dG = !1;

    function JG() {
      dG || (dG = !0, YG.e.AddNodeConstructor("TargetCamera", ((GG, bG) => () => new hG(GG, yG.p.Zero(), bG))))
    }
  },
  40345: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(40280);
    let SG = !1;

    function LG() {
      SG || (SG = !0, wG.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, wG.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, wG.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, wG.c.prototype.getAspectRatio = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = GG.viewport;
        return this.getRenderWidth(bG) * ZG.width / (this.getRenderHeight(bG) * ZG.height)
      }, wG.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, wG.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40426: (GG, bG, ZG) => {
    var wG = ZG(40280),
      SG = ZG(40430);
    let LG = !1;
    LG || (LG = !0, (0, SG.v)(), wG.c.prototype._loadFileAsync = async function(GG, bG, ZG) {
      return await new Promise(((wG, SG) => {
        this._loadFile(GG, (GG => {
          wG(GG)
        }), void 0, bG, ZG, ((GG, bG) => {
          SG(bG)
        }))
      }))
    })
  },
  40421: (GG, bG, ZG) => {
    (0, ZG(40354).b)()
  },
  40354: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(40280);
    let SG = !1;

    function LG() {
      SG || (SG = !0, wG.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, wG.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, wG.c.prototype.createRenderPassId = function(GG) {
        const bG = ++wG.c._RenderPassIdCounter;
        return this._renderPassNames[bG] = GG ?? "NONAME", bG
      }, wG.c.prototype.releaseRenderPassId = function(GG) {
        this._renderPassNames[GG] = void 0;
        for (let bG = 0; bG < this.scenes.length; ++bG) {
          const ZG = this.scenes[bG];
          for (let bG = 0; bG < ZG.meshes.length; ++bG) {
            const wG = ZG.meshes[bG];
            if (wG._releaseRenderPassId(GG), wG.aE)
              for (let bG = 0; bG < wG.aE.length; ++bG) {
                wG.aE[bG]._removeDrawWrapper(GG)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(GG)
      })
    }
  },
  40456: (GG, bG, ZG) => {
    var wG = ZG(40463),
      SG = ZG(40280);
    let LG = !1;
    LG || (LG = !0, SG.c.GetCompatibleTextureLoader = wG.e)
  },
  40360: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(40225);
    let SG = !1;

    function LG() {
      SG || (SG = !0, wG.ThinEngine.prototype.setAlphaMode = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ZG] === GG) {
          if (!bG) {
            const bG = 0 === GG;
            this.depthCullingState.depthMask !== bG && (this.depthCullingState.depthMask = bG)
          }
          return
        }
        const wG = 0 === GG;
        this._alphaState.setAlphaBlend(!wG, ZG), this._alphaState.setAlphaMode(GG, ZG), bG || (this.depthCullingState.depthMask = wG), this._alphaMode[ZG] = GG
      })
    }
  },
  40369: (GG, bG, ZG) => {
    var wG = ZG(40210),
      SG = ZG(39093),
      LG = ZG(40225),
      yG = ZG(40371),
      kG = ZG(40330);
    class UG extends yG.c {
      setDepthStencilTexture(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(GG, bG), !GG) return;
        const ZG = this._engine,
          wG = this._context,
          SG = GG._hardwareTexture;
        if (SG && GG._autoMSAAManagement && this._MSAAFramebuffer) {
          const bG = ZG._currentFramebuffer;
          ZG._bindUnboundFramebuffer(this._MSAAFramebuffer), wG.framebufferRenderbuffer(wG.FRAMEBUFFER, (0, kG.e)(GG.format) ? wG.DEPTH_STENCIL_ATTACHMENT : wG.DEPTH_ATTACHMENT, wG.RENDERBUFFER, SG.getMSAARenderBuffer()), ZG._bindUnboundFramebuffer(bG)
        }
      }
      constructor(GG, bG, ZG, wG, SG) {
        super(GG, bG, ZG, wG), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = SG
      }
      _cloneRenderTargetWrapper() {
        let GG;
        return this._colorTextureArray && this._depthStencilTextureArray ? (GG = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), GG.texture.isReady = !0) : GG = super._cloneRenderTargetWrapper(), GG
      }
      _swapRenderTargetWrapper(GG) {
        super._swapRenderTargetWrapper(GG), GG._framebuffer = this._framebuffer, GG._depthStencilBuffer = this._depthStencilBuffer, GG._MSAAFramebuffer = this._MSAAFramebuffer, GG._colorTextureArray = this._colorTextureArray, GG._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const GG = this._engine,
            bG = GG._currentFramebuffer,
            ZG = this._context;
          GG._bindUnboundFramebuffer(this._framebuffer), ZG.framebufferRenderbuffer(ZG.FRAMEBUFFER, ZG.DEPTH_STENCIL_ATTACHMENT, ZG.RENDERBUFFER, null), ZG.framebufferRenderbuffer(ZG.FRAMEBUFFER, ZG.DEPTH_ATTACHMENT, ZG.RENDERBUFFER, null), ZG.framebufferRenderbuffer(ZG.FRAMEBUFFER, ZG.STENCIL_ATTACHMENT, ZG.RENDERBUFFER, null), GG._bindUnboundFramebuffer(bG), ZG.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(GG, bG, ZG, wG, SG, LG)
      }
      shareDepth(GG) {
        super.shareDepth(GG);
        const bG = this._context,
          ZG = this._depthStencilBuffer,
          wG = GG._MSAAFramebuffer || GG._framebuffer,
          SG = this._engine;
        GG._depthStencilBuffer && GG._depthStencilBuffer !== ZG && bG.deleteRenderbuffer(GG._depthStencilBuffer), GG._depthStencilBuffer = ZG;
        const LG = GG._generateStencilBuffer ? bG.DEPTH_STENCIL_ATTACHMENT : bG.DEPTH_ATTACHMENT;
        SG._bindUnboundFramebuffer(wG), bG.framebufferRenderbuffer(bG.FRAMEBUFFER, LG, bG.RENDERBUFFER, ZG), SG._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SG = GG._hardwareTexture;
        if (!SG) return;
        const LG = this._framebuffer,
          yG = this._engine,
          kG = yG._currentFramebuffer;
        let UG;
        if (yG._bindUnboundFramebuffer(LG), yG.Zh > 1) {
          const LG = this._context;
          UG = LG["COLOR_ATTACHMENT" + bG], GG.is2DArray || GG.is3D ? (ZG = ZG ?? this.layerIndices?.[bG] ?? 0, LG.framebufferTextureLayer(LG.FRAMEBUFFER, UG, SG.underlyingResource, wG, ZG)) : GG.isCube ? (ZG = ZG ?? this.faceIndices?.[bG] ?? 0, LG.framebufferTexture2D(LG.FRAMEBUFFER, UG, LG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG, SG.underlyingResource, wG)) : LG.framebufferTexture2D(LG.FRAMEBUFFER, UG, LG.TEXTURE_2D, SG.underlyingResource, wG)
        } else {
          const GG = this._context;
          UG = GG["COLOR_ATTACHMENT" + bG + "_WEBGL"];
          const LG = void 0 !== ZG ? GG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG : GG.TEXTURE_2D;
          GG.framebufferTexture2D(GG.FRAMEBUFFER, UG, LG, SG.underlyingResource, wG)
        }
        if (GG._autoMSAAManagement && this._MSAAFramebuffer) {
          const GG = this._context;
          yG._bindUnboundFramebuffer(this._MSAAFramebuffer), GG.framebufferRenderbuffer(GG.FRAMEBUFFER, UG, GG.RENDERBUFFER, SG.getMSAARenderBuffer())
        }
        yG._bindUnboundFramebuffer(kG)
      }
      setTexture(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(GG, bG, ZG), this._bindTextureRenderTarget(GG, bG)
      }
      setLayerAndFaceIndices(GG, bG) {
        if (super.setLayerAndFaceIndices(GG, bG), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ZG = this._attachments?.length ?? this.textures.length;
        for (let wG = 0; wG < ZG; wG++) {
          const GG = this.textures[wG];
          GG && (GG.is2DArray || GG.is3D ? this._bindTextureRenderTarget(GG, wG, this.layerIndices[wG]) : GG.isCube ? this._bindTextureRenderTarget(GG, wG, this.faceIndices[wG]) : this._bindTextureRenderTarget(GG, wG))
        }
      }
      setLayerAndFaceIndex() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(GG, bG, ZG), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const wG = this.textures[GG];
        wG.is2DArray || wG.is3D ? this._bindTextureRenderTarget(this.textures[GG], GG, this.layerIndices[GG]) : wG.isCube && this._bindTextureRenderTarget(this.textures[GG], GG, this.faceIndices[GG])
      }
      resolveMSAATextures() {
        const GG = this._engine,
          bG = GG._currentFramebuffer;
        GG._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), GG._bindUnboundFramebuffer(bG)
      }
      dispose() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const bG = this._context;
        GG || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (bG.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (bG.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (bG.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(GG)
      }
    }
    let YG = !1;
    YG || (YG = !0, LG.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(GG, bG, ZG) {
      const wG = new UG(GG, bG, ZG, this, this._gl);
      return this._renderTargetWrapperCache.push(wG), wG
    }, LG.ThinEngine.prototype.createRenderTargetTexture = function(GG, bG) {
      const ZG = this._createHardwareRenderTargetWrapper(!1, !1, GG);
      let wG, SG, LG = !0,
        yG = !1,
        kG = !1,
        UG = 1;
      void 0 !== bG && "object" === typeof bG && (LG = bG.generateDepthBuffer ?? !0, yG = !!bG.generateStencilBuffer, kG = !!bG.noColorAttachment, wG = bG.colorAttachment, UG = bG.samples ?? 1, SG = bG.label);
      const YG = wG || (kG ? null : this._createInternalTexture(GG, bG, !0, 5)),
        VG = GG.width || GG,
        pG = GG.height || GG,
        fG = this._currentFramebuffer,
        QG = this._gl,
        KG = QG.createFramebuffer();
      if (this._bindUnboundFramebuffer(KG), ZG._depthStencilBuffer = this._setupFramebufferDepthAttachments(yG, LG, VG, pG), !YG || YG.is2DArray || YG.is3D || QG.framebufferTexture2D(QG.FRAMEBUFFER, QG.COLOR_ATTACHMENT0, QG.TEXTURE_2D, YG._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(fG), ZG.label = SG ?? "RenderTargetWrapper", ZG._framebuffer = KG, ZG._generateDepthBuffer = LG, ZG._generateStencilBuffer = yG, ZG.setTextures(YG), wG) {
        if (ZG._samples = wG.samples, wG.samples > 1) {
          const GG = wG._hardwareTexture.getMSAARenderBuffer(0);
          ZG._MSAAFramebuffer = QG.createFramebuffer(), this._bindUnboundFramebuffer(ZG._MSAAFramebuffer), QG.framebufferRenderbuffer(QG.FRAMEBUFFER, QG.COLOR_ATTACHMENT0, QG.RENDERBUFFER, GG), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ZG, UG);
      return ZG
    }, LG.ThinEngine.prototype._createDepthStencilTexture = function(GG, bG, ZG) {
      const LG = this._gl,
        yG = GG.layers || 0,
        UG = GG.depth || 0;
      let YG = LG.TEXTURE_2D;
      0 !== yG ? YG = LG.TEXTURE_2D_ARRAY : 0 !== UG && (YG = LG.TEXTURE_3D);
      const VG = new wG.b(this, 12);
      if (VG.label = bG.label, !this._caps.depthTextureExtension) return SG.c.Error("Depth texture is not supported by your browser or hardware."), VG;
      const pG = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...bG
      };
      if (this._bindTextureDirectly(YG, VG, !0), this._setupDepthStencilTexture(VG, GG, 0 !== pG.comparisonFunction && pG.bilinearFiltering, pG.comparisonFunction, pG.samples), void 0 !== pG.depthTextureFormat) {
        if (15 !== pG.depthTextureFormat && 16 !== pG.depthTextureFormat && 17 !== pG.depthTextureFormat && 13 !== pG.depthTextureFormat && 14 !== pG.depthTextureFormat && 18 !== pG.depthTextureFormat) return SG.c.Error(`Depth texture ${pG.depthTextureFormat} format is not supported.`), VG;
        VG.format = pG.depthTextureFormat
      } else VG.format = pG.generateStencil ? 13 : 16;
      const fG = (0, kG.e)(VG.format),
        QG = this._getWebGLTextureTypeFromDepthTextureFormat(VG.format),
        KG = fG ? LG.DEPTH_STENCIL : LG.DEPTH_COMPONENT,
        hG = this._getInternalFormatFromDepthTextureFormat(VG.format, !0, fG);
      return VG.is2DArray ? LG.texImage3D(YG, 0, hG, VG.width, VG.height, yG, 0, KG, QG, null) : VG.is3D ? LG.texImage3D(YG, 0, hG, VG.width, VG.height, UG, 0, KG, QG, null) : LG.texImage2D(YG, 0, hG, VG.width, VG.height, 0, KG, QG, null), this._bindTextureDirectly(YG, null), this._internalTexturesCache.push(VG), ZG._depthStencilBuffer && (LG.deleteRenderbuffer(ZG._depthStencilBuffer), ZG._depthStencilBuffer = null), this._bindUnboundFramebuffer(ZG._MSAAFramebuffer ?? ZG._framebuffer), ZG._generateStencilBuffer = fG, ZG._depthStencilTextureWithStencil = fG, ZG._depthStencilBuffer = this._setupFramebufferDepthAttachments(ZG._generateStencilBuffer, ZG._generateDepthBuffer, ZG.width, ZG.height, ZG.samples, VG.format), this._bindUnboundFramebuffer(null), VG
    }, LG.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(GG, bG) {
      if (this.Zh < 2 || !GG) return 1;
      if (GG.samples === bG) return bG;
      const ZG = this._gl;
      bG = Math.min(bG, this.getCaps().maxMSAASamples), GG._depthStencilBuffer && (ZG.deleteRenderbuffer(GG._depthStencilBuffer), GG._depthStencilBuffer = null), GG._MSAAFramebuffer && (ZG.deleteFramebuffer(GG._MSAAFramebuffer), GG._MSAAFramebuffer = null);
      const wG = GG.texture?._hardwareTexture;
      if (wG?.releaseMSAARenderBuffers(), GG.texture && bG > 1 && "function" === typeof ZG.renderbufferStorageMultisample) {
        const SG = ZG.createFramebuffer();
        if (!SG) throw new Error("Unable to create multi sampled framebuffer");
        GG._MSAAFramebuffer = SG, this._bindUnboundFramebuffer(GG._MSAAFramebuffer);
        const LG = this._createRenderBuffer(GG.texture.width, GG.texture.height, bG, -1, this._getRGBABufferInternalSizedFormat(GG.texture.type, GG.texture.format, GG.texture._useSRGBBuffer), ZG.COLOR_ATTACHMENT0, !1);
        if (!LG) throw new Error("Unable to create multi sampled framebuffer");
        wG?.addMSAARenderBuffer(LG)
      }
      this._bindUnboundFramebuffer(GG._MSAAFramebuffer ?? GG._framebuffer), GG.texture && (GG.texture.samples = bG), GG._samples = bG;
      const SG = GG._depthStencilTexture ? GG._depthStencilTexture.format : void 0;
      return GG._depthStencilBuffer = this._setupFramebufferDepthAttachments(GG._generateStencilBuffer, GG._generateDepthBuffer, GG.width, GG.height, bG, SG), this._bindUnboundFramebuffer(null), bG
    }, LG.ThinEngine.prototype._setupDepthStencilTexture = function(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const LG = bG.width ?? bG,
        yG = bG.height ?? bG,
        kG = bG.layers || 0,
        UG = bG.depth || 0;
      GG.baseWidth = LG, GG.baseHeight = yG, GG.width = LG, GG.height = yG, GG.is2DArray = kG > 0, GG.depth = kG || UG, GG.isReady = !0, GG.samples = SG, GG.generateMipMaps = !1, GG.samplingMode = ZG ? 2 : 1, GG.type = 0, GG._comparisonFunction = wG;
      const YG = this._gl,
        VG = this._getTextureTarget(GG),
        pG = this._getSamplingParameters(GG.samplingMode, !1);
      YG.texParameteri(VG, YG.TEXTURE_MAG_FILTER, pG.mag), YG.texParameteri(VG, YG.TEXTURE_MIN_FILTER, pG.min), YG.texParameteri(VG, YG.TEXTURE_WRAP_S, YG.CLAMP_TO_EDGE), YG.texParameteri(VG, YG.TEXTURE_WRAP_T, YG.CLAMP_TO_EDGE), this.Zh > 1 && (0 === wG ? (YG.texParameteri(VG, YG.TEXTURE_COMPARE_FUNC, 515), YG.texParameteri(VG, YG.TEXTURE_COMPARE_MODE, YG.NONE)) : (YG.texParameteri(VG, YG.TEXTURE_COMPARE_FUNC, wG), YG.texParameteri(VG, YG.TEXTURE_COMPARE_MODE, YG.COMPARE_REF_TO_TEXTURE)))
    })
  },
  40197: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG.c
    });
    var wG = ZG(40206);
    (0, ZG(40360).b)();
    var SG = ZG(40225);
    let LG = !1;
    ! function() {
      if (LG) return;
      LG = !0;
      const GG = new WeakMap,
        bG = new WeakMap,
        ZG = new WeakMap,
        wG = new WeakMap;
      SG.ThinEngine.prototype.getAlphaToCoverage = function() {
        return GG.get(this) ?? !1
      }, SG.ThinEngine.prototype.setAlphaToCoverage = function(ZG) {
        (GG.get(this) !== ZG || this._gl && bG.get(this) !== this._gl) && (GG.set(this, ZG), this._gl && (ZG ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), bG.set(this, this._gl)))
      }, Object.defineProperty(SG.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (wG.get(this) !== this._gl && (ZG.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), wG.set(this, this._gl)), ZG.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var yG = ZG(40210),
      kG = ZG(39093),
      UG = ZG(40319);
    let YG = !1;
    ! function() {
      function GG(GG, bG, ZG, wG) {
        let SG, LG = 1;
        1 === wG ? SG = new Float32Array(bG * ZG * 4) : 2 === wG ? (SG = new Uint16Array(bG * ZG * 4), LG = 15360) : SG = 7 === wG ? new Uint32Array(bG * ZG * 4) : new Uint8Array(bG * ZG * 4);
        for (let yG = 0; yG < bG; yG++)
          for (let wG = 0; wG < ZG; wG++) {
            const ZG = 3 * (wG * bG + yG),
              kG = 4 * (wG * bG + yG);
            SG[kG + 0] = GG[ZG + 0], SG[kG + 1] = GG[ZG + 1], SG[kG + 2] = GG[ZG + 2], SG[kG + 3] = LG
          }
        return SG
      }

      function bG(GG) {
        return function(bG, ZG, wG, SG, LG, kG, UG, YG) {
          let VG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            pG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const fG = GG ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            QG = GG ? 10 : 11,
            KG = new yG.b(this, QG);
          KG.baseWidth = ZG, KG.baseHeight = wG, KG.baseDepth = SG, KG.width = ZG, KG.height = wG, KG.depth = SG, KG.format = LG, KG.type = pG, KG.generateMipMaps = kG, KG.samplingMode = YG, GG ? KG.is3D = !0 : KG.is2DArray = !0, this._doNotHandleContextLost || (KG._bufferView = bG), GG ? this.updateRawTexture3D(KG, bG, LG, UG, VG, pG) : this.updateRawTexture2DArray(KG, bG, LG, UG, VG, pG), this._bindTextureDirectly(fG, KG, !0);
          const hG = this._getSamplingParameters(YG, kG);
          return this._gl.texParameteri(fG, this._gl.TEXTURE_MAG_FILTER, hG.mag), this._gl.texParameteri(fG, this._gl.TEXTURE_MIN_FILTER, hG.min), kG && this._gl.generateMipmap(fG), this._bindTextureDirectly(fG, null), this._internalTexturesCache.push(KG), KG
        }
      }

      function ZG(GG) {
        return function(bG, ZG, wG, SG) {
          let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const kG = GG ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            UG = this._getWebGLTextureType(yG),
            YG = this._getInternalFormat(wG),
            VG = this._getRGBABufferInternalSizedFormat(yG, wG);
          this._bindTextureDirectly(kG, bG, !0), this._unpackFlipY(void 0 === SG || !!SG), this._doNotHandleContextLost || (bG._bufferView = ZG, bG.format = wG, bG.invertY = SG, bG._compression = LG), bG.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), LG && ZG ? this._gl.compressedTexImage3D(kG, 0, this.getCaps().s3tc[LG], bG.width, bG.height, bG.depth, 0, ZG) : this._gl.texImage3D(kG, 0, VG, bG.width, bG.height, bG.depth, 0, YG, UG, ZG), bG.generateMipMaps && this._gl.generateMipmap(kG), this._bindTextureDirectly(kG, null), bG.isReady = !0
        }
      }
      YG || (YG = !0, SG.ThinEngine.prototype.updateRawTexture = function(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!GG) return;
        const kG = this._getRGBABufferInternalSizedFormat(LG, ZG, yG),
          UG = this._getInternalFormat(ZG),
          YG = this._getWebGLTextureType(LG);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, GG, !0), this._unpackFlipY(void 0 === wG || !!wG), this._doNotHandleContextLost || (GG._bufferView = bG, GG.format = ZG, GG.type = LG, GG.invertY = wG, GG._compression = SG), GG.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), SG && bG ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[SG], GG.width, GG.height, 0, bG) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, kG, GG.width, GG.height, 0, UG, YG, bG), GG.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), GG.isReady = !0
      }, SG.ThinEngine.prototype.createRawTexture = function(GG, bG, ZG, wG, SG, LG, kG) {
        let UG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          VG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pG = new yG.b(this, 3);
        pG.baseWidth = bG, pG.baseHeight = ZG, pG.width = bG, pG.height = ZG, pG.format = wG, pG.generateMipMaps = SG, pG.samplingMode = kG, pG.invertY = LG, pG._compression = UG, pG.type = YG, pG._useSRGBBuffer = this._getUseSRGBBuffer(VG, !SG), this._doNotHandleContextLost || (pG._bufferView = GG), this.updateRawTexture(pG, GG, wG, LG, UG, YG, pG._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, pG, !0);
        const fG = this._getSamplingParameters(kG, SG);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, fG.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, fG.min), SG && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(pG), pG
      }, SG.ThinEngine.prototype.createRawCubeTexture = function(GG, bG, ZG, wG, SG, LG, YG) {
        let VG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const pG = this._gl,
          fG = new yG.b(this, 8);
        fG.isCube = !0, fG.format = ZG, fG.type = wG, this._doNotHandleContextLost || (fG._bufferViewArray = GG);
        const QG = this._getWebGLTextureType(wG);
        let KG = this._getInternalFormat(ZG);
        KG === pG.RGB && (KG = pG.RGBA), QG !== pG.FLOAT || this._caps.textureFloatLinearFiltering ? QG !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? QG !== pG.FLOAT || this._caps.textureFloatRender ? QG !== pG.HALF_FLOAT || this._caps.colorBufferFloat || (SG = !1, kG.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (SG = !1, kG.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (SG = !1, YG = 1, kG.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (SG = !1, YG = 1, kG.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const hG = bG,
          dG = hG;
        fG.width = hG, fG.height = dG, fG.invertY = LG, fG._compression = VG;
        if (!this.needPOTTextures || (0, UG.k)(fG.width) && (0, UG.k)(fG.height) || (SG = !1), GG) this.updateRawCubeTexture(fG, GG, ZG, wG, LG, VG);
        else {
          const GG = this._getRGBABufferInternalSizedFormat(wG),
            bG = 0;
          this._bindTextureDirectly(pG.TEXTURE_CUBE_MAP, fG, !0);
          for (let ZG = 0; ZG < 6; ZG++) VG ? pG.compressedTexImage2D(pG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG, bG, this.getCaps().s3tc[VG], fG.width, fG.height, 0, void 0) : pG.texImage2D(pG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG, bG, GG, fG.width, fG.height, 0, KG, QG, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, fG, !0), GG && SG && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const JG = this._getSamplingParameters(YG, SG);
        return pG.texParameteri(pG.TEXTURE_CUBE_MAP, pG.TEXTURE_MAG_FILTER, JG.mag), pG.texParameteri(pG.TEXTURE_CUBE_MAP, pG.TEXTURE_MIN_FILTER, JG.min), pG.texParameteri(pG.TEXTURE_CUBE_MAP, pG.TEXTURE_WRAP_S, pG.CLAMP_TO_EDGE), pG.texParameteri(pG.TEXTURE_CUBE_MAP, pG.TEXTURE_WRAP_T, pG.CLAMP_TO_EDGE), this._bindTextureDirectly(pG.TEXTURE_CUBE_MAP, null), fG.generateMipMaps = SG, fG.samplingMode = YG, fG.isReady = !0, fG
      }, SG.ThinEngine.prototype.updateRawCubeTexture = function(bG, ZG, wG, SG, LG) {
        let yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        bG._bufferViewArray = ZG, bG.format = wG, bG.type = SG, bG.invertY = LG, bG._compression = yG;
        const YG = this._gl,
          VG = this._getWebGLTextureType(SG);
        let pG = this._getInternalFormat(wG);
        const fG = this._getRGBABufferInternalSizedFormat(SG);
        let QG = !1;
        pG === YG.RGB && (pG = YG.RGBA, QG = !0), this._bindTextureDirectly(YG.TEXTURE_CUBE_MAP, bG, !0), this._unpackFlipY(void 0 === LG || !!LG), bG.width % 4 !== 0 && YG.pixelStorei(YG.UNPACK_ALIGNMENT, 1);
        for (let UG = 0; UG < 6; UG++) {
          let wG = ZG[UG];
          yG ? YG.compressedTexImage2D(YG.TEXTURE_CUBE_MAP_POSITIVE_X + UG, kG, this.getCaps().s3tc[yG], bG.width, bG.height, 0, wG) : (QG && (wG = GG(wG, bG.width, bG.height, SG)), YG.texImage2D(YG.TEXTURE_CUBE_MAP_POSITIVE_X + UG, kG, fG, bG.width, bG.height, 0, pG, VG, wG))
        }(!this.needPOTTextures || (0, UG.k)(bG.width) && (0, UG.k)(bG.height)) && bG.generateMipMaps && 0 === kG && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), bG.isReady = !0
      }, SG.ThinEngine.prototype.createRawCubeTextureFromUrl = function(bG, ZG, wG, SG, LG, yG, kG, UG) {
        let YG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          fG = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const QG = this._gl,
          KG = this.createRawCubeTexture(null, wG, SG, LG, !yG, fG, pG, null);
        ZG?.addPendingData(KG), KG.url = bG, KG.isReady = !1, this._internalTexturesCache.push(KG);
        const hG = (GG, bG) => {
            ZG?.removePendingData(KG), VG && VG(GG ? GG.status + " " + GG.statusText : "Failed to parse texture data", bG)
          },
          dG = async bG => {
            if (!KG._hardwareTexture) return;
            const wG = kG(bG);
            if (!wG) return;
            const yG = wG instanceof Promise ? await wG : wG,
              VG = KG.width;
            if (UG) {
              const bG = this._getWebGLTextureType(LG);
              let ZG = this._getInternalFormat(SG);
              const wG = this._getRGBABufferInternalSizedFormat(LG);
              let kG = !1;
              ZG === QG.RGB && (ZG = QG.RGBA, kG = !0), this._bindTextureDirectly(QG.TEXTURE_CUBE_MAP, KG, !0), this._unpackFlipY(!1);
              const YG = UG(yG);
              for (let SG = 0; SG < YG.length; SG++) {
                const yG = VG >> SG;
                for (let UG = 0; UG < 6; UG++) {
                  let VG = YG[SG][UG];
                  kG && (VG = GG(VG, yG, yG, LG)), QG.texImage2D(UG, SG, wG, yG, yG, 0, ZG, bG, VG)
                }
              }
              this._bindTextureDirectly(QG.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(KG, yG, SG, LG, fG);
            KG.isReady = !0, ZG?.removePendingData(KG), KG.onLoadedObservable.notifyObservers(KG), KG.onLoadedObservable.clear(), YG && YG()
          };
        return this._loadFile(bG, (GG => {
          dG(GG).catch((GG => {
            hG(void 0, GG)
          }))
        }), void 0, ZG?.offlineProvider, !0, hG), KG
      }, SG.ThinEngine.prototype.createRawTexture2DArray = bG(!1), SG.ThinEngine.prototype.createRawTexture3D = bG(!0), SG.ThinEngine.prototype.updateRawTexture2DArray = ZG(!1), SG.ThinEngine.prototype.updateRawTexture3D = ZG(!0))
    }();
    var VG = ZG(40252);
    let pG = !1;
    pG || (pG = !0, SG.ThinEngine.prototype._readTexturePixelsSync = function(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        YG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const pG = this._gl;
      if (!pG) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const GG = pG.createFramebuffer();
        if (!GG) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = GG
      }
      pG.bindFramebuffer(pG.FRAMEBUFFER, this._dummyFramebuffer), wG > -1 && (GG.is2DArray || GG.is3D) ? pG.framebufferTextureLayer(pG.FRAMEBUFFER, pG.COLOR_ATTACHMENT0, GG._hardwareTexture?.underlyingResource, SG, wG) : wG > -1 ? pG.framebufferTexture2D(pG.FRAMEBUFFER, pG.COLOR_ATTACHMENT0, pG.TEXTURE_CUBE_MAP_POSITIVE_X + wG, GG._hardwareTexture?.underlyingResource, SG) : pG.framebufferTexture2D(pG.FRAMEBUFFER, pG.COLOR_ATTACHMENT0, pG.TEXTURE_2D, GG._hardwareTexture?.underlyingResource, SG);
      let fG = void 0 !== GG.type ? this._getWebGLTextureType(GG.type) : pG.UNSIGNED_BYTE;
      return kG ? LG || (LG = (0, VG.p)(GG.type, 4 * bG * ZG)) : fG === pG.UNSIGNED_BYTE ? (LG || (LG = new Uint8Array(4 * bG * ZG)), fG = pG.UNSIGNED_BYTE) : (LG || (LG = new Float32Array(4 * bG * ZG)), fG = pG.FLOAT), yG && this.flushFramebuffer(), pG.readPixels(UG, YG, bG, ZG, pG.RGBA, fG, LG), pG.bindFramebuffer(pG.FRAMEBUFFER, this._currentFramebuffer), LG
    }, SG.ThinEngine.prototype._readTexturePixels = function(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        YG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG))
    }), (0, ZG(40367).d)();
    let fG = !1;
    fG || (fG = !0, SG.ThinEngine.prototype._createDepthStencilCubeTexture = function(GG, bG) {
      const ZG = new yG.b(this, 12);
      if (ZG.isCube = !0, 1 === this.Zh) return kG.c.Error("Depth cube texture is not supported by WebGL 1."), ZG;
      const wG = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...bG
        },
        SG = this._gl;
      this._bindTextureDirectly(SG.TEXTURE_CUBE_MAP, ZG, !0), this._setupDepthStencilTexture(ZG, GG, wG.bilinearFiltering, wG.comparisonFunction);
      for (let LG = 0; LG < 6; LG++) wG.generateStencil ? SG.texImage2D(SG.TEXTURE_CUBE_MAP_POSITIVE_X + LG, 0, SG.DEPTH24_STENCIL8, GG, GG, 0, SG.DEPTH_STENCIL, SG.UNSIGNED_INT_24_8, null) : SG.texImage2D(SG.TEXTURE_CUBE_MAP_POSITIVE_X + LG, 0, SG.DEPTH_COMPONENT24, GG, GG, 0, SG.DEPTH_COMPONENT, SG.UNSIGNED_INT, null);
      return this._bindTextureDirectly(SG.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ZG), ZG
    }, SG.ThinEngine.prototype._setCubeMapTextureParams = function(GG, bG, ZG) {
      const wG = this._gl;
      wG.texParameteri(wG.TEXTURE_CUBE_MAP, wG.TEXTURE_MAG_FILTER, wG.LINEAR), wG.texParameteri(wG.TEXTURE_CUBE_MAP, wG.TEXTURE_MIN_FILTER, bG ? wG.LINEAR_MIPMAP_LINEAR : wG.LINEAR), wG.texParameteri(wG.TEXTURE_CUBE_MAP, wG.TEXTURE_WRAP_S, wG.CLAMP_TO_EDGE), wG.texParameteri(wG.TEXTURE_CUBE_MAP, wG.TEXTURE_WRAP_T, wG.CLAMP_TO_EDGE), GG.samplingMode = bG ? 3 : 2, bG && this.getCaps().textureMaxLevel && void 0 !== ZG && ZG > 0 && (wG.texParameteri(wG.TEXTURE_CUBE_MAP, wG.TEXTURE_MAX_LEVEL, ZG), GG._maxLodLevel = ZG), this._bindTextureDirectly(wG.TEXTURE_CUBE_MAP, null)
    }, SG.ThinEngine.prototype.createCubeTexture = function(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        yG = arguments.length > 6 ? arguments[6] : void 0,
        YG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        VG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        pG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        fG = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        QG = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        KG = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        hG = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const dG = this._gl;
      return this.createCubeTextureBase(GG, bG, ZG, !!wG, SG, LG, yG, YG, VG, pG, fG, QG, (GG => this._bindTextureDirectly(dG.TEXTURE_CUBE_MAP, GG, !0)), ((GG, bG) => {
        const ZG = this.needPOTTextures ? (0, UG.h)(bG[0].width, this._caps.maxCubemapTextureSize) : bG[0].width,
          LG = ZG,
          YG = [dG.TEXTURE_CUBE_MAP_POSITIVE_X, dG.TEXTURE_CUBE_MAP_POSITIVE_Y, dG.TEXTURE_CUBE_MAP_POSITIVE_Z, dG.TEXTURE_CUBE_MAP_NEGATIVE_X, dG.TEXTURE_CUBE_MAP_NEGATIVE_Y, dG.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(dG.TEXTURE_CUBE_MAP, GG, !0), this._unpackFlipY(!1);
        const VG = yG ? this._getInternalFormat(yG, GG._useSRGBBuffer) : GG._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : dG.RGBA;
        let pG = yG ? this._getInternalFormat(yG) : dG.RGBA;
        GG._useSRGBBuffer && 1 === this.Zh && (pG = VG);
        for (let wG = 0; wG < YG.length; wG++)
          if (bG[wG].width !== ZG || bG[wG].height !== LG) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void kG.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ZG, this._workingCanvas.height = LG, this._workingContext.drawImage(bG[wG], 0, 0, bG[wG].width, bG[wG].height, 0, 0, ZG, LG), dG.texImage2D(YG[wG], 0, VG, pG, dG.UNSIGNED_BYTE, this._workingCanvas)
          } else dG.texImage2D(YG[wG], 0, VG, pG, dG.UNSIGNED_BYTE, bG[wG]);
        wG || dG.generateMipmap(dG.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(GG, !wG), GG.width = ZG, GG.height = LG, GG.isReady = !0, yG && (GG.format = yG), GG.onLoadedObservable.notifyObservers(GG), GG.onLoadedObservable.clear(), SG && SG()
      }), !!KG, hG)
    }, SG.ThinEngine.prototype.generateMipMapsForCubemap = function(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (GG.generateMipMaps) {
        const ZG = this._gl;
        this._bindTextureDirectly(ZG.TEXTURE_CUBE_MAP, GG, !0), ZG.generateMipmap(ZG.TEXTURE_CUBE_MAP), bG && this._bindTextureDirectly(ZG.TEXTURE_CUBE_MAP, null)
      }
    });
    ZG(40369);
    let QG = !1;
    QG || (QG = !0, SG.ThinEngine.prototype.setDepthStencilTexture = function(GG, bG, ZG, wG) {
      void 0 !== GG && (bG && (this._boundUniforms[GG] = bG), ZG && ZG.depthStencilTexture ? this._setTexture(GG, ZG, !1, !0, wG) : this._setTexture(GG, null, void 0, void 0, wG))
    });
    let KG = !1;
    KG || (KG = !0, SG.ThinEngine.prototype.createRenderTargetCubeTexture = function(GG, bG) {
      const ZG = this._createHardwareRenderTargetWrapper(!1, !0, GG),
        wG = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...bG
        };
      wG.generateStencilBuffer = wG.generateDepthBuffer && wG.generateStencilBuffer, (1 !== wG.type || this._caps.textureFloatLinearFiltering) && (2 !== wG.type || this._caps.textureHalfFloatLinearFiltering) || (wG.samplingMode = 1);
      const SG = this._gl,
        LG = new yG.b(this, 5);
      this._bindTextureDirectly(SG.TEXTURE_CUBE_MAP, LG, !0);
      const UG = this._getSamplingParameters(wG.samplingMode, wG.generateMipMaps);
      1 !== wG.type || this._caps.textureFloat || (wG.type = 0, kG.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), SG.texParameteri(SG.TEXTURE_CUBE_MAP, SG.TEXTURE_MAG_FILTER, UG.mag), SG.texParameteri(SG.TEXTURE_CUBE_MAP, SG.TEXTURE_MIN_FILTER, UG.min), SG.texParameteri(SG.TEXTURE_CUBE_MAP, SG.TEXTURE_WRAP_S, SG.CLAMP_TO_EDGE), SG.texParameteri(SG.TEXTURE_CUBE_MAP, SG.TEXTURE_WRAP_T, SG.CLAMP_TO_EDGE);
      for (let yG = 0; yG < 6; yG++) SG.texImage2D(SG.TEXTURE_CUBE_MAP_POSITIVE_X + yG, 0, this._getRGBABufferInternalSizedFormat(wG.type, wG.format), GG, GG, 0, this._getInternalFormat(wG.format), this._getWebGLTextureType(wG.type), null);
      const YG = SG.createFramebuffer();
      return this._bindUnboundFramebuffer(YG), ZG._depthStencilBuffer = this._setupFramebufferDepthAttachments(wG.generateStencilBuffer, wG.generateDepthBuffer, GG, GG), wG.generateMipMaps && SG.generateMipmap(SG.TEXTURE_CUBE_MAP), this._bindTextureDirectly(SG.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ZG._framebuffer = YG, ZG._generateDepthBuffer = wG.generateDepthBuffer, ZG._generateStencilBuffer = wG.generateStencilBuffer, LG.width = GG, LG.height = GG, LG.isReady = !0, LG.isCube = !0, LG.samples = 1, LG.generateMipMaps = wG.generateMipMaps, LG.samplingMode = wG.samplingMode, LG.type = wG.type, LG.format = wG.format, this._internalTexturesCache.push(LG), ZG.setTextures(LG), ZG
    });
    var hG = ZG(40379),
      dG = ZG(40387);
    let JG = !1;
    JG || (JG = !0, SG.ThinEngine.prototype.createPrefilteredCubeTexture = function(GG, bG, wG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        UG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        YG = arguments.length > 6 ? arguments[6] : void 0,
        VG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        pG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        fG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(GG, bG, null, !1, (async GG => {
        if (!GG) return void(LG && LG(null));
        const UG = GG.texture;
        if (pG ? GG.info.sphericalPolynomial && (UG._sphericalPolynomial = GG.info.sphericalPolynomial) : UG._sphericalPolynomial = UG._sphericalPolynomial ?? new hG.e, UG._source = 9, this.getCaps().textureLOD) return void(LG && LG(UG));
        const YG = this._gl,
          VG = GG.width;
        if (!VG) return;
        const {
          DDSTools: fG
        } = await ZG.e(311).then((() => ZG(42215))), QG = [];
        for (let ZG = 0; ZG < 3; ZG++) {
          const LG = 1 - ZG / 2,
            pG = SG,
            KG = Math.log2(VG) * wG + SG,
            hG = pG + (KG - pG) * LG,
            JG = Math.round(Math.min(Math.max(hG, 0), KG)),
            rG = new yG.b(this, 2);
          if (rG.type = UG.type, rG.format = UG.format, rG.width = Math.pow(2, Math.max(Math.log2(VG) - JG, 0)), rG.height = rG.width, rG.isCube = !0, rG._cachedWrapU = 0, rG._cachedWrapV = 0, this._bindTextureDirectly(YG.TEXTURE_CUBE_MAP, rG, !0), rG.samplingMode = 2, YG.texParameteri(YG.TEXTURE_CUBE_MAP, YG.TEXTURE_MAG_FILTER, YG.LINEAR), YG.texParameteri(YG.TEXTURE_CUBE_MAP, YG.TEXTURE_MIN_FILTER, YG.LINEAR), YG.texParameteri(YG.TEXTURE_CUBE_MAP, YG.TEXTURE_WRAP_S, YG.CLAMP_TO_EDGE), YG.texParameteri(YG.TEXTURE_CUBE_MAP, YG.TEXTURE_WRAP_T, YG.CLAMP_TO_EDGE), GG.isDDS) {
            const bG = GG.info,
              ZG = GG.data;
            this._unpackFlipY(bG.isCompressed), fG.UploadDDSLevels(this, rG, ZG, bG, !0, 6, JG)
          } else kG.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(YG.TEXTURE_CUBE_MAP, null);
          const zG = new dG.b(bG);
          zG._isCube = !0, zG._texture = rG, rG.isReady = !0, QG.push(zG)
        }
        UG._lodTextureHigh = QG[2], UG._lodTextureMid = QG[1], UG._lodTextureLow = QG[0], LG && LG(UG)
      }), UG, YG, VG, pG, wG, SG, null, void 0, !1, fG)
    });
    var rG = ZG(40305);
    let zG = !1;
    zG || (zG = !0, SG.ThinEngine.prototype.createUniformBuffer = function(GG, bG) {
      const ZG = this._gl.createBuffer();
      if (!ZG) throw new Error("Unable to create uniform buffer");
      const wG = new rG.d(ZG);
      return this.bindUniformBuffer(wG), GG instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, GG, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(GG), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), wG.references = 1, wG
    }, SG.ThinEngine.prototype.createDynamicUniformBuffer = function(GG, bG) {
      const ZG = this._gl.createBuffer();
      if (!ZG) throw new Error("Unable to create dynamic uniform buffer");
      const wG = new rG.d(ZG);
      return this.bindUniformBuffer(wG), GG instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, GG, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(GG), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), wG.references = 1, wG
    }, SG.ThinEngine.prototype.updateUniformBuffer = function(GG, bG, ZG, wG) {
      this.bindUniformBuffer(GG), void 0 === ZG && (ZG = 0), void 0 === wG ? bG instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZG, bG) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZG, new Float32Array(bG)) : bG instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, bG.subarray(ZG, ZG + wG)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(bG).subarray(ZG, ZG + wG)), this.bindUniformBuffer(null)
    }, SG.ThinEngine.prototype.bindUniformBuffer = function(GG) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, GG ? GG.underlyingResource : null)
    }, SG.ThinEngine.prototype.bindUniformBufferBase = function(GG, bG, ZG) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, bG, GG ? GG.underlyingResource : null)
    }, SG.ThinEngine.prototype.bindUniformBlock = function(GG, bG, ZG) {
      const wG = GG.program,
        SG = this._gl.getUniformBlockIndex(wG, bG);
      4294967295 !== SG && this._gl.uniformBlockBinding(wG, SG, ZG)
    });
    var EG = ZG(40241),
      oG = ZG(40280);
    let XG = !1;
    XG || (XG = !0, oG.c.prototype.displayLoadingUI = function() {
      if (!(0, EG.k)()) return;
      const GG = this.loadingScreen;
      GG && GG.displayLoadingUI()
    }, oG.c.prototype.hideLoadingUI = function() {
      if (!(0, EG.k)()) return;
      const GG = this._loadingScreen;
      GG && GG.hideLoadingUI()
    }, Object.defineProperty(oG.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = oG.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(GG) {
        this._loadingScreen = GG
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(oG.c.prototype, "loadingUIText", {
      set: function(GG) {
        this.loadingScreen.loadingUIText = GG
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(oG.c.prototype, "loadingUIBackgroundColor", {
      set: function(GG) {
        this.loadingScreen.loadingUIBackgroundColor = GG
      },
      enumerable: !0,
      configurable: !0
    })), (0, ZG(40345).b)();
    let uG = !1;
    uG || (uG = !0, oG.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, oG.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, oG.c.prototype.setDepthFunction = function(GG) {
      this._depthCullingState.depthFunc = GG
    }, oG.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, oG.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, oG.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, oG.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, oG.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, oG.c.prototype.setDepthWrite = function(GG) {
      this._depthCullingState.depthMask = GG
    }, oG.c.prototype.setAlphaConstants = function(GG, bG, ZG, wG) {
      this._alphaState.setAlphaBlendConstants(GG, bG, ZG, wG)
    }, oG.c.prototype.getAlphaMode = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[GG]
    }, oG.c.prototype.getAlphaEquation = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[GG]
    });
    let iG = !1;
    iG || (iG = !0, oG.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, oG.c.prototype.setStencilBuffer = function(GG) {
      this._stencilState.stencilTest = GG
    }, oG.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, oG.c.prototype.setStencilMask = function(GG) {
      this._stencilState.stencilMask = GG
    }, oG.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, oG.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, oG.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, oG.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, oG.c.prototype.setStencilFunction = function(GG) {
      this._stencilState.stencilFunc = GG
    }, oG.c.prototype.setStencilBackFunction = function(GG) {
      this._stencilState.stencilBackFunc = GG
    }, oG.c.prototype.setStencilFunctionReference = function(GG) {
      this._stencilState.stencilFuncRef = GG
    }, oG.c.prototype.setStencilFunctionMask = function(GG) {
      this._stencilState.stencilFuncMask = GG
    }, oG.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, oG.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, oG.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, oG.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, oG.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, oG.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, oG.c.prototype.setStencilOperationFail = function(GG) {
      this._stencilState.stencilOpStencilFail = GG
    }, oG.c.prototype.setStencilBackOperationFail = function(GG) {
      this._stencilState.stencilBackOpStencilFail = GG
    }, oG.c.prototype.setStencilOperationDepthFail = function(GG) {
      this._stencilState.stencilOpDepthFail = GG
    }, oG.c.prototype.setStencilBackOperationDepthFail = function(GG) {
      this._stencilState.stencilBackOpDepthFail = GG
    }, oG.c.prototype.setStencilOperationPass = function(GG) {
      this._stencilState.stencilOpStencilDepthPass = GG
    }, oG.c.prototype.setStencilBackOperationPass = function(GG) {
      this._stencilState.stencilBackOpStencilDepthPass = GG
    }, oG.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, oG.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ZG(40421);
    let CG = !1;
    CG || (CG = !0, oG.c.prototype.createDepthStencilTexture = function(GG, bG, ZG) {
      if (bG.isCube) {
        const ZG = GG.width || GG;
        return this._createDepthStencilCubeTexture(ZG, bG)
      }
      return this._createDepthStencilTexture(GG, bG, ZG)
    });
    ZG(40426), ZG(40456);
    let WG = !1;
    WG || (WG = !0, SG.ThinEngine.prototype.enableScissor = function(GG, bG, ZG, wG) {
      const SG = this._gl;
      SG.enable(SG.SCISSOR_TEST), SG.scissor(GG, bG, ZG, wG)
    }, SG.ThinEngine.prototype.disableScissor = function() {
      const GG = this._gl;
      GG.disable(GG.SCISSOR_TEST)
    })
  },
  40206: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => oG
    });
    var wG = ZG(40210),
      SG = ZG(37463),
      LG = ZG(40225),
      yG = ZG(40285);
    class kG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new UG(GG)
      }
      sampleFrame() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const bG = GG - this._lastFrameTimeMs;
            this._rollingFrameTime.add(bG)
          }
          this._lastFrameTimeMs = GG
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
        const GG = this._rollingFrameTime.history(0);
        return 0 === GG ? 0 : 1e3 / GG
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
    class UG {
      constructor(GG) {
        this._samples = new Array(GG), this.reset()
      }
      add(GG) {
        let bG;
        if (this.isSaturated()) {
          const GG = this._samples[this._pos];
          bG = GG - this.average, this.average -= bG / (this._sampleCount - 1), this._m2 -= bG * (GG - this.average)
        } else this._sampleCount++;
        bG = GG - this.average, this.average += bG / this._sampleCount, this._m2 += bG * (GG - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = GG, this._pos++, this._pos %= this._samples.length
      }
      history(GG) {
        if (GG >= this._sampleCount || GG >= this._samples.length) return 0;
        const bG = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(bG - GG)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(GG) {
        const bG = this._samples.length;
        return (GG % bG + bG) % bG
      }
    }
    var YG = ZG(40305),
      VG = ZG(39093),
      pG = ZG(40324),
      fG = ZG(40280),
      QG = ZG(40241);

    function KG(GG) {
      const bG = function(GG) {
        if (!(0, QG.c)() || !document.body) return null;
        const bG = document.createElement("span");
        bG.textContent = "Hg", bG.style.font = GG;
        const ZG = document.createElement("div");
        ZG.style.display = "inline-block", ZG.style.width = "1px", ZG.style.height = "0px", ZG.style.verticalAlign = "bottom";
        const wG = document.createElement("div");
        let SG, LG;
        wG.style.whiteSpace = "nowrap", wG.appendChild(bG), wG.appendChild(ZG), document.body.appendChild(wG);
        try {
          LG = ZG.getBoundingClientRect().top - bG.getBoundingClientRect().top, ZG.style.verticalAlign = "baseline", SG = ZG.getBoundingClientRect().top - bG.getBoundingClientRect().top
        } finally {
          document.body.removeChild(wG)
        }
        const yG = {
          ascent: SG,
          height: LG,
          descent: LG - SG
        };
        return hG(yG) ? yG : null
      }(GG);
      if (bG) return bG;
      const ZG = function(GG) {
        let bG = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? bG = new OffscreenCanvas(64, 64) : (0, QG.c)() && "function" === typeof document.createElement && (bG = document.createElement("canvas"), bG.width = 64, bG.height = 64);
          const ZG = bG?.getContext("2d");
          if (!ZG) return null;
          ZG.font = GG;
          const wG = ZG.measureText("Hg"),
            SG = Number(wG.actualBoundingBoxAscent ?? wG.fontBoundingBoxAscent),
            LG = Number(wG.actualBoundingBoxDescent ?? wG.fontBoundingBoxDescent),
            yG = {
              ascent: SG,
              height: SG + LG,
              descent: LG
            };
          return hG(yG) ? yG : null
        } catch {
          return null
        } finally {
          const GG = bG;
          "function" === typeof GG?.dispose && GG.dispose()
        }
      }(GG);
      return ZG || function(GG) {
        const bG = Math.max(1, function(GG) {
            const bG = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(GG || ""));
            return bG ? Number(bG[1]) : 16
          }(GG)),
          ZG = .8 * bG,
          wG = .2 * bG;
        return {
          ascent: ZG,
          height: ZG + wG,
          descent: wG
        }
      }(GG)
    }

    function hG(GG) {
      return Number.isFinite(GG.ascent) && Number.isFinite(GG.height) && Number.isFinite(GG.descent) && GG.height > 0
    }

    function dG(GG) {
      if (GG.requestPointerLock) {
        const bG = GG.requestPointerLock();
        bG instanceof Promise ? bG.then((() => {
          GG.focus()
        })).catch((() => {})) : GG.focus()
      }
    }
    var JG = ZG(40337),
      rG = ZG(40271),
      zG = ZG(40345),
      EG = ZG(40354);
    class oG extends LG.ThinEngine {
      static get NpmPackage() {
        return fG.c.NpmPackage
      }
      static get Version() {
        return fG.c.Version
      }
      static get Instances() {
        return SG.c.Instances
      }
      static get LastCreatedEngine() {
        return SG.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return SG.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(GG) {
        return fG.c.DefaultLoadingScreenFactory(GG)
      }
      get _supportsHardwareTextureRescaling() {
        return !!oG._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, zG.b)(), (0, EG.b)(), super(GG, bG, ZG, wG), this._performanceMonitor = new kG, this._drawCalls = new JG.c, GG && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(GG) {
        super._sharedInit(GG),
          function(GG, bG, ZG) {
            GG._onCanvasFocus = () => {
              GG.onCanvasFocusObservable.notifyObservers(GG)
            }, GG._onCanvasBlur = () => {
              GG.onCanvasBlurObservable.notifyObservers(GG)
            }, GG._onCanvasContextMenu = bG => {
              GG.disableContextMenu && bG.preventDefault()
            }, bG.addEventListener("focus", GG._onCanvasFocus), bG.addEventListener("blur", GG._onCanvasBlur), bG.addEventListener("contextmenu", GG._onCanvasContextMenu), GG._onBlur = () => {
              GG.disablePerformanceMonitorInBackground && GG.performanceMonitor.disable(), GG._windowIsBackground = !0
            }, GG._onFocus = () => {
              GG.disablePerformanceMonitorInBackground && GG.performanceMonitor.enable(), GG._windowIsBackground = !1
            }, GG._onCanvasPointerOut = ZG => {
              document.elementFromPoint(ZG.clientX, ZG.clientY) !== bG && GG.onCanvasPointerOutObservable.notifyObservers(ZG)
            };
            const wG = GG.getHostWindow();
            wG && "function" === typeof wG.addEventListener && (wG.addEventListener("blur", GG._onBlur), wG.addEventListener("focus", GG._onFocus)), bG.addEventListener("pointerout", GG._onCanvasPointerOut), ZG.doNotHandleTouchAction || function(GG) {
              GG && GG.setAttribute && (GG.setAttribute("touch-action", "none"), GG.style.touchAction = "none", GG.style.webkitTapHighlightColor = "transparent")
            }(bG), !fG.c.audioEngine && ZG.audioEngine && fG.c.AudioEngineFactory && (fG.c.audioEngine = fG.c.AudioEngineFactory(GG.getRenderingCanvas(), GG.getAudioContext(), GG.getAudioDestination())), (0, QG.c)() && (GG._onFullscreenChange = () => {
              GG.isFullscreen = !!document.fullscreenElement, GG.isFullscreen && GG._pointerLockRequested && bG && dG(bG)
            }, document.addEventListener("fullscreenchange", GG._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", GG._onFullscreenChange, !1), GG._onPointerLockChange = () => {
              GG.isPointerLock = document.pointerLockElement === bG
            }, document.addEventListener("pointerlockchange", GG._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", GG._onPointerLockChange, !1)), GG.enableOfflineSupport = void 0 !== fG.c.OfflineProviderFactory, GG._deterministicLockstep = !!ZG.deterministicLockstep, GG._lockstepMaxSteps = ZG.lockstepMaxSteps || 0, GG._timeStep = ZG.timeStep || 1 / 60
          }(this, GG, this._creationOptions)
      }
      resizeImageBitmap(GG, bG, ZG) {
        return function(GG, bG, ZG, wG) {
          const SG = GG.createCanvas(ZG, wG).getContext("2d");
          if (!SG) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return SG.drawImage(bG, 0, 0), SG.getImageData(0, 0, ZG, wG).data
        }(this, GG, bG, ZG)
      }
      async _createImageBitmapFromSource(GG, bG) {
        return await async function(GG, bG, ZG) {
          return await new Promise(((wG, SG) => {
            const LG = new Image;
            LG.onload = () => {
              LG.decode().then((() => {
                GG.createImageBitmap(LG, ZG).then((GG => {
                  wG(GG)
                }))
              }))
            }, LG.onerror = () => {
              SG(`Error loading image ${LG.src}`)
            }, LG.src = bG
          }))
        }(this, GG, bG)
      }
      switchFullscreen(GG) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(GG)
      }
      enterFullscreen(GG) {
        this.isFullscreen || (this._pointerLockRequested = GG, this._renderingCanvas && function(GG) {
          const bG = GG.requestFullscreen || GG.webkitRequestFullscreen;
          bG && bG.call(GG)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const GG = document;
          document.exitFullscreen ? document.exitFullscreen() : GG.webkitCancelFullScreen && GG.webkitCancelFullScreen()
        }()
      }
      setDitheringState(GG) {
        GG ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(GG) {
        GG ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(GG, bG, ZG, wG) {
        const SG = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(GG, bG, ZG, wG), SG
      }
      scissorClear(GG, bG, ZG, wG, SG) {
        this.enableScissor(GG, bG, ZG, wG), this.clear(SG, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(GG) {
        const bG = this._gl.getAttachedShaders(GG);
        return bG ? this._gl.getShaderSource(bG[0]) : null
      }
      getFragmentShaderSource(GG) {
        const bG = this._gl.getAttachedShaders(GG);
        return bG ? this._gl.getShaderSource(bG[1]) : null
      }
      set framebufferDimensionsObject(GG) {
        this._framebufferDimensionsObject = GG, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const GG of this.scenes) GG.resetCachedMaterial(), GG._rebuildGeometries();
        for (const GG of this._virtualScenes) GG.resetCachedMaterial(), GG._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(GG) {
        return KG(GG)
      }
      enterPointerlock() {
        this._renderingCanvas && dG(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      yE() {
        this._measureFps(), super.yE()
      }
      _deletePipelineContext(GG) {
        const bG = GG;
        bG && bG.program && bG.transformFeedback && (this.deleteTransformFeedback(bG.transformFeedback), bG.transformFeedback = null), super._deletePipelineContext(GG)
      }
      createShaderProgram(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        SG = SG || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const yG = super.createShaderProgram(GG, bG, ZG, wG, SG, LG);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), yG
      }
      _createShaderProgram(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const LG = wG.createProgram();
        if (GG.program = LG, !LG) throw new Error("Unable to create program");
        if (wG.attachShader(LG, bG), wG.attachShader(LG, ZG), this.Zh > 1 && SG) {
          const bG = this.createTransformFeedback();
          this.bindTransformFeedback(bG), this.setTranformFeedbackVaryings(LG, SG), GG.transformFeedback = bG
        }
        return wG.linkProgram(LG), this.Zh > 1 && SG && this.bindTransformFeedback(null), GG.context = wG, GG.vertexShader = bG, GG.fragmentShader = ZG, GG.isParallelCompiled || this._finalizePipelineContext(GG), LG
      }
      _releaseTexture(GG) {
        super._releaseTexture(GG)
      }
      _releaseRenderTargetWrapper(GG) {
        super._releaseRenderTargetWrapper(GG);
        for (const bG of this.scenes) {
          for (const ZG of bG.postProcesses) ZG._outputTexture === GG && (ZG._outputTexture = null);
          for (const ZG of bG.cameras)
            for (const bG of ZG._postProcesses) bG && bG._outputTexture === GG && (bG._outputTexture = null)
        }
      }
      _rescaleTexture(GG, bG, ZG, wG, SG) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const LG = this.createRenderTargetTexture({
          width: bG.width,
          height: bG.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && oG._RescalePostProcessFactory && (this._rescalePostProcess = oG._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const yG = () => {
              this._rescalePostProcess.onApply = function(bG) {
                bG._bindTexture("textureSampler", GG)
              };
              let yG = ZG;
              yG || (yG = this.scenes[this.scenes.length - 1]), yG.postProcessManager.directRender([this._rescalePostProcess], LG, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, bG, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, wG, 0, 0, bG.width, bG.height, 0), this.unBindFramebuffer(LG), LG.dispose(), SG && SG()
            },
            kG = this._rescalePostProcess.getEffect();
          kG ? kG.executeWhenCompiled(yG) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((GG => {
            GG.executeWhenCompiled(yG)
          }))
        }
      }
      wrapWebGLTexture(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const yG = new pG.b(GG, this._gl),
          kG = new wG.b(this, 15, !0);
        return kG._hardwareTexture = yG, kG.baseWidth = SG, kG.baseHeight = LG, kG.width = SG, kG.height = LG, kG.isReady = !0, kG.useMipMaps = bG, this.updateTextureSamplingMode(ZG, kG), kG
      }
      updateWrappedWebGLTexture(GG, bG) {
        if (15 !== GG.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const wG of this._renderTargetWrapperCache)
          if (wG.textures?.includes(GG)) {
            if (wG.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (wG._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } GG._hardwareTexture = new pG.b(bG, this._gl), GG.isReady = !0, GG._cachedCoordinatesMode = null, GG._cachedWrapU = null, GG._cachedWrapV = null, GG._cachedWrapR = null, GG._cachedAnisotropicFilteringLevel = null;
        for (const wG in this._boundTexturesCache) this._boundTexturesCache[wG] === GG && (this._boundTexturesCache[wG] = null);
        this.updateTextureSamplingMode(GG.samplingMode, GG);
        const ZG = this._gl;
        for (const wG of this._renderTargetWrapperCache) {
          if (wG.texture !== GG) continue;
          const SG = wG,
            LG = wG.samples,
            yG = LG > 1;
          SG._framebuffer && ZG.deleteFramebuffer(SG._framebuffer), !yG && SG._depthStencilBuffer && (ZG.deleteRenderbuffer(SG._depthStencilBuffer), SG._depthStencilBuffer = null);
          const kG = this._currentFramebuffer,
            UG = ZG.createFramebuffer();
          this._bindUnboundFramebuffer(UG), ZG.framebufferTexture2D(ZG.FRAMEBUFFER, ZG.COLOR_ATTACHMENT0, ZG.TEXTURE_2D, bG, 0), yG || (SG._depthStencilBuffer = this._setupFramebufferDepthAttachments(wG._generateStencilBuffer, wG._generateDepthBuffer, wG.width, wG.height)), this._bindUnboundFramebuffer(kG), SG._framebuffer = UG, yG && (wG._samples = 1, this.updateRenderTargetTextureSampleCount(SG, LG))
        }
      }
      _uploadImageToTexture(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SG = this._gl,
          LG = this._getWebGLTextureType(GG.type),
          yG = this._getInternalFormat(GG.format),
          kG = this._getRGBABufferInternalSizedFormat(GG.type, yG),
          UG = GG.isCube ? SG.TEXTURE_CUBE_MAP : SG.TEXTURE_2D;
        this._bindTextureDirectly(UG, GG, !0), this._unpackFlipY(GG.invertY);
        let YG = SG.TEXTURE_2D;
        GG.isCube && (YG = SG.TEXTURE_CUBE_MAP_POSITIVE_X + ZG), SG.texImage2D(YG, wG, kG, yG, LG, bG), this._bindTextureDirectly(UG, null, !0)
      }
      updateTextureComparisonFunction(GG, bG) {
        if (1 === this.Zh) return void VG.c.Error("WebGL 1 does not support texture comparison.");
        const ZG = this._gl;
        GG.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, GG, !0), 0 === bG ? (ZG.texParameteri(ZG.TEXTURE_CUBE_MAP, ZG.TEXTURE_COMPARE_FUNC, 515), ZG.texParameteri(ZG.TEXTURE_CUBE_MAP, ZG.TEXTURE_COMPARE_MODE, ZG.NONE)) : (ZG.texParameteri(ZG.TEXTURE_CUBE_MAP, ZG.TEXTURE_COMPARE_FUNC, bG), ZG.texParameteri(ZG.TEXTURE_CUBE_MAP, ZG.TEXTURE_COMPARE_MODE, ZG.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, GG, !0), 0 === bG ? (ZG.texParameteri(ZG.TEXTURE_2D, ZG.TEXTURE_COMPARE_FUNC, 515), ZG.texParameteri(ZG.TEXTURE_2D, ZG.TEXTURE_COMPARE_MODE, ZG.NONE)) : (ZG.texParameteri(ZG.TEXTURE_2D, ZG.TEXTURE_COMPARE_FUNC, bG), ZG.texParameteri(ZG.TEXTURE_2D, ZG.TEXTURE_COMPARE_MODE, ZG.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), GG._comparisonFunction = bG
      }
      createInstancesBuffer(GG) {
        const bG = this._gl.createBuffer();
        if (!bG) throw new Error("Unable to create instance buffer");
        const ZG = new YG.d(bG);
        return ZG.rp = GG, this.bindArrayBuffer(ZG), this._gl.bufferData(this._gl.ARRAY_BUFFER, GG, this._gl.DYNAMIC_DRAW), ZG.references = 1, ZG
      }
      deleteInstancesBuffer(GG) {
        this._gl.deleteBuffer(GG)
      }
      async _clientWaitAsync(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const wG = this._gl;
        return await new Promise(((SG, LG) => {
          (0, rG.c)((() => {
            const ZG = wG.clientWaitSync(GG, bG, 0);
            if (ZG == wG.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ZG != wG.TIMEOUT_EXPIRED
          }), SG, LG, ZG)
        }))
      }
      _readPixelsAsync(GG, bG, ZG, wG, SG, LG, yG) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const kG = this._gl,
          UG = kG.createBuffer();
        kG.bindBuffer(kG.PIXEL_PACK_BUFFER, UG), kG.bufferData(kG.PIXEL_PACK_BUFFER, yG.byteLength, kG.STREAM_READ), kG.readPixels(GG, bG, ZG, wG, SG, LG, 0), kG.bindBuffer(kG.PIXEL_PACK_BUFFER, null);
        const YG = kG.fenceSync(kG.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return YG ? (kG.flush(), this._clientWaitAsync(YG, 0, 10).then((() => (kG.deleteSync(YG), kG.bindBuffer(kG.PIXEL_PACK_BUFFER, UG), kG.getBufferSubData(kG.PIXEL_PACK_BUFFER, 0, yG), kG.bindBuffer(kG.PIXEL_PACK_BUFFER, null), kG.deleteBuffer(UG), yG)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(GG, bG) {
            1 === SG.c.Instances.length && fG.c.audioEngine && (fG.c.audioEngine.dispose(), fG.c.audioEngine = null);
            const ZG = GG.getHostWindow();
            ZG && "function" === typeof ZG.removeEventListener && (ZG.removeEventListener("blur", GG._onBlur), ZG.removeEventListener("focus", GG._onFocus)), bG && (bG.removeEventListener("focus", GG._onCanvasFocus), bG.removeEventListener("blur", GG._onCanvasBlur), bG.removeEventListener("pointerout", GG._onCanvasPointerOut), bG.removeEventListener("contextmenu", GG._onCanvasContextMenu)), (0, QG.c)() && (document.removeEventListener("fullscreenchange", GG._onFullscreenChange), document.removeEventListener("mozfullscreenchange", GG._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", GG._onFullscreenChange), document.removeEventListener("msfullscreenchange", GG._onFullscreenChange), document.removeEventListener("pointerlockchange", GG._onPointerLockChange), document.removeEventListener("mspointerlockchange", GG._onPointerLockChange), document.removeEventListener("mozpointerlockchange", GG._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", GG._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    oG.ALPHA_DISABLE = 0, oG.ALPHA_ADD = 1, oG.ALPHA_COMBINE = 2, oG.ALPHA_SUBTRACT = 3, oG.ALPHA_MULTIPLY = 4, oG.ALPHA_MAXIMIZED = 5, oG.ALPHA_ONEONE = 6, oG.ALPHA_PREMULTIPLIED = 7, oG.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, oG.ALPHA_INTERPOLATE = 9, oG.ALPHA_SCREENMODE = 10, oG.DELAYLOADSTATE_NONE = 0, oG.DELAYLOADSTATE_LOADED = 1, oG.DELAYLOADSTATE_LOADING = 2, oG.DELAYLOADSTATE_NOTLOADED = 4, oG.NEVER = 512, oG.ALWAYS = 519, oG.LESS = 513, oG.EQUAL = 514, oG.LEQUAL = 515, oG.GREATER = 516, oG.GEQUAL = 518, oG.NOTEQUAL = 517, oG.KEEP = 7680, oG.REPLACE = 7681, oG.INCR = 7682, oG.DECR = 7683, oG.INVERT = 5386, oG.INCR_WRAP = 34055, oG.DECR_WRAP = 34056, oG.TEXTURE_CLAMP_ADDRESSMODE = 0, oG.TEXTURE_WRAP_ADDRESSMODE = 1, oG.TEXTURE_MIRROR_ADDRESSMODE = 2, oG.TEXTUREFORMAT_ALPHA = 0, oG.TEXTUREFORMAT_LUMINANCE = 1, oG.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, oG.TEXTUREFORMAT_RGB = 4, oG.TEXTUREFORMAT_RGBA = 5, oG.TEXTUREFORMAT_RED = 6, oG.TEXTUREFORMAT_R = 6, oG.TEXTUREFORMAT_R16_UNORM = 33322, oG.TEXTUREFORMAT_RG16_UNORM = 33324, oG.TEXTUREFORMAT_RGB16_UNORM = 32852, oG.TEXTUREFORMAT_RGBA16_UNORM = 32859, oG.TEXTUREFORMAT_R16_SNORM = 36760, oG.TEXTUREFORMAT_RG16_SNORM = 36761, oG.TEXTUREFORMAT_RGB16_SNORM = 36762, oG.TEXTUREFORMAT_RGBA16_SNORM = 36763, oG.TEXTUREFORMAT_RG = 7, oG.TEXTUREFORMAT_RED_INTEGER = 8, oG.TEXTUREFORMAT_R_INTEGER = 8, oG.TEXTUREFORMAT_RG_INTEGER = 9, oG.TEXTUREFORMAT_RGB_INTEGER = 10, oG.TEXTUREFORMAT_RGBA_INTEGER = 11, oG.TEXTURETYPE_UNSIGNED_BYTE = 0, oG.TEXTURETYPE_UNSIGNED_INT = 0, oG.TEXTURETYPE_FLOAT = 1, oG.TEXTURETYPE_HALF_FLOAT = 2, oG.TEXTURETYPE_BYTE = 3, oG.TEXTURETYPE_SHORT = 4, oG.TEXTURETYPE_UNSIGNED_SHORT = 5, oG.TEXTURETYPE_INT = 6, oG.TEXTURETYPE_UNSIGNED_INTEGER = 7, oG.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, oG.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, oG.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, oG.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, oG.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, oG.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, oG.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, oG.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, oG.TEXTURE_NEAREST_SAMPLINGMODE = 1, oG.TEXTURE_BILINEAR_SAMPLINGMODE = 2, oG.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, oG.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, oG.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, oG.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, oG.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, oG.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, oG.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, oG.TEXTURE_NEAREST_LINEAR = 7, oG.TEXTURE_NEAREST_NEAREST = 1, oG.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, oG.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, oG.TEXTURE_LINEAR_LINEAR = 2, oG.TEXTURE_LINEAR_NEAREST = 12, oG.TEXTURE_EXPLICIT_MODE = 0, oG.TEXTURE_SPHERICAL_MODE = 1, oG.TEXTURE_PLANAR_MODE = 2, oG.TEXTURE_CUBIC_MODE = 3, oG.TEXTURE_PROJECTION_MODE = 4, oG.TEXTURE_SKYBOX_MODE = 5, oG.TEXTURE_INVCUBIC_MODE = 6, oG.TEXTURE_EQUIRECTANGULAR_MODE = 7, oG.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, oG.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, oG.SCALEMODE_FLOOR = 1, oG.SCALEMODE_NEAREST = 2, oG.SCALEMODE_CEILING = 3
  },
  40371: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(40330);
    class SG {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(GG) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = GG, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, GG && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, wG.e)(GG.format))
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
      getBaseArrayLayer(GG) {
        if (!this._textures) return -1;
        const bG = this._textures[GG],
          ZG = this._layerIndices?.[GG] ?? 0,
          wG = this._faceIndices?.[GG] ?? 0;
        return bG.isCube ? 6 * ZG + wG : bG.is3D ? 0 : ZG
      }
      get samples() {
        return this._samples
      }
      setSamples(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === GG && !ZG) return GG;
        const wG = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, GG, bG) : this._engine.updateRenderTargetTextureSampleCount(this, GG);
        return this._samples = GG, wG
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(GG, bG, ZG, wG, SG) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = GG, this._isCube = bG, this._size = ZG, this._engine = wG, this._depthStencilTexture = null, this.label = SG
      }
      setTextures(GG) {
        Array.isArray(GG) ? this._textures = GG : this._textures = GG ? [GG] : null
      }
      setTexture(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[bG] !== GG && (this._textures[bG] && ZG && this._textures[bG].dispose(), this._textures[bG] = GG)
      }
      setLayerAndFaceIndices(GG, bG) {
        this._layerIndices = GG, this._faceIndices = bG
      }
      setLayerAndFaceIndex() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== bG && bG >= 0 && (this._layerIndices[GG] = bG), void 0 !== ZG && ZG >= 0 && (this._faceIndices[GG] = ZG)
      }
      createDepthStencilTexture() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ZG, this._depthStencilTextureLabel = LG, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: bG,
          comparisonFunction: GG,
          generateStencil: ZG,
          isCube: this._isCube,
          samples: wG,
          depthTextureFormat: SG,
          label: LG
        }, this), this._depthStencilTexture
      }
      _shareDepth(GG) {
        this.shareDepth(GG)
      }
      shareDepth(GG) {
        this._depthStencilTexture && (GG._depthStencilTexture && GG._depthStencilTexture.dispose(), GG._depthStencilTexture = this._depthStencilTexture, GG._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(GG) {
        this.texture && this.texture._swapAndDie(GG), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let GG = null;
        if (this._isMulti) {
          const bG = this.textures;
          if (bG && bG.length > 0) {
            let ZG = !1,
              wG = bG.length,
              SG = -1;
            const LG = bG[bG.length - 1]._source;
            14 !== LG && 12 !== LG || (ZG = !0, SG = bG[bG.length - 1].format, wG--);
            const yG = [],
              kG = [],
              UG = [],
              YG = [],
              VG = [],
              pG = [],
              fG = [],
              QG = {};
            for (let GG = 0; GG < wG; ++GG) {
              const ZG = bG[GG];
              yG.push(ZG.samplingMode), kG.push(ZG.type), UG.push(ZG.format);
              void 0 !== QG[ZG.uniqueId] ? (YG.push(-1), fG.push(0)) : (QG[ZG.uniqueId] = GG, ZG.is2DArray ? (YG.push(35866), fG.push(ZG.depth)) : ZG.isCube ? (YG.push(34067), fG.push(0)) : ZG.is3D ? (YG.push(32879), fG.push(ZG.depth)) : (YG.push(3553), fG.push(0))), this._faceIndices && VG.push(this._faceIndices[GG] ?? 0), this._layerIndices && pG.push(this._layerIndices[GG] ?? 0)
            }
            const KG = {
                samplingModes: yG,
                generateMipMaps: bG[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ZG,
                depthTextureFormat: SG,
                types: kG,
                formats: UG,
                ByG: wG,
                targetTypes: YG,
                faceIndex: VG,
                layerIndex: pG,
                layerCounts: fG,
                label: this.label
              },
              hG = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            GG = this._engine.createMultipleRenderTarget(hG, KG);
            for (let dG = 0; dG < wG; ++dG) {
              if (-1 !== YG[dG]) continue;
              const ZG = QG[bG[dG].uniqueId];
              GG.setTexture(GG.textures[ZG], dG)
            }
          }
        } else {
          const bG = {};
          if (bG.generateDepthBuffer = this._generateDepthBuffer, bG.generateMipMaps = this.texture?.generateMipMaps ?? !1, bG.generateStencilBuffer = this._generateStencilBuffer, bG.samplingMode = this.texture?.samplingMode, bG.type = this.texture?.type, bG.format = this.texture?.format, bG.noColorAttachment = !this._textures, bG.label = this.label, this.isCube) GG = this._engine.createRenderTargetCubeTexture(this.width, bG);
          else {
            const ZG = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            GG = this._engine.createRenderTargetTexture(ZG, bG)
          }
          GG.texture && (GG.texture.isReady = !0)
        }
        return GG
      }
      _swapRenderTargetWrapper(GG) {
        if (this._textures && GG._textures)
          for (let bG = 0; bG < this._textures.length; ++bG) this._textures[bG]._swapAndDie(GG._textures[bG], !1), GG._textures[bG].isReady = !0;
        this._depthStencilTexture && GG._depthStencilTexture && (this._depthStencilTexture._swapAndDie(GG._depthStencilTexture), GG._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const GG = this._cloneRenderTargetWrapper();
        if (GG) {
          if (this._depthStencilTexture) {
            const bG = this._depthStencilTexture.samplingMode,
              ZG = this._depthStencilTexture.format,
              wG = 2 === bG || 3 === bG || 11 === bG;
            GG.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, wG, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ZG, this._depthStencilTextureLabel)
          }
          this.samples > 1 && GG.setSamples(this.samples), GG._swapRenderTargetWrapper(this), GG.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let GG = 0; GG < this._textures.length; ++GG) this._textures[GG].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  40800: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      static get ForceFullSceneLoadingForIncremental() {
        return wG._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(GG) {
        wG._ForceFullSceneLoadingForIncremental = GG
      }
      static get ShowLoadingScreen() {
        return wG._ShowLoadingScreen
      }
      static set ShowLoadingScreen(GG) {
        wG._ShowLoadingScreen = GG
      }
      static get loggingLevel() {
        return wG._LoggingLevel
      }
      static set loggingLevel(GG) {
        wG._LoggingLevel = GG
      }
      static get CleanBoneMatrixWeights() {
        return wG._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(GG) {
        wG._CleanBoneMatrixWeights = GG
      }
    }
    wG._ForceFullSceneLoadingForIncremental = !1, wG._ShowLoadingScreen = !0, wG._CleanBoneMatrixWeights = !1, wG._LoggingLevel = 0
  },
  40463: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(39093);
    const SG = new Map;

    function LG(GG, bG) {
      (function(GG) {
        return SG.delete(GG)
      })(GG) && wG.c.Warn(`Extension with the name '${GG}' already exists`), SG.set(GG, bG)
    }

    function yG(GG, bG) {
      "image/ktx" !== bG && "image/ktx2" !== bG || (GG = ".ktx"), SG.has(GG) || (GG.endsWith(".ies") && LG(".ies", (async () => await ZG.e(314).then((() => ZG(42228))).then((GG => new GG._IESTextureLoader)))), GG.endsWith(".dds") && LG(".dds", (async () => await ZG.e(312).then((() => ZG(42230))).then((GG => new GG._DDSTextureLoader)))), GG.endsWith(".basis") && LG(".basis", (async () => await ZG.e(315).then((() => ZG(42235))).then((GG => new GG._BasisTextureLoader)))), GG.endsWith(".env") && LG(".env", (async () => await Promise.all([ZG.e(316), ZG.e(313)]).then((() => ZG(42240))).then((GG => new GG._ENVTextureLoader)))), GG.endsWith(".hdr") && LG(".hdr", (async () => await ZG.e(317).then((() => ZG(42294))).then((GG => new GG._HDRTextureLoader)))), (GG.endsWith(".ktx") || GG.endsWith(".ktx2")) && (LG(".ktx", (async () => await ZG.e(318).then((() => ZG(42302))).then((GG => new GG._KTXTextureLoader)))), LG(".ktx2", (async () => await ZG.e(318).then((() => ZG(42302))).then((GG => new GG._KTXTextureLoader))))), GG.endsWith(".tga") && LG(".tga", (async () => await ZG.e(319).then((() => ZG(42314))).then((GG => new GG._TGATextureLoader)))), GG.endsWith(".exr") && LG(".exr", (async () => await ZG.e(320).then((() => ZG(42317))).then((GG => new GG._ExrTextureLoader)))));
      const wG = SG.get(GG);
      return wG ? Promise.resolve(wG(bG)) : null
    }
  },
  40828: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      e: () => YG
    });
    var wG = ZG(40664),
      SG = ZG(40418),
      LG = ZG(37484);
    class yG extends wG.e {
      get UGG() {
        return this._subMaterials
      }
      set UGG(GG) {
        this._subMaterials = GG, this._hookArray(GG)
      }
      getChildren() {
        return this.UGG
      }
      constructor(GG, bG) {
        super(GG, bG, !0), this._waitingSubMaterialsUniqueIds = [], this.Dv().addMultiMaterial(this), this.UGG = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(GG) {
        var bG = this;
        const ZG = GG.push;
        GG.push = function() {
          for (var wG = arguments.length, SG = new Array(wG), LG = 0; LG < wG; LG++) SG[LG] = arguments[LG];
          const yG = ZG.apply(GG, SG);
          return bG._markAllSubMeshesAsTexturesDirty(), yG
        };
        const wG = GG.splice;
        GG.splice = (bG, ZG) => {
          const SG = wG.call(GG, bG, ZG ?? GG.length);
          return this._markAllSubMeshesAsTexturesDirty(), SG
        }
      }
      getSubMaterial(GG) {
        return GG < 0 || GG >= this.UGG.length ? this.Dv().defaultMaterial : this.UGG[GG]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.UGG.map((GG => GG ? GG.getActiveTextures() : [])))
      }
      hasTexture(GG) {
        if (super.hasTexture(GG)) return !0;
        for (let bG = 0; bG < this.UGG.length; bG++)
          if (this.UGG[bG]?.hasTexture(GG)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(GG, bG, ZG) {
        for (let wG = 0; wG < this.UGG.length; wG++) {
          const SG = this.UGG[wG];
          if (SG) {
            if (SG._storeEffectOnSubMeshes) {
              if (!SG.isReadyForSubMesh(GG, bG, ZG)) return !1;
              continue
            }
            if (!SG.isReady(GG)) return !1
          }
        }
        return !0
      }
      clone(GG, bG) {
        const ZG = new yG(GG, this.Dv());
        for (let wG = 0; wG < this.UGG.length; wG++) {
          let SG;
          const LG = this.UGG[wG];
          SG = bG && LG ? LG.clone(GG + "-" + LG.name) : this.UGG[wG], ZG.UGG.push(SG)
        }
        return ZG
      }
      serialize() {
        const GG = {};
        GG.name = this.name, GG.id = this.id, GG.uniqueId = this.uniqueId, SG.c && (GG.tags = SG.c.GetTags(this)), GG.materialsUniqueIds = [], GG.materials = [];
        for (let bG = 0; bG < this.UGG.length; bG++) {
          const ZG = this.UGG[bG];
          ZG ? (GG.materialsUniqueIds.push(ZG.uniqueId), GG.materials.push(ZG.id)) : (GG.materialsUniqueIds.push(null), GG.materials.push(null))
        }
        return GG
      }
      dispose(GG, bG, ZG) {
        const wG = this.Dv();
        if (!wG) return;
        if (ZG)
          for (let LG = 0; LG < this.UGG.length; LG++) {
            const ZG = this.UGG[LG];
            ZG && ZG.dispose(GG, bG)
          }
        const SG = wG.multiMaterials.indexOf(this);
        SG >= 0 && wG.multiMaterials.splice(SG, 1), super.dispose(GG, bG)
      }
    }
    let kG = !1;

    function UG(GG, bG) {
      const ZG = new yG(GG.name, bG);
      if (ZG.id = GG.id, ZG._loadedUniqueId = GG.uniqueId, SG.c && SG.c.AddTagsTo(ZG, GG.tags), GG.materialsUniqueIds) ZG._waitingSubMaterialsUniqueIds = GG.materialsUniqueIds;
      else
        for (const wG of GG.materials) ZG.UGG.push(bG.getLastMaterialById(wG));
      return ZG
    }

    function YG() {
      kG || (kG = !0, yG.ParseMultiMaterial = UG, (0, LG.i)("BABYLON.MultiMaterial", yG))
    }
  },
  40601: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG, SG, LG = ZG(37439);
    ! function(GG) {
      GG[GG.LOCAL = 0] = "LOCAL", GG[GG.WORLD = 1] = "WORLD", GG[GG.BONE = 2] = "BONE"
    }(wG || (wG = {}));
    class yG {}
    yG.X = new LG.p(1, 0, 0), yG.Y = new LG.p(0, 1, 0), yG.Z = new LG.p(0, 0, 1),
      function(GG) {
        GG[GG.X = 0] = "X", GG[GG.Y = 1] = "Y", GG[GG.Z = 2] = "Z"
      }(SG || (SG = {}))
  },
  40379: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => UG,
      e: () => YG
    });
    var wG = ZG(37439);
    const SG = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      LG = [() => 1, GG => GG.y, GG => GG.z, GG => GG.x, GG => GG.x * GG.y, GG => GG.y * GG.z, GG => 3 * GG.z * GG.z - 1, GG => GG.x * GG.z, GG => GG.x * GG.x - GG.y * GG.y],
      yG = (GG, bG) => SG[GG] * LG[GG](bG),
      kG = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class UG {
      constructor() {
        this.preScaled = !1, this.l00 = wG.p.Zero(), this.l1_1 = wG.p.Zero(), this.l10 = wG.p.Zero(), this.l11 = wG.p.Zero(), this.l2_2 = wG.p.Zero(), this.l2_1 = wG.p.Zero(), this.l20 = wG.p.Zero(), this.l21 = wG.p.Zero(), this.l22 = wG.p.Zero()
      }
      addLight(GG, bG, ZG) {
        wG.j.mK[0].set(bG.r, bG.g, bG.b);
        const SG = wG.j.mK[0],
          LG = wG.j.mK[1];
        SG.scaleToRef(ZG, LG), LG.scaleToRef(yG(0, GG), wG.j.mK[2]), this.l00.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(1, GG), wG.j.mK[2]), this.l1_1.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(2, GG), wG.j.mK[2]), this.l10.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(3, GG), wG.j.mK[2]), this.l11.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(4, GG), wG.j.mK[2]), this.l2_2.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(5, GG), wG.j.mK[2]), this.l2_1.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(6, GG), wG.j.mK[2]), this.l20.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(7, GG), wG.j.mK[2]), this.l21.addInPlace(wG.j.mK[2]), LG.scaleToRef(yG(8, GG), wG.j.mK[2]), this.l22.addInPlace(wG.j.mK[2])
      }
      scaleInPlace(GG) {
        this.l00.scaleInPlace(GG), this.l1_1.scaleInPlace(GG), this.l10.scaleInPlace(GG), this.l11.scaleInPlace(GG), this.l2_2.scaleInPlace(GG), this.l2_1.scaleInPlace(GG), this.l20.scaleInPlace(GG), this.l21.scaleInPlace(GG), this.l22.scaleInPlace(GG)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(kG[0]), this.l1_1.scaleInPlace(kG[1]), this.l10.scaleInPlace(kG[2]), this.l11.scaleInPlace(kG[3]), this.l2_2.scaleInPlace(kG[4]), this.l2_1.scaleInPlace(kG[5]), this.l20.scaleInPlace(kG[6]), this.l21.scaleInPlace(kG[7]), this.l22.scaleInPlace(kG[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(SG[0]), this.l1_1.scaleInPlace(SG[1]), this.l10.scaleInPlace(SG[2]), this.l11.scaleInPlace(SG[3]), this.l2_2.scaleInPlace(SG[4]), this.l2_1.scaleInPlace(SG[5]), this.l20.scaleInPlace(SG[6]), this.l21.scaleInPlace(SG[7]), this.l22.scaleInPlace(SG[8])
      }
      updateFromArray(GG) {
        return wG.p.FromArrayToRef(GG[0], 0, this.l00), wG.p.FromArrayToRef(GG[1], 0, this.l1_1), wG.p.FromArrayToRef(GG[2], 0, this.l10), wG.p.FromArrayToRef(GG[3], 0, this.l11), wG.p.FromArrayToRef(GG[4], 0, this.l2_2), wG.p.FromArrayToRef(GG[5], 0, this.l2_1), wG.p.FromArrayToRef(GG[6], 0, this.l20), wG.p.FromArrayToRef(GG[7], 0, this.l21), wG.p.FromArrayToRef(GG[8], 0, this.l22), this
      }
      updateFromFloatsArray(GG) {
        return wG.p.FromFloatsToRef(GG[0], GG[1], GG[2], this.l00), wG.p.FromFloatsToRef(GG[3], GG[4], GG[5], this.l1_1), wG.p.FromFloatsToRef(GG[6], GG[7], GG[8], this.l10), wG.p.FromFloatsToRef(GG[9], GG[10], GG[11], this.l11), wG.p.FromFloatsToRef(GG[12], GG[13], GG[14], this.l2_2), wG.p.FromFloatsToRef(GG[15], GG[16], GG[17], this.l2_1), wG.p.FromFloatsToRef(GG[18], GG[19], GG[20], this.l20), wG.p.FromFloatsToRef(GG[21], GG[22], GG[23], this.l21), wG.p.FromFloatsToRef(GG[24], GG[25], GG[26], this.l22), this
      }
      static FromArray(GG) {
        return (new UG).updateFromArray(GG)
      }
      static FromPolynomial(GG) {
        const bG = new UG;
        return bG.l00 = GG.xx.scale(.376127).add(GG.yy.scale(.376127)).add(GG.zz.scale(.376126)), bG.l1_1 = GG.y.scale(.977204), bG.l10 = GG.z.scale(.977204), bG.l11 = GG.x.scale(.977204), bG.l2_2 = GG.xy.scale(1.16538), bG.l2_1 = GG.yz.scale(1.16538), bG.l20 = GG.zz.scale(1.34567).subtract(GG.xx.scale(.672834)).subtract(GG.yy.scale(.672834)), bG.l21 = GG.zx.scale(1.16538), bG.l22 = GG.xx.scale(1.16538).subtract(GG.yy.scale(1.16538)), bG.l1_1.scaleInPlace(-1), bG.l11.scaleInPlace(-1), bG.l2_1.scaleInPlace(-1), bG.l21.scaleInPlace(-1), bG.scaleInPlace(Math.PI), bG
      }
    }
    class YG {
      constructor() {
        this.x = wG.p.Zero(), this.y = wG.p.Zero(), this.z = wG.p.Zero(), this.xx = wG.p.Zero(), this.yy = wG.p.Zero(), this.zz = wG.p.Zero(), this.xy = wG.p.Zero(), this.yz = wG.p.Zero(), this.zx = wG.p.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = UG.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(GG) {
        wG.j.mK[0].fGG(GG.r, GG.g, GG.b);
        const bG = wG.j.mK[0];
        this.xx.addInPlace(bG), this.yy.addInPlace(bG), this.zz.addInPlace(bG)
      }
      scaleInPlace(GG) {
        this.x.scaleInPlace(GG), this.y.scaleInPlace(GG), this.z.scaleInPlace(GG), this.xx.scaleInPlace(GG), this.yy.scaleInPlace(GG), this.zz.scaleInPlace(GG), this.yz.scaleInPlace(GG), this.zx.scaleInPlace(GG), this.xy.scaleInPlace(GG)
      }
      updateFromHarmonics(GG) {
        return this._harmonics = GG, this.x.oW(GG.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.oW(GG.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.oW(GG.l10), this.z.scaleInPlace(1.02333), this.xx.oW(GG.l00), wG.j.mK[0].oW(GG.l20).scaleInPlace(.247708), wG.j.mK[1].oW(GG.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).twG(wG.j.mK[0]).addInPlace(wG.j.mK[1]), this.yy.oW(GG.l00), this.yy.scaleInPlace(.886277).twG(wG.j.mK[0]).twG(wG.j.mK[1]), this.zz.oW(GG.l00), wG.j.mK[0].oW(GG.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(wG.j.mK[0]), this.yz.oW(GG.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.oW(GG.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.oW(GG.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(GG) {
        return (new YG).updateFromHarmonics(GG)
      }
      static FromArray(GG) {
        const bG = new YG;
        return wG.p.FromArrayToRef(GG[0], 0, bG.x), wG.p.FromArrayToRef(GG[1], 0, bG.y), wG.p.FromArrayToRef(GG[2], 0, bG.z), wG.p.FromArrayToRef(GG[3], 0, bG.xx), wG.p.FromArrayToRef(GG[4], 0, bG.yy), wG.p.FromArrayToRef(GG[5], 0, bG.zz), wG.p.FromArrayToRef(GG[6], 0, bG.yz), wG.p.FromArrayToRef(GG[7], 0, bG.zx), wG.p.FromArrayToRef(GG[8], 0, bG.xy), bG
      }
    }
  },
  40811: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => aG,
      c: () => lG
    });
    var wG = ZG(40393),
      SG = ZG(37465),
      LG = ZG(37439),
      yG = ZG(40524),
      kG = ZG(40795),
      UG = ZG(40820),
      YG = ZG(40517),
      VG = ZG(40681),
      pG = ZG(40508);
    class fG {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new LG.p(0, 0, 0), this._diffPositionForCollisions = new LG.p(0, 0, 0), this._collisionResponse = !0
      }
    }
    var QG, KG, hG, dG = ZG(40258),
      JG = ZG(40451),
      rG = ZG(40688),
      zG = ZG(37621),
      EG = ZG(37443),
      oG = ZG(40601),
      XG = ZG(39093),
      uG = ZG(40398),
      iG = ZG(40280),
      CG = ZG(37484);

    function WG(GG, bG) {
      return GG - Math.floor(GG / bG) * bG
    }

    function mG(GG, bG, ZG) {
      GG instanceof Float32Array ? LG.e.FromArrayToRef(GG, bG, ZG) : ZG.fGG((0, JG.c)(GG[bG]), (0, JG.c)(GG[bG + 1]), (0, JG.c)(GG[bG + 2]), (0, JG.c)(GG[bG + 3]), (0, JG.c)(GG[bG + 4]), (0, JG.c)(GG[bG + 5]), (0, JG.c)(GG[bG + 6]), (0, JG.c)(GG[bG + 7]), (0, JG.c)(GG[bG + 8]), (0, JG.c)(GG[bG + 9]), (0, JG.c)(GG[bG + 10]), (0, JG.c)(GG[bG + 11]), (0, JG.c)(GG[bG + 12]), (0, JG.c)(GG[bG + 13]), (0, JG.c)(GG[bG + 14]), (0, JG.c)(GG[bG + 15]))
    }

    function IG(GG, bG, ZG, wG, SG, kG, UG, YG, VG) {
      const pG = ZG.texture,
        fG = pG?.getInternalTexture(),
        QG = fG?._bufferView;
      if (!(QG instanceof Float32Array) && !(QG instanceof Uint16Array)) return XG.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const KG = pG.getSize(),
        hG = function(GG, bG) {
          const ZG = GG.y - GG.x + 1,
            wG = bG * GG.w / ZG,
            SG = wG < 1 ? 0 : 1,
            LG = ZG - SG;
          let yG = WG(wG - Math.floor(wG), 1) * LG;
          return yG = WG(yG + GG.z, LG), Math.floor(yG) + GG.x + SG
        }(wG, ZG.time);
      if (!isFinite(hG) || hG < 0 || hG >= KG.height) return XG.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const dG = LG.j.mK[0],
        JG = LG.j.Matrix[0],
        rG = LG.j.Matrix[1],
        zG = hG * KG.width * 4,
        EG = bG === yG.l.NormalKind ? LG.p.TransformNormalFromFloatsToRef : LG.p.TransformCoordinatesFromFloatsToRef;
      for (let LG = 0, yG = 0; LG < GG.length; LG += 3, yG += 4) {
        let bG, ZG;
        for (JG.reset(), bG = 0; bG < 4 && bG < VG; bG++) ZG = kG[yG + bG], ZG > 0 && (mG(QG, zG + 16 * Math.floor(SG[yG + bG]), rG), rG.scaleAndAddToRef(ZG, JG));
        if (UG && YG)
          for (bG = 0; bG < 4 && bG + 4 < VG; bG++) ZG = YG[yG + bG], ZG > 0 && (mG(QG, zG + 16 * Math.floor(UG[yG + bG]), rG), rG.scaleAndAddToRef(ZG, JG));
        EG(GG[LG], GG[LG + 1], GG[LG + 2], JG, dG), dG.toArray(GG, LG)
      }
      return !0
    }
    class FG {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = LG.p.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class vG {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new FG, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new fG, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let aG = (() => {
        var GG;
        let bG, fG = UG.d,
          QG = [];
        return GG = class extends fG {
          static get BILLBOARDMODE_NONE() {
            return UG.d.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return UG.d.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return UG.d.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return UG.d.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return UG.d.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return UG.d.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(GG) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = GG
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(GG) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = GG
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(GG) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = GG
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(GG) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = GG
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(GG) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = GG
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(GG) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== GG && (this._internalAbstractMeshDataInfo._morphTargetManager = GG, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(GG) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== GG && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = GG, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(GG) {
            return !!super._updateNonUniformScalingState(GG) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(GG) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = GG
          }
          set Uf(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(GG)
          }
          set onCollisionPositionChange(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(GG)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(GG) {
            if (this._internalAbstractMeshDataInfo._visibility === GG) return;
            const bG = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = GG, (1 === bG && 1 !== GG || 1 !== bG && 1 === GG) && this._markSubMeshesAsDirty((GG => {
              GG.markAsMiscDirty(), GG.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(GG) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = GG
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(GG) {
            this._internalAbstractMeshDataInfo._renderingGroupId = GG
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(GG) {
            if (!Number.isInteger(GG) || GG < 0 || GG > 255 || 0 !== GG && 0 === (63 & GG)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = GG
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(GG) {
            this._setMaterial(GG)
          }
          _setMaterial(GG) {
            this._internalAbstractMeshDataInfo._material !== GG && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = GG, GG && GG.meshMap && (GG.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.aE && (this.resetDrawCache(void 0, null == GG), this._unBindEffect()))
          }
          getMaterialForRenderPass(GG) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[GG]
          }
          setMaterialForRenderPass(GG, bG) {
            this.resetDrawCache(GG), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ZG = this._internalAbstractMeshDataInfo._materialForRenderPass[GG];
            ZG?.meshMap?.[this.uniqueId] && (ZG.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[GG] = bG, bG && bG.meshMap && (bG.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(GG) {
            this._internalAbstractMeshDataInfo._receiveShadows !== GG && (this._internalAbstractMeshDataInfo._receiveShadows = GG, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(GG) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== GG && (this._internalAbstractMeshDataInfo._hasVertexAlpha = GG, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(GG) {
            this._internalAbstractMeshDataInfo._useVertexColors !== GG && (this._internalAbstractMeshDataInfo._useVertexColors = GG, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(GG) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== GG && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = GG, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(GG) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== GG && (this._internalAbstractMeshDataInfo._numBoneInfluencers = GG, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(GG) {
            this._internalAbstractMeshDataInfo._applyFog !== GG && (this._internalAbstractMeshDataInfo._applyFog = GG, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(GG) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = GG
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(GG) {
            GG !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = GG, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(GG) ? -1 : GG
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = GG
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(GG) ? -1 : GG
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = GG
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(GG) {
            const bG = this._internalAbstractMeshDataInfo._skeleton;
            bG && bG.needInitialSkinMatrix && bG._unregisterMeshWithPoseMatrix(this), GG && GG.needInitialSkinMatrix && GG._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = GG, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(bG) {
            var ZG;
            let wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(bG, wG, !1), ZG = this, this._internalAbstractMeshDataInfo = new vG, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = GG.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new SG.c, this.onCollisionPositionChangeObservable = new SG.c, this.onMaterialChangedObservable = new SG.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.qh = GG.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = zG.c.Red(), this.outlineWidth = .02, this.overlayColor = zG.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.WK = !1, this.FK = !1, this.actionManager = null, this.ellipsoid = new LG.p(.5, 1, .5), this.ellipsoidOffset = new LG.p(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new zG.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                Kl: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new SG.c, this._onCollisionPositionChange = function(GG, bG) {
                let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                bG.subtractToRef(ZG._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ZG._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ZG._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > iG.c.CollisionsEpsilon && ZG.position.addInPlace(ZG._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), wG && ZG.onCollideObservable.notifyObservers(wG), ZG.onCollisionPositionChangeObservable.notifyObservers(ZG.position)
              }, wG = this.Dv(), this.layerMask = wG.defaultRenderableLayerMask, wG.FwG(this), this._resyncLightSources(), this._uniformBuffer = new pG.d(this.Dv().CK(), void 0, void 0, bG, !this.Dv().CK().isWebGPU), this._buildUniformLayout(), wG.performancePriority) {
              case 2:
                this.FK = !0;
              case 1:
                this.WK = !0, this.qh = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(GG) {
            const bG = this._uniformBuffer;
            bG.R6("world", GG), bG.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), bG.update()
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
          toString(GG) {
            let bG = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            bG += ", # of submeshes: " + (this.aE ? this.aE.length : 0);
            const ZG = this._internalAbstractMeshDataInfo._skeleton;
            return ZG && (bG += ", skeleton: " + ZG.name), GG && (bG += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], bG += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Kl ? "YES" : "NO")), bG
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== UG.d.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(GG) {
            let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (bG || this.actionManager.isRecursive)) {
              if (!GG) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(GG)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(GG, !1) : null
          }
          _releaseRenderPassId(GG) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.aE) {
              for (const GG of this.aE) GG._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const GG of this.Dv().lights) GG.isEnabled() && GG.canAffectMesh(this) && this._lightSources.push(GG);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(GG) {
            const bG = GG.isEnabled() && GG.canAffectMesh(this),
              ZG = this._lightSources.indexOf(GG);
            let wG = !1;
            if (-1 === ZG) {
              if (!bG) return;
              this._lightSources.push(GG)
            } else {
              if (bG) return;
              wG = !0, this._lightSources.splice(ZG, 1)
            }
            this._markSubMeshesAsLightDirty(wG)
          }
          _unBindEffect() {
            for (const GG of this.aE) GG.setEffect(null)
          }
          _removeLightSource(GG, bG) {
            const ZG = this._lightSources.indexOf(GG); - 1 !== ZG && (this._lightSources.splice(ZG, 1), this._markSubMeshesAsLightDirty(bG))
          }
          _markSubMeshesAsDirty(GG) {
            if (this.aE)
              for (const bG of this.aE)
                for (let ZG = 0; ZG < bG._drawWrappers.length; ++ZG) {
                  const wG = bG._drawWrappers[ZG];
                  wG && wG.defines && wG.defines.markAllAsDirty && GG(wG.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((bG => bG.markAsLightDirty(GG)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((GG => GG.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((GG => GG.markAsMiscDirty()))
          }
          wZG(GG) {
            return this._currentRenderId = Number.MAX_VALUE, super.wZG(GG), this._isDirty = !0, this
          }
          resetDrawCache(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.aE)
              for (const ZG of this.aE) ZG.resetDrawCache(GG, bG)
          }
          get isBlocked() {
            return !1
          }
          getLOD(GG) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          IwG() {
            return null
          }
          getVerticesData(GG) {
            return null
          }
          setVerticesData(GG, bG, ZG, wG) {
            return this
          }
          updateVerticesData(GG, bG, ZG, wG) {
            return this
          }
          setIndices(GG, bG) {
            return this
          }
          isVerticesDataPresent(GG) {
            return !1
          }
          HA() {
            return this._masterMesh ? this._masterMesh.HA() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.HA()
          }
          setBoundingInfo(GG) {
            return this._boundingInfo = GG, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(GG, bG, ZG) {
            return this._boundingInfo = new VG.c(GG, bG, ZG), this._boundingInfo
          }
          normalizeToUnitCube() {
            let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(GG, bG, ZG)
          }
          get useBones() {
            return this.skeleton && this.Dv().skeletonsEnabled && this.isVerticesDataPresent(yG.l.MatricesIndicesKind) && this.isVerticesDataPresent(yG.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(GG) {}
          _activate(GG, bG) {
            return this._renderId = GG, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === UG.d.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get Ul() {
            return !1
          }
          get zSG() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(GG, bG, ZG) {
            return this.position.addInPlace(this.calcMovePOV(GG, bG, ZG)), this
          }
          calcMovePOV(GG, bG, ZG) {
            const wG = new LG.e;
            (this.rotationQuaternion ? this.rotationQuaternion : LG.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(wG);
            const SG = LG.p.Zero(),
              yG = this.definedFacingForward ? -1 : 1;
            return LG.p.TransformCoordinatesFromFloatsToRef(GG * yG, bG, ZG * yG, wG, SG), SG
          }
          rotatePOV(GG, bG, ZG) {
            return this.rotation.addInPlace(this.calcRotatePOV(GG, bG, ZG)), this
          }
          calcRotatePOV(GG, bG, ZG) {
            const wG = this.definedFacingForward ? 1 : -1;
            return new LG.p(GG * wG, bG, ZG * wG)
          }
          _refreshBoundingInfo(GG, bG) {
            if (GG) {
              const ZG = (0, rG.g)(GG, 0, this.getTotalVertices(), bG);
              this._boundingInfo ? this._boundingInfo.reConstruct(ZG.minimum, ZG.maximum) : this._boundingInfo = new VG.c(ZG.minimum, ZG.maximum)
            }
            if (this.aE)
              for (let ZG = 0; ZG < this.aE.length; ZG++) this.aE[ZG].refreshBoundingInfo(GG);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(GG) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(GG.minimum, GG.maximum) : this._boundingInfo = new VG.c(GG.minimum, GG.maximum), this.aE)
              for (let bG = 0; bG < this.aE.length; bG++) this.aE[bG].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(GG, bG, ZG, wG, SG, kG, UG) {
            ! function(GG, bG, ZG, wG, SG, kG, UG) {
              const YG = LG.j.mK[0],
                VG = LG.j.Matrix[0],
                pG = LG.j.Matrix[1],
                fG = bG === yG.l.NormalKind ? LG.p.TransformNormalFromFloatsToRef : LG.p.TransformCoordinatesFromFloatsToRef;
              for (let yG = 0, QG = 0; yG < GG.length; yG += 3, QG += 4) {
                let bG, KG;
                for (VG.reset(), bG = 0; bG < 4; bG++) KG = SG[QG + bG], KG > 0 && (LG.e.FromFloat32ArrayToRefScaled(ZG, Math.floor(16 * wG[QG + bG]), KG, pG), VG.addToSelf(pG));
                if (kG && UG)
                  for (bG = 0; bG < 4; bG++) KG = UG[QG + bG], KG > 0 && (LG.e.FromFloat32ArrayToRefScaled(ZG, Math.floor(16 * kG[QG + bG]), KG, pG), VG.addToSelf(pG));
                fG(GG[yG], GG[yG + 1], GG[yG + 2], VG, YG), YG.toArray(GG, yG)
              }
            }(GG, bG, ZG, wG, SG, kG, UG)
          }
          _getData(bG, ZG) {
            let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yG.l.PositionKind;
            const SG = bG.cache,
              kG = GG => {
                if (SG) {
                  const bG = SG._vertexData || (SG._vertexData = {});
                  return bG[GG] || this.copyVerticesData(GG, bG), bG[GG]
                }
                return this.getVerticesData(GG)
              };
            if (ZG || (ZG = kG(wG)), !ZG) return null;
            SG ? (SG._outputData ? SG._outputData.set(ZG) : SG._outputData = new Float32Array(ZG), ZG = SG._outputData) : (bG.applyMorph && this.morphTargetManager || bG.applySkeleton && this.skeleton || bG.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ZG = ZG.slice()), bG.applyMorph && this.morphTargetManager && function(GG, bG, ZG) {
              let wG;
              switch (bG) {
                case yG.l.PositionKind:
                  wG = GG => GG.getPositions();
                  break;
                case yG.l.NormalKind:
                  wG = GG => GG.getNormals();
                  break;
                case yG.l.TangentKind:
                  wG = GG => GG.getTangents();
                  break;
                case yG.l.UVKind:
                  wG = GG => GG.getUVs();
                  break;
                case yG.l.UV2Kind:
                  wG = GG => GG.getUV2s();
                  break;
                case yG.l.ColorKind:
                  wG = GG => GG.getColors();
                  break;
                default:
                  return
              }
              for (let SG = 0; SG < GG.length; SG++) {
                let bG = GG[SG];
                for (let LG = 0; LG < ZG.numTargets; LG++) {
                  const yG = ZG.getTarget(LG),
                    kG = yG.influence;
                  if (0 !== kG) {
                    const ZG = wG(yG);
                    ZG && (bG += (ZG[SG] - GG[SG]) * kG)
                  }
                }
                GG[SG] = bG
              }
            }(ZG, wG, this.morphTargetManager);
            const UG = this.bakedVertexAnimationManager;
            let YG = !1;
            if (bG.applyBakedVertexAnimation && UG?.isEnabled) {
              const GG = kG(yG.l.MatricesIndicesKind),
                SG = kG(yG.l.MatricesWeightsKind);
              if (SG && GG) {
                const LG = this.numBoneInfluencers > 4,
                  VG = LG ? kG(yG.l.MatricesIndicesExtraKind) : null,
                  pG = LG ? kG(yG.l.MatricesWeightsExtraKind) : null;
                YG = IG(ZG, wG, UG, bG.bakedVertexAnimationSettings ?? UG.animationParameters, GG, SG, VG, pG, this.numBoneInfluencers)
              }
            }
            if (!YG && bG.applySkeleton && this.skeleton) {
              const bG = kG(yG.l.MatricesIndicesKind),
                SG = kG(yG.l.MatricesWeightsKind);
              if (SG && bG) {
                const LG = this.numBoneInfluencers > 4,
                  UG = LG ? kG(yG.l.MatricesIndicesExtraKind) : null,
                  YG = LG ? kG(yG.l.MatricesWeightsExtraKind) : null,
                  VG = this.skeleton.getTransformMatrices(this);
                GG._ApplySkeleton(ZG, wG, VG, bG, SG, UG, YG)
              }
            }
            if (!1 !== bG.updatePositionsArray && wG === yG.l.PositionKind) {
              const GG = this._internalAbstractMeshDataInfo._positions || [],
                bG = GG.length;
              if (GG.length = ZG.length / 3, bG < GG.length)
                for (let ZG = bG; ZG < GG.length; ZG++) GG[ZG] = new LG.p;
              for (let wG = 0, SG = 0; wG < GG.length; wG++, SG += 3) GG[wG].fGG(ZG[SG], ZG[SG + 1], ZG[SG + 2]);
              this._internalAbstractMeshDataInfo._positions = GG
            }
            return ZG
          }
          getNormalsData() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: GG,
              applyMorph: bG,
              updatePositionsArray: !1
            }, null, yG.l.NormalKind)
          }
          kN() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: GG,
              applyMorph: bG,
              updatePositionsArray: !1
            }, ZG, yG.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new VG.c(LG.p.Zero(), LG.p.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(GG) {
            if (!this.aE) return this;
            const bG = this.aE.length;
            for (let ZG = 0; ZG < bG; ZG++) {
              const wG = this.aE[ZG];
              (bG > 1 || !wG.IsGlobal) && wG.updateBoundingInfo(GG)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.FK || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(GG) {
            return this.HA().isInFrustum(GG, this.cullingStrategy)
          }
          isCompletelyInFrustum(GG) {
            return this.HA().isCompletelyInFrustum(GG)
          }
          QSG(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = arguments.length > 2 ? arguments[2] : void 0;
            const wG = this.HA(),
              SG = GG.HA();
            if (wG.intersects(SG, bG)) return !0;
            if (ZG)
              for (const LG of this.getChildMeshes())
                if (LG.QSG(GG, bG, !0)) return !0;
            return !1
          }
          intersectsPoint(GG) {
            return this.HA().intersectsPoint(GG)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(GG) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = GG
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(GG) {
            let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ZG = this.Dv().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ZG.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ZG.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, GG, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, bG), this
          }
          _collideForSubMesh(GG, bG, ZG) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!GG._lastColliderWorldVertices || !GG._lastColliderTransformMatrix.equals(bG)) {
              GG._lastColliderTransformMatrix = bG.clone(), GG._lastColliderWorldVertices = [], GG._trianglePlanes = [];
              const ZG = GG.verticesStart,
                wG = GG.verticesStart + GG.verticesCount;
              for (let SG = ZG; SG < wG; SG++) GG._lastColliderWorldVertices.push(LG.p.TransformCoordinates(this._positions[SG], bG))
            }
            return ZG._collide(GG._trianglePlanes, GG._lastColliderWorldVertices, this.IwG(), GG.indexStart, GG.indexStart + GG.indexCount, GG.verticesStart, !!GG.vK(), this, this._shouldConvertRHS(), 7 === GG.vK()?.fillMode), this
          }
          _processCollisionsForSubMeshes(GG, bG) {
            const ZG = this._scene.getCollidingSubMeshCandidates(this, GG),
              wG = ZG.length;
            for (let SG = 0; SG < wG; SG++) {
              const LG = ZG.data[SG];
              wG > 1 && !LG._checkCollision(GG) || this._collideForSubMesh(LG, bG, GG)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(GG) {
            if (!this.HA()._checkCollision(GG)) return this;
            const bG = LG.j.Matrix[0],
              ZG = LG.j.Matrix[1];
            return LG.e.ScalingToRef(1 / GG._radius.x, 1 / GG._radius.y, 1 / GG._radius.z, bG), this.worldMatrixFromCache.multiplyToRef(bG, ZG), this._processCollisionsForSubMeshes(GG, ZG), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(GG, bG, ZG) {
            let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              SG = arguments.length > 4 ? arguments[4] : void 0,
              yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const kG = new YG.c,
              UG = this.getClassName(),
              VG = "InstancedLinesMesh" === UG || "LinesMesh" === UG || "GreasedLineMesh" === UG ? this.intersectionThreshold : 0,
              pG = this.HA();
            if (!this.aE) return kG;
            if (!yG && (!GG.intersectsSphere(pG.xwG, VG) || !GG.intersectsBox(pG.boundingBox, VG))) return kG;
            if (wG) return kG.hit = !yG, kG.pickedMesh = yG ? null : this, kG.distance = yG ? 0 : LG.p.Distance(GG.origin, pG.xwG.center), kG.subMeshId = 0, kG;
            if (!this._generatePointsArray()) return kG;
            let fG = null;
            const QG = this._scene.getIntersectingSubMeshCandidates(this, GG),
              KG = QG.length;
            let hG = !1;
            for (let LG = 0; LG < KG; LG++) {
              const GG = QG.data[LG].vK();
              if (GG && (7 == GG.fillMode || 0 == GG.fillMode || 1 == GG.fillMode || 2 == GG.fillMode || 4 == GG.fillMode)) {
                hG = !0;
                break
              }
            }
            if (!hG) return kG.hit = !0, kG.pickedMesh = this, kG.distance = LG.p.Distance(GG.origin, pG.xwG.center), kG.subMeshId = -1, kG;
            for (let LG = 0; LG < KG; LG++) {
              const wG = QG.data[LG];
              if (KG > 1 && !yG && !wG.canIntersects(GG)) continue;
              const SG = wG.intersects(GG, this._positions, this.IwG(), bG, ZG);
              if (SG && (bG || !fG || SG.distance < fG.distance) && (fG = SG, fG.subMeshId = wG._id, fG._internalSubMeshId = LG, bG)) break
            }
            if (fG) {
              const bG = SG ?? this.getWorldMatrix(),
                ZG = LG.j.mK[0],
                wG = LG.j.mK[1];
              LG.p.TransformCoordinatesToRef(GG.origin, bG, ZG), GG.direction.scaleToRef(fG.distance, wG);
              const yG = LG.p.TransformNormal(wG, bG).addInPlace(ZG);
              return kG.hit = !0, kG.distance = LG.p.Distance(ZG, yG), kG.pickedPoint = yG, kG.pickedMesh = this, kG.bu = fG.bu || 0, kG.bv = fG.bv || 0, kG.subMeshFaceId = fG.faceId, kG.faceId = fG.faceId + QG.data[fG._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), kG.subMeshId = fG.subMeshId, kG
            }
            return kG
          }
          clone(GG, bG, ZG) {
            return null
          }
          releaseSubMeshes() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.aE)
              for (; this.aE.length;) this.aE[0].dispose(GG);
            else this.aE = [];
            return this
          }
          dispose(GG) {
            let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const wG = this.Dv();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), wG.freeActiveMeshes(), wG.freeRenderingGroups(), wG.renderingManager.maintainStateBetweenFrames && wG.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((GG => GG !== this && GG.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), bG = 0; bG < this._intersectionsInProgress.length; bG++) {
              const GG = this._intersectionsInProgress[bG],
                ZG = GG._intersectionsInProgress.indexOf(this);
              GG._intersectionsInProgress.splice(ZG, 1)
            }
            this._intersectionsInProgress.length = 0;
            const SG = wG.lights;
            for (const yG of SG) {
              let GG = yG.includedOnlyMeshes.indexOf(this); - 1 !== GG && yG.includedOnlyMeshes.splice(GG, 1), GG = yG.excludedMeshes.indexOf(this), -1 !== GG && yG.excludedMeshes.splice(GG, 1);
              const bG = yG.getShadowGenerators();
              if (bG) {
                const ZG = bG.values();
                for (let bG = ZG.next(); !0 !== bG.done; bG = ZG.next()) {
                  const ZG = bG.value.getShadowMap();
                  ZG && ZG.renderList && (GG = ZG.renderList.indexOf(this), -1 !== GG && ZG.renderList.splice(GG, 1))
                }
              }
            }
            this.releaseSubMeshes(wG._isDisposing);
            const LG = wG.CK();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, LG.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), LG.wipeCaches(), wG.Rl(this), this._parentContainer) {
              const GG = this._parentContainer.meshes.indexOf(this);
              GG > -1 && this._parentContainer.meshes.splice(GG, 1), this._parentContainer = null
            }
            if (ZG && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !GG)
              for (bG = 0; bG < wG.lE.length; bG++) wG.lE[bG].emitter === this && (wG.lE[bG].dispose(), bG--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(GG, ZG)
          }
          _initFacetData() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            GG.facetNormals || (GG.facetNormals = []), GG.facetPositions || (GG.facetPositions = []), GG.facetPartitioning || (GG.facetPartitioning = new Array), GG.facetNb = this.IwG().length / 3 | 0, GG.partitioningSubdivisions = GG.partitioningSubdivisions ? GG.partitioningSubdivisions : 10, GG.partitioningBBoxRatio = GG.partitioningBBoxRatio ? GG.partitioningBBoxRatio : 1.01;
            for (let bG = 0; bG < GG.facetNb; bG++) GG.facetNormals[bG] = LG.p.Zero(), GG.facetPositions[bG] = LG.p.Zero();
            return GG.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            GG.facetDataEnabled || this._initFacetData();
            const bG = this.getVerticesData(yG.l.PositionKind),
              ZG = this.IwG(),
              wG = this.getVerticesData(yG.l.NormalKind)?.slice(),
              SG = this.HA();
            if (GG.facetDepthSort && !GG.facetDepthSortEnabled) {
              if (GG.facetDepthSortEnabled = !0, ZG instanceof Uint16Array) GG.depthSortedIndices = new Uint16Array(ZG);
              else if (ZG instanceof Uint32Array) GG.depthSortedIndices = new Uint32Array(ZG);
              else {
                let bG = !1;
                for (let GG = 0; GG < ZG.length; GG++)
                  if (ZG[GG] > 65535) {
                    bG = !0;
                    break
                  } GG.depthSortedIndices = bG ? new Uint32Array(ZG) : new Uint16Array(ZG)
              }
              if (GG.facetDepthSortFunction = function(GG, bG) {
                  return bG.sqDistance - GG.sqDistance
                }, !GG.facetDepthSortFrom) {
                const bG = this.Dv().activeCamera;
                GG.facetDepthSortFrom = bG ? bG.position : LG.p.Zero()
              }
              GG.depthSortedFacets = [];
              for (let bG = 0; bG < GG.facetNb; bG++) {
                const ZG = {
                  ind: 3 * bG,
                  sqDistance: 0
                };
                GG.depthSortedFacets.push(ZG)
              }
              GG.invertedMatrix = LG.e.Identity(), GG.facetDepthSortOrigin = LG.p.Zero()
            }
            GG.bbSize.x = SG.maximum.x - SG.minimum.x > EG.d ? SG.maximum.x - SG.minimum.x : EG.d, GG.bbSize.y = SG.maximum.y - SG.minimum.y > EG.d ? SG.maximum.y - SG.minimum.y : EG.d, GG.bbSize.z = SG.maximum.z - SG.minimum.z > EG.d ? SG.maximum.z - SG.minimum.z : EG.d;
            let UG = GG.bbSize.x > GG.bbSize.y ? GG.bbSize.x : GG.bbSize.y;
            if (UG = UG > GG.bbSize.z ? UG : GG.bbSize.z, GG.subDiv.max = GG.partitioningSubdivisions, GG.subDiv.X = Math.floor(GG.subDiv.max * GG.bbSize.x / UG), GG.subDiv.Y = Math.floor(GG.subDiv.max * GG.bbSize.y / UG), GG.subDiv.Z = Math.floor(GG.subDiv.max * GG.bbSize.z / UG), GG.subDiv.X = GG.subDiv.X < 1 ? 1 : GG.subDiv.X, GG.subDiv.Y = GG.subDiv.Y < 1 ? 1 : GG.subDiv.Y, GG.subDiv.Z = GG.subDiv.Z < 1 ? 1 : GG.subDiv.Z, GG.facetParameters.facetNormals = this.getFacetLocalNormals(), GG.facetParameters.facetPositions = this.getFacetLocalPositions(), GG.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), GG.facetParameters.bInfo = SG, GG.facetParameters.bbSize = GG.bbSize, GG.facetParameters.subDiv = GG.subDiv, GG.facetParameters.ratio = this.partitioningBBoxRatio, GG.facetParameters.depthSort = GG.facetDepthSort, GG.facetDepthSort && GG.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(GG.invertedMatrix), LG.p.TransformCoordinatesToRef(GG.facetDepthSortFrom, GG.invertedMatrix, GG.facetDepthSortOrigin), GG.facetParameters.distanceTo = GG.facetDepthSortOrigin), GG.facetParameters.depthSortedFacets = GG.depthSortedFacets, wG && kG.e.ComputeNormals(bG, ZG, wG, GG.facetParameters), GG.facetDepthSort && GG.facetDepthSortEnabled) {
              GG.depthSortedFacets.sort(GG.facetDepthSortFunction);
              const bG = GG.depthSortedIndices.length / 3 | 0;
              for (let wG = 0; wG < bG; wG++) {
                const bG = GG.depthSortedFacets[wG].ind;
                GG.depthSortedIndices[3 * wG] = ZG[bG], GG.depthSortedIndices[3 * wG + 1] = ZG[bG + 1], GG.depthSortedIndices[3 * wG + 2] = ZG[bG + 2]
              }
              this.updateIndices(GG.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            return GG.facetNormals || this.updateFacetData(), GG.facetNormals
          }
          getFacetLocalPositions() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            return GG.facetPositions || this.updateFacetData(), GG.facetPositions
          }
          getFacetLocalPartitioning() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            return GG.facetPartitioning || this.updateFacetData(), GG.facetPartitioning
          }
          getFacetPosition(GG) {
            const bG = LG.p.Zero();
            return this.getFacetPositionToRef(GG, bG), bG
          }
          getFacetPositionToRef(GG, bG) {
            const ZG = this.getFacetLocalPositions()[GG],
              wG = this.getWorldMatrix();
            return LG.p.TransformCoordinatesToRef(ZG, wG, bG), this
          }
          getFacetNormal(GG) {
            const bG = LG.p.Zero();
            return this.getFacetNormalToRef(GG, bG), bG
          }
          getFacetNormalToRef(GG, bG) {
            const ZG = this.getFacetLocalNormals()[GG];
            return LG.p.TransformNormalToRef(ZG, this.getWorldMatrix(), bG), this
          }
          getFacetsAtLocalCoordinates(GG, bG, ZG) {
            const wG = this.HA(),
              SG = this._internalAbstractMeshDataInfo._facetData,
              LG = Math.floor((GG - wG.minimum.x * SG.partitioningBBoxRatio) * SG.subDiv.X * SG.partitioningBBoxRatio / SG.bbSize.x),
              yG = Math.floor((bG - wG.minimum.y * SG.partitioningBBoxRatio) * SG.subDiv.Y * SG.partitioningBBoxRatio / SG.bbSize.y),
              kG = Math.floor((ZG - wG.minimum.z * SG.partitioningBBoxRatio) * SG.subDiv.Z * SG.partitioningBBoxRatio / SG.bbSize.z);
            return LG < 0 || LG > SG.subDiv.max || yG < 0 || yG > SG.subDiv.max || kG < 0 || kG > SG.subDiv.max ? null : SG.facetPartitioning[LG + SG.subDiv.max * yG + SG.subDiv.max * SG.subDiv.max * kG]
          }
          getClosestFacetAtCoordinates(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const kG = this.getWorldMatrix(),
              UG = LG.j.Matrix[5];
            kG.invertToRef(UG);
            const YG = LG.j.mK[8];
            LG.p.TransformCoordinatesFromFloatsToRef(GG, bG, ZG, UG, YG);
            const VG = this.getClosestFacetAtLocalCoordinates(YG.x, YG.y, YG.z, wG, SG, yG);
            return wG && LG.p.TransformCoordinatesFromFloatsToRef(wG.x, wG.y, wG.z, kG, wG), VG
          }
          getClosestFacetAtLocalCoordinates(GG, bG, ZG, wG) {
            let SG, LG, yG, kG, UG, YG, VG, pG, fG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              QG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              KG = null;
            const hG = this.getFacetLocalPositions(),
              dG = this.getFacetLocalNormals(),
              JG = this.getFacetsAtLocalCoordinates(GG, bG, ZG);
            if (!JG) return null;
            let rG, zG, EG, oG, XG = Number.MAX_VALUE;
            for (let uG = 0; uG < JG.length; uG++) zG = JG[uG], EG = dG[zG], oG = hG[zG], kG = (GG - oG.x) * EG.x + (bG - oG.y) * EG.y + (ZG - oG.z) * EG.z, (!fG || fG && QG && kG >= 0 || fG && !QG && kG <= 0) && (kG = EG.x * oG.x + EG.y * oG.y + EG.z * oG.z, UG = -(EG.x * GG + EG.y * bG + EG.z * ZG - kG) / (EG.x * EG.x + EG.y * EG.y + EG.z * EG.z), YG = GG + EG.x * UG, VG = bG + EG.y * UG, pG = ZG + EG.z * UG, SG = YG - GG, LG = VG - bG, yG = pG - ZG, rG = SG * SG + LG * LG + yG * yG, rG < XG && (XG = rG, KG = zG, wG && (wG.x = YG, wG.y = VG, wG.z = pG)));
            return KG
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const GG = this._internalAbstractMeshDataInfo._facetData;
            return GG.facetDataEnabled && (GG.facetDataEnabled = !1, GG.facetPositions = [], GG.facetNormals = [], GG.facetPartitioning = new Array, GG.facetParameters = {}, GG.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(GG, bG) {
            return this
          }
          createNormals(GG) {
            const bG = this.getVerticesData(yG.l.PositionKind),
              ZG = this.IwG();
            let wG;
            return wG = this.isVerticesDataPresent(yG.l.NormalKind) ? this.getVerticesData(yG.l.NormalKind) : [], kG.e.ComputeNormals(bG, ZG, wG, {
              useRightHandedSystem: this.Dv().useRightHandedSystem
            }), this.setVerticesData(yG.l.NormalKind, wG, GG), this
          }
          async optimizeIndicesAsync() {
            const GG = this.IwG();
            if (!GG) return this;
            const {
              OptimizeIndices: bG
            } = await ZG.e(356).then((() => ZG(43002)));
            return bG(GG), this.setIndices(GG, this.getTotalVertices()), this
          }
          alignWithNormal(GG, bG) {
            bG || (bG = oG.c.Y);
            const ZG = LG.j.mK[0],
              wG = LG.j.mK[1];
            return LG.p.CrossToRef(bG, GG, wG), LG.p.CrossToRef(GG, wG, ZG), this.rotationQuaternion ? LG.g.RotationQuaternionFromAxisToRef(ZG, GG, wG, this.rotationQuaternion) : LG.p.RotationFromAxisToRef(ZG, GG, wG, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, dG.i)("EdgesRenderer")
          }
          enableEdgesRendering(GG, bG, ZG) {
            throw (0, dG.i)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.lE.filter((GG => GG.emitter === this))
          }
        }, (() => {
          const ZG = "function" === typeof Symbol && Symbol.metadata ? Object.create(fG[Symbol.metadata] ?? null) : void 0;
          bG = [uG.g.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, wG.k)(GG, null, bG, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: GG => "_ApplySkeleton" in GG,
              get: GG => GG._ApplySkeleton
            },
            metadata: ZG
          }, null, QG), ZG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZG
          })
        })(), GG.OCCLUSION_TYPE_NONE = ((0, wG.n)(GG, QG), 0), GG.OCCLUSION_TYPE_OPTIMISTIC = 1, GG.OCCLUSION_TYPE_STRICT = 2, GG.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, GG.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, GG.CULLINGSTRATEGY_STANDARD = 0, GG.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, GG.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, GG.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, GG.DefaultIsPickable = !0, GG
      })(),
      cG = !1;

    function lG() {
      cG || (cG = !0, (0, CG.i)("BABYLON.AbstractMesh", aG))
    }(QG = aG.prototype).createOrUpdateSubmeshesOctree ?? (QG.createOrUpdateSubmeshesOctree = (0, dG.h)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (KG = aG.prototype).getPhysicsImpostor ?? (KG.getPhysicsImpostor = (0, dG.h)("AbstractMesh", "getPhysicsImpostor")), (hG = aG.prototype).setPhysicsLinkWith ?? (hG.setPhysicsLinkWith = (0, dG.h)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(aG.prototype, "occlusionRetryCount") || Object.defineProperty(aG.prototype, "occlusionRetryCount", (0, dG.d)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(aG.prototype, "occlusionType") || Object.defineProperty(aG.prototype, "occlusionType", (0, dG.d)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(aG.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(aG.prototype, "occlusionQueryAlgorithmType", (0, dG.d)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(aG.prototype, "isOccluded") || Object.defineProperty(aG.prototype, "isOccluded", (0, dG.d)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(aG.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(aG.prototype, "isOcclusionQueryInProgress", (0, dG.d)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(aG.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(aG.prototype, "forceRenderingWhenOccluded", (0, dG.d)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(aG.prototype, "occlusionForRenderPassId") || Object.defineProperty(aG.prototype, "occlusionForRenderPassId", (0, dG.d)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(aG.prototype, "decalMap") || Object.defineProperty(aG.prototype, "decalMap", (0, dG.d)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(aG.prototype, "hA") || Object.defineProperty(aG.prototype, "hA", (0, dG.d)("AbstractMesh", "hA")), Object.getOwnPropertyDescriptor(aG.prototype, "physicsImpostor") || Object.defineProperty(aG.prototype, "physicsImpostor", (0, dG.d)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(aG.prototype, "showBoundingBox") || Object.defineProperty(aG.prototype, "showBoundingBox", (0, dG.d)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(aG.prototype, "edgesRenderer") || Object.defineProperty(aG.prototype, "edgesRenderer", (0, dG.d)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(aG.prototype, "renderOutline") || Object.defineProperty(aG.prototype, "renderOutline", (0, dG.d)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(aG.prototype, "renderOverlay") || Object.defineProperty(aG.prototype, "renderOverlay", (0, dG.d)("AbstractMesh", "renderOverlay"))
  },
  40797: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => JG
    });
    var wG = ZG(37439),
      SG = ZG(37621),
      LG = ZG(40795),
      yG = ZG(40524),
      kG = ZG(40673),
      UG = ZG(40800),
      YG = ZG(40681),
      VG = ZG(40477),
      pG = ZG(39093),
      fG = ZG(40418),
      QG = ZG(40688),
      KG = ZG(37463),
      hG = ZG(40805),
      dG = ZG(40447);
    class JG {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(GG) {
        this._boundingBias ? this._boundingBias.oW(GG) : this._boundingBias = GG.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(GG) {
        const bG = new JG(JG.RandomId(), GG.Dv());
        return bG.applyToMesh(GG), bG
      }
      get meshes() {
        return this._meshes
      }
      constructor(GG, bG, ZG) {
        let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new wG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new wG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = bG || KG.c.LastCreatedScene, this._scene && (this.id = GG, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.CK(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = SG, null !== yG && (this._totalVertices = yG), ZG ? this.setAllVerticesData(ZG, SG) : null === yG && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), LG && (this.applyToMesh(LG), LG.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      Dv() {
        return this._scene
      }
      CK() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let GG = 0; GG < this._meshes.length; GG++)
          if (!this._meshes[GG].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const GG = new Set;
        for (const bG in this._vertexBuffers) GG.add(this._vertexBuffers[bG].getWrapperBuffer());
        GG.forEach((GG => {
          GG._rebuild()
        }))
      }
      setAllVerticesData(GG, bG) {
        GG.applyToGeometry(this, bG), this._notifyUpdate()
      }
      setVerticesData(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0;
        ZG && Array.isArray(bG) && (bG = new Float32Array(bG));
        const SG = new yG.l(this._engine, bG, GG, {
          updatable: ZG,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: wG,
          label: "Geometry_" + this.id + "_" + GG
        });
        this.setVerticesBuffer(SG)
      }
      removeVerticesData(GG) {
        this._vertexBuffers[GG] && (this._vertexBuffers[GG].dispose(), delete this._vertexBuffers[GG]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const SG = GG.getKind();
        this._vertexBuffers[SG] && ZG && this._vertexBuffers[SG].dispose(), GG._buffer && GG._ownsBuffer && GG._buffer._increaseReferences(), this._vertexBuffers[SG] = GG;
        const LG = this._meshes,
          kG = LG.length;
        if (SG === yG.l.PositionKind) {
          this._totalVertices = bG ?? GG._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : GG.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ZG = this._extend && this._extend.minimum || new wG.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            SG = this._extend && this._extend.maximum || new wG.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let GG = 0; GG < kG; GG++) {
            const bG = LG[GG];
            bG.buildBoundingInfo(ZG, SG), bG._createGlobalSubMesh(bG.isUnIndexed), bG.computeWorldMatrix(!0), bG.synchronizeInstances()
          }
        }
        this._notifyUpdate(SG)
      }
      updateVerticesDataDirectly(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SG = this.getVertexBuffer(GG);
        SG && (SG.updateDirectly(bG, ZG, wG), this._notifyUpdate(GG))
      }
      updateVerticesData(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this.getVertexBuffer(GG);
        wG && (wG.update(bG), GG === yG.l.PositionKind && this._updateBoundingInfo(ZG, bG), this._notifyUpdate(GG))
      }
      _updateBoundingInfo(GG, bG) {
        if (GG && this._updateExtend(bG), this._resetPointsArrayCache(), GG) {
          const GG = this._meshes;
          for (const bG of GG) {
            bG.hasBoundingInfo ? bG.HA().reConstruct(this._extend.minimum, this._extend.maximum) : bG.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const GG = bG.aE;
            for (const bG of GG) bG.refreshBoundingInfo()
          }
        }
      }
      _bind(GG, bG, ZG, wG) {
        if (!GG) return;
        void 0 === bG && (bG = this._indexBuffer);
        const SG = this.getVertexBuffers();
        if (!SG) return;
        if (bG != this._indexBuffer || !this._vertexArrayObjects && !wG) return void this._engine.bindBuffers(SG, bG, GG, ZG);
        const LG = wG || this._vertexArrayObjects,
          yG = this._engine;
        LG[GG.key] || (LG[GG.key] = yG.recordVertexArrayObject(SG, bG, GG, ZG)), yG.bindVertexArrayObject(LG[GG.key], bG)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(GG, bG, ZG) {
        const wG = this.getVertexBuffer(GG);
        return wG ? wG.getFloatData(this._totalVertices, ZG || bG && 1 !== this._meshes.length) : null
      }
      copyVerticesData(GG, bG) {
        const ZG = this.getVertexBuffer(GG);
        if (!ZG) return;
        bG[GG] || (bG[GG] = new Float32Array(this._totalVertices * ZG.getSize()));
        const wG = ZG.getData();
        wG && (0, dG.f)(wG, ZG.getSize(), ZG.type, ZG.byteOffset, ZG.byteStride, ZG.normalized, this._totalVertices, bG[GG])
      }
      isVertexBufferUpdatable(GG) {
        const bG = this._vertexBuffers[GG];
        return !!bG && bG.isUpdatable()
      }
      getVertexBuffer(GG) {
        return this.isReady() ? this._vertexBuffers[GG] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(GG) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[GG] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(GG)
      }
      getVerticesDataKinds() {
        const GG = [];
        let bG;
        if (!this._vertexBuffers && this._delayInfo)
          for (bG in this._delayInfo) GG.push(bG);
        else
          for (bG in this._vertexBuffers) GG.push(bG);
        return GG
      }
      updateIndices(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const wG = GG.length !== this._indices.length;
            if (ZG || (this._indices = GG.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, GG, bG), wG)
              for (const GG of this._meshes) GG._createGlobalSubMesh(!0)
          } else this.setIndices(GG, null, !0)
      }
      setIndexBuffer(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = GG, this._totalVertices = bG, this._totalIndices = ZG, GG.is32Bits = null === wG ? bG > 65535 : wG;
        for (const SG of this._meshes) SG._createGlobalSubMesh(!0), SG.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = GG, this._indexBufferIsUpdatable = ZG, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ZG, "Geometry_" + this.id + "_IndexBuffer")), void 0 != bG && (this._totalVertices = bG);
        for (const SG of this._meshes) SG._createGlobalSubMesh(!wG), SG.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      IwG(GG, bG) {
        if (!this.isReady()) return null;
        const ZG = this._indices;
        return bG || GG && 1 !== this._meshes.length ? ZG.slice() : ZG
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        GG && this._vertexArrayObjects && this._vertexArrayObjects[GG.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[GG.key]), delete this._vertexArrayObjects[GG.key])
      }
      releaseForMesh(GG, bG) {
        const ZG = this._meshes,
          wG = ZG.indexOf(GG); - 1 !== wG && (ZG.splice(wG, 1), this._vertexArrayObjects && GG._invalidateInstanceVertexArrayObject(), GG._geometry = null, 0 === ZG.length && bG && this.dispose())
      }
      applyToMesh(GG) {
        if (GG._geometry === this) return;
        const bG = GG._geometry;
        bG && bG.releaseForMesh(GG), this._vertexArrayObjects && GG._invalidateInstanceVertexArrayObject();
        const ZG = this._meshes;
        GG._geometry = this, GG._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ZG.push(GG), this.isReady() ? this._applyToMesh(GG) : this._boundingInfo && GG.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!GG && (GG = this.getVerticesData(yG.l.PositionKind), !GG)) return;
          this._extend = (0, QG.g)(GG, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(GG) {
        for (const bG in this._vertexBuffers) {
          const ZG = this._vertexBuffers[bG];
          ZG._buffer.getBuffer() || ZG.create(), bG === yG.l.PositionKind && (this._extend || this._updateExtend(), GG.buildBoundingInfo(this._extend.minimum, this._extend.maximum), GG._createGlobalSubMesh(GG.isUnIndexed), GG._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), GG._syncGeometryWithMorphTargetManager(), GG.synchronizeInstances()
      }
      _notifyUpdate(GG) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, GG), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const bG of this._meshes) bG._markSubMeshesAsAttributesDirty()
      }
      load(GG, bG) {
        2 !== this.delayLoadState && (this.isReady() ? bG && bG() : (this.delayLoadState = 2, this._queueLoad(GG, bG)))
      }
      _queueLoad(GG, bG) {
        this.delayLoadingFile && (GG.addPendingData(this), (async () => {
          try {
            const ZG = await GG._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void GG.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ZG), this), this.delayLoadState = 1, this._delayInfo = [], GG.removePendingData(this);
            const wG = this._meshes,
              SG = wG.length;
            for (let GG = 0; GG < SG; GG++) this._applyToMesh(wG[GG]);
            bG && bG()
          } catch (ZG) {
            GG.removePendingData(this), GG.Tu || pG.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZG}`)
          }
        })())
      }
      toLeftHanded() {
        const GG = this.IwG(!1);
        if (null != GG && GG.length > 0) {
          for (let bG = 0; bG < GG.length; bG += 3) {
            const ZG = GG[bG + 0];
            GG[bG + 0] = GG[bG + 2], GG[bG + 2] = ZG
          }
          this.setIndices(GG)
        }
        const bG = this.getVerticesData(yG.l.PositionKind, !1);
        if (null != bG && bG.length > 0) {
          for (let GG = 0; GG < bG.length; GG += 3) bG[GG + 2] = -bG[GG + 2];
          this.setVerticesData(yG.l.PositionKind, bG, !1)
        }
        const ZG = this.getVerticesData(yG.l.NormalKind, !1);
        if (null != ZG && ZG.length > 0) {
          for (let GG = 0; GG < ZG.length; GG += 3) ZG[GG + 2] = -ZG[GG + 2];
          this.setVerticesData(yG.l.NormalKind, ZG, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const GG = this.getVerticesData(yG.l.PositionKind);
        if (!GG || 0 === GG.length) return !1;
        for (let bG = 3 * this._positionsCache.length, ZG = this._positionsCache.length; bG < GG.length; bG += 3, ++ZG) this._positionsCache[ZG] = wG.p.FromArray(GG, bG);
        for (let bG = 0, ZG = 0; bG < GG.length; bG += 3, ++ZG) this._positionsCache[ZG].set(GG[0 + bG], GG[1 + bG], GG[2 + bG]);
        return this._positionsCache.length = GG.length / 3, this._positions = this._positionsCache, !0
      }
      Tu() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ZG in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ZG]);
          this._vertexArrayObjects = {};
          const GG = this._meshes,
            bG = GG.length;
          for (let ZG = 0; ZG < bG; ZG++) GG[ZG]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const GG = this._meshes,
          bG = GG.length;
        let ZG;
        for (ZG = 0; ZG < bG; ZG++) this.releaseForMesh(GG[ZG]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const wG in this._vertexBuffers) this._vertexBuffers[wG].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const GG = this._parentContainer.geometries.indexOf(this);
          GG > -1 && this._parentContainer.geometries.splice(GG, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(GG) {
        const bG = new JG(GG, this._scene),
          ZG = this.IwG(void 0, !0);
        ZG && bG.setIndices(ZG);
        let wG, SG = !1;
        for (wG in this._vertexBuffers) {
          const GG = this.getVertexBuffer(wG),
            ZG = GG.getData();
          if (!ZG) continue;
          const LG = GG.isUpdatable(),
            kG = GG.getSize(),
            {
              type: UG,
              byteOffset: YG,
              byteStride: VG,
              normalized: pG
            } = GG;
          SG = SG || LG;
          let fG = this._totalVertices;
          if (GG.getIsInstanced()) {
            let GG;
            GG = ZG instanceof Array ? 4 * ZG.length : ZG.byteLength, fG = GG / VG
          }
          const QG = (0, dG.m)(ZG, kG, UG, YG, VG, fG, !0),
            KG = new yG.l(this._engine, QG, wG, {
              updatable: LG,
              useBytes: !1,
              stride: kG,
              size: kG,
              offset: 0,
              type: UG,
              normalized: pG,
              takeBufferOwnership: !0,
              instanced: GG.getIsInstanced()
            });
          bG.setVerticesBuffer(KG, fG)
        }
        for (wG in bG._updatable = SG, bG.delayLoadState = this.delayLoadState, bG.delayLoadingFile = this.delayLoadingFile, bG._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) bG._delayInfo = bG._delayInfo || [], bG._delayInfo.push(wG);
        return bG._boundingInfo = new YG.c(this._extend.minimum, this._extend.maximum), bG
      }
      serialize() {
        const GG = {};
        return GG.id = this.id, GG.uniqueId = this.uniqueId, GG.updatable = this._updatable, fG.c && fG.c.HasTags(this) && (GG.tags = fG.c.GetTags(this)), GG
      }
      _toNumberArray(GG) {
        return Array.isArray(GG) ? GG : Array.prototype.slice.call(GG)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const GG in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, GG) && (this._vertexBuffers[GG]._buffer._data = null)
      }
      serializeVerticeData() {
        const GG = this.serialize();
        return this.isVerticesDataPresent(yG.l.PositionKind) && (GG.positions = this._toNumberArray(this.getVerticesData(yG.l.PositionKind)), this.isVertexBufferUpdatable(yG.l.PositionKind) && (GG.positionsUpdatable = !0)), this.isVerticesDataPresent(yG.l.NormalKind) && (GG.normals = this._toNumberArray(this.getVerticesData(yG.l.NormalKind)), this.isVertexBufferUpdatable(yG.l.NormalKind) && (GG.normalsUpdatable = !0)), this.isVerticesDataPresent(yG.l.TangentKind) && (GG.tangents = this._toNumberArray(this.getVerticesData(yG.l.TangentKind)), this.isVertexBufferUpdatable(yG.l.TangentKind) && (GG.tangentsUpdatable = !0)), this.isVerticesDataPresent(yG.l.UVKind) && (GG.uvs = this._toNumberArray(this.getVerticesData(yG.l.UVKind)), this.isVertexBufferUpdatable(yG.l.UVKind) && (GG.uvsUpdatable = !0)), this.isVerticesDataPresent(yG.l.UV2Kind) && (GG.uvs2 = this._toNumberArray(this.getVerticesData(yG.l.UV2Kind)), this.isVertexBufferUpdatable(yG.l.UV2Kind) && (GG.uvs2Updatable = !0)), this.isVerticesDataPresent(yG.l.UV3Kind) && (GG.uvs3 = this._toNumberArray(this.getVerticesData(yG.l.UV3Kind)), this.isVertexBufferUpdatable(yG.l.UV3Kind) && (GG.uvs3Updatable = !0)), this.isVerticesDataPresent(yG.l.UV4Kind) && (GG.uvs4 = this._toNumberArray(this.getVerticesData(yG.l.UV4Kind)), this.isVertexBufferUpdatable(yG.l.UV4Kind) && (GG.uvs4Updatable = !0)), this.isVerticesDataPresent(yG.l.UV5Kind) && (GG.uvs5 = this._toNumberArray(this.getVerticesData(yG.l.UV5Kind)), this.isVertexBufferUpdatable(yG.l.UV5Kind) && (GG.uvs5Updatable = !0)), this.isVerticesDataPresent(yG.l.UV6Kind) && (GG.uvs6 = this._toNumberArray(this.getVerticesData(yG.l.UV6Kind)), this.isVertexBufferUpdatable(yG.l.UV6Kind) && (GG.uvs6Updatable = !0)), this.isVerticesDataPresent(yG.l.ColorKind) && (GG.colors = this._toNumberArray(this.getVerticesData(yG.l.ColorKind)), this.isVertexBufferUpdatable(yG.l.ColorKind) && (GG.colorsUpdatable = !0)), this.isVerticesDataPresent(yG.l.MatricesIndicesKind) && (GG.matricesIndices = this._toNumberArray(this.getVerticesData(yG.l.MatricesIndicesKind)), GG.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(yG.l.MatricesIndicesKind) && (GG.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(yG.l.MatricesWeightsKind) && (GG.matricesWeights = this._toNumberArray(this.getVerticesData(yG.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(yG.l.MatricesWeightsKind) && (GG.matricesWeightsUpdatable = !0)), GG.indices = this._toNumberArray(this.IwG()), GG
      }
      static ExtractFromMesh(GG, bG) {
        const ZG = GG._geometry;
        return ZG ? ZG.copy(bG) : null
      }
      static RandomId() {
        return VG.f.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(GG, bG) {
        for (let ZG = 0; ZG < bG.geometries.length; ZG++)
          if (bG.geometries[ZG]._loadedUniqueId === GG) return bG.geometries[ZG];
        return null
      }
      static _ImportGeometry(GG, bG) {
        const ZG = bG.Dv(),
          wG = GG.geometryUniqueId,
          LG = GG.geometryId;
        if (wG || LG) {
          const GG = wG ? this._GetGeometryByLoadedUniqueId(wG, ZG) : ZG.getGeometryById(LG);
          GG && GG.applyToMesh(bG)
        } else if (GG instanceof ArrayBuffer) {
          const ZG = bG._binaryInfo;
          if (ZG.positionsAttrDesc && ZG.positionsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.positionsAttrDesc.offset, ZG.positionsAttrDesc.count);
            bG.setVerticesData(yG.l.PositionKind, wG, !1)
          }
          if (ZG.normalsAttrDesc && ZG.normalsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.normalsAttrDesc.offset, ZG.normalsAttrDesc.count);
            bG.setVerticesData(yG.l.NormalKind, wG, !1)
          }
          if (ZG.tangetsAttrDesc && ZG.tangetsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.tangetsAttrDesc.offset, ZG.tangetsAttrDesc.count);
            bG.setVerticesData(yG.l.TangentKind, wG, !1)
          }
          if (ZG.uvsAttrDesc && ZG.uvsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvsAttrDesc.offset, ZG.uvsAttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UVKind, wG, !1)
          }
          if (ZG.uvs2AttrDesc && ZG.uvs2AttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvs2AttrDesc.offset, ZG.uvs2AttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UV2Kind, wG, !1)
          }
          if (ZG.uvs3AttrDesc && ZG.uvs3AttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvs3AttrDesc.offset, ZG.uvs3AttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UV3Kind, wG, !1)
          }
          if (ZG.uvs4AttrDesc && ZG.uvs4AttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvs4AttrDesc.offset, ZG.uvs4AttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UV4Kind, wG, !1)
          }
          if (ZG.uvs5AttrDesc && ZG.uvs5AttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvs5AttrDesc.offset, ZG.uvs5AttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UV5Kind, wG, !1)
          }
          if (ZG.uvs6AttrDesc && ZG.uvs6AttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.uvs6AttrDesc.offset, ZG.uvs6AttrDesc.count);
            if (hG.c)
              for (let GG = 1; GG < wG.length; GG += 2) wG[GG] = 1 - wG[GG];
            bG.setVerticesData(yG.l.UV6Kind, wG, !1)
          }
          if (ZG.colorsAttrDesc && ZG.colorsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.colorsAttrDesc.offset, ZG.colorsAttrDesc.count);
            bG.setVerticesData(yG.l.ColorKind, wG, !1, ZG.colorsAttrDesc.stride)
          }
          if (ZG.matricesIndicesAttrDesc && ZG.matricesIndicesAttrDesc.count > 0) {
            const wG = new Int32Array(GG, ZG.matricesIndicesAttrDesc.offset, ZG.matricesIndicesAttrDesc.count),
              SG = [];
            for (let GG = 0; GG < wG.length; GG++) {
              const bG = wG[GG];
              SG.push(255 & bG), SG.push((65280 & bG) >> 8), SG.push((16711680 & bG) >> 16), SG.push(bG >> 24 & 255)
            }
            bG.setVerticesData(yG.l.MatricesIndicesKind, SG, !1)
          }
          if (ZG.matricesIndicesExtraAttrDesc && ZG.matricesIndicesExtraAttrDesc.count > 0) {
            const wG = new Int32Array(GG, ZG.matricesIndicesExtraAttrDesc.offset, ZG.matricesIndicesExtraAttrDesc.count),
              SG = [];
            for (let GG = 0; GG < wG.length; GG++) {
              const bG = wG[GG];
              SG.push(255 & bG), SG.push((65280 & bG) >> 8), SG.push((16711680 & bG) >> 16), SG.push(bG >> 24 & 255)
            }
            bG.setVerticesData(yG.l.MatricesIndicesExtraKind, SG, !1)
          }
          if (ZG.matricesWeightsAttrDesc && ZG.matricesWeightsAttrDesc.count > 0) {
            const wG = new Float32Array(GG, ZG.matricesWeightsAttrDesc.offset, ZG.matricesWeightsAttrDesc.count);
            bG.setVerticesData(yG.l.MatricesWeightsKind, wG, !1)
          }
          if (ZG.indicesAttrDesc && ZG.indicesAttrDesc.count > 0) {
            const wG = new Int32Array(GG, ZG.indicesAttrDesc.offset, ZG.indicesAttrDesc.count);
            bG.setIndices(wG, null)
          }
          if (ZG.subMeshesAttrDesc && ZG.subMeshesAttrDesc.count > 0) {
            const wG = new Int32Array(GG, ZG.subMeshesAttrDesc.offset, 5 * ZG.subMeshesAttrDesc.count);
            bG.aE = [];
            for (let GG = 0; GG < ZG.subMeshesAttrDesc.count; GG++) {
              const ZG = wG[5 * GG + 0],
                SG = wG[5 * GG + 1],
                LG = wG[5 * GG + 2],
                yG = wG[5 * GG + 3],
                UG = wG[5 * GG + 4];
              kG.c.AddToMesh(ZG, SG, LG, yG, UG, bG)
            }
          }
        } else if (GG.positions && GG.normals && GG.indices) {
          if (bG.setVerticesData(yG.l.PositionKind, GG.positions, GG.positions._updatable || GG.positionsUpdatable), bG.setVerticesData(yG.l.NormalKind, GG.normals, GG.normals._updatable || GG.normalsUpdatable), GG.tangents && bG.setVerticesData(yG.l.TangentKind, GG.tangents, GG.tangents._updatable || GG.tangentsUpdatable), GG.uvs && bG.setVerticesData(yG.l.UVKind, GG.uvs, GG.uvs._updatable || GG.uvsUpdatable), GG.uvs2 && bG.setVerticesData(yG.l.UV2Kind, GG.uvs2, GG.uvs2._updatable || GG.uvs2Updatable), GG.uvs3 && bG.setVerticesData(yG.l.UV3Kind, GG.uvs3, GG.uvs3._updatable || GG.uvs3Updatable), GG.uvs4 && bG.setVerticesData(yG.l.UV4Kind, GG.uvs4, GG.uvs4._updatable || GG.uvs4Updatable), GG.uvs5 && bG.setVerticesData(yG.l.UV5Kind, GG.uvs5, GG.uvs5._updatable || GG.uvs5Updatable), GG.uvs6 && bG.setVerticesData(yG.l.UV6Kind, GG.uvs6, GG.uvs6._updatable || GG.uvs6Updatable), GG.colors && bG.setVerticesData(yG.l.ColorKind, SG.d.CheckColors4(GG.colors, GG.positions.length / 3), GG.colors._updatable), GG.matricesIndices)
            if (GG.matricesIndices._isExpanded || GG.matricesIndicesExpanded) delete GG.matricesIndices._isExpanded, delete GG.matricesIndicesExpanded, bG.setVerticesData(yG.l.MatricesIndicesKind, GG.matricesIndices, GG.matricesIndices._updatable || GG.matricesIndicesUpdatable);
            else {
              const ZG = [];
              for (let bG = 0; bG < GG.matricesIndices.length; bG++) {
                const wG = GG.matricesIndices[bG];
                ZG.push(255 & wG), ZG.push((65280 & wG) >> 8), ZG.push((16711680 & wG) >> 16), ZG.push(wG >> 24 & 255)
              }
              bG.setVerticesData(yG.l.MatricesIndicesKind, ZG, GG.matricesIndices._updatable || GG.matricesIndicesUpdatable)
            } if (GG.matricesIndicesExtra)
            if (GG.matricesIndicesExtraExpanded || GG.matricesIndicesExtra._isExpanded) delete GG.matricesIndices._isExpanded, delete GG.matricesIndicesExtraExpanded, bG.setVerticesData(yG.l.MatricesIndicesExtraKind, GG.matricesIndicesExtra, GG.matricesIndicesExtra._updatable || GG.matricesIndicesExtraUpdatable);
            else {
              const ZG = [];
              for (let bG = 0; bG < GG.matricesIndicesExtra.length; bG++) {
                const wG = GG.matricesIndicesExtra[bG];
                ZG.push(255 & wG), ZG.push((65280 & wG) >> 8), ZG.push((16711680 & wG) >> 16), ZG.push(wG >> 24 & 255)
              }
              bG.setVerticesData(yG.l.MatricesIndicesExtraKind, ZG, GG.matricesIndicesExtra._updatable || GG.matricesIndicesExtraUpdatable)
            } GG.matricesWeights && (JG._CleanMatricesWeights(GG, bG), bG.setVerticesData(yG.l.MatricesWeightsKind, GG.matricesWeights, GG.matricesWeights._updatable)), GG.matricesWeightsExtra && bG.setVerticesData(yG.l.MatricesWeightsExtraKind, GG.matricesWeightsExtra, GG.matricesWeights._updatable), bG.setIndices(GG.indices, null)
        }
        if (GG.aE) {
          bG.aE = [];
          for (let ZG = 0; ZG < GG.aE.length; ZG++) {
            const wG = GG.aE[ZG];
            kG.c.AddToMesh(wG.materialIndex, wG.verticesStart, wG.verticesCount, wG.indexStart, wG.indexCount, bG)
          }
        }
        bG._shouldGenerateFlatShading && (bG.convertToFlatShadedMesh(), bG._shouldGenerateFlatShading = !1), bG.computeWorldMatrix(!0), ZG.onMeshImportedObservable.notifyObservers(bG)
      }
      static _CleanMatricesWeights(GG, bG) {
        const ZG = .001;
        if (!UG.d.CleanBoneMatrixWeights) return;
        let wG;
        if (!(GG.skeletonId > -1)) return;
        {
          const ZG = bG.Dv().getLastSkeletonById(GG.skeletonId);
          if (!ZG) return;
          wG = ZG.bones.length
        }
        const SG = bG.getVerticesData(yG.l.MatricesIndicesKind),
          LG = bG.getVerticesData(yG.l.MatricesIndicesExtraKind),
          kG = GG.matricesWeights,
          YG = GG.matricesWeightsExtra,
          VG = GG.numBoneInfluencer,
          pG = kG.length;
        for (let yG = 0; yG < pG; yG += 4) {
          let GG = 0,
            bG = -1;
          for (let wG = 0; wG < 4; wG++) {
            const SG = kG[yG + wG];
            GG += SG, SG < ZG && bG < 0 && (bG = wG)
          }
          if (YG)
            for (let wG = 0; wG < 4; wG++) {
              const SG = YG[yG + wG];
              GG += SG, SG < ZG && bG < 0 && (bG = wG + 4)
            }
          if ((bG < 0 || bG > VG - 1) && (bG = VG - 1), GG > ZG) {
            const bG = 1 / GG;
            for (let GG = 0; GG < 4; GG++) kG[yG + GG] *= bG;
            if (YG)
              for (let GG = 0; GG < 4; GG++) YG[yG + GG] *= bG
          } else bG >= 4 ? (YG[yG + bG - 4] = 1 - GG, LG[yG + bG - 4] = wG) : (kG[yG + bG] = 1 - GG, SG[yG + bG] = wG)
        }
        bG.setVerticesData(yG.l.MatricesIndicesKind, SG), GG.matricesWeightsExtra && bG.setVerticesData(yG.l.MatricesIndicesExtraKind, LG)
      }
      static Parse(GG, bG, ZG) {
        const SG = new JG(GG.id, bG, void 0, GG.updatable);
        return SG._loadedUniqueId = GG.uniqueId, fG.c && fG.c.AddTagsTo(SG, GG.tags), GG.delayLoadingFile ? (SG.delayLoadState = 4, SG.delayLoadingFile = ZG + GG.delayLoadingFile, SG._boundingInfo = new YG.c(wG.p.FromArray(GG.boundingBoxMinimum), wG.p.FromArray(GG.boundingBoxMaximum)), SG._delayInfo = [], GG.hasUVs && SG._delayInfo.push(yG.l.UVKind), GG.hasUVs2 && SG._delayInfo.push(yG.l.UV2Kind), GG.hasUVs3 && SG._delayInfo.push(yG.l.UV3Kind), GG.hasUVs4 && SG._delayInfo.push(yG.l.UV4Kind), GG.hasUVs5 && SG._delayInfo.push(yG.l.UV5Kind), GG.hasUVs6 && SG._delayInfo.push(yG.l.UV6Kind), GG.hasColors && SG._delayInfo.push(yG.l.ColorKind), GG.hasMatricesIndices && SG._delayInfo.push(yG.l.MatricesIndicesKind), GG.hasMatricesWeights && SG._delayInfo.push(yG.l.MatricesWeightsKind), SG._delayLoadingFunction = LG.e.ImportVertexData) : LG.e.ImportVertexData(GG, SG), bG.pushGeometry(SG, !0), SG
      }
    }
  },
  40844: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => pG,
      h: () => KG
    });
    var wG = ZG(37439),
      SG = ZG(39093),
      LG = ZG(40811),
      yG = ZG(40784),
      kG = ZG(39086),
      UG = ZG(40820),
      YG = ZG(40524),
      VG = ZG(37484);
    class pG extends LG.b {
      constructor(GG, bG) {
        super(GG, bG.Dv()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, bG.i6(this), this._sourceMesh = bG, this._unIndexed = bG._unIndexed, this.position.oW(bG.position), this.rotation.oW(bG.rotation), this.nY.oW(bG.nY), bG.rotationQuaternion && (this.rotationQuaternion = bG.rotationQuaternion.clone()), this.animations = bG.animations.slice();
        for (const ZG of bG.getAnimationRanges()) null != ZG && this.createAnimationRange(ZG.name, ZG.from, ZG.to);
        if (this.infiniteDistance = bG.infiniteDistance, this.setPivotMatrix(bG.getPivotMatrix()), bG.skeleton || bG.morphTargetManager || !bG.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const GG = bG.HA();
          this.buildBoundingInfo(GG.minimum, GG.maximum)
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
      set receiveShadows(GG) {
        this._sourceMesh?.receiveShadows !== GG && SG.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(GG) {
        this._sourceMesh?.material !== GG && SG.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(GG) {
        this._sourceMesh?.visibility !== GG && SG.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(GG) {
        this._sourceMesh?.skeleton !== GG && SG.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(GG) {
        this._sourceMesh && GG !== this._sourceMesh.renderingGroupId && SG.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(GG) {
        this._sourceMesh && GG !== this._sourceMesh.meshBlendingTag && SG.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get ESG() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(GG) {
        return this._sourceMesh.createInstance(GG)
      }
      isReady() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(GG, !0)
      }
      getVerticesData(GG, bG, ZG) {
        return this._sourceMesh.getVerticesData(GG, bG, ZG)
      }
      copyVerticesData(GG, bG) {
        this._sourceMesh.copyVerticesData(GG, bG)
      }
      getVertexBuffer(GG, bG) {
        return this._sourceMesh.getVertexBuffer(GG, bG)
      }
      setVerticesData(GG, bG, ZG, wG) {
        return this.ESG && this.ESG.setVerticesData(GG, bG, ZG, wG), this.ESG
      }
      updateVerticesData(GG, bG, ZG, wG) {
        return this.ESG && this.ESG.updateVerticesData(GG, bG, ZG, wG), this.ESG
      }
      setIndices(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.ESG && this.ESG.setIndices(GG, bG), this.ESG
      }
      isVerticesDataPresent(GG) {
        return this._sourceMesh.isVerticesDataPresent(GG)
      }
      IwG() {
        return this._sourceMesh.IwG()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let GG, bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.HA().isLocked) return this;
        GG = "object" === typeof bG ? bG : {
          applySkeleton: bG,
          applyMorph: ZG
        };
        const wG = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(GG, null, YG.l.PositionKind), wG), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(GG, bG) {
        if (super._activate(GG, bG), this._sourceMesh.aE || SG.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, GG), bG) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== UG.d.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new wG.e);
          const GG = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, wG.j.mK[7].oW(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.oW(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.oW(wG.j.mK[7]), this._currentLOD._masterMesh = GG, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get Ul() {
        return !0
      }
      getLOD(GG) {
        if (!GG) return this;
        const bG = this.ESG.getLODLevels();
        if (bG && 0 !== bG.length) {
          const bG = this.HA();
          this._currentLOD = this.ESG.getLOD(GG, bG.xwG)
        } else this._currentLOD = this.ESG;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(GG) {
        return this.ESG._preActivateForIntermediateRendering(GG)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.aE)
          for (let GG = 0; GG < this._sourceMesh.aE.length; GG++) this._sourceMesh.aE[GG].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.HA().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(GG);
        if (kG.e.DeepCopy(this, wG, ["name", "aE", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "ESG", "Ul", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "zSG", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LkG", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), bG && (wG.parent = bG), !ZG)
          for (let SG = 0; SG < this.Dv().meshes.length; SG++) {
            const GG = this.Dv().meshes[SG];
            GG.parent === this && GG.clone(GG.name, wG)
          }
        return wG.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(wG), wG
      }
      dispose(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.M6(this), super.dispose(GG, bG)
      }
      _serializeAsParent(GG) {
        super._serializeAsParent(GG), GG.parentId = this._sourceMesh.uniqueId, GG.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = this.clone("Clone of " + (this.name || this.id), GG || this.parent, !0, bG && bG.newSourcedMesh);
        wG && ZG && ZG(this, wG);
        for (const SG of this.getChildTransformNodes(!0)) SG.instantiateHierarchy(wG, bG, ZG);
        return wG
      }
    }
    let fG = !1;

    function QG(GG, bG, ZG, wG, SG) {
      for (let LG = 0; LG < bG.length; LG++) {
        const yG = GG[bG[LG]] ?? 0,
          kG = SG + ZG[LG];
        yG.toArray ? yG.toArray(wG, kG) : yG.copyToArray ? yG.copyToArray(wG, kG) : wG[kG] = yG
      }
    }

    function KG() {
      fG || (fG = !0, yG.c._instancedMeshFactory = (GG, bG) => {
        const ZG = new pG(GG, bG);
        if (bG.hA) {
          ZG.hA = {};
          for (const GG in bG.hA) ZG.hA[GG] = bG.hA[GG]
        }
        return ZG
      }, yG.c.prototype.gM = function(GG, bG) {
        if (!this.hA) {
          this.hA = {};
          for (const GG of this.instances) GG.hA = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.CK().getCaps().vertexArrayObject ? {} : void 0
        }), this.hA[GG] = null, this._userInstancedBuffersStorage.strides[GG] = bG;
        const ZG = this._userInstancedBuffersStorage;
        ZG.interleavedKinds = [], ZG.interleavedOffsets = [], ZG.interleavedRowStride = 0;
        for (const wG in ZG.strides) ZG.interleavedKinds.push(wG), ZG.interleavedOffsets.push(ZG.interleavedRowStride), ZG.interleavedRowStride += ZG.strides[wG];
        ZG.interleavedData = new Float32Array(32 * ZG.interleavedRowStride);
        for (const wG in ZG.interleavedBuffers) ZG.interleavedBuffers[wG].buffer.dispose();
        ZG.interleavedBuffers = {}, ZG.vertexBuffers[GG] = null;
        for (const wG of this.instances) wG.hA[GG] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, yG.c.prototype._processInstancedBuffers = function(GG, bG) {
        const ZG = this._userInstancedBuffersStorage,
          wG = ZG.interleavedRowStride;
        if (!wG) return;
        const SG = GG ? GG.length : 0,
          LG = (SG + 1) * wG;
        let yG = ZG.interleavedData;
        if (yG.length < LG) {
          let GG = yG.length;
          for (; GG < LG;) GG *= 2;
          yG = ZG.interleavedData = new Float32Array(GG)
        }
        const kG = ZG.interleavedKinds,
          UG = ZG.interleavedOffsets;
        let VG = 0;
        bG && (QG(this.hA, kG, UG, yG, VG), VG += wG);
        for (let YG = 0; YG < SG; YG++) QG(GG[YG].hA, kG, UG, yG, VG), VG += wG;
        let pG = "shared",
          fG = ZG.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (pG = this._instanceDataStorage.engine.currentRenderPassId, ZG.renderPasses || (ZG.renderPasses = {}), ZG.renderPasses[pG] || (ZG.renderPasses[pG] = {}), fG = ZG.renderPasses[pG]);
        const KG = ZG.interleavedBuffers[pG];
        let hG = !KG || KG.data !== yG;
        for (let YG = 0; !hG && YG < kG.length; YG++) hG = !fG[kG[YG]];
        if (!hG) return void KG.buffer.updateDirectly(yG, 0);
        KG?.buffer.dispose();
        const dG = new YG.c(this.CK(), yG, !0, wG, !1, !0);
        for (let YG = 0; YG < kG.length; YG++) {
          const GG = kG[YG],
            bG = dG.createVertexBuffer(GG, UG[YG], ZG.strides[GG]);
          bG.hashCode += bG.byteOffset * 2 ** 24, fG[GG] = bG
        }
        ZG.interleavedBuffers[pG] = {
          buffer: dG,
          data: yG
        }, this._invalidateInstanceVertexArrayObject()
      }, yG.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const GG in this._userInstancedBuffersStorage.vertexArrayObjects) this.CK().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[GG]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, yG.c.prototype._disposeInstanceSpecificData = function() {
        for (const bG in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[bG].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const bG in this.hA) this._userInstancedBuffersStorage.vertexBuffers[bG] && this._userInstancedBuffersStorage.vertexBuffers[bG].dispose();
        const GG = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (GG) {
          for (const bG in GG) GG[bG].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.hA = {}
      }, (0, VG.i)("BABYLON.InstancedMesh", pG))
    }
  },
  40784: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => OG,
      g: () => BG,
      j: () => eG
    });
    var wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG = ZG(37465),
      rG = ZG(40477),
      zG = ZG(40430),
      EG = ZG(39086),
      oG = ZG(40418),
      XG = ZG(40792),
      uG = ZG(40592),
      iG = ZG(37439),
      CG = ZG(37621),
      WG = ZG(40599),
      mG = ZG(40524),
      IG = ZG(40795),
      FG = ZG(40797),
      vG = ZG(40811),
      aG = ZG(40673),
      cG = ZG(40664),
      lG = ZG(40750),
      jG = ZG(40828),
      PG = ZG(40800),
      MG = ZG(40416),
      AG = ZG(39093),
      sG = ZG(37484),
      qG = ZG(40258),
      nG = ZG(40548);
    class gG {
      constructor(GG, bG) {
        this.distanceOrScreenCoverage = GG, this.mesh = bG
      }
    }
    class eG {}
    class RG {
      constructor() {
        this.batchCache = new HG(this), this.batchCacheReplacementModeInFrozenMode = new HG(this), this.instancesBufferSize = 2048
      }
    }
    class TG {
      constructor() {
        this.renderPasses = {}
      }
    }
    class HG {
      constructor(GG) {
        this.parent = GG, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class tG {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class DG {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const NG = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class OG extends vG.b {
      static _GetDefaultSideOrientation(GG) {
        return GG || OG.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(GG) {
        this._internalMeshDataInfo._useLODScreenCoverage = GG, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(GG) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== GG && (GG && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(mG.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(mG.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = GG, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new JG.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new JG.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new JG.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new JG.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new JG.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(GG) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(GG)
      }
      get zSG() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(GG) {
        this._internalMeshDataInfo._forcedInstanceCount = GG
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(GG) {
        this._internalMeshDataInfo._sideOrientation = GG, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === GG || !this._scene.useRightHandedSystem && 0 === GG
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(GG) {
        this.sideOrientation = GG, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(GG) {
        this._internalMeshDataInfo._overrideRenderingFillMode = GG
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(GG) {
        GG && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (GG.sideOrientation = null), this._setMaterial(GG)
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
      set isUnIndexed(GG) {
        this._unIndexed !== GG && (this._unIndexed = GG, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const GG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return GG ? GG.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const GG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return GG ? GG.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(GG) {
        this._instanceDataStorage.manualUpdate = GG
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(GG) {
        this._instanceDataStorage.previousManualUpdate = GG
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(GG) {
        this._instanceDataStorage.forceMatrixUpdates = GG
      }
      _copySource(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SG = this.Dv();
        if (GG._geometry && GG._geometry.applyToMesh(this), EG.e.DeepCopy(GG, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "zSG", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "Ul", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "LkG", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = GG, SG.useClonedMeshMap && (GG._internalMeshDataInfo.meshMap || (GG._internalMeshDataInfo.meshMap = {}), GG._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = GG._originalBuilderSideOrientation, this._creationDataStorage = GG._creationDataStorage, GG._ranges) {
          const bG = GG._ranges;
          for (const GG in bG) Object.prototype.hasOwnProperty.call(bG, GG) && bG[GG] && this.createAnimationRange(GG, bG[GG].from, bG[GG].to)
        }
        if (GG.metadata && GG.metadata.clone ? this.metadata = GG.metadata.clone() : this.metadata = GG.metadata, this._internalMetadata = GG._internalMetadata, this.meshBlendingTag = GG.meshBlendingTag, oG.c && oG.c.HasTags(GG) && oG.c.AddTagsTo(this, oG.c.GetTags(GG, !0)), this.DW(GG.isEnabled(!1)), this.parent = GG.parent, this.setPivotMatrix(GG.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + GG.id, this.material = GG.material, !bG) {
          const SG = GG.getDescendants(!0);
          for (let GG = 0; GG < SG.length; GG++) {
            const LG = SG[GG];
            LG._isMesh ? (NG.parent = this, NG.doNotCloneChildren = bG, NG.clonePhysicsImpostor = ZG, NG.cloneThinInstances = wG, LG.clone(this.name + "." + LG.name, NG)) : LG.clone && LG.clone(this.name + "." + LG.name, this)
          }
        }
        if (GG.morphTargetManager && (this.morphTargetManager = GG.morphTargetManager), (0, qG.b)(SG.getPhysicsEngine)) {
          const bG = SG.getPhysicsEngine();
          if (ZG && bG)
            if (1 === bG.getPluginVersion()) {
              const ZG = bG.getImpostorForPhysicsObject(GG);
              ZG && (this.physicsImpostor = ZG.clone(this))
            } else 2 === bG.getPluginVersion() && GG.physicsBody && GG.physicsBody.clone(this)
        }
        for (let LG = 0; LG < SG.lE.length; LG++) {
          const bG = SG.lE[LG];
          bG.emitter === GG && bG.clone(bG.name, this)
        }
        if (this.skeleton = GG.skeleton, wG && (GG._thinInstanceDataStorage.matrixData ? (this.yGG("matrix", new Float32Array(GG._thinInstanceDataStorage.matrixData), 16, !GG._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = GG._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = GG._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = GG._thinInstanceDataStorage.matrixBufferSize, GG._userThinInstanceBuffersStorage)) {
          const bG = GG._userThinInstanceBuffersStorage;
          for (const GG in bG.data) this.yGG(GG, new Float32Array(bG.data[GG]), bG.strides[GG], !bG.vertexBuffers?.[GG]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[GG] = bG.sizes[GG]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(GG) {
        let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          LG = arguments.length > 4 ? arguments[4] : void 0,
          yG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(GG, ZG), this._internalMeshDataInfo = new DG, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new tG, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = OG.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ZG = this.Dv(), this._instanceDataStorage = new TG, this._instanceDataStorage.engine = ZG.CK(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new RG), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (GG, bG, ZG) => {
          GG && ZG && (this._uniformBuffer ? this.transferToEffect(bG) : ZG.bindOnlyWorldMatrix(bG))
        };
        let kG = !1;
        if (wG && void 0 === wG._addToSceneRootNodes) {
          const GG = wG;
          bG = GG.parent ?? null, SG = GG.source ?? null, LG = GG.doNotCloneChildren ?? !1, yG = GG.clonePhysicsImpostor ?? !0, kG = GG.cloneThinInstances ?? !1
        } else bG = wG;
        SG && this._copySource(SG, LG, yG, kG), null !== bG && (this.parent = bG), this._instanceDataStorage.hardwareInstancedRendering = this.CK().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = GG => {
          GG.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new JG.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), SG && SG.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = 0 === this.getTotalVertices() || bG && bG.doNotInstantiate && (!0 === bG.doNotInstantiate || bG.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), GG || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        wG.parent = GG || this.parent, wG.position = this.position.clone(), wG.nY = this.nY.clone(), this.rotationQuaternion ? wG.rotationQuaternion = this.rotationQuaternion.clone() : wG.rotation = this.rotation.clone(), ZG && ZG(this, wG);
        for (const SG of this.getChildTransformNodes(!0)) "InstancedMesh" === SG.getClassName() && "Mesh" === wG.getClassName() && SG.ESG === this ? SG.instantiateHierarchy(wG, {
          doNotInstantiate: bG && bG.doNotInstantiate || !1,
          newSourcedMesh: wG
        }, ZG) : SG.instantiateHierarchy(wG, bG, ZG);
        return wG
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(GG) {
        let bG = super.toString(GG);
        if (bG += ", n vertices: " + this.getTotalVertices(), bG += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ZG = 0; ZG < this.animations.length; ZG++) bG += ", animation[0]: " + this.animations[ZG].toString(GG);
        if (GG)
          if (this._geometry) {
            const GG = this.IwG(),
              ZG = this.getVerticesData(mG.l.PositionKind);
            ZG && GG && (bG += ", flat shading: " + (ZG.length / 3 === GG.length ? "YES" : "NO"))
          } else bG += ", flat shading: UNKNOWN";
        return bG
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const GG of this.instances) GG._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const GG = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((bG, ZG) => bG.distanceOrScreenCoverage < ZG.distanceOrScreenCoverage ? GG : bG.distanceOrScreenCoverage > ZG.distanceOrScreenCoverage ? -GG : 0))
      }
      addLODLevel(GG, bG) {
        if (bG && bG._masterMesh) return AG.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const ZG = new gG(GG, bG);
        return this._internalMeshDataInfo._LODLevels.push(ZG), bG && (bG._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(GG) {
        const bG = this._internalMeshDataInfo;
        for (let ZG = 0; ZG < bG._LODLevels.length; ZG++) {
          const wG = bG._LODLevels[ZG];
          if (wG.distanceOrScreenCoverage === GG) return wG.mesh
        }
        return null
      }
      removeLODLevel(GG) {
        const bG = this._internalMeshDataInfo;
        for (let ZG = 0; ZG < bG._LODLevels.length; ZG++) bG._LODLevels[ZG].mesh === GG && (bG._LODLevels.splice(ZG, 1), GG && (GG._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(GG, bG) {
        const ZG = this._internalMeshDataInfo;
        if (!ZG._LODLevels || 0 === ZG._LODLevels.length) return this;
        const wG = bG || this.HA().xwG,
          SG = GG.mode === uG.d.ORTHOGRAPHIC_CAMERA ? GG.minZ : wG.centerWorld.subtract(GG.globalPosition).length();
        let LG = SG,
          yG = 1;
        if (ZG._useLODScreenCoverage) {
          const bG = GG.screenArea;
          let ZG = wG.radiusWorld * GG.minZ / SG;
          ZG = ZG * ZG * Math.PI, LG = ZG / bG, yG = -1
        }
        if (yG * ZG._LODLevels[ZG._LODLevels.length - 1].distanceOrScreenCoverage > yG * LG) return this.onLODLevelSelection && this.onLODLevelSelection(LG, this, this), this;
        for (let kG = 0; kG < ZG._LODLevels.length; kG++) {
          const GG = ZG._LODLevels[kG];
          if (yG * GG.distanceOrScreenCoverage < yG * LG) {
            if (GG.mesh) {
              if (4 === GG.mesh.delayLoadState) return GG.mesh._checkDelayState(), this;
              if (2 === GG.mesh.delayLoadState) return this;
              GG.mesh._preActivate(), GG.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(LG, this, GG.mesh), GG.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(LG, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(GG, bG, ZG, wG) {
        if (!this._geometry) return null;
        let SG = wG ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[GG]?.getFloatData(this.instances.length + 1, ZG || bG && 1 !== this._geometry.meshes.length);
        return SG || (SG = this._geometry.getVerticesData(GG, bG, ZG)), SG
      }
      copyVerticesData(GG, bG) {
        this._geometry && this._geometry.copyVerticesData(GG, bG)
      }
      getVertexBuffer(GG, bG) {
        return this._geometry ? (bG ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[GG]) ?? this._geometry.getVertexBuffer(GG) : null
      }
      isVerticesDataPresent(GG, bG) {
        return this._geometry ? !bG && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[GG] || this._geometry.isVerticesDataPresent(GG) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(GG)
      }
      isVertexBufferUpdatable(GG, bG) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(GG);
        if (!bG) {
          const bG = this._userInstancedBuffersStorage?.vertexBuffers[GG];
          if (bG) return bG.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(GG)
      }
      getVerticesDataKinds(GG) {
        if (!this._geometry) {
          const GG = [];
          if (this._delayInfo)
            for (const bG of this._delayInfo) GG.push(bG);
          return GG
        }
        const bG = this._geometry.getVerticesDataKinds();
        if (!GG && this._userInstancedBuffersStorage)
          for (const ZG in this._userInstancedBuffersStorage.vertexBuffers) - 1 === bG.indexOf(ZG) && bG.push(ZG);
        return bG
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      IwG(GG, bG) {
        return this._geometry ? this._geometry.IwG(GG, bG) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(GG)) return !1;
        if (!this.aE || 0 === this.aE.length) return !0;
        if (!GG) return !0;
        const ZG = this.CK(),
          wG = this.Dv(),
          SG = bG || ZG.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const LG = this.material || wG.defaultMaterial;
        if (LG)
          if (LG._storeEffectOnSubMeshes)
            for (const kG of this.aE) {
              const GG = kG.vK();
              if (GG)
                if (GG._storeEffectOnSubMeshes) {
                  if (!GG.isReadyForSubMesh(this, kG, SG)) return !1
                } else if (!GG.isReady(this, SG)) return !1
            } else if (!LG.isReady(this, SG)) return !1;
        const yG = ZG.currentRenderPassId;
        for (const kG of this.lightSources) {
          const GG = kG.getShadowGenerators();
          if (!GG) continue;
          const bG = GG.values();
          for (let wG = bG.next(); !0 !== wG.done; wG = bG.next()) {
            const GG = wG.value;
            if (GG && (!GG.getShadowMap()?.renderList || GG.getShadowMap()?.renderList && -1 !== GG.getShadowMap()?.renderList?.indexOf(this))) {
              const bG = GG.getShadowMap().renderPassIds ?? [ZG.currentRenderPassId];
              for (let wG = 0; wG < bG.length; ++wG) {
                ZG.currentRenderPassId = bG[wG];
                for (const bG of this.aE)
                  if (!GG.isReady(bG, SG, bG.vK()?.needAlphaBlendingForMesh(this) ?? !1)) return ZG.currentRenderPassId = yG, !1
              }
              ZG.currentRenderPassId = yG
            }
          }
        }
        for (const kG of this._internalMeshDataInfo._LODLevels)
          if (kG.mesh && !kG.mesh.isReady(SG)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      aK() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(GG) {
        this._instanceDataStorage.overridenInstanceCount = GG
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const GG = this._instanceDataStorage.engine.currentRenderPassId;
        let bG = this._instanceDataStorage.renderPasses[GG];
        return bG || (bG = new RG, this._instanceDataStorage.renderPasses[GG] = bG), bG
      }
      _preActivate() {
        const GG = this._internalMeshDataInfo,
          bG = this.Dv().getRenderId();
        return GG._preActivateId === bG || (GG._preActivateId = bG, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(GG) {
        const bG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return bG.visibleInstances && (bG.visibleInstances.intermediateDefaultRenderId = GG), this
      }
      _registerInstanceForRenderId(GG, bG) {
        const ZG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ZG.visibleInstances || (ZG.visibleInstances = {
          defaultRenderId: bG,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ZG.visibleInstances[bG] || (void 0 === ZG.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ZG.visibleInstances[ZG.previousRenderId], ZG.previousRenderId = bG, ZG.visibleInstances[bG] = new Array), ZG.visibleInstances[bG].push(GG), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.FK || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let GG, bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.HA().isLocked) return this;
        GG = "object" === typeof bG ? bG : {
          applySkeleton: bG,
          applyMorph: ZG
        };
        const wG = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(GG, null, mG.l.PositionKind), wG), this
      }
      _createGlobalSubMesh(GG) {
        const bG = this.getTotalVertices();
        if (!bG || !this.IwG()) return null;
        if (this.aE && this.aE.length > 0) {
          const ZG = this.IwG();
          if (!ZG) return null;
          const wG = ZG.length;
          let SG = !1;
          if (GG) SG = !0;
          else
            for (const GG of this.aE) {
              if (GG.indexStart + GG.indexCount > wG) {
                SG = !0;
                break
              }
              if (GG.verticesStart + GG.verticesCount > bG) {
                SG = !0;
                break
              }
            }
          if (!SG) return this.aE[0]
        }
        return this.releaseSubMeshes(), new aG.c(0, 0, bG, 0, this.getTotalIndices() || (this.isUnIndexed ? bG : 0), this)
      }
      subdivide(GG) {
        if (GG < 1) return;
        const bG = this.getTotalIndices();
        let ZG = bG / GG | 0,
          wG = 0;
        for (; ZG % 3 !== 0;) ZG++;
        this.releaseSubMeshes();
        for (let SG = 0; SG < GG && !(wG >= bG); SG++) aG.c.CreateFromIndices(0, wG, wG + ZG >= bG ? bG - wG : ZG, this, void 0, !1), wG += ZG;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(GG, bG, ZG, wG);
        else {
          const wG = new IG.e;
          wG.set(bG, GG);
          const SG = this.Dv();
          new FG.e(FG.e.RandomId(), SG, wG, ZG, this)
        }
        return this
      }
      removeVerticesData(GG) {
        this._geometry && this._geometry.removeVerticesData(GG)
      }
      markVerticesDataAsUpdatable(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZG = this.getVertexBuffer(GG);
        ZG && ZG.isUpdatable() !== bG && this.setVerticesData(GG, this.getVerticesData(GG), bG)
      }
      setVerticesBuffer(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = FG.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(GG, ZG, bG), this
      }
      updateVerticesData(GG, bG, ZG, wG) {
        return this._geometry ? (wG ? (this.makeGeometryUnique(), this.updateVerticesData(GG, bG, ZG, !1)) : this._geometry.updateVerticesData(GG, bG, ZG), this) : this
      }
      updateMeshPositions(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZG = this.getVerticesData(mG.l.PositionKind);
        if (!ZG) return this;
        if (GG(ZG), this.updateVerticesData(mG.l.PositionKind, ZG, !1, !1), bG) {
          const GG = this.IwG(),
            bG = this.getVerticesData(mG.l.NormalKind);
          if (!bG) return this;
          IG.e.ComputeNormals(ZG, GG, bG), this.updateVerticesData(mG.l.NormalKind, bG, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const GG = this._geometry,
          bG = this._geometry.copy(FG.e.RandomId());
        return GG.releaseForMesh(this, !0), bG.applyToMesh(this), this
      }
      setIndexBuffer(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          SG = this._geometry;
        SG || (SG = new FG.e(FG.e.RandomId(), this.Dv(), void 0, void 0, this)), SG.setIndexBuffer(GG, bG, ZG, wG)
      }
      setIndices(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(GG, bG, ZG, wG);
        else {
          const wG = new IG.e;
          wG.indices = GG;
          const SG = this.Dv();
          new FG.e(FG.e.RandomId(), SG, wG, ZG, this, bG)
        }
        return this
      }
      updateIndices(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(GG, bG, ZG), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(GG, bG, ZG) {
        let wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const SG = this.Dv().CK();
        let LG;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ZG) === cG.e.WireFrameFillMode) LG = GG._getLinesIndexBuffer(this.IwG(), SG);
          else LG = null;
        else switch (this._getRenderingFillMode(ZG)) {
          case cG.e.PointFillMode:
            LG = null;
            break;
          case cG.e.WireFrameFillMode:
            LG = GG._getLinesIndexBuffer(this.IwG(), SG);
            break;
          default:
          case cG.e.TriangleFillMode:
            LG = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(bG, LG, wG)
      }
      _bindDirect(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(GG), ZG && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const GG = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const bG in GG) this._userInstancedBuffersStorage.vertexBuffers[bG] = GG[bG]
          }
          this._geometry._bind(GG, bG, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(GG, bG);
        return this
      }
      _draw(GG, bG, ZG) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const wG = this.Dv().CK(),
          SG = wG._currentMaterialContext,
          LG = SG && SG.useVertexPulling;
        return this._unIndexed && bG !== cG.e.WireFrameFillMode || bG == cG.e.PointFillMode ? wG.drawArraysType(bG, GG.verticesStart, GG.verticesCount, this.forcedInstanceCount || ZG) : bG == cG.e.WireFrameFillMode ? wG.drawElementsType(bG, 0, GG._linesIndexCount, this.forcedInstanceCount || ZG) : LG ? wG.drawArraysType(bG, GG.indexStart, GG.indexCount, this.forcedInstanceCount || ZG) : wG.drawElementsType(bG, GG.indexStart, GG.indexCount, this.forcedInstanceCount || ZG), this
      }
      registerBeforeRender(GG) {
        return this.onBeforeRenderObservable.add(GG), this
      }
      unregisterBeforeRender(GG) {
        return this.onBeforeRenderObservable.removeCallback(GG), this
      }
      registerAfterRender(GG) {
        return this.onAfterRenderObservable.add(GG), this
      }
      unregisterAfterRender(GG) {
        return this.onAfterRenderObservable.removeCallback(GG), this
      }
      _getInstancesRenderList(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (bG) return ZG.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[GG] = !1, ZG.batchCacheReplacementModeInFrozenMode.renderSelf[GG] = !0, ZG.batchCacheReplacementModeInFrozenMode;
          if (ZG.previousBatch) return ZG.previousBatch
        }
        const wG = this.Dv(),
          SG = wG._isInIntermediateRendering(),
          LG = SG ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          yG = ZG.batchCache;
        if (yG.mustReturn = !1, yG.renderSelf[GG] = bG || !LG && this.isEnabled() && this.isVisible, yG.visibleInstances[GG] = null, ZG.visibleInstances && !bG) {
          const bG = ZG.visibleInstances,
            LG = wG.getRenderId(),
            kG = SG ? bG.intermediateDefaultRenderId : bG.defaultRenderId;
          yG.visibleInstances[GG] = bG[LG], !yG.visibleInstances[GG] && kG && (yG.visibleInstances[GG] = bG[kG])
        }
        return yG.hardwareInstancedRendering[GG] = !bG && this._instanceDataStorage.hardwareInstancedRendering && null !== yG.visibleInstances[GG] && void 0 !== yG.visibleInstances[GG], ZG.previousBatch = yG, yG
      }
      _updateInstancedBuffers(GG, bG, ZG, wG, SG, LG) {
        const yG = bG.visibleInstances[GG._id],
          kG = yG ? yG.length : 0,
          UG = bG.parent,
          YG = this._instanceDataStorage;
        let VG = UG.instancesBuffer,
          pG = UG.instancesPreviousBuffer,
          fG = 0,
          QG = 0;
        const KG = bG.renderSelf[GG._id],
          hG = this._scene.floatingOriginOffset,
          dG = !VG || ZG !== UG.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !UG.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || YG.isFrozen && !dG) QG = (KG ? 1 : 0) + kG;
        else {
          const bG = this.getWorldMatrix();
          if (KG) {
            this._scene.needsPreviousWorldMatrices && (YG.masterMeshPreviousWorldMatrix ? (YG.masterMeshPreviousWorldMatrix.copyToArray(UG.instancesPreviousData, fG), YG.masterMeshPreviousWorldMatrix.oW(bG)) : (YG.masterMeshPreviousWorldMatrix = bG.clone(), YG.masterMeshPreviousWorldMatrix.copyToArray(UG.instancesPreviousData, fG))), bG.copyToArray(UG.instancesData, fG);
            const GG = bG.mwG();
            UG.instancesData[fG + 12] = GG[12] - hG.x, UG.instancesData[fG + 13] = GG[13] - hG.y, UG.instancesData[fG + 14] = GG[14] - hG.z, fG += 16, QG++
          }
          if (yG) {
            if (OG.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && GG.vK()?.needAlphaBlendingForMesh(GG.getRenderingMesh())) {
              const GG = this._scene.activeCamera.globalPosition;
              for (let bG = 0; bG < yG.length; bG++) {
                const ZG = yG[bG];
                ZG._distanceToCamera = iG.p.Distance(ZG.HA().xwG.centerWorld, GG)
              }
              yG.sort(((GG, bG) => GG._distanceToCamera > bG._distanceToCamera ? -1 : GG._distanceToCamera < bG._distanceToCamera ? 1 : 0))
            }
            for (let GG = 0; GG < yG.length; GG++) {
              const bG = yG[GG],
                ZG = bG.getWorldMatrix();
              ZG.copyToArray(UG.instancesData, fG), this._scene.needsPreviousWorldMatrices && (bG._previousWorldMatrix ? (bG._previousWorldMatrix.copyToArray(UG.instancesPreviousData, fG), bG._previousWorldMatrix.oW(ZG)) : (bG._previousWorldMatrix = ZG.clone(), bG._previousWorldMatrix.copyToArray(UG.instancesPreviousData, fG)));
              const wG = ZG.mwG();
              UG.instancesData[fG + 12] = wG[12] - hG.x, UG.instancesData[fG + 13] = wG[13] - hG.y, UG.instancesData[fG + 14] = wG[14] - hG.z, fG += 16, QG++
            }
          }
        }
        if (dG) {
          let GG;
          if (VG && VG.dispose(), pG && pG.dispose(), VG = new mG.c(wG, UG.instancesData, !0, 16, !1, !0), UG.instancesBuffer = VG, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.CK().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) GG = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const bG = this._instanceDataStorage.engine.currentRenderPassId;
            GG = this._userInstancedBuffersStorage.renderPasses[bG], GG || (this._userInstancedBuffersStorage.renderPasses[bG] = GG = {})
          }
          GG.world0 = VG.createVertexBuffer("world0", 0, 4), GG.world1 = VG.createVertexBuffer("world1", 4, 4), GG.world2 = VG.createVertexBuffer("world2", 8, 4), GG.world3 = VG.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (pG = new mG.c(wG, UG.instancesPreviousData, !0, 16, !1, !0), UG.instancesPreviousBuffer = pG, GG.previousWorld0 = pG.createVertexBuffer("previousWorld0", 0, 4), GG.previousWorld1 = pG.createVertexBuffer("previousWorld1", 4, 4), GG.previousWorld2 = pG.createVertexBuffer("previousWorld2", 8, 4), GG.previousWorld3 = pG.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (VG.updateDirectly(UG.instancesData, 0, QG), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || pG.updateDirectly(UG.instancesPreviousData, 0, QG));
        this._processInstancedBuffers(yG, KG), LG && void 0 !== SG && (this.Dv()._activeIndices.addCount(GG.indexCount * QG, !1), wG._currentDrawContext && (wG._currentDrawContext.useInstancing = !0), this._bind(GG, LG, SG), this._draw(GG, SG, QG)), !this._scene.needsPreviousWorldMatrices || dG || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || pG.updateDirectly(UG.instancesData, 0, QG)
      }
      _renderWithInstances(GG, bG, ZG, wG, SG) {
        const LG = ZG.visibleInstances[GG._id],
          yG = LG ? LG.length : 0,
          kG = ZG.parent,
          UG = kG.instancesBufferSize,
          YG = 16 * (yG + 1) * 4;
        for (; kG.instancesBufferSize < YG;) kG.instancesBufferSize *= 2;
        return kG.instancesData && UG == kG.instancesBufferSize || (kG.instancesData = new Float32Array(kG.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !kG.instancesPreviousData || UG != kG.instancesBufferSize) && (kG.instancesPreviousData = new Float32Array(kG.instancesBufferSize / 4)), this._updateInstancedBuffers(GG, ZG, UG, SG, bG, wG), SG.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(GG, bG, ZG, wG) {
        const SG = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.Dv()._activeIndices.addCount(GG.indexCount * SG, !1), wG._currentDrawContext && (wG._currentDrawContext.useInstancing = !0), this._bind(GG, ZG, bG), this._draw(GG, bG, SG), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, SG) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), wG.unbindInstanceAttributes()
      }
      _processInstancedBuffers(GG, bG) {}
      _processRendering(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = this.Dv(),
          YG = UG.CK();
        if (wG = this._getRenderingFillMode(wG), LG && bG.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(bG, wG, ZG, YG), this;
        if (LG) this._renderWithInstances(bG, wG, SG, ZG, YG);
        else {
          YG._currentDrawContext && (YG._currentDrawContext.useInstancing = !1);
          let ZG = 0;
          SG.renderSelf[bG._id] && (yG && yG(!1, GG.getWorldMatrix(), kG), ZG++, this._draw(bG, wG, this._instanceDataStorage.overridenInstanceCount));
          const LG = SG.visibleInstances[bG._id];
          if (LG) {
            const GG = LG.length;
            ZG += GG;
            for (let ZG = 0; ZG < GG; ZG++) {
              const GG = LG[ZG].getWorldMatrix();
              yG && yG(!0, GG, kG), this._draw(bG, wG)
            }
          }
          UG._activeIndices.addCount(bG.indexCount * ZG, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        GG?.instancesBuffer && (bG && GG.instancesBuffer.dispose(), GG.instancesBuffer = null), GG?.instancesPreviousBuffer && (bG && GG.instancesPreviousBuffer.dispose(), GG.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bG in this._instanceDataStorage.renderPasses) {
          const ZG = this._instanceDataStorage.renderPasses[bG];
          this._disposeInstanceDataStorageRenderPass(ZG, GG)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, GG), this._userInstancedBuffersStorage) {
          for (const bG in this._userInstancedBuffersStorage.vertexBuffers) {
            const ZG = this._userInstancedBuffersStorage.vertexBuffers[bG];
            ZG && (GG && ZG.dispose(), this._userInstancedBuffersStorage.vertexBuffers[bG] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(GG)
      }
      _releaseRenderPassId(GG) {
        const bG = this._instanceDataStorage.renderPasses[GG];
        if (bG && (this._disposeInstanceDataStorageRenderPass(bG, !0), delete this._instanceDataStorage.renderPasses[GG]), this._userInstancedBuffersStorage?.renderPasses) {
          const bG = this._userInstancedBuffersStorage.renderPasses[GG];
          if (bG)
            for (const GG in bG) bG[GG]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[GG]
        }
        const ZG = this._userInstancedBuffersStorage?.interleavedBuffers;
        ZG?.[GG] && (ZG[GG].buffer.dispose(), delete ZG[GG])
      }
      _freeze() {
        if (this.aE) {
          for (let GG = 0; GG < this.aE.length; GG++) this._getInstancesRenderList(GG);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const GG in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[GG].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const LG = this._scene.CK(),
          yG = LG.currentRenderPassId;
        if (void 0 !== GG && (LG.currentRenderPassId = GG), wG)(!SG || SG && wG.isInFrustum(this._scene._frustumPlanes)) && this.render(wG, !!bG, ZG);
        else
          for (let kG = 0; kG < this.aE.length; kG++) {
            const GG = this.aE[kG];
            (!SG || SG && GG.isInFrustum(this._scene._frustumPlanes)) && this.render(GG, !!bG, ZG)
          }
        return void 0 !== GG && (LG.currentRenderPassId = yG), this
      }
      directRender() {
        if (!this.aE) return this;
        for (const GG of this.aE) this.render(GG, !1);
        return this
      }
      render(GG, bG, ZG) {
        const wG = this.Dv(),
          SG = wG.CK();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const LG = wG.activeCameras?.length ?? 0,
          yG = LG > 1 && wG.activeCamera === wG.activeCameras[0] || LG <= 1,
          kG = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== SG.currentRenderPassId;
        if (yG && this._checkOcclusionQuery(kG) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const UG = this._getInstancesRenderList(GG._id, !!ZG);
        if (UG.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let YG = 0,
          VG = null;
        this.ignoreCameraMaxZ && wG.activeCamera && !wG._isInIntermediateRendering() && (YG = wG.activeCamera.maxZ, VG = wG.activeCamera, wG.activeCamera.maxZ = 0, wG.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const pG = GG.getRenderingMesh(),
          fG = UG.hardwareInstancedRendering[GG._id] || pG.hasThinInstances || !!this._userInstancedBuffersStorage && !GG.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          QG = this._instanceDataStorage,
          KG = GG.vK();
        if (!KG) return VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), this;
        if (QG.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === KG) {
          if (KG._storeEffectOnSubMeshes && !GG._drawWrapper?._wasPreviouslyReady || !KG._storeEffectOnSubMeshes && !KG._getDrawWrapper()._wasPreviouslyReady) return VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), this
        } else {
          if (KG._storeEffectOnSubMeshes) {
            if (!KG.isReadyForSubMesh(this, GG, fG)) return VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), this
          } else if (!KG.isReady(this, fG)) return VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = KG
        }
        if (bG) {
          const GG = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === GG.alphaModes.length) SG.setAlphaMode(GG.alphaMode);
          else
            for (let bG = 0; bG < GG.alphaModes.length; bG++) {
              const ZG = GG.alphaModes[bG];
              SG.setAlphaMode(void 0 !== ZG ? ZG : 2, !1, bG)
            }
        }
        let hG;
        hG = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? GG._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const dG = hG?.effect ?? null;
        for (let uG = 0, iG = wG._beforeRenderingMeshStage; uG < iG.length; uG++) {
          iG[uG].action(this, GG, UG, dG)
        }
        if (!hG || !dG) return VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), this;
        const JG = ZG || this;
        let rG;
        if (!QG.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const GG = JG._getWorldMatrixDeterminant();
          rG = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), GG < 0 && (rG = rG === cG.e.ClockWiseSideOrientation ? cG.e.CounterClockWiseSideOrientation : cG.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = rG
        }
        const zG = this._internalMeshDataInfo._effectiveMaterial._preBind(hG, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && SG.setDepthWrite(!0);
        const EG = this._internalMeshDataInfo._effectiveMaterial,
          oG = EG.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), fG || this._bind(GG, dG, oG, !1);
        const XG = JG.getWorldMatrix();
        EG._storeEffectOnSubMeshes ? EG.bindForSubMesh(XG, this, GG) : EG.bind(XG, this);
        try {
          lG.e._BindAttachmentsForEffect(SG, dG) && (!EG.backFaceCulling && EG.separateCullingPass && (SG.setState(!0, EG.zOffset, !1, !zG, EG.cullBackFaces, EG.stencil, EG.zOffsetUnits), this._processRendering(this, GG, dG, oG, UG, fG, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), SG.setState(!0, EG.zOffset, !1, zG, EG.cullBackFaces, EG.stencil, EG.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(GG)), this._processRendering(this, GG, dG, oG, UG, fG, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          lG.e._RestoreAttachments(SG)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let uG = 0, iG = wG._afterRenderingMeshStage; uG < iG.length; uG++) {
          iG[uG].action(this, GG, UG, dG)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), VG && (VG.maxZ = YG, wG.updateTransformMatrix(!0)), 2 !== wG.performancePriority || QG.isFrozen || this._freeze(), this
      }
      _renderRunFollower(GG, bG) {
        const ZG = this._scene,
          wG = ZG._engine;
        if (wG.isWebGPU || GG._mesh !== this || 0 !== this.instances.length || this.render !== OG.prototype.render) return !1;
        const SG = GG.vK();
        if (!SG || SG !== ZG._cachedMaterial || void 0 === SG._canBindRunFollower) return !1;
        const LG = GG._drawWrapper,
          yG = LG?.effect;
        if (!yG || yG !== ZG._cachedEffect || this.visibility !== ZG._cachedVisibility || LG._forceRebindOnNextCall) return !1;
        const kG = this.hasThinInstances;
        if (!kG && this._userInstancedBuffersStorage) return !1;
        if (!LG._wasPreviouslyReady || LG._wasPreviouslyUsingInstances !== kG) return !1;
        const UG = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ZG._isInIntermediateRendering() || 0 !== ZG._beforeRenderingMeshStage.length || 0 !== ZG._afterRenderingMeshStage.length || UG._onBeforeRenderObservable?.hasObservers() || UG._onBeforeBindObservable?.hasObservers() || UG._onAfterRenderObservable?.hasObservers()) return !1;
        const YG = this.occlusionType;
        if (void 0 !== YG && YG !== vG.b.OCCLUSION_TYPE_NONE || !SG._canBindRunFollower(ZG, wG, this, GG, yG)) return !1;
        const VG = this._internalAbstractMeshDataInfo,
          pG = VG._isActiveIntermediate;
        pG ? VG._isActiveIntermediate = !1 : VG._isActive = !1;
        const fG = ZG.activeCameras?.length ?? 0;
        (fG > 1 && ZG.activeCamera === ZG.activeCameras[0] || fG <= 1) && this._checkOcclusionQuery(!1);
        const QG = this._getInstancesRenderList(GG._id);
        if (QG.mustReturn) return !0;
        if (!kG && !QG.renderSelf[GG._id]) return pG ? VG._isActiveIntermediate = !0 : VG._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (UG._effectiveMaterial = SG, bG)
          if (1 === SG.alphaModes.length) wG.setAlphaMode(SG.alphaMode);
          else
            for (let hG = 0; hG < SG.alphaModes.length; hG++) {
              const GG = SG.alphaModes[hG];
              wG.setAlphaMode(void 0 !== GG ? GG : 2, !1, hG)
            }
        if (SG.backFaceCulling || null !== SG.sideOrientation || SG._twoSidedLighting) {
          const GG = this._getWorldMatrixDeterminant();
          let bG = SG._getEffectiveOrientation(this);
          GG < 0 && (bG = bG === cG.e.ClockWiseSideOrientation ? cG.e.CounterClockWiseSideOrientation : cG.e.ClockWiseSideOrientation), UG._effectiveSideOrientation = bG
        }
        SG._preBind(LG, UG._effectiveSideOrientation), SG.forceDepthWrite && wG.setDepthWrite(!0);
        const KG = SG.fillMode;
        return kG || this._bind(GG, yG, KG, !1), SG._bindRunFollower(this.getWorldMatrix(), this, GG, yG), this._processRendering(this, GG, yG, KG, QG, kG, this._onBeforeDraw, SG), SG.unbind(), 2 === ZG.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(mG.l.MatricesWeightsKind) && (this.isVerticesDataPresent(mG.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const GG = this.getVerticesData(mG.l.MatricesWeightsKind),
          bG = GG.length;
        for (let ZG = 0; ZG < bG; ZG += 4) {
          const bG = GG[ZG] + GG[ZG + 1] + GG[ZG + 2] + GG[ZG + 3];
          if (0 === bG) GG[ZG] = 1;
          else {
            const wG = 1 / bG;
            GG[ZG] *= wG, GG[ZG + 1] *= wG, GG[ZG + 2] *= wG, GG[ZG + 3] *= wG
          }
        }
        this.setVerticesData(mG.l.MatricesWeightsKind, GG)
      }
      _normalizeSkinWeightsAndExtra() {
        const GG = this.getVerticesData(mG.l.MatricesWeightsExtraKind),
          bG = this.getVerticesData(mG.l.MatricesWeightsKind),
          ZG = bG.length;
        for (let wG = 0; wG < ZG; wG += 4) {
          let ZG = bG[wG] + bG[wG + 1] + bG[wG + 2] + bG[wG + 3];
          if (ZG += GG[wG] + GG[wG + 1] + GG[wG + 2] + GG[wG + 3], 0 === ZG) bG[wG] = 1;
          else {
            const SG = 1 / ZG;
            bG[wG] *= SG, bG[wG + 1] *= SG, bG[wG + 2] *= SG, bG[wG + 3] *= SG, GG[wG] *= SG, GG[wG + 1] *= SG, GG[wG + 2] *= SG, GG[wG + 3] *= SG
          }
        }
        this.setVerticesData(mG.l.MatricesWeightsKind, bG), this.setVerticesData(mG.l.MatricesWeightsKind, GG)
      }
      validateSkinning() {
        const GG = this.getVerticesData(mG.l.MatricesWeightsExtraKind),
          bG = this.getVerticesData(mG.l.MatricesWeightsKind);
        if (null === bG || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          NQ: "not skinned"
        };
        const ZG = bG.length;
        let wG = 0,
          SG = 0,
          LG = 0,
          yG = 0;
        const kG = null === GG ? 4 : 8,
          UG = [];
        for (let QG = 0; QG <= kG; QG++) UG[QG] = 0;
        for (let QG = 0; QG < ZG; QG += 4) {
          let ZG = bG[QG],
            YG = ZG,
            VG = 0 === YG ? 0 : 1;
          for (let SG = 1; SG < kG; SG++) {
            const LG = SG < 4 ? bG[QG + SG] : GG[QG + SG - 4];
            LG > ZG && wG++, 0 !== LG && VG++, YG += LG, ZG = LG
          }
          if (UG[VG]++, VG > LG && (LG = VG), 0 === YG) SG++;
          else {
            const ZG = 1 / YG;
            let wG = 0;
            for (let SG = 0; SG < kG; SG++) wG += SG < 4 ? Math.abs(bG[QG + SG] - bG[QG + SG] * ZG) : Math.abs(GG[QG + SG - 4] - GG[QG + SG - 4] * ZG);
            wG > .001 && yG++
          }
        }
        const YG = this.skeleton.bones.length,
          VG = this.getVerticesData(mG.l.MatricesIndicesKind),
          pG = this.getVerticesData(mG.l.MatricesIndicesExtraKind);
        let fG = 0;
        for (let QG = 0; QG < ZG; QG += 4)
          for (let GG = 0; GG < kG; GG++) {
            const bG = GG < 4 ? VG[QG + GG] : pG[QG + GG - 4];
            (bG >= YG || bG < 0) && fG++
          }
        return {
          skinned: !0,
          valid: 0 === SG && 0 === yG && 0 === fG,
          NQ: "Number of Weights = " + ZG / 4 + "\nMaximum influences = " + LG + "\nMissing Weights = " + SG + "\nNot Sorted = " + wG + "\nNot Normalized = " + yG + "\nWeightCounts = [" + UG + "]\nNumber of bones = " + YG + "\nBad Bone Indices = " + fG
        }
      }
      _checkDelayState() {
        const GG = this.Dv();
        return this._geometry ? this._geometry.load(GG) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(GG)), this
      }
      _queueLoad(GG) {
        GG.addPendingData(this);
        const bG = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ZG = await GG._loadDelayedFileAsync(this.delayLoadingFile, bG, !0);
            ZG instanceof ArrayBuffer ? this._delayLoadingFunction(ZG, this) : this._delayLoadingFunction(JSON.parse(ZG), this);
            for (const GG of this.instances) GG.refreshBoundingInfo(), GG._syncSubMeshes();
            this.delayLoadState = 1, GG.removePendingData(this)
          } catch (ZG) {
            GG.removePendingData(this), GG.Tu || AG.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZG}`)
          }
        })(), this
      }
      isInFrustum(GG) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(GG) && (this._checkDelayState(), !0))
      }
      setMaterialById(GG) {
        const bG = this.Dv().materials;
        let ZG;
        for (ZG = bG.length - 1; ZG > -1; ZG--)
          if (bG[ZG].id === GG) return this.material = bG[ZG], this;
        const wG = this.Dv().multiMaterials;
        for (ZG = wG.length - 1; ZG > -1; ZG--)
          if (wG[ZG].id === GG) return this.material = wG[ZG], this;
        return this
      }
      getAnimatables() {
        const GG = [];
        return this.material && GG.push(this.material), this.skeleton && GG.push(this.skeleton), GG
      }
      bakeTransformIntoVertices(GG) {
        if (!this.isVerticesDataPresent(mG.l.PositionKind)) return this;
        const bG = this.aE.splice(0);
        this._resetPointsArrayCache();
        let ZG = this.getVerticesData(mG.l.PositionKind);
        const wG = iG.p.Zero();
        let SG;
        for (SG = 0; SG < ZG.length; SG += 3) iG.p.TransformCoordinatesFromFloatsToRef(ZG[SG], ZG[SG + 1], ZG[SG + 2], GG, wG).toArray(ZG, SG);
        if (this.setVerticesData(mG.l.PositionKind, ZG, this.getVertexBuffer(mG.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(mG.l.NormalKind)) {
          for (ZG = this.getVerticesData(mG.l.NormalKind), SG = 0; SG < ZG.length; SG += 3) iG.p.TransformNormalFromFloatsToRef(ZG[SG], ZG[SG + 1], ZG[SG + 2], GG, wG).normalize().toArray(ZG, SG);
          this.setVerticesData(mG.l.NormalKind, ZG, this.getVertexBuffer(mG.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(mG.l.TangentKind)) {
          for (ZG = this.getVerticesData(mG.l.TangentKind), SG = 0; SG < ZG.length; SG += 4) iG.p.TransformNormalFromFloatsToRef(ZG[SG], ZG[SG + 1], ZG[SG + 2], GG, wG).normalize().toArray(ZG, SG);
          this.setVerticesData(mG.l.TangentKind, ZG, this.getVertexBuffer(mG.l.TangentKind).isUpdatable())
        }
        return GG.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.aE = bG, this
      }
      bakeCurrentTransformIntoVertices() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(GG), this
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (bG && void 0 === bG._addToSceneRootNodes) {
          const ZG = bG;
          return NG.source = this, NG.doNotCloneChildren = ZG.doNotCloneChildren, NG.clonePhysicsImpostor = ZG.clonePhysicsImpostor, NG.cloneThinInstances = ZG.cloneThinInstances, new OG(GG, this.Dv(), NG)
        }
        return new OG(GG, this.Dv(), bG, this, ZG, wG)
      }
      dispose(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ZG = this._internalMeshDataInfo;
        if (ZG._onBeforeDrawObservable && ZG._onBeforeDrawObservable.clear(), ZG._onBeforeBindObservable && ZG._onBeforeBindObservable.clear(), ZG._onBeforeRenderObservable && ZG._onBeforeRenderObservable.clear(), ZG._onAfterRenderObservable && ZG._onAfterRenderObservable.clear(), ZG._onBetweenPassObservable && ZG._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ZG.meshMap)
            for (const GG in ZG.meshMap) {
              const bG = ZG.meshMap[GG];
              bG && (bG._internalMeshDataInfo._source = null, ZG.meshMap[GG] = void 0)
            }
          ZG._source && ZG._source._internalMeshDataInfo.meshMap && (ZG._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const GG = this.Dv().meshes;
          for (const bG of GG) {
            const GG = bG;
            GG._internalMeshDataInfo && GG._internalMeshDataInfo._source && GG._internalMeshDataInfo._source === this && (GG._internalMeshDataInfo._source = null)
          }
        }
        ZG._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(GG, bG)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(GG, bG, ZG, wG, SG, LG) {
        let yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          kG = arguments.length > 7 ? arguments[7] : void 0;
        const UG = this.Dv();
        return (0, zG.q)(GG, (GG => {
          const kG = GG.width,
            UG = GG.height,
            YG = this.CK().createCanvas(kG, UG).getContext("2d");
          YG.drawImage(GG, 0, 0);
          const VG = YG.getImageData(0, 0, kG, UG).data;
          this.applyDisplacementMapFromBuffer(VG, kG, UG, bG, ZG, SG, LG, yG), wG && wG(this)
        }), kG || (() => {}), UG.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(mG.l.PositionKind) || !this.isVerticesDataPresent(mG.l.NormalKind) || !this.isVerticesDataPresent(mG.l.UVKind)) return AG.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const UG = this.getVerticesData(mG.l.PositionKind, !0, !0),
          YG = this.getVerticesData(mG.l.NormalKind),
          VG = this.getVerticesData(mG.l.UVKind);
        let pG = iG.p.Zero();
        const fG = iG.p.Zero(),
          QG = iG.m.Zero();
        LG = LG || iG.m.Zero(), yG = yG || new iG.m(1, 1);
        for (let KG = 0; KG < UG.length; KG += 3) {
          iG.p.FromArrayToRef(UG, KG, pG), iG.p.FromArrayToRef(YG, KG, fG), iG.m.FromArrayToRef(VG, KG / 3 * 2, QG);
          const kG = 4 * ((Math.abs(QG.x * yG.x + LG.x % 1) * (bG - 1) % bG | 0) + (Math.abs(QG.y * yG.y + LG.y % 1) * (ZG - 1) % ZG | 0) * bG),
            hG = .3 * (GG[kG] / 255) + .59 * (GG[kG + 1] / 255) + .11 * (GG[kG + 2] / 255);
          fG.normalize(), fG.scaleInPlace(wG + (SG - wG) * hG), pG = pG.add(fG), pG.toArray(UG, KG)
        }
        return IG.e.ComputeNormals(UG, this.IwG(), YG), kG ? (this.setVerticesData(mG.l.PositionKind, UG), this.setVerticesData(mG.l.NormalKind, YG), this.setVerticesData(mG.l.UVKind, VG)) : (this.updateVerticesData(mG.l.PositionKind, UG), this.updateVerticesData(mG.l.NormalKind, YG)), this
      }
      _getFlattenedNormals(GG, bG) {
        const ZG = new Float32Array(3 * GG.length);
        let wG = 0;
        const SG = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let LG = 0; LG < GG.length; LG += 3) {
          const yG = iG.p.FromArray(bG, 3 * GG[LG]),
            kG = iG.p.FromArray(bG, 3 * GG[LG + 1]),
            UG = iG.p.FromArray(bG, 3 * GG[LG + 2]),
            YG = yG.subtract(kG),
            VG = UG.subtract(kG),
            pG = iG.p.Normalize(iG.p.Cross(YG, VG));
          SG && pG.scaleInPlace(-1);
          for (let GG = 0; GG < 3; GG++) ZG[wG++] = pG.x, ZG[wG++] = pG.y, ZG[wG++] = pG.z
        }
        return ZG
      }
      _convertToUnIndexedMesh() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = this.getVerticesDataKinds().filter((GG => !this.getVertexBuffer(GG)?.getIsInstanced())),
          ZG = this.IwG(!1, !0),
          wG = {},
          SG = (GG, bG) => {
            const wG = new Float32Array(ZG.length * bG);
            let SG = 0;
            for (let LG = 0; LG < ZG.length; LG++)
              for (let yG = 0; yG < bG; yG++) wG[SG++] = GG[ZG[LG] * bG + yG];
            return wG
          },
          LG = this.HA(),
          yG = this.geometry ? this.aE.slice(0) : [];
        for (const kG of bG) wG[kG] = this.getVerticesData(kG);
        for (const kG of bG) {
          const bG = this.getVertexBuffer(kG),
            LG = bG.getSize();
          if (GG && kG === mG.l.NormalKind) {
            const GG = this._getFlattenedNormals(ZG, wG[mG.l.PositionKind]);
            this.setVerticesData(mG.l.NormalKind, GG, bG.isUpdatable(), LG)
          } else this.setVerticesData(kG, SG(wG[kG], LG), bG.isUpdatable(), LG)
        }
        if (this.morphTargetManager) {
          for (let bG = 0; bG < this.morphTargetManager.numTargets; bG++) {
            const wG = this.morphTargetManager.getTarget(bG),
              LG = wG.getPositions();
            wG.GkG(SG(LG, 3));
            const yG = wG.getNormals();
            yG && wG.setNormals(GG ? this._getFlattenedNormals(ZG, LG) : SG(yG, 3));
            const kG = wG.getTangents();
            kG && wG.setTangents(SG(kG, 3));
            const UG = wG.getUVs();
            UG && wG.setUVs(SG(UG, 2));
            const YG = wG.getColors();
            YG && wG.setColors(SG(YG, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let kG = 0; kG < ZG.length; kG++) ZG[kG] = kG;
        this.setIndices(ZG), this._unIndexed = !0, this.releaseSubMeshes();
        for (const kG of yG) {
          const GG = kG.HA();
          aG.c.AddToMesh(kG.materialIndex, kG.indexStart, kG.indexCount, kG.indexStart, kG.indexCount, this).setBoundingInfo(GG)
        }
        return this.setBoundingInfo(LG), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = IG.e.ExtractFromMesh(this);
        let ZG;
        if (GG && this.isVerticesDataPresent(mG.l.NormalKind) && bG.normals) {
          for (ZG = 0; ZG < bG.normals.length; ZG++) bG.normals[ZG] *= -1;
          this.setVerticesData(mG.l.NormalKind, bG.normals, this.isVertexBufferUpdatable(mG.l.NormalKind))
        }
        if (bG.indices) {
          let GG;
          for (ZG = 0; ZG < bG.indices.length; ZG += 3) GG = bG.indices[ZG + 1], bG.indices[ZG + 1] = bG.indices[ZG + 2], bG.indices[ZG + 2] = GG;
          this.setIndices(bG.indices, null, this.isVertexBufferUpdatable(mG.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const bG = IG.e.ExtractFromMesh(this),
          ZG = bG.indices && !Array.isArray(bG.indices) && Array.from ? Array.from(bG.indices) : bG.indices,
          wG = bG.positions && !Array.isArray(bG.positions) && Array.from ? Array.from(bG.positions) : bG.positions,
          SG = bG.uvs && !Array.isArray(bG.uvs) && Array.from ? Array.from(bG.uvs) : bG.uvs,
          LG = bG.normals && !Array.isArray(bG.normals) && Array.from ? Array.from(bG.normals) : bG.normals;
        if (ZG && wG) {
          bG.indices = ZG, bG.positions = wG, SG && (bG.uvs = SG), LG && (bG.normals = LG);
          const yG = GG + 1,
            kG = [];
          for (let GG = 0; GG < yG + 1; GG++) kG[GG] = [];
          let UG, YG;
          const VG = new iG.p(0, 0, 0),
            pG = new iG.p(0, 0, 0),
            fG = new iG.m(0, 0),
            QG = [],
            KG = [],
            hG = [];
          let dG, JG, rG, zG = wG.length;
          SG && (JG = SG.length), LG && (rG = LG.length);
          for (let GG = 0; GG < ZG.length; GG += 3) {
            KG[0] = ZG[GG], KG[1] = ZG[GG + 1], KG[2] = ZG[GG + 2];
            for (let GG = 0; GG < 3; GG++)
              if (UG = KG[GG], YG = KG[(GG + 1) % 3], void 0 === hG[UG] && void 0 === hG[YG] ? (hG[UG] = [], hG[YG] = []) : (void 0 === hG[UG] && (hG[UG] = []), void 0 === hG[YG] && (hG[YG] = [])), void 0 === hG[UG][YG] && void 0 === hG[YG][UG]) {
                hG[UG][YG] = [], VG.x = (wG[3 * YG] - wG[3 * UG]) / yG, VG.y = (wG[3 * YG + 1] - wG[3 * UG + 1]) / yG, VG.z = (wG[3 * YG + 2] - wG[3 * UG + 2]) / yG, LG && (pG.x = (LG[3 * YG] - LG[3 * UG]) / yG, pG.y = (LG[3 * YG + 1] - LG[3 * UG + 1]) / yG, pG.z = (LG[3 * YG + 2] - LG[3 * UG + 2]) / yG), SG && (fG.x = (SG[2 * YG] - SG[2 * UG]) / yG, fG.y = (SG[2 * YG + 1] - SG[2 * UG + 1]) / yG), hG[UG][YG].push(UG);
                for (let GG = 1; GG < yG; GG++) hG[UG][YG].push(wG.length / 3), wG[zG++] = wG[3 * UG] + GG * VG.x, wG[zG++] = wG[3 * UG + 1] + GG * VG.y, wG[zG++] = wG[3 * UG + 2] + GG * VG.z, LG && (LG[rG++] = LG[3 * UG] + GG * pG.x, LG[rG++] = LG[3 * UG + 1] + GG * pG.y, LG[rG++] = LG[3 * UG + 2] + GG * pG.z), SG && (SG[JG++] = SG[2 * UG] + GG * fG.x, SG[JG++] = SG[2 * UG + 1] + GG * fG.y);
                hG[UG][YG].push(YG), hG[YG][UG] = [], dG = hG[UG][YG].length;
                for (let GG = 0; GG < dG; GG++) hG[YG][UG][GG] = hG[UG][YG][dG - 1 - GG]
              } kG[0][0] = ZG[GG], kG[1][0] = hG[ZG[GG]][ZG[GG + 1]][1], kG[1][1] = hG[ZG[GG]][ZG[GG + 2]][1];
            for (let bG = 2; bG < yG; bG++) {
              kG[bG][0] = hG[ZG[GG]][ZG[GG + 1]][bG], kG[bG][bG] = hG[ZG[GG]][ZG[GG + 2]][bG], VG.x = (wG[3 * kG[bG][bG]] - wG[3 * kG[bG][0]]) / bG, VG.y = (wG[3 * kG[bG][bG] + 1] - wG[3 * kG[bG][0] + 1]) / bG, VG.z = (wG[3 * kG[bG][bG] + 2] - wG[3 * kG[bG][0] + 2]) / bG, LG && (pG.x = (LG[3 * kG[bG][bG]] - LG[3 * kG[bG][0]]) / bG, pG.y = (LG[3 * kG[bG][bG] + 1] - LG[3 * kG[bG][0] + 1]) / bG, pG.z = (LG[3 * kG[bG][bG] + 2] - LG[3 * kG[bG][0] + 2]) / bG), SG && (fG.x = (SG[2 * kG[bG][bG]] - SG[2 * kG[bG][0]]) / bG, fG.y = (SG[2 * kG[bG][bG] + 1] - SG[2 * kG[bG][0] + 1]) / bG);
              for (let GG = 1; GG < bG; GG++) kG[bG][GG] = wG.length / 3, wG[zG++] = wG[3 * kG[bG][0]] + GG * VG.x, wG[zG++] = wG[3 * kG[bG][0] + 1] + GG * VG.y, wG[zG++] = wG[3 * kG[bG][0] + 2] + GG * VG.z, LG && (LG[rG++] = LG[3 * kG[bG][0]] + GG * pG.x, LG[rG++] = LG[3 * kG[bG][0] + 1] + GG * pG.y, LG[rG++] = LG[3 * kG[bG][0] + 2] + GG * pG.z), SG && (SG[JG++] = SG[2 * kG[bG][0]] + GG * fG.x, SG[JG++] = SG[2 * kG[bG][0] + 1] + GG * fG.y)
            }
            kG[yG] = hG[ZG[GG + 1]][ZG[GG + 2]], QG.push(kG[0][0], kG[1][0], kG[1][1]);
            for (let GG = 1; GG < yG; GG++) {
              let bG;
              for (bG = 0; bG < GG; bG++) QG.push(kG[GG][bG], kG[GG + 1][bG], kG[GG + 1][bG + 1]), QG.push(kG[GG][bG], kG[GG + 1][bG + 1], kG[GG][bG + 1]);
              QG.push(kG[GG][bG], kG[GG + 1][bG], kG[GG + 1][bG + 1])
            }
          }
          bG.indices = QG, bG.applyToMesh(this, this.isVertexBufferUpdatable(mG.l.PositionKind))
        } else AG.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const GG = IG.e.ExtractFromMesh(this),
          bG = GG.uvs,
          ZG = GG.indices,
          wG = GG.positions,
          SG = GG.colors,
          LG = GG.matricesIndices,
          yG = GG.matricesWeights,
          kG = GG.matricesIndicesExtra,
          UG = GG.matricesWeightsExtra;
        if (void 0 === ZG || void 0 === wG || null === ZG || null === wG) AG.c.Warn("VertexData contains empty entries");
        else {
          const YG = [],
            VG = [],
            pG = [],
            fG = [],
            QG = [],
            KG = [],
            hG = [],
            dG = [];
          let JG, rG = 0;
          const zG = {};
          let EG, oG;
          for (let GG = 0; GG < ZG.length; GG += 3) {
            oG = [ZG[GG], ZG[GG + 1], ZG[GG + 2]], JG = [];
            for (let GG = 0; GG < 3; GG++) {
              JG[GG] = "";
              for (let bG = 0; bG < 3; bG++) Math.abs(wG[3 * oG[GG] + bG]) < 1e-8 && (wG[3 * oG[GG] + bG] = 0), JG[GG] += wG[3 * oG[GG] + bG] + "|"
            }
            if (JG[0] != JG[1] && JG[0] != JG[2] && JG[1] != JG[2])
              for (let GG = 0; GG < 3; GG++) {
                if (EG = zG[JG[GG]], void 0 === EG) {
                  zG[JG[GG]] = rG, EG = rG++;
                  for (let bG = 0; bG < 3; bG++) YG.push(wG[3 * oG[GG] + bG]);
                  if (null !== SG && void 0 !== SG)
                    for (let bG = 0; bG < 4; bG++) fG.push(SG[4 * oG[GG] + bG]);
                  if (null !== bG && void 0 !== bG)
                    for (let ZG = 0; ZG < 2; ZG++) pG.push(bG[2 * oG[GG] + ZG]);
                  if (null !== LG && void 0 !== LG)
                    for (let bG = 0; bG < 4; bG++) QG.push(LG[4 * oG[GG] + bG]);
                  if (null !== yG && void 0 !== yG)
                    for (let bG = 0; bG < 4; bG++) KG.push(yG[4 * oG[GG] + bG]);
                  if (null !== kG && void 0 !== kG)
                    for (let bG = 0; bG < 4; bG++) hG.push(kG[4 * oG[GG] + bG]);
                  if (null !== UG && void 0 !== UG)
                    for (let bG = 0; bG < 4; bG++) dG.push(UG[4 * oG[GG] + bG])
                }
                VG.push(EG)
              }
          }
          const XG = [];
          IG.e.ComputeNormals(YG, VG, XG), GG.positions = YG, GG.indices = VG, GG.normals = XG, null !== bG && void 0 !== bG && (GG.uvs = pG), null !== SG && void 0 !== SG && (GG.colors = fG), null !== LG && void 0 !== LG && (GG.matricesIndices = QG), null !== yG && void 0 !== yG && (GG.matricesWeights = KG), null !== kG && void 0 !== kG && (GG.matricesIndicesExtra = hG), null !== yG && void 0 !== yG && (GG.matricesWeightsExtra = dG), GG.applyToMesh(this, this.isVertexBufferUpdatable(mG.l.PositionKind))
        }
      }
      static _instancedMeshFactory(GG, bG) {
        throw (0, qG.i)("InstancedMesh")
      }
      static _PhysicsImpostorParser(GG, bG, ZG) {
        throw (0, qG.i)("PhysicsImpostor")
      }
      createInstance(GG) {
        const bG = OG._instancedMeshFactory(GG, this);
        return bG.parent = this.parent, bG
      }
      synchronizeInstances() {
        for (let GG = 0; GG < this.instances.length; GG++) {
          this.instances[GG]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(GG) {
        const bG = this.IwG(),
          ZG = this.getVerticesData(mG.l.PositionKind);
        if (!ZG || !bG) return this;
        const wG = [];
        for (let LG = 0; LG < ZG.length; LG += 3) wG.push(iG.p.FromArray(ZG, LG));
        const SG = [];
        return rG.b.SyncAsyncForLoop(wG.length, 40, (GG => {
          const bG = wG.length - 1 - GG,
            ZG = wG[bG];
          for (let LG = 0; LG < bG; ++LG) {
            const GG = wG[LG];
            if (ZG.equals(GG)) {
              SG[bG] = LG;
              break
            }
          }
        }), (() => {
          for (let GG = 0; GG < bG.length; ++GG) bG[GG] = SG[bG[GG]] || bG[GG];
          const ZG = this.aE.slice(0);
          this.setIndices(bG), this.aE = ZG, GG && GG(this)
        })), this
      }
      serialize() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        GG.name = this.name, GG.id = this.id, GG.uniqueId = this.uniqueId, GG.type = this.getClassName(), oG.c && oG.c.HasTags(this) && (GG.tags = oG.c.GetTags(this)), GG.position = this.position.mwG(), this.rotationQuaternion ? GG.rotationQuaternion = this.rotationQuaternion.mwG() : this.rotation && (GG.rotation = this.rotation.mwG()), GG.nY = this.nY.mwG(), this._postMultiplyPivotMatrix ? GG.pivotMatrix = this.getPivotMatrix().mwG() : GG.localMatrix = this.getPivotMatrix().mwG(), GG.isEnabled = this.isEnabled(!1), GG.isVisible = this.isVisible, GG.infiniteDistance = this.infiniteDistance, GG.pickable = this.qh, GG.receiveShadows = this.receiveShadows, GG.billboardMode = this.billboardMode, GG.visibility = this.visibility, GG.WK = this.WK, GG.checkCollisions = this.checkCollisions, GG.ellipsoid = this.ellipsoid.mwG(), GG.ellipsoidOffset = this.ellipsoidOffset.mwG(), GG.FK = this.FK, GG.isBlocker = this.isBlocker, GG.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (GG.Kl = !0), this.parent && this.parent._serializeAsParent(GG), GG.isUnIndexed = this.isUnIndexed;
        const bG = this._geometry;
        if (bG && this.aE) {
          GG.geometryUniqueId = bG.uniqueId, GG.geometryId = bG.id, GG.aE = [];
          for (let bG = 0; bG < this.aE.length; bG++) {
            const ZG = this.aE[bG];
            GG.aE.push({
              materialIndex: ZG.materialIndex,
              verticesStart: ZG.verticesStart,
              verticesCount: ZG.verticesCount,
              indexStart: ZG.indexStart,
              indexCount: ZG.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (GG.materialUniqueId = this.material.uniqueId, GG.materialId = this.material.id) : (this.material = null, GG.materialUniqueId = this._scene.defaultMaterial.uniqueId, GG.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (GG.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (GG.skeletonId = this.skeleton.id, GG.skeletonUniqueId = this.skeleton.uniqueId, GG.numBoneInfluencers = this.numBoneInfluencers), this.Dv()._getComponent(nG.b.NAME_PHYSICSENGINE)) {
          const bG = this.getPhysicsImpostor?.();
          bG && (GG.physicsMass = bG.getParam("Ck"), GG.physicsFriction = bG.getParam("friction"), GG.physicsRestitution = bG.getParam("Ck"), GG.physicsImpostor = bG.type)
        }
        this.metadata && (GG.metadata = this.metadata), 0 !== this.meshBlendingTag && (GG.meshBlendingTag = this.meshBlendingTag), GG.instances = [];
        for (let ZG = 0; ZG < this.instances.length; ZG++) {
          const bG = this.instances[ZG];
          if (bG.doNotSerialize) continue;
          const wG = {
            name: bG.name,
            id: bG.id,
            isEnabled: bG.isEnabled(!1),
            isVisible: bG.isVisible,
            qh: bG.qh,
            checkCollisions: bG.checkCollisions,
            position: bG.position.mwG(),
            nY: bG.nY.mwG()
          };
          if (bG.parent && bG.parent._serializeAsParent(wG), bG.rotationQuaternion ? wG.rotationQuaternion = bG.rotationQuaternion.mwG() : bG.rotation && (wG.rotation = bG.rotation.mwG()), this.Dv()._getComponent(nG.b.NAME_PHYSICSENGINE)) {
            const GG = bG.getPhysicsImpostor?.();
            GG && (wG.physicsMass = GG.getParam("Ck"), wG.physicsFriction = GG.getParam("friction"), wG.physicsRestitution = GG.getParam("Ck"), wG.physicsImpostor = GG.type)
          }
          bG.metadata && (wG.metadata = bG.metadata), bG.actionManager && (wG.actions = bG.actionManager.serialize(bG.name)), GG.instances.push(wG), MG.b.AppendSerializedAnimations(bG, wG), wG.Bh = bG.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (GG.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.tbG
          }, this._userThinInstanceBuffersStorage)) {
          const bG = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const GG in this._userThinInstanceBuffersStorage.data) bG.data[GG] = Array.from(this._userThinInstanceBuffersStorage.data[GG]), bG.sizes[GG] = this._userThinInstanceBuffersStorage.sizes[GG], bG.strides[GG] = this._userThinInstanceBuffersStorage.strides[GG];
          GG.thinInstances.userThinInstance = bG
        }
        return MG.b.AppendSerializedAnimations(this, GG), GG.Bh = this.serializeAnimationRanges(), GG.layerMask = this.layerMask, GG.alphaIndex = this.alphaIndex, GG.hasVertexAlpha = this.hasVertexAlpha, GG.overlayAlpha = this.overlayAlpha, GG.overlayColor = this.overlayColor.mwG(), GG.renderOverlay = this.renderOverlay, GG.applyFog = this.applyFog, this.actionManager && (GG.actions = this.actionManager.serialize(this.name)), GG
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const GG = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (GG && GG.vertexCount) {
          if (GG.vertexCount !== this.getTotalVertices()) return AG.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (GG.isUsingTextureForTargets) return;
          for (let bG = 0; bG < GG.numInfluencers; bG++) {
            const ZG = GG.getActiveTarget(bG),
              wG = ZG.getPositions();
            if (!wG) return void AG.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(mG.l.PositionKind + bG, wG, !1, 3);
            const SG = ZG.getNormals();
            SG && this.geometry.setVerticesData(mG.l.NormalKind + bG, SG, !1, 3);
            const LG = ZG.getTangents();
            LG && this.geometry.setVerticesData(mG.l.TangentKind + bG, LG, !1, 3);
            const yG = ZG.getUVs();
            yG && this.geometry.setVerticesData(mG.l.UVKind + "_" + bG, yG, !1, 2);
            const kG = ZG.getUV2s();
            kG && this.geometry.setVerticesData(mG.l.UV2Kind + "_" + bG, kG, !1, 2);
            const UG = ZG.getColors();
            UG && this.geometry.setVerticesData(mG.l.ColorKind + bG, UG, !1, 4)
          }
        } else {
          let GG = 0;
          for (; this.geometry.isVerticesDataPresent(mG.l.PositionKind + GG);) this.geometry.removeVerticesData(mG.l.PositionKind + GG), this.geometry.isVerticesDataPresent(mG.l.NormalKind + GG) && this.geometry.removeVerticesData(mG.l.NormalKind + GG), this.geometry.isVerticesDataPresent(mG.l.TangentKind + GG) && this.geometry.removeVerticesData(mG.l.TangentKind + GG), this.geometry.isVerticesDataPresent(mG.l.UVKind + "_" + GG) && this.geometry.removeVerticesData(mG.l.UVKind + "_" + GG), this.geometry.isVerticesDataPresent(mG.l.UV2Kind + "_" + GG) && this.geometry.removeVerticesData(mG.l.UV2Kind + "_" + GG), this.geometry.isVerticesDataPresent(mG.l.ColorKind + GG) && this.geometry.removeVerticesData(mG.l.ColorKind + GG), GG++
        }
      }
      static Parse(GG, bG, ZG) {
        let wG, SG = !1;
        if (GG.type && "LinesMesh" === GG.type ? wG = OG._LinesMeshParser(GG, bG) : GG.type && "GroundMesh" === GG.type ? wG = OG._GroundMeshParser(GG, bG) : GG.type && "GoldbergMesh" === GG.type ? wG = OG._GoldbergMeshParser(GG, bG) : GG.type && "GreasedLineMesh" === GG.type ? wG = OG._GreasedLineMeshParser(GG, bG) : GG.type && "TrailMesh" === GG.type ? wG = OG._TrailMeshParser(GG, bG) : GG.type && "GaussianSplattingMesh" === GG.type ? (wG = GG._isCompound ? OG._GaussianSplattingCompoundMeshParser(GG, bG) : OG._GaussianSplattingMeshParser(GG, bG), SG = !0) : GG.type && "GaussianSplattingPartProxyMesh" === GG.type ? (wG = OG._GaussianSplattingPartProxyMeshParser(GG, bG), SG = !0) : wG = new OG(GG.name, bG), wG.id = GG.id, wG._waitingParsedUniqueId = GG.uniqueId, oG.c && oG.c.AddTagsTo(wG, GG.tags), wG.position = iG.p.FromArray(GG.position), void 0 !== GG.metadata && (wG.metadata = GG.metadata), void 0 !== GG.meshBlendingTag && (wG.meshBlendingTag = GG.meshBlendingTag), GG.rotationQuaternion ? wG.rotationQuaternion = iG.g.FromArray(GG.rotationQuaternion) : GG.rotation && (wG.rotation = iG.p.FromArray(GG.rotation)), wG.nY = iG.p.FromArray(GG.nY), GG.localMatrix ? wG.setPreTransformMatrix(iG.e.FromArray(GG.localMatrix)) : GG.pivotMatrix && wG.setPivotMatrix(iG.e.FromArray(GG.pivotMatrix)), wG.DW(GG.isEnabled), wG.isVisible = GG.isVisible, wG.infiniteDistance = GG.infiniteDistance, wG.WK = !!GG.WK, wG.showBoundingBox = GG.showBoundingBox, wG.showSubMeshesBoundingBox = GG.showSubMeshesBoundingBox, void 0 !== GG.applyFog && (wG.applyFog = GG.applyFog), void 0 !== GG.pickable && (wG.qh = GG.pickable), void 0 !== GG.alphaIndex && (wG.alphaIndex = GG.alphaIndex), wG.receiveShadows = GG.receiveShadows, void 0 !== GG.billboardMode && (wG.billboardMode = GG.billboardMode), void 0 !== GG.visibility && (wG.visibility = GG.visibility), wG.checkCollisions = GG.checkCollisions, wG.FK = !!GG.FK, GG.ellipsoid && (wG.ellipsoid = iG.p.FromArray(GG.ellipsoid)), GG.ellipsoidOffset && (wG.ellipsoidOffset = iG.p.FromArray(GG.ellipsoidOffset)), null != GG.overrideMaterialSideOrientation && (wG.sideOrientation = GG.overrideMaterialSideOrientation), void 0 !== GG.sideOrientation && (wG.sideOrientation = GG.sideOrientation), void 0 !== GG.isBlocker && (wG.isBlocker = GG.isBlocker), wG._shouldGenerateFlatShading = GG.useFlatShading, GG.Kl && (wG._waitingData.Kl = GG.Kl), void 0 !== GG.parentId && (wG._waitingParentId = GG.parentId), void 0 !== GG.parentInstanceIndex && (wG._waitingParentInstanceIndex = GG.parentInstanceIndex), void 0 !== GG.actions && (wG._waitingData.actions = GG.actions), void 0 !== GG.overlayAlpha && (wG.overlayAlpha = GG.overlayAlpha), void 0 !== GG.overlayColor && (wG.overlayColor = CG.c.FromArray(GG.overlayColor)), void 0 !== GG.renderOverlay && (wG.renderOverlay = GG.renderOverlay), wG.isUnIndexed = !!GG.isUnIndexed, wG.hasVertexAlpha = GG.hasVertexAlpha, GG.delayLoadingFile ? (wG.delayLoadState = 4, wG.delayLoadingFile = ZG + GG.delayLoadingFile, wG.buildBoundingInfo(iG.p.FromArray(GG.boundingBoxMinimum), iG.p.FromArray(GG.boundingBoxMaximum)), GG._binaryInfo && (wG._binaryInfo = GG._binaryInfo), wG._delayInfo = [], GG.hasUVs && wG._delayInfo.push(mG.l.UVKind), GG.hasUVs2 && wG._delayInfo.push(mG.l.UV2Kind), GG.hasUVs3 && wG._delayInfo.push(mG.l.UV3Kind), GG.hasUVs4 && wG._delayInfo.push(mG.l.UV4Kind), GG.hasUVs5 && wG._delayInfo.push(mG.l.UV5Kind), GG.hasUVs6 && wG._delayInfo.push(mG.l.UV6Kind), GG.hasColors && wG._delayInfo.push(mG.l.ColorKind), GG.hasMatricesIndices && wG._delayInfo.push(mG.l.MatricesIndicesKind), GG.hasMatricesWeights && wG._delayInfo.push(mG.l.MatricesWeightsKind), wG._delayLoadingFunction = FG.e._ImportGeometry, PG.d.ForceFullSceneLoadingForIncremental && wG._checkDelayState()) : SG || FG.e._ImportGeometry(GG, wG), GG.materialUniqueId ? wG._waitingMaterialId = GG.materialUniqueId : GG.materialId && (wG._waitingMaterialId = GG.materialId), GG.morphTargetManagerId > -1 && (wG._waitingMorphTargetManagerId = GG.morphTargetManagerId), void 0 !== GG.skeletonId && null !== GG.skeletonId && (wG.skeleton = bG.getLastSkeletonById(GG.skeletonId), wG._waitingSkeletonId = GG.skeletonId, GG.numBoneInfluencers && (wG.numBoneInfluencers = GG.numBoneInfluencers)), void 0 !== GG.skeletonUniqueId && null !== GG.skeletonUniqueId && (wG._waitingSkeletonUniqueId = GG.skeletonUniqueId), GG.animations) {
          for (let bG = 0; bG < GG.animations.length; bG++) {
            const ZG = GG.animations[bG],
              SG = (0, sG.e)("BABYLON.Animation");
            SG && wG.animations.push(SG.Parse(ZG))
          }
          WG.e.ParseAnimationRanges(wG, GG, bG)
        }
        if (GG.autoAnimate && bG.beginAnimation(wG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), GG.layerMask && !isNaN(GG.layerMask) ? wG.layerMask = Math.abs(parseInt(GG.layerMask)) : wG.layerMask = 268435455, GG.physicsImpostor && (wG.physicsImpostor = OG._PhysicsImpostorParser(bG, wG, GG)), GG.lodMeshIds && (wG._waitingData.lods = {
            ids: GG.lodMeshIds,
            distances: GG.lodDistances ? GG.lodDistances : null,
            coverages: GG.lodCoverages ? GG.lodCoverages : null
          }), GG.instances)
          for (let LG = 0; LG < GG.instances.length; LG++) {
            const ZG = GG.instances[LG],
              SG = wG.createInstance(ZG.name);
            if (ZG.id && (SG.id = ZG.id), oG.c && (ZG.tags ? oG.c.AddTagsTo(SG, ZG.tags) : oG.c.AddTagsTo(SG, GG.tags)), SG.position = iG.p.FromArray(ZG.position), void 0 !== ZG.metadata && (SG.metadata = ZG.metadata), void 0 !== ZG.parentId && (SG._waitingParentId = ZG.parentId), void 0 !== ZG.parentInstanceIndex && (SG._waitingParentInstanceIndex = ZG.parentInstanceIndex), void 0 !== ZG.isEnabled && null !== ZG.isEnabled && SG.DW(ZG.isEnabled), void 0 !== ZG.isVisible && null !== ZG.isVisible && (SG.isVisible = ZG.isVisible), void 0 !== ZG.qh && null !== ZG.qh && (SG.qh = ZG.qh), ZG.rotationQuaternion ? SG.rotationQuaternion = iG.g.FromArray(ZG.rotationQuaternion) : ZG.rotation && (SG.rotation = iG.p.FromArray(ZG.rotation)), SG.nY = iG.p.FromArray(ZG.nY), void 0 != ZG.checkCollisions && null != ZG.checkCollisions && (SG.checkCollisions = ZG.checkCollisions), void 0 != ZG.pickable && null != ZG.pickable && (SG.qh = ZG.pickable), void 0 != ZG.showBoundingBox && null != ZG.showBoundingBox && (SG.showBoundingBox = ZG.showBoundingBox), void 0 != ZG.showSubMeshesBoundingBox && null != ZG.showSubMeshesBoundingBox && (SG.showSubMeshesBoundingBox = ZG.showSubMeshesBoundingBox), void 0 != ZG.alphaIndex && null != ZG.showSubMeshesBoundingBox && (SG.alphaIndex = ZG.alphaIndex), ZG.physicsImpostor && (SG.physicsImpostor = OG._PhysicsImpostorParser(bG, SG, ZG)), void 0 !== ZG.actions && (SG._waitingData.actions = ZG.actions), ZG.animations) {
              for (let GG = 0; GG < ZG.animations.length; GG++) {
                const bG = ZG.animations[GG],
                  wG = (0, sG.e)("BABYLON.Animation");
                wG && SG.animations.push(wG.Parse(bG))
              }
              WG.e.ParseAnimationRanges(SG, ZG, bG), ZG.autoAnimate && bG.beginAnimation(SG, ZG.autoAnimateFrom, ZG.autoAnimateTo, ZG.autoAnimateLoop, ZG.autoAnimateSpeed || 1)
            }
          }
        if (GG.thinInstances) {
          const bG = GG.thinInstances;
          if (wG.tbG = !!bG.enablePicking, bG.matrixData ? (wG.yGG("matrix", new Float32Array(bG.matrixData), 16, !1), wG._thinInstanceDataStorage.matrixBufferSize = bG.matrixBufferSize, wG._thinInstanceDataStorage.instancesCount = bG.instancesCount) : wG._thinInstanceDataStorage.matrixBufferSize = bG.matrixBufferSize, GG.thinInstances.userThinInstance) {
            const bG = GG.thinInstances.userThinInstance;
            for (const GG in bG.data) wG.yGG(GG, new Float32Array(bG.data[GG]), bG.strides[GG], !1), wG._userThinInstanceBuffersStorage.sizes[GG] = bG.sizes[GG]
          }
        }
        return wG
      }
      setPositionsForCPUSkinning() {
        const GG = this._internalMeshDataInfo;
        if (!GG._sourcePositions) {
          const bG = this.getVerticesData(mG.l.PositionKind);
          if (!bG) return GG._sourcePositions;
          GG._sourcePositions = new Float32Array(bG), this.isVertexBufferUpdatable(mG.l.PositionKind) || this.setVerticesData(mG.l.PositionKind, bG, !0)
        }
        return GG._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const GG = this._internalMeshDataInfo;
        if (!GG._sourceNormals) {
          const bG = this.getVerticesData(mG.l.NormalKind);
          if (!bG) return GG._sourceNormals;
          GG._sourceNormals = new Float32Array(bG), this.isVertexBufferUpdatable(mG.l.NormalKind) || this.setVerticesData(mG.l.NormalKind, bG, !0)
        }
        return GG._sourceNormals
      }
      applySkeleton(GG) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.Dv().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.Dv().getFrameId(), !this.isVerticesDataPresent(mG.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(mG.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(mG.l.MatricesWeightsKind)) return this;
        const bG = this.isVerticesDataPresent(mG.l.NormalKind),
          ZG = this._internalMeshDataInfo;
        if (!ZG._sourcePositions) {
          const GG = this.aE.slice();
          this.setPositionsForCPUSkinning(), this.aE = GG
        }
        bG && !ZG._sourceNormals && this.setNormalsForCPUSkinning();
        let wG = this.getVerticesData(mG.l.PositionKind);
        if (!wG) return this;
        wG instanceof Float32Array || (wG = new Float32Array(wG));
        let SG = this.getVerticesData(mG.l.NormalKind);
        if (bG) {
          if (!SG) return this;
          SG instanceof Float32Array || (SG = new Float32Array(SG))
        }
        const LG = this.getVerticesData(mG.l.MatricesIndicesKind),
          yG = this.getVerticesData(mG.l.MatricesWeightsKind);
        if (!yG || !LG) return this;
        const kG = this.numBoneInfluencers > 4,
          UG = kG ? this.getVerticesData(mG.l.MatricesIndicesExtraKind) : null,
          YG = kG ? this.getVerticesData(mG.l.MatricesWeightsExtraKind) : null,
          VG = GG.getTransformMatrices(this),
          pG = iG.p.Zero(),
          fG = new iG.e,
          QG = new iG.e;
        let KG, hG = 0;
        for (let dG = 0; dG < wG.length; dG += 3, hG += 4) {
          let GG;
          for (KG = 0; KG < 4; KG++) GG = yG[hG + KG], GG > 0 && (iG.e.FromFloat32ArrayToRefScaled(VG, Math.floor(16 * LG[hG + KG]), GG, QG), fG.addToSelf(QG));
          if (kG)
            for (KG = 0; KG < 4; KG++) GG = YG[hG + KG], GG > 0 && (iG.e.FromFloat32ArrayToRefScaled(VG, Math.floor(16 * UG[hG + KG]), GG, QG), fG.addToSelf(QG));
          iG.p.TransformCoordinatesFromFloatsToRef(ZG._sourcePositions[dG], ZG._sourcePositions[dG + 1], ZG._sourcePositions[dG + 2], fG, pG), pG.toArray(wG, dG), bG && (iG.p.TransformNormalFromFloatsToRef(ZG._sourceNormals[dG], ZG._sourceNormals[dG + 1], ZG._sourceNormals[dG + 2], fG, pG), pG.toArray(SG, dG)), fG.reset()
        }
        return this.updateVerticesData(mG.l.PositionKind, wG), bG && this.updateVerticesData(mG.l.NormalKind, SG), this
      }
      static MinMax(GG) {
        let bG = null,
          ZG = null;
        for (const wG of GG) {
          const GG = wG.HA().boundingBox;
          bG && ZG ? (bG.minimizeInPlace(GG.minimumWorld), ZG.maximizeInPlace(GG.maximumWorld)) : (bG = GG.minimumWorld.clone(), ZG = GG.maximumWorld.clone())
        }
        return bG && ZG ? {
          min: bG,
          max: ZG
        } : {
          min: iG.p.Zero(),
          max: iG.p.Zero()
        }
      }
      static Center(GG) {
        const bG = GG instanceof Array ? OG.MinMax(GG) : GG;
        return iG.p.Center(bG.min, bG.max)
      }
      static MergeMeshes(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        return (0, XG.l)(OG._MergeMeshesCoroutine(GG, bG, ZG, wG, SG, LG, !1))
      }
      static async MergeMeshesAsync(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, XG.i)(OG._MergeMeshesCoroutine(GG, bG, ZG, wG, SG, LG, !0), (0, XG.d)())
      }
      static * _MergeMeshesCoroutine(GG) {
        let bG, ZG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wG = arguments.length > 2 ? arguments[2] : void 0,
          SG = arguments.length > 3 ? arguments[3] : void 0,
          LG = arguments.length > 4 ? arguments[4] : void 0,
          yG = arguments.length > 5 ? arguments[5] : void 0,
          kG = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (GG = GG.filter(Boolean)).length) return null;
        if (!wG) {
          let ZG = 0;
          for (bG = 0; bG < GG.length; bG++)
            if (ZG += GG[bG].getTotalVertices(), ZG >= 65536) return AG.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const UG = GG[0];
        yG && (LG = !1, GG.sort(((GG, bG) => (GG.material?.uniqueId ?? -1) - (bG.material?.uniqueId ?? -1))));
        const YG = new Array,
          VG = new Array,
          pG = new Array,
          fG = GG[0].sideOrientation;
        for (bG = 0; bG < GG.length; bG++) {
          const ZG = GG[bG];
          if (ZG.Ul) return AG.c.Warn("Cannot merge instance meshes."), null;
          if (fG !== ZG.sideOrientation) return AG.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (LG || yG) {
            const GG = pG.reduce(((GG, bG) => Math.max(GG, bG.start + bG.count)), 0);
            if (yG)
              if (ZG.material) {
                const bG = ZG.material;
                if (bG instanceof jG.d) {
                  for (let GG = 0; GG < bG.UGG.length; GG++) YG.indexOf(bG.UGG[GG]) < 0 && YG.push(bG.UGG[GG]);
                  for (let wG = 0; wG < ZG.aE.length; wG++) VG.push(YG.indexOf(bG.UGG[ZG.aE[wG].materialIndex])), pG.push({
                    start: GG + ZG.aE[wG].indexStart,
                    count: ZG.aE[wG].indexCount
                  })
                } else {
                  YG.indexOf(bG) < 0 && YG.push(bG);
                  for (let wG = 0; wG < ZG.aE.length; wG++) VG.push(YG.indexOf(bG)), pG.push({
                    start: GG + ZG.aE[wG].indexStart,
                    count: ZG.aE[wG].indexCount
                  })
                }
              } else
                for (let bG = 0; bG < ZG.aE.length; bG++) VG.push(0), pG.push({
                  start: GG + ZG.aE[bG].indexStart,
                  count: ZG.aE[bG].indexCount
                });
            else pG.push({
              start: GG,
              count: ZG.getTotalIndices()
            })
          }
        }
        if (yG && pG.length > 1) {
          let GG = 0;
          for (let bG = 1; bG < pG.length; bG++) {
            const ZG = pG[GG],
              wG = pG[bG];
            VG[bG] === VG[GG] && ZG.start + ZG.count === wG.start ? ZG.count += wG.count : (GG++, pG[GG] = wG, VG[GG] = VG[bG])
          }
          pG.length = GG + 1, VG.length = GG + 1
        }
        const QG = GG => {
            const bG = GG.computeWorldMatrix(!0);
            return {
              vertexData: IG.e.ExtractFromMesh(GG, !1, !1),
              transform: bG
            }
          },
          {
            vertexData: KG,
            transform: hG
          } = QG(GG[0]);
        kG && (yield);
        const dG = new Array(GG.length - 1);
        for (let XG = 1; XG < GG.length; XG++) dG[XG - 1] = QG(GG[XG]), kG && (yield);
        const JG = KG._mergeCoroutine(hG, dG, wG, kG, !ZG);
        let rG = JG.next();
        for (; !rG.done;) kG && (yield), rG = JG.next();
        const zG = rG.value;
        SG || (SG = new OG(UG.name + "_merged", UG.Dv()));
        const EG = zG._applyToCoroutine(SG, void 0, kG);
        let oG = EG.next();
        for (; !oG.done;) kG && (yield), oG = EG.next();
        if (SG.checkCollisions = UG.checkCollisions, SG.sideOrientation = UG.sideOrientation, ZG)
          for (bG = 0; bG < GG.length; bG++) GG[bG].dispose();
        if (LG || yG) {
          for (SG.releaseSubMeshes(), bG = 0; bG < pG.length;) aG.c.CreateFromIndices(0, pG[bG].start, pG[bG].count, SG, void 0, !1), bG++;
          for (const GG of SG.aE) GG.refreshBoundingInfo();
          SG.computeWorldMatrix(!0)
        }
        if (yG) {
          const GG = new jG.d(UG.name + "_merged", UG.Dv());
          GG.UGG = YG;
          for (let bG = 0; bG < SG.aE.length; bG++) SG.aE[bG].materialIndex = VG[bG];
          SG.material = GG
        } else SG.material = UG.material;
        return SG
      }
      i6(GG) {
        GG._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(GG)
      }
      M6(GG) {
        const bG = GG._indexInSourceMeshInstanceArray;
        if (-1 != bG) {
          if (bG !== this.instances.length - 1) {
            const GG = this.instances[this.instances.length - 1];
            this.instances[bG] = GG, GG._indexInSourceMeshInstanceArray = bG
          }
          GG._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === cG.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(GG) {
        const bG = this.Dv();
        return bG.forcePointsCloud ? cG.e.PointFillMode : bG.forceWireframe ? cG.e.WireFrameFillMode : this.overrideRenderingFillMode ?? GG
      }
      setMaterialByID(GG) {
        return this.setMaterialById(GG)
      }
      static CreateRibbon(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(GG, bG, ZG, wG, SG, LG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(GG, bG, ZG, wG, SG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(GG, bG, ZG, wG, SG, LG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(GG, bG, ZG, wG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(GG, bG, ZG, wG, SG, LG, yG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(GG, bG, ZG, wG, SG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(GG, bG, ZG, wG, SG, LG, yG, kG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(GG, bG, ZG, wG, SG, LG, yG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(GG, bG, ZG, wG, SG, LG, yG, kG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(GG, bG, ZG, wG, SG, LG, yG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(GG, bG, ZG, wG, SG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(GG, bG, ZG, wG, SG, LG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(GG, bG, ZG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(GG, bG, ZG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(GG, bG, ZG, wG, SG, LG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(GG, bG, ZG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(GG) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    OG.FRONTSIDE = IG.e.FRONTSIDE, OG.BACKSIDE = IG.e.BACKSIDE, OG.DOUBLESIDE = IG.e.DOUBLESIDE, OG.DEFAULTSIDE = IG.e.DEFAULTSIDE, OG.NO_CAP = 0, OG.CAP_START = 1, OG.CAP_END = 2, OG.CAP_ALL = 3, OG.NO_FLIP = 0, OG.FLIP_TILE = 1, OG.ROTATE_TILE = 2, OG.FLIP_ROW = 3, OG.ROTATE_ROW = 4, OG.FLIP_N_ROTATE_TILE = 5, OG.FLIP_N_ROTATE_ROW = 6, OG.CENTER = 0, OG.LEFT = 1, OG.RIGHT = 2, OG.TOP = 3, OG.BOTTOM = 4, OG.INSTANCEDMESH_SORT_TRANSPARENT = !1, OG._GroundMeshParser = (GG, bG) => {
      throw (0, qG.i)("GroundMesh")
    }, OG._GoldbergMeshParser = (GG, bG) => {
      throw (0, qG.i)("GoldbergMesh")
    }, OG._LinesMeshParser = (GG, bG) => {
      throw (0, qG.i)("LinesMesh")
    }, OG._GreasedLineMeshParser = (GG, bG) => {
      throw (0, qG.i)("GreasedLineMesh")
    }, OG._GreasedLineRibbonMeshParser = (GG, bG) => {
      throw (0, qG.i)("GreasedLineRibbonMesh")
    }, OG._TrailMeshParser = (GG, bG) => {
      throw (0, qG.i)("TrailMesh")
    }, OG._GaussianSplattingMeshParser = (GG, bG) => {
      throw (0, qG.i)("GaussianSplattingMesh")
    }, OG._GaussianSplattingPartProxyMeshParser = (GG, bG) => {
      throw (0, qG.i)("GaussianSplattingPartProxyMesh")
    }, OG._GaussianSplattingCompoundMeshParser = (GG, bG) => {
      throw (0, qG.i)("GaussianSplattingCompoundMesh")
    };
    let xG = !1;

    function BG() {
      xG || (xG = !0, (0, sG.i)("BABYLON.Mesh", OG))
    }(wG = OG.prototype).gM ?? (wG.gM = (0, qG.h)("Mesh", "gM")), (SG = OG.prototype).simplify ?? (SG.simplify = (0, qG.h)("Mesh", "simplify")), (LG = OG.prototype).thinInstanceAdd ?? (LG.thinInstanceAdd = (0, qG.h)("Mesh", "thinInstanceAdd")), (yG = OG.prototype).thinInstanceAddSelf ?? (yG.thinInstanceAddSelf = (0, qG.h)("Mesh", "thinInstanceAddSelf")), (kG = OG.prototype).thinInstanceRegisterAttribute ?? (kG.thinInstanceRegisterAttribute = (0, qG.h)("Mesh", "thinInstanceRegisterAttribute")), (UG = OG.prototype).thinInstanceSetMatrixAt ?? (UG.thinInstanceSetMatrixAt = (0, qG.h)("Mesh", "thinInstanceSetMatrixAt")), (YG = OG.prototype).thinInstanceSetAttributeAt ?? (YG.thinInstanceSetAttributeAt = (0, qG.h)("Mesh", "thinInstanceSetAttributeAt")), (VG = OG.prototype).yGG ?? (VG.yGG = (0, qG.h)("Mesh", "yGG")), (pG = OG.prototype).thinInstanceGetWorldMatrices ?? (pG.thinInstanceGetWorldMatrices = (0, qG.h)("Mesh", "thinInstanceGetWorldMatrices")), (fG = OG.prototype).bGG ?? (fG.bGG = (0, qG.h)("Mesh", "bGG")), (QG = OG.prototype).thinInstancePartialBufferUpdate ?? (QG.thinInstancePartialBufferUpdate = (0, qG.h)("Mesh", "thinInstancePartialBufferUpdate")), (KG = OG.prototype).thinInstanceRefreshBoundingInfo ?? (KG.thinInstanceRefreshBoundingInfo = (0, qG.h)("Mesh", "thinInstanceRefreshBoundingInfo")), (hG = OG.prototype).getEmittedParticleSystems ?? (hG.getEmittedParticleSystems = (0, qG.h)("Mesh", "getEmittedParticleSystems")), (dG = OG.prototype).getHierarchyEmittedParticleSystems ?? (dG.getHierarchyEmittedParticleSystems = (0, qG.h)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(OG.prototype, "edgesShareWithInstances") || Object.defineProperty(OG.prototype, "edgesShareWithInstances", (0, qG.d)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(OG.prototype, "tbG") || Object.defineProperty(OG.prototype, "tbG", (0, qG.d)("Mesh", "tbG")), Object.getOwnPropertyDescriptor(OG.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(OG.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, qG.d)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(OG.prototype, "B5") || Object.defineProperty(OG.prototype, "B5", (0, qG.d)("Mesh", "B5"))
  },
  40795: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => KG
    });
    var wG = ZG(40393),
      SG = ZG(37439),
      LG = ZG(40524),
      yG = ZG(40258),
      kG = ZG(37621),
      UG = ZG(39093),
      YG = ZG(40398),
      VG = ZG(40792),
      pG = ZG(40438),
      fG = ZG(40673);
    class QG {}
    let KG = (() => {
      var GG;
      let bG, ZG, KG, hG, dG = [];
      return GG = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, VG.f)(this._applyToCoroutine.bind(this)), this.uniqueId = GG._UniqueIdGenerator, GG._UniqueIdGenerator++
        }
        set(GG, bG) {
          switch (GG.length || UG.c.Warn(`Setting vertex data kind '${bG}' with an empty array`), bG) {
            case LG.l.PositionKind:
              this.positions = GG;
              break;
            case LG.l.NormalKind:
              this.normals = GG;
              break;
            case LG.l.TangentKind:
              this.tangents = GG;
              break;
            case LG.l.UVKind:
              this.uvs = GG;
              break;
            case LG.l.UV2Kind:
              this.uvs2 = GG;
              break;
            case LG.l.UV3Kind:
              this.uvs3 = GG;
              break;
            case LG.l.UV4Kind:
              this.uvs4 = GG;
              break;
            case LG.l.UV5Kind:
              this.uvs5 = GG;
              break;
            case LG.l.UV6Kind:
              this.uvs6 = GG;
              break;
            case LG.l.ColorKind:
              this.colors = GG;
              break;
            case LG.l.MatricesIndicesKind:
              this.matricesIndices = GG;
              break;
            case LG.l.MatricesWeightsKind:
              this.matricesWeights = GG;
              break;
            case LG.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = GG;
              break;
            case LG.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = GG
          }
        }
        applyToMesh(GG, bG) {
          return this._applyTo(GG, bG, !1), this
        }
        applyToGeometry(GG, bG) {
          return this._applyTo(GG, bG, !1), this
        }
        updateMesh(GG) {
          return this._update(GG), this
        }
        updateGeometry(GG) {
          return this._update(GG), this
        }* _applyToCoroutine(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (GG.setVerticesData(LG.l.PositionKind, this.positions, bG), ZG && (yield)), this.normals && (GG.setVerticesData(LG.l.NormalKind, this.normals, bG), ZG && (yield)), this.tangents && (GG.setVerticesData(LG.l.TangentKind, this.tangents, bG), ZG && (yield)), this.uvs && (GG.setVerticesData(LG.l.UVKind, this.uvs, bG), ZG && (yield)), this.uvs2 && (GG.setVerticesData(LG.l.UV2Kind, this.uvs2, bG), ZG && (yield)), this.uvs3 && (GG.setVerticesData(LG.l.UV3Kind, this.uvs3, bG), ZG && (yield)), this.uvs4 && (GG.setVerticesData(LG.l.UV4Kind, this.uvs4, bG), ZG && (yield)), this.uvs5 && (GG.setVerticesData(LG.l.UV5Kind, this.uvs5, bG), ZG && (yield)), this.uvs6 && (GG.setVerticesData(LG.l.UV6Kind, this.uvs6, bG), ZG && (yield)), this.colors) {
            const wG = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            GG.setVerticesData(LG.l.ColorKind, this.colors, bG, wG), this.hasVertexAlpha && void 0 !== GG.hasVertexAlpha && (GG.hasVertexAlpha = !0), ZG && (yield)
          }
          if (this.matricesIndices && (GG.setVerticesData(LG.l.MatricesIndicesKind, this.matricesIndices, bG), ZG && (yield)), this.matricesWeights && (GG.setVerticesData(LG.l.MatricesWeightsKind, this.matricesWeights, bG), ZG && (yield)), this.matricesIndicesExtra && (GG.setVerticesData(LG.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, bG), ZG && (yield)), this.matricesWeightsExtra && (GG.setVerticesData(LG.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, bG), ZG && (yield)), this.indices ? (GG.setIndices(this.indices, null, bG), ZG && (yield)) : GG.setIndices([], null), GG.aE && this.materialInfos && this.materialInfos.length > 1) {
            const bG = GG;
            bG.aE = [];
            for (const GG of this.materialInfos) new fG.c(GG.materialIndex, GG.verticesStart, GG.verticesCount, GG.indexStart, GG.indexCount, bG)
          }
          return this
        }
        _update(GG, bG, ZG) {
          return this.positions && GG.updateVerticesData(LG.l.PositionKind, this.positions, bG, ZG), this.normals && GG.updateVerticesData(LG.l.NormalKind, this.normals, bG, ZG), this.tangents && GG.updateVerticesData(LG.l.TangentKind, this.tangents, bG, ZG), this.uvs && GG.updateVerticesData(LG.l.UVKind, this.uvs, bG, ZG), this.uvs2 && GG.updateVerticesData(LG.l.UV2Kind, this.uvs2, bG, ZG), this.uvs3 && GG.updateVerticesData(LG.l.UV3Kind, this.uvs3, bG, ZG), this.uvs4 && GG.updateVerticesData(LG.l.UV4Kind, this.uvs4, bG, ZG), this.uvs5 && GG.updateVerticesData(LG.l.UV5Kind, this.uvs5, bG, ZG), this.uvs6 && GG.updateVerticesData(LG.l.UV6Kind, this.uvs6, bG, ZG), this.colors && GG.updateVerticesData(LG.l.ColorKind, this.colors, bG, ZG), this.matricesIndices && GG.updateVerticesData(LG.l.MatricesIndicesKind, this.matricesIndices, bG, ZG), this.matricesWeights && GG.updateVerticesData(LG.l.MatricesWeightsKind, this.matricesWeights, bG, ZG), this.matricesIndicesExtra && GG.updateVerticesData(LG.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, bG, ZG), this.matricesWeightsExtra && GG.updateVerticesData(LG.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, bG, ZG), this.indices && GG.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.length;
          const LG = SG.j.mK[0],
            yG = SG.j.mK[1];
          for (let kG = ZG; kG < ZG + wG; kG += 3) SG.p.FromArrayToRef(GG, kG, LG), SG.p.TransformCoordinatesToRef(LG, bG, yG), GG[kG] = yG.x, GG[kG + 1] = yG.y, GG[kG + 2] = yG.z
        }
        static _TransformVector3Normals(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.length;
          const LG = SG.j.mK[0],
            yG = SG.j.mK[1];
          for (let kG = ZG; kG < ZG + wG; kG += 3) SG.p.FromArrayToRef(GG, kG, LG), SG.p.TransformNormalToRef(LG, bG, yG), GG[kG] = yG.x, GG[kG + 1] = yG.y, GG[kG + 2] = yG.z
        }
        static _TransformVector4Normals(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.length;
          const LG = SG.j.Vector4[0],
            yG = SG.j.Vector4[1];
          for (let kG = ZG; kG < ZG + wG; kG += 4) SG.t.FromArrayToRef(GG, kG, LG), SG.t.TransformNormalToRef(LG, bG, yG), GG[kG] = yG.x, GG[kG + 1] = yG.y, GG[kG + 2] = yG.z, GG[kG + 3] = yG.w
        }
        static _FlipFaces(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG.length;
          for (let wG = bG; wG < bG + ZG; wG += 3) {
            const bG = GG[wG + 1];
            GG[wG + 1] = GG[wG + 2], GG[wG + 2] = bG
          }
        }
        transform(bG) {
          const ZG = bG.determinant() < 0;
          return this.positions && GG._TransformVector3Coordinates(this.positions, bG), this.normals && GG._TransformVector3Normals(this.normals, bG), this.tangents && GG._TransformVector4Normals(this.tangents, bG), ZG && this.indices && GG._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const bG = [];
          for (const ZG of this.materialInfos) {
            const wG = new GG;
            if (this.positions && (wG.positions = this.positions.slice(3 * ZG.verticesStart, 3 * (ZG.verticesCount + ZG.verticesStart))), this.normals && (wG.normals = this.normals.slice(3 * ZG.verticesStart, 3 * (ZG.verticesCount + ZG.verticesStart))), this.tangents && (wG.tangents = this.tangents.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.colors && (wG.colors = this.colors.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.uvs && (wG.uvs = this.uvs.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.uvs2 && (wG.uvs2 = this.uvs2.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.uvs3 && (wG.uvs3 = this.uvs3.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.uvs4 && (wG.uvs4 = this.uvs4.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.uvs5 && (wG.uvs5 = this.uvs5.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.uvs6 && (wG.uvs6 = this.uvs6.slice(2 * ZG.verticesStart, 2 * (ZG.verticesCount + ZG.verticesStart))), this.matricesIndices && (wG.matricesIndices = this.matricesIndices.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.matricesIndicesExtra && (wG.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.matricesWeights && (wG.matricesWeights = this.matricesWeights.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.matricesWeightsExtra && (wG.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ZG.verticesStart, 4 * (ZG.verticesCount + ZG.verticesStart))), this.indices) {
              wG.indices = [];
              for (let GG = ZG.indexStart; GG < ZG.indexStart + ZG.indexCount; GG++) wG.indices.push(this.indices[GG] - ZG.verticesStart)
            }
            const SG = new QG;
            SG.indexStart = 0, SG.indexCount = wG.indices ? wG.indices.length : 0, SG.materialIndex = ZG.materialIndex, SG.verticesStart = 0, SG.verticesCount = (wG.positions ? wG.positions.length : 0) / 3, wG.materialInfos = [SG], bG.push(wG)
          }
          return bG
        }
        merge(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const LG = Array.isArray(GG) ? GG.map((GG => ({
            vertexData: GG
          }))) : [{
            vertexData: GG
          }];
          return (0, VG.l)(this._mergeCoroutine(void 0, LG, bG, !1, ZG, wG, SG))
        }* _mergeCoroutine(bG, ZG) {
          let wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            SG = arguments.length > 3 ? arguments[3] : void 0,
            yG = arguments.length > 4 ? arguments[4] : void 0,
            kG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            UG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let YG = ZG.map((GG => GG.vertexData)),
            VG = this;
          if (UG)
            for (const GG of YG) GG && (GG._validate(), !this.normals && GG.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && GG.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && GG.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && GG.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && GG.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && GG.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && GG.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && GG.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && GG.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && GG.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && GG.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && GG.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && GG.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const GG of YG)
            if (GG)
              if (UG) this.normals && !GG.normals && (GG.normals = new Float32Array(GG.positions.length)), this.tangents && !GG.tangents && (GG.tangents = new Float32Array(GG.positions.length / 3 * 4)), this.uvs && !GG.uvs && (GG.uvs = new Float32Array(GG.positions.length / 3 * 2)), this.uvs2 && !GG.uvs2 && (GG.uvs2 = new Float32Array(GG.positions.length / 3 * 2)), this.uvs3 && !GG.uvs3 && (GG.uvs3 = new Float32Array(GG.positions.length / 3 * 2)), this.uvs4 && !GG.uvs4 && (GG.uvs4 = new Float32Array(GG.positions.length / 3 * 2)), this.uvs5 && !GG.uvs5 && (GG.uvs5 = new Float32Array(GG.positions.length / 3 * 2)), this.uvs6 && !GG.uvs6 && (GG.uvs6 = new Float32Array(GG.positions.length / 3 * 2)), this.colors && !GG.colors && (GG.colors = new Float32Array(GG.positions.length / 3 * 4), GG.colors.fill(1)), this.matricesIndices && !GG.matricesIndices && (GG.matricesIndices = new Float32Array(GG.positions.length / 3 * 4)), this.matricesWeights && !GG.matricesWeights && (GG.matricesWeights = new Float32Array(GG.positions.length / 3 * 4)), this.matricesIndicesExtra && !GG.matricesIndicesExtra && (GG.matricesIndicesExtra = new Float32Array(GG.positions.length / 3 * 4)), this.matricesWeightsExtra && !GG.matricesWeightsExtra && (GG.matricesWeightsExtra = new Float32Array(GG.positions.length / 3 * 4));
              else if (GG._validate(), !this.normals !== !GG.normals || !this.tangents !== !GG.tangents || !this.uvs !== !GG.uvs || !this.uvs2 !== !GG.uvs2 || !this.uvs3 !== !GG.uvs3 || !this.uvs4 !== !GG.uvs4 || !this.uvs5 !== !GG.uvs5 || !this.uvs6 !== !GG.uvs6 || !this.colors !== !GG.colors || !this.matricesIndices !== !GG.matricesIndices || !this.matricesWeights !== !GG.matricesWeights || !this.matricesIndicesExtra !== !GG.matricesIndicesExtra || !this.matricesWeightsExtra !== !GG.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (kG) {
            let GG, wG = 0,
              SG = 0;
            const LG = [];
            let yG = null;
            const kG = [];
            for (const ZG of this.splitBasedOnMaterialID()) kG.push({
              vertexData: ZG,
              transform: bG
            });
            for (const bG of ZG)
              if (bG.vertexData)
                for (const GG of bG.vertexData.splitBasedOnMaterialID()) kG.push({
                  vertexData: GG,
                  transform: bG.transform
                });
            kG.sort(((GG, bG) => {
              const ZG = GG.vertexData.materialInfos ? GG.vertexData.materialInfos[0].materialIndex : 0,
                wG = bG.vertexData.materialInfos ? bG.vertexData.materialInfos[0].materialIndex : 0;
              return ZG > wG ? 1 : ZG === wG ? 0 : -1
            }));
            for (const bG of kG) {
              const ZG = bG.vertexData;
              if (GG = ZG.materialInfos ? ZG.materialInfos[0].materialIndex : 0, yG && yG.materialIndex === GG) yG.indexCount += ZG.indices.length, yG.verticesCount += ZG.positions.length / 3;
              else {
                const bG = new QG;
                bG.materialIndex = GG, bG.indexStart = wG, bG.indexCount = ZG.indices.length, bG.verticesStart = SG, bG.verticesCount = ZG.positions.length / 3, LG.push(bG), yG = bG
              }
              wG += ZG.indices.length, SG += ZG.positions.length / 3
            }
            const UG = kG.splice(0, 1)[0];
            VG = UG.vertexData, bG = UG.transform, YG = kG.map((GG => GG.vertexData)), ZG = kG, this.materialInfos = LG
          }
          const pG = YG.reduce(((GG, bG) => GG + (bG.indices?.length ?? 0)), VG.indices?.length ?? 0);
          let fG = yG || YG.some((GG => GG.indices === VG.indices)) ? VG.indices?.slice() : VG.indices;
          if (pG > 0) {
            let LG = fG?.length ?? 0;
            if (fG || (fG = new Array(pG)), fG.length !== pG) {
              if (Array.isArray(fG)) fG.length = pG;
              else {
                const GG = wG || fG instanceof Uint32Array ? new Uint32Array(pG) : new Uint16Array(pG);
                GG.set(fG), fG = GG
              }
              bG && bG.determinant() < 0 && GG._FlipFaces(fG, 0, LG)
            }
            let yG = VG.positions ? VG.positions.length / 3 : 0;
            for (const {
                vertexData: bG,
                transform: wG
              }
              of ZG)
              if (bG.indices) {
                for (let GG = 0; GG < bG.indices.length; GG++) fG[LG + GG] = bG.indices[GG] + yG;
                wG && wG.determinant() < 0 && GG._FlipFaces(fG, LG, bG.indices.length), yG += bG.positions.length / 3, LG += bG.indices.length, SG && (yield)
              }
          }
          return this.indices = fG, this.positions = GG._MergeElement(LG.l.PositionKind, VG.positions, bG, ZG.map((GG => [GG.vertexData.positions, GG.transform]))), SG && (yield), VG.normals && (this.normals = GG._MergeElement(LG.l.NormalKind, VG.normals, bG, ZG.map((GG => [GG.vertexData.normals, GG.transform]))), SG && (yield)), VG.tangents && (this.tangents = GG._MergeElement(LG.l.TangentKind, VG.tangents, bG, ZG.map((GG => [GG.vertexData.tangents, GG.transform]))), SG && (yield)), VG.uvs && (this.uvs = GG._MergeElement(LG.l.UVKind, VG.uvs, bG, ZG.map((GG => [GG.vertexData.uvs, GG.transform]))), SG && (yield)), VG.uvs2 && (this.uvs2 = GG._MergeElement(LG.l.UV2Kind, VG.uvs2, bG, ZG.map((GG => [GG.vertexData.uvs2, GG.transform]))), SG && (yield)), VG.uvs3 && (this.uvs3 = GG._MergeElement(LG.l.UV3Kind, VG.uvs3, bG, ZG.map((GG => [GG.vertexData.uvs3, GG.transform]))), SG && (yield)), VG.uvs4 && (this.uvs4 = GG._MergeElement(LG.l.UV4Kind, VG.uvs4, bG, ZG.map((GG => [GG.vertexData.uvs4, GG.transform]))), SG && (yield)), VG.uvs5 && (this.uvs5 = GG._MergeElement(LG.l.UV5Kind, VG.uvs5, bG, ZG.map((GG => [GG.vertexData.uvs5, GG.transform]))), SG && (yield)), VG.uvs6 && (this.uvs6 = GG._MergeElement(LG.l.UV6Kind, VG.uvs6, bG, ZG.map((GG => [GG.vertexData.uvs6, GG.transform]))), SG && (yield)), VG.colors && (this.colors = GG._MergeElement(LG.l.ColorKind, VG.colors, bG, ZG.map((GG => [GG.vertexData.colors, GG.transform]))), (void 0 !== VG.hasVertexAlpha || ZG.some((GG => void 0 !== GG.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = VG.hasVertexAlpha || ZG.some((GG => GG.vertexData.hasVertexAlpha))), SG && (yield)), VG.matricesIndices && (this.matricesIndices = GG._MergeElement(LG.l.MatricesIndicesKind, VG.matricesIndices, bG, ZG.map((GG => [GG.vertexData.matricesIndices, GG.transform]))), SG && (yield)), VG.matricesWeights && (this.matricesWeights = GG._MergeElement(LG.l.MatricesWeightsKind, VG.matricesWeights, bG, ZG.map((GG => [GG.vertexData.matricesWeights, GG.transform]))), SG && (yield)), VG.matricesIndicesExtra && (this.matricesIndicesExtra = GG._MergeElement(LG.l.MatricesIndicesExtraKind, VG.matricesIndicesExtra, bG, ZG.map((GG => [GG.vertexData.matricesIndicesExtra, GG.transform]))), SG && (yield)), VG.matricesWeightsExtra && (this.matricesWeightsExtra = GG._MergeElement(LG.l.MatricesWeightsExtraKind, VG.matricesWeightsExtra, bG, ZG.map((GG => [GG.vertexData.matricesWeightsExtra, GG.transform])))), this
        }
        static _MergeElement(bG, ZG, wG, SG) {
          const yG = SG.filter((GG => null !== GG[0] && void 0 !== GG[0]));
          if (!ZG && 0 == yG.length) return ZG;
          if (!ZG) return this._MergeElement(bG, yG[0][0], yG[0][1], yG.slice(1));
          const kG = yG.reduce(((GG, bG) => GG + bG[0].length), ZG.length),
            UG = bG === LG.l.PositionKind ? GG._TransformVector3Coordinates : bG === LG.l.NormalKind ? GG._TransformVector3Normals : bG === LG.l.TangentKind ? GG._TransformVector4Normals : () => {};
          if (ZG instanceof Float32Array) {
            const GG = new Float32Array(kG);
            GG.set(ZG), wG && UG(GG, wG, 0, ZG.length);
            let bG = ZG.length;
            for (const [ZG, wG] of yG) GG.set(ZG, bG), wG && UG(GG, wG, bG, ZG.length), bG += ZG.length;
            return GG
          } {
            const GG = new Array(kG);
            for (let wG = 0; wG < ZG.length; wG++) GG[wG] = ZG[wG];
            wG && UG(GG, wG, 0, ZG.length);
            let bG = ZG.length;
            for (const [ZG, wG] of yG) {
              for (let wG = 0; wG < ZG.length; wG++) GG[bG + wG] = ZG[wG];
              wG && UG(GG, wG, bG, ZG.length), bG += ZG.length
            }
            return GG
          }
        }
        _validate() {
          if (!this.positions) throw new pG.j("Positions are required", pG.f.MeshInvalidPositionsError);
          const GG = (GG, bG) => {
              const ZG = (0, LG.h)(GG);
              if (bG.length % ZG !== 0) throw new Error("The " + GG + "s array count must be a multiple of " + ZG);
              return bG.length / ZG
            },
            bG = GG(LG.l.PositionKind, this.positions),
            ZG = (ZG, wG) => {
              const SG = GG(ZG, wG);
              if (SG !== bG) throw new Error("The " + ZG + "s element count (" + SG + ") does not match the positions count (" + bG + ")")
            };
          this.normals && ZG(LG.l.NormalKind, this.normals), this.tangents && ZG(LG.l.TangentKind, this.tangents), this.uvs && ZG(LG.l.UVKind, this.uvs), this.uvs2 && ZG(LG.l.UV2Kind, this.uvs2), this.uvs3 && ZG(LG.l.UV3Kind, this.uvs3), this.uvs4 && ZG(LG.l.UV4Kind, this.uvs4), this.uvs5 && ZG(LG.l.UV5Kind, this.uvs5), this.uvs6 && ZG(LG.l.UV6Kind, this.uvs6), this.colors && ZG(LG.l.ColorKind, this.colors), this.matricesIndices && ZG(LG.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ZG(LG.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ZG(LG.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ZG(LG.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const bG = this.serialize();
          return GG.Parse(bG)
        }
        serialize() {
          const GG = {};
          if (this.positions && (GG.positions = Array.from(this.positions)), this.normals && (GG.normals = Array.from(this.normals)), this.tangents && (GG.tangents = Array.from(this.tangents)), this.uvs && (GG.uvs = Array.from(this.uvs)), this.uvs2 && (GG.uvs2 = Array.from(this.uvs2)), this.uvs3 && (GG.uvs3 = Array.from(this.uvs3)), this.uvs4 && (GG.uvs4 = Array.from(this.uvs4)), this.uvs5 && (GG.uvs5 = Array.from(this.uvs5)), this.uvs6 && (GG.uvs6 = Array.from(this.uvs6)), this.colors && (GG.colors = Array.from(this.colors), GG.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (GG.matricesIndices = Array.from(this.matricesIndices), GG.matricesIndicesExpanded = !0), this.matricesWeights && (GG.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (GG.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), GG.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (GG.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), GG.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            GG.materialInfos = [];
            for (const bG of this.materialInfos) {
              const ZG = {
                indexStart: bG.indexStart,
                indexCount: bG.indexCount,
                materialIndex: bG.materialIndex,
                verticesStart: bG.verticesStart,
                verticesCount: bG.verticesCount
              };
              GG.materialInfos.push(ZG)
            }
          }
          return GG
        }
        static ExtractFromMesh(bG, ZG, wG) {
          return GG._ExtractFrom(bG, ZG, wG)
        }
        static ExtractFromGeometry(bG, ZG, wG) {
          return GG._ExtractFrom(bG, ZG, wG)
        }
        static _ExtractFrom(bG, ZG, wG) {
          const SG = new GG;
          if (bG.isVerticesDataPresent(LG.l.PositionKind) && (SG.positions = bG.getVerticesData(LG.l.PositionKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.NormalKind) && (SG.normals = bG.getVerticesData(LG.l.NormalKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.TangentKind) && (SG.tangents = bG.getVerticesData(LG.l.TangentKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UVKind) && (SG.uvs = bG.getVerticesData(LG.l.UVKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UV2Kind) && (SG.uvs2 = bG.getVerticesData(LG.l.UV2Kind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UV3Kind) && (SG.uvs3 = bG.getVerticesData(LG.l.UV3Kind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UV4Kind) && (SG.uvs4 = bG.getVerticesData(LG.l.UV4Kind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UV5Kind) && (SG.uvs5 = bG.getVerticesData(LG.l.UV5Kind, ZG, wG)), bG.isVerticesDataPresent(LG.l.UV6Kind) && (SG.uvs6 = bG.getVerticesData(LG.l.UV6Kind, ZG, wG)), bG.isVerticesDataPresent(LG.l.ColorKind)) {
            const GG = bG.geometry || bG,
              yG = GG.getVertexBuffer(LG.l.ColorKind),
              kG = GG.getVerticesData(LG.l.ColorKind, ZG, wG);
            if (3 === yG.getSize()) {
              const GG = new Float32Array(4 * kG.length / 3);
              for (let bG = 0, ZG = 0; bG < kG.length; bG += 3, ZG += 4) GG[ZG] = kG[bG], GG[ZG + 1] = kG[bG + 1], GG[ZG + 2] = kG[bG + 2], GG[ZG + 3] = 1;
              SG.colors = GG
            } else {
              if (4 !== yG.getSize()) throw new Error(`Unexpected number of color components: ${yG.getSize()}`);
              SG.colors = kG
            }
          }
          return bG.isVerticesDataPresent(LG.l.MatricesIndicesKind) && (SG.matricesIndices = bG.getVerticesData(LG.l.MatricesIndicesKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.MatricesWeightsKind) && (SG.matricesWeights = bG.getVerticesData(LG.l.MatricesWeightsKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.MatricesIndicesExtraKind) && (SG.matricesIndicesExtra = bG.getVerticesData(LG.l.MatricesIndicesExtraKind, ZG, wG)), bG.isVerticesDataPresent(LG.l.MatricesWeightsExtraKind) && (SG.matricesWeightsExtra = bG.getVerticesData(LG.l.MatricesWeightsExtraKind, ZG, wG)), SG.indices = bG.IwG(ZG, wG), SG
        }
        static CreateRibbon(GG) {
          throw (0, yG.i)("ribbonBuilder")
        }
        static CreateBox(GG) {
          throw (0, yG.i)("boxBuilder")
        }
        static CreateTiledBox(GG) {
          throw (0, yG.i)("tiledBoxBuilder")
        }
        static CreateTiledPlane(GG) {
          throw (0, yG.i)("tiledPlaneBuilder")
        }
        static CreateSphere(GG) {
          throw (0, yG.i)("sphereBuilder")
        }
        static CreateCylinder(GG) {
          throw (0, yG.i)("cylinderBuilder")
        }
        static CreateTorus(GG) {
          throw (0, yG.i)("torusBuilder")
        }
        static CreateLineSystem(GG) {
          throw (0, yG.i)("linesBuilder")
        }
        static CreateDashedLines(GG) {
          throw (0, yG.i)("linesBuilder")
        }
        static CreateGround(GG) {
          throw (0, yG.i)("groundBuilder")
        }
        static CreateTiledGround(GG) {
          throw (0, yG.i)("groundBuilder")
        }
        static CreateGroundFromHeightMap(GG) {
          throw (0, yG.i)("groundBuilder")
        }
        static CreatePlane(GG) {
          throw (0, yG.i)("planeBuilder")
        }
        static CreateDisc(GG) {
          throw (0, yG.i)("discBuilder")
        }
        static CreatePolygon(GG, bG, ZG, wG, SG, LG, kG) {
          throw (0, yG.i)("polygonBuilder")
        }
        static CreateIcoSphere(GG) {
          throw (0, yG.i)("icoSphereBuilder")
        }
        static CreatePolyhedron(GG) {
          throw (0, yG.i)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || SG.p.Up();
          throw (0, yG.i)("capsuleBuilder")
        }
        static CreateTorusKnot(GG) {
          throw (0, yG.i)("torusKnotBuilder")
        }
        static ComputeNormals(GG, bG, ZG, wG) {
          let LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG = !1,
            WG = !1,
            mG = !1,
            IG = !1,
            FG = 1,
            vG = 0,
            aG = null;
          wG && (CG = !!wG.facetNormals, WG = !!wG.facetPositions, mG = !!wG.facetPartitioning, FG = !0 === wG.useRightHandedSystem ? -1 : 1, vG = wG.ratio || 0, IG = !!wG.depthSort, aG = wG.distanceTo, IG && void 0 === aG && (aG = SG.p.Zero()));
          let cG = 0,
            lG = 0,
            jG = 0,
            PG = 0;
          for (mG && wG && wG.bbSize && (cG = wG.subDiv.X * vG / wG.bbSize.x, lG = wG.subDiv.Y * vG / wG.bbSize.y, jG = wG.subDiv.Z * vG / wG.bbSize.z, PG = wG.subDiv.max * wG.subDiv.max, wG.facetPartitioning.length = 0), LG = 0; LG < GG.length; LG++) ZG[LG] = 0;
          const MG = bG.length / 3 | 0;
          for (LG = 0; LG < MG; LG++) {
            if (dG = 3 * bG[3 * LG], JG = dG + 1, rG = dG + 2, zG = 3 * bG[3 * LG + 1], EG = zG + 1, oG = zG + 2, XG = 3 * bG[3 * LG + 2], uG = XG + 1, iG = XG + 2, yG = GG[dG] - GG[zG], kG = GG[JG] - GG[EG], UG = GG[rG] - GG[oG], YG = GG[XG] - GG[zG], VG = GG[uG] - GG[EG], pG = GG[iG] - GG[oG], fG = FG * (kG * pG - UG * VG), QG = FG * (UG * YG - yG * pG), KG = FG * (yG * VG - kG * YG), hG = Math.sqrt(fG * fG + QG * QG + KG * KG), hG = 0 === hG ? 1 : hG, fG /= hG, QG /= hG, KG /= hG, CG && wG && (wG.facetNormals[LG].x = fG, wG.facetNormals[LG].y = QG, wG.facetNormals[LG].z = KG), WG && wG && (wG.facetPositions[LG].x = (GG[dG] + GG[zG] + GG[XG]) / 3, wG.facetPositions[LG].y = (GG[JG] + GG[EG] + GG[uG]) / 3, wG.facetPositions[LG].z = (GG[rG] + GG[oG] + GG[iG]) / 3), mG && wG) {
              const bG = Math.floor((wG.facetPositions[LG].x - wG.bInfo.minimum.x * vG) * cG),
                ZG = Math.floor((wG.facetPositions[LG].y - wG.bInfo.minimum.y * vG) * lG),
                SG = Math.floor((wG.facetPositions[LG].z - wG.bInfo.minimum.z * vG) * jG),
                yG = Math.floor((GG[dG] - wG.bInfo.minimum.x * vG) * cG),
                kG = Math.floor((GG[JG] - wG.bInfo.minimum.y * vG) * lG),
                UG = Math.floor((GG[rG] - wG.bInfo.minimum.z * vG) * jG),
                YG = Math.floor((GG[zG] - wG.bInfo.minimum.x * vG) * cG),
                VG = Math.floor((GG[EG] - wG.bInfo.minimum.y * vG) * lG),
                pG = Math.floor((GG[oG] - wG.bInfo.minimum.z * vG) * jG),
                fG = Math.floor((GG[XG] - wG.bInfo.minimum.x * vG) * cG),
                QG = Math.floor((GG[uG] - wG.bInfo.minimum.y * vG) * lG),
                KG = Math.floor((GG[iG] - wG.bInfo.minimum.z * vG) * jG),
                hG = yG + wG.subDiv.max * kG + PG * UG,
                CG = YG + wG.subDiv.max * VG + PG * pG,
                WG = fG + wG.subDiv.max * QG + PG * KG,
                mG = bG + wG.subDiv.max * ZG + PG * SG;
              wG.facetPartitioning[mG] = wG.facetPartitioning[mG] ? wG.facetPartitioning[mG] : [], wG.facetPartitioning[hG] = wG.facetPartitioning[hG] ? wG.facetPartitioning[hG] : [], wG.facetPartitioning[CG] = wG.facetPartitioning[CG] ? wG.facetPartitioning[CG] : [], wG.facetPartitioning[WG] = wG.facetPartitioning[WG] ? wG.facetPartitioning[WG] : [], wG.facetPartitioning[hG].push(LG), CG != hG && wG.facetPartitioning[CG].push(LG), WG != CG && WG != hG && wG.facetPartitioning[WG].push(LG), mG != hG && mG != CG && mG != WG && wG.facetPartitioning[mG].push(LG)
            }
            if (IG && wG && wG.facetPositions) {
              const GG = wG.depthSortedFacets[LG];
              GG.ind = 3 * LG, GG.sqDistance = SG.p.DistanceSquared(wG.facetPositions[LG], aG)
            }
            ZG[dG] += fG, ZG[JG] += QG, ZG[rG] += KG, ZG[zG] += fG, ZG[EG] += QG, ZG[oG] += KG, ZG[XG] += fG, ZG[uG] += QG, ZG[iG] += KG
          }
          for (LG = 0; LG < ZG.length / 3; LG++) fG = ZG[3 * LG], QG = ZG[3 * LG + 1], KG = ZG[3 * LG + 2], hG = Math.sqrt(fG * fG + QG * QG + KG * KG), hG = 0 === hG ? 1 : hG, fG /= hG, QG /= hG, KG /= hG, ZG[3 * LG] = fG, ZG[3 * LG + 1] = QG, ZG[3 * LG + 2] = KG
        }
        static _ComputeSides(bG, ZG, wG, LG, yG, kG, UG) {
          const YG = wG.length,
            VG = LG.length;
          let pG, fG;
          switch (bG = bG || GG.DEFAULTSIDE) {
            case GG.FRONTSIDE:
              break;
            case GG.BACKSIDE:
              for (pG = 0; pG < YG; pG += 3) {
                const GG = wG[pG];
                wG[pG] = wG[pG + 2], wG[pG + 2] = GG
              }
              for (fG = 0; fG < VG; fG++) LG[fG] = -LG[fG];
              break;
            case GG.DOUBLESIDE: {
              const GG = ZG.length,
                bG = GG / 3;
              for (let wG = 0; wG < GG; wG++) ZG[GG + wG] = ZG[wG];
              for (pG = 0; pG < YG; pG += 3) wG[pG + YG] = wG[pG + 2] + bG, wG[pG + 1 + YG] = wG[pG + 1] + bG, wG[pG + 2 + YG] = wG[pG] + bG;
              for (fG = 0; fG < VG; fG++) LG[VG + fG] = -LG[fG];
              const QG = yG.length;
              let KG;
              for (KG = 0; KG < QG; KG++) yG[KG + QG] = yG[KG];
              for (kG = kG || new SG.t(0, 0, 1, 1), UG = UG || new SG.t(0, 0, 1, 1), KG = 0, pG = 0; pG < QG / 2; pG++) yG[KG] = kG.x + (kG.z - kG.x) * yG[KG], yG[KG + 1] = kG.y + (kG.w - kG.y) * yG[KG + 1], yG[KG + QG] = UG.x + (UG.z - UG.x) * yG[KG + QG], yG[KG + QG + 1] = UG.y + (UG.w - UG.y) * yG[KG + QG + 1], KG += 2;
              break
            }
          }
        }
        static Parse(bG) {
          const ZG = new GG,
            wG = bG.positions;
          wG && ZG.set(wG, LG.l.PositionKind);
          const SG = bG.normals;
          SG && ZG.set(SG, LG.l.NormalKind);
          const yG = bG.tangents;
          yG && ZG.set(yG, LG.l.TangentKind);
          const UG = bG.uvs;
          UG && ZG.set(UG, LG.l.UVKind);
          const YG = bG.uvs2;
          YG && ZG.set(YG, LG.l.UV2Kind);
          const VG = bG.uvs3;
          VG && ZG.set(VG, LG.l.UV3Kind);
          const pG = bG.uvs4;
          pG && ZG.set(pG, LG.l.UV4Kind);
          const fG = bG.uvs5;
          fG && ZG.set(fG, LG.l.UV5Kind);
          const KG = bG.uvs6;
          KG && ZG.set(KG, LG.l.UV6Kind);
          const hG = bG.colors;
          hG && (ZG.set(kG.d.CheckColors4(hG, wG.length / 3), LG.l.ColorKind), void 0 !== bG.hasVertexAlpha && (ZG.hasVertexAlpha = bG.hasVertexAlpha));
          const dG = bG.matricesIndices;
          dG && ZG.set(dG, LG.l.MatricesIndicesKind);
          const JG = bG.matricesWeights;
          JG && ZG.set(JG, LG.l.MatricesWeightsKind);
          const rG = bG.indices;
          rG && (ZG.indices = rG);
          const zG = bG.materialInfos;
          if (zG) {
            ZG.materialInfos = [];
            for (const GG of zG) {
              const bG = new QG;
              bG.indexCount = GG.indexCount, bG.indexStart = GG.indexStart, bG.verticesCount = GG.verticesCount, bG.verticesStart = GG.verticesStart, bG.materialIndex = GG.materialIndex, ZG.materialInfos.push(bG)
            }
          }
          return ZG
        }
        static ImportVertexData(bG, ZG) {
          const wG = GG.Parse(bG);
          ZG.setAllVerticesData(wG, bG.updatable)
        }
      }, (() => {
        const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [YG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZG = [YG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], KG = [YG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], hG = [YG.g.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, wG.k)(GG, null, bG, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: GG => "_TransformVector3Coordinates" in GG,
            get: GG => GG._TransformVector3Coordinates
          },
          metadata: SG
        }, null, dG), (0, wG.k)(GG, null, ZG, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: GG => "_TransformVector3Normals" in GG,
            get: GG => GG._TransformVector3Normals
          },
          metadata: SG
        }, null, dG), (0, wG.k)(GG, null, KG, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: GG => "_TransformVector4Normals" in GG,
            get: GG => GG._TransformVector4Normals
          },
          metadata: SG
        }, null, dG), (0, wG.k)(GG, null, hG, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: GG => "_FlipFaces" in GG,
            get: GG => GG._FlipFaces
          },
          metadata: SG
        }, null, dG), SG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SG
        })
      })(), GG.FRONTSIDE = ((0, wG.n)(GG, dG), 0), GG.BACKSIDE = 1, GG.DOUBLESIDE = 2, GG.DEFAULTSIDE = 0, GG._UniqueIdGenerator = 0, GG
    })()
  },
  40865: (GG, bG, ZG) => {
    var wG = ZG(37439),
      SG = ZG(39093),
      LG = ZG(40681),
      yG = ZG(40784),
      kG = ZG(40524);
    const UG = "bakedVertexAnimationSettingsInstanced";

    function YG(GG) {
      const bG = GG.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return bG instanceof Float32Array || bG instanceof Uint16Array
    }

    function VG(GG, bG, ZG, wG) {
      ZG.N7(Number.POSITIVE_INFINITY), wG.N7(Number.NEGATIVE_INFINITY);
      for (let SG = 0; SG < 3 * bG; SG += 3) {
        const bG = GG[SG],
          LG = GG[SG + 1],
          yG = GG[SG + 2];
        bG < ZG.x && (ZG.x = bG), LG < ZG.y && (ZG.y = LG), yG < ZG.z && (ZG.z = yG), bG > wG.x && (wG.x = bG), LG > wG.y && (wG.y = LG), yG > wG.z && (wG.z = yG)
      }
    }

    function pG(GG, bG, ZG) {
      ZG && (GG.x -= GG.x * ZG.x + ZG.y, GG.y -= GG.y * ZG.x + ZG.y, GG.z -= GG.z * ZG.x + ZG.y, bG.x += bG.x * ZG.x + ZG.y, bG.y += bG.y * ZG.x + ZG.y, bG.z += bG.z * ZG.x + ZG.y)
    }

    function fG(GG, bG, ZG, SG, LG) {
      const yG = wG.j.mK[7],
        kG = wG.j.mK[8];
      for (let UG = 0; UG < 2; ++UG)
        for (let YG = 0; YG < 2; ++YG)
          for (let VG = 0; VG < 2; ++VG) yG.set(UG ? bG.x : GG.x, YG ? bG.y : GG.y, VG ? bG.z : GG.z), wG.p.TransformCoordinatesToRef(yG, ZG, kG), SG.minimizeInPlace(kG), LG.maximizeInPlace(kG)
    }

    function QG(GG, bG, ZG, SG, LG) {
      const yG = wG.j.mK[7];
      for (let kG = 0; kG < 3 * bG; kG += 3) wG.p.TransformCoordinatesFromFloatsToRef(GG[kG], GG[kG + 1], GG[kG + 2], ZG, yG), SG.minimizeInPlace(yG), LG.maximizeInPlace(yG)
    }
    let KG = !1;
    KG || (KG = !0, yG.c.prototype.thinInstanceAdd = function(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.Dv().CK().getCaps().instancedArrays) return SG.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(GG) ? GG.length : 1);
      const ZG = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(GG))
        for (let wG = 0; wG < GG.length; ++wG) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, GG[wG], wG === GG.length - 1 && bG);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, GG, bG);
      return ZG
    }, yG.c.prototype.thinInstanceAddSelf = function() {
      let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(wG.e.IdentityReadOnly, GG)
    }, yG.c.prototype.thinInstanceRegisterAttribute = function(GG, bG) {
      GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this.removeVerticesData(GG), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[GG] = bG, this._userThinInstanceBuffersStorage.sizes[GG] = bG * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[GG] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[GG]), this._userThinInstanceBuffersStorage.vertexBuffers[GG] = new kG.l(this.CK(), this._userThinInstanceBuffersStorage.data[GG], GG, !0, !1, bG, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[GG])
    }, yG.c.prototype.thinInstanceSetMatrixAt = function(GG, bG) {
      let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || GG >= this._thinInstanceDataStorage.instancesCount) return !1;
      const wG = this._thinInstanceDataStorage.matrixData;
      return bG.copyToArray(wG, 16 * GG), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[GG] = bG), ZG && (this.bGG("matrix"), this.FK || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, yG.c.prototype.thinInstanceSetAttributeAt = function(GG, bG, ZG) {
      let wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[GG] || bG >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(GG, 0), this._userThinInstanceBuffersStorage.data[GG].set(ZG, bG * this._userThinInstanceBuffersStorage.strides[GG]), wG && this.bGG(GG), !0)
    }, Object.defineProperty(yG.c.prototype, "B5", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(GG) {
        const bG = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        GG <= (bG ? bG.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = GG)
      },
      enumerable: !0,
      configurable: !0
    }), yG.c.prototype._thinInstanceCreateMatrixBuffer = function(GG, bG) {
      let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const wG = new kG.c(this.CK(), bG, !ZG, 16, !1, !0);
      for (let SG = 0; SG < 4; SG++) this.setVerticesBuffer(wG.createVertexBuffer(GG + SG, 4 * SG, 4));
      return wG
    }, yG.c.prototype.yGG = function(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ZG = ZG || 16, "matrix" === GG) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = bG ? bG.length : 32 * ZG, this._thinInstanceDataStorage.matrixData = bG, this._thinInstanceDataStorage.worldMatrices = null, null !== bG ? (this._thinInstanceDataStorage.instancesCount = bG.length / ZG, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", bG, wG), this.FK || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.FK || this.refreshBoundingInfo());
      else if ("previousMatrix" === GG) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = bG, null !== bG && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", bG, wG));
      else if ("splatIndex" === GG && bG) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = bG.length / ZG, this._userThinInstanceBuffersStorage.data[GG] = bG, this._userThinInstanceBuffersStorage.strides[GG] = ZG, this._userThinInstanceBuffersStorage.sizes[GG] = bG.length;
        const wG = new kG.c(this.CK(), bG, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = wG;
        for (let bG = 0; bG < 4; bG++) this.setVerticesBuffer(wG.createVertexBuffer(GG + bG, 4 * bG, 4))
      } else GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), null === bG ? this._userThinInstanceBuffersStorage?.data[GG] && (this.removeVerticesData(GG), delete this._userThinInstanceBuffersStorage.data[GG], delete this._userThinInstanceBuffersStorage.strides[GG], delete this._userThinInstanceBuffersStorage.sizes[GG], delete this._userThinInstanceBuffersStorage.vertexBuffers[GG]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[GG] = bG, this._userThinInstanceBuffersStorage.strides[GG] = ZG, this._userThinInstanceBuffersStorage.sizes[GG] = bG.length, this._userThinInstanceBuffersStorage.vertexBuffers[GG] = new kG.l(this.CK(), bG, GG, !wG, !1, ZG, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[GG]))
    }, yG.c.prototype.bGG = function(GG) {
      "matrix" === GG ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(GG), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === GG ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(GG), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === GG ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[GG], 0, this._thinInstanceDataStorage.instancesCount) : (GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[GG] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[GG].isUpdatable() && this._thinInstanceRecreateBuffer(GG), this._userThinInstanceBuffersStorage.vertexBuffers[GG].updateDirectly(this._userThinInstanceBuffersStorage.data[GG], 0)))
    }, yG.c.prototype.thinInstancePartialBufferUpdate = function(GG, bG, ZG) {
      if ("matrix" === GG) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof bG ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ZG * Float32Array.BYTES_PER_ELEMENT, 16 * bG), 16 * ZG) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(bG, ZG));
      else if (GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[GG]) {
        const wG = this._userThinInstanceBuffersStorage.vertexBuffers[GG];
        if ("number" === typeof bG) {
          const wG = new Float32Array(this._userThinInstanceBuffersStorage.data[GG].buffer, this._userThinInstanceBuffersStorage.data[GG].byteOffset + ZG * this._userThinInstanceBuffersStorage.strides[GG] * Float32Array.BYTES_PER_ELEMENT, bG * this._userThinInstanceBuffersStorage.strides[GG]);
          this._userThinInstanceBuffersStorage.vertexBuffers[GG].updateDirectly(wG, ZG * this._userThinInstanceBuffersStorage.strides[GG])
        } else wG.updateDirectly(bG, ZG)
      }
    }, yG.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const GG = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let bG = 0; bG < this._thinInstanceDataStorage.instancesCount; ++bG) this._thinInstanceDataStorage.worldMatrices[bG] = wG.e.FromArray(GG, 16 * bG)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, yG.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const yG = this._thinInstanceDataStorage.boundingVectors;
      if (GG || !this.rawBoundingInfo) {
        if (yG.length = 0, SG && function(GG, bG, ZG) {
            const SG = GG._userThinInstanceBuffersStorage,
              yG = SG?.data[UG],
              KG = SG?.strides[UG];
            if (!yG || !KG || KG < 4 || !YG(GG)) return !1;
            const hG = GG._thinInstanceDataStorage.matrixData;
            if (!hG) return !1;
            const dG = {},
              JG = wG.j.Vector4[0],
              rG = wG.j.mK[1],
              zG = wG.j.mK[2],
              EG = wG.j.mK[3],
              oG = wG.j.mK[4],
              XG = wG.j.mK[5],
              uG = wG.j.mK[6],
              iG = wG.j.Matrix[2],
              CG = GG.geometry ? GG.geometry.boundingBias : null,
              WG = GG.getTotalVertices();
            rG.N7(Number.POSITIVE_INFINITY), zG.N7(Number.NEGATIVE_INFINITY), EG.N7(Number.POSITIVE_INFINITY), oG.N7(Number.NEGATIVE_INFINITY);
            for (let LG = 0; LG < GG._thinInstanceDataStorage.instancesCount; ++LG) {
              const bG = LG * KG;
              JG.set(yG[bG], yG[bG + 1], yG[bG + 2], yG[bG + 3]);
              const SG = GG._getData({
                applyMorph: ZG,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: JG,
                updatePositionsArray: !1,
                cache: dG
              }, null, kG.l.PositionKind);
              if (!SG) return !1;
              VG(SG, WG, XG, uG), pG(XG, uG, CG), rG.minimizeInPlace(XG), zG.maximizeInPlace(uG), wG.e.FromArrayToRef(hG, 16 * LG, iG), CG ? fG(XG, uG, iG, EG, oG) : QG(SG, WG, iG, EG, oG)
            }
            return !(!isFinite(rG.x) || !isFinite(EG.x)) && (GG.HA().reConstruct(EG, oG), GG.rawBoundingInfo = new LG.c(rG, zG), function(GG, bG) {
              GG.length = 0;
              for (let ZG = 0; ZG < bG.boundingBox.vectors.length; ++ZG) GG.push(bG.boundingBox.vectors[ZG].clone())
            }(bG, GG.rawBoundingInfo), GG._updateBoundingInfo(), !0)
          }(this, yG, ZG)) return;
        SG && this.bakedVertexAnimationManager?.isEnabled && YG(this) ? this.refreshBoundingInfo({
          applySkeleton: bG,
          applyMorph: ZG,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(bG, ZG);
        const GG = this.HA();
        this.rawBoundingInfo = new LG.c(GG.minimum, GG.maximum)
      }
      const KG = this.HA(),
        hG = this._thinInstanceDataStorage.matrixData;
      if (0 === yG.length)
        for (let wG = 0; wG < KG.boundingBox.vectors.length; ++wG) yG.push(KG.boundingBox.vectors[wG].clone());
      wG.j.mK[0].N7(Number.POSITIVE_INFINITY), wG.j.mK[1].N7(Number.NEGATIVE_INFINITY);
      for (let LG = 0; LG < this._thinInstanceDataStorage.instancesCount; ++LG) {
        wG.e.FromArrayToRef(hG, 16 * LG, wG.j.Matrix[0]);
        for (let GG = 0; GG < yG.length; ++GG) wG.p.TransformCoordinatesToRef(yG[GG], wG.j.Matrix[0], wG.j.mK[2]), wG.j.mK[0].minimizeInPlace(wG.j.mK[2]), wG.j.mK[1].maximizeInPlace(wG.j.mK[2])
      }
      KG.reConstruct(wG.j.mK[0], wG.j.mK[1]), this._updateBoundingInfo()
    }, yG.c.prototype._thinInstanceRecreateBuffer = function(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === GG ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, bG)) : "previousMatrix" === GG ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, bG)) : (GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[GG]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[GG] = new kG.l(this.CK(), this._userThinInstanceBuffersStorage.data[GG], GG, !bG, !1, this._userThinInstanceBuffersStorage.strides[GG], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[GG]))
    }, yG.c.prototype._thinInstanceUpdateBufferSize = function(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      GG === kG.l.ColorKind && (GG = kG.l.ColorInstanceKind);
      const ZG = "matrix" === GG;
      if (!ZG && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[GG])) return;
      const wG = ZG ? 16 : this._userThinInstanceBuffersStorage.strides[GG],
        SG = ZG ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[GG];
      let LG = ZG ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[GG];
      const yG = (this._thinInstanceDataStorage.instancesCount + bG) * wG;
      let UG = SG;
      for (; UG < yG;) UG *= 2;
      if (!LG || SG != UG) {
        if (LG) {
          const GG = new Float32Array(UG);
          GG.set(LG, 0), LG = GG
        } else LG = new Float32Array(UG);
        ZG ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", LG, !1), this._thinInstanceDataStorage.matrixData = LG, this._thinInstanceDataStorage.matrixBufferSize = UG, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", LG, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[GG]?.dispose(), this._userThinInstanceBuffersStorage.data[GG] = LG, this._userThinInstanceBuffersStorage.sizes[GG] = UG, this._userThinInstanceBuffersStorage.vertexBuffers[GG] = new kG.l(this.CK(), LG, GG, !0, !1, wG, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[GG]))
      }
    }, yG.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, yG.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40820: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => rG,
      d: () => hG
    });
    var wG, SG, LG, yG, kG = ZG(40393),
      UG = ZG(40398),
      YG = ZG(40416),
      VG = ZG(37465),
      pG = ZG(37439),
      fG = ZG(40599),
      QG = ZG(37484),
      KG = ZG(40258);
    let hG = (() => {
      var GG;
      let bG, ZG, wG, SG, LG, yG, QG, KG, hG, dG = fG.e,
        JG = [],
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        CG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [];
      return GG = class extends dG {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(bG) {
          this._billboardMode !== bG && (this._billboardMode = bG, this._cache.useBillboardPosition = 0 !== (this._billboardMode & GG.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(GG) {
          this._infiniteDistance !== GG && (this._infiniteDistance = GG)
        }
        constructor(bG) {
          let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(bG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new pG.p(0, 0, 1), this._up = new pG.p(0, 1, 0), this._right = new pG.p(1, 0, 0), this._position = (0, kG.n)(this, JG, pG.p.Zero()), this._rotation = ((0, kG.n)(this, rG), (0, kG.n)(this, zG, pG.p.Zero())), this._rotationQuaternion = ((0, kG.n)(this, EG), (0, kG.n)(this, oG, null)), this._scaling = ((0, kG.n)(this, XG), (0, kG.n)(this, uG, pG.p.One())), this._transformToBoneReferal = ((0, kG.n)(this, iG), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, kG.n)(this, CG, GG.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, kG.n)(this, WG), (0, kG.n)(this, mG, 1)), this._infiniteDistance = ((0, kG.n)(this, IG), (0, kG.n)(this, FG, !1)), this.ignoreNonUniformScaling = ((0, kG.n)(this, vG), (0, kG.n)(this, aG, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, kG.n)(this, cG), (0, kG.n)(this, lG, !1)), this._poseMatrix = ((0, kG.n)(this, jG), null), this._localMatrix = pG.e.Zero(), this._usePivotMatrix = !1, this._absolutePosition = pG.p.Zero(), this._absoluteScaling = pG.p.Zero(), this._absoluteRotationQuaternion = pG.g.Identity(), this._pivotMatrix = pG.e.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new VG.c, this._nonUniformScaling = !1, ZG && this.Dv().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(GG) {
          this._position = GG, this._markAsDirtyInternal()
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
        set rotation(GG) {
          this._rotation = GG, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get nY() {
          return this._scaling
        }
        set nY(GG) {
          this._scaling = GG, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(GG) {
          this._rotationQuaternion = GG, GG && this._rotation.N7(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return pG.p.TransformNormalFromFloatsToRef(0, 0, this.Dv().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return pG.p.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return pG.p.TransformNormalFromFloatsToRef(this.Dv().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(GG) {
          return this._poseMatrix ? (this._poseMatrix.oW(GG), this) : (this._poseMatrix = GG.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = pG.e.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const bG = this._cache;
          return this._billboardMode === bG.billboardMode && this._billboardMode === GG.BILLBOARDMODE_NONE && (!bG.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const GG = this._cache;
          GG.localMatrixUpdated = !1, GG.billboardMode = -1, GG.infiniteDistance = !1, GG.useBillboardPosition = !1
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
        setPreTransformMatrix(GG) {
          return this.setPivotMatrix(GG, !1)
        }
        setPivotMatrix(GG) {
          let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.oW(GG), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = bG, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = pG.e.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            bG = arguments.length > 1 ? arguments[1] : void 0,
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          const wG = this.clone("Clone of " + (this.name || this.id), GG || this.parent, !0);
          wG && ZG && ZG(this, wG);
          for (const SG of this.getChildTransformNodes(!0)) SG.instantiateHierarchy(wG, bG, ZG);
          return wG
        }
        Kl() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return GG ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.N7(0), this._rotationQuaternion = this._rotationQuaternion || pG.g.Identity(), GG.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = GG, this._absolutePosition.fGG(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get LkG() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(GG) {
          if (!GG) return this;
          let bG, ZG, wG;
          if (void 0 === GG.x) {
            if (arguments.length < 3) return this;
            bG = arguments[0], ZG = arguments[1], wG = arguments[2]
          } else bG = GG.x, ZG = GG.y, wG = GG.z;
          if (this.parent) {
            const GG = pG.j.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(GG), pG.p.TransformCoordinatesFromFloatsToRef(bG, ZG, wG, GG, this.position)
          } else this.position.x = bG, this.position.y = ZG, this.position.z = wG;
          return this._absolutePosition.oW(GG), this
        }
        setPositionWithLocalVector(GG) {
          return this.computeWorldMatrix(), this.position = pG.p.TransformNormal(GG, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const GG = pG.j.Matrix[0];
          return this._localMatrix.invertToRef(GG), pG.p.TransformNormal(this.position, GG)
        }
        locallyTranslate(GG) {
          return this.computeWorldMatrix(!0), this.position = pG.p.TransformCoordinates(GG, this._localMatrix), this
        }
        lookAt(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const yG = GG._LookAtVectorCache,
            kG = 0 === LG ? this.position : this.getAbsolutePosition();
          if (bG.subtractToRef(kG, yG), this.setDirection(yG, ZG, wG, SG), 1 === LG && this.parent)
            if (this.rotationQuaternion) {
              const GG = pG.j.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(GG);
              const bG = pG.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(bG), bG.invert(), GG.multiplyToRef(bG, GG), this.rotationQuaternion.fromRotationMatrix(GG)
            } else {
              const GG = pG.j.Quaternion[0];
              pG.g.FromEulerVectorToRef(this.rotation, GG);
              const bG = pG.j.Matrix[0];
              GG.toRotationMatrix(bG);
              const ZG = pG.j.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ZG), ZG.invert(), bG.multiplyToRef(ZG, bG), GG.fromRotationMatrix(bG), GG.toEulerAnglesToRef(this.rotation)
            } return this
        }
        zB(GG) {
          const bG = pG.p.Zero();
          return this.getDirectionToRef(GG, bG), bG
        }
        getDirectionToRef(GG, bG) {
          return pG.p.TransformNormalToRef(GG, this.getWorldMatrix(), bG), this
        }
        setDirection(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const SG = -Math.atan2(GG.z, GG.x) + Math.PI / 2,
            LG = Math.sqrt(GG.x * GG.x + GG.z * GG.z),
            yG = -Math.atan2(GG.y, LG);
          return this.rotationQuaternion ? pG.g.RotationYawPitchRollToRef(SG + bG, yG + ZG, wG, this.rotationQuaternion) : (this.rotation.x = yG + ZG, this.rotation.y = SG + bG, this.rotation.z = wG), this
        }
        setPivotPoint(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.Dv().getRenderId() && this.computeWorldMatrix(!0);
          const ZG = this.getWorldMatrix();
          if (1 == bG) {
            const bG = pG.j.Matrix[0];
            ZG.invertToRef(bG), GG = pG.p.TransformCoordinates(GG, bG)
          }
          return this.setPivotMatrix(pG.e.Translation(-GG.x, -GG.y, -GG.z), !0)
        }
        getPivotPoint() {
          const GG = pG.p.Zero();
          return this.getPivotPointToRef(GG), GG
        }
        getPivotPointToRef(GG) {
          return GG.x = -this._pivotMatrix.m[12], GG.y = -this._pivotMatrix.m[13], GG.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const GG = pG.p.Zero();
          return this.getAbsolutePivotPointToRef(GG), GG
        }
        getAbsolutePivotPointToRef(GG) {
          return this.getPivotPointToRef(GG), pG.p.TransformCoordinatesToRef(GG, this.getWorldMatrix(), GG), this
        }
        wZG(GG) {
          if (this._isDirty) return this;
          if (this._children)
            for (const bG of this._children) bG.wZG(GG);
          return super.wZG(GG)
        }
        setParent(bG) {
          let ZG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!bG && !this.parent) return this;
          const SG = pG.j.Quaternion[0],
            LG = pG.j.mK[0],
            yG = pG.j.mK[1],
            kG = pG.j.Matrix[1];
          pG.e.IdentityToRef(kG);
          const UG = pG.j.Matrix[0];
          this.computeWorldMatrix(!0);
          let YG = this.rotationQuaternion;
          return YG || (YG = GG._TmpRotation, pG.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, YG)), pG.e.ComposeToRef(this.nY, YG, this.position, UG), this.parent && UG.multiplyToRef(this.parent.computeWorldMatrix(!0), UG), bG && (bG.computeWorldMatrix(!0).invertToRef(kG), UG.multiplyToRef(kG, UG)), UG.decompose(yG, SG, LG, ZG ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.oW(SG) : SG.toEulerAnglesToRef(this.rotation), this.nY.oW(yG), this.position.oW(LG), this.parent = bG, wG && this.setPivotMatrix(pG.e.Identity()), this
        }
        addChild(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return GG.setParent(this, bG), this
        }
        removeChild(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return GG.parent !== this || GG.setParent(null, bG), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(GG) {
          return this._nonUniformScaling !== GG && (this._nonUniformScaling = GG, !0)
        }
        attachToBone(GG, bG) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = bG, this.parent = GG, GG.getSkeleton().prepare(!0), GG.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = GG ? this._currentParentWhenAttachingToBone : null, this) : (GG && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(bG, ZG, wG) {
          let SG;
          if (bG.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.N7(0)), wG && 0 !== wG) {
            if (this.parent) {
              const GG = this.parent.getWorldMatrix(),
                wG = pG.j.Matrix[0];
              GG.invertToRef(wG), bG = pG.p.TransformNormal(bG, wG), GG.determinant() < 0 && (ZG *= -1)
            }
            SG = pG.g.RotationAxisToRef(bG, ZG, GG._RotationAxisCache), SG.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else SG = pG.g.RotationAxisToRef(bG, ZG, GG._RotationAxisCache), this.rotationQuaternion.multiplyToRef(SG, this.rotationQuaternion);
          return this
        }
        rotateAround(GG, bG, ZG) {
          bG.normalize(), this.rotationQuaternion || (this.rotationQuaternion = pG.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.N7(0));
          const wG = pG.j.mK[0],
            SG = pG.j.mK[1],
            LG = pG.j.mK[2],
            yG = pG.j.Quaternion[0],
            kG = pG.j.Matrix[0],
            UG = pG.j.Matrix[1],
            YG = pG.j.Matrix[2],
            VG = pG.j.Matrix[3];
          return GG.subtractToRef(this.position, wG), pG.e.TranslationToRef(wG.x, wG.y, wG.z, kG), pG.e.TranslationToRef(-wG.x, -wG.y, -wG.z, UG), pG.e.RotationAxisToRef(bG, ZG, YG), UG.multiplyToRef(YG, VG), VG.multiplyToRef(kG, VG), VG.decompose(SG, yG, LG), this.position.addInPlace(LG), yG.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(GG, bG, ZG) {
          const wG = GG.scale(bG);
          if (ZG && 0 !== ZG) this.setAbsolutePosition(this.getAbsolutePosition().add(wG));
          else {
            const GG = this.getPositionExpressedInLocalSpace().add(wG);
            this.setPositionWithLocalVector(GG)
          }
          return this
        }
        addRotation(GG, bG, ZG) {
          let wG;
          this.rotationQuaternion ? wG = this.rotationQuaternion : (wG = pG.j.Quaternion[1], pG.g.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, wG));
          const SG = pG.j.Quaternion[0];
          return pG.g.RotationYawPitchRollToRef(bG, GG, ZG, SG), wG.multiplyInPlace(SG), this.rotationQuaternion || wG.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== GG.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let bG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const wG = this.Dv().getRenderId();
          if (!this._isDirty && !bG && (this._currentRenderId === wG || this.isSynchronized())) return this._currentRenderId = wG, this._worldMatrix;
          ZG = ZG || this.Dv().activeCamera, this._updateCache();
          const SG = this._cache;
          SG.pivotMatrixUpdated = !1, SG.billboardMode = this.billboardMode, SG.infiniteDistance = this.infiniteDistance, SG.parent = this._parentNode, this._currentRenderId = wG, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const LG = this._getEffectiveParent(),
            yG = GG._TmpScaling;
          let kG, UG = this._position;
          if (this._infiniteDistance && !this.parent && ZG) {
            const bG = ZG.getWorldMatrix().m;
            UG = GG._TmpTranslation, UG.fGG(this._position.x + bG[12], this._position.y + bG[13], this._position.z + bG[14])
          }
          if (yG.fGG(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, kG = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(pG.g.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.fGG(0, 0, 0))
            }
          } else kG = GG._TmpRotation, pG.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, kG);
          if (this._usePivotMatrix) {
            const GG = pG.j.Matrix[1];
            pG.e.ScalingToRef(yG.x, yG.y, yG.z, GG);
            const bG = pG.j.Matrix[0];
            kG.toRotationMatrix(bG), this._pivotMatrix.multiplyToRef(GG, pG.j.Matrix[4]), pG.j.Matrix[4].multiplyToRef(bG, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(UG.x, UG.y, UG.z)
          } else pG.e.ComposeToRef(yG, kG, UG, this._localMatrix);
          if (LG && LG.getWorldMatrix) {
            if (bG && LG.computeWorldMatrix(bG), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const GG = this.parent;
                GG.getSkeleton().prepare(), GG.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), pG.j.Matrix[7])
              } else pG.j.Matrix[7].oW(LG.getWorldMatrix());
              const bG = pG.j.mK[5],
                ZG = pG.j.mK[6],
                wG = pG.j.Quaternion[0];
              pG.j.Matrix[7].decompose(ZG, wG, bG), pG.e.ScalingToRef(ZG.x, ZG.y, ZG.z, pG.j.Matrix[7]), pG.j.Matrix[7].setTranslation(bG), GG.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(wG, bG), this._localMatrix.setTranslation(bG)), this._localMatrix.multiplyToRef(pG.j.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const GG = this.parent;
              GG.getSkeleton().prepare(), this._localMatrix.multiplyToRef(GG.getFinalMatrix(), pG.j.Matrix[6]), pG.j.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(LG.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.oW(this._localMatrix);
          if (ZG && this.billboardMode)
            if (SG.useBillboardPosition) {
              const bG = pG.j.mK[0];
              this._worldMatrix.getTranslationToRef(bG);
              const wG = ZG.globalPosition;
              this._worldMatrix.invertToRef(pG.j.Matrix[1]);
              const SG = pG.j.mK[1];
              pG.p.TransformCoordinatesToRef(wG, pG.j.Matrix[1], SG), SG.normalize();
              const LG = -Math.atan2(SG.z, SG.x) + Math.PI / 2,
                yG = Math.sqrt(SG.x * SG.x + SG.z * SG.z),
                kG = -Math.atan2(SG.y, yG);
              if (pG.g.RotationYawPitchRollToRef(LG, kG, 0, pG.j.Quaternion[0]), (this.billboardMode & GG.BILLBOARDMODE_ALL) !== GG.BILLBOARDMODE_ALL) {
                const bG = pG.j.mK[1];
                pG.j.Quaternion[0].toEulerAnglesToRef(bG), (this.billboardMode & GG.BILLBOARDMODE_X) !== GG.BILLBOARDMODE_X && (bG.x = 0), (this.billboardMode & GG.BILLBOARDMODE_Y) !== GG.BILLBOARDMODE_Y && (bG.y = 0), (this.billboardMode & GG.BILLBOARDMODE_Z) !== GG.BILLBOARDMODE_Z && (bG.z = 0), pG.e.RotationYawPitchRollToRef(bG.y, bG.x, bG.z, pG.j.Matrix[0])
              } else pG.e.FromQuaternionToRef(pG.j.Quaternion[0], pG.j.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pG.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pG.j.mK[0])
            } else {
              const bG = pG.j.mK[0];
              this._worldMatrix.getTranslationToRef(bG), pG.j.Matrix[1].oW(ZG.getViewMatrix());
              const wG = this.Dv().useRightHandedSystem;
              if (wG && pG.j.Matrix[1].multiplyToRef(GG._TmpRHRestore, pG.j.Matrix[1]), pG.j.Matrix[1].setTranslationFromFloats(0, 0, 0), pG.j.Matrix[1].invertToRef(pG.j.Matrix[0]), (this.billboardMode & GG.BILLBOARDMODE_ALL) !== GG.BILLBOARDMODE_ALL) {
                pG.j.Matrix[0].decompose(void 0, pG.j.Quaternion[0], void 0);
                const bG = pG.j.mK[1];
                pG.j.Quaternion[0].toEulerAnglesToRef(bG), (this.billboardMode & GG.BILLBOARDMODE_X) !== GG.BILLBOARDMODE_X && (bG.x = 0), (this.billboardMode & GG.BILLBOARDMODE_Y) !== GG.BILLBOARDMODE_Y && (bG.y = 0), (this.billboardMode & GG.BILLBOARDMODE_Z) !== GG.BILLBOARDMODE_Z && (bG.z = 0), wG && (bG.y += Math.PI), pG.e.RotationYawPitchRollToRef(bG.y, bG.x, bG.z, pG.j.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pG.j.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pG.j.mK[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : LG && LG._nonUniformScaling ? this._updateNonUniformScalingState(LG._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.fGG(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = pG.e.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), GG) {
            const GG = this.getChildren();
            for (let bG = 0; bG < GG.length; ++bG) {
              const ZG = GG[bG];
              if (ZG) {
                ZG.computeWorldMatrix();
                const GG = pG.j.Matrix[0];
                ZG._localMatrix.multiplyToRef(this._localMatrix, GG);
                const bG = pG.j.Quaternion[0];
                GG.decompose(ZG.nY, bG, ZG.position), ZG.rotationQuaternion ? ZG.rotationQuaternion.oW(bG) : bG.toEulerAnglesToRef(ZG.rotation)
              }
            }
          }
          this.nY.fGG(1, 1, 1), this.position.fGG(0, 0, 0), this.rotation.fGG(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = pG.g.Identity()), this._worldMatrix = pG.e.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(GG) {
          return this.onAfterWorldMatrixUpdateObservable.add(GG), this
        }
        unregisterAfterWorldMatrixUpdate(GG) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(GG), this
        }
        getPositionInCameraSpace() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return GG || (GG = this.Dv().activeCamera), pG.p.TransformCoordinates(this.getAbsolutePosition(), GG.getViewMatrix())
        }
        getDistanceToCamera() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return GG || (GG = this.Dv().activeCamera), this.getAbsolutePosition().subtract(GG.globalPosition).length()
        }
        clone(bG, ZG, wG) {
          const SG = YG.b.Clone((() => new GG(bG, this.Dv())), this);
          if (SG.name = bG, SG.id = bG, ZG && (SG.parent = ZG), !wG) {
            const GG = this.getDescendants(!0);
            for (let ZG = 0; ZG < GG.length; ZG++) {
              const wG = GG[ZG];
              wG.clone && wG.clone(bG + "." + wG.name, SG)
            }
          }
          return SG
        }
        serialize(GG) {
          const bG = YG.b.Serialize(this, GG);
          return bG.type = this.getClassName(), bG.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(bG), bG.localMatrix = this.getPivotMatrix().mwG(), bG.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (bG.Kl = !0), YG.b.AppendSerializedAnimations(this, bG), bG.Bh = this.serializeAnimationRanges(), bG
        }
        getChildTransformNodes(bG, ZG) {
          const wG = [];
          return this._getDescendants(wG, bG, (bG => (!ZG || ZG(bG)) && bG instanceof GG)), wG
        }
        dispose(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.Dv().stopAnimation(this), this.Dv().removeTransformNode(this), this._parentContainer) {
            const GG = this._parentContainer.transformNodes.indexOf(this);
            GG > -1 && this._parentContainer.transformNodes.splice(GG, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), GG) {
            const GG = this.getChildTransformNodes(!0);
            for (const bG of GG) bG.parent = null, bG.computeWorldMatrix(!0)
          }
          super.dispose(GG, bG)
        }
        normalizeToUnitCube() {
          let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZG = arguments.length > 2 ? arguments[2] : void 0,
            wG = null,
            SG = null;
          bG && (this.rotationQuaternion ? (SG = this.rotationQuaternion.clone(), this.rotationQuaternion.fGG(0, 0, 0, 1)) : this.rotation && (wG = this.rotation.clone(), this.rotation.fGG(0, 0, 0)));
          const LG = this.getHierarchyBoundingVectors(GG, ZG),
            yG = LG.max.subtract(LG.min),
            kG = Math.max(yG.x, yG.y, yG.z);
          if (0 === kG) return this;
          const UG = 1 / kG;
          return this.nY.scaleInPlace(UG), bG && (this.rotationQuaternion && SG ? this.rotationQuaternion.oW(SG) : this.rotation && wG && this.rotation.oW(wG)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const YG = "function" === typeof Symbol && Symbol.metadata ? Object.create(dG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, UG.M)("position")], ZG = [(0, UG.M)("rotation")], wG = [(0, UG.A)("rotationQuaternion")], SG = [(0, UG.M)("nY")], LG = [(0, UG.Q)("billboardMode")], yG = [(0, UG.Q)()], QG = [(0, UG.Q)("infiniteDistance")], KG = [(0, UG.Q)()], hG = [(0, UG.Q)()], (0, kG.k)(null, null, bG, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: GG => "_position" in GG,
            get: GG => GG._position,
            set: (GG, bG) => {
              GG._position = bG
            }
          },
          metadata: YG
        }, JG, rG), (0, kG.k)(null, null, ZG, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: GG => "_rotation" in GG,
            get: GG => GG._rotation,
            set: (GG, bG) => {
              GG._rotation = bG
            }
          },
          metadata: YG
        }, zG, EG), (0, kG.k)(null, null, wG, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: GG => "_rotationQuaternion" in GG,
            get: GG => GG._rotationQuaternion,
            set: (GG, bG) => {
              GG._rotationQuaternion = bG
            }
          },
          metadata: YG
        }, oG, XG), (0, kG.k)(null, null, SG, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: GG => "_scaling" in GG,
            get: GG => GG._scaling,
            set: (GG, bG) => {
              GG._scaling = bG
            }
          },
          metadata: YG
        }, uG, iG), (0, kG.k)(null, null, LG, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "_billboardMode" in GG,
            get: GG => GG._billboardMode,
            set: (GG, bG) => {
              GG._billboardMode = bG
            }
          },
          metadata: YG
        }, CG, WG), (0, kG.k)(null, null, yG, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: GG => "scalingDeterminant" in GG,
            get: GG => GG.scalingDeterminant,
            set: (GG, bG) => {
              GG.scalingDeterminant = bG
            }
          },
          metadata: YG
        }, mG, IG), (0, kG.k)(null, null, QG, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: GG => "_infiniteDistance" in GG,
            get: GG => GG._infiniteDistance,
            set: (GG, bG) => {
              GG._infiniteDistance = bG
            }
          },
          metadata: YG
        }, FG, vG), (0, kG.k)(null, null, KG, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: GG => "ignoreNonUniformScaling" in GG,
            get: GG => GG.ignoreNonUniformScaling,
            set: (GG, bG) => {
              GG.ignoreNonUniformScaling = bG
            }
          },
          metadata: YG
        }, aG, cG), (0, kG.k)(null, null, hG, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: GG => "reIntegrateRotationIntoRotationQuaternion" in GG,
            get: GG => GG.reIntegrateRotationIntoRotationQuaternion,
            set: (GG, bG) => {
              GG.reIntegrateRotationIntoRotationQuaternion = bG
            }
          },
          metadata: YG
        }, lG, jG), YG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: YG
        })
      })(), GG.BILLBOARDMODE_NONE = 0, GG.BILLBOARDMODE_X = 1, GG.BILLBOARDMODE_Y = 2, GG.BILLBOARDMODE_Z = 4, GG.BILLBOARDMODE_ALL = 7, GG.BILLBOARDMODE_USE_POSITION = 128, GG.BillboardUseParentOrientation = !1, GG._TmpRotation = pG.g.Zero(), GG._TmpScaling = pG.p.Zero(), GG._TmpTranslation = pG.p.Zero(), GG._TmpRHRestore = pG.e.Scaling(1, 1, -1), GG._LookAtVectorCache = new pG.p(0, 0, 0), GG._RotationAxisCache = new pG.g, GG
    })();

    function dG(GG, bG, ZG) {
      const wG = YG.b.Parse((() => new hG(GG.name, bG)), GG, bG, ZG);
      if (GG.localMatrix ? wG.setPreTransformMatrix(pG.e.FromArray(GG.localMatrix)) : GG.pivotMatrix && wG.setPivotMatrix(pG.e.FromArray(GG.pivotMatrix)), wG.DW(GG.isEnabled), wG._waitingParsedUniqueId = GG.uniqueId, void 0 !== GG.parentId && (wG._waitingParentId = GG.parentId), void 0 !== GG.parentInstanceIndex && (wG._waitingParentInstanceIndex = GG.parentInstanceIndex), GG.Kl && (wG._waitingFreezeWorldMatrix = GG.Kl), GG.animations) {
        for (let bG = 0; bG < GG.animations.length; bG++) {
          const ZG = GG.animations[bG],
            SG = (0, QG.e)("BABYLON.Animation");
          SG && wG.animations.push(SG.Parse(ZG))
        }
        fG.e.ParseAnimationRanges(wG, GG, bG)
      }
      return GG.autoAnimate && bG.beginAnimation(wG, GG.autoAnimateFrom, GG.autoAnimateTo, GG.autoAnimateLoop, GG.autoAnimateSpeed || 1), wG
    }
    let JG = !1;

    function rG() {
      JG || (JG = !0, hG.Parse = dG)
    }(wG = hG.prototype).qT ?? (wG.qT = (0, KG.h)("TransformNode", "qT")), (SG = hG.prototype).applyImpulse ?? (SG.applyImpulse = (0, KG.h)("TransformNode", "applyImpulse")), (LG = hG.prototype).applyAngularImpulse ?? (LG.applyAngularImpulse = (0, KG.h)("TransformNode", "applyAngularImpulse")), (yG = hG.prototype).applyTorque ?? (yG.applyTorque = (0, KG.h)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(hG.prototype, "physicsBody") || Object.defineProperty(hG.prototype, "physicsBody", (0, KG.d)("TransformNode", "physicsBody"))
  },
  40792: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      try {
        const wG = GG.next();
        wG.done ? bG(wG) : wG.value ? wG.value.then((() => {
          wG.value = void 0, bG(wG)
        }), ZG) : bG(wG)
      } catch (wG) {
        ZG(wG)
      }
    }

    function SG() {
      let GG, bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ZG, SG, LG) => {
        const yG = performance.now();
        void 0 === GG || yG - GG > bG ? (GG = yG, setTimeout((() => {
          wG(ZG, SG, LG)
        }), 0)) : wG(ZG, SG, LG)
      }
    }

    function LG(GG, bG, ZG, wG, SG) {
      const LG = () => {
        let yG;
        const kG = GG => {
          GG.done ? ZG(GG.value) : void 0 === yG ? yG = !0 : LG()
        };
        do {
          yG = void 0, SG && SG.aborted ? wG(new Error("Aborted")) : bG(GG, kG, wG), void 0 === yG && (yG = !1)
        } while (yG)
      };
      LG()
    }

    function yG(GG, bG) {
      let ZG;
      return LG(GG, wG, (GG => ZG = GG), (GG => {
        throw GG
      }), bG), ZG
    }
    async function kG(GG, bG, ZG) {
      return await new Promise(((wG, SG) => {
        LG(GG, bG, wG, SG, ZG)
      }))
    }

    function UG(GG, bG) {
      return function() {
        return yG(GG(...arguments), bG)
      }
    }
    ZG.d(bG, {
      d: () => SG,
      f: () => UG,
      i: () => kG,
      l: () => yG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
export const id = 286;
export const ids = [286];
export const modules = {
  41723: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => jW,
      h: () => sW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41628),
      PW = OW(38276),
      LW = OW(38241),
      cW = OW(41732),
      wW = OW(39911),
      tW = OW(38299),
      ZW = OW(41415),
      xW = OW(39271),
      lW = OW(38937),
      AW = OW(41477),
      bW = OW(41538);
    let jW = (() => {
      var WW;
      let iW, OW, tW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW = cW.d,
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        CW = [],
        XW = [],
        BW = [],
        qW = [],
        RW = [],
        GW = [],
        IW = [],
        aW = [],
        rW = [],
        zW = [],
        FW = [],
        QW = [],
        Wi = [],
        ii = [],
        Oi = [],
        mi = [],
        Ei = [];
      return WW = class extends oW {
        get position() {
          return this._position
        }
        set position(WW) {
          this._position = WW
        }
        set upVector(WW) {
          this._upVector = WW
        }
        get upVector() {
          return this._upVector
        }
        get screenArea() {
          let iW, OW;
          if (this.mode === WW.PERSPECTIVE_CAMERA) this.fovMode === WW.FOVMODE_VERTICAL_FIXED ? (OW = 2 * this.minZ * Math.tan(this.fov / 2), iW = this.VA().getAspectRatio(this) * OW) : (iW = 2 * this.minZ * Math.tan(this.fov / 2), OW = iW / this.VA().getAspectRatio(this));
          else {
            const WW = this.VA().getRenderWidth() / 2,
              mW = this.VA().getRenderHeight() / 2;
            iW = (this.orthoRight ?? WW) - (this.orthoLeft ?? -WW), OW = (this.orthoTop ?? mW) - (this.orthoBottom ?? -mW)
          }
          return iW * OW
        }
        set orthoLeft(WW) {
          this._orthoLeft = WW;
          for (const iW of this._rigCameras) iW.orthoLeft = WW
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(WW) {
          this._orthoRight = WW;
          for (const iW of this._rigCameras) iW.orthoRight = WW
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(WW) {
          this._orthoBottom = WW;
          for (const iW of this._rigCameras) iW.orthoBottom = WW
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(WW) {
          this._orthoTop = WW;
          for (const iW of this._rigCameras) iW.orthoTop = WW
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(iW / (2 * WW))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(WW) {
          this._baseInertia = WW
        }
        set mode(WW) {
          this._mode = WW;
          for (const iW of this._rigCameras) iW.mode = WW
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(iW, OW, EW) {
          let cW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, AW.d)(), super(iW, EW, !1), this.inputs = (0, mW.g)(this, dW), this._position = (0, mW.g)(this, eW, LW.q.Zero()), this._upVector = ((0, mW.g)(this, vW), (0, mW.g)(this, gW, LW.q.Up())), this.oblique = ((0, mW.g)(this, DW), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, mW.g)(this, VW, .8), this.projectionPlaneTilt = ((0, mW.g)(this, pW), (0, mW.g)(this, fW, 0)), this.minZ = ((0, mW.g)(this, CW), (0, mW.g)(this, XW, 1)), this.maxZ = ((0, mW.g)(this, BW), (0, mW.g)(this, qW, 1e4)), this._baseInertia = ((0, mW.g)(this, RW), .9), this._mode = WW.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new xW.e(0, 0, 1, 1), this.layerMask = (0, mW.g)(this, GW, 268435455), this.fovMode = ((0, mW.g)(this, IW), (0, mW.g)(this, aW, WW.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, mW.g)(this, rW), (0, mW.g)(this, zW, WW.RIG_MODE_NONE)), this.interaxialDistance = ((0, mW.g)(this, FW), (0, mW.g)(this, QW, void 0)), this.isStereoscopicSideBySide = ((0, mW.g)(this, Wi), (0, mW.g)(this, ii, void 0)), this.ignoreCameraMaxZ = ((0, mW.g)(this, Oi), (0, mW.g)(this, mi, !1)), this.customRenderTargets = ((0, mW.g)(this, Ei), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new PW.e, this.onProjectionMatrixChangedObservable = new PW.e, this.onAfterCheckInputsObservable = new PW.e, this.onRestoreStateObservable = new PW.e, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new LW.d, this._postProcesses = new Array, this._activeMeshes = new NW.g(256), this._globalPosition = LW.q.Zero(), this._computedViewMatrix = LW.d.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = LW.d.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = LW.g.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.bD().defaultCameraLayerMask, this.bD().addCamera(this), cW && !this.bD().activeCamera && (this.bD().activeCamera = this), this.position = OW, this.renderPassId = this.bD().VA().createRenderPassId(`Camera ${iW}`)
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
          return "NU"
        }
        toString(WW) {
          let iW = "Name: " + this.name;
          if (iW += ", type: " + this.getClassName(), this.animations)
            for (let OW = 0; OW < this.animations.length; OW++) iW += ", animation[0]: " + this.animations[OW].toString(WW);
          return iW
        }
        applyVerticalCorrection() {
          const WW = this.absoluteRotation.toEulerAngles();
          this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -WW.x : WW.x
        }
        get globalPosition() {
          return this._globalPosition
        }
        getActiveMeshes() {
          return this._activeMeshes
        }
        isActiveMesh(WW) {
          return -1 !== this._activeMeshes.indexOf(WW)
        }
        isReady() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (WW)
            for (const iW of this._postProcesses)
              if (iW && !iW.isReady()) return !1;
          return super.isReady(WW)
        }
        _initCache() {
          super._initCache(), this._cache.position = new LW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new LW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(WW) {
          WW || super._updateCache(), this._cache.position.HJ(this.position), this._cache.upVector.HJ(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const iW = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let OW = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === iW;
          if (!OW) return !1;
          const mW = this.VA();
          return this.mode === WW.PERSPECTIVE_CAMERA ? OW = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === mW.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (OW = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === mW.getRenderWidth() && this._cache.renderHeight === mW.getRenderHeight(), this.oblique && (OW = OW && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), OW
        }
        attachControl(WW, iW) {}
        detachControl(WW) {}
        update() {
          this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== WW.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
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
          for (let WW = 0; WW < this._postProcesses.length; WW++)
            if (null !== this._postProcesses[WW]) return this._postProcesses[WW];
          return null
        }
        _cascadePostProcessesToRigCams() {
          const WW = this._getFirstPostProcess();
          WW && WW.markTextureDirty();
          for (let iW = 0, OW = this._rigCameras.length; iW < OW; iW++) {
            const WW = this._rigCameras[iW],
              OW = WW._rigPostProcess;
            if (OW) {
              "pass" === OW.getEffectName() && (WW.isIntermediate = 0 === this._postProcesses.length), WW._postProcesses = this._postProcesses.slice(0).concat(OW), OW.markTextureDirty()
            } else WW._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !WW.isReusable() && this._postProcesses.indexOf(WW) > -1 ? (wW.b.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == iW || iW < 0 ? this._postProcesses.push(WW) : null === this._postProcesses[iW] ? this._postProcesses[iW] = WW : this._postProcesses.splice(iW, 0, WW), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.xOW(), this._postProcesses.indexOf(WW))
        }
        detachPostProcess(WW) {
          const iW = this._postProcesses.indexOf(WW); - 1 !== iW && (this._postProcesses[iW] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.xOW(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return LW.d.Identity()
        }
        getViewMatrix(WW) {
          return !WW && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.bD().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(WW) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== WW && (this._projectionMatrix = WW)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(iW) {
          if (this._doNotComputeProjectionMatrix || !iW && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const OW = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = OW, this._refreshFrustumPlanes = !0;
          const mW = this.VA(),
            EW = this.bD(),
            NW = mW.nmW;
          if (this.mode === WW.PERSPECTIVE_CAMERA) {
            let iW;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = mW.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), iW = EW.useRightHandedSystem ? LW.d.PerspectiveFovRHToRef : LW.d.PerspectiveFovLHToRef, iW(this.fov, mW.getAspectRatio(this), NW ? OW : this.minZ, NW ? this.minZ : OW, this._projectionMatrix, this.fovMode === WW.FOVMODE_VERTICAL_FIXED, mW.isNDCHalfZRange, this.projectionPlaneTilt, NW)
          } else {
            const WW = mW.getRenderWidth() / 2,
              iW = mW.getRenderHeight() / 2;
            EW.useRightHandedSystem ? this.oblique ? LW.d.ObliqueOffCenterRHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -iW, this.orthoTop ?? iW, NW ? OW : this.minZ, NW ? this.minZ : OW, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, mW.isNDCHalfZRange) : LW.d.OrthoOffCenterRHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -iW, this.orthoTop ?? iW, NW ? OW : this.minZ, NW ? this.minZ : OW, this._projectionMatrix, mW.isNDCHalfZRange) : this.oblique ? LW.d.ObliqueOffCenterLHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -iW, this.orthoTop ?? iW, NW ? OW : this.minZ, NW ? this.minZ : OW, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, mW.isNDCHalfZRange) : LW.d.OrthoOffCenterLHToRef(this.orthoLeft ?? -WW, this.orthoRight ?? WW, this.orthoBottom ?? -iW, this.orthoTop ?? iW, NW ? OW : this.minZ, NW ? this.minZ : OW, this._projectionMatrix, mW.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = mW.getRenderWidth(), this._cache.renderHeight = mW.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(WW) {
          return (this.radius || (this.target ? LW.q.Distance(this.position, this.target) : this.position.length())) + WW
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? lW.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = lW.e.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), iW && this.rigCameras.length > 0) {
            let iW = !1;
            for (const OW of this.rigCameras) OW._updateFrustumPlanes(), iW = iW || WW.isInFrustum(OW._frustumPlanes);
            return iW
          }
          return WW.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(WW) {
          return this._updateFrustumPlanes(), WW.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, ZW.o)("Ray")
        }
        getForwardRayToRef(WW) {
          throw (0, ZW.o)("Ray")
        }
        dispose(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.bD().stopAnimation(this), this.bD().removeCamera(this); this._rigCameras.length > 0;) {
            const WW = this._rigCameras.pop();
            WW && WW.dispose()
          }
          if (this._parentContainer) {
            const WW = this._parentContainer.cameras.indexOf(this);
            WW > -1 && this._parentContainer.cameras.splice(WW, 1), this._parentContainer = null
          }
          if (this._rigPostProcess) this._rigPostProcess.dispose(this), this._rigPostProcess = null, this._postProcesses.length = 0;
          else if (this.cameraRigMode !== WW.RIG_MODE_NONE) this._rigPostProcess = null, this._postProcesses.length = 0;
          else {
            let WW = this._postProcesses.length;
            for (; --WW >= 0;) {
              const iW = this._postProcesses[WW];
              iW && iW.dispose(this)
            }
          }
          let mW = this.customRenderTargets.length;
          for (; --mW >= 0;) this.customRenderTargets[mW].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.bD().VA().releaseRenderPassId(this.renderPassId), super.dispose(iW, OW)
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
        setCameraRigMode(iW, OW) {
          if (this.cameraRigMode !== iW) {
            for (; this._rigCameras.length > 0;) {
              const WW = this._rigCameras.pop();
              WW && WW.dispose()
            }
            if (this.cameraRigMode = iW, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = OW.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== WW.RIG_MODE_NONE) {
              const WW = this.createRigCamera(this.name + "_L", 0);
              WW && (WW._isLeftCamera = !0);
              const iW = this.createRigCamera(this.name + "_R", 1);
              iW && (iW._isRightCamera = !0), WW && iW && (this._rigCameras.push(WW), this._rigCameras.push(iW))
            }
            this._setRigMode(OW), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(WW) {}
        _getVRProjectionMatrix() {
          return LW.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.VA().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(WW, iW) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[WW] = iW, "interaxialDistance" === WW && (this._cameraRigParams.stereoHalfAngle = iW / .0637 * (Math.PI / 180))
        }
        createRigCamera(WW, iW) {
          return null
        }
        _updateRigCameras() {
          for (let WW = 0; WW < this._rigCameras.length; WW++) this._rigCameras[WW].minZ = this.minZ, this._rigCameras[WW].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[WW].fov = this.fov, this._rigCameras[WW].upVector.HJ(this.upVector);
          this.cameraRigMode === WW.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const WW = bW.d.Serialize(this);
          return WW.uniqueId = this.uniqueId, WW.type = this.getClassName(), this.parent && this.parent._serializeAsParent(WW), this.inputs && this.inputs.serialize(WW), bW.d.AppendSerializedAnimations(this, WW), WW.kj = this.serializeAnimationRanges(), WW.isEnabled = this.isEnabled(), WW
        }
        clone(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const mW = bW.d.Clone(WW.GetConstructorFromName(this.getClassName(), iW, this.bD(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return mW.name = iW, mW.parent = OW, this.onClonedObservable.notifyObservers(mW), mW
        }
        uF(WW) {
          const iW = LW.q.Zero();
          return this.getDirectionToRef(WW, iW), iW
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(WW, iW) {
          LW.q.TransformNormalToRef(WW, this.getWorldMatrix(), iW)
        }
        static GetConstructorFromName(iW, OW, mW) {
          let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            NW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const PW = cW.d.Construct(iW, OW, mW, {
            interaxial_distance: EW,
            isStereoscopicSideBySide: NW
          });
          return PW || (() => WW._CreateDefaultParsedCamera(OW, mW))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let WW = this.bD().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (WW *= -1), WW
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(oW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, EW.K)("position")], OW = [(0, EW.K)("upVector")], tW = [(0, EW.M)()], jW = [(0, EW.M)()], UW = [(0, EW.M)()], kW = [(0, EW.M)()], sW = [(0, EW.M)()], MW = [(0, EW.M)()], KW = [(0, EW.M)()], SW = [(0, EW.M)()], YW = [(0, EW.M)()], yW = [(0, EW.M)()], TW = [(0, EW.M)()], JW = [(0, EW.M)()], hW = [(0, EW.M)()], HW = [(0, EW.M)()], nW = [(0, EW.M)()], uW = [(0, EW.M)()], (0, mW.e)(WW, null, tW, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoLeft" in WW,
            get: WW => WW.orthoLeft
          },
          metadata: NW
        }, null, dW), (0, mW.e)(WW, null, jW, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoRight" in WW,
            get: WW => WW.orthoRight
          },
          metadata: NW
        }, null, dW), (0, mW.e)(WW, null, UW, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoBottom" in WW,
            get: WW => WW.orthoBottom
          },
          metadata: NW
        }, null, dW), (0, mW.e)(WW, null, kW, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: WW => "orthoTop" in WW,
            get: WW => WW.orthoTop
          },
          metadata: NW
        }, null, dW), (0, mW.e)(WW, null, YW, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: WW => "inertia" in WW,
            get: WW => WW.inertia
          },
          metadata: NW
        }, null, dW), (0, mW.e)(WW, null, yW, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: WW => "mode" in WW,
            get: WW => WW.mode
          },
          metadata: NW
        }, null, dW), (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: WW => "_position" in WW,
            get: WW => WW._position,
            set: (WW, iW) => {
              WW._position = iW
            }
          },
          metadata: NW
        }, eW, vW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: WW => "_upVector" in WW,
            get: WW => WW._upVector,
            set: (WW, iW) => {
              WW._upVector = iW
            }
          },
          metadata: NW
        }, gW, DW), (0, mW.e)(null, null, sW, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: WW => "fov" in WW,
            get: WW => WW.fov,
            set: (WW, iW) => {
              WW.fov = iW
            }
          },
          metadata: NW
        }, VW, pW), (0, mW.e)(null, null, MW, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: WW => "projectionPlaneTilt" in WW,
            get: WW => WW.projectionPlaneTilt,
            set: (WW, iW) => {
              WW.projectionPlaneTilt = iW
            }
          },
          metadata: NW
        }, fW, CW), (0, mW.e)(null, null, KW, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "minZ" in WW,
            get: WW => WW.minZ,
            set: (WW, iW) => {
              WW.minZ = iW
            }
          },
          metadata: NW
        }, XW, BW), (0, mW.e)(null, null, SW, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "maxZ" in WW,
            get: WW => WW.maxZ,
            set: (WW, iW) => {
              WW.maxZ = iW
            }
          },
          metadata: NW
        }, qW, RW), (0, mW.e)(null, null, TW, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "layerMask" in WW,
            get: WW => WW.layerMask,
            set: (WW, iW) => {
              WW.layerMask = iW
            }
          },
          metadata: NW
        }, GW, IW), (0, mW.e)(null, null, JW, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "fovMode" in WW,
            get: WW => WW.fovMode,
            set: (WW, iW) => {
              WW.fovMode = iW
            }
          },
          metadata: NW
        }, aW, rW), (0, mW.e)(null, null, hW, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "cameraRigMode" in WW,
            get: WW => WW.cameraRigMode,
            set: (WW, iW) => {
              WW.cameraRigMode = iW
            }
          },
          metadata: NW
        }, zW, FW), (0, mW.e)(null, null, HW, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "interaxialDistance" in WW,
            get: WW => WW.interaxialDistance,
            set: (WW, iW) => {
              WW.interaxialDistance = iW
            }
          },
          metadata: NW
        }, QW, Wi), (0, mW.e)(null, null, nW, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: WW => "isStereoscopicSideBySide" in WW,
            get: WW => WW.isStereoscopicSideBySide,
            set: (WW, iW) => {
              WW.isStereoscopicSideBySide = iW
            }
          },
          metadata: NW
        }, ii, Oi), (0, mW.e)(null, null, uW, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "ignoreCameraMaxZ" in WW,
            get: WW => WW.ignoreCameraMaxZ,
            set: (WW, iW) => {
              WW.ignoreCameraMaxZ = iW
            }
          },
          metadata: NW
        }, mi, Ei), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW._CreateDefaultParsedCamera = (WW, iW) => {
        throw (0, ZW.o)("UniversalCamera")
      }, WW.PERSPECTIVE_CAMERA = 0, WW.ORTHOGRAPHIC_CAMERA = 1, WW.FOVMODE_VERTICAL_FIXED = 0, WW.FOVMODE_HORIZONTAL_FIXED = 1, WW.RIG_MODE_NONE = 0, WW.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, WW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, WW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, WW.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, WW.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, WW.RIG_MODE_VR = 20, WW.RIG_MODE_CUSTOM = 22, WW.ForceAttachControlToAlwaysPreventDefault = !1, WW
    })();

    function UW(WW, iW) {
      const OW = WW.type,
        mW = jW.GetConstructorFromName(OW, WW.name, iW, WW.interaxial_distance, WW.isStereoscopicSideBySide),
        EW = bW.d.Parse(mW, WW, iW);
      if (void 0 !== WW.parentId && (EW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (EW._waitingParentInstanceIndex = WW.parentInstanceIndex), EW.inputs && (EW.inputs.parse(WW), EW._setupInputs()), WW.upVector && (EW.upVector = LW.q.FromArray(WW.upVector)), EW.setPosition && (EW.position.yWW(0, 0, 0), EW.setPosition(LW.q.FromArray(WW.position))), WW.target && EW.setTarget && EW.setTarget(LW.q.FromArray(WW.target)), WW.cameraRigMode) {
        const iW = WW.interaxial_distance ? {
          interaxialDistance: WW.interaxial_distance
        } : {};
        EW.setCameraRigMode(WW.cameraRigMode, iW)
      }
      if (WW.animations) {
        for (let iW = 0; iW < WW.animations.length; iW++) {
          const OW = WW.animations[iW],
            mW = (0, tW.d)("BABYLON.Animation");
          mW && EW.animations.push(mW.Parse(OW))
        }
        cW.d.ParseAnimationRanges(EW, WW, iW)
      }
      return WW.autoAnimate && iW.beginAnimation(EW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), void 0 !== WW.isEnabled && EW.WK(WW.isEnabled), EW
    }
    let kW = !1;

    function sW() {
      kW || (kW = !0, jW.Parse = UW)
    }
  },
  41743: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW) {
        this._cameraPosition = iW, this._behavior = OW, this.activeInput = !1, this.speed = 1, this.xG = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new mW.q, this.rotationAccumulatedPixels = new mW.q, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = mW.q.Zero(), this.rotationDeltaCurrentFrame = mW.q.Zero(), this._zoomVelocity = 0, this._panVelocity = new mW.q, this.referenceFrameRate = 60, this._rotationVelocity = new mW.q, this._prevFrameTimeMs = 0, this._scene = WW
      }
      computeCurrentFrameDeltas() {
        const WW = this._scene.VA().getDeltaTime(),
          iW = this._getEffectiveDeltaMs(WW);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.Z5(0), this.rotationDeltaCurrentFrame.Z5(0), this.zoomDeltaCurrentFrame = 0, void(WW > 0 && (this._prevFrameTimeMs = WW));
        this.panDeltaCurrentFrame.Z5(0), this.rotationDeltaCurrentFrame.Z5(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.yWW(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * iW, this.panDeltaCurrentFrame), this._rotationVelocity.yWW(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.yWW(this._rotationVelocity.x * this.speed * this.rotationXSpeed * iW, this._rotationVelocity.y * this.speed * this.rotationYSpeed * iW, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.xG * this._zoomSpeedMultiplier) * iW, WW > 0 && (this._prevFrameTimeMs = WW), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.Z5(0), this.rotationAccumulatedPixels.Z5(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.Z5(0), this.rotationAccumulatedPixels.Z5(0)
      }
      resetPanVelocity() {
        this._panVelocity.Z5(0), this.panAccumulatedPixels.Z5(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(WW) {
        const iW = this._scene.VA().getDeltaTime(),
          OW = this._getEffectiveDeltaMs(iW),
          mW = 1e3 / this.referenceFrameRate;
        return Math.pow(WW, OW / mW)
      }
      getFrameIndependentInputScale(WW) {
        const iW = 1 - WW;
        if (iW <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(WW)) / iW
      }
      _getEffectiveDeltaMs(WW) {
        return WW > 0 ? WW : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(WW, iW, OW) {
        let mW = WW;
        const EW = this._scene.VA().getDeltaTime(),
          NW = this._getEffectiveDeltaMs(EW);
        if (0 === NW) return mW;
        const PW = this.getFrameIndependentDecay(OW);
        if (mW *= PW, 0 !== iW || this.activeInput) {
          const WW = 1 - OW;
          mW += iW / NW * (WW > 0 ? (1 - PW) / WW : 1)
        } else Math.abs(mW) < 1e-6 && (mW = 0);
        return mW
      }
    }
  },
  41747: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    class mW {
      constructor(WW, iW) {
        this.inputMap = [], this.handlers = WW, this._createDefaultEntries = iW, this.resetInputMap()
      }
      resolveInteraction(WW, iW) {
        for (const OW of this.inputMap)
          if (OW.source === WW && this._entryMatches(OW, iW)) return OW;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(WW, iW, OW) {
        const mW = this.inputMap;
        for (let EW = 0; EW < mW.length; EW++) {
          const NW = mW[EW];
          if (NW.source === WW && NW.interaction === iW && this._entryConditionsMatch(NW, OW)) return NW
        }
      }
      getEntries(WW, iW, OW) {
        const mW = [],
          EW = this.inputMap;
        for (let NW = 0; NW < EW.length; NW++) {
          const PW = EW[NW];
          PW.source === WW && PW.interaction === iW && this._entryConditionsMatch(PW, OW) && mW.push(PW)
        }
        return mW
      }
      addEntry(WW) {
        const iW = this._entrySpecificity(WW);
        let OW = this.inputMap.length;
        for (let mW = 0; mW < this.inputMap.length; mW++)
          if (this._entrySpecificity(this.inputMap[mW]) < iW) {
            OW = mW;
            break
          } this.inputMap.splice(OW, 0, WW)
      }
      setInteraction(WW, iW, OW) {
        const mW = this.resolveInteraction(WW, iW);
        return mW && this._entryCoversAllConditionsOf(mW, iW) ? (mW.interaction = OW, !0) : (this.addEntry({
          source: WW,
          ...iW ?? {},
          interaction: OW
        }), !0)
      }
      _entryCoversAllConditionsOf(WW, iW) {
        if (!iW) return !0;
        const OW = WW;
        for (const mW of Object.keys(iW)) {
          const WW = iW[mW];
          if (void 0 !== WW)
            if ("modifiers" === mW) {
              const iW = OW.modifiers ?? {};
              for (const OW of Object.keys(WW))
                if (void 0 !== WW[OW] && void 0 === iW[OW]) return !1
            } else if (void 0 === OW[mW]) return !1
        }
        return !0
      }
      setInteractions(WW, iW, OW) {
        let mW = 0;
        const EW = this.inputMap;
        for (let NW = 0; NW < EW.length; NW++) {
          const PW = EW[NW];
          PW.source === WW && this._entryMatches(PW, iW) && (PW.interaction = OW, mW++)
        }
        return mW
      }
      _entryMatches(WW, iW) {
        switch (WW.source) {
          case "pointer":
            return (void 0 === WW.button || WW.button === iW?.button) && this._matchModifiers(WW.modifiers, iW?.modifiers);
          case "wheel":
            return this._matchModifiers(WW.modifiers, iW?.modifiers);
          case "touch":
            return void 0 === WW.touchCount || WW.touchCount === iW?.touchCount;
          case "keyboard":
            return (void 0 === WW.key || (Array.isArray(WW.key) ? -1 !== WW.key.indexOf(iW?.key ?? -1) : WW.key === iW?.key)) && this._matchModifiers(WW.modifiers, iW?.modifiers)
        }
      }
      _entryConditionsMatch(WW, iW) {
        if (!iW) return !0;
        switch (WW.source) {
          case "pointer":
            return (!("button" in iW) || WW.button === iW.button) && (!("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers));
          case "wheel":
            return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers);
          case "touch":
            return !("touchCount" in iW) || WW.touchCount === iW.touchCount;
          case "keyboard":
            if ("key" in iW) {
              if (void 0 === WW.key) return void 0 === iW.key;
              if (void 0 === iW.key || (Array.isArray(WW.key) ? -1 === WW.key.indexOf(iW.key) : WW.key !== iW.key)) return !1
            }
            return !("modifiers" in iW) || this._entryModifiersMatch(WW.modifiers, iW.modifiers)
        }
      }
      _entrySpecificity(WW) {
        let iW = 0;
        return "button" in WW && void 0 !== WW.button && iW++, "key" in WW && void 0 !== WW.key && iW++, "touchCount" in WW && void 0 !== WW.touchCount && iW++, "modifiers" in WW && WW.modifiers && iW++, iW
      }
      _matchModifiers(WW, iW) {
        return !WW || (void 0 === WW.ctrl || WW.ctrl === (iW?.ctrl ?? !1)) && ((void 0 === WW.shift || WW.shift === (iW?.shift ?? !1)) && (void 0 === WW.alt || WW.alt === (iW?.alt ?? !1)))
      }
      _entryModifiersMatch(WW, iW) {
        if (!iW) return !WW;
        return void 0 !== iW.ctrl || void 0 !== iW.shift || void 0 !== iW.alt ? (void 0 === iW.ctrl || WW?.ctrl === iW.ctrl) && ((void 0 === iW.shift || WW?.shift === iW.shift) && (void 0 === iW.alt || WW?.alt === iW.alt)) : !WW || void 0 === WW.ctrl && void 0 === WW.shift && void 0 === WW.alt
      }
    }
  },
  41719: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => UW,
      d: () => bW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41723),
      PW = OW(38241),
      LW = OW(38249),
      cW = OW(41739),
      wW = OW(41732),
      tW = OW(41743),
      ZW = OW(41747);
    class xW extends tW.e {
      constructor(WW, iW, OW) {
        super(WW, iW, OW), this.input = new ZW.d({
          translate: (WW, iW, OW) => {
            this.panAccumulatedPixels.x += WW, this.panAccumulatedPixels.y += iW, this.panAccumulatedPixels.z += OW
          },
          rotate: (WW, iW) => {
            this.rotationAccumulatedPixels.x += WW, this.rotationAccumulatedPixels.y += iW
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
    const lW = PW.d.Zero(),
      AW = PW.g.Identity();
    let bW = (() => {
        var WW;
        let iW, OW, wW, tW, ZW = NW.e,
          bW = [],
          jW = [],
          UW = [],
          kW = [],
          sW = [],
          MW = [],
          KW = [],
          SW = [];
        return WW = class extends ZW {
          get inertia() {
            return this._targetInertia
          }
          set inertia(WW) {
            this._targetInertia = WW, this.movement && (this.movement.panInertia = WW, this.movement.rotationInertia = WW)
          }
          constructor(WW, iW, OW) {
            super(WW, iW, OW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new PW.q(0, 0, 0), this.cameraRotation = new PW.m(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, mW.g)(this, bW, !1), this.rotation = ((0, mW.g)(this, jW), (0, mW.g)(this, UW, void 0)), this.rotationQuaternion = (0, mW.g)(this, kW), this.speed = (0, mW.g)(this, sW, 2), this.noRotationConstraint = ((0, mW.g)(this, MW), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = LW.e, this._rotationEpsilon = LW.e, this.lockedTarget = (0, mW.g)(this, KW, null), this._currentTarget = ((0, mW.g)(this, SW), PW.q.Zero()), this._initialFocalDistance = 1, this._viewMatrix = PW.d.Zero(), this._cameraTransformMatrix = PW.d.Zero(), this._cameraRotationMatrix = PW.d.Zero(), this._transformedReferencePoint = PW.q.Zero(), this._deferredPositionUpdate = new PW.q, this._deferredRotationQuaternionUpdate = new PW.g, this._deferredRotationUpdate = new PW.q, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = PW.q.Forward(this.bD().useRightHandedSystem), this.rotation = new PW.q(0, this.bD().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new xW(this.bD(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(WW) {
            this.getWorldMatrix();
            const iW = PW.l.fA[0],
              OW = PW.l.fA[1];
            return OW.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(OW, iW), iW.scaleInPlace(WW), this.globalPosition.add(iW)
          }
          _getLockedTargetPosition() {
            if (!this.lockedTarget) return null;
            if (this.lockedTarget.absolutePosition) {
              const WW = this.lockedTarget;
              WW.computeWorldMatrix().getTranslationToRef(WW.absolutePosition)
            }
            return this.lockedTarget.absolutePosition || this.lockedTarget
          }
          storeState() {
            return this._storedPosition = this.position.clone(), this._storedRotation = this.rotation.clone(), this.rotationQuaternion && (this._storedRotationQuaternion = this.rotationQuaternion.clone()), super.storeState()
          }
          _restoreStateValues() {
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.yWW(0, 0, 0), this.cameraRotation.yWW(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new PW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new PW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new PW.g(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(WW) {
            WW || super._updateCache();
            const iW = this._getLockedTargetPosition();
            iW ? this._cache.lockedTarget ? this._cache.lockedTarget.HJ(iW) : this._cache.lockedTarget = iW.clone() : this._cache.lockedTarget = null, this._cache.rotation.HJ(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.HJ(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const WW = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(WW) : !WW) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const WW = this.VA();
            return this.speed * Math.sqrt(WW.getDeltaTime() / (100 * WW.getFps()))
          }
          setTarget(WW) {
            this.upVector.normalize(), this._initialFocalDistance = WW.subtract(this.position).length(), this.position.z === WW.z && (this.position.z += LW.e), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.bD().useRightHandedSystem ? PW.d.LookAtRHToRef(this.position, WW, PW.q.UpReadOnly, lW) : PW.d.LookAtLHToRef(this.position, WW, PW.q.UpReadOnly, lW), lW.invert();
            const iW = this.rotationQuaternion || AW;
            PW.g.FromRotationMatrixToRef(lW, iW), iW.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
          }
          get target() {
            return this.getTarget()
          }
          set target(WW) {
            this.setTarget(WW)
          }
          getTarget() {
            return this._currentTarget
          }
          _decideIfNeedsToMove() {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0
          }
          _updatePosition() {
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(PW.l.Matrix[0]), PW.q.TransformNormalToRef(this.cameraDirection, PW.l.Matrix[0], PW.l.fA[0]), this._deferredPositionUpdate.addInPlace(PW.l.fA[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.HJ(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.HJ(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const WW = this.movement,
              iW = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            WW.panAccumulatedPixels.addInPlace(this.cameraDirection), WW.rotationAccumulatedPixels.x += this.cameraRotation.x, WW.rotationAccumulatedPixels.y += this.cameraRotation.y, WW.computeCurrentFrameDeltas(), this.cameraDirection.HJ(WW.panDeltaCurrentFrame), this.cameraRotation.set(WW.rotationDeltaCurrentFrame.x, WW.rotationDeltaCurrentFrame.y);
            const OW = this.speed * this._panningEpsilon;
            !iW && Math.abs(this.cameraDirection.x) < OW && Math.abs(this.cameraDirection.y) < OW && Math.abs(this.cameraDirection.z) < OW && (this.cameraDirection.Z5(0), WW.resetPanVelocity());
            const mW = this.invertRotation ? -this.inverseRotationSpeed : 1,
              EW = this._decideIfNeedsToMove(),
              NW = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.HJ(this.rotation), this._deferredPositionUpdate.HJ(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.HJ(this.rotationQuaternion), EW && this._updatePosition(), NW) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * mW, this._deferredRotationUpdate.y += this.cameraRotation.y * mW, !this.noRotationConstraint) {
                const WW = 1.570796;
                this._deferredRotationUpdate.x > WW && (this._deferredRotationUpdate.x = WW), this._deferredRotationUpdate.x < -WW && (this._deferredRotationUpdate.x = -WW)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.HJ(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (PW.g.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.HJ(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.Z5(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : PW.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return PW.q.TransformNormalToRef(PW.q.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), PW.q.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? cW.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (PW.g.FromEulerVectorToRef(this.rotation, AW), cW.c.Y.rotateByQuaternionToRef(AW, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(WW, iW, OW) {
            if (this.bD().useRightHandedSystem ? PW.d.LookAtRHToRef(WW, iW, OW, this._viewMatrix) : PW.d.LookAtLHToRef(WW, iW, OW, this._viewMatrix), this.parent) {
              const WW = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(WW, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(iW, OW) {
            if (this.cameraRigMode !== NW.e.RIG_MODE_NONE) {
              const OW = new WW(iW, this.position.clone(), this.bD());
              return OW.isRigCamera = !0, OW.rigParent = this, this.cameraRigMode === NW.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new PW.g), OW._cameraRigParams = {}, OW.rotationQuaternion = new PW.g), OW.mode = this.mode, OW.orthoLeft = this.orthoLeft, OW.orthoRight = this.orthoRight, OW.orthoTop = this.orthoTop, OW.orthoBottom = this.orthoBottom, OW
            }
            return null
          }
          _updateRigCameras() {
            const WW = this._rigCameras[0],
              iW = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case NW.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case NW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case NW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case NW.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case NW.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const OW = this.cameraRigMode === NW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  mW = this.cameraRigMode === NW.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * OW, WW), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * mW, iW);
                break
              }
              case NW.e.RIG_MODE_VR:
                WW.rotationQuaternion && iW.rotationQuaternion && this.rotationQuaternion ? (WW.rotationQuaternion.HJ(this.rotationQuaternion), iW.rotationQuaternion.HJ(this.rotationQuaternion)) : (WW.rotation.HJ(this.rotation), iW.rotation.HJ(this.rotation)), WW.position.HJ(this.position), iW.position.HJ(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(iW, OW) {
            this.getTarget().subtractToRef(this.position, WW._TargetFocalPoint), WW._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const mW = WW._TargetFocalPoint.addInPlace(this.position);
            PW.d.TranslationToRef(-mW.x, -mW.y, -mW.z, WW._TargetTransformMatrix), WW._TargetTransformMatrix.multiplyToRef(PW.d.RotationAxis(OW.upVector, iW), WW._RigCamTransformMatrix), PW.d.TranslationToRef(mW.x, mW.y, mW.z, WW._TargetTransformMatrix), WW._RigCamTransformMatrix.multiplyToRef(WW._TargetTransformMatrix, WW._RigCamTransformMatrix), PW.q.TransformCoordinatesToRef(this.position, WW._RigCamTransformMatrix, OW.position), OW.setTarget(mW)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.K)()], wW = [(0, EW.M)()], tW = [(0, EW.z)("lockedTargetId")], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: WW => "updateUpVectorFromRotation" in WW,
              get: WW => WW.updateUpVectorFromRotation,
              set: (WW, iW) => {
                WW.updateUpVectorFromRotation = iW
              }
            },
            metadata: NW
          }, bW, jW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: WW => "rotation" in WW,
              get: WW => WW.rotation,
              set: (WW, iW) => {
                WW.rotation = iW
              }
            },
            metadata: NW
          }, UW, kW), (0, mW.e)(null, null, wW, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: WW => "speed" in WW,
              get: WW => WW.speed,
              set: (WW, iW) => {
                WW.speed = iW
              }
            },
            metadata: NW
          }, sW, MW), (0, mW.e)(null, null, tW, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: WW => "lockedTarget" in WW,
              get: WW => WW.lockedTarget,
              set: (WW, iW) => {
                WW.lockedTarget = iW
              }
            },
            metadata: NW
          }, KW, SW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW._RigCamTransformMatrix = new PW.d, WW._TargetTransformMatrix = new PW.d, WW._TargetFocalPoint = new PW.q, WW
      })(),
      jW = !1;

    function UW() {
      jW || (jW = !0, wW.d.AddNodeConstructor("TargetCamera", ((WW, iW) => () => new bW(WW, PW.q.Zero(), iW))))
    }
  },
  41475: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(41423);
    let EW = !1;

    function NW() {
      EW || (EW = !0, mW.b.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, mW.b.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, mW.b.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, mW.b.prototype.getAspectRatio = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = WW.viewport;
        return this.getRenderWidth(iW) * OW.width / (this.getRenderHeight(iW) * OW.height)
      }, mW.b.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, mW.b.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  41556: (WW, iW, OW) => {
    var mW = OW(41423),
      EW = OW(41558);
    let NW = !1;
    NW || (NW = !0, (0, EW.z)(), mW.b.prototype._loadFileAsync = async function(WW, iW, OW) {
      return await new Promise(((mW, EW) => {
        this._loadFile(WW, (WW => {
          mW(WW)
        }), void 0, iW, OW, ((WW, iW) => {
          EW(iW)
        }))
      }))
    })
  },
  41553: (WW, iW, OW) => {
    (0, OW(41477).d)()
  },
  41477: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(41423);
    let EW = !1;

    function NW() {
      EW || (EW = !0, mW.b.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, mW.b.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, mW.b.prototype.createRenderPassId = function(WW) {
        const iW = ++mW.b._RenderPassIdCounter;
        return this._renderPassNames[iW] = WW ?? "NONAME", iW
      }, mW.b.prototype.releaseRenderPassId = function(WW) {
        this._renderPassNames[WW] = void 0;
        for (let iW = 0; iW < this.scenes.length; ++iW) {
          const OW = this.scenes[iW];
          for (let iW = 0; iW < OW.meshes.length; ++iW) {
            const mW = OW.meshes[iW];
            if (mW._releaseRenderPassId(WW), mW.hY)
              for (let iW = 0; iW < mW.hY.length; ++iW) {
                mW.hY[iW]._removeDrawWrapper(WW)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(WW)
      })
    }
  },
  41589: (WW, iW, OW) => {
    var mW = OW(41595),
      EW = OW(41423);
    let NW = !1;
    NW || (NW = !0, EW.b.GetCompatibleTextureLoader = mW.e)
  },
  41481: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(41384);
    let EW = !1;

    function NW() {
      EW || (EW = !0, mW.ThinEngine.prototype.setAlphaMode = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[OW] === WW) {
          if (!iW) {
            const iW = 0 === WW;
            this.depthCullingState.depthMask !== iW && (this.depthCullingState.depthMask = iW)
          }
          return
        }
        const mW = 0 === WW;
        this._alphaState.setAlphaBlend(!mW, OW), this._alphaState.setAlphaMode(WW, OW), iW || (this.depthCullingState.depthMask = mW), this._alphaMode[OW] = WW
      })
    }
  },
  41491: (WW, iW, OW) => {
    var mW = OW(41371),
      EW = OW(39911),
      NW = OW(41384),
      PW = OW(41500),
      LW = OW(41467);
    class cW extends PW.b {
      setDepthStencilTexture(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(WW, iW), !WW) return;
        const OW = this._engine,
          mW = this._context,
          EW = WW._hardwareTexture;
        if (EW && WW._autoMSAAManagement && this._MSAAFramebuffer) {
          const iW = OW._currentFramebuffer;
          OW._bindUnboundFramebuffer(this._MSAAFramebuffer), mW.framebufferRenderbuffer(mW.FRAMEBUFFER, (0, LW.c)(WW.format) ? mW.DEPTH_STENCIL_ATTACHMENT : mW.DEPTH_ATTACHMENT, mW.RENDERBUFFER, EW.getMSAARenderBuffer()), OW._bindUnboundFramebuffer(iW)
        }
      }
      constructor(WW, iW, OW, mW, EW) {
        super(WW, iW, OW, mW), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = EW
      }
      _cloneRenderTargetWrapper() {
        let WW;
        return this._colorTextureArray && this._depthStencilTextureArray ? (WW = this._engine.createMultiviewRenderTargetTexture(this.width, this.height), WW.texture.isReady = !0) : WW = super._cloneRenderTargetWrapper(), WW
      }
      _swapRenderTargetWrapper(WW) {
        super._swapRenderTargetWrapper(WW), WW._framebuffer = this._framebuffer, WW._depthStencilBuffer = this._depthStencilBuffer, WW._MSAAFramebuffer = this._MSAAFramebuffer, WW._colorTextureArray = this._colorTextureArray, WW._depthStencilTextureArray = this._depthStencilTextureArray, this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null
      }
      createDepthStencilTexture() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const WW = this._engine,
            iW = WW._currentFramebuffer,
            OW = this._context;
          WW._bindUnboundFramebuffer(this._framebuffer), OW.framebufferRenderbuffer(OW.FRAMEBUFFER, OW.DEPTH_STENCIL_ATTACHMENT, OW.RENDERBUFFER, null), OW.framebufferRenderbuffer(OW.FRAMEBUFFER, OW.DEPTH_ATTACHMENT, OW.RENDERBUFFER, null), OW.framebufferRenderbuffer(OW.FRAMEBUFFER, OW.STENCIL_ATTACHMENT, OW.RENDERBUFFER, null), WW._bindUnboundFramebuffer(iW), OW.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(WW, iW, OW, mW, EW, NW)
      }
      shareDepth(WW) {
        super.shareDepth(WW);
        const iW = this._context,
          OW = this._depthStencilBuffer,
          mW = WW._MSAAFramebuffer || WW._framebuffer,
          EW = this._engine;
        WW._depthStencilBuffer && WW._depthStencilBuffer !== OW && iW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = OW;
        const NW = WW._generateStencilBuffer ? iW.DEPTH_STENCIL_ATTACHMENT : iW.DEPTH_ATTACHMENT;
        EW._bindUnboundFramebuffer(mW), iW.framebufferRenderbuffer(iW.FRAMEBUFFER, NW, iW.RENDERBUFFER, OW), EW._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const EW = WW._hardwareTexture;
        if (!EW) return;
        const NW = this._framebuffer,
          PW = this._engine,
          LW = PW._currentFramebuffer;
        let cW;
        if (PW._bindUnboundFramebuffer(NW), PW.bb > 1) {
          const NW = this._context;
          cW = NW["COLOR_ATTACHMENT" + iW], WW.is2DArray || WW.is3D ? (OW = OW ?? this.layerIndices?.[iW] ?? 0, NW.framebufferTextureLayer(NW.FRAMEBUFFER, cW, EW.underlyingResource, mW, OW)) : WW.isCube ? (OW = OW ?? this.faceIndices?.[iW] ?? 0, NW.framebufferTexture2D(NW.FRAMEBUFFER, cW, NW.TEXTURE_CUBE_MAP_POSITIVE_X + OW, EW.underlyingResource, mW)) : NW.framebufferTexture2D(NW.FRAMEBUFFER, cW, NW.TEXTURE_2D, EW.underlyingResource, mW)
        } else {
          const WW = this._context;
          cW = WW["COLOR_ATTACHMENT" + iW + "_WEBGL"];
          const NW = void 0 !== OW ? WW.TEXTURE_CUBE_MAP_POSITIVE_X + OW : WW.TEXTURE_2D;
          WW.framebufferTexture2D(WW.FRAMEBUFFER, cW, NW, EW.underlyingResource, mW)
        }
        if (WW._autoMSAAManagement && this._MSAAFramebuffer) {
          const WW = this._context;
          PW._bindUnboundFramebuffer(this._MSAAFramebuffer), WW.framebufferRenderbuffer(WW.FRAMEBUFFER, cW, WW.RENDERBUFFER, EW.getMSAARenderBuffer())
        }
        PW._bindUnboundFramebuffer(LW)
      }
      setTexture(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(WW, iW, OW), this._bindTextureRenderTarget(WW, iW)
      }
      setLayerAndFaceIndices(WW, iW) {
        if (super.setLayerAndFaceIndices(WW, iW), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const OW = this._attachments?.length ?? this.textures.length;
        for (let mW = 0; mW < OW; mW++) {
          const WW = this.textures[mW];
          WW && (WW.is2DArray || WW.is3D ? this._bindTextureRenderTarget(WW, mW, this.layerIndices[mW]) : WW.isCube ? this._bindTextureRenderTarget(WW, mW, this.faceIndices[mW]) : this._bindTextureRenderTarget(WW, mW))
        }
      }
      setLayerAndFaceIndex() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(WW, iW, OW), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const mW = this.textures[WW];
        mW.is2DArray || mW.is3D ? this._bindTextureRenderTarget(this.textures[WW], WW, this.layerIndices[WW]) : mW.isCube && this._bindTextureRenderTarget(this.textures[WW], WW, this.faceIndices[WW])
      }
      resolveMSAATextures() {
        const WW = this._engine,
          iW = WW._currentFramebuffer;
        WW._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), WW._bindUnboundFramebuffer(iW)
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const iW = this._context;
        WW || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (iW.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (iW.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (iW.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(WW)
      }
    }
    let wW = !1;
    wW || (wW = !0, NW.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(WW, iW, OW) {
      const mW = new cW(WW, iW, OW, this, this._gl);
      return this._renderTargetWrapperCache.push(mW), mW
    }, NW.ThinEngine.prototype.createRenderTargetTexture = function(WW, iW) {
      const OW = this._createHardwareRenderTargetWrapper(!1, !1, WW);
      let mW, EW, NW = !0,
        PW = !1,
        LW = !1,
        cW = 1;
      void 0 !== iW && "object" === typeof iW && (NW = iW.generateDepthBuffer ?? !0, PW = !!iW.generateStencilBuffer, LW = !!iW.noColorAttachment, mW = iW.colorAttachment, cW = iW.samples ?? 1, EW = iW.label);
      const wW = mW || (LW ? null : this._createInternalTexture(WW, iW, !0, 5)),
        tW = WW.width || WW,
        ZW = WW.height || WW,
        xW = this._currentFramebuffer,
        lW = this._gl,
        AW = lW.createFramebuffer();
      if (this._bindUnboundFramebuffer(AW), OW._depthStencilBuffer = this._setupFramebufferDepthAttachments(PW, NW, tW, ZW), !wW || wW.is2DArray || wW.is3D || lW.framebufferTexture2D(lW.FRAMEBUFFER, lW.COLOR_ATTACHMENT0, lW.TEXTURE_2D, wW._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(xW), OW.label = EW ?? "RenderTargetWrapper", OW._framebuffer = AW, OW._generateDepthBuffer = NW, OW._generateStencilBuffer = PW, OW.setTextures(wW), mW) {
        if (OW._samples = mW.samples, mW.samples > 1) {
          const WW = mW._hardwareTexture.getMSAARenderBuffer(0);
          OW._MSAAFramebuffer = lW.createFramebuffer(), this._bindUnboundFramebuffer(OW._MSAAFramebuffer), lW.framebufferRenderbuffer(lW.FRAMEBUFFER, lW.COLOR_ATTACHMENT0, lW.RENDERBUFFER, WW), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(OW, cW);
      return OW
    }, NW.ThinEngine.prototype._createDepthStencilTexture = function(WW, iW, OW) {
      const NW = this._gl,
        PW = WW.layers || 0,
        cW = WW.depth || 0;
      let wW = NW.TEXTURE_2D;
      0 !== PW ? wW = NW.TEXTURE_2D_ARRAY : 0 !== cW && (wW = NW.TEXTURE_3D);
      const tW = new mW.e(this, 12);
      if (tW.label = iW.label, !this._caps.depthTextureExtension) return EW.b.Error("Depth texture is not supported by your browser or hardware."), tW;
      const ZW = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...iW
      };
      if (this._bindTextureDirectly(wW, tW, !0), this._setupDepthStencilTexture(tW, WW, 0 !== ZW.comparisonFunction && ZW.bilinearFiltering, ZW.comparisonFunction, ZW.samples), void 0 !== ZW.depthTextureFormat) {
        if (15 !== ZW.depthTextureFormat && 16 !== ZW.depthTextureFormat && 17 !== ZW.depthTextureFormat && 13 !== ZW.depthTextureFormat && 14 !== ZW.depthTextureFormat && 18 !== ZW.depthTextureFormat) return EW.b.Error(`Depth texture ${ZW.depthTextureFormat} format is not supported.`), tW;
        tW.format = ZW.depthTextureFormat
      } else tW.format = ZW.generateStencil ? 13 : 16;
      const xW = (0, LW.c)(tW.format),
        lW = this._getWebGLTextureTypeFromDepthTextureFormat(tW.format),
        AW = xW ? NW.DEPTH_STENCIL : NW.DEPTH_COMPONENT,
        bW = this._getInternalFormatFromDepthTextureFormat(tW.format, !0, xW);
      return tW.is2DArray ? NW.texImage3D(wW, 0, bW, tW.width, tW.height, PW, 0, AW, lW, null) : tW.is3D ? NW.texImage3D(wW, 0, bW, tW.width, tW.height, cW, 0, AW, lW, null) : NW.texImage2D(wW, 0, bW, tW.width, tW.height, 0, AW, lW, null), this._bindTextureDirectly(wW, null), this._internalTexturesCache.push(tW), OW._depthStencilBuffer && (NW.deleteRenderbuffer(OW._depthStencilBuffer), OW._depthStencilBuffer = null), this._bindUnboundFramebuffer(OW._MSAAFramebuffer ?? OW._framebuffer), OW._generateStencilBuffer = xW, OW._depthStencilTextureWithStencil = xW, OW._depthStencilBuffer = this._setupFramebufferDepthAttachments(OW._generateStencilBuffer, OW._generateDepthBuffer, OW.width, OW.height, OW.samples, tW.format), this._bindUnboundFramebuffer(null), tW
    }, NW.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(WW, iW) {
      if (this.bb < 2 || !WW) return 1;
      if (WW.samples === iW) return iW;
      const OW = this._gl;
      iW = Math.min(iW, this.getCaps().maxMSAASamples), WW._depthStencilBuffer && (OW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = null), WW._MSAAFramebuffer && (OW.deleteFramebuffer(WW._MSAAFramebuffer), WW._MSAAFramebuffer = null);
      const mW = WW.texture?._hardwareTexture;
      if (mW?.releaseMSAARenderBuffers(), WW.texture && iW > 1 && "function" === typeof OW.renderbufferStorageMultisample) {
        const EW = OW.createFramebuffer();
        if (!EW) throw new Error("Unable to create multi sampled framebuffer");
        WW._MSAAFramebuffer = EW, this._bindUnboundFramebuffer(WW._MSAAFramebuffer);
        const NW = this._createRenderBuffer(WW.texture.width, WW.texture.height, iW, -1, this._getRGBABufferInternalSizedFormat(WW.texture.type, WW.texture.format, WW.texture._useSRGBBuffer), OW.COLOR_ATTACHMENT0, !1);
        if (!NW) throw new Error("Unable to create multi sampled framebuffer");
        mW?.addMSAARenderBuffer(NW)
      }
      this._bindUnboundFramebuffer(WW._MSAAFramebuffer ?? WW._framebuffer), WW.texture && (WW.texture.samples = iW), WW._samples = iW;
      const EW = WW._depthStencilTexture ? WW._depthStencilTexture.format : void 0;
      return WW._depthStencilBuffer = this._setupFramebufferDepthAttachments(WW._generateStencilBuffer, WW._generateDepthBuffer, WW.width, WW.height, iW, EW), this._bindUnboundFramebuffer(null), iW
    }, NW.ThinEngine.prototype._setupDepthStencilTexture = function(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const NW = iW.width ?? iW,
        PW = iW.height ?? iW,
        LW = iW.layers || 0,
        cW = iW.depth || 0;
      WW.baseWidth = NW, WW.baseHeight = PW, WW.width = NW, WW.height = PW, WW.is2DArray = LW > 0, WW.depth = LW || cW, WW.isReady = !0, WW.samples = EW, WW.generateMipMaps = !1, WW.samplingMode = OW ? 2 : 1, WW.type = 0, WW._comparisonFunction = mW;
      const wW = this._gl,
        tW = this._getTextureTarget(WW),
        ZW = this._getSamplingParameters(WW.samplingMode, !1);
      wW.texParameteri(tW, wW.TEXTURE_MAG_FILTER, ZW.mag), wW.texParameteri(tW, wW.TEXTURE_MIN_FILTER, ZW.min), wW.texParameteri(tW, wW.TEXTURE_WRAP_S, wW.CLAMP_TO_EDGE), wW.texParameteri(tW, wW.TEXTURE_WRAP_T, wW.CLAMP_TO_EDGE), this.bb > 1 && (0 === mW ? (wW.texParameteri(tW, wW.TEXTURE_COMPARE_FUNC, 515), wW.texParameteri(tW, wW.TEXTURE_COMPARE_MODE, wW.NONE)) : (wW.texParameteri(tW, wW.TEXTURE_COMPARE_FUNC, mW), wW.texParameteri(tW, wW.TEXTURE_COMPARE_MODE, wW.COMPARE_REF_TO_TEXTURE)))
    })
  },
  41359: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW.e
    });
    var mW = OW(41362);
    (0, OW(41481).d)();
    var EW = OW(41384);
    let NW = !1;
    ! function() {
      if (NW) return;
      NW = !0;
      const WW = new WeakMap,
        iW = new WeakMap,
        OW = new WeakMap,
        mW = new WeakMap;
      EW.ThinEngine.prototype.getAlphaToCoverage = function() {
        return WW.get(this) ?? !1
      }, EW.ThinEngine.prototype.setAlphaToCoverage = function(OW) {
        (WW.get(this) !== OW || this._gl && iW.get(this) !== this._gl) && (WW.set(this, OW), this._gl && (OW ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), iW.set(this, this._gl)))
      }, Object.defineProperty(EW.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (mW.get(this) !== this._gl && (OW.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), mW.set(this, this._gl)), OW.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var PW = OW(41371),
      LW = OW(39911),
      cW = OW(41458);
    let wW = !1;
    ! function() {
      function WW(WW, iW, OW, mW) {
        let EW, NW = 1;
        1 === mW ? EW = new Float32Array(iW * OW * 4) : 2 === mW ? (EW = new Uint16Array(iW * OW * 4), NW = 15360) : EW = 7 === mW ? new Uint32Array(iW * OW * 4) : new Uint8Array(iW * OW * 4);
        for (let PW = 0; PW < iW; PW++)
          for (let mW = 0; mW < OW; mW++) {
            const OW = 3 * (mW * iW + PW),
              LW = 4 * (mW * iW + PW);
            EW[LW + 0] = WW[OW + 0], EW[LW + 1] = WW[OW + 1], EW[LW + 2] = WW[OW + 2], EW[LW + 3] = NW
          }
        return EW
      }

      function iW(WW) {
        return function(iW, OW, mW, EW, NW, LW, cW, wW) {
          let tW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            ZW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const xW = WW ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            lW = WW ? 10 : 11,
            AW = new PW.e(this, lW);
          AW.baseWidth = OW, AW.baseHeight = mW, AW.baseDepth = EW, AW.width = OW, AW.height = mW, AW.depth = EW, AW.format = NW, AW.type = ZW, AW.generateMipMaps = LW, AW.samplingMode = wW, WW ? AW.is3D = !0 : AW.is2DArray = !0, this._doNotHandleContextLost || (AW._bufferView = iW), WW ? this.updateRawTexture3D(AW, iW, NW, cW, tW, ZW) : this.updateRawTexture2DArray(AW, iW, NW, cW, tW, ZW), this._bindTextureDirectly(xW, AW, !0);
          const bW = this._getSamplingParameters(wW, LW);
          return this._gl.texParameteri(xW, this._gl.TEXTURE_MAG_FILTER, bW.mag), this._gl.texParameteri(xW, this._gl.TEXTURE_MIN_FILTER, bW.min), LW && this._gl.generateMipmap(xW), this._bindTextureDirectly(xW, null), this._internalTexturesCache.push(AW), AW
        }
      }

      function OW(WW) {
        return function(iW, OW, mW, EW) {
          let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const LW = WW ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            cW = this._getWebGLTextureType(PW),
            wW = this._getInternalFormat(mW),
            tW = this._getRGBABufferInternalSizedFormat(PW, mW);
          this._bindTextureDirectly(LW, iW, !0), this._unpackFlipY(void 0 === EW || !!EW), this._doNotHandleContextLost || (iW._bufferView = OW, iW.format = mW, iW.invertY = EW, iW._compression = NW), iW.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), NW && OW ? this._gl.compressedTexImage3D(LW, 0, this.getCaps().s3tc[NW], iW.width, iW.height, iW.depth, 0, OW) : this._gl.texImage3D(LW, 0, tW, iW.width, iW.height, iW.depth, 0, wW, cW, OW), iW.generateMipMaps && this._gl.generateMipmap(LW), this._bindTextureDirectly(LW, null), iW.isReady = !0
        }
      }
      wW || (wW = !0, EW.ThinEngine.prototype.updateRawTexture = function(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!WW) return;
        const LW = this._getRGBABufferInternalSizedFormat(NW, OW, PW),
          cW = this._getInternalFormat(OW),
          wW = this._getWebGLTextureType(NW);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, WW, !0), this._unpackFlipY(void 0 === mW || !!mW), this._doNotHandleContextLost || (WW._bufferView = iW, WW.format = OW, WW.type = NW, WW.invertY = mW, WW._compression = EW), WW.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), EW && iW ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[EW], WW.width, WW.height, 0, iW) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, LW, WW.width, WW.height, 0, cW, wW, iW), WW.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), WW.isReady = !0
      }, EW.ThinEngine.prototype.createRawTexture = function(WW, iW, OW, mW, EW, NW, LW) {
        let cW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          tW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ZW = new PW.e(this, 3);
        ZW.baseWidth = iW, ZW.baseHeight = OW, ZW.width = iW, ZW.height = OW, ZW.format = mW, ZW.generateMipMaps = EW, ZW.samplingMode = LW, ZW.invertY = NW, ZW._compression = cW, ZW.type = wW, ZW._useSRGBBuffer = this._getUseSRGBBuffer(tW, !EW), this._doNotHandleContextLost || (ZW._bufferView = WW), this.updateRawTexture(ZW, WW, mW, NW, cW, wW, ZW._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, ZW, !0);
        const xW = this._getSamplingParameters(LW, EW);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, xW.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, xW.min), EW && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(ZW), ZW
      }, EW.ThinEngine.prototype.createRawCubeTexture = function(WW, iW, OW, mW, EW, NW, wW) {
        let tW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const ZW = this._gl,
          xW = new PW.e(this, 8);
        xW.isCube = !0, xW.format = OW, xW.type = mW, this._doNotHandleContextLost || (xW._bufferViewArray = WW);
        const lW = this._getWebGLTextureType(mW);
        let AW = this._getInternalFormat(OW);
        AW === ZW.RGB && (AW = ZW.RGBA), lW !== ZW.FLOAT || this._caps.textureFloatLinearFiltering ? lW !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? lW !== ZW.FLOAT || this._caps.textureFloatRender ? lW !== ZW.HALF_FLOAT || this._caps.colorBufferFloat || (EW = !1, LW.b.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (EW = !1, LW.b.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (EW = !1, wW = 1, LW.b.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (EW = !1, wW = 1, LW.b.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const bW = iW,
          jW = bW;
        xW.width = bW, xW.height = jW, xW.invertY = NW, xW._compression = tW;
        if (!this.needPOTTextures || (0, cW.i)(xW.width) && (0, cW.i)(xW.height) || (EW = !1), WW) this.updateRawCubeTexture(xW, WW, OW, mW, NW, tW);
        else {
          const WW = this._getRGBABufferInternalSizedFormat(mW),
            iW = 0;
          this._bindTextureDirectly(ZW.TEXTURE_CUBE_MAP, xW, !0);
          for (let OW = 0; OW < 6; OW++) tW ? ZW.compressedTexImage2D(ZW.TEXTURE_CUBE_MAP_POSITIVE_X + OW, iW, this.getCaps().s3tc[tW], xW.width, xW.height, 0, void 0) : ZW.texImage2D(ZW.TEXTURE_CUBE_MAP_POSITIVE_X + OW, iW, WW, xW.width, xW.height, 0, AW, lW, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, xW, !0), WW && EW && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const UW = this._getSamplingParameters(wW, EW);
        return ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_MAG_FILTER, UW.mag), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_MIN_FILTER, UW.min), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_WRAP_S, ZW.CLAMP_TO_EDGE), ZW.texParameteri(ZW.TEXTURE_CUBE_MAP, ZW.TEXTURE_WRAP_T, ZW.CLAMP_TO_EDGE), this._bindTextureDirectly(ZW.TEXTURE_CUBE_MAP, null), xW.generateMipMaps = EW, xW.samplingMode = wW, xW.isReady = !0, xW
      }, EW.ThinEngine.prototype.updateRawCubeTexture = function(iW, OW, mW, EW, NW) {
        let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        iW._bufferViewArray = OW, iW.format = mW, iW.type = EW, iW.invertY = NW, iW._compression = PW;
        const wW = this._gl,
          tW = this._getWebGLTextureType(EW);
        let ZW = this._getInternalFormat(mW);
        const xW = this._getRGBABufferInternalSizedFormat(EW);
        let lW = !1;
        ZW === wW.RGB && (ZW = wW.RGBA, lW = !0), this._bindTextureDirectly(wW.TEXTURE_CUBE_MAP, iW, !0), this._unpackFlipY(void 0 === NW || !!NW), iW.width % 4 !== 0 && wW.pixelStorei(wW.UNPACK_ALIGNMENT, 1);
        for (let cW = 0; cW < 6; cW++) {
          let mW = OW[cW];
          PW ? wW.compressedTexImage2D(wW.TEXTURE_CUBE_MAP_POSITIVE_X + cW, LW, this.getCaps().s3tc[PW], iW.width, iW.height, 0, mW) : (lW && (mW = WW(mW, iW.width, iW.height, EW)), wW.texImage2D(wW.TEXTURE_CUBE_MAP_POSITIVE_X + cW, LW, xW, iW.width, iW.height, 0, ZW, tW, mW))
        }(!this.needPOTTextures || (0, cW.i)(iW.width) && (0, cW.i)(iW.height)) && iW.generateMipMaps && 0 === LW && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), iW.isReady = !0
      }, EW.ThinEngine.prototype.createRawCubeTextureFromUrl = function(iW, OW, mW, EW, NW, PW, LW, cW) {
        let wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          tW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ZW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          xW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const lW = this._gl,
          AW = this.createRawCubeTexture(null, mW, EW, NW, !PW, xW, ZW, null);
        OW?.addPendingData(AW), AW.url = iW, AW.isReady = !1, this._internalTexturesCache.push(AW);
        const bW = (WW, iW) => {
            OW?.removePendingData(AW), tW && tW(WW ? WW.status + " " + WW.statusText : "Failed to parse texture data", iW)
          },
          jW = async iW => {
            if (!AW._hardwareTexture) return;
            const mW = LW(iW);
            if (!mW) return;
            const PW = mW instanceof Promise ? await mW : mW,
              tW = AW.width;
            if (cW) {
              const iW = this._getWebGLTextureType(NW);
              let OW = this._getInternalFormat(EW);
              const mW = this._getRGBABufferInternalSizedFormat(NW);
              let LW = !1;
              OW === lW.RGB && (OW = lW.RGBA, LW = !0), this._bindTextureDirectly(lW.TEXTURE_CUBE_MAP, AW, !0), this._unpackFlipY(!1);
              const wW = cW(PW);
              for (let EW = 0; EW < wW.length; EW++) {
                const PW = tW >> EW;
                for (let cW = 0; cW < 6; cW++) {
                  let tW = wW[EW][cW];
                  LW && (tW = WW(tW, PW, PW, NW)), lW.texImage2D(cW, EW, mW, PW, PW, 0, OW, iW, tW)
                }
              }
              this._bindTextureDirectly(lW.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(AW, PW, EW, NW, xW);
            AW.isReady = !0, OW?.removePendingData(AW), AW.onLoadedObservable.notifyObservers(AW), AW.onLoadedObservable.clear(), wW && wW()
          };
        return this._loadFile(iW, (WW => {
          jW(WW).catch((WW => {
            bW(void 0, WW)
          }))
        }), void 0, OW?.offlineProvider, !0, bW), AW
      }, EW.ThinEngine.prototype.createRawTexture2DArray = iW(!1), EW.ThinEngine.prototype.createRawTexture3D = iW(!0), EW.ThinEngine.prototype.updateRawTexture2DArray = OW(!1), EW.ThinEngine.prototype.updateRawTexture3D = OW(!0))
    }();
    var tW = OW(41412);
    let ZW = !1;
    ZW || (ZW = !0, EW.ThinEngine.prototype._readTexturePixelsSync = function(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        wW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const ZW = this._gl;
      if (!ZW) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const WW = ZW.createFramebuffer();
        if (!WW) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = WW
      }
      ZW.bindFramebuffer(ZW.FRAMEBUFFER, this._dummyFramebuffer), mW > -1 && (WW.is2DArray || WW.is3D) ? ZW.framebufferTextureLayer(ZW.FRAMEBUFFER, ZW.COLOR_ATTACHMENT0, WW._hardwareTexture?.underlyingResource, EW, mW) : mW > -1 ? ZW.framebufferTexture2D(ZW.FRAMEBUFFER, ZW.COLOR_ATTACHMENT0, ZW.TEXTURE_CUBE_MAP_POSITIVE_X + mW, WW._hardwareTexture?.underlyingResource, EW) : ZW.framebufferTexture2D(ZW.FRAMEBUFFER, ZW.COLOR_ATTACHMENT0, ZW.TEXTURE_2D, WW._hardwareTexture?.underlyingResource, EW);
      let xW = void 0 !== WW.type ? this._getWebGLTextureType(WW.type) : ZW.UNSIGNED_BYTE;
      return LW ? NW || (NW = (0, tW.p)(WW.type, 4 * iW * OW)) : xW === ZW.UNSIGNED_BYTE ? (NW || (NW = new Uint8Array(4 * iW * OW)), xW = ZW.UNSIGNED_BYTE) : (NW || (NW = new Float32Array(4 * iW * OW)), xW = ZW.FLOAT), PW && this.flushFramebuffer(), ZW.readPixels(cW, wW, iW, OW, ZW.RGBA, xW, NW), ZW.bindFramebuffer(ZW.FRAMEBUFFER, this._currentFramebuffer), NW
    }, EW.ThinEngine.prototype._readTexturePixels = function(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        wW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW))
    }), (0, OW(41484).b)();
    let xW = !1;
    xW || (xW = !0, EW.ThinEngine.prototype._createDepthStencilCubeTexture = function(WW, iW) {
      const OW = new PW.e(this, 12);
      if (OW.isCube = !0, 1 === this.bb) return LW.b.Error("Depth cube texture is not supported by WebGL 1."), OW;
      const mW = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...iW
        },
        EW = this._gl;
      this._bindTextureDirectly(EW.TEXTURE_CUBE_MAP, OW, !0), this._setupDepthStencilTexture(OW, WW, mW.bilinearFiltering, mW.comparisonFunction);
      for (let NW = 0; NW < 6; NW++) mW.generateStencil ? EW.texImage2D(EW.TEXTURE_CUBE_MAP_POSITIVE_X + NW, 0, EW.DEPTH24_STENCIL8, WW, WW, 0, EW.DEPTH_STENCIL, EW.UNSIGNED_INT_24_8, null) : EW.texImage2D(EW.TEXTURE_CUBE_MAP_POSITIVE_X + NW, 0, EW.DEPTH_COMPONENT24, WW, WW, 0, EW.DEPTH_COMPONENT, EW.UNSIGNED_INT, null);
      return this._bindTextureDirectly(EW.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(OW), OW
    }, EW.ThinEngine.prototype._setCubeMapTextureParams = function(WW, iW, OW) {
      const mW = this._gl;
      mW.texParameteri(mW.TEXTURE_CUBE_MAP, mW.TEXTURE_MAG_FILTER, mW.LINEAR), mW.texParameteri(mW.TEXTURE_CUBE_MAP, mW.TEXTURE_MIN_FILTER, iW ? mW.LINEAR_MIPMAP_LINEAR : mW.LINEAR), mW.texParameteri(mW.TEXTURE_CUBE_MAP, mW.TEXTURE_WRAP_S, mW.CLAMP_TO_EDGE), mW.texParameteri(mW.TEXTURE_CUBE_MAP, mW.TEXTURE_WRAP_T, mW.CLAMP_TO_EDGE), WW.samplingMode = iW ? 3 : 2, iW && this.getCaps().textureMaxLevel && void 0 !== OW && OW > 0 && (mW.texParameteri(mW.TEXTURE_CUBE_MAP, mW.TEXTURE_MAX_LEVEL, OW), WW._maxLodLevel = OW), this._bindTextureDirectly(mW.TEXTURE_CUBE_MAP, null)
    }, EW.ThinEngine.prototype.createCubeTexture = function(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PW = arguments.length > 6 ? arguments[6] : void 0,
        wW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        tW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ZW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        xW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        lW = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        AW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        bW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const jW = this._gl;
      return this.createCubeTextureBase(WW, iW, OW, !!mW, EW, NW, PW, wW, tW, ZW, xW, lW, (WW => this._bindTextureDirectly(jW.TEXTURE_CUBE_MAP, WW, !0)), ((WW, iW) => {
        const OW = this.needPOTTextures ? (0, cW.h)(iW[0].width, this._caps.maxCubemapTextureSize) : iW[0].width,
          NW = OW,
          wW = [jW.TEXTURE_CUBE_MAP_POSITIVE_X, jW.TEXTURE_CUBE_MAP_POSITIVE_Y, jW.TEXTURE_CUBE_MAP_POSITIVE_Z, jW.TEXTURE_CUBE_MAP_NEGATIVE_X, jW.TEXTURE_CUBE_MAP_NEGATIVE_Y, jW.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(jW.TEXTURE_CUBE_MAP, WW, !0), this._unpackFlipY(!1);
        const tW = PW ? this._getInternalFormat(PW, WW._useSRGBBuffer) : WW._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : jW.RGBA;
        let ZW = PW ? this._getInternalFormat(PW) : jW.RGBA;
        WW._useSRGBBuffer && 1 === this.bb && (ZW = tW);
        for (let mW = 0; mW < wW.length; mW++)
          if (iW[mW].width !== OW || iW[mW].height !== NW) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void LW.b.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = OW, this._workingCanvas.height = NW, this._workingContext.drawImage(iW[mW], 0, 0, iW[mW].width, iW[mW].height, 0, 0, OW, NW), jW.texImage2D(wW[mW], 0, tW, ZW, jW.UNSIGNED_BYTE, this._workingCanvas)
          } else jW.texImage2D(wW[mW], 0, tW, ZW, jW.UNSIGNED_BYTE, iW[mW]);
        mW || jW.generateMipmap(jW.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(WW, !mW), WW.width = OW, WW.height = NW, WW.isReady = !0, PW && (WW.format = PW), WW.onLoadedObservable.notifyObservers(WW), WW.onLoadedObservable.clear(), EW && EW()
      }), !!AW, bW)
    }, EW.ThinEngine.prototype.generateMipMapsForCubemap = function(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (WW.generateMipMaps) {
        const OW = this._gl;
        this._bindTextureDirectly(OW.TEXTURE_CUBE_MAP, WW, !0), OW.generateMipmap(OW.TEXTURE_CUBE_MAP), iW && this._bindTextureDirectly(OW.TEXTURE_CUBE_MAP, null)
      }
    });
    OW(41491);
    let lW = !1;
    lW || (lW = !0, EW.ThinEngine.prototype.setDepthStencilTexture = function(WW, iW, OW, mW) {
      void 0 !== WW && (iW && (this._boundUniforms[WW] = iW), OW && OW.depthStencilTexture ? this._setTexture(WW, OW, !1, !0, mW) : this._setTexture(WW, null, void 0, void 0, mW))
    });
    let AW = !1;
    AW || (AW = !0, EW.ThinEngine.prototype.createRenderTargetCubeTexture = function(WW, iW) {
      const OW = this._createHardwareRenderTargetWrapper(!1, !0, WW),
        mW = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...iW
        };
      mW.generateStencilBuffer = mW.generateDepthBuffer && mW.generateStencilBuffer, (1 !== mW.type || this._caps.textureFloatLinearFiltering) && (2 !== mW.type || this._caps.textureHalfFloatLinearFiltering) || (mW.samplingMode = 1);
      const EW = this._gl,
        NW = new PW.e(this, 5);
      this._bindTextureDirectly(EW.TEXTURE_CUBE_MAP, NW, !0);
      const cW = this._getSamplingParameters(mW.samplingMode, mW.generateMipMaps);
      1 !== mW.type || this._caps.textureFloat || (mW.type = 0, LW.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), EW.texParameteri(EW.TEXTURE_CUBE_MAP, EW.TEXTURE_MAG_FILTER, cW.mag), EW.texParameteri(EW.TEXTURE_CUBE_MAP, EW.TEXTURE_MIN_FILTER, cW.min), EW.texParameteri(EW.TEXTURE_CUBE_MAP, EW.TEXTURE_WRAP_S, EW.CLAMP_TO_EDGE), EW.texParameteri(EW.TEXTURE_CUBE_MAP, EW.TEXTURE_WRAP_T, EW.CLAMP_TO_EDGE);
      for (let PW = 0; PW < 6; PW++) EW.texImage2D(EW.TEXTURE_CUBE_MAP_POSITIVE_X + PW, 0, this._getRGBABufferInternalSizedFormat(mW.type, mW.format), WW, WW, 0, this._getInternalFormat(mW.format), this._getWebGLTextureType(mW.type), null);
      const wW = EW.createFramebuffer();
      return this._bindUnboundFramebuffer(wW), OW._depthStencilBuffer = this._setupFramebufferDepthAttachments(mW.generateStencilBuffer, mW.generateDepthBuffer, WW, WW), mW.generateMipMaps && EW.generateMipmap(EW.TEXTURE_CUBE_MAP), this._bindTextureDirectly(EW.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), OW._framebuffer = wW, OW._generateDepthBuffer = mW.generateDepthBuffer, OW._generateStencilBuffer = mW.generateStencilBuffer, NW.width = WW, NW.height = WW, NW.isReady = !0, NW.isCube = !0, NW.samples = 1, NW.generateMipMaps = mW.generateMipMaps, NW.samplingMode = mW.samplingMode, NW.type = mW.type, NW.format = mW.format, this._internalTexturesCache.push(NW), OW.setTextures(NW), OW
    });
    var bW = OW(41506),
      jW = OW(41511);
    let UW = !1;
    UW || (UW = !0, EW.ThinEngine.prototype.createPrefilteredCubeTexture = function(WW, iW, mW, EW) {
      let NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        cW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        wW = arguments.length > 6 ? arguments[6] : void 0,
        tW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ZW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        xW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(WW, iW, null, !1, (async WW => {
        if (!WW) return void(NW && NW(null));
        const cW = WW.texture;
        if (ZW ? WW.info.sphericalPolynomial && (cW._sphericalPolynomial = WW.info.sphericalPolynomial) : cW._sphericalPolynomial = cW._sphericalPolynomial ?? new bW.f, cW._source = 9, this.getCaps().textureLOD) return void(NW && NW(cW));
        const wW = this._gl,
          tW = WW.width;
        if (!tW) return;
        const {
          DDSTools: xW
        } = await OW.e(624).then((() => OW(53948))), lW = [];
        for (let OW = 0; OW < 3; OW++) {
          const NW = 1 - OW / 2,
            ZW = EW,
            AW = Math.log2(tW) * mW + EW,
            bW = ZW + (AW - ZW) * NW,
            UW = Math.round(Math.min(Math.max(bW, 0), AW)),
            kW = new PW.e(this, 2);
          if (kW.type = cW.type, kW.format = cW.format, kW.width = Math.pow(2, Math.max(Math.log2(tW) - UW, 0)), kW.height = kW.width, kW.isCube = !0, kW._cachedWrapU = 0, kW._cachedWrapV = 0, this._bindTextureDirectly(wW.TEXTURE_CUBE_MAP, kW, !0), kW.samplingMode = 2, wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_MAG_FILTER, wW.LINEAR), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_MIN_FILTER, wW.LINEAR), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_WRAP_S, wW.CLAMP_TO_EDGE), wW.texParameteri(wW.TEXTURE_CUBE_MAP, wW.TEXTURE_WRAP_T, wW.CLAMP_TO_EDGE), WW.isDDS) {
            const iW = WW.info,
              OW = WW.data;
            this._unpackFlipY(iW.isCompressed), xW.UploadDDSLevels(this, kW, OW, iW, !0, 6, UW)
          } else LW.b.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(wW.TEXTURE_CUBE_MAP, null);
          const sW = new jW.c(iW);
          sW._isCube = !0, sW._texture = kW, kW.isReady = !0, lW.push(sW)
        }
        cW._lodTextureHigh = lW[2], cW._lodTextureMid = lW[1], cW._lodTextureLow = lW[0], NW && NW(cW)
      }), cW, wW, tW, ZW, mW, EW, null, void 0, !1, xW)
    });
    var kW = OW(41446);
    let sW = !1;
    sW || (sW = !0, EW.ThinEngine.prototype.createUniformBuffer = function(WW, iW) {
      const OW = this._gl.createBuffer();
      if (!OW) throw new Error("Unable to create uniform buffer");
      const mW = new kW.b(OW);
      return this.bindUniformBuffer(mW), WW instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, WW, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(WW), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), mW.references = 1, mW
    }, EW.ThinEngine.prototype.createDynamicUniformBuffer = function(WW, iW) {
      const OW = this._gl.createBuffer();
      if (!OW) throw new Error("Unable to create dynamic uniform buffer");
      const mW = new kW.b(OW);
      return this.bindUniformBuffer(mW), WW instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, WW, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(WW), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), mW.references = 1, mW
    }, EW.ThinEngine.prototype.updateUniformBuffer = function(WW, iW, OW, mW) {
      this.bindUniformBuffer(WW), void 0 === OW && (OW = 0), void 0 === mW ? iW instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, OW, iW) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, OW, new Float32Array(iW)) : iW instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, iW.subarray(OW, OW + mW)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(iW).subarray(OW, OW + mW)), this.bindUniformBuffer(null)
    }, EW.ThinEngine.prototype.bindUniformBuffer = function(WW) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, WW ? WW.underlyingResource : null)
    }, EW.ThinEngine.prototype.bindUniformBufferBase = function(WW, iW, OW) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, iW, WW ? WW.underlyingResource : null)
    }, EW.ThinEngine.prototype.bindUniformBlock = function(WW, iW, OW) {
      const mW = WW.program,
        EW = this._gl.getUniformBlockIndex(mW, iW);
      4294967295 !== EW && this._gl.uniformBlockBinding(mW, EW, OW)
    });
    var MW = OW(41406),
      KW = OW(41423);
    let SW = !1;
    SW || (SW = !0, KW.b.prototype.displayLoadingUI = function() {
      if (!(0, MW.j)()) return;
      const WW = this.loadingScreen;
      WW && WW.displayLoadingUI()
    }, KW.b.prototype.hideLoadingUI = function() {
      if (!(0, MW.j)()) return;
      const WW = this._loadingScreen;
      WW && WW.hideLoadingUI()
    }, Object.defineProperty(KW.b.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = KW.b.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(WW) {
        this._loadingScreen = WW
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(KW.b.prototype, "loadingUIText", {
      set: function(WW) {
        this.loadingScreen.loadingUIText = WW
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(KW.b.prototype, "loadingUIBackgroundColor", {
      set: function(WW) {
        this.loadingScreen.loadingUIBackgroundColor = WW
      },
      enumerable: !0,
      configurable: !0
    })), (0, OW(41475).b)();
    let YW = !1;
    YW || (YW = !0, KW.b.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, KW.b.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, KW.b.prototype.setDepthFunction = function(WW) {
      this._depthCullingState.depthFunc = WW
    }, KW.b.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, KW.b.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, KW.b.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, KW.b.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, KW.b.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, KW.b.prototype.setDepthWrite = function(WW) {
      this._depthCullingState.depthMask = WW
    }, KW.b.prototype.setAlphaConstants = function(WW, iW, OW, mW) {
      this._alphaState.setAlphaBlendConstants(WW, iW, OW, mW)
    }, KW.b.prototype.getAlphaMode = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[WW]
    }, KW.b.prototype.getAlphaEquation = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[WW]
    });
    let yW = !1;
    yW || (yW = !0, KW.b.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, KW.b.prototype.setStencilBuffer = function(WW) {
      this._stencilState.stencilTest = WW
    }, KW.b.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, KW.b.prototype.setStencilMask = function(WW) {
      this._stencilState.stencilMask = WW
    }, KW.b.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, KW.b.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, KW.b.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, KW.b.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, KW.b.prototype.setStencilFunction = function(WW) {
      this._stencilState.stencilFunc = WW
    }, KW.b.prototype.setStencilBackFunction = function(WW) {
      this._stencilState.stencilBackFunc = WW
    }, KW.b.prototype.setStencilFunctionReference = function(WW) {
      this._stencilState.stencilFuncRef = WW
    }, KW.b.prototype.setStencilFunctionMask = function(WW) {
      this._stencilState.stencilFuncMask = WW
    }, KW.b.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, KW.b.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, KW.b.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, KW.b.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, KW.b.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, KW.b.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, KW.b.prototype.setStencilOperationFail = function(WW) {
      this._stencilState.stencilOpStencilFail = WW
    }, KW.b.prototype.setStencilBackOperationFail = function(WW) {
      this._stencilState.stencilBackOpStencilFail = WW
    }, KW.b.prototype.setStencilOperationDepthFail = function(WW) {
      this._stencilState.stencilOpDepthFail = WW
    }, KW.b.prototype.setStencilBackOperationDepthFail = function(WW) {
      this._stencilState.stencilBackOpDepthFail = WW
    }, KW.b.prototype.setStencilOperationPass = function(WW) {
      this._stencilState.stencilOpStencilDepthPass = WW
    }, KW.b.prototype.setStencilBackOperationPass = function(WW) {
      this._stencilState.stencilBackOpStencilDepthPass = WW
    }, KW.b.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, KW.b.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    OW(41553);
    let TW = !1;
    TW || (TW = !0, KW.b.prototype.createDepthStencilTexture = function(WW, iW, OW) {
      if (iW.isCube) {
        const OW = WW.width || WW;
        return this._createDepthStencilCubeTexture(OW, iW)
      }
      return this._createDepthStencilTexture(WW, iW, OW)
    });
    OW(41556), OW(41589);
    let JW = !1;
    JW || (JW = !0, EW.ThinEngine.prototype.enableScissor = function(WW, iW, OW, mW) {
      const EW = this._gl;
      EW.enable(EW.SCISSOR_TEST), EW.scissor(WW, iW, OW, mW)
    }, EW.ThinEngine.prototype.disableScissor = function() {
      const WW = this._gl;
      WW.disable(WW.SCISSOR_TEST)
    })
  },
  41362: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => KW
    });
    var mW = OW(41371),
      EW = OW(38270),
      NW = OW(41384),
      PW = OW(41431);
    class LW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new cW(WW)
      }
      sampleFrame() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.d.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const iW = WW - this._lastFrameTimeMs;
            this._rollingFrameTime.add(iW)
          }
          this._lastFrameTimeMs = WW
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
        const WW = this._rollingFrameTime.history(0);
        return 0 === WW ? 0 : 1e3 / WW
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
    class cW {
      constructor(WW) {
        this._samples = new Array(WW), this.reset()
      }
      add(WW) {
        let iW;
        if (this.isSaturated()) {
          const WW = this._samples[this._pos];
          iW = WW - this.average, this.average -= iW / (this._sampleCount - 1), this._m2 -= iW * (WW - this.average)
        } else this._sampleCount++;
        iW = WW - this.average, this.average += iW / this._sampleCount, this._m2 += iW * (WW - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = WW, this._pos++, this._pos %= this._samples.length
      }
      history(WW) {
        if (WW >= this._sampleCount || WW >= this._samples.length) return 0;
        const iW = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(iW - WW)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(WW) {
        const iW = this._samples.length;
        return (WW % iW + iW) % iW
      }
    }
    var wW = OW(41446),
      tW = OW(39911),
      ZW = OW(41463),
      xW = OW(41423),
      lW = OW(41406);

    function AW(WW) {
      const iW = function(WW) {
        if (!(0, lW.f)() || !document.body) return null;
        const iW = document.createElement("span");
        iW.textContent = "Hg", iW.style.font = WW;
        const OW = document.createElement("div");
        OW.style.display = "inline-block", OW.style.width = "1px", OW.style.height = "0px", OW.style.verticalAlign = "bottom";
        const mW = document.createElement("div");
        let EW, NW;
        mW.style.whiteSpace = "nowrap", mW.appendChild(iW), mW.appendChild(OW), document.body.appendChild(mW);
        try {
          NW = OW.getBoundingClientRect().top - iW.getBoundingClientRect().top, OW.style.verticalAlign = "baseline", EW = OW.getBoundingClientRect().top - iW.getBoundingClientRect().top
        } finally {
          document.body.removeChild(mW)
        }
        const PW = {
          ascent: EW,
          height: NW,
          descent: NW - EW
        };
        return bW(PW) ? PW : null
      }(WW);
      if (iW) return iW;
      const OW = function(WW) {
        let iW = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? iW = new OffscreenCanvas(64, 64) : (0, lW.f)() && "function" === typeof document.createElement && (iW = document.createElement("canvas"), iW.width = 64, iW.height = 64);
          const OW = iW?.getContext("2d");
          if (!OW) return null;
          OW.font = WW;
          const mW = OW.measureText("Hg"),
            EW = Number(mW.actualBoundingBoxAscent ?? mW.fontBoundingBoxAscent),
            NW = Number(mW.actualBoundingBoxDescent ?? mW.fontBoundingBoxDescent),
            PW = {
              ascent: EW,
              height: EW + NW,
              descent: NW
            };
          return bW(PW) ? PW : null
        } catch {
          return null
        } finally {
          const WW = iW;
          "function" === typeof WW?.dispose && WW.dispose()
        }
      }(WW);
      return OW || function(WW) {
        const iW = Math.max(1, function(WW) {
            const iW = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(WW || ""));
            return iW ? Number(iW[1]) : 16
          }(WW)),
          OW = .8 * iW,
          mW = .2 * iW;
        return {
          ascent: OW,
          height: OW + mW,
          descent: mW
        }
      }(WW)
    }

    function bW(WW) {
      return Number.isFinite(WW.ascent) && Number.isFinite(WW.height) && Number.isFinite(WW.descent) && WW.height > 0
    }

    function jW(WW) {
      if (WW.requestPointerLock) {
        const iW = WW.requestPointerLock();
        iW instanceof Promise ? iW.then((() => {
          WW.focus()
        })).catch((() => {})) : WW.focus()
      }
    }
    var UW = OW(41469),
      kW = OW(41420),
      sW = OW(41475),
      MW = OW(41477);
    class KW extends NW.ThinEngine {
      static get NpmPackage() {
        return xW.b.NpmPackage
      }
      static get Version() {
        return xW.b.Version
      }
      static get Instances() {
        return EW.d.Instances
      }
      static get LastCreatedEngine() {
        return EW.d.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return EW.d.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(WW) {
        return xW.b.DefaultLoadingScreenFactory(WW)
      }
      get _supportsHardwareTextureRescaling() {
        return !!KW._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, sW.b)(), (0, MW.d)(), super(WW, iW, OW, mW), this._performanceMonitor = new LW, this._drawCalls = new UW.e, WW && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(WW) {
        super._sharedInit(WW),
          function(WW, iW, OW) {
            WW._onCanvasFocus = () => {
              WW.onCanvasFocusObservable.notifyObservers(WW)
            }, WW._onCanvasBlur = () => {
              WW.onCanvasBlurObservable.notifyObservers(WW)
            }, WW._onCanvasContextMenu = iW => {
              WW.disableContextMenu && iW.preventDefault()
            }, iW.addEventListener("focus", WW._onCanvasFocus), iW.addEventListener("blur", WW._onCanvasBlur), iW.addEventListener("contextmenu", WW._onCanvasContextMenu), WW._onBlur = () => {
              WW.disablePerformanceMonitorInBackground && WW.performanceMonitor.disable(), WW._windowIsBackground = !0
            }, WW._onFocus = () => {
              WW.disablePerformanceMonitorInBackground && WW.performanceMonitor.enable(), WW._windowIsBackground = !1
            }, WW._onCanvasPointerOut = OW => {
              document.elementFromPoint(OW.clientX, OW.clientY) !== iW && WW.onCanvasPointerOutObservable.notifyObservers(OW)
            };
            const mW = WW.getHostWindow();
            mW && "function" === typeof mW.addEventListener && (mW.addEventListener("blur", WW._onBlur), mW.addEventListener("focus", WW._onFocus)), iW.addEventListener("pointerout", WW._onCanvasPointerOut), OW.doNotHandleTouchAction || function(WW) {
              WW && WW.setAttribute && (WW.setAttribute("touch-action", "none"), WW.style.touchAction = "none", WW.style.webkitTapHighlightColor = "transparent")
            }(iW), !xW.b.audioEngine && OW.audioEngine && xW.b.AudioEngineFactory && (xW.b.audioEngine = xW.b.AudioEngineFactory(WW.getRenderingCanvas(), WW.getAudioContext(), WW.getAudioDestination())), (0, lW.f)() && (WW._onFullscreenChange = () => {
              WW.isFullscreen = !!document.fullscreenElement, WW.isFullscreen && WW._pointerLockRequested && iW && jW(iW)
            }, document.addEventListener("fullscreenchange", WW._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", WW._onFullscreenChange, !1), WW._onPointerLockChange = () => {
              WW.isPointerLock = document.pointerLockElement === iW
            }, document.addEventListener("pointerlockchange", WW._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", WW._onPointerLockChange, !1)), WW.enableOfflineSupport = void 0 !== xW.b.OfflineProviderFactory, WW._deterministicLockstep = !!OW.deterministicLockstep, WW._lockstepMaxSteps = OW.lockstepMaxSteps || 0, WW._timeStep = OW.timeStep || 1 / 60
          }(this, WW, this._creationOptions)
      }
      resizeImageBitmap(WW, iW, OW) {
        return function(WW, iW, OW, mW) {
          const EW = WW.createCanvas(OW, mW).getContext("2d");
          if (!EW) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return EW.drawImage(iW, 0, 0), EW.getImageData(0, 0, OW, mW).data
        }(this, WW, iW, OW)
      }
      async _createImageBitmapFromSource(WW, iW) {
        return await async function(WW, iW, OW) {
          return await new Promise(((mW, EW) => {
            const NW = new Image;
            NW.onload = () => {
              NW.decode().then((() => {
                WW.createImageBitmap(NW, OW).then((WW => {
                  mW(WW)
                }))
              }))
            }, NW.onerror = () => {
              EW(`Error loading image ${NW.src}`)
            }, NW.src = iW
          }))
        }(this, WW, iW)
      }
      switchFullscreen(WW) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(WW)
      }
      enterFullscreen(WW) {
        this.isFullscreen || (this._pointerLockRequested = WW, this._renderingCanvas && function(WW) {
          const iW = WW.requestFullscreen || WW.webkitRequestFullscreen;
          iW && iW.call(WW)
        }(this._renderingCanvas))
      }
      exitFullscreen() {
        this.isFullscreen && function() {
          const WW = document;
          document.exitFullscreen ? document.exitFullscreen() : WW.webkitCancelFullScreen && WW.webkitCancelFullScreen()
        }()
      }
      setDitheringState(WW) {
        WW ? this._gl.enable(this._gl.DITHER) : this._gl.disable(this._gl.DITHER)
      }
      setRasterizerState(WW) {
        WW ? this._gl.disable(this._gl.RASTERIZER_DISCARD) : this._gl.enable(this._gl.RASTERIZER_DISCARD)
      }
      setDirectViewport(WW, iW, OW, mW) {
        const EW = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(WW, iW, OW, mW), EW
      }
      scissorClear(WW, iW, OW, mW, EW) {
        this.enableScissor(WW, iW, OW, mW), this.clear(EW, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(WW) {
        const iW = this._gl.getAttachedShaders(WW);
        return iW ? this._gl.getShaderSource(iW[0]) : null
      }
      getFragmentShaderSource(WW) {
        const iW = this._gl.getAttachedShaders(WW);
        return iW ? this._gl.getShaderSource(iW[1]) : null
      }
      set framebufferDimensionsObject(WW) {
        this._framebufferDimensionsObject = WW, this._framebufferDimensionsObject && this.onResizeObservable.notifyObservers(this)
      }
      _rebuildBuffers() {
        for (const WW of this.scenes) WW.resetCachedMaterial(), WW._rebuildGeometries();
        for (const WW of this._virtualScenes) WW.resetCachedMaterial(), WW._rebuildGeometries();
        super._rebuildBuffers()
      }
      getFontOffset(WW) {
        return AW(WW)
      }
      enterPointerlock() {
        this._renderingCanvas && jW(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      AY() {
        this._measureFps(), super.AY()
      }
      _deletePipelineContext(WW) {
        const iW = WW;
        iW && iW.program && iW.transformFeedback && (this.deleteTransformFeedback(iW.transformFeedback), iW.transformFeedback = null), super._deletePipelineContext(WW)
      }
      createShaderProgram(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        EW = EW || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const PW = super.createShaderProgram(WW, iW, OW, mW, EW, NW);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), PW
      }
      _createShaderProgram(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const NW = mW.createProgram();
        if (WW.program = NW, !NW) throw new Error("Unable to create program");
        if (mW.attachShader(NW, iW), mW.attachShader(NW, OW), this.bb > 1 && EW) {
          const iW = this.createTransformFeedback();
          this.bindTransformFeedback(iW), this.setTranformFeedbackVaryings(NW, EW), WW.transformFeedback = iW
        }
        return mW.linkProgram(NW), this.bb > 1 && EW && this.bindTransformFeedback(null), WW.context = mW, WW.vertexShader = iW, WW.fragmentShader = OW, WW.isParallelCompiled || this._finalizePipelineContext(WW), NW
      }
      _releaseTexture(WW) {
        super._releaseTexture(WW)
      }
      _releaseRenderTargetWrapper(WW) {
        super._releaseRenderTargetWrapper(WW);
        for (const iW of this.scenes) {
          for (const OW of iW.postProcesses) OW._outputTexture === WW && (OW._outputTexture = null);
          for (const OW of iW.cameras)
            for (const iW of OW._postProcesses) iW && iW._outputTexture === WW && (iW._outputTexture = null)
        }
      }
      _rescaleTexture(WW, iW, OW, mW, EW) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const NW = this.createRenderTargetTexture({
          width: iW.width,
          height: iW.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && KW._RescalePostProcessFactory && (this._rescalePostProcess = KW._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const PW = () => {
              this._rescalePostProcess.onApply = function(iW) {
                iW._bindTexture("textureSampler", WW)
              };
              let PW = OW;
              PW || (PW = this.scenes[this.scenes.length - 1]), PW.postProcessManager.directRender([this._rescalePostProcess], NW, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, iW, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, mW, 0, 0, iW.width, iW.height, 0), this.unBindFramebuffer(NW), NW.dispose(), EW && EW()
            },
            LW = this._rescalePostProcess.getEffect();
          LW ? LW.executeWhenCompiled(PW) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((WW => {
            WW.executeWhenCompiled(PW)
          }))
        }
      }
      wrapWebGLTexture(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const PW = new ZW.c(WW, this._gl),
          LW = new mW.e(this, 15, !0);
        return LW._hardwareTexture = PW, LW.baseWidth = EW, LW.baseHeight = NW, LW.width = EW, LW.height = NW, LW.isReady = !0, LW.useMipMaps = iW, this.updateTextureSamplingMode(OW, LW), LW
      }
      updateWrappedWebGLTexture(WW, iW) {
        if (15 !== WW.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const mW of this._renderTargetWrapperCache)
          if (mW.textures?.includes(WW)) {
            if (mW.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (mW._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } WW._hardwareTexture = new ZW.c(iW, this._gl), WW.isReady = !0, WW._cachedCoordinatesMode = null, WW._cachedWrapU = null, WW._cachedWrapV = null, WW._cachedWrapR = null, WW._cachedAnisotropicFilteringLevel = null;
        for (const mW in this._boundTexturesCache) this._boundTexturesCache[mW] === WW && (this._boundTexturesCache[mW] = null);
        this.updateTextureSamplingMode(WW.samplingMode, WW);
        const OW = this._gl;
        for (const mW of this._renderTargetWrapperCache) {
          if (mW.texture !== WW) continue;
          const EW = mW,
            NW = mW.samples,
            PW = NW > 1;
          EW._framebuffer && OW.deleteFramebuffer(EW._framebuffer), !PW && EW._depthStencilBuffer && (OW.deleteRenderbuffer(EW._depthStencilBuffer), EW._depthStencilBuffer = null);
          const LW = this._currentFramebuffer,
            cW = OW.createFramebuffer();
          this._bindUnboundFramebuffer(cW), OW.framebufferTexture2D(OW.FRAMEBUFFER, OW.COLOR_ATTACHMENT0, OW.TEXTURE_2D, iW, 0), PW || (EW._depthStencilBuffer = this._setupFramebufferDepthAttachments(mW._generateStencilBuffer, mW._generateDepthBuffer, mW.width, mW.height)), this._bindUnboundFramebuffer(LW), EW._framebuffer = cW, PW && (mW._samples = 1, this.updateRenderTargetTextureSampleCount(EW, NW))
        }
      }
      _uploadImageToTexture(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const EW = this._gl,
          NW = this._getWebGLTextureType(WW.type),
          PW = this._getInternalFormat(WW.format),
          LW = this._getRGBABufferInternalSizedFormat(WW.type, PW),
          cW = WW.isCube ? EW.TEXTURE_CUBE_MAP : EW.TEXTURE_2D;
        this._bindTextureDirectly(cW, WW, !0), this._unpackFlipY(WW.invertY);
        let wW = EW.TEXTURE_2D;
        WW.isCube && (wW = EW.TEXTURE_CUBE_MAP_POSITIVE_X + OW), EW.texImage2D(wW, mW, LW, PW, NW, iW), this._bindTextureDirectly(cW, null, !0)
      }
      updateTextureComparisonFunction(WW, iW) {
        if (1 === this.bb) return void tW.b.Error("WebGL 1 does not support texture comparison.");
        const OW = this._gl;
        WW.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, WW, !0), 0 === iW ? (OW.texParameteri(OW.TEXTURE_CUBE_MAP, OW.TEXTURE_COMPARE_FUNC, 515), OW.texParameteri(OW.TEXTURE_CUBE_MAP, OW.TEXTURE_COMPARE_MODE, OW.NONE)) : (OW.texParameteri(OW.TEXTURE_CUBE_MAP, OW.TEXTURE_COMPARE_FUNC, iW), OW.texParameteri(OW.TEXTURE_CUBE_MAP, OW.TEXTURE_COMPARE_MODE, OW.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, WW, !0), 0 === iW ? (OW.texParameteri(OW.TEXTURE_2D, OW.TEXTURE_COMPARE_FUNC, 515), OW.texParameteri(OW.TEXTURE_2D, OW.TEXTURE_COMPARE_MODE, OW.NONE)) : (OW.texParameteri(OW.TEXTURE_2D, OW.TEXTURE_COMPARE_FUNC, iW), OW.texParameteri(OW.TEXTURE_2D, OW.TEXTURE_COMPARE_MODE, OW.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), WW._comparisonFunction = iW
      }
      createInstancesBuffer(WW) {
        const iW = this._gl.createBuffer();
        if (!iW) throw new Error("Unable to create instance buffer");
        const OW = new wW.b(iW);
        return OW.aZ = WW, this.bindArrayBuffer(OW), this._gl.bufferData(this._gl.ARRAY_BUFFER, WW, this._gl.DYNAMIC_DRAW), OW.references = 1, OW
      }
      deleteInstancesBuffer(WW) {
        this._gl.deleteBuffer(WW)
      }
      async _clientWaitAsync(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const mW = this._gl;
        return await new Promise(((EW, NW) => {
          (0, kW.g)((() => {
            const OW = mW.clientWaitSync(WW, iW, 0);
            if (OW == mW.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return OW != mW.TIMEOUT_EXPIRED
          }), EW, NW, OW)
        }))
      }
      _readPixelsAsync(WW, iW, OW, mW, EW, NW, PW) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const LW = this._gl,
          cW = LW.createBuffer();
        LW.bindBuffer(LW.PIXEL_PACK_BUFFER, cW), LW.bufferData(LW.PIXEL_PACK_BUFFER, PW.byteLength, LW.STREAM_READ), LW.readPixels(WW, iW, OW, mW, EW, NW, 0), LW.bindBuffer(LW.PIXEL_PACK_BUFFER, null);
        const wW = LW.fenceSync(LW.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return wW ? (LW.flush(), this._clientWaitAsync(wW, 0, 10).then((() => (LW.deleteSync(wW), LW.bindBuffer(LW.PIXEL_PACK_BUFFER, cW), LW.getBufferSubData(LW.PIXEL_PACK_BUFFER, 0, PW), LW.bindBuffer(LW.PIXEL_PACK_BUFFER, null), LW.deleteBuffer(cW), PW)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(WW, iW) {
            1 === EW.d.Instances.length && xW.b.audioEngine && (xW.b.audioEngine.dispose(), xW.b.audioEngine = null);
            const OW = WW.getHostWindow();
            OW && "function" === typeof OW.removeEventListener && (OW.removeEventListener("blur", WW._onBlur), OW.removeEventListener("focus", WW._onFocus)), iW && (iW.removeEventListener("focus", WW._onCanvasFocus), iW.removeEventListener("blur", WW._onCanvasBlur), iW.removeEventListener("pointerout", WW._onCanvasPointerOut), iW.removeEventListener("contextmenu", WW._onCanvasContextMenu)), (0, lW.f)() && (document.removeEventListener("fullscreenchange", WW._onFullscreenChange), document.removeEventListener("mozfullscreenchange", WW._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", WW._onFullscreenChange), document.removeEventListener("msfullscreenchange", WW._onFullscreenChange), document.removeEventListener("pointerlockchange", WW._onPointerLockChange), document.removeEventListener("mspointerlockchange", WW._onPointerLockChange), document.removeEventListener("mozpointerlockchange", WW._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", WW._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    KW.ALPHA_DISABLE = 0, KW.ALPHA_ADD = 1, KW.ALPHA_COMBINE = 2, KW.ALPHA_SUBTRACT = 3, KW.ALPHA_MULTIPLY = 4, KW.ALPHA_MAXIMIZED = 5, KW.ALPHA_ONEONE = 6, KW.ALPHA_PREMULTIPLIED = 7, KW.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, KW.ALPHA_INTERPOLATE = 9, KW.ALPHA_SCREENMODE = 10, KW.DELAYLOADSTATE_NONE = 0, KW.DELAYLOADSTATE_LOADED = 1, KW.DELAYLOADSTATE_LOADING = 2, KW.DELAYLOADSTATE_NOTLOADED = 4, KW.NEVER = 512, KW.ALWAYS = 519, KW.LESS = 513, KW.EQUAL = 514, KW.LEQUAL = 515, KW.GREATER = 516, KW.GEQUAL = 518, KW.NOTEQUAL = 517, KW.KEEP = 7680, KW.REPLACE = 7681, KW.INCR = 7682, KW.DECR = 7683, KW.INVERT = 5386, KW.INCR_WRAP = 34055, KW.DECR_WRAP = 34056, KW.TEXTURE_CLAMP_ADDRESSMODE = 0, KW.TEXTURE_WRAP_ADDRESSMODE = 1, KW.TEXTURE_MIRROR_ADDRESSMODE = 2, KW.TEXTUREFORMAT_ALPHA = 0, KW.TEXTUREFORMAT_LUMINANCE = 1, KW.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, KW.TEXTUREFORMAT_RGB = 4, KW.TEXTUREFORMAT_RGBA = 5, KW.TEXTUREFORMAT_RED = 6, KW.TEXTUREFORMAT_R = 6, KW.TEXTUREFORMAT_R16_UNORM = 33322, KW.TEXTUREFORMAT_RG16_UNORM = 33324, KW.TEXTUREFORMAT_RGB16_UNORM = 32852, KW.TEXTUREFORMAT_RGBA16_UNORM = 32859, KW.TEXTUREFORMAT_R16_SNORM = 36760, KW.TEXTUREFORMAT_RG16_SNORM = 36761, KW.TEXTUREFORMAT_RGB16_SNORM = 36762, KW.TEXTUREFORMAT_RGBA16_SNORM = 36763, KW.TEXTUREFORMAT_RG = 7, KW.TEXTUREFORMAT_RED_INTEGER = 8, KW.TEXTUREFORMAT_R_INTEGER = 8, KW.TEXTUREFORMAT_RG_INTEGER = 9, KW.TEXTUREFORMAT_RGB_INTEGER = 10, KW.TEXTUREFORMAT_RGBA_INTEGER = 11, KW.TEXTURETYPE_UNSIGNED_BYTE = 0, KW.TEXTURETYPE_UNSIGNED_INT = 0, KW.TEXTURETYPE_FLOAT = 1, KW.TEXTURETYPE_HALF_FLOAT = 2, KW.TEXTURETYPE_BYTE = 3, KW.TEXTURETYPE_SHORT = 4, KW.TEXTURETYPE_UNSIGNED_SHORT = 5, KW.TEXTURETYPE_INT = 6, KW.TEXTURETYPE_UNSIGNED_INTEGER = 7, KW.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, KW.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, KW.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, KW.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, KW.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, KW.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, KW.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, KW.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, KW.TEXTURE_NEAREST_SAMPLINGMODE = 1, KW.TEXTURE_BILINEAR_SAMPLINGMODE = 2, KW.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, KW.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, KW.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, KW.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, KW.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, KW.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, KW.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, KW.TEXTURE_NEAREST_LINEAR = 7, KW.TEXTURE_NEAREST_NEAREST = 1, KW.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, KW.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, KW.TEXTURE_LINEAR_LINEAR = 2, KW.TEXTURE_LINEAR_NEAREST = 12, KW.TEXTURE_EXPLICIT_MODE = 0, KW.TEXTURE_SPHERICAL_MODE = 1, KW.TEXTURE_PLANAR_MODE = 2, KW.TEXTURE_CUBIC_MODE = 3, KW.TEXTURE_PROJECTION_MODE = 4, KW.TEXTURE_SKYBOX_MODE = 5, KW.TEXTURE_INVCUBIC_MODE = 6, KW.TEXTURE_EQUIRECTANGULAR_MODE = 7, KW.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, KW.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, KW.SCALEMODE_FLOOR = 1, KW.SCALEMODE_NEAREST = 2, KW.SCALEMODE_CEILING = 3
  },
  41500: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(41467);
    class EW {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(WW) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = WW, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, WW && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, mW.c)(WW.format))
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
      getBaseArrayLayer(WW) {
        if (!this._textures) return -1;
        const iW = this._textures[WW],
          OW = this._layerIndices?.[WW] ?? 0,
          mW = this._faceIndices?.[WW] ?? 0;
        return iW.isCube ? 6 * OW + mW : iW.is3D ? 0 : OW
      }
      get samples() {
        return this._samples
      }
      setSamples(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === WW && !OW) return WW;
        const mW = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, WW, iW) : this._engine.updateRenderTargetTextureSampleCount(this, WW);
        return this._samples = WW, mW
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(WW, iW, OW, mW, EW) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = WW, this._isCube = iW, this._size = OW, this._engine = mW, this._depthStencilTexture = null, this.label = EW
      }
      setTextures(WW) {
        Array.isArray(WW) ? this._textures = WW : this._textures = WW ? [WW] : null
      }
      setTexture(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[iW] !== WW && (this._textures[iW] && OW && this._textures[iW].dispose(), this._textures[iW] = WW)
      }
      setLayerAndFaceIndices(WW, iW) {
        this._layerIndices = WW, this._faceIndices = iW
      }
      setLayerAndFaceIndex() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== iW && iW >= 0 && (this._layerIndices[WW] = iW), void 0 !== OW && OW >= 0 && (this._faceIndices[WW] = OW)
      }
      createDepthStencilTexture() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = OW, this._depthStencilTextureLabel = NW, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: iW,
          comparisonFunction: WW,
          generateStencil: OW,
          isCube: this._isCube,
          samples: mW,
          depthTextureFormat: EW,
          label: NW
        }, this), this._depthStencilTexture
      }
      _shareDepth(WW) {
        this.shareDepth(WW)
      }
      shareDepth(WW) {
        this._depthStencilTexture && (WW._depthStencilTexture && WW._depthStencilTexture.dispose(), WW._depthStencilTexture = this._depthStencilTexture, WW._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil, this._depthStencilTexture.incrementReferences())
      }
      _swapAndDie(WW) {
        this.texture && this.texture._swapAndDie(WW), this._textures = null, this.dispose(!0)
      }
      _cloneRenderTargetWrapper() {
        let WW = null;
        if (this._isMulti) {
          const iW = this.textures;
          if (iW && iW.length > 0) {
            let OW = !1,
              mW = iW.length,
              EW = -1;
            const NW = iW[iW.length - 1]._source;
            14 !== NW && 12 !== NW || (OW = !0, EW = iW[iW.length - 1].format, mW--);
            const PW = [],
              LW = [],
              cW = [],
              wW = [],
              tW = [],
              ZW = [],
              xW = [],
              lW = {};
            for (let WW = 0; WW < mW; ++WW) {
              const OW = iW[WW];
              PW.push(OW.samplingMode), LW.push(OW.type), cW.push(OW.format);
              void 0 !== lW[OW.uniqueId] ? (wW.push(-1), xW.push(0)) : (lW[OW.uniqueId] = WW, OW.is2DArray ? (wW.push(35866), xW.push(OW.depth)) : OW.isCube ? (wW.push(34067), xW.push(0)) : OW.is3D ? (wW.push(32879), xW.push(OW.depth)) : (wW.push(3553), xW.push(0))), this._faceIndices && tW.push(this._faceIndices[WW] ?? 0), this._layerIndices && ZW.push(this._layerIndices[WW] ?? 0)
            }
            const AW = {
                samplingModes: PW,
                generateMipMaps: iW[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: OW,
                depthTextureFormat: EW,
                types: LW,
                formats: cW,
                ALW: mW,
                targetTypes: wW,
                faceIndex: tW,
                layerIndex: ZW,
                layerCounts: xW,
                label: this.label
              },
              bW = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            WW = this._engine.createMultipleRenderTarget(bW, AW);
            for (let jW = 0; jW < mW; ++jW) {
              if (-1 !== wW[jW]) continue;
              const OW = lW[iW[jW].uniqueId];
              WW.setTexture(WW.textures[OW], jW)
            }
          }
        } else {
          const iW = {};
          if (iW.generateDepthBuffer = this._generateDepthBuffer, iW.generateMipMaps = this.texture?.generateMipMaps ?? !1, iW.generateStencilBuffer = this._generateStencilBuffer, iW.samplingMode = this.texture?.samplingMode, iW.type = this.texture?.type, iW.format = this.texture?.format, iW.noColorAttachment = !this._textures, iW.label = this.label, this.isCube) WW = this._engine.createRenderTargetCubeTexture(this.width, iW);
          else {
            const OW = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            WW = this._engine.createRenderTargetTexture(OW, iW)
          }
          WW.texture && (WW.texture.isReady = !0)
        }
        return WW
      }
      _swapRenderTargetWrapper(WW) {
        if (this._textures && WW._textures)
          for (let iW = 0; iW < this._textures.length; ++iW) this._textures[iW]._swapAndDie(WW._textures[iW], !1), WW._textures[iW].isReady = !0;
        this._depthStencilTexture && WW._depthStencilTexture && (this._depthStencilTexture._swapAndDie(WW._depthStencilTexture), WW._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const WW = this._cloneRenderTargetWrapper();
        if (WW) {
          if (this._depthStencilTexture) {
            const iW = this._depthStencilTexture.samplingMode,
              OW = this._depthStencilTexture.format,
              mW = 2 === iW || 3 === iW || 11 === iW;
            WW.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, mW, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, OW, this._depthStencilTextureLabel)
          }
          this.samples > 1 && WW.setSamples(this.samples), WW._swapRenderTargetWrapper(this), WW.dispose()
        }
      }
      releaseTextures() {
        if (this._textures)
          for (let WW = 0; WW < this._textures.length; ++WW) this._textures[WW].dispose();
        this._textures = null
      }
      dispose() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (this._depthStencilTexture?.dispose(), this._depthStencilTexture = null, this.releaseTextures()), this._engine._releaseRenderTargetWrapper(this)
      }
    }
  },
  41936: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    class mW {
      static get ForceFullSceneLoadingForIncremental() {
        return mW._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(WW) {
        mW._ForceFullSceneLoadingForIncremental = WW
      }
      static get ShowLoadingScreen() {
        return mW._ShowLoadingScreen
      }
      static set ShowLoadingScreen(WW) {
        mW._ShowLoadingScreen = WW
      }
      static get loggingLevel() {
        return mW._LoggingLevel
      }
      static set loggingLevel(WW) {
        mW._LoggingLevel = WW
      }
      static get CleanBoneMatrixWeights() {
        return mW._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(WW) {
        mW._CleanBoneMatrixWeights = WW
      }
    }
    mW._ForceFullSceneLoadingForIncremental = !1, mW._ShowLoadingScreen = !0, mW._CleanBoneMatrixWeights = !1, mW._LoggingLevel = 0
  },
  41595: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(39911);
    const EW = new Map;

    function NW(WW, iW) {
      (function(WW) {
        return EW.delete(WW)
      })(WW) && mW.b.Warn(`Extension with the name '${WW}' already exists`), EW.set(WW, iW)
    }

    function PW(WW, iW) {
      "image/ktx" !== iW && "image/ktx2" !== iW || (WW = ".ktx"), EW.has(WW) || (WW.endsWith(".ies") && NW(".ies", (async () => await OW.e(627).then((() => OW(53955))).then((WW => new WW._IESTextureLoader)))), WW.endsWith(".dds") && NW(".dds", (async () => await OW.e(625).then((() => OW(53960))).then((WW => new WW._DDSTextureLoader)))), WW.endsWith(".basis") && NW(".basis", (async () => await OW.e(628).then((() => OW(53968))).then((WW => new WW._BasisTextureLoader)))), WW.endsWith(".env") && NW(".env", (async () => await Promise.all([OW.e(629), OW.e(626)]).then((() => OW(53970))).then((WW => new WW._ENVTextureLoader)))), WW.endsWith(".hdr") && NW(".hdr", (async () => await OW.e(630).then((() => OW(54017))).then((WW => new WW._HDRTextureLoader)))), (WW.endsWith(".ktx") || WW.endsWith(".ktx2")) && (NW(".ktx", (async () => await OW.e(631).then((() => OW(54022))).then((WW => new WW._KTXTextureLoader)))), NW(".ktx2", (async () => await OW.e(631).then((() => OW(54022))).then((WW => new WW._KTXTextureLoader))))), WW.endsWith(".tga") && NW(".tga", (async () => await OW.e(632).then((() => OW(54033))).then((WW => new WW._TGATextureLoader)))), WW.endsWith(".exr") && NW(".exr", (async () => await OW.e(633).then((() => OW(54040))).then((WW => new WW._ExrTextureLoader)))));
      const mW = EW.get(WW);
      return mW ? Promise.resolve(mW(iW)) : null
    }
  },
  41957: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      f: () => wW
    });
    var mW = OW(41805),
      EW = OW(41544),
      NW = OW(38299);
    class PW extends mW.d {
      get MWW() {
        return this._subMaterials
      }
      set MWW(WW) {
        this._subMaterials = WW, this._hookArray(WW)
      }
      getChildren() {
        return this.MWW
      }
      constructor(WW, iW) {
        super(WW, iW, !0), this._waitingSubMaterialsUniqueIds = [], this.bD().addMultiMaterial(this), this.MWW = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(WW) {
        var iW = this;
        const OW = WW.push;
        WW.push = function() {
          for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
          const PW = OW.apply(WW, EW);
          return iW._markAllSubMeshesAsTexturesDirty(), PW
        };
        const mW = WW.splice;
        WW.splice = (iW, OW) => {
          const EW = mW.call(WW, iW, OW ?? WW.length);
          return this._markAllSubMeshesAsTexturesDirty(), EW
        }
      }
      getSubMaterial(WW) {
        return WW < 0 || WW >= this.MWW.length ? this.bD().defaultMaterial : this.MWW[WW]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.MWW.map((WW => WW ? WW.getActiveTextures() : [])))
      }
      hasTexture(WW) {
        if (super.hasTexture(WW)) return !0;
        for (let iW = 0; iW < this.MWW.length; iW++)
          if (this.MWW[iW]?.hasTexture(WW)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(WW, iW, OW) {
        for (let mW = 0; mW < this.MWW.length; mW++) {
          const EW = this.MWW[mW];
          if (EW) {
            if (EW._storeEffectOnSubMeshes) {
              if (!EW.isReadyForSubMesh(WW, iW, OW)) return !1;
              continue
            }
            if (!EW.isReady(WW)) return !1
          }
        }
        return !0
      }
      clone(WW, iW) {
        const OW = new PW(WW, this.bD());
        for (let mW = 0; mW < this.MWW.length; mW++) {
          let EW;
          const NW = this.MWW[mW];
          EW = iW && NW ? NW.clone(WW + "-" + NW.name) : this.MWW[mW], OW.MWW.push(EW)
        }
        return OW
      }
      serialize() {
        const WW = {};
        WW.name = this.name, WW.id = this.id, WW.uniqueId = this.uniqueId, EW.d && (WW.tags = EW.d.GetTags(this)), WW.materialsUniqueIds = [], WW.materials = [];
        for (let iW = 0; iW < this.MWW.length; iW++) {
          const OW = this.MWW[iW];
          OW ? (WW.materialsUniqueIds.push(OW.uniqueId), WW.materials.push(OW.id)) : (WW.materialsUniqueIds.push(null), WW.materials.push(null))
        }
        return WW
      }
      dispose(WW, iW, OW) {
        const mW = this.bD();
        if (!mW) return;
        if (OW)
          for (let NW = 0; NW < this.MWW.length; NW++) {
            const OW = this.MWW[NW];
            OW && OW.dispose(WW, iW)
          }
        const EW = mW.multiMaterials.indexOf(this);
        EW >= 0 && mW.multiMaterials.splice(EW, 1), super.dispose(WW, iW)
      }
    }
    let LW = !1;

    function cW(WW, iW) {
      const OW = new PW(WW.name, iW);
      if (OW.id = WW.id, OW._loadedUniqueId = WW.uniqueId, EW.d && EW.d.AddTagsTo(OW, WW.tags), WW.materialsUniqueIds) OW._waitingSubMaterialsUniqueIds = WW.materialsUniqueIds;
      else
        for (const mW of WW.materials) OW.MWW.push(iW.getLastMaterialById(mW));
      return OW
    }

    function wW() {
      LW || (LW = !0, PW.ParseMultiMaterial = cW, (0, NW.h)("BABYLON.MultiMaterial", PW))
    }
  },
  41739: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW, EW, NW = OW(38241);
    ! function(WW) {
      WW[WW.LOCAL = 0] = "LOCAL", WW[WW.WORLD = 1] = "WORLD", WW[WW.BONE = 2] = "BONE"
    }(mW || (mW = {}));
    class PW {}
    PW.X = new NW.q(1, 0, 0), PW.Y = new NW.q(0, 1, 0), PW.Z = new NW.q(0, 0, 1),
      function(WW) {
        WW[WW.X = 0] = "X", WW[WW.Y = 1] = "Y", WW[WW.Z = 2] = "Z"
      }(EW || (EW = {}))
  },
  41506: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      f: () => wW
    });
    var mW = OW(38241);
    const EW = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      NW = [() => 1, WW => WW.y, WW => WW.z, WW => WW.x, WW => WW.x * WW.y, WW => WW.y * WW.z, WW => 3 * WW.z * WW.z - 1, WW => WW.x * WW.z, WW => WW.x * WW.x - WW.y * WW.y],
      PW = (WW, iW) => EW[WW] * NW[WW](iW),
      LW = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class cW {
      constructor() {
        this.preScaled = !1, this.l00 = mW.q.Zero(), this.l1_1 = mW.q.Zero(), this.l10 = mW.q.Zero(), this.l11 = mW.q.Zero(), this.l2_2 = mW.q.Zero(), this.l2_1 = mW.q.Zero(), this.l20 = mW.q.Zero(), this.l21 = mW.q.Zero(), this.l22 = mW.q.Zero()
      }
      addLight(WW, iW, OW) {
        mW.l.fA[0].set(iW.r, iW.g, iW.b);
        const EW = mW.l.fA[0],
          NW = mW.l.fA[1];
        EW.scaleToRef(OW, NW), NW.scaleToRef(PW(0, WW), mW.l.fA[2]), this.l00.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(1, WW), mW.l.fA[2]), this.l1_1.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(2, WW), mW.l.fA[2]), this.l10.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(3, WW), mW.l.fA[2]), this.l11.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(4, WW), mW.l.fA[2]), this.l2_2.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(5, WW), mW.l.fA[2]), this.l2_1.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(6, WW), mW.l.fA[2]), this.l20.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(7, WW), mW.l.fA[2]), this.l21.addInPlace(mW.l.fA[2]), NW.scaleToRef(PW(8, WW), mW.l.fA[2]), this.l22.addInPlace(mW.l.fA[2])
      }
      scaleInPlace(WW) {
        this.l00.scaleInPlace(WW), this.l1_1.scaleInPlace(WW), this.l10.scaleInPlace(WW), this.l11.scaleInPlace(WW), this.l2_2.scaleInPlace(WW), this.l2_1.scaleInPlace(WW), this.l20.scaleInPlace(WW), this.l21.scaleInPlace(WW), this.l22.scaleInPlace(WW)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(LW[0]), this.l1_1.scaleInPlace(LW[1]), this.l10.scaleInPlace(LW[2]), this.l11.scaleInPlace(LW[3]), this.l2_2.scaleInPlace(LW[4]), this.l2_1.scaleInPlace(LW[5]), this.l20.scaleInPlace(LW[6]), this.l21.scaleInPlace(LW[7]), this.l22.scaleInPlace(LW[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(EW[0]), this.l1_1.scaleInPlace(EW[1]), this.l10.scaleInPlace(EW[2]), this.l11.scaleInPlace(EW[3]), this.l2_2.scaleInPlace(EW[4]), this.l2_1.scaleInPlace(EW[5]), this.l20.scaleInPlace(EW[6]), this.l21.scaleInPlace(EW[7]), this.l22.scaleInPlace(EW[8])
      }
      updateFromArray(WW) {
        return mW.q.FromArrayToRef(WW[0], 0, this.l00), mW.q.FromArrayToRef(WW[1], 0, this.l1_1), mW.q.FromArrayToRef(WW[2], 0, this.l10), mW.q.FromArrayToRef(WW[3], 0, this.l11), mW.q.FromArrayToRef(WW[4], 0, this.l2_2), mW.q.FromArrayToRef(WW[5], 0, this.l2_1), mW.q.FromArrayToRef(WW[6], 0, this.l20), mW.q.FromArrayToRef(WW[7], 0, this.l21), mW.q.FromArrayToRef(WW[8], 0, this.l22), this
      }
      updateFromFloatsArray(WW) {
        return mW.q.FromFloatsToRef(WW[0], WW[1], WW[2], this.l00), mW.q.FromFloatsToRef(WW[3], WW[4], WW[5], this.l1_1), mW.q.FromFloatsToRef(WW[6], WW[7], WW[8], this.l10), mW.q.FromFloatsToRef(WW[9], WW[10], WW[11], this.l11), mW.q.FromFloatsToRef(WW[12], WW[13], WW[14], this.l2_2), mW.q.FromFloatsToRef(WW[15], WW[16], WW[17], this.l2_1), mW.q.FromFloatsToRef(WW[18], WW[19], WW[20], this.l20), mW.q.FromFloatsToRef(WW[21], WW[22], WW[23], this.l21), mW.q.FromFloatsToRef(WW[24], WW[25], WW[26], this.l22), this
      }
      static FromArray(WW) {
        return (new cW).updateFromArray(WW)
      }
      static FromPolynomial(WW) {
        const iW = new cW;
        return iW.l00 = WW.xx.scale(.376127).add(WW.yy.scale(.376127)).add(WW.zz.scale(.376126)), iW.l1_1 = WW.y.scale(.977204), iW.l10 = WW.z.scale(.977204), iW.l11 = WW.x.scale(.977204), iW.l2_2 = WW.xy.scale(1.16538), iW.l2_1 = WW.yz.scale(1.16538), iW.l20 = WW.zz.scale(1.34567).subtract(WW.xx.scale(.672834)).subtract(WW.yy.scale(.672834)), iW.l21 = WW.zx.scale(1.16538), iW.l22 = WW.xx.scale(1.16538).subtract(WW.yy.scale(1.16538)), iW.l1_1.scaleInPlace(-1), iW.l11.scaleInPlace(-1), iW.l2_1.scaleInPlace(-1), iW.l21.scaleInPlace(-1), iW.scaleInPlace(Math.PI), iW
      }
    }
    class wW {
      constructor() {
        this.x = mW.q.Zero(), this.y = mW.q.Zero(), this.z = mW.q.Zero(), this.xx = mW.q.Zero(), this.yy = mW.q.Zero(), this.zz = mW.q.Zero(), this.xy = mW.q.Zero(), this.yz = mW.q.Zero(), this.zx = mW.q.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = cW.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(WW) {
        mW.l.fA[0].yWW(WW.r, WW.g, WW.b);
        const iW = mW.l.fA[0];
        this.xx.addInPlace(iW), this.yy.addInPlace(iW), this.zz.addInPlace(iW)
      }
      scaleInPlace(WW) {
        this.x.scaleInPlace(WW), this.y.scaleInPlace(WW), this.z.scaleInPlace(WW), this.xx.scaleInPlace(WW), this.yy.scaleInPlace(WW), this.zz.scaleInPlace(WW), this.yz.scaleInPlace(WW), this.zx.scaleInPlace(WW), this.xy.scaleInPlace(WW)
      }
      updateFromHarmonics(WW) {
        return this._harmonics = WW, this.x.HJ(WW.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.HJ(WW.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.HJ(WW.l10), this.z.scaleInPlace(1.02333), this.xx.HJ(WW.l00), mW.l.fA[0].HJ(WW.l20).scaleInPlace(.247708), mW.l.fA[1].HJ(WW.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).yEW(mW.l.fA[0]).addInPlace(mW.l.fA[1]), this.yy.HJ(WW.l00), this.yy.scaleInPlace(.886277).yEW(mW.l.fA[0]).yEW(mW.l.fA[1]), this.zz.HJ(WW.l00), mW.l.fA[0].HJ(WW.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(mW.l.fA[0]), this.yz.HJ(WW.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.HJ(WW.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.HJ(WW.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(WW) {
        return (new wW).updateFromHarmonics(WW)
      }
      static FromArray(WW) {
        const iW = new wW;
        return mW.q.FromArrayToRef(WW[0], 0, iW.x), mW.q.FromArrayToRef(WW[1], 0, iW.y), mW.q.FromArrayToRef(WW[2], 0, iW.z), mW.q.FromArrayToRef(WW[3], 0, iW.xx), mW.q.FromArrayToRef(WW[4], 0, iW.yy), mW.q.FromArrayToRef(WW[5], 0, iW.zz), mW.q.FromArrayToRef(WW[6], 0, iW.yz), mW.q.FromArrayToRef(WW[7], 0, iW.zx), mW.q.FromArrayToRef(WW[8], 0, iW.xy), iW
      }
    }
  },
  41942: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => oW,
      d: () => eW
    });
    var mW = OW(41516),
      EW = OW(38276),
      NW = OW(38241),
      PW = OW(41660),
      LW = OW(41927),
      cW = OW(41948),
      wW = OW(41653),
      tW = OW(41818),
      ZW = OW(41649);
    class xW {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new NW.q(0, 0, 0), this._diffPositionForCollisions = new NW.q(0, 0, 0), this._collisionResponse = !0
      }
    }
    var lW, AW, bW, jW = OW(41415),
      UW = OW(41586),
      kW = OW(41834),
      sW = OW(38372),
      MW = OW(38249),
      KW = OW(41739),
      SW = OW(39911),
      YW = OW(41519),
      yW = OW(41423),
      TW = OW(38299);

    function JW(WW, iW) {
      return WW - Math.floor(WW / iW) * iW
    }

    function hW(WW, iW, OW) {
      WW instanceof Float32Array ? NW.d.FromArrayToRef(WW, iW, OW) : OW.yWW((0, UW.d)(WW[iW]), (0, UW.d)(WW[iW + 1]), (0, UW.d)(WW[iW + 2]), (0, UW.d)(WW[iW + 3]), (0, UW.d)(WW[iW + 4]), (0, UW.d)(WW[iW + 5]), (0, UW.d)(WW[iW + 6]), (0, UW.d)(WW[iW + 7]), (0, UW.d)(WW[iW + 8]), (0, UW.d)(WW[iW + 9]), (0, UW.d)(WW[iW + 10]), (0, UW.d)(WW[iW + 11]), (0, UW.d)(WW[iW + 12]), (0, UW.d)(WW[iW + 13]), (0, UW.d)(WW[iW + 14]), (0, UW.d)(WW[iW + 15]))
    }

    function HW(WW, iW, OW, mW, EW, LW, cW, wW, tW) {
      const ZW = OW.texture,
        xW = ZW?.getInternalTexture(),
        lW = xW?._bufferView;
      if (!(lW instanceof Float32Array) && !(lW instanceof Uint16Array)) return SW.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const AW = ZW.getSize(),
        bW = function(WW, iW) {
          const OW = WW.y - WW.x + 1,
            mW = iW * WW.w / OW,
            EW = mW < 1 ? 0 : 1,
            NW = OW - EW;
          let PW = JW(mW - Math.floor(mW), 1) * NW;
          return PW = JW(PW + WW.z, NW), Math.floor(PW) + WW.x + EW
        }(mW, OW.time);
      if (!isFinite(bW) || bW < 0 || bW >= AW.height) return SW.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const jW = NW.l.fA[0],
        UW = NW.l.Matrix[0],
        kW = NW.l.Matrix[1],
        sW = bW * AW.width * 4,
        MW = iW === PW.k.NormalKind ? NW.q.TransformNormalFromFloatsToRef : NW.q.TransformCoordinatesFromFloatsToRef;
      for (let NW = 0, PW = 0; NW < WW.length; NW += 3, PW += 4) {
        let iW, OW;
        for (UW.reset(), iW = 0; iW < 4 && iW < tW; iW++) OW = LW[PW + iW], OW > 0 && (hW(lW, sW + 16 * Math.floor(EW[PW + iW]), kW), kW.scaleAndAddToRef(OW, UW));
        if (cW && wW)
          for (iW = 0; iW < 4 && iW + 4 < tW; iW++) OW = wW[PW + iW], OW > 0 && (hW(lW, sW + 16 * Math.floor(cW[PW + iW]), kW), kW.scaleAndAddToRef(OW, UW));
        MW(WW[NW], WW[NW + 1], WW[NW + 2], UW, jW), jW.toArray(WW, NW)
      }
      return !0
    }
    class nW {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = NW.q.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class uW {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new nW, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new xW, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let oW = (() => {
        var WW;
        let iW, xW = cW.f,
          lW = [];
        return WW = class extends xW {
          static get BILLBOARDMODE_NONE() {
            return cW.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return cW.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return cW.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return cW.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return cW.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return cW.f.BILLBOARDMODE_USE_POSITION
          }
          get facetNb() {
            return this._internalAbstractMeshDataInfo._facetData.facetNb
          }
          get partitioningSubdivisions() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions
          }
          set partitioningSubdivisions(WW) {
            this._internalAbstractMeshDataInfo._facetData.partitioningSubdivisions = WW
          }
          get partitioningBBoxRatio() {
            return this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio
          }
          set partitioningBBoxRatio(WW) {
            this._internalAbstractMeshDataInfo._facetData.partitioningBBoxRatio = WW
          }
          get mustDepthSortFacets() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSort
          }
          set mustDepthSortFacets(WW) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSort = WW
          }
          get facetDepthSortFrom() {
            return this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom
          }
          set facetDepthSortFrom(WW) {
            this._internalAbstractMeshDataInfo._facetData.facetDepthSortFrom = WW
          }
          get collisionRetryCount() {
            return this._internalAbstractMeshDataInfo._collisionRetryCount
          }
          set collisionRetryCount(WW) {
            this._internalAbstractMeshDataInfo._collisionRetryCount = WW
          }
          get isFacetDataEnabled() {
            return this._internalAbstractMeshDataInfo._facetData.facetDataEnabled
          }
          get morphTargetManager() {
            return this._internalAbstractMeshDataInfo._morphTargetManager
          }
          set morphTargetManager(WW) {
            this._internalAbstractMeshDataInfo._morphTargetManager !== WW && (this._internalAbstractMeshDataInfo._morphTargetManager = WW, this._syncGeometryWithMorphTargetManager())
          }
          get bakedVertexAnimationManager() {
            return this._internalAbstractMeshDataInfo._bakedVertexAnimationManager
          }
          set bakedVertexAnimationManager(WW) {
            this._internalAbstractMeshDataInfo._bakedVertexAnimationManager !== WW && (this._internalAbstractMeshDataInfo._bakedVertexAnimationManager = WW, this._markSubMeshesAsAttributesDirty())
          }
          _syncGeometryWithMorphTargetManager() {}
          _updateNonUniformScalingState(WW) {
            return !!super._updateNonUniformScalingState(WW) && (this._markSubMeshesAsMiscDirty(), !0)
          }
          get rawBoundingInfo() {
            return this._internalAbstractMeshDataInfo._rawBoundingInfo
          }
          set rawBoundingInfo(WW) {
            this._internalAbstractMeshDataInfo._rawBoundingInfo = WW
          }
          set Vx(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCollideObservable.add(WW)
          }
          set onCollisionPositionChange(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver = this.onCollisionPositionChangeObservable.add(WW)
          }
          get visibility() {
            return this._internalAbstractMeshDataInfo._visibility
          }
          set visibility(WW) {
            if (this._internalAbstractMeshDataInfo._visibility === WW) return;
            const iW = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = WW, (1 === iW && 1 !== WW || 1 !== iW && 1 === WW) && this._markSubMeshesAsDirty((WW => {
              WW.markAsMiscDirty(), WW.markAsPrePassDirty()
            }))
          }
          get pointerOverDisableMeshTesting() {
            return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
          }
          set pointerOverDisableMeshTesting(WW) {
            this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = WW
          }
          get renderingGroupId() {
            return this._internalAbstractMeshDataInfo._renderingGroupId
          }
          set renderingGroupId(WW) {
            this._internalAbstractMeshDataInfo._renderingGroupId = WW
          }
          get meshBlendingTag() {
            return this._internalAbstractMeshDataInfo._meshBlendingTag
          }
          set meshBlendingTag(WW) {
            if (!Number.isInteger(WW) || WW < 0 || WW > 255 || 0 !== WW && 0 === (63 & WW)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
            this._internalAbstractMeshDataInfo._meshBlendingTag = WW
          }
          get material() {
            return this._internalAbstractMeshDataInfo._material
          }
          set material(WW) {
            this._setMaterial(WW)
          }
          _setMaterial(WW) {
            this._internalAbstractMeshDataInfo._material !== WW && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = WW, WW && WW.meshMap && (WW.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.hY && (this.resetDrawCache(void 0, null == WW), this._unBindEffect()))
          }
          getMaterialForRenderPass(WW) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[WW]
          }
          setMaterialForRenderPass(WW, iW) {
            this.resetDrawCache(WW), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const OW = this._internalAbstractMeshDataInfo._materialForRenderPass[WW];
            OW?.meshMap?.[this.uniqueId] && (OW.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[WW] = iW, iW && iW.meshMap && (iW.meshMap[this.uniqueId] = this)
          }
          get receiveShadows() {
            return this._internalAbstractMeshDataInfo._receiveShadows
          }
          set receiveShadows(WW) {
            this._internalAbstractMeshDataInfo._receiveShadows !== WW && (this._internalAbstractMeshDataInfo._receiveShadows = WW, this._markSubMeshesAsLightDirty())
          }
          get hasVertexAlpha() {
            return this._internalAbstractMeshDataInfo._hasVertexAlpha
          }
          set hasVertexAlpha(WW) {
            this._internalAbstractMeshDataInfo._hasVertexAlpha !== WW && (this._internalAbstractMeshDataInfo._hasVertexAlpha = WW, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
          }
          get useVertexColors() {
            return this._internalAbstractMeshDataInfo._useVertexColors
          }
          set useVertexColors(WW) {
            this._internalAbstractMeshDataInfo._useVertexColors !== WW && (this._internalAbstractMeshDataInfo._useVertexColors = WW, this._markSubMeshesAsAttributesDirty())
          }
          get computeBonesUsingShaders() {
            return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
          }
          set computeBonesUsingShaders(WW) {
            this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== WW && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = WW, this._markSubMeshesAsAttributesDirty())
          }
          get numBoneInfluencers() {
            return this._internalAbstractMeshDataInfo._numBoneInfluencers
          }
          set numBoneInfluencers(WW) {
            this._internalAbstractMeshDataInfo._numBoneInfluencers !== WW && (this._internalAbstractMeshDataInfo._numBoneInfluencers = WW, this._markSubMeshesAsAttributesDirty())
          }
          get applyFog() {
            return this._internalAbstractMeshDataInfo._applyFog
          }
          set applyFog(WW) {
            this._internalAbstractMeshDataInfo._applyFog !== WW && (this._internalAbstractMeshDataInfo._applyFog = WW, this._markSubMeshesAsMiscDirty())
          }
          get enableDistantPicking() {
            return this._internalAbstractMeshDataInfo._enableDistantPicking
          }
          set enableDistantPicking(WW) {
            this._internalAbstractMeshDataInfo._enableDistantPicking = WW
          }
          get layerMask() {
            return this._internalAbstractMeshDataInfo._layerMask
          }
          set layerMask(WW) {
            WW !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = WW, this._resyncLightSources())
          }
          get collisionMask() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
          }
          set collisionMask(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(WW) ? -1 : WW
          }
          get collisionResponse() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
          }
          set collisionResponse(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = WW
          }
          get collisionGroup() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
          }
          set collisionGroup(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(WW) ? -1 : WW
          }
          get surroundingMeshes() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
          }
          set surroundingMeshes(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = WW
          }
          get lightSources() {
            return this._lightSources
          }
          set skeleton(WW) {
            const iW = this._internalAbstractMeshDataInfo._skeleton;
            iW && iW.needInitialSkinMatrix && iW._unregisterMeshWithPoseMatrix(this), WW && WW.needInitialSkinMatrix && WW._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = WW, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(iW) {
            var OW;
            let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(iW, mW, !1), OW = this, this._internalAbstractMeshDataInfo = new uW, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = WW.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new EW.e, this.onCollisionPositionChangeObservable = new EW.e, this.onMaterialChangedObservable = new EW.e, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Fb = WW.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = sW.b.Red(), this.outlineWidth = .02, this.overlayColor = sW.b.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.pA = !1, this.XA = !1, this.actionManager = null, this.ellipsoid = new NW.q(.5, 1, .5), this.ellipsoidOffset = new NW.q(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new sW.d(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                dD: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new EW.e, this._onCollisionPositionChange = function(WW, iW) {
                let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                iW.subtractToRef(OW._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, OW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), OW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > yW.b.CollisionsEpsilon && OW.position.addInPlace(OW._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), mW && OW.onCollideObservable.notifyObservers(mW), OW.onCollisionPositionChangeObservable.notifyObservers(OW.position)
              }, mW = this.bD(), this.layerMask = mW.defaultRenderableLayerMask, mW.xEW(this), this._resyncLightSources(), this._uniformBuffer = new ZW.c(this.bD().VA(), void 0, void 0, iW, !this.bD().VA().isWebGPU), this._buildUniformLayout(), mW.performancePriority) {
              case 2:
                this.XA = !0;
              case 1:
                this.pA = !0, this.Fb = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(WW) {
            const iW = this._uniformBuffer;
            iW.tWW("world", WW), iW.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), iW.update()
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
          toString(WW) {
            let iW = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            iW += ", # of submeshes: " + (this.hY ? this.hY.length : 0);
            const OW = this._internalAbstractMeshDataInfo._skeleton;
            return OW && (iW += ", skeleton: " + OW.name), WW && (iW += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], iW += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.dD ? "YES" : "NO")), iW
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== cW.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(WW) {
            let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (iW || this.actionManager.isRecursive)) {
              if (!WW) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(WW)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(WW, !1) : null
          }
          _releaseRenderPassId(WW) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.hY) {
              for (const WW of this.hY) WW._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const WW of this.bD().lights) WW.isEnabled() && WW.canAffectMesh(this) && this._lightSources.push(WW);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(WW) {
            const iW = WW.isEnabled() && WW.canAffectMesh(this),
              OW = this._lightSources.indexOf(WW);
            let mW = !1;
            if (-1 === OW) {
              if (!iW) return;
              this._lightSources.push(WW)
            } else {
              if (iW) return;
              mW = !0, this._lightSources.splice(OW, 1)
            }
            this._markSubMeshesAsLightDirty(mW)
          }
          _unBindEffect() {
            for (const WW of this.hY) WW.setEffect(null)
          }
          _removeLightSource(WW, iW) {
            const OW = this._lightSources.indexOf(WW); - 1 !== OW && (this._lightSources.splice(OW, 1), this._markSubMeshesAsLightDirty(iW))
          }
          _markSubMeshesAsDirty(WW) {
            if (this.hY)
              for (const iW of this.hY)
                for (let OW = 0; OW < iW._drawWrappers.length; ++OW) {
                  const mW = iW._drawWrappers[OW];
                  mW && mW.defines && mW.defines.markAllAsDirty && WW(mW.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((iW => iW.markAsLightDirty(WW)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((WW => WW.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((WW => WW.markAsMiscDirty()))
          }
          xOW(WW) {
            return this._currentRenderId = Number.MAX_VALUE, super.xOW(WW), this._isDirty = !0, this
          }
          resetDrawCache(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.hY)
              for (const OW of this.hY) OW.resetDrawCache(WW, iW)
          }
          get isBlocked() {
            return !1
          }
          getLOD(WW) {
            return this
          }
          getTotalVertices() {
            return 0
          }
          getTotalIndices() {
            return 0
          }
          IEW() {
            return null
          }
          getVerticesData(WW) {
            return null
          }
          setVerticesData(WW, iW, OW, mW) {
            return this
          }
          updateVerticesData(WW, iW, OW, mW) {
            return this
          }
          setIndices(WW, iW) {
            return this
          }
          isVerticesDataPresent(WW) {
            return !1
          }
          KV() {
            return this._masterMesh ? this._masterMesh.KV() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.KV()
          }
          setBoundingInfo(WW) {
            return this._boundingInfo = WW, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(WW, iW, OW) {
            return this._boundingInfo = new tW.b(WW, iW, OW), this._boundingInfo
          }
          normalizeToUnitCube() {
            let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(WW, iW, OW)
          }
          get useBones() {
            return this.skeleton && this.bD().skeletonsEnabled && this.isVerticesDataPresent(PW.k.MatricesIndicesKind) && this.isVerticesDataPresent(PW.k.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(WW) {}
          _activate(WW, iW) {
            return this._renderId = WW, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === cW.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get KD() {
            return !1
          }
          get QEW() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(WW, iW, OW) {
            return this.position.addInPlace(this.calcMovePOV(WW, iW, OW)), this
          }
          calcMovePOV(WW, iW, OW) {
            const mW = new NW.d;
            (this.rotationQuaternion ? this.rotationQuaternion : NW.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(mW);
            const EW = NW.q.Zero(),
              PW = this.definedFacingForward ? -1 : 1;
            return NW.q.TransformCoordinatesFromFloatsToRef(WW * PW, iW, OW * PW, mW, EW), EW
          }
          rotatePOV(WW, iW, OW) {
            return this.rotation.addInPlace(this.calcRotatePOV(WW, iW, OW)), this
          }
          calcRotatePOV(WW, iW, OW) {
            const mW = this.definedFacingForward ? 1 : -1;
            return new NW.q(WW * mW, iW, OW * mW)
          }
          _refreshBoundingInfo(WW, iW) {
            if (WW) {
              const OW = (0, kW.d)(WW, 0, this.getTotalVertices(), iW);
              this._boundingInfo ? this._boundingInfo.reConstruct(OW.minimum, OW.maximum) : this._boundingInfo = new tW.b(OW.minimum, OW.maximum)
            }
            if (this.hY)
              for (let OW = 0; OW < this.hY.length; OW++) this.hY[OW].refreshBoundingInfo(WW);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(WW) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(WW.minimum, WW.maximum) : this._boundingInfo = new tW.b(WW.minimum, WW.maximum), this.hY)
              for (let iW = 0; iW < this.hY.length; iW++) this.hY[iW].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(WW, iW, OW, mW, EW, LW, cW) {
            ! function(WW, iW, OW, mW, EW, LW, cW) {
              const wW = NW.l.fA[0],
                tW = NW.l.Matrix[0],
                ZW = NW.l.Matrix[1],
                xW = iW === PW.k.NormalKind ? NW.q.TransformNormalFromFloatsToRef : NW.q.TransformCoordinatesFromFloatsToRef;
              for (let PW = 0, lW = 0; PW < WW.length; PW += 3, lW += 4) {
                let iW, AW;
                for (tW.reset(), iW = 0; iW < 4; iW++) AW = EW[lW + iW], AW > 0 && (NW.d.FromFloat32ArrayToRefScaled(OW, Math.floor(16 * mW[lW + iW]), AW, ZW), tW.addToSelf(ZW));
                if (LW && cW)
                  for (iW = 0; iW < 4; iW++) AW = cW[lW + iW], AW > 0 && (NW.d.FromFloat32ArrayToRefScaled(OW, Math.floor(16 * LW[lW + iW]), AW, ZW), tW.addToSelf(ZW));
                xW(WW[PW], WW[PW + 1], WW[PW + 2], tW, wW), wW.toArray(WW, PW)
              }
            }(WW, iW, OW, mW, EW, LW, cW)
          }
          _getData(iW, OW) {
            let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PW.k.PositionKind;
            const EW = iW.cache,
              LW = WW => {
                if (EW) {
                  const iW = EW._vertexData || (EW._vertexData = {});
                  return iW[WW] || this.copyVerticesData(WW, iW), iW[WW]
                }
                return this.getVerticesData(WW)
              };
            if (OW || (OW = LW(mW)), !OW) return null;
            EW ? (EW._outputData ? EW._outputData.set(OW) : EW._outputData = new Float32Array(OW), OW = EW._outputData) : (iW.applyMorph && this.morphTargetManager || iW.applySkeleton && this.skeleton || iW.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (OW = OW.slice()), iW.applyMorph && this.morphTargetManager && function(WW, iW, OW) {
              let mW;
              switch (iW) {
                case PW.k.PositionKind:
                  mW = WW => WW.getPositions();
                  break;
                case PW.k.NormalKind:
                  mW = WW => WW.getNormals();
                  break;
                case PW.k.TangentKind:
                  mW = WW => WW.getTangents();
                  break;
                case PW.k.UVKind:
                  mW = WW => WW.getUVs();
                  break;
                case PW.k.UV2Kind:
                  mW = WW => WW.getUV2s();
                  break;
                case PW.k.ColorKind:
                  mW = WW => WW.getColors();
                  break;
                default:
                  return
              }
              for (let EW = 0; EW < WW.length; EW++) {
                let iW = WW[EW];
                for (let NW = 0; NW < OW.numTargets; NW++) {
                  const PW = OW.getTarget(NW),
                    LW = PW.influence;
                  if (0 !== LW) {
                    const OW = mW(PW);
                    OW && (iW += (OW[EW] - WW[EW]) * LW)
                  }
                }
                WW[EW] = iW
              }
            }(OW, mW, this.morphTargetManager);
            const cW = this.bakedVertexAnimationManager;
            let wW = !1;
            if (iW.applyBakedVertexAnimation && cW?.isEnabled) {
              const WW = LW(PW.k.MatricesIndicesKind),
                EW = LW(PW.k.MatricesWeightsKind);
              if (EW && WW) {
                const NW = this.numBoneInfluencers > 4,
                  tW = NW ? LW(PW.k.MatricesIndicesExtraKind) : null,
                  ZW = NW ? LW(PW.k.MatricesWeightsExtraKind) : null;
                wW = HW(OW, mW, cW, iW.bakedVertexAnimationSettings ?? cW.animationParameters, WW, EW, tW, ZW, this.numBoneInfluencers)
              }
            }
            if (!wW && iW.applySkeleton && this.skeleton) {
              const iW = LW(PW.k.MatricesIndicesKind),
                EW = LW(PW.k.MatricesWeightsKind);
              if (EW && iW) {
                const NW = this.numBoneInfluencers > 4,
                  cW = NW ? LW(PW.k.MatricesIndicesExtraKind) : null,
                  wW = NW ? LW(PW.k.MatricesWeightsExtraKind) : null,
                  tW = this.skeleton.getTransformMatrices(this);
                WW._ApplySkeleton(OW, mW, tW, iW, EW, cW, wW)
              }
            }
            if (!1 !== iW.updatePositionsArray && mW === PW.k.PositionKind) {
              const WW = this._internalAbstractMeshDataInfo._positions || [],
                iW = WW.length;
              if (WW.length = OW.length / 3, iW < WW.length)
                for (let OW = iW; OW < WW.length; OW++) WW[OW] = new NW.q;
              for (let mW = 0, EW = 0; mW < WW.length; mW++, EW += 3) WW[mW].yWW(OW[EW], OW[EW + 1], OW[EW + 2]);
              this._internalAbstractMeshDataInfo._positions = WW
            }
            return OW
          }
          getNormalsData() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: WW,
              applyMorph: iW,
              updatePositionsArray: !1
            }, null, PW.k.NormalKind)
          }
          YG() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: WW,
              applyMorph: iW,
              updatePositionsArray: !1
            }, OW, PW.k.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new tW.b(NW.q.Zero(), NW.q.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(WW) {
            if (!this.hY) return this;
            const iW = this.hY.length;
            for (let OW = 0; OW < iW; OW++) {
              const mW = this.hY[OW];
              (iW > 1 || !mW.IsGlobal) && mW.updateBoundingInfo(WW)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.XA || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(WW) {
            return this.KV().isInFrustum(WW, this.cullingStrategy)
          }
          isCompletelyInFrustum(WW) {
            return this.KV().isCompletelyInFrustum(WW)
          }
          qEW(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = arguments.length > 2 ? arguments[2] : void 0;
            const mW = this.KV(),
              EW = WW.KV();
            if (mW.intersects(EW, iW)) return !0;
            if (OW)
              for (const NW of this.getChildMeshes())
                if (NW.qEW(WW, iW, !0)) return !0;
            return !1
          }
          intersectsPoint(WW) {
            return this.KV().intersectsPoint(WW)
          }
          get checkCollisions() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
          }
          set checkCollisions(WW) {
            this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = WW
          }
          get collider() {
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider
          }
          moveWithCollisions(WW) {
            let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const OW = this.bD().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = OW.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, OW.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, WW, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, iW), this
          }
          _collideForSubMesh(WW, iW, OW) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!WW._lastColliderWorldVertices || !WW._lastColliderTransformMatrix.equals(iW)) {
              WW._lastColliderTransformMatrix = iW.clone(), WW._lastColliderWorldVertices = [], WW._trianglePlanes = [];
              const OW = WW.verticesStart,
                mW = WW.verticesStart + WW.verticesCount;
              for (let EW = OW; EW < mW; EW++) WW._lastColliderWorldVertices.push(NW.q.TransformCoordinates(this._positions[EW], iW))
            }
            return OW._collide(WW._trianglePlanes, WW._lastColliderWorldVertices, this.IEW(), WW.indexStart, WW.indexStart + WW.indexCount, WW.verticesStart, !!WW.BA(), this, this._shouldConvertRHS(), 7 === WW.BA()?.fillMode), this
          }
          _processCollisionsForSubMeshes(WW, iW) {
            const OW = this._scene.getCollidingSubMeshCandidates(this, WW),
              mW = OW.length;
            for (let EW = 0; EW < mW; EW++) {
              const NW = OW.data[EW];
              mW > 1 && !NW._checkCollision(WW) || this._collideForSubMesh(NW, iW, WW)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(WW) {
            if (!this.KV()._checkCollision(WW)) return this;
            const iW = NW.l.Matrix[0],
              OW = NW.l.Matrix[1];
            return NW.d.ScalingToRef(1 / WW._radius.x, 1 / WW._radius.y, 1 / WW._radius.z, iW), this.worldMatrixFromCache.multiplyToRef(iW, OW), this._processCollisionsForSubMeshes(WW, OW), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(WW, iW, OW) {
            let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              EW = arguments.length > 4 ? arguments[4] : void 0,
              PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const LW = new wW.b,
              cW = this.getClassName(),
              tW = "InstancedLinesMesh" === cW || "LinesMesh" === cW || "GreasedLineMesh" === cW ? this.intersectionThreshold : 0,
              ZW = this.KV();
            if (!this.hY) return LW;
            if (!PW && (!WW.intersectsSphere(ZW.HEW, tW) || !WW.intersectsBox(ZW.boundingBox, tW))) return LW;
            if (mW) return LW.hit = !PW, LW.pickedMesh = PW ? null : this, LW.distance = PW ? 0 : NW.q.Distance(WW.origin, ZW.HEW.center), LW.subMeshId = 0, LW;
            if (!this._generatePointsArray()) return LW;
            let xW = null;
            const lW = this._scene.getIntersectingSubMeshCandidates(this, WW),
              AW = lW.length;
            let bW = !1;
            for (let NW = 0; NW < AW; NW++) {
              const WW = lW.data[NW].BA();
              if (WW && (7 == WW.fillMode || 0 == WW.fillMode || 1 == WW.fillMode || 2 == WW.fillMode || 4 == WW.fillMode)) {
                bW = !0;
                break
              }
            }
            if (!bW) return LW.hit = !0, LW.pickedMesh = this, LW.distance = NW.q.Distance(WW.origin, ZW.HEW.center), LW.subMeshId = -1, LW;
            for (let NW = 0; NW < AW; NW++) {
              const mW = lW.data[NW];
              if (AW > 1 && !PW && !mW.canIntersects(WW)) continue;
              const EW = mW.intersects(WW, this._positions, this.IEW(), iW, OW);
              if (EW && (iW || !xW || EW.distance < xW.distance) && (xW = EW, xW.subMeshId = mW._id, xW._internalSubMeshId = NW, iW)) break
            }
            if (xW) {
              const iW = EW ?? this.getWorldMatrix(),
                OW = NW.l.fA[0],
                mW = NW.l.fA[1];
              NW.q.TransformCoordinatesToRef(WW.origin, iW, OW), WW.direction.scaleToRef(xW.distance, mW);
              const PW = NW.q.TransformNormal(mW, iW).addInPlace(OW);
              return LW.hit = !0, LW.distance = NW.q.Distance(OW, PW), LW.pickedPoint = PW, LW.pickedMesh = this, LW.bu = xW.bu || 0, LW.bv = xW.bv || 0, LW.subMeshFaceId = xW.faceId, LW.faceId = xW.faceId + lW.data[xW._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), LW.subMeshId = xW.subMeshId, LW
            }
            return LW
          }
          clone(WW, iW, OW) {
            return null
          }
          releaseSubMeshes() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.hY)
              for (; this.hY.length;) this.hY[0].dispose(WW);
            else this.hY = [];
            return this
          }
          dispose(WW) {
            let iW, OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const mW = this.bD();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), mW.freeActiveMeshes(), mW.freeRenderingGroups(), mW.renderingManager.maintainStateBetweenFrames && mW.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((WW => WW !== this && WW.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), iW = 0; iW < this._intersectionsInProgress.length; iW++) {
              const WW = this._intersectionsInProgress[iW],
                OW = WW._intersectionsInProgress.indexOf(this);
              WW._intersectionsInProgress.splice(OW, 1)
            }
            this._intersectionsInProgress.length = 0;
            const EW = mW.lights;
            for (const PW of EW) {
              let WW = PW.includedOnlyMeshes.indexOf(this); - 1 !== WW && PW.includedOnlyMeshes.splice(WW, 1), WW = PW.excludedMeshes.indexOf(this), -1 !== WW && PW.excludedMeshes.splice(WW, 1);
              const iW = PW.getShadowGenerators();
              if (iW) {
                const OW = iW.values();
                for (let iW = OW.next(); !0 !== iW.done; iW = OW.next()) {
                  const OW = iW.value.getShadowMap();
                  OW && OW.renderList && (WW = OW.renderList.indexOf(this), -1 !== WW && OW.renderList.splice(WW, 1))
                }
              }
            }
            this.releaseSubMeshes(mW._isDisposing);
            const NW = mW.VA();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, NW.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), NW.wipeCaches(), mW.pD(this), this._parentContainer) {
              const WW = this._parentContainer.meshes.indexOf(this);
              WW > -1 && this._parentContainer.meshes.splice(WW, 1), this._parentContainer = null
            }
            if (OW && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !WW)
              for (iW = 0; iW < mW.vY.length; iW++) mW.vY[iW].emitter === this && (mW.vY[iW].dispose(), iW--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(WW, OW)
          }
          _initFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            WW.facetNormals || (WW.facetNormals = []), WW.facetPositions || (WW.facetPositions = []), WW.facetPartitioning || (WW.facetPartitioning = new Array), WW.facetNb = this.IEW().length / 3 | 0, WW.partitioningSubdivisions = WW.partitioningSubdivisions ? WW.partitioningSubdivisions : 10, WW.partitioningBBoxRatio = WW.partitioningBBoxRatio ? WW.partitioningBBoxRatio : 1.01;
            for (let iW = 0; iW < WW.facetNb; iW++) WW.facetNormals[iW] = NW.q.Zero(), WW.facetPositions[iW] = NW.q.Zero();
            return WW.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            WW.facetDataEnabled || this._initFacetData();
            const iW = this.getVerticesData(PW.k.PositionKind),
              OW = this.IEW(),
              mW = this.getVerticesData(PW.k.NormalKind)?.slice(),
              EW = this.KV();
            if (WW.facetDepthSort && !WW.facetDepthSortEnabled) {
              if (WW.facetDepthSortEnabled = !0, OW instanceof Uint16Array) WW.depthSortedIndices = new Uint16Array(OW);
              else if (OW instanceof Uint32Array) WW.depthSortedIndices = new Uint32Array(OW);
              else {
                let iW = !1;
                for (let WW = 0; WW < OW.length; WW++)
                  if (OW[WW] > 65535) {
                    iW = !0;
                    break
                  } WW.depthSortedIndices = iW ? new Uint32Array(OW) : new Uint16Array(OW)
              }
              if (WW.facetDepthSortFunction = function(WW, iW) {
                  return iW.sqDistance - WW.sqDistance
                }, !WW.facetDepthSortFrom) {
                const iW = this.bD().activeCamera;
                WW.facetDepthSortFrom = iW ? iW.position : NW.q.Zero()
              }
              WW.depthSortedFacets = [];
              for (let iW = 0; iW < WW.facetNb; iW++) {
                const OW = {
                  ind: 3 * iW,
                  sqDistance: 0
                };
                WW.depthSortedFacets.push(OW)
              }
              WW.invertedMatrix = NW.d.Identity(), WW.facetDepthSortOrigin = NW.q.Zero()
            }
            WW.bbSize.x = EW.maximum.x - EW.minimum.x > MW.e ? EW.maximum.x - EW.minimum.x : MW.e, WW.bbSize.y = EW.maximum.y - EW.minimum.y > MW.e ? EW.maximum.y - EW.minimum.y : MW.e, WW.bbSize.z = EW.maximum.z - EW.minimum.z > MW.e ? EW.maximum.z - EW.minimum.z : MW.e;
            let cW = WW.bbSize.x > WW.bbSize.y ? WW.bbSize.x : WW.bbSize.y;
            if (cW = cW > WW.bbSize.z ? cW : WW.bbSize.z, WW.subDiv.max = WW.partitioningSubdivisions, WW.subDiv.X = Math.floor(WW.subDiv.max * WW.bbSize.x / cW), WW.subDiv.Y = Math.floor(WW.subDiv.max * WW.bbSize.y / cW), WW.subDiv.Z = Math.floor(WW.subDiv.max * WW.bbSize.z / cW), WW.subDiv.X = WW.subDiv.X < 1 ? 1 : WW.subDiv.X, WW.subDiv.Y = WW.subDiv.Y < 1 ? 1 : WW.subDiv.Y, WW.subDiv.Z = WW.subDiv.Z < 1 ? 1 : WW.subDiv.Z, WW.facetParameters.facetNormals = this.getFacetLocalNormals(), WW.facetParameters.facetPositions = this.getFacetLocalPositions(), WW.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), WW.facetParameters.bInfo = EW, WW.facetParameters.bbSize = WW.bbSize, WW.facetParameters.subDiv = WW.subDiv, WW.facetParameters.ratio = this.partitioningBBoxRatio, WW.facetParameters.depthSort = WW.facetDepthSort, WW.facetDepthSort && WW.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(WW.invertedMatrix), NW.q.TransformCoordinatesToRef(WW.facetDepthSortFrom, WW.invertedMatrix, WW.facetDepthSortOrigin), WW.facetParameters.distanceTo = WW.facetDepthSortOrigin), WW.facetParameters.depthSortedFacets = WW.depthSortedFacets, mW && LW.c.ComputeNormals(iW, OW, mW, WW.facetParameters), WW.facetDepthSort && WW.facetDepthSortEnabled) {
              WW.depthSortedFacets.sort(WW.facetDepthSortFunction);
              const iW = WW.depthSortedIndices.length / 3 | 0;
              for (let mW = 0; mW < iW; mW++) {
                const iW = WW.depthSortedFacets[mW].ind;
                WW.depthSortedIndices[3 * mW] = OW[iW], WW.depthSortedIndices[3 * mW + 1] = OW[iW + 1], WW.depthSortedIndices[3 * mW + 2] = OW[iW + 2]
              }
              this.updateIndices(WW.depthSortedIndices, void 0, !0)
            }
            return this
          }
          getFacetLocalNormals() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            return WW.facetNormals || this.updateFacetData(), WW.facetNormals
          }
          getFacetLocalPositions() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            return WW.facetPositions || this.updateFacetData(), WW.facetPositions
          }
          getFacetLocalPartitioning() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            return WW.facetPartitioning || this.updateFacetData(), WW.facetPartitioning
          }
          getFacetPosition(WW) {
            const iW = NW.q.Zero();
            return this.getFacetPositionToRef(WW, iW), iW
          }
          getFacetPositionToRef(WW, iW) {
            const OW = this.getFacetLocalPositions()[WW],
              mW = this.getWorldMatrix();
            return NW.q.TransformCoordinatesToRef(OW, mW, iW), this
          }
          getFacetNormal(WW) {
            const iW = NW.q.Zero();
            return this.getFacetNormalToRef(WW, iW), iW
          }
          getFacetNormalToRef(WW, iW) {
            const OW = this.getFacetLocalNormals()[WW];
            return NW.q.TransformNormalToRef(OW, this.getWorldMatrix(), iW), this
          }
          getFacetsAtLocalCoordinates(WW, iW, OW) {
            const mW = this.KV(),
              EW = this._internalAbstractMeshDataInfo._facetData,
              NW = Math.floor((WW - mW.minimum.x * EW.partitioningBBoxRatio) * EW.subDiv.X * EW.partitioningBBoxRatio / EW.bbSize.x),
              PW = Math.floor((iW - mW.minimum.y * EW.partitioningBBoxRatio) * EW.subDiv.Y * EW.partitioningBBoxRatio / EW.bbSize.y),
              LW = Math.floor((OW - mW.minimum.z * EW.partitioningBBoxRatio) * EW.subDiv.Z * EW.partitioningBBoxRatio / EW.bbSize.z);
            return NW < 0 || NW > EW.subDiv.max || PW < 0 || PW > EW.subDiv.max || LW < 0 || LW > EW.subDiv.max ? null : EW.facetPartitioning[NW + EW.subDiv.max * PW + EW.subDiv.max * EW.subDiv.max * LW]
          }
          getClosestFacetAtCoordinates(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const LW = this.getWorldMatrix(),
              cW = NW.l.Matrix[5];
            LW.invertToRef(cW);
            const wW = NW.l.fA[8];
            NW.q.TransformCoordinatesFromFloatsToRef(WW, iW, OW, cW, wW);
            const tW = this.getClosestFacetAtLocalCoordinates(wW.x, wW.y, wW.z, mW, EW, PW);
            return mW && NW.q.TransformCoordinatesFromFloatsToRef(mW.x, mW.y, mW.z, LW, mW), tW
          }
          getClosestFacetAtLocalCoordinates(WW, iW, OW, mW) {
            let EW, NW, PW, LW, cW, wW, tW, ZW, xW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              lW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              AW = null;
            const bW = this.getFacetLocalPositions(),
              jW = this.getFacetLocalNormals(),
              UW = this.getFacetsAtLocalCoordinates(WW, iW, OW);
            if (!UW) return null;
            let kW, sW, MW, KW, SW = Number.MAX_VALUE;
            for (let YW = 0; YW < UW.length; YW++) sW = UW[YW], MW = jW[sW], KW = bW[sW], LW = (WW - KW.x) * MW.x + (iW - KW.y) * MW.y + (OW - KW.z) * MW.z, (!xW || xW && lW && LW >= 0 || xW && !lW && LW <= 0) && (LW = MW.x * KW.x + MW.y * KW.y + MW.z * KW.z, cW = -(MW.x * WW + MW.y * iW + MW.z * OW - LW) / (MW.x * MW.x + MW.y * MW.y + MW.z * MW.z), wW = WW + MW.x * cW, tW = iW + MW.y * cW, ZW = OW + MW.z * cW, EW = wW - WW, NW = tW - iW, PW = ZW - OW, kW = EW * EW + NW * NW + PW * PW, kW < SW && (SW = kW, AW = sW, mW && (mW.x = wW, mW.y = tW, mW.z = ZW)));
            return AW
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const WW = this._internalAbstractMeshDataInfo._facetData;
            return WW.facetDataEnabled && (WW.facetDataEnabled = !1, WW.facetPositions = [], WW.facetNormals = [], WW.facetPartitioning = new Array, WW.facetParameters = {}, WW.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(WW, iW) {
            return this
          }
          createNormals(WW) {
            const iW = this.getVerticesData(PW.k.PositionKind),
              OW = this.IEW();
            let mW;
            return mW = this.isVerticesDataPresent(PW.k.NormalKind) ? this.getVerticesData(PW.k.NormalKind) : [], LW.c.ComputeNormals(iW, OW, mW, {
              useRightHandedSystem: this.bD().useRightHandedSystem
            }), this.setVerticesData(PW.k.NormalKind, mW, WW), this
          }
          async optimizeIndicesAsync() {
            const WW = this.IEW();
            if (!WW) return this;
            const {
              OptimizeIndices: iW
            } = await OW.e(669).then((() => OW(54711)));
            return iW(WW), this.setIndices(WW, this.getTotalVertices()), this
          }
          alignWithNormal(WW, iW) {
            iW || (iW = KW.c.Y);
            const OW = NW.l.fA[0],
              mW = NW.l.fA[1];
            return NW.q.CrossToRef(iW, WW, mW), NW.q.CrossToRef(WW, mW, OW), this.rotationQuaternion ? NW.g.RotationQuaternionFromAxisToRef(OW, WW, mW, this.rotationQuaternion) : NW.q.RotationFromAxisToRef(OW, WW, mW, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, jW.o)("EdgesRenderer")
          }
          enableEdgesRendering(WW, iW, OW) {
            throw (0, jW.o)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.vY.filter((WW => WW.emitter === this))
          }
        }, (() => {
          const OW = "function" === typeof Symbol && Symbol.metadata ? Object.create(xW[Symbol.metadata] ?? null) : void 0;
          iW = [YW.j.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, mW.e)(WW, null, iW, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: WW => "_ApplySkeleton" in WW,
              get: WW => WW._ApplySkeleton
            },
            metadata: OW
          }, null, lW), OW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OW
          })
        })(), WW.OCCLUSION_TYPE_NONE = ((0, mW.g)(WW, lW), 0), WW.OCCLUSION_TYPE_OPTIMISTIC = 1, WW.OCCLUSION_TYPE_STRICT = 2, WW.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, WW.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, WW.CULLINGSTRATEGY_STANDARD = 0, WW.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, WW.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, WW.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, WW.DefaultIsPickable = !0, WW
      })(),
      dW = !1;

    function eW() {
      dW || (dW = !0, (0, TW.h)("BABYLON.AbstractMesh", oW))
    }(lW = oW.prototype).createOrUpdateSubmeshesOctree ?? (lW.createOrUpdateSubmeshesOctree = (0, jW.k)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (AW = oW.prototype).getPhysicsImpostor ?? (AW.getPhysicsImpostor = (0, jW.k)("AbstractMesh", "getPhysicsImpostor")), (bW = oW.prototype).setPhysicsLinkWith ?? (bW.setPhysicsLinkWith = (0, jW.k)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(oW.prototype, "occlusionRetryCount") || Object.defineProperty(oW.prototype, "occlusionRetryCount", (0, jW.h)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(oW.prototype, "occlusionType") || Object.defineProperty(oW.prototype, "occlusionType", (0, jW.h)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(oW.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(oW.prototype, "occlusionQueryAlgorithmType", (0, jW.h)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(oW.prototype, "isOccluded") || Object.defineProperty(oW.prototype, "isOccluded", (0, jW.h)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(oW.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(oW.prototype, "isOcclusionQueryInProgress", (0, jW.h)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(oW.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(oW.prototype, "forceRenderingWhenOccluded", (0, jW.h)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(oW.prototype, "occlusionForRenderPassId") || Object.defineProperty(oW.prototype, "occlusionForRenderPassId", (0, jW.h)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(oW.prototype, "decalMap") || Object.defineProperty(oW.prototype, "decalMap", (0, jW.h)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(oW.prototype, "bV") || Object.defineProperty(oW.prototype, "bV", (0, jW.h)("AbstractMesh", "bV")), Object.getOwnPropertyDescriptor(oW.prototype, "physicsImpostor") || Object.defineProperty(oW.prototype, "physicsImpostor", (0, jW.h)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(oW.prototype, "showBoundingBox") || Object.defineProperty(oW.prototype, "showBoundingBox", (0, jW.h)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(oW.prototype, "edgesRenderer") || Object.defineProperty(oW.prototype, "edgesRenderer", (0, jW.h)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(oW.prototype, "renderOutline") || Object.defineProperty(oW.prototype, "renderOutline", (0, jW.h)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(oW.prototype, "renderOverlay") || Object.defineProperty(oW.prototype, "renderOverlay", (0, jW.h)("AbstractMesh", "renderOverlay"))
  },
  41929: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => UW
    });
    var mW = OW(38241),
      EW = OW(38372),
      NW = OW(41927),
      PW = OW(41660),
      LW = OW(41808),
      cW = OW(41936),
      wW = OW(41818),
      tW = OW(41620),
      ZW = OW(39911),
      xW = OW(41544),
      lW = OW(41834),
      AW = OW(38270),
      bW = OW(41940),
      jW = OW(41582);
    class UW {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(WW) {
        this._boundingBias ? this._boundingBias.HJ(WW) : this._boundingBias = WW.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(WW) {
        const iW = new UW(UW.RandomId(), WW.bD());
        return iW.applyToMesh(WW), iW
      }
      get meshes() {
        return this._meshes
      }
      constructor(WW, iW, OW) {
        let EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new mW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new mW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = iW || AW.d.LastCreatedScene, this._scene && (this.id = WW, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.VA(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = EW, null !== PW && (this._totalVertices = PW), OW ? this.setAllVerticesData(OW, EW) : null === PW && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), NW && (this.applyToMesh(NW), NW.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      bD() {
        return this._scene
      }
      VA() {
        return this._engine
      }
      isReady() {
        return 1 === this.delayLoadState || 0 === this.delayLoadState
      }
      get doNotSerialize() {
        for (let WW = 0; WW < this._meshes.length; WW++)
          if (!this._meshes[WW].doNotSerialize) return !1;
        return !0
      }
      _rebuild() {
        this._vertexArrayObjects && (this._vertexArrayObjects = {}), 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer"));
        const WW = new Set;
        for (const iW in this._vertexBuffers) WW.add(this._vertexBuffers[iW].getWrapperBuffer());
        WW.forEach((WW => {
          WW._rebuild()
        }))
      }
      setAllVerticesData(WW, iW) {
        WW.applyToGeometry(this, iW), this._notifyUpdate()
      }
      setVerticesData(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0;
        OW && Array.isArray(iW) && (iW = new Float32Array(iW));
        const EW = new PW.k(this._engine, iW, WW, {
          updatable: OW,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: mW,
          label: "Geometry_" + this.id + "_" + WW
        });
        this.setVerticesBuffer(EW)
      }
      removeVerticesData(WW) {
        this._vertexBuffers[WW] && (this._vertexBuffers[WW].dispose(), delete this._vertexBuffers[WW]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const EW = WW.getKind();
        this._vertexBuffers[EW] && OW && this._vertexBuffers[EW].dispose(), WW._buffer && WW._ownsBuffer && WW._buffer._increaseReferences(), this._vertexBuffers[EW] = WW;
        const NW = this._meshes,
          LW = NW.length;
        if (EW === PW.k.PositionKind) {
          this._totalVertices = iW ?? WW._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : WW.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const OW = this._extend && this._extend.minimum || new mW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            EW = this._extend && this._extend.maximum || new mW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let WW = 0; WW < LW; WW++) {
            const iW = NW[WW];
            iW.buildBoundingInfo(OW, EW), iW._createGlobalSubMesh(iW.isUnIndexed), iW.computeWorldMatrix(!0), iW.synchronizeInstances()
          }
        }
        this._notifyUpdate(EW)
      }
      updateVerticesDataDirectly(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EW = this.getVertexBuffer(WW);
        EW && (EW.updateDirectly(iW, OW, mW), this._notifyUpdate(WW))
      }
      updateVerticesData(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this.getVertexBuffer(WW);
        mW && (mW.update(iW), WW === PW.k.PositionKind && this._updateBoundingInfo(OW, iW), this._notifyUpdate(WW))
      }
      _updateBoundingInfo(WW, iW) {
        if (WW && this._updateExtend(iW), this._resetPointsArrayCache(), WW) {
          const WW = this._meshes;
          for (const iW of WW) {
            iW.hasBoundingInfo ? iW.KV().reConstruct(this._extend.minimum, this._extend.maximum) : iW.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const WW = iW.hY;
            for (const iW of WW) iW.refreshBoundingInfo()
          }
        }
      }
      _bind(WW, iW, OW, mW) {
        if (!WW) return;
        void 0 === iW && (iW = this._indexBuffer);
        const EW = this.getVertexBuffers();
        if (!EW) return;
        if (iW != this._indexBuffer || !this._vertexArrayObjects && !mW) return void this._engine.bindBuffers(EW, iW, WW, OW);
        const NW = mW || this._vertexArrayObjects,
          PW = this._engine;
        NW[WW.key] || (NW[WW.key] = PW.recordVertexArrayObject(EW, iW, WW, OW)), PW.bindVertexArrayObject(NW[WW.key], iW)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(WW, iW, OW) {
        const mW = this.getVertexBuffer(WW);
        return mW ? mW.getFloatData(this._totalVertices, OW || iW && 1 !== this._meshes.length) : null
      }
      copyVerticesData(WW, iW) {
        const OW = this.getVertexBuffer(WW);
        if (!OW) return;
        iW[WW] || (iW[WW] = new Float32Array(this._totalVertices * OW.getSize()));
        const mW = OW.getData();
        mW && (0, jW.e)(mW, OW.getSize(), OW.type, OW.byteOffset, OW.byteStride, OW.normalized, this._totalVertices, iW[WW])
      }
      isVertexBufferUpdatable(WW) {
        const iW = this._vertexBuffers[WW];
        return !!iW && iW.isUpdatable()
      }
      getVertexBuffer(WW) {
        return this.isReady() ? this._vertexBuffers[WW] : null
      }
      getVertexBuffers() {
        return this.isReady() ? this._vertexBuffers : null
      }
      isVerticesDataPresent(WW) {
        return this._vertexBuffers ? void 0 !== this._vertexBuffers[WW] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(WW)
      }
      getVerticesDataKinds() {
        const WW = [];
        let iW;
        if (!this._vertexBuffers && this._delayInfo)
          for (iW in this._delayInfo) WW.push(iW);
        else
          for (iW in this._vertexBuffers) WW.push(iW);
        return WW
      }
      updateIndices(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const mW = WW.length !== this._indices.length;
            if (OW || (this._indices = WW.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, WW, iW), mW)
              for (const WW of this._meshes) WW._createGlobalSubMesh(!0)
          } else this.setIndices(WW, null, !0)
      }
      setIndexBuffer(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = WW, this._totalVertices = iW, this._totalIndices = OW, WW.is32Bits = null === mW ? iW > 65535 : mW;
        for (const EW of this._meshes) EW._createGlobalSubMesh(!0), EW.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = WW, this._indexBufferIsUpdatable = OW, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, OW, "Geometry_" + this.id + "_IndexBuffer")), void 0 != iW && (this._totalVertices = iW);
        for (const EW of this._meshes) EW._createGlobalSubMesh(!mW), EW.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      IEW(WW, iW) {
        if (!this.isReady()) return null;
        const OW = this._indices;
        return iW || WW && 1 !== this._meshes.length ? OW.slice() : OW
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        WW && this._vertexArrayObjects && this._vertexArrayObjects[WW.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[WW.key]), delete this._vertexArrayObjects[WW.key])
      }
      releaseForMesh(WW, iW) {
        const OW = this._meshes,
          mW = OW.indexOf(WW); - 1 !== mW && (OW.splice(mW, 1), this._vertexArrayObjects && WW._invalidateInstanceVertexArrayObject(), WW._geometry = null, 0 === OW.length && iW && this.dispose())
      }
      applyToMesh(WW) {
        if (WW._geometry === this) return;
        const iW = WW._geometry;
        iW && iW.releaseForMesh(WW), this._vertexArrayObjects && WW._invalidateInstanceVertexArrayObject();
        const OW = this._meshes;
        WW._geometry = this, WW._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), OW.push(WW), this.isReady() ? this._applyToMesh(WW) : this._boundingInfo && WW.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!WW && (WW = this.getVerticesData(PW.k.PositionKind), !WW)) return;
          this._extend = (0, lW.d)(WW, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(WW) {
        for (const iW in this._vertexBuffers) {
          const OW = this._vertexBuffers[iW];
          OW._buffer.getBuffer() || OW.create(), iW === PW.k.PositionKind && (this._extend || this._updateExtend(), WW.buildBoundingInfo(this._extend.minimum, this._extend.maximum), WW._createGlobalSubMesh(WW.isUnIndexed), WW._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), WW._syncGeometryWithMorphTargetManager(), WW.synchronizeInstances()
      }
      _notifyUpdate(WW) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, WW), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const iW of this._meshes) iW._markSubMeshesAsAttributesDirty()
      }
      load(WW, iW) {
        2 !== this.delayLoadState && (this.isReady() ? iW && iW() : (this.delayLoadState = 2, this._queueLoad(WW, iW)))
      }
      _queueLoad(WW, iW) {
        this.delayLoadingFile && (WW.addPendingData(this), (async () => {
          try {
            const OW = await WW._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void WW.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(OW), this), this.delayLoadState = 1, this._delayInfo = [], WW.removePendingData(this);
            const mW = this._meshes,
              EW = mW.length;
            for (let WW = 0; WW < EW; WW++) this._applyToMesh(mW[WW]);
            iW && iW()
          } catch (OW) {
            WW.removePendingData(this), WW.Ay || ZW.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${OW}`)
          }
        })())
      }
      toLeftHanded() {
        const WW = this.IEW(!1);
        if (null != WW && WW.length > 0) {
          for (let iW = 0; iW < WW.length; iW += 3) {
            const OW = WW[iW + 0];
            WW[iW + 0] = WW[iW + 2], WW[iW + 2] = OW
          }
          this.setIndices(WW)
        }
        const iW = this.getVerticesData(PW.k.PositionKind, !1);
        if (null != iW && iW.length > 0) {
          for (let WW = 0; WW < iW.length; WW += 3) iW[WW + 2] = -iW[WW + 2];
          this.setVerticesData(PW.k.PositionKind, iW, !1)
        }
        const OW = this.getVerticesData(PW.k.NormalKind, !1);
        if (null != OW && OW.length > 0) {
          for (let WW = 0; WW < OW.length; WW += 3) OW[WW + 2] = -OW[WW + 2];
          this.setVerticesData(PW.k.NormalKind, OW, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const WW = this.getVerticesData(PW.k.PositionKind);
        if (!WW || 0 === WW.length) return !1;
        for (let iW = 3 * this._positionsCache.length, OW = this._positionsCache.length; iW < WW.length; iW += 3, ++OW) this._positionsCache[OW] = mW.q.FromArray(WW, iW);
        for (let iW = 0, OW = 0; iW < WW.length; iW += 3, ++OW) this._positionsCache[OW].set(WW[0 + iW], WW[1 + iW], WW[2 + iW]);
        return this._positionsCache.length = WW.length / 3, this._positions = this._positionsCache, !0
      }
      Ay() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const OW in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[OW]);
          this._vertexArrayObjects = {};
          const WW = this._meshes,
            iW = WW.length;
          for (let OW = 0; OW < iW; OW++) WW[OW]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const WW = this._meshes,
          iW = WW.length;
        let OW;
        for (OW = 0; OW < iW; OW++) this.releaseForMesh(WW[OW]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const mW in this._vertexBuffers) this._vertexBuffers[mW].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const WW = this._parentContainer.geometries.indexOf(this);
          WW > -1 && this._parentContainer.geometries.splice(WW, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(WW) {
        const iW = new UW(WW, this._scene),
          OW = this.IEW(void 0, !0);
        OW && iW.setIndices(OW);
        let mW, EW = !1;
        for (mW in this._vertexBuffers) {
          const WW = this.getVertexBuffer(mW),
            OW = WW.getData();
          if (!OW) continue;
          const NW = WW.isUpdatable(),
            LW = WW.getSize(),
            {
              type: cW,
              byteOffset: wW,
              byteStride: tW,
              normalized: ZW
            } = WW;
          EW = EW || NW;
          let xW = this._totalVertices;
          if (WW.getIsInstanced()) {
            let WW;
            WW = OW instanceof Array ? 4 * OW.length : OW.byteLength, xW = WW / tW
          }
          const lW = (0, jW.l)(OW, LW, cW, wW, tW, xW, !0),
            AW = new PW.k(this._engine, lW, mW, {
              updatable: NW,
              useBytes: !1,
              stride: LW,
              size: LW,
              offset: 0,
              type: cW,
              normalized: ZW,
              takeBufferOwnership: !0,
              instanced: WW.getIsInstanced()
            });
          iW.setVerticesBuffer(AW, xW)
        }
        for (mW in iW._updatable = EW, iW.delayLoadState = this.delayLoadState, iW.delayLoadingFile = this.delayLoadingFile, iW._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) iW._delayInfo = iW._delayInfo || [], iW._delayInfo.push(mW);
        return iW._boundingInfo = new wW.b(this._extend.minimum, this._extend.maximum), iW
      }
      serialize() {
        const WW = {};
        return WW.id = this.id, WW.uniqueId = this.uniqueId, WW.updatable = this._updatable, xW.d && xW.d.HasTags(this) && (WW.tags = xW.d.GetTags(this)), WW
      }
      _toNumberArray(WW) {
        return Array.isArray(WW) ? WW : Array.prototype.slice.call(WW)
      }
      clearCachedData() {
        this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
        for (const WW in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, WW) && (this._vertexBuffers[WW]._buffer._data = null)
      }
      serializeVerticeData() {
        const WW = this.serialize();
        return this.isVerticesDataPresent(PW.k.PositionKind) && (WW.positions = this._toNumberArray(this.getVerticesData(PW.k.PositionKind)), this.isVertexBufferUpdatable(PW.k.PositionKind) && (WW.positionsUpdatable = !0)), this.isVerticesDataPresent(PW.k.NormalKind) && (WW.normals = this._toNumberArray(this.getVerticesData(PW.k.NormalKind)), this.isVertexBufferUpdatable(PW.k.NormalKind) && (WW.normalsUpdatable = !0)), this.isVerticesDataPresent(PW.k.TangentKind) && (WW.tangents = this._toNumberArray(this.getVerticesData(PW.k.TangentKind)), this.isVertexBufferUpdatable(PW.k.TangentKind) && (WW.tangentsUpdatable = !0)), this.isVerticesDataPresent(PW.k.UVKind) && (WW.uvs = this._toNumberArray(this.getVerticesData(PW.k.UVKind)), this.isVertexBufferUpdatable(PW.k.UVKind) && (WW.uvsUpdatable = !0)), this.isVerticesDataPresent(PW.k.UV2Kind) && (WW.uvs2 = this._toNumberArray(this.getVerticesData(PW.k.UV2Kind)), this.isVertexBufferUpdatable(PW.k.UV2Kind) && (WW.uvs2Updatable = !0)), this.isVerticesDataPresent(PW.k.UV3Kind) && (WW.uvs3 = this._toNumberArray(this.getVerticesData(PW.k.UV3Kind)), this.isVertexBufferUpdatable(PW.k.UV3Kind) && (WW.uvs3Updatable = !0)), this.isVerticesDataPresent(PW.k.UV4Kind) && (WW.uvs4 = this._toNumberArray(this.getVerticesData(PW.k.UV4Kind)), this.isVertexBufferUpdatable(PW.k.UV4Kind) && (WW.uvs4Updatable = !0)), this.isVerticesDataPresent(PW.k.UV5Kind) && (WW.uvs5 = this._toNumberArray(this.getVerticesData(PW.k.UV5Kind)), this.isVertexBufferUpdatable(PW.k.UV5Kind) && (WW.uvs5Updatable = !0)), this.isVerticesDataPresent(PW.k.UV6Kind) && (WW.uvs6 = this._toNumberArray(this.getVerticesData(PW.k.UV6Kind)), this.isVertexBufferUpdatable(PW.k.UV6Kind) && (WW.uvs6Updatable = !0)), this.isVerticesDataPresent(PW.k.ColorKind) && (WW.colors = this._toNumberArray(this.getVerticesData(PW.k.ColorKind)), this.isVertexBufferUpdatable(PW.k.ColorKind) && (WW.colorsUpdatable = !0)), this.isVerticesDataPresent(PW.k.MatricesIndicesKind) && (WW.matricesIndices = this._toNumberArray(this.getVerticesData(PW.k.MatricesIndicesKind)), WW.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(PW.k.MatricesIndicesKind) && (WW.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(PW.k.MatricesWeightsKind) && (WW.matricesWeights = this._toNumberArray(this.getVerticesData(PW.k.MatricesWeightsKind)), this.isVertexBufferUpdatable(PW.k.MatricesWeightsKind) && (WW.matricesWeightsUpdatable = !0)), WW.indices = this._toNumberArray(this.IEW()), WW
      }
      static ExtractFromMesh(WW, iW) {
        const OW = WW._geometry;
        return OW ? OW.copy(iW) : null
      }
      static RandomId() {
        return tW.f.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(WW, iW) {
        for (let OW = 0; OW < iW.geometries.length; OW++)
          if (iW.geometries[OW]._loadedUniqueId === WW) return iW.geometries[OW];
        return null
      }
      static _ImportGeometry(WW, iW) {
        const OW = iW.bD(),
          mW = WW.geometryUniqueId,
          NW = WW.geometryId;
        if (mW || NW) {
          const WW = mW ? this._GetGeometryByLoadedUniqueId(mW, OW) : OW.getGeometryById(NW);
          WW && WW.applyToMesh(iW)
        } else if (WW instanceof ArrayBuffer) {
          const OW = iW._binaryInfo;
          if (OW.positionsAttrDesc && OW.positionsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.positionsAttrDesc.offset, OW.positionsAttrDesc.count);
            iW.setVerticesData(PW.k.PositionKind, mW, !1)
          }
          if (OW.normalsAttrDesc && OW.normalsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.normalsAttrDesc.offset, OW.normalsAttrDesc.count);
            iW.setVerticesData(PW.k.NormalKind, mW, !1)
          }
          if (OW.tangetsAttrDesc && OW.tangetsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.tangetsAttrDesc.offset, OW.tangetsAttrDesc.count);
            iW.setVerticesData(PW.k.TangentKind, mW, !1)
          }
          if (OW.uvsAttrDesc && OW.uvsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvsAttrDesc.offset, OW.uvsAttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UVKind, mW, !1)
          }
          if (OW.uvs2AttrDesc && OW.uvs2AttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvs2AttrDesc.offset, OW.uvs2AttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UV2Kind, mW, !1)
          }
          if (OW.uvs3AttrDesc && OW.uvs3AttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvs3AttrDesc.offset, OW.uvs3AttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UV3Kind, mW, !1)
          }
          if (OW.uvs4AttrDesc && OW.uvs4AttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvs4AttrDesc.offset, OW.uvs4AttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UV4Kind, mW, !1)
          }
          if (OW.uvs5AttrDesc && OW.uvs5AttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvs5AttrDesc.offset, OW.uvs5AttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UV5Kind, mW, !1)
          }
          if (OW.uvs6AttrDesc && OW.uvs6AttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.uvs6AttrDesc.offset, OW.uvs6AttrDesc.count);
            if (bW.b)
              for (let WW = 1; WW < mW.length; WW += 2) mW[WW] = 1 - mW[WW];
            iW.setVerticesData(PW.k.UV6Kind, mW, !1)
          }
          if (OW.colorsAttrDesc && OW.colorsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.colorsAttrDesc.offset, OW.colorsAttrDesc.count);
            iW.setVerticesData(PW.k.ColorKind, mW, !1, OW.colorsAttrDesc.stride)
          }
          if (OW.matricesIndicesAttrDesc && OW.matricesIndicesAttrDesc.count > 0) {
            const mW = new Int32Array(WW, OW.matricesIndicesAttrDesc.offset, OW.matricesIndicesAttrDesc.count),
              EW = [];
            for (let WW = 0; WW < mW.length; WW++) {
              const iW = mW[WW];
              EW.push(255 & iW), EW.push((65280 & iW) >> 8), EW.push((16711680 & iW) >> 16), EW.push(iW >> 24 & 255)
            }
            iW.setVerticesData(PW.k.MatricesIndicesKind, EW, !1)
          }
          if (OW.matricesIndicesExtraAttrDesc && OW.matricesIndicesExtraAttrDesc.count > 0) {
            const mW = new Int32Array(WW, OW.matricesIndicesExtraAttrDesc.offset, OW.matricesIndicesExtraAttrDesc.count),
              EW = [];
            for (let WW = 0; WW < mW.length; WW++) {
              const iW = mW[WW];
              EW.push(255 & iW), EW.push((65280 & iW) >> 8), EW.push((16711680 & iW) >> 16), EW.push(iW >> 24 & 255)
            }
            iW.setVerticesData(PW.k.MatricesIndicesExtraKind, EW, !1)
          }
          if (OW.matricesWeightsAttrDesc && OW.matricesWeightsAttrDesc.count > 0) {
            const mW = new Float32Array(WW, OW.matricesWeightsAttrDesc.offset, OW.matricesWeightsAttrDesc.count);
            iW.setVerticesData(PW.k.MatricesWeightsKind, mW, !1)
          }
          if (OW.indicesAttrDesc && OW.indicesAttrDesc.count > 0) {
            const mW = new Int32Array(WW, OW.indicesAttrDesc.offset, OW.indicesAttrDesc.count);
            iW.setIndices(mW, null)
          }
          if (OW.subMeshesAttrDesc && OW.subMeshesAttrDesc.count > 0) {
            const mW = new Int32Array(WW, OW.subMeshesAttrDesc.offset, 5 * OW.subMeshesAttrDesc.count);
            iW.hY = [];
            for (let WW = 0; WW < OW.subMeshesAttrDesc.count; WW++) {
              const OW = mW[5 * WW + 0],
                EW = mW[5 * WW + 1],
                NW = mW[5 * WW + 2],
                PW = mW[5 * WW + 3],
                cW = mW[5 * WW + 4];
              LW.d.AddToMesh(OW, EW, NW, PW, cW, iW)
            }
          }
        } else if (WW.positions && WW.normals && WW.indices) {
          if (iW.setVerticesData(PW.k.PositionKind, WW.positions, WW.positions._updatable || WW.positionsUpdatable), iW.setVerticesData(PW.k.NormalKind, WW.normals, WW.normals._updatable || WW.normalsUpdatable), WW.tangents && iW.setVerticesData(PW.k.TangentKind, WW.tangents, WW.tangents._updatable || WW.tangentsUpdatable), WW.uvs && iW.setVerticesData(PW.k.UVKind, WW.uvs, WW.uvs._updatable || WW.uvsUpdatable), WW.uvs2 && iW.setVerticesData(PW.k.UV2Kind, WW.uvs2, WW.uvs2._updatable || WW.uvs2Updatable), WW.uvs3 && iW.setVerticesData(PW.k.UV3Kind, WW.uvs3, WW.uvs3._updatable || WW.uvs3Updatable), WW.uvs4 && iW.setVerticesData(PW.k.UV4Kind, WW.uvs4, WW.uvs4._updatable || WW.uvs4Updatable), WW.uvs5 && iW.setVerticesData(PW.k.UV5Kind, WW.uvs5, WW.uvs5._updatable || WW.uvs5Updatable), WW.uvs6 && iW.setVerticesData(PW.k.UV6Kind, WW.uvs6, WW.uvs6._updatable || WW.uvs6Updatable), WW.colors && iW.setVerticesData(PW.k.ColorKind, EW.d.CheckColors4(WW.colors, WW.positions.length / 3), WW.colors._updatable), WW.matricesIndices)
            if (WW.matricesIndices._isExpanded || WW.matricesIndicesExpanded) delete WW.matricesIndices._isExpanded, delete WW.matricesIndicesExpanded, iW.setVerticesData(PW.k.MatricesIndicesKind, WW.matricesIndices, WW.matricesIndices._updatable || WW.matricesIndicesUpdatable);
            else {
              const OW = [];
              for (let iW = 0; iW < WW.matricesIndices.length; iW++) {
                const mW = WW.matricesIndices[iW];
                OW.push(255 & mW), OW.push((65280 & mW) >> 8), OW.push((16711680 & mW) >> 16), OW.push(mW >> 24 & 255)
              }
              iW.setVerticesData(PW.k.MatricesIndicesKind, OW, WW.matricesIndices._updatable || WW.matricesIndicesUpdatable)
            } if (WW.matricesIndicesExtra)
            if (WW.matricesIndicesExtraExpanded || WW.matricesIndicesExtra._isExpanded) delete WW.matricesIndices._isExpanded, delete WW.matricesIndicesExtraExpanded, iW.setVerticesData(PW.k.MatricesIndicesExtraKind, WW.matricesIndicesExtra, WW.matricesIndicesExtra._updatable || WW.matricesIndicesExtraUpdatable);
            else {
              const OW = [];
              for (let iW = 0; iW < WW.matricesIndicesExtra.length; iW++) {
                const mW = WW.matricesIndicesExtra[iW];
                OW.push(255 & mW), OW.push((65280 & mW) >> 8), OW.push((16711680 & mW) >> 16), OW.push(mW >> 24 & 255)
              }
              iW.setVerticesData(PW.k.MatricesIndicesExtraKind, OW, WW.matricesIndicesExtra._updatable || WW.matricesIndicesExtraUpdatable)
            } WW.matricesWeights && (UW._CleanMatricesWeights(WW, iW), iW.setVerticesData(PW.k.MatricesWeightsKind, WW.matricesWeights, WW.matricesWeights._updatable)), WW.matricesWeightsExtra && iW.setVerticesData(PW.k.MatricesWeightsExtraKind, WW.matricesWeightsExtra, WW.matricesWeights._updatable), iW.setIndices(WW.indices, null)
        }
        if (WW.hY) {
          iW.hY = [];
          for (let OW = 0; OW < WW.hY.length; OW++) {
            const mW = WW.hY[OW];
            LW.d.AddToMesh(mW.materialIndex, mW.verticesStart, mW.verticesCount, mW.indexStart, mW.indexCount, iW)
          }
        }
        iW._shouldGenerateFlatShading && (iW.convertToFlatShadedMesh(), iW._shouldGenerateFlatShading = !1), iW.computeWorldMatrix(!0), OW.onMeshImportedObservable.notifyObservers(iW)
      }
      static _CleanMatricesWeights(WW, iW) {
        const OW = .001;
        if (!cW.d.CleanBoneMatrixWeights) return;
        let mW;
        if (!(WW.skeletonId > -1)) return;
        {
          const OW = iW.bD().getLastSkeletonById(WW.skeletonId);
          if (!OW) return;
          mW = OW.bones.length
        }
        const EW = iW.getVerticesData(PW.k.MatricesIndicesKind),
          NW = iW.getVerticesData(PW.k.MatricesIndicesExtraKind),
          LW = WW.matricesWeights,
          wW = WW.matricesWeightsExtra,
          tW = WW.numBoneInfluencer,
          ZW = LW.length;
        for (let PW = 0; PW < ZW; PW += 4) {
          let WW = 0,
            iW = -1;
          for (let mW = 0; mW < 4; mW++) {
            const EW = LW[PW + mW];
            WW += EW, EW < OW && iW < 0 && (iW = mW)
          }
          if (wW)
            for (let mW = 0; mW < 4; mW++) {
              const EW = wW[PW + mW];
              WW += EW, EW < OW && iW < 0 && (iW = mW + 4)
            }
          if ((iW < 0 || iW > tW - 1) && (iW = tW - 1), WW > OW) {
            const iW = 1 / WW;
            for (let WW = 0; WW < 4; WW++) LW[PW + WW] *= iW;
            if (wW)
              for (let WW = 0; WW < 4; WW++) wW[PW + WW] *= iW
          } else iW >= 4 ? (wW[PW + iW - 4] = 1 - WW, NW[PW + iW - 4] = mW) : (LW[PW + iW] = 1 - WW, EW[PW + iW] = mW)
        }
        iW.setVerticesData(PW.k.MatricesIndicesKind, EW), WW.matricesWeightsExtra && iW.setVerticesData(PW.k.MatricesIndicesExtraKind, NW)
      }
      static Parse(WW, iW, OW) {
        const EW = new UW(WW.id, iW, void 0, WW.updatable);
        return EW._loadedUniqueId = WW.uniqueId, xW.d && xW.d.AddTagsTo(EW, WW.tags), WW.delayLoadingFile ? (EW.delayLoadState = 4, EW.delayLoadingFile = OW + WW.delayLoadingFile, EW._boundingInfo = new wW.b(mW.q.FromArray(WW.boundingBoxMinimum), mW.q.FromArray(WW.boundingBoxMaximum)), EW._delayInfo = [], WW.hasUVs && EW._delayInfo.push(PW.k.UVKind), WW.hasUVs2 && EW._delayInfo.push(PW.k.UV2Kind), WW.hasUVs3 && EW._delayInfo.push(PW.k.UV3Kind), WW.hasUVs4 && EW._delayInfo.push(PW.k.UV4Kind), WW.hasUVs5 && EW._delayInfo.push(PW.k.UV5Kind), WW.hasUVs6 && EW._delayInfo.push(PW.k.UV6Kind), WW.hasColors && EW._delayInfo.push(PW.k.ColorKind), WW.hasMatricesIndices && EW._delayInfo.push(PW.k.MatricesIndicesKind), WW.hasMatricesWeights && EW._delayInfo.push(PW.k.MatricesWeightsKind), EW._delayLoadingFunction = NW.c.ImportVertexData) : NW.c.ImportVertexData(WW, EW), iW.pushGeometry(EW, !0), EW
      }
    }
  },
  41976: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW,
      i: () => AW
    });
    var mW = OW(38241),
      EW = OW(39911),
      NW = OW(41942),
      PW = OW(41919),
      LW = OW(39908),
      cW = OW(41948),
      wW = OW(41660),
      tW = OW(38299);
    class ZW extends NW.b {
      constructor(WW, iW) {
        super(WW, iW.bD()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, iW.LWW(this), this._sourceMesh = iW, this._unIndexed = iW._unIndexed, this.position.HJ(iW.position), this.rotation.HJ(iW.rotation), this.YZ.HJ(iW.YZ), iW.rotationQuaternion && (this.rotationQuaternion = iW.rotationQuaternion.clone()), this.animations = iW.animations.slice();
        for (const OW of iW.getAnimationRanges()) null != OW && this.createAnimationRange(OW.name, OW.from, OW.to);
        if (this.infiniteDistance = iW.infiniteDistance, this.setPivotMatrix(iW.getPivotMatrix()), iW.skeleton || iW.morphTargetManager || !iW.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const WW = iW.KV();
          this.buildBoundingInfo(WW.minimum, WW.maximum)
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
      set receiveShadows(WW) {
        this._sourceMesh?.receiveShadows !== WW && EW.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(WW) {
        this._sourceMesh?.material !== WW && EW.b.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(WW) {
        this._sourceMesh?.visibility !== WW && EW.b.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(WW) {
        this._sourceMesh?.skeleton !== WW && EW.b.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(WW) {
        this._sourceMesh && WW !== this._sourceMesh.renderingGroupId && EW.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(WW) {
        this._sourceMesh && WW !== this._sourceMesh.meshBlendingTag && EW.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get WNW() {
        return this._sourceMesh
      }
      get geometry() {
        return this._sourceMesh._geometry
      }
      createInstance(WW) {
        return this._sourceMesh.createInstance(WW)
      }
      isReady() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return this._sourceMesh.isReady(WW, !0)
      }
      getVerticesData(WW, iW, OW) {
        return this._sourceMesh.getVerticesData(WW, iW, OW)
      }
      copyVerticesData(WW, iW) {
        this._sourceMesh.copyVerticesData(WW, iW)
      }
      getVertexBuffer(WW, iW) {
        return this._sourceMesh.getVertexBuffer(WW, iW)
      }
      setVerticesData(WW, iW, OW, mW) {
        return this.WNW && this.WNW.setVerticesData(WW, iW, OW, mW), this.WNW
      }
      updateVerticesData(WW, iW, OW, mW) {
        return this.WNW && this.WNW.updateVerticesData(WW, iW, OW, mW), this.WNW
      }
      setIndices(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.WNW && this.WNW.setIndices(WW, iW), this.WNW
      }
      isVerticesDataPresent(WW) {
        return this._sourceMesh.isVerticesDataPresent(WW)
      }
      IEW() {
        return this._sourceMesh.IEW()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let WW, iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.KV().isLocked) return this;
        WW = "object" === typeof iW ? iW : {
          applySkeleton: iW,
          applyMorph: OW
        };
        const mW = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(WW, null, wW.k.PositionKind), mW), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(WW, iW) {
        if (super._activate(WW, iW), this._sourceMesh.hY || EW.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, WW), iW) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== cW.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new mW.d);
          const WW = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, mW.l.fA[7].HJ(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.HJ(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.HJ(mW.l.fA[7]), this._currentLOD._masterMesh = WW, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get KD() {
        return !0
      }
      getLOD(WW) {
        if (!WW) return this;
        const iW = this.WNW.getLODLevels();
        if (iW && 0 !== iW.length) {
          const iW = this.KV();
          this._currentLOD = this.WNW.getLOD(WW, iW.HEW)
        } else this._currentLOD = this.WNW;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(WW) {
        return this.WNW._preActivateForIntermediateRendering(WW)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.hY)
          for (let WW = 0; WW < this._sourceMesh.hY.length; WW++) this._sourceMesh.hY[WW].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.KV().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(WW);
        if (LW.c.DeepCopy(this, mW, ["name", "hY", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "WNW", "KD", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "QEW", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "sLW", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), iW && (mW.parent = iW), !OW)
          for (let EW = 0; EW < this.bD().meshes.length; EW++) {
            const WW = this.bD().meshes[EW];
            WW.parent === this && WW.clone(WW.name, mW)
          }
        return mW.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(mW), mW
      }
      dispose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.wWW(this), super.dispose(WW, iW)
      }
      _serializeAsParent(WW) {
        super._serializeAsParent(WW), WW.parentId = this._sourceMesh.uniqueId, WW.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0, iW && iW.newSourcedMesh);
        mW && OW && OW(this, mW);
        for (const EW of this.getChildTransformNodes(!0)) EW.instantiateHierarchy(mW, iW, OW);
        return mW
      }
    }
    let xW = !1;

    function lW(WW, iW, OW, mW, EW) {
      for (let NW = 0; NW < iW.length; NW++) {
        const PW = WW[iW[NW]] ?? 0,
          LW = EW + OW[NW];
        PW.toArray ? PW.toArray(mW, LW) : PW.copyToArray ? PW.copyToArray(mW, LW) : mW[LW] = PW
      }
    }

    function AW() {
      xW || (xW = !0, PW.e._instancedMeshFactory = (WW, iW) => {
        const OW = new ZW(WW, iW);
        if (iW.bV) {
          OW.bV = {};
          for (const WW in iW.bV) OW.bV[WW] = iW.bV[WW]
        }
        return OW
      }, PW.e.prototype.lV = function(WW, iW) {
        if (!this.bV) {
          this.bV = {};
          for (const WW of this.instances) WW.bV = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.VA().getCaps().vertexArrayObject ? {} : void 0
        }), this.bV[WW] = null, this._userInstancedBuffersStorage.strides[WW] = iW;
        const OW = this._userInstancedBuffersStorage;
        OW.interleavedKinds = [], OW.interleavedOffsets = [], OW.interleavedRowStride = 0;
        for (const mW in OW.strides) OW.interleavedKinds.push(mW), OW.interleavedOffsets.push(OW.interleavedRowStride), OW.interleavedRowStride += OW.strides[mW];
        OW.interleavedData = new Float32Array(32 * OW.interleavedRowStride);
        for (const mW in OW.interleavedBuffers) OW.interleavedBuffers[mW].buffer.dispose();
        OW.interleavedBuffers = {}, OW.vertexBuffers[WW] = null;
        for (const mW of this.instances) mW.bV[WW] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, PW.e.prototype._processInstancedBuffers = function(WW, iW) {
        const OW = this._userInstancedBuffersStorage,
          mW = OW.interleavedRowStride;
        if (!mW) return;
        const EW = WW ? WW.length : 0,
          NW = (EW + 1) * mW;
        let PW = OW.interleavedData;
        if (PW.length < NW) {
          let WW = PW.length;
          for (; WW < NW;) WW *= 2;
          PW = OW.interleavedData = new Float32Array(WW)
        }
        const LW = OW.interleavedKinds,
          cW = OW.interleavedOffsets;
        let tW = 0;
        iW && (lW(this.bV, LW, cW, PW, tW), tW += mW);
        for (let wW = 0; wW < EW; wW++) lW(WW[wW].bV, LW, cW, PW, tW), tW += mW;
        let ZW = "shared",
          xW = OW.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (ZW = this._instanceDataStorage.engine.currentRenderPassId, OW.renderPasses || (OW.renderPasses = {}), OW.renderPasses[ZW] || (OW.renderPasses[ZW] = {}), xW = OW.renderPasses[ZW]);
        const AW = OW.interleavedBuffers[ZW];
        let bW = !AW || AW.data !== PW;
        for (let wW = 0; !bW && wW < LW.length; wW++) bW = !xW[LW[wW]];
        if (!bW) return void AW.buffer.updateDirectly(PW, 0);
        AW?.buffer.dispose();
        const jW = new wW.b(this.VA(), PW, !0, mW, !1, !0);
        for (let wW = 0; wW < LW.length; wW++) {
          const WW = LW[wW],
            iW = jW.createVertexBuffer(WW, cW[wW], OW.strides[WW]);
          iW.hashCode += iW.byteOffset * 2 ** 24, xW[WW] = iW
        }
        OW.interleavedBuffers[ZW] = {
          buffer: jW,
          data: PW
        }, this._invalidateInstanceVertexArrayObject()
      }, PW.e.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const WW in this._userInstancedBuffersStorage.vertexArrayObjects) this.VA().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[WW]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, PW.e.prototype._disposeInstanceSpecificData = function() {
        for (const iW in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[iW].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const iW in this.bV) this._userInstancedBuffersStorage.vertexBuffers[iW] && this._userInstancedBuffersStorage.vertexBuffers[iW].dispose();
        const WW = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (WW) {
          for (const iW in WW) WW[iW].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.bV = {}
      }, (0, tW.h)("BABYLON.InstancedMesh", ZW))
    }
  },
  41919: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => zW,
      h: () => QW,
      j: () => BW
    });
    var mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW = OW(38276),
      kW = OW(41620),
      sW = OW(41558),
      MW = OW(39908),
      KW = OW(41544),
      SW = OW(41922),
      YW = OW(41723),
      yW = OW(38241),
      TW = OW(38372),
      JW = OW(41732),
      hW = OW(41660),
      HW = OW(41927),
      nW = OW(41929),
      uW = OW(41942),
      oW = OW(41808),
      dW = OW(41805),
      eW = OW(41892),
      vW = OW(41957),
      gW = OW(41936),
      DW = OW(41538),
      VW = OW(39911),
      pW = OW(38299),
      fW = OW(41415),
      CW = OW(41689);
    class XW {
      constructor(WW, iW) {
        this.distanceOrScreenCoverage = WW, this.mesh = iW
      }
    }
    class BW {}
    class qW {
      constructor() {
        this.batchCache = new GW(this), this.batchCacheReplacementModeInFrozenMode = new GW(this), this.instancesBufferSize = 2048
      }
    }
    class RW {
      constructor() {
        this.renderPasses = {}
      }
    }
    class GW {
      constructor(WW) {
        this.parent = WW, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class IW {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class aW {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const rW = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class zW extends uW.b {
      static _GetDefaultSideOrientation(WW) {
        return WW || zW.FRONTSIDE
      }
      get useLODScreenCoverage() {
        return this._internalMeshDataInfo._useLODScreenCoverage
      }
      set useLODScreenCoverage(WW) {
        this._internalMeshDataInfo._useLODScreenCoverage = WW, this._sortLODLevels()
      }
      get computeBonesUsingShaders() {
        return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
      }
      set computeBonesUsingShaders(WW) {
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== WW && (WW && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(hW.k.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(hW.k.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = WW, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new UW.e), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new UW.e), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new UW.e), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new UW.e), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new UW.e), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(WW) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(WW)
      }
      get QEW() {
        return this.instances.length > 0
      }
      get hasThinInstances() {
        return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
      }
      get forcedInstanceCount() {
        return this._internalMeshDataInfo._forcedInstanceCount
      }
      set forcedInstanceCount(WW) {
        this._internalMeshDataInfo._forcedInstanceCount = WW
      }
      get sideOrientation() {
        return this._internalMeshDataInfo._sideOrientation
      }
      set sideOrientation(WW) {
        this._internalMeshDataInfo._sideOrientation = WW, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === WW || !this._scene.useRightHandedSystem && 0 === WW
      }
      get _effectiveSideOrientation() {
        return this._internalMeshDataInfo._effectiveSideOrientation
      }
      get overrideMaterialSideOrientation() {
        return this.sideOrientation
      }
      set overrideMaterialSideOrientation(WW) {
        this.sideOrientation = WW, this.material && (this.material.sideOrientation = null)
      }
      get overrideRenderingFillMode() {
        return this._internalMeshDataInfo._overrideRenderingFillMode
      }
      set overrideRenderingFillMode(WW) {
        this._internalMeshDataInfo._overrideRenderingFillMode = WW
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(WW) {
        WW && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (WW.sideOrientation = null), this._setMaterial(WW)
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
      set isUnIndexed(WW) {
        this._unIndexed !== WW && (this._unIndexed = WW, this._markSubMeshesAsAttributesDirty())
      }
      get worldMatrixInstancedBuffer() {
        const WW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return WW ? WW.instancesData : void 0
      }
      get previousWorldMatrixInstancedBuffer() {
        const WW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
        return WW ? WW.instancesPreviousData : void 0
      }
      get manualUpdateOfWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.manualUpdate
      }
      set manualUpdateOfWorldMatrixInstancedBuffer(WW) {
        this._instanceDataStorage.manualUpdate = WW
      }
      get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
        return this._instanceDataStorage.previousManualUpdate
      }
      set manualUpdateOfPreviousWorldMatrixInstancedBuffer(WW) {
        this._instanceDataStorage.previousManualUpdate = WW
      }
      get forceWorldMatrixInstancedBufferUpdate() {
        return this._instanceDataStorage.forceMatrixUpdates
      }
      set forceWorldMatrixInstancedBufferUpdate(WW) {
        this._instanceDataStorage.forceMatrixUpdates = WW
      }
      _copySource(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EW = this.bD();
        if (WW._geometry && WW._geometry.applyToMesh(this), MW.c.DeepCopy(WW, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "QEW", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "KD", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "sLW", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = WW, EW.useClonedMeshMap && (WW._internalMeshDataInfo.meshMap || (WW._internalMeshDataInfo.meshMap = {}), WW._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = WW._originalBuilderSideOrientation, this._creationDataStorage = WW._creationDataStorage, WW._ranges) {
          const iW = WW._ranges;
          for (const WW in iW) Object.prototype.hasOwnProperty.call(iW, WW) && iW[WW] && this.createAnimationRange(WW, iW[WW].from, iW[WW].to)
        }
        if (WW.metadata && WW.metadata.clone ? this.metadata = WW.metadata.clone() : this.metadata = WW.metadata, this._internalMetadata = WW._internalMetadata, this.meshBlendingTag = WW.meshBlendingTag, KW.d && KW.d.HasTags(WW) && KW.d.AddTagsTo(this, KW.d.GetTags(WW, !0)), this.WK(WW.isEnabled(!1)), this.parent = WW.parent, this.setPivotMatrix(WW.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + WW.id, this.material = WW.material, !iW) {
          const EW = WW.getDescendants(!0);
          for (let WW = 0; WW < EW.length; WW++) {
            const NW = EW[WW];
            NW._isMesh ? (rW.parent = this, rW.doNotCloneChildren = iW, rW.clonePhysicsImpostor = OW, rW.cloneThinInstances = mW, NW.clone(this.name + "." + NW.name, rW)) : NW.clone && NW.clone(this.name + "." + NW.name, this)
          }
        }
        if (WW.morphTargetManager && (this.morphTargetManager = WW.morphTargetManager), (0, fW.e)(EW.getPhysicsEngine)) {
          const iW = EW.getPhysicsEngine();
          if (OW && iW)
            if (1 === iW.getPluginVersion()) {
              const OW = iW.getImpostorForPhysicsObject(WW);
              OW && (this.physicsImpostor = OW.clone(this))
            } else 2 === iW.getPluginVersion() && WW.physicsBody && WW.physicsBody.clone(this)
        }
        for (let NW = 0; NW < EW.vY.length; NW++) {
          const iW = EW.vY[NW];
          iW.emitter === WW && iW.clone(iW.name, this)
        }
        if (this.skeleton = WW.skeleton, mW && (WW._thinInstanceDataStorage.matrixData ? (this.kWW("matrix", new Float32Array(WW._thinInstanceDataStorage.matrixData), 16, !WW._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = WW._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = WW._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = WW._thinInstanceDataStorage.matrixBufferSize, WW._userThinInstanceBuffersStorage)) {
          const iW = WW._userThinInstanceBuffersStorage;
          for (const WW in iW.data) this.kWW(WW, new Float32Array(iW.data[WW]), iW.strides[WW], !iW.vertexBuffers?.[WW]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[WW] = iW.sizes[WW]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(WW) {
        let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          NW = arguments.length > 4 ? arguments[4] : void 0,
          PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(WW, OW), this._internalMeshDataInfo = new aW, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new IW, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = zW.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, OW = this.bD(), this._instanceDataStorage = new RW, this._instanceDataStorage.engine = OW.VA(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new qW), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (WW, iW, OW) => {
          WW && OW && (this._uniformBuffer ? this.transferToEffect(iW) : OW.bindOnlyWorldMatrix(iW))
        };
        let LW = !1;
        if (mW && void 0 === mW._addToSceneRootNodes) {
          const WW = mW;
          iW = WW.parent ?? null, EW = WW.source ?? null, NW = WW.doNotCloneChildren ?? !1, PW = WW.clonePhysicsImpostor ?? !0, LW = WW.cloneThinInstances ?? !1
        } else iW = mW;
        EW && this._copySource(EW, NW, PW, LW), null !== iW && (this.parent = iW), this._instanceDataStorage.hardwareInstancedRendering = this.VA().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = WW => {
          WW.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new UW.e(this._internalMeshDataInfo._onMeshReadyObserverAdded), EW && EW.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = 0 === this.getTotalVertices() || iW && iW.doNotInstantiate && (!0 === iW.doNotInstantiate || iW.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        mW.parent = WW || this.parent, mW.position = this.position.clone(), mW.YZ = this.YZ.clone(), this.rotationQuaternion ? mW.rotationQuaternion = this.rotationQuaternion.clone() : mW.rotation = this.rotation.clone(), OW && OW(this, mW);
        for (const EW of this.getChildTransformNodes(!0)) "InstancedMesh" === EW.getClassName() && "Mesh" === mW.getClassName() && EW.WNW === this ? EW.instantiateHierarchy(mW, {
          doNotInstantiate: iW && iW.doNotInstantiate || !1,
          newSourcedMesh: mW
        }, OW) : EW.instantiateHierarchy(mW, iW, OW);
        return mW
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(WW) {
        let iW = super.toString(WW);
        if (iW += ", n vertices: " + this.getTotalVertices(), iW += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let OW = 0; OW < this.animations.length; OW++) iW += ", animation[0]: " + this.animations[OW].toString(WW);
        if (WW)
          if (this._geometry) {
            const WW = this.IEW(),
              OW = this.getVerticesData(hW.k.PositionKind);
            OW && WW && (iW += ", flat shading: " + (OW.length / 3 === WW.length ? "YES" : "NO"))
          } else iW += ", flat shading: UNKNOWN";
        return iW
      }
      _unBindEffect() {
        super._unBindEffect();
        for (const WW of this.instances) WW._unBindEffect()
      }
      get hasLODLevels() {
        return this._internalMeshDataInfo._LODLevels.length > 0
      }
      getLODLevels() {
        return this._internalMeshDataInfo._LODLevels
      }
      _sortLODLevels() {
        const WW = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
        this._internalMeshDataInfo._LODLevels.sort(((iW, OW) => iW.distanceOrScreenCoverage < OW.distanceOrScreenCoverage ? WW : iW.distanceOrScreenCoverage > OW.distanceOrScreenCoverage ? -WW : 0))
      }
      addLODLevel(WW, iW) {
        if (iW && iW._masterMesh) return VW.b.Warn("You cannot use a mesh as LOD level twice"), this;
        const OW = new XW(WW, iW);
        return this._internalMeshDataInfo._LODLevels.push(OW), iW && (iW._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(WW) {
        const iW = this._internalMeshDataInfo;
        for (let OW = 0; OW < iW._LODLevels.length; OW++) {
          const mW = iW._LODLevels[OW];
          if (mW.distanceOrScreenCoverage === WW) return mW.mesh
        }
        return null
      }
      removeLODLevel(WW) {
        const iW = this._internalMeshDataInfo;
        for (let OW = 0; OW < iW._LODLevels.length; OW++) iW._LODLevels[OW].mesh === WW && (iW._LODLevels.splice(OW, 1), WW && (WW._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(WW, iW) {
        const OW = this._internalMeshDataInfo;
        if (!OW._LODLevels || 0 === OW._LODLevels.length) return this;
        const mW = iW || this.KV().HEW,
          EW = WW.mode === YW.e.ORTHOGRAPHIC_CAMERA ? WW.minZ : mW.centerWorld.subtract(WW.globalPosition).length();
        let NW = EW,
          PW = 1;
        if (OW._useLODScreenCoverage) {
          const iW = WW.screenArea;
          let OW = mW.radiusWorld * WW.minZ / EW;
          OW = OW * OW * Math.PI, NW = OW / iW, PW = -1
        }
        if (PW * OW._LODLevels[OW._LODLevels.length - 1].distanceOrScreenCoverage > PW * NW) return this.onLODLevelSelection && this.onLODLevelSelection(NW, this, this), this;
        for (let LW = 0; LW < OW._LODLevels.length; LW++) {
          const WW = OW._LODLevels[LW];
          if (PW * WW.distanceOrScreenCoverage < PW * NW) {
            if (WW.mesh) {
              if (4 === WW.mesh.delayLoadState) return WW.mesh._checkDelayState(), this;
              if (2 === WW.mesh.delayLoadState) return this;
              WW.mesh._preActivate(), WW.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(NW, this, WW.mesh), WW.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(NW, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(WW, iW, OW, mW) {
        if (!this._geometry) return null;
        let EW = mW ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[WW]?.getFloatData(this.instances.length + 1, OW || iW && 1 !== this._geometry.meshes.length);
        return EW || (EW = this._geometry.getVerticesData(WW, iW, OW)), EW
      }
      copyVerticesData(WW, iW) {
        this._geometry && this._geometry.copyVerticesData(WW, iW)
      }
      getVertexBuffer(WW, iW) {
        return this._geometry ? (iW ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[WW]) ?? this._geometry.getVertexBuffer(WW) : null
      }
      isVerticesDataPresent(WW, iW) {
        return this._geometry ? !iW && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[WW] || this._geometry.isVerticesDataPresent(WW) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(WW)
      }
      isVertexBufferUpdatable(WW, iW) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(WW);
        if (!iW) {
          const iW = this._userInstancedBuffersStorage?.vertexBuffers[WW];
          if (iW) return iW.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(WW)
      }
      getVerticesDataKinds(WW) {
        if (!this._geometry) {
          const WW = [];
          if (this._delayInfo)
            for (const iW of this._delayInfo) WW.push(iW);
          return WW
        }
        const iW = this._geometry.getVerticesDataKinds();
        if (!WW && this._userInstancedBuffersStorage)
          for (const OW in this._userInstancedBuffersStorage.vertexBuffers) - 1 === iW.indexOf(OW) && iW.push(OW);
        return iW
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      IEW(WW, iW) {
        return this._geometry ? this._geometry.IEW(WW, iW) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(WW)) return !1;
        if (!this.hY || 0 === this.hY.length) return !0;
        if (!WW) return !0;
        const OW = this.VA(),
          mW = this.bD(),
          EW = iW || OW.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const NW = this.material || mW.defaultMaterial;
        if (NW)
          if (NW._storeEffectOnSubMeshes)
            for (const LW of this.hY) {
              const WW = LW.BA();
              if (WW)
                if (WW._storeEffectOnSubMeshes) {
                  if (!WW.isReadyForSubMesh(this, LW, EW)) return !1
                } else if (!WW.isReady(this, EW)) return !1
            } else if (!NW.isReady(this, EW)) return !1;
        const PW = OW.currentRenderPassId;
        for (const LW of this.lightSources) {
          const WW = LW.getShadowGenerators();
          if (!WW) continue;
          const iW = WW.values();
          for (let mW = iW.next(); !0 !== mW.done; mW = iW.next()) {
            const WW = mW.value;
            if (WW && (!WW.getShadowMap()?.renderList || WW.getShadowMap()?.renderList && -1 !== WW.getShadowMap()?.renderList?.indexOf(this))) {
              const iW = WW.getShadowMap().renderPassIds ?? [OW.currentRenderPassId];
              for (let mW = 0; mW < iW.length; ++mW) {
                OW.currentRenderPassId = iW[mW];
                for (const iW of this.hY)
                  if (!WW.isReady(iW, EW, iW.BA()?.needAlphaBlendingForMesh(this) ?? !1)) return OW.currentRenderPassId = PW, !1
              }
              OW.currentRenderPassId = PW
            }
          }
        }
        for (const LW of this._internalMeshDataInfo._LODLevels)
          if (LW.mesh && !LW.mesh.isReady(EW)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      qA() {
        return this._internalMeshDataInfo._areNormalsFrozen = !0, this
      }
      unfreezeNormals() {
        return this._internalMeshDataInfo._areNormalsFrozen = !1, this
      }
      set overridenInstanceCount(WW) {
        this._instanceDataStorage.overridenInstanceCount = WW
      }
      _getInstanceDataStorage() {
        if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
        const WW = this._instanceDataStorage.engine.currentRenderPassId;
        let iW = this._instanceDataStorage.renderPasses[WW];
        return iW || (iW = new qW, this._instanceDataStorage.renderPasses[WW] = iW), iW
      }
      _preActivate() {
        const WW = this._internalMeshDataInfo,
          iW = this.bD().getRenderId();
        return WW._preActivateId === iW || (WW._preActivateId = iW, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(WW) {
        const iW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return iW.visibleInstances && (iW.visibleInstances.intermediateDefaultRenderId = WW), this
      }
      _registerInstanceForRenderId(WW, iW) {
        const OW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return OW.visibleInstances || (OW.visibleInstances = {
          defaultRenderId: iW,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), OW.visibleInstances[iW] || (void 0 === OW.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete OW.visibleInstances[OW.previousRenderId], OW.previousRenderId = iW, OW.visibleInstances[iW] = new Array), OW.visibleInstances[iW].push(WW), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.XA || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let WW, iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.KV().isLocked) return this;
        WW = "object" === typeof iW ? iW : {
          applySkeleton: iW,
          applyMorph: OW
        };
        const mW = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(WW, null, hW.k.PositionKind), mW), this
      }
      _createGlobalSubMesh(WW) {
        const iW = this.getTotalVertices();
        if (!iW || !this.IEW()) return null;
        if (this.hY && this.hY.length > 0) {
          const OW = this.IEW();
          if (!OW) return null;
          const mW = OW.length;
          let EW = !1;
          if (WW) EW = !0;
          else
            for (const WW of this.hY) {
              if (WW.indexStart + WW.indexCount > mW) {
                EW = !0;
                break
              }
              if (WW.verticesStart + WW.verticesCount > iW) {
                EW = !0;
                break
              }
            }
          if (!EW) return this.hY[0]
        }
        return this.releaseSubMeshes(), new oW.d(0, 0, iW, 0, this.getTotalIndices() || (this.isUnIndexed ? iW : 0), this)
      }
      subdivide(WW) {
        if (WW < 1) return;
        const iW = this.getTotalIndices();
        let OW = iW / WW | 0,
          mW = 0;
        for (; OW % 3 !== 0;) OW++;
        this.releaseSubMeshes();
        for (let EW = 0; EW < WW && !(mW >= iW); EW++) oW.d.CreateFromIndices(0, mW, mW + OW >= iW ? iW - mW : OW, this, void 0, !1), mW += OW;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(WW, iW, OW, mW);
        else {
          const mW = new HW.c;
          mW.set(iW, WW);
          const EW = this.bD();
          new nW.b(nW.b.RandomId(), EW, mW, OW, this)
        }
        return this
      }
      removeVerticesData(WW) {
        this._geometry && this._geometry.removeVerticesData(WW)
      }
      markVerticesDataAsUpdatable(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this.getVertexBuffer(WW);
        OW && OW.isUpdatable() !== iW && this.setVerticesData(WW, this.getVerticesData(WW), iW)
      }
      setVerticesBuffer(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = nW.b.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(WW, OW, iW), this
      }
      updateVerticesData(WW, iW, OW, mW) {
        return this._geometry ? (mW ? (this.makeGeometryUnique(), this.updateVerticesData(WW, iW, OW, !1)) : this._geometry.updateVerticesData(WW, iW, OW), this) : this
      }
      updateMeshPositions(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this.getVerticesData(hW.k.PositionKind);
        if (!OW) return this;
        if (WW(OW), this.updateVerticesData(hW.k.PositionKind, OW, !1, !1), iW) {
          const WW = this.IEW(),
            iW = this.getVerticesData(hW.k.NormalKind);
          if (!iW) return this;
          HW.c.ComputeNormals(OW, WW, iW), this.updateVerticesData(hW.k.NormalKind, iW, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const WW = this._geometry,
          iW = this._geometry.copy(nW.b.RandomId());
        return WW.releaseForMesh(this, !0), iW.applyToMesh(this), this
      }
      setIndexBuffer(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EW = this._geometry;
        EW || (EW = new nW.b(nW.b.RandomId(), this.bD(), void 0, void 0, this)), EW.setIndexBuffer(WW, iW, OW, mW)
      }
      setIndices(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(WW, iW, OW, mW);
        else {
          const mW = new HW.c;
          mW.indices = WW;
          const EW = this.bD();
          new nW.b(nW.b.RandomId(), EW, mW, OW, this, iW)
        }
        return this
      }
      updateIndices(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(WW, iW, OW), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(WW, iW, OW) {
        let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const EW = this.bD().VA();
        let NW;
        if (this._unIndexed)
          if (this._getRenderingFillMode(OW) === dW.d.WireFrameFillMode) NW = WW._getLinesIndexBuffer(this.IEW(), EW);
          else NW = null;
        else switch (this._getRenderingFillMode(OW)) {
          case dW.d.PointFillMode:
            NW = null;
            break;
          case dW.d.WireFrameFillMode:
            NW = WW._getLinesIndexBuffer(this.IEW(), EW);
            break;
          default:
          case dW.d.TriangleFillMode:
            NW = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(iW, NW, mW)
      }
      _bindDirect(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(WW), OW && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const WW = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const iW in WW) this._userInstancedBuffersStorage.vertexBuffers[iW] = WW[iW]
          }
          this._geometry._bind(WW, iW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(WW, iW);
        return this
      }
      _draw(WW, iW, OW) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const mW = this.bD().VA(),
          EW = mW._currentMaterialContext,
          NW = EW && EW.useVertexPulling;
        return this._unIndexed && iW !== dW.d.WireFrameFillMode || iW == dW.d.PointFillMode ? mW.drawArraysType(iW, WW.verticesStart, WW.verticesCount, this.forcedInstanceCount || OW) : iW == dW.d.WireFrameFillMode ? mW.drawElementsType(iW, 0, WW._linesIndexCount, this.forcedInstanceCount || OW) : NW ? mW.drawArraysType(iW, WW.indexStart, WW.indexCount, this.forcedInstanceCount || OW) : mW.drawElementsType(iW, WW.indexStart, WW.indexCount, this.forcedInstanceCount || OW), this
      }
      registerBeforeRender(WW) {
        return this.onBeforeRenderObservable.add(WW), this
      }
      unregisterBeforeRender(WW) {
        return this.onBeforeRenderObservable.removeCallback(WW), this
      }
      registerAfterRender(WW) {
        return this.onAfterRenderObservable.add(WW), this
      }
      unregisterAfterRender(WW) {
        return this.onAfterRenderObservable.removeCallback(WW), this
      }
      _getInstancesRenderList(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (iW) return OW.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[WW] = !1, OW.batchCacheReplacementModeInFrozenMode.renderSelf[WW] = !0, OW.batchCacheReplacementModeInFrozenMode;
          if (OW.previousBatch) return OW.previousBatch
        }
        const mW = this.bD(),
          EW = mW._isInIntermediateRendering(),
          NW = EW ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          PW = OW.batchCache;
        if (PW.mustReturn = !1, PW.renderSelf[WW] = iW || !NW && this.isEnabled() && this.isVisible, PW.visibleInstances[WW] = null, OW.visibleInstances && !iW) {
          const iW = OW.visibleInstances,
            NW = mW.getRenderId(),
            LW = EW ? iW.intermediateDefaultRenderId : iW.defaultRenderId;
          PW.visibleInstances[WW] = iW[NW], !PW.visibleInstances[WW] && LW && (PW.visibleInstances[WW] = iW[LW])
        }
        return PW.hardwareInstancedRendering[WW] = !iW && this._instanceDataStorage.hardwareInstancedRendering && null !== PW.visibleInstances[WW] && void 0 !== PW.visibleInstances[WW], OW.previousBatch = PW, PW
      }
      _updateInstancedBuffers(WW, iW, OW, mW, EW, NW) {
        const PW = iW.visibleInstances[WW._id],
          LW = PW ? PW.length : 0,
          cW = iW.parent,
          wW = this._instanceDataStorage;
        let tW = cW.instancesBuffer,
          ZW = cW.instancesPreviousBuffer,
          xW = 0,
          lW = 0;
        const AW = iW.renderSelf[WW._id],
          bW = this._scene.floatingOriginOffset,
          jW = !tW || OW !== cW.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !cW.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || wW.isFrozen && !jW) lW = (AW ? 1 : 0) + LW;
        else {
          const iW = this.getWorldMatrix();
          if (AW) {
            this._scene.needsPreviousWorldMatrices && (wW.masterMeshPreviousWorldMatrix ? (wW.masterMeshPreviousWorldMatrix.copyToArray(cW.instancesPreviousData, xW), wW.masterMeshPreviousWorldMatrix.HJ(iW)) : (wW.masterMeshPreviousWorldMatrix = iW.clone(), wW.masterMeshPreviousWorldMatrix.copyToArray(cW.instancesPreviousData, xW))), iW.copyToArray(cW.instancesData, xW);
            const WW = iW.wEW();
            cW.instancesData[xW + 12] = WW[12] - bW.x, cW.instancesData[xW + 13] = WW[13] - bW.y, cW.instancesData[xW + 14] = WW[14] - bW.z, xW += 16, lW++
          }
          if (PW) {
            if (zW.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && WW.BA()?.needAlphaBlendingForMesh(WW.getRenderingMesh())) {
              const WW = this._scene.activeCamera.globalPosition;
              for (let iW = 0; iW < PW.length; iW++) {
                const OW = PW[iW];
                OW._distanceToCamera = yW.q.Distance(OW.KV().HEW.centerWorld, WW)
              }
              PW.sort(((WW, iW) => WW._distanceToCamera > iW._distanceToCamera ? -1 : WW._distanceToCamera < iW._distanceToCamera ? 1 : 0))
            }
            for (let WW = 0; WW < PW.length; WW++) {
              const iW = PW[WW],
                OW = iW.getWorldMatrix();
              OW.copyToArray(cW.instancesData, xW), this._scene.needsPreviousWorldMatrices && (iW._previousWorldMatrix ? (iW._previousWorldMatrix.copyToArray(cW.instancesPreviousData, xW), iW._previousWorldMatrix.HJ(OW)) : (iW._previousWorldMatrix = OW.clone(), iW._previousWorldMatrix.copyToArray(cW.instancesPreviousData, xW)));
              const mW = OW.wEW();
              cW.instancesData[xW + 12] = mW[12] - bW.x, cW.instancesData[xW + 13] = mW[13] - bW.y, cW.instancesData[xW + 14] = mW[14] - bW.z, xW += 16, lW++
            }
          }
        }
        if (jW) {
          let WW;
          if (tW && tW.dispose(), ZW && ZW.dispose(), tW = new hW.b(mW, cW.instancesData, !0, 16, !1, !0), cW.instancesBuffer = tW, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.VA().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) WW = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const iW = this._instanceDataStorage.engine.currentRenderPassId;
            WW = this._userInstancedBuffersStorage.renderPasses[iW], WW || (this._userInstancedBuffersStorage.renderPasses[iW] = WW = {})
          }
          WW.world0 = tW.createVertexBuffer("world0", 0, 4), WW.world1 = tW.createVertexBuffer("world1", 4, 4), WW.world2 = tW.createVertexBuffer("world2", 8, 4), WW.world3 = tW.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (ZW = new hW.b(mW, cW.instancesPreviousData, !0, 16, !1, !0), cW.instancesPreviousBuffer = ZW, WW.previousWorld0 = ZW.createVertexBuffer("previousWorld0", 0, 4), WW.previousWorld1 = ZW.createVertexBuffer("previousWorld1", 4, 4), WW.previousWorld2 = ZW.createVertexBuffer("previousWorld2", 8, 4), WW.previousWorld3 = ZW.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (tW.updateDirectly(cW.instancesData, 0, lW), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || ZW.updateDirectly(cW.instancesPreviousData, 0, lW));
        this._processInstancedBuffers(PW, AW), NW && void 0 !== EW && (this.bD()._activeIndices.addCount(WW.indexCount * lW, !1), mW._currentDrawContext && (mW._currentDrawContext.useInstancing = !0), this._bind(WW, NW, EW), this._draw(WW, EW, lW)), !this._scene.needsPreviousWorldMatrices || jW || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || ZW.updateDirectly(cW.instancesData, 0, lW)
      }
      _renderWithInstances(WW, iW, OW, mW, EW) {
        const NW = OW.visibleInstances[WW._id],
          PW = NW ? NW.length : 0,
          LW = OW.parent,
          cW = LW.instancesBufferSize,
          wW = 16 * (PW + 1) * 4;
        for (; LW.instancesBufferSize < wW;) LW.instancesBufferSize *= 2;
        return LW.instancesData && cW == LW.instancesBufferSize || (LW.instancesData = new Float32Array(LW.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !LW.instancesPreviousData || cW != LW.instancesBufferSize) && (LW.instancesPreviousData = new Float32Array(LW.instancesBufferSize / 4)), this._updateInstancedBuffers(WW, OW, cW, EW, iW, mW), EW.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(WW, iW, OW, mW) {
        const EW = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.bD()._activeIndices.addCount(WW.indexCount * EW, !1), mW._currentDrawContext && (mW._currentDrawContext.useInstancing = !0), this._bind(WW, OW, iW), this._draw(WW, iW, EW), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, EW) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), mW.unbindInstanceAttributes()
      }
      _processInstancedBuffers(WW, iW) {}
      _processRendering(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = this.bD(),
          wW = cW.VA();
        if (mW = this._getRenderingFillMode(mW), NW && iW.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(iW, mW, OW, wW), this;
        if (NW) this._renderWithInstances(iW, mW, EW, OW, wW);
        else {
          wW._currentDrawContext && (wW._currentDrawContext.useInstancing = !1);
          let OW = 0;
          EW.renderSelf[iW._id] && (PW && PW(!1, WW.getWorldMatrix(), LW), OW++, this._draw(iW, mW, this._instanceDataStorage.overridenInstanceCount));
          const NW = EW.visibleInstances[iW._id];
          if (NW) {
            const WW = NW.length;
            OW += WW;
            for (let OW = 0; OW < WW; OW++) {
              const WW = NW[OW].getWorldMatrix();
              PW && PW(!0, WW, LW), this._draw(iW, mW)
            }
          }
          cW._activeIndices.addCount(iW.indexCount * OW, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        WW?.instancesBuffer && (iW && WW.instancesBuffer.dispose(), WW.instancesBuffer = null), WW?.instancesPreviousBuffer && (iW && WW.instancesPreviousBuffer.dispose(), WW.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const iW in this._instanceDataStorage.renderPasses) {
          const OW = this._instanceDataStorage.renderPasses[iW];
          this._disposeInstanceDataStorageRenderPass(OW, WW)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, WW), this._userInstancedBuffersStorage) {
          for (const iW in this._userInstancedBuffersStorage.vertexBuffers) {
            const OW = this._userInstancedBuffersStorage.vertexBuffers[iW];
            OW && (WW && OW.dispose(), this._userInstancedBuffersStorage.vertexBuffers[iW] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(WW)
      }
      _releaseRenderPassId(WW) {
        const iW = this._instanceDataStorage.renderPasses[WW];
        if (iW && (this._disposeInstanceDataStorageRenderPass(iW, !0), delete this._instanceDataStorage.renderPasses[WW]), this._userInstancedBuffersStorage?.renderPasses) {
          const iW = this._userInstancedBuffersStorage.renderPasses[WW];
          if (iW)
            for (const WW in iW) iW[WW]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[WW]
        }
        const OW = this._userInstancedBuffersStorage?.interleavedBuffers;
        OW?.[WW] && (OW[WW].buffer.dispose(), delete OW[WW])
      }
      _freeze() {
        if (this.hY) {
          for (let WW = 0; WW < this.hY.length; WW++) this._getInstancesRenderList(WW);
          this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
        }
      }
      _unFreeze() {
        this._instanceDataStorage.isFrozen = !1;
        for (const WW in this._instanceDataStorage.renderPasses) {
          this._instanceDataStorage.renderPasses[WW].previousBatch = null
        }
        this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
      }
      renderWithRenderPassId(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const NW = this._scene.VA(),
          PW = NW.currentRenderPassId;
        if (void 0 !== WW && (NW.currentRenderPassId = WW), mW)(!EW || EW && mW.isInFrustum(this._scene._frustumPlanes)) && this.render(mW, !!iW, OW);
        else
          for (let LW = 0; LW < this.hY.length; LW++) {
            const WW = this.hY[LW];
            (!EW || EW && WW.isInFrustum(this._scene._frustumPlanes)) && this.render(WW, !!iW, OW)
          }
        return void 0 !== WW && (NW.currentRenderPassId = PW), this
      }
      directRender() {
        if (!this.hY) return this;
        for (const WW of this.hY) this.render(WW, !1);
        return this
      }
      render(WW, iW, OW) {
        const mW = this.bD(),
          EW = mW.VA();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const NW = mW.activeCameras?.length ?? 0,
          PW = NW > 1 && mW.activeCamera === mW.activeCameras[0] || NW <= 1,
          LW = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== EW.currentRenderPassId;
        if (PW && this._checkOcclusionQuery(LW) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const cW = this._getInstancesRenderList(WW._id, !!OW);
        if (cW.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let wW = 0,
          tW = null;
        this.ignoreCameraMaxZ && mW.activeCamera && !mW._isInIntermediateRendering() && (wW = mW.activeCamera.maxZ, tW = mW.activeCamera, mW.activeCamera.maxZ = 0, mW.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const ZW = WW.getRenderingMesh(),
          xW = cW.hardwareInstancedRendering[WW._id] || ZW.hasThinInstances || !!this._userInstancedBuffersStorage && !WW.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          lW = this._instanceDataStorage,
          AW = WW.BA();
        if (!AW) return tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), this;
        if (lW.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === AW) {
          if (AW._storeEffectOnSubMeshes && !WW._drawWrapper?._wasPreviouslyReady || !AW._storeEffectOnSubMeshes && !AW._getDrawWrapper()._wasPreviouslyReady) return tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), this
        } else {
          if (AW._storeEffectOnSubMeshes) {
            if (!AW.isReadyForSubMesh(this, WW, xW)) return tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), this
          } else if (!AW.isReady(this, xW)) return tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = AW
        }
        if (iW) {
          const WW = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === WW.alphaModes.length) EW.setAlphaMode(WW.alphaMode);
          else
            for (let iW = 0; iW < WW.alphaModes.length; iW++) {
              const OW = WW.alphaModes[iW];
              EW.setAlphaMode(void 0 !== OW ? OW : 2, !1, iW)
            }
        }
        let bW;
        bW = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? WW._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const jW = bW?.effect ?? null;
        for (let YW = 0, yW = mW._beforeRenderingMeshStage; YW < yW.length; YW++) {
          yW[YW].action(this, WW, cW, jW)
        }
        if (!bW || !jW) return tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), this;
        const UW = OW || this;
        let kW;
        if (!lW.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const WW = UW._getWorldMatrixDeterminant();
          kW = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), WW < 0 && (kW = kW === dW.d.ClockWiseSideOrientation ? dW.d.CounterClockWiseSideOrientation : dW.d.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = kW
        }
        const sW = this._internalMeshDataInfo._effectiveMaterial._preBind(bW, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && EW.setDepthWrite(!0);
        const MW = this._internalMeshDataInfo._effectiveMaterial,
          KW = MW.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), xW || this._bind(WW, jW, KW, !1);
        const SW = UW.getWorldMatrix();
        MW._storeEffectOnSubMeshes ? MW.bindForSubMesh(SW, this, WW) : MW.bind(SW, this);
        try {
          eW.d._BindAttachmentsForEffect(EW, jW) && (!MW.backFaceCulling && MW.separateCullingPass && (EW.setState(!0, MW.zOffset, !1, !sW, MW.cullBackFaces, MW.stencil, MW.zOffsetUnits), this._processRendering(this, WW, jW, KW, cW, xW, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), EW.setState(!0, MW.zOffset, !1, sW, MW.cullBackFaces, MW.stencil, MW.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(WW)), this._processRendering(this, WW, jW, KW, cW, xW, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          eW.d._RestoreAttachments(EW)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let YW = 0, yW = mW._afterRenderingMeshStage; YW < yW.length; YW++) {
          yW[YW].action(this, WW, cW, jW)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), tW && (tW.maxZ = wW, mW.updateTransformMatrix(!0)), 2 !== mW.performancePriority || lW.isFrozen || this._freeze(), this
      }
      _renderRunFollower(WW, iW) {
        const OW = this._scene,
          mW = OW._engine;
        if (mW.isWebGPU || WW._mesh !== this || 0 !== this.instances.length || this.render !== zW.prototype.render) return !1;
        const EW = WW.BA();
        if (!EW || EW !== OW._cachedMaterial || void 0 === EW._canBindRunFollower) return !1;
        const NW = WW._drawWrapper,
          PW = NW?.effect;
        if (!PW || PW !== OW._cachedEffect || this.visibility !== OW._cachedVisibility || NW._forceRebindOnNextCall) return !1;
        const LW = this.hasThinInstances;
        if (!LW && this._userInstancedBuffersStorage) return !1;
        if (!NW._wasPreviouslyReady || NW._wasPreviouslyUsingInstances !== LW) return !1;
        const cW = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || OW._isInIntermediateRendering() || 0 !== OW._beforeRenderingMeshStage.length || 0 !== OW._afterRenderingMeshStage.length || cW._onBeforeRenderObservable?.hasObservers() || cW._onBeforeBindObservable?.hasObservers() || cW._onAfterRenderObservable?.hasObservers()) return !1;
        const wW = this.occlusionType;
        if (void 0 !== wW && wW !== uW.b.OCCLUSION_TYPE_NONE || !EW._canBindRunFollower(OW, mW, this, WW, PW)) return !1;
        const tW = this._internalAbstractMeshDataInfo,
          ZW = tW._isActiveIntermediate;
        ZW ? tW._isActiveIntermediate = !1 : tW._isActive = !1;
        const xW = OW.activeCameras?.length ?? 0;
        (xW > 1 && OW.activeCamera === OW.activeCameras[0] || xW <= 1) && this._checkOcclusionQuery(!1);
        const lW = this._getInstancesRenderList(WW._id);
        if (lW.mustReturn) return !0;
        if (!LW && !lW.renderSelf[WW._id]) return ZW ? tW._isActiveIntermediate = !0 : tW._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (cW._effectiveMaterial = EW, iW)
          if (1 === EW.alphaModes.length) mW.setAlphaMode(EW.alphaMode);
          else
            for (let bW = 0; bW < EW.alphaModes.length; bW++) {
              const WW = EW.alphaModes[bW];
              mW.setAlphaMode(void 0 !== WW ? WW : 2, !1, bW)
            }
        if (EW.backFaceCulling || null !== EW.sideOrientation || EW._twoSidedLighting) {
          const WW = this._getWorldMatrixDeterminant();
          let iW = EW._getEffectiveOrientation(this);
          WW < 0 && (iW = iW === dW.d.ClockWiseSideOrientation ? dW.d.CounterClockWiseSideOrientation : dW.d.ClockWiseSideOrientation), cW._effectiveSideOrientation = iW
        }
        EW._preBind(NW, cW._effectiveSideOrientation), EW.forceDepthWrite && mW.setDepthWrite(!0);
        const AW = EW.fillMode;
        return LW || this._bind(WW, PW, AW, !1), EW._bindRunFollower(this.getWorldMatrix(), this, WW, PW), this._processRendering(this, WW, PW, AW, lW, LW, this._onBeforeDraw, EW), EW.unbind(), 2 === OW.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(hW.k.MatricesWeightsKind) && (this.isVerticesDataPresent(hW.k.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const WW = this.getVerticesData(hW.k.MatricesWeightsKind),
          iW = WW.length;
        for (let OW = 0; OW < iW; OW += 4) {
          const iW = WW[OW] + WW[OW + 1] + WW[OW + 2] + WW[OW + 3];
          if (0 === iW) WW[OW] = 1;
          else {
            const mW = 1 / iW;
            WW[OW] *= mW, WW[OW + 1] *= mW, WW[OW + 2] *= mW, WW[OW + 3] *= mW
          }
        }
        this.setVerticesData(hW.k.MatricesWeightsKind, WW)
      }
      _normalizeSkinWeightsAndExtra() {
        const WW = this.getVerticesData(hW.k.MatricesWeightsExtraKind),
          iW = this.getVerticesData(hW.k.MatricesWeightsKind),
          OW = iW.length;
        for (let mW = 0; mW < OW; mW += 4) {
          let OW = iW[mW] + iW[mW + 1] + iW[mW + 2] + iW[mW + 3];
          if (OW += WW[mW] + WW[mW + 1] + WW[mW + 2] + WW[mW + 3], 0 === OW) iW[mW] = 1;
          else {
            const EW = 1 / OW;
            iW[mW] *= EW, iW[mW + 1] *= EW, iW[mW + 2] *= EW, iW[mW + 3] *= EW, WW[mW] *= EW, WW[mW + 1] *= EW, WW[mW + 2] *= EW, WW[mW + 3] *= EW
          }
        }
        this.setVerticesData(hW.k.MatricesWeightsKind, iW), this.setVerticesData(hW.k.MatricesWeightsKind, WW)
      }
      validateSkinning() {
        const WW = this.getVerticesData(hW.k.MatricesWeightsExtraKind),
          iW = this.getVerticesData(hW.k.MatricesWeightsKind);
        if (null === iW || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          wZ: "not skinned"
        };
        const OW = iW.length;
        let mW = 0,
          EW = 0,
          NW = 0,
          PW = 0;
        const LW = null === WW ? 4 : 8,
          cW = [];
        for (let lW = 0; lW <= LW; lW++) cW[lW] = 0;
        for (let lW = 0; lW < OW; lW += 4) {
          let OW = iW[lW],
            wW = OW,
            tW = 0 === wW ? 0 : 1;
          for (let EW = 1; EW < LW; EW++) {
            const NW = EW < 4 ? iW[lW + EW] : WW[lW + EW - 4];
            NW > OW && mW++, 0 !== NW && tW++, wW += NW, OW = NW
          }
          if (cW[tW]++, tW > NW && (NW = tW), 0 === wW) EW++;
          else {
            const OW = 1 / wW;
            let mW = 0;
            for (let EW = 0; EW < LW; EW++) mW += EW < 4 ? Math.abs(iW[lW + EW] - iW[lW + EW] * OW) : Math.abs(WW[lW + EW - 4] - WW[lW + EW - 4] * OW);
            mW > .001 && PW++
          }
        }
        const wW = this.skeleton.bones.length,
          tW = this.getVerticesData(hW.k.MatricesIndicesKind),
          ZW = this.getVerticesData(hW.k.MatricesIndicesExtraKind);
        let xW = 0;
        for (let lW = 0; lW < OW; lW += 4)
          for (let WW = 0; WW < LW; WW++) {
            const iW = WW < 4 ? tW[lW + WW] : ZW[lW + WW - 4];
            (iW >= wW || iW < 0) && xW++
          }
        return {
          skinned: !0,
          valid: 0 === EW && 0 === PW && 0 === xW,
          wZ: "Number of Weights = " + OW / 4 + "\nMaximum influences = " + NW + "\nMissing Weights = " + EW + "\nNot Sorted = " + mW + "\nNot Normalized = " + PW + "\nWeightCounts = [" + cW + "]\nNumber of bones = " + wW + "\nBad Bone Indices = " + xW
        }
      }
      _checkDelayState() {
        const WW = this.bD();
        return this._geometry ? this._geometry.load(WW) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(WW)), this
      }
      _queueLoad(WW) {
        WW.addPendingData(this);
        const iW = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const OW = await WW._loadDelayedFileAsync(this.delayLoadingFile, iW, !0);
            OW instanceof ArrayBuffer ? this._delayLoadingFunction(OW, this) : this._delayLoadingFunction(JSON.parse(OW), this);
            for (const WW of this.instances) WW.refreshBoundingInfo(), WW._syncSubMeshes();
            this.delayLoadState = 1, WW.removePendingData(this)
          } catch (OW) {
            WW.removePendingData(this), WW.Ay || VW.b.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${OW}`)
          }
        })(), this
      }
      isInFrustum(WW) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(WW) && (this._checkDelayState(), !0))
      }
      setMaterialById(WW) {
        const iW = this.bD().materials;
        let OW;
        for (OW = iW.length - 1; OW > -1; OW--)
          if (iW[OW].id === WW) return this.material = iW[OW], this;
        const mW = this.bD().multiMaterials;
        for (OW = mW.length - 1; OW > -1; OW--)
          if (mW[OW].id === WW) return this.material = mW[OW], this;
        return this
      }
      getAnimatables() {
        const WW = [];
        return this.material && WW.push(this.material), this.skeleton && WW.push(this.skeleton), WW
      }
      bakeTransformIntoVertices(WW) {
        if (!this.isVerticesDataPresent(hW.k.PositionKind)) return this;
        const iW = this.hY.splice(0);
        this._resetPointsArrayCache();
        let OW = this.getVerticesData(hW.k.PositionKind);
        const mW = yW.q.Zero();
        let EW;
        for (EW = 0; EW < OW.length; EW += 3) yW.q.TransformCoordinatesFromFloatsToRef(OW[EW], OW[EW + 1], OW[EW + 2], WW, mW).toArray(OW, EW);
        if (this.setVerticesData(hW.k.PositionKind, OW, this.getVertexBuffer(hW.k.PositionKind).isUpdatable()), this.isVerticesDataPresent(hW.k.NormalKind)) {
          for (OW = this.getVerticesData(hW.k.NormalKind), EW = 0; EW < OW.length; EW += 3) yW.q.TransformNormalFromFloatsToRef(OW[EW], OW[EW + 1], OW[EW + 2], WW, mW).normalize().toArray(OW, EW);
          this.setVerticesData(hW.k.NormalKind, OW, this.getVertexBuffer(hW.k.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(hW.k.TangentKind)) {
          for (OW = this.getVerticesData(hW.k.TangentKind), EW = 0; EW < OW.length; EW += 4) yW.q.TransformNormalFromFloatsToRef(OW[EW], OW[EW + 1], OW[EW + 2], WW, mW).normalize().toArray(OW, EW);
          this.setVerticesData(hW.k.TangentKind, OW, this.getVertexBuffer(hW.k.TangentKind).isUpdatable())
        }
        return WW.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.hY = iW, this
      }
      bakeCurrentTransformIntoVertices() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(WW), this
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (iW && void 0 === iW._addToSceneRootNodes) {
          const OW = iW;
          return rW.source = this, rW.doNotCloneChildren = OW.doNotCloneChildren, rW.clonePhysicsImpostor = OW.clonePhysicsImpostor, rW.cloneThinInstances = OW.cloneThinInstances, new zW(WW, this.bD(), rW)
        }
        return new zW(WW, this.bD(), iW, this, OW, mW)
      }
      dispose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const OW = this._internalMeshDataInfo;
        if (OW._onBeforeDrawObservable && OW._onBeforeDrawObservable.clear(), OW._onBeforeBindObservable && OW._onBeforeBindObservable.clear(), OW._onBeforeRenderObservable && OW._onBeforeRenderObservable.clear(), OW._onAfterRenderObservable && OW._onAfterRenderObservable.clear(), OW._onBetweenPassObservable && OW._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (OW.meshMap)
            for (const WW in OW.meshMap) {
              const iW = OW.meshMap[WW];
              iW && (iW._internalMeshDataInfo._source = null, OW.meshMap[WW] = void 0)
            }
          OW._source && OW._source._internalMeshDataInfo.meshMap && (OW._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const WW = this.bD().meshes;
          for (const iW of WW) {
            const WW = iW;
            WW._internalMeshDataInfo && WW._internalMeshDataInfo._source && WW._internalMeshDataInfo._source === this && (WW._internalMeshDataInfo._source = null)
          }
        }
        OW._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(WW, iW)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(WW, iW, OW, mW, EW, NW) {
        let PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          LW = arguments.length > 7 ? arguments[7] : void 0;
        const cW = this.bD();
        return (0, sW.s)(WW, (WW => {
          const LW = WW.width,
            cW = WW.height,
            wW = this.VA().createCanvas(LW, cW).getContext("2d");
          wW.drawImage(WW, 0, 0);
          const tW = wW.getImageData(0, 0, LW, cW).data;
          this.applyDisplacementMapFromBuffer(tW, LW, cW, iW, OW, EW, NW, PW), mW && mW(this)
        }), LW || (() => {}), cW.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(WW, iW, OW, mW, EW, NW, PW) {
        let LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(hW.k.PositionKind) || !this.isVerticesDataPresent(hW.k.NormalKind) || !this.isVerticesDataPresent(hW.k.UVKind)) return VW.b.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const cW = this.getVerticesData(hW.k.PositionKind, !0, !0),
          wW = this.getVerticesData(hW.k.NormalKind),
          tW = this.getVerticesData(hW.k.UVKind);
        let ZW = yW.q.Zero();
        const xW = yW.q.Zero(),
          lW = yW.m.Zero();
        NW = NW || yW.m.Zero(), PW = PW || new yW.m(1, 1);
        for (let AW = 0; AW < cW.length; AW += 3) {
          yW.q.FromArrayToRef(cW, AW, ZW), yW.q.FromArrayToRef(wW, AW, xW), yW.m.FromArrayToRef(tW, AW / 3 * 2, lW);
          const LW = 4 * ((Math.abs(lW.x * PW.x + NW.x % 1) * (iW - 1) % iW | 0) + (Math.abs(lW.y * PW.y + NW.y % 1) * (OW - 1) % OW | 0) * iW),
            bW = .3 * (WW[LW] / 255) + .59 * (WW[LW + 1] / 255) + .11 * (WW[LW + 2] / 255);
          xW.normalize(), xW.scaleInPlace(mW + (EW - mW) * bW), ZW = ZW.add(xW), ZW.toArray(cW, AW)
        }
        return HW.c.ComputeNormals(cW, this.IEW(), wW), LW ? (this.setVerticesData(hW.k.PositionKind, cW), this.setVerticesData(hW.k.NormalKind, wW), this.setVerticesData(hW.k.UVKind, tW)) : (this.updateVerticesData(hW.k.PositionKind, cW), this.updateVerticesData(hW.k.NormalKind, wW)), this
      }
      _getFlattenedNormals(WW, iW) {
        const OW = new Float32Array(3 * WW.length);
        let mW = 0;
        const EW = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let NW = 0; NW < WW.length; NW += 3) {
          const PW = yW.q.FromArray(iW, 3 * WW[NW]),
            LW = yW.q.FromArray(iW, 3 * WW[NW + 1]),
            cW = yW.q.FromArray(iW, 3 * WW[NW + 2]),
            wW = PW.subtract(LW),
            tW = cW.subtract(LW),
            ZW = yW.q.Normalize(yW.q.Cross(wW, tW));
          EW && ZW.scaleInPlace(-1);
          for (let WW = 0; WW < 3; WW++) OW[mW++] = ZW.x, OW[mW++] = ZW.y, OW[mW++] = ZW.z
        }
        return OW
      }
      _convertToUnIndexedMesh() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = this.getVerticesDataKinds().filter((WW => !this.getVertexBuffer(WW)?.getIsInstanced())),
          OW = this.IEW(!1, !0),
          mW = {},
          EW = (WW, iW) => {
            const mW = new Float32Array(OW.length * iW);
            let EW = 0;
            for (let NW = 0; NW < OW.length; NW++)
              for (let PW = 0; PW < iW; PW++) mW[EW++] = WW[OW[NW] * iW + PW];
            return mW
          },
          NW = this.KV(),
          PW = this.geometry ? this.hY.slice(0) : [];
        for (const LW of iW) mW[LW] = this.getVerticesData(LW);
        for (const LW of iW) {
          const iW = this.getVertexBuffer(LW),
            NW = iW.getSize();
          if (WW && LW === hW.k.NormalKind) {
            const WW = this._getFlattenedNormals(OW, mW[hW.k.PositionKind]);
            this.setVerticesData(hW.k.NormalKind, WW, iW.isUpdatable(), NW)
          } else this.setVerticesData(LW, EW(mW[LW], NW), iW.isUpdatable(), NW)
        }
        if (this.morphTargetManager) {
          for (let iW = 0; iW < this.morphTargetManager.numTargets; iW++) {
            const mW = this.morphTargetManager.getTarget(iW),
              NW = mW.getPositions();
            mW.bLW(EW(NW, 3));
            const PW = mW.getNormals();
            PW && mW.setNormals(WW ? this._getFlattenedNormals(OW, NW) : EW(PW, 3));
            const LW = mW.getTangents();
            LW && mW.setTangents(EW(LW, 3));
            const cW = mW.getUVs();
            cW && mW.setUVs(EW(cW, 2));
            const wW = mW.getColors();
            wW && mW.setColors(EW(wW, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let LW = 0; LW < OW.length; LW++) OW[LW] = LW;
        this.setIndices(OW), this._unIndexed = !0, this.releaseSubMeshes();
        for (const LW of PW) {
          const WW = LW.KV();
          oW.d.AddToMesh(LW.materialIndex, LW.indexStart, LW.indexCount, LW.indexStart, LW.indexCount, this).setBoundingInfo(WW)
        }
        return this.setBoundingInfo(NW), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = HW.c.ExtractFromMesh(this);
        let OW;
        if (WW && this.isVerticesDataPresent(hW.k.NormalKind) && iW.normals) {
          for (OW = 0; OW < iW.normals.length; OW++) iW.normals[OW] *= -1;
          this.setVerticesData(hW.k.NormalKind, iW.normals, this.isVertexBufferUpdatable(hW.k.NormalKind))
        }
        if (iW.indices) {
          let WW;
          for (OW = 0; OW < iW.indices.length; OW += 3) WW = iW.indices[OW + 1], iW.indices[OW + 1] = iW.indices[OW + 2], iW.indices[OW + 2] = WW;
          this.setIndices(iW.indices, null, this.isVertexBufferUpdatable(hW.k.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const iW = HW.c.ExtractFromMesh(this),
          OW = iW.indices && !Array.isArray(iW.indices) && Array.from ? Array.from(iW.indices) : iW.indices,
          mW = iW.positions && !Array.isArray(iW.positions) && Array.from ? Array.from(iW.positions) : iW.positions,
          EW = iW.uvs && !Array.isArray(iW.uvs) && Array.from ? Array.from(iW.uvs) : iW.uvs,
          NW = iW.normals && !Array.isArray(iW.normals) && Array.from ? Array.from(iW.normals) : iW.normals;
        if (OW && mW) {
          iW.indices = OW, iW.positions = mW, EW && (iW.uvs = EW), NW && (iW.normals = NW);
          const PW = WW + 1,
            LW = [];
          for (let WW = 0; WW < PW + 1; WW++) LW[WW] = [];
          let cW, wW;
          const tW = new yW.q(0, 0, 0),
            ZW = new yW.q(0, 0, 0),
            xW = new yW.m(0, 0),
            lW = [],
            AW = [],
            bW = [];
          let jW, UW, kW, sW = mW.length;
          EW && (UW = EW.length), NW && (kW = NW.length);
          for (let WW = 0; WW < OW.length; WW += 3) {
            AW[0] = OW[WW], AW[1] = OW[WW + 1], AW[2] = OW[WW + 2];
            for (let WW = 0; WW < 3; WW++)
              if (cW = AW[WW], wW = AW[(WW + 1) % 3], void 0 === bW[cW] && void 0 === bW[wW] ? (bW[cW] = [], bW[wW] = []) : (void 0 === bW[cW] && (bW[cW] = []), void 0 === bW[wW] && (bW[wW] = [])), void 0 === bW[cW][wW] && void 0 === bW[wW][cW]) {
                bW[cW][wW] = [], tW.x = (mW[3 * wW] - mW[3 * cW]) / PW, tW.y = (mW[3 * wW + 1] - mW[3 * cW + 1]) / PW, tW.z = (mW[3 * wW + 2] - mW[3 * cW + 2]) / PW, NW && (ZW.x = (NW[3 * wW] - NW[3 * cW]) / PW, ZW.y = (NW[3 * wW + 1] - NW[3 * cW + 1]) / PW, ZW.z = (NW[3 * wW + 2] - NW[3 * cW + 2]) / PW), EW && (xW.x = (EW[2 * wW] - EW[2 * cW]) / PW, xW.y = (EW[2 * wW + 1] - EW[2 * cW + 1]) / PW), bW[cW][wW].push(cW);
                for (let WW = 1; WW < PW; WW++) bW[cW][wW].push(mW.length / 3), mW[sW++] = mW[3 * cW] + WW * tW.x, mW[sW++] = mW[3 * cW + 1] + WW * tW.y, mW[sW++] = mW[3 * cW + 2] + WW * tW.z, NW && (NW[kW++] = NW[3 * cW] + WW * ZW.x, NW[kW++] = NW[3 * cW + 1] + WW * ZW.y, NW[kW++] = NW[3 * cW + 2] + WW * ZW.z), EW && (EW[UW++] = EW[2 * cW] + WW * xW.x, EW[UW++] = EW[2 * cW + 1] + WW * xW.y);
                bW[cW][wW].push(wW), bW[wW][cW] = [], jW = bW[cW][wW].length;
                for (let WW = 0; WW < jW; WW++) bW[wW][cW][WW] = bW[cW][wW][jW - 1 - WW]
              } LW[0][0] = OW[WW], LW[1][0] = bW[OW[WW]][OW[WW + 1]][1], LW[1][1] = bW[OW[WW]][OW[WW + 2]][1];
            for (let iW = 2; iW < PW; iW++) {
              LW[iW][0] = bW[OW[WW]][OW[WW + 1]][iW], LW[iW][iW] = bW[OW[WW]][OW[WW + 2]][iW], tW.x = (mW[3 * LW[iW][iW]] - mW[3 * LW[iW][0]]) / iW, tW.y = (mW[3 * LW[iW][iW] + 1] - mW[3 * LW[iW][0] + 1]) / iW, tW.z = (mW[3 * LW[iW][iW] + 2] - mW[3 * LW[iW][0] + 2]) / iW, NW && (ZW.x = (NW[3 * LW[iW][iW]] - NW[3 * LW[iW][0]]) / iW, ZW.y = (NW[3 * LW[iW][iW] + 1] - NW[3 * LW[iW][0] + 1]) / iW, ZW.z = (NW[3 * LW[iW][iW] + 2] - NW[3 * LW[iW][0] + 2]) / iW), EW && (xW.x = (EW[2 * LW[iW][iW]] - EW[2 * LW[iW][0]]) / iW, xW.y = (EW[2 * LW[iW][iW] + 1] - EW[2 * LW[iW][0] + 1]) / iW);
              for (let WW = 1; WW < iW; WW++) LW[iW][WW] = mW.length / 3, mW[sW++] = mW[3 * LW[iW][0]] + WW * tW.x, mW[sW++] = mW[3 * LW[iW][0] + 1] + WW * tW.y, mW[sW++] = mW[3 * LW[iW][0] + 2] + WW * tW.z, NW && (NW[kW++] = NW[3 * LW[iW][0]] + WW * ZW.x, NW[kW++] = NW[3 * LW[iW][0] + 1] + WW * ZW.y, NW[kW++] = NW[3 * LW[iW][0] + 2] + WW * ZW.z), EW && (EW[UW++] = EW[2 * LW[iW][0]] + WW * xW.x, EW[UW++] = EW[2 * LW[iW][0] + 1] + WW * xW.y)
            }
            LW[PW] = bW[OW[WW + 1]][OW[WW + 2]], lW.push(LW[0][0], LW[1][0], LW[1][1]);
            for (let WW = 1; WW < PW; WW++) {
              let iW;
              for (iW = 0; iW < WW; iW++) lW.push(LW[WW][iW], LW[WW + 1][iW], LW[WW + 1][iW + 1]), lW.push(LW[WW][iW], LW[WW + 1][iW + 1], LW[WW][iW + 1]);
              lW.push(LW[WW][iW], LW[WW + 1][iW], LW[WW + 1][iW + 1])
            }
          }
          iW.indices = lW, iW.applyToMesh(this, this.isVertexBufferUpdatable(hW.k.PositionKind))
        } else VW.b.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const WW = HW.c.ExtractFromMesh(this),
          iW = WW.uvs,
          OW = WW.indices,
          mW = WW.positions,
          EW = WW.colors,
          NW = WW.matricesIndices,
          PW = WW.matricesWeights,
          LW = WW.matricesIndicesExtra,
          cW = WW.matricesWeightsExtra;
        if (void 0 === OW || void 0 === mW || null === OW || null === mW) VW.b.Warn("VertexData contains empty entries");
        else {
          const wW = [],
            tW = [],
            ZW = [],
            xW = [],
            lW = [],
            AW = [],
            bW = [],
            jW = [];
          let UW, kW = 0;
          const sW = {};
          let MW, KW;
          for (let WW = 0; WW < OW.length; WW += 3) {
            KW = [OW[WW], OW[WW + 1], OW[WW + 2]], UW = [];
            for (let WW = 0; WW < 3; WW++) {
              UW[WW] = "";
              for (let iW = 0; iW < 3; iW++) Math.abs(mW[3 * KW[WW] + iW]) < 1e-8 && (mW[3 * KW[WW] + iW] = 0), UW[WW] += mW[3 * KW[WW] + iW] + "|"
            }
            if (UW[0] != UW[1] && UW[0] != UW[2] && UW[1] != UW[2])
              for (let WW = 0; WW < 3; WW++) {
                if (MW = sW[UW[WW]], void 0 === MW) {
                  sW[UW[WW]] = kW, MW = kW++;
                  for (let iW = 0; iW < 3; iW++) wW.push(mW[3 * KW[WW] + iW]);
                  if (null !== EW && void 0 !== EW)
                    for (let iW = 0; iW < 4; iW++) xW.push(EW[4 * KW[WW] + iW]);
                  if (null !== iW && void 0 !== iW)
                    for (let OW = 0; OW < 2; OW++) ZW.push(iW[2 * KW[WW] + OW]);
                  if (null !== NW && void 0 !== NW)
                    for (let iW = 0; iW < 4; iW++) lW.push(NW[4 * KW[WW] + iW]);
                  if (null !== PW && void 0 !== PW)
                    for (let iW = 0; iW < 4; iW++) AW.push(PW[4 * KW[WW] + iW]);
                  if (null !== LW && void 0 !== LW)
                    for (let iW = 0; iW < 4; iW++) bW.push(LW[4 * KW[WW] + iW]);
                  if (null !== cW && void 0 !== cW)
                    for (let iW = 0; iW < 4; iW++) jW.push(cW[4 * KW[WW] + iW])
                }
                tW.push(MW)
              }
          }
          const SW = [];
          HW.c.ComputeNormals(wW, tW, SW), WW.positions = wW, WW.indices = tW, WW.normals = SW, null !== iW && void 0 !== iW && (WW.uvs = ZW), null !== EW && void 0 !== EW && (WW.colors = xW), null !== NW && void 0 !== NW && (WW.matricesIndices = lW), null !== PW && void 0 !== PW && (WW.matricesWeights = AW), null !== LW && void 0 !== LW && (WW.matricesIndicesExtra = bW), null !== PW && void 0 !== PW && (WW.matricesWeightsExtra = jW), WW.applyToMesh(this, this.isVertexBufferUpdatable(hW.k.PositionKind))
        }
      }
      static _instancedMeshFactory(WW, iW) {
        throw (0, fW.o)("InstancedMesh")
      }
      static _PhysicsImpostorParser(WW, iW, OW) {
        throw (0, fW.o)("PhysicsImpostor")
      }
      createInstance(WW) {
        const iW = zW._instancedMeshFactory(WW, this);
        return iW.parent = this.parent, iW
      }
      synchronizeInstances() {
        for (let WW = 0; WW < this.instances.length; WW++) {
          this.instances[WW]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(WW) {
        const iW = this.IEW(),
          OW = this.getVerticesData(hW.k.PositionKind);
        if (!OW || !iW) return this;
        const mW = [];
        for (let NW = 0; NW < OW.length; NW += 3) mW.push(yW.q.FromArray(OW, NW));
        const EW = [];
        return kW.b.SyncAsyncForLoop(mW.length, 40, (WW => {
          const iW = mW.length - 1 - WW,
            OW = mW[iW];
          for (let NW = 0; NW < iW; ++NW) {
            const WW = mW[NW];
            if (OW.equals(WW)) {
              EW[iW] = NW;
              break
            }
          }
        }), (() => {
          for (let WW = 0; WW < iW.length; ++WW) iW[WW] = EW[iW[WW]] || iW[WW];
          const OW = this.hY.slice(0);
          this.setIndices(iW), this.hY = OW, WW && WW(this)
        })), this
      }
      serialize() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        WW.name = this.name, WW.id = this.id, WW.uniqueId = this.uniqueId, WW.type = this.getClassName(), KW.d && KW.d.HasTags(this) && (WW.tags = KW.d.GetTags(this)), WW.position = this.position.wEW(), this.rotationQuaternion ? WW.rotationQuaternion = this.rotationQuaternion.wEW() : this.rotation && (WW.rotation = this.rotation.wEW()), WW.YZ = this.YZ.wEW(), this._postMultiplyPivotMatrix ? WW.pivotMatrix = this.getPivotMatrix().wEW() : WW.localMatrix = this.getPivotMatrix().wEW(), WW.isEnabled = this.isEnabled(!1), WW.isVisible = this.isVisible, WW.infiniteDistance = this.infiniteDistance, WW.pickable = this.Fb, WW.receiveShadows = this.receiveShadows, WW.billboardMode = this.billboardMode, WW.visibility = this.visibility, WW.pA = this.pA, WW.checkCollisions = this.checkCollisions, WW.ellipsoid = this.ellipsoid.wEW(), WW.ellipsoidOffset = this.ellipsoidOffset.wEW(), WW.XA = this.XA, WW.isBlocker = this.isBlocker, WW.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (WW.dD = !0), this.parent && this.parent._serializeAsParent(WW), WW.isUnIndexed = this.isUnIndexed;
        const iW = this._geometry;
        if (iW && this.hY) {
          WW.geometryUniqueId = iW.uniqueId, WW.geometryId = iW.id, WW.hY = [];
          for (let iW = 0; iW < this.hY.length; iW++) {
            const OW = this.hY[iW];
            WW.hY.push({
              materialIndex: OW.materialIndex,
              verticesStart: OW.verticesStart,
              verticesCount: OW.verticesCount,
              indexStart: OW.indexStart,
              indexCount: OW.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (WW.materialUniqueId = this.material.uniqueId, WW.materialId = this.material.id) : (this.material = null, WW.materialUniqueId = this._scene.defaultMaterial.uniqueId, WW.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (WW.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (WW.skeletonId = this.skeleton.id, WW.skeletonUniqueId = this.skeleton.uniqueId, WW.numBoneInfluencers = this.numBoneInfluencers), this.bD()._getComponent(CW.b.NAME_PHYSICSENGINE)) {
          const iW = this.getPhysicsImpostor?.();
          iW && (WW.physicsMass = iW.getParam("FP"), WW.physicsFriction = iW.getParam("friction"), WW.physicsRestitution = iW.getParam("FP"), WW.physicsImpostor = iW.type)
        }
        this.metadata && (WW.metadata = this.metadata), 0 !== this.meshBlendingTag && (WW.meshBlendingTag = this.meshBlendingTag), WW.instances = [];
        for (let OW = 0; OW < this.instances.length; OW++) {
          const iW = this.instances[OW];
          if (iW.doNotSerialize) continue;
          const mW = {
            name: iW.name,
            id: iW.id,
            isEnabled: iW.isEnabled(!1),
            isVisible: iW.isVisible,
            Fb: iW.Fb,
            checkCollisions: iW.checkCollisions,
            position: iW.position.wEW(),
            YZ: iW.YZ.wEW()
          };
          if (iW.parent && iW.parent._serializeAsParent(mW), iW.rotationQuaternion ? mW.rotationQuaternion = iW.rotationQuaternion.wEW() : iW.rotation && (mW.rotation = iW.rotation.wEW()), this.bD()._getComponent(CW.b.NAME_PHYSICSENGINE)) {
            const WW = iW.getPhysicsImpostor?.();
            WW && (mW.physicsMass = WW.getParam("FP"), mW.physicsFriction = WW.getParam("friction"), mW.physicsRestitution = WW.getParam("FP"), mW.physicsImpostor = WW.type)
          }
          iW.metadata && (mW.metadata = iW.metadata), iW.actionManager && (mW.actions = iW.actionManager.serialize(iW.name)), WW.instances.push(mW), DW.d.AppendSerializedAnimations(iW, mW), mW.kj = iW.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (WW.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.OOW
          }, this._userThinInstanceBuffersStorage)) {
          const iW = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const WW in this._userThinInstanceBuffersStorage.data) iW.data[WW] = Array.from(this._userThinInstanceBuffersStorage.data[WW]), iW.sizes[WW] = this._userThinInstanceBuffersStorage.sizes[WW], iW.strides[WW] = this._userThinInstanceBuffersStorage.strides[WW];
          WW.thinInstances.userThinInstance = iW
        }
        return DW.d.AppendSerializedAnimations(this, WW), WW.kj = this.serializeAnimationRanges(), WW.layerMask = this.layerMask, WW.alphaIndex = this.alphaIndex, WW.hasVertexAlpha = this.hasVertexAlpha, WW.overlayAlpha = this.overlayAlpha, WW.overlayColor = this.overlayColor.wEW(), WW.renderOverlay = this.renderOverlay, WW.applyFog = this.applyFog, this.actionManager && (WW.actions = this.actionManager.serialize(this.name)), WW
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const WW = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (WW && WW.vertexCount) {
          if (WW.vertexCount !== this.getTotalVertices()) return VW.b.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (WW.isUsingTextureForTargets) return;
          for (let iW = 0; iW < WW.numInfluencers; iW++) {
            const OW = WW.getActiveTarget(iW),
              mW = OW.getPositions();
            if (!mW) return void VW.b.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(hW.k.PositionKind + iW, mW, !1, 3);
            const EW = OW.getNormals();
            EW && this.geometry.setVerticesData(hW.k.NormalKind + iW, EW, !1, 3);
            const NW = OW.getTangents();
            NW && this.geometry.setVerticesData(hW.k.TangentKind + iW, NW, !1, 3);
            const PW = OW.getUVs();
            PW && this.geometry.setVerticesData(hW.k.UVKind + "_" + iW, PW, !1, 2);
            const LW = OW.getUV2s();
            LW && this.geometry.setVerticesData(hW.k.UV2Kind + "_" + iW, LW, !1, 2);
            const cW = OW.getColors();
            cW && this.geometry.setVerticesData(hW.k.ColorKind + iW, cW, !1, 4)
          }
        } else {
          let WW = 0;
          for (; this.geometry.isVerticesDataPresent(hW.k.PositionKind + WW);) this.geometry.removeVerticesData(hW.k.PositionKind + WW), this.geometry.isVerticesDataPresent(hW.k.NormalKind + WW) && this.geometry.removeVerticesData(hW.k.NormalKind + WW), this.geometry.isVerticesDataPresent(hW.k.TangentKind + WW) && this.geometry.removeVerticesData(hW.k.TangentKind + WW), this.geometry.isVerticesDataPresent(hW.k.UVKind + "_" + WW) && this.geometry.removeVerticesData(hW.k.UVKind + "_" + WW), this.geometry.isVerticesDataPresent(hW.k.UV2Kind + "_" + WW) && this.geometry.removeVerticesData(hW.k.UV2Kind + "_" + WW), this.geometry.isVerticesDataPresent(hW.k.ColorKind + WW) && this.geometry.removeVerticesData(hW.k.ColorKind + WW), WW++
        }
      }
      static Parse(WW, iW, OW) {
        let mW, EW = !1;
        if (WW.type && "LinesMesh" === WW.type ? mW = zW._LinesMeshParser(WW, iW) : WW.type && "GroundMesh" === WW.type ? mW = zW._GroundMeshParser(WW, iW) : WW.type && "GoldbergMesh" === WW.type ? mW = zW._GoldbergMeshParser(WW, iW) : WW.type && "GreasedLineMesh" === WW.type ? mW = zW._GreasedLineMeshParser(WW, iW) : WW.type && "TrailMesh" === WW.type ? mW = zW._TrailMeshParser(WW, iW) : WW.type && "GaussianSplattingMesh" === WW.type ? (mW = WW._isCompound ? zW._GaussianSplattingCompoundMeshParser(WW, iW) : zW._GaussianSplattingMeshParser(WW, iW), EW = !0) : WW.type && "GaussianSplattingPartProxyMesh" === WW.type ? (mW = zW._GaussianSplattingPartProxyMeshParser(WW, iW), EW = !0) : mW = new zW(WW.name, iW), mW.id = WW.id, mW._waitingParsedUniqueId = WW.uniqueId, KW.d && KW.d.AddTagsTo(mW, WW.tags), mW.position = yW.q.FromArray(WW.position), void 0 !== WW.metadata && (mW.metadata = WW.metadata), void 0 !== WW.meshBlendingTag && (mW.meshBlendingTag = WW.meshBlendingTag), WW.rotationQuaternion ? mW.rotationQuaternion = yW.g.FromArray(WW.rotationQuaternion) : WW.rotation && (mW.rotation = yW.q.FromArray(WW.rotation)), mW.YZ = yW.q.FromArray(WW.YZ), WW.localMatrix ? mW.setPreTransformMatrix(yW.d.FromArray(WW.localMatrix)) : WW.pivotMatrix && mW.setPivotMatrix(yW.d.FromArray(WW.pivotMatrix)), mW.WK(WW.isEnabled), mW.isVisible = WW.isVisible, mW.infiniteDistance = WW.infiniteDistance, mW.pA = !!WW.pA, mW.showBoundingBox = WW.showBoundingBox, mW.showSubMeshesBoundingBox = WW.showSubMeshesBoundingBox, void 0 !== WW.applyFog && (mW.applyFog = WW.applyFog), void 0 !== WW.pickable && (mW.Fb = WW.pickable), void 0 !== WW.alphaIndex && (mW.alphaIndex = WW.alphaIndex), mW.receiveShadows = WW.receiveShadows, void 0 !== WW.billboardMode && (mW.billboardMode = WW.billboardMode), void 0 !== WW.visibility && (mW.visibility = WW.visibility), mW.checkCollisions = WW.checkCollisions, mW.XA = !!WW.XA, WW.ellipsoid && (mW.ellipsoid = yW.q.FromArray(WW.ellipsoid)), WW.ellipsoidOffset && (mW.ellipsoidOffset = yW.q.FromArray(WW.ellipsoidOffset)), null != WW.overrideMaterialSideOrientation && (mW.sideOrientation = WW.overrideMaterialSideOrientation), void 0 !== WW.sideOrientation && (mW.sideOrientation = WW.sideOrientation), void 0 !== WW.isBlocker && (mW.isBlocker = WW.isBlocker), mW._shouldGenerateFlatShading = WW.useFlatShading, WW.dD && (mW._waitingData.dD = WW.dD), void 0 !== WW.parentId && (mW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (mW._waitingParentInstanceIndex = WW.parentInstanceIndex), void 0 !== WW.actions && (mW._waitingData.actions = WW.actions), void 0 !== WW.overlayAlpha && (mW.overlayAlpha = WW.overlayAlpha), void 0 !== WW.overlayColor && (mW.overlayColor = TW.b.FromArray(WW.overlayColor)), void 0 !== WW.renderOverlay && (mW.renderOverlay = WW.renderOverlay), mW.isUnIndexed = !!WW.isUnIndexed, mW.hasVertexAlpha = WW.hasVertexAlpha, WW.delayLoadingFile ? (mW.delayLoadState = 4, mW.delayLoadingFile = OW + WW.delayLoadingFile, mW.buildBoundingInfo(yW.q.FromArray(WW.boundingBoxMinimum), yW.q.FromArray(WW.boundingBoxMaximum)), WW._binaryInfo && (mW._binaryInfo = WW._binaryInfo), mW._delayInfo = [], WW.hasUVs && mW._delayInfo.push(hW.k.UVKind), WW.hasUVs2 && mW._delayInfo.push(hW.k.UV2Kind), WW.hasUVs3 && mW._delayInfo.push(hW.k.UV3Kind), WW.hasUVs4 && mW._delayInfo.push(hW.k.UV4Kind), WW.hasUVs5 && mW._delayInfo.push(hW.k.UV5Kind), WW.hasUVs6 && mW._delayInfo.push(hW.k.UV6Kind), WW.hasColors && mW._delayInfo.push(hW.k.ColorKind), WW.hasMatricesIndices && mW._delayInfo.push(hW.k.MatricesIndicesKind), WW.hasMatricesWeights && mW._delayInfo.push(hW.k.MatricesWeightsKind), mW._delayLoadingFunction = nW.b._ImportGeometry, gW.d.ForceFullSceneLoadingForIncremental && mW._checkDelayState()) : EW || nW.b._ImportGeometry(WW, mW), WW.materialUniqueId ? mW._waitingMaterialId = WW.materialUniqueId : WW.materialId && (mW._waitingMaterialId = WW.materialId), WW.morphTargetManagerId > -1 && (mW._waitingMorphTargetManagerId = WW.morphTargetManagerId), void 0 !== WW.skeletonId && null !== WW.skeletonId && (mW.skeleton = iW.getLastSkeletonById(WW.skeletonId), mW._waitingSkeletonId = WW.skeletonId, WW.numBoneInfluencers && (mW.numBoneInfluencers = WW.numBoneInfluencers)), void 0 !== WW.skeletonUniqueId && null !== WW.skeletonUniqueId && (mW._waitingSkeletonUniqueId = WW.skeletonUniqueId), WW.animations) {
          for (let iW = 0; iW < WW.animations.length; iW++) {
            const OW = WW.animations[iW],
              EW = (0, pW.d)("BABYLON.Animation");
            EW && mW.animations.push(EW.Parse(OW))
          }
          JW.d.ParseAnimationRanges(mW, WW, iW)
        }
        if (WW.autoAnimate && iW.beginAnimation(mW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), WW.layerMask && !isNaN(WW.layerMask) ? mW.layerMask = Math.abs(parseInt(WW.layerMask)) : mW.layerMask = 268435455, WW.physicsImpostor && (mW.physicsImpostor = zW._PhysicsImpostorParser(iW, mW, WW)), WW.lodMeshIds && (mW._waitingData.lods = {
            ids: WW.lodMeshIds,
            distances: WW.lodDistances ? WW.lodDistances : null,
            coverages: WW.lodCoverages ? WW.lodCoverages : null
          }), WW.instances)
          for (let NW = 0; NW < WW.instances.length; NW++) {
            const OW = WW.instances[NW],
              EW = mW.createInstance(OW.name);
            if (OW.id && (EW.id = OW.id), KW.d && (OW.tags ? KW.d.AddTagsTo(EW, OW.tags) : KW.d.AddTagsTo(EW, WW.tags)), EW.position = yW.q.FromArray(OW.position), void 0 !== OW.metadata && (EW.metadata = OW.metadata), void 0 !== OW.parentId && (EW._waitingParentId = OW.parentId), void 0 !== OW.parentInstanceIndex && (EW._waitingParentInstanceIndex = OW.parentInstanceIndex), void 0 !== OW.isEnabled && null !== OW.isEnabled && EW.WK(OW.isEnabled), void 0 !== OW.isVisible && null !== OW.isVisible && (EW.isVisible = OW.isVisible), void 0 !== OW.Fb && null !== OW.Fb && (EW.Fb = OW.Fb), OW.rotationQuaternion ? EW.rotationQuaternion = yW.g.FromArray(OW.rotationQuaternion) : OW.rotation && (EW.rotation = yW.q.FromArray(OW.rotation)), EW.YZ = yW.q.FromArray(OW.YZ), void 0 != OW.checkCollisions && null != OW.checkCollisions && (EW.checkCollisions = OW.checkCollisions), void 0 != OW.pickable && null != OW.pickable && (EW.Fb = OW.pickable), void 0 != OW.showBoundingBox && null != OW.showBoundingBox && (EW.showBoundingBox = OW.showBoundingBox), void 0 != OW.showSubMeshesBoundingBox && null != OW.showSubMeshesBoundingBox && (EW.showSubMeshesBoundingBox = OW.showSubMeshesBoundingBox), void 0 != OW.alphaIndex && null != OW.showSubMeshesBoundingBox && (EW.alphaIndex = OW.alphaIndex), OW.physicsImpostor && (EW.physicsImpostor = zW._PhysicsImpostorParser(iW, EW, OW)), void 0 !== OW.actions && (EW._waitingData.actions = OW.actions), OW.animations) {
              for (let WW = 0; WW < OW.animations.length; WW++) {
                const iW = OW.animations[WW],
                  mW = (0, pW.d)("BABYLON.Animation");
                mW && EW.animations.push(mW.Parse(iW))
              }
              JW.d.ParseAnimationRanges(EW, OW, iW), OW.autoAnimate && iW.beginAnimation(EW, OW.autoAnimateFrom, OW.autoAnimateTo, OW.autoAnimateLoop, OW.autoAnimateSpeed || 1)
            }
          }
        if (WW.thinInstances) {
          const iW = WW.thinInstances;
          if (mW.OOW = !!iW.enablePicking, iW.matrixData ? (mW.kWW("matrix", new Float32Array(iW.matrixData), 16, !1), mW._thinInstanceDataStorage.matrixBufferSize = iW.matrixBufferSize, mW._thinInstanceDataStorage.instancesCount = iW.instancesCount) : mW._thinInstanceDataStorage.matrixBufferSize = iW.matrixBufferSize, WW.thinInstances.userThinInstance) {
            const iW = WW.thinInstances.userThinInstance;
            for (const WW in iW.data) mW.kWW(WW, new Float32Array(iW.data[WW]), iW.strides[WW], !1), mW._userThinInstanceBuffersStorage.sizes[WW] = iW.sizes[WW]
          }
        }
        return mW
      }
      setPositionsForCPUSkinning() {
        const WW = this._internalMeshDataInfo;
        if (!WW._sourcePositions) {
          const iW = this.getVerticesData(hW.k.PositionKind);
          if (!iW) return WW._sourcePositions;
          WW._sourcePositions = new Float32Array(iW), this.isVertexBufferUpdatable(hW.k.PositionKind) || this.setVerticesData(hW.k.PositionKind, iW, !0)
        }
        return WW._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const WW = this._internalMeshDataInfo;
        if (!WW._sourceNormals) {
          const iW = this.getVerticesData(hW.k.NormalKind);
          if (!iW) return WW._sourceNormals;
          WW._sourceNormals = new Float32Array(iW), this.isVertexBufferUpdatable(hW.k.NormalKind) || this.setVerticesData(hW.k.NormalKind, iW, !0)
        }
        return WW._sourceNormals
      }
      applySkeleton(WW) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.bD().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.bD().getFrameId(), !this.isVerticesDataPresent(hW.k.PositionKind)) return this;
        if (!this.isVerticesDataPresent(hW.k.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(hW.k.MatricesWeightsKind)) return this;
        const iW = this.isVerticesDataPresent(hW.k.NormalKind),
          OW = this._internalMeshDataInfo;
        if (!OW._sourcePositions) {
          const WW = this.hY.slice();
          this.setPositionsForCPUSkinning(), this.hY = WW
        }
        iW && !OW._sourceNormals && this.setNormalsForCPUSkinning();
        let mW = this.getVerticesData(hW.k.PositionKind);
        if (!mW) return this;
        mW instanceof Float32Array || (mW = new Float32Array(mW));
        let EW = this.getVerticesData(hW.k.NormalKind);
        if (iW) {
          if (!EW) return this;
          EW instanceof Float32Array || (EW = new Float32Array(EW))
        }
        const NW = this.getVerticesData(hW.k.MatricesIndicesKind),
          PW = this.getVerticesData(hW.k.MatricesWeightsKind);
        if (!PW || !NW) return this;
        const LW = this.numBoneInfluencers > 4,
          cW = LW ? this.getVerticesData(hW.k.MatricesIndicesExtraKind) : null,
          wW = LW ? this.getVerticesData(hW.k.MatricesWeightsExtraKind) : null,
          tW = WW.getTransformMatrices(this),
          ZW = yW.q.Zero(),
          xW = new yW.d,
          lW = new yW.d;
        let AW, bW = 0;
        for (let jW = 0; jW < mW.length; jW += 3, bW += 4) {
          let WW;
          for (AW = 0; AW < 4; AW++) WW = PW[bW + AW], WW > 0 && (yW.d.FromFloat32ArrayToRefScaled(tW, Math.floor(16 * NW[bW + AW]), WW, lW), xW.addToSelf(lW));
          if (LW)
            for (AW = 0; AW < 4; AW++) WW = wW[bW + AW], WW > 0 && (yW.d.FromFloat32ArrayToRefScaled(tW, Math.floor(16 * cW[bW + AW]), WW, lW), xW.addToSelf(lW));
          yW.q.TransformCoordinatesFromFloatsToRef(OW._sourcePositions[jW], OW._sourcePositions[jW + 1], OW._sourcePositions[jW + 2], xW, ZW), ZW.toArray(mW, jW), iW && (yW.q.TransformNormalFromFloatsToRef(OW._sourceNormals[jW], OW._sourceNormals[jW + 1], OW._sourceNormals[jW + 2], xW, ZW), ZW.toArray(EW, jW)), xW.reset()
        }
        return this.updateVerticesData(hW.k.PositionKind, mW), iW && this.updateVerticesData(hW.k.NormalKind, EW), this
      }
      static MinMax(WW) {
        let iW = null,
          OW = null;
        for (const mW of WW) {
          const WW = mW.KV().boundingBox;
          iW && OW ? (iW.minimizeInPlace(WW.minimumWorld), OW.maximizeInPlace(WW.maximumWorld)) : (iW = WW.minimumWorld.clone(), OW = WW.maximumWorld.clone())
        }
        return iW && OW ? {
          min: iW,
          max: OW
        } : {
          min: yW.q.Zero(),
          max: yW.q.Zero()
        }
      }
      static Center(WW) {
        const iW = WW instanceof Array ? zW.MinMax(WW) : WW;
        return yW.q.Center(iW.min, iW.max)
      }
      static MergeMeshes(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        return (0, SW.g)(zW._MergeMeshesCoroutine(WW, iW, OW, mW, EW, NW, !1))
      }
      static async MergeMeshesAsync(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, SW.f)(zW._MergeMeshesCoroutine(WW, iW, OW, mW, EW, NW, !0), (0, SW.b)())
      }
      static * _MergeMeshesCoroutine(WW) {
        let iW, OW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mW = arguments.length > 2 ? arguments[2] : void 0,
          EW = arguments.length > 3 ? arguments[3] : void 0,
          NW = arguments.length > 4 ? arguments[4] : void 0,
          PW = arguments.length > 5 ? arguments[5] : void 0,
          LW = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (WW = WW.filter(Boolean)).length) return null;
        if (!mW) {
          let OW = 0;
          for (iW = 0; iW < WW.length; iW++)
            if (OW += WW[iW].getTotalVertices(), OW >= 65536) return VW.b.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const cW = WW[0];
        PW && (NW = !1, WW.sort(((WW, iW) => (WW.material?.uniqueId ?? -1) - (iW.material?.uniqueId ?? -1))));
        const wW = new Array,
          tW = new Array,
          ZW = new Array,
          xW = WW[0].sideOrientation;
        for (iW = 0; iW < WW.length; iW++) {
          const OW = WW[iW];
          if (OW.KD) return VW.b.Warn("Cannot merge instance meshes."), null;
          if (xW !== OW.sideOrientation) return VW.b.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (NW || PW) {
            const WW = ZW.reduce(((WW, iW) => Math.max(WW, iW.start + iW.count)), 0);
            if (PW)
              if (OW.material) {
                const iW = OW.material;
                if (iW instanceof vW.e) {
                  for (let WW = 0; WW < iW.MWW.length; WW++) wW.indexOf(iW.MWW[WW]) < 0 && wW.push(iW.MWW[WW]);
                  for (let mW = 0; mW < OW.hY.length; mW++) tW.push(wW.indexOf(iW.MWW[OW.hY[mW].materialIndex])), ZW.push({
                    start: WW + OW.hY[mW].indexStart,
                    count: OW.hY[mW].indexCount
                  })
                } else {
                  wW.indexOf(iW) < 0 && wW.push(iW);
                  for (let mW = 0; mW < OW.hY.length; mW++) tW.push(wW.indexOf(iW)), ZW.push({
                    start: WW + OW.hY[mW].indexStart,
                    count: OW.hY[mW].indexCount
                  })
                }
              } else
                for (let iW = 0; iW < OW.hY.length; iW++) tW.push(0), ZW.push({
                  start: WW + OW.hY[iW].indexStart,
                  count: OW.hY[iW].indexCount
                });
            else ZW.push({
              start: WW,
              count: OW.getTotalIndices()
            })
          }
        }
        if (PW && ZW.length > 1) {
          let WW = 0;
          for (let iW = 1; iW < ZW.length; iW++) {
            const OW = ZW[WW],
              mW = ZW[iW];
            tW[iW] === tW[WW] && OW.start + OW.count === mW.start ? OW.count += mW.count : (WW++, ZW[WW] = mW, tW[WW] = tW[iW])
          }
          ZW.length = WW + 1, tW.length = WW + 1
        }
        const lW = WW => {
            const iW = WW.computeWorldMatrix(!0);
            return {
              vertexData: HW.c.ExtractFromMesh(WW, !1, !1),
              transform: iW
            }
          },
          {
            vertexData: AW,
            transform: bW
          } = lW(WW[0]);
        LW && (yield);
        const jW = new Array(WW.length - 1);
        for (let SW = 1; SW < WW.length; SW++) jW[SW - 1] = lW(WW[SW]), LW && (yield);
        const UW = AW._mergeCoroutine(bW, jW, mW, LW, !OW);
        let kW = UW.next();
        for (; !kW.done;) LW && (yield), kW = UW.next();
        const sW = kW.value;
        EW || (EW = new zW(cW.name + "_merged", cW.bD()));
        const MW = sW._applyToCoroutine(EW, void 0, LW);
        let KW = MW.next();
        for (; !KW.done;) LW && (yield), KW = MW.next();
        if (EW.checkCollisions = cW.checkCollisions, EW.sideOrientation = cW.sideOrientation, OW)
          for (iW = 0; iW < WW.length; iW++) WW[iW].dispose();
        if (NW || PW) {
          for (EW.releaseSubMeshes(), iW = 0; iW < ZW.length;) oW.d.CreateFromIndices(0, ZW[iW].start, ZW[iW].count, EW, void 0, !1), iW++;
          for (const WW of EW.hY) WW.refreshBoundingInfo();
          EW.computeWorldMatrix(!0)
        }
        if (PW) {
          const WW = new vW.e(cW.name + "_merged", cW.bD());
          WW.MWW = wW;
          for (let iW = 0; iW < EW.hY.length; iW++) EW.hY[iW].materialIndex = tW[iW];
          EW.material = WW
        } else EW.material = cW.material;
        return EW
      }
      LWW(WW) {
        WW._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(WW)
      }
      wWW(WW) {
        const iW = WW._indexInSourceMeshInstanceArray;
        if (-1 != iW) {
          if (iW !== this.instances.length - 1) {
            const WW = this.instances[this.instances.length - 1];
            this.instances[iW] = WW, WW._indexInSourceMeshInstanceArray = iW
          }
          WW._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === dW.d.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(WW) {
        const iW = this.bD();
        return iW.forcePointsCloud ? dW.d.PointFillMode : iW.forceWireframe ? dW.d.WireFrameFillMode : this.overrideRenderingFillMode ?? WW
      }
      setMaterialByID(WW) {
        return this.setMaterialById(WW)
      }
      static CreateRibbon(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(WW, iW, OW, mW, EW, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(WW, iW, OW, mW, EW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(WW, iW, OW, mW, EW, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(WW, iW, OW, mW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(WW, iW, OW, mW, EW, NW, PW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(WW, iW, OW, mW, EW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(WW, iW, OW, mW, EW, NW, PW, LW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(WW, iW, OW, mW, EW, NW, PW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(WW, iW, OW, mW, EW, NW, PW, LW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(WW, iW, OW, mW, EW, NW, PW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(WW, iW, OW, mW, EW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(WW, iW, OW, mW, EW, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(WW, iW, OW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(WW, iW, OW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(WW, iW, OW, mW, EW, NW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(WW, iW, OW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(WW) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    zW.FRONTSIDE = HW.c.FRONTSIDE, zW.BACKSIDE = HW.c.BACKSIDE, zW.DOUBLESIDE = HW.c.DOUBLESIDE, zW.DEFAULTSIDE = HW.c.DEFAULTSIDE, zW.NO_CAP = 0, zW.CAP_START = 1, zW.CAP_END = 2, zW.CAP_ALL = 3, zW.NO_FLIP = 0, zW.FLIP_TILE = 1, zW.ROTATE_TILE = 2, zW.FLIP_ROW = 3, zW.ROTATE_ROW = 4, zW.FLIP_N_ROTATE_TILE = 5, zW.FLIP_N_ROTATE_ROW = 6, zW.CENTER = 0, zW.LEFT = 1, zW.RIGHT = 2, zW.TOP = 3, zW.BOTTOM = 4, zW.INSTANCEDMESH_SORT_TRANSPARENT = !1, zW._GroundMeshParser = (WW, iW) => {
      throw (0, fW.o)("GroundMesh")
    }, zW._GoldbergMeshParser = (WW, iW) => {
      throw (0, fW.o)("GoldbergMesh")
    }, zW._LinesMeshParser = (WW, iW) => {
      throw (0, fW.o)("LinesMesh")
    }, zW._GreasedLineMeshParser = (WW, iW) => {
      throw (0, fW.o)("GreasedLineMesh")
    }, zW._GreasedLineRibbonMeshParser = (WW, iW) => {
      throw (0, fW.o)("GreasedLineRibbonMesh")
    }, zW._TrailMeshParser = (WW, iW) => {
      throw (0, fW.o)("TrailMesh")
    }, zW._GaussianSplattingMeshParser = (WW, iW) => {
      throw (0, fW.o)("GaussianSplattingMesh")
    }, zW._GaussianSplattingPartProxyMeshParser = (WW, iW) => {
      throw (0, fW.o)("GaussianSplattingPartProxyMesh")
    }, zW._GaussianSplattingCompoundMeshParser = (WW, iW) => {
      throw (0, fW.o)("GaussianSplattingCompoundMesh")
    };
    let FW = !1;

    function QW() {
      FW || (FW = !0, (0, pW.h)("BABYLON.Mesh", zW))
    }(mW = zW.prototype).lV ?? (mW.lV = (0, fW.k)("Mesh", "lV")), (EW = zW.prototype).simplify ?? (EW.simplify = (0, fW.k)("Mesh", "simplify")), (NW = zW.prototype).thinInstanceAdd ?? (NW.thinInstanceAdd = (0, fW.k)("Mesh", "thinInstanceAdd")), (PW = zW.prototype).thinInstanceAddSelf ?? (PW.thinInstanceAddSelf = (0, fW.k)("Mesh", "thinInstanceAddSelf")), (LW = zW.prototype).thinInstanceRegisterAttribute ?? (LW.thinInstanceRegisterAttribute = (0, fW.k)("Mesh", "thinInstanceRegisterAttribute")), (cW = zW.prototype).thinInstanceSetMatrixAt ?? (cW.thinInstanceSetMatrixAt = (0, fW.k)("Mesh", "thinInstanceSetMatrixAt")), (wW = zW.prototype).thinInstanceSetAttributeAt ?? (wW.thinInstanceSetAttributeAt = (0, fW.k)("Mesh", "thinInstanceSetAttributeAt")), (tW = zW.prototype).kWW ?? (tW.kWW = (0, fW.k)("Mesh", "kWW")), (ZW = zW.prototype).thinInstanceGetWorldMatrices ?? (ZW.thinInstanceGetWorldMatrices = (0, fW.k)("Mesh", "thinInstanceGetWorldMatrices")), (xW = zW.prototype).lWW ?? (xW.lWW = (0, fW.k)("Mesh", "lWW")), (lW = zW.prototype).thinInstancePartialBufferUpdate ?? (lW.thinInstancePartialBufferUpdate = (0, fW.k)("Mesh", "thinInstancePartialBufferUpdate")), (AW = zW.prototype).thinInstanceRefreshBoundingInfo ?? (AW.thinInstanceRefreshBoundingInfo = (0, fW.k)("Mesh", "thinInstanceRefreshBoundingInfo")), (bW = zW.prototype).getEmittedParticleSystems ?? (bW.getEmittedParticleSystems = (0, fW.k)("Mesh", "getEmittedParticleSystems")), (jW = zW.prototype).getHierarchyEmittedParticleSystems ?? (jW.getHierarchyEmittedParticleSystems = (0, fW.k)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(zW.prototype, "edgesShareWithInstances") || Object.defineProperty(zW.prototype, "edgesShareWithInstances", (0, fW.h)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(zW.prototype, "OOW") || Object.defineProperty(zW.prototype, "OOW", (0, fW.h)("Mesh", "OOW")), Object.getOwnPropertyDescriptor(zW.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(zW.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, fW.h)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(zW.prototype, "OWW") || Object.defineProperty(zW.prototype, "OWW", (0, fW.h)("Mesh", "OWW"))
  },
  41927: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW
    });
    var mW = OW(41516),
      EW = OW(38241),
      NW = OW(41660),
      PW = OW(41415),
      LW = OW(38372),
      cW = OW(39911),
      wW = OW(41519),
      tW = OW(41922),
      ZW = OW(41566),
      xW = OW(41808);
    class lW {}
    let AW = (() => {
      var WW;
      let iW, OW, AW, bW, jW = [];
      return WW = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, tW.d)(this._applyToCoroutine.bind(this)), this.uniqueId = WW._UniqueIdGenerator, WW._UniqueIdGenerator++
        }
        set(WW, iW) {
          switch (WW.length || cW.b.Warn(`Setting vertex data kind '${iW}' with an empty array`), iW) {
            case NW.k.PositionKind:
              this.positions = WW;
              break;
            case NW.k.NormalKind:
              this.normals = WW;
              break;
            case NW.k.TangentKind:
              this.tangents = WW;
              break;
            case NW.k.UVKind:
              this.uvs = WW;
              break;
            case NW.k.UV2Kind:
              this.uvs2 = WW;
              break;
            case NW.k.UV3Kind:
              this.uvs3 = WW;
              break;
            case NW.k.UV4Kind:
              this.uvs4 = WW;
              break;
            case NW.k.UV5Kind:
              this.uvs5 = WW;
              break;
            case NW.k.UV6Kind:
              this.uvs6 = WW;
              break;
            case NW.k.ColorKind:
              this.colors = WW;
              break;
            case NW.k.MatricesIndicesKind:
              this.matricesIndices = WW;
              break;
            case NW.k.MatricesWeightsKind:
              this.matricesWeights = WW;
              break;
            case NW.k.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = WW;
              break;
            case NW.k.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = WW
          }
        }
        applyToMesh(WW, iW) {
          return this._applyTo(WW, iW, !1), this
        }
        applyToGeometry(WW, iW) {
          return this._applyTo(WW, iW, !1), this
        }
        updateMesh(WW) {
          return this._update(WW), this
        }
        updateGeometry(WW) {
          return this._update(WW), this
        }* _applyToCoroutine(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (WW.setVerticesData(NW.k.PositionKind, this.positions, iW), OW && (yield)), this.normals && (WW.setVerticesData(NW.k.NormalKind, this.normals, iW), OW && (yield)), this.tangents && (WW.setVerticesData(NW.k.TangentKind, this.tangents, iW), OW && (yield)), this.uvs && (WW.setVerticesData(NW.k.UVKind, this.uvs, iW), OW && (yield)), this.uvs2 && (WW.setVerticesData(NW.k.UV2Kind, this.uvs2, iW), OW && (yield)), this.uvs3 && (WW.setVerticesData(NW.k.UV3Kind, this.uvs3, iW), OW && (yield)), this.uvs4 && (WW.setVerticesData(NW.k.UV4Kind, this.uvs4, iW), OW && (yield)), this.uvs5 && (WW.setVerticesData(NW.k.UV5Kind, this.uvs5, iW), OW && (yield)), this.uvs6 && (WW.setVerticesData(NW.k.UV6Kind, this.uvs6, iW), OW && (yield)), this.colors) {
            const mW = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            WW.setVerticesData(NW.k.ColorKind, this.colors, iW, mW), this.hasVertexAlpha && void 0 !== WW.hasVertexAlpha && (WW.hasVertexAlpha = !0), OW && (yield)
          }
          if (this.matricesIndices && (WW.setVerticesData(NW.k.MatricesIndicesKind, this.matricesIndices, iW), OW && (yield)), this.matricesWeights && (WW.setVerticesData(NW.k.MatricesWeightsKind, this.matricesWeights, iW), OW && (yield)), this.matricesIndicesExtra && (WW.setVerticesData(NW.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, iW), OW && (yield)), this.matricesWeightsExtra && (WW.setVerticesData(NW.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, iW), OW && (yield)), this.indices ? (WW.setIndices(this.indices, null, iW), OW && (yield)) : WW.setIndices([], null), WW.hY && this.materialInfos && this.materialInfos.length > 1) {
            const iW = WW;
            iW.hY = [];
            for (const WW of this.materialInfos) new xW.d(WW.materialIndex, WW.verticesStart, WW.verticesCount, WW.indexStart, WW.indexCount, iW)
          }
          return this
        }
        _update(WW, iW, OW) {
          return this.positions && WW.updateVerticesData(NW.k.PositionKind, this.positions, iW, OW), this.normals && WW.updateVerticesData(NW.k.NormalKind, this.normals, iW, OW), this.tangents && WW.updateVerticesData(NW.k.TangentKind, this.tangents, iW, OW), this.uvs && WW.updateVerticesData(NW.k.UVKind, this.uvs, iW, OW), this.uvs2 && WW.updateVerticesData(NW.k.UV2Kind, this.uvs2, iW, OW), this.uvs3 && WW.updateVerticesData(NW.k.UV3Kind, this.uvs3, iW, OW), this.uvs4 && WW.updateVerticesData(NW.k.UV4Kind, this.uvs4, iW, OW), this.uvs5 && WW.updateVerticesData(NW.k.UV5Kind, this.uvs5, iW, OW), this.uvs6 && WW.updateVerticesData(NW.k.UV6Kind, this.uvs6, iW, OW), this.colors && WW.updateVerticesData(NW.k.ColorKind, this.colors, iW, OW), this.matricesIndices && WW.updateVerticesData(NW.k.MatricesIndicesKind, this.matricesIndices, iW, OW), this.matricesWeights && WW.updateVerticesData(NW.k.MatricesWeightsKind, this.matricesWeights, iW, OW), this.matricesIndicesExtra && WW.updateVerticesData(NW.k.MatricesIndicesExtraKind, this.matricesIndicesExtra, iW, OW), this.matricesWeightsExtra && WW.updateVerticesData(NW.k.MatricesWeightsExtraKind, this.matricesWeightsExtra, iW, OW), this.indices && WW.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const NW = EW.l.fA[0],
            PW = EW.l.fA[1];
          for (let LW = OW; LW < OW + mW; LW += 3) EW.q.FromArrayToRef(WW, LW, NW), EW.q.TransformCoordinatesToRef(NW, iW, PW), WW[LW] = PW.x, WW[LW + 1] = PW.y, WW[LW + 2] = PW.z
        }
        static _TransformVector3Normals(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const NW = EW.l.fA[0],
            PW = EW.l.fA[1];
          for (let LW = OW; LW < OW + mW; LW += 3) EW.q.FromArrayToRef(WW, LW, NW), EW.q.TransformNormalToRef(NW, iW, PW), WW[LW] = PW.x, WW[LW + 1] = PW.y, WW[LW + 2] = PW.z
        }
        static _TransformVector4Normals(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          const NW = EW.l.Vector4[0],
            PW = EW.l.Vector4[1];
          for (let LW = OW; LW < OW + mW; LW += 4) EW.r.FromArrayToRef(WW, LW, NW), EW.r.TransformNormalToRef(NW, iW, PW), WW[LW] = PW.x, WW[LW + 1] = PW.y, WW[LW + 2] = PW.z, WW[LW + 3] = PW.w
        }
        static _FlipFaces(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length;
          for (let mW = iW; mW < iW + OW; mW += 3) {
            const iW = WW[mW + 1];
            WW[mW + 1] = WW[mW + 2], WW[mW + 2] = iW
          }
        }
        transform(iW) {
          const OW = iW.determinant() < 0;
          return this.positions && WW._TransformVector3Coordinates(this.positions, iW), this.normals && WW._TransformVector3Normals(this.normals, iW), this.tangents && WW._TransformVector4Normals(this.tangents, iW), OW && this.indices && WW._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const iW = [];
          for (const OW of this.materialInfos) {
            const mW = new WW;
            if (this.positions && (mW.positions = this.positions.slice(3 * OW.verticesStart, 3 * (OW.verticesCount + OW.verticesStart))), this.normals && (mW.normals = this.normals.slice(3 * OW.verticesStart, 3 * (OW.verticesCount + OW.verticesStart))), this.tangents && (mW.tangents = this.tangents.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.colors && (mW.colors = this.colors.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.uvs && (mW.uvs = this.uvs.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.uvs2 && (mW.uvs2 = this.uvs2.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.uvs3 && (mW.uvs3 = this.uvs3.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.uvs4 && (mW.uvs4 = this.uvs4.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.uvs5 && (mW.uvs5 = this.uvs5.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.uvs6 && (mW.uvs6 = this.uvs6.slice(2 * OW.verticesStart, 2 * (OW.verticesCount + OW.verticesStart))), this.matricesIndices && (mW.matricesIndices = this.matricesIndices.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.matricesIndicesExtra && (mW.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.matricesWeights && (mW.matricesWeights = this.matricesWeights.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.matricesWeightsExtra && (mW.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * OW.verticesStart, 4 * (OW.verticesCount + OW.verticesStart))), this.indices) {
              mW.indices = [];
              for (let WW = OW.indexStart; WW < OW.indexStart + OW.indexCount; WW++) mW.indices.push(this.indices[WW] - OW.verticesStart)
            }
            const EW = new lW;
            EW.indexStart = 0, EW.indexCount = mW.indices ? mW.indices.length : 0, EW.materialIndex = OW.materialIndex, EW.verticesStart = 0, EW.verticesCount = (mW.positions ? mW.positions.length : 0) / 3, mW.materialInfos = [EW], iW.push(mW)
          }
          return iW
        }
        merge(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const NW = Array.isArray(WW) ? WW.map((WW => ({
            vertexData: WW
          }))) : [{
            vertexData: WW
          }];
          return (0, tW.g)(this._mergeCoroutine(void 0, NW, iW, !1, OW, mW, EW))
        }* _mergeCoroutine(iW, OW) {
          let mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            EW = arguments.length > 3 ? arguments[3] : void 0,
            PW = arguments.length > 4 ? arguments[4] : void 0,
            LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            cW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let wW = OW.map((WW => WW.vertexData)),
            tW = this;
          if (cW)
            for (const WW of wW) WW && (WW._validate(), !this.normals && WW.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && WW.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && WW.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && WW.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && WW.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && WW.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && WW.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && WW.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && WW.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && WW.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && WW.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && WW.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && WW.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const WW of wW)
            if (WW)
              if (cW) this.normals && !WW.normals && (WW.normals = new Float32Array(WW.positions.length)), this.tangents && !WW.tangents && (WW.tangents = new Float32Array(WW.positions.length / 3 * 4)), this.uvs && !WW.uvs && (WW.uvs = new Float32Array(WW.positions.length / 3 * 2)), this.uvs2 && !WW.uvs2 && (WW.uvs2 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs3 && !WW.uvs3 && (WW.uvs3 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs4 && !WW.uvs4 && (WW.uvs4 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs5 && !WW.uvs5 && (WW.uvs5 = new Float32Array(WW.positions.length / 3 * 2)), this.uvs6 && !WW.uvs6 && (WW.uvs6 = new Float32Array(WW.positions.length / 3 * 2)), this.colors && !WW.colors && (WW.colors = new Float32Array(WW.positions.length / 3 * 4), WW.colors.fill(1)), this.matricesIndices && !WW.matricesIndices && (WW.matricesIndices = new Float32Array(WW.positions.length / 3 * 4)), this.matricesWeights && !WW.matricesWeights && (WW.matricesWeights = new Float32Array(WW.positions.length / 3 * 4)), this.matricesIndicesExtra && !WW.matricesIndicesExtra && (WW.matricesIndicesExtra = new Float32Array(WW.positions.length / 3 * 4)), this.matricesWeightsExtra && !WW.matricesWeightsExtra && (WW.matricesWeightsExtra = new Float32Array(WW.positions.length / 3 * 4));
              else if (WW._validate(), !this.normals !== !WW.normals || !this.tangents !== !WW.tangents || !this.uvs !== !WW.uvs || !this.uvs2 !== !WW.uvs2 || !this.uvs3 !== !WW.uvs3 || !this.uvs4 !== !WW.uvs4 || !this.uvs5 !== !WW.uvs5 || !this.uvs6 !== !WW.uvs6 || !this.colors !== !WW.colors || !this.matricesIndices !== !WW.matricesIndices || !this.matricesWeights !== !WW.matricesWeights || !this.matricesIndicesExtra !== !WW.matricesIndicesExtra || !this.matricesWeightsExtra !== !WW.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (LW) {
            let WW, mW = 0,
              EW = 0;
            const NW = [];
            let PW = null;
            const LW = [];
            for (const OW of this.splitBasedOnMaterialID()) LW.push({
              vertexData: OW,
              transform: iW
            });
            for (const iW of OW)
              if (iW.vertexData)
                for (const WW of iW.vertexData.splitBasedOnMaterialID()) LW.push({
                  vertexData: WW,
                  transform: iW.transform
                });
            LW.sort(((WW, iW) => {
              const OW = WW.vertexData.materialInfos ? WW.vertexData.materialInfos[0].materialIndex : 0,
                mW = iW.vertexData.materialInfos ? iW.vertexData.materialInfos[0].materialIndex : 0;
              return OW > mW ? 1 : OW === mW ? 0 : -1
            }));
            for (const iW of LW) {
              const OW = iW.vertexData;
              if (WW = OW.materialInfos ? OW.materialInfos[0].materialIndex : 0, PW && PW.materialIndex === WW) PW.indexCount += OW.indices.length, PW.verticesCount += OW.positions.length / 3;
              else {
                const iW = new lW;
                iW.materialIndex = WW, iW.indexStart = mW, iW.indexCount = OW.indices.length, iW.verticesStart = EW, iW.verticesCount = OW.positions.length / 3, NW.push(iW), PW = iW
              }
              mW += OW.indices.length, EW += OW.positions.length / 3
            }
            const cW = LW.splice(0, 1)[0];
            tW = cW.vertexData, iW = cW.transform, wW = LW.map((WW => WW.vertexData)), OW = LW, this.materialInfos = NW
          }
          const ZW = wW.reduce(((WW, iW) => WW + (iW.indices?.length ?? 0)), tW.indices?.length ?? 0);
          let xW = PW || wW.some((WW => WW.indices === tW.indices)) ? tW.indices?.slice() : tW.indices;
          if (ZW > 0) {
            let NW = xW?.length ?? 0;
            if (xW || (xW = new Array(ZW)), xW.length !== ZW) {
              if (Array.isArray(xW)) xW.length = ZW;
              else {
                const WW = mW || xW instanceof Uint32Array ? new Uint32Array(ZW) : new Uint16Array(ZW);
                WW.set(xW), xW = WW
              }
              iW && iW.determinant() < 0 && WW._FlipFaces(xW, 0, NW)
            }
            let PW = tW.positions ? tW.positions.length / 3 : 0;
            for (const {
                vertexData: iW,
                transform: mW
              }
              of OW)
              if (iW.indices) {
                for (let WW = 0; WW < iW.indices.length; WW++) xW[NW + WW] = iW.indices[WW] + PW;
                mW && mW.determinant() < 0 && WW._FlipFaces(xW, NW, iW.indices.length), PW += iW.positions.length / 3, NW += iW.indices.length, EW && (yield)
              }
          }
          return this.indices = xW, this.positions = WW._MergeElement(NW.k.PositionKind, tW.positions, iW, OW.map((WW => [WW.vertexData.positions, WW.transform]))), EW && (yield), tW.normals && (this.normals = WW._MergeElement(NW.k.NormalKind, tW.normals, iW, OW.map((WW => [WW.vertexData.normals, WW.transform]))), EW && (yield)), tW.tangents && (this.tangents = WW._MergeElement(NW.k.TangentKind, tW.tangents, iW, OW.map((WW => [WW.vertexData.tangents, WW.transform]))), EW && (yield)), tW.uvs && (this.uvs = WW._MergeElement(NW.k.UVKind, tW.uvs, iW, OW.map((WW => [WW.vertexData.uvs, WW.transform]))), EW && (yield)), tW.uvs2 && (this.uvs2 = WW._MergeElement(NW.k.UV2Kind, tW.uvs2, iW, OW.map((WW => [WW.vertexData.uvs2, WW.transform]))), EW && (yield)), tW.uvs3 && (this.uvs3 = WW._MergeElement(NW.k.UV3Kind, tW.uvs3, iW, OW.map((WW => [WW.vertexData.uvs3, WW.transform]))), EW && (yield)), tW.uvs4 && (this.uvs4 = WW._MergeElement(NW.k.UV4Kind, tW.uvs4, iW, OW.map((WW => [WW.vertexData.uvs4, WW.transform]))), EW && (yield)), tW.uvs5 && (this.uvs5 = WW._MergeElement(NW.k.UV5Kind, tW.uvs5, iW, OW.map((WW => [WW.vertexData.uvs5, WW.transform]))), EW && (yield)), tW.uvs6 && (this.uvs6 = WW._MergeElement(NW.k.UV6Kind, tW.uvs6, iW, OW.map((WW => [WW.vertexData.uvs6, WW.transform]))), EW && (yield)), tW.colors && (this.colors = WW._MergeElement(NW.k.ColorKind, tW.colors, iW, OW.map((WW => [WW.vertexData.colors, WW.transform]))), (void 0 !== tW.hasVertexAlpha || OW.some((WW => void 0 !== WW.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = tW.hasVertexAlpha || OW.some((WW => WW.vertexData.hasVertexAlpha))), EW && (yield)), tW.matricesIndices && (this.matricesIndices = WW._MergeElement(NW.k.MatricesIndicesKind, tW.matricesIndices, iW, OW.map((WW => [WW.vertexData.matricesIndices, WW.transform]))), EW && (yield)), tW.matricesWeights && (this.matricesWeights = WW._MergeElement(NW.k.MatricesWeightsKind, tW.matricesWeights, iW, OW.map((WW => [WW.vertexData.matricesWeights, WW.transform]))), EW && (yield)), tW.matricesIndicesExtra && (this.matricesIndicesExtra = WW._MergeElement(NW.k.MatricesIndicesExtraKind, tW.matricesIndicesExtra, iW, OW.map((WW => [WW.vertexData.matricesIndicesExtra, WW.transform]))), EW && (yield)), tW.matricesWeightsExtra && (this.matricesWeightsExtra = WW._MergeElement(NW.k.MatricesWeightsExtraKind, tW.matricesWeightsExtra, iW, OW.map((WW => [WW.vertexData.matricesWeightsExtra, WW.transform])))), this
        }
        static _MergeElement(iW, OW, mW, EW) {
          const PW = EW.filter((WW => null !== WW[0] && void 0 !== WW[0]));
          if (!OW && 0 == PW.length) return OW;
          if (!OW) return this._MergeElement(iW, PW[0][0], PW[0][1], PW.slice(1));
          const LW = PW.reduce(((WW, iW) => WW + iW[0].length), OW.length),
            cW = iW === NW.k.PositionKind ? WW._TransformVector3Coordinates : iW === NW.k.NormalKind ? WW._TransformVector3Normals : iW === NW.k.TangentKind ? WW._TransformVector4Normals : () => {};
          if (OW instanceof Float32Array) {
            const WW = new Float32Array(LW);
            WW.set(OW), mW && cW(WW, mW, 0, OW.length);
            let iW = OW.length;
            for (const [OW, mW] of PW) WW.set(OW, iW), mW && cW(WW, mW, iW, OW.length), iW += OW.length;
            return WW
          } {
            const WW = new Array(LW);
            for (let mW = 0; mW < OW.length; mW++) WW[mW] = OW[mW];
            mW && cW(WW, mW, 0, OW.length);
            let iW = OW.length;
            for (const [OW, mW] of PW) {
              for (let mW = 0; mW < OW.length; mW++) WW[iW + mW] = OW[mW];
              mW && cW(WW, mW, iW, OW.length), iW += OW.length
            }
            return WW
          }
        }
        _validate() {
          if (!this.positions) throw new ZW.j("Positions are required", ZW.g.MeshInvalidPositionsError);
          const WW = (WW, iW) => {
              const OW = (0, NW.g)(WW);
              if (iW.length % OW !== 0) throw new Error("The " + WW + "s array count must be a multiple of " + OW);
              return iW.length / OW
            },
            iW = WW(NW.k.PositionKind, this.positions),
            OW = (OW, mW) => {
              const EW = WW(OW, mW);
              if (EW !== iW) throw new Error("The " + OW + "s element count (" + EW + ") does not match the positions count (" + iW + ")")
            };
          this.normals && OW(NW.k.NormalKind, this.normals), this.tangents && OW(NW.k.TangentKind, this.tangents), this.uvs && OW(NW.k.UVKind, this.uvs), this.uvs2 && OW(NW.k.UV2Kind, this.uvs2), this.uvs3 && OW(NW.k.UV3Kind, this.uvs3), this.uvs4 && OW(NW.k.UV4Kind, this.uvs4), this.uvs5 && OW(NW.k.UV5Kind, this.uvs5), this.uvs6 && OW(NW.k.UV6Kind, this.uvs6), this.colors && OW(NW.k.ColorKind, this.colors), this.matricesIndices && OW(NW.k.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && OW(NW.k.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && OW(NW.k.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && OW(NW.k.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const iW = this.serialize();
          return WW.Parse(iW)
        }
        serialize() {
          const WW = {};
          if (this.positions && (WW.positions = Array.from(this.positions)), this.normals && (WW.normals = Array.from(this.normals)), this.tangents && (WW.tangents = Array.from(this.tangents)), this.uvs && (WW.uvs = Array.from(this.uvs)), this.uvs2 && (WW.uvs2 = Array.from(this.uvs2)), this.uvs3 && (WW.uvs3 = Array.from(this.uvs3)), this.uvs4 && (WW.uvs4 = Array.from(this.uvs4)), this.uvs5 && (WW.uvs5 = Array.from(this.uvs5)), this.uvs6 && (WW.uvs6 = Array.from(this.uvs6)), this.colors && (WW.colors = Array.from(this.colors), WW.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (WW.matricesIndices = Array.from(this.matricesIndices), WW.matricesIndicesExpanded = !0), this.matricesWeights && (WW.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (WW.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), WW.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (WW.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), WW.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            WW.materialInfos = [];
            for (const iW of this.materialInfos) {
              const OW = {
                indexStart: iW.indexStart,
                indexCount: iW.indexCount,
                materialIndex: iW.materialIndex,
                verticesStart: iW.verticesStart,
                verticesCount: iW.verticesCount
              };
              WW.materialInfos.push(OW)
            }
          }
          return WW
        }
        static ExtractFromMesh(iW, OW, mW) {
          return WW._ExtractFrom(iW, OW, mW)
        }
        static ExtractFromGeometry(iW, OW, mW) {
          return WW._ExtractFrom(iW, OW, mW)
        }
        static _ExtractFrom(iW, OW, mW) {
          const EW = new WW;
          if (iW.isVerticesDataPresent(NW.k.PositionKind) && (EW.positions = iW.getVerticesData(NW.k.PositionKind, OW, mW)), iW.isVerticesDataPresent(NW.k.NormalKind) && (EW.normals = iW.getVerticesData(NW.k.NormalKind, OW, mW)), iW.isVerticesDataPresent(NW.k.TangentKind) && (EW.tangents = iW.getVerticesData(NW.k.TangentKind, OW, mW)), iW.isVerticesDataPresent(NW.k.UVKind) && (EW.uvs = iW.getVerticesData(NW.k.UVKind, OW, mW)), iW.isVerticesDataPresent(NW.k.UV2Kind) && (EW.uvs2 = iW.getVerticesData(NW.k.UV2Kind, OW, mW)), iW.isVerticesDataPresent(NW.k.UV3Kind) && (EW.uvs3 = iW.getVerticesData(NW.k.UV3Kind, OW, mW)), iW.isVerticesDataPresent(NW.k.UV4Kind) && (EW.uvs4 = iW.getVerticesData(NW.k.UV4Kind, OW, mW)), iW.isVerticesDataPresent(NW.k.UV5Kind) && (EW.uvs5 = iW.getVerticesData(NW.k.UV5Kind, OW, mW)), iW.isVerticesDataPresent(NW.k.UV6Kind) && (EW.uvs6 = iW.getVerticesData(NW.k.UV6Kind, OW, mW)), iW.isVerticesDataPresent(NW.k.ColorKind)) {
            const WW = iW.geometry || iW,
              PW = WW.getVertexBuffer(NW.k.ColorKind),
              LW = WW.getVerticesData(NW.k.ColorKind, OW, mW);
            if (3 === PW.getSize()) {
              const WW = new Float32Array(4 * LW.length / 3);
              for (let iW = 0, OW = 0; iW < LW.length; iW += 3, OW += 4) WW[OW] = LW[iW], WW[OW + 1] = LW[iW + 1], WW[OW + 2] = LW[iW + 2], WW[OW + 3] = 1;
              EW.colors = WW
            } else {
              if (4 !== PW.getSize()) throw new Error(`Unexpected number of color components: ${PW.getSize()}`);
              EW.colors = LW
            }
          }
          return iW.isVerticesDataPresent(NW.k.MatricesIndicesKind) && (EW.matricesIndices = iW.getVerticesData(NW.k.MatricesIndicesKind, OW, mW)), iW.isVerticesDataPresent(NW.k.MatricesWeightsKind) && (EW.matricesWeights = iW.getVerticesData(NW.k.MatricesWeightsKind, OW, mW)), iW.isVerticesDataPresent(NW.k.MatricesIndicesExtraKind) && (EW.matricesIndicesExtra = iW.getVerticesData(NW.k.MatricesIndicesExtraKind, OW, mW)), iW.isVerticesDataPresent(NW.k.MatricesWeightsExtraKind) && (EW.matricesWeightsExtra = iW.getVerticesData(NW.k.MatricesWeightsExtraKind, OW, mW)), EW.indices = iW.IEW(OW, mW), EW
        }
        static CreateRibbon(WW) {
          throw (0, PW.o)("ribbonBuilder")
        }
        static CreateBox(WW) {
          throw (0, PW.o)("boxBuilder")
        }
        static CreateTiledBox(WW) {
          throw (0, PW.o)("tiledBoxBuilder")
        }
        static CreateTiledPlane(WW) {
          throw (0, PW.o)("tiledPlaneBuilder")
        }
        static CreateSphere(WW) {
          throw (0, PW.o)("sphereBuilder")
        }
        static CreateCylinder(WW) {
          throw (0, PW.o)("cylinderBuilder")
        }
        static CreateTorus(WW) {
          throw (0, PW.o)("torusBuilder")
        }
        static CreateLineSystem(WW) {
          throw (0, PW.o)("linesBuilder")
        }
        static CreateDashedLines(WW) {
          throw (0, PW.o)("linesBuilder")
        }
        static CreateGround(WW) {
          throw (0, PW.o)("groundBuilder")
        }
        static CreateTiledGround(WW) {
          throw (0, PW.o)("groundBuilder")
        }
        static CreateGroundFromHeightMap(WW) {
          throw (0, PW.o)("groundBuilder")
        }
        static CreatePlane(WW) {
          throw (0, PW.o)("planeBuilder")
        }
        static CreateDisc(WW) {
          throw (0, PW.o)("discBuilder")
        }
        static CreatePolygon(WW, iW, OW, mW, EW, NW, LW) {
          throw (0, PW.o)("polygonBuilder")
        }
        static CreateIcoSphere(WW) {
          throw (0, PW.o)("icoSphereBuilder")
        }
        static CreatePolyhedron(WW) {
          throw (0, PW.o)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || EW.q.Up();
          throw (0, PW.o)("capsuleBuilder")
        }
        static CreateTorusKnot(WW) {
          throw (0, PW.o)("torusKnotBuilder")
        }
        static ComputeNormals(WW, iW, OW, mW) {
          let NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = !1,
            JW = !1,
            hW = !1,
            HW = !1,
            nW = 1,
            uW = 0,
            oW = null;
          mW && (TW = !!mW.facetNormals, JW = !!mW.facetPositions, hW = !!mW.facetPartitioning, nW = !0 === mW.useRightHandedSystem ? -1 : 1, uW = mW.ratio || 0, HW = !!mW.depthSort, oW = mW.distanceTo, HW && void 0 === oW && (oW = EW.q.Zero()));
          let dW = 0,
            eW = 0,
            vW = 0,
            gW = 0;
          for (hW && mW && mW.bbSize && (dW = mW.subDiv.X * uW / mW.bbSize.x, eW = mW.subDiv.Y * uW / mW.bbSize.y, vW = mW.subDiv.Z * uW / mW.bbSize.z, gW = mW.subDiv.max * mW.subDiv.max, mW.facetPartitioning.length = 0), NW = 0; NW < WW.length; NW++) OW[NW] = 0;
          const DW = iW.length / 3 | 0;
          for (NW = 0; NW < DW; NW++) {
            if (jW = 3 * iW[3 * NW], UW = jW + 1, kW = jW + 2, sW = 3 * iW[3 * NW + 1], MW = sW + 1, KW = sW + 2, SW = 3 * iW[3 * NW + 2], YW = SW + 1, yW = SW + 2, PW = WW[jW] - WW[sW], LW = WW[UW] - WW[MW], cW = WW[kW] - WW[KW], wW = WW[SW] - WW[sW], tW = WW[YW] - WW[MW], ZW = WW[yW] - WW[KW], xW = nW * (LW * ZW - cW * tW), lW = nW * (cW * wW - PW * ZW), AW = nW * (PW * tW - LW * wW), bW = Math.sqrt(xW * xW + lW * lW + AW * AW), bW = 0 === bW ? 1 : bW, xW /= bW, lW /= bW, AW /= bW, TW && mW && (mW.facetNormals[NW].x = xW, mW.facetNormals[NW].y = lW, mW.facetNormals[NW].z = AW), JW && mW && (mW.facetPositions[NW].x = (WW[jW] + WW[sW] + WW[SW]) / 3, mW.facetPositions[NW].y = (WW[UW] + WW[MW] + WW[YW]) / 3, mW.facetPositions[NW].z = (WW[kW] + WW[KW] + WW[yW]) / 3), hW && mW) {
              const iW = Math.floor((mW.facetPositions[NW].x - mW.bInfo.minimum.x * uW) * dW),
                OW = Math.floor((mW.facetPositions[NW].y - mW.bInfo.minimum.y * uW) * eW),
                EW = Math.floor((mW.facetPositions[NW].z - mW.bInfo.minimum.z * uW) * vW),
                PW = Math.floor((WW[jW] - mW.bInfo.minimum.x * uW) * dW),
                LW = Math.floor((WW[UW] - mW.bInfo.minimum.y * uW) * eW),
                cW = Math.floor((WW[kW] - mW.bInfo.minimum.z * uW) * vW),
                wW = Math.floor((WW[sW] - mW.bInfo.minimum.x * uW) * dW),
                tW = Math.floor((WW[MW] - mW.bInfo.minimum.y * uW) * eW),
                ZW = Math.floor((WW[KW] - mW.bInfo.minimum.z * uW) * vW),
                xW = Math.floor((WW[SW] - mW.bInfo.minimum.x * uW) * dW),
                lW = Math.floor((WW[YW] - mW.bInfo.minimum.y * uW) * eW),
                AW = Math.floor((WW[yW] - mW.bInfo.minimum.z * uW) * vW),
                bW = PW + mW.subDiv.max * LW + gW * cW,
                TW = wW + mW.subDiv.max * tW + gW * ZW,
                JW = xW + mW.subDiv.max * lW + gW * AW,
                hW = iW + mW.subDiv.max * OW + gW * EW;
              mW.facetPartitioning[hW] = mW.facetPartitioning[hW] ? mW.facetPartitioning[hW] : [], mW.facetPartitioning[bW] = mW.facetPartitioning[bW] ? mW.facetPartitioning[bW] : [], mW.facetPartitioning[TW] = mW.facetPartitioning[TW] ? mW.facetPartitioning[TW] : [], mW.facetPartitioning[JW] = mW.facetPartitioning[JW] ? mW.facetPartitioning[JW] : [], mW.facetPartitioning[bW].push(NW), TW != bW && mW.facetPartitioning[TW].push(NW), JW != TW && JW != bW && mW.facetPartitioning[JW].push(NW), hW != bW && hW != TW && hW != JW && mW.facetPartitioning[hW].push(NW)
            }
            if (HW && mW && mW.facetPositions) {
              const WW = mW.depthSortedFacets[NW];
              WW.ind = 3 * NW, WW.sqDistance = EW.q.DistanceSquared(mW.facetPositions[NW], oW)
            }
            OW[jW] += xW, OW[UW] += lW, OW[kW] += AW, OW[sW] += xW, OW[MW] += lW, OW[KW] += AW, OW[SW] += xW, OW[YW] += lW, OW[yW] += AW
          }
          for (NW = 0; NW < OW.length / 3; NW++) xW = OW[3 * NW], lW = OW[3 * NW + 1], AW = OW[3 * NW + 2], bW = Math.sqrt(xW * xW + lW * lW + AW * AW), bW = 0 === bW ? 1 : bW, xW /= bW, lW /= bW, AW /= bW, OW[3 * NW] = xW, OW[3 * NW + 1] = lW, OW[3 * NW + 2] = AW
        }
        static _ComputeSides(iW, OW, mW, NW, PW, LW, cW) {
          const wW = mW.length,
            tW = NW.length;
          let ZW, xW;
          switch (iW = iW || WW.DEFAULTSIDE) {
            case WW.FRONTSIDE:
              break;
            case WW.BACKSIDE:
              for (ZW = 0; ZW < wW; ZW += 3) {
                const WW = mW[ZW];
                mW[ZW] = mW[ZW + 2], mW[ZW + 2] = WW
              }
              for (xW = 0; xW < tW; xW++) NW[xW] = -NW[xW];
              break;
            case WW.DOUBLESIDE: {
              const WW = OW.length,
                iW = WW / 3;
              for (let mW = 0; mW < WW; mW++) OW[WW + mW] = OW[mW];
              for (ZW = 0; ZW < wW; ZW += 3) mW[ZW + wW] = mW[ZW + 2] + iW, mW[ZW + 1 + wW] = mW[ZW + 1] + iW, mW[ZW + 2 + wW] = mW[ZW] + iW;
              for (xW = 0; xW < tW; xW++) NW[tW + xW] = -NW[xW];
              const lW = PW.length;
              let AW;
              for (AW = 0; AW < lW; AW++) PW[AW + lW] = PW[AW];
              for (LW = LW || new EW.r(0, 0, 1, 1), cW = cW || new EW.r(0, 0, 1, 1), AW = 0, ZW = 0; ZW < lW / 2; ZW++) PW[AW] = LW.x + (LW.z - LW.x) * PW[AW], PW[AW + 1] = LW.y + (LW.w - LW.y) * PW[AW + 1], PW[AW + lW] = cW.x + (cW.z - cW.x) * PW[AW + lW], PW[AW + lW + 1] = cW.y + (cW.w - cW.y) * PW[AW + lW + 1], AW += 2;
              break
            }
          }
        }
        static Parse(iW) {
          const OW = new WW,
            mW = iW.positions;
          mW && OW.set(mW, NW.k.PositionKind);
          const EW = iW.normals;
          EW && OW.set(EW, NW.k.NormalKind);
          const PW = iW.tangents;
          PW && OW.set(PW, NW.k.TangentKind);
          const cW = iW.uvs;
          cW && OW.set(cW, NW.k.UVKind);
          const wW = iW.uvs2;
          wW && OW.set(wW, NW.k.UV2Kind);
          const tW = iW.uvs3;
          tW && OW.set(tW, NW.k.UV3Kind);
          const ZW = iW.uvs4;
          ZW && OW.set(ZW, NW.k.UV4Kind);
          const xW = iW.uvs5;
          xW && OW.set(xW, NW.k.UV5Kind);
          const AW = iW.uvs6;
          AW && OW.set(AW, NW.k.UV6Kind);
          const bW = iW.colors;
          bW && (OW.set(LW.d.CheckColors4(bW, mW.length / 3), NW.k.ColorKind), void 0 !== iW.hasVertexAlpha && (OW.hasVertexAlpha = iW.hasVertexAlpha));
          const jW = iW.matricesIndices;
          jW && OW.set(jW, NW.k.MatricesIndicesKind);
          const UW = iW.matricesWeights;
          UW && OW.set(UW, NW.k.MatricesWeightsKind);
          const kW = iW.indices;
          kW && (OW.indices = kW);
          const sW = iW.materialInfos;
          if (sW) {
            OW.materialInfos = [];
            for (const WW of sW) {
              const iW = new lW;
              iW.indexCount = WW.indexCount, iW.indexStart = WW.indexStart, iW.verticesCount = WW.verticesCount, iW.verticesStart = WW.verticesStart, iW.materialIndex = WW.materialIndex, OW.materialInfos.push(iW)
            }
          }
          return OW
        }
        static ImportVertexData(iW, OW) {
          const mW = WW.Parse(iW);
          OW.setAllVerticesData(mW, iW.updatable)
        }
      }, (() => {
        const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [wW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], OW = [wW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], AW = [wW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], bW = [wW.j.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, mW.e)(WW, null, iW, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector3Coordinates" in WW,
            get: WW => WW._TransformVector3Coordinates
          },
          metadata: EW
        }, null, jW), (0, mW.e)(WW, null, OW, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector3Normals" in WW,
            get: WW => WW._TransformVector3Normals
          },
          metadata: EW
        }, null, jW), (0, mW.e)(WW, null, AW, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: WW => "_TransformVector4Normals" in WW,
            get: WW => WW._TransformVector4Normals
          },
          metadata: EW
        }, null, jW), (0, mW.e)(WW, null, bW, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: WW => "_FlipFaces" in WW,
            get: WW => WW._FlipFaces
          },
          metadata: EW
        }, null, jW), EW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EW
        })
      })(), WW.FRONTSIDE = ((0, mW.g)(WW, jW), 0), WW.BACKSIDE = 1, WW.DOUBLESIDE = 2, WW.DEFAULTSIDE = 0, WW._UniqueIdGenerator = 0, WW
    })()
  },
  41997: (WW, iW, OW) => {
    var mW = OW(38241),
      EW = OW(39911),
      NW = OW(41818),
      PW = OW(41919),
      LW = OW(41660);
    const cW = "bakedVertexAnimationSettingsInstanced";

    function wW(WW) {
      const iW = WW.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return iW instanceof Float32Array || iW instanceof Uint16Array
    }

    function tW(WW, iW, OW, mW) {
      OW.Z5(Number.POSITIVE_INFINITY), mW.Z5(Number.NEGATIVE_INFINITY);
      for (let EW = 0; EW < 3 * iW; EW += 3) {
        const iW = WW[EW],
          NW = WW[EW + 1],
          PW = WW[EW + 2];
        iW < OW.x && (OW.x = iW), NW < OW.y && (OW.y = NW), PW < OW.z && (OW.z = PW), iW > mW.x && (mW.x = iW), NW > mW.y && (mW.y = NW), PW > mW.z && (mW.z = PW)
      }
    }

    function ZW(WW, iW, OW) {
      OW && (WW.x -= WW.x * OW.x + OW.y, WW.y -= WW.y * OW.x + OW.y, WW.z -= WW.z * OW.x + OW.y, iW.x += iW.x * OW.x + OW.y, iW.y += iW.y * OW.x + OW.y, iW.z += iW.z * OW.x + OW.y)
    }

    function xW(WW, iW, OW, EW, NW) {
      const PW = mW.l.fA[7],
        LW = mW.l.fA[8];
      for (let cW = 0; cW < 2; ++cW)
        for (let wW = 0; wW < 2; ++wW)
          for (let tW = 0; tW < 2; ++tW) PW.set(cW ? iW.x : WW.x, wW ? iW.y : WW.y, tW ? iW.z : WW.z), mW.q.TransformCoordinatesToRef(PW, OW, LW), EW.minimizeInPlace(LW), NW.maximizeInPlace(LW)
    }

    function lW(WW, iW, OW, EW, NW) {
      const PW = mW.l.fA[7];
      for (let LW = 0; LW < 3 * iW; LW += 3) mW.q.TransformCoordinatesFromFloatsToRef(WW[LW], WW[LW + 1], WW[LW + 2], OW, PW), EW.minimizeInPlace(PW), NW.maximizeInPlace(PW)
    }
    let AW = !1;
    AW || (AW = !0, PW.e.prototype.thinInstanceAdd = function(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.bD().VA().getCaps().instancedArrays) return EW.b.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(WW) ? WW.length : 1);
      const OW = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(WW))
        for (let mW = 0; mW < WW.length; ++mW) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, WW[mW], mW === WW.length - 1 && iW);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, WW, iW);
      return OW
    }, PW.e.prototype.thinInstanceAddSelf = function() {
      let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(mW.d.IdentityReadOnly, WW)
    }, PW.e.prototype.thinInstanceRegisterAttribute = function(WW, iW) {
      WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), this.removeVerticesData(WW), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[WW] = iW, this._userThinInstanceBuffersStorage.sizes[WW] = iW * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[WW] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[WW]), this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new LW.k(this.VA(), this._userThinInstanceBuffersStorage.data[WW], WW, !0, !1, iW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW])
    }, PW.e.prototype.thinInstanceSetMatrixAt = function(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || WW >= this._thinInstanceDataStorage.instancesCount) return !1;
      const mW = this._thinInstanceDataStorage.matrixData;
      return iW.copyToArray(mW, 16 * WW), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[WW] = iW), OW && (this.lWW("matrix"), this.XA || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, PW.e.prototype.thinInstanceSetAttributeAt = function(WW, iW, OW) {
      let mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[WW] || iW >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(WW, 0), this._userThinInstanceBuffersStorage.data[WW].set(OW, iW * this._userThinInstanceBuffersStorage.strides[WW]), mW && this.lWW(WW), !0)
    }, Object.defineProperty(PW.e.prototype, "OWW", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(WW) {
        const iW = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        WW <= (iW ? iW.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = WW)
      },
      enumerable: !0,
      configurable: !0
    }), PW.e.prototype._thinInstanceCreateMatrixBuffer = function(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const mW = new LW.b(this.VA(), iW, !OW, 16, !1, !0);
      for (let EW = 0; EW < 4; EW++) this.setVerticesBuffer(mW.createVertexBuffer(WW + EW, 4 * EW, 4));
      return mW
    }, PW.e.prototype.kWW = function(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (OW = OW || 16, "matrix" === WW) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = iW ? iW.length : 32 * OW, this._thinInstanceDataStorage.matrixData = iW, this._thinInstanceDataStorage.worldMatrices = null, null !== iW ? (this._thinInstanceDataStorage.instancesCount = iW.length / OW, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", iW, mW), this.XA || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.XA || this.refreshBoundingInfo());
      else if ("previousMatrix" === WW) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = iW, null !== iW && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", iW, mW));
      else if ("splatIndex" === WW && iW) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = iW.length / OW, this._userThinInstanceBuffersStorage.data[WW] = iW, this._userThinInstanceBuffersStorage.strides[WW] = OW, this._userThinInstanceBuffersStorage.sizes[WW] = iW.length;
        const mW = new LW.b(this.VA(), iW, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = mW;
        for (let iW = 0; iW < 4; iW++) this.setVerticesBuffer(mW.createVertexBuffer(WW + iW, 4 * iW, 4))
      } else WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), null === iW ? this._userThinInstanceBuffersStorage?.data[WW] && (this.removeVerticesData(WW), delete this._userThinInstanceBuffersStorage.data[WW], delete this._userThinInstanceBuffersStorage.strides[WW], delete this._userThinInstanceBuffersStorage.sizes[WW], delete this._userThinInstanceBuffersStorage.vertexBuffers[WW]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[WW] = iW, this._userThinInstanceBuffersStorage.strides[WW] = OW, this._userThinInstanceBuffersStorage.sizes[WW] = iW.length, this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new LW.k(this.VA(), iW, WW, !mW, !1, OW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
    }, PW.e.prototype.lWW = function(WW) {
      "matrix" === WW ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === WW ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === WW ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[WW], 0, this._thinInstanceDataStorage.instancesCount) : (WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[WW] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[WW].isUpdatable() && this._thinInstanceRecreateBuffer(WW), this._userThinInstanceBuffersStorage.vertexBuffers[WW].updateDirectly(this._userThinInstanceBuffersStorage.data[WW], 0)))
    }, PW.e.prototype.thinInstancePartialBufferUpdate = function(WW, iW, OW) {
      if ("matrix" === WW) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof iW ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * OW * Float32Array.BYTES_PER_ELEMENT, 16 * iW), 16 * OW) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(iW, OW));
      else if (WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[WW]) {
        const mW = this._userThinInstanceBuffersStorage.vertexBuffers[WW];
        if ("number" === typeof iW) {
          const mW = new Float32Array(this._userThinInstanceBuffersStorage.data[WW].buffer, this._userThinInstanceBuffersStorage.data[WW].byteOffset + OW * this._userThinInstanceBuffersStorage.strides[WW] * Float32Array.BYTES_PER_ELEMENT, iW * this._userThinInstanceBuffersStorage.strides[WW]);
          this._userThinInstanceBuffersStorage.vertexBuffers[WW].updateDirectly(mW, OW * this._userThinInstanceBuffersStorage.strides[WW])
        } else mW.updateDirectly(iW, OW)
      }
    }, PW.e.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const WW = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let iW = 0; iW < this._thinInstanceDataStorage.instancesCount; ++iW) this._thinInstanceDataStorage.worldMatrices[iW] = mW.d.FromArray(WW, 16 * iW)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, PW.e.prototype.thinInstanceRefreshBoundingInfo = function() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const PW = this._thinInstanceDataStorage.boundingVectors;
      if (WW || !this.rawBoundingInfo) {
        if (PW.length = 0, EW && function(WW, iW, OW) {
            const EW = WW._userThinInstanceBuffersStorage,
              PW = EW?.data[cW],
              AW = EW?.strides[cW];
            if (!PW || !AW || AW < 4 || !wW(WW)) return !1;
            const bW = WW._thinInstanceDataStorage.matrixData;
            if (!bW) return !1;
            const jW = {},
              UW = mW.l.Vector4[0],
              kW = mW.l.fA[1],
              sW = mW.l.fA[2],
              MW = mW.l.fA[3],
              KW = mW.l.fA[4],
              SW = mW.l.fA[5],
              YW = mW.l.fA[6],
              yW = mW.l.Matrix[2],
              TW = WW.geometry ? WW.geometry.boundingBias : null,
              JW = WW.getTotalVertices();
            kW.Z5(Number.POSITIVE_INFINITY), sW.Z5(Number.NEGATIVE_INFINITY), MW.Z5(Number.POSITIVE_INFINITY), KW.Z5(Number.NEGATIVE_INFINITY);
            for (let NW = 0; NW < WW._thinInstanceDataStorage.instancesCount; ++NW) {
              const iW = NW * AW;
              UW.set(PW[iW], PW[iW + 1], PW[iW + 2], PW[iW + 3]);
              const EW = WW._getData({
                applyMorph: OW,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: UW,
                updatePositionsArray: !1,
                cache: jW
              }, null, LW.k.PositionKind);
              if (!EW) return !1;
              tW(EW, JW, SW, YW), ZW(SW, YW, TW), kW.minimizeInPlace(SW), sW.maximizeInPlace(YW), mW.d.FromArrayToRef(bW, 16 * NW, yW), TW ? xW(SW, YW, yW, MW, KW) : lW(EW, JW, yW, MW, KW)
            }
            return !(!isFinite(kW.x) || !isFinite(MW.x)) && (WW.KV().reConstruct(MW, KW), WW.rawBoundingInfo = new NW.b(kW, sW), function(WW, iW) {
              WW.length = 0;
              for (let OW = 0; OW < iW.boundingBox.vectors.length; ++OW) WW.push(iW.boundingBox.vectors[OW].clone())
            }(iW, WW.rawBoundingInfo), WW._updateBoundingInfo(), !0)
          }(this, PW, OW)) return;
        EW && this.bakedVertexAnimationManager?.isEnabled && wW(this) ? this.refreshBoundingInfo({
          applySkeleton: iW,
          applyMorph: OW,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(iW, OW);
        const WW = this.KV();
        this.rawBoundingInfo = new NW.b(WW.minimum, WW.maximum)
      }
      const AW = this.KV(),
        bW = this._thinInstanceDataStorage.matrixData;
      if (0 === PW.length)
        for (let mW = 0; mW < AW.boundingBox.vectors.length; ++mW) PW.push(AW.boundingBox.vectors[mW].clone());
      mW.l.fA[0].Z5(Number.POSITIVE_INFINITY), mW.l.fA[1].Z5(Number.NEGATIVE_INFINITY);
      for (let NW = 0; NW < this._thinInstanceDataStorage.instancesCount; ++NW) {
        mW.d.FromArrayToRef(bW, 16 * NW, mW.l.Matrix[0]);
        for (let WW = 0; WW < PW.length; ++WW) mW.q.TransformCoordinatesToRef(PW[WW], mW.l.Matrix[0], mW.l.fA[2]), mW.l.fA[0].minimizeInPlace(mW.l.fA[2]), mW.l.fA[1].maximizeInPlace(mW.l.fA[2])
      }
      AW.reConstruct(mW.l.fA[0], mW.l.fA[1]), this._updateBoundingInfo()
    }, PW.e.prototype._thinInstanceRecreateBuffer = function(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === WW ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, iW)) : "previousMatrix" === WW ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, iW)) : (WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[WW]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new LW.k(this.VA(), this._userThinInstanceBuffersStorage.data[WW], WW, !iW, !1, this._userThinInstanceBuffersStorage.strides[WW], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
    }, PW.e.prototype._thinInstanceUpdateBufferSize = function(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      WW === LW.k.ColorKind && (WW = LW.k.ColorInstanceKind);
      const OW = "matrix" === WW;
      if (!OW && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[WW])) return;
      const mW = OW ? 16 : this._userThinInstanceBuffersStorage.strides[WW],
        EW = OW ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[WW];
      let NW = OW ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[WW];
      const PW = (this._thinInstanceDataStorage.instancesCount + iW) * mW;
      let cW = EW;
      for (; cW < PW;) cW *= 2;
      if (!NW || EW != cW) {
        if (NW) {
          const WW = new Float32Array(cW);
          WW.set(NW, 0), NW = WW
        } else NW = new Float32Array(cW);
        OW ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", NW, !1), this._thinInstanceDataStorage.matrixData = NW, this._thinInstanceDataStorage.matrixBufferSize = cW, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", NW, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[WW]?.dispose(), this._userThinInstanceBuffersStorage.data[WW] = NW, this._userThinInstanceBuffersStorage.sizes[WW] = cW, this._userThinInstanceBuffersStorage.vertexBuffers[WW] = new LW.k(this.VA(), NW, WW, !0, !1, mW, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[WW]))
      }
    }, PW.e.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, PW.e.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  41948: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => kW,
      f: () => bW
    });
    var mW, EW, NW, PW, LW = OW(41516),
      cW = OW(41519),
      wW = OW(41538),
      tW = OW(38276),
      ZW = OW(38241),
      xW = OW(41732),
      lW = OW(38299),
      AW = OW(41415);
    let bW = (() => {
      var WW;
      let iW, OW, mW, EW, NW, PW, lW, AW, bW, jW = xW.d,
        UW = [],
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        TW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [];
      return WW = class extends jW {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(iW) {
          this._billboardMode !== iW && (this._billboardMode = iW, this._cache.useBillboardPosition = 0 !== (this._billboardMode & WW.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(WW) {
          this._infiniteDistance !== WW && (this._infiniteDistance = WW)
        }
        constructor(iW) {
          let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(iW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new ZW.q(0, 0, 1), this._up = new ZW.q(0, 1, 0), this._right = new ZW.q(1, 0, 0), this._position = (0, LW.g)(this, UW, ZW.q.Zero()), this._rotation = ((0, LW.g)(this, kW), (0, LW.g)(this, sW, ZW.q.Zero())), this._rotationQuaternion = ((0, LW.g)(this, MW), (0, LW.g)(this, KW, null)), this._scaling = ((0, LW.g)(this, SW), (0, LW.g)(this, YW, ZW.q.One())), this._transformToBoneReferal = ((0, LW.g)(this, yW), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, LW.g)(this, TW, WW.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, LW.g)(this, JW), (0, LW.g)(this, hW, 1)), this._infiniteDistance = ((0, LW.g)(this, HW), (0, LW.g)(this, nW, !1)), this.ignoreNonUniformScaling = ((0, LW.g)(this, uW), (0, LW.g)(this, oW, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, LW.g)(this, dW), (0, LW.g)(this, eW, !1)), this._poseMatrix = ((0, LW.g)(this, vW), null), this._localMatrix = ZW.d.Zero(), this._usePivotMatrix = !1, this._absolutePosition = ZW.q.Zero(), this._absoluteScaling = ZW.q.Zero(), this._absoluteRotationQuaternion = ZW.g.Identity(), this._pivotMatrix = ZW.d.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new tW.e, this._nonUniformScaling = !1, OW && this.bD().addTransformNode(this)
        }
        getClassName() {
          return "TransformNode"
        }
        get position() {
          return this._position
        }
        set position(WW) {
          this._position = WW, this._markAsDirtyInternal()
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
        set rotation(WW) {
          this._rotation = WW, this._rotationQuaternion = null, this._markAsDirtyInternal()
        }
        get YZ() {
          return this._scaling
        }
        set YZ(WW) {
          this._scaling = WW, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(WW) {
          this._rotationQuaternion = WW, WW && this._rotation.Z5(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return ZW.q.TransformNormalFromFloatsToRef(0, 0, this.bD().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return ZW.q.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return ZW.q.TransformNormalFromFloatsToRef(this.bD().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(WW) {
          return this._poseMatrix ? (this._poseMatrix.HJ(WW), this) : (this._poseMatrix = WW.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = ZW.d.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const iW = this._cache;
          return this._billboardMode === iW.billboardMode && this._billboardMode === WW.BILLBOARDMODE_NONE && (!iW.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
        }
        _initCache() {
          super._initCache();
          const WW = this._cache;
          WW.localMatrixUpdated = !1, WW.billboardMode = -1, WW.infiniteDistance = !1, WW.useBillboardPosition = !1
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
        setPreTransformMatrix(WW) {
          return this.setPivotMatrix(WW, !1)
        }
        setPivotMatrix(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.HJ(WW), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = iW, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = ZW.d.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            iW = arguments.length > 1 ? arguments[1] : void 0,
            OW = arguments.length > 2 ? arguments[2] : void 0;
          const mW = this.clone("Clone of " + (this.name || this.id), WW || this.parent, !0);
          mW && OW && OW(this, mW);
          for (const EW of this.getChildTransformNodes(!0)) EW.instantiateHierarchy(mW, iW, OW);
          return mW
        }
        dD() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return WW ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Z5(0), this._rotationQuaternion = this._rotationQuaternion || ZW.g.Identity(), WW.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = WW, this._absolutePosition.yWW(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get sLW() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(WW) {
          if (!WW) return this;
          let iW, OW, mW;
          if (void 0 === WW.x) {
            if (arguments.length < 3) return this;
            iW = arguments[0], OW = arguments[1], mW = arguments[2]
          } else iW = WW.x, OW = WW.y, mW = WW.z;
          if (this.parent) {
            const WW = ZW.l.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(WW), ZW.q.TransformCoordinatesFromFloatsToRef(iW, OW, mW, WW, this.position)
          } else this.position.x = iW, this.position.y = OW, this.position.z = mW;
          return this._absolutePosition.HJ(WW), this
        }
        setPositionWithLocalVector(WW) {
          return this.computeWorldMatrix(), this.position = ZW.q.TransformNormal(WW, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const WW = ZW.l.Matrix[0];
          return this._localMatrix.invertToRef(WW), ZW.q.TransformNormal(this.position, WW)
        }
        locallyTranslate(WW) {
          return this.computeWorldMatrix(!0), this.position = ZW.q.TransformCoordinates(WW, this._localMatrix), this
        }
        lookAt(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const PW = WW._LookAtVectorCache,
            LW = 0 === NW ? this.position : this.getAbsolutePosition();
          if (iW.subtractToRef(LW, PW), this.setDirection(PW, OW, mW, EW), 1 === NW && this.parent)
            if (this.rotationQuaternion) {
              const WW = ZW.l.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(WW);
              const iW = ZW.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(iW), iW.invert(), WW.multiplyToRef(iW, WW), this.rotationQuaternion.fromRotationMatrix(WW)
            } else {
              const WW = ZW.l.Quaternion[0];
              ZW.g.FromEulerVectorToRef(this.rotation, WW);
              const iW = ZW.l.Matrix[0];
              WW.toRotationMatrix(iW);
              const OW = ZW.l.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(OW), OW.invert(), iW.multiplyToRef(OW, iW), WW.fromRotationMatrix(iW), WW.toEulerAnglesToRef(this.rotation)
            } return this
        }
        uF(WW) {
          const iW = ZW.q.Zero();
          return this.getDirectionToRef(WW, iW), iW
        }
        getDirectionToRef(WW, iW) {
          return ZW.q.TransformNormalToRef(WW, this.getWorldMatrix(), iW), this
        }
        setDirection(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const EW = -Math.atan2(WW.z, WW.x) + Math.PI / 2,
            NW = Math.sqrt(WW.x * WW.x + WW.z * WW.z),
            PW = -Math.atan2(WW.y, NW);
          return this.rotationQuaternion ? ZW.g.RotationYawPitchRollToRef(EW + iW, PW + OW, mW, this.rotationQuaternion) : (this.rotation.x = PW + OW, this.rotation.y = EW + iW, this.rotation.z = mW), this
        }
        setPivotPoint(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.bD().getRenderId() && this.computeWorldMatrix(!0);
          const OW = this.getWorldMatrix();
          if (1 == iW) {
            const iW = ZW.l.Matrix[0];
            OW.invertToRef(iW), WW = ZW.q.TransformCoordinates(WW, iW)
          }
          return this.setPivotMatrix(ZW.d.Translation(-WW.x, -WW.y, -WW.z), !0)
        }
        getPivotPoint() {
          const WW = ZW.q.Zero();
          return this.getPivotPointToRef(WW), WW
        }
        getPivotPointToRef(WW) {
          return WW.x = -this._pivotMatrix.m[12], WW.y = -this._pivotMatrix.m[13], WW.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const WW = ZW.q.Zero();
          return this.getAbsolutePivotPointToRef(WW), WW
        }
        getAbsolutePivotPointToRef(WW) {
          return this.getPivotPointToRef(WW), ZW.q.TransformCoordinatesToRef(WW, this.getWorldMatrix(), WW), this
        }
        xOW(WW) {
          if (this._isDirty) return this;
          if (this._children)
            for (const iW of this._children) iW.xOW(WW);
          return super.xOW(WW)
        }
        setParent(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!iW && !this.parent) return this;
          const EW = ZW.l.Quaternion[0],
            NW = ZW.l.fA[0],
            PW = ZW.l.fA[1],
            LW = ZW.l.Matrix[1];
          ZW.d.IdentityToRef(LW);
          const cW = ZW.l.Matrix[0];
          this.computeWorldMatrix(!0);
          let wW = this.rotationQuaternion;
          return wW || (wW = WW._TmpRotation, ZW.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, wW)), ZW.d.ComposeToRef(this.YZ, wW, this.position, cW), this.parent && cW.multiplyToRef(this.parent.computeWorldMatrix(!0), cW), iW && (iW.computeWorldMatrix(!0).invertToRef(LW), cW.multiplyToRef(LW, cW)), cW.decompose(PW, EW, NW, OW ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.HJ(EW) : EW.toEulerAnglesToRef(this.rotation), this.YZ.HJ(PW), this.position.HJ(NW), this.parent = iW, mW && this.setPivotMatrix(ZW.d.Identity()), this
        }
        addChild(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return WW.setParent(this, iW), this
        }
        removeChild(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return WW.parent !== this || WW.setParent(null, iW), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(WW) {
          return this._nonUniformScaling !== WW && (this._nonUniformScaling = WW, !0)
        }
        attachToBone(WW, iW) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = iW, this.parent = WW, WW.getSkeleton().prepare(!0), WW.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = WW ? this._currentParentWhenAttachingToBone : null, this) : (WW && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(iW, OW, mW) {
          let EW;
          if (iW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.Z5(0)), mW && 0 !== mW) {
            if (this.parent) {
              const WW = this.parent.getWorldMatrix(),
                mW = ZW.l.Matrix[0];
              WW.invertToRef(mW), iW = ZW.q.TransformNormal(iW, mW), WW.determinant() < 0 && (OW *= -1)
            }
            EW = ZW.g.RotationAxisToRef(iW, OW, WW._RotationAxisCache), EW.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else EW = ZW.g.RotationAxisToRef(iW, OW, WW._RotationAxisCache), this.rotationQuaternion.multiplyToRef(EW, this.rotationQuaternion);
          return this
        }
        rotateAround(WW, iW, OW) {
          iW.normalize(), this.rotationQuaternion || (this.rotationQuaternion = ZW.g.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Z5(0));
          const mW = ZW.l.fA[0],
            EW = ZW.l.fA[1],
            NW = ZW.l.fA[2],
            PW = ZW.l.Quaternion[0],
            LW = ZW.l.Matrix[0],
            cW = ZW.l.Matrix[1],
            wW = ZW.l.Matrix[2],
            tW = ZW.l.Matrix[3];
          return WW.subtractToRef(this.position, mW), ZW.d.TranslationToRef(mW.x, mW.y, mW.z, LW), ZW.d.TranslationToRef(-mW.x, -mW.y, -mW.z, cW), ZW.d.RotationAxisToRef(iW, OW, wW), cW.multiplyToRef(wW, tW), tW.multiplyToRef(LW, tW), tW.decompose(EW, PW, NW), this.position.addInPlace(NW), PW.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(WW, iW, OW) {
          const mW = WW.scale(iW);
          if (OW && 0 !== OW) this.setAbsolutePosition(this.getAbsolutePosition().add(mW));
          else {
            const WW = this.getPositionExpressedInLocalSpace().add(mW);
            this.setPositionWithLocalVector(WW)
          }
          return this
        }
        addRotation(WW, iW, OW) {
          let mW;
          this.rotationQuaternion ? mW = this.rotationQuaternion : (mW = ZW.l.Quaternion[1], ZW.g.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, mW));
          const EW = ZW.l.Quaternion[0];
          return ZW.g.RotationYawPitchRollToRef(iW, WW, OW, EW), mW.multiplyInPlace(EW), this.rotationQuaternion || mW.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== WW.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const mW = this.bD().getRenderId();
          if (!this._isDirty && !iW && (this._currentRenderId === mW || this.isSynchronized())) return this._currentRenderId = mW, this._worldMatrix;
          OW = OW || this.bD().activeCamera, this._updateCache();
          const EW = this._cache;
          EW.pivotMatrixUpdated = !1, EW.billboardMode = this.billboardMode, EW.infiniteDistance = this.infiniteDistance, EW.parent = this._parentNode, this._currentRenderId = mW, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const NW = this._getEffectiveParent(),
            PW = WW._TmpScaling;
          let LW, cW = this._position;
          if (this._infiniteDistance && !this.parent && OW) {
            const iW = OW.getWorldMatrix().m;
            cW = WW._TmpTranslation, cW.yWW(this._position.x + iW[12], this._position.y + iW[13], this._position.z + iW[14])
          }
          if (PW.yWW(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, LW = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(ZW.g.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.yWW(0, 0, 0))
            }
          } else LW = WW._TmpRotation, ZW.g.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, LW);
          if (this._usePivotMatrix) {
            const WW = ZW.l.Matrix[1];
            ZW.d.ScalingToRef(PW.x, PW.y, PW.z, WW);
            const iW = ZW.l.Matrix[0];
            LW.toRotationMatrix(iW), this._pivotMatrix.multiplyToRef(WW, ZW.l.Matrix[4]), ZW.l.Matrix[4].multiplyToRef(iW, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(cW.x, cW.y, cW.z)
          } else ZW.d.ComposeToRef(PW, LW, cW, this._localMatrix);
          if (NW && NW.getWorldMatrix) {
            if (iW && NW.computeWorldMatrix(iW), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const WW = this.parent;
                WW.getSkeleton().prepare(), WW.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), ZW.l.Matrix[7])
              } else ZW.l.Matrix[7].HJ(NW.getWorldMatrix());
              const iW = ZW.l.fA[5],
                OW = ZW.l.fA[6],
                mW = ZW.l.Quaternion[0];
              ZW.l.Matrix[7].decompose(OW, mW, iW), ZW.d.ScalingToRef(OW.x, OW.y, OW.z, ZW.l.Matrix[7]), ZW.l.Matrix[7].setTranslation(iW), WW.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(mW, iW), this._localMatrix.setTranslation(iW)), this._localMatrix.multiplyToRef(ZW.l.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const WW = this.parent;
              WW.getSkeleton().prepare(), this._localMatrix.multiplyToRef(WW.getFinalMatrix(), ZW.l.Matrix[6]), ZW.l.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(NW.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.HJ(this._localMatrix);
          if (OW && this.billboardMode)
            if (EW.useBillboardPosition) {
              const iW = ZW.l.fA[0];
              this._worldMatrix.getTranslationToRef(iW);
              const mW = OW.globalPosition;
              this._worldMatrix.invertToRef(ZW.l.Matrix[1]);
              const EW = ZW.l.fA[1];
              ZW.q.TransformCoordinatesToRef(mW, ZW.l.Matrix[1], EW), EW.normalize();
              const NW = -Math.atan2(EW.z, EW.x) + Math.PI / 2,
                PW = Math.sqrt(EW.x * EW.x + EW.z * EW.z),
                LW = -Math.atan2(EW.y, PW);
              if (ZW.g.RotationYawPitchRollToRef(NW, LW, 0, ZW.l.Quaternion[0]), (this.billboardMode & WW.BILLBOARDMODE_ALL) !== WW.BILLBOARDMODE_ALL) {
                const iW = ZW.l.fA[1];
                ZW.l.Quaternion[0].toEulerAnglesToRef(iW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (iW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (iW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMODE_Z && (iW.z = 0), ZW.d.RotationYawPitchRollToRef(iW.y, iW.x, iW.z, ZW.l.Matrix[0])
              } else ZW.d.FromQuaternionToRef(ZW.l.Quaternion[0], ZW.l.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZW.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZW.l.fA[0])
            } else {
              const iW = ZW.l.fA[0];
              this._worldMatrix.getTranslationToRef(iW), ZW.l.Matrix[1].HJ(OW.getViewMatrix());
              const mW = this.bD().useRightHandedSystem;
              if (mW && ZW.l.Matrix[1].multiplyToRef(WW._TmpRHRestore, ZW.l.Matrix[1]), ZW.l.Matrix[1].setTranslationFromFloats(0, 0, 0), ZW.l.Matrix[1].invertToRef(ZW.l.Matrix[0]), (this.billboardMode & WW.BILLBOARDMODE_ALL) !== WW.BILLBOARDMODE_ALL) {
                ZW.l.Matrix[0].decompose(void 0, ZW.l.Quaternion[0], void 0);
                const iW = ZW.l.fA[1];
                ZW.l.Quaternion[0].toEulerAnglesToRef(iW), (this.billboardMode & WW.BILLBOARDMODE_X) !== WW.BILLBOARDMODE_X && (iW.x = 0), (this.billboardMode & WW.BILLBOARDMODE_Y) !== WW.BILLBOARDMODE_Y && (iW.y = 0), (this.billboardMode & WW.BILLBOARDMODE_Z) !== WW.BILLBOARDMODE_Z && (iW.z = 0), mW && (iW.y += Math.PI), ZW.d.RotationYawPitchRollToRef(iW.y, iW.x, iW.z, ZW.l.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(ZW.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(ZW.l.fA[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : NW && NW._nonUniformScaling ? this._updateNonUniformScalingState(NW._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.yWW(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = ZW.d.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), WW) {
            const WW = this.getChildren();
            for (let iW = 0; iW < WW.length; ++iW) {
              const OW = WW[iW];
              if (OW) {
                OW.computeWorldMatrix();
                const WW = ZW.l.Matrix[0];
                OW._localMatrix.multiplyToRef(this._localMatrix, WW);
                const iW = ZW.l.Quaternion[0];
                WW.decompose(OW.YZ, iW, OW.position), OW.rotationQuaternion ? OW.rotationQuaternion.HJ(iW) : iW.toEulerAnglesToRef(OW.rotation)
              }
            }
          }
          this.YZ.yWW(1, 1, 1), this.position.yWW(0, 0, 0), this.rotation.yWW(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = ZW.g.Identity()), this._worldMatrix = ZW.d.Identity()
        }
        _afterComputeWorldMatrix() {}
        registerAfterWorldMatrixUpdate(WW) {
          return this.onAfterWorldMatrixUpdateObservable.add(WW), this
        }
        unregisterAfterWorldMatrixUpdate(WW) {
          return this.onAfterWorldMatrixUpdateObservable.removeCallback(WW), this
        }
        getPositionInCameraSpace() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return WW || (WW = this.bD().activeCamera), ZW.q.TransformCoordinates(this.getAbsolutePosition(), WW.getViewMatrix())
        }
        getDistanceToCamera() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return WW || (WW = this.bD().activeCamera), this.getAbsolutePosition().subtract(WW.globalPosition).length()
        }
        clone(iW, OW, mW) {
          const EW = wW.d.Clone((() => new WW(iW, this.bD())), this);
          if (EW.name = iW, EW.id = iW, OW && (EW.parent = OW), !mW) {
            const WW = this.getDescendants(!0);
            for (let OW = 0; OW < WW.length; OW++) {
              const mW = WW[OW];
              mW.clone && mW.clone(iW + "." + mW.name, EW)
            }
          }
          return EW
        }
        serialize(WW) {
          const iW = wW.d.Serialize(this, WW);
          return iW.type = this.getClassName(), iW.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(iW), iW.localMatrix = this.getPivotMatrix().wEW(), iW.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (iW.dD = !0), wW.d.AppendSerializedAnimations(this, iW), iW.kj = this.serializeAnimationRanges(), iW
        }
        getChildTransformNodes(iW, OW) {
          const mW = [];
          return this._getDescendants(mW, iW, (iW => (!OW || OW(iW)) && iW instanceof WW)), mW
        }
        dispose(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.bD().stopAnimation(this), this.bD().removeTransformNode(this), this._parentContainer) {
            const WW = this._parentContainer.transformNodes.indexOf(this);
            WW > -1 && this._parentContainer.transformNodes.splice(WW, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), WW) {
            const WW = this.getChildTransformNodes(!0);
            for (const iW of WW) iW.parent = null, iW.computeWorldMatrix(!0)
          }
          super.dispose(WW, iW)
        }
        normalizeToUnitCube() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0,
            mW = null,
            EW = null;
          iW && (this.rotationQuaternion ? (EW = this.rotationQuaternion.clone(), this.rotationQuaternion.yWW(0, 0, 0, 1)) : this.rotation && (mW = this.rotation.clone(), this.rotation.yWW(0, 0, 0)));
          const NW = this.getHierarchyBoundingVectors(WW, OW),
            PW = NW.max.subtract(NW.min),
            LW = Math.max(PW.x, PW.y, PW.z);
          if (0 === LW) return this;
          const cW = 1 / LW;
          return this.YZ.scaleInPlace(cW), iW && (this.rotationQuaternion && EW ? this.rotationQuaternion.HJ(EW) : this.rotation && mW && this.rotation.HJ(mW)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const wW = "function" === typeof Symbol && Symbol.metadata ? Object.create(jW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, cW.K)("position")], OW = [(0, cW.K)("rotation")], mW = [(0, cW.C)("rotationQuaternion")], EW = [(0, cW.K)("YZ")], NW = [(0, cW.M)("billboardMode")], PW = [(0, cW.M)()], lW = [(0, cW.M)("infiniteDistance")], AW = [(0, cW.M)()], bW = [(0, cW.M)()], (0, LW.e)(null, null, iW, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: WW => "_position" in WW,
            get: WW => WW._position,
            set: (WW, iW) => {
              WW._position = iW
            }
          },
          metadata: wW
        }, UW, kW), (0, LW.e)(null, null, OW, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: WW => "_rotation" in WW,
            get: WW => WW._rotation,
            set: (WW, iW) => {
              WW._rotation = iW
            }
          },
          metadata: wW
        }, sW, MW), (0, LW.e)(null, null, mW, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: WW => "_rotationQuaternion" in WW,
            get: WW => WW._rotationQuaternion,
            set: (WW, iW) => {
              WW._rotationQuaternion = iW
            }
          },
          metadata: wW
        }, KW, SW), (0, LW.e)(null, null, EW, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "_scaling" in WW,
            get: WW => WW._scaling,
            set: (WW, iW) => {
              WW._scaling = iW
            }
          },
          metadata: wW
        }, YW, yW), (0, LW.e)(null, null, NW, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_billboardMode" in WW,
            get: WW => WW._billboardMode,
            set: (WW, iW) => {
              WW._billboardMode = iW
            }
          },
          metadata: wW
        }, TW, JW), (0, LW.e)(null, null, PW, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: WW => "scalingDeterminant" in WW,
            get: WW => WW.scalingDeterminant,
            set: (WW, iW) => {
              WW.scalingDeterminant = iW
            }
          },
          metadata: wW
        }, hW, HW), (0, LW.e)(null, null, lW, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "_infiniteDistance" in WW,
            get: WW => WW._infiniteDistance,
            set: (WW, iW) => {
              WW._infiniteDistance = iW
            }
          },
          metadata: wW
        }, nW, uW), (0, LW.e)(null, null, AW, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "ignoreNonUniformScaling" in WW,
            get: WW => WW.ignoreNonUniformScaling,
            set: (WW, iW) => {
              WW.ignoreNonUniformScaling = iW
            }
          },
          metadata: wW
        }, oW, dW), (0, LW.e)(null, null, bW, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: WW => "reIntegrateRotationIntoRotationQuaternion" in WW,
            get: WW => WW.reIntegrateRotationIntoRotationQuaternion,
            set: (WW, iW) => {
              WW.reIntegrateRotationIntoRotationQuaternion = iW
            }
          },
          metadata: wW
        }, eW, vW), wW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wW
        })
      })(), WW.BILLBOARDMODE_NONE = 0, WW.BILLBOARDMODE_X = 1, WW.BILLBOARDMODE_Y = 2, WW.BILLBOARDMODE_Z = 4, WW.BILLBOARDMODE_ALL = 7, WW.BILLBOARDMODE_USE_POSITION = 128, WW.BillboardUseParentOrientation = !1, WW._TmpRotation = ZW.g.Zero(), WW._TmpScaling = ZW.q.Zero(), WW._TmpTranslation = ZW.q.Zero(), WW._TmpRHRestore = ZW.d.Scaling(1, 1, -1), WW._LookAtVectorCache = new ZW.q(0, 0, 0), WW._RotationAxisCache = new ZW.g, WW
    })();

    function jW(WW, iW, OW) {
      const mW = wW.d.Parse((() => new bW(WW.name, iW)), WW, iW, OW);
      if (WW.localMatrix ? mW.setPreTransformMatrix(ZW.d.FromArray(WW.localMatrix)) : WW.pivotMatrix && mW.setPivotMatrix(ZW.d.FromArray(WW.pivotMatrix)), mW.WK(WW.isEnabled), mW._waitingParsedUniqueId = WW.uniqueId, void 0 !== WW.parentId && (mW._waitingParentId = WW.parentId), void 0 !== WW.parentInstanceIndex && (mW._waitingParentInstanceIndex = WW.parentInstanceIndex), WW.dD && (mW._waitingFreezeWorldMatrix = WW.dD), WW.animations) {
        for (let iW = 0; iW < WW.animations.length; iW++) {
          const OW = WW.animations[iW],
            EW = (0, lW.d)("BABYLON.Animation");
          EW && mW.animations.push(EW.Parse(OW))
        }
        xW.d.ParseAnimationRanges(mW, WW, iW)
      }
      return WW.autoAnimate && iW.beginAnimation(mW, WW.autoAnimateFrom, WW.autoAnimateTo, WW.autoAnimateLoop, WW.autoAnimateSpeed || 1), mW
    }
    let UW = !1;

    function kW() {
      UW || (UW = !0, bW.Parse = jW)
    }(mW = bW.prototype).jB ?? (mW.jB = (0, AW.k)("TransformNode", "jB")), (EW = bW.prototype).applyImpulse ?? (EW.applyImpulse = (0, AW.k)("TransformNode", "applyImpulse")), (NW = bW.prototype).applyAngularImpulse ?? (NW.applyAngularImpulse = (0, AW.k)("TransformNode", "applyAngularImpulse")), (PW = bW.prototype).applyTorque ?? (PW.applyTorque = (0, AW.k)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(bW.prototype, "physicsBody") || Object.defineProperty(bW.prototype, "physicsBody", (0, AW.h)("TransformNode", "physicsBody"))
  },
  41922: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      try {
        const mW = WW.next();
        mW.done ? iW(mW) : mW.value ? mW.value.then((() => {
          mW.value = void 0, iW(mW)
        }), OW) : iW(mW)
      } catch (mW) {
        OW(mW)
      }
    }

    function EW() {
      let WW, iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (OW, EW, NW) => {
        const PW = performance.now();
        void 0 === WW || PW - WW > iW ? (WW = PW, setTimeout((() => {
          mW(OW, EW, NW)
        }), 0)) : mW(OW, EW, NW)
      }
    }

    function NW(WW, iW, OW, mW, EW) {
      const NW = () => {
        let PW;
        const LW = WW => {
          WW.done ? OW(WW.value) : void 0 === PW ? PW = !0 : NW()
        };
        do {
          PW = void 0, EW && EW.aborted ? mW(new Error("Aborted")) : iW(WW, LW, mW), void 0 === PW && (PW = !1)
        } while (PW)
      };
      NW()
    }

    function PW(WW, iW) {
      let OW;
      return NW(WW, mW, (WW => OW = WW), (WW => {
        throw WW
      }), iW), OW
    }
    async function LW(WW, iW, OW) {
      return await new Promise(((mW, EW) => {
        NW(WW, iW, mW, EW, OW)
      }))
    }

    function cW(WW, iW) {
      return function() {
        return PW(WW(...arguments), iW)
      }
    }
    OW.d(iW, {
      b: () => EW,
      d: () => cW,
      f: () => LW,
      g: () => PW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);